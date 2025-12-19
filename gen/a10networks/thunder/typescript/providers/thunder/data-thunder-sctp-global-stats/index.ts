// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSctpGlobalStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#id DataThunderSctpGlobalStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#stats DataThunderSctpGlobalStats#stats}
  */
  readonly stats?: DataThunderSctpGlobalStatsStats;
}
export interface DataThunderSctpGlobalStatsStats {
  /**
  * Bad Alignment Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#bad_alignment_drop DataThunderSctpGlobalStats#bad_alignment_drop}
  */
  readonly badAlignmentDrop?: number;
  /**
  * Bad Checksum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#bad_csum DataThunderSctpGlobalStats#bad_csum}
  */
  readonly badCsum?: number;
  /**
  * Bad Payload Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#bad_payload_drop DataThunderSctpGlobalStats#bad_payload_drop}
  */
  readonly badPayloadDrop?: number;
  /**
  * Configuration Error Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#cfg_err_drop DataThunderSctpGlobalStats#cfg_err_drop}
  */
  readonly cfgErrDrop?: number;
  /**
  * Disallowed Chunk Filtered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#disallowed_chunk_filtered DataThunderSctpGlobalStats#disallowed_chunk_filtered}
  */
  readonly disallowedChunkFiltered?: number;
  /**
  * Disallowed Packet Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#disallowed_pkt_drop DataThunderSctpGlobalStats#disallowed_pkt_drop}
  */
  readonly disallowedPktDrop?: number;
  /**
  * Invalid Fragmented Chunks Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#invalid_frag_chunk_drop DataThunderSctpGlobalStats#invalid_frag_chunk_drop}
  */
  readonly invalidFragChunkDrop?: number;
  /**
  * Maximum Multi-homing IP Addresses Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#max_multi_home_drop DataThunderSctpGlobalStats#max_multi_home_drop}
  */
  readonly maxMultiHomeDrop?: number;
  /**
  * Multi-homing IP Address Not Found Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#multi_home_addr_not_found_drop DataThunderSctpGlobalStats#multi_home_addr_not_found_drop}
  */
  readonly multiHomeAddrNotFoundDrop?: number;
  /**
  * Multi-homing Remove IP Parameter Skip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#multi_home_remove_ip_skip DataThunderSctpGlobalStats#multi_home_remove_ip_skip}
  */
  readonly multiHomeRemoveIpSkip?: number;
  /**
  * Out-of-state Packet Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#oos_pkt_drop DataThunderSctpGlobalStats#oos_pkt_drop}
  */
  readonly oosPktDrop?: number;
  /**
  * Invalid Parameter Length Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#pkt_asconf_param_len_err_drop DataThunderSctpGlobalStats#pkt_asconf_param_len_err_drop}
  */
  readonly pktAsconfParamLenErrDrop?: number;
  /**
  * Invalid Chunk Length Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#pkt_chunk_len_err_drop DataThunderSctpGlobalStats#pkt_chunk_len_err_drop}
  */
  readonly pktChunkLenErrDrop?: number;
  /**
  * Packet Error Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#pkt_err_drop DataThunderSctpGlobalStats#pkt_err_drop}
  */
  readonly pktErrDrop?: number;
  /**
  * Invalid Packet Length Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#pkt_len_err_drop DataThunderSctpGlobalStats#pkt_len_err_drop}
  */
  readonly pktLenErrDrop?: number;
  /**
  * Rate-limit Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#rate_limit_drop DataThunderSctpGlobalStats#rate_limit_drop}
  */
  readonly rateLimitDrop?: number;
  /**
  * Standby Session Create Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sby_session_create_fail DataThunderSctpGlobalStats#sby_session_create_fail}
  */
  readonly sbySessionCreateFail?: number;
  /**
  * Standby Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sby_session_created DataThunderSctpGlobalStats#sby_session_created}
  */
  readonly sbySessionCreated?: number;
  /**
  * Standby Session Update Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sby_session_update_fail DataThunderSctpGlobalStats#sby_session_update_fail}
  */
  readonly sbySessionUpdateFail?: number;
  /**
  * Standby Session Updated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sby_session_updated DataThunderSctpGlobalStats#sby_session_updated}
  */
  readonly sbySessionUpdated?: number;
  /**
  * Static NAT Config Not Found on Standby
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sby_static_nat_cfg_not_found DataThunderSctpGlobalStats#sby_static_nat_cfg_not_found}
  */
  readonly sbyStaticNatCfgNotFound?: number;
  /**
  * SCTP ASCONF process drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_asconf_process_drop DataThunderSctpGlobalStats#sctp_asconf_process_drop}
  */
  readonly sctpAsconfProcessDrop?: number;
  /**
  * SCTP HEARTBEAT chunk with other chunk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_chunk_heart_beat_clubbed DataThunderSctpGlobalStats#sctp_chunk_heart_beat_clubbed}
  */
  readonly sctpChunkHeartBeatClubbed?: number;
  /**
  * SCTP Chunk Type ABORT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_chunk_type_abort DataThunderSctpGlobalStats#sctp_chunk_type_abort}
  */
  readonly sctpChunkTypeAbort?: number;
  /**
  * SCTP Chunk Type with ABORT and DATA drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_chunk_type_abort_data_drop DataThunderSctpGlobalStats#sctp_chunk_type_abort_data_drop}
  */
  readonly sctpChunkTypeAbortDataDrop?: number;
  /**
  * SCTP Chunk Type ASCONF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_chunk_type_asconf DataThunderSctpGlobalStats#sctp_chunk_type_asconf}
  */
  readonly sctpChunkTypeAsconf?: number;
  /**
  * SCTP Chunk Type ASCONF-ACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_chunk_type_asconf_ack DataThunderSctpGlobalStats#sctp_chunk_type_asconf_ack}
  */
  readonly sctpChunkTypeAsconfAck?: number;
  /**
  * SCTP Chunk Type COOKIE-ACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_chunk_type_cookie_ack DataThunderSctpGlobalStats#sctp_chunk_type_cookie_ack}
  */
  readonly sctpChunkTypeCookieAck?: number;
  /**
  * SCTP Chunk Type COOKIE-ECHO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_chunk_type_cookie_echo DataThunderSctpGlobalStats#sctp_chunk_type_cookie_echo}
  */
  readonly sctpChunkTypeCookieEcho?: number;
  /**
  * SCTP Chunk Type DATA
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_chunk_type_data DataThunderSctpGlobalStats#sctp_chunk_type_data}
  */
  readonly sctpChunkTypeData?: number;
  /**
  * SCTP Chunk Type ERROR-OP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_chunk_type_error_op DataThunderSctpGlobalStats#sctp_chunk_type_error_op}
  */
  readonly sctpChunkTypeErrorOp?: number;
  /**
  * SCTP Chunk Type HEARTBEAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_chunk_type_heartbeat DataThunderSctpGlobalStats#sctp_chunk_type_heartbeat}
  */
  readonly sctpChunkTypeHeartbeat?: number;
  /**
  * SCTP Chunk Type HEARTBEAT-ACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_chunk_type_heartbeat_ack DataThunderSctpGlobalStats#sctp_chunk_type_heartbeat_ack}
  */
  readonly sctpChunkTypeHeartbeatAck?: number;
  /**
  * SCTP Chunk Type INIT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_chunk_type_init DataThunderSctpGlobalStats#sctp_chunk_type_init}
  */
  readonly sctpChunkTypeInit?: number;
  /**
  * SCTP Chunk Type INIT-ACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_chunk_type_init_ack DataThunderSctpGlobalStats#sctp_chunk_type_init_ack}
  */
  readonly sctpChunkTypeInitAck?: number;
  /**
  * SCTP Chunk Type INIT-ACK drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_chunk_type_init_ack_drop DataThunderSctpGlobalStats#sctp_chunk_type_init_ack_drop}
  */
  readonly sctpChunkTypeInitAckDrop?: number;
  /**
  * SCTP Chunk Type INIT drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_chunk_type_init_drop DataThunderSctpGlobalStats#sctp_chunk_type_init_drop}
  */
  readonly sctpChunkTypeInitDrop?: number;
  /**
  * SCTP Chunk Type OTHER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_chunk_type_other DataThunderSctpGlobalStats#sctp_chunk_type_other}
  */
  readonly sctpChunkTypeOther?: number;
  /**
  * SCTP Chunk Type SACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_chunk_type_sack DataThunderSctpGlobalStats#sctp_chunk_type_sack}
  */
  readonly sctpChunkTypeSack?: number;
  /**
  * SCTP Chunk Type SHUTDOWN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_chunk_type_shutdown DataThunderSctpGlobalStats#sctp_chunk_type_shutdown}
  */
  readonly sctpChunkTypeShutdown?: number;
  /**
  * SCTP Chunk Type SHUTDOWN-ACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_chunk_type_shutdown_ack DataThunderSctpGlobalStats#sctp_chunk_type_shutdown_ack}
  */
  readonly sctpChunkTypeShutdownAck?: number;
  /**
  * SCTP Chunk Type SHUTDOWN-COMPLETE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_chunk_type_shutdown_complete DataThunderSctpGlobalStats#sctp_chunk_type_shutdown_complete}
  */
  readonly sctpChunkTypeShutdownComplete?: number;
  /**
  * SCTP Chunk Type SHUTDOWN-COMPLETE drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_chunk_type_shutdown_complete_drop DataThunderSctpGlobalStats#sctp_chunk_type_shutdown_complete_drop}
  */
  readonly sctpChunkTypeShutdownCompleteDrop?: number;
  /**
  * SCTP DATA no extended match found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_data_no_ext_match DataThunderSctpGlobalStats#sctp_data_no_ext_match}
  */
  readonly sctpDataNoExtMatch?: number;
  /**
  * SCTP DATA chunk no tuple found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_data_no_tuple DataThunderSctpGlobalStats#sctp_data_no_tuple}
  */
  readonly sctpDataNoTuple?: number;
  /**
  * SCTP Firewall Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_fw_session_created DataThunderSctpGlobalStats#sctp_fw_session_created}
  */
  readonly sctpFwSessionCreated?: number;
  /**
  * SCTP Firewall Session Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_fw_session_deleted DataThunderSctpGlobalStats#sctp_fw_session_deleted}
  */
  readonly sctpFwSessionDeleted?: number;
  /**
  * SCTP HEARTBEAT/ACK no tuple found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_heartbeat_no_tuple DataThunderSctpGlobalStats#sctp_heartbeat_no_tuple}
  */
  readonly sctpHeartbeatNoTuple?: number;
  /**
  * SCTP INIT VTAG ZERO drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_init_vtag_zero_drop DataThunderSctpGlobalStats#sctp_init_vtag_zero_drop}
  */
  readonly sctpInitVtagZeroDrop?: number;
  /**
  * SCTP no extended match found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_no_ext_match DataThunderSctpGlobalStats#sctp_no_ext_match}
  */
  readonly sctpNoExtMatch?: number;
  /**
  * SCTP REROUTE lookup for chunks other than HEARTBEAT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_reroute_failover DataThunderSctpGlobalStats#sctp_reroute_failover}
  */
  readonly sctpRerouteFailover?: number;
  /**
  * SCTP Retransmitted INIT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_retx_init DataThunderSctpGlobalStats#sctp_retx_init}
  */
  readonly sctpRetxInit?: number;
  /**
  * SCTP Chunk Type INIT_ACK retransmitted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_retx_init_ack DataThunderSctpGlobalStats#sctp_retx_init_ack}
  */
  readonly sctpRetxInitAck?: number;
  /**
  * SCTP Chunk Type INIT_ACK with retx mismatched vtag drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_retx_init_ack_drop DataThunderSctpGlobalStats#sctp_retx_init_ack_drop}
  */
  readonly sctpRetxInitAckDrop?: number;
  /**
  * SCTP Retransmitted INIT drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_retx_init_drop DataThunderSctpGlobalStats#sctp_retx_init_drop}
  */
  readonly sctpRetxInitDrop?: number;
  /**
  * SCTP ROUTE lookup failed for chunks other than HEARTBEAT drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_route_err_drop DataThunderSctpGlobalStats#sctp_route_err_drop}
  */
  readonly sctpRouteErrDrop?: number;
  /**
  * SCTP HEARTBEAT ROUTE lookup failed drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_route_err_heartbeat_drop DataThunderSctpGlobalStats#sctp_route_err_heartbeat_drop}
  */
  readonly sctpRouteErrHeartbeatDrop?: number;
  /**
  * SCTP Static NAT Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_static_nat_session_created DataThunderSctpGlobalStats#sctp_static_nat_session_created}
  */
  readonly sctpStaticNatSessionCreated?: number;
  /**
  * SCTP Static NAT Session Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#sctp_static_nat_session_deleted DataThunderSctpGlobalStats#sctp_static_nat_session_deleted}
  */
  readonly sctpStaticNatSessionDeleted?: number;
  /**
  * Static NAT Config Not Found Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#static_nat_cfg_not_found DataThunderSctpGlobalStats#static_nat_cfg_not_found}
  */
  readonly staticNatCfgNotFound?: number;
  /**
  * NAT Resource VRRP-A Standby Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#vrrp_standby_drop DataThunderSctpGlobalStats#vrrp_standby_drop}
  */
  readonly vrrpStandbyDrop?: number;
}

