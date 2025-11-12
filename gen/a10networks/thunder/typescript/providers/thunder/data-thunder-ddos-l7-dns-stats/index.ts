// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosL7DnsStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#id DataThunderDdosL7DnsStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#stats DataThunderDdosL7DnsStats#stats}
  */
  readonly stats?: DataThunderDdosL7DnsStatsStats;
}
export interface DataThunderDdosL7DnsStatsStats {
  /**
  * DNS Auth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_auth_drop DataThunderDdosL7DnsStats#dns_auth_drop}
  */
  readonly dnsAuthDrop?: number;
  /**
  * DNS Auth Responded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_auth_resp DataThunderDdosL7DnsStats#dns_auth_resp}
  */
  readonly dnsAuthResp?: number;
  /**
  * DNS Auth UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_auth_udp DataThunderDdosL7DnsStats#dns_auth_udp}
  */
  readonly dnsAuthUdp?: number;
  /**
  * DNS Auth UDP Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_auth_udp_fail DataThunderDdosL7DnsStats#dns_auth_udp_fail}
  */
  readonly dnsAuthUdpFail?: number;
  /**
  * DNS Auth UDP Fail Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_auth_udp_fail_bl DataThunderDdosL7DnsStats#dns_auth_udp_fail_bl}
  */
  readonly dnsAuthUdpFailBl?: number;
  /**
  * DNS Auth UDP Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_auth_udp_pass DataThunderDdosL7DnsStats#dns_auth_udp_pass}
  */
  readonly dnsAuthUdpPass?: number;
  /**
  * DNS Auth UDP Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_auth_udp_timeout DataThunderDdosL7DnsStats#dns_auth_udp_timeout}
  */
  readonly dnsAuthUdpTimeout?: number;
  /**
  * DNS Domain Group Action Deny
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_dg_action_deny DataThunderDdosL7DnsStats#dns_dg_action_deny}
  */
  readonly dnsDgActionDeny?: number;
  /**
  * DNS Domain Group Action Permit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_dg_action_permit DataThunderDdosL7DnsStats#dns_dg_action_permit}
  */
  readonly dnsDgActionPermit?: number;
  /**
  * DNS Domain Group Domain Query Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_dg_rate_exceed DataThunderDdosL7DnsStats#dns_dg_rate_exceed}
  */
  readonly dnsDgRateExceed?: number;
  /**
  * FQDN Label Count Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_fqdn_label_count_exceed DataThunderDdosL7DnsStats#dns_fqdn_label_count_exceed}
  */
  readonly dnsFqdnLabelCountExceed?: number;
  /**
  * FQDN Label Length Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_fqdn_label_len_exceed DataThunderDdosL7DnsStats#dns_fqdn_label_len_exceed}
  */
  readonly dnsFqdnLabelLenExceed?: number;
  /**
  * FQDN Rate by Label Count Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_fqdn_rate_by_label_count_exceed DataThunderDdosL7DnsStats#dns_fqdn_rate_by_label_count_exceed}
  */
  readonly dnsFqdnRateByLabelCountExceed?: number;
  /**
  * FQDN Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_fqdn_stage2_exceed DataThunderDdosL7DnsStats#dns_fqdn_stage2_exceed}
  */
  readonly dnsFqdnStage2Exceed?: number;
  /**
  * NXDOMAIN Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_is_nx DataThunderDdosL7DnsStats#dns_is_nx}
  */
  readonly dnsIsNx?: number;
  /**
  * DNS Malform Query Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_malform_drop DataThunderDdosL7DnsStats#dns_malform_drop}
  */
  readonly dnsMalformDrop?: number;
  /**
  * NXDOMAIN Query Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_nx_bl DataThunderDdosL7DnsStats#dns_nx_bl}
  */
  readonly dnsNxBl?: number;
  /**
  * NXDOMAIN Query Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_nx_drop DataThunderDdosL7DnsStats#dns_nx_drop}
  */
  readonly dnsNxDrop?: number;
  /**
  * NXDOMAIN Response Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_nx_exceed DataThunderDdosL7DnsStats#dns_nx_exceed}
  */
  readonly dnsNxExceed?: number;
  /**
  * DNS Outbound Query Resp Size Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_outbound_query_response_size_exceed DataThunderDdosL7DnsStats#dns_outbound_query_response_size_exceed}
  */
  readonly dnsOutboundQueryResponseSizeExceed?: number;
  /**
  * DNS Outbound Query Session Timed Out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_outbound_query_sess_timed_out DataThunderDdosL7DnsStats#dns_outbound_query_sess_timed_out}
  */
  readonly dnsOutboundQuerySessTimedOut?: number;
  /**
  * DNS Packets Processed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_pkt_processed DataThunderDdosL7DnsStats#dns_pkt_processed}
  */
  readonly dnsPktProcessed?: number;
  /**
  * DNS Policy Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_policy_drop DataThunderDdosL7DnsStats#dns_policy_drop}
  */
  readonly dnsPolicyDrop?: number;
  /**
  * DNS Query ANY Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_qry_any_drop DataThunderDdosL7DnsStats#dns_qry_any_drop}
  */
  readonly dnsQryAnyDrop?: number;
  /**
  * DNS Query Class ANY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_query_class_any DataThunderDdosL7DnsStats#dns_query_class_any}
  */
  readonly dnsQueryClassAny?: number;
  /**
  * DNS Query Class CHAOS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_query_class_chaos DataThunderDdosL7DnsStats#dns_query_class_chaos}
  */
  readonly dnsQueryClassChaos?: number;
  /**
  * DNS Query Class CSNET
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_query_class_csnet DataThunderDdosL7DnsStats#dns_query_class_csnet}
  */
  readonly dnsQueryClassCsnet?: number;
  /**
  * DNS Query Class HESIOD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_query_class_hs DataThunderDdosL7DnsStats#dns_query_class_hs}
  */
  readonly dnsQueryClassHs?: number;
  /**
  * DNS Query Class INTERNET
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_query_class_in DataThunderDdosL7DnsStats#dns_query_class_in}
  */
  readonly dnsQueryClassIn?: number;
  /**
  * DNS Query Class NONE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_query_class_none DataThunderDdosL7DnsStats#dns_query_class_none}
  */
  readonly dnsQueryClassNone?: number;
  /**
  * DNS Query Class Whitelist Miss
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_query_class_whitelist_miss DataThunderDdosL7DnsStats#dns_query_class_whitelist_miss}
  */
  readonly dnsQueryClassWhitelistMiss?: number;
  /**
  * DNS Query Type A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_query_type_a DataThunderDdosL7DnsStats#dns_query_type_a}
  */
  readonly dnsQueryTypeA?: number;
  /**
  * DNS Query Type AAAA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_query_type_aaaa DataThunderDdosL7DnsStats#dns_query_type_aaaa}
  */
  readonly dnsQueryTypeAaaa?: number;
  /**
  * DNS Query Type ANY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_query_type_any DataThunderDdosL7DnsStats#dns_query_type_any}
  */
  readonly dnsQueryTypeAny?: number;
  /**
  * DNS Query Type CNAME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_query_type_cname DataThunderDdosL7DnsStats#dns_query_type_cname}
  */
  readonly dnsQueryTypeCname?: number;
  /**
  * DNS Query Type MX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_query_type_mx DataThunderDdosL7DnsStats#dns_query_type_mx}
  */
  readonly dnsQueryTypeMx?: number;
  /**
  * DNS Query Type NS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_query_type_ns DataThunderDdosL7DnsStats#dns_query_type_ns}
  */
  readonly dnsQueryTypeNs?: number;
  /**
  * DNS Query Type OPT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_query_type_opt DataThunderDdosL7DnsStats#dns_query_type_opt}
  */
  readonly dnsQueryTypeOpt?: number;
  /**
  * DNS Query Type SOA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_query_type_soa DataThunderDdosL7DnsStats#dns_query_type_soa}
  */
  readonly dnsQueryTypeSoa?: number;
  /**
  * DNS Query Type SRV
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_query_type_srv DataThunderDdosL7DnsStats#dns_query_type_srv}
  */
  readonly dnsQueryTypeSrv?: number;
  /**
  * DNS Record Type Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_rrtype_drop DataThunderDdosL7DnsStats#dns_rrtype_drop}
  */
  readonly dnsRrtypeDrop?: number;
  /**
  * DNS Auth Force-TCP Passed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_tcp_auth_pass DataThunderDdosL7DnsStats#dns_tcp_auth_pass}
  */
  readonly dnsTcpAuthPass?: number;
  /**
  * DNS Auth UDP Retry-Gap Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dns_udp_auth_retry_gap_drop DataThunderDdosL7DnsStats#dns_udp_auth_retry_gap_drop}
  */
  readonly dnsUdpAuthRetryGapDrop?: number;
  /**
  * Dst Request Rate 1 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dst_rate_limit0 DataThunderDdosL7DnsStats#dst_rate_limit0}
  */
  readonly dstRateLimit0?: number;
  /**
  * Dst Request Rate 2 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dst_rate_limit1 DataThunderDdosL7DnsStats#dst_rate_limit1}
  */
  readonly dstRateLimit1?: number;
  /**
  * Dst Request Rate 3 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dst_rate_limit2 DataThunderDdosL7DnsStats#dst_rate_limit2}
  */
  readonly dstRateLimit2?: number;
  /**
  * Dst Request Rate 4 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dst_rate_limit3 DataThunderDdosL7DnsStats#dst_rate_limit3}
  */
  readonly dstRateLimit3?: number;
  /**
  * Dst Request Rate 5 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#dst_rate_limit4 DataThunderDdosL7DnsStats#dst_rate_limit4}
  */
  readonly dstRateLimit4?: number;
  /**
  * DNS Auth Force-TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#force_tcp_auth DataThunderDdosL7DnsStats#force_tcp_auth}
  */
  readonly forceTcpAuth?: number;
  /**
  * DNS Auth Force-TCP With UDP Auth Connection Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#force_tcp_auth_conn_hit DataThunderDdosL7DnsStats#force_tcp_auth_conn_hit}
  */
  readonly forceTcpAuthConnHit?: number;
  /**
  * DNS Auth Force-TCP With UDP Auth Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#force_tcp_auth_timeout DataThunderDdosL7DnsStats#force_tcp_auth_timeout}
  */
  readonly forceTcpAuthTimeout?: number;
  /**
  * DNS Non Query Opcode Pass Through
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#non_query_opcode_pass_through DataThunderDdosL7DnsStats#non_query_opcode_pass_through}
  */
  readonly nonQueryOpcodePassThrough?: number;
  /**
  * Src Request Rate 1 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#src_rate_limit0 DataThunderDdosL7DnsStats#src_rate_limit0}
  */
  readonly srcRateLimit0?: number;
  /**
  * Src Request Rate 2 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#src_rate_limit1 DataThunderDdosL7DnsStats#src_rate_limit1}
  */
  readonly srcRateLimit1?: number;
  /**
  * Src Request Rate 3 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#src_rate_limit2 DataThunderDdosL7DnsStats#src_rate_limit2}
  */
  readonly srcRateLimit2?: number;
  /**
  * Src Request Rate 4 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#src_rate_limit3 DataThunderDdosL7DnsStats#src_rate_limit3}
  */
  readonly srcRateLimit3?: number;
  /**
  * Src Request Rate 5 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#src_rate_limit4 DataThunderDdosL7DnsStats#src_rate_limit4}
  */
  readonly srcRateLimit4?: number;
}

