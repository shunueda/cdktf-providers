// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbL4StatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#id DataThunderSlbL4Stats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#stats DataThunderSlbL4Stats#stats}
  */
  readonly stats?: DataThunderSlbL4StatsStats;
}
export interface DataThunderSlbL4StatsStats {
  /**
  * Anomaly bad content
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#anomaly_bad_content DataThunderSlbL4Stats#anomaly_bad_content}
  */
  readonly anomalyBadContent?: number;
  /**
  * Anomaly out of sequence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#anomaly_out_seq DataThunderSlbL4Stats#anomaly_out_seq}
  */
  readonly anomalyOutSeq?: number;
  /**
  * Anomaly pbslb drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#anomaly_pbslb_drop DataThunderSlbL4Stats#anomaly_pbslb_drop}
  */
  readonly anomalyPbslbDrop?: number;
  /**
  * Anomaly zero window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#anomaly_zero_win DataThunderSlbL4Stats#anomaly_zero_win}
  */
  readonly anomalyZeroWin?: number;
  /**
  * Auto-reselect server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#auto_reassign DataThunderSlbL4Stats#auto_reassign}
  */
  readonly autoReassign?: number;
  /**
  * BW-Limit Exceed drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#bw_rate_limit_exceed DataThunderSlbL4Stats#bw_rate_limit_exceed}
  */
  readonly bwRateLimitExceed?: number;
  /**
  * BW-Watermark drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#bw_watermark_drop DataThunderSlbL4Stats#bw_watermark_drop}
  */
  readonly bwWatermarkDrop?: number;
  /**
  * L3V Conn Limit Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#concurrent_conn_exceed DataThunderSlbL4Stats#concurrent_conn_exceed}
  */
  readonly concurrentConnExceed?: number;
  /**
  * Conn rate limit drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#conn_rate_limit_drop DataThunderSlbL4Stats#conn_rate_limit_drop}
  */
  readonly connRateLimitDrop?: number;
  /**
  * Conn rate limit resets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#conn_rate_limit_reset DataThunderSlbL4Stats#conn_rate_limit_reset}
  */
  readonly connRateLimitReset?: number;
  /**
  * Conn Limit drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#connlimit_drop DataThunderSlbL4Stats#connlimit_drop}
  */
  readonly connlimitDrop?: number;
  /**
  * Conn Limit resets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#connlimit_reset DataThunderSlbL4Stats#connlimit_reset}
  */
  readonly connlimitReset?: number;
  /**
  * DNS query id switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#dns_id_switch DataThunderSlbL4Stats#dns_id_switch}
  */
  readonly dnsIdSwitch?: number;
  /**
  * DNS Policy Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#dns_policy_drop DataThunderSlbL4Stats#dns_policy_drop}
  */
  readonly dnsPolicyDrop?: number;
  /**
  * DNSSEC SG switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#dnssec_switch DataThunderSlbL4Stats#dnssec_switch}
  */
  readonly dnssecSwitch?: number;
  /**
  * aFleX drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#drop_aflex DataThunderSlbL4Stats#drop_aflex}
  */
  readonly dropAflex?: number;
  /**
  * Drop GSLB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#drop_gslb DataThunderSlbL4Stats#drop_gslb}
  */
  readonly dropGslb?: number;
  /**
  * Fast aging reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#fast_aging_reset DataThunderSlbL4Stats#fast_aging_reset}
  */
  readonly fastAgingReset?: number;
  /**
  * Fast aging set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#fast_aging_set DataThunderSlbL4Stats#fast_aging_set}
  */
  readonly fastAgingSet?: number;
  /**
  * Fast Path L2 Reroute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#fast_path_l2_reroute DataThunderSlbL4Stats#fast_path_l2_reroute}
  */
  readonly fastPathL2Reroute?: number;
  /**
  * Fast Path Reroute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#fast_path_reroute DataThunderSlbL4Stats#fast_path_reroute}
  */
  readonly fastPathReroute?: number;
  /**
  * Invalid Header Received on GTP VIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#gtp_c_invalid_header DataThunderSlbL4Stats#gtp_c_invalid_header}
  */
  readonly gtpCInvalidHeader?: number;
  /**
  * Non Create Session/PDP Context Request/Response Received on GTP VIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#gtp_c_invalid_message DataThunderSlbL4Stats#gtp_c_invalid_message}
  */
  readonly gtpCInvalidMessage?: number;
  /**
  * Invalid Packet Received on GTP VIP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#gtp_c_invalid_port DataThunderSlbL4Stats#gtp_c_invalid_port}
  */
  readonly gtpCInvalidPort?: number;
  /**
  * ignore msl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#ignore_msl DataThunderSlbL4Stats#ignore_msl}
  */
  readonly ignoreMsl?: number;
  /**
  * Inband HM reassign
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#inband_hm_reassign DataThunderSlbL4Stats#inband_hm_reassign}
  */
  readonly inbandHmReassign?: number;
  /**
  * Inband HM retry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#inband_hm_retry DataThunderSlbL4Stats#inband_hm_retry}
  */
  readonly inbandHmRetry?: number;
  /**
  * TCP received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#intcp DataThunderSlbL4Stats#intcp}
  */
  readonly intcp?: number;
  /**
  * UDP received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#inudp DataThunderSlbL4Stats#inudp}
  */
  readonly inudp?: number;
  /**
  * L2 DSR received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#l2_dsr DataThunderSlbL4Stats#l2_dsr}
  */
  readonly l2Dsr?: number;
  /**
  * L3 DSR received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#l3_dsr DataThunderSlbL4Stats#l3_dsr}
  */
  readonly l3Dsr?: number;
  /**
  * L4 CPS exceed drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#l4_cps_exceed DataThunderSlbL4Stats#l4_cps_exceed}
  */
  readonly l4CpsExceed?: number;
  /**
  * L7 CPS exceed drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#l7_cps_exceed DataThunderSlbL4Stats#l7_cps_exceed}
  */
  readonly l7CpsExceed?: number;
  /**
  * NAT CPS exceed drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#nat_cps_exceed DataThunderSlbL4Stats#nat_cps_exceed}
  */
  readonly natCpsExceed?: number;
  /**
  * No resource drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#no_resourse_drop DataThunderSlbL4Stats#no_resourse_drop}
  */
  readonly noResourseDrop?: number;
  /**
  * vport not matching drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#no_vport_drop DataThunderSlbL4Stats#no_vport_drop}
  */
  readonly noVportDrop?: number;
  /**
  * IP out noroute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#noroute DataThunderSlbL4Stats#noroute}
  */
  readonly noroute?: number;
  /**
  * No SYN pkt drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#nosyn_drop DataThunderSlbL4Stats#nosyn_drop}
  */
  readonly nosynDrop?: number;
  /**
  * No SYN pkt drops - ACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#nosyn_drop_ack DataThunderSlbL4Stats#nosyn_drop_ack}
  */
  readonly nosynDropAck?: number;
  /**
  * No SYN pkt drops - FIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#nosyn_drop_fin DataThunderSlbL4Stats#nosyn_drop_fin}
  */
  readonly nosynDropFin?: number;
  /**
  * No SYN pkt drops - RST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#nosyn_drop_rst DataThunderSlbL4Stats#nosyn_drop_rst}
  */
  readonly nosynDropRst?: number;
  /**
  * NAT no session drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#novport_drop DataThunderSlbL4Stats#novport_drop}
  */
  readonly novportDrop?: number;
  /**
  * Other Session aged out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#other_sess_aged_out DataThunderSlbL4Stats#other_sess_aged_out}
  */
  readonly otherSessAgedOut?: number;
  /**
  * Out of sequence ACK drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#out_seq_ack_drop DataThunderSlbL4Stats#out_seq_ack_drop}
  */
  readonly outSeqAckDrop?: number;
  /**
  * TCP out RST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#outrst DataThunderSlbL4Stats#outrst}
  */
  readonly outrst?: number;
  /**
  * TCP out RST ACK attack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#outrst_ack_attack DataThunderSlbL4Stats#outrst_ack_attack}
  */
  readonly outrstAckAttack?: number;
  /**
  * TCP out RST aFleX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#outrst_aflex DataThunderSlbL4Stats#outrst_aflex}
  */
  readonly outrstAflex?: number;
  /**
  * TCP out RST L4 proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#outrst_broker DataThunderSlbL4Stats#outrst_broker}
  */
  readonly outrstBroker?: number;
  /**
  * TCP out RST no SYN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#outrst_nosyn DataThunderSlbL4Stats#outrst_nosyn}
  */
  readonly outrstNosyn?: number;
  /**
  * TCP out RST stale sess
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#outrst_stale_sess DataThunderSlbL4Stats#outrst_stale_sess}
  */
  readonly outrstStaleSess?: number;
  /**
  * TCP out RST TCP proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#outrst_tcpproxy DataThunderSlbL4Stats#outrst_tcpproxy}
  */
  readonly outrstTcpproxy?: number;
  /**
  * pbslb entry limit Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#pbslb_entry_limit_exceed DataThunderSlbL4Stats#pbslb_entry_limit_exceed}
  */
  readonly pbslbEntryLimitExceed?: number;
  /**
  * NAT Port Preserve Try
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#port_preserve_attempt DataThunderSlbL4Stats#port_preserve_attempt}
  */
  readonly portPreserveAttempt?: number;
  /**
  * NAT Port Preserve Succ
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#port_preserve_succ DataThunderSlbL4Stats#port_preserve_succ}
  */
  readonly portPreserveSucc?: number;
  /**
  * PROXY protocol header inserted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#proxy_header_insert DataThunderSlbL4Stats#proxy_header_insert}
  */
  readonly proxyHeaderInsert?: number;
  /**
  * PROXY protocol header retransmitted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#proxy_header_rexmit DataThunderSlbL4Stats#proxy_header_rexmit}
  */
  readonly proxyHeaderRexmit?: number;
  /**
  * Proxy no sock drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#proxy_nosock_drop DataThunderSlbL4Stats#proxy_nosock_drop}
  */
  readonly proxyNosockDrop?: number;
  /**
  * PROXY protocol drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#proxy_prot_drop DataThunderSlbL4Stats#proxy_prot_drop}
  */
  readonly proxyProtDrop?: number;
  /**
  * PROXY protocol error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#proxy_prot_error DataThunderSlbL4Stats#proxy_prot_error}
  */
  readonly proxyProtError?: number;
  /**
  * Rate Drop reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#rate_drop_reset_unkn DataThunderSlbL4Stats#rate_drop_reset_unkn}
  */
  readonly rateDropResetUnkn?: number;
  /**
  * Server reselect failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#reselect_svrselfail DataThunderSlbL4Stats#reselect_svrselfail}
  */
  readonly reselectSvrselfail?: number;
  /**
  * RST L7 on failover
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#reset_l7_on_failover DataThunderSlbL4Stats#reset_l7_on_failover}
  */
  readonly resetL7OnFailover?: number;
  /**
  * Reset unknown conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#reset_unknown_conn DataThunderSlbL4Stats#reset_unknown_conn}
  */
  readonly resetUnknownConn?: number;
  /**
  * Server Down Del switch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#server_down_del DataThunderSlbL4Stats#server_down_del}
  */
  readonly serverDownDel?: number;
  /**
  * Session aged out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#sess_aged_out DataThunderSlbL4Stats#sess_aged_out}
  */
  readonly sessAgedOut?: number;
  /**
  * Skip Insert-client-ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#skip_insert_client_ip DataThunderSlbL4Stats#skip_insert_client_ip}
  */
  readonly skipInsertClientIp?: number;
  /**
  * SLB GTP proxy messageprocessed locally on RR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#slb_gtp_proxy_c_process_local_rr DataThunderSlbL4Stats#slb_gtp_proxy_c_process_local_rr}
  */
  readonly slbGtpProxyCProcessLocalRr?: number;
  /**
  * SLB GTP proxy retx requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#slb_gtp_proxy_retx_requests DataThunderSlbL4Stats#slb_gtp_proxy_retx_requests}
  */
  readonly slbGtpProxyRetxRequests?: number;
  /**
  * SLB GTP proxy helper session created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#slb_gtp_proxy_smp_created DataThunderSlbL4Stats#slb_gtp_proxy_smp_created}
  */
  readonly slbGtpProxySmpCreated?: number;
  /**
  * SLB GTP proxy helper session creation failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#slb_gtp_proxy_smp_creation_failed DataThunderSlbL4Stats#slb_gtp_proxy_smp_creation_failed}
  */
  readonly slbGtpProxySmpCreationFailed?: number;
  /**
  * SLB GTP proxy session helper not found during cleanup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#slb_gtp_proxy_smp_free_not_found DataThunderSlbL4Stats#slb_gtp_proxy_smp_free_not_found}
  */
  readonly slbGtpProxySmpFreeNotFound?: number;
  /**
  * SLB GTP proxy session helper freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#slb_gtp_proxy_smp_freed DataThunderSlbL4Stats#slb_gtp_proxy_smp_freed}
  */
  readonly slbGtpProxySmpFreed?: number;
  /**
  * SLB GTP proxy helper session found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#slb_gtp_proxy_smp_match DataThunderSlbL4Stats#slb_gtp_proxy_smp_match}
  */
  readonly slbGtpProxySmpMatch?: number;
  /**
  * SLB GTP proxy helper session not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#slb_gtp_proxy_smp_no_match DataThunderSlbL4Stats#slb_gtp_proxy_smp_no_match}
  */
  readonly slbGtpProxySmpNoMatch?: number;
  /**
  * Auto NAT id mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#smart_nat_id_mismatch DataThunderSlbL4Stats#smart_nat_id_mismatch}
  */
  readonly smartNatIdMismatch?: number;
  /**
  * Source NAT failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#snat_fail DataThunderSlbL4Stats#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Snat port preserve allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#snat_force_preserve_alloc DataThunderSlbL4Stats#snat_force_preserve_alloc}
  */
  readonly snatForcePreserveAlloc?: number;
  /**
  * Snat port preserve freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#snat_force_preserve_free DataThunderSlbL4Stats#snat_force_preserve_free}
  */
  readonly snatForcePreserveFree?: number;
  /**
  * Source NAT ICMP Process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#snat_icmp_error_process DataThunderSlbL4Stats#snat_icmp_error_process}
  */
  readonly snatIcmpErrorProcess?: number;
  /**
  * Source NAT ICMP No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#snat_icmp_no_match DataThunderSlbL4Stats#snat_icmp_no_match}
  */
  readonly snatIcmpNoMatch?: number;
  /**
  * Source NAT no fwd route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#snat_no_fwd_route DataThunderSlbL4Stats#snat_no_fwd_route}
  */
  readonly snatNoFwdRoute?: number;
  /**
  * Source NAT no rev route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#snat_no_rev_route DataThunderSlbL4Stats#snat_no_rev_route}
  */
  readonly snatNoRevRoute?: number;
  /**
  * Snat port overload fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#snat_port_overload_fail DataThunderSlbL4Stats#snat_port_overload_fail}
  */
  readonly snatPortOverloadFail?: number;
  /**
  * SSL CPS exceed drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#ssl_cps_exceed DataThunderSlbL4Stats#ssl_cps_exceed}
  */
  readonly sslCpsExceed?: number;
  /**
  * SSL TPT exceed drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#ssl_tpt_exceed DataThunderSlbL4Stats#ssl_tpt_exceed}
  */
  readonly sslTptExceed?: number;
  /**
  * SSL TPT-Watermark drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#ssl_watermark_drop DataThunderSlbL4Stats#ssl_watermark_drop}
  */
  readonly sslWatermarkDrop?: number;
  /**
  * L4 stateless Conn TO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#stateless_conn_timeout DataThunderSlbL4Stats#stateless_conn_timeout}
  */
  readonly statelessConnTimeout?: number;
  /**
  * L4 server handshake fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#svr_syn_handshake_fail DataThunderSlbL4Stats#svr_syn_handshake_fail}
  */
  readonly svrSynHandshakeFail?: number;
  /**
  * Server sel failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#svrselfail DataThunderSlbL4Stats#svrselfail}
  */
  readonly svrselfail?: number;
  /**
  * TCP SYN rate per sec
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#syn_rate DataThunderSlbL4Stats#syn_rate}
  */
  readonly synRate?: number;
  /**
  * SYN stale sess drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#syn_stale_sess DataThunderSlbL4Stats#syn_stale_sess}
  */
  readonly synStaleSess?: number;
  /**
  * L4 SYN attack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#synattack DataThunderSlbL4Stats#synattack}
  */
  readonly synattack?: number;
  /**
  * TCP SYN cookie buff drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#syncookie_buff_drop DataThunderSlbL4Stats#syncookie_buff_drop}
  */
  readonly syncookieBuffDrop?: number;
  /**
  * TCP SYN cookie buff queue
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#syncookie_buff_queue DataThunderSlbL4Stats#syncookie_buff_queue}
  */
  readonly syncookieBuffQueue?: number;
  /**
  * TCP SYN cookie failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#syncookiescheckfailed DataThunderSlbL4Stats#syncookiescheckfailed}
  */
  readonly syncookiescheckfailed?: number;
  /**
  * TCP SYN cookie snt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#syncookiessent DataThunderSlbL4Stats#syncookiessent}
  */
  readonly syncookiessent?: number;
  /**
  * TCP SYN cookie snt ts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#syncookiessent_ts DataThunderSlbL4Stats#syncookiessent_ts}
  */
  readonly syncookiessentTs?: number;
  /**
  * TCP SYN cookie snt fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#syncookiessentfailed DataThunderSlbL4Stats#syncookiessentfailed}
  */
  readonly syncookiessentfailed?: number;
  /**
  * TCP SYN received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#synreceived DataThunderSlbL4Stats#synreceived}
  */
  readonly synreceived?: number;
  /**
  * TCP SYN (HW SYN cookie)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#synreceived_hw DataThunderSlbL4Stats#synreceived_hw}
  */
  readonly synreceivedHw?: number;
  /**
  * L4 AX re-xmit SYN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#tcp_ax_rexmit_syn DataThunderSlbL4Stats#tcp_ax_rexmit_syn}
  */
  readonly tcpAxRexmitSyn?: number;
  /**
  * TCP Connections Closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#tcp_connections_closed DataThunderSlbL4Stats#tcp_connections_closed}
  */
  readonly tcpConnectionsClosed?: number;
  /**
  * L4 TCP Established
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#tcp_est DataThunderSlbL4Stats#tcp_est}
  */
  readonly tcpEst?: number;
  /**
  * L4 rcv fwd FIN|ACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#tcp_fwd_ackfin DataThunderSlbL4Stats#tcp_fwd_ackfin}
  */
  readonly tcpFwdAckfin?: number;
  /**
  * L4 rcv fwd FIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#tcp_fwd_fin DataThunderSlbL4Stats#tcp_fwd_fin}
  */
  readonly tcpFwdFin?: number;
  /**
  * L4 rcv fwd FIN dup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#tcp_fwd_fin_dup DataThunderSlbL4Stats#tcp_fwd_fin_dup}
  */
  readonly tcpFwdFinDup?: number;
  /**
  * L4 rcv fwd last ACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#tcp_fwd_last_ack DataThunderSlbL4Stats#tcp_fwd_last_ack}
  */
  readonly tcpFwdLastAck?: number;
  /**
  * L4 rcv fwd RST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#tcp_fwd_rst DataThunderSlbL4Stats#tcp_fwd_rst}
  */
  readonly tcpFwdRst?: number;
  /**
  * TCP invalid drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#tcp_invalid_drop DataThunderSlbL4Stats#tcp_invalid_drop}
  */
  readonly tcpInvalidDrop?: number;
  /**
  * TCP no SLB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#tcp_no_slb DataThunderSlbL4Stats#tcp_no_slb}
  */
  readonly tcpNoSlb?: number;
  /**
  * L4 rcv rev FIN|ACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#tcp_rev_ackfin DataThunderSlbL4Stats#tcp_rev_ackfin}
  */
  readonly tcpRevAckfin?: number;
  /**
  * L4 rcv rev FIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#tcp_rev_fin DataThunderSlbL4Stats#tcp_rev_fin}
  */
  readonly tcpRevFin?: number;
  /**
  * L4 rcv rev FIN dup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#tcp_rev_fin_dup DataThunderSlbL4Stats#tcp_rev_fin_dup}
  */
  readonly tcpRevFinDup?: number;
  /**
  * L4 rcv rev last ACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#tcp_rev_last_ack DataThunderSlbL4Stats#tcp_rev_last_ack}
  */
  readonly tcpRevLastAck?: number;
  /**
  * L4 rcv rev RST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#tcp_rev_rst DataThunderSlbL4Stats#tcp_rev_rst}
  */
  readonly tcpRevRst?: number;
  /**
  * L4 rcv rexmit SYN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#tcp_rexmit_syn DataThunderSlbL4Stats#tcp_rexmit_syn}
  */
  readonly tcpRexmitSyn?: number;
  /**
  * L4 rcv rexmit SYN (delq)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#tcp_rexmit_syn_delq DataThunderSlbL4Stats#tcp_rexmit_syn_delq}
  */
  readonly tcpRexmitSynDelq?: number;
  /**
  * L4 rcv rexmit SYN|ACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#tcp_rexmit_synack DataThunderSlbL4Stats#tcp_rexmit_synack}
  */
  readonly tcpRexmitSynack?: number;
  /**
  * L4 rcv rexmit SYN|ACK DQ
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#tcp_rexmit_synack_delq DataThunderSlbL4Stats#tcp_rexmit_synack_delq}
  */
  readonly tcpRexmitSynackDelq?: number;
  /**
  * TCP Session aged out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#tcp_sess_aged_out DataThunderSlbL4Stats#tcp_sess_aged_out}
  */
  readonly tcpSessAgedOut?: number;
  /**
  * TCP no-Est Sess aged out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#tcp_sess_noest_aged_out DataThunderSlbL4Stats#tcp_sess_noest_aged_out}
  */
  readonly tcpSessNoestAgedOut?: number;
  /**
  * no-Est CSYN rcv aged out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#tcp_sess_noest_csyn_rcv_aged_out DataThunderSlbL4Stats#tcp_sess_noest_csyn_rcv_aged_out}
  */
  readonly tcpSessNoestCsynRcvAgedOut?: number;
  /**
  * no-Est SSYN snt aged out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#tcp_sess_noest_ssyn_xmit_aged_out DataThunderSlbL4Stats#tcp_sess_noest_ssyn_xmit_aged_out}
  */
  readonly tcpSessNoestSsynXmitAgedOut?: number;
  /**
  * L4 rcv ACK on SYN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#tcp_syn_rcv_ack DataThunderSlbL4Stats#tcp_syn_rcv_ack}
  */
  readonly tcpSynRcvAck?: number;
  /**
  * L4 rcv RST on SYN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#tcp_syn_rcv_rst DataThunderSlbL4Stats#tcp_syn_rcv_rst}
  */
  readonly tcpSynRcvRst?: number;
  /**
  * TCP SYN Other Flags Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#tcpotherflags_drop DataThunderSlbL4Stats#tcpotherflags_drop}
  */
  readonly tcpotherflagsDrop?: number;
  /**
  * TCP SYN With Data Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#tcpsyndata_drop DataThunderSlbL4Stats#tcpsyndata_drop}
  */
  readonly tcpsyndataDrop?: number;
  /**
  * SYN Throttle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#throttle_syn DataThunderSlbL4Stats#throttle_syn}
  */
  readonly throttleSyn?: number;
  /**
  * UDP no SLB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#udp_no_slb DataThunderSlbL4Stats#udp_no_slb}
  */
  readonly udpNoSlb?: number;
  /**
  * L4 UDP req greater than rsps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#udp_req_more_resp DataThunderSlbL4Stats#udp_req_more_resp}
  */
  readonly udpReqMoreResp?: number;
  /**
  * L4 UDP req rsps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#udp_req_one_oneplus_resp DataThunderSlbL4Stats#udp_req_one_oneplus_resp}
  */
  readonly udpReqOneOneplusResp?: number;
  /**
  * L4 UDP reqs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#udp_req_oneplus DataThunderSlbL4Stats#udp_req_oneplus}
  */
  readonly udpReqOneplus?: number;
  /**
  * L4 UDP reqs no rsp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#udp_req_oneplus_no_resp DataThunderSlbL4Stats#udp_req_oneplus_no_resp}
  */
  readonly udpReqOneplusNoResp?: number;
  /**
  * L4 UDP req/rsp not match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#udp_req_resp_notmatch DataThunderSlbL4Stats#udp_req_resp_notmatch}
  */
  readonly udpReqRespNotmatch?: number;
  /**
  * L4 UDP rsps greater than reqs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#udp_resp_more_req DataThunderSlbL4Stats#udp_resp_more_req}
  */
  readonly udpRespMoreReq?: number;
  /**
  * L4 UDP rsps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#udp_resp_oneplus DataThunderSlbL4Stats#udp_resp_oneplus}
  */
  readonly udpRespOneplus?: number;
  /**
  * UDP Session aged out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#udp_sess_aged_out DataThunderSlbL4Stats#udp_sess_aged_out}
  */
  readonly udpSessAgedOut?: number;
}