export function dataThunderSctpGlobalStatsStatsToTerraform(struct?: DataThunderSctpGlobalStatsStatsOutputReference | DataThunderSctpGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bad_alignment_drop: cdktf.numberToTerraform(struct!.badAlignmentDrop),
    bad_csum: cdktf.numberToTerraform(struct!.badCsum),
    bad_payload_drop: cdktf.numberToTerraform(struct!.badPayloadDrop),
    cfg_err_drop: cdktf.numberToTerraform(struct!.cfgErrDrop),
    disallowed_chunk_filtered: cdktf.numberToTerraform(struct!.disallowedChunkFiltered),
    disallowed_pkt_drop: cdktf.numberToTerraform(struct!.disallowedPktDrop),
    invalid_frag_chunk_drop: cdktf.numberToTerraform(struct!.invalidFragChunkDrop),
    max_multi_home_drop: cdktf.numberToTerraform(struct!.maxMultiHomeDrop),
    multi_home_addr_not_found_drop: cdktf.numberToTerraform(struct!.multiHomeAddrNotFoundDrop),
    multi_home_remove_ip_skip: cdktf.numberToTerraform(struct!.multiHomeRemoveIpSkip),
    oos_pkt_drop: cdktf.numberToTerraform(struct!.oosPktDrop),
    pkt_asconf_param_len_err_drop: cdktf.numberToTerraform(struct!.pktAsconfParamLenErrDrop),
    pkt_chunk_len_err_drop: cdktf.numberToTerraform(struct!.pktChunkLenErrDrop),
    pkt_err_drop: cdktf.numberToTerraform(struct!.pktErrDrop),
    pkt_len_err_drop: cdktf.numberToTerraform(struct!.pktLenErrDrop),
    rate_limit_drop: cdktf.numberToTerraform(struct!.rateLimitDrop),
    sby_session_create_fail: cdktf.numberToTerraform(struct!.sbySessionCreateFail),
    sby_session_created: cdktf.numberToTerraform(struct!.sbySessionCreated),
    sby_session_update_fail: cdktf.numberToTerraform(struct!.sbySessionUpdateFail),
    sby_session_updated: cdktf.numberToTerraform(struct!.sbySessionUpdated),
    sby_static_nat_cfg_not_found: cdktf.numberToTerraform(struct!.sbyStaticNatCfgNotFound),
    sctp_asconf_process_drop: cdktf.numberToTerraform(struct!.sctpAsconfProcessDrop),
    sctp_chunk_heart_beat_clubbed: cdktf.numberToTerraform(struct!.sctpChunkHeartBeatClubbed),
    sctp_chunk_type_abort: cdktf.numberToTerraform(struct!.sctpChunkTypeAbort),
    sctp_chunk_type_abort_data_drop: cdktf.numberToTerraform(struct!.sctpChunkTypeAbortDataDrop),
    sctp_chunk_type_asconf: cdktf.numberToTerraform(struct!.sctpChunkTypeAsconf),
    sctp_chunk_type_asconf_ack: cdktf.numberToTerraform(struct!.sctpChunkTypeAsconfAck),
    sctp_chunk_type_cookie_ack: cdktf.numberToTerraform(struct!.sctpChunkTypeCookieAck),
    sctp_chunk_type_cookie_echo: cdktf.numberToTerraform(struct!.sctpChunkTypeCookieEcho),
    sctp_chunk_type_data: cdktf.numberToTerraform(struct!.sctpChunkTypeData),
    sctp_chunk_type_error_op: cdktf.numberToTerraform(struct!.sctpChunkTypeErrorOp),
    sctp_chunk_type_heartbeat: cdktf.numberToTerraform(struct!.sctpChunkTypeHeartbeat),
    sctp_chunk_type_heartbeat_ack: cdktf.numberToTerraform(struct!.sctpChunkTypeHeartbeatAck),
    sctp_chunk_type_init: cdktf.numberToTerraform(struct!.sctpChunkTypeInit),
    sctp_chunk_type_init_ack: cdktf.numberToTerraform(struct!.sctpChunkTypeInitAck),
    sctp_chunk_type_init_ack_drop: cdktf.numberToTerraform(struct!.sctpChunkTypeInitAckDrop),
    sctp_chunk_type_init_drop: cdktf.numberToTerraform(struct!.sctpChunkTypeInitDrop),
    sctp_chunk_type_other: cdktf.numberToTerraform(struct!.sctpChunkTypeOther),
    sctp_chunk_type_sack: cdktf.numberToTerraform(struct!.sctpChunkTypeSack),
    sctp_chunk_type_shutdown: cdktf.numberToTerraform(struct!.sctpChunkTypeShutdown),
    sctp_chunk_type_shutdown_ack: cdktf.numberToTerraform(struct!.sctpChunkTypeShutdownAck),
    sctp_chunk_type_shutdown_complete: cdktf.numberToTerraform(struct!.sctpChunkTypeShutdownComplete),
    sctp_chunk_type_shutdown_complete_drop: cdktf.numberToTerraform(struct!.sctpChunkTypeShutdownCompleteDrop),
    sctp_data_no_ext_match: cdktf.numberToTerraform(struct!.sctpDataNoExtMatch),
    sctp_data_no_tuple: cdktf.numberToTerraform(struct!.sctpDataNoTuple),
    sctp_fw_session_created: cdktf.numberToTerraform(struct!.sctpFwSessionCreated),
    sctp_fw_session_deleted: cdktf.numberToTerraform(struct!.sctpFwSessionDeleted),
    sctp_heartbeat_no_tuple: cdktf.numberToTerraform(struct!.sctpHeartbeatNoTuple),
    sctp_init_vtag_zero_drop: cdktf.numberToTerraform(struct!.sctpInitVtagZeroDrop),
    sctp_no_ext_match: cdktf.numberToTerraform(struct!.sctpNoExtMatch),
    sctp_reroute_failover: cdktf.numberToTerraform(struct!.sctpRerouteFailover),
    sctp_retx_init: cdktf.numberToTerraform(struct!.sctpRetxInit),
    sctp_retx_init_ack: cdktf.numberToTerraform(struct!.sctpRetxInitAck),
    sctp_retx_init_ack_drop: cdktf.numberToTerraform(struct!.sctpRetxInitAckDrop),
    sctp_retx_init_drop: cdktf.numberToTerraform(struct!.sctpRetxInitDrop),
    sctp_route_err_drop: cdktf.numberToTerraform(struct!.sctpRouteErrDrop),
    sctp_route_err_heartbeat_drop: cdktf.numberToTerraform(struct!.sctpRouteErrHeartbeatDrop),
    sctp_static_nat_session_created: cdktf.numberToTerraform(struct!.sctpStaticNatSessionCreated),
    sctp_static_nat_session_deleted: cdktf.numberToTerraform(struct!.sctpStaticNatSessionDeleted),
    static_nat_cfg_not_found: cdktf.numberToTerraform(struct!.staticNatCfgNotFound),
    vrrp_standby_drop: cdktf.numberToTerraform(struct!.vrrpStandbyDrop),
  }
}


