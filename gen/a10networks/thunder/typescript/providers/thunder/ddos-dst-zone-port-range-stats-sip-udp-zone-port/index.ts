// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstZonePortRangeStatsSipUdpZonePortConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#id DdosDstZonePortRangeStatsSipUdpZonePort#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Port-Range End Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#port_range_end DdosDstZonePortRangeStatsSipUdpZonePort#port_range_end}
  */
  readonly portRangeEnd: number;
  /**
  * Port-Range Start Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#port_range_start DdosDstZonePortRangeStatsSipUdpZonePort#port_range_start}
  */
  readonly portRangeStart: number;
  /**
  * 'dns-tcp': DNS-TCP Port; 'dns-udp': DNS-UDP Port; 'http': HTTP Port; 'tcp': TCP Port; 'udp': UDP Port; 'ssl-l4': SSL-L4 Port; 'sip-udp': SIP-UDP Port; 'sip-tcp': SIP-TCP Port; 'quic': QUIC Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#protocol DdosDstZonePortRangeStatsSipUdpZonePort#protocol}
  */
  readonly protocol: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#zone_name DdosDstZonePortRangeStatsSipUdpZonePort#zone_name}
  */
  readonly zoneName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#stats DdosDstZonePortRangeStatsSipUdpZonePort#stats}
  */
  readonly stats?: DdosDstZonePortRangeStatsSipUdpZonePortStats;
}
export interface DdosDstZonePortRangeStatsSipUdpZonePortStatsSipUdpZonePort {
  /**
  * Session Reset for All Src Upon Level Escalation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#all_src_session_reset DdosDstZonePortRangeStatsSipUdpZonePort#all_src_session_reset}
  */
  readonly allSrcSessionReset?: number;
  /**
  * Dst Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#bl DdosDstZonePortRangeStatsSipUdpZonePort#bl}
  */
  readonly bl?: number;
  /**
  * Body Too Big
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#body_too_big DdosDstZonePortRangeStatsSipUdpZonePort#body_too_big}
  */
  readonly bodyTooBig?: number;
  /**
  * Clear Session Upon De-escalation to Level 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#clear_session_upon_deescalation DdosDstZonePortRangeStatsSipUdpZonePort#clear_session_upon_deescalation}
  */
  readonly clearSessionUponDeescalation?: number;
  /**
  * Concatenate Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#concatenate_msg DdosDstZonePortRangeStatsSipUdpZonePort#concatenate_msg}
  */
  readonly concatenateMsg?: number;
  /**
  * UDP Conn Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#conn_prate_excd DdosDstZonePortRangeStatsSipUdpZonePort#conn_prate_excd}
  */
  readonly connPrateExcd?: number;
  /**
  * Current Escalation Level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#current_es_level DdosDstZonePortRangeStatsSipUdpZonePort#current_es_level}
  */
  readonly currentEsLevel?: number;
  /**
  * Dst Hardware Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#dst_hw_drop DdosDstZonePortRangeStatsSipUdpZonePort#dst_hw_drop}
  */
  readonly dstHwDrop?: number;
  /**
  * Dst Hardware Drop Rules Inserted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#dst_hw_drop_inserted DdosDstZonePortRangeStatsSipUdpZonePort#dst_hw_drop_inserted}
  */
  readonly dstHwDropInserted?: number;
  /**
  * Dst Hardware Drop Rules Removed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#dst_hw_drop_removed DdosDstZonePortRangeStatsSipUdpZonePort#dst_hw_drop_removed}
  */
  readonly dstHwDropRemoved?: number;
  /**
  * UDP Retry Timeout Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#dst_udp_retry_timeout_blacklist DdosDstZonePortRangeStatsSipUdpZonePort#dst_udp_retry_timeout_blacklist}
  */
  readonly dstUdpRetryTimeoutBlacklist?: number;
  /**
  * dynamic-entry-count warning send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#dynamic_count_warn DdosDstZonePortRangeStatsSipUdpZonePort#dynamic_count_warn}
  */
  readonly dynamicCountWarn?: number;
  /**
  * East-West Inbound Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#ew_inbound_port_byte_drop DdosDstZonePortRangeStatsSipUdpZonePort#ew_inbound_port_byte_drop}
  */
  readonly ewInboundPortByteDrop?: number;
  /**
  * East-West Inbound Bytes Recevied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#ew_inbound_port_byte_rcv DdosDstZonePortRangeStatsSipUdpZonePort#ew_inbound_port_byte_rcv}
  */
  readonly ewInboundPortByteRcv?: number;
  /**
  * East-West Inbound Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#ew_inbound_port_byte_sent DdosDstZonePortRangeStatsSipUdpZonePort#ew_inbound_port_byte_sent}
  */
  readonly ewInboundPortByteSent?: number;
  /**
  * East-West Inbound Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#ew_inbound_port_drop DdosDstZonePortRangeStatsSipUdpZonePort#ew_inbound_port_drop}
  */
  readonly ewInboundPortDrop?: number;
  /**
  * East-West Inbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#ew_inbound_port_rcv DdosDstZonePortRangeStatsSipUdpZonePort#ew_inbound_port_rcv}
  */
  readonly ewInboundPortRcv?: number;
  /**
  * East-West Inbound Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#ew_inbound_port_sent DdosDstZonePortRangeStatsSipUdpZonePort#ew_inbound_port_sent}
  */
  readonly ewInboundPortSent?: number;
  /**
  * East-West Outbound Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#ew_outbound_port_byte_drop DdosDstZonePortRangeStatsSipUdpZonePort#ew_outbound_port_byte_drop}
  */
  readonly ewOutboundPortByteDrop?: number;
  /**
  * East-West Outbound Bytes Recevied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#ew_outbound_port_byte_rcv DdosDstZonePortRangeStatsSipUdpZonePort#ew_outbound_port_byte_rcv}
  */
  readonly ewOutboundPortByteRcv?: number;
  /**
  * East-West Outbound Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#ew_outbound_port_byte_sent DdosDstZonePortRangeStatsSipUdpZonePort#ew_outbound_port_byte_sent}
  */
  readonly ewOutboundPortByteSent?: number;
  /**
  * East-West Outbound Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#ew_outbound_port_drop DdosDstZonePortRangeStatsSipUdpZonePort#ew_outbound_port_drop}
  */
  readonly ewOutboundPortDrop?: number;
  /**
  * East-West Outbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#ew_outbound_port_rcv DdosDstZonePortRangeStatsSipUdpZonePort#ew_outbound_port_rcv}
  */
  readonly ewOutboundPortRcv?: number;
  /**
  * East-West Outbound Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#ew_outbound_port_sent DdosDstZonePortRangeStatsSipUdpZonePort#ew_outbound_port_sent}
  */
  readonly ewOutboundPortSent?: number;
  /**
  * Exceed Action: Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#exceed_action_drop DdosDstZonePortRangeStatsSipUdpZonePort#exceed_action_drop}
  */
  readonly exceedActionDrop?: number;
  /**
  * Exceed Action: Tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#exceed_action_tunnel DdosDstZonePortRangeStatsSipUdpZonePort#exceed_action_tunnel}
  */
  readonly exceedActionTunnel?: number;
  /**
  * Src KiBit Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#exceed_drop_brate_src DdosDstZonePortRangeStatsSipUdpZonePort#exceed_drop_brate_src}
  */
  readonly exceedDropBrateSrc?: number;
  /**
  * Src KiBit Rate Exceeded Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#exceed_drop_brate_src_pkt DdosDstZonePortRangeStatsSipUdpZonePort#exceed_drop_brate_src_pkt}
  */
  readonly exceedDropBrateSrcPkt?: number;
  /**
  * Src Conn Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#exceed_drop_climit_src DdosDstZonePortRangeStatsSipUdpZonePort#exceed_drop_climit_src}
  */
  readonly exceedDropClimitSrc?: number;
  /**
  * Src Conn Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#exceed_drop_crate_src DdosDstZonePortRangeStatsSipUdpZonePort#exceed_drop_crate_src}
  */
  readonly exceedDropCrateSrc?: number;
  /**
  * Src Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#exceed_drop_prate_src DdosDstZonePortRangeStatsSipUdpZonePort#exceed_drop_prate_src}
  */
  readonly exceedDropPrateSrc?: number;
  /**
  * Filter1 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#filter1_match DdosDstZonePortRangeStatsSipUdpZonePort#filter1_match}
  */
  readonly filter1Match?: number;
  /**
  * Filter2 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#filter2_match DdosDstZonePortRangeStatsSipUdpZonePort#filter2_match}
  */
  readonly filter2Match?: number;
  /**
  * Filter3 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#filter3_match DdosDstZonePortRangeStatsSipUdpZonePort#filter3_match}
  */
  readonly filter3Match?: number;
  /**
  * Filter4 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#filter4_match DdosDstZonePortRangeStatsSipUdpZonePort#filter4_match}
  */
  readonly filter4Match?: number;
  /**
  * Filter5 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#filter5_match DdosDstZonePortRangeStatsSipUdpZonePort#filter5_match}
  */
  readonly filter5Match?: number;
  /**
  * Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#filter_action_blacklist DdosDstZonePortRangeStatsSipUdpZonePort#filter_action_blacklist}
  */
  readonly filterActionBlacklist?: number;
  /**
  * Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#filter_action_default_pass DdosDstZonePortRangeStatsSipUdpZonePort#filter_action_default_pass}
  */
  readonly filterActionDefaultPass?: number;
  /**
  * Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#filter_action_drop DdosDstZonePortRangeStatsSipUdpZonePort#filter_action_drop}
  */
  readonly filterActionDrop?: number;
  /**
  * Filter Action Whitelist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#filter_action_whitelist DdosDstZonePortRangeStatsSipUdpZonePort#filter_action_whitelist}
  */
  readonly filterActionWhitelist?: number;
  /**
  * Filter Auth Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#filter_auth_fail DdosDstZonePortRangeStatsSipUdpZonePort#filter_auth_fail}
  */
  readonly filterAuthFail?: number;
  /**
  * Filter No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#filter_none_match DdosDstZonePortRangeStatsSipUdpZonePort#filter_none_match}
  */
  readonly filterNoneMatch?: number;
  /**
  * Filter Not Matched on Pkt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#filter_total_not_match DdosDstZonePortRangeStatsSipUdpZonePort#filter_total_not_match}
  */
  readonly filterTotalNotMatch?: number;
  /**
  * Fragmented Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#frag_drop DdosDstZonePortRangeStatsSipUdpZonePort#frag_drop}
  */
  readonly fragDrop?: number;
  /**
  * Fragmented Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#frag_rcvd DdosDstZonePortRangeStatsSipUdpZonePort#frag_rcvd}
  */
  readonly fragRcvd?: number;
  /**
  * Fragmented Packets Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#frag_timeout DdosDstZonePortRangeStatsSipUdpZonePort#frag_timeout}
  */
  readonly fragTimeout?: number;
  /**
  * Get Content Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#get_content_fail_error DdosDstZonePortRangeStatsSipUdpZonePort#get_content_fail_error}
  */
  readonly fetchContentFailError?: number;
  /**
  * Header Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#header_filter_action_blacklist DdosDstZonePortRangeStatsSipUdpZonePort#header_filter_action_blacklist}
  */
  readonly headerFilterActionBlacklist?: number;
  /**
  * Header Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#header_filter_action_default_pass DdosDstZonePortRangeStatsSipUdpZonePort#header_filter_action_default_pass}
  */
  readonly headerFilterActionDefaultPass?: number;
  /**
  * Header Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#header_filter_action_drop DdosDstZonePortRangeStatsSipUdpZonePort#header_filter_action_drop}
  */
  readonly headerFilterActionDrop?: number;
  /**
  * Header Filter Action Whitelist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#header_filter_action_whitelist DdosDstZonePortRangeStatsSipUdpZonePort#header_filter_action_whitelist}
  */
  readonly headerFilterActionWhitelist?: number;
  /**
  * Header Filter 1 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#header_filter_filter1_match DdosDstZonePortRangeStatsSipUdpZonePort#header_filter_filter1_match}
  */
  readonly headerFilterFilter1Match?: number;
  /**
  * Header Filter 2 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#header_filter_filter2_match DdosDstZonePortRangeStatsSipUdpZonePort#header_filter_filter2_match}
  */
  readonly headerFilterFilter2Match?: number;
  /**
  * Header Filter 3 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#header_filter_filter3_match DdosDstZonePortRangeStatsSipUdpZonePort#header_filter_filter3_match}
  */
  readonly headerFilterFilter3Match?: number;
  /**
  * Header Filter 4 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#header_filter_filter4_match DdosDstZonePortRangeStatsSipUdpZonePort#header_filter_filter4_match}
  */
  readonly headerFilterFilter4Match?: number;
  /**
  * Header Filter 5 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#header_filter_filter5_match DdosDstZonePortRangeStatsSipUdpZonePort#header_filter_filter5_match}
  */
  readonly headerFilterFilter5Match?: number;
  /**
  * Header Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#header_filter_match DdosDstZonePortRangeStatsSipUdpZonePort#header_filter_match}
  */
  readonly headerFilterMatch?: number;
  /**
  * None Header Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#header_filter_none_match DdosDstZonePortRangeStatsSipUdpZonePort#header_filter_none_match}
  */
  readonly headerFilterNoneMatch?: number;
  /**
  * Header Filter Not Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#header_filter_not_match DdosDstZonePortRangeStatsSipUdpZonePort#header_filter_not_match}
  */
  readonly headerFilterNotMatch?: number;
  /**
  * Max Header Name Length Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#header_name_too_long DdosDstZonePortRangeStatsSipUdpZonePort#header_name_too_long}
  */
  readonly headerNameTooLong?: number;
  /**
  * Invalid Header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#invalid_header DdosDstZonePortRangeStatsSipUdpZonePort#invalid_header}
  */
  readonly invalidHeader?: number;
  /**
  * Invalid Start Line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#invalid_start_line_error DdosDstZonePortRangeStatsSipUdpZonePort#invalid_start_line_error}
  */
  readonly invalidStartLineError?: number;
  /**
  * IP Filtering Policy: Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#ip_filtering_bl DdosDstZonePortRangeStatsSipUdpZonePort#ip_filtering_bl}
  */
  readonly ipFilteringBl?: number;
  /**
  * IP Filtering Policy: Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#ip_filtering_drop DdosDstZonePortRangeStatsSipUdpZonePort#ip_filtering_drop}
  */
  readonly ipFilteringDrop?: number;
  /**
  * KeepAlive Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#keep_alive_msg DdosDstZonePortRangeStatsSipUdpZonePort#keep_alive_msg}
  */
  readonly keepAliveMsg?: number;
  /**
  * Line Memory Allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#line_mem_allocated DdosDstZonePortRangeStatsSipUdpZonePort#line_mem_allocated}
  */
  readonly lineMemAllocated?: number;
  /**
  * Line Memory Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#line_mem_freed DdosDstZonePortRangeStatsSipUdpZonePort#line_mem_freed}
  */
  readonly lineMemFreed?: number;
  /**
  * Line Too Long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#line_too_long DdosDstZonePortRangeStatsSipUdpZonePort#line_too_long}
  */
  readonly lineTooLong?: number;
  /**
  * Malformed Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#malform_request DdosDstZonePortRangeStatsSipUdpZonePort#malform_request}
  */
  readonly malformRequest?: number;
  /**
  * Max Call ID Length Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#max_call_id_len_exceed DdosDstZonePortRangeStatsSipUdpZonePort#max_call_id_len_exceed}
  */
  readonly maxCallIdLenExceed?: number;
  /**
  * Max Header Value Length Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#max_header_value_len_exceed DdosDstZonePortRangeStatsSipUdpZonePort#max_header_value_len_exceed}
  */
  readonly maxHeaderValueLenExceed?: number;
  /**
  * Max SDP Length Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#max_sdp_len_exceed DdosDstZonePortRangeStatsSipUdpZonePort#max_sdp_len_exceed}
  */
  readonly maxSdpLenExceed?: number;
  /**
  * Max URI Length Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#max_uri_len_exceed DdosDstZonePortRangeStatsSipUdpZonePort#max_uri_len_exceed}
  */
  readonly maxUriLenExceed?: number;
  /**
  * Memory Allocate Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#mem_alloc_fail_error DdosDstZonePortRangeStatsSipUdpZonePort#mem_alloc_fail_error}
  */
  readonly memAllocFailError?: number;
  /**
  * No Policy Class-list Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#no_policy_class_list_match DdosDstZonePortRangeStatsSipUdpZonePort#no_policy_class_list_match}
  */
  readonly noPolicyClassListMatch?: number;
  /**
  * No Route Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#no_route_drop DdosDstZonePortRangeStatsSipUdpZonePort#no_route_drop}
  */
  readonly noRouteDrop?: number;
  /**
  * NTP Monlist Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#ntp_monlist_req DdosDstZonePortRangeStatsSipUdpZonePort#ntp_monlist_req}
  */
  readonly ntpMonlistReq?: number;
  /**
  * NTP Monlist Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#ntp_monlist_resp DdosDstZonePortRangeStatsSipUdpZonePort#ntp_monlist_resp}
  */
  readonly ntpMonlistResp?: number;
  /**
  * Outbound Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#outbound_port_bytes DdosDstZonePortRangeStatsSipUdpZonePort#outbound_port_bytes}
  */
  readonly outboundPortBytes?: number;
  /**
  * Outbound Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#outbound_port_bytes_drop DdosDstZonePortRangeStatsSipUdpZonePort#outbound_port_bytes_drop}
  */
  readonly outboundPortBytesDrop?: number;
  /**
  * Outbound Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#outbound_port_bytes_sent DdosDstZonePortRangeStatsSipUdpZonePort#outbound_port_bytes_sent}
  */
  readonly outboundPortBytesSent?: number;
  /**
  * Outbound Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#outbound_port_drop DdosDstZonePortRangeStatsSipUdpZonePort#outbound_port_drop}
  */
  readonly outboundPortDrop?: number;
  /**
  * Outbound Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#outbound_port_pkt_sent DdosDstZonePortRangeStatsSipUdpZonePort#outbound_port_pkt_sent}
  */
  readonly outboundPortPktSent?: number;
  /**
  * Outbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#outbound_port_rcvd DdosDstZonePortRangeStatsSipUdpZonePort#outbound_port_rcvd}
  */
  readonly outboundPortRcvd?: number;
  /**
  * Header Parse Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#parse_header_fail_error DdosDstZonePortRangeStatsSipUdpZonePort#parse_header_fail_error}
  */
  readonly parseHeaderFailError?: number;
  /**
  * Start Line Parse Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#parse_start_line_error DdosDstZonePortRangeStatsSipUdpZonePort#parse_start_line_error}
  */
  readonly parseStartLineError?: number;
  /**
  * Extracted Filter1 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#pattern_filter1_match DdosDstZonePortRangeStatsSipUdpZonePort#pattern_filter1_match}
  */
  readonly patternFilter1Match?: number;
  /**
  * Extracted Filter2 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#pattern_filter2_match DdosDstZonePortRangeStatsSipUdpZonePort#pattern_filter2_match}
  */
  readonly patternFilter2Match?: number;
  /**
  * Extracted Filter3 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#pattern_filter3_match DdosDstZonePortRangeStatsSipUdpZonePort#pattern_filter3_match}
  */
  readonly patternFilter3Match?: number;
  /**
  * Extracted Filter4 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#pattern_filter4_match DdosDstZonePortRangeStatsSipUdpZonePort#pattern_filter4_match}
  */
  readonly patternFilter4Match?: number;
  /**
  * Extracted Filter5 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#pattern_filter5_match DdosDstZonePortRangeStatsSipUdpZonePort#pattern_filter5_match}
  */
  readonly patternFilter5Match?: number;
  /**
  * Extracted Filter Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#pattern_filter_drop DdosDstZonePortRangeStatsSipUdpZonePort#pattern_filter_drop}
  */
  readonly patternFilterDrop?: number;
  /**
  * Pattern Recognition: Pattern Not Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#pattern_not_found DdosDstZonePortRangeStatsSipUdpZonePort#pattern_not_found}
  */
  readonly patternNotFound?: number;
  /**
  * Pattern Recognition: Exceptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#pattern_recognition_generic_error DdosDstZonePortRangeStatsSipUdpZonePort#pattern_recognition_generic_error}
  */
  readonly patternRecognitionGenericError?: number;
  /**
  * Pattern Recognition: Pattern Change Detected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#pattern_recognition_pattern_changed DdosDstZonePortRangeStatsSipUdpZonePort#pattern_recognition_pattern_changed}
  */
  readonly patternRecognitionPatternChanged?: number;
  /**
  * Pattern Recognition: Engine Started
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#pattern_recognition_proceeded DdosDstZonePortRangeStatsSipUdpZonePort#pattern_recognition_proceeded}
  */
  readonly patternRecognitionProceeded?: number;
  /**
  * Pattern Recognition: Sampling Started
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#pattern_recognition_sampling_started DdosDstZonePortRangeStatsSipUdpZonePort#pattern_recognition_sampling_started}
  */
  readonly patternRecognitionSamplingStarted?: number;
  /**
  * UDP Payload Too Large
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#payload_too_big DdosDstZonePortRangeStatsSipUdpZonePort#payload_too_big}
  */
  readonly payloadTooBig?: number;
  /**
  * UDP Payload Too Small
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#payload_too_small DdosDstZonePortRangeStatsSipUdpZonePort#payload_too_small}
  */
  readonly payloadTooSmall?: number;
  /**
  * Policy Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#policy_drop DdosDstZonePortRangeStatsSipUdpZonePort#policy_drop}
  */
  readonly policyDrop?: number;
  /**
  * Policy Violation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#policy_violation DdosDstZonePortRangeStatsSipUdpZonePort#policy_violation}
  */
  readonly policyViolation?: number;
  /**
  * Inbound Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#port_bytes DdosDstZonePortRangeStatsSipUdpZonePort#port_bytes}
  */
  readonly portBytes?: number;
  /**
  * Inbound Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#port_bytes_drop DdosDstZonePortRangeStatsSipUdpZonePort#port_bytes_drop}
  */
  readonly portBytesDrop?: number;
  /**
  * Inbound Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#port_bytes_sent DdosDstZonePortRangeStatsSipUdpZonePort#port_bytes_sent}
  */
  readonly portBytesSent?: number;
  /**
  * Conn Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#port_conn_limm_exceed DdosDstZonePortRangeStatsSipUdpZonePort#port_conn_limm_exceed}
  */
  readonly portConnLimmExceed?: number;
  /**
  * Conn Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#port_conn_rate_exceed DdosDstZonePortRangeStatsSipUdpZonePort#port_conn_rate_exceed}
  */
  readonly portConnRateExceed?: number;
  /**
  * Inbound Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#port_drop DdosDstZonePortRangeStatsSipUdpZonePort#port_drop}
  */
  readonly portDrop?: number;
  /**
  * KiBit Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#port_kbit_rate_exceed DdosDstZonePortRangeStatsSipUdpZonePort#port_kbit_rate_exceed}
  */
  readonly portKbitRateExceed?: number;
  /**
  * KiBit Rate Exceeded Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#port_kbit_rate_exceed_pkt DdosDstZonePortRangeStatsSipUdpZonePort#port_kbit_rate_exceed_pkt}
  */
  readonly portKbitRateExceedPkt?: number;
  /**
  * Packet Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#port_pkt_rate_exceed DdosDstZonePortRangeStatsSipUdpZonePort#port_pkt_rate_exceed}
  */
  readonly portPktRateExceed?: number;
  /**
  * Inbound Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#port_pkt_sent DdosDstZonePortRangeStatsSipUdpZonePort#port_pkt_sent}
  */
  readonly portPktSent?: number;
  /**
  * Inbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#port_rcvd DdosDstZonePortRangeStatsSipUdpZonePort#port_rcvd}
  */
  readonly portRcvd?: number;
  /**
  * Src Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#port_src_bl DdosDstZonePortRangeStatsSipUdpZonePort#port_src_bl}
  */
  readonly portSrcBl?: number;
  /**
  * Src Escalation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#port_src_escalation DdosDstZonePortRangeStatsSipUdpZonePort#port_src_escalation}
  */
  readonly portSrcEscalation?: number;
  /**
  * Dst Request Rate 1 Limit Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#rate1_limit_exceed DdosDstZonePortRangeStatsSipUdpZonePort#rate1_limit_exceed}
  */
  readonly rate1LimitExceed?: number;
  /**
  * Dst Request Rate 2 Limit Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#rate2_limit_exceed DdosDstZonePortRangeStatsSipUdpZonePort#rate2_limit_exceed}
  */
  readonly rate2LimitExceed?: number;
  /**
  * Dst Request Rate 3 Limit Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#rate3_limit_exceed DdosDstZonePortRangeStatsSipUdpZonePort#rate3_limit_exceed}
  */
  readonly rate3LimitExceed?: number;
  /**
  * Start Line Read Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#read_start_line_error DdosDstZonePortRangeStatsSipUdpZonePort#read_start_line_error}
  */
  readonly readStartLineError?: number;
  /**
  * Request Method ACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#request_method_ack DdosDstZonePortRangeStatsSipUdpZonePort#request_method_ack}
  */
  readonly requestMethodAck?: number;
  /**
  * Request Method BYE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#request_method_bye DdosDstZonePortRangeStatsSipUdpZonePort#request_method_bye}
  */
  readonly requestMethodBye?: number;
  /**
  * Request Method CANCEL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#request_method_cancel DdosDstZonePortRangeStatsSipUdpZonePort#request_method_cancel}
  */
  readonly requestMethodCancel?: number;
  /**
  * Request Method INFO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#request_method_info DdosDstZonePortRangeStatsSipUdpZonePort#request_method_info}
  */
  readonly requestMethodInfo?: number;
  /**
  * Request Method INVITE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#request_method_invite DdosDstZonePortRangeStatsSipUdpZonePort#request_method_invite}
  */
  readonly requestMethodInvite?: number;
  /**
  * Request Method MESSAGE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#request_method_message DdosDstZonePortRangeStatsSipUdpZonePort#request_method_message}
  */
  readonly requestMethodMessage?: number;
  /**
  * Request Method NOTIFY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#request_method_notify DdosDstZonePortRangeStatsSipUdpZonePort#request_method_notify}
  */
  readonly requestMethodNotify?: number;
  /**
  * Request Method OPTIONS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#request_method_options DdosDstZonePortRangeStatsSipUdpZonePort#request_method_options}
  */
  readonly requestMethodOptions?: number;
  /**
  * Request Method PRACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#request_method_prack DdosDstZonePortRangeStatsSipUdpZonePort#request_method_prack}
  */
  readonly requestMethodPrack?: number;
  /**
  * Request Method PUBLISH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#request_method_publish DdosDstZonePortRangeStatsSipUdpZonePort#request_method_publish}
  */
  readonly requestMethodPublish?: number;
  /**
  * Request Method REFER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#request_method_refer DdosDstZonePortRangeStatsSipUdpZonePort#request_method_refer}
  */
  readonly requestMethodRefer?: number;
  /**
  * Request Method REGISTER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#request_method_register DdosDstZonePortRangeStatsSipUdpZonePort#request_method_register}
  */
  readonly requestMethodRegister?: number;
  /**
  * Request Method SUBSCRIBE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#request_method_subscribe DdosDstZonePortRangeStatsSipUdpZonePort#request_method_subscribe}
  */
  readonly requestMethodSubscribe?: number;
  /**
  * Unknown Request Method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#request_method_unknown DdosDstZonePortRangeStatsSipUdpZonePort#request_method_unknown}
  */
  readonly requestMethodUnknown?: number;
  /**
  * Request Method UPDATE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#request_method_update DdosDstZonePortRangeStatsSipUdpZonePort#request_method_update}
  */
  readonly requestMethodUpdate?: number;
  /**
  * Unknown Request Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#request_unknown_version DdosDstZonePortRangeStatsSipUdpZonePort#request_unknown_version}
  */
  readonly requestUnknownVersion?: number;
  /**
  * Response Status Code 1xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#response_1xx DdosDstZonePortRangeStatsSipUdpZonePort#response_1xx}
  */
  readonly response1Xx?: number;
  /**
  * Response Status Code 2xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#response_2xx DdosDstZonePortRangeStatsSipUdpZonePort#response_2xx}
  */
  readonly response2Xx?: number;
  /**
  * Response Status Code 3xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#response_3xx DdosDstZonePortRangeStatsSipUdpZonePort#response_3xx}
  */
  readonly response3Xx?: number;
  /**
  * Response Status Code 4xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#response_4xx DdosDstZonePortRangeStatsSipUdpZonePort#response_4xx}
  */
  readonly response4Xx?: number;
  /**
  * Response Status Code 5xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#response_5xx DdosDstZonePortRangeStatsSipUdpZonePort#response_5xx}
  */
  readonly response5Xx?: number;
  /**
  * Response Status Code 6xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#response_6xx DdosDstZonePortRangeStatsSipUdpZonePort#response_6xx}
  */
  readonly response6Xx?: number;
  /**
  * Unknown Response Status Code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#response_unknown DdosDstZonePortRangeStatsSipUdpZonePort#response_unknown}
  */
  readonly responseUnknown?: number;
  /**
  * Unknown Response Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#response_unknown_version DdosDstZonePortRangeStatsSipUdpZonePort#response_unknown_version}
  */
  readonly responseUnknownVersion?: number;
  /**
  * Same Source and Destination Port Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#same_sport_dport_drop DdosDstZonePortRangeStatsSipUdpZonePort#same_sport_dport_drop}
  */
  readonly sameSportDportDrop?: number;
  /**
  * Per Addr-Port Conn Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#secondary_port_conn_limm_exceed DdosDstZonePortRangeStatsSipUdpZonePort#secondary_port_conn_limm_exceed}
  */
  readonly secondaryPortConnLimmExceed?: number;
  /**
  * Per Addr-Port Conn Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#secondary_port_conn_rate_exceed DdosDstZonePortRangeStatsSipUdpZonePort#secondary_port_conn_rate_exceed}
  */
  readonly secondaryPortConnRateExceed?: number;
  /**
  * Per Addr-Port Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#secondary_port_hit DdosDstZonePortRangeStatsSipUdpZonePort#secondary_port_hit}
  */
  readonly secondaryPortHit?: number;
  /**
  * Per Addr-Port KiBit Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#secondary_port_kbit_rate_exceed DdosDstZonePortRangeStatsSipUdpZonePort#secondary_port_kbit_rate_exceed}
  */
  readonly secondaryPortKbitRateExceed?: number;
  /**
  * Per Addr-Port KiBit Rate Exceeded Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#secondary_port_kbit_rate_exceed_pkt DdosDstZonePortRangeStatsSipUdpZonePort#secondary_port_kbit_rate_exceed_pkt}
  */
  readonly secondaryPortKbitRateExceedPkt?: number;
  /**
  * Per Addr-Port Packet Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#secondary_port_pkt_rate_exceed DdosDstZonePortRangeStatsSipUdpZonePort#secondary_port_pkt_rate_exceed}
  */
  readonly secondaryPortPktRateExceed?: number;
  /**
  * Sessions Aged Out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#sess_aged DdosDstZonePortRangeStatsSipUdpZonePort#sess_aged}
  */
  readonly sessAged?: number;
  /**
  * Session Create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#sess_create DdosDstZonePortRangeStatsSipUdpZonePort#sess_create}
  */
  readonly sessCreate?: number;
  /**
  * Inbound Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#sess_create_inbound DdosDstZonePortRangeStatsSipUdpZonePort#sess_create_inbound}
  */
  readonly sessCreateInbound?: number;
  /**
  * Outbound Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#sess_create_outbound DdosDstZonePortRangeStatsSipUdpZonePort#sess_create_outbound}
  */
  readonly sessCreateOutbound?: number;
  /**
  * Sflow External Packets Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#sflow_external_packets_sent DdosDstZonePortRangeStatsSipUdpZonePort#sflow_external_packets_sent}
  */
  readonly sflowExternalPacketsSent?: number;
  /**
  * Sflow External Samples Packed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#sflow_external_samples_packed DdosDstZonePortRangeStatsSipUdpZonePort#sflow_external_samples_packed}
  */
  readonly sflowExternalSamplesPacked?: number;
  /**
  * Sflow Internal Packets Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#sflow_internal_packets_sent DdosDstZonePortRangeStatsSipUdpZonePort#sflow_internal_packets_sent}
  */
  readonly sflowInternalPacketsSent?: number;
  /**
  * Sflow Internal Samples Packed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#sflow_internal_samples_packed DdosDstZonePortRangeStatsSipUdpZonePort#sflow_internal_samples_packed}
  */
  readonly sflowInternalSamplesPacked?: number;
  /**
  * Source NAT Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#snat_fail DdosDstZonePortRangeStatsSipUdpZonePort#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * UDP Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#spoof_detect_fail DdosDstZonePortRangeStatsSipUdpZonePort#spoof_detect_fail}
  */
  readonly spoofDetectFail?: number;
  /**
  * Src UDP Conn Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_conn_pkt_rate_excd DdosDstZonePortRangeStatsSipUdpZonePort#src_conn_pkt_rate_excd}
  */
  readonly srcConnPktRateExcd?: number;
  /**
  * Src Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_drop DdosDstZonePortRangeStatsSipUdpZonePort#src_drop}
  */
  readonly srcDrop?: number;
  /**
  * Src Filter1 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_filter1_match DdosDstZonePortRangeStatsSipUdpZonePort#src_filter1_match}
  */
  readonly srcFilter1Match?: number;
  /**
  * Src Filter2 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_filter2_match DdosDstZonePortRangeStatsSipUdpZonePort#src_filter2_match}
  */
  readonly srcFilter2Match?: number;
  /**
  * Src Filter3 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_filter3_match DdosDstZonePortRangeStatsSipUdpZonePort#src_filter3_match}
  */
  readonly srcFilter3Match?: number;
  /**
  * Src Filter4 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_filter4_match DdosDstZonePortRangeStatsSipUdpZonePort#src_filter4_match}
  */
  readonly srcFilter4Match?: number;
  /**
  * Src Filter5 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_filter5_match DdosDstZonePortRangeStatsSipUdpZonePort#src_filter5_match}
  */
  readonly srcFilter5Match?: number;
  /**
  * Src Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_filter_action_blacklist DdosDstZonePortRangeStatsSipUdpZonePort#src_filter_action_blacklist}
  */
  readonly srcFilterActionBlacklist?: number;
  /**
  * Src Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_filter_action_default_pass DdosDstZonePortRangeStatsSipUdpZonePort#src_filter_action_default_pass}
  */
  readonly srcFilterActionDefaultPass?: number;
  /**
  * Src Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_filter_action_drop DdosDstZonePortRangeStatsSipUdpZonePort#src_filter_action_drop}
  */
  readonly srcFilterActionDrop?: number;
  /**
  * Src Filter Action Whitelist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_filter_action_whitelist DdosDstZonePortRangeStatsSipUdpZonePort#src_filter_action_whitelist}
  */
  readonly srcFilterActionWhitelist?: number;
  /**
  * Src Filter Auth Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_filter_auth_fail DdosDstZonePortRangeStatsSipUdpZonePort#src_filter_auth_fail}
  */
  readonly srcFilterAuthFail?: number;
  /**
  * Src Filter No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_filter_none_match DdosDstZonePortRangeStatsSipUdpZonePort#src_filter_none_match}
  */
  readonly srcFilterNoneMatch?: number;
  /**
  * Src Filter Not Matched on Pkt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_filter_total_not_match DdosDstZonePortRangeStatsSipUdpZonePort#src_filter_total_not_match}
  */
  readonly srcFilterTotalNotMatch?: number;
  /**
  * Src Fragmented Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_frag_drop DdosDstZonePortRangeStatsSipUdpZonePort#src_frag_drop}
  */
  readonly srcFragDrop?: number;
  /**
  * Src Hardware Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_hw_drop DdosDstZonePortRangeStatsSipUdpZonePort#src_hw_drop}
  */
  readonly srcHwDrop?: number;
  /**
  * Src Hardware Drop Rules Inserted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_hw_drop_inserted DdosDstZonePortRangeStatsSipUdpZonePort#src_hw_drop_inserted}
  */
  readonly srcHwDropInserted?: number;
  /**
  * Src Hardware Drop Rules Removed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_hw_drop_removed DdosDstZonePortRangeStatsSipUdpZonePort#src_hw_drop_removed}
  */
  readonly srcHwDropRemoved?: number;
  /**
  * Source Dynamic Entry Overflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_learn_overflow DdosDstZonePortRangeStatsSipUdpZonePort#src_learn_overflow}
  */
  readonly srcLearnOverflow?: number;
  /**
  * Src NTP Monlist Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_ntp_monlist_req DdosDstZonePortRangeStatsSipUdpZonePort#src_ntp_monlist_req}
  */
  readonly srcNtpMonlistReq?: number;
  /**
  * Src NTP Monlist Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_ntp_monlist_resp DdosDstZonePortRangeStatsSipUdpZonePort#src_ntp_monlist_resp}
  */
  readonly srcNtpMonlistResp?: number;
  /**
  * Src UDP Payload Too Large
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_payload_too_big DdosDstZonePortRangeStatsSipUdpZonePort#src_payload_too_big}
  */
  readonly srcPayloadTooBig?: number;
  /**
  * Src UDP Payload Too Small
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_payload_too_small DdosDstZonePortRangeStatsSipUdpZonePort#src_payload_too_small}
  */
  readonly srcPayloadTooSmall?: number;
  /**
  * Src Request Rate 1 Limit Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_rate1_limit_exceed DdosDstZonePortRangeStatsSipUdpZonePort#src_rate1_limit_exceed}
  */
  readonly srcRate1LimitExceed?: number;
  /**
  * Src Request Rate 2 Limit Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_rate2_limit_exceed DdosDstZonePortRangeStatsSipUdpZonePort#src_rate2_limit_exceed}
  */
  readonly srcRate2LimitExceed?: number;
  /**
  * Src Request Rate 3 Limit Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_rate3_limit_exceed DdosDstZonePortRangeStatsSipUdpZonePort#src_rate3_limit_exceed}
  */
  readonly srcRate3LimitExceed?: number;
  /**
  * Src Auth UDP Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_udp_auth DdosDstZonePortRangeStatsSipUdpZonePort#src_udp_auth}
  */
  readonly srcUdpAuth?: number;
  /**
  * Src UDP Auth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_udp_auth_drop DdosDstZonePortRangeStatsSipUdpZonePort#src_udp_auth_drop}
  */
  readonly srcUdpAuthDrop?: number;
  /**
  * Src Auth UDP Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_udp_auth_fail DdosDstZonePortRangeStatsSipUdpZonePort#src_udp_auth_fail}
  */
  readonly srcUdpAuthFail?: number;
  /**
  * Src UDP Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_udp_auth_timeout DdosDstZonePortRangeStatsSipUdpZonePort#src_udp_auth_timeout}
  */
  readonly srcUdpAuthTimeout?: number;
  /**
  * Src UDP Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_udp_retry_gap_drop DdosDstZonePortRangeStatsSipUdpZonePort#src_udp_retry_gap_drop}
  */
  readonly srcUdpRetryGapDrop?: number;
  /**
  * Src UDP Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_udp_retry_init DdosDstZonePortRangeStatsSipUdpZonePort#src_udp_retry_init}
  */
  readonly srcUdpRetryInit?: number;
  /**
  * Src UDP Retry Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_udp_retry_pass DdosDstZonePortRangeStatsSipUdpZonePort#src_udp_retry_pass}
  */
  readonly srcUdpRetryPass?: number;
  /**
  * Src UDP SrcPort Wellknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_well_known_port DdosDstZonePortRangeStatsSipUdpZonePort#src_well_known_port}
  */
  readonly srcWellKnownPort?: number;
  /**
  * SrcZoneService Entry Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_zone_service_entry_aged DdosDstZonePortRangeStatsSipUdpZonePort#src_zone_service_entry_aged}
  */
  readonly srcZoneServiceEntryAged?: number;
  /**
  * SrcZoneService Entry Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_zone_service_entry_hit DdosDstZonePortRangeStatsSipUdpZonePort#src_zone_service_entry_hit}
  */
  readonly srcZoneServiceEntryHit?: number;
  /**
  * SrcZoneService Entry Learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#src_zone_service_entry_learned DdosDstZonePortRangeStatsSipUdpZonePort#src_zone_service_entry_learned}
  */
  readonly srcZoneServiceEntryLearned?: number;
  /**
  * Token Authentication Current Salt Matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#token_authentication_curr_salt_matched DdosDstZonePortRangeStatsSipUdpZonePort#token_authentication_curr_salt_matched}
  */
  readonly tokenAuthenticationCurrSaltMatched?: number;
  /**
  * Token Authentication Invalid Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#token_authentication_invalid DdosDstZonePortRangeStatsSipUdpZonePort#token_authentication_invalid}
  */
  readonly tokenAuthenticationInvalid?: number;
  /**
  * Token Authentication Mismatched Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#token_authentication_mismatched DdosDstZonePortRangeStatsSipUdpZonePort#token_authentication_mismatched}
  */
  readonly tokenAuthenticationMismatched?: number;
  /**
  * Token Authentication Previous Salt Matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#token_authentication_prev_salt_matched DdosDstZonePortRangeStatsSipUdpZonePort#token_authentication_prev_salt_matched}
  */
  readonly tokenAuthenticationPrevSaltMatched?: number;
  /**
  * Token Authentication Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#token_authentication_session_created DdosDstZonePortRangeStatsSipUdpZonePort#token_authentication_session_created}
  */
  readonly tokenAuthenticationSessionCreated?: number;
  /**
  * Token Authentication Session Created Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#token_authentication_session_created_fail DdosDstZonePortRangeStatsSipUdpZonePort#token_authentication_session_created_fail}
  */
  readonly tokenAuthenticationSessionCreatedFail?: number;
  /**
  * Max Header Count Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#too_many_header DdosDstZonePortRangeStatsSipUdpZonePort#too_many_header}
  */
  readonly tooManyHeader?: number;
  /**
  * Auth UDP Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#udp_auth DdosDstZonePortRangeStatsSipUdpZonePort#udp_auth}
  */
  readonly udpAuth?: number;
  /**
  * UDP Auth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#udp_auth_drop DdosDstZonePortRangeStatsSipUdpZonePort#udp_auth_drop}
  */
  readonly udpAuthDrop?: number;
  /**
  * Auth UDP Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#udp_auth_fail DdosDstZonePortRangeStatsSipUdpZonePort#udp_auth_fail}
  */
  readonly udpAuthFail?: number;
  /**
  * Auth UDP Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#udp_auth_pass DdosDstZonePortRangeStatsSipUdpZonePort#udp_auth_pass}
  */
  readonly udpAuthPass?: number;
  /**
  * Auth UDP Retry Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#udp_auth_retry_fail DdosDstZonePortRangeStatsSipUdpZonePort#udp_auth_retry_fail}
  */
  readonly udpAuthRetryFail?: number;
  /**
  * Auth UDP Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#udp_auth_retry_gap_drop DdosDstZonePortRangeStatsSipUdpZonePort#udp_auth_retry_gap_drop}
  */
  readonly udpAuthRetryGapDrop?: number;
  /**
  * UDP Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#udp_retry_gap_drop DdosDstZonePortRangeStatsSipUdpZonePort#udp_retry_gap_drop}
  */
  readonly udpRetryGapDrop?: number;
  /**
  * UDP Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#udp_retry_init DdosDstZonePortRangeStatsSipUdpZonePort#udp_retry_init}
  */
  readonly udpRetryInit?: number;
  /**
  * UDP Retry Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#udp_retry_pass DdosDstZonePortRangeStatsSipUdpZonePort#udp_retry_pass}
  */
  readonly udpRetryPass?: number;
  /**
  * Session Reset for Unauthenticated Src
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#unauth_src_session_reset DdosDstZonePortRangeStatsSipUdpZonePort#unauth_src_session_reset}
  */
  readonly unauthSrcSessionReset?: number;
  /**
  * UDP SrcPort Wellknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#wellknown_sport_drop DdosDstZonePortRangeStatsSipUdpZonePort#wellknown_sport_drop}
  */
  readonly wellknownSportDrop?: number;
  /**
  * Src UDP Retry Timeout Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#zone_src_udp_retry_timeout_blacklist DdosDstZonePortRangeStatsSipUdpZonePort#zone_src_udp_retry_timeout_blacklist}
  */
  readonly zoneSrcUdpRetryTimeoutBlacklist?: number;
}

