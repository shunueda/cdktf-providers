// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosLongStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#id DataThunderDdosLongStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#stats DataThunderDdosLongStats#stats}
  */
  readonly stats?: DataThunderDdosLongStatsStats;
}
export interface DataThunderDdosLongStatsStats {
  /**
  * DNS Auth UDP Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#dns_auth_udp_pass DataThunderDdosLongStats#dns_auth_udp_pass}
  */
  readonly dnsAuthUdpPass?: number;
  /**
  * DNS Malform Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#dns_malform_drop DataThunderDdosLongStats#dns_malform_drop}
  */
  readonly dnsMalformDrop?: number;
  /**
  * DNS Query Any Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#dns_qry_any_drop DataThunderDdosLongStats#dns_qry_any_drop}
  */
  readonly dnsQryAnyDrop?: number;
  /**
  * DNS Auth Force-TCP Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#dns_tcp_auth_pass DataThunderDdosLongStats#dns_tcp_auth_pass}
  */
  readonly dnsTcpAuthPass?: number;
  /**
  * Dst Entry Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#dst_entry_aged DataThunderDdosLongStats#dst_entry_aged}
  */
  readonly dstEntryAged?: number;
  /**
  * Dst Entry Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#dst_entry_hit DataThunderDdosLongStats#dst_entry_hit}
  */
  readonly dstEntryHit?: number;
  /**
  * Dst Entry Learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#dst_entry_learn DataThunderDdosLongStats#dst_entry_learn}
  */
  readonly dstEntryLearn?: number;
  /**
  * Dst IP-Proto Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#dst_ipproto_pkt_rate_exceed DataThunderDdosLongStats#dst_ipproto_pkt_rate_exceed}
  */
  readonly dstIpprotoPktRateExceed?: number;
  /**
  * Dst Port Conn Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#dst_port_conn_limit_exceed DataThunderDdosLongStats#dst_port_conn_limit_exceed}
  */
  readonly dstPortConnLimitExceed?: number;
  /**
  * Dst Port Conn Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#dst_port_conn_rate_exceed DataThunderDdosLongStats#dst_port_conn_rate_exceed}
  */
  readonly dstPortConnRateExceed?: number;
  /**
  * Dst Port KiBit Rate Exceeded (KiBit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#dst_port_kbit_rate_exceed DataThunderDdosLongStats#dst_port_kbit_rate_exceed}
  */
  readonly dstPortKbitRateExceed?: number;
  /**
  * Dst Port Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#dst_port_pkt_rate_exceed DataThunderDdosLongStats#dst_port_pkt_rate_exceed}
  */
  readonly dstPortPktRateExceed?: number;
  /**
  * Dst SrcPort Conn Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#dst_sport_conn_limit_exceed DataThunderDdosLongStats#dst_sport_conn_limit_exceed}
  */
  readonly dstSportConnLimitExceed?: number;
  /**
  * Dst SrcPort Conn Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#dst_sport_conn_rate_exceed DataThunderDdosLongStats#dst_sport_conn_rate_exceed}
  */
  readonly dstSportConnRateExceed?: number;
  /**
  * Dst SrcPort KiBit Rate Exceeded (KiBit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#dst_sport_kbit_rate_exceed DataThunderDdosLongStats#dst_sport_kbit_rate_exceed}
  */
  readonly dstSportKbitRateExceed?: number;
  /**
  * Dst SrcPort Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#dst_sport_pkt_rate_exceed DataThunderDdosLongStats#dst_sport_pkt_rate_exceed}
  */
  readonly dstSportPktRateExceed?: number;
  /**
  * Entry Create Fail Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#entry_create_fail_drop DataThunderDdosLongStats#entry_create_fail_drop}
  */
  readonly entryCreateFailDrop?: number;
  /**
  * GRE Tunnel Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#gre_tunnel_rcvd DataThunderDdosLongStats#gre_tunnel_rcvd}
  */
  readonly greTunnelRcvd?: number;
  /**
  * GRE V6 Tunnel Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#gre_v6_tunnel_rcvd DataThunderDdosLongStats#gre_v6_tunnel_rcvd}
  */
  readonly greV6TunnelRcvd?: number;
  /**
  * GRE Tunnel Decap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ip_gre_tunnel_decap DataThunderDdosLongStats#ip_gre_tunnel_decap}
  */
  readonly ipGreTunnelDecap?: number;
  /**
  * GRE Tunnel Decap Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ip_gre_tunnel_decap_fail DataThunderDdosLongStats#ip_gre_tunnel_decap_fail}
  */
  readonly ipGreTunnelDecapFail?: number;
  /**
  * GRE Tunnel Decap W/ Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ip_gre_tunnel_decap_key DataThunderDdosLongStats#ip_gre_tunnel_decap_key}
  */
  readonly ipGreTunnelDecapKey?: number;
  /**
  * GRE Tunnel Decap Key Mismatch Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ip_gre_tunnel_decap_key_drop DataThunderDdosLongStats#ip_gre_tunnel_decap_key_drop}
  */
  readonly ipGreTunnelDecapKeyDrop?: number;
  /**
  * GRE Tunnel Encap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ip_gre_tunnel_encap DataThunderDdosLongStats#ip_gre_tunnel_encap}
  */
  readonly ipGreTunnelEncap?: number;
  /**
  * GRE Tunnel Encap Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ip_gre_tunnel_encap_fail DataThunderDdosLongStats#ip_gre_tunnel_encap_fail}
  */
  readonly ipGreTunnelEncapFail?: number;
  /**
  * GRE Tunnel Encap W/ Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ip_gre_tunnel_encap_key DataThunderDdosLongStats#ip_gre_tunnel_encap_key}
  */
  readonly ipGreTunnelEncapKey?: number;
  /**
  * GRE Tunnel Rate Limit Inner Pkts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ip_gre_tunnel_rate_limit_inner DataThunderDdosLongStats#ip_gre_tunnel_rate_limit_inner}
  */
  readonly ipGreTunnelRateLimitInner?: number;
  /**
  * IPv4 Tunnel Decap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ip_tunnel_decap DataThunderDdosLongStats#ip_tunnel_decap}
  */
  readonly ipTunnelDecap?: number;
  /**
  * IPv4 Tunnel Decap Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ip_tunnel_decap_fail DataThunderDdosLongStats#ip_tunnel_decap_fail}
  */
  readonly ipTunnelDecapFail?: number;
  /**
  * IPv4 Tunnel Encap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ip_tunnel_encap DataThunderDdosLongStats#ip_tunnel_encap}
  */
  readonly ipTunnelEncap?: number;
  /**
  * IPv4 Tunnel Encap Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ip_tunnel_encap_fail DataThunderDdosLongStats#ip_tunnel_encap_fail}
  */
  readonly ipTunnelEncapFail?: number;
  /**
  * IPv4 Tunnel Rate Limit Inner Pkts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ip_tunnel_rate_limit_inner DataThunderDdosLongStats#ip_tunnel_rate_limit_inner}
  */
  readonly ipTunnelRateLimitInner?: number;
  /**
  * IPv4 Tunnel Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ip_tunnel_rcvd DataThunderDdosLongStats#ip_tunnel_rcvd}
  */
  readonly ipTunnelRcvd?: number;
  /**
  * IP VxLAN Tunnel Decap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ip_vxlan_tunnel_decap DataThunderDdosLongStats#ip_vxlan_tunnel_decap}
  */
  readonly ipVxlanTunnelDecap?: number;
  /**
  * IP VxLAN Tunnel Decap Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ip_vxlan_tunnel_decap_err DataThunderDdosLongStats#ip_vxlan_tunnel_decap_err}
  */
  readonly ipVxlanTunnelDecapErr?: number;
  /**
  * IP VxLAN Tunnel Invalid VNI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ip_vxlan_tunnel_invalid_vni DataThunderDdosLongStats#ip_vxlan_tunnel_invalid_vni}
  */
  readonly ipVxlanTunnelInvalidVni?: number;
  /**
  * IP VxLAN Tunnel Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ip_vxlan_tunnel_rcvd DataThunderDdosLongStats#ip_vxlan_tunnel_rcvd}
  */
  readonly ipVxlanTunnelRcvd?: number;
  /**
  * GRE V6 Tunnel Decap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ipv6_gre_tunnel_decap DataThunderDdosLongStats#ipv6_gre_tunnel_decap}
  */
  readonly ipv6GreTunnelDecap?: number;
  /**
  * GRE V6 Tunnel Decap Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ipv6_gre_tunnel_decap_fail DataThunderDdosLongStats#ipv6_gre_tunnel_decap_fail}
  */
  readonly ipv6GreTunnelDecapFail?: number;
  /**
  * GRE V6 Tunnel Decap W/ Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ipv6_gre_tunnel_decap_key DataThunderDdosLongStats#ipv6_gre_tunnel_decap_key}
  */
  readonly ipv6GreTunnelDecapKey?: number;
  /**
  * GRE V6 Tunnel Decap Key Mismatch Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ipv6_gre_tunnel_decap_key_drop DataThunderDdosLongStats#ipv6_gre_tunnel_decap_key_drop}
  */
  readonly ipv6GreTunnelDecapKeyDrop?: number;
  /**
  * GRE V6 Tunnel Encap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ipv6_gre_tunnel_encap DataThunderDdosLongStats#ipv6_gre_tunnel_encap}
  */
  readonly ipv6GreTunnelEncap?: number;
  /**
  * GRE V6 Tunnel Encap Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ipv6_gre_tunnel_encap_fail DataThunderDdosLongStats#ipv6_gre_tunnel_encap_fail}
  */
  readonly ipv6GreTunnelEncapFail?: number;
  /**
  * GRE V6 Tunnel Encap W/ Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ipv6_gre_tunnel_encap_key DataThunderDdosLongStats#ipv6_gre_tunnel_encap_key}
  */
  readonly ipv6GreTunnelEncapKey?: number;
  /**
  * GRE V6 Tunnel Rate Limit Inner Pkts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ipv6_gre_tunnel_rate_limit_inner DataThunderDdosLongStats#ipv6_gre_tunnel_rate_limit_inner}
  */
  readonly ipv6GreTunnelRateLimitInner?: number;
  /**
  * IPv6 Tunnel Decap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ipv6_tunnel_decap DataThunderDdosLongStats#ipv6_tunnel_decap}
  */
  readonly ipv6TunnelDecap?: number;
  /**
  * IPv6 Tunnel Decap Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ipv6_tunnel_decap_fail DataThunderDdosLongStats#ipv6_tunnel_decap_fail}
  */
  readonly ipv6TunnelDecapFail?: number;
  /**
  * IPv6 Tunnel Encap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ipv6_tunnel_encap DataThunderDdosLongStats#ipv6_tunnel_encap}
  */
  readonly ipv6TunnelEncap?: number;
  /**
  * IPv6 Tunnel Encap Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ipv6_tunnel_encap_fail DataThunderDdosLongStats#ipv6_tunnel_encap_fail}
  */
  readonly ipv6TunnelEncapFail?: number;
  /**
  * IPv6 Tunnel Rate Limit Inner Pkts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ipv6_tunnel_rate_limit_inner DataThunderDdosLongStats#ipv6_tunnel_rate_limit_inner}
  */
  readonly ipv6TunnelRateLimitInner?: number;
  /**
  * IPv6 Tunnel Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#ipv6_tunnel_rcvd DataThunderDdosLongStats#ipv6_tunnel_rcvd}
  */
  readonly ipv6TunnelRcvd?: number;
  /**
  * Jumbo Frag Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#jumbo_frag_drop DataThunderDdosLongStats#jumbo_frag_drop}
  */
  readonly jumboFragDrop?: number;
  /**
  * Jumbo Fragment Non Data Plane Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#jumbo_frag_drop_before_slb DataThunderDdosLongStats#jumbo_frag_drop_before_slb}
  */
  readonly jumboFragDropBeforeSlb?: number;
  /**
  * Jumbo Fragment Filter Miss Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#jumbo_frag_drop_by_filter DataThunderDdosLongStats#jumbo_frag_drop_by_filter}
  */
  readonly jumboFragDropByFilter?: number;
  /**
  * Jumbo Packet in Tunnel Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#jumbo_in_tunnel_drop DataThunderDdosLongStats#jumbo_in_tunnel_drop}
  */
  readonly jumboInTunnelDrop?: number;
  /**
  * Jumbo Outgoing MTU Exceed Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#jumbo_outgoing_mtu_exceed_drop DataThunderDdosLongStats#jumbo_outgoing_mtu_exceed_drop}
  */
  readonly jumboOutgoingMtuExceedDrop?: number;
  /**
  * Src Entry Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#src_entry_aged DataThunderDdosLongStats#src_entry_aged}
  */
  readonly srcEntryAged?: number;
  /**
  * Src Entry Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#src_entry_hit DataThunderDdosLongStats#src_entry_hit}
  */
  readonly srcEntryHit?: number;
  /**
  * Src Entry Learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#src_entry_learn DataThunderDdosLongStats#src_entry_learn}
  */
  readonly srcEntryLearn?: number;
  /**
  * TCP SYN Auth Skipped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#syn_auth_skip DataThunderDdosLongStats#syn_auth_skip}
  */
  readonly synAuthSkip?: number;
  /**
  * Sync Dst Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#sync_dst_wl_rcv DataThunderDdosLongStats#sync_dst_wl_rcv}
  */
  readonly syncDstWlRcv?: number;
  /**
  * Sync Dst Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#sync_dst_wl_sent DataThunderDdosLongStats#sync_dst_wl_sent}
  */
  readonly syncDstWlSent?: number;
  /**
  * Sync SrcDst Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#sync_src_dst_wl_rcv DataThunderDdosLongStats#sync_src_dst_wl_rcv}
  */
  readonly syncSrcDstWlRcv?: number;
  /**
  * Sync SrcDst Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#sync_src_dst_wl_sent DataThunderDdosLongStats#sync_src_dst_wl_sent}
  */
  readonly syncSrcDstWlSent?: number;
  /**
  * Sync Src Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#sync_src_wl_rcv DataThunderDdosLongStats#sync_src_wl_rcv}
  */
  readonly syncSrcWlRcv?: number;
  /**
  * Sync Src Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#sync_src_wl_sent DataThunderDdosLongStats#sync_src_wl_sent}
  */
  readonly syncSrcWlSent?: number;
  /**
  * TCP ACK No SYN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#tcp_ack_no_syn DataThunderDdosLongStats#tcp_ack_no_syn}
  */
  readonly tcpAckNoSyn?: number;
  /**
  * TCP ACK Retry Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#tcp_action_on_ack_failed DataThunderDdosLongStats#tcp_action_on_ack_failed}
  */
  readonly tcpActionOnAckFailed?: number;
  /**
  * TCP ACK Retry Matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#tcp_action_on_ack_matched DataThunderDdosLongStats#tcp_action_on_ack_matched}
  */
  readonly tcpActionOnAckMatched?: number;
  /**
  * TCP ACK Retry Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#tcp_action_on_ack_passed DataThunderDdosLongStats#tcp_action_on_ack_passed}
  */
  readonly tcpActionOnAckPassed?: number;
  /**
  * TCP ACK Retry Timeout Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#tcp_action_on_ack_reset DataThunderDdosLongStats#tcp_action_on_ack_reset}
  */
  readonly tcpActionOnAckReset?: number;
  /**
  * TCP ACK Retry Init
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#tcp_action_on_ack_start DataThunderDdosLongStats#tcp_action_on_ack_start}
  */
  readonly tcpActionOnAckStart?: number;
  /**
  * TCP ACK Retry Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#tcp_action_on_ack_timeout DataThunderDdosLongStats#tcp_action_on_ack_timeout}
  */
  readonly tcpActionOnAckTimeout?: number;
  /**
  * TCP Conn Pkt Rate Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#tcp_exceed_drop_conn_prate DataThunderDdosLongStats#tcp_exceed_drop_conn_prate}
  */
  readonly tcpExceedDropConnPrate?: number;
  /**
  * TCP Out-Of-Seq Total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#tcp_out_of_order DataThunderDdosLongStats#tcp_out_of_order}
  */
  readonly tcpOutOfOrder?: number;
  /**
  * TCP Out-Of-Seq Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#tcp_out_of_seq_bl DataThunderDdosLongStats#tcp_out_of_seq_bl}
  */
  readonly tcpOutOfSeqBl?: number;
  /**
  * TCP Outbound RST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#tcp_outrst DataThunderDdosLongStats#tcp_outrst}
  */
  readonly tcpOutrst?: number;
  /**
  * Progression: Violation Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#tcp_progression_violation_exceed DataThunderDdosLongStats#tcp_progression_violation_exceed}
  */
  readonly tcpProgressionViolationExceed?: number;
  /**
  * Progression: Violation Exceeded Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#tcp_progression_violation_exceed_bl DataThunderDdosLongStats#tcp_progression_violation_exceed_bl}
  */
  readonly tcpProgressionViolationExceedBl?: number;
  /**
  * Progression: Violation Exceeded Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#tcp_progression_violation_exceed_drop DataThunderDdosLongStats#tcp_progression_violation_exceed_drop}
  */
  readonly tcpProgressionViolationExceedDrop?: number;
  /**
  * Progression: Violation Exceeded Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#tcp_progression_violation_exceed_reset DataThunderDdosLongStats#tcp_progression_violation_exceed_reset}
  */
  readonly tcpProgressionViolationExceedReset?: number;
  /**
  * TCP Reset Client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#tcp_reset_client DataThunderDdosLongStats#tcp_reset_client}
  */
  readonly tcpResetClient?: number;
  /**
  * TCP Reset Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#tcp_reset_server DataThunderDdosLongStats#tcp_reset_server}
  */
  readonly tcpResetServer?: number;
  /**
  * TCP Retransmit Total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#tcp_retransmit DataThunderDdosLongStats#tcp_retransmit}
  */
  readonly tcpRetransmit?: number;
  /**
  * TCP Retransmit Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#tcp_retransmit_bl DataThunderDdosLongStats#tcp_retransmit_bl}
  */
  readonly tcpRetransmitBl?: number;
  /**
  * TCP Retransmit SYN Exceed Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#tcp_rexmit_syn_limit_bl DataThunderDdosLongStats#tcp_rexmit_syn_limit_bl}
  */
  readonly tcpRexmitSynLimitBl?: number;
  /**
  * TCP Retransmit SYN Exceed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#tcp_rexmit_syn_limit_drop DataThunderDdosLongStats#tcp_rexmit_syn_limit_drop}
  */
  readonly tcpRexmitSynLimitDrop?: number;
  /**
  * TCP SYN Rate Per Sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#tcp_syn_rate DataThunderDdosLongStats#tcp_syn_rate}
  */
  readonly tcpSynRate?: number;
  /**
  * TCP SYN Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#tcp_syn_received DataThunderDdosLongStats#tcp_syn_received}
  */
  readonly tcpSynReceived?: number;
  /**
  * TCP SYN Cookie Check Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#tcp_syncookie_check_fail DataThunderDdosLongStats#tcp_syncookie_check_fail}
  */
  readonly tcpSyncookieCheckFail?: number;
  /**
  * TCP SYN Cookie Blacklist Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#tcp_syncookie_fail_bl DataThunderDdosLongStats#tcp_syncookie_fail_bl}
  */
  readonly tcpSyncookieFailBl?: number;
  /**
  * TCP SYN Cookie Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#tcp_syncookie_pass DataThunderDdosLongStats#tcp_syncookie_pass}
  */
  readonly tcpSyncookiePass?: number;
  /**
  * TCP SYN Cookie Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#tcp_syncookie_sent DataThunderDdosLongStats#tcp_syncookie_sent}
  */
  readonly tcpSyncookieSent?: number;
  /**
  * TCP SYN Cookie Send Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#tcp_syncookie_sent_fail DataThunderDdosLongStats#tcp_syncookie_sent_fail}
  */
  readonly tcpSyncookieSentFail?: number;
  /**
  * TCP Zero-Window Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#tcp_zero_wind_bl DataThunderDdosLongStats#tcp_zero_wind_bl}
  */
  readonly tcpZeroWindBl?: number;
  /**
  * TCP Zero-Window Total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#tcp_zero_window DataThunderDdosLongStats#tcp_zero_window}
  */
  readonly tcpZeroWindow?: number;
  /**
  * UDP Wellknown Port Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#udp_dst_wellknown_port_drop DataThunderDdosLongStats#udp_dst_wellknown_port_drop}
  */
  readonly udpDstWellknownPortDrop?: number;
  /**
  * UDP Conn Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#udp_exceed_drop_conn_prate DataThunderDdosLongStats#udp_exceed_drop_conn_prate}
  */
  readonly udpExceedDropConnPrate?: number;
  /**
  * NTP Monlist Request Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#udp_ntp_monlist_req_drop DataThunderDdosLongStats#udp_ntp_monlist_req_drop}
  */
  readonly udpNtpMonlistReqDrop?: number;
  /**
  * NTP Monlist Response Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#udp_ntp_monlist_resp_drop DataThunderDdosLongStats#udp_ntp_monlist_resp_drop}
  */
  readonly udpNtpMonlistRespDrop?: number;
  /**
  * UDP Payload Too Large Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#udp_payload_too_big_drop DataThunderDdosLongStats#udp_payload_too_big_drop}
  */
  readonly udpPayloadTooBigDrop?: number;
  /**
  * UDP Payload Too Small Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#udp_payload_too_small_drop DataThunderDdosLongStats#udp_payload_too_small_drop}
  */
  readonly udpPayloadTooSmallDrop?: number;
  /**
  * UDP Retry Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#udp_retry_pass DataThunderDdosLongStats#udp_retry_pass}
  */
  readonly udpRetryPass?: number;
}

