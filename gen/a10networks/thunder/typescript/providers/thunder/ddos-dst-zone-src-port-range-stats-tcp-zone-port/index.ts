// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstZoneSrcPortRangeStatsTcpZonePortConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#id DdosDstZoneSrcPortRangeStatsTcpZonePort#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'udp': UDP port; 'tcp': TCP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#protocol DdosDstZoneSrcPortRangeStatsTcpZonePort#protocol}
  */
  readonly protocol: string;
  /**
  * Src Port-Range End Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_port_range_end DdosDstZoneSrcPortRangeStatsTcpZonePort#src_port_range_end}
  */
  readonly srcPortRangeEnd: number;
  /**
  * Src Port-Range Start Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_port_range_start DdosDstZoneSrcPortRangeStatsTcpZonePort#src_port_range_start}
  */
  readonly srcPortRangeStart: number;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#zone_name DdosDstZoneSrcPortRangeStatsTcpZonePort#zone_name}
  */
  readonly zoneName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#stats DdosDstZoneSrcPortRangeStatsTcpZonePort#stats}
  */
  readonly stats?: DdosDstZoneSrcPortRangeStatsTcpZonePortStats;
}
export interface DdosDstZoneSrcPortRangeStatsTcpZonePortStatsTcpZonePort {
  /**
  * ACK Retry Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#ack_auth_fail DdosDstZoneSrcPortRangeStatsTcpZonePort#ack_auth_fail}
  */
  readonly ackAuthFail?: number;
  /**
  * ACK Retry Timeout Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#ack_retry_blacklist DdosDstZoneSrcPortRangeStatsTcpZonePort#ack_retry_blacklist}
  */
  readonly ackRetryBlacklist?: number;
  /**
  * ACK Retry Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#ack_retry_gap_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#ack_retry_gap_drop}
  */
  readonly ackRetryGapDrop?: number;
  /**
  * ACK Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#ack_retry_init DdosDstZoneSrcPortRangeStatsTcpZonePort#ack_retry_init}
  */
  readonly ackRetryInit?: number;
  /**
  * ACK Retry Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#ack_retry_pass DdosDstZoneSrcPortRangeStatsTcpZonePort#ack_retry_pass}
  */
  readonly ackRetryPass?: number;
  /**
  * ACK Retry Timeout Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#ack_retry_reset DdosDstZoneSrcPortRangeStatsTcpZonePort#ack_retry_reset}
  */
  readonly ackRetryReset?: number;
  /**
  * ACK Retry RTO Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#ack_retry_rto_fail DdosDstZoneSrcPortRangeStatsTcpZonePort#ack_retry_rto_fail}
  */
  readonly ackRetryRtoFail?: number;
  /**
  * ACK Retry RTO Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#ack_retry_rto_pass DdosDstZoneSrcPortRangeStatsTcpZonePort#ack_retry_rto_pass}
  */
  readonly ackRetryRtoPass?: number;
  /**
  * ACK Retry RTO Progress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#ack_retry_rto_progress DdosDstZoneSrcPortRangeStatsTcpZonePort#ack_retry_rto_progress}
  */
  readonly ackRetryRtoProgress?: number;
  /**
  * ACK Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#ack_retry_timeout DdosDstZoneSrcPortRangeStatsTcpZonePort#ack_retry_timeout}
  */
  readonly ackRetryTimeout?: number;
  /**
  * Session Reset for All Src Upon Level Escalation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#all_src_session_reset DdosDstZoneSrcPortRangeStatsTcpZonePort#all_src_session_reset}
  */
  readonly allSrcSessionReset?: number;
  /**
  * TCP Auth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#auth_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#auth_drop}
  */
  readonly authDrop?: number;
  /**
  * TCP Auth Responded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#auth_resp DdosDstZoneSrcPortRangeStatsTcpZonePort#auth_resp}
  */
  readonly authResp?: number;
  /**
  * Dst Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#bl DdosDstZoneSrcPortRangeStatsTcpZonePort#bl}
  */
  readonly bl?: number;
  /**
  * Clear Session Upon De-escalation to Level 0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#clear_session_upon_deescalation DdosDstZoneSrcPortRangeStatsTcpZonePort#clear_session_upon_deescalation}
  */
  readonly clearSessionUponDeescalation?: number;
  /**
  * Connections Closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#conn_close DdosDstZoneSrcPortRangeStatsTcpZonePort#conn_close}
  */
  readonly connClose?: number;
  /**
  * Half Open Connections Closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#conn_close_half_open DdosDstZoneSrcPortRangeStatsTcpZonePort#conn_close_half_open}
  */
  readonly connCloseHalfOpen?: number;
  /**
  * FIN Connections Closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#conn_close_w_fin DdosDstZoneSrcPortRangeStatsTcpZonePort#conn_close_w_fin}
  */
  readonly connCloseWFin?: number;
  /**
  * Idle Connections Closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#conn_close_w_idle DdosDstZoneSrcPortRangeStatsTcpZonePort#conn_close_w_idle}
  */
  readonly connCloseWIdle?: number;
  /**
  * RST Connections Closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#conn_close_w_rst DdosDstZoneSrcPortRangeStatsTcpZonePort#conn_close_w_rst}
  */
  readonly connCloseWRst?: number;
  /**
  * Connections Created From ACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#conn_create_from_ack DdosDstZoneSrcPortRangeStatsTcpZonePort#conn_create_from_ack}
  */
  readonly connCreateFromAck?: number;
  /**
  * Connections Created From SYN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#conn_create_from_syn DdosDstZoneSrcPortRangeStatsTcpZonePort#conn_create_from_syn}
  */
  readonly connCreateFromSyn?: number;
  /**
  * Connections Created From SYNACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#conn_create_from_synack DdosDstZoneSrcPortRangeStatsTcpZonePort#conn_create_from_synack}
  */
  readonly connCreateFromSynack?: number;
  /**
  * TCP Conn Out-Of-Seq Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#conn_ofo_rate_excd DdosDstZoneSrcPortRangeStatsTcpZonePort#conn_ofo_rate_excd}
  */
  readonly connOfoRateExcd?: number;
  /**
  * TCP Conn Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#conn_prate_excd DdosDstZoneSrcPortRangeStatsTcpZonePort#conn_prate_excd}
  */
  readonly connPrateExcd?: number;
  /**
  * TCP Conn Retransmit Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#conn_rexmit_rate_excd DdosDstZoneSrcPortRangeStatsTcpZonePort#conn_rexmit_rate_excd}
  */
  readonly connRexmitRateExcd?: number;
  /**
  * TCP Conn Zero-Window Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#conn_zwindow_rate_excd DdosDstZoneSrcPortRangeStatsTcpZonePort#conn_zwindow_rate_excd}
  */
  readonly connZwindowRateExcd?: number;
  /**
  * Create Conn with non-SYN Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#create_conn_non_syn_dropped DdosDstZoneSrcPortRangeStatsTcpZonePort#create_conn_non_syn_dropped}
  */
  readonly createConnNonSynDropped?: number;
  /**
  * Create Conn with non-SYN Packets Conn RST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#create_conn_non_syn_rst DdosDstZoneSrcPortRangeStatsTcpZonePort#create_conn_non_syn_rst}
  */
  readonly createConnNonSynRst?: number;
  /**
  * Current Escalation Level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#current_es_level DdosDstZoneSrcPortRangeStatsTcpZonePort#current_es_level}
  */
  readonly currentEsLevel?: number;
  /**
  * Dst Hardware Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#dst_hw_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#dst_hw_drop}
  */
  readonly dstHwDrop?: number;
  /**
  * Dst Hardware Drop Rules Inserted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#dst_hw_drop_inserted DdosDstZoneSrcPortRangeStatsTcpZonePort#dst_hw_drop_inserted}
  */
  readonly dstHwDropInserted?: number;
  /**
  * Dst Hardware Drop Rules Removed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#dst_hw_drop_removed DdosDstZoneSrcPortRangeStatsTcpZonePort#dst_hw_drop_removed}
  */
  readonly dstHwDropRemoved?: number;
  /**
  * Half Open Connections Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#dst_tcp_conn_half_open_timeout DdosDstZoneSrcPortRangeStatsTcpZonePort#dst_tcp_conn_half_open_timeout}
  */
  readonly dstTcpConnHalfOpenTimeout?: number;
  /**
  * Half Open Connections Timeout RST Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#dst_tcp_conn_half_open_timeout_rst_sent DdosDstZoneSrcPortRangeStatsTcpZonePort#dst_tcp_conn_half_open_timeout_rst_sent}
  */
  readonly dstTcpConnHalfOpenTimeoutRstSent?: number;
  /**
  * Sessions Aged Out RST Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#dst_tcp_sess_aged_rst_sent DdosDstZoneSrcPortRangeStatsTcpZonePort#dst_tcp_sess_aged_rst_sent}
  */
  readonly dstTcpSessAgedRstSent?: number;
  /**
  * dynamic-entry-count warning send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#dynamic_count_warn DdosDstZoneSrcPortRangeStatsTcpZonePort#dynamic_count_warn}
  */
  readonly dynamicCountWarn?: number;
  /**
  * East-West Inbound Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#ew_inbound_port_byte_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#ew_inbound_port_byte_drop}
  */
  readonly ewInboundPortByteDrop?: number;
  /**
  * East-West Inbound Bytes Recevied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#ew_inbound_port_byte_rcv DdosDstZoneSrcPortRangeStatsTcpZonePort#ew_inbound_port_byte_rcv}
  */
  readonly ewInboundPortByteRcv?: number;
  /**
  * East-West Inbound Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#ew_inbound_port_byte_sent DdosDstZoneSrcPortRangeStatsTcpZonePort#ew_inbound_port_byte_sent}
  */
  readonly ewInboundPortByteSent?: number;
  /**
  * East-West Inbound Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#ew_inbound_port_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#ew_inbound_port_drop}
  */
  readonly ewInboundPortDrop?: number;
  /**
  * East-West Inbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#ew_inbound_port_rcv DdosDstZoneSrcPortRangeStatsTcpZonePort#ew_inbound_port_rcv}
  */
  readonly ewInboundPortRcv?: number;
  /**
  * East-West Inbound Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#ew_inbound_port_sent DdosDstZoneSrcPortRangeStatsTcpZonePort#ew_inbound_port_sent}
  */
  readonly ewInboundPortSent?: number;
  /**
  * East-West Outbound Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#ew_outbound_port_byte_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#ew_outbound_port_byte_drop}
  */
  readonly ewOutboundPortByteDrop?: number;
  /**
  * East-West Outbound Bytes Recevied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#ew_outbound_port_byte_rcv DdosDstZoneSrcPortRangeStatsTcpZonePort#ew_outbound_port_byte_rcv}
  */
  readonly ewOutboundPortByteRcv?: number;
  /**
  * East-West Outbound Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#ew_outbound_port_byte_sent DdosDstZoneSrcPortRangeStatsTcpZonePort#ew_outbound_port_byte_sent}
  */
  readonly ewOutboundPortByteSent?: number;
  /**
  * East-West Outbound Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#ew_outbound_port_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#ew_outbound_port_drop}
  */
  readonly ewOutboundPortDrop?: number;
  /**
  * East-West Outbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#ew_outbound_port_rcv DdosDstZoneSrcPortRangeStatsTcpZonePort#ew_outbound_port_rcv}
  */
  readonly ewOutboundPortRcv?: number;
  /**
  * East-West Outbound Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#ew_outbound_port_sent DdosDstZoneSrcPortRangeStatsTcpZonePort#ew_outbound_port_sent}
  */
  readonly ewOutboundPortSent?: number;
  /**
  * Exceed Action: Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#exceed_action_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#exceed_action_drop}
  */
  readonly exceedActionDrop?: number;
  /**
  * Exceed Action: Tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#exceed_action_tunnel DdosDstZoneSrcPortRangeStatsTcpZonePort#exceed_action_tunnel}
  */
  readonly exceedActionTunnel?: number;
  /**
  * Src KiBit Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#exceed_drop_brate_src DdosDstZoneSrcPortRangeStatsTcpZonePort#exceed_drop_brate_src}
  */
  readonly exceedDropBrateSrc?: number;
  /**
  * Src KiBit Rate Exceeded Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#exceed_drop_brate_src_pkt DdosDstZoneSrcPortRangeStatsTcpZonePort#exceed_drop_brate_src_pkt}
  */
  readonly exceedDropBrateSrcPkt?: number;
  /**
  * Src Conn Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#exceed_drop_climit_src DdosDstZoneSrcPortRangeStatsTcpZonePort#exceed_drop_climit_src}
  */
  readonly exceedDropClimitSrc?: number;
  /**
  * Src Conn Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#exceed_drop_crate_src DdosDstZoneSrcPortRangeStatsTcpZonePort#exceed_drop_crate_src}
  */
  readonly exceedDropCrateSrc?: number;
  /**
  * Src Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#exceed_drop_prate_src DdosDstZoneSrcPortRangeStatsTcpZonePort#exceed_drop_prate_src}
  */
  readonly exceedDropPrateSrc?: number;
  /**
  * Filter1 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#filter1_match DdosDstZoneSrcPortRangeStatsTcpZonePort#filter1_match}
  */
  readonly filter1Match?: number;
  /**
  * Filter2 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#filter2_match DdosDstZoneSrcPortRangeStatsTcpZonePort#filter2_match}
  */
  readonly filter2Match?: number;
  /**
  * Filter3 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#filter3_match DdosDstZoneSrcPortRangeStatsTcpZonePort#filter3_match}
  */
  readonly filter3Match?: number;
  /**
  * Filter4 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#filter4_match DdosDstZoneSrcPortRangeStatsTcpZonePort#filter4_match}
  */
  readonly filter4Match?: number;
  /**
  * Filter5 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#filter5_match DdosDstZoneSrcPortRangeStatsTcpZonePort#filter5_match}
  */
  readonly filter5Match?: number;
  /**
  * Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#filter_action_blacklist DdosDstZoneSrcPortRangeStatsTcpZonePort#filter_action_blacklist}
  */
  readonly filterActionBlacklist?: number;
  /**
  * Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#filter_action_default_pass DdosDstZoneSrcPortRangeStatsTcpZonePort#filter_action_default_pass}
  */
  readonly filterActionDefaultPass?: number;
  /**
  * Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#filter_action_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#filter_action_drop}
  */
  readonly filterActionDrop?: number;
  /**
  * Filter Action WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#filter_action_whitelist DdosDstZoneSrcPortRangeStatsTcpZonePort#filter_action_whitelist}
  */
  readonly filterActionWhitelist?: number;
  /**
  * Filter Auth Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#filter_auth_fail DdosDstZoneSrcPortRangeStatsTcpZonePort#filter_auth_fail}
  */
  readonly filterAuthFail?: number;
  /**
  * Filter No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#filter_none_match DdosDstZoneSrcPortRangeStatsTcpZonePort#filter_none_match}
  */
  readonly filterNoneMatch?: number;
  /**
  * Filter Not Matched on Pkt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#filter_total_not_match DdosDstZoneSrcPortRangeStatsTcpZonePort#filter_total_not_match}
  */
  readonly filterTotalNotMatch?: number;
  /**
  * Fragmented Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#frag_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#frag_drop}
  */
  readonly fragDrop?: number;
  /**
  * Fragmented Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#frag_rcvd DdosDstZoneSrcPortRangeStatsTcpZonePort#frag_rcvd}
  */
  readonly fragRcvd?: number;
  /**
  * Fragmented Packets Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#frag_timeout DdosDstZoneSrcPortRangeStatsTcpZonePort#frag_timeout}
  */
  readonly fragTimeout?: number;
  /**
  * SYN Auth Hybrid Auth No Match Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#hybrid_auth_auth_no_match DdosDstZoneSrcPortRangeStatsTcpZonePort#hybrid_auth_auth_no_match}
  */
  readonly hybridAuthAuthNoMatch?: number;
  /**
  * SYN Auth Hybrid Auth No Match Drop: ACK Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#hybrid_auth_auth_no_match_ack_rcv DdosDstZoneSrcPortRangeStatsTcpZonePort#hybrid_auth_auth_no_match_ack_rcv}
  */
  readonly hybridAuthAuthNoMatchAckRcv?: number;
  /**
  * SYN Auth Hybrid Auth No Match Drop: RST Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#hybrid_auth_auth_no_match_rst_rcv DdosDstZoneSrcPortRangeStatsTcpZonePort#hybrid_auth_auth_no_match_rst_rcv}
  */
  readonly hybridAuthAuthNoMatchRstRcv?: number;
  /**
  * SYN Auth Hybrid Entry Aged Out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#hybrid_auth_entry_aged_out DdosDstZoneSrcPortRangeStatsTcpZonePort#hybrid_auth_entry_aged_out}
  */
  readonly hybridAuthEntryAgedOut?: number;
  /**
  * SYN Auth Hybrid Filter Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#hybrid_auth_filter_full DdosDstZoneSrcPortRangeStatsTcpZonePort#hybrid_auth_filter_full}
  */
  readonly hybridAuthFilterFull?: number;
  /**
  * SYN Auth Hybrid Invalid SYNACK Auth Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#hybrid_auth_invalid_fail DdosDstZoneSrcPortRangeStatsTcpZonePort#hybrid_auth_invalid_fail}
  */
  readonly hybridAuthInvalidFail?: number;
  /**
  * SYN Auth Hybrid Invalid SYNACK Auth Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#hybrid_auth_invalid_pass DdosDstZoneSrcPortRangeStatsTcpZonePort#hybrid_auth_invalid_pass}
  */
  readonly hybridAuthInvalidPass?: number;
  /**
  * SYN Auth Hybrid Invalid SYNACK Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#hybrid_auth_invalid_sa_sent DdosDstZoneSrcPortRangeStatsTcpZonePort#hybrid_auth_invalid_sa_sent}
  */
  readonly hybridAuthInvalidSaSent?: number;
  /**
  * SYN Auth Hybrid Lookup Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#hybrid_auth_lookup_fail DdosDstZoneSrcPortRangeStatsTcpZonePort#hybrid_auth_lookup_fail}
  */
  readonly hybridAuthLookupFail?: number;
  /**
  * SYN Auth Hybrid Method Change
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#hybrid_auth_method_change DdosDstZoneSrcPortRangeStatsTcpZonePort#hybrid_auth_method_change}
  */
  readonly hybridAuthMethodChange?: number;
  /**
  * SYN Auth Hybrid Unknown Auth Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#hybrid_auth_unknown_fail DdosDstZoneSrcPortRangeStatsTcpZonePort#hybrid_auth_unknown_fail}
  */
  readonly hybridAuthUnknownFail?: number;
  /**
  * SYN Auth Hybrid Unknown Auth Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#hybrid_auth_unknown_pass DdosDstZoneSrcPortRangeStatsTcpZonePort#hybrid_auth_unknown_pass}
  */
  readonly hybridAuthUnknownPass?: number;
  /**
  * SYN Auth Hybrid Valid SYNACK Auth Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#hybrid_auth_valid_fail DdosDstZoneSrcPortRangeStatsTcpZonePort#hybrid_auth_valid_fail}
  */
  readonly hybridAuthValidFail?: number;
  /**
  * SYN Auth Hybrid Valid SYNACK Auth Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#hybrid_auth_valid_pass DdosDstZoneSrcPortRangeStatsTcpZonePort#hybrid_auth_valid_pass}
  */
  readonly hybridAuthValidPass?: number;
  /**
  * SYN Auth Hybrid Valid SYNACK Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#hybrid_auth_valid_sa_sent DdosDstZoneSrcPortRangeStatsTcpZonePort#hybrid_auth_valid_sa_sent}
  */
  readonly hybridAuthValidSaSent?: number;
  /**
  * IP Filtering Policy: Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#ip_filtering_bl DdosDstZoneSrcPortRangeStatsTcpZonePort#ip_filtering_bl}
  */
  readonly ipFilteringBl?: number;
  /**
  * IP Filtering Policy: Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#ip_filtering_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#ip_filtering_drop}
  */
  readonly ipFilteringDrop?: number;
  /**
  * No Policy Class-list Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#no_policy_class_list_match DdosDstZoneSrcPortRangeStatsTcpZonePort#no_policy_class_list_match}
  */
  readonly noPolicyClassListMatch?: number;
  /**
  * No Route Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#no_route_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#no_route_drop}
  */
  readonly noRouteDrop?: number;
  /**
  * Out-Of-Seq Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#out_of_seq_excd DdosDstZoneSrcPortRangeStatsTcpZonePort#out_of_seq_excd}
  */
  readonly outOfSeqExcd?: number;
  /**
  * Outbound Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#outbound_port_bytes DdosDstZoneSrcPortRangeStatsTcpZonePort#outbound_port_bytes}
  */
  readonly outboundPortBytes?: number;
  /**
  * Outbound Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#outbound_port_bytes_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#outbound_port_bytes_drop}
  */
  readonly outboundPortBytesDrop?: number;
  /**
  * Outbound Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#outbound_port_bytes_sent DdosDstZoneSrcPortRangeStatsTcpZonePort#outbound_port_bytes_sent}
  */
  readonly outboundPortBytesSent?: number;
  /**
  * Outbound Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#outbound_port_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#outbound_port_drop}
  */
  readonly outboundPortDrop?: number;
  /**
  * Outbound Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#outbound_port_pkt_sent DdosDstZoneSrcPortRangeStatsTcpZonePort#outbound_port_pkt_sent}
  */
  readonly outboundPortPktSent?: number;
  /**
  * Outbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#outbound_port_rcvd DdosDstZoneSrcPortRangeStatsTcpZonePort#outbound_port_rcvd}
  */
  readonly outboundPortRcvd?: number;
  /**
  * Extracted Filter1 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#pattern_filter1_match DdosDstZoneSrcPortRangeStatsTcpZonePort#pattern_filter1_match}
  */
  readonly patternFilter1Match?: number;
  /**
  * Extracted Filter2 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#pattern_filter2_match DdosDstZoneSrcPortRangeStatsTcpZonePort#pattern_filter2_match}
  */
  readonly patternFilter2Match?: number;
  /**
  * Extracted Filter3 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#pattern_filter3_match DdosDstZoneSrcPortRangeStatsTcpZonePort#pattern_filter3_match}
  */
  readonly patternFilter3Match?: number;
  /**
  * Extracted Filter4 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#pattern_filter4_match DdosDstZoneSrcPortRangeStatsTcpZonePort#pattern_filter4_match}
  */
  readonly patternFilter4Match?: number;
  /**
  * Extracted Filter5 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#pattern_filter5_match DdosDstZoneSrcPortRangeStatsTcpZonePort#pattern_filter5_match}
  */
  readonly patternFilter5Match?: number;
  /**
  * Extracted Filter Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#pattern_filter_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#pattern_filter_drop}
  */
  readonly patternFilterDrop?: number;
  /**
  * Pattern Recognition: Pattern Not Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#pattern_not_found DdosDstZoneSrcPortRangeStatsTcpZonePort#pattern_not_found}
  */
  readonly patternNotFound?: number;
  /**
  * Pattern Recognition: Exceptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#pattern_recognition_generic_error DdosDstZoneSrcPortRangeStatsTcpZonePort#pattern_recognition_generic_error}
  */
  readonly patternRecognitionGenericError?: number;
  /**
  * Pattern Recognition: Pattern Change Detected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#pattern_recognition_pattern_changed DdosDstZoneSrcPortRangeStatsTcpZonePort#pattern_recognition_pattern_changed}
  */
  readonly patternRecognitionPatternChanged?: number;
  /**
  * Pattern Recognition: Engine Started
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#pattern_recognition_proceeded DdosDstZoneSrcPortRangeStatsTcpZonePort#pattern_recognition_proceeded}
  */
  readonly patternRecognitionProceeded?: number;
  /**
  * Pattern Recognition: Sampling Started
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#pattern_recognition_sampling_started DdosDstZoneSrcPortRangeStatsTcpZonePort#pattern_recognition_sampling_started}
  */
  readonly patternRecognitionSamplingStarted?: number;
  /**
  * Inbound Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#port_bytes DdosDstZoneSrcPortRangeStatsTcpZonePort#port_bytes}
  */
  readonly portBytes?: number;
  /**
  * Inbound Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#port_bytes_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#port_bytes_drop}
  */
  readonly portBytesDrop?: number;
  /**
  * Inbound Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#port_bytes_sent DdosDstZoneSrcPortRangeStatsTcpZonePort#port_bytes_sent}
  */
  readonly portBytesSent?: number;
  /**
  * Conn Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#port_conn_limm_exceed DdosDstZoneSrcPortRangeStatsTcpZonePort#port_conn_limm_exceed}
  */
  readonly portConnLimmExceed?: number;
  /**
  * Conn Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#port_conn_rate_exceed DdosDstZoneSrcPortRangeStatsTcpZonePort#port_conn_rate_exceed}
  */
  readonly portConnRateExceed?: number;
  /**
  * Inbound Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#port_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#port_drop}
  */
  readonly portDrop?: number;
  /**
  * KiBit Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#port_kbit_rate_exceed DdosDstZoneSrcPortRangeStatsTcpZonePort#port_kbit_rate_exceed}
  */
  readonly portKbitRateExceed?: number;
  /**
  * KiBit Rate Exceeded Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#port_kbit_rate_exceed_pkt DdosDstZoneSrcPortRangeStatsTcpZonePort#port_kbit_rate_exceed_pkt}
  */
  readonly portKbitRateExceedPkt?: number;
  /**
  * Packet Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#port_pkt_rate_exceed DdosDstZoneSrcPortRangeStatsTcpZonePort#port_pkt_rate_exceed}
  */
  readonly portPktRateExceed?: number;
  /**
  * Inbound Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#port_pkt_sent DdosDstZoneSrcPortRangeStatsTcpZonePort#port_pkt_sent}
  */
  readonly portPktSent?: number;
  /**
  * Inbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#port_rcvd DdosDstZoneSrcPortRangeStatsTcpZonePort#port_rcvd}
  */
  readonly portRcvd?: number;
  /**
  * Src Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#port_src_bl DdosDstZoneSrcPortRangeStatsTcpZonePort#port_src_bl}
  */
  readonly portSrcBl?: number;
  /**
  * Src Escalation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#port_src_escalation DdosDstZoneSrcPortRangeStatsTcpZonePort#port_src_escalation}
  */
  readonly portSrcEscalation?: number;
  /**
  * TCP SYN Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#port_syn_rate_exceed DdosDstZoneSrcPortRangeStatsTcpZonePort#port_syn_rate_exceed}
  */
  readonly portSynRateExceed?: number;
  /**
  * TCP SYNACK Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#port_synack_rate_exceed DdosDstZoneSrcPortRangeStatsTcpZonePort#port_synack_rate_exceed}
  */
  readonly portSynackRateExceed?: number;
  /**
  * Connection: Violation Exceed Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#prog_conn_exceed_bl DdosDstZoneSrcPortRangeStatsTcpZonePort#prog_conn_exceed_bl}
  */
  readonly progConnExceedBl?: number;
  /**
  * Connection: Violation Exceed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#prog_conn_exceed_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#prog_conn_exceed_drop}
  */
  readonly progConnExceedDrop?: number;
  /**
  * Connection: Violation Exceed Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#prog_conn_exceed_reset DdosDstZoneSrcPortRangeStatsTcpZonePort#prog_conn_exceed_reset}
  */
  readonly progConnExceedReset?: number;
  /**
  * Connection: Received Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#prog_conn_rcvd_exceed DdosDstZoneSrcPortRangeStatsTcpZonePort#prog_conn_rcvd_exceed}
  */
  readonly progConnRcvdExceed?: number;
  /**
  * Connection: Received to Sent Ratio Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#prog_conn_rcvd_sent_ratio_exceed DdosDstZoneSrcPortRangeStatsTcpZonePort#prog_conn_rcvd_sent_ratio_exceed}
  */
  readonly progConnRcvdSentRatioExceed?: number;
  /**
  * Sample Collected: Connnection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#prog_conn_samples DdosDstZoneSrcPortRangeStatsTcpZonePort#prog_conn_samples}
  */
  readonly progConnSamples?: number;
  /**
  * Sample Processed: Connnection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#prog_conn_samples_processed DdosDstZoneSrcPortRangeStatsTcpZonePort#prog_conn_samples_processed}
  */
  readonly progConnSamplesProcessed?: number;
  /**
  * Connection: Sent Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#prog_conn_sent_exceed DdosDstZoneSrcPortRangeStatsTcpZonePort#prog_conn_sent_exceed}
  */
  readonly progConnSentExceed?: number;
  /**
  * Connection: Time Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#prog_conn_time_exceed DdosDstZoneSrcPortRangeStatsTcpZonePort#prog_conn_time_exceed}
  */
  readonly progConnTimeExceed?: number;
  /**
  * Req-Resp: Violation Exceed Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#prog_exceed_bl DdosDstZoneSrcPortRangeStatsTcpZonePort#prog_exceed_bl}
  */
  readonly progExceedBl?: number;
  /**
  * Req-Resp: Violation Exceed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#prog_exceed_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#prog_exceed_drop}
  */
  readonly progExceedDrop?: number;
  /**
  * Req-Resp: Violation Exceed Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#prog_exceed_reset DdosDstZoneSrcPortRangeStatsTcpZonePort#prog_exceed_reset}
  */
  readonly progExceedReset?: number;
  /**
  * Req-Resp: First Request Time Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#prog_first_req_time_exceed DdosDstZoneSrcPortRangeStatsTcpZonePort#prog_first_req_time_exceed}
  */
  readonly progFirstReqTimeExceed?: number;
  /**
  * Req-Resp: Client Query Time Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#prog_query_exceed DdosDstZoneSrcPortRangeStatsTcpZonePort#prog_query_exceed}
  */
  readonly progQueryExceed?: number;
  /**
  * Req-Resp: Request to Response Time Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#prog_req_resp_time_exceed DdosDstZoneSrcPortRangeStatsTcpZonePort#prog_req_resp_time_exceed}
  */
  readonly progReqRespTimeExceed?: number;
  /**
  * Sample Collected: Req-Resp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#prog_req_samples DdosDstZoneSrcPortRangeStatsTcpZonePort#prog_req_samples}
  */
  readonly progReqSamples?: number;
  /**
  * Sample Processed: Req-Resp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#prog_req_samples_processed DdosDstZoneSrcPortRangeStatsTcpZonePort#prog_req_samples_processed}
  */
  readonly progReqSamplesProcessed?: number;
  /**
  * Req-Resp: Request Length Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#prog_request_len_exceed DdosDstZoneSrcPortRangeStatsTcpZonePort#prog_request_len_exceed}
  */
  readonly progRequestLenExceed?: number;
  /**
  * Req-Resp: Response Packet Rate Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#prog_resp_pkt_rate_exceed DdosDstZoneSrcPortRangeStatsTcpZonePort#prog_resp_pkt_rate_exceed}
  */
  readonly progRespPktRateExceed?: number;
  /**
  * Req-Resp: Response to Request Time Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#prog_resp_req_time_exceed DdosDstZoneSrcPortRangeStatsTcpZonePort#prog_resp_req_time_exceed}
  */
  readonly progRespReqTimeExceed?: number;
  /**
  * Req-Resp: Response Length Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#prog_response_len_exceed DdosDstZoneSrcPortRangeStatsTcpZonePort#prog_response_len_exceed}
  */
  readonly progResponseLenExceed?: number;
  /**
  * Req-Resp: Server Think Time Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#prog_think_exceed DdosDstZoneSrcPortRangeStatsTcpZonePort#prog_think_exceed}
  */
  readonly progThinkExceed?: number;
  /**
  * Time Window: Violation Exceed Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#prog_win_exceed_bl DdosDstZoneSrcPortRangeStatsTcpZonePort#prog_win_exceed_bl}
  */
  readonly progWinExceedBl?: number;
  /**
  * Time Window: Violation Exceed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#prog_win_exceed_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#prog_win_exceed_drop}
  */
  readonly progWinExceedDrop?: number;
  /**
  * Time Window: Violation Exceed Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#prog_win_exceed_reset DdosDstZoneSrcPortRangeStatsTcpZonePort#prog_win_exceed_reset}
  */
  readonly progWinExceedReset?: number;
  /**
  * Time Window: Received Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#prog_win_rcvd_exceed DdosDstZoneSrcPortRangeStatsTcpZonePort#prog_win_rcvd_exceed}
  */
  readonly progWinRcvdExceed?: number;
  /**
  * Time Window: Received to Sent Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#prog_win_rcvd_sent_ratio_exceed DdosDstZoneSrcPortRangeStatsTcpZonePort#prog_win_rcvd_sent_ratio_exceed}
  */
  readonly progWinRcvdSentRatioExceed?: number;
  /**
  * Sample Collected: Time Window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#prog_win_samples DdosDstZoneSrcPortRangeStatsTcpZonePort#prog_win_samples}
  */
  readonly progWinSamples?: number;
  /**
  * Sample Processed: Time Window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#prog_win_samples_processed DdosDstZoneSrcPortRangeStatsTcpZonePort#prog_win_samples_processed}
  */
  readonly progWinSamplesProcessed?: number;
  /**
  * Time Window: Sent Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#prog_win_sent_exceed DdosDstZoneSrcPortRangeStatsTcpZonePort#prog_win_sent_exceed}
  */
  readonly progWinSentExceed?: number;
  /**
  * Retransmit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#retransmit_excd DdosDstZoneSrcPortRangeStatsTcpZonePort#retransmit_excd}
  */
  readonly retransmitExcd?: number;
  /**
  * RST Cookie Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#rst_cookie_fail DdosDstZoneSrcPortRangeStatsTcpZonePort#rst_cookie_fail}
  */
  readonly rstCookieFail?: number;
  /**
  * Same Source and Destination Port Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#same_sport_dport_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#same_sport_dport_drop}
  */
  readonly sameSportDportDrop?: number;
  /**
  * Per Addr-Port Conn Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#secondary_port_conn_limm_exceed DdosDstZoneSrcPortRangeStatsTcpZonePort#secondary_port_conn_limm_exceed}
  */
  readonly secondaryPortConnLimmExceed?: number;
  /**
  * Per Addr-Port Conn Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#secondary_port_conn_rate_exceed DdosDstZoneSrcPortRangeStatsTcpZonePort#secondary_port_conn_rate_exceed}
  */
  readonly secondaryPortConnRateExceed?: number;
  /**
  * Per Addr-Port Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#secondary_port_hit DdosDstZoneSrcPortRangeStatsTcpZonePort#secondary_port_hit}
  */
  readonly secondaryPortHit?: number;
  /**
  * Per Addr-Port KiBit Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#secondary_port_kbit_rate_exceed DdosDstZoneSrcPortRangeStatsTcpZonePort#secondary_port_kbit_rate_exceed}
  */
  readonly secondaryPortKbitRateExceed?: number;
  /**
  * Per Addr-Port KiBit Rate Exceeded Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#secondary_port_kbit_rate_exceed_pkt DdosDstZoneSrcPortRangeStatsTcpZonePort#secondary_port_kbit_rate_exceed_pkt}
  */
  readonly secondaryPortKbitRateExceedPkt?: number;
  /**
  * Per Addr-Port Packet Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#secondary_port_pkt_rate_exceed DdosDstZoneSrcPortRangeStatsTcpZonePort#secondary_port_pkt_rate_exceed}
  */
  readonly secondaryPortPktRateExceed?: number;
  /**
  * Sessions Aged Out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#sess_aged DdosDstZoneSrcPortRangeStatsTcpZonePort#sess_aged}
  */
  readonly sessAged?: number;
  /**
  * Session Create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#sess_create DdosDstZoneSrcPortRangeStatsTcpZonePort#sess_create}
  */
  readonly sessCreate?: number;
  /**
  * Inbound Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#sess_create_inbound DdosDstZoneSrcPortRangeStatsTcpZonePort#sess_create_inbound}
  */
  readonly sessCreateInbound?: number;
  /**
  * Outbound Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#sess_create_outbound DdosDstZoneSrcPortRangeStatsTcpZonePort#sess_create_outbound}
  */
  readonly sessCreateOutbound?: number;
  /**
  * Sflow External Packets Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#sflow_external_packets_sent DdosDstZoneSrcPortRangeStatsTcpZonePort#sflow_external_packets_sent}
  */
  readonly sflowExternalPacketsSent?: number;
  /**
  * Sflow External Samples Packed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#sflow_external_samples_packed DdosDstZoneSrcPortRangeStatsTcpZonePort#sflow_external_samples_packed}
  */
  readonly sflowExternalSamplesPacked?: number;
  /**
  * Sflow Internal Packets Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#sflow_internal_packets_sent DdosDstZoneSrcPortRangeStatsTcpZonePort#sflow_internal_packets_sent}
  */
  readonly sflowInternalPacketsSent?: number;
  /**
  * Sflow Internal Samples Packed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#sflow_internal_samples_packed DdosDstZoneSrcPortRangeStatsTcpZonePort#sflow_internal_samples_packed}
  */
  readonly sflowInternalSamplesPacked?: number;
  /**
  * Small-Window Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#small_window_excd DdosDstZoneSrcPortRangeStatsTcpZonePort#small_window_excd}
  */
  readonly smallWindowExcd?: number;
  /**
  * Small-Window Receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#small_window_rcv DdosDstZoneSrcPortRangeStatsTcpZonePort#small_window_rcv}
  */
  readonly smallWindowRcv?: number;
  /**
  * Source NAT Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#snat_fail DdosDstZoneSrcPortRangeStatsTcpZonePort#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Src ACK Retry Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_ack_auth_fail DdosDstZoneSrcPortRangeStatsTcpZonePort#src_ack_auth_fail}
  */
  readonly srcAckAuthFail?: number;
  /**
  * Src ACK Retry Timeout Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_ack_retry_blacklist DdosDstZoneSrcPortRangeStatsTcpZonePort#src_ack_retry_blacklist}
  */
  readonly srcAckRetryBlacklist?: number;
  /**
  * Src ACK Retry Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_ack_retry_gap_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#src_ack_retry_gap_drop}
  */
  readonly srcAckRetryGapDrop?: number;
  /**
  * Src ACK Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_ack_retry_init DdosDstZoneSrcPortRangeStatsTcpZonePort#src_ack_retry_init}
  */
  readonly srcAckRetryInit?: number;
  /**
  * Src ACK Retry Timeout Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_ack_retry_reset DdosDstZoneSrcPortRangeStatsTcpZonePort#src_ack_retry_reset}
  */
  readonly srcAckRetryReset?: number;
  /**
  * Src ACK Retry RTO Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_ack_retry_rto_fail DdosDstZoneSrcPortRangeStatsTcpZonePort#src_ack_retry_rto_fail}
  */
  readonly srcAckRetryRtoFail?: number;
  /**
  * Src ACK Retry RTO Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_ack_retry_rto_pass DdosDstZoneSrcPortRangeStatsTcpZonePort#src_ack_retry_rto_pass}
  */
  readonly srcAckRetryRtoPass?: number;
  /**
  * Src ACK Retry RTO Progress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_ack_retry_rto_progress DdosDstZoneSrcPortRangeStatsTcpZonePort#src_ack_retry_rto_progress}
  */
  readonly srcAckRetryRtoProgress?: number;
  /**
  * Src ACK Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_ack_retry_timeout DdosDstZoneSrcPortRangeStatsTcpZonePort#src_ack_retry_timeout}
  */
  readonly srcAckRetryTimeout?: number;
  /**
  * Src TCP Auth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_auth_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#src_auth_drop}
  */
  readonly srcAuthDrop?: number;
  /**
  * Src TCP Auth Dropped: ACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_auth_drop_ack DdosDstZoneSrcPortRangeStatsTcpZonePort#src_auth_drop_ack}
  */
  readonly srcAuthDropAck?: number;
  /**
  * Src TCP Auth Dropped: ACK Fail Auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_auth_drop_ack_fail_auth DdosDstZoneSrcPortRangeStatsTcpZonePort#src_auth_drop_ack_fail_auth}
  */
  readonly srcAuthDropAckFailAuth?: number;
  /**
  * Src TCP Auth Dropped: ACK Pass Auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_auth_drop_ack_pass_auth DdosDstZoneSrcPortRangeStatsTcpZonePort#src_auth_drop_ack_pass_auth}
  */
  readonly srcAuthDropAckPassAuth?: number;
  /**
  * Src TCP Auth Dropped: ACK Retransmit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_auth_drop_ack_xmit DdosDstZoneSrcPortRangeStatsTcpZonePort#src_auth_drop_ack_xmit}
  */
  readonly srcAuthDropAckXmit?: number;
  /**
  * Src TCP Auth Dropped: RST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_auth_drop_rst DdosDstZoneSrcPortRangeStatsTcpZonePort#src_auth_drop_rst}
  */
  readonly srcAuthDropRst?: number;
  /**
  * Src TCP Auth Dropped: RST Fail Auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_auth_drop_rst_fail_auth DdosDstZoneSrcPortRangeStatsTcpZonePort#src_auth_drop_rst_fail_auth}
  */
  readonly srcAuthDropRstFailAuth?: number;
  /**
  * Src TCP Auth Dropped: RST Pass Auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_auth_drop_rst_pass_auth DdosDstZoneSrcPortRangeStatsTcpZonePort#src_auth_drop_rst_pass_auth}
  */
  readonly srcAuthDropRstPassAuth?: number;
  /**
  * Src TCP Auth Dropped: RST Retransmit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_auth_drop_rst_xmit DdosDstZoneSrcPortRangeStatsTcpZonePort#src_auth_drop_rst_xmit}
  */
  readonly srcAuthDropRstXmit?: number;
  /**
  * Src TCP Auth Dropped: SYN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_auth_drop_syn DdosDstZoneSrcPortRangeStatsTcpZonePort#src_auth_drop_syn}
  */
  readonly srcAuthDropSyn?: number;
  /**
  * Src TCP Conn Out-Of-Seq Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_conn_ofo_rate_excd DdosDstZoneSrcPortRangeStatsTcpZonePort#src_conn_ofo_rate_excd}
  */
  readonly srcConnOfoRateExcd?: number;
  /**
  * Src TCP Conn Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_conn_pkt_rate_excd DdosDstZoneSrcPortRangeStatsTcpZonePort#src_conn_pkt_rate_excd}
  */
  readonly srcConnPktRateExcd?: number;
  /**
  * Src TCP Conn Retransmit Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_conn_rexmit_rate_excd DdosDstZoneSrcPortRangeStatsTcpZonePort#src_conn_rexmit_rate_excd}
  */
  readonly srcConnRexmitRateExcd?: number;
  /**
  * Src TCP Conn Zero-Window Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_conn_zwindow_rate_excd DdosDstZoneSrcPortRangeStatsTcpZonePort#src_conn_zwindow_rate_excd}
  */
  readonly srcConnZwindowRateExcd?: number;
  /**
  * Src Create Conn with non-SYN Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_create_conn_non_syn_dropped DdosDstZoneSrcPortRangeStatsTcpZonePort#src_create_conn_non_syn_dropped}
  */
  readonly srcCreateConnNonSynDropped?: number;
  /**
  * Src Create Conn with non-SYN Packets Conn RST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_create_conn_non_syn_rst DdosDstZoneSrcPortRangeStatsTcpZonePort#src_create_conn_non_syn_rst}
  */
  readonly srcCreateConnNonSynRst?: number;
  /**
  * Src Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#src_drop}
  */
  readonly srcDrop?: number;
  /**
  * Src Filter1 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_filter1_match DdosDstZoneSrcPortRangeStatsTcpZonePort#src_filter1_match}
  */
  readonly srcFilter1Match?: number;
  /**
  * Src Filter2 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_filter2_match DdosDstZoneSrcPortRangeStatsTcpZonePort#src_filter2_match}
  */
  readonly srcFilter2Match?: number;
  /**
  * Src Filter3 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_filter3_match DdosDstZoneSrcPortRangeStatsTcpZonePort#src_filter3_match}
  */
  readonly srcFilter3Match?: number;
  /**
  * Src Filter4 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_filter4_match DdosDstZoneSrcPortRangeStatsTcpZonePort#src_filter4_match}
  */
  readonly srcFilter4Match?: number;
  /**
  * Src Filter5 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_filter5_match DdosDstZoneSrcPortRangeStatsTcpZonePort#src_filter5_match}
  */
  readonly srcFilter5Match?: number;
  /**
  * Src Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_filter_action_blacklist DdosDstZoneSrcPortRangeStatsTcpZonePort#src_filter_action_blacklist}
  */
  readonly srcFilterActionBlacklist?: number;
  /**
  * Src Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_filter_action_default_pass DdosDstZoneSrcPortRangeStatsTcpZonePort#src_filter_action_default_pass}
  */
  readonly srcFilterActionDefaultPass?: number;
  /**
  * Src Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_filter_action_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#src_filter_action_drop}
  */
  readonly srcFilterActionDrop?: number;
  /**
  * Src Filter Action WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_filter_action_whitelist DdosDstZoneSrcPortRangeStatsTcpZonePort#src_filter_action_whitelist}
  */
  readonly srcFilterActionWhitelist?: number;
  /**
  * Src Filter Auth Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_filter_auth_fail DdosDstZoneSrcPortRangeStatsTcpZonePort#src_filter_auth_fail}
  */
  readonly srcFilterAuthFail?: number;
  /**
  * Src Filter No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_filter_none_match DdosDstZoneSrcPortRangeStatsTcpZonePort#src_filter_none_match}
  */
  readonly srcFilterNoneMatch?: number;
  /**
  * Src Filter Not Matched on Pkt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_filter_total_not_match DdosDstZoneSrcPortRangeStatsTcpZonePort#src_filter_total_not_match}
  */
  readonly srcFilterTotalNotMatch?: number;
  /**
  * Src Fragmented Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_frag_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#src_frag_drop}
  */
  readonly srcFragDrop?: number;
  /**
  * Src Hardware Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_hw_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#src_hw_drop}
  */
  readonly srcHwDrop?: number;
  /**
  * Src Hardware Drop Rules Inserted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_hw_drop_inserted DdosDstZoneSrcPortRangeStatsTcpZonePort#src_hw_drop_inserted}
  */
  readonly srcHwDropInserted?: number;
  /**
  * Src Hardware Drop Rules Removed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_hw_drop_removed DdosDstZoneSrcPortRangeStatsTcpZonePort#src_hw_drop_removed}
  */
  readonly srcHwDropRemoved?: number;
  /**
  * Source Dynamic Entry Overflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_learn_overflow DdosDstZoneSrcPortRangeStatsTcpZonePort#src_learn_overflow}
  */
  readonly srcLearnOverflow?: number;
  /**
  * Src Out-Of-Seq Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_out_of_seq_excd DdosDstZoneSrcPortRangeStatsTcpZonePort#src_out_of_seq_excd}
  */
  readonly srcOutOfSeqExcd?: number;
  /**
  * Src Retransmit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_retransmit_excd DdosDstZoneSrcPortRangeStatsTcpZonePort#src_retransmit_excd}
  */
  readonly srcRetransmitExcd?: number;
  /**
  * Src RST Cookie Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_rst_cookie_fail DdosDstZoneSrcPortRangeStatsTcpZonePort#src_rst_cookie_fail}
  */
  readonly srcRstCookieFail?: number;
  /**
  * Src Small-Window Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_small_window_excd DdosDstZoneSrcPortRangeStatsTcpZonePort#src_small_window_excd}
  */
  readonly srcSmallWindowExcd?: number;
  /**
  * Src SYN Auth Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_syn_auth_fail DdosDstZoneSrcPortRangeStatsTcpZonePort#src_syn_auth_fail}
  */
  readonly srcSynAuthFail?: number;
  /**
  * Src SYN Cookie Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_syn_cookie_fail DdosDstZoneSrcPortRangeStatsTcpZonePort#src_syn_cookie_fail}
  */
  readonly srcSynCookieFail?: number;
  /**
  * Src SYN Cookie Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_syn_cookie_sent DdosDstZoneSrcPortRangeStatsTcpZonePort#src_syn_cookie_sent}
  */
  readonly srcSynCookieSent?: number;
  /**
  * Src TCP SYN Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_syn_rate_exceed DdosDstZoneSrcPortRangeStatsTcpZonePort#src_syn_rate_exceed}
  */
  readonly srcSynRateExceed?: number;
  /**
  * Src SYN Retry Timeout Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_syn_retry_blacklist DdosDstZoneSrcPortRangeStatsTcpZonePort#src_syn_retry_blacklist}
  */
  readonly srcSynRetryBlacklist?: number;
  /**
  * Src SYN Retry Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_syn_retry_failed DdosDstZoneSrcPortRangeStatsTcpZonePort#src_syn_retry_failed}
  */
  readonly srcSynRetryFailed?: number;
  /**
  * Src SYN Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_syn_retry_gap_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#src_syn_retry_gap_drop}
  */
  readonly srcSynRetryGapDrop?: number;
  /**
  * Src SYN Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_syn_retry_init DdosDstZoneSrcPortRangeStatsTcpZonePort#src_syn_retry_init}
  */
  readonly srcSynRetryInit?: number;
  /**
  * Src SYN Retry Timeout Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_syn_retry_reset DdosDstZoneSrcPortRangeStatsTcpZonePort#src_syn_retry_reset}
  */
  readonly srcSynRetryReset?: number;
  /**
  * Src SYN Retry RTO Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_syn_retry_rto_fail DdosDstZoneSrcPortRangeStatsTcpZonePort#src_syn_retry_rto_fail}
  */
  readonly srcSynRetryRtoFail?: number;
  /**
  * Src SYN Retry RTO Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_syn_retry_rto_pass DdosDstZoneSrcPortRangeStatsTcpZonePort#src_syn_retry_rto_pass}
  */
  readonly srcSynRetryRtoPass?: number;
  /**
  * Src SYN Retry RTO Progress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_syn_retry_rto_progress DdosDstZoneSrcPortRangeStatsTcpZonePort#src_syn_retry_rto_progress}
  */
  readonly srcSynRetryRtoProgress?: number;
  /**
  * Src SYN Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_syn_retry_timeout DdosDstZoneSrcPortRangeStatsTcpZonePort#src_syn_retry_timeout}
  */
  readonly srcSynRetryTimeout?: number;
  /**
  * Src TCP Auth Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_tcp_auth_rst DdosDstZoneSrcPortRangeStatsTcpZonePort#src_tcp_auth_rst}
  */
  readonly srcTcpAuthRst?: number;
  /**
  * Src TCP Unauth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_unauth_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#src_unauth_drop}
  */
  readonly srcUnauthDrop?: number;
  /**
  * Src TCP SrcPort Wellknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_well_known_port DdosDstZoneSrcPortRangeStatsTcpZonePort#src_well_known_port}
  */
  readonly srcWellKnownPort?: number;
  /**
  * Src Zero-Window Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_zero_window_excd DdosDstZoneSrcPortRangeStatsTcpZonePort#src_zero_window_excd}
  */
  readonly srcZeroWindowExcd?: number;
  /**
  * SrcZoneService Entry Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_zone_service_entry_aged DdosDstZoneSrcPortRangeStatsTcpZonePort#src_zone_service_entry_aged}
  */
  readonly srcZoneServiceEntryAged?: number;
  /**
  * SrcZoneService Entry Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_zone_service_entry_hit DdosDstZoneSrcPortRangeStatsTcpZonePort#src_zone_service_entry_hit}
  */
  readonly srcZoneServiceEntryHit?: number;
  /**
  * SrcZoneService Entry Learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#src_zone_service_entry_learned DdosDstZoneSrcPortRangeStatsTcpZonePort#src_zone_service_entry_learned}
  */
  readonly srcZoneServiceEntryLearned?: number;
  /**
  * SYN Auth Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#syn_auth_fail DdosDstZoneSrcPortRangeStatsTcpZonePort#syn_auth_fail}
  */
  readonly synAuthFail?: number;
  /**
  * SYN Auth Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#syn_auth_pass DdosDstZoneSrcPortRangeStatsTcpZonePort#syn_auth_pass}
  */
  readonly synAuthPass?: number;
  /**
  * SYN Auth RST-ACK Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#syn_auth_rst_ack_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#syn_auth_rst_ack_drop}
  */
  readonly synAuthRstAckDrop?: number;
  /**
  * SYN Cookie Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#syn_cookie_fail DdosDstZoneSrcPortRangeStatsTcpZonePort#syn_cookie_fail}
  */
  readonly synCookieFail?: number;
  /**
  * SYN Cookie Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#syn_cookie_sent DdosDstZoneSrcPortRangeStatsTcpZonePort#syn_cookie_sent}
  */
  readonly synCookieSent?: number;
  /**
  * SYN Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#syn_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#syn_drop}
  */
  readonly synDrop?: number;
  /**
  * SYN Retry Timeout Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#syn_retry_blacklist DdosDstZoneSrcPortRangeStatsTcpZonePort#syn_retry_blacklist}
  */
  readonly synRetryBlacklist?: number;
  /**
  * SYN Retry Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#syn_retry_failed DdosDstZoneSrcPortRangeStatsTcpZonePort#syn_retry_failed}
  */
  readonly synRetryFailed?: number;
  /**
  * SYN Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#syn_retry_gap_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#syn_retry_gap_drop}
  */
  readonly synRetryGapDrop?: number;
  /**
  * SYN Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#syn_retry_init DdosDstZoneSrcPortRangeStatsTcpZonePort#syn_retry_init}
  */
  readonly synRetryInit?: number;
  /**
  * SYN Retry Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#syn_retry_pass DdosDstZoneSrcPortRangeStatsTcpZonePort#syn_retry_pass}
  */
  readonly synRetryPass?: number;
  /**
  * SYN Retry Timeout Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#syn_retry_reset DdosDstZoneSrcPortRangeStatsTcpZonePort#syn_retry_reset}
  */
  readonly synRetryReset?: number;
  /**
  * SYN Retry RTO Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#syn_retry_rto_fail DdosDstZoneSrcPortRangeStatsTcpZonePort#syn_retry_rto_fail}
  */
  readonly synRetryRtoFail?: number;
  /**
  * SYN Retry RTO Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#syn_retry_rto_pass DdosDstZoneSrcPortRangeStatsTcpZonePort#syn_retry_rto_pass}
  */
  readonly synRetryRtoPass?: number;
  /**
  * SYN Retry RTO Progress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#syn_retry_rto_progress DdosDstZoneSrcPortRangeStatsTcpZonePort#syn_retry_rto_progress}
  */
  readonly synRetryRtoProgress?: number;
  /**
  * SYN Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#syn_retry_timeout DdosDstZoneSrcPortRangeStatsTcpZonePort#syn_retry_timeout}
  */
  readonly synRetryTimeout?: number;
  /**
  * SYN TFO Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#syn_tfo_rcv DdosDstZoneSrcPortRangeStatsTcpZonePort#syn_tfo_rcv}
  */
  readonly synTfoRcv?: number;
  /**
  * SYNACK Multiple Attempts Per IP Detected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#synack_multiple_attempts_per_ip_detected DdosDstZoneSrcPortRangeStatsTcpZonePort#synack_multiple_attempts_per_ip_detected}
  */
  readonly synackMultipleAttemptsPerIpDetected?: number;
  /**
  * SYNACK Reset Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#synack_reset_sent DdosDstZoneSrcPortRangeStatsTcpZonePort#synack_reset_sent}
  */
  readonly synackResetSent?: number;
  /**
  * TCP ACK with Data Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_ack_data_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_ack_data_drop}
  */
  readonly tcpAckDataDrop?: number;
  /**
  * TCP ACK with Data Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_ack_data_fwd DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_ack_data_fwd}
  */
  readonly tcpAckDataFwd?: number;
  /**
  * TCP ACK with Data Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_ack_data_rcvd DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_ack_data_rcvd}
  */
  readonly tcpAckDataRcvd?: number;
  /**
  * TCP ACK Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_ack_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_ack_drop}
  */
  readonly tcpAckDrop?: number;
  /**
  * TCP ACK Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_ack_fwd DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_ack_fwd}
  */
  readonly tcpAckFwd?: number;
  /**
  * TCP ACK Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_ack_rcvd DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_ack_rcvd}
  */
  readonly tcpAckRcvd?: number;
  /**
  * TCP Auth Dropped: ACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_auth_drop_ack DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_auth_drop_ack}
  */
  readonly tcpAuthDropAck?: number;
  /**
  * TCP Auth Dropped: ACK Fail Auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_auth_drop_ack_fail_auth DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_auth_drop_ack_fail_auth}
  */
  readonly tcpAuthDropAckFailAuth?: number;
  /**
  * TCP Auth Dropped: ACK Pass Auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_auth_drop_ack_pass_auth DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_auth_drop_ack_pass_auth}
  */
  readonly tcpAuthDropAckPassAuth?: number;
  /**
  * TCP Auth Dropped: ACK Retransmit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_auth_drop_ack_xmit DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_auth_drop_ack_xmit}
  */
  readonly tcpAuthDropAckXmit?: number;
  /**
  * TCP Auth Dropped: RST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_auth_drop_rst DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_auth_drop_rst}
  */
  readonly tcpAuthDropRst?: number;
  /**
  * TCP Auth Dropped: RST Fail Auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_auth_drop_rst_fail_auth DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_auth_drop_rst_fail_auth}
  */
  readonly tcpAuthDropRstFailAuth?: number;
  /**
  * TCP Auth Dropped: RST Pass Auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_auth_drop_rst_pass_auth DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_auth_drop_rst_pass_auth}
  */
  readonly tcpAuthDropRstPassAuth?: number;
  /**
  * TCP Auth Dropped: RST Retransmit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_auth_drop_rst_xmit DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_auth_drop_rst_xmit}
  */
  readonly tcpAuthDropRstXmit?: number;
  /**
  * TCP Auth Dropped: SYN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_auth_drop_syn DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_auth_drop_syn}
  */
  readonly tcpAuthDropSyn?: number;
  /**
  * TCP Auth Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_auth_rst DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_auth_rst}
  */
  readonly tcpAuthRst?: number;
  /**
  * TCP CWR Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_cwr_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_cwr_drop}
  */
  readonly tcpCwrDrop?: number;
  /**
  * TCP CWR Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_cwr_fwd DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_cwr_fwd}
  */
  readonly tcpCwrFwd?: number;
  /**
  * TCP CWR Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_cwr_rcvd DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_cwr_rcvd}
  */
  readonly tcpCwrRcvd?: number;
  /**
  * TCP ECE Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_ece_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_ece_drop}
  */
  readonly tcpEceDrop?: number;
  /**
  * TCP ECE Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_ece_fwd DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_ece_fwd}
  */
  readonly tcpEceFwd?: number;
  /**
  * TCP ECE Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_ece_rcvd DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_ece_rcvd}
  */
  readonly tcpEceRcvd?: number;
  /**
  * TCP Empty ACK Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_empty_ack_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_empty_ack_drop}
  */
  readonly tcpEmptyAckDrop?: number;
  /**
  * TCP Empty ACK Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_empty_ack_fwd DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_empty_ack_fwd}
  */
  readonly tcpEmptyAckFwd?: number;
  /**
  * TCP Empty ACK Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_empty_ack_rcvd DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_empty_ack_rcvd}
  */
  readonly tcpEmptyAckRcvd?: number;
  /**
  * TCP FIN ACK Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_fin_ack_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_fin_ack_drop}
  */
  readonly tcpFinAckDrop?: number;
  /**
  * TCP FIN ACK Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_fin_ack_fwd DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_fin_ack_fwd}
  */
  readonly tcpFinAckFwd?: number;
  /**
  * TCP FIN ACK Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_fin_ack_rcvd DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_fin_ack_rcvd}
  */
  readonly tcpFinAckRcvd?: number;
  /**
  * TCP FIN Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_fin_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_fin_drop}
  */
  readonly tcpFinDrop?: number;
  /**
  * TCP FIN Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_fin_fwd DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_fin_fwd}
  */
  readonly tcpFinFwd?: number;
  /**
  * TCP FIN PSH ACK Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_fin_psh_ack_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_fin_psh_ack_drop}
  */
  readonly tcpFinPshAckDrop?: number;
  /**
  * TCP FIN PSH ACK Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_fin_psh_ack_fwd DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_fin_psh_ack_fwd}
  */
  readonly tcpFinPshAckFwd?: number;
  /**
  * TCP FIN PSH ACK Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_fin_psh_ack_rcvd DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_fin_psh_ack_rcvd}
  */
  readonly tcpFinPshAckRcvd?: number;
  /**
  * TCP FIN Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_fin_rcvd DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_fin_rcvd}
  */
  readonly tcpFinRcvd?: number;
  /**
  * TCP PSH ACK Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_psh_ack_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_psh_ack_drop}
  */
  readonly tcpPshAckDrop?: number;
  /**
  * TCP PSH ACK Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_psh_ack_fwd DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_psh_ack_fwd}
  */
  readonly tcpPshAckFwd?: number;
  /**
  * TCP PSH ACK Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_psh_ack_rcvd DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_psh_ack_rcvd}
  */
  readonly tcpPshAckRcvd?: number;
  /**
  * TCP PSH Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_psh_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_psh_drop}
  */
  readonly tcpPshDrop?: number;
  /**
  * TCP PSH Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_psh_fwd DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_psh_fwd}
  */
  readonly tcpPshFwd?: number;
  /**
  * TCP PSH Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_psh_rcvd DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_psh_rcvd}
  */
  readonly tcpPshRcvd?: number;
  /**
  * TCP SYN Retransmit Exceeded Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_rexmit_syn_limit_bl DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_rexmit_syn_limit_bl}
  */
  readonly tcpRexmitSynLimitBl?: number;
  /**
  * TCP SYN Retransmit Exceeded Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_rexmit_syn_limit_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_rexmit_syn_limit_drop}
  */
  readonly tcpRexmitSynLimitDrop?: number;
  /**
  * TCP RST ACK Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_rst_ack_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_rst_ack_drop}
  */
  readonly tcpRstAckDrop?: number;
  /**
  * TCP RST ACK Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_rst_ack_fwd DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_rst_ack_fwd}
  */
  readonly tcpRstAckFwd?: number;
  /**
  * TCP RST ACK Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_rst_ack_rcvd DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_rst_ack_rcvd}
  */
  readonly tcpRstAckRcvd?: number;
  /**
  * TCP RST Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_rst_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_rst_drop}
  */
  readonly tcpRstDrop?: number;
  /**
  * TCP RST Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_rst_fwd DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_rst_fwd}
  */
  readonly tcpRstFwd?: number;
  /**
  * TCP RST Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_rst_rcvd DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_rst_rcvd}
  */
  readonly tcpRstRcvd?: number;
  /**
  * TCP SYN ACK Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_syn_ack_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_syn_ack_drop}
  */
  readonly tcpSynAckDrop?: number;
  /**
  * TCP SYN ACK Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_syn_ack_fwd DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_syn_ack_fwd}
  */
  readonly tcpSynAckFwd?: number;
  /**
  * TCP SYN ACK Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_syn_ack_rcvd DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_syn_ack_rcvd}
  */
  readonly tcpSynAckRcvd?: number;
  /**
  * SYN Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_syn_fwd DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_syn_fwd}
  */
  readonly tcpSynFwd?: number;
  /**
  * TCP Inbound SYN Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_syn_rcvd DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_syn_rcvd}
  */
  readonly tcpSynRcvd?: number;
  /**
  * TCP URG Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_urg_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_urg_drop}
  */
  readonly tcpUrgDrop?: number;
  /**
  * TCP URG Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_urg_fwd DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_urg_fwd}
  */
  readonly tcpUrgFwd?: number;
  /**
  * TCP URG Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_urg_rcvd DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_urg_rcvd}
  */
  readonly tcpUrgRcvd?: number;
  /**
  * TCP Unauth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#unauth_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#unauth_drop}
  */
  readonly unauthDrop?: number;
  /**
  * Session Reset for Unauthenticated Src
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#unauth_src_session_reset DdosDstZoneSrcPortRangeStatsTcpZonePort#unauth_src_session_reset}
  */
  readonly unauthSrcSessionReset?: number;
  /**
  * TCP SrcPort Wellknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#wellknown_sport_drop DdosDstZoneSrcPortRangeStatsTcpZonePort#wellknown_sport_drop}
  */
  readonly wellknownSportDrop?: number;
  /**
  * Zero-Window Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#zero_window_excd DdosDstZoneSrcPortRangeStatsTcpZonePort#zero_window_excd}
  */
  readonly zeroWindowExcd?: number;
}

