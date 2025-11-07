// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDnsCacheServerStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#id DataThunderDdosDnsCacheServerStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#stats DataThunderDdosDnsCacheServerStats#stats}
  */
  readonly stats?: DataThunderDdosDnsCacheServerStatsStats;
}
export interface DataThunderDdosDnsCacheServerStatsStats {
  /**
  * Insert Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#insert_fail_all DataThunderDdosDnsCacheServerStats#insert_fail_all}
  */
  readonly insertFailAll?: number;
  /**
  * Insert Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#insert_success DataThunderDdosDnsCacheServerStats#insert_success}
  */
  readonly insertSuccess?: number;
  /**
  * Insert Total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#insert_total DataThunderDdosDnsCacheServerStats#insert_total}
  */
  readonly insertTotal?: number;
  /**
  * Lookup DNS ANY Type Query Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#lookup_any_type_query_action_drop DataThunderDdosDnsCacheServerStats#lookup_any_type_query_action_drop}
  */
  readonly lookupAnyTypeQueryActionDrop?: number;
  /**
  * Lookup DNS ANY Type Query Action Refused
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#lookup_any_type_query_action_refused DataThunderDdosDnsCacheServerStats#lookup_any_type_query_action_refused}
  */
  readonly lookupAnyTypeQueryActionRefused?: number;
  /**
  * Lookup DNS ANY Type Query Action Response Empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#lookup_any_type_query_action_resp_empty DataThunderDdosDnsCacheServerStats#lookup_any_type_query_action_resp_empty}
  */
  readonly lookupAnyTypeQueryActionRespEmpty?: number;
  /**
  * Lookup DNS Default Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#lookup_default_action_drop DataThunderDdosDnsCacheServerStats#lookup_default_action_drop}
  */
  readonly lookupDefaultActionDrop?: number;
  /**
  * Lookup DNS Default Action Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#lookup_default_action_forward DataThunderDdosDnsCacheServerStats#lookup_default_action_forward}
  */
  readonly lookupDefaultActionForward?: number;
  /**
  * Lookup Delegation Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#lookup_deleg_resp DataThunderDdosDnsCacheServerStats#lookup_deleg_resp}
  */
  readonly lookupDelegResp?: number;
  /**
  * Lookup DNS-TCP Request Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#lookup_dnstcp_rcvd DataThunderDdosDnsCacheServerStats#lookup_dnstcp_rcvd}
  */
  readonly lookupDnstcpRcvd?: number;
  /**
  * Lookup DNS-UDP Request Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#lookup_dnsudp_rcvd DataThunderDdosDnsCacheServerStats#lookup_dnsudp_rcvd}
  */
  readonly lookupDnsudpRcvd?: number;
  /**
  * Lookup EDNS Bad Version Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#lookup_edns_bad_version_resp DataThunderDdosDnsCacheServerStats#lookup_edns_bad_version_resp}
  */
  readonly lookupEdnsBadVersionResp?: number;
  /**
  * Lookup Empty Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#lookup_empty_resp DataThunderDdosDnsCacheServerStats#lookup_empty_resp}
  */
  readonly lookupEmptyResp?: number;
  /**
  * Lookup Fully Matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#lookup_full_matched DataThunderDdosDnsCacheServerStats#lookup_full_matched}
  */
  readonly lookupFullMatched?: number;
  /**
  * Lookup Forwarded to Server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#lookup_fwd_server DataThunderDdosDnsCacheServerStats#lookup_fwd_server}
  */
  readonly lookupFwdServer?: number;
  /**
  * Lookup Forwarded to Sharding DNS Cache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#lookup_fwd_shard DataThunderDdosDnsCacheServerStats#lookup_fwd_shard}
  */
  readonly lookupFwdShard?: number;
  /**
  * Lookup Incomplete Zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#lookup_incomp_zone DataThunderDdosDnsCacheServerStats#lookup_incomp_zone}
  */
  readonly lookupIncompZone?: number;
  /**
  * Lookup Invalid Domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#lookup_invalid_domain DataThunderDdosDnsCacheServerStats#lookup_invalid_domain}
  */
  readonly lookupInvalidDomain?: number;
  /**
  * Lookup DNS Manual Override Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#lookup_manual_override_action_drop DataThunderDdosDnsCacheServerStats#lookup_manual_override_action_drop}
  */
  readonly lookupManualOverrideActionDrop?: number;
  /**
  * Lookup DNS Manual Override Action Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#lookup_manual_override_action_forward DataThunderDdosDnsCacheServerStats#lookup_manual_override_action_forward}
  */
  readonly lookupManualOverrideActionForward?: number;
  /**
  * Lookup DNS Manual Override Action Serve
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#lookup_manual_override_action_serve DataThunderDdosDnsCacheServerStats#lookup_manual_override_action_serve}
  */
  readonly lookupManualOverrideActionServe?: number;
  /**
  * Lookup DNS Non-Authoritative Zone Query Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#lookup_non_auth_zone_query_action_drop DataThunderDdosDnsCacheServerStats#lookup_non_auth_zone_query_action_drop}
  */
  readonly lookupNonAuthZoneQueryActionDrop?: number;
  /**
  * Lookup DNS Non-Authoritative Zone Query Action Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#lookup_non_auth_zone_query_action_forward DataThunderDdosDnsCacheServerStats#lookup_non_auth_zone_query_action_forward}
  */
  readonly lookupNonAuthZoneQueryActionForward?: number;
  /**
  * Lookup DNS Non-Authoritative Zone Query Action Refused
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#lookup_non_auth_zone_query_action_resp_refused DataThunderDdosDnsCacheServerStats#lookup_non_auth_zone_query_action_resp_refused}
  */
  readonly lookupNonAuthZoneQueryActionRespRefused?: number;
  /**
  * Lookup Nxdomain Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#lookup_nxdomain_resp DataThunderDdosDnsCacheServerStats#lookup_nxdomain_resp}
  */
  readonly lookupNxdomainResp?: number;
  /**
  * Lookup Opcode Not Implemented Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#lookup_opcode_notimpl_resp DataThunderDdosDnsCacheServerStats#lookup_opcode_notimpl_resp}
  */
  readonly lookupOpcodeNotimplResp?: number;
  /**
  * Lookup Refuse Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#lookup_refuse_resp DataThunderDdosDnsCacheServerStats#lookup_refuse_resp}
  */
  readonly lookupRefuseResp?: number;
  /**
  * Lookup Undefined Record Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#lookup_undefined_rtype DataThunderDdosDnsCacheServerStats#lookup_undefined_rtype}
  */
  readonly lookupUndefinedRtype?: number;
  /**
  * Lookup Unexpected Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#lookup_unexp_err DataThunderDdosDnsCacheServerStats#lookup_unexp_err}
  */
  readonly lookupUnexpErr?: number;
  /**
  * Lookup Shard Filter Matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#shard_filter_match DataThunderDdosDnsCacheServerStats#shard_filter_match}
  */
  readonly shardFilterMatch?: number;
  /**
  * Zone Transfer AXFR Started
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#zt_axfr_attempts DataThunderDdosDnsCacheServerStats#zt_axfr_attempts}
  */
  readonly ztAxfrAttempts?: number;
  /**
  * Zone Transfer Completed No Update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#zt_completed_no_update DataThunderDdosDnsCacheServerStats#zt_completed_no_update}
  */
  readonly ztCompletedNoUpdate?: number;
  /**
  * Zone Transfer Completed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#zt_completed_ok DataThunderDdosDnsCacheServerStats#zt_completed_ok}
  */
  readonly ztCompletedOk?: number;
  /**
  * Zone Transfer DNS Processing Errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#zt_dns_process_err DataThunderDdosDnsCacheServerStats#zt_dns_process_err}
  */
  readonly ztDnsProcessErr?: number;
  /**
  * Zone Transfer Server Not Auth Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#zt_msg_rcode_notauth DataThunderDdosDnsCacheServerStats#zt_msg_rcode_notauth}
  */
  readonly ztMsgRcodeNotauth?: number;
  /**
  * Zone Transfer Ongoing tasks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#zt_ongoing_tasks DataThunderDdosDnsCacheServerStats#zt_ongoing_tasks}
  */
  readonly ztOngoingTasks?: number;
  /**
  * Zone Transfer Records Processed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#zt_records_processed DataThunderDdosDnsCacheServerStats#zt_records_processed}
  */
  readonly ztRecordsProcessed?: number;
  /**
  * Zone Transfer Serial Number Check Started
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#zt_serial_num_check_attempts DataThunderDdosDnsCacheServerStats#zt_serial_num_check_attempts}
  */
  readonly ztSerialNumCheckAttempts?: number;
  /**
  * Zone Transfer Task No Route Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#zt_task_no_route_retry DataThunderDdosDnsCacheServerStats#zt_task_no_route_retry}
  */
  readonly ztTaskNoRouteRetry?: number;
  /**
  * Zone Transfer TCP Connect Server Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#zt_tcp_conn_connect_server_fail DataThunderDdosDnsCacheServerStats#zt_tcp_conn_connect_server_fail}
  */
  readonly ztTcpConnConnectServerFail?: number;
  /**
  * Zone Transfer TCP RST / FIN Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#zt_tcp_conn_rst DataThunderDdosDnsCacheServerStats#zt_tcp_conn_rst}
  */
  readonly ztTcpConnRst?: number;
  /**
  * Zone Transfer Total Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#zt_total_fail DataThunderDdosDnsCacheServerStats#zt_total_fail}
  */
  readonly ztTotalFail?: number;
}