export function ddosDstZonePortRangeStatsSipUdpZonePortStatsSipUdpZonePortToTerraform(struct?: DdosDstZonePortRangeStatsSipUdpZonePortStatsSipUdpZonePortOutputReference | DdosDstZonePortRangeStatsSipUdpZonePortStatsSipUdpZonePort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_src_session_reset: cdktf.numberToTerraform(struct!.allSrcSessionReset),
    bl: cdktf.numberToTerraform(struct!.bl),
    body_too_big: cdktf.numberToTerraform(struct!.bodyTooBig),
    clear_session_upon_deescalation: cdktf.numberToTerraform(struct!.clearSessionUponDeescalation),
    concatenate_msg: cdktf.numberToTerraform(struct!.concatenateMsg),
    conn_prate_excd: cdktf.numberToTerraform(struct!.connPrateExcd),
    current_es_level: cdktf.numberToTerraform(struct!.currentEsLevel),
    dst_hw_drop: cdktf.numberToTerraform(struct!.dstHwDrop),
    dst_hw_drop_inserted: cdktf.numberToTerraform(struct!.dstHwDropInserted),
    dst_hw_drop_removed: cdktf.numberToTerraform(struct!.dstHwDropRemoved),
    dst_udp_retry_timeout_blacklist: cdktf.numberToTerraform(struct!.dstUdpRetryTimeoutBlacklist),
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
    exceed_drop_climit_src: cdktf.numberToTerraform(struct!.exceedDropClimitSrc),
    exceed_drop_crate_src: cdktf.numberToTerraform(struct!.exceedDropCrateSrc),
    exceed_drop_prate_src: cdktf.numberToTerraform(struct!.exceedDropPrateSrc),
    filter1_match: cdktf.numberToTerraform(struct!.filter1Match),
    filter2_match: cdktf.numberToTerraform(struct!.filter2Match),
    filter3_match: cdktf.numberToTerraform(struct!.filter3Match),
    filter4_match: cdktf.numberToTerraform(struct!.filter4Match),
    filter5_match: cdktf.numberToTerraform(struct!.filter5Match),
    filter_action_blacklist: cdktf.numberToTerraform(struct!.filterActionBlacklist),
    filter_action_default_pass: cdktf.numberToTerraform(struct!.filterActionDefaultPass),
    filter_action_drop: cdktf.numberToTerraform(struct!.filterActionDrop),
    filter_action_whitelist: cdktf.numberToTerraform(struct!.filterActionWhitelist),
    filter_auth_fail: cdktf.numberToTerraform(struct!.filterAuthFail),
    filter_none_match: cdktf.numberToTerraform(struct!.filterNoneMatch),
    filter_total_not_match: cdktf.numberToTerraform(struct!.filterTotalNotMatch),
    frag_drop: cdktf.numberToTerraform(struct!.fragDrop),
    frag_rcvd: cdktf.numberToTerraform(struct!.fragRcvd),
    frag_timeout: cdktf.numberToTerraform(struct!.fragTimeout),
    get_content_fail_error: cdktf.numberToTerraform(struct!.fetchContentFailError),
    header_filter_action_blacklist: cdktf.numberToTerraform(struct!.headerFilterActionBlacklist),
    header_filter_action_default_pass: cdktf.numberToTerraform(struct!.headerFilterActionDefaultPass),
    header_filter_action_drop: cdktf.numberToTerraform(struct!.headerFilterActionDrop),
    header_filter_action_whitelist: cdktf.numberToTerraform(struct!.headerFilterActionWhitelist),
    header_filter_filter1_match: cdktf.numberToTerraform(struct!.headerFilterFilter1Match),
    header_filter_filter2_match: cdktf.numberToTerraform(struct!.headerFilterFilter2Match),
    header_filter_filter3_match: cdktf.numberToTerraform(struct!.headerFilterFilter3Match),
    header_filter_filter4_match: cdktf.numberToTerraform(struct!.headerFilterFilter4Match),
    header_filter_filter5_match: cdktf.numberToTerraform(struct!.headerFilterFilter5Match),
    header_filter_match: cdktf.numberToTerraform(struct!.headerFilterMatch),
    header_filter_none_match: cdktf.numberToTerraform(struct!.headerFilterNoneMatch),
    header_filter_not_match: cdktf.numberToTerraform(struct!.headerFilterNotMatch),
    header_name_too_long: cdktf.numberToTerraform(struct!.headerNameTooLong),
    invalid_header: cdktf.numberToTerraform(struct!.invalidHeader),
    invalid_start_line_error: cdktf.numberToTerraform(struct!.invalidStartLineError),
    ip_filtering_bl: cdktf.numberToTerraform(struct!.ipFilteringBl),
    ip_filtering_drop: cdktf.numberToTerraform(struct!.ipFilteringDrop),
    keep_alive_msg: cdktf.numberToTerraform(struct!.keepAliveMsg),
    line_mem_allocated: cdktf.numberToTerraform(struct!.lineMemAllocated),
    line_mem_freed: cdktf.numberToTerraform(struct!.lineMemFreed),
    line_too_long: cdktf.numberToTerraform(struct!.lineTooLong),
    malform_request: cdktf.numberToTerraform(struct!.malformRequest),
    max_call_id_len_exceed: cdktf.numberToTerraform(struct!.maxCallIdLenExceed),
    max_header_value_len_exceed: cdktf.numberToTerraform(struct!.maxHeaderValueLenExceed),
    max_sdp_len_exceed: cdktf.numberToTerraform(struct!.maxSdpLenExceed),
    max_uri_len_exceed: cdktf.numberToTerraform(struct!.maxUriLenExceed),
    mem_alloc_fail_error: cdktf.numberToTerraform(struct!.memAllocFailError),
    no_policy_class_list_match: cdktf.numberToTerraform(struct!.noPolicyClassListMatch),
    no_route_drop: cdktf.numberToTerraform(struct!.noRouteDrop),
    ntp_monlist_req: cdktf.numberToTerraform(struct!.ntpMonlistReq),
    ntp_monlist_resp: cdktf.numberToTerraform(struct!.ntpMonlistResp),
    outbound_port_bytes: cdktf.numberToTerraform(struct!.outboundPortBytes),
    outbound_port_bytes_drop: cdktf.numberToTerraform(struct!.outboundPortBytesDrop),
    outbound_port_bytes_sent: cdktf.numberToTerraform(struct!.outboundPortBytesSent),
    outbound_port_drop: cdktf.numberToTerraform(struct!.outboundPortDrop),
    outbound_port_pkt_sent: cdktf.numberToTerraform(struct!.outboundPortPktSent),
    outbound_port_rcvd: cdktf.numberToTerraform(struct!.outboundPortRcvd),
    parse_header_fail_error: cdktf.numberToTerraform(struct!.parseHeaderFailError),
    parse_start_line_error: cdktf.numberToTerraform(struct!.parseStartLineError),
    pattern_filter1_match: cdktf.numberToTerraform(struct!.patternFilter1Match),
    pattern_filter2_match: cdktf.numberToTerraform(struct!.patternFilter2Match),
    pattern_filter3_match: cdktf.numberToTerraform(struct!.patternFilter3Match),
    pattern_filter4_match: cdktf.numberToTerraform(struct!.patternFilter4Match),
    pattern_filter5_match: cdktf.numberToTerraform(struct!.patternFilter5Match),
    pattern_filter_drop: cdktf.numberToTerraform(struct!.patternFilterDrop),
    pattern_not_found: cdktf.numberToTerraform(struct!.patternNotFound),
    pattern_recognition_generic_error: cdktf.numberToTerraform(struct!.patternRecognitionGenericError),
    pattern_recognition_pattern_changed: cdktf.numberToTerraform(struct!.patternRecognitionPatternChanged),
    pattern_recognition_proceeded: cdktf.numberToTerraform(struct!.patternRecognitionProceeded),
    pattern_recognition_sampling_started: cdktf.numberToTerraform(struct!.patternRecognitionSamplingStarted),
    payload_too_big: cdktf.numberToTerraform(struct!.payloadTooBig),
    payload_too_small: cdktf.numberToTerraform(struct!.payloadTooSmall),
    policy_drop: cdktf.numberToTerraform(struct!.policyDrop),
    policy_violation: cdktf.numberToTerraform(struct!.policyViolation),
    port_bytes: cdktf.numberToTerraform(struct!.portBytes),
    port_bytes_drop: cdktf.numberToTerraform(struct!.portBytesDrop),
    port_bytes_sent: cdktf.numberToTerraform(struct!.portBytesSent),
    port_conn_limm_exceed: cdktf.numberToTerraform(struct!.portConnLimmExceed),
    port_conn_rate_exceed: cdktf.numberToTerraform(struct!.portConnRateExceed),
    port_drop: cdktf.numberToTerraform(struct!.portDrop),
    port_kbit_rate_exceed: cdktf.numberToTerraform(struct!.portKbitRateExceed),
    port_kbit_rate_exceed_pkt: cdktf.numberToTerraform(struct!.portKbitRateExceedPkt),
    port_pkt_rate_exceed: cdktf.numberToTerraform(struct!.portPktRateExceed),
    port_pkt_sent: cdktf.numberToTerraform(struct!.portPktSent),
    port_rcvd: cdktf.numberToTerraform(struct!.portRcvd),
    port_src_bl: cdktf.numberToTerraform(struct!.portSrcBl),
    port_src_escalation: cdktf.numberToTerraform(struct!.portSrcEscalation),
    rate1_limit_exceed: cdktf.numberToTerraform(struct!.rate1LimitExceed),
    rate2_limit_exceed: cdktf.numberToTerraform(struct!.rate2LimitExceed),
    rate3_limit_exceed: cdktf.numberToTerraform(struct!.rate3LimitExceed),
    read_start_line_error: cdktf.numberToTerraform(struct!.readStartLineError),
    request_method_ack: cdktf.numberToTerraform(struct!.requestMethodAck),
    request_method_bye: cdktf.numberToTerraform(struct!.requestMethodBye),
    request_method_cancel: cdktf.numberToTerraform(struct!.requestMethodCancel),
    request_method_info: cdktf.numberToTerraform(struct!.requestMethodInfo),
    request_method_invite: cdktf.numberToTerraform(struct!.requestMethodInvite),
    request_method_message: cdktf.numberToTerraform(struct!.requestMethodMessage),
    request_method_notify: cdktf.numberToTerraform(struct!.requestMethodNotify),
    request_method_options: cdktf.numberToTerraform(struct!.requestMethodOptions),
    request_method_prack: cdktf.numberToTerraform(struct!.requestMethodPrack),
    request_method_publish: cdktf.numberToTerraform(struct!.requestMethodPublish),
    request_method_refer: cdktf.numberToTerraform(struct!.requestMethodRefer),
    request_method_register: cdktf.numberToTerraform(struct!.requestMethodRegister),
    request_method_subscribe: cdktf.numberToTerraform(struct!.requestMethodSubscribe),
    request_method_unknown: cdktf.numberToTerraform(struct!.requestMethodUnknown),
    request_method_update: cdktf.numberToTerraform(struct!.requestMethodUpdate),
    request_unknown_version: cdktf.numberToTerraform(struct!.requestUnknownVersion),
    response_1xx: cdktf.numberToTerraform(struct!.response1Xx),
    response_2xx: cdktf.numberToTerraform(struct!.response2Xx),
    response_3xx: cdktf.numberToTerraform(struct!.response3Xx),
    response_4xx: cdktf.numberToTerraform(struct!.response4Xx),
    response_5xx: cdktf.numberToTerraform(struct!.response5Xx),
    response_6xx: cdktf.numberToTerraform(struct!.response6Xx),
    response_unknown: cdktf.numberToTerraform(struct!.responseUnknown),
    response_unknown_version: cdktf.numberToTerraform(struct!.responseUnknownVersion),
    same_sport_dport_drop: cdktf.numberToTerraform(struct!.sameSportDportDrop),
    secondary_port_conn_limm_exceed: cdktf.numberToTerraform(struct!.secondaryPortConnLimmExceed),
    secondary_port_conn_rate_exceed: cdktf.numberToTerraform(struct!.secondaryPortConnRateExceed),
    secondary_port_hit: cdktf.numberToTerraform(struct!.secondaryPortHit),
    secondary_port_kbit_rate_exceed: cdktf.numberToTerraform(struct!.secondaryPortKbitRateExceed),
    secondary_port_kbit_rate_exceed_pkt: cdktf.numberToTerraform(struct!.secondaryPortKbitRateExceedPkt),
    secondary_port_pkt_rate_exceed: cdktf.numberToTerraform(struct!.secondaryPortPktRateExceed),
    sess_aged: cdktf.numberToTerraform(struct!.sessAged),
    sess_create: cdktf.numberToTerraform(struct!.sessCreate),
    sess_create_inbound: cdktf.numberToTerraform(struct!.sessCreateInbound),
    sess_create_outbound: cdktf.numberToTerraform(struct!.sessCreateOutbound),
    sflow_external_packets_sent: cdktf.numberToTerraform(struct!.sflowExternalPacketsSent),
    sflow_external_samples_packed: cdktf.numberToTerraform(struct!.sflowExternalSamplesPacked),
    sflow_internal_packets_sent: cdktf.numberToTerraform(struct!.sflowInternalPacketsSent),
    sflow_internal_samples_packed: cdktf.numberToTerraform(struct!.sflowInternalSamplesPacked),
    snat_fail: cdktf.numberToTerraform(struct!.snatFail),
    spoof_detect_fail: cdktf.numberToTerraform(struct!.spoofDetectFail),
    src_conn_pkt_rate_excd: cdktf.numberToTerraform(struct!.srcConnPktRateExcd),
    src_drop: cdktf.numberToTerraform(struct!.srcDrop),
    src_filter1_match: cdktf.numberToTerraform(struct!.srcFilter1Match),
    src_filter2_match: cdktf.numberToTerraform(struct!.srcFilter2Match),
    src_filter3_match: cdktf.numberToTerraform(struct!.srcFilter3Match),
    src_filter4_match: cdktf.numberToTerraform(struct!.srcFilter4Match),
    src_filter5_match: cdktf.numberToTerraform(struct!.srcFilter5Match),
    src_filter_action_blacklist: cdktf.numberToTerraform(struct!.srcFilterActionBlacklist),
    src_filter_action_default_pass: cdktf.numberToTerraform(struct!.srcFilterActionDefaultPass),
    src_filter_action_drop: cdktf.numberToTerraform(struct!.srcFilterActionDrop),
    src_filter_action_whitelist: cdktf.numberToTerraform(struct!.srcFilterActionWhitelist),
    src_filter_auth_fail: cdktf.numberToTerraform(struct!.srcFilterAuthFail),
    src_filter_none_match: cdktf.numberToTerraform(struct!.srcFilterNoneMatch),
    src_filter_total_not_match: cdktf.numberToTerraform(struct!.srcFilterTotalNotMatch),
    src_frag_drop: cdktf.numberToTerraform(struct!.srcFragDrop),
    src_hw_drop: cdktf.numberToTerraform(struct!.srcHwDrop),
    src_hw_drop_inserted: cdktf.numberToTerraform(struct!.srcHwDropInserted),
    src_hw_drop_removed: cdktf.numberToTerraform(struct!.srcHwDropRemoved),
    src_learn_overflow: cdktf.numberToTerraform(struct!.srcLearnOverflow),
    src_ntp_monlist_req: cdktf.numberToTerraform(struct!.srcNtpMonlistReq),
    src_ntp_monlist_resp: cdktf.numberToTerraform(struct!.srcNtpMonlistResp),
    src_payload_too_big: cdktf.numberToTerraform(struct!.srcPayloadTooBig),
    src_payload_too_small: cdktf.numberToTerraform(struct!.srcPayloadTooSmall),
    src_rate1_limit_exceed: cdktf.numberToTerraform(struct!.srcRate1LimitExceed),
    src_rate2_limit_exceed: cdktf.numberToTerraform(struct!.srcRate2LimitExceed),
    src_rate3_limit_exceed: cdktf.numberToTerraform(struct!.srcRate3LimitExceed),
    src_udp_auth: cdktf.numberToTerraform(struct!.srcUdpAuth),
    src_udp_auth_drop: cdktf.numberToTerraform(struct!.srcUdpAuthDrop),
    src_udp_auth_fail: cdktf.numberToTerraform(struct!.srcUdpAuthFail),
    src_udp_auth_timeout: cdktf.numberToTerraform(struct!.srcUdpAuthTimeout),
    src_udp_retry_gap_drop: cdktf.numberToTerraform(struct!.srcUdpRetryGapDrop),
    src_udp_retry_init: cdktf.numberToTerraform(struct!.srcUdpRetryInit),
    src_udp_retry_pass: cdktf.numberToTerraform(struct!.srcUdpRetryPass),
    src_well_known_port: cdktf.numberToTerraform(struct!.srcWellKnownPort),
    src_zone_service_entry_aged: cdktf.numberToTerraform(struct!.srcZoneServiceEntryAged),
    src_zone_service_entry_hit: cdktf.numberToTerraform(struct!.srcZoneServiceEntryHit),
    src_zone_service_entry_learned: cdktf.numberToTerraform(struct!.srcZoneServiceEntryLearned),
    token_authentication_curr_salt_matched: cdktf.numberToTerraform(struct!.tokenAuthenticationCurrSaltMatched),
    token_authentication_invalid: cdktf.numberToTerraform(struct!.tokenAuthenticationInvalid),
    token_authentication_mismatched: cdktf.numberToTerraform(struct!.tokenAuthenticationMismatched),
    token_authentication_prev_salt_matched: cdktf.numberToTerraform(struct!.tokenAuthenticationPrevSaltMatched),
    token_authentication_session_created: cdktf.numberToTerraform(struct!.tokenAuthenticationSessionCreated),
    token_authentication_session_created_fail: cdktf.numberToTerraform(struct!.tokenAuthenticationSessionCreatedFail),
    too_many_header: cdktf.numberToTerraform(struct!.tooManyHeader),
    udp_auth: cdktf.numberToTerraform(struct!.udpAuth),
    udp_auth_drop: cdktf.numberToTerraform(struct!.udpAuthDrop),
    udp_auth_fail: cdktf.numberToTerraform(struct!.udpAuthFail),
    udp_auth_pass: cdktf.numberToTerraform(struct!.udpAuthPass),
    udp_auth_retry_fail: cdktf.numberToTerraform(struct!.udpAuthRetryFail),
    udp_auth_retry_gap_drop: cdktf.numberToTerraform(struct!.udpAuthRetryGapDrop),
    udp_retry_gap_drop: cdktf.numberToTerraform(struct!.udpRetryGapDrop),
    udp_retry_init: cdktf.numberToTerraform(struct!.udpRetryInit),
    udp_retry_pass: cdktf.numberToTerraform(struct!.udpRetryPass),
    unauth_src_session_reset: cdktf.numberToTerraform(struct!.unauthSrcSessionReset),
    wellknown_sport_drop: cdktf.numberToTerraform(struct!.wellknownSportDrop),
    zone_src_udp_retry_timeout_blacklist: cdktf.numberToTerraform(struct!.zoneSrcUdpRetryTimeoutBlacklist),
  }
}


