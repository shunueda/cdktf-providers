// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDstEntryStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_entry_name DataThunderDdosDstEntryStats#dst_entry_name}
  */
  readonly dstEntryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#id DataThunderDdosDstEntryStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#stats DataThunderDdosDstEntryStats#stats}
  */
  readonly stats?: DataThunderDdosDstEntryStatsStats;
}
export interface DataThunderDdosDstEntryStatsStats {
  /**
  * DNS Outbound Query Malformed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dns_outbound_query_malformed DataThunderDdosDstEntryStats#dns_outbound_query_malformed}
  */
  readonly dnsOutboundQueryMalformed?: number;
  /**
  * DNS Outbound Query Resp Check Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dns_outbound_query_resp_chk_blacklisted DataThunderDdosDstEntryStats#dns_outbound_query_resp_chk_blacklisted}
  */
  readonly dnsOutboundQueryRespChkBlacklisted?: number;
  /**
  * DNS Outbound Query Resp Check Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dns_outbound_query_resp_chk_failed DataThunderDdosDstEntryStats#dns_outbound_query_resp_chk_failed}
  */
  readonly dnsOutboundQueryRespChkFailed?: number;
  /**
  * DNS Outbound Query Resp Check No Response Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dns_outbound_query_resp_chk_no_resp_sent DataThunderDdosDstEntryStats#dns_outbound_query_resp_chk_no_resp_sent}
  */
  readonly dnsOutboundQueryRespChkNoRespSent?: number;
  /**
  * DNS Outbound Query Resp Check REFUSED Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dns_outbound_query_resp_chk_refused_sent DataThunderDdosDstEntryStats#dns_outbound_query_resp_chk_refused_sent}
  */
  readonly dnsOutboundQueryRespChkRefusedSent?: number;
  /**
  * DNS Outbound Query Resp Check RESET Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dns_outbound_query_resp_chk_reset_sent DataThunderDdosDstEntryStats#dns_outbound_query_resp_chk_reset_sent}
  */
  readonly dnsOutboundQueryRespChkResetSent?: number;
  /**
  * DNS Outbound Query Response Size Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dns_outbound_query_resp_size_exceed DataThunderDdosDstEntryStats#dns_outbound_query_resp_size_exceed}
  */
  readonly dnsOutboundQueryRespSizeExceed?: number;
  /**
  * DNS Outbound Query Session Timed Out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dns_outbound_query_sess_timed_out DataThunderDdosDstEntryStats#dns_outbound_query_sess_timed_out}
  */
  readonly dnsOutboundQuerySessTimedOut?: number;
  /**
  * DNS Outbound Total Query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dns_outbound_total_query DataThunderDdosDstEntryStats#dns_outbound_total_query}
  */
  readonly dnsOutboundTotalQuery?: number;
  /**
  * Dst Blackhole Inject
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_blackhole_inject DataThunderDdosDstEntryStats#dst_blackhole_inject}
  */
  readonly dstBlackholeInject?: number;
  /**
  * Dst Blackhole Withdraw
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_blackhole_withdraw DataThunderDdosDstEntryStats#dst_blackhole_withdraw}
  */
  readonly dstBlackholeWithdraw?: number;
  /**
  * Dst Src-Based Overflow Policy Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_clist_overflow_policy_at_learning DataThunderDdosDstEntryStats#dst_clist_overflow_policy_at_learning}
  */
  readonly dstClistOverflowPolicyAtLearning?: number;
  /**
  * Entry Limit: Conn Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_entry_conn_limit_exceed DataThunderDdosDstEntryStats#dst_entry_conn_limit_exceed}
  */
  readonly dstEntryConnLimitExceed?: number;
  /**
  * Entry Rate: Conn Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_entry_conn_rate_exceed DataThunderDdosDstEntryStats#dst_entry_conn_rate_exceed}
  */
  readonly dstEntryConnRateExceed?: number;
  /**
  * Entry Rate: Frag Packet Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_entry_frag_pkt_rate_exceed DataThunderDdosDstEntryStats#dst_entry_frag_pkt_rate_exceed}
  */
  readonly dstEntryFragPktRateExceed?: number;
  /**
  * Entry Rate: KiBit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_entry_kbit_rate_exceed DataThunderDdosDstEntryStats#dst_entry_kbit_rate_exceed}
  */
  readonly dstEntryKbitRateExceed?: number;
  /**
  * Entry Rate: KiBit Exceeded Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_entry_kbit_rate_exceed_count DataThunderDdosDstEntryStats#dst_entry_kbit_rate_exceed_count}
  */
  readonly dstEntryKbitRateExceedCount?: number;
  /**
  * Entry Rate: Packet Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_entry_pkt_rate_exceed DataThunderDdosDstEntryStats#dst_entry_pkt_rate_exceed}
  */
  readonly dstEntryPktRateExceed?: number;
  /**
  * Entry Exceed Action: Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_exceed_action_drop DataThunderDdosDstEntryStats#dst_exceed_action_drop}
  */
  readonly dstExceedActionDrop?: number;
  /**
  * Entry Exceed Action: Tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_exceed_action_tunnel DataThunderDdosDstEntryStats#dst_exceed_action_tunnel}
  */
  readonly dstExceedActionTunnel?: number;
  /**
  * Fragmented Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_frag_drop DataThunderDdosDstEntryStats#dst_frag_drop}
  */
  readonly dstFragDrop?: number;
  /**
  * Fragmented Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_frag_rcvd DataThunderDdosDstEntryStats#dst_frag_rcvd}
  */
  readonly dstFragRcvd?: number;
  /**
  * Dst Hardware Drop Rules Inserted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_hw_drop_rule_insert DataThunderDdosDstEntryStats#dst_hw_drop_rule_insert}
  */
  readonly dstHwDropRuleInsert?: number;
  /**
  * Dst Hardware Drop Rules Removed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_hw_drop_rule_remove DataThunderDdosDstEntryStats#dst_hw_drop_rule_remove}
  */
  readonly dstHwDropRuleRemove?: number;
  /**
  * ICMP Rate: Total Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_icmp_any_exceed DataThunderDdosDstEntryStats#dst_icmp_any_exceed}
  */
  readonly dstIcmpAnyExceed?: number;
  /**
  * ICMP Total Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_icmp_bytes_drop DataThunderDdosDstEntryStats#dst_icmp_bytes_drop}
  */
  readonly dstIcmpBytesDrop?: number;
  /**
  * ICMP Total Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_icmp_bytes_rcv DataThunderDdosDstEntryStats#dst_icmp_bytes_rcv}
  */
  readonly dstIcmpBytesRcv?: number;
  /**
  * ICMP Total Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_icmp_bytes_sent DataThunderDdosDstEntryStats#dst_icmp_bytes_sent}
  */
  readonly dstIcmpBytesSent?: number;
  /**
  * ICMP Total Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_icmp_drop DataThunderDdosDstEntryStats#dst_icmp_drop}
  */
  readonly dstIcmpDrop?: number;
  /**
  * ICMP Dst L4-Type Rate: Frag Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_icmp_frag_pkt_rate_exceed DataThunderDdosDstEntryStats#dst_icmp_frag_pkt_rate_exceed}
  */
  readonly dstIcmpFragPktRateExceed?: number;
  /**
  * ICMP Src Rate: Frag Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_icmp_frag_src_rate_drop DataThunderDdosDstEntryStats#dst_icmp_frag_src_rate_drop}
  */
  readonly dstIcmpFragSrcRateDrop?: number;
  /**
  * ICMP Dst Rate: KiBit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_icmp_kibit_rate_drop DataThunderDdosDstEntryStats#dst_icmp_kibit_rate_drop}
  */
  readonly dstIcmpKibitRateDrop?: number;
  /**
  * ICMP Dst Rate: Packet Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_icmp_pkt_rate_exceed DataThunderDdosDstEntryStats#dst_icmp_pkt_rate_exceed}
  */
  readonly dstIcmpPktRateExceed?: number;
  /**
  * ICMP Total Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_icmp_pkt_rcvd DataThunderDdosDstEntryStats#dst_icmp_pkt_rcvd}
  */
  readonly dstIcmpPktRcvd?: number;
  /**
  * ICMP Total Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_icmp_pkt_sent DataThunderDdosDstEntryStats#dst_icmp_pkt_sent}
  */
  readonly dstIcmpPktSent?: number;
  /**
  * ICMP Src Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_icmp_src_drop DataThunderDdosDstEntryStats#dst_icmp_src_drop}
  */
  readonly dstIcmpSrcDrop?: number;
  /**
  * ICMP Src Rate: Total Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_icmp_src_rate_drop DataThunderDdosDstEntryStats#dst_icmp_src_rate_drop}
  */
  readonly dstIcmpSrcRateDrop?: number;
  /**
  * IP-Proto Rate: KiBit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_ip_proto_kbit_rate_exceed DataThunderDdosDstEntryStats#dst_ip_proto_kbit_rate_exceed}
  */
  readonly dstIpProtoKbitRateExceed?: number;
  /**
  * IP-Proto Rate: Packet Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_ip_proto_pkt_rate_exceed DataThunderDdosDstEntryStats#dst_ip_proto_pkt_rate_exceed}
  */
  readonly dstIpProtoPktRateExceed?: number;
  /**
  * Dst L4-type ICMP Blacklist Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_l4_icmp_blacklist_drop DataThunderDdosDstEntryStats#dst_l4_icmp_blacklist_drop}
  */
  readonly dstL4IcmpBlacklistDrop?: number;
  /**
  * Dst L4-type OTHER Blacklist Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_l4_other_blacklist_drop DataThunderDdosDstEntryStats#dst_l4_other_blacklist_drop}
  */
  readonly dstL4OtherBlacklistDrop?: number;
  /**
  * TCP Dst L4-Type Auth: SYN Cookie Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_l4_tcp_auth DataThunderDdosDstEntryStats#dst_l4_tcp_auth}
  */
  readonly dstL4TcpAuth?: number;
  /**
  * Dst L4-type TCP Blacklist Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_l4_tcp_blacklist_drop DataThunderDdosDstEntryStats#dst_l4_tcp_blacklist_drop}
  */
  readonly dstL4TcpBlacklistDrop?: number;
  /**
  * Dst L4-type UDP Blacklist Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_l4_udp_blacklist_drop DataThunderDdosDstEntryStats#dst_l4_udp_blacklist_drop}
  */
  readonly dstL4UdpBlacklistDrop?: number;
  /**
  * OTHER Rate: Total Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_other_any_exceed DataThunderDdosDstEntryStats#dst_other_any_exceed}
  */
  readonly dstOtherAnyExceed?: number;
  /**
  * OTHER Total Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_other_bytes_drop DataThunderDdosDstEntryStats#dst_other_bytes_drop}
  */
  readonly dstOtherBytesDrop?: number;
  /**
  * OTHER Total Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_other_bytes_rcv DataThunderDdosDstEntryStats#dst_other_bytes_rcv}
  */
  readonly dstOtherBytesRcv?: number;
  /**
  * OTHER Total Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_other_bytes_sent DataThunderDdosDstEntryStats#dst_other_bytes_sent}
  */
  readonly dstOtherBytesSent?: number;
  /**
  * OTHER Total Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_other_drop DataThunderDdosDstEntryStats#dst_other_drop}
  */
  readonly dstOtherDrop?: number;
  /**
  * OTHER Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_other_filter_action_blacklist DataThunderDdosDstEntryStats#dst_other_filter_action_blacklist}
  */
  readonly dstOtherFilterActionBlacklist?: number;
  /**
  * OTHER Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_other_filter_action_default_pass DataThunderDdosDstEntryStats#dst_other_filter_action_default_pass}
  */
  readonly dstOtherFilterActionDefaultPass?: number;
  /**
  * OTHER Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_other_filter_action_drop DataThunderDdosDstEntryStats#dst_other_filter_action_drop}
  */
  readonly dstOtherFilterActionDrop?: number;
  /**
  * OTHER Filter Action WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_other_filter_action_whitelist DataThunderDdosDstEntryStats#dst_other_filter_action_whitelist}
  */
  readonly dstOtherFilterActionWhitelist?: number;
  /**
  * OTHER Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_other_filter_match DataThunderDdosDstEntryStats#dst_other_filter_match}
  */
  readonly dstOtherFilterMatch?: number;
  /**
  * OTHER Filter Not Matched on Pkt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_other_filter_not_match DataThunderDdosDstEntryStats#dst_other_filter_not_match}
  */
  readonly dstOtherFilterNotMatch?: number;
  /**
  * OTHER Dst L4-Type Rate: Frag Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_other_frag_pkt_rate_exceed DataThunderDdosDstEntryStats#dst_other_frag_pkt_rate_exceed}
  */
  readonly dstOtherFragPktRateExceed?: number;
  /**
  * OTHER Src Rate: Frag Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_other_frag_src_rate_drop DataThunderDdosDstEntryStats#dst_other_frag_src_rate_drop}
  */
  readonly dstOtherFragSrcRateDrop?: number;
  /**
  * OTHER Dst L4-Type Rate: KiBit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_other_kibit_rate_drop DataThunderDdosDstEntryStats#dst_other_kibit_rate_drop}
  */
  readonly dstOtherKibitRateDrop?: number;
  /**
  * OTHER Dst L4-Type Rate: Packet Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_other_pkt_rate_exceed DataThunderDdosDstEntryStats#dst_other_pkt_rate_exceed}
  */
  readonly dstOtherPktRateExceed?: number;
  /**
  * OTHER Total Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_other_pkt_rcvd DataThunderDdosDstEntryStats#dst_other_pkt_rcvd}
  */
  readonly dstOtherPktRcvd?: number;
  /**
  * OTHER Total Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_other_pkt_sent DataThunderDdosDstEntryStats#dst_other_pkt_sent}
  */
  readonly dstOtherPktSent?: number;
  /**
  * OTHER Src Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_other_src_drop DataThunderDdosDstEntryStats#dst_other_src_drop}
  */
  readonly dstOtherSrcDrop?: number;
  /**
  * OTHER Src Rate: Total Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_other_src_rate_drop DataThunderDdosDstEntryStats#dst_other_src_rate_drop}
  */
  readonly dstOtherSrcRateDrop?: number;
  /**
  * Dst IPv4/v6 Out No Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_out_no_route DataThunderDdosDstEntryStats#dst_out_no_route}
  */
  readonly dstOutNoRoute?: number;
  /**
  * Inbound: Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_pkt_sent DataThunderDdosDstEntryStats#dst_pkt_sent}
  */
  readonly dstPktSent?: number;
  /**
  * Dst Port Blacklist Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_port_bl DataThunderDdosDstEntryStats#dst_port_bl}
  */
  readonly dstPortBl?: number;
  /**
  * Port Limit: Conn Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_port_conn_limit_exceed DataThunderDdosDstEntryStats#dst_port_conn_limit_exceed}
  */
  readonly dstPortConnLimitExceed?: number;
  /**
  * Port Rate: Conn Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_port_conn_rate_exceed DataThunderDdosDstEntryStats#dst_port_conn_rate_exceed}
  */
  readonly dstPortConnRateExceed?: number;
  /**
  * Port Rate: KiBit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_port_kbit_rate_exceed DataThunderDdosDstEntryStats#dst_port_kbit_rate_exceed}
  */
  readonly dstPortKbitRateExceed?: number;
  /**
  * Port Rate: KiBit Pkt Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_port_kbit_rate_exceed_pkt DataThunderDdosDstEntryStats#dst_port_kbit_rate_exceed_pkt}
  */
  readonly dstPortKbitRateExceedPkt?: number;
  /**
  * Port Rate: Packet Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_port_pkt_rate_exceed DataThunderDdosDstEntryStats#dst_port_pkt_rate_exceed}
  */
  readonly dstPortPktRateExceed?: number;
  /**
  * Dst Port Undefined Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_port_undef_drop DataThunderDdosDstEntryStats#dst_port_undef_drop}
  */
  readonly dstPortUndefDrop?: number;
  /**
  * Dst Port Undefined Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_port_undef_hit DataThunderDdosDstEntryStats#dst_port_undef_hit}
  */
  readonly dstPortUndefHit?: number;
  /**
  * Src Dynamic Entry Count Overflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_src_learn_overflow DataThunderDdosDstEntryStats#dst_src_learn_overflow}
  */
  readonly dstSrcLearnOverflow?: number;
  /**
  * Dst SrcPort Blacklist Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_src_port_bl DataThunderDdosDstEntryStats#dst_src_port_bl}
  */
  readonly dstSrcPortBl?: number;
  /**
  * SrcPort Limit: Conn Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_src_port_conn_limit_exceed DataThunderDdosDstEntryStats#dst_src_port_conn_limit_exceed}
  */
  readonly dstSrcPortConnLimitExceed?: number;
  /**
  * SrcPort Rate: Conn Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_src_port_conn_rate_exceed DataThunderDdosDstEntryStats#dst_src_port_conn_rate_exceed}
  */
  readonly dstSrcPortConnRateExceed?: number;
  /**
  * SrcPort Rate: KiBit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_src_port_kbit_rate_exceed DataThunderDdosDstEntryStats#dst_src_port_kbit_rate_exceed}
  */
  readonly dstSrcPortKbitRateExceed?: number;
  /**
  * SrcPort Rate: Packet Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_src_port_pkt_rate_exceed DataThunderDdosDstEntryStats#dst_src_port_pkt_rate_exceed}
  */
  readonly dstSrcPortPktRateExceed?: number;
  /**
  * TCP Auth: ACK Retry Timeout Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_action_on_ack_blacklist DataThunderDdosDstEntryStats#dst_tcp_action_on_ack_blacklist}
  */
  readonly dstTcpActionOnAckBlacklist?: number;
  /**
  * TCP Auth: ACK Retry Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_action_on_ack_fail DataThunderDdosDstEntryStats#dst_tcp_action_on_ack_fail}
  */
  readonly dstTcpActionOnAckFail?: number;
  /**
  * TCP Auth: ACK Retry Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_action_on_ack_gap_drop DataThunderDdosDstEntryStats#dst_tcp_action_on_ack_gap_drop}
  */
  readonly dstTcpActionOnAckGapDrop?: number;
  /**
  * TCP Auth: ACK Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_action_on_ack_init DataThunderDdosDstEntryStats#dst_tcp_action_on_ack_init}
  */
  readonly dstTcpActionOnAckInit?: number;
  /**
  * TCP Auth: ACK Retry Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_action_on_ack_pass DataThunderDdosDstEntryStats#dst_tcp_action_on_ack_pass}
  */
  readonly dstTcpActionOnAckPass?: number;
  /**
  * TCP Auth: ACK Retry Timeout Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_action_on_ack_reset DataThunderDdosDstEntryStats#dst_tcp_action_on_ack_reset}
  */
  readonly dstTcpActionOnAckReset?: number;
  /**
  * TCP Auth: ACK Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_action_on_ack_timeout DataThunderDdosDstEntryStats#dst_tcp_action_on_ack_timeout}
  */
  readonly dstTcpActionOnAckTimeout?: number;
  /**
  * TCP Auth: SYN Retry Timeout Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_action_on_syn_blacklist DataThunderDdosDstEntryStats#dst_tcp_action_on_syn_blacklist}
  */
  readonly dstTcpActionOnSynBlacklist?: number;
  /**
  * TCP Auth: SYN Retry Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_action_on_syn_fail DataThunderDdosDstEntryStats#dst_tcp_action_on_syn_fail}
  */
  readonly dstTcpActionOnSynFail?: number;
  /**
  * TCP Auth: SYN Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_action_on_syn_gap_drop DataThunderDdosDstEntryStats#dst_tcp_action_on_syn_gap_drop}
  */
  readonly dstTcpActionOnSynGapDrop?: number;
  /**
  * TCP Auth: SYN Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_action_on_syn_init DataThunderDdosDstEntryStats#dst_tcp_action_on_syn_init}
  */
  readonly dstTcpActionOnSynInit?: number;
  /**
  * TCP Auth: SYN Retry Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_action_on_syn_pass DataThunderDdosDstEntryStats#dst_tcp_action_on_syn_pass}
  */
  readonly dstTcpActionOnSynPass?: number;
  /**
  * TCP Auth: SYN Retry Timeout Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_action_on_syn_reset DataThunderDdosDstEntryStats#dst_tcp_action_on_syn_reset}
  */
  readonly dstTcpActionOnSynReset?: number;
  /**
  * TCP Auth: SYN Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_action_on_syn_timeout DataThunderDdosDstEntryStats#dst_tcp_action_on_syn_timeout}
  */
  readonly dstTcpActionOnSynTimeout?: number;
  /**
  * TCP Dst L4-Type Rate: Total Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_any_exceed DataThunderDdosDstEntryStats#dst_tcp_any_exceed}
  */
  readonly dstTcpAnyExceed?: number;
  /**
  * TCP Auth: SYN Cookie Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_auth DataThunderDdosDstEntryStats#dst_tcp_auth}
  */
  readonly dstTcpAuth?: number;
  /**
  * TCP Auth: Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_auth_drop DataThunderDdosDstEntryStats#dst_tcp_auth_drop}
  */
  readonly dstTcpAuthDrop?: number;
  /**
  * TCP Auth: SYN Auth Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_auth_pass DataThunderDdosDstEntryStats#dst_tcp_auth_pass}
  */
  readonly dstTcpAuthPass?: number;
  /**
  * TCP Auth: Responded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_auth_resp DataThunderDdosDstEntryStats#dst_tcp_auth_resp}
  */
  readonly dstTcpAuthResp?: number;
  /**
  * TCP Auth: Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_auth_rst DataThunderDdosDstEntryStats#dst_tcp_auth_rst}
  */
  readonly dstTcpAuthRst?: number;
  /**
  * TCP Total Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_bytes_drop DataThunderDdosDstEntryStats#dst_tcp_bytes_drop}
  */
  readonly dstTcpBytesDrop?: number;
  /**
  * TCP Total Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_bytes_rcv DataThunderDdosDstEntryStats#dst_tcp_bytes_rcv}
  */
  readonly dstTcpBytesRcv?: number;
  /**
  * TCP Total Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_bytes_sent DataThunderDdosDstEntryStats#dst_tcp_bytes_sent}
  */
  readonly dstTcpBytesSent?: number;
  /**
  * TCP Connections Closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_conn_close DataThunderDdosDstEntryStats#dst_tcp_conn_close}
  */
  readonly dstTcpConnClose?: number;
  /**
  * TCP Half Open Connections Closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_conn_close_half_open DataThunderDdosDstEntryStats#dst_tcp_conn_close_half_open}
  */
  readonly dstTcpConnCloseHalfOpen?: number;
  /**
  * TCP FIN Connections Closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_conn_close_w_fin DataThunderDdosDstEntryStats#dst_tcp_conn_close_w_fin}
  */
  readonly dstTcpConnCloseWFin?: number;
  /**
  * TCP Idle Connections Closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_conn_close_w_idle DataThunderDdosDstEntryStats#dst_tcp_conn_close_w_idle}
  */
  readonly dstTcpConnCloseWIdle?: number;
  /**
  * TCP RST Connections Closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_conn_close_w_rst DataThunderDdosDstEntryStats#dst_tcp_conn_close_w_rst}
  */
  readonly dstTcpConnCloseWRst?: number;
  /**
  * TCP Connections Created From ACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_conn_create_from_ack DataThunderDdosDstEntryStats#dst_tcp_conn_create_from_ack}
  */
  readonly dstTcpConnCreateFromAck?: number;
  /**
  * TCP Connections Created From SYN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_conn_create_from_syn DataThunderDdosDstEntryStats#dst_tcp_conn_create_from_syn}
  */
  readonly dstTcpConnCreateFromSyn?: number;
  /**
  * TCP Dst L4-Type Limit: Conn Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_conn_limit_exceed DataThunderDdosDstEntryStats#dst_tcp_conn_limit_exceed}
  */
  readonly dstTcpConnLimitExceed?: number;
  /**
  * TCP Rate: Conn Pkt Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_conn_prate_excd DataThunderDdosDstEntryStats#dst_tcp_conn_prate_excd}
  */
  readonly dstTcpConnPrateExcd?: number;
  /**
  * TCP Dst L4-Type Rate: Conn Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_conn_rate_exceed DataThunderDdosDstEntryStats#dst_tcp_conn_rate_exceed}
  */
  readonly dstTcpConnRateExceed?: number;
  /**
  * TCP Total Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_drop DataThunderDdosDstEntryStats#dst_tcp_drop}
  */
  readonly dstTcpDrop?: number;
  /**
  * TCP Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_filter_action_blacklist DataThunderDdosDstEntryStats#dst_tcp_filter_action_blacklist}
  */
  readonly dstTcpFilterActionBlacklist?: number;
  /**
  * TCP Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_filter_action_default_pass DataThunderDdosDstEntryStats#dst_tcp_filter_action_default_pass}
  */
  readonly dstTcpFilterActionDefaultPass?: number;
  /**
  * TCP Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_filter_action_drop DataThunderDdosDstEntryStats#dst_tcp_filter_action_drop}
  */
  readonly dstTcpFilterActionDrop?: number;
  /**
  * TCP Filter Action WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_filter_action_whitelist DataThunderDdosDstEntryStats#dst_tcp_filter_action_whitelist}
  */
  readonly dstTcpFilterActionWhitelist?: number;
  /**
  * TCP Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_filter_match DataThunderDdosDstEntryStats#dst_tcp_filter_match}
  */
  readonly dstTcpFilterMatch?: number;
  /**
  * TCP Filter Not Matched on Pkt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_filter_not_match DataThunderDdosDstEntryStats#dst_tcp_filter_not_match}
  */
  readonly dstTcpFilterNotMatch?: number;
  /**
  * TCP Dst L4-Type Rate: Frag Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_frag_pkt_rate_exceed DataThunderDdosDstEntryStats#dst_tcp_frag_pkt_rate_exceed}
  */
  readonly dstTcpFragPktRateExceed?: number;
  /**
  * TCP Src Rate: Frag Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_frag_src_rate_drop DataThunderDdosDstEntryStats#dst_tcp_frag_src_rate_drop}
  */
  readonly dstTcpFragSrcRateDrop?: number;
  /**
  * TCP Dst L4-Type Rate: KiBit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_kibit_rate_drop DataThunderDdosDstEntryStats#dst_tcp_kibit_rate_drop}
  */
  readonly dstTcpKibitRateDrop?: number;
  /**
  * TCP Out-Of-Seq Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_out_of_seq_excd DataThunderDdosDstEntryStats#dst_tcp_out_of_seq_excd}
  */
  readonly dstTcpOutOfSeqExcd?: number;
  /**
  * TCP Dst L4-Type Rate: Packet Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_pkt_rate_exceed DataThunderDdosDstEntryStats#dst_tcp_pkt_rate_exceed}
  */
  readonly dstTcpPktRateExceed?: number;
  /**
  * TCP Total Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_pkt_rcvd DataThunderDdosDstEntryStats#dst_tcp_pkt_rcvd}
  */
  readonly dstTcpPktRcvd?: number;
  /**
  * TCP Total Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_pkt_sent DataThunderDdosDstEntryStats#dst_tcp_pkt_sent}
  */
  readonly dstTcpPktSent?: number;
  /**
  * TCP Port Rate: Total Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_port_any_exceed DataThunderDdosDstEntryStats#dst_tcp_port_any_exceed}
  */
  readonly dstTcpPortAnyExceed?: number;
  /**
  * TCP Retransmit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_retransmit_excd DataThunderDdosDstEntryStats#dst_tcp_retransmit_excd}
  */
  readonly dstTcpRetransmitExcd?: number;
  /**
  * TCP Auth: RST Cookie Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_rst_cookie_fail DataThunderDdosDstEntryStats#dst_tcp_rst_cookie_fail}
  */
  readonly dstTcpRstCookieFail?: number;
  /**
  * TCP Sessions Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_session_aged DataThunderDdosDstEntryStats#dst_tcp_session_aged}
  */
  readonly dstTcpSessionAged?: number;
  /**
  * TCP Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_session_created DataThunderDdosDstEntryStats#dst_tcp_session_created}
  */
  readonly dstTcpSessionCreated?: number;
  /**
  * TCP Src Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_src_drop DataThunderDdosDstEntryStats#dst_tcp_src_drop}
  */
  readonly dstTcpSrcDrop?: number;
  /**
  * TCP Src Rate: Total Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_src_rate_drop DataThunderDdosDstEntryStats#dst_tcp_src_rate_drop}
  */
  readonly dstTcpSrcRateDrop?: number;
  /**
  * TCP Total SYN Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_syn DataThunderDdosDstEntryStats#dst_tcp_syn}
  */
  readonly dstTcpSyn?: number;
  /**
  * TCP SYN Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_syn_drop DataThunderDdosDstEntryStats#dst_tcp_syn_drop}
  */
  readonly dstTcpSynDrop?: number;
  /**
  * TCP Auth: Unauth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_unauth_drop DataThunderDdosDstEntryStats#dst_tcp_unauth_drop}
  */
  readonly dstTcpUnauthDrop?: number;
  /**
  * TCP SrcPort Wellknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_wellknown_sport_drop DataThunderDdosDstEntryStats#dst_tcp_wellknown_sport_drop}
  */
  readonly dstTcpWellknownSportDrop?: number;
  /**
  * TCP Zero-Window Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_tcp_zero_window_excd DataThunderDdosDstEntryStats#dst_tcp_zero_window_excd}
  */
  readonly dstTcpZeroWindowExcd?: number;
  /**
  * UDP Dst L4-Type Rate: Total Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_any_exceed DataThunderDdosDstEntryStats#dst_udp_any_exceed}
  */
  readonly dstUdpAnyExceed?: number;
  /**
  * UDP Auth: Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_auth_drop DataThunderDdosDstEntryStats#dst_udp_auth_drop}
  */
  readonly dstUdpAuthDrop?: number;
  /**
  * UDP Total Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_bytes_drop DataThunderDdosDstEntryStats#dst_udp_bytes_drop}
  */
  readonly dstUdpBytesDrop?: number;
  /**
  * UDP Total Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_bytes_rcv DataThunderDdosDstEntryStats#dst_udp_bytes_rcv}
  */
  readonly dstUdpBytesRcv?: number;
  /**
  * UDP Total Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_bytes_sent DataThunderDdosDstEntryStats#dst_udp_bytes_sent}
  */
  readonly dstUdpBytesSent?: number;
  /**
  * UDP Dst L4-Type Limit: Conn Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_conn_limit_exceed DataThunderDdosDstEntryStats#dst_udp_conn_limit_exceed}
  */
  readonly dstUdpConnLimitExceed?: number;
  /**
  * UDP Rate: Conn Pkt Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_conn_prate_excd DataThunderDdosDstEntryStats#dst_udp_conn_prate_excd}
  */
  readonly dstUdpConnPrateExcd?: number;
  /**
  * UDP Dst L4-Type Rate: Conn Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_conn_rate_exceed DataThunderDdosDstEntryStats#dst_udp_conn_rate_exceed}
  */
  readonly dstUdpConnRateExceed?: number;
  /**
  * UDP Total Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_drop DataThunderDdosDstEntryStats#dst_udp_drop}
  */
  readonly dstUdpDrop?: number;
  /**
  * UDP Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_filter_action_blacklist DataThunderDdosDstEntryStats#dst_udp_filter_action_blacklist}
  */
  readonly dstUdpFilterActionBlacklist?: number;
  /**
  * UDP Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_filter_action_default_pass DataThunderDdosDstEntryStats#dst_udp_filter_action_default_pass}
  */
  readonly dstUdpFilterActionDefaultPass?: number;
  /**
  * UDP Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_filter_action_drop DataThunderDdosDstEntryStats#dst_udp_filter_action_drop}
  */
  readonly dstUdpFilterActionDrop?: number;
  /**
  * UDP Filter Action WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_filter_action_whitelist DataThunderDdosDstEntryStats#dst_udp_filter_action_whitelist}
  */
  readonly dstUdpFilterActionWhitelist?: number;
  /**
  * UDP Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_filter_match DataThunderDdosDstEntryStats#dst_udp_filter_match}
  */
  readonly dstUdpFilterMatch?: number;
  /**
  * UDP Filter Not Matched on Pkt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_filter_not_match DataThunderDdosDstEntryStats#dst_udp_filter_not_match}
  */
  readonly dstUdpFilterNotMatch?: number;
  /**
  * UDP Dst L4-Type Rate: Frag Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_frag_pkt_rate_exceed DataThunderDdosDstEntryStats#dst_udp_frag_pkt_rate_exceed}
  */
  readonly dstUdpFragPktRateExceed?: number;
  /**
  * UDP Src Rate: Frag Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_frag_src_rate_drop DataThunderDdosDstEntryStats#dst_udp_frag_src_rate_drop}
  */
  readonly dstUdpFragSrcRateDrop?: number;
  /**
  * UDP Dst L4-Type Rate: KiBit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_kibit_rate_drop DataThunderDdosDstEntryStats#dst_udp_kibit_rate_drop}
  */
  readonly dstUdpKibitRateDrop?: number;
  /**
  * UDP NTP Monlist Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_ntp_monlist_req DataThunderDdosDstEntryStats#dst_udp_ntp_monlist_req}
  */
  readonly dstUdpNtpMonlistReq?: number;
  /**
  * UDP NTP Monlist Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_ntp_monlist_resp DataThunderDdosDstEntryStats#dst_udp_ntp_monlist_resp}
  */
  readonly dstUdpNtpMonlistResp?: number;
  /**
  * UDP Dst L4-Type Rate: Packet Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_pkt_rate_exceed DataThunderDdosDstEntryStats#dst_udp_pkt_rate_exceed}
  */
  readonly dstUdpPktRateExceed?: number;
  /**
  * UDP Total Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_pkt_rcvd DataThunderDdosDstEntryStats#dst_udp_pkt_rcvd}
  */
  readonly dstUdpPktRcvd?: number;
  /**
  * UDP Total Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_pkt_sent DataThunderDdosDstEntryStats#dst_udp_pkt_sent}
  */
  readonly dstUdpPktSent?: number;
  /**
  * UDP Port Rate: Total Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_port_any_exceed DataThunderDdosDstEntryStats#dst_udp_port_any_exceed}
  */
  readonly dstUdpPortAnyExceed?: number;
  /**
  * UDP Auth: Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_retry_fail DataThunderDdosDstEntryStats#dst_udp_retry_fail}
  */
  readonly dstUdpRetryFail?: number;
  /**
  * UDP Auth: Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_retry_gap_drop DataThunderDdosDstEntryStats#dst_udp_retry_gap_drop}
  */
  readonly dstUdpRetryGapDrop?: number;
  /**
  * UDP Auth: Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_retry_init DataThunderDdosDstEntryStats#dst_udp_retry_init}
  */
  readonly dstUdpRetryInit?: number;
  /**
  * UDP Auth: Retry Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_retry_pass DataThunderDdosDstEntryStats#dst_udp_retry_pass}
  */
  readonly dstUdpRetryPass?: number;
  /**
  * UDP Sessions Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_session_aged DataThunderDdosDstEntryStats#dst_udp_session_aged}
  */
  readonly dstUdpSessionAged?: number;
  /**
  * UDP Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_session_created DataThunderDdosDstEntryStats#dst_udp_session_created}
  */
  readonly dstUdpSessionCreated?: number;
  /**
  * UDP Src Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_src_drop DataThunderDdosDstEntryStats#dst_udp_src_drop}
  */
  readonly dstUdpSrcDrop?: number;
  /**
  * UDP Src Rate: Total Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_src_rate_drop DataThunderDdosDstEntryStats#dst_udp_src_rate_drop}
  */
  readonly dstUdpSrcRateDrop?: number;
  /**
  * UDP SrcPort Wellknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#dst_udp_wellknown_sport_drop DataThunderDdosDstEntryStats#dst_udp_wellknown_sport_drop}
  */
  readonly dstUdpWellknownSportDrop?: number;
  /**
  * Outbound: Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#egress_bytes DataThunderDdosDstEntryStats#egress_bytes}
  */
  readonly egressBytes?: number;
  /**
  * Outbound: Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#egress_packets DataThunderDdosDstEntryStats#egress_packets}
  */
  readonly egressPackets?: number;
  /**
  * Entry Sync Message Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#entry_sync_message_received DataThunderDdosDstEntryStats#entry_sync_message_received}
  */
  readonly entrySyncMessageReceived?: number;
  /**
  * Entry Sync Message Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#entry_sync_message_sent DataThunderDdosDstEntryStats#entry_sync_message_sent}
  */
  readonly entrySyncMessageSent?: number;
  /**
  * ICMP Inbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#icmp_fwd_recv DataThunderDdosDstEntryStats#icmp_fwd_recv}
  */
  readonly icmpFwdRecv?: number;
  /**
  * Inbound: Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#inbound_bytes_drop DataThunderDdosDstEntryStats#inbound_bytes_drop}
  */
  readonly inboundBytesDrop?: number;
  /**
  * Inbound: Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#inbound_bytes_sent DataThunderDdosDstEntryStats#inbound_bytes_sent}
  */
  readonly inboundBytesSent?: number;
  /**
  * Inbound: Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#inbound_pkt_drop DataThunderDdosDstEntryStats#inbound_pkt_drop}
  */
  readonly inboundPktDrop?: number;
  /**
  * Inbound: Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#ingress_bytes DataThunderDdosDstEntryStats#ingress_bytes}
  */
  readonly ingressBytes?: number;
  /**
  * Inbound: Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#ingress_packets DataThunderDdosDstEntryStats#ingress_packets}
  */
  readonly ingressPackets?: number;
  /**
  * No Policy Class-list Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#no_policy_class_list_match DataThunderDdosDstEntryStats#no_policy_class_list_match}
  */
  readonly noPolicyClassListMatch?: number;
  /**
  * Outbound: Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#outbound_bytes_drop DataThunderDdosDstEntryStats#outbound_bytes_drop}
  */
  readonly outboundBytesDrop?: number;
  /**
  * Outbound: Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#outbound_bytes_sent DataThunderDdosDstEntryStats#outbound_bytes_sent}
  */
  readonly outboundBytesSent?: number;
  /**
  * Outbound: Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#outbound_pkt_drop DataThunderDdosDstEntryStats#outbound_pkt_drop}
  */
  readonly outboundPktDrop?: number;
  /**
  * Outbound: Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#outbound_pkt_sent DataThunderDdosDstEntryStats#outbound_pkt_sent}
  */
  readonly outboundPktSent?: number;
  /**
  * Connection: Violation Exceed Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#prog_conn_exceed_bl DataThunderDdosDstEntryStats#prog_conn_exceed_bl}
  */
  readonly progConnExceedBl?: number;
  /**
  * Connection: Violation Exceed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#prog_conn_exceed_drop DataThunderDdosDstEntryStats#prog_conn_exceed_drop}
  */
  readonly progConnExceedDrop?: number;
  /**
  * Connection: Received Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#prog_conn_rcvd_exceed DataThunderDdosDstEntryStats#prog_conn_rcvd_exceed}
  */
  readonly progConnRcvdExceed?: number;
  /**
  * Connection: Received to Sent Ratio Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#prog_conn_rcvd_sent_ratio_exceed DataThunderDdosDstEntryStats#prog_conn_rcvd_sent_ratio_exceed}
  */
  readonly progConnRcvdSentRatioExceed?: number;
  /**
  * Sample Collected: Connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#prog_conn_samples DataThunderDdosDstEntryStats#prog_conn_samples}
  */
  readonly progConnSamples?: number;
  /**
  * Sample Processed: Connnection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#prog_conn_samples_processed DataThunderDdosDstEntryStats#prog_conn_samples_processed}
  */
  readonly progConnSamplesProcessed?: number;
  /**
  * Connection: Sent Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#prog_conn_sent_exceed DataThunderDdosDstEntryStats#prog_conn_sent_exceed}
  */
  readonly progConnSentExceed?: number;
  /**
  * Connection: Time Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#prog_conn_time_exceed DataThunderDdosDstEntryStats#prog_conn_time_exceed}
  */
  readonly progConnTimeExceed?: number;
  /**
  * Req-Resp: Violation Exceed Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#prog_exceed_bl DataThunderDdosDstEntryStats#prog_exceed_bl}
  */
  readonly progExceedBl?: number;
  /**
  * Req-Resp: Violation Exceed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#prog_exceed_drop DataThunderDdosDstEntryStats#prog_exceed_drop}
  */
  readonly progExceedDrop?: number;
  /**
  * Req-Resp: First Request Time Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#prog_first_req_time_exceed DataThunderDdosDstEntryStats#prog_first_req_time_exceed}
  */
  readonly progFirstReqTimeExceed?: number;
  /**
  * Req-Resp: Request to Response Time Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#prog_req_resp_time_exceed DataThunderDdosDstEntryStats#prog_req_resp_time_exceed}
  */
  readonly progReqRespTimeExceed?: number;
  /**
  * Sample Collected: Req-Resp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#prog_req_samples DataThunderDdosDstEntryStats#prog_req_samples}
  */
  readonly progReqSamples?: number;
  /**
  * Sample Processed: Req-Resp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#prog_req_samples_processed DataThunderDdosDstEntryStats#prog_req_samples_processed}
  */
  readonly progReqSamplesProcessed?: number;
  /**
  * Req-Resp: Request Length Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#prog_request_len_exceed DataThunderDdosDstEntryStats#prog_request_len_exceed}
  */
  readonly progRequestLenExceed?: number;
  /**
  * Req-Resp: Response to Request Ratio Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#prog_resp_req_ratio_exceed DataThunderDdosDstEntryStats#prog_resp_req_ratio_exceed}
  */
  readonly progRespReqRatioExceed?: number;
  /**
  * Req-Resp: Response to Request Time Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#prog_resp_req_time_exceed DataThunderDdosDstEntryStats#prog_resp_req_time_exceed}
  */
  readonly progRespReqTimeExceed?: number;
  /**
  * Req-Resp: Response Length Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#prog_response_len_exceed DataThunderDdosDstEntryStats#prog_response_len_exceed}
  */
  readonly progResponseLenExceed?: number;
  /**
  * Time Window: Violation Exceed Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#prog_win_exceed_bl DataThunderDdosDstEntryStats#prog_win_exceed_bl}
  */
  readonly progWinExceedBl?: number;
  /**
  * Time Window: Violation Exceed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#prog_win_exceed_drop DataThunderDdosDstEntryStats#prog_win_exceed_drop}
  */
  readonly progWinExceedDrop?: number;
  /**
  * Time Window: Received Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#prog_win_rcvd_exceed DataThunderDdosDstEntryStats#prog_win_rcvd_exceed}
  */
  readonly progWinRcvdExceed?: number;
  /**
  * Time Window: Received to Sent Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#prog_win_rcvd_sent_ratio_exceed DataThunderDdosDstEntryStats#prog_win_rcvd_sent_ratio_exceed}
  */
  readonly progWinRcvdSentRatioExceed?: number;
  /**
  * Sample Collected: Time Window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#prog_win_samples DataThunderDdosDstEntryStats#prog_win_samples}
  */
  readonly progWinSamples?: number;
  /**
  * Sample Processed: Time Window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#prog_win_samples_processed DataThunderDdosDstEntryStats#prog_win_samples_processed}
  */
  readonly progWinSamplesProcessed?: number;
  /**
  * Time Window: Sent Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#prog_win_sent_exceed DataThunderDdosDstEntryStats#prog_win_sent_exceed}
  */
  readonly progWinSentExceed?: number;
  /**
  * Sflow External Packets Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#sflow_external_packets_sent DataThunderDdosDstEntryStats#sflow_external_packets_sent}
  */
  readonly sflowExternalPacketsSent?: number;
  /**
  * Sflow External Samples Packed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#sflow_external_samples_packed DataThunderDdosDstEntryStats#sflow_external_samples_packed}
  */
  readonly sflowExternalSamplesPacked?: number;
  /**
  * Sflow Internal Packets Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#sflow_internal_packets_sent DataThunderDdosDstEntryStats#sflow_internal_packets_sent}
  */
  readonly sflowInternalPacketsSent?: number;
  /**
  * Sflow Internal Samples Packed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#sflow_internal_samples_packed DataThunderDdosDstEntryStats#sflow_internal_samples_packed}
  */
  readonly sflowInternalSamplesPacked?: number;
  /**
  * Src-Dst Pair Entry ICMP Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_dst_pair_entry_icmp DataThunderDdosDstEntryStats#src_dst_pair_entry_icmp}
  */
  readonly srcDstPairEntryIcmp?: number;
  /**
  * Src-Dst Pair Entry OTHER Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_dst_pair_entry_other DataThunderDdosDstEntryStats#src_dst_pair_entry_other}
  */
  readonly srcDstPairEntryOther?: number;
  /**
  * Src-Dst Pair Entry TCP Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_dst_pair_entry_tcp DataThunderDdosDstEntryStats#src_dst_pair_entry_tcp}
  */
  readonly srcDstPairEntryTcp?: number;
  /**
  * Src-Dst Pair Entry Total Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_dst_pair_entry_total DataThunderDdosDstEntryStats#src_dst_pair_entry_total}
  */
  readonly srcDstPairEntryTotal?: number;
  /**
  * Src-Dst Pair Entry UDP Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_dst_pair_entry_udp DataThunderDdosDstEntryStats#src_dst_pair_entry_udp}
  */
  readonly srcDstPairEntryUdp?: number;
  /**
  * Src Fragmented Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_frag_drop DataThunderDdosDstEntryStats#src_frag_drop}
  */
  readonly srcFragDrop?: number;
  /**
  * Src Hardware Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_hw_drop DataThunderDdosDstEntryStats#src_hw_drop}
  */
  readonly srcHwDrop?: number;
  /**
  * Src Hardware Drop Rules Inserted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_hw_drop_rule_insert DataThunderDdosDstEntryStats#src_hw_drop_rule_insert}
  */
  readonly srcHwDropRuleInsert?: number;
  /**
  * Src Hardware Drop Rules Removed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_hw_drop_rule_remove DataThunderDdosDstEntryStats#src_hw_drop_rule_remove}
  */
  readonly srcHwDropRuleRemove?: number;
  /**
  * Src L4-type ICMP Blacklist Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_l4_icmp_blacklist_drop DataThunderDdosDstEntryStats#src_l4_icmp_blacklist_drop}
  */
  readonly srcL4IcmpBlacklistDrop?: number;
  /**
  * Src L4-type OTHER Blacklist Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_l4_other_blacklist_drop DataThunderDdosDstEntryStats#src_l4_other_blacklist_drop}
  */
  readonly srcL4OtherBlacklistDrop?: number;
  /**
  * Src L4-type TCP Blacklist Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_l4_tcp_blacklist_drop DataThunderDdosDstEntryStats#src_l4_tcp_blacklist_drop}
  */
  readonly srcL4TcpBlacklistDrop?: number;
  /**
  * Src L4-type UDP Blacklist Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_l4_udp_blacklist_drop DataThunderDdosDstEntryStats#src_l4_udp_blacklist_drop}
  */
  readonly srcL4UdpBlacklistDrop?: number;
  /**
  * Src OTHER Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_other_filter_action_blacklist DataThunderDdosDstEntryStats#src_other_filter_action_blacklist}
  */
  readonly srcOtherFilterActionBlacklist?: number;
  /**
  * Src OTHER Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_other_filter_action_default_pass DataThunderDdosDstEntryStats#src_other_filter_action_default_pass}
  */
  readonly srcOtherFilterActionDefaultPass?: number;
  /**
  * Src OTHER Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_other_filter_action_drop DataThunderDdosDstEntryStats#src_other_filter_action_drop}
  */
  readonly srcOtherFilterActionDrop?: number;
  /**
  * Src OTHER Filter Action WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_other_filter_action_whitelist DataThunderDdosDstEntryStats#src_other_filter_action_whitelist}
  */
  readonly srcOtherFilterActionWhitelist?: number;
  /**
  * Src TCP Auth: ACK Retry Timeout Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_tcp_action_on_ack_blacklist DataThunderDdosDstEntryStats#src_tcp_action_on_ack_blacklist}
  */
  readonly srcTcpActionOnAckBlacklist?: number;
  /**
  * Src TCP Auth: ACK Retry Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_tcp_action_on_ack_fail DataThunderDdosDstEntryStats#src_tcp_action_on_ack_fail}
  */
  readonly srcTcpActionOnAckFail?: number;
  /**
  * Src TCP Auth: ACK Retry Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_tcp_action_on_ack_gap_drop DataThunderDdosDstEntryStats#src_tcp_action_on_ack_gap_drop}
  */
  readonly srcTcpActionOnAckGapDrop?: number;
  /**
  * Src TCP Auth: ACK Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_tcp_action_on_ack_init DataThunderDdosDstEntryStats#src_tcp_action_on_ack_init}
  */
  readonly srcTcpActionOnAckInit?: number;
  /**
  * Src TCP Auth: ACK Retry Timeout Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_tcp_action_on_ack_reset DataThunderDdosDstEntryStats#src_tcp_action_on_ack_reset}
  */
  readonly srcTcpActionOnAckReset?: number;
  /**
  * Src TCP Auth: ACK Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_tcp_action_on_ack_timeout DataThunderDdosDstEntryStats#src_tcp_action_on_ack_timeout}
  */
  readonly srcTcpActionOnAckTimeout?: number;
  /**
  * Src TCP Auth: SYN Retry Timeout Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_tcp_action_on_syn_blacklist DataThunderDdosDstEntryStats#src_tcp_action_on_syn_blacklist}
  */
  readonly srcTcpActionOnSynBlacklist?: number;
  /**
  * Src TCP Auth: SYN Retry Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_tcp_action_on_syn_fail DataThunderDdosDstEntryStats#src_tcp_action_on_syn_fail}
  */
  readonly srcTcpActionOnSynFail?: number;
  /**
  * Src TCP Auth: SYN Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_tcp_action_on_syn_gap_drop DataThunderDdosDstEntryStats#src_tcp_action_on_syn_gap_drop}
  */
  readonly srcTcpActionOnSynGapDrop?: number;
  /**
  * Src TCP Auth: SYN Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_tcp_action_on_syn_init DataThunderDdosDstEntryStats#src_tcp_action_on_syn_init}
  */
  readonly srcTcpActionOnSynInit?: number;
  /**
  * Src TCP Auth: SYN Retry Timeout Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_tcp_action_on_syn_reset DataThunderDdosDstEntryStats#src_tcp_action_on_syn_reset}
  */
  readonly srcTcpActionOnSynReset?: number;
  /**
  * Src TCP Auth: SYN Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_tcp_action_on_syn_timeout DataThunderDdosDstEntryStats#src_tcp_action_on_syn_timeout}
  */
  readonly srcTcpActionOnSynTimeout?: number;
  /**
  * Src TCP Rate: Conn Pkt Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_tcp_conn_prate_excd DataThunderDdosDstEntryStats#src_tcp_conn_prate_excd}
  */
  readonly srcTcpConnPrateExcd?: number;
  /**
  * Src TCP Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_tcp_filter_action_blacklist DataThunderDdosDstEntryStats#src_tcp_filter_action_blacklist}
  */
  readonly srcTcpFilterActionBlacklist?: number;
  /**
  * Src TCP Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_tcp_filter_action_default_pass DataThunderDdosDstEntryStats#src_tcp_filter_action_default_pass}
  */
  readonly srcTcpFilterActionDefaultPass?: number;
  /**
  * Src TCP Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_tcp_filter_action_drop DataThunderDdosDstEntryStats#src_tcp_filter_action_drop}
  */
  readonly srcTcpFilterActionDrop?: number;
  /**
  * Src TCP Filter Action WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_tcp_filter_action_whitelist DataThunderDdosDstEntryStats#src_tcp_filter_action_whitelist}
  */
  readonly srcTcpFilterActionWhitelist?: number;
  /**
  * Src TCP Out-Of-Seq Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_tcp_out_of_seq_excd DataThunderDdosDstEntryStats#src_tcp_out_of_seq_excd}
  */
  readonly srcTcpOutOfSeqExcd?: number;
  /**
  * Src TCP Retransmit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_tcp_retransmit_excd DataThunderDdosDstEntryStats#src_tcp_retransmit_excd}
  */
  readonly srcTcpRetransmitExcd?: number;
  /**
  * Src TCP Auth: RST Cookie Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_tcp_rst_cookie_fail DataThunderDdosDstEntryStats#src_tcp_rst_cookie_fail}
  */
  readonly srcTcpRstCookieFail?: number;
  /**
  * Src TCP Auth: SYN Auth Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_tcp_syn_auth_fail DataThunderDdosDstEntryStats#src_tcp_syn_auth_fail}
  */
  readonly srcTcpSynAuthFail?: number;
  /**
  * Src TCP Auth: SYN Cookie Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_tcp_syn_cookie_fail DataThunderDdosDstEntryStats#src_tcp_syn_cookie_fail}
  */
  readonly srcTcpSynCookieFail?: number;
  /**
  * Src TCP Auth: SYN Cookie Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_tcp_syn_cookie_sent DataThunderDdosDstEntryStats#src_tcp_syn_cookie_sent}
  */
  readonly srcTcpSynCookieSent?: number;
  /**
  * Src TCP Auth: Unauth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_tcp_unauth_drop DataThunderDdosDstEntryStats#src_tcp_unauth_drop}
  */
  readonly srcTcpUnauthDrop?: number;
  /**
  * Src TCP SrcPort Wellknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_tcp_wellknown_sport_drop DataThunderDdosDstEntryStats#src_tcp_wellknown_sport_drop}
  */
  readonly srcTcpWellknownSportDrop?: number;
  /**
  * Src TCP Zero-Window Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_tcp_zero_window_excd DataThunderDdosDstEntryStats#src_tcp_zero_window_excd}
  */
  readonly srcTcpZeroWindowExcd?: number;
  /**
  * Src UDP Auth: Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_udp_auth_timeout DataThunderDdosDstEntryStats#src_udp_auth_timeout}
  */
  readonly srcUdpAuthTimeout?: number;
  /**
  * Src UDP Rate: Conn Pkt Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_udp_conn_prate_excd DataThunderDdosDstEntryStats#src_udp_conn_prate_excd}
  */
  readonly srcUdpConnPrateExcd?: number;
  /**
  * Src UDP Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_udp_filter_action_blacklist DataThunderDdosDstEntryStats#src_udp_filter_action_blacklist}
  */
  readonly srcUdpFilterActionBlacklist?: number;
  /**
  * Src UDP Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_udp_filter_action_default_pass DataThunderDdosDstEntryStats#src_udp_filter_action_default_pass}
  */
  readonly srcUdpFilterActionDefaultPass?: number;
  /**
  * Src UDP Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_udp_filter_action_drop DataThunderDdosDstEntryStats#src_udp_filter_action_drop}
  */
  readonly srcUdpFilterActionDrop?: number;
  /**
  * Src UDP Filter Action WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_udp_filter_action_whitelist DataThunderDdosDstEntryStats#src_udp_filter_action_whitelist}
  */
  readonly srcUdpFilterActionWhitelist?: number;
  /**
  * Src UDP Payload Too Large
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_udp_max_payload DataThunderDdosDstEntryStats#src_udp_max_payload}
  */
  readonly srcUdpMaxPayload?: number;
  /**
  * Src UDP Payload Too Small
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_udp_min_payload DataThunderDdosDstEntryStats#src_udp_min_payload}
  */
  readonly srcUdpMinPayload?: number;
  /**
  * Src UDP NTP Monlist Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_udp_ntp_monlist_req DataThunderDdosDstEntryStats#src_udp_ntp_monlist_req}
  */
  readonly srcUdpNtpMonlistReq?: number;
  /**
  * Src UDP NTP Monlist Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_udp_ntp_monlist_resp DataThunderDdosDstEntryStats#src_udp_ntp_monlist_resp}
  */
  readonly srcUdpNtpMonlistResp?: number;
  /**
  * Src UDP Auth: Retry-Gap Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_udp_retry_gap_drop DataThunderDdosDstEntryStats#src_udp_retry_gap_drop}
  */
  readonly srcUdpRetryGapDrop?: number;
  /**
  * Src UDP Auth: Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_udp_retry_init DataThunderDdosDstEntryStats#src_udp_retry_init}
  */
  readonly srcUdpRetryInit?: number;
  /**
  * Src UDP Retry Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_udp_retry_pass DataThunderDdosDstEntryStats#src_udp_retry_pass}
  */
  readonly srcUdpRetryPass?: number;
  /**
  * Src UDP SrcPort Wellknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#src_udp_wellknown_sport_drop DataThunderDdosDstEntryStats#src_udp_wellknown_sport_drop}
  */
  readonly srcUdpWellknownSportDrop?: number;
  /**
  * TCP ACK Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#tcp_ack_rcvd DataThunderDdosDstEntryStats#tcp_ack_rcvd}
  */
  readonly tcpAckRcvd?: number;
  /**
  * TCP FIN Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#tcp_fin_rcvd DataThunderDdosDstEntryStats#tcp_fin_rcvd}
  */
  readonly tcpFinRcvd?: number;
  /**
  * TCP Inbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#tcp_fwd_recv DataThunderDdosDstEntryStats#tcp_fwd_recv}
  */
  readonly tcpFwdRecv?: number;
  /**
  * TCP Inbound Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#tcp_fwd_sent DataThunderDdosDstEntryStats#tcp_fwd_sent}
  */
  readonly tcpFwdSent?: number;
  /**
  * TCP Invalid SYN Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#tcp_invalid_syn DataThunderDdosDstEntryStats#tcp_invalid_syn}
  */
  readonly tcpInvalidSyn?: number;
  /**
  * TCP Dst L4-Type Auth: RST Cookie Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#tcp_l4_rst_cookie_fail DataThunderDdosDstEntryStats#tcp_l4_rst_cookie_fail}
  */
  readonly tcpL4RstCookieFail?: number;
  /**
  * TCP Dst L4-Type Auth: SYN Cookie Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#tcp_l4_syn_cookie_fail DataThunderDdosDstEntryStats#tcp_l4_syn_cookie_fail}
  */
  readonly tcpL4SynCookieFail?: number;
  /**
  * TCP Dst L4-Type Auth: Unauth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#tcp_l4_unauth_drop DataThunderDdosDstEntryStats#tcp_l4_unauth_drop}
  */
  readonly tcpL4UnauthDrop?: number;
  /**
  * TCP SYN Retransmit Exceeded Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#tcp_rexmit_syn_limit_bl DataThunderDdosDstEntryStats#tcp_rexmit_syn_limit_bl}
  */
  readonly tcpRexmitSynLimitBl?: number;
  /**
  * TCP SYN Retransmit Exceeded Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#tcp_rexmit_syn_limit_drop DataThunderDdosDstEntryStats#tcp_rexmit_syn_limit_drop}
  */
  readonly tcpRexmitSynLimitDrop?: number;
  /**
  * TCP RST Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#tcp_rst_rcvd DataThunderDdosDstEntryStats#tcp_rst_rcvd}
  */
  readonly tcpRstRcvd?: number;
  /**
  * TCP SYN ACK Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#tcp_syn_ack_rcvd DataThunderDdosDstEntryStats#tcp_syn_ack_rcvd}
  */
  readonly tcpSynAckRcvd?: number;
  /**
  * TCP Auth: SYN Cookie Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#tcp_syn_cookie_fail DataThunderDdosDstEntryStats#tcp_syn_cookie_fail}
  */
  readonly tcpSynCookieFail?: number;
  /**
  * TCP Inbound SYN Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#tcp_syn_rcvd DataThunderDdosDstEntryStats#tcp_syn_rcvd}
  */
  readonly tcpSynRcvd?: number;
  /**
  * UDP Inbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#udp_fwd_recv DataThunderDdosDstEntryStats#udp_fwd_recv}
  */
  readonly udpFwdRecv?: number;
  /**
  * UDP Inbound Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#udp_fwd_sent DataThunderDdosDstEntryStats#udp_fwd_sent}
  */
  readonly udpFwdSent?: number;
  /**
  * UDP Payload Too Large
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#udp_payload_too_big DataThunderDdosDstEntryStats#udp_payload_too_big}
  */
  readonly udpPayloadTooBig?: number;
  /**
  * UDP Payload Too Small
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#udp_payload_too_small DataThunderDdosDstEntryStats#udp_payload_too_small}
  */
  readonly udpPayloadTooSmall?: number;
}

