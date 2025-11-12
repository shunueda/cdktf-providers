// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosTcpPortStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#id DataThunderDdosTcpPortStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#stats DataThunderDdosTcpPortStats#stats}
  */
  readonly stats?: DataThunderDdosTcpPortStatsStats;
}
export interface DataThunderDdosTcpPortStatsStats {
  /**
  * ACK Retry Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#ack_auth_fail DataThunderDdosTcpPortStats#ack_auth_fail}
  */
  readonly ackAuthFail?: number;
  /**
  * ACK Retry Timeout Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#ack_retry_blacklist DataThunderDdosTcpPortStats#ack_retry_blacklist}
  */
  readonly ackRetryBlacklist?: number;
  /**
  * ACK Retry Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#ack_retry_gap_drop DataThunderDdosTcpPortStats#ack_retry_gap_drop}
  */
  readonly ackRetryGapDrop?: number;
  /**
  * ACK Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#ack_retry_init DataThunderDdosTcpPortStats#ack_retry_init}
  */
  readonly ackRetryInit?: number;
  /**
  * ACK Retry Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#ack_retry_pass DataThunderDdosTcpPortStats#ack_retry_pass}
  */
  readonly ackRetryPass?: number;
  /**
  * ACK Retry Timeout Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#ack_retry_reset DataThunderDdosTcpPortStats#ack_retry_reset}
  */
  readonly ackRetryReset?: number;
  /**
  * ACK Retry RTO Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#ack_retry_rto_fail DataThunderDdosTcpPortStats#ack_retry_rto_fail}
  */
  readonly ackRetryRtoFail?: number;
  /**
  * ACK Retry RTO Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#ack_retry_rto_pass DataThunderDdosTcpPortStats#ack_retry_rto_pass}
  */
  readonly ackRetryRtoPass?: number;
  /**
  * ACK Retry RTO Progress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#ack_retry_rto_progress DataThunderDdosTcpPortStats#ack_retry_rto_progress}
  */
  readonly ackRetryRtoProgress?: number;
  /**
  * ACK Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#ack_retry_timeout DataThunderDdosTcpPortStats#ack_retry_timeout}
  */
  readonly ackRetryTimeout?: number;
  /**
  * Dst Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#bl DataThunderDdosTcpPortStats#bl}
  */
  readonly bl?: number;
  /**
  * Connections Closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#conn_close DataThunderDdosTcpPortStats#conn_close}
  */
  readonly connClose?: number;
  /**
  * Half Open Connections Closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#conn_close_half_open DataThunderDdosTcpPortStats#conn_close_half_open}
  */
  readonly connCloseHalfOpen?: number;
  /**
  * FIN Connections Closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#conn_close_w_fin DataThunderDdosTcpPortStats#conn_close_w_fin}
  */
  readonly connCloseWFin?: number;
  /**
  * Idle Connections Closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#conn_close_w_idle DataThunderDdosTcpPortStats#conn_close_w_idle}
  */
  readonly connCloseWIdle?: number;
  /**
  * RST Connections Closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#conn_close_w_rst DataThunderDdosTcpPortStats#conn_close_w_rst}
  */
  readonly connCloseWRst?: number;
  /**
  * Connections Created From ACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#conn_create_from_ack DataThunderDdosTcpPortStats#conn_create_from_ack}
  */
  readonly connCreateFromAck?: number;
  /**
  * Connections Created From SYN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#conn_create_from_syn DataThunderDdosTcpPortStats#conn_create_from_syn}
  */
  readonly connCreateFromSyn?: number;
  /**
  * Connections Created From SYNACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#conn_create_from_synack DataThunderDdosTcpPortStats#conn_create_from_synack}
  */
  readonly connCreateFromSynack?: number;
  /**
  * TCP Conn Out-Of-Seq Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#conn_ofo_rate_excd DataThunderDdosTcpPortStats#conn_ofo_rate_excd}
  */
  readonly connOfoRateExcd?: number;
  /**
  * TCP Conn Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#conn_prate_excd DataThunderDdosTcpPortStats#conn_prate_excd}
  */
  readonly connPrateExcd?: number;
  /**
  * TCP Conn Retransmit Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#conn_rexmit_rate_excd DataThunderDdosTcpPortStats#conn_rexmit_rate_excd}
  */
  readonly connRexmitRateExcd?: number;
  /**
  * TCP Conn Zero-Window Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#conn_zwindow_rate_excd DataThunderDdosTcpPortStats#conn_zwindow_rate_excd}
  */
  readonly connZwindowRateExcd?: number;
  /**
  * Create Conn with non-SYN Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#create_conn_non_syn_dropped DataThunderDdosTcpPortStats#create_conn_non_syn_dropped}
  */
  readonly createConnNonSynDropped?: number;
  /**
  * Dst Hardware Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#dst_hw_drop DataThunderDdosTcpPortStats#dst_hw_drop}
  */
  readonly dstHwDrop?: number;
  /**
  * Exceed Action: Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#exceed_action_drop DataThunderDdosTcpPortStats#exceed_action_drop}
  */
  readonly exceedActionDrop?: number;
  /**
  * Exceed Action: Tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#exceed_action_tunnel DataThunderDdosTcpPortStats#exceed_action_tunnel}
  */
  readonly exceedActionTunnel?: number;
  /**
  * Src KiBit Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#exceed_drop_brate_src DataThunderDdosTcpPortStats#exceed_drop_brate_src}
  */
  readonly exceedDropBrateSrc?: number;
  /**
  * Src KiBit Rate Exceeded Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#exceed_drop_brate_src_pkt DataThunderDdosTcpPortStats#exceed_drop_brate_src_pkt}
  */
  readonly exceedDropBrateSrcPkt?: number;
  /**
  * Src Conn Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#exceed_drop_climit_src DataThunderDdosTcpPortStats#exceed_drop_climit_src}
  */
  readonly exceedDropClimitSrc?: number;
  /**
  * Src Conn Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#exceed_drop_crate_src DataThunderDdosTcpPortStats#exceed_drop_crate_src}
  */
  readonly exceedDropCrateSrc?: number;
  /**
  * Src Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#exceed_drop_prate_src DataThunderDdosTcpPortStats#exceed_drop_prate_src}
  */
  readonly exceedDropPrateSrc?: number;
  /**
  * Filter1 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#filter1_match DataThunderDdosTcpPortStats#filter1_match}
  */
  readonly filter1Match?: number;
  /**
  * Filter2 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#filter2_match DataThunderDdosTcpPortStats#filter2_match}
  */
  readonly filter2Match?: number;
  /**
  * Filter3 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#filter3_match DataThunderDdosTcpPortStats#filter3_match}
  */
  readonly filter3Match?: number;
  /**
  * Filter4 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#filter4_match DataThunderDdosTcpPortStats#filter4_match}
  */
  readonly filter4Match?: number;
  /**
  * Filter5 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#filter5_match DataThunderDdosTcpPortStats#filter5_match}
  */
  readonly filter5Match?: number;
  /**
  * Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#filter_action_blacklist DataThunderDdosTcpPortStats#filter_action_blacklist}
  */
  readonly filterActionBlacklist?: number;
  /**
  * Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#filter_action_default_pass DataThunderDdosTcpPortStats#filter_action_default_pass}
  */
  readonly filterActionDefaultPass?: number;
  /**
  * Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#filter_action_drop DataThunderDdosTcpPortStats#filter_action_drop}
  */
  readonly filterActionDrop?: number;
  /**
  * Filter Action WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#filter_action_whitelist DataThunderDdosTcpPortStats#filter_action_whitelist}
  */
  readonly filterActionWhitelist?: number;
  /**
  * Filter Auth Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#filter_auth_fail DataThunderDdosTcpPortStats#filter_auth_fail}
  */
  readonly filterAuthFail?: number;
  /**
  * Filter No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#filter_none_match DataThunderDdosTcpPortStats#filter_none_match}
  */
  readonly filterNoneMatch?: number;
  /**
  * Filter Not Matched on Pkt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#filter_total_not_match DataThunderDdosTcpPortStats#filter_total_not_match}
  */
  readonly filterTotalNotMatch?: number;
  /**
  * Fragmented Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#frag_drop DataThunderDdosTcpPortStats#frag_drop}
  */
  readonly fragDrop?: number;
  /**
  * Fragmented Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#frag_rcvd DataThunderDdosTcpPortStats#frag_rcvd}
  */
  readonly fragRcvd?: number;
  /**
  * Fragmented Packets Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#frag_timeout DataThunderDdosTcpPortStats#frag_timeout}
  */
  readonly fragTimeout?: number;
  /**
  * Out-Of-Seq Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#out_of_seq_excd DataThunderDdosTcpPortStats#out_of_seq_excd}
  */
  readonly outOfSeqExcd?: number;
  /**
  * Outbound Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#outbound_port_bytes DataThunderDdosTcpPortStats#outbound_port_bytes}
  */
  readonly outboundPortBytes?: number;
  /**
  * Outbound Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#outbound_port_bytes_drop DataThunderDdosTcpPortStats#outbound_port_bytes_drop}
  */
  readonly outboundPortBytesDrop?: number;
  /**
  * Outbound Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#outbound_port_bytes_sent DataThunderDdosTcpPortStats#outbound_port_bytes_sent}
  */
  readonly outboundPortBytesSent?: number;
  /**
  * Outbound Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#outbound_port_drop DataThunderDdosTcpPortStats#outbound_port_drop}
  */
  readonly outboundPortDrop?: number;
  /**
  * Outbound Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#outbound_port_pkt_sent DataThunderDdosTcpPortStats#outbound_port_pkt_sent}
  */
  readonly outboundPortPktSent?: number;
  /**
  * Outbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#outbound_port_rcvd DataThunderDdosTcpPortStats#outbound_port_rcvd}
  */
  readonly outboundPortRcvd?: number;
  /**
  * Extracted Filter1 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#pattern_filter1_match DataThunderDdosTcpPortStats#pattern_filter1_match}
  */
  readonly patternFilter1Match?: number;
  /**
  * Extracted Filter2 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#pattern_filter2_match DataThunderDdosTcpPortStats#pattern_filter2_match}
  */
  readonly patternFilter2Match?: number;
  /**
  * Extracted Filter3 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#pattern_filter3_match DataThunderDdosTcpPortStats#pattern_filter3_match}
  */
  readonly patternFilter3Match?: number;
  /**
  * Extracted Filter4 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#pattern_filter4_match DataThunderDdosTcpPortStats#pattern_filter4_match}
  */
  readonly patternFilter4Match?: number;
  /**
  * Extracted Filter5 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#pattern_filter5_match DataThunderDdosTcpPortStats#pattern_filter5_match}
  */
  readonly patternFilter5Match?: number;
  /**
  * Extracted Filter Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#pattern_filter_drop DataThunderDdosTcpPortStats#pattern_filter_drop}
  */
  readonly patternFilterDrop?: number;
  /**
  * Pattern Recognition: Pattern Not Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#pattern_not_found DataThunderDdosTcpPortStats#pattern_not_found}
  */
  readonly patternNotFound?: number;
  /**
  * Pattern Recognition: Exceptions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#pattern_recognition_generic_error DataThunderDdosTcpPortStats#pattern_recognition_generic_error}
  */
  readonly patternRecognitionGenericError?: number;
  /**
  * Pattern Recognition: Pattern Change Detected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#pattern_recognition_pattern_changed DataThunderDdosTcpPortStats#pattern_recognition_pattern_changed}
  */
  readonly patternRecognitionPatternChanged?: number;
  /**
  * Pattern Recognition: Engine Started
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#pattern_recognition_proceeded DataThunderDdosTcpPortStats#pattern_recognition_proceeded}
  */
  readonly patternRecognitionProceeded?: number;
  /**
  * Pattern Recognition: Sampling Started
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#pattern_recognition_sampling_started DataThunderDdosTcpPortStats#pattern_recognition_sampling_started}
  */
  readonly patternRecognitionSamplingStarted?: number;
  /**
  * Inbound Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#port_bytes DataThunderDdosTcpPortStats#port_bytes}
  */
  readonly portBytes?: number;
  /**
  * Inbound Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#port_bytes_drop DataThunderDdosTcpPortStats#port_bytes_drop}
  */
  readonly portBytesDrop?: number;
  /**
  * Inbound Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#port_bytes_sent DataThunderDdosTcpPortStats#port_bytes_sent}
  */
  readonly portBytesSent?: number;
  /**
  * Conn Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#port_conn_limm_exceed DataThunderDdosTcpPortStats#port_conn_limm_exceed}
  */
  readonly portConnLimmExceed?: number;
  /**
  * Conn Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#port_conn_rate_exceed DataThunderDdosTcpPortStats#port_conn_rate_exceed}
  */
  readonly portConnRateExceed?: number;
  /**
  * Inbound Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#port_drop DataThunderDdosTcpPortStats#port_drop}
  */
  readonly portDrop?: number;
  /**
  * KiBit Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#port_kbit_rate_exceed DataThunderDdosTcpPortStats#port_kbit_rate_exceed}
  */
  readonly portKbitRateExceed?: number;
  /**
  * KiBit Rate Exceeded Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#port_kbit_rate_exceed_pkt DataThunderDdosTcpPortStats#port_kbit_rate_exceed_pkt}
  */
  readonly portKbitRateExceedPkt?: number;
  /**
  * Packet Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#port_pkt_rate_exceed DataThunderDdosTcpPortStats#port_pkt_rate_exceed}
  */
  readonly portPktRateExceed?: number;
  /**
  * Inbound Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#port_pkt_sent DataThunderDdosTcpPortStats#port_pkt_sent}
  */
  readonly portPktSent?: number;
  /**
  * Inbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#port_rcvd DataThunderDdosTcpPortStats#port_rcvd}
  */
  readonly portRcvd?: number;
  /**
  * Src Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#port_src_bl DataThunderDdosTcpPortStats#port_src_bl}
  */
  readonly portSrcBl?: number;
  /**
  * TCP SYN Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#port_syn_rate_exceed DataThunderDdosTcpPortStats#port_syn_rate_exceed}
  */
  readonly portSynRateExceed?: number;
  /**
  * TCP SYNACK Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#port_synack_rate_exceed DataThunderDdosTcpPortStats#port_synack_rate_exceed}
  */
  readonly portSynackRateExceed?: number;
  /**
  * Connection: Violation Exceed Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#prog_conn_exceed_bl DataThunderDdosTcpPortStats#prog_conn_exceed_bl}
  */
  readonly progConnExceedBl?: number;
  /**
  * Connection: Violation Exceed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#prog_conn_exceed_drop DataThunderDdosTcpPortStats#prog_conn_exceed_drop}
  */
  readonly progConnExceedDrop?: number;
  /**
  * Connection: Violation Exceed Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#prog_conn_exceed_reset DataThunderDdosTcpPortStats#prog_conn_exceed_reset}
  */
  readonly progConnExceedReset?: number;
  /**
  * Connection: Received Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#prog_conn_rcvd_exceed DataThunderDdosTcpPortStats#prog_conn_rcvd_exceed}
  */
  readonly progConnRcvdExceed?: number;
  /**
  * Connection: Received to Sent Ratio Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#prog_conn_rcvd_sent_ratio_exceed DataThunderDdosTcpPortStats#prog_conn_rcvd_sent_ratio_exceed}
  */
  readonly progConnRcvdSentRatioExceed?: number;
  /**
  * Sample Collected: Connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#prog_conn_samples DataThunderDdosTcpPortStats#prog_conn_samples}
  */
  readonly progConnSamples?: number;
  /**
  * Sample Processed: Connnection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#prog_conn_samples_processed DataThunderDdosTcpPortStats#prog_conn_samples_processed}
  */
  readonly progConnSamplesProcessed?: number;
  /**
  * Connection: Sent Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#prog_conn_sent_exceed DataThunderDdosTcpPortStats#prog_conn_sent_exceed}
  */
  readonly progConnSentExceed?: number;
  /**
  * Connection: Time Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#prog_conn_time_exceed DataThunderDdosTcpPortStats#prog_conn_time_exceed}
  */
  readonly progConnTimeExceed?: number;
  /**
  * Req-Resp: Violation Exceed Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#prog_exceed_bl DataThunderDdosTcpPortStats#prog_exceed_bl}
  */
  readonly progExceedBl?: number;
  /**
  * Req-Resp: Violation Exceed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#prog_exceed_drop DataThunderDdosTcpPortStats#prog_exceed_drop}
  */
  readonly progExceedDrop?: number;
  /**
  * Req-Resp: Violation Exceed Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#prog_exceed_reset DataThunderDdosTcpPortStats#prog_exceed_reset}
  */
  readonly progExceedReset?: number;
  /**
  * Req-Resp: First Request Time Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#prog_first_req_time_exceed DataThunderDdosTcpPortStats#prog_first_req_time_exceed}
  */
  readonly progFirstReqTimeExceed?: number;
  /**
  * Req-Resp: Request to Response Time Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#prog_req_resp_time_exceed DataThunderDdosTcpPortStats#prog_req_resp_time_exceed}
  */
  readonly progReqRespTimeExceed?: number;
  /**
  * Sample Collected: Req-Resp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#prog_req_samples DataThunderDdosTcpPortStats#prog_req_samples}
  */
  readonly progReqSamples?: number;
  /**
  * Sample Processed: Req-Resp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#prog_req_samples_processed DataThunderDdosTcpPortStats#prog_req_samples_processed}
  */
  readonly progReqSamplesProcessed?: number;
  /**
  * Req-Resp: Request Length Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#prog_request_len_exceed DataThunderDdosTcpPortStats#prog_request_len_exceed}
  */
  readonly progRequestLenExceed?: number;
  /**
  * Req-Resp: Response to Request Ratio Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#prog_resp_req_ratio_exceed DataThunderDdosTcpPortStats#prog_resp_req_ratio_exceed}
  */
  readonly progRespReqRatioExceed?: number;
  /**
  * Req-Resp: Response to Request Time Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#prog_resp_req_time_exceed DataThunderDdosTcpPortStats#prog_resp_req_time_exceed}
  */
  readonly progRespReqTimeExceed?: number;
  /**
  * Req-Resp: Response Length Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#prog_response_len_exceed DataThunderDdosTcpPortStats#prog_response_len_exceed}
  */
  readonly progResponseLenExceed?: number;
  /**
  * Time Window: Violation Exceed Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#prog_win_exceed_bl DataThunderDdosTcpPortStats#prog_win_exceed_bl}
  */
  readonly progWinExceedBl?: number;
  /**
  * Time Window: Violation Exceed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#prog_win_exceed_drop DataThunderDdosTcpPortStats#prog_win_exceed_drop}
  */
  readonly progWinExceedDrop?: number;
  /**
  * Time Window: Violation Exceed Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#prog_win_exceed_reset DataThunderDdosTcpPortStats#prog_win_exceed_reset}
  */
  readonly progWinExceedReset?: number;
  /**
  * Time Window: Received Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#prog_win_rcvd_exceed DataThunderDdosTcpPortStats#prog_win_rcvd_exceed}
  */
  readonly progWinRcvdExceed?: number;
  /**
  * Time Window: Received to Sent Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#prog_win_rcvd_sent_ratio_exceed DataThunderDdosTcpPortStats#prog_win_rcvd_sent_ratio_exceed}
  */
  readonly progWinRcvdSentRatioExceed?: number;
  /**
  * Sample Collected: Time Window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#prog_win_samples DataThunderDdosTcpPortStats#prog_win_samples}
  */
  readonly progWinSamples?: number;
  /**
  * Sample Processed: Time Wind
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#prog_win_samples_processed DataThunderDdosTcpPortStats#prog_win_samples_processed}
  */
  readonly progWinSamplesProcessed?: number;
  /**
  * Time Window: Sent Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#prog_win_sent_exceed DataThunderDdosTcpPortStats#prog_win_sent_exceed}
  */
  readonly progWinSentExceed?: number;
  /**
  * Retransmit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#retransmit_excd DataThunderDdosTcpPortStats#retransmit_excd}
  */
  readonly retransmitExcd?: number;
  /**
  * RST Cookie Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#rst_cookie_fail DataThunderDdosTcpPortStats#rst_cookie_fail}
  */
  readonly rstCookieFail?: number;
  /**
  * Sessions Aged Out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#sess_aged DataThunderDdosTcpPortStats#sess_aged}
  */
  readonly sessAged?: number;
  /**
  * Session Create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#sess_create DataThunderDdosTcpPortStats#sess_create}
  */
  readonly sessCreate?: number;
  /**
  * Inbound Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#sess_create_inbound DataThunderDdosTcpPortStats#sess_create_inbound}
  */
  readonly sessCreateInbound?: number;
  /**
  * Outbound Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#sess_create_outbound DataThunderDdosTcpPortStats#sess_create_outbound}
  */
  readonly sessCreateOutbound?: number;
  /**
  * Sflow External Packets Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#sflow_external_packets_sent DataThunderDdosTcpPortStats#sflow_external_packets_sent}
  */
  readonly sflowExternalPacketsSent?: number;
  /**
  * Sflow External Samples Packed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#sflow_external_samples_packed DataThunderDdosTcpPortStats#sflow_external_samples_packed}
  */
  readonly sflowExternalSamplesPacked?: number;
  /**
  * Sflow Internal Packets Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#sflow_internal_packets_sent DataThunderDdosTcpPortStats#sflow_internal_packets_sent}
  */
  readonly sflowInternalPacketsSent?: number;
  /**
  * Sflow Internal Samples Packed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#sflow_internal_samples_packed DataThunderDdosTcpPortStats#sflow_internal_samples_packed}
  */
  readonly sflowInternalSamplesPacked?: number;
  /**
  * Source NAT Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#snat_fail DataThunderDdosTcpPortStats#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Src ACK Retry Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_ack_auth_fail DataThunderDdosTcpPortStats#src_ack_auth_fail}
  */
  readonly srcAckAuthFail?: number;
  /**
  * Src ACK Retry Timeout Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_ack_retry_blacklist DataThunderDdosTcpPortStats#src_ack_retry_blacklist}
  */
  readonly srcAckRetryBlacklist?: number;
  /**
  * Src ACK Retry Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_ack_retry_gap_drop DataThunderDdosTcpPortStats#src_ack_retry_gap_drop}
  */
  readonly srcAckRetryGapDrop?: number;
  /**
  * Src ACK Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_ack_retry_init DataThunderDdosTcpPortStats#src_ack_retry_init}
  */
  readonly srcAckRetryInit?: number;
  /**
  * Src ACK Retry Timeout Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_ack_retry_reset DataThunderDdosTcpPortStats#src_ack_retry_reset}
  */
  readonly srcAckRetryReset?: number;
  /**
  * Src ACK Retry RTO Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_ack_retry_rto_fail DataThunderDdosTcpPortStats#src_ack_retry_rto_fail}
  */
  readonly srcAckRetryRtoFail?: number;
  /**
  * Src ACK Retry RTO Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_ack_retry_rto_pass DataThunderDdosTcpPortStats#src_ack_retry_rto_pass}
  */
  readonly srcAckRetryRtoPass?: number;
  /**
  * Src ACK Retry RTO Progress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_ack_retry_rto_progress DataThunderDdosTcpPortStats#src_ack_retry_rto_progress}
  */
  readonly srcAckRetryRtoProgress?: number;
  /**
  * Src ACK Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_ack_retry_timeout DataThunderDdosTcpPortStats#src_ack_retry_timeout}
  */
  readonly srcAckRetryTimeout?: number;
  /**
  * Src TCP Auth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_auth_drop DataThunderDdosTcpPortStats#src_auth_drop}
  */
  readonly srcAuthDrop?: number;
  /**
  * Src TCP Conn Out-Of-Seq Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_conn_ofo_rate_excd DataThunderDdosTcpPortStats#src_conn_ofo_rate_excd}
  */
  readonly srcConnOfoRateExcd?: number;
  /**
  * Src TCP Conn Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_conn_pkt_rate_excd DataThunderDdosTcpPortStats#src_conn_pkt_rate_excd}
  */
  readonly srcConnPktRateExcd?: number;
  /**
  * Src TCP Conn Retransmit Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_conn_rexmit_rate_excd DataThunderDdosTcpPortStats#src_conn_rexmit_rate_excd}
  */
  readonly srcConnRexmitRateExcd?: number;
  /**
  * Src TCP Conn Zero-Window Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_conn_zwindow_rate_excd DataThunderDdosTcpPortStats#src_conn_zwindow_rate_excd}
  */
  readonly srcConnZwindowRateExcd?: number;
  /**
  * Src Create Conn with non-SYN Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_create_conn_non_syn_dropped DataThunderDdosTcpPortStats#src_create_conn_non_syn_dropped}
  */
  readonly srcCreateConnNonSynDropped?: number;
  /**
  * Src Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_drop DataThunderDdosTcpPortStats#src_drop}
  */
  readonly srcDrop?: number;
  /**
  * Src Filter1 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_filter1_match DataThunderDdosTcpPortStats#src_filter1_match}
  */
  readonly srcFilter1Match?: number;
  /**
  * Src Filter2 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_filter2_match DataThunderDdosTcpPortStats#src_filter2_match}
  */
  readonly srcFilter2Match?: number;
  /**
  * Src Filter3 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_filter3_match DataThunderDdosTcpPortStats#src_filter3_match}
  */
  readonly srcFilter3Match?: number;
  /**
  * Src Filter4 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_filter4_match DataThunderDdosTcpPortStats#src_filter4_match}
  */
  readonly srcFilter4Match?: number;
  /**
  * Src Filter5 Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_filter5_match DataThunderDdosTcpPortStats#src_filter5_match}
  */
  readonly srcFilter5Match?: number;
  /**
  * Src Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_filter_action_blacklist DataThunderDdosTcpPortStats#src_filter_action_blacklist}
  */
  readonly srcFilterActionBlacklist?: number;
  /**
  * Src Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_filter_action_default_pass DataThunderDdosTcpPortStats#src_filter_action_default_pass}
  */
  readonly srcFilterActionDefaultPass?: number;
  /**
  * Src Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_filter_action_drop DataThunderDdosTcpPortStats#src_filter_action_drop}
  */
  readonly srcFilterActionDrop?: number;
  /**
  * Src Filter Action WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_filter_action_whitelist DataThunderDdosTcpPortStats#src_filter_action_whitelist}
  */
  readonly srcFilterActionWhitelist?: number;
  /**
  * Src Filter Auth Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_filter_auth_fail DataThunderDdosTcpPortStats#src_filter_auth_fail}
  */
  readonly srcFilterAuthFail?: number;
  /**
  * Src Filter No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_filter_none_match DataThunderDdosTcpPortStats#src_filter_none_match}
  */
  readonly srcFilterNoneMatch?: number;
  /**
  * Src Filter Not Matched on Pkt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_filter_total_not_match DataThunderDdosTcpPortStats#src_filter_total_not_match}
  */
  readonly srcFilterTotalNotMatch?: number;
  /**
  * Src Fragmented Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_frag_drop DataThunderDdosTcpPortStats#src_frag_drop}
  */
  readonly srcFragDrop?: number;
  /**
  * Src Out-Of-Seq Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_out_of_seq_excd DataThunderDdosTcpPortStats#src_out_of_seq_excd}
  */
  readonly srcOutOfSeqExcd?: number;
  /**
  * Src Retransmit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_retransmit_excd DataThunderDdosTcpPortStats#src_retransmit_excd}
  */
  readonly srcRetransmitExcd?: number;
  /**
  * Src RST Cookie Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_rst_cookie_fail DataThunderDdosTcpPortStats#src_rst_cookie_fail}
  */
  readonly srcRstCookieFail?: number;
  /**
  * Src SYN Auth Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_syn_auth_fail DataThunderDdosTcpPortStats#src_syn_auth_fail}
  */
  readonly srcSynAuthFail?: number;
  /**
  * Src SYN Cookie Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_syn_cookie_fail DataThunderDdosTcpPortStats#src_syn_cookie_fail}
  */
  readonly srcSynCookieFail?: number;
  /**
  * Src SYN Cookie Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_syn_cookie_sent DataThunderDdosTcpPortStats#src_syn_cookie_sent}
  */
  readonly srcSynCookieSent?: number;
  /**
  * Src TCP SYN Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_syn_rate_exceed DataThunderDdosTcpPortStats#src_syn_rate_exceed}
  */
  readonly srcSynRateExceed?: number;
  /**
  * Src SYN Retry Timeout Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_syn_retry_blacklist DataThunderDdosTcpPortStats#src_syn_retry_blacklist}
  */
  readonly srcSynRetryBlacklist?: number;
  /**
  * Src SYN Retry Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_syn_retry_failed DataThunderDdosTcpPortStats#src_syn_retry_failed}
  */
  readonly srcSynRetryFailed?: number;
  /**
  * Src SYN Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_syn_retry_gap_drop DataThunderDdosTcpPortStats#src_syn_retry_gap_drop}
  */
  readonly srcSynRetryGapDrop?: number;
  /**
  * Src SYN Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_syn_retry_init DataThunderDdosTcpPortStats#src_syn_retry_init}
  */
  readonly srcSynRetryInit?: number;
  /**
  * Src SYN Retry Timeout Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_syn_retry_reset DataThunderDdosTcpPortStats#src_syn_retry_reset}
  */
  readonly srcSynRetryReset?: number;
  /**
  * Src SYN Retry RTO Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_syn_retry_rto_fail DataThunderDdosTcpPortStats#src_syn_retry_rto_fail}
  */
  readonly srcSynRetryRtoFail?: number;
  /**
  * Src SYN Retry RTO Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_syn_retry_rto_pass DataThunderDdosTcpPortStats#src_syn_retry_rto_pass}
  */
  readonly srcSynRetryRtoPass?: number;
  /**
  * Src SYN Retry RTO Progress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_syn_retry_rto_progress DataThunderDdosTcpPortStats#src_syn_retry_rto_progress}
  */
  readonly srcSynRetryRtoProgress?: number;
  /**
  * Src SYN Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_syn_retry_timeout DataThunderDdosTcpPortStats#src_syn_retry_timeout}
  */
  readonly srcSynRetryTimeout?: number;
  /**
  * Src TCP Auth Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_tcp_auth_rst DataThunderDdosTcpPortStats#src_tcp_auth_rst}
  */
  readonly srcTcpAuthRst?: number;
  /**
  * Src TCP Unauth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_unauth_drop DataThunderDdosTcpPortStats#src_unauth_drop}
  */
  readonly srcUnauthDrop?: number;
  /**
  * Src TCP SrcPort Wellknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_well_known_port DataThunderDdosTcpPortStats#src_well_known_port}
  */
  readonly srcWellKnownPort?: number;
  /**
  * Src Zero-Window Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#src_zero_window_excd DataThunderDdosTcpPortStats#src_zero_window_excd}
  */
  readonly srcZeroWindowExcd?: number;
  /**
  * SYN Auth Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#syn_auth_fail DataThunderDdosTcpPortStats#syn_auth_fail}
  */
  readonly synAuthFail?: number;
  /**
  * SYN Auth Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#syn_auth_pass DataThunderDdosTcpPortStats#syn_auth_pass}
  */
  readonly synAuthPass?: number;
  /**
  * SYN Auth RST-ACK Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#syn_auth_rst_ack_drop DataThunderDdosTcpPortStats#syn_auth_rst_ack_drop}
  */
  readonly synAuthRstAckDrop?: number;
  /**
  * SYN Cookie Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#syn_cookie_fail DataThunderDdosTcpPortStats#syn_cookie_fail}
  */
  readonly synCookieFail?: number;
  /**
  * SYN Cookie Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#syn_cookie_sent DataThunderDdosTcpPortStats#syn_cookie_sent}
  */
  readonly synCookieSent?: number;
  /**
  * SYN Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#syn_drop DataThunderDdosTcpPortStats#syn_drop}
  */
  readonly synDrop?: number;
  /**
  * SYN Retry Timeout Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#syn_retry_blacklist DataThunderDdosTcpPortStats#syn_retry_blacklist}
  */
  readonly synRetryBlacklist?: number;
  /**
  * SYN Retry Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#syn_retry_failed DataThunderDdosTcpPortStats#syn_retry_failed}
  */
  readonly synRetryFailed?: number;
  /**
  * SYN Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#syn_retry_gap_drop DataThunderDdosTcpPortStats#syn_retry_gap_drop}
  */
  readonly synRetryGapDrop?: number;
  /**
  * SYN Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#syn_retry_init DataThunderDdosTcpPortStats#syn_retry_init}
  */
  readonly synRetryInit?: number;
  /**
  * SYN Retry Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#syn_retry_pass DataThunderDdosTcpPortStats#syn_retry_pass}
  */
  readonly synRetryPass?: number;
  /**
  * SYN Retry Timeout Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#syn_retry_reset DataThunderDdosTcpPortStats#syn_retry_reset}
  */
  readonly synRetryReset?: number;
  /**
  * SYN Retry RTO Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#syn_retry_rto_fail DataThunderDdosTcpPortStats#syn_retry_rto_fail}
  */
  readonly synRetryRtoFail?: number;
  /**
  * SYN Retry RTO Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#syn_retry_rto_pass DataThunderDdosTcpPortStats#syn_retry_rto_pass}
  */
  readonly synRetryRtoPass?: number;
  /**
  * SYN Retry RTO Progress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#syn_retry_rto_progress DataThunderDdosTcpPortStats#syn_retry_rto_progress}
  */
  readonly synRetryRtoProgress?: number;
  /**
  * SYN Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#syn_retry_timeout DataThunderDdosTcpPortStats#syn_retry_timeout}
  */
  readonly synRetryTimeout?: number;
  /**
  * SYN TFO Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#syn_tfo_rcv DataThunderDdosTcpPortStats#syn_tfo_rcv}
  */
  readonly synTfoRcv?: number;
  /**
  * SYNACK Multiple Attempts Per IP Detected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#synack_multiple_attempts_per_ip_detected DataThunderDdosTcpPortStats#synack_multiple_attempts_per_ip_detected}
  */
  readonly synackMultipleAttemptsPerIpDetected?: number;
  /**
  * SYNACK Reset Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#synack_reset_sent DataThunderDdosTcpPortStats#synack_reset_sent}
  */
  readonly synackResetSent?: number;
  /**
  * TCP Auth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#tcp_auth_drop DataThunderDdosTcpPortStats#tcp_auth_drop}
  */
  readonly tcpAuthDrop?: number;
  /**
  * TCP Auth Responded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#tcp_auth_resp DataThunderDdosTcpPortStats#tcp_auth_resp}
  */
  readonly tcpAuthResp?: number;
  /**
  * TCP Auth Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#tcp_auth_rst DataThunderDdosTcpPortStats#tcp_auth_rst}
  */
  readonly tcpAuthRst?: number;
  /**
  * TCP SYN Retransmit Exceeded Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#tcp_rexmit_syn_limit_bl DataThunderDdosTcpPortStats#tcp_rexmit_syn_limit_bl}
  */
  readonly tcpRexmitSynLimitBl?: number;
  /**
  * TCP SYN Retransmit Exceeded Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#tcp_rexmit_syn_limit_drop DataThunderDdosTcpPortStats#tcp_rexmit_syn_limit_drop}
  */
  readonly tcpRexmitSynLimitDrop?: number;
  /**
  * TCP Unauth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#unauth_drop DataThunderDdosTcpPortStats#unauth_drop}
  */
  readonly unauthDrop?: number;
  /**
  * TCP SrcPort Wellknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#wellknown_sport_drop DataThunderDdosTcpPortStats#wellknown_sport_drop}
  */
  readonly wellknownSportDrop?: number;
  /**
  * Zero-Window Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#zero_window_excd DataThunderDdosTcpPortStats#zero_window_excd}
  */
  readonly zeroWindowExcd?: number;
}

