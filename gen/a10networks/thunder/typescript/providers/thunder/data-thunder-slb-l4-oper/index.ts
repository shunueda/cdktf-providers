// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbL4OperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#id DataThunderSlbL4Oper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#oper DataThunderSlbL4Oper#oper}
  */
  readonly oper?: DataThunderSlbL4OperOper;
}
export interface DataThunderSlbL4OperOperL4CpuListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#aflex_drop DataThunderSlbL4Oper#aflex_drop}
  */
  readonly aflexDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#anomaly_bad_content DataThunderSlbL4Oper#anomaly_bad_content}
  */
  readonly anomalyBadContent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#anomaly_out_seq DataThunderSlbL4Oper#anomaly_out_seq}
  */
  readonly anomalyOutSeq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#anomaly_pbslb_drop DataThunderSlbL4Oper#anomaly_pbslb_drop}
  */
  readonly anomalyPbslbDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#anomaly_zero_win DataThunderSlbL4Oper#anomaly_zero_win}
  */
  readonly anomalyZeroWin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#auto_reassign DataThunderSlbL4Oper#auto_reassign}
  */
  readonly autoReassign?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#ax_rexmit_syn DataThunderSlbL4Oper#ax_rexmit_syn}
  */
  readonly axRexmitSyn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#bw_rate_limit_exceed_drop DataThunderSlbL4Oper#bw_rate_limit_exceed_drop}
  */
  readonly bwRateLimitExceedDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#bw_watermark_drop DataThunderSlbL4Oper#bw_watermark_drop}
  */
  readonly bwWatermarkDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#conn_limit_exceed_drop DataThunderSlbL4Oper#conn_limit_exceed_drop}
  */
  readonly connLimitExceedDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#conn_rate_limit_drop DataThunderSlbL4Oper#conn_rate_limit_drop}
  */
  readonly connRateLimitDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#conn_rate_limit_reset DataThunderSlbL4Oper#conn_rate_limit_reset}
  */
  readonly connRateLimitReset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#connlimit_drop DataThunderSlbL4Oper#connlimit_drop}
  */
  readonly connlimitDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#connlimit_reset DataThunderSlbL4Oper#connlimit_reset}
  */
  readonly connlimitReset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#dns_id_switch DataThunderSlbL4Oper#dns_id_switch}
  */
  readonly dnsIdSwitch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#dnssec_switch DataThunderSlbL4Oper#dnssec_switch}
  */
  readonly dnssecSwitch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#fast_aging_reset DataThunderSlbL4Oper#fast_aging_reset}
  */
  readonly fastAgingReset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#fast_aging_set DataThunderSlbL4Oper#fast_aging_set}
  */
  readonly fastAgingSet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#fast_path_l2_reroute DataThunderSlbL4Oper#fast_path_l2_reroute}
  */
  readonly fastPathL2Reroute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#fast_path_reroute DataThunderSlbL4Oper#fast_path_reroute}
  */
  readonly fastPathReroute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#gtp_c_invalid_header DataThunderSlbL4Oper#gtp_c_invalid_header}
  */
  readonly gtpCInvalidHeader?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#gtp_c_invalid_message DataThunderSlbL4Oper#gtp_c_invalid_message}
  */
  readonly gtpCInvalidMessage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#gtp_c_invalid_port DataThunderSlbL4Oper#gtp_c_invalid_port}
  */
  readonly gtpCInvalidPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#ignore_msl DataThunderSlbL4Oper#ignore_msl}
  */
  readonly ignoreMsl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#inband_hm_reassign DataThunderSlbL4Oper#inband_hm_reassign}
  */
  readonly inbandHmReassign?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#inband_hm_retry DataThunderSlbL4Oper#inband_hm_retry}
  */
  readonly inbandHmRetry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#intcp DataThunderSlbL4Oper#intcp}
  */
  readonly intcp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#inudp DataThunderSlbL4Oper#inudp}
  */
  readonly inudp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#ip_outnoroute DataThunderSlbL4Oper#ip_outnoroute}
  */
  readonly ipOutnoroute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#l2_dsr DataThunderSlbL4Oper#l2_dsr}
  */
  readonly l2Dsr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#l3_dsr DataThunderSlbL4Oper#l3_dsr}
  */
  readonly l3Dsr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#l4_cps_exceed_drop DataThunderSlbL4Oper#l4_cps_exceed_drop}
  */
  readonly l4CpsExceedDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#l4_svr_handshake_fail DataThunderSlbL4Oper#l4_svr_handshake_fail}
  */
  readonly l4SvrHandshakeFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#l7_cps_exceed_drop DataThunderSlbL4Oper#l7_cps_exceed_drop}
  */
  readonly l7CpsExceedDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#nat_cps_exceed_drop DataThunderSlbL4Oper#nat_cps_exceed_drop}
  */
  readonly natCpsExceedDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#no_resource_drop DataThunderSlbL4Oper#no_resource_drop}
  */
  readonly noResourceDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#no_vport_drop DataThunderSlbL4Oper#no_vport_drop}
  */
  readonly noVportDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#noest_client_syn_aged_out DataThunderSlbL4Oper#noest_client_syn_aged_out}
  */
  readonly noestClientSynAgedOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#noest_server_syn_xmit_aged_out DataThunderSlbL4Oper#noest_server_syn_xmit_aged_out}
  */
  readonly noestServerSynXmitAgedOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#nosyn_drop DataThunderSlbL4Oper#nosyn_drop}
  */
  readonly nosynDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#nosyn_drop_ack DataThunderSlbL4Oper#nosyn_drop_ack}
  */
  readonly nosynDropAck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#nosyn_drop_fin DataThunderSlbL4Oper#nosyn_drop_fin}
  */
  readonly nosynDropFin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#nosyn_drop_rst DataThunderSlbL4Oper#nosyn_drop_rst}
  */
  readonly nosynDropRst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#novport_drop DataThunderSlbL4Oper#novport_drop}
  */
  readonly novportDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#other_sess_aged_out DataThunderSlbL4Oper#other_sess_aged_out}
  */
  readonly otherSessAgedOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#out_seq_ack_drop DataThunderSlbL4Oper#out_seq_ack_drop}
  */
  readonly outSeqAckDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#pbslb_entry_limit_exceed DataThunderSlbL4Oper#pbslb_entry_limit_exceed}
  */
  readonly pbslbEntryLimitExceed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#port_preserve_attempt DataThunderSlbL4Oper#port_preserve_attempt}
  */
  readonly portPreserveAttempt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#port_preserve_succ DataThunderSlbL4Oper#port_preserve_succ}
  */
  readonly portPreserveSucc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#proxy_header_insert DataThunderSlbL4Oper#proxy_header_insert}
  */
  readonly proxyHeaderInsert?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#proxy_header_rexmit DataThunderSlbL4Oper#proxy_header_rexmit}
  */
  readonly proxyHeaderRexmit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#proxy_nosock_drop DataThunderSlbL4Oper#proxy_nosock_drop}
  */
  readonly proxyNosockDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#proxy_prot_drop DataThunderSlbL4Oper#proxy_prot_drop}
  */
  readonly proxyProtDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#proxy_prot_error DataThunderSlbL4Oper#proxy_prot_error}
  */
  readonly proxyProtError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#rcv_ack_on_syn DataThunderSlbL4Oper#rcv_ack_on_syn}
  */
  readonly rcvAckOnSyn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#rcv_fwd_fin DataThunderSlbL4Oper#rcv_fwd_fin}
  */
  readonly rcvFwdFin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#rcv_fwd_fin_dup DataThunderSlbL4Oper#rcv_fwd_fin_dup}
  */
  readonly rcvFwdFinDup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#rcv_fwd_finack DataThunderSlbL4Oper#rcv_fwd_finack}
  */
  readonly rcvFwdFinack?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#rcv_fwd_last_ack DataThunderSlbL4Oper#rcv_fwd_last_ack}
  */
  readonly rcvFwdLastAck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#rcv_fwd_rst DataThunderSlbL4Oper#rcv_fwd_rst}
  */
  readonly rcvFwdRst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#rcv_req_morethan_rsps DataThunderSlbL4Oper#rcv_req_morethan_rsps}
  */
  readonly rcvReqMorethanRsps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#rcv_req_not_match DataThunderSlbL4Oper#rcv_req_not_match}
  */
  readonly rcvReqNotMatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#rcv_req_rsps DataThunderSlbL4Oper#rcv_req_rsps}
  */
  readonly rcvReqRsps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#rcv_reqs_no_rsp DataThunderSlbL4Oper#rcv_reqs_no_rsp}
  */
  readonly rcvReqsNoRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#rcv_rev_fin DataThunderSlbL4Oper#rcv_rev_fin}
  */
  readonly rcvRevFin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#rcv_rev_fin_dup DataThunderSlbL4Oper#rcv_rev_fin_dup}
  */
  readonly rcvRevFinDup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#rcv_rev_finack DataThunderSlbL4Oper#rcv_rev_finack}
  */
  readonly rcvRevFinack?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#rcv_rev_last_ack DataThunderSlbL4Oper#rcv_rev_last_ack}
  */
  readonly rcvRevLastAck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#rcv_rev_rst DataThunderSlbL4Oper#rcv_rev_rst}
  */
  readonly rcvRevRst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#rcv_rexmit_syn DataThunderSlbL4Oper#rcv_rexmit_syn}
  */
  readonly rcvRexmitSyn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#rcv_rexmit_syn_delq DataThunderSlbL4Oper#rcv_rexmit_syn_delq}
  */
  readonly rcvRexmitSynDelq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#rcv_rexmit_synack DataThunderSlbL4Oper#rcv_rexmit_synack}
  */
  readonly rcvRexmitSynack?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#rcv_rexmit_synack_delq DataThunderSlbL4Oper#rcv_rexmit_synack_delq}
  */
  readonly rcvRexmitSynackDelq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#rcv_rsps_morethan_reqs DataThunderSlbL4Oper#rcv_rsps_morethan_reqs}
  */
  readonly rcvRspsMorethanReqs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#rcv_rst_on_syn DataThunderSlbL4Oper#rcv_rst_on_syn}
  */
  readonly rcvRstOnSyn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#rcv_udp_reqs DataThunderSlbL4Oper#rcv_udp_reqs}
  */
  readonly rcvUdpReqs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#rcv_udp_rsps DataThunderSlbL4Oper#rcv_udp_rsps}
  */
  readonly rcvUdpRsps?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#reselect_svrselfail DataThunderSlbL4Oper#reselect_svrselfail}
  */
  readonly reselectSvrselfail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#reset_l7_on_failover DataThunderSlbL4Oper#reset_l7_on_failover}
  */
  readonly resetL7OnFailover?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#reset_unknown_conn DataThunderSlbL4Oper#reset_unknown_conn}
  */
  readonly resetUnknownConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#server_down_del DataThunderSlbL4Oper#server_down_del}
  */
  readonly serverDownDel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#sess_aged_out DataThunderSlbL4Oper#sess_aged_out}
  */
  readonly sessAgedOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#skip_insert_client_ip DataThunderSlbL4Oper#skip_insert_client_ip}
  */
  readonly skipInsertClientIp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#slb_gtp_proxy_c_process_local_rr DataThunderSlbL4Oper#slb_gtp_proxy_c_process_local_rr}
  */
  readonly slbGtpProxyCProcessLocalRr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#slb_gtp_proxy_pkt_rcv_rr DataThunderSlbL4Oper#slb_gtp_proxy_pkt_rcv_rr}
  */
  readonly slbGtpProxyPktRcvRr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#slb_gtp_proxy_retx_requests DataThunderSlbL4Oper#slb_gtp_proxy_retx_requests}
  */
  readonly slbGtpProxyRetxRequests?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#slb_gtp_proxy_smp_created DataThunderSlbL4Oper#slb_gtp_proxy_smp_created}
  */
  readonly slbGtpProxySmpCreated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#slb_gtp_proxy_smp_creation_failed DataThunderSlbL4Oper#slb_gtp_proxy_smp_creation_failed}
  */
  readonly slbGtpProxySmpCreationFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#slb_gtp_proxy_smp_free_not_found DataThunderSlbL4Oper#slb_gtp_proxy_smp_free_not_found}
  */
  readonly slbGtpProxySmpFreeNotFound?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#slb_gtp_proxy_smp_freed DataThunderSlbL4Oper#slb_gtp_proxy_smp_freed}
  */
  readonly slbGtpProxySmpFreed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#slb_gtp_proxy_smp_match DataThunderSlbL4Oper#slb_gtp_proxy_smp_match}
  */
  readonly slbGtpProxySmpMatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#slb_gtp_proxy_smp_no_match DataThunderSlbL4Oper#slb_gtp_proxy_smp_no_match}
  */
  readonly slbGtpProxySmpNoMatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#smart_nat_id_mismatch DataThunderSlbL4Oper#smart_nat_id_mismatch}
  */
  readonly smartNatIdMismatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#snat_fail DataThunderSlbL4Oper#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#snat_force_preserve_alloc DataThunderSlbL4Oper#snat_force_preserve_alloc}
  */
  readonly snatForcePreserveAlloc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#snat_force_preserve_free DataThunderSlbL4Oper#snat_force_preserve_free}
  */
  readonly snatForcePreserveFree?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#snat_icmp_error_process DataThunderSlbL4Oper#snat_icmp_error_process}
  */
  readonly snatIcmpErrorProcess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#snat_icmp_no_match DataThunderSlbL4Oper#snat_icmp_no_match}
  */
  readonly snatIcmpNoMatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#snat_no_fwd_route DataThunderSlbL4Oper#snat_no_fwd_route}
  */
  readonly snatNoFwdRoute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#snat_no_rev_route DataThunderSlbL4Oper#snat_no_rev_route}
  */
  readonly snatNoRevRoute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#snat_port_overload_fail DataThunderSlbL4Oper#snat_port_overload_fail}
  */
  readonly snatPortOverloadFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#ssl_cps_exceed_drop DataThunderSlbL4Oper#ssl_cps_exceed_drop}
  */
  readonly sslCpsExceedDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#ssl_tpt_exceed_drop DataThunderSlbL4Oper#ssl_tpt_exceed_drop}
  */
  readonly sslTptExceedDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#ssl_watermark_drop DataThunderSlbL4Oper#ssl_watermark_drop}
  */
  readonly sslWatermarkDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#stateless_conn_timeout DataThunderSlbL4Oper#stateless_conn_timeout}
  */
  readonly statelessConnTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#svr_sel_failed DataThunderSlbL4Oper#svr_sel_failed}
  */
  readonly svrSelFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#synattack DataThunderSlbL4Oper#synattack}
  */
  readonly synattack?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#syncookies_buff_drop DataThunderSlbL4Oper#syncookies_buff_drop}
  */
  readonly syncookiesBuffDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#syncookies_buff_queue DataThunderSlbL4Oper#syncookies_buff_queue}
  */
  readonly syncookiesBuffQueue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#tcp_connections_closed DataThunderSlbL4Oper#tcp_connections_closed}
  */
  readonly tcpConnectionsClosed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#tcp_est DataThunderSlbL4Oper#tcp_est}
  */
  readonly tcpEst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#tcp_invalid_drop DataThunderSlbL4Oper#tcp_invalid_drop}
  */
  readonly tcpInvalidDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#tcp_no_slb DataThunderSlbL4Oper#tcp_no_slb}
  */
  readonly tcpNoSlb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#tcp_noest_aged_out DataThunderSlbL4Oper#tcp_noest_aged_out}
  */
  readonly tcpNoestAgedOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#tcp_outrst DataThunderSlbL4Oper#tcp_outrst}
  */
  readonly tcpOutrst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#tcp_outrst_ack_attack DataThunderSlbL4Oper#tcp_outrst_ack_attack}
  */
  readonly tcpOutrstAckAttack?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#tcp_outrst_aflex DataThunderSlbL4Oper#tcp_outrst_aflex}
  */
  readonly tcpOutrstAflex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#tcp_outrst_broker DataThunderSlbL4Oper#tcp_outrst_broker}
  */
  readonly tcpOutrstBroker?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#tcp_outrst_nosyn DataThunderSlbL4Oper#tcp_outrst_nosyn}
  */
  readonly tcpOutrstNosyn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#tcp_outrst_stale_sess DataThunderSlbL4Oper#tcp_outrst_stale_sess}
  */
  readonly tcpOutrstStaleSess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#tcp_outrst_tcpproxy DataThunderSlbL4Oper#tcp_outrst_tcpproxy}
  */
  readonly tcpOutrstTcpproxy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#tcp_sess_aged_out DataThunderSlbL4Oper#tcp_sess_aged_out}
  */
  readonly tcpSessAgedOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#tcp_syn_otherflags DataThunderSlbL4Oper#tcp_syn_otherflags}
  */
  readonly tcpSynOtherflags?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#tcp_syn_rate DataThunderSlbL4Oper#tcp_syn_rate}
  */
  readonly tcpSynRate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#tcp_syn_stale_sess DataThunderSlbL4Oper#tcp_syn_stale_sess}
  */
  readonly tcpSynStaleSess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#tcp_syn_withdata DataThunderSlbL4Oper#tcp_syn_withdata}
  */
  readonly tcpSynWithdata?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#tcp_syncookiescheckfailed DataThunderSlbL4Oper#tcp_syncookiescheckfailed}
  */
  readonly tcpSyncookiescheckfailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#tcp_syncookiessent DataThunderSlbL4Oper#tcp_syncookiessent}
  */
  readonly tcpSyncookiessent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#tcp_syncookiessent_ts DataThunderSlbL4Oper#tcp_syncookiessent_ts}
  */
  readonly tcpSyncookiessentTs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#tcp_syncookiessentfailed DataThunderSlbL4Oper#tcp_syncookiessentfailed}
  */
  readonly tcpSyncookiessentfailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#tcp_synreceived DataThunderSlbL4Oper#tcp_synreceived}
  */
  readonly tcpSynreceived?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#tcp_synreceived_hw DataThunderSlbL4Oper#tcp_synreceived_hw}
  */
  readonly tcpSynreceivedHw?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#throttle_syn DataThunderSlbL4Oper#throttle_syn}
  */
  readonly throttleSyn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#udp_no_slb DataThunderSlbL4Oper#udp_no_slb}
  */
  readonly udpNoSlb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#udp_sess_aged_out DataThunderSlbL4Oper#udp_sess_aged_out}
  */
  readonly udpSessAgedOut?: number;
}

