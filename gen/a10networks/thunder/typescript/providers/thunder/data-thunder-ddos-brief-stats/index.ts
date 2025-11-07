// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosBriefStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#id DataThunderDdosBriefStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#stats DataThunderDdosBriefStats#stats}
  */
  readonly stats?: DataThunderDdosBriefStatsStats;
}
export interface DataThunderDdosBriefStatsStats {
  /**
  * Dst Blackhole Injected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#dst_blackhole_inject DataThunderDdosBriefStats#dst_blackhole_inject}
  */
  readonly dstBlackholeInject?: number;
  /**
  * Dst Blackhole Withdrawn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#dst_blackhole_withdraw DataThunderDdosBriefStats#dst_blackhole_withdraw}
  */
  readonly dstBlackholeWithdraw?: number;
  /**
  * Outbound Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#dst_egress_bytes DataThunderDdosBriefStats#dst_egress_bytes}
  */
  readonly dstEgressBytes?: number;
  /**
  * Outbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#dst_egress_packets DataThunderDdosBriefStats#dst_egress_packets}
  */
  readonly dstEgressPackets?: number;
  /**
  * Dst Default Hardware Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#dst_hw_drop DataThunderDdosBriefStats#dst_hw_drop}
  */
  readonly dstHwDrop?: number;
  /**
  * Dst Default Hardware Drop Rules Inserted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#dst_hw_drop_rule_inserted DataThunderDdosBriefStats#dst_hw_drop_rule_inserted}
  */
  readonly dstHwDropRuleInserted?: number;
  /**
  * Dst Default Hardware Drop Rules Removed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#dst_hw_drop_rule_removed DataThunderDdosBriefStats#dst_hw_drop_rule_removed}
  */
  readonly dstHwDropRuleRemoved?: number;
  /**
  * Inbound Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#dst_ingress_bytes DataThunderDdosBriefStats#dst_ingress_bytes}
  */
  readonly dstIngressBytes?: number;
  /**
  * Inbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#dst_ingress_packets DataThunderDdosBriefStats#dst_ingress_packets}
  */
  readonly dstIngressPackets?: number;
  /**
  * Dst IP Bypass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#dst_ip_bypass DataThunderDdosBriefStats#dst_ip_bypass}
  */
  readonly dstIpBypass?: number;
  /**
  * Dst IP-Proto Blacklist Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#dst_ipproto_bl DataThunderDdosBriefStats#dst_ipproto_bl}
  */
  readonly dstIpprotoBl?: number;
  /**
  * Dst IP-Proto Total Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#dst_ipproto_drop DataThunderDdosBriefStats#dst_ipproto_drop}
  */
  readonly dstIpprotoDrop?: number;
  /**
  * Dst IP-Proto Exceed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#dst_ipproto_exceed_drop_any DataThunderDdosBriefStats#dst_ipproto_exceed_drop_any}
  */
  readonly dstIpprotoExceedDropAny?: number;
  /**
  * Dst IP-Proto Total Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#dst_ipproto_rcvd DataThunderDdosBriefStats#dst_ipproto_rcvd}
  */
  readonly dstIpprotoRcvd?: number;
  /**
  * Dst Port Blacklist Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#dst_port_bl DataThunderDdosBriefStats#dst_port_bl}
  */
  readonly dstPortBl?: number;
  /**
  * Dst Port Exceed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#dst_port_exceed_drop_any DataThunderDdosBriefStats#dst_port_exceed_drop_any}
  */
  readonly dstPortExceedDropAny?: number;
  /**
  * Dst Port Undefined Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#dst_port_undef_drop DataThunderDdosBriefStats#dst_port_undef_drop}
  */
  readonly dstPortUndefDrop?: number;
  /**
  * Dst SrcPort Blacklist Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#dst_sport_bl DataThunderDdosBriefStats#dst_sport_bl}
  */
  readonly dstSportBl?: number;
  /**
  * Dst SrcPort Exceed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#dst_sport_exceed_drop_any DataThunderDdosBriefStats#dst_sport_exceed_drop_any}
  */
  readonly dstSportExceedDropAny?: number;
  /**
  * Fragmented Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#frag_drop DataThunderDdosBriefStats#frag_drop}
  */
  readonly fragDrop?: number;
  /**
  * Fragmented Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#frag_rcvd DataThunderDdosBriefStats#frag_rcvd}
  */
  readonly fragRcvd?: number;
  /**
  * Glid Action Tunnel-encap with Scrub
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#glid_action_encap_send_delay DataThunderDdosBriefStats#glid_action_encap_send_delay}
  */
  readonly glidActionEncapSendDelay?: number;
  /**
  * Glid Action Tunnel-encap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#glid_action_encap_send_immed DataThunderDdosBriefStats#glid_action_encap_send_immed}
  */
  readonly glidActionEncapSendImmed?: number;
  /**
  * ICMP Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#icmp_any_exceed DataThunderDdosBriefStats#icmp_any_exceed}
  */
  readonly icmpAnyExceed?: number;
  /**
  * ICMP Blacklisted Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#icmp_drop_bl DataThunderDdosBriefStats#icmp_drop_bl}
  */
  readonly icmpDropBl?: number;
  /**
  * ICMP Dst Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#icmp_dst_drop DataThunderDdosBriefStats#icmp_dst_drop}
  */
  readonly icmpDstDrop?: number;
  /**
  * ICMP Src Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#icmp_src_drop DataThunderDdosBriefStats#icmp_src_drop}
  */
  readonly icmpSrcDrop?: number;
  /**
  * ICMP SrcDst Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#icmp_src_dst_drop DataThunderDdosBriefStats#icmp_src_dst_drop}
  */
  readonly icmpSrcDstDrop?: number;
  /**
  * ICMP Total Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#icmp_total_bytes_drop DataThunderDdosBriefStats#icmp_total_bytes_drop}
  */
  readonly icmpTotalBytesDrop?: number;
  /**
  * ICMP Total Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#icmp_total_bytes_rcv DataThunderDdosBriefStats#icmp_total_bytes_rcv}
  */
  readonly icmpTotalBytesRcv?: number;
  /**
  * ICMP Total Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#icmp_total_drop DataThunderDdosBriefStats#icmp_total_drop}
  */
  readonly icmpTotalDrop?: number;
  /**
  * ICMP Total Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#inicmp DataThunderDdosBriefStats#inicmp}
  */
  readonly inicmp?: number;
  /**
  * OTHER Total Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#inother DataThunderDdosBriefStats#inother}
  */
  readonly inother?: number;
  /**
  * Stateless Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#instateless DataThunderDdosBriefStats#instateless}
  */
  readonly instateless?: number;
  /**
  * TCP Total Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#intcp DataThunderDdosBriefStats#intcp}
  */
  readonly intcp?: number;
  /**
  * UDP Total Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#inudp DataThunderDdosBriefStats#inudp}
  */
  readonly inudp?: number;
  /**
  * IPv4 Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#ip_rcv DataThunderDdosBriefStats#ip_rcv}
  */
  readonly ipRcv?: number;
  /**
  * IPv4 Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#ip_sent DataThunderDdosBriefStats#ip_sent}
  */
  readonly ipSent?: number;
  /**
  * IPv6 Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#ipv6_rcv DataThunderDdosBriefStats#ipv6_rcv}
  */
  readonly ipv6Rcv?: number;
  /**
  * IPv6 Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#ipv6_sent DataThunderDdosBriefStats#ipv6_sent}
  */
  readonly ipv6Sent?: number;
  /**
  * Not For DDOS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#not_for_ddos DataThunderDdosBriefStats#not_for_ddos}
  */
  readonly notForDdos?: number;
  /**
  * OTHER Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#other_any_exceed DataThunderDdosBriefStats#other_any_exceed}
  */
  readonly otherAnyExceed?: number;
  /**
  * OTHER Blacklisted Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#other_drop_bl DataThunderDdosBriefStats#other_drop_bl}
  */
  readonly otherDropBl?: number;
  /**
  * OTHER Dst Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#other_dst_drop DataThunderDdosBriefStats#other_dst_drop}
  */
  readonly otherDstDrop?: number;
  /**
  * OTHER Src Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#other_src_drop DataThunderDdosBriefStats#other_src_drop}
  */
  readonly otherSrcDrop?: number;
  /**
  * OTHER SrcDst Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#other_src_dst_drop DataThunderDdosBriefStats#other_src_dst_drop}
  */
  readonly otherSrcDstDrop?: number;
  /**
  * OTHER Total Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#other_total_bytes_drop DataThunderDdosBriefStats#other_total_bytes_drop}
  */
  readonly otherTotalBytesDrop?: number;
  /**
  * OTHER Total Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#other_total_bytes_rcv DataThunderDdosBriefStats#other_total_bytes_rcv}
  */
  readonly otherTotalBytesRcv?: number;
  /**
  * OTHER Total Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#other_total_drop DataThunderDdosBriefStats#other_total_drop}
  */
  readonly otherTotalDrop?: number;
  /**
  * IPv4/v6 Out No Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#out_no_route DataThunderDdosBriefStats#out_no_route}
  */
  readonly outNoRoute?: number;
  /**
  * Session Aged Out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#sess_aged_out DataThunderDdosBriefStats#sess_aged_out}
  */
  readonly sessAgedOut?: number;
  /**
  * Src Default Hardware Drop Rules Inserted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#src_hw_drop_rule_inserted DataThunderDdosBriefStats#src_hw_drop_rule_inserted}
  */
  readonly srcHwDropRuleInserted?: number;
  /**
  * Src Default Hardware Drop Rules Removed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#src_hw_drop_rule_removed DataThunderDdosBriefStats#src_hw_drop_rule_removed}
  */
  readonly srcHwDropRuleRemoved?: number;
  /**
  * Src IP Bypass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#src_ip_bypass DataThunderDdosBriefStats#src_ip_bypass}
  */
  readonly srcIpBypass?: number;
  /**
  * TCP Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#tcp_any_exceed DataThunderDdosBriefStats#tcp_any_exceed}
  */
  readonly tcpAnyExceed?: number;
  /**
  * TCP Blacklist Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#tcp_drop_bl DataThunderDdosBriefStats#tcp_drop_bl}
  */
  readonly tcpDropBl?: number;
  /**
  * TCP Dst Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#tcp_dst_drop DataThunderDdosBriefStats#tcp_dst_drop}
  */
  readonly tcpDstDrop?: number;
  /**
  * TCP Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#tcp_sess_create DataThunderDdosBriefStats#tcp_sess_create}
  */
  readonly tcpSessCreate?: number;
  /**
  * TCP Src Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#tcp_src_drop DataThunderDdosBriefStats#tcp_src_drop}
  */
  readonly tcpSrcDrop?: number;
  /**
  * TCP SrcDst Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#tcp_src_dst_drop DataThunderDdosBriefStats#tcp_src_dst_drop}
  */
  readonly tcpSrcDstDrop?: number;
  /**
  * TCP Total Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#tcp_total_bytes_drop DataThunderDdosBriefStats#tcp_total_bytes_drop}
  */
  readonly tcpTotalBytesDrop?: number;
  /**
  * TCP Total Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#tcp_total_bytes_rcv DataThunderDdosBriefStats#tcp_total_bytes_rcv}
  */
  readonly tcpTotalBytesRcv?: number;
  /**
  * TCP Total Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#tcp_total_drop DataThunderDdosBriefStats#tcp_total_drop}
  */
  readonly tcpTotalDrop?: number;
  /**
  * UDP Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#udp_any_exceed DataThunderDdosBriefStats#udp_any_exceed}
  */
  readonly udpAnyExceed?: number;
  /**
  * UDP Blacklist Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#udp_drop_bl DataThunderDdosBriefStats#udp_drop_bl}
  */
  readonly udpDropBl?: number;
  /**
  * UDP Dst Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#udp_dst_drop DataThunderDdosBriefStats#udp_dst_drop}
  */
  readonly udpDstDrop?: number;
  /**
  * UDP Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#udp_sess_create DataThunderDdosBriefStats#udp_sess_create}
  */
  readonly udpSessCreate?: number;
  /**
  * UDP Src Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#udp_src_drop DataThunderDdosBriefStats#udp_src_drop}
  */
  readonly udpSrcDrop?: number;
  /**
  * UDP SrcDst Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#udp_src_dst_drop DataThunderDdosBriefStats#udp_src_dst_drop}
  */
  readonly udpSrcDstDrop?: number;
  /**
  * UDP Total Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#udp_total_bytes_drop DataThunderDdosBriefStats#udp_total_bytes_drop}
  */
  readonly udpTotalBytesDrop?: number;
  /**
  * UDP Total Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#udp_total_bytes_rcv DataThunderDdosBriefStats#udp_total_bytes_rcv}
  */
  readonly udpTotalBytesRcv?: number;
  /**
  * UDP Total Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#udp_total_drop DataThunderDdosBriefStats#udp_total_drop}
  */
  readonly udpTotalDrop?: number;
  /**
  * IPv4 Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#v4_sess_create DataThunderDdosBriefStats#v4_sess_create}
  */
  readonly v4SessCreate?: number;
  /**
  * IPv6 Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#v6_sess_create DataThunderDdosBriefStats#v6_sess_create}
  */
  readonly v6SessCreate?: number;
}