export function dataThunderDdosLongStatsStatsToTerraform(struct?: DataThunderDdosLongStatsStatsOutputReference | DataThunderDdosLongStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_auth_udp_pass: cdktf.numberToTerraform(struct!.dnsAuthUdpPass),
    dns_malform_drop: cdktf.numberToTerraform(struct!.dnsMalformDrop),
    dns_qry_any_drop: cdktf.numberToTerraform(struct!.dnsQryAnyDrop),
    dns_tcp_auth_pass: cdktf.numberToTerraform(struct!.dnsTcpAuthPass),
    dst_entry_aged: cdktf.numberToTerraform(struct!.dstEntryAged),
    dst_entry_hit: cdktf.numberToTerraform(struct!.dstEntryHit),
    dst_entry_learn: cdktf.numberToTerraform(struct!.dstEntryLearn),
    dst_ipproto_pkt_rate_exceed: cdktf.numberToTerraform(struct!.dstIpprotoPktRateExceed),
    dst_port_conn_limit_exceed: cdktf.numberToTerraform(struct!.dstPortConnLimitExceed),
    dst_port_conn_rate_exceed: cdktf.numberToTerraform(struct!.dstPortConnRateExceed),
    dst_port_kbit_rate_exceed: cdktf.numberToTerraform(struct!.dstPortKbitRateExceed),
    dst_port_pkt_rate_exceed: cdktf.numberToTerraform(struct!.dstPortPktRateExceed),
    dst_sport_conn_limit_exceed: cdktf.numberToTerraform(struct!.dstSportConnLimitExceed),
    dst_sport_conn_rate_exceed: cdktf.numberToTerraform(struct!.dstSportConnRateExceed),
    dst_sport_kbit_rate_exceed: cdktf.numberToTerraform(struct!.dstSportKbitRateExceed),
    dst_sport_pkt_rate_exceed: cdktf.numberToTerraform(struct!.dstSportPktRateExceed),
    entry_create_fail_drop: cdktf.numberToTerraform(struct!.entryCreateFailDrop),
    gre_tunnel_rcvd: cdktf.numberToTerraform(struct!.greTunnelRcvd),
    gre_v6_tunnel_rcvd: cdktf.numberToTerraform(struct!.greV6TunnelRcvd),
    ip_gre_tunnel_decap: cdktf.numberToTerraform(struct!.ipGreTunnelDecap),
    ip_gre_tunnel_decap_fail: cdktf.numberToTerraform(struct!.ipGreTunnelDecapFail),
    ip_gre_tunnel_decap_key: cdktf.numberToTerraform(struct!.ipGreTunnelDecapKey),
    ip_gre_tunnel_decap_key_drop: cdktf.numberToTerraform(struct!.ipGreTunnelDecapKeyDrop),
    ip_gre_tunnel_encap: cdktf.numberToTerraform(struct!.ipGreTunnelEncap),
    ip_gre_tunnel_encap_fail: cdktf.numberToTerraform(struct!.ipGreTunnelEncapFail),
    ip_gre_tunnel_encap_key: cdktf.numberToTerraform(struct!.ipGreTunnelEncapKey),
    ip_gre_tunnel_rate_limit_inner: cdktf.numberToTerraform(struct!.ipGreTunnelRateLimitInner),
    ip_tunnel_decap: cdktf.numberToTerraform(struct!.ipTunnelDecap),
    ip_tunnel_decap_fail: cdktf.numberToTerraform(struct!.ipTunnelDecapFail),
    ip_tunnel_encap: cdktf.numberToTerraform(struct!.ipTunnelEncap),
    ip_tunnel_encap_fail: cdktf.numberToTerraform(struct!.ipTunnelEncapFail),
    ip_tunnel_rate_limit_inner: cdktf.numberToTerraform(struct!.ipTunnelRateLimitInner),
    ip_tunnel_rcvd: cdktf.numberToTerraform(struct!.ipTunnelRcvd),
    ip_vxlan_tunnel_decap: cdktf.numberToTerraform(struct!.ipVxlanTunnelDecap),
    ip_vxlan_tunnel_decap_err: cdktf.numberToTerraform(struct!.ipVxlanTunnelDecapErr),
    ip_vxlan_tunnel_invalid_vni: cdktf.numberToTerraform(struct!.ipVxlanTunnelInvalidVni),
    ip_vxlan_tunnel_rcvd: cdktf.numberToTerraform(struct!.ipVxlanTunnelRcvd),
    ipv6_gre_tunnel_decap: cdktf.numberToTerraform(struct!.ipv6GreTunnelDecap),
    ipv6_gre_tunnel_decap_fail: cdktf.numberToTerraform(struct!.ipv6GreTunnelDecapFail),
    ipv6_gre_tunnel_decap_key: cdktf.numberToTerraform(struct!.ipv6GreTunnelDecapKey),
    ipv6_gre_tunnel_decap_key_drop: cdktf.numberToTerraform(struct!.ipv6GreTunnelDecapKeyDrop),
    ipv6_gre_tunnel_encap: cdktf.numberToTerraform(struct!.ipv6GreTunnelEncap),
    ipv6_gre_tunnel_encap_fail: cdktf.numberToTerraform(struct!.ipv6GreTunnelEncapFail),
    ipv6_gre_tunnel_encap_key: cdktf.numberToTerraform(struct!.ipv6GreTunnelEncapKey),
    ipv6_gre_tunnel_rate_limit_inner: cdktf.numberToTerraform(struct!.ipv6GreTunnelRateLimitInner),
    ipv6_tunnel_decap: cdktf.numberToTerraform(struct!.ipv6TunnelDecap),
    ipv6_tunnel_decap_fail: cdktf.numberToTerraform(struct!.ipv6TunnelDecapFail),
    ipv6_tunnel_encap: cdktf.numberToTerraform(struct!.ipv6TunnelEncap),
    ipv6_tunnel_encap_fail: cdktf.numberToTerraform(struct!.ipv6TunnelEncapFail),
    ipv6_tunnel_rate_limit_inner: cdktf.numberToTerraform(struct!.ipv6TunnelRateLimitInner),
    ipv6_tunnel_rcvd: cdktf.numberToTerraform(struct!.ipv6TunnelRcvd),
    jumbo_frag_drop: cdktf.numberToTerraform(struct!.jumboFragDrop),
    jumbo_frag_drop_before_slb: cdktf.numberToTerraform(struct!.jumboFragDropBeforeSlb),
    jumbo_frag_drop_by_filter: cdktf.numberToTerraform(struct!.jumboFragDropByFilter),
    jumbo_in_tunnel_drop: cdktf.numberToTerraform(struct!.jumboInTunnelDrop),
    jumbo_outgoing_mtu_exceed_drop: cdktf.numberToTerraform(struct!.jumboOutgoingMtuExceedDrop),
    src_entry_aged: cdktf.numberToTerraform(struct!.srcEntryAged),
    src_entry_hit: cdktf.numberToTerraform(struct!.srcEntryHit),
    src_entry_learn: cdktf.numberToTerraform(struct!.srcEntryLearn),
    syn_auth_skip: cdktf.numberToTerraform(struct!.synAuthSkip),
    sync_dst_wl_rcv: cdktf.numberToTerraform(struct!.syncDstWlRcv),
    sync_dst_wl_sent: cdktf.numberToTerraform(struct!.syncDstWlSent),
    sync_src_dst_wl_rcv: cdktf.numberToTerraform(struct!.syncSrcDstWlRcv),
    sync_src_dst_wl_sent: cdktf.numberToTerraform(struct!.syncSrcDstWlSent),
    sync_src_wl_rcv: cdktf.numberToTerraform(struct!.syncSrcWlRcv),
    sync_src_wl_sent: cdktf.numberToTerraform(struct!.syncSrcWlSent),
    tcp_ack_no_syn: cdktf.numberToTerraform(struct!.tcpAckNoSyn),
    tcp_action_on_ack_failed: cdktf.numberToTerraform(struct!.tcpActionOnAckFailed),
    tcp_action_on_ack_matched: cdktf.numberToTerraform(struct!.tcpActionOnAckMatched),
    tcp_action_on_ack_passed: cdktf.numberToTerraform(struct!.tcpActionOnAckPassed),
    tcp_action_on_ack_reset: cdktf.numberToTerraform(struct!.tcpActionOnAckReset),
    tcp_action_on_ack_start: cdktf.numberToTerraform(struct!.tcpActionOnAckStart),
    tcp_action_on_ack_timeout: cdktf.numberToTerraform(struct!.tcpActionOnAckTimeout),
    tcp_exceed_drop_conn_prate: cdktf.numberToTerraform(struct!.tcpExceedDropConnPrate),
    tcp_out_of_order: cdktf.numberToTerraform(struct!.tcpOutOfOrder),
    tcp_out_of_seq_bl: cdktf.numberToTerraform(struct!.tcpOutOfSeqBl),
    tcp_outrst: cdktf.numberToTerraform(struct!.tcpOutrst),
    tcp_progression_violation_exceed: cdktf.numberToTerraform(struct!.tcpProgressionViolationExceed),
    tcp_progression_violation_exceed_bl: cdktf.numberToTerraform(struct!.tcpProgressionViolationExceedBl),
    tcp_progression_violation_exceed_drop: cdktf.numberToTerraform(struct!.tcpProgressionViolationExceedDrop),
    tcp_progression_violation_exceed_reset: cdktf.numberToTerraform(struct!.tcpProgressionViolationExceedReset),
    tcp_reset_client: cdktf.numberToTerraform(struct!.tcpResetClient),
    tcp_reset_server: cdktf.numberToTerraform(struct!.tcpResetServer),
    tcp_retransmit: cdktf.numberToTerraform(struct!.tcpRetransmit),
    tcp_retransmit_bl: cdktf.numberToTerraform(struct!.tcpRetransmitBl),
    tcp_rexmit_syn_limit_bl: cdktf.numberToTerraform(struct!.tcpRexmitSynLimitBl),
    tcp_rexmit_syn_limit_drop: cdktf.numberToTerraform(struct!.tcpRexmitSynLimitDrop),
    tcp_syn_rate: cdktf.numberToTerraform(struct!.tcpSynRate),
    tcp_syn_received: cdktf.numberToTerraform(struct!.tcpSynReceived),
    tcp_syncookie_check_fail: cdktf.numberToTerraform(struct!.tcpSyncookieCheckFail),
    tcp_syncookie_fail_bl: cdktf.numberToTerraform(struct!.tcpSyncookieFailBl),
    tcp_syncookie_pass: cdktf.numberToTerraform(struct!.tcpSyncookiePass),
    tcp_syncookie_sent: cdktf.numberToTerraform(struct!.tcpSyncookieSent),
    tcp_syncookie_sent_fail: cdktf.numberToTerraform(struct!.tcpSyncookieSentFail),
    tcp_zero_wind_bl: cdktf.numberToTerraform(struct!.tcpZeroWindBl),
    tcp_zero_window: cdktf.numberToTerraform(struct!.tcpZeroWindow),
    udp_dst_wellknown_port_drop: cdktf.numberToTerraform(struct!.udpDstWellknownPortDrop),
    udp_exceed_drop_conn_prate: cdktf.numberToTerraform(struct!.udpExceedDropConnPrate),
    udp_ntp_monlist_req_drop: cdktf.numberToTerraform(struct!.udpNtpMonlistReqDrop),
    udp_ntp_monlist_resp_drop: cdktf.numberToTerraform(struct!.udpNtpMonlistRespDrop),
    udp_payload_too_big_drop: cdktf.numberToTerraform(struct!.udpPayloadTooBigDrop),
    udp_payload_too_small_drop: cdktf.numberToTerraform(struct!.udpPayloadTooSmallDrop),
    udp_retry_pass: cdktf.numberToTerraform(struct!.udpRetryPass),
  }
}


