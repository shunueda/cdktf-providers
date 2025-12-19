// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosQuicZonePortStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#id DataThunderDdosQuicZonePortStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#stats DataThunderDdosQuicZonePortStats#stats}
  */
  readonly stats?: DataThunderDdosQuicZonePortStatsStats;
}
export interface DataThunderDdosQuicZonePortStatsStats {
  /**
  * QUIC AEAD Packet Rate Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#aead_pkt_rate_exceed DataThunderDdosQuicZonePortStats#aead_pkt_rate_exceed}
  */
  readonly aeadPktRateExceed?: number;
  /**
  * Session Reset for All Src Upon Level Escalation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#all_src_session_reset DataThunderDdosQuicZonePortStats#all_src_session_reset}
  */
  readonly allSrcSessionReset?: number;
  /**
  * Dst Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#bl DataThunderDdosQuicZonePortStats#bl}
  */
  readonly bl?: number;
  /**
  * Clear Session Upon De-escalation to Level 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#clear_session_upon_deescalation DataThunderDdosQuicZonePortStats#clear_session_upon_deescalation}
  */
  readonly clearSessionUponDeescalation?: number;
  /**
  * UDP Conn Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#conn_prate_excd DataThunderDdosQuicZonePortStats#conn_prate_excd}
  */
  readonly connPrateExcd?: number;
  /**
  * QUIC Connection Close Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#connection_close_sent DataThunderDdosQuicZonePortStats#connection_close_sent}
  */
  readonly connectionCloseSent?: number;
  /**
  * QUIC Create Connection on Initial Only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#create_conn_init_only DataThunderDdosQuicZonePortStats#create_conn_init_only}
  */
  readonly createConnInitOnly?: number;
  /**
  * Current Escalation Level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#current_es_level DataThunderDdosQuicZonePortStats#current_es_level}
  */
  readonly currentEsLevel?: number;
  /**
  * QUIC DCID Packet Rate Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#dcid_pkt_rate_exceed DataThunderDdosQuicZonePortStats#dcid_pkt_rate_exceed}
  */
  readonly dcidPktRateExceed?: number;
  /**
  * QUIC Decrypt Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#decrypt_fail DataThunderDdosQuicZonePortStats#decrypt_fail}
  */
  readonly decryptFail?: number;
  /**
  * QUIC Decrypt Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#decrypt_success DataThunderDdosQuicZonePortStats#decrypt_success}
  */
  readonly decryptSuccess?: number;
  /**
  * Dst Hardware Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#dst_hw_drop DataThunderDdosQuicZonePortStats#dst_hw_drop}
  */
  readonly dstHwDrop?: number;
  /**
  * Dst Hardware Drop Rules Inserted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#dst_hw_drop_inserted DataThunderDdosQuicZonePortStats#dst_hw_drop_inserted}
  */
  readonly dstHwDropInserted?: number;
  /**
  * Dst Hardware Drop Rules Removed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#dst_hw_drop_removed DataThunderDdosQuicZonePortStats#dst_hw_drop_removed}
  */
  readonly dstHwDropRemoved?: number;
  /**
  * UDP Retry Timeout Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#dst_udp_retry_timeout_blacklist DataThunderDdosQuicZonePortStats#dst_udp_retry_timeout_blacklist}
  */
  readonly dstUdpRetryTimeoutBlacklist?: number;
  /**
  * dynamic-entry-count warning send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#dynamic_count_warn DataThunderDdosQuicZonePortStats#dynamic_count_warn}
  */
  readonly dynamicCountWarn?: number;
  /**
  * QUIC Encrypt Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#encrypt_fail DataThunderDdosQuicZonePortStats#encrypt_fail}
  */
  readonly encryptFail?: number;
  /**
  * QUIC Encrypt Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#encrypt_success DataThunderDdosQuicZonePortStats#encrypt_success}
  */
  readonly encryptSuccess?: number;
  /**
  * East-West Inbound Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#ew_inbound_port_byte_drop DataThunderDdosQuicZonePortStats#ew_inbound_port_byte_drop}
  */
  readonly ewInboundPortByteDrop?: number;
  /**
  * East-West Inbound Bytes Recevied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#ew_inbound_port_byte_rcv DataThunderDdosQuicZonePortStats#ew_inbound_port_byte_rcv}
  */
  readonly ewInboundPortByteRcv?: number;
  /**
  * East-West Inbound Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#ew_inbound_port_byte_sent DataThunderDdosQuicZonePortStats#ew_inbound_port_byte_sent}
  */
  readonly ewInboundPortByteSent?: number;
  /**
  * East-West Inbound Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#ew_inbound_port_drop DataThunderDdosQuicZonePortStats#ew_inbound_port_drop}
  */
  readonly ewInboundPortDrop?: number;
  /**
  * East-West Inbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#ew_inbound_port_rcv DataThunderDdosQuicZonePortStats#ew_inbound_port_rcv}
  */
  readonly ewInboundPortRcv?: number;
  /**
  * East-West Inbound Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#ew_inbound_port_sent DataThunderDdosQuicZonePortStats#ew_inbound_port_sent}
  */
  readonly ewInboundPortSent?: number;
  /**
  * East-West Outbound Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#ew_outbound_port_byte_drop DataThunderDdosQuicZonePortStats#ew_outbound_port_byte_drop}
  */
  readonly ewOutboundPortByteDrop?: number;
  /**
  * East-West Outbound Bytes Recevied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#ew_outbound_port_byte_rcv DataThunderDdosQuicZonePortStats#ew_outbound_port_byte_rcv}
  */
  readonly ewOutboundPortByteRcv?: number;
  /**
  * East-West Outbound Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#ew_outbound_port_byte_sent DataThunderDdosQuicZonePortStats#ew_outbound_port_byte_sent}
  */
  readonly ewOutboundPortByteSent?: number;
  /**
  * East-West Outbound Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#ew_outbound_port_drop DataThunderDdosQuicZonePortStats#ew_outbound_port_drop}
  */
  readonly ewOutboundPortDrop?: number;
  /**
  * East-West Outbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#ew_outbound_port_rcv DataThunderDdosQuicZonePortStats#ew_outbound_port_rcv}
  */
  readonly ewOutboundPortRcv?: number;
  /**
  * East-West Outbound Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#ew_outbound_port_sent DataThunderDdosQuicZonePortStats#ew_outbound_port_sent}
  */
  readonly ewOutboundPortSent?: number;
  /**
  * Exceed Action: Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#exceed_action_drop DataThunderDdosQuicZonePortStats#exceed_action_drop}
  */
  readonly exceedActionDrop?: number;
  /**
  * Exceed Action: Tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#exceed_action_tunnel DataThunderDdosQuicZonePortStats#exceed_action_tunnel}
  */
  readonly exceedActionTunnel?: number;
  /**
  * Src KiBit Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#exceed_drop_brate_src DataThunderDdosQuicZonePortStats#exceed_drop_brate_src}
  */
  readonly exceedDropBrateSrc?: number;
  /**
  * Src KiBit Rate Exceeded Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#exceed_drop_brate_src_pkt DataThunderDdosQuicZonePortStats#exceed_drop_brate_src_pkt}
  */
  readonly exceedDropBrateSrcPkt?: number;
  /**
  * Src Conn Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#exceed_drop_climit_src DataThunderDdosQuicZonePortStats#exceed_drop_climit_src}
  */
  readonly exceedDropClimitSrc?: number;
  /**
  * Src Conn Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#exceed_drop_crate_src DataThunderDdosQuicZonePortStats#exceed_drop_crate_src}
  */
  readonly exceedDropCrateSrc?: number;
  /**
  * Src Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#exceed_drop_prate_src DataThunderDdosQuicZonePortStats#exceed_drop_prate_src}
  */
  readonly exceedDropPrateSrc?: number;
  /**
  * Filter1 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#filter1_match DataThunderDdosQuicZonePortStats#filter1_match}
  */
  readonly filter1Match?: number;
  /**
  * Filter2 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#filter2_match DataThunderDdosQuicZonePortStats#filter2_match}
  */
  readonly filter2Match?: number;
  /**
  * Filter3 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#filter3_match DataThunderDdosQuicZonePortStats#filter3_match}
  */
  readonly filter3Match?: number;
  /**
  * Filter4 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#filter4_match DataThunderDdosQuicZonePortStats#filter4_match}
  */
  readonly filter4Match?: number;
  /**
  * Filter5 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#filter5_match DataThunderDdosQuicZonePortStats#filter5_match}
  */
  readonly filter5Match?: number;
  /**
  * Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#filter_action_blacklist DataThunderDdosQuicZonePortStats#filter_action_blacklist}
  */
  readonly filterActionBlacklist?: number;
  /**
  * Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#filter_action_default_pass DataThunderDdosQuicZonePortStats#filter_action_default_pass}
  */
  readonly filterActionDefaultPass?: number;
  /**
  * Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#filter_action_drop DataThunderDdosQuicZonePortStats#filter_action_drop}
  */
  readonly filterActionDrop?: number;
  /**
  * Filter Action Whitelist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#filter_action_whitelist DataThunderDdosQuicZonePortStats#filter_action_whitelist}
  */
  readonly filterActionWhitelist?: number;
  /**
  * Filter Auth Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#filter_auth_fail DataThunderDdosQuicZonePortStats#filter_auth_fail}
  */
  readonly filterAuthFail?: number;
  /**
  * Filter No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#filter_none_match DataThunderDdosQuicZonePortStats#filter_none_match}
  */
  readonly filterNoneMatch?: number;
  /**
  * Filter Not Matched on Pkt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#filter_total_not_match DataThunderDdosQuicZonePortStats#filter_total_not_match}
  */
  readonly filterTotalNotMatch?: number;
  /**
  * Fixed Bit Not Set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#fixed_bit_not_set DataThunderDdosQuicZonePortStats#fixed_bit_not_set}
  */
  readonly fixedBitNotSet?: number;
  /**
  * Fragmented Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#frag_drop DataThunderDdosQuicZonePortStats#frag_drop}
  */
  readonly fragDrop?: number;
  /**
  * Fragmented Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#frag_rcvd DataThunderDdosQuicZonePortStats#frag_rcvd}
  */
  readonly fragRcvd?: number;
  /**
  * Fragmented Packets Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#frag_timeout DataThunderDdosQuicZonePortStats#frag_timeout}
  */
  readonly fragTimeout?: number;
  /**
  * QUIC Handshake
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#handshake DataThunderDdosQuicZonePortStats#handshake}
  */
  readonly handshake?: number;
  /**
  * QUIC Initial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#initial DataThunderDdosQuicZonePortStats#initial}
  */
  readonly initial?: number;
  /**
  * Initial Force-TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#initial_force_tcp DataThunderDdosQuicZonePortStats#initial_force_tcp}
  */
  readonly initialForceTcp?: number;
  /**
  * Invalid Packet Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#invalid_packet_type DataThunderDdosQuicZonePortStats#invalid_packet_type}
  */
  readonly invalidPacketType?: number;
  /**
  * Invalid Retry Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#invalid_retry_token DataThunderDdosQuicZonePortStats#invalid_retry_token}
  */
  readonly invalidRetryToken?: number;
  /**
  * IP Filtering Policy: Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#ip_filtering_bl DataThunderDdosQuicZonePortStats#ip_filtering_bl}
  */
  readonly ipFilteringBl?: number;
  /**
  * IP Filtering Policy: Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#ip_filtering_drop DataThunderDdosQuicZonePortStats#ip_filtering_drop}
  */
  readonly ipFilteringDrop?: number;
  /**
  * Malformed Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#malformed_action_blacklist DataThunderDdosQuicZonePortStats#malformed_action_blacklist}
  */
  readonly malformedActionBlacklist?: number;
  /**
  * Malformed Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#malformed_action_drop DataThunderDdosQuicZonePortStats#malformed_action_drop}
  */
  readonly malformedActionDrop?: number;
  /**
  * Malformed Action Taken
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#malformed_action_taken DataThunderDdosQuicZonePortStats#malformed_action_taken}
  */
  readonly malformedActionTaken?: number;
  /**
  * Malformed DCID Length Maximum Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#malformed_dcid_len_max_exceed DataThunderDdosQuicZonePortStats#malformed_dcid_len_max_exceed}
  */
  readonly malformedDcidLenMaxExceed?: number;
  /**
  * Malformed SCID Length Maximum Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#malformed_scid_len_max_exceed DataThunderDdosQuicZonePortStats#malformed_scid_len_max_exceed}
  */
  readonly malformedScidLenMaxExceed?: number;
  /**
  * No Policy Class-list Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#no_policy_class_list_match DataThunderDdosQuicZonePortStats#no_policy_class_list_match}
  */
  readonly noPolicyClassListMatch?: number;
  /**
  * No Route Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#no_route_drop DataThunderDdosQuicZonePortStats#no_route_drop}
  */
  readonly noRouteDrop?: number;
  /**
  * NTP Monlist Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#ntp_monlist_req DataThunderDdosQuicZonePortStats#ntp_monlist_req}
  */
  readonly ntpMonlistReq?: number;
  /**
  * NTP Monlist Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#ntp_monlist_resp DataThunderDdosQuicZonePortStats#ntp_monlist_resp}
  */
  readonly ntpMonlistResp?: number;
  /**
  * Outbound Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#outbound_port_bytes DataThunderDdosQuicZonePortStats#outbound_port_bytes}
  */
  readonly outboundPortBytes?: number;
  /**
  * Outbound Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#outbound_port_bytes_drop DataThunderDdosQuicZonePortStats#outbound_port_bytes_drop}
  */
  readonly outboundPortBytesDrop?: number;
  /**
  * Outbound Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#outbound_port_bytes_sent DataThunderDdosQuicZonePortStats#outbound_port_bytes_sent}
  */
  readonly outboundPortBytesSent?: number;
  /**
  * Outbound Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#outbound_port_drop DataThunderDdosQuicZonePortStats#outbound_port_drop}
  */
  readonly outboundPortDrop?: number;
  /**
  * Outbound Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#outbound_port_pkt_sent DataThunderDdosQuicZonePortStats#outbound_port_pkt_sent}
  */
  readonly outboundPortPktSent?: number;
  /**
  * Outbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#outbound_port_rcvd DataThunderDdosQuicZonePortStats#outbound_port_rcvd}
  */
  readonly outboundPortRcvd?: number;
  /**
  * Packet Parse Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#packet_parse_failed DataThunderDdosQuicZonePortStats#packet_parse_failed}
  */
  readonly packetParseFailed?: number;
  /**
  * UDP Payload Too Large
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#payload_too_big DataThunderDdosQuicZonePortStats#payload_too_big}
  */
  readonly payloadTooBig?: number;
  /**
  * UDP Payload Too Small
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#payload_too_small DataThunderDdosQuicZonePortStats#payload_too_small}
  */
  readonly payloadTooSmall?: number;
  /**
  * Inbound Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#port_bytes DataThunderDdosQuicZonePortStats#port_bytes}
  */
  readonly portBytes?: number;
  /**
  * Inbound Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#port_bytes_drop DataThunderDdosQuicZonePortStats#port_bytes_drop}
  */
  readonly portBytesDrop?: number;
  /**
  * Inbound Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#port_bytes_sent DataThunderDdosQuicZonePortStats#port_bytes_sent}
  */
  readonly portBytesSent?: number;
  /**
  * Conn Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#port_conn_limm_exceed DataThunderDdosQuicZonePortStats#port_conn_limm_exceed}
  */
  readonly portConnLimmExceed?: number;
  /**
  * Conn Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#port_conn_rate_exceed DataThunderDdosQuicZonePortStats#port_conn_rate_exceed}
  */
  readonly portConnRateExceed?: number;
  /**
  * Inbound Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#port_drop DataThunderDdosQuicZonePortStats#port_drop}
  */
  readonly portDrop?: number;
  /**
  * KiBit Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#port_kbit_rate_exceed DataThunderDdosQuicZonePortStats#port_kbit_rate_exceed}
  */
  readonly portKbitRateExceed?: number;
  /**
  * KiBit Rate Exceeded Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#port_kbit_rate_exceed_pkt DataThunderDdosQuicZonePortStats#port_kbit_rate_exceed_pkt}
  */
  readonly portKbitRateExceedPkt?: number;
  /**
  * Packet Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#port_pkt_rate_exceed DataThunderDdosQuicZonePortStats#port_pkt_rate_exceed}
  */
  readonly portPktRateExceed?: number;
  /**
  * Inbound Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#port_pkt_sent DataThunderDdosQuicZonePortStats#port_pkt_sent}
  */
  readonly portPktSent?: number;
  /**
  * Inbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#port_rcvd DataThunderDdosQuicZonePortStats#port_rcvd}
  */
  readonly portRcvd?: number;
  /**
  * Src Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#port_src_bl DataThunderDdosQuicZonePortStats#port_src_bl}
  */
  readonly portSrcBl?: number;
  /**
  * Src Escalation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#port_src_escalation DataThunderDdosQuicZonePortStats#port_src_escalation}
  */
  readonly portSrcEscalation?: number;
  /**
  * QUIC Headers Processed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#processed DataThunderDdosQuicZonePortStats#processed}
  */
  readonly processed?: number;
  /**
  * QUIC Retry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#retry DataThunderDdosQuicZonePortStats#retry}
  */
  readonly retry?: number;
  /**
  * QUIC Retry Auth Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#retry_auth_fail DataThunderDdosQuicZonePortStats#retry_auth_fail}
  */
  readonly retryAuthFail?: number;
  /**
  * QUIC Retry Auth Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#retry_auth_pass DataThunderDdosQuicZonePortStats#retry_auth_pass}
  */
  readonly retryAuthPass?: number;
  /**
  * QUIC Retry Auth Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#retry_auth_sent DataThunderDdosQuicZonePortStats#retry_auth_sent}
  */
  readonly retryAuthSent?: number;
  /**
  * QUIC 0-RTT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#rtt0 DataThunderDdosQuicZonePortStats#rtt0}
  */
  readonly rtt0?: number;
  /**
  * QUIC 0-RTT DROP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#rtt_drop0 DataThunderDdosQuicZonePortStats#rtt_drop0}
  */
  readonly rttDrop0?: number;
  /**
  * Same Source and Destination Port Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#same_sport_dport_drop DataThunderDdosQuicZonePortStats#same_sport_dport_drop}
  */
  readonly sameSportDportDrop?: number;
  /**
  * Per Addr-Port Conn Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#secondary_port_conn_limm_exceed DataThunderDdosQuicZonePortStats#secondary_port_conn_limm_exceed}
  */
  readonly secondaryPortConnLimmExceed?: number;
  /**
  * Per Addr-Port Conn Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#secondary_port_conn_rate_exceed DataThunderDdosQuicZonePortStats#secondary_port_conn_rate_exceed}
  */
  readonly secondaryPortConnRateExceed?: number;
  /**
  * Per Addr-Port Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#secondary_port_hit DataThunderDdosQuicZonePortStats#secondary_port_hit}
  */
  readonly secondaryPortHit?: number;
  /**
  * Per Addr-Port KiBit Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#secondary_port_kbit_rate_exceed DataThunderDdosQuicZonePortStats#secondary_port_kbit_rate_exceed}
  */
  readonly secondaryPortKbitRateExceed?: number;
  /**
  * Per Addr-Port KiBit Rate Exceeded Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#secondary_port_kbit_rate_exceed_pkt DataThunderDdosQuicZonePortStats#secondary_port_kbit_rate_exceed_pkt}
  */
  readonly secondaryPortKbitRateExceedPkt?: number;
  /**
  * Per Addr-Port Packet Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#secondary_port_pkt_rate_exceed DataThunderDdosQuicZonePortStats#secondary_port_pkt_rate_exceed}
  */
  readonly secondaryPortPktRateExceed?: number;
  /**
  * Sessions Aged Out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#sess_aged DataThunderDdosQuicZonePortStats#sess_aged}
  */
  readonly sessAged?: number;
  /**
  * Session Create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#sess_create DataThunderDdosQuicZonePortStats#sess_create}
  */
  readonly sessCreate?: number;
  /**
  * Inbound Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#sess_create_inbound DataThunderDdosQuicZonePortStats#sess_create_inbound}
  */
  readonly sessCreateInbound?: number;
  /**
  * Outbound Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#sess_create_outbound DataThunderDdosQuicZonePortStats#sess_create_outbound}
  */
  readonly sessCreateOutbound?: number;
  /**
  * Sflow External Packets Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#sflow_external_packets_sent DataThunderDdosQuicZonePortStats#sflow_external_packets_sent}
  */
  readonly sflowExternalPacketsSent?: number;
  /**
  * Sflow External Samples Packed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#sflow_external_samples_packed DataThunderDdosQuicZonePortStats#sflow_external_samples_packed}
  */
  readonly sflowExternalSamplesPacked?: number;
  /**
  * Sflow Internal Packets Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#sflow_internal_packets_sent DataThunderDdosQuicZonePortStats#sflow_internal_packets_sent}
  */
  readonly sflowInternalPacketsSent?: number;
  /**
  * Sflow Internal Samples Packed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#sflow_internal_samples_packed DataThunderDdosQuicZonePortStats#sflow_internal_samples_packed}
  */
  readonly sflowInternalSamplesPacked?: number;
  /**
  * QUIC Short Header Packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#short_header DataThunderDdosQuicZonePortStats#short_header}
  */
  readonly shortHeader?: number;
  /**
  * QUIC Short Header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#short_header_drop DataThunderDdosQuicZonePortStats#short_header_drop}
  */
  readonly shortHeaderDrop?: number;
  /**
  * Source NAT Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#snat_fail DataThunderDdosQuicZonePortStats#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * UDP Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#spoof_detect_fail DataThunderDdosQuicZonePortStats#spoof_detect_fail}
  */
  readonly spoofDetectFail?: number;
  /**
  * Src UDP Conn Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_conn_pkt_rate_excd DataThunderDdosQuicZonePortStats#src_conn_pkt_rate_excd}
  */
  readonly srcConnPktRateExcd?: number;
  /**
  * Src Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_drop DataThunderDdosQuicZonePortStats#src_drop}
  */
  readonly srcDrop?: number;
  /**
  * Src Filter1 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_filter1_match DataThunderDdosQuicZonePortStats#src_filter1_match}
  */
  readonly srcFilter1Match?: number;
  /**
  * Src Filter2 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_filter2_match DataThunderDdosQuicZonePortStats#src_filter2_match}
  */
  readonly srcFilter2Match?: number;
  /**
  * Src Filter3 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_filter3_match DataThunderDdosQuicZonePortStats#src_filter3_match}
  */
  readonly srcFilter3Match?: number;
  /**
  * Src Filter4 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_filter4_match DataThunderDdosQuicZonePortStats#src_filter4_match}
  */
  readonly srcFilter4Match?: number;
  /**
  * Src Filter5 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_filter5_match DataThunderDdosQuicZonePortStats#src_filter5_match}
  */
  readonly srcFilter5Match?: number;
  /**
  * Src Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_filter_action_blacklist DataThunderDdosQuicZonePortStats#src_filter_action_blacklist}
  */
  readonly srcFilterActionBlacklist?: number;
  /**
  * Src Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_filter_action_default_pass DataThunderDdosQuicZonePortStats#src_filter_action_default_pass}
  */
  readonly srcFilterActionDefaultPass?: number;
  /**
  * Src Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_filter_action_drop DataThunderDdosQuicZonePortStats#src_filter_action_drop}
  */
  readonly srcFilterActionDrop?: number;
  /**
  * Src Filter Action Whitelist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_filter_action_whitelist DataThunderDdosQuicZonePortStats#src_filter_action_whitelist}
  */
  readonly srcFilterActionWhitelist?: number;
  /**
  * Src Filter Auth Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_filter_auth_fail DataThunderDdosQuicZonePortStats#src_filter_auth_fail}
  */
  readonly srcFilterAuthFail?: number;
  /**
  * Src Filter No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_filter_none_match DataThunderDdosQuicZonePortStats#src_filter_none_match}
  */
  readonly srcFilterNoneMatch?: number;
  /**
  * Src Filter Not Matched on Pkt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_filter_total_not_match DataThunderDdosQuicZonePortStats#src_filter_total_not_match}
  */
  readonly srcFilterTotalNotMatch?: number;
  /**
  * Src Fragmented Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_frag_drop DataThunderDdosQuicZonePortStats#src_frag_drop}
  */
  readonly srcFragDrop?: number;
  /**
  * Src Hardware Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_hw_drop DataThunderDdosQuicZonePortStats#src_hw_drop}
  */
  readonly srcHwDrop?: number;
  /**
  * Src Hardware Drop Rules Inserted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_hw_drop_inserted DataThunderDdosQuicZonePortStats#src_hw_drop_inserted}
  */
  readonly srcHwDropInserted?: number;
  /**
  * Src Hardware Drop Rules Removed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_hw_drop_removed DataThunderDdosQuicZonePortStats#src_hw_drop_removed}
  */
  readonly srcHwDropRemoved?: number;
  /**
  * Source Dynamic Entry Overflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_learn_overflow DataThunderDdosQuicZonePortStats#src_learn_overflow}
  */
  readonly srcLearnOverflow?: number;
  /**
  * Src NTP Monlist Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_ntp_monlist_req DataThunderDdosQuicZonePortStats#src_ntp_monlist_req}
  */
  readonly srcNtpMonlistReq?: number;
  /**
  * Src NTP Monlist Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_ntp_monlist_resp DataThunderDdosQuicZonePortStats#src_ntp_monlist_resp}
  */
  readonly srcNtpMonlistResp?: number;
  /**
  * Src UDP Payload Too Large
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_payload_too_big DataThunderDdosQuicZonePortStats#src_payload_too_big}
  */
  readonly srcPayloadTooBig?: number;
  /**
  * Src UDP Payload Too Small
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_payload_too_small DataThunderDdosQuicZonePortStats#src_payload_too_small}
  */
  readonly srcPayloadTooSmall?: number;
  /**
  * Src UDP Auth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_udp_auth_drop DataThunderDdosQuicZonePortStats#src_udp_auth_drop}
  */
  readonly srcUdpAuthDrop?: number;
  /**
  * Src UDP Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_udp_auth_timeout DataThunderDdosQuicZonePortStats#src_udp_auth_timeout}
  */
  readonly srcUdpAuthTimeout?: number;
  /**
  * Src UDP Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_udp_retry_gap_drop DataThunderDdosQuicZonePortStats#src_udp_retry_gap_drop}
  */
  readonly srcUdpRetryGapDrop?: number;
  /**
  * Src UDP Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_udp_retry_init DataThunderDdosQuicZonePortStats#src_udp_retry_init}
  */
  readonly srcUdpRetryInit?: number;
  /**
  * Src UDP Retry Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_udp_retry_pass DataThunderDdosQuicZonePortStats#src_udp_retry_pass}
  */
  readonly srcUdpRetryPass?: number;
  /**
  * Src UDP SrcPort Wellknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_well_known_port DataThunderDdosQuicZonePortStats#src_well_known_port}
  */
  readonly srcWellKnownPort?: number;
  /**
  * SrcZoneService Entry Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_zone_service_entry_aged DataThunderDdosQuicZonePortStats#src_zone_service_entry_aged}
  */
  readonly srcZoneServiceEntryAged?: number;
  /**
  * SrcZoneService Entry Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_zone_service_entry_hit DataThunderDdosQuicZonePortStats#src_zone_service_entry_hit}
  */
  readonly srcZoneServiceEntryHit?: number;
  /**
  * SrcZoneService Entry Learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#src_zone_service_entry_learned DataThunderDdosQuicZonePortStats#src_zone_service_entry_learned}
  */
  readonly srcZoneServiceEntryLearned?: number;
  /**
  * Token Authentication Current Salt Matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#token_authentication_curr_salt_matched DataThunderDdosQuicZonePortStats#token_authentication_curr_salt_matched}
  */
  readonly tokenAuthenticationCurrSaltMatched?: number;
  /**
  * Token Authentication Invalid Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#token_authentication_invalid DataThunderDdosQuicZonePortStats#token_authentication_invalid}
  */
  readonly tokenAuthenticationInvalid?: number;
  /**
  * Token Authentication Mismatched Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#token_authentication_mismatched DataThunderDdosQuicZonePortStats#token_authentication_mismatched}
  */
  readonly tokenAuthenticationMismatched?: number;
  /**
  * Token Authentication Previous Salt Matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#token_authentication_prev_salt_matched DataThunderDdosQuicZonePortStats#token_authentication_prev_salt_matched}
  */
  readonly tokenAuthenticationPrevSaltMatched?: number;
  /**
  * Token Authentication Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#token_authentication_session_created DataThunderDdosQuicZonePortStats#token_authentication_session_created}
  */
  readonly tokenAuthenticationSessionCreated?: number;
  /**
  * Token Authentication Session Created Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#token_authentication_session_created_fail DataThunderDdosQuicZonePortStats#token_authentication_session_created_fail}
  */
  readonly tokenAuthenticationSessionCreatedFail?: number;
  /**
  * UDP Auth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#udp_auth_drop DataThunderDdosQuicZonePortStats#udp_auth_drop}
  */
  readonly udpAuthDrop?: number;
  /**
  * UDP Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#udp_retry_gap_drop DataThunderDdosQuicZonePortStats#udp_retry_gap_drop}
  */
  readonly udpRetryGapDrop?: number;
  /**
  * UDP Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#udp_retry_init DataThunderDdosQuicZonePortStats#udp_retry_init}
  */
  readonly udpRetryInit?: number;
  /**
  * UDP Retry Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#udp_retry_pass DataThunderDdosQuicZonePortStats#udp_retry_pass}
  */
  readonly udpRetryPass?: number;
  /**
  * Session Reset for Unauthenticated Src
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#unauth_src_session_reset DataThunderDdosQuicZonePortStats#unauth_src_session_reset}
  */
  readonly unauthSrcSessionReset?: number;
  /**
  * Version Match Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#version_match_action_blacklist DataThunderDdosQuicZonePortStats#version_match_action_blacklist}
  */
  readonly versionMatchActionBlacklist?: number;
  /**
  * Version Match Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#version_match_action_drop DataThunderDdosQuicZonePortStats#version_match_action_drop}
  */
  readonly versionMatchActionDrop?: number;
  /**
  * Version Match Action Taken
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#version_match_action_taken DataThunderDdosQuicZonePortStats#version_match_action_taken}
  */
  readonly versionMatchActionTaken?: number;
  /**
  * QUIC Version Negotiation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#version_negotiation DataThunderDdosQuicZonePortStats#version_negotiation}
  */
  readonly versionNegotiation?: number;
  /**
  * Version No Match Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#version_no_match_drop DataThunderDdosQuicZonePortStats#version_no_match_drop}
  */
  readonly versionNoMatchDrop?: number;
  /**
  * UDP SrcPort Wellknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#wellknown_sport_drop DataThunderDdosQuicZonePortStats#wellknown_sport_drop}
  */
  readonly wellknownSportDrop?: number;
  /**
  * Src UDP Retry Timeout Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#zone_src_udp_retry_timeout_blacklist DataThunderDdosQuicZonePortStats#zone_src_udp_retry_timeout_blacklist}
  */
  readonly zoneSrcUdpRetryTimeoutBlacklist?: number;
}