export function dataThunderSlbL4StatsStatsToTerraform(struct?: DataThunderSlbL4StatsStatsOutputReference | DataThunderSlbL4StatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anomaly_bad_content: cdktf.numberToTerraform(struct!.anomalyBadContent),
    anomaly_out_seq: cdktf.numberToTerraform(struct!.anomalyOutSeq),
    anomaly_pbslb_drop: cdktf.numberToTerraform(struct!.anomalyPbslbDrop),
    anomaly_zero_win: cdktf.numberToTerraform(struct!.anomalyZeroWin),
    auto_reassign: cdktf.numberToTerraform(struct!.autoReassign),
    bw_rate_limit_exceed: cdktf.numberToTerraform(struct!.bwRateLimitExceed),
    bw_watermark_drop: cdktf.numberToTerraform(struct!.bwWatermarkDrop),
    concurrent_conn_exceed: cdktf.numberToTerraform(struct!.concurrentConnExceed),
    conn_rate_limit_drop: cdktf.numberToTerraform(struct!.connRateLimitDrop),
    conn_rate_limit_reset: cdktf.numberToTerraform(struct!.connRateLimitReset),
    connlimit_drop: cdktf.numberToTerraform(struct!.connlimitDrop),
    connlimit_reset: cdktf.numberToTerraform(struct!.connlimitReset),
    dns_id_switch: cdktf.numberToTerraform(struct!.dnsIdSwitch),
    dns_policy_drop: cdktf.numberToTerraform(struct!.dnsPolicyDrop),
    dnssec_switch: cdktf.numberToTerraform(struct!.dnssecSwitch),
    drop_aflex: cdktf.numberToTerraform(struct!.dropAflex),
    drop_gslb: cdktf.numberToTerraform(struct!.dropGslb),
    fast_aging_reset: cdktf.numberToTerraform(struct!.fastAgingReset),
    fast_aging_set: cdktf.numberToTerraform(struct!.fastAgingSet),
    fast_path_l2_reroute: cdktf.numberToTerraform(struct!.fastPathL2Reroute),
    fast_path_reroute: cdktf.numberToTerraform(struct!.fastPathReroute),
    gtp_c_invalid_header: cdktf.numberToTerraform(struct!.gtpCInvalidHeader),
    gtp_c_invalid_message: cdktf.numberToTerraform(struct!.gtpCInvalidMessage),
    gtp_c_invalid_port: cdktf.numberToTerraform(struct!.gtpCInvalidPort),
    ignore_msl: cdktf.numberToTerraform(struct!.ignoreMsl),
    inband_hm_reassign: cdktf.numberToTerraform(struct!.inbandHmReassign),
    inband_hm_retry: cdktf.numberToTerraform(struct!.inbandHmRetry),
    intcp: cdktf.numberToTerraform(struct!.intcp),
    inudp: cdktf.numberToTerraform(struct!.inudp),
    l2_dsr: cdktf.numberToTerraform(struct!.l2Dsr),
    l3_dsr: cdktf.numberToTerraform(struct!.l3Dsr),
    l4_cps_exceed: cdktf.numberToTerraform(struct!.l4CpsExceed),
    l7_cps_exceed: cdktf.numberToTerraform(struct!.l7CpsExceed),
    nat_cps_exceed: cdktf.numberToTerraform(struct!.natCpsExceed),
    no_resourse_drop: cdktf.numberToTerraform(struct!.noResourseDrop),
    no_vport_drop: cdktf.numberToTerraform(struct!.noVportDrop),
    noroute: cdktf.numberToTerraform(struct!.noroute),
    nosyn_drop: cdktf.numberToTerraform(struct!.nosynDrop),
    nosyn_drop_ack: cdktf.numberToTerraform(struct!.nosynDropAck),
    nosyn_drop_fin: cdktf.numberToTerraform(struct!.nosynDropFin),
    nosyn_drop_rst: cdktf.numberToTerraform(struct!.nosynDropRst),
    novport_drop: cdktf.numberToTerraform(struct!.novportDrop),
    other_sess_aged_out: cdktf.numberToTerraform(struct!.otherSessAgedOut),
    out_seq_ack_drop: cdktf.numberToTerraform(struct!.outSeqAckDrop),
    outrst: cdktf.numberToTerraform(struct!.outrst),
    outrst_ack_attack: cdktf.numberToTerraform(struct!.outrstAckAttack),
    outrst_aflex: cdktf.numberToTerraform(struct!.outrstAflex),
    outrst_broker: cdktf.numberToTerraform(struct!.outrstBroker),
    outrst_nosyn: cdktf.numberToTerraform(struct!.outrstNosyn),
    outrst_stale_sess: cdktf.numberToTerraform(struct!.outrstStaleSess),
    outrst_tcpproxy: cdktf.numberToTerraform(struct!.outrstTcpproxy),
    pbslb_entry_limit_exceed: cdktf.numberToTerraform(struct!.pbslbEntryLimitExceed),
    port_preserve_attempt: cdktf.numberToTerraform(struct!.portPreserveAttempt),
    port_preserve_succ: cdktf.numberToTerraform(struct!.portPreserveSucc),
    proxy_header_insert: cdktf.numberToTerraform(struct!.proxyHeaderInsert),
    proxy_header_rexmit: cdktf.numberToTerraform(struct!.proxyHeaderRexmit),
    proxy_nosock_drop: cdktf.numberToTerraform(struct!.proxyNosockDrop),
    proxy_prot_drop: cdktf.numberToTerraform(struct!.proxyProtDrop),
    proxy_prot_error: cdktf.numberToTerraform(struct!.proxyProtError),
    rate_drop_reset_unkn: cdktf.numberToTerraform(struct!.rateDropResetUnkn),
    reselect_svrselfail: cdktf.numberToTerraform(struct!.reselectSvrselfail),
    reset_l7_on_failover: cdktf.numberToTerraform(struct!.resetL7OnFailover),
    reset_unknown_conn: cdktf.numberToTerraform(struct!.resetUnknownConn),
    server_down_del: cdktf.numberToTerraform(struct!.serverDownDel),
    sess_aged_out: cdktf.numberToTerraform(struct!.sessAgedOut),
    skip_insert_client_ip: cdktf.numberToTerraform(struct!.skipInsertClientIp),
    slb_gtp_proxy_c_process_local_rr: cdktf.numberToTerraform(struct!.slbGtpProxyCProcessLocalRr),
    slb_gtp_proxy_retx_requests: cdktf.numberToTerraform(struct!.slbGtpProxyRetxRequests),
    slb_gtp_proxy_smp_created: cdktf.numberToTerraform(struct!.slbGtpProxySmpCreated),
    slb_gtp_proxy_smp_creation_failed: cdktf.numberToTerraform(struct!.slbGtpProxySmpCreationFailed),
    slb_gtp_proxy_smp_free_not_found: cdktf.numberToTerraform(struct!.slbGtpProxySmpFreeNotFound),
    slb_gtp_proxy_smp_freed: cdktf.numberToTerraform(struct!.slbGtpProxySmpFreed),
    slb_gtp_proxy_smp_match: cdktf.numberToTerraform(struct!.slbGtpProxySmpMatch),
    slb_gtp_proxy_smp_no_match: cdktf.numberToTerraform(struct!.slbGtpProxySmpNoMatch),
    smart_nat_id_mismatch: cdktf.numberToTerraform(struct!.smartNatIdMismatch),
    snat_fail: cdktf.numberToTerraform(struct!.snatFail),
    snat_force_preserve_alloc: cdktf.numberToTerraform(struct!.snatForcePreserveAlloc),
    snat_force_preserve_free: cdktf.numberToTerraform(struct!.snatForcePreserveFree),
    snat_icmp_error_process: cdktf.numberToTerraform(struct!.snatIcmpErrorProcess),
    snat_icmp_no_match: cdktf.numberToTerraform(struct!.snatIcmpNoMatch),
    snat_no_fwd_route: cdktf.numberToTerraform(struct!.snatNoFwdRoute),
    snat_no_rev_route: cdktf.numberToTerraform(struct!.snatNoRevRoute),
    snat_port_overload_fail: cdktf.numberToTerraform(struct!.snatPortOverloadFail),
    ssl_cps_exceed: cdktf.numberToTerraform(struct!.sslCpsExceed),
    ssl_tpt_exceed: cdktf.numberToTerraform(struct!.sslTptExceed),
    ssl_watermark_drop: cdktf.numberToTerraform(struct!.sslWatermarkDrop),
    stateless_conn_timeout: cdktf.numberToTerraform(struct!.statelessConnTimeout),
    svr_syn_handshake_fail: cdktf.numberToTerraform(struct!.svrSynHandshakeFail),
    svrselfail: cdktf.numberToTerraform(struct!.svrselfail),
    syn_rate: cdktf.numberToTerraform(struct!.synRate),
    syn_stale_sess: cdktf.numberToTerraform(struct!.synStaleSess),
    synattack: cdktf.numberToTerraform(struct!.synattack),
    syncookie_buff_drop: cdktf.numberToTerraform(struct!.syncookieBuffDrop),
    syncookie_buff_queue: cdktf.numberToTerraform(struct!.syncookieBuffQueue),
    syncookiescheckfailed: cdktf.numberToTerraform(struct!.syncookiescheckfailed),
    syncookiessent: cdktf.numberToTerraform(struct!.syncookiessent),
    syncookiessent_ts: cdktf.numberToTerraform(struct!.syncookiessentTs),
    syncookiessentfailed: cdktf.numberToTerraform(struct!.syncookiessentfailed),
    synreceived: cdktf.numberToTerraform(struct!.synreceived),
    synreceived_hw: cdktf.numberToTerraform(struct!.synreceivedHw),
    tcp_ax_rexmit_syn: cdktf.numberToTerraform(struct!.tcpAxRexmitSyn),
    tcp_connections_closed: cdktf.numberToTerraform(struct!.tcpConnectionsClosed),
    tcp_est: cdktf.numberToTerraform(struct!.tcpEst),
    tcp_fwd_ackfin: cdktf.numberToTerraform(struct!.tcpFwdAckfin),
    tcp_fwd_fin: cdktf.numberToTerraform(struct!.tcpFwdFin),
    tcp_fwd_fin_dup: cdktf.numberToTerraform(struct!.tcpFwdFinDup),
    tcp_fwd_last_ack: cdktf.numberToTerraform(struct!.tcpFwdLastAck),
    tcp_fwd_rst: cdktf.numberToTerraform(struct!.tcpFwdRst),
    tcp_invalid_drop: cdktf.numberToTerraform(struct!.tcpInvalidDrop),
    tcp_no_slb: cdktf.numberToTerraform(struct!.tcpNoSlb),
    tcp_rev_ackfin: cdktf.numberToTerraform(struct!.tcpRevAckfin),
    tcp_rev_fin: cdktf.numberToTerraform(struct!.tcpRevFin),
    tcp_rev_fin_dup: cdktf.numberToTerraform(struct!.tcpRevFinDup),
    tcp_rev_last_ack: cdktf.numberToTerraform(struct!.tcpRevLastAck),
    tcp_rev_rst: cdktf.numberToTerraform(struct!.tcpRevRst),
    tcp_rexmit_syn: cdktf.numberToTerraform(struct!.tcpRexmitSyn),
    tcp_rexmit_syn_delq: cdktf.numberToTerraform(struct!.tcpRexmitSynDelq),
    tcp_rexmit_synack: cdktf.numberToTerraform(struct!.tcpRexmitSynack),
    tcp_rexmit_synack_delq: cdktf.numberToTerraform(struct!.tcpRexmitSynackDelq),
    tcp_sess_aged_out: cdktf.numberToTerraform(struct!.tcpSessAgedOut),
    tcp_sess_noest_aged_out: cdktf.numberToTerraform(struct!.tcpSessNoestAgedOut),
    tcp_sess_noest_csyn_rcv_aged_out: cdktf.numberToTerraform(struct!.tcpSessNoestCsynRcvAgedOut),
    tcp_sess_noest_ssyn_xmit_aged_out: cdktf.numberToTerraform(struct!.tcpSessNoestSsynXmitAgedOut),
    tcp_syn_rcv_ack: cdktf.numberToTerraform(struct!.tcpSynRcvAck),
    tcp_syn_rcv_rst: cdktf.numberToTerraform(struct!.tcpSynRcvRst),
    tcpotherflags_drop: cdktf.numberToTerraform(struct!.tcpotherflagsDrop),
    tcpsyndata_drop: cdktf.numberToTerraform(struct!.tcpsyndataDrop),
    throttle_syn: cdktf.numberToTerraform(struct!.throttleSyn),
    udp_no_slb: cdktf.numberToTerraform(struct!.udpNoSlb),
    udp_req_more_resp: cdktf.numberToTerraform(struct!.udpReqMoreResp),
    udp_req_one_oneplus_resp: cdktf.numberToTerraform(struct!.udpReqOneOneplusResp),
    udp_req_oneplus: cdktf.numberToTerraform(struct!.udpReqOneplus),
    udp_req_oneplus_no_resp: cdktf.numberToTerraform(struct!.udpReqOneplusNoResp),
    udp_req_resp_notmatch: cdktf.numberToTerraform(struct!.udpReqRespNotmatch),
    udp_resp_more_req: cdktf.numberToTerraform(struct!.udpRespMoreReq),
    udp_resp_oneplus: cdktf.numberToTerraform(struct!.udpRespOneplus),
    udp_sess_aged_out: cdktf.numberToTerraform(struct!.udpSessAgedOut),
  }
}