export function dataThunderDdosL7DnsStatsStatsToTerraform(struct?: DataThunderDdosL7DnsStatsStatsOutputReference | DataThunderDdosL7DnsStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_auth_drop: cdktf.numberToTerraform(struct!.dnsAuthDrop),
    dns_auth_resp: cdktf.numberToTerraform(struct!.dnsAuthResp),
    dns_auth_udp: cdktf.numberToTerraform(struct!.dnsAuthUdp),
    dns_auth_udp_fail: cdktf.numberToTerraform(struct!.dnsAuthUdpFail),
    dns_auth_udp_fail_bl: cdktf.numberToTerraform(struct!.dnsAuthUdpFailBl),
    dns_auth_udp_pass: cdktf.numberToTerraform(struct!.dnsAuthUdpPass),
    dns_auth_udp_timeout: cdktf.numberToTerraform(struct!.dnsAuthUdpTimeout),
    dns_dg_action_deny: cdktf.numberToTerraform(struct!.dnsDgActionDeny),
    dns_dg_action_permit: cdktf.numberToTerraform(struct!.dnsDgActionPermit),
    dns_dg_rate_exceed: cdktf.numberToTerraform(struct!.dnsDgRateExceed),
    dns_fqdn_label_count_exceed: cdktf.numberToTerraform(struct!.dnsFqdnLabelCountExceed),
    dns_fqdn_label_len_exceed: cdktf.numberToTerraform(struct!.dnsFqdnLabelLenExceed),
    dns_fqdn_rate_by_label_count_exceed: cdktf.numberToTerraform(struct!.dnsFqdnRateByLabelCountExceed),
    dns_fqdn_stage2_exceed: cdktf.numberToTerraform(struct!.dnsFqdnStage2Exceed),
    dns_is_nx: cdktf.numberToTerraform(struct!.dnsIsNx),
    dns_malform_drop: cdktf.numberToTerraform(struct!.dnsMalformDrop),
    dns_nx_bl: cdktf.numberToTerraform(struct!.dnsNxBl),
    dns_nx_drop: cdktf.numberToTerraform(struct!.dnsNxDrop),
    dns_nx_exceed: cdktf.numberToTerraform(struct!.dnsNxExceed),
    dns_outbound_query_response_size_exceed: cdktf.numberToTerraform(struct!.dnsOutboundQueryResponseSizeExceed),
    dns_outbound_query_sess_timed_out: cdktf.numberToTerraform(struct!.dnsOutboundQuerySessTimedOut),
    dns_pkt_processed: cdktf.numberToTerraform(struct!.dnsPktProcessed),
    dns_policy_drop: cdktf.numberToTerraform(struct!.dnsPolicyDrop),
    dns_qry_any_drop: cdktf.numberToTerraform(struct!.dnsQryAnyDrop),
    dns_query_class_any: cdktf.numberToTerraform(struct!.dnsQueryClassAny),
    dns_query_class_chaos: cdktf.numberToTerraform(struct!.dnsQueryClassChaos),
    dns_query_class_csnet: cdktf.numberToTerraform(struct!.dnsQueryClassCsnet),
    dns_query_class_hs: cdktf.numberToTerraform(struct!.dnsQueryClassHs),
    dns_query_class_in: cdktf.numberToTerraform(struct!.dnsQueryClassIn),
    dns_query_class_none: cdktf.numberToTerraform(struct!.dnsQueryClassNone),
    dns_query_class_whitelist_miss: cdktf.numberToTerraform(struct!.dnsQueryClassWhitelistMiss),
    dns_query_type_a: cdktf.numberToTerraform(struct!.dnsQueryTypeA),
    dns_query_type_aaaa: cdktf.numberToTerraform(struct!.dnsQueryTypeAaaa),
    dns_query_type_any: cdktf.numberToTerraform(struct!.dnsQueryTypeAny),
    dns_query_type_cname: cdktf.numberToTerraform(struct!.dnsQueryTypeCname),
    dns_query_type_mx: cdktf.numberToTerraform(struct!.dnsQueryTypeMx),
    dns_query_type_ns: cdktf.numberToTerraform(struct!.dnsQueryTypeNs),
    dns_query_type_opt: cdktf.numberToTerraform(struct!.dnsQueryTypeOpt),
    dns_query_type_soa: cdktf.numberToTerraform(struct!.dnsQueryTypeSoa),
    dns_query_type_srv: cdktf.numberToTerraform(struct!.dnsQueryTypeSrv),
    dns_rrtype_drop: cdktf.numberToTerraform(struct!.dnsRrtypeDrop),
    dns_tcp_auth_pass: cdktf.numberToTerraform(struct!.dnsTcpAuthPass),
    dns_udp_auth_retry_gap_drop: cdktf.numberToTerraform(struct!.dnsUdpAuthRetryGapDrop),
    dst_rate_limit0: cdktf.numberToTerraform(struct!.dstRateLimit0),
    dst_rate_limit1: cdktf.numberToTerraform(struct!.dstRateLimit1),
    dst_rate_limit2: cdktf.numberToTerraform(struct!.dstRateLimit2),
    dst_rate_limit3: cdktf.numberToTerraform(struct!.dstRateLimit3),
    dst_rate_limit4: cdktf.numberToTerraform(struct!.dstRateLimit4),
    force_tcp_auth: cdktf.numberToTerraform(struct!.forceTcpAuth),
    force_tcp_auth_conn_hit: cdktf.numberToTerraform(struct!.forceTcpAuthConnHit),
    force_tcp_auth_timeout: cdktf.numberToTerraform(struct!.forceTcpAuthTimeout),
    non_query_opcode_pass_through: cdktf.numberToTerraform(struct!.nonQueryOpcodePassThrough),
    src_rate_limit0: cdktf.numberToTerraform(struct!.srcRateLimit0),
    src_rate_limit1: cdktf.numberToTerraform(struct!.srcRateLimit1),
    src_rate_limit2: cdktf.numberToTerraform(struct!.srcRateLimit2),
    src_rate_limit3: cdktf.numberToTerraform(struct!.srcRateLimit3),
    src_rate_limit4: cdktf.numberToTerraform(struct!.srcRateLimit4),
  }
}