export function dataThunderDdosQuicZonePortStatsStatsToTerraform(struct?: DataThunderDdosQuicZonePortStatsStatsOutputReference | DataThunderDdosQuicZonePortStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aead_pkt_rate_exceed: cdktf.numberToTerraform(struct!.aeadPktRateExceed),
    all_src_session_reset: cdktf.numberToTerraform(struct!.allSrcSessionReset),
    bl: cdktf.numberToTerraform(struct!.bl),
    clear_session_upon_deescalation: cdktf.numberToTerraform(struct!.clearSessionUponDeescalation),
    conn_prate_excd: cdktf.numberToTerraform(struct!.connPrateExcd),
    connection_close_sent: cdktf.numberToTerraform(struct!.connectionCloseSent),
    create_conn_init_only: cdktf.numberToTerraform(struct!.createConnInitOnly),
    current_es_level: cdktf.numberToTerraform(struct!.currentEsLevel),
    dcid_pkt_rate_exceed: cdktf.numberToTerraform(struct!.dcidPktRateExceed),
    decrypt_fail: cdktf.numberToTerraform(struct!.decryptFail),
    decrypt_success: cdktf.numberToTerraform(struct!.decryptSuccess),
    dst_hw_drop: cdktf.numberToTerraform(struct!.dstHwDrop),
    dst_hw_drop_inserted: cdktf.numberToTerraform(struct!.dstHwDropInserted),
    dst_hw_drop_removed: cdktf.numberToTerraform(struct!.dstHwDropRemoved),
    dst_udp_retry_timeout_blacklist: cdktf.numberToTerraform(struct!.dstUdpRetryTimeoutBlacklist),
    dynamic_count_warn: cdktf.numberToTerraform(struct!.dynamicCountWarn),
    encrypt_fail: cdktf.numberToTerraform(struct!.encryptFail),
    encrypt_success: cdktf.numberToTerraform(struct!.encryptSuccess),
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
    fixed_bit_not_set: cdktf.numberToTerraform(struct!.fixedBitNotSet),
    frag_drop: cdktf.numberToTerraform(struct!.fragDrop),
    frag_rcvd: cdktf.numberToTerraform(struct!.fragRcvd),
    frag_timeout: cdktf.numberToTerraform(struct!.fragTimeout),
    handshake: cdktf.numberToTerraform(struct!.handshake),
    initial: cdktf.numberToTerraform(struct!.initial),
    initial_force_tcp: cdktf.numberToTerraform(struct!.initialForceTcp),
    invalid_packet_type: cdktf.numberToTerraform(struct!.invalidPacketType),
    invalid_retry_token: cdktf.numberToTerraform(struct!.invalidRetryToken),
    ip_filtering_bl: cdktf.numberToTerraform(struct!.ipFilteringBl),
    ip_filtering_drop: cdktf.numberToTerraform(struct!.ipFilteringDrop),
    malformed_action_blacklist: cdktf.numberToTerraform(struct!.malformedActionBlacklist),
    malformed_action_drop: cdktf.numberToTerraform(struct!.malformedActionDrop),
    malformed_action_taken: cdktf.numberToTerraform(struct!.malformedActionTaken),
    malformed_dcid_len_max_exceed: cdktf.numberToTerraform(struct!.malformedDcidLenMaxExceed),
    malformed_scid_len_max_exceed: cdktf.numberToTerraform(struct!.malformedScidLenMaxExceed),
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
    packet_parse_failed: cdktf.numberToTerraform(struct!.packetParseFailed),
    payload_too_big: cdktf.numberToTerraform(struct!.payloadTooBig),
    payload_too_small: cdktf.numberToTerraform(struct!.payloadTooSmall),
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
    processed: cdktf.numberToTerraform(struct!.processed),
    retry: cdktf.numberToTerraform(struct!.retry),
    retry_auth_fail: cdktf.numberToTerraform(struct!.retryAuthFail),
    retry_auth_pass: cdktf.numberToTerraform(struct!.retryAuthPass),
    retry_auth_sent: cdktf.numberToTerraform(struct!.retryAuthSent),
    rtt0: cdktf.numberToTerraform(struct!.rtt0),
    rtt_drop0: cdktf.numberToTerraform(struct!.rttDrop0),
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
    short_header: cdktf.numberToTerraform(struct!.shortHeader),
    short_header_drop: cdktf.numberToTerraform(struct!.shortHeaderDrop),
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
    src_udp_auth_drop: cdktf.numberToTerraform(struct!.srcUdpAuthDrop),
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
    udp_auth_drop: cdktf.numberToTerraform(struct!.udpAuthDrop),
    udp_retry_gap_drop: cdktf.numberToTerraform(struct!.udpRetryGapDrop),
    udp_retry_init: cdktf.numberToTerraform(struct!.udpRetryInit),
    udp_retry_pass: cdktf.numberToTerraform(struct!.udpRetryPass),
    unauth_src_session_reset: cdktf.numberToTerraform(struct!.unauthSrcSessionReset),
    version_match_action_blacklist: cdktf.numberToTerraform(struct!.versionMatchActionBlacklist),
    version_match_action_drop: cdktf.numberToTerraform(struct!.versionMatchActionDrop),
    version_match_action_taken: cdktf.numberToTerraform(struct!.versionMatchActionTaken),
    version_negotiation: cdktf.numberToTerraform(struct!.versionNegotiation),
    version_no_match_drop: cdktf.numberToTerraform(struct!.versionNoMatchDrop),
    wellknown_sport_drop: cdktf.numberToTerraform(struct!.wellknownSportDrop),
    zone_src_udp_retry_timeout_blacklist: cdktf.numberToTerraform(struct!.zoneSrcUdpRetryTimeoutBlacklist),
  }
}