export function dataThunderDdosDstEntryStatsStatsToTerraform(struct?: DataThunderDdosDstEntryStatsStatsOutputReference | DataThunderDdosDstEntryStatsStats): any {
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
    dst_blackhole_inject: cdktf.numberToTerraform(struct!.dstBlackholeInject),
    dst_blackhole_withdraw: cdktf.numberToTerraform(struct!.dstBlackholeWithdraw),
    dst_clist_overflow_policy_at_learning: cdktf.numberToTerraform(struct!.dstClistOverflowPolicyAtLearning),
    dst_entry_conn_limit_exceed: cdktf.numberToTerraform(struct!.dstEntryConnLimitExceed),
    dst_entry_conn_rate_exceed: cdktf.numberToTerraform(struct!.dstEntryConnRateExceed),
    dst_entry_frag_pkt_rate_exceed: cdktf.numberToTerraform(struct!.dstEntryFragPktRateExceed),
    dst_entry_kbit_rate_exceed: cdktf.numberToTerraform(struct!.dstEntryKbitRateExceed),
    dst_entry_kbit_rate_exceed_count: cdktf.numberToTerraform(struct!.dstEntryKbitRateExceedCount),
    dst_entry_pkt_rate_exceed: cdktf.numberToTerraform(struct!.dstEntryPktRateExceed),
    dst_exceed_action_drop: cdktf.numberToTerraform(struct!.dstExceedActionDrop),
    dst_exceed_action_tunnel: cdktf.numberToTerraform(struct!.dstExceedActionTunnel),
    dst_frag_drop: cdktf.numberToTerraform(struct!.dstFragDrop),
    dst_frag_rcvd: cdktf.numberToTerraform(struct!.dstFragRcvd),
    dst_hw_drop_rule_insert: cdktf.numberToTerraform(struct!.dstHwDropRuleInsert),
    dst_hw_drop_rule_remove: cdktf.numberToTerraform(struct!.dstHwDropRuleRemove),
    dst_icmp_any_exceed: cdktf.numberToTerraform(struct!.dstIcmpAnyExceed),
    dst_icmp_bytes_drop: cdktf.numberToTerraform(struct!.dstIcmpBytesDrop),
    dst_icmp_bytes_rcv: cdktf.numberToTerraform(struct!.dstIcmpBytesRcv),
    dst_icmp_bytes_sent: cdktf.numberToTerraform(struct!.dstIcmpBytesSent),
    dst_icmp_drop: cdktf.numberToTerraform(struct!.dstIcmpDrop),
    dst_icmp_frag_pkt_rate_exceed: cdktf.numberToTerraform(struct!.dstIcmpFragPktRateExceed),
    dst_icmp_frag_src_rate_drop: cdktf.numberToTerraform(struct!.dstIcmpFragSrcRateDrop),
    dst_icmp_kibit_rate_drop: cdktf.numberToTerraform(struct!.dstIcmpKibitRateDrop),
    dst_icmp_pkt_rate_exceed: cdktf.numberToTerraform(struct!.dstIcmpPktRateExceed),
    dst_icmp_pkt_rcvd: cdktf.numberToTerraform(struct!.dstIcmpPktRcvd),
    dst_icmp_pkt_sent: cdktf.numberToTerraform(struct!.dstIcmpPktSent),
    dst_icmp_src_drop: cdktf.numberToTerraform(struct!.dstIcmpSrcDrop),
    dst_icmp_src_rate_drop: cdktf.numberToTerraform(struct!.dstIcmpSrcRateDrop),
    dst_ip_proto_kbit_rate_exceed: cdktf.numberToTerraform(struct!.dstIpProtoKbitRateExceed),
    dst_ip_proto_pkt_rate_exceed: cdktf.numberToTerraform(struct!.dstIpProtoPktRateExceed),
    dst_l4_icmp_blacklist_drop: cdktf.numberToTerraform(struct!.dstL4IcmpBlacklistDrop),
    dst_l4_other_blacklist_drop: cdktf.numberToTerraform(struct!.dstL4OtherBlacklistDrop),
    dst_l4_tcp_auth: cdktf.numberToTerraform(struct!.dstL4TcpAuth),
    dst_l4_tcp_blacklist_drop: cdktf.numberToTerraform(struct!.dstL4TcpBlacklistDrop),
    dst_l4_udp_blacklist_drop: cdktf.numberToTerraform(struct!.dstL4UdpBlacklistDrop),
    dst_other_any_exceed: cdktf.numberToTerraform(struct!.dstOtherAnyExceed),
    dst_other_bytes_drop: cdktf.numberToTerraform(struct!.dstOtherBytesDrop),
    dst_other_bytes_rcv: cdktf.numberToTerraform(struct!.dstOtherBytesRcv),
    dst_other_bytes_sent: cdktf.numberToTerraform(struct!.dstOtherBytesSent),
    dst_other_drop: cdktf.numberToTerraform(struct!.dstOtherDrop),
    dst_other_filter_action_blacklist: cdktf.numberToTerraform(struct!.dstOtherFilterActionBlacklist),
    dst_other_filter_action_default_pass: cdktf.numberToTerraform(struct!.dstOtherFilterActionDefaultPass),
    dst_other_filter_action_drop: cdktf.numberToTerraform(struct!.dstOtherFilterActionDrop),
    dst_other_filter_action_whitelist: cdktf.numberToTerraform(struct!.dstOtherFilterActionWhitelist),
    dst_other_filter_match: cdktf.numberToTerraform(struct!.dstOtherFilterMatch),
    dst_other_filter_not_match: cdktf.numberToTerraform(struct!.dstOtherFilterNotMatch),
    dst_other_frag_pkt_rate_exceed: cdktf.numberToTerraform(struct!.dstOtherFragPktRateExceed),
    dst_other_frag_src_rate_drop: cdktf.numberToTerraform(struct!.dstOtherFragSrcRateDrop),
    dst_other_kibit_rate_drop: cdktf.numberToTerraform(struct!.dstOtherKibitRateDrop),
    dst_other_pkt_rate_exceed: cdktf.numberToTerraform(struct!.dstOtherPktRateExceed),
    dst_other_pkt_rcvd: cdktf.numberToTerraform(struct!.dstOtherPktRcvd),
    dst_other_pkt_sent: cdktf.numberToTerraform(struct!.dstOtherPktSent),
    dst_other_src_drop: cdktf.numberToTerraform(struct!.dstOtherSrcDrop),
    dst_other_src_rate_drop: cdktf.numberToTerraform(struct!.dstOtherSrcRateDrop),
    dst_out_no_route: cdktf.numberToTerraform(struct!.dstOutNoRoute),
    dst_pkt_sent: cdktf.numberToTerraform(struct!.dstPktSent),
    dst_port_bl: cdktf.numberToTerraform(struct!.dstPortBl),
    dst_port_conn_limit_exceed: cdktf.numberToTerraform(struct!.dstPortConnLimitExceed),
    dst_port_conn_rate_exceed: cdktf.numberToTerraform(struct!.dstPortConnRateExceed),
    dst_port_kbit_rate_exceed: cdktf.numberToTerraform(struct!.dstPortKbitRateExceed),
    dst_port_kbit_rate_exceed_pkt: cdktf.numberToTerraform(struct!.dstPortKbitRateExceedPkt),
    dst_port_pkt_rate_exceed: cdktf.numberToTerraform(struct!.dstPortPktRateExceed),
    dst_port_undef_drop: cdktf.numberToTerraform(struct!.dstPortUndefDrop),
    dst_port_undef_hit: cdktf.numberToTerraform(struct!.dstPortUndefHit),
    dst_src_learn_overflow: cdktf.numberToTerraform(struct!.dstSrcLearnOverflow),
    dst_src_port_bl: cdktf.numberToTerraform(struct!.dstSrcPortBl),
    dst_src_port_conn_limit_exceed: cdktf.numberToTerraform(struct!.dstSrcPortConnLimitExceed),
    dst_src_port_conn_rate_exceed: cdktf.numberToTerraform(struct!.dstSrcPortConnRateExceed),
    dst_src_port_kbit_rate_exceed: cdktf.numberToTerraform(struct!.dstSrcPortKbitRateExceed),
    dst_src_port_pkt_rate_exceed: cdktf.numberToTerraform(struct!.dstSrcPortPktRateExceed),
    dst_tcp_action_on_ack_blacklist: cdktf.numberToTerraform(struct!.dstTcpActionOnAckBlacklist),
    dst_tcp_action_on_ack_fail: cdktf.numberToTerraform(struct!.dstTcpActionOnAckFail),
    dst_tcp_action_on_ack_gap_drop: cdktf.numberToTerraform(struct!.dstTcpActionOnAckGapDrop),
    dst_tcp_action_on_ack_init: cdktf.numberToTerraform(struct!.dstTcpActionOnAckInit),
    dst_tcp_action_on_ack_pass: cdktf.numberToTerraform(struct!.dstTcpActionOnAckPass),
    dst_tcp_action_on_ack_reset: cdktf.numberToTerraform(struct!.dstTcpActionOnAckReset),
    dst_tcp_action_on_ack_timeout: cdktf.numberToTerraform(struct!.dstTcpActionOnAckTimeout),
    dst_tcp_action_on_syn_blacklist: cdktf.numberToTerraform(struct!.dstTcpActionOnSynBlacklist),
    dst_tcp_action_on_syn_fail: cdktf.numberToTerraform(struct!.dstTcpActionOnSynFail),
    dst_tcp_action_on_syn_gap_drop: cdktf.numberToTerraform(struct!.dstTcpActionOnSynGapDrop),
    dst_tcp_action_on_syn_init: cdktf.numberToTerraform(struct!.dstTcpActionOnSynInit),
    dst_tcp_action_on_syn_pass: cdktf.numberToTerraform(struct!.dstTcpActionOnSynPass),
    dst_tcp_action_on_syn_reset: cdktf.numberToTerraform(struct!.dstTcpActionOnSynReset),
    dst_tcp_action_on_syn_timeout: cdktf.numberToTerraform(struct!.dstTcpActionOnSynTimeout),
    dst_tcp_any_exceed: cdktf.numberToTerraform(struct!.dstTcpAnyExceed),
    dst_tcp_auth: cdktf.numberToTerraform(struct!.dstTcpAuth),
    dst_tcp_auth_drop: cdktf.numberToTerraform(struct!.dstTcpAuthDrop),
    dst_tcp_auth_pass: cdktf.numberToTerraform(struct!.dstTcpAuthPass),
    dst_tcp_auth_resp: cdktf.numberToTerraform(struct!.dstTcpAuthResp),
    dst_tcp_auth_rst: cdktf.numberToTerraform(struct!.dstTcpAuthRst),
    dst_tcp_bytes_drop: cdktf.numberToTerraform(struct!.dstTcpBytesDrop),
    dst_tcp_bytes_rcv: cdktf.numberToTerraform(struct!.dstTcpBytesRcv),
    dst_tcp_bytes_sent: cdktf.numberToTerraform(struct!.dstTcpBytesSent),
    dst_tcp_conn_close: cdktf.numberToTerraform(struct!.dstTcpConnClose),
    dst_tcp_conn_close_half_open: cdktf.numberToTerraform(struct!.dstTcpConnCloseHalfOpen),
    dst_tcp_conn_close_w_fin: cdktf.numberToTerraform(struct!.dstTcpConnCloseWFin),
    dst_tcp_conn_close_w_idle: cdktf.numberToTerraform(struct!.dstTcpConnCloseWIdle),
    dst_tcp_conn_close_w_rst: cdktf.numberToTerraform(struct!.dstTcpConnCloseWRst),
    dst_tcp_conn_create_from_ack: cdktf.numberToTerraform(struct!.dstTcpConnCreateFromAck),
    dst_tcp_conn_create_from_syn: cdktf.numberToTerraform(struct!.dstTcpConnCreateFromSyn),
    dst_tcp_conn_limit_exceed: cdktf.numberToTerraform(struct!.dstTcpConnLimitExceed),
    dst_tcp_conn_prate_excd: cdktf.numberToTerraform(struct!.dstTcpConnPrateExcd),
    dst_tcp_conn_rate_exceed: cdktf.numberToTerraform(struct!.dstTcpConnRateExceed),
    dst_tcp_drop: cdktf.numberToTerraform(struct!.dstTcpDrop),
    dst_tcp_filter_action_blacklist: cdktf.numberToTerraform(struct!.dstTcpFilterActionBlacklist),
    dst_tcp_filter_action_default_pass: cdktf.numberToTerraform(struct!.dstTcpFilterActionDefaultPass),
    dst_tcp_filter_action_drop: cdktf.numberToTerraform(struct!.dstTcpFilterActionDrop),
    dst_tcp_filter_action_whitelist: cdktf.numberToTerraform(struct!.dstTcpFilterActionWhitelist),
    dst_tcp_filter_match: cdktf.numberToTerraform(struct!.dstTcpFilterMatch),
    dst_tcp_filter_not_match: cdktf.numberToTerraform(struct!.dstTcpFilterNotMatch),
    dst_tcp_frag_pkt_rate_exceed: cdktf.numberToTerraform(struct!.dstTcpFragPktRateExceed),
    dst_tcp_frag_src_rate_drop: cdktf.numberToTerraform(struct!.dstTcpFragSrcRateDrop),
    dst_tcp_kibit_rate_drop: cdktf.numberToTerraform(struct!.dstTcpKibitRateDrop),
    dst_tcp_out_of_seq_excd: cdktf.numberToTerraform(struct!.dstTcpOutOfSeqExcd),
    dst_tcp_pkt_rate_exceed: cdktf.numberToTerraform(struct!.dstTcpPktRateExceed),
    dst_tcp_pkt_rcvd: cdktf.numberToTerraform(struct!.dstTcpPktRcvd),
    dst_tcp_pkt_sent: cdktf.numberToTerraform(struct!.dstTcpPktSent),
    dst_tcp_port_any_exceed: cdktf.numberToTerraform(struct!.dstTcpPortAnyExceed),
    dst_tcp_retransmit_excd: cdktf.numberToTerraform(struct!.dstTcpRetransmitExcd),
    dst_tcp_rst_cookie_fail: cdktf.numberToTerraform(struct!.dstTcpRstCookieFail),
    dst_tcp_session_aged: cdktf.numberToTerraform(struct!.dstTcpSessionAged),
    dst_tcp_session_created: cdktf.numberToTerraform(struct!.dstTcpSessionCreated),
    dst_tcp_src_drop: cdktf.numberToTerraform(struct!.dstTcpSrcDrop),
    dst_tcp_src_rate_drop: cdktf.numberToTerraform(struct!.dstTcpSrcRateDrop),
    dst_tcp_syn: cdktf.numberToTerraform(struct!.dstTcpSyn),
    dst_tcp_syn_drop: cdktf.numberToTerraform(struct!.dstTcpSynDrop),
    dst_tcp_unauth_drop: cdktf.numberToTerraform(struct!.dstTcpUnauthDrop),
    dst_tcp_wellknown_sport_drop: cdktf.numberToTerraform(struct!.dstTcpWellknownSportDrop),
    dst_tcp_zero_window_excd: cdktf.numberToTerraform(struct!.dstTcpZeroWindowExcd),
    dst_udp_any_exceed: cdktf.numberToTerraform(struct!.dstUdpAnyExceed),
    dst_udp_auth_drop: cdktf.numberToTerraform(struct!.dstUdpAuthDrop),
    dst_udp_bytes_drop: cdktf.numberToTerraform(struct!.dstUdpBytesDrop),
    dst_udp_bytes_rcv: cdktf.numberToTerraform(struct!.dstUdpBytesRcv),
    dst_udp_bytes_sent: cdktf.numberToTerraform(struct!.dstUdpBytesSent),
    dst_udp_conn_limit_exceed: cdktf.numberToTerraform(struct!.dstUdpConnLimitExceed),
    dst_udp_conn_prate_excd: cdktf.numberToTerraform(struct!.dstUdpConnPrateExcd),
    dst_udp_conn_rate_exceed: cdktf.numberToTerraform(struct!.dstUdpConnRateExceed),
    dst_udp_drop: cdktf.numberToTerraform(struct!.dstUdpDrop),
    dst_udp_filter_action_blacklist: cdktf.numberToTerraform(struct!.dstUdpFilterActionBlacklist),
    dst_udp_filter_action_default_pass: cdktf.numberToTerraform(struct!.dstUdpFilterActionDefaultPass),
    dst_udp_filter_action_drop: cdktf.numberToTerraform(struct!.dstUdpFilterActionDrop),
    dst_udp_filter_action_whitelist: cdktf.numberToTerraform(struct!.dstUdpFilterActionWhitelist),
    dst_udp_filter_match: cdktf.numberToTerraform(struct!.dstUdpFilterMatch),
    dst_udp_filter_not_match: cdktf.numberToTerraform(struct!.dstUdpFilterNotMatch),
    dst_udp_frag_pkt_rate_exceed: cdktf.numberToTerraform(struct!.dstUdpFragPktRateExceed),
    dst_udp_frag_src_rate_drop: cdktf.numberToTerraform(struct!.dstUdpFragSrcRateDrop),
    dst_udp_kibit_rate_drop: cdktf.numberToTerraform(struct!.dstUdpKibitRateDrop),
    dst_udp_ntp_monlist_req: cdktf.numberToTerraform(struct!.dstUdpNtpMonlistReq),
    dst_udp_ntp_monlist_resp: cdktf.numberToTerraform(struct!.dstUdpNtpMonlistResp),
    dst_udp_pkt_rate_exceed: cdktf.numberToTerraform(struct!.dstUdpPktRateExceed),
    dst_udp_pkt_rcvd: cdktf.numberToTerraform(struct!.dstUdpPktRcvd),
    dst_udp_pkt_sent: cdktf.numberToTerraform(struct!.dstUdpPktSent),
    dst_udp_port_any_exceed: cdktf.numberToTerraform(struct!.dstUdpPortAnyExceed),
    dst_udp_retry_fail: cdktf.numberToTerraform(struct!.dstUdpRetryFail),
    dst_udp_retry_gap_drop: cdktf.numberToTerraform(struct!.dstUdpRetryGapDrop),
    dst_udp_retry_init: cdktf.numberToTerraform(struct!.dstUdpRetryInit),
    dst_udp_retry_pass: cdktf.numberToTerraform(struct!.dstUdpRetryPass),
    dst_udp_session_aged: cdktf.numberToTerraform(struct!.dstUdpSessionAged),
    dst_udp_session_created: cdktf.numberToTerraform(struct!.dstUdpSessionCreated),
    dst_udp_src_drop: cdktf.numberToTerraform(struct!.dstUdpSrcDrop),
    dst_udp_src_rate_drop: cdktf.numberToTerraform(struct!.dstUdpSrcRateDrop),
    dst_udp_wellknown_sport_drop: cdktf.numberToTerraform(struct!.dstUdpWellknownSportDrop),
    egress_bytes: cdktf.numberToTerraform(struct!.egressBytes),
    egress_packets: cdktf.numberToTerraform(struct!.egressPackets),
    entry_sync_message_received: cdktf.numberToTerraform(struct!.entrySyncMessageReceived),
    entry_sync_message_sent: cdktf.numberToTerraform(struct!.entrySyncMessageSent),
    icmp_fwd_recv: cdktf.numberToTerraform(struct!.icmpFwdRecv),
    inbound_bytes_drop: cdktf.numberToTerraform(struct!.inboundBytesDrop),
    inbound_bytes_sent: cdktf.numberToTerraform(struct!.inboundBytesSent),
    inbound_pkt_drop: cdktf.numberToTerraform(struct!.inboundPktDrop),
    ingress_bytes: cdktf.numberToTerraform(struct!.ingressBytes),
    ingress_packets: cdktf.numberToTerraform(struct!.ingressPackets),
    no_policy_class_list_match: cdktf.numberToTerraform(struct!.noPolicyClassListMatch),
    outbound_bytes_drop: cdktf.numberToTerraform(struct!.outboundBytesDrop),
    outbound_bytes_sent: cdktf.numberToTerraform(struct!.outboundBytesSent),
    outbound_pkt_drop: cdktf.numberToTerraform(struct!.outboundPktDrop),
    outbound_pkt_sent: cdktf.numberToTerraform(struct!.outboundPktSent),
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
    prog_req_resp_time_exceed: cdktf.numberToTerraform(struct!.progReqRespTimeExceed),
    prog_req_samples: cdktf.numberToTerraform(struct!.progReqSamples),
    prog_req_samples_processed: cdktf.numberToTerraform(struct!.progReqSamplesProcessed),
    prog_request_len_exceed: cdktf.numberToTerraform(struct!.progRequestLenExceed),
    prog_resp_req_ratio_exceed: cdktf.numberToTerraform(struct!.progRespReqRatioExceed),
    prog_resp_req_time_exceed: cdktf.numberToTerraform(struct!.progRespReqTimeExceed),
    prog_response_len_exceed: cdktf.numberToTerraform(struct!.progResponseLenExceed),
    prog_win_exceed_bl: cdktf.numberToTerraform(struct!.progWinExceedBl),
    prog_win_exceed_drop: cdktf.numberToTerraform(struct!.progWinExceedDrop),
    prog_win_rcvd_exceed: cdktf.numberToTerraform(struct!.progWinRcvdExceed),
    prog_win_rcvd_sent_ratio_exceed: cdktf.numberToTerraform(struct!.progWinRcvdSentRatioExceed),
    prog_win_samples: cdktf.numberToTerraform(struct!.progWinSamples),
    prog_win_samples_processed: cdktf.numberToTerraform(struct!.progWinSamplesProcessed),
    prog_win_sent_exceed: cdktf.numberToTerraform(struct!.progWinSentExceed),
    sflow_external_packets_sent: cdktf.numberToTerraform(struct!.sflowExternalPacketsSent),
    sflow_external_samples_packed: cdktf.numberToTerraform(struct!.sflowExternalSamplesPacked),
    sflow_internal_packets_sent: cdktf.numberToTerraform(struct!.sflowInternalPacketsSent),
    sflow_internal_samples_packed: cdktf.numberToTerraform(struct!.sflowInternalSamplesPacked),
    src_dst_pair_entry_icmp: cdktf.numberToTerraform(struct!.srcDstPairEntryIcmp),
    src_dst_pair_entry_other: cdktf.numberToTerraform(struct!.srcDstPairEntryOther),
    src_dst_pair_entry_tcp: cdktf.numberToTerraform(struct!.srcDstPairEntryTcp),
    src_dst_pair_entry_total: cdktf.numberToTerraform(struct!.srcDstPairEntryTotal),
    src_dst_pair_entry_udp: cdktf.numberToTerraform(struct!.srcDstPairEntryUdp),
    src_frag_drop: cdktf.numberToTerraform(struct!.srcFragDrop),
    src_hw_drop: cdktf.numberToTerraform(struct!.srcHwDrop),
    src_hw_drop_rule_insert: cdktf.numberToTerraform(struct!.srcHwDropRuleInsert),
    src_hw_drop_rule_remove: cdktf.numberToTerraform(struct!.srcHwDropRuleRemove),
    src_l4_icmp_blacklist_drop: cdktf.numberToTerraform(struct!.srcL4IcmpBlacklistDrop),
    src_l4_other_blacklist_drop: cdktf.numberToTerraform(struct!.srcL4OtherBlacklistDrop),
    src_l4_tcp_blacklist_drop: cdktf.numberToTerraform(struct!.srcL4TcpBlacklistDrop),
    src_l4_udp_blacklist_drop: cdktf.numberToTerraform(struct!.srcL4UdpBlacklistDrop),
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
    tcp_fwd_sent: cdktf.numberToTerraform(struct!.tcpFwdSent),
    tcp_invalid_syn: cdktf.numberToTerraform(struct!.tcpInvalidSyn),
    tcp_l4_rst_cookie_fail: cdktf.numberToTerraform(struct!.tcpL4RstCookieFail),
    tcp_l4_syn_cookie_fail: cdktf.numberToTerraform(struct!.tcpL4SynCookieFail),
    tcp_l4_unauth_drop: cdktf.numberToTerraform(struct!.tcpL4UnauthDrop),
    tcp_rexmit_syn_limit_bl: cdktf.numberToTerraform(struct!.tcpRexmitSynLimitBl),
    tcp_rexmit_syn_limit_drop: cdktf.numberToTerraform(struct!.tcpRexmitSynLimitDrop),
    tcp_rst_rcvd: cdktf.numberToTerraform(struct!.tcpRstRcvd),
    tcp_syn_ack_rcvd: cdktf.numberToTerraform(struct!.tcpSynAckRcvd),
    tcp_syn_cookie_fail: cdktf.numberToTerraform(struct!.tcpSynCookieFail),
    tcp_syn_rcvd: cdktf.numberToTerraform(struct!.tcpSynRcvd),
    udp_fwd_recv: cdktf.numberToTerraform(struct!.udpFwdRecv),
    udp_fwd_sent: cdktf.numberToTerraform(struct!.udpFwdSent),
    udp_payload_too_big: cdktf.numberToTerraform(struct!.udpPayloadTooBig),
    udp_payload_too_small: cdktf.numberToTerraform(struct!.udpPayloadTooSmall),
  }
}