export function dataThunderDdosTcpPortStatsStatsToTerraform(struct?: DataThunderDdosTcpPortStatsStatsOutputReference | DataThunderDdosTcpPortStatsStats): any {
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
    bl: cdktf.numberToTerraform(struct!.bl),
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
    dst_hw_drop: cdktf.numberToTerraform(struct!.dstHwDrop),
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
    prog_req_resp_time_exceed: cdktf.numberToTerraform(struct!.progReqRespTimeExceed),
    prog_req_samples: cdktf.numberToTerraform(struct!.progReqSamples),
    prog_req_samples_processed: cdktf.numberToTerraform(struct!.progReqSamplesProcessed),
    prog_request_len_exceed: cdktf.numberToTerraform(struct!.progRequestLenExceed),
    prog_resp_req_ratio_exceed: cdktf.numberToTerraform(struct!.progRespReqRatioExceed),
    prog_resp_req_time_exceed: cdktf.numberToTerraform(struct!.progRespReqTimeExceed),
    prog_response_len_exceed: cdktf.numberToTerraform(struct!.progResponseLenExceed),
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
    sess_aged: cdktf.numberToTerraform(struct!.sessAged),
    sess_create: cdktf.numberToTerraform(struct!.sessCreate),
    sess_create_inbound: cdktf.numberToTerraform(struct!.sessCreateInbound),
    sess_create_outbound: cdktf.numberToTerraform(struct!.sessCreateOutbound),
    sflow_external_packets_sent: cdktf.numberToTerraform(struct!.sflowExternalPacketsSent),
    sflow_external_samples_packed: cdktf.numberToTerraform(struct!.sflowExternalSamplesPacked),
    sflow_internal_packets_sent: cdktf.numberToTerraform(struct!.sflowInternalPacketsSent),
    sflow_internal_samples_packed: cdktf.numberToTerraform(struct!.sflowInternalSamplesPacked),
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
    src_conn_ofo_rate_excd: cdktf.numberToTerraform(struct!.srcConnOfoRateExcd),
    src_conn_pkt_rate_excd: cdktf.numberToTerraform(struct!.srcConnPktRateExcd),
    src_conn_rexmit_rate_excd: cdktf.numberToTerraform(struct!.srcConnRexmitRateExcd),
    src_conn_zwindow_rate_excd: cdktf.numberToTerraform(struct!.srcConnZwindowRateExcd),
    src_create_conn_non_syn_dropped: cdktf.numberToTerraform(struct!.srcCreateConnNonSynDropped),
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
    src_out_of_seq_excd: cdktf.numberToTerraform(struct!.srcOutOfSeqExcd),
    src_retransmit_excd: cdktf.numberToTerraform(struct!.srcRetransmitExcd),
    src_rst_cookie_fail: cdktf.numberToTerraform(struct!.srcRstCookieFail),
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
    tcp_auth_drop: cdktf.numberToTerraform(struct!.tcpAuthDrop),
    tcp_auth_resp: cdktf.numberToTerraform(struct!.tcpAuthResp),
    tcp_auth_rst: cdktf.numberToTerraform(struct!.tcpAuthRst),
    tcp_rexmit_syn_limit_bl: cdktf.numberToTerraform(struct!.tcpRexmitSynLimitBl),
    tcp_rexmit_syn_limit_drop: cdktf.numberToTerraform(struct!.tcpRexmitSynLimitDrop),
    unauth_drop: cdktf.numberToTerraform(struct!.unauthDrop),
    wellknown_sport_drop: cdktf.numberToTerraform(struct!.wellknownSportDrop),
    zero_window_excd: cdktf.numberToTerraform(struct!.zeroWindowExcd),
  }
}