export function dataThunderSlbL4StatsStatsToHclTerraform(struct?: DataThunderSlbL4StatsStatsOutputReference | DataThunderSlbL4StatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anomaly_bad_content: {
      value: cdktf.numberToHclTerraform(struct!.anomalyBadContent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    anomaly_out_seq: {
      value: cdktf.numberToHclTerraform(struct!.anomalyOutSeq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    anomaly_pbslb_drop: {
      value: cdktf.numberToHclTerraform(struct!.anomalyPbslbDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    anomaly_zero_win: {
      value: cdktf.numberToHclTerraform(struct!.anomalyZeroWin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auto_reassign: {
      value: cdktf.numberToHclTerraform(struct!.autoReassign),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bw_rate_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.bwRateLimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bw_watermark_drop: {
      value: cdktf.numberToHclTerraform(struct!.bwWatermarkDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concurrent_conn_exceed: {
      value: cdktf.numberToHclTerraform(struct!.concurrentConnExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_rate_limit_drop: {
      value: cdktf.numberToHclTerraform(struct!.connRateLimitDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_rate_limit_reset: {
      value: cdktf.numberToHclTerraform(struct!.connRateLimitReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connlimit_drop: {
      value: cdktf.numberToHclTerraform(struct!.connlimitDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connlimit_reset: {
      value: cdktf.numberToHclTerraform(struct!.connlimitReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_id_switch: {
      value: cdktf.numberToHclTerraform(struct!.dnsIdSwitch),
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
    dnssec_switch: {
      value: cdktf.numberToHclTerraform(struct!.dnssecSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_aflex: {
      value: cdktf.numberToHclTerraform(struct!.dropAflex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_gslb: {
      value: cdktf.numberToHclTerraform(struct!.dropGslb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fast_aging_reset: {
      value: cdktf.numberToHclTerraform(struct!.fastAgingReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fast_aging_set: {
      value: cdktf.numberToHclTerraform(struct!.fastAgingSet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fast_path_l2_reroute: {
      value: cdktf.numberToHclTerraform(struct!.fastPathL2Reroute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fast_path_reroute: {
      value: cdktf.numberToHclTerraform(struct!.fastPathReroute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_c_invalid_header: {
      value: cdktf.numberToHclTerraform(struct!.gtpCInvalidHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_c_invalid_message: {
      value: cdktf.numberToHclTerraform(struct!.gtpCInvalidMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_c_invalid_port: {
      value: cdktf.numberToHclTerraform(struct!.gtpCInvalidPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_msl: {
      value: cdktf.numberToHclTerraform(struct!.ignoreMsl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inband_hm_reassign: {
      value: cdktf.numberToHclTerraform(struct!.inbandHmReassign),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inband_hm_retry: {
      value: cdktf.numberToHclTerraform(struct!.inbandHmRetry),
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
    l2_dsr: {
      value: cdktf.numberToHclTerraform(struct!.l2Dsr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_dsr: {
      value: cdktf.numberToHclTerraform(struct!.l3Dsr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_cps_exceed: {
      value: cdktf.numberToHclTerraform(struct!.l4CpsExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l7_cps_exceed: {
      value: cdktf.numberToHclTerraform(struct!.l7CpsExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_cps_exceed: {
      value: cdktf.numberToHclTerraform(struct!.natCpsExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_resourse_drop: {
      value: cdktf.numberToHclTerraform(struct!.noResourseDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_vport_drop: {
      value: cdktf.numberToHclTerraform(struct!.noVportDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    noroute: {
      value: cdktf.numberToHclTerraform(struct!.noroute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nosyn_drop: {
      value: cdktf.numberToHclTerraform(struct!.nosynDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nosyn_drop_ack: {
      value: cdktf.numberToHclTerraform(struct!.nosynDropAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nosyn_drop_fin: {
      value: cdktf.numberToHclTerraform(struct!.nosynDropFin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nosyn_drop_rst: {
      value: cdktf.numberToHclTerraform(struct!.nosynDropRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    novport_drop: {
      value: cdktf.numberToHclTerraform(struct!.novportDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_sess_aged_out: {
      value: cdktf.numberToHclTerraform(struct!.otherSessAgedOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_seq_ack_drop: {
      value: cdktf.numberToHclTerraform(struct!.outSeqAckDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outrst: {
      value: cdktf.numberToHclTerraform(struct!.outrst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outrst_ack_attack: {
      value: cdktf.numberToHclTerraform(struct!.outrstAckAttack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outrst_aflex: {
      value: cdktf.numberToHclTerraform(struct!.outrstAflex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outrst_broker: {
      value: cdktf.numberToHclTerraform(struct!.outrstBroker),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outrst_nosyn: {
      value: cdktf.numberToHclTerraform(struct!.outrstNosyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outrst_stale_sess: {
      value: cdktf.numberToHclTerraform(struct!.outrstStaleSess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outrst_tcpproxy: {
      value: cdktf.numberToHclTerraform(struct!.outrstTcpproxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pbslb_entry_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.pbslbEntryLimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_preserve_attempt: {
      value: cdktf.numberToHclTerraform(struct!.portPreserveAttempt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_preserve_succ: {
      value: cdktf.numberToHclTerraform(struct!.portPreserveSucc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_header_insert: {
      value: cdktf.numberToHclTerraform(struct!.proxyHeaderInsert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_header_rexmit: {
      value: cdktf.numberToHclTerraform(struct!.proxyHeaderRexmit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_nosock_drop: {
      value: cdktf.numberToHclTerraform(struct!.proxyNosockDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_prot_drop: {
      value: cdktf.numberToHclTerraform(struct!.proxyProtDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_prot_error: {
      value: cdktf.numberToHclTerraform(struct!.proxyProtError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_drop_reset_unkn: {
      value: cdktf.numberToHclTerraform(struct!.rateDropResetUnkn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reselect_svrselfail: {
      value: cdktf.numberToHclTerraform(struct!.reselectSvrselfail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reset_l7_on_failover: {
      value: cdktf.numberToHclTerraform(struct!.resetL7OnFailover),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reset_unknown_conn: {
      value: cdktf.numberToHclTerraform(struct!.resetUnknownConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_down_del: {
      value: cdktf.numberToHclTerraform(struct!.serverDownDel),
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
    skip_insert_client_ip: {
      value: cdktf.numberToHclTerraform(struct!.skipInsertClientIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_gtp_proxy_c_process_local_rr: {
      value: cdktf.numberToHclTerraform(struct!.slbGtpProxyCProcessLocalRr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_gtp_proxy_retx_requests: {
      value: cdktf.numberToHclTerraform(struct!.slbGtpProxyRetxRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_gtp_proxy_smp_created: {
      value: cdktf.numberToHclTerraform(struct!.slbGtpProxySmpCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_gtp_proxy_smp_creation_failed: {
      value: cdktf.numberToHclTerraform(struct!.slbGtpProxySmpCreationFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_gtp_proxy_smp_free_not_found: {
      value: cdktf.numberToHclTerraform(struct!.slbGtpProxySmpFreeNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_gtp_proxy_smp_freed: {
      value: cdktf.numberToHclTerraform(struct!.slbGtpProxySmpFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_gtp_proxy_smp_match: {
      value: cdktf.numberToHclTerraform(struct!.slbGtpProxySmpMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slb_gtp_proxy_smp_no_match: {
      value: cdktf.numberToHclTerraform(struct!.slbGtpProxySmpNoMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smart_nat_id_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.smartNatIdMismatch),
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
    snat_force_preserve_alloc: {
      value: cdktf.numberToHclTerraform(struct!.snatForcePreserveAlloc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_force_preserve_free: {
      value: cdktf.numberToHclTerraform(struct!.snatForcePreserveFree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_icmp_error_process: {
      value: cdktf.numberToHclTerraform(struct!.snatIcmpErrorProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_icmp_no_match: {
      value: cdktf.numberToHclTerraform(struct!.snatIcmpNoMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_no_fwd_route: {
      value: cdktf.numberToHclTerraform(struct!.snatNoFwdRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_no_rev_route: {
      value: cdktf.numberToHclTerraform(struct!.snatNoRevRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_port_overload_fail: {
      value: cdktf.numberToHclTerraform(struct!.snatPortOverloadFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_cps_exceed: {
      value: cdktf.numberToHclTerraform(struct!.sslCpsExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_tpt_exceed: {
      value: cdktf.numberToHclTerraform(struct!.sslTptExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_watermark_drop: {
      value: cdktf.numberToHclTerraform(struct!.sslWatermarkDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stateless_conn_timeout: {
      value: cdktf.numberToHclTerraform(struct!.statelessConnTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    svr_syn_handshake_fail: {
      value: cdktf.numberToHclTerraform(struct!.svrSynHandshakeFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    svrselfail: {
      value: cdktf.numberToHclTerraform(struct!.svrselfail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_rate: {
      value: cdktf.numberToHclTerraform(struct!.synRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_stale_sess: {
      value: cdktf.numberToHclTerraform(struct!.synStaleSess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    synattack: {
      value: cdktf.numberToHclTerraform(struct!.synattack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syncookie_buff_drop: {
      value: cdktf.numberToHclTerraform(struct!.syncookieBuffDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syncookie_buff_queue: {
      value: cdktf.numberToHclTerraform(struct!.syncookieBuffQueue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syncookiescheckfailed: {
      value: cdktf.numberToHclTerraform(struct!.syncookiescheckfailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syncookiessent: {
      value: cdktf.numberToHclTerraform(struct!.syncookiessent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syncookiessent_ts: {
      value: cdktf.numberToHclTerraform(struct!.syncookiessentTs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syncookiessentfailed: {
      value: cdktf.numberToHclTerraform(struct!.syncookiessentfailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    synreceived: {
      value: cdktf.numberToHclTerraform(struct!.synreceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    synreceived_hw: {
      value: cdktf.numberToHclTerraform(struct!.synreceivedHw),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_ax_rexmit_syn: {
      value: cdktf.numberToHclTerraform(struct!.tcpAxRexmitSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_connections_closed: {
      value: cdktf.numberToHclTerraform(struct!.tcpConnectionsClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_est: {
      value: cdktf.numberToHclTerraform(struct!.tcpEst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_fwd_ackfin: {
      value: cdktf.numberToHclTerraform(struct!.tcpFwdAckfin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_fwd_fin: {
      value: cdktf.numberToHclTerraform(struct!.tcpFwdFin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_fwd_fin_dup: {
      value: cdktf.numberToHclTerraform(struct!.tcpFwdFinDup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_fwd_last_ack: {
      value: cdktf.numberToHclTerraform(struct!.tcpFwdLastAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_fwd_rst: {
      value: cdktf.numberToHclTerraform(struct!.tcpFwdRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_invalid_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpInvalidDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_no_slb: {
      value: cdktf.numberToHclTerraform(struct!.tcpNoSlb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_rev_ackfin: {
      value: cdktf.numberToHclTerraform(struct!.tcpRevAckfin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_rev_fin: {
      value: cdktf.numberToHclTerraform(struct!.tcpRevFin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_rev_fin_dup: {
      value: cdktf.numberToHclTerraform(struct!.tcpRevFinDup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_rev_last_ack: {
      value: cdktf.numberToHclTerraform(struct!.tcpRevLastAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_rev_rst: {
      value: cdktf.numberToHclTerraform(struct!.tcpRevRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_rexmit_syn: {
      value: cdktf.numberToHclTerraform(struct!.tcpRexmitSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_rexmit_syn_delq: {
      value: cdktf.numberToHclTerraform(struct!.tcpRexmitSynDelq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_rexmit_synack: {
      value: cdktf.numberToHclTerraform(struct!.tcpRexmitSynack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_rexmit_synack_delq: {
      value: cdktf.numberToHclTerraform(struct!.tcpRexmitSynackDelq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_sess_aged_out: {
      value: cdktf.numberToHclTerraform(struct!.tcpSessAgedOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_sess_noest_aged_out: {
      value: cdktf.numberToHclTerraform(struct!.tcpSessNoestAgedOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_sess_noest_csyn_rcv_aged_out: {
      value: cdktf.numberToHclTerraform(struct!.tcpSessNoestCsynRcvAgedOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_sess_noest_ssyn_xmit_aged_out: {
      value: cdktf.numberToHclTerraform(struct!.tcpSessNoestSsynXmitAgedOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syn_rcv_ack: {
      value: cdktf.numberToHclTerraform(struct!.tcpSynRcvAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syn_rcv_rst: {
      value: cdktf.numberToHclTerraform(struct!.tcpSynRcvRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcpotherflags_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpotherflagsDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcpsyndata_drop: {
      value: cdktf.numberToHclTerraform(struct!.tcpsyndataDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    throttle_syn: {
      value: cdktf.numberToHclTerraform(struct!.throttleSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_no_slb: {
      value: cdktf.numberToHclTerraform(struct!.udpNoSlb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_req_more_resp: {
      value: cdktf.numberToHclTerraform(struct!.udpReqMoreResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_req_one_oneplus_resp: {
      value: cdktf.numberToHclTerraform(struct!.udpReqOneOneplusResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_req_oneplus: {
      value: cdktf.numberToHclTerraform(struct!.udpReqOneplus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_req_oneplus_no_resp: {
      value: cdktf.numberToHclTerraform(struct!.udpReqOneplusNoResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_req_resp_notmatch: {
      value: cdktf.numberToHclTerraform(struct!.udpReqRespNotmatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_resp_more_req: {
      value: cdktf.numberToHclTerraform(struct!.udpRespMoreReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_resp_oneplus: {
      value: cdktf.numberToHclTerraform(struct!.udpRespOneplus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_sess_aged_out: {
      value: cdktf.numberToHclTerraform(struct!.udpSessAgedOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbL4StatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbL4StatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._anomalyBadContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.anomalyBadContent = this._anomalyBadContent;
    }
    if (this._anomalyOutSeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.anomalyOutSeq = this._anomalyOutSeq;
    }
    if (this._anomalyPbslbDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.anomalyPbslbDrop = this._anomalyPbslbDrop;
    }
    if (this._anomalyZeroWin !== undefined) {
      hasAnyValues = true;
      internalValueResult.anomalyZeroWin = this._anomalyZeroWin;
    }
    if (this._autoReassign !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoReassign = this._autoReassign;
    }
    if (this._bwRateLimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwRateLimitExceed = this._bwRateLimitExceed;
    }
    if (this._bwWatermarkDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwWatermarkDrop = this._bwWatermarkDrop;
    }
    if (this._concurrentConnExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.concurrentConnExceed = this._concurrentConnExceed;
    }
    if (this._connRateLimitDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.connRateLimitDrop = this._connRateLimitDrop;
    }
    if (this._connRateLimitReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.connRateLimitReset = this._connRateLimitReset;
    }
    if (this._connlimitDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.connlimitDrop = this._connlimitDrop;
    }
    if (this._connlimitReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.connlimitReset = this._connlimitReset;
    }
    if (this._dnsIdSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIdSwitch = this._dnsIdSwitch;
    }
    if (this._dnsPolicyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsPolicyDrop = this._dnsPolicyDrop;
    }
    if (this._dnssecSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnssecSwitch = this._dnssecSwitch;
    }
    if (this._dropAflex !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropAflex = this._dropAflex;
    }
    if (this._dropGslb !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropGslb = this._dropGslb;
    }
    if (this._fastAgingReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastAgingReset = this._fastAgingReset;
    }
    if (this._fastAgingSet !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastAgingSet = this._fastAgingSet;
    }
    if (this._fastPathL2Reroute !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastPathL2Reroute = this._fastPathL2Reroute;
    }
    if (this._fastPathReroute !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastPathReroute = this._fastPathReroute;
    }
    if (this._gtpCInvalidHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpCInvalidHeader = this._gtpCInvalidHeader;
    }
    if (this._gtpCInvalidMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpCInvalidMessage = this._gtpCInvalidMessage;
    }
    if (this._gtpCInvalidPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpCInvalidPort = this._gtpCInvalidPort;
    }
    if (this._ignoreMsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMsl = this._ignoreMsl;
    }
    if (this._inbandHmReassign !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbandHmReassign = this._inbandHmReassign;
    }
    if (this._inbandHmRetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.inbandHmRetry = this._inbandHmRetry;
    }
    if (this._intcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.intcp = this._intcp;
    }
    if (this._inudp !== undefined) {
      hasAnyValues = true;
      internalValueResult.inudp = this._inudp;
    }
    if (this._l2Dsr !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2Dsr = this._l2Dsr;
    }
    if (this._l3Dsr !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3Dsr = this._l3Dsr;
    }
    if (this._l4CpsExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4CpsExceed = this._l4CpsExceed;
    }
    if (this._l7CpsExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7CpsExceed = this._l7CpsExceed;
    }
    if (this._natCpsExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.natCpsExceed = this._natCpsExceed;
    }
    if (this._noResourseDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.noResourseDrop = this._noResourseDrop;
    }
    if (this._noVportDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.noVportDrop = this._noVportDrop;
    }
    if (this._noroute !== undefined) {
      hasAnyValues = true;
      internalValueResult.noroute = this._noroute;
    }
    if (this._nosynDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nosynDrop = this._nosynDrop;
    }
    if (this._nosynDropAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.nosynDropAck = this._nosynDropAck;
    }
    if (this._nosynDropFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.nosynDropFin = this._nosynDropFin;
    }
    if (this._nosynDropRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.nosynDropRst = this._nosynDropRst;
    }
    if (this._novportDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.novportDrop = this._novportDrop;
    }
    if (this._otherSessAgedOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherSessAgedOut = this._otherSessAgedOut;
    }
    if (this._outSeqAckDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.outSeqAckDrop = this._outSeqAckDrop;
    }
    if (this._outrst !== undefined) {
      hasAnyValues = true;
      internalValueResult.outrst = this._outrst;
    }
    if (this._outrstAckAttack !== undefined) {
      hasAnyValues = true;
      internalValueResult.outrstAckAttack = this._outrstAckAttack;
    }
    if (this._outrstAflex !== undefined) {
      hasAnyValues = true;
      internalValueResult.outrstAflex = this._outrstAflex;
    }
    if (this._outrstBroker !== undefined) {
      hasAnyValues = true;
      internalValueResult.outrstBroker = this._outrstBroker;
    }
    if (this._outrstNosyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.outrstNosyn = this._outrstNosyn;
    }
    if (this._outrstStaleSess !== undefined) {
      hasAnyValues = true;
      internalValueResult.outrstStaleSess = this._outrstStaleSess;
    }
    if (this._outrstTcpproxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.outrstTcpproxy = this._outrstTcpproxy;
    }
    if (this._pbslbEntryLimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbslbEntryLimitExceed = this._pbslbEntryLimitExceed;
    }
    if (this._portPreserveAttempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.portPreserveAttempt = this._portPreserveAttempt;
    }
    if (this._portPreserveSucc !== undefined) {
      hasAnyValues = true;
      internalValueResult.portPreserveSucc = this._portPreserveSucc;
    }
    if (this._proxyHeaderInsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyHeaderInsert = this._proxyHeaderInsert;
    }
    if (this._proxyHeaderRexmit !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyHeaderRexmit = this._proxyHeaderRexmit;
    }
    if (this._proxyNosockDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyNosockDrop = this._proxyNosockDrop;
    }
    if (this._proxyProtDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyProtDrop = this._proxyProtDrop;
    }
    if (this._proxyProtError !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyProtError = this._proxyProtError;
    }
    if (this._rateDropResetUnkn !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateDropResetUnkn = this._rateDropResetUnkn;
    }
    if (this._reselectSvrselfail !== undefined) {
      hasAnyValues = true;
      internalValueResult.reselectSvrselfail = this._reselectSvrselfail;
    }
    if (this._resetL7OnFailover !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetL7OnFailover = this._resetL7OnFailover;
    }
    if (this._resetUnknownConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetUnknownConn = this._resetUnknownConn;
    }
    if (this._serverDownDel !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverDownDel = this._serverDownDel;
    }
    if (this._sessAgedOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessAgedOut = this._sessAgedOut;
    }
    if (this._skipInsertClientIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipInsertClientIp = this._skipInsertClientIp;
    }
    if (this._slbGtpProxyCProcessLocalRr !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbGtpProxyCProcessLocalRr = this._slbGtpProxyCProcessLocalRr;
    }
    if (this._slbGtpProxyRetxRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbGtpProxyRetxRequests = this._slbGtpProxyRetxRequests;
    }
    if (this._slbGtpProxySmpCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbGtpProxySmpCreated = this._slbGtpProxySmpCreated;
    }
    if (this._slbGtpProxySmpCreationFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbGtpProxySmpCreationFailed = this._slbGtpProxySmpCreationFailed;
    }
    if (this._slbGtpProxySmpFreeNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbGtpProxySmpFreeNotFound = this._slbGtpProxySmpFreeNotFound;
    }
    if (this._slbGtpProxySmpFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbGtpProxySmpFreed = this._slbGtpProxySmpFreed;
    }
    if (this._slbGtpProxySmpMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbGtpProxySmpMatch = this._slbGtpProxySmpMatch;
    }
    if (this._slbGtpProxySmpNoMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbGtpProxySmpNoMatch = this._slbGtpProxySmpNoMatch;
    }
    if (this._smartNatIdMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartNatIdMismatch = this._smartNatIdMismatch;
    }
    if (this._snatFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatFail = this._snatFail;
    }
    if (this._snatForcePreserveAlloc !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatForcePreserveAlloc = this._snatForcePreserveAlloc;
    }
    if (this._snatForcePreserveFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatForcePreserveFree = this._snatForcePreserveFree;
    }
    if (this._snatIcmpErrorProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatIcmpErrorProcess = this._snatIcmpErrorProcess;
    }
    if (this._snatIcmpNoMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatIcmpNoMatch = this._snatIcmpNoMatch;
    }
    if (this._snatNoFwdRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatNoFwdRoute = this._snatNoFwdRoute;
    }
    if (this._snatNoRevRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatNoRevRoute = this._snatNoRevRoute;
    }
    if (this._snatPortOverloadFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatPortOverloadFail = this._snatPortOverloadFail;
    }
    if (this._sslCpsExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCpsExceed = this._sslCpsExceed;
    }
    if (this._sslTptExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslTptExceed = this._sslTptExceed;
    }
    if (this._sslWatermarkDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslWatermarkDrop = this._sslWatermarkDrop;
    }
    if (this._statelessConnTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessConnTimeout = this._statelessConnTimeout;
    }
    if (this._svrSynHandshakeFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.svrSynHandshakeFail = this._svrSynHandshakeFail;
    }
    if (this._svrselfail !== undefined) {
      hasAnyValues = true;
      internalValueResult.svrselfail = this._svrselfail;
    }
    if (this._synRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.synRate = this._synRate;
    }
    if (this._synStaleSess !== undefined) {
      hasAnyValues = true;
      internalValueResult.synStaleSess = this._synStaleSess;
    }
    if (this._synattack !== undefined) {
      hasAnyValues = true;
      internalValueResult.synattack = this._synattack;
    }
    if (this._syncookieBuffDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncookieBuffDrop = this._syncookieBuffDrop;
    }
    if (this._syncookieBuffQueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncookieBuffQueue = this._syncookieBuffQueue;
    }
    if (this._syncookiescheckfailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncookiescheckfailed = this._syncookiescheckfailed;
    }
    if (this._syncookiessent !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncookiessent = this._syncookiessent;
    }
    if (this._syncookiessentTs !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncookiessentTs = this._syncookiessentTs;
    }
    if (this._syncookiessentfailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncookiessentfailed = this._syncookiessentfailed;
    }
    if (this._synreceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.synreceived = this._synreceived;
    }
    if (this._synreceivedHw !== undefined) {
      hasAnyValues = true;
      internalValueResult.synreceivedHw = this._synreceivedHw;
    }
    if (this._tcpAxRexmitSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpAxRexmitSyn = this._tcpAxRexmitSyn;
    }
    if (this._tcpConnectionsClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpConnectionsClosed = this._tcpConnectionsClosed;
    }
    if (this._tcpEst !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpEst = this._tcpEst;
    }
    if (this._tcpFwdAckfin !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFwdAckfin = this._tcpFwdAckfin;
    }
    if (this._tcpFwdFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFwdFin = this._tcpFwdFin;
    }
    if (this._tcpFwdFinDup !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFwdFinDup = this._tcpFwdFinDup;
    }
    if (this._tcpFwdLastAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFwdLastAck = this._tcpFwdLastAck;
    }
    if (this._tcpFwdRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFwdRst = this._tcpFwdRst;
    }
    if (this._tcpInvalidDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpInvalidDrop = this._tcpInvalidDrop;
    }
    if (this._tcpNoSlb !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpNoSlb = this._tcpNoSlb;
    }
    if (this._tcpRevAckfin !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRevAckfin = this._tcpRevAckfin;
    }
    if (this._tcpRevFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRevFin = this._tcpRevFin;
    }
    if (this._tcpRevFinDup !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRevFinDup = this._tcpRevFinDup;
    }
    if (this._tcpRevLastAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRevLastAck = this._tcpRevLastAck;
    }
    if (this._tcpRevRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRevRst = this._tcpRevRst;
    }
    if (this._tcpRexmitSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRexmitSyn = this._tcpRexmitSyn;
    }
    if (this._tcpRexmitSynDelq !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRexmitSynDelq = this._tcpRexmitSynDelq;
    }
    if (this._tcpRexmitSynack !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRexmitSynack = this._tcpRexmitSynack;
    }
    if (this._tcpRexmitSynackDelq !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRexmitSynackDelq = this._tcpRexmitSynackDelq;
    }
    if (this._tcpSessAgedOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSessAgedOut = this._tcpSessAgedOut;
    }
    if (this._tcpSessNoestAgedOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSessNoestAgedOut = this._tcpSessNoestAgedOut;
    }
    if (this._tcpSessNoestCsynRcvAgedOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSessNoestCsynRcvAgedOut = this._tcpSessNoestCsynRcvAgedOut;
    }
    if (this._tcpSessNoestSsynXmitAgedOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSessNoestSsynXmitAgedOut = this._tcpSessNoestSsynXmitAgedOut;
    }
    if (this._tcpSynRcvAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynRcvAck = this._tcpSynRcvAck;
    }
    if (this._tcpSynRcvRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynRcvRst = this._tcpSynRcvRst;
    }
    if (this._tcpotherflagsDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpotherflagsDrop = this._tcpotherflagsDrop;
    }
    if (this._tcpsyndataDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpsyndataDrop = this._tcpsyndataDrop;
    }
    if (this._throttleSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttleSyn = this._throttleSyn;
    }
    if (this._udpNoSlb !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpNoSlb = this._udpNoSlb;
    }
    if (this._udpReqMoreResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpReqMoreResp = this._udpReqMoreResp;
    }
    if (this._udpReqOneOneplusResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpReqOneOneplusResp = this._udpReqOneOneplusResp;
    }
    if (this._udpReqOneplus !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpReqOneplus = this._udpReqOneplus;
    }
    if (this._udpReqOneplusNoResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpReqOneplusNoResp = this._udpReqOneplusNoResp;
    }
    if (this._udpReqRespNotmatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpReqRespNotmatch = this._udpReqRespNotmatch;
    }
    if (this._udpRespMoreReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpRespMoreReq = this._udpRespMoreReq;
    }
    if (this._udpRespOneplus !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpRespOneplus = this._udpRespOneplus;
    }
    if (this._udpSessAgedOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpSessAgedOut = this._udpSessAgedOut;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbL4StatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._anomalyBadContent = undefined;
      this._anomalyOutSeq = undefined;
      this._anomalyPbslbDrop = undefined;
      this._anomalyZeroWin = undefined;
      this._autoReassign = undefined;
      this._bwRateLimitExceed = undefined;
      this._bwWatermarkDrop = undefined;
      this._concurrentConnExceed = undefined;
      this._connRateLimitDrop = undefined;
      this._connRateLimitReset = undefined;
      this._connlimitDrop = undefined;
      this._connlimitReset = undefined;
      this._dnsIdSwitch = undefined;
      this._dnsPolicyDrop = undefined;
      this._dnssecSwitch = undefined;
      this._dropAflex = undefined;
      this._dropGslb = undefined;
      this._fastAgingReset = undefined;
      this._fastAgingSet = undefined;
      this._fastPathL2Reroute = undefined;
      this._fastPathReroute = undefined;
      this._gtpCInvalidHeader = undefined;
      this._gtpCInvalidMessage = undefined;
      this._gtpCInvalidPort = undefined;
      this._ignoreMsl = undefined;
      this._inbandHmReassign = undefined;
      this._inbandHmRetry = undefined;
      this._intcp = undefined;
      this._inudp = undefined;
      this._l2Dsr = undefined;
      this._l3Dsr = undefined;
      this._l4CpsExceed = undefined;
      this._l7CpsExceed = undefined;
      this._natCpsExceed = undefined;
      this._noResourseDrop = undefined;
      this._noVportDrop = undefined;
      this._noroute = undefined;
      this._nosynDrop = undefined;
      this._nosynDropAck = undefined;
      this._nosynDropFin = undefined;
      this._nosynDropRst = undefined;
      this._novportDrop = undefined;
      this._otherSessAgedOut = undefined;
      this._outSeqAckDrop = undefined;
      this._outrst = undefined;
      this._outrstAckAttack = undefined;
      this._outrstAflex = undefined;
      this._outrstBroker = undefined;
      this._outrstNosyn = undefined;
      this._outrstStaleSess = undefined;
      this._outrstTcpproxy = undefined;
      this._pbslbEntryLimitExceed = undefined;
      this._portPreserveAttempt = undefined;
      this._portPreserveSucc = undefined;
      this._proxyHeaderInsert = undefined;
      this._proxyHeaderRexmit = undefined;
      this._proxyNosockDrop = undefined;
      this._proxyProtDrop = undefined;
      this._proxyProtError = undefined;
      this._rateDropResetUnkn = undefined;
      this._reselectSvrselfail = undefined;
      this._resetL7OnFailover = undefined;
      this._resetUnknownConn = undefined;
      this._serverDownDel = undefined;
      this._sessAgedOut = undefined;
      this._skipInsertClientIp = undefined;
      this._slbGtpProxyCProcessLocalRr = undefined;
      this._slbGtpProxyRetxRequests = undefined;
      this._slbGtpProxySmpCreated = undefined;
      this._slbGtpProxySmpCreationFailed = undefined;
      this._slbGtpProxySmpFreeNotFound = undefined;
      this._slbGtpProxySmpFreed = undefined;
      this._slbGtpProxySmpMatch = undefined;
      this._slbGtpProxySmpNoMatch = undefined;
      this._smartNatIdMismatch = undefined;
      this._snatFail = undefined;
      this._snatForcePreserveAlloc = undefined;
      this._snatForcePreserveFree = undefined;
      this._snatIcmpErrorProcess = undefined;
      this._snatIcmpNoMatch = undefined;
      this._snatNoFwdRoute = undefined;
      this._snatNoRevRoute = undefined;
      this._snatPortOverloadFail = undefined;
      this._sslCpsExceed = undefined;
      this._sslTptExceed = undefined;
      this._sslWatermarkDrop = undefined;
      this._statelessConnTimeout = undefined;
      this._svrSynHandshakeFail = undefined;
      this._svrselfail = undefined;
      this._synRate = undefined;
      this._synStaleSess = undefined;
      this._synattack = undefined;
      this._syncookieBuffDrop = undefined;
      this._syncookieBuffQueue = undefined;
      this._syncookiescheckfailed = undefined;
      this._syncookiessent = undefined;
      this._syncookiessentTs = undefined;
      this._syncookiessentfailed = undefined;
      this._synreceived = undefined;
      this._synreceivedHw = undefined;
      this._tcpAxRexmitSyn = undefined;
      this._tcpConnectionsClosed = undefined;
      this._tcpEst = undefined;
      this._tcpFwdAckfin = undefined;
      this._tcpFwdFin = undefined;
      this._tcpFwdFinDup = undefined;
      this._tcpFwdLastAck = undefined;
      this._tcpFwdRst = undefined;
      this._tcpInvalidDrop = undefined;
      this._tcpNoSlb = undefined;
      this._tcpRevAckfin = undefined;
      this._tcpRevFin = undefined;
      this._tcpRevFinDup = undefined;
      this._tcpRevLastAck = undefined;
      this._tcpRevRst = undefined;
      this._tcpRexmitSyn = undefined;
      this._tcpRexmitSynDelq = undefined;
      this._tcpRexmitSynack = undefined;
      this._tcpRexmitSynackDelq = undefined;
      this._tcpSessAgedOut = undefined;
      this._tcpSessNoestAgedOut = undefined;
      this._tcpSessNoestCsynRcvAgedOut = undefined;
      this._tcpSessNoestSsynXmitAgedOut = undefined;
      this._tcpSynRcvAck = undefined;
      this._tcpSynRcvRst = undefined;
      this._tcpotherflagsDrop = undefined;
      this._tcpsyndataDrop = undefined;
      this._throttleSyn = undefined;
      this._udpNoSlb = undefined;
      this._udpReqMoreResp = undefined;
      this._udpReqOneOneplusResp = undefined;
      this._udpReqOneplus = undefined;
      this._udpReqOneplusNoResp = undefined;
      this._udpReqRespNotmatch = undefined;
      this._udpRespMoreReq = undefined;
      this._udpRespOneplus = undefined;
      this._udpSessAgedOut = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._anomalyBadContent = value.anomalyBadContent;
      this._anomalyOutSeq = value.anomalyOutSeq;
      this._anomalyPbslbDrop = value.anomalyPbslbDrop;
      this._anomalyZeroWin = value.anomalyZeroWin;
      this._autoReassign = value.autoReassign;
      this._bwRateLimitExceed = value.bwRateLimitExceed;
      this._bwWatermarkDrop = value.bwWatermarkDrop;
      this._concurrentConnExceed = value.concurrentConnExceed;
      this._connRateLimitDrop = value.connRateLimitDrop;
      this._connRateLimitReset = value.connRateLimitReset;
      this._connlimitDrop = value.connlimitDrop;
      this._connlimitReset = value.connlimitReset;
      this._dnsIdSwitch = value.dnsIdSwitch;
      this._dnsPolicyDrop = value.dnsPolicyDrop;
      this._dnssecSwitch = value.dnssecSwitch;
      this._dropAflex = value.dropAflex;
      this._dropGslb = value.dropGslb;
      this._fastAgingReset = value.fastAgingReset;
      this._fastAgingSet = value.fastAgingSet;
      this._fastPathL2Reroute = value.fastPathL2Reroute;
      this._fastPathReroute = value.fastPathReroute;
      this._gtpCInvalidHeader = value.gtpCInvalidHeader;
      this._gtpCInvalidMessage = value.gtpCInvalidMessage;
      this._gtpCInvalidPort = value.gtpCInvalidPort;
      this._ignoreMsl = value.ignoreMsl;
      this._inbandHmReassign = value.inbandHmReassign;
      this._inbandHmRetry = value.inbandHmRetry;
      this._intcp = value.intcp;
      this._inudp = value.inudp;
      this._l2Dsr = value.l2Dsr;
      this._l3Dsr = value.l3Dsr;
      this._l4CpsExceed = value.l4CpsExceed;
      this._l7CpsExceed = value.l7CpsExceed;
      this._natCpsExceed = value.natCpsExceed;
      this._noResourseDrop = value.noResourseDrop;
      this._noVportDrop = value.noVportDrop;
      this._noroute = value.noroute;
      this._nosynDrop = value.nosynDrop;
      this._nosynDropAck = value.nosynDropAck;
      this._nosynDropFin = value.nosynDropFin;
      this._nosynDropRst = value.nosynDropRst;
      this._novportDrop = value.novportDrop;
      this._otherSessAgedOut = value.otherSessAgedOut;
      this._outSeqAckDrop = value.outSeqAckDrop;
      this._outrst = value.outrst;
      this._outrstAckAttack = value.outrstAckAttack;
      this._outrstAflex = value.outrstAflex;
      this._outrstBroker = value.outrstBroker;
      this._outrstNosyn = value.outrstNosyn;
      this._outrstStaleSess = value.outrstStaleSess;
      this._outrstTcpproxy = value.outrstTcpproxy;
      this._pbslbEntryLimitExceed = value.pbslbEntryLimitExceed;
      this._portPreserveAttempt = value.portPreserveAttempt;
      this._portPreserveSucc = value.portPreserveSucc;
      this._proxyHeaderInsert = value.proxyHeaderInsert;
      this._proxyHeaderRexmit = value.proxyHeaderRexmit;
      this._proxyNosockDrop = value.proxyNosockDrop;
      this._proxyProtDrop = value.proxyProtDrop;
      this._proxyProtError = value.proxyProtError;
      this._rateDropResetUnkn = value.rateDropResetUnkn;
      this._reselectSvrselfail = value.reselectSvrselfail;
      this._resetL7OnFailover = value.resetL7OnFailover;
      this._resetUnknownConn = value.resetUnknownConn;
      this._serverDownDel = value.serverDownDel;
      this._sessAgedOut = value.sessAgedOut;
      this._skipInsertClientIp = value.skipInsertClientIp;
      this._slbGtpProxyCProcessLocalRr = value.slbGtpProxyCProcessLocalRr;
      this._slbGtpProxyRetxRequests = value.slbGtpProxyRetxRequests;
      this._slbGtpProxySmpCreated = value.slbGtpProxySmpCreated;
      this._slbGtpProxySmpCreationFailed = value.slbGtpProxySmpCreationFailed;
      this._slbGtpProxySmpFreeNotFound = value.slbGtpProxySmpFreeNotFound;
      this._slbGtpProxySmpFreed = value.slbGtpProxySmpFreed;
      this._slbGtpProxySmpMatch = value.slbGtpProxySmpMatch;
      this._slbGtpProxySmpNoMatch = value.slbGtpProxySmpNoMatch;
      this._smartNatIdMismatch = value.smartNatIdMismatch;
      this._snatFail = value.snatFail;
      this._snatForcePreserveAlloc = value.snatForcePreserveAlloc;
      this._snatForcePreserveFree = value.snatForcePreserveFree;
      this._snatIcmpErrorProcess = value.snatIcmpErrorProcess;
      this._snatIcmpNoMatch = value.snatIcmpNoMatch;
      this._snatNoFwdRoute = value.snatNoFwdRoute;
      this._snatNoRevRoute = value.snatNoRevRoute;
      this._snatPortOverloadFail = value.snatPortOverloadFail;
      this._sslCpsExceed = value.sslCpsExceed;
      this._sslTptExceed = value.sslTptExceed;
      this._sslWatermarkDrop = value.sslWatermarkDrop;
      this._statelessConnTimeout = value.statelessConnTimeout;
      this._svrSynHandshakeFail = value.svrSynHandshakeFail;
      this._svrselfail = value.svrselfail;
      this._synRate = value.synRate;
      this._synStaleSess = value.synStaleSess;
      this._synattack = value.synattack;
      this._syncookieBuffDrop = value.syncookieBuffDrop;
      this._syncookieBuffQueue = value.syncookieBuffQueue;
      this._syncookiescheckfailed = value.syncookiescheckfailed;
      this._syncookiessent = value.syncookiessent;
      this._syncookiessentTs = value.syncookiessentTs;
      this._syncookiessentfailed = value.syncookiessentfailed;
      this._synreceived = value.synreceived;
      this._synreceivedHw = value.synreceivedHw;
      this._tcpAxRexmitSyn = value.tcpAxRexmitSyn;
      this._tcpConnectionsClosed = value.tcpConnectionsClosed;
      this._tcpEst = value.tcpEst;
      this._tcpFwdAckfin = value.tcpFwdAckfin;
      this._tcpFwdFin = value.tcpFwdFin;
      this._tcpFwdFinDup = value.tcpFwdFinDup;
      this._tcpFwdLastAck = value.tcpFwdLastAck;
      this._tcpFwdRst = value.tcpFwdRst;
      this._tcpInvalidDrop = value.tcpInvalidDrop;
      this._tcpNoSlb = value.tcpNoSlb;
      this._tcpRevAckfin = value.tcpRevAckfin;
      this._tcpRevFin = value.tcpRevFin;
      this._tcpRevFinDup = value.tcpRevFinDup;
      this._tcpRevLastAck = value.tcpRevLastAck;
      this._tcpRevRst = value.tcpRevRst;
      this._tcpRexmitSyn = value.tcpRexmitSyn;
      this._tcpRexmitSynDelq = value.tcpRexmitSynDelq;
      this._tcpRexmitSynack = value.tcpRexmitSynack;
      this._tcpRexmitSynackDelq = value.tcpRexmitSynackDelq;
      this._tcpSessAgedOut = value.tcpSessAgedOut;
      this._tcpSessNoestAgedOut = value.tcpSessNoestAgedOut;
      this._tcpSessNoestCsynRcvAgedOut = value.tcpSessNoestCsynRcvAgedOut;
      this._tcpSessNoestSsynXmitAgedOut = value.tcpSessNoestSsynXmitAgedOut;
      this._tcpSynRcvAck = value.tcpSynRcvAck;
      this._tcpSynRcvRst = value.tcpSynRcvRst;
      this._tcpotherflagsDrop = value.tcpotherflagsDrop;
      this._tcpsyndataDrop = value.tcpsyndataDrop;
      this._throttleSyn = value.throttleSyn;
      this._udpNoSlb = value.udpNoSlb;
      this._udpReqMoreResp = value.udpReqMoreResp;
      this._udpReqOneOneplusResp = value.udpReqOneOneplusResp;
      this._udpReqOneplus = value.udpReqOneplus;
      this._udpReqOneplusNoResp = value.udpReqOneplusNoResp;
      this._udpReqRespNotmatch = value.udpReqRespNotmatch;
      this._udpRespMoreReq = value.udpRespMoreReq;
      this._udpRespOneplus = value.udpRespOneplus;
      this._udpSessAgedOut = value.udpSessAgedOut;
    }
  }

  // anomaly_bad_content - computed: false, optional: true, required: false
  private _anomalyBadContent?: number; 
  public get anomalyBadContent() {
    return this.getNumberAttribute('anomaly_bad_content');
  }
  public set anomalyBadContent(value: number) {
    this._anomalyBadContent = value;
  }
  public resetAnomalyBadContent() {
    this._anomalyBadContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyBadContentInput() {
    return this._anomalyBadContent;
  }

  // anomaly_out_seq - computed: false, optional: true, required: false
  private _anomalyOutSeq?: number; 
  public get anomalyOutSeq() {
    return this.getNumberAttribute('anomaly_out_seq');
  }
  public set anomalyOutSeq(value: number) {
    this._anomalyOutSeq = value;
  }
  public resetAnomalyOutSeq() {
    this._anomalyOutSeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyOutSeqInput() {
    return this._anomalyOutSeq;
  }

  // anomaly_pbslb_drop - computed: false, optional: true, required: false
  private _anomalyPbslbDrop?: number; 
  public get anomalyPbslbDrop() {
    return this.getNumberAttribute('anomaly_pbslb_drop');
  }
  public set anomalyPbslbDrop(value: number) {
    this._anomalyPbslbDrop = value;
  }
  public resetAnomalyPbslbDrop() {
    this._anomalyPbslbDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyPbslbDropInput() {
    return this._anomalyPbslbDrop;
  }

  // anomaly_zero_win - computed: false, optional: true, required: false
  private _anomalyZeroWin?: number; 
  public get anomalyZeroWin() {
    return this.getNumberAttribute('anomaly_zero_win');
  }
  public set anomalyZeroWin(value: number) {
    this._anomalyZeroWin = value;
  }
  public resetAnomalyZeroWin() {
    this._anomalyZeroWin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyZeroWinInput() {
    return this._anomalyZeroWin;
  }

  // auto_reassign - computed: false, optional: true, required: false
  private _autoReassign?: number; 
  public get autoReassign() {
    return this.getNumberAttribute('auto_reassign');
  }
  public set autoReassign(value: number) {
    this._autoReassign = value;
  }
  public resetAutoReassign() {
    this._autoReassign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoReassignInput() {
    return this._autoReassign;
  }

  // bw_rate_limit_exceed - computed: false, optional: true, required: false
  private _bwRateLimitExceed?: number; 
  public get bwRateLimitExceed() {
    return this.getNumberAttribute('bw_rate_limit_exceed');
  }
  public set bwRateLimitExceed(value: number) {
    this._bwRateLimitExceed = value;
  }
  public resetBwRateLimitExceed() {
    this._bwRateLimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwRateLimitExceedInput() {
    return this._bwRateLimitExceed;
  }

  // bw_watermark_drop - computed: false, optional: true, required: false
  private _bwWatermarkDrop?: number; 
  public get bwWatermarkDrop() {
    return this.getNumberAttribute('bw_watermark_drop');
  }
  public set bwWatermarkDrop(value: number) {
    this._bwWatermarkDrop = value;
  }
  public resetBwWatermarkDrop() {
    this._bwWatermarkDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwWatermarkDropInput() {
    return this._bwWatermarkDrop;
  }

  // concurrent_conn_exceed - computed: false, optional: true, required: false
  private _concurrentConnExceed?: number; 
  public get concurrentConnExceed() {
    return this.getNumberAttribute('concurrent_conn_exceed');
  }
  public set concurrentConnExceed(value: number) {
    this._concurrentConnExceed = value;
  }
  public resetConcurrentConnExceed() {
    this._concurrentConnExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concurrentConnExceedInput() {
    return this._concurrentConnExceed;
  }

  // conn_rate_limit_drop - computed: false, optional: true, required: false
  private _connRateLimitDrop?: number; 
  public get connRateLimitDrop() {
    return this.getNumberAttribute('conn_rate_limit_drop');
  }
  public set connRateLimitDrop(value: number) {
    this._connRateLimitDrop = value;
  }
  public resetConnRateLimitDrop() {
    this._connRateLimitDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRateLimitDropInput() {
    return this._connRateLimitDrop;
  }

  // conn_rate_limit_reset - computed: false, optional: true, required: false
  private _connRateLimitReset?: number; 
  public get connRateLimitReset() {
    return this.getNumberAttribute('conn_rate_limit_reset');
  }
  public set connRateLimitReset(value: number) {
    this._connRateLimitReset = value;
  }
  public resetConnRateLimitReset() {
    this._connRateLimitReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRateLimitResetInput() {
    return this._connRateLimitReset;
  }

  // connlimit_drop - computed: false, optional: true, required: false
  private _connlimitDrop?: number; 
  public get connlimitDrop() {
    return this.getNumberAttribute('connlimit_drop');
  }
  public set connlimitDrop(value: number) {
    this._connlimitDrop = value;
  }
  public resetConnlimitDrop() {
    this._connlimitDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connlimitDropInput() {
    return this._connlimitDrop;
  }

  // connlimit_reset - computed: false, optional: true, required: false
  private _connlimitReset?: number; 
  public get connlimitReset() {
    return this.getNumberAttribute('connlimit_reset');
  }
  public set connlimitReset(value: number) {
    this._connlimitReset = value;
  }
  public resetConnlimitReset() {
    this._connlimitReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connlimitResetInput() {
    return this._connlimitReset;
  }

  // dns_id_switch - computed: false, optional: true, required: false
  private _dnsIdSwitch?: number; 
  public get dnsIdSwitch() {
    return this.getNumberAttribute('dns_id_switch');
  }
  public set dnsIdSwitch(value: number) {
    this._dnsIdSwitch = value;
  }
  public resetDnsIdSwitch() {
    this._dnsIdSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIdSwitchInput() {
    return this._dnsIdSwitch;
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

  // dnssec_switch - computed: false, optional: true, required: false
  private _dnssecSwitch?: number; 
  public get dnssecSwitch() {
    return this.getNumberAttribute('dnssec_switch');
  }
  public set dnssecSwitch(value: number) {
    this._dnssecSwitch = value;
  }
  public resetDnssecSwitch() {
    this._dnssecSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnssecSwitchInput() {
    return this._dnssecSwitch;
  }

  // drop_aflex - computed: false, optional: true, required: false
  private _dropAflex?: number; 
  public get dropAflex() {
    return this.getNumberAttribute('drop_aflex');
  }
  public set dropAflex(value: number) {
    this._dropAflex = value;
  }
  public resetDropAflex() {
    this._dropAflex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropAflexInput() {
    return this._dropAflex;
  }

  // drop_gslb - computed: false, optional: true, required: false
  private _dropGslb?: number; 
  public get dropGslb() {
    return this.getNumberAttribute('drop_gslb');
  }
  public set dropGslb(value: number) {
    this._dropGslb = value;
  }
  public resetDropGslb() {
    this._dropGslb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropGslbInput() {
    return this._dropGslb;
  }

  // fast_aging_reset - computed: false, optional: true, required: false
  private _fastAgingReset?: number; 
  public get fastAgingReset() {
    return this.getNumberAttribute('fast_aging_reset');
  }
  public set fastAgingReset(value: number) {
    this._fastAgingReset = value;
  }
  public resetFastAgingReset() {
    this._fastAgingReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastAgingResetInput() {
    return this._fastAgingReset;
  }

  // fast_aging_set - computed: false, optional: true, required: false
  private _fastAgingSet?: number; 
  public get fastAgingSet() {
    return this.getNumberAttribute('fast_aging_set');
  }
  public set fastAgingSet(value: number) {
    this._fastAgingSet = value;
  }
  public resetFastAgingSet() {
    this._fastAgingSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastAgingSetInput() {
    return this._fastAgingSet;
  }

  // fast_path_l2_reroute - computed: false, optional: true, required: false
  private _fastPathL2Reroute?: number; 
  public get fastPathL2Reroute() {
    return this.getNumberAttribute('fast_path_l2_reroute');
  }
  public set fastPathL2Reroute(value: number) {
    this._fastPathL2Reroute = value;
  }
  public resetFastPathL2Reroute() {
    this._fastPathL2Reroute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastPathL2RerouteInput() {
    return this._fastPathL2Reroute;
  }

  // fast_path_reroute - computed: false, optional: true, required: false
  private _fastPathReroute?: number; 
  public get fastPathReroute() {
    return this.getNumberAttribute('fast_path_reroute');
  }
  public set fastPathReroute(value: number) {
    this._fastPathReroute = value;
  }
  public resetFastPathReroute() {
    this._fastPathReroute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastPathRerouteInput() {
    return this._fastPathReroute;
  }

  // gtp_c_invalid_header - computed: false, optional: true, required: false
  private _gtpCInvalidHeader?: number; 
  public get gtpCInvalidHeader() {
    return this.getNumberAttribute('gtp_c_invalid_header');
  }
  public set gtpCInvalidHeader(value: number) {
    this._gtpCInvalidHeader = value;
  }
  public resetGtpCInvalidHeader() {
    this._gtpCInvalidHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpCInvalidHeaderInput() {
    return this._gtpCInvalidHeader;
  }

  // gtp_c_invalid_message - computed: false, optional: true, required: false
  private _gtpCInvalidMessage?: number; 
  public get gtpCInvalidMessage() {
    return this.getNumberAttribute('gtp_c_invalid_message');
  }
  public set gtpCInvalidMessage(value: number) {
    this._gtpCInvalidMessage = value;
  }
  public resetGtpCInvalidMessage() {
    this._gtpCInvalidMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpCInvalidMessageInput() {
    return this._gtpCInvalidMessage;
  }

  // gtp_c_invalid_port - computed: false, optional: true, required: false
  private _gtpCInvalidPort?: number; 
  public get gtpCInvalidPort() {
    return this.getNumberAttribute('gtp_c_invalid_port');
  }
  public set gtpCInvalidPort(value: number) {
    this._gtpCInvalidPort = value;
  }
  public resetGtpCInvalidPort() {
    this._gtpCInvalidPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpCInvalidPortInput() {
    return this._gtpCInvalidPort;
  }

  // ignore_msl - computed: false, optional: true, required: false
  private _ignoreMsl?: number; 
  public get ignoreMsl() {
    return this.getNumberAttribute('ignore_msl');
  }
  public set ignoreMsl(value: number) {
    this._ignoreMsl = value;
  }
  public resetIgnoreMsl() {
    this._ignoreMsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMslInput() {
    return this._ignoreMsl;
  }

  // inband_hm_reassign - computed: false, optional: true, required: false
  private _inbandHmReassign?: number; 
  public get inbandHmReassign() {
    return this.getNumberAttribute('inband_hm_reassign');
  }
  public set inbandHmReassign(value: number) {
    this._inbandHmReassign = value;
  }
  public resetInbandHmReassign() {
    this._inbandHmReassign = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inbandHmReassignInput() {
    return this._inbandHmReassign;
  }

  // inband_hm_retry - computed: false, optional: true, required: false
  private _inbandHmRetry?: number; 
  public get inbandHmRetry() {
    return this.getNumberAttribute('inband_hm_retry');
  }
  public set inbandHmRetry(value: number) {
    this._inbandHmRetry = value;
  }
  public resetInbandHmRetry() {
    this._inbandHmRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inbandHmRetryInput() {
    return this._inbandHmRetry;
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

  // l2_dsr - computed: false, optional: true, required: false
  private _l2Dsr?: number; 
  public get l2Dsr() {
    return this.getNumberAttribute('l2_dsr');
  }
  public set l2Dsr(value: number) {
    this._l2Dsr = value;
  }
  public resetL2Dsr() {
    this._l2Dsr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2DsrInput() {
    return this._l2Dsr;
  }

  // l3_dsr - computed: false, optional: true, required: false
  private _l3Dsr?: number; 
  public get l3Dsr() {
    return this.getNumberAttribute('l3_dsr');
  }
  public set l3Dsr(value: number) {
    this._l3Dsr = value;
  }
  public resetL3Dsr() {
    this._l3Dsr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3DsrInput() {
    return this._l3Dsr;
  }

  // l4_cps_exceed - computed: false, optional: true, required: false
  private _l4CpsExceed?: number; 
  public get l4CpsExceed() {
    return this.getNumberAttribute('l4_cps_exceed');
  }
  public set l4CpsExceed(value: number) {
    this._l4CpsExceed = value;
  }
  public resetL4CpsExceed() {
    this._l4CpsExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4CpsExceedInput() {
    return this._l4CpsExceed;
  }

  // l7_cps_exceed - computed: false, optional: true, required: false
  private _l7CpsExceed?: number; 
  public get l7CpsExceed() {
    return this.getNumberAttribute('l7_cps_exceed');
  }
  public set l7CpsExceed(value: number) {
    this._l7CpsExceed = value;
  }
  public resetL7CpsExceed() {
    this._l7CpsExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7CpsExceedInput() {
    return this._l7CpsExceed;
  }

  // nat_cps_exceed - computed: false, optional: true, required: false
  private _natCpsExceed?: number; 
  public get natCpsExceed() {
    return this.getNumberAttribute('nat_cps_exceed');
  }
  public set natCpsExceed(value: number) {
    this._natCpsExceed = value;
  }
  public resetNatCpsExceed() {
    this._natCpsExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natCpsExceedInput() {
    return this._natCpsExceed;
  }

  // no_resourse_drop - computed: false, optional: true, required: false
  private _noResourseDrop?: number; 
  public get noResourseDrop() {
    return this.getNumberAttribute('no_resourse_drop');
  }
  public set noResourseDrop(value: number) {
    this._noResourseDrop = value;
  }
  public resetNoResourseDrop() {
    this._noResourseDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noResourseDropInput() {
    return this._noResourseDrop;
  }

  // no_vport_drop - computed: false, optional: true, required: false
  private _noVportDrop?: number; 
  public get noVportDrop() {
    return this.getNumberAttribute('no_vport_drop');
  }
  public set noVportDrop(value: number) {
    this._noVportDrop = value;
  }
  public resetNoVportDrop() {
    this._noVportDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noVportDropInput() {
    return this._noVportDrop;
  }

  // noroute - computed: false, optional: true, required: false
  private _noroute?: number; 
  public get noroute() {
    return this.getNumberAttribute('noroute');
  }
  public set noroute(value: number) {
    this._noroute = value;
  }
  public resetNoroute() {
    this._noroute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get norouteInput() {
    return this._noroute;
  }

  // nosyn_drop - computed: false, optional: true, required: false
  private _nosynDrop?: number; 
  public get nosynDrop() {
    return this.getNumberAttribute('nosyn_drop');
  }
  public set nosynDrop(value: number) {
    this._nosynDrop = value;
  }
  public resetNosynDrop() {
    this._nosynDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nosynDropInput() {
    return this._nosynDrop;
  }

  // nosyn_drop_ack - computed: false, optional: true, required: false
  private _nosynDropAck?: number; 
  public get nosynDropAck() {
    return this.getNumberAttribute('nosyn_drop_ack');
  }
  public set nosynDropAck(value: number) {
    this._nosynDropAck = value;
  }
  public resetNosynDropAck() {
    this._nosynDropAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nosynDropAckInput() {
    return this._nosynDropAck;
  }

  // nosyn_drop_fin - computed: false, optional: true, required: false
  private _nosynDropFin?: number; 
  public get nosynDropFin() {
    return this.getNumberAttribute('nosyn_drop_fin');
  }
  public set nosynDropFin(value: number) {
    this._nosynDropFin = value;
  }
  public resetNosynDropFin() {
    this._nosynDropFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nosynDropFinInput() {
    return this._nosynDropFin;
  }

  // nosyn_drop_rst - computed: false, optional: true, required: false
  private _nosynDropRst?: number; 
  public get nosynDropRst() {
    return this.getNumberAttribute('nosyn_drop_rst');
  }
  public set nosynDropRst(value: number) {
    this._nosynDropRst = value;
  }
  public resetNosynDropRst() {
    this._nosynDropRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nosynDropRstInput() {
    return this._nosynDropRst;
  }

  // novport_drop - computed: false, optional: true, required: false
  private _novportDrop?: number; 
  public get novportDrop() {
    return this.getNumberAttribute('novport_drop');
  }
  public set novportDrop(value: number) {
    this._novportDrop = value;
  }
  public resetNovportDrop() {
    this._novportDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get novportDropInput() {
    return this._novportDrop;
  }

  // other_sess_aged_out - computed: false, optional: true, required: false
  private _otherSessAgedOut?: number; 
  public get otherSessAgedOut() {
    return this.getNumberAttribute('other_sess_aged_out');
  }
  public set otherSessAgedOut(value: number) {
    this._otherSessAgedOut = value;
  }
  public resetOtherSessAgedOut() {
    this._otherSessAgedOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherSessAgedOutInput() {
    return this._otherSessAgedOut;
  }

  // out_seq_ack_drop - computed: false, optional: true, required: false
  private _outSeqAckDrop?: number; 
  public get outSeqAckDrop() {
    return this.getNumberAttribute('out_seq_ack_drop');
  }
  public set outSeqAckDrop(value: number) {
    this._outSeqAckDrop = value;
  }
  public resetOutSeqAckDrop() {
    this._outSeqAckDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outSeqAckDropInput() {
    return this._outSeqAckDrop;
  }

  // outrst - computed: false, optional: true, required: false
  private _outrst?: number; 
  public get outrst() {
    return this.getNumberAttribute('outrst');
  }
  public set outrst(value: number) {
    this._outrst = value;
  }
  public resetOutrst() {
    this._outrst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outrstInput() {
    return this._outrst;
  }

  // outrst_ack_attack - computed: false, optional: true, required: false
  private _outrstAckAttack?: number; 
  public get outrstAckAttack() {
    return this.getNumberAttribute('outrst_ack_attack');
  }
  public set outrstAckAttack(value: number) {
    this._outrstAckAttack = value;
  }
  public resetOutrstAckAttack() {
    this._outrstAckAttack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outrstAckAttackInput() {
    return this._outrstAckAttack;
  }

  // outrst_aflex - computed: false, optional: true, required: false
  private _outrstAflex?: number; 
  public get outrstAflex() {
    return this.getNumberAttribute('outrst_aflex');
  }
  public set outrstAflex(value: number) {
    this._outrstAflex = value;
  }
  public resetOutrstAflex() {
    this._outrstAflex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outrstAflexInput() {
    return this._outrstAflex;
  }

  // outrst_broker - computed: false, optional: true, required: false
  private _outrstBroker?: number; 
  public get outrstBroker() {
    return this.getNumberAttribute('outrst_broker');
  }
  public set outrstBroker(value: number) {
    this._outrstBroker = value;
  }
  public resetOutrstBroker() {
    this._outrstBroker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outrstBrokerInput() {
    return this._outrstBroker;
  }

  // outrst_nosyn - computed: false, optional: true, required: false
  private _outrstNosyn?: number; 
  public get outrstNosyn() {
    return this.getNumberAttribute('outrst_nosyn');
  }
  public set outrstNosyn(value: number) {
    this._outrstNosyn = value;
  }
  public resetOutrstNosyn() {
    this._outrstNosyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outrstNosynInput() {
    return this._outrstNosyn;
  }

  // outrst_stale_sess - computed: false, optional: true, required: false
  private _outrstStaleSess?: number; 
  public get outrstStaleSess() {
    return this.getNumberAttribute('outrst_stale_sess');
  }
  public set outrstStaleSess(value: number) {
    this._outrstStaleSess = value;
  }
  public resetOutrstStaleSess() {
    this._outrstStaleSess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outrstStaleSessInput() {
    return this._outrstStaleSess;
  }

  // outrst_tcpproxy - computed: false, optional: true, required: false
  private _outrstTcpproxy?: number; 
  public get outrstTcpproxy() {
    return this.getNumberAttribute('outrst_tcpproxy');
  }
  public set outrstTcpproxy(value: number) {
    this._outrstTcpproxy = value;
  }
  public resetOutrstTcpproxy() {
    this._outrstTcpproxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outrstTcpproxyInput() {
    return this._outrstTcpproxy;
  }

  // pbslb_entry_limit_exceed - computed: false, optional: true, required: false
  private _pbslbEntryLimitExceed?: number; 
  public get pbslbEntryLimitExceed() {
    return this.getNumberAttribute('pbslb_entry_limit_exceed');
  }
  public set pbslbEntryLimitExceed(value: number) {
    this._pbslbEntryLimitExceed = value;
  }
  public resetPbslbEntryLimitExceed() {
    this._pbslbEntryLimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbslbEntryLimitExceedInput() {
    return this._pbslbEntryLimitExceed;
  }

  // port_preserve_attempt - computed: false, optional: true, required: false
  private _portPreserveAttempt?: number; 
  public get portPreserveAttempt() {
    return this.getNumberAttribute('port_preserve_attempt');
  }
  public set portPreserveAttempt(value: number) {
    this._portPreserveAttempt = value;
  }
  public resetPortPreserveAttempt() {
    this._portPreserveAttempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portPreserveAttemptInput() {
    return this._portPreserveAttempt;
  }

  // port_preserve_succ - computed: false, optional: true, required: false
  private _portPreserveSucc?: number; 
  public get portPreserveSucc() {
    return this.getNumberAttribute('port_preserve_succ');
  }
  public set portPreserveSucc(value: number) {
    this._portPreserveSucc = value;
  }
  public resetPortPreserveSucc() {
    this._portPreserveSucc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portPreserveSuccInput() {
    return this._portPreserveSucc;
  }

  // proxy_header_insert - computed: false, optional: true, required: false
  private _proxyHeaderInsert?: number; 
  public get proxyHeaderInsert() {
    return this.getNumberAttribute('proxy_header_insert');
  }
  public set proxyHeaderInsert(value: number) {
    this._proxyHeaderInsert = value;
  }
  public resetProxyHeaderInsert() {
    this._proxyHeaderInsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHeaderInsertInput() {
    return this._proxyHeaderInsert;
  }

  // proxy_header_rexmit - computed: false, optional: true, required: false
  private _proxyHeaderRexmit?: number; 
  public get proxyHeaderRexmit() {
    return this.getNumberAttribute('proxy_header_rexmit');
  }
  public set proxyHeaderRexmit(value: number) {
    this._proxyHeaderRexmit = value;
  }
  public resetProxyHeaderRexmit() {
    this._proxyHeaderRexmit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHeaderRexmitInput() {
    return this._proxyHeaderRexmit;
  }

  // proxy_nosock_drop - computed: false, optional: true, required: false
  private _proxyNosockDrop?: number; 
  public get proxyNosockDrop() {
    return this.getNumberAttribute('proxy_nosock_drop');
  }
  public set proxyNosockDrop(value: number) {
    this._proxyNosockDrop = value;
  }
  public resetProxyNosockDrop() {
    this._proxyNosockDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyNosockDropInput() {
    return this._proxyNosockDrop;
  }

  // proxy_prot_drop - computed: false, optional: true, required: false
  private _proxyProtDrop?: number; 
  public get proxyProtDrop() {
    return this.getNumberAttribute('proxy_prot_drop');
  }
  public set proxyProtDrop(value: number) {
    this._proxyProtDrop = value;
  }
  public resetProxyProtDrop() {
    this._proxyProtDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtDropInput() {
    return this._proxyProtDrop;
  }

  // proxy_prot_error - computed: false, optional: true, required: false
  private _proxyProtError?: number; 
  public get proxyProtError() {
    return this.getNumberAttribute('proxy_prot_error');
  }
  public set proxyProtError(value: number) {
    this._proxyProtError = value;
  }
  public resetProxyProtError() {
    this._proxyProtError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyProtErrorInput() {
    return this._proxyProtError;
  }

  // rate_drop_reset_unkn - computed: false, optional: true, required: false
  private _rateDropResetUnkn?: number; 
  public get rateDropResetUnkn() {
    return this.getNumberAttribute('rate_drop_reset_unkn');
  }
  public set rateDropResetUnkn(value: number) {
    this._rateDropResetUnkn = value;
  }
  public resetRateDropResetUnkn() {
    this._rateDropResetUnkn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateDropResetUnknInput() {
    return this._rateDropResetUnkn;
  }

  // reselect_svrselfail - computed: false, optional: true, required: false
  private _reselectSvrselfail?: number; 
  public get reselectSvrselfail() {
    return this.getNumberAttribute('reselect_svrselfail');
  }
  public set reselectSvrselfail(value: number) {
    this._reselectSvrselfail = value;
  }
  public resetReselectSvrselfail() {
    this._reselectSvrselfail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reselectSvrselfailInput() {
    return this._reselectSvrselfail;
  }

  // reset_l7_on_failover - computed: false, optional: true, required: false
  private _resetL7OnFailover?: number; 
  public get resetL7OnFailover() {
    return this.getNumberAttribute('reset_l7_on_failover');
  }
  public set resetL7OnFailover(value: number) {
    this._resetL7OnFailover = value;
  }
  public resetResetL7OnFailover() {
    this._resetL7OnFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetL7OnFailoverInput() {
    return this._resetL7OnFailover;
  }

  // reset_unknown_conn - computed: false, optional: true, required: false
  private _resetUnknownConn?: number; 
  public get resetUnknownConn() {
    return this.getNumberAttribute('reset_unknown_conn');
  }
  public set resetUnknownConn(value: number) {
    this._resetUnknownConn = value;
  }
  public resetResetUnknownConn() {
    this._resetUnknownConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetUnknownConnInput() {
    return this._resetUnknownConn;
  }

  // server_down_del - computed: false, optional: true, required: false
  private _serverDownDel?: number; 
  public get serverDownDel() {
    return this.getNumberAttribute('server_down_del');
  }
  public set serverDownDel(value: number) {
    this._serverDownDel = value;
  }
  public resetServerDownDel() {
    this._serverDownDel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverDownDelInput() {
    return this._serverDownDel;
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

  // skip_insert_client_ip - computed: false, optional: true, required: false
  private _skipInsertClientIp?: number; 
  public get skipInsertClientIp() {
    return this.getNumberAttribute('skip_insert_client_ip');
  }
  public set skipInsertClientIp(value: number) {
    this._skipInsertClientIp = value;
  }
  public resetSkipInsertClientIp() {
    this._skipInsertClientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInsertClientIpInput() {
    return this._skipInsertClientIp;
  }

  // slb_gtp_proxy_c_process_local_rr - computed: false, optional: true, required: false
  private _slbGtpProxyCProcessLocalRr?: number; 
  public get slbGtpProxyCProcessLocalRr() {
    return this.getNumberAttribute('slb_gtp_proxy_c_process_local_rr');
  }
  public set slbGtpProxyCProcessLocalRr(value: number) {
    this._slbGtpProxyCProcessLocalRr = value;
  }
  public resetSlbGtpProxyCProcessLocalRr() {
    this._slbGtpProxyCProcessLocalRr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbGtpProxyCProcessLocalRrInput() {
    return this._slbGtpProxyCProcessLocalRr;
  }

  // slb_gtp_proxy_retx_requests - computed: false, optional: true, required: false
  private _slbGtpProxyRetxRequests?: number; 
  public get slbGtpProxyRetxRequests() {
    return this.getNumberAttribute('slb_gtp_proxy_retx_requests');
  }
  public set slbGtpProxyRetxRequests(value: number) {
    this._slbGtpProxyRetxRequests = value;
  }
  public resetSlbGtpProxyRetxRequests() {
    this._slbGtpProxyRetxRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbGtpProxyRetxRequestsInput() {
    return this._slbGtpProxyRetxRequests;
  }

  // slb_gtp_proxy_smp_created - computed: false, optional: true, required: false
  private _slbGtpProxySmpCreated?: number; 
  public get slbGtpProxySmpCreated() {
    return this.getNumberAttribute('slb_gtp_proxy_smp_created');
  }
  public set slbGtpProxySmpCreated(value: number) {
    this._slbGtpProxySmpCreated = value;
  }
  public resetSlbGtpProxySmpCreated() {
    this._slbGtpProxySmpCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbGtpProxySmpCreatedInput() {
    return this._slbGtpProxySmpCreated;
  }

  // slb_gtp_proxy_smp_creation_failed - computed: false, optional: true, required: false
  private _slbGtpProxySmpCreationFailed?: number; 
  public get slbGtpProxySmpCreationFailed() {
    return this.getNumberAttribute('slb_gtp_proxy_smp_creation_failed');
  }
  public set slbGtpProxySmpCreationFailed(value: number) {
    this._slbGtpProxySmpCreationFailed = value;
  }
  public resetSlbGtpProxySmpCreationFailed() {
    this._slbGtpProxySmpCreationFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbGtpProxySmpCreationFailedInput() {
    return this._slbGtpProxySmpCreationFailed;
  }

  // slb_gtp_proxy_smp_free_not_found - computed: false, optional: true, required: false
  private _slbGtpProxySmpFreeNotFound?: number; 
  public get slbGtpProxySmpFreeNotFound() {
    return this.getNumberAttribute('slb_gtp_proxy_smp_free_not_found');
  }
  public set slbGtpProxySmpFreeNotFound(value: number) {
    this._slbGtpProxySmpFreeNotFound = value;
  }
  public resetSlbGtpProxySmpFreeNotFound() {
    this._slbGtpProxySmpFreeNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbGtpProxySmpFreeNotFoundInput() {
    return this._slbGtpProxySmpFreeNotFound;
  }

  // slb_gtp_proxy_smp_freed - computed: false, optional: true, required: false
  private _slbGtpProxySmpFreed?: number; 
  public get slbGtpProxySmpFreed() {
    return this.getNumberAttribute('slb_gtp_proxy_smp_freed');
  }
  public set slbGtpProxySmpFreed(value: number) {
    this._slbGtpProxySmpFreed = value;
  }
  public resetSlbGtpProxySmpFreed() {
    this._slbGtpProxySmpFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbGtpProxySmpFreedInput() {
    return this._slbGtpProxySmpFreed;
  }

  // slb_gtp_proxy_smp_match - computed: false, optional: true, required: false
  private _slbGtpProxySmpMatch?: number; 
  public get slbGtpProxySmpMatch() {
    return this.getNumberAttribute('slb_gtp_proxy_smp_match');
  }
  public set slbGtpProxySmpMatch(value: number) {
    this._slbGtpProxySmpMatch = value;
  }
  public resetSlbGtpProxySmpMatch() {
    this._slbGtpProxySmpMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbGtpProxySmpMatchInput() {
    return this._slbGtpProxySmpMatch;
  }

  // slb_gtp_proxy_smp_no_match - computed: false, optional: true, required: false
  private _slbGtpProxySmpNoMatch?: number; 
  public get slbGtpProxySmpNoMatch() {
    return this.getNumberAttribute('slb_gtp_proxy_smp_no_match');
  }
  public set slbGtpProxySmpNoMatch(value: number) {
    this._slbGtpProxySmpNoMatch = value;
  }
  public resetSlbGtpProxySmpNoMatch() {
    this._slbGtpProxySmpNoMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbGtpProxySmpNoMatchInput() {
    return this._slbGtpProxySmpNoMatch;
  }

  // smart_nat_id_mismatch - computed: false, optional: true, required: false
  private _smartNatIdMismatch?: number; 
  public get smartNatIdMismatch() {
    return this.getNumberAttribute('smart_nat_id_mismatch');
  }
  public set smartNatIdMismatch(value: number) {
    this._smartNatIdMismatch = value;
  }
  public resetSmartNatIdMismatch() {
    this._smartNatIdMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartNatIdMismatchInput() {
    return this._smartNatIdMismatch;
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

  // snat_force_preserve_alloc - computed: false, optional: true, required: false
  private _snatForcePreserveAlloc?: number; 
  public get snatForcePreserveAlloc() {
    return this.getNumberAttribute('snat_force_preserve_alloc');
  }
  public set snatForcePreserveAlloc(value: number) {
    this._snatForcePreserveAlloc = value;
  }
  public resetSnatForcePreserveAlloc() {
    this._snatForcePreserveAlloc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatForcePreserveAllocInput() {
    return this._snatForcePreserveAlloc;
  }

  // snat_force_preserve_free - computed: false, optional: true, required: false
  private _snatForcePreserveFree?: number; 
  public get snatForcePreserveFree() {
    return this.getNumberAttribute('snat_force_preserve_free');
  }
  public set snatForcePreserveFree(value: number) {
    this._snatForcePreserveFree = value;
  }
  public resetSnatForcePreserveFree() {
    this._snatForcePreserveFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatForcePreserveFreeInput() {
    return this._snatForcePreserveFree;
  }

  // snat_icmp_error_process - computed: false, optional: true, required: false
  private _snatIcmpErrorProcess?: number; 
  public get snatIcmpErrorProcess() {
    return this.getNumberAttribute('snat_icmp_error_process');
  }
  public set snatIcmpErrorProcess(value: number) {
    this._snatIcmpErrorProcess = value;
  }
  public resetSnatIcmpErrorProcess() {
    this._snatIcmpErrorProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatIcmpErrorProcessInput() {
    return this._snatIcmpErrorProcess;
  }

  // snat_icmp_no_match - computed: false, optional: true, required: false
  private _snatIcmpNoMatch?: number; 
  public get snatIcmpNoMatch() {
    return this.getNumberAttribute('snat_icmp_no_match');
  }
  public set snatIcmpNoMatch(value: number) {
    this._snatIcmpNoMatch = value;
  }
  public resetSnatIcmpNoMatch() {
    this._snatIcmpNoMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatIcmpNoMatchInput() {
    return this._snatIcmpNoMatch;
  }

  // snat_no_fwd_route - computed: false, optional: true, required: false
  private _snatNoFwdRoute?: number; 
  public get snatNoFwdRoute() {
    return this.getNumberAttribute('snat_no_fwd_route');
  }
  public set snatNoFwdRoute(value: number) {
    this._snatNoFwdRoute = value;
  }
  public resetSnatNoFwdRoute() {
    this._snatNoFwdRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatNoFwdRouteInput() {
    return this._snatNoFwdRoute;
  }

  // snat_no_rev_route - computed: false, optional: true, required: false
  private _snatNoRevRoute?: number; 
  public get snatNoRevRoute() {
    return this.getNumberAttribute('snat_no_rev_route');
  }
  public set snatNoRevRoute(value: number) {
    this._snatNoRevRoute = value;
  }
  public resetSnatNoRevRoute() {
    this._snatNoRevRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatNoRevRouteInput() {
    return this._snatNoRevRoute;
  }

  // snat_port_overload_fail - computed: false, optional: true, required: false
  private _snatPortOverloadFail?: number; 
  public get snatPortOverloadFail() {
    return this.getNumberAttribute('snat_port_overload_fail');
  }
  public set snatPortOverloadFail(value: number) {
    this._snatPortOverloadFail = value;
  }
  public resetSnatPortOverloadFail() {
    this._snatPortOverloadFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatPortOverloadFailInput() {
    return this._snatPortOverloadFail;
  }

  // ssl_cps_exceed - computed: false, optional: true, required: false
  private _sslCpsExceed?: number; 
  public get sslCpsExceed() {
    return this.getNumberAttribute('ssl_cps_exceed');
  }
  public set sslCpsExceed(value: number) {
    this._sslCpsExceed = value;
  }
  public resetSslCpsExceed() {
    this._sslCpsExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCpsExceedInput() {
    return this._sslCpsExceed;
  }

  // ssl_tpt_exceed - computed: false, optional: true, required: false
  private _sslTptExceed?: number; 
  public get sslTptExceed() {
    return this.getNumberAttribute('ssl_tpt_exceed');
  }
  public set sslTptExceed(value: number) {
    this._sslTptExceed = value;
  }
  public resetSslTptExceed() {
    this._sslTptExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslTptExceedInput() {
    return this._sslTptExceed;
  }

  // ssl_watermark_drop - computed: false, optional: true, required: false
  private _sslWatermarkDrop?: number; 
  public get sslWatermarkDrop() {
    return this.getNumberAttribute('ssl_watermark_drop');
  }
  public set sslWatermarkDrop(value: number) {
    this._sslWatermarkDrop = value;
  }
  public resetSslWatermarkDrop() {
    this._sslWatermarkDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslWatermarkDropInput() {
    return this._sslWatermarkDrop;
  }

  // stateless_conn_timeout - computed: false, optional: true, required: false
  private _statelessConnTimeout?: number; 
  public get statelessConnTimeout() {
    return this.getNumberAttribute('stateless_conn_timeout');
  }
  public set statelessConnTimeout(value: number) {
    this._statelessConnTimeout = value;
  }
  public resetStatelessConnTimeout() {
    this._statelessConnTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statelessConnTimeoutInput() {
    return this._statelessConnTimeout;
  }

  // svr_syn_handshake_fail - computed: false, optional: true, required: false
  private _svrSynHandshakeFail?: number; 
  public get svrSynHandshakeFail() {
    return this.getNumberAttribute('svr_syn_handshake_fail');
  }
  public set svrSynHandshakeFail(value: number) {
    this._svrSynHandshakeFail = value;
  }
  public resetSvrSynHandshakeFail() {
    this._svrSynHandshakeFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svrSynHandshakeFailInput() {
    return this._svrSynHandshakeFail;
  }

  // svrselfail - computed: false, optional: true, required: false
  private _svrselfail?: number; 
  public get svrselfail() {
    return this.getNumberAttribute('svrselfail');
  }
  public set svrselfail(value: number) {
    this._svrselfail = value;
  }
  public resetSvrselfail() {
    this._svrselfail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svrselfailInput() {
    return this._svrselfail;
  }

  // syn_rate - computed: false, optional: true, required: false
  private _synRate?: number; 
  public get synRate() {
    return this.getNumberAttribute('syn_rate');
  }
  public set synRate(value: number) {
    this._synRate = value;
  }
  public resetSynRate() {
    this._synRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synRateInput() {
    return this._synRate;
  }

  // syn_stale_sess - computed: false, optional: true, required: false
  private _synStaleSess?: number; 
  public get synStaleSess() {
    return this.getNumberAttribute('syn_stale_sess');
  }
  public set synStaleSess(value: number) {
    this._synStaleSess = value;
  }
  public resetSynStaleSess() {
    this._synStaleSess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synStaleSessInput() {
    return this._synStaleSess;
  }

  // synattack - computed: false, optional: true, required: false
  private _synattack?: number; 
  public get synattack() {
    return this.getNumberAttribute('synattack');
  }
  public set synattack(value: number) {
    this._synattack = value;
  }
  public resetSynattack() {
    this._synattack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synattackInput() {
    return this._synattack;
  }

  // syncookie_buff_drop - computed: false, optional: true, required: false
  private _syncookieBuffDrop?: number; 
  public get syncookieBuffDrop() {
    return this.getNumberAttribute('syncookie_buff_drop');
  }
  public set syncookieBuffDrop(value: number) {
    this._syncookieBuffDrop = value;
  }
  public resetSyncookieBuffDrop() {
    this._syncookieBuffDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncookieBuffDropInput() {
    return this._syncookieBuffDrop;
  }

  // syncookie_buff_queue - computed: false, optional: true, required: false
  private _syncookieBuffQueue?: number; 
  public get syncookieBuffQueue() {
    return this.getNumberAttribute('syncookie_buff_queue');
  }
  public set syncookieBuffQueue(value: number) {
    this._syncookieBuffQueue = value;
  }
  public resetSyncookieBuffQueue() {
    this._syncookieBuffQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncookieBuffQueueInput() {
    return this._syncookieBuffQueue;
  }

  // syncookiescheckfailed - computed: false, optional: true, required: false
  private _syncookiescheckfailed?: number; 
  public get syncookiescheckfailed() {
    return this.getNumberAttribute('syncookiescheckfailed');
  }
  public set syncookiescheckfailed(value: number) {
    this._syncookiescheckfailed = value;
  }
  public resetSyncookiescheckfailed() {
    this._syncookiescheckfailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncookiescheckfailedInput() {
    return this._syncookiescheckfailed;
  }

  // syncookiessent - computed: false, optional: true, required: false
  private _syncookiessent?: number; 
  public get syncookiessent() {
    return this.getNumberAttribute('syncookiessent');
  }
  public set syncookiessent(value: number) {
    this._syncookiessent = value;
  }
  public resetSyncookiessent() {
    this._syncookiessent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncookiessentInput() {
    return this._syncookiessent;
  }

  // syncookiessent_ts - computed: false, optional: true, required: false
  private _syncookiessentTs?: number; 
  public get syncookiessentTs() {
    return this.getNumberAttribute('syncookiessent_ts');
  }
  public set syncookiessentTs(value: number) {
    this._syncookiessentTs = value;
  }
  public resetSyncookiessentTs() {
    this._syncookiessentTs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncookiessentTsInput() {
    return this._syncookiessentTs;
  }

  // syncookiessentfailed - computed: false, optional: true, required: false
  private _syncookiessentfailed?: number; 
  public get syncookiessentfailed() {
    return this.getNumberAttribute('syncookiessentfailed');
  }
  public set syncookiessentfailed(value: number) {
    this._syncookiessentfailed = value;
  }
  public resetSyncookiessentfailed() {
    this._syncookiessentfailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncookiessentfailedInput() {
    return this._syncookiessentfailed;
  }

  // synreceived - computed: false, optional: true, required: false
  private _synreceived?: number; 
  public get synreceived() {
    return this.getNumberAttribute('synreceived');
  }
  public set synreceived(value: number) {
    this._synreceived = value;
  }
  public resetSynreceived() {
    this._synreceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synreceivedInput() {
    return this._synreceived;
  }

  // synreceived_hw - computed: false, optional: true, required: false
  private _synreceivedHw?: number; 
  public get synreceivedHw() {
    return this.getNumberAttribute('synreceived_hw');
  }
  public set synreceivedHw(value: number) {
    this._synreceivedHw = value;
  }
  public resetSynreceivedHw() {
    this._synreceivedHw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synreceivedHwInput() {
    return this._synreceivedHw;
  }

  // tcp_ax_rexmit_syn - computed: false, optional: true, required: false
  private _tcpAxRexmitSyn?: number; 
  public get tcpAxRexmitSyn() {
    return this.getNumberAttribute('tcp_ax_rexmit_syn');
  }
  public set tcpAxRexmitSyn(value: number) {
    this._tcpAxRexmitSyn = value;
  }
  public resetTcpAxRexmitSyn() {
    this._tcpAxRexmitSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpAxRexmitSynInput() {
    return this._tcpAxRexmitSyn;
  }

  // tcp_connections_closed - computed: false, optional: true, required: false
  private _tcpConnectionsClosed?: number; 
  public get tcpConnectionsClosed() {
    return this.getNumberAttribute('tcp_connections_closed');
  }
  public set tcpConnectionsClosed(value: number) {
    this._tcpConnectionsClosed = value;
  }
  public resetTcpConnectionsClosed() {
    this._tcpConnectionsClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpConnectionsClosedInput() {
    return this._tcpConnectionsClosed;
  }

  // tcp_est - computed: false, optional: true, required: false
  private _tcpEst?: number; 
  public get tcpEst() {
    return this.getNumberAttribute('tcp_est');
  }
  public set tcpEst(value: number) {
    this._tcpEst = value;
  }
  public resetTcpEst() {
    this._tcpEst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpEstInput() {
    return this._tcpEst;
  }

  // tcp_fwd_ackfin - computed: false, optional: true, required: false
  private _tcpFwdAckfin?: number; 
  public get tcpFwdAckfin() {
    return this.getNumberAttribute('tcp_fwd_ackfin');
  }
  public set tcpFwdAckfin(value: number) {
    this._tcpFwdAckfin = value;
  }
  public resetTcpFwdAckfin() {
    this._tcpFwdAckfin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFwdAckfinInput() {
    return this._tcpFwdAckfin;
  }

  // tcp_fwd_fin - computed: false, optional: true, required: false
  private _tcpFwdFin?: number; 
  public get tcpFwdFin() {
    return this.getNumberAttribute('tcp_fwd_fin');
  }
  public set tcpFwdFin(value: number) {
    this._tcpFwdFin = value;
  }
  public resetTcpFwdFin() {
    this._tcpFwdFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFwdFinInput() {
    return this._tcpFwdFin;
  }

  // tcp_fwd_fin_dup - computed: false, optional: true, required: false
  private _tcpFwdFinDup?: number; 
  public get tcpFwdFinDup() {
    return this.getNumberAttribute('tcp_fwd_fin_dup');
  }
  public set tcpFwdFinDup(value: number) {
    this._tcpFwdFinDup = value;
  }
  public resetTcpFwdFinDup() {
    this._tcpFwdFinDup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFwdFinDupInput() {
    return this._tcpFwdFinDup;
  }

  // tcp_fwd_last_ack - computed: false, optional: true, required: false
  private _tcpFwdLastAck?: number; 
  public get tcpFwdLastAck() {
    return this.getNumberAttribute('tcp_fwd_last_ack');
  }
  public set tcpFwdLastAck(value: number) {
    this._tcpFwdLastAck = value;
  }
  public resetTcpFwdLastAck() {
    this._tcpFwdLastAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFwdLastAckInput() {
    return this._tcpFwdLastAck;
  }

  // tcp_fwd_rst - computed: false, optional: true, required: false
  private _tcpFwdRst?: number; 
  public get tcpFwdRst() {
    return this.getNumberAttribute('tcp_fwd_rst');
  }
  public set tcpFwdRst(value: number) {
    this._tcpFwdRst = value;
  }
  public resetTcpFwdRst() {
    this._tcpFwdRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFwdRstInput() {
    return this._tcpFwdRst;
  }

  // tcp_invalid_drop - computed: false, optional: true, required: false
  private _tcpInvalidDrop?: number; 
  public get tcpInvalidDrop() {
    return this.getNumberAttribute('tcp_invalid_drop');
  }
  public set tcpInvalidDrop(value: number) {
    this._tcpInvalidDrop = value;
  }
  public resetTcpInvalidDrop() {
    this._tcpInvalidDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInvalidDropInput() {
    return this._tcpInvalidDrop;
  }

  // tcp_no_slb - computed: false, optional: true, required: false
  private _tcpNoSlb?: number; 
  public get tcpNoSlb() {
    return this.getNumberAttribute('tcp_no_slb');
  }
  public set tcpNoSlb(value: number) {
    this._tcpNoSlb = value;
  }
  public resetTcpNoSlb() {
    this._tcpNoSlb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpNoSlbInput() {
    return this._tcpNoSlb;
  }

  // tcp_rev_ackfin - computed: false, optional: true, required: false
  private _tcpRevAckfin?: number; 
  public get tcpRevAckfin() {
    return this.getNumberAttribute('tcp_rev_ackfin');
  }
  public set tcpRevAckfin(value: number) {
    this._tcpRevAckfin = value;
  }
  public resetTcpRevAckfin() {
    this._tcpRevAckfin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRevAckfinInput() {
    return this._tcpRevAckfin;
  }

  // tcp_rev_fin - computed: false, optional: true, required: false
  private _tcpRevFin?: number; 
  public get tcpRevFin() {
    return this.getNumberAttribute('tcp_rev_fin');
  }
  public set tcpRevFin(value: number) {
    this._tcpRevFin = value;
  }
  public resetTcpRevFin() {
    this._tcpRevFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRevFinInput() {
    return this._tcpRevFin;
  }

  // tcp_rev_fin_dup - computed: false, optional: true, required: false
  private _tcpRevFinDup?: number; 
  public get tcpRevFinDup() {
    return this.getNumberAttribute('tcp_rev_fin_dup');
  }
  public set tcpRevFinDup(value: number) {
    this._tcpRevFinDup = value;
  }
  public resetTcpRevFinDup() {
    this._tcpRevFinDup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRevFinDupInput() {
    return this._tcpRevFinDup;
  }

  // tcp_rev_last_ack - computed: false, optional: true, required: false
  private _tcpRevLastAck?: number; 
  public get tcpRevLastAck() {
    return this.getNumberAttribute('tcp_rev_last_ack');
  }
  public set tcpRevLastAck(value: number) {
    this._tcpRevLastAck = value;
  }
  public resetTcpRevLastAck() {
    this._tcpRevLastAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRevLastAckInput() {
    return this._tcpRevLastAck;
  }

  // tcp_rev_rst - computed: false, optional: true, required: false
  private _tcpRevRst?: number; 
  public get tcpRevRst() {
    return this.getNumberAttribute('tcp_rev_rst');
  }
  public set tcpRevRst(value: number) {
    this._tcpRevRst = value;
  }
  public resetTcpRevRst() {
    this._tcpRevRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRevRstInput() {
    return this._tcpRevRst;
  }

  // tcp_rexmit_syn - computed: false, optional: true, required: false
  private _tcpRexmitSyn?: number; 
  public get tcpRexmitSyn() {
    return this.getNumberAttribute('tcp_rexmit_syn');
  }
  public set tcpRexmitSyn(value: number) {
    this._tcpRexmitSyn = value;
  }
  public resetTcpRexmitSyn() {
    this._tcpRexmitSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRexmitSynInput() {
    return this._tcpRexmitSyn;
  }

  // tcp_rexmit_syn_delq - computed: false, optional: true, required: false
  private _tcpRexmitSynDelq?: number; 
  public get tcpRexmitSynDelq() {
    return this.getNumberAttribute('tcp_rexmit_syn_delq');
  }
  public set tcpRexmitSynDelq(value: number) {
    this._tcpRexmitSynDelq = value;
  }
  public resetTcpRexmitSynDelq() {
    this._tcpRexmitSynDelq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRexmitSynDelqInput() {
    return this._tcpRexmitSynDelq;
  }

  // tcp_rexmit_synack - computed: false, optional: true, required: false
  private _tcpRexmitSynack?: number; 
  public get tcpRexmitSynack() {
    return this.getNumberAttribute('tcp_rexmit_synack');
  }
  public set tcpRexmitSynack(value: number) {
    this._tcpRexmitSynack = value;
  }
  public resetTcpRexmitSynack() {
    this._tcpRexmitSynack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRexmitSynackInput() {
    return this._tcpRexmitSynack;
  }

  // tcp_rexmit_synack_delq - computed: false, optional: true, required: false
  private _tcpRexmitSynackDelq?: number; 
  public get tcpRexmitSynackDelq() {
    return this.getNumberAttribute('tcp_rexmit_synack_delq');
  }
  public set tcpRexmitSynackDelq(value: number) {
    this._tcpRexmitSynackDelq = value;
  }
  public resetTcpRexmitSynackDelq() {
    this._tcpRexmitSynackDelq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRexmitSynackDelqInput() {
    return this._tcpRexmitSynackDelq;
  }

  // tcp_sess_aged_out - computed: false, optional: true, required: false
  private _tcpSessAgedOut?: number; 
  public get tcpSessAgedOut() {
    return this.getNumberAttribute('tcp_sess_aged_out');
  }
  public set tcpSessAgedOut(value: number) {
    this._tcpSessAgedOut = value;
  }
  public resetTcpSessAgedOut() {
    this._tcpSessAgedOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSessAgedOutInput() {
    return this._tcpSessAgedOut;
  }

  // tcp_sess_noest_aged_out - computed: false, optional: true, required: false
  private _tcpSessNoestAgedOut?: number; 
  public get tcpSessNoestAgedOut() {
    return this.getNumberAttribute('tcp_sess_noest_aged_out');
  }
  public set tcpSessNoestAgedOut(value: number) {
    this._tcpSessNoestAgedOut = value;
  }
  public resetTcpSessNoestAgedOut() {
    this._tcpSessNoestAgedOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSessNoestAgedOutInput() {
    return this._tcpSessNoestAgedOut;
  }

  // tcp_sess_noest_csyn_rcv_aged_out - computed: false, optional: true, required: false
  private _tcpSessNoestCsynRcvAgedOut?: number; 
  public get tcpSessNoestCsynRcvAgedOut() {
    return this.getNumberAttribute('tcp_sess_noest_csyn_rcv_aged_out');
  }
  public set tcpSessNoestCsynRcvAgedOut(value: number) {
    this._tcpSessNoestCsynRcvAgedOut = value;
  }
  public resetTcpSessNoestCsynRcvAgedOut() {
    this._tcpSessNoestCsynRcvAgedOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSessNoestCsynRcvAgedOutInput() {
    return this._tcpSessNoestCsynRcvAgedOut;
  }

  // tcp_sess_noest_ssyn_xmit_aged_out - computed: false, optional: true, required: false
  private _tcpSessNoestSsynXmitAgedOut?: number; 
  public get tcpSessNoestSsynXmitAgedOut() {
    return this.getNumberAttribute('tcp_sess_noest_ssyn_xmit_aged_out');
  }
  public set tcpSessNoestSsynXmitAgedOut(value: number) {
    this._tcpSessNoestSsynXmitAgedOut = value;
  }
  public resetTcpSessNoestSsynXmitAgedOut() {
    this._tcpSessNoestSsynXmitAgedOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSessNoestSsynXmitAgedOutInput() {
    return this._tcpSessNoestSsynXmitAgedOut;
  }

  // tcp_syn_rcv_ack - computed: false, optional: true, required: false
  private _tcpSynRcvAck?: number; 
  public get tcpSynRcvAck() {
    return this.getNumberAttribute('tcp_syn_rcv_ack');
  }
  public set tcpSynRcvAck(value: number) {
    this._tcpSynRcvAck = value;
  }
  public resetTcpSynRcvAck() {
    this._tcpSynRcvAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynRcvAckInput() {
    return this._tcpSynRcvAck;
  }

  // tcp_syn_rcv_rst - computed: false, optional: true, required: false
  private _tcpSynRcvRst?: number; 
  public get tcpSynRcvRst() {
    return this.getNumberAttribute('tcp_syn_rcv_rst');
  }
  public set tcpSynRcvRst(value: number) {
    this._tcpSynRcvRst = value;
  }
  public resetTcpSynRcvRst() {
    this._tcpSynRcvRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynRcvRstInput() {
    return this._tcpSynRcvRst;
  }

  // tcpotherflags_drop - computed: false, optional: true, required: false
  private _tcpotherflagsDrop?: number; 
  public get tcpotherflagsDrop() {
    return this.getNumberAttribute('tcpotherflags_drop');
  }
  public set tcpotherflagsDrop(value: number) {
    this._tcpotherflagsDrop = value;
  }
  public resetTcpotherflagsDrop() {
    this._tcpotherflagsDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpotherflagsDropInput() {
    return this._tcpotherflagsDrop;
  }

  // tcpsyndata_drop - computed: false, optional: true, required: false
  private _tcpsyndataDrop?: number; 
  public get tcpsyndataDrop() {
    return this.getNumberAttribute('tcpsyndata_drop');
  }
  public set tcpsyndataDrop(value: number) {
    this._tcpsyndataDrop = value;
  }
  public resetTcpsyndataDrop() {
    this._tcpsyndataDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpsyndataDropInput() {
    return this._tcpsyndataDrop;
  }

  // throttle_syn - computed: false, optional: true, required: false
  private _throttleSyn?: number; 
  public get throttleSyn() {
    return this.getNumberAttribute('throttle_syn');
  }
  public set throttleSyn(value: number) {
    this._throttleSyn = value;
  }
  public resetThrottleSyn() {
    this._throttleSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throttleSynInput() {
    return this._throttleSyn;
  }

  // udp_no_slb - computed: false, optional: true, required: false
  private _udpNoSlb?: number; 
  public get udpNoSlb() {
    return this.getNumberAttribute('udp_no_slb');
  }
  public set udpNoSlb(value: number) {
    this._udpNoSlb = value;
  }
  public resetUdpNoSlb() {
    this._udpNoSlb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpNoSlbInput() {
    return this._udpNoSlb;
  }

  // udp_req_more_resp - computed: false, optional: true, required: false
  private _udpReqMoreResp?: number; 
  public get udpReqMoreResp() {
    return this.getNumberAttribute('udp_req_more_resp');
  }
  public set udpReqMoreResp(value: number) {
    this._udpReqMoreResp = value;
  }
  public resetUdpReqMoreResp() {
    this._udpReqMoreResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpReqMoreRespInput() {
    return this._udpReqMoreResp;
  }

  // udp_req_one_oneplus_resp - computed: false, optional: true, required: false
  private _udpReqOneOneplusResp?: number; 
  public get udpReqOneOneplusResp() {
    return this.getNumberAttribute('udp_req_one_oneplus_resp');
  }
  public set udpReqOneOneplusResp(value: number) {
    this._udpReqOneOneplusResp = value;
  }
  public resetUdpReqOneOneplusResp() {
    this._udpReqOneOneplusResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpReqOneOneplusRespInput() {
    return this._udpReqOneOneplusResp;
  }

  // udp_req_oneplus - computed: false, optional: true, required: false
  private _udpReqOneplus?: number; 
  public get udpReqOneplus() {
    return this.getNumberAttribute('udp_req_oneplus');
  }
  public set udpReqOneplus(value: number) {
    this._udpReqOneplus = value;
  }
  public resetUdpReqOneplus() {
    this._udpReqOneplus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpReqOneplusInput() {
    return this._udpReqOneplus;
  }

  // udp_req_oneplus_no_resp - computed: false, optional: true, required: false
  private _udpReqOneplusNoResp?: number; 
  public get udpReqOneplusNoResp() {
    return this.getNumberAttribute('udp_req_oneplus_no_resp');
  }
  public set udpReqOneplusNoResp(value: number) {
    this._udpReqOneplusNoResp = value;
  }
  public resetUdpReqOneplusNoResp() {
    this._udpReqOneplusNoResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpReqOneplusNoRespInput() {
    return this._udpReqOneplusNoResp;
  }

  // udp_req_resp_notmatch - computed: false, optional: true, required: false
  private _udpReqRespNotmatch?: number; 
  public get udpReqRespNotmatch() {
    return this.getNumberAttribute('udp_req_resp_notmatch');
  }
  public set udpReqRespNotmatch(value: number) {
    this._udpReqRespNotmatch = value;
  }
  public resetUdpReqRespNotmatch() {
    this._udpReqRespNotmatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpReqRespNotmatchInput() {
    return this._udpReqRespNotmatch;
  }

  // udp_resp_more_req - computed: false, optional: true, required: false
  private _udpRespMoreReq?: number; 
  public get udpRespMoreReq() {
    return this.getNumberAttribute('udp_resp_more_req');
  }
  public set udpRespMoreReq(value: number) {
    this._udpRespMoreReq = value;
  }
  public resetUdpRespMoreReq() {
    this._udpRespMoreReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpRespMoreReqInput() {
    return this._udpRespMoreReq;
  }

  // udp_resp_oneplus - computed: false, optional: true, required: false
  private _udpRespOneplus?: number; 
  public get udpRespOneplus() {
    return this.getNumberAttribute('udp_resp_oneplus');
  }
  public set udpRespOneplus(value: number) {
    this._udpRespOneplus = value;
  }
  public resetUdpRespOneplus() {
    this._udpRespOneplus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpRespOneplusInput() {
    return this._udpRespOneplus;
  }

  // udp_sess_aged_out - computed: false, optional: true, required: false
  private _udpSessAgedOut?: number; 
  public get udpSessAgedOut() {
    return this.getNumberAttribute('udp_sess_aged_out');
  }
  public set udpSessAgedOut(value: number) {
    this._udpSessAgedOut = value;
  }
  public resetUdpSessAgedOut() {
    this._udpSessAgedOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpSessAgedOutInput() {
    return this._udpSessAgedOut;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats thunder_slb_l4_stats}
*/
export class DataThunderSlbL4Stats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_l4_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbL4Stats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbL4Stats to import
  * @param importFromId The id of the existing DataThunderSlbL4Stats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbL4Stats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_l4_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_stats thunder_slb_l4_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbL4StatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbL4StatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_l4_stats',
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
  private _stats = new DataThunderSlbL4StatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbL4StatsStats) {
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
      stats: dataThunderSlbL4StatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSlbL4StatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbL4StatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