export function dataThunderDdosDstEntryStatsStatsToHclTerraform(struct?: DataThunderDdosDstEntryStatsStatsOutputReference | DataThunderDdosDstEntryStatsStats): any {
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
    dst_blackhole_inject: {
      value: cdktf.numberToHclTerraform(struct!.dstBlackholeInject),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_blackhole_withdraw: {
      value: cdktf.numberToHclTerraform(struct!.dstBlackholeWithdraw),
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
    dst_frag_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstFragDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_frag_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.dstFragRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_hw_drop_rule_insert: {
      value: cdktf.numberToHclTerraform(struct!.dstHwDropRuleInsert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_hw_drop_rule_remove: {
      value: cdktf.numberToHclTerraform(struct!.dstHwDropRuleRemove),
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
    dst_icmp_bytes_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstIcmpBytesDrop),
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
    dst_icmp_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstIcmpDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_icmp_frag_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstIcmpFragPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_icmp_frag_src_rate_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstIcmpFragSrcRateDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_icmp_kibit_rate_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstIcmpKibitRateDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_icmp_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstIcmpPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_icmp_pkt_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.dstIcmpPktRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_icmp_pkt_sent: {
      value: cdktf.numberToHclTerraform(struct!.dstIcmpPktSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_icmp_src_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstIcmpSrcDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_icmp_src_rate_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstIcmpSrcRateDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ip_proto_kbit_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstIpProtoKbitRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ip_proto_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstIpProtoPktRateExceed),
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
    dst_l4_tcp_auth: {
      value: cdktf.numberToHclTerraform(struct!.dstL4TcpAuth),
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
    dst_other_bytes_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstOtherBytesDrop),
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
    dst_other_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstOtherDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_other_filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.dstOtherFilterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_other_filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.dstOtherFilterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_other_filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstOtherFilterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_other_filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.dstOtherFilterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_other_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.dstOtherFilterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_other_filter_not_match: {
      value: cdktf.numberToHclTerraform(struct!.dstOtherFilterNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_other_frag_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstOtherFragPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_other_frag_src_rate_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstOtherFragSrcRateDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_other_kibit_rate_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstOtherKibitRateDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_other_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstOtherPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_other_pkt_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.dstOtherPktRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_other_pkt_sent: {
      value: cdktf.numberToHclTerraform(struct!.dstOtherPktSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_other_src_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstOtherSrcDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_other_src_rate_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstOtherSrcRateDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_out_no_route: {
      value: cdktf.numberToHclTerraform(struct!.dstOutNoRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_pkt_sent: {
      value: cdktf.numberToHclTerraform(struct!.dstPktSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_port_bl: {
      value: cdktf.numberToHclTerraform(struct!.dstPortBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_port_conn_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstPortConnLimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_port_conn_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstPortConnRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_port_kbit_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstPortKbitRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_port_kbit_rate_exceed_pkt: {
      value: cdktf.numberToHclTerraform(struct!.dstPortKbitRateExceedPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_port_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstPortPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_port_undef_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstPortUndefDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_port_undef_hit: {
      value: cdktf.numberToHclTerraform(struct!.dstPortUndefHit),
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
    dst_src_port_bl: {
      value: cdktf.numberToHclTerraform(struct!.dstSrcPortBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_src_port_conn_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstSrcPortConnLimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_src_port_conn_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstSrcPortConnRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_src_port_kbit_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstSrcPortKbitRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_src_port_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstSrcPortPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_action_on_ack_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpActionOnAckBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_action_on_ack_fail: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpActionOnAckFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_action_on_ack_gap_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpActionOnAckGapDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_action_on_ack_init: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpActionOnAckInit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_action_on_ack_pass: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpActionOnAckPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_action_on_ack_reset: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpActionOnAckReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_action_on_ack_timeout: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpActionOnAckTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_action_on_syn_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpActionOnSynBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_action_on_syn_fail: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpActionOnSynFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_action_on_syn_gap_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpActionOnSynGapDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_action_on_syn_init: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpActionOnSynInit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_action_on_syn_pass: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpActionOnSynPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_action_on_syn_reset: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpActionOnSynReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_action_on_syn_timeout: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpActionOnSynTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_any_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpAnyExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_auth: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpAuth),
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
    dst_tcp_auth_pass: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpAuthPass),
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
    dst_tcp_bytes_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpBytesDrop),
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
    dst_tcp_conn_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpConnLimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_conn_prate_excd: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpConnPrateExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_conn_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpConnRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpFilterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpFilterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpFilterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpFilterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpFilterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_filter_not_match: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpFilterNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_frag_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpFragPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_frag_src_rate_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpFragSrcRateDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_kibit_rate_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpKibitRateDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_out_of_seq_excd: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpOutOfSeqExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_pkt_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpPktRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_pkt_sent: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpPktSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_port_any_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpPortAnyExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_retransmit_excd: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpRetransmitExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_rst_cookie_fail: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpRstCookieFail),
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
    dst_tcp_session_created: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_src_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpSrcDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_src_rate_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpSrcRateDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_syn: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_syn_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpSynDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_unauth_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpUnauthDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_wellknown_sport_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpWellknownSportDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_tcp_zero_window_excd: {
      value: cdktf.numberToHclTerraform(struct!.dstTcpZeroWindowExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_any_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpAnyExceed),
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
    dst_udp_bytes_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpBytesDrop),
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
    dst_udp_conn_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpConnLimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_conn_prate_excd: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpConnPrateExcd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_conn_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpConnRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpFilterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpFilterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpFilterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpFilterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpFilterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_filter_not_match: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpFilterNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_frag_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpFragPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_frag_src_rate_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpFragSrcRateDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_kibit_rate_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpKibitRateDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_ntp_monlist_req: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpNtpMonlistReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_ntp_monlist_resp: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpNtpMonlistResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_pkt_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpPktRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_pkt_sent: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpPktSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_port_any_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpPortAnyExceed),
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
    dst_udp_retry_init: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpRetryInit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_retry_pass: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpRetryPass),
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
    dst_udp_session_created: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_src_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpSrcDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_src_rate_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpSrcRateDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_udp_wellknown_sport_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstUdpWellknownSportDrop),
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
    inbound_pkt_drop: {
      value: cdktf.numberToHclTerraform(struct!.inboundPktDrop),
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
    no_policy_class_list_match: {
      value: cdktf.numberToHclTerraform(struct!.noPolicyClassListMatch),
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
    outbound_pkt_drop: {
      value: cdktf.numberToHclTerraform(struct!.outboundPktDrop),
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
    src_dst_pair_entry_icmp: {
      value: cdktf.numberToHclTerraform(struct!.srcDstPairEntryIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_pair_entry_other: {
      value: cdktf.numberToHclTerraform(struct!.srcDstPairEntryOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_pair_entry_tcp: {
      value: cdktf.numberToHclTerraform(struct!.srcDstPairEntryTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_pair_entry_total: {
      value: cdktf.numberToHclTerraform(struct!.srcDstPairEntryTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_pair_entry_udp: {
      value: cdktf.numberToHclTerraform(struct!.srcDstPairEntryUdp),
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
    src_hw_drop_rule_insert: {
      value: cdktf.numberToHclTerraform(struct!.srcHwDropRuleInsert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_hw_drop_rule_remove: {
      value: cdktf.numberToHclTerraform(struct!.srcHwDropRuleRemove),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_l4_icmp_blacklist_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcL4IcmpBlacklistDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_l4_other_blacklist_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcL4OtherBlacklistDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_l4_tcp_blacklist_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcL4TcpBlacklistDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_l4_udp_blacklist_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcL4UdpBlacklistDrop),
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
    tcp_fwd_sent: {
      value: cdktf.numberToHclTerraform(struct!.tcpFwdSent),
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
    tcp_l4_rst_cookie_fail: {
      value: cdktf.numberToHclTerraform(struct!.tcpL4RstCookieFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_l4_syn_cookie_fail: {
      value: cdktf.numberToHclTerraform(struct!.tcpL4SynCookieFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_l4_unauth_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpL4UnauthDrop),
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
    udp_fwd_recv: {
      value: cdktf.numberToHclTerraform(struct!.udpFwdRecv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_fwd_sent: {
      value: cdktf.numberToHclTerraform(struct!.udpFwdSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_payload_too_big: {
      value: cdktf.numberToHclTerraform(struct!.udpPayloadTooBig),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_payload_too_small: {
      value: cdktf.numberToHclTerraform(struct!.udpPayloadTooSmall),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstEntryStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstEntryStatsStats | undefined {
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
    if (this._dstBlackholeInject !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstBlackholeInject = this._dstBlackholeInject;
    }
    if (this._dstBlackholeWithdraw !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstBlackholeWithdraw = this._dstBlackholeWithdraw;
    }
    if (this._dstClistOverflowPolicyAtLearning !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstClistOverflowPolicyAtLearning = this._dstClistOverflowPolicyAtLearning;
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
    if (this._dstFragDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstFragDrop = this._dstFragDrop;
    }
    if (this._dstFragRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstFragRcvd = this._dstFragRcvd;
    }
    if (this._dstHwDropRuleInsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstHwDropRuleInsert = this._dstHwDropRuleInsert;
    }
    if (this._dstHwDropRuleRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstHwDropRuleRemove = this._dstHwDropRuleRemove;
    }
    if (this._dstIcmpAnyExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIcmpAnyExceed = this._dstIcmpAnyExceed;
    }
    if (this._dstIcmpBytesDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIcmpBytesDrop = this._dstIcmpBytesDrop;
    }
    if (this._dstIcmpBytesRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIcmpBytesRcv = this._dstIcmpBytesRcv;
    }
    if (this._dstIcmpBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIcmpBytesSent = this._dstIcmpBytesSent;
    }
    if (this._dstIcmpDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIcmpDrop = this._dstIcmpDrop;
    }
    if (this._dstIcmpFragPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIcmpFragPktRateExceed = this._dstIcmpFragPktRateExceed;
    }
    if (this._dstIcmpFragSrcRateDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIcmpFragSrcRateDrop = this._dstIcmpFragSrcRateDrop;
    }
    if (this._dstIcmpKibitRateDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIcmpKibitRateDrop = this._dstIcmpKibitRateDrop;
    }
    if (this._dstIcmpPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIcmpPktRateExceed = this._dstIcmpPktRateExceed;
    }
    if (this._dstIcmpPktRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIcmpPktRcvd = this._dstIcmpPktRcvd;
    }
    if (this._dstIcmpPktSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIcmpPktSent = this._dstIcmpPktSent;
    }
    if (this._dstIcmpSrcDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIcmpSrcDrop = this._dstIcmpSrcDrop;
    }
    if (this._dstIcmpSrcRateDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIcmpSrcRateDrop = this._dstIcmpSrcRateDrop;
    }
    if (this._dstIpProtoKbitRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpProtoKbitRateExceed = this._dstIpProtoKbitRateExceed;
    }
    if (this._dstIpProtoPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpProtoPktRateExceed = this._dstIpProtoPktRateExceed;
    }
    if (this._dstL4IcmpBlacklistDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstL4IcmpBlacklistDrop = this._dstL4IcmpBlacklistDrop;
    }
    if (this._dstL4OtherBlacklistDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstL4OtherBlacklistDrop = this._dstL4OtherBlacklistDrop;
    }
    if (this._dstL4TcpAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstL4TcpAuth = this._dstL4TcpAuth;
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
    if (this._dstOtherBytesDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOtherBytesDrop = this._dstOtherBytesDrop;
    }
    if (this._dstOtherBytesRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOtherBytesRcv = this._dstOtherBytesRcv;
    }
    if (this._dstOtherBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOtherBytesSent = this._dstOtherBytesSent;
    }
    if (this._dstOtherDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOtherDrop = this._dstOtherDrop;
    }
    if (this._dstOtherFilterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOtherFilterActionBlacklist = this._dstOtherFilterActionBlacklist;
    }
    if (this._dstOtherFilterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOtherFilterActionDefaultPass = this._dstOtherFilterActionDefaultPass;
    }
    if (this._dstOtherFilterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOtherFilterActionDrop = this._dstOtherFilterActionDrop;
    }
    if (this._dstOtherFilterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOtherFilterActionWhitelist = this._dstOtherFilterActionWhitelist;
    }
    if (this._dstOtherFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOtherFilterMatch = this._dstOtherFilterMatch;
    }
    if (this._dstOtherFilterNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOtherFilterNotMatch = this._dstOtherFilterNotMatch;
    }
    if (this._dstOtherFragPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOtherFragPktRateExceed = this._dstOtherFragPktRateExceed;
    }
    if (this._dstOtherFragSrcRateDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOtherFragSrcRateDrop = this._dstOtherFragSrcRateDrop;
    }
    if (this._dstOtherKibitRateDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOtherKibitRateDrop = this._dstOtherKibitRateDrop;
    }
    if (this._dstOtherPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOtherPktRateExceed = this._dstOtherPktRateExceed;
    }
    if (this._dstOtherPktRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOtherPktRcvd = this._dstOtherPktRcvd;
    }
    if (this._dstOtherPktSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOtherPktSent = this._dstOtherPktSent;
    }
    if (this._dstOtherSrcDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOtherSrcDrop = this._dstOtherSrcDrop;
    }
    if (this._dstOtherSrcRateDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOtherSrcRateDrop = this._dstOtherSrcRateDrop;
    }
    if (this._dstOutNoRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOutNoRoute = this._dstOutNoRoute;
    }
    if (this._dstPktSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPktSent = this._dstPktSent;
    }
    if (this._dstPortBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortBl = this._dstPortBl;
    }
    if (this._dstPortConnLimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortConnLimitExceed = this._dstPortConnLimitExceed;
    }
    if (this._dstPortConnRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortConnRateExceed = this._dstPortConnRateExceed;
    }
    if (this._dstPortKbitRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortKbitRateExceed = this._dstPortKbitRateExceed;
    }
    if (this._dstPortKbitRateExceedPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortKbitRateExceedPkt = this._dstPortKbitRateExceedPkt;
    }
    if (this._dstPortPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortPktRateExceed = this._dstPortPktRateExceed;
    }
    if (this._dstPortUndefDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortUndefDrop = this._dstPortUndefDrop;
    }
    if (this._dstPortUndefHit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortUndefHit = this._dstPortUndefHit;
    }
    if (this._dstSrcLearnOverflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSrcLearnOverflow = this._dstSrcLearnOverflow;
    }
    if (this._dstSrcPortBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSrcPortBl = this._dstSrcPortBl;
    }
    if (this._dstSrcPortConnLimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSrcPortConnLimitExceed = this._dstSrcPortConnLimitExceed;
    }
    if (this._dstSrcPortConnRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSrcPortConnRateExceed = this._dstSrcPortConnRateExceed;
    }
    if (this._dstSrcPortKbitRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSrcPortKbitRateExceed = this._dstSrcPortKbitRateExceed;
    }
    if (this._dstSrcPortPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSrcPortPktRateExceed = this._dstSrcPortPktRateExceed;
    }
    if (this._dstTcpActionOnAckBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpActionOnAckBlacklist = this._dstTcpActionOnAckBlacklist;
    }
    if (this._dstTcpActionOnAckFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpActionOnAckFail = this._dstTcpActionOnAckFail;
    }
    if (this._dstTcpActionOnAckGapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpActionOnAckGapDrop = this._dstTcpActionOnAckGapDrop;
    }
    if (this._dstTcpActionOnAckInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpActionOnAckInit = this._dstTcpActionOnAckInit;
    }
    if (this._dstTcpActionOnAckPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpActionOnAckPass = this._dstTcpActionOnAckPass;
    }
    if (this._dstTcpActionOnAckReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpActionOnAckReset = this._dstTcpActionOnAckReset;
    }
    if (this._dstTcpActionOnAckTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpActionOnAckTimeout = this._dstTcpActionOnAckTimeout;
    }
    if (this._dstTcpActionOnSynBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpActionOnSynBlacklist = this._dstTcpActionOnSynBlacklist;
    }
    if (this._dstTcpActionOnSynFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpActionOnSynFail = this._dstTcpActionOnSynFail;
    }
    if (this._dstTcpActionOnSynGapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpActionOnSynGapDrop = this._dstTcpActionOnSynGapDrop;
    }
    if (this._dstTcpActionOnSynInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpActionOnSynInit = this._dstTcpActionOnSynInit;
    }
    if (this._dstTcpActionOnSynPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpActionOnSynPass = this._dstTcpActionOnSynPass;
    }
    if (this._dstTcpActionOnSynReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpActionOnSynReset = this._dstTcpActionOnSynReset;
    }
    if (this._dstTcpActionOnSynTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpActionOnSynTimeout = this._dstTcpActionOnSynTimeout;
    }
    if (this._dstTcpAnyExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpAnyExceed = this._dstTcpAnyExceed;
    }
    if (this._dstTcpAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpAuth = this._dstTcpAuth;
    }
    if (this._dstTcpAuthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpAuthDrop = this._dstTcpAuthDrop;
    }
    if (this._dstTcpAuthPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpAuthPass = this._dstTcpAuthPass;
    }
    if (this._dstTcpAuthResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpAuthResp = this._dstTcpAuthResp;
    }
    if (this._dstTcpAuthRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpAuthRst = this._dstTcpAuthRst;
    }
    if (this._dstTcpBytesDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpBytesDrop = this._dstTcpBytesDrop;
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
    if (this._dstTcpConnLimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpConnLimitExceed = this._dstTcpConnLimitExceed;
    }
    if (this._dstTcpConnPrateExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpConnPrateExcd = this._dstTcpConnPrateExcd;
    }
    if (this._dstTcpConnRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpConnRateExceed = this._dstTcpConnRateExceed;
    }
    if (this._dstTcpDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpDrop = this._dstTcpDrop;
    }
    if (this._dstTcpFilterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpFilterActionBlacklist = this._dstTcpFilterActionBlacklist;
    }
    if (this._dstTcpFilterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpFilterActionDefaultPass = this._dstTcpFilterActionDefaultPass;
    }
    if (this._dstTcpFilterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpFilterActionDrop = this._dstTcpFilterActionDrop;
    }
    if (this._dstTcpFilterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpFilterActionWhitelist = this._dstTcpFilterActionWhitelist;
    }
    if (this._dstTcpFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpFilterMatch = this._dstTcpFilterMatch;
    }
    if (this._dstTcpFilterNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpFilterNotMatch = this._dstTcpFilterNotMatch;
    }
    if (this._dstTcpFragPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpFragPktRateExceed = this._dstTcpFragPktRateExceed;
    }
    if (this._dstTcpFragSrcRateDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpFragSrcRateDrop = this._dstTcpFragSrcRateDrop;
    }
    if (this._dstTcpKibitRateDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpKibitRateDrop = this._dstTcpKibitRateDrop;
    }
    if (this._dstTcpOutOfSeqExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpOutOfSeqExcd = this._dstTcpOutOfSeqExcd;
    }
    if (this._dstTcpPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpPktRateExceed = this._dstTcpPktRateExceed;
    }
    if (this._dstTcpPktRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpPktRcvd = this._dstTcpPktRcvd;
    }
    if (this._dstTcpPktSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpPktSent = this._dstTcpPktSent;
    }
    if (this._dstTcpPortAnyExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpPortAnyExceed = this._dstTcpPortAnyExceed;
    }
    if (this._dstTcpRetransmitExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpRetransmitExcd = this._dstTcpRetransmitExcd;
    }
    if (this._dstTcpRstCookieFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpRstCookieFail = this._dstTcpRstCookieFail;
    }
    if (this._dstTcpSessionAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpSessionAged = this._dstTcpSessionAged;
    }
    if (this._dstTcpSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpSessionCreated = this._dstTcpSessionCreated;
    }
    if (this._dstTcpSrcDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpSrcDrop = this._dstTcpSrcDrop;
    }
    if (this._dstTcpSrcRateDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpSrcRateDrop = this._dstTcpSrcRateDrop;
    }
    if (this._dstTcpSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpSyn = this._dstTcpSyn;
    }
    if (this._dstTcpSynDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpSynDrop = this._dstTcpSynDrop;
    }
    if (this._dstTcpUnauthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpUnauthDrop = this._dstTcpUnauthDrop;
    }
    if (this._dstTcpWellknownSportDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpWellknownSportDrop = this._dstTcpWellknownSportDrop;
    }
    if (this._dstTcpZeroWindowExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstTcpZeroWindowExcd = this._dstTcpZeroWindowExcd;
    }
    if (this._dstUdpAnyExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpAnyExceed = this._dstUdpAnyExceed;
    }
    if (this._dstUdpAuthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpAuthDrop = this._dstUdpAuthDrop;
    }
    if (this._dstUdpBytesDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpBytesDrop = this._dstUdpBytesDrop;
    }
    if (this._dstUdpBytesRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpBytesRcv = this._dstUdpBytesRcv;
    }
    if (this._dstUdpBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpBytesSent = this._dstUdpBytesSent;
    }
    if (this._dstUdpConnLimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpConnLimitExceed = this._dstUdpConnLimitExceed;
    }
    if (this._dstUdpConnPrateExcd !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpConnPrateExcd = this._dstUdpConnPrateExcd;
    }
    if (this._dstUdpConnRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpConnRateExceed = this._dstUdpConnRateExceed;
    }
    if (this._dstUdpDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpDrop = this._dstUdpDrop;
    }
    if (this._dstUdpFilterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpFilterActionBlacklist = this._dstUdpFilterActionBlacklist;
    }
    if (this._dstUdpFilterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpFilterActionDefaultPass = this._dstUdpFilterActionDefaultPass;
    }
    if (this._dstUdpFilterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpFilterActionDrop = this._dstUdpFilterActionDrop;
    }
    if (this._dstUdpFilterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpFilterActionWhitelist = this._dstUdpFilterActionWhitelist;
    }
    if (this._dstUdpFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpFilterMatch = this._dstUdpFilterMatch;
    }
    if (this._dstUdpFilterNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpFilterNotMatch = this._dstUdpFilterNotMatch;
    }
    if (this._dstUdpFragPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpFragPktRateExceed = this._dstUdpFragPktRateExceed;
    }
    if (this._dstUdpFragSrcRateDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpFragSrcRateDrop = this._dstUdpFragSrcRateDrop;
    }
    if (this._dstUdpKibitRateDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpKibitRateDrop = this._dstUdpKibitRateDrop;
    }
    if (this._dstUdpNtpMonlistReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpNtpMonlistReq = this._dstUdpNtpMonlistReq;
    }
    if (this._dstUdpNtpMonlistResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpNtpMonlistResp = this._dstUdpNtpMonlistResp;
    }
    if (this._dstUdpPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpPktRateExceed = this._dstUdpPktRateExceed;
    }
    if (this._dstUdpPktRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpPktRcvd = this._dstUdpPktRcvd;
    }
    if (this._dstUdpPktSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpPktSent = this._dstUdpPktSent;
    }
    if (this._dstUdpPortAnyExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpPortAnyExceed = this._dstUdpPortAnyExceed;
    }
    if (this._dstUdpRetryFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpRetryFail = this._dstUdpRetryFail;
    }
    if (this._dstUdpRetryGapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpRetryGapDrop = this._dstUdpRetryGapDrop;
    }
    if (this._dstUdpRetryInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpRetryInit = this._dstUdpRetryInit;
    }
    if (this._dstUdpRetryPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpRetryPass = this._dstUdpRetryPass;
    }
    if (this._dstUdpSessionAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpSessionAged = this._dstUdpSessionAged;
    }
    if (this._dstUdpSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpSessionCreated = this._dstUdpSessionCreated;
    }
    if (this._dstUdpSrcDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpSrcDrop = this._dstUdpSrcDrop;
    }
    if (this._dstUdpSrcRateDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpSrcRateDrop = this._dstUdpSrcRateDrop;
    }
    if (this._dstUdpWellknownSportDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstUdpWellknownSportDrop = this._dstUdpWellknownSportDrop;
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
    if (this._inboundPktDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundPktDrop = this._inboundPktDrop;
    }
    if (this._ingressBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressBytes = this._ingressBytes;
    }
    if (this._ingressPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressPackets = this._ingressPackets;
    }
    if (this._noPolicyClassListMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPolicyClassListMatch = this._noPolicyClassListMatch;
    }
    if (this._outboundBytesDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundBytesDrop = this._outboundBytesDrop;
    }
    if (this._outboundBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundBytesSent = this._outboundBytesSent;
    }
    if (this._outboundPktDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPktDrop = this._outboundPktDrop;
    }
    if (this._outboundPktSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPktSent = this._outboundPktSent;
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
    if (this._srcDstPairEntryIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstPairEntryIcmp = this._srcDstPairEntryIcmp;
    }
    if (this._srcDstPairEntryOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstPairEntryOther = this._srcDstPairEntryOther;
    }
    if (this._srcDstPairEntryTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstPairEntryTcp = this._srcDstPairEntryTcp;
    }
    if (this._srcDstPairEntryTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstPairEntryTotal = this._srcDstPairEntryTotal;
    }
    if (this._srcDstPairEntryUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstPairEntryUdp = this._srcDstPairEntryUdp;
    }
    if (this._srcFragDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFragDrop = this._srcFragDrop;
    }
    if (this._srcHwDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHwDrop = this._srcHwDrop;
    }
    if (this._srcHwDropRuleInsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHwDropRuleInsert = this._srcHwDropRuleInsert;
    }
    if (this._srcHwDropRuleRemove !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHwDropRuleRemove = this._srcHwDropRuleRemove;
    }
    if (this._srcL4IcmpBlacklistDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcL4IcmpBlacklistDrop = this._srcL4IcmpBlacklistDrop;
    }
    if (this._srcL4OtherBlacklistDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcL4OtherBlacklistDrop = this._srcL4OtherBlacklistDrop;
    }
    if (this._srcL4TcpBlacklistDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcL4TcpBlacklistDrop = this._srcL4TcpBlacklistDrop;
    }
    if (this._srcL4UdpBlacklistDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcL4UdpBlacklistDrop = this._srcL4UdpBlacklistDrop;
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
    if (this._tcpFwdSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFwdSent = this._tcpFwdSent;
    }
    if (this._tcpInvalidSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpInvalidSyn = this._tcpInvalidSyn;
    }
    if (this._tcpL4RstCookieFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpL4RstCookieFail = this._tcpL4RstCookieFail;
    }
    if (this._tcpL4SynCookieFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpL4SynCookieFail = this._tcpL4SynCookieFail;
    }
    if (this._tcpL4UnauthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpL4UnauthDrop = this._tcpL4UnauthDrop;
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
    if (this._udpFwdRecv !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFwdRecv = this._udpFwdRecv;
    }
    if (this._udpFwdSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFwdSent = this._udpFwdSent;
    }
    if (this._udpPayloadTooBig !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPayloadTooBig = this._udpPayloadTooBig;
    }
    if (this._udpPayloadTooSmall !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPayloadTooSmall = this._udpPayloadTooSmall;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstEntryStatsStats | undefined) {
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
      this._dstBlackholeInject = undefined;
      this._dstBlackholeWithdraw = undefined;
      this._dstClistOverflowPolicyAtLearning = undefined;
      this._dstEntryConnLimitExceed = undefined;
      this._dstEntryConnRateExceed = undefined;
      this._dstEntryFragPktRateExceed = undefined;
      this._dstEntryKbitRateExceed = undefined;
      this._dstEntryKbitRateExceedCount = undefined;
      this._dstEntryPktRateExceed = undefined;
      this._dstExceedActionDrop = undefined;
      this._dstExceedActionTunnel = undefined;
      this._dstFragDrop = undefined;
      this._dstFragRcvd = undefined;
      this._dstHwDropRuleInsert = undefined;
      this._dstHwDropRuleRemove = undefined;
      this._dstIcmpAnyExceed = undefined;
      this._dstIcmpBytesDrop = undefined;
      this._dstIcmpBytesRcv = undefined;
      this._dstIcmpBytesSent = undefined;
      this._dstIcmpDrop = undefined;
      this._dstIcmpFragPktRateExceed = undefined;
      this._dstIcmpFragSrcRateDrop = undefined;
      this._dstIcmpKibitRateDrop = undefined;
      this._dstIcmpPktRateExceed = undefined;
      this._dstIcmpPktRcvd = undefined;
      this._dstIcmpPktSent = undefined;
      this._dstIcmpSrcDrop = undefined;
      this._dstIcmpSrcRateDrop = undefined;
      this._dstIpProtoKbitRateExceed = undefined;
      this._dstIpProtoPktRateExceed = undefined;
      this._dstL4IcmpBlacklistDrop = undefined;
      this._dstL4OtherBlacklistDrop = undefined;
      this._dstL4TcpAuth = undefined;
      this._dstL4TcpBlacklistDrop = undefined;
      this._dstL4UdpBlacklistDrop = undefined;
      this._dstOtherAnyExceed = undefined;
      this._dstOtherBytesDrop = undefined;
      this._dstOtherBytesRcv = undefined;
      this._dstOtherBytesSent = undefined;
      this._dstOtherDrop = undefined;
      this._dstOtherFilterActionBlacklist = undefined;
      this._dstOtherFilterActionDefaultPass = undefined;
      this._dstOtherFilterActionDrop = undefined;
      this._dstOtherFilterActionWhitelist = undefined;
      this._dstOtherFilterMatch = undefined;
      this._dstOtherFilterNotMatch = undefined;
      this._dstOtherFragPktRateExceed = undefined;
      this._dstOtherFragSrcRateDrop = undefined;
      this._dstOtherKibitRateDrop = undefined;
      this._dstOtherPktRateExceed = undefined;
      this._dstOtherPktRcvd = undefined;
      this._dstOtherPktSent = undefined;
      this._dstOtherSrcDrop = undefined;
      this._dstOtherSrcRateDrop = undefined;
      this._dstOutNoRoute = undefined;
      this._dstPktSent = undefined;
      this._dstPortBl = undefined;
      this._dstPortConnLimitExceed = undefined;
      this._dstPortConnRateExceed = undefined;
      this._dstPortKbitRateExceed = undefined;
      this._dstPortKbitRateExceedPkt = undefined;
      this._dstPortPktRateExceed = undefined;
      this._dstPortUndefDrop = undefined;
      this._dstPortUndefHit = undefined;
      this._dstSrcLearnOverflow = undefined;
      this._dstSrcPortBl = undefined;
      this._dstSrcPortConnLimitExceed = undefined;
      this._dstSrcPortConnRateExceed = undefined;
      this._dstSrcPortKbitRateExceed = undefined;
      this._dstSrcPortPktRateExceed = undefined;
      this._dstTcpActionOnAckBlacklist = undefined;
      this._dstTcpActionOnAckFail = undefined;
      this._dstTcpActionOnAckGapDrop = undefined;
      this._dstTcpActionOnAckInit = undefined;
      this._dstTcpActionOnAckPass = undefined;
      this._dstTcpActionOnAckReset = undefined;
      this._dstTcpActionOnAckTimeout = undefined;
      this._dstTcpActionOnSynBlacklist = undefined;
      this._dstTcpActionOnSynFail = undefined;
      this._dstTcpActionOnSynGapDrop = undefined;
      this._dstTcpActionOnSynInit = undefined;
      this._dstTcpActionOnSynPass = undefined;
      this._dstTcpActionOnSynReset = undefined;
      this._dstTcpActionOnSynTimeout = undefined;
      this._dstTcpAnyExceed = undefined;
      this._dstTcpAuth = undefined;
      this._dstTcpAuthDrop = undefined;
      this._dstTcpAuthPass = undefined;
      this._dstTcpAuthResp = undefined;
      this._dstTcpAuthRst = undefined;
      this._dstTcpBytesDrop = undefined;
      this._dstTcpBytesRcv = undefined;
      this._dstTcpBytesSent = undefined;
      this._dstTcpConnClose = undefined;
      this._dstTcpConnCloseHalfOpen = undefined;
      this._dstTcpConnCloseWFin = undefined;
      this._dstTcpConnCloseWIdle = undefined;
      this._dstTcpConnCloseWRst = undefined;
      this._dstTcpConnCreateFromAck = undefined;
      this._dstTcpConnCreateFromSyn = undefined;
      this._dstTcpConnLimitExceed = undefined;
      this._dstTcpConnPrateExcd = undefined;
      this._dstTcpConnRateExceed = undefined;
      this._dstTcpDrop = undefined;
      this._dstTcpFilterActionBlacklist = undefined;
      this._dstTcpFilterActionDefaultPass = undefined;
      this._dstTcpFilterActionDrop = undefined;
      this._dstTcpFilterActionWhitelist = undefined;
      this._dstTcpFilterMatch = undefined;
      this._dstTcpFilterNotMatch = undefined;
      this._dstTcpFragPktRateExceed = undefined;
      this._dstTcpFragSrcRateDrop = undefined;
      this._dstTcpKibitRateDrop = undefined;
      this._dstTcpOutOfSeqExcd = undefined;
      this._dstTcpPktRateExceed = undefined;
      this._dstTcpPktRcvd = undefined;
      this._dstTcpPktSent = undefined;
      this._dstTcpPortAnyExceed = undefined;
      this._dstTcpRetransmitExcd = undefined;
      this._dstTcpRstCookieFail = undefined;
      this._dstTcpSessionAged = undefined;
      this._dstTcpSessionCreated = undefined;
      this._dstTcpSrcDrop = undefined;
      this._dstTcpSrcRateDrop = undefined;
      this._dstTcpSyn = undefined;
      this._dstTcpSynDrop = undefined;
      this._dstTcpUnauthDrop = undefined;
      this._dstTcpWellknownSportDrop = undefined;
      this._dstTcpZeroWindowExcd = undefined;
      this._dstUdpAnyExceed = undefined;
      this._dstUdpAuthDrop = undefined;
      this._dstUdpBytesDrop = undefined;
      this._dstUdpBytesRcv = undefined;
      this._dstUdpBytesSent = undefined;
      this._dstUdpConnLimitExceed = undefined;
      this._dstUdpConnPrateExcd = undefined;
      this._dstUdpConnRateExceed = undefined;
      this._dstUdpDrop = undefined;
      this._dstUdpFilterActionBlacklist = undefined;
      this._dstUdpFilterActionDefaultPass = undefined;
      this._dstUdpFilterActionDrop = undefined;
      this._dstUdpFilterActionWhitelist = undefined;
      this._dstUdpFilterMatch = undefined;
      this._dstUdpFilterNotMatch = undefined;
      this._dstUdpFragPktRateExceed = undefined;
      this._dstUdpFragSrcRateDrop = undefined;
      this._dstUdpKibitRateDrop = undefined;
      this._dstUdpNtpMonlistReq = undefined;
      this._dstUdpNtpMonlistResp = undefined;
      this._dstUdpPktRateExceed = undefined;
      this._dstUdpPktRcvd = undefined;
      this._dstUdpPktSent = undefined;
      this._dstUdpPortAnyExceed = undefined;
      this._dstUdpRetryFail = undefined;
      this._dstUdpRetryGapDrop = undefined;
      this._dstUdpRetryInit = undefined;
      this._dstUdpRetryPass = undefined;
      this._dstUdpSessionAged = undefined;
      this._dstUdpSessionCreated = undefined;
      this._dstUdpSrcDrop = undefined;
      this._dstUdpSrcRateDrop = undefined;
      this._dstUdpWellknownSportDrop = undefined;
      this._egressBytes = undefined;
      this._egressPackets = undefined;
      this._entrySyncMessageReceived = undefined;
      this._entrySyncMessageSent = undefined;
      this._icmpFwdRecv = undefined;
      this._inboundBytesDrop = undefined;
      this._inboundBytesSent = undefined;
      this._inboundPktDrop = undefined;
      this._ingressBytes = undefined;
      this._ingressPackets = undefined;
      this._noPolicyClassListMatch = undefined;
      this._outboundBytesDrop = undefined;
      this._outboundBytesSent = undefined;
      this._outboundPktDrop = undefined;
      this._outboundPktSent = undefined;
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
      this._progReqRespTimeExceed = undefined;
      this._progReqSamples = undefined;
      this._progReqSamplesProcessed = undefined;
      this._progRequestLenExceed = undefined;
      this._progRespReqRatioExceed = undefined;
      this._progRespReqTimeExceed = undefined;
      this._progResponseLenExceed = undefined;
      this._progWinExceedBl = undefined;
      this._progWinExceedDrop = undefined;
      this._progWinRcvdExceed = undefined;
      this._progWinRcvdSentRatioExceed = undefined;
      this._progWinSamples = undefined;
      this._progWinSamplesProcessed = undefined;
      this._progWinSentExceed = undefined;
      this._sflowExternalPacketsSent = undefined;
      this._sflowExternalSamplesPacked = undefined;
      this._sflowInternalPacketsSent = undefined;
      this._sflowInternalSamplesPacked = undefined;
      this._srcDstPairEntryIcmp = undefined;
      this._srcDstPairEntryOther = undefined;
      this._srcDstPairEntryTcp = undefined;
      this._srcDstPairEntryTotal = undefined;
      this._srcDstPairEntryUdp = undefined;
      this._srcFragDrop = undefined;
      this._srcHwDrop = undefined;
      this._srcHwDropRuleInsert = undefined;
      this._srcHwDropRuleRemove = undefined;
      this._srcL4IcmpBlacklistDrop = undefined;
      this._srcL4OtherBlacklistDrop = undefined;
      this._srcL4TcpBlacklistDrop = undefined;
      this._srcL4UdpBlacklistDrop = undefined;
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
      this._tcpFwdSent = undefined;
      this._tcpInvalidSyn = undefined;
      this._tcpL4RstCookieFail = undefined;
      this._tcpL4SynCookieFail = undefined;
      this._tcpL4UnauthDrop = undefined;
      this._tcpRexmitSynLimitBl = undefined;
      this._tcpRexmitSynLimitDrop = undefined;
      this._tcpRstRcvd = undefined;
      this._tcpSynAckRcvd = undefined;
      this._tcpSynCookieFail = undefined;
      this._tcpSynRcvd = undefined;
      this._udpFwdRecv = undefined;
      this._udpFwdSent = undefined;
      this._udpPayloadTooBig = undefined;
      this._udpPayloadTooSmall = undefined;
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
      this._dstBlackholeInject = value.dstBlackholeInject;
      this._dstBlackholeWithdraw = value.dstBlackholeWithdraw;
      this._dstClistOverflowPolicyAtLearning = value.dstClistOverflowPolicyAtLearning;
      this._dstEntryConnLimitExceed = value.dstEntryConnLimitExceed;
      this._dstEntryConnRateExceed = value.dstEntryConnRateExceed;
      this._dstEntryFragPktRateExceed = value.dstEntryFragPktRateExceed;
      this._dstEntryKbitRateExceed = value.dstEntryKbitRateExceed;
      this._dstEntryKbitRateExceedCount = value.dstEntryKbitRateExceedCount;
      this._dstEntryPktRateExceed = value.dstEntryPktRateExceed;
      this._dstExceedActionDrop = value.dstExceedActionDrop;
      this._dstExceedActionTunnel = value.dstExceedActionTunnel;
      this._dstFragDrop = value.dstFragDrop;
      this._dstFragRcvd = value.dstFragRcvd;
      this._dstHwDropRuleInsert = value.dstHwDropRuleInsert;
      this._dstHwDropRuleRemove = value.dstHwDropRuleRemove;
      this._dstIcmpAnyExceed = value.dstIcmpAnyExceed;
      this._dstIcmpBytesDrop = value.dstIcmpBytesDrop;
      this._dstIcmpBytesRcv = value.dstIcmpBytesRcv;
      this._dstIcmpBytesSent = value.dstIcmpBytesSent;
      this._dstIcmpDrop = value.dstIcmpDrop;
      this._dstIcmpFragPktRateExceed = value.dstIcmpFragPktRateExceed;
      this._dstIcmpFragSrcRateDrop = value.dstIcmpFragSrcRateDrop;
      this._dstIcmpKibitRateDrop = value.dstIcmpKibitRateDrop;
      this._dstIcmpPktRateExceed = value.dstIcmpPktRateExceed;
      this._dstIcmpPktRcvd = value.dstIcmpPktRcvd;
      this._dstIcmpPktSent = value.dstIcmpPktSent;
      this._dstIcmpSrcDrop = value.dstIcmpSrcDrop;
      this._dstIcmpSrcRateDrop = value.dstIcmpSrcRateDrop;
      this._dstIpProtoKbitRateExceed = value.dstIpProtoKbitRateExceed;
      this._dstIpProtoPktRateExceed = value.dstIpProtoPktRateExceed;
      this._dstL4IcmpBlacklistDrop = value.dstL4IcmpBlacklistDrop;
      this._dstL4OtherBlacklistDrop = value.dstL4OtherBlacklistDrop;
      this._dstL4TcpAuth = value.dstL4TcpAuth;
      this._dstL4TcpBlacklistDrop = value.dstL4TcpBlacklistDrop;
      this._dstL4UdpBlacklistDrop = value.dstL4UdpBlacklistDrop;
      this._dstOtherAnyExceed = value.dstOtherAnyExceed;
      this._dstOtherBytesDrop = value.dstOtherBytesDrop;
      this._dstOtherBytesRcv = value.dstOtherBytesRcv;
      this._dstOtherBytesSent = value.dstOtherBytesSent;
      this._dstOtherDrop = value.dstOtherDrop;
      this._dstOtherFilterActionBlacklist = value.dstOtherFilterActionBlacklist;
      this._dstOtherFilterActionDefaultPass = value.dstOtherFilterActionDefaultPass;
      this._dstOtherFilterActionDrop = value.dstOtherFilterActionDrop;
      this._dstOtherFilterActionWhitelist = value.dstOtherFilterActionWhitelist;
      this._dstOtherFilterMatch = value.dstOtherFilterMatch;
      this._dstOtherFilterNotMatch = value.dstOtherFilterNotMatch;
      this._dstOtherFragPktRateExceed = value.dstOtherFragPktRateExceed;
      this._dstOtherFragSrcRateDrop = value.dstOtherFragSrcRateDrop;
      this._dstOtherKibitRateDrop = value.dstOtherKibitRateDrop;
      this._dstOtherPktRateExceed = value.dstOtherPktRateExceed;
      this._dstOtherPktRcvd = value.dstOtherPktRcvd;
      this._dstOtherPktSent = value.dstOtherPktSent;
      this._dstOtherSrcDrop = value.dstOtherSrcDrop;
      this._dstOtherSrcRateDrop = value.dstOtherSrcRateDrop;
      this._dstOutNoRoute = value.dstOutNoRoute;
      this._dstPktSent = value.dstPktSent;
      this._dstPortBl = value.dstPortBl;
      this._dstPortConnLimitExceed = value.dstPortConnLimitExceed;
      this._dstPortConnRateExceed = value.dstPortConnRateExceed;
      this._dstPortKbitRateExceed = value.dstPortKbitRateExceed;
      this._dstPortKbitRateExceedPkt = value.dstPortKbitRateExceedPkt;
      this._dstPortPktRateExceed = value.dstPortPktRateExceed;
      this._dstPortUndefDrop = value.dstPortUndefDrop;
      this._dstPortUndefHit = value.dstPortUndefHit;
      this._dstSrcLearnOverflow = value.dstSrcLearnOverflow;
      this._dstSrcPortBl = value.dstSrcPortBl;
      this._dstSrcPortConnLimitExceed = value.dstSrcPortConnLimitExceed;
      this._dstSrcPortConnRateExceed = value.dstSrcPortConnRateExceed;
      this._dstSrcPortKbitRateExceed = value.dstSrcPortKbitRateExceed;
      this._dstSrcPortPktRateExceed = value.dstSrcPortPktRateExceed;
      this._dstTcpActionOnAckBlacklist = value.dstTcpActionOnAckBlacklist;
      this._dstTcpActionOnAckFail = value.dstTcpActionOnAckFail;
      this._dstTcpActionOnAckGapDrop = value.dstTcpActionOnAckGapDrop;
      this._dstTcpActionOnAckInit = value.dstTcpActionOnAckInit;
      this._dstTcpActionOnAckPass = value.dstTcpActionOnAckPass;
      this._dstTcpActionOnAckReset = value.dstTcpActionOnAckReset;
      this._dstTcpActionOnAckTimeout = value.dstTcpActionOnAckTimeout;
      this._dstTcpActionOnSynBlacklist = value.dstTcpActionOnSynBlacklist;
      this._dstTcpActionOnSynFail = value.dstTcpActionOnSynFail;
      this._dstTcpActionOnSynGapDrop = value.dstTcpActionOnSynGapDrop;
      this._dstTcpActionOnSynInit = value.dstTcpActionOnSynInit;
      this._dstTcpActionOnSynPass = value.dstTcpActionOnSynPass;
      this._dstTcpActionOnSynReset = value.dstTcpActionOnSynReset;
      this._dstTcpActionOnSynTimeout = value.dstTcpActionOnSynTimeout;
      this._dstTcpAnyExceed = value.dstTcpAnyExceed;
      this._dstTcpAuth = value.dstTcpAuth;
      this._dstTcpAuthDrop = value.dstTcpAuthDrop;
      this._dstTcpAuthPass = value.dstTcpAuthPass;
      this._dstTcpAuthResp = value.dstTcpAuthResp;
      this._dstTcpAuthRst = value.dstTcpAuthRst;
      this._dstTcpBytesDrop = value.dstTcpBytesDrop;
      this._dstTcpBytesRcv = value.dstTcpBytesRcv;
      this._dstTcpBytesSent = value.dstTcpBytesSent;
      this._dstTcpConnClose = value.dstTcpConnClose;
      this._dstTcpConnCloseHalfOpen = value.dstTcpConnCloseHalfOpen;
      this._dstTcpConnCloseWFin = value.dstTcpConnCloseWFin;
      this._dstTcpConnCloseWIdle = value.dstTcpConnCloseWIdle;
      this._dstTcpConnCloseWRst = value.dstTcpConnCloseWRst;
      this._dstTcpConnCreateFromAck = value.dstTcpConnCreateFromAck;
      this._dstTcpConnCreateFromSyn = value.dstTcpConnCreateFromSyn;
      this._dstTcpConnLimitExceed = value.dstTcpConnLimitExceed;
      this._dstTcpConnPrateExcd = value.dstTcpConnPrateExcd;
      this._dstTcpConnRateExceed = value.dstTcpConnRateExceed;
      this._dstTcpDrop = value.dstTcpDrop;
      this._dstTcpFilterActionBlacklist = value.dstTcpFilterActionBlacklist;
      this._dstTcpFilterActionDefaultPass = value.dstTcpFilterActionDefaultPass;
      this._dstTcpFilterActionDrop = value.dstTcpFilterActionDrop;
      this._dstTcpFilterActionWhitelist = value.dstTcpFilterActionWhitelist;
      this._dstTcpFilterMatch = value.dstTcpFilterMatch;
      this._dstTcpFilterNotMatch = value.dstTcpFilterNotMatch;
      this._dstTcpFragPktRateExceed = value.dstTcpFragPktRateExceed;
      this._dstTcpFragSrcRateDrop = value.dstTcpFragSrcRateDrop;
      this._dstTcpKibitRateDrop = value.dstTcpKibitRateDrop;
      this._dstTcpOutOfSeqExcd = value.dstTcpOutOfSeqExcd;
      this._dstTcpPktRateExceed = value.dstTcpPktRateExceed;
      this._dstTcpPktRcvd = value.dstTcpPktRcvd;
      this._dstTcpPktSent = value.dstTcpPktSent;
      this._dstTcpPortAnyExceed = value.dstTcpPortAnyExceed;
      this._dstTcpRetransmitExcd = value.dstTcpRetransmitExcd;
      this._dstTcpRstCookieFail = value.dstTcpRstCookieFail;
      this._dstTcpSessionAged = value.dstTcpSessionAged;
      this._dstTcpSessionCreated = value.dstTcpSessionCreated;
      this._dstTcpSrcDrop = value.dstTcpSrcDrop;
      this._dstTcpSrcRateDrop = value.dstTcpSrcRateDrop;
      this._dstTcpSyn = value.dstTcpSyn;
      this._dstTcpSynDrop = value.dstTcpSynDrop;
      this._dstTcpUnauthDrop = value.dstTcpUnauthDrop;
      this._dstTcpWellknownSportDrop = value.dstTcpWellknownSportDrop;
      this._dstTcpZeroWindowExcd = value.dstTcpZeroWindowExcd;
      this._dstUdpAnyExceed = value.dstUdpAnyExceed;
      this._dstUdpAuthDrop = value.dstUdpAuthDrop;
      this._dstUdpBytesDrop = value.dstUdpBytesDrop;
      this._dstUdpBytesRcv = value.dstUdpBytesRcv;
      this._dstUdpBytesSent = value.dstUdpBytesSent;
      this._dstUdpConnLimitExceed = value.dstUdpConnLimitExceed;
      this._dstUdpConnPrateExcd = value.dstUdpConnPrateExcd;
      this._dstUdpConnRateExceed = value.dstUdpConnRateExceed;
      this._dstUdpDrop = value.dstUdpDrop;
      this._dstUdpFilterActionBlacklist = value.dstUdpFilterActionBlacklist;
      this._dstUdpFilterActionDefaultPass = value.dstUdpFilterActionDefaultPass;
      this._dstUdpFilterActionDrop = value.dstUdpFilterActionDrop;
      this._dstUdpFilterActionWhitelist = value.dstUdpFilterActionWhitelist;
      this._dstUdpFilterMatch = value.dstUdpFilterMatch;
      this._dstUdpFilterNotMatch = value.dstUdpFilterNotMatch;
      this._dstUdpFragPktRateExceed = value.dstUdpFragPktRateExceed;
      this._dstUdpFragSrcRateDrop = value.dstUdpFragSrcRateDrop;
      this._dstUdpKibitRateDrop = value.dstUdpKibitRateDrop;
      this._dstUdpNtpMonlistReq = value.dstUdpNtpMonlistReq;
      this._dstUdpNtpMonlistResp = value.dstUdpNtpMonlistResp;
      this._dstUdpPktRateExceed = value.dstUdpPktRateExceed;
      this._dstUdpPktRcvd = value.dstUdpPktRcvd;
      this._dstUdpPktSent = value.dstUdpPktSent;
      this._dstUdpPortAnyExceed = value.dstUdpPortAnyExceed;
      this._dstUdpRetryFail = value.dstUdpRetryFail;
      this._dstUdpRetryGapDrop = value.dstUdpRetryGapDrop;
      this._dstUdpRetryInit = value.dstUdpRetryInit;
      this._dstUdpRetryPass = value.dstUdpRetryPass;
      this._dstUdpSessionAged = value.dstUdpSessionAged;
      this._dstUdpSessionCreated = value.dstUdpSessionCreated;
      this._dstUdpSrcDrop = value.dstUdpSrcDrop;
      this._dstUdpSrcRateDrop = value.dstUdpSrcRateDrop;
      this._dstUdpWellknownSportDrop = value.dstUdpWellknownSportDrop;
      this._egressBytes = value.egressBytes;
      this._egressPackets = value.egressPackets;
      this._entrySyncMessageReceived = value.entrySyncMessageReceived;
      this._entrySyncMessageSent = value.entrySyncMessageSent;
      this._icmpFwdRecv = value.icmpFwdRecv;
      this._inboundBytesDrop = value.inboundBytesDrop;
      this._inboundBytesSent = value.inboundBytesSent;
      this._inboundPktDrop = value.inboundPktDrop;
      this._ingressBytes = value.ingressBytes;
      this._ingressPackets = value.ingressPackets;
      this._noPolicyClassListMatch = value.noPolicyClassListMatch;
      this._outboundBytesDrop = value.outboundBytesDrop;
      this._outboundBytesSent = value.outboundBytesSent;
      this._outboundPktDrop = value.outboundPktDrop;
      this._outboundPktSent = value.outboundPktSent;
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
      this._progReqRespTimeExceed = value.progReqRespTimeExceed;
      this._progReqSamples = value.progReqSamples;
      this._progReqSamplesProcessed = value.progReqSamplesProcessed;
      this._progRequestLenExceed = value.progRequestLenExceed;
      this._progRespReqRatioExceed = value.progRespReqRatioExceed;
      this._progRespReqTimeExceed = value.progRespReqTimeExceed;
      this._progResponseLenExceed = value.progResponseLenExceed;
      this._progWinExceedBl = value.progWinExceedBl;
      this._progWinExceedDrop = value.progWinExceedDrop;
      this._progWinRcvdExceed = value.progWinRcvdExceed;
      this._progWinRcvdSentRatioExceed = value.progWinRcvdSentRatioExceed;
      this._progWinSamples = value.progWinSamples;
      this._progWinSamplesProcessed = value.progWinSamplesProcessed;
      this._progWinSentExceed = value.progWinSentExceed;
      this._sflowExternalPacketsSent = value.sflowExternalPacketsSent;
      this._sflowExternalSamplesPacked = value.sflowExternalSamplesPacked;
      this._sflowInternalPacketsSent = value.sflowInternalPacketsSent;
      this._sflowInternalSamplesPacked = value.sflowInternalSamplesPacked;
      this._srcDstPairEntryIcmp = value.srcDstPairEntryIcmp;
      this._srcDstPairEntryOther = value.srcDstPairEntryOther;
      this._srcDstPairEntryTcp = value.srcDstPairEntryTcp;
      this._srcDstPairEntryTotal = value.srcDstPairEntryTotal;
      this._srcDstPairEntryUdp = value.srcDstPairEntryUdp;
      this._srcFragDrop = value.srcFragDrop;
      this._srcHwDrop = value.srcHwDrop;
      this._srcHwDropRuleInsert = value.srcHwDropRuleInsert;
      this._srcHwDropRuleRemove = value.srcHwDropRuleRemove;
      this._srcL4IcmpBlacklistDrop = value.srcL4IcmpBlacklistDrop;
      this._srcL4OtherBlacklistDrop = value.srcL4OtherBlacklistDrop;
      this._srcL4TcpBlacklistDrop = value.srcL4TcpBlacklistDrop;
      this._srcL4UdpBlacklistDrop = value.srcL4UdpBlacklistDrop;
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
      this._tcpFwdSent = value.tcpFwdSent;
      this._tcpInvalidSyn = value.tcpInvalidSyn;
      this._tcpL4RstCookieFail = value.tcpL4RstCookieFail;
      this._tcpL4SynCookieFail = value.tcpL4SynCookieFail;
      this._tcpL4UnauthDrop = value.tcpL4UnauthDrop;
      this._tcpRexmitSynLimitBl = value.tcpRexmitSynLimitBl;
      this._tcpRexmitSynLimitDrop = value.tcpRexmitSynLimitDrop;
      this._tcpRstRcvd = value.tcpRstRcvd;
      this._tcpSynAckRcvd = value.tcpSynAckRcvd;
      this._tcpSynCookieFail = value.tcpSynCookieFail;
      this._tcpSynRcvd = value.tcpSynRcvd;
      this._udpFwdRecv = value.udpFwdRecv;
      this._udpFwdSent = value.udpFwdSent;
      this._udpPayloadTooBig = value.udpPayloadTooBig;
      this._udpPayloadTooSmall = value.udpPayloadTooSmall;
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

  // dst_blackhole_inject - computed: false, optional: true, required: false
  private _dstBlackholeInject?: number; 
  public get dstBlackholeInject() {
    return this.getNumberAttribute('dst_blackhole_inject');
  }
  public set dstBlackholeInject(value: number) {
    this._dstBlackholeInject = value;
  }
  public resetDstBlackholeInject() {
    this._dstBlackholeInject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstBlackholeInjectInput() {
    return this._dstBlackholeInject;
  }

  // dst_blackhole_withdraw - computed: false, optional: true, required: false
  private _dstBlackholeWithdraw?: number; 
  public get dstBlackholeWithdraw() {
    return this.getNumberAttribute('dst_blackhole_withdraw');
  }
  public set dstBlackholeWithdraw(value: number) {
    this._dstBlackholeWithdraw = value;
  }
  public resetDstBlackholeWithdraw() {
    this._dstBlackholeWithdraw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstBlackholeWithdrawInput() {
    return this._dstBlackholeWithdraw;
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

  // dst_frag_drop - computed: false, optional: true, required: false
  private _dstFragDrop?: number; 
  public get dstFragDrop() {
    return this.getNumberAttribute('dst_frag_drop');
  }
  public set dstFragDrop(value: number) {
    this._dstFragDrop = value;
  }
  public resetDstFragDrop() {
    this._dstFragDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstFragDropInput() {
    return this._dstFragDrop;
  }

  // dst_frag_rcvd - computed: false, optional: true, required: false
  private _dstFragRcvd?: number; 
  public get dstFragRcvd() {
    return this.getNumberAttribute('dst_frag_rcvd');
  }
  public set dstFragRcvd(value: number) {
    this._dstFragRcvd = value;
  }
  public resetDstFragRcvd() {
    this._dstFragRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstFragRcvdInput() {
    return this._dstFragRcvd;
  }

  // dst_hw_drop_rule_insert - computed: false, optional: true, required: false
  private _dstHwDropRuleInsert?: number; 
  public get dstHwDropRuleInsert() {
    return this.getNumberAttribute('dst_hw_drop_rule_insert');
  }
  public set dstHwDropRuleInsert(value: number) {
    this._dstHwDropRuleInsert = value;
  }
  public resetDstHwDropRuleInsert() {
    this._dstHwDropRuleInsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstHwDropRuleInsertInput() {
    return this._dstHwDropRuleInsert;
  }

  // dst_hw_drop_rule_remove - computed: false, optional: true, required: false
  private _dstHwDropRuleRemove?: number; 
  public get dstHwDropRuleRemove() {
    return this.getNumberAttribute('dst_hw_drop_rule_remove');
  }
  public set dstHwDropRuleRemove(value: number) {
    this._dstHwDropRuleRemove = value;
  }
  public resetDstHwDropRuleRemove() {
    this._dstHwDropRuleRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstHwDropRuleRemoveInput() {
    return this._dstHwDropRuleRemove;
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

  // dst_icmp_bytes_drop - computed: false, optional: true, required: false
  private _dstIcmpBytesDrop?: number; 
  public get dstIcmpBytesDrop() {
    return this.getNumberAttribute('dst_icmp_bytes_drop');
  }
  public set dstIcmpBytesDrop(value: number) {
    this._dstIcmpBytesDrop = value;
  }
  public resetDstIcmpBytesDrop() {
    this._dstIcmpBytesDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIcmpBytesDropInput() {
    return this._dstIcmpBytesDrop;
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

  // dst_icmp_drop - computed: false, optional: true, required: false
  private _dstIcmpDrop?: number; 
  public get dstIcmpDrop() {
    return this.getNumberAttribute('dst_icmp_drop');
  }
  public set dstIcmpDrop(value: number) {
    this._dstIcmpDrop = value;
  }
  public resetDstIcmpDrop() {
    this._dstIcmpDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIcmpDropInput() {
    return this._dstIcmpDrop;
  }

  // dst_icmp_frag_pkt_rate_exceed - computed: false, optional: true, required: false
  private _dstIcmpFragPktRateExceed?: number; 
  public get dstIcmpFragPktRateExceed() {
    return this.getNumberAttribute('dst_icmp_frag_pkt_rate_exceed');
  }
  public set dstIcmpFragPktRateExceed(value: number) {
    this._dstIcmpFragPktRateExceed = value;
  }
  public resetDstIcmpFragPktRateExceed() {
    this._dstIcmpFragPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIcmpFragPktRateExceedInput() {
    return this._dstIcmpFragPktRateExceed;
  }

  // dst_icmp_frag_src_rate_drop - computed: false, optional: true, required: false
  private _dstIcmpFragSrcRateDrop?: number; 
  public get dstIcmpFragSrcRateDrop() {
    return this.getNumberAttribute('dst_icmp_frag_src_rate_drop');
  }
  public set dstIcmpFragSrcRateDrop(value: number) {
    this._dstIcmpFragSrcRateDrop = value;
  }
  public resetDstIcmpFragSrcRateDrop() {
    this._dstIcmpFragSrcRateDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIcmpFragSrcRateDropInput() {
    return this._dstIcmpFragSrcRateDrop;
  }

  // dst_icmp_kibit_rate_drop - computed: false, optional: true, required: false
  private _dstIcmpKibitRateDrop?: number; 
  public get dstIcmpKibitRateDrop() {
    return this.getNumberAttribute('dst_icmp_kibit_rate_drop');
  }
  public set dstIcmpKibitRateDrop(value: number) {
    this._dstIcmpKibitRateDrop = value;
  }
  public resetDstIcmpKibitRateDrop() {
    this._dstIcmpKibitRateDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIcmpKibitRateDropInput() {
    return this._dstIcmpKibitRateDrop;
  }

  // dst_icmp_pkt_rate_exceed - computed: false, optional: true, required: false
  private _dstIcmpPktRateExceed?: number; 
  public get dstIcmpPktRateExceed() {
    return this.getNumberAttribute('dst_icmp_pkt_rate_exceed');
  }
  public set dstIcmpPktRateExceed(value: number) {
    this._dstIcmpPktRateExceed = value;
  }
  public resetDstIcmpPktRateExceed() {
    this._dstIcmpPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIcmpPktRateExceedInput() {
    return this._dstIcmpPktRateExceed;
  }

  // dst_icmp_pkt_rcvd - computed: false, optional: true, required: false
  private _dstIcmpPktRcvd?: number; 
  public get dstIcmpPktRcvd() {
    return this.getNumberAttribute('dst_icmp_pkt_rcvd');
  }
  public set dstIcmpPktRcvd(value: number) {
    this._dstIcmpPktRcvd = value;
  }
  public resetDstIcmpPktRcvd() {
    this._dstIcmpPktRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIcmpPktRcvdInput() {
    return this._dstIcmpPktRcvd;
  }

  // dst_icmp_pkt_sent - computed: false, optional: true, required: false
  private _dstIcmpPktSent?: number; 
  public get dstIcmpPktSent() {
    return this.getNumberAttribute('dst_icmp_pkt_sent');
  }
  public set dstIcmpPktSent(value: number) {
    this._dstIcmpPktSent = value;
  }
  public resetDstIcmpPktSent() {
    this._dstIcmpPktSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIcmpPktSentInput() {
    return this._dstIcmpPktSent;
  }

  // dst_icmp_src_drop - computed: false, optional: true, required: false
  private _dstIcmpSrcDrop?: number; 
  public get dstIcmpSrcDrop() {
    return this.getNumberAttribute('dst_icmp_src_drop');
  }
  public set dstIcmpSrcDrop(value: number) {
    this._dstIcmpSrcDrop = value;
  }
  public resetDstIcmpSrcDrop() {
    this._dstIcmpSrcDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIcmpSrcDropInput() {
    return this._dstIcmpSrcDrop;
  }

  // dst_icmp_src_rate_drop - computed: false, optional: true, required: false
  private _dstIcmpSrcRateDrop?: number; 
  public get dstIcmpSrcRateDrop() {
    return this.getNumberAttribute('dst_icmp_src_rate_drop');
  }
  public set dstIcmpSrcRateDrop(value: number) {
    this._dstIcmpSrcRateDrop = value;
  }
  public resetDstIcmpSrcRateDrop() {
    this._dstIcmpSrcRateDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIcmpSrcRateDropInput() {
    return this._dstIcmpSrcRateDrop;
  }

  // dst_ip_proto_kbit_rate_exceed - computed: false, optional: true, required: false
  private _dstIpProtoKbitRateExceed?: number; 
  public get dstIpProtoKbitRateExceed() {
    return this.getNumberAttribute('dst_ip_proto_kbit_rate_exceed');
  }
  public set dstIpProtoKbitRateExceed(value: number) {
    this._dstIpProtoKbitRateExceed = value;
  }
  public resetDstIpProtoKbitRateExceed() {
    this._dstIpProtoKbitRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpProtoKbitRateExceedInput() {
    return this._dstIpProtoKbitRateExceed;
  }

  // dst_ip_proto_pkt_rate_exceed - computed: false, optional: true, required: false
  private _dstIpProtoPktRateExceed?: number; 
  public get dstIpProtoPktRateExceed() {
    return this.getNumberAttribute('dst_ip_proto_pkt_rate_exceed');
  }
  public set dstIpProtoPktRateExceed(value: number) {
    this._dstIpProtoPktRateExceed = value;
  }
  public resetDstIpProtoPktRateExceed() {
    this._dstIpProtoPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpProtoPktRateExceedInput() {
    return this._dstIpProtoPktRateExceed;
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

  // dst_l4_tcp_auth - computed: false, optional: true, required: false
  private _dstL4TcpAuth?: number; 
  public get dstL4TcpAuth() {
    return this.getNumberAttribute('dst_l4_tcp_auth');
  }
  public set dstL4TcpAuth(value: number) {
    this._dstL4TcpAuth = value;
  }
  public resetDstL4TcpAuth() {
    this._dstL4TcpAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstL4TcpAuthInput() {
    return this._dstL4TcpAuth;
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

  // dst_other_bytes_drop - computed: false, optional: true, required: false
  private _dstOtherBytesDrop?: number; 
  public get dstOtherBytesDrop() {
    return this.getNumberAttribute('dst_other_bytes_drop');
  }
  public set dstOtherBytesDrop(value: number) {
    this._dstOtherBytesDrop = value;
  }
  public resetDstOtherBytesDrop() {
    this._dstOtherBytesDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstOtherBytesDropInput() {
    return this._dstOtherBytesDrop;
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

  // dst_other_drop - computed: false, optional: true, required: false
  private _dstOtherDrop?: number; 
  public get dstOtherDrop() {
    return this.getNumberAttribute('dst_other_drop');
  }
  public set dstOtherDrop(value: number) {
    this._dstOtherDrop = value;
  }
  public resetDstOtherDrop() {
    this._dstOtherDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstOtherDropInput() {
    return this._dstOtherDrop;
  }

  // dst_other_filter_action_blacklist - computed: false, optional: true, required: false
  private _dstOtherFilterActionBlacklist?: number; 
  public get dstOtherFilterActionBlacklist() {
    return this.getNumberAttribute('dst_other_filter_action_blacklist');
  }
  public set dstOtherFilterActionBlacklist(value: number) {
    this._dstOtherFilterActionBlacklist = value;
  }
  public resetDstOtherFilterActionBlacklist() {
    this._dstOtherFilterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstOtherFilterActionBlacklistInput() {
    return this._dstOtherFilterActionBlacklist;
  }

  // dst_other_filter_action_default_pass - computed: false, optional: true, required: false
  private _dstOtherFilterActionDefaultPass?: number; 
  public get dstOtherFilterActionDefaultPass() {
    return this.getNumberAttribute('dst_other_filter_action_default_pass');
  }
  public set dstOtherFilterActionDefaultPass(value: number) {
    this._dstOtherFilterActionDefaultPass = value;
  }
  public resetDstOtherFilterActionDefaultPass() {
    this._dstOtherFilterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstOtherFilterActionDefaultPassInput() {
    return this._dstOtherFilterActionDefaultPass;
  }

  // dst_other_filter_action_drop - computed: false, optional: true, required: false
  private _dstOtherFilterActionDrop?: number; 
  public get dstOtherFilterActionDrop() {
    return this.getNumberAttribute('dst_other_filter_action_drop');
  }
  public set dstOtherFilterActionDrop(value: number) {
    this._dstOtherFilterActionDrop = value;
  }
  public resetDstOtherFilterActionDrop() {
    this._dstOtherFilterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstOtherFilterActionDropInput() {
    return this._dstOtherFilterActionDrop;
  }

  // dst_other_filter_action_whitelist - computed: false, optional: true, required: false
  private _dstOtherFilterActionWhitelist?: number; 
  public get dstOtherFilterActionWhitelist() {
    return this.getNumberAttribute('dst_other_filter_action_whitelist');
  }
  public set dstOtherFilterActionWhitelist(value: number) {
    this._dstOtherFilterActionWhitelist = value;
  }
  public resetDstOtherFilterActionWhitelist() {
    this._dstOtherFilterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstOtherFilterActionWhitelistInput() {
    return this._dstOtherFilterActionWhitelist;
  }

  // dst_other_filter_match - computed: false, optional: true, required: false
  private _dstOtherFilterMatch?: number; 
  public get dstOtherFilterMatch() {
    return this.getNumberAttribute('dst_other_filter_match');
  }
  public set dstOtherFilterMatch(value: number) {
    this._dstOtherFilterMatch = value;
  }
  public resetDstOtherFilterMatch() {
    this._dstOtherFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstOtherFilterMatchInput() {
    return this._dstOtherFilterMatch;
  }

  // dst_other_filter_not_match - computed: false, optional: true, required: false
  private _dstOtherFilterNotMatch?: number; 
  public get dstOtherFilterNotMatch() {
    return this.getNumberAttribute('dst_other_filter_not_match');
  }
  public set dstOtherFilterNotMatch(value: number) {
    this._dstOtherFilterNotMatch = value;
  }
  public resetDstOtherFilterNotMatch() {
    this._dstOtherFilterNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstOtherFilterNotMatchInput() {
    return this._dstOtherFilterNotMatch;
  }

  // dst_other_frag_pkt_rate_exceed - computed: false, optional: true, required: false
  private _dstOtherFragPktRateExceed?: number; 
  public get dstOtherFragPktRateExceed() {
    return this.getNumberAttribute('dst_other_frag_pkt_rate_exceed');
  }
  public set dstOtherFragPktRateExceed(value: number) {
    this._dstOtherFragPktRateExceed = value;
  }
  public resetDstOtherFragPktRateExceed() {
    this._dstOtherFragPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstOtherFragPktRateExceedInput() {
    return this._dstOtherFragPktRateExceed;
  }

  // dst_other_frag_src_rate_drop - computed: false, optional: true, required: false
  private _dstOtherFragSrcRateDrop?: number; 
  public get dstOtherFragSrcRateDrop() {
    return this.getNumberAttribute('dst_other_frag_src_rate_drop');
  }
  public set dstOtherFragSrcRateDrop(value: number) {
    this._dstOtherFragSrcRateDrop = value;
  }
  public resetDstOtherFragSrcRateDrop() {
    this._dstOtherFragSrcRateDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstOtherFragSrcRateDropInput() {
    return this._dstOtherFragSrcRateDrop;
  }

  // dst_other_kibit_rate_drop - computed: false, optional: true, required: false
  private _dstOtherKibitRateDrop?: number; 
  public get dstOtherKibitRateDrop() {
    return this.getNumberAttribute('dst_other_kibit_rate_drop');
  }
  public set dstOtherKibitRateDrop(value: number) {
    this._dstOtherKibitRateDrop = value;
  }
  public resetDstOtherKibitRateDrop() {
    this._dstOtherKibitRateDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstOtherKibitRateDropInput() {
    return this._dstOtherKibitRateDrop;
  }

  // dst_other_pkt_rate_exceed - computed: false, optional: true, required: false
  private _dstOtherPktRateExceed?: number; 
  public get dstOtherPktRateExceed() {
    return this.getNumberAttribute('dst_other_pkt_rate_exceed');
  }
  public set dstOtherPktRateExceed(value: number) {
    this._dstOtherPktRateExceed = value;
  }
  public resetDstOtherPktRateExceed() {
    this._dstOtherPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstOtherPktRateExceedInput() {
    return this._dstOtherPktRateExceed;
  }

  // dst_other_pkt_rcvd - computed: false, optional: true, required: false
  private _dstOtherPktRcvd?: number; 
  public get dstOtherPktRcvd() {
    return this.getNumberAttribute('dst_other_pkt_rcvd');
  }
  public set dstOtherPktRcvd(value: number) {
    this._dstOtherPktRcvd = value;
  }
  public resetDstOtherPktRcvd() {
    this._dstOtherPktRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstOtherPktRcvdInput() {
    return this._dstOtherPktRcvd;
  }

  // dst_other_pkt_sent - computed: false, optional: true, required: false
  private _dstOtherPktSent?: number; 
  public get dstOtherPktSent() {
    return this.getNumberAttribute('dst_other_pkt_sent');
  }
  public set dstOtherPktSent(value: number) {
    this._dstOtherPktSent = value;
  }
  public resetDstOtherPktSent() {
    this._dstOtherPktSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstOtherPktSentInput() {
    return this._dstOtherPktSent;
  }

  // dst_other_src_drop - computed: false, optional: true, required: false
  private _dstOtherSrcDrop?: number; 
  public get dstOtherSrcDrop() {
    return this.getNumberAttribute('dst_other_src_drop');
  }
  public set dstOtherSrcDrop(value: number) {
    this._dstOtherSrcDrop = value;
  }
  public resetDstOtherSrcDrop() {
    this._dstOtherSrcDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstOtherSrcDropInput() {
    return this._dstOtherSrcDrop;
  }

  // dst_other_src_rate_drop - computed: false, optional: true, required: false
  private _dstOtherSrcRateDrop?: number; 
  public get dstOtherSrcRateDrop() {
    return this.getNumberAttribute('dst_other_src_rate_drop');
  }
  public set dstOtherSrcRateDrop(value: number) {
    this._dstOtherSrcRateDrop = value;
  }
  public resetDstOtherSrcRateDrop() {
    this._dstOtherSrcRateDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstOtherSrcRateDropInput() {
    return this._dstOtherSrcRateDrop;
  }

  // dst_out_no_route - computed: false, optional: true, required: false
  private _dstOutNoRoute?: number; 
  public get dstOutNoRoute() {
    return this.getNumberAttribute('dst_out_no_route');
  }
  public set dstOutNoRoute(value: number) {
    this._dstOutNoRoute = value;
  }
  public resetDstOutNoRoute() {
    this._dstOutNoRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstOutNoRouteInput() {
    return this._dstOutNoRoute;
  }

  // dst_pkt_sent - computed: false, optional: true, required: false
  private _dstPktSent?: number; 
  public get dstPktSent() {
    return this.getNumberAttribute('dst_pkt_sent');
  }
  public set dstPktSent(value: number) {
    this._dstPktSent = value;
  }
  public resetDstPktSent() {
    this._dstPktSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPktSentInput() {
    return this._dstPktSent;
  }

  // dst_port_bl - computed: false, optional: true, required: false
  private _dstPortBl?: number; 
  public get dstPortBl() {
    return this.getNumberAttribute('dst_port_bl');
  }
  public set dstPortBl(value: number) {
    this._dstPortBl = value;
  }
  public resetDstPortBl() {
    this._dstPortBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortBlInput() {
    return this._dstPortBl;
  }

  // dst_port_conn_limit_exceed - computed: false, optional: true, required: false
  private _dstPortConnLimitExceed?: number; 
  public get dstPortConnLimitExceed() {
    return this.getNumberAttribute('dst_port_conn_limit_exceed');
  }
  public set dstPortConnLimitExceed(value: number) {
    this._dstPortConnLimitExceed = value;
  }
  public resetDstPortConnLimitExceed() {
    this._dstPortConnLimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortConnLimitExceedInput() {
    return this._dstPortConnLimitExceed;
  }

  // dst_port_conn_rate_exceed - computed: false, optional: true, required: false
  private _dstPortConnRateExceed?: number; 
  public get dstPortConnRateExceed() {
    return this.getNumberAttribute('dst_port_conn_rate_exceed');
  }
  public set dstPortConnRateExceed(value: number) {
    this._dstPortConnRateExceed = value;
  }
  public resetDstPortConnRateExceed() {
    this._dstPortConnRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortConnRateExceedInput() {
    return this._dstPortConnRateExceed;
  }

  // dst_port_kbit_rate_exceed - computed: false, optional: true, required: false
  private _dstPortKbitRateExceed?: number; 
  public get dstPortKbitRateExceed() {
    return this.getNumberAttribute('dst_port_kbit_rate_exceed');
  }
  public set dstPortKbitRateExceed(value: number) {
    this._dstPortKbitRateExceed = value;
  }
  public resetDstPortKbitRateExceed() {
    this._dstPortKbitRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortKbitRateExceedInput() {
    return this._dstPortKbitRateExceed;
  }

  // dst_port_kbit_rate_exceed_pkt - computed: false, optional: true, required: false
  private _dstPortKbitRateExceedPkt?: number; 
  public get dstPortKbitRateExceedPkt() {
    return this.getNumberAttribute('dst_port_kbit_rate_exceed_pkt');
  }
  public set dstPortKbitRateExceedPkt(value: number) {
    this._dstPortKbitRateExceedPkt = value;
  }
  public resetDstPortKbitRateExceedPkt() {
    this._dstPortKbitRateExceedPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortKbitRateExceedPktInput() {
    return this._dstPortKbitRateExceedPkt;
  }

  // dst_port_pkt_rate_exceed - computed: false, optional: true, required: false
  private _dstPortPktRateExceed?: number; 
  public get dstPortPktRateExceed() {
    return this.getNumberAttribute('dst_port_pkt_rate_exceed');
  }
  public set dstPortPktRateExceed(value: number) {
    this._dstPortPktRateExceed = value;
  }
  public resetDstPortPktRateExceed() {
    this._dstPortPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortPktRateExceedInput() {
    return this._dstPortPktRateExceed;
  }

  // dst_port_undef_drop - computed: false, optional: true, required: false
  private _dstPortUndefDrop?: number; 
  public get dstPortUndefDrop() {
    return this.getNumberAttribute('dst_port_undef_drop');
  }
  public set dstPortUndefDrop(value: number) {
    this._dstPortUndefDrop = value;
  }
  public resetDstPortUndefDrop() {
    this._dstPortUndefDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortUndefDropInput() {
    return this._dstPortUndefDrop;
  }

  // dst_port_undef_hit - computed: false, optional: true, required: false
  private _dstPortUndefHit?: number; 
  public get dstPortUndefHit() {
    return this.getNumberAttribute('dst_port_undef_hit');
  }
  public set dstPortUndefHit(value: number) {
    this._dstPortUndefHit = value;
  }
  public resetDstPortUndefHit() {
    this._dstPortUndefHit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortUndefHitInput() {
    return this._dstPortUndefHit;
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

  // dst_src_port_bl - computed: false, optional: true, required: false
  private _dstSrcPortBl?: number; 
  public get dstSrcPortBl() {
    return this.getNumberAttribute('dst_src_port_bl');
  }
  public set dstSrcPortBl(value: number) {
    this._dstSrcPortBl = value;
  }
  public resetDstSrcPortBl() {
    this._dstSrcPortBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSrcPortBlInput() {
    return this._dstSrcPortBl;
  }

  // dst_src_port_conn_limit_exceed - computed: false, optional: true, required: false
  private _dstSrcPortConnLimitExceed?: number; 
  public get dstSrcPortConnLimitExceed() {
    return this.getNumberAttribute('dst_src_port_conn_limit_exceed');
  }
  public set dstSrcPortConnLimitExceed(value: number) {
    this._dstSrcPortConnLimitExceed = value;
  }
  public resetDstSrcPortConnLimitExceed() {
    this._dstSrcPortConnLimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSrcPortConnLimitExceedInput() {
    return this._dstSrcPortConnLimitExceed;
  }

  // dst_src_port_conn_rate_exceed - computed: false, optional: true, required: false
  private _dstSrcPortConnRateExceed?: number; 
  public get dstSrcPortConnRateExceed() {
    return this.getNumberAttribute('dst_src_port_conn_rate_exceed');
  }
  public set dstSrcPortConnRateExceed(value: number) {
    this._dstSrcPortConnRateExceed = value;
  }
  public resetDstSrcPortConnRateExceed() {
    this._dstSrcPortConnRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSrcPortConnRateExceedInput() {
    return this._dstSrcPortConnRateExceed;
  }

  // dst_src_port_kbit_rate_exceed - computed: false, optional: true, required: false
  private _dstSrcPortKbitRateExceed?: number; 
  public get dstSrcPortKbitRateExceed() {
    return this.getNumberAttribute('dst_src_port_kbit_rate_exceed');
  }
  public set dstSrcPortKbitRateExceed(value: number) {
    this._dstSrcPortKbitRateExceed = value;
  }
  public resetDstSrcPortKbitRateExceed() {
    this._dstSrcPortKbitRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSrcPortKbitRateExceedInput() {
    return this._dstSrcPortKbitRateExceed;
  }

  // dst_src_port_pkt_rate_exceed - computed: false, optional: true, required: false
  private _dstSrcPortPktRateExceed?: number; 
  public get dstSrcPortPktRateExceed() {
    return this.getNumberAttribute('dst_src_port_pkt_rate_exceed');
  }
  public set dstSrcPortPktRateExceed(value: number) {
    this._dstSrcPortPktRateExceed = value;
  }
  public resetDstSrcPortPktRateExceed() {
    this._dstSrcPortPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSrcPortPktRateExceedInput() {
    return this._dstSrcPortPktRateExceed;
  }

  // dst_tcp_action_on_ack_blacklist - computed: false, optional: true, required: false
  private _dstTcpActionOnAckBlacklist?: number; 
  public get dstTcpActionOnAckBlacklist() {
    return this.getNumberAttribute('dst_tcp_action_on_ack_blacklist');
  }
  public set dstTcpActionOnAckBlacklist(value: number) {
    this._dstTcpActionOnAckBlacklist = value;
  }
  public resetDstTcpActionOnAckBlacklist() {
    this._dstTcpActionOnAckBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpActionOnAckBlacklistInput() {
    return this._dstTcpActionOnAckBlacklist;
  }

  // dst_tcp_action_on_ack_fail - computed: false, optional: true, required: false
  private _dstTcpActionOnAckFail?: number; 
  public get dstTcpActionOnAckFail() {
    return this.getNumberAttribute('dst_tcp_action_on_ack_fail');
  }
  public set dstTcpActionOnAckFail(value: number) {
    this._dstTcpActionOnAckFail = value;
  }
  public resetDstTcpActionOnAckFail() {
    this._dstTcpActionOnAckFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpActionOnAckFailInput() {
    return this._dstTcpActionOnAckFail;
  }

  // dst_tcp_action_on_ack_gap_drop - computed: false, optional: true, required: false
  private _dstTcpActionOnAckGapDrop?: number; 
  public get dstTcpActionOnAckGapDrop() {
    return this.getNumberAttribute('dst_tcp_action_on_ack_gap_drop');
  }
  public set dstTcpActionOnAckGapDrop(value: number) {
    this._dstTcpActionOnAckGapDrop = value;
  }
  public resetDstTcpActionOnAckGapDrop() {
    this._dstTcpActionOnAckGapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpActionOnAckGapDropInput() {
    return this._dstTcpActionOnAckGapDrop;
  }

  // dst_tcp_action_on_ack_init - computed: false, optional: true, required: false
  private _dstTcpActionOnAckInit?: number; 
  public get dstTcpActionOnAckInit() {
    return this.getNumberAttribute('dst_tcp_action_on_ack_init');
  }
  public set dstTcpActionOnAckInit(value: number) {
    this._dstTcpActionOnAckInit = value;
  }
  public resetDstTcpActionOnAckInit() {
    this._dstTcpActionOnAckInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpActionOnAckInitInput() {
    return this._dstTcpActionOnAckInit;
  }

  // dst_tcp_action_on_ack_pass - computed: false, optional: true, required: false
  private _dstTcpActionOnAckPass?: number; 
  public get dstTcpActionOnAckPass() {
    return this.getNumberAttribute('dst_tcp_action_on_ack_pass');
  }
  public set dstTcpActionOnAckPass(value: number) {
    this._dstTcpActionOnAckPass = value;
  }
  public resetDstTcpActionOnAckPass() {
    this._dstTcpActionOnAckPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpActionOnAckPassInput() {
    return this._dstTcpActionOnAckPass;
  }

  // dst_tcp_action_on_ack_reset - computed: false, optional: true, required: false
  private _dstTcpActionOnAckReset?: number; 
  public get dstTcpActionOnAckReset() {
    return this.getNumberAttribute('dst_tcp_action_on_ack_reset');
  }
  public set dstTcpActionOnAckReset(value: number) {
    this._dstTcpActionOnAckReset = value;
  }
  public resetDstTcpActionOnAckReset() {
    this._dstTcpActionOnAckReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpActionOnAckResetInput() {
    return this._dstTcpActionOnAckReset;
  }

  // dst_tcp_action_on_ack_timeout - computed: false, optional: true, required: false
  private _dstTcpActionOnAckTimeout?: number; 
  public get dstTcpActionOnAckTimeout() {
    return this.getNumberAttribute('dst_tcp_action_on_ack_timeout');
  }
  public set dstTcpActionOnAckTimeout(value: number) {
    this._dstTcpActionOnAckTimeout = value;
  }
  public resetDstTcpActionOnAckTimeout() {
    this._dstTcpActionOnAckTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpActionOnAckTimeoutInput() {
    return this._dstTcpActionOnAckTimeout;
  }

  // dst_tcp_action_on_syn_blacklist - computed: false, optional: true, required: false
  private _dstTcpActionOnSynBlacklist?: number; 
  public get dstTcpActionOnSynBlacklist() {
    return this.getNumberAttribute('dst_tcp_action_on_syn_blacklist');
  }
  public set dstTcpActionOnSynBlacklist(value: number) {
    this._dstTcpActionOnSynBlacklist = value;
  }
  public resetDstTcpActionOnSynBlacklist() {
    this._dstTcpActionOnSynBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpActionOnSynBlacklistInput() {
    return this._dstTcpActionOnSynBlacklist;
  }

  // dst_tcp_action_on_syn_fail - computed: false, optional: true, required: false
  private _dstTcpActionOnSynFail?: number; 
  public get dstTcpActionOnSynFail() {
    return this.getNumberAttribute('dst_tcp_action_on_syn_fail');
  }
  public set dstTcpActionOnSynFail(value: number) {
    this._dstTcpActionOnSynFail = value;
  }
  public resetDstTcpActionOnSynFail() {
    this._dstTcpActionOnSynFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpActionOnSynFailInput() {
    return this._dstTcpActionOnSynFail;
  }

  // dst_tcp_action_on_syn_gap_drop - computed: false, optional: true, required: false
  private _dstTcpActionOnSynGapDrop?: number; 
  public get dstTcpActionOnSynGapDrop() {
    return this.getNumberAttribute('dst_tcp_action_on_syn_gap_drop');
  }
  public set dstTcpActionOnSynGapDrop(value: number) {
    this._dstTcpActionOnSynGapDrop = value;
  }
  public resetDstTcpActionOnSynGapDrop() {
    this._dstTcpActionOnSynGapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpActionOnSynGapDropInput() {
    return this._dstTcpActionOnSynGapDrop;
  }

  // dst_tcp_action_on_syn_init - computed: false, optional: true, required: false
  private _dstTcpActionOnSynInit?: number; 
  public get dstTcpActionOnSynInit() {
    return this.getNumberAttribute('dst_tcp_action_on_syn_init');
  }
  public set dstTcpActionOnSynInit(value: number) {
    this._dstTcpActionOnSynInit = value;
  }
  public resetDstTcpActionOnSynInit() {
    this._dstTcpActionOnSynInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpActionOnSynInitInput() {
    return this._dstTcpActionOnSynInit;
  }

  // dst_tcp_action_on_syn_pass - computed: false, optional: true, required: false
  private _dstTcpActionOnSynPass?: number; 
  public get dstTcpActionOnSynPass() {
    return this.getNumberAttribute('dst_tcp_action_on_syn_pass');
  }
  public set dstTcpActionOnSynPass(value: number) {
    this._dstTcpActionOnSynPass = value;
  }
  public resetDstTcpActionOnSynPass() {
    this._dstTcpActionOnSynPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpActionOnSynPassInput() {
    return this._dstTcpActionOnSynPass;
  }

  // dst_tcp_action_on_syn_reset - computed: false, optional: true, required: false
  private _dstTcpActionOnSynReset?: number; 
  public get dstTcpActionOnSynReset() {
    return this.getNumberAttribute('dst_tcp_action_on_syn_reset');
  }
  public set dstTcpActionOnSynReset(value: number) {
    this._dstTcpActionOnSynReset = value;
  }
  public resetDstTcpActionOnSynReset() {
    this._dstTcpActionOnSynReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpActionOnSynResetInput() {
    return this._dstTcpActionOnSynReset;
  }

  // dst_tcp_action_on_syn_timeout - computed: false, optional: true, required: false
  private _dstTcpActionOnSynTimeout?: number; 
  public get dstTcpActionOnSynTimeout() {
    return this.getNumberAttribute('dst_tcp_action_on_syn_timeout');
  }
  public set dstTcpActionOnSynTimeout(value: number) {
    this._dstTcpActionOnSynTimeout = value;
  }
  public resetDstTcpActionOnSynTimeout() {
    this._dstTcpActionOnSynTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpActionOnSynTimeoutInput() {
    return this._dstTcpActionOnSynTimeout;
  }

  // dst_tcp_any_exceed - computed: false, optional: true, required: false
  private _dstTcpAnyExceed?: number; 
  public get dstTcpAnyExceed() {
    return this.getNumberAttribute('dst_tcp_any_exceed');
  }
  public set dstTcpAnyExceed(value: number) {
    this._dstTcpAnyExceed = value;
  }
  public resetDstTcpAnyExceed() {
    this._dstTcpAnyExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpAnyExceedInput() {
    return this._dstTcpAnyExceed;
  }

  // dst_tcp_auth - computed: false, optional: true, required: false
  private _dstTcpAuth?: number; 
  public get dstTcpAuth() {
    return this.getNumberAttribute('dst_tcp_auth');
  }
  public set dstTcpAuth(value: number) {
    this._dstTcpAuth = value;
  }
  public resetDstTcpAuth() {
    this._dstTcpAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpAuthInput() {
    return this._dstTcpAuth;
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

  // dst_tcp_auth_pass - computed: false, optional: true, required: false
  private _dstTcpAuthPass?: number; 
  public get dstTcpAuthPass() {
    return this.getNumberAttribute('dst_tcp_auth_pass');
  }
  public set dstTcpAuthPass(value: number) {
    this._dstTcpAuthPass = value;
  }
  public resetDstTcpAuthPass() {
    this._dstTcpAuthPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpAuthPassInput() {
    return this._dstTcpAuthPass;
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

  // dst_tcp_bytes_drop - computed: false, optional: true, required: false
  private _dstTcpBytesDrop?: number; 
  public get dstTcpBytesDrop() {
    return this.getNumberAttribute('dst_tcp_bytes_drop');
  }
  public set dstTcpBytesDrop(value: number) {
    this._dstTcpBytesDrop = value;
  }
  public resetDstTcpBytesDrop() {
    this._dstTcpBytesDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpBytesDropInput() {
    return this._dstTcpBytesDrop;
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

  // dst_tcp_conn_limit_exceed - computed: false, optional: true, required: false
  private _dstTcpConnLimitExceed?: number; 
  public get dstTcpConnLimitExceed() {
    return this.getNumberAttribute('dst_tcp_conn_limit_exceed');
  }
  public set dstTcpConnLimitExceed(value: number) {
    this._dstTcpConnLimitExceed = value;
  }
  public resetDstTcpConnLimitExceed() {
    this._dstTcpConnLimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpConnLimitExceedInput() {
    return this._dstTcpConnLimitExceed;
  }

  // dst_tcp_conn_prate_excd - computed: false, optional: true, required: false
  private _dstTcpConnPrateExcd?: number; 
  public get dstTcpConnPrateExcd() {
    return this.getNumberAttribute('dst_tcp_conn_prate_excd');
  }
  public set dstTcpConnPrateExcd(value: number) {
    this._dstTcpConnPrateExcd = value;
  }
  public resetDstTcpConnPrateExcd() {
    this._dstTcpConnPrateExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpConnPrateExcdInput() {
    return this._dstTcpConnPrateExcd;
  }

  // dst_tcp_conn_rate_exceed - computed: false, optional: true, required: false
  private _dstTcpConnRateExceed?: number; 
  public get dstTcpConnRateExceed() {
    return this.getNumberAttribute('dst_tcp_conn_rate_exceed');
  }
  public set dstTcpConnRateExceed(value: number) {
    this._dstTcpConnRateExceed = value;
  }
  public resetDstTcpConnRateExceed() {
    this._dstTcpConnRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpConnRateExceedInput() {
    return this._dstTcpConnRateExceed;
  }

  // dst_tcp_drop - computed: false, optional: true, required: false
  private _dstTcpDrop?: number; 
  public get dstTcpDrop() {
    return this.getNumberAttribute('dst_tcp_drop');
  }
  public set dstTcpDrop(value: number) {
    this._dstTcpDrop = value;
  }
  public resetDstTcpDrop() {
    this._dstTcpDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpDropInput() {
    return this._dstTcpDrop;
  }

  // dst_tcp_filter_action_blacklist - computed: false, optional: true, required: false
  private _dstTcpFilterActionBlacklist?: number; 
  public get dstTcpFilterActionBlacklist() {
    return this.getNumberAttribute('dst_tcp_filter_action_blacklist');
  }
  public set dstTcpFilterActionBlacklist(value: number) {
    this._dstTcpFilterActionBlacklist = value;
  }
  public resetDstTcpFilterActionBlacklist() {
    this._dstTcpFilterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpFilterActionBlacklistInput() {
    return this._dstTcpFilterActionBlacklist;
  }

  // dst_tcp_filter_action_default_pass - computed: false, optional: true, required: false
  private _dstTcpFilterActionDefaultPass?: number; 
  public get dstTcpFilterActionDefaultPass() {
    return this.getNumberAttribute('dst_tcp_filter_action_default_pass');
  }
  public set dstTcpFilterActionDefaultPass(value: number) {
    this._dstTcpFilterActionDefaultPass = value;
  }
  public resetDstTcpFilterActionDefaultPass() {
    this._dstTcpFilterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpFilterActionDefaultPassInput() {
    return this._dstTcpFilterActionDefaultPass;
  }

  // dst_tcp_filter_action_drop - computed: false, optional: true, required: false
  private _dstTcpFilterActionDrop?: number; 
  public get dstTcpFilterActionDrop() {
    return this.getNumberAttribute('dst_tcp_filter_action_drop');
  }
  public set dstTcpFilterActionDrop(value: number) {
    this._dstTcpFilterActionDrop = value;
  }
  public resetDstTcpFilterActionDrop() {
    this._dstTcpFilterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpFilterActionDropInput() {
    return this._dstTcpFilterActionDrop;
  }

  // dst_tcp_filter_action_whitelist - computed: false, optional: true, required: false
  private _dstTcpFilterActionWhitelist?: number; 
  public get dstTcpFilterActionWhitelist() {
    return this.getNumberAttribute('dst_tcp_filter_action_whitelist');
  }
  public set dstTcpFilterActionWhitelist(value: number) {
    this._dstTcpFilterActionWhitelist = value;
  }
  public resetDstTcpFilterActionWhitelist() {
    this._dstTcpFilterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpFilterActionWhitelistInput() {
    return this._dstTcpFilterActionWhitelist;
  }

  // dst_tcp_filter_match - computed: false, optional: true, required: false
  private _dstTcpFilterMatch?: number; 
  public get dstTcpFilterMatch() {
    return this.getNumberAttribute('dst_tcp_filter_match');
  }
  public set dstTcpFilterMatch(value: number) {
    this._dstTcpFilterMatch = value;
  }
  public resetDstTcpFilterMatch() {
    this._dstTcpFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpFilterMatchInput() {
    return this._dstTcpFilterMatch;
  }

  // dst_tcp_filter_not_match - computed: false, optional: true, required: false
  private _dstTcpFilterNotMatch?: number; 
  public get dstTcpFilterNotMatch() {
    return this.getNumberAttribute('dst_tcp_filter_not_match');
  }
  public set dstTcpFilterNotMatch(value: number) {
    this._dstTcpFilterNotMatch = value;
  }
  public resetDstTcpFilterNotMatch() {
    this._dstTcpFilterNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpFilterNotMatchInput() {
    return this._dstTcpFilterNotMatch;
  }

  // dst_tcp_frag_pkt_rate_exceed - computed: false, optional: true, required: false
  private _dstTcpFragPktRateExceed?: number; 
  public get dstTcpFragPktRateExceed() {
    return this.getNumberAttribute('dst_tcp_frag_pkt_rate_exceed');
  }
  public set dstTcpFragPktRateExceed(value: number) {
    this._dstTcpFragPktRateExceed = value;
  }
  public resetDstTcpFragPktRateExceed() {
    this._dstTcpFragPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpFragPktRateExceedInput() {
    return this._dstTcpFragPktRateExceed;
  }

  // dst_tcp_frag_src_rate_drop - computed: false, optional: true, required: false
  private _dstTcpFragSrcRateDrop?: number; 
  public get dstTcpFragSrcRateDrop() {
    return this.getNumberAttribute('dst_tcp_frag_src_rate_drop');
  }
  public set dstTcpFragSrcRateDrop(value: number) {
    this._dstTcpFragSrcRateDrop = value;
  }
  public resetDstTcpFragSrcRateDrop() {
    this._dstTcpFragSrcRateDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpFragSrcRateDropInput() {
    return this._dstTcpFragSrcRateDrop;
  }

  // dst_tcp_kibit_rate_drop - computed: false, optional: true, required: false
  private _dstTcpKibitRateDrop?: number; 
  public get dstTcpKibitRateDrop() {
    return this.getNumberAttribute('dst_tcp_kibit_rate_drop');
  }
  public set dstTcpKibitRateDrop(value: number) {
    this._dstTcpKibitRateDrop = value;
  }
  public resetDstTcpKibitRateDrop() {
    this._dstTcpKibitRateDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpKibitRateDropInput() {
    return this._dstTcpKibitRateDrop;
  }

  // dst_tcp_out_of_seq_excd - computed: false, optional: true, required: false
  private _dstTcpOutOfSeqExcd?: number; 
  public get dstTcpOutOfSeqExcd() {
    return this.getNumberAttribute('dst_tcp_out_of_seq_excd');
  }
  public set dstTcpOutOfSeqExcd(value: number) {
    this._dstTcpOutOfSeqExcd = value;
  }
  public resetDstTcpOutOfSeqExcd() {
    this._dstTcpOutOfSeqExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpOutOfSeqExcdInput() {
    return this._dstTcpOutOfSeqExcd;
  }

  // dst_tcp_pkt_rate_exceed - computed: false, optional: true, required: false
  private _dstTcpPktRateExceed?: number; 
  public get dstTcpPktRateExceed() {
    return this.getNumberAttribute('dst_tcp_pkt_rate_exceed');
  }
  public set dstTcpPktRateExceed(value: number) {
    this._dstTcpPktRateExceed = value;
  }
  public resetDstTcpPktRateExceed() {
    this._dstTcpPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpPktRateExceedInput() {
    return this._dstTcpPktRateExceed;
  }

  // dst_tcp_pkt_rcvd - computed: false, optional: true, required: false
  private _dstTcpPktRcvd?: number; 
  public get dstTcpPktRcvd() {
    return this.getNumberAttribute('dst_tcp_pkt_rcvd');
  }
  public set dstTcpPktRcvd(value: number) {
    this._dstTcpPktRcvd = value;
  }
  public resetDstTcpPktRcvd() {
    this._dstTcpPktRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpPktRcvdInput() {
    return this._dstTcpPktRcvd;
  }

  // dst_tcp_pkt_sent - computed: false, optional: true, required: false
  private _dstTcpPktSent?: number; 
  public get dstTcpPktSent() {
    return this.getNumberAttribute('dst_tcp_pkt_sent');
  }
  public set dstTcpPktSent(value: number) {
    this._dstTcpPktSent = value;
  }
  public resetDstTcpPktSent() {
    this._dstTcpPktSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpPktSentInput() {
    return this._dstTcpPktSent;
  }

  // dst_tcp_port_any_exceed - computed: false, optional: true, required: false
  private _dstTcpPortAnyExceed?: number; 
  public get dstTcpPortAnyExceed() {
    return this.getNumberAttribute('dst_tcp_port_any_exceed');
  }
  public set dstTcpPortAnyExceed(value: number) {
    this._dstTcpPortAnyExceed = value;
  }
  public resetDstTcpPortAnyExceed() {
    this._dstTcpPortAnyExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpPortAnyExceedInput() {
    return this._dstTcpPortAnyExceed;
  }

  // dst_tcp_retransmit_excd - computed: false, optional: true, required: false
  private _dstTcpRetransmitExcd?: number; 
  public get dstTcpRetransmitExcd() {
    return this.getNumberAttribute('dst_tcp_retransmit_excd');
  }
  public set dstTcpRetransmitExcd(value: number) {
    this._dstTcpRetransmitExcd = value;
  }
  public resetDstTcpRetransmitExcd() {
    this._dstTcpRetransmitExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpRetransmitExcdInput() {
    return this._dstTcpRetransmitExcd;
  }

  // dst_tcp_rst_cookie_fail - computed: false, optional: true, required: false
  private _dstTcpRstCookieFail?: number; 
  public get dstTcpRstCookieFail() {
    return this.getNumberAttribute('dst_tcp_rst_cookie_fail');
  }
  public set dstTcpRstCookieFail(value: number) {
    this._dstTcpRstCookieFail = value;
  }
  public resetDstTcpRstCookieFail() {
    this._dstTcpRstCookieFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpRstCookieFailInput() {
    return this._dstTcpRstCookieFail;
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

  // dst_tcp_session_created - computed: false, optional: true, required: false
  private _dstTcpSessionCreated?: number; 
  public get dstTcpSessionCreated() {
    return this.getNumberAttribute('dst_tcp_session_created');
  }
  public set dstTcpSessionCreated(value: number) {
    this._dstTcpSessionCreated = value;
  }
  public resetDstTcpSessionCreated() {
    this._dstTcpSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpSessionCreatedInput() {
    return this._dstTcpSessionCreated;
  }

  // dst_tcp_src_drop - computed: false, optional: true, required: false
  private _dstTcpSrcDrop?: number; 
  public get dstTcpSrcDrop() {
    return this.getNumberAttribute('dst_tcp_src_drop');
  }
  public set dstTcpSrcDrop(value: number) {
    this._dstTcpSrcDrop = value;
  }
  public resetDstTcpSrcDrop() {
    this._dstTcpSrcDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpSrcDropInput() {
    return this._dstTcpSrcDrop;
  }

  // dst_tcp_src_rate_drop - computed: false, optional: true, required: false
  private _dstTcpSrcRateDrop?: number; 
  public get dstTcpSrcRateDrop() {
    return this.getNumberAttribute('dst_tcp_src_rate_drop');
  }
  public set dstTcpSrcRateDrop(value: number) {
    this._dstTcpSrcRateDrop = value;
  }
  public resetDstTcpSrcRateDrop() {
    this._dstTcpSrcRateDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpSrcRateDropInput() {
    return this._dstTcpSrcRateDrop;
  }

  // dst_tcp_syn - computed: false, optional: true, required: false
  private _dstTcpSyn?: number; 
  public get dstTcpSyn() {
    return this.getNumberAttribute('dst_tcp_syn');
  }
  public set dstTcpSyn(value: number) {
    this._dstTcpSyn = value;
  }
  public resetDstTcpSyn() {
    this._dstTcpSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpSynInput() {
    return this._dstTcpSyn;
  }

  // dst_tcp_syn_drop - computed: false, optional: true, required: false
  private _dstTcpSynDrop?: number; 
  public get dstTcpSynDrop() {
    return this.getNumberAttribute('dst_tcp_syn_drop');
  }
  public set dstTcpSynDrop(value: number) {
    this._dstTcpSynDrop = value;
  }
  public resetDstTcpSynDrop() {
    this._dstTcpSynDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpSynDropInput() {
    return this._dstTcpSynDrop;
  }

  // dst_tcp_unauth_drop - computed: false, optional: true, required: false
  private _dstTcpUnauthDrop?: number; 
  public get dstTcpUnauthDrop() {
    return this.getNumberAttribute('dst_tcp_unauth_drop');
  }
  public set dstTcpUnauthDrop(value: number) {
    this._dstTcpUnauthDrop = value;
  }
  public resetDstTcpUnauthDrop() {
    this._dstTcpUnauthDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpUnauthDropInput() {
    return this._dstTcpUnauthDrop;
  }

  // dst_tcp_wellknown_sport_drop - computed: false, optional: true, required: false
  private _dstTcpWellknownSportDrop?: number; 
  public get dstTcpWellknownSportDrop() {
    return this.getNumberAttribute('dst_tcp_wellknown_sport_drop');
  }
  public set dstTcpWellknownSportDrop(value: number) {
    this._dstTcpWellknownSportDrop = value;
  }
  public resetDstTcpWellknownSportDrop() {
    this._dstTcpWellknownSportDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpWellknownSportDropInput() {
    return this._dstTcpWellknownSportDrop;
  }

  // dst_tcp_zero_window_excd - computed: false, optional: true, required: false
  private _dstTcpZeroWindowExcd?: number; 
  public get dstTcpZeroWindowExcd() {
    return this.getNumberAttribute('dst_tcp_zero_window_excd');
  }
  public set dstTcpZeroWindowExcd(value: number) {
    this._dstTcpZeroWindowExcd = value;
  }
  public resetDstTcpZeroWindowExcd() {
    this._dstTcpZeroWindowExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstTcpZeroWindowExcdInput() {
    return this._dstTcpZeroWindowExcd;
  }

  // dst_udp_any_exceed - computed: false, optional: true, required: false
  private _dstUdpAnyExceed?: number; 
  public get dstUdpAnyExceed() {
    return this.getNumberAttribute('dst_udp_any_exceed');
  }
  public set dstUdpAnyExceed(value: number) {
    this._dstUdpAnyExceed = value;
  }
  public resetDstUdpAnyExceed() {
    this._dstUdpAnyExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpAnyExceedInput() {
    return this._dstUdpAnyExceed;
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

  // dst_udp_bytes_drop - computed: false, optional: true, required: false
  private _dstUdpBytesDrop?: number; 
  public get dstUdpBytesDrop() {
    return this.getNumberAttribute('dst_udp_bytes_drop');
  }
  public set dstUdpBytesDrop(value: number) {
    this._dstUdpBytesDrop = value;
  }
  public resetDstUdpBytesDrop() {
    this._dstUdpBytesDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpBytesDropInput() {
    return this._dstUdpBytesDrop;
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

  // dst_udp_conn_limit_exceed - computed: false, optional: true, required: false
  private _dstUdpConnLimitExceed?: number; 
  public get dstUdpConnLimitExceed() {
    return this.getNumberAttribute('dst_udp_conn_limit_exceed');
  }
  public set dstUdpConnLimitExceed(value: number) {
    this._dstUdpConnLimitExceed = value;
  }
  public resetDstUdpConnLimitExceed() {
    this._dstUdpConnLimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpConnLimitExceedInput() {
    return this._dstUdpConnLimitExceed;
  }

  // dst_udp_conn_prate_excd - computed: false, optional: true, required: false
  private _dstUdpConnPrateExcd?: number; 
  public get dstUdpConnPrateExcd() {
    return this.getNumberAttribute('dst_udp_conn_prate_excd');
  }
  public set dstUdpConnPrateExcd(value: number) {
    this._dstUdpConnPrateExcd = value;
  }
  public resetDstUdpConnPrateExcd() {
    this._dstUdpConnPrateExcd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpConnPrateExcdInput() {
    return this._dstUdpConnPrateExcd;
  }

  // dst_udp_conn_rate_exceed - computed: false, optional: true, required: false
  private _dstUdpConnRateExceed?: number; 
  public get dstUdpConnRateExceed() {
    return this.getNumberAttribute('dst_udp_conn_rate_exceed');
  }
  public set dstUdpConnRateExceed(value: number) {
    this._dstUdpConnRateExceed = value;
  }
  public resetDstUdpConnRateExceed() {
    this._dstUdpConnRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpConnRateExceedInput() {
    return this._dstUdpConnRateExceed;
  }

  // dst_udp_drop - computed: false, optional: true, required: false
  private _dstUdpDrop?: number; 
  public get dstUdpDrop() {
    return this.getNumberAttribute('dst_udp_drop');
  }
  public set dstUdpDrop(value: number) {
    this._dstUdpDrop = value;
  }
  public resetDstUdpDrop() {
    this._dstUdpDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpDropInput() {
    return this._dstUdpDrop;
  }

  // dst_udp_filter_action_blacklist - computed: false, optional: true, required: false
  private _dstUdpFilterActionBlacklist?: number; 
  public get dstUdpFilterActionBlacklist() {
    return this.getNumberAttribute('dst_udp_filter_action_blacklist');
  }
  public set dstUdpFilterActionBlacklist(value: number) {
    this._dstUdpFilterActionBlacklist = value;
  }
  public resetDstUdpFilterActionBlacklist() {
    this._dstUdpFilterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpFilterActionBlacklistInput() {
    return this._dstUdpFilterActionBlacklist;
  }

  // dst_udp_filter_action_default_pass - computed: false, optional: true, required: false
  private _dstUdpFilterActionDefaultPass?: number; 
  public get dstUdpFilterActionDefaultPass() {
    return this.getNumberAttribute('dst_udp_filter_action_default_pass');
  }
  public set dstUdpFilterActionDefaultPass(value: number) {
    this._dstUdpFilterActionDefaultPass = value;
  }
  public resetDstUdpFilterActionDefaultPass() {
    this._dstUdpFilterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpFilterActionDefaultPassInput() {
    return this._dstUdpFilterActionDefaultPass;
  }

  // dst_udp_filter_action_drop - computed: false, optional: true, required: false
  private _dstUdpFilterActionDrop?: number; 
  public get dstUdpFilterActionDrop() {
    return this.getNumberAttribute('dst_udp_filter_action_drop');
  }
  public set dstUdpFilterActionDrop(value: number) {
    this._dstUdpFilterActionDrop = value;
  }
  public resetDstUdpFilterActionDrop() {
    this._dstUdpFilterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpFilterActionDropInput() {
    return this._dstUdpFilterActionDrop;
  }

  // dst_udp_filter_action_whitelist - computed: false, optional: true, required: false
  private _dstUdpFilterActionWhitelist?: number; 
  public get dstUdpFilterActionWhitelist() {
    return this.getNumberAttribute('dst_udp_filter_action_whitelist');
  }
  public set dstUdpFilterActionWhitelist(value: number) {
    this._dstUdpFilterActionWhitelist = value;
  }
  public resetDstUdpFilterActionWhitelist() {
    this._dstUdpFilterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpFilterActionWhitelistInput() {
    return this._dstUdpFilterActionWhitelist;
  }

  // dst_udp_filter_match - computed: false, optional: true, required: false
  private _dstUdpFilterMatch?: number; 
  public get dstUdpFilterMatch() {
    return this.getNumberAttribute('dst_udp_filter_match');
  }
  public set dstUdpFilterMatch(value: number) {
    this._dstUdpFilterMatch = value;
  }
  public resetDstUdpFilterMatch() {
    this._dstUdpFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpFilterMatchInput() {
    return this._dstUdpFilterMatch;
  }

  // dst_udp_filter_not_match - computed: false, optional: true, required: false
  private _dstUdpFilterNotMatch?: number; 
  public get dstUdpFilterNotMatch() {
    return this.getNumberAttribute('dst_udp_filter_not_match');
  }
  public set dstUdpFilterNotMatch(value: number) {
    this._dstUdpFilterNotMatch = value;
  }
  public resetDstUdpFilterNotMatch() {
    this._dstUdpFilterNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpFilterNotMatchInput() {
    return this._dstUdpFilterNotMatch;
  }

  // dst_udp_frag_pkt_rate_exceed - computed: false, optional: true, required: false
  private _dstUdpFragPktRateExceed?: number; 
  public get dstUdpFragPktRateExceed() {
    return this.getNumberAttribute('dst_udp_frag_pkt_rate_exceed');
  }
  public set dstUdpFragPktRateExceed(value: number) {
    this._dstUdpFragPktRateExceed = value;
  }
  public resetDstUdpFragPktRateExceed() {
    this._dstUdpFragPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpFragPktRateExceedInput() {
    return this._dstUdpFragPktRateExceed;
  }

  // dst_udp_frag_src_rate_drop - computed: false, optional: true, required: false
  private _dstUdpFragSrcRateDrop?: number; 
  public get dstUdpFragSrcRateDrop() {
    return this.getNumberAttribute('dst_udp_frag_src_rate_drop');
  }
  public set dstUdpFragSrcRateDrop(value: number) {
    this._dstUdpFragSrcRateDrop = value;
  }
  public resetDstUdpFragSrcRateDrop() {
    this._dstUdpFragSrcRateDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpFragSrcRateDropInput() {
    return this._dstUdpFragSrcRateDrop;
  }

  // dst_udp_kibit_rate_drop - computed: false, optional: true, required: false
  private _dstUdpKibitRateDrop?: number; 
  public get dstUdpKibitRateDrop() {
    return this.getNumberAttribute('dst_udp_kibit_rate_drop');
  }
  public set dstUdpKibitRateDrop(value: number) {
    this._dstUdpKibitRateDrop = value;
  }
  public resetDstUdpKibitRateDrop() {
    this._dstUdpKibitRateDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpKibitRateDropInput() {
    return this._dstUdpKibitRateDrop;
  }

  // dst_udp_ntp_monlist_req - computed: false, optional: true, required: false
  private _dstUdpNtpMonlistReq?: number; 
  public get dstUdpNtpMonlistReq() {
    return this.getNumberAttribute('dst_udp_ntp_monlist_req');
  }
  public set dstUdpNtpMonlistReq(value: number) {
    this._dstUdpNtpMonlistReq = value;
  }
  public resetDstUdpNtpMonlistReq() {
    this._dstUdpNtpMonlistReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpNtpMonlistReqInput() {
    return this._dstUdpNtpMonlistReq;
  }

  // dst_udp_ntp_monlist_resp - computed: false, optional: true, required: false
  private _dstUdpNtpMonlistResp?: number; 
  public get dstUdpNtpMonlistResp() {
    return this.getNumberAttribute('dst_udp_ntp_monlist_resp');
  }
  public set dstUdpNtpMonlistResp(value: number) {
    this._dstUdpNtpMonlistResp = value;
  }
  public resetDstUdpNtpMonlistResp() {
    this._dstUdpNtpMonlistResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpNtpMonlistRespInput() {
    return this._dstUdpNtpMonlistResp;
  }

  // dst_udp_pkt_rate_exceed - computed: false, optional: true, required: false
  private _dstUdpPktRateExceed?: number; 
  public get dstUdpPktRateExceed() {
    return this.getNumberAttribute('dst_udp_pkt_rate_exceed');
  }
  public set dstUdpPktRateExceed(value: number) {
    this._dstUdpPktRateExceed = value;
  }
  public resetDstUdpPktRateExceed() {
    this._dstUdpPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpPktRateExceedInput() {
    return this._dstUdpPktRateExceed;
  }

  // dst_udp_pkt_rcvd - computed: false, optional: true, required: false
  private _dstUdpPktRcvd?: number; 
  public get dstUdpPktRcvd() {
    return this.getNumberAttribute('dst_udp_pkt_rcvd');
  }
  public set dstUdpPktRcvd(value: number) {
    this._dstUdpPktRcvd = value;
  }
  public resetDstUdpPktRcvd() {
    this._dstUdpPktRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpPktRcvdInput() {
    return this._dstUdpPktRcvd;
  }

  // dst_udp_pkt_sent - computed: false, optional: true, required: false
  private _dstUdpPktSent?: number; 
  public get dstUdpPktSent() {
    return this.getNumberAttribute('dst_udp_pkt_sent');
  }
  public set dstUdpPktSent(value: number) {
    this._dstUdpPktSent = value;
  }
  public resetDstUdpPktSent() {
    this._dstUdpPktSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpPktSentInput() {
    return this._dstUdpPktSent;
  }

  // dst_udp_port_any_exceed - computed: false, optional: true, required: false
  private _dstUdpPortAnyExceed?: number; 
  public get dstUdpPortAnyExceed() {
    return this.getNumberAttribute('dst_udp_port_any_exceed');
  }
  public set dstUdpPortAnyExceed(value: number) {
    this._dstUdpPortAnyExceed = value;
  }
  public resetDstUdpPortAnyExceed() {
    this._dstUdpPortAnyExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpPortAnyExceedInput() {
    return this._dstUdpPortAnyExceed;
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

  // dst_udp_retry_init - computed: false, optional: true, required: false
  private _dstUdpRetryInit?: number; 
  public get dstUdpRetryInit() {
    return this.getNumberAttribute('dst_udp_retry_init');
  }
  public set dstUdpRetryInit(value: number) {
    this._dstUdpRetryInit = value;
  }
  public resetDstUdpRetryInit() {
    this._dstUdpRetryInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpRetryInitInput() {
    return this._dstUdpRetryInit;
  }

  // dst_udp_retry_pass - computed: false, optional: true, required: false
  private _dstUdpRetryPass?: number; 
  public get dstUdpRetryPass() {
    return this.getNumberAttribute('dst_udp_retry_pass');
  }
  public set dstUdpRetryPass(value: number) {
    this._dstUdpRetryPass = value;
  }
  public resetDstUdpRetryPass() {
    this._dstUdpRetryPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpRetryPassInput() {
    return this._dstUdpRetryPass;
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

  // dst_udp_session_created - computed: false, optional: true, required: false
  private _dstUdpSessionCreated?: number; 
  public get dstUdpSessionCreated() {
    return this.getNumberAttribute('dst_udp_session_created');
  }
  public set dstUdpSessionCreated(value: number) {
    this._dstUdpSessionCreated = value;
  }
  public resetDstUdpSessionCreated() {
    this._dstUdpSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpSessionCreatedInput() {
    return this._dstUdpSessionCreated;
  }

  // dst_udp_src_drop - computed: false, optional: true, required: false
  private _dstUdpSrcDrop?: number; 
  public get dstUdpSrcDrop() {
    return this.getNumberAttribute('dst_udp_src_drop');
  }
  public set dstUdpSrcDrop(value: number) {
    this._dstUdpSrcDrop = value;
  }
  public resetDstUdpSrcDrop() {
    this._dstUdpSrcDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpSrcDropInput() {
    return this._dstUdpSrcDrop;
  }

  // dst_udp_src_rate_drop - computed: false, optional: true, required: false
  private _dstUdpSrcRateDrop?: number; 
  public get dstUdpSrcRateDrop() {
    return this.getNumberAttribute('dst_udp_src_rate_drop');
  }
  public set dstUdpSrcRateDrop(value: number) {
    this._dstUdpSrcRateDrop = value;
  }
  public resetDstUdpSrcRateDrop() {
    this._dstUdpSrcRateDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpSrcRateDropInput() {
    return this._dstUdpSrcRateDrop;
  }

  // dst_udp_wellknown_sport_drop - computed: false, optional: true, required: false
  private _dstUdpWellknownSportDrop?: number; 
  public get dstUdpWellknownSportDrop() {
    return this.getNumberAttribute('dst_udp_wellknown_sport_drop');
  }
  public set dstUdpWellknownSportDrop(value: number) {
    this._dstUdpWellknownSportDrop = value;
  }
  public resetDstUdpWellknownSportDrop() {
    this._dstUdpWellknownSportDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstUdpWellknownSportDropInput() {
    return this._dstUdpWellknownSportDrop;
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

  // inbound_pkt_drop - computed: false, optional: true, required: false
  private _inboundPktDrop?: number; 
  public get inboundPktDrop() {
    return this.getNumberAttribute('inbound_pkt_drop');
  }
  public set inboundPktDrop(value: number) {
    this._inboundPktDrop = value;
  }
  public resetInboundPktDrop() {
    this._inboundPktDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundPktDropInput() {
    return this._inboundPktDrop;
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

  // outbound_pkt_drop - computed: false, optional: true, required: false
  private _outboundPktDrop?: number; 
  public get outboundPktDrop() {
    return this.getNumberAttribute('outbound_pkt_drop');
  }
  public set outboundPktDrop(value: number) {
    this._outboundPktDrop = value;
  }
  public resetOutboundPktDrop() {
    this._outboundPktDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPktDropInput() {
    return this._outboundPktDrop;
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

  // src_dst_pair_entry_icmp - computed: false, optional: true, required: false
  private _srcDstPairEntryIcmp?: number; 
  public get srcDstPairEntryIcmp() {
    return this.getNumberAttribute('src_dst_pair_entry_icmp');
  }
  public set srcDstPairEntryIcmp(value: number) {
    this._srcDstPairEntryIcmp = value;
  }
  public resetSrcDstPairEntryIcmp() {
    this._srcDstPairEntryIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstPairEntryIcmpInput() {
    return this._srcDstPairEntryIcmp;
  }

  // src_dst_pair_entry_other - computed: false, optional: true, required: false
  private _srcDstPairEntryOther?: number; 
  public get srcDstPairEntryOther() {
    return this.getNumberAttribute('src_dst_pair_entry_other');
  }
  public set srcDstPairEntryOther(value: number) {
    this._srcDstPairEntryOther = value;
  }
  public resetSrcDstPairEntryOther() {
    this._srcDstPairEntryOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstPairEntryOtherInput() {
    return this._srcDstPairEntryOther;
  }

  // src_dst_pair_entry_tcp - computed: false, optional: true, required: false
  private _srcDstPairEntryTcp?: number; 
  public get srcDstPairEntryTcp() {
    return this.getNumberAttribute('src_dst_pair_entry_tcp');
  }
  public set srcDstPairEntryTcp(value: number) {
    this._srcDstPairEntryTcp = value;
  }
  public resetSrcDstPairEntryTcp() {
    this._srcDstPairEntryTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstPairEntryTcpInput() {
    return this._srcDstPairEntryTcp;
  }

  // src_dst_pair_entry_total - computed: false, optional: true, required: false
  private _srcDstPairEntryTotal?: number; 
  public get srcDstPairEntryTotal() {
    return this.getNumberAttribute('src_dst_pair_entry_total');
  }
  public set srcDstPairEntryTotal(value: number) {
    this._srcDstPairEntryTotal = value;
  }
  public resetSrcDstPairEntryTotal() {
    this._srcDstPairEntryTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstPairEntryTotalInput() {
    return this._srcDstPairEntryTotal;
  }

  // src_dst_pair_entry_udp - computed: false, optional: true, required: false
  private _srcDstPairEntryUdp?: number; 
  public get srcDstPairEntryUdp() {
    return this.getNumberAttribute('src_dst_pair_entry_udp');
  }
  public set srcDstPairEntryUdp(value: number) {
    this._srcDstPairEntryUdp = value;
  }
  public resetSrcDstPairEntryUdp() {
    this._srcDstPairEntryUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstPairEntryUdpInput() {
    return this._srcDstPairEntryUdp;
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

  // src_hw_drop_rule_insert - computed: false, optional: true, required: false
  private _srcHwDropRuleInsert?: number; 
  public get srcHwDropRuleInsert() {
    return this.getNumberAttribute('src_hw_drop_rule_insert');
  }
  public set srcHwDropRuleInsert(value: number) {
    this._srcHwDropRuleInsert = value;
  }
  public resetSrcHwDropRuleInsert() {
    this._srcHwDropRuleInsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHwDropRuleInsertInput() {
    return this._srcHwDropRuleInsert;
  }

  // src_hw_drop_rule_remove - computed: false, optional: true, required: false
  private _srcHwDropRuleRemove?: number; 
  public get srcHwDropRuleRemove() {
    return this.getNumberAttribute('src_hw_drop_rule_remove');
  }
  public set srcHwDropRuleRemove(value: number) {
    this._srcHwDropRuleRemove = value;
  }
  public resetSrcHwDropRuleRemove() {
    this._srcHwDropRuleRemove = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHwDropRuleRemoveInput() {
    return this._srcHwDropRuleRemove;
  }

  // src_l4_icmp_blacklist_drop - computed: false, optional: true, required: false
  private _srcL4IcmpBlacklistDrop?: number; 
  public get srcL4IcmpBlacklistDrop() {
    return this.getNumberAttribute('src_l4_icmp_blacklist_drop');
  }
  public set srcL4IcmpBlacklistDrop(value: number) {
    this._srcL4IcmpBlacklistDrop = value;
  }
  public resetSrcL4IcmpBlacklistDrop() {
    this._srcL4IcmpBlacklistDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcL4IcmpBlacklistDropInput() {
    return this._srcL4IcmpBlacklistDrop;
  }

  // src_l4_other_blacklist_drop - computed: false, optional: true, required: false
  private _srcL4OtherBlacklistDrop?: number; 
  public get srcL4OtherBlacklistDrop() {
    return this.getNumberAttribute('src_l4_other_blacklist_drop');
  }
  public set srcL4OtherBlacklistDrop(value: number) {
    this._srcL4OtherBlacklistDrop = value;
  }
  public resetSrcL4OtherBlacklistDrop() {
    this._srcL4OtherBlacklistDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcL4OtherBlacklistDropInput() {
    return this._srcL4OtherBlacklistDrop;
  }

  // src_l4_tcp_blacklist_drop - computed: false, optional: true, required: false
  private _srcL4TcpBlacklistDrop?: number; 
  public get srcL4TcpBlacklistDrop() {
    return this.getNumberAttribute('src_l4_tcp_blacklist_drop');
  }
  public set srcL4TcpBlacklistDrop(value: number) {
    this._srcL4TcpBlacklistDrop = value;
  }
  public resetSrcL4TcpBlacklistDrop() {
    this._srcL4TcpBlacklistDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcL4TcpBlacklistDropInput() {
    return this._srcL4TcpBlacklistDrop;
  }

  // src_l4_udp_blacklist_drop - computed: false, optional: true, required: false
  private _srcL4UdpBlacklistDrop?: number; 
  public get srcL4UdpBlacklistDrop() {
    return this.getNumberAttribute('src_l4_udp_blacklist_drop');
  }
  public set srcL4UdpBlacklistDrop(value: number) {
    this._srcL4UdpBlacklistDrop = value;
  }
  public resetSrcL4UdpBlacklistDrop() {
    this._srcL4UdpBlacklistDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcL4UdpBlacklistDropInput() {
    return this._srcL4UdpBlacklistDrop;
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

  // tcp_fwd_sent - computed: false, optional: true, required: false
  private _tcpFwdSent?: number; 
  public get tcpFwdSent() {
    return this.getNumberAttribute('tcp_fwd_sent');
  }
  public set tcpFwdSent(value: number) {
    this._tcpFwdSent = value;
  }
  public resetTcpFwdSent() {
    this._tcpFwdSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFwdSentInput() {
    return this._tcpFwdSent;
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

  // tcp_l4_rst_cookie_fail - computed: false, optional: true, required: false
  private _tcpL4RstCookieFail?: number; 
  public get tcpL4RstCookieFail() {
    return this.getNumberAttribute('tcp_l4_rst_cookie_fail');
  }
  public set tcpL4RstCookieFail(value: number) {
    this._tcpL4RstCookieFail = value;
  }
  public resetTcpL4RstCookieFail() {
    this._tcpL4RstCookieFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpL4RstCookieFailInput() {
    return this._tcpL4RstCookieFail;
  }

  // tcp_l4_syn_cookie_fail - computed: false, optional: true, required: false
  private _tcpL4SynCookieFail?: number; 
  public get tcpL4SynCookieFail() {
    return this.getNumberAttribute('tcp_l4_syn_cookie_fail');
  }
  public set tcpL4SynCookieFail(value: number) {
    this._tcpL4SynCookieFail = value;
  }
  public resetTcpL4SynCookieFail() {
    this._tcpL4SynCookieFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpL4SynCookieFailInput() {
    return this._tcpL4SynCookieFail;
  }

  // tcp_l4_unauth_drop - computed: false, optional: true, required: false
  private _tcpL4UnauthDrop?: number; 
  public get tcpL4UnauthDrop() {
    return this.getNumberAttribute('tcp_l4_unauth_drop');
  }
  public set tcpL4UnauthDrop(value: number) {
    this._tcpL4UnauthDrop = value;
  }
  public resetTcpL4UnauthDrop() {
    this._tcpL4UnauthDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpL4UnauthDropInput() {
    return this._tcpL4UnauthDrop;
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

  // udp_fwd_sent - computed: false, optional: true, required: false
  private _udpFwdSent?: number; 
  public get udpFwdSent() {
    return this.getNumberAttribute('udp_fwd_sent');
  }
  public set udpFwdSent(value: number) {
    this._udpFwdSent = value;
  }
  public resetUdpFwdSent() {
    this._udpFwdSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFwdSentInput() {
    return this._udpFwdSent;
  }

  // udp_payload_too_big - computed: false, optional: true, required: false
  private _udpPayloadTooBig?: number; 
  public get udpPayloadTooBig() {
    return this.getNumberAttribute('udp_payload_too_big');
  }
  public set udpPayloadTooBig(value: number) {
    this._udpPayloadTooBig = value;
  }
  public resetUdpPayloadTooBig() {
    this._udpPayloadTooBig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPayloadTooBigInput() {
    return this._udpPayloadTooBig;
  }

  // udp_payload_too_small - computed: false, optional: true, required: false
  private _udpPayloadTooSmall?: number; 
  public get udpPayloadTooSmall() {
    return this.getNumberAttribute('udp_payload_too_small');
  }
  public set udpPayloadTooSmall(value: number) {
    this._udpPayloadTooSmall = value;
  }
  public resetUdpPayloadTooSmall() {
    this._udpPayloadTooSmall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPayloadTooSmallInput() {
    return this._udpPayloadTooSmall;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats thunder_ddos_dst_entry_stats}
*/
export class DataThunderDdosDstEntryStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_entry_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDstEntryStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDstEntryStats to import
  * @param importFromId The id of the existing DataThunderDdosDstEntryStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDstEntryStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_entry_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_entry_stats thunder_ddos_dst_entry_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDstEntryStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDstEntryStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_entry_stats',
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
    this._dstEntryName = config.dstEntryName;
    this._id = config.id;
    this._stats.internalValue = config.stats;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dst_entry_name - computed: false, optional: false, required: true
  private _dstEntryName?: string; 
  public get dstEntryName() {
    return this.getStringAttribute('dst_entry_name');
  }
  public set dstEntryName(value: string) {
    this._dstEntryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryNameInput() {
    return this._dstEntryName;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderDdosDstEntryStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosDstEntryStatsStats) {
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
      dst_entry_name: cdktf.stringToTerraform(this._dstEntryName),
      id: cdktf.stringToTerraform(this._id),
      stats: dataThunderDdosDstEntryStatsStatsToTerraform(this._stats.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dst_entry_name: {
        value: cdktf.stringToHclTerraform(this._dstEntryName),
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
      stats: {
        value: dataThunderDdosDstEntryStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstEntryStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
