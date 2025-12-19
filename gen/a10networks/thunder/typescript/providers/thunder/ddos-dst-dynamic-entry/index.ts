// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_dynamic_entry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDstDynamicEntryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_dynamic_entry#id DdosDstDynamicEntry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_dynamic_entry#uuid DdosDstDynamicEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * all_entries block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_dynamic_entry#all_entries DdosDstDynamicEntry#all_entries}
  */
  readonly allEntries?: DdosDstDynamicEntryAllEntries;
}
export interface DdosDstDynamicEntryAllEntriesSamplingEnable {
  /**
  * 'all': all; 'dst_tcp_any_exceed': TCP Dst L4-Type Rate: Total Exceeded; 'dst_tcp_pkt_rate_exceed': TCP Dst L4-Type Rate: Packet Exceeded; 'dst_tcp_conn_rate_exceed': TCP Dst L4-Type Rate: Conn Exceeded; 'dst_udp_any_exceed': UDP Dst L4-Type Rate: Total Exceeded; 'dst_udp_pkt_rate_exceed': UDP Dst L4-Type Rate: Packet Exceeded; 'dst_udp_conn_limit_exceed': UDP Dst L4-Type Limit: Conn Exceeded; 'dst_udp_conn_rate_exceed': UDP Dst L4-Type Rate: Conn Exceeded; 'dst_icmp_pkt_rate_exceed': ICMP Dst Rate: Packet Exceeded; 'dst_other_pkt_rate_exceed': OTHER Dst L4-Type Rate: Packet Exceeded; 'dst_other_frag_pkt_rate_exceed': OTHER Dst L4-Type Rate: Frag Exceeded; 'dst_port_pkt_rate_exceed': Port Rate: Packet Exceeded; 'dst_port_conn_limit_exceed': Port Limit: Conn Exceeded; 'dst_port_conn_rate_exceed': Port Rate: Conn Exceeded; 'dst_pkt_sent': Inbound: Packets Forwarded; 'dst_udp_pkt_sent': UDP Total Packets Forwarded; 'dst_tcp_pkt_sent': TCP Total Packets Forwarded; 'dst_icmp_pkt_sent': ICMP Total Packets Forwarded; 'dst_other_pkt_sent': OTHER Total Packets Forwarded; 'dst_tcp_conn_limit_exceed': TCP Dst L4-Type Limit: Conn Exceeded; 'dst_tcp_pkt_rcvd': TCP Total Packets Received; 'dst_udp_pkt_rcvd': UDP Total Packets Received; 'dst_icmp_pkt_rcvd': ICMP Total Packets Received; 'dst_other_pkt_rcvd': OTHER Total Packets Received; 'dst_udp_filter_match': UDP Filter Match; 'dst_udp_filter_not_match': UDP Filter Not Matched on Pkt; 'dst_udp_filter_action_blacklist': UDP Filter Action Blacklist; 'dst_udp_filter_action_drop': UDP Filter Action Drop; 'dst_tcp_syn': TCP Total SYN Received; 'dst_tcp_syn_drop': TCP SYN Packets Dropped; 'dst_tcp_src_rate_drop': TCP Src Rate: Total Exceeded; 'dst_udp_src_rate_drop': UDP Src Rate: Total Exceeded; 'dst_icmp_src_rate_drop': ICMP Src Rate: Total Exceeded; 'dst_other_frag_src_rate_drop': OTHER Src Rate: Frag Exceeded; 'dst_other_src_rate_drop': OTHER Src Rate: Total Exceeded; 'dst_tcp_drop': TCP Total Packets Dropped; 'dst_udp_drop': UDP Total Packets Dropped; 'dst_icmp_drop': ICMP Total Packets Dropped; 'dst_frag_drop': Fragmented Packets Dropped; 'dst_other_drop': OTHER Total Packets Dropped; 'dst_tcp_auth': TCP Auth: SYN Cookie Sent; 'dst_udp_filter_action_default_pass': UDP Filter Action Default Pass; 'dst_tcp_filter_match': TCP Filter Match; 'dst_tcp_filter_not_match': TCP Filter Not Matched on Pkt; 'dst_tcp_filter_action_blacklist': TCP Filter Action Blacklist; 'dst_tcp_filter_action_drop': TCP Filter Action Drop; 'dst_tcp_filter_action_default_pass': TCP Filter Action Default Pass; 'dst_udp_filter_action_whitelist': UDP Filter Action WL; 'dst_over_limit_on': DST overlimit Trigger ON; 'dst_over_limit_off': DST overlimit Trigger OFF; 'dst_port_over_limit_on': DST port overlimit Trigger ON; 'dst_port_over_limit_off': DST port overlimit Trigger OFF; 'dst_over_limit_action': DST overlimit action; 'dst_port_over_limit_action': DST port overlimit action; 'scanning_detected_drop': Scanning Detected drop (deprecated); 'scanning_detected_blacklist': Scanning Detected blacklist (deprecated); 'dst_udp_kibit_rate_drop': UDP Dst L4-Type Rate: KiBit Exceeded; 'dst_tcp_kibit_rate_drop': TCP Dst L4-Type Rate: KiBit Exceeded; 'dst_icmp_kibit_rate_drop': ICMP Dst Rate: KiBit Exceeded; 'dst_other_kibit_rate_drop': OTHER Dst L4-Type Rate: KiBit Exceeded; 'dst_port_undef_drop': Dst Port Undefined Dropped; 'dst_port_bl': Dst Port Blacklist Packets Dropped; 'dst_src_port_bl': Dst SrcPort Blacklist Packets Dropped; 'dst_port_kbit_rate_exceed': Port Rate: KiBit Exceeded; 'dst_tcp_src_drop': TCP Src Packets Dropped; 'dst_udp_src_drop': UDP Src Packets Dropped; 'dst_icmp_src_drop': ICMP Src Packets Dropped; 'dst_other_src_drop': OTHER Src Packets Dropped; 'tcp_syn_rcvd': TCP Inbound SYN Received; 'tcp_syn_ack_rcvd': TCP SYN ACK Received; 'tcp_ack_rcvd': TCP ACK Received; 'tcp_fin_rcvd': TCP FIN Received; 'tcp_rst_rcvd': TCP RST Received; 'ingress_bytes': Inbound: Bytes Received; 'egress_bytes': Outbound: Bytes Received; 'ingress_packets': Inbound: Packets Received; 'egress_packets': Outbound: Packets Received; 'tcp_fwd_recv': TCP Inbound Packets Received; 'udp_fwd_recv': UDP Inbound Packets Received; 'icmp_fwd_recv': ICMP Inbound Packets Received; 'tcp_syn_cookie_fail': TCP Auth: SYN Cookie Failed; 'dst_tcp_session_created': TCP Sessions Created; 'dst_udp_session_created': UDP Sessions Created; 'dst_tcp_filter_action_whitelist': TCP Filter Action WL; 'dst_other_filter_match': OTHER Filter Match; 'dst_other_filter_not_match': OTHER Filter Not Matched on Pkt; 'dst_other_filter_action_blacklist': OTHER Filter Action Blacklist; 'dst_other_filter_action_drop': OTHER Filter Action Drop; 'dst_other_filter_action_whitelist': OTHER Filter Action WL; 'dst_other_filter_action_default_pass': OTHER Filter Action Default Pass; 'dst_blackhole_inject': Dst Blackhole Inject; 'dst_blackhole_withdraw': Dst Blackhole Withdraw; 'dst_tcp_out_of_seq_excd': TCP Out-Of-Seq Exceeded; 'dst_tcp_retransmit_excd': TCP Retransmit Exceeded; 'dst_tcp_zero_window_excd': TCP Zero-Window Exceeded; 'dst_tcp_conn_prate_excd': TCP Rate: Conn Pkt Exceeded; 'dst_tcp_action_on_ack_init': TCP Auth: ACK Retry Init; 'dst_tcp_action_on_ack_gap_drop': TCP Auth: ACK Retry Retry-Gap Dropped; 'dst_tcp_action_on_ack_fail': TCP Auth: ACK Retry Dropped; 'dst_tcp_action_on_ack_pass': TCP Auth: ACK Retry Passed; 'dst_tcp_action_on_syn_init': TCP Auth: SYN Retry Init; 'dst_tcp_action_on_syn_gap_drop': TCP Auth: SYN Retry-Gap Dropped; 'dst_tcp_action_on_syn_fail': TCP Auth: SYN Retry Dropped; 'dst_tcp_action_on_syn_pass': TCP Auth: SYN Retry Passed; 'udp_payload_too_small': UDP Payload Too Small; 'udp_payload_too_big': UDP Payload Too Large; 'dst_udp_conn_prate_excd': UDP Rate: Conn Pkt Exceeded; 'dst_udp_ntp_monlist_req': UDP NTP Monlist Request; 'dst_udp_ntp_monlist_resp': UDP NTP Monlist Response; 'dst_udp_wellknown_sport_drop': UDP SrcPort Wellknown; 'dst_udp_retry_init': UDP Auth: Retry Init; 'dst_udp_retry_pass': UDP Auth: Retry Passed; 'dst_tcp_bytes_drop': TCP Total Bytes Dropped; 'dst_udp_bytes_drop': UDP Total Bytes Dropped; 'dst_icmp_bytes_drop': ICMP Total Bytes Dropped; 'dst_other_bytes_drop': OTHER Total Bytes Dropped; 'dst_out_no_route': Dst IPv4/v6 Out No Route; 'outbound_bytes_sent': Outbound: Bytes Forwarded; 'outbound_pkt_drop': Outbound: Packets Dropped; 'outbound_bytes_drop': Outbound: Bytes Dropped; 'outbound_pkt_sent': Outbound: Packets Forwarded; 'inbound_bytes_sent': Inbound: Bytes Forwarded; 'inbound_bytes_drop': Inbound: Bytes Dropped; 'dst_src_port_pkt_rate_exceed': SrcPort Rate: Packet Exceeded; 'dst_src_port_kbit_rate_exceed': SrcPort Rate: KiBit Exceeded; 'dst_src_port_conn_limit_exceed': SrcPort Limit: Conn Exceeded; 'dst_src_port_conn_rate_exceed': SrcPort Rate: Conn Exceeded; 'dst_ip_proto_pkt_rate_exceed': IP-Proto Rate: Packet Exceeded; 'dst_ip_proto_kbit_rate_exceed': IP-Proto Rate: KiBit Exceeded; 'dst_tcp_port_any_exceed': TCP Port Rate: Total Exceed; 'dst_udp_port_any_exceed': UDP Port Rate: Total Exceed; 'dst_tcp_auth_pass': TCP Auth: SYN Auth Passed; 'dst_tcp_rst_cookie_fail': TCP Auth: RST Cookie Failed; 'dst_tcp_unauth_drop': TCP Auth: Unauth Dropped; 'src_tcp_syn_auth_fail': Src TCP Auth: SYN Auth Failed; 'src_tcp_syn_cookie_sent': Src TCP Auth: SYN Cookie Sent; 'src_tcp_syn_cookie_fail': Src TCP Auth: SYN Cookie Failed; 'src_tcp_rst_cookie_fail': Src TCP Auth: RST Cookie Failed; 'src_tcp_unauth_drop': Src TCP Auth: Unauth Dropped; 'src_tcp_action_on_syn_init': Src TCP Auth: SYN Retry Init;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_dynamic_entry#counters1 DdosDstDynamicEntry#counters1}
  */
  readonly counters1?: string;
  /**
  * 'src_tcp_action_on_syn_gap_drop': Src TCP Auth: SYN Retry-Gap Dropped; 'src_tcp_action_on_syn_fail': Src TCP Auth: SYN Retry Dropped; 'src_tcp_action_on_ack_init': Src TCP Auth: ACK Retry Init; 'src_tcp_action_on_ack_gap_drop': Src TCP Auth: ACK Retry Retry-Gap Dropped; 'src_tcp_action_on_ack_fail': Src TCP Auth: ACK Retry Dropped; 'src_tcp_out_of_seq_excd': Src TCP Out-Of-Seq Exceeded; 'src_tcp_retransmit_excd': Src TCP Retransmit Exceeded; 'src_tcp_zero_window_excd': Src TCP Zero-Window Exceeded; 'src_tcp_conn_prate_excd': Src TCP Rate: Conn Pkt Exceeded; 'src_udp_min_payload': Src UDP Payload Too Small; 'src_udp_max_payload': Src UDP Payload Too Large; 'src_udp_conn_prate_excd': Src UDP Rate: Conn Pkt Exceeded; 'src_udp_ntp_monlist_req': Src UDP NTP Monlist Request; 'src_udp_ntp_monlist_resp': Src UDP NTP Monlist Response; 'src_udp_wellknown_sport_drop': Src UDP SrcPort Wellknown; 'src_udp_retry_init': Src UDP Auth: Retry Init; 'dst_udp_retry_gap_drop': UDP Auth: Retry-Gap Dropped; 'dst_udp_retry_fail': UDP P Sessions Aged; 'dst_tcp_session_aged': TCP Sessions Aged; 'dst_udp_session_aged': UDP Sessions Aged; 'dst_tcp_conn_close': TCP Connections Closed; 'dst_tcp_conn_close_half_open': TCP Half Open Connections Closed; 'dst_l4_tcp_auth': TCP Dst L4-Type Auth: SYN Cookie Sent; 'tcp_l4_syn_cookie_fail': TCP Dst L4-Type Auth: SYN Cookie Failed; 'tcp_l4_rst_cookie_fail': TCP Dst L4-Type Auth: RST Cookie Failed; 'tcp_l4_unauth_drop': TCP Dst L4-Type Auth: Unauth Dropped; 'dst_drop_frag_pkt': Dst Fragmented Packets Dropped; 'src_tcp_filter_action_blacklist': Src TCP Filter Action Blacklist; 'src_tcp_filter_action_whitelist': Src TCP Filter Action WL; 'src_tcp_filter_action_drop': Src TCP Filter Action Drop; 'src_tcp_filter_action_default_pass': Src TCP Filter Action Default Pass; 'src_udp_filter_action_blacklist': Src UDP Filter Action Blacklist; 'src_udp_filter_action_whitelist': Src UDP Filter Action WL; 'src_udp_filter_action_drop': Src UDP Filter Action Drop; 'src_udp_filter_action_default_pass': Src UDP Filter Action Default Pass; 'src_other_filter_action_blacklist': Src OTHER Filter Action Blacklist; 'src_other_filter_action_whitelist': Src OTHER Filter Action WL; 'src_other_filter_action_drop': Src OTHER Filter Action Drop; 'src_other_filter_action_default_pass': Src OTHER Filter Action Default Pass; 'tcp_invalid_syn': TCP Invalid SYN Received; 'dst_tcp_conn_close_w_rst': TCP RST Connections Closed; 'dst_tcp_conn_close_w_fin': TCP FIN Connections Closed; 'dst_tcp_conn_close_w_idle': TCP Idle Connections Closed; 'dst_tcp_conn_create_from_syn': TCP Connections Created From SYN; 'dst_tcp_conn_create_from_ack': TCP Connections Created From ACK; 'src_frag_drop': Src Fragmented Packets Dropped; 'dst_l4_tcp_blacklist_drop': Dst L4-type TCP Blacklist Dropped; 'dst_l4_udp_blacklist_drop': Dst L4-type UDP Blacklist Dropped; 'dst_l4_icmp_blacklist_drop': No Policy Class-list Match; 'dst_l4_other_blacklist_drop': Dst L4-type OTHER Blacklist Dropped; 'src_l4_tcp_blacklist_drop': Src L4-type TCP Blacklist Dropped; 'src_l4_udp_blacklist_drop': Src L4-type UDP Blacklist Dropped; 'src_l4_icmp_blacklist_drop': Src L4-type ICMP Blacklist Dropped; 'src_l4_other_blacklist_drop': Src L4-type OTHER Blacklist Dropped; 'drop_frag_timeout_drop': Fragment Reassemble Timeout Drop; 'dst_port_kbit_rate_exceed_pkt': Port Rate: KiBit Pkt Exceeded; 'dst_tcp_bytes_rcv': TCP Total Bytes Received; 'dst_udp_bytes_rcv': UDP Total Bytes Received; 'dst_icmp_bytes_rcv': ICMP Total Bytes Received; 'dst_other_bytes_rcv': OTHER Total Bytes Received; 'dst_tcp_bytes_sent': TCP Total Bytes Forwarded; 'dst_udp_bytes_sent': UDP Total Bytes Forwarded; 'dst_icmp_bytes_sent': ICMP Total Bytes Forwarded; 'dst_other_bytes_sent': OTHER Total Bytes Forwarded; 'dst_udp_auth_drop': UDP Auth: Dropped; 'dst_tcp_auth_drop': TCP Auth: Dropped; 'dst_tcp_auth_resp': TCP Auth: Responded; 'inbound_pkt_drop': Inbound: Packets Dropped; 'dst_entry_pkt_rate_exceed': Entry Rate: Packet Exceeded; 'dst_entry_kbit_rate_exceed': Entry Rate: KiBit Exceeded; 'dst_entry_conn_limit_exceed': Entry Limit: Conn Exceeded; 'dst_entry_conn_rate_exceed': Entry Rate: Conn Exceeded; 'dst_entry_frag_pkt_rate_exceed': Entry Rate: Frag Packet Exceeded; 'dst_icmp_any_exceed': ICMP Rate: Total Exceed; 'dst_other_any_exceed': OTHER Rate: Total Exceed; 'src_dst_pair_entry_total': Src-Dst Pair Entry Total Count; 'src_dst_pair_entry_udp': Src-Dst Pair Entry UDP Count; 'src_dst_pair_entry_tcp': Src-Dst Pair Entry TCP Count; 'src_dst_pair_entry_icmp': Src-Dst Pair Entry ICMP Count; 'src_dst_pair_entry_other': Src-Dst Pair Entry OTHER Count; 'dst_clist_overflow_policy_at_learning': Dst Src-Based Overflow Policy Hit; 'tcp_rexmit_syn_limit_drop': TCP SYN Retransmit Exceeded Drop; 'tcp_rexmit_syn_limit_bl': TCP SYN Retransmit Exceeded Blacklist; 'dst_tcp_wellknown_sport_drop': TCP SrcPort Wellknown; 'src_tcp_wellknown_sport_drop': Src TCP SrcPort Wellknown; 'dst_frag_rcvd': Fragmented Packets Received; 'no_policy_class_list_match': No Policy Class-list Match; 'src_udp_retry_gap_drop': Src UDP Auth: Retry-Gap Dropped; 'dst_entry_kbit_rate_exceed_count': Entry Rate: KiBit Exceeded Count; 'dst_port_undef_hit': Dst Port Undefined Hit; 'dst_tcp_action_on_ack_timeout': TCP Auth: ACK Retry Timeout; 'dst_tcp_action_on_ack_reset': TCP Auth: ACK Retry Timeout Reset; 'dst_tcp_action_on_ack_blacklist': TCP Auth: ACK Retry Timeout Blacklisted; 'src_tcp_action_on_ack_timeout': Src TCP Auth: ACK Retry Timeout; 'src_tcp_action_on_ack_reset': Src TCP Auth: ACK Retry Timeout Reset; 'src_tcp_action_on_ack_blacklist': Src TCP Auth: ACK Retry Timeout Blacklisted; 'dst_tcp_action_on_syn_timeout': TCP Auth: SYN Retry Timeout; 'dst_tcp_action_on_syn_reset': TCP Auth: SYN Retry Timeout Reset; 'dst_tcp_action_on_syn_blacklist': TCP Auth: SYN Retry Timeout Blacklisted; 'src_tcp_action_on_syn_timeout': Src TCP Auth: SYN Retry Timeout; 'src_tcp_action_on_syn_reset': Src TCP Auth: SYN Retry Timeout Reset; 'src_tcp_action_on_syn_blacklist': Src TCP Auth: SYN Retry Timeout Blacklisted; 'dst_udp_frag_pkt_rate_exceed': UDP Dst L4-Type Rate: Frag Exceeded; 'dst_udp_frag_src_rate_drop': UDP Src Rate: Frag Exceeded; 'dst_tcp_frag_pkt_rate_exceed': TCP Dst L4-Type Rate: Frag Exceeded; 'dst_tcp_frag_src_rate_drop': TCP Src Rate: Frag Exceeded; 'dst_icmp_frag_pkt_rate_exceed': ICMP Dst L4-Type Rate: Frag Exceeded; 'dst_icmp_frag_src_rate_drop': ICMP Src Rate: Frag Exceeded; 'sflow_internal_samples_packed': Sflow Internal Samples Packed; 'sflow_external_samples_packed': Sflow External Samples Packed; 'sflow_internal_packets_sent': Sflow Internal Packets Sent; 'sflow_external_packets_sent': Sflow External Packets Sent; 'dns_outbound_total_query': DNS Outbound Total Query; 'dns_outbound_query_malformed': DNS Outbound Query Malformed; 'dns_outbound_query_resp_chk_failed': DNS Outbound Query Resp Check Failed; 'dns_outbound_query_resp_chk_blacklisted': DNS Outbound Query Resp Check Blacklisted; 'dns_outbound_query_resp_chk_refused_sent': DNS Outbound Query Resp Check REFUSED Sent; 'dns_outbound_query_resp_chk_reset_sent': DNS Outbound Query Resp Check RESET Sent; 'dns_outbound_query_resp_chk_no_resp_sent': DNS Outbound Query Resp Check No Response Sent; 'dns_outbound_query_resp_size_exceed': DNS Outbound Query Response Size Exceed; 'dns_outbound_query_sess_timed_out': DNS Outbound Query Session Timed Out; 'dst_exceed_action_tunnel': Entry Exceed Action: Tunnel; 'src_udp_auth_timeout': Src UDP Auth: Retry Timeout; 'src_udp_retry_pass': Src UDP Retry Passed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_dynamic_entry#counters2 DdosDstDynamicEntry#counters2}
  */
  readonly counters2?: string;
  /**
  * 'dst_hw_drop_rule_insert': Dst Hardware Drop Rules Inserted; 'dst_hw_drop_rule_remove': Dst Hardware Drop Rules Removed; 'src_hw_drop_rule_insert': Src Hardware Drop Rules Inserted; 'src_hw_drop_rule_remove': Src Hardware Drop Rules Removed; 'prog_first_req_time_exceed': Req-Resp: First Request Time Exceed; 'prog_req_resp_time_exceed': Req-Resp: Request to Response Time Exceed; 'prog_request_len_exceed': Req-Resp: Request Length Exceed; 'prog_response_len_exceed': Req-Resp: Response Length Exceed; 'prog_resp_pkt_rate_exceed': Req-Resp: Response Packet Rate Exceed; 'prog_resp_req_time_exceed': Req-Resp: Response to Request Time Exceed; 'entry_sync_message_received': Entry Sync Message Received; 'entry_sync_message_sent': Entry Sync Message Sent; 'prog_conn_sent_exceed': Connection: Sent Exceed; 'prog_conn_rcvd_exceed': Connection: Received Exceed; 'prog_conn_time_exceed': Connection: Time Exceed; 'prog_conn_rcvd_sent_ratio_exceed': Connection: Reveived to Sent Ratio Exceed; 'prog_win_sent_exceed': Time Window: Sent Exceed; 'prog_win_rcvd_exceed': Time Window: Received Exceed; 'prog_win_rcvd_sent_ratio_exceed': Time Window: Received to Sent Exceed; 'prog_exceed_drop': Req-Resp: Violation Exceed Dropped; 'prog_exceed_bl': Req-Resp: Violation Exceed Blacklisted; 'prog_conn_exceed_drop': Connection: Violation Exceed Dropped; 'prog_conn_exceed_bl': Connection: Violation Exceed Blacklisted; 'prog_win_exceed_drop': Time Window: Violation Exceed Dropped; 'prog_win_exceed_bl': Time Window: Violation Exceed Blacklisted; 'dst_exceed_action_drop': Entry Exceed Action: Dropped; 'src_hw_drop': Src Hardware Packets Dropped; 'dst_tcp_auth_rst': TCP Auth: Reset; 'dst_src_learn_overflow': Src Dynamic Entry Count Overflow; 'tcp_fwd_sent': TCP Inbound Packets Forwarded; 'udp_fwd_sent': UDP Inbound Packets Forwarded; 'prog_query_exceed': Req-Resp: Client Query Time Exceed; 'prog_think_exceed': Req-Resp: Server Think Time Exceed;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_dynamic_entry#counters3 DdosDstDynamicEntry#counters3}
  */
  readonly counters3?: string;
}