export function dataThunderDdosL7DnsStatsStatsToHclTerraform(struct?: DataThunderDdosL7DnsStatsStatsOutputReference | DataThunderDdosL7DnsStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_auth_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsAuthDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_auth_resp: {
      value: cdktf.numberToHclTerraform(struct!.dnsAuthResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_auth_udp: {
      value: cdktf.numberToHclTerraform(struct!.dnsAuthUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_auth_udp_fail: {
      value: cdktf.numberToHclTerraform(struct!.dnsAuthUdpFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_auth_udp_fail_bl: {
      value: cdktf.numberToHclTerraform(struct!.dnsAuthUdpFailBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_auth_udp_pass: {
      value: cdktf.numberToHclTerraform(struct!.dnsAuthUdpPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_auth_udp_timeout: {
      value: cdktf.numberToHclTerraform(struct!.dnsAuthUdpTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_dg_action_deny: {
      value: cdktf.numberToHclTerraform(struct!.dnsDgActionDeny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_dg_action_permit: {
      value: cdktf.numberToHclTerraform(struct!.dnsDgActionPermit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_dg_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dnsDgRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_fqdn_label_count_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dnsFqdnLabelCountExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_fqdn_label_len_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dnsFqdnLabelLenExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_fqdn_rate_by_label_count_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dnsFqdnRateByLabelCountExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_fqdn_stage2_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dnsFqdnStage2Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_is_nx: {
      value: cdktf.numberToHclTerraform(struct!.dnsIsNx),
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
    dns_nx_bl: {
      value: cdktf.numberToHclTerraform(struct!.dnsNxBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_nx_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsNxDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_nx_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dnsNxExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_outbound_query_response_size_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dnsOutboundQueryResponseSizeExceed),
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
    dns_pkt_processed: {
      value: cdktf.numberToHclTerraform(struct!.dnsPktProcessed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_policy_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsPolicyDrop),
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
    dns_query_class_any: {
      value: cdktf.numberToHclTerraform(struct!.dnsQueryClassAny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_query_class_chaos: {
      value: cdktf.numberToHclTerraform(struct!.dnsQueryClassChaos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_query_class_csnet: {
      value: cdktf.numberToHclTerraform(struct!.dnsQueryClassCsnet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_query_class_hs: {
      value: cdktf.numberToHclTerraform(struct!.dnsQueryClassHs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_query_class_in: {
      value: cdktf.numberToHclTerraform(struct!.dnsQueryClassIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_query_class_none: {
      value: cdktf.numberToHclTerraform(struct!.dnsQueryClassNone),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_query_class_whitelist_miss: {
      value: cdktf.numberToHclTerraform(struct!.dnsQueryClassWhitelistMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_query_type_a: {
      value: cdktf.numberToHclTerraform(struct!.dnsQueryTypeA),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_query_type_aaaa: {
      value: cdktf.numberToHclTerraform(struct!.dnsQueryTypeAaaa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_query_type_any: {
      value: cdktf.numberToHclTerraform(struct!.dnsQueryTypeAny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_query_type_cname: {
      value: cdktf.numberToHclTerraform(struct!.dnsQueryTypeCname),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_query_type_mx: {
      value: cdktf.numberToHclTerraform(struct!.dnsQueryTypeMx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_query_type_ns: {
      value: cdktf.numberToHclTerraform(struct!.dnsQueryTypeNs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_query_type_opt: {
      value: cdktf.numberToHclTerraform(struct!.dnsQueryTypeOpt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_query_type_soa: {
      value: cdktf.numberToHclTerraform(struct!.dnsQueryTypeSoa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_query_type_srv: {
      value: cdktf.numberToHclTerraform(struct!.dnsQueryTypeSrv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_rrtype_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsRrtypeDrop),
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
    dns_udp_auth_retry_gap_drop: {
      value: cdktf.numberToHclTerraform(struct!.dnsUdpAuthRetryGapDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_rate_limit0: {
      value: cdktf.numberToHclTerraform(struct!.dstRateLimit0),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_rate_limit1: {
      value: cdktf.numberToHclTerraform(struct!.dstRateLimit1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_rate_limit2: {
      value: cdktf.numberToHclTerraform(struct!.dstRateLimit2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_rate_limit3: {
      value: cdktf.numberToHclTerraform(struct!.dstRateLimit3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_rate_limit4: {
      value: cdktf.numberToHclTerraform(struct!.dstRateLimit4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    force_tcp_auth: {
      value: cdktf.numberToHclTerraform(struct!.forceTcpAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    force_tcp_auth_conn_hit: {
      value: cdktf.numberToHclTerraform(struct!.forceTcpAuthConnHit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    force_tcp_auth_timeout: {
      value: cdktf.numberToHclTerraform(struct!.forceTcpAuthTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    non_query_opcode_pass_through: {
      value: cdktf.numberToHclTerraform(struct!.nonQueryOpcodePassThrough),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_rate_limit0: {
      value: cdktf.numberToHclTerraform(struct!.srcRateLimit0),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_rate_limit1: {
      value: cdktf.numberToHclTerraform(struct!.srcRateLimit1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_rate_limit2: {
      value: cdktf.numberToHclTerraform(struct!.srcRateLimit2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_rate_limit3: {
      value: cdktf.numberToHclTerraform(struct!.srcRateLimit3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_rate_limit4: {
      value: cdktf.numberToHclTerraform(struct!.srcRateLimit4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosL7DnsStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosL7DnsStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsAuthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsAuthDrop = this._dnsAuthDrop;
    }
    if (this._dnsAuthResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsAuthResp = this._dnsAuthResp;
    }
    if (this._dnsAuthUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsAuthUdp = this._dnsAuthUdp;
    }
    if (this._dnsAuthUdpFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsAuthUdpFail = this._dnsAuthUdpFail;
    }
    if (this._dnsAuthUdpFailBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsAuthUdpFailBl = this._dnsAuthUdpFailBl;
    }
    if (this._dnsAuthUdpPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsAuthUdpPass = this._dnsAuthUdpPass;
    }
    if (this._dnsAuthUdpTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsAuthUdpTimeout = this._dnsAuthUdpTimeout;
    }
    if (this._dnsDgActionDeny !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsDgActionDeny = this._dnsDgActionDeny;
    }
    if (this._dnsDgActionPermit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsDgActionPermit = this._dnsDgActionPermit;
    }
    if (this._dnsDgRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsDgRateExceed = this._dnsDgRateExceed;
    }
    if (this._dnsFqdnLabelCountExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFqdnLabelCountExceed = this._dnsFqdnLabelCountExceed;
    }
    if (this._dnsFqdnLabelLenExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFqdnLabelLenExceed = this._dnsFqdnLabelLenExceed;
    }
    if (this._dnsFqdnRateByLabelCountExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFqdnRateByLabelCountExceed = this._dnsFqdnRateByLabelCountExceed;
    }
    if (this._dnsFqdnStage2Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsFqdnStage2Exceed = this._dnsFqdnStage2Exceed;
    }
    if (this._dnsIsNx !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIsNx = this._dnsIsNx;
    }
    if (this._dnsMalformDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsMalformDrop = this._dnsMalformDrop;
    }
    if (this._dnsNxBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNxBl = this._dnsNxBl;
    }
    if (this._dnsNxDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNxDrop = this._dnsNxDrop;
    }
    if (this._dnsNxExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsNxExceed = this._dnsNxExceed;
    }
    if (this._dnsOutboundQueryResponseSizeExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsOutboundQueryResponseSizeExceed = this._dnsOutboundQueryResponseSizeExceed;
    }
    if (this._dnsOutboundQuerySessTimedOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsOutboundQuerySessTimedOut = this._dnsOutboundQuerySessTimedOut;
    }
    if (this._dnsPktProcessed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPktProcessed = this._dnsPktProcessed;
    }
    if (this._dnsPolicyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPolicyDrop = this._dnsPolicyDrop;
    }
    if (this._dnsQryAnyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsQryAnyDrop = this._dnsQryAnyDrop;
    }
    if (this._dnsQueryClassAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsQueryClassAny = this._dnsQueryClassAny;
    }
    if (this._dnsQueryClassChaos !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsQueryClassChaos = this._dnsQueryClassChaos;
    }
    if (this._dnsQueryClassCsnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsQueryClassCsnet = this._dnsQueryClassCsnet;
    }
    if (this._dnsQueryClassHs !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsQueryClassHs = this._dnsQueryClassHs;
    }
    if (this._dnsQueryClassIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsQueryClassIn = this._dnsQueryClassIn;
    }
    if (this._dnsQueryClassNone !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsQueryClassNone = this._dnsQueryClassNone;
    }
    if (this._dnsQueryClassWhitelistMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsQueryClassWhitelistMiss = this._dnsQueryClassWhitelistMiss;
    }
    if (this._dnsQueryTypeA !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsQueryTypeA = this._dnsQueryTypeA;
    }
    if (this._dnsQueryTypeAaaa !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsQueryTypeAaaa = this._dnsQueryTypeAaaa;
    }
    if (this._dnsQueryTypeAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsQueryTypeAny = this._dnsQueryTypeAny;
    }
    if (this._dnsQueryTypeCname !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsQueryTypeCname = this._dnsQueryTypeCname;
    }
    if (this._dnsQueryTypeMx !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsQueryTypeMx = this._dnsQueryTypeMx;
    }
    if (this._dnsQueryTypeNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsQueryTypeNs = this._dnsQueryTypeNs;
    }
    if (this._dnsQueryTypeOpt !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsQueryTypeOpt = this._dnsQueryTypeOpt;
    }
    if (this._dnsQueryTypeSoa !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsQueryTypeSoa = this._dnsQueryTypeSoa;
    }
    if (this._dnsQueryTypeSrv !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsQueryTypeSrv = this._dnsQueryTypeSrv;
    }
    if (this._dnsRrtypeDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsRrtypeDrop = this._dnsRrtypeDrop;
    }
    if (this._dnsTcpAuthPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsTcpAuthPass = this._dnsTcpAuthPass;
    }
    if (this._dnsUdpAuthRetryGapDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsUdpAuthRetryGapDrop = this._dnsUdpAuthRetryGapDrop;
    }
    if (this._dstRateLimit0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstRateLimit0 = this._dstRateLimit0;
    }
    if (this._dstRateLimit1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstRateLimit1 = this._dstRateLimit1;
    }
    if (this._dstRateLimit2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstRateLimit2 = this._dstRateLimit2;
    }
    if (this._dstRateLimit3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstRateLimit3 = this._dstRateLimit3;
    }
    if (this._dstRateLimit4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstRateLimit4 = this._dstRateLimit4;
    }
    if (this._forceTcpAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceTcpAuth = this._forceTcpAuth;
    }
    if (this._forceTcpAuthConnHit !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceTcpAuthConnHit = this._forceTcpAuthConnHit;
    }
    if (this._forceTcpAuthTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceTcpAuthTimeout = this._forceTcpAuthTimeout;
    }
    if (this._nonQueryOpcodePassThrough !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonQueryOpcodePassThrough = this._nonQueryOpcodePassThrough;
    }
    if (this._srcRateLimit0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRateLimit0 = this._srcRateLimit0;
    }
    if (this._srcRateLimit1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRateLimit1 = this._srcRateLimit1;
    }
    if (this._srcRateLimit2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRateLimit2 = this._srcRateLimit2;
    }
    if (this._srcRateLimit3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRateLimit3 = this._srcRateLimit3;
    }
    if (this._srcRateLimit4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRateLimit4 = this._srcRateLimit4;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosL7DnsStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsAuthDrop = undefined;
      this._dnsAuthResp = undefined;
      this._dnsAuthUdp = undefined;
      this._dnsAuthUdpFail = undefined;
      this._dnsAuthUdpFailBl = undefined;
      this._dnsAuthUdpPass = undefined;
      this._dnsAuthUdpTimeout = undefined;
      this._dnsDgActionDeny = undefined;
      this._dnsDgActionPermit = undefined;
      this._dnsDgRateExceed = undefined;
      this._dnsFqdnLabelCountExceed = undefined;
      this._dnsFqdnLabelLenExceed = undefined;
      this._dnsFqdnRateByLabelCountExceed = undefined;
      this._dnsFqdnStage2Exceed = undefined;
      this._dnsIsNx = undefined;
      this._dnsMalformDrop = undefined;
      this._dnsNxBl = undefined;
      this._dnsNxDrop = undefined;
      this._dnsNxExceed = undefined;
      this._dnsOutboundQueryResponseSizeExceed = undefined;
      this._dnsOutboundQuerySessTimedOut = undefined;
      this._dnsPktProcessed = undefined;
      this._dnsPolicyDrop = undefined;
      this._dnsQryAnyDrop = undefined;
      this._dnsQueryClassAny = undefined;
      this._dnsQueryClassChaos = undefined;
      this._dnsQueryClassCsnet = undefined;
      this._dnsQueryClassHs = undefined;
      this._dnsQueryClassIn = undefined;
      this._dnsQueryClassNone = undefined;
      this._dnsQueryClassWhitelistMiss = undefined;
      this._dnsQueryTypeA = undefined;
      this._dnsQueryTypeAaaa = undefined;
      this._dnsQueryTypeAny = undefined;
      this._dnsQueryTypeCname = undefined;
      this._dnsQueryTypeMx = undefined;
      this._dnsQueryTypeNs = undefined;
      this._dnsQueryTypeOpt = undefined;
      this._dnsQueryTypeSoa = undefined;
      this._dnsQueryTypeSrv = undefined;
      this._dnsRrtypeDrop = undefined;
      this._dnsTcpAuthPass = undefined;
      this._dnsUdpAuthRetryGapDrop = undefined;
      this._dstRateLimit0 = undefined;
      this._dstRateLimit1 = undefined;
      this._dstRateLimit2 = undefined;
      this._dstRateLimit3 = undefined;
      this._dstRateLimit4 = undefined;
      this._forceTcpAuth = undefined;
      this._forceTcpAuthConnHit = undefined;
      this._forceTcpAuthTimeout = undefined;
      this._nonQueryOpcodePassThrough = undefined;
      this._srcRateLimit0 = undefined;
      this._srcRateLimit1 = undefined;
      this._srcRateLimit2 = undefined;
      this._srcRateLimit3 = undefined;
      this._srcRateLimit4 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsAuthDrop = value.dnsAuthDrop;
      this._dnsAuthResp = value.dnsAuthResp;
      this._dnsAuthUdp = value.dnsAuthUdp;
      this._dnsAuthUdpFail = value.dnsAuthUdpFail;
      this._dnsAuthUdpFailBl = value.dnsAuthUdpFailBl;
      this._dnsAuthUdpPass = value.dnsAuthUdpPass;
      this._dnsAuthUdpTimeout = value.dnsAuthUdpTimeout;
      this._dnsDgActionDeny = value.dnsDgActionDeny;
      this._dnsDgActionPermit = value.dnsDgActionPermit;
      this._dnsDgRateExceed = value.dnsDgRateExceed;
      this._dnsFqdnLabelCountExceed = value.dnsFqdnLabelCountExceed;
      this._dnsFqdnLabelLenExceed = value.dnsFqdnLabelLenExceed;
      this._dnsFqdnRateByLabelCountExceed = value.dnsFqdnRateByLabelCountExceed;
      this._dnsFqdnStage2Exceed = value.dnsFqdnStage2Exceed;
      this._dnsIsNx = value.dnsIsNx;
      this._dnsMalformDrop = value.dnsMalformDrop;
      this._dnsNxBl = value.dnsNxBl;
      this._dnsNxDrop = value.dnsNxDrop;
      this._dnsNxExceed = value.dnsNxExceed;
      this._dnsOutboundQueryResponseSizeExceed = value.dnsOutboundQueryResponseSizeExceed;
      this._dnsOutboundQuerySessTimedOut = value.dnsOutboundQuerySessTimedOut;
      this._dnsPktProcessed = value.dnsPktProcessed;
      this._dnsPolicyDrop = value.dnsPolicyDrop;
      this._dnsQryAnyDrop = value.dnsQryAnyDrop;
      this._dnsQueryClassAny = value.dnsQueryClassAny;
      this._dnsQueryClassChaos = value.dnsQueryClassChaos;
      this._dnsQueryClassCsnet = value.dnsQueryClassCsnet;
      this._dnsQueryClassHs = value.dnsQueryClassHs;
      this._dnsQueryClassIn = value.dnsQueryClassIn;
      this._dnsQueryClassNone = value.dnsQueryClassNone;
      this._dnsQueryClassWhitelistMiss = value.dnsQueryClassWhitelistMiss;
      this._dnsQueryTypeA = value.dnsQueryTypeA;
      this._dnsQueryTypeAaaa = value.dnsQueryTypeAaaa;
      this._dnsQueryTypeAny = value.dnsQueryTypeAny;
      this._dnsQueryTypeCname = value.dnsQueryTypeCname;
      this._dnsQueryTypeMx = value.dnsQueryTypeMx;
      this._dnsQueryTypeNs = value.dnsQueryTypeNs;
      this._dnsQueryTypeOpt = value.dnsQueryTypeOpt;
      this._dnsQueryTypeSoa = value.dnsQueryTypeSoa;
      this._dnsQueryTypeSrv = value.dnsQueryTypeSrv;
      this._dnsRrtypeDrop = value.dnsRrtypeDrop;
      this._dnsTcpAuthPass = value.dnsTcpAuthPass;
      this._dnsUdpAuthRetryGapDrop = value.dnsUdpAuthRetryGapDrop;
      this._dstRateLimit0 = value.dstRateLimit0;
      this._dstRateLimit1 = value.dstRateLimit1;
      this._dstRateLimit2 = value.dstRateLimit2;
      this._dstRateLimit3 = value.dstRateLimit3;
      this._dstRateLimit4 = value.dstRateLimit4;
      this._forceTcpAuth = value.forceTcpAuth;
      this._forceTcpAuthConnHit = value.forceTcpAuthConnHit;
      this._forceTcpAuthTimeout = value.forceTcpAuthTimeout;
      this._nonQueryOpcodePassThrough = value.nonQueryOpcodePassThrough;
      this._srcRateLimit0 = value.srcRateLimit0;
      this._srcRateLimit1 = value.srcRateLimit1;
      this._srcRateLimit2 = value.srcRateLimit2;
      this._srcRateLimit3 = value.srcRateLimit3;
      this._srcRateLimit4 = value.srcRateLimit4;
    }
  }

  // dns_auth_drop - computed: false, optional: true, required: false
  private _dnsAuthDrop?: number; 
  public get dnsAuthDrop() {
    return this.getNumberAttribute('dns_auth_drop');
  }
  public set dnsAuthDrop(value: number) {
    this._dnsAuthDrop = value;
  }
  public resetDnsAuthDrop() {
    this._dnsAuthDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAuthDropInput() {
    return this._dnsAuthDrop;
  }

  // dns_auth_resp - computed: false, optional: true, required: false
  private _dnsAuthResp?: number; 
  public get dnsAuthResp() {
    return this.getNumberAttribute('dns_auth_resp');
  }
  public set dnsAuthResp(value: number) {
    this._dnsAuthResp = value;
  }
  public resetDnsAuthResp() {
    this._dnsAuthResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAuthRespInput() {
    return this._dnsAuthResp;
  }

  // dns_auth_udp - computed: false, optional: true, required: false
  private _dnsAuthUdp?: number; 
  public get dnsAuthUdp() {
    return this.getNumberAttribute('dns_auth_udp');
  }
  public set dnsAuthUdp(value: number) {
    this._dnsAuthUdp = value;
  }
  public resetDnsAuthUdp() {
    this._dnsAuthUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAuthUdpInput() {
    return this._dnsAuthUdp;
  }

  // dns_auth_udp_fail - computed: false, optional: true, required: false
  private _dnsAuthUdpFail?: number; 
  public get dnsAuthUdpFail() {
    return this.getNumberAttribute('dns_auth_udp_fail');
  }
  public set dnsAuthUdpFail(value: number) {
    this._dnsAuthUdpFail = value;
  }
  public resetDnsAuthUdpFail() {
    this._dnsAuthUdpFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAuthUdpFailInput() {
    return this._dnsAuthUdpFail;
  }

  // dns_auth_udp_fail_bl - computed: false, optional: true, required: false
  private _dnsAuthUdpFailBl?: number; 
  public get dnsAuthUdpFailBl() {
    return this.getNumberAttribute('dns_auth_udp_fail_bl');
  }
  public set dnsAuthUdpFailBl(value: number) {
    this._dnsAuthUdpFailBl = value;
  }
  public resetDnsAuthUdpFailBl() {
    this._dnsAuthUdpFailBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAuthUdpFailBlInput() {
    return this._dnsAuthUdpFailBl;
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

  // dns_auth_udp_timeout - computed: false, optional: true, required: false
  private _dnsAuthUdpTimeout?: number; 
  public get dnsAuthUdpTimeout() {
    return this.getNumberAttribute('dns_auth_udp_timeout');
  }
  public set dnsAuthUdpTimeout(value: number) {
    this._dnsAuthUdpTimeout = value;
  }
  public resetDnsAuthUdpTimeout() {
    this._dnsAuthUdpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsAuthUdpTimeoutInput() {
    return this._dnsAuthUdpTimeout;
  }

  // dns_dg_action_deny - computed: false, optional: true, required: false
  private _dnsDgActionDeny?: number; 
  public get dnsDgActionDeny() {
    return this.getNumberAttribute('dns_dg_action_deny');
  }
  public set dnsDgActionDeny(value: number) {
    this._dnsDgActionDeny = value;
  }
  public resetDnsDgActionDeny() {
    this._dnsDgActionDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDgActionDenyInput() {
    return this._dnsDgActionDeny;
  }

  // dns_dg_action_permit - computed: false, optional: true, required: false
  private _dnsDgActionPermit?: number; 
  public get dnsDgActionPermit() {
    return this.getNumberAttribute('dns_dg_action_permit');
  }
  public set dnsDgActionPermit(value: number) {
    this._dnsDgActionPermit = value;
  }
  public resetDnsDgActionPermit() {
    this._dnsDgActionPermit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDgActionPermitInput() {
    return this._dnsDgActionPermit;
  }

  // dns_dg_rate_exceed - computed: false, optional: true, required: false
  private _dnsDgRateExceed?: number; 
  public get dnsDgRateExceed() {
    return this.getNumberAttribute('dns_dg_rate_exceed');
  }
  public set dnsDgRateExceed(value: number) {
    this._dnsDgRateExceed = value;
  }
  public resetDnsDgRateExceed() {
    this._dnsDgRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDgRateExceedInput() {
    return this._dnsDgRateExceed;
  }

  // dns_fqdn_label_count_exceed - computed: false, optional: true, required: false
  private _dnsFqdnLabelCountExceed?: number; 
  public get dnsFqdnLabelCountExceed() {
    return this.getNumberAttribute('dns_fqdn_label_count_exceed');
  }
  public set dnsFqdnLabelCountExceed(value: number) {
    this._dnsFqdnLabelCountExceed = value;
  }
  public resetDnsFqdnLabelCountExceed() {
    this._dnsFqdnLabelCountExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFqdnLabelCountExceedInput() {
    return this._dnsFqdnLabelCountExceed;
  }

  // dns_fqdn_label_len_exceed - computed: false, optional: true, required: false
  private _dnsFqdnLabelLenExceed?: number; 
  public get dnsFqdnLabelLenExceed() {
    return this.getNumberAttribute('dns_fqdn_label_len_exceed');
  }
  public set dnsFqdnLabelLenExceed(value: number) {
    this._dnsFqdnLabelLenExceed = value;
  }
  public resetDnsFqdnLabelLenExceed() {
    this._dnsFqdnLabelLenExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFqdnLabelLenExceedInput() {
    return this._dnsFqdnLabelLenExceed;
  }

  // dns_fqdn_rate_by_label_count_exceed - computed: false, optional: true, required: false
  private _dnsFqdnRateByLabelCountExceed?: number; 
  public get dnsFqdnRateByLabelCountExceed() {
    return this.getNumberAttribute('dns_fqdn_rate_by_label_count_exceed');
  }
  public set dnsFqdnRateByLabelCountExceed(value: number) {
    this._dnsFqdnRateByLabelCountExceed = value;
  }
  public resetDnsFqdnRateByLabelCountExceed() {
    this._dnsFqdnRateByLabelCountExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFqdnRateByLabelCountExceedInput() {
    return this._dnsFqdnRateByLabelCountExceed;
  }

  // dns_fqdn_stage2_exceed - computed: false, optional: true, required: false
  private _dnsFqdnStage2Exceed?: number; 
  public get dnsFqdnStage2Exceed() {
    return this.getNumberAttribute('dns_fqdn_stage2_exceed');
  }
  public set dnsFqdnStage2Exceed(value: number) {
    this._dnsFqdnStage2Exceed = value;
  }
  public resetDnsFqdnStage2Exceed() {
    this._dnsFqdnStage2Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsFqdnStage2ExceedInput() {
    return this._dnsFqdnStage2Exceed;
  }

  // dns_is_nx - computed: false, optional: true, required: false
  private _dnsIsNx?: number; 
  public get dnsIsNx() {
    return this.getNumberAttribute('dns_is_nx');
  }
  public set dnsIsNx(value: number) {
    this._dnsIsNx = value;
  }
  public resetDnsIsNx() {
    this._dnsIsNx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIsNxInput() {
    return this._dnsIsNx;
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

  // dns_nx_bl - computed: false, optional: true, required: false
  private _dnsNxBl?: number; 
  public get dnsNxBl() {
    return this.getNumberAttribute('dns_nx_bl');
  }
  public set dnsNxBl(value: number) {
    this._dnsNxBl = value;
  }
  public resetDnsNxBl() {
    this._dnsNxBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNxBlInput() {
    return this._dnsNxBl;
  }

  // dns_nx_drop - computed: false, optional: true, required: false
  private _dnsNxDrop?: number; 
  public get dnsNxDrop() {
    return this.getNumberAttribute('dns_nx_drop');
  }
  public set dnsNxDrop(value: number) {
    this._dnsNxDrop = value;
  }
  public resetDnsNxDrop() {
    this._dnsNxDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNxDropInput() {
    return this._dnsNxDrop;
  }

  // dns_nx_exceed - computed: false, optional: true, required: false
  private _dnsNxExceed?: number; 
  public get dnsNxExceed() {
    return this.getNumberAttribute('dns_nx_exceed');
  }
  public set dnsNxExceed(value: number) {
    this._dnsNxExceed = value;
  }
  public resetDnsNxExceed() {
    this._dnsNxExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNxExceedInput() {
    return this._dnsNxExceed;
  }

  // dns_outbound_query_response_size_exceed - computed: false, optional: true, required: false
  private _dnsOutboundQueryResponseSizeExceed?: number; 
  public get dnsOutboundQueryResponseSizeExceed() {
    return this.getNumberAttribute('dns_outbound_query_response_size_exceed');
  }
  public set dnsOutboundQueryResponseSizeExceed(value: number) {
    this._dnsOutboundQueryResponseSizeExceed = value;
  }
  public resetDnsOutboundQueryResponseSizeExceed() {
    this._dnsOutboundQueryResponseSizeExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsOutboundQueryResponseSizeExceedInput() {
    return this._dnsOutboundQueryResponseSizeExceed;
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

  // dns_pkt_processed - computed: false, optional: true, required: false
  private _dnsPktProcessed?: number; 
  public get dnsPktProcessed() {
    return this.getNumberAttribute('dns_pkt_processed');
  }
  public set dnsPktProcessed(value: number) {
    this._dnsPktProcessed = value;
  }
  public resetDnsPktProcessed() {
    this._dnsPktProcessed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPktProcessedInput() {
    return this._dnsPktProcessed;
  }

  // dns_policy_drop - computed: false, optional: true, required: false
  private _dnsPolicyDrop?: number; 
  public get dnsPolicyDrop() {
    return this.getNumberAttribute('dns_policy_drop');
  }
  public set dnsPolicyDrop(value: number) {
    this._dnsPolicyDrop = value;
  }
  public resetDnsPolicyDrop() {
    this._dnsPolicyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsPolicyDropInput() {
    return this._dnsPolicyDrop;
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

  // dns_query_class_any - computed: false, optional: true, required: false
  private _dnsQueryClassAny?: number; 
  public get dnsQueryClassAny() {
    return this.getNumberAttribute('dns_query_class_any');
  }
  public set dnsQueryClassAny(value: number) {
    this._dnsQueryClassAny = value;
  }
  public resetDnsQueryClassAny() {
    this._dnsQueryClassAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsQueryClassAnyInput() {
    return this._dnsQueryClassAny;
  }

  // dns_query_class_chaos - computed: false, optional: true, required: false
  private _dnsQueryClassChaos?: number; 
  public get dnsQueryClassChaos() {
    return this.getNumberAttribute('dns_query_class_chaos');
  }
  public set dnsQueryClassChaos(value: number) {
    this._dnsQueryClassChaos = value;
  }
  public resetDnsQueryClassChaos() {
    this._dnsQueryClassChaos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsQueryClassChaosInput() {
    return this._dnsQueryClassChaos;
  }

  // dns_query_class_csnet - computed: false, optional: true, required: false
  private _dnsQueryClassCsnet?: number; 
  public get dnsQueryClassCsnet() {
    return this.getNumberAttribute('dns_query_class_csnet');
  }
  public set dnsQueryClassCsnet(value: number) {
    this._dnsQueryClassCsnet = value;
  }
  public resetDnsQueryClassCsnet() {
    this._dnsQueryClassCsnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsQueryClassCsnetInput() {
    return this._dnsQueryClassCsnet;
  }

  // dns_query_class_hs - computed: false, optional: true, required: false
  private _dnsQueryClassHs?: number; 
  public get dnsQueryClassHs() {
    return this.getNumberAttribute('dns_query_class_hs');
  }
  public set dnsQueryClassHs(value: number) {
    this._dnsQueryClassHs = value;
  }
  public resetDnsQueryClassHs() {
    this._dnsQueryClassHs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsQueryClassHsInput() {
    return this._dnsQueryClassHs;
  }

  // dns_query_class_in - computed: false, optional: true, required: false
  private _dnsQueryClassIn?: number; 
  public get dnsQueryClassIn() {
    return this.getNumberAttribute('dns_query_class_in');
  }
  public set dnsQueryClassIn(value: number) {
    this._dnsQueryClassIn = value;
  }
  public resetDnsQueryClassIn() {
    this._dnsQueryClassIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsQueryClassInInput() {
    return this._dnsQueryClassIn;
  }

  // dns_query_class_none - computed: false, optional: true, required: false
  private _dnsQueryClassNone?: number; 
  public get dnsQueryClassNone() {
    return this.getNumberAttribute('dns_query_class_none');
  }
  public set dnsQueryClassNone(value: number) {
    this._dnsQueryClassNone = value;
  }
  public resetDnsQueryClassNone() {
    this._dnsQueryClassNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsQueryClassNoneInput() {
    return this._dnsQueryClassNone;
  }

  // dns_query_class_whitelist_miss - computed: false, optional: true, required: false
  private _dnsQueryClassWhitelistMiss?: number; 
  public get dnsQueryClassWhitelistMiss() {
    return this.getNumberAttribute('dns_query_class_whitelist_miss');
  }
  public set dnsQueryClassWhitelistMiss(value: number) {
    this._dnsQueryClassWhitelistMiss = value;
  }
  public resetDnsQueryClassWhitelistMiss() {
    this._dnsQueryClassWhitelistMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsQueryClassWhitelistMissInput() {
    return this._dnsQueryClassWhitelistMiss;
  }

  // dns_query_type_a - computed: false, optional: true, required: false
  private _dnsQueryTypeA?: number; 
  public get dnsQueryTypeA() {
    return this.getNumberAttribute('dns_query_type_a');
  }
  public set dnsQueryTypeA(value: number) {
    this._dnsQueryTypeA = value;
  }
  public resetDnsQueryTypeA() {
    this._dnsQueryTypeA = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsQueryTypeAInput() {
    return this._dnsQueryTypeA;
  }

  // dns_query_type_aaaa - computed: false, optional: true, required: false
  private _dnsQueryTypeAaaa?: number; 
  public get dnsQueryTypeAaaa() {
    return this.getNumberAttribute('dns_query_type_aaaa');
  }
  public set dnsQueryTypeAaaa(value: number) {
    this._dnsQueryTypeAaaa = value;
  }
  public resetDnsQueryTypeAaaa() {
    this._dnsQueryTypeAaaa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsQueryTypeAaaaInput() {
    return this._dnsQueryTypeAaaa;
  }

  // dns_query_type_any - computed: false, optional: true, required: false
  private _dnsQueryTypeAny?: number; 
  public get dnsQueryTypeAny() {
    return this.getNumberAttribute('dns_query_type_any');
  }
  public set dnsQueryTypeAny(value: number) {
    this._dnsQueryTypeAny = value;
  }
  public resetDnsQueryTypeAny() {
    this._dnsQueryTypeAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsQueryTypeAnyInput() {
    return this._dnsQueryTypeAny;
  }

  // dns_query_type_cname - computed: false, optional: true, required: false
  private _dnsQueryTypeCname?: number; 
  public get dnsQueryTypeCname() {
    return this.getNumberAttribute('dns_query_type_cname');
  }
  public set dnsQueryTypeCname(value: number) {
    this._dnsQueryTypeCname = value;
  }
  public resetDnsQueryTypeCname() {
    this._dnsQueryTypeCname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsQueryTypeCnameInput() {
    return this._dnsQueryTypeCname;
  }

  // dns_query_type_mx - computed: false, optional: true, required: false
  private _dnsQueryTypeMx?: number; 
  public get dnsQueryTypeMx() {
    return this.getNumberAttribute('dns_query_type_mx');
  }
  public set dnsQueryTypeMx(value: number) {
    this._dnsQueryTypeMx = value;
  }
  public resetDnsQueryTypeMx() {
    this._dnsQueryTypeMx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsQueryTypeMxInput() {
    return this._dnsQueryTypeMx;
  }

  // dns_query_type_ns - computed: false, optional: true, required: false
  private _dnsQueryTypeNs?: number; 
  public get dnsQueryTypeNs() {
    return this.getNumberAttribute('dns_query_type_ns');
  }
  public set dnsQueryTypeNs(value: number) {
    this._dnsQueryTypeNs = value;
  }
  public resetDnsQueryTypeNs() {
    this._dnsQueryTypeNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsQueryTypeNsInput() {
    return this._dnsQueryTypeNs;
  }

  // dns_query_type_opt - computed: false, optional: true, required: false
  private _dnsQueryTypeOpt?: number; 
  public get dnsQueryTypeOpt() {
    return this.getNumberAttribute('dns_query_type_opt');
  }
  public set dnsQueryTypeOpt(value: number) {
    this._dnsQueryTypeOpt = value;
  }
  public resetDnsQueryTypeOpt() {
    this._dnsQueryTypeOpt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsQueryTypeOptInput() {
    return this._dnsQueryTypeOpt;
  }

  // dns_query_type_soa - computed: false, optional: true, required: false
  private _dnsQueryTypeSoa?: number; 
  public get dnsQueryTypeSoa() {
    return this.getNumberAttribute('dns_query_type_soa');
  }
  public set dnsQueryTypeSoa(value: number) {
    this._dnsQueryTypeSoa = value;
  }
  public resetDnsQueryTypeSoa() {
    this._dnsQueryTypeSoa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsQueryTypeSoaInput() {
    return this._dnsQueryTypeSoa;
  }

  // dns_query_type_srv - computed: false, optional: true, required: false
  private _dnsQueryTypeSrv?: number; 
  public get dnsQueryTypeSrv() {
    return this.getNumberAttribute('dns_query_type_srv');
  }
  public set dnsQueryTypeSrv(value: number) {
    this._dnsQueryTypeSrv = value;
  }
  public resetDnsQueryTypeSrv() {
    this._dnsQueryTypeSrv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsQueryTypeSrvInput() {
    return this._dnsQueryTypeSrv;
  }

  // dns_rrtype_drop - computed: false, optional: true, required: false
  private _dnsRrtypeDrop?: number; 
  public get dnsRrtypeDrop() {
    return this.getNumberAttribute('dns_rrtype_drop');
  }
  public set dnsRrtypeDrop(value: number) {
    this._dnsRrtypeDrop = value;
  }
  public resetDnsRrtypeDrop() {
    this._dnsRrtypeDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsRrtypeDropInput() {
    return this._dnsRrtypeDrop;
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

  // dns_udp_auth_retry_gap_drop - computed: false, optional: true, required: false
  private _dnsUdpAuthRetryGapDrop?: number; 
  public get dnsUdpAuthRetryGapDrop() {
    return this.getNumberAttribute('dns_udp_auth_retry_gap_drop');
  }
  public set dnsUdpAuthRetryGapDrop(value: number) {
    this._dnsUdpAuthRetryGapDrop = value;
  }
  public resetDnsUdpAuthRetryGapDrop() {
    this._dnsUdpAuthRetryGapDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsUdpAuthRetryGapDropInput() {
    return this._dnsUdpAuthRetryGapDrop;
  }

  // dst_rate_limit0 - computed: false, optional: true, required: false
  private _dstRateLimit0?: number; 
  public get dstRateLimit0() {
    return this.getNumberAttribute('dst_rate_limit0');
  }
  public set dstRateLimit0(value: number) {
    this._dstRateLimit0 = value;
  }
  public resetDstRateLimit0() {
    this._dstRateLimit0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstRateLimit0Input() {
    return this._dstRateLimit0;
  }

  // dst_rate_limit1 - computed: false, optional: true, required: false
  private _dstRateLimit1?: number; 
  public get dstRateLimit1() {
    return this.getNumberAttribute('dst_rate_limit1');
  }
  public set dstRateLimit1(value: number) {
    this._dstRateLimit1 = value;
  }
  public resetDstRateLimit1() {
    this._dstRateLimit1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstRateLimit1Input() {
    return this._dstRateLimit1;
  }

  // dst_rate_limit2 - computed: false, optional: true, required: false
  private _dstRateLimit2?: number; 
  public get dstRateLimit2() {
    return this.getNumberAttribute('dst_rate_limit2');
  }
  public set dstRateLimit2(value: number) {
    this._dstRateLimit2 = value;
  }
  public resetDstRateLimit2() {
    this._dstRateLimit2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstRateLimit2Input() {
    return this._dstRateLimit2;
  }

  // dst_rate_limit3 - computed: false, optional: true, required: false
  private _dstRateLimit3?: number; 
  public get dstRateLimit3() {
    return this.getNumberAttribute('dst_rate_limit3');
  }
  public set dstRateLimit3(value: number) {
    this._dstRateLimit3 = value;
  }
  public resetDstRateLimit3() {
    this._dstRateLimit3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstRateLimit3Input() {
    return this._dstRateLimit3;
  }

  // dst_rate_limit4 - computed: false, optional: true, required: false
  private _dstRateLimit4?: number; 
  public get dstRateLimit4() {
    return this.getNumberAttribute('dst_rate_limit4');
  }
  public set dstRateLimit4(value: number) {
    this._dstRateLimit4 = value;
  }
  public resetDstRateLimit4() {
    this._dstRateLimit4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstRateLimit4Input() {
    return this._dstRateLimit4;
  }

  // force_tcp_auth - computed: false, optional: true, required: false
  private _forceTcpAuth?: number; 
  public get forceTcpAuth() {
    return this.getNumberAttribute('force_tcp_auth');
  }
  public set forceTcpAuth(value: number) {
    this._forceTcpAuth = value;
  }
  public resetForceTcpAuth() {
    this._forceTcpAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceTcpAuthInput() {
    return this._forceTcpAuth;
  }

  // force_tcp_auth_conn_hit - computed: false, optional: true, required: false
  private _forceTcpAuthConnHit?: number; 
  public get forceTcpAuthConnHit() {
    return this.getNumberAttribute('force_tcp_auth_conn_hit');
  }
  public set forceTcpAuthConnHit(value: number) {
    this._forceTcpAuthConnHit = value;
  }
  public resetForceTcpAuthConnHit() {
    this._forceTcpAuthConnHit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceTcpAuthConnHitInput() {
    return this._forceTcpAuthConnHit;
  }

  // force_tcp_auth_timeout - computed: false, optional: true, required: false
  private _forceTcpAuthTimeout?: number; 
  public get forceTcpAuthTimeout() {
    return this.getNumberAttribute('force_tcp_auth_timeout');
  }
  public set forceTcpAuthTimeout(value: number) {
    this._forceTcpAuthTimeout = value;
  }
  public resetForceTcpAuthTimeout() {
    this._forceTcpAuthTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceTcpAuthTimeoutInput() {
    return this._forceTcpAuthTimeout;
  }

  // non_query_opcode_pass_through - computed: false, optional: true, required: false
  private _nonQueryOpcodePassThrough?: number; 
  public get nonQueryOpcodePassThrough() {
    return this.getNumberAttribute('non_query_opcode_pass_through');
  }
  public set nonQueryOpcodePassThrough(value: number) {
    this._nonQueryOpcodePassThrough = value;
  }
  public resetNonQueryOpcodePassThrough() {
    this._nonQueryOpcodePassThrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonQueryOpcodePassThroughInput() {
    return this._nonQueryOpcodePassThrough;
  }

  // src_rate_limit0 - computed: false, optional: true, required: false
  private _srcRateLimit0?: number; 
  public get srcRateLimit0() {
    return this.getNumberAttribute('src_rate_limit0');
  }
  public set srcRateLimit0(value: number) {
    this._srcRateLimit0 = value;
  }
  public resetSrcRateLimit0() {
    this._srcRateLimit0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRateLimit0Input() {
    return this._srcRateLimit0;
  }

  // src_rate_limit1 - computed: false, optional: true, required: false
  private _srcRateLimit1?: number; 
  public get srcRateLimit1() {
    return this.getNumberAttribute('src_rate_limit1');
  }
  public set srcRateLimit1(value: number) {
    this._srcRateLimit1 = value;
  }
  public resetSrcRateLimit1() {
    this._srcRateLimit1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRateLimit1Input() {
    return this._srcRateLimit1;
  }

  // src_rate_limit2 - computed: false, optional: true, required: false
  private _srcRateLimit2?: number; 
  public get srcRateLimit2() {
    return this.getNumberAttribute('src_rate_limit2');
  }
  public set srcRateLimit2(value: number) {
    this._srcRateLimit2 = value;
  }
  public resetSrcRateLimit2() {
    this._srcRateLimit2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRateLimit2Input() {
    return this._srcRateLimit2;
  }

  // src_rate_limit3 - computed: false, optional: true, required: false
  private _srcRateLimit3?: number; 
  public get srcRateLimit3() {
    return this.getNumberAttribute('src_rate_limit3');
  }
  public set srcRateLimit3(value: number) {
    this._srcRateLimit3 = value;
  }
  public resetSrcRateLimit3() {
    this._srcRateLimit3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRateLimit3Input() {
    return this._srcRateLimit3;
  }

  // src_rate_limit4 - computed: false, optional: true, required: false
  private _srcRateLimit4?: number; 
  public get srcRateLimit4() {
    return this.getNumberAttribute('src_rate_limit4');
  }
  public set srcRateLimit4(value: number) {
    this._srcRateLimit4 = value;
  }
  public resetSrcRateLimit4() {
    this._srcRateLimit4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRateLimit4Input() {
    return this._srcRateLimit4;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats thunder_ddos_l7_dns_stats}
*/
export class DataThunderDdosL7DnsStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_l7_dns_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosL7DnsStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosL7DnsStats to import
  * @param importFromId The id of the existing DataThunderDdosL7DnsStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosL7DnsStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_l7_dns_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_dns_stats thunder_ddos_l7_dns_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosL7DnsStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosL7DnsStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_l7_dns_stats',
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
  private _stats = new DataThunderDdosL7DnsStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosL7DnsStatsStats) {
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
      stats: dataThunderDdosL7DnsStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderDdosL7DnsStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosL7DnsStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