export function ddosDstZoneSrcPortRangeStatsTcpZonePortStatsTcpZonePortToTerraform(struct?: DdosDstZoneSrcPortRangeStatsTcpZonePortStatsTcpZonePortOutputReference | DdosDstZoneSrcPortRangeStatsTcpZonePortStatsTcpZonePort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ack_auth_fail: cdktf.numberToTerraform(struct!.ackAuthFail),
    ack_retry_blacklist: cdktf.numberToTerraform(struct!.ackRetryBlacklist),
    ack_retry_gap_drop: cdktf.numberToTerraform(struct!.ackRetryGapDrop),
    ack_retry_init: cdktf.numberToTerraform(struct!.ackRetryInit),
    ack_retry_pass: cdktf.numberToTerraform(struct!.ackRetryPass),
    ack_retry_reset: cdktf.numberToTerraform(struct!.ackRetryReset),
    ack_retry_rto_fail: cdktf.numberToTerraform(struct!.ackRetryRtoFail),
    ack_retry_rto_pass: cdktf.numberToTerraform(struct!.ackRetryRtoPass),
    ack_retry_rto_progress: cdktf.numberToTerraform(struct!.ackRetryRtoProgress),
    ack_retry_timeout: cdktf.numberToTerraform(struct!.ackRetryTimeout),
    all_src_session_reset: cdktf.numberToTerraform(struct!.allSrcSessionReset),
    auth_drop: cdktf.numberToTerraform(struct!.authDrop),
    auth_resp: cdktf.numberToTerraform(struct!.authResp),
    bl: cdktf.numberToTerraform(struct!.bl),
    clear_session_upon_deescalation: cdktf.numberToTerraform(struct!.clearSessionUponDeescalation),
    conn_close: cdktf.numberToTerraform(struct!.connClose),
    conn_close_half_open: cdktf.numberToTerraform(struct!.connCloseHalfOpen),
    conn_close_w_fin: cdktf.numberToTerraform(struct!.connCloseWFin),
    conn_close_w_idle: cdktf.numberToTerraform(struct!.connCloseWIdle),
    conn_close_w_rst: cdktf.numberToTerraform(struct!.connCloseWRst),
    conn_create_from_ack: cdktf.numberToTerraform(struct!.connCreateFromAck),
    conn_create_from_syn: cdktf.numberToTerraform(struct!.connCreateFromSyn),
    conn_create_from_synack: cdktf.numberToTerraform(struct!.connCreateFromSynack),
    conn_ofo_rate_excd: cdktf.numberToTerraform(struct!.connOfoRateExcd),
    conn_prate_excd: cdktf.numberToTerraform(struct!.connPrateExcd),
    conn_rexmit_rate_excd: cdktf.numberToTerraform(struct!.connRexmitRateExcd),
    conn_zwindow_rate_excd: cdktf.numberToTerraform(struct!.connZwindowRateExcd),
    create_conn_non_syn_dropped: cdktf.numberToTerraform(struct!.createConnNonSynDropped),
    create_conn_non_syn_rst: cdktf.numberToTerraform(struct!.createConnNonSynRst),
    current_es_level: cdktf.numberToTerraform(struct!.currentEsLevel),
    dst_hw_drop: cdktf.numberToTerraform(struct!.dstHwDrop),
    dst_hw_drop_inserted: cdktf.numberToTerraform(struct!.dstHwDropInserted),
    dst_hw_drop_removed: cdktf.numberToTerraform(struct!.dstHwDropRemoved),
    dst_tcp_conn_half_open_timeout: cdktf.numberToTerraform(struct!.dstTcpConnHalfOpenTimeout),
    dst_tcp_conn_half_open_timeout_rst_sent: cdktf.numberToTerraform(struct!.dstTcpConnHalfOpenTimeoutRstSent),
    dst_tcp_sess_aged_rst_sent: cdktf.numberToTerraform(struct!.dstTcpSessAgedRstSent),
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
    hybrid_auth_auth_no_match: cdktf.numberToTerraform(struct!.hybridAuthAuthNoMatch),
    hybrid_auth_auth_no_match_ack_rcv: cdktf.numberToTerraform(struct!.hybridAuthAuthNoMatchAckRcv),
    hybrid_auth_auth_no_match_rst_rcv: cdktf.numberToTerraform(struct!.hybridAuthAuthNoMatchRstRcv),
    hybrid_auth_entry_aged_out: cdktf.numberToTerraform(struct!.hybridAuthEntryAgedOut),
    hybrid_auth_filter_full: cdktf.numberToTerraform(struct!.hybridAuthFilterFull),
    hybrid_auth_invalid_fail: cdktf.numberToTerraform(struct!.hybridAuthInvalidFail),
    hybrid_auth_invalid_pass: cdktf.numberToTerraform(struct!.hybridAuthInvalidPass),
    hybrid_auth_invalid_sa_sent: cdktf.numberToTerraform(struct!.hybridAuthInvalidSaSent),
    hybrid_auth_lookup_fail: cdktf.numberToTerraform(struct!.hybridAuthLookupFail),
    hybrid_auth_method_change: cdktf.numberToTerraform(struct!.hybridAuthMethodChange),
    hybrid_auth_unknown_fail: cdktf.numberToTerraform(struct!.hybridAuthUnknownFail),
    hybrid_auth_unknown_pass: cdktf.numberToTerraform(struct!.hybridAuthUnknownPass),
    hybrid_auth_valid_fail: cdktf.numberToTerraform(struct!.hybridAuthValidFail),
    hybrid_auth_valid_pass: cdktf.numberToTerraform(struct!.hybridAuthValidPass),
    hybrid_auth_valid_sa_sent: cdktf.numberToTerraform(struct!.hybridAuthValidSaSent),
    ip_filtering_bl: cdktf.numberToTerraform(struct!.ipFilteringBl),
    ip_filtering_drop: cdktf.numberToTerraform(struct!.ipFilteringDrop),
    no_policy_class_list_match: cdktf.numberToTerraform(struct!.noPolicyClassListMatch),
    no_route_drop: cdktf.numberToTerraform(struct!.noRouteDrop),
    out_of_seq_excd: cdktf.numberToTerraform(struct!.outOfSeqExcd),
    outbound_port_bytes: cdktf.numberToTerraform(struct!.outboundPortBytes),
    outbound_port_bytes_drop: cdktf.numberToTerraform(struct!.outboundPortBytesDrop),
    outbound_port_bytes_sent: cdktf.numberToTerraform(struct!.outboundPortBytesSent),
    outbound_port_drop: cdktf.numberToTerraform(struct!.outboundPortDrop),
    outbound_port_pkt_sent: cdktf.numberToTerraform(struct!.outboundPortPktSent),
    outbound_port_rcvd: cdktf.numberToTerraform(struct!.outboundPortRcvd),
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
    port_syn_rate_exceed: cdktf.numberToTerraform(struct!.portSynRateExceed),
    port_synack_rate_exceed: cdktf.numberToTerraform(struct!.portSynackRateExceed),
    prog_conn_exceed_bl: cdktf.numberToTerraform(struct!.progConnExceedBl),
    prog_conn_exceed_drop: cdktf.numberToTerraform(struct!.progConnExceedDrop),
    prog_conn_exceed_reset: cdktf.numberToTerraform(struct!.progConnExceedReset),
    prog_conn_rcvd_exceed: cdktf.numberToTerraform(struct!.progConnRcvdExceed),
    prog_conn_rcvd_sent_ratio_exceed: cdktf.numberToTerraform(struct!.progConnRcvdSentRatioExceed),
    prog_conn_samples: cdktf.numberToTerraform(struct!.progConnSamples),
    prog_conn_samples_processed: cdktf.numberToTerraform(struct!.progConnSamplesProcessed),
    prog_conn_sent_exceed: cdktf.numberToTerraform(struct!.progConnSentExceed),
    prog_conn_time_exceed: cdktf.numberToTerraform(struct!.progConnTimeExceed),
    prog_exceed_bl: cdktf.numberToTerraform(struct!.progExceedBl),
    prog_exceed_drop: cdktf.numberToTerraform(struct!.progExceedDrop),
    prog_exceed_reset: cdktf.numberToTerraform(struct!.progExceedReset),
    prog_first_req_time_exceed: cdktf.numberToTerraform(struct!.progFirstReqTimeExceed),
    prog_query_exceed: cdktf.numberToTerraform(struct!.progQueryExceed),
    prog_req_resp_time_exceed: cdktf.numberToTerraform(struct!.progReqRespTimeExceed),
    prog_req_samples: cdktf.numberToTerraform(struct!.progReqSamples),
    prog_req_samples_processed: cdktf.numberToTerraform(struct!.progReqSamplesProcessed),
    prog_request_len_exceed: cdktf.numberToTerraform(struct!.progRequestLenExceed),
    prog_resp_pkt_rate_exceed: cdktf.numberToTerraform(struct!.progRespPktRateExceed),
    prog_resp_req_time_exceed: cdktf.numberToTerraform(struct!.progRespReqTimeExceed),
    prog_response_len_exceed: cdktf.numberToTerraform(struct!.progResponseLenExceed),
    prog_think_exceed: cdktf.numberToTerraform(struct!.progThinkExceed),
    prog_win_exceed_bl: cdktf.numberToTerraform(struct!.progWinExceedBl),
    prog_win_exceed_drop: cdktf.numberToTerraform(struct!.progWinExceedDrop),
    prog_win_exceed_reset: cdktf.numberToTerraform(struct!.progWinExceedReset),
    prog_win_rcvd_exceed: cdktf.numberToTerraform(struct!.progWinRcvdExceed),
    prog_win_rcvd_sent_ratio_exceed: cdktf.numberToTerraform(struct!.progWinRcvdSentRatioExceed),
    prog_win_samples: cdktf.numberToTerraform(struct!.progWinSamples),
    prog_win_samples_processed: cdktf.numberToTerraform(struct!.progWinSamplesProcessed),
    prog_win_sent_exceed: cdktf.numberToTerraform(struct!.progWinSentExceed),
    retransmit_excd: cdktf.numberToTerraform(struct!.retransmitExcd),
    rst_cookie_fail: cdktf.numberToTerraform(struct!.rstCookieFail),
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
    small_window_excd: cdktf.numberToTerraform(struct!.smallWindowExcd),
    small_window_rcv: cdktf.numberToTerraform(struct!.smallWindowRcv),
    snat_fail: cdktf.numberToTerraform(struct!.snatFail),
    src_ack_auth_fail: cdktf.numberToTerraform(struct!.srcAckAuthFail),
    src_ack_retry_blacklist: cdktf.numberToTerraform(struct!.srcAckRetryBlacklist),
    src_ack_retry_gap_drop: cdktf.numberToTerraform(struct!.srcAckRetryGapDrop),
    src_ack_retry_init: cdktf.numberToTerraform(struct!.srcAckRetryInit),
    src_ack_retry_reset: cdktf.numberToTerraform(struct!.srcAckRetryReset),
    src_ack_retry_rto_fail: cdktf.numberToTerraform(struct!.srcAckRetryRtoFail),
    src_ack_retry_rto_pass: cdktf.numberToTerraform(struct!.srcAckRetryRtoPass),
    src_ack_retry_rto_progress: cdktf.numberToTerraform(struct!.srcAckRetryRtoProgress),
    src_ack_retry_timeout: cdktf.numberToTerraform(struct!.srcAckRetryTimeout),
    src_auth_drop: cdktf.numberToTerraform(struct!.srcAuthDrop),
    src_auth_drop_ack: cdktf.numberToTerraform(struct!.srcAuthDropAck),
    src_auth_drop_ack_fail_auth: cdktf.numberToTerraform(struct!.srcAuthDropAckFailAuth),
    src_auth_drop_ack_pass_auth: cdktf.numberToTerraform(struct!.srcAuthDropAckPassAuth),
    src_auth_drop_ack_xmit: cdktf.numberToTerraform(struct!.srcAuthDropAckXmit),
    src_auth_drop_rst: cdktf.numberToTerraform(struct!.srcAuthDropRst),
    src_auth_drop_rst_fail_auth: cdktf.numberToTerraform(struct!.srcAuthDropRstFailAuth),
    src_auth_drop_rst_pass_auth: cdktf.numberToTerraform(struct!.srcAuthDropRstPassAuth),
    src_auth_drop_rst_xmit: cdktf.numberToTerraform(struct!.srcAuthDropRstXmit),
    src_auth_drop_syn: cdktf.numberToTerraform(struct!.srcAuthDropSyn),
    src_conn_ofo_rate_excd: cdktf.numberToTerraform(struct!.srcConnOfoRateExcd),
    src_conn_pkt_rate_excd: cdktf.numberToTerraform(struct!.srcConnPktRateExcd),
    src_conn_rexmit_rate_excd: cdktf.numberToTerraform(struct!.srcConnRexmitRateExcd),
    src_conn_zwindow_rate_excd: cdktf.numberToTerraform(struct!.srcConnZwindowRateExcd),
    src_create_conn_non_syn_dropped: cdktf.numberToTerraform(struct!.srcCreateConnNonSynDropped),
    src_create_conn_non_syn_rst: cdktf.numberToTerraform(struct!.srcCreateConnNonSynRst),
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
    src_out_of_seq_excd: cdktf.numberToTerraform(struct!.srcOutOfSeqExcd),
    src_retransmit_excd: cdktf.numberToTerraform(struct!.srcRetransmitExcd),
    src_rst_cookie_fail: cdktf.numberToTerraform(struct!.srcRstCookieFail),
    src_small_window_excd: cdktf.numberToTerraform(struct!.srcSmallWindowExcd),
    src_syn_auth_fail: cdktf.numberToTerraform(struct!.srcSynAuthFail),
    src_syn_cookie_fail: cdktf.numberToTerraform(struct!.srcSynCookieFail),
    src_syn_cookie_sent: cdktf.numberToTerraform(struct!.srcSynCookieSent),
    src_syn_rate_exceed: cdktf.numberToTerraform(struct!.srcSynRateExceed),
    src_syn_retry_blacklist: cdktf.numberToTerraform(struct!.srcSynRetryBlacklist),
    src_syn_retry_failed: cdktf.numberToTerraform(struct!.srcSynRetryFailed),
    src_syn_retry_gap_drop: cdktf.numberToTerraform(struct!.srcSynRetryGapDrop),
    src_syn_retry_init: cdktf.numberToTerraform(struct!.srcSynRetryInit),
    src_syn_retry_reset: cdktf.numberToTerraform(struct!.srcSynRetryReset),
    src_syn_retry_rto_fail: cdktf.numberToTerraform(struct!.srcSynRetryRtoFail),
    src_syn_retry_rto_pass: cdktf.numberToTerraform(struct!.srcSynRetryRtoPass),
    src_syn_retry_rto_progress: cdktf.numberToTerraform(struct!.srcSynRetryRtoProgress),
    src_syn_retry_timeout: cdktf.numberToTerraform(struct!.srcSynRetryTimeout),
    src_tcp_auth_rst: cdktf.numberToTerraform(struct!.srcTcpAuthRst),
    src_unauth_drop: cdktf.numberToTerraform(struct!.srcUnauthDrop),
    src_well_known_port: cdktf.numberToTerraform(struct!.srcWellKnownPort),
    src_zero_window_excd: cdktf.numberToTerraform(struct!.srcZeroWindowExcd),
    src_zone_service_entry_aged: cdktf.numberToTerraform(struct!.srcZoneServiceEntryAged),
    src_zone_service_entry_hit: cdktf.numberToTerraform(struct!.srcZoneServiceEntryHit),
    src_zone_service_entry_learned: cdktf.numberToTerraform(struct!.srcZoneServiceEntryLearned),
    syn_auth_fail: cdktf.numberToTerraform(struct!.synAuthFail),
    syn_auth_pass: cdktf.numberToTerraform(struct!.synAuthPass),
    syn_auth_rst_ack_drop: cdktf.numberToTerraform(struct!.synAuthRstAckDrop),
    syn_cookie_fail: cdktf.numberToTerraform(struct!.synCookieFail),
    syn_cookie_sent: cdktf.numberToTerraform(struct!.synCookieSent),
    syn_drop: cdktf.numberToTerraform(struct!.synDrop),
    syn_retry_blacklist: cdktf.numberToTerraform(struct!.synRetryBlacklist),
    syn_retry_failed: cdktf.numberToTerraform(struct!.synRetryFailed),
    syn_retry_gap_drop: cdktf.numberToTerraform(struct!.synRetryGapDrop),
    syn_retry_init: cdktf.numberToTerraform(struct!.synRetryInit),
    syn_retry_pass: cdktf.numberToTerraform(struct!.synRetryPass),
    syn_retry_reset: cdktf.numberToTerraform(struct!.synRetryReset),
    syn_retry_rto_fail: cdktf.numberToTerraform(struct!.synRetryRtoFail),
    syn_retry_rto_pass: cdktf.numberToTerraform(struct!.synRetryRtoPass),
    syn_retry_rto_progress: cdktf.numberToTerraform(struct!.synRetryRtoProgress),
    syn_retry_timeout: cdktf.numberToTerraform(struct!.synRetryTimeout),
    syn_tfo_rcv: cdktf.numberToTerraform(struct!.synTfoRcv),
    synack_multiple_attempts_per_ip_detected: cdktf.numberToTerraform(struct!.synackMultipleAttemptsPerIpDetected),
    synack_reset_sent: cdktf.numberToTerraform(struct!.synackResetSent),
    tcp_ack_data_drop: cdktf.numberToTerraform(struct!.tcpAckDataDrop),
    tcp_ack_data_fwd: cdktf.numberToTerraform(struct!.tcpAckDataFwd),
    tcp_ack_data_rcvd: cdktf.numberToTerraform(struct!.tcpAckDataRcvd),
    tcp_ack_drop: cdktf.numberToTerraform(struct!.tcpAckDrop),
    tcp_ack_fwd: cdktf.numberToTerraform(struct!.tcpAckFwd),
    tcp_ack_rcvd: cdktf.numberToTerraform(struct!.tcpAckRcvd),
    tcp_auth_drop_ack: cdktf.numberToTerraform(struct!.tcpAuthDropAck),
    tcp_auth_drop_ack_fail_auth: cdktf.numberToTerraform(struct!.tcpAuthDropAckFailAuth),
    tcp_auth_drop_ack_pass_auth: cdktf.numberToTerraform(struct!.tcpAuthDropAckPassAuth),
    tcp_auth_drop_ack_xmit: cdktf.numberToTerraform(struct!.tcpAuthDropAckXmit),
    tcp_auth_drop_rst: cdktf.numberToTerraform(struct!.tcpAuthDropRst),
    tcp_auth_drop_rst_fail_auth: cdktf.numberToTerraform(struct!.tcpAuthDropRstFailAuth),
    tcp_auth_drop_rst_pass_auth: cdktf.numberToTerraform(struct!.tcpAuthDropRstPassAuth),
    tcp_auth_drop_rst_xmit: cdktf.numberToTerraform(struct!.tcpAuthDropRstXmit),
    tcp_auth_drop_syn: cdktf.numberToTerraform(struct!.tcpAuthDropSyn),
    tcp_auth_rst: cdktf.numberToTerraform(struct!.tcpAuthRst),
    tcp_cwr_drop: cdktf.numberToTerraform(struct!.tcpCwrDrop),
    tcp_cwr_fwd: cdktf.numberToTerraform(struct!.tcpCwrFwd),
    tcp_cwr_rcvd: cdktf.numberToTerraform(struct!.tcpCwrRcvd),
    tcp_ece_drop: cdktf.numberToTerraform(struct!.tcpEceDrop),
    tcp_ece_fwd: cdktf.numberToTerraform(struct!.tcpEceFwd),
    tcp_ece_rcvd: cdktf.numberToTerraform(struct!.tcpEceRcvd),
    tcp_empty_ack_drop: cdktf.numberToTerraform(struct!.tcpEmptyAckDrop),
    tcp_empty_ack_fwd: cdktf.numberToTerraform(struct!.tcpEmptyAckFwd),
    tcp_empty_ack_rcvd: cdktf.numberToTerraform(struct!.tcpEmptyAckRcvd),
    tcp_fin_ack_drop: cdktf.numberToTerraform(struct!.tcpFinAckDrop),
    tcp_fin_ack_fwd: cdktf.numberToTerraform(struct!.tcpFinAckFwd),
    tcp_fin_ack_rcvd: cdktf.numberToTerraform(struct!.tcpFinAckRcvd),
    tcp_fin_drop: cdktf.numberToTerraform(struct!.tcpFinDrop),
    tcp_fin_fwd: cdktf.numberToTerraform(struct!.tcpFinFwd),
    tcp_fin_psh_ack_drop: cdktf.numberToTerraform(struct!.tcpFinPshAckDrop),
    tcp_fin_psh_ack_fwd: cdktf.numberToTerraform(struct!.tcpFinPshAckFwd),
    tcp_fin_psh_ack_rcvd: cdktf.numberToTerraform(struct!.tcpFinPshAckRcvd),
    tcp_fin_rcvd: cdktf.numberToTerraform(struct!.tcpFinRcvd),
    tcp_psh_ack_drop: cdktf.numberToTerraform(struct!.tcpPshAckDrop),
    tcp_psh_ack_fwd: cdktf.numberToTerraform(struct!.tcpPshAckFwd),
    tcp_psh_ack_rcvd: cdktf.numberToTerraform(struct!.tcpPshAckRcvd),
    tcp_psh_drop: cdktf.numberToTerraform(struct!.tcpPshDrop),
    tcp_psh_fwd: cdktf.numberToTerraform(struct!.tcpPshFwd),
    tcp_psh_rcvd: cdktf.numberToTerraform(struct!.tcpPshRcvd),
    tcp_rexmit_syn_limit_bl: cdktf.numberToTerraform(struct!.tcpRexmitSynLimitBl),
    tcp_rexmit_syn_limit_drop: cdktf.numberToTerraform(struct!.tcpRexmitSynLimitDrop),
    tcp_rst_ack_drop: cdktf.numberToTerraform(struct!.tcpRstAckDrop),
    tcp_rst_ack_fwd: cdktf.numberToTerraform(struct!.tcpRstAckFwd),
    tcp_rst_ack_rcvd: cdktf.numberToTerraform(struct!.tcpRstAckRcvd),
    tcp_rst_drop: cdktf.numberToTerraform(struct!.tcpRstDrop),
    tcp_rst_fwd: cdktf.numberToTerraform(struct!.tcpRstFwd),
    tcp_rst_rcvd: cdktf.numberToTerraform(struct!.tcpRstRcvd),
    tcp_syn_ack_drop: cdktf.numberToTerraform(struct!.tcpSynAckDrop),
    tcp_syn_ack_fwd: cdktf.numberToTerraform(struct!.tcpSynAckFwd),
    tcp_syn_ack_rcvd: cdktf.numberToTerraform(struct!.tcpSynAckRcvd),
    tcp_syn_fwd: cdktf.numberToTerraform(struct!.tcpSynFwd),
    tcp_syn_rcvd: cdktf.numberToTerraform(struct!.tcpSynRcvd),
    tcp_urg_drop: cdktf.numberToTerraform(struct!.tcpUrgDrop),
    tcp_urg_fwd: cdktf.numberToTerraform(struct!.tcpUrgFwd),
    tcp_urg_rcvd: cdktf.numberToTerraform(struct!.tcpUrgRcvd),
    unauth_drop: cdktf.numberToTerraform(struct!.unauthDrop),
    unauth_src_session_reset: cdktf.numberToTerraform(struct!.unauthSrcSessionReset),
    wellknown_sport_drop: cdktf.numberToTerraform(struct!.wellknownSportDrop),
    zero_window_excd: cdktf.numberToTerraform(struct!.zeroWindowExcd),
  }
}