export function dataThunderDdosBriefStatsStatsToTerraform(struct?: DataThunderDdosBriefStatsStatsOutputReference | DataThunderDdosBriefStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_blackhole_inject: cdktf.numberToTerraform(struct!.dstBlackholeInject),
    dst_blackhole_withdraw: cdktf.numberToTerraform(struct!.dstBlackholeWithdraw),
    dst_egress_bytes: cdktf.numberToTerraform(struct!.dstEgressBytes),
    dst_egress_packets: cdktf.numberToTerraform(struct!.dstEgressPackets),
    dst_hw_drop: cdktf.numberToTerraform(struct!.dstHwDrop),
    dst_hw_drop_rule_inserted: cdktf.numberToTerraform(struct!.dstHwDropRuleInserted),
    dst_hw_drop_rule_removed: cdktf.numberToTerraform(struct!.dstHwDropRuleRemoved),
    dst_ingress_bytes: cdktf.numberToTerraform(struct!.dstIngressBytes),
    dst_ingress_packets: cdktf.numberToTerraform(struct!.dstIngressPackets),
    dst_ip_bypass: cdktf.numberToTerraform(struct!.dstIpBypass),
    dst_ipproto_bl: cdktf.numberToTerraform(struct!.dstIpprotoBl),
    dst_ipproto_drop: cdktf.numberToTerraform(struct!.dstIpprotoDrop),
    dst_ipproto_exceed_drop_any: cdktf.numberToTerraform(struct!.dstIpprotoExceedDropAny),
    dst_ipproto_rcvd: cdktf.numberToTerraform(struct!.dstIpprotoRcvd),
    dst_port_bl: cdktf.numberToTerraform(struct!.dstPortBl),
    dst_port_exceed_drop_any: cdktf.numberToTerraform(struct!.dstPortExceedDropAny),
    dst_port_undef_drop: cdktf.numberToTerraform(struct!.dstPortUndefDrop),
    dst_sport_bl: cdktf.numberToTerraform(struct!.dstSportBl),
    dst_sport_exceed_drop_any: cdktf.numberToTerraform(struct!.dstSportExceedDropAny),
    frag_drop: cdktf.numberToTerraform(struct!.fragDrop),
    frag_rcvd: cdktf.numberToTerraform(struct!.fragRcvd),
    glid_action_encap_send_delay: cdktf.numberToTerraform(struct!.glidActionEncapSendDelay),
    glid_action_encap_send_immed: cdktf.numberToTerraform(struct!.glidActionEncapSendImmed),
    icmp_any_exceed: cdktf.numberToTerraform(struct!.icmpAnyExceed),
    icmp_drop_bl: cdktf.numberToTerraform(struct!.icmpDropBl),
    icmp_dst_drop: cdktf.numberToTerraform(struct!.icmpDstDrop),
    icmp_src_drop: cdktf.numberToTerraform(struct!.icmpSrcDrop),
    icmp_src_dst_drop: cdktf.numberToTerraform(struct!.icmpSrcDstDrop),
    icmp_total_bytes_drop: cdktf.numberToTerraform(struct!.icmpTotalBytesDrop),
    icmp_total_bytes_rcv: cdktf.numberToTerraform(struct!.icmpTotalBytesRcv),
    icmp_total_drop: cdktf.numberToTerraform(struct!.icmpTotalDrop),
    inicmp: cdktf.numberToTerraform(struct!.inicmp),
    inother: cdktf.numberToTerraform(struct!.inother),
    instateless: cdktf.numberToTerraform(struct!.instateless),
    intcp: cdktf.numberToTerraform(struct!.intcp),
    inudp: cdktf.numberToTerraform(struct!.inudp),
    ip_rcv: cdktf.numberToTerraform(struct!.ipRcv),
    ip_sent: cdktf.numberToTerraform(struct!.ipSent),
    ipv6_rcv: cdktf.numberToTerraform(struct!.ipv6Rcv),
    ipv6_sent: cdktf.numberToTerraform(struct!.ipv6Sent),
    not_for_ddos: cdktf.numberToTerraform(struct!.notForDdos),
    other_any_exceed: cdktf.numberToTerraform(struct!.otherAnyExceed),
    other_drop_bl: cdktf.numberToTerraform(struct!.otherDropBl),
    other_dst_drop: cdktf.numberToTerraform(struct!.otherDstDrop),
    other_src_drop: cdktf.numberToTerraform(struct!.otherSrcDrop),
    other_src_dst_drop: cdktf.numberToTerraform(struct!.otherSrcDstDrop),
    other_total_bytes_drop: cdktf.numberToTerraform(struct!.otherTotalBytesDrop),
    other_total_bytes_rcv: cdktf.numberToTerraform(struct!.otherTotalBytesRcv),
    other_total_drop: cdktf.numberToTerraform(struct!.otherTotalDrop),
    out_no_route: cdktf.numberToTerraform(struct!.outNoRoute),
    sess_aged_out: cdktf.numberToTerraform(struct!.sessAgedOut),
    src_hw_drop_rule_inserted: cdktf.numberToTerraform(struct!.srcHwDropRuleInserted),
    src_hw_drop_rule_removed: cdktf.numberToTerraform(struct!.srcHwDropRuleRemoved),
    src_ip_bypass: cdktf.numberToTerraform(struct!.srcIpBypass),
    tcp_any_exceed: cdktf.numberToTerraform(struct!.tcpAnyExceed),
    tcp_drop_bl: cdktf.numberToTerraform(struct!.tcpDropBl),
    tcp_dst_drop: cdktf.numberToTerraform(struct!.tcpDstDrop),
    tcp_sess_create: cdktf.numberToTerraform(struct!.tcpSessCreate),
    tcp_src_drop: cdktf.numberToTerraform(struct!.tcpSrcDrop),
    tcp_src_dst_drop: cdktf.numberToTerraform(struct!.tcpSrcDstDrop),
    tcp_total_bytes_drop: cdktf.numberToTerraform(struct!.tcpTotalBytesDrop),
    tcp_total_bytes_rcv: cdktf.numberToTerraform(struct!.tcpTotalBytesRcv),
    tcp_total_drop: cdktf.numberToTerraform(struct!.tcpTotalDrop),
    udp_any_exceed: cdktf.numberToTerraform(struct!.udpAnyExceed),
    udp_drop_bl: cdktf.numberToTerraform(struct!.udpDropBl),
    udp_dst_drop: cdktf.numberToTerraform(struct!.udpDstDrop),
    udp_sess_create: cdktf.numberToTerraform(struct!.udpSessCreate),
    udp_src_drop: cdktf.numberToTerraform(struct!.udpSrcDrop),
    udp_src_dst_drop: cdktf.numberToTerraform(struct!.udpSrcDstDrop),
    udp_total_bytes_drop: cdktf.numberToTerraform(struct!.udpTotalBytesDrop),
    udp_total_bytes_rcv: cdktf.numberToTerraform(struct!.udpTotalBytesRcv),
    udp_total_drop: cdktf.numberToTerraform(struct!.udpTotalDrop),
    v4_sess_create: cdktf.numberToTerraform(struct!.v4SessCreate),
    v6_sess_create: cdktf.numberToTerraform(struct!.v6SessCreate),
  }
}