export function ddosDstZonePortRangeStatsSipUdpZonePortStatsSipUdpZonePortToHclTerraform(struct?: DdosDstZonePortRangeStatsSipUdpZonePortStatsSipUdpZonePortOutputReference | DdosDstZonePortRangeStatsSipUdpZonePortStatsSipUdpZonePort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_src_session_reset: {
      value: cdktf.numberToHclTerraform(struct!.allSrcSessionReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bl: {
      value: cdktf.numberToHclTerraform(struct!.bl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    body_too_big: {
      value: cdktf.numberToHclTerraform(struct!.bodyTooBig),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    clear_session_upon_deescalation: {
      value: cdktf.numberToHclTerraform(struct!.clearSessionUponDeescalation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concatenate_msg: {
      value: cdktf.numberToHclTerraform(struct!.concatenateMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_prate_excd: {
      value: cdktf.numberToHclTerraform(struct!.connPrateExcd),
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
    dst_udp_retry_timeout_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpRetryTimeoutBlacklist),
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
    exceed_drop_climit_src: {
      value: cdktf.numberToHclTerraform(struct!.exceedDropClimitSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_drop_crate_src: {
      value: cdktf.numberToHclTerraform(struct!.exceedDropCrateSrc),
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
    filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.filterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_auth_fail: {
      value: cdktf.numberToHclTerraform(struct!.filterAuthFail),
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
    get_content_fail_error: {
      value: cdktf.numberToHclTerraform(struct!.fetchContentFailError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.headerFilterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.headerFilterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.headerFilterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.headerFilterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_filter_filter1_match: {
      value: cdktf.numberToHclTerraform(struct!.headerFilterFilter1Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_filter_filter2_match: {
      value: cdktf.numberToHclTerraform(struct!.headerFilterFilter2Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_filter_filter3_match: {
      value: cdktf.numberToHclTerraform(struct!.headerFilterFilter3Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_filter_filter4_match: {
      value: cdktf.numberToHclTerraform(struct!.headerFilterFilter4Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_filter_filter5_match: {
      value: cdktf.numberToHclTerraform(struct!.headerFilterFilter5Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.headerFilterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_filter_none_match: {
      value: cdktf.numberToHclTerraform(struct!.headerFilterNoneMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_filter_not_match: {
      value: cdktf.numberToHclTerraform(struct!.headerFilterNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_name_too_long: {
      value: cdktf.numberToHclTerraform(struct!.headerNameTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_header: {
      value: cdktf.numberToHclTerraform(struct!.invalidHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_start_line_error: {
      value: cdktf.numberToHclTerraform(struct!.invalidStartLineError),
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
    keep_alive_msg: {
      value: cdktf.numberToHclTerraform(struct!.keepAliveMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_mem_allocated: {
      value: cdktf.numberToHclTerraform(struct!.lineMemAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_mem_freed: {
      value: cdktf.numberToHclTerraform(struct!.lineMemFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_too_long: {
      value: cdktf.numberToHclTerraform(struct!.lineTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malform_request: {
      value: cdktf.numberToHclTerraform(struct!.malformRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_call_id_len_exceed: {
      value: cdktf.numberToHclTerraform(struct!.maxCallIdLenExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_header_value_len_exceed: {
      value: cdktf.numberToHclTerraform(struct!.maxHeaderValueLenExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_sdp_len_exceed: {
      value: cdktf.numberToHclTerraform(struct!.maxSdpLenExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_uri_len_exceed: {
      value: cdktf.numberToHclTerraform(struct!.maxUriLenExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mem_alloc_fail_error: {
      value: cdktf.numberToHclTerraform(struct!.memAllocFailError),
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
    ntp_monlist_req: {
      value: cdktf.numberToHclTerraform(struct!.ntpMonlistReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntp_monlist_resp: {
      value: cdktf.numberToHclTerraform(struct!.ntpMonlistResp),
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
    parse_header_fail_error: {
      value: cdktf.numberToHclTerraform(struct!.parseHeaderFailError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_start_line_error: {
      value: cdktf.numberToHclTerraform(struct!.parseStartLineError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_filter1_match: {
      value: cdktf.numberToHclTerraform(struct!.patternFilter1Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_filter2_match: {
      value: cdktf.numberToHclTerraform(struct!.patternFilter2Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_filter3_match: {
      value: cdktf.numberToHclTerraform(struct!.patternFilter3Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_filter4_match: {
      value: cdktf.numberToHclTerraform(struct!.patternFilter4Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_filter5_match: {
      value: cdktf.numberToHclTerraform(struct!.patternFilter5Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_filter_drop: {
      value: cdktf.numberToHclTerraform(struct!.patternFilterDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_not_found: {
      value: cdktf.numberToHclTerraform(struct!.patternNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_recognition_generic_error: {
      value: cdktf.numberToHclTerraform(struct!.patternRecognitionGenericError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_recognition_pattern_changed: {
      value: cdktf.numberToHclTerraform(struct!.patternRecognitionPatternChanged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_recognition_proceeded: {
      value: cdktf.numberToHclTerraform(struct!.patternRecognitionProceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pattern_recognition_sampling_started: {
      value: cdktf.numberToHclTerraform(struct!.patternRecognitionSamplingStarted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    payload_too_big: {
      value: cdktf.numberToHclTerraform(struct!.payloadTooBig),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    payload_too_small: {
      value: cdktf.numberToHclTerraform(struct!.payloadTooSmall),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_drop: {
      value: cdktf.numberToHclTerraform(struct!.policyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_violation: {
      value: cdktf.numberToHclTerraform(struct!.policyViolation),
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
    port_conn_limm_exceed: {
      value: cdktf.numberToHclTerraform(struct!.portConnLimmExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_conn_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.portConnRateExceed),
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
    rate1_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.rate1LimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate2_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.rate2LimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate3_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.rate3LimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_start_line_error: {
      value: cdktf.numberToHclTerraform(struct!.readStartLineError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_method_ack: {
      value: cdktf.numberToHclTerraform(struct!.requestMethodAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_method_bye: {
      value: cdktf.numberToHclTerraform(struct!.requestMethodBye),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_method_cancel: {
      value: cdktf.numberToHclTerraform(struct!.requestMethodCancel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_method_info: {
      value: cdktf.numberToHclTerraform(struct!.requestMethodInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_method_invite: {
      value: cdktf.numberToHclTerraform(struct!.requestMethodInvite),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_method_message: {
      value: cdktf.numberToHclTerraform(struct!.requestMethodMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_method_notify: {
      value: cdktf.numberToHclTerraform(struct!.requestMethodNotify),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_method_options: {
      value: cdktf.numberToHclTerraform(struct!.requestMethodOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_method_prack: {
      value: cdktf.numberToHclTerraform(struct!.requestMethodPrack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_method_publish: {
      value: cdktf.numberToHclTerraform(struct!.requestMethodPublish),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_method_refer: {
      value: cdktf.numberToHclTerraform(struct!.requestMethodRefer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_method_register: {
      value: cdktf.numberToHclTerraform(struct!.requestMethodRegister),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_method_subscribe: {
      value: cdktf.numberToHclTerraform(struct!.requestMethodSubscribe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_method_unknown: {
      value: cdktf.numberToHclTerraform(struct!.requestMethodUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_method_update: {
      value: cdktf.numberToHclTerraform(struct!.requestMethodUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_unknown_version: {
      value: cdktf.numberToHclTerraform(struct!.requestUnknownVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_1xx: {
      value: cdktf.numberToHclTerraform(struct!.response1Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_2xx: {
      value: cdktf.numberToHclTerraform(struct!.response2Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_3xx: {
      value: cdktf.numberToHclTerraform(struct!.response3Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_4xx: {
      value: cdktf.numberToHclTerraform(struct!.response4Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_5xx: {
      value: cdktf.numberToHclTerraform(struct!.response5Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_6xx: {
      value: cdktf.numberToHclTerraform(struct!.response6Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_unknown: {
      value: cdktf.numberToHclTerraform(struct!.responseUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_unknown_version: {
      value: cdktf.numberToHclTerraform(struct!.responseUnknownVersion),
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
    secondary_port_conn_limm_exceed: {
      value: cdktf.numberToHclTerraform(struct!.secondaryPortConnLimmExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_port_conn_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.secondaryPortConnRateExceed),
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
    sess_aged: {
      value: cdktf.numberToHclTerraform(struct!.sessAged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sess_create: {
      value: cdktf.numberToHclTerraform(struct!.sessCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sess_create_inbound: {
      value: cdktf.numberToHclTerraform(struct!.sessCreateInbound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sess_create_outbound: {
      value: cdktf.numberToHclTerraform(struct!.sessCreateOutbound),
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
    snat_fail: {
      value: cdktf.numberToHclTerraform(struct!.snatFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spoof_detect_fail: {
      value: cdktf.numberToHclTerraform(struct!.spoofDetectFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_conn_pkt_rate_excd: {
      value: cdktf.numberToHclTerraform(struct!.srcConnPktRateExcd),
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
    src_filter1_match: {
      value: cdktf.numberToHclTerraform(struct!.srcFilter1Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter2_match: {
      value: cdktf.numberToHclTerraform(struct!.srcFilter2Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter3_match: {
      value: cdktf.numberToHclTerraform(struct!.srcFilter3Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter4_match: {
      value: cdktf.numberToHclTerraform(struct!.srcFilter4Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter5_match: {
      value: cdktf.numberToHclTerraform(struct!.srcFilter5Match),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.srcFilterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.srcFilterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcFilterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.srcFilterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter_auth_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcFilterAuthFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter_none_match: {
      value: cdktf.numberToHclTerraform(struct!.srcFilterNoneMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter_total_not_match: {
      value: cdktf.numberToHclTerraform(struct!.srcFilterTotalNotMatch),
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
    src_ntp_monlist_req: {
      value: cdktf.numberToHclTerraform(struct!.srcNtpMonlistReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ntp_monlist_resp: {
      value: cdktf.numberToHclTerraform(struct!.srcNtpMonlistResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_payload_too_big: {
      value: cdktf.numberToHclTerraform(struct!.srcPayloadTooBig),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_payload_too_small: {
      value: cdktf.numberToHclTerraform(struct!.srcPayloadTooSmall),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_rate1_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.srcRate1LimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_rate2_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.srcRate2LimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_rate3_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.srcRate3LimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_udp_auth: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_udp_auth_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpAuthDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_udp_auth_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpAuthFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_udp_auth_timeout: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpAuthTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_udp_retry_gap_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpRetryGapDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_udp_retry_init: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpRetryInit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_udp_retry_pass: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpRetryPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_well_known_port: {
      value: cdktf.numberToHclTerraform(struct!.srcWellKnownPort),
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
    token_authentication_curr_salt_matched: {
      value: cdktf.numberToHclTerraform(struct!.tokenAuthenticationCurrSaltMatched),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_authentication_invalid: {
      value: cdktf.numberToHclTerraform(struct!.tokenAuthenticationInvalid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_authentication_mismatched: {
      value: cdktf.numberToHclTerraform(struct!.tokenAuthenticationMismatched),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_authentication_prev_salt_matched: {
      value: cdktf.numberToHclTerraform(struct!.tokenAuthenticationPrevSaltMatched),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_authentication_session_created: {
      value: cdktf.numberToHclTerraform(struct!.tokenAuthenticationSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_authentication_session_created_fail: {
      value: cdktf.numberToHclTerraform(struct!.tokenAuthenticationSessionCreatedFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    too_many_header: {
      value: cdktf.numberToHclTerraform(struct!.tooManyHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_auth: {
      value: cdktf.numberToHclTerraform(struct!.udpAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_auth_drop: {
      value: cdktf.numberToHclTerraform(struct!.udpAuthDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_auth_fail: {
      value: cdktf.numberToHclTerraform(struct!.udpAuthFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_auth_pass: {
      value: cdktf.numberToHclTerraform(struct!.udpAuthPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_auth_retry_fail: {
      value: cdktf.numberToHclTerraform(struct!.udpAuthRetryFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_auth_retry_gap_drop: {
      value: cdktf.numberToHclTerraform(struct!.udpAuthRetryGapDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_retry_gap_drop: {
      value: cdktf.numberToHclTerraform(struct!.udpRetryGapDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_retry_init: {
      value: cdktf.numberToHclTerraform(struct!.udpRetryInit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_retry_pass: {
      value: cdktf.numberToHclTerraform(struct!.udpRetryPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unauth_src_session_reset: {
      value: cdktf.numberToHclTerraform(struct!.unauthSrcSessionReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wellknown_sport_drop: {
      value: cdktf.numberToHclTerraform(struct!.wellknownSportDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_src_udp_retry_timeout_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.zoneSrcUdpRetryTimeoutBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeStatsSipUdpZonePortStatsSipUdpZonePortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortRangeStatsSipUdpZonePortStatsSipUdpZonePort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allSrcSessionReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.allSrcSessionReset = this._allSrcSessionReset;
    }
    if (this._bl !== undefined) {
      hasAnyValues = true;
      internalValueResult.bl = this._bl;
    }
    if (this._bodyTooBig !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyTooBig = this._bodyTooBig;
    }
    if (this._clearSessionUponDeescalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSessionUponDeescalation = this._clearSessionUponDeescalation;
    }
    if (this._concatenateMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.concatenateMsg = this._concatenateMsg;
    }
    if (this._connPrateExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.connPrateExcd = this._connPrateExcd;
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
    if (this._dstUdpRetryTimeoutBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpRetryTimeoutBlacklist = this._dstUdpRetryTimeoutBlacklist;
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
    if (this._exceedDropClimitSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedDropClimitSrc = this._exceedDropClimitSrc;
    }
    if (this._exceedDropCrateSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedDropCrateSrc = this._exceedDropCrateSrc;
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
    if (this._filterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterActionWhitelist = this._filterActionWhitelist;
    }
    if (this._filterAuthFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterAuthFail = this._filterAuthFail;
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
    if (this._getContentFailError !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchContentFailError = this._getContentFailError;
    }
    if (this._headerFilterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerFilterActionBlacklist = this._headerFilterActionBlacklist;
    }
    if (this._headerFilterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerFilterActionDefaultPass = this._headerFilterActionDefaultPass;
    }
    if (this._headerFilterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerFilterActionDrop = this._headerFilterActionDrop;
    }
    if (this._headerFilterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerFilterActionWhitelist = this._headerFilterActionWhitelist;
    }
    if (this._headerFilterFilter1Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerFilterFilter1Match = this._headerFilterFilter1Match;
    }
    if (this._headerFilterFilter2Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerFilterFilter2Match = this._headerFilterFilter2Match;
    }
    if (this._headerFilterFilter3Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerFilterFilter3Match = this._headerFilterFilter3Match;
    }
    if (this._headerFilterFilter4Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerFilterFilter4Match = this._headerFilterFilter4Match;
    }
    if (this._headerFilterFilter5Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerFilterFilter5Match = this._headerFilterFilter5Match;
    }
    if (this._headerFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerFilterMatch = this._headerFilterMatch;
    }
    if (this._headerFilterNoneMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerFilterNoneMatch = this._headerFilterNoneMatch;
    }
    if (this._headerFilterNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerFilterNotMatch = this._headerFilterNotMatch;
    }
    if (this._headerNameTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerNameTooLong = this._headerNameTooLong;
    }
    if (this._invalidHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidHeader = this._invalidHeader;
    }
    if (this._invalidStartLineError !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidStartLineError = this._invalidStartLineError;
    }
    if (this._ipFilteringBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilteringBl = this._ipFilteringBl;
    }
    if (this._ipFilteringDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilteringDrop = this._ipFilteringDrop;
    }
    if (this._keepAliveMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAliveMsg = this._keepAliveMsg;
    }
    if (this._lineMemAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineMemAllocated = this._lineMemAllocated;
    }
    if (this._lineMemFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineMemFreed = this._lineMemFreed;
    }
    if (this._lineTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineTooLong = this._lineTooLong;
    }
    if (this._malformRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformRequest = this._malformRequest;
    }
    if (this._maxCallIdLenExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCallIdLenExceed = this._maxCallIdLenExceed;
    }
    if (this._maxHeaderValueLenExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeaderValueLenExceed = this._maxHeaderValueLenExceed;
    }
    if (this._maxSdpLenExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSdpLenExceed = this._maxSdpLenExceed;
    }
    if (this._maxUriLenExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUriLenExceed = this._maxUriLenExceed;
    }
    if (this._memAllocFailError !== undefined) {
      hasAnyValues = true;
      internalValueResult.memAllocFailError = this._memAllocFailError;
    }
    if (this._noPolicyClassListMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPolicyClassListMatch = this._noPolicyClassListMatch;
    }
    if (this._noRouteDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRouteDrop = this._noRouteDrop;
    }
    if (this._ntpMonlistReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpMonlistReq = this._ntpMonlistReq;
    }
    if (this._ntpMonlistResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpMonlistResp = this._ntpMonlistResp;
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
    if (this._parseHeaderFailError !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseHeaderFailError = this._parseHeaderFailError;
    }
    if (this._parseStartLineError !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseStartLineError = this._parseStartLineError;
    }
    if (this._patternFilter1Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternFilter1Match = this._patternFilter1Match;
    }
    if (this._patternFilter2Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternFilter2Match = this._patternFilter2Match;
    }
    if (this._patternFilter3Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternFilter3Match = this._patternFilter3Match;
    }
    if (this._patternFilter4Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternFilter4Match = this._patternFilter4Match;
    }
    if (this._patternFilter5Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternFilter5Match = this._patternFilter5Match;
    }
    if (this._patternFilterDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternFilterDrop = this._patternFilterDrop;
    }
    if (this._patternNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternNotFound = this._patternNotFound;
    }
    if (this._patternRecognitionGenericError !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternRecognitionGenericError = this._patternRecognitionGenericError;
    }
    if (this._patternRecognitionPatternChanged !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternRecognitionPatternChanged = this._patternRecognitionPatternChanged;
    }
    if (this._patternRecognitionProceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternRecognitionProceeded = this._patternRecognitionProceeded;
    }
    if (this._patternRecognitionSamplingStarted !== undefined) {
      hasAnyValues = true;
      internalValueResult.patternRecognitionSamplingStarted = this._patternRecognitionSamplingStarted;
    }
    if (this._payloadTooBig !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadTooBig = this._payloadTooBig;
    }
    if (this._payloadTooSmall !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadTooSmall = this._payloadTooSmall;
    }
    if (this._policyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyDrop = this._policyDrop;
    }
    if (this._policyViolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyViolation = this._policyViolation;
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
    if (this._portConnLimmExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portConnLimmExceed = this._portConnLimmExceed;
    }
    if (this._portConnRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portConnRateExceed = this._portConnRateExceed;
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
    if (this._rate1LimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate1LimitExceed = this._rate1LimitExceed;
    }
    if (this._rate2LimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate2LimitExceed = this._rate2LimitExceed;
    }
    if (this._rate3LimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate3LimitExceed = this._rate3LimitExceed;
    }
    if (this._readStartLineError !== undefined) {
      hasAnyValues = true;
      internalValueResult.readStartLineError = this._readStartLineError;
    }
    if (this._requestMethodAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodAck = this._requestMethodAck;
    }
    if (this._requestMethodBye !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodBye = this._requestMethodBye;
    }
    if (this._requestMethodCancel !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodCancel = this._requestMethodCancel;
    }
    if (this._requestMethodInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodInfo = this._requestMethodInfo;
    }
    if (this._requestMethodInvite !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodInvite = this._requestMethodInvite;
    }
    if (this._requestMethodMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodMessage = this._requestMethodMessage;
    }
    if (this._requestMethodNotify !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodNotify = this._requestMethodNotify;
    }
    if (this._requestMethodOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodOptions = this._requestMethodOptions;
    }
    if (this._requestMethodPrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodPrack = this._requestMethodPrack;
    }
    if (this._requestMethodPublish !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodPublish = this._requestMethodPublish;
    }
    if (this._requestMethodRefer !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodRefer = this._requestMethodRefer;
    }
    if (this._requestMethodRegister !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodRegister = this._requestMethodRegister;
    }
    if (this._requestMethodSubscribe !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodSubscribe = this._requestMethodSubscribe;
    }
    if (this._requestMethodUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodUnknown = this._requestMethodUnknown;
    }
    if (this._requestMethodUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodUpdate = this._requestMethodUpdate;
    }
    if (this._requestUnknownVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestUnknownVersion = this._requestUnknownVersion;
    }
    if (this._response1Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.response1Xx = this._response1Xx;
    }
    if (this._response2Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.response2Xx = this._response2Xx;
    }
    if (this._response3Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.response3Xx = this._response3Xx;
    }
    if (this._response4Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.response4Xx = this._response4Xx;
    }
    if (this._response5Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.response5Xx = this._response5Xx;
    }
    if (this._response6Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.response6Xx = this._response6Xx;
    }
    if (this._responseUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseUnknown = this._responseUnknown;
    }
    if (this._responseUnknownVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseUnknownVersion = this._responseUnknownVersion;
    }
    if (this._sameSportDportDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.sameSportDportDrop = this._sameSportDportDrop;
    }
    if (this._secondaryPortConnLimmExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryPortConnLimmExceed = this._secondaryPortConnLimmExceed;
    }
    if (this._secondaryPortConnRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryPortConnRateExceed = this._secondaryPortConnRateExceed;
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
    if (this._sessAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessAged = this._sessAged;
    }
    if (this._sessCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessCreate = this._sessCreate;
    }
    if (this._sessCreateInbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessCreateInbound = this._sessCreateInbound;
    }
    if (this._sessCreateOutbound !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessCreateOutbound = this._sessCreateOutbound;
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
    if (this._snatFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatFail = this._snatFail;
    }
    if (this._spoofDetectFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.spoofDetectFail = this._spoofDetectFail;
    }
    if (this._srcConnPktRateExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcConnPktRateExcd = this._srcConnPktRateExcd;
    }
    if (this._srcDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDrop = this._srcDrop;
    }
    if (this._srcFilter1Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilter1Match = this._srcFilter1Match;
    }
    if (this._srcFilter2Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilter2Match = this._srcFilter2Match;
    }
    if (this._srcFilter3Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilter3Match = this._srcFilter3Match;
    }
    if (this._srcFilter4Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilter4Match = this._srcFilter4Match;
    }
    if (this._srcFilter5Match !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilter5Match = this._srcFilter5Match;
    }
    if (this._srcFilterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilterActionBlacklist = this._srcFilterActionBlacklist;
    }
    if (this._srcFilterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilterActionDefaultPass = this._srcFilterActionDefaultPass;
    }
    if (this._srcFilterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilterActionDrop = this._srcFilterActionDrop;
    }
    if (this._srcFilterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilterActionWhitelist = this._srcFilterActionWhitelist;
    }
    if (this._srcFilterAuthFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilterAuthFail = this._srcFilterAuthFail;
    }
    if (this._srcFilterNoneMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilterNoneMatch = this._srcFilterNoneMatch;
    }
    if (this._srcFilterTotalNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilterTotalNotMatch = this._srcFilterTotalNotMatch;
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
    if (this._srcNtpMonlistReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcNtpMonlistReq = this._srcNtpMonlistReq;
    }
    if (this._srcNtpMonlistResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcNtpMonlistResp = this._srcNtpMonlistResp;
    }
    if (this._srcPayloadTooBig !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPayloadTooBig = this._srcPayloadTooBig;
    }
    if (this._srcPayloadTooSmall !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPayloadTooSmall = this._srcPayloadTooSmall;
    }
    if (this._srcRate1LimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRate1LimitExceed = this._srcRate1LimitExceed;
    }
    if (this._srcRate2LimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRate2LimitExceed = this._srcRate2LimitExceed;
    }
    if (this._srcRate3LimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRate3LimitExceed = this._srcRate3LimitExceed;
    }
    if (this._srcUdpAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpAuth = this._srcUdpAuth;
    }
    if (this._srcUdpAuthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpAuthDrop = this._srcUdpAuthDrop;
    }
    if (this._srcUdpAuthFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpAuthFail = this._srcUdpAuthFail;
    }
    if (this._srcUdpAuthTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpAuthTimeout = this._srcUdpAuthTimeout;
    }
    if (this._srcUdpRetryGapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpRetryGapDrop = this._srcUdpRetryGapDrop;
    }
    if (this._srcUdpRetryInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpRetryInit = this._srcUdpRetryInit;
    }
    if (this._srcUdpRetryPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpRetryPass = this._srcUdpRetryPass;
    }
    if (this._srcWellKnownPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcWellKnownPort = this._srcWellKnownPort;
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
    if (this._tokenAuthenticationCurrSaltMatched !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenAuthenticationCurrSaltMatched = this._tokenAuthenticationCurrSaltMatched;
    }
    if (this._tokenAuthenticationInvalid !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenAuthenticationInvalid = this._tokenAuthenticationInvalid;
    }
    if (this._tokenAuthenticationMismatched !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenAuthenticationMismatched = this._tokenAuthenticationMismatched;
    }
    if (this._tokenAuthenticationPrevSaltMatched !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenAuthenticationPrevSaltMatched = this._tokenAuthenticationPrevSaltMatched;
    }
    if (this._tokenAuthenticationSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenAuthenticationSessionCreated = this._tokenAuthenticationSessionCreated;
    }
    if (this._tokenAuthenticationSessionCreatedFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenAuthenticationSessionCreatedFail = this._tokenAuthenticationSessionCreatedFail;
    }
    if (this._tooManyHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooManyHeader = this._tooManyHeader;
    }
    if (this._udpAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpAuth = this._udpAuth;
    }
    if (this._udpAuthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpAuthDrop = this._udpAuthDrop;
    }
    if (this._udpAuthFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpAuthFail = this._udpAuthFail;
    }
    if (this._udpAuthPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpAuthPass = this._udpAuthPass;
    }
    if (this._udpAuthRetryFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpAuthRetryFail = this._udpAuthRetryFail;
    }
    if (this._udpAuthRetryGapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpAuthRetryGapDrop = this._udpAuthRetryGapDrop;
    }
    if (this._udpRetryGapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpRetryGapDrop = this._udpRetryGapDrop;
    }
    if (this._udpRetryInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpRetryInit = this._udpRetryInit;
    }
    if (this._udpRetryPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpRetryPass = this._udpRetryPass;
    }
    if (this._unauthSrcSessionReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.unauthSrcSessionReset = this._unauthSrcSessionReset;
    }
    if (this._wellknownSportDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.wellknownSportDrop = this._wellknownSportDrop;
    }
    if (this._zoneSrcUdpRetryTimeoutBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneSrcUdpRetryTimeoutBlacklist = this._zoneSrcUdpRetryTimeoutBlacklist;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeStatsSipUdpZonePortStatsSipUdpZonePort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allSrcSessionReset = undefined;
      this._bl = undefined;
      this._bodyTooBig = undefined;
      this._clearSessionUponDeescalation = undefined;
      this._concatenateMsg = undefined;
      this._connPrateExcd = undefined;
      this._currentEsLevel = undefined;
      this._dstHwDrop = undefined;
      this._dstHwDropInserted = undefined;
      this._dstHwDropRemoved = undefined;
      this._dstUdpRetryTimeoutBlacklist = undefined;
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
      this._exceedDropClimitSrc = undefined;
      this._exceedDropCrateSrc = undefined;
      this._exceedDropPrateSrc = undefined;
      this._filter1Match = undefined;
      this._filter2Match = undefined;
      this._filter3Match = undefined;
      this._filter4Match = undefined;
      this._filter5Match = undefined;
      this._filterActionBlacklist = undefined;
      this._filterActionDefaultPass = undefined;
      this._filterActionDrop = undefined;
      this._filterActionWhitelist = undefined;
      this._filterAuthFail = undefined;
      this._filterNoneMatch = undefined;
      this._filterTotalNotMatch = undefined;
      this._fragDrop = undefined;
      this._fragRcvd = undefined;
      this._fragTimeout = undefined;
      this._getContentFailError = undefined;
      this._headerFilterActionBlacklist = undefined;
      this._headerFilterActionDefaultPass = undefined;
      this._headerFilterActionDrop = undefined;
      this._headerFilterActionWhitelist = undefined;
      this._headerFilterFilter1Match = undefined;
      this._headerFilterFilter2Match = undefined;
      this._headerFilterFilter3Match = undefined;
      this._headerFilterFilter4Match = undefined;
      this._headerFilterFilter5Match = undefined;
      this._headerFilterMatch = undefined;
      this._headerFilterNoneMatch = undefined;
      this._headerFilterNotMatch = undefined;
      this._headerNameTooLong = undefined;
      this._invalidHeader = undefined;
      this._invalidStartLineError = undefined;
      this._ipFilteringBl = undefined;
      this._ipFilteringDrop = undefined;
      this._keepAliveMsg = undefined;
      this._lineMemAllocated = undefined;
      this._lineMemFreed = undefined;
      this._lineTooLong = undefined;
      this._malformRequest = undefined;
      this._maxCallIdLenExceed = undefined;
      this._maxHeaderValueLenExceed = undefined;
      this._maxSdpLenExceed = undefined;
      this._maxUriLenExceed = undefined;
      this._memAllocFailError = undefined;
      this._noPolicyClassListMatch = undefined;
      this._noRouteDrop = undefined;
      this._ntpMonlistReq = undefined;
      this._ntpMonlistResp = undefined;
      this._outboundPortBytes = undefined;
      this._outboundPortBytesDrop = undefined;
      this._outboundPortBytesSent = undefined;
      this._outboundPortDrop = undefined;
      this._outboundPortPktSent = undefined;
      this._outboundPortRcvd = undefined;
      this._parseHeaderFailError = undefined;
      this._parseStartLineError = undefined;
      this._patternFilter1Match = undefined;
      this._patternFilter2Match = undefined;
      this._patternFilter3Match = undefined;
      this._patternFilter4Match = undefined;
      this._patternFilter5Match = undefined;
      this._patternFilterDrop = undefined;
      this._patternNotFound = undefined;
      this._patternRecognitionGenericError = undefined;
      this._patternRecognitionPatternChanged = undefined;
      this._patternRecognitionProceeded = undefined;
      this._patternRecognitionSamplingStarted = undefined;
      this._payloadTooBig = undefined;
      this._payloadTooSmall = undefined;
      this._policyDrop = undefined;
      this._policyViolation = undefined;
      this._portBytes = undefined;
      this._portBytesDrop = undefined;
      this._portBytesSent = undefined;
      this._portConnLimmExceed = undefined;
      this._portConnRateExceed = undefined;
      this._portDrop = undefined;
      this._portKbitRateExceed = undefined;
      this._portKbitRateExceedPkt = undefined;
      this._portPktRateExceed = undefined;
      this._portPktSent = undefined;
      this._portRcvd = undefined;
      this._portSrcBl = undefined;
      this._portSrcEscalation = undefined;
      this._rate1LimitExceed = undefined;
      this._rate2LimitExceed = undefined;
      this._rate3LimitExceed = undefined;
      this._readStartLineError = undefined;
      this._requestMethodAck = undefined;
      this._requestMethodBye = undefined;
      this._requestMethodCancel = undefined;
      this._requestMethodInfo = undefined;
      this._requestMethodInvite = undefined;
      this._requestMethodMessage = undefined;
      this._requestMethodNotify = undefined;
      this._requestMethodOptions = undefined;
      this._requestMethodPrack = undefined;
      this._requestMethodPublish = undefined;
      this._requestMethodRefer = undefined;
      this._requestMethodRegister = undefined;
      this._requestMethodSubscribe = undefined;
      this._requestMethodUnknown = undefined;
      this._requestMethodUpdate = undefined;
      this._requestUnknownVersion = undefined;
      this._response1Xx = undefined;
      this._response2Xx = undefined;
      this._response3Xx = undefined;
      this._response4Xx = undefined;
      this._response5Xx = undefined;
      this._response6Xx = undefined;
      this._responseUnknown = undefined;
      this._responseUnknownVersion = undefined;
      this._sameSportDportDrop = undefined;
      this._secondaryPortConnLimmExceed = undefined;
      this._secondaryPortConnRateExceed = undefined;
      this._secondaryPortHit = undefined;
      this._secondaryPortKbitRateExceed = undefined;
      this._secondaryPortKbitRateExceedPkt = undefined;
      this._secondaryPortPktRateExceed = undefined;
      this._sessAged = undefined;
      this._sessCreate = undefined;
      this._sessCreateInbound = undefined;
      this._sessCreateOutbound = undefined;
      this._sflowExternalPacketsSent = undefined;
      this._sflowExternalSamplesPacked = undefined;
      this._sflowInternalPacketsSent = undefined;
      this._sflowInternalSamplesPacked = undefined;
      this._snatFail = undefined;
      this._spoofDetectFail = undefined;
      this._srcConnPktRateExcd = undefined;
      this._srcDrop = undefined;
      this._srcFilter1Match = undefined;
      this._srcFilter2Match = undefined;
      this._srcFilter3Match = undefined;
      this._srcFilter4Match = undefined;
      this._srcFilter5Match = undefined;
      this._srcFilterActionBlacklist = undefined;
      this._srcFilterActionDefaultPass = undefined;
      this._srcFilterActionDrop = undefined;
      this._srcFilterActionWhitelist = undefined;
      this._srcFilterAuthFail = undefined;
      this._srcFilterNoneMatch = undefined;
      this._srcFilterTotalNotMatch = undefined;
      this._srcFragDrop = undefined;
      this._srcHwDrop = undefined;
      this._srcHwDropInserted = undefined;
      this._srcHwDropRemoved = undefined;
      this._srcLearnOverflow = undefined;
      this._srcNtpMonlistReq = undefined;
      this._srcNtpMonlistResp = undefined;
      this._srcPayloadTooBig = undefined;
      this._srcPayloadTooSmall = undefined;
      this._srcRate1LimitExceed = undefined;
      this._srcRate2LimitExceed = undefined;
      this._srcRate3LimitExceed = undefined;
      this._srcUdpAuth = undefined;
      this._srcUdpAuthDrop = undefined;
      this._srcUdpAuthFail = undefined;
      this._srcUdpAuthTimeout = undefined;
      this._srcUdpRetryGapDrop = undefined;
      this._srcUdpRetryInit = undefined;
      this._srcUdpRetryPass = undefined;
      this._srcWellKnownPort = undefined;
      this._srcZoneServiceEntryAged = undefined;
      this._srcZoneServiceEntryHit = undefined;
      this._srcZoneServiceEntryLearned = undefined;
      this._tokenAuthenticationCurrSaltMatched = undefined;
      this._tokenAuthenticationInvalid = undefined;
      this._tokenAuthenticationMismatched = undefined;
      this._tokenAuthenticationPrevSaltMatched = undefined;
      this._tokenAuthenticationSessionCreated = undefined;
      this._tokenAuthenticationSessionCreatedFail = undefined;
      this._tooManyHeader = undefined;
      this._udpAuth = undefined;
      this._udpAuthDrop = undefined;
      this._udpAuthFail = undefined;
      this._udpAuthPass = undefined;
      this._udpAuthRetryFail = undefined;
      this._udpAuthRetryGapDrop = undefined;
      this._udpRetryGapDrop = undefined;
      this._udpRetryInit = undefined;
      this._udpRetryPass = undefined;
      this._unauthSrcSessionReset = undefined;
      this._wellknownSportDrop = undefined;
      this._zoneSrcUdpRetryTimeoutBlacklist = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allSrcSessionReset = value.allSrcSessionReset;
      this._bl = value.bl;
      this._bodyTooBig = value.bodyTooBig;
      this._clearSessionUponDeescalation = value.clearSessionUponDeescalation;
      this._concatenateMsg = value.concatenateMsg;
      this._connPrateExcd = value.connPrateExcd;
      this._currentEsLevel = value.currentEsLevel;
      this._dstHwDrop = value.dstHwDrop;
      this._dstHwDropInserted = value.dstHwDropInserted;
      this._dstHwDropRemoved = value.dstHwDropRemoved;
      this._dstUdpRetryTimeoutBlacklist = value.dstUdpRetryTimeoutBlacklist;
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
      this._exceedDropClimitSrc = value.exceedDropClimitSrc;
      this._exceedDropCrateSrc = value.exceedDropCrateSrc;
      this._exceedDropPrateSrc = value.exceedDropPrateSrc;
      this._filter1Match = value.filter1Match;
      this._filter2Match = value.filter2Match;
      this._filter3Match = value.filter3Match;
      this._filter4Match = value.filter4Match;
      this._filter5Match = value.filter5Match;
      this._filterActionBlacklist = value.filterActionBlacklist;
      this._filterActionDefaultPass = value.filterActionDefaultPass;
      this._filterActionDrop = value.filterActionDrop;
      this._filterActionWhitelist = value.filterActionWhitelist;
      this._filterAuthFail = value.filterAuthFail;
      this._filterNoneMatch = value.filterNoneMatch;
      this._filterTotalNotMatch = value.filterTotalNotMatch;
      this._fragDrop = value.fragDrop;
      this._fragRcvd = value.fragRcvd;
      this._fragTimeout = value.fragTimeout;
      this._getContentFailError = value.fetchContentFailError;
      this._headerFilterActionBlacklist = value.headerFilterActionBlacklist;
      this._headerFilterActionDefaultPass = value.headerFilterActionDefaultPass;
      this._headerFilterActionDrop = value.headerFilterActionDrop;
      this._headerFilterActionWhitelist = value.headerFilterActionWhitelist;
      this._headerFilterFilter1Match = value.headerFilterFilter1Match;
      this._headerFilterFilter2Match = value.headerFilterFilter2Match;
      this._headerFilterFilter3Match = value.headerFilterFilter3Match;
      this._headerFilterFilter4Match = value.headerFilterFilter4Match;
      this._headerFilterFilter5Match = value.headerFilterFilter5Match;
      this._headerFilterMatch = value.headerFilterMatch;
      this._headerFilterNoneMatch = value.headerFilterNoneMatch;
      this._headerFilterNotMatch = value.headerFilterNotMatch;
      this._headerNameTooLong = value.headerNameTooLong;
      this._invalidHeader = value.invalidHeader;
      this._invalidStartLineError = value.invalidStartLineError;
      this._ipFilteringBl = value.ipFilteringBl;
      this._ipFilteringDrop = value.ipFilteringDrop;
      this._keepAliveMsg = value.keepAliveMsg;
      this._lineMemAllocated = value.lineMemAllocated;
      this._lineMemFreed = value.lineMemFreed;
      this._lineTooLong = value.lineTooLong;
      this._malformRequest = value.malformRequest;
      this._maxCallIdLenExceed = value.maxCallIdLenExceed;
      this._maxHeaderValueLenExceed = value.maxHeaderValueLenExceed;
      this._maxSdpLenExceed = value.maxSdpLenExceed;
      this._maxUriLenExceed = value.maxUriLenExceed;
      this._memAllocFailError = value.memAllocFailError;
      this._noPolicyClassListMatch = value.noPolicyClassListMatch;
      this._noRouteDrop = value.noRouteDrop;
      this._ntpMonlistReq = value.ntpMonlistReq;
      this._ntpMonlistResp = value.ntpMonlistResp;
      this._outboundPortBytes = value.outboundPortBytes;
      this._outboundPortBytesDrop = value.outboundPortBytesDrop;
      this._outboundPortBytesSent = value.outboundPortBytesSent;
      this._outboundPortDrop = value.outboundPortDrop;
      this._outboundPortPktSent = value.outboundPortPktSent;
      this._outboundPortRcvd = value.outboundPortRcvd;
      this._parseHeaderFailError = value.parseHeaderFailError;
      this._parseStartLineError = value.parseStartLineError;
      this._patternFilter1Match = value.patternFilter1Match;
      this._patternFilter2Match = value.patternFilter2Match;
      this._patternFilter3Match = value.patternFilter3Match;
      this._patternFilter4Match = value.patternFilter4Match;
      this._patternFilter5Match = value.patternFilter5Match;
      this._patternFilterDrop = value.patternFilterDrop;
      this._patternNotFound = value.patternNotFound;
      this._patternRecognitionGenericError = value.patternRecognitionGenericError;
      this._patternRecognitionPatternChanged = value.patternRecognitionPatternChanged;
      this._patternRecognitionProceeded = value.patternRecognitionProceeded;
      this._patternRecognitionSamplingStarted = value.patternRecognitionSamplingStarted;
      this._payloadTooBig = value.payloadTooBig;
      this._payloadTooSmall = value.payloadTooSmall;
      this._policyDrop = value.policyDrop;
      this._policyViolation = value.policyViolation;
      this._portBytes = value.portBytes;
      this._portBytesDrop = value.portBytesDrop;
      this._portBytesSent = value.portBytesSent;
      this._portConnLimmExceed = value.portConnLimmExceed;
      this._portConnRateExceed = value.portConnRateExceed;
      this._portDrop = value.portDrop;
      this._portKbitRateExceed = value.portKbitRateExceed;
      this._portKbitRateExceedPkt = value.portKbitRateExceedPkt;
      this._portPktRateExceed = value.portPktRateExceed;
      this._portPktSent = value.portPktSent;
      this._portRcvd = value.portRcvd;
      this._portSrcBl = value.portSrcBl;
      this._portSrcEscalation = value.portSrcEscalation;
      this._rate1LimitExceed = value.rate1LimitExceed;
      this._rate2LimitExceed = value.rate2LimitExceed;
      this._rate3LimitExceed = value.rate3LimitExceed;
      this._readStartLineError = value.readStartLineError;
      this._requestMethodAck = value.requestMethodAck;
      this._requestMethodBye = value.requestMethodBye;
      this._requestMethodCancel = value.requestMethodCancel;
      this._requestMethodInfo = value.requestMethodInfo;
      this._requestMethodInvite = value.requestMethodInvite;
      this._requestMethodMessage = value.requestMethodMessage;
      this._requestMethodNotify = value.requestMethodNotify;
      this._requestMethodOptions = value.requestMethodOptions;
      this._requestMethodPrack = value.requestMethodPrack;
      this._requestMethodPublish = value.requestMethodPublish;
      this._requestMethodRefer = value.requestMethodRefer;
      this._requestMethodRegister = value.requestMethodRegister;
      this._requestMethodSubscribe = value.requestMethodSubscribe;
      this._requestMethodUnknown = value.requestMethodUnknown;
      this._requestMethodUpdate = value.requestMethodUpdate;
      this._requestUnknownVersion = value.requestUnknownVersion;
      this._response1Xx = value.response1Xx;
      this._response2Xx = value.response2Xx;
      this._response3Xx = value.response3Xx;
      this._response4Xx = value.response4Xx;
      this._response5Xx = value.response5Xx;
      this._response6Xx = value.response6Xx;
      this._responseUnknown = value.responseUnknown;
      this._responseUnknownVersion = value.responseUnknownVersion;
      this._sameSportDportDrop = value.sameSportDportDrop;
      this._secondaryPortConnLimmExceed = value.secondaryPortConnLimmExceed;
      this._secondaryPortConnRateExceed = value.secondaryPortConnRateExceed;
      this._secondaryPortHit = value.secondaryPortHit;
      this._secondaryPortKbitRateExceed = value.secondaryPortKbitRateExceed;
      this._secondaryPortKbitRateExceedPkt = value.secondaryPortKbitRateExceedPkt;
      this._secondaryPortPktRateExceed = value.secondaryPortPktRateExceed;
      this._sessAged = value.sessAged;
      this._sessCreate = value.sessCreate;
      this._sessCreateInbound = value.sessCreateInbound;
      this._sessCreateOutbound = value.sessCreateOutbound;
      this._sflowExternalPacketsSent = value.sflowExternalPacketsSent;
      this._sflowExternalSamplesPacked = value.sflowExternalSamplesPacked;
      this._sflowInternalPacketsSent = value.sflowInternalPacketsSent;
      this._sflowInternalSamplesPacked = value.sflowInternalSamplesPacked;
      this._snatFail = value.snatFail;
      this._spoofDetectFail = value.spoofDetectFail;
      this._srcConnPktRateExcd = value.srcConnPktRateExcd;
      this._srcDrop = value.srcDrop;
      this._srcFilter1Match = value.srcFilter1Match;
      this._srcFilter2Match = value.srcFilter2Match;
      this._srcFilter3Match = value.srcFilter3Match;
      this._srcFilter4Match = value.srcFilter4Match;
      this._srcFilter5Match = value.srcFilter5Match;
      this._srcFilterActionBlacklist = value.srcFilterActionBlacklist;
      this._srcFilterActionDefaultPass = value.srcFilterActionDefaultPass;
      this._srcFilterActionDrop = value.srcFilterActionDrop;
      this._srcFilterActionWhitelist = value.srcFilterActionWhitelist;
      this._srcFilterAuthFail = value.srcFilterAuthFail;
      this._srcFilterNoneMatch = value.srcFilterNoneMatch;
      this._srcFilterTotalNotMatch = value.srcFilterTotalNotMatch;
      this._srcFragDrop = value.srcFragDrop;
      this._srcHwDrop = value.srcHwDrop;
      this._srcHwDropInserted = value.srcHwDropInserted;
      this._srcHwDropRemoved = value.srcHwDropRemoved;
      this._srcLearnOverflow = value.srcLearnOverflow;
      this._srcNtpMonlistReq = value.srcNtpMonlistReq;
      this._srcNtpMonlistResp = value.srcNtpMonlistResp;
      this._srcPayloadTooBig = value.srcPayloadTooBig;
      this._srcPayloadTooSmall = value.srcPayloadTooSmall;
      this._srcRate1LimitExceed = value.srcRate1LimitExceed;
      this._srcRate2LimitExceed = value.srcRate2LimitExceed;
      this._srcRate3LimitExceed = value.srcRate3LimitExceed;
      this._srcUdpAuth = value.srcUdpAuth;
      this._srcUdpAuthDrop = value.srcUdpAuthDrop;
      this._srcUdpAuthFail = value.srcUdpAuthFail;
      this._srcUdpAuthTimeout = value.srcUdpAuthTimeout;
      this._srcUdpRetryGapDrop = value.srcUdpRetryGapDrop;
      this._srcUdpRetryInit = value.srcUdpRetryInit;
      this._srcUdpRetryPass = value.srcUdpRetryPass;
      this._srcWellKnownPort = value.srcWellKnownPort;
      this._srcZoneServiceEntryAged = value.srcZoneServiceEntryAged;
      this._srcZoneServiceEntryHit = value.srcZoneServiceEntryHit;
      this._srcZoneServiceEntryLearned = value.srcZoneServiceEntryLearned;
      this._tokenAuthenticationCurrSaltMatched = value.tokenAuthenticationCurrSaltMatched;
      this._tokenAuthenticationInvalid = value.tokenAuthenticationInvalid;
      this._tokenAuthenticationMismatched = value.tokenAuthenticationMismatched;
      this._tokenAuthenticationPrevSaltMatched = value.tokenAuthenticationPrevSaltMatched;
      this._tokenAuthenticationSessionCreated = value.tokenAuthenticationSessionCreated;
      this._tokenAuthenticationSessionCreatedFail = value.tokenAuthenticationSessionCreatedFail;
      this._tooManyHeader = value.tooManyHeader;
      this._udpAuth = value.udpAuth;
      this._udpAuthDrop = value.udpAuthDrop;
      this._udpAuthFail = value.udpAuthFail;
      this._udpAuthPass = value.udpAuthPass;
      this._udpAuthRetryFail = value.udpAuthRetryFail;
      this._udpAuthRetryGapDrop = value.udpAuthRetryGapDrop;
      this._udpRetryGapDrop = value.udpRetryGapDrop;
      this._udpRetryInit = value.udpRetryInit;
      this._udpRetryPass = value.udpRetryPass;
      this._unauthSrcSessionReset = value.unauthSrcSessionReset;
      this._wellknownSportDrop = value.wellknownSportDrop;
      this._zoneSrcUdpRetryTimeoutBlacklist = value.zoneSrcUdpRetryTimeoutBlacklist;
    }
  }

  // all_src_session_reset - computed: false, optional: true, required: false
  private _allSrcSessionReset?: number; 
  public get allSrcSessionReset() {
    return this.getNumberAttribute('all_src_session_reset');
  }
  public set allSrcSessionReset(value: number) {
    this._allSrcSessionReset = value;
  }
  public resetAllSrcSessionReset() {
    this._allSrcSessionReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allSrcSessionResetInput() {
    return this._allSrcSessionReset;
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

  // body_too_big - computed: false, optional: true, required: false
  private _bodyTooBig?: number; 
  public get bodyTooBig() {
    return this.getNumberAttribute('body_too_big');
  }
  public set bodyTooBig(value: number) {
    this._bodyTooBig = value;
  }
  public resetBodyTooBig() {
    this._bodyTooBig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyTooBigInput() {
    return this._bodyTooBig;
  }

  // clear_session_upon_deescalation - computed: false, optional: true, required: false
  private _clearSessionUponDeescalation?: number; 
  public get clearSessionUponDeescalation() {
    return this.getNumberAttribute('clear_session_upon_deescalation');
  }
  public set clearSessionUponDeescalation(value: number) {
    this._clearSessionUponDeescalation = value;
  }
  public resetClearSessionUponDeescalation() {
    this._clearSessionUponDeescalation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearSessionUponDeescalationInput() {
    return this._clearSessionUponDeescalation;
  }

  // concatenate_msg - computed: false, optional: true, required: false
  private _concatenateMsg?: number; 
  public get concatenateMsg() {
    return this.getNumberAttribute('concatenate_msg');
  }
  public set concatenateMsg(value: number) {
    this._concatenateMsg = value;
  }
  public resetConcatenateMsg() {
    this._concatenateMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concatenateMsgInput() {
    return this._concatenateMsg;
  }

  // conn_prate_excd - computed: false, optional: true, required: false
  private _connPrateExcd?: number; 
  public get connPrateExcd() {
    return this.getNumberAttribute('conn_prate_excd');
  }
  public set connPrateExcd(value: number) {
    this._connPrateExcd = value;
  }
  public resetConnPrateExcd() {
    this._connPrateExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connPrateExcdInput() {
    return this._connPrateExcd;
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

  // dst_udp_retry_timeout_blacklist - computed: false, optional: true, required: false
  private _dstUdpRetryTimeoutBlacklist?: number; 
  public get dstUdpRetryTimeoutBlacklist() {
    return this.getNumberAttribute('dst_udp_retry_timeout_blacklist');
  }
  public set dstUdpRetryTimeoutBlacklist(value: number) {
    this._dstUdpRetryTimeoutBlacklist = value;
  }
  public resetDstUdpRetryTimeoutBlacklist() {
    this._dstUdpRetryTimeoutBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpRetryTimeoutBlacklistInput() {
    return this._dstUdpRetryTimeoutBlacklist;
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

  // exceed_drop_climit_src - computed: false, optional: true, required: false
  private _exceedDropClimitSrc?: number; 
  public get exceedDropClimitSrc() {
    return this.getNumberAttribute('exceed_drop_climit_src');
  }
  public set exceedDropClimitSrc(value: number) {
    this._exceedDropClimitSrc = value;
  }
  public resetExceedDropClimitSrc() {
    this._exceedDropClimitSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedDropClimitSrcInput() {
    return this._exceedDropClimitSrc;
  }

  // exceed_drop_crate_src - computed: false, optional: true, required: false
  private _exceedDropCrateSrc?: number; 
  public get exceedDropCrateSrc() {
    return this.getNumberAttribute('exceed_drop_crate_src');
  }
  public set exceedDropCrateSrc(value: number) {
    this._exceedDropCrateSrc = value;
  }
  public resetExceedDropCrateSrc() {
    this._exceedDropCrateSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedDropCrateSrcInput() {
    return this._exceedDropCrateSrc;
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

  // filter_action_whitelist - computed: false, optional: true, required: false
  private _filterActionWhitelist?: number; 
  public get filterActionWhitelist() {
    return this.getNumberAttribute('filter_action_whitelist');
  }
  public set filterActionWhitelist(value: number) {
    this._filterActionWhitelist = value;
  }
  public resetFilterActionWhitelist() {
    this._filterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterActionWhitelistInput() {
    return this._filterActionWhitelist;
  }

  // filter_auth_fail - computed: false, optional: true, required: false
  private _filterAuthFail?: number; 
  public get filterAuthFail() {
    return this.getNumberAttribute('filter_auth_fail');
  }
  public set filterAuthFail(value: number) {
    this._filterAuthFail = value;
  }
  public resetFilterAuthFail() {
    this._filterAuthFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterAuthFailInput() {
    return this._filterAuthFail;
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

  // get_content_fail_error - computed: false, optional: true, required: false
  private _getContentFailError?: number; 
  public get fetchContentFailError() {
    return this.getNumberAttribute('get_content_fail_error');
  }
  public set fetchContentFailError(value: number) {
    this._getContentFailError = value;
  }
  public resetFetchContentFailError() {
    this._getContentFailError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchContentFailErrorInput() {
    return this._getContentFailError;
  }

  // header_filter_action_blacklist - computed: false, optional: true, required: false
  private _headerFilterActionBlacklist?: number; 
  public get headerFilterActionBlacklist() {
    return this.getNumberAttribute('header_filter_action_blacklist');
  }
  public set headerFilterActionBlacklist(value: number) {
    this._headerFilterActionBlacklist = value;
  }
  public resetHeaderFilterActionBlacklist() {
    this._headerFilterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerFilterActionBlacklistInput() {
    return this._headerFilterActionBlacklist;
  }

  // header_filter_action_default_pass - computed: false, optional: true, required: false
  private _headerFilterActionDefaultPass?: number; 
  public get headerFilterActionDefaultPass() {
    return this.getNumberAttribute('header_filter_action_default_pass');
  }
  public set headerFilterActionDefaultPass(value: number) {
    this._headerFilterActionDefaultPass = value;
  }
  public resetHeaderFilterActionDefaultPass() {
    this._headerFilterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerFilterActionDefaultPassInput() {
    return this._headerFilterActionDefaultPass;
  }

  // header_filter_action_drop - computed: false, optional: true, required: false
  private _headerFilterActionDrop?: number; 
  public get headerFilterActionDrop() {
    return this.getNumberAttribute('header_filter_action_drop');
  }
  public set headerFilterActionDrop(value: number) {
    this._headerFilterActionDrop = value;
  }
  public resetHeaderFilterActionDrop() {
    this._headerFilterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerFilterActionDropInput() {
    return this._headerFilterActionDrop;
  }

  // header_filter_action_whitelist - computed: false, optional: true, required: false
  private _headerFilterActionWhitelist?: number; 
  public get headerFilterActionWhitelist() {
    return this.getNumberAttribute('header_filter_action_whitelist');
  }
  public set headerFilterActionWhitelist(value: number) {
    this._headerFilterActionWhitelist = value;
  }
  public resetHeaderFilterActionWhitelist() {
    this._headerFilterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerFilterActionWhitelistInput() {
    return this._headerFilterActionWhitelist;
  }

  // header_filter_filter1_match - computed: false, optional: true, required: false
  private _headerFilterFilter1Match?: number; 
  public get headerFilterFilter1Match() {
    return this.getNumberAttribute('header_filter_filter1_match');
  }
  public set headerFilterFilter1Match(value: number) {
    this._headerFilterFilter1Match = value;
  }
  public resetHeaderFilterFilter1Match() {
    this._headerFilterFilter1Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerFilterFilter1MatchInput() {
    return this._headerFilterFilter1Match;
  }

  // header_filter_filter2_match - computed: false, optional: true, required: false
  private _headerFilterFilter2Match?: number; 
  public get headerFilterFilter2Match() {
    return this.getNumberAttribute('header_filter_filter2_match');
  }
  public set headerFilterFilter2Match(value: number) {
    this._headerFilterFilter2Match = value;
  }
  public resetHeaderFilterFilter2Match() {
    this._headerFilterFilter2Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerFilterFilter2MatchInput() {
    return this._headerFilterFilter2Match;
  }

  // header_filter_filter3_match - computed: false, optional: true, required: false
  private _headerFilterFilter3Match?: number; 
  public get headerFilterFilter3Match() {
    return this.getNumberAttribute('header_filter_filter3_match');
  }
  public set headerFilterFilter3Match(value: number) {
    this._headerFilterFilter3Match = value;
  }
  public resetHeaderFilterFilter3Match() {
    this._headerFilterFilter3Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerFilterFilter3MatchInput() {
    return this._headerFilterFilter3Match;
  }

  // header_filter_filter4_match - computed: false, optional: true, required: false
  private _headerFilterFilter4Match?: number; 
  public get headerFilterFilter4Match() {
    return this.getNumberAttribute('header_filter_filter4_match');
  }
  public set headerFilterFilter4Match(value: number) {
    this._headerFilterFilter4Match = value;
  }
  public resetHeaderFilterFilter4Match() {
    this._headerFilterFilter4Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerFilterFilter4MatchInput() {
    return this._headerFilterFilter4Match;
  }

  // header_filter_filter5_match - computed: false, optional: true, required: false
  private _headerFilterFilter5Match?: number; 
  public get headerFilterFilter5Match() {
    return this.getNumberAttribute('header_filter_filter5_match');
  }
  public set headerFilterFilter5Match(value: number) {
    this._headerFilterFilter5Match = value;
  }
  public resetHeaderFilterFilter5Match() {
    this._headerFilterFilter5Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerFilterFilter5MatchInput() {
    return this._headerFilterFilter5Match;
  }

  // header_filter_match - computed: false, optional: true, required: false
  private _headerFilterMatch?: number; 
  public get headerFilterMatch() {
    return this.getNumberAttribute('header_filter_match');
  }
  public set headerFilterMatch(value: number) {
    this._headerFilterMatch = value;
  }
  public resetHeaderFilterMatch() {
    this._headerFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerFilterMatchInput() {
    return this._headerFilterMatch;
  }

  // header_filter_none_match - computed: false, optional: true, required: false
  private _headerFilterNoneMatch?: number; 
  public get headerFilterNoneMatch() {
    return this.getNumberAttribute('header_filter_none_match');
  }
  public set headerFilterNoneMatch(value: number) {
    this._headerFilterNoneMatch = value;
  }
  public resetHeaderFilterNoneMatch() {
    this._headerFilterNoneMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerFilterNoneMatchInput() {
    return this._headerFilterNoneMatch;
  }

  // header_filter_not_match - computed: false, optional: true, required: false
  private _headerFilterNotMatch?: number; 
  public get headerFilterNotMatch() {
    return this.getNumberAttribute('header_filter_not_match');
  }
  public set headerFilterNotMatch(value: number) {
    this._headerFilterNotMatch = value;
  }
  public resetHeaderFilterNotMatch() {
    this._headerFilterNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerFilterNotMatchInput() {
    return this._headerFilterNotMatch;
  }

  // header_name_too_long - computed: false, optional: true, required: false
  private _headerNameTooLong?: number; 
  public get headerNameTooLong() {
    return this.getNumberAttribute('header_name_too_long');
  }
  public set headerNameTooLong(value: number) {
    this._headerNameTooLong = value;
  }
  public resetHeaderNameTooLong() {
    this._headerNameTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameTooLongInput() {
    return this._headerNameTooLong;
  }

  // invalid_header - computed: false, optional: true, required: false
  private _invalidHeader?: number; 
  public get invalidHeader() {
    return this.getNumberAttribute('invalid_header');
  }
  public set invalidHeader(value: number) {
    this._invalidHeader = value;
  }
  public resetInvalidHeader() {
    this._invalidHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidHeaderInput() {
    return this._invalidHeader;
  }

  // invalid_start_line_error - computed: false, optional: true, required: false
  private _invalidStartLineError?: number; 
  public get invalidStartLineError() {
    return this.getNumberAttribute('invalid_start_line_error');
  }
  public set invalidStartLineError(value: number) {
    this._invalidStartLineError = value;
  }
  public resetInvalidStartLineError() {
    this._invalidStartLineError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidStartLineErrorInput() {
    return this._invalidStartLineError;
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

  // keep_alive_msg - computed: false, optional: true, required: false
  private _keepAliveMsg?: number; 
  public get keepAliveMsg() {
    return this.getNumberAttribute('keep_alive_msg');
  }
  public set keepAliveMsg(value: number) {
    this._keepAliveMsg = value;
  }
  public resetKeepAliveMsg() {
    this._keepAliveMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveMsgInput() {
    return this._keepAliveMsg;
  }

  // line_mem_allocated - computed: false, optional: true, required: false
  private _lineMemAllocated?: number; 
  public get lineMemAllocated() {
    return this.getNumberAttribute('line_mem_allocated');
  }
  public set lineMemAllocated(value: number) {
    this._lineMemAllocated = value;
  }
  public resetLineMemAllocated() {
    this._lineMemAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineMemAllocatedInput() {
    return this._lineMemAllocated;
  }

  // line_mem_freed - computed: false, optional: true, required: false
  private _lineMemFreed?: number; 
  public get lineMemFreed() {
    return this.getNumberAttribute('line_mem_freed');
  }
  public set lineMemFreed(value: number) {
    this._lineMemFreed = value;
  }
  public resetLineMemFreed() {
    this._lineMemFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineMemFreedInput() {
    return this._lineMemFreed;
  }

  // line_too_long - computed: false, optional: true, required: false
  private _lineTooLong?: number; 
  public get lineTooLong() {
    return this.getNumberAttribute('line_too_long');
  }
  public set lineTooLong(value: number) {
    this._lineTooLong = value;
  }
  public resetLineTooLong() {
    this._lineTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineTooLongInput() {
    return this._lineTooLong;
  }

  // malform_request - computed: false, optional: true, required: false
  private _malformRequest?: number; 
  public get malformRequest() {
    return this.getNumberAttribute('malform_request');
  }
  public set malformRequest(value: number) {
    this._malformRequest = value;
  }
  public resetMalformRequest() {
    this._malformRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformRequestInput() {
    return this._malformRequest;
  }

  // max_call_id_len_exceed - computed: false, optional: true, required: false
  private _maxCallIdLenExceed?: number; 
  public get maxCallIdLenExceed() {
    return this.getNumberAttribute('max_call_id_len_exceed');
  }
  public set maxCallIdLenExceed(value: number) {
    this._maxCallIdLenExceed = value;
  }
  public resetMaxCallIdLenExceed() {
    this._maxCallIdLenExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCallIdLenExceedInput() {
    return this._maxCallIdLenExceed;
  }

  // max_header_value_len_exceed - computed: false, optional: true, required: false
  private _maxHeaderValueLenExceed?: number; 
  public get maxHeaderValueLenExceed() {
    return this.getNumberAttribute('max_header_value_len_exceed');
  }
  public set maxHeaderValueLenExceed(value: number) {
    this._maxHeaderValueLenExceed = value;
  }
  public resetMaxHeaderValueLenExceed() {
    this._maxHeaderValueLenExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeaderValueLenExceedInput() {
    return this._maxHeaderValueLenExceed;
  }

  // max_sdp_len_exceed - computed: false, optional: true, required: false
  private _maxSdpLenExceed?: number; 
  public get maxSdpLenExceed() {
    return this.getNumberAttribute('max_sdp_len_exceed');
  }
  public set maxSdpLenExceed(value: number) {
    this._maxSdpLenExceed = value;
  }
  public resetMaxSdpLenExceed() {
    this._maxSdpLenExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSdpLenExceedInput() {
    return this._maxSdpLenExceed;
  }

  // max_uri_len_exceed - computed: false, optional: true, required: false
  private _maxUriLenExceed?: number; 
  public get maxUriLenExceed() {
    return this.getNumberAttribute('max_uri_len_exceed');
  }
  public set maxUriLenExceed(value: number) {
    this._maxUriLenExceed = value;
  }
  public resetMaxUriLenExceed() {
    this._maxUriLenExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUriLenExceedInput() {
    return this._maxUriLenExceed;
  }

  // mem_alloc_fail_error - computed: false, optional: true, required: false
  private _memAllocFailError?: number; 
  public get memAllocFailError() {
    return this.getNumberAttribute('mem_alloc_fail_error');
  }
  public set memAllocFailError(value: number) {
    this._memAllocFailError = value;
  }
  public resetMemAllocFailError() {
    this._memAllocFailError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memAllocFailErrorInput() {
    return this._memAllocFailError;
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

  // ntp_monlist_req - computed: false, optional: true, required: false
  private _ntpMonlistReq?: number; 
  public get ntpMonlistReq() {
    return this.getNumberAttribute('ntp_monlist_req');
  }
  public set ntpMonlistReq(value: number) {
    this._ntpMonlistReq = value;
  }
  public resetNtpMonlistReq() {
    this._ntpMonlistReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpMonlistReqInput() {
    return this._ntpMonlistReq;
  }

  // ntp_monlist_resp - computed: false, optional: true, required: false
  private _ntpMonlistResp?: number; 
  public get ntpMonlistResp() {
    return this.getNumberAttribute('ntp_monlist_resp');
  }
  public set ntpMonlistResp(value: number) {
    this._ntpMonlistResp = value;
  }
  public resetNtpMonlistResp() {
    this._ntpMonlistResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpMonlistRespInput() {
    return this._ntpMonlistResp;
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

  // parse_header_fail_error - computed: false, optional: true, required: false
  private _parseHeaderFailError?: number; 
  public get parseHeaderFailError() {
    return this.getNumberAttribute('parse_header_fail_error');
  }
  public set parseHeaderFailError(value: number) {
    this._parseHeaderFailError = value;
  }
  public resetParseHeaderFailError() {
    this._parseHeaderFailError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseHeaderFailErrorInput() {
    return this._parseHeaderFailError;
  }

  // parse_start_line_error - computed: false, optional: true, required: false
  private _parseStartLineError?: number; 
  public get parseStartLineError() {
    return this.getNumberAttribute('parse_start_line_error');
  }
  public set parseStartLineError(value: number) {
    this._parseStartLineError = value;
  }
  public resetParseStartLineError() {
    this._parseStartLineError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseStartLineErrorInput() {
    return this._parseStartLineError;
  }

  // pattern_filter1_match - computed: false, optional: true, required: false
  private _patternFilter1Match?: number; 
  public get patternFilter1Match() {
    return this.getNumberAttribute('pattern_filter1_match');
  }
  public set patternFilter1Match(value: number) {
    this._patternFilter1Match = value;
  }
  public resetPatternFilter1Match() {
    this._patternFilter1Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternFilter1MatchInput() {
    return this._patternFilter1Match;
  }

  // pattern_filter2_match - computed: false, optional: true, required: false
  private _patternFilter2Match?: number; 
  public get patternFilter2Match() {
    return this.getNumberAttribute('pattern_filter2_match');
  }
  public set patternFilter2Match(value: number) {
    this._patternFilter2Match = value;
  }
  public resetPatternFilter2Match() {
    this._patternFilter2Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternFilter2MatchInput() {
    return this._patternFilter2Match;
  }

  // pattern_filter3_match - computed: false, optional: true, required: false
  private _patternFilter3Match?: number; 
  public get patternFilter3Match() {
    return this.getNumberAttribute('pattern_filter3_match');
  }
  public set patternFilter3Match(value: number) {
    this._patternFilter3Match = value;
  }
  public resetPatternFilter3Match() {
    this._patternFilter3Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternFilter3MatchInput() {
    return this._patternFilter3Match;
  }

  // pattern_filter4_match - computed: false, optional: true, required: false
  private _patternFilter4Match?: number; 
  public get patternFilter4Match() {
    return this.getNumberAttribute('pattern_filter4_match');
  }
  public set patternFilter4Match(value: number) {
    this._patternFilter4Match = value;
  }
  public resetPatternFilter4Match() {
    this._patternFilter4Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternFilter4MatchInput() {
    return this._patternFilter4Match;
  }

  // pattern_filter5_match - computed: false, optional: true, required: false
  private _patternFilter5Match?: number; 
  public get patternFilter5Match() {
    return this.getNumberAttribute('pattern_filter5_match');
  }
  public set patternFilter5Match(value: number) {
    this._patternFilter5Match = value;
  }
  public resetPatternFilter5Match() {
    this._patternFilter5Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternFilter5MatchInput() {
    return this._patternFilter5Match;
  }

  // pattern_filter_drop - computed: false, optional: true, required: false
  private _patternFilterDrop?: number; 
  public get patternFilterDrop() {
    return this.getNumberAttribute('pattern_filter_drop');
  }
  public set patternFilterDrop(value: number) {
    this._patternFilterDrop = value;
  }
  public resetPatternFilterDrop() {
    this._patternFilterDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternFilterDropInput() {
    return this._patternFilterDrop;
  }

  // pattern_not_found - computed: false, optional: true, required: false
  private _patternNotFound?: number; 
  public get patternNotFound() {
    return this.getNumberAttribute('pattern_not_found');
  }
  public set patternNotFound(value: number) {
    this._patternNotFound = value;
  }
  public resetPatternNotFound() {
    this._patternNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternNotFoundInput() {
    return this._patternNotFound;
  }

  // pattern_recognition_generic_error - computed: false, optional: true, required: false
  private _patternRecognitionGenericError?: number; 
  public get patternRecognitionGenericError() {
    return this.getNumberAttribute('pattern_recognition_generic_error');
  }
  public set patternRecognitionGenericError(value: number) {
    this._patternRecognitionGenericError = value;
  }
  public resetPatternRecognitionGenericError() {
    this._patternRecognitionGenericError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionGenericErrorInput() {
    return this._patternRecognitionGenericError;
  }

  // pattern_recognition_pattern_changed - computed: false, optional: true, required: false
  private _patternRecognitionPatternChanged?: number; 
  public get patternRecognitionPatternChanged() {
    return this.getNumberAttribute('pattern_recognition_pattern_changed');
  }
  public set patternRecognitionPatternChanged(value: number) {
    this._patternRecognitionPatternChanged = value;
  }
  public resetPatternRecognitionPatternChanged() {
    this._patternRecognitionPatternChanged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionPatternChangedInput() {
    return this._patternRecognitionPatternChanged;
  }

  // pattern_recognition_proceeded - computed: false, optional: true, required: false
  private _patternRecognitionProceeded?: number; 
  public get patternRecognitionProceeded() {
    return this.getNumberAttribute('pattern_recognition_proceeded');
  }
  public set patternRecognitionProceeded(value: number) {
    this._patternRecognitionProceeded = value;
  }
  public resetPatternRecognitionProceeded() {
    this._patternRecognitionProceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionProceededInput() {
    return this._patternRecognitionProceeded;
  }

  // pattern_recognition_sampling_started - computed: false, optional: true, required: false
  private _patternRecognitionSamplingStarted?: number; 
  public get patternRecognitionSamplingStarted() {
    return this.getNumberAttribute('pattern_recognition_sampling_started');
  }
  public set patternRecognitionSamplingStarted(value: number) {
    this._patternRecognitionSamplingStarted = value;
  }
  public resetPatternRecognitionSamplingStarted() {
    this._patternRecognitionSamplingStarted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternRecognitionSamplingStartedInput() {
    return this._patternRecognitionSamplingStarted;
  }

  // payload_too_big - computed: false, optional: true, required: false
  private _payloadTooBig?: number; 
  public get payloadTooBig() {
    return this.getNumberAttribute('payload_too_big');
  }
  public set payloadTooBig(value: number) {
    this._payloadTooBig = value;
  }
  public resetPayloadTooBig() {
    this._payloadTooBig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadTooBigInput() {
    return this._payloadTooBig;
  }

  // payload_too_small - computed: false, optional: true, required: false
  private _payloadTooSmall?: number; 
  public get payloadTooSmall() {
    return this.getNumberAttribute('payload_too_small');
  }
  public set payloadTooSmall(value: number) {
    this._payloadTooSmall = value;
  }
  public resetPayloadTooSmall() {
    this._payloadTooSmall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadTooSmallInput() {
    return this._payloadTooSmall;
  }

  // policy_drop - computed: false, optional: true, required: false
  private _policyDrop?: number; 
  public get policyDrop() {
    return this.getNumberAttribute('policy_drop');
  }
  public set policyDrop(value: number) {
    this._policyDrop = value;
  }
  public resetPolicyDrop() {
    this._policyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDropInput() {
    return this._policyDrop;
  }

  // policy_violation - computed: false, optional: true, required: false
  private _policyViolation?: number; 
  public get policyViolation() {
    return this.getNumberAttribute('policy_violation');
  }
  public set policyViolation(value: number) {
    this._policyViolation = value;
  }
  public resetPolicyViolation() {
    this._policyViolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyViolationInput() {
    return this._policyViolation;
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

  // port_conn_limm_exceed - computed: false, optional: true, required: false
  private _portConnLimmExceed?: number; 
  public get portConnLimmExceed() {
    return this.getNumberAttribute('port_conn_limm_exceed');
  }
  public set portConnLimmExceed(value: number) {
    this._portConnLimmExceed = value;
  }
  public resetPortConnLimmExceed() {
    this._portConnLimmExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portConnLimmExceedInput() {
    return this._portConnLimmExceed;
  }

  // port_conn_rate_exceed - computed: false, optional: true, required: false
  private _portConnRateExceed?: number; 
  public get portConnRateExceed() {
    return this.getNumberAttribute('port_conn_rate_exceed');
  }
  public set portConnRateExceed(value: number) {
    this._portConnRateExceed = value;
  }
  public resetPortConnRateExceed() {
    this._portConnRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portConnRateExceedInput() {
    return this._portConnRateExceed;
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

  // rate1_limit_exceed - computed: false, optional: true, required: false
  private _rate1LimitExceed?: number; 
  public get rate1LimitExceed() {
    return this.getNumberAttribute('rate1_limit_exceed');
  }
  public set rate1LimitExceed(value: number) {
    this._rate1LimitExceed = value;
  }
  public resetRate1LimitExceed() {
    this._rate1LimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rate1LimitExceedInput() {
    return this._rate1LimitExceed;
  }

  // rate2_limit_exceed - computed: false, optional: true, required: false
  private _rate2LimitExceed?: number; 
  public get rate2LimitExceed() {
    return this.getNumberAttribute('rate2_limit_exceed');
  }
  public set rate2LimitExceed(value: number) {
    this._rate2LimitExceed = value;
  }
  public resetRate2LimitExceed() {
    this._rate2LimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rate2LimitExceedInput() {
    return this._rate2LimitExceed;
  }

  // rate3_limit_exceed - computed: false, optional: true, required: false
  private _rate3LimitExceed?: number; 
  public get rate3LimitExceed() {
    return this.getNumberAttribute('rate3_limit_exceed');
  }
  public set rate3LimitExceed(value: number) {
    this._rate3LimitExceed = value;
  }
  public resetRate3LimitExceed() {
    this._rate3LimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rate3LimitExceedInput() {
    return this._rate3LimitExceed;
  }

  // read_start_line_error - computed: false, optional: true, required: false
  private _readStartLineError?: number; 
  public get readStartLineError() {
    return this.getNumberAttribute('read_start_line_error');
  }
  public set readStartLineError(value: number) {
    this._readStartLineError = value;
  }
  public resetReadStartLineError() {
    this._readStartLineError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readStartLineErrorInput() {
    return this._readStartLineError;
  }

  // request_method_ack - computed: false, optional: true, required: false
  private _requestMethodAck?: number; 
  public get requestMethodAck() {
    return this.getNumberAttribute('request_method_ack');
  }
  public set requestMethodAck(value: number) {
    this._requestMethodAck = value;
  }
  public resetRequestMethodAck() {
    this._requestMethodAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodAckInput() {
    return this._requestMethodAck;
  }

  // request_method_bye - computed: false, optional: true, required: false
  private _requestMethodBye?: number; 
  public get requestMethodBye() {
    return this.getNumberAttribute('request_method_bye');
  }
  public set requestMethodBye(value: number) {
    this._requestMethodBye = value;
  }
  public resetRequestMethodBye() {
    this._requestMethodBye = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodByeInput() {
    return this._requestMethodBye;
  }

  // request_method_cancel - computed: false, optional: true, required: false
  private _requestMethodCancel?: number; 
  public get requestMethodCancel() {
    return this.getNumberAttribute('request_method_cancel');
  }
  public set requestMethodCancel(value: number) {
    this._requestMethodCancel = value;
  }
  public resetRequestMethodCancel() {
    this._requestMethodCancel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodCancelInput() {
    return this._requestMethodCancel;
  }

  // request_method_info - computed: false, optional: true, required: false
  private _requestMethodInfo?: number; 
  public get requestMethodInfo() {
    return this.getNumberAttribute('request_method_info');
  }
  public set requestMethodInfo(value: number) {
    this._requestMethodInfo = value;
  }
  public resetRequestMethodInfo() {
    this._requestMethodInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodInfoInput() {
    return this._requestMethodInfo;
  }

  // request_method_invite - computed: false, optional: true, required: false
  private _requestMethodInvite?: number; 
  public get requestMethodInvite() {
    return this.getNumberAttribute('request_method_invite');
  }
  public set requestMethodInvite(value: number) {
    this._requestMethodInvite = value;
  }
  public resetRequestMethodInvite() {
    this._requestMethodInvite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodInviteInput() {
    return this._requestMethodInvite;
  }

  // request_method_message - computed: false, optional: true, required: false
  private _requestMethodMessage?: number; 
  public get requestMethodMessage() {
    return this.getNumberAttribute('request_method_message');
  }
  public set requestMethodMessage(value: number) {
    this._requestMethodMessage = value;
  }
  public resetRequestMethodMessage() {
    this._requestMethodMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodMessageInput() {
    return this._requestMethodMessage;
  }

  // request_method_notify - computed: false, optional: true, required: false
  private _requestMethodNotify?: number; 
  public get requestMethodNotify() {
    return this.getNumberAttribute('request_method_notify');
  }
  public set requestMethodNotify(value: number) {
    this._requestMethodNotify = value;
  }
  public resetRequestMethodNotify() {
    this._requestMethodNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodNotifyInput() {
    return this._requestMethodNotify;
  }

  // request_method_options - computed: false, optional: true, required: false
  private _requestMethodOptions?: number; 
  public get requestMethodOptions() {
    return this.getNumberAttribute('request_method_options');
  }
  public set requestMethodOptions(value: number) {
    this._requestMethodOptions = value;
  }
  public resetRequestMethodOptions() {
    this._requestMethodOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodOptionsInput() {
    return this._requestMethodOptions;
  }

  // request_method_prack - computed: false, optional: true, required: false
  private _requestMethodPrack?: number; 
  public get requestMethodPrack() {
    return this.getNumberAttribute('request_method_prack');
  }
  public set requestMethodPrack(value: number) {
    this._requestMethodPrack = value;
  }
  public resetRequestMethodPrack() {
    this._requestMethodPrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodPrackInput() {
    return this._requestMethodPrack;
  }

  // request_method_publish - computed: false, optional: true, required: false
  private _requestMethodPublish?: number; 
  public get requestMethodPublish() {
    return this.getNumberAttribute('request_method_publish');
  }
  public set requestMethodPublish(value: number) {
    this._requestMethodPublish = value;
  }
  public resetRequestMethodPublish() {
    this._requestMethodPublish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodPublishInput() {
    return this._requestMethodPublish;
  }

  // request_method_refer - computed: false, optional: true, required: false
  private _requestMethodRefer?: number; 
  public get requestMethodRefer() {
    return this.getNumberAttribute('request_method_refer');
  }
  public set requestMethodRefer(value: number) {
    this._requestMethodRefer = value;
  }
  public resetRequestMethodRefer() {
    this._requestMethodRefer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodReferInput() {
    return this._requestMethodRefer;
  }

  // request_method_register - computed: false, optional: true, required: false
  private _requestMethodRegister?: number; 
  public get requestMethodRegister() {
    return this.getNumberAttribute('request_method_register');
  }
  public set requestMethodRegister(value: number) {
    this._requestMethodRegister = value;
  }
  public resetRequestMethodRegister() {
    this._requestMethodRegister = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodRegisterInput() {
    return this._requestMethodRegister;
  }

  // request_method_subscribe - computed: false, optional: true, required: false
  private _requestMethodSubscribe?: number; 
  public get requestMethodSubscribe() {
    return this.getNumberAttribute('request_method_subscribe');
  }
  public set requestMethodSubscribe(value: number) {
    this._requestMethodSubscribe = value;
  }
  public resetRequestMethodSubscribe() {
    this._requestMethodSubscribe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodSubscribeInput() {
    return this._requestMethodSubscribe;
  }

  // request_method_unknown - computed: false, optional: true, required: false
  private _requestMethodUnknown?: number; 
  public get requestMethodUnknown() {
    return this.getNumberAttribute('request_method_unknown');
  }
  public set requestMethodUnknown(value: number) {
    this._requestMethodUnknown = value;
  }
  public resetRequestMethodUnknown() {
    this._requestMethodUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodUnknownInput() {
    return this._requestMethodUnknown;
  }

  // request_method_update - computed: false, optional: true, required: false
  private _requestMethodUpdate?: number; 
  public get requestMethodUpdate() {
    return this.getNumberAttribute('request_method_update');
  }
  public set requestMethodUpdate(value: number) {
    this._requestMethodUpdate = value;
  }
  public resetRequestMethodUpdate() {
    this._requestMethodUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodUpdateInput() {
    return this._requestMethodUpdate;
  }

  // request_unknown_version - computed: false, optional: true, required: false
  private _requestUnknownVersion?: number; 
  public get requestUnknownVersion() {
    return this.getNumberAttribute('request_unknown_version');
  }
  public set requestUnknownVersion(value: number) {
    this._requestUnknownVersion = value;
  }
  public resetRequestUnknownVersion() {
    this._requestUnknownVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUnknownVersionInput() {
    return this._requestUnknownVersion;
  }

  // response_1xx - computed: false, optional: true, required: false
  private _response1Xx?: number; 
  public get response1Xx() {
    return this.getNumberAttribute('response_1xx');
  }
  public set response1Xx(value: number) {
    this._response1Xx = value;
  }
  public resetResponse1Xx() {
    this._response1Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response1XxInput() {
    return this._response1Xx;
  }

  // response_2xx - computed: false, optional: true, required: false
  private _response2Xx?: number; 
  public get response2Xx() {
    return this.getNumberAttribute('response_2xx');
  }
  public set response2Xx(value: number) {
    this._response2Xx = value;
  }
  public resetResponse2Xx() {
    this._response2Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response2XxInput() {
    return this._response2Xx;
  }

  // response_3xx - computed: false, optional: true, required: false
  private _response3Xx?: number; 
  public get response3Xx() {
    return this.getNumberAttribute('response_3xx');
  }
  public set response3Xx(value: number) {
    this._response3Xx = value;
  }
  public resetResponse3Xx() {
    this._response3Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response3XxInput() {
    return this._response3Xx;
  }

  // response_4xx - computed: false, optional: true, required: false
  private _response4Xx?: number; 
  public get response4Xx() {
    return this.getNumberAttribute('response_4xx');
  }
  public set response4Xx(value: number) {
    this._response4Xx = value;
  }
  public resetResponse4Xx() {
    this._response4Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response4XxInput() {
    return this._response4Xx;
  }

  // response_5xx - computed: false, optional: true, required: false
  private _response5Xx?: number; 
  public get response5Xx() {
    return this.getNumberAttribute('response_5xx');
  }
  public set response5Xx(value: number) {
    this._response5Xx = value;
  }
  public resetResponse5Xx() {
    this._response5Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response5XxInput() {
    return this._response5Xx;
  }

  // response_6xx - computed: false, optional: true, required: false
  private _response6Xx?: number; 
  public get response6Xx() {
    return this.getNumberAttribute('response_6xx');
  }
  public set response6Xx(value: number) {
    this._response6Xx = value;
  }
  public resetResponse6Xx() {
    this._response6Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response6XxInput() {
    return this._response6Xx;
  }

  // response_unknown - computed: false, optional: true, required: false
  private _responseUnknown?: number; 
  public get responseUnknown() {
    return this.getNumberAttribute('response_unknown');
  }
  public set responseUnknown(value: number) {
    this._responseUnknown = value;
  }
  public resetResponseUnknown() {
    this._responseUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseUnknownInput() {
    return this._responseUnknown;
  }

  // response_unknown_version - computed: false, optional: true, required: false
  private _responseUnknownVersion?: number; 
  public get responseUnknownVersion() {
    return this.getNumberAttribute('response_unknown_version');
  }
  public set responseUnknownVersion(value: number) {
    this._responseUnknownVersion = value;
  }
  public resetResponseUnknownVersion() {
    this._responseUnknownVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseUnknownVersionInput() {
    return this._responseUnknownVersion;
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

  // secondary_port_conn_limm_exceed - computed: false, optional: true, required: false
  private _secondaryPortConnLimmExceed?: number; 
  public get secondaryPortConnLimmExceed() {
    return this.getNumberAttribute('secondary_port_conn_limm_exceed');
  }
  public set secondaryPortConnLimmExceed(value: number) {
    this._secondaryPortConnLimmExceed = value;
  }
  public resetSecondaryPortConnLimmExceed() {
    this._secondaryPortConnLimmExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPortConnLimmExceedInput() {
    return this._secondaryPortConnLimmExceed;
  }

  // secondary_port_conn_rate_exceed - computed: false, optional: true, required: false
  private _secondaryPortConnRateExceed?: number; 
  public get secondaryPortConnRateExceed() {
    return this.getNumberAttribute('secondary_port_conn_rate_exceed');
  }
  public set secondaryPortConnRateExceed(value: number) {
    this._secondaryPortConnRateExceed = value;
  }
  public resetSecondaryPortConnRateExceed() {
    this._secondaryPortConnRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPortConnRateExceedInput() {
    return this._secondaryPortConnRateExceed;
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

  // sess_aged - computed: false, optional: true, required: false
  private _sessAged?: number; 
  public get sessAged() {
    return this.getNumberAttribute('sess_aged');
  }
  public set sessAged(value: number) {
    this._sessAged = value;
  }
  public resetSessAged() {
    this._sessAged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessAgedInput() {
    return this._sessAged;
  }

  // sess_create - computed: false, optional: true, required: false
  private _sessCreate?: number; 
  public get sessCreate() {
    return this.getNumberAttribute('sess_create');
  }
  public set sessCreate(value: number) {
    this._sessCreate = value;
  }
  public resetSessCreate() {
    this._sessCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessCreateInput() {
    return this._sessCreate;
  }

  // sess_create_inbound - computed: false, optional: true, required: false
  private _sessCreateInbound?: number; 
  public get sessCreateInbound() {
    return this.getNumberAttribute('sess_create_inbound');
  }
  public set sessCreateInbound(value: number) {
    this._sessCreateInbound = value;
  }
  public resetSessCreateInbound() {
    this._sessCreateInbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessCreateInboundInput() {
    return this._sessCreateInbound;
  }

  // sess_create_outbound - computed: false, optional: true, required: false
  private _sessCreateOutbound?: number; 
  public get sessCreateOutbound() {
    return this.getNumberAttribute('sess_create_outbound');
  }
  public set sessCreateOutbound(value: number) {
    this._sessCreateOutbound = value;
  }
  public resetSessCreateOutbound() {
    this._sessCreateOutbound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessCreateOutboundInput() {
    return this._sessCreateOutbound;
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

  // snat_fail - computed: false, optional: true, required: false
  private _snatFail?: number; 
  public get snatFail() {
    return this.getNumberAttribute('snat_fail');
  }
  public set snatFail(value: number) {
    this._snatFail = value;
  }
  public resetSnatFail() {
    this._snatFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatFailInput() {
    return this._snatFail;
  }

  // spoof_detect_fail - computed: false, optional: true, required: false
  private _spoofDetectFail?: number; 
  public get spoofDetectFail() {
    return this.getNumberAttribute('spoof_detect_fail');
  }
  public set spoofDetectFail(value: number) {
    this._spoofDetectFail = value;
  }
  public resetSpoofDetectFail() {
    this._spoofDetectFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spoofDetectFailInput() {
    return this._spoofDetectFail;
  }

  // src_conn_pkt_rate_excd - computed: false, optional: true, required: false
  private _srcConnPktRateExcd?: number; 
  public get srcConnPktRateExcd() {
    return this.getNumberAttribute('src_conn_pkt_rate_excd');
  }
  public set srcConnPktRateExcd(value: number) {
    this._srcConnPktRateExcd = value;
  }
  public resetSrcConnPktRateExcd() {
    this._srcConnPktRateExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcConnPktRateExcdInput() {
    return this._srcConnPktRateExcd;
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

  // src_filter1_match - computed: false, optional: true, required: false
  private _srcFilter1Match?: number; 
  public get srcFilter1Match() {
    return this.getNumberAttribute('src_filter1_match');
  }
  public set srcFilter1Match(value: number) {
    this._srcFilter1Match = value;
  }
  public resetSrcFilter1Match() {
    this._srcFilter1Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilter1MatchInput() {
    return this._srcFilter1Match;
  }

  // src_filter2_match - computed: false, optional: true, required: false
  private _srcFilter2Match?: number; 
  public get srcFilter2Match() {
    return this.getNumberAttribute('src_filter2_match');
  }
  public set srcFilter2Match(value: number) {
    this._srcFilter2Match = value;
  }
  public resetSrcFilter2Match() {
    this._srcFilter2Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilter2MatchInput() {
    return this._srcFilter2Match;
  }

  // src_filter3_match - computed: false, optional: true, required: false
  private _srcFilter3Match?: number; 
  public get srcFilter3Match() {
    return this.getNumberAttribute('src_filter3_match');
  }
  public set srcFilter3Match(value: number) {
    this._srcFilter3Match = value;
  }
  public resetSrcFilter3Match() {
    this._srcFilter3Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilter3MatchInput() {
    return this._srcFilter3Match;
  }

  // src_filter4_match - computed: false, optional: true, required: false
  private _srcFilter4Match?: number; 
  public get srcFilter4Match() {
    return this.getNumberAttribute('src_filter4_match');
  }
  public set srcFilter4Match(value: number) {
    this._srcFilter4Match = value;
  }
  public resetSrcFilter4Match() {
    this._srcFilter4Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilter4MatchInput() {
    return this._srcFilter4Match;
  }

  // src_filter5_match - computed: false, optional: true, required: false
  private _srcFilter5Match?: number; 
  public get srcFilter5Match() {
    return this.getNumberAttribute('src_filter5_match');
  }
  public set srcFilter5Match(value: number) {
    this._srcFilter5Match = value;
  }
  public resetSrcFilter5Match() {
    this._srcFilter5Match = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilter5MatchInput() {
    return this._srcFilter5Match;
  }

  // src_filter_action_blacklist - computed: false, optional: true, required: false
  private _srcFilterActionBlacklist?: number; 
  public get srcFilterActionBlacklist() {
    return this.getNumberAttribute('src_filter_action_blacklist');
  }
  public set srcFilterActionBlacklist(value: number) {
    this._srcFilterActionBlacklist = value;
  }
  public resetSrcFilterActionBlacklist() {
    this._srcFilterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilterActionBlacklistInput() {
    return this._srcFilterActionBlacklist;
  }

  // src_filter_action_default_pass - computed: false, optional: true, required: false
  private _srcFilterActionDefaultPass?: number; 
  public get srcFilterActionDefaultPass() {
    return this.getNumberAttribute('src_filter_action_default_pass');
  }
  public set srcFilterActionDefaultPass(value: number) {
    this._srcFilterActionDefaultPass = value;
  }
  public resetSrcFilterActionDefaultPass() {
    this._srcFilterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilterActionDefaultPassInput() {
    return this._srcFilterActionDefaultPass;
  }

  // src_filter_action_drop - computed: false, optional: true, required: false
  private _srcFilterActionDrop?: number; 
  public get srcFilterActionDrop() {
    return this.getNumberAttribute('src_filter_action_drop');
  }
  public set srcFilterActionDrop(value: number) {
    this._srcFilterActionDrop = value;
  }
  public resetSrcFilterActionDrop() {
    this._srcFilterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilterActionDropInput() {
    return this._srcFilterActionDrop;
  }

  // src_filter_action_whitelist - computed: false, optional: true, required: false
  private _srcFilterActionWhitelist?: number; 
  public get srcFilterActionWhitelist() {
    return this.getNumberAttribute('src_filter_action_whitelist');
  }
  public set srcFilterActionWhitelist(value: number) {
    this._srcFilterActionWhitelist = value;
  }
  public resetSrcFilterActionWhitelist() {
    this._srcFilterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilterActionWhitelistInput() {
    return this._srcFilterActionWhitelist;
  }

  // src_filter_auth_fail - computed: false, optional: true, required: false
  private _srcFilterAuthFail?: number; 
  public get srcFilterAuthFail() {
    return this.getNumberAttribute('src_filter_auth_fail');
  }
  public set srcFilterAuthFail(value: number) {
    this._srcFilterAuthFail = value;
  }
  public resetSrcFilterAuthFail() {
    this._srcFilterAuthFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilterAuthFailInput() {
    return this._srcFilterAuthFail;
  }

  // src_filter_none_match - computed: false, optional: true, required: false
  private _srcFilterNoneMatch?: number; 
  public get srcFilterNoneMatch() {
    return this.getNumberAttribute('src_filter_none_match');
  }
  public set srcFilterNoneMatch(value: number) {
    this._srcFilterNoneMatch = value;
  }
  public resetSrcFilterNoneMatch() {
    this._srcFilterNoneMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilterNoneMatchInput() {
    return this._srcFilterNoneMatch;
  }

  // src_filter_total_not_match - computed: false, optional: true, required: false
  private _srcFilterTotalNotMatch?: number; 
  public get srcFilterTotalNotMatch() {
    return this.getNumberAttribute('src_filter_total_not_match');
  }
  public set srcFilterTotalNotMatch(value: number) {
    this._srcFilterTotalNotMatch = value;
  }
  public resetSrcFilterTotalNotMatch() {
    this._srcFilterTotalNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilterTotalNotMatchInput() {
    return this._srcFilterTotalNotMatch;
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

  // src_ntp_monlist_req - computed: false, optional: true, required: false
  private _srcNtpMonlistReq?: number; 
  public get srcNtpMonlistReq() {
    return this.getNumberAttribute('src_ntp_monlist_req');
  }
  public set srcNtpMonlistReq(value: number) {
    this._srcNtpMonlistReq = value;
  }
  public resetSrcNtpMonlistReq() {
    this._srcNtpMonlistReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcNtpMonlistReqInput() {
    return this._srcNtpMonlistReq;
  }

  // src_ntp_monlist_resp - computed: false, optional: true, required: false
  private _srcNtpMonlistResp?: number; 
  public get srcNtpMonlistResp() {
    return this.getNumberAttribute('src_ntp_monlist_resp');
  }
  public set srcNtpMonlistResp(value: number) {
    this._srcNtpMonlistResp = value;
  }
  public resetSrcNtpMonlistResp() {
    this._srcNtpMonlistResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcNtpMonlistRespInput() {
    return this._srcNtpMonlistResp;
  }

  // src_payload_too_big - computed: false, optional: true, required: false
  private _srcPayloadTooBig?: number; 
  public get srcPayloadTooBig() {
    return this.getNumberAttribute('src_payload_too_big');
  }
  public set srcPayloadTooBig(value: number) {
    this._srcPayloadTooBig = value;
  }
  public resetSrcPayloadTooBig() {
    this._srcPayloadTooBig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPayloadTooBigInput() {
    return this._srcPayloadTooBig;
  }

  // src_payload_too_small - computed: false, optional: true, required: false
  private _srcPayloadTooSmall?: number; 
  public get srcPayloadTooSmall() {
    return this.getNumberAttribute('src_payload_too_small');
  }
  public set srcPayloadTooSmall(value: number) {
    this._srcPayloadTooSmall = value;
  }
  public resetSrcPayloadTooSmall() {
    this._srcPayloadTooSmall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPayloadTooSmallInput() {
    return this._srcPayloadTooSmall;
  }

  // src_rate1_limit_exceed - computed: false, optional: true, required: false
  private _srcRate1LimitExceed?: number; 
  public get srcRate1LimitExceed() {
    return this.getNumberAttribute('src_rate1_limit_exceed');
  }
  public set srcRate1LimitExceed(value: number) {
    this._srcRate1LimitExceed = value;
  }
  public resetSrcRate1LimitExceed() {
    this._srcRate1LimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRate1LimitExceedInput() {
    return this._srcRate1LimitExceed;
  }

  // src_rate2_limit_exceed - computed: false, optional: true, required: false
  private _srcRate2LimitExceed?: number; 
  public get srcRate2LimitExceed() {
    return this.getNumberAttribute('src_rate2_limit_exceed');
  }
  public set srcRate2LimitExceed(value: number) {
    this._srcRate2LimitExceed = value;
  }
  public resetSrcRate2LimitExceed() {
    this._srcRate2LimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRate2LimitExceedInput() {
    return this._srcRate2LimitExceed;
  }

  // src_rate3_limit_exceed - computed: false, optional: true, required: false
  private _srcRate3LimitExceed?: number; 
  public get srcRate3LimitExceed() {
    return this.getNumberAttribute('src_rate3_limit_exceed');
  }
  public set srcRate3LimitExceed(value: number) {
    this._srcRate3LimitExceed = value;
  }
  public resetSrcRate3LimitExceed() {
    this._srcRate3LimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRate3LimitExceedInput() {
    return this._srcRate3LimitExceed;
  }

  // src_udp_auth - computed: false, optional: true, required: false
  private _srcUdpAuth?: number; 
  public get srcUdpAuth() {
    return this.getNumberAttribute('src_udp_auth');
  }
  public set srcUdpAuth(value: number) {
    this._srcUdpAuth = value;
  }
  public resetSrcUdpAuth() {
    this._srcUdpAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpAuthInput() {
    return this._srcUdpAuth;
  }

  // src_udp_auth_drop - computed: false, optional: true, required: false
  private _srcUdpAuthDrop?: number; 
  public get srcUdpAuthDrop() {
    return this.getNumberAttribute('src_udp_auth_drop');
  }
  public set srcUdpAuthDrop(value: number) {
    this._srcUdpAuthDrop = value;
  }
  public resetSrcUdpAuthDrop() {
    this._srcUdpAuthDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpAuthDropInput() {
    return this._srcUdpAuthDrop;
  }

  // src_udp_auth_fail - computed: false, optional: true, required: false
  private _srcUdpAuthFail?: number; 
  public get srcUdpAuthFail() {
    return this.getNumberAttribute('src_udp_auth_fail');
  }
  public set srcUdpAuthFail(value: number) {
    this._srcUdpAuthFail = value;
  }
  public resetSrcUdpAuthFail() {
    this._srcUdpAuthFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpAuthFailInput() {
    return this._srcUdpAuthFail;
  }

  // src_udp_auth_timeout - computed: false, optional: true, required: false
  private _srcUdpAuthTimeout?: number; 
  public get srcUdpAuthTimeout() {
    return this.getNumberAttribute('src_udp_auth_timeout');
  }
  public set srcUdpAuthTimeout(value: number) {
    this._srcUdpAuthTimeout = value;
  }
  public resetSrcUdpAuthTimeout() {
    this._srcUdpAuthTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpAuthTimeoutInput() {
    return this._srcUdpAuthTimeout;
  }

  // src_udp_retry_gap_drop - computed: false, optional: true, required: false
  private _srcUdpRetryGapDrop?: number; 
  public get srcUdpRetryGapDrop() {
    return this.getNumberAttribute('src_udp_retry_gap_drop');
  }
  public set srcUdpRetryGapDrop(value: number) {
    this._srcUdpRetryGapDrop = value;
  }
  public resetSrcUdpRetryGapDrop() {
    this._srcUdpRetryGapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpRetryGapDropInput() {
    return this._srcUdpRetryGapDrop;
  }

  // src_udp_retry_init - computed: false, optional: true, required: false
  private _srcUdpRetryInit?: number; 
  public get srcUdpRetryInit() {
    return this.getNumberAttribute('src_udp_retry_init');
  }
  public set srcUdpRetryInit(value: number) {
    this._srcUdpRetryInit = value;
  }
  public resetSrcUdpRetryInit() {
    this._srcUdpRetryInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpRetryInitInput() {
    return this._srcUdpRetryInit;
  }

  // src_udp_retry_pass - computed: false, optional: true, required: false
  private _srcUdpRetryPass?: number; 
  public get srcUdpRetryPass() {
    return this.getNumberAttribute('src_udp_retry_pass');
  }
  public set srcUdpRetryPass(value: number) {
    this._srcUdpRetryPass = value;
  }
  public resetSrcUdpRetryPass() {
    this._srcUdpRetryPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpRetryPassInput() {
    return this._srcUdpRetryPass;
  }

  // src_well_known_port - computed: false, optional: true, required: false
  private _srcWellKnownPort?: number; 
  public get srcWellKnownPort() {
    return this.getNumberAttribute('src_well_known_port');
  }
  public set srcWellKnownPort(value: number) {
    this._srcWellKnownPort = value;
  }
  public resetSrcWellKnownPort() {
    this._srcWellKnownPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcWellKnownPortInput() {
    return this._srcWellKnownPort;
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

  // token_authentication_curr_salt_matched - computed: false, optional: true, required: false
  private _tokenAuthenticationCurrSaltMatched?: number; 
  public get tokenAuthenticationCurrSaltMatched() {
    return this.getNumberAttribute('token_authentication_curr_salt_matched');
  }
  public set tokenAuthenticationCurrSaltMatched(value: number) {
    this._tokenAuthenticationCurrSaltMatched = value;
  }
  public resetTokenAuthenticationCurrSaltMatched() {
    this._tokenAuthenticationCurrSaltMatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthenticationCurrSaltMatchedInput() {
    return this._tokenAuthenticationCurrSaltMatched;
  }

  // token_authentication_invalid - computed: false, optional: true, required: false
  private _tokenAuthenticationInvalid?: number; 
  public get tokenAuthenticationInvalid() {
    return this.getNumberAttribute('token_authentication_invalid');
  }
  public set tokenAuthenticationInvalid(value: number) {
    this._tokenAuthenticationInvalid = value;
  }
  public resetTokenAuthenticationInvalid() {
    this._tokenAuthenticationInvalid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthenticationInvalidInput() {
    return this._tokenAuthenticationInvalid;
  }

  // token_authentication_mismatched - computed: false, optional: true, required: false
  private _tokenAuthenticationMismatched?: number; 
  public get tokenAuthenticationMismatched() {
    return this.getNumberAttribute('token_authentication_mismatched');
  }
  public set tokenAuthenticationMismatched(value: number) {
    this._tokenAuthenticationMismatched = value;
  }
  public resetTokenAuthenticationMismatched() {
    this._tokenAuthenticationMismatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthenticationMismatchedInput() {
    return this._tokenAuthenticationMismatched;
  }

  // token_authentication_prev_salt_matched - computed: false, optional: true, required: false
  private _tokenAuthenticationPrevSaltMatched?: number; 
  public get tokenAuthenticationPrevSaltMatched() {
    return this.getNumberAttribute('token_authentication_prev_salt_matched');
  }
  public set tokenAuthenticationPrevSaltMatched(value: number) {
    this._tokenAuthenticationPrevSaltMatched = value;
  }
  public resetTokenAuthenticationPrevSaltMatched() {
    this._tokenAuthenticationPrevSaltMatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthenticationPrevSaltMatchedInput() {
    return this._tokenAuthenticationPrevSaltMatched;
  }

  // token_authentication_session_created - computed: false, optional: true, required: false
  private _tokenAuthenticationSessionCreated?: number; 
  public get tokenAuthenticationSessionCreated() {
    return this.getNumberAttribute('token_authentication_session_created');
  }
  public set tokenAuthenticationSessionCreated(value: number) {
    this._tokenAuthenticationSessionCreated = value;
  }
  public resetTokenAuthenticationSessionCreated() {
    this._tokenAuthenticationSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthenticationSessionCreatedInput() {
    return this._tokenAuthenticationSessionCreated;
  }

  // token_authentication_session_created_fail - computed: false, optional: true, required: false
  private _tokenAuthenticationSessionCreatedFail?: number; 
  public get tokenAuthenticationSessionCreatedFail() {
    return this.getNumberAttribute('token_authentication_session_created_fail');
  }
  public set tokenAuthenticationSessionCreatedFail(value: number) {
    this._tokenAuthenticationSessionCreatedFail = value;
  }
  public resetTokenAuthenticationSessionCreatedFail() {
    this._tokenAuthenticationSessionCreatedFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthenticationSessionCreatedFailInput() {
    return this._tokenAuthenticationSessionCreatedFail;
  }

  // too_many_header - computed: false, optional: true, required: false
  private _tooManyHeader?: number; 
  public get tooManyHeader() {
    return this.getNumberAttribute('too_many_header');
  }
  public set tooManyHeader(value: number) {
    this._tooManyHeader = value;
  }
  public resetTooManyHeader() {
    this._tooManyHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooManyHeaderInput() {
    return this._tooManyHeader;
  }

  // udp_auth - computed: false, optional: true, required: false
  private _udpAuth?: number; 
  public get udpAuth() {
    return this.getNumberAttribute('udp_auth');
  }
  public set udpAuth(value: number) {
    this._udpAuth = value;
  }
  public resetUdpAuth() {
    this._udpAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpAuthInput() {
    return this._udpAuth;
  }

  // udp_auth_drop - computed: false, optional: true, required: false
  private _udpAuthDrop?: number; 
  public get udpAuthDrop() {
    return this.getNumberAttribute('udp_auth_drop');
  }
  public set udpAuthDrop(value: number) {
    this._udpAuthDrop = value;
  }
  public resetUdpAuthDrop() {
    this._udpAuthDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpAuthDropInput() {
    return this._udpAuthDrop;
  }

  // udp_auth_fail - computed: false, optional: true, required: false
  private _udpAuthFail?: number; 
  public get udpAuthFail() {
    return this.getNumberAttribute('udp_auth_fail');
  }
  public set udpAuthFail(value: number) {
    this._udpAuthFail = value;
  }
  public resetUdpAuthFail() {
    this._udpAuthFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpAuthFailInput() {
    return this._udpAuthFail;
  }

  // udp_auth_pass - computed: false, optional: true, required: false
  private _udpAuthPass?: number; 
  public get udpAuthPass() {
    return this.getNumberAttribute('udp_auth_pass');
  }
  public set udpAuthPass(value: number) {
    this._udpAuthPass = value;
  }
  public resetUdpAuthPass() {
    this._udpAuthPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpAuthPassInput() {
    return this._udpAuthPass;
  }

  // udp_auth_retry_fail - computed: false, optional: true, required: false
  private _udpAuthRetryFail?: number; 
  public get udpAuthRetryFail() {
    return this.getNumberAttribute('udp_auth_retry_fail');
  }
  public set udpAuthRetryFail(value: number) {
    this._udpAuthRetryFail = value;
  }
  public resetUdpAuthRetryFail() {
    this._udpAuthRetryFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpAuthRetryFailInput() {
    return this._udpAuthRetryFail;
  }

  // udp_auth_retry_gap_drop - computed: false, optional: true, required: false
  private _udpAuthRetryGapDrop?: number; 
  public get udpAuthRetryGapDrop() {
    return this.getNumberAttribute('udp_auth_retry_gap_drop');
  }
  public set udpAuthRetryGapDrop(value: number) {
    this._udpAuthRetryGapDrop = value;
  }
  public resetUdpAuthRetryGapDrop() {
    this._udpAuthRetryGapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpAuthRetryGapDropInput() {
    return this._udpAuthRetryGapDrop;
  }

  // udp_retry_gap_drop - computed: false, optional: true, required: false
  private _udpRetryGapDrop?: number; 
  public get udpRetryGapDrop() {
    return this.getNumberAttribute('udp_retry_gap_drop');
  }
  public set udpRetryGapDrop(value: number) {
    this._udpRetryGapDrop = value;
  }
  public resetUdpRetryGapDrop() {
    this._udpRetryGapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpRetryGapDropInput() {
    return this._udpRetryGapDrop;
  }

  // udp_retry_init - computed: false, optional: true, required: false
  private _udpRetryInit?: number; 
  public get udpRetryInit() {
    return this.getNumberAttribute('udp_retry_init');
  }
  public set udpRetryInit(value: number) {
    this._udpRetryInit = value;
  }
  public resetUdpRetryInit() {
    this._udpRetryInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpRetryInitInput() {
    return this._udpRetryInit;
  }

  // udp_retry_pass - computed: false, optional: true, required: false
  private _udpRetryPass?: number; 
  public get udpRetryPass() {
    return this.getNumberAttribute('udp_retry_pass');
  }
  public set udpRetryPass(value: number) {
    this._udpRetryPass = value;
  }
  public resetUdpRetryPass() {
    this._udpRetryPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpRetryPassInput() {
    return this._udpRetryPass;
  }

  // unauth_src_session_reset - computed: false, optional: true, required: false
  private _unauthSrcSessionReset?: number; 
  public get unauthSrcSessionReset() {
    return this.getNumberAttribute('unauth_src_session_reset');
  }
  public set unauthSrcSessionReset(value: number) {
    this._unauthSrcSessionReset = value;
  }
  public resetUnauthSrcSessionReset() {
    this._unauthSrcSessionReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthSrcSessionResetInput() {
    return this._unauthSrcSessionReset;
  }

  // wellknown_sport_drop - computed: false, optional: true, required: false
  private _wellknownSportDrop?: number; 
  public get wellknownSportDrop() {
    return this.getNumberAttribute('wellknown_sport_drop');
  }
  public set wellknownSportDrop(value: number) {
    this._wellknownSportDrop = value;
  }
  public resetWellknownSportDrop() {
    this._wellknownSportDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wellknownSportDropInput() {
    return this._wellknownSportDrop;
  }

  // zone_src_udp_retry_timeout_blacklist - computed: false, optional: true, required: false
  private _zoneSrcUdpRetryTimeoutBlacklist?: number; 
  public get zoneSrcUdpRetryTimeoutBlacklist() {
    return this.getNumberAttribute('zone_src_udp_retry_timeout_blacklist');
  }
  public set zoneSrcUdpRetryTimeoutBlacklist(value: number) {
    this._zoneSrcUdpRetryTimeoutBlacklist = value;
  }
  public resetZoneSrcUdpRetryTimeoutBlacklist() {
    this._zoneSrcUdpRetryTimeoutBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneSrcUdpRetryTimeoutBlacklistInput() {
    return this._zoneSrcUdpRetryTimeoutBlacklist;
  }
}
export interface DdosDstZonePortRangeStatsSipUdpZonePortStats {
  /**
  * sip_udp_zone_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#sip_udp_zone_port DdosDstZonePortRangeStatsSipUdpZonePort#sip_udp_zone_port}
  */
  readonly sipUdpZonePort?: DdosDstZonePortRangeStatsSipUdpZonePortStatsSipUdpZonePort;
}

export function ddosDstZonePortRangeStatsSipUdpZonePortStatsToTerraform(struct?: DdosDstZonePortRangeStatsSipUdpZonePortStatsOutputReference | DdosDstZonePortRangeStatsSipUdpZonePortStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sip_udp_zone_port: ddosDstZonePortRangeStatsSipUdpZonePortStatsSipUdpZonePortToTerraform(struct!.sipUdpZonePort),
  }
}


export function ddosDstZonePortRangeStatsSipUdpZonePortStatsToHclTerraform(struct?: DdosDstZonePortRangeStatsSipUdpZonePortStatsOutputReference | DdosDstZonePortRangeStatsSipUdpZonePortStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sip_udp_zone_port: {
      value: ddosDstZonePortRangeStatsSipUdpZonePortStatsSipUdpZonePortToHclTerraform(struct!.sipUdpZonePort),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZonePortRangeStatsSipUdpZonePortStatsSipUdpZonePortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZonePortRangeStatsSipUdpZonePortStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZonePortRangeStatsSipUdpZonePortStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sipUdpZonePort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipUdpZonePort = this._sipUdpZonePort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZonePortRangeStatsSipUdpZonePortStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sipUdpZonePort.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sipUdpZonePort.internalValue = value.sipUdpZonePort;
    }
  }

  // sip_udp_zone_port - computed: false, optional: true, required: false
  private _sipUdpZonePort = new DdosDstZonePortRangeStatsSipUdpZonePortStatsSipUdpZonePortOutputReference(this, "sip_udp_zone_port");
  public get sipUdpZonePort() {
    return this._sipUdpZonePort;
  }
  public putSipUdpZonePort(value: DdosDstZonePortRangeStatsSipUdpZonePortStatsSipUdpZonePort) {
    this._sipUdpZonePort.internalValue = value;
  }
  public resetSipUdpZonePort() {
    this._sipUdpZonePort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipUdpZonePortInput() {
    return this._sipUdpZonePort.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port thunder_ddos_dst_zone_port_range_stats_sip_udp_zone_port}
*/
export class DdosDstZonePortRangeStatsSipUdpZonePort extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_port_range_stats_sip_udp_zone_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstZonePortRangeStatsSipUdpZonePort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstZonePortRangeStatsSipUdpZonePort to import
  * @param importFromId The id of the existing DdosDstZonePortRangeStatsSipUdpZonePort that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstZonePortRangeStatsSipUdpZonePort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_port_range_stats_sip_udp_zone_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_port_range_stats_sip_udp_zone_port thunder_ddos_dst_zone_port_range_stats_sip_udp_zone_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstZonePortRangeStatsSipUdpZonePortConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstZonePortRangeStatsSipUdpZonePortConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_port_range_stats_sip_udp_zone_port',
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
    this._portRangeEnd = config.portRangeEnd;
    this._portRangeStart = config.portRangeStart;
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

  // port_range_end - computed: false, optional: false, required: true
  private _portRangeEnd?: number; 
  public get portRangeEnd() {
    return this.getNumberAttribute('port_range_end');
  }
  public set portRangeEnd(value: number) {
    this._portRangeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeEndInput() {
    return this._portRangeEnd;
  }

  // port_range_start - computed: false, optional: false, required: true
  private _portRangeStart?: number; 
  public get portRangeStart() {
    return this.getNumberAttribute('port_range_start');
  }
  public set portRangeStart(value: number) {
    this._portRangeStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRangeStartInput() {
    return this._portRangeStart;
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
  private _stats = new DdosDstZonePortRangeStatsSipUdpZonePortStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DdosDstZonePortRangeStatsSipUdpZonePortStats) {
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
      port_range_end: cdktf.numberToTerraform(this._portRangeEnd),
      port_range_start: cdktf.numberToTerraform(this._portRangeStart),
      protocol: cdktf.stringToTerraform(this._protocol),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      stats: ddosDstZonePortRangeStatsSipUdpZonePortStatsToTerraform(this._stats.internalValue),
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
      port_range_end: {
        value: cdktf.numberToHclTerraform(this._portRangeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_range_start: {
        value: cdktf.numberToHclTerraform(this._portRangeStart),
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
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: ddosDstZonePortRangeStatsSipUdpZonePortStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZonePortRangeStatsSipUdpZonePortStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