export function dataThunderDdosQuicZonePortStatsStatsToHclTerraform(struct?: DataThunderDdosQuicZonePortStatsStatsOutputReference | DataThunderDdosQuicZonePortStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aead_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.aeadPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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
    clear_session_upon_deescalation: {
      value: cdktf.numberToHclTerraform(struct!.clearSessionUponDeescalation),
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
    connection_close_sent: {
      value: cdktf.numberToHclTerraform(struct!.connectionCloseSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    create_conn_init_only: {
      value: cdktf.numberToHclTerraform(struct!.createConnInitOnly),
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
    dcid_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dcidPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    decrypt_fail: {
      value: cdktf.numberToHclTerraform(struct!.decryptFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    decrypt_success: {
      value: cdktf.numberToHclTerraform(struct!.decryptSuccess),
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
    encrypt_fail: {
      value: cdktf.numberToHclTerraform(struct!.encryptFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    encrypt_success: {
      value: cdktf.numberToHclTerraform(struct!.encryptSuccess),
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
    fixed_bit_not_set: {
      value: cdktf.numberToHclTerraform(struct!.fixedBitNotSet),
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
    handshake: {
      value: cdktf.numberToHclTerraform(struct!.handshake),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial: {
      value: cdktf.numberToHclTerraform(struct!.initial),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_force_tcp: {
      value: cdktf.numberToHclTerraform(struct!.initialForceTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_packet_type: {
      value: cdktf.numberToHclTerraform(struct!.invalidPacketType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_retry_token: {
      value: cdktf.numberToHclTerraform(struct!.invalidRetryToken),
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
    malformed_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.malformedActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malformed_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.malformedActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malformed_action_taken: {
      value: cdktf.numberToHclTerraform(struct!.malformedActionTaken),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malformed_dcid_len_max_exceed: {
      value: cdktf.numberToHclTerraform(struct!.malformedDcidLenMaxExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malformed_scid_len_max_exceed: {
      value: cdktf.numberToHclTerraform(struct!.malformedScidLenMaxExceed),
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
    packet_parse_failed: {
      value: cdktf.numberToHclTerraform(struct!.packetParseFailed),
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
    processed: {
      value: cdktf.numberToHclTerraform(struct!.processed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry: {
      value: cdktf.numberToHclTerraform(struct!.retry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_auth_fail: {
      value: cdktf.numberToHclTerraform(struct!.retryAuthFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_auth_pass: {
      value: cdktf.numberToHclTerraform(struct!.retryAuthPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_auth_sent: {
      value: cdktf.numberToHclTerraform(struct!.retryAuthSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rtt0: {
      value: cdktf.numberToHclTerraform(struct!.rtt0),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rtt_drop0: {
      value: cdktf.numberToHclTerraform(struct!.rttDrop0),
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
    short_header: {
      value: cdktf.numberToHclTerraform(struct!.shortHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    short_header_drop: {
      value: cdktf.numberToHclTerraform(struct!.shortHeaderDrop),
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
    src_udp_auth_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpAuthDrop),
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
    udp_auth_drop: {
      value: cdktf.numberToHclTerraform(struct!.udpAuthDrop),
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
    version_match_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.versionMatchActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version_match_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.versionMatchActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version_match_action_taken: {
      value: cdktf.numberToHclTerraform(struct!.versionMatchActionTaken),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version_negotiation: {
      value: cdktf.numberToHclTerraform(struct!.versionNegotiation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    version_no_match_drop: {
      value: cdktf.numberToHclTerraform(struct!.versionNoMatchDrop),
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

export class DataThunderDdosQuicZonePortStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosQuicZonePortStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aeadPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.aeadPktRateExceed = this._aeadPktRateExceed;
    }
    if (this._allSrcSessionReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.allSrcSessionReset = this._allSrcSessionReset;
    }
    if (this._bl !== undefined) {
      hasAnyValues = true;
      internalValueResult.bl = this._bl;
    }
    if (this._clearSessionUponDeescalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSessionUponDeescalation = this._clearSessionUponDeescalation;
    }
    if (this._connPrateExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.connPrateExcd = this._connPrateExcd;
    }
    if (this._connectionCloseSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionCloseSent = this._connectionCloseSent;
    }
    if (this._createConnInitOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.createConnInitOnly = this._createConnInitOnly;
    }
    if (this._currentEsLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentEsLevel = this._currentEsLevel;
    }
    if (this._dcidPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcidPktRateExceed = this._dcidPktRateExceed;
    }
    if (this._decryptFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptFail = this._decryptFail;
    }
    if (this._decryptSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.decryptSuccess = this._decryptSuccess;
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
    if (this._encryptFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptFail = this._encryptFail;
    }
    if (this._encryptSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptSuccess = this._encryptSuccess;
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
    if (this._fixedBitNotSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedBitNotSet = this._fixedBitNotSet;
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
    if (this._handshake !== undefined) {
      hasAnyValues = true;
      internalValueResult.handshake = this._handshake;
    }
    if (this._initial !== undefined) {
      hasAnyValues = true;
      internalValueResult.initial = this._initial;
    }
    if (this._initialForceTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialForceTcp = this._initialForceTcp;
    }
    if (this._invalidPacketType !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidPacketType = this._invalidPacketType;
    }
    if (this._invalidRetryToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidRetryToken = this._invalidRetryToken;
    }
    if (this._ipFilteringBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilteringBl = this._ipFilteringBl;
    }
    if (this._ipFilteringDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilteringDrop = this._ipFilteringDrop;
    }
    if (this._malformedActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedActionBlacklist = this._malformedActionBlacklist;
    }
    if (this._malformedActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedActionDrop = this._malformedActionDrop;
    }
    if (this._malformedActionTaken !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedActionTaken = this._malformedActionTaken;
    }
    if (this._malformedDcidLenMaxExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedDcidLenMaxExceed = this._malformedDcidLenMaxExceed;
    }
    if (this._malformedScidLenMaxExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedScidLenMaxExceed = this._malformedScidLenMaxExceed;
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
    if (this._packetParseFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetParseFailed = this._packetParseFailed;
    }
    if (this._payloadTooBig !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadTooBig = this._payloadTooBig;
    }
    if (this._payloadTooSmall !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadTooSmall = this._payloadTooSmall;
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
    if (this._processed !== undefined) {
      hasAnyValues = true;
      internalValueResult.processed = this._processed;
    }
    if (this._retry !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry;
    }
    if (this._retryAuthFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryAuthFail = this._retryAuthFail;
    }
    if (this._retryAuthPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryAuthPass = this._retryAuthPass;
    }
    if (this._retryAuthSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryAuthSent = this._retryAuthSent;
    }
    if (this._rtt0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtt0 = this._rtt0;
    }
    if (this._rttDrop0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rttDrop0 = this._rttDrop0;
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
    if (this._shortHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.shortHeader = this._shortHeader;
    }
    if (this._shortHeaderDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.shortHeaderDrop = this._shortHeaderDrop;
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
    if (this._srcUdpAuthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpAuthDrop = this._srcUdpAuthDrop;
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
    if (this._udpAuthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpAuthDrop = this._udpAuthDrop;
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
    if (this._versionMatchActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionMatchActionBlacklist = this._versionMatchActionBlacklist;
    }
    if (this._versionMatchActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionMatchActionDrop = this._versionMatchActionDrop;
    }
    if (this._versionMatchActionTaken !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionMatchActionTaken = this._versionMatchActionTaken;
    }
    if (this._versionNegotiation !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionNegotiation = this._versionNegotiation;
    }
    if (this._versionNoMatchDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionNoMatchDrop = this._versionNoMatchDrop;
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

  public set internalValue(value: DataThunderDdosQuicZonePortStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aeadPktRateExceed = undefined;
      this._allSrcSessionReset = undefined;
      this._bl = undefined;
      this._clearSessionUponDeescalation = undefined;
      this._connPrateExcd = undefined;
      this._connectionCloseSent = undefined;
      this._createConnInitOnly = undefined;
      this._currentEsLevel = undefined;
      this._dcidPktRateExceed = undefined;
      this._decryptFail = undefined;
      this._decryptSuccess = undefined;
      this._dstHwDrop = undefined;
      this._dstHwDropInserted = undefined;
      this._dstHwDropRemoved = undefined;
      this._dstUdpRetryTimeoutBlacklist = undefined;
      this._dynamicCountWarn = undefined;
      this._encryptFail = undefined;
      this._encryptSuccess = undefined;
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
      this._fixedBitNotSet = undefined;
      this._fragDrop = undefined;
      this._fragRcvd = undefined;
      this._fragTimeout = undefined;
      this._handshake = undefined;
      this._initial = undefined;
      this._initialForceTcp = undefined;
      this._invalidPacketType = undefined;
      this._invalidRetryToken = undefined;
      this._ipFilteringBl = undefined;
      this._ipFilteringDrop = undefined;
      this._malformedActionBlacklist = undefined;
      this._malformedActionDrop = undefined;
      this._malformedActionTaken = undefined;
      this._malformedDcidLenMaxExceed = undefined;
      this._malformedScidLenMaxExceed = undefined;
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
      this._packetParseFailed = undefined;
      this._payloadTooBig = undefined;
      this._payloadTooSmall = undefined;
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
      this._processed = undefined;
      this._retry = undefined;
      this._retryAuthFail = undefined;
      this._retryAuthPass = undefined;
      this._retryAuthSent = undefined;
      this._rtt0 = undefined;
      this._rttDrop0 = undefined;
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
      this._shortHeader = undefined;
      this._shortHeaderDrop = undefined;
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
      this._srcUdpAuthDrop = undefined;
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
      this._udpAuthDrop = undefined;
      this._udpRetryGapDrop = undefined;
      this._udpRetryInit = undefined;
      this._udpRetryPass = undefined;
      this._unauthSrcSessionReset = undefined;
      this._versionMatchActionBlacklist = undefined;
      this._versionMatchActionDrop = undefined;
      this._versionMatchActionTaken = undefined;
      this._versionNegotiation = undefined;
      this._versionNoMatchDrop = undefined;
      this._wellknownSportDrop = undefined;
      this._zoneSrcUdpRetryTimeoutBlacklist = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aeadPktRateExceed = value.aeadPktRateExceed;
      this._allSrcSessionReset = value.allSrcSessionReset;
      this._bl = value.bl;
      this._clearSessionUponDeescalation = value.clearSessionUponDeescalation;
      this._connPrateExcd = value.connPrateExcd;
      this._connectionCloseSent = value.connectionCloseSent;
      this._createConnInitOnly = value.createConnInitOnly;
      this._currentEsLevel = value.currentEsLevel;
      this._dcidPktRateExceed = value.dcidPktRateExceed;
      this._decryptFail = value.decryptFail;
      this._decryptSuccess = value.decryptSuccess;
      this._dstHwDrop = value.dstHwDrop;
      this._dstHwDropInserted = value.dstHwDropInserted;
      this._dstHwDropRemoved = value.dstHwDropRemoved;
      this._dstUdpRetryTimeoutBlacklist = value.dstUdpRetryTimeoutBlacklist;
      this._dynamicCountWarn = value.dynamicCountWarn;
      this._encryptFail = value.encryptFail;
      this._encryptSuccess = value.encryptSuccess;
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
      this._fixedBitNotSet = value.fixedBitNotSet;
      this._fragDrop = value.fragDrop;
      this._fragRcvd = value.fragRcvd;
      this._fragTimeout = value.fragTimeout;
      this._handshake = value.handshake;
      this._initial = value.initial;
      this._initialForceTcp = value.initialForceTcp;
      this._invalidPacketType = value.invalidPacketType;
      this._invalidRetryToken = value.invalidRetryToken;
      this._ipFilteringBl = value.ipFilteringBl;
      this._ipFilteringDrop = value.ipFilteringDrop;
      this._malformedActionBlacklist = value.malformedActionBlacklist;
      this._malformedActionDrop = value.malformedActionDrop;
      this._malformedActionTaken = value.malformedActionTaken;
      this._malformedDcidLenMaxExceed = value.malformedDcidLenMaxExceed;
      this._malformedScidLenMaxExceed = value.malformedScidLenMaxExceed;
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
      this._packetParseFailed = value.packetParseFailed;
      this._payloadTooBig = value.payloadTooBig;
      this._payloadTooSmall = value.payloadTooSmall;
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
      this._processed = value.processed;
      this._retry = value.retry;
      this._retryAuthFail = value.retryAuthFail;
      this._retryAuthPass = value.retryAuthPass;
      this._retryAuthSent = value.retryAuthSent;
      this._rtt0 = value.rtt0;
      this._rttDrop0 = value.rttDrop0;
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
      this._shortHeader = value.shortHeader;
      this._shortHeaderDrop = value.shortHeaderDrop;
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
      this._srcUdpAuthDrop = value.srcUdpAuthDrop;
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
      this._udpAuthDrop = value.udpAuthDrop;
      this._udpRetryGapDrop = value.udpRetryGapDrop;
      this._udpRetryInit = value.udpRetryInit;
      this._udpRetryPass = value.udpRetryPass;
      this._unauthSrcSessionReset = value.unauthSrcSessionReset;
      this._versionMatchActionBlacklist = value.versionMatchActionBlacklist;
      this._versionMatchActionDrop = value.versionMatchActionDrop;
      this._versionMatchActionTaken = value.versionMatchActionTaken;
      this._versionNegotiation = value.versionNegotiation;
      this._versionNoMatchDrop = value.versionNoMatchDrop;
      this._wellknownSportDrop = value.wellknownSportDrop;
      this._zoneSrcUdpRetryTimeoutBlacklist = value.zoneSrcUdpRetryTimeoutBlacklist;
    }
  }

  // aead_pkt_rate_exceed - computed: false, optional: true, required: false
  private _aeadPktRateExceed?: number; 
  public get aeadPktRateExceed() {
    return this.getNumberAttribute('aead_pkt_rate_exceed');
  }
  public set aeadPktRateExceed(value: number) {
    this._aeadPktRateExceed = value;
  }
  public resetAeadPktRateExceed() {
    this._aeadPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aeadPktRateExceedInput() {
    return this._aeadPktRateExceed;
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

  // connection_close_sent - computed: false, optional: true, required: false
  private _connectionCloseSent?: number; 
  public get connectionCloseSent() {
    return this.getNumberAttribute('connection_close_sent');
  }
  public set connectionCloseSent(value: number) {
    this._connectionCloseSent = value;
  }
  public resetConnectionCloseSent() {
    this._connectionCloseSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionCloseSentInput() {
    return this._connectionCloseSent;
  }

  // create_conn_init_only - computed: false, optional: true, required: false
  private _createConnInitOnly?: number; 
  public get createConnInitOnly() {
    return this.getNumberAttribute('create_conn_init_only');
  }
  public set createConnInitOnly(value: number) {
    this._createConnInitOnly = value;
  }
  public resetCreateConnInitOnly() {
    this._createConnInitOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createConnInitOnlyInput() {
    return this._createConnInitOnly;
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

  // dcid_pkt_rate_exceed - computed: false, optional: true, required: false
  private _dcidPktRateExceed?: number; 
  public get dcidPktRateExceed() {
    return this.getNumberAttribute('dcid_pkt_rate_exceed');
  }
  public set dcidPktRateExceed(value: number) {
    this._dcidPktRateExceed = value;
  }
  public resetDcidPktRateExceed() {
    this._dcidPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcidPktRateExceedInput() {
    return this._dcidPktRateExceed;
  }

  // decrypt_fail - computed: false, optional: true, required: false
  private _decryptFail?: number; 
  public get decryptFail() {
    return this.getNumberAttribute('decrypt_fail');
  }
  public set decryptFail(value: number) {
    this._decryptFail = value;
  }
  public resetDecryptFail() {
    this._decryptFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptFailInput() {
    return this._decryptFail;
  }

  // decrypt_success - computed: false, optional: true, required: false
  private _decryptSuccess?: number; 
  public get decryptSuccess() {
    return this.getNumberAttribute('decrypt_success');
  }
  public set decryptSuccess(value: number) {
    this._decryptSuccess = value;
  }
  public resetDecryptSuccess() {
    this._decryptSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptSuccessInput() {
    return this._decryptSuccess;
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

  // encrypt_fail - computed: false, optional: true, required: false
  private _encryptFail?: number; 
  public get encryptFail() {
    return this.getNumberAttribute('encrypt_fail');
  }
  public set encryptFail(value: number) {
    this._encryptFail = value;
  }
  public resetEncryptFail() {
    this._encryptFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptFailInput() {
    return this._encryptFail;
  }

  // encrypt_success - computed: false, optional: true, required: false
  private _encryptSuccess?: number; 
  public get encryptSuccess() {
    return this.getNumberAttribute('encrypt_success');
  }
  public set encryptSuccess(value: number) {
    this._encryptSuccess = value;
  }
  public resetEncryptSuccess() {
    this._encryptSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptSuccessInput() {
    return this._encryptSuccess;
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

  // fixed_bit_not_set - computed: false, optional: true, required: false
  private _fixedBitNotSet?: number; 
  public get fixedBitNotSet() {
    return this.getNumberAttribute('fixed_bit_not_set');
  }
  public set fixedBitNotSet(value: number) {
    this._fixedBitNotSet = value;
  }
  public resetFixedBitNotSet() {
    this._fixedBitNotSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedBitNotSetInput() {
    return this._fixedBitNotSet;
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

  // handshake - computed: false, optional: true, required: false
  private _handshake?: number; 
  public get handshake() {
    return this.getNumberAttribute('handshake');
  }
  public set handshake(value: number) {
    this._handshake = value;
  }
  public resetHandshake() {
    this._handshake = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get handshakeInput() {
    return this._handshake;
  }

  // initial - computed: false, optional: true, required: false
  private _initial?: number; 
  public get initial() {
    return this.getNumberAttribute('initial');
  }
  public set initial(value: number) {
    this._initial = value;
  }
  public resetInitial() {
    this._initial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialInput() {
    return this._initial;
  }

  // initial_force_tcp - computed: false, optional: true, required: false
  private _initialForceTcp?: number; 
  public get initialForceTcp() {
    return this.getNumberAttribute('initial_force_tcp');
  }
  public set initialForceTcp(value: number) {
    this._initialForceTcp = value;
  }
  public resetInitialForceTcp() {
    this._initialForceTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialForceTcpInput() {
    return this._initialForceTcp;
  }

  // invalid_packet_type - computed: false, optional: true, required: false
  private _invalidPacketType?: number; 
  public get invalidPacketType() {
    return this.getNumberAttribute('invalid_packet_type');
  }
  public set invalidPacketType(value: number) {
    this._invalidPacketType = value;
  }
  public resetInvalidPacketType() {
    this._invalidPacketType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidPacketTypeInput() {
    return this._invalidPacketType;
  }

  // invalid_retry_token - computed: false, optional: true, required: false
  private _invalidRetryToken?: number; 
  public get invalidRetryToken() {
    return this.getNumberAttribute('invalid_retry_token');
  }
  public set invalidRetryToken(value: number) {
    this._invalidRetryToken = value;
  }
  public resetInvalidRetryToken() {
    this._invalidRetryToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidRetryTokenInput() {
    return this._invalidRetryToken;
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

  // malformed_action_blacklist - computed: false, optional: true, required: false
  private _malformedActionBlacklist?: number; 
  public get malformedActionBlacklist() {
    return this.getNumberAttribute('malformed_action_blacklist');
  }
  public set malformedActionBlacklist(value: number) {
    this._malformedActionBlacklist = value;
  }
  public resetMalformedActionBlacklist() {
    this._malformedActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedActionBlacklistInput() {
    return this._malformedActionBlacklist;
  }

  // malformed_action_drop - computed: false, optional: true, required: false
  private _malformedActionDrop?: number; 
  public get malformedActionDrop() {
    return this.getNumberAttribute('malformed_action_drop');
  }
  public set malformedActionDrop(value: number) {
    this._malformedActionDrop = value;
  }
  public resetMalformedActionDrop() {
    this._malformedActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedActionDropInput() {
    return this._malformedActionDrop;
  }

  // malformed_action_taken - computed: false, optional: true, required: false
  private _malformedActionTaken?: number; 
  public get malformedActionTaken() {
    return this.getNumberAttribute('malformed_action_taken');
  }
  public set malformedActionTaken(value: number) {
    this._malformedActionTaken = value;
  }
  public resetMalformedActionTaken() {
    this._malformedActionTaken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedActionTakenInput() {
    return this._malformedActionTaken;
  }

  // malformed_dcid_len_max_exceed - computed: false, optional: true, required: false
  private _malformedDcidLenMaxExceed?: number; 
  public get malformedDcidLenMaxExceed() {
    return this.getNumberAttribute('malformed_dcid_len_max_exceed');
  }
  public set malformedDcidLenMaxExceed(value: number) {
    this._malformedDcidLenMaxExceed = value;
  }
  public resetMalformedDcidLenMaxExceed() {
    this._malformedDcidLenMaxExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedDcidLenMaxExceedInput() {
    return this._malformedDcidLenMaxExceed;
  }

  // malformed_scid_len_max_exceed - computed: false, optional: true, required: false
  private _malformedScidLenMaxExceed?: number; 
  public get malformedScidLenMaxExceed() {
    return this.getNumberAttribute('malformed_scid_len_max_exceed');
  }
  public set malformedScidLenMaxExceed(value: number) {
    this._malformedScidLenMaxExceed = value;
  }
  public resetMalformedScidLenMaxExceed() {
    this._malformedScidLenMaxExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedScidLenMaxExceedInput() {
    return this._malformedScidLenMaxExceed;
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

  // packet_parse_failed - computed: false, optional: true, required: false
  private _packetParseFailed?: number; 
  public get packetParseFailed() {
    return this.getNumberAttribute('packet_parse_failed');
  }
  public set packetParseFailed(value: number) {
    this._packetParseFailed = value;
  }
  public resetPacketParseFailed() {
    this._packetParseFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetParseFailedInput() {
    return this._packetParseFailed;
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

  // processed - computed: false, optional: true, required: false
  private _processed?: number; 
  public get processed() {
    return this.getNumberAttribute('processed');
  }
  public set processed(value: number) {
    this._processed = value;
  }
  public resetProcessed() {
    this._processed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processedInput() {
    return this._processed;
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // retry_auth_fail - computed: false, optional: true, required: false
  private _retryAuthFail?: number; 
  public get retryAuthFail() {
    return this.getNumberAttribute('retry_auth_fail');
  }
  public set retryAuthFail(value: number) {
    this._retryAuthFail = value;
  }
  public resetRetryAuthFail() {
    this._retryAuthFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryAuthFailInput() {
    return this._retryAuthFail;
  }

  // retry_auth_pass - computed: false, optional: true, required: false
  private _retryAuthPass?: number; 
  public get retryAuthPass() {
    return this.getNumberAttribute('retry_auth_pass');
  }
  public set retryAuthPass(value: number) {
    this._retryAuthPass = value;
  }
  public resetRetryAuthPass() {
    this._retryAuthPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryAuthPassInput() {
    return this._retryAuthPass;
  }

  // retry_auth_sent - computed: false, optional: true, required: false
  private _retryAuthSent?: number; 
  public get retryAuthSent() {
    return this.getNumberAttribute('retry_auth_sent');
  }
  public set retryAuthSent(value: number) {
    this._retryAuthSent = value;
  }
  public resetRetryAuthSent() {
    this._retryAuthSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryAuthSentInput() {
    return this._retryAuthSent;
  }

  // rtt0 - computed: false, optional: true, required: false
  private _rtt0?: number; 
  public get rtt0() {
    return this.getNumberAttribute('rtt0');
  }
  public set rtt0(value: number) {
    this._rtt0 = value;
  }
  public resetRtt0() {
    this._rtt0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtt0Input() {
    return this._rtt0;
  }

  // rtt_drop0 - computed: false, optional: true, required: false
  private _rttDrop0?: number; 
  public get rttDrop0() {
    return this.getNumberAttribute('rtt_drop0');
  }
  public set rttDrop0(value: number) {
    this._rttDrop0 = value;
  }
  public resetRttDrop0() {
    this._rttDrop0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rttDrop0Input() {
    return this._rttDrop0;
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

  // short_header - computed: false, optional: true, required: false
  private _shortHeader?: number; 
  public get shortHeader() {
    return this.getNumberAttribute('short_header');
  }
  public set shortHeader(value: number) {
    this._shortHeader = value;
  }
  public resetShortHeader() {
    this._shortHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortHeaderInput() {
    return this._shortHeader;
  }

  // short_header_drop - computed: false, optional: true, required: false
  private _shortHeaderDrop?: number; 
  public get shortHeaderDrop() {
    return this.getNumberAttribute('short_header_drop');
  }
  public set shortHeaderDrop(value: number) {
    this._shortHeaderDrop = value;
  }
  public resetShortHeaderDrop() {
    this._shortHeaderDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortHeaderDropInput() {
    return this._shortHeaderDrop;
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

  // version_match_action_blacklist - computed: false, optional: true, required: false
  private _versionMatchActionBlacklist?: number; 
  public get versionMatchActionBlacklist() {
    return this.getNumberAttribute('version_match_action_blacklist');
  }
  public set versionMatchActionBlacklist(value: number) {
    this._versionMatchActionBlacklist = value;
  }
  public resetVersionMatchActionBlacklist() {
    this._versionMatchActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionMatchActionBlacklistInput() {
    return this._versionMatchActionBlacklist;
  }

  // version_match_action_drop - computed: false, optional: true, required: false
  private _versionMatchActionDrop?: number; 
  public get versionMatchActionDrop() {
    return this.getNumberAttribute('version_match_action_drop');
  }
  public set versionMatchActionDrop(value: number) {
    this._versionMatchActionDrop = value;
  }
  public resetVersionMatchActionDrop() {
    this._versionMatchActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionMatchActionDropInput() {
    return this._versionMatchActionDrop;
  }

  // version_match_action_taken - computed: false, optional: true, required: false
  private _versionMatchActionTaken?: number; 
  public get versionMatchActionTaken() {
    return this.getNumberAttribute('version_match_action_taken');
  }
  public set versionMatchActionTaken(value: number) {
    this._versionMatchActionTaken = value;
  }
  public resetVersionMatchActionTaken() {
    this._versionMatchActionTaken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionMatchActionTakenInput() {
    return this._versionMatchActionTaken;
  }

  // version_negotiation - computed: false, optional: true, required: false
  private _versionNegotiation?: number; 
  public get versionNegotiation() {
    return this.getNumberAttribute('version_negotiation');
  }
  public set versionNegotiation(value: number) {
    this._versionNegotiation = value;
  }
  public resetVersionNegotiation() {
    this._versionNegotiation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNegotiationInput() {
    return this._versionNegotiation;
  }

  // version_no_match_drop - computed: false, optional: true, required: false
  private _versionNoMatchDrop?: number; 
  public get versionNoMatchDrop() {
    return this.getNumberAttribute('version_no_match_drop');
  }
  public set versionNoMatchDrop(value: number) {
    this._versionNoMatchDrop = value;
  }
  public resetVersionNoMatchDrop() {
    this._versionNoMatchDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionNoMatchDropInput() {
    return this._versionNoMatchDrop;
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats thunder_ddos_quic_zone_port_stats}
*/
export class DataThunderDdosQuicZonePortStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_quic_zone_port_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosQuicZonePortStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosQuicZonePortStats to import
  * @param importFromId The id of the existing DataThunderDdosQuicZonePortStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosQuicZonePortStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_quic_zone_port_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_quic_zone_port_stats thunder_ddos_quic_zone_port_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosQuicZonePortStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosQuicZonePortStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_quic_zone_port_stats',
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderDdosQuicZonePortStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosQuicZonePortStatsStats) {
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
      stats: dataThunderDdosQuicZonePortStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderDdosQuicZonePortStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosQuicZonePortStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