export function ddosDstZoneSrcPortRangeStatsTcpZonePortStatsTcpZonePortToHclTerraform(struct?: DdosDstZoneSrcPortRangeStatsTcpZonePortStatsTcpZonePortOutputReference | DdosDstZoneSrcPortRangeStatsTcpZonePortStatsTcpZonePort): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ack_auth_fail: {
      value: cdktf.numberToHclTerraform(struct!.ackAuthFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_retry_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.ackRetryBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_retry_gap_drop: {
      value: cdktf.numberToHclTerraform(struct!.ackRetryGapDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_retry_init: {
      value: cdktf.numberToHclTerraform(struct!.ackRetryInit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_retry_pass: {
      value: cdktf.numberToHclTerraform(struct!.ackRetryPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_retry_reset: {
      value: cdktf.numberToHclTerraform(struct!.ackRetryReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_retry_rto_fail: {
      value: cdktf.numberToHclTerraform(struct!.ackRetryRtoFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_retry_rto_pass: {
      value: cdktf.numberToHclTerraform(struct!.ackRetryRtoPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_retry_rto_progress: {
      value: cdktf.numberToHclTerraform(struct!.ackRetryRtoProgress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ack_retry_timeout: {
      value: cdktf.numberToHclTerraform(struct!.ackRetryTimeout),
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
    auth_drop: {
      value: cdktf.numberToHclTerraform(struct!.authDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_resp: {
      value: cdktf.numberToHclTerraform(struct!.authResp),
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
    conn_close: {
      value: cdktf.numberToHclTerraform(struct!.connClose),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_close_half_open: {
      value: cdktf.numberToHclTerraform(struct!.connCloseHalfOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_close_w_fin: {
      value: cdktf.numberToHclTerraform(struct!.connCloseWFin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_close_w_idle: {
      value: cdktf.numberToHclTerraform(struct!.connCloseWIdle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_close_w_rst: {
      value: cdktf.numberToHclTerraform(struct!.connCloseWRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_create_from_ack: {
      value: cdktf.numberToHclTerraform(struct!.connCreateFromAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_create_from_syn: {
      value: cdktf.numberToHclTerraform(struct!.connCreateFromSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_create_from_synack: {
      value: cdktf.numberToHclTerraform(struct!.connCreateFromSynack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_ofo_rate_excd: {
      value: cdktf.numberToHclTerraform(struct!.connOfoRateExcd),
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
    conn_rexmit_rate_excd: {
      value: cdktf.numberToHclTerraform(struct!.connRexmitRateExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_zwindow_rate_excd: {
      value: cdktf.numberToHclTerraform(struct!.connZwindowRateExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    create_conn_non_syn_dropped: {
      value: cdktf.numberToHclTerraform(struct!.createConnNonSynDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    create_conn_non_syn_rst: {
      value: cdktf.numberToHclTerraform(struct!.createConnNonSynRst),
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
    dst_tcp_conn_half_open_timeout: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpConnHalfOpenTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_conn_half_open_timeout_rst_sent: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpConnHalfOpenTimeoutRstSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_sess_aged_rst_sent: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpSessAgedRstSent),
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
    hybrid_auth_auth_no_match: {
      value: cdktf.numberToHclTerraform(struct!.hybridAuthAuthNoMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hybrid_auth_auth_no_match_ack_rcv: {
      value: cdktf.numberToHclTerraform(struct!.hybridAuthAuthNoMatchAckRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hybrid_auth_auth_no_match_rst_rcv: {
      value: cdktf.numberToHclTerraform(struct!.hybridAuthAuthNoMatchRstRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hybrid_auth_entry_aged_out: {
      value: cdktf.numberToHclTerraform(struct!.hybridAuthEntryAgedOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hybrid_auth_filter_full: {
      value: cdktf.numberToHclTerraform(struct!.hybridAuthFilterFull),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hybrid_auth_invalid_fail: {
      value: cdktf.numberToHclTerraform(struct!.hybridAuthInvalidFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hybrid_auth_invalid_pass: {
      value: cdktf.numberToHclTerraform(struct!.hybridAuthInvalidPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hybrid_auth_invalid_sa_sent: {
      value: cdktf.numberToHclTerraform(struct!.hybridAuthInvalidSaSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hybrid_auth_lookup_fail: {
      value: cdktf.numberToHclTerraform(struct!.hybridAuthLookupFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hybrid_auth_method_change: {
      value: cdktf.numberToHclTerraform(struct!.hybridAuthMethodChange),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hybrid_auth_unknown_fail: {
      value: cdktf.numberToHclTerraform(struct!.hybridAuthUnknownFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hybrid_auth_unknown_pass: {
      value: cdktf.numberToHclTerraform(struct!.hybridAuthUnknownPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hybrid_auth_valid_fail: {
      value: cdktf.numberToHclTerraform(struct!.hybridAuthValidFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hybrid_auth_valid_pass: {
      value: cdktf.numberToHclTerraform(struct!.hybridAuthValidPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hybrid_auth_valid_sa_sent: {
      value: cdktf.numberToHclTerraform(struct!.hybridAuthValidSaSent),
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
    out_of_seq_excd: {
      value: cdktf.numberToHclTerraform(struct!.outOfSeqExcd),
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
    port_syn_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.portSynRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_synack_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.portSynackRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_conn_exceed_bl: {
      value: cdktf.numberToHclTerraform(struct!.progConnExceedBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_conn_exceed_drop: {
      value: cdktf.numberToHclTerraform(struct!.progConnExceedDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_conn_exceed_reset: {
      value: cdktf.numberToHclTerraform(struct!.progConnExceedReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_conn_rcvd_exceed: {
      value: cdktf.numberToHclTerraform(struct!.progConnRcvdExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_conn_rcvd_sent_ratio_exceed: {
      value: cdktf.numberToHclTerraform(struct!.progConnRcvdSentRatioExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_conn_samples: {
      value: cdktf.numberToHclTerraform(struct!.progConnSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_conn_samples_processed: {
      value: cdktf.numberToHclTerraform(struct!.progConnSamplesProcessed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_conn_sent_exceed: {
      value: cdktf.numberToHclTerraform(struct!.progConnSentExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_conn_time_exceed: {
      value: cdktf.numberToHclTerraform(struct!.progConnTimeExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_exceed_bl: {
      value: cdktf.numberToHclTerraform(struct!.progExceedBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_exceed_drop: {
      value: cdktf.numberToHclTerraform(struct!.progExceedDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_exceed_reset: {
      value: cdktf.numberToHclTerraform(struct!.progExceedReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_first_req_time_exceed: {
      value: cdktf.numberToHclTerraform(struct!.progFirstReqTimeExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_query_exceed: {
      value: cdktf.numberToHclTerraform(struct!.progQueryExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_req_resp_time_exceed: {
      value: cdktf.numberToHclTerraform(struct!.progReqRespTimeExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_req_samples: {
      value: cdktf.numberToHclTerraform(struct!.progReqSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_req_samples_processed: {
      value: cdktf.numberToHclTerraform(struct!.progReqSamplesProcessed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_request_len_exceed: {
      value: cdktf.numberToHclTerraform(struct!.progRequestLenExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_resp_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.progRespPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_resp_req_time_exceed: {
      value: cdktf.numberToHclTerraform(struct!.progRespReqTimeExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_response_len_exceed: {
      value: cdktf.numberToHclTerraform(struct!.progResponseLenExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_think_exceed: {
      value: cdktf.numberToHclTerraform(struct!.progThinkExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_win_exceed_bl: {
      value: cdktf.numberToHclTerraform(struct!.progWinExceedBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_win_exceed_drop: {
      value: cdktf.numberToHclTerraform(struct!.progWinExceedDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_win_exceed_reset: {
      value: cdktf.numberToHclTerraform(struct!.progWinExceedReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_win_rcvd_exceed: {
      value: cdktf.numberToHclTerraform(struct!.progWinRcvdExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_win_rcvd_sent_ratio_exceed: {
      value: cdktf.numberToHclTerraform(struct!.progWinRcvdSentRatioExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_win_samples: {
      value: cdktf.numberToHclTerraform(struct!.progWinSamples),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_win_samples_processed: {
      value: cdktf.numberToHclTerraform(struct!.progWinSamplesProcessed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prog_win_sent_exceed: {
      value: cdktf.numberToHclTerraform(struct!.progWinSentExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retransmit_excd: {
      value: cdktf.numberToHclTerraform(struct!.retransmitExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rst_cookie_fail: {
      value: cdktf.numberToHclTerraform(struct!.rstCookieFail),
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
    small_window_excd: {
      value: cdktf.numberToHclTerraform(struct!.smallWindowExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    small_window_rcv: {
      value: cdktf.numberToHclTerraform(struct!.smallWindowRcv),
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
    src_ack_auth_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcAckAuthFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ack_retry_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.srcAckRetryBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ack_retry_gap_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcAckRetryGapDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ack_retry_init: {
      value: cdktf.numberToHclTerraform(struct!.srcAckRetryInit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ack_retry_reset: {
      value: cdktf.numberToHclTerraform(struct!.srcAckRetryReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ack_retry_rto_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcAckRetryRtoFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ack_retry_rto_pass: {
      value: cdktf.numberToHclTerraform(struct!.srcAckRetryRtoPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ack_retry_rto_progress: {
      value: cdktf.numberToHclTerraform(struct!.srcAckRetryRtoProgress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ack_retry_timeout: {
      value: cdktf.numberToHclTerraform(struct!.srcAckRetryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_auth_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcAuthDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_auth_drop_ack: {
      value: cdktf.numberToHclTerraform(struct!.srcAuthDropAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_auth_drop_ack_fail_auth: {
      value: cdktf.numberToHclTerraform(struct!.srcAuthDropAckFailAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_auth_drop_ack_pass_auth: {
      value: cdktf.numberToHclTerraform(struct!.srcAuthDropAckPassAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_auth_drop_ack_xmit: {
      value: cdktf.numberToHclTerraform(struct!.srcAuthDropAckXmit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_auth_drop_rst: {
      value: cdktf.numberToHclTerraform(struct!.srcAuthDropRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_auth_drop_rst_fail_auth: {
      value: cdktf.numberToHclTerraform(struct!.srcAuthDropRstFailAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_auth_drop_rst_pass_auth: {
      value: cdktf.numberToHclTerraform(struct!.srcAuthDropRstPassAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_auth_drop_rst_xmit: {
      value: cdktf.numberToHclTerraform(struct!.srcAuthDropRstXmit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_auth_drop_syn: {
      value: cdktf.numberToHclTerraform(struct!.srcAuthDropSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_conn_ofo_rate_excd: {
      value: cdktf.numberToHclTerraform(struct!.srcConnOfoRateExcd),
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
    src_conn_rexmit_rate_excd: {
      value: cdktf.numberToHclTerraform(struct!.srcConnRexmitRateExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_conn_zwindow_rate_excd: {
      value: cdktf.numberToHclTerraform(struct!.srcConnZwindowRateExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_create_conn_non_syn_dropped: {
      value: cdktf.numberToHclTerraform(struct!.srcCreateConnNonSynDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_create_conn_non_syn_rst: {
      value: cdktf.numberToHclTerraform(struct!.srcCreateConnNonSynRst),
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
    src_out_of_seq_excd: {
      value: cdktf.numberToHclTerraform(struct!.srcOutOfSeqExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_retransmit_excd: {
      value: cdktf.numberToHclTerraform(struct!.srcRetransmitExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_rst_cookie_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcRstCookieFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_small_window_excd: {
      value: cdktf.numberToHclTerraform(struct!.srcSmallWindowExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_syn_auth_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcSynAuthFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_syn_cookie_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcSynCookieFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_syn_cookie_sent: {
      value: cdktf.numberToHclTerraform(struct!.srcSynCookieSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_syn_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.srcSynRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_syn_retry_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.srcSynRetryBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_syn_retry_failed: {
      value: cdktf.numberToHclTerraform(struct!.srcSynRetryFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_syn_retry_gap_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcSynRetryGapDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_syn_retry_init: {
      value: cdktf.numberToHclTerraform(struct!.srcSynRetryInit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_syn_retry_reset: {
      value: cdktf.numberToHclTerraform(struct!.srcSynRetryReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_syn_retry_rto_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcSynRetryRtoFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_syn_retry_rto_pass: {
      value: cdktf.numberToHclTerraform(struct!.srcSynRetryRtoPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_syn_retry_rto_progress: {
      value: cdktf.numberToHclTerraform(struct!.srcSynRetryRtoProgress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_syn_retry_timeout: {
      value: cdktf.numberToHclTerraform(struct!.srcSynRetryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_auth_rst: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpAuthRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_unauth_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcUnauthDrop),
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
    src_zero_window_excd: {
      value: cdktf.numberToHclTerraform(struct!.srcZeroWindowExcd),
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
    syn_auth_fail: {
      value: cdktf.numberToHclTerraform(struct!.synAuthFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_auth_pass: {
      value: cdktf.numberToHclTerraform(struct!.synAuthPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_auth_rst_ack_drop: {
      value: cdktf.numberToHclTerraform(struct!.synAuthRstAckDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_cookie_fail: {
      value: cdktf.numberToHclTerraform(struct!.synCookieFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_cookie_sent: {
      value: cdktf.numberToHclTerraform(struct!.synCookieSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_drop: {
      value: cdktf.numberToHclTerraform(struct!.synDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_retry_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.synRetryBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_retry_failed: {
      value: cdktf.numberToHclTerraform(struct!.synRetryFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_retry_gap_drop: {
      value: cdktf.numberToHclTerraform(struct!.synRetryGapDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_retry_init: {
      value: cdktf.numberToHclTerraform(struct!.synRetryInit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_retry_pass: {
      value: cdktf.numberToHclTerraform(struct!.synRetryPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_retry_reset: {
      value: cdktf.numberToHclTerraform(struct!.synRetryReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_retry_rto_fail: {
      value: cdktf.numberToHclTerraform(struct!.synRetryRtoFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_retry_rto_pass: {
      value: cdktf.numberToHclTerraform(struct!.synRetryRtoPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_retry_rto_progress: {
      value: cdktf.numberToHclTerraform(struct!.synRetryRtoProgress),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_retry_timeout: {
      value: cdktf.numberToHclTerraform(struct!.synRetryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_tfo_rcv: {
      value: cdktf.numberToHclTerraform(struct!.synTfoRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    synack_multiple_attempts_per_ip_detected: {
      value: cdktf.numberToHclTerraform(struct!.synackMultipleAttemptsPerIpDetected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    synack_reset_sent: {
      value: cdktf.numberToHclTerraform(struct!.synackResetSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_ack_data_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpAckDataDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_ack_data_fwd: {
      value: cdktf.numberToHclTerraform(struct!.tcpAckDataFwd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_ack_data_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.tcpAckDataRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_ack_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpAckDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_ack_fwd: {
      value: cdktf.numberToHclTerraform(struct!.tcpAckFwd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_ack_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.tcpAckRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_auth_drop_ack: {
      value: cdktf.numberToHclTerraform(struct!.tcpAuthDropAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_auth_drop_ack_fail_auth: {
      value: cdktf.numberToHclTerraform(struct!.tcpAuthDropAckFailAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_auth_drop_ack_pass_auth: {
      value: cdktf.numberToHclTerraform(struct!.tcpAuthDropAckPassAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_auth_drop_ack_xmit: {
      value: cdktf.numberToHclTerraform(struct!.tcpAuthDropAckXmit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_auth_drop_rst: {
      value: cdktf.numberToHclTerraform(struct!.tcpAuthDropRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_auth_drop_rst_fail_auth: {
      value: cdktf.numberToHclTerraform(struct!.tcpAuthDropRstFailAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_auth_drop_rst_pass_auth: {
      value: cdktf.numberToHclTerraform(struct!.tcpAuthDropRstPassAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_auth_drop_rst_xmit: {
      value: cdktf.numberToHclTerraform(struct!.tcpAuthDropRstXmit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_auth_drop_syn: {
      value: cdktf.numberToHclTerraform(struct!.tcpAuthDropSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_auth_rst: {
      value: cdktf.numberToHclTerraform(struct!.tcpAuthRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_cwr_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpCwrDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_cwr_fwd: {
      value: cdktf.numberToHclTerraform(struct!.tcpCwrFwd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_cwr_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.tcpCwrRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_ece_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpEceDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_ece_fwd: {
      value: cdktf.numberToHclTerraform(struct!.tcpEceFwd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_ece_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.tcpEceRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_empty_ack_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpEmptyAckDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_empty_ack_fwd: {
      value: cdktf.numberToHclTerraform(struct!.tcpEmptyAckFwd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_empty_ack_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.tcpEmptyAckRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_fin_ack_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpFinAckDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_fin_ack_fwd: {
      value: cdktf.numberToHclTerraform(struct!.tcpFinAckFwd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_fin_ack_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.tcpFinAckRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_fin_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpFinDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_fin_fwd: {
      value: cdktf.numberToHclTerraform(struct!.tcpFinFwd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_fin_psh_ack_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpFinPshAckDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_fin_psh_ack_fwd: {
      value: cdktf.numberToHclTerraform(struct!.tcpFinPshAckFwd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_fin_psh_ack_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.tcpFinPshAckRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_fin_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.tcpFinRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_psh_ack_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpPshAckDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_psh_ack_fwd: {
      value: cdktf.numberToHclTerraform(struct!.tcpPshAckFwd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_psh_ack_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.tcpPshAckRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_psh_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpPshDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_psh_fwd: {
      value: cdktf.numberToHclTerraform(struct!.tcpPshFwd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_psh_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.tcpPshRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_rexmit_syn_limit_bl: {
      value: cdktf.numberToHclTerraform(struct!.tcpRexmitSynLimitBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_rexmit_syn_limit_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpRexmitSynLimitDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_rst_ack_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpRstAckDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_rst_ack_fwd: {
      value: cdktf.numberToHclTerraform(struct!.tcpRstAckFwd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_rst_ack_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.tcpRstAckRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_rst_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpRstDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_rst_fwd: {
      value: cdktf.numberToHclTerraform(struct!.tcpRstFwd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_rst_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.tcpRstRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syn_ack_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpSynAckDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syn_ack_fwd: {
      value: cdktf.numberToHclTerraform(struct!.tcpSynAckFwd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syn_ack_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.tcpSynAckRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syn_fwd: {
      value: cdktf.numberToHclTerraform(struct!.tcpSynFwd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syn_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.tcpSynRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_urg_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpUrgDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_urg_fwd: {
      value: cdktf.numberToHclTerraform(struct!.tcpUrgFwd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_urg_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.tcpUrgRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unauth_drop: {
      value: cdktf.numberToHclTerraform(struct!.unauthDrop),
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
    zero_window_excd: {
      value: cdktf.numberToHclTerraform(struct!.zeroWindowExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneSrcPortRangeStatsTcpZonePortStatsTcpZonePortOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneSrcPortRangeStatsTcpZonePortStatsTcpZonePort | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ackAuthFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackAuthFail = this._ackAuthFail;
    }
    if (this._ackRetryBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackRetryBlacklist = this._ackRetryBlacklist;
    }
    if (this._ackRetryGapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackRetryGapDrop = this._ackRetryGapDrop;
    }
    if (this._ackRetryInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackRetryInit = this._ackRetryInit;
    }
    if (this._ackRetryPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackRetryPass = this._ackRetryPass;
    }
    if (this._ackRetryReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackRetryReset = this._ackRetryReset;
    }
    if (this._ackRetryRtoFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackRetryRtoFail = this._ackRetryRtoFail;
    }
    if (this._ackRetryRtoPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackRetryRtoPass = this._ackRetryRtoPass;
    }
    if (this._ackRetryRtoProgress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackRetryRtoProgress = this._ackRetryRtoProgress;
    }
    if (this._ackRetryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.ackRetryTimeout = this._ackRetryTimeout;
    }
    if (this._allSrcSessionReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.allSrcSessionReset = this._allSrcSessionReset;
    }
    if (this._authDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.authDrop = this._authDrop;
    }
    if (this._authResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.authResp = this._authResp;
    }
    if (this._bl !== undefined) {
      hasAnyValues = true;
      internalValueResult.bl = this._bl;
    }
    if (this._clearSessionUponDeescalation !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearSessionUponDeescalation = this._clearSessionUponDeescalation;
    }
    if (this._connClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.connClose = this._connClose;
    }
    if (this._connCloseHalfOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.connCloseHalfOpen = this._connCloseHalfOpen;
    }
    if (this._connCloseWFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.connCloseWFin = this._connCloseWFin;
    }
    if (this._connCloseWIdle !== undefined) {
      hasAnyValues = true;
      internalValueResult.connCloseWIdle = this._connCloseWIdle;
    }
    if (this._connCloseWRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.connCloseWRst = this._connCloseWRst;
    }
    if (this._connCreateFromAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.connCreateFromAck = this._connCreateFromAck;
    }
    if (this._connCreateFromSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.connCreateFromSyn = this._connCreateFromSyn;
    }
    if (this._connCreateFromSynack !== undefined) {
      hasAnyValues = true;
      internalValueResult.connCreateFromSynack = this._connCreateFromSynack;
    }
    if (this._connOfoRateExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.connOfoRateExcd = this._connOfoRateExcd;
    }
    if (this._connPrateExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.connPrateExcd = this._connPrateExcd;
    }
    if (this._connRexmitRateExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.connRexmitRateExcd = this._connRexmitRateExcd;
    }
    if (this._connZwindowRateExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.connZwindowRateExcd = this._connZwindowRateExcd;
    }
    if (this._createConnNonSynDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.createConnNonSynDropped = this._createConnNonSynDropped;
    }
    if (this._createConnNonSynRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.createConnNonSynRst = this._createConnNonSynRst;
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
    if (this._dstTcpConnHalfOpenTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpConnHalfOpenTimeout = this._dstTcpConnHalfOpenTimeout;
    }
    if (this._dstTcpConnHalfOpenTimeoutRstSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpConnHalfOpenTimeoutRstSent = this._dstTcpConnHalfOpenTimeoutRstSent;
    }
    if (this._dstTcpSessAgedRstSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpSessAgedRstSent = this._dstTcpSessAgedRstSent;
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
    if (this._hybridAuthAuthNoMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridAuthAuthNoMatch = this._hybridAuthAuthNoMatch;
    }
    if (this._hybridAuthAuthNoMatchAckRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridAuthAuthNoMatchAckRcv = this._hybridAuthAuthNoMatchAckRcv;
    }
    if (this._hybridAuthAuthNoMatchRstRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridAuthAuthNoMatchRstRcv = this._hybridAuthAuthNoMatchRstRcv;
    }
    if (this._hybridAuthEntryAgedOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridAuthEntryAgedOut = this._hybridAuthEntryAgedOut;
    }
    if (this._hybridAuthFilterFull !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridAuthFilterFull = this._hybridAuthFilterFull;
    }
    if (this._hybridAuthInvalidFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridAuthInvalidFail = this._hybridAuthInvalidFail;
    }
    if (this._hybridAuthInvalidPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridAuthInvalidPass = this._hybridAuthInvalidPass;
    }
    if (this._hybridAuthInvalidSaSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridAuthInvalidSaSent = this._hybridAuthInvalidSaSent;
    }
    if (this._hybridAuthLookupFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridAuthLookupFail = this._hybridAuthLookupFail;
    }
    if (this._hybridAuthMethodChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridAuthMethodChange = this._hybridAuthMethodChange;
    }
    if (this._hybridAuthUnknownFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridAuthUnknownFail = this._hybridAuthUnknownFail;
    }
    if (this._hybridAuthUnknownPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridAuthUnknownPass = this._hybridAuthUnknownPass;
    }
    if (this._hybridAuthValidFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridAuthValidFail = this._hybridAuthValidFail;
    }
    if (this._hybridAuthValidPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridAuthValidPass = this._hybridAuthValidPass;
    }
    if (this._hybridAuthValidSaSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.hybridAuthValidSaSent = this._hybridAuthValidSaSent;
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
    if (this._outOfSeqExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.outOfSeqExcd = this._outOfSeqExcd;
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
    if (this._portSynRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSynRateExceed = this._portSynRateExceed;
    }
    if (this._portSynackRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSynackRateExceed = this._portSynackRateExceed;
    }
    if (this._progConnExceedBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.progConnExceedBl = this._progConnExceedBl;
    }
    if (this._progConnExceedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.progConnExceedDrop = this._progConnExceedDrop;
    }
    if (this._progConnExceedReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.progConnExceedReset = this._progConnExceedReset;
    }
    if (this._progConnRcvdExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progConnRcvdExceed = this._progConnRcvdExceed;
    }
    if (this._progConnRcvdSentRatioExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progConnRcvdSentRatioExceed = this._progConnRcvdSentRatioExceed;
    }
    if (this._progConnSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.progConnSamples = this._progConnSamples;
    }
    if (this._progConnSamplesProcessed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progConnSamplesProcessed = this._progConnSamplesProcessed;
    }
    if (this._progConnSentExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progConnSentExceed = this._progConnSentExceed;
    }
    if (this._progConnTimeExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progConnTimeExceed = this._progConnTimeExceed;
    }
    if (this._progExceedBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.progExceedBl = this._progExceedBl;
    }
    if (this._progExceedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.progExceedDrop = this._progExceedDrop;
    }
    if (this._progExceedReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.progExceedReset = this._progExceedReset;
    }
    if (this._progFirstReqTimeExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progFirstReqTimeExceed = this._progFirstReqTimeExceed;
    }
    if (this._progQueryExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progQueryExceed = this._progQueryExceed;
    }
    if (this._progReqRespTimeExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progReqRespTimeExceed = this._progReqRespTimeExceed;
    }
    if (this._progReqSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.progReqSamples = this._progReqSamples;
    }
    if (this._progReqSamplesProcessed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progReqSamplesProcessed = this._progReqSamplesProcessed;
    }
    if (this._progRequestLenExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progRequestLenExceed = this._progRequestLenExceed;
    }
    if (this._progRespPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progRespPktRateExceed = this._progRespPktRateExceed;
    }
    if (this._progRespReqTimeExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progRespReqTimeExceed = this._progRespReqTimeExceed;
    }
    if (this._progResponseLenExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progResponseLenExceed = this._progResponseLenExceed;
    }
    if (this._progThinkExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progThinkExceed = this._progThinkExceed;
    }
    if (this._progWinExceedBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.progWinExceedBl = this._progWinExceedBl;
    }
    if (this._progWinExceedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.progWinExceedDrop = this._progWinExceedDrop;
    }
    if (this._progWinExceedReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.progWinExceedReset = this._progWinExceedReset;
    }
    if (this._progWinRcvdExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progWinRcvdExceed = this._progWinRcvdExceed;
    }
    if (this._progWinRcvdSentRatioExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progWinRcvdSentRatioExceed = this._progWinRcvdSentRatioExceed;
    }
    if (this._progWinSamples !== undefined) {
      hasAnyValues = true;
      internalValueResult.progWinSamples = this._progWinSamples;
    }
    if (this._progWinSamplesProcessed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progWinSamplesProcessed = this._progWinSamplesProcessed;
    }
    if (this._progWinSentExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progWinSentExceed = this._progWinSentExceed;
    }
    if (this._retransmitExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransmitExcd = this._retransmitExcd;
    }
    if (this._rstCookieFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.rstCookieFail = this._rstCookieFail;
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
    if (this._smallWindowExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.smallWindowExcd = this._smallWindowExcd;
    }
    if (this._smallWindowRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.smallWindowRcv = this._smallWindowRcv;
    }
    if (this._snatFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatFail = this._snatFail;
    }
    if (this._srcAckAuthFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAckAuthFail = this._srcAckAuthFail;
    }
    if (this._srcAckRetryBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAckRetryBlacklist = this._srcAckRetryBlacklist;
    }
    if (this._srcAckRetryGapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAckRetryGapDrop = this._srcAckRetryGapDrop;
    }
    if (this._srcAckRetryInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAckRetryInit = this._srcAckRetryInit;
    }
    if (this._srcAckRetryReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAckRetryReset = this._srcAckRetryReset;
    }
    if (this._srcAckRetryRtoFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAckRetryRtoFail = this._srcAckRetryRtoFail;
    }
    if (this._srcAckRetryRtoPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAckRetryRtoPass = this._srcAckRetryRtoPass;
    }
    if (this._srcAckRetryRtoProgress !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAckRetryRtoProgress = this._srcAckRetryRtoProgress;
    }
    if (this._srcAckRetryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAckRetryTimeout = this._srcAckRetryTimeout;
    }
    if (this._srcAuthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAuthDrop = this._srcAuthDrop;
    }
    if (this._srcAuthDropAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAuthDropAck = this._srcAuthDropAck;
    }
    if (this._srcAuthDropAckFailAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAuthDropAckFailAuth = this._srcAuthDropAckFailAuth;
    }
    if (this._srcAuthDropAckPassAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAuthDropAckPassAuth = this._srcAuthDropAckPassAuth;
    }
    if (this._srcAuthDropAckXmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAuthDropAckXmit = this._srcAuthDropAckXmit;
    }
    if (this._srcAuthDropRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAuthDropRst = this._srcAuthDropRst;
    }
    if (this._srcAuthDropRstFailAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAuthDropRstFailAuth = this._srcAuthDropRstFailAuth;
    }
    if (this._srcAuthDropRstPassAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAuthDropRstPassAuth = this._srcAuthDropRstPassAuth;
    }
    if (this._srcAuthDropRstXmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAuthDropRstXmit = this._srcAuthDropRstXmit;
    }
    if (this._srcAuthDropSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAuthDropSyn = this._srcAuthDropSyn;
    }
    if (this._srcConnOfoRateExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcConnOfoRateExcd = this._srcConnOfoRateExcd;
    }
    if (this._srcConnPktRateExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcConnPktRateExcd = this._srcConnPktRateExcd;
    }
    if (this._srcConnRexmitRateExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcConnRexmitRateExcd = this._srcConnRexmitRateExcd;
    }
    if (this._srcConnZwindowRateExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcConnZwindowRateExcd = this._srcConnZwindowRateExcd;
    }
    if (this._srcCreateConnNonSynDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcCreateConnNonSynDropped = this._srcCreateConnNonSynDropped;
    }
    if (this._srcCreateConnNonSynRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcCreateConnNonSynRst = this._srcCreateConnNonSynRst;
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
    if (this._srcOutOfSeqExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcOutOfSeqExcd = this._srcOutOfSeqExcd;
    }
    if (this._srcRetransmitExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRetransmitExcd = this._srcRetransmitExcd;
    }
    if (this._srcRstCookieFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRstCookieFail = this._srcRstCookieFail;
    }
    if (this._srcSmallWindowExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSmallWindowExcd = this._srcSmallWindowExcd;
    }
    if (this._srcSynAuthFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynAuthFail = this._srcSynAuthFail;
    }
    if (this._srcSynCookieFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynCookieFail = this._srcSynCookieFail;
    }
    if (this._srcSynCookieSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynCookieSent = this._srcSynCookieSent;
    }
    if (this._srcSynRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynRateExceed = this._srcSynRateExceed;
    }
    if (this._srcSynRetryBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynRetryBlacklist = this._srcSynRetryBlacklist;
    }
    if (this._srcSynRetryFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynRetryFailed = this._srcSynRetryFailed;
    }
    if (this._srcSynRetryGapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynRetryGapDrop = this._srcSynRetryGapDrop;
    }
    if (this._srcSynRetryInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynRetryInit = this._srcSynRetryInit;
    }
    if (this._srcSynRetryReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynRetryReset = this._srcSynRetryReset;
    }
    if (this._srcSynRetryRtoFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynRetryRtoFail = this._srcSynRetryRtoFail;
    }
    if (this._srcSynRetryRtoPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynRetryRtoPass = this._srcSynRetryRtoPass;
    }
    if (this._srcSynRetryRtoProgress !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynRetryRtoProgress = this._srcSynRetryRtoProgress;
    }
    if (this._srcSynRetryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcSynRetryTimeout = this._srcSynRetryTimeout;
    }
    if (this._srcTcpAuthRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpAuthRst = this._srcTcpAuthRst;
    }
    if (this._srcUnauthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUnauthDrop = this._srcUnauthDrop;
    }
    if (this._srcWellKnownPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcWellKnownPort = this._srcWellKnownPort;
    }
    if (this._srcZeroWindowExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcZeroWindowExcd = this._srcZeroWindowExcd;
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
    if (this._synAuthFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.synAuthFail = this._synAuthFail;
    }
    if (this._synAuthPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.synAuthPass = this._synAuthPass;
    }
    if (this._synAuthRstAckDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.synAuthRstAckDrop = this._synAuthRstAckDrop;
    }
    if (this._synCookieFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.synCookieFail = this._synCookieFail;
    }
    if (this._synCookieSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.synCookieSent = this._synCookieSent;
    }
    if (this._synDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.synDrop = this._synDrop;
    }
    if (this._synRetryBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRetryBlacklist = this._synRetryBlacklist;
    }
    if (this._synRetryFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRetryFailed = this._synRetryFailed;
    }
    if (this._synRetryGapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRetryGapDrop = this._synRetryGapDrop;
    }
    if (this._synRetryInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRetryInit = this._synRetryInit;
    }
    if (this._synRetryPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRetryPass = this._synRetryPass;
    }
    if (this._synRetryReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRetryReset = this._synRetryReset;
    }
    if (this._synRetryRtoFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRetryRtoFail = this._synRetryRtoFail;
    }
    if (this._synRetryRtoPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRetryRtoPass = this._synRetryRtoPass;
    }
    if (this._synRetryRtoProgress !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRetryRtoProgress = this._synRetryRtoProgress;
    }
    if (this._synRetryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRetryTimeout = this._synRetryTimeout;
    }
    if (this._synTfoRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.synTfoRcv = this._synTfoRcv;
    }
    if (this._synackMultipleAttemptsPerIpDetected !== undefined) {
      hasAnyValues = true;
      internalValueResult.synackMultipleAttemptsPerIpDetected = this._synackMultipleAttemptsPerIpDetected;
    }
    if (this._synackResetSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.synackResetSent = this._synackResetSent;
    }
    if (this._tcpAckDataDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAckDataDrop = this._tcpAckDataDrop;
    }
    if (this._tcpAckDataFwd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAckDataFwd = this._tcpAckDataFwd;
    }
    if (this._tcpAckDataRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAckDataRcvd = this._tcpAckDataRcvd;
    }
    if (this._tcpAckDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAckDrop = this._tcpAckDrop;
    }
    if (this._tcpAckFwd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAckFwd = this._tcpAckFwd;
    }
    if (this._tcpAckRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAckRcvd = this._tcpAckRcvd;
    }
    if (this._tcpAuthDropAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAuthDropAck = this._tcpAuthDropAck;
    }
    if (this._tcpAuthDropAckFailAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAuthDropAckFailAuth = this._tcpAuthDropAckFailAuth;
    }
    if (this._tcpAuthDropAckPassAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAuthDropAckPassAuth = this._tcpAuthDropAckPassAuth;
    }
    if (this._tcpAuthDropAckXmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAuthDropAckXmit = this._tcpAuthDropAckXmit;
    }
    if (this._tcpAuthDropRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAuthDropRst = this._tcpAuthDropRst;
    }
    if (this._tcpAuthDropRstFailAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAuthDropRstFailAuth = this._tcpAuthDropRstFailAuth;
    }
    if (this._tcpAuthDropRstPassAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAuthDropRstPassAuth = this._tcpAuthDropRstPassAuth;
    }
    if (this._tcpAuthDropRstXmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAuthDropRstXmit = this._tcpAuthDropRstXmit;
    }
    if (this._tcpAuthDropSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAuthDropSyn = this._tcpAuthDropSyn;
    }
    if (this._tcpAuthRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAuthRst = this._tcpAuthRst;
    }
    if (this._tcpCwrDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpCwrDrop = this._tcpCwrDrop;
    }
    if (this._tcpCwrFwd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpCwrFwd = this._tcpCwrFwd;
    }
    if (this._tcpCwrRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpCwrRcvd = this._tcpCwrRcvd;
    }
    if (this._tcpEceDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpEceDrop = this._tcpEceDrop;
    }
    if (this._tcpEceFwd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpEceFwd = this._tcpEceFwd;
    }
    if (this._tcpEceRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpEceRcvd = this._tcpEceRcvd;
    }
    if (this._tcpEmptyAckDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpEmptyAckDrop = this._tcpEmptyAckDrop;
    }
    if (this._tcpEmptyAckFwd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpEmptyAckFwd = this._tcpEmptyAckFwd;
    }
    if (this._tcpEmptyAckRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpEmptyAckRcvd = this._tcpEmptyAckRcvd;
    }
    if (this._tcpFinAckDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFinAckDrop = this._tcpFinAckDrop;
    }
    if (this._tcpFinAckFwd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFinAckFwd = this._tcpFinAckFwd;
    }
    if (this._tcpFinAckRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFinAckRcvd = this._tcpFinAckRcvd;
    }
    if (this._tcpFinDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFinDrop = this._tcpFinDrop;
    }
    if (this._tcpFinFwd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFinFwd = this._tcpFinFwd;
    }
    if (this._tcpFinPshAckDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFinPshAckDrop = this._tcpFinPshAckDrop;
    }
    if (this._tcpFinPshAckFwd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFinPshAckFwd = this._tcpFinPshAckFwd;
    }
    if (this._tcpFinPshAckRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFinPshAckRcvd = this._tcpFinPshAckRcvd;
    }
    if (this._tcpFinRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFinRcvd = this._tcpFinRcvd;
    }
    if (this._tcpPshAckDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPshAckDrop = this._tcpPshAckDrop;
    }
    if (this._tcpPshAckFwd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPshAckFwd = this._tcpPshAckFwd;
    }
    if (this._tcpPshAckRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPshAckRcvd = this._tcpPshAckRcvd;
    }
    if (this._tcpPshDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPshDrop = this._tcpPshDrop;
    }
    if (this._tcpPshFwd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPshFwd = this._tcpPshFwd;
    }
    if (this._tcpPshRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPshRcvd = this._tcpPshRcvd;
    }
    if (this._tcpRexmitSynLimitBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRexmitSynLimitBl = this._tcpRexmitSynLimitBl;
    }
    if (this._tcpRexmitSynLimitDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRexmitSynLimitDrop = this._tcpRexmitSynLimitDrop;
    }
    if (this._tcpRstAckDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRstAckDrop = this._tcpRstAckDrop;
    }
    if (this._tcpRstAckFwd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRstAckFwd = this._tcpRstAckFwd;
    }
    if (this._tcpRstAckRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRstAckRcvd = this._tcpRstAckRcvd;
    }
    if (this._tcpRstDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRstDrop = this._tcpRstDrop;
    }
    if (this._tcpRstFwd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRstFwd = this._tcpRstFwd;
    }
    if (this._tcpRstRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRstRcvd = this._tcpRstRcvd;
    }
    if (this._tcpSynAckDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynAckDrop = this._tcpSynAckDrop;
    }
    if (this._tcpSynAckFwd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynAckFwd = this._tcpSynAckFwd;
    }
    if (this._tcpSynAckRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynAckRcvd = this._tcpSynAckRcvd;
    }
    if (this._tcpSynFwd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynFwd = this._tcpSynFwd;
    }
    if (this._tcpSynRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynRcvd = this._tcpSynRcvd;
    }
    if (this._tcpUrgDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpUrgDrop = this._tcpUrgDrop;
    }
    if (this._tcpUrgFwd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpUrgFwd = this._tcpUrgFwd;
    }
    if (this._tcpUrgRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpUrgRcvd = this._tcpUrgRcvd;
    }
    if (this._unauthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.unauthDrop = this._unauthDrop;
    }
    if (this._unauthSrcSessionReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.unauthSrcSessionReset = this._unauthSrcSessionReset;
    }
    if (this._wellknownSportDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.wellknownSportDrop = this._wellknownSportDrop;
    }
    if (this._zeroWindowExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroWindowExcd = this._zeroWindowExcd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneSrcPortRangeStatsTcpZonePortStatsTcpZonePort | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ackAuthFail = undefined;
      this._ackRetryBlacklist = undefined;
      this._ackRetryGapDrop = undefined;
      this._ackRetryInit = undefined;
      this._ackRetryPass = undefined;
      this._ackRetryReset = undefined;
      this._ackRetryRtoFail = undefined;
      this._ackRetryRtoPass = undefined;
      this._ackRetryRtoProgress = undefined;
      this._ackRetryTimeout = undefined;
      this._allSrcSessionReset = undefined;
      this._authDrop = undefined;
      this._authResp = undefined;
      this._bl = undefined;
      this._clearSessionUponDeescalation = undefined;
      this._connClose = undefined;
      this._connCloseHalfOpen = undefined;
      this._connCloseWFin = undefined;
      this._connCloseWIdle = undefined;
      this._connCloseWRst = undefined;
      this._connCreateFromAck = undefined;
      this._connCreateFromSyn = undefined;
      this._connCreateFromSynack = undefined;
      this._connOfoRateExcd = undefined;
      this._connPrateExcd = undefined;
      this._connRexmitRateExcd = undefined;
      this._connZwindowRateExcd = undefined;
      this._createConnNonSynDropped = undefined;
      this._createConnNonSynRst = undefined;
      this._currentEsLevel = undefined;
      this._dstHwDrop = undefined;
      this._dstHwDropInserted = undefined;
      this._dstHwDropRemoved = undefined;
      this._dstTcpConnHalfOpenTimeout = undefined;
      this._dstTcpConnHalfOpenTimeoutRstSent = undefined;
      this._dstTcpSessAgedRstSent = undefined;
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
      this._hybridAuthAuthNoMatch = undefined;
      this._hybridAuthAuthNoMatchAckRcv = undefined;
      this._hybridAuthAuthNoMatchRstRcv = undefined;
      this._hybridAuthEntryAgedOut = undefined;
      this._hybridAuthFilterFull = undefined;
      this._hybridAuthInvalidFail = undefined;
      this._hybridAuthInvalidPass = undefined;
      this._hybridAuthInvalidSaSent = undefined;
      this._hybridAuthLookupFail = undefined;
      this._hybridAuthMethodChange = undefined;
      this._hybridAuthUnknownFail = undefined;
      this._hybridAuthUnknownPass = undefined;
      this._hybridAuthValidFail = undefined;
      this._hybridAuthValidPass = undefined;
      this._hybridAuthValidSaSent = undefined;
      this._ipFilteringBl = undefined;
      this._ipFilteringDrop = undefined;
      this._noPolicyClassListMatch = undefined;
      this._noRouteDrop = undefined;
      this._outOfSeqExcd = undefined;
      this._outboundPortBytes = undefined;
      this._outboundPortBytesDrop = undefined;
      this._outboundPortBytesSent = undefined;
      this._outboundPortDrop = undefined;
      this._outboundPortPktSent = undefined;
      this._outboundPortRcvd = undefined;
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
      this._portSynRateExceed = undefined;
      this._portSynackRateExceed = undefined;
      this._progConnExceedBl = undefined;
      this._progConnExceedDrop = undefined;
      this._progConnExceedReset = undefined;
      this._progConnRcvdExceed = undefined;
      this._progConnRcvdSentRatioExceed = undefined;
      this._progConnSamples = undefined;
      this._progConnSamplesProcessed = undefined;
      this._progConnSentExceed = undefined;
      this._progConnTimeExceed = undefined;
      this._progExceedBl = undefined;
      this._progExceedDrop = undefined;
      this._progExceedReset = undefined;
      this._progFirstReqTimeExceed = undefined;
      this._progQueryExceed = undefined;
      this._progReqRespTimeExceed = undefined;
      this._progReqSamples = undefined;
      this._progReqSamplesProcessed = undefined;
      this._progRequestLenExceed = undefined;
      this._progRespPktRateExceed = undefined;
      this._progRespReqTimeExceed = undefined;
      this._progResponseLenExceed = undefined;
      this._progThinkExceed = undefined;
      this._progWinExceedBl = undefined;
      this._progWinExceedDrop = undefined;
      this._progWinExceedReset = undefined;
      this._progWinRcvdExceed = undefined;
      this._progWinRcvdSentRatioExceed = undefined;
      this._progWinSamples = undefined;
      this._progWinSamplesProcessed = undefined;
      this._progWinSentExceed = undefined;
      this._retransmitExcd = undefined;
      this._rstCookieFail = undefined;
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
      this._smallWindowExcd = undefined;
      this._smallWindowRcv = undefined;
      this._snatFail = undefined;
      this._srcAckAuthFail = undefined;
      this._srcAckRetryBlacklist = undefined;
      this._srcAckRetryGapDrop = undefined;
      this._srcAckRetryInit = undefined;
      this._srcAckRetryReset = undefined;
      this._srcAckRetryRtoFail = undefined;
      this._srcAckRetryRtoPass = undefined;
      this._srcAckRetryRtoProgress = undefined;
      this._srcAckRetryTimeout = undefined;
      this._srcAuthDrop = undefined;
      this._srcAuthDropAck = undefined;
      this._srcAuthDropAckFailAuth = undefined;
      this._srcAuthDropAckPassAuth = undefined;
      this._srcAuthDropAckXmit = undefined;
      this._srcAuthDropRst = undefined;
      this._srcAuthDropRstFailAuth = undefined;
      this._srcAuthDropRstPassAuth = undefined;
      this._srcAuthDropRstXmit = undefined;
      this._srcAuthDropSyn = undefined;
      this._srcConnOfoRateExcd = undefined;
      this._srcConnPktRateExcd = undefined;
      this._srcConnRexmitRateExcd = undefined;
      this._srcConnZwindowRateExcd = undefined;
      this._srcCreateConnNonSynDropped = undefined;
      this._srcCreateConnNonSynRst = undefined;
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
      this._srcOutOfSeqExcd = undefined;
      this._srcRetransmitExcd = undefined;
      this._srcRstCookieFail = undefined;
      this._srcSmallWindowExcd = undefined;
      this._srcSynAuthFail = undefined;
      this._srcSynCookieFail = undefined;
      this._srcSynCookieSent = undefined;
      this._srcSynRateExceed = undefined;
      this._srcSynRetryBlacklist = undefined;
      this._srcSynRetryFailed = undefined;
      this._srcSynRetryGapDrop = undefined;
      this._srcSynRetryInit = undefined;
      this._srcSynRetryReset = undefined;
      this._srcSynRetryRtoFail = undefined;
      this._srcSynRetryRtoPass = undefined;
      this._srcSynRetryRtoProgress = undefined;
      this._srcSynRetryTimeout = undefined;
      this._srcTcpAuthRst = undefined;
      this._srcUnauthDrop = undefined;
      this._srcWellKnownPort = undefined;
      this._srcZeroWindowExcd = undefined;
      this._srcZoneServiceEntryAged = undefined;
      this._srcZoneServiceEntryHit = undefined;
      this._srcZoneServiceEntryLearned = undefined;
      this._synAuthFail = undefined;
      this._synAuthPass = undefined;
      this._synAuthRstAckDrop = undefined;
      this._synCookieFail = undefined;
      this._synCookieSent = undefined;
      this._synDrop = undefined;
      this._synRetryBlacklist = undefined;
      this._synRetryFailed = undefined;
      this._synRetryGapDrop = undefined;
      this._synRetryInit = undefined;
      this._synRetryPass = undefined;
      this._synRetryReset = undefined;
      this._synRetryRtoFail = undefined;
      this._synRetryRtoPass = undefined;
      this._synRetryRtoProgress = undefined;
      this._synRetryTimeout = undefined;
      this._synTfoRcv = undefined;
      this._synackMultipleAttemptsPerIpDetected = undefined;
      this._synackResetSent = undefined;
      this._tcpAckDataDrop = undefined;
      this._tcpAckDataFwd = undefined;
      this._tcpAckDataRcvd = undefined;
      this._tcpAckDrop = undefined;
      this._tcpAckFwd = undefined;
      this._tcpAckRcvd = undefined;
      this._tcpAuthDropAck = undefined;
      this._tcpAuthDropAckFailAuth = undefined;
      this._tcpAuthDropAckPassAuth = undefined;
      this._tcpAuthDropAckXmit = undefined;
      this._tcpAuthDropRst = undefined;
      this._tcpAuthDropRstFailAuth = undefined;
      this._tcpAuthDropRstPassAuth = undefined;
      this._tcpAuthDropRstXmit = undefined;
      this._tcpAuthDropSyn = undefined;
      this._tcpAuthRst = undefined;
      this._tcpCwrDrop = undefined;
      this._tcpCwrFwd = undefined;
      this._tcpCwrRcvd = undefined;
      this._tcpEceDrop = undefined;
      this._tcpEceFwd = undefined;
      this._tcpEceRcvd = undefined;
      this._tcpEmptyAckDrop = undefined;
      this._tcpEmptyAckFwd = undefined;
      this._tcpEmptyAckRcvd = undefined;
      this._tcpFinAckDrop = undefined;
      this._tcpFinAckFwd = undefined;
      this._tcpFinAckRcvd = undefined;
      this._tcpFinDrop = undefined;
      this._tcpFinFwd = undefined;
      this._tcpFinPshAckDrop = undefined;
      this._tcpFinPshAckFwd = undefined;
      this._tcpFinPshAckRcvd = undefined;
      this._tcpFinRcvd = undefined;
      this._tcpPshAckDrop = undefined;
      this._tcpPshAckFwd = undefined;
      this._tcpPshAckRcvd = undefined;
      this._tcpPshDrop = undefined;
      this._tcpPshFwd = undefined;
      this._tcpPshRcvd = undefined;
      this._tcpRexmitSynLimitBl = undefined;
      this._tcpRexmitSynLimitDrop = undefined;
      this._tcpRstAckDrop = undefined;
      this._tcpRstAckFwd = undefined;
      this._tcpRstAckRcvd = undefined;
      this._tcpRstDrop = undefined;
      this._tcpRstFwd = undefined;
      this._tcpRstRcvd = undefined;
      this._tcpSynAckDrop = undefined;
      this._tcpSynAckFwd = undefined;
      this._tcpSynAckRcvd = undefined;
      this._tcpSynFwd = undefined;
      this._tcpSynRcvd = undefined;
      this._tcpUrgDrop = undefined;
      this._tcpUrgFwd = undefined;
      this._tcpUrgRcvd = undefined;
      this._unauthDrop = undefined;
      this._unauthSrcSessionReset = undefined;
      this._wellknownSportDrop = undefined;
      this._zeroWindowExcd = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ackAuthFail = value.ackAuthFail;
      this._ackRetryBlacklist = value.ackRetryBlacklist;
      this._ackRetryGapDrop = value.ackRetryGapDrop;
      this._ackRetryInit = value.ackRetryInit;
      this._ackRetryPass = value.ackRetryPass;
      this._ackRetryReset = value.ackRetryReset;
      this._ackRetryRtoFail = value.ackRetryRtoFail;
      this._ackRetryRtoPass = value.ackRetryRtoPass;
      this._ackRetryRtoProgress = value.ackRetryRtoProgress;
      this._ackRetryTimeout = value.ackRetryTimeout;
      this._allSrcSessionReset = value.allSrcSessionReset;
      this._authDrop = value.authDrop;
      this._authResp = value.authResp;
      this._bl = value.bl;
      this._clearSessionUponDeescalation = value.clearSessionUponDeescalation;
      this._connClose = value.connClose;
      this._connCloseHalfOpen = value.connCloseHalfOpen;
      this._connCloseWFin = value.connCloseWFin;
      this._connCloseWIdle = value.connCloseWIdle;
      this._connCloseWRst = value.connCloseWRst;
      this._connCreateFromAck = value.connCreateFromAck;
      this._connCreateFromSyn = value.connCreateFromSyn;
      this._connCreateFromSynack = value.connCreateFromSynack;
      this._connOfoRateExcd = value.connOfoRateExcd;
      this._connPrateExcd = value.connPrateExcd;
      this._connRexmitRateExcd = value.connRexmitRateExcd;
      this._connZwindowRateExcd = value.connZwindowRateExcd;
      this._createConnNonSynDropped = value.createConnNonSynDropped;
      this._createConnNonSynRst = value.createConnNonSynRst;
      this._currentEsLevel = value.currentEsLevel;
      this._dstHwDrop = value.dstHwDrop;
      this._dstHwDropInserted = value.dstHwDropInserted;
      this._dstHwDropRemoved = value.dstHwDropRemoved;
      this._dstTcpConnHalfOpenTimeout = value.dstTcpConnHalfOpenTimeout;
      this._dstTcpConnHalfOpenTimeoutRstSent = value.dstTcpConnHalfOpenTimeoutRstSent;
      this._dstTcpSessAgedRstSent = value.dstTcpSessAgedRstSent;
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
      this._hybridAuthAuthNoMatch = value.hybridAuthAuthNoMatch;
      this._hybridAuthAuthNoMatchAckRcv = value.hybridAuthAuthNoMatchAckRcv;
      this._hybridAuthAuthNoMatchRstRcv = value.hybridAuthAuthNoMatchRstRcv;
      this._hybridAuthEntryAgedOut = value.hybridAuthEntryAgedOut;
      this._hybridAuthFilterFull = value.hybridAuthFilterFull;
      this._hybridAuthInvalidFail = value.hybridAuthInvalidFail;
      this._hybridAuthInvalidPass = value.hybridAuthInvalidPass;
      this._hybridAuthInvalidSaSent = value.hybridAuthInvalidSaSent;
      this._hybridAuthLookupFail = value.hybridAuthLookupFail;
      this._hybridAuthMethodChange = value.hybridAuthMethodChange;
      this._hybridAuthUnknownFail = value.hybridAuthUnknownFail;
      this._hybridAuthUnknownPass = value.hybridAuthUnknownPass;
      this._hybridAuthValidFail = value.hybridAuthValidFail;
      this._hybridAuthValidPass = value.hybridAuthValidPass;
      this._hybridAuthValidSaSent = value.hybridAuthValidSaSent;
      this._ipFilteringBl = value.ipFilteringBl;
      this._ipFilteringDrop = value.ipFilteringDrop;
      this._noPolicyClassListMatch = value.noPolicyClassListMatch;
      this._noRouteDrop = value.noRouteDrop;
      this._outOfSeqExcd = value.outOfSeqExcd;
      this._outboundPortBytes = value.outboundPortBytes;
      this._outboundPortBytesDrop = value.outboundPortBytesDrop;
      this._outboundPortBytesSent = value.outboundPortBytesSent;
      this._outboundPortDrop = value.outboundPortDrop;
      this._outboundPortPktSent = value.outboundPortPktSent;
      this._outboundPortRcvd = value.outboundPortRcvd;
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
      this._portSynRateExceed = value.portSynRateExceed;
      this._portSynackRateExceed = value.portSynackRateExceed;
      this._progConnExceedBl = value.progConnExceedBl;
      this._progConnExceedDrop = value.progConnExceedDrop;
      this._progConnExceedReset = value.progConnExceedReset;
      this._progConnRcvdExceed = value.progConnRcvdExceed;
      this._progConnRcvdSentRatioExceed = value.progConnRcvdSentRatioExceed;
      this._progConnSamples = value.progConnSamples;
      this._progConnSamplesProcessed = value.progConnSamplesProcessed;
      this._progConnSentExceed = value.progConnSentExceed;
      this._progConnTimeExceed = value.progConnTimeExceed;
      this._progExceedBl = value.progExceedBl;
      this._progExceedDrop = value.progExceedDrop;
      this._progExceedReset = value.progExceedReset;
      this._progFirstReqTimeExceed = value.progFirstReqTimeExceed;
      this._progQueryExceed = value.progQueryExceed;
      this._progReqRespTimeExceed = value.progReqRespTimeExceed;
      this._progReqSamples = value.progReqSamples;
      this._progReqSamplesProcessed = value.progReqSamplesProcessed;
      this._progRequestLenExceed = value.progRequestLenExceed;
      this._progRespPktRateExceed = value.progRespPktRateExceed;
      this._progRespReqTimeExceed = value.progRespReqTimeExceed;
      this._progResponseLenExceed = value.progResponseLenExceed;
      this._progThinkExceed = value.progThinkExceed;
      this._progWinExceedBl = value.progWinExceedBl;
      this._progWinExceedDrop = value.progWinExceedDrop;
      this._progWinExceedReset = value.progWinExceedReset;
      this._progWinRcvdExceed = value.progWinRcvdExceed;
      this._progWinRcvdSentRatioExceed = value.progWinRcvdSentRatioExceed;
      this._progWinSamples = value.progWinSamples;
      this._progWinSamplesProcessed = value.progWinSamplesProcessed;
      this._progWinSentExceed = value.progWinSentExceed;
      this._retransmitExcd = value.retransmitExcd;
      this._rstCookieFail = value.rstCookieFail;
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
      this._smallWindowExcd = value.smallWindowExcd;
      this._smallWindowRcv = value.smallWindowRcv;
      this._snatFail = value.snatFail;
      this._srcAckAuthFail = value.srcAckAuthFail;
      this._srcAckRetryBlacklist = value.srcAckRetryBlacklist;
      this._srcAckRetryGapDrop = value.srcAckRetryGapDrop;
      this._srcAckRetryInit = value.srcAckRetryInit;
      this._srcAckRetryReset = value.srcAckRetryReset;
      this._srcAckRetryRtoFail = value.srcAckRetryRtoFail;
      this._srcAckRetryRtoPass = value.srcAckRetryRtoPass;
      this._srcAckRetryRtoProgress = value.srcAckRetryRtoProgress;
      this._srcAckRetryTimeout = value.srcAckRetryTimeout;
      this._srcAuthDrop = value.srcAuthDrop;
      this._srcAuthDropAck = value.srcAuthDropAck;
      this._srcAuthDropAckFailAuth = value.srcAuthDropAckFailAuth;
      this._srcAuthDropAckPassAuth = value.srcAuthDropAckPassAuth;
      this._srcAuthDropAckXmit = value.srcAuthDropAckXmit;
      this._srcAuthDropRst = value.srcAuthDropRst;
      this._srcAuthDropRstFailAuth = value.srcAuthDropRstFailAuth;
      this._srcAuthDropRstPassAuth = value.srcAuthDropRstPassAuth;
      this._srcAuthDropRstXmit = value.srcAuthDropRstXmit;
      this._srcAuthDropSyn = value.srcAuthDropSyn;
      this._srcConnOfoRateExcd = value.srcConnOfoRateExcd;
      this._srcConnPktRateExcd = value.srcConnPktRateExcd;
      this._srcConnRexmitRateExcd = value.srcConnRexmitRateExcd;
      this._srcConnZwindowRateExcd = value.srcConnZwindowRateExcd;
      this._srcCreateConnNonSynDropped = value.srcCreateConnNonSynDropped;
      this._srcCreateConnNonSynRst = value.srcCreateConnNonSynRst;
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
      this._srcOutOfSeqExcd = value.srcOutOfSeqExcd;
      this._srcRetransmitExcd = value.srcRetransmitExcd;
      this._srcRstCookieFail = value.srcRstCookieFail;
      this._srcSmallWindowExcd = value.srcSmallWindowExcd;
      this._srcSynAuthFail = value.srcSynAuthFail;
      this._srcSynCookieFail = value.srcSynCookieFail;
      this._srcSynCookieSent = value.srcSynCookieSent;
      this._srcSynRateExceed = value.srcSynRateExceed;
      this._srcSynRetryBlacklist = value.srcSynRetryBlacklist;
      this._srcSynRetryFailed = value.srcSynRetryFailed;
      this._srcSynRetryGapDrop = value.srcSynRetryGapDrop;
      this._srcSynRetryInit = value.srcSynRetryInit;
      this._srcSynRetryReset = value.srcSynRetryReset;
      this._srcSynRetryRtoFail = value.srcSynRetryRtoFail;
      this._srcSynRetryRtoPass = value.srcSynRetryRtoPass;
      this._srcSynRetryRtoProgress = value.srcSynRetryRtoProgress;
      this._srcSynRetryTimeout = value.srcSynRetryTimeout;
      this._srcTcpAuthRst = value.srcTcpAuthRst;
      this._srcUnauthDrop = value.srcUnauthDrop;
      this._srcWellKnownPort = value.srcWellKnownPort;
      this._srcZeroWindowExcd = value.srcZeroWindowExcd;
      this._srcZoneServiceEntryAged = value.srcZoneServiceEntryAged;
      this._srcZoneServiceEntryHit = value.srcZoneServiceEntryHit;
      this._srcZoneServiceEntryLearned = value.srcZoneServiceEntryLearned;
      this._synAuthFail = value.synAuthFail;
      this._synAuthPass = value.synAuthPass;
      this._synAuthRstAckDrop = value.synAuthRstAckDrop;
      this._synCookieFail = value.synCookieFail;
      this._synCookieSent = value.synCookieSent;
      this._synDrop = value.synDrop;
      this._synRetryBlacklist = value.synRetryBlacklist;
      this._synRetryFailed = value.synRetryFailed;
      this._synRetryGapDrop = value.synRetryGapDrop;
      this._synRetryInit = value.synRetryInit;
      this._synRetryPass = value.synRetryPass;
      this._synRetryReset = value.synRetryReset;
      this._synRetryRtoFail = value.synRetryRtoFail;
      this._synRetryRtoPass = value.synRetryRtoPass;
      this._synRetryRtoProgress = value.synRetryRtoProgress;
      this._synRetryTimeout = value.synRetryTimeout;
      this._synTfoRcv = value.synTfoRcv;
      this._synackMultipleAttemptsPerIpDetected = value.synackMultipleAttemptsPerIpDetected;
      this._synackResetSent = value.synackResetSent;
      this._tcpAckDataDrop = value.tcpAckDataDrop;
      this._tcpAckDataFwd = value.tcpAckDataFwd;
      this._tcpAckDataRcvd = value.tcpAckDataRcvd;
      this._tcpAckDrop = value.tcpAckDrop;
      this._tcpAckFwd = value.tcpAckFwd;
      this._tcpAckRcvd = value.tcpAckRcvd;
      this._tcpAuthDropAck = value.tcpAuthDropAck;
      this._tcpAuthDropAckFailAuth = value.tcpAuthDropAckFailAuth;
      this._tcpAuthDropAckPassAuth = value.tcpAuthDropAckPassAuth;
      this._tcpAuthDropAckXmit = value.tcpAuthDropAckXmit;
      this._tcpAuthDropRst = value.tcpAuthDropRst;
      this._tcpAuthDropRstFailAuth = value.tcpAuthDropRstFailAuth;
      this._tcpAuthDropRstPassAuth = value.tcpAuthDropRstPassAuth;
      this._tcpAuthDropRstXmit = value.tcpAuthDropRstXmit;
      this._tcpAuthDropSyn = value.tcpAuthDropSyn;
      this._tcpAuthRst = value.tcpAuthRst;
      this._tcpCwrDrop = value.tcpCwrDrop;
      this._tcpCwrFwd = value.tcpCwrFwd;
      this._tcpCwrRcvd = value.tcpCwrRcvd;
      this._tcpEceDrop = value.tcpEceDrop;
      this._tcpEceFwd = value.tcpEceFwd;
      this._tcpEceRcvd = value.tcpEceRcvd;
      this._tcpEmptyAckDrop = value.tcpEmptyAckDrop;
      this._tcpEmptyAckFwd = value.tcpEmptyAckFwd;
      this._tcpEmptyAckRcvd = value.tcpEmptyAckRcvd;
      this._tcpFinAckDrop = value.tcpFinAckDrop;
      this._tcpFinAckFwd = value.tcpFinAckFwd;
      this._tcpFinAckRcvd = value.tcpFinAckRcvd;
      this._tcpFinDrop = value.tcpFinDrop;
      this._tcpFinFwd = value.tcpFinFwd;
      this._tcpFinPshAckDrop = value.tcpFinPshAckDrop;
      this._tcpFinPshAckFwd = value.tcpFinPshAckFwd;
      this._tcpFinPshAckRcvd = value.tcpFinPshAckRcvd;
      this._tcpFinRcvd = value.tcpFinRcvd;
      this._tcpPshAckDrop = value.tcpPshAckDrop;
      this._tcpPshAckFwd = value.tcpPshAckFwd;
      this._tcpPshAckRcvd = value.tcpPshAckRcvd;
      this._tcpPshDrop = value.tcpPshDrop;
      this._tcpPshFwd = value.tcpPshFwd;
      this._tcpPshRcvd = value.tcpPshRcvd;
      this._tcpRexmitSynLimitBl = value.tcpRexmitSynLimitBl;
      this._tcpRexmitSynLimitDrop = value.tcpRexmitSynLimitDrop;
      this._tcpRstAckDrop = value.tcpRstAckDrop;
      this._tcpRstAckFwd = value.tcpRstAckFwd;
      this._tcpRstAckRcvd = value.tcpRstAckRcvd;
      this._tcpRstDrop = value.tcpRstDrop;
      this._tcpRstFwd = value.tcpRstFwd;
      this._tcpRstRcvd = value.tcpRstRcvd;
      this._tcpSynAckDrop = value.tcpSynAckDrop;
      this._tcpSynAckFwd = value.tcpSynAckFwd;
      this._tcpSynAckRcvd = value.tcpSynAckRcvd;
      this._tcpSynFwd = value.tcpSynFwd;
      this._tcpSynRcvd = value.tcpSynRcvd;
      this._tcpUrgDrop = value.tcpUrgDrop;
      this._tcpUrgFwd = value.tcpUrgFwd;
      this._tcpUrgRcvd = value.tcpUrgRcvd;
      this._unauthDrop = value.unauthDrop;
      this._unauthSrcSessionReset = value.unauthSrcSessionReset;
      this._wellknownSportDrop = value.wellknownSportDrop;
      this._zeroWindowExcd = value.zeroWindowExcd;
    }
  }

  // ack_auth_fail - computed: false, optional: true, required: false
  private _ackAuthFail?: number; 
  public get ackAuthFail() {
    return this.getNumberAttribute('ack_auth_fail');
  }
  public set ackAuthFail(value: number) {
    this._ackAuthFail = value;
  }
  public resetAckAuthFail() {
    this._ackAuthFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackAuthFailInput() {
    return this._ackAuthFail;
  }

  // ack_retry_blacklist - computed: false, optional: true, required: false
  private _ackRetryBlacklist?: number; 
  public get ackRetryBlacklist() {
    return this.getNumberAttribute('ack_retry_blacklist');
  }
  public set ackRetryBlacklist(value: number) {
    this._ackRetryBlacklist = value;
  }
  public resetAckRetryBlacklist() {
    this._ackRetryBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackRetryBlacklistInput() {
    return this._ackRetryBlacklist;
  }

  // ack_retry_gap_drop - computed: false, optional: true, required: false
  private _ackRetryGapDrop?: number; 
  public get ackRetryGapDrop() {
    return this.getNumberAttribute('ack_retry_gap_drop');
  }
  public set ackRetryGapDrop(value: number) {
    this._ackRetryGapDrop = value;
  }
  public resetAckRetryGapDrop() {
    this._ackRetryGapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackRetryGapDropInput() {
    return this._ackRetryGapDrop;
  }

  // ack_retry_init - computed: false, optional: true, required: false
  private _ackRetryInit?: number; 
  public get ackRetryInit() {
    return this.getNumberAttribute('ack_retry_init');
  }
  public set ackRetryInit(value: number) {
    this._ackRetryInit = value;
  }
  public resetAckRetryInit() {
    this._ackRetryInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackRetryInitInput() {
    return this._ackRetryInit;
  }

  // ack_retry_pass - computed: false, optional: true, required: false
  private _ackRetryPass?: number; 
  public get ackRetryPass() {
    return this.getNumberAttribute('ack_retry_pass');
  }
  public set ackRetryPass(value: number) {
    this._ackRetryPass = value;
  }
  public resetAckRetryPass() {
    this._ackRetryPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackRetryPassInput() {
    return this._ackRetryPass;
  }

  // ack_retry_reset - computed: false, optional: true, required: false
  private _ackRetryReset?: number; 
  public get ackRetryReset() {
    return this.getNumberAttribute('ack_retry_reset');
  }
  public set ackRetryReset(value: number) {
    this._ackRetryReset = value;
  }
  public resetAckRetryReset() {
    this._ackRetryReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackRetryResetInput() {
    return this._ackRetryReset;
  }

  // ack_retry_rto_fail - computed: false, optional: true, required: false
  private _ackRetryRtoFail?: number; 
  public get ackRetryRtoFail() {
    return this.getNumberAttribute('ack_retry_rto_fail');
  }
  public set ackRetryRtoFail(value: number) {
    this._ackRetryRtoFail = value;
  }
  public resetAckRetryRtoFail() {
    this._ackRetryRtoFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackRetryRtoFailInput() {
    return this._ackRetryRtoFail;
  }

  // ack_retry_rto_pass - computed: false, optional: true, required: false
  private _ackRetryRtoPass?: number; 
  public get ackRetryRtoPass() {
    return this.getNumberAttribute('ack_retry_rto_pass');
  }
  public set ackRetryRtoPass(value: number) {
    this._ackRetryRtoPass = value;
  }
  public resetAckRetryRtoPass() {
    this._ackRetryRtoPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackRetryRtoPassInput() {
    return this._ackRetryRtoPass;
  }

  // ack_retry_rto_progress - computed: false, optional: true, required: false
  private _ackRetryRtoProgress?: number; 
  public get ackRetryRtoProgress() {
    return this.getNumberAttribute('ack_retry_rto_progress');
  }
  public set ackRetryRtoProgress(value: number) {
    this._ackRetryRtoProgress = value;
  }
  public resetAckRetryRtoProgress() {
    this._ackRetryRtoProgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackRetryRtoProgressInput() {
    return this._ackRetryRtoProgress;
  }

  // ack_retry_timeout - computed: false, optional: true, required: false
  private _ackRetryTimeout?: number; 
  public get ackRetryTimeout() {
    return this.getNumberAttribute('ack_retry_timeout');
  }
  public set ackRetryTimeout(value: number) {
    this._ackRetryTimeout = value;
  }
  public resetAckRetryTimeout() {
    this._ackRetryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ackRetryTimeoutInput() {
    return this._ackRetryTimeout;
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

  // auth_drop - computed: false, optional: true, required: false
  private _authDrop?: number; 
  public get authDrop() {
    return this.getNumberAttribute('auth_drop');
  }
  public set authDrop(value: number) {
    this._authDrop = value;
  }
  public resetAuthDrop() {
    this._authDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authDropInput() {
    return this._authDrop;
  }

  // auth_resp - computed: false, optional: true, required: false
  private _authResp?: number; 
  public get authResp() {
    return this.getNumberAttribute('auth_resp');
  }
  public set authResp(value: number) {
    this._authResp = value;
  }
  public resetAuthResp() {
    this._authResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authRespInput() {
    return this._authResp;
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

  // conn_close - computed: false, optional: true, required: false
  private _connClose?: number; 
  public get connClose() {
    return this.getNumberAttribute('conn_close');
  }
  public set connClose(value: number) {
    this._connClose = value;
  }
  public resetConnClose() {
    this._connClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connCloseInput() {
    return this._connClose;
  }

  // conn_close_half_open - computed: false, optional: true, required: false
  private _connCloseHalfOpen?: number; 
  public get connCloseHalfOpen() {
    return this.getNumberAttribute('conn_close_half_open');
  }
  public set connCloseHalfOpen(value: number) {
    this._connCloseHalfOpen = value;
  }
  public resetConnCloseHalfOpen() {
    this._connCloseHalfOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connCloseHalfOpenInput() {
    return this._connCloseHalfOpen;
  }

  // conn_close_w_fin - computed: false, optional: true, required: false
  private _connCloseWFin?: number; 
  public get connCloseWFin() {
    return this.getNumberAttribute('conn_close_w_fin');
  }
  public set connCloseWFin(value: number) {
    this._connCloseWFin = value;
  }
  public resetConnCloseWFin() {
    this._connCloseWFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connCloseWFinInput() {
    return this._connCloseWFin;
  }

  // conn_close_w_idle - computed: false, optional: true, required: false
  private _connCloseWIdle?: number; 
  public get connCloseWIdle() {
    return this.getNumberAttribute('conn_close_w_idle');
  }
  public set connCloseWIdle(value: number) {
    this._connCloseWIdle = value;
  }
  public resetConnCloseWIdle() {
    this._connCloseWIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connCloseWIdleInput() {
    return this._connCloseWIdle;
  }

  // conn_close_w_rst - computed: false, optional: true, required: false
  private _connCloseWRst?: number; 
  public get connCloseWRst() {
    return this.getNumberAttribute('conn_close_w_rst');
  }
  public set connCloseWRst(value: number) {
    this._connCloseWRst = value;
  }
  public resetConnCloseWRst() {
    this._connCloseWRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connCloseWRstInput() {
    return this._connCloseWRst;
  }

  // conn_create_from_ack - computed: false, optional: true, required: false
  private _connCreateFromAck?: number; 
  public get connCreateFromAck() {
    return this.getNumberAttribute('conn_create_from_ack');
  }
  public set connCreateFromAck(value: number) {
    this._connCreateFromAck = value;
  }
  public resetConnCreateFromAck() {
    this._connCreateFromAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connCreateFromAckInput() {
    return this._connCreateFromAck;
  }

  // conn_create_from_syn - computed: false, optional: true, required: false
  private _connCreateFromSyn?: number; 
  public get connCreateFromSyn() {
    return this.getNumberAttribute('conn_create_from_syn');
  }
  public set connCreateFromSyn(value: number) {
    this._connCreateFromSyn = value;
  }
  public resetConnCreateFromSyn() {
    this._connCreateFromSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connCreateFromSynInput() {
    return this._connCreateFromSyn;
  }

  // conn_create_from_synack - computed: false, optional: true, required: false
  private _connCreateFromSynack?: number; 
  public get connCreateFromSynack() {
    return this.getNumberAttribute('conn_create_from_synack');
  }
  public set connCreateFromSynack(value: number) {
    this._connCreateFromSynack = value;
  }
  public resetConnCreateFromSynack() {
    this._connCreateFromSynack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connCreateFromSynackInput() {
    return this._connCreateFromSynack;
  }

  // conn_ofo_rate_excd - computed: false, optional: true, required: false
  private _connOfoRateExcd?: number; 
  public get connOfoRateExcd() {
    return this.getNumberAttribute('conn_ofo_rate_excd');
  }
  public set connOfoRateExcd(value: number) {
    this._connOfoRateExcd = value;
  }
  public resetConnOfoRateExcd() {
    this._connOfoRateExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connOfoRateExcdInput() {
    return this._connOfoRateExcd;
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

  // conn_rexmit_rate_excd - computed: false, optional: true, required: false
  private _connRexmitRateExcd?: number; 
  public get connRexmitRateExcd() {
    return this.getNumberAttribute('conn_rexmit_rate_excd');
  }
  public set connRexmitRateExcd(value: number) {
    this._connRexmitRateExcd = value;
  }
  public resetConnRexmitRateExcd() {
    this._connRexmitRateExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRexmitRateExcdInput() {
    return this._connRexmitRateExcd;
  }

  // conn_zwindow_rate_excd - computed: false, optional: true, required: false
  private _connZwindowRateExcd?: number; 
  public get connZwindowRateExcd() {
    return this.getNumberAttribute('conn_zwindow_rate_excd');
  }
  public set connZwindowRateExcd(value: number) {
    this._connZwindowRateExcd = value;
  }
  public resetConnZwindowRateExcd() {
    this._connZwindowRateExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connZwindowRateExcdInput() {
    return this._connZwindowRateExcd;
  }

  // create_conn_non_syn_dropped - computed: false, optional: true, required: false
  private _createConnNonSynDropped?: number; 
  public get createConnNonSynDropped() {
    return this.getNumberAttribute('create_conn_non_syn_dropped');
  }
  public set createConnNonSynDropped(value: number) {
    this._createConnNonSynDropped = value;
  }
  public resetCreateConnNonSynDropped() {
    this._createConnNonSynDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createConnNonSynDroppedInput() {
    return this._createConnNonSynDropped;
  }

  // create_conn_non_syn_rst - computed: false, optional: true, required: false
  private _createConnNonSynRst?: number; 
  public get createConnNonSynRst() {
    return this.getNumberAttribute('create_conn_non_syn_rst');
  }
  public set createConnNonSynRst(value: number) {
    this._createConnNonSynRst = value;
  }
  public resetCreateConnNonSynRst() {
    this._createConnNonSynRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createConnNonSynRstInput() {
    return this._createConnNonSynRst;
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

  // dst_tcp_conn_half_open_timeout - computed: false, optional: true, required: false
  private _dstTcpConnHalfOpenTimeout?: number; 
  public get dstTcpConnHalfOpenTimeout() {
    return this.getNumberAttribute('dst_tcp_conn_half_open_timeout');
  }
  public set dstTcpConnHalfOpenTimeout(value: number) {
    this._dstTcpConnHalfOpenTimeout = value;
  }
  public resetDstTcpConnHalfOpenTimeout() {
    this._dstTcpConnHalfOpenTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpConnHalfOpenTimeoutInput() {
    return this._dstTcpConnHalfOpenTimeout;
  }

  // dst_tcp_conn_half_open_timeout_rst_sent - computed: false, optional: true, required: false
  private _dstTcpConnHalfOpenTimeoutRstSent?: number; 
  public get dstTcpConnHalfOpenTimeoutRstSent() {
    return this.getNumberAttribute('dst_tcp_conn_half_open_timeout_rst_sent');
  }
  public set dstTcpConnHalfOpenTimeoutRstSent(value: number) {
    this._dstTcpConnHalfOpenTimeoutRstSent = value;
  }
  public resetDstTcpConnHalfOpenTimeoutRstSent() {
    this._dstTcpConnHalfOpenTimeoutRstSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpConnHalfOpenTimeoutRstSentInput() {
    return this._dstTcpConnHalfOpenTimeoutRstSent;
  }

  // dst_tcp_sess_aged_rst_sent - computed: false, optional: true, required: false
  private _dstTcpSessAgedRstSent?: number; 
  public get dstTcpSessAgedRstSent() {
    return this.getNumberAttribute('dst_tcp_sess_aged_rst_sent');
  }
  public set dstTcpSessAgedRstSent(value: number) {
    this._dstTcpSessAgedRstSent = value;
  }
  public resetDstTcpSessAgedRstSent() {
    this._dstTcpSessAgedRstSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpSessAgedRstSentInput() {
    return this._dstTcpSessAgedRstSent;
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

  // hybrid_auth_auth_no_match - computed: false, optional: true, required: false
  private _hybridAuthAuthNoMatch?: number; 
  public get hybridAuthAuthNoMatch() {
    return this.getNumberAttribute('hybrid_auth_auth_no_match');
  }
  public set hybridAuthAuthNoMatch(value: number) {
    this._hybridAuthAuthNoMatch = value;
  }
  public resetHybridAuthAuthNoMatch() {
    this._hybridAuthAuthNoMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridAuthAuthNoMatchInput() {
    return this._hybridAuthAuthNoMatch;
  }

  // hybrid_auth_auth_no_match_ack_rcv - computed: false, optional: true, required: false
  private _hybridAuthAuthNoMatchAckRcv?: number; 
  public get hybridAuthAuthNoMatchAckRcv() {
    return this.getNumberAttribute('hybrid_auth_auth_no_match_ack_rcv');
  }
  public set hybridAuthAuthNoMatchAckRcv(value: number) {
    this._hybridAuthAuthNoMatchAckRcv = value;
  }
  public resetHybridAuthAuthNoMatchAckRcv() {
    this._hybridAuthAuthNoMatchAckRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridAuthAuthNoMatchAckRcvInput() {
    return this._hybridAuthAuthNoMatchAckRcv;
  }

  // hybrid_auth_auth_no_match_rst_rcv - computed: false, optional: true, required: false
  private _hybridAuthAuthNoMatchRstRcv?: number; 
  public get hybridAuthAuthNoMatchRstRcv() {
    return this.getNumberAttribute('hybrid_auth_auth_no_match_rst_rcv');
  }
  public set hybridAuthAuthNoMatchRstRcv(value: number) {
    this._hybridAuthAuthNoMatchRstRcv = value;
  }
  public resetHybridAuthAuthNoMatchRstRcv() {
    this._hybridAuthAuthNoMatchRstRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridAuthAuthNoMatchRstRcvInput() {
    return this._hybridAuthAuthNoMatchRstRcv;
  }

  // hybrid_auth_entry_aged_out - computed: false, optional: true, required: false
  private _hybridAuthEntryAgedOut?: number; 
  public get hybridAuthEntryAgedOut() {
    return this.getNumberAttribute('hybrid_auth_entry_aged_out');
  }
  public set hybridAuthEntryAgedOut(value: number) {
    this._hybridAuthEntryAgedOut = value;
  }
  public resetHybridAuthEntryAgedOut() {
    this._hybridAuthEntryAgedOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridAuthEntryAgedOutInput() {
    return this._hybridAuthEntryAgedOut;
  }

  // hybrid_auth_filter_full - computed: false, optional: true, required: false
  private _hybridAuthFilterFull?: number; 
  public get hybridAuthFilterFull() {
    return this.getNumberAttribute('hybrid_auth_filter_full');
  }
  public set hybridAuthFilterFull(value: number) {
    this._hybridAuthFilterFull = value;
  }
  public resetHybridAuthFilterFull() {
    this._hybridAuthFilterFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridAuthFilterFullInput() {
    return this._hybridAuthFilterFull;
  }

  // hybrid_auth_invalid_fail - computed: false, optional: true, required: false
  private _hybridAuthInvalidFail?: number; 
  public get hybridAuthInvalidFail() {
    return this.getNumberAttribute('hybrid_auth_invalid_fail');
  }
  public set hybridAuthInvalidFail(value: number) {
    this._hybridAuthInvalidFail = value;
  }
  public resetHybridAuthInvalidFail() {
    this._hybridAuthInvalidFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridAuthInvalidFailInput() {
    return this._hybridAuthInvalidFail;
  }

  // hybrid_auth_invalid_pass - computed: false, optional: true, required: false
  private _hybridAuthInvalidPass?: number; 
  public get hybridAuthInvalidPass() {
    return this.getNumberAttribute('hybrid_auth_invalid_pass');
  }
  public set hybridAuthInvalidPass(value: number) {
    this._hybridAuthInvalidPass = value;
  }
  public resetHybridAuthInvalidPass() {
    this._hybridAuthInvalidPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridAuthInvalidPassInput() {
    return this._hybridAuthInvalidPass;
  }

  // hybrid_auth_invalid_sa_sent - computed: false, optional: true, required: false
  private _hybridAuthInvalidSaSent?: number; 
  public get hybridAuthInvalidSaSent() {
    return this.getNumberAttribute('hybrid_auth_invalid_sa_sent');
  }
  public set hybridAuthInvalidSaSent(value: number) {
    this._hybridAuthInvalidSaSent = value;
  }
  public resetHybridAuthInvalidSaSent() {
    this._hybridAuthInvalidSaSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridAuthInvalidSaSentInput() {
    return this._hybridAuthInvalidSaSent;
  }

  // hybrid_auth_lookup_fail - computed: false, optional: true, required: false
  private _hybridAuthLookupFail?: number; 
  public get hybridAuthLookupFail() {
    return this.getNumberAttribute('hybrid_auth_lookup_fail');
  }
  public set hybridAuthLookupFail(value: number) {
    this._hybridAuthLookupFail = value;
  }
  public resetHybridAuthLookupFail() {
    this._hybridAuthLookupFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridAuthLookupFailInput() {
    return this._hybridAuthLookupFail;
  }

  // hybrid_auth_method_change - computed: false, optional: true, required: false
  private _hybridAuthMethodChange?: number; 
  public get hybridAuthMethodChange() {
    return this.getNumberAttribute('hybrid_auth_method_change');
  }
  public set hybridAuthMethodChange(value: number) {
    this._hybridAuthMethodChange = value;
  }
  public resetHybridAuthMethodChange() {
    this._hybridAuthMethodChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridAuthMethodChangeInput() {
    return this._hybridAuthMethodChange;
  }

  // hybrid_auth_unknown_fail - computed: false, optional: true, required: false
  private _hybridAuthUnknownFail?: number; 
  public get hybridAuthUnknownFail() {
    return this.getNumberAttribute('hybrid_auth_unknown_fail');
  }
  public set hybridAuthUnknownFail(value: number) {
    this._hybridAuthUnknownFail = value;
  }
  public resetHybridAuthUnknownFail() {
    this._hybridAuthUnknownFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridAuthUnknownFailInput() {
    return this._hybridAuthUnknownFail;
  }

  // hybrid_auth_unknown_pass - computed: false, optional: true, required: false
  private _hybridAuthUnknownPass?: number; 
  public get hybridAuthUnknownPass() {
    return this.getNumberAttribute('hybrid_auth_unknown_pass');
  }
  public set hybridAuthUnknownPass(value: number) {
    this._hybridAuthUnknownPass = value;
  }
  public resetHybridAuthUnknownPass() {
    this._hybridAuthUnknownPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridAuthUnknownPassInput() {
    return this._hybridAuthUnknownPass;
  }

  // hybrid_auth_valid_fail - computed: false, optional: true, required: false
  private _hybridAuthValidFail?: number; 
  public get hybridAuthValidFail() {
    return this.getNumberAttribute('hybrid_auth_valid_fail');
  }
  public set hybridAuthValidFail(value: number) {
    this._hybridAuthValidFail = value;
  }
  public resetHybridAuthValidFail() {
    this._hybridAuthValidFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridAuthValidFailInput() {
    return this._hybridAuthValidFail;
  }

  // hybrid_auth_valid_pass - computed: false, optional: true, required: false
  private _hybridAuthValidPass?: number; 
  public get hybridAuthValidPass() {
    return this.getNumberAttribute('hybrid_auth_valid_pass');
  }
  public set hybridAuthValidPass(value: number) {
    this._hybridAuthValidPass = value;
  }
  public resetHybridAuthValidPass() {
    this._hybridAuthValidPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridAuthValidPassInput() {
    return this._hybridAuthValidPass;
  }

  // hybrid_auth_valid_sa_sent - computed: false, optional: true, required: false
  private _hybridAuthValidSaSent?: number; 
  public get hybridAuthValidSaSent() {
    return this.getNumberAttribute('hybrid_auth_valid_sa_sent');
  }
  public set hybridAuthValidSaSent(value: number) {
    this._hybridAuthValidSaSent = value;
  }
  public resetHybridAuthValidSaSent() {
    this._hybridAuthValidSaSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridAuthValidSaSentInput() {
    return this._hybridAuthValidSaSent;
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

  // out_of_seq_excd - computed: false, optional: true, required: false
  private _outOfSeqExcd?: number; 
  public get outOfSeqExcd() {
    return this.getNumberAttribute('out_of_seq_excd');
  }
  public set outOfSeqExcd(value: number) {
    this._outOfSeqExcd = value;
  }
  public resetOutOfSeqExcd() {
    this._outOfSeqExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfSeqExcdInput() {
    return this._outOfSeqExcd;
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

  // port_syn_rate_exceed - computed: false, optional: true, required: false
  private _portSynRateExceed?: number; 
  public get portSynRateExceed() {
    return this.getNumberAttribute('port_syn_rate_exceed');
  }
  public set portSynRateExceed(value: number) {
    this._portSynRateExceed = value;
  }
  public resetPortSynRateExceed() {
    this._portSynRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSynRateExceedInput() {
    return this._portSynRateExceed;
  }

  // port_synack_rate_exceed - computed: false, optional: true, required: false
  private _portSynackRateExceed?: number; 
  public get portSynackRateExceed() {
    return this.getNumberAttribute('port_synack_rate_exceed');
  }
  public set portSynackRateExceed(value: number) {
    this._portSynackRateExceed = value;
  }
  public resetPortSynackRateExceed() {
    this._portSynackRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSynackRateExceedInput() {
    return this._portSynackRateExceed;
  }

  // prog_conn_exceed_bl - computed: false, optional: true, required: false
  private _progConnExceedBl?: number; 
  public get progConnExceedBl() {
    return this.getNumberAttribute('prog_conn_exceed_bl');
  }
  public set progConnExceedBl(value: number) {
    this._progConnExceedBl = value;
  }
  public resetProgConnExceedBl() {
    this._progConnExceedBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progConnExceedBlInput() {
    return this._progConnExceedBl;
  }

  // prog_conn_exceed_drop - computed: false, optional: true, required: false
  private _progConnExceedDrop?: number; 
  public get progConnExceedDrop() {
    return this.getNumberAttribute('prog_conn_exceed_drop');
  }
  public set progConnExceedDrop(value: number) {
    this._progConnExceedDrop = value;
  }
  public resetProgConnExceedDrop() {
    this._progConnExceedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progConnExceedDropInput() {
    return this._progConnExceedDrop;
  }

  // prog_conn_exceed_reset - computed: false, optional: true, required: false
  private _progConnExceedReset?: number; 
  public get progConnExceedReset() {
    return this.getNumberAttribute('prog_conn_exceed_reset');
  }
  public set progConnExceedReset(value: number) {
    this._progConnExceedReset = value;
  }
  public resetProgConnExceedReset() {
    this._progConnExceedReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progConnExceedResetInput() {
    return this._progConnExceedReset;
  }

  // prog_conn_rcvd_exceed - computed: false, optional: true, required: false
  private _progConnRcvdExceed?: number; 
  public get progConnRcvdExceed() {
    return this.getNumberAttribute('prog_conn_rcvd_exceed');
  }
  public set progConnRcvdExceed(value: number) {
    this._progConnRcvdExceed = value;
  }
  public resetProgConnRcvdExceed() {
    this._progConnRcvdExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progConnRcvdExceedInput() {
    return this._progConnRcvdExceed;
  }

  // prog_conn_rcvd_sent_ratio_exceed - computed: false, optional: true, required: false
  private _progConnRcvdSentRatioExceed?: number; 
  public get progConnRcvdSentRatioExceed() {
    return this.getNumberAttribute('prog_conn_rcvd_sent_ratio_exceed');
  }
  public set progConnRcvdSentRatioExceed(value: number) {
    this._progConnRcvdSentRatioExceed = value;
  }
  public resetProgConnRcvdSentRatioExceed() {
    this._progConnRcvdSentRatioExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progConnRcvdSentRatioExceedInput() {
    return this._progConnRcvdSentRatioExceed;
  }

  // prog_conn_samples - computed: false, optional: true, required: false
  private _progConnSamples?: number; 
  public get progConnSamples() {
    return this.getNumberAttribute('prog_conn_samples');
  }
  public set progConnSamples(value: number) {
    this._progConnSamples = value;
  }
  public resetProgConnSamples() {
    this._progConnSamples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progConnSamplesInput() {
    return this._progConnSamples;
  }

  // prog_conn_samples_processed - computed: false, optional: true, required: false
  private _progConnSamplesProcessed?: number; 
  public get progConnSamplesProcessed() {
    return this.getNumberAttribute('prog_conn_samples_processed');
  }
  public set progConnSamplesProcessed(value: number) {
    this._progConnSamplesProcessed = value;
  }
  public resetProgConnSamplesProcessed() {
    this._progConnSamplesProcessed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progConnSamplesProcessedInput() {
    return this._progConnSamplesProcessed;
  }

  // prog_conn_sent_exceed - computed: false, optional: true, required: false
  private _progConnSentExceed?: number; 
  public get progConnSentExceed() {
    return this.getNumberAttribute('prog_conn_sent_exceed');
  }
  public set progConnSentExceed(value: number) {
    this._progConnSentExceed = value;
  }
  public resetProgConnSentExceed() {
    this._progConnSentExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progConnSentExceedInput() {
    return this._progConnSentExceed;
  }

  // prog_conn_time_exceed - computed: false, optional: true, required: false
  private _progConnTimeExceed?: number; 
  public get progConnTimeExceed() {
    return this.getNumberAttribute('prog_conn_time_exceed');
  }
  public set progConnTimeExceed(value: number) {
    this._progConnTimeExceed = value;
  }
  public resetProgConnTimeExceed() {
    this._progConnTimeExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progConnTimeExceedInput() {
    return this._progConnTimeExceed;
  }

  // prog_exceed_bl - computed: false, optional: true, required: false
  private _progExceedBl?: number; 
  public get progExceedBl() {
    return this.getNumberAttribute('prog_exceed_bl');
  }
  public set progExceedBl(value: number) {
    this._progExceedBl = value;
  }
  public resetProgExceedBl() {
    this._progExceedBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progExceedBlInput() {
    return this._progExceedBl;
  }

  // prog_exceed_drop - computed: false, optional: true, required: false
  private _progExceedDrop?: number; 
  public get progExceedDrop() {
    return this.getNumberAttribute('prog_exceed_drop');
  }
  public set progExceedDrop(value: number) {
    this._progExceedDrop = value;
  }
  public resetProgExceedDrop() {
    this._progExceedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progExceedDropInput() {
    return this._progExceedDrop;
  }

  // prog_exceed_reset - computed: false, optional: true, required: false
  private _progExceedReset?: number; 
  public get progExceedReset() {
    return this.getNumberAttribute('prog_exceed_reset');
  }
  public set progExceedReset(value: number) {
    this._progExceedReset = value;
  }
  public resetProgExceedReset() {
    this._progExceedReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progExceedResetInput() {
    return this._progExceedReset;
  }

  // prog_first_req_time_exceed - computed: false, optional: true, required: false
  private _progFirstReqTimeExceed?: number; 
  public get progFirstReqTimeExceed() {
    return this.getNumberAttribute('prog_first_req_time_exceed');
  }
  public set progFirstReqTimeExceed(value: number) {
    this._progFirstReqTimeExceed = value;
  }
  public resetProgFirstReqTimeExceed() {
    this._progFirstReqTimeExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progFirstReqTimeExceedInput() {
    return this._progFirstReqTimeExceed;
  }

  // prog_query_exceed - computed: false, optional: true, required: false
  private _progQueryExceed?: number; 
  public get progQueryExceed() {
    return this.getNumberAttribute('prog_query_exceed');
  }
  public set progQueryExceed(value: number) {
    this._progQueryExceed = value;
  }
  public resetProgQueryExceed() {
    this._progQueryExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progQueryExceedInput() {
    return this._progQueryExceed;
  }

  // prog_req_resp_time_exceed - computed: false, optional: true, required: false
  private _progReqRespTimeExceed?: number; 
  public get progReqRespTimeExceed() {
    return this.getNumberAttribute('prog_req_resp_time_exceed');
  }
  public set progReqRespTimeExceed(value: number) {
    this._progReqRespTimeExceed = value;
  }
  public resetProgReqRespTimeExceed() {
    this._progReqRespTimeExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progReqRespTimeExceedInput() {
    return this._progReqRespTimeExceed;
  }

  // prog_req_samples - computed: false, optional: true, required: false
  private _progReqSamples?: number; 
  public get progReqSamples() {
    return this.getNumberAttribute('prog_req_samples');
  }
  public set progReqSamples(value: number) {
    this._progReqSamples = value;
  }
  public resetProgReqSamples() {
    this._progReqSamples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progReqSamplesInput() {
    return this._progReqSamples;
  }

  // prog_req_samples_processed - computed: false, optional: true, required: false
  private _progReqSamplesProcessed?: number; 
  public get progReqSamplesProcessed() {
    return this.getNumberAttribute('prog_req_samples_processed');
  }
  public set progReqSamplesProcessed(value: number) {
    this._progReqSamplesProcessed = value;
  }
  public resetProgReqSamplesProcessed() {
    this._progReqSamplesProcessed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progReqSamplesProcessedInput() {
    return this._progReqSamplesProcessed;
  }

  // prog_request_len_exceed - computed: false, optional: true, required: false
  private _progRequestLenExceed?: number; 
  public get progRequestLenExceed() {
    return this.getNumberAttribute('prog_request_len_exceed');
  }
  public set progRequestLenExceed(value: number) {
    this._progRequestLenExceed = value;
  }
  public resetProgRequestLenExceed() {
    this._progRequestLenExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progRequestLenExceedInput() {
    return this._progRequestLenExceed;
  }

  // prog_resp_pkt_rate_exceed - computed: false, optional: true, required: false
  private _progRespPktRateExceed?: number; 
  public get progRespPktRateExceed() {
    return this.getNumberAttribute('prog_resp_pkt_rate_exceed');
  }
  public set progRespPktRateExceed(value: number) {
    this._progRespPktRateExceed = value;
  }
  public resetProgRespPktRateExceed() {
    this._progRespPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progRespPktRateExceedInput() {
    return this._progRespPktRateExceed;
  }

  // prog_resp_req_time_exceed - computed: false, optional: true, required: false
  private _progRespReqTimeExceed?: number; 
  public get progRespReqTimeExceed() {
    return this.getNumberAttribute('prog_resp_req_time_exceed');
  }
  public set progRespReqTimeExceed(value: number) {
    this._progRespReqTimeExceed = value;
  }
  public resetProgRespReqTimeExceed() {
    this._progRespReqTimeExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progRespReqTimeExceedInput() {
    return this._progRespReqTimeExceed;
  }

  // prog_response_len_exceed - computed: false, optional: true, required: false
  private _progResponseLenExceed?: number; 
  public get progResponseLenExceed() {
    return this.getNumberAttribute('prog_response_len_exceed');
  }
  public set progResponseLenExceed(value: number) {
    this._progResponseLenExceed = value;
  }
  public resetProgResponseLenExceed() {
    this._progResponseLenExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progResponseLenExceedInput() {
    return this._progResponseLenExceed;
  }

  // prog_think_exceed - computed: false, optional: true, required: false
  private _progThinkExceed?: number; 
  public get progThinkExceed() {
    return this.getNumberAttribute('prog_think_exceed');
  }
  public set progThinkExceed(value: number) {
    this._progThinkExceed = value;
  }
  public resetProgThinkExceed() {
    this._progThinkExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progThinkExceedInput() {
    return this._progThinkExceed;
  }

  // prog_win_exceed_bl - computed: false, optional: true, required: false
  private _progWinExceedBl?: number; 
  public get progWinExceedBl() {
    return this.getNumberAttribute('prog_win_exceed_bl');
  }
  public set progWinExceedBl(value: number) {
    this._progWinExceedBl = value;
  }
  public resetProgWinExceedBl() {
    this._progWinExceedBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progWinExceedBlInput() {
    return this._progWinExceedBl;
  }

  // prog_win_exceed_drop - computed: false, optional: true, required: false
  private _progWinExceedDrop?: number; 
  public get progWinExceedDrop() {
    return this.getNumberAttribute('prog_win_exceed_drop');
  }
  public set progWinExceedDrop(value: number) {
    this._progWinExceedDrop = value;
  }
  public resetProgWinExceedDrop() {
    this._progWinExceedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progWinExceedDropInput() {
    return this._progWinExceedDrop;
  }

  // prog_win_exceed_reset - computed: false, optional: true, required: false
  private _progWinExceedReset?: number; 
  public get progWinExceedReset() {
    return this.getNumberAttribute('prog_win_exceed_reset');
  }
  public set progWinExceedReset(value: number) {
    this._progWinExceedReset = value;
  }
  public resetProgWinExceedReset() {
    this._progWinExceedReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progWinExceedResetInput() {
    return this._progWinExceedReset;
  }

  // prog_win_rcvd_exceed - computed: false, optional: true, required: false
  private _progWinRcvdExceed?: number; 
  public get progWinRcvdExceed() {
    return this.getNumberAttribute('prog_win_rcvd_exceed');
  }
  public set progWinRcvdExceed(value: number) {
    this._progWinRcvdExceed = value;
  }
  public resetProgWinRcvdExceed() {
    this._progWinRcvdExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progWinRcvdExceedInput() {
    return this._progWinRcvdExceed;
  }

  // prog_win_rcvd_sent_ratio_exceed - computed: false, optional: true, required: false
  private _progWinRcvdSentRatioExceed?: number; 
  public get progWinRcvdSentRatioExceed() {
    return this.getNumberAttribute('prog_win_rcvd_sent_ratio_exceed');
  }
  public set progWinRcvdSentRatioExceed(value: number) {
    this._progWinRcvdSentRatioExceed = value;
  }
  public resetProgWinRcvdSentRatioExceed() {
    this._progWinRcvdSentRatioExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progWinRcvdSentRatioExceedInput() {
    return this._progWinRcvdSentRatioExceed;
  }

  // prog_win_samples - computed: false, optional: true, required: false
  private _progWinSamples?: number; 
  public get progWinSamples() {
    return this.getNumberAttribute('prog_win_samples');
  }
  public set progWinSamples(value: number) {
    this._progWinSamples = value;
  }
  public resetProgWinSamples() {
    this._progWinSamples = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progWinSamplesInput() {
    return this._progWinSamples;
  }

  // prog_win_samples_processed - computed: false, optional: true, required: false
  private _progWinSamplesProcessed?: number; 
  public get progWinSamplesProcessed() {
    return this.getNumberAttribute('prog_win_samples_processed');
  }
  public set progWinSamplesProcessed(value: number) {
    this._progWinSamplesProcessed = value;
  }
  public resetProgWinSamplesProcessed() {
    this._progWinSamplesProcessed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progWinSamplesProcessedInput() {
    return this._progWinSamplesProcessed;
  }

  // prog_win_sent_exceed - computed: false, optional: true, required: false
  private _progWinSentExceed?: number; 
  public get progWinSentExceed() {
    return this.getNumberAttribute('prog_win_sent_exceed');
  }
  public set progWinSentExceed(value: number) {
    this._progWinSentExceed = value;
  }
  public resetProgWinSentExceed() {
    this._progWinSentExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progWinSentExceedInput() {
    return this._progWinSentExceed;
  }

  // retransmit_excd - computed: false, optional: true, required: false
  private _retransmitExcd?: number; 
  public get retransmitExcd() {
    return this.getNumberAttribute('retransmit_excd');
  }
  public set retransmitExcd(value: number) {
    this._retransmitExcd = value;
  }
  public resetRetransmitExcd() {
    this._retransmitExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransmitExcdInput() {
    return this._retransmitExcd;
  }

  // rst_cookie_fail - computed: false, optional: true, required: false
  private _rstCookieFail?: number; 
  public get rstCookieFail() {
    return this.getNumberAttribute('rst_cookie_fail');
  }
  public set rstCookieFail(value: number) {
    this._rstCookieFail = value;
  }
  public resetRstCookieFail() {
    this._rstCookieFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rstCookieFailInput() {
    return this._rstCookieFail;
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

  // small_window_excd - computed: false, optional: true, required: false
  private _smallWindowExcd?: number; 
  public get smallWindowExcd() {
    return this.getNumberAttribute('small_window_excd');
  }
  public set smallWindowExcd(value: number) {
    this._smallWindowExcd = value;
  }
  public resetSmallWindowExcd() {
    this._smallWindowExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smallWindowExcdInput() {
    return this._smallWindowExcd;
  }

  // small_window_rcv - computed: false, optional: true, required: false
  private _smallWindowRcv?: number; 
  public get smallWindowRcv() {
    return this.getNumberAttribute('small_window_rcv');
  }
  public set smallWindowRcv(value: number) {
    this._smallWindowRcv = value;
  }
  public resetSmallWindowRcv() {
    this._smallWindowRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smallWindowRcvInput() {
    return this._smallWindowRcv;
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

  // src_ack_auth_fail - computed: false, optional: true, required: false
  private _srcAckAuthFail?: number; 
  public get srcAckAuthFail() {
    return this.getNumberAttribute('src_ack_auth_fail');
  }
  public set srcAckAuthFail(value: number) {
    this._srcAckAuthFail = value;
  }
  public resetSrcAckAuthFail() {
    this._srcAckAuthFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAckAuthFailInput() {
    return this._srcAckAuthFail;
  }

  // src_ack_retry_blacklist - computed: false, optional: true, required: false
  private _srcAckRetryBlacklist?: number; 
  public get srcAckRetryBlacklist() {
    return this.getNumberAttribute('src_ack_retry_blacklist');
  }
  public set srcAckRetryBlacklist(value: number) {
    this._srcAckRetryBlacklist = value;
  }
  public resetSrcAckRetryBlacklist() {
    this._srcAckRetryBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAckRetryBlacklistInput() {
    return this._srcAckRetryBlacklist;
  }

  // src_ack_retry_gap_drop - computed: false, optional: true, required: false
  private _srcAckRetryGapDrop?: number; 
  public get srcAckRetryGapDrop() {
    return this.getNumberAttribute('src_ack_retry_gap_drop');
  }
  public set srcAckRetryGapDrop(value: number) {
    this._srcAckRetryGapDrop = value;
  }
  public resetSrcAckRetryGapDrop() {
    this._srcAckRetryGapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAckRetryGapDropInput() {
    return this._srcAckRetryGapDrop;
  }

  // src_ack_retry_init - computed: false, optional: true, required: false
  private _srcAckRetryInit?: number; 
  public get srcAckRetryInit() {
    return this.getNumberAttribute('src_ack_retry_init');
  }
  public set srcAckRetryInit(value: number) {
    this._srcAckRetryInit = value;
  }
  public resetSrcAckRetryInit() {
    this._srcAckRetryInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAckRetryInitInput() {
    return this._srcAckRetryInit;
  }

  // src_ack_retry_reset - computed: false, optional: true, required: false
  private _srcAckRetryReset?: number; 
  public get srcAckRetryReset() {
    return this.getNumberAttribute('src_ack_retry_reset');
  }
  public set srcAckRetryReset(value: number) {
    this._srcAckRetryReset = value;
  }
  public resetSrcAckRetryReset() {
    this._srcAckRetryReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAckRetryResetInput() {
    return this._srcAckRetryReset;
  }

  // src_ack_retry_rto_fail - computed: false, optional: true, required: false
  private _srcAckRetryRtoFail?: number; 
  public get srcAckRetryRtoFail() {
    return this.getNumberAttribute('src_ack_retry_rto_fail');
  }
  public set srcAckRetryRtoFail(value: number) {
    this._srcAckRetryRtoFail = value;
  }
  public resetSrcAckRetryRtoFail() {
    this._srcAckRetryRtoFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAckRetryRtoFailInput() {
    return this._srcAckRetryRtoFail;
  }

  // src_ack_retry_rto_pass - computed: false, optional: true, required: false
  private _srcAckRetryRtoPass?: number; 
  public get srcAckRetryRtoPass() {
    return this.getNumberAttribute('src_ack_retry_rto_pass');
  }
  public set srcAckRetryRtoPass(value: number) {
    this._srcAckRetryRtoPass = value;
  }
  public resetSrcAckRetryRtoPass() {
    this._srcAckRetryRtoPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAckRetryRtoPassInput() {
    return this._srcAckRetryRtoPass;
  }

  // src_ack_retry_rto_progress - computed: false, optional: true, required: false
  private _srcAckRetryRtoProgress?: number; 
  public get srcAckRetryRtoProgress() {
    return this.getNumberAttribute('src_ack_retry_rto_progress');
  }
  public set srcAckRetryRtoProgress(value: number) {
    this._srcAckRetryRtoProgress = value;
  }
  public resetSrcAckRetryRtoProgress() {
    this._srcAckRetryRtoProgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAckRetryRtoProgressInput() {
    return this._srcAckRetryRtoProgress;
  }

  // src_ack_retry_timeout - computed: false, optional: true, required: false
  private _srcAckRetryTimeout?: number; 
  public get srcAckRetryTimeout() {
    return this.getNumberAttribute('src_ack_retry_timeout');
  }
  public set srcAckRetryTimeout(value: number) {
    this._srcAckRetryTimeout = value;
  }
  public resetSrcAckRetryTimeout() {
    this._srcAckRetryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAckRetryTimeoutInput() {
    return this._srcAckRetryTimeout;
  }

  // src_auth_drop - computed: false, optional: true, required: false
  private _srcAuthDrop?: number; 
  public get srcAuthDrop() {
    return this.getNumberAttribute('src_auth_drop');
  }
  public set srcAuthDrop(value: number) {
    this._srcAuthDrop = value;
  }
  public resetSrcAuthDrop() {
    this._srcAuthDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAuthDropInput() {
    return this._srcAuthDrop;
  }

  // src_auth_drop_ack - computed: false, optional: true, required: false
  private _srcAuthDropAck?: number; 
  public get srcAuthDropAck() {
    return this.getNumberAttribute('src_auth_drop_ack');
  }
  public set srcAuthDropAck(value: number) {
    this._srcAuthDropAck = value;
  }
  public resetSrcAuthDropAck() {
    this._srcAuthDropAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAuthDropAckInput() {
    return this._srcAuthDropAck;
  }

  // src_auth_drop_ack_fail_auth - computed: false, optional: true, required: false
  private _srcAuthDropAckFailAuth?: number; 
  public get srcAuthDropAckFailAuth() {
    return this.getNumberAttribute('src_auth_drop_ack_fail_auth');
  }
  public set srcAuthDropAckFailAuth(value: number) {
    this._srcAuthDropAckFailAuth = value;
  }
  public resetSrcAuthDropAckFailAuth() {
    this._srcAuthDropAckFailAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAuthDropAckFailAuthInput() {
    return this._srcAuthDropAckFailAuth;
  }

  // src_auth_drop_ack_pass_auth - computed: false, optional: true, required: false
  private _srcAuthDropAckPassAuth?: number; 
  public get srcAuthDropAckPassAuth() {
    return this.getNumberAttribute('src_auth_drop_ack_pass_auth');
  }
  public set srcAuthDropAckPassAuth(value: number) {
    this._srcAuthDropAckPassAuth = value;
  }
  public resetSrcAuthDropAckPassAuth() {
    this._srcAuthDropAckPassAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAuthDropAckPassAuthInput() {
    return this._srcAuthDropAckPassAuth;
  }

  // src_auth_drop_ack_xmit - computed: false, optional: true, required: false
  private _srcAuthDropAckXmit?: number; 
  public get srcAuthDropAckXmit() {
    return this.getNumberAttribute('src_auth_drop_ack_xmit');
  }
  public set srcAuthDropAckXmit(value: number) {
    this._srcAuthDropAckXmit = value;
  }
  public resetSrcAuthDropAckXmit() {
    this._srcAuthDropAckXmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAuthDropAckXmitInput() {
    return this._srcAuthDropAckXmit;
  }

  // src_auth_drop_rst - computed: false, optional: true, required: false
  private _srcAuthDropRst?: number; 
  public get srcAuthDropRst() {
    return this.getNumberAttribute('src_auth_drop_rst');
  }
  public set srcAuthDropRst(value: number) {
    this._srcAuthDropRst = value;
  }
  public resetSrcAuthDropRst() {
    this._srcAuthDropRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAuthDropRstInput() {
    return this._srcAuthDropRst;
  }

  // src_auth_drop_rst_fail_auth - computed: false, optional: true, required: false
  private _srcAuthDropRstFailAuth?: number; 
  public get srcAuthDropRstFailAuth() {
    return this.getNumberAttribute('src_auth_drop_rst_fail_auth');
  }
  public set srcAuthDropRstFailAuth(value: number) {
    this._srcAuthDropRstFailAuth = value;
  }
  public resetSrcAuthDropRstFailAuth() {
    this._srcAuthDropRstFailAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAuthDropRstFailAuthInput() {
    return this._srcAuthDropRstFailAuth;
  }

  // src_auth_drop_rst_pass_auth - computed: false, optional: true, required: false
  private _srcAuthDropRstPassAuth?: number; 
  public get srcAuthDropRstPassAuth() {
    return this.getNumberAttribute('src_auth_drop_rst_pass_auth');
  }
  public set srcAuthDropRstPassAuth(value: number) {
    this._srcAuthDropRstPassAuth = value;
  }
  public resetSrcAuthDropRstPassAuth() {
    this._srcAuthDropRstPassAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAuthDropRstPassAuthInput() {
    return this._srcAuthDropRstPassAuth;
  }

  // src_auth_drop_rst_xmit - computed: false, optional: true, required: false
  private _srcAuthDropRstXmit?: number; 
  public get srcAuthDropRstXmit() {
    return this.getNumberAttribute('src_auth_drop_rst_xmit');
  }
  public set srcAuthDropRstXmit(value: number) {
    this._srcAuthDropRstXmit = value;
  }
  public resetSrcAuthDropRstXmit() {
    this._srcAuthDropRstXmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAuthDropRstXmitInput() {
    return this._srcAuthDropRstXmit;
  }

  // src_auth_drop_syn - computed: false, optional: true, required: false
  private _srcAuthDropSyn?: number; 
  public get srcAuthDropSyn() {
    return this.getNumberAttribute('src_auth_drop_syn');
  }
  public set srcAuthDropSyn(value: number) {
    this._srcAuthDropSyn = value;
  }
  public resetSrcAuthDropSyn() {
    this._srcAuthDropSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAuthDropSynInput() {
    return this._srcAuthDropSyn;
  }

  // src_conn_ofo_rate_excd - computed: false, optional: true, required: false
  private _srcConnOfoRateExcd?: number; 
  public get srcConnOfoRateExcd() {
    return this.getNumberAttribute('src_conn_ofo_rate_excd');
  }
  public set srcConnOfoRateExcd(value: number) {
    this._srcConnOfoRateExcd = value;
  }
  public resetSrcConnOfoRateExcd() {
    this._srcConnOfoRateExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcConnOfoRateExcdInput() {
    return this._srcConnOfoRateExcd;
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

  // src_conn_rexmit_rate_excd - computed: false, optional: true, required: false
  private _srcConnRexmitRateExcd?: number; 
  public get srcConnRexmitRateExcd() {
    return this.getNumberAttribute('src_conn_rexmit_rate_excd');
  }
  public set srcConnRexmitRateExcd(value: number) {
    this._srcConnRexmitRateExcd = value;
  }
  public resetSrcConnRexmitRateExcd() {
    this._srcConnRexmitRateExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcConnRexmitRateExcdInput() {
    return this._srcConnRexmitRateExcd;
  }

  // src_conn_zwindow_rate_excd - computed: false, optional: true, required: false
  private _srcConnZwindowRateExcd?: number; 
  public get srcConnZwindowRateExcd() {
    return this.getNumberAttribute('src_conn_zwindow_rate_excd');
  }
  public set srcConnZwindowRateExcd(value: number) {
    this._srcConnZwindowRateExcd = value;
  }
  public resetSrcConnZwindowRateExcd() {
    this._srcConnZwindowRateExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcConnZwindowRateExcdInput() {
    return this._srcConnZwindowRateExcd;
  }

  // src_create_conn_non_syn_dropped - computed: false, optional: true, required: false
  private _srcCreateConnNonSynDropped?: number; 
  public get srcCreateConnNonSynDropped() {
    return this.getNumberAttribute('src_create_conn_non_syn_dropped');
  }
  public set srcCreateConnNonSynDropped(value: number) {
    this._srcCreateConnNonSynDropped = value;
  }
  public resetSrcCreateConnNonSynDropped() {
    this._srcCreateConnNonSynDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCreateConnNonSynDroppedInput() {
    return this._srcCreateConnNonSynDropped;
  }

  // src_create_conn_non_syn_rst - computed: false, optional: true, required: false
  private _srcCreateConnNonSynRst?: number; 
  public get srcCreateConnNonSynRst() {
    return this.getNumberAttribute('src_create_conn_non_syn_rst');
  }
  public set srcCreateConnNonSynRst(value: number) {
    this._srcCreateConnNonSynRst = value;
  }
  public resetSrcCreateConnNonSynRst() {
    this._srcCreateConnNonSynRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCreateConnNonSynRstInput() {
    return this._srcCreateConnNonSynRst;
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

  // src_out_of_seq_excd - computed: false, optional: true, required: false
  private _srcOutOfSeqExcd?: number; 
  public get srcOutOfSeqExcd() {
    return this.getNumberAttribute('src_out_of_seq_excd');
  }
  public set srcOutOfSeqExcd(value: number) {
    this._srcOutOfSeqExcd = value;
  }
  public resetSrcOutOfSeqExcd() {
    this._srcOutOfSeqExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcOutOfSeqExcdInput() {
    return this._srcOutOfSeqExcd;
  }

  // src_retransmit_excd - computed: false, optional: true, required: false
  private _srcRetransmitExcd?: number; 
  public get srcRetransmitExcd() {
    return this.getNumberAttribute('src_retransmit_excd');
  }
  public set srcRetransmitExcd(value: number) {
    this._srcRetransmitExcd = value;
  }
  public resetSrcRetransmitExcd() {
    this._srcRetransmitExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRetransmitExcdInput() {
    return this._srcRetransmitExcd;
  }

  // src_rst_cookie_fail - computed: false, optional: true, required: false
  private _srcRstCookieFail?: number; 
  public get srcRstCookieFail() {
    return this.getNumberAttribute('src_rst_cookie_fail');
  }
  public set srcRstCookieFail(value: number) {
    this._srcRstCookieFail = value;
  }
  public resetSrcRstCookieFail() {
    this._srcRstCookieFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRstCookieFailInput() {
    return this._srcRstCookieFail;
  }

  // src_small_window_excd - computed: false, optional: true, required: false
  private _srcSmallWindowExcd?: number; 
  public get srcSmallWindowExcd() {
    return this.getNumberAttribute('src_small_window_excd');
  }
  public set srcSmallWindowExcd(value: number) {
    this._srcSmallWindowExcd = value;
  }
  public resetSrcSmallWindowExcd() {
    this._srcSmallWindowExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSmallWindowExcdInput() {
    return this._srcSmallWindowExcd;
  }

  // src_syn_auth_fail - computed: false, optional: true, required: false
  private _srcSynAuthFail?: number; 
  public get srcSynAuthFail() {
    return this.getNumberAttribute('src_syn_auth_fail');
  }
  public set srcSynAuthFail(value: number) {
    this._srcSynAuthFail = value;
  }
  public resetSrcSynAuthFail() {
    this._srcSynAuthFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSynAuthFailInput() {
    return this._srcSynAuthFail;
  }

  // src_syn_cookie_fail - computed: false, optional: true, required: false
  private _srcSynCookieFail?: number; 
  public get srcSynCookieFail() {
    return this.getNumberAttribute('src_syn_cookie_fail');
  }
  public set srcSynCookieFail(value: number) {
    this._srcSynCookieFail = value;
  }
  public resetSrcSynCookieFail() {
    this._srcSynCookieFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSynCookieFailInput() {
    return this._srcSynCookieFail;
  }

  // src_syn_cookie_sent - computed: false, optional: true, required: false
  private _srcSynCookieSent?: number; 
  public get srcSynCookieSent() {
    return this.getNumberAttribute('src_syn_cookie_sent');
  }
  public set srcSynCookieSent(value: number) {
    this._srcSynCookieSent = value;
  }
  public resetSrcSynCookieSent() {
    this._srcSynCookieSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSynCookieSentInput() {
    return this._srcSynCookieSent;
  }

  // src_syn_rate_exceed - computed: false, optional: true, required: false
  private _srcSynRateExceed?: number; 
  public get srcSynRateExceed() {
    return this.getNumberAttribute('src_syn_rate_exceed');
  }
  public set srcSynRateExceed(value: number) {
    this._srcSynRateExceed = value;
  }
  public resetSrcSynRateExceed() {
    this._srcSynRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSynRateExceedInput() {
    return this._srcSynRateExceed;
  }

  // src_syn_retry_blacklist - computed: false, optional: true, required: false
  private _srcSynRetryBlacklist?: number; 
  public get srcSynRetryBlacklist() {
    return this.getNumberAttribute('src_syn_retry_blacklist');
  }
  public set srcSynRetryBlacklist(value: number) {
    this._srcSynRetryBlacklist = value;
  }
  public resetSrcSynRetryBlacklist() {
    this._srcSynRetryBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSynRetryBlacklistInput() {
    return this._srcSynRetryBlacklist;
  }

  // src_syn_retry_failed - computed: false, optional: true, required: false
  private _srcSynRetryFailed?: number; 
  public get srcSynRetryFailed() {
    return this.getNumberAttribute('src_syn_retry_failed');
  }
  public set srcSynRetryFailed(value: number) {
    this._srcSynRetryFailed = value;
  }
  public resetSrcSynRetryFailed() {
    this._srcSynRetryFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSynRetryFailedInput() {
    return this._srcSynRetryFailed;
  }

  // src_syn_retry_gap_drop - computed: false, optional: true, required: false
  private _srcSynRetryGapDrop?: number; 
  public get srcSynRetryGapDrop() {
    return this.getNumberAttribute('src_syn_retry_gap_drop');
  }
  public set srcSynRetryGapDrop(value: number) {
    this._srcSynRetryGapDrop = value;
  }
  public resetSrcSynRetryGapDrop() {
    this._srcSynRetryGapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSynRetryGapDropInput() {
    return this._srcSynRetryGapDrop;
  }

  // src_syn_retry_init - computed: false, optional: true, required: false
  private _srcSynRetryInit?: number; 
  public get srcSynRetryInit() {
    return this.getNumberAttribute('src_syn_retry_init');
  }
  public set srcSynRetryInit(value: number) {
    this._srcSynRetryInit = value;
  }
  public resetSrcSynRetryInit() {
    this._srcSynRetryInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSynRetryInitInput() {
    return this._srcSynRetryInit;
  }

  // src_syn_retry_reset - computed: false, optional: true, required: false
  private _srcSynRetryReset?: number; 
  public get srcSynRetryReset() {
    return this.getNumberAttribute('src_syn_retry_reset');
  }
  public set srcSynRetryReset(value: number) {
    this._srcSynRetryReset = value;
  }
  public resetSrcSynRetryReset() {
    this._srcSynRetryReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSynRetryResetInput() {
    return this._srcSynRetryReset;
  }

  // src_syn_retry_rto_fail - computed: false, optional: true, required: false
  private _srcSynRetryRtoFail?: number; 
  public get srcSynRetryRtoFail() {
    return this.getNumberAttribute('src_syn_retry_rto_fail');
  }
  public set srcSynRetryRtoFail(value: number) {
    this._srcSynRetryRtoFail = value;
  }
  public resetSrcSynRetryRtoFail() {
    this._srcSynRetryRtoFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSynRetryRtoFailInput() {
    return this._srcSynRetryRtoFail;
  }

  // src_syn_retry_rto_pass - computed: false, optional: true, required: false
  private _srcSynRetryRtoPass?: number; 
  public get srcSynRetryRtoPass() {
    return this.getNumberAttribute('src_syn_retry_rto_pass');
  }
  public set srcSynRetryRtoPass(value: number) {
    this._srcSynRetryRtoPass = value;
  }
  public resetSrcSynRetryRtoPass() {
    this._srcSynRetryRtoPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSynRetryRtoPassInput() {
    return this._srcSynRetryRtoPass;
  }

  // src_syn_retry_rto_progress - computed: false, optional: true, required: false
  private _srcSynRetryRtoProgress?: number; 
  public get srcSynRetryRtoProgress() {
    return this.getNumberAttribute('src_syn_retry_rto_progress');
  }
  public set srcSynRetryRtoProgress(value: number) {
    this._srcSynRetryRtoProgress = value;
  }
  public resetSrcSynRetryRtoProgress() {
    this._srcSynRetryRtoProgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSynRetryRtoProgressInput() {
    return this._srcSynRetryRtoProgress;
  }

  // src_syn_retry_timeout - computed: false, optional: true, required: false
  private _srcSynRetryTimeout?: number; 
  public get srcSynRetryTimeout() {
    return this.getNumberAttribute('src_syn_retry_timeout');
  }
  public set srcSynRetryTimeout(value: number) {
    this._srcSynRetryTimeout = value;
  }
  public resetSrcSynRetryTimeout() {
    this._srcSynRetryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcSynRetryTimeoutInput() {
    return this._srcSynRetryTimeout;
  }

  // src_tcp_auth_rst - computed: false, optional: true, required: false
  private _srcTcpAuthRst?: number; 
  public get srcTcpAuthRst() {
    return this.getNumberAttribute('src_tcp_auth_rst');
  }
  public set srcTcpAuthRst(value: number) {
    this._srcTcpAuthRst = value;
  }
  public resetSrcTcpAuthRst() {
    this._srcTcpAuthRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpAuthRstInput() {
    return this._srcTcpAuthRst;
  }

  // src_unauth_drop - computed: false, optional: true, required: false
  private _srcUnauthDrop?: number; 
  public get srcUnauthDrop() {
    return this.getNumberAttribute('src_unauth_drop');
  }
  public set srcUnauthDrop(value: number) {
    this._srcUnauthDrop = value;
  }
  public resetSrcUnauthDrop() {
    this._srcUnauthDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUnauthDropInput() {
    return this._srcUnauthDrop;
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

  // src_zero_window_excd - computed: false, optional: true, required: false
  private _srcZeroWindowExcd?: number; 
  public get srcZeroWindowExcd() {
    return this.getNumberAttribute('src_zero_window_excd');
  }
  public set srcZeroWindowExcd(value: number) {
    this._srcZeroWindowExcd = value;
  }
  public resetSrcZeroWindowExcd() {
    this._srcZeroWindowExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcZeroWindowExcdInput() {
    return this._srcZeroWindowExcd;
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

  // syn_auth_fail - computed: false, optional: true, required: false
  private _synAuthFail?: number; 
  public get synAuthFail() {
    return this.getNumberAttribute('syn_auth_fail');
  }
  public set synAuthFail(value: number) {
    this._synAuthFail = value;
  }
  public resetSynAuthFail() {
    this._synAuthFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synAuthFailInput() {
    return this._synAuthFail;
  }

  // syn_auth_pass - computed: false, optional: true, required: false
  private _synAuthPass?: number; 
  public get synAuthPass() {
    return this.getNumberAttribute('syn_auth_pass');
  }
  public set synAuthPass(value: number) {
    this._synAuthPass = value;
  }
  public resetSynAuthPass() {
    this._synAuthPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synAuthPassInput() {
    return this._synAuthPass;
  }

  // syn_auth_rst_ack_drop - computed: false, optional: true, required: false
  private _synAuthRstAckDrop?: number; 
  public get synAuthRstAckDrop() {
    return this.getNumberAttribute('syn_auth_rst_ack_drop');
  }
  public set synAuthRstAckDrop(value: number) {
    this._synAuthRstAckDrop = value;
  }
  public resetSynAuthRstAckDrop() {
    this._synAuthRstAckDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synAuthRstAckDropInput() {
    return this._synAuthRstAckDrop;
  }

  // syn_cookie_fail - computed: false, optional: true, required: false
  private _synCookieFail?: number; 
  public get synCookieFail() {
    return this.getNumberAttribute('syn_cookie_fail');
  }
  public set synCookieFail(value: number) {
    this._synCookieFail = value;
  }
  public resetSynCookieFail() {
    this._synCookieFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookieFailInput() {
    return this._synCookieFail;
  }

  // syn_cookie_sent - computed: false, optional: true, required: false
  private _synCookieSent?: number; 
  public get synCookieSent() {
    return this.getNumberAttribute('syn_cookie_sent');
  }
  public set synCookieSent(value: number) {
    this._synCookieSent = value;
  }
  public resetSynCookieSent() {
    this._synCookieSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookieSentInput() {
    return this._synCookieSent;
  }

  // syn_drop - computed: false, optional: true, required: false
  private _synDrop?: number; 
  public get synDrop() {
    return this.getNumberAttribute('syn_drop');
  }
  public set synDrop(value: number) {
    this._synDrop = value;
  }
  public resetSynDrop() {
    this._synDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synDropInput() {
    return this._synDrop;
  }

  // syn_retry_blacklist - computed: false, optional: true, required: false
  private _synRetryBlacklist?: number; 
  public get synRetryBlacklist() {
    return this.getNumberAttribute('syn_retry_blacklist');
  }
  public set synRetryBlacklist(value: number) {
    this._synRetryBlacklist = value;
  }
  public resetSynRetryBlacklist() {
    this._synRetryBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synRetryBlacklistInput() {
    return this._synRetryBlacklist;
  }

  // syn_retry_failed - computed: false, optional: true, required: false
  private _synRetryFailed?: number; 
  public get synRetryFailed() {
    return this.getNumberAttribute('syn_retry_failed');
  }
  public set synRetryFailed(value: number) {
    this._synRetryFailed = value;
  }
  public resetSynRetryFailed() {
    this._synRetryFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synRetryFailedInput() {
    return this._synRetryFailed;
  }

  // syn_retry_gap_drop - computed: false, optional: true, required: false
  private _synRetryGapDrop?: number; 
  public get synRetryGapDrop() {
    return this.getNumberAttribute('syn_retry_gap_drop');
  }
  public set synRetryGapDrop(value: number) {
    this._synRetryGapDrop = value;
  }
  public resetSynRetryGapDrop() {
    this._synRetryGapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synRetryGapDropInput() {
    return this._synRetryGapDrop;
  }

  // syn_retry_init - computed: false, optional: true, required: false
  private _synRetryInit?: number; 
  public get synRetryInit() {
    return this.getNumberAttribute('syn_retry_init');
  }
  public set synRetryInit(value: number) {
    this._synRetryInit = value;
  }
  public resetSynRetryInit() {
    this._synRetryInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synRetryInitInput() {
    return this._synRetryInit;
  }

  // syn_retry_pass - computed: false, optional: true, required: false
  private _synRetryPass?: number; 
  public get synRetryPass() {
    return this.getNumberAttribute('syn_retry_pass');
  }
  public set synRetryPass(value: number) {
    this._synRetryPass = value;
  }
  public resetSynRetryPass() {
    this._synRetryPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synRetryPassInput() {
    return this._synRetryPass;
  }

  // syn_retry_reset - computed: false, optional: true, required: false
  private _synRetryReset?: number; 
  public get synRetryReset() {
    return this.getNumberAttribute('syn_retry_reset');
  }
  public set synRetryReset(value: number) {
    this._synRetryReset = value;
  }
  public resetSynRetryReset() {
    this._synRetryReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synRetryResetInput() {
    return this._synRetryReset;
  }

  // syn_retry_rto_fail - computed: false, optional: true, required: false
  private _synRetryRtoFail?: number; 
  public get synRetryRtoFail() {
    return this.getNumberAttribute('syn_retry_rto_fail');
  }
  public set synRetryRtoFail(value: number) {
    this._synRetryRtoFail = value;
  }
  public resetSynRetryRtoFail() {
    this._synRetryRtoFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synRetryRtoFailInput() {
    return this._synRetryRtoFail;
  }

  // syn_retry_rto_pass - computed: false, optional: true, required: false
  private _synRetryRtoPass?: number; 
  public get synRetryRtoPass() {
    return this.getNumberAttribute('syn_retry_rto_pass');
  }
  public set synRetryRtoPass(value: number) {
    this._synRetryRtoPass = value;
  }
  public resetSynRetryRtoPass() {
    this._synRetryRtoPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synRetryRtoPassInput() {
    return this._synRetryRtoPass;
  }

  // syn_retry_rto_progress - computed: false, optional: true, required: false
  private _synRetryRtoProgress?: number; 
  public get synRetryRtoProgress() {
    return this.getNumberAttribute('syn_retry_rto_progress');
  }
  public set synRetryRtoProgress(value: number) {
    this._synRetryRtoProgress = value;
  }
  public resetSynRetryRtoProgress() {
    this._synRetryRtoProgress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synRetryRtoProgressInput() {
    return this._synRetryRtoProgress;
  }

  // syn_retry_timeout - computed: false, optional: true, required: false
  private _synRetryTimeout?: number; 
  public get synRetryTimeout() {
    return this.getNumberAttribute('syn_retry_timeout');
  }
  public set synRetryTimeout(value: number) {
    this._synRetryTimeout = value;
  }
  public resetSynRetryTimeout() {
    this._synRetryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synRetryTimeoutInput() {
    return this._synRetryTimeout;
  }

  // syn_tfo_rcv - computed: false, optional: true, required: false
  private _synTfoRcv?: number; 
  public get synTfoRcv() {
    return this.getNumberAttribute('syn_tfo_rcv');
  }
  public set synTfoRcv(value: number) {
    this._synTfoRcv = value;
  }
  public resetSynTfoRcv() {
    this._synTfoRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synTfoRcvInput() {
    return this._synTfoRcv;
  }

  // synack_multiple_attempts_per_ip_detected - computed: false, optional: true, required: false
  private _synackMultipleAttemptsPerIpDetected?: number; 
  public get synackMultipleAttemptsPerIpDetected() {
    return this.getNumberAttribute('synack_multiple_attempts_per_ip_detected');
  }
  public set synackMultipleAttemptsPerIpDetected(value: number) {
    this._synackMultipleAttemptsPerIpDetected = value;
  }
  public resetSynackMultipleAttemptsPerIpDetected() {
    this._synackMultipleAttemptsPerIpDetected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synackMultipleAttemptsPerIpDetectedInput() {
    return this._synackMultipleAttemptsPerIpDetected;
  }

  // synack_reset_sent - computed: false, optional: true, required: false
  private _synackResetSent?: number; 
  public get synackResetSent() {
    return this.getNumberAttribute('synack_reset_sent');
  }
  public set synackResetSent(value: number) {
    this._synackResetSent = value;
  }
  public resetSynackResetSent() {
    this._synackResetSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synackResetSentInput() {
    return this._synackResetSent;
  }

  // tcp_ack_data_drop - computed: false, optional: true, required: false
  private _tcpAckDataDrop?: number; 
  public get tcpAckDataDrop() {
    return this.getNumberAttribute('tcp_ack_data_drop');
  }
  public set tcpAckDataDrop(value: number) {
    this._tcpAckDataDrop = value;
  }
  public resetTcpAckDataDrop() {
    this._tcpAckDataDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAckDataDropInput() {
    return this._tcpAckDataDrop;
  }

  // tcp_ack_data_fwd - computed: false, optional: true, required: false
  private _tcpAckDataFwd?: number; 
  public get tcpAckDataFwd() {
    return this.getNumberAttribute('tcp_ack_data_fwd');
  }
  public set tcpAckDataFwd(value: number) {
    this._tcpAckDataFwd = value;
  }
  public resetTcpAckDataFwd() {
    this._tcpAckDataFwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAckDataFwdInput() {
    return this._tcpAckDataFwd;
  }

  // tcp_ack_data_rcvd - computed: false, optional: true, required: false
  private _tcpAckDataRcvd?: number; 
  public get tcpAckDataRcvd() {
    return this.getNumberAttribute('tcp_ack_data_rcvd');
  }
  public set tcpAckDataRcvd(value: number) {
    this._tcpAckDataRcvd = value;
  }
  public resetTcpAckDataRcvd() {
    this._tcpAckDataRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAckDataRcvdInput() {
    return this._tcpAckDataRcvd;
  }

  // tcp_ack_drop - computed: false, optional: true, required: false
  private _tcpAckDrop?: number; 
  public get tcpAckDrop() {
    return this.getNumberAttribute('tcp_ack_drop');
  }
  public set tcpAckDrop(value: number) {
    this._tcpAckDrop = value;
  }
  public resetTcpAckDrop() {
    this._tcpAckDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAckDropInput() {
    return this._tcpAckDrop;
  }

  // tcp_ack_fwd - computed: false, optional: true, required: false
  private _tcpAckFwd?: number; 
  public get tcpAckFwd() {
    return this.getNumberAttribute('tcp_ack_fwd');
  }
  public set tcpAckFwd(value: number) {
    this._tcpAckFwd = value;
  }
  public resetTcpAckFwd() {
    this._tcpAckFwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAckFwdInput() {
    return this._tcpAckFwd;
  }

  // tcp_ack_rcvd - computed: false, optional: true, required: false
  private _tcpAckRcvd?: number; 
  public get tcpAckRcvd() {
    return this.getNumberAttribute('tcp_ack_rcvd');
  }
  public set tcpAckRcvd(value: number) {
    this._tcpAckRcvd = value;
  }
  public resetTcpAckRcvd() {
    this._tcpAckRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAckRcvdInput() {
    return this._tcpAckRcvd;
  }

  // tcp_auth_drop_ack - computed: false, optional: true, required: false
  private _tcpAuthDropAck?: number; 
  public get tcpAuthDropAck() {
    return this.getNumberAttribute('tcp_auth_drop_ack');
  }
  public set tcpAuthDropAck(value: number) {
    this._tcpAuthDropAck = value;
  }
  public resetTcpAuthDropAck() {
    this._tcpAuthDropAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAuthDropAckInput() {
    return this._tcpAuthDropAck;
  }

  // tcp_auth_drop_ack_fail_auth - computed: false, optional: true, required: false
  private _tcpAuthDropAckFailAuth?: number; 
  public get tcpAuthDropAckFailAuth() {
    return this.getNumberAttribute('tcp_auth_drop_ack_fail_auth');
  }
  public set tcpAuthDropAckFailAuth(value: number) {
    this._tcpAuthDropAckFailAuth = value;
  }
  public resetTcpAuthDropAckFailAuth() {
    this._tcpAuthDropAckFailAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAuthDropAckFailAuthInput() {
    return this._tcpAuthDropAckFailAuth;
  }

  // tcp_auth_drop_ack_pass_auth - computed: false, optional: true, required: false
  private _tcpAuthDropAckPassAuth?: number; 
  public get tcpAuthDropAckPassAuth() {
    return this.getNumberAttribute('tcp_auth_drop_ack_pass_auth');
  }
  public set tcpAuthDropAckPassAuth(value: number) {
    this._tcpAuthDropAckPassAuth = value;
  }
  public resetTcpAuthDropAckPassAuth() {
    this._tcpAuthDropAckPassAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAuthDropAckPassAuthInput() {
    return this._tcpAuthDropAckPassAuth;
  }

  // tcp_auth_drop_ack_xmit - computed: false, optional: true, required: false
  private _tcpAuthDropAckXmit?: number; 
  public get tcpAuthDropAckXmit() {
    return this.getNumberAttribute('tcp_auth_drop_ack_xmit');
  }
  public set tcpAuthDropAckXmit(value: number) {
    this._tcpAuthDropAckXmit = value;
  }
  public resetTcpAuthDropAckXmit() {
    this._tcpAuthDropAckXmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAuthDropAckXmitInput() {
    return this._tcpAuthDropAckXmit;
  }

  // tcp_auth_drop_rst - computed: false, optional: true, required: false
  private _tcpAuthDropRst?: number; 
  public get tcpAuthDropRst() {
    return this.getNumberAttribute('tcp_auth_drop_rst');
  }
  public set tcpAuthDropRst(value: number) {
    this._tcpAuthDropRst = value;
  }
  public resetTcpAuthDropRst() {
    this._tcpAuthDropRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAuthDropRstInput() {
    return this._tcpAuthDropRst;
  }

  // tcp_auth_drop_rst_fail_auth - computed: false, optional: true, required: false
  private _tcpAuthDropRstFailAuth?: number; 
  public get tcpAuthDropRstFailAuth() {
    return this.getNumberAttribute('tcp_auth_drop_rst_fail_auth');
  }
  public set tcpAuthDropRstFailAuth(value: number) {
    this._tcpAuthDropRstFailAuth = value;
  }
  public resetTcpAuthDropRstFailAuth() {
    this._tcpAuthDropRstFailAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAuthDropRstFailAuthInput() {
    return this._tcpAuthDropRstFailAuth;
  }

  // tcp_auth_drop_rst_pass_auth - computed: false, optional: true, required: false
  private _tcpAuthDropRstPassAuth?: number; 
  public get tcpAuthDropRstPassAuth() {
    return this.getNumberAttribute('tcp_auth_drop_rst_pass_auth');
  }
  public set tcpAuthDropRstPassAuth(value: number) {
    this._tcpAuthDropRstPassAuth = value;
  }
  public resetTcpAuthDropRstPassAuth() {
    this._tcpAuthDropRstPassAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAuthDropRstPassAuthInput() {
    return this._tcpAuthDropRstPassAuth;
  }

  // tcp_auth_drop_rst_xmit - computed: false, optional: true, required: false
  private _tcpAuthDropRstXmit?: number; 
  public get tcpAuthDropRstXmit() {
    return this.getNumberAttribute('tcp_auth_drop_rst_xmit');
  }
  public set tcpAuthDropRstXmit(value: number) {
    this._tcpAuthDropRstXmit = value;
  }
  public resetTcpAuthDropRstXmit() {
    this._tcpAuthDropRstXmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAuthDropRstXmitInput() {
    return this._tcpAuthDropRstXmit;
  }

  // tcp_auth_drop_syn - computed: false, optional: true, required: false
  private _tcpAuthDropSyn?: number; 
  public get tcpAuthDropSyn() {
    return this.getNumberAttribute('tcp_auth_drop_syn');
  }
  public set tcpAuthDropSyn(value: number) {
    this._tcpAuthDropSyn = value;
  }
  public resetTcpAuthDropSyn() {
    this._tcpAuthDropSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAuthDropSynInput() {
    return this._tcpAuthDropSyn;
  }

  // tcp_auth_rst - computed: false, optional: true, required: false
  private _tcpAuthRst?: number; 
  public get tcpAuthRst() {
    return this.getNumberAttribute('tcp_auth_rst');
  }
  public set tcpAuthRst(value: number) {
    this._tcpAuthRst = value;
  }
  public resetTcpAuthRst() {
    this._tcpAuthRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAuthRstInput() {
    return this._tcpAuthRst;
  }

  // tcp_cwr_drop - computed: false, optional: true, required: false
  private _tcpCwrDrop?: number; 
  public get tcpCwrDrop() {
    return this.getNumberAttribute('tcp_cwr_drop');
  }
  public set tcpCwrDrop(value: number) {
    this._tcpCwrDrop = value;
  }
  public resetTcpCwrDrop() {
    this._tcpCwrDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpCwrDropInput() {
    return this._tcpCwrDrop;
  }

  // tcp_cwr_fwd - computed: false, optional: true, required: false
  private _tcpCwrFwd?: number; 
  public get tcpCwrFwd() {
    return this.getNumberAttribute('tcp_cwr_fwd');
  }
  public set tcpCwrFwd(value: number) {
    this._tcpCwrFwd = value;
  }
  public resetTcpCwrFwd() {
    this._tcpCwrFwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpCwrFwdInput() {
    return this._tcpCwrFwd;
  }

  // tcp_cwr_rcvd - computed: false, optional: true, required: false
  private _tcpCwrRcvd?: number; 
  public get tcpCwrRcvd() {
    return this.getNumberAttribute('tcp_cwr_rcvd');
  }
  public set tcpCwrRcvd(value: number) {
    this._tcpCwrRcvd = value;
  }
  public resetTcpCwrRcvd() {
    this._tcpCwrRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpCwrRcvdInput() {
    return this._tcpCwrRcvd;
  }

  // tcp_ece_drop - computed: false, optional: true, required: false
  private _tcpEceDrop?: number; 
  public get tcpEceDrop() {
    return this.getNumberAttribute('tcp_ece_drop');
  }
  public set tcpEceDrop(value: number) {
    this._tcpEceDrop = value;
  }
  public resetTcpEceDrop() {
    this._tcpEceDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpEceDropInput() {
    return this._tcpEceDrop;
  }

  // tcp_ece_fwd - computed: false, optional: true, required: false
  private _tcpEceFwd?: number; 
  public get tcpEceFwd() {
    return this.getNumberAttribute('tcp_ece_fwd');
  }
  public set tcpEceFwd(value: number) {
    this._tcpEceFwd = value;
  }
  public resetTcpEceFwd() {
    this._tcpEceFwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpEceFwdInput() {
    return this._tcpEceFwd;
  }

  // tcp_ece_rcvd - computed: false, optional: true, required: false
  private _tcpEceRcvd?: number; 
  public get tcpEceRcvd() {
    return this.getNumberAttribute('tcp_ece_rcvd');
  }
  public set tcpEceRcvd(value: number) {
    this._tcpEceRcvd = value;
  }
  public resetTcpEceRcvd() {
    this._tcpEceRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpEceRcvdInput() {
    return this._tcpEceRcvd;
  }

  // tcp_empty_ack_drop - computed: false, optional: true, required: false
  private _tcpEmptyAckDrop?: number; 
  public get tcpEmptyAckDrop() {
    return this.getNumberAttribute('tcp_empty_ack_drop');
  }
  public set tcpEmptyAckDrop(value: number) {
    this._tcpEmptyAckDrop = value;
  }
  public resetTcpEmptyAckDrop() {
    this._tcpEmptyAckDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpEmptyAckDropInput() {
    return this._tcpEmptyAckDrop;
  }

  // tcp_empty_ack_fwd - computed: false, optional: true, required: false
  private _tcpEmptyAckFwd?: number; 
  public get tcpEmptyAckFwd() {
    return this.getNumberAttribute('tcp_empty_ack_fwd');
  }
  public set tcpEmptyAckFwd(value: number) {
    this._tcpEmptyAckFwd = value;
  }
  public resetTcpEmptyAckFwd() {
    this._tcpEmptyAckFwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpEmptyAckFwdInput() {
    return this._tcpEmptyAckFwd;
  }

  // tcp_empty_ack_rcvd - computed: false, optional: true, required: false
  private _tcpEmptyAckRcvd?: number; 
  public get tcpEmptyAckRcvd() {
    return this.getNumberAttribute('tcp_empty_ack_rcvd');
  }
  public set tcpEmptyAckRcvd(value: number) {
    this._tcpEmptyAckRcvd = value;
  }
  public resetTcpEmptyAckRcvd() {
    this._tcpEmptyAckRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpEmptyAckRcvdInput() {
    return this._tcpEmptyAckRcvd;
  }

  // tcp_fin_ack_drop - computed: false, optional: true, required: false
  private _tcpFinAckDrop?: number; 
  public get tcpFinAckDrop() {
    return this.getNumberAttribute('tcp_fin_ack_drop');
  }
  public set tcpFinAckDrop(value: number) {
    this._tcpFinAckDrop = value;
  }
  public resetTcpFinAckDrop() {
    this._tcpFinAckDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFinAckDropInput() {
    return this._tcpFinAckDrop;
  }

  // tcp_fin_ack_fwd - computed: false, optional: true, required: false
  private _tcpFinAckFwd?: number; 
  public get tcpFinAckFwd() {
    return this.getNumberAttribute('tcp_fin_ack_fwd');
  }
  public set tcpFinAckFwd(value: number) {
    this._tcpFinAckFwd = value;
  }
  public resetTcpFinAckFwd() {
    this._tcpFinAckFwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFinAckFwdInput() {
    return this._tcpFinAckFwd;
  }

  // tcp_fin_ack_rcvd - computed: false, optional: true, required: false
  private _tcpFinAckRcvd?: number; 
  public get tcpFinAckRcvd() {
    return this.getNumberAttribute('tcp_fin_ack_rcvd');
  }
  public set tcpFinAckRcvd(value: number) {
    this._tcpFinAckRcvd = value;
  }
  public resetTcpFinAckRcvd() {
    this._tcpFinAckRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFinAckRcvdInput() {
    return this._tcpFinAckRcvd;
  }

  // tcp_fin_drop - computed: false, optional: true, required: false
  private _tcpFinDrop?: number; 
  public get tcpFinDrop() {
    return this.getNumberAttribute('tcp_fin_drop');
  }
  public set tcpFinDrop(value: number) {
    this._tcpFinDrop = value;
  }
  public resetTcpFinDrop() {
    this._tcpFinDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFinDropInput() {
    return this._tcpFinDrop;
  }

  // tcp_fin_fwd - computed: false, optional: true, required: false
  private _tcpFinFwd?: number; 
  public get tcpFinFwd() {
    return this.getNumberAttribute('tcp_fin_fwd');
  }
  public set tcpFinFwd(value: number) {
    this._tcpFinFwd = value;
  }
  public resetTcpFinFwd() {
    this._tcpFinFwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFinFwdInput() {
    return this._tcpFinFwd;
  }

  // tcp_fin_psh_ack_drop - computed: false, optional: true, required: false
  private _tcpFinPshAckDrop?: number; 
  public get tcpFinPshAckDrop() {
    return this.getNumberAttribute('tcp_fin_psh_ack_drop');
  }
  public set tcpFinPshAckDrop(value: number) {
    this._tcpFinPshAckDrop = value;
  }
  public resetTcpFinPshAckDrop() {
    this._tcpFinPshAckDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFinPshAckDropInput() {
    return this._tcpFinPshAckDrop;
  }

  // tcp_fin_psh_ack_fwd - computed: false, optional: true, required: false
  private _tcpFinPshAckFwd?: number; 
  public get tcpFinPshAckFwd() {
    return this.getNumberAttribute('tcp_fin_psh_ack_fwd');
  }
  public set tcpFinPshAckFwd(value: number) {
    this._tcpFinPshAckFwd = value;
  }
  public resetTcpFinPshAckFwd() {
    this._tcpFinPshAckFwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFinPshAckFwdInput() {
    return this._tcpFinPshAckFwd;
  }

  // tcp_fin_psh_ack_rcvd - computed: false, optional: true, required: false
  private _tcpFinPshAckRcvd?: number; 
  public get tcpFinPshAckRcvd() {
    return this.getNumberAttribute('tcp_fin_psh_ack_rcvd');
  }
  public set tcpFinPshAckRcvd(value: number) {
    this._tcpFinPshAckRcvd = value;
  }
  public resetTcpFinPshAckRcvd() {
    this._tcpFinPshAckRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFinPshAckRcvdInput() {
    return this._tcpFinPshAckRcvd;
  }

  // tcp_fin_rcvd - computed: false, optional: true, required: false
  private _tcpFinRcvd?: number; 
  public get tcpFinRcvd() {
    return this.getNumberAttribute('tcp_fin_rcvd');
  }
  public set tcpFinRcvd(value: number) {
    this._tcpFinRcvd = value;
  }
  public resetTcpFinRcvd() {
    this._tcpFinRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFinRcvdInput() {
    return this._tcpFinRcvd;
  }

  // tcp_psh_ack_drop - computed: false, optional: true, required: false
  private _tcpPshAckDrop?: number; 
  public get tcpPshAckDrop() {
    return this.getNumberAttribute('tcp_psh_ack_drop');
  }
  public set tcpPshAckDrop(value: number) {
    this._tcpPshAckDrop = value;
  }
  public resetTcpPshAckDrop() {
    this._tcpPshAckDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPshAckDropInput() {
    return this._tcpPshAckDrop;
  }

  // tcp_psh_ack_fwd - computed: false, optional: true, required: false
  private _tcpPshAckFwd?: number; 
  public get tcpPshAckFwd() {
    return this.getNumberAttribute('tcp_psh_ack_fwd');
  }
  public set tcpPshAckFwd(value: number) {
    this._tcpPshAckFwd = value;
  }
  public resetTcpPshAckFwd() {
    this._tcpPshAckFwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPshAckFwdInput() {
    return this._tcpPshAckFwd;
  }

  // tcp_psh_ack_rcvd - computed: false, optional: true, required: false
  private _tcpPshAckRcvd?: number; 
  public get tcpPshAckRcvd() {
    return this.getNumberAttribute('tcp_psh_ack_rcvd');
  }
  public set tcpPshAckRcvd(value: number) {
    this._tcpPshAckRcvd = value;
  }
  public resetTcpPshAckRcvd() {
    this._tcpPshAckRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPshAckRcvdInput() {
    return this._tcpPshAckRcvd;
  }

  // tcp_psh_drop - computed: false, optional: true, required: false
  private _tcpPshDrop?: number; 
  public get tcpPshDrop() {
    return this.getNumberAttribute('tcp_psh_drop');
  }
  public set tcpPshDrop(value: number) {
    this._tcpPshDrop = value;
  }
  public resetTcpPshDrop() {
    this._tcpPshDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPshDropInput() {
    return this._tcpPshDrop;
  }

  // tcp_psh_fwd - computed: false, optional: true, required: false
  private _tcpPshFwd?: number; 
  public get tcpPshFwd() {
    return this.getNumberAttribute('tcp_psh_fwd');
  }
  public set tcpPshFwd(value: number) {
    this._tcpPshFwd = value;
  }
  public resetTcpPshFwd() {
    this._tcpPshFwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPshFwdInput() {
    return this._tcpPshFwd;
  }

  // tcp_psh_rcvd - computed: false, optional: true, required: false
  private _tcpPshRcvd?: number; 
  public get tcpPshRcvd() {
    return this.getNumberAttribute('tcp_psh_rcvd');
  }
  public set tcpPshRcvd(value: number) {
    this._tcpPshRcvd = value;
  }
  public resetTcpPshRcvd() {
    this._tcpPshRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPshRcvdInput() {
    return this._tcpPshRcvd;
  }

  // tcp_rexmit_syn_limit_bl - computed: false, optional: true, required: false
  private _tcpRexmitSynLimitBl?: number; 
  public get tcpRexmitSynLimitBl() {
    return this.getNumberAttribute('tcp_rexmit_syn_limit_bl');
  }
  public set tcpRexmitSynLimitBl(value: number) {
    this._tcpRexmitSynLimitBl = value;
  }
  public resetTcpRexmitSynLimitBl() {
    this._tcpRexmitSynLimitBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRexmitSynLimitBlInput() {
    return this._tcpRexmitSynLimitBl;
  }

  // tcp_rexmit_syn_limit_drop - computed: false, optional: true, required: false
  private _tcpRexmitSynLimitDrop?: number; 
  public get tcpRexmitSynLimitDrop() {
    return this.getNumberAttribute('tcp_rexmit_syn_limit_drop');
  }
  public set tcpRexmitSynLimitDrop(value: number) {
    this._tcpRexmitSynLimitDrop = value;
  }
  public resetTcpRexmitSynLimitDrop() {
    this._tcpRexmitSynLimitDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRexmitSynLimitDropInput() {
    return this._tcpRexmitSynLimitDrop;
  }

  // tcp_rst_ack_drop - computed: false, optional: true, required: false
  private _tcpRstAckDrop?: number; 
  public get tcpRstAckDrop() {
    return this.getNumberAttribute('tcp_rst_ack_drop');
  }
  public set tcpRstAckDrop(value: number) {
    this._tcpRstAckDrop = value;
  }
  public resetTcpRstAckDrop() {
    this._tcpRstAckDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRstAckDropInput() {
    return this._tcpRstAckDrop;
  }

  // tcp_rst_ack_fwd - computed: false, optional: true, required: false
  private _tcpRstAckFwd?: number; 
  public get tcpRstAckFwd() {
    return this.getNumberAttribute('tcp_rst_ack_fwd');
  }
  public set tcpRstAckFwd(value: number) {
    this._tcpRstAckFwd = value;
  }
  public resetTcpRstAckFwd() {
    this._tcpRstAckFwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRstAckFwdInput() {
    return this._tcpRstAckFwd;
  }

  // tcp_rst_ack_rcvd - computed: false, optional: true, required: false
  private _tcpRstAckRcvd?: number; 
  public get tcpRstAckRcvd() {
    return this.getNumberAttribute('tcp_rst_ack_rcvd');
  }
  public set tcpRstAckRcvd(value: number) {
    this._tcpRstAckRcvd = value;
  }
  public resetTcpRstAckRcvd() {
    this._tcpRstAckRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRstAckRcvdInput() {
    return this._tcpRstAckRcvd;
  }

  // tcp_rst_drop - computed: false, optional: true, required: false
  private _tcpRstDrop?: number; 
  public get tcpRstDrop() {
    return this.getNumberAttribute('tcp_rst_drop');
  }
  public set tcpRstDrop(value: number) {
    this._tcpRstDrop = value;
  }
  public resetTcpRstDrop() {
    this._tcpRstDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRstDropInput() {
    return this._tcpRstDrop;
  }

  // tcp_rst_fwd - computed: false, optional: true, required: false
  private _tcpRstFwd?: number; 
  public get tcpRstFwd() {
    return this.getNumberAttribute('tcp_rst_fwd');
  }
  public set tcpRstFwd(value: number) {
    this._tcpRstFwd = value;
  }
  public resetTcpRstFwd() {
    this._tcpRstFwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRstFwdInput() {
    return this._tcpRstFwd;
  }

  // tcp_rst_rcvd - computed: false, optional: true, required: false
  private _tcpRstRcvd?: number; 
  public get tcpRstRcvd() {
    return this.getNumberAttribute('tcp_rst_rcvd');
  }
  public set tcpRstRcvd(value: number) {
    this._tcpRstRcvd = value;
  }
  public resetTcpRstRcvd() {
    this._tcpRstRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRstRcvdInput() {
    return this._tcpRstRcvd;
  }

  // tcp_syn_ack_drop - computed: false, optional: true, required: false
  private _tcpSynAckDrop?: number; 
  public get tcpSynAckDrop() {
    return this.getNumberAttribute('tcp_syn_ack_drop');
  }
  public set tcpSynAckDrop(value: number) {
    this._tcpSynAckDrop = value;
  }
  public resetTcpSynAckDrop() {
    this._tcpSynAckDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynAckDropInput() {
    return this._tcpSynAckDrop;
  }

  // tcp_syn_ack_fwd - computed: false, optional: true, required: false
  private _tcpSynAckFwd?: number; 
  public get tcpSynAckFwd() {
    return this.getNumberAttribute('tcp_syn_ack_fwd');
  }
  public set tcpSynAckFwd(value: number) {
    this._tcpSynAckFwd = value;
  }
  public resetTcpSynAckFwd() {
    this._tcpSynAckFwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynAckFwdInput() {
    return this._tcpSynAckFwd;
  }

  // tcp_syn_ack_rcvd - computed: false, optional: true, required: false
  private _tcpSynAckRcvd?: number; 
  public get tcpSynAckRcvd() {
    return this.getNumberAttribute('tcp_syn_ack_rcvd');
  }
  public set tcpSynAckRcvd(value: number) {
    this._tcpSynAckRcvd = value;
  }
  public resetTcpSynAckRcvd() {
    this._tcpSynAckRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynAckRcvdInput() {
    return this._tcpSynAckRcvd;
  }

  // tcp_syn_fwd - computed: false, optional: true, required: false
  private _tcpSynFwd?: number; 
  public get tcpSynFwd() {
    return this.getNumberAttribute('tcp_syn_fwd');
  }
  public set tcpSynFwd(value: number) {
    this._tcpSynFwd = value;
  }
  public resetTcpSynFwd() {
    this._tcpSynFwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynFwdInput() {
    return this._tcpSynFwd;
  }

  // tcp_syn_rcvd - computed: false, optional: true, required: false
  private _tcpSynRcvd?: number; 
  public get tcpSynRcvd() {
    return this.getNumberAttribute('tcp_syn_rcvd');
  }
  public set tcpSynRcvd(value: number) {
    this._tcpSynRcvd = value;
  }
  public resetTcpSynRcvd() {
    this._tcpSynRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynRcvdInput() {
    return this._tcpSynRcvd;
  }

  // tcp_urg_drop - computed: false, optional: true, required: false
  private _tcpUrgDrop?: number; 
  public get tcpUrgDrop() {
    return this.getNumberAttribute('tcp_urg_drop');
  }
  public set tcpUrgDrop(value: number) {
    this._tcpUrgDrop = value;
  }
  public resetTcpUrgDrop() {
    this._tcpUrgDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpUrgDropInput() {
    return this._tcpUrgDrop;
  }

  // tcp_urg_fwd - computed: false, optional: true, required: false
  private _tcpUrgFwd?: number; 
  public get tcpUrgFwd() {
    return this.getNumberAttribute('tcp_urg_fwd');
  }
  public set tcpUrgFwd(value: number) {
    this._tcpUrgFwd = value;
  }
  public resetTcpUrgFwd() {
    this._tcpUrgFwd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpUrgFwdInput() {
    return this._tcpUrgFwd;
  }

  // tcp_urg_rcvd - computed: false, optional: true, required: false
  private _tcpUrgRcvd?: number; 
  public get tcpUrgRcvd() {
    return this.getNumberAttribute('tcp_urg_rcvd');
  }
  public set tcpUrgRcvd(value: number) {
    this._tcpUrgRcvd = value;
  }
  public resetTcpUrgRcvd() {
    this._tcpUrgRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpUrgRcvdInput() {
    return this._tcpUrgRcvd;
  }

  // unauth_drop - computed: false, optional: true, required: false
  private _unauthDrop?: number; 
  public get unauthDrop() {
    return this.getNumberAttribute('unauth_drop');
  }
  public set unauthDrop(value: number) {
    this._unauthDrop = value;
  }
  public resetUnauthDrop() {
    this._unauthDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthDropInput() {
    return this._unauthDrop;
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

  // zero_window_excd - computed: false, optional: true, required: false
  private _zeroWindowExcd?: number; 
  public get zeroWindowExcd() {
    return this.getNumberAttribute('zero_window_excd');
  }
  public set zeroWindowExcd(value: number) {
    this._zeroWindowExcd = value;
  }
  public resetZeroWindowExcd() {
    this._zeroWindowExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroWindowExcdInput() {
    return this._zeroWindowExcd;
  }
}
export interface DdosDstZoneSrcPortRangeStatsTcpZonePortStats {
  /**
  * tcp_zone_port block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#tcp_zone_port DdosDstZoneSrcPortRangeStatsTcpZonePort#tcp_zone_port}
  */
  readonly tcpZonePort?: DdosDstZoneSrcPortRangeStatsTcpZonePortStatsTcpZonePort;
}

export function ddosDstZoneSrcPortRangeStatsTcpZonePortStatsToTerraform(struct?: DdosDstZoneSrcPortRangeStatsTcpZonePortStatsOutputReference | DdosDstZoneSrcPortRangeStatsTcpZonePortStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tcp_zone_port: ddosDstZoneSrcPortRangeStatsTcpZonePortStatsTcpZonePortToTerraform(struct!.tcpZonePort),
  }
}


export function ddosDstZoneSrcPortRangeStatsTcpZonePortStatsToHclTerraform(struct?: DdosDstZoneSrcPortRangeStatsTcpZonePortStatsOutputReference | DdosDstZoneSrcPortRangeStatsTcpZonePortStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tcp_zone_port: {
      value: ddosDstZoneSrcPortRangeStatsTcpZonePortStatsTcpZonePortToHclTerraform(struct!.tcpZonePort),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstZoneSrcPortRangeStatsTcpZonePortStatsTcpZonePortList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstZoneSrcPortRangeStatsTcpZonePortStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstZoneSrcPortRangeStatsTcpZonePortStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tcpZonePort?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpZonePort = this._tcpZonePort?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstZoneSrcPortRangeStatsTcpZonePortStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tcpZonePort.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tcpZonePort.internalValue = value.tcpZonePort;
    }
  }

  // tcp_zone_port - computed: false, optional: true, required: false
  private _tcpZonePort = new DdosDstZoneSrcPortRangeStatsTcpZonePortStatsTcpZonePortOutputReference(this, "tcp_zone_port");
  public get tcpZonePort() {
    return this._tcpZonePort;
  }
  public putTcpZonePort(value: DdosDstZoneSrcPortRangeStatsTcpZonePortStatsTcpZonePort) {
    this._tcpZonePort.internalValue = value;
  }
  public resetTcpZonePort() {
    this._tcpZonePort.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpZonePortInput() {
    return this._tcpZonePort.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port thunder_ddos_dst_zone_src_port_range_stats_tcp_zone_port}
*/
export class DdosDstZoneSrcPortRangeStatsTcpZonePort extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_src_port_range_stats_tcp_zone_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstZoneSrcPortRangeStatsTcpZonePort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstZoneSrcPortRangeStatsTcpZonePort to import
  * @param importFromId The id of the existing DdosDstZoneSrcPortRangeStatsTcpZonePort that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstZoneSrcPortRangeStatsTcpZonePort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_src_port_range_stats_tcp_zone_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_zone_src_port_range_stats_tcp_zone_port thunder_ddos_dst_zone_src_port_range_stats_tcp_zone_port} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstZoneSrcPortRangeStatsTcpZonePortConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDstZoneSrcPortRangeStatsTcpZonePortConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_src_port_range_stats_tcp_zone_port',
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
    this._srcPortRangeEnd = config.srcPortRangeEnd;
    this._srcPortRangeStart = config.srcPortRangeStart;
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

  // src_port_range_end - computed: false, optional: false, required: true
  private _srcPortRangeEnd?: number; 
  public get srcPortRangeEnd() {
    return this.getNumberAttribute('src_port_range_end');
  }
  public set srcPortRangeEnd(value: number) {
    this._srcPortRangeEnd = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortRangeEndInput() {
    return this._srcPortRangeEnd;
  }

  // src_port_range_start - computed: false, optional: false, required: true
  private _srcPortRangeStart?: number; 
  public get srcPortRangeStart() {
    return this.getNumberAttribute('src_port_range_start');
  }
  public set srcPortRangeStart(value: number) {
    this._srcPortRangeStart = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortRangeStartInput() {
    return this._srcPortRangeStart;
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
  private _stats = new DdosDstZoneSrcPortRangeStatsTcpZonePortStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DdosDstZoneSrcPortRangeStatsTcpZonePortStats) {
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
      src_port_range_end: cdktf.numberToTerraform(this._srcPortRangeEnd),
      src_port_range_start: cdktf.numberToTerraform(this._srcPortRangeStart),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      stats: ddosDstZoneSrcPortRangeStatsTcpZonePortStatsToTerraform(this._stats.internalValue),
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
      src_port_range_end: {
        value: cdktf.numberToHclTerraform(this._srcPortRangeEnd),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      src_port_range_start: {
        value: cdktf.numberToHclTerraform(this._srcPortRangeStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: ddosDstZoneSrcPortRangeStatsTcpZonePortStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstZoneSrcPortRangeStatsTcpZonePortStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