export function dataThunderSlbL4OperOperL4CpuListStructToTerraform(struct?: DataThunderSlbL4OperOperL4CpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aflex_drop: cdktf.numberToTerraform(struct!.aflexDrop),
    anomaly_bad_content: cdktf.numberToTerraform(struct!.anomalyBadContent),
    anomaly_out_seq: cdktf.numberToTerraform(struct!.anomalyOutSeq),
    anomaly_pbslb_drop: cdktf.numberToTerraform(struct!.anomalyPbslbDrop),
    anomaly_zero_win: cdktf.numberToTerraform(struct!.anomalyZeroWin),
    auto_reassign: cdktf.numberToTerraform(struct!.autoReassign),
    ax_rexmit_syn: cdktf.numberToTerraform(struct!.axRexmitSyn),
    bw_rate_limit_exceed_drop: cdktf.numberToTerraform(struct!.bwRateLimitExceedDrop),
    bw_watermark_drop: cdktf.numberToTerraform(struct!.bwWatermarkDrop),
    conn_limit_exceed_drop: cdktf.numberToTerraform(struct!.connLimitExceedDrop),
    conn_rate_limit_drop: cdktf.numberToTerraform(struct!.connRateLimitDrop),
    conn_rate_limit_reset: cdktf.numberToTerraform(struct!.connRateLimitReset),
    connlimit_drop: cdktf.numberToTerraform(struct!.connlimitDrop),
    connlimit_reset: cdktf.numberToTerraform(struct!.connlimitReset),
    dns_id_switch: cdktf.numberToTerraform(struct!.dnsIdSwitch),
    dnssec_switch: cdktf.numberToTerraform(struct!.dnssecSwitch),
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
    ip_outnoroute: cdktf.numberToTerraform(struct!.ipOutnoroute),
    l2_dsr: cdktf.numberToTerraform(struct!.l2Dsr),
    l3_dsr: cdktf.numberToTerraform(struct!.l3Dsr),
    l4_cps_exceed_drop: cdktf.numberToTerraform(struct!.l4CpsExceedDrop),
    l4_svr_handshake_fail: cdktf.numberToTerraform(struct!.l4SvrHandshakeFail),
    l7_cps_exceed_drop: cdktf.numberToTerraform(struct!.l7CpsExceedDrop),
    nat_cps_exceed_drop: cdktf.numberToTerraform(struct!.natCpsExceedDrop),
    no_resource_drop: cdktf.numberToTerraform(struct!.noResourceDrop),
    no_vport_drop: cdktf.numberToTerraform(struct!.noVportDrop),
    noest_client_syn_aged_out: cdktf.numberToTerraform(struct!.noestClientSynAgedOut),
    noest_server_syn_xmit_aged_out: cdktf.numberToTerraform(struct!.noestServerSynXmitAgedOut),
    nosyn_drop: cdktf.numberToTerraform(struct!.nosynDrop),
    nosyn_drop_ack: cdktf.numberToTerraform(struct!.nosynDropAck),
    nosyn_drop_fin: cdktf.numberToTerraform(struct!.nosynDropFin),
    nosyn_drop_rst: cdktf.numberToTerraform(struct!.nosynDropRst),
    novport_drop: cdktf.numberToTerraform(struct!.novportDrop),
    other_sess_aged_out: cdktf.numberToTerraform(struct!.otherSessAgedOut),
    out_seq_ack_drop: cdktf.numberToTerraform(struct!.outSeqAckDrop),
    pbslb_entry_limit_exceed: cdktf.numberToTerraform(struct!.pbslbEntryLimitExceed),
    port_preserve_attempt: cdktf.numberToTerraform(struct!.portPreserveAttempt),
    port_preserve_succ: cdktf.numberToTerraform(struct!.portPreserveSucc),
    proxy_header_insert: cdktf.numberToTerraform(struct!.proxyHeaderInsert),
    proxy_header_rexmit: cdktf.numberToTerraform(struct!.proxyHeaderRexmit),
    proxy_nosock_drop: cdktf.numberToTerraform(struct!.proxyNosockDrop),
    proxy_prot_drop: cdktf.numberToTerraform(struct!.proxyProtDrop),
    proxy_prot_error: cdktf.numberToTerraform(struct!.proxyProtError),
    rcv_ack_on_syn: cdktf.numberToTerraform(struct!.rcvAckOnSyn),
    rcv_fwd_fin: cdktf.numberToTerraform(struct!.rcvFwdFin),
    rcv_fwd_fin_dup: cdktf.numberToTerraform(struct!.rcvFwdFinDup),
    rcv_fwd_finack: cdktf.numberToTerraform(struct!.rcvFwdFinack),
    rcv_fwd_last_ack: cdktf.numberToTerraform(struct!.rcvFwdLastAck),
    rcv_fwd_rst: cdktf.numberToTerraform(struct!.rcvFwdRst),
    rcv_req_morethan_rsps: cdktf.numberToTerraform(struct!.rcvReqMorethanRsps),
    rcv_req_not_match: cdktf.numberToTerraform(struct!.rcvReqNotMatch),
    rcv_req_rsps: cdktf.numberToTerraform(struct!.rcvReqRsps),
    rcv_reqs_no_rsp: cdktf.numberToTerraform(struct!.rcvReqsNoRsp),
    rcv_rev_fin: cdktf.numberToTerraform(struct!.rcvRevFin),
    rcv_rev_fin_dup: cdktf.numberToTerraform(struct!.rcvRevFinDup),
    rcv_rev_finack: cdktf.numberToTerraform(struct!.rcvRevFinack),
    rcv_rev_last_ack: cdktf.numberToTerraform(struct!.rcvRevLastAck),
    rcv_rev_rst: cdktf.numberToTerraform(struct!.rcvRevRst),
    rcv_rexmit_syn: cdktf.numberToTerraform(struct!.rcvRexmitSyn),
    rcv_rexmit_syn_delq: cdktf.numberToTerraform(struct!.rcvRexmitSynDelq),
    rcv_rexmit_synack: cdktf.numberToTerraform(struct!.rcvRexmitSynack),
    rcv_rexmit_synack_delq: cdktf.numberToTerraform(struct!.rcvRexmitSynackDelq),
    rcv_rsps_morethan_reqs: cdktf.numberToTerraform(struct!.rcvRspsMorethanReqs),
    rcv_rst_on_syn: cdktf.numberToTerraform(struct!.rcvRstOnSyn),
    rcv_udp_reqs: cdktf.numberToTerraform(struct!.rcvUdpReqs),
    rcv_udp_rsps: cdktf.numberToTerraform(struct!.rcvUdpRsps),
    reselect_svrselfail: cdktf.numberToTerraform(struct!.reselectSvrselfail),
    reset_l7_on_failover: cdktf.numberToTerraform(struct!.resetL7OnFailover),
    reset_unknown_conn: cdktf.numberToTerraform(struct!.resetUnknownConn),
    server_down_del: cdktf.numberToTerraform(struct!.serverDownDel),
    sess_aged_out: cdktf.numberToTerraform(struct!.sessAgedOut),
    skip_insert_client_ip: cdktf.numberToTerraform(struct!.skipInsertClientIp),
    slb_gtp_proxy_c_process_local_rr: cdktf.numberToTerraform(struct!.slbGtpProxyCProcessLocalRr),
    slb_gtp_proxy_pkt_rcv_rr: cdktf.numberToTerraform(struct!.slbGtpProxyPktRcvRr),
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
    ssl_cps_exceed_drop: cdktf.numberToTerraform(struct!.sslCpsExceedDrop),
    ssl_tpt_exceed_drop: cdktf.numberToTerraform(struct!.sslTptExceedDrop),
    ssl_watermark_drop: cdktf.numberToTerraform(struct!.sslWatermarkDrop),
    stateless_conn_timeout: cdktf.numberToTerraform(struct!.statelessConnTimeout),
    svr_sel_failed: cdktf.numberToTerraform(struct!.svrSelFailed),
    synattack: cdktf.numberToTerraform(struct!.synattack),
    syncookies_buff_drop: cdktf.numberToTerraform(struct!.syncookiesBuffDrop),
    syncookies_buff_queue: cdktf.numberToTerraform(struct!.syncookiesBuffQueue),
    tcp_connections_closed: cdktf.numberToTerraform(struct!.tcpConnectionsClosed),
    tcp_est: cdktf.numberToTerraform(struct!.tcpEst),
    tcp_invalid_drop: cdktf.numberToTerraform(struct!.tcpInvalidDrop),
    tcp_no_slb: cdktf.numberToTerraform(struct!.tcpNoSlb),
    tcp_noest_aged_out: cdktf.numberToTerraform(struct!.tcpNoestAgedOut),
    tcp_outrst: cdktf.numberToTerraform(struct!.tcpOutrst),
    tcp_outrst_ack_attack: cdktf.numberToTerraform(struct!.tcpOutrstAckAttack),
    tcp_outrst_aflex: cdktf.numberToTerraform(struct!.tcpOutrstAflex),
    tcp_outrst_broker: cdktf.numberToTerraform(struct!.tcpOutrstBroker),
    tcp_outrst_nosyn: cdktf.numberToTerraform(struct!.tcpOutrstNosyn),
    tcp_outrst_stale_sess: cdktf.numberToTerraform(struct!.tcpOutrstStaleSess),
    tcp_outrst_tcpproxy: cdktf.numberToTerraform(struct!.tcpOutrstTcpproxy),
    tcp_sess_aged_out: cdktf.numberToTerraform(struct!.tcpSessAgedOut),
    tcp_syn_otherflags: cdktf.numberToTerraform(struct!.tcpSynOtherflags),
    tcp_syn_rate: cdktf.numberToTerraform(struct!.tcpSynRate),
    tcp_syn_stale_sess: cdktf.numberToTerraform(struct!.tcpSynStaleSess),
    tcp_syn_withdata: cdktf.numberToTerraform(struct!.tcpSynWithdata),
    tcp_syncookiescheckfailed: cdktf.numberToTerraform(struct!.tcpSyncookiescheckfailed),
    tcp_syncookiessent: cdktf.numberToTerraform(struct!.tcpSyncookiessent),
    tcp_syncookiessent_ts: cdktf.numberToTerraform(struct!.tcpSyncookiessentTs),
    tcp_syncookiessentfailed: cdktf.numberToTerraform(struct!.tcpSyncookiessentfailed),
    tcp_synreceived: cdktf.numberToTerraform(struct!.tcpSynreceived),
    tcp_synreceived_hw: cdktf.numberToTerraform(struct!.tcpSynreceivedHw),
    throttle_syn: cdktf.numberToTerraform(struct!.throttleSyn),
    udp_no_slb: cdktf.numberToTerraform(struct!.udpNoSlb),
    udp_sess_aged_out: cdktf.numberToTerraform(struct!.udpSessAgedOut),
  }
}