export function dataThunderDdosDnsCacheServerStatsStatsToTerraform(struct?: DataThunderDdosDnsCacheServerStatsStatsOutputReference | DataThunderDdosDnsCacheServerStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insert_fail_all: cdktf.numberToTerraform(struct!.insertFailAll),
    insert_success: cdktf.numberToTerraform(struct!.insertSuccess),
    insert_total: cdktf.numberToTerraform(struct!.insertTotal),
    lookup_any_type_query_action_drop: cdktf.numberToTerraform(struct!.lookupAnyTypeQueryActionDrop),
    lookup_any_type_query_action_refused: cdktf.numberToTerraform(struct!.lookupAnyTypeQueryActionRefused),
    lookup_any_type_query_action_resp_empty: cdktf.numberToTerraform(struct!.lookupAnyTypeQueryActionRespEmpty),
    lookup_default_action_drop: cdktf.numberToTerraform(struct!.lookupDefaultActionDrop),
    lookup_default_action_forward: cdktf.numberToTerraform(struct!.lookupDefaultActionForward),
    lookup_deleg_resp: cdktf.numberToTerraform(struct!.lookupDelegResp),
    lookup_dnstcp_rcvd: cdktf.numberToTerraform(struct!.lookupDnstcpRcvd),
    lookup_dnsudp_rcvd: cdktf.numberToTerraform(struct!.lookupDnsudpRcvd),
    lookup_edns_bad_version_resp: cdktf.numberToTerraform(struct!.lookupEdnsBadVersionResp),
    lookup_empty_resp: cdktf.numberToTerraform(struct!.lookupEmptyResp),
    lookup_full_matched: cdktf.numberToTerraform(struct!.lookupFullMatched),
    lookup_fwd_server: cdktf.numberToTerraform(struct!.lookupFwdServer),
    lookup_fwd_shard: cdktf.numberToTerraform(struct!.lookupFwdShard),
    lookup_incomp_zone: cdktf.numberToTerraform(struct!.lookupIncompZone),
    lookup_invalid_domain: cdktf.numberToTerraform(struct!.lookupInvalidDomain),
    lookup_manual_override_action_drop: cdktf.numberToTerraform(struct!.lookupManualOverrideActionDrop),
    lookup_manual_override_action_forward: cdktf.numberToTerraform(struct!.lookupManualOverrideActionForward),
    lookup_manual_override_action_serve: cdktf.numberToTerraform(struct!.lookupManualOverrideActionServe),
    lookup_non_auth_zone_query_action_drop: cdktf.numberToTerraform(struct!.lookupNonAuthZoneQueryActionDrop),
    lookup_non_auth_zone_query_action_forward: cdktf.numberToTerraform(struct!.lookupNonAuthZoneQueryActionForward),
    lookup_non_auth_zone_query_action_resp_refused: cdktf.numberToTerraform(struct!.lookupNonAuthZoneQueryActionRespRefused),
    lookup_nxdomain_resp: cdktf.numberToTerraform(struct!.lookupNxdomainResp),
    lookup_opcode_notimpl_resp: cdktf.numberToTerraform(struct!.lookupOpcodeNotimplResp),
    lookup_refuse_resp: cdktf.numberToTerraform(struct!.lookupRefuseResp),
    lookup_undefined_rtype: cdktf.numberToTerraform(struct!.lookupUndefinedRtype),
    lookup_unexp_err: cdktf.numberToTerraform(struct!.lookupUnexpErr),
    shard_filter_match: cdktf.numberToTerraform(struct!.shardFilterMatch),
    zt_axfr_attempts: cdktf.numberToTerraform(struct!.ztAxfrAttempts),
    zt_completed_no_update: cdktf.numberToTerraform(struct!.ztCompletedNoUpdate),
    zt_completed_ok: cdktf.numberToTerraform(struct!.ztCompletedOk),
    zt_dns_process_err: cdktf.numberToTerraform(struct!.ztDnsProcessErr),
    zt_msg_rcode_notauth: cdktf.numberToTerraform(struct!.ztMsgRcodeNotauth),
    zt_ongoing_tasks: cdktf.numberToTerraform(struct!.ztOngoingTasks),
    zt_records_processed: cdktf.numberToTerraform(struct!.ztRecordsProcessed),
    zt_serial_num_check_attempts: cdktf.numberToTerraform(struct!.ztSerialNumCheckAttempts),
    zt_task_no_route_retry: cdktf.numberToTerraform(struct!.ztTaskNoRouteRetry),
    zt_tcp_conn_connect_server_fail: cdktf.numberToTerraform(struct!.ztTcpConnConnectServerFail),
    zt_tcp_conn_rst: cdktf.numberToTerraform(struct!.ztTcpConnRst),
    zt_total_fail: cdktf.numberToTerraform(struct!.ztTotalFail),
  }
}


