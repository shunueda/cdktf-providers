// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDstZoneStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#id DataThunderDdosDstZoneStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_name DataThunderDdosDstZoneStats#zone_name}
  */
  readonly zoneName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#stats DataThunderDdosDstZoneStats#stats}
  */
  readonly stats?: DataThunderDdosDstZoneStatsStats;
}
export interface DataThunderDdosDstZoneStatsStats {
  /**
  * DNS Outbound Query Malformed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dns_outbound_query_malformed DataThunderDdosDstZoneStats#dns_outbound_query_malformed}
  */
  readonly dnsOutboundQueryMalformed?: number;
  /**
  * DNS Outbound Query Resp Check Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dns_outbound_query_resp_chk_blacklisted DataThunderDdosDstZoneStats#dns_outbound_query_resp_chk_blacklisted}
  */
  readonly dnsOutboundQueryRespChkBlacklisted?: number;
  /**
  * DNS Outbound Query Resp Check Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dns_outbound_query_resp_chk_failed DataThunderDdosDstZoneStats#dns_outbound_query_resp_chk_failed}
  */
  readonly dnsOutboundQueryRespChkFailed?: number;
  /**
  * DNS Outbound Query Resp Check No Response Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dns_outbound_query_resp_chk_no_resp_sent DataThunderDdosDstZoneStats#dns_outbound_query_resp_chk_no_resp_sent}
  */
  readonly dnsOutboundQueryRespChkNoRespSent?: number;
  /**
  * DNS Outbound Query Resp Check REFUSED Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dns_outbound_query_resp_chk_refused_sent DataThunderDdosDstZoneStats#dns_outbound_query_resp_chk_refused_sent}
  */
  readonly dnsOutboundQueryRespChkRefusedSent?: number;
  /**
  * DNS Outbound Query Resp Check RESET Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dns_outbound_query_resp_chk_reset_sent DataThunderDdosDstZoneStats#dns_outbound_query_resp_chk_reset_sent}
  */
  readonly dnsOutboundQueryRespChkResetSent?: number;
  /**
  * DNS Outbound Query Response Size Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dns_outbound_query_resp_size_exceed DataThunderDdosDstZoneStats#dns_outbound_query_resp_size_exceed}
  */
  readonly dnsOutboundQueryRespSizeExceed?: number;
  /**
  * DNS Outbound Query Session Timed Out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dns_outbound_query_sess_timed_out DataThunderDdosDstZoneStats#dns_outbound_query_sess_timed_out}
  */
  readonly dnsOutboundQuerySessTimedOut?: number;
  /**
  * DNS Outbound Total Query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dns_outbound_total_query DataThunderDdosDstZoneStats#dns_outbound_total_query}
  */
  readonly dnsOutboundTotalQuery?: number;
  /**
  * Dst Src-Based Overflow Policy Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_clist_overflow_policy_at_learning DataThunderDdosDstZoneStats#dst_clist_overflow_policy_at_learning}
  */
  readonly dstClistOverflowPolicyAtLearning?: number;
  /**
  * Inbound: Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_drop DataThunderDdosDstZoneStats#dst_drop}
  */
  readonly dstDrop?: number;
  /**
  * Entry Limit: Conn Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_entry_conn_limit_exceed DataThunderDdosDstZoneStats#dst_entry_conn_limit_exceed}
  */
  readonly dstEntryConnLimitExceed?: number;
  /**
  * Entry Rate: Conn Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_entry_conn_rate_exceed DataThunderDdosDstZoneStats#dst_entry_conn_rate_exceed}
  */
  readonly dstEntryConnRateExceed?: number;
  /**
  * Entry Rate: Frag Packet Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_entry_frag_pkt_rate_exceed DataThunderDdosDstZoneStats#dst_entry_frag_pkt_rate_exceed}
  */
  readonly dstEntryFragPktRateExceed?: number;
  /**
  * Entry Rate: KiBit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_entry_kbit_rate_exceed DataThunderDdosDstZoneStats#dst_entry_kbit_rate_exceed}
  */
  readonly dstEntryKbitRateExceed?: number;
  /**
  * Entry Rate: KiBit Exceeded Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_entry_kbit_rate_exceed_count DataThunderDdosDstZoneStats#dst_entry_kbit_rate_exceed_count}
  */
  readonly dstEntryKbitRateExceedCount?: number;
  /**
  * Outbound Limit: Conn Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_entry_outbound_conn_limit_exceed DataThunderDdosDstZoneStats#dst_entry_outbound_conn_limit_exceed}
  */
  readonly dstEntryOutboundConnLimitExceed?: number;
  /**
  * Outbound Rate: Conn Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_entry_outbound_conn_rate_exceed DataThunderDdosDstZoneStats#dst_entry_outbound_conn_rate_exceed}
  */
  readonly dstEntryOutboundConnRateExceed?: number;
  /**
  * Outbound Rate: Frag Packet Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_entry_outbound_frag_pkt_rate_exceed DataThunderDdosDstZoneStats#dst_entry_outbound_frag_pkt_rate_exceed}
  */
  readonly dstEntryOutboundFragPktRateExceed?: number;
  /**
  * Outbound Rate: KiBit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_entry_outbound_kbit_rate_exceed DataThunderDdosDstZoneStats#dst_entry_outbound_kbit_rate_exceed}
  */
  readonly dstEntryOutboundKbitRateExceed?: number;
  /**
  * Outbound Rate: KiBit Exceeded Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_entry_outbound_kbit_rate_exceed_count DataThunderDdosDstZoneStats#dst_entry_outbound_kbit_rate_exceed_count}
  */
  readonly dstEntryOutboundKbitRateExceedCount?: number;
  /**
  * Outbound Rate: Packet Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_entry_outbound_pkt_rate_exceed DataThunderDdosDstZoneStats#dst_entry_outbound_pkt_rate_exceed}
  */
  readonly dstEntryOutboundPktRateExceed?: number;
  /**
  * Outbound: TCP Sessions Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_entry_outbound_tcp_session_aged DataThunderDdosDstZoneStats#dst_entry_outbound_tcp_session_aged}
  */
  readonly dstEntryOutboundTcpSessionAged?: number;
  /**
  * Outbound: TCP Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_entry_outbound_tcp_session_created DataThunderDdosDstZoneStats#dst_entry_outbound_tcp_session_created}
  */
  readonly dstEntryOutboundTcpSessionCreated?: number;
  /**
  * Outbound: UDP Sessions Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_entry_outbound_udp_session_aged DataThunderDdosDstZoneStats#dst_entry_outbound_udp_session_aged}
  */
  readonly dstEntryOutboundUdpSessionAged?: number;
  /**
  * Outbound: UDP Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_entry_outbound_udp_session_created DataThunderDdosDstZoneStats#dst_entry_outbound_udp_session_created}
  */
  readonly dstEntryOutboundUdpSessionCreated?: number;
  /**
  * Entry Rate: Packet Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_entry_pkt_rate_exceed DataThunderDdosDstZoneStats#dst_entry_pkt_rate_exceed}
  */
  readonly dstEntryPktRateExceed?: number;
  /**
  * Entry Exceed Action: Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_exceed_action_drop DataThunderDdosDstZoneStats#dst_exceed_action_drop}
  */
  readonly dstExceedActionDrop?: number;
  /**
  * Entry Exceed Action: Tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_exceed_action_tunnel DataThunderDdosDstZoneStats#dst_exceed_action_tunnel}
  */
  readonly dstExceedActionTunnel?: number;
  /**
  * ICMP Rate: Total Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_icmp_any_exceed DataThunderDdosDstZoneStats#dst_icmp_any_exceed}
  */
  readonly dstIcmpAnyExceed?: number;
  /**
  * ICMP Total Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_icmp_bytes_rcv DataThunderDdosDstZoneStats#dst_icmp_bytes_rcv}
  */
  readonly dstIcmpBytesRcv?: number;
  /**
  * ICMP Total Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_icmp_bytes_sent DataThunderDdosDstZoneStats#dst_icmp_bytes_sent}
  */
  readonly dstIcmpBytesSent?: number;
  /**
  * Dst ICMP IP-Proto Blacklist Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_l4_icmp_blacklist_drop DataThunderDdosDstZoneStats#dst_l4_icmp_blacklist_drop}
  */
  readonly dstL4IcmpBlacklistDrop?: number;
  /**
  * Dst OTHER IP-Proto Blacklist Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_l4_other_blacklist_drop DataThunderDdosDstZoneStats#dst_l4_other_blacklist_drop}
  */
  readonly dstL4OtherBlacklistDrop?: number;
  /**
  * Dst TCP IP-Proto Blacklist Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_l4_tcp_blacklist_drop DataThunderDdosDstZoneStats#dst_l4_tcp_blacklist_drop}
  */
  readonly dstL4TcpBlacklistDrop?: number;
  /**
  * Dst UDP IP-Proto Blacklist Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_l4_udp_blacklist_drop DataThunderDdosDstZoneStats#dst_l4_udp_blacklist_drop}
  */
  readonly dstL4UdpBlacklistDrop?: number;
  /**
  * OTHER Rate: Total Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_other_any_exceed DataThunderDdosDstZoneStats#dst_other_any_exceed}
  */
  readonly dstOtherAnyExceed?: number;
  /**
  * OTHER Total Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_other_bytes_rcv DataThunderDdosDstZoneStats#dst_other_bytes_rcv}
  */
  readonly dstOtherBytesRcv?: number;
  /**
  * OTHER Total Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_other_bytes_sent DataThunderDdosDstZoneStats#dst_other_bytes_sent}
  */
  readonly dstOtherBytesSent?: number;
  /**
  * Src Dynamic Entry Count Overflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_src_learn_overflow DataThunderDdosDstZoneStats#dst_src_learn_overflow}
  */
  readonly dstSrcLearnOverflow?: number;
  /**
  * TCP Auth: Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_tcp_auth_drop DataThunderDdosDstZoneStats#dst_tcp_auth_drop}
  */
  readonly dstTcpAuthDrop?: number;
  /**
  * TCP Auth: Responded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_tcp_auth_resp DataThunderDdosDstZoneStats#dst_tcp_auth_resp}
  */
  readonly dstTcpAuthResp?: number;
  /**
  * TCP Auth: Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_tcp_auth_rst DataThunderDdosDstZoneStats#dst_tcp_auth_rst}
  */
  readonly dstTcpAuthRst?: number;
  /**
  * TCP Total Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_tcp_bytes_rcv DataThunderDdosDstZoneStats#dst_tcp_bytes_rcv}
  */
  readonly dstTcpBytesRcv?: number;
  /**
  * TCP Total Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_tcp_bytes_sent DataThunderDdosDstZoneStats#dst_tcp_bytes_sent}
  */
  readonly dstTcpBytesSent?: number;
  /**
  * TCP Connections Closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_tcp_conn_close DataThunderDdosDstZoneStats#dst_tcp_conn_close}
  */
  readonly dstTcpConnClose?: number;
  /**
  * TCP Half Open Connections Closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_tcp_conn_close_half_open DataThunderDdosDstZoneStats#dst_tcp_conn_close_half_open}
  */
  readonly dstTcpConnCloseHalfOpen?: number;
  /**
  * TCP FIN Connections Closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_tcp_conn_close_w_fin DataThunderDdosDstZoneStats#dst_tcp_conn_close_w_fin}
  */
  readonly dstTcpConnCloseWFin?: number;
  /**
  * TCP Idle Connections Closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_tcp_conn_close_w_idle DataThunderDdosDstZoneStats#dst_tcp_conn_close_w_idle}
  */
  readonly dstTcpConnCloseWIdle?: number;
  /**
  * TCP RST Connections Closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_tcp_conn_close_w_rst DataThunderDdosDstZoneStats#dst_tcp_conn_close_w_rst}
  */
  readonly dstTcpConnCloseWRst?: number;
  /**
  * TCP Connections Created From ACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_tcp_conn_create_from_ack DataThunderDdosDstZoneStats#dst_tcp_conn_create_from_ack}
  */
  readonly dstTcpConnCreateFromAck?: number;
  /**
  * TCP Connections Created From SYN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_tcp_conn_create_from_syn DataThunderDdosDstZoneStats#dst_tcp_conn_create_from_syn}
  */
  readonly dstTcpConnCreateFromSyn?: number;
  /**
  * TCP Sessions Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_tcp_session_aged DataThunderDdosDstZoneStats#dst_tcp_session_aged}
  */
  readonly dstTcpSessionAged?: number;
  /**
  * UDP Auth: Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_udp_auth_drop DataThunderDdosDstZoneStats#dst_udp_auth_drop}
  */
  readonly dstUdpAuthDrop?: number;
  /**
  * UDP Total Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_udp_bytes_rcv DataThunderDdosDstZoneStats#dst_udp_bytes_rcv}
  */
  readonly dstUdpBytesRcv?: number;
  /**
  * UDP Total Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_udp_bytes_sent DataThunderDdosDstZoneStats#dst_udp_bytes_sent}
  */
  readonly dstUdpBytesSent?: number;
  /**
  * UDP Auth: Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_udp_retry_fail DataThunderDdosDstZoneStats#dst_udp_retry_fail}
  */
  readonly dstUdpRetryFail?: number;
  /**
  * UDP Auth: Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_udp_retry_gap_drop DataThunderDdosDstZoneStats#dst_udp_retry_gap_drop}
  */
  readonly dstUdpRetryGapDrop?: number;
  /**
  * UDP Auth: Retry Timeout Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_udp_retry_timeout_blacklist DataThunderDdosDstZoneStats#dst_udp_retry_timeout_blacklist}
  */
  readonly dstUdpRetryTimeoutBlacklist?: number;
  /**
  * UDP Sessions Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#dst_udp_session_aged DataThunderDdosDstZoneStats#dst_udp_session_aged}
  */
  readonly dstUdpSessionAged?: number;
  /**
  * East West: Inbound Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#east_west_inbound_drop_byte DataThunderDdosDstZoneStats#east_west_inbound_drop_byte}
  */
  readonly eastWestInboundDropByte?: number;
  /**
  * East West: Inbound Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#east_west_inbound_drop_pkt DataThunderDdosDstZoneStats#east_west_inbound_drop_pkt}
  */
  readonly eastWestInboundDropPkt?: number;
  /**
  * East West: Inbound Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#east_west_inbound_fwd_byte DataThunderDdosDstZoneStats#east_west_inbound_fwd_byte}
  */
  readonly eastWestInboundFwdByte?: number;
  /**
  * East West: Inbound Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#east_west_inbound_fwd_pkt DataThunderDdosDstZoneStats#east_west_inbound_fwd_pkt}
  */
  readonly eastWestInboundFwdPkt?: number;
  /**
  * East West: Inbound Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#east_west_inbound_rcv_byte DataThunderDdosDstZoneStats#east_west_inbound_rcv_byte}
  */
  readonly eastWestInboundRcvByte?: number;
  /**
  * East West: Inbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#east_west_inbound_rcv_pkt DataThunderDdosDstZoneStats#east_west_inbound_rcv_pkt}
  */
  readonly eastWestInboundRcvPkt?: number;
  /**
  * East West: Outbound Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#east_west_outbound_drop_byte DataThunderDdosDstZoneStats#east_west_outbound_drop_byte}
  */
  readonly eastWestOutboundDropByte?: number;
  /**
  * East West: Outbound Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#east_west_outbound_drop_pkt DataThunderDdosDstZoneStats#east_west_outbound_drop_pkt}
  */
  readonly eastWestOutboundDropPkt?: number;
  /**
  * East West: Outbound Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#east_west_outbound_fwd_byte DataThunderDdosDstZoneStats#east_west_outbound_fwd_byte}
  */
  readonly eastWestOutboundFwdByte?: number;
  /**
  * East West: Outbound Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#east_west_outbound_fwd_pkt DataThunderDdosDstZoneStats#east_west_outbound_fwd_pkt}
  */
  readonly eastWestOutboundFwdPkt?: number;
  /**
  * East West: Outbound Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#east_west_outbound_rcv_byte DataThunderDdosDstZoneStats#east_west_outbound_rcv_byte}
  */
  readonly eastWestOutboundRcvByte?: number;
  /**
  * East West: Outbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#east_west_outbound_rcv_pkt DataThunderDdosDstZoneStats#east_west_outbound_rcv_pkt}
  */
  readonly eastWestOutboundRcvPkt?: number;
  /**
  * Outbound: Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#egress_bytes DataThunderDdosDstZoneStats#egress_bytes}
  */
  readonly egressBytes?: number;
  /**
  * Outbound: Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#egress_packets DataThunderDdosDstZoneStats#egress_packets}
  */
  readonly egressPackets?: number;
  /**
  * Entry Sync Message Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#entry_sync_message_received DataThunderDdosDstZoneStats#entry_sync_message_received}
  */
  readonly entrySyncMessageReceived?: number;
  /**
  * Entry Sync Message Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#entry_sync_message_sent DataThunderDdosDstZoneStats#entry_sync_message_sent}
  */
  readonly entrySyncMessageSent?: number;
  /**
  * ICMP Inbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#icmp_fwd_recv DataThunderDdosDstZoneStats#icmp_fwd_recv}
  */
  readonly icmpFwdRecv?: number;
  /**
  * Inbound: Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#inbound_bytes_drop DataThunderDdosDstZoneStats#inbound_bytes_drop}
  */
  readonly inboundBytesDrop?: number;
  /**
  * Inbound: Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#inbound_bytes_sent DataThunderDdosDstZoneStats#inbound_bytes_sent}
  */
  readonly inboundBytesSent?: number;
  /**
  * Inbound: Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#ingress_bytes DataThunderDdosDstZoneStats#ingress_bytes}
  */
  readonly ingressBytes?: number;
  /**
  * Inbound: Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#ingress_packets DataThunderDdosDstZoneStats#ingress_packets}
  */
  readonly ingressPackets?: number;
  /**
  * internal src hash counter for pu1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#multi_pu_src_hash_pu1 DataThunderDdosDstZoneStats#multi_pu_src_hash_pu1}
  */
  readonly multiPuSrcHashPu1?: number;
  /**
  * internal src hash counter for pu2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#multi_pu_src_hash_pu2 DataThunderDdosDstZoneStats#multi_pu_src_hash_pu2}
  */
  readonly multiPuSrcHashPu2?: number;
  /**
  * Outbound: Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#outbound_bytes_drop DataThunderDdosDstZoneStats#outbound_bytes_drop}
  */
  readonly outboundBytesDrop?: number;
  /**
  * Outbound: Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#outbound_bytes_sent DataThunderDdosDstZoneStats#outbound_bytes_sent}
  */
  readonly outboundBytesSent?: number;
  /**
  * Outbound: Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#outbound_drop DataThunderDdosDstZoneStats#outbound_drop}
  */
  readonly outboundDrop?: number;
  /**
  * Outbound: Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#outbound_pkt_sent DataThunderDdosDstZoneStats#outbound_pkt_sent}
  */
  readonly outboundPktSent?: number;
  /**
  * Port Zero Inbound Byte Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#port_zero_fwd_byte_rcvd DataThunderDdosDstZoneStats#port_zero_fwd_byte_rcvd}
  */
  readonly portZeroFwdByteRcvd?: number;
  /**
  * Port Zero Inbound Packet Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#port_zero_fwd_pkt_rcvd DataThunderDdosDstZoneStats#port_zero_fwd_pkt_rcvd}
  */
  readonly portZeroFwdPktRcvd?: number;
  /**
  * Port Zero Outbound Byte Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#port_zero_rev_byte_rcvd DataThunderDdosDstZoneStats#port_zero_rev_byte_rcvd}
  */
  readonly portZeroRevByteRcvd?: number;
  /**
  * Port Zero Outbound Packet Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#port_zero_rev_pkt_rcvd DataThunderDdosDstZoneStats#port_zero_rev_pkt_rcvd}
  */
  readonly portZeroRevPktRcvd?: number;
  /**
  * Connection: Violation Exceed Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#prog_conn_exceed_bl DataThunderDdosDstZoneStats#prog_conn_exceed_bl}
  */
  readonly progConnExceedBl?: number;
  /**
  * Connection: Violation Exceed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#prog_conn_exceed_drop DataThunderDdosDstZoneStats#prog_conn_exceed_drop}
  */
  readonly progConnExceedDrop?: number;
  /**
  * Connection: Received Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#prog_conn_rcvd_exceed DataThunderDdosDstZoneStats#prog_conn_rcvd_exceed}
  */
  readonly progConnRcvdExceed?: number;
  /**
  * Connection: Received to Sent Ratio Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#prog_conn_rcvd_sent_ratio_exceed DataThunderDdosDstZoneStats#prog_conn_rcvd_sent_ratio_exceed}
  */
  readonly progConnRcvdSentRatioExceed?: number;
  /**
  * Sample Collected: Connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#prog_conn_samples DataThunderDdosDstZoneStats#prog_conn_samples}
  */
  readonly progConnSamples?: number;
  /**
  * Sample Processed: Connnection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#prog_conn_samples_processed DataThunderDdosDstZoneStats#prog_conn_samples_processed}
  */
  readonly progConnSamplesProcessed?: number;
  /**
  * Connection: Sent Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#prog_conn_sent_exceed DataThunderDdosDstZoneStats#prog_conn_sent_exceed}
  */
  readonly progConnSentExceed?: number;
  /**
  * Connection: Time Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#prog_conn_time_exceed DataThunderDdosDstZoneStats#prog_conn_time_exceed}
  */
  readonly progConnTimeExceed?: number;
  /**
  * Req-Resp: Violation Exceed Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#prog_exceed_bl DataThunderDdosDstZoneStats#prog_exceed_bl}
  */
  readonly progExceedBl?: number;
  /**
  * Req-Resp: Violation Exceed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#prog_exceed_drop DataThunderDdosDstZoneStats#prog_exceed_drop}
  */
  readonly progExceedDrop?: number;
  /**
  * Req-Resp: First Request Time Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#prog_first_req_time_exceed DataThunderDdosDstZoneStats#prog_first_req_time_exceed}
  */
  readonly progFirstReqTimeExceed?: number;
  /**
  * Req-Resp: Client Query Time Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#prog_query_exceed DataThunderDdosDstZoneStats#prog_query_exceed}
  */
  readonly progQueryExceed?: number;
  /**
  * Req-Resp: Request to Response Time Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#prog_req_resp_time_exceed DataThunderDdosDstZoneStats#prog_req_resp_time_exceed}
  */
  readonly progReqRespTimeExceed?: number;
  /**
  * Sample Collected: Req-Resp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#prog_req_samples DataThunderDdosDstZoneStats#prog_req_samples}
  */
  readonly progReqSamples?: number;
  /**
  * Sample Processed: Req-Resp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#prog_req_samples_processed DataThunderDdosDstZoneStats#prog_req_samples_processed}
  */
  readonly progReqSamplesProcessed?: number;
  /**
  * Req-Resp: Request Length Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#prog_request_len_exceed DataThunderDdosDstZoneStats#prog_request_len_exceed}
  */
  readonly progRequestLenExceed?: number;
  /**
  * Req-Resp: Response Packet Rate Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#prog_resp_pkt_rate_exceed DataThunderDdosDstZoneStats#prog_resp_pkt_rate_exceed}
  */
  readonly progRespPktRateExceed?: number;
  /**
  * Req-Resp: Response to Request Time Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#prog_resp_req_time_exceed DataThunderDdosDstZoneStats#prog_resp_req_time_exceed}
  */
  readonly progRespReqTimeExceed?: number;
  /**
  * Req-Resp: Response Length Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#prog_response_len_exceed DataThunderDdosDstZoneStats#prog_response_len_exceed}
  */
  readonly progResponseLenExceed?: number;
  /**
  * Req-Resp: Server Think Time Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#prog_think_exceed DataThunderDdosDstZoneStats#prog_think_exceed}
  */
  readonly progThinkExceed?: number;
  /**
  * Time Window: Violation Exceed Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#prog_win_exceed_bl DataThunderDdosDstZoneStats#prog_win_exceed_bl}
  */
  readonly progWinExceedBl?: number;
  /**
  * Time Window: Violation Exceed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#prog_win_exceed_drop DataThunderDdosDstZoneStats#prog_win_exceed_drop}
  */
  readonly progWinExceedDrop?: number;
  /**
  * Time Window: Received Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#prog_win_rcvd_exceed DataThunderDdosDstZoneStats#prog_win_rcvd_exceed}
  */
  readonly progWinRcvdExceed?: number;
  /**
  * Time Window: Received to Sent Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#prog_win_rcvd_sent_ratio_exceed DataThunderDdosDstZoneStats#prog_win_rcvd_sent_ratio_exceed}
  */
  readonly progWinRcvdSentRatioExceed?: number;
  /**
  * Sample Collected: Time Window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#prog_win_samples DataThunderDdosDstZoneStats#prog_win_samples}
  */
  readonly progWinSamples?: number;
  /**
  * Sample Processed: Time Window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#prog_win_samples_processed DataThunderDdosDstZoneStats#prog_win_samples_processed}
  */
  readonly progWinSamplesProcessed?: number;
  /**
  * Time Window: Sent Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#prog_win_sent_exceed DataThunderDdosDstZoneStats#prog_win_sent_exceed}
  */
  readonly progWinSentExceed?: number;
  /**
  * Per Addr Limit: Conn Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#secondary_dst_entry_conn_limit_exceed DataThunderDdosDstZoneStats#secondary_dst_entry_conn_limit_exceed}
  */
  readonly secondaryDstEntryConnLimitExceed?: number;
  /**
  * Per Addr Rate: Conn Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#secondary_dst_entry_conn_rate_exceed DataThunderDdosDstZoneStats#secondary_dst_entry_conn_rate_exceed}
  */
  readonly secondaryDstEntryConnRateExceed?: number;
  /**
  * Per Addr Rate: Frag Packet Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#secondary_dst_entry_frag_pkt_rate_exceed DataThunderDdosDstZoneStats#secondary_dst_entry_frag_pkt_rate_exceed}
  */
  readonly secondaryDstEntryFragPktRateExceed?: number;
  /**
  * Per Addr Rate: KiBit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#secondary_dst_entry_kbit_rate_exceed DataThunderDdosDstZoneStats#secondary_dst_entry_kbit_rate_exceed}
  */
  readonly secondaryDstEntryKbitRateExceed?: number;
  /**
  * Per Addr Rate: Packet Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#secondary_dst_entry_pkt_rate_exceed DataThunderDdosDstZoneStats#secondary_dst_entry_pkt_rate_exceed}
  */
  readonly secondaryDstEntryPktRateExceed?: number;
  /**
  * Per Addr Entry Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#secondary_entry_aged DataThunderDdosDstZoneStats#secondary_entry_aged}
  */
  readonly secondaryEntryAged?: number;
  /**
  * Per Addr Entry Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#secondary_entry_hit DataThunderDdosDstZoneStats#secondary_entry_hit}
  */
  readonly secondaryEntryHit?: number;
  /**
  * Per Addr Entry Learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#secondary_entry_learn DataThunderDdosDstZoneStats#secondary_entry_learn}
  */
  readonly secondaryEntryLearn?: number;
  /**
  * Per Addr Entry Count Overflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#secondary_entry_learning_thre_exceed DataThunderDdosDstZoneStats#secondary_entry_learning_thre_exceed}
  */
  readonly secondaryEntryLearningThreExceed?: number;
  /**
  * Per Addr Entry Missed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#secondary_entry_miss DataThunderDdosDstZoneStats#secondary_entry_miss}
  */
  readonly secondaryEntryMiss?: number;
  /**
  * Per Addr Port Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#secondary_port_aged DataThunderDdosDstZoneStats#secondary_port_aged}
  */
  readonly secondaryPortAged?: number;
  /**
  * Per Addr Port Learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#secondary_port_learn DataThunderDdosDstZoneStats#secondary_port_learn}
  */
  readonly secondaryPortLearn?: number;
  /**
  * Service Match Miss: Inbound Byte Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#service_miss_fwd_byte_rcvd DataThunderDdosDstZoneStats#service_miss_fwd_byte_rcvd}
  */
  readonly serviceMissFwdByteRcvd?: number;
  /**
  * Service Match Miss: Inbound Packet Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#service_miss_fwd_pkt_rcvd DataThunderDdosDstZoneStats#service_miss_fwd_pkt_rcvd}
  */
  readonly serviceMissFwdPktRcvd?: number;
  /**
  * Service Match Miss: Outbound Byte Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#service_miss_rev_byte_rcvd DataThunderDdosDstZoneStats#service_miss_rev_byte_rcvd}
  */
  readonly serviceMissRevByteRcvd?: number;
  /**
  * Service Match Miss: Outbound Packet Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#service_miss_rev_pkt_rcvd DataThunderDdosDstZoneStats#service_miss_rev_pkt_rcvd}
  */
  readonly serviceMissRevPktRcvd?: number;
  /**
  * Sflow External Packets Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#sflow_external_packets_sent DataThunderDdosDstZoneStats#sflow_external_packets_sent}
  */
  readonly sflowExternalPacketsSent?: number;
  /**
  * Sflow External Samples Packed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#sflow_external_samples_packed DataThunderDdosDstZoneStats#sflow_external_samples_packed}
  */
  readonly sflowExternalSamplesPacked?: number;
  /**
  * Sflow Internal Packets Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#sflow_internal_packets_sent DataThunderDdosDstZoneStats#sflow_internal_packets_sent}
  */
  readonly sflowInternalPacketsSent?: number;
  /**
  * Sflow Internal Samples Packed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#sflow_internal_samples_packed DataThunderDdosDstZoneStats#sflow_internal_samples_packed}
  */
  readonly sflowInternalSamplesPacked?: number;
  /**
  * Small Window Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#small_window_rcv DataThunderDdosDstZoneStats#small_window_rcv}
  */
  readonly smallWindowRcv?: number;
  /**
  * Source Entry ICMP Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#source_entry_icmp DataThunderDdosDstZoneStats#source_entry_icmp}
  */
  readonly sourceEntryIcmp?: number;
  /**
  * Source Entry OTHER Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#source_entry_other DataThunderDdosDstZoneStats#source_entry_other}
  */
  readonly sourceEntryOther?: number;
  /**
  * Source Entry TCP Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#source_entry_tcp DataThunderDdosDstZoneStats#source_entry_tcp}
  */
  readonly sourceEntryTcp?: number;
  /**
  * Source Entry Total Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#source_entry_total DataThunderDdosDstZoneStats#source_entry_total}
  */
  readonly sourceEntryTotal?: number;
  /**
  * Source Entry UDP Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#source_entry_udp DataThunderDdosDstZoneStats#source_entry_udp}
  */
  readonly sourceEntryUdp?: number;
  /**
  * Src Fragmented Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_frag_drop DataThunderDdosDstZoneStats#src_frag_drop}
  */
  readonly srcFragDrop?: number;
  /**
  * Src OTHER Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_other_filter_action_blacklist DataThunderDdosDstZoneStats#src_other_filter_action_blacklist}
  */
  readonly srcOtherFilterActionBlacklist?: number;
  /**
  * Src OTHER Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_other_filter_action_default_pass DataThunderDdosDstZoneStats#src_other_filter_action_default_pass}
  */
  readonly srcOtherFilterActionDefaultPass?: number;
  /**
  * Src OTHER Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_other_filter_action_drop DataThunderDdosDstZoneStats#src_other_filter_action_drop}
  */
  readonly srcOtherFilterActionDrop?: number;
  /**
  * Src OTHER Filter Action WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_other_filter_action_whitelist DataThunderDdosDstZoneStats#src_other_filter_action_whitelist}
  */
  readonly srcOtherFilterActionWhitelist?: number;
  /**
  * Src TCP Auth: ACK Retry Timeout Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_tcp_action_on_ack_blacklist DataThunderDdosDstZoneStats#src_tcp_action_on_ack_blacklist}
  */
  readonly srcTcpActionOnAckBlacklist?: number;
  /**
  * Src TCP Auth: ACK Retry Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_tcp_action_on_ack_fail DataThunderDdosDstZoneStats#src_tcp_action_on_ack_fail}
  */
  readonly srcTcpActionOnAckFail?: number;
  /**
  * Src TCP Auth: ACK Retry Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_tcp_action_on_ack_gap_drop DataThunderDdosDstZoneStats#src_tcp_action_on_ack_gap_drop}
  */
  readonly srcTcpActionOnAckGapDrop?: number;
  /**
  * Src TCP Auth: ACK Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_tcp_action_on_ack_init DataThunderDdosDstZoneStats#src_tcp_action_on_ack_init}
  */
  readonly srcTcpActionOnAckInit?: number;
  /**
  * Src TCP Auth: ACK Retry Timeout Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_tcp_action_on_ack_reset DataThunderDdosDstZoneStats#src_tcp_action_on_ack_reset}
  */
  readonly srcTcpActionOnAckReset?: number;
  /**
  * Src TCP Auth: ACK Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_tcp_action_on_ack_timeout DataThunderDdosDstZoneStats#src_tcp_action_on_ack_timeout}
  */
  readonly srcTcpActionOnAckTimeout?: number;
  /**
  * Src TCP Auth: SYN Retry Timeout Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_tcp_action_on_syn_blacklist DataThunderDdosDstZoneStats#src_tcp_action_on_syn_blacklist}
  */
  readonly srcTcpActionOnSynBlacklist?: number;
  /**
  * Src TCP Auth: SYN Retry Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_tcp_action_on_syn_fail DataThunderDdosDstZoneStats#src_tcp_action_on_syn_fail}
  */
  readonly srcTcpActionOnSynFail?: number;
  /**
  * Src TCP Auth: SYN Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_tcp_action_on_syn_gap_drop DataThunderDdosDstZoneStats#src_tcp_action_on_syn_gap_drop}
  */
  readonly srcTcpActionOnSynGapDrop?: number;
  /**
  * Src TCP Auth: SYN Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_tcp_action_on_syn_init DataThunderDdosDstZoneStats#src_tcp_action_on_syn_init}
  */
  readonly srcTcpActionOnSynInit?: number;
  /**
  * Src TCP Auth: SYN Retry Timeout Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_tcp_action_on_syn_reset DataThunderDdosDstZoneStats#src_tcp_action_on_syn_reset}
  */
  readonly srcTcpActionOnSynReset?: number;
  /**
  * Src TCP Auth: SYN Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_tcp_action_on_syn_timeout DataThunderDdosDstZoneStats#src_tcp_action_on_syn_timeout}
  */
  readonly srcTcpActionOnSynTimeout?: number;
  /**
  * Src TCP Rate: Conn Pkt Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_tcp_conn_prate_excd DataThunderDdosDstZoneStats#src_tcp_conn_prate_excd}
  */
  readonly srcTcpConnPrateExcd?: number;
  /**
  * Src TCP Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_tcp_filter_action_blacklist DataThunderDdosDstZoneStats#src_tcp_filter_action_blacklist}
  */
  readonly srcTcpFilterActionBlacklist?: number;
  /**
  * Src TCP Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_tcp_filter_action_default_pass DataThunderDdosDstZoneStats#src_tcp_filter_action_default_pass}
  */
  readonly srcTcpFilterActionDefaultPass?: number;
  /**
  * Src TCP Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_tcp_filter_action_drop DataThunderDdosDstZoneStats#src_tcp_filter_action_drop}
  */
  readonly srcTcpFilterActionDrop?: number;
  /**
  * Src TCP Filter Action WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_tcp_filter_action_whitelist DataThunderDdosDstZoneStats#src_tcp_filter_action_whitelist}
  */
  readonly srcTcpFilterActionWhitelist?: number;
  /**
  * Src TCP Out-Of-Seq Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_tcp_out_of_seq_excd DataThunderDdosDstZoneStats#src_tcp_out_of_seq_excd}
  */
  readonly srcTcpOutOfSeqExcd?: number;
  /**
  * Src TCP Retransmit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_tcp_retransmit_excd DataThunderDdosDstZoneStats#src_tcp_retransmit_excd}
  */
  readonly srcTcpRetransmitExcd?: number;
  /**
  * Src TCP Auth: RST Cookie Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_tcp_rst_cookie_fail DataThunderDdosDstZoneStats#src_tcp_rst_cookie_fail}
  */
  readonly srcTcpRstCookieFail?: number;
  /**
  * Src TCP Small-Window Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_tcp_small_window_excd DataThunderDdosDstZoneStats#src_tcp_small_window_excd}
  */
  readonly srcTcpSmallWindowExcd?: number;
  /**
  * Src TCP Auth: SYN Auth Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_tcp_syn_auth_fail DataThunderDdosDstZoneStats#src_tcp_syn_auth_fail}
  */
  readonly srcTcpSynAuthFail?: number;
  /**
  * Src TCP Auth: SYN Cookie Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_tcp_syn_cookie_fail DataThunderDdosDstZoneStats#src_tcp_syn_cookie_fail}
  */
  readonly srcTcpSynCookieFail?: number;
  /**
  * Src TCP Auth: SYN Cookie Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_tcp_syn_cookie_sent DataThunderDdosDstZoneStats#src_tcp_syn_cookie_sent}
  */
  readonly srcTcpSynCookieSent?: number;
  /**
  * Src TCP Auth: Unauth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_tcp_unauth_drop DataThunderDdosDstZoneStats#src_tcp_unauth_drop}
  */
  readonly srcTcpUnauthDrop?: number;
  /**
  * Src TCP SrcPort Wellknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_tcp_wellknown_sport_drop DataThunderDdosDstZoneStats#src_tcp_wellknown_sport_drop}
  */
  readonly srcTcpWellknownSportDrop?: number;
  /**
  * Src TCP Zero-Window Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_tcp_zero_window_excd DataThunderDdosDstZoneStats#src_tcp_zero_window_excd}
  */
  readonly srcTcpZeroWindowExcd?: number;
  /**
  * Src UDP Auth: Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_udp_auth_timeout DataThunderDdosDstZoneStats#src_udp_auth_timeout}
  */
  readonly srcUdpAuthTimeout?: number;
  /**
  * Src UDP Rate: Conn Pkt Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_udp_conn_prate_excd DataThunderDdosDstZoneStats#src_udp_conn_prate_excd}
  */
  readonly srcUdpConnPrateExcd?: number;
  /**
  * Src UDP Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_udp_filter_action_blacklist DataThunderDdosDstZoneStats#src_udp_filter_action_blacklist}
  */
  readonly srcUdpFilterActionBlacklist?: number;
  /**
  * Src UDP Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_udp_filter_action_default_pass DataThunderDdosDstZoneStats#src_udp_filter_action_default_pass}
  */
  readonly srcUdpFilterActionDefaultPass?: number;
  /**
  * Src UDP Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_udp_filter_action_drop DataThunderDdosDstZoneStats#src_udp_filter_action_drop}
  */
  readonly srcUdpFilterActionDrop?: number;
  /**
  * Src UDP Filter Action WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_udp_filter_action_whitelist DataThunderDdosDstZoneStats#src_udp_filter_action_whitelist}
  */
  readonly srcUdpFilterActionWhitelist?: number;
  /**
  * Src UDP Payload Too Large
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_udp_max_payload DataThunderDdosDstZoneStats#src_udp_max_payload}
  */
  readonly srcUdpMaxPayload?: number;
  /**
  * Src UDP Payload Too Small
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_udp_min_payload DataThunderDdosDstZoneStats#src_udp_min_payload}
  */
  readonly srcUdpMinPayload?: number;
  /**
  * Src UDP NTP Monlist Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_udp_ntp_monlist_req DataThunderDdosDstZoneStats#src_udp_ntp_monlist_req}
  */
  readonly srcUdpNtpMonlistReq?: number;
  /**
  * Src UDP NTP Monlist Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_udp_ntp_monlist_resp DataThunderDdosDstZoneStats#src_udp_ntp_monlist_resp}
  */
  readonly srcUdpNtpMonlistResp?: number;
  /**
  * Src UDP Auth: Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_udp_retry_gap_drop DataThunderDdosDstZoneStats#src_udp_retry_gap_drop}
  */
  readonly srcUdpRetryGapDrop?: number;
  /**
  * Src UDP Auth: Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_udp_retry_init DataThunderDdosDstZoneStats#src_udp_retry_init}
  */
  readonly srcUdpRetryInit?: number;
  /**
  * Src UDP Retry Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_udp_retry_pass DataThunderDdosDstZoneStats#src_udp_retry_pass}
  */
  readonly srcUdpRetryPass?: number;
  /**
  * Src UDP SrcPort Wellknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#src_udp_wellknown_sport_drop DataThunderDdosDstZoneStats#src_udp_wellknown_sport_drop}
  */
  readonly srcUdpWellknownSportDrop?: number;
  /**
  * TCP ACK Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#tcp_ack_rcvd DataThunderDdosDstZoneStats#tcp_ack_rcvd}
  */
  readonly tcpAckRcvd?: number;
  /**
  * TCP FIN Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#tcp_fin_rcvd DataThunderDdosDstZoneStats#tcp_fin_rcvd}
  */
  readonly tcpFinRcvd?: number;
  /**
  * TCP Inbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#tcp_fwd_recv DataThunderDdosDstZoneStats#tcp_fwd_recv}
  */
  readonly tcpFwdRecv?: number;
  /**
  * TCP Invalid SYN Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#tcp_invalid_syn DataThunderDdosDstZoneStats#tcp_invalid_syn}
  */
  readonly tcpInvalidSyn?: number;
  /**
  * TCP Invalid SYNACK Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#tcp_invalid_synack DataThunderDdosDstZoneStats#tcp_invalid_synack}
  */
  readonly tcpInvalidSynack?: number;
  /**
  * TCP SYN Retransmit Exceeded Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#tcp_rexmit_syn_limit_bl DataThunderDdosDstZoneStats#tcp_rexmit_syn_limit_bl}
  */
  readonly tcpRexmitSynLimitBl?: number;
  /**
  * TCP SYN Retransmit Exceeded Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#tcp_rexmit_syn_limit_drop DataThunderDdosDstZoneStats#tcp_rexmit_syn_limit_drop}
  */
  readonly tcpRexmitSynLimitDrop?: number;
  /**
  * TCP RST Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#tcp_rst_rcvd DataThunderDdosDstZoneStats#tcp_rst_rcvd}
  */
  readonly tcpRstRcvd?: number;
  /**
  * TCP SYN ACK Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#tcp_syn_ack_rcvd DataThunderDdosDstZoneStats#tcp_syn_ack_rcvd}
  */
  readonly tcpSynAckRcvd?: number;
  /**
  * TCP Auth: SYN Cookie Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#tcp_syn_cookie_fail DataThunderDdosDstZoneStats#tcp_syn_cookie_fail}
  */
  readonly tcpSynCookieFail?: number;
  /**
  * TCP Inbound SYN Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#tcp_syn_rcvd DataThunderDdosDstZoneStats#tcp_syn_rcvd}
  */
  readonly tcpSynRcvd?: number;
  /**
  * Token Authentication Current Salt Matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#token_auth_current_salt_matched DataThunderDdosDstZoneStats#token_auth_current_salt_matched}
  */
  readonly tokenAuthCurrentSaltMatched?: number;
  /**
  * Token Authentication Invalid Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#token_auth_invalid_packets DataThunderDdosDstZoneStats#token_auth_invalid_packets}
  */
  readonly tokenAuthInvalidPackets?: number;
  /**
  * Token Authentication Mismatched Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#token_auth_mismatched_packets DataThunderDdosDstZoneStats#token_auth_mismatched_packets}
  */
  readonly tokenAuthMismatchedPackets?: number;
  /**
  * Token Authentication Previous Salt Matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#token_auth_previous_salt_matched DataThunderDdosDstZoneStats#token_auth_previous_salt_matched}
  */
  readonly tokenAuthPreviousSaltMatched?: number;
  /**
  * Token Authentication Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#token_auth_session_created DataThunderDdosDstZoneStats#token_auth_session_created}
  */
  readonly tokenAuthSessionCreated?: number;
  /**
  * Token Authentication Session Created Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#token_auth_session_created_fail DataThunderDdosDstZoneStats#token_auth_session_created_fail}
  */
  readonly tokenAuthSessionCreatedFail?: number;
  /**
  * UDP Inbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#udp_fwd_recv DataThunderDdosDstZoneStats#udp_fwd_recv}
  */
  readonly udpFwdRecv?: number;
  /**
  * Victim Identification: IP Entry Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#victim_ip_aged DataThunderDdosDstZoneStats#victim_ip_aged}
  */
  readonly victimIpAged?: number;
  /**
  * Victim Identification: IP Entry Learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#victim_ip_learned DataThunderDdosDstZoneStats#victim_ip_learned}
  */
  readonly victimIpLearned?: number;
  /**
  * Dst Blackhole Inject
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_blackhole_inject DataThunderDdosDstZoneStats#zone_blackhole_inject}
  */
  readonly zoneBlackholeInject?: number;
  /**
  * Dst Blackhole Withdraw
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_blackhole_withdraw DataThunderDdosDstZoneStats#zone_blackhole_withdraw}
  */
  readonly zoneBlackholeWithdraw?: number;
  /**
  * Fragmented Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_frag_drop DataThunderDdosDstZoneStats#zone_frag_drop}
  */
  readonly zoneFragDrop?: number;
  /**
  * Fragmented Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_frag_rcvd DataThunderDdosDstZoneStats#zone_frag_rcvd}
  */
  readonly zoneFragRcvd?: number;
  /**
  * ICMP Total Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_icmp_bytes_drop DataThunderDdosDstZoneStats#zone_icmp_bytes_drop}
  */
  readonly zoneIcmpBytesDrop?: number;
  /**
  * ICMP Total Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_icmp_drop DataThunderDdosDstZoneStats#zone_icmp_drop}
  */
  readonly zoneIcmpDrop?: number;
  /**
  * ICMP Dst IP-Proto Rate: Frag Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_icmp_frag_pkt_rate_exceed DataThunderDdosDstZoneStats#zone_icmp_frag_pkt_rate_exceed}
  */
  readonly zoneIcmpFragPktRateExceed?: number;
  /**
  * ICMP Src Rate: Frag Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_icmp_frag_src_rate_drop DataThunderDdosDstZoneStats#zone_icmp_frag_src_rate_drop}
  */
  readonly zoneIcmpFragSrcRateDrop?: number;
  /**
  * ICMP Dst Rate: KiBit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_icmp_kibit_rate_drop DataThunderDdosDstZoneStats#zone_icmp_kibit_rate_drop}
  */
  readonly zoneIcmpKibitRateDrop?: number;
  /**
  * ICMP Dst Rate: Packet Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_icmp_pkt_rate_exceed DataThunderDdosDstZoneStats#zone_icmp_pkt_rate_exceed}
  */
  readonly zoneIcmpPktRateExceed?: number;
  /**
  * ICMP Total Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_icmp_pkt_rcvd DataThunderDdosDstZoneStats#zone_icmp_pkt_rcvd}
  */
  readonly zoneIcmpPktRcvd?: number;
  /**
  * ICMP Total Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_icmp_pkt_sent DataThunderDdosDstZoneStats#zone_icmp_pkt_sent}
  */
  readonly zoneIcmpPktSent?: number;
  /**
  * ICMP Src Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_icmp_src_drop DataThunderDdosDstZoneStats#zone_icmp_src_drop}
  */
  readonly zoneIcmpSrcDrop?: number;
  /**
  * ICMP Src Rate: Total Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_icmp_src_rate_drop DataThunderDdosDstZoneStats#zone_icmp_src_rate_drop}
  */
  readonly zoneIcmpSrcRateDrop?: number;
  /**
  * IP-Proto Rate: KiBit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_ip_proto_kbit_rate_exceed DataThunderDdosDstZoneStats#zone_ip_proto_kbit_rate_exceed}
  */
  readonly zoneIpProtoKbitRateExceed?: number;
  /**
  * IP-Proto Rate: Packet Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_ip_proto_pkt_rate_exceed DataThunderDdosDstZoneStats#zone_ip_proto_pkt_rate_exceed}
  */
  readonly zoneIpProtoPktRateExceed?: number;
  /**
  * OTHER Total Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_other_bytes_drop DataThunderDdosDstZoneStats#zone_other_bytes_drop}
  */
  readonly zoneOtherBytesDrop?: number;
  /**
  * OTHER Total Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_other_drop DataThunderDdosDstZoneStats#zone_other_drop}
  */
  readonly zoneOtherDrop?: number;
  /**
  * OTHER Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_other_filter_action_blacklist DataThunderDdosDstZoneStats#zone_other_filter_action_blacklist}
  */
  readonly zoneOtherFilterActionBlacklist?: number;
  /**
  * OTHER Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_other_filter_action_default_pass DataThunderDdosDstZoneStats#zone_other_filter_action_default_pass}
  */
  readonly zoneOtherFilterActionDefaultPass?: number;
  /**
  * OTHER Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_other_filter_action_drop DataThunderDdosDstZoneStats#zone_other_filter_action_drop}
  */
  readonly zoneOtherFilterActionDrop?: number;
  /**
  * OTHER Filter Action WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_other_filter_action_whitelist DataThunderDdosDstZoneStats#zone_other_filter_action_whitelist}
  */
  readonly zoneOtherFilterActionWhitelist?: number;
  /**
  * OTHER Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_other_filter_match DataThunderDdosDstZoneStats#zone_other_filter_match}
  */
  readonly zoneOtherFilterMatch?: number;
  /**
  * OTHER Filter Not Matched on Pkt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_other_filter_not_match DataThunderDdosDstZoneStats#zone_other_filter_not_match}
  */
  readonly zoneOtherFilterNotMatch?: number;
  /**
  * OTHER Dst IP-Proto Rate: Frag Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_other_frag_pkt_rate_exceed DataThunderDdosDstZoneStats#zone_other_frag_pkt_rate_exceed}
  */
  readonly zoneOtherFragPktRateExceed?: number;
  /**
  * OTHER Src Rate: Frag Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_other_frag_src_rate_drop DataThunderDdosDstZoneStats#zone_other_frag_src_rate_drop}
  */
  readonly zoneOtherFragSrcRateDrop?: number;
  /**
  * OTHER Dst IP-Proto Rate: KiBit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_other_kibit_rate_drop DataThunderDdosDstZoneStats#zone_other_kibit_rate_drop}
  */
  readonly zoneOtherKibitRateDrop?: number;
  /**
  * OTHER Dst IP-Proto Rate: Packet Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_other_pkt_rate_exceed DataThunderDdosDstZoneStats#zone_other_pkt_rate_exceed}
  */
  readonly zoneOtherPktRateExceed?: number;
  /**
  * OTHER Total Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_other_pkt_rcvd DataThunderDdosDstZoneStats#zone_other_pkt_rcvd}
  */
  readonly zoneOtherPktRcvd?: number;
  /**
  * OTHER Total Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_other_pkt_sent DataThunderDdosDstZoneStats#zone_other_pkt_sent}
  */
  readonly zoneOtherPktSent?: number;
  /**
  * OTHER Src Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_other_src_drop DataThunderDdosDstZoneStats#zone_other_src_drop}
  */
  readonly zoneOtherSrcDrop?: number;
  /**
  * OTHER Src Rate: Total Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_other_src_rate_drop DataThunderDdosDstZoneStats#zone_other_src_rate_drop}
  */
  readonly zoneOtherSrcRateDrop?: number;
  /**
  * Dst IPv4/v6 Out No Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_out_no_route DataThunderDdosDstZoneStats#zone_out_no_route}
  */
  readonly zoneOutNoRoute?: number;
  /**
  * UDP Payload Too Large
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_payload_too_big DataThunderDdosDstZoneStats#zone_payload_too_big}
  */
  readonly zonePayloadTooBig?: number;
  /**
  * UDP Payload Too Small
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_payload_too_small DataThunderDdosDstZoneStats#zone_payload_too_small}
  */
  readonly zonePayloadTooSmall?: number;
  /**
  * Inbound: Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_pkt_sent DataThunderDdosDstZoneStats#zone_pkt_sent}
  */
  readonly zonePktSent?: number;
  /**
  * Dst Port Blacklist Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_port_bl DataThunderDdosDstZoneStats#zone_port_bl}
  */
  readonly zonePortBl?: number;
  /**
  * Port Limit: Conn Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_port_conn_limit_exceed DataThunderDdosDstZoneStats#zone_port_conn_limit_exceed}
  */
  readonly zonePortConnLimitExceed?: number;
  /**
  * Port Rate: Conn Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_port_conn_rate_exceed DataThunderDdosDstZoneStats#zone_port_conn_rate_exceed}
  */
  readonly zonePortConnRateExceed?: number;
  /**
  * Port Rate: KiBit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_port_kbit_rate_exceed DataThunderDdosDstZoneStats#zone_port_kbit_rate_exceed}
  */
  readonly zonePortKbitRateExceed?: number;
  /**
  * Port Rate: KiBit Pkt Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_port_kbit_rate_exceed_pkt DataThunderDdosDstZoneStats#zone_port_kbit_rate_exceed_pkt}
  */
  readonly zonePortKbitRateExceedPkt?: number;
  /**
  * Port Rate: Packet Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_port_pkt_rate_exceed DataThunderDdosDstZoneStats#zone_port_pkt_rate_exceed}
  */
  readonly zonePortPktRateExceed?: number;
  /**
  * Dst Port Undefined Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_port_undef_drop DataThunderDdosDstZoneStats#zone_port_undef_drop}
  */
  readonly zonePortUndefDrop?: number;
  /**
  * Dst Port undefined Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_port_undef_hit DataThunderDdosDstZoneStats#zone_port_undef_hit}
  */
  readonly zonePortUndefHit?: number;
  /**
  * Dst SrcPort Blacklist Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_src_port_bl DataThunderDdosDstZoneStats#zone_src_port_bl}
  */
  readonly zoneSrcPortBl?: number;
  /**
  * SrcPort Limit: Conn Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_src_port_conn_limit_exceed DataThunderDdosDstZoneStats#zone_src_port_conn_limit_exceed}
  */
  readonly zoneSrcPortConnLimitExceed?: number;
  /**
  * SrcPort Rate: Conn Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_src_port_conn_rate_exceed DataThunderDdosDstZoneStats#zone_src_port_conn_rate_exceed}
  */
  readonly zoneSrcPortConnRateExceed?: number;
  /**
  * SrcPort Rate: KiBit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_src_port_kbit_rate_exceed DataThunderDdosDstZoneStats#zone_src_port_kbit_rate_exceed}
  */
  readonly zoneSrcPortKbitRateExceed?: number;
  /**
  * SrcPort Rate: Packet Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_src_port_pkt_rate_exceed DataThunderDdosDstZoneStats#zone_src_port_pkt_rate_exceed}
  */
  readonly zoneSrcPortPktRateExceed?: number;
  /**
  * Src UDP Auth: Retry Timeout Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_src_udp_retry_timeout_blacklist DataThunderDdosDstZoneStats#zone_src_udp_retry_timeout_blacklist}
  */
  readonly zoneSrcUdpRetryTimeoutBlacklist?: number;
  /**
  * TCP Auth: ACK Retry Timeout Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_action_on_ack_blacklist DataThunderDdosDstZoneStats#zone_tcp_action_on_ack_blacklist}
  */
  readonly zoneTcpActionOnAckBlacklist?: number;
  /**
  * TCP Auth: ACK Retry Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_action_on_ack_fail DataThunderDdosDstZoneStats#zone_tcp_action_on_ack_fail}
  */
  readonly zoneTcpActionOnAckFail?: number;
  /**
  * TCP Auth: ACK Retry Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_action_on_ack_gap_drop DataThunderDdosDstZoneStats#zone_tcp_action_on_ack_gap_drop}
  */
  readonly zoneTcpActionOnAckGapDrop?: number;
  /**
  * TCP Auth: ACK Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_action_on_ack_init DataThunderDdosDstZoneStats#zone_tcp_action_on_ack_init}
  */
  readonly zoneTcpActionOnAckInit?: number;
  /**
  * TCP Auth: ACK Retry Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_action_on_ack_pass DataThunderDdosDstZoneStats#zone_tcp_action_on_ack_pass}
  */
  readonly zoneTcpActionOnAckPass?: number;
  /**
  * TCP Auth: ACK Retry Timeout Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_action_on_ack_reset DataThunderDdosDstZoneStats#zone_tcp_action_on_ack_reset}
  */
  readonly zoneTcpActionOnAckReset?: number;
  /**
  * TCP Auth: ACK Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_action_on_ack_timeout DataThunderDdosDstZoneStats#zone_tcp_action_on_ack_timeout}
  */
  readonly zoneTcpActionOnAckTimeout?: number;
  /**
  * TCP Auth: SYN Retry Timeout Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_action_on_syn_blacklist DataThunderDdosDstZoneStats#zone_tcp_action_on_syn_blacklist}
  */
  readonly zoneTcpActionOnSynBlacklist?: number;
  /**
  * TCP Auth: SYN Retry Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_action_on_syn_fail DataThunderDdosDstZoneStats#zone_tcp_action_on_syn_fail}
  */
  readonly zoneTcpActionOnSynFail?: number;
  /**
  * TCP Auth: SYN Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_action_on_syn_gap_drop DataThunderDdosDstZoneStats#zone_tcp_action_on_syn_gap_drop}
  */
  readonly zoneTcpActionOnSynGapDrop?: number;
  /**
  * TCP Auth: SYN Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_action_on_syn_init DataThunderDdosDstZoneStats#zone_tcp_action_on_syn_init}
  */
  readonly zoneTcpActionOnSynInit?: number;
  /**
  * TCP Auth: SYN Retry Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_action_on_syn_pass DataThunderDdosDstZoneStats#zone_tcp_action_on_syn_pass}
  */
  readonly zoneTcpActionOnSynPass?: number;
  /**
  * TCP Auth: SYN Retry Timeout Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_action_on_syn_reset DataThunderDdosDstZoneStats#zone_tcp_action_on_syn_reset}
  */
  readonly zoneTcpActionOnSynReset?: number;
  /**
  * TCP Auth: SYN Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_action_on_syn_timeout DataThunderDdosDstZoneStats#zone_tcp_action_on_syn_timeout}
  */
  readonly zoneTcpActionOnSynTimeout?: number;
  /**
  * TCP Dst IP-Proto Rate: Total Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_any_exceed DataThunderDdosDstZoneStats#zone_tcp_any_exceed}
  */
  readonly zoneTcpAnyExceed?: number;
  /**
  * TCP Auth: SYN Cookie Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_auth DataThunderDdosDstZoneStats#zone_tcp_auth}
  */
  readonly zoneTcpAuth?: number;
  /**
  * TCP Auth: SYN Auth Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_auth_pass DataThunderDdosDstZoneStats#zone_tcp_auth_pass}
  */
  readonly zoneTcpAuthPass?: number;
  /**
  * TCP Total Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_bytes_drop DataThunderDdosDstZoneStats#zone_tcp_bytes_drop}
  */
  readonly zoneTcpBytesDrop?: number;
  /**
  * TCP Dst IP-Proto Limit: Conn Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_conn_limit_exceed DataThunderDdosDstZoneStats#zone_tcp_conn_limit_exceed}
  */
  readonly zoneTcpConnLimitExceed?: number;
  /**
  * TCP Rate: Conn Pkt Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_conn_prate_excd DataThunderDdosDstZoneStats#zone_tcp_conn_prate_excd}
  */
  readonly zoneTcpConnPrateExcd?: number;
  /**
  * TCP Dst IP-Proto Rate: Conn Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_conn_rate_exceed DataThunderDdosDstZoneStats#zone_tcp_conn_rate_exceed}
  */
  readonly zoneTcpConnRateExceed?: number;
  /**
  * TCP Total Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_drop DataThunderDdosDstZoneStats#zone_tcp_drop}
  */
  readonly zoneTcpDrop?: number;
  /**
  * TCP Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_filter_action_blacklist DataThunderDdosDstZoneStats#zone_tcp_filter_action_blacklist}
  */
  readonly zoneTcpFilterActionBlacklist?: number;
  /**
  * TCP Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_filter_action_default_pass DataThunderDdosDstZoneStats#zone_tcp_filter_action_default_pass}
  */
  readonly zoneTcpFilterActionDefaultPass?: number;
  /**
  * TCP Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_filter_action_drop DataThunderDdosDstZoneStats#zone_tcp_filter_action_drop}
  */
  readonly zoneTcpFilterActionDrop?: number;
  /**
  * TCP Filter Action WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_filter_action_whitelist DataThunderDdosDstZoneStats#zone_tcp_filter_action_whitelist}
  */
  readonly zoneTcpFilterActionWhitelist?: number;
  /**
  * TCP Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_filter_match DataThunderDdosDstZoneStats#zone_tcp_filter_match}
  */
  readonly zoneTcpFilterMatch?: number;
  /**
  * TCP Filter Not Matched on Pkt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_filter_not_match DataThunderDdosDstZoneStats#zone_tcp_filter_not_match}
  */
  readonly zoneTcpFilterNotMatch?: number;
  /**
  * TCP Dst IP-Proto Rate: Frag Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_frag_pkt_rate_exceed DataThunderDdosDstZoneStats#zone_tcp_frag_pkt_rate_exceed}
  */
  readonly zoneTcpFragPktRateExceed?: number;
  /**
  * TCP Src Rate: Frag Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_frag_src_rate_drop DataThunderDdosDstZoneStats#zone_tcp_frag_src_rate_drop}
  */
  readonly zoneTcpFragSrcRateDrop?: number;
  /**
  * TCP Dst IP-Proto Rate: KiBit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_kibit_rate_drop DataThunderDdosDstZoneStats#zone_tcp_kibit_rate_drop}
  */
  readonly zoneTcpKibitRateDrop?: number;
  /**
  * TCP Out-Of-Seq Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_out_of_seq_excd DataThunderDdosDstZoneStats#zone_tcp_out_of_seq_excd}
  */
  readonly zoneTcpOutOfSeqExcd?: number;
  /**
  * TCP Dst IP-Proto Rate: Packet Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_pkt_rate_exceed DataThunderDdosDstZoneStats#zone_tcp_pkt_rate_exceed}
  */
  readonly zoneTcpPktRateExceed?: number;
  /**
  * TCP Total Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_pkt_rcvd DataThunderDdosDstZoneStats#zone_tcp_pkt_rcvd}
  */
  readonly zoneTcpPktRcvd?: number;
  /**
  * TCP Total Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_pkt_sent DataThunderDdosDstZoneStats#zone_tcp_pkt_sent}
  */
  readonly zoneTcpPktSent?: number;
  /**
  * TCP Port Rate: Total Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_port_any_exceed DataThunderDdosDstZoneStats#zone_tcp_port_any_exceed}
  */
  readonly zoneTcpPortAnyExceed?: number;
  /**
  * TCP Retransmit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_retransmit_excd DataThunderDdosDstZoneStats#zone_tcp_retransmit_excd}
  */
  readonly zoneTcpRetransmitExcd?: number;
  /**
  * TCP Auth: RST Cookie Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_rst_cookie_fail DataThunderDdosDstZoneStats#zone_tcp_rst_cookie_fail}
  */
  readonly zoneTcpRstCookieFail?: number;
  /**
  * TCP Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_session_created DataThunderDdosDstZoneStats#zone_tcp_session_created}
  */
  readonly zoneTcpSessionCreated?: number;
  /**
  * TCP Small-Window Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_small_window_excd DataThunderDdosDstZoneStats#zone_tcp_small_window_excd}
  */
  readonly zoneTcpSmallWindowExcd?: number;
  /**
  * TCP Src Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_src_drop DataThunderDdosDstZoneStats#zone_tcp_src_drop}
  */
  readonly zoneTcpSrcDrop?: number;
  /**
  * TCP Src Rate: Total Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_src_rate_drop DataThunderDdosDstZoneStats#zone_tcp_src_rate_drop}
  */
  readonly zoneTcpSrcRateDrop?: number;
  /**
  * TCP Total SYN Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_syn DataThunderDdosDstZoneStats#zone_tcp_syn}
  */
  readonly zoneTcpSyn?: number;
  /**
  * TCP SYN Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_syn_drop DataThunderDdosDstZoneStats#zone_tcp_syn_drop}
  */
  readonly zoneTcpSynDrop?: number;
  /**
  * TCP Auth: Unauth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_unauth_drop DataThunderDdosDstZoneStats#zone_tcp_unauth_drop}
  */
  readonly zoneTcpUnauthDrop?: number;
  /**
  * TCP SrcPort Wellknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_wellknown_sport_drop DataThunderDdosDstZoneStats#zone_tcp_wellknown_sport_drop}
  */
  readonly zoneTcpWellknownSportDrop?: number;
  /**
  * TCP Zero-Window Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_tcp_zero_window_excd DataThunderDdosDstZoneStats#zone_tcp_zero_window_excd}
  */
  readonly zoneTcpZeroWindowExcd?: number;
  /**
  * UDP Dst IP-Proto Rate: Total Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_udp_any_exceed DataThunderDdosDstZoneStats#zone_udp_any_exceed}
  */
  readonly zoneUdpAnyExceed?: number;
  /**
  * UDP Total Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_udp_bytes_drop DataThunderDdosDstZoneStats#zone_udp_bytes_drop}
  */
  readonly zoneUdpBytesDrop?: number;
  /**
  * UDP Dst IP-Proto Limit: Conn Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_udp_conn_limit_exceed DataThunderDdosDstZoneStats#zone_udp_conn_limit_exceed}
  */
  readonly zoneUdpConnLimitExceed?: number;
  /**
  * UDP Rate: Conn Pkt Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_udp_conn_prate_excd DataThunderDdosDstZoneStats#zone_udp_conn_prate_excd}
  */
  readonly zoneUdpConnPrateExcd?: number;
  /**
  * UDP Dst IP-Proto Rate: Conn Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_udp_conn_rate_exceed DataThunderDdosDstZoneStats#zone_udp_conn_rate_exceed}
  */
  readonly zoneUdpConnRateExceed?: number;
  /**
  * UDP Total Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_udp_drop DataThunderDdosDstZoneStats#zone_udp_drop}
  */
  readonly zoneUdpDrop?: number;
  /**
  * UDP Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_udp_filter_action_blacklist DataThunderDdosDstZoneStats#zone_udp_filter_action_blacklist}
  */
  readonly zoneUdpFilterActionBlacklist?: number;
  /**
  * UDP Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_udp_filter_action_default_pass DataThunderDdosDstZoneStats#zone_udp_filter_action_default_pass}
  */
  readonly zoneUdpFilterActionDefaultPass?: number;
  /**
  * UDP Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_udp_filter_action_drop DataThunderDdosDstZoneStats#zone_udp_filter_action_drop}
  */
  readonly zoneUdpFilterActionDrop?: number;
  /**
  * UDP Filter Action WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_udp_filter_action_whitelist DataThunderDdosDstZoneStats#zone_udp_filter_action_whitelist}
  */
  readonly zoneUdpFilterActionWhitelist?: number;
  /**
  * UDP Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_udp_filter_match DataThunderDdosDstZoneStats#zone_udp_filter_match}
  */
  readonly zoneUdpFilterMatch?: number;
  /**
  * UDP Filter Not Matched on Pkt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_udp_filter_not_match DataThunderDdosDstZoneStats#zone_udp_filter_not_match}
  */
  readonly zoneUdpFilterNotMatch?: number;
  /**
  * UDP Dst IP-Proto Rate: Frag Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_udp_frag_pkt_rate_exceed DataThunderDdosDstZoneStats#zone_udp_frag_pkt_rate_exceed}
  */
  readonly zoneUdpFragPktRateExceed?: number;
  /**
  * UDP Src Rate: Frag Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_udp_frag_src_rate_drop DataThunderDdosDstZoneStats#zone_udp_frag_src_rate_drop}
  */
  readonly zoneUdpFragSrcRateDrop?: number;
  /**
  * UDP Dst IP-Proto Rate: KiBit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_udp_kibit_rate_drop DataThunderDdosDstZoneStats#zone_udp_kibit_rate_drop}
  */
  readonly zoneUdpKibitRateDrop?: number;
  /**
  * UDP NTP Monlist Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_udp_ntp_monlist_req DataThunderDdosDstZoneStats#zone_udp_ntp_monlist_req}
  */
  readonly zoneUdpNtpMonlistReq?: number;
  /**
  * UDP NTP Monlist Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_udp_ntp_monlist_resp DataThunderDdosDstZoneStats#zone_udp_ntp_monlist_resp}
  */
  readonly zoneUdpNtpMonlistResp?: number;
  /**
  * UDP Dst IP-Proto Rate: Packet Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_udp_pkt_rate_exceed DataThunderDdosDstZoneStats#zone_udp_pkt_rate_exceed}
  */
  readonly zoneUdpPktRateExceed?: number;
  /**
  * UDP Total Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_udp_pkt_rcvd DataThunderDdosDstZoneStats#zone_udp_pkt_rcvd}
  */
  readonly zoneUdpPktRcvd?: number;
  /**
  * UDP Total Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_udp_pkt_sent DataThunderDdosDstZoneStats#zone_udp_pkt_sent}
  */
  readonly zoneUdpPktSent?: number;
  /**
  * UDP Port Rate: Total Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_udp_port_any_exceed DataThunderDdosDstZoneStats#zone_udp_port_any_exceed}
  */
  readonly zoneUdpPortAnyExceed?: number;
  /**
  * UDP Auth: Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_udp_retry_init DataThunderDdosDstZoneStats#zone_udp_retry_init}
  */
  readonly zoneUdpRetryInit?: number;
  /**
  * UDP Auth: Retry Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_udp_retry_pass DataThunderDdosDstZoneStats#zone_udp_retry_pass}
  */
  readonly zoneUdpRetryPass?: number;
  /**
  * UDP Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_udp_session_created DataThunderDdosDstZoneStats#zone_udp_session_created}
  */
  readonly zoneUdpSessionCreated?: number;
  /**
  * UDP Src Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_udp_src_drop DataThunderDdosDstZoneStats#zone_udp_src_drop}
  */
  readonly zoneUdpSrcDrop?: number;
  /**
  * UDP Src Rate: Total Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_udp_src_rate_drop DataThunderDdosDstZoneStats#zone_udp_src_rate_drop}
  */
  readonly zoneUdpSrcRateDrop?: number;
  /**
  * UDP SrcPort Wellknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#zone_udp_wellknown_sport_drop DataThunderDdosDstZoneStats#zone_udp_wellknown_sport_drop}
  */
  readonly zoneUdpWellknownSportDrop?: number;
}

export function dataThunderDdosDstZoneStatsStatsToTerraform(struct?: DataThunderDdosDstZoneStatsStatsOutputReference | DataThunderDdosDstZoneStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_outbound_query_malformed: cdktf.numberToTerraform(struct!.dnsOutboundQueryMalformed),
    dns_outbound_query_resp_chk_blacklisted: cdktf.numberToTerraform(struct!.dnsOutboundQueryRespChkBlacklisted),
    dns_outbound_query_resp_chk_failed: cdktf.numberToTerraform(struct!.dnsOutboundQueryRespChkFailed),
    dns_outbound_query_resp_chk_no_resp_sent: cdktf.numberToTerraform(struct!.dnsOutboundQueryRespChkNoRespSent),
    dns_outbound_query_resp_chk_refused_sent: cdktf.numberToTerraform(struct!.dnsOutboundQueryRespChkRefusedSent),
    dns_outbound_query_resp_chk_reset_sent: cdktf.numberToTerraform(struct!.dnsOutboundQueryRespChkResetSent),
    dns_outbound_query_resp_size_exceed: cdktf.numberToTerraform(struct!.dnsOutboundQueryRespSizeExceed),
    dns_outbound_query_sess_timed_out: cdktf.numberToTerraform(struct!.dnsOutboundQuerySessTimedOut),
    dns_outbound_total_query: cdktf.numberToTerraform(struct!.dnsOutboundTotalQuery),
    dst_clist_overflow_policy_at_learning: cdktf.numberToTerraform(struct!.dstClistOverflowPolicyAtLearning),
    dst_drop: cdktf.numberToTerraform(struct!.dstDrop),
    dst_entry_conn_limit_exceed: cdktf.numberToTerraform(struct!.dstEntryConnLimitExceed),
    dst_entry_conn_rate_exceed: cdktf.numberToTerraform(struct!.dstEntryConnRateExceed),
    dst_entry_frag_pkt_rate_exceed: cdktf.numberToTerraform(struct!.dstEntryFragPktRateExceed),
    dst_entry_kbit_rate_exceed: cdktf.numberToTerraform(struct!.dstEntryKbitRateExceed),
    dst_entry_kbit_rate_exceed_count: cdktf.numberToTerraform(struct!.dstEntryKbitRateExceedCount),
    dst_entry_outbound_conn_limit_exceed: cdktf.numberToTerraform(struct!.dstEntryOutboundConnLimitExceed),
    dst_entry_outbound_conn_rate_exceed: cdktf.numberToTerraform(struct!.dstEntryOutboundConnRateExceed),
    dst_entry_outbound_frag_pkt_rate_exceed: cdktf.numberToTerraform(struct!.dstEntryOutboundFragPktRateExceed),
    dst_entry_outbound_kbit_rate_exceed: cdktf.numberToTerraform(struct!.dstEntryOutboundKbitRateExceed),
    dst_entry_outbound_kbit_rate_exceed_count: cdktf.numberToTerraform(struct!.dstEntryOutboundKbitRateExceedCount),
    dst_entry_outbound_pkt_rate_exceed: cdktf.numberToTerraform(struct!.dstEntryOutboundPktRateExceed),
    dst_entry_outbound_tcp_session_aged: cdktf.numberToTerraform(struct!.dstEntryOutboundTcpSessionAged),
    dst_entry_outbound_tcp_session_created: cdktf.numberToTerraform(struct!.dstEntryOutboundTcpSessionCreated),
    dst_entry_outbound_udp_session_aged: cdktf.numberToTerraform(struct!.dstEntryOutboundUdpSessionAged),
    dst_entry_outbound_udp_session_created: cdktf.numberToTerraform(struct!.dstEntryOutboundUdpSessionCreated),
    dst_entry_pkt_rate_exceed: cdktf.numberToTerraform(struct!.dstEntryPktRateExceed),
    dst_exceed_action_drop: cdktf.numberToTerraform(struct!.dstExceedActionDrop),
    dst_exceed_action_tunnel: cdktf.numberToTerraform(struct!.dstExceedActionTunnel),
    dst_icmp_any_exceed: cdktf.numberToTerraform(struct!.dstIcmpAnyExceed),
    dst_icmp_bytes_rcv: cdktf.numberToTerraform(struct!.dstIcmpBytesRcv),
    dst_icmp_bytes_sent: cdktf.numberToTerraform(struct!.dstIcmpBytesSent),
    dst_l4_icmp_blacklist_drop: cdktf.numberToTerraform(struct!.dstL4IcmpBlacklistDrop),
    dst_l4_other_blacklist_drop: cdktf.numberToTerraform(struct!.dstL4OtherBlacklistDrop),
    dst_l4_tcp_blacklist_drop: cdktf.numberToTerraform(struct!.dstL4TcpBlacklistDrop),
    dst_l4_udp_blacklist_drop: cdktf.numberToTerraform(struct!.dstL4UdpBlacklistDrop),
    dst_other_any_exceed: cdktf.numberToTerraform(struct!.dstOtherAnyExceed),
    dst_other_bytes_rcv: cdktf.numberToTerraform(struct!.dstOtherBytesRcv),
    dst_other_bytes_sent: cdktf.numberToTerraform(struct!.dstOtherBytesSent),
    dst_src_learn_overflow: cdktf.numberToTerraform(struct!.dstSrcLearnOverflow),
    dst_tcp_auth_drop: cdktf.numberToTerraform(struct!.dstTcpAuthDrop),
    dst_tcp_auth_resp: cdktf.numberToTerraform(struct!.dstTcpAuthResp),
    dst_tcp_auth_rst: cdktf.numberToTerraform(struct!.dstTcpAuthRst),
    dst_tcp_bytes_rcv: cdktf.numberToTerraform(struct!.dstTcpBytesRcv),
    dst_tcp_bytes_sent: cdktf.numberToTerraform(struct!.dstTcpBytesSent),
    dst_tcp_conn_close: cdktf.numberToTerraform(struct!.dstTcpConnClose),
    dst_tcp_conn_close_half_open: cdktf.numberToTerraform(struct!.dstTcpConnCloseHalfOpen),
    dst_tcp_conn_close_w_fin: cdktf.numberToTerraform(struct!.dstTcpConnCloseWFin),
    dst_tcp_conn_close_w_idle: cdktf.numberToTerraform(struct!.dstTcpConnCloseWIdle),
    dst_tcp_conn_close_w_rst: cdktf.numberToTerraform(struct!.dstTcpConnCloseWRst),
    dst_tcp_conn_create_from_ack: cdktf.numberToTerraform(struct!.dstTcpConnCreateFromAck),
    dst_tcp_conn_create_from_syn: cdktf.numberToTerraform(struct!.dstTcpConnCreateFromSyn),
    dst_tcp_session_aged: cdktf.numberToTerraform(struct!.dstTcpSessionAged),
    dst_udp_auth_drop: cdktf.numberToTerraform(struct!.dstUdpAuthDrop),
    dst_udp_bytes_rcv: cdktf.numberToTerraform(struct!.dstUdpBytesRcv),
    dst_udp_bytes_sent: cdktf.numberToTerraform(struct!.dstUdpBytesSent),
    dst_udp_retry_fail: cdktf.numberToTerraform(struct!.dstUdpRetryFail),
    dst_udp_retry_gap_drop: cdktf.numberToTerraform(struct!.dstUdpRetryGapDrop),
    dst_udp_retry_timeout_blacklist: cdktf.numberToTerraform(struct!.dstUdpRetryTimeoutBlacklist),
    dst_udp_session_aged: cdktf.numberToTerraform(struct!.dstUdpSessionAged),
    east_west_inbound_drop_byte: cdktf.numberToTerraform(struct!.eastWestInboundDropByte),
    east_west_inbound_drop_pkt: cdktf.numberToTerraform(struct!.eastWestInboundDropPkt),
    east_west_inbound_fwd_byte: cdktf.numberToTerraform(struct!.eastWestInboundFwdByte),
    east_west_inbound_fwd_pkt: cdktf.numberToTerraform(struct!.eastWestInboundFwdPkt),
    east_west_inbound_rcv_byte: cdktf.numberToTerraform(struct!.eastWestInboundRcvByte),
    east_west_inbound_rcv_pkt: cdktf.numberToTerraform(struct!.eastWestInboundRcvPkt),
    east_west_outbound_drop_byte: cdktf.numberToTerraform(struct!.eastWestOutboundDropByte),
    east_west_outbound_drop_pkt: cdktf.numberToTerraform(struct!.eastWestOutboundDropPkt),
    east_west_outbound_fwd_byte: cdktf.numberToTerraform(struct!.eastWestOutboundFwdByte),
    east_west_outbound_fwd_pkt: cdktf.numberToTerraform(struct!.eastWestOutboundFwdPkt),
    east_west_outbound_rcv_byte: cdktf.numberToTerraform(struct!.eastWestOutboundRcvByte),
    east_west_outbound_rcv_pkt: cdktf.numberToTerraform(struct!.eastWestOutboundRcvPkt),
    egress_bytes: cdktf.numberToTerraform(struct!.egressBytes),
    egress_packets: cdktf.numberToTerraform(struct!.egressPackets),
    entry_sync_message_received: cdktf.numberToTerraform(struct!.entrySyncMessageReceived),
    entry_sync_message_sent: cdktf.numberToTerraform(struct!.entrySyncMessageSent),
    icmp_fwd_recv: cdktf.numberToTerraform(struct!.icmpFwdRecv),
    inbound_bytes_drop: cdktf.numberToTerraform(struct!.inboundBytesDrop),
    inbound_bytes_sent: cdktf.numberToTerraform(struct!.inboundBytesSent),
    ingress_bytes: cdktf.numberToTerraform(struct!.ingressBytes),
    ingress_packets: cdktf.numberToTerraform(struct!.ingressPackets),
    multi_pu_src_hash_pu1: cdktf.numberToTerraform(struct!.multiPuSrcHashPu1),
    multi_pu_src_hash_pu2: cdktf.numberToTerraform(struct!.multiPuSrcHashPu2),
    outbound_bytes_drop: cdktf.numberToTerraform(struct!.outboundBytesDrop),
    outbound_bytes_sent: cdktf.numberToTerraform(struct!.outboundBytesSent),
    outbound_drop: cdktf.numberToTerraform(struct!.outboundDrop),
    outbound_pkt_sent: cdktf.numberToTerraform(struct!.outboundPktSent),
    port_zero_fwd_byte_rcvd: cdktf.numberToTerraform(struct!.portZeroFwdByteRcvd),
    port_zero_fwd_pkt_rcvd: cdktf.numberToTerraform(struct!.portZeroFwdPktRcvd),
    port_zero_rev_byte_rcvd: cdktf.numberToTerraform(struct!.portZeroRevByteRcvd),
    port_zero_rev_pkt_rcvd: cdktf.numberToTerraform(struct!.portZeroRevPktRcvd),
    prog_conn_exceed_bl: cdktf.numberToTerraform(struct!.progConnExceedBl),
    prog_conn_exceed_drop: cdktf.numberToTerraform(struct!.progConnExceedDrop),
    prog_conn_rcvd_exceed: cdktf.numberToTerraform(struct!.progConnRcvdExceed),
    prog_conn_rcvd_sent_ratio_exceed: cdktf.numberToTerraform(struct!.progConnRcvdSentRatioExceed),
    prog_conn_samples: cdktf.numberToTerraform(struct!.progConnSamples),
    prog_conn_samples_processed: cdktf.numberToTerraform(struct!.progConnSamplesProcessed),
    prog_conn_sent_exceed: cdktf.numberToTerraform(struct!.progConnSentExceed),
    prog_conn_time_exceed: cdktf.numberToTerraform(struct!.progConnTimeExceed),
    prog_exceed_bl: cdktf.numberToTerraform(struct!.progExceedBl),
    prog_exceed_drop: cdktf.numberToTerraform(struct!.progExceedDrop),
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
    prog_win_rcvd_exceed: cdktf.numberToTerraform(struct!.progWinRcvdExceed),
    prog_win_rcvd_sent_ratio_exceed: cdktf.numberToTerraform(struct!.progWinRcvdSentRatioExceed),
    prog_win_samples: cdktf.numberToTerraform(struct!.progWinSamples),
    prog_win_samples_processed: cdktf.numberToTerraform(struct!.progWinSamplesProcessed),
    prog_win_sent_exceed: cdktf.numberToTerraform(struct!.progWinSentExceed),
    secondary_dst_entry_conn_limit_exceed: cdktf.numberToTerraform(struct!.secondaryDstEntryConnLimitExceed),
    secondary_dst_entry_conn_rate_exceed: cdktf.numberToTerraform(struct!.secondaryDstEntryConnRateExceed),
    secondary_dst_entry_frag_pkt_rate_exceed: cdktf.numberToTerraform(struct!.secondaryDstEntryFragPktRateExceed),
    secondary_dst_entry_kbit_rate_exceed: cdktf.numberToTerraform(struct!.secondaryDstEntryKbitRateExceed),
    secondary_dst_entry_pkt_rate_exceed: cdktf.numberToTerraform(struct!.secondaryDstEntryPktRateExceed),
    secondary_entry_aged: cdktf.numberToTerraform(struct!.secondaryEntryAged),
    secondary_entry_hit: cdktf.numberToTerraform(struct!.secondaryEntryHit),
    secondary_entry_learn: cdktf.numberToTerraform(struct!.secondaryEntryLearn),
    secondary_entry_learning_thre_exceed: cdktf.numberToTerraform(struct!.secondaryEntryLearningThreExceed),
    secondary_entry_miss: cdktf.numberToTerraform(struct!.secondaryEntryMiss),
    secondary_port_aged: cdktf.numberToTerraform(struct!.secondaryPortAged),
    secondary_port_learn: cdktf.numberToTerraform(struct!.secondaryPortLearn),
    service_miss_fwd_byte_rcvd: cdktf.numberToTerraform(struct!.serviceMissFwdByteRcvd),
    service_miss_fwd_pkt_rcvd: cdktf.numberToTerraform(struct!.serviceMissFwdPktRcvd),
    service_miss_rev_byte_rcvd: cdktf.numberToTerraform(struct!.serviceMissRevByteRcvd),
    service_miss_rev_pkt_rcvd: cdktf.numberToTerraform(struct!.serviceMissRevPktRcvd),
    sflow_external_packets_sent: cdktf.numberToTerraform(struct!.sflowExternalPacketsSent),
    sflow_external_samples_packed: cdktf.numberToTerraform(struct!.sflowExternalSamplesPacked),
    sflow_internal_packets_sent: cdktf.numberToTerraform(struct!.sflowInternalPacketsSent),
    sflow_internal_samples_packed: cdktf.numberToTerraform(struct!.sflowInternalSamplesPacked),
    small_window_rcv: cdktf.numberToTerraform(struct!.smallWindowRcv),
    source_entry_icmp: cdktf.numberToTerraform(struct!.sourceEntryIcmp),
    source_entry_other: cdktf.numberToTerraform(struct!.sourceEntryOther),
    source_entry_tcp: cdktf.numberToTerraform(struct!.sourceEntryTcp),
    source_entry_total: cdktf.numberToTerraform(struct!.sourceEntryTotal),
    source_entry_udp: cdktf.numberToTerraform(struct!.sourceEntryUdp),
    src_frag_drop: cdktf.numberToTerraform(struct!.srcFragDrop),
    src_other_filter_action_blacklist: cdktf.numberToTerraform(struct!.srcOtherFilterActionBlacklist),
    src_other_filter_action_default_pass: cdktf.numberToTerraform(struct!.srcOtherFilterActionDefaultPass),
    src_other_filter_action_drop: cdktf.numberToTerraform(struct!.srcOtherFilterActionDrop),
    src_other_filter_action_whitelist: cdktf.numberToTerraform(struct!.srcOtherFilterActionWhitelist),
    src_tcp_action_on_ack_blacklist: cdktf.numberToTerraform(struct!.srcTcpActionOnAckBlacklist),
    src_tcp_action_on_ack_fail: cdktf.numberToTerraform(struct!.srcTcpActionOnAckFail),
    src_tcp_action_on_ack_gap_drop: cdktf.numberToTerraform(struct!.srcTcpActionOnAckGapDrop),
    src_tcp_action_on_ack_init: cdktf.numberToTerraform(struct!.srcTcpActionOnAckInit),
    src_tcp_action_on_ack_reset: cdktf.numberToTerraform(struct!.srcTcpActionOnAckReset),
    src_tcp_action_on_ack_timeout: cdktf.numberToTerraform(struct!.srcTcpActionOnAckTimeout),
    src_tcp_action_on_syn_blacklist: cdktf.numberToTerraform(struct!.srcTcpActionOnSynBlacklist),
    src_tcp_action_on_syn_fail: cdktf.numberToTerraform(struct!.srcTcpActionOnSynFail),
    src_tcp_action_on_syn_gap_drop: cdktf.numberToTerraform(struct!.srcTcpActionOnSynGapDrop),
    src_tcp_action_on_syn_init: cdktf.numberToTerraform(struct!.srcTcpActionOnSynInit),
    src_tcp_action_on_syn_reset: cdktf.numberToTerraform(struct!.srcTcpActionOnSynReset),
    src_tcp_action_on_syn_timeout: cdktf.numberToTerraform(struct!.srcTcpActionOnSynTimeout),
    src_tcp_conn_prate_excd: cdktf.numberToTerraform(struct!.srcTcpConnPrateExcd),
    src_tcp_filter_action_blacklist: cdktf.numberToTerraform(struct!.srcTcpFilterActionBlacklist),
    src_tcp_filter_action_default_pass: cdktf.numberToTerraform(struct!.srcTcpFilterActionDefaultPass),
    src_tcp_filter_action_drop: cdktf.numberToTerraform(struct!.srcTcpFilterActionDrop),
    src_tcp_filter_action_whitelist: cdktf.numberToTerraform(struct!.srcTcpFilterActionWhitelist),
    src_tcp_out_of_seq_excd: cdktf.numberToTerraform(struct!.srcTcpOutOfSeqExcd),
    src_tcp_retransmit_excd: cdktf.numberToTerraform(struct!.srcTcpRetransmitExcd),
    src_tcp_rst_cookie_fail: cdktf.numberToTerraform(struct!.srcTcpRstCookieFail),
    src_tcp_small_window_excd: cdktf.numberToTerraform(struct!.srcTcpSmallWindowExcd),
    src_tcp_syn_auth_fail: cdktf.numberToTerraform(struct!.srcTcpSynAuthFail),
    src_tcp_syn_cookie_fail: cdktf.numberToTerraform(struct!.srcTcpSynCookieFail),
    src_tcp_syn_cookie_sent: cdktf.numberToTerraform(struct!.srcTcpSynCookieSent),
    src_tcp_unauth_drop: cdktf.numberToTerraform(struct!.srcTcpUnauthDrop),
    src_tcp_wellknown_sport_drop: cdktf.numberToTerraform(struct!.srcTcpWellknownSportDrop),
    src_tcp_zero_window_excd: cdktf.numberToTerraform(struct!.srcTcpZeroWindowExcd),
    src_udp_auth_timeout: cdktf.numberToTerraform(struct!.srcUdpAuthTimeout),
    src_udp_conn_prate_excd: cdktf.numberToTerraform(struct!.srcUdpConnPrateExcd),
    src_udp_filter_action_blacklist: cdktf.numberToTerraform(struct!.srcUdpFilterActionBlacklist),
    src_udp_filter_action_default_pass: cdktf.numberToTerraform(struct!.srcUdpFilterActionDefaultPass),
    src_udp_filter_action_drop: cdktf.numberToTerraform(struct!.srcUdpFilterActionDrop),
    src_udp_filter_action_whitelist: cdktf.numberToTerraform(struct!.srcUdpFilterActionWhitelist),
    src_udp_max_payload: cdktf.numberToTerraform(struct!.srcUdpMaxPayload),
    src_udp_min_payload: cdktf.numberToTerraform(struct!.srcUdpMinPayload),
    src_udp_ntp_monlist_req: cdktf.numberToTerraform(struct!.srcUdpNtpMonlistReq),
    src_udp_ntp_monlist_resp: cdktf.numberToTerraform(struct!.srcUdpNtpMonlistResp),
    src_udp_retry_gap_drop: cdktf.numberToTerraform(struct!.srcUdpRetryGapDrop),
    src_udp_retry_init: cdktf.numberToTerraform(struct!.srcUdpRetryInit),
    src_udp_retry_pass: cdktf.numberToTerraform(struct!.srcUdpRetryPass),
    src_udp_wellknown_sport_drop: cdktf.numberToTerraform(struct!.srcUdpWellknownSportDrop),
    tcp_ack_rcvd: cdktf.numberToTerraform(struct!.tcpAckRcvd),
    tcp_fin_rcvd: cdktf.numberToTerraform(struct!.tcpFinRcvd),
    tcp_fwd_recv: cdktf.numberToTerraform(struct!.tcpFwdRecv),
    tcp_invalid_syn: cdktf.numberToTerraform(struct!.tcpInvalidSyn),
    tcp_invalid_synack: cdktf.numberToTerraform(struct!.tcpInvalidSynack),
    tcp_rexmit_syn_limit_bl: cdktf.numberToTerraform(struct!.tcpRexmitSynLimitBl),
    tcp_rexmit_syn_limit_drop: cdktf.numberToTerraform(struct!.tcpRexmitSynLimitDrop),
    tcp_rst_rcvd: cdktf.numberToTerraform(struct!.tcpRstRcvd),
    tcp_syn_ack_rcvd: cdktf.numberToTerraform(struct!.tcpSynAckRcvd),
    tcp_syn_cookie_fail: cdktf.numberToTerraform(struct!.tcpSynCookieFail),
    tcp_syn_rcvd: cdktf.numberToTerraform(struct!.tcpSynRcvd),
    token_auth_current_salt_matched: cdktf.numberToTerraform(struct!.tokenAuthCurrentSaltMatched),
    token_auth_invalid_packets: cdktf.numberToTerraform(struct!.tokenAuthInvalidPackets),
    token_auth_mismatched_packets: cdktf.numberToTerraform(struct!.tokenAuthMismatchedPackets),
    token_auth_previous_salt_matched: cdktf.numberToTerraform(struct!.tokenAuthPreviousSaltMatched),
    token_auth_session_created: cdktf.numberToTerraform(struct!.tokenAuthSessionCreated),
    token_auth_session_created_fail: cdktf.numberToTerraform(struct!.tokenAuthSessionCreatedFail),
    udp_fwd_recv: cdktf.numberToTerraform(struct!.udpFwdRecv),
    victim_ip_aged: cdktf.numberToTerraform(struct!.victimIpAged),
    victim_ip_learned: cdktf.numberToTerraform(struct!.victimIpLearned),
    zone_blackhole_inject: cdktf.numberToTerraform(struct!.zoneBlackholeInject),
    zone_blackhole_withdraw: cdktf.numberToTerraform(struct!.zoneBlackholeWithdraw),
    zone_frag_drop: cdktf.numberToTerraform(struct!.zoneFragDrop),
    zone_frag_rcvd: cdktf.numberToTerraform(struct!.zoneFragRcvd),
    zone_icmp_bytes_drop: cdktf.numberToTerraform(struct!.zoneIcmpBytesDrop),
    zone_icmp_drop: cdktf.numberToTerraform(struct!.zoneIcmpDrop),
    zone_icmp_frag_pkt_rate_exceed: cdktf.numberToTerraform(struct!.zoneIcmpFragPktRateExceed),
    zone_icmp_frag_src_rate_drop: cdktf.numberToTerraform(struct!.zoneIcmpFragSrcRateDrop),
    zone_icmp_kibit_rate_drop: cdktf.numberToTerraform(struct!.zoneIcmpKibitRateDrop),
    zone_icmp_pkt_rate_exceed: cdktf.numberToTerraform(struct!.zoneIcmpPktRateExceed),
    zone_icmp_pkt_rcvd: cdktf.numberToTerraform(struct!.zoneIcmpPktRcvd),
    zone_icmp_pkt_sent: cdktf.numberToTerraform(struct!.zoneIcmpPktSent),
    zone_icmp_src_drop: cdktf.numberToTerraform(struct!.zoneIcmpSrcDrop),
    zone_icmp_src_rate_drop: cdktf.numberToTerraform(struct!.zoneIcmpSrcRateDrop),
    zone_ip_proto_kbit_rate_exceed: cdktf.numberToTerraform(struct!.zoneIpProtoKbitRateExceed),
    zone_ip_proto_pkt_rate_exceed: cdktf.numberToTerraform(struct!.zoneIpProtoPktRateExceed),
    zone_other_bytes_drop: cdktf.numberToTerraform(struct!.zoneOtherBytesDrop),
    zone_other_drop: cdktf.numberToTerraform(struct!.zoneOtherDrop),
    zone_other_filter_action_blacklist: cdktf.numberToTerraform(struct!.zoneOtherFilterActionBlacklist),
    zone_other_filter_action_default_pass: cdktf.numberToTerraform(struct!.zoneOtherFilterActionDefaultPass),
    zone_other_filter_action_drop: cdktf.numberToTerraform(struct!.zoneOtherFilterActionDrop),
    zone_other_filter_action_whitelist: cdktf.numberToTerraform(struct!.zoneOtherFilterActionWhitelist),
    zone_other_filter_match: cdktf.numberToTerraform(struct!.zoneOtherFilterMatch),
    zone_other_filter_not_match: cdktf.numberToTerraform(struct!.zoneOtherFilterNotMatch),
    zone_other_frag_pkt_rate_exceed: cdktf.numberToTerraform(struct!.zoneOtherFragPktRateExceed),
    zone_other_frag_src_rate_drop: cdktf.numberToTerraform(struct!.zoneOtherFragSrcRateDrop),
    zone_other_kibit_rate_drop: cdktf.numberToTerraform(struct!.zoneOtherKibitRateDrop),
    zone_other_pkt_rate_exceed: cdktf.numberToTerraform(struct!.zoneOtherPktRateExceed),
    zone_other_pkt_rcvd: cdktf.numberToTerraform(struct!.zoneOtherPktRcvd),
    zone_other_pkt_sent: cdktf.numberToTerraform(struct!.zoneOtherPktSent),
    zone_other_src_drop: cdktf.numberToTerraform(struct!.zoneOtherSrcDrop),
    zone_other_src_rate_drop: cdktf.numberToTerraform(struct!.zoneOtherSrcRateDrop),
    zone_out_no_route: cdktf.numberToTerraform(struct!.zoneOutNoRoute),
    zone_payload_too_big: cdktf.numberToTerraform(struct!.zonePayloadTooBig),
    zone_payload_too_small: cdktf.numberToTerraform(struct!.zonePayloadTooSmall),
    zone_pkt_sent: cdktf.numberToTerraform(struct!.zonePktSent),
    zone_port_bl: cdktf.numberToTerraform(struct!.zonePortBl),
    zone_port_conn_limit_exceed: cdktf.numberToTerraform(struct!.zonePortConnLimitExceed),
    zone_port_conn_rate_exceed: cdktf.numberToTerraform(struct!.zonePortConnRateExceed),
    zone_port_kbit_rate_exceed: cdktf.numberToTerraform(struct!.zonePortKbitRateExceed),
    zone_port_kbit_rate_exceed_pkt: cdktf.numberToTerraform(struct!.zonePortKbitRateExceedPkt),
    zone_port_pkt_rate_exceed: cdktf.numberToTerraform(struct!.zonePortPktRateExceed),
    zone_port_undef_drop: cdktf.numberToTerraform(struct!.zonePortUndefDrop),
    zone_port_undef_hit: cdktf.numberToTerraform(struct!.zonePortUndefHit),
    zone_src_port_bl: cdktf.numberToTerraform(struct!.zoneSrcPortBl),
    zone_src_port_conn_limit_exceed: cdktf.numberToTerraform(struct!.zoneSrcPortConnLimitExceed),
    zone_src_port_conn_rate_exceed: cdktf.numberToTerraform(struct!.zoneSrcPortConnRateExceed),
    zone_src_port_kbit_rate_exceed: cdktf.numberToTerraform(struct!.zoneSrcPortKbitRateExceed),
    zone_src_port_pkt_rate_exceed: cdktf.numberToTerraform(struct!.zoneSrcPortPktRateExceed),
    zone_src_udp_retry_timeout_blacklist: cdktf.numberToTerraform(struct!.zoneSrcUdpRetryTimeoutBlacklist),
    zone_tcp_action_on_ack_blacklist: cdktf.numberToTerraform(struct!.zoneTcpActionOnAckBlacklist),
    zone_tcp_action_on_ack_fail: cdktf.numberToTerraform(struct!.zoneTcpActionOnAckFail),
    zone_tcp_action_on_ack_gap_drop: cdktf.numberToTerraform(struct!.zoneTcpActionOnAckGapDrop),
    zone_tcp_action_on_ack_init: cdktf.numberToTerraform(struct!.zoneTcpActionOnAckInit),
    zone_tcp_action_on_ack_pass: cdktf.numberToTerraform(struct!.zoneTcpActionOnAckPass),
    zone_tcp_action_on_ack_reset: cdktf.numberToTerraform(struct!.zoneTcpActionOnAckReset),
    zone_tcp_action_on_ack_timeout: cdktf.numberToTerraform(struct!.zoneTcpActionOnAckTimeout),
    zone_tcp_action_on_syn_blacklist: cdktf.numberToTerraform(struct!.zoneTcpActionOnSynBlacklist),
    zone_tcp_action_on_syn_fail: cdktf.numberToTerraform(struct!.zoneTcpActionOnSynFail),
    zone_tcp_action_on_syn_gap_drop: cdktf.numberToTerraform(struct!.zoneTcpActionOnSynGapDrop),
    zone_tcp_action_on_syn_init: cdktf.numberToTerraform(struct!.zoneTcpActionOnSynInit),
    zone_tcp_action_on_syn_pass: cdktf.numberToTerraform(struct!.zoneTcpActionOnSynPass),
    zone_tcp_action_on_syn_reset: cdktf.numberToTerraform(struct!.zoneTcpActionOnSynReset),
    zone_tcp_action_on_syn_timeout: cdktf.numberToTerraform(struct!.zoneTcpActionOnSynTimeout),
    zone_tcp_any_exceed: cdktf.numberToTerraform(struct!.zoneTcpAnyExceed),
    zone_tcp_auth: cdktf.numberToTerraform(struct!.zoneTcpAuth),
    zone_tcp_auth_pass: cdktf.numberToTerraform(struct!.zoneTcpAuthPass),
    zone_tcp_bytes_drop: cdktf.numberToTerraform(struct!.zoneTcpBytesDrop),
    zone_tcp_conn_limit_exceed: cdktf.numberToTerraform(struct!.zoneTcpConnLimitExceed),
    zone_tcp_conn_prate_excd: cdktf.numberToTerraform(struct!.zoneTcpConnPrateExcd),
    zone_tcp_conn_rate_exceed: cdktf.numberToTerraform(struct!.zoneTcpConnRateExceed),
    zone_tcp_drop: cdktf.numberToTerraform(struct!.zoneTcpDrop),
    zone_tcp_filter_action_blacklist: cdktf.numberToTerraform(struct!.zoneTcpFilterActionBlacklist),
    zone_tcp_filter_action_default_pass: cdktf.numberToTerraform(struct!.zoneTcpFilterActionDefaultPass),
    zone_tcp_filter_action_drop: cdktf.numberToTerraform(struct!.zoneTcpFilterActionDrop),
    zone_tcp_filter_action_whitelist: cdktf.numberToTerraform(struct!.zoneTcpFilterActionWhitelist),
    zone_tcp_filter_match: cdktf.numberToTerraform(struct!.zoneTcpFilterMatch),
    zone_tcp_filter_not_match: cdktf.numberToTerraform(struct!.zoneTcpFilterNotMatch),
    zone_tcp_frag_pkt_rate_exceed: cdktf.numberToTerraform(struct!.zoneTcpFragPktRateExceed),
    zone_tcp_frag_src_rate_drop: cdktf.numberToTerraform(struct!.zoneTcpFragSrcRateDrop),
    zone_tcp_kibit_rate_drop: cdktf.numberToTerraform(struct!.zoneTcpKibitRateDrop),
    zone_tcp_out_of_seq_excd: cdktf.numberToTerraform(struct!.zoneTcpOutOfSeqExcd),
    zone_tcp_pkt_rate_exceed: cdktf.numberToTerraform(struct!.zoneTcpPktRateExceed),
    zone_tcp_pkt_rcvd: cdktf.numberToTerraform(struct!.zoneTcpPktRcvd),
    zone_tcp_pkt_sent: cdktf.numberToTerraform(struct!.zoneTcpPktSent),
    zone_tcp_port_any_exceed: cdktf.numberToTerraform(struct!.zoneTcpPortAnyExceed),
    zone_tcp_retransmit_excd: cdktf.numberToTerraform(struct!.zoneTcpRetransmitExcd),
    zone_tcp_rst_cookie_fail: cdktf.numberToTerraform(struct!.zoneTcpRstCookieFail),
    zone_tcp_session_created: cdktf.numberToTerraform(struct!.zoneTcpSessionCreated),
    zone_tcp_small_window_excd: cdktf.numberToTerraform(struct!.zoneTcpSmallWindowExcd),
    zone_tcp_src_drop: cdktf.numberToTerraform(struct!.zoneTcpSrcDrop),
    zone_tcp_src_rate_drop: cdktf.numberToTerraform(struct!.zoneTcpSrcRateDrop),
    zone_tcp_syn: cdktf.numberToTerraform(struct!.zoneTcpSyn),
    zone_tcp_syn_drop: cdktf.numberToTerraform(struct!.zoneTcpSynDrop),
    zone_tcp_unauth_drop: cdktf.numberToTerraform(struct!.zoneTcpUnauthDrop),
    zone_tcp_wellknown_sport_drop: cdktf.numberToTerraform(struct!.zoneTcpWellknownSportDrop),
    zone_tcp_zero_window_excd: cdktf.numberToTerraform(struct!.zoneTcpZeroWindowExcd),
    zone_udp_any_exceed: cdktf.numberToTerraform(struct!.zoneUdpAnyExceed),
    zone_udp_bytes_drop: cdktf.numberToTerraform(struct!.zoneUdpBytesDrop),
    zone_udp_conn_limit_exceed: cdktf.numberToTerraform(struct!.zoneUdpConnLimitExceed),
    zone_udp_conn_prate_excd: cdktf.numberToTerraform(struct!.zoneUdpConnPrateExcd),
    zone_udp_conn_rate_exceed: cdktf.numberToTerraform(struct!.zoneUdpConnRateExceed),
    zone_udp_drop: cdktf.numberToTerraform(struct!.zoneUdpDrop),
    zone_udp_filter_action_blacklist: cdktf.numberToTerraform(struct!.zoneUdpFilterActionBlacklist),
    zone_udp_filter_action_default_pass: cdktf.numberToTerraform(struct!.zoneUdpFilterActionDefaultPass),
    zone_udp_filter_action_drop: cdktf.numberToTerraform(struct!.zoneUdpFilterActionDrop),
    zone_udp_filter_action_whitelist: cdktf.numberToTerraform(struct!.zoneUdpFilterActionWhitelist),
    zone_udp_filter_match: cdktf.numberToTerraform(struct!.zoneUdpFilterMatch),
    zone_udp_filter_not_match: cdktf.numberToTerraform(struct!.zoneUdpFilterNotMatch),
    zone_udp_frag_pkt_rate_exceed: cdktf.numberToTerraform(struct!.zoneUdpFragPktRateExceed),
    zone_udp_frag_src_rate_drop: cdktf.numberToTerraform(struct!.zoneUdpFragSrcRateDrop),
    zone_udp_kibit_rate_drop: cdktf.numberToTerraform(struct!.zoneUdpKibitRateDrop),
    zone_udp_ntp_monlist_req: cdktf.numberToTerraform(struct!.zoneUdpNtpMonlistReq),
    zone_udp_ntp_monlist_resp: cdktf.numberToTerraform(struct!.zoneUdpNtpMonlistResp),
    zone_udp_pkt_rate_exceed: cdktf.numberToTerraform(struct!.zoneUdpPktRateExceed),
    zone_udp_pkt_rcvd: cdktf.numberToTerraform(struct!.zoneUdpPktRcvd),
    zone_udp_pkt_sent: cdktf.numberToTerraform(struct!.zoneUdpPktSent),
    zone_udp_port_any_exceed: cdktf.numberToTerraform(struct!.zoneUdpPortAnyExceed),
    zone_udp_retry_init: cdktf.numberToTerraform(struct!.zoneUdpRetryInit),
    zone_udp_retry_pass: cdktf.numberToTerraform(struct!.zoneUdpRetryPass),
    zone_udp_session_created: cdktf.numberToTerraform(struct!.zoneUdpSessionCreated),
    zone_udp_src_drop: cdktf.numberToTerraform(struct!.zoneUdpSrcDrop),
    zone_udp_src_rate_drop: cdktf.numberToTerraform(struct!.zoneUdpSrcRateDrop),
    zone_udp_wellknown_sport_drop: cdktf.numberToTerraform(struct!.zoneUdpWellknownSportDrop),
  }
}


export function dataThunderDdosDstZoneStatsStatsToHclTerraform(struct?: DataThunderDdosDstZoneStatsStatsOutputReference | DataThunderDdosDstZoneStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_outbound_query_malformed: {
      value: cdktf.numberToHclTerraform(struct!.dnsOutboundQueryMalformed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_outbound_query_resp_chk_blacklisted: {
      value: cdktf.numberToHclTerraform(struct!.dnsOutboundQueryRespChkBlacklisted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_outbound_query_resp_chk_failed: {
      value: cdktf.numberToHclTerraform(struct!.dnsOutboundQueryRespChkFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_outbound_query_resp_chk_no_resp_sent: {
      value: cdktf.numberToHclTerraform(struct!.dnsOutboundQueryRespChkNoRespSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_outbound_query_resp_chk_refused_sent: {
      value: cdktf.numberToHclTerraform(struct!.dnsOutboundQueryRespChkRefusedSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_outbound_query_resp_chk_reset_sent: {
      value: cdktf.numberToHclTerraform(struct!.dnsOutboundQueryRespChkResetSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_outbound_query_resp_size_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dnsOutboundQueryRespSizeExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_outbound_query_sess_timed_out: {
      value: cdktf.numberToHclTerraform(struct!.dnsOutboundQuerySessTimedOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_outbound_total_query: {
      value: cdktf.numberToHclTerraform(struct!.dnsOutboundTotalQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_clist_overflow_policy_at_learning: {
      value: cdktf.numberToHclTerraform(struct!.dstClistOverflowPolicyAtLearning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_entry_conn_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstEntryConnLimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_entry_conn_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstEntryConnRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_entry_frag_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstEntryFragPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_entry_kbit_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstEntryKbitRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_entry_kbit_rate_exceed_count: {
      value: cdktf.numberToHclTerraform(struct!.dstEntryKbitRateExceedCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_entry_outbound_conn_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstEntryOutboundConnLimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_entry_outbound_conn_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstEntryOutboundConnRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_entry_outbound_frag_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstEntryOutboundFragPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_entry_outbound_kbit_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstEntryOutboundKbitRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_entry_outbound_kbit_rate_exceed_count: {
      value: cdktf.numberToHclTerraform(struct!.dstEntryOutboundKbitRateExceedCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_entry_outbound_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstEntryOutboundPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_entry_outbound_tcp_session_aged: {
      value: cdktf.numberToHclTerraform(struct!.dstEntryOutboundTcpSessionAged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_entry_outbound_tcp_session_created: {
      value: cdktf.numberToHclTerraform(struct!.dstEntryOutboundTcpSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_entry_outbound_udp_session_aged: {
      value: cdktf.numberToHclTerraform(struct!.dstEntryOutboundUdpSessionAged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_entry_outbound_udp_session_created: {
      value: cdktf.numberToHclTerraform(struct!.dstEntryOutboundUdpSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_entry_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstEntryPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_exceed_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstExceedActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_exceed_action_tunnel: {
      value: cdktf.numberToHclTerraform(struct!.dstExceedActionTunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_icmp_any_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstIcmpAnyExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_icmp_bytes_rcv: {
      value: cdktf.numberToHclTerraform(struct!.dstIcmpBytesRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_icmp_bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.dstIcmpBytesSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_l4_icmp_blacklist_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstL4IcmpBlacklistDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_l4_other_blacklist_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstL4OtherBlacklistDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_l4_tcp_blacklist_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstL4TcpBlacklistDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_l4_udp_blacklist_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstL4UdpBlacklistDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_other_any_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstOtherAnyExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_other_bytes_rcv: {
      value: cdktf.numberToHclTerraform(struct!.dstOtherBytesRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_other_bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.dstOtherBytesSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_src_learn_overflow: {
      value: cdktf.numberToHclTerraform(struct!.dstSrcLearnOverflow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_auth_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpAuthDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_auth_resp: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpAuthResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_auth_rst: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpAuthRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_bytes_rcv: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpBytesRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpBytesSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_conn_close: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpConnClose),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_conn_close_half_open: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpConnCloseHalfOpen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_conn_close_w_fin: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpConnCloseWFin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_conn_close_w_idle: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpConnCloseWIdle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_conn_close_w_rst: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpConnCloseWRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_conn_create_from_ack: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpConnCreateFromAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_conn_create_from_syn: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpConnCreateFromSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_session_aged: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpSessionAged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_auth_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpAuthDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_bytes_rcv: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpBytesRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpBytesSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_retry_fail: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpRetryFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_retry_gap_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpRetryGapDrop),
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
    dst_udp_session_aged: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpSessionAged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    east_west_inbound_drop_byte: {
      value: cdktf.numberToHclTerraform(struct!.eastWestInboundDropByte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    east_west_inbound_drop_pkt: {
      value: cdktf.numberToHclTerraform(struct!.eastWestInboundDropPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    east_west_inbound_fwd_byte: {
      value: cdktf.numberToHclTerraform(struct!.eastWestInboundFwdByte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    east_west_inbound_fwd_pkt: {
      value: cdktf.numberToHclTerraform(struct!.eastWestInboundFwdPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    east_west_inbound_rcv_byte: {
      value: cdktf.numberToHclTerraform(struct!.eastWestInboundRcvByte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    east_west_inbound_rcv_pkt: {
      value: cdktf.numberToHclTerraform(struct!.eastWestInboundRcvPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    east_west_outbound_drop_byte: {
      value: cdktf.numberToHclTerraform(struct!.eastWestOutboundDropByte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    east_west_outbound_drop_pkt: {
      value: cdktf.numberToHclTerraform(struct!.eastWestOutboundDropPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    east_west_outbound_fwd_byte: {
      value: cdktf.numberToHclTerraform(struct!.eastWestOutboundFwdByte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    east_west_outbound_fwd_pkt: {
      value: cdktf.numberToHclTerraform(struct!.eastWestOutboundFwdPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    east_west_outbound_rcv_byte: {
      value: cdktf.numberToHclTerraform(struct!.eastWestOutboundRcvByte),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    east_west_outbound_rcv_pkt: {
      value: cdktf.numberToHclTerraform(struct!.eastWestOutboundRcvPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    egress_bytes: {
      value: cdktf.numberToHclTerraform(struct!.egressBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    egress_packets: {
      value: cdktf.numberToHclTerraform(struct!.egressPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_sync_message_received: {
      value: cdktf.numberToHclTerraform(struct!.entrySyncMessageReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_sync_message_sent: {
      value: cdktf.numberToHclTerraform(struct!.entrySyncMessageSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_fwd_recv: {
      value: cdktf.numberToHclTerraform(struct!.icmpFwdRecv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound_bytes_drop: {
      value: cdktf.numberToHclTerraform(struct!.inboundBytesDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound_bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.inboundBytesSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ingress_bytes: {
      value: cdktf.numberToHclTerraform(struct!.ingressBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ingress_packets: {
      value: cdktf.numberToHclTerraform(struct!.ingressPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multi_pu_src_hash_pu1: {
      value: cdktf.numberToHclTerraform(struct!.multiPuSrcHashPu1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multi_pu_src_hash_pu2: {
      value: cdktf.numberToHclTerraform(struct!.multiPuSrcHashPu2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_bytes_drop: {
      value: cdktf.numberToHclTerraform(struct!.outboundBytesDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.outboundBytesSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_drop: {
      value: cdktf.numberToHclTerraform(struct!.outboundDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_pkt_sent: {
      value: cdktf.numberToHclTerraform(struct!.outboundPktSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_zero_fwd_byte_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.portZeroFwdByteRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_zero_fwd_pkt_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.portZeroFwdPktRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_zero_rev_byte_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.portZeroRevByteRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_zero_rev_pkt_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.portZeroRevPktRcvd),
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
    secondary_dst_entry_conn_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.secondaryDstEntryConnLimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_dst_entry_conn_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.secondaryDstEntryConnRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_dst_entry_frag_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.secondaryDstEntryFragPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_dst_entry_kbit_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.secondaryDstEntryKbitRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_dst_entry_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.secondaryDstEntryPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_entry_aged: {
      value: cdktf.numberToHclTerraform(struct!.secondaryEntryAged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_entry_hit: {
      value: cdktf.numberToHclTerraform(struct!.secondaryEntryHit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_entry_learn: {
      value: cdktf.numberToHclTerraform(struct!.secondaryEntryLearn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_entry_learning_thre_exceed: {
      value: cdktf.numberToHclTerraform(struct!.secondaryEntryLearningThreExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_entry_miss: {
      value: cdktf.numberToHclTerraform(struct!.secondaryEntryMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_port_aged: {
      value: cdktf.numberToHclTerraform(struct!.secondaryPortAged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_port_learn: {
      value: cdktf.numberToHclTerraform(struct!.secondaryPortLearn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_miss_fwd_byte_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.serviceMissFwdByteRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_miss_fwd_pkt_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.serviceMissFwdPktRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_miss_rev_byte_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.serviceMissRevByteRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_miss_rev_pkt_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.serviceMissRevPktRcvd),
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
    small_window_rcv: {
      value: cdktf.numberToHclTerraform(struct!.smallWindowRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_entry_icmp: {
      value: cdktf.numberToHclTerraform(struct!.sourceEntryIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_entry_other: {
      value: cdktf.numberToHclTerraform(struct!.sourceEntryOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_entry_tcp: {
      value: cdktf.numberToHclTerraform(struct!.sourceEntryTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_entry_total: {
      value: cdktf.numberToHclTerraform(struct!.sourceEntryTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_entry_udp: {
      value: cdktf.numberToHclTerraform(struct!.sourceEntryUdp),
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
    src_other_filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.srcOtherFilterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_other_filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.srcOtherFilterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_other_filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcOtherFilterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_other_filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.srcOtherFilterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_action_on_ack_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpActionOnAckBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_action_on_ack_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpActionOnAckFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_action_on_ack_gap_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpActionOnAckGapDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_action_on_ack_init: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpActionOnAckInit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_action_on_ack_reset: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpActionOnAckReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_action_on_ack_timeout: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpActionOnAckTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_action_on_syn_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpActionOnSynBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_action_on_syn_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpActionOnSynFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_action_on_syn_gap_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpActionOnSynGapDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_action_on_syn_init: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpActionOnSynInit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_action_on_syn_reset: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpActionOnSynReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_action_on_syn_timeout: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpActionOnSynTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_conn_prate_excd: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpConnPrateExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpFilterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpFilterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpFilterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpFilterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_out_of_seq_excd: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpOutOfSeqExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_retransmit_excd: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpRetransmitExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_rst_cookie_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpRstCookieFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_small_window_excd: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpSmallWindowExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_syn_auth_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpSynAuthFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_syn_cookie_fail: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpSynCookieFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_syn_cookie_sent: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpSynCookieSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_unauth_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpUnauthDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_wellknown_sport_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpWellknownSportDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_tcp_zero_window_excd: {
      value: cdktf.numberToHclTerraform(struct!.srcTcpZeroWindowExcd),
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
    src_udp_conn_prate_excd: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpConnPrateExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_udp_filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpFilterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_udp_filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpFilterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_udp_filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpFilterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_udp_filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpFilterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_udp_max_payload: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpMaxPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_udp_min_payload: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpMinPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_udp_ntp_monlist_req: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpNtpMonlistReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_udp_ntp_monlist_resp: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpNtpMonlistResp),
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
    src_udp_wellknown_sport_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcUdpWellknownSportDrop),
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
    tcp_fin_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.tcpFinRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_fwd_recv: {
      value: cdktf.numberToHclTerraform(struct!.tcpFwdRecv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_invalid_syn: {
      value: cdktf.numberToHclTerraform(struct!.tcpInvalidSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_invalid_synack: {
      value: cdktf.numberToHclTerraform(struct!.tcpInvalidSynack),
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
    tcp_rst_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.tcpRstRcvd),
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
    tcp_syn_cookie_fail: {
      value: cdktf.numberToHclTerraform(struct!.tcpSynCookieFail),
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
    token_auth_current_salt_matched: {
      value: cdktf.numberToHclTerraform(struct!.tokenAuthCurrentSaltMatched),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_auth_invalid_packets: {
      value: cdktf.numberToHclTerraform(struct!.tokenAuthInvalidPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_auth_mismatched_packets: {
      value: cdktf.numberToHclTerraform(struct!.tokenAuthMismatchedPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_auth_previous_salt_matched: {
      value: cdktf.numberToHclTerraform(struct!.tokenAuthPreviousSaltMatched),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_auth_session_created: {
      value: cdktf.numberToHclTerraform(struct!.tokenAuthSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    token_auth_session_created_fail: {
      value: cdktf.numberToHclTerraform(struct!.tokenAuthSessionCreatedFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_fwd_recv: {
      value: cdktf.numberToHclTerraform(struct!.udpFwdRecv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    victim_ip_aged: {
      value: cdktf.numberToHclTerraform(struct!.victimIpAged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    victim_ip_learned: {
      value: cdktf.numberToHclTerraform(struct!.victimIpLearned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_blackhole_inject: {
      value: cdktf.numberToHclTerraform(struct!.zoneBlackholeInject),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_blackhole_withdraw: {
      value: cdktf.numberToHclTerraform(struct!.zoneBlackholeWithdraw),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_frag_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneFragDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_frag_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.zoneFragRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_icmp_bytes_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneIcmpBytesDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_icmp_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneIcmpDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_icmp_frag_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.zoneIcmpFragPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_icmp_frag_src_rate_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneIcmpFragSrcRateDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_icmp_kibit_rate_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneIcmpKibitRateDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_icmp_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.zoneIcmpPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_icmp_pkt_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.zoneIcmpPktRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_icmp_pkt_sent: {
      value: cdktf.numberToHclTerraform(struct!.zoneIcmpPktSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_icmp_src_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneIcmpSrcDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_icmp_src_rate_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneIcmpSrcRateDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_ip_proto_kbit_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.zoneIpProtoKbitRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_ip_proto_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.zoneIpProtoPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_other_bytes_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneOtherBytesDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_other_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneOtherDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_other_filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.zoneOtherFilterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_other_filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.zoneOtherFilterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_other_filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneOtherFilterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_other_filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.zoneOtherFilterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_other_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.zoneOtherFilterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_other_filter_not_match: {
      value: cdktf.numberToHclTerraform(struct!.zoneOtherFilterNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_other_frag_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.zoneOtherFragPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_other_frag_src_rate_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneOtherFragSrcRateDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_other_kibit_rate_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneOtherKibitRateDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_other_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.zoneOtherPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_other_pkt_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.zoneOtherPktRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_other_pkt_sent: {
      value: cdktf.numberToHclTerraform(struct!.zoneOtherPktSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_other_src_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneOtherSrcDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_other_src_rate_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneOtherSrcRateDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_out_no_route: {
      value: cdktf.numberToHclTerraform(struct!.zoneOutNoRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_payload_too_big: {
      value: cdktf.numberToHclTerraform(struct!.zonePayloadTooBig),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_payload_too_small: {
      value: cdktf.numberToHclTerraform(struct!.zonePayloadTooSmall),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_pkt_sent: {
      value: cdktf.numberToHclTerraform(struct!.zonePktSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_port_bl: {
      value: cdktf.numberToHclTerraform(struct!.zonePortBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_port_conn_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.zonePortConnLimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_port_conn_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.zonePortConnRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_port_kbit_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.zonePortKbitRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_port_kbit_rate_exceed_pkt: {
      value: cdktf.numberToHclTerraform(struct!.zonePortKbitRateExceedPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_port_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.zonePortPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_port_undef_drop: {
      value: cdktf.numberToHclTerraform(struct!.zonePortUndefDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_port_undef_hit: {
      value: cdktf.numberToHclTerraform(struct!.zonePortUndefHit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_src_port_bl: {
      value: cdktf.numberToHclTerraform(struct!.zoneSrcPortBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_src_port_conn_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.zoneSrcPortConnLimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_src_port_conn_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.zoneSrcPortConnRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_src_port_kbit_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.zoneSrcPortKbitRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_src_port_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.zoneSrcPortPktRateExceed),
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
    zone_tcp_action_on_ack_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpActionOnAckBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_action_on_ack_fail: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpActionOnAckFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_action_on_ack_gap_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpActionOnAckGapDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_action_on_ack_init: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpActionOnAckInit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_action_on_ack_pass: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpActionOnAckPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_action_on_ack_reset: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpActionOnAckReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_action_on_ack_timeout: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpActionOnAckTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_action_on_syn_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpActionOnSynBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_action_on_syn_fail: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpActionOnSynFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_action_on_syn_gap_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpActionOnSynGapDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_action_on_syn_init: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpActionOnSynInit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_action_on_syn_pass: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpActionOnSynPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_action_on_syn_reset: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpActionOnSynReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_action_on_syn_timeout: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpActionOnSynTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_any_exceed: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpAnyExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_auth: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_auth_pass: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpAuthPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_bytes_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpBytesDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_conn_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpConnLimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_conn_prate_excd: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpConnPrateExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_conn_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpConnRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpFilterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpFilterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpFilterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpFilterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpFilterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_filter_not_match: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpFilterNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_frag_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpFragPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_frag_src_rate_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpFragSrcRateDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_kibit_rate_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpKibitRateDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_out_of_seq_excd: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpOutOfSeqExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_pkt_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpPktRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_pkt_sent: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpPktSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_port_any_exceed: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpPortAnyExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_retransmit_excd: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpRetransmitExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_rst_cookie_fail: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpRstCookieFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_session_created: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_small_window_excd: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpSmallWindowExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_src_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpSrcDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_src_rate_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpSrcRateDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_syn: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_syn_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpSynDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_unauth_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpUnauthDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_wellknown_sport_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpWellknownSportDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_tcp_zero_window_excd: {
      value: cdktf.numberToHclTerraform(struct!.zoneTcpZeroWindowExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_udp_any_exceed: {
      value: cdktf.numberToHclTerraform(struct!.zoneUdpAnyExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_udp_bytes_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneUdpBytesDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_udp_conn_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.zoneUdpConnLimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_udp_conn_prate_excd: {
      value: cdktf.numberToHclTerraform(struct!.zoneUdpConnPrateExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_udp_conn_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.zoneUdpConnRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_udp_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneUdpDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_udp_filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.zoneUdpFilterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_udp_filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.zoneUdpFilterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_udp_filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneUdpFilterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_udp_filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.zoneUdpFilterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_udp_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.zoneUdpFilterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_udp_filter_not_match: {
      value: cdktf.numberToHclTerraform(struct!.zoneUdpFilterNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_udp_frag_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.zoneUdpFragPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_udp_frag_src_rate_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneUdpFragSrcRateDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_udp_kibit_rate_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneUdpKibitRateDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_udp_ntp_monlist_req: {
      value: cdktf.numberToHclTerraform(struct!.zoneUdpNtpMonlistReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_udp_ntp_monlist_resp: {
      value: cdktf.numberToHclTerraform(struct!.zoneUdpNtpMonlistResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_udp_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.zoneUdpPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_udp_pkt_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.zoneUdpPktRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_udp_pkt_sent: {
      value: cdktf.numberToHclTerraform(struct!.zoneUdpPktSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_udp_port_any_exceed: {
      value: cdktf.numberToHclTerraform(struct!.zoneUdpPortAnyExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_udp_retry_init: {
      value: cdktf.numberToHclTerraform(struct!.zoneUdpRetryInit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_udp_retry_pass: {
      value: cdktf.numberToHclTerraform(struct!.zoneUdpRetryPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_udp_session_created: {
      value: cdktf.numberToHclTerraform(struct!.zoneUdpSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_udp_src_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneUdpSrcDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_udp_src_rate_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneUdpSrcRateDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zone_udp_wellknown_sport_drop: {
      value: cdktf.numberToHclTerraform(struct!.zoneUdpWellknownSportDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZoneStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsOutboundQueryMalformed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsOutboundQueryMalformed = this._dnsOutboundQueryMalformed;
    }
    if (this._dnsOutboundQueryRespChkBlacklisted !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsOutboundQueryRespChkBlacklisted = this._dnsOutboundQueryRespChkBlacklisted;
    }
    if (this._dnsOutboundQueryRespChkFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsOutboundQueryRespChkFailed = this._dnsOutboundQueryRespChkFailed;
    }
    if (this._dnsOutboundQueryRespChkNoRespSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsOutboundQueryRespChkNoRespSent = this._dnsOutboundQueryRespChkNoRespSent;
    }
    if (this._dnsOutboundQueryRespChkRefusedSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsOutboundQueryRespChkRefusedSent = this._dnsOutboundQueryRespChkRefusedSent;
    }
    if (this._dnsOutboundQueryRespChkResetSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsOutboundQueryRespChkResetSent = this._dnsOutboundQueryRespChkResetSent;
    }
    if (this._dnsOutboundQueryRespSizeExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsOutboundQueryRespSizeExceed = this._dnsOutboundQueryRespSizeExceed;
    }
    if (this._dnsOutboundQuerySessTimedOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsOutboundQuerySessTimedOut = this._dnsOutboundQuerySessTimedOut;
    }
    if (this._dnsOutboundTotalQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsOutboundTotalQuery = this._dnsOutboundTotalQuery;
    }
    if (this._dstClistOverflowPolicyAtLearning !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstClistOverflowPolicyAtLearning = this._dstClistOverflowPolicyAtLearning;
    }
    if (this._dstDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstDrop = this._dstDrop;
    }
    if (this._dstEntryConnLimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEntryConnLimitExceed = this._dstEntryConnLimitExceed;
    }
    if (this._dstEntryConnRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEntryConnRateExceed = this._dstEntryConnRateExceed;
    }
    if (this._dstEntryFragPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEntryFragPktRateExceed = this._dstEntryFragPktRateExceed;
    }
    if (this._dstEntryKbitRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEntryKbitRateExceed = this._dstEntryKbitRateExceed;
    }
    if (this._dstEntryKbitRateExceedCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEntryKbitRateExceedCount = this._dstEntryKbitRateExceedCount;
    }
    if (this._dstEntryOutboundConnLimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEntryOutboundConnLimitExceed = this._dstEntryOutboundConnLimitExceed;
    }
    if (this._dstEntryOutboundConnRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEntryOutboundConnRateExceed = this._dstEntryOutboundConnRateExceed;
    }
    if (this._dstEntryOutboundFragPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEntryOutboundFragPktRateExceed = this._dstEntryOutboundFragPktRateExceed;
    }
    if (this._dstEntryOutboundKbitRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEntryOutboundKbitRateExceed = this._dstEntryOutboundKbitRateExceed;
    }
    if (this._dstEntryOutboundKbitRateExceedCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEntryOutboundKbitRateExceedCount = this._dstEntryOutboundKbitRateExceedCount;
    }
    if (this._dstEntryOutboundPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEntryOutboundPktRateExceed = this._dstEntryOutboundPktRateExceed;
    }
    if (this._dstEntryOutboundTcpSessionAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEntryOutboundTcpSessionAged = this._dstEntryOutboundTcpSessionAged;
    }
    if (this._dstEntryOutboundTcpSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEntryOutboundTcpSessionCreated = this._dstEntryOutboundTcpSessionCreated;
    }
    if (this._dstEntryOutboundUdpSessionAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEntryOutboundUdpSessionAged = this._dstEntryOutboundUdpSessionAged;
    }
    if (this._dstEntryOutboundUdpSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEntryOutboundUdpSessionCreated = this._dstEntryOutboundUdpSessionCreated;
    }
    if (this._dstEntryPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEntryPktRateExceed = this._dstEntryPktRateExceed;
    }
    if (this._dstExceedActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstExceedActionDrop = this._dstExceedActionDrop;
    }
    if (this._dstExceedActionTunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstExceedActionTunnel = this._dstExceedActionTunnel;
    }
    if (this._dstIcmpAnyExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIcmpAnyExceed = this._dstIcmpAnyExceed;
    }
    if (this._dstIcmpBytesRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIcmpBytesRcv = this._dstIcmpBytesRcv;
    }
    if (this._dstIcmpBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIcmpBytesSent = this._dstIcmpBytesSent;
    }
    if (this._dstL4IcmpBlacklistDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstL4IcmpBlacklistDrop = this._dstL4IcmpBlacklistDrop;
    }
    if (this._dstL4OtherBlacklistDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstL4OtherBlacklistDrop = this._dstL4OtherBlacklistDrop;
    }
    if (this._dstL4TcpBlacklistDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstL4TcpBlacklistDrop = this._dstL4TcpBlacklistDrop;
    }
    if (this._dstL4UdpBlacklistDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstL4UdpBlacklistDrop = this._dstL4UdpBlacklistDrop;
    }
    if (this._dstOtherAnyExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOtherAnyExceed = this._dstOtherAnyExceed;
    }
    if (this._dstOtherBytesRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOtherBytesRcv = this._dstOtherBytesRcv;
    }
    if (this._dstOtherBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOtherBytesSent = this._dstOtherBytesSent;
    }
    if (this._dstSrcLearnOverflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSrcLearnOverflow = this._dstSrcLearnOverflow;
    }
    if (this._dstTcpAuthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpAuthDrop = this._dstTcpAuthDrop;
    }
    if (this._dstTcpAuthResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpAuthResp = this._dstTcpAuthResp;
    }
    if (this._dstTcpAuthRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpAuthRst = this._dstTcpAuthRst;
    }
    if (this._dstTcpBytesRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpBytesRcv = this._dstTcpBytesRcv;
    }
    if (this._dstTcpBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpBytesSent = this._dstTcpBytesSent;
    }
    if (this._dstTcpConnClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpConnClose = this._dstTcpConnClose;
    }
    if (this._dstTcpConnCloseHalfOpen !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpConnCloseHalfOpen = this._dstTcpConnCloseHalfOpen;
    }
    if (this._dstTcpConnCloseWFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpConnCloseWFin = this._dstTcpConnCloseWFin;
    }
    if (this._dstTcpConnCloseWIdle !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpConnCloseWIdle = this._dstTcpConnCloseWIdle;
    }
    if (this._dstTcpConnCloseWRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpConnCloseWRst = this._dstTcpConnCloseWRst;
    }
    if (this._dstTcpConnCreateFromAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpConnCreateFromAck = this._dstTcpConnCreateFromAck;
    }
    if (this._dstTcpConnCreateFromSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpConnCreateFromSyn = this._dstTcpConnCreateFromSyn;
    }
    if (this._dstTcpSessionAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpSessionAged = this._dstTcpSessionAged;
    }
    if (this._dstUdpAuthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpAuthDrop = this._dstUdpAuthDrop;
    }
    if (this._dstUdpBytesRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpBytesRcv = this._dstUdpBytesRcv;
    }
    if (this._dstUdpBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpBytesSent = this._dstUdpBytesSent;
    }
    if (this._dstUdpRetryFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpRetryFail = this._dstUdpRetryFail;
    }
    if (this._dstUdpRetryGapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpRetryGapDrop = this._dstUdpRetryGapDrop;
    }
    if (this._dstUdpRetryTimeoutBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpRetryTimeoutBlacklist = this._dstUdpRetryTimeoutBlacklist;
    }
    if (this._dstUdpSessionAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpSessionAged = this._dstUdpSessionAged;
    }
    if (this._eastWestInboundDropByte !== undefined) {
      hasAnyValues = true;
      internalValueResult.eastWestInboundDropByte = this._eastWestInboundDropByte;
    }
    if (this._eastWestInboundDropPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.eastWestInboundDropPkt = this._eastWestInboundDropPkt;
    }
    if (this._eastWestInboundFwdByte !== undefined) {
      hasAnyValues = true;
      internalValueResult.eastWestInboundFwdByte = this._eastWestInboundFwdByte;
    }
    if (this._eastWestInboundFwdPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.eastWestInboundFwdPkt = this._eastWestInboundFwdPkt;
    }
    if (this._eastWestInboundRcvByte !== undefined) {
      hasAnyValues = true;
      internalValueResult.eastWestInboundRcvByte = this._eastWestInboundRcvByte;
    }
    if (this._eastWestInboundRcvPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.eastWestInboundRcvPkt = this._eastWestInboundRcvPkt;
    }
    if (this._eastWestOutboundDropByte !== undefined) {
      hasAnyValues = true;
      internalValueResult.eastWestOutboundDropByte = this._eastWestOutboundDropByte;
    }
    if (this._eastWestOutboundDropPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.eastWestOutboundDropPkt = this._eastWestOutboundDropPkt;
    }
    if (this._eastWestOutboundFwdByte !== undefined) {
      hasAnyValues = true;
      internalValueResult.eastWestOutboundFwdByte = this._eastWestOutboundFwdByte;
    }
    if (this._eastWestOutboundFwdPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.eastWestOutboundFwdPkt = this._eastWestOutboundFwdPkt;
    }
    if (this._eastWestOutboundRcvByte !== undefined) {
      hasAnyValues = true;
      internalValueResult.eastWestOutboundRcvByte = this._eastWestOutboundRcvByte;
    }
    if (this._eastWestOutboundRcvPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.eastWestOutboundRcvPkt = this._eastWestOutboundRcvPkt;
    }
    if (this._egressBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressBytes = this._egressBytes;
    }
    if (this._egressPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressPackets = this._egressPackets;
    }
    if (this._entrySyncMessageReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrySyncMessageReceived = this._entrySyncMessageReceived;
    }
    if (this._entrySyncMessageSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrySyncMessageSent = this._entrySyncMessageSent;
    }
    if (this._icmpFwdRecv !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpFwdRecv = this._icmpFwdRecv;
    }
    if (this._inboundBytesDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundBytesDrop = this._inboundBytesDrop;
    }
    if (this._inboundBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundBytesSent = this._inboundBytesSent;
    }
    if (this._ingressBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressBytes = this._ingressBytes;
    }
    if (this._ingressPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressPackets = this._ingressPackets;
    }
    if (this._multiPuSrcHashPu1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiPuSrcHashPu1 = this._multiPuSrcHashPu1;
    }
    if (this._multiPuSrcHashPu2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiPuSrcHashPu2 = this._multiPuSrcHashPu2;
    }
    if (this._outboundBytesDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundBytesDrop = this._outboundBytesDrop;
    }
    if (this._outboundBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundBytesSent = this._outboundBytesSent;
    }
    if (this._outboundDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundDrop = this._outboundDrop;
    }
    if (this._outboundPktSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPktSent = this._outboundPktSent;
    }
    if (this._portZeroFwdByteRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.portZeroFwdByteRcvd = this._portZeroFwdByteRcvd;
    }
    if (this._portZeroFwdPktRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.portZeroFwdPktRcvd = this._portZeroFwdPktRcvd;
    }
    if (this._portZeroRevByteRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.portZeroRevByteRcvd = this._portZeroRevByteRcvd;
    }
    if (this._portZeroRevPktRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.portZeroRevPktRcvd = this._portZeroRevPktRcvd;
    }
    if (this._progConnExceedBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.progConnExceedBl = this._progConnExceedBl;
    }
    if (this._progConnExceedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.progConnExceedDrop = this._progConnExceedDrop;
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
    if (this._secondaryDstEntryConnLimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryDstEntryConnLimitExceed = this._secondaryDstEntryConnLimitExceed;
    }
    if (this._secondaryDstEntryConnRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryDstEntryConnRateExceed = this._secondaryDstEntryConnRateExceed;
    }
    if (this._secondaryDstEntryFragPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryDstEntryFragPktRateExceed = this._secondaryDstEntryFragPktRateExceed;
    }
    if (this._secondaryDstEntryKbitRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryDstEntryKbitRateExceed = this._secondaryDstEntryKbitRateExceed;
    }
    if (this._secondaryDstEntryPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryDstEntryPktRateExceed = this._secondaryDstEntryPktRateExceed;
    }
    if (this._secondaryEntryAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryEntryAged = this._secondaryEntryAged;
    }
    if (this._secondaryEntryHit !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryEntryHit = this._secondaryEntryHit;
    }
    if (this._secondaryEntryLearn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryEntryLearn = this._secondaryEntryLearn;
    }
    if (this._secondaryEntryLearningThreExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryEntryLearningThreExceed = this._secondaryEntryLearningThreExceed;
    }
    if (this._secondaryEntryMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryEntryMiss = this._secondaryEntryMiss;
    }
    if (this._secondaryPortAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryPortAged = this._secondaryPortAged;
    }
    if (this._secondaryPortLearn !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryPortLearn = this._secondaryPortLearn;
    }
    if (this._serviceMissFwdByteRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceMissFwdByteRcvd = this._serviceMissFwdByteRcvd;
    }
    if (this._serviceMissFwdPktRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceMissFwdPktRcvd = this._serviceMissFwdPktRcvd;
    }
    if (this._serviceMissRevByteRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceMissRevByteRcvd = this._serviceMissRevByteRcvd;
    }
    if (this._serviceMissRevPktRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceMissRevPktRcvd = this._serviceMissRevPktRcvd;
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
    if (this._smallWindowRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.smallWindowRcv = this._smallWindowRcv;
    }
    if (this._sourceEntryIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceEntryIcmp = this._sourceEntryIcmp;
    }
    if (this._sourceEntryOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceEntryOther = this._sourceEntryOther;
    }
    if (this._sourceEntryTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceEntryTcp = this._sourceEntryTcp;
    }
    if (this._sourceEntryTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceEntryTotal = this._sourceEntryTotal;
    }
    if (this._sourceEntryUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceEntryUdp = this._sourceEntryUdp;
    }
    if (this._srcFragDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFragDrop = this._srcFragDrop;
    }
    if (this._srcOtherFilterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcOtherFilterActionBlacklist = this._srcOtherFilterActionBlacklist;
    }
    if (this._srcOtherFilterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcOtherFilterActionDefaultPass = this._srcOtherFilterActionDefaultPass;
    }
    if (this._srcOtherFilterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcOtherFilterActionDrop = this._srcOtherFilterActionDrop;
    }
    if (this._srcOtherFilterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcOtherFilterActionWhitelist = this._srcOtherFilterActionWhitelist;
    }
    if (this._srcTcpActionOnAckBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpActionOnAckBlacklist = this._srcTcpActionOnAckBlacklist;
    }
    if (this._srcTcpActionOnAckFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpActionOnAckFail = this._srcTcpActionOnAckFail;
    }
    if (this._srcTcpActionOnAckGapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpActionOnAckGapDrop = this._srcTcpActionOnAckGapDrop;
    }
    if (this._srcTcpActionOnAckInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpActionOnAckInit = this._srcTcpActionOnAckInit;
    }
    if (this._srcTcpActionOnAckReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpActionOnAckReset = this._srcTcpActionOnAckReset;
    }
    if (this._srcTcpActionOnAckTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpActionOnAckTimeout = this._srcTcpActionOnAckTimeout;
    }
    if (this._srcTcpActionOnSynBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpActionOnSynBlacklist = this._srcTcpActionOnSynBlacklist;
    }
    if (this._srcTcpActionOnSynFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpActionOnSynFail = this._srcTcpActionOnSynFail;
    }
    if (this._srcTcpActionOnSynGapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpActionOnSynGapDrop = this._srcTcpActionOnSynGapDrop;
    }
    if (this._srcTcpActionOnSynInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpActionOnSynInit = this._srcTcpActionOnSynInit;
    }
    if (this._srcTcpActionOnSynReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpActionOnSynReset = this._srcTcpActionOnSynReset;
    }
    if (this._srcTcpActionOnSynTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpActionOnSynTimeout = this._srcTcpActionOnSynTimeout;
    }
    if (this._srcTcpConnPrateExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpConnPrateExcd = this._srcTcpConnPrateExcd;
    }
    if (this._srcTcpFilterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpFilterActionBlacklist = this._srcTcpFilterActionBlacklist;
    }
    if (this._srcTcpFilterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpFilterActionDefaultPass = this._srcTcpFilterActionDefaultPass;
    }
    if (this._srcTcpFilterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpFilterActionDrop = this._srcTcpFilterActionDrop;
    }
    if (this._srcTcpFilterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpFilterActionWhitelist = this._srcTcpFilterActionWhitelist;
    }
    if (this._srcTcpOutOfSeqExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpOutOfSeqExcd = this._srcTcpOutOfSeqExcd;
    }
    if (this._srcTcpRetransmitExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpRetransmitExcd = this._srcTcpRetransmitExcd;
    }
    if (this._srcTcpRstCookieFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpRstCookieFail = this._srcTcpRstCookieFail;
    }
    if (this._srcTcpSmallWindowExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpSmallWindowExcd = this._srcTcpSmallWindowExcd;
    }
    if (this._srcTcpSynAuthFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpSynAuthFail = this._srcTcpSynAuthFail;
    }
    if (this._srcTcpSynCookieFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpSynCookieFail = this._srcTcpSynCookieFail;
    }
    if (this._srcTcpSynCookieSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpSynCookieSent = this._srcTcpSynCookieSent;
    }
    if (this._srcTcpUnauthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpUnauthDrop = this._srcTcpUnauthDrop;
    }
    if (this._srcTcpWellknownSportDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpWellknownSportDrop = this._srcTcpWellknownSportDrop;
    }
    if (this._srcTcpZeroWindowExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcTcpZeroWindowExcd = this._srcTcpZeroWindowExcd;
    }
    if (this._srcUdpAuthTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpAuthTimeout = this._srcUdpAuthTimeout;
    }
    if (this._srcUdpConnPrateExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpConnPrateExcd = this._srcUdpConnPrateExcd;
    }
    if (this._srcUdpFilterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpFilterActionBlacklist = this._srcUdpFilterActionBlacklist;
    }
    if (this._srcUdpFilterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpFilterActionDefaultPass = this._srcUdpFilterActionDefaultPass;
    }
    if (this._srcUdpFilterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpFilterActionDrop = this._srcUdpFilterActionDrop;
    }
    if (this._srcUdpFilterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpFilterActionWhitelist = this._srcUdpFilterActionWhitelist;
    }
    if (this._srcUdpMaxPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpMaxPayload = this._srcUdpMaxPayload;
    }
    if (this._srcUdpMinPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpMinPayload = this._srcUdpMinPayload;
    }
    if (this._srcUdpNtpMonlistReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpNtpMonlistReq = this._srcUdpNtpMonlistReq;
    }
    if (this._srcUdpNtpMonlistResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpNtpMonlistResp = this._srcUdpNtpMonlistResp;
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
    if (this._srcUdpWellknownSportDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcUdpWellknownSportDrop = this._srcUdpWellknownSportDrop;
    }
    if (this._tcpAckRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAckRcvd = this._tcpAckRcvd;
    }
    if (this._tcpFinRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFinRcvd = this._tcpFinRcvd;
    }
    if (this._tcpFwdRecv !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFwdRecv = this._tcpFwdRecv;
    }
    if (this._tcpInvalidSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpInvalidSyn = this._tcpInvalidSyn;
    }
    if (this._tcpInvalidSynack !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpInvalidSynack = this._tcpInvalidSynack;
    }
    if (this._tcpRexmitSynLimitBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRexmitSynLimitBl = this._tcpRexmitSynLimitBl;
    }
    if (this._tcpRexmitSynLimitDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRexmitSynLimitDrop = this._tcpRexmitSynLimitDrop;
    }
    if (this._tcpRstRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRstRcvd = this._tcpRstRcvd;
    }
    if (this._tcpSynAckRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynAckRcvd = this._tcpSynAckRcvd;
    }
    if (this._tcpSynCookieFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynCookieFail = this._tcpSynCookieFail;
    }
    if (this._tcpSynRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynRcvd = this._tcpSynRcvd;
    }
    if (this._tokenAuthCurrentSaltMatched !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenAuthCurrentSaltMatched = this._tokenAuthCurrentSaltMatched;
    }
    if (this._tokenAuthInvalidPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenAuthInvalidPackets = this._tokenAuthInvalidPackets;
    }
    if (this._tokenAuthMismatchedPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenAuthMismatchedPackets = this._tokenAuthMismatchedPackets;
    }
    if (this._tokenAuthPreviousSaltMatched !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenAuthPreviousSaltMatched = this._tokenAuthPreviousSaltMatched;
    }
    if (this._tokenAuthSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenAuthSessionCreated = this._tokenAuthSessionCreated;
    }
    if (this._tokenAuthSessionCreatedFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenAuthSessionCreatedFail = this._tokenAuthSessionCreatedFail;
    }
    if (this._udpFwdRecv !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFwdRecv = this._udpFwdRecv;
    }
    if (this._victimIpAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.victimIpAged = this._victimIpAged;
    }
    if (this._victimIpLearned !== undefined) {
      hasAnyValues = true;
      internalValueResult.victimIpLearned = this._victimIpLearned;
    }
    if (this._zoneBlackholeInject !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneBlackholeInject = this._zoneBlackholeInject;
    }
    if (this._zoneBlackholeWithdraw !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneBlackholeWithdraw = this._zoneBlackholeWithdraw;
    }
    if (this._zoneFragDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneFragDrop = this._zoneFragDrop;
    }
    if (this._zoneFragRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneFragRcvd = this._zoneFragRcvd;
    }
    if (this._zoneIcmpBytesDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneIcmpBytesDrop = this._zoneIcmpBytesDrop;
    }
    if (this._zoneIcmpDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneIcmpDrop = this._zoneIcmpDrop;
    }
    if (this._zoneIcmpFragPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneIcmpFragPktRateExceed = this._zoneIcmpFragPktRateExceed;
    }
    if (this._zoneIcmpFragSrcRateDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneIcmpFragSrcRateDrop = this._zoneIcmpFragSrcRateDrop;
    }
    if (this._zoneIcmpKibitRateDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneIcmpKibitRateDrop = this._zoneIcmpKibitRateDrop;
    }
    if (this._zoneIcmpPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneIcmpPktRateExceed = this._zoneIcmpPktRateExceed;
    }
    if (this._zoneIcmpPktRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneIcmpPktRcvd = this._zoneIcmpPktRcvd;
    }
    if (this._zoneIcmpPktSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneIcmpPktSent = this._zoneIcmpPktSent;
    }
    if (this._zoneIcmpSrcDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneIcmpSrcDrop = this._zoneIcmpSrcDrop;
    }
    if (this._zoneIcmpSrcRateDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneIcmpSrcRateDrop = this._zoneIcmpSrcRateDrop;
    }
    if (this._zoneIpProtoKbitRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneIpProtoKbitRateExceed = this._zoneIpProtoKbitRateExceed;
    }
    if (this._zoneIpProtoPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneIpProtoPktRateExceed = this._zoneIpProtoPktRateExceed;
    }
    if (this._zoneOtherBytesDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneOtherBytesDrop = this._zoneOtherBytesDrop;
    }
    if (this._zoneOtherDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneOtherDrop = this._zoneOtherDrop;
    }
    if (this._zoneOtherFilterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneOtherFilterActionBlacklist = this._zoneOtherFilterActionBlacklist;
    }
    if (this._zoneOtherFilterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneOtherFilterActionDefaultPass = this._zoneOtherFilterActionDefaultPass;
    }
    if (this._zoneOtherFilterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneOtherFilterActionDrop = this._zoneOtherFilterActionDrop;
    }
    if (this._zoneOtherFilterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneOtherFilterActionWhitelist = this._zoneOtherFilterActionWhitelist;
    }
    if (this._zoneOtherFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneOtherFilterMatch = this._zoneOtherFilterMatch;
    }
    if (this._zoneOtherFilterNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneOtherFilterNotMatch = this._zoneOtherFilterNotMatch;
    }
    if (this._zoneOtherFragPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneOtherFragPktRateExceed = this._zoneOtherFragPktRateExceed;
    }
    if (this._zoneOtherFragSrcRateDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneOtherFragSrcRateDrop = this._zoneOtherFragSrcRateDrop;
    }
    if (this._zoneOtherKibitRateDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneOtherKibitRateDrop = this._zoneOtherKibitRateDrop;
    }
    if (this._zoneOtherPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneOtherPktRateExceed = this._zoneOtherPktRateExceed;
    }
    if (this._zoneOtherPktRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneOtherPktRcvd = this._zoneOtherPktRcvd;
    }
    if (this._zoneOtherPktSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneOtherPktSent = this._zoneOtherPktSent;
    }
    if (this._zoneOtherSrcDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneOtherSrcDrop = this._zoneOtherSrcDrop;
    }
    if (this._zoneOtherSrcRateDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneOtherSrcRateDrop = this._zoneOtherSrcRateDrop;
    }
    if (this._zoneOutNoRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneOutNoRoute = this._zoneOutNoRoute;
    }
    if (this._zonePayloadTooBig !== undefined) {
      hasAnyValues = true;
      internalValueResult.zonePayloadTooBig = this._zonePayloadTooBig;
    }
    if (this._zonePayloadTooSmall !== undefined) {
      hasAnyValues = true;
      internalValueResult.zonePayloadTooSmall = this._zonePayloadTooSmall;
    }
    if (this._zonePktSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.zonePktSent = this._zonePktSent;
    }
    if (this._zonePortBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.zonePortBl = this._zonePortBl;
    }
    if (this._zonePortConnLimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.zonePortConnLimitExceed = this._zonePortConnLimitExceed;
    }
    if (this._zonePortConnRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.zonePortConnRateExceed = this._zonePortConnRateExceed;
    }
    if (this._zonePortKbitRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.zonePortKbitRateExceed = this._zonePortKbitRateExceed;
    }
    if (this._zonePortKbitRateExceedPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.zonePortKbitRateExceedPkt = this._zonePortKbitRateExceedPkt;
    }
    if (this._zonePortPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.zonePortPktRateExceed = this._zonePortPktRateExceed;
    }
    if (this._zonePortUndefDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zonePortUndefDrop = this._zonePortUndefDrop;
    }
    if (this._zonePortUndefHit !== undefined) {
      hasAnyValues = true;
      internalValueResult.zonePortUndefHit = this._zonePortUndefHit;
    }
    if (this._zoneSrcPortBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneSrcPortBl = this._zoneSrcPortBl;
    }
    if (this._zoneSrcPortConnLimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneSrcPortConnLimitExceed = this._zoneSrcPortConnLimitExceed;
    }
    if (this._zoneSrcPortConnRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneSrcPortConnRateExceed = this._zoneSrcPortConnRateExceed;
    }
    if (this._zoneSrcPortKbitRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneSrcPortKbitRateExceed = this._zoneSrcPortKbitRateExceed;
    }
    if (this._zoneSrcPortPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneSrcPortPktRateExceed = this._zoneSrcPortPktRateExceed;
    }
    if (this._zoneSrcUdpRetryTimeoutBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneSrcUdpRetryTimeoutBlacklist = this._zoneSrcUdpRetryTimeoutBlacklist;
    }
    if (this._zoneTcpActionOnAckBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpActionOnAckBlacklist = this._zoneTcpActionOnAckBlacklist;
    }
    if (this._zoneTcpActionOnAckFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpActionOnAckFail = this._zoneTcpActionOnAckFail;
    }
    if (this._zoneTcpActionOnAckGapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpActionOnAckGapDrop = this._zoneTcpActionOnAckGapDrop;
    }
    if (this._zoneTcpActionOnAckInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpActionOnAckInit = this._zoneTcpActionOnAckInit;
    }
    if (this._zoneTcpActionOnAckPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpActionOnAckPass = this._zoneTcpActionOnAckPass;
    }
    if (this._zoneTcpActionOnAckReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpActionOnAckReset = this._zoneTcpActionOnAckReset;
    }
    if (this._zoneTcpActionOnAckTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpActionOnAckTimeout = this._zoneTcpActionOnAckTimeout;
    }
    if (this._zoneTcpActionOnSynBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpActionOnSynBlacklist = this._zoneTcpActionOnSynBlacklist;
    }
    if (this._zoneTcpActionOnSynFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpActionOnSynFail = this._zoneTcpActionOnSynFail;
    }
    if (this._zoneTcpActionOnSynGapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpActionOnSynGapDrop = this._zoneTcpActionOnSynGapDrop;
    }
    if (this._zoneTcpActionOnSynInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpActionOnSynInit = this._zoneTcpActionOnSynInit;
    }
    if (this._zoneTcpActionOnSynPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpActionOnSynPass = this._zoneTcpActionOnSynPass;
    }
    if (this._zoneTcpActionOnSynReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpActionOnSynReset = this._zoneTcpActionOnSynReset;
    }
    if (this._zoneTcpActionOnSynTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpActionOnSynTimeout = this._zoneTcpActionOnSynTimeout;
    }
    if (this._zoneTcpAnyExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpAnyExceed = this._zoneTcpAnyExceed;
    }
    if (this._zoneTcpAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpAuth = this._zoneTcpAuth;
    }
    if (this._zoneTcpAuthPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpAuthPass = this._zoneTcpAuthPass;
    }
    if (this._zoneTcpBytesDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpBytesDrop = this._zoneTcpBytesDrop;
    }
    if (this._zoneTcpConnLimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpConnLimitExceed = this._zoneTcpConnLimitExceed;
    }
    if (this._zoneTcpConnPrateExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpConnPrateExcd = this._zoneTcpConnPrateExcd;
    }
    if (this._zoneTcpConnRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpConnRateExceed = this._zoneTcpConnRateExceed;
    }
    if (this._zoneTcpDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpDrop = this._zoneTcpDrop;
    }
    if (this._zoneTcpFilterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpFilterActionBlacklist = this._zoneTcpFilterActionBlacklist;
    }
    if (this._zoneTcpFilterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpFilterActionDefaultPass = this._zoneTcpFilterActionDefaultPass;
    }
    if (this._zoneTcpFilterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpFilterActionDrop = this._zoneTcpFilterActionDrop;
    }
    if (this._zoneTcpFilterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpFilterActionWhitelist = this._zoneTcpFilterActionWhitelist;
    }
    if (this._zoneTcpFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpFilterMatch = this._zoneTcpFilterMatch;
    }
    if (this._zoneTcpFilterNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpFilterNotMatch = this._zoneTcpFilterNotMatch;
    }
    if (this._zoneTcpFragPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpFragPktRateExceed = this._zoneTcpFragPktRateExceed;
    }
    if (this._zoneTcpFragSrcRateDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpFragSrcRateDrop = this._zoneTcpFragSrcRateDrop;
    }
    if (this._zoneTcpKibitRateDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpKibitRateDrop = this._zoneTcpKibitRateDrop;
    }
    if (this._zoneTcpOutOfSeqExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpOutOfSeqExcd = this._zoneTcpOutOfSeqExcd;
    }
    if (this._zoneTcpPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpPktRateExceed = this._zoneTcpPktRateExceed;
    }
    if (this._zoneTcpPktRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpPktRcvd = this._zoneTcpPktRcvd;
    }
    if (this._zoneTcpPktSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpPktSent = this._zoneTcpPktSent;
    }
    if (this._zoneTcpPortAnyExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpPortAnyExceed = this._zoneTcpPortAnyExceed;
    }
    if (this._zoneTcpRetransmitExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpRetransmitExcd = this._zoneTcpRetransmitExcd;
    }
    if (this._zoneTcpRstCookieFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpRstCookieFail = this._zoneTcpRstCookieFail;
    }
    if (this._zoneTcpSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpSessionCreated = this._zoneTcpSessionCreated;
    }
    if (this._zoneTcpSmallWindowExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpSmallWindowExcd = this._zoneTcpSmallWindowExcd;
    }
    if (this._zoneTcpSrcDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpSrcDrop = this._zoneTcpSrcDrop;
    }
    if (this._zoneTcpSrcRateDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpSrcRateDrop = this._zoneTcpSrcRateDrop;
    }
    if (this._zoneTcpSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpSyn = this._zoneTcpSyn;
    }
    if (this._zoneTcpSynDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpSynDrop = this._zoneTcpSynDrop;
    }
    if (this._zoneTcpUnauthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpUnauthDrop = this._zoneTcpUnauthDrop;
    }
    if (this._zoneTcpWellknownSportDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpWellknownSportDrop = this._zoneTcpWellknownSportDrop;
    }
    if (this._zoneTcpZeroWindowExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneTcpZeroWindowExcd = this._zoneTcpZeroWindowExcd;
    }
    if (this._zoneUdpAnyExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneUdpAnyExceed = this._zoneUdpAnyExceed;
    }
    if (this._zoneUdpBytesDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneUdpBytesDrop = this._zoneUdpBytesDrop;
    }
    if (this._zoneUdpConnLimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneUdpConnLimitExceed = this._zoneUdpConnLimitExceed;
    }
    if (this._zoneUdpConnPrateExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneUdpConnPrateExcd = this._zoneUdpConnPrateExcd;
    }
    if (this._zoneUdpConnRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneUdpConnRateExceed = this._zoneUdpConnRateExceed;
    }
    if (this._zoneUdpDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneUdpDrop = this._zoneUdpDrop;
    }
    if (this._zoneUdpFilterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneUdpFilterActionBlacklist = this._zoneUdpFilterActionBlacklist;
    }
    if (this._zoneUdpFilterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneUdpFilterActionDefaultPass = this._zoneUdpFilterActionDefaultPass;
    }
    if (this._zoneUdpFilterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneUdpFilterActionDrop = this._zoneUdpFilterActionDrop;
    }
    if (this._zoneUdpFilterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneUdpFilterActionWhitelist = this._zoneUdpFilterActionWhitelist;
    }
    if (this._zoneUdpFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneUdpFilterMatch = this._zoneUdpFilterMatch;
    }
    if (this._zoneUdpFilterNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneUdpFilterNotMatch = this._zoneUdpFilterNotMatch;
    }
    if (this._zoneUdpFragPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneUdpFragPktRateExceed = this._zoneUdpFragPktRateExceed;
    }
    if (this._zoneUdpFragSrcRateDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneUdpFragSrcRateDrop = this._zoneUdpFragSrcRateDrop;
    }
    if (this._zoneUdpKibitRateDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneUdpKibitRateDrop = this._zoneUdpKibitRateDrop;
    }
    if (this._zoneUdpNtpMonlistReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneUdpNtpMonlistReq = this._zoneUdpNtpMonlistReq;
    }
    if (this._zoneUdpNtpMonlistResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneUdpNtpMonlistResp = this._zoneUdpNtpMonlistResp;
    }
    if (this._zoneUdpPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneUdpPktRateExceed = this._zoneUdpPktRateExceed;
    }
    if (this._zoneUdpPktRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneUdpPktRcvd = this._zoneUdpPktRcvd;
    }
    if (this._zoneUdpPktSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneUdpPktSent = this._zoneUdpPktSent;
    }
    if (this._zoneUdpPortAnyExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneUdpPortAnyExceed = this._zoneUdpPortAnyExceed;
    }
    if (this._zoneUdpRetryInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneUdpRetryInit = this._zoneUdpRetryInit;
    }
    if (this._zoneUdpRetryPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneUdpRetryPass = this._zoneUdpRetryPass;
    }
    if (this._zoneUdpSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneUdpSessionCreated = this._zoneUdpSessionCreated;
    }
    if (this._zoneUdpSrcDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneUdpSrcDrop = this._zoneUdpSrcDrop;
    }
    if (this._zoneUdpSrcRateDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneUdpSrcRateDrop = this._zoneUdpSrcRateDrop;
    }
    if (this._zoneUdpWellknownSportDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.zoneUdpWellknownSportDrop = this._zoneUdpWellknownSportDrop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsOutboundQueryMalformed = undefined;
      this._dnsOutboundQueryRespChkBlacklisted = undefined;
      this._dnsOutboundQueryRespChkFailed = undefined;
      this._dnsOutboundQueryRespChkNoRespSent = undefined;
      this._dnsOutboundQueryRespChkRefusedSent = undefined;
      this._dnsOutboundQueryRespChkResetSent = undefined;
      this._dnsOutboundQueryRespSizeExceed = undefined;
      this._dnsOutboundQuerySessTimedOut = undefined;
      this._dnsOutboundTotalQuery = undefined;
      this._dstClistOverflowPolicyAtLearning = undefined;
      this._dstDrop = undefined;
      this._dstEntryConnLimitExceed = undefined;
      this._dstEntryConnRateExceed = undefined;
      this._dstEntryFragPktRateExceed = undefined;
      this._dstEntryKbitRateExceed = undefined;
      this._dstEntryKbitRateExceedCount = undefined;
      this._dstEntryOutboundConnLimitExceed = undefined;
      this._dstEntryOutboundConnRateExceed = undefined;
      this._dstEntryOutboundFragPktRateExceed = undefined;
      this._dstEntryOutboundKbitRateExceed = undefined;
      this._dstEntryOutboundKbitRateExceedCount = undefined;
      this._dstEntryOutboundPktRateExceed = undefined;
      this._dstEntryOutboundTcpSessionAged = undefined;
      this._dstEntryOutboundTcpSessionCreated = undefined;
      this._dstEntryOutboundUdpSessionAged = undefined;
      this._dstEntryOutboundUdpSessionCreated = undefined;
      this._dstEntryPktRateExceed = undefined;
      this._dstExceedActionDrop = undefined;
      this._dstExceedActionTunnel = undefined;
      this._dstIcmpAnyExceed = undefined;
      this._dstIcmpBytesRcv = undefined;
      this._dstIcmpBytesSent = undefined;
      this._dstL4IcmpBlacklistDrop = undefined;
      this._dstL4OtherBlacklistDrop = undefined;
      this._dstL4TcpBlacklistDrop = undefined;
      this._dstL4UdpBlacklistDrop = undefined;
      this._dstOtherAnyExceed = undefined;
      this._dstOtherBytesRcv = undefined;
      this._dstOtherBytesSent = undefined;
      this._dstSrcLearnOverflow = undefined;
      this._dstTcpAuthDrop = undefined;
      this._dstTcpAuthResp = undefined;
      this._dstTcpAuthRst = undefined;
      this._dstTcpBytesRcv = undefined;
      this._dstTcpBytesSent = undefined;
      this._dstTcpConnClose = undefined;
      this._dstTcpConnCloseHalfOpen = undefined;
      this._dstTcpConnCloseWFin = undefined;
      this._dstTcpConnCloseWIdle = undefined;
      this._dstTcpConnCloseWRst = undefined;
      this._dstTcpConnCreateFromAck = undefined;
      this._dstTcpConnCreateFromSyn = undefined;
      this._dstTcpSessionAged = undefined;
      this._dstUdpAuthDrop = undefined;
      this._dstUdpBytesRcv = undefined;
      this._dstUdpBytesSent = undefined;
      this._dstUdpRetryFail = undefined;
      this._dstUdpRetryGapDrop = undefined;
      this._dstUdpRetryTimeoutBlacklist = undefined;
      this._dstUdpSessionAged = undefined;
      this._eastWestInboundDropByte = undefined;
      this._eastWestInboundDropPkt = undefined;
      this._eastWestInboundFwdByte = undefined;
      this._eastWestInboundFwdPkt = undefined;
      this._eastWestInboundRcvByte = undefined;
      this._eastWestInboundRcvPkt = undefined;
      this._eastWestOutboundDropByte = undefined;
      this._eastWestOutboundDropPkt = undefined;
      this._eastWestOutboundFwdByte = undefined;
      this._eastWestOutboundFwdPkt = undefined;
      this._eastWestOutboundRcvByte = undefined;
      this._eastWestOutboundRcvPkt = undefined;
      this._egressBytes = undefined;
      this._egressPackets = undefined;
      this._entrySyncMessageReceived = undefined;
      this._entrySyncMessageSent = undefined;
      this._icmpFwdRecv = undefined;
      this._inboundBytesDrop = undefined;
      this._inboundBytesSent = undefined;
      this._ingressBytes = undefined;
      this._ingressPackets = undefined;
      this._multiPuSrcHashPu1 = undefined;
      this._multiPuSrcHashPu2 = undefined;
      this._outboundBytesDrop = undefined;
      this._outboundBytesSent = undefined;
      this._outboundDrop = undefined;
      this._outboundPktSent = undefined;
      this._portZeroFwdByteRcvd = undefined;
      this._portZeroFwdPktRcvd = undefined;
      this._portZeroRevByteRcvd = undefined;
      this._portZeroRevPktRcvd = undefined;
      this._progConnExceedBl = undefined;
      this._progConnExceedDrop = undefined;
      this._progConnRcvdExceed = undefined;
      this._progConnRcvdSentRatioExceed = undefined;
      this._progConnSamples = undefined;
      this._progConnSamplesProcessed = undefined;
      this._progConnSentExceed = undefined;
      this._progConnTimeExceed = undefined;
      this._progExceedBl = undefined;
      this._progExceedDrop = undefined;
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
      this._progWinRcvdExceed = undefined;
      this._progWinRcvdSentRatioExceed = undefined;
      this._progWinSamples = undefined;
      this._progWinSamplesProcessed = undefined;
      this._progWinSentExceed = undefined;
      this._secondaryDstEntryConnLimitExceed = undefined;
      this._secondaryDstEntryConnRateExceed = undefined;
      this._secondaryDstEntryFragPktRateExceed = undefined;
      this._secondaryDstEntryKbitRateExceed = undefined;
      this._secondaryDstEntryPktRateExceed = undefined;
      this._secondaryEntryAged = undefined;
      this._secondaryEntryHit = undefined;
      this._secondaryEntryLearn = undefined;
      this._secondaryEntryLearningThreExceed = undefined;
      this._secondaryEntryMiss = undefined;
      this._secondaryPortAged = undefined;
      this._secondaryPortLearn = undefined;
      this._serviceMissFwdByteRcvd = undefined;
      this._serviceMissFwdPktRcvd = undefined;
      this._serviceMissRevByteRcvd = undefined;
      this._serviceMissRevPktRcvd = undefined;
      this._sflowExternalPacketsSent = undefined;
      this._sflowExternalSamplesPacked = undefined;
      this._sflowInternalPacketsSent = undefined;
      this._sflowInternalSamplesPacked = undefined;
      this._smallWindowRcv = undefined;
      this._sourceEntryIcmp = undefined;
      this._sourceEntryOther = undefined;
      this._sourceEntryTcp = undefined;
      this._sourceEntryTotal = undefined;
      this._sourceEntryUdp = undefined;
      this._srcFragDrop = undefined;
      this._srcOtherFilterActionBlacklist = undefined;
      this._srcOtherFilterActionDefaultPass = undefined;
      this._srcOtherFilterActionDrop = undefined;
      this._srcOtherFilterActionWhitelist = undefined;
      this._srcTcpActionOnAckBlacklist = undefined;
      this._srcTcpActionOnAckFail = undefined;
      this._srcTcpActionOnAckGapDrop = undefined;
      this._srcTcpActionOnAckInit = undefined;
      this._srcTcpActionOnAckReset = undefined;
      this._srcTcpActionOnAckTimeout = undefined;
      this._srcTcpActionOnSynBlacklist = undefined;
      this._srcTcpActionOnSynFail = undefined;
      this._srcTcpActionOnSynGapDrop = undefined;
      this._srcTcpActionOnSynInit = undefined;
      this._srcTcpActionOnSynReset = undefined;
      this._srcTcpActionOnSynTimeout = undefined;
      this._srcTcpConnPrateExcd = undefined;
      this._srcTcpFilterActionBlacklist = undefined;
      this._srcTcpFilterActionDefaultPass = undefined;
      this._srcTcpFilterActionDrop = undefined;
      this._srcTcpFilterActionWhitelist = undefined;
      this._srcTcpOutOfSeqExcd = undefined;
      this._srcTcpRetransmitExcd = undefined;
      this._srcTcpRstCookieFail = undefined;
      this._srcTcpSmallWindowExcd = undefined;
      this._srcTcpSynAuthFail = undefined;
      this._srcTcpSynCookieFail = undefined;
      this._srcTcpSynCookieSent = undefined;
      this._srcTcpUnauthDrop = undefined;
      this._srcTcpWellknownSportDrop = undefined;
      this._srcTcpZeroWindowExcd = undefined;
      this._srcUdpAuthTimeout = undefined;
      this._srcUdpConnPrateExcd = undefined;
      this._srcUdpFilterActionBlacklist = undefined;
      this._srcUdpFilterActionDefaultPass = undefined;
      this._srcUdpFilterActionDrop = undefined;
      this._srcUdpFilterActionWhitelist = undefined;
      this._srcUdpMaxPayload = undefined;
      this._srcUdpMinPayload = undefined;
      this._srcUdpNtpMonlistReq = undefined;
      this._srcUdpNtpMonlistResp = undefined;
      this._srcUdpRetryGapDrop = undefined;
      this._srcUdpRetryInit = undefined;
      this._srcUdpRetryPass = undefined;
      this._srcUdpWellknownSportDrop = undefined;
      this._tcpAckRcvd = undefined;
      this._tcpFinRcvd = undefined;
      this._tcpFwdRecv = undefined;
      this._tcpInvalidSyn = undefined;
      this._tcpInvalidSynack = undefined;
      this._tcpRexmitSynLimitBl = undefined;
      this._tcpRexmitSynLimitDrop = undefined;
      this._tcpRstRcvd = undefined;
      this._tcpSynAckRcvd = undefined;
      this._tcpSynCookieFail = undefined;
      this._tcpSynRcvd = undefined;
      this._tokenAuthCurrentSaltMatched = undefined;
      this._tokenAuthInvalidPackets = undefined;
      this._tokenAuthMismatchedPackets = undefined;
      this._tokenAuthPreviousSaltMatched = undefined;
      this._tokenAuthSessionCreated = undefined;
      this._tokenAuthSessionCreatedFail = undefined;
      this._udpFwdRecv = undefined;
      this._victimIpAged = undefined;
      this._victimIpLearned = undefined;
      this._zoneBlackholeInject = undefined;
      this._zoneBlackholeWithdraw = undefined;
      this._zoneFragDrop = undefined;
      this._zoneFragRcvd = undefined;
      this._zoneIcmpBytesDrop = undefined;
      this._zoneIcmpDrop = undefined;
      this._zoneIcmpFragPktRateExceed = undefined;
      this._zoneIcmpFragSrcRateDrop = undefined;
      this._zoneIcmpKibitRateDrop = undefined;
      this._zoneIcmpPktRateExceed = undefined;
      this._zoneIcmpPktRcvd = undefined;
      this._zoneIcmpPktSent = undefined;
      this._zoneIcmpSrcDrop = undefined;
      this._zoneIcmpSrcRateDrop = undefined;
      this._zoneIpProtoKbitRateExceed = undefined;
      this._zoneIpProtoPktRateExceed = undefined;
      this._zoneOtherBytesDrop = undefined;
      this._zoneOtherDrop = undefined;
      this._zoneOtherFilterActionBlacklist = undefined;
      this._zoneOtherFilterActionDefaultPass = undefined;
      this._zoneOtherFilterActionDrop = undefined;
      this._zoneOtherFilterActionWhitelist = undefined;
      this._zoneOtherFilterMatch = undefined;
      this._zoneOtherFilterNotMatch = undefined;
      this._zoneOtherFragPktRateExceed = undefined;
      this._zoneOtherFragSrcRateDrop = undefined;
      this._zoneOtherKibitRateDrop = undefined;
      this._zoneOtherPktRateExceed = undefined;
      this._zoneOtherPktRcvd = undefined;
      this._zoneOtherPktSent = undefined;
      this._zoneOtherSrcDrop = undefined;
      this._zoneOtherSrcRateDrop = undefined;
      this._zoneOutNoRoute = undefined;
      this._zonePayloadTooBig = undefined;
      this._zonePayloadTooSmall = undefined;
      this._zonePktSent = undefined;
      this._zonePortBl = undefined;
      this._zonePortConnLimitExceed = undefined;
      this._zonePortConnRateExceed = undefined;
      this._zonePortKbitRateExceed = undefined;
      this._zonePortKbitRateExceedPkt = undefined;
      this._zonePortPktRateExceed = undefined;
      this._zonePortUndefDrop = undefined;
      this._zonePortUndefHit = undefined;
      this._zoneSrcPortBl = undefined;
      this._zoneSrcPortConnLimitExceed = undefined;
      this._zoneSrcPortConnRateExceed = undefined;
      this._zoneSrcPortKbitRateExceed = undefined;
      this._zoneSrcPortPktRateExceed = undefined;
      this._zoneSrcUdpRetryTimeoutBlacklist = undefined;
      this._zoneTcpActionOnAckBlacklist = undefined;
      this._zoneTcpActionOnAckFail = undefined;
      this._zoneTcpActionOnAckGapDrop = undefined;
      this._zoneTcpActionOnAckInit = undefined;
      this._zoneTcpActionOnAckPass = undefined;
      this._zoneTcpActionOnAckReset = undefined;
      this._zoneTcpActionOnAckTimeout = undefined;
      this._zoneTcpActionOnSynBlacklist = undefined;
      this._zoneTcpActionOnSynFail = undefined;
      this._zoneTcpActionOnSynGapDrop = undefined;
      this._zoneTcpActionOnSynInit = undefined;
      this._zoneTcpActionOnSynPass = undefined;
      this._zoneTcpActionOnSynReset = undefined;
      this._zoneTcpActionOnSynTimeout = undefined;
      this._zoneTcpAnyExceed = undefined;
      this._zoneTcpAuth = undefined;
      this._zoneTcpAuthPass = undefined;
      this._zoneTcpBytesDrop = undefined;
      this._zoneTcpConnLimitExceed = undefined;
      this._zoneTcpConnPrateExcd = undefined;
      this._zoneTcpConnRateExceed = undefined;
      this._zoneTcpDrop = undefined;
      this._zoneTcpFilterActionBlacklist = undefined;
      this._zoneTcpFilterActionDefaultPass = undefined;
      this._zoneTcpFilterActionDrop = undefined;
      this._zoneTcpFilterActionWhitelist = undefined;
      this._zoneTcpFilterMatch = undefined;
      this._zoneTcpFilterNotMatch = undefined;
      this._zoneTcpFragPktRateExceed = undefined;
      this._zoneTcpFragSrcRateDrop = undefined;
      this._zoneTcpKibitRateDrop = undefined;
      this._zoneTcpOutOfSeqExcd = undefined;
      this._zoneTcpPktRateExceed = undefined;
      this._zoneTcpPktRcvd = undefined;
      this._zoneTcpPktSent = undefined;
      this._zoneTcpPortAnyExceed = undefined;
      this._zoneTcpRetransmitExcd = undefined;
      this._zoneTcpRstCookieFail = undefined;
      this._zoneTcpSessionCreated = undefined;
      this._zoneTcpSmallWindowExcd = undefined;
      this._zoneTcpSrcDrop = undefined;
      this._zoneTcpSrcRateDrop = undefined;
      this._zoneTcpSyn = undefined;
      this._zoneTcpSynDrop = undefined;
      this._zoneTcpUnauthDrop = undefined;
      this._zoneTcpWellknownSportDrop = undefined;
      this._zoneTcpZeroWindowExcd = undefined;
      this._zoneUdpAnyExceed = undefined;
      this._zoneUdpBytesDrop = undefined;
      this._zoneUdpConnLimitExceed = undefined;
      this._zoneUdpConnPrateExcd = undefined;
      this._zoneUdpConnRateExceed = undefined;
      this._zoneUdpDrop = undefined;
      this._zoneUdpFilterActionBlacklist = undefined;
      this._zoneUdpFilterActionDefaultPass = undefined;
      this._zoneUdpFilterActionDrop = undefined;
      this._zoneUdpFilterActionWhitelist = undefined;
      this._zoneUdpFilterMatch = undefined;
      this._zoneUdpFilterNotMatch = undefined;
      this._zoneUdpFragPktRateExceed = undefined;
      this._zoneUdpFragSrcRateDrop = undefined;
      this._zoneUdpKibitRateDrop = undefined;
      this._zoneUdpNtpMonlistReq = undefined;
      this._zoneUdpNtpMonlistResp = undefined;
      this._zoneUdpPktRateExceed = undefined;
      this._zoneUdpPktRcvd = undefined;
      this._zoneUdpPktSent = undefined;
      this._zoneUdpPortAnyExceed = undefined;
      this._zoneUdpRetryInit = undefined;
      this._zoneUdpRetryPass = undefined;
      this._zoneUdpSessionCreated = undefined;
      this._zoneUdpSrcDrop = undefined;
      this._zoneUdpSrcRateDrop = undefined;
      this._zoneUdpWellknownSportDrop = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsOutboundQueryMalformed = value.dnsOutboundQueryMalformed;
      this._dnsOutboundQueryRespChkBlacklisted = value.dnsOutboundQueryRespChkBlacklisted;
      this._dnsOutboundQueryRespChkFailed = value.dnsOutboundQueryRespChkFailed;
      this._dnsOutboundQueryRespChkNoRespSent = value.dnsOutboundQueryRespChkNoRespSent;
      this._dnsOutboundQueryRespChkRefusedSent = value.dnsOutboundQueryRespChkRefusedSent;
      this._dnsOutboundQueryRespChkResetSent = value.dnsOutboundQueryRespChkResetSent;
      this._dnsOutboundQueryRespSizeExceed = value.dnsOutboundQueryRespSizeExceed;
      this._dnsOutboundQuerySessTimedOut = value.dnsOutboundQuerySessTimedOut;
      this._dnsOutboundTotalQuery = value.dnsOutboundTotalQuery;
      this._dstClistOverflowPolicyAtLearning = value.dstClistOverflowPolicyAtLearning;
      this._dstDrop = value.dstDrop;
      this._dstEntryConnLimitExceed = value.dstEntryConnLimitExceed;
      this._dstEntryConnRateExceed = value.dstEntryConnRateExceed;
      this._dstEntryFragPktRateExceed = value.dstEntryFragPktRateExceed;
      this._dstEntryKbitRateExceed = value.dstEntryKbitRateExceed;
      this._dstEntryKbitRateExceedCount = value.dstEntryKbitRateExceedCount;
      this._dstEntryOutboundConnLimitExceed = value.dstEntryOutboundConnLimitExceed;
      this._dstEntryOutboundConnRateExceed = value.dstEntryOutboundConnRateExceed;
      this._dstEntryOutboundFragPktRateExceed = value.dstEntryOutboundFragPktRateExceed;
      this._dstEntryOutboundKbitRateExceed = value.dstEntryOutboundKbitRateExceed;
      this._dstEntryOutboundKbitRateExceedCount = value.dstEntryOutboundKbitRateExceedCount;
      this._dstEntryOutboundPktRateExceed = value.dstEntryOutboundPktRateExceed;
      this._dstEntryOutboundTcpSessionAged = value.dstEntryOutboundTcpSessionAged;
      this._dstEntryOutboundTcpSessionCreated = value.dstEntryOutboundTcpSessionCreated;
      this._dstEntryOutboundUdpSessionAged = value.dstEntryOutboundUdpSessionAged;
      this._dstEntryOutboundUdpSessionCreated = value.dstEntryOutboundUdpSessionCreated;
      this._dstEntryPktRateExceed = value.dstEntryPktRateExceed;
      this._dstExceedActionDrop = value.dstExceedActionDrop;
      this._dstExceedActionTunnel = value.dstExceedActionTunnel;
      this._dstIcmpAnyExceed = value.dstIcmpAnyExceed;
      this._dstIcmpBytesRcv = value.dstIcmpBytesRcv;
      this._dstIcmpBytesSent = value.dstIcmpBytesSent;
      this._dstL4IcmpBlacklistDrop = value.dstL4IcmpBlacklistDrop;
      this._dstL4OtherBlacklistDrop = value.dstL4OtherBlacklistDrop;
      this._dstL4TcpBlacklistDrop = value.dstL4TcpBlacklistDrop;
      this._dstL4UdpBlacklistDrop = value.dstL4UdpBlacklistDrop;
      this._dstOtherAnyExceed = value.dstOtherAnyExceed;
      this._dstOtherBytesRcv = value.dstOtherBytesRcv;
      this._dstOtherBytesSent = value.dstOtherBytesSent;
      this._dstSrcLearnOverflow = value.dstSrcLearnOverflow;
      this._dstTcpAuthDrop = value.dstTcpAuthDrop;
      this._dstTcpAuthResp = value.dstTcpAuthResp;
      this._dstTcpAuthRst = value.dstTcpAuthRst;
      this._dstTcpBytesRcv = value.dstTcpBytesRcv;
      this._dstTcpBytesSent = value.dstTcpBytesSent;
      this._dstTcpConnClose = value.dstTcpConnClose;
      this._dstTcpConnCloseHalfOpen = value.dstTcpConnCloseHalfOpen;
      this._dstTcpConnCloseWFin = value.dstTcpConnCloseWFin;
      this._dstTcpConnCloseWIdle = value.dstTcpConnCloseWIdle;
      this._dstTcpConnCloseWRst = value.dstTcpConnCloseWRst;
      this._dstTcpConnCreateFromAck = value.dstTcpConnCreateFromAck;
      this._dstTcpConnCreateFromSyn = value.dstTcpConnCreateFromSyn;
      this._dstTcpSessionAged = value.dstTcpSessionAged;
      this._dstUdpAuthDrop = value.dstUdpAuthDrop;
      this._dstUdpBytesRcv = value.dstUdpBytesRcv;
      this._dstUdpBytesSent = value.dstUdpBytesSent;
      this._dstUdpRetryFail = value.dstUdpRetryFail;
      this._dstUdpRetryGapDrop = value.dstUdpRetryGapDrop;
      this._dstUdpRetryTimeoutBlacklist = value.dstUdpRetryTimeoutBlacklist;
      this._dstUdpSessionAged = value.dstUdpSessionAged;
      this._eastWestInboundDropByte = value.eastWestInboundDropByte;
      this._eastWestInboundDropPkt = value.eastWestInboundDropPkt;
      this._eastWestInboundFwdByte = value.eastWestInboundFwdByte;
      this._eastWestInboundFwdPkt = value.eastWestInboundFwdPkt;
      this._eastWestInboundRcvByte = value.eastWestInboundRcvByte;
      this._eastWestInboundRcvPkt = value.eastWestInboundRcvPkt;
      this._eastWestOutboundDropByte = value.eastWestOutboundDropByte;
      this._eastWestOutboundDropPkt = value.eastWestOutboundDropPkt;
      this._eastWestOutboundFwdByte = value.eastWestOutboundFwdByte;
      this._eastWestOutboundFwdPkt = value.eastWestOutboundFwdPkt;
      this._eastWestOutboundRcvByte = value.eastWestOutboundRcvByte;
      this._eastWestOutboundRcvPkt = value.eastWestOutboundRcvPkt;
      this._egressBytes = value.egressBytes;
      this._egressPackets = value.egressPackets;
      this._entrySyncMessageReceived = value.entrySyncMessageReceived;
      this._entrySyncMessageSent = value.entrySyncMessageSent;
      this._icmpFwdRecv = value.icmpFwdRecv;
      this._inboundBytesDrop = value.inboundBytesDrop;
      this._inboundBytesSent = value.inboundBytesSent;
      this._ingressBytes = value.ingressBytes;
      this._ingressPackets = value.ingressPackets;
      this._multiPuSrcHashPu1 = value.multiPuSrcHashPu1;
      this._multiPuSrcHashPu2 = value.multiPuSrcHashPu2;
      this._outboundBytesDrop = value.outboundBytesDrop;
      this._outboundBytesSent = value.outboundBytesSent;
      this._outboundDrop = value.outboundDrop;
      this._outboundPktSent = value.outboundPktSent;
      this._portZeroFwdByteRcvd = value.portZeroFwdByteRcvd;
      this._portZeroFwdPktRcvd = value.portZeroFwdPktRcvd;
      this._portZeroRevByteRcvd = value.portZeroRevByteRcvd;
      this._portZeroRevPktRcvd = value.portZeroRevPktRcvd;
      this._progConnExceedBl = value.progConnExceedBl;
      this._progConnExceedDrop = value.progConnExceedDrop;
      this._progConnRcvdExceed = value.progConnRcvdExceed;
      this._progConnRcvdSentRatioExceed = value.progConnRcvdSentRatioExceed;
      this._progConnSamples = value.progConnSamples;
      this._progConnSamplesProcessed = value.progConnSamplesProcessed;
      this._progConnSentExceed = value.progConnSentExceed;
      this._progConnTimeExceed = value.progConnTimeExceed;
      this._progExceedBl = value.progExceedBl;
      this._progExceedDrop = value.progExceedDrop;
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
      this._progWinRcvdExceed = value.progWinRcvdExceed;
      this._progWinRcvdSentRatioExceed = value.progWinRcvdSentRatioExceed;
      this._progWinSamples = value.progWinSamples;
      this._progWinSamplesProcessed = value.progWinSamplesProcessed;
      this._progWinSentExceed = value.progWinSentExceed;
      this._secondaryDstEntryConnLimitExceed = value.secondaryDstEntryConnLimitExceed;
      this._secondaryDstEntryConnRateExceed = value.secondaryDstEntryConnRateExceed;
      this._secondaryDstEntryFragPktRateExceed = value.secondaryDstEntryFragPktRateExceed;
      this._secondaryDstEntryKbitRateExceed = value.secondaryDstEntryKbitRateExceed;
      this._secondaryDstEntryPktRateExceed = value.secondaryDstEntryPktRateExceed;
      this._secondaryEntryAged = value.secondaryEntryAged;
      this._secondaryEntryHit = value.secondaryEntryHit;
      this._secondaryEntryLearn = value.secondaryEntryLearn;
      this._secondaryEntryLearningThreExceed = value.secondaryEntryLearningThreExceed;
      this._secondaryEntryMiss = value.secondaryEntryMiss;
      this._secondaryPortAged = value.secondaryPortAged;
      this._secondaryPortLearn = value.secondaryPortLearn;
      this._serviceMissFwdByteRcvd = value.serviceMissFwdByteRcvd;
      this._serviceMissFwdPktRcvd = value.serviceMissFwdPktRcvd;
      this._serviceMissRevByteRcvd = value.serviceMissRevByteRcvd;
      this._serviceMissRevPktRcvd = value.serviceMissRevPktRcvd;
      this._sflowExternalPacketsSent = value.sflowExternalPacketsSent;
      this._sflowExternalSamplesPacked = value.sflowExternalSamplesPacked;
      this._sflowInternalPacketsSent = value.sflowInternalPacketsSent;
      this._sflowInternalSamplesPacked = value.sflowInternalSamplesPacked;
      this._smallWindowRcv = value.smallWindowRcv;
      this._sourceEntryIcmp = value.sourceEntryIcmp;
      this._sourceEntryOther = value.sourceEntryOther;
      this._sourceEntryTcp = value.sourceEntryTcp;
      this._sourceEntryTotal = value.sourceEntryTotal;
      this._sourceEntryUdp = value.sourceEntryUdp;
      this._srcFragDrop = value.srcFragDrop;
      this._srcOtherFilterActionBlacklist = value.srcOtherFilterActionBlacklist;
      this._srcOtherFilterActionDefaultPass = value.srcOtherFilterActionDefaultPass;
      this._srcOtherFilterActionDrop = value.srcOtherFilterActionDrop;
      this._srcOtherFilterActionWhitelist = value.srcOtherFilterActionWhitelist;
      this._srcTcpActionOnAckBlacklist = value.srcTcpActionOnAckBlacklist;
      this._srcTcpActionOnAckFail = value.srcTcpActionOnAckFail;
      this._srcTcpActionOnAckGapDrop = value.srcTcpActionOnAckGapDrop;
      this._srcTcpActionOnAckInit = value.srcTcpActionOnAckInit;
      this._srcTcpActionOnAckReset = value.srcTcpActionOnAckReset;
      this._srcTcpActionOnAckTimeout = value.srcTcpActionOnAckTimeout;
      this._srcTcpActionOnSynBlacklist = value.srcTcpActionOnSynBlacklist;
      this._srcTcpActionOnSynFail = value.srcTcpActionOnSynFail;
      this._srcTcpActionOnSynGapDrop = value.srcTcpActionOnSynGapDrop;
      this._srcTcpActionOnSynInit = value.srcTcpActionOnSynInit;
      this._srcTcpActionOnSynReset = value.srcTcpActionOnSynReset;
      this._srcTcpActionOnSynTimeout = value.srcTcpActionOnSynTimeout;
      this._srcTcpConnPrateExcd = value.srcTcpConnPrateExcd;
      this._srcTcpFilterActionBlacklist = value.srcTcpFilterActionBlacklist;
      this._srcTcpFilterActionDefaultPass = value.srcTcpFilterActionDefaultPass;
      this._srcTcpFilterActionDrop = value.srcTcpFilterActionDrop;
      this._srcTcpFilterActionWhitelist = value.srcTcpFilterActionWhitelist;
      this._srcTcpOutOfSeqExcd = value.srcTcpOutOfSeqExcd;
      this._srcTcpRetransmitExcd = value.srcTcpRetransmitExcd;
      this._srcTcpRstCookieFail = value.srcTcpRstCookieFail;
      this._srcTcpSmallWindowExcd = value.srcTcpSmallWindowExcd;
      this._srcTcpSynAuthFail = value.srcTcpSynAuthFail;
      this._srcTcpSynCookieFail = value.srcTcpSynCookieFail;
      this._srcTcpSynCookieSent = value.srcTcpSynCookieSent;
      this._srcTcpUnauthDrop = value.srcTcpUnauthDrop;
      this._srcTcpWellknownSportDrop = value.srcTcpWellknownSportDrop;
      this._srcTcpZeroWindowExcd = value.srcTcpZeroWindowExcd;
      this._srcUdpAuthTimeout = value.srcUdpAuthTimeout;
      this._srcUdpConnPrateExcd = value.srcUdpConnPrateExcd;
      this._srcUdpFilterActionBlacklist = value.srcUdpFilterActionBlacklist;
      this._srcUdpFilterActionDefaultPass = value.srcUdpFilterActionDefaultPass;
      this._srcUdpFilterActionDrop = value.srcUdpFilterActionDrop;
      this._srcUdpFilterActionWhitelist = value.srcUdpFilterActionWhitelist;
      this._srcUdpMaxPayload = value.srcUdpMaxPayload;
      this._srcUdpMinPayload = value.srcUdpMinPayload;
      this._srcUdpNtpMonlistReq = value.srcUdpNtpMonlistReq;
      this._srcUdpNtpMonlistResp = value.srcUdpNtpMonlistResp;
      this._srcUdpRetryGapDrop = value.srcUdpRetryGapDrop;
      this._srcUdpRetryInit = value.srcUdpRetryInit;
      this._srcUdpRetryPass = value.srcUdpRetryPass;
      this._srcUdpWellknownSportDrop = value.srcUdpWellknownSportDrop;
      this._tcpAckRcvd = value.tcpAckRcvd;
      this._tcpFinRcvd = value.tcpFinRcvd;
      this._tcpFwdRecv = value.tcpFwdRecv;
      this._tcpInvalidSyn = value.tcpInvalidSyn;
      this._tcpInvalidSynack = value.tcpInvalidSynack;
      this._tcpRexmitSynLimitBl = value.tcpRexmitSynLimitBl;
      this._tcpRexmitSynLimitDrop = value.tcpRexmitSynLimitDrop;
      this._tcpRstRcvd = value.tcpRstRcvd;
      this._tcpSynAckRcvd = value.tcpSynAckRcvd;
      this._tcpSynCookieFail = value.tcpSynCookieFail;
      this._tcpSynRcvd = value.tcpSynRcvd;
      this._tokenAuthCurrentSaltMatched = value.tokenAuthCurrentSaltMatched;
      this._tokenAuthInvalidPackets = value.tokenAuthInvalidPackets;
      this._tokenAuthMismatchedPackets = value.tokenAuthMismatchedPackets;
      this._tokenAuthPreviousSaltMatched = value.tokenAuthPreviousSaltMatched;
      this._tokenAuthSessionCreated = value.tokenAuthSessionCreated;
      this._tokenAuthSessionCreatedFail = value.tokenAuthSessionCreatedFail;
      this._udpFwdRecv = value.udpFwdRecv;
      this._victimIpAged = value.victimIpAged;
      this._victimIpLearned = value.victimIpLearned;
      this._zoneBlackholeInject = value.zoneBlackholeInject;
      this._zoneBlackholeWithdraw = value.zoneBlackholeWithdraw;
      this._zoneFragDrop = value.zoneFragDrop;
      this._zoneFragRcvd = value.zoneFragRcvd;
      this._zoneIcmpBytesDrop = value.zoneIcmpBytesDrop;
      this._zoneIcmpDrop = value.zoneIcmpDrop;
      this._zoneIcmpFragPktRateExceed = value.zoneIcmpFragPktRateExceed;
      this._zoneIcmpFragSrcRateDrop = value.zoneIcmpFragSrcRateDrop;
      this._zoneIcmpKibitRateDrop = value.zoneIcmpKibitRateDrop;
      this._zoneIcmpPktRateExceed = value.zoneIcmpPktRateExceed;
      this._zoneIcmpPktRcvd = value.zoneIcmpPktRcvd;
      this._zoneIcmpPktSent = value.zoneIcmpPktSent;
      this._zoneIcmpSrcDrop = value.zoneIcmpSrcDrop;
      this._zoneIcmpSrcRateDrop = value.zoneIcmpSrcRateDrop;
      this._zoneIpProtoKbitRateExceed = value.zoneIpProtoKbitRateExceed;
      this._zoneIpProtoPktRateExceed = value.zoneIpProtoPktRateExceed;
      this._zoneOtherBytesDrop = value.zoneOtherBytesDrop;
      this._zoneOtherDrop = value.zoneOtherDrop;
      this._zoneOtherFilterActionBlacklist = value.zoneOtherFilterActionBlacklist;
      this._zoneOtherFilterActionDefaultPass = value.zoneOtherFilterActionDefaultPass;
      this._zoneOtherFilterActionDrop = value.zoneOtherFilterActionDrop;
      this._zoneOtherFilterActionWhitelist = value.zoneOtherFilterActionWhitelist;
      this._zoneOtherFilterMatch = value.zoneOtherFilterMatch;
      this._zoneOtherFilterNotMatch = value.zoneOtherFilterNotMatch;
      this._zoneOtherFragPktRateExceed = value.zoneOtherFragPktRateExceed;
      this._zoneOtherFragSrcRateDrop = value.zoneOtherFragSrcRateDrop;
      this._zoneOtherKibitRateDrop = value.zoneOtherKibitRateDrop;
      this._zoneOtherPktRateExceed = value.zoneOtherPktRateExceed;
      this._zoneOtherPktRcvd = value.zoneOtherPktRcvd;
      this._zoneOtherPktSent = value.zoneOtherPktSent;
      this._zoneOtherSrcDrop = value.zoneOtherSrcDrop;
      this._zoneOtherSrcRateDrop = value.zoneOtherSrcRateDrop;
      this._zoneOutNoRoute = value.zoneOutNoRoute;
      this._zonePayloadTooBig = value.zonePayloadTooBig;
      this._zonePayloadTooSmall = value.zonePayloadTooSmall;
      this._zonePktSent = value.zonePktSent;
      this._zonePortBl = value.zonePortBl;
      this._zonePortConnLimitExceed = value.zonePortConnLimitExceed;
      this._zonePortConnRateExceed = value.zonePortConnRateExceed;
      this._zonePortKbitRateExceed = value.zonePortKbitRateExceed;
      this._zonePortKbitRateExceedPkt = value.zonePortKbitRateExceedPkt;
      this._zonePortPktRateExceed = value.zonePortPktRateExceed;
      this._zonePortUndefDrop = value.zonePortUndefDrop;
      this._zonePortUndefHit = value.zonePortUndefHit;
      this._zoneSrcPortBl = value.zoneSrcPortBl;
      this._zoneSrcPortConnLimitExceed = value.zoneSrcPortConnLimitExceed;
      this._zoneSrcPortConnRateExceed = value.zoneSrcPortConnRateExceed;
      this._zoneSrcPortKbitRateExceed = value.zoneSrcPortKbitRateExceed;
      this._zoneSrcPortPktRateExceed = value.zoneSrcPortPktRateExceed;
      this._zoneSrcUdpRetryTimeoutBlacklist = value.zoneSrcUdpRetryTimeoutBlacklist;
      this._zoneTcpActionOnAckBlacklist = value.zoneTcpActionOnAckBlacklist;
      this._zoneTcpActionOnAckFail = value.zoneTcpActionOnAckFail;
      this._zoneTcpActionOnAckGapDrop = value.zoneTcpActionOnAckGapDrop;
      this._zoneTcpActionOnAckInit = value.zoneTcpActionOnAckInit;
      this._zoneTcpActionOnAckPass = value.zoneTcpActionOnAckPass;
      this._zoneTcpActionOnAckReset = value.zoneTcpActionOnAckReset;
      this._zoneTcpActionOnAckTimeout = value.zoneTcpActionOnAckTimeout;
      this._zoneTcpActionOnSynBlacklist = value.zoneTcpActionOnSynBlacklist;
      this._zoneTcpActionOnSynFail = value.zoneTcpActionOnSynFail;
      this._zoneTcpActionOnSynGapDrop = value.zoneTcpActionOnSynGapDrop;
      this._zoneTcpActionOnSynInit = value.zoneTcpActionOnSynInit;
      this._zoneTcpActionOnSynPass = value.zoneTcpActionOnSynPass;
      this._zoneTcpActionOnSynReset = value.zoneTcpActionOnSynReset;
      this._zoneTcpActionOnSynTimeout = value.zoneTcpActionOnSynTimeout;
      this._zoneTcpAnyExceed = value.zoneTcpAnyExceed;
      this._zoneTcpAuth = value.zoneTcpAuth;
      this._zoneTcpAuthPass = value.zoneTcpAuthPass;
      this._zoneTcpBytesDrop = value.zoneTcpBytesDrop;
      this._zoneTcpConnLimitExceed = value.zoneTcpConnLimitExceed;
      this._zoneTcpConnPrateExcd = value.zoneTcpConnPrateExcd;
      this._zoneTcpConnRateExceed = value.zoneTcpConnRateExceed;
      this._zoneTcpDrop = value.zoneTcpDrop;
      this._zoneTcpFilterActionBlacklist = value.zoneTcpFilterActionBlacklist;
      this._zoneTcpFilterActionDefaultPass = value.zoneTcpFilterActionDefaultPass;
      this._zoneTcpFilterActionDrop = value.zoneTcpFilterActionDrop;
      this._zoneTcpFilterActionWhitelist = value.zoneTcpFilterActionWhitelist;
      this._zoneTcpFilterMatch = value.zoneTcpFilterMatch;
      this._zoneTcpFilterNotMatch = value.zoneTcpFilterNotMatch;
      this._zoneTcpFragPktRateExceed = value.zoneTcpFragPktRateExceed;
      this._zoneTcpFragSrcRateDrop = value.zoneTcpFragSrcRateDrop;
      this._zoneTcpKibitRateDrop = value.zoneTcpKibitRateDrop;
      this._zoneTcpOutOfSeqExcd = value.zoneTcpOutOfSeqExcd;
      this._zoneTcpPktRateExceed = value.zoneTcpPktRateExceed;
      this._zoneTcpPktRcvd = value.zoneTcpPktRcvd;
      this._zoneTcpPktSent = value.zoneTcpPktSent;
      this._zoneTcpPortAnyExceed = value.zoneTcpPortAnyExceed;
      this._zoneTcpRetransmitExcd = value.zoneTcpRetransmitExcd;
      this._zoneTcpRstCookieFail = value.zoneTcpRstCookieFail;
      this._zoneTcpSessionCreated = value.zoneTcpSessionCreated;
      this._zoneTcpSmallWindowExcd = value.zoneTcpSmallWindowExcd;
      this._zoneTcpSrcDrop = value.zoneTcpSrcDrop;
      this._zoneTcpSrcRateDrop = value.zoneTcpSrcRateDrop;
      this._zoneTcpSyn = value.zoneTcpSyn;
      this._zoneTcpSynDrop = value.zoneTcpSynDrop;
      this._zoneTcpUnauthDrop = value.zoneTcpUnauthDrop;
      this._zoneTcpWellknownSportDrop = value.zoneTcpWellknownSportDrop;
      this._zoneTcpZeroWindowExcd = value.zoneTcpZeroWindowExcd;
      this._zoneUdpAnyExceed = value.zoneUdpAnyExceed;
      this._zoneUdpBytesDrop = value.zoneUdpBytesDrop;
      this._zoneUdpConnLimitExceed = value.zoneUdpConnLimitExceed;
      this._zoneUdpConnPrateExcd = value.zoneUdpConnPrateExcd;
      this._zoneUdpConnRateExceed = value.zoneUdpConnRateExceed;
      this._zoneUdpDrop = value.zoneUdpDrop;
      this._zoneUdpFilterActionBlacklist = value.zoneUdpFilterActionBlacklist;
      this._zoneUdpFilterActionDefaultPass = value.zoneUdpFilterActionDefaultPass;
      this._zoneUdpFilterActionDrop = value.zoneUdpFilterActionDrop;
      this._zoneUdpFilterActionWhitelist = value.zoneUdpFilterActionWhitelist;
      this._zoneUdpFilterMatch = value.zoneUdpFilterMatch;
      this._zoneUdpFilterNotMatch = value.zoneUdpFilterNotMatch;
      this._zoneUdpFragPktRateExceed = value.zoneUdpFragPktRateExceed;
      this._zoneUdpFragSrcRateDrop = value.zoneUdpFragSrcRateDrop;
      this._zoneUdpKibitRateDrop = value.zoneUdpKibitRateDrop;
      this._zoneUdpNtpMonlistReq = value.zoneUdpNtpMonlistReq;
      this._zoneUdpNtpMonlistResp = value.zoneUdpNtpMonlistResp;
      this._zoneUdpPktRateExceed = value.zoneUdpPktRateExceed;
      this._zoneUdpPktRcvd = value.zoneUdpPktRcvd;
      this._zoneUdpPktSent = value.zoneUdpPktSent;
      this._zoneUdpPortAnyExceed = value.zoneUdpPortAnyExceed;
      this._zoneUdpRetryInit = value.zoneUdpRetryInit;
      this._zoneUdpRetryPass = value.zoneUdpRetryPass;
      this._zoneUdpSessionCreated = value.zoneUdpSessionCreated;
      this._zoneUdpSrcDrop = value.zoneUdpSrcDrop;
      this._zoneUdpSrcRateDrop = value.zoneUdpSrcRateDrop;
      this._zoneUdpWellknownSportDrop = value.zoneUdpWellknownSportDrop;
    }
  }

  // dns_outbound_query_malformed - computed: false, optional: true, required: false
  private _dnsOutboundQueryMalformed?: number; 
  public get dnsOutboundQueryMalformed() {
    return this.getNumberAttribute('dns_outbound_query_malformed');
  }
  public set dnsOutboundQueryMalformed(value: number) {
    this._dnsOutboundQueryMalformed = value;
  }
  public resetDnsOutboundQueryMalformed() {
    this._dnsOutboundQueryMalformed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsOutboundQueryMalformedInput() {
    return this._dnsOutboundQueryMalformed;
  }

  // dns_outbound_query_resp_chk_blacklisted - computed: false, optional: true, required: false
  private _dnsOutboundQueryRespChkBlacklisted?: number; 
  public get dnsOutboundQueryRespChkBlacklisted() {
    return this.getNumberAttribute('dns_outbound_query_resp_chk_blacklisted');
  }
  public set dnsOutboundQueryRespChkBlacklisted(value: number) {
    this._dnsOutboundQueryRespChkBlacklisted = value;
  }
  public resetDnsOutboundQueryRespChkBlacklisted() {
    this._dnsOutboundQueryRespChkBlacklisted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsOutboundQueryRespChkBlacklistedInput() {
    return this._dnsOutboundQueryRespChkBlacklisted;
  }

  // dns_outbound_query_resp_chk_failed - computed: false, optional: true, required: false
  private _dnsOutboundQueryRespChkFailed?: number; 
  public get dnsOutboundQueryRespChkFailed() {
    return this.getNumberAttribute('dns_outbound_query_resp_chk_failed');
  }
  public set dnsOutboundQueryRespChkFailed(value: number) {
    this._dnsOutboundQueryRespChkFailed = value;
  }
  public resetDnsOutboundQueryRespChkFailed() {
    this._dnsOutboundQueryRespChkFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsOutboundQueryRespChkFailedInput() {
    return this._dnsOutboundQueryRespChkFailed;
  }

  // dns_outbound_query_resp_chk_no_resp_sent - computed: false, optional: true, required: false
  private _dnsOutboundQueryRespChkNoRespSent?: number; 
  public get dnsOutboundQueryRespChkNoRespSent() {
    return this.getNumberAttribute('dns_outbound_query_resp_chk_no_resp_sent');
  }
  public set dnsOutboundQueryRespChkNoRespSent(value: number) {
    this._dnsOutboundQueryRespChkNoRespSent = value;
  }
  public resetDnsOutboundQueryRespChkNoRespSent() {
    this._dnsOutboundQueryRespChkNoRespSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsOutboundQueryRespChkNoRespSentInput() {
    return this._dnsOutboundQueryRespChkNoRespSent;
  }

  // dns_outbound_query_resp_chk_refused_sent - computed: false, optional: true, required: false
  private _dnsOutboundQueryRespChkRefusedSent?: number; 
  public get dnsOutboundQueryRespChkRefusedSent() {
    return this.getNumberAttribute('dns_outbound_query_resp_chk_refused_sent');
  }
  public set dnsOutboundQueryRespChkRefusedSent(value: number) {
    this._dnsOutboundQueryRespChkRefusedSent = value;
  }
  public resetDnsOutboundQueryRespChkRefusedSent() {
    this._dnsOutboundQueryRespChkRefusedSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsOutboundQueryRespChkRefusedSentInput() {
    return this._dnsOutboundQueryRespChkRefusedSent;
  }

  // dns_outbound_query_resp_chk_reset_sent - computed: false, optional: true, required: false
  private _dnsOutboundQueryRespChkResetSent?: number; 
  public get dnsOutboundQueryRespChkResetSent() {
    return this.getNumberAttribute('dns_outbound_query_resp_chk_reset_sent');
  }
  public set dnsOutboundQueryRespChkResetSent(value: number) {
    this._dnsOutboundQueryRespChkResetSent = value;
  }
  public resetDnsOutboundQueryRespChkResetSent() {
    this._dnsOutboundQueryRespChkResetSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsOutboundQueryRespChkResetSentInput() {
    return this._dnsOutboundQueryRespChkResetSent;
  }

  // dns_outbound_query_resp_size_exceed - computed: false, optional: true, required: false
  private _dnsOutboundQueryRespSizeExceed?: number; 
  public get dnsOutboundQueryRespSizeExceed() {
    return this.getNumberAttribute('dns_outbound_query_resp_size_exceed');
  }
  public set dnsOutboundQueryRespSizeExceed(value: number) {
    this._dnsOutboundQueryRespSizeExceed = value;
  }
  public resetDnsOutboundQueryRespSizeExceed() {
    this._dnsOutboundQueryRespSizeExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsOutboundQueryRespSizeExceedInput() {
    return this._dnsOutboundQueryRespSizeExceed;
  }

  // dns_outbound_query_sess_timed_out - computed: false, optional: true, required: false
  private _dnsOutboundQuerySessTimedOut?: number; 
  public get dnsOutboundQuerySessTimedOut() {
    return this.getNumberAttribute('dns_outbound_query_sess_timed_out');
  }
  public set dnsOutboundQuerySessTimedOut(value: number) {
    this._dnsOutboundQuerySessTimedOut = value;
  }
  public resetDnsOutboundQuerySessTimedOut() {
    this._dnsOutboundQuerySessTimedOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsOutboundQuerySessTimedOutInput() {
    return this._dnsOutboundQuerySessTimedOut;
  }

  // dns_outbound_total_query - computed: false, optional: true, required: false
  private _dnsOutboundTotalQuery?: number; 
  public get dnsOutboundTotalQuery() {
    return this.getNumberAttribute('dns_outbound_total_query');
  }
  public set dnsOutboundTotalQuery(value: number) {
    this._dnsOutboundTotalQuery = value;
  }
  public resetDnsOutboundTotalQuery() {
    this._dnsOutboundTotalQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsOutboundTotalQueryInput() {
    return this._dnsOutboundTotalQuery;
  }

  // dst_clist_overflow_policy_at_learning - computed: false, optional: true, required: false
  private _dstClistOverflowPolicyAtLearning?: number; 
  public get dstClistOverflowPolicyAtLearning() {
    return this.getNumberAttribute('dst_clist_overflow_policy_at_learning');
  }
  public set dstClistOverflowPolicyAtLearning(value: number) {
    this._dstClistOverflowPolicyAtLearning = value;
  }
  public resetDstClistOverflowPolicyAtLearning() {
    this._dstClistOverflowPolicyAtLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstClistOverflowPolicyAtLearningInput() {
    return this._dstClistOverflowPolicyAtLearning;
  }

  // dst_drop - computed: false, optional: true, required: false
  private _dstDrop?: number; 
  public get dstDrop() {
    return this.getNumberAttribute('dst_drop');
  }
  public set dstDrop(value: number) {
    this._dstDrop = value;
  }
  public resetDstDrop() {
    this._dstDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstDropInput() {
    return this._dstDrop;
  }

  // dst_entry_conn_limit_exceed - computed: false, optional: true, required: false
  private _dstEntryConnLimitExceed?: number; 
  public get dstEntryConnLimitExceed() {
    return this.getNumberAttribute('dst_entry_conn_limit_exceed');
  }
  public set dstEntryConnLimitExceed(value: number) {
    this._dstEntryConnLimitExceed = value;
  }
  public resetDstEntryConnLimitExceed() {
    this._dstEntryConnLimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryConnLimitExceedInput() {
    return this._dstEntryConnLimitExceed;
  }

  // dst_entry_conn_rate_exceed - computed: false, optional: true, required: false
  private _dstEntryConnRateExceed?: number; 
  public get dstEntryConnRateExceed() {
    return this.getNumberAttribute('dst_entry_conn_rate_exceed');
  }
  public set dstEntryConnRateExceed(value: number) {
    this._dstEntryConnRateExceed = value;
  }
  public resetDstEntryConnRateExceed() {
    this._dstEntryConnRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryConnRateExceedInput() {
    return this._dstEntryConnRateExceed;
  }

  // dst_entry_frag_pkt_rate_exceed - computed: false, optional: true, required: false
  private _dstEntryFragPktRateExceed?: number; 
  public get dstEntryFragPktRateExceed() {
    return this.getNumberAttribute('dst_entry_frag_pkt_rate_exceed');
  }
  public set dstEntryFragPktRateExceed(value: number) {
    this._dstEntryFragPktRateExceed = value;
  }
  public resetDstEntryFragPktRateExceed() {
    this._dstEntryFragPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryFragPktRateExceedInput() {
    return this._dstEntryFragPktRateExceed;
  }

  // dst_entry_kbit_rate_exceed - computed: false, optional: true, required: false
  private _dstEntryKbitRateExceed?: number; 
  public get dstEntryKbitRateExceed() {
    return this.getNumberAttribute('dst_entry_kbit_rate_exceed');
  }
  public set dstEntryKbitRateExceed(value: number) {
    this._dstEntryKbitRateExceed = value;
  }
  public resetDstEntryKbitRateExceed() {
    this._dstEntryKbitRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryKbitRateExceedInput() {
    return this._dstEntryKbitRateExceed;
  }

  // dst_entry_kbit_rate_exceed_count - computed: false, optional: true, required: false
  private _dstEntryKbitRateExceedCount?: number; 
  public get dstEntryKbitRateExceedCount() {
    return this.getNumberAttribute('dst_entry_kbit_rate_exceed_count');
  }
  public set dstEntryKbitRateExceedCount(value: number) {
    this._dstEntryKbitRateExceedCount = value;
  }
  public resetDstEntryKbitRateExceedCount() {
    this._dstEntryKbitRateExceedCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryKbitRateExceedCountInput() {
    return this._dstEntryKbitRateExceedCount;
  }

  // dst_entry_outbound_conn_limit_exceed - computed: false, optional: true, required: false
  private _dstEntryOutboundConnLimitExceed?: number; 
  public get dstEntryOutboundConnLimitExceed() {
    return this.getNumberAttribute('dst_entry_outbound_conn_limit_exceed');
  }
  public set dstEntryOutboundConnLimitExceed(value: number) {
    this._dstEntryOutboundConnLimitExceed = value;
  }
  public resetDstEntryOutboundConnLimitExceed() {
    this._dstEntryOutboundConnLimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryOutboundConnLimitExceedInput() {
    return this._dstEntryOutboundConnLimitExceed;
  }

  // dst_entry_outbound_conn_rate_exceed - computed: false, optional: true, required: false
  private _dstEntryOutboundConnRateExceed?: number; 
  public get dstEntryOutboundConnRateExceed() {
    return this.getNumberAttribute('dst_entry_outbound_conn_rate_exceed');
  }
  public set dstEntryOutboundConnRateExceed(value: number) {
    this._dstEntryOutboundConnRateExceed = value;
  }
  public resetDstEntryOutboundConnRateExceed() {
    this._dstEntryOutboundConnRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryOutboundConnRateExceedInput() {
    return this._dstEntryOutboundConnRateExceed;
  }

  // dst_entry_outbound_frag_pkt_rate_exceed - computed: false, optional: true, required: false
  private _dstEntryOutboundFragPktRateExceed?: number; 
  public get dstEntryOutboundFragPktRateExceed() {
    return this.getNumberAttribute('dst_entry_outbound_frag_pkt_rate_exceed');
  }
  public set dstEntryOutboundFragPktRateExceed(value: number) {
    this._dstEntryOutboundFragPktRateExceed = value;
  }
  public resetDstEntryOutboundFragPktRateExceed() {
    this._dstEntryOutboundFragPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryOutboundFragPktRateExceedInput() {
    return this._dstEntryOutboundFragPktRateExceed;
  }

  // dst_entry_outbound_kbit_rate_exceed - computed: false, optional: true, required: false
  private _dstEntryOutboundKbitRateExceed?: number; 
  public get dstEntryOutboundKbitRateExceed() {
    return this.getNumberAttribute('dst_entry_outbound_kbit_rate_exceed');
  }
  public set dstEntryOutboundKbitRateExceed(value: number) {
    this._dstEntryOutboundKbitRateExceed = value;
  }
  public resetDstEntryOutboundKbitRateExceed() {
    this._dstEntryOutboundKbitRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryOutboundKbitRateExceedInput() {
    return this._dstEntryOutboundKbitRateExceed;
  }

  // dst_entry_outbound_kbit_rate_exceed_count - computed: false, optional: true, required: false
  private _dstEntryOutboundKbitRateExceedCount?: number; 
  public get dstEntryOutboundKbitRateExceedCount() {
    return this.getNumberAttribute('dst_entry_outbound_kbit_rate_exceed_count');
  }
  public set dstEntryOutboundKbitRateExceedCount(value: number) {
    this._dstEntryOutboundKbitRateExceedCount = value;
  }
  public resetDstEntryOutboundKbitRateExceedCount() {
    this._dstEntryOutboundKbitRateExceedCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryOutboundKbitRateExceedCountInput() {
    return this._dstEntryOutboundKbitRateExceedCount;
  }

  // dst_entry_outbound_pkt_rate_exceed - computed: false, optional: true, required: false
  private _dstEntryOutboundPktRateExceed?: number; 
  public get dstEntryOutboundPktRateExceed() {
    return this.getNumberAttribute('dst_entry_outbound_pkt_rate_exceed');
  }
  public set dstEntryOutboundPktRateExceed(value: number) {
    this._dstEntryOutboundPktRateExceed = value;
  }
  public resetDstEntryOutboundPktRateExceed() {
    this._dstEntryOutboundPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryOutboundPktRateExceedInput() {
    return this._dstEntryOutboundPktRateExceed;
  }

  // dst_entry_outbound_tcp_session_aged - computed: false, optional: true, required: false
  private _dstEntryOutboundTcpSessionAged?: number; 
  public get dstEntryOutboundTcpSessionAged() {
    return this.getNumberAttribute('dst_entry_outbound_tcp_session_aged');
  }
  public set dstEntryOutboundTcpSessionAged(value: number) {
    this._dstEntryOutboundTcpSessionAged = value;
  }
  public resetDstEntryOutboundTcpSessionAged() {
    this._dstEntryOutboundTcpSessionAged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryOutboundTcpSessionAgedInput() {
    return this._dstEntryOutboundTcpSessionAged;
  }

  // dst_entry_outbound_tcp_session_created - computed: false, optional: true, required: false
  private _dstEntryOutboundTcpSessionCreated?: number; 
  public get dstEntryOutboundTcpSessionCreated() {
    return this.getNumberAttribute('dst_entry_outbound_tcp_session_created');
  }
  public set dstEntryOutboundTcpSessionCreated(value: number) {
    this._dstEntryOutboundTcpSessionCreated = value;
  }
  public resetDstEntryOutboundTcpSessionCreated() {
    this._dstEntryOutboundTcpSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryOutboundTcpSessionCreatedInput() {
    return this._dstEntryOutboundTcpSessionCreated;
  }

  // dst_entry_outbound_udp_session_aged - computed: false, optional: true, required: false
  private _dstEntryOutboundUdpSessionAged?: number; 
  public get dstEntryOutboundUdpSessionAged() {
    return this.getNumberAttribute('dst_entry_outbound_udp_session_aged');
  }
  public set dstEntryOutboundUdpSessionAged(value: number) {
    this._dstEntryOutboundUdpSessionAged = value;
  }
  public resetDstEntryOutboundUdpSessionAged() {
    this._dstEntryOutboundUdpSessionAged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryOutboundUdpSessionAgedInput() {
    return this._dstEntryOutboundUdpSessionAged;
  }

  // dst_entry_outbound_udp_session_created - computed: false, optional: true, required: false
  private _dstEntryOutboundUdpSessionCreated?: number; 
  public get dstEntryOutboundUdpSessionCreated() {
    return this.getNumberAttribute('dst_entry_outbound_udp_session_created');
  }
  public set dstEntryOutboundUdpSessionCreated(value: number) {
    this._dstEntryOutboundUdpSessionCreated = value;
  }
  public resetDstEntryOutboundUdpSessionCreated() {
    this._dstEntryOutboundUdpSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryOutboundUdpSessionCreatedInput() {
    return this._dstEntryOutboundUdpSessionCreated;
  }

  // dst_entry_pkt_rate_exceed - computed: false, optional: true, required: false
  private _dstEntryPktRateExceed?: number; 
  public get dstEntryPktRateExceed() {
    return this.getNumberAttribute('dst_entry_pkt_rate_exceed');
  }
  public set dstEntryPktRateExceed(value: number) {
    this._dstEntryPktRateExceed = value;
  }
  public resetDstEntryPktRateExceed() {
    this._dstEntryPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryPktRateExceedInput() {
    return this._dstEntryPktRateExceed;
  }

  // dst_exceed_action_drop - computed: false, optional: true, required: false
  private _dstExceedActionDrop?: number; 
  public get dstExceedActionDrop() {
    return this.getNumberAttribute('dst_exceed_action_drop');
  }
  public set dstExceedActionDrop(value: number) {
    this._dstExceedActionDrop = value;
  }
  public resetDstExceedActionDrop() {
    this._dstExceedActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstExceedActionDropInput() {
    return this._dstExceedActionDrop;
  }

  // dst_exceed_action_tunnel - computed: false, optional: true, required: false
  private _dstExceedActionTunnel?: number; 
  public get dstExceedActionTunnel() {
    return this.getNumberAttribute('dst_exceed_action_tunnel');
  }
  public set dstExceedActionTunnel(value: number) {
    this._dstExceedActionTunnel = value;
  }
  public resetDstExceedActionTunnel() {
    this._dstExceedActionTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstExceedActionTunnelInput() {
    return this._dstExceedActionTunnel;
  }

  // dst_icmp_any_exceed - computed: false, optional: true, required: false
  private _dstIcmpAnyExceed?: number; 
  public get dstIcmpAnyExceed() {
    return this.getNumberAttribute('dst_icmp_any_exceed');
  }
  public set dstIcmpAnyExceed(value: number) {
    this._dstIcmpAnyExceed = value;
  }
  public resetDstIcmpAnyExceed() {
    this._dstIcmpAnyExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIcmpAnyExceedInput() {
    return this._dstIcmpAnyExceed;
  }

  // dst_icmp_bytes_rcv - computed: false, optional: true, required: false
  private _dstIcmpBytesRcv?: number; 
  public get dstIcmpBytesRcv() {
    return this.getNumberAttribute('dst_icmp_bytes_rcv');
  }
  public set dstIcmpBytesRcv(value: number) {
    this._dstIcmpBytesRcv = value;
  }
  public resetDstIcmpBytesRcv() {
    this._dstIcmpBytesRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIcmpBytesRcvInput() {
    return this._dstIcmpBytesRcv;
  }

  // dst_icmp_bytes_sent - computed: false, optional: true, required: false
  private _dstIcmpBytesSent?: number; 
  public get dstIcmpBytesSent() {
    return this.getNumberAttribute('dst_icmp_bytes_sent');
  }
  public set dstIcmpBytesSent(value: number) {
    this._dstIcmpBytesSent = value;
  }
  public resetDstIcmpBytesSent() {
    this._dstIcmpBytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIcmpBytesSentInput() {
    return this._dstIcmpBytesSent;
  }

  // dst_l4_icmp_blacklist_drop - computed: false, optional: true, required: false
  private _dstL4IcmpBlacklistDrop?: number; 
  public get dstL4IcmpBlacklistDrop() {
    return this.getNumberAttribute('dst_l4_icmp_blacklist_drop');
  }
  public set dstL4IcmpBlacklistDrop(value: number) {
    this._dstL4IcmpBlacklistDrop = value;
  }
  public resetDstL4IcmpBlacklistDrop() {
    this._dstL4IcmpBlacklistDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstL4IcmpBlacklistDropInput() {
    return this._dstL4IcmpBlacklistDrop;
  }

  // dst_l4_other_blacklist_drop - computed: false, optional: true, required: false
  private _dstL4OtherBlacklistDrop?: number; 
  public get dstL4OtherBlacklistDrop() {
    return this.getNumberAttribute('dst_l4_other_blacklist_drop');
  }
  public set dstL4OtherBlacklistDrop(value: number) {
    this._dstL4OtherBlacklistDrop = value;
  }
  public resetDstL4OtherBlacklistDrop() {
    this._dstL4OtherBlacklistDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstL4OtherBlacklistDropInput() {
    return this._dstL4OtherBlacklistDrop;
  }

  // dst_l4_tcp_blacklist_drop - computed: false, optional: true, required: false
  private _dstL4TcpBlacklistDrop?: number; 
  public get dstL4TcpBlacklistDrop() {
    return this.getNumberAttribute('dst_l4_tcp_blacklist_drop');
  }
  public set dstL4TcpBlacklistDrop(value: number) {
    this._dstL4TcpBlacklistDrop = value;
  }
  public resetDstL4TcpBlacklistDrop() {
    this._dstL4TcpBlacklistDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstL4TcpBlacklistDropInput() {
    return this._dstL4TcpBlacklistDrop;
  }

  // dst_l4_udp_blacklist_drop - computed: false, optional: true, required: false
  private _dstL4UdpBlacklistDrop?: number; 
  public get dstL4UdpBlacklistDrop() {
    return this.getNumberAttribute('dst_l4_udp_blacklist_drop');
  }
  public set dstL4UdpBlacklistDrop(value: number) {
    this._dstL4UdpBlacklistDrop = value;
  }
  public resetDstL4UdpBlacklistDrop() {
    this._dstL4UdpBlacklistDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstL4UdpBlacklistDropInput() {
    return this._dstL4UdpBlacklistDrop;
  }

  // dst_other_any_exceed - computed: false, optional: true, required: false
  private _dstOtherAnyExceed?: number; 
  public get dstOtherAnyExceed() {
    return this.getNumberAttribute('dst_other_any_exceed');
  }
  public set dstOtherAnyExceed(value: number) {
    this._dstOtherAnyExceed = value;
  }
  public resetDstOtherAnyExceed() {
    this._dstOtherAnyExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstOtherAnyExceedInput() {
    return this._dstOtherAnyExceed;
  }

  // dst_other_bytes_rcv - computed: false, optional: true, required: false
  private _dstOtherBytesRcv?: number; 
  public get dstOtherBytesRcv() {
    return this.getNumberAttribute('dst_other_bytes_rcv');
  }
  public set dstOtherBytesRcv(value: number) {
    this._dstOtherBytesRcv = value;
  }
  public resetDstOtherBytesRcv() {
    this._dstOtherBytesRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstOtherBytesRcvInput() {
    return this._dstOtherBytesRcv;
  }

  // dst_other_bytes_sent - computed: false, optional: true, required: false
  private _dstOtherBytesSent?: number; 
  public get dstOtherBytesSent() {
    return this.getNumberAttribute('dst_other_bytes_sent');
  }
  public set dstOtherBytesSent(value: number) {
    this._dstOtherBytesSent = value;
  }
  public resetDstOtherBytesSent() {
    this._dstOtherBytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstOtherBytesSentInput() {
    return this._dstOtherBytesSent;
  }

  // dst_src_learn_overflow - computed: false, optional: true, required: false
  private _dstSrcLearnOverflow?: number; 
  public get dstSrcLearnOverflow() {
    return this.getNumberAttribute('dst_src_learn_overflow');
  }
  public set dstSrcLearnOverflow(value: number) {
    this._dstSrcLearnOverflow = value;
  }
  public resetDstSrcLearnOverflow() {
    this._dstSrcLearnOverflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSrcLearnOverflowInput() {
    return this._dstSrcLearnOverflow;
  }

  // dst_tcp_auth_drop - computed: false, optional: true, required: false
  private _dstTcpAuthDrop?: number; 
  public get dstTcpAuthDrop() {
    return this.getNumberAttribute('dst_tcp_auth_drop');
  }
  public set dstTcpAuthDrop(value: number) {
    this._dstTcpAuthDrop = value;
  }
  public resetDstTcpAuthDrop() {
    this._dstTcpAuthDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpAuthDropInput() {
    return this._dstTcpAuthDrop;
  }

  // dst_tcp_auth_resp - computed: false, optional: true, required: false
  private _dstTcpAuthResp?: number; 
  public get dstTcpAuthResp() {
    return this.getNumberAttribute('dst_tcp_auth_resp');
  }
  public set dstTcpAuthResp(value: number) {
    this._dstTcpAuthResp = value;
  }
  public resetDstTcpAuthResp() {
    this._dstTcpAuthResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpAuthRespInput() {
    return this._dstTcpAuthResp;
  }

  // dst_tcp_auth_rst - computed: false, optional: true, required: false
  private _dstTcpAuthRst?: number; 
  public get dstTcpAuthRst() {
    return this.getNumberAttribute('dst_tcp_auth_rst');
  }
  public set dstTcpAuthRst(value: number) {
    this._dstTcpAuthRst = value;
  }
  public resetDstTcpAuthRst() {
    this._dstTcpAuthRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpAuthRstInput() {
    return this._dstTcpAuthRst;
  }

  // dst_tcp_bytes_rcv - computed: false, optional: true, required: false
  private _dstTcpBytesRcv?: number; 
  public get dstTcpBytesRcv() {
    return this.getNumberAttribute('dst_tcp_bytes_rcv');
  }
  public set dstTcpBytesRcv(value: number) {
    this._dstTcpBytesRcv = value;
  }
  public resetDstTcpBytesRcv() {
    this._dstTcpBytesRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpBytesRcvInput() {
    return this._dstTcpBytesRcv;
  }

  // dst_tcp_bytes_sent - computed: false, optional: true, required: false
  private _dstTcpBytesSent?: number; 
  public get dstTcpBytesSent() {
    return this.getNumberAttribute('dst_tcp_bytes_sent');
  }
  public set dstTcpBytesSent(value: number) {
    this._dstTcpBytesSent = value;
  }
  public resetDstTcpBytesSent() {
    this._dstTcpBytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpBytesSentInput() {
    return this._dstTcpBytesSent;
  }

  // dst_tcp_conn_close - computed: false, optional: true, required: false
  private _dstTcpConnClose?: number; 
  public get dstTcpConnClose() {
    return this.getNumberAttribute('dst_tcp_conn_close');
  }
  public set dstTcpConnClose(value: number) {
    this._dstTcpConnClose = value;
  }
  public resetDstTcpConnClose() {
    this._dstTcpConnClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpConnCloseInput() {
    return this._dstTcpConnClose;
  }

  // dst_tcp_conn_close_half_open - computed: false, optional: true, required: false
  private _dstTcpConnCloseHalfOpen?: number; 
  public get dstTcpConnCloseHalfOpen() {
    return this.getNumberAttribute('dst_tcp_conn_close_half_open');
  }
  public set dstTcpConnCloseHalfOpen(value: number) {
    this._dstTcpConnCloseHalfOpen = value;
  }
  public resetDstTcpConnCloseHalfOpen() {
    this._dstTcpConnCloseHalfOpen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpConnCloseHalfOpenInput() {
    return this._dstTcpConnCloseHalfOpen;
  }

  // dst_tcp_conn_close_w_fin - computed: false, optional: true, required: false
  private _dstTcpConnCloseWFin?: number; 
  public get dstTcpConnCloseWFin() {
    return this.getNumberAttribute('dst_tcp_conn_close_w_fin');
  }
  public set dstTcpConnCloseWFin(value: number) {
    this._dstTcpConnCloseWFin = value;
  }
  public resetDstTcpConnCloseWFin() {
    this._dstTcpConnCloseWFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpConnCloseWFinInput() {
    return this._dstTcpConnCloseWFin;
  }

  // dst_tcp_conn_close_w_idle - computed: false, optional: true, required: false
  private _dstTcpConnCloseWIdle?: number; 
  public get dstTcpConnCloseWIdle() {
    return this.getNumberAttribute('dst_tcp_conn_close_w_idle');
  }
  public set dstTcpConnCloseWIdle(value: number) {
    this._dstTcpConnCloseWIdle = value;
  }
  public resetDstTcpConnCloseWIdle() {
    this._dstTcpConnCloseWIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpConnCloseWIdleInput() {
    return this._dstTcpConnCloseWIdle;
  }

  // dst_tcp_conn_close_w_rst - computed: false, optional: true, required: false
  private _dstTcpConnCloseWRst?: number; 
  public get dstTcpConnCloseWRst() {
    return this.getNumberAttribute('dst_tcp_conn_close_w_rst');
  }
  public set dstTcpConnCloseWRst(value: number) {
    this._dstTcpConnCloseWRst = value;
  }
  public resetDstTcpConnCloseWRst() {
    this._dstTcpConnCloseWRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpConnCloseWRstInput() {
    return this._dstTcpConnCloseWRst;
  }

  // dst_tcp_conn_create_from_ack - computed: false, optional: true, required: false
  private _dstTcpConnCreateFromAck?: number; 
  public get dstTcpConnCreateFromAck() {
    return this.getNumberAttribute('dst_tcp_conn_create_from_ack');
  }
  public set dstTcpConnCreateFromAck(value: number) {
    this._dstTcpConnCreateFromAck = value;
  }
  public resetDstTcpConnCreateFromAck() {
    this._dstTcpConnCreateFromAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpConnCreateFromAckInput() {
    return this._dstTcpConnCreateFromAck;
  }

  // dst_tcp_conn_create_from_syn - computed: false, optional: true, required: false
  private _dstTcpConnCreateFromSyn?: number; 
  public get dstTcpConnCreateFromSyn() {
    return this.getNumberAttribute('dst_tcp_conn_create_from_syn');
  }
  public set dstTcpConnCreateFromSyn(value: number) {
    this._dstTcpConnCreateFromSyn = value;
  }
  public resetDstTcpConnCreateFromSyn() {
    this._dstTcpConnCreateFromSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpConnCreateFromSynInput() {
    return this._dstTcpConnCreateFromSyn;
  }

  // dst_tcp_session_aged - computed: false, optional: true, required: false
  private _dstTcpSessionAged?: number; 
  public get dstTcpSessionAged() {
    return this.getNumberAttribute('dst_tcp_session_aged');
  }
  public set dstTcpSessionAged(value: number) {
    this._dstTcpSessionAged = value;
  }
  public resetDstTcpSessionAged() {
    this._dstTcpSessionAged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpSessionAgedInput() {
    return this._dstTcpSessionAged;
  }

  // dst_udp_auth_drop - computed: false, optional: true, required: false
  private _dstUdpAuthDrop?: number; 
  public get dstUdpAuthDrop() {
    return this.getNumberAttribute('dst_udp_auth_drop');
  }
  public set dstUdpAuthDrop(value: number) {
    this._dstUdpAuthDrop = value;
  }
  public resetDstUdpAuthDrop() {
    this._dstUdpAuthDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpAuthDropInput() {
    return this._dstUdpAuthDrop;
  }

  // dst_udp_bytes_rcv - computed: false, optional: true, required: false
  private _dstUdpBytesRcv?: number; 
  public get dstUdpBytesRcv() {
    return this.getNumberAttribute('dst_udp_bytes_rcv');
  }
  public set dstUdpBytesRcv(value: number) {
    this._dstUdpBytesRcv = value;
  }
  public resetDstUdpBytesRcv() {
    this._dstUdpBytesRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpBytesRcvInput() {
    return this._dstUdpBytesRcv;
  }

  // dst_udp_bytes_sent - computed: false, optional: true, required: false
  private _dstUdpBytesSent?: number; 
  public get dstUdpBytesSent() {
    return this.getNumberAttribute('dst_udp_bytes_sent');
  }
  public set dstUdpBytesSent(value: number) {
    this._dstUdpBytesSent = value;
  }
  public resetDstUdpBytesSent() {
    this._dstUdpBytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpBytesSentInput() {
    return this._dstUdpBytesSent;
  }

  // dst_udp_retry_fail - computed: false, optional: true, required: false
  private _dstUdpRetryFail?: number; 
  public get dstUdpRetryFail() {
    return this.getNumberAttribute('dst_udp_retry_fail');
  }
  public set dstUdpRetryFail(value: number) {
    this._dstUdpRetryFail = value;
  }
  public resetDstUdpRetryFail() {
    this._dstUdpRetryFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpRetryFailInput() {
    return this._dstUdpRetryFail;
  }

  // dst_udp_retry_gap_drop - computed: false, optional: true, required: false
  private _dstUdpRetryGapDrop?: number; 
  public get dstUdpRetryGapDrop() {
    return this.getNumberAttribute('dst_udp_retry_gap_drop');
  }
  public set dstUdpRetryGapDrop(value: number) {
    this._dstUdpRetryGapDrop = value;
  }
  public resetDstUdpRetryGapDrop() {
    this._dstUdpRetryGapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpRetryGapDropInput() {
    return this._dstUdpRetryGapDrop;
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

  // dst_udp_session_aged - computed: false, optional: true, required: false
  private _dstUdpSessionAged?: number; 
  public get dstUdpSessionAged() {
    return this.getNumberAttribute('dst_udp_session_aged');
  }
  public set dstUdpSessionAged(value: number) {
    this._dstUdpSessionAged = value;
  }
  public resetDstUdpSessionAged() {
    this._dstUdpSessionAged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpSessionAgedInput() {
    return this._dstUdpSessionAged;
  }

  // east_west_inbound_drop_byte - computed: false, optional: true, required: false
  private _eastWestInboundDropByte?: number; 
  public get eastWestInboundDropByte() {
    return this.getNumberAttribute('east_west_inbound_drop_byte');
  }
  public set eastWestInboundDropByte(value: number) {
    this._eastWestInboundDropByte = value;
  }
  public resetEastWestInboundDropByte() {
    this._eastWestInboundDropByte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eastWestInboundDropByteInput() {
    return this._eastWestInboundDropByte;
  }

  // east_west_inbound_drop_pkt - computed: false, optional: true, required: false
  private _eastWestInboundDropPkt?: number; 
  public get eastWestInboundDropPkt() {
    return this.getNumberAttribute('east_west_inbound_drop_pkt');
  }
  public set eastWestInboundDropPkt(value: number) {
    this._eastWestInboundDropPkt = value;
  }
  public resetEastWestInboundDropPkt() {
    this._eastWestInboundDropPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eastWestInboundDropPktInput() {
    return this._eastWestInboundDropPkt;
  }

  // east_west_inbound_fwd_byte - computed: false, optional: true, required: false
  private _eastWestInboundFwdByte?: number; 
  public get eastWestInboundFwdByte() {
    return this.getNumberAttribute('east_west_inbound_fwd_byte');
  }
  public set eastWestInboundFwdByte(value: number) {
    this._eastWestInboundFwdByte = value;
  }
  public resetEastWestInboundFwdByte() {
    this._eastWestInboundFwdByte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eastWestInboundFwdByteInput() {
    return this._eastWestInboundFwdByte;
  }

  // east_west_inbound_fwd_pkt - computed: false, optional: true, required: false
  private _eastWestInboundFwdPkt?: number; 
  public get eastWestInboundFwdPkt() {
    return this.getNumberAttribute('east_west_inbound_fwd_pkt');
  }
  public set eastWestInboundFwdPkt(value: number) {
    this._eastWestInboundFwdPkt = value;
  }
  public resetEastWestInboundFwdPkt() {
    this._eastWestInboundFwdPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eastWestInboundFwdPktInput() {
    return this._eastWestInboundFwdPkt;
  }

  // east_west_inbound_rcv_byte - computed: false, optional: true, required: false
  private _eastWestInboundRcvByte?: number; 
  public get eastWestInboundRcvByte() {
    return this.getNumberAttribute('east_west_inbound_rcv_byte');
  }
  public set eastWestInboundRcvByte(value: number) {
    this._eastWestInboundRcvByte = value;
  }
  public resetEastWestInboundRcvByte() {
    this._eastWestInboundRcvByte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eastWestInboundRcvByteInput() {
    return this._eastWestInboundRcvByte;
  }

  // east_west_inbound_rcv_pkt - computed: false, optional: true, required: false
  private _eastWestInboundRcvPkt?: number; 
  public get eastWestInboundRcvPkt() {
    return this.getNumberAttribute('east_west_inbound_rcv_pkt');
  }
  public set eastWestInboundRcvPkt(value: number) {
    this._eastWestInboundRcvPkt = value;
  }
  public resetEastWestInboundRcvPkt() {
    this._eastWestInboundRcvPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eastWestInboundRcvPktInput() {
    return this._eastWestInboundRcvPkt;
  }

  // east_west_outbound_drop_byte - computed: false, optional: true, required: false
  private _eastWestOutboundDropByte?: number; 
  public get eastWestOutboundDropByte() {
    return this.getNumberAttribute('east_west_outbound_drop_byte');
  }
  public set eastWestOutboundDropByte(value: number) {
    this._eastWestOutboundDropByte = value;
  }
  public resetEastWestOutboundDropByte() {
    this._eastWestOutboundDropByte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eastWestOutboundDropByteInput() {
    return this._eastWestOutboundDropByte;
  }

  // east_west_outbound_drop_pkt - computed: false, optional: true, required: false
  private _eastWestOutboundDropPkt?: number; 
  public get eastWestOutboundDropPkt() {
    return this.getNumberAttribute('east_west_outbound_drop_pkt');
  }
  public set eastWestOutboundDropPkt(value: number) {
    this._eastWestOutboundDropPkt = value;
  }
  public resetEastWestOutboundDropPkt() {
    this._eastWestOutboundDropPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eastWestOutboundDropPktInput() {
    return this._eastWestOutboundDropPkt;
  }

  // east_west_outbound_fwd_byte - computed: false, optional: true, required: false
  private _eastWestOutboundFwdByte?: number; 
  public get eastWestOutboundFwdByte() {
    return this.getNumberAttribute('east_west_outbound_fwd_byte');
  }
  public set eastWestOutboundFwdByte(value: number) {
    this._eastWestOutboundFwdByte = value;
  }
  public resetEastWestOutboundFwdByte() {
    this._eastWestOutboundFwdByte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eastWestOutboundFwdByteInput() {
    return this._eastWestOutboundFwdByte;
  }

  // east_west_outbound_fwd_pkt - computed: false, optional: true, required: false
  private _eastWestOutboundFwdPkt?: number; 
  public get eastWestOutboundFwdPkt() {
    return this.getNumberAttribute('east_west_outbound_fwd_pkt');
  }
  public set eastWestOutboundFwdPkt(value: number) {
    this._eastWestOutboundFwdPkt = value;
  }
  public resetEastWestOutboundFwdPkt() {
    this._eastWestOutboundFwdPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eastWestOutboundFwdPktInput() {
    return this._eastWestOutboundFwdPkt;
  }

  // east_west_outbound_rcv_byte - computed: false, optional: true, required: false
  private _eastWestOutboundRcvByte?: number; 
  public get eastWestOutboundRcvByte() {
    return this.getNumberAttribute('east_west_outbound_rcv_byte');
  }
  public set eastWestOutboundRcvByte(value: number) {
    this._eastWestOutboundRcvByte = value;
  }
  public resetEastWestOutboundRcvByte() {
    this._eastWestOutboundRcvByte = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eastWestOutboundRcvByteInput() {
    return this._eastWestOutboundRcvByte;
  }

  // east_west_outbound_rcv_pkt - computed: false, optional: true, required: false
  private _eastWestOutboundRcvPkt?: number; 
  public get eastWestOutboundRcvPkt() {
    return this.getNumberAttribute('east_west_outbound_rcv_pkt');
  }
  public set eastWestOutboundRcvPkt(value: number) {
    this._eastWestOutboundRcvPkt = value;
  }
  public resetEastWestOutboundRcvPkt() {
    this._eastWestOutboundRcvPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eastWestOutboundRcvPktInput() {
    return this._eastWestOutboundRcvPkt;
  }

  // egress_bytes - computed: false, optional: true, required: false
  private _egressBytes?: number; 
  public get egressBytes() {
    return this.getNumberAttribute('egress_bytes');
  }
  public set egressBytes(value: number) {
    this._egressBytes = value;
  }
  public resetEgressBytes() {
    this._egressBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressBytesInput() {
    return this._egressBytes;
  }

  // egress_packets - computed: false, optional: true, required: false
  private _egressPackets?: number; 
  public get egressPackets() {
    return this.getNumberAttribute('egress_packets');
  }
  public set egressPackets(value: number) {
    this._egressPackets = value;
  }
  public resetEgressPackets() {
    this._egressPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressPacketsInput() {
    return this._egressPackets;
  }

  // entry_sync_message_received - computed: false, optional: true, required: false
  private _entrySyncMessageReceived?: number; 
  public get entrySyncMessageReceived() {
    return this.getNumberAttribute('entry_sync_message_received');
  }
  public set entrySyncMessageReceived(value: number) {
    this._entrySyncMessageReceived = value;
  }
  public resetEntrySyncMessageReceived() {
    this._entrySyncMessageReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrySyncMessageReceivedInput() {
    return this._entrySyncMessageReceived;
  }

  // entry_sync_message_sent - computed: false, optional: true, required: false
  private _entrySyncMessageSent?: number; 
  public get entrySyncMessageSent() {
    return this.getNumberAttribute('entry_sync_message_sent');
  }
  public set entrySyncMessageSent(value: number) {
    this._entrySyncMessageSent = value;
  }
  public resetEntrySyncMessageSent() {
    this._entrySyncMessageSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrySyncMessageSentInput() {
    return this._entrySyncMessageSent;
  }

  // icmp_fwd_recv - computed: false, optional: true, required: false
  private _icmpFwdRecv?: number; 
  public get icmpFwdRecv() {
    return this.getNumberAttribute('icmp_fwd_recv');
  }
  public set icmpFwdRecv(value: number) {
    this._icmpFwdRecv = value;
  }
  public resetIcmpFwdRecv() {
    this._icmpFwdRecv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpFwdRecvInput() {
    return this._icmpFwdRecv;
  }

  // inbound_bytes_drop - computed: false, optional: true, required: false
  private _inboundBytesDrop?: number; 
  public get inboundBytesDrop() {
    return this.getNumberAttribute('inbound_bytes_drop');
  }
  public set inboundBytesDrop(value: number) {
    this._inboundBytesDrop = value;
  }
  public resetInboundBytesDrop() {
    this._inboundBytesDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundBytesDropInput() {
    return this._inboundBytesDrop;
  }

  // inbound_bytes_sent - computed: false, optional: true, required: false
  private _inboundBytesSent?: number; 
  public get inboundBytesSent() {
    return this.getNumberAttribute('inbound_bytes_sent');
  }
  public set inboundBytesSent(value: number) {
    this._inboundBytesSent = value;
  }
  public resetInboundBytesSent() {
    this._inboundBytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundBytesSentInput() {
    return this._inboundBytesSent;
  }

  // ingress_bytes - computed: false, optional: true, required: false
  private _ingressBytes?: number; 
  public get ingressBytes() {
    return this.getNumberAttribute('ingress_bytes');
  }
  public set ingressBytes(value: number) {
    this._ingressBytes = value;
  }
  public resetIngressBytes() {
    this._ingressBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressBytesInput() {
    return this._ingressBytes;
  }

  // ingress_packets - computed: false, optional: true, required: false
  private _ingressPackets?: number; 
  public get ingressPackets() {
    return this.getNumberAttribute('ingress_packets');
  }
  public set ingressPackets(value: number) {
    this._ingressPackets = value;
  }
  public resetIngressPackets() {
    this._ingressPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressPacketsInput() {
    return this._ingressPackets;
  }

  // multi_pu_src_hash_pu1 - computed: false, optional: true, required: false
  private _multiPuSrcHashPu1?: number; 
  public get multiPuSrcHashPu1() {
    return this.getNumberAttribute('multi_pu_src_hash_pu1');
  }
  public set multiPuSrcHashPu1(value: number) {
    this._multiPuSrcHashPu1 = value;
  }
  public resetMultiPuSrcHashPu1() {
    this._multiPuSrcHashPu1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiPuSrcHashPu1Input() {
    return this._multiPuSrcHashPu1;
  }

  // multi_pu_src_hash_pu2 - computed: false, optional: true, required: false
  private _multiPuSrcHashPu2?: number; 
  public get multiPuSrcHashPu2() {
    return this.getNumberAttribute('multi_pu_src_hash_pu2');
  }
  public set multiPuSrcHashPu2(value: number) {
    this._multiPuSrcHashPu2 = value;
  }
  public resetMultiPuSrcHashPu2() {
    this._multiPuSrcHashPu2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiPuSrcHashPu2Input() {
    return this._multiPuSrcHashPu2;
  }

  // outbound_bytes_drop - computed: false, optional: true, required: false
  private _outboundBytesDrop?: number; 
  public get outboundBytesDrop() {
    return this.getNumberAttribute('outbound_bytes_drop');
  }
  public set outboundBytesDrop(value: number) {
    this._outboundBytesDrop = value;
  }
  public resetOutboundBytesDrop() {
    this._outboundBytesDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundBytesDropInput() {
    return this._outboundBytesDrop;
  }

  // outbound_bytes_sent - computed: false, optional: true, required: false
  private _outboundBytesSent?: number; 
  public get outboundBytesSent() {
    return this.getNumberAttribute('outbound_bytes_sent');
  }
  public set outboundBytesSent(value: number) {
    this._outboundBytesSent = value;
  }
  public resetOutboundBytesSent() {
    this._outboundBytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundBytesSentInput() {
    return this._outboundBytesSent;
  }

  // outbound_drop - computed: false, optional: true, required: false
  private _outboundDrop?: number; 
  public get outboundDrop() {
    return this.getNumberAttribute('outbound_drop');
  }
  public set outboundDrop(value: number) {
    this._outboundDrop = value;
  }
  public resetOutboundDrop() {
    this._outboundDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundDropInput() {
    return this._outboundDrop;
  }

  // outbound_pkt_sent - computed: false, optional: true, required: false
  private _outboundPktSent?: number; 
  public get outboundPktSent() {
    return this.getNumberAttribute('outbound_pkt_sent');
  }
  public set outboundPktSent(value: number) {
    this._outboundPktSent = value;
  }
  public resetOutboundPktSent() {
    this._outboundPktSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPktSentInput() {
    return this._outboundPktSent;
  }

  // port_zero_fwd_byte_rcvd - computed: false, optional: true, required: false
  private _portZeroFwdByteRcvd?: number; 
  public get portZeroFwdByteRcvd() {
    return this.getNumberAttribute('port_zero_fwd_byte_rcvd');
  }
  public set portZeroFwdByteRcvd(value: number) {
    this._portZeroFwdByteRcvd = value;
  }
  public resetPortZeroFwdByteRcvd() {
    this._portZeroFwdByteRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portZeroFwdByteRcvdInput() {
    return this._portZeroFwdByteRcvd;
  }

  // port_zero_fwd_pkt_rcvd - computed: false, optional: true, required: false
  private _portZeroFwdPktRcvd?: number; 
  public get portZeroFwdPktRcvd() {
    return this.getNumberAttribute('port_zero_fwd_pkt_rcvd');
  }
  public set portZeroFwdPktRcvd(value: number) {
    this._portZeroFwdPktRcvd = value;
  }
  public resetPortZeroFwdPktRcvd() {
    this._portZeroFwdPktRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portZeroFwdPktRcvdInput() {
    return this._portZeroFwdPktRcvd;
  }

  // port_zero_rev_byte_rcvd - computed: false, optional: true, required: false
  private _portZeroRevByteRcvd?: number; 
  public get portZeroRevByteRcvd() {
    return this.getNumberAttribute('port_zero_rev_byte_rcvd');
  }
  public set portZeroRevByteRcvd(value: number) {
    this._portZeroRevByteRcvd = value;
  }
  public resetPortZeroRevByteRcvd() {
    this._portZeroRevByteRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portZeroRevByteRcvdInput() {
    return this._portZeroRevByteRcvd;
  }

  // port_zero_rev_pkt_rcvd - computed: false, optional: true, required: false
  private _portZeroRevPktRcvd?: number; 
  public get portZeroRevPktRcvd() {
    return this.getNumberAttribute('port_zero_rev_pkt_rcvd');
  }
  public set portZeroRevPktRcvd(value: number) {
    this._portZeroRevPktRcvd = value;
  }
  public resetPortZeroRevPktRcvd() {
    this._portZeroRevPktRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portZeroRevPktRcvdInput() {
    return this._portZeroRevPktRcvd;
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

  // secondary_dst_entry_conn_limit_exceed - computed: false, optional: true, required: false
  private _secondaryDstEntryConnLimitExceed?: number; 
  public get secondaryDstEntryConnLimitExceed() {
    return this.getNumberAttribute('secondary_dst_entry_conn_limit_exceed');
  }
  public set secondaryDstEntryConnLimitExceed(value: number) {
    this._secondaryDstEntryConnLimitExceed = value;
  }
  public resetSecondaryDstEntryConnLimitExceed() {
    this._secondaryDstEntryConnLimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDstEntryConnLimitExceedInput() {
    return this._secondaryDstEntryConnLimitExceed;
  }

  // secondary_dst_entry_conn_rate_exceed - computed: false, optional: true, required: false
  private _secondaryDstEntryConnRateExceed?: number; 
  public get secondaryDstEntryConnRateExceed() {
    return this.getNumberAttribute('secondary_dst_entry_conn_rate_exceed');
  }
  public set secondaryDstEntryConnRateExceed(value: number) {
    this._secondaryDstEntryConnRateExceed = value;
  }
  public resetSecondaryDstEntryConnRateExceed() {
    this._secondaryDstEntryConnRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDstEntryConnRateExceedInput() {
    return this._secondaryDstEntryConnRateExceed;
  }

  // secondary_dst_entry_frag_pkt_rate_exceed - computed: false, optional: true, required: false
  private _secondaryDstEntryFragPktRateExceed?: number; 
  public get secondaryDstEntryFragPktRateExceed() {
    return this.getNumberAttribute('secondary_dst_entry_frag_pkt_rate_exceed');
  }
  public set secondaryDstEntryFragPktRateExceed(value: number) {
    this._secondaryDstEntryFragPktRateExceed = value;
  }
  public resetSecondaryDstEntryFragPktRateExceed() {
    this._secondaryDstEntryFragPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDstEntryFragPktRateExceedInput() {
    return this._secondaryDstEntryFragPktRateExceed;
  }

  // secondary_dst_entry_kbit_rate_exceed - computed: false, optional: true, required: false
  private _secondaryDstEntryKbitRateExceed?: number; 
  public get secondaryDstEntryKbitRateExceed() {
    return this.getNumberAttribute('secondary_dst_entry_kbit_rate_exceed');
  }
  public set secondaryDstEntryKbitRateExceed(value: number) {
    this._secondaryDstEntryKbitRateExceed = value;
  }
  public resetSecondaryDstEntryKbitRateExceed() {
    this._secondaryDstEntryKbitRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDstEntryKbitRateExceedInput() {
    return this._secondaryDstEntryKbitRateExceed;
  }

  // secondary_dst_entry_pkt_rate_exceed - computed: false, optional: true, required: false
  private _secondaryDstEntryPktRateExceed?: number; 
  public get secondaryDstEntryPktRateExceed() {
    return this.getNumberAttribute('secondary_dst_entry_pkt_rate_exceed');
  }
  public set secondaryDstEntryPktRateExceed(value: number) {
    this._secondaryDstEntryPktRateExceed = value;
  }
  public resetSecondaryDstEntryPktRateExceed() {
    this._secondaryDstEntryPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryDstEntryPktRateExceedInput() {
    return this._secondaryDstEntryPktRateExceed;
  }

  // secondary_entry_aged - computed: false, optional: true, required: false
  private _secondaryEntryAged?: number; 
  public get secondaryEntryAged() {
    return this.getNumberAttribute('secondary_entry_aged');
  }
  public set secondaryEntryAged(value: number) {
    this._secondaryEntryAged = value;
  }
  public resetSecondaryEntryAged() {
    this._secondaryEntryAged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryEntryAgedInput() {
    return this._secondaryEntryAged;
  }

  // secondary_entry_hit - computed: false, optional: true, required: false
  private _secondaryEntryHit?: number; 
  public get secondaryEntryHit() {
    return this.getNumberAttribute('secondary_entry_hit');
  }
  public set secondaryEntryHit(value: number) {
    this._secondaryEntryHit = value;
  }
  public resetSecondaryEntryHit() {
    this._secondaryEntryHit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryEntryHitInput() {
    return this._secondaryEntryHit;
  }

  // secondary_entry_learn - computed: false, optional: true, required: false
  private _secondaryEntryLearn?: number; 
  public get secondaryEntryLearn() {
    return this.getNumberAttribute('secondary_entry_learn');
  }
  public set secondaryEntryLearn(value: number) {
    this._secondaryEntryLearn = value;
  }
  public resetSecondaryEntryLearn() {
    this._secondaryEntryLearn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryEntryLearnInput() {
    return this._secondaryEntryLearn;
  }

  // secondary_entry_learning_thre_exceed - computed: false, optional: true, required: false
  private _secondaryEntryLearningThreExceed?: number; 
  public get secondaryEntryLearningThreExceed() {
    return this.getNumberAttribute('secondary_entry_learning_thre_exceed');
  }
  public set secondaryEntryLearningThreExceed(value: number) {
    this._secondaryEntryLearningThreExceed = value;
  }
  public resetSecondaryEntryLearningThreExceed() {
    this._secondaryEntryLearningThreExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryEntryLearningThreExceedInput() {
    return this._secondaryEntryLearningThreExceed;
  }

  // secondary_entry_miss - computed: false, optional: true, required: false
  private _secondaryEntryMiss?: number; 
  public get secondaryEntryMiss() {
    return this.getNumberAttribute('secondary_entry_miss');
  }
  public set secondaryEntryMiss(value: number) {
    this._secondaryEntryMiss = value;
  }
  public resetSecondaryEntryMiss() {
    this._secondaryEntryMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryEntryMissInput() {
    return this._secondaryEntryMiss;
  }

  // secondary_port_aged - computed: false, optional: true, required: false
  private _secondaryPortAged?: number; 
  public get secondaryPortAged() {
    return this.getNumberAttribute('secondary_port_aged');
  }
  public set secondaryPortAged(value: number) {
    this._secondaryPortAged = value;
  }
  public resetSecondaryPortAged() {
    this._secondaryPortAged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPortAgedInput() {
    return this._secondaryPortAged;
  }

  // secondary_port_learn - computed: false, optional: true, required: false
  private _secondaryPortLearn?: number; 
  public get secondaryPortLearn() {
    return this.getNumberAttribute('secondary_port_learn');
  }
  public set secondaryPortLearn(value: number) {
    this._secondaryPortLearn = value;
  }
  public resetSecondaryPortLearn() {
    this._secondaryPortLearn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryPortLearnInput() {
    return this._secondaryPortLearn;
  }

  // service_miss_fwd_byte_rcvd - computed: false, optional: true, required: false
  private _serviceMissFwdByteRcvd?: number; 
  public get serviceMissFwdByteRcvd() {
    return this.getNumberAttribute('service_miss_fwd_byte_rcvd');
  }
  public set serviceMissFwdByteRcvd(value: number) {
    this._serviceMissFwdByteRcvd = value;
  }
  public resetServiceMissFwdByteRcvd() {
    this._serviceMissFwdByteRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMissFwdByteRcvdInput() {
    return this._serviceMissFwdByteRcvd;
  }

  // service_miss_fwd_pkt_rcvd - computed: false, optional: true, required: false
  private _serviceMissFwdPktRcvd?: number; 
  public get serviceMissFwdPktRcvd() {
    return this.getNumberAttribute('service_miss_fwd_pkt_rcvd');
  }
  public set serviceMissFwdPktRcvd(value: number) {
    this._serviceMissFwdPktRcvd = value;
  }
  public resetServiceMissFwdPktRcvd() {
    this._serviceMissFwdPktRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMissFwdPktRcvdInput() {
    return this._serviceMissFwdPktRcvd;
  }

  // service_miss_rev_byte_rcvd - computed: false, optional: true, required: false
  private _serviceMissRevByteRcvd?: number; 
  public get serviceMissRevByteRcvd() {
    return this.getNumberAttribute('service_miss_rev_byte_rcvd');
  }
  public set serviceMissRevByteRcvd(value: number) {
    this._serviceMissRevByteRcvd = value;
  }
  public resetServiceMissRevByteRcvd() {
    this._serviceMissRevByteRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMissRevByteRcvdInput() {
    return this._serviceMissRevByteRcvd;
  }

  // service_miss_rev_pkt_rcvd - computed: false, optional: true, required: false
  private _serviceMissRevPktRcvd?: number; 
  public get serviceMissRevPktRcvd() {
    return this.getNumberAttribute('service_miss_rev_pkt_rcvd');
  }
  public set serviceMissRevPktRcvd(value: number) {
    this._serviceMissRevPktRcvd = value;
  }
  public resetServiceMissRevPktRcvd() {
    this._serviceMissRevPktRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceMissRevPktRcvdInput() {
    return this._serviceMissRevPktRcvd;
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

  // source_entry_icmp - computed: false, optional: true, required: false
  private _sourceEntryIcmp?: number; 
  public get sourceEntryIcmp() {
    return this.getNumberAttribute('source_entry_icmp');
  }
  public set sourceEntryIcmp(value: number) {
    this._sourceEntryIcmp = value;
  }
  public resetSourceEntryIcmp() {
    this._sourceEntryIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEntryIcmpInput() {
    return this._sourceEntryIcmp;
  }

  // source_entry_other - computed: false, optional: true, required: false
  private _sourceEntryOther?: number; 
  public get sourceEntryOther() {
    return this.getNumberAttribute('source_entry_other');
  }
  public set sourceEntryOther(value: number) {
    this._sourceEntryOther = value;
  }
  public resetSourceEntryOther() {
    this._sourceEntryOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEntryOtherInput() {
    return this._sourceEntryOther;
  }

  // source_entry_tcp - computed: false, optional: true, required: false
  private _sourceEntryTcp?: number; 
  public get sourceEntryTcp() {
    return this.getNumberAttribute('source_entry_tcp');
  }
  public set sourceEntryTcp(value: number) {
    this._sourceEntryTcp = value;
  }
  public resetSourceEntryTcp() {
    this._sourceEntryTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEntryTcpInput() {
    return this._sourceEntryTcp;
  }

  // source_entry_total - computed: false, optional: true, required: false
  private _sourceEntryTotal?: number; 
  public get sourceEntryTotal() {
    return this.getNumberAttribute('source_entry_total');
  }
  public set sourceEntryTotal(value: number) {
    this._sourceEntryTotal = value;
  }
  public resetSourceEntryTotal() {
    this._sourceEntryTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEntryTotalInput() {
    return this._sourceEntryTotal;
  }

  // source_entry_udp - computed: false, optional: true, required: false
  private _sourceEntryUdp?: number; 
  public get sourceEntryUdp() {
    return this.getNumberAttribute('source_entry_udp');
  }
  public set sourceEntryUdp(value: number) {
    this._sourceEntryUdp = value;
  }
  public resetSourceEntryUdp() {
    this._sourceEntryUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEntryUdpInput() {
    return this._sourceEntryUdp;
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

  // src_other_filter_action_blacklist - computed: false, optional: true, required: false
  private _srcOtherFilterActionBlacklist?: number; 
  public get srcOtherFilterActionBlacklist() {
    return this.getNumberAttribute('src_other_filter_action_blacklist');
  }
  public set srcOtherFilterActionBlacklist(value: number) {
    this._srcOtherFilterActionBlacklist = value;
  }
  public resetSrcOtherFilterActionBlacklist() {
    this._srcOtherFilterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcOtherFilterActionBlacklistInput() {
    return this._srcOtherFilterActionBlacklist;
  }

  // src_other_filter_action_default_pass - computed: false, optional: true, required: false
  private _srcOtherFilterActionDefaultPass?: number; 
  public get srcOtherFilterActionDefaultPass() {
    return this.getNumberAttribute('src_other_filter_action_default_pass');
  }
  public set srcOtherFilterActionDefaultPass(value: number) {
    this._srcOtherFilterActionDefaultPass = value;
  }
  public resetSrcOtherFilterActionDefaultPass() {
    this._srcOtherFilterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcOtherFilterActionDefaultPassInput() {
    return this._srcOtherFilterActionDefaultPass;
  }

  // src_other_filter_action_drop - computed: false, optional: true, required: false
  private _srcOtherFilterActionDrop?: number; 
  public get srcOtherFilterActionDrop() {
    return this.getNumberAttribute('src_other_filter_action_drop');
  }
  public set srcOtherFilterActionDrop(value: number) {
    this._srcOtherFilterActionDrop = value;
  }
  public resetSrcOtherFilterActionDrop() {
    this._srcOtherFilterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcOtherFilterActionDropInput() {
    return this._srcOtherFilterActionDrop;
  }

  // src_other_filter_action_whitelist - computed: false, optional: true, required: false
  private _srcOtherFilterActionWhitelist?: number; 
  public get srcOtherFilterActionWhitelist() {
    return this.getNumberAttribute('src_other_filter_action_whitelist');
  }
  public set srcOtherFilterActionWhitelist(value: number) {
    this._srcOtherFilterActionWhitelist = value;
  }
  public resetSrcOtherFilterActionWhitelist() {
    this._srcOtherFilterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcOtherFilterActionWhitelistInput() {
    return this._srcOtherFilterActionWhitelist;
  }

  // src_tcp_action_on_ack_blacklist - computed: false, optional: true, required: false
  private _srcTcpActionOnAckBlacklist?: number; 
  public get srcTcpActionOnAckBlacklist() {
    return this.getNumberAttribute('src_tcp_action_on_ack_blacklist');
  }
  public set srcTcpActionOnAckBlacklist(value: number) {
    this._srcTcpActionOnAckBlacklist = value;
  }
  public resetSrcTcpActionOnAckBlacklist() {
    this._srcTcpActionOnAckBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpActionOnAckBlacklistInput() {
    return this._srcTcpActionOnAckBlacklist;
  }

  // src_tcp_action_on_ack_fail - computed: false, optional: true, required: false
  private _srcTcpActionOnAckFail?: number; 
  public get srcTcpActionOnAckFail() {
    return this.getNumberAttribute('src_tcp_action_on_ack_fail');
  }
  public set srcTcpActionOnAckFail(value: number) {
    this._srcTcpActionOnAckFail = value;
  }
  public resetSrcTcpActionOnAckFail() {
    this._srcTcpActionOnAckFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpActionOnAckFailInput() {
    return this._srcTcpActionOnAckFail;
  }

  // src_tcp_action_on_ack_gap_drop - computed: false, optional: true, required: false
  private _srcTcpActionOnAckGapDrop?: number; 
  public get srcTcpActionOnAckGapDrop() {
    return this.getNumberAttribute('src_tcp_action_on_ack_gap_drop');
  }
  public set srcTcpActionOnAckGapDrop(value: number) {
    this._srcTcpActionOnAckGapDrop = value;
  }
  public resetSrcTcpActionOnAckGapDrop() {
    this._srcTcpActionOnAckGapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpActionOnAckGapDropInput() {
    return this._srcTcpActionOnAckGapDrop;
  }

  // src_tcp_action_on_ack_init - computed: false, optional: true, required: false
  private _srcTcpActionOnAckInit?: number; 
  public get srcTcpActionOnAckInit() {
    return this.getNumberAttribute('src_tcp_action_on_ack_init');
  }
  public set srcTcpActionOnAckInit(value: number) {
    this._srcTcpActionOnAckInit = value;
  }
  public resetSrcTcpActionOnAckInit() {
    this._srcTcpActionOnAckInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpActionOnAckInitInput() {
    return this._srcTcpActionOnAckInit;
  }

  // src_tcp_action_on_ack_reset - computed: false, optional: true, required: false
  private _srcTcpActionOnAckReset?: number; 
  public get srcTcpActionOnAckReset() {
    return this.getNumberAttribute('src_tcp_action_on_ack_reset');
  }
  public set srcTcpActionOnAckReset(value: number) {
    this._srcTcpActionOnAckReset = value;
  }
  public resetSrcTcpActionOnAckReset() {
    this._srcTcpActionOnAckReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpActionOnAckResetInput() {
    return this._srcTcpActionOnAckReset;
  }

  // src_tcp_action_on_ack_timeout - computed: false, optional: true, required: false
  private _srcTcpActionOnAckTimeout?: number; 
  public get srcTcpActionOnAckTimeout() {
    return this.getNumberAttribute('src_tcp_action_on_ack_timeout');
  }
  public set srcTcpActionOnAckTimeout(value: number) {
    this._srcTcpActionOnAckTimeout = value;
  }
  public resetSrcTcpActionOnAckTimeout() {
    this._srcTcpActionOnAckTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpActionOnAckTimeoutInput() {
    return this._srcTcpActionOnAckTimeout;
  }

  // src_tcp_action_on_syn_blacklist - computed: false, optional: true, required: false
  private _srcTcpActionOnSynBlacklist?: number; 
  public get srcTcpActionOnSynBlacklist() {
    return this.getNumberAttribute('src_tcp_action_on_syn_blacklist');
  }
  public set srcTcpActionOnSynBlacklist(value: number) {
    this._srcTcpActionOnSynBlacklist = value;
  }
  public resetSrcTcpActionOnSynBlacklist() {
    this._srcTcpActionOnSynBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpActionOnSynBlacklistInput() {
    return this._srcTcpActionOnSynBlacklist;
  }

  // src_tcp_action_on_syn_fail - computed: false, optional: true, required: false
  private _srcTcpActionOnSynFail?: number; 
  public get srcTcpActionOnSynFail() {
    return this.getNumberAttribute('src_tcp_action_on_syn_fail');
  }
  public set srcTcpActionOnSynFail(value: number) {
    this._srcTcpActionOnSynFail = value;
  }
  public resetSrcTcpActionOnSynFail() {
    this._srcTcpActionOnSynFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpActionOnSynFailInput() {
    return this._srcTcpActionOnSynFail;
  }

  // src_tcp_action_on_syn_gap_drop - computed: false, optional: true, required: false
  private _srcTcpActionOnSynGapDrop?: number; 
  public get srcTcpActionOnSynGapDrop() {
    return this.getNumberAttribute('src_tcp_action_on_syn_gap_drop');
  }
  public set srcTcpActionOnSynGapDrop(value: number) {
    this._srcTcpActionOnSynGapDrop = value;
  }
  public resetSrcTcpActionOnSynGapDrop() {
    this._srcTcpActionOnSynGapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpActionOnSynGapDropInput() {
    return this._srcTcpActionOnSynGapDrop;
  }

  // src_tcp_action_on_syn_init - computed: false, optional: true, required: false
  private _srcTcpActionOnSynInit?: number; 
  public get srcTcpActionOnSynInit() {
    return this.getNumberAttribute('src_tcp_action_on_syn_init');
  }
  public set srcTcpActionOnSynInit(value: number) {
    this._srcTcpActionOnSynInit = value;
  }
  public resetSrcTcpActionOnSynInit() {
    this._srcTcpActionOnSynInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpActionOnSynInitInput() {
    return this._srcTcpActionOnSynInit;
  }

  // src_tcp_action_on_syn_reset - computed: false, optional: true, required: false
  private _srcTcpActionOnSynReset?: number; 
  public get srcTcpActionOnSynReset() {
    return this.getNumberAttribute('src_tcp_action_on_syn_reset');
  }
  public set srcTcpActionOnSynReset(value: number) {
    this._srcTcpActionOnSynReset = value;
  }
  public resetSrcTcpActionOnSynReset() {
    this._srcTcpActionOnSynReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpActionOnSynResetInput() {
    return this._srcTcpActionOnSynReset;
  }

  // src_tcp_action_on_syn_timeout - computed: false, optional: true, required: false
  private _srcTcpActionOnSynTimeout?: number; 
  public get srcTcpActionOnSynTimeout() {
    return this.getNumberAttribute('src_tcp_action_on_syn_timeout');
  }
  public set srcTcpActionOnSynTimeout(value: number) {
    this._srcTcpActionOnSynTimeout = value;
  }
  public resetSrcTcpActionOnSynTimeout() {
    this._srcTcpActionOnSynTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpActionOnSynTimeoutInput() {
    return this._srcTcpActionOnSynTimeout;
  }

  // src_tcp_conn_prate_excd - computed: false, optional: true, required: false
  private _srcTcpConnPrateExcd?: number; 
  public get srcTcpConnPrateExcd() {
    return this.getNumberAttribute('src_tcp_conn_prate_excd');
  }
  public set srcTcpConnPrateExcd(value: number) {
    this._srcTcpConnPrateExcd = value;
  }
  public resetSrcTcpConnPrateExcd() {
    this._srcTcpConnPrateExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpConnPrateExcdInput() {
    return this._srcTcpConnPrateExcd;
  }

  // src_tcp_filter_action_blacklist - computed: false, optional: true, required: false
  private _srcTcpFilterActionBlacklist?: number; 
  public get srcTcpFilterActionBlacklist() {
    return this.getNumberAttribute('src_tcp_filter_action_blacklist');
  }
  public set srcTcpFilterActionBlacklist(value: number) {
    this._srcTcpFilterActionBlacklist = value;
  }
  public resetSrcTcpFilterActionBlacklist() {
    this._srcTcpFilterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpFilterActionBlacklistInput() {
    return this._srcTcpFilterActionBlacklist;
  }

  // src_tcp_filter_action_default_pass - computed: false, optional: true, required: false
  private _srcTcpFilterActionDefaultPass?: number; 
  public get srcTcpFilterActionDefaultPass() {
    return this.getNumberAttribute('src_tcp_filter_action_default_pass');
  }
  public set srcTcpFilterActionDefaultPass(value: number) {
    this._srcTcpFilterActionDefaultPass = value;
  }
  public resetSrcTcpFilterActionDefaultPass() {
    this._srcTcpFilterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpFilterActionDefaultPassInput() {
    return this._srcTcpFilterActionDefaultPass;
  }

  // src_tcp_filter_action_drop - computed: false, optional: true, required: false
  private _srcTcpFilterActionDrop?: number; 
  public get srcTcpFilterActionDrop() {
    return this.getNumberAttribute('src_tcp_filter_action_drop');
  }
  public set srcTcpFilterActionDrop(value: number) {
    this._srcTcpFilterActionDrop = value;
  }
  public resetSrcTcpFilterActionDrop() {
    this._srcTcpFilterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpFilterActionDropInput() {
    return this._srcTcpFilterActionDrop;
  }

  // src_tcp_filter_action_whitelist - computed: false, optional: true, required: false
  private _srcTcpFilterActionWhitelist?: number; 
  public get srcTcpFilterActionWhitelist() {
    return this.getNumberAttribute('src_tcp_filter_action_whitelist');
  }
  public set srcTcpFilterActionWhitelist(value: number) {
    this._srcTcpFilterActionWhitelist = value;
  }
  public resetSrcTcpFilterActionWhitelist() {
    this._srcTcpFilterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpFilterActionWhitelistInput() {
    return this._srcTcpFilterActionWhitelist;
  }

  // src_tcp_out_of_seq_excd - computed: false, optional: true, required: false
  private _srcTcpOutOfSeqExcd?: number; 
  public get srcTcpOutOfSeqExcd() {
    return this.getNumberAttribute('src_tcp_out_of_seq_excd');
  }
  public set srcTcpOutOfSeqExcd(value: number) {
    this._srcTcpOutOfSeqExcd = value;
  }
  public resetSrcTcpOutOfSeqExcd() {
    this._srcTcpOutOfSeqExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpOutOfSeqExcdInput() {
    return this._srcTcpOutOfSeqExcd;
  }

  // src_tcp_retransmit_excd - computed: false, optional: true, required: false
  private _srcTcpRetransmitExcd?: number; 
  public get srcTcpRetransmitExcd() {
    return this.getNumberAttribute('src_tcp_retransmit_excd');
  }
  public set srcTcpRetransmitExcd(value: number) {
    this._srcTcpRetransmitExcd = value;
  }
  public resetSrcTcpRetransmitExcd() {
    this._srcTcpRetransmitExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpRetransmitExcdInput() {
    return this._srcTcpRetransmitExcd;
  }

  // src_tcp_rst_cookie_fail - computed: false, optional: true, required: false
  private _srcTcpRstCookieFail?: number; 
  public get srcTcpRstCookieFail() {
    return this.getNumberAttribute('src_tcp_rst_cookie_fail');
  }
  public set srcTcpRstCookieFail(value: number) {
    this._srcTcpRstCookieFail = value;
  }
  public resetSrcTcpRstCookieFail() {
    this._srcTcpRstCookieFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpRstCookieFailInput() {
    return this._srcTcpRstCookieFail;
  }

  // src_tcp_small_window_excd - computed: false, optional: true, required: false
  private _srcTcpSmallWindowExcd?: number; 
  public get srcTcpSmallWindowExcd() {
    return this.getNumberAttribute('src_tcp_small_window_excd');
  }
  public set srcTcpSmallWindowExcd(value: number) {
    this._srcTcpSmallWindowExcd = value;
  }
  public resetSrcTcpSmallWindowExcd() {
    this._srcTcpSmallWindowExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpSmallWindowExcdInput() {
    return this._srcTcpSmallWindowExcd;
  }

  // src_tcp_syn_auth_fail - computed: false, optional: true, required: false
  private _srcTcpSynAuthFail?: number; 
  public get srcTcpSynAuthFail() {
    return this.getNumberAttribute('src_tcp_syn_auth_fail');
  }
  public set srcTcpSynAuthFail(value: number) {
    this._srcTcpSynAuthFail = value;
  }
  public resetSrcTcpSynAuthFail() {
    this._srcTcpSynAuthFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpSynAuthFailInput() {
    return this._srcTcpSynAuthFail;
  }

  // src_tcp_syn_cookie_fail - computed: false, optional: true, required: false
  private _srcTcpSynCookieFail?: number; 
  public get srcTcpSynCookieFail() {
    return this.getNumberAttribute('src_tcp_syn_cookie_fail');
  }
  public set srcTcpSynCookieFail(value: number) {
    this._srcTcpSynCookieFail = value;
  }
  public resetSrcTcpSynCookieFail() {
    this._srcTcpSynCookieFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpSynCookieFailInput() {
    return this._srcTcpSynCookieFail;
  }

  // src_tcp_syn_cookie_sent - computed: false, optional: true, required: false
  private _srcTcpSynCookieSent?: number; 
  public get srcTcpSynCookieSent() {
    return this.getNumberAttribute('src_tcp_syn_cookie_sent');
  }
  public set srcTcpSynCookieSent(value: number) {
    this._srcTcpSynCookieSent = value;
  }
  public resetSrcTcpSynCookieSent() {
    this._srcTcpSynCookieSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpSynCookieSentInput() {
    return this._srcTcpSynCookieSent;
  }

  // src_tcp_unauth_drop - computed: false, optional: true, required: false
  private _srcTcpUnauthDrop?: number; 
  public get srcTcpUnauthDrop() {
    return this.getNumberAttribute('src_tcp_unauth_drop');
  }
  public set srcTcpUnauthDrop(value: number) {
    this._srcTcpUnauthDrop = value;
  }
  public resetSrcTcpUnauthDrop() {
    this._srcTcpUnauthDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpUnauthDropInput() {
    return this._srcTcpUnauthDrop;
  }

  // src_tcp_wellknown_sport_drop - computed: false, optional: true, required: false
  private _srcTcpWellknownSportDrop?: number; 
  public get srcTcpWellknownSportDrop() {
    return this.getNumberAttribute('src_tcp_wellknown_sport_drop');
  }
  public set srcTcpWellknownSportDrop(value: number) {
    this._srcTcpWellknownSportDrop = value;
  }
  public resetSrcTcpWellknownSportDrop() {
    this._srcTcpWellknownSportDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpWellknownSportDropInput() {
    return this._srcTcpWellknownSportDrop;
  }

  // src_tcp_zero_window_excd - computed: false, optional: true, required: false
  private _srcTcpZeroWindowExcd?: number; 
  public get srcTcpZeroWindowExcd() {
    return this.getNumberAttribute('src_tcp_zero_window_excd');
  }
  public set srcTcpZeroWindowExcd(value: number) {
    this._srcTcpZeroWindowExcd = value;
  }
  public resetSrcTcpZeroWindowExcd() {
    this._srcTcpZeroWindowExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcTcpZeroWindowExcdInput() {
    return this._srcTcpZeroWindowExcd;
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

  // src_udp_conn_prate_excd - computed: false, optional: true, required: false
  private _srcUdpConnPrateExcd?: number; 
  public get srcUdpConnPrateExcd() {
    return this.getNumberAttribute('src_udp_conn_prate_excd');
  }
  public set srcUdpConnPrateExcd(value: number) {
    this._srcUdpConnPrateExcd = value;
  }
  public resetSrcUdpConnPrateExcd() {
    this._srcUdpConnPrateExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpConnPrateExcdInput() {
    return this._srcUdpConnPrateExcd;
  }

  // src_udp_filter_action_blacklist - computed: false, optional: true, required: false
  private _srcUdpFilterActionBlacklist?: number; 
  public get srcUdpFilterActionBlacklist() {
    return this.getNumberAttribute('src_udp_filter_action_blacklist');
  }
  public set srcUdpFilterActionBlacklist(value: number) {
    this._srcUdpFilterActionBlacklist = value;
  }
  public resetSrcUdpFilterActionBlacklist() {
    this._srcUdpFilterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpFilterActionBlacklistInput() {
    return this._srcUdpFilterActionBlacklist;
  }

  // src_udp_filter_action_default_pass - computed: false, optional: true, required: false
  private _srcUdpFilterActionDefaultPass?: number; 
  public get srcUdpFilterActionDefaultPass() {
    return this.getNumberAttribute('src_udp_filter_action_default_pass');
  }
  public set srcUdpFilterActionDefaultPass(value: number) {
    this._srcUdpFilterActionDefaultPass = value;
  }
  public resetSrcUdpFilterActionDefaultPass() {
    this._srcUdpFilterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpFilterActionDefaultPassInput() {
    return this._srcUdpFilterActionDefaultPass;
  }

  // src_udp_filter_action_drop - computed: false, optional: true, required: false
  private _srcUdpFilterActionDrop?: number; 
  public get srcUdpFilterActionDrop() {
    return this.getNumberAttribute('src_udp_filter_action_drop');
  }
  public set srcUdpFilterActionDrop(value: number) {
    this._srcUdpFilterActionDrop = value;
  }
  public resetSrcUdpFilterActionDrop() {
    this._srcUdpFilterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpFilterActionDropInput() {
    return this._srcUdpFilterActionDrop;
  }

  // src_udp_filter_action_whitelist - computed: false, optional: true, required: false
  private _srcUdpFilterActionWhitelist?: number; 
  public get srcUdpFilterActionWhitelist() {
    return this.getNumberAttribute('src_udp_filter_action_whitelist');
  }
  public set srcUdpFilterActionWhitelist(value: number) {
    this._srcUdpFilterActionWhitelist = value;
  }
  public resetSrcUdpFilterActionWhitelist() {
    this._srcUdpFilterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpFilterActionWhitelistInput() {
    return this._srcUdpFilterActionWhitelist;
  }

  // src_udp_max_payload - computed: false, optional: true, required: false
  private _srcUdpMaxPayload?: number; 
  public get srcUdpMaxPayload() {
    return this.getNumberAttribute('src_udp_max_payload');
  }
  public set srcUdpMaxPayload(value: number) {
    this._srcUdpMaxPayload = value;
  }
  public resetSrcUdpMaxPayload() {
    this._srcUdpMaxPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpMaxPayloadInput() {
    return this._srcUdpMaxPayload;
  }

  // src_udp_min_payload - computed: false, optional: true, required: false
  private _srcUdpMinPayload?: number; 
  public get srcUdpMinPayload() {
    return this.getNumberAttribute('src_udp_min_payload');
  }
  public set srcUdpMinPayload(value: number) {
    this._srcUdpMinPayload = value;
  }
  public resetSrcUdpMinPayload() {
    this._srcUdpMinPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpMinPayloadInput() {
    return this._srcUdpMinPayload;
  }

  // src_udp_ntp_monlist_req - computed: false, optional: true, required: false
  private _srcUdpNtpMonlistReq?: number; 
  public get srcUdpNtpMonlistReq() {
    return this.getNumberAttribute('src_udp_ntp_monlist_req');
  }
  public set srcUdpNtpMonlistReq(value: number) {
    this._srcUdpNtpMonlistReq = value;
  }
  public resetSrcUdpNtpMonlistReq() {
    this._srcUdpNtpMonlistReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpNtpMonlistReqInput() {
    return this._srcUdpNtpMonlistReq;
  }

  // src_udp_ntp_monlist_resp - computed: false, optional: true, required: false
  private _srcUdpNtpMonlistResp?: number; 
  public get srcUdpNtpMonlistResp() {
    return this.getNumberAttribute('src_udp_ntp_monlist_resp');
  }
  public set srcUdpNtpMonlistResp(value: number) {
    this._srcUdpNtpMonlistResp = value;
  }
  public resetSrcUdpNtpMonlistResp() {
    this._srcUdpNtpMonlistResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpNtpMonlistRespInput() {
    return this._srcUdpNtpMonlistResp;
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

  // src_udp_wellknown_sport_drop - computed: false, optional: true, required: false
  private _srcUdpWellknownSportDrop?: number; 
  public get srcUdpWellknownSportDrop() {
    return this.getNumberAttribute('src_udp_wellknown_sport_drop');
  }
  public set srcUdpWellknownSportDrop(value: number) {
    this._srcUdpWellknownSportDrop = value;
  }
  public resetSrcUdpWellknownSportDrop() {
    this._srcUdpWellknownSportDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcUdpWellknownSportDropInput() {
    return this._srcUdpWellknownSportDrop;
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

  // tcp_fwd_recv - computed: false, optional: true, required: false
  private _tcpFwdRecv?: number; 
  public get tcpFwdRecv() {
    return this.getNumberAttribute('tcp_fwd_recv');
  }
  public set tcpFwdRecv(value: number) {
    this._tcpFwdRecv = value;
  }
  public resetTcpFwdRecv() {
    this._tcpFwdRecv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFwdRecvInput() {
    return this._tcpFwdRecv;
  }

  // tcp_invalid_syn - computed: false, optional: true, required: false
  private _tcpInvalidSyn?: number; 
  public get tcpInvalidSyn() {
    return this.getNumberAttribute('tcp_invalid_syn');
  }
  public set tcpInvalidSyn(value: number) {
    this._tcpInvalidSyn = value;
  }
  public resetTcpInvalidSyn() {
    this._tcpInvalidSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInvalidSynInput() {
    return this._tcpInvalidSyn;
  }

  // tcp_invalid_synack - computed: false, optional: true, required: false
  private _tcpInvalidSynack?: number; 
  public get tcpInvalidSynack() {
    return this.getNumberAttribute('tcp_invalid_synack');
  }
  public set tcpInvalidSynack(value: number) {
    this._tcpInvalidSynack = value;
  }
  public resetTcpInvalidSynack() {
    this._tcpInvalidSynack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInvalidSynackInput() {
    return this._tcpInvalidSynack;
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

  // tcp_syn_cookie_fail - computed: false, optional: true, required: false
  private _tcpSynCookieFail?: number; 
  public get tcpSynCookieFail() {
    return this.getNumberAttribute('tcp_syn_cookie_fail');
  }
  public set tcpSynCookieFail(value: number) {
    this._tcpSynCookieFail = value;
  }
  public resetTcpSynCookieFail() {
    this._tcpSynCookieFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynCookieFailInput() {
    return this._tcpSynCookieFail;
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

  // token_auth_current_salt_matched - computed: false, optional: true, required: false
  private _tokenAuthCurrentSaltMatched?: number; 
  public get tokenAuthCurrentSaltMatched() {
    return this.getNumberAttribute('token_auth_current_salt_matched');
  }
  public set tokenAuthCurrentSaltMatched(value: number) {
    this._tokenAuthCurrentSaltMatched = value;
  }
  public resetTokenAuthCurrentSaltMatched() {
    this._tokenAuthCurrentSaltMatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthCurrentSaltMatchedInput() {
    return this._tokenAuthCurrentSaltMatched;
  }

  // token_auth_invalid_packets - computed: false, optional: true, required: false
  private _tokenAuthInvalidPackets?: number; 
  public get tokenAuthInvalidPackets() {
    return this.getNumberAttribute('token_auth_invalid_packets');
  }
  public set tokenAuthInvalidPackets(value: number) {
    this._tokenAuthInvalidPackets = value;
  }
  public resetTokenAuthInvalidPackets() {
    this._tokenAuthInvalidPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthInvalidPacketsInput() {
    return this._tokenAuthInvalidPackets;
  }

  // token_auth_mismatched_packets - computed: false, optional: true, required: false
  private _tokenAuthMismatchedPackets?: number; 
  public get tokenAuthMismatchedPackets() {
    return this.getNumberAttribute('token_auth_mismatched_packets');
  }
  public set tokenAuthMismatchedPackets(value: number) {
    this._tokenAuthMismatchedPackets = value;
  }
  public resetTokenAuthMismatchedPackets() {
    this._tokenAuthMismatchedPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthMismatchedPacketsInput() {
    return this._tokenAuthMismatchedPackets;
  }

  // token_auth_previous_salt_matched - computed: false, optional: true, required: false
  private _tokenAuthPreviousSaltMatched?: number; 
  public get tokenAuthPreviousSaltMatched() {
    return this.getNumberAttribute('token_auth_previous_salt_matched');
  }
  public set tokenAuthPreviousSaltMatched(value: number) {
    this._tokenAuthPreviousSaltMatched = value;
  }
  public resetTokenAuthPreviousSaltMatched() {
    this._tokenAuthPreviousSaltMatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthPreviousSaltMatchedInput() {
    return this._tokenAuthPreviousSaltMatched;
  }

  // token_auth_session_created - computed: false, optional: true, required: false
  private _tokenAuthSessionCreated?: number; 
  public get tokenAuthSessionCreated() {
    return this.getNumberAttribute('token_auth_session_created');
  }
  public set tokenAuthSessionCreated(value: number) {
    this._tokenAuthSessionCreated = value;
  }
  public resetTokenAuthSessionCreated() {
    this._tokenAuthSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthSessionCreatedInput() {
    return this._tokenAuthSessionCreated;
  }

  // token_auth_session_created_fail - computed: false, optional: true, required: false
  private _tokenAuthSessionCreatedFail?: number; 
  public get tokenAuthSessionCreatedFail() {
    return this.getNumberAttribute('token_auth_session_created_fail');
  }
  public set tokenAuthSessionCreatedFail(value: number) {
    this._tokenAuthSessionCreatedFail = value;
  }
  public resetTokenAuthSessionCreatedFail() {
    this._tokenAuthSessionCreatedFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthSessionCreatedFailInput() {
    return this._tokenAuthSessionCreatedFail;
  }

  // udp_fwd_recv - computed: false, optional: true, required: false
  private _udpFwdRecv?: number; 
  public get udpFwdRecv() {
    return this.getNumberAttribute('udp_fwd_recv');
  }
  public set udpFwdRecv(value: number) {
    this._udpFwdRecv = value;
  }
  public resetUdpFwdRecv() {
    this._udpFwdRecv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFwdRecvInput() {
    return this._udpFwdRecv;
  }

  // victim_ip_aged - computed: false, optional: true, required: false
  private _victimIpAged?: number; 
  public get victimIpAged() {
    return this.getNumberAttribute('victim_ip_aged');
  }
  public set victimIpAged(value: number) {
    this._victimIpAged = value;
  }
  public resetVictimIpAged() {
    this._victimIpAged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get victimIpAgedInput() {
    return this._victimIpAged;
  }

  // victim_ip_learned - computed: false, optional: true, required: false
  private _victimIpLearned?: number; 
  public get victimIpLearned() {
    return this.getNumberAttribute('victim_ip_learned');
  }
  public set victimIpLearned(value: number) {
    this._victimIpLearned = value;
  }
  public resetVictimIpLearned() {
    this._victimIpLearned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get victimIpLearnedInput() {
    return this._victimIpLearned;
  }

  // zone_blackhole_inject - computed: false, optional: true, required: false
  private _zoneBlackholeInject?: number; 
  public get zoneBlackholeInject() {
    return this.getNumberAttribute('zone_blackhole_inject');
  }
  public set zoneBlackholeInject(value: number) {
    this._zoneBlackholeInject = value;
  }
  public resetZoneBlackholeInject() {
    this._zoneBlackholeInject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneBlackholeInjectInput() {
    return this._zoneBlackholeInject;
  }

  // zone_blackhole_withdraw - computed: false, optional: true, required: false
  private _zoneBlackholeWithdraw?: number; 
  public get zoneBlackholeWithdraw() {
    return this.getNumberAttribute('zone_blackhole_withdraw');
  }
  public set zoneBlackholeWithdraw(value: number) {
    this._zoneBlackholeWithdraw = value;
  }
  public resetZoneBlackholeWithdraw() {
    this._zoneBlackholeWithdraw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneBlackholeWithdrawInput() {
    return this._zoneBlackholeWithdraw;
  }

  // zone_frag_drop - computed: false, optional: true, required: false
  private _zoneFragDrop?: number; 
  public get zoneFragDrop() {
    return this.getNumberAttribute('zone_frag_drop');
  }
  public set zoneFragDrop(value: number) {
    this._zoneFragDrop = value;
  }
  public resetZoneFragDrop() {
    this._zoneFragDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneFragDropInput() {
    return this._zoneFragDrop;
  }

  // zone_frag_rcvd - computed: false, optional: true, required: false
  private _zoneFragRcvd?: number; 
  public get zoneFragRcvd() {
    return this.getNumberAttribute('zone_frag_rcvd');
  }
  public set zoneFragRcvd(value: number) {
    this._zoneFragRcvd = value;
  }
  public resetZoneFragRcvd() {
    this._zoneFragRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneFragRcvdInput() {
    return this._zoneFragRcvd;
  }

  // zone_icmp_bytes_drop - computed: false, optional: true, required: false
  private _zoneIcmpBytesDrop?: number; 
  public get zoneIcmpBytesDrop() {
    return this.getNumberAttribute('zone_icmp_bytes_drop');
  }
  public set zoneIcmpBytesDrop(value: number) {
    this._zoneIcmpBytesDrop = value;
  }
  public resetZoneIcmpBytesDrop() {
    this._zoneIcmpBytesDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIcmpBytesDropInput() {
    return this._zoneIcmpBytesDrop;
  }

  // zone_icmp_drop - computed: false, optional: true, required: false
  private _zoneIcmpDrop?: number; 
  public get zoneIcmpDrop() {
    return this.getNumberAttribute('zone_icmp_drop');
  }
  public set zoneIcmpDrop(value: number) {
    this._zoneIcmpDrop = value;
  }
  public resetZoneIcmpDrop() {
    this._zoneIcmpDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIcmpDropInput() {
    return this._zoneIcmpDrop;
  }

  // zone_icmp_frag_pkt_rate_exceed - computed: false, optional: true, required: false
  private _zoneIcmpFragPktRateExceed?: number; 
  public get zoneIcmpFragPktRateExceed() {
    return this.getNumberAttribute('zone_icmp_frag_pkt_rate_exceed');
  }
  public set zoneIcmpFragPktRateExceed(value: number) {
    this._zoneIcmpFragPktRateExceed = value;
  }
  public resetZoneIcmpFragPktRateExceed() {
    this._zoneIcmpFragPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIcmpFragPktRateExceedInput() {
    return this._zoneIcmpFragPktRateExceed;
  }

  // zone_icmp_frag_src_rate_drop - computed: false, optional: true, required: false
  private _zoneIcmpFragSrcRateDrop?: number; 
  public get zoneIcmpFragSrcRateDrop() {
    return this.getNumberAttribute('zone_icmp_frag_src_rate_drop');
  }
  public set zoneIcmpFragSrcRateDrop(value: number) {
    this._zoneIcmpFragSrcRateDrop = value;
  }
  public resetZoneIcmpFragSrcRateDrop() {
    this._zoneIcmpFragSrcRateDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIcmpFragSrcRateDropInput() {
    return this._zoneIcmpFragSrcRateDrop;
  }

  // zone_icmp_kibit_rate_drop - computed: false, optional: true, required: false
  private _zoneIcmpKibitRateDrop?: number; 
  public get zoneIcmpKibitRateDrop() {
    return this.getNumberAttribute('zone_icmp_kibit_rate_drop');
  }
  public set zoneIcmpKibitRateDrop(value: number) {
    this._zoneIcmpKibitRateDrop = value;
  }
  public resetZoneIcmpKibitRateDrop() {
    this._zoneIcmpKibitRateDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIcmpKibitRateDropInput() {
    return this._zoneIcmpKibitRateDrop;
  }

  // zone_icmp_pkt_rate_exceed - computed: false, optional: true, required: false
  private _zoneIcmpPktRateExceed?: number; 
  public get zoneIcmpPktRateExceed() {
    return this.getNumberAttribute('zone_icmp_pkt_rate_exceed');
  }
  public set zoneIcmpPktRateExceed(value: number) {
    this._zoneIcmpPktRateExceed = value;
  }
  public resetZoneIcmpPktRateExceed() {
    this._zoneIcmpPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIcmpPktRateExceedInput() {
    return this._zoneIcmpPktRateExceed;
  }

  // zone_icmp_pkt_rcvd - computed: false, optional: true, required: false
  private _zoneIcmpPktRcvd?: number; 
  public get zoneIcmpPktRcvd() {
    return this.getNumberAttribute('zone_icmp_pkt_rcvd');
  }
  public set zoneIcmpPktRcvd(value: number) {
    this._zoneIcmpPktRcvd = value;
  }
  public resetZoneIcmpPktRcvd() {
    this._zoneIcmpPktRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIcmpPktRcvdInput() {
    return this._zoneIcmpPktRcvd;
  }

  // zone_icmp_pkt_sent - computed: false, optional: true, required: false
  private _zoneIcmpPktSent?: number; 
  public get zoneIcmpPktSent() {
    return this.getNumberAttribute('zone_icmp_pkt_sent');
  }
  public set zoneIcmpPktSent(value: number) {
    this._zoneIcmpPktSent = value;
  }
  public resetZoneIcmpPktSent() {
    this._zoneIcmpPktSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIcmpPktSentInput() {
    return this._zoneIcmpPktSent;
  }

  // zone_icmp_src_drop - computed: false, optional: true, required: false
  private _zoneIcmpSrcDrop?: number; 
  public get zoneIcmpSrcDrop() {
    return this.getNumberAttribute('zone_icmp_src_drop');
  }
  public set zoneIcmpSrcDrop(value: number) {
    this._zoneIcmpSrcDrop = value;
  }
  public resetZoneIcmpSrcDrop() {
    this._zoneIcmpSrcDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIcmpSrcDropInput() {
    return this._zoneIcmpSrcDrop;
  }

  // zone_icmp_src_rate_drop - computed: false, optional: true, required: false
  private _zoneIcmpSrcRateDrop?: number; 
  public get zoneIcmpSrcRateDrop() {
    return this.getNumberAttribute('zone_icmp_src_rate_drop');
  }
  public set zoneIcmpSrcRateDrop(value: number) {
    this._zoneIcmpSrcRateDrop = value;
  }
  public resetZoneIcmpSrcRateDrop() {
    this._zoneIcmpSrcRateDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIcmpSrcRateDropInput() {
    return this._zoneIcmpSrcRateDrop;
  }

  // zone_ip_proto_kbit_rate_exceed - computed: false, optional: true, required: false
  private _zoneIpProtoKbitRateExceed?: number; 
  public get zoneIpProtoKbitRateExceed() {
    return this.getNumberAttribute('zone_ip_proto_kbit_rate_exceed');
  }
  public set zoneIpProtoKbitRateExceed(value: number) {
    this._zoneIpProtoKbitRateExceed = value;
  }
  public resetZoneIpProtoKbitRateExceed() {
    this._zoneIpProtoKbitRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIpProtoKbitRateExceedInput() {
    return this._zoneIpProtoKbitRateExceed;
  }

  // zone_ip_proto_pkt_rate_exceed - computed: false, optional: true, required: false
  private _zoneIpProtoPktRateExceed?: number; 
  public get zoneIpProtoPktRateExceed() {
    return this.getNumberAttribute('zone_ip_proto_pkt_rate_exceed');
  }
  public set zoneIpProtoPktRateExceed(value: number) {
    this._zoneIpProtoPktRateExceed = value;
  }
  public resetZoneIpProtoPktRateExceed() {
    this._zoneIpProtoPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIpProtoPktRateExceedInput() {
    return this._zoneIpProtoPktRateExceed;
  }

  // zone_other_bytes_drop - computed: false, optional: true, required: false
  private _zoneOtherBytesDrop?: number; 
  public get zoneOtherBytesDrop() {
    return this.getNumberAttribute('zone_other_bytes_drop');
  }
  public set zoneOtherBytesDrop(value: number) {
    this._zoneOtherBytesDrop = value;
  }
  public resetZoneOtherBytesDrop() {
    this._zoneOtherBytesDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneOtherBytesDropInput() {
    return this._zoneOtherBytesDrop;
  }

  // zone_other_drop - computed: false, optional: true, required: false
  private _zoneOtherDrop?: number; 
  public get zoneOtherDrop() {
    return this.getNumberAttribute('zone_other_drop');
  }
  public set zoneOtherDrop(value: number) {
    this._zoneOtherDrop = value;
  }
  public resetZoneOtherDrop() {
    this._zoneOtherDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneOtherDropInput() {
    return this._zoneOtherDrop;
  }

  // zone_other_filter_action_blacklist - computed: false, optional: true, required: false
  private _zoneOtherFilterActionBlacklist?: number; 
  public get zoneOtherFilterActionBlacklist() {
    return this.getNumberAttribute('zone_other_filter_action_blacklist');
  }
  public set zoneOtherFilterActionBlacklist(value: number) {
    this._zoneOtherFilterActionBlacklist = value;
  }
  public resetZoneOtherFilterActionBlacklist() {
    this._zoneOtherFilterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneOtherFilterActionBlacklistInput() {
    return this._zoneOtherFilterActionBlacklist;
  }

  // zone_other_filter_action_default_pass - computed: false, optional: true, required: false
  private _zoneOtherFilterActionDefaultPass?: number; 
  public get zoneOtherFilterActionDefaultPass() {
    return this.getNumberAttribute('zone_other_filter_action_default_pass');
  }
  public set zoneOtherFilterActionDefaultPass(value: number) {
    this._zoneOtherFilterActionDefaultPass = value;
  }
  public resetZoneOtherFilterActionDefaultPass() {
    this._zoneOtherFilterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneOtherFilterActionDefaultPassInput() {
    return this._zoneOtherFilterActionDefaultPass;
  }

  // zone_other_filter_action_drop - computed: false, optional: true, required: false
  private _zoneOtherFilterActionDrop?: number; 
  public get zoneOtherFilterActionDrop() {
    return this.getNumberAttribute('zone_other_filter_action_drop');
  }
  public set zoneOtherFilterActionDrop(value: number) {
    this._zoneOtherFilterActionDrop = value;
  }
  public resetZoneOtherFilterActionDrop() {
    this._zoneOtherFilterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneOtherFilterActionDropInput() {
    return this._zoneOtherFilterActionDrop;
  }

  // zone_other_filter_action_whitelist - computed: false, optional: true, required: false
  private _zoneOtherFilterActionWhitelist?: number; 
  public get zoneOtherFilterActionWhitelist() {
    return this.getNumberAttribute('zone_other_filter_action_whitelist');
  }
  public set zoneOtherFilterActionWhitelist(value: number) {
    this._zoneOtherFilterActionWhitelist = value;
  }
  public resetZoneOtherFilterActionWhitelist() {
    this._zoneOtherFilterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneOtherFilterActionWhitelistInput() {
    return this._zoneOtherFilterActionWhitelist;
  }

  // zone_other_filter_match - computed: false, optional: true, required: false
  private _zoneOtherFilterMatch?: number; 
  public get zoneOtherFilterMatch() {
    return this.getNumberAttribute('zone_other_filter_match');
  }
  public set zoneOtherFilterMatch(value: number) {
    this._zoneOtherFilterMatch = value;
  }
  public resetZoneOtherFilterMatch() {
    this._zoneOtherFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneOtherFilterMatchInput() {
    return this._zoneOtherFilterMatch;
  }

  // zone_other_filter_not_match - computed: false, optional: true, required: false
  private _zoneOtherFilterNotMatch?: number; 
  public get zoneOtherFilterNotMatch() {
    return this.getNumberAttribute('zone_other_filter_not_match');
  }
  public set zoneOtherFilterNotMatch(value: number) {
    this._zoneOtherFilterNotMatch = value;
  }
  public resetZoneOtherFilterNotMatch() {
    this._zoneOtherFilterNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneOtherFilterNotMatchInput() {
    return this._zoneOtherFilterNotMatch;
  }

  // zone_other_frag_pkt_rate_exceed - computed: false, optional: true, required: false
  private _zoneOtherFragPktRateExceed?: number; 
  public get zoneOtherFragPktRateExceed() {
    return this.getNumberAttribute('zone_other_frag_pkt_rate_exceed');
  }
  public set zoneOtherFragPktRateExceed(value: number) {
    this._zoneOtherFragPktRateExceed = value;
  }
  public resetZoneOtherFragPktRateExceed() {
    this._zoneOtherFragPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneOtherFragPktRateExceedInput() {
    return this._zoneOtherFragPktRateExceed;
  }

  // zone_other_frag_src_rate_drop - computed: false, optional: true, required: false
  private _zoneOtherFragSrcRateDrop?: number; 
  public get zoneOtherFragSrcRateDrop() {
    return this.getNumberAttribute('zone_other_frag_src_rate_drop');
  }
  public set zoneOtherFragSrcRateDrop(value: number) {
    this._zoneOtherFragSrcRateDrop = value;
  }
  public resetZoneOtherFragSrcRateDrop() {
    this._zoneOtherFragSrcRateDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneOtherFragSrcRateDropInput() {
    return this._zoneOtherFragSrcRateDrop;
  }

  // zone_other_kibit_rate_drop - computed: false, optional: true, required: false
  private _zoneOtherKibitRateDrop?: number; 
  public get zoneOtherKibitRateDrop() {
    return this.getNumberAttribute('zone_other_kibit_rate_drop');
  }
  public set zoneOtherKibitRateDrop(value: number) {
    this._zoneOtherKibitRateDrop = value;
  }
  public resetZoneOtherKibitRateDrop() {
    this._zoneOtherKibitRateDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneOtherKibitRateDropInput() {
    return this._zoneOtherKibitRateDrop;
  }

  // zone_other_pkt_rate_exceed - computed: false, optional: true, required: false
  private _zoneOtherPktRateExceed?: number; 
  public get zoneOtherPktRateExceed() {
    return this.getNumberAttribute('zone_other_pkt_rate_exceed');
  }
  public set zoneOtherPktRateExceed(value: number) {
    this._zoneOtherPktRateExceed = value;
  }
  public resetZoneOtherPktRateExceed() {
    this._zoneOtherPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneOtherPktRateExceedInput() {
    return this._zoneOtherPktRateExceed;
  }

  // zone_other_pkt_rcvd - computed: false, optional: true, required: false
  private _zoneOtherPktRcvd?: number; 
  public get zoneOtherPktRcvd() {
    return this.getNumberAttribute('zone_other_pkt_rcvd');
  }
  public set zoneOtherPktRcvd(value: number) {
    this._zoneOtherPktRcvd = value;
  }
  public resetZoneOtherPktRcvd() {
    this._zoneOtherPktRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneOtherPktRcvdInput() {
    return this._zoneOtherPktRcvd;
  }

  // zone_other_pkt_sent - computed: false, optional: true, required: false
  private _zoneOtherPktSent?: number; 
  public get zoneOtherPktSent() {
    return this.getNumberAttribute('zone_other_pkt_sent');
  }
  public set zoneOtherPktSent(value: number) {
    this._zoneOtherPktSent = value;
  }
  public resetZoneOtherPktSent() {
    this._zoneOtherPktSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneOtherPktSentInput() {
    return this._zoneOtherPktSent;
  }

  // zone_other_src_drop - computed: false, optional: true, required: false
  private _zoneOtherSrcDrop?: number; 
  public get zoneOtherSrcDrop() {
    return this.getNumberAttribute('zone_other_src_drop');
  }
  public set zoneOtherSrcDrop(value: number) {
    this._zoneOtherSrcDrop = value;
  }
  public resetZoneOtherSrcDrop() {
    this._zoneOtherSrcDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneOtherSrcDropInput() {
    return this._zoneOtherSrcDrop;
  }

  // zone_other_src_rate_drop - computed: false, optional: true, required: false
  private _zoneOtherSrcRateDrop?: number; 
  public get zoneOtherSrcRateDrop() {
    return this.getNumberAttribute('zone_other_src_rate_drop');
  }
  public set zoneOtherSrcRateDrop(value: number) {
    this._zoneOtherSrcRateDrop = value;
  }
  public resetZoneOtherSrcRateDrop() {
    this._zoneOtherSrcRateDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneOtherSrcRateDropInput() {
    return this._zoneOtherSrcRateDrop;
  }

  // zone_out_no_route - computed: false, optional: true, required: false
  private _zoneOutNoRoute?: number; 
  public get zoneOutNoRoute() {
    return this.getNumberAttribute('zone_out_no_route');
  }
  public set zoneOutNoRoute(value: number) {
    this._zoneOutNoRoute = value;
  }
  public resetZoneOutNoRoute() {
    this._zoneOutNoRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneOutNoRouteInput() {
    return this._zoneOutNoRoute;
  }

  // zone_payload_too_big - computed: false, optional: true, required: false
  private _zonePayloadTooBig?: number; 
  public get zonePayloadTooBig() {
    return this.getNumberAttribute('zone_payload_too_big');
  }
  public set zonePayloadTooBig(value: number) {
    this._zonePayloadTooBig = value;
  }
  public resetZonePayloadTooBig() {
    this._zonePayloadTooBig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonePayloadTooBigInput() {
    return this._zonePayloadTooBig;
  }

  // zone_payload_too_small - computed: false, optional: true, required: false
  private _zonePayloadTooSmall?: number; 
  public get zonePayloadTooSmall() {
    return this.getNumberAttribute('zone_payload_too_small');
  }
  public set zonePayloadTooSmall(value: number) {
    this._zonePayloadTooSmall = value;
  }
  public resetZonePayloadTooSmall() {
    this._zonePayloadTooSmall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonePayloadTooSmallInput() {
    return this._zonePayloadTooSmall;
  }

  // zone_pkt_sent - computed: false, optional: true, required: false
  private _zonePktSent?: number; 
  public get zonePktSent() {
    return this.getNumberAttribute('zone_pkt_sent');
  }
  public set zonePktSent(value: number) {
    this._zonePktSent = value;
  }
  public resetZonePktSent() {
    this._zonePktSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonePktSentInput() {
    return this._zonePktSent;
  }

  // zone_port_bl - computed: false, optional: true, required: false
  private _zonePortBl?: number; 
  public get zonePortBl() {
    return this.getNumberAttribute('zone_port_bl');
  }
  public set zonePortBl(value: number) {
    this._zonePortBl = value;
  }
  public resetZonePortBl() {
    this._zonePortBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonePortBlInput() {
    return this._zonePortBl;
  }

  // zone_port_conn_limit_exceed - computed: false, optional: true, required: false
  private _zonePortConnLimitExceed?: number; 
  public get zonePortConnLimitExceed() {
    return this.getNumberAttribute('zone_port_conn_limit_exceed');
  }
  public set zonePortConnLimitExceed(value: number) {
    this._zonePortConnLimitExceed = value;
  }
  public resetZonePortConnLimitExceed() {
    this._zonePortConnLimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonePortConnLimitExceedInput() {
    return this._zonePortConnLimitExceed;
  }

  // zone_port_conn_rate_exceed - computed: false, optional: true, required: false
  private _zonePortConnRateExceed?: number; 
  public get zonePortConnRateExceed() {
    return this.getNumberAttribute('zone_port_conn_rate_exceed');
  }
  public set zonePortConnRateExceed(value: number) {
    this._zonePortConnRateExceed = value;
  }
  public resetZonePortConnRateExceed() {
    this._zonePortConnRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonePortConnRateExceedInput() {
    return this._zonePortConnRateExceed;
  }

  // zone_port_kbit_rate_exceed - computed: false, optional: true, required: false
  private _zonePortKbitRateExceed?: number; 
  public get zonePortKbitRateExceed() {
    return this.getNumberAttribute('zone_port_kbit_rate_exceed');
  }
  public set zonePortKbitRateExceed(value: number) {
    this._zonePortKbitRateExceed = value;
  }
  public resetZonePortKbitRateExceed() {
    this._zonePortKbitRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonePortKbitRateExceedInput() {
    return this._zonePortKbitRateExceed;
  }

  // zone_port_kbit_rate_exceed_pkt - computed: false, optional: true, required: false
  private _zonePortKbitRateExceedPkt?: number; 
  public get zonePortKbitRateExceedPkt() {
    return this.getNumberAttribute('zone_port_kbit_rate_exceed_pkt');
  }
  public set zonePortKbitRateExceedPkt(value: number) {
    this._zonePortKbitRateExceedPkt = value;
  }
  public resetZonePortKbitRateExceedPkt() {
    this._zonePortKbitRateExceedPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonePortKbitRateExceedPktInput() {
    return this._zonePortKbitRateExceedPkt;
  }

  // zone_port_pkt_rate_exceed - computed: false, optional: true, required: false
  private _zonePortPktRateExceed?: number; 
  public get zonePortPktRateExceed() {
    return this.getNumberAttribute('zone_port_pkt_rate_exceed');
  }
  public set zonePortPktRateExceed(value: number) {
    this._zonePortPktRateExceed = value;
  }
  public resetZonePortPktRateExceed() {
    this._zonePortPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonePortPktRateExceedInput() {
    return this._zonePortPktRateExceed;
  }

  // zone_port_undef_drop - computed: false, optional: true, required: false
  private _zonePortUndefDrop?: number; 
  public get zonePortUndefDrop() {
    return this.getNumberAttribute('zone_port_undef_drop');
  }
  public set zonePortUndefDrop(value: number) {
    this._zonePortUndefDrop = value;
  }
  public resetZonePortUndefDrop() {
    this._zonePortUndefDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonePortUndefDropInput() {
    return this._zonePortUndefDrop;
  }

  // zone_port_undef_hit - computed: false, optional: true, required: false
  private _zonePortUndefHit?: number; 
  public get zonePortUndefHit() {
    return this.getNumberAttribute('zone_port_undef_hit');
  }
  public set zonePortUndefHit(value: number) {
    this._zonePortUndefHit = value;
  }
  public resetZonePortUndefHit() {
    this._zonePortUndefHit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonePortUndefHitInput() {
    return this._zonePortUndefHit;
  }

  // zone_src_port_bl - computed: false, optional: true, required: false
  private _zoneSrcPortBl?: number; 
  public get zoneSrcPortBl() {
    return this.getNumberAttribute('zone_src_port_bl');
  }
  public set zoneSrcPortBl(value: number) {
    this._zoneSrcPortBl = value;
  }
  public resetZoneSrcPortBl() {
    this._zoneSrcPortBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneSrcPortBlInput() {
    return this._zoneSrcPortBl;
  }

  // zone_src_port_conn_limit_exceed - computed: false, optional: true, required: false
  private _zoneSrcPortConnLimitExceed?: number; 
  public get zoneSrcPortConnLimitExceed() {
    return this.getNumberAttribute('zone_src_port_conn_limit_exceed');
  }
  public set zoneSrcPortConnLimitExceed(value: number) {
    this._zoneSrcPortConnLimitExceed = value;
  }
  public resetZoneSrcPortConnLimitExceed() {
    this._zoneSrcPortConnLimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneSrcPortConnLimitExceedInput() {
    return this._zoneSrcPortConnLimitExceed;
  }

  // zone_src_port_conn_rate_exceed - computed: false, optional: true, required: false
  private _zoneSrcPortConnRateExceed?: number; 
  public get zoneSrcPortConnRateExceed() {
    return this.getNumberAttribute('zone_src_port_conn_rate_exceed');
  }
  public set zoneSrcPortConnRateExceed(value: number) {
    this._zoneSrcPortConnRateExceed = value;
  }
  public resetZoneSrcPortConnRateExceed() {
    this._zoneSrcPortConnRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneSrcPortConnRateExceedInput() {
    return this._zoneSrcPortConnRateExceed;
  }

  // zone_src_port_kbit_rate_exceed - computed: false, optional: true, required: false
  private _zoneSrcPortKbitRateExceed?: number; 
  public get zoneSrcPortKbitRateExceed() {
    return this.getNumberAttribute('zone_src_port_kbit_rate_exceed');
  }
  public set zoneSrcPortKbitRateExceed(value: number) {
    this._zoneSrcPortKbitRateExceed = value;
  }
  public resetZoneSrcPortKbitRateExceed() {
    this._zoneSrcPortKbitRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneSrcPortKbitRateExceedInput() {
    return this._zoneSrcPortKbitRateExceed;
  }

  // zone_src_port_pkt_rate_exceed - computed: false, optional: true, required: false
  private _zoneSrcPortPktRateExceed?: number; 
  public get zoneSrcPortPktRateExceed() {
    return this.getNumberAttribute('zone_src_port_pkt_rate_exceed');
  }
  public set zoneSrcPortPktRateExceed(value: number) {
    this._zoneSrcPortPktRateExceed = value;
  }
  public resetZoneSrcPortPktRateExceed() {
    this._zoneSrcPortPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneSrcPortPktRateExceedInput() {
    return this._zoneSrcPortPktRateExceed;
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

  // zone_tcp_action_on_ack_blacklist - computed: false, optional: true, required: false
  private _zoneTcpActionOnAckBlacklist?: number; 
  public get zoneTcpActionOnAckBlacklist() {
    return this.getNumberAttribute('zone_tcp_action_on_ack_blacklist');
  }
  public set zoneTcpActionOnAckBlacklist(value: number) {
    this._zoneTcpActionOnAckBlacklist = value;
  }
  public resetZoneTcpActionOnAckBlacklist() {
    this._zoneTcpActionOnAckBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpActionOnAckBlacklistInput() {
    return this._zoneTcpActionOnAckBlacklist;
  }

  // zone_tcp_action_on_ack_fail - computed: false, optional: true, required: false
  private _zoneTcpActionOnAckFail?: number; 
  public get zoneTcpActionOnAckFail() {
    return this.getNumberAttribute('zone_tcp_action_on_ack_fail');
  }
  public set zoneTcpActionOnAckFail(value: number) {
    this._zoneTcpActionOnAckFail = value;
  }
  public resetZoneTcpActionOnAckFail() {
    this._zoneTcpActionOnAckFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpActionOnAckFailInput() {
    return this._zoneTcpActionOnAckFail;
  }

  // zone_tcp_action_on_ack_gap_drop - computed: false, optional: true, required: false
  private _zoneTcpActionOnAckGapDrop?: number; 
  public get zoneTcpActionOnAckGapDrop() {
    return this.getNumberAttribute('zone_tcp_action_on_ack_gap_drop');
  }
  public set zoneTcpActionOnAckGapDrop(value: number) {
    this._zoneTcpActionOnAckGapDrop = value;
  }
  public resetZoneTcpActionOnAckGapDrop() {
    this._zoneTcpActionOnAckGapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpActionOnAckGapDropInput() {
    return this._zoneTcpActionOnAckGapDrop;
  }

  // zone_tcp_action_on_ack_init - computed: false, optional: true, required: false
  private _zoneTcpActionOnAckInit?: number; 
  public get zoneTcpActionOnAckInit() {
    return this.getNumberAttribute('zone_tcp_action_on_ack_init');
  }
  public set zoneTcpActionOnAckInit(value: number) {
    this._zoneTcpActionOnAckInit = value;
  }
  public resetZoneTcpActionOnAckInit() {
    this._zoneTcpActionOnAckInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpActionOnAckInitInput() {
    return this._zoneTcpActionOnAckInit;
  }

  // zone_tcp_action_on_ack_pass - computed: false, optional: true, required: false
  private _zoneTcpActionOnAckPass?: number; 
  public get zoneTcpActionOnAckPass() {
    return this.getNumberAttribute('zone_tcp_action_on_ack_pass');
  }
  public set zoneTcpActionOnAckPass(value: number) {
    this._zoneTcpActionOnAckPass = value;
  }
  public resetZoneTcpActionOnAckPass() {
    this._zoneTcpActionOnAckPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpActionOnAckPassInput() {
    return this._zoneTcpActionOnAckPass;
  }

  // zone_tcp_action_on_ack_reset - computed: false, optional: true, required: false
  private _zoneTcpActionOnAckReset?: number; 
  public get zoneTcpActionOnAckReset() {
    return this.getNumberAttribute('zone_tcp_action_on_ack_reset');
  }
  public set zoneTcpActionOnAckReset(value: number) {
    this._zoneTcpActionOnAckReset = value;
  }
  public resetZoneTcpActionOnAckReset() {
    this._zoneTcpActionOnAckReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpActionOnAckResetInput() {
    return this._zoneTcpActionOnAckReset;
  }

  // zone_tcp_action_on_ack_timeout - computed: false, optional: true, required: false
  private _zoneTcpActionOnAckTimeout?: number; 
  public get zoneTcpActionOnAckTimeout() {
    return this.getNumberAttribute('zone_tcp_action_on_ack_timeout');
  }
  public set zoneTcpActionOnAckTimeout(value: number) {
    this._zoneTcpActionOnAckTimeout = value;
  }
  public resetZoneTcpActionOnAckTimeout() {
    this._zoneTcpActionOnAckTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpActionOnAckTimeoutInput() {
    return this._zoneTcpActionOnAckTimeout;
  }

  // zone_tcp_action_on_syn_blacklist - computed: false, optional: true, required: false
  private _zoneTcpActionOnSynBlacklist?: number; 
  public get zoneTcpActionOnSynBlacklist() {
    return this.getNumberAttribute('zone_tcp_action_on_syn_blacklist');
  }
  public set zoneTcpActionOnSynBlacklist(value: number) {
    this._zoneTcpActionOnSynBlacklist = value;
  }
  public resetZoneTcpActionOnSynBlacklist() {
    this._zoneTcpActionOnSynBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpActionOnSynBlacklistInput() {
    return this._zoneTcpActionOnSynBlacklist;
  }

  // zone_tcp_action_on_syn_fail - computed: false, optional: true, required: false
  private _zoneTcpActionOnSynFail?: number; 
  public get zoneTcpActionOnSynFail() {
    return this.getNumberAttribute('zone_tcp_action_on_syn_fail');
  }
  public set zoneTcpActionOnSynFail(value: number) {
    this._zoneTcpActionOnSynFail = value;
  }
  public resetZoneTcpActionOnSynFail() {
    this._zoneTcpActionOnSynFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpActionOnSynFailInput() {
    return this._zoneTcpActionOnSynFail;
  }

  // zone_tcp_action_on_syn_gap_drop - computed: false, optional: true, required: false
  private _zoneTcpActionOnSynGapDrop?: number; 
  public get zoneTcpActionOnSynGapDrop() {
    return this.getNumberAttribute('zone_tcp_action_on_syn_gap_drop');
  }
  public set zoneTcpActionOnSynGapDrop(value: number) {
    this._zoneTcpActionOnSynGapDrop = value;
  }
  public resetZoneTcpActionOnSynGapDrop() {
    this._zoneTcpActionOnSynGapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpActionOnSynGapDropInput() {
    return this._zoneTcpActionOnSynGapDrop;
  }

  // zone_tcp_action_on_syn_init - computed: false, optional: true, required: false
  private _zoneTcpActionOnSynInit?: number; 
  public get zoneTcpActionOnSynInit() {
    return this.getNumberAttribute('zone_tcp_action_on_syn_init');
  }
  public set zoneTcpActionOnSynInit(value: number) {
    this._zoneTcpActionOnSynInit = value;
  }
  public resetZoneTcpActionOnSynInit() {
    this._zoneTcpActionOnSynInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpActionOnSynInitInput() {
    return this._zoneTcpActionOnSynInit;
  }

  // zone_tcp_action_on_syn_pass - computed: false, optional: true, required: false
  private _zoneTcpActionOnSynPass?: number; 
  public get zoneTcpActionOnSynPass() {
    return this.getNumberAttribute('zone_tcp_action_on_syn_pass');
  }
  public set zoneTcpActionOnSynPass(value: number) {
    this._zoneTcpActionOnSynPass = value;
  }
  public resetZoneTcpActionOnSynPass() {
    this._zoneTcpActionOnSynPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpActionOnSynPassInput() {
    return this._zoneTcpActionOnSynPass;
  }

  // zone_tcp_action_on_syn_reset - computed: false, optional: true, required: false
  private _zoneTcpActionOnSynReset?: number; 
  public get zoneTcpActionOnSynReset() {
    return this.getNumberAttribute('zone_tcp_action_on_syn_reset');
  }
  public set zoneTcpActionOnSynReset(value: number) {
    this._zoneTcpActionOnSynReset = value;
  }
  public resetZoneTcpActionOnSynReset() {
    this._zoneTcpActionOnSynReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpActionOnSynResetInput() {
    return this._zoneTcpActionOnSynReset;
  }

  // zone_tcp_action_on_syn_timeout - computed: false, optional: true, required: false
  private _zoneTcpActionOnSynTimeout?: number; 
  public get zoneTcpActionOnSynTimeout() {
    return this.getNumberAttribute('zone_tcp_action_on_syn_timeout');
  }
  public set zoneTcpActionOnSynTimeout(value: number) {
    this._zoneTcpActionOnSynTimeout = value;
  }
  public resetZoneTcpActionOnSynTimeout() {
    this._zoneTcpActionOnSynTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpActionOnSynTimeoutInput() {
    return this._zoneTcpActionOnSynTimeout;
  }

  // zone_tcp_any_exceed - computed: false, optional: true, required: false
  private _zoneTcpAnyExceed?: number; 
  public get zoneTcpAnyExceed() {
    return this.getNumberAttribute('zone_tcp_any_exceed');
  }
  public set zoneTcpAnyExceed(value: number) {
    this._zoneTcpAnyExceed = value;
  }
  public resetZoneTcpAnyExceed() {
    this._zoneTcpAnyExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpAnyExceedInput() {
    return this._zoneTcpAnyExceed;
  }

  // zone_tcp_auth - computed: false, optional: true, required: false
  private _zoneTcpAuth?: number; 
  public get zoneTcpAuth() {
    return this.getNumberAttribute('zone_tcp_auth');
  }
  public set zoneTcpAuth(value: number) {
    this._zoneTcpAuth = value;
  }
  public resetZoneTcpAuth() {
    this._zoneTcpAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpAuthInput() {
    return this._zoneTcpAuth;
  }

  // zone_tcp_auth_pass - computed: false, optional: true, required: false
  private _zoneTcpAuthPass?: number; 
  public get zoneTcpAuthPass() {
    return this.getNumberAttribute('zone_tcp_auth_pass');
  }
  public set zoneTcpAuthPass(value: number) {
    this._zoneTcpAuthPass = value;
  }
  public resetZoneTcpAuthPass() {
    this._zoneTcpAuthPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpAuthPassInput() {
    return this._zoneTcpAuthPass;
  }

  // zone_tcp_bytes_drop - computed: false, optional: true, required: false
  private _zoneTcpBytesDrop?: number; 
  public get zoneTcpBytesDrop() {
    return this.getNumberAttribute('zone_tcp_bytes_drop');
  }
  public set zoneTcpBytesDrop(value: number) {
    this._zoneTcpBytesDrop = value;
  }
  public resetZoneTcpBytesDrop() {
    this._zoneTcpBytesDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpBytesDropInput() {
    return this._zoneTcpBytesDrop;
  }

  // zone_tcp_conn_limit_exceed - computed: false, optional: true, required: false
  private _zoneTcpConnLimitExceed?: number; 
  public get zoneTcpConnLimitExceed() {
    return this.getNumberAttribute('zone_tcp_conn_limit_exceed');
  }
  public set zoneTcpConnLimitExceed(value: number) {
    this._zoneTcpConnLimitExceed = value;
  }
  public resetZoneTcpConnLimitExceed() {
    this._zoneTcpConnLimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpConnLimitExceedInput() {
    return this._zoneTcpConnLimitExceed;
  }

  // zone_tcp_conn_prate_excd - computed: false, optional: true, required: false
  private _zoneTcpConnPrateExcd?: number; 
  public get zoneTcpConnPrateExcd() {
    return this.getNumberAttribute('zone_tcp_conn_prate_excd');
  }
  public set zoneTcpConnPrateExcd(value: number) {
    this._zoneTcpConnPrateExcd = value;
  }
  public resetZoneTcpConnPrateExcd() {
    this._zoneTcpConnPrateExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpConnPrateExcdInput() {
    return this._zoneTcpConnPrateExcd;
  }

  // zone_tcp_conn_rate_exceed - computed: false, optional: true, required: false
  private _zoneTcpConnRateExceed?: number; 
  public get zoneTcpConnRateExceed() {
    return this.getNumberAttribute('zone_tcp_conn_rate_exceed');
  }
  public set zoneTcpConnRateExceed(value: number) {
    this._zoneTcpConnRateExceed = value;
  }
  public resetZoneTcpConnRateExceed() {
    this._zoneTcpConnRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpConnRateExceedInput() {
    return this._zoneTcpConnRateExceed;
  }

  // zone_tcp_drop - computed: false, optional: true, required: false
  private _zoneTcpDrop?: number; 
  public get zoneTcpDrop() {
    return this.getNumberAttribute('zone_tcp_drop');
  }
  public set zoneTcpDrop(value: number) {
    this._zoneTcpDrop = value;
  }
  public resetZoneTcpDrop() {
    this._zoneTcpDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpDropInput() {
    return this._zoneTcpDrop;
  }

  // zone_tcp_filter_action_blacklist - computed: false, optional: true, required: false
  private _zoneTcpFilterActionBlacklist?: number; 
  public get zoneTcpFilterActionBlacklist() {
    return this.getNumberAttribute('zone_tcp_filter_action_blacklist');
  }
  public set zoneTcpFilterActionBlacklist(value: number) {
    this._zoneTcpFilterActionBlacklist = value;
  }
  public resetZoneTcpFilterActionBlacklist() {
    this._zoneTcpFilterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpFilterActionBlacklistInput() {
    return this._zoneTcpFilterActionBlacklist;
  }

  // zone_tcp_filter_action_default_pass - computed: false, optional: true, required: false
  private _zoneTcpFilterActionDefaultPass?: number; 
  public get zoneTcpFilterActionDefaultPass() {
    return this.getNumberAttribute('zone_tcp_filter_action_default_pass');
  }
  public set zoneTcpFilterActionDefaultPass(value: number) {
    this._zoneTcpFilterActionDefaultPass = value;
  }
  public resetZoneTcpFilterActionDefaultPass() {
    this._zoneTcpFilterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpFilterActionDefaultPassInput() {
    return this._zoneTcpFilterActionDefaultPass;
  }

  // zone_tcp_filter_action_drop - computed: false, optional: true, required: false
  private _zoneTcpFilterActionDrop?: number; 
  public get zoneTcpFilterActionDrop() {
    return this.getNumberAttribute('zone_tcp_filter_action_drop');
  }
  public set zoneTcpFilterActionDrop(value: number) {
    this._zoneTcpFilterActionDrop = value;
  }
  public resetZoneTcpFilterActionDrop() {
    this._zoneTcpFilterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpFilterActionDropInput() {
    return this._zoneTcpFilterActionDrop;
  }

  // zone_tcp_filter_action_whitelist - computed: false, optional: true, required: false
  private _zoneTcpFilterActionWhitelist?: number; 
  public get zoneTcpFilterActionWhitelist() {
    return this.getNumberAttribute('zone_tcp_filter_action_whitelist');
  }
  public set zoneTcpFilterActionWhitelist(value: number) {
    this._zoneTcpFilterActionWhitelist = value;
  }
  public resetZoneTcpFilterActionWhitelist() {
    this._zoneTcpFilterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpFilterActionWhitelistInput() {
    return this._zoneTcpFilterActionWhitelist;
  }

  // zone_tcp_filter_match - computed: false, optional: true, required: false
  private _zoneTcpFilterMatch?: number; 
  public get zoneTcpFilterMatch() {
    return this.getNumberAttribute('zone_tcp_filter_match');
  }
  public set zoneTcpFilterMatch(value: number) {
    this._zoneTcpFilterMatch = value;
  }
  public resetZoneTcpFilterMatch() {
    this._zoneTcpFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpFilterMatchInput() {
    return this._zoneTcpFilterMatch;
  }

  // zone_tcp_filter_not_match - computed: false, optional: true, required: false
  private _zoneTcpFilterNotMatch?: number; 
  public get zoneTcpFilterNotMatch() {
    return this.getNumberAttribute('zone_tcp_filter_not_match');
  }
  public set zoneTcpFilterNotMatch(value: number) {
    this._zoneTcpFilterNotMatch = value;
  }
  public resetZoneTcpFilterNotMatch() {
    this._zoneTcpFilterNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpFilterNotMatchInput() {
    return this._zoneTcpFilterNotMatch;
  }

  // zone_tcp_frag_pkt_rate_exceed - computed: false, optional: true, required: false
  private _zoneTcpFragPktRateExceed?: number; 
  public get zoneTcpFragPktRateExceed() {
    return this.getNumberAttribute('zone_tcp_frag_pkt_rate_exceed');
  }
  public set zoneTcpFragPktRateExceed(value: number) {
    this._zoneTcpFragPktRateExceed = value;
  }
  public resetZoneTcpFragPktRateExceed() {
    this._zoneTcpFragPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpFragPktRateExceedInput() {
    return this._zoneTcpFragPktRateExceed;
  }

  // zone_tcp_frag_src_rate_drop - computed: false, optional: true, required: false
  private _zoneTcpFragSrcRateDrop?: number; 
  public get zoneTcpFragSrcRateDrop() {
    return this.getNumberAttribute('zone_tcp_frag_src_rate_drop');
  }
  public set zoneTcpFragSrcRateDrop(value: number) {
    this._zoneTcpFragSrcRateDrop = value;
  }
  public resetZoneTcpFragSrcRateDrop() {
    this._zoneTcpFragSrcRateDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpFragSrcRateDropInput() {
    return this._zoneTcpFragSrcRateDrop;
  }

  // zone_tcp_kibit_rate_drop - computed: false, optional: true, required: false
  private _zoneTcpKibitRateDrop?: number; 
  public get zoneTcpKibitRateDrop() {
    return this.getNumberAttribute('zone_tcp_kibit_rate_drop');
  }
  public set zoneTcpKibitRateDrop(value: number) {
    this._zoneTcpKibitRateDrop = value;
  }
  public resetZoneTcpKibitRateDrop() {
    this._zoneTcpKibitRateDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpKibitRateDropInput() {
    return this._zoneTcpKibitRateDrop;
  }

  // zone_tcp_out_of_seq_excd - computed: false, optional: true, required: false
  private _zoneTcpOutOfSeqExcd?: number; 
  public get zoneTcpOutOfSeqExcd() {
    return this.getNumberAttribute('zone_tcp_out_of_seq_excd');
  }
  public set zoneTcpOutOfSeqExcd(value: number) {
    this._zoneTcpOutOfSeqExcd = value;
  }
  public resetZoneTcpOutOfSeqExcd() {
    this._zoneTcpOutOfSeqExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpOutOfSeqExcdInput() {
    return this._zoneTcpOutOfSeqExcd;
  }

  // zone_tcp_pkt_rate_exceed - computed: false, optional: true, required: false
  private _zoneTcpPktRateExceed?: number; 
  public get zoneTcpPktRateExceed() {
    return this.getNumberAttribute('zone_tcp_pkt_rate_exceed');
  }
  public set zoneTcpPktRateExceed(value: number) {
    this._zoneTcpPktRateExceed = value;
  }
  public resetZoneTcpPktRateExceed() {
    this._zoneTcpPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpPktRateExceedInput() {
    return this._zoneTcpPktRateExceed;
  }

  // zone_tcp_pkt_rcvd - computed: false, optional: true, required: false
  private _zoneTcpPktRcvd?: number; 
  public get zoneTcpPktRcvd() {
    return this.getNumberAttribute('zone_tcp_pkt_rcvd');
  }
  public set zoneTcpPktRcvd(value: number) {
    this._zoneTcpPktRcvd = value;
  }
  public resetZoneTcpPktRcvd() {
    this._zoneTcpPktRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpPktRcvdInput() {
    return this._zoneTcpPktRcvd;
  }

  // zone_tcp_pkt_sent - computed: false, optional: true, required: false
  private _zoneTcpPktSent?: number; 
  public get zoneTcpPktSent() {
    return this.getNumberAttribute('zone_tcp_pkt_sent');
  }
  public set zoneTcpPktSent(value: number) {
    this._zoneTcpPktSent = value;
  }
  public resetZoneTcpPktSent() {
    this._zoneTcpPktSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpPktSentInput() {
    return this._zoneTcpPktSent;
  }

  // zone_tcp_port_any_exceed - computed: false, optional: true, required: false
  private _zoneTcpPortAnyExceed?: number; 
  public get zoneTcpPortAnyExceed() {
    return this.getNumberAttribute('zone_tcp_port_any_exceed');
  }
  public set zoneTcpPortAnyExceed(value: number) {
    this._zoneTcpPortAnyExceed = value;
  }
  public resetZoneTcpPortAnyExceed() {
    this._zoneTcpPortAnyExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpPortAnyExceedInput() {
    return this._zoneTcpPortAnyExceed;
  }

  // zone_tcp_retransmit_excd - computed: false, optional: true, required: false
  private _zoneTcpRetransmitExcd?: number; 
  public get zoneTcpRetransmitExcd() {
    return this.getNumberAttribute('zone_tcp_retransmit_excd');
  }
  public set zoneTcpRetransmitExcd(value: number) {
    this._zoneTcpRetransmitExcd = value;
  }
  public resetZoneTcpRetransmitExcd() {
    this._zoneTcpRetransmitExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpRetransmitExcdInput() {
    return this._zoneTcpRetransmitExcd;
  }

  // zone_tcp_rst_cookie_fail - computed: false, optional: true, required: false
  private _zoneTcpRstCookieFail?: number; 
  public get zoneTcpRstCookieFail() {
    return this.getNumberAttribute('zone_tcp_rst_cookie_fail');
  }
  public set zoneTcpRstCookieFail(value: number) {
    this._zoneTcpRstCookieFail = value;
  }
  public resetZoneTcpRstCookieFail() {
    this._zoneTcpRstCookieFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpRstCookieFailInput() {
    return this._zoneTcpRstCookieFail;
  }

  // zone_tcp_session_created - computed: false, optional: true, required: false
  private _zoneTcpSessionCreated?: number; 
  public get zoneTcpSessionCreated() {
    return this.getNumberAttribute('zone_tcp_session_created');
  }
  public set zoneTcpSessionCreated(value: number) {
    this._zoneTcpSessionCreated = value;
  }
  public resetZoneTcpSessionCreated() {
    this._zoneTcpSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpSessionCreatedInput() {
    return this._zoneTcpSessionCreated;
  }

  // zone_tcp_small_window_excd - computed: false, optional: true, required: false
  private _zoneTcpSmallWindowExcd?: number; 
  public get zoneTcpSmallWindowExcd() {
    return this.getNumberAttribute('zone_tcp_small_window_excd');
  }
  public set zoneTcpSmallWindowExcd(value: number) {
    this._zoneTcpSmallWindowExcd = value;
  }
  public resetZoneTcpSmallWindowExcd() {
    this._zoneTcpSmallWindowExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpSmallWindowExcdInput() {
    return this._zoneTcpSmallWindowExcd;
  }

  // zone_tcp_src_drop - computed: false, optional: true, required: false
  private _zoneTcpSrcDrop?: number; 
  public get zoneTcpSrcDrop() {
    return this.getNumberAttribute('zone_tcp_src_drop');
  }
  public set zoneTcpSrcDrop(value: number) {
    this._zoneTcpSrcDrop = value;
  }
  public resetZoneTcpSrcDrop() {
    this._zoneTcpSrcDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpSrcDropInput() {
    return this._zoneTcpSrcDrop;
  }

  // zone_tcp_src_rate_drop - computed: false, optional: true, required: false
  private _zoneTcpSrcRateDrop?: number; 
  public get zoneTcpSrcRateDrop() {
    return this.getNumberAttribute('zone_tcp_src_rate_drop');
  }
  public set zoneTcpSrcRateDrop(value: number) {
    this._zoneTcpSrcRateDrop = value;
  }
  public resetZoneTcpSrcRateDrop() {
    this._zoneTcpSrcRateDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpSrcRateDropInput() {
    return this._zoneTcpSrcRateDrop;
  }

  // zone_tcp_syn - computed: false, optional: true, required: false
  private _zoneTcpSyn?: number; 
  public get zoneTcpSyn() {
    return this.getNumberAttribute('zone_tcp_syn');
  }
  public set zoneTcpSyn(value: number) {
    this._zoneTcpSyn = value;
  }
  public resetZoneTcpSyn() {
    this._zoneTcpSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpSynInput() {
    return this._zoneTcpSyn;
  }

  // zone_tcp_syn_drop - computed: false, optional: true, required: false
  private _zoneTcpSynDrop?: number; 
  public get zoneTcpSynDrop() {
    return this.getNumberAttribute('zone_tcp_syn_drop');
  }
  public set zoneTcpSynDrop(value: number) {
    this._zoneTcpSynDrop = value;
  }
  public resetZoneTcpSynDrop() {
    this._zoneTcpSynDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpSynDropInput() {
    return this._zoneTcpSynDrop;
  }

  // zone_tcp_unauth_drop - computed: false, optional: true, required: false
  private _zoneTcpUnauthDrop?: number; 
  public get zoneTcpUnauthDrop() {
    return this.getNumberAttribute('zone_tcp_unauth_drop');
  }
  public set zoneTcpUnauthDrop(value: number) {
    this._zoneTcpUnauthDrop = value;
  }
  public resetZoneTcpUnauthDrop() {
    this._zoneTcpUnauthDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpUnauthDropInput() {
    return this._zoneTcpUnauthDrop;
  }

  // zone_tcp_wellknown_sport_drop - computed: false, optional: true, required: false
  private _zoneTcpWellknownSportDrop?: number; 
  public get zoneTcpWellknownSportDrop() {
    return this.getNumberAttribute('zone_tcp_wellknown_sport_drop');
  }
  public set zoneTcpWellknownSportDrop(value: number) {
    this._zoneTcpWellknownSportDrop = value;
  }
  public resetZoneTcpWellknownSportDrop() {
    this._zoneTcpWellknownSportDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpWellknownSportDropInput() {
    return this._zoneTcpWellknownSportDrop;
  }

  // zone_tcp_zero_window_excd - computed: false, optional: true, required: false
  private _zoneTcpZeroWindowExcd?: number; 
  public get zoneTcpZeroWindowExcd() {
    return this.getNumberAttribute('zone_tcp_zero_window_excd');
  }
  public set zoneTcpZeroWindowExcd(value: number) {
    this._zoneTcpZeroWindowExcd = value;
  }
  public resetZoneTcpZeroWindowExcd() {
    this._zoneTcpZeroWindowExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneTcpZeroWindowExcdInput() {
    return this._zoneTcpZeroWindowExcd;
  }

  // zone_udp_any_exceed - computed: false, optional: true, required: false
  private _zoneUdpAnyExceed?: number; 
  public get zoneUdpAnyExceed() {
    return this.getNumberAttribute('zone_udp_any_exceed');
  }
  public set zoneUdpAnyExceed(value: number) {
    this._zoneUdpAnyExceed = value;
  }
  public resetZoneUdpAnyExceed() {
    this._zoneUdpAnyExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneUdpAnyExceedInput() {
    return this._zoneUdpAnyExceed;
  }

  // zone_udp_bytes_drop - computed: false, optional: true, required: false
  private _zoneUdpBytesDrop?: number; 
  public get zoneUdpBytesDrop() {
    return this.getNumberAttribute('zone_udp_bytes_drop');
  }
  public set zoneUdpBytesDrop(value: number) {
    this._zoneUdpBytesDrop = value;
  }
  public resetZoneUdpBytesDrop() {
    this._zoneUdpBytesDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneUdpBytesDropInput() {
    return this._zoneUdpBytesDrop;
  }

  // zone_udp_conn_limit_exceed - computed: false, optional: true, required: false
  private _zoneUdpConnLimitExceed?: number; 
  public get zoneUdpConnLimitExceed() {
    return this.getNumberAttribute('zone_udp_conn_limit_exceed');
  }
  public set zoneUdpConnLimitExceed(value: number) {
    this._zoneUdpConnLimitExceed = value;
  }
  public resetZoneUdpConnLimitExceed() {
    this._zoneUdpConnLimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneUdpConnLimitExceedInput() {
    return this._zoneUdpConnLimitExceed;
  }

  // zone_udp_conn_prate_excd - computed: false, optional: true, required: false
  private _zoneUdpConnPrateExcd?: number; 
  public get zoneUdpConnPrateExcd() {
    return this.getNumberAttribute('zone_udp_conn_prate_excd');
  }
  public set zoneUdpConnPrateExcd(value: number) {
    this._zoneUdpConnPrateExcd = value;
  }
  public resetZoneUdpConnPrateExcd() {
    this._zoneUdpConnPrateExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneUdpConnPrateExcdInput() {
    return this._zoneUdpConnPrateExcd;
  }

  // zone_udp_conn_rate_exceed - computed: false, optional: true, required: false
  private _zoneUdpConnRateExceed?: number; 
  public get zoneUdpConnRateExceed() {
    return this.getNumberAttribute('zone_udp_conn_rate_exceed');
  }
  public set zoneUdpConnRateExceed(value: number) {
    this._zoneUdpConnRateExceed = value;
  }
  public resetZoneUdpConnRateExceed() {
    this._zoneUdpConnRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneUdpConnRateExceedInput() {
    return this._zoneUdpConnRateExceed;
  }

  // zone_udp_drop - computed: false, optional: true, required: false
  private _zoneUdpDrop?: number; 
  public get zoneUdpDrop() {
    return this.getNumberAttribute('zone_udp_drop');
  }
  public set zoneUdpDrop(value: number) {
    this._zoneUdpDrop = value;
  }
  public resetZoneUdpDrop() {
    this._zoneUdpDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneUdpDropInput() {
    return this._zoneUdpDrop;
  }

  // zone_udp_filter_action_blacklist - computed: false, optional: true, required: false
  private _zoneUdpFilterActionBlacklist?: number; 
  public get zoneUdpFilterActionBlacklist() {
    return this.getNumberAttribute('zone_udp_filter_action_blacklist');
  }
  public set zoneUdpFilterActionBlacklist(value: number) {
    this._zoneUdpFilterActionBlacklist = value;
  }
  public resetZoneUdpFilterActionBlacklist() {
    this._zoneUdpFilterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneUdpFilterActionBlacklistInput() {
    return this._zoneUdpFilterActionBlacklist;
  }

  // zone_udp_filter_action_default_pass - computed: false, optional: true, required: false
  private _zoneUdpFilterActionDefaultPass?: number; 
  public get zoneUdpFilterActionDefaultPass() {
    return this.getNumberAttribute('zone_udp_filter_action_default_pass');
  }
  public set zoneUdpFilterActionDefaultPass(value: number) {
    this._zoneUdpFilterActionDefaultPass = value;
  }
  public resetZoneUdpFilterActionDefaultPass() {
    this._zoneUdpFilterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneUdpFilterActionDefaultPassInput() {
    return this._zoneUdpFilterActionDefaultPass;
  }

  // zone_udp_filter_action_drop - computed: false, optional: true, required: false
  private _zoneUdpFilterActionDrop?: number; 
  public get zoneUdpFilterActionDrop() {
    return this.getNumberAttribute('zone_udp_filter_action_drop');
  }
  public set zoneUdpFilterActionDrop(value: number) {
    this._zoneUdpFilterActionDrop = value;
  }
  public resetZoneUdpFilterActionDrop() {
    this._zoneUdpFilterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneUdpFilterActionDropInput() {
    return this._zoneUdpFilterActionDrop;
  }

  // zone_udp_filter_action_whitelist - computed: false, optional: true, required: false
  private _zoneUdpFilterActionWhitelist?: number; 
  public get zoneUdpFilterActionWhitelist() {
    return this.getNumberAttribute('zone_udp_filter_action_whitelist');
  }
  public set zoneUdpFilterActionWhitelist(value: number) {
    this._zoneUdpFilterActionWhitelist = value;
  }
  public resetZoneUdpFilterActionWhitelist() {
    this._zoneUdpFilterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneUdpFilterActionWhitelistInput() {
    return this._zoneUdpFilterActionWhitelist;
  }

  // zone_udp_filter_match - computed: false, optional: true, required: false
  private _zoneUdpFilterMatch?: number; 
  public get zoneUdpFilterMatch() {
    return this.getNumberAttribute('zone_udp_filter_match');
  }
  public set zoneUdpFilterMatch(value: number) {
    this._zoneUdpFilterMatch = value;
  }
  public resetZoneUdpFilterMatch() {
    this._zoneUdpFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneUdpFilterMatchInput() {
    return this._zoneUdpFilterMatch;
  }

  // zone_udp_filter_not_match - computed: false, optional: true, required: false
  private _zoneUdpFilterNotMatch?: number; 
  public get zoneUdpFilterNotMatch() {
    return this.getNumberAttribute('zone_udp_filter_not_match');
  }
  public set zoneUdpFilterNotMatch(value: number) {
    this._zoneUdpFilterNotMatch = value;
  }
  public resetZoneUdpFilterNotMatch() {
    this._zoneUdpFilterNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneUdpFilterNotMatchInput() {
    return this._zoneUdpFilterNotMatch;
  }

  // zone_udp_frag_pkt_rate_exceed - computed: false, optional: true, required: false
  private _zoneUdpFragPktRateExceed?: number; 
  public get zoneUdpFragPktRateExceed() {
    return this.getNumberAttribute('zone_udp_frag_pkt_rate_exceed');
  }
  public set zoneUdpFragPktRateExceed(value: number) {
    this._zoneUdpFragPktRateExceed = value;
  }
  public resetZoneUdpFragPktRateExceed() {
    this._zoneUdpFragPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneUdpFragPktRateExceedInput() {
    return this._zoneUdpFragPktRateExceed;
  }

  // zone_udp_frag_src_rate_drop - computed: false, optional: true, required: false
  private _zoneUdpFragSrcRateDrop?: number; 
  public get zoneUdpFragSrcRateDrop() {
    return this.getNumberAttribute('zone_udp_frag_src_rate_drop');
  }
  public set zoneUdpFragSrcRateDrop(value: number) {
    this._zoneUdpFragSrcRateDrop = value;
  }
  public resetZoneUdpFragSrcRateDrop() {
    this._zoneUdpFragSrcRateDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneUdpFragSrcRateDropInput() {
    return this._zoneUdpFragSrcRateDrop;
  }

  // zone_udp_kibit_rate_drop - computed: false, optional: true, required: false
  private _zoneUdpKibitRateDrop?: number; 
  public get zoneUdpKibitRateDrop() {
    return this.getNumberAttribute('zone_udp_kibit_rate_drop');
  }
  public set zoneUdpKibitRateDrop(value: number) {
    this._zoneUdpKibitRateDrop = value;
  }
  public resetZoneUdpKibitRateDrop() {
    this._zoneUdpKibitRateDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneUdpKibitRateDropInput() {
    return this._zoneUdpKibitRateDrop;
  }

  // zone_udp_ntp_monlist_req - computed: false, optional: true, required: false
  private _zoneUdpNtpMonlistReq?: number; 
  public get zoneUdpNtpMonlistReq() {
    return this.getNumberAttribute('zone_udp_ntp_monlist_req');
  }
  public set zoneUdpNtpMonlistReq(value: number) {
    this._zoneUdpNtpMonlistReq = value;
  }
  public resetZoneUdpNtpMonlistReq() {
    this._zoneUdpNtpMonlistReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneUdpNtpMonlistReqInput() {
    return this._zoneUdpNtpMonlistReq;
  }

  // zone_udp_ntp_monlist_resp - computed: false, optional: true, required: false
  private _zoneUdpNtpMonlistResp?: number; 
  public get zoneUdpNtpMonlistResp() {
    return this.getNumberAttribute('zone_udp_ntp_monlist_resp');
  }
  public set zoneUdpNtpMonlistResp(value: number) {
    this._zoneUdpNtpMonlistResp = value;
  }
  public resetZoneUdpNtpMonlistResp() {
    this._zoneUdpNtpMonlistResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneUdpNtpMonlistRespInput() {
    return this._zoneUdpNtpMonlistResp;
  }

  // zone_udp_pkt_rate_exceed - computed: false, optional: true, required: false
  private _zoneUdpPktRateExceed?: number; 
  public get zoneUdpPktRateExceed() {
    return this.getNumberAttribute('zone_udp_pkt_rate_exceed');
  }
  public set zoneUdpPktRateExceed(value: number) {
    this._zoneUdpPktRateExceed = value;
  }
  public resetZoneUdpPktRateExceed() {
    this._zoneUdpPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneUdpPktRateExceedInput() {
    return this._zoneUdpPktRateExceed;
  }

  // zone_udp_pkt_rcvd - computed: false, optional: true, required: false
  private _zoneUdpPktRcvd?: number; 
  public get zoneUdpPktRcvd() {
    return this.getNumberAttribute('zone_udp_pkt_rcvd');
  }
  public set zoneUdpPktRcvd(value: number) {
    this._zoneUdpPktRcvd = value;
  }
  public resetZoneUdpPktRcvd() {
    this._zoneUdpPktRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneUdpPktRcvdInput() {
    return this._zoneUdpPktRcvd;
  }

  // zone_udp_pkt_sent - computed: false, optional: true, required: false
  private _zoneUdpPktSent?: number; 
  public get zoneUdpPktSent() {
    return this.getNumberAttribute('zone_udp_pkt_sent');
  }
  public set zoneUdpPktSent(value: number) {
    this._zoneUdpPktSent = value;
  }
  public resetZoneUdpPktSent() {
    this._zoneUdpPktSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneUdpPktSentInput() {
    return this._zoneUdpPktSent;
  }

  // zone_udp_port_any_exceed - computed: false, optional: true, required: false
  private _zoneUdpPortAnyExceed?: number; 
  public get zoneUdpPortAnyExceed() {
    return this.getNumberAttribute('zone_udp_port_any_exceed');
  }
  public set zoneUdpPortAnyExceed(value: number) {
    this._zoneUdpPortAnyExceed = value;
  }
  public resetZoneUdpPortAnyExceed() {
    this._zoneUdpPortAnyExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneUdpPortAnyExceedInput() {
    return this._zoneUdpPortAnyExceed;
  }

  // zone_udp_retry_init - computed: false, optional: true, required: false
  private _zoneUdpRetryInit?: number; 
  public get zoneUdpRetryInit() {
    return this.getNumberAttribute('zone_udp_retry_init');
  }
  public set zoneUdpRetryInit(value: number) {
    this._zoneUdpRetryInit = value;
  }
  public resetZoneUdpRetryInit() {
    this._zoneUdpRetryInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneUdpRetryInitInput() {
    return this._zoneUdpRetryInit;
  }

  // zone_udp_retry_pass - computed: false, optional: true, required: false
  private _zoneUdpRetryPass?: number; 
  public get zoneUdpRetryPass() {
    return this.getNumberAttribute('zone_udp_retry_pass');
  }
  public set zoneUdpRetryPass(value: number) {
    this._zoneUdpRetryPass = value;
  }
  public resetZoneUdpRetryPass() {
    this._zoneUdpRetryPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneUdpRetryPassInput() {
    return this._zoneUdpRetryPass;
  }

  // zone_udp_session_created - computed: false, optional: true, required: false
  private _zoneUdpSessionCreated?: number; 
  public get zoneUdpSessionCreated() {
    return this.getNumberAttribute('zone_udp_session_created');
  }
  public set zoneUdpSessionCreated(value: number) {
    this._zoneUdpSessionCreated = value;
  }
  public resetZoneUdpSessionCreated() {
    this._zoneUdpSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneUdpSessionCreatedInput() {
    return this._zoneUdpSessionCreated;
  }

  // zone_udp_src_drop - computed: false, optional: true, required: false
  private _zoneUdpSrcDrop?: number; 
  public get zoneUdpSrcDrop() {
    return this.getNumberAttribute('zone_udp_src_drop');
  }
  public set zoneUdpSrcDrop(value: number) {
    this._zoneUdpSrcDrop = value;
  }
  public resetZoneUdpSrcDrop() {
    this._zoneUdpSrcDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneUdpSrcDropInput() {
    return this._zoneUdpSrcDrop;
  }

  // zone_udp_src_rate_drop - computed: false, optional: true, required: false
  private _zoneUdpSrcRateDrop?: number; 
  public get zoneUdpSrcRateDrop() {
    return this.getNumberAttribute('zone_udp_src_rate_drop');
  }
  public set zoneUdpSrcRateDrop(value: number) {
    this._zoneUdpSrcRateDrop = value;
  }
  public resetZoneUdpSrcRateDrop() {
    this._zoneUdpSrcRateDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneUdpSrcRateDropInput() {
    return this._zoneUdpSrcRateDrop;
  }

  // zone_udp_wellknown_sport_drop - computed: false, optional: true, required: false
  private _zoneUdpWellknownSportDrop?: number; 
  public get zoneUdpWellknownSportDrop() {
    return this.getNumberAttribute('zone_udp_wellknown_sport_drop');
  }
  public set zoneUdpWellknownSportDrop(value: number) {
    this._zoneUdpWellknownSportDrop = value;
  }
  public resetZoneUdpWellknownSportDrop() {
    this._zoneUdpWellknownSportDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneUdpWellknownSportDropInput() {
    return this._zoneUdpWellknownSportDrop;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats thunder_ddos_dst_zone_stats}
*/
export class DataThunderDdosDstZoneStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDstZoneStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDstZoneStats to import
  * @param importFromId The id of the existing DataThunderDdosDstZoneStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDstZoneStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_stats thunder_ddos_dst_zone_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDstZoneStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDstZoneStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_stats',
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
  private _stats = new DataThunderDdosDstZoneStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosDstZoneStatsStats) {
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
      zone_name: cdktf.stringToTerraform(this._zoneName),
      stats: dataThunderDdosDstZoneStatsStatsToTerraform(this._stats.internalValue),
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
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderDdosDstZoneStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZoneStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