export function dataThunderSlbL4OperOperL4CpuListStructToHclTerraform(struct?: DataThunderSlbL4OperOperL4CpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aflex_drop: {
      value: cdktf.numberToHclTerraform(struct!.aflexDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
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
    ax_rexmit_syn: {
      value: cdktf.numberToHclTerraform(struct!.axRexmitSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bw_rate_limit_exceed_drop: {
      value: cdktf.numberToHclTerraform(struct!.bwRateLimitExceedDrop),
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
    conn_limit_exceed_drop: {
      value: cdktf.numberToHclTerraform(struct!.connLimitExceedDrop),
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
    dnssec_switch: {
      value: cdktf.numberToHclTerraform(struct!.dnssecSwitch),
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
    ip_outnoroute: {
      value: cdktf.numberToHclTerraform(struct!.ipOutnoroute),
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
    l4_cps_exceed_drop: {
      value: cdktf.numberToHclTerraform(struct!.l4CpsExceedDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_svr_handshake_fail: {
      value: cdktf.numberToHclTerraform(struct!.l4SvrHandshakeFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l7_cps_exceed_drop: {
      value: cdktf.numberToHclTerraform(struct!.l7CpsExceedDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_cps_exceed_drop: {
      value: cdktf.numberToHclTerraform(struct!.natCpsExceedDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_resource_drop: {
      value: cdktf.numberToHclTerraform(struct!.noResourceDrop),
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
    noest_client_syn_aged_out: {
      value: cdktf.numberToHclTerraform(struct!.noestClientSynAgedOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    noest_server_syn_xmit_aged_out: {
      value: cdktf.numberToHclTerraform(struct!.noestServerSynXmitAgedOut),
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
    rcv_ack_on_syn: {
      value: cdktf.numberToHclTerraform(struct!.rcvAckOnSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcv_fwd_fin: {
      value: cdktf.numberToHclTerraform(struct!.rcvFwdFin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcv_fwd_fin_dup: {
      value: cdktf.numberToHclTerraform(struct!.rcvFwdFinDup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcv_fwd_finack: {
      value: cdktf.numberToHclTerraform(struct!.rcvFwdFinack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcv_fwd_last_ack: {
      value: cdktf.numberToHclTerraform(struct!.rcvFwdLastAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcv_fwd_rst: {
      value: cdktf.numberToHclTerraform(struct!.rcvFwdRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcv_req_morethan_rsps: {
      value: cdktf.numberToHclTerraform(struct!.rcvReqMorethanRsps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcv_req_not_match: {
      value: cdktf.numberToHclTerraform(struct!.rcvReqNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcv_req_rsps: {
      value: cdktf.numberToHclTerraform(struct!.rcvReqRsps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcv_reqs_no_rsp: {
      value: cdktf.numberToHclTerraform(struct!.rcvReqsNoRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcv_rev_fin: {
      value: cdktf.numberToHclTerraform(struct!.rcvRevFin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcv_rev_fin_dup: {
      value: cdktf.numberToHclTerraform(struct!.rcvRevFinDup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcv_rev_finack: {
      value: cdktf.numberToHclTerraform(struct!.rcvRevFinack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcv_rev_last_ack: {
      value: cdktf.numberToHclTerraform(struct!.rcvRevLastAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcv_rev_rst: {
      value: cdktf.numberToHclTerraform(struct!.rcvRevRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcv_rexmit_syn: {
      value: cdktf.numberToHclTerraform(struct!.rcvRexmitSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcv_rexmit_syn_delq: {
      value: cdktf.numberToHclTerraform(struct!.rcvRexmitSynDelq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcv_rexmit_synack: {
      value: cdktf.numberToHclTerraform(struct!.rcvRexmitSynack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcv_rexmit_synack_delq: {
      value: cdktf.numberToHclTerraform(struct!.rcvRexmitSynackDelq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcv_rsps_morethan_reqs: {
      value: cdktf.numberToHclTerraform(struct!.rcvRspsMorethanReqs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcv_rst_on_syn: {
      value: cdktf.numberToHclTerraform(struct!.rcvRstOnSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcv_udp_reqs: {
      value: cdktf.numberToHclTerraform(struct!.rcvUdpReqs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcv_udp_rsps: {
      value: cdktf.numberToHclTerraform(struct!.rcvUdpRsps),
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
    slb_gtp_proxy_pkt_rcv_rr: {
      value: cdktf.numberToHclTerraform(struct!.slbGtpProxyPktRcvRr),
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
    ssl_cps_exceed_drop: {
      value: cdktf.numberToHclTerraform(struct!.sslCpsExceedDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_tpt_exceed_drop: {
      value: cdktf.numberToHclTerraform(struct!.sslTptExceedDrop),
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
    svr_sel_failed: {
      value: cdktf.numberToHclTerraform(struct!.svrSelFailed),
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
    syncookies_buff_drop: {
      value: cdktf.numberToHclTerraform(struct!.syncookiesBuffDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syncookies_buff_queue: {
      value: cdktf.numberToHclTerraform(struct!.syncookiesBuffQueue),
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
    tcp_noest_aged_out: {
      value: cdktf.numberToHclTerraform(struct!.tcpNoestAgedOut),
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
    tcp_outrst_ack_attack: {
      value: cdktf.numberToHclTerraform(struct!.tcpOutrstAckAttack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_outrst_aflex: {
      value: cdktf.numberToHclTerraform(struct!.tcpOutrstAflex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_outrst_broker: {
      value: cdktf.numberToHclTerraform(struct!.tcpOutrstBroker),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_outrst_nosyn: {
      value: cdktf.numberToHclTerraform(struct!.tcpOutrstNosyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_outrst_stale_sess: {
      value: cdktf.numberToHclTerraform(struct!.tcpOutrstStaleSess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_outrst_tcpproxy: {
      value: cdktf.numberToHclTerraform(struct!.tcpOutrstTcpproxy),
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
    tcp_syn_otherflags: {
      value: cdktf.numberToHclTerraform(struct!.tcpSynOtherflags),
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
    tcp_syn_stale_sess: {
      value: cdktf.numberToHclTerraform(struct!.tcpSynStaleSess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syn_withdata: {
      value: cdktf.numberToHclTerraform(struct!.tcpSynWithdata),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syncookiescheckfailed: {
      value: cdktf.numberToHclTerraform(struct!.tcpSyncookiescheckfailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syncookiessent: {
      value: cdktf.numberToHclTerraform(struct!.tcpSyncookiessent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syncookiessent_ts: {
      value: cdktf.numberToHclTerraform(struct!.tcpSyncookiessentTs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syncookiessentfailed: {
      value: cdktf.numberToHclTerraform(struct!.tcpSyncookiessentfailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_synreceived: {
      value: cdktf.numberToHclTerraform(struct!.tcpSynreceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_synreceived_hw: {
      value: cdktf.numberToHclTerraform(struct!.tcpSynreceivedHw),
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

export class DataThunderSlbL4OperOperL4CpuListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbL4OperOperL4CpuListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aflexDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexDrop = this._aflexDrop;
    }
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
    if (this._axRexmitSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.axRexmitSyn = this._axRexmitSyn;
    }
    if (this._bwRateLimitExceedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwRateLimitExceedDrop = this._bwRateLimitExceedDrop;
    }
    if (this._bwWatermarkDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwWatermarkDrop = this._bwWatermarkDrop;
    }
    if (this._connLimitExceedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.connLimitExceedDrop = this._connLimitExceedDrop;
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
    if (this._dnssecSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnssecSwitch = this._dnssecSwitch;
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
    if (this._ipOutnoroute !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipOutnoroute = this._ipOutnoroute;
    }
    if (this._l2Dsr !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2Dsr = this._l2Dsr;
    }
    if (this._l3Dsr !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3Dsr = this._l3Dsr;
    }
    if (this._l4CpsExceedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4CpsExceedDrop = this._l4CpsExceedDrop;
    }
    if (this._l4SvrHandshakeFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4SvrHandshakeFail = this._l4SvrHandshakeFail;
    }
    if (this._l7CpsExceedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.l7CpsExceedDrop = this._l7CpsExceedDrop;
    }
    if (this._natCpsExceedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.natCpsExceedDrop = this._natCpsExceedDrop;
    }
    if (this._noResourceDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.noResourceDrop = this._noResourceDrop;
    }
    if (this._noVportDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.noVportDrop = this._noVportDrop;
    }
    if (this._noestClientSynAgedOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.noestClientSynAgedOut = this._noestClientSynAgedOut;
    }
    if (this._noestServerSynXmitAgedOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.noestServerSynXmitAgedOut = this._noestServerSynXmitAgedOut;
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
    if (this._rcvAckOnSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvAckOnSyn = this._rcvAckOnSyn;
    }
    if (this._rcvFwdFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvFwdFin = this._rcvFwdFin;
    }
    if (this._rcvFwdFinDup !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvFwdFinDup = this._rcvFwdFinDup;
    }
    if (this._rcvFwdFinack !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvFwdFinack = this._rcvFwdFinack;
    }
    if (this._rcvFwdLastAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvFwdLastAck = this._rcvFwdLastAck;
    }
    if (this._rcvFwdRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvFwdRst = this._rcvFwdRst;
    }
    if (this._rcvReqMorethanRsps !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvReqMorethanRsps = this._rcvReqMorethanRsps;
    }
    if (this._rcvReqNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvReqNotMatch = this._rcvReqNotMatch;
    }
    if (this._rcvReqRsps !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvReqRsps = this._rcvReqRsps;
    }
    if (this._rcvReqsNoRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvReqsNoRsp = this._rcvReqsNoRsp;
    }
    if (this._rcvRevFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvRevFin = this._rcvRevFin;
    }
    if (this._rcvRevFinDup !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvRevFinDup = this._rcvRevFinDup;
    }
    if (this._rcvRevFinack !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvRevFinack = this._rcvRevFinack;
    }
    if (this._rcvRevLastAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvRevLastAck = this._rcvRevLastAck;
    }
    if (this._rcvRevRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvRevRst = this._rcvRevRst;
    }
    if (this._rcvRexmitSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvRexmitSyn = this._rcvRexmitSyn;
    }
    if (this._rcvRexmitSynDelq !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvRexmitSynDelq = this._rcvRexmitSynDelq;
    }
    if (this._rcvRexmitSynack !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvRexmitSynack = this._rcvRexmitSynack;
    }
    if (this._rcvRexmitSynackDelq !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvRexmitSynackDelq = this._rcvRexmitSynackDelq;
    }
    if (this._rcvRspsMorethanReqs !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvRspsMorethanReqs = this._rcvRspsMorethanReqs;
    }
    if (this._rcvRstOnSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvRstOnSyn = this._rcvRstOnSyn;
    }
    if (this._rcvUdpReqs !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvUdpReqs = this._rcvUdpReqs;
    }
    if (this._rcvUdpRsps !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvUdpRsps = this._rcvUdpRsps;
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
    if (this._slbGtpProxyPktRcvRr !== undefined) {
      hasAnyValues = true;
      internalValueResult.slbGtpProxyPktRcvRr = this._slbGtpProxyPktRcvRr;
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
    if (this._sslCpsExceedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCpsExceedDrop = this._sslCpsExceedDrop;
    }
    if (this._sslTptExceedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslTptExceedDrop = this._sslTptExceedDrop;
    }
    if (this._sslWatermarkDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslWatermarkDrop = this._sslWatermarkDrop;
    }
    if (this._statelessConnTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.statelessConnTimeout = this._statelessConnTimeout;
    }
    if (this._svrSelFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.svrSelFailed = this._svrSelFailed;
    }
    if (this._synattack !== undefined) {
      hasAnyValues = true;
      internalValueResult.synattack = this._synattack;
    }
    if (this._syncookiesBuffDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncookiesBuffDrop = this._syncookiesBuffDrop;
    }
    if (this._syncookiesBuffQueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncookiesBuffQueue = this._syncookiesBuffQueue;
    }
    if (this._tcpConnectionsClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpConnectionsClosed = this._tcpConnectionsClosed;
    }
    if (this._tcpEst !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpEst = this._tcpEst;
    }
    if (this._tcpInvalidDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpInvalidDrop = this._tcpInvalidDrop;
    }
    if (this._tcpNoSlb !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpNoSlb = this._tcpNoSlb;
    }
    if (this._tcpNoestAgedOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpNoestAgedOut = this._tcpNoestAgedOut;
    }
    if (this._tcpOutrst !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOutrst = this._tcpOutrst;
    }
    if (this._tcpOutrstAckAttack !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOutrstAckAttack = this._tcpOutrstAckAttack;
    }
    if (this._tcpOutrstAflex !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOutrstAflex = this._tcpOutrstAflex;
    }
    if (this._tcpOutrstBroker !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOutrstBroker = this._tcpOutrstBroker;
    }
    if (this._tcpOutrstNosyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOutrstNosyn = this._tcpOutrstNosyn;
    }
    if (this._tcpOutrstStaleSess !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOutrstStaleSess = this._tcpOutrstStaleSess;
    }
    if (this._tcpOutrstTcpproxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOutrstTcpproxy = this._tcpOutrstTcpproxy;
    }
    if (this._tcpSessAgedOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSessAgedOut = this._tcpSessAgedOut;
    }
    if (this._tcpSynOtherflags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynOtherflags = this._tcpSynOtherflags;
    }
    if (this._tcpSynRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynRate = this._tcpSynRate;
    }
    if (this._tcpSynStaleSess !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynStaleSess = this._tcpSynStaleSess;
    }
    if (this._tcpSynWithdata !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynWithdata = this._tcpSynWithdata;
    }
    if (this._tcpSyncookiescheckfailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSyncookiescheckfailed = this._tcpSyncookiescheckfailed;
    }
    if (this._tcpSyncookiessent !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSyncookiessent = this._tcpSyncookiessent;
    }
    if (this._tcpSyncookiessentTs !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSyncookiessentTs = this._tcpSyncookiessentTs;
    }
    if (this._tcpSyncookiessentfailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSyncookiessentfailed = this._tcpSyncookiessentfailed;
    }
    if (this._tcpSynreceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynreceived = this._tcpSynreceived;
    }
    if (this._tcpSynreceivedHw !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynreceivedHw = this._tcpSynreceivedHw;
    }
    if (this._throttleSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.throttleSyn = this._throttleSyn;
    }
    if (this._udpNoSlb !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpNoSlb = this._udpNoSlb;
    }
    if (this._udpSessAgedOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpSessAgedOut = this._udpSessAgedOut;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbL4OperOperL4CpuListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aflexDrop = undefined;
      this._anomalyBadContent = undefined;
      this._anomalyOutSeq = undefined;
      this._anomalyPbslbDrop = undefined;
      this._anomalyZeroWin = undefined;
      this._autoReassign = undefined;
      this._axRexmitSyn = undefined;
      this._bwRateLimitExceedDrop = undefined;
      this._bwWatermarkDrop = undefined;
      this._connLimitExceedDrop = undefined;
      this._connRateLimitDrop = undefined;
      this._connRateLimitReset = undefined;
      this._connlimitDrop = undefined;
      this._connlimitReset = undefined;
      this._dnsIdSwitch = undefined;
      this._dnssecSwitch = undefined;
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
      this._ipOutnoroute = undefined;
      this._l2Dsr = undefined;
      this._l3Dsr = undefined;
      this._l4CpsExceedDrop = undefined;
      this._l4SvrHandshakeFail = undefined;
      this._l7CpsExceedDrop = undefined;
      this._natCpsExceedDrop = undefined;
      this._noResourceDrop = undefined;
      this._noVportDrop = undefined;
      this._noestClientSynAgedOut = undefined;
      this._noestServerSynXmitAgedOut = undefined;
      this._nosynDrop = undefined;
      this._nosynDropAck = undefined;
      this._nosynDropFin = undefined;
      this._nosynDropRst = undefined;
      this._novportDrop = undefined;
      this._otherSessAgedOut = undefined;
      this._outSeqAckDrop = undefined;
      this._pbslbEntryLimitExceed = undefined;
      this._portPreserveAttempt = undefined;
      this._portPreserveSucc = undefined;
      this._proxyHeaderInsert = undefined;
      this._proxyHeaderRexmit = undefined;
      this._proxyNosockDrop = undefined;
      this._proxyProtDrop = undefined;
      this._proxyProtError = undefined;
      this._rcvAckOnSyn = undefined;
      this._rcvFwdFin = undefined;
      this._rcvFwdFinDup = undefined;
      this._rcvFwdFinack = undefined;
      this._rcvFwdLastAck = undefined;
      this._rcvFwdRst = undefined;
      this._rcvReqMorethanRsps = undefined;
      this._rcvReqNotMatch = undefined;
      this._rcvReqRsps = undefined;
      this._rcvReqsNoRsp = undefined;
      this._rcvRevFin = undefined;
      this._rcvRevFinDup = undefined;
      this._rcvRevFinack = undefined;
      this._rcvRevLastAck = undefined;
      this._rcvRevRst = undefined;
      this._rcvRexmitSyn = undefined;
      this._rcvRexmitSynDelq = undefined;
      this._rcvRexmitSynack = undefined;
      this._rcvRexmitSynackDelq = undefined;
      this._rcvRspsMorethanReqs = undefined;
      this._rcvRstOnSyn = undefined;
      this._rcvUdpReqs = undefined;
      this._rcvUdpRsps = undefined;
      this._reselectSvrselfail = undefined;
      this._resetL7OnFailover = undefined;
      this._resetUnknownConn = undefined;
      this._serverDownDel = undefined;
      this._sessAgedOut = undefined;
      this._skipInsertClientIp = undefined;
      this._slbGtpProxyCProcessLocalRr = undefined;
      this._slbGtpProxyPktRcvRr = undefined;
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
      this._sslCpsExceedDrop = undefined;
      this._sslTptExceedDrop = undefined;
      this._sslWatermarkDrop = undefined;
      this._statelessConnTimeout = undefined;
      this._svrSelFailed = undefined;
      this._synattack = undefined;
      this._syncookiesBuffDrop = undefined;
      this._syncookiesBuffQueue = undefined;
      this._tcpConnectionsClosed = undefined;
      this._tcpEst = undefined;
      this._tcpInvalidDrop = undefined;
      this._tcpNoSlb = undefined;
      this._tcpNoestAgedOut = undefined;
      this._tcpOutrst = undefined;
      this._tcpOutrstAckAttack = undefined;
      this._tcpOutrstAflex = undefined;
      this._tcpOutrstBroker = undefined;
      this._tcpOutrstNosyn = undefined;
      this._tcpOutrstStaleSess = undefined;
      this._tcpOutrstTcpproxy = undefined;
      this._tcpSessAgedOut = undefined;
      this._tcpSynOtherflags = undefined;
      this._tcpSynRate = undefined;
      this._tcpSynStaleSess = undefined;
      this._tcpSynWithdata = undefined;
      this._tcpSyncookiescheckfailed = undefined;
      this._tcpSyncookiessent = undefined;
      this._tcpSyncookiessentTs = undefined;
      this._tcpSyncookiessentfailed = undefined;
      this._tcpSynreceived = undefined;
      this._tcpSynreceivedHw = undefined;
      this._throttleSyn = undefined;
      this._udpNoSlb = undefined;
      this._udpSessAgedOut = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aflexDrop = value.aflexDrop;
      this._anomalyBadContent = value.anomalyBadContent;
      this._anomalyOutSeq = value.anomalyOutSeq;
      this._anomalyPbslbDrop = value.anomalyPbslbDrop;
      this._anomalyZeroWin = value.anomalyZeroWin;
      this._autoReassign = value.autoReassign;
      this._axRexmitSyn = value.axRexmitSyn;
      this._bwRateLimitExceedDrop = value.bwRateLimitExceedDrop;
      this._bwWatermarkDrop = value.bwWatermarkDrop;
      this._connLimitExceedDrop = value.connLimitExceedDrop;
      this._connRateLimitDrop = value.connRateLimitDrop;
      this._connRateLimitReset = value.connRateLimitReset;
      this._connlimitDrop = value.connlimitDrop;
      this._connlimitReset = value.connlimitReset;
      this._dnsIdSwitch = value.dnsIdSwitch;
      this._dnssecSwitch = value.dnssecSwitch;
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
      this._ipOutnoroute = value.ipOutnoroute;
      this._l2Dsr = value.l2Dsr;
      this._l3Dsr = value.l3Dsr;
      this._l4CpsExceedDrop = value.l4CpsExceedDrop;
      this._l4SvrHandshakeFail = value.l4SvrHandshakeFail;
      this._l7CpsExceedDrop = value.l7CpsExceedDrop;
      this._natCpsExceedDrop = value.natCpsExceedDrop;
      this._noResourceDrop = value.noResourceDrop;
      this._noVportDrop = value.noVportDrop;
      this._noestClientSynAgedOut = value.noestClientSynAgedOut;
      this._noestServerSynXmitAgedOut = value.noestServerSynXmitAgedOut;
      this._nosynDrop = value.nosynDrop;
      this._nosynDropAck = value.nosynDropAck;
      this._nosynDropFin = value.nosynDropFin;
      this._nosynDropRst = value.nosynDropRst;
      this._novportDrop = value.novportDrop;
      this._otherSessAgedOut = value.otherSessAgedOut;
      this._outSeqAckDrop = value.outSeqAckDrop;
      this._pbslbEntryLimitExceed = value.pbslbEntryLimitExceed;
      this._portPreserveAttempt = value.portPreserveAttempt;
      this._portPreserveSucc = value.portPreserveSucc;
      this._proxyHeaderInsert = value.proxyHeaderInsert;
      this._proxyHeaderRexmit = value.proxyHeaderRexmit;
      this._proxyNosockDrop = value.proxyNosockDrop;
      this._proxyProtDrop = value.proxyProtDrop;
      this._proxyProtError = value.proxyProtError;
      this._rcvAckOnSyn = value.rcvAckOnSyn;
      this._rcvFwdFin = value.rcvFwdFin;
      this._rcvFwdFinDup = value.rcvFwdFinDup;
      this._rcvFwdFinack = value.rcvFwdFinack;
      this._rcvFwdLastAck = value.rcvFwdLastAck;
      this._rcvFwdRst = value.rcvFwdRst;
      this._rcvReqMorethanRsps = value.rcvReqMorethanRsps;
      this._rcvReqNotMatch = value.rcvReqNotMatch;
      this._rcvReqRsps = value.rcvReqRsps;
      this._rcvReqsNoRsp = value.rcvReqsNoRsp;
      this._rcvRevFin = value.rcvRevFin;
      this._rcvRevFinDup = value.rcvRevFinDup;
      this._rcvRevFinack = value.rcvRevFinack;
      this._rcvRevLastAck = value.rcvRevLastAck;
      this._rcvRevRst = value.rcvRevRst;
      this._rcvRexmitSyn = value.rcvRexmitSyn;
      this._rcvRexmitSynDelq = value.rcvRexmitSynDelq;
      this._rcvRexmitSynack = value.rcvRexmitSynack;
      this._rcvRexmitSynackDelq = value.rcvRexmitSynackDelq;
      this._rcvRspsMorethanReqs = value.rcvRspsMorethanReqs;
      this._rcvRstOnSyn = value.rcvRstOnSyn;
      this._rcvUdpReqs = value.rcvUdpReqs;
      this._rcvUdpRsps = value.rcvUdpRsps;
      this._reselectSvrselfail = value.reselectSvrselfail;
      this._resetL7OnFailover = value.resetL7OnFailover;
      this._resetUnknownConn = value.resetUnknownConn;
      this._serverDownDel = value.serverDownDel;
      this._sessAgedOut = value.sessAgedOut;
      this._skipInsertClientIp = value.skipInsertClientIp;
      this._slbGtpProxyCProcessLocalRr = value.slbGtpProxyCProcessLocalRr;
      this._slbGtpProxyPktRcvRr = value.slbGtpProxyPktRcvRr;
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
      this._sslCpsExceedDrop = value.sslCpsExceedDrop;
      this._sslTptExceedDrop = value.sslTptExceedDrop;
      this._sslWatermarkDrop = value.sslWatermarkDrop;
      this._statelessConnTimeout = value.statelessConnTimeout;
      this._svrSelFailed = value.svrSelFailed;
      this._synattack = value.synattack;
      this._syncookiesBuffDrop = value.syncookiesBuffDrop;
      this._syncookiesBuffQueue = value.syncookiesBuffQueue;
      this._tcpConnectionsClosed = value.tcpConnectionsClosed;
      this._tcpEst = value.tcpEst;
      this._tcpInvalidDrop = value.tcpInvalidDrop;
      this._tcpNoSlb = value.tcpNoSlb;
      this._tcpNoestAgedOut = value.tcpNoestAgedOut;
      this._tcpOutrst = value.tcpOutrst;
      this._tcpOutrstAckAttack = value.tcpOutrstAckAttack;
      this._tcpOutrstAflex = value.tcpOutrstAflex;
      this._tcpOutrstBroker = value.tcpOutrstBroker;
      this._tcpOutrstNosyn = value.tcpOutrstNosyn;
      this._tcpOutrstStaleSess = value.tcpOutrstStaleSess;
      this._tcpOutrstTcpproxy = value.tcpOutrstTcpproxy;
      this._tcpSessAgedOut = value.tcpSessAgedOut;
      this._tcpSynOtherflags = value.tcpSynOtherflags;
      this._tcpSynRate = value.tcpSynRate;
      this._tcpSynStaleSess = value.tcpSynStaleSess;
      this._tcpSynWithdata = value.tcpSynWithdata;
      this._tcpSyncookiescheckfailed = value.tcpSyncookiescheckfailed;
      this._tcpSyncookiessent = value.tcpSyncookiessent;
      this._tcpSyncookiessentTs = value.tcpSyncookiessentTs;
      this._tcpSyncookiessentfailed = value.tcpSyncookiessentfailed;
      this._tcpSynreceived = value.tcpSynreceived;
      this._tcpSynreceivedHw = value.tcpSynreceivedHw;
      this._throttleSyn = value.throttleSyn;
      this._udpNoSlb = value.udpNoSlb;
      this._udpSessAgedOut = value.udpSessAgedOut;
    }
  }

  // aflex_drop - computed: false, optional: true, required: false
  private _aflexDrop?: number; 
  public get aflexDrop() {
    return this.getNumberAttribute('aflex_drop');
  }
  public set aflexDrop(value: number) {
    this._aflexDrop = value;
  }
  public resetAflexDrop() {
    this._aflexDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexDropInput() {
    return this._aflexDrop;
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

  // ax_rexmit_syn - computed: false, optional: true, required: false
  private _axRexmitSyn?: number; 
  public get axRexmitSyn() {
    return this.getNumberAttribute('ax_rexmit_syn');
  }
  public set axRexmitSyn(value: number) {
    this._axRexmitSyn = value;
  }
  public resetAxRexmitSyn() {
    this._axRexmitSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axRexmitSynInput() {
    return this._axRexmitSyn;
  }

  // bw_rate_limit_exceed_drop - computed: false, optional: true, required: false
  private _bwRateLimitExceedDrop?: number; 
  public get bwRateLimitExceedDrop() {
    return this.getNumberAttribute('bw_rate_limit_exceed_drop');
  }
  public set bwRateLimitExceedDrop(value: number) {
    this._bwRateLimitExceedDrop = value;
  }
  public resetBwRateLimitExceedDrop() {
    this._bwRateLimitExceedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwRateLimitExceedDropInput() {
    return this._bwRateLimitExceedDrop;
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

  // conn_limit_exceed_drop - computed: false, optional: true, required: false
  private _connLimitExceedDrop?: number; 
  public get connLimitExceedDrop() {
    return this.getNumberAttribute('conn_limit_exceed_drop');
  }
  public set connLimitExceedDrop(value: number) {
    this._connLimitExceedDrop = value;
  }
  public resetConnLimitExceedDrop() {
    this._connLimitExceedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connLimitExceedDropInput() {
    return this._connLimitExceedDrop;
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

  // ip_outnoroute - computed: false, optional: true, required: false
  private _ipOutnoroute?: number; 
  public get ipOutnoroute() {
    return this.getNumberAttribute('ip_outnoroute');
  }
  public set ipOutnoroute(value: number) {
    this._ipOutnoroute = value;
  }
  public resetIpOutnoroute() {
    this._ipOutnoroute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipOutnorouteInput() {
    return this._ipOutnoroute;
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

  // l4_cps_exceed_drop - computed: false, optional: true, required: false
  private _l4CpsExceedDrop?: number; 
  public get l4CpsExceedDrop() {
    return this.getNumberAttribute('l4_cps_exceed_drop');
  }
  public set l4CpsExceedDrop(value: number) {
    this._l4CpsExceedDrop = value;
  }
  public resetL4CpsExceedDrop() {
    this._l4CpsExceedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4CpsExceedDropInput() {
    return this._l4CpsExceedDrop;
  }

  // l4_svr_handshake_fail - computed: false, optional: true, required: false
  private _l4SvrHandshakeFail?: number; 
  public get l4SvrHandshakeFail() {
    return this.getNumberAttribute('l4_svr_handshake_fail');
  }
  public set l4SvrHandshakeFail(value: number) {
    this._l4SvrHandshakeFail = value;
  }
  public resetL4SvrHandshakeFail() {
    this._l4SvrHandshakeFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SvrHandshakeFailInput() {
    return this._l4SvrHandshakeFail;
  }

  // l7_cps_exceed_drop - computed: false, optional: true, required: false
  private _l7CpsExceedDrop?: number; 
  public get l7CpsExceedDrop() {
    return this.getNumberAttribute('l7_cps_exceed_drop');
  }
  public set l7CpsExceedDrop(value: number) {
    this._l7CpsExceedDrop = value;
  }
  public resetL7CpsExceedDrop() {
    this._l7CpsExceedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l7CpsExceedDropInput() {
    return this._l7CpsExceedDrop;
  }

  // nat_cps_exceed_drop - computed: false, optional: true, required: false
  private _natCpsExceedDrop?: number; 
  public get natCpsExceedDrop() {
    return this.getNumberAttribute('nat_cps_exceed_drop');
  }
  public set natCpsExceedDrop(value: number) {
    this._natCpsExceedDrop = value;
  }
  public resetNatCpsExceedDrop() {
    this._natCpsExceedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natCpsExceedDropInput() {
    return this._natCpsExceedDrop;
  }

  // no_resource_drop - computed: false, optional: true, required: false
  private _noResourceDrop?: number; 
  public get noResourceDrop() {
    return this.getNumberAttribute('no_resource_drop');
  }
  public set noResourceDrop(value: number) {
    this._noResourceDrop = value;
  }
  public resetNoResourceDrop() {
    this._noResourceDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noResourceDropInput() {
    return this._noResourceDrop;
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

  // noest_client_syn_aged_out - computed: false, optional: true, required: false
  private _noestClientSynAgedOut?: number; 
  public get noestClientSynAgedOut() {
    return this.getNumberAttribute('noest_client_syn_aged_out');
  }
  public set noestClientSynAgedOut(value: number) {
    this._noestClientSynAgedOut = value;
  }
  public resetNoestClientSynAgedOut() {
    this._noestClientSynAgedOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noestClientSynAgedOutInput() {
    return this._noestClientSynAgedOut;
  }

  // noest_server_syn_xmit_aged_out - computed: false, optional: true, required: false
  private _noestServerSynXmitAgedOut?: number; 
  public get noestServerSynXmitAgedOut() {
    return this.getNumberAttribute('noest_server_syn_xmit_aged_out');
  }
  public set noestServerSynXmitAgedOut(value: number) {
    this._noestServerSynXmitAgedOut = value;
  }
  public resetNoestServerSynXmitAgedOut() {
    this._noestServerSynXmitAgedOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noestServerSynXmitAgedOutInput() {
    return this._noestServerSynXmitAgedOut;
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

  // rcv_ack_on_syn - computed: false, optional: true, required: false
  private _rcvAckOnSyn?: number; 
  public get rcvAckOnSyn() {
    return this.getNumberAttribute('rcv_ack_on_syn');
  }
  public set rcvAckOnSyn(value: number) {
    this._rcvAckOnSyn = value;
  }
  public resetRcvAckOnSyn() {
    this._rcvAckOnSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvAckOnSynInput() {
    return this._rcvAckOnSyn;
  }

  // rcv_fwd_fin - computed: false, optional: true, required: false
  private _rcvFwdFin?: number; 
  public get rcvFwdFin() {
    return this.getNumberAttribute('rcv_fwd_fin');
  }
  public set rcvFwdFin(value: number) {
    this._rcvFwdFin = value;
  }
  public resetRcvFwdFin() {
    this._rcvFwdFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvFwdFinInput() {
    return this._rcvFwdFin;
  }

  // rcv_fwd_fin_dup - computed: false, optional: true, required: false
  private _rcvFwdFinDup?: number; 
  public get rcvFwdFinDup() {
    return this.getNumberAttribute('rcv_fwd_fin_dup');
  }
  public set rcvFwdFinDup(value: number) {
    this._rcvFwdFinDup = value;
  }
  public resetRcvFwdFinDup() {
    this._rcvFwdFinDup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvFwdFinDupInput() {
    return this._rcvFwdFinDup;
  }

  // rcv_fwd_finack - computed: false, optional: true, required: false
  private _rcvFwdFinack?: number; 
  public get rcvFwdFinack() {
    return this.getNumberAttribute('rcv_fwd_finack');
  }
  public set rcvFwdFinack(value: number) {
    this._rcvFwdFinack = value;
  }
  public resetRcvFwdFinack() {
    this._rcvFwdFinack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvFwdFinackInput() {
    return this._rcvFwdFinack;
  }

  // rcv_fwd_last_ack - computed: false, optional: true, required: false
  private _rcvFwdLastAck?: number; 
  public get rcvFwdLastAck() {
    return this.getNumberAttribute('rcv_fwd_last_ack');
  }
  public set rcvFwdLastAck(value: number) {
    this._rcvFwdLastAck = value;
  }
  public resetRcvFwdLastAck() {
    this._rcvFwdLastAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvFwdLastAckInput() {
    return this._rcvFwdLastAck;
  }

  // rcv_fwd_rst - computed: false, optional: true, required: false
  private _rcvFwdRst?: number; 
  public get rcvFwdRst() {
    return this.getNumberAttribute('rcv_fwd_rst');
  }
  public set rcvFwdRst(value: number) {
    this._rcvFwdRst = value;
  }
  public resetRcvFwdRst() {
    this._rcvFwdRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvFwdRstInput() {
    return this._rcvFwdRst;
  }

  // rcv_req_morethan_rsps - computed: false, optional: true, required: false
  private _rcvReqMorethanRsps?: number; 
  public get rcvReqMorethanRsps() {
    return this.getNumberAttribute('rcv_req_morethan_rsps');
  }
  public set rcvReqMorethanRsps(value: number) {
    this._rcvReqMorethanRsps = value;
  }
  public resetRcvReqMorethanRsps() {
    this._rcvReqMorethanRsps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvReqMorethanRspsInput() {
    return this._rcvReqMorethanRsps;
  }

  // rcv_req_not_match - computed: false, optional: true, required: false
  private _rcvReqNotMatch?: number; 
  public get rcvReqNotMatch() {
    return this.getNumberAttribute('rcv_req_not_match');
  }
  public set rcvReqNotMatch(value: number) {
    this._rcvReqNotMatch = value;
  }
  public resetRcvReqNotMatch() {
    this._rcvReqNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvReqNotMatchInput() {
    return this._rcvReqNotMatch;
  }

  // rcv_req_rsps - computed: false, optional: true, required: false
  private _rcvReqRsps?: number; 
  public get rcvReqRsps() {
    return this.getNumberAttribute('rcv_req_rsps');
  }
  public set rcvReqRsps(value: number) {
    this._rcvReqRsps = value;
  }
  public resetRcvReqRsps() {
    this._rcvReqRsps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvReqRspsInput() {
    return this._rcvReqRsps;
  }

  // rcv_reqs_no_rsp - computed: false, optional: true, required: false
  private _rcvReqsNoRsp?: number; 
  public get rcvReqsNoRsp() {
    return this.getNumberAttribute('rcv_reqs_no_rsp');
  }
  public set rcvReqsNoRsp(value: number) {
    this._rcvReqsNoRsp = value;
  }
  public resetRcvReqsNoRsp() {
    this._rcvReqsNoRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvReqsNoRspInput() {
    return this._rcvReqsNoRsp;
  }

  // rcv_rev_fin - computed: false, optional: true, required: false
  private _rcvRevFin?: number; 
  public get rcvRevFin() {
    return this.getNumberAttribute('rcv_rev_fin');
  }
  public set rcvRevFin(value: number) {
    this._rcvRevFin = value;
  }
  public resetRcvRevFin() {
    this._rcvRevFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvRevFinInput() {
    return this._rcvRevFin;
  }

  // rcv_rev_fin_dup - computed: false, optional: true, required: false
  private _rcvRevFinDup?: number; 
  public get rcvRevFinDup() {
    return this.getNumberAttribute('rcv_rev_fin_dup');
  }
  public set rcvRevFinDup(value: number) {
    this._rcvRevFinDup = value;
  }
  public resetRcvRevFinDup() {
    this._rcvRevFinDup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvRevFinDupInput() {
    return this._rcvRevFinDup;
  }

  // rcv_rev_finack - computed: false, optional: true, required: false
  private _rcvRevFinack?: number; 
  public get rcvRevFinack() {
    return this.getNumberAttribute('rcv_rev_finack');
  }
  public set rcvRevFinack(value: number) {
    this._rcvRevFinack = value;
  }
  public resetRcvRevFinack() {
    this._rcvRevFinack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvRevFinackInput() {
    return this._rcvRevFinack;
  }

  // rcv_rev_last_ack - computed: false, optional: true, required: false
  private _rcvRevLastAck?: number; 
  public get rcvRevLastAck() {
    return this.getNumberAttribute('rcv_rev_last_ack');
  }
  public set rcvRevLastAck(value: number) {
    this._rcvRevLastAck = value;
  }
  public resetRcvRevLastAck() {
    this._rcvRevLastAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvRevLastAckInput() {
    return this._rcvRevLastAck;
  }

  // rcv_rev_rst - computed: false, optional: true, required: false
  private _rcvRevRst?: number; 
  public get rcvRevRst() {
    return this.getNumberAttribute('rcv_rev_rst');
  }
  public set rcvRevRst(value: number) {
    this._rcvRevRst = value;
  }
  public resetRcvRevRst() {
    this._rcvRevRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvRevRstInput() {
    return this._rcvRevRst;
  }

  // rcv_rexmit_syn - computed: false, optional: true, required: false
  private _rcvRexmitSyn?: number; 
  public get rcvRexmitSyn() {
    return this.getNumberAttribute('rcv_rexmit_syn');
  }
  public set rcvRexmitSyn(value: number) {
    this._rcvRexmitSyn = value;
  }
  public resetRcvRexmitSyn() {
    this._rcvRexmitSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvRexmitSynInput() {
    return this._rcvRexmitSyn;
  }

  // rcv_rexmit_syn_delq - computed: false, optional: true, required: false
  private _rcvRexmitSynDelq?: number; 
  public get rcvRexmitSynDelq() {
    return this.getNumberAttribute('rcv_rexmit_syn_delq');
  }
  public set rcvRexmitSynDelq(value: number) {
    this._rcvRexmitSynDelq = value;
  }
  public resetRcvRexmitSynDelq() {
    this._rcvRexmitSynDelq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvRexmitSynDelqInput() {
    return this._rcvRexmitSynDelq;
  }

  // rcv_rexmit_synack - computed: false, optional: true, required: false
  private _rcvRexmitSynack?: number; 
  public get rcvRexmitSynack() {
    return this.getNumberAttribute('rcv_rexmit_synack');
  }
  public set rcvRexmitSynack(value: number) {
    this._rcvRexmitSynack = value;
  }
  public resetRcvRexmitSynack() {
    this._rcvRexmitSynack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvRexmitSynackInput() {
    return this._rcvRexmitSynack;
  }

  // rcv_rexmit_synack_delq - computed: false, optional: true, required: false
  private _rcvRexmitSynackDelq?: number; 
  public get rcvRexmitSynackDelq() {
    return this.getNumberAttribute('rcv_rexmit_synack_delq');
  }
  public set rcvRexmitSynackDelq(value: number) {
    this._rcvRexmitSynackDelq = value;
  }
  public resetRcvRexmitSynackDelq() {
    this._rcvRexmitSynackDelq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvRexmitSynackDelqInput() {
    return this._rcvRexmitSynackDelq;
  }

  // rcv_rsps_morethan_reqs - computed: false, optional: true, required: false
  private _rcvRspsMorethanReqs?: number; 
  public get rcvRspsMorethanReqs() {
    return this.getNumberAttribute('rcv_rsps_morethan_reqs');
  }
  public set rcvRspsMorethanReqs(value: number) {
    this._rcvRspsMorethanReqs = value;
  }
  public resetRcvRspsMorethanReqs() {
    this._rcvRspsMorethanReqs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvRspsMorethanReqsInput() {
    return this._rcvRspsMorethanReqs;
  }

  // rcv_rst_on_syn - computed: false, optional: true, required: false
  private _rcvRstOnSyn?: number; 
  public get rcvRstOnSyn() {
    return this.getNumberAttribute('rcv_rst_on_syn');
  }
  public set rcvRstOnSyn(value: number) {
    this._rcvRstOnSyn = value;
  }
  public resetRcvRstOnSyn() {
    this._rcvRstOnSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvRstOnSynInput() {
    return this._rcvRstOnSyn;
  }

  // rcv_udp_reqs - computed: false, optional: true, required: false
  private _rcvUdpReqs?: number; 
  public get rcvUdpReqs() {
    return this.getNumberAttribute('rcv_udp_reqs');
  }
  public set rcvUdpReqs(value: number) {
    this._rcvUdpReqs = value;
  }
  public resetRcvUdpReqs() {
    this._rcvUdpReqs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvUdpReqsInput() {
    return this._rcvUdpReqs;
  }

  // rcv_udp_rsps - computed: false, optional: true, required: false
  private _rcvUdpRsps?: number; 
  public get rcvUdpRsps() {
    return this.getNumberAttribute('rcv_udp_rsps');
  }
  public set rcvUdpRsps(value: number) {
    this._rcvUdpRsps = value;
  }
  public resetRcvUdpRsps() {
    this._rcvUdpRsps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvUdpRspsInput() {
    return this._rcvUdpRsps;
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

  // slb_gtp_proxy_pkt_rcv_rr - computed: false, optional: true, required: false
  private _slbGtpProxyPktRcvRr?: number; 
  public get slbGtpProxyPktRcvRr() {
    return this.getNumberAttribute('slb_gtp_proxy_pkt_rcv_rr');
  }
  public set slbGtpProxyPktRcvRr(value: number) {
    this._slbGtpProxyPktRcvRr = value;
  }
  public resetSlbGtpProxyPktRcvRr() {
    this._slbGtpProxyPktRcvRr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbGtpProxyPktRcvRrInput() {
    return this._slbGtpProxyPktRcvRr;
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

  // ssl_cps_exceed_drop - computed: false, optional: true, required: false
  private _sslCpsExceedDrop?: number; 
  public get sslCpsExceedDrop() {
    return this.getNumberAttribute('ssl_cps_exceed_drop');
  }
  public set sslCpsExceedDrop(value: number) {
    this._sslCpsExceedDrop = value;
  }
  public resetSslCpsExceedDrop() {
    this._sslCpsExceedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCpsExceedDropInput() {
    return this._sslCpsExceedDrop;
  }

  // ssl_tpt_exceed_drop - computed: false, optional: true, required: false
  private _sslTptExceedDrop?: number; 
  public get sslTptExceedDrop() {
    return this.getNumberAttribute('ssl_tpt_exceed_drop');
  }
  public set sslTptExceedDrop(value: number) {
    this._sslTptExceedDrop = value;
  }
  public resetSslTptExceedDrop() {
    this._sslTptExceedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslTptExceedDropInput() {
    return this._sslTptExceedDrop;
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

  // svr_sel_failed - computed: false, optional: true, required: false
  private _svrSelFailed?: number; 
  public get svrSelFailed() {
    return this.getNumberAttribute('svr_sel_failed');
  }
  public set svrSelFailed(value: number) {
    this._svrSelFailed = value;
  }
  public resetSvrSelFailed() {
    this._svrSelFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svrSelFailedInput() {
    return this._svrSelFailed;
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

  // syncookies_buff_drop - computed: false, optional: true, required: false
  private _syncookiesBuffDrop?: number; 
  public get syncookiesBuffDrop() {
    return this.getNumberAttribute('syncookies_buff_drop');
  }
  public set syncookiesBuffDrop(value: number) {
    this._syncookiesBuffDrop = value;
  }
  public resetSyncookiesBuffDrop() {
    this._syncookiesBuffDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncookiesBuffDropInput() {
    return this._syncookiesBuffDrop;
  }

  // syncookies_buff_queue - computed: false, optional: true, required: false
  private _syncookiesBuffQueue?: number; 
  public get syncookiesBuffQueue() {
    return this.getNumberAttribute('syncookies_buff_queue');
  }
  public set syncookiesBuffQueue(value: number) {
    this._syncookiesBuffQueue = value;
  }
  public resetSyncookiesBuffQueue() {
    this._syncookiesBuffQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncookiesBuffQueueInput() {
    return this._syncookiesBuffQueue;
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

  // tcp_noest_aged_out - computed: false, optional: true, required: false
  private _tcpNoestAgedOut?: number; 
  public get tcpNoestAgedOut() {
    return this.getNumberAttribute('tcp_noest_aged_out');
  }
  public set tcpNoestAgedOut(value: number) {
    this._tcpNoestAgedOut = value;
  }
  public resetTcpNoestAgedOut() {
    this._tcpNoestAgedOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpNoestAgedOutInput() {
    return this._tcpNoestAgedOut;
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

  // tcp_outrst_ack_attack - computed: false, optional: true, required: false
  private _tcpOutrstAckAttack?: number; 
  public get tcpOutrstAckAttack() {
    return this.getNumberAttribute('tcp_outrst_ack_attack');
  }
  public set tcpOutrstAckAttack(value: number) {
    this._tcpOutrstAckAttack = value;
  }
  public resetTcpOutrstAckAttack() {
    this._tcpOutrstAckAttack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOutrstAckAttackInput() {
    return this._tcpOutrstAckAttack;
  }

  // tcp_outrst_aflex - computed: false, optional: true, required: false
  private _tcpOutrstAflex?: number; 
  public get tcpOutrstAflex() {
    return this.getNumberAttribute('tcp_outrst_aflex');
  }
  public set tcpOutrstAflex(value: number) {
    this._tcpOutrstAflex = value;
  }
  public resetTcpOutrstAflex() {
    this._tcpOutrstAflex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOutrstAflexInput() {
    return this._tcpOutrstAflex;
  }

  // tcp_outrst_broker - computed: false, optional: true, required: false
  private _tcpOutrstBroker?: number; 
  public get tcpOutrstBroker() {
    return this.getNumberAttribute('tcp_outrst_broker');
  }
  public set tcpOutrstBroker(value: number) {
    this._tcpOutrstBroker = value;
  }
  public resetTcpOutrstBroker() {
    this._tcpOutrstBroker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOutrstBrokerInput() {
    return this._tcpOutrstBroker;
  }

  // tcp_outrst_nosyn - computed: false, optional: true, required: false
  private _tcpOutrstNosyn?: number; 
  public get tcpOutrstNosyn() {
    return this.getNumberAttribute('tcp_outrst_nosyn');
  }
  public set tcpOutrstNosyn(value: number) {
    this._tcpOutrstNosyn = value;
  }
  public resetTcpOutrstNosyn() {
    this._tcpOutrstNosyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOutrstNosynInput() {
    return this._tcpOutrstNosyn;
  }

  // tcp_outrst_stale_sess - computed: false, optional: true, required: false
  private _tcpOutrstStaleSess?: number; 
  public get tcpOutrstStaleSess() {
    return this.getNumberAttribute('tcp_outrst_stale_sess');
  }
  public set tcpOutrstStaleSess(value: number) {
    this._tcpOutrstStaleSess = value;
  }
  public resetTcpOutrstStaleSess() {
    this._tcpOutrstStaleSess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOutrstStaleSessInput() {
    return this._tcpOutrstStaleSess;
  }

  // tcp_outrst_tcpproxy - computed: false, optional: true, required: false
  private _tcpOutrstTcpproxy?: number; 
  public get tcpOutrstTcpproxy() {
    return this.getNumberAttribute('tcp_outrst_tcpproxy');
  }
  public set tcpOutrstTcpproxy(value: number) {
    this._tcpOutrstTcpproxy = value;
  }
  public resetTcpOutrstTcpproxy() {
    this._tcpOutrstTcpproxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOutrstTcpproxyInput() {
    return this._tcpOutrstTcpproxy;
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

  // tcp_syn_otherflags - computed: false, optional: true, required: false
  private _tcpSynOtherflags?: number; 
  public get tcpSynOtherflags() {
    return this.getNumberAttribute('tcp_syn_otherflags');
  }
  public set tcpSynOtherflags(value: number) {
    this._tcpSynOtherflags = value;
  }
  public resetTcpSynOtherflags() {
    this._tcpSynOtherflags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynOtherflagsInput() {
    return this._tcpSynOtherflags;
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

  // tcp_syn_stale_sess - computed: false, optional: true, required: false
  private _tcpSynStaleSess?: number; 
  public get tcpSynStaleSess() {
    return this.getNumberAttribute('tcp_syn_stale_sess');
  }
  public set tcpSynStaleSess(value: number) {
    this._tcpSynStaleSess = value;
  }
  public resetTcpSynStaleSess() {
    this._tcpSynStaleSess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynStaleSessInput() {
    return this._tcpSynStaleSess;
  }

  // tcp_syn_withdata - computed: false, optional: true, required: false
  private _tcpSynWithdata?: number; 
  public get tcpSynWithdata() {
    return this.getNumberAttribute('tcp_syn_withdata');
  }
  public set tcpSynWithdata(value: number) {
    this._tcpSynWithdata = value;
  }
  public resetTcpSynWithdata() {
    this._tcpSynWithdata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynWithdataInput() {
    return this._tcpSynWithdata;
  }

  // tcp_syncookiescheckfailed - computed: false, optional: true, required: false
  private _tcpSyncookiescheckfailed?: number; 
  public get tcpSyncookiescheckfailed() {
    return this.getNumberAttribute('tcp_syncookiescheckfailed');
  }
  public set tcpSyncookiescheckfailed(value: number) {
    this._tcpSyncookiescheckfailed = value;
  }
  public resetTcpSyncookiescheckfailed() {
    this._tcpSyncookiescheckfailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSyncookiescheckfailedInput() {
    return this._tcpSyncookiescheckfailed;
  }

  // tcp_syncookiessent - computed: false, optional: true, required: false
  private _tcpSyncookiessent?: number; 
  public get tcpSyncookiessent() {
    return this.getNumberAttribute('tcp_syncookiessent');
  }
  public set tcpSyncookiessent(value: number) {
    this._tcpSyncookiessent = value;
  }
  public resetTcpSyncookiessent() {
    this._tcpSyncookiessent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSyncookiessentInput() {
    return this._tcpSyncookiessent;
  }

  // tcp_syncookiessent_ts - computed: false, optional: true, required: false
  private _tcpSyncookiessentTs?: number; 
  public get tcpSyncookiessentTs() {
    return this.getNumberAttribute('tcp_syncookiessent_ts');
  }
  public set tcpSyncookiessentTs(value: number) {
    this._tcpSyncookiessentTs = value;
  }
  public resetTcpSyncookiessentTs() {
    this._tcpSyncookiessentTs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSyncookiessentTsInput() {
    return this._tcpSyncookiessentTs;
  }

  // tcp_syncookiessentfailed - computed: false, optional: true, required: false
  private _tcpSyncookiessentfailed?: number; 
  public get tcpSyncookiessentfailed() {
    return this.getNumberAttribute('tcp_syncookiessentfailed');
  }
  public set tcpSyncookiessentfailed(value: number) {
    this._tcpSyncookiessentfailed = value;
  }
  public resetTcpSyncookiessentfailed() {
    this._tcpSyncookiessentfailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSyncookiessentfailedInput() {
    return this._tcpSyncookiessentfailed;
  }

  // tcp_synreceived - computed: false, optional: true, required: false
  private _tcpSynreceived?: number; 
  public get tcpSynreceived() {
    return this.getNumberAttribute('tcp_synreceived');
  }
  public set tcpSynreceived(value: number) {
    this._tcpSynreceived = value;
  }
  public resetTcpSynreceived() {
    this._tcpSynreceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynreceivedInput() {
    return this._tcpSynreceived;
  }

  // tcp_synreceived_hw - computed: false, optional: true, required: false
  private _tcpSynreceivedHw?: number; 
  public get tcpSynreceivedHw() {
    return this.getNumberAttribute('tcp_synreceived_hw');
  }
  public set tcpSynreceivedHw(value: number) {
    this._tcpSynreceivedHw = value;
  }
  public resetTcpSynreceivedHw() {
    this._tcpSynreceivedHw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynreceivedHwInput() {
    return this._tcpSynreceivedHw;
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

export class DataThunderSlbL4OperOperL4CpuListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbL4OperOperL4CpuListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbL4OperOperL4CpuListStructOutputReference {
    return new DataThunderSlbL4OperOperL4CpuListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbL4OperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#cpu_count DataThunderSlbL4Oper#cpu_count}
  */
  readonly cpuCount?: number;
  /**
  * l4_cpu_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#l4_cpu_list DataThunderSlbL4Oper#l4_cpu_list}
  */
  readonly l4CpuList?: DataThunderSlbL4OperOperL4CpuListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbL4OperOperToTerraform(struct?: DataThunderSlbL4OperOperOutputReference | DataThunderSlbL4OperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    l4_cpu_list: cdktf.listMapper(dataThunderSlbL4OperOperL4CpuListStructToTerraform, true)(struct!.l4CpuList),
  }
}


export function dataThunderSlbL4OperOperToHclTerraform(struct?: DataThunderSlbL4OperOperOutputReference | DataThunderSlbL4OperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_count: {
      value: cdktf.numberToHclTerraform(struct!.cpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_cpu_list: {
      value: cdktf.listMapperHcl(dataThunderSlbL4OperOperL4CpuListStructToHclTerraform, true)(struct!.l4CpuList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbL4OperOperL4CpuListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbL4OperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbL4OperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._l4CpuList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4CpuList = this._l4CpuList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbL4OperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCount = undefined;
      this._l4CpuList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCount = value.cpuCount;
      this._l4CpuList.internalValue = value.l4CpuList;
    }
  }

  // cpu_count - computed: false, optional: true, required: false
  private _cpuCount?: number; 
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }
  public set cpuCount(value: number) {
    this._cpuCount = value;
  }
  public resetCpuCount() {
    this._cpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCountInput() {
    return this._cpuCount;
  }

  // l4_cpu_list - computed: false, optional: true, required: false
  private _l4CpuList = new DataThunderSlbL4OperOperL4CpuListStructList(this, "l4_cpu_list", false);
  public get l4CpuList() {
    return this._l4CpuList;
  }
  public putL4CpuList(value: DataThunderSlbL4OperOperL4CpuListStruct[] | cdktf.IResolvable) {
    this._l4CpuList.internalValue = value;
  }
  public resetL4CpuList() {
    this._l4CpuList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4CpuListInput() {
    return this._l4CpuList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper thunder_slb_l4_oper}
*/
export class DataThunderSlbL4Oper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_l4_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbL4Oper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbL4Oper to import
  * @param importFromId The id of the existing DataThunderSlbL4Oper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbL4Oper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_l4_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_l4_oper thunder_slb_l4_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbL4OperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbL4OperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_l4_oper',
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSlbL4OperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbL4OperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderSlbL4OperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderSlbL4OperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbL4OperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