export function dataThunderDdosBriefStatsStatsToHclTerraform(struct?: DataThunderDdosBriefStatsStatsOutputReference | DataThunderDdosBriefStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    dst_egress_bytes: {
      value: cdktf.numberToHclTerraform(struct!.dstEgressBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_egress_packets: {
      value: cdktf.numberToHclTerraform(struct!.dstEgressPackets),
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
    dst_hw_drop_rule_inserted: {
      value: cdktf.numberToHclTerraform(struct!.dstHwDropRuleInserted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_hw_drop_rule_removed: {
      value: cdktf.numberToHclTerraform(struct!.dstHwDropRuleRemoved),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ingress_bytes: {
      value: cdktf.numberToHclTerraform(struct!.dstIngressBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ingress_packets: {
      value: cdktf.numberToHclTerraform(struct!.dstIngressPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ip_bypass: {
      value: cdktf.numberToHclTerraform(struct!.dstIpBypass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ipproto_bl: {
      value: cdktf.numberToHclTerraform(struct!.dstIpprotoBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ipproto_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstIpprotoDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ipproto_exceed_drop_any: {
      value: cdktf.numberToHclTerraform(struct!.dstIpprotoExceedDropAny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ipproto_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.dstIpprotoRcvd),
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
    dst_port_exceed_drop_any: {
      value: cdktf.numberToHclTerraform(struct!.dstPortExceedDropAny),
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
    dst_sport_bl: {
      value: cdktf.numberToHclTerraform(struct!.dstSportBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_sport_exceed_drop_any: {
      value: cdktf.numberToHclTerraform(struct!.dstSportExceedDropAny),
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
    glid_action_encap_send_delay: {
      value: cdktf.numberToHclTerraform(struct!.glidActionEncapSendDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    glid_action_encap_send_immed: {
      value: cdktf.numberToHclTerraform(struct!.glidActionEncapSendImmed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_any_exceed: {
      value: cdktf.numberToHclTerraform(struct!.icmpAnyExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_drop_bl: {
      value: cdktf.numberToHclTerraform(struct!.icmpDropBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_dst_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmpDstDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_src_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmpSrcDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_src_dst_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmpSrcDstDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_total_bytes_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmpTotalBytesDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_total_bytes_rcv: {
      value: cdktf.numberToHclTerraform(struct!.icmpTotalBytesRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_total_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmpTotalDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inicmp: {
      value: cdktf.numberToHclTerraform(struct!.inicmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inother: {
      value: cdktf.numberToHclTerraform(struct!.inother),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    instateless: {
      value: cdktf.numberToHclTerraform(struct!.instateless),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    intcp: {
      value: cdktf.numberToHclTerraform(struct!.intcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inudp: {
      value: cdktf.numberToHclTerraform(struct!.inudp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_rcv: {
      value: cdktf.numberToHclTerraform(struct!.ipRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_sent: {
      value: cdktf.numberToHclTerraform(struct!.ipSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_rcv: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Rcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_sent: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Sent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    not_for_ddos: {
      value: cdktf.numberToHclTerraform(struct!.notForDdos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_any_exceed: {
      value: cdktf.numberToHclTerraform(struct!.otherAnyExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_drop_bl: {
      value: cdktf.numberToHclTerraform(struct!.otherDropBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_dst_drop: {
      value: cdktf.numberToHclTerraform(struct!.otherDstDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_src_drop: {
      value: cdktf.numberToHclTerraform(struct!.otherSrcDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_src_dst_drop: {
      value: cdktf.numberToHclTerraform(struct!.otherSrcDstDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_total_bytes_drop: {
      value: cdktf.numberToHclTerraform(struct!.otherTotalBytesDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_total_bytes_rcv: {
      value: cdktf.numberToHclTerraform(struct!.otherTotalBytesRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_total_drop: {
      value: cdktf.numberToHclTerraform(struct!.otherTotalDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_no_route: {
      value: cdktf.numberToHclTerraform(struct!.outNoRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sess_aged_out: {
      value: cdktf.numberToHclTerraform(struct!.sessAgedOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_hw_drop_rule_inserted: {
      value: cdktf.numberToHclTerraform(struct!.srcHwDropRuleInserted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_hw_drop_rule_removed: {
      value: cdktf.numberToHclTerraform(struct!.srcHwDropRuleRemoved),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ip_bypass: {
      value: cdktf.numberToHclTerraform(struct!.srcIpBypass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_any_exceed: {
      value: cdktf.numberToHclTerraform(struct!.tcpAnyExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_drop_bl: {
      value: cdktf.numberToHclTerraform(struct!.tcpDropBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_dst_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpDstDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_sess_create: {
      value: cdktf.numberToHclTerraform(struct!.tcpSessCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_src_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpSrcDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_src_dst_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpSrcDstDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_total_bytes_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpTotalBytesDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_total_bytes_rcv: {
      value: cdktf.numberToHclTerraform(struct!.tcpTotalBytesRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_total_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpTotalDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_any_exceed: {
      value: cdktf.numberToHclTerraform(struct!.udpAnyExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_drop_bl: {
      value: cdktf.numberToHclTerraform(struct!.udpDropBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_dst_drop: {
      value: cdktf.numberToHclTerraform(struct!.udpDstDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_sess_create: {
      value: cdktf.numberToHclTerraform(struct!.udpSessCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_src_drop: {
      value: cdktf.numberToHclTerraform(struct!.udpSrcDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_src_dst_drop: {
      value: cdktf.numberToHclTerraform(struct!.udpSrcDstDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_total_bytes_drop: {
      value: cdktf.numberToHclTerraform(struct!.udpTotalBytesDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_total_bytes_rcv: {
      value: cdktf.numberToHclTerraform(struct!.udpTotalBytesRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_total_drop: {
      value: cdktf.numberToHclTerraform(struct!.udpTotalDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v4_sess_create: {
      value: cdktf.numberToHclTerraform(struct!.v4SessCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v6_sess_create: {
      value: cdktf.numberToHclTerraform(struct!.v6SessCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosBriefStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosBriefStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstBlackholeInject !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstBlackholeInject = this._dstBlackholeInject;
    }
    if (this._dstBlackholeWithdraw !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstBlackholeWithdraw = this._dstBlackholeWithdraw;
    }
    if (this._dstEgressBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEgressBytes = this._dstEgressBytes;
    }
    if (this._dstEgressPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEgressPackets = this._dstEgressPackets;
    }
    if (this._dstHwDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstHwDrop = this._dstHwDrop;
    }
    if (this._dstHwDropRuleInserted !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstHwDropRuleInserted = this._dstHwDropRuleInserted;
    }
    if (this._dstHwDropRuleRemoved !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstHwDropRuleRemoved = this._dstHwDropRuleRemoved;
    }
    if (this._dstIngressBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIngressBytes = this._dstIngressBytes;
    }
    if (this._dstIngressPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIngressPackets = this._dstIngressPackets;
    }
    if (this._dstIpBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpBypass = this._dstIpBypass;
    }
    if (this._dstIpprotoBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpprotoBl = this._dstIpprotoBl;
    }
    if (this._dstIpprotoDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpprotoDrop = this._dstIpprotoDrop;
    }
    if (this._dstIpprotoExceedDropAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpprotoExceedDropAny = this._dstIpprotoExceedDropAny;
    }
    if (this._dstIpprotoRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpprotoRcvd = this._dstIpprotoRcvd;
    }
    if (this._dstPortBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortBl = this._dstPortBl;
    }
    if (this._dstPortExceedDropAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortExceedDropAny = this._dstPortExceedDropAny;
    }
    if (this._dstPortUndefDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortUndefDrop = this._dstPortUndefDrop;
    }
    if (this._dstSportBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSportBl = this._dstSportBl;
    }
    if (this._dstSportExceedDropAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSportExceedDropAny = this._dstSportExceedDropAny;
    }
    if (this._fragDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragDrop = this._fragDrop;
    }
    if (this._fragRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragRcvd = this._fragRcvd;
    }
    if (this._glidActionEncapSendDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.glidActionEncapSendDelay = this._glidActionEncapSendDelay;
    }
    if (this._glidActionEncapSendImmed !== undefined) {
      hasAnyValues = true;
      internalValueResult.glidActionEncapSendImmed = this._glidActionEncapSendImmed;
    }
    if (this._icmpAnyExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpAnyExceed = this._icmpAnyExceed;
    }
    if (this._icmpDropBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpDropBl = this._icmpDropBl;
    }
    if (this._icmpDstDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpDstDrop = this._icmpDstDrop;
    }
    if (this._icmpSrcDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpSrcDrop = this._icmpSrcDrop;
    }
    if (this._icmpSrcDstDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpSrcDstDrop = this._icmpSrcDstDrop;
    }
    if (this._icmpTotalBytesDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpTotalBytesDrop = this._icmpTotalBytesDrop;
    }
    if (this._icmpTotalBytesRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpTotalBytesRcv = this._icmpTotalBytesRcv;
    }
    if (this._icmpTotalDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpTotalDrop = this._icmpTotalDrop;
    }
    if (this._inicmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.inicmp = this._inicmp;
    }
    if (this._inother !== undefined) {
      hasAnyValues = true;
      internalValueResult.inother = this._inother;
    }
    if (this._instateless !== undefined) {
      hasAnyValues = true;
      internalValueResult.instateless = this._instateless;
    }
    if (this._intcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.intcp = this._intcp;
    }
    if (this._inudp !== undefined) {
      hasAnyValues = true;
      internalValueResult.inudp = this._inudp;
    }
    if (this._ipRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRcv = this._ipRcv;
    }
    if (this._ipSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSent = this._ipSent;
    }
    if (this._ipv6Rcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Rcv = this._ipv6Rcv;
    }
    if (this._ipv6Sent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Sent = this._ipv6Sent;
    }
    if (this._notForDdos !== undefined) {
      hasAnyValues = true;
      internalValueResult.notForDdos = this._notForDdos;
    }
    if (this._otherAnyExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherAnyExceed = this._otherAnyExceed;
    }
    if (this._otherDropBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherDropBl = this._otherDropBl;
    }
    if (this._otherDstDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherDstDrop = this._otherDstDrop;
    }
    if (this._otherSrcDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherSrcDrop = this._otherSrcDrop;
    }
    if (this._otherSrcDstDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherSrcDstDrop = this._otherSrcDstDrop;
    }
    if (this._otherTotalBytesDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherTotalBytesDrop = this._otherTotalBytesDrop;
    }
    if (this._otherTotalBytesRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherTotalBytesRcv = this._otherTotalBytesRcv;
    }
    if (this._otherTotalDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherTotalDrop = this._otherTotalDrop;
    }
    if (this._outNoRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.outNoRoute = this._outNoRoute;
    }
    if (this._sessAgedOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessAgedOut = this._sessAgedOut;
    }
    if (this._srcHwDropRuleInserted !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHwDropRuleInserted = this._srcHwDropRuleInserted;
    }
    if (this._srcHwDropRuleRemoved !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHwDropRuleRemoved = this._srcHwDropRuleRemoved;
    }
    if (this._srcIpBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpBypass = this._srcIpBypass;
    }
    if (this._tcpAnyExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAnyExceed = this._tcpAnyExceed;
    }
    if (this._tcpDropBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpDropBl = this._tcpDropBl;
    }
    if (this._tcpDstDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpDstDrop = this._tcpDstDrop;
    }
    if (this._tcpSessCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSessCreate = this._tcpSessCreate;
    }
    if (this._tcpSrcDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSrcDrop = this._tcpSrcDrop;
    }
    if (this._tcpSrcDstDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSrcDstDrop = this._tcpSrcDstDrop;
    }
    if (this._tcpTotalBytesDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpTotalBytesDrop = this._tcpTotalBytesDrop;
    }
    if (this._tcpTotalBytesRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpTotalBytesRcv = this._tcpTotalBytesRcv;
    }
    if (this._tcpTotalDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpTotalDrop = this._tcpTotalDrop;
    }
    if (this._udpAnyExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpAnyExceed = this._udpAnyExceed;
    }
    if (this._udpDropBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpDropBl = this._udpDropBl;
    }
    if (this._udpDstDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpDstDrop = this._udpDstDrop;
    }
    if (this._udpSessCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpSessCreate = this._udpSessCreate;
    }
    if (this._udpSrcDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpSrcDrop = this._udpSrcDrop;
    }
    if (this._udpSrcDstDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpSrcDstDrop = this._udpSrcDstDrop;
    }
    if (this._udpTotalBytesDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpTotalBytesDrop = this._udpTotalBytesDrop;
    }
    if (this._udpTotalBytesRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpTotalBytesRcv = this._udpTotalBytesRcv;
    }
    if (this._udpTotalDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpTotalDrop = this._udpTotalDrop;
    }
    if (this._v4SessCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.v4SessCreate = this._v4SessCreate;
    }
    if (this._v6SessCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6SessCreate = this._v6SessCreate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosBriefStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstBlackholeInject = undefined;
      this._dstBlackholeWithdraw = undefined;
      this._dstEgressBytes = undefined;
      this._dstEgressPackets = undefined;
      this._dstHwDrop = undefined;
      this._dstHwDropRuleInserted = undefined;
      this._dstHwDropRuleRemoved = undefined;
      this._dstIngressBytes = undefined;
      this._dstIngressPackets = undefined;
      this._dstIpBypass = undefined;
      this._dstIpprotoBl = undefined;
      this._dstIpprotoDrop = undefined;
      this._dstIpprotoExceedDropAny = undefined;
      this._dstIpprotoRcvd = undefined;
      this._dstPortBl = undefined;
      this._dstPortExceedDropAny = undefined;
      this._dstPortUndefDrop = undefined;
      this._dstSportBl = undefined;
      this._dstSportExceedDropAny = undefined;
      this._fragDrop = undefined;
      this._fragRcvd = undefined;
      this._glidActionEncapSendDelay = undefined;
      this._glidActionEncapSendImmed = undefined;
      this._icmpAnyExceed = undefined;
      this._icmpDropBl = undefined;
      this._icmpDstDrop = undefined;
      this._icmpSrcDrop = undefined;
      this._icmpSrcDstDrop = undefined;
      this._icmpTotalBytesDrop = undefined;
      this._icmpTotalBytesRcv = undefined;
      this._icmpTotalDrop = undefined;
      this._inicmp = undefined;
      this._inother = undefined;
      this._instateless = undefined;
      this._intcp = undefined;
      this._inudp = undefined;
      this._ipRcv = undefined;
      this._ipSent = undefined;
      this._ipv6Rcv = undefined;
      this._ipv6Sent = undefined;
      this._notForDdos = undefined;
      this._otherAnyExceed = undefined;
      this._otherDropBl = undefined;
      this._otherDstDrop = undefined;
      this._otherSrcDrop = undefined;
      this._otherSrcDstDrop = undefined;
      this._otherTotalBytesDrop = undefined;
      this._otherTotalBytesRcv = undefined;
      this._otherTotalDrop = undefined;
      this._outNoRoute = undefined;
      this._sessAgedOut = undefined;
      this._srcHwDropRuleInserted = undefined;
      this._srcHwDropRuleRemoved = undefined;
      this._srcIpBypass = undefined;
      this._tcpAnyExceed = undefined;
      this._tcpDropBl = undefined;
      this._tcpDstDrop = undefined;
      this._tcpSessCreate = undefined;
      this._tcpSrcDrop = undefined;
      this._tcpSrcDstDrop = undefined;
      this._tcpTotalBytesDrop = undefined;
      this._tcpTotalBytesRcv = undefined;
      this._tcpTotalDrop = undefined;
      this._udpAnyExceed = undefined;
      this._udpDropBl = undefined;
      this._udpDstDrop = undefined;
      this._udpSessCreate = undefined;
      this._udpSrcDrop = undefined;
      this._udpSrcDstDrop = undefined;
      this._udpTotalBytesDrop = undefined;
      this._udpTotalBytesRcv = undefined;
      this._udpTotalDrop = undefined;
      this._v4SessCreate = undefined;
      this._v6SessCreate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstBlackholeInject = value.dstBlackholeInject;
      this._dstBlackholeWithdraw = value.dstBlackholeWithdraw;
      this._dstEgressBytes = value.dstEgressBytes;
      this._dstEgressPackets = value.dstEgressPackets;
      this._dstHwDrop = value.dstHwDrop;
      this._dstHwDropRuleInserted = value.dstHwDropRuleInserted;
      this._dstHwDropRuleRemoved = value.dstHwDropRuleRemoved;
      this._dstIngressBytes = value.dstIngressBytes;
      this._dstIngressPackets = value.dstIngressPackets;
      this._dstIpBypass = value.dstIpBypass;
      this._dstIpprotoBl = value.dstIpprotoBl;
      this._dstIpprotoDrop = value.dstIpprotoDrop;
      this._dstIpprotoExceedDropAny = value.dstIpprotoExceedDropAny;
      this._dstIpprotoRcvd = value.dstIpprotoRcvd;
      this._dstPortBl = value.dstPortBl;
      this._dstPortExceedDropAny = value.dstPortExceedDropAny;
      this._dstPortUndefDrop = value.dstPortUndefDrop;
      this._dstSportBl = value.dstSportBl;
      this._dstSportExceedDropAny = value.dstSportExceedDropAny;
      this._fragDrop = value.fragDrop;
      this._fragRcvd = value.fragRcvd;
      this._glidActionEncapSendDelay = value.glidActionEncapSendDelay;
      this._glidActionEncapSendImmed = value.glidActionEncapSendImmed;
      this._icmpAnyExceed = value.icmpAnyExceed;
      this._icmpDropBl = value.icmpDropBl;
      this._icmpDstDrop = value.icmpDstDrop;
      this._icmpSrcDrop = value.icmpSrcDrop;
      this._icmpSrcDstDrop = value.icmpSrcDstDrop;
      this._icmpTotalBytesDrop = value.icmpTotalBytesDrop;
      this._icmpTotalBytesRcv = value.icmpTotalBytesRcv;
      this._icmpTotalDrop = value.icmpTotalDrop;
      this._inicmp = value.inicmp;
      this._inother = value.inother;
      this._instateless = value.instateless;
      this._intcp = value.intcp;
      this._inudp = value.inudp;
      this._ipRcv = value.ipRcv;
      this._ipSent = value.ipSent;
      this._ipv6Rcv = value.ipv6Rcv;
      this._ipv6Sent = value.ipv6Sent;
      this._notForDdos = value.notForDdos;
      this._otherAnyExceed = value.otherAnyExceed;
      this._otherDropBl = value.otherDropBl;
      this._otherDstDrop = value.otherDstDrop;
      this._otherSrcDrop = value.otherSrcDrop;
      this._otherSrcDstDrop = value.otherSrcDstDrop;
      this._otherTotalBytesDrop = value.otherTotalBytesDrop;
      this._otherTotalBytesRcv = value.otherTotalBytesRcv;
      this._otherTotalDrop = value.otherTotalDrop;
      this._outNoRoute = value.outNoRoute;
      this._sessAgedOut = value.sessAgedOut;
      this._srcHwDropRuleInserted = value.srcHwDropRuleInserted;
      this._srcHwDropRuleRemoved = value.srcHwDropRuleRemoved;
      this._srcIpBypass = value.srcIpBypass;
      this._tcpAnyExceed = value.tcpAnyExceed;
      this._tcpDropBl = value.tcpDropBl;
      this._tcpDstDrop = value.tcpDstDrop;
      this._tcpSessCreate = value.tcpSessCreate;
      this._tcpSrcDrop = value.tcpSrcDrop;
      this._tcpSrcDstDrop = value.tcpSrcDstDrop;
      this._tcpTotalBytesDrop = value.tcpTotalBytesDrop;
      this._tcpTotalBytesRcv = value.tcpTotalBytesRcv;
      this._tcpTotalDrop = value.tcpTotalDrop;
      this._udpAnyExceed = value.udpAnyExceed;
      this._udpDropBl = value.udpDropBl;
      this._udpDstDrop = value.udpDstDrop;
      this._udpSessCreate = value.udpSessCreate;
      this._udpSrcDrop = value.udpSrcDrop;
      this._udpSrcDstDrop = value.udpSrcDstDrop;
      this._udpTotalBytesDrop = value.udpTotalBytesDrop;
      this._udpTotalBytesRcv = value.udpTotalBytesRcv;
      this._udpTotalDrop = value.udpTotalDrop;
      this._v4SessCreate = value.v4SessCreate;
      this._v6SessCreate = value.v6SessCreate;
    }
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

  // dst_egress_bytes - computed: false, optional: true, required: false
  private _dstEgressBytes?: number; 
  public get dstEgressBytes() {
    return this.getNumberAttribute('dst_egress_bytes');
  }
  public set dstEgressBytes(value: number) {
    this._dstEgressBytes = value;
  }
  public resetDstEgressBytes() {
    this._dstEgressBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEgressBytesInput() {
    return this._dstEgressBytes;
  }

  // dst_egress_packets - computed: false, optional: true, required: false
  private _dstEgressPackets?: number; 
  public get dstEgressPackets() {
    return this.getNumberAttribute('dst_egress_packets');
  }
  public set dstEgressPackets(value: number) {
    this._dstEgressPackets = value;
  }
  public resetDstEgressPackets() {
    this._dstEgressPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEgressPacketsInput() {
    return this._dstEgressPackets;
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

  // dst_hw_drop_rule_inserted - computed: false, optional: true, required: false
  private _dstHwDropRuleInserted?: number; 
  public get dstHwDropRuleInserted() {
    return this.getNumberAttribute('dst_hw_drop_rule_inserted');
  }
  public set dstHwDropRuleInserted(value: number) {
    this._dstHwDropRuleInserted = value;
  }
  public resetDstHwDropRuleInserted() {
    this._dstHwDropRuleInserted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstHwDropRuleInsertedInput() {
    return this._dstHwDropRuleInserted;
  }

  // dst_hw_drop_rule_removed - computed: false, optional: true, required: false
  private _dstHwDropRuleRemoved?: number; 
  public get dstHwDropRuleRemoved() {
    return this.getNumberAttribute('dst_hw_drop_rule_removed');
  }
  public set dstHwDropRuleRemoved(value: number) {
    this._dstHwDropRuleRemoved = value;
  }
  public resetDstHwDropRuleRemoved() {
    this._dstHwDropRuleRemoved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstHwDropRuleRemovedInput() {
    return this._dstHwDropRuleRemoved;
  }

  // dst_ingress_bytes - computed: false, optional: true, required: false
  private _dstIngressBytes?: number; 
  public get dstIngressBytes() {
    return this.getNumberAttribute('dst_ingress_bytes');
  }
  public set dstIngressBytes(value: number) {
    this._dstIngressBytes = value;
  }
  public resetDstIngressBytes() {
    this._dstIngressBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIngressBytesInput() {
    return this._dstIngressBytes;
  }

  // dst_ingress_packets - computed: false, optional: true, required: false
  private _dstIngressPackets?: number; 
  public get dstIngressPackets() {
    return this.getNumberAttribute('dst_ingress_packets');
  }
  public set dstIngressPackets(value: number) {
    this._dstIngressPackets = value;
  }
  public resetDstIngressPackets() {
    this._dstIngressPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIngressPacketsInput() {
    return this._dstIngressPackets;
  }

  // dst_ip_bypass - computed: false, optional: true, required: false
  private _dstIpBypass?: number; 
  public get dstIpBypass() {
    return this.getNumberAttribute('dst_ip_bypass');
  }
  public set dstIpBypass(value: number) {
    this._dstIpBypass = value;
  }
  public resetDstIpBypass() {
    this._dstIpBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpBypassInput() {
    return this._dstIpBypass;
  }

  // dst_ipproto_bl - computed: false, optional: true, required: false
  private _dstIpprotoBl?: number; 
  public get dstIpprotoBl() {
    return this.getNumberAttribute('dst_ipproto_bl');
  }
  public set dstIpprotoBl(value: number) {
    this._dstIpprotoBl = value;
  }
  public resetDstIpprotoBl() {
    this._dstIpprotoBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpprotoBlInput() {
    return this._dstIpprotoBl;
  }

  // dst_ipproto_drop - computed: false, optional: true, required: false
  private _dstIpprotoDrop?: number; 
  public get dstIpprotoDrop() {
    return this.getNumberAttribute('dst_ipproto_drop');
  }
  public set dstIpprotoDrop(value: number) {
    this._dstIpprotoDrop = value;
  }
  public resetDstIpprotoDrop() {
    this._dstIpprotoDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpprotoDropInput() {
    return this._dstIpprotoDrop;
  }

  // dst_ipproto_exceed_drop_any - computed: false, optional: true, required: false
  private _dstIpprotoExceedDropAny?: number; 
  public get dstIpprotoExceedDropAny() {
    return this.getNumberAttribute('dst_ipproto_exceed_drop_any');
  }
  public set dstIpprotoExceedDropAny(value: number) {
    this._dstIpprotoExceedDropAny = value;
  }
  public resetDstIpprotoExceedDropAny() {
    this._dstIpprotoExceedDropAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpprotoExceedDropAnyInput() {
    return this._dstIpprotoExceedDropAny;
  }

  // dst_ipproto_rcvd - computed: false, optional: true, required: false
  private _dstIpprotoRcvd?: number; 
  public get dstIpprotoRcvd() {
    return this.getNumberAttribute('dst_ipproto_rcvd');
  }
  public set dstIpprotoRcvd(value: number) {
    this._dstIpprotoRcvd = value;
  }
  public resetDstIpprotoRcvd() {
    this._dstIpprotoRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpprotoRcvdInput() {
    return this._dstIpprotoRcvd;
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

  // dst_port_exceed_drop_any - computed: false, optional: true, required: false
  private _dstPortExceedDropAny?: number; 
  public get dstPortExceedDropAny() {
    return this.getNumberAttribute('dst_port_exceed_drop_any');
  }
  public set dstPortExceedDropAny(value: number) {
    this._dstPortExceedDropAny = value;
  }
  public resetDstPortExceedDropAny() {
    this._dstPortExceedDropAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortExceedDropAnyInput() {
    return this._dstPortExceedDropAny;
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

  // dst_sport_bl - computed: false, optional: true, required: false
  private _dstSportBl?: number; 
  public get dstSportBl() {
    return this.getNumberAttribute('dst_sport_bl');
  }
  public set dstSportBl(value: number) {
    this._dstSportBl = value;
  }
  public resetDstSportBl() {
    this._dstSportBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSportBlInput() {
    return this._dstSportBl;
  }

  // dst_sport_exceed_drop_any - computed: false, optional: true, required: false
  private _dstSportExceedDropAny?: number; 
  public get dstSportExceedDropAny() {
    return this.getNumberAttribute('dst_sport_exceed_drop_any');
  }
  public set dstSportExceedDropAny(value: number) {
    this._dstSportExceedDropAny = value;
  }
  public resetDstSportExceedDropAny() {
    this._dstSportExceedDropAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSportExceedDropAnyInput() {
    return this._dstSportExceedDropAny;
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

  // glid_action_encap_send_delay - computed: false, optional: true, required: false
  private _glidActionEncapSendDelay?: number; 
  public get glidActionEncapSendDelay() {
    return this.getNumberAttribute('glid_action_encap_send_delay');
  }
  public set glidActionEncapSendDelay(value: number) {
    this._glidActionEncapSendDelay = value;
  }
  public resetGlidActionEncapSendDelay() {
    this._glidActionEncapSendDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidActionEncapSendDelayInput() {
    return this._glidActionEncapSendDelay;
  }

  // glid_action_encap_send_immed - computed: false, optional: true, required: false
  private _glidActionEncapSendImmed?: number; 
  public get glidActionEncapSendImmed() {
    return this.getNumberAttribute('glid_action_encap_send_immed');
  }
  public set glidActionEncapSendImmed(value: number) {
    this._glidActionEncapSendImmed = value;
  }
  public resetGlidActionEncapSendImmed() {
    this._glidActionEncapSendImmed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get glidActionEncapSendImmedInput() {
    return this._glidActionEncapSendImmed;
  }

  // icmp_any_exceed - computed: false, optional: true, required: false
  private _icmpAnyExceed?: number; 
  public get icmpAnyExceed() {
    return this.getNumberAttribute('icmp_any_exceed');
  }
  public set icmpAnyExceed(value: number) {
    this._icmpAnyExceed = value;
  }
  public resetIcmpAnyExceed() {
    this._icmpAnyExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpAnyExceedInput() {
    return this._icmpAnyExceed;
  }

  // icmp_drop_bl - computed: false, optional: true, required: false
  private _icmpDropBl?: number; 
  public get icmpDropBl() {
    return this.getNumberAttribute('icmp_drop_bl');
  }
  public set icmpDropBl(value: number) {
    this._icmpDropBl = value;
  }
  public resetIcmpDropBl() {
    this._icmpDropBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpDropBlInput() {
    return this._icmpDropBl;
  }

  // icmp_dst_drop - computed: false, optional: true, required: false
  private _icmpDstDrop?: number; 
  public get icmpDstDrop() {
    return this.getNumberAttribute('icmp_dst_drop');
  }
  public set icmpDstDrop(value: number) {
    this._icmpDstDrop = value;
  }
  public resetIcmpDstDrop() {
    this._icmpDstDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpDstDropInput() {
    return this._icmpDstDrop;
  }

  // icmp_src_drop - computed: false, optional: true, required: false
  private _icmpSrcDrop?: number; 
  public get icmpSrcDrop() {
    return this.getNumberAttribute('icmp_src_drop');
  }
  public set icmpSrcDrop(value: number) {
    this._icmpSrcDrop = value;
  }
  public resetIcmpSrcDrop() {
    this._icmpSrcDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpSrcDropInput() {
    return this._icmpSrcDrop;
  }

  // icmp_src_dst_drop - computed: false, optional: true, required: false
  private _icmpSrcDstDrop?: number; 
  public get icmpSrcDstDrop() {
    return this.getNumberAttribute('icmp_src_dst_drop');
  }
  public set icmpSrcDstDrop(value: number) {
    this._icmpSrcDstDrop = value;
  }
  public resetIcmpSrcDstDrop() {
    this._icmpSrcDstDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpSrcDstDropInput() {
    return this._icmpSrcDstDrop;
  }

  // icmp_total_bytes_drop - computed: false, optional: true, required: false
  private _icmpTotalBytesDrop?: number; 
  public get icmpTotalBytesDrop() {
    return this.getNumberAttribute('icmp_total_bytes_drop');
  }
  public set icmpTotalBytesDrop(value: number) {
    this._icmpTotalBytesDrop = value;
  }
  public resetIcmpTotalBytesDrop() {
    this._icmpTotalBytesDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTotalBytesDropInput() {
    return this._icmpTotalBytesDrop;
  }

  // icmp_total_bytes_rcv - computed: false, optional: true, required: false
  private _icmpTotalBytesRcv?: number; 
  public get icmpTotalBytesRcv() {
    return this.getNumberAttribute('icmp_total_bytes_rcv');
  }
  public set icmpTotalBytesRcv(value: number) {
    this._icmpTotalBytesRcv = value;
  }
  public resetIcmpTotalBytesRcv() {
    this._icmpTotalBytesRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTotalBytesRcvInput() {
    return this._icmpTotalBytesRcv;
  }

  // icmp_total_drop - computed: false, optional: true, required: false
  private _icmpTotalDrop?: number; 
  public get icmpTotalDrop() {
    return this.getNumberAttribute('icmp_total_drop');
  }
  public set icmpTotalDrop(value: number) {
    this._icmpTotalDrop = value;
  }
  public resetIcmpTotalDrop() {
    this._icmpTotalDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTotalDropInput() {
    return this._icmpTotalDrop;
  }

  // inicmp - computed: false, optional: true, required: false
  private _inicmp?: number; 
  public get inicmp() {
    return this.getNumberAttribute('inicmp');
  }
  public set inicmp(value: number) {
    this._inicmp = value;
  }
  public resetInicmp() {
    this._inicmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inicmpInput() {
    return this._inicmp;
  }

  // inother - computed: false, optional: true, required: false
  private _inother?: number; 
  public get inother() {
    return this.getNumberAttribute('inother');
  }
  public set inother(value: number) {
    this._inother = value;
  }
  public resetInother() {
    this._inother = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inotherInput() {
    return this._inother;
  }

  // instateless - computed: false, optional: true, required: false
  private _instateless?: number; 
  public get instateless() {
    return this.getNumberAttribute('instateless');
  }
  public set instateless(value: number) {
    this._instateless = value;
  }
  public resetInstateless() {
    this._instateless = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instatelessInput() {
    return this._instateless;
  }

  // intcp - computed: false, optional: true, required: false
  private _intcp?: number; 
  public get intcp() {
    return this.getNumberAttribute('intcp');
  }
  public set intcp(value: number) {
    this._intcp = value;
  }
  public resetIntcp() {
    this._intcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intcpInput() {
    return this._intcp;
  }

  // inudp - computed: false, optional: true, required: false
  private _inudp?: number; 
  public get inudp() {
    return this.getNumberAttribute('inudp');
  }
  public set inudp(value: number) {
    this._inudp = value;
  }
  public resetInudp() {
    this._inudp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inudpInput() {
    return this._inudp;
  }

  // ip_rcv - computed: false, optional: true, required: false
  private _ipRcv?: number; 
  public get ipRcv() {
    return this.getNumberAttribute('ip_rcv');
  }
  public set ipRcv(value: number) {
    this._ipRcv = value;
  }
  public resetIpRcv() {
    this._ipRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRcvInput() {
    return this._ipRcv;
  }

  // ip_sent - computed: false, optional: true, required: false
  private _ipSent?: number; 
  public get ipSent() {
    return this.getNumberAttribute('ip_sent');
  }
  public set ipSent(value: number) {
    this._ipSent = value;
  }
  public resetIpSent() {
    this._ipSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSentInput() {
    return this._ipSent;
  }

  // ipv6_rcv - computed: false, optional: true, required: false
  private _ipv6Rcv?: number; 
  public get ipv6Rcv() {
    return this.getNumberAttribute('ipv6_rcv');
  }
  public set ipv6Rcv(value: number) {
    this._ipv6Rcv = value;
  }
  public resetIpv6Rcv() {
    this._ipv6Rcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RcvInput() {
    return this._ipv6Rcv;
  }

  // ipv6_sent - computed: false, optional: true, required: false
  private _ipv6Sent?: number; 
  public get ipv6Sent() {
    return this.getNumberAttribute('ipv6_sent');
  }
  public set ipv6Sent(value: number) {
    this._ipv6Sent = value;
  }
  public resetIpv6Sent() {
    this._ipv6Sent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SentInput() {
    return this._ipv6Sent;
  }

  // not_for_ddos - computed: false, optional: true, required: false
  private _notForDdos?: number; 
  public get notForDdos() {
    return this.getNumberAttribute('not_for_ddos');
  }
  public set notForDdos(value: number) {
    this._notForDdos = value;
  }
  public resetNotForDdos() {
    this._notForDdos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notForDdosInput() {
    return this._notForDdos;
  }

  // other_any_exceed - computed: false, optional: true, required: false
  private _otherAnyExceed?: number; 
  public get otherAnyExceed() {
    return this.getNumberAttribute('other_any_exceed');
  }
  public set otherAnyExceed(value: number) {
    this._otherAnyExceed = value;
  }
  public resetOtherAnyExceed() {
    this._otherAnyExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherAnyExceedInput() {
    return this._otherAnyExceed;
  }

  // other_drop_bl - computed: false, optional: true, required: false
  private _otherDropBl?: number; 
  public get otherDropBl() {
    return this.getNumberAttribute('other_drop_bl');
  }
  public set otherDropBl(value: number) {
    this._otherDropBl = value;
  }
  public resetOtherDropBl() {
    this._otherDropBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherDropBlInput() {
    return this._otherDropBl;
  }

  // other_dst_drop - computed: false, optional: true, required: false
  private _otherDstDrop?: number; 
  public get otherDstDrop() {
    return this.getNumberAttribute('other_dst_drop');
  }
  public set otherDstDrop(value: number) {
    this._otherDstDrop = value;
  }
  public resetOtherDstDrop() {
    this._otherDstDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherDstDropInput() {
    return this._otherDstDrop;
  }

  // other_src_drop - computed: false, optional: true, required: false
  private _otherSrcDrop?: number; 
  public get otherSrcDrop() {
    return this.getNumberAttribute('other_src_drop');
  }
  public set otherSrcDrop(value: number) {
    this._otherSrcDrop = value;
  }
  public resetOtherSrcDrop() {
    this._otherSrcDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherSrcDropInput() {
    return this._otherSrcDrop;
  }

  // other_src_dst_drop - computed: false, optional: true, required: false
  private _otherSrcDstDrop?: number; 
  public get otherSrcDstDrop() {
    return this.getNumberAttribute('other_src_dst_drop');
  }
  public set otherSrcDstDrop(value: number) {
    this._otherSrcDstDrop = value;
  }
  public resetOtherSrcDstDrop() {
    this._otherSrcDstDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherSrcDstDropInput() {
    return this._otherSrcDstDrop;
  }

  // other_total_bytes_drop - computed: false, optional: true, required: false
  private _otherTotalBytesDrop?: number; 
  public get otherTotalBytesDrop() {
    return this.getNumberAttribute('other_total_bytes_drop');
  }
  public set otherTotalBytesDrop(value: number) {
    this._otherTotalBytesDrop = value;
  }
  public resetOtherTotalBytesDrop() {
    this._otherTotalBytesDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherTotalBytesDropInput() {
    return this._otherTotalBytesDrop;
  }

  // other_total_bytes_rcv - computed: false, optional: true, required: false
  private _otherTotalBytesRcv?: number; 
  public get otherTotalBytesRcv() {
    return this.getNumberAttribute('other_total_bytes_rcv');
  }
  public set otherTotalBytesRcv(value: number) {
    this._otherTotalBytesRcv = value;
  }
  public resetOtherTotalBytesRcv() {
    this._otherTotalBytesRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherTotalBytesRcvInput() {
    return this._otherTotalBytesRcv;
  }

  // other_total_drop - computed: false, optional: true, required: false
  private _otherTotalDrop?: number; 
  public get otherTotalDrop() {
    return this.getNumberAttribute('other_total_drop');
  }
  public set otherTotalDrop(value: number) {
    this._otherTotalDrop = value;
  }
  public resetOtherTotalDrop() {
    this._otherTotalDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherTotalDropInput() {
    return this._otherTotalDrop;
  }

  // out_no_route - computed: false, optional: true, required: false
  private _outNoRoute?: number; 
  public get outNoRoute() {
    return this.getNumberAttribute('out_no_route');
  }
  public set outNoRoute(value: number) {
    this._outNoRoute = value;
  }
  public resetOutNoRoute() {
    this._outNoRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outNoRouteInput() {
    return this._outNoRoute;
  }

  // sess_aged_out - computed: false, optional: true, required: false
  private _sessAgedOut?: number; 
  public get sessAgedOut() {
    return this.getNumberAttribute('sess_aged_out');
  }
  public set sessAgedOut(value: number) {
    this._sessAgedOut = value;
  }
  public resetSessAgedOut() {
    this._sessAgedOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessAgedOutInput() {
    return this._sessAgedOut;
  }

  // src_hw_drop_rule_inserted - computed: false, optional: true, required: false
  private _srcHwDropRuleInserted?: number; 
  public get srcHwDropRuleInserted() {
    return this.getNumberAttribute('src_hw_drop_rule_inserted');
  }
  public set srcHwDropRuleInserted(value: number) {
    this._srcHwDropRuleInserted = value;
  }
  public resetSrcHwDropRuleInserted() {
    this._srcHwDropRuleInserted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHwDropRuleInsertedInput() {
    return this._srcHwDropRuleInserted;
  }

  // src_hw_drop_rule_removed - computed: false, optional: true, required: false
  private _srcHwDropRuleRemoved?: number; 
  public get srcHwDropRuleRemoved() {
    return this.getNumberAttribute('src_hw_drop_rule_removed');
  }
  public set srcHwDropRuleRemoved(value: number) {
    this._srcHwDropRuleRemoved = value;
  }
  public resetSrcHwDropRuleRemoved() {
    this._srcHwDropRuleRemoved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHwDropRuleRemovedInput() {
    return this._srcHwDropRuleRemoved;
  }

  // src_ip_bypass - computed: false, optional: true, required: false
  private _srcIpBypass?: number; 
  public get srcIpBypass() {
    return this.getNumberAttribute('src_ip_bypass');
  }
  public set srcIpBypass(value: number) {
    this._srcIpBypass = value;
  }
  public resetSrcIpBypass() {
    this._srcIpBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpBypassInput() {
    return this._srcIpBypass;
  }

  // tcp_any_exceed - computed: false, optional: true, required: false
  private _tcpAnyExceed?: number; 
  public get tcpAnyExceed() {
    return this.getNumberAttribute('tcp_any_exceed');
  }
  public set tcpAnyExceed(value: number) {
    this._tcpAnyExceed = value;
  }
  public resetTcpAnyExceed() {
    this._tcpAnyExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAnyExceedInput() {
    return this._tcpAnyExceed;
  }

  // tcp_drop_bl - computed: false, optional: true, required: false
  private _tcpDropBl?: number; 
  public get tcpDropBl() {
    return this.getNumberAttribute('tcp_drop_bl');
  }
  public set tcpDropBl(value: number) {
    this._tcpDropBl = value;
  }
  public resetTcpDropBl() {
    this._tcpDropBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpDropBlInput() {
    return this._tcpDropBl;
  }

  // tcp_dst_drop - computed: false, optional: true, required: false
  private _tcpDstDrop?: number; 
  public get tcpDstDrop() {
    return this.getNumberAttribute('tcp_dst_drop');
  }
  public set tcpDstDrop(value: number) {
    this._tcpDstDrop = value;
  }
  public resetTcpDstDrop() {
    this._tcpDstDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpDstDropInput() {
    return this._tcpDstDrop;
  }

  // tcp_sess_create - computed: false, optional: true, required: false
  private _tcpSessCreate?: number; 
  public get tcpSessCreate() {
    return this.getNumberAttribute('tcp_sess_create');
  }
  public set tcpSessCreate(value: number) {
    this._tcpSessCreate = value;
  }
  public resetTcpSessCreate() {
    this._tcpSessCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSessCreateInput() {
    return this._tcpSessCreate;
  }

  // tcp_src_drop - computed: false, optional: true, required: false
  private _tcpSrcDrop?: number; 
  public get tcpSrcDrop() {
    return this.getNumberAttribute('tcp_src_drop');
  }
  public set tcpSrcDrop(value: number) {
    this._tcpSrcDrop = value;
  }
  public resetTcpSrcDrop() {
    this._tcpSrcDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSrcDropInput() {
    return this._tcpSrcDrop;
  }

  // tcp_src_dst_drop - computed: false, optional: true, required: false
  private _tcpSrcDstDrop?: number; 
  public get tcpSrcDstDrop() {
    return this.getNumberAttribute('tcp_src_dst_drop');
  }
  public set tcpSrcDstDrop(value: number) {
    this._tcpSrcDstDrop = value;
  }
  public resetTcpSrcDstDrop() {
    this._tcpSrcDstDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSrcDstDropInput() {
    return this._tcpSrcDstDrop;
  }

  // tcp_total_bytes_drop - computed: false, optional: true, required: false
  private _tcpTotalBytesDrop?: number; 
  public get tcpTotalBytesDrop() {
    return this.getNumberAttribute('tcp_total_bytes_drop');
  }
  public set tcpTotalBytesDrop(value: number) {
    this._tcpTotalBytesDrop = value;
  }
  public resetTcpTotalBytesDrop() {
    this._tcpTotalBytesDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTotalBytesDropInput() {
    return this._tcpTotalBytesDrop;
  }

  // tcp_total_bytes_rcv - computed: false, optional: true, required: false
  private _tcpTotalBytesRcv?: number; 
  public get tcpTotalBytesRcv() {
    return this.getNumberAttribute('tcp_total_bytes_rcv');
  }
  public set tcpTotalBytesRcv(value: number) {
    this._tcpTotalBytesRcv = value;
  }
  public resetTcpTotalBytesRcv() {
    this._tcpTotalBytesRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTotalBytesRcvInput() {
    return this._tcpTotalBytesRcv;
  }

  // tcp_total_drop - computed: false, optional: true, required: false
  private _tcpTotalDrop?: number; 
  public get tcpTotalDrop() {
    return this.getNumberAttribute('tcp_total_drop');
  }
  public set tcpTotalDrop(value: number) {
    this._tcpTotalDrop = value;
  }
  public resetTcpTotalDrop() {
    this._tcpTotalDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpTotalDropInput() {
    return this._tcpTotalDrop;
  }

  // udp_any_exceed - computed: false, optional: true, required: false
  private _udpAnyExceed?: number; 
  public get udpAnyExceed() {
    return this.getNumberAttribute('udp_any_exceed');
  }
  public set udpAnyExceed(value: number) {
    this._udpAnyExceed = value;
  }
  public resetUdpAnyExceed() {
    this._udpAnyExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpAnyExceedInput() {
    return this._udpAnyExceed;
  }

  // udp_drop_bl - computed: false, optional: true, required: false
  private _udpDropBl?: number; 
  public get udpDropBl() {
    return this.getNumberAttribute('udp_drop_bl');
  }
  public set udpDropBl(value: number) {
    this._udpDropBl = value;
  }
  public resetUdpDropBl() {
    this._udpDropBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpDropBlInput() {
    return this._udpDropBl;
  }

  // udp_dst_drop - computed: false, optional: true, required: false
  private _udpDstDrop?: number; 
  public get udpDstDrop() {
    return this.getNumberAttribute('udp_dst_drop');
  }
  public set udpDstDrop(value: number) {
    this._udpDstDrop = value;
  }
  public resetUdpDstDrop() {
    this._udpDstDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpDstDropInput() {
    return this._udpDstDrop;
  }

  // udp_sess_create - computed: false, optional: true, required: false
  private _udpSessCreate?: number; 
  public get udpSessCreate() {
    return this.getNumberAttribute('udp_sess_create');
  }
  public set udpSessCreate(value: number) {
    this._udpSessCreate = value;
  }
  public resetUdpSessCreate() {
    this._udpSessCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpSessCreateInput() {
    return this._udpSessCreate;
  }

  // udp_src_drop - computed: false, optional: true, required: false
  private _udpSrcDrop?: number; 
  public get udpSrcDrop() {
    return this.getNumberAttribute('udp_src_drop');
  }
  public set udpSrcDrop(value: number) {
    this._udpSrcDrop = value;
  }
  public resetUdpSrcDrop() {
    this._udpSrcDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpSrcDropInput() {
    return this._udpSrcDrop;
  }

  // udp_src_dst_drop - computed: false, optional: true, required: false
  private _udpSrcDstDrop?: number; 
  public get udpSrcDstDrop() {
    return this.getNumberAttribute('udp_src_dst_drop');
  }
  public set udpSrcDstDrop(value: number) {
    this._udpSrcDstDrop = value;
  }
  public resetUdpSrcDstDrop() {
    this._udpSrcDstDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpSrcDstDropInput() {
    return this._udpSrcDstDrop;
  }

  // udp_total_bytes_drop - computed: false, optional: true, required: false
  private _udpTotalBytesDrop?: number; 
  public get udpTotalBytesDrop() {
    return this.getNumberAttribute('udp_total_bytes_drop');
  }
  public set udpTotalBytesDrop(value: number) {
    this._udpTotalBytesDrop = value;
  }
  public resetUdpTotalBytesDrop() {
    this._udpTotalBytesDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpTotalBytesDropInput() {
    return this._udpTotalBytesDrop;
  }

  // udp_total_bytes_rcv - computed: false, optional: true, required: false
  private _udpTotalBytesRcv?: number; 
  public get udpTotalBytesRcv() {
    return this.getNumberAttribute('udp_total_bytes_rcv');
  }
  public set udpTotalBytesRcv(value: number) {
    this._udpTotalBytesRcv = value;
  }
  public resetUdpTotalBytesRcv() {
    this._udpTotalBytesRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpTotalBytesRcvInput() {
    return this._udpTotalBytesRcv;
  }

  // udp_total_drop - computed: false, optional: true, required: false
  private _udpTotalDrop?: number; 
  public get udpTotalDrop() {
    return this.getNumberAttribute('udp_total_drop');
  }
  public set udpTotalDrop(value: number) {
    this._udpTotalDrop = value;
  }
  public resetUdpTotalDrop() {
    this._udpTotalDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpTotalDropInput() {
    return this._udpTotalDrop;
  }

  // v4_sess_create - computed: false, optional: true, required: false
  private _v4SessCreate?: number; 
  public get v4SessCreate() {
    return this.getNumberAttribute('v4_sess_create');
  }
  public set v4SessCreate(value: number) {
    this._v4SessCreate = value;
  }
  public resetV4SessCreate() {
    this._v4SessCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4SessCreateInput() {
    return this._v4SessCreate;
  }

  // v6_sess_create - computed: false, optional: true, required: false
  private _v6SessCreate?: number; 
  public get v6SessCreate() {
    return this.getNumberAttribute('v6_sess_create');
  }
  public set v6SessCreate(value: number) {
    this._v6SessCreate = value;
  }
  public resetV6SessCreate() {
    this._v6SessCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6SessCreateInput() {
    return this._v6SessCreate;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats thunder_ddos_brief_stats}
*/
export class DataThunderDdosBriefStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_brief_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosBriefStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosBriefStats to import
  * @param importFromId The id of the existing DataThunderDdosBriefStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosBriefStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_brief_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_brief_stats thunder_ddos_brief_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosBriefStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosBriefStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_brief_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
  private _stats = new DataThunderDdosBriefStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosBriefStatsStats) {
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
      stats: dataThunderDdosBriefStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderDdosBriefStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosBriefStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