export function dataThunderDdosTcpPortStatsStatsToHclTerraform(struct?: DataThunderDdosTcpPortStatsStatsOutputReference | DataThunderDdosTcpPortStatsStats): any {
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
    bl: {
      value: cdktf.numberToHclTerraform(struct!.bl),
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
    dst_hw_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstHwDrop),
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
    prog_resp_req_ratio_exceed: {
      value: cdktf.numberToHclTerraform(struct!.progRespReqRatioExceed),
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
    tcp_auth_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpAuthDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_auth_resp: {
      value: cdktf.numberToHclTerraform(struct!.tcpAuthResp),
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
    unauth_drop: {
      value: cdktf.numberToHclTerraform(struct!.unauthDrop),
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

export class DataThunderDdosTcpPortStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosTcpPortStatsStats | undefined {
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
    if (this._bl !== undefined) {
      hasAnyValues = true;
      internalValueResult.bl = this._bl;
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
    if (this._dstHwDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstHwDrop = this._dstHwDrop;
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
    if (this._progRespReqRatioExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progRespReqRatioExceed = this._progRespReqRatioExceed;
    }
    if (this._progRespReqTimeExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progRespReqTimeExceed = this._progRespReqTimeExceed;
    }
    if (this._progResponseLenExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.progResponseLenExceed = this._progResponseLenExceed;
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
    if (this._tcpAuthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAuthDrop = this._tcpAuthDrop;
    }
    if (this._tcpAuthResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAuthResp = this._tcpAuthResp;
    }
    if (this._tcpAuthRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAuthRst = this._tcpAuthRst;
    }
    if (this._tcpRexmitSynLimitBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRexmitSynLimitBl = this._tcpRexmitSynLimitBl;
    }
    if (this._tcpRexmitSynLimitDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRexmitSynLimitDrop = this._tcpRexmitSynLimitDrop;
    }
    if (this._unauthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.unauthDrop = this._unauthDrop;
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

  public set internalValue(value: DataThunderDdosTcpPortStatsStats | undefined) {
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
      this._bl = undefined;
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
      this._dstHwDrop = undefined;
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
      this._progReqRespTimeExceed = undefined;
      this._progReqSamples = undefined;
      this._progReqSamplesProcessed = undefined;
      this._progRequestLenExceed = undefined;
      this._progRespReqRatioExceed = undefined;
      this._progRespReqTimeExceed = undefined;
      this._progResponseLenExceed = undefined;
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
      this._sessAged = undefined;
      this._sessCreate = undefined;
      this._sessCreateInbound = undefined;
      this._sessCreateOutbound = undefined;
      this._sflowExternalPacketsSent = undefined;
      this._sflowExternalSamplesPacked = undefined;
      this._sflowInternalPacketsSent = undefined;
      this._sflowInternalSamplesPacked = undefined;
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
      this._srcConnOfoRateExcd = undefined;
      this._srcConnPktRateExcd = undefined;
      this._srcConnRexmitRateExcd = undefined;
      this._srcConnZwindowRateExcd = undefined;
      this._srcCreateConnNonSynDropped = undefined;
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
      this._srcOutOfSeqExcd = undefined;
      this._srcRetransmitExcd = undefined;
      this._srcRstCookieFail = undefined;
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
      this._tcpAuthDrop = undefined;
      this._tcpAuthResp = undefined;
      this._tcpAuthRst = undefined;
      this._tcpRexmitSynLimitBl = undefined;
      this._tcpRexmitSynLimitDrop = undefined;
      this._unauthDrop = undefined;
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
      this._bl = value.bl;
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
      this._dstHwDrop = value.dstHwDrop;
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
      this._progReqRespTimeExceed = value.progReqRespTimeExceed;
      this._progReqSamples = value.progReqSamples;
      this._progReqSamplesProcessed = value.progReqSamplesProcessed;
      this._progRequestLenExceed = value.progRequestLenExceed;
      this._progRespReqRatioExceed = value.progRespReqRatioExceed;
      this._progRespReqTimeExceed = value.progRespReqTimeExceed;
      this._progResponseLenExceed = value.progResponseLenExceed;
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
      this._sessAged = value.sessAged;
      this._sessCreate = value.sessCreate;
      this._sessCreateInbound = value.sessCreateInbound;
      this._sessCreateOutbound = value.sessCreateOutbound;
      this._sflowExternalPacketsSent = value.sflowExternalPacketsSent;
      this._sflowExternalSamplesPacked = value.sflowExternalSamplesPacked;
      this._sflowInternalPacketsSent = value.sflowInternalPacketsSent;
      this._sflowInternalSamplesPacked = value.sflowInternalSamplesPacked;
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
      this._srcConnOfoRateExcd = value.srcConnOfoRateExcd;
      this._srcConnPktRateExcd = value.srcConnPktRateExcd;
      this._srcConnRexmitRateExcd = value.srcConnRexmitRateExcd;
      this._srcConnZwindowRateExcd = value.srcConnZwindowRateExcd;
      this._srcCreateConnNonSynDropped = value.srcCreateConnNonSynDropped;
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
      this._srcOutOfSeqExcd = value.srcOutOfSeqExcd;
      this._srcRetransmitExcd = value.srcRetransmitExcd;
      this._srcRstCookieFail = value.srcRstCookieFail;
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
      this._tcpAuthDrop = value.tcpAuthDrop;
      this._tcpAuthResp = value.tcpAuthResp;
      this._tcpAuthRst = value.tcpAuthRst;
      this._tcpRexmitSynLimitBl = value.tcpRexmitSynLimitBl;
      this._tcpRexmitSynLimitDrop = value.tcpRexmitSynLimitDrop;
      this._unauthDrop = value.unauthDrop;
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

  // prog_resp_req_ratio_exceed - computed: false, optional: true, required: false
  private _progRespReqRatioExceed?: number; 
  public get progRespReqRatioExceed() {
    return this.getNumberAttribute('prog_resp_req_ratio_exceed');
  }
  public set progRespReqRatioExceed(value: number) {
    this._progRespReqRatioExceed = value;
  }
  public resetProgRespReqRatioExceed() {
    this._progRespReqRatioExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get progRespReqRatioExceedInput() {
    return this._progRespReqRatioExceed;
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

  // tcp_auth_drop - computed: false, optional: true, required: false
  private _tcpAuthDrop?: number; 
  public get tcpAuthDrop() {
    return this.getNumberAttribute('tcp_auth_drop');
  }
  public set tcpAuthDrop(value: number) {
    this._tcpAuthDrop = value;
  }
  public resetTcpAuthDrop() {
    this._tcpAuthDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAuthDropInput() {
    return this._tcpAuthDrop;
  }

  // tcp_auth_resp - computed: false, optional: true, required: false
  private _tcpAuthResp?: number; 
  public get tcpAuthResp() {
    return this.getNumberAttribute('tcp_auth_resp');
  }
  public set tcpAuthResp(value: number) {
    this._tcpAuthResp = value;
  }
  public resetTcpAuthResp() {
    this._tcpAuthResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAuthRespInput() {
    return this._tcpAuthResp;
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats thunder_ddos_tcp_port_stats}
*/
export class DataThunderDdosTcpPortStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_tcp_port_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosTcpPortStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosTcpPortStats to import
  * @param importFromId The id of the existing DataThunderDdosTcpPortStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosTcpPortStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_tcp_port_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_tcp_port_stats thunder_ddos_tcp_port_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosTcpPortStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosTcpPortStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_tcp_port_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
  private _stats = new DataThunderDdosTcpPortStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosTcpPortStatsStats) {
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
      stats: dataThunderDdosTcpPortStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderDdosTcpPortStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosTcpPortStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