export function dataThunderSctpGlobalStatsStatsToHclTerraform(struct?: DataThunderSctpGlobalStatsStatsOutputReference | DataThunderSctpGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bad_alignment_drop: {
      value: cdktf.numberToHclTerraform(struct!.badAlignmentDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_csum: {
      value: cdktf.numberToHclTerraform(struct!.badCsum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_payload_drop: {
      value: cdktf.numberToHclTerraform(struct!.badPayloadDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cfg_err_drop: {
      value: cdktf.numberToHclTerraform(struct!.cfgErrDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disallowed_chunk_filtered: {
      value: cdktf.numberToHclTerraform(struct!.disallowedChunkFiltered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disallowed_pkt_drop: {
      value: cdktf.numberToHclTerraform(struct!.disallowedPktDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_frag_chunk_drop: {
      value: cdktf.numberToHclTerraform(struct!.invalidFragChunkDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_multi_home_drop: {
      value: cdktf.numberToHclTerraform(struct!.maxMultiHomeDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multi_home_addr_not_found_drop: {
      value: cdktf.numberToHclTerraform(struct!.multiHomeAddrNotFoundDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multi_home_remove_ip_skip: {
      value: cdktf.numberToHclTerraform(struct!.multiHomeRemoveIpSkip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    oos_pkt_drop: {
      value: cdktf.numberToHclTerraform(struct!.oosPktDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_asconf_param_len_err_drop: {
      value: cdktf.numberToHclTerraform(struct!.pktAsconfParamLenErrDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_chunk_len_err_drop: {
      value: cdktf.numberToHclTerraform(struct!.pktChunkLenErrDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_err_drop: {
      value: cdktf.numberToHclTerraform(struct!.pktErrDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_len_err_drop: {
      value: cdktf.numberToHclTerraform(struct!.pktLenErrDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_limit_drop: {
      value: cdktf.numberToHclTerraform(struct!.rateLimitDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sby_session_create_fail: {
      value: cdktf.numberToHclTerraform(struct!.sbySessionCreateFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sby_session_created: {
      value: cdktf.numberToHclTerraform(struct!.sbySessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sby_session_update_fail: {
      value: cdktf.numberToHclTerraform(struct!.sbySessionUpdateFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sby_session_updated: {
      value: cdktf.numberToHclTerraform(struct!.sbySessionUpdated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sby_static_nat_cfg_not_found: {
      value: cdktf.numberToHclTerraform(struct!.sbyStaticNatCfgNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_asconf_process_drop: {
      value: cdktf.numberToHclTerraform(struct!.sctpAsconfProcessDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_chunk_heart_beat_clubbed: {
      value: cdktf.numberToHclTerraform(struct!.sctpChunkHeartBeatClubbed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_chunk_type_abort: {
      value: cdktf.numberToHclTerraform(struct!.sctpChunkTypeAbort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_chunk_type_abort_data_drop: {
      value: cdktf.numberToHclTerraform(struct!.sctpChunkTypeAbortDataDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_chunk_type_asconf: {
      value: cdktf.numberToHclTerraform(struct!.sctpChunkTypeAsconf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_chunk_type_asconf_ack: {
      value: cdktf.numberToHclTerraform(struct!.sctpChunkTypeAsconfAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_chunk_type_cookie_ack: {
      value: cdktf.numberToHclTerraform(struct!.sctpChunkTypeCookieAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_chunk_type_cookie_echo: {
      value: cdktf.numberToHclTerraform(struct!.sctpChunkTypeCookieEcho),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_chunk_type_data: {
      value: cdktf.numberToHclTerraform(struct!.sctpChunkTypeData),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_chunk_type_error_op: {
      value: cdktf.numberToHclTerraform(struct!.sctpChunkTypeErrorOp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_chunk_type_heartbeat: {
      value: cdktf.numberToHclTerraform(struct!.sctpChunkTypeHeartbeat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_chunk_type_heartbeat_ack: {
      value: cdktf.numberToHclTerraform(struct!.sctpChunkTypeHeartbeatAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_chunk_type_init: {
      value: cdktf.numberToHclTerraform(struct!.sctpChunkTypeInit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_chunk_type_init_ack: {
      value: cdktf.numberToHclTerraform(struct!.sctpChunkTypeInitAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_chunk_type_init_ack_drop: {
      value: cdktf.numberToHclTerraform(struct!.sctpChunkTypeInitAckDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_chunk_type_init_drop: {
      value: cdktf.numberToHclTerraform(struct!.sctpChunkTypeInitDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_chunk_type_other: {
      value: cdktf.numberToHclTerraform(struct!.sctpChunkTypeOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_chunk_type_sack: {
      value: cdktf.numberToHclTerraform(struct!.sctpChunkTypeSack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_chunk_type_shutdown: {
      value: cdktf.numberToHclTerraform(struct!.sctpChunkTypeShutdown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_chunk_type_shutdown_ack: {
      value: cdktf.numberToHclTerraform(struct!.sctpChunkTypeShutdownAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_chunk_type_shutdown_complete: {
      value: cdktf.numberToHclTerraform(struct!.sctpChunkTypeShutdownComplete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_chunk_type_shutdown_complete_drop: {
      value: cdktf.numberToHclTerraform(struct!.sctpChunkTypeShutdownCompleteDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_data_no_ext_match: {
      value: cdktf.numberToHclTerraform(struct!.sctpDataNoExtMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_data_no_tuple: {
      value: cdktf.numberToHclTerraform(struct!.sctpDataNoTuple),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_fw_session_created: {
      value: cdktf.numberToHclTerraform(struct!.sctpFwSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_fw_session_deleted: {
      value: cdktf.numberToHclTerraform(struct!.sctpFwSessionDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_heartbeat_no_tuple: {
      value: cdktf.numberToHclTerraform(struct!.sctpHeartbeatNoTuple),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_init_vtag_zero_drop: {
      value: cdktf.numberToHclTerraform(struct!.sctpInitVtagZeroDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_no_ext_match: {
      value: cdktf.numberToHclTerraform(struct!.sctpNoExtMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_reroute_failover: {
      value: cdktf.numberToHclTerraform(struct!.sctpRerouteFailover),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_retx_init: {
      value: cdktf.numberToHclTerraform(struct!.sctpRetxInit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_retx_init_ack: {
      value: cdktf.numberToHclTerraform(struct!.sctpRetxInitAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_retx_init_ack_drop: {
      value: cdktf.numberToHclTerraform(struct!.sctpRetxInitAckDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_retx_init_drop: {
      value: cdktf.numberToHclTerraform(struct!.sctpRetxInitDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_route_err_drop: {
      value: cdktf.numberToHclTerraform(struct!.sctpRouteErrDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_route_err_heartbeat_drop: {
      value: cdktf.numberToHclTerraform(struct!.sctpRouteErrHeartbeatDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_static_nat_session_created: {
      value: cdktf.numberToHclTerraform(struct!.sctpStaticNatSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sctp_static_nat_session_deleted: {
      value: cdktf.numberToHclTerraform(struct!.sctpStaticNatSessionDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_nat_cfg_not_found: {
      value: cdktf.numberToHclTerraform(struct!.staticNatCfgNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vrrp_standby_drop: {
      value: cdktf.numberToHclTerraform(struct!.vrrpStandbyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSctpGlobalStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSctpGlobalStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._badAlignmentDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.badAlignmentDrop = this._badAlignmentDrop;
    }
    if (this._badCsum !== undefined) {
      hasAnyValues = true;
      internalValueResult.badCsum = this._badCsum;
    }
    if (this._badPayloadDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.badPayloadDrop = this._badPayloadDrop;
    }
    if (this._cfgErrDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfgErrDrop = this._cfgErrDrop;
    }
    if (this._disallowedChunkFiltered !== undefined) {
      hasAnyValues = true;
      internalValueResult.disallowedChunkFiltered = this._disallowedChunkFiltered;
    }
    if (this._disallowedPktDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.disallowedPktDrop = this._disallowedPktDrop;
    }
    if (this._invalidFragChunkDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidFragChunkDrop = this._invalidFragChunkDrop;
    }
    if (this._maxMultiHomeDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMultiHomeDrop = this._maxMultiHomeDrop;
    }
    if (this._multiHomeAddrNotFoundDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiHomeAddrNotFoundDrop = this._multiHomeAddrNotFoundDrop;
    }
    if (this._multiHomeRemoveIpSkip !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiHomeRemoveIpSkip = this._multiHomeRemoveIpSkip;
    }
    if (this._oosPktDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.oosPktDrop = this._oosPktDrop;
    }
    if (this._pktAsconfParamLenErrDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktAsconfParamLenErrDrop = this._pktAsconfParamLenErrDrop;
    }
    if (this._pktChunkLenErrDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktChunkLenErrDrop = this._pktChunkLenErrDrop;
    }
    if (this._pktErrDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktErrDrop = this._pktErrDrop;
    }
    if (this._pktLenErrDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktLenErrDrop = this._pktLenErrDrop;
    }
    if (this._rateLimitDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateLimitDrop = this._rateLimitDrop;
    }
    if (this._sbySessionCreateFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.sbySessionCreateFail = this._sbySessionCreateFail;
    }
    if (this._sbySessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.sbySessionCreated = this._sbySessionCreated;
    }
    if (this._sbySessionUpdateFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.sbySessionUpdateFail = this._sbySessionUpdateFail;
    }
    if (this._sbySessionUpdated !== undefined) {
      hasAnyValues = true;
      internalValueResult.sbySessionUpdated = this._sbySessionUpdated;
    }
    if (this._sbyStaticNatCfgNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.sbyStaticNatCfgNotFound = this._sbyStaticNatCfgNotFound;
    }
    if (this._sctpAsconfProcessDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpAsconfProcessDrop = this._sctpAsconfProcessDrop;
    }
    if (this._sctpChunkHeartBeatClubbed !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpChunkHeartBeatClubbed = this._sctpChunkHeartBeatClubbed;
    }
    if (this._sctpChunkTypeAbort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpChunkTypeAbort = this._sctpChunkTypeAbort;
    }
    if (this._sctpChunkTypeAbortDataDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpChunkTypeAbortDataDrop = this._sctpChunkTypeAbortDataDrop;
    }
    if (this._sctpChunkTypeAsconf !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpChunkTypeAsconf = this._sctpChunkTypeAsconf;
    }
    if (this._sctpChunkTypeAsconfAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpChunkTypeAsconfAck = this._sctpChunkTypeAsconfAck;
    }
    if (this._sctpChunkTypeCookieAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpChunkTypeCookieAck = this._sctpChunkTypeCookieAck;
    }
    if (this._sctpChunkTypeCookieEcho !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpChunkTypeCookieEcho = this._sctpChunkTypeCookieEcho;
    }
    if (this._sctpChunkTypeData !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpChunkTypeData = this._sctpChunkTypeData;
    }
    if (this._sctpChunkTypeErrorOp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpChunkTypeErrorOp = this._sctpChunkTypeErrorOp;
    }
    if (this._sctpChunkTypeHeartbeat !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpChunkTypeHeartbeat = this._sctpChunkTypeHeartbeat;
    }
    if (this._sctpChunkTypeHeartbeatAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpChunkTypeHeartbeatAck = this._sctpChunkTypeHeartbeatAck;
    }
    if (this._sctpChunkTypeInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpChunkTypeInit = this._sctpChunkTypeInit;
    }
    if (this._sctpChunkTypeInitAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpChunkTypeInitAck = this._sctpChunkTypeInitAck;
    }
    if (this._sctpChunkTypeInitAckDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpChunkTypeInitAckDrop = this._sctpChunkTypeInitAckDrop;
    }
    if (this._sctpChunkTypeInitDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpChunkTypeInitDrop = this._sctpChunkTypeInitDrop;
    }
    if (this._sctpChunkTypeOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpChunkTypeOther = this._sctpChunkTypeOther;
    }
    if (this._sctpChunkTypeSack !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpChunkTypeSack = this._sctpChunkTypeSack;
    }
    if (this._sctpChunkTypeShutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpChunkTypeShutdown = this._sctpChunkTypeShutdown;
    }
    if (this._sctpChunkTypeShutdownAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpChunkTypeShutdownAck = this._sctpChunkTypeShutdownAck;
    }
    if (this._sctpChunkTypeShutdownComplete !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpChunkTypeShutdownComplete = this._sctpChunkTypeShutdownComplete;
    }
    if (this._sctpChunkTypeShutdownCompleteDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpChunkTypeShutdownCompleteDrop = this._sctpChunkTypeShutdownCompleteDrop;
    }
    if (this._sctpDataNoExtMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpDataNoExtMatch = this._sctpDataNoExtMatch;
    }
    if (this._sctpDataNoTuple !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpDataNoTuple = this._sctpDataNoTuple;
    }
    if (this._sctpFwSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpFwSessionCreated = this._sctpFwSessionCreated;
    }
    if (this._sctpFwSessionDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpFwSessionDeleted = this._sctpFwSessionDeleted;
    }
    if (this._sctpHeartbeatNoTuple !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpHeartbeatNoTuple = this._sctpHeartbeatNoTuple;
    }
    if (this._sctpInitVtagZeroDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpInitVtagZeroDrop = this._sctpInitVtagZeroDrop;
    }
    if (this._sctpNoExtMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpNoExtMatch = this._sctpNoExtMatch;
    }
    if (this._sctpRerouteFailover !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpRerouteFailover = this._sctpRerouteFailover;
    }
    if (this._sctpRetxInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpRetxInit = this._sctpRetxInit;
    }
    if (this._sctpRetxInitAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpRetxInitAck = this._sctpRetxInitAck;
    }
    if (this._sctpRetxInitAckDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpRetxInitAckDrop = this._sctpRetxInitAckDrop;
    }
    if (this._sctpRetxInitDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpRetxInitDrop = this._sctpRetxInitDrop;
    }
    if (this._sctpRouteErrDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpRouteErrDrop = this._sctpRouteErrDrop;
    }
    if (this._sctpRouteErrHeartbeatDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpRouteErrHeartbeatDrop = this._sctpRouteErrHeartbeatDrop;
    }
    if (this._sctpStaticNatSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpStaticNatSessionCreated = this._sctpStaticNatSessionCreated;
    }
    if (this._sctpStaticNatSessionDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.sctpStaticNatSessionDeleted = this._sctpStaticNatSessionDeleted;
    }
    if (this._staticNatCfgNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticNatCfgNotFound = this._staticNatCfgNotFound;
    }
    if (this._vrrpStandbyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrrpStandbyDrop = this._vrrpStandbyDrop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSctpGlobalStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._badAlignmentDrop = undefined;
      this._badCsum = undefined;
      this._badPayloadDrop = undefined;
      this._cfgErrDrop = undefined;
      this._disallowedChunkFiltered = undefined;
      this._disallowedPktDrop = undefined;
      this._invalidFragChunkDrop = undefined;
      this._maxMultiHomeDrop = undefined;
      this._multiHomeAddrNotFoundDrop = undefined;
      this._multiHomeRemoveIpSkip = undefined;
      this._oosPktDrop = undefined;
      this._pktAsconfParamLenErrDrop = undefined;
      this._pktChunkLenErrDrop = undefined;
      this._pktErrDrop = undefined;
      this._pktLenErrDrop = undefined;
      this._rateLimitDrop = undefined;
      this._sbySessionCreateFail = undefined;
      this._sbySessionCreated = undefined;
      this._sbySessionUpdateFail = undefined;
      this._sbySessionUpdated = undefined;
      this._sbyStaticNatCfgNotFound = undefined;
      this._sctpAsconfProcessDrop = undefined;
      this._sctpChunkHeartBeatClubbed = undefined;
      this._sctpChunkTypeAbort = undefined;
      this._sctpChunkTypeAbortDataDrop = undefined;
      this._sctpChunkTypeAsconf = undefined;
      this._sctpChunkTypeAsconfAck = undefined;
      this._sctpChunkTypeCookieAck = undefined;
      this._sctpChunkTypeCookieEcho = undefined;
      this._sctpChunkTypeData = undefined;
      this._sctpChunkTypeErrorOp = undefined;
      this._sctpChunkTypeHeartbeat = undefined;
      this._sctpChunkTypeHeartbeatAck = undefined;
      this._sctpChunkTypeInit = undefined;
      this._sctpChunkTypeInitAck = undefined;
      this._sctpChunkTypeInitAckDrop = undefined;
      this._sctpChunkTypeInitDrop = undefined;
      this._sctpChunkTypeOther = undefined;
      this._sctpChunkTypeSack = undefined;
      this._sctpChunkTypeShutdown = undefined;
      this._sctpChunkTypeShutdownAck = undefined;
      this._sctpChunkTypeShutdownComplete = undefined;
      this._sctpChunkTypeShutdownCompleteDrop = undefined;
      this._sctpDataNoExtMatch = undefined;
      this._sctpDataNoTuple = undefined;
      this._sctpFwSessionCreated = undefined;
      this._sctpFwSessionDeleted = undefined;
      this._sctpHeartbeatNoTuple = undefined;
      this._sctpInitVtagZeroDrop = undefined;
      this._sctpNoExtMatch = undefined;
      this._sctpRerouteFailover = undefined;
      this._sctpRetxInit = undefined;
      this._sctpRetxInitAck = undefined;
      this._sctpRetxInitAckDrop = undefined;
      this._sctpRetxInitDrop = undefined;
      this._sctpRouteErrDrop = undefined;
      this._sctpRouteErrHeartbeatDrop = undefined;
      this._sctpStaticNatSessionCreated = undefined;
      this._sctpStaticNatSessionDeleted = undefined;
      this._staticNatCfgNotFound = undefined;
      this._vrrpStandbyDrop = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._badAlignmentDrop = value.badAlignmentDrop;
      this._badCsum = value.badCsum;
      this._badPayloadDrop = value.badPayloadDrop;
      this._cfgErrDrop = value.cfgErrDrop;
      this._disallowedChunkFiltered = value.disallowedChunkFiltered;
      this._disallowedPktDrop = value.disallowedPktDrop;
      this._invalidFragChunkDrop = value.invalidFragChunkDrop;
      this._maxMultiHomeDrop = value.maxMultiHomeDrop;
      this._multiHomeAddrNotFoundDrop = value.multiHomeAddrNotFoundDrop;
      this._multiHomeRemoveIpSkip = value.multiHomeRemoveIpSkip;
      this._oosPktDrop = value.oosPktDrop;
      this._pktAsconfParamLenErrDrop = value.pktAsconfParamLenErrDrop;
      this._pktChunkLenErrDrop = value.pktChunkLenErrDrop;
      this._pktErrDrop = value.pktErrDrop;
      this._pktLenErrDrop = value.pktLenErrDrop;
      this._rateLimitDrop = value.rateLimitDrop;
      this._sbySessionCreateFail = value.sbySessionCreateFail;
      this._sbySessionCreated = value.sbySessionCreated;
      this._sbySessionUpdateFail = value.sbySessionUpdateFail;
      this._sbySessionUpdated = value.sbySessionUpdated;
      this._sbyStaticNatCfgNotFound = value.sbyStaticNatCfgNotFound;
      this._sctpAsconfProcessDrop = value.sctpAsconfProcessDrop;
      this._sctpChunkHeartBeatClubbed = value.sctpChunkHeartBeatClubbed;
      this._sctpChunkTypeAbort = value.sctpChunkTypeAbort;
      this._sctpChunkTypeAbortDataDrop = value.sctpChunkTypeAbortDataDrop;
      this._sctpChunkTypeAsconf = value.sctpChunkTypeAsconf;
      this._sctpChunkTypeAsconfAck = value.sctpChunkTypeAsconfAck;
      this._sctpChunkTypeCookieAck = value.sctpChunkTypeCookieAck;
      this._sctpChunkTypeCookieEcho = value.sctpChunkTypeCookieEcho;
      this._sctpChunkTypeData = value.sctpChunkTypeData;
      this._sctpChunkTypeErrorOp = value.sctpChunkTypeErrorOp;
      this._sctpChunkTypeHeartbeat = value.sctpChunkTypeHeartbeat;
      this._sctpChunkTypeHeartbeatAck = value.sctpChunkTypeHeartbeatAck;
      this._sctpChunkTypeInit = value.sctpChunkTypeInit;
      this._sctpChunkTypeInitAck = value.sctpChunkTypeInitAck;
      this._sctpChunkTypeInitAckDrop = value.sctpChunkTypeInitAckDrop;
      this._sctpChunkTypeInitDrop = value.sctpChunkTypeInitDrop;
      this._sctpChunkTypeOther = value.sctpChunkTypeOther;
      this._sctpChunkTypeSack = value.sctpChunkTypeSack;
      this._sctpChunkTypeShutdown = value.sctpChunkTypeShutdown;
      this._sctpChunkTypeShutdownAck = value.sctpChunkTypeShutdownAck;
      this._sctpChunkTypeShutdownComplete = value.sctpChunkTypeShutdownComplete;
      this._sctpChunkTypeShutdownCompleteDrop = value.sctpChunkTypeShutdownCompleteDrop;
      this._sctpDataNoExtMatch = value.sctpDataNoExtMatch;
      this._sctpDataNoTuple = value.sctpDataNoTuple;
      this._sctpFwSessionCreated = value.sctpFwSessionCreated;
      this._sctpFwSessionDeleted = value.sctpFwSessionDeleted;
      this._sctpHeartbeatNoTuple = value.sctpHeartbeatNoTuple;
      this._sctpInitVtagZeroDrop = value.sctpInitVtagZeroDrop;
      this._sctpNoExtMatch = value.sctpNoExtMatch;
      this._sctpRerouteFailover = value.sctpRerouteFailover;
      this._sctpRetxInit = value.sctpRetxInit;
      this._sctpRetxInitAck = value.sctpRetxInitAck;
      this._sctpRetxInitAckDrop = value.sctpRetxInitAckDrop;
      this._sctpRetxInitDrop = value.sctpRetxInitDrop;
      this._sctpRouteErrDrop = value.sctpRouteErrDrop;
      this._sctpRouteErrHeartbeatDrop = value.sctpRouteErrHeartbeatDrop;
      this._sctpStaticNatSessionCreated = value.sctpStaticNatSessionCreated;
      this._sctpStaticNatSessionDeleted = value.sctpStaticNatSessionDeleted;
      this._staticNatCfgNotFound = value.staticNatCfgNotFound;
      this._vrrpStandbyDrop = value.vrrpStandbyDrop;
    }
  }

  // bad_alignment_drop - computed: false, optional: true, required: false
  private _badAlignmentDrop?: number; 
  public get badAlignmentDrop() {
    return this.getNumberAttribute('bad_alignment_drop');
  }
  public set badAlignmentDrop(value: number) {
    this._badAlignmentDrop = value;
  }
  public resetBadAlignmentDrop() {
    this._badAlignmentDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badAlignmentDropInput() {
    return this._badAlignmentDrop;
  }

  // bad_csum - computed: false, optional: true, required: false
  private _badCsum?: number; 
  public get badCsum() {
    return this.getNumberAttribute('bad_csum');
  }
  public set badCsum(value: number) {
    this._badCsum = value;
  }
  public resetBadCsum() {
    this._badCsum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badCsumInput() {
    return this._badCsum;
  }

  // bad_payload_drop - computed: false, optional: true, required: false
  private _badPayloadDrop?: number; 
  public get badPayloadDrop() {
    return this.getNumberAttribute('bad_payload_drop');
  }
  public set badPayloadDrop(value: number) {
    this._badPayloadDrop = value;
  }
  public resetBadPayloadDrop() {
    this._badPayloadDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badPayloadDropInput() {
    return this._badPayloadDrop;
  }

  // cfg_err_drop - computed: false, optional: true, required: false
  private _cfgErrDrop?: number; 
  public get cfgErrDrop() {
    return this.getNumberAttribute('cfg_err_drop');
  }
  public set cfgErrDrop(value: number) {
    this._cfgErrDrop = value;
  }
  public resetCfgErrDrop() {
    this._cfgErrDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfgErrDropInput() {
    return this._cfgErrDrop;
  }

  // disallowed_chunk_filtered - computed: false, optional: true, required: false
  private _disallowedChunkFiltered?: number; 
  public get disallowedChunkFiltered() {
    return this.getNumberAttribute('disallowed_chunk_filtered');
  }
  public set disallowedChunkFiltered(value: number) {
    this._disallowedChunkFiltered = value;
  }
  public resetDisallowedChunkFiltered() {
    this._disallowedChunkFiltered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowedChunkFilteredInput() {
    return this._disallowedChunkFiltered;
  }

  // disallowed_pkt_drop - computed: false, optional: true, required: false
  private _disallowedPktDrop?: number; 
  public get disallowedPktDrop() {
    return this.getNumberAttribute('disallowed_pkt_drop');
  }
  public set disallowedPktDrop(value: number) {
    this._disallowedPktDrop = value;
  }
  public resetDisallowedPktDrop() {
    this._disallowedPktDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowedPktDropInput() {
    return this._disallowedPktDrop;
  }

  // invalid_frag_chunk_drop - computed: false, optional: true, required: false
  private _invalidFragChunkDrop?: number; 
  public get invalidFragChunkDrop() {
    return this.getNumberAttribute('invalid_frag_chunk_drop');
  }
  public set invalidFragChunkDrop(value: number) {
    this._invalidFragChunkDrop = value;
  }
  public resetInvalidFragChunkDrop() {
    this._invalidFragChunkDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidFragChunkDropInput() {
    return this._invalidFragChunkDrop;
  }

  // max_multi_home_drop - computed: false, optional: true, required: false
  private _maxMultiHomeDrop?: number; 
  public get maxMultiHomeDrop() {
    return this.getNumberAttribute('max_multi_home_drop');
  }
  public set maxMultiHomeDrop(value: number) {
    this._maxMultiHomeDrop = value;
  }
  public resetMaxMultiHomeDrop() {
    this._maxMultiHomeDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMultiHomeDropInput() {
    return this._maxMultiHomeDrop;
  }

  // multi_home_addr_not_found_drop - computed: false, optional: true, required: false
  private _multiHomeAddrNotFoundDrop?: number; 
  public get multiHomeAddrNotFoundDrop() {
    return this.getNumberAttribute('multi_home_addr_not_found_drop');
  }
  public set multiHomeAddrNotFoundDrop(value: number) {
    this._multiHomeAddrNotFoundDrop = value;
  }
  public resetMultiHomeAddrNotFoundDrop() {
    this._multiHomeAddrNotFoundDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiHomeAddrNotFoundDropInput() {
    return this._multiHomeAddrNotFoundDrop;
  }

  // multi_home_remove_ip_skip - computed: false, optional: true, required: false
  private _multiHomeRemoveIpSkip?: number; 
  public get multiHomeRemoveIpSkip() {
    return this.getNumberAttribute('multi_home_remove_ip_skip');
  }
  public set multiHomeRemoveIpSkip(value: number) {
    this._multiHomeRemoveIpSkip = value;
  }
  public resetMultiHomeRemoveIpSkip() {
    this._multiHomeRemoveIpSkip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiHomeRemoveIpSkipInput() {
    return this._multiHomeRemoveIpSkip;
  }

  // oos_pkt_drop - computed: false, optional: true, required: false
  private _oosPktDrop?: number; 
  public get oosPktDrop() {
    return this.getNumberAttribute('oos_pkt_drop');
  }
  public set oosPktDrop(value: number) {
    this._oosPktDrop = value;
  }
  public resetOosPktDrop() {
    this._oosPktDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oosPktDropInput() {
    return this._oosPktDrop;
  }

  // pkt_asconf_param_len_err_drop - computed: false, optional: true, required: false
  private _pktAsconfParamLenErrDrop?: number; 
  public get pktAsconfParamLenErrDrop() {
    return this.getNumberAttribute('pkt_asconf_param_len_err_drop');
  }
  public set pktAsconfParamLenErrDrop(value: number) {
    this._pktAsconfParamLenErrDrop = value;
  }
  public resetPktAsconfParamLenErrDrop() {
    this._pktAsconfParamLenErrDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktAsconfParamLenErrDropInput() {
    return this._pktAsconfParamLenErrDrop;
  }

  // pkt_chunk_len_err_drop - computed: false, optional: true, required: false
  private _pktChunkLenErrDrop?: number; 
  public get pktChunkLenErrDrop() {
    return this.getNumberAttribute('pkt_chunk_len_err_drop');
  }
  public set pktChunkLenErrDrop(value: number) {
    this._pktChunkLenErrDrop = value;
  }
  public resetPktChunkLenErrDrop() {
    this._pktChunkLenErrDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktChunkLenErrDropInput() {
    return this._pktChunkLenErrDrop;
  }

  // pkt_err_drop - computed: false, optional: true, required: false
  private _pktErrDrop?: number; 
  public get pktErrDrop() {
    return this.getNumberAttribute('pkt_err_drop');
  }
  public set pktErrDrop(value: number) {
    this._pktErrDrop = value;
  }
  public resetPktErrDrop() {
    this._pktErrDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktErrDropInput() {
    return this._pktErrDrop;
  }

  // pkt_len_err_drop - computed: false, optional: true, required: false
  private _pktLenErrDrop?: number; 
  public get pktLenErrDrop() {
    return this.getNumberAttribute('pkt_len_err_drop');
  }
  public set pktLenErrDrop(value: number) {
    this._pktLenErrDrop = value;
  }
  public resetPktLenErrDrop() {
    this._pktLenErrDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktLenErrDropInput() {
    return this._pktLenErrDrop;
  }

  // rate_limit_drop - computed: false, optional: true, required: false
  private _rateLimitDrop?: number; 
  public get rateLimitDrop() {
    return this.getNumberAttribute('rate_limit_drop');
  }
  public set rateLimitDrop(value: number) {
    this._rateLimitDrop = value;
  }
  public resetRateLimitDrop() {
    this._rateLimitDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitDropInput() {
    return this._rateLimitDrop;
  }

  // sby_session_create_fail - computed: false, optional: true, required: false
  private _sbySessionCreateFail?: number; 
  public get sbySessionCreateFail() {
    return this.getNumberAttribute('sby_session_create_fail');
  }
  public set sbySessionCreateFail(value: number) {
    this._sbySessionCreateFail = value;
  }
  public resetSbySessionCreateFail() {
    this._sbySessionCreateFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbySessionCreateFailInput() {
    return this._sbySessionCreateFail;
  }

  // sby_session_created - computed: false, optional: true, required: false
  private _sbySessionCreated?: number; 
  public get sbySessionCreated() {
    return this.getNumberAttribute('sby_session_created');
  }
  public set sbySessionCreated(value: number) {
    this._sbySessionCreated = value;
  }
  public resetSbySessionCreated() {
    this._sbySessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbySessionCreatedInput() {
    return this._sbySessionCreated;
  }

  // sby_session_update_fail - computed: false, optional: true, required: false
  private _sbySessionUpdateFail?: number; 
  public get sbySessionUpdateFail() {
    return this.getNumberAttribute('sby_session_update_fail');
  }
  public set sbySessionUpdateFail(value: number) {
    this._sbySessionUpdateFail = value;
  }
  public resetSbySessionUpdateFail() {
    this._sbySessionUpdateFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbySessionUpdateFailInput() {
    return this._sbySessionUpdateFail;
  }

  // sby_session_updated - computed: false, optional: true, required: false
  private _sbySessionUpdated?: number; 
  public get sbySessionUpdated() {
    return this.getNumberAttribute('sby_session_updated');
  }
  public set sbySessionUpdated(value: number) {
    this._sbySessionUpdated = value;
  }
  public resetSbySessionUpdated() {
    this._sbySessionUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbySessionUpdatedInput() {
    return this._sbySessionUpdated;
  }

  // sby_static_nat_cfg_not_found - computed: false, optional: true, required: false
  private _sbyStaticNatCfgNotFound?: number; 
  public get sbyStaticNatCfgNotFound() {
    return this.getNumberAttribute('sby_static_nat_cfg_not_found');
  }
  public set sbyStaticNatCfgNotFound(value: number) {
    this._sbyStaticNatCfgNotFound = value;
  }
  public resetSbyStaticNatCfgNotFound() {
    this._sbyStaticNatCfgNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sbyStaticNatCfgNotFoundInput() {
    return this._sbyStaticNatCfgNotFound;
  }

  // sctp_asconf_process_drop - computed: false, optional: true, required: false
  private _sctpAsconfProcessDrop?: number; 
  public get sctpAsconfProcessDrop() {
    return this.getNumberAttribute('sctp_asconf_process_drop');
  }
  public set sctpAsconfProcessDrop(value: number) {
    this._sctpAsconfProcessDrop = value;
  }
  public resetSctpAsconfProcessDrop() {
    this._sctpAsconfProcessDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpAsconfProcessDropInput() {
    return this._sctpAsconfProcessDrop;
  }

  // sctp_chunk_heart_beat_clubbed - computed: false, optional: true, required: false
  private _sctpChunkHeartBeatClubbed?: number; 
  public get sctpChunkHeartBeatClubbed() {
    return this.getNumberAttribute('sctp_chunk_heart_beat_clubbed');
  }
  public set sctpChunkHeartBeatClubbed(value: number) {
    this._sctpChunkHeartBeatClubbed = value;
  }
  public resetSctpChunkHeartBeatClubbed() {
    this._sctpChunkHeartBeatClubbed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpChunkHeartBeatClubbedInput() {
    return this._sctpChunkHeartBeatClubbed;
  }

  // sctp_chunk_type_abort - computed: false, optional: true, required: false
  private _sctpChunkTypeAbort?: number; 
  public get sctpChunkTypeAbort() {
    return this.getNumberAttribute('sctp_chunk_type_abort');
  }
  public set sctpChunkTypeAbort(value: number) {
    this._sctpChunkTypeAbort = value;
  }
  public resetSctpChunkTypeAbort() {
    this._sctpChunkTypeAbort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpChunkTypeAbortInput() {
    return this._sctpChunkTypeAbort;
  }

  // sctp_chunk_type_abort_data_drop - computed: false, optional: true, required: false
  private _sctpChunkTypeAbortDataDrop?: number; 
  public get sctpChunkTypeAbortDataDrop() {
    return this.getNumberAttribute('sctp_chunk_type_abort_data_drop');
  }
  public set sctpChunkTypeAbortDataDrop(value: number) {
    this._sctpChunkTypeAbortDataDrop = value;
  }
  public resetSctpChunkTypeAbortDataDrop() {
    this._sctpChunkTypeAbortDataDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpChunkTypeAbortDataDropInput() {
    return this._sctpChunkTypeAbortDataDrop;
  }

  // sctp_chunk_type_asconf - computed: false, optional: true, required: false
  private _sctpChunkTypeAsconf?: number; 
  public get sctpChunkTypeAsconf() {
    return this.getNumberAttribute('sctp_chunk_type_asconf');
  }
  public set sctpChunkTypeAsconf(value: number) {
    this._sctpChunkTypeAsconf = value;
  }
  public resetSctpChunkTypeAsconf() {
    this._sctpChunkTypeAsconf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpChunkTypeAsconfInput() {
    return this._sctpChunkTypeAsconf;
  }

  // sctp_chunk_type_asconf_ack - computed: false, optional: true, required: false
  private _sctpChunkTypeAsconfAck?: number; 
  public get sctpChunkTypeAsconfAck() {
    return this.getNumberAttribute('sctp_chunk_type_asconf_ack');
  }
  public set sctpChunkTypeAsconfAck(value: number) {
    this._sctpChunkTypeAsconfAck = value;
  }
  public resetSctpChunkTypeAsconfAck() {
    this._sctpChunkTypeAsconfAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpChunkTypeAsconfAckInput() {
    return this._sctpChunkTypeAsconfAck;
  }

  // sctp_chunk_type_cookie_ack - computed: false, optional: true, required: false
  private _sctpChunkTypeCookieAck?: number; 
  public get sctpChunkTypeCookieAck() {
    return this.getNumberAttribute('sctp_chunk_type_cookie_ack');
  }
  public set sctpChunkTypeCookieAck(value: number) {
    this._sctpChunkTypeCookieAck = value;
  }
  public resetSctpChunkTypeCookieAck() {
    this._sctpChunkTypeCookieAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpChunkTypeCookieAckInput() {
    return this._sctpChunkTypeCookieAck;
  }

  // sctp_chunk_type_cookie_echo - computed: false, optional: true, required: false
  private _sctpChunkTypeCookieEcho?: number; 
  public get sctpChunkTypeCookieEcho() {
    return this.getNumberAttribute('sctp_chunk_type_cookie_echo');
  }
  public set sctpChunkTypeCookieEcho(value: number) {
    this._sctpChunkTypeCookieEcho = value;
  }
  public resetSctpChunkTypeCookieEcho() {
    this._sctpChunkTypeCookieEcho = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpChunkTypeCookieEchoInput() {
    return this._sctpChunkTypeCookieEcho;
  }

  // sctp_chunk_type_data - computed: false, optional: true, required: false
  private _sctpChunkTypeData?: number; 
  public get sctpChunkTypeData() {
    return this.getNumberAttribute('sctp_chunk_type_data');
  }
  public set sctpChunkTypeData(value: number) {
    this._sctpChunkTypeData = value;
  }
  public resetSctpChunkTypeData() {
    this._sctpChunkTypeData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpChunkTypeDataInput() {
    return this._sctpChunkTypeData;
  }

  // sctp_chunk_type_error_op - computed: false, optional: true, required: false
  private _sctpChunkTypeErrorOp?: number; 
  public get sctpChunkTypeErrorOp() {
    return this.getNumberAttribute('sctp_chunk_type_error_op');
  }
  public set sctpChunkTypeErrorOp(value: number) {
    this._sctpChunkTypeErrorOp = value;
  }
  public resetSctpChunkTypeErrorOp() {
    this._sctpChunkTypeErrorOp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpChunkTypeErrorOpInput() {
    return this._sctpChunkTypeErrorOp;
  }

  // sctp_chunk_type_heartbeat - computed: false, optional: true, required: false
  private _sctpChunkTypeHeartbeat?: number; 
  public get sctpChunkTypeHeartbeat() {
    return this.getNumberAttribute('sctp_chunk_type_heartbeat');
  }
  public set sctpChunkTypeHeartbeat(value: number) {
    this._sctpChunkTypeHeartbeat = value;
  }
  public resetSctpChunkTypeHeartbeat() {
    this._sctpChunkTypeHeartbeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpChunkTypeHeartbeatInput() {
    return this._sctpChunkTypeHeartbeat;
  }

  // sctp_chunk_type_heartbeat_ack - computed: false, optional: true, required: false
  private _sctpChunkTypeHeartbeatAck?: number; 
  public get sctpChunkTypeHeartbeatAck() {
    return this.getNumberAttribute('sctp_chunk_type_heartbeat_ack');
  }
  public set sctpChunkTypeHeartbeatAck(value: number) {
    this._sctpChunkTypeHeartbeatAck = value;
  }
  public resetSctpChunkTypeHeartbeatAck() {
    this._sctpChunkTypeHeartbeatAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpChunkTypeHeartbeatAckInput() {
    return this._sctpChunkTypeHeartbeatAck;
  }

  // sctp_chunk_type_init - computed: false, optional: true, required: false
  private _sctpChunkTypeInit?: number; 
  public get sctpChunkTypeInit() {
    return this.getNumberAttribute('sctp_chunk_type_init');
  }
  public set sctpChunkTypeInit(value: number) {
    this._sctpChunkTypeInit = value;
  }
  public resetSctpChunkTypeInit() {
    this._sctpChunkTypeInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpChunkTypeInitInput() {
    return this._sctpChunkTypeInit;
  }

  // sctp_chunk_type_init_ack - computed: false, optional: true, required: false
  private _sctpChunkTypeInitAck?: number; 
  public get sctpChunkTypeInitAck() {
    return this.getNumberAttribute('sctp_chunk_type_init_ack');
  }
  public set sctpChunkTypeInitAck(value: number) {
    this._sctpChunkTypeInitAck = value;
  }
  public resetSctpChunkTypeInitAck() {
    this._sctpChunkTypeInitAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpChunkTypeInitAckInput() {
    return this._sctpChunkTypeInitAck;
  }

  // sctp_chunk_type_init_ack_drop - computed: false, optional: true, required: false
  private _sctpChunkTypeInitAckDrop?: number; 
  public get sctpChunkTypeInitAckDrop() {
    return this.getNumberAttribute('sctp_chunk_type_init_ack_drop');
  }
  public set sctpChunkTypeInitAckDrop(value: number) {
    this._sctpChunkTypeInitAckDrop = value;
  }
  public resetSctpChunkTypeInitAckDrop() {
    this._sctpChunkTypeInitAckDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpChunkTypeInitAckDropInput() {
    return this._sctpChunkTypeInitAckDrop;
  }

  // sctp_chunk_type_init_drop - computed: false, optional: true, required: false
  private _sctpChunkTypeInitDrop?: number; 
  public get sctpChunkTypeInitDrop() {
    return this.getNumberAttribute('sctp_chunk_type_init_drop');
  }
  public set sctpChunkTypeInitDrop(value: number) {
    this._sctpChunkTypeInitDrop = value;
  }
  public resetSctpChunkTypeInitDrop() {
    this._sctpChunkTypeInitDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpChunkTypeInitDropInput() {
    return this._sctpChunkTypeInitDrop;
  }

  // sctp_chunk_type_other - computed: false, optional: true, required: false
  private _sctpChunkTypeOther?: number; 
  public get sctpChunkTypeOther() {
    return this.getNumberAttribute('sctp_chunk_type_other');
  }
  public set sctpChunkTypeOther(value: number) {
    this._sctpChunkTypeOther = value;
  }
  public resetSctpChunkTypeOther() {
    this._sctpChunkTypeOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpChunkTypeOtherInput() {
    return this._sctpChunkTypeOther;
  }

  // sctp_chunk_type_sack - computed: false, optional: true, required: false
  private _sctpChunkTypeSack?: number; 
  public get sctpChunkTypeSack() {
    return this.getNumberAttribute('sctp_chunk_type_sack');
  }
  public set sctpChunkTypeSack(value: number) {
    this._sctpChunkTypeSack = value;
  }
  public resetSctpChunkTypeSack() {
    this._sctpChunkTypeSack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpChunkTypeSackInput() {
    return this._sctpChunkTypeSack;
  }

  // sctp_chunk_type_shutdown - computed: false, optional: true, required: false
  private _sctpChunkTypeShutdown?: number; 
  public get sctpChunkTypeShutdown() {
    return this.getNumberAttribute('sctp_chunk_type_shutdown');
  }
  public set sctpChunkTypeShutdown(value: number) {
    this._sctpChunkTypeShutdown = value;
  }
  public resetSctpChunkTypeShutdown() {
    this._sctpChunkTypeShutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpChunkTypeShutdownInput() {
    return this._sctpChunkTypeShutdown;
  }

  // sctp_chunk_type_shutdown_ack - computed: false, optional: true, required: false
  private _sctpChunkTypeShutdownAck?: number; 
  public get sctpChunkTypeShutdownAck() {
    return this.getNumberAttribute('sctp_chunk_type_shutdown_ack');
  }
  public set sctpChunkTypeShutdownAck(value: number) {
    this._sctpChunkTypeShutdownAck = value;
  }
  public resetSctpChunkTypeShutdownAck() {
    this._sctpChunkTypeShutdownAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpChunkTypeShutdownAckInput() {
    return this._sctpChunkTypeShutdownAck;
  }

  // sctp_chunk_type_shutdown_complete - computed: false, optional: true, required: false
  private _sctpChunkTypeShutdownComplete?: number; 
  public get sctpChunkTypeShutdownComplete() {
    return this.getNumberAttribute('sctp_chunk_type_shutdown_complete');
  }
  public set sctpChunkTypeShutdownComplete(value: number) {
    this._sctpChunkTypeShutdownComplete = value;
  }
  public resetSctpChunkTypeShutdownComplete() {
    this._sctpChunkTypeShutdownComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpChunkTypeShutdownCompleteInput() {
    return this._sctpChunkTypeShutdownComplete;
  }

  // sctp_chunk_type_shutdown_complete_drop - computed: false, optional: true, required: false
  private _sctpChunkTypeShutdownCompleteDrop?: number; 
  public get sctpChunkTypeShutdownCompleteDrop() {
    return this.getNumberAttribute('sctp_chunk_type_shutdown_complete_drop');
  }
  public set sctpChunkTypeShutdownCompleteDrop(value: number) {
    this._sctpChunkTypeShutdownCompleteDrop = value;
  }
  public resetSctpChunkTypeShutdownCompleteDrop() {
    this._sctpChunkTypeShutdownCompleteDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpChunkTypeShutdownCompleteDropInput() {
    return this._sctpChunkTypeShutdownCompleteDrop;
  }

  // sctp_data_no_ext_match - computed: false, optional: true, required: false
  private _sctpDataNoExtMatch?: number; 
  public get sctpDataNoExtMatch() {
    return this.getNumberAttribute('sctp_data_no_ext_match');
  }
  public set sctpDataNoExtMatch(value: number) {
    this._sctpDataNoExtMatch = value;
  }
  public resetSctpDataNoExtMatch() {
    this._sctpDataNoExtMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpDataNoExtMatchInput() {
    return this._sctpDataNoExtMatch;
  }

  // sctp_data_no_tuple - computed: false, optional: true, required: false
  private _sctpDataNoTuple?: number; 
  public get sctpDataNoTuple() {
    return this.getNumberAttribute('sctp_data_no_tuple');
  }
  public set sctpDataNoTuple(value: number) {
    this._sctpDataNoTuple = value;
  }
  public resetSctpDataNoTuple() {
    this._sctpDataNoTuple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpDataNoTupleInput() {
    return this._sctpDataNoTuple;
  }

  // sctp_fw_session_created - computed: false, optional: true, required: false
  private _sctpFwSessionCreated?: number; 
  public get sctpFwSessionCreated() {
    return this.getNumberAttribute('sctp_fw_session_created');
  }
  public set sctpFwSessionCreated(value: number) {
    this._sctpFwSessionCreated = value;
  }
  public resetSctpFwSessionCreated() {
    this._sctpFwSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpFwSessionCreatedInput() {
    return this._sctpFwSessionCreated;
  }

  // sctp_fw_session_deleted - computed: false, optional: true, required: false
  private _sctpFwSessionDeleted?: number; 
  public get sctpFwSessionDeleted() {
    return this.getNumberAttribute('sctp_fw_session_deleted');
  }
  public set sctpFwSessionDeleted(value: number) {
    this._sctpFwSessionDeleted = value;
  }
  public resetSctpFwSessionDeleted() {
    this._sctpFwSessionDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpFwSessionDeletedInput() {
    return this._sctpFwSessionDeleted;
  }

  // sctp_heartbeat_no_tuple - computed: false, optional: true, required: false
  private _sctpHeartbeatNoTuple?: number; 
  public get sctpHeartbeatNoTuple() {
    return this.getNumberAttribute('sctp_heartbeat_no_tuple');
  }
  public set sctpHeartbeatNoTuple(value: number) {
    this._sctpHeartbeatNoTuple = value;
  }
  public resetSctpHeartbeatNoTuple() {
    this._sctpHeartbeatNoTuple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpHeartbeatNoTupleInput() {
    return this._sctpHeartbeatNoTuple;
  }

  // sctp_init_vtag_zero_drop - computed: false, optional: true, required: false
  private _sctpInitVtagZeroDrop?: number; 
  public get sctpInitVtagZeroDrop() {
    return this.getNumberAttribute('sctp_init_vtag_zero_drop');
  }
  public set sctpInitVtagZeroDrop(value: number) {
    this._sctpInitVtagZeroDrop = value;
  }
  public resetSctpInitVtagZeroDrop() {
    this._sctpInitVtagZeroDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpInitVtagZeroDropInput() {
    return this._sctpInitVtagZeroDrop;
  }

  // sctp_no_ext_match - computed: false, optional: true, required: false
  private _sctpNoExtMatch?: number; 
  public get sctpNoExtMatch() {
    return this.getNumberAttribute('sctp_no_ext_match');
  }
  public set sctpNoExtMatch(value: number) {
    this._sctpNoExtMatch = value;
  }
  public resetSctpNoExtMatch() {
    this._sctpNoExtMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpNoExtMatchInput() {
    return this._sctpNoExtMatch;
  }

  // sctp_reroute_failover - computed: false, optional: true, required: false
  private _sctpRerouteFailover?: number; 
  public get sctpRerouteFailover() {
    return this.getNumberAttribute('sctp_reroute_failover');
  }
  public set sctpRerouteFailover(value: number) {
    this._sctpRerouteFailover = value;
  }
  public resetSctpRerouteFailover() {
    this._sctpRerouteFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpRerouteFailoverInput() {
    return this._sctpRerouteFailover;
  }

  // sctp_retx_init - computed: false, optional: true, required: false
  private _sctpRetxInit?: number; 
  public get sctpRetxInit() {
    return this.getNumberAttribute('sctp_retx_init');
  }
  public set sctpRetxInit(value: number) {
    this._sctpRetxInit = value;
  }
  public resetSctpRetxInit() {
    this._sctpRetxInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpRetxInitInput() {
    return this._sctpRetxInit;
  }

  // sctp_retx_init_ack - computed: false, optional: true, required: false
  private _sctpRetxInitAck?: number; 
  public get sctpRetxInitAck() {
    return this.getNumberAttribute('sctp_retx_init_ack');
  }
  public set sctpRetxInitAck(value: number) {
    this._sctpRetxInitAck = value;
  }
  public resetSctpRetxInitAck() {
    this._sctpRetxInitAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpRetxInitAckInput() {
    return this._sctpRetxInitAck;
  }

  // sctp_retx_init_ack_drop - computed: false, optional: true, required: false
  private _sctpRetxInitAckDrop?: number; 
  public get sctpRetxInitAckDrop() {
    return this.getNumberAttribute('sctp_retx_init_ack_drop');
  }
  public set sctpRetxInitAckDrop(value: number) {
    this._sctpRetxInitAckDrop = value;
  }
  public resetSctpRetxInitAckDrop() {
    this._sctpRetxInitAckDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpRetxInitAckDropInput() {
    return this._sctpRetxInitAckDrop;
  }

  // sctp_retx_init_drop - computed: false, optional: true, required: false
  private _sctpRetxInitDrop?: number; 
  public get sctpRetxInitDrop() {
    return this.getNumberAttribute('sctp_retx_init_drop');
  }
  public set sctpRetxInitDrop(value: number) {
    this._sctpRetxInitDrop = value;
  }
  public resetSctpRetxInitDrop() {
    this._sctpRetxInitDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpRetxInitDropInput() {
    return this._sctpRetxInitDrop;
  }

  // sctp_route_err_drop - computed: false, optional: true, required: false
  private _sctpRouteErrDrop?: number; 
  public get sctpRouteErrDrop() {
    return this.getNumberAttribute('sctp_route_err_drop');
  }
  public set sctpRouteErrDrop(value: number) {
    this._sctpRouteErrDrop = value;
  }
  public resetSctpRouteErrDrop() {
    this._sctpRouteErrDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpRouteErrDropInput() {
    return this._sctpRouteErrDrop;
  }

  // sctp_route_err_heartbeat_drop - computed: false, optional: true, required: false
  private _sctpRouteErrHeartbeatDrop?: number; 
  public get sctpRouteErrHeartbeatDrop() {
    return this.getNumberAttribute('sctp_route_err_heartbeat_drop');
  }
  public set sctpRouteErrHeartbeatDrop(value: number) {
    this._sctpRouteErrHeartbeatDrop = value;
  }
  public resetSctpRouteErrHeartbeatDrop() {
    this._sctpRouteErrHeartbeatDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpRouteErrHeartbeatDropInput() {
    return this._sctpRouteErrHeartbeatDrop;
  }

  // sctp_static_nat_session_created - computed: false, optional: true, required: false
  private _sctpStaticNatSessionCreated?: number; 
  public get sctpStaticNatSessionCreated() {
    return this.getNumberAttribute('sctp_static_nat_session_created');
  }
  public set sctpStaticNatSessionCreated(value: number) {
    this._sctpStaticNatSessionCreated = value;
  }
  public resetSctpStaticNatSessionCreated() {
    this._sctpStaticNatSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpStaticNatSessionCreatedInput() {
    return this._sctpStaticNatSessionCreated;
  }

  // sctp_static_nat_session_deleted - computed: false, optional: true, required: false
  private _sctpStaticNatSessionDeleted?: number; 
  public get sctpStaticNatSessionDeleted() {
    return this.getNumberAttribute('sctp_static_nat_session_deleted');
  }
  public set sctpStaticNatSessionDeleted(value: number) {
    this._sctpStaticNatSessionDeleted = value;
  }
  public resetSctpStaticNatSessionDeleted() {
    this._sctpStaticNatSessionDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sctpStaticNatSessionDeletedInput() {
    return this._sctpStaticNatSessionDeleted;
  }

  // static_nat_cfg_not_found - computed: false, optional: true, required: false
  private _staticNatCfgNotFound?: number; 
  public get staticNatCfgNotFound() {
    return this.getNumberAttribute('static_nat_cfg_not_found');
  }
  public set staticNatCfgNotFound(value: number) {
    this._staticNatCfgNotFound = value;
  }
  public resetStaticNatCfgNotFound() {
    this._staticNatCfgNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNatCfgNotFoundInput() {
    return this._staticNatCfgNotFound;
  }

  // vrrp_standby_drop - computed: false, optional: true, required: false
  private _vrrpStandbyDrop?: number; 
  public get vrrpStandbyDrop() {
    return this.getNumberAttribute('vrrp_standby_drop');
  }
  public set vrrpStandbyDrop(value: number) {
    this._vrrpStandbyDrop = value;
  }
  public resetVrrpStandbyDrop() {
    this._vrrpStandbyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrrpStandbyDropInput() {
    return this._vrrpStandbyDrop;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats thunder_sctp_global_stats}
*/
export class DataThunderSctpGlobalStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_sctp_global_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSctpGlobalStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSctpGlobalStats to import
  * @param importFromId The id of the existing DataThunderSctpGlobalStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSctpGlobalStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_sctp_global_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sctp_global_stats thunder_sctp_global_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSctpGlobalStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSctpGlobalStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_sctp_global_stats',
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
  private _stats = new DataThunderSctpGlobalStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSctpGlobalStatsStats) {
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
      stats: dataThunderSctpGlobalStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSctpGlobalStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSctpGlobalStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