export function dataThunderDdosLongStatsStatsToHclTerraform(struct?: DataThunderDdosLongStatsStatsOutputReference | DataThunderDdosLongStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_auth_udp_pass: {
      value: cdktf.numberToHclTerraform(struct!.dnsAuthUdpPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_malform_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsMalformDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_qry_any_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsQryAnyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_tcp_auth_pass: {
      value: cdktf.numberToHclTerraform(struct!.dnsTcpAuthPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_entry_aged: {
      value: cdktf.numberToHclTerraform(struct!.dstEntryAged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_entry_hit: {
      value: cdktf.numberToHclTerraform(struct!.dstEntryHit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_entry_learn: {
      value: cdktf.numberToHclTerraform(struct!.dstEntryLearn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ipproto_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstIpprotoPktRateExceed),
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
    dst_port_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstPortPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_sport_conn_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstSportConnLimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_sport_conn_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstSportConnRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_sport_kbit_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstSportKbitRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_sport_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstSportPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_create_fail_drop: {
      value: cdktf.numberToHclTerraform(struct!.entryCreateFailDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gre_tunnel_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.greTunnelRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gre_v6_tunnel_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.greV6TunnelRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_gre_tunnel_decap: {
      value: cdktf.numberToHclTerraform(struct!.ipGreTunnelDecap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_gre_tunnel_decap_fail: {
      value: cdktf.numberToHclTerraform(struct!.ipGreTunnelDecapFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_gre_tunnel_decap_key: {
      value: cdktf.numberToHclTerraform(struct!.ipGreTunnelDecapKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_gre_tunnel_decap_key_drop: {
      value: cdktf.numberToHclTerraform(struct!.ipGreTunnelDecapKeyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_gre_tunnel_encap: {
      value: cdktf.numberToHclTerraform(struct!.ipGreTunnelEncap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_gre_tunnel_encap_fail: {
      value: cdktf.numberToHclTerraform(struct!.ipGreTunnelEncapFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_gre_tunnel_encap_key: {
      value: cdktf.numberToHclTerraform(struct!.ipGreTunnelEncapKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_gre_tunnel_rate_limit_inner: {
      value: cdktf.numberToHclTerraform(struct!.ipGreTunnelRateLimitInner),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_tunnel_decap: {
      value: cdktf.numberToHclTerraform(struct!.ipTunnelDecap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_tunnel_decap_fail: {
      value: cdktf.numberToHclTerraform(struct!.ipTunnelDecapFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_tunnel_encap: {
      value: cdktf.numberToHclTerraform(struct!.ipTunnelEncap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_tunnel_encap_fail: {
      value: cdktf.numberToHclTerraform(struct!.ipTunnelEncapFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_tunnel_rate_limit_inner: {
      value: cdktf.numberToHclTerraform(struct!.ipTunnelRateLimitInner),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_tunnel_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.ipTunnelRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_vxlan_tunnel_decap: {
      value: cdktf.numberToHclTerraform(struct!.ipVxlanTunnelDecap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_vxlan_tunnel_decap_err: {
      value: cdktf.numberToHclTerraform(struct!.ipVxlanTunnelDecapErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_vxlan_tunnel_invalid_vni: {
      value: cdktf.numberToHclTerraform(struct!.ipVxlanTunnelInvalidVni),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_vxlan_tunnel_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.ipVxlanTunnelRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_gre_tunnel_decap: {
      value: cdktf.numberToHclTerraform(struct!.ipv6GreTunnelDecap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_gre_tunnel_decap_fail: {
      value: cdktf.numberToHclTerraform(struct!.ipv6GreTunnelDecapFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_gre_tunnel_decap_key: {
      value: cdktf.numberToHclTerraform(struct!.ipv6GreTunnelDecapKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_gre_tunnel_decap_key_drop: {
      value: cdktf.numberToHclTerraform(struct!.ipv6GreTunnelDecapKeyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_gre_tunnel_encap: {
      value: cdktf.numberToHclTerraform(struct!.ipv6GreTunnelEncap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_gre_tunnel_encap_fail: {
      value: cdktf.numberToHclTerraform(struct!.ipv6GreTunnelEncapFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_gre_tunnel_encap_key: {
      value: cdktf.numberToHclTerraform(struct!.ipv6GreTunnelEncapKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_gre_tunnel_rate_limit_inner: {
      value: cdktf.numberToHclTerraform(struct!.ipv6GreTunnelRateLimitInner),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_tunnel_decap: {
      value: cdktf.numberToHclTerraform(struct!.ipv6TunnelDecap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_tunnel_decap_fail: {
      value: cdktf.numberToHclTerraform(struct!.ipv6TunnelDecapFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_tunnel_encap: {
      value: cdktf.numberToHclTerraform(struct!.ipv6TunnelEncap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_tunnel_encap_fail: {
      value: cdktf.numberToHclTerraform(struct!.ipv6TunnelEncapFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_tunnel_rate_limit_inner: {
      value: cdktf.numberToHclTerraform(struct!.ipv6TunnelRateLimitInner),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_tunnel_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.ipv6TunnelRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jumbo_frag_drop: {
      value: cdktf.numberToHclTerraform(struct!.jumboFragDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jumbo_frag_drop_before_slb: {
      value: cdktf.numberToHclTerraform(struct!.jumboFragDropBeforeSlb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jumbo_frag_drop_by_filter: {
      value: cdktf.numberToHclTerraform(struct!.jumboFragDropByFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jumbo_in_tunnel_drop: {
      value: cdktf.numberToHclTerraform(struct!.jumboInTunnelDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jumbo_outgoing_mtu_exceed_drop: {
      value: cdktf.numberToHclTerraform(struct!.jumboOutgoingMtuExceedDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_entry_aged: {
      value: cdktf.numberToHclTerraform(struct!.srcEntryAged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_entry_hit: {
      value: cdktf.numberToHclTerraform(struct!.srcEntryHit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_entry_learn: {
      value: cdktf.numberToHclTerraform(struct!.srcEntryLearn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_auth_skip: {
      value: cdktf.numberToHclTerraform(struct!.synAuthSkip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_dst_wl_rcv: {
      value: cdktf.numberToHclTerraform(struct!.syncDstWlRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_dst_wl_sent: {
      value: cdktf.numberToHclTerraform(struct!.syncDstWlSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_dst_wl_rcv: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcDstWlRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_dst_wl_sent: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcDstWlSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_wl_rcv: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcWlRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_wl_sent: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcWlSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_ack_no_syn: {
      value: cdktf.numberToHclTerraform(struct!.tcpAckNoSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_action_on_ack_failed: {
      value: cdktf.numberToHclTerraform(struct!.tcpActionOnAckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_action_on_ack_matched: {
      value: cdktf.numberToHclTerraform(struct!.tcpActionOnAckMatched),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_action_on_ack_passed: {
      value: cdktf.numberToHclTerraform(struct!.tcpActionOnAckPassed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_action_on_ack_reset: {
      value: cdktf.numberToHclTerraform(struct!.tcpActionOnAckReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_action_on_ack_start: {
      value: cdktf.numberToHclTerraform(struct!.tcpActionOnAckStart),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_action_on_ack_timeout: {
      value: cdktf.numberToHclTerraform(struct!.tcpActionOnAckTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_exceed_drop_conn_prate: {
      value: cdktf.numberToHclTerraform(struct!.tcpExceedDropConnPrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_out_of_order: {
      value: cdktf.numberToHclTerraform(struct!.tcpOutOfOrder),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_out_of_seq_bl: {
      value: cdktf.numberToHclTerraform(struct!.tcpOutOfSeqBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_outrst: {
      value: cdktf.numberToHclTerraform(struct!.tcpOutrst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_progression_violation_exceed: {
      value: cdktf.numberToHclTerraform(struct!.tcpProgressionViolationExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_progression_violation_exceed_bl: {
      value: cdktf.numberToHclTerraform(struct!.tcpProgressionViolationExceedBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_progression_violation_exceed_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpProgressionViolationExceedDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_progression_violation_exceed_reset: {
      value: cdktf.numberToHclTerraform(struct!.tcpProgressionViolationExceedReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_reset_client: {
      value: cdktf.numberToHclTerraform(struct!.tcpResetClient),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_reset_server: {
      value: cdktf.numberToHclTerraform(struct!.tcpResetServer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_retransmit: {
      value: cdktf.numberToHclTerraform(struct!.tcpRetransmit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_retransmit_bl: {
      value: cdktf.numberToHclTerraform(struct!.tcpRetransmitBl),
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
    tcp_syn_rate: {
      value: cdktf.numberToHclTerraform(struct!.tcpSynRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syn_received: {
      value: cdktf.numberToHclTerraform(struct!.tcpSynReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syncookie_check_fail: {
      value: cdktf.numberToHclTerraform(struct!.tcpSyncookieCheckFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syncookie_fail_bl: {
      value: cdktf.numberToHclTerraform(struct!.tcpSyncookieFailBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syncookie_pass: {
      value: cdktf.numberToHclTerraform(struct!.tcpSyncookiePass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syncookie_sent: {
      value: cdktf.numberToHclTerraform(struct!.tcpSyncookieSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syncookie_sent_fail: {
      value: cdktf.numberToHclTerraform(struct!.tcpSyncookieSentFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_zero_wind_bl: {
      value: cdktf.numberToHclTerraform(struct!.tcpZeroWindBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_zero_window: {
      value: cdktf.numberToHclTerraform(struct!.tcpZeroWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_dst_wellknown_port_drop: {
      value: cdktf.numberToHclTerraform(struct!.udpDstWellknownPortDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_exceed_drop_conn_prate: {
      value: cdktf.numberToHclTerraform(struct!.udpExceedDropConnPrate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_ntp_monlist_req_drop: {
      value: cdktf.numberToHclTerraform(struct!.udpNtpMonlistReqDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_ntp_monlist_resp_drop: {
      value: cdktf.numberToHclTerraform(struct!.udpNtpMonlistRespDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_payload_too_big_drop: {
      value: cdktf.numberToHclTerraform(struct!.udpPayloadTooBigDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_payload_too_small_drop: {
      value: cdktf.numberToHclTerraform(struct!.udpPayloadTooSmallDrop),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosLongStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosLongStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsAuthUdpPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsAuthUdpPass = this._dnsAuthUdpPass;
    }
    if (this._dnsMalformDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsMalformDrop = this._dnsMalformDrop;
    }
    if (this._dnsQryAnyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsQryAnyDrop = this._dnsQryAnyDrop;
    }
    if (this._dnsTcpAuthPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsTcpAuthPass = this._dnsTcpAuthPass;
    }
    if (this._dstEntryAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEntryAged = this._dstEntryAged;
    }
    if (this._dstEntryHit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEntryHit = this._dstEntryHit;
    }
    if (this._dstEntryLearn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEntryLearn = this._dstEntryLearn;
    }
    if (this._dstIpprotoPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpprotoPktRateExceed = this._dstIpprotoPktRateExceed;
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
    if (this._dstPortPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortPktRateExceed = this._dstPortPktRateExceed;
    }
    if (this._dstSportConnLimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSportConnLimitExceed = this._dstSportConnLimitExceed;
    }
    if (this._dstSportConnRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSportConnRateExceed = this._dstSportConnRateExceed;
    }
    if (this._dstSportKbitRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSportKbitRateExceed = this._dstSportKbitRateExceed;
    }
    if (this._dstSportPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSportPktRateExceed = this._dstSportPktRateExceed;
    }
    if (this._entryCreateFailDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryCreateFailDrop = this._entryCreateFailDrop;
    }
    if (this._greTunnelRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.greTunnelRcvd = this._greTunnelRcvd;
    }
    if (this._greV6TunnelRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.greV6TunnelRcvd = this._greV6TunnelRcvd;
    }
    if (this._ipGreTunnelDecap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipGreTunnelDecap = this._ipGreTunnelDecap;
    }
    if (this._ipGreTunnelDecapFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipGreTunnelDecapFail = this._ipGreTunnelDecapFail;
    }
    if (this._ipGreTunnelDecapKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipGreTunnelDecapKey = this._ipGreTunnelDecapKey;
    }
    if (this._ipGreTunnelDecapKeyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipGreTunnelDecapKeyDrop = this._ipGreTunnelDecapKeyDrop;
    }
    if (this._ipGreTunnelEncap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipGreTunnelEncap = this._ipGreTunnelEncap;
    }
    if (this._ipGreTunnelEncapFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipGreTunnelEncapFail = this._ipGreTunnelEncapFail;
    }
    if (this._ipGreTunnelEncapKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipGreTunnelEncapKey = this._ipGreTunnelEncapKey;
    }
    if (this._ipGreTunnelRateLimitInner !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipGreTunnelRateLimitInner = this._ipGreTunnelRateLimitInner;
    }
    if (this._ipTunnelDecap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipTunnelDecap = this._ipTunnelDecap;
    }
    if (this._ipTunnelDecapFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipTunnelDecapFail = this._ipTunnelDecapFail;
    }
    if (this._ipTunnelEncap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipTunnelEncap = this._ipTunnelEncap;
    }
    if (this._ipTunnelEncapFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipTunnelEncapFail = this._ipTunnelEncapFail;
    }
    if (this._ipTunnelRateLimitInner !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipTunnelRateLimitInner = this._ipTunnelRateLimitInner;
    }
    if (this._ipTunnelRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipTunnelRcvd = this._ipTunnelRcvd;
    }
    if (this._ipVxlanTunnelDecap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVxlanTunnelDecap = this._ipVxlanTunnelDecap;
    }
    if (this._ipVxlanTunnelDecapErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVxlanTunnelDecapErr = this._ipVxlanTunnelDecapErr;
    }
    if (this._ipVxlanTunnelInvalidVni !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVxlanTunnelInvalidVni = this._ipVxlanTunnelInvalidVni;
    }
    if (this._ipVxlanTunnelRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVxlanTunnelRcvd = this._ipVxlanTunnelRcvd;
    }
    if (this._ipv6GreTunnelDecap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6GreTunnelDecap = this._ipv6GreTunnelDecap;
    }
    if (this._ipv6GreTunnelDecapFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6GreTunnelDecapFail = this._ipv6GreTunnelDecapFail;
    }
    if (this._ipv6GreTunnelDecapKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6GreTunnelDecapKey = this._ipv6GreTunnelDecapKey;
    }
    if (this._ipv6GreTunnelDecapKeyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6GreTunnelDecapKeyDrop = this._ipv6GreTunnelDecapKeyDrop;
    }
    if (this._ipv6GreTunnelEncap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6GreTunnelEncap = this._ipv6GreTunnelEncap;
    }
    if (this._ipv6GreTunnelEncapFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6GreTunnelEncapFail = this._ipv6GreTunnelEncapFail;
    }
    if (this._ipv6GreTunnelEncapKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6GreTunnelEncapKey = this._ipv6GreTunnelEncapKey;
    }
    if (this._ipv6GreTunnelRateLimitInner !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6GreTunnelRateLimitInner = this._ipv6GreTunnelRateLimitInner;
    }
    if (this._ipv6TunnelDecap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6TunnelDecap = this._ipv6TunnelDecap;
    }
    if (this._ipv6TunnelDecapFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6TunnelDecapFail = this._ipv6TunnelDecapFail;
    }
    if (this._ipv6TunnelEncap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6TunnelEncap = this._ipv6TunnelEncap;
    }
    if (this._ipv6TunnelEncapFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6TunnelEncapFail = this._ipv6TunnelEncapFail;
    }
    if (this._ipv6TunnelRateLimitInner !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6TunnelRateLimitInner = this._ipv6TunnelRateLimitInner;
    }
    if (this._ipv6TunnelRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6TunnelRcvd = this._ipv6TunnelRcvd;
    }
    if (this._jumboFragDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.jumboFragDrop = this._jumboFragDrop;
    }
    if (this._jumboFragDropBeforeSlb !== undefined) {
      hasAnyValues = true;
      internalValueResult.jumboFragDropBeforeSlb = this._jumboFragDropBeforeSlb;
    }
    if (this._jumboFragDropByFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.jumboFragDropByFilter = this._jumboFragDropByFilter;
    }
    if (this._jumboInTunnelDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.jumboInTunnelDrop = this._jumboInTunnelDrop;
    }
    if (this._jumboOutgoingMtuExceedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.jumboOutgoingMtuExceedDrop = this._jumboOutgoingMtuExceedDrop;
    }
    if (this._srcEntryAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcEntryAged = this._srcEntryAged;
    }
    if (this._srcEntryHit !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcEntryHit = this._srcEntryHit;
    }
    if (this._srcEntryLearn !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcEntryLearn = this._srcEntryLearn;
    }
    if (this._synAuthSkip !== undefined) {
      hasAnyValues = true;
      internalValueResult.synAuthSkip = this._synAuthSkip;
    }
    if (this._syncDstWlRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncDstWlRcv = this._syncDstWlRcv;
    }
    if (this._syncDstWlSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncDstWlSent = this._syncDstWlSent;
    }
    if (this._syncSrcDstWlRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcDstWlRcv = this._syncSrcDstWlRcv;
    }
    if (this._syncSrcDstWlSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcDstWlSent = this._syncSrcDstWlSent;
    }
    if (this._syncSrcWlRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcWlRcv = this._syncSrcWlRcv;
    }
    if (this._syncSrcWlSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcWlSent = this._syncSrcWlSent;
    }
    if (this._tcpAckNoSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAckNoSyn = this._tcpAckNoSyn;
    }
    if (this._tcpActionOnAckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpActionOnAckFailed = this._tcpActionOnAckFailed;
    }
    if (this._tcpActionOnAckMatched !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpActionOnAckMatched = this._tcpActionOnAckMatched;
    }
    if (this._tcpActionOnAckPassed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpActionOnAckPassed = this._tcpActionOnAckPassed;
    }
    if (this._tcpActionOnAckReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpActionOnAckReset = this._tcpActionOnAckReset;
    }
    if (this._tcpActionOnAckStart !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpActionOnAckStart = this._tcpActionOnAckStart;
    }
    if (this._tcpActionOnAckTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpActionOnAckTimeout = this._tcpActionOnAckTimeout;
    }
    if (this._tcpExceedDropConnPrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpExceedDropConnPrate = this._tcpExceedDropConnPrate;
    }
    if (this._tcpOutOfOrder !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOutOfOrder = this._tcpOutOfOrder;
    }
    if (this._tcpOutOfSeqBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOutOfSeqBl = this._tcpOutOfSeqBl;
    }
    if (this._tcpOutrst !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOutrst = this._tcpOutrst;
    }
    if (this._tcpProgressionViolationExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpProgressionViolationExceed = this._tcpProgressionViolationExceed;
    }
    if (this._tcpProgressionViolationExceedBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpProgressionViolationExceedBl = this._tcpProgressionViolationExceedBl;
    }
    if (this._tcpProgressionViolationExceedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpProgressionViolationExceedDrop = this._tcpProgressionViolationExceedDrop;
    }
    if (this._tcpProgressionViolationExceedReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpProgressionViolationExceedReset = this._tcpProgressionViolationExceedReset;
    }
    if (this._tcpResetClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpResetClient = this._tcpResetClient;
    }
    if (this._tcpResetServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpResetServer = this._tcpResetServer;
    }
    if (this._tcpRetransmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRetransmit = this._tcpRetransmit;
    }
    if (this._tcpRetransmitBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRetransmitBl = this._tcpRetransmitBl;
    }
    if (this._tcpRexmitSynLimitBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRexmitSynLimitBl = this._tcpRexmitSynLimitBl;
    }
    if (this._tcpRexmitSynLimitDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRexmitSynLimitDrop = this._tcpRexmitSynLimitDrop;
    }
    if (this._tcpSynRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynRate = this._tcpSynRate;
    }
    if (this._tcpSynReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynReceived = this._tcpSynReceived;
    }
    if (this._tcpSyncookieCheckFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSyncookieCheckFail = this._tcpSyncookieCheckFail;
    }
    if (this._tcpSyncookieFailBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSyncookieFailBl = this._tcpSyncookieFailBl;
    }
    if (this._tcpSyncookiePass !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSyncookiePass = this._tcpSyncookiePass;
    }
    if (this._tcpSyncookieSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSyncookieSent = this._tcpSyncookieSent;
    }
    if (this._tcpSyncookieSentFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSyncookieSentFail = this._tcpSyncookieSentFail;
    }
    if (this._tcpZeroWindBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpZeroWindBl = this._tcpZeroWindBl;
    }
    if (this._tcpZeroWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpZeroWindow = this._tcpZeroWindow;
    }
    if (this._udpDstWellknownPortDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpDstWellknownPortDrop = this._udpDstWellknownPortDrop;
    }
    if (this._udpExceedDropConnPrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpExceedDropConnPrate = this._udpExceedDropConnPrate;
    }
    if (this._udpNtpMonlistReqDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpNtpMonlistReqDrop = this._udpNtpMonlistReqDrop;
    }
    if (this._udpNtpMonlistRespDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpNtpMonlistRespDrop = this._udpNtpMonlistRespDrop;
    }
    if (this._udpPayloadTooBigDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPayloadTooBigDrop = this._udpPayloadTooBigDrop;
    }
    if (this._udpPayloadTooSmallDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPayloadTooSmallDrop = this._udpPayloadTooSmallDrop;
    }
    if (this._udpRetryPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpRetryPass = this._udpRetryPass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosLongStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsAuthUdpPass = undefined;
      this._dnsMalformDrop = undefined;
      this._dnsQryAnyDrop = undefined;
      this._dnsTcpAuthPass = undefined;
      this._dstEntryAged = undefined;
      this._dstEntryHit = undefined;
      this._dstEntryLearn = undefined;
      this._dstIpprotoPktRateExceed = undefined;
      this._dstPortConnLimitExceed = undefined;
      this._dstPortConnRateExceed = undefined;
      this._dstPortKbitRateExceed = undefined;
      this._dstPortPktRateExceed = undefined;
      this._dstSportConnLimitExceed = undefined;
      this._dstSportConnRateExceed = undefined;
      this._dstSportKbitRateExceed = undefined;
      this._dstSportPktRateExceed = undefined;
      this._entryCreateFailDrop = undefined;
      this._greTunnelRcvd = undefined;
      this._greV6TunnelRcvd = undefined;
      this._ipGreTunnelDecap = undefined;
      this._ipGreTunnelDecapFail = undefined;
      this._ipGreTunnelDecapKey = undefined;
      this._ipGreTunnelDecapKeyDrop = undefined;
      this._ipGreTunnelEncap = undefined;
      this._ipGreTunnelEncapFail = undefined;
      this._ipGreTunnelEncapKey = undefined;
      this._ipGreTunnelRateLimitInner = undefined;
      this._ipTunnelDecap = undefined;
      this._ipTunnelDecapFail = undefined;
      this._ipTunnelEncap = undefined;
      this._ipTunnelEncapFail = undefined;
      this._ipTunnelRateLimitInner = undefined;
      this._ipTunnelRcvd = undefined;
      this._ipVxlanTunnelDecap = undefined;
      this._ipVxlanTunnelDecapErr = undefined;
      this._ipVxlanTunnelInvalidVni = undefined;
      this._ipVxlanTunnelRcvd = undefined;
      this._ipv6GreTunnelDecap = undefined;
      this._ipv6GreTunnelDecapFail = undefined;
      this._ipv6GreTunnelDecapKey = undefined;
      this._ipv6GreTunnelDecapKeyDrop = undefined;
      this._ipv6GreTunnelEncap = undefined;
      this._ipv6GreTunnelEncapFail = undefined;
      this._ipv6GreTunnelEncapKey = undefined;
      this._ipv6GreTunnelRateLimitInner = undefined;
      this._ipv6TunnelDecap = undefined;
      this._ipv6TunnelDecapFail = undefined;
      this._ipv6TunnelEncap = undefined;
      this._ipv6TunnelEncapFail = undefined;
      this._ipv6TunnelRateLimitInner = undefined;
      this._ipv6TunnelRcvd = undefined;
      this._jumboFragDrop = undefined;
      this._jumboFragDropBeforeSlb = undefined;
      this._jumboFragDropByFilter = undefined;
      this._jumboInTunnelDrop = undefined;
      this._jumboOutgoingMtuExceedDrop = undefined;
      this._srcEntryAged = undefined;
      this._srcEntryHit = undefined;
      this._srcEntryLearn = undefined;
      this._synAuthSkip = undefined;
      this._syncDstWlRcv = undefined;
      this._syncDstWlSent = undefined;
      this._syncSrcDstWlRcv = undefined;
      this._syncSrcDstWlSent = undefined;
      this._syncSrcWlRcv = undefined;
      this._syncSrcWlSent = undefined;
      this._tcpAckNoSyn = undefined;
      this._tcpActionOnAckFailed = undefined;
      this._tcpActionOnAckMatched = undefined;
      this._tcpActionOnAckPassed = undefined;
      this._tcpActionOnAckReset = undefined;
      this._tcpActionOnAckStart = undefined;
      this._tcpActionOnAckTimeout = undefined;
      this._tcpExceedDropConnPrate = undefined;
      this._tcpOutOfOrder = undefined;
      this._tcpOutOfSeqBl = undefined;
      this._tcpOutrst = undefined;
      this._tcpProgressionViolationExceed = undefined;
      this._tcpProgressionViolationExceedBl = undefined;
      this._tcpProgressionViolationExceedDrop = undefined;
      this._tcpProgressionViolationExceedReset = undefined;
      this._tcpResetClient = undefined;
      this._tcpResetServer = undefined;
      this._tcpRetransmit = undefined;
      this._tcpRetransmitBl = undefined;
      this._tcpRexmitSynLimitBl = undefined;
      this._tcpRexmitSynLimitDrop = undefined;
      this._tcpSynRate = undefined;
      this._tcpSynReceived = undefined;
      this._tcpSyncookieCheckFail = undefined;
      this._tcpSyncookieFailBl = undefined;
      this._tcpSyncookiePass = undefined;
      this._tcpSyncookieSent = undefined;
      this._tcpSyncookieSentFail = undefined;
      this._tcpZeroWindBl = undefined;
      this._tcpZeroWindow = undefined;
      this._udpDstWellknownPortDrop = undefined;
      this._udpExceedDropConnPrate = undefined;
      this._udpNtpMonlistReqDrop = undefined;
      this._udpNtpMonlistRespDrop = undefined;
      this._udpPayloadTooBigDrop = undefined;
      this._udpPayloadTooSmallDrop = undefined;
      this._udpRetryPass = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsAuthUdpPass = value.dnsAuthUdpPass;
      this._dnsMalformDrop = value.dnsMalformDrop;
      this._dnsQryAnyDrop = value.dnsQryAnyDrop;
      this._dnsTcpAuthPass = value.dnsTcpAuthPass;
      this._dstEntryAged = value.dstEntryAged;
      this._dstEntryHit = value.dstEntryHit;
      this._dstEntryLearn = value.dstEntryLearn;
      this._dstIpprotoPktRateExceed = value.dstIpprotoPktRateExceed;
      this._dstPortConnLimitExceed = value.dstPortConnLimitExceed;
      this._dstPortConnRateExceed = value.dstPortConnRateExceed;
      this._dstPortKbitRateExceed = value.dstPortKbitRateExceed;
      this._dstPortPktRateExceed = value.dstPortPktRateExceed;
      this._dstSportConnLimitExceed = value.dstSportConnLimitExceed;
      this._dstSportConnRateExceed = value.dstSportConnRateExceed;
      this._dstSportKbitRateExceed = value.dstSportKbitRateExceed;
      this._dstSportPktRateExceed = value.dstSportPktRateExceed;
      this._entryCreateFailDrop = value.entryCreateFailDrop;
      this._greTunnelRcvd = value.greTunnelRcvd;
      this._greV6TunnelRcvd = value.greV6TunnelRcvd;
      this._ipGreTunnelDecap = value.ipGreTunnelDecap;
      this._ipGreTunnelDecapFail = value.ipGreTunnelDecapFail;
      this._ipGreTunnelDecapKey = value.ipGreTunnelDecapKey;
      this._ipGreTunnelDecapKeyDrop = value.ipGreTunnelDecapKeyDrop;
      this._ipGreTunnelEncap = value.ipGreTunnelEncap;
      this._ipGreTunnelEncapFail = value.ipGreTunnelEncapFail;
      this._ipGreTunnelEncapKey = value.ipGreTunnelEncapKey;
      this._ipGreTunnelRateLimitInner = value.ipGreTunnelRateLimitInner;
      this._ipTunnelDecap = value.ipTunnelDecap;
      this._ipTunnelDecapFail = value.ipTunnelDecapFail;
      this._ipTunnelEncap = value.ipTunnelEncap;
      this._ipTunnelEncapFail = value.ipTunnelEncapFail;
      this._ipTunnelRateLimitInner = value.ipTunnelRateLimitInner;
      this._ipTunnelRcvd = value.ipTunnelRcvd;
      this._ipVxlanTunnelDecap = value.ipVxlanTunnelDecap;
      this._ipVxlanTunnelDecapErr = value.ipVxlanTunnelDecapErr;
      this._ipVxlanTunnelInvalidVni = value.ipVxlanTunnelInvalidVni;
      this._ipVxlanTunnelRcvd = value.ipVxlanTunnelRcvd;
      this._ipv6GreTunnelDecap = value.ipv6GreTunnelDecap;
      this._ipv6GreTunnelDecapFail = value.ipv6GreTunnelDecapFail;
      this._ipv6GreTunnelDecapKey = value.ipv6GreTunnelDecapKey;
      this._ipv6GreTunnelDecapKeyDrop = value.ipv6GreTunnelDecapKeyDrop;
      this._ipv6GreTunnelEncap = value.ipv6GreTunnelEncap;
      this._ipv6GreTunnelEncapFail = value.ipv6GreTunnelEncapFail;
      this._ipv6GreTunnelEncapKey = value.ipv6GreTunnelEncapKey;
      this._ipv6GreTunnelRateLimitInner = value.ipv6GreTunnelRateLimitInner;
      this._ipv6TunnelDecap = value.ipv6TunnelDecap;
      this._ipv6TunnelDecapFail = value.ipv6TunnelDecapFail;
      this._ipv6TunnelEncap = value.ipv6TunnelEncap;
      this._ipv6TunnelEncapFail = value.ipv6TunnelEncapFail;
      this._ipv6TunnelRateLimitInner = value.ipv6TunnelRateLimitInner;
      this._ipv6TunnelRcvd = value.ipv6TunnelRcvd;
      this._jumboFragDrop = value.jumboFragDrop;
      this._jumboFragDropBeforeSlb = value.jumboFragDropBeforeSlb;
      this._jumboFragDropByFilter = value.jumboFragDropByFilter;
      this._jumboInTunnelDrop = value.jumboInTunnelDrop;
      this._jumboOutgoingMtuExceedDrop = value.jumboOutgoingMtuExceedDrop;
      this._srcEntryAged = value.srcEntryAged;
      this._srcEntryHit = value.srcEntryHit;
      this._srcEntryLearn = value.srcEntryLearn;
      this._synAuthSkip = value.synAuthSkip;
      this._syncDstWlRcv = value.syncDstWlRcv;
      this._syncDstWlSent = value.syncDstWlSent;
      this._syncSrcDstWlRcv = value.syncSrcDstWlRcv;
      this._syncSrcDstWlSent = value.syncSrcDstWlSent;
      this._syncSrcWlRcv = value.syncSrcWlRcv;
      this._syncSrcWlSent = value.syncSrcWlSent;
      this._tcpAckNoSyn = value.tcpAckNoSyn;
      this._tcpActionOnAckFailed = value.tcpActionOnAckFailed;
      this._tcpActionOnAckMatched = value.tcpActionOnAckMatched;
      this._tcpActionOnAckPassed = value.tcpActionOnAckPassed;
      this._tcpActionOnAckReset = value.tcpActionOnAckReset;
      this._tcpActionOnAckStart = value.tcpActionOnAckStart;
      this._tcpActionOnAckTimeout = value.tcpActionOnAckTimeout;
      this._tcpExceedDropConnPrate = value.tcpExceedDropConnPrate;
      this._tcpOutOfOrder = value.tcpOutOfOrder;
      this._tcpOutOfSeqBl = value.tcpOutOfSeqBl;
      this._tcpOutrst = value.tcpOutrst;
      this._tcpProgressionViolationExceed = value.tcpProgressionViolationExceed;
      this._tcpProgressionViolationExceedBl = value.tcpProgressionViolationExceedBl;
      this._tcpProgressionViolationExceedDrop = value.tcpProgressionViolationExceedDrop;
      this._tcpProgressionViolationExceedReset = value.tcpProgressionViolationExceedReset;
      this._tcpResetClient = value.tcpResetClient;
      this._tcpResetServer = value.tcpResetServer;
      this._tcpRetransmit = value.tcpRetransmit;
      this._tcpRetransmitBl = value.tcpRetransmitBl;
      this._tcpRexmitSynLimitBl = value.tcpRexmitSynLimitBl;
      this._tcpRexmitSynLimitDrop = value.tcpRexmitSynLimitDrop;
      this._tcpSynRate = value.tcpSynRate;
      this._tcpSynReceived = value.tcpSynReceived;
      this._tcpSyncookieCheckFail = value.tcpSyncookieCheckFail;
      this._tcpSyncookieFailBl = value.tcpSyncookieFailBl;
      this._tcpSyncookiePass = value.tcpSyncookiePass;
      this._tcpSyncookieSent = value.tcpSyncookieSent;
      this._tcpSyncookieSentFail = value.tcpSyncookieSentFail;
      this._tcpZeroWindBl = value.tcpZeroWindBl;
      this._tcpZeroWindow = value.tcpZeroWindow;
      this._udpDstWellknownPortDrop = value.udpDstWellknownPortDrop;
      this._udpExceedDropConnPrate = value.udpExceedDropConnPrate;
      this._udpNtpMonlistReqDrop = value.udpNtpMonlistReqDrop;
      this._udpNtpMonlistRespDrop = value.udpNtpMonlistRespDrop;
      this._udpPayloadTooBigDrop = value.udpPayloadTooBigDrop;
      this._udpPayloadTooSmallDrop = value.udpPayloadTooSmallDrop;
      this._udpRetryPass = value.udpRetryPass;
    }
  }

  // dns_auth_udp_pass - computed: false, optional: true, required: false
  private _dnsAuthUdpPass?: number; 
  public get dnsAuthUdpPass() {
    return this.getNumberAttribute('dns_auth_udp_pass');
  }
  public set dnsAuthUdpPass(value: number) {
    this._dnsAuthUdpPass = value;
  }
  public resetDnsAuthUdpPass() {
    this._dnsAuthUdpPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAuthUdpPassInput() {
    return this._dnsAuthUdpPass;
  }

  // dns_malform_drop - computed: false, optional: true, required: false
  private _dnsMalformDrop?: number; 
  public get dnsMalformDrop() {
    return this.getNumberAttribute('dns_malform_drop');
  }
  public set dnsMalformDrop(value: number) {
    this._dnsMalformDrop = value;
  }
  public resetDnsMalformDrop() {
    this._dnsMalformDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsMalformDropInput() {
    return this._dnsMalformDrop;
  }

  // dns_qry_any_drop - computed: false, optional: true, required: false
  private _dnsQryAnyDrop?: number; 
  public get dnsQryAnyDrop() {
    return this.getNumberAttribute('dns_qry_any_drop');
  }
  public set dnsQryAnyDrop(value: number) {
    this._dnsQryAnyDrop = value;
  }
  public resetDnsQryAnyDrop() {
    this._dnsQryAnyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsQryAnyDropInput() {
    return this._dnsQryAnyDrop;
  }

  // dns_tcp_auth_pass - computed: false, optional: true, required: false
  private _dnsTcpAuthPass?: number; 
  public get dnsTcpAuthPass() {
    return this.getNumberAttribute('dns_tcp_auth_pass');
  }
  public set dnsTcpAuthPass(value: number) {
    this._dnsTcpAuthPass = value;
  }
  public resetDnsTcpAuthPass() {
    this._dnsTcpAuthPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsTcpAuthPassInput() {
    return this._dnsTcpAuthPass;
  }

  // dst_entry_aged - computed: false, optional: true, required: false
  private _dstEntryAged?: number; 
  public get dstEntryAged() {
    return this.getNumberAttribute('dst_entry_aged');
  }
  public set dstEntryAged(value: number) {
    this._dstEntryAged = value;
  }
  public resetDstEntryAged() {
    this._dstEntryAged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryAgedInput() {
    return this._dstEntryAged;
  }

  // dst_entry_hit - computed: false, optional: true, required: false
  private _dstEntryHit?: number; 
  public get dstEntryHit() {
    return this.getNumberAttribute('dst_entry_hit');
  }
  public set dstEntryHit(value: number) {
    this._dstEntryHit = value;
  }
  public resetDstEntryHit() {
    this._dstEntryHit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryHitInput() {
    return this._dstEntryHit;
  }

  // dst_entry_learn - computed: false, optional: true, required: false
  private _dstEntryLearn?: number; 
  public get dstEntryLearn() {
    return this.getNumberAttribute('dst_entry_learn');
  }
  public set dstEntryLearn(value: number) {
    this._dstEntryLearn = value;
  }
  public resetDstEntryLearn() {
    this._dstEntryLearn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryLearnInput() {
    return this._dstEntryLearn;
  }

  // dst_ipproto_pkt_rate_exceed - computed: false, optional: true, required: false
  private _dstIpprotoPktRateExceed?: number; 
  public get dstIpprotoPktRateExceed() {
    return this.getNumberAttribute('dst_ipproto_pkt_rate_exceed');
  }
  public set dstIpprotoPktRateExceed(value: number) {
    this._dstIpprotoPktRateExceed = value;
  }
  public resetDstIpprotoPktRateExceed() {
    this._dstIpprotoPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpprotoPktRateExceedInput() {
    return this._dstIpprotoPktRateExceed;
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

  // dst_sport_conn_limit_exceed - computed: false, optional: true, required: false
  private _dstSportConnLimitExceed?: number; 
  public get dstSportConnLimitExceed() {
    return this.getNumberAttribute('dst_sport_conn_limit_exceed');
  }
  public set dstSportConnLimitExceed(value: number) {
    this._dstSportConnLimitExceed = value;
  }
  public resetDstSportConnLimitExceed() {
    this._dstSportConnLimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSportConnLimitExceedInput() {
    return this._dstSportConnLimitExceed;
  }

  // dst_sport_conn_rate_exceed - computed: false, optional: true, required: false
  private _dstSportConnRateExceed?: number; 
  public get dstSportConnRateExceed() {
    return this.getNumberAttribute('dst_sport_conn_rate_exceed');
  }
  public set dstSportConnRateExceed(value: number) {
    this._dstSportConnRateExceed = value;
  }
  public resetDstSportConnRateExceed() {
    this._dstSportConnRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSportConnRateExceedInput() {
    return this._dstSportConnRateExceed;
  }

  // dst_sport_kbit_rate_exceed - computed: false, optional: true, required: false
  private _dstSportKbitRateExceed?: number; 
  public get dstSportKbitRateExceed() {
    return this.getNumberAttribute('dst_sport_kbit_rate_exceed');
  }
  public set dstSportKbitRateExceed(value: number) {
    this._dstSportKbitRateExceed = value;
  }
  public resetDstSportKbitRateExceed() {
    this._dstSportKbitRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSportKbitRateExceedInput() {
    return this._dstSportKbitRateExceed;
  }

  // dst_sport_pkt_rate_exceed - computed: false, optional: true, required: false
  private _dstSportPktRateExceed?: number; 
  public get dstSportPktRateExceed() {
    return this.getNumberAttribute('dst_sport_pkt_rate_exceed');
  }
  public set dstSportPktRateExceed(value: number) {
    this._dstSportPktRateExceed = value;
  }
  public resetDstSportPktRateExceed() {
    this._dstSportPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSportPktRateExceedInput() {
    return this._dstSportPktRateExceed;
  }

  // entry_create_fail_drop - computed: false, optional: true, required: false
  private _entryCreateFailDrop?: number; 
  public get entryCreateFailDrop() {
    return this.getNumberAttribute('entry_create_fail_drop');
  }
  public set entryCreateFailDrop(value: number) {
    this._entryCreateFailDrop = value;
  }
  public resetEntryCreateFailDrop() {
    this._entryCreateFailDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryCreateFailDropInput() {
    return this._entryCreateFailDrop;
  }

  // gre_tunnel_rcvd - computed: false, optional: true, required: false
  private _greTunnelRcvd?: number; 
  public get greTunnelRcvd() {
    return this.getNumberAttribute('gre_tunnel_rcvd');
  }
  public set greTunnelRcvd(value: number) {
    this._greTunnelRcvd = value;
  }
  public resetGreTunnelRcvd() {
    this._greTunnelRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greTunnelRcvdInput() {
    return this._greTunnelRcvd;
  }

  // gre_v6_tunnel_rcvd - computed: false, optional: true, required: false
  private _greV6TunnelRcvd?: number; 
  public get greV6TunnelRcvd() {
    return this.getNumberAttribute('gre_v6_tunnel_rcvd');
  }
  public set greV6TunnelRcvd(value: number) {
    this._greV6TunnelRcvd = value;
  }
  public resetGreV6TunnelRcvd() {
    this._greV6TunnelRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greV6TunnelRcvdInput() {
    return this._greV6TunnelRcvd;
  }

  // ip_gre_tunnel_decap - computed: false, optional: true, required: false
  private _ipGreTunnelDecap?: number; 
  public get ipGreTunnelDecap() {
    return this.getNumberAttribute('ip_gre_tunnel_decap');
  }
  public set ipGreTunnelDecap(value: number) {
    this._ipGreTunnelDecap = value;
  }
  public resetIpGreTunnelDecap() {
    this._ipGreTunnelDecap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGreTunnelDecapInput() {
    return this._ipGreTunnelDecap;
  }

  // ip_gre_tunnel_decap_fail - computed: false, optional: true, required: false
  private _ipGreTunnelDecapFail?: number; 
  public get ipGreTunnelDecapFail() {
    return this.getNumberAttribute('ip_gre_tunnel_decap_fail');
  }
  public set ipGreTunnelDecapFail(value: number) {
    this._ipGreTunnelDecapFail = value;
  }
  public resetIpGreTunnelDecapFail() {
    this._ipGreTunnelDecapFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGreTunnelDecapFailInput() {
    return this._ipGreTunnelDecapFail;
  }

  // ip_gre_tunnel_decap_key - computed: false, optional: true, required: false
  private _ipGreTunnelDecapKey?: number; 
  public get ipGreTunnelDecapKey() {
    return this.getNumberAttribute('ip_gre_tunnel_decap_key');
  }
  public set ipGreTunnelDecapKey(value: number) {
    this._ipGreTunnelDecapKey = value;
  }
  public resetIpGreTunnelDecapKey() {
    this._ipGreTunnelDecapKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGreTunnelDecapKeyInput() {
    return this._ipGreTunnelDecapKey;
  }

  // ip_gre_tunnel_decap_key_drop - computed: false, optional: true, required: false
  private _ipGreTunnelDecapKeyDrop?: number; 
  public get ipGreTunnelDecapKeyDrop() {
    return this.getNumberAttribute('ip_gre_tunnel_decap_key_drop');
  }
  public set ipGreTunnelDecapKeyDrop(value: number) {
    this._ipGreTunnelDecapKeyDrop = value;
  }
  public resetIpGreTunnelDecapKeyDrop() {
    this._ipGreTunnelDecapKeyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGreTunnelDecapKeyDropInput() {
    return this._ipGreTunnelDecapKeyDrop;
  }

  // ip_gre_tunnel_encap - computed: false, optional: true, required: false
  private _ipGreTunnelEncap?: number; 
  public get ipGreTunnelEncap() {
    return this.getNumberAttribute('ip_gre_tunnel_encap');
  }
  public set ipGreTunnelEncap(value: number) {
    this._ipGreTunnelEncap = value;
  }
  public resetIpGreTunnelEncap() {
    this._ipGreTunnelEncap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGreTunnelEncapInput() {
    return this._ipGreTunnelEncap;
  }

  // ip_gre_tunnel_encap_fail - computed: false, optional: true, required: false
  private _ipGreTunnelEncapFail?: number; 
  public get ipGreTunnelEncapFail() {
    return this.getNumberAttribute('ip_gre_tunnel_encap_fail');
  }
  public set ipGreTunnelEncapFail(value: number) {
    this._ipGreTunnelEncapFail = value;
  }
  public resetIpGreTunnelEncapFail() {
    this._ipGreTunnelEncapFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGreTunnelEncapFailInput() {
    return this._ipGreTunnelEncapFail;
  }

  // ip_gre_tunnel_encap_key - computed: false, optional: true, required: false
  private _ipGreTunnelEncapKey?: number; 
  public get ipGreTunnelEncapKey() {
    return this.getNumberAttribute('ip_gre_tunnel_encap_key');
  }
  public set ipGreTunnelEncapKey(value: number) {
    this._ipGreTunnelEncapKey = value;
  }
  public resetIpGreTunnelEncapKey() {
    this._ipGreTunnelEncapKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGreTunnelEncapKeyInput() {
    return this._ipGreTunnelEncapKey;
  }

  // ip_gre_tunnel_rate_limit_inner - computed: false, optional: true, required: false
  private _ipGreTunnelRateLimitInner?: number; 
  public get ipGreTunnelRateLimitInner() {
    return this.getNumberAttribute('ip_gre_tunnel_rate_limit_inner');
  }
  public set ipGreTunnelRateLimitInner(value: number) {
    this._ipGreTunnelRateLimitInner = value;
  }
  public resetIpGreTunnelRateLimitInner() {
    this._ipGreTunnelRateLimitInner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipGreTunnelRateLimitInnerInput() {
    return this._ipGreTunnelRateLimitInner;
  }

  // ip_tunnel_decap - computed: false, optional: true, required: false
  private _ipTunnelDecap?: number; 
  public get ipTunnelDecap() {
    return this.getNumberAttribute('ip_tunnel_decap');
  }
  public set ipTunnelDecap(value: number) {
    this._ipTunnelDecap = value;
  }
  public resetIpTunnelDecap() {
    this._ipTunnelDecap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTunnelDecapInput() {
    return this._ipTunnelDecap;
  }

  // ip_tunnel_decap_fail - computed: false, optional: true, required: false
  private _ipTunnelDecapFail?: number; 
  public get ipTunnelDecapFail() {
    return this.getNumberAttribute('ip_tunnel_decap_fail');
  }
  public set ipTunnelDecapFail(value: number) {
    this._ipTunnelDecapFail = value;
  }
  public resetIpTunnelDecapFail() {
    this._ipTunnelDecapFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTunnelDecapFailInput() {
    return this._ipTunnelDecapFail;
  }

  // ip_tunnel_encap - computed: false, optional: true, required: false
  private _ipTunnelEncap?: number; 
  public get ipTunnelEncap() {
    return this.getNumberAttribute('ip_tunnel_encap');
  }
  public set ipTunnelEncap(value: number) {
    this._ipTunnelEncap = value;
  }
  public resetIpTunnelEncap() {
    this._ipTunnelEncap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTunnelEncapInput() {
    return this._ipTunnelEncap;
  }

  // ip_tunnel_encap_fail - computed: false, optional: true, required: false
  private _ipTunnelEncapFail?: number; 
  public get ipTunnelEncapFail() {
    return this.getNumberAttribute('ip_tunnel_encap_fail');
  }
  public set ipTunnelEncapFail(value: number) {
    this._ipTunnelEncapFail = value;
  }
  public resetIpTunnelEncapFail() {
    this._ipTunnelEncapFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTunnelEncapFailInput() {
    return this._ipTunnelEncapFail;
  }

  // ip_tunnel_rate_limit_inner - computed: false, optional: true, required: false
  private _ipTunnelRateLimitInner?: number; 
  public get ipTunnelRateLimitInner() {
    return this.getNumberAttribute('ip_tunnel_rate_limit_inner');
  }
  public set ipTunnelRateLimitInner(value: number) {
    this._ipTunnelRateLimitInner = value;
  }
  public resetIpTunnelRateLimitInner() {
    this._ipTunnelRateLimitInner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTunnelRateLimitInnerInput() {
    return this._ipTunnelRateLimitInner;
  }

  // ip_tunnel_rcvd - computed: false, optional: true, required: false
  private _ipTunnelRcvd?: number; 
  public get ipTunnelRcvd() {
    return this.getNumberAttribute('ip_tunnel_rcvd');
  }
  public set ipTunnelRcvd(value: number) {
    this._ipTunnelRcvd = value;
  }
  public resetIpTunnelRcvd() {
    this._ipTunnelRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipTunnelRcvdInput() {
    return this._ipTunnelRcvd;
  }

  // ip_vxlan_tunnel_decap - computed: false, optional: true, required: false
  private _ipVxlanTunnelDecap?: number; 
  public get ipVxlanTunnelDecap() {
    return this.getNumberAttribute('ip_vxlan_tunnel_decap');
  }
  public set ipVxlanTunnelDecap(value: number) {
    this._ipVxlanTunnelDecap = value;
  }
  public resetIpVxlanTunnelDecap() {
    this._ipVxlanTunnelDecap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVxlanTunnelDecapInput() {
    return this._ipVxlanTunnelDecap;
  }

  // ip_vxlan_tunnel_decap_err - computed: false, optional: true, required: false
  private _ipVxlanTunnelDecapErr?: number; 
  public get ipVxlanTunnelDecapErr() {
    return this.getNumberAttribute('ip_vxlan_tunnel_decap_err');
  }
  public set ipVxlanTunnelDecapErr(value: number) {
    this._ipVxlanTunnelDecapErr = value;
  }
  public resetIpVxlanTunnelDecapErr() {
    this._ipVxlanTunnelDecapErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVxlanTunnelDecapErrInput() {
    return this._ipVxlanTunnelDecapErr;
  }

  // ip_vxlan_tunnel_invalid_vni - computed: false, optional: true, required: false
  private _ipVxlanTunnelInvalidVni?: number; 
  public get ipVxlanTunnelInvalidVni() {
    return this.getNumberAttribute('ip_vxlan_tunnel_invalid_vni');
  }
  public set ipVxlanTunnelInvalidVni(value: number) {
    this._ipVxlanTunnelInvalidVni = value;
  }
  public resetIpVxlanTunnelInvalidVni() {
    this._ipVxlanTunnelInvalidVni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVxlanTunnelInvalidVniInput() {
    return this._ipVxlanTunnelInvalidVni;
  }

  // ip_vxlan_tunnel_rcvd - computed: false, optional: true, required: false
  private _ipVxlanTunnelRcvd?: number; 
  public get ipVxlanTunnelRcvd() {
    return this.getNumberAttribute('ip_vxlan_tunnel_rcvd');
  }
  public set ipVxlanTunnelRcvd(value: number) {
    this._ipVxlanTunnelRcvd = value;
  }
  public resetIpVxlanTunnelRcvd() {
    this._ipVxlanTunnelRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVxlanTunnelRcvdInput() {
    return this._ipVxlanTunnelRcvd;
  }

  // ipv6_gre_tunnel_decap - computed: false, optional: true, required: false
  private _ipv6GreTunnelDecap?: number; 
  public get ipv6GreTunnelDecap() {
    return this.getNumberAttribute('ipv6_gre_tunnel_decap');
  }
  public set ipv6GreTunnelDecap(value: number) {
    this._ipv6GreTunnelDecap = value;
  }
  public resetIpv6GreTunnelDecap() {
    this._ipv6GreTunnelDecap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6GreTunnelDecapInput() {
    return this._ipv6GreTunnelDecap;
  }

  // ipv6_gre_tunnel_decap_fail - computed: false, optional: true, required: false
  private _ipv6GreTunnelDecapFail?: number; 
  public get ipv6GreTunnelDecapFail() {
    return this.getNumberAttribute('ipv6_gre_tunnel_decap_fail');
  }
  public set ipv6GreTunnelDecapFail(value: number) {
    this._ipv6GreTunnelDecapFail = value;
  }
  public resetIpv6GreTunnelDecapFail() {
    this._ipv6GreTunnelDecapFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6GreTunnelDecapFailInput() {
    return this._ipv6GreTunnelDecapFail;
  }

  // ipv6_gre_tunnel_decap_key - computed: false, optional: true, required: false
  private _ipv6GreTunnelDecapKey?: number; 
  public get ipv6GreTunnelDecapKey() {
    return this.getNumberAttribute('ipv6_gre_tunnel_decap_key');
  }
  public set ipv6GreTunnelDecapKey(value: number) {
    this._ipv6GreTunnelDecapKey = value;
  }
  public resetIpv6GreTunnelDecapKey() {
    this._ipv6GreTunnelDecapKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6GreTunnelDecapKeyInput() {
    return this._ipv6GreTunnelDecapKey;
  }

  // ipv6_gre_tunnel_decap_key_drop - computed: false, optional: true, required: false
  private _ipv6GreTunnelDecapKeyDrop?: number; 
  public get ipv6GreTunnelDecapKeyDrop() {
    return this.getNumberAttribute('ipv6_gre_tunnel_decap_key_drop');
  }
  public set ipv6GreTunnelDecapKeyDrop(value: number) {
    this._ipv6GreTunnelDecapKeyDrop = value;
  }
  public resetIpv6GreTunnelDecapKeyDrop() {
    this._ipv6GreTunnelDecapKeyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6GreTunnelDecapKeyDropInput() {
    return this._ipv6GreTunnelDecapKeyDrop;
  }

  // ipv6_gre_tunnel_encap - computed: false, optional: true, required: false
  private _ipv6GreTunnelEncap?: number; 
  public get ipv6GreTunnelEncap() {
    return this.getNumberAttribute('ipv6_gre_tunnel_encap');
  }
  public set ipv6GreTunnelEncap(value: number) {
    this._ipv6GreTunnelEncap = value;
  }
  public resetIpv6GreTunnelEncap() {
    this._ipv6GreTunnelEncap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6GreTunnelEncapInput() {
    return this._ipv6GreTunnelEncap;
  }

  // ipv6_gre_tunnel_encap_fail - computed: false, optional: true, required: false
  private _ipv6GreTunnelEncapFail?: number; 
  public get ipv6GreTunnelEncapFail() {
    return this.getNumberAttribute('ipv6_gre_tunnel_encap_fail');
  }
  public set ipv6GreTunnelEncapFail(value: number) {
    this._ipv6GreTunnelEncapFail = value;
  }
  public resetIpv6GreTunnelEncapFail() {
    this._ipv6GreTunnelEncapFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6GreTunnelEncapFailInput() {
    return this._ipv6GreTunnelEncapFail;
  }

  // ipv6_gre_tunnel_encap_key - computed: false, optional: true, required: false
  private _ipv6GreTunnelEncapKey?: number; 
  public get ipv6GreTunnelEncapKey() {
    return this.getNumberAttribute('ipv6_gre_tunnel_encap_key');
  }
  public set ipv6GreTunnelEncapKey(value: number) {
    this._ipv6GreTunnelEncapKey = value;
  }
  public resetIpv6GreTunnelEncapKey() {
    this._ipv6GreTunnelEncapKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6GreTunnelEncapKeyInput() {
    return this._ipv6GreTunnelEncapKey;
  }

  // ipv6_gre_tunnel_rate_limit_inner - computed: false, optional: true, required: false
  private _ipv6GreTunnelRateLimitInner?: number; 
  public get ipv6GreTunnelRateLimitInner() {
    return this.getNumberAttribute('ipv6_gre_tunnel_rate_limit_inner');
  }
  public set ipv6GreTunnelRateLimitInner(value: number) {
    this._ipv6GreTunnelRateLimitInner = value;
  }
  public resetIpv6GreTunnelRateLimitInner() {
    this._ipv6GreTunnelRateLimitInner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6GreTunnelRateLimitInnerInput() {
    return this._ipv6GreTunnelRateLimitInner;
  }

  // ipv6_tunnel_decap - computed: false, optional: true, required: false
  private _ipv6TunnelDecap?: number; 
  public get ipv6TunnelDecap() {
    return this.getNumberAttribute('ipv6_tunnel_decap');
  }
  public set ipv6TunnelDecap(value: number) {
    this._ipv6TunnelDecap = value;
  }
  public resetIpv6TunnelDecap() {
    this._ipv6TunnelDecap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6TunnelDecapInput() {
    return this._ipv6TunnelDecap;
  }

  // ipv6_tunnel_decap_fail - computed: false, optional: true, required: false
  private _ipv6TunnelDecapFail?: number; 
  public get ipv6TunnelDecapFail() {
    return this.getNumberAttribute('ipv6_tunnel_decap_fail');
  }
  public set ipv6TunnelDecapFail(value: number) {
    this._ipv6TunnelDecapFail = value;
  }
  public resetIpv6TunnelDecapFail() {
    this._ipv6TunnelDecapFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6TunnelDecapFailInput() {
    return this._ipv6TunnelDecapFail;
  }

  // ipv6_tunnel_encap - computed: false, optional: true, required: false
  private _ipv6TunnelEncap?: number; 
  public get ipv6TunnelEncap() {
    return this.getNumberAttribute('ipv6_tunnel_encap');
  }
  public set ipv6TunnelEncap(value: number) {
    this._ipv6TunnelEncap = value;
  }
  public resetIpv6TunnelEncap() {
    this._ipv6TunnelEncap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6TunnelEncapInput() {
    return this._ipv6TunnelEncap;
  }

  // ipv6_tunnel_encap_fail - computed: false, optional: true, required: false
  private _ipv6TunnelEncapFail?: number; 
  public get ipv6TunnelEncapFail() {
    return this.getNumberAttribute('ipv6_tunnel_encap_fail');
  }
  public set ipv6TunnelEncapFail(value: number) {
    this._ipv6TunnelEncapFail = value;
  }
  public resetIpv6TunnelEncapFail() {
    this._ipv6TunnelEncapFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6TunnelEncapFailInput() {
    return this._ipv6TunnelEncapFail;
  }

  // ipv6_tunnel_rate_limit_inner - computed: false, optional: true, required: false
  private _ipv6TunnelRateLimitInner?: number; 
  public get ipv6TunnelRateLimitInner() {
    return this.getNumberAttribute('ipv6_tunnel_rate_limit_inner');
  }
  public set ipv6TunnelRateLimitInner(value: number) {
    this._ipv6TunnelRateLimitInner = value;
  }
  public resetIpv6TunnelRateLimitInner() {
    this._ipv6TunnelRateLimitInner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6TunnelRateLimitInnerInput() {
    return this._ipv6TunnelRateLimitInner;
  }

  // ipv6_tunnel_rcvd - computed: false, optional: true, required: false
  private _ipv6TunnelRcvd?: number; 
  public get ipv6TunnelRcvd() {
    return this.getNumberAttribute('ipv6_tunnel_rcvd');
  }
  public set ipv6TunnelRcvd(value: number) {
    this._ipv6TunnelRcvd = value;
  }
  public resetIpv6TunnelRcvd() {
    this._ipv6TunnelRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6TunnelRcvdInput() {
    return this._ipv6TunnelRcvd;
  }

  // jumbo_frag_drop - computed: false, optional: true, required: false
  private _jumboFragDrop?: number; 
  public get jumboFragDrop() {
    return this.getNumberAttribute('jumbo_frag_drop');
  }
  public set jumboFragDrop(value: number) {
    this._jumboFragDrop = value;
  }
  public resetJumboFragDrop() {
    this._jumboFragDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumboFragDropInput() {
    return this._jumboFragDrop;
  }

  // jumbo_frag_drop_before_slb - computed: false, optional: true, required: false
  private _jumboFragDropBeforeSlb?: number; 
  public get jumboFragDropBeforeSlb() {
    return this.getNumberAttribute('jumbo_frag_drop_before_slb');
  }
  public set jumboFragDropBeforeSlb(value: number) {
    this._jumboFragDropBeforeSlb = value;
  }
  public resetJumboFragDropBeforeSlb() {
    this._jumboFragDropBeforeSlb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumboFragDropBeforeSlbInput() {
    return this._jumboFragDropBeforeSlb;
  }

  // jumbo_frag_drop_by_filter - computed: false, optional: true, required: false
  private _jumboFragDropByFilter?: number; 
  public get jumboFragDropByFilter() {
    return this.getNumberAttribute('jumbo_frag_drop_by_filter');
  }
  public set jumboFragDropByFilter(value: number) {
    this._jumboFragDropByFilter = value;
  }
  public resetJumboFragDropByFilter() {
    this._jumboFragDropByFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumboFragDropByFilterInput() {
    return this._jumboFragDropByFilter;
  }

  // jumbo_in_tunnel_drop - computed: false, optional: true, required: false
  private _jumboInTunnelDrop?: number; 
  public get jumboInTunnelDrop() {
    return this.getNumberAttribute('jumbo_in_tunnel_drop');
  }
  public set jumboInTunnelDrop(value: number) {
    this._jumboInTunnelDrop = value;
  }
  public resetJumboInTunnelDrop() {
    this._jumboInTunnelDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumboInTunnelDropInput() {
    return this._jumboInTunnelDrop;
  }

  // jumbo_outgoing_mtu_exceed_drop - computed: false, optional: true, required: false
  private _jumboOutgoingMtuExceedDrop?: number; 
  public get jumboOutgoingMtuExceedDrop() {
    return this.getNumberAttribute('jumbo_outgoing_mtu_exceed_drop');
  }
  public set jumboOutgoingMtuExceedDrop(value: number) {
    this._jumboOutgoingMtuExceedDrop = value;
  }
  public resetJumboOutgoingMtuExceedDrop() {
    this._jumboOutgoingMtuExceedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumboOutgoingMtuExceedDropInput() {
    return this._jumboOutgoingMtuExceedDrop;
  }

  // src_entry_aged - computed: false, optional: true, required: false
  private _srcEntryAged?: number; 
  public get srcEntryAged() {
    return this.getNumberAttribute('src_entry_aged');
  }
  public set srcEntryAged(value: number) {
    this._srcEntryAged = value;
  }
  public resetSrcEntryAged() {
    this._srcEntryAged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcEntryAgedInput() {
    return this._srcEntryAged;
  }

  // src_entry_hit - computed: false, optional: true, required: false
  private _srcEntryHit?: number; 
  public get srcEntryHit() {
    return this.getNumberAttribute('src_entry_hit');
  }
  public set srcEntryHit(value: number) {
    this._srcEntryHit = value;
  }
  public resetSrcEntryHit() {
    this._srcEntryHit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcEntryHitInput() {
    return this._srcEntryHit;
  }

  // src_entry_learn - computed: false, optional: true, required: false
  private _srcEntryLearn?: number; 
  public get srcEntryLearn() {
    return this.getNumberAttribute('src_entry_learn');
  }
  public set srcEntryLearn(value: number) {
    this._srcEntryLearn = value;
  }
  public resetSrcEntryLearn() {
    this._srcEntryLearn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcEntryLearnInput() {
    return this._srcEntryLearn;
  }

  // syn_auth_skip - computed: false, optional: true, required: false
  private _synAuthSkip?: number; 
  public get synAuthSkip() {
    return this.getNumberAttribute('syn_auth_skip');
  }
  public set synAuthSkip(value: number) {
    this._synAuthSkip = value;
  }
  public resetSynAuthSkip() {
    this._synAuthSkip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synAuthSkipInput() {
    return this._synAuthSkip;
  }

  // sync_dst_wl_rcv - computed: false, optional: true, required: false
  private _syncDstWlRcv?: number; 
  public get syncDstWlRcv() {
    return this.getNumberAttribute('sync_dst_wl_rcv');
  }
  public set syncDstWlRcv(value: number) {
    this._syncDstWlRcv = value;
  }
  public resetSyncDstWlRcv() {
    this._syncDstWlRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncDstWlRcvInput() {
    return this._syncDstWlRcv;
  }

  // sync_dst_wl_sent - computed: false, optional: true, required: false
  private _syncDstWlSent?: number; 
  public get syncDstWlSent() {
    return this.getNumberAttribute('sync_dst_wl_sent');
  }
  public set syncDstWlSent(value: number) {
    this._syncDstWlSent = value;
  }
  public resetSyncDstWlSent() {
    this._syncDstWlSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncDstWlSentInput() {
    return this._syncDstWlSent;
  }

  // sync_src_dst_wl_rcv - computed: false, optional: true, required: false
  private _syncSrcDstWlRcv?: number; 
  public get syncSrcDstWlRcv() {
    return this.getNumberAttribute('sync_src_dst_wl_rcv');
  }
  public set syncSrcDstWlRcv(value: number) {
    this._syncSrcDstWlRcv = value;
  }
  public resetSyncSrcDstWlRcv() {
    this._syncSrcDstWlRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcDstWlRcvInput() {
    return this._syncSrcDstWlRcv;
  }

  // sync_src_dst_wl_sent - computed: false, optional: true, required: false
  private _syncSrcDstWlSent?: number; 
  public get syncSrcDstWlSent() {
    return this.getNumberAttribute('sync_src_dst_wl_sent');
  }
  public set syncSrcDstWlSent(value: number) {
    this._syncSrcDstWlSent = value;
  }
  public resetSyncSrcDstWlSent() {
    this._syncSrcDstWlSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcDstWlSentInput() {
    return this._syncSrcDstWlSent;
  }

  // sync_src_wl_rcv - computed: false, optional: true, required: false
  private _syncSrcWlRcv?: number; 
  public get syncSrcWlRcv() {
    return this.getNumberAttribute('sync_src_wl_rcv');
  }
  public set syncSrcWlRcv(value: number) {
    this._syncSrcWlRcv = value;
  }
  public resetSyncSrcWlRcv() {
    this._syncSrcWlRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcWlRcvInput() {
    return this._syncSrcWlRcv;
  }

  // sync_src_wl_sent - computed: false, optional: true, required: false
  private _syncSrcWlSent?: number; 
  public get syncSrcWlSent() {
    return this.getNumberAttribute('sync_src_wl_sent');
  }
  public set syncSrcWlSent(value: number) {
    this._syncSrcWlSent = value;
  }
  public resetSyncSrcWlSent() {
    this._syncSrcWlSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcWlSentInput() {
    return this._syncSrcWlSent;
  }

  // tcp_ack_no_syn - computed: false, optional: true, required: false
  private _tcpAckNoSyn?: number; 
  public get tcpAckNoSyn() {
    return this.getNumberAttribute('tcp_ack_no_syn');
  }
  public set tcpAckNoSyn(value: number) {
    this._tcpAckNoSyn = value;
  }
  public resetTcpAckNoSyn() {
    this._tcpAckNoSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAckNoSynInput() {
    return this._tcpAckNoSyn;
  }

  // tcp_action_on_ack_failed - computed: false, optional: true, required: false
  private _tcpActionOnAckFailed?: number; 
  public get tcpActionOnAckFailed() {
    return this.getNumberAttribute('tcp_action_on_ack_failed');
  }
  public set tcpActionOnAckFailed(value: number) {
    this._tcpActionOnAckFailed = value;
  }
  public resetTcpActionOnAckFailed() {
    this._tcpActionOnAckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpActionOnAckFailedInput() {
    return this._tcpActionOnAckFailed;
  }

  // tcp_action_on_ack_matched - computed: false, optional: true, required: false
  private _tcpActionOnAckMatched?: number; 
  public get tcpActionOnAckMatched() {
    return this.getNumberAttribute('tcp_action_on_ack_matched');
  }
  public set tcpActionOnAckMatched(value: number) {
    this._tcpActionOnAckMatched = value;
  }
  public resetTcpActionOnAckMatched() {
    this._tcpActionOnAckMatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpActionOnAckMatchedInput() {
    return this._tcpActionOnAckMatched;
  }

  // tcp_action_on_ack_passed - computed: false, optional: true, required: false
  private _tcpActionOnAckPassed?: number; 
  public get tcpActionOnAckPassed() {
    return this.getNumberAttribute('tcp_action_on_ack_passed');
  }
  public set tcpActionOnAckPassed(value: number) {
    this._tcpActionOnAckPassed = value;
  }
  public resetTcpActionOnAckPassed() {
    this._tcpActionOnAckPassed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpActionOnAckPassedInput() {
    return this._tcpActionOnAckPassed;
  }

  // tcp_action_on_ack_reset - computed: false, optional: true, required: false
  private _tcpActionOnAckReset?: number; 
  public get tcpActionOnAckReset() {
    return this.getNumberAttribute('tcp_action_on_ack_reset');
  }
  public set tcpActionOnAckReset(value: number) {
    this._tcpActionOnAckReset = value;
  }
  public resetTcpActionOnAckReset() {
    this._tcpActionOnAckReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpActionOnAckResetInput() {
    return this._tcpActionOnAckReset;
  }

  // tcp_action_on_ack_start - computed: false, optional: true, required: false
  private _tcpActionOnAckStart?: number; 
  public get tcpActionOnAckStart() {
    return this.getNumberAttribute('tcp_action_on_ack_start');
  }
  public set tcpActionOnAckStart(value: number) {
    this._tcpActionOnAckStart = value;
  }
  public resetTcpActionOnAckStart() {
    this._tcpActionOnAckStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpActionOnAckStartInput() {
    return this._tcpActionOnAckStart;
  }

  // tcp_action_on_ack_timeout - computed: false, optional: true, required: false
  private _tcpActionOnAckTimeout?: number; 
  public get tcpActionOnAckTimeout() {
    return this.getNumberAttribute('tcp_action_on_ack_timeout');
  }
  public set tcpActionOnAckTimeout(value: number) {
    this._tcpActionOnAckTimeout = value;
  }
  public resetTcpActionOnAckTimeout() {
    this._tcpActionOnAckTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpActionOnAckTimeoutInput() {
    return this._tcpActionOnAckTimeout;
  }

  // tcp_exceed_drop_conn_prate - computed: false, optional: true, required: false
  private _tcpExceedDropConnPrate?: number; 
  public get tcpExceedDropConnPrate() {
    return this.getNumberAttribute('tcp_exceed_drop_conn_prate');
  }
  public set tcpExceedDropConnPrate(value: number) {
    this._tcpExceedDropConnPrate = value;
  }
  public resetTcpExceedDropConnPrate() {
    this._tcpExceedDropConnPrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpExceedDropConnPrateInput() {
    return this._tcpExceedDropConnPrate;
  }

  // tcp_out_of_order - computed: false, optional: true, required: false
  private _tcpOutOfOrder?: number; 
  public get tcpOutOfOrder() {
    return this.getNumberAttribute('tcp_out_of_order');
  }
  public set tcpOutOfOrder(value: number) {
    this._tcpOutOfOrder = value;
  }
  public resetTcpOutOfOrder() {
    this._tcpOutOfOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOutOfOrderInput() {
    return this._tcpOutOfOrder;
  }

  // tcp_out_of_seq_bl - computed: false, optional: true, required: false
  private _tcpOutOfSeqBl?: number; 
  public get tcpOutOfSeqBl() {
    return this.getNumberAttribute('tcp_out_of_seq_bl');
  }
  public set tcpOutOfSeqBl(value: number) {
    this._tcpOutOfSeqBl = value;
  }
  public resetTcpOutOfSeqBl() {
    this._tcpOutOfSeqBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOutOfSeqBlInput() {
    return this._tcpOutOfSeqBl;
  }

  // tcp_outrst - computed: false, optional: true, required: false
  private _tcpOutrst?: number; 
  public get tcpOutrst() {
    return this.getNumberAttribute('tcp_outrst');
  }
  public set tcpOutrst(value: number) {
    this._tcpOutrst = value;
  }
  public resetTcpOutrst() {
    this._tcpOutrst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOutrstInput() {
    return this._tcpOutrst;
  }

  // tcp_progression_violation_exceed - computed: false, optional: true, required: false
  private _tcpProgressionViolationExceed?: number; 
  public get tcpProgressionViolationExceed() {
    return this.getNumberAttribute('tcp_progression_violation_exceed');
  }
  public set tcpProgressionViolationExceed(value: number) {
    this._tcpProgressionViolationExceed = value;
  }
  public resetTcpProgressionViolationExceed() {
    this._tcpProgressionViolationExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpProgressionViolationExceedInput() {
    return this._tcpProgressionViolationExceed;
  }

  // tcp_progression_violation_exceed_bl - computed: false, optional: true, required: false
  private _tcpProgressionViolationExceedBl?: number; 
  public get tcpProgressionViolationExceedBl() {
    return this.getNumberAttribute('tcp_progression_violation_exceed_bl');
  }
  public set tcpProgressionViolationExceedBl(value: number) {
    this._tcpProgressionViolationExceedBl = value;
  }
  public resetTcpProgressionViolationExceedBl() {
    this._tcpProgressionViolationExceedBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpProgressionViolationExceedBlInput() {
    return this._tcpProgressionViolationExceedBl;
  }

  // tcp_progression_violation_exceed_drop - computed: false, optional: true, required: false
  private _tcpProgressionViolationExceedDrop?: number; 
  public get tcpProgressionViolationExceedDrop() {
    return this.getNumberAttribute('tcp_progression_violation_exceed_drop');
  }
  public set tcpProgressionViolationExceedDrop(value: number) {
    this._tcpProgressionViolationExceedDrop = value;
  }
  public resetTcpProgressionViolationExceedDrop() {
    this._tcpProgressionViolationExceedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpProgressionViolationExceedDropInput() {
    return this._tcpProgressionViolationExceedDrop;
  }

  // tcp_progression_violation_exceed_reset - computed: false, optional: true, required: false
  private _tcpProgressionViolationExceedReset?: number; 
  public get tcpProgressionViolationExceedReset() {
    return this.getNumberAttribute('tcp_progression_violation_exceed_reset');
  }
  public set tcpProgressionViolationExceedReset(value: number) {
    this._tcpProgressionViolationExceedReset = value;
  }
  public resetTcpProgressionViolationExceedReset() {
    this._tcpProgressionViolationExceedReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpProgressionViolationExceedResetInput() {
    return this._tcpProgressionViolationExceedReset;
  }

  // tcp_reset_client - computed: false, optional: true, required: false
  private _tcpResetClient?: number; 
  public get tcpResetClient() {
    return this.getNumberAttribute('tcp_reset_client');
  }
  public set tcpResetClient(value: number) {
    this._tcpResetClient = value;
  }
  public resetTcpResetClient() {
    this._tcpResetClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpResetClientInput() {
    return this._tcpResetClient;
  }

  // tcp_reset_server - computed: false, optional: true, required: false
  private _tcpResetServer?: number; 
  public get tcpResetServer() {
    return this.getNumberAttribute('tcp_reset_server');
  }
  public set tcpResetServer(value: number) {
    this._tcpResetServer = value;
  }
  public resetTcpResetServer() {
    this._tcpResetServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpResetServerInput() {
    return this._tcpResetServer;
  }

  // tcp_retransmit - computed: false, optional: true, required: false
  private _tcpRetransmit?: number; 
  public get tcpRetransmit() {
    return this.getNumberAttribute('tcp_retransmit');
  }
  public set tcpRetransmit(value: number) {
    this._tcpRetransmit = value;
  }
  public resetTcpRetransmit() {
    this._tcpRetransmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRetransmitInput() {
    return this._tcpRetransmit;
  }

  // tcp_retransmit_bl - computed: false, optional: true, required: false
  private _tcpRetransmitBl?: number; 
  public get tcpRetransmitBl() {
    return this.getNumberAttribute('tcp_retransmit_bl');
  }
  public set tcpRetransmitBl(value: number) {
    this._tcpRetransmitBl = value;
  }
  public resetTcpRetransmitBl() {
    this._tcpRetransmitBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRetransmitBlInput() {
    return this._tcpRetransmitBl;
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

  // tcp_syn_rate - computed: false, optional: true, required: false
  private _tcpSynRate?: number; 
  public get tcpSynRate() {
    return this.getNumberAttribute('tcp_syn_rate');
  }
  public set tcpSynRate(value: number) {
    this._tcpSynRate = value;
  }
  public resetTcpSynRate() {
    this._tcpSynRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynRateInput() {
    return this._tcpSynRate;
  }

  // tcp_syn_received - computed: false, optional: true, required: false
  private _tcpSynReceived?: number; 
  public get tcpSynReceived() {
    return this.getNumberAttribute('tcp_syn_received');
  }
  public set tcpSynReceived(value: number) {
    this._tcpSynReceived = value;
  }
  public resetTcpSynReceived() {
    this._tcpSynReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynReceivedInput() {
    return this._tcpSynReceived;
  }

  // tcp_syncookie_check_fail - computed: false, optional: true, required: false
  private _tcpSyncookieCheckFail?: number; 
  public get tcpSyncookieCheckFail() {
    return this.getNumberAttribute('tcp_syncookie_check_fail');
  }
  public set tcpSyncookieCheckFail(value: number) {
    this._tcpSyncookieCheckFail = value;
  }
  public resetTcpSyncookieCheckFail() {
    this._tcpSyncookieCheckFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSyncookieCheckFailInput() {
    return this._tcpSyncookieCheckFail;
  }

  // tcp_syncookie_fail_bl - computed: false, optional: true, required: false
  private _tcpSyncookieFailBl?: number; 
  public get tcpSyncookieFailBl() {
    return this.getNumberAttribute('tcp_syncookie_fail_bl');
  }
  public set tcpSyncookieFailBl(value: number) {
    this._tcpSyncookieFailBl = value;
  }
  public resetTcpSyncookieFailBl() {
    this._tcpSyncookieFailBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSyncookieFailBlInput() {
    return this._tcpSyncookieFailBl;
  }

  // tcp_syncookie_pass - computed: false, optional: true, required: false
  private _tcpSyncookiePass?: number; 
  public get tcpSyncookiePass() {
    return this.getNumberAttribute('tcp_syncookie_pass');
  }
  public set tcpSyncookiePass(value: number) {
    this._tcpSyncookiePass = value;
  }
  public resetTcpSyncookiePass() {
    this._tcpSyncookiePass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSyncookiePassInput() {
    return this._tcpSyncookiePass;
  }

  // tcp_syncookie_sent - computed: false, optional: true, required: false
  private _tcpSyncookieSent?: number; 
  public get tcpSyncookieSent() {
    return this.getNumberAttribute('tcp_syncookie_sent');
  }
  public set tcpSyncookieSent(value: number) {
    this._tcpSyncookieSent = value;
  }
  public resetTcpSyncookieSent() {
    this._tcpSyncookieSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSyncookieSentInput() {
    return this._tcpSyncookieSent;
  }

  // tcp_syncookie_sent_fail - computed: false, optional: true, required: false
  private _tcpSyncookieSentFail?: number; 
  public get tcpSyncookieSentFail() {
    return this.getNumberAttribute('tcp_syncookie_sent_fail');
  }
  public set tcpSyncookieSentFail(value: number) {
    this._tcpSyncookieSentFail = value;
  }
  public resetTcpSyncookieSentFail() {
    this._tcpSyncookieSentFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSyncookieSentFailInput() {
    return this._tcpSyncookieSentFail;
  }

  // tcp_zero_wind_bl - computed: false, optional: true, required: false
  private _tcpZeroWindBl?: number; 
  public get tcpZeroWindBl() {
    return this.getNumberAttribute('tcp_zero_wind_bl');
  }
  public set tcpZeroWindBl(value: number) {
    this._tcpZeroWindBl = value;
  }
  public resetTcpZeroWindBl() {
    this._tcpZeroWindBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpZeroWindBlInput() {
    return this._tcpZeroWindBl;
  }

  // tcp_zero_window - computed: false, optional: true, required: false
  private _tcpZeroWindow?: number; 
  public get tcpZeroWindow() {
    return this.getNumberAttribute('tcp_zero_window');
  }
  public set tcpZeroWindow(value: number) {
    this._tcpZeroWindow = value;
  }
  public resetTcpZeroWindow() {
    this._tcpZeroWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpZeroWindowInput() {
    return this._tcpZeroWindow;
  }

  // udp_dst_wellknown_port_drop - computed: false, optional: true, required: false
  private _udpDstWellknownPortDrop?: number; 
  public get udpDstWellknownPortDrop() {
    return this.getNumberAttribute('udp_dst_wellknown_port_drop');
  }
  public set udpDstWellknownPortDrop(value: number) {
    this._udpDstWellknownPortDrop = value;
  }
  public resetUdpDstWellknownPortDrop() {
    this._udpDstWellknownPortDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpDstWellknownPortDropInput() {
    return this._udpDstWellknownPortDrop;
  }

  // udp_exceed_drop_conn_prate - computed: false, optional: true, required: false
  private _udpExceedDropConnPrate?: number; 
  public get udpExceedDropConnPrate() {
    return this.getNumberAttribute('udp_exceed_drop_conn_prate');
  }
  public set udpExceedDropConnPrate(value: number) {
    this._udpExceedDropConnPrate = value;
  }
  public resetUdpExceedDropConnPrate() {
    this._udpExceedDropConnPrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpExceedDropConnPrateInput() {
    return this._udpExceedDropConnPrate;
  }

  // udp_ntp_monlist_req_drop - computed: false, optional: true, required: false
  private _udpNtpMonlistReqDrop?: number; 
  public get udpNtpMonlistReqDrop() {
    return this.getNumberAttribute('udp_ntp_monlist_req_drop');
  }
  public set udpNtpMonlistReqDrop(value: number) {
    this._udpNtpMonlistReqDrop = value;
  }
  public resetUdpNtpMonlistReqDrop() {
    this._udpNtpMonlistReqDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpNtpMonlistReqDropInput() {
    return this._udpNtpMonlistReqDrop;
  }

  // udp_ntp_monlist_resp_drop - computed: false, optional: true, required: false
  private _udpNtpMonlistRespDrop?: number; 
  public get udpNtpMonlistRespDrop() {
    return this.getNumberAttribute('udp_ntp_monlist_resp_drop');
  }
  public set udpNtpMonlistRespDrop(value: number) {
    this._udpNtpMonlistRespDrop = value;
  }
  public resetUdpNtpMonlistRespDrop() {
    this._udpNtpMonlistRespDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpNtpMonlistRespDropInput() {
    return this._udpNtpMonlistRespDrop;
  }

  // udp_payload_too_big_drop - computed: false, optional: true, required: false
  private _udpPayloadTooBigDrop?: number; 
  public get udpPayloadTooBigDrop() {
    return this.getNumberAttribute('udp_payload_too_big_drop');
  }
  public set udpPayloadTooBigDrop(value: number) {
    this._udpPayloadTooBigDrop = value;
  }
  public resetUdpPayloadTooBigDrop() {
    this._udpPayloadTooBigDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPayloadTooBigDropInput() {
    return this._udpPayloadTooBigDrop;
  }

  // udp_payload_too_small_drop - computed: false, optional: true, required: false
  private _udpPayloadTooSmallDrop?: number; 
  public get udpPayloadTooSmallDrop() {
    return this.getNumberAttribute('udp_payload_too_small_drop');
  }
  public set udpPayloadTooSmallDrop(value: number) {
    this._udpPayloadTooSmallDrop = value;
  }
  public resetUdpPayloadTooSmallDrop() {
    this._udpPayloadTooSmallDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPayloadTooSmallDropInput() {
    return this._udpPayloadTooSmallDrop;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats thunder_ddos_long_stats}
*/
export class DataThunderDdosLongStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_long_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosLongStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosLongStats to import
  * @param importFromId The id of the existing DataThunderDdosLongStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosLongStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_long_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_long_stats thunder_ddos_long_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosLongStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosLongStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_long_stats',
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
  private _stats = new DataThunderDdosLongStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosLongStatsStats) {
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
      stats: dataThunderDdosLongStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderDdosLongStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosLongStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