export function dataThunderDdosDnsCacheServerStatsStatsToHclTerraform(struct?: DataThunderDdosDnsCacheServerStatsStatsOutputReference | DataThunderDdosDnsCacheServerStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insert_fail_all: {
      value: cdktf.numberToHclTerraform(struct!.insertFailAll),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insert_success: {
      value: cdktf.numberToHclTerraform(struct!.insertSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insert_total: {
      value: cdktf.numberToHclTerraform(struct!.insertTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lookup_any_type_query_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.lookupAnyTypeQueryActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lookup_any_type_query_action_refused: {
      value: cdktf.numberToHclTerraform(struct!.lookupAnyTypeQueryActionRefused),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lookup_any_type_query_action_resp_empty: {
      value: cdktf.numberToHclTerraform(struct!.lookupAnyTypeQueryActionRespEmpty),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lookup_default_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.lookupDefaultActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lookup_default_action_forward: {
      value: cdktf.numberToHclTerraform(struct!.lookupDefaultActionForward),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lookup_deleg_resp: {
      value: cdktf.numberToHclTerraform(struct!.lookupDelegResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lookup_dnstcp_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.lookupDnstcpRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lookup_dnsudp_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.lookupDnsudpRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lookup_edns_bad_version_resp: {
      value: cdktf.numberToHclTerraform(struct!.lookupEdnsBadVersionResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lookup_empty_resp: {
      value: cdktf.numberToHclTerraform(struct!.lookupEmptyResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lookup_full_matched: {
      value: cdktf.numberToHclTerraform(struct!.lookupFullMatched),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lookup_fwd_server: {
      value: cdktf.numberToHclTerraform(struct!.lookupFwdServer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lookup_fwd_shard: {
      value: cdktf.numberToHclTerraform(struct!.lookupFwdShard),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lookup_incomp_zone: {
      value: cdktf.numberToHclTerraform(struct!.lookupIncompZone),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lookup_invalid_domain: {
      value: cdktf.numberToHclTerraform(struct!.lookupInvalidDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lookup_manual_override_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.lookupManualOverrideActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lookup_manual_override_action_forward: {
      value: cdktf.numberToHclTerraform(struct!.lookupManualOverrideActionForward),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lookup_manual_override_action_serve: {
      value: cdktf.numberToHclTerraform(struct!.lookupManualOverrideActionServe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lookup_non_auth_zone_query_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.lookupNonAuthZoneQueryActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lookup_non_auth_zone_query_action_forward: {
      value: cdktf.numberToHclTerraform(struct!.lookupNonAuthZoneQueryActionForward),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lookup_non_auth_zone_query_action_resp_refused: {
      value: cdktf.numberToHclTerraform(struct!.lookupNonAuthZoneQueryActionRespRefused),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lookup_nxdomain_resp: {
      value: cdktf.numberToHclTerraform(struct!.lookupNxdomainResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lookup_opcode_notimpl_resp: {
      value: cdktf.numberToHclTerraform(struct!.lookupOpcodeNotimplResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lookup_refuse_resp: {
      value: cdktf.numberToHclTerraform(struct!.lookupRefuseResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lookup_undefined_rtype: {
      value: cdktf.numberToHclTerraform(struct!.lookupUndefinedRtype),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lookup_unexp_err: {
      value: cdktf.numberToHclTerraform(struct!.lookupUnexpErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shard_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.shardFilterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zt_axfr_attempts: {
      value: cdktf.numberToHclTerraform(struct!.ztAxfrAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zt_completed_no_update: {
      value: cdktf.numberToHclTerraform(struct!.ztCompletedNoUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zt_completed_ok: {
      value: cdktf.numberToHclTerraform(struct!.ztCompletedOk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zt_dns_process_err: {
      value: cdktf.numberToHclTerraform(struct!.ztDnsProcessErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zt_msg_rcode_notauth: {
      value: cdktf.numberToHclTerraform(struct!.ztMsgRcodeNotauth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zt_ongoing_tasks: {
      value: cdktf.numberToHclTerraform(struct!.ztOngoingTasks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zt_records_processed: {
      value: cdktf.numberToHclTerraform(struct!.ztRecordsProcessed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zt_serial_num_check_attempts: {
      value: cdktf.numberToHclTerraform(struct!.ztSerialNumCheckAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zt_task_no_route_retry: {
      value: cdktf.numberToHclTerraform(struct!.ztTaskNoRouteRetry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zt_tcp_conn_connect_server_fail: {
      value: cdktf.numberToHclTerraform(struct!.ztTcpConnConnectServerFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zt_tcp_conn_rst: {
      value: cdktf.numberToHclTerraform(struct!.ztTcpConnRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zt_total_fail: {
      value: cdktf.numberToHclTerraform(struct!.ztTotalFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDnsCacheServerStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDnsCacheServerStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertFailAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertFailAll = this._insertFailAll;
    }
    if (this._insertSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertSuccess = this._insertSuccess;
    }
    if (this._insertTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertTotal = this._insertTotal;
    }
    if (this._lookupAnyTypeQueryActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupAnyTypeQueryActionDrop = this._lookupAnyTypeQueryActionDrop;
    }
    if (this._lookupAnyTypeQueryActionRefused !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupAnyTypeQueryActionRefused = this._lookupAnyTypeQueryActionRefused;
    }
    if (this._lookupAnyTypeQueryActionRespEmpty !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupAnyTypeQueryActionRespEmpty = this._lookupAnyTypeQueryActionRespEmpty;
    }
    if (this._lookupDefaultActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupDefaultActionDrop = this._lookupDefaultActionDrop;
    }
    if (this._lookupDefaultActionForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupDefaultActionForward = this._lookupDefaultActionForward;
    }
    if (this._lookupDelegResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupDelegResp = this._lookupDelegResp;
    }
    if (this._lookupDnstcpRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupDnstcpRcvd = this._lookupDnstcpRcvd;
    }
    if (this._lookupDnsudpRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupDnsudpRcvd = this._lookupDnsudpRcvd;
    }
    if (this._lookupEdnsBadVersionResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupEdnsBadVersionResp = this._lookupEdnsBadVersionResp;
    }
    if (this._lookupEmptyResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupEmptyResp = this._lookupEmptyResp;
    }
    if (this._lookupFullMatched !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupFullMatched = this._lookupFullMatched;
    }
    if (this._lookupFwdServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupFwdServer = this._lookupFwdServer;
    }
    if (this._lookupFwdShard !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupFwdShard = this._lookupFwdShard;
    }
    if (this._lookupIncompZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupIncompZone = this._lookupIncompZone;
    }
    if (this._lookupInvalidDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupInvalidDomain = this._lookupInvalidDomain;
    }
    if (this._lookupManualOverrideActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupManualOverrideActionDrop = this._lookupManualOverrideActionDrop;
    }
    if (this._lookupManualOverrideActionForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupManualOverrideActionForward = this._lookupManualOverrideActionForward;
    }
    if (this._lookupManualOverrideActionServe !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupManualOverrideActionServe = this._lookupManualOverrideActionServe;
    }
    if (this._lookupNonAuthZoneQueryActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupNonAuthZoneQueryActionDrop = this._lookupNonAuthZoneQueryActionDrop;
    }
    if (this._lookupNonAuthZoneQueryActionForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupNonAuthZoneQueryActionForward = this._lookupNonAuthZoneQueryActionForward;
    }
    if (this._lookupNonAuthZoneQueryActionRespRefused !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupNonAuthZoneQueryActionRespRefused = this._lookupNonAuthZoneQueryActionRespRefused;
    }
    if (this._lookupNxdomainResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupNxdomainResp = this._lookupNxdomainResp;
    }
    if (this._lookupOpcodeNotimplResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupOpcodeNotimplResp = this._lookupOpcodeNotimplResp;
    }
    if (this._lookupRefuseResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupRefuseResp = this._lookupRefuseResp;
    }
    if (this._lookupUndefinedRtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupUndefinedRtype = this._lookupUndefinedRtype;
    }
    if (this._lookupUnexpErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookupUnexpErr = this._lookupUnexpErr;
    }
    if (this._shardFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardFilterMatch = this._shardFilterMatch;
    }
    if (this._ztAxfrAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.ztAxfrAttempts = this._ztAxfrAttempts;
    }
    if (this._ztCompletedNoUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.ztCompletedNoUpdate = this._ztCompletedNoUpdate;
    }
    if (this._ztCompletedOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.ztCompletedOk = this._ztCompletedOk;
    }
    if (this._ztDnsProcessErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ztDnsProcessErr = this._ztDnsProcessErr;
    }
    if (this._ztMsgRcodeNotauth !== undefined) {
      hasAnyValues = true;
      internalValueResult.ztMsgRcodeNotauth = this._ztMsgRcodeNotauth;
    }
    if (this._ztOngoingTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.ztOngoingTasks = this._ztOngoingTasks;
    }
    if (this._ztRecordsProcessed !== undefined) {
      hasAnyValues = true;
      internalValueResult.ztRecordsProcessed = this._ztRecordsProcessed;
    }
    if (this._ztSerialNumCheckAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.ztSerialNumCheckAttempts = this._ztSerialNumCheckAttempts;
    }
    if (this._ztTaskNoRouteRetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.ztTaskNoRouteRetry = this._ztTaskNoRouteRetry;
    }
    if (this._ztTcpConnConnectServerFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.ztTcpConnConnectServerFail = this._ztTcpConnConnectServerFail;
    }
    if (this._ztTcpConnRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.ztTcpConnRst = this._ztTcpConnRst;
    }
    if (this._ztTotalFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.ztTotalFail = this._ztTotalFail;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDnsCacheServerStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._insertFailAll = undefined;
      this._insertSuccess = undefined;
      this._insertTotal = undefined;
      this._lookupAnyTypeQueryActionDrop = undefined;
      this._lookupAnyTypeQueryActionRefused = undefined;
      this._lookupAnyTypeQueryActionRespEmpty = undefined;
      this._lookupDefaultActionDrop = undefined;
      this._lookupDefaultActionForward = undefined;
      this._lookupDelegResp = undefined;
      this._lookupDnstcpRcvd = undefined;
      this._lookupDnsudpRcvd = undefined;
      this._lookupEdnsBadVersionResp = undefined;
      this._lookupEmptyResp = undefined;
      this._lookupFullMatched = undefined;
      this._lookupFwdServer = undefined;
      this._lookupFwdShard = undefined;
      this._lookupIncompZone = undefined;
      this._lookupInvalidDomain = undefined;
      this._lookupManualOverrideActionDrop = undefined;
      this._lookupManualOverrideActionForward = undefined;
      this._lookupManualOverrideActionServe = undefined;
      this._lookupNonAuthZoneQueryActionDrop = undefined;
      this._lookupNonAuthZoneQueryActionForward = undefined;
      this._lookupNonAuthZoneQueryActionRespRefused = undefined;
      this._lookupNxdomainResp = undefined;
      this._lookupOpcodeNotimplResp = undefined;
      this._lookupRefuseResp = undefined;
      this._lookupUndefinedRtype = undefined;
      this._lookupUnexpErr = undefined;
      this._shardFilterMatch = undefined;
      this._ztAxfrAttempts = undefined;
      this._ztCompletedNoUpdate = undefined;
      this._ztCompletedOk = undefined;
      this._ztDnsProcessErr = undefined;
      this._ztMsgRcodeNotauth = undefined;
      this._ztOngoingTasks = undefined;
      this._ztRecordsProcessed = undefined;
      this._ztSerialNumCheckAttempts = undefined;
      this._ztTaskNoRouteRetry = undefined;
      this._ztTcpConnConnectServerFail = undefined;
      this._ztTcpConnRst = undefined;
      this._ztTotalFail = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._insertFailAll = value.insertFailAll;
      this._insertSuccess = value.insertSuccess;
      this._insertTotal = value.insertTotal;
      this._lookupAnyTypeQueryActionDrop = value.lookupAnyTypeQueryActionDrop;
      this._lookupAnyTypeQueryActionRefused = value.lookupAnyTypeQueryActionRefused;
      this._lookupAnyTypeQueryActionRespEmpty = value.lookupAnyTypeQueryActionRespEmpty;
      this._lookupDefaultActionDrop = value.lookupDefaultActionDrop;
      this._lookupDefaultActionForward = value.lookupDefaultActionForward;
      this._lookupDelegResp = value.lookupDelegResp;
      this._lookupDnstcpRcvd = value.lookupDnstcpRcvd;
      this._lookupDnsudpRcvd = value.lookupDnsudpRcvd;
      this._lookupEdnsBadVersionResp = value.lookupEdnsBadVersionResp;
      this._lookupEmptyResp = value.lookupEmptyResp;
      this._lookupFullMatched = value.lookupFullMatched;
      this._lookupFwdServer = value.lookupFwdServer;
      this._lookupFwdShard = value.lookupFwdShard;
      this._lookupIncompZone = value.lookupIncompZone;
      this._lookupInvalidDomain = value.lookupInvalidDomain;
      this._lookupManualOverrideActionDrop = value.lookupManualOverrideActionDrop;
      this._lookupManualOverrideActionForward = value.lookupManualOverrideActionForward;
      this._lookupManualOverrideActionServe = value.lookupManualOverrideActionServe;
      this._lookupNonAuthZoneQueryActionDrop = value.lookupNonAuthZoneQueryActionDrop;
      this._lookupNonAuthZoneQueryActionForward = value.lookupNonAuthZoneQueryActionForward;
      this._lookupNonAuthZoneQueryActionRespRefused = value.lookupNonAuthZoneQueryActionRespRefused;
      this._lookupNxdomainResp = value.lookupNxdomainResp;
      this._lookupOpcodeNotimplResp = value.lookupOpcodeNotimplResp;
      this._lookupRefuseResp = value.lookupRefuseResp;
      this._lookupUndefinedRtype = value.lookupUndefinedRtype;
      this._lookupUnexpErr = value.lookupUnexpErr;
      this._shardFilterMatch = value.shardFilterMatch;
      this._ztAxfrAttempts = value.ztAxfrAttempts;
      this._ztCompletedNoUpdate = value.ztCompletedNoUpdate;
      this._ztCompletedOk = value.ztCompletedOk;
      this._ztDnsProcessErr = value.ztDnsProcessErr;
      this._ztMsgRcodeNotauth = value.ztMsgRcodeNotauth;
      this._ztOngoingTasks = value.ztOngoingTasks;
      this._ztRecordsProcessed = value.ztRecordsProcessed;
      this._ztSerialNumCheckAttempts = value.ztSerialNumCheckAttempts;
      this._ztTaskNoRouteRetry = value.ztTaskNoRouteRetry;
      this._ztTcpConnConnectServerFail = value.ztTcpConnConnectServerFail;
      this._ztTcpConnRst = value.ztTcpConnRst;
      this._ztTotalFail = value.ztTotalFail;
    }
  }

  // insert_fail_all - computed: false, optional: true, required: false
  private _insertFailAll?: number; 
  public get insertFailAll() {
    return this.getNumberAttribute('insert_fail_all');
  }
  public set insertFailAll(value: number) {
    this._insertFailAll = value;
  }
  public resetInsertFailAll() {
    this._insertFailAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertFailAllInput() {
    return this._insertFailAll;
  }

  // insert_success - computed: false, optional: true, required: false
  private _insertSuccess?: number; 
  public get insertSuccess() {
    return this.getNumberAttribute('insert_success');
  }
  public set insertSuccess(value: number) {
    this._insertSuccess = value;
  }
  public resetInsertSuccess() {
    this._insertSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertSuccessInput() {
    return this._insertSuccess;
  }

  // insert_total - computed: false, optional: true, required: false
  private _insertTotal?: number; 
  public get insertTotal() {
    return this.getNumberAttribute('insert_total');
  }
  public set insertTotal(value: number) {
    this._insertTotal = value;
  }
  public resetInsertTotal() {
    this._insertTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertTotalInput() {
    return this._insertTotal;
  }

  // lookup_any_type_query_action_drop - computed: false, optional: true, required: false
  private _lookupAnyTypeQueryActionDrop?: number; 
  public get lookupAnyTypeQueryActionDrop() {
    return this.getNumberAttribute('lookup_any_type_query_action_drop');
  }
  public set lookupAnyTypeQueryActionDrop(value: number) {
    this._lookupAnyTypeQueryActionDrop = value;
  }
  public resetLookupAnyTypeQueryActionDrop() {
    this._lookupAnyTypeQueryActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupAnyTypeQueryActionDropInput() {
    return this._lookupAnyTypeQueryActionDrop;
  }

  // lookup_any_type_query_action_refused - computed: false, optional: true, required: false
  private _lookupAnyTypeQueryActionRefused?: number; 
  public get lookupAnyTypeQueryActionRefused() {
    return this.getNumberAttribute('lookup_any_type_query_action_refused');
  }
  public set lookupAnyTypeQueryActionRefused(value: number) {
    this._lookupAnyTypeQueryActionRefused = value;
  }
  public resetLookupAnyTypeQueryActionRefused() {
    this._lookupAnyTypeQueryActionRefused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupAnyTypeQueryActionRefusedInput() {
    return this._lookupAnyTypeQueryActionRefused;
  }

  // lookup_any_type_query_action_resp_empty - computed: false, optional: true, required: false
  private _lookupAnyTypeQueryActionRespEmpty?: number; 
  public get lookupAnyTypeQueryActionRespEmpty() {
    return this.getNumberAttribute('lookup_any_type_query_action_resp_empty');
  }
  public set lookupAnyTypeQueryActionRespEmpty(value: number) {
    this._lookupAnyTypeQueryActionRespEmpty = value;
  }
  public resetLookupAnyTypeQueryActionRespEmpty() {
    this._lookupAnyTypeQueryActionRespEmpty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupAnyTypeQueryActionRespEmptyInput() {
    return this._lookupAnyTypeQueryActionRespEmpty;
  }

  // lookup_default_action_drop - computed: false, optional: true, required: false
  private _lookupDefaultActionDrop?: number; 
  public get lookupDefaultActionDrop() {
    return this.getNumberAttribute('lookup_default_action_drop');
  }
  public set lookupDefaultActionDrop(value: number) {
    this._lookupDefaultActionDrop = value;
  }
  public resetLookupDefaultActionDrop() {
    this._lookupDefaultActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupDefaultActionDropInput() {
    return this._lookupDefaultActionDrop;
  }

  // lookup_default_action_forward - computed: false, optional: true, required: false
  private _lookupDefaultActionForward?: number; 
  public get lookupDefaultActionForward() {
    return this.getNumberAttribute('lookup_default_action_forward');
  }
  public set lookupDefaultActionForward(value: number) {
    this._lookupDefaultActionForward = value;
  }
  public resetLookupDefaultActionForward() {
    this._lookupDefaultActionForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupDefaultActionForwardInput() {
    return this._lookupDefaultActionForward;
  }

  // lookup_deleg_resp - computed: false, optional: true, required: false
  private _lookupDelegResp?: number; 
  public get lookupDelegResp() {
    return this.getNumberAttribute('lookup_deleg_resp');
  }
  public set lookupDelegResp(value: number) {
    this._lookupDelegResp = value;
  }
  public resetLookupDelegResp() {
    this._lookupDelegResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupDelegRespInput() {
    return this._lookupDelegResp;
  }

  // lookup_dnstcp_rcvd - computed: false, optional: true, required: false
  private _lookupDnstcpRcvd?: number; 
  public get lookupDnstcpRcvd() {
    return this.getNumberAttribute('lookup_dnstcp_rcvd');
  }
  public set lookupDnstcpRcvd(value: number) {
    this._lookupDnstcpRcvd = value;
  }
  public resetLookupDnstcpRcvd() {
    this._lookupDnstcpRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupDnstcpRcvdInput() {
    return this._lookupDnstcpRcvd;
  }

  // lookup_dnsudp_rcvd - computed: false, optional: true, required: false
  private _lookupDnsudpRcvd?: number; 
  public get lookupDnsudpRcvd() {
    return this.getNumberAttribute('lookup_dnsudp_rcvd');
  }
  public set lookupDnsudpRcvd(value: number) {
    this._lookupDnsudpRcvd = value;
  }
  public resetLookupDnsudpRcvd() {
    this._lookupDnsudpRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupDnsudpRcvdInput() {
    return this._lookupDnsudpRcvd;
  }

  // lookup_edns_bad_version_resp - computed: false, optional: true, required: false
  private _lookupEdnsBadVersionResp?: number; 
  public get lookupEdnsBadVersionResp() {
    return this.getNumberAttribute('lookup_edns_bad_version_resp');
  }
  public set lookupEdnsBadVersionResp(value: number) {
    this._lookupEdnsBadVersionResp = value;
  }
  public resetLookupEdnsBadVersionResp() {
    this._lookupEdnsBadVersionResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupEdnsBadVersionRespInput() {
    return this._lookupEdnsBadVersionResp;
  }

  // lookup_empty_resp - computed: false, optional: true, required: false
  private _lookupEmptyResp?: number; 
  public get lookupEmptyResp() {
    return this.getNumberAttribute('lookup_empty_resp');
  }
  public set lookupEmptyResp(value: number) {
    this._lookupEmptyResp = value;
  }
  public resetLookupEmptyResp() {
    this._lookupEmptyResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupEmptyRespInput() {
    return this._lookupEmptyResp;
  }

  // lookup_full_matched - computed: false, optional: true, required: false
  private _lookupFullMatched?: number; 
  public get lookupFullMatched() {
    return this.getNumberAttribute('lookup_full_matched');
  }
  public set lookupFullMatched(value: number) {
    this._lookupFullMatched = value;
  }
  public resetLookupFullMatched() {
    this._lookupFullMatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupFullMatchedInput() {
    return this._lookupFullMatched;
  }

  // lookup_fwd_server - computed: false, optional: true, required: false
  private _lookupFwdServer?: number; 
  public get lookupFwdServer() {
    return this.getNumberAttribute('lookup_fwd_server');
  }
  public set lookupFwdServer(value: number) {
    this._lookupFwdServer = value;
  }
  public resetLookupFwdServer() {
    this._lookupFwdServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupFwdServerInput() {
    return this._lookupFwdServer;
  }

  // lookup_fwd_shard - computed: false, optional: true, required: false
  private _lookupFwdShard?: number; 
  public get lookupFwdShard() {
    return this.getNumberAttribute('lookup_fwd_shard');
  }
  public set lookupFwdShard(value: number) {
    this._lookupFwdShard = value;
  }
  public resetLookupFwdShard() {
    this._lookupFwdShard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupFwdShardInput() {
    return this._lookupFwdShard;
  }

  // lookup_incomp_zone - computed: false, optional: true, required: false
  private _lookupIncompZone?: number; 
  public get lookupIncompZone() {
    return this.getNumberAttribute('lookup_incomp_zone');
  }
  public set lookupIncompZone(value: number) {
    this._lookupIncompZone = value;
  }
  public resetLookupIncompZone() {
    this._lookupIncompZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupIncompZoneInput() {
    return this._lookupIncompZone;
  }

  // lookup_invalid_domain - computed: false, optional: true, required: false
  private _lookupInvalidDomain?: number; 
  public get lookupInvalidDomain() {
    return this.getNumberAttribute('lookup_invalid_domain');
  }
  public set lookupInvalidDomain(value: number) {
    this._lookupInvalidDomain = value;
  }
  public resetLookupInvalidDomain() {
    this._lookupInvalidDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupInvalidDomainInput() {
    return this._lookupInvalidDomain;
  }

  // lookup_manual_override_action_drop - computed: false, optional: true, required: false
  private _lookupManualOverrideActionDrop?: number; 
  public get lookupManualOverrideActionDrop() {
    return this.getNumberAttribute('lookup_manual_override_action_drop');
  }
  public set lookupManualOverrideActionDrop(value: number) {
    this._lookupManualOverrideActionDrop = value;
  }
  public resetLookupManualOverrideActionDrop() {
    this._lookupManualOverrideActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupManualOverrideActionDropInput() {
    return this._lookupManualOverrideActionDrop;
  }

  // lookup_manual_override_action_forward - computed: false, optional: true, required: false
  private _lookupManualOverrideActionForward?: number; 
  public get lookupManualOverrideActionForward() {
    return this.getNumberAttribute('lookup_manual_override_action_forward');
  }
  public set lookupManualOverrideActionForward(value: number) {
    this._lookupManualOverrideActionForward = value;
  }
  public resetLookupManualOverrideActionForward() {
    this._lookupManualOverrideActionForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupManualOverrideActionForwardInput() {
    return this._lookupManualOverrideActionForward;
  }

  // lookup_manual_override_action_serve - computed: false, optional: true, required: false
  private _lookupManualOverrideActionServe?: number; 
  public get lookupManualOverrideActionServe() {
    return this.getNumberAttribute('lookup_manual_override_action_serve');
  }
  public set lookupManualOverrideActionServe(value: number) {
    this._lookupManualOverrideActionServe = value;
  }
  public resetLookupManualOverrideActionServe() {
    this._lookupManualOverrideActionServe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupManualOverrideActionServeInput() {
    return this._lookupManualOverrideActionServe;
  }

  // lookup_non_auth_zone_query_action_drop - computed: false, optional: true, required: false
  private _lookupNonAuthZoneQueryActionDrop?: number; 
  public get lookupNonAuthZoneQueryActionDrop() {
    return this.getNumberAttribute('lookup_non_auth_zone_query_action_drop');
  }
  public set lookupNonAuthZoneQueryActionDrop(value: number) {
    this._lookupNonAuthZoneQueryActionDrop = value;
  }
  public resetLookupNonAuthZoneQueryActionDrop() {
    this._lookupNonAuthZoneQueryActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupNonAuthZoneQueryActionDropInput() {
    return this._lookupNonAuthZoneQueryActionDrop;
  }

  // lookup_non_auth_zone_query_action_forward - computed: false, optional: true, required: false
  private _lookupNonAuthZoneQueryActionForward?: number; 
  public get lookupNonAuthZoneQueryActionForward() {
    return this.getNumberAttribute('lookup_non_auth_zone_query_action_forward');
  }
  public set lookupNonAuthZoneQueryActionForward(value: number) {
    this._lookupNonAuthZoneQueryActionForward = value;
  }
  public resetLookupNonAuthZoneQueryActionForward() {
    this._lookupNonAuthZoneQueryActionForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupNonAuthZoneQueryActionForwardInput() {
    return this._lookupNonAuthZoneQueryActionForward;
  }

  // lookup_non_auth_zone_query_action_resp_refused - computed: false, optional: true, required: false
  private _lookupNonAuthZoneQueryActionRespRefused?: number; 
  public get lookupNonAuthZoneQueryActionRespRefused() {
    return this.getNumberAttribute('lookup_non_auth_zone_query_action_resp_refused');
  }
  public set lookupNonAuthZoneQueryActionRespRefused(value: number) {
    this._lookupNonAuthZoneQueryActionRespRefused = value;
  }
  public resetLookupNonAuthZoneQueryActionRespRefused() {
    this._lookupNonAuthZoneQueryActionRespRefused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupNonAuthZoneQueryActionRespRefusedInput() {
    return this._lookupNonAuthZoneQueryActionRespRefused;
  }

  // lookup_nxdomain_resp - computed: false, optional: true, required: false
  private _lookupNxdomainResp?: number; 
  public get lookupNxdomainResp() {
    return this.getNumberAttribute('lookup_nxdomain_resp');
  }
  public set lookupNxdomainResp(value: number) {
    this._lookupNxdomainResp = value;
  }
  public resetLookupNxdomainResp() {
    this._lookupNxdomainResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupNxdomainRespInput() {
    return this._lookupNxdomainResp;
  }

  // lookup_opcode_notimpl_resp - computed: false, optional: true, required: false
  private _lookupOpcodeNotimplResp?: number; 
  public get lookupOpcodeNotimplResp() {
    return this.getNumberAttribute('lookup_opcode_notimpl_resp');
  }
  public set lookupOpcodeNotimplResp(value: number) {
    this._lookupOpcodeNotimplResp = value;
  }
  public resetLookupOpcodeNotimplResp() {
    this._lookupOpcodeNotimplResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupOpcodeNotimplRespInput() {
    return this._lookupOpcodeNotimplResp;
  }

  // lookup_refuse_resp - computed: false, optional: true, required: false
  private _lookupRefuseResp?: number; 
  public get lookupRefuseResp() {
    return this.getNumberAttribute('lookup_refuse_resp');
  }
  public set lookupRefuseResp(value: number) {
    this._lookupRefuseResp = value;
  }
  public resetLookupRefuseResp() {
    this._lookupRefuseResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupRefuseRespInput() {
    return this._lookupRefuseResp;
  }

  // lookup_undefined_rtype - computed: false, optional: true, required: false
  private _lookupUndefinedRtype?: number; 
  public get lookupUndefinedRtype() {
    return this.getNumberAttribute('lookup_undefined_rtype');
  }
  public set lookupUndefinedRtype(value: number) {
    this._lookupUndefinedRtype = value;
  }
  public resetLookupUndefinedRtype() {
    this._lookupUndefinedRtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupUndefinedRtypeInput() {
    return this._lookupUndefinedRtype;
  }

  // lookup_unexp_err - computed: false, optional: true, required: false
  private _lookupUnexpErr?: number; 
  public get lookupUnexpErr() {
    return this.getNumberAttribute('lookup_unexp_err');
  }
  public set lookupUnexpErr(value: number) {
    this._lookupUnexpErr = value;
  }
  public resetLookupUnexpErr() {
    this._lookupUnexpErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupUnexpErrInput() {
    return this._lookupUnexpErr;
  }

  // shard_filter_match - computed: false, optional: true, required: false
  private _shardFilterMatch?: number; 
  public get shardFilterMatch() {
    return this.getNumberAttribute('shard_filter_match');
  }
  public set shardFilterMatch(value: number) {
    this._shardFilterMatch = value;
  }
  public resetShardFilterMatch() {
    this._shardFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardFilterMatchInput() {
    return this._shardFilterMatch;
  }

  // zt_axfr_attempts - computed: false, optional: true, required: false
  private _ztAxfrAttempts?: number; 
  public get ztAxfrAttempts() {
    return this.getNumberAttribute('zt_axfr_attempts');
  }
  public set ztAxfrAttempts(value: number) {
    this._ztAxfrAttempts = value;
  }
  public resetZtAxfrAttempts() {
    this._ztAxfrAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztAxfrAttemptsInput() {
    return this._ztAxfrAttempts;
  }

  // zt_completed_no_update - computed: false, optional: true, required: false
  private _ztCompletedNoUpdate?: number; 
  public get ztCompletedNoUpdate() {
    return this.getNumberAttribute('zt_completed_no_update');
  }
  public set ztCompletedNoUpdate(value: number) {
    this._ztCompletedNoUpdate = value;
  }
  public resetZtCompletedNoUpdate() {
    this._ztCompletedNoUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztCompletedNoUpdateInput() {
    return this._ztCompletedNoUpdate;
  }

  // zt_completed_ok - computed: false, optional: true, required: false
  private _ztCompletedOk?: number; 
  public get ztCompletedOk() {
    return this.getNumberAttribute('zt_completed_ok');
  }
  public set ztCompletedOk(value: number) {
    this._ztCompletedOk = value;
  }
  public resetZtCompletedOk() {
    this._ztCompletedOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztCompletedOkInput() {
    return this._ztCompletedOk;
  }

  // zt_dns_process_err - computed: false, optional: true, required: false
  private _ztDnsProcessErr?: number; 
  public get ztDnsProcessErr() {
    return this.getNumberAttribute('zt_dns_process_err');
  }
  public set ztDnsProcessErr(value: number) {
    this._ztDnsProcessErr = value;
  }
  public resetZtDnsProcessErr() {
    this._ztDnsProcessErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztDnsProcessErrInput() {
    return this._ztDnsProcessErr;
  }

  // zt_msg_rcode_notauth - computed: false, optional: true, required: false
  private _ztMsgRcodeNotauth?: number; 
  public get ztMsgRcodeNotauth() {
    return this.getNumberAttribute('zt_msg_rcode_notauth');
  }
  public set ztMsgRcodeNotauth(value: number) {
    this._ztMsgRcodeNotauth = value;
  }
  public resetZtMsgRcodeNotauth() {
    this._ztMsgRcodeNotauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztMsgRcodeNotauthInput() {
    return this._ztMsgRcodeNotauth;
  }

  // zt_ongoing_tasks - computed: false, optional: true, required: false
  private _ztOngoingTasks?: number; 
  public get ztOngoingTasks() {
    return this.getNumberAttribute('zt_ongoing_tasks');
  }
  public set ztOngoingTasks(value: number) {
    this._ztOngoingTasks = value;
  }
  public resetZtOngoingTasks() {
    this._ztOngoingTasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztOngoingTasksInput() {
    return this._ztOngoingTasks;
  }

  // zt_records_processed - computed: false, optional: true, required: false
  private _ztRecordsProcessed?: number; 
  public get ztRecordsProcessed() {
    return this.getNumberAttribute('zt_records_processed');
  }
  public set ztRecordsProcessed(value: number) {
    this._ztRecordsProcessed = value;
  }
  public resetZtRecordsProcessed() {
    this._ztRecordsProcessed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztRecordsProcessedInput() {
    return this._ztRecordsProcessed;
  }

  // zt_serial_num_check_attempts - computed: false, optional: true, required: false
  private _ztSerialNumCheckAttempts?: number; 
  public get ztSerialNumCheckAttempts() {
    return this.getNumberAttribute('zt_serial_num_check_attempts');
  }
  public set ztSerialNumCheckAttempts(value: number) {
    this._ztSerialNumCheckAttempts = value;
  }
  public resetZtSerialNumCheckAttempts() {
    this._ztSerialNumCheckAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztSerialNumCheckAttemptsInput() {
    return this._ztSerialNumCheckAttempts;
  }

  // zt_task_no_route_retry - computed: false, optional: true, required: false
  private _ztTaskNoRouteRetry?: number; 
  public get ztTaskNoRouteRetry() {
    return this.getNumberAttribute('zt_task_no_route_retry');
  }
  public set ztTaskNoRouteRetry(value: number) {
    this._ztTaskNoRouteRetry = value;
  }
  public resetZtTaskNoRouteRetry() {
    this._ztTaskNoRouteRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztTaskNoRouteRetryInput() {
    return this._ztTaskNoRouteRetry;
  }

  // zt_tcp_conn_connect_server_fail - computed: false, optional: true, required: false
  private _ztTcpConnConnectServerFail?: number; 
  public get ztTcpConnConnectServerFail() {
    return this.getNumberAttribute('zt_tcp_conn_connect_server_fail');
  }
  public set ztTcpConnConnectServerFail(value: number) {
    this._ztTcpConnConnectServerFail = value;
  }
  public resetZtTcpConnConnectServerFail() {
    this._ztTcpConnConnectServerFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztTcpConnConnectServerFailInput() {
    return this._ztTcpConnConnectServerFail;
  }

  // zt_tcp_conn_rst - computed: false, optional: true, required: false
  private _ztTcpConnRst?: number; 
  public get ztTcpConnRst() {
    return this.getNumberAttribute('zt_tcp_conn_rst');
  }
  public set ztTcpConnRst(value: number) {
    this._ztTcpConnRst = value;
  }
  public resetZtTcpConnRst() {
    this._ztTcpConnRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztTcpConnRstInput() {
    return this._ztTcpConnRst;
  }

  // zt_total_fail - computed: false, optional: true, required: false
  private _ztTotalFail?: number; 
  public get ztTotalFail() {
    return this.getNumberAttribute('zt_total_fail');
  }
  public set ztTotalFail(value: number) {
    this._ztTotalFail = value;
  }
  public resetZtTotalFail() {
    this._ztTotalFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ztTotalFailInput() {
    return this._ztTotalFail;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats thunder_ddos_dns_cache_server_stats}
*/
export class DataThunderDdosDnsCacheServerStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dns_cache_server_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDnsCacheServerStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDnsCacheServerStats to import
  * @param importFromId The id of the existing DataThunderDdosDnsCacheServerStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDnsCacheServerStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dns_cache_server_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dns_cache_server_stats thunder_ddos_dns_cache_server_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDnsCacheServerStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDnsCacheServerStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dns_cache_server_stats',
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
  private _stats = new DataThunderDdosDnsCacheServerStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosDnsCacheServerStatsStats) {
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
      stats: dataThunderDdosDnsCacheServerStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderDdosDnsCacheServerStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDnsCacheServerStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