export function ddosDstDynamicEntryAllEntriesSamplingEnableToTerraform(struct?: DdosDstDynamicEntryAllEntriesSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
    counters2: cdktf.stringToTerraform(struct!.counters2),
    counters3: cdktf.stringToTerraform(struct!.counters3),
  }
}


export function ddosDstDynamicEntryAllEntriesSamplingEnableToHclTerraform(struct?: DdosDstDynamicEntryAllEntriesSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    counters2: {
      value: cdktf.stringToHclTerraform(struct!.counters2),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    counters3: {
      value: cdktf.stringToHclTerraform(struct!.counters3),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstDynamicEntryAllEntriesSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDstDynamicEntryAllEntriesSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    if (this._counters2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters2 = this._counters2;
    }
    if (this._counters3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters3 = this._counters3;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstDynamicEntryAllEntriesSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
      this._counters2 = undefined;
      this._counters3 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
      this._counters2 = value.counters2;
      this._counters3 = value.counters3;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }

  // counters2 - computed: false, optional: true, required: false
  private _counters2?: string; 
  public get counters2() {
    return this.getStringAttribute('counters2');
  }
  public set counters2(value: string) {
    this._counters2 = value;
  }
  public resetCounters2() {
    this._counters2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters2Input() {
    return this._counters2;
  }

  // counters3 - computed: false, optional: true, required: false
  private _counters3?: string; 
  public get counters3() {
    return this.getStringAttribute('counters3');
  }
  public set counters3(value: string) {
    this._counters3 = value;
  }
  public resetCounters3() {
    this._counters3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters3Input() {
    return this._counters3;
  }
}

export class DdosDstDynamicEntryAllEntriesSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : DdosDstDynamicEntryAllEntriesSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): DdosDstDynamicEntryAllEntriesSamplingEnableOutputReference {
    return new DdosDstDynamicEntryAllEntriesSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDstDynamicEntryAllEntries {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_dynamic_entry#uuid DdosDstDynamicEntry#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_dynamic_entry#sampling_enable DdosDstDynamicEntry#sampling_enable}
  */
  readonly samplingEnable?: DdosDstDynamicEntryAllEntriesSamplingEnable[] | cdktf.IResolvable;
}

export function ddosDstDynamicEntryAllEntriesToTerraform(struct?: DdosDstDynamicEntryAllEntriesOutputReference | DdosDstDynamicEntryAllEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(ddosDstDynamicEntryAllEntriesSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function ddosDstDynamicEntryAllEntriesToHclTerraform(struct?: DdosDstDynamicEntryAllEntriesOutputReference | DdosDstDynamicEntryAllEntries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(ddosDstDynamicEntryAllEntriesSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDstDynamicEntryAllEntriesSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDstDynamicEntryAllEntriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDstDynamicEntryAllEntries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDstDynamicEntryAllEntries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new DdosDstDynamicEntryAllEntriesSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: DdosDstDynamicEntryAllEntriesSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_dynamic_entry thunder_ddos_dst_dynamic_entry}
*/
export class DdosDstDynamicEntry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_dynamic_entry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDstDynamicEntry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDstDynamicEntry to import
  * @param importFromId The id of the existing DdosDstDynamicEntry that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_dynamic_entry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDstDynamicEntry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_dynamic_entry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_dst_dynamic_entry thunder_ddos_dst_dynamic_entry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDstDynamicEntryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DdosDstDynamicEntryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_dynamic_entry',
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
    this._uuid = config.uuid;
    this._allEntries.internalValue = config.allEntries;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // all_entries - computed: false, optional: true, required: false
  private _allEntries = new DdosDstDynamicEntryAllEntriesOutputReference(this, "all_entries");
  public get allEntries() {
    return this._allEntries;
  }
  public putAllEntries(value: DdosDstDynamicEntryAllEntries) {
    this._allEntries.internalValue = value;
  }
  public resetAllEntries() {
    this._allEntries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allEntriesInput() {
    return this._allEntries.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      all_entries: ddosDstDynamicEntryAllEntriesToTerraform(this._allEntries.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      all_entries: {
        value: ddosDstDynamicEntryAllEntriesToHclTerraform(this._allEntries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDstDynamicEntryAllEntriesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
