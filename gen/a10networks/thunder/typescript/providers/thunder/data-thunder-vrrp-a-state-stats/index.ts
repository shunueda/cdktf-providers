// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVrrpAStateStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#id DataThunderVrrpAStateStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#stats DataThunderVrrpAStateStats#stats}
  */
  readonly stats?: DataThunderVrrpAStateStatsStats;
}
export interface DataThunderVrrpAStateStatsStats {
  /**
  * DNS Cache Sync Create Received counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#dns_cache_sync_rx_create_counter DataThunderVrrpAStateStats#dns_cache_sync_rx_create_counter}
  */
  readonly dnsCacheSyncRxCreateCounter?: number;
  /**
  * DNS Cache Sync Del Received counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#dns_cache_sync_rx_del_counter DataThunderVrrpAStateStats#dns_cache_sync_rx_del_counter}
  */
  readonly dnsCacheSyncRxDelCounter?: number;
  /**
  * DNS Cache Sync Error Received counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#dns_cache_sync_rx_error_counter DataThunderVrrpAStateStats#dns_cache_sync_rx_error_counter}
  */
  readonly dnsCacheSyncRxErrorCounter?: number;
  /**
  * DNS Cache Sync Frag Received counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#dns_cache_sync_rx_frag_counter DataThunderVrrpAStateStats#dns_cache_sync_rx_frag_counter}
  */
  readonly dnsCacheSyncRxFragCounter?: number;
  /**
  * DNS Cache Sync Create Sent counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#dns_cache_sync_tx_create_counter DataThunderVrrpAStateStats#dns_cache_sync_tx_create_counter}
  */
  readonly dnsCacheSyncTxCreateCounter?: number;
  /**
  * DNS Cache Sync Del Sent counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#dns_cache_sync_tx_del_counter DataThunderVrrpAStateStats#dns_cache_sync_tx_del_counter}
  */
  readonly dnsCacheSyncTxDelCounter?: number;
  /**
  * DNS Cache Sync Error Sent counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#dns_cache_sync_tx_error_counter DataThunderVrrpAStateStats#dns_cache_sync_tx_error_counter}
  */
  readonly dnsCacheSyncTxErrorCounter?: number;
  /**
  * DNS Cache Sync Frag Sent counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#dns_cache_sync_tx_frag_counter DataThunderVrrpAStateStats#dns_cache_sync_tx_frag_counter}
  */
  readonly dnsCacheSyncTxFragCounter?: number;
  /**
  * Conn Query Invalid Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#query_pkt_invalid_idx_counter DataThunderVrrpAStateStats#query_pkt_invalid_idx_counter}
  */
  readonly queryPktInvalidIdxCounter?: number;
  /**
  * Conn Sync drop sending packet for invalid receiving ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#query_pkt_no_receiving_ip_counter DataThunderVrrpAStateStats#query_pkt_no_receiving_ip_counter}
  */
  readonly queryPktNoReceivingIpCounter?: number;
  /**
  * Conn Query Received counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#query_pkt_rcv_counter DataThunderVrrpAStateStats#query_pkt_rcv_counter}
  */
  readonly queryPktRcvCounter?: number;
  /**
  * Conn Query sent counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#query_pkt_tx_counter DataThunderVrrpAStateStats#query_pkt_tx_counter}
  */
  readonly queryPktTxCounter?: number;
  /**
  * Conn Query Packet Full
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#query_rx_full_info_counter DataThunderVrrpAStateStats#query_rx_full_info_counter}
  */
  readonly queryRxFullInfoCounter?: number;
  /**
  * Conn Sync receive query packet with invalid ha group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#query_rx_invalid_ha_group_counter DataThunderVrrpAStateStats#query_rx_invalid_ha_group_counter}
  */
  readonly queryRxInvalidHaGroupCounter?: number;
  /**
  * Conn Sync receive query packet with invalid message dir
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#query_rx_invalid_msg_dir_counter DataThunderVrrpAStateStats#query_rx_invalid_msg_dir_counter}
  */
  readonly queryRxInvalidMsgDirCounter?: number;
  /**
  * Conn Sync receive query packet with invalid partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#query_rx_invalid_partition_counter DataThunderVrrpAStateStats#query_rx_invalid_partition_counter}
  */
  readonly queryRxInvalidPartitionCounter?: number;
  /**
  * Conn Sync receive query packet with invalid sync version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#query_rx_invalid_sync_version_counter DataThunderVrrpAStateStats#query_rx_invalid_sync_version_counter}
  */
  readonly queryRxInvalidSyncVersionCounter?: number;
  /**
  * Conn Query Unknown Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#query_rx_unk_counter DataThunderVrrpAStateStats#query_rx_unk_counter}
  */
  readonly queryRxUnkCounter?: number;
  /**
  * Conn Query Packet Empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#query_rx_zero_info_counter DataThunderVrrpAStateStats#query_rx_zero_info_counter}
  */
  readonly queryRxZeroInfoCounter?: number;
  /**
  * Conn Query Get Buff Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#query_tx_get_buff_failed DataThunderVrrpAStateStats#query_tx_get_buff_failed}
  */
  readonly queryTxGetBuffFailed?: number;
  /**
  * Max Query Msg Per Packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#query_tx_max_packed DataThunderVrrpAStateStats#query_tx_max_packed}
  */
  readonly queryTxMaxPacked?: number;
  /**
  * Min Query Msg Per Packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#query_tx_min_packed DataThunderVrrpAStateStats#query_tx_min_packed}
  */
  readonly queryTxMinPacked?: number;
  /**
  * Conn Sync LSN Fullcone Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_err_lsn_fullcone DataThunderVrrpAStateStats#sync_err_lsn_fullcone}
  */
  readonly syncErrLsnFullcone?: number;
  /**
  * Conn Sync Get Buff Failure Wrong Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_get_buff_failed_port DataThunderVrrpAStateStats#sync_get_buff_failed_port}
  */
  readonly syncGetBuffFailedPort?: number;
  /**
  * Conn Sync Get Buff Failure No Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_get_buff_failed_rt DataThunderVrrpAStateStats#sync_get_buff_failed_rt}
  */
  readonly syncGetBuffFailedRt?: number;
  /**
  * Persist Conn Sync Process Mandatory Invalid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_persist_rx_cannot_process_mandatory DataThunderVrrpAStateStats#sync_persist_rx_cannot_process_mandatory}
  */
  readonly syncPersistRxCannotProcessMandatory?: number;
  /**
  * Persist Conn Sync Get Conn Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_persist_rx_conn_get_failed DataThunderVrrpAStateStats#sync_persist_rx_conn_get_failed}
  */
  readonly syncPersistRxConnGetFailed?: number;
  /**
  * Persist Conn Sync Proc Ext Bit Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_persist_rx_ext_bit_process_error DataThunderVrrpAStateStats#sync_persist_rx_ext_bit_process_error}
  */
  readonly syncPersistRxExtBitProcessError?: number;
  /**
  * Persist Conn Sync Length Invalid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_persist_rx_len_invalid DataThunderVrrpAStateStats#sync_persist_rx_len_invalid}
  */
  readonly syncPersistRxLenInvalid?: number;
  /**
  * Persist Conn Sync No Service Group Info Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_persist_rx_no_sg_group_info DataThunderVrrpAStateStats#sync_persist_rx_no_sg_group_info}
  */
  readonly syncPersistRxNoSgGroupInfo?: number;
  /**
  * Persist Conn Sync Real Port Not Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_persist_rx_no_such_rport DataThunderVrrpAStateStats#sync_persist_rx_no_such_rport}
  */
  readonly syncPersistRxNoSuchRport?: number;
  /**
  * Persist Conn Sync No Service Group Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_persist_rx_no_such_sg_group DataThunderVrrpAStateStats#sync_persist_rx_no_such_sg_group}
  */
  readonly syncPersistRxNoSuchSgGroup?: number;
  /**
  * Persist Conn Sync Virt Port Not Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_persist_rx_no_such_vport DataThunderVrrpAStateStats#sync_persist_rx_no_such_vport}
  */
  readonly syncPersistRxNoSuchVport?: number;
  /**
  * Persist Conn Sync Protocol Invalid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_persist_rx_proto_not_supported DataThunderVrrpAStateStats#sync_persist_rx_proto_not_supported}
  */
  readonly syncPersistRxProtoNotSupported?: number;
  /**
  * Persist Conn Sync Type Invalid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_persist_rx_type_invalid DataThunderVrrpAStateStats#sync_persist_rx_type_invalid}
  */
  readonly syncPersistRxTypeInvalid?: number;
  /**
  * Persist Conn Sync Virt Port Type Invalid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_persist_rx_vporttype_not_supported DataThunderVrrpAStateStats#sync_persist_rx_vporttype_not_supported}
  */
  readonly syncPersistRxVporttypeNotSupported?: number;
  /**
  * Conn Sync drop sending packet for empty buffer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_pkt_empty_buff_counter DataThunderVrrpAStateStats#sync_pkt_empty_buff_counter}
  */
  readonly syncPktEmptyBuffCounter?: number;
  /**
  * Conn Sync drop sending packet for failure in sending buffer copy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_pkt_failed_buff_copy_counter DataThunderVrrpAStateStats#sync_pkt_failed_buff_copy_counter}
  */
  readonly syncPktFailedBuffCopyCounter?: number;
  /**
  * Conn Sync Invalid Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_pkt_invalid_idx_counter DataThunderVrrpAStateStats#sync_pkt_invalid_idx_counter}
  */
  readonly syncPktInvalidIdxCounter?: number;
  /**
  * Conn Sync drop sending packet for invalid receiving virtual group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_pkt_no_receiving_vgrp_counter DataThunderVrrpAStateStats#sync_pkt_no_receiving_vgrp_counter}
  */
  readonly syncPktNoReceivingVgrpCounter?: number;
  /**
  * Conn Sync drop sending packet for invalid sending virtual group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_pkt_no_sending_vgrp_counter DataThunderVrrpAStateStats#sync_pkt_no_sending_vgrp_counter}
  */
  readonly syncPktNoSendingVgrpCounter?: number;
  /**
  * Conn Sync Received counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_pkt_rcv_counter DataThunderVrrpAStateStats#sync_pkt_rcv_counter}
  */
  readonly syncPktRcvCounter?: number;
  /**
  * Conn Sync Sent counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_pkt_tx_counter DataThunderVrrpAStateStats#sync_pkt_tx_counter}
  */
  readonly syncPktTxCounter?: number;
  /**
  * Conn Sync query forward CPU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_query_dcmsg_counter DataThunderVrrpAStateStats#sync_query_dcmsg_counter}
  */
  readonly syncQueryDcmsgCounter?: number;
  /**
  * Conn Sync receive packet with aflex create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_aflex_create_counter DataThunderVrrpAStateStats#sync_rx_aflex_create_counter}
  */
  readonly syncRxAflexCreateCounter?: number;
  /**
  * Conn Sync receive packet with aflex delete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_aflex_del_counter DataThunderVrrpAStateStats#sync_rx_aflex_del_counter}
  */
  readonly syncRxAflexDelCounter?: number;
  /**
  * Conn Sync receive packet with aflex fragment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_aflex_frag_counter DataThunderVrrpAStateStats#sync_rx_aflex_frag_counter}
  */
  readonly syncRxAflexFragCounter?: number;
  /**
  * Sync receive packet with aflex table entry add
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_aflex_table_entry_add_counter DataThunderVrrpAStateStats#sync_rx_aflex_table_entry_add_counter}
  */
  readonly syncRxAflexTableEntryAddCounter?: number;
  /**
  * Sync receive packet with aflex table entry append
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_aflex_table_entry_append_counter DataThunderVrrpAStateStats#sync_rx_aflex_table_entry_append_counter}
  */
  readonly syncRxAflexTableEntryAppendCounter?: number;
  /**
  * Sync receive packet with aflex table entry delete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_aflex_table_entry_delete_counter DataThunderVrrpAStateStats#sync_rx_aflex_table_entry_delete_counter}
  */
  readonly syncRxAflexTableEntryDeleteCounter?: number;
  /**
  * Sync receive packet with aflex table entry fast sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_aflex_table_entry_fastsync_counter DataThunderVrrpAStateStats#sync_rx_aflex_table_entry_fastsync_counter}
  */
  readonly syncRxAflexTableEntryFastsyncCounter?: number;
  /**
  * Sync receive packet with aflex table entry incr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_aflex_table_entry_incr_counter DataThunderVrrpAStateStats#sync_rx_aflex_table_entry_incr_counter}
  */
  readonly syncRxAflexTableEntryIncrCounter?: number;
  /**
  * Sync receive packet with aflex table entry lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_aflex_table_entry_lifetime_counter DataThunderVrrpAStateStats#sync_rx_aflex_table_entry_lifetime_counter}
  */
  readonly syncRxAflexTableEntryLifetimeCounter?: number;
  /**
  * Sync receive packet with aflex table entry lookup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_aflex_table_entry_lookup_counter DataThunderVrrpAStateStats#sync_rx_aflex_table_entry_lookup_counter}
  */
  readonly syncRxAflexTableEntryLookupCounter?: number;
  /**
  * Sync receive packet with aflex table entry replace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_aflex_table_entry_replace_counter DataThunderVrrpAStateStats#sync_rx_aflex_table_entry_replace_counter}
  */
  readonly syncRxAflexTableEntryReplaceCounter?: number;
  /**
  * Sync receive packet with aflex table entry set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_aflex_table_entry_set_counter DataThunderVrrpAStateStats#sync_rx_aflex_table_entry_set_counter}
  */
  readonly syncRxAflexTableEntrySetCounter?: number;
  /**
  * Sync receive packet with aflex table entry timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_aflex_table_entry_timeout_counter DataThunderVrrpAStateStats#sync_rx_aflex_table_entry_timeout_counter}
  */
  readonly syncRxAflexTableEntryTimeoutCounter?: number;
  /**
  * Conn Sync receive packet with aflex update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_aflex_update_counter DataThunderVrrpAStateStats#sync_rx_aflex_update_counter}
  */
  readonly syncRxAflexUpdateCounter?: number;
  /**
  * Conn Sync App Type Invalid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_apptype_not_supported DataThunderVrrpAStateStats#sync_rx_apptype_not_supported}
  */
  readonly syncRxApptypeNotSupported?: number;
  /**
  * Conn Sync receive packet with bad protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_bad_protocol_counter DataThunderVrrpAStateStats#sync_rx_bad_protocol_counter}
  */
  readonly syncRxBadProtocolCounter?: number;
  /**
  * Conn Sync receive packet by inactive peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_by_inactive_peer_counter DataThunderVrrpAStateStats#sync_rx_by_inactive_peer_counter}
  */
  readonly syncRxByInactivePeerCounter?: number;
  /**
  * Conn Sync Process Mandatory Invalid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_cannot_process_mandatory DataThunderVrrpAStateStats#sync_rx_cannot_process_mandatory}
  */
  readonly syncRxCannotProcessMandatory?: number;
  /**
  * Conn Sync Create Conn Exists
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_conn_exists DataThunderVrrpAStateStats#sync_rx_conn_exists}
  */
  readonly syncRxConnExists?: number;
  /**
  * Conn Sync Get Conn Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_conn_get_failed DataThunderVrrpAStateStats#sync_rx_conn_get_failed}
  */
  readonly syncRxConnGetFailed?: number;
  /**
  * Conn Sync Create Session Received counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_create_counter DataThunderVrrpAStateStats#sync_rx_create_counter}
  */
  readonly syncRxCreateCounter?: number;
  /**
  * Conn Sync Create with Ext Received counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_create_ext_bit_counter DataThunderVrrpAStateStats#sync_rx_create_ext_bit_counter}
  */
  readonly syncRxCreateExtBitCounter?: number;
  /**
  * Conn Sync Create Static Standby
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_create_static_sby DataThunderVrrpAStateStats#sync_rx_create_static_sby}
  */
  readonly syncRxCreateStaticSby?: number;
  /**
  * Conn Sync forward CPU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_dcmsg_counter DataThunderVrrpAStateStats#sync_rx_dcmsg_counter}
  */
  readonly syncRxDcmsgCounter?: number;
  /**
  * Conn Sync receive ddos protect packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_ddos_drop_counter DataThunderVrrpAStateStats#sync_rx_ddos_drop_counter}
  */
  readonly syncRxDdosDropCounter?: number;
  /**
  * Conn Sync Del Session Received counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_del_counter DataThunderVrrpAStateStats#sync_rx_del_counter}
  */
  readonly syncRxDelCounter?: number;
  /**
  * Conn Sync Del Conn not Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_del_no_such_session DataThunderVrrpAStateStats#sync_rx_del_no_such_session}
  */
  readonly syncRxDelNoSuchSession?: number;
  /**
  * Conn Sync rcv established state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_estab_counter DataThunderVrrpAStateStats#sync_rx_estab_counter}
  */
  readonly syncRxEstabCounter?: number;
  /**
  * Conn Sync Proc Ext Bit Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_ext_bit_process_error DataThunderVrrpAStateStats#sync_rx_ext_bit_process_error}
  */
  readonly syncRxExtBitProcessError?: number;
  /**
  * Conn Sync FIREWALL session logging information Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_ext_dcfw_log DataThunderVrrpAStateStats#sync_rx_ext_dcfw_log}
  */
  readonly syncRxExtDcfwLog?: number;
  /**
  * Conn Sync FIREWALL session rule ID information Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_ext_dcfw_rule_id DataThunderVrrpAStateStats#sync_rx_ext_dcfw_rule_id}
  */
  readonly syncRxExtDcfwRuleId?: number;
  /**
  * Conn Sync FIREWALL session rule idle timeout information Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_ext_dcfw_rule_idle_timeout DataThunderVrrpAStateStats#sync_rx_ext_dcfw_rule_idle_timeout}
  */
  readonly syncRxExtDcfwRuleIdleTimeout?: number;
  /**
  * Conn Sync FIREWALL application information Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_ext_fw_apps DataThunderVrrpAStateStats#sync_rx_ext_fw_apps}
  */
  readonly syncRxExtFwApps?: number;
  /**
  * FW GTP Echo Ext Info Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_ext_fw_gtp_echo_ext_info DataThunderVrrpAStateStats#sync_rx_ext_fw_gtp_echo_ext_info}
  */
  readonly syncRxExtFwGtpEchoExtInfo?: number;
  /**
  * FW GTP Ext Info Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_ext_fw_gtp_ext_info DataThunderVrrpAStateStats#sync_rx_ext_fw_gtp_ext_info}
  */
  readonly syncRxExtFwGtpExtInfo?: number;
  /**
  * FW GTP Info Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_ext_fw_gtp_info DataThunderVrrpAStateStats#sync_rx_ext_fw_gtp_info}
  */
  readonly syncRxExtFwGtpInfo?: number;
  /**
  * FW GTP Ext Log Info Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_ext_fw_gtp_log_ext_info DataThunderVrrpAStateStats#sync_rx_ext_fw_gtp_log_ext_info}
  */
  readonly syncRxExtFwGtpLogExtInfo?: number;
  /**
  * FW GTP Log Info Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_ext_fw_gtp_log_info DataThunderVrrpAStateStats#sync_rx_ext_fw_gtp_log_info}
  */
  readonly syncRxExtFwGtpLogInfo?: number;
  /**
  * FW GTP U Info Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_ext_fw_gtp_u_info DataThunderVrrpAStateStats#sync_rx_ext_fw_gtp_u_info}
  */
  readonly syncRxExtFwGtpUInfo?: number;
  /**
  * FW HTTP Logging Sync Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_ext_fw_http_logging DataThunderVrrpAStateStats#sync_rx_ext_fw_http_logging}
  */
  readonly syncRxExtFwHttpLogging?: number;
  /**
  * Sync FW Limit Entry Info Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_ext_fw_limit_entry DataThunderVrrpAStateStats#sync_rx_ext_fw_limit_entry}
  */
  readonly syncRxExtFwLimitEntry?: number;
  /**
  * FW Scaleout Shadow Ext Info Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_ext_fw_so_shadow_ext_info DataThunderVrrpAStateStats#sync_rx_ext_fw_so_shadow_ext_info}
  */
  readonly syncRxExtFwSoShadowExtInfo?: number;
  /**
  * Conn Sync H323 TCP ALG Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_ext_h323_alg DataThunderVrrpAStateStats#sync_rx_ext_h323_alg}
  */
  readonly syncRxExtH323Alg?: number;
  /**
  * Conn Sync LSN ACL Idle Timeout Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_ext_lsn_ac_idle_timeout DataThunderVrrpAStateStats#sync_rx_ext_lsn_ac_idle_timeout}
  */
  readonly syncRxExtLsnAcIdleTimeout?: number;
  /**
  * Conn Sync LSN ACL Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_ext_lsn_acl DataThunderVrrpAStateStats#sync_rx_ext_lsn_acl}
  */
  readonly syncRxExtLsnAcl?: number;
  /**
  * Conn Sync NAT ALG TCP Information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_ext_nat_alg_tcp_info DataThunderVrrpAStateStats#sync_rx_ext_nat_alg_tcp_info}
  */
  readonly syncRxExtNatAlgTcpInfo?: number;
  /**
  * Conn Sync NAT MAC Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_ext_nat_mac DataThunderVrrpAStateStats#sync_rx_ext_nat_mac}
  */
  readonly syncRxExtNatMac?: number;
  /**
  * Conn Sync Ext PPTP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_ext_pptp DataThunderVrrpAStateStats#sync_rx_ext_pptp}
  */
  readonly syncRxExtPptp?: number;
  /**
  * Conn Sync Ext RTSP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_ext_rtsp DataThunderVrrpAStateStats#sync_rx_ext_rtsp}
  */
  readonly syncRxExtRtsp?: number;
  /**
  * Conn Sync SIP TCP ALG Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_ext_sip_alg DataThunderVrrpAStateStats#sync_rx_ext_sip_alg}
  */
  readonly syncRxExtSipAlg?: number;
  /**
  * Conn Sync FTP Control Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_ftp_control DataThunderVrrpAStateStats#sync_rx_ftp_control}
  */
  readonly syncRxFtpControl?: number;
  /**
  * Conn Sync receive fw set dscp counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_fw_set_dscp_counter DataThunderVrrpAStateStats#sync_rx_fw_set_dscp_counter}
  */
  readonly syncRxFwSetDscpCounter?: number;
  /**
  * Conn Sync Insert Tuple
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_insert_tuple DataThunderVrrpAStateStats#sync_rx_insert_tuple}
  */
  readonly syncRxInsertTuple?: number;
  /**
  * Conn Sync receive invalid packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_invalid_sync_packet_counter DataThunderVrrpAStateStats#sync_rx_invalid_sync_packet_counter}
  */
  readonly syncRxInvalidSyncPacketCounter?: number;
  /**
  * Conn Sync Length Invalid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_len_invalid DataThunderVrrpAStateStats#sync_rx_len_invalid}
  */
  readonly syncRxLenInvalid?: number;
  /**
  * Conn Sync LSN Create Standby
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_lsn_create_sby DataThunderVrrpAStateStats#sync_rx_lsn_create_sby}
  */
  readonly syncRxLsnCreateSby?: number;
  /**
  * Conn Sync Update LSN Fullcone Received counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_lsn_fullcone DataThunderVrrpAStateStats#sync_rx_lsn_fullcone}
  */
  readonly syncRxLsnFullcone?: number;
  /**
  * Acos monitoring Entities Sync Messages Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_mon_entity DataThunderVrrpAStateStats#sync_rx_mon_entity}
  */
  readonly syncRxMonEntity?: number;
  /**
  * Conn Sync NAT Alloc Standby
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_nat_alloc_sby DataThunderVrrpAStateStats#sync_rx_nat_alloc_sby}
  */
  readonly syncRxNatAllocSby?: number;
  /**
  * Conn Sync NAT Create Standby
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_nat_create_sby DataThunderVrrpAStateStats#sync_rx_nat_create_sby}
  */
  readonly syncRxNatCreateSby?: number;
  /**
  * Conn Sync 'dst' not found for vport inline
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_no_dst_for_vport_inline DataThunderVrrpAStateStats#sync_rx_no_dst_for_vport_inline}
  */
  readonly syncRxNoDstForVportInline?: number;
  /**
  * Conn Sync NAT Pool Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_no_such_nat_pool DataThunderVrrpAStateStats#sync_rx_no_such_nat_pool}
  */
  readonly syncRxNoSuchNatPool?: number;
  /**
  * Conn Sync Real Port Not Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_no_such_rport DataThunderVrrpAStateStats#sync_rx_no_such_rport}
  */
  readonly syncRxNoSuchRport?: number;
  /**
  * Conn Sync no SG node found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_no_such_sg_node DataThunderVrrpAStateStats#sync_rx_no_such_sg_node}
  */
  readonly syncRxNoSuchSgNode?: number;
  /**
  * Conn Sync Virt Port Not Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_no_such_vport DataThunderVrrpAStateStats#sync_rx_no_such_vport}
  */
  readonly syncRxNoSuchVport?: number;
  /**
  * Conn Sync receive packet with no virtual group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_no_vgrp_counter DataThunderVrrpAStateStats#sync_rx_no_vgrp_counter}
  */
  readonly syncRxNoVgrpCounter?: number;
  /**
  * unexpected session sync packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_not_expect_sync_pkt DataThunderVrrpAStateStats#sync_rx_not_expect_sync_pkt}
  */
  readonly syncRxNotExpectSyncPkt?: number;
  /**
  * total number of out of order packets received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_out_of_order_pkt_counter DataThunderVrrpAStateStats#sync_rx_out_of_order_pkt_counter}
  */
  readonly syncRxOutOfOrderPktCounter?: number;
  /**
  * Conn Sync Create Persist Session Pkts Received counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_persist_create_counter DataThunderVrrpAStateStats#sync_rx_persist_create_counter}
  */
  readonly syncRxPersistCreateCounter?: number;
  /**
  * Conn Sync Delete Persist Session Pkts Received counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_persist_del_counter DataThunderVrrpAStateStats#sync_rx_persist_del_counter}
  */
  readonly syncRxPersistDelCounter?: number;
  /**
  * Conn Sync Update Persist Age Pkts Received counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_persist_update_age_counter DataThunderVrrpAStateStats#sync_rx_persist_update_age_counter}
  */
  readonly syncRxPersistUpdateAgeCounter?: number;
  /**
  * Conn Sync Protocol Invalid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_proto_not_supported DataThunderVrrpAStateStats#sync_rx_proto_not_supported}
  */
  readonly syncRxProtoNotSupported?: number;
  /**
  * Conn Sync Reserve HA Conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_reserve_ha DataThunderVrrpAStateStats#sync_rx_reserve_ha}
  */
  readonly syncRxReserveHa?: number;
  /**
  * Conn Sync Seq Deltas Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_seq_deltas DataThunderVrrpAStateStats#sync_rx_seq_deltas}
  */
  readonly syncRxSeqDeltas?: number;
  /**
  * Conn Sync SFW
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_sfw DataThunderVrrpAStateStats#sync_rx_sfw}
  */
  readonly syncRxSfw?: number;
  /**
  * Sync Clear SMP Session Pkts Received counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_smp_clear_counter DataThunderVrrpAStateStats#sync_rx_smp_clear_counter}
  */
  readonly syncRxSmpClearCounter?: number;
  /**
  * Sync Create SMP Session Pkts Received counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_smp_create_counter DataThunderVrrpAStateStats#sync_rx_smp_create_counter}
  */
  readonly syncRxSmpCreateCounter?: number;
  /**
  * Sync Delete SMP Session Pkts Received counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_smp_delete_counter DataThunderVrrpAStateStats#sync_rx_smp_delete_counter}
  */
  readonly syncRxSmpDeleteCounter?: number;
  /**
  * Conn Sync Update LSN RADIUS Received counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_smp_radius_table_counter DataThunderVrrpAStateStats#sync_rx_smp_radius_table_counter}
  */
  readonly syncRxSmpRadiusTableCounter?: number;
  /**
  * Sync Update SMP Session Pkts Received counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_smp_update_counter DataThunderVrrpAStateStats#sync_rx_smp_update_counter}
  */
  readonly syncRxSmpUpdateCounter?: number;
  /**
  * Conn Sync receive packet with table entry create
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_table_entry_create_counter DataThunderVrrpAStateStats#sync_rx_table_entry_create_counter}
  */
  readonly syncRxTableEntryCreateCounter?: number;
  /**
  * Conn Sync receive packet with table entry delete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_table_entry_del_counter DataThunderVrrpAStateStats#sync_rx_table_entry_del_counter}
  */
  readonly syncRxTableEntryDelCounter?: number;
  /**
  * Conn Sync receive packet with table entry update
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_table_entry_update_counter DataThunderVrrpAStateStats#sync_rx_table_entry_update_counter}
  */
  readonly syncRxTableEntryUpdateCounter?: number;
  /**
  * Conn Sync Total Info Pkts Received counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_total_info_counter DataThunderVrrpAStateStats#sync_rx_total_info_counter}
  */
  readonly syncRxTotalInfoCounter?: number;
  /**
  * Conn Sync Type Invalid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_type_invalid DataThunderVrrpAStateStats#sync_rx_type_invalid}
  */
  readonly syncRxTypeInvalid?: number;
  /**
  * Conn Sync Unknown Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_unk_counter DataThunderVrrpAStateStats#sync_rx_unk_counter}
  */
  readonly syncRxUnkCounter?: number;
  /**
  * total number of unreached packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_unreached_pkt_counter DataThunderVrrpAStateStats#sync_rx_unreached_pkt_counter}
  */
  readonly syncRxUnreachedPktCounter?: number;
  /**
  * Conn Sync Update Age Received counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_update_age_counter DataThunderVrrpAStateStats#sync_rx_update_age_counter}
  */
  readonly syncRxUpdateAgeCounter?: number;
  /**
  * Update SCTP Addresses Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_update_sctp_conn_addr DataThunderVrrpAStateStats#sync_rx_update_sctp_conn_addr}
  */
  readonly syncRxUpdateSctpConnAddr?: number;
  /**
  * Conn Sync Update Seq Num Received counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_update_seqnos_counter DataThunderVrrpAStateStats#sync_rx_update_seqnos_counter}
  */
  readonly syncRxUpdateSeqnosCounter?: number;
  /**
  * Conn Sync Packet Empty
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_zero_info_counter DataThunderVrrpAStateStats#sync_rx_zero_info_counter}
  */
  readonly syncRxZeroInfoCounter?: number;
  /**
  * Conn Sync Zone Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_rx_zone_failure_counter DataThunderVrrpAStateStats#sync_rx_zone_failure_counter}
  */
  readonly syncRxZoneFailureCounter?: number;
  /**
  * Sync send packet with aflex table entry add
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_aflex_table_entry_add_counter DataThunderVrrpAStateStats#sync_tx_aflex_table_entry_add_counter}
  */
  readonly syncTxAflexTableEntryAddCounter?: number;
  /**
  * Sync send packet with aflex table entry append
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_aflex_table_entry_append_counter DataThunderVrrpAStateStats#sync_tx_aflex_table_entry_append_counter}
  */
  readonly syncTxAflexTableEntryAppendCounter?: number;
  /**
  * Sync send packet with aflex table entry delete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_aflex_table_entry_delete_counter DataThunderVrrpAStateStats#sync_tx_aflex_table_entry_delete_counter}
  */
  readonly syncTxAflexTableEntryDeleteCounter?: number;
  /**
  * Error on send packet with aflex table entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_aflex_table_entry_error_counter DataThunderVrrpAStateStats#sync_tx_aflex_table_entry_error_counter}
  */
  readonly syncTxAflexTableEntryErrorCounter?: number;
  /**
  * Sync send packet with aflex table entry fast sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_aflex_table_entry_fastsync_counter DataThunderVrrpAStateStats#sync_tx_aflex_table_entry_fastsync_counter}
  */
  readonly syncTxAflexTableEntryFastsyncCounter?: number;
  /**
  * Sync send packet with aflex table entry incr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_aflex_table_entry_incr_counter DataThunderVrrpAStateStats#sync_tx_aflex_table_entry_incr_counter}
  */
  readonly syncTxAflexTableEntryIncrCounter?: number;
  /**
  * Sync send packet with aflex table entry lifetime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_aflex_table_entry_lifetime_counter DataThunderVrrpAStateStats#sync_tx_aflex_table_entry_lifetime_counter}
  */
  readonly syncTxAflexTableEntryLifetimeCounter?: number;
  /**
  * Sync send packet with aflex table entry lookup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_aflex_table_entry_lookup_counter DataThunderVrrpAStateStats#sync_tx_aflex_table_entry_lookup_counter}
  */
  readonly syncTxAflexTableEntryLookupCounter?: number;
  /**
  * send of aflex table entry not eligible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_aflex_table_entry_not_eligible_counter DataThunderVrrpAStateStats#sync_tx_aflex_table_entry_not_eligible_counter}
  */
  readonly syncTxAflexTableEntryNotEligibleCounter?: number;
  /**
  * Sync send packet with aflex table entry replace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_aflex_table_entry_replace_counter DataThunderVrrpAStateStats#sync_tx_aflex_table_entry_replace_counter}
  */
  readonly syncTxAflexTableEntryReplaceCounter?: number;
  /**
  * Sync send packet with aflex table entry set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_aflex_table_entry_set_counter DataThunderVrrpAStateStats#sync_tx_aflex_table_entry_set_counter}
  */
  readonly syncTxAflexTableEntrySetCounter?: number;
  /**
  * Sync send packet with aflex table entry timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_aflex_table_entry_timeout_counter DataThunderVrrpAStateStats#sync_tx_aflex_table_entry_timeout_counter}
  */
  readonly syncTxAflexTableEntryTimeoutCounter?: number;
  /**
  * Conn Sync Create Session Sent counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_create_counter DataThunderVrrpAStateStats#sync_tx_create_counter}
  */
  readonly syncTxCreateCounter?: number;
  /**
  * Conn Sync Create with Ext Sent counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_create_ext_bit_counter DataThunderVrrpAStateStats#sync_tx_create_ext_bit_counter}
  */
  readonly syncTxCreateExtBitCounter?: number;
  /**
  * Conn Sync Del Session Sent counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_del_counter DataThunderVrrpAStateStats#sync_tx_del_counter}
  */
  readonly syncTxDelCounter?: number;
  /**
  * Conn Sync send established state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_estab_counter DataThunderVrrpAStateStats#sync_tx_estab_counter}
  */
  readonly syncTxEstabCounter?: number;
  /**
  * Conn Sync send fw set dscp counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_fw_set_dscp_counter DataThunderVrrpAStateStats#sync_tx_fw_set_dscp_counter}
  */
  readonly syncTxFwSetDscpCounter?: number;
  /**
  * Conn Sync Get Buff Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_get_buff_failed DataThunderVrrpAStateStats#sync_tx_get_buff_failed}
  */
  readonly syncTxGetBuffFailed?: number;
  /**
  * Conn Sync Update LSN Fullcone Sent counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_lsn_fullcone DataThunderVrrpAStateStats#sync_tx_lsn_fullcone}
  */
  readonly syncTxLsnFullcone?: number;
  /**
  * Min Sync Msg Per Packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_max_packed DataThunderVrrpAStateStats#sync_tx_max_packed}
  */
  readonly syncTxMaxPacked?: number;
  /**
  * Max Sync Msg Per Packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_min_packed DataThunderVrrpAStateStats#sync_tx_min_packed}
  */
  readonly syncTxMinPacked?: number;
  /**
  * Acos Monitoring Entities Sync Messages Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_mon_entity DataThunderVrrpAStateStats#sync_tx_mon_entity}
  */
  readonly syncTxMonEntity?: number;
  /**
  * Conn Sync Create Persist Session Pkts Sent counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_persist_create_counter DataThunderVrrpAStateStats#sync_tx_persist_create_counter}
  */
  readonly syncTxPersistCreateCounter?: number;
  /**
  * Conn Sync Delete Persist Session Pkts Sent counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_persist_del_counter DataThunderVrrpAStateStats#sync_tx_persist_del_counter}
  */
  readonly syncTxPersistDelCounter?: number;
  /**
  * Conn Sync Update Persist Age Pkts Sent counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_persist_update_age_counter DataThunderVrrpAStateStats#sync_tx_persist_update_age_counter}
  */
  readonly syncTxPersistUpdateAgeCounter?: number;
  /**
  * Sync Clear SMP Session Pkts Sent counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_smp_clear_counter DataThunderVrrpAStateStats#sync_tx_smp_clear_counter}
  */
  readonly syncTxSmpClearCounter?: number;
  /**
  * Sync Create SMP Session Pkts Sent counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_smp_create_counter DataThunderVrrpAStateStats#sync_tx_smp_create_counter}
  */
  readonly syncTxSmpCreateCounter?: number;
  /**
  * Sync Delete SMP Session Pkts Sent counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_smp_delete_counter DataThunderVrrpAStateStats#sync_tx_smp_delete_counter}
  */
  readonly syncTxSmpDeleteCounter?: number;
  /**
  * Conn Sync Update LSN RADIUS Sent counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_smp_radius_table_counter DataThunderVrrpAStateStats#sync_tx_smp_radius_table_counter}
  */
  readonly syncTxSmpRadiusTableCounter?: number;
  /**
  * Sync Update SMP Session Pkts Sent counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_smp_update_counter DataThunderVrrpAStateStats#sync_tx_smp_update_counter}
  */
  readonly syncTxSmpUpdateCounter?: number;
  /**
  * Conn Sync Total Info Pkts Sent counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_total_info_counter DataThunderVrrpAStateStats#sync_tx_total_info_counter}
  */
  readonly syncTxTotalInfoCounter?: number;
  /**
  * Conn Sync Update Age Sent counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_update_age_counter DataThunderVrrpAStateStats#sync_tx_update_age_counter}
  */
  readonly syncTxUpdateAgeCounter?: number;
  /**
  * Update SCTP Addresses Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_update_sctp_conn_addr DataThunderVrrpAStateStats#sync_tx_update_sctp_conn_addr}
  */
  readonly syncTxUpdateSctpConnAddr?: number;
  /**
  * Conn Sync Update Seq Num Sent counter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#sync_tx_update_seqnos_counter DataThunderVrrpAStateStats#sync_tx_update_seqnos_counter}
  */
  readonly syncTxUpdateSeqnosCounter?: number;
}

export function dataThunderVrrpAStateStatsStatsToTerraform(struct?: DataThunderVrrpAStateStatsStatsOutputReference | DataThunderVrrpAStateStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_cache_sync_rx_create_counter: cdktf.numberToTerraform(struct!.dnsCacheSyncRxCreateCounter),
    dns_cache_sync_rx_del_counter: cdktf.numberToTerraform(struct!.dnsCacheSyncRxDelCounter),
    dns_cache_sync_rx_error_counter: cdktf.numberToTerraform(struct!.dnsCacheSyncRxErrorCounter),
    dns_cache_sync_rx_frag_counter: cdktf.numberToTerraform(struct!.dnsCacheSyncRxFragCounter),
    dns_cache_sync_tx_create_counter: cdktf.numberToTerraform(struct!.dnsCacheSyncTxCreateCounter),
    dns_cache_sync_tx_del_counter: cdktf.numberToTerraform(struct!.dnsCacheSyncTxDelCounter),
    dns_cache_sync_tx_error_counter: cdktf.numberToTerraform(struct!.dnsCacheSyncTxErrorCounter),
    dns_cache_sync_tx_frag_counter: cdktf.numberToTerraform(struct!.dnsCacheSyncTxFragCounter),
    query_pkt_invalid_idx_counter: cdktf.numberToTerraform(struct!.queryPktInvalidIdxCounter),
    query_pkt_no_receiving_ip_counter: cdktf.numberToTerraform(struct!.queryPktNoReceivingIpCounter),
    query_pkt_rcv_counter: cdktf.numberToTerraform(struct!.queryPktRcvCounter),
    query_pkt_tx_counter: cdktf.numberToTerraform(struct!.queryPktTxCounter),
    query_rx_full_info_counter: cdktf.numberToTerraform(struct!.queryRxFullInfoCounter),
    query_rx_invalid_ha_group_counter: cdktf.numberToTerraform(struct!.queryRxInvalidHaGroupCounter),
    query_rx_invalid_msg_dir_counter: cdktf.numberToTerraform(struct!.queryRxInvalidMsgDirCounter),
    query_rx_invalid_partition_counter: cdktf.numberToTerraform(struct!.queryRxInvalidPartitionCounter),
    query_rx_invalid_sync_version_counter: cdktf.numberToTerraform(struct!.queryRxInvalidSyncVersionCounter),
    query_rx_unk_counter: cdktf.numberToTerraform(struct!.queryRxUnkCounter),
    query_rx_zero_info_counter: cdktf.numberToTerraform(struct!.queryRxZeroInfoCounter),
    query_tx_get_buff_failed: cdktf.numberToTerraform(struct!.queryTxGetBuffFailed),
    query_tx_max_packed: cdktf.numberToTerraform(struct!.queryTxMaxPacked),
    query_tx_min_packed: cdktf.numberToTerraform(struct!.queryTxMinPacked),
    sync_err_lsn_fullcone: cdktf.numberToTerraform(struct!.syncErrLsnFullcone),
    sync_get_buff_failed_port: cdktf.numberToTerraform(struct!.syncGetBuffFailedPort),
    sync_get_buff_failed_rt: cdktf.numberToTerraform(struct!.syncGetBuffFailedRt),
    sync_persist_rx_cannot_process_mandatory: cdktf.numberToTerraform(struct!.syncPersistRxCannotProcessMandatory),
    sync_persist_rx_conn_get_failed: cdktf.numberToTerraform(struct!.syncPersistRxConnGetFailed),
    sync_persist_rx_ext_bit_process_error: cdktf.numberToTerraform(struct!.syncPersistRxExtBitProcessError),
    sync_persist_rx_len_invalid: cdktf.numberToTerraform(struct!.syncPersistRxLenInvalid),
    sync_persist_rx_no_sg_group_info: cdktf.numberToTerraform(struct!.syncPersistRxNoSgGroupInfo),
    sync_persist_rx_no_such_rport: cdktf.numberToTerraform(struct!.syncPersistRxNoSuchRport),
    sync_persist_rx_no_such_sg_group: cdktf.numberToTerraform(struct!.syncPersistRxNoSuchSgGroup),
    sync_persist_rx_no_such_vport: cdktf.numberToTerraform(struct!.syncPersistRxNoSuchVport),
    sync_persist_rx_proto_not_supported: cdktf.numberToTerraform(struct!.syncPersistRxProtoNotSupported),
    sync_persist_rx_type_invalid: cdktf.numberToTerraform(struct!.syncPersistRxTypeInvalid),
    sync_persist_rx_vporttype_not_supported: cdktf.numberToTerraform(struct!.syncPersistRxVporttypeNotSupported),
    sync_pkt_empty_buff_counter: cdktf.numberToTerraform(struct!.syncPktEmptyBuffCounter),
    sync_pkt_failed_buff_copy_counter: cdktf.numberToTerraform(struct!.syncPktFailedBuffCopyCounter),
    sync_pkt_invalid_idx_counter: cdktf.numberToTerraform(struct!.syncPktInvalidIdxCounter),
    sync_pkt_no_receiving_vgrp_counter: cdktf.numberToTerraform(struct!.syncPktNoReceivingVgrpCounter),
    sync_pkt_no_sending_vgrp_counter: cdktf.numberToTerraform(struct!.syncPktNoSendingVgrpCounter),
    sync_pkt_rcv_counter: cdktf.numberToTerraform(struct!.syncPktRcvCounter),
    sync_pkt_tx_counter: cdktf.numberToTerraform(struct!.syncPktTxCounter),
    sync_query_dcmsg_counter: cdktf.numberToTerraform(struct!.syncQueryDcmsgCounter),
    sync_rx_aflex_create_counter: cdktf.numberToTerraform(struct!.syncRxAflexCreateCounter),
    sync_rx_aflex_del_counter: cdktf.numberToTerraform(struct!.syncRxAflexDelCounter),
    sync_rx_aflex_frag_counter: cdktf.numberToTerraform(struct!.syncRxAflexFragCounter),
    sync_rx_aflex_table_entry_add_counter: cdktf.numberToTerraform(struct!.syncRxAflexTableEntryAddCounter),
    sync_rx_aflex_table_entry_append_counter: cdktf.numberToTerraform(struct!.syncRxAflexTableEntryAppendCounter),
    sync_rx_aflex_table_entry_delete_counter: cdktf.numberToTerraform(struct!.syncRxAflexTableEntryDeleteCounter),
    sync_rx_aflex_table_entry_fastsync_counter: cdktf.numberToTerraform(struct!.syncRxAflexTableEntryFastsyncCounter),
    sync_rx_aflex_table_entry_incr_counter: cdktf.numberToTerraform(struct!.syncRxAflexTableEntryIncrCounter),
    sync_rx_aflex_table_entry_lifetime_counter: cdktf.numberToTerraform(struct!.syncRxAflexTableEntryLifetimeCounter),
    sync_rx_aflex_table_entry_lookup_counter: cdktf.numberToTerraform(struct!.syncRxAflexTableEntryLookupCounter),
    sync_rx_aflex_table_entry_replace_counter: cdktf.numberToTerraform(struct!.syncRxAflexTableEntryReplaceCounter),
    sync_rx_aflex_table_entry_set_counter: cdktf.numberToTerraform(struct!.syncRxAflexTableEntrySetCounter),
    sync_rx_aflex_table_entry_timeout_counter: cdktf.numberToTerraform(struct!.syncRxAflexTableEntryTimeoutCounter),
    sync_rx_aflex_update_counter: cdktf.numberToTerraform(struct!.syncRxAflexUpdateCounter),
    sync_rx_apptype_not_supported: cdktf.numberToTerraform(struct!.syncRxApptypeNotSupported),
    sync_rx_bad_protocol_counter: cdktf.numberToTerraform(struct!.syncRxBadProtocolCounter),
    sync_rx_by_inactive_peer_counter: cdktf.numberToTerraform(struct!.syncRxByInactivePeerCounter),
    sync_rx_cannot_process_mandatory: cdktf.numberToTerraform(struct!.syncRxCannotProcessMandatory),
    sync_rx_conn_exists: cdktf.numberToTerraform(struct!.syncRxConnExists),
    sync_rx_conn_get_failed: cdktf.numberToTerraform(struct!.syncRxConnGetFailed),
    sync_rx_create_counter: cdktf.numberToTerraform(struct!.syncRxCreateCounter),
    sync_rx_create_ext_bit_counter: cdktf.numberToTerraform(struct!.syncRxCreateExtBitCounter),
    sync_rx_create_static_sby: cdktf.numberToTerraform(struct!.syncRxCreateStaticSby),
    sync_rx_dcmsg_counter: cdktf.numberToTerraform(struct!.syncRxDcmsgCounter),
    sync_rx_ddos_drop_counter: cdktf.numberToTerraform(struct!.syncRxDdosDropCounter),
    sync_rx_del_counter: cdktf.numberToTerraform(struct!.syncRxDelCounter),
    sync_rx_del_no_such_session: cdktf.numberToTerraform(struct!.syncRxDelNoSuchSession),
    sync_rx_estab_counter: cdktf.numberToTerraform(struct!.syncRxEstabCounter),
    sync_rx_ext_bit_process_error: cdktf.numberToTerraform(struct!.syncRxExtBitProcessError),
    sync_rx_ext_dcfw_log: cdktf.numberToTerraform(struct!.syncRxExtDcfwLog),
    sync_rx_ext_dcfw_rule_id: cdktf.numberToTerraform(struct!.syncRxExtDcfwRuleId),
    sync_rx_ext_dcfw_rule_idle_timeout: cdktf.numberToTerraform(struct!.syncRxExtDcfwRuleIdleTimeout),
    sync_rx_ext_fw_apps: cdktf.numberToTerraform(struct!.syncRxExtFwApps),
    sync_rx_ext_fw_gtp_echo_ext_info: cdktf.numberToTerraform(struct!.syncRxExtFwGtpEchoExtInfo),
    sync_rx_ext_fw_gtp_ext_info: cdktf.numberToTerraform(struct!.syncRxExtFwGtpExtInfo),
    sync_rx_ext_fw_gtp_info: cdktf.numberToTerraform(struct!.syncRxExtFwGtpInfo),
    sync_rx_ext_fw_gtp_log_ext_info: cdktf.numberToTerraform(struct!.syncRxExtFwGtpLogExtInfo),
    sync_rx_ext_fw_gtp_log_info: cdktf.numberToTerraform(struct!.syncRxExtFwGtpLogInfo),
    sync_rx_ext_fw_gtp_u_info: cdktf.numberToTerraform(struct!.syncRxExtFwGtpUInfo),
    sync_rx_ext_fw_http_logging: cdktf.numberToTerraform(struct!.syncRxExtFwHttpLogging),
    sync_rx_ext_fw_limit_entry: cdktf.numberToTerraform(struct!.syncRxExtFwLimitEntry),
    sync_rx_ext_fw_so_shadow_ext_info: cdktf.numberToTerraform(struct!.syncRxExtFwSoShadowExtInfo),
    sync_rx_ext_h323_alg: cdktf.numberToTerraform(struct!.syncRxExtH323Alg),
    sync_rx_ext_lsn_ac_idle_timeout: cdktf.numberToTerraform(struct!.syncRxExtLsnAcIdleTimeout),
    sync_rx_ext_lsn_acl: cdktf.numberToTerraform(struct!.syncRxExtLsnAcl),
    sync_rx_ext_nat_alg_tcp_info: cdktf.numberToTerraform(struct!.syncRxExtNatAlgTcpInfo),
    sync_rx_ext_nat_mac: cdktf.numberToTerraform(struct!.syncRxExtNatMac),
    sync_rx_ext_pptp: cdktf.numberToTerraform(struct!.syncRxExtPptp),
    sync_rx_ext_rtsp: cdktf.numberToTerraform(struct!.syncRxExtRtsp),
    sync_rx_ext_sip_alg: cdktf.numberToTerraform(struct!.syncRxExtSipAlg),
    sync_rx_ftp_control: cdktf.numberToTerraform(struct!.syncRxFtpControl),
    sync_rx_fw_set_dscp_counter: cdktf.numberToTerraform(struct!.syncRxFwSetDscpCounter),
    sync_rx_insert_tuple: cdktf.numberToTerraform(struct!.syncRxInsertTuple),
    sync_rx_invalid_sync_packet_counter: cdktf.numberToTerraform(struct!.syncRxInvalidSyncPacketCounter),
    sync_rx_len_invalid: cdktf.numberToTerraform(struct!.syncRxLenInvalid),
    sync_rx_lsn_create_sby: cdktf.numberToTerraform(struct!.syncRxLsnCreateSby),
    sync_rx_lsn_fullcone: cdktf.numberToTerraform(struct!.syncRxLsnFullcone),
    sync_rx_mon_entity: cdktf.numberToTerraform(struct!.syncRxMonEntity),
    sync_rx_nat_alloc_sby: cdktf.numberToTerraform(struct!.syncRxNatAllocSby),
    sync_rx_nat_create_sby: cdktf.numberToTerraform(struct!.syncRxNatCreateSby),
    sync_rx_no_dst_for_vport_inline: cdktf.numberToTerraform(struct!.syncRxNoDstForVportInline),
    sync_rx_no_such_nat_pool: cdktf.numberToTerraform(struct!.syncRxNoSuchNatPool),
    sync_rx_no_such_rport: cdktf.numberToTerraform(struct!.syncRxNoSuchRport),
    sync_rx_no_such_sg_node: cdktf.numberToTerraform(struct!.syncRxNoSuchSgNode),
    sync_rx_no_such_vport: cdktf.numberToTerraform(struct!.syncRxNoSuchVport),
    sync_rx_no_vgrp_counter: cdktf.numberToTerraform(struct!.syncRxNoVgrpCounter),
    sync_rx_not_expect_sync_pkt: cdktf.numberToTerraform(struct!.syncRxNotExpectSyncPkt),
    sync_rx_out_of_order_pkt_counter: cdktf.numberToTerraform(struct!.syncRxOutOfOrderPktCounter),
    sync_rx_persist_create_counter: cdktf.numberToTerraform(struct!.syncRxPersistCreateCounter),
    sync_rx_persist_del_counter: cdktf.numberToTerraform(struct!.syncRxPersistDelCounter),
    sync_rx_persist_update_age_counter: cdktf.numberToTerraform(struct!.syncRxPersistUpdateAgeCounter),
    sync_rx_proto_not_supported: cdktf.numberToTerraform(struct!.syncRxProtoNotSupported),
    sync_rx_reserve_ha: cdktf.numberToTerraform(struct!.syncRxReserveHa),
    sync_rx_seq_deltas: cdktf.numberToTerraform(struct!.syncRxSeqDeltas),
    sync_rx_sfw: cdktf.numberToTerraform(struct!.syncRxSfw),
    sync_rx_smp_clear_counter: cdktf.numberToTerraform(struct!.syncRxSmpClearCounter),
    sync_rx_smp_create_counter: cdktf.numberToTerraform(struct!.syncRxSmpCreateCounter),
    sync_rx_smp_delete_counter: cdktf.numberToTerraform(struct!.syncRxSmpDeleteCounter),
    sync_rx_smp_radius_table_counter: cdktf.numberToTerraform(struct!.syncRxSmpRadiusTableCounter),
    sync_rx_smp_update_counter: cdktf.numberToTerraform(struct!.syncRxSmpUpdateCounter),
    sync_rx_table_entry_create_counter: cdktf.numberToTerraform(struct!.syncRxTableEntryCreateCounter),
    sync_rx_table_entry_del_counter: cdktf.numberToTerraform(struct!.syncRxTableEntryDelCounter),
    sync_rx_table_entry_update_counter: cdktf.numberToTerraform(struct!.syncRxTableEntryUpdateCounter),
    sync_rx_total_info_counter: cdktf.numberToTerraform(struct!.syncRxTotalInfoCounter),
    sync_rx_type_invalid: cdktf.numberToTerraform(struct!.syncRxTypeInvalid),
    sync_rx_unk_counter: cdktf.numberToTerraform(struct!.syncRxUnkCounter),
    sync_rx_unreached_pkt_counter: cdktf.numberToTerraform(struct!.syncRxUnreachedPktCounter),
    sync_rx_update_age_counter: cdktf.numberToTerraform(struct!.syncRxUpdateAgeCounter),
    sync_rx_update_sctp_conn_addr: cdktf.numberToTerraform(struct!.syncRxUpdateSctpConnAddr),
    sync_rx_update_seqnos_counter: cdktf.numberToTerraform(struct!.syncRxUpdateSeqnosCounter),
    sync_rx_zero_info_counter: cdktf.numberToTerraform(struct!.syncRxZeroInfoCounter),
    sync_rx_zone_failure_counter: cdktf.numberToTerraform(struct!.syncRxZoneFailureCounter),
    sync_tx_aflex_table_entry_add_counter: cdktf.numberToTerraform(struct!.syncTxAflexTableEntryAddCounter),
    sync_tx_aflex_table_entry_append_counter: cdktf.numberToTerraform(struct!.syncTxAflexTableEntryAppendCounter),
    sync_tx_aflex_table_entry_delete_counter: cdktf.numberToTerraform(struct!.syncTxAflexTableEntryDeleteCounter),
    sync_tx_aflex_table_entry_error_counter: cdktf.numberToTerraform(struct!.syncTxAflexTableEntryErrorCounter),
    sync_tx_aflex_table_entry_fastsync_counter: cdktf.numberToTerraform(struct!.syncTxAflexTableEntryFastsyncCounter),
    sync_tx_aflex_table_entry_incr_counter: cdktf.numberToTerraform(struct!.syncTxAflexTableEntryIncrCounter),
    sync_tx_aflex_table_entry_lifetime_counter: cdktf.numberToTerraform(struct!.syncTxAflexTableEntryLifetimeCounter),
    sync_tx_aflex_table_entry_lookup_counter: cdktf.numberToTerraform(struct!.syncTxAflexTableEntryLookupCounter),
    sync_tx_aflex_table_entry_not_eligible_counter: cdktf.numberToTerraform(struct!.syncTxAflexTableEntryNotEligibleCounter),
    sync_tx_aflex_table_entry_replace_counter: cdktf.numberToTerraform(struct!.syncTxAflexTableEntryReplaceCounter),
    sync_tx_aflex_table_entry_set_counter: cdktf.numberToTerraform(struct!.syncTxAflexTableEntrySetCounter),
    sync_tx_aflex_table_entry_timeout_counter: cdktf.numberToTerraform(struct!.syncTxAflexTableEntryTimeoutCounter),
    sync_tx_create_counter: cdktf.numberToTerraform(struct!.syncTxCreateCounter),
    sync_tx_create_ext_bit_counter: cdktf.numberToTerraform(struct!.syncTxCreateExtBitCounter),
    sync_tx_del_counter: cdktf.numberToTerraform(struct!.syncTxDelCounter),
    sync_tx_estab_counter: cdktf.numberToTerraform(struct!.syncTxEstabCounter),
    sync_tx_fw_set_dscp_counter: cdktf.numberToTerraform(struct!.syncTxFwSetDscpCounter),
    sync_tx_get_buff_failed: cdktf.numberToTerraform(struct!.syncTxGetBuffFailed),
    sync_tx_lsn_fullcone: cdktf.numberToTerraform(struct!.syncTxLsnFullcone),
    sync_tx_max_packed: cdktf.numberToTerraform(struct!.syncTxMaxPacked),
    sync_tx_min_packed: cdktf.numberToTerraform(struct!.syncTxMinPacked),
    sync_tx_mon_entity: cdktf.numberToTerraform(struct!.syncTxMonEntity),
    sync_tx_persist_create_counter: cdktf.numberToTerraform(struct!.syncTxPersistCreateCounter),
    sync_tx_persist_del_counter: cdktf.numberToTerraform(struct!.syncTxPersistDelCounter),
    sync_tx_persist_update_age_counter: cdktf.numberToTerraform(struct!.syncTxPersistUpdateAgeCounter),
    sync_tx_smp_clear_counter: cdktf.numberToTerraform(struct!.syncTxSmpClearCounter),
    sync_tx_smp_create_counter: cdktf.numberToTerraform(struct!.syncTxSmpCreateCounter),
    sync_tx_smp_delete_counter: cdktf.numberToTerraform(struct!.syncTxSmpDeleteCounter),
    sync_tx_smp_radius_table_counter: cdktf.numberToTerraform(struct!.syncTxSmpRadiusTableCounter),
    sync_tx_smp_update_counter: cdktf.numberToTerraform(struct!.syncTxSmpUpdateCounter),
    sync_tx_total_info_counter: cdktf.numberToTerraform(struct!.syncTxTotalInfoCounter),
    sync_tx_update_age_counter: cdktf.numberToTerraform(struct!.syncTxUpdateAgeCounter),
    sync_tx_update_sctp_conn_addr: cdktf.numberToTerraform(struct!.syncTxUpdateSctpConnAddr),
    sync_tx_update_seqnos_counter: cdktf.numberToTerraform(struct!.syncTxUpdateSeqnosCounter),
  }
}


export function dataThunderVrrpAStateStatsStatsToHclTerraform(struct?: DataThunderVrrpAStateStatsStatsOutputReference | DataThunderVrrpAStateStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_cache_sync_rx_create_counter: {
      value: cdktf.numberToHclTerraform(struct!.dnsCacheSyncRxCreateCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_cache_sync_rx_del_counter: {
      value: cdktf.numberToHclTerraform(struct!.dnsCacheSyncRxDelCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_cache_sync_rx_error_counter: {
      value: cdktf.numberToHclTerraform(struct!.dnsCacheSyncRxErrorCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_cache_sync_rx_frag_counter: {
      value: cdktf.numberToHclTerraform(struct!.dnsCacheSyncRxFragCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_cache_sync_tx_create_counter: {
      value: cdktf.numberToHclTerraform(struct!.dnsCacheSyncTxCreateCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_cache_sync_tx_del_counter: {
      value: cdktf.numberToHclTerraform(struct!.dnsCacheSyncTxDelCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_cache_sync_tx_error_counter: {
      value: cdktf.numberToHclTerraform(struct!.dnsCacheSyncTxErrorCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_cache_sync_tx_frag_counter: {
      value: cdktf.numberToHclTerraform(struct!.dnsCacheSyncTxFragCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_pkt_invalid_idx_counter: {
      value: cdktf.numberToHclTerraform(struct!.queryPktInvalidIdxCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_pkt_no_receiving_ip_counter: {
      value: cdktf.numberToHclTerraform(struct!.queryPktNoReceivingIpCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_pkt_rcv_counter: {
      value: cdktf.numberToHclTerraform(struct!.queryPktRcvCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_pkt_tx_counter: {
      value: cdktf.numberToHclTerraform(struct!.queryPktTxCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_rx_full_info_counter: {
      value: cdktf.numberToHclTerraform(struct!.queryRxFullInfoCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_rx_invalid_ha_group_counter: {
      value: cdktf.numberToHclTerraform(struct!.queryRxInvalidHaGroupCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_rx_invalid_msg_dir_counter: {
      value: cdktf.numberToHclTerraform(struct!.queryRxInvalidMsgDirCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_rx_invalid_partition_counter: {
      value: cdktf.numberToHclTerraform(struct!.queryRxInvalidPartitionCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_rx_invalid_sync_version_counter: {
      value: cdktf.numberToHclTerraform(struct!.queryRxInvalidSyncVersionCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_rx_unk_counter: {
      value: cdktf.numberToHclTerraform(struct!.queryRxUnkCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_rx_zero_info_counter: {
      value: cdktf.numberToHclTerraform(struct!.queryRxZeroInfoCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_tx_get_buff_failed: {
      value: cdktf.numberToHclTerraform(struct!.queryTxGetBuffFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_tx_max_packed: {
      value: cdktf.numberToHclTerraform(struct!.queryTxMaxPacked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_tx_min_packed: {
      value: cdktf.numberToHclTerraform(struct!.queryTxMinPacked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_err_lsn_fullcone: {
      value: cdktf.numberToHclTerraform(struct!.syncErrLsnFullcone),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_get_buff_failed_port: {
      value: cdktf.numberToHclTerraform(struct!.syncGetBuffFailedPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_get_buff_failed_rt: {
      value: cdktf.numberToHclTerraform(struct!.syncGetBuffFailedRt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_persist_rx_cannot_process_mandatory: {
      value: cdktf.numberToHclTerraform(struct!.syncPersistRxCannotProcessMandatory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_persist_rx_conn_get_failed: {
      value: cdktf.numberToHclTerraform(struct!.syncPersistRxConnGetFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_persist_rx_ext_bit_process_error: {
      value: cdktf.numberToHclTerraform(struct!.syncPersistRxExtBitProcessError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_persist_rx_len_invalid: {
      value: cdktf.numberToHclTerraform(struct!.syncPersistRxLenInvalid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_persist_rx_no_sg_group_info: {
      value: cdktf.numberToHclTerraform(struct!.syncPersistRxNoSgGroupInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_persist_rx_no_such_rport: {
      value: cdktf.numberToHclTerraform(struct!.syncPersistRxNoSuchRport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_persist_rx_no_such_sg_group: {
      value: cdktf.numberToHclTerraform(struct!.syncPersistRxNoSuchSgGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_persist_rx_no_such_vport: {
      value: cdktf.numberToHclTerraform(struct!.syncPersistRxNoSuchVport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_persist_rx_proto_not_supported: {
      value: cdktf.numberToHclTerraform(struct!.syncPersistRxProtoNotSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_persist_rx_type_invalid: {
      value: cdktf.numberToHclTerraform(struct!.syncPersistRxTypeInvalid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_persist_rx_vporttype_not_supported: {
      value: cdktf.numberToHclTerraform(struct!.syncPersistRxVporttypeNotSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_pkt_empty_buff_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncPktEmptyBuffCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_pkt_failed_buff_copy_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncPktFailedBuffCopyCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_pkt_invalid_idx_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncPktInvalidIdxCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_pkt_no_receiving_vgrp_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncPktNoReceivingVgrpCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_pkt_no_sending_vgrp_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncPktNoSendingVgrpCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_pkt_rcv_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncPktRcvCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_pkt_tx_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncPktTxCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_query_dcmsg_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncQueryDcmsgCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_aflex_create_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxAflexCreateCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_aflex_del_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxAflexDelCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_aflex_frag_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxAflexFragCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_aflex_table_entry_add_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxAflexTableEntryAddCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_aflex_table_entry_append_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxAflexTableEntryAppendCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_aflex_table_entry_delete_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxAflexTableEntryDeleteCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_aflex_table_entry_fastsync_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxAflexTableEntryFastsyncCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_aflex_table_entry_incr_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxAflexTableEntryIncrCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_aflex_table_entry_lifetime_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxAflexTableEntryLifetimeCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_aflex_table_entry_lookup_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxAflexTableEntryLookupCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_aflex_table_entry_replace_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxAflexTableEntryReplaceCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_aflex_table_entry_set_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxAflexTableEntrySetCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_aflex_table_entry_timeout_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxAflexTableEntryTimeoutCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_aflex_update_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxAflexUpdateCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_apptype_not_supported: {
      value: cdktf.numberToHclTerraform(struct!.syncRxApptypeNotSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_bad_protocol_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxBadProtocolCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_by_inactive_peer_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxByInactivePeerCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_cannot_process_mandatory: {
      value: cdktf.numberToHclTerraform(struct!.syncRxCannotProcessMandatory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_conn_exists: {
      value: cdktf.numberToHclTerraform(struct!.syncRxConnExists),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_conn_get_failed: {
      value: cdktf.numberToHclTerraform(struct!.syncRxConnGetFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_create_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxCreateCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_create_ext_bit_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxCreateExtBitCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_create_static_sby: {
      value: cdktf.numberToHclTerraform(struct!.syncRxCreateStaticSby),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_dcmsg_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxDcmsgCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_ddos_drop_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxDdosDropCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_del_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxDelCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_del_no_such_session: {
      value: cdktf.numberToHclTerraform(struct!.syncRxDelNoSuchSession),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_estab_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxEstabCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_ext_bit_process_error: {
      value: cdktf.numberToHclTerraform(struct!.syncRxExtBitProcessError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_ext_dcfw_log: {
      value: cdktf.numberToHclTerraform(struct!.syncRxExtDcfwLog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_ext_dcfw_rule_id: {
      value: cdktf.numberToHclTerraform(struct!.syncRxExtDcfwRuleId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_ext_dcfw_rule_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.syncRxExtDcfwRuleIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_ext_fw_apps: {
      value: cdktf.numberToHclTerraform(struct!.syncRxExtFwApps),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_ext_fw_gtp_echo_ext_info: {
      value: cdktf.numberToHclTerraform(struct!.syncRxExtFwGtpEchoExtInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_ext_fw_gtp_ext_info: {
      value: cdktf.numberToHclTerraform(struct!.syncRxExtFwGtpExtInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_ext_fw_gtp_info: {
      value: cdktf.numberToHclTerraform(struct!.syncRxExtFwGtpInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_ext_fw_gtp_log_ext_info: {
      value: cdktf.numberToHclTerraform(struct!.syncRxExtFwGtpLogExtInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_ext_fw_gtp_log_info: {
      value: cdktf.numberToHclTerraform(struct!.syncRxExtFwGtpLogInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_ext_fw_gtp_u_info: {
      value: cdktf.numberToHclTerraform(struct!.syncRxExtFwGtpUInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_ext_fw_http_logging: {
      value: cdktf.numberToHclTerraform(struct!.syncRxExtFwHttpLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_ext_fw_limit_entry: {
      value: cdktf.numberToHclTerraform(struct!.syncRxExtFwLimitEntry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_ext_fw_so_shadow_ext_info: {
      value: cdktf.numberToHclTerraform(struct!.syncRxExtFwSoShadowExtInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_ext_h323_alg: {
      value: cdktf.numberToHclTerraform(struct!.syncRxExtH323Alg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_ext_lsn_ac_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.syncRxExtLsnAcIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_ext_lsn_acl: {
      value: cdktf.numberToHclTerraform(struct!.syncRxExtLsnAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_ext_nat_alg_tcp_info: {
      value: cdktf.numberToHclTerraform(struct!.syncRxExtNatAlgTcpInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_ext_nat_mac: {
      value: cdktf.numberToHclTerraform(struct!.syncRxExtNatMac),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_ext_pptp: {
      value: cdktf.numberToHclTerraform(struct!.syncRxExtPptp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_ext_rtsp: {
      value: cdktf.numberToHclTerraform(struct!.syncRxExtRtsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_ext_sip_alg: {
      value: cdktf.numberToHclTerraform(struct!.syncRxExtSipAlg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_ftp_control: {
      value: cdktf.numberToHclTerraform(struct!.syncRxFtpControl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_fw_set_dscp_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxFwSetDscpCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_insert_tuple: {
      value: cdktf.numberToHclTerraform(struct!.syncRxInsertTuple),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_invalid_sync_packet_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxInvalidSyncPacketCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_len_invalid: {
      value: cdktf.numberToHclTerraform(struct!.syncRxLenInvalid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_lsn_create_sby: {
      value: cdktf.numberToHclTerraform(struct!.syncRxLsnCreateSby),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_lsn_fullcone: {
      value: cdktf.numberToHclTerraform(struct!.syncRxLsnFullcone),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_mon_entity: {
      value: cdktf.numberToHclTerraform(struct!.syncRxMonEntity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_nat_alloc_sby: {
      value: cdktf.numberToHclTerraform(struct!.syncRxNatAllocSby),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_nat_create_sby: {
      value: cdktf.numberToHclTerraform(struct!.syncRxNatCreateSby),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_no_dst_for_vport_inline: {
      value: cdktf.numberToHclTerraform(struct!.syncRxNoDstForVportInline),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_no_such_nat_pool: {
      value: cdktf.numberToHclTerraform(struct!.syncRxNoSuchNatPool),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_no_such_rport: {
      value: cdktf.numberToHclTerraform(struct!.syncRxNoSuchRport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_no_such_sg_node: {
      value: cdktf.numberToHclTerraform(struct!.syncRxNoSuchSgNode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_no_such_vport: {
      value: cdktf.numberToHclTerraform(struct!.syncRxNoSuchVport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_no_vgrp_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxNoVgrpCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_not_expect_sync_pkt: {
      value: cdktf.numberToHclTerraform(struct!.syncRxNotExpectSyncPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_out_of_order_pkt_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxOutOfOrderPktCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_persist_create_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxPersistCreateCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_persist_del_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxPersistDelCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_persist_update_age_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxPersistUpdateAgeCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_proto_not_supported: {
      value: cdktf.numberToHclTerraform(struct!.syncRxProtoNotSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_reserve_ha: {
      value: cdktf.numberToHclTerraform(struct!.syncRxReserveHa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_seq_deltas: {
      value: cdktf.numberToHclTerraform(struct!.syncRxSeqDeltas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_sfw: {
      value: cdktf.numberToHclTerraform(struct!.syncRxSfw),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_smp_clear_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxSmpClearCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_smp_create_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxSmpCreateCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_smp_delete_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxSmpDeleteCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_smp_radius_table_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxSmpRadiusTableCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_smp_update_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxSmpUpdateCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_table_entry_create_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxTableEntryCreateCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_table_entry_del_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxTableEntryDelCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_table_entry_update_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxTableEntryUpdateCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_total_info_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxTotalInfoCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_type_invalid: {
      value: cdktf.numberToHclTerraform(struct!.syncRxTypeInvalid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_unk_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxUnkCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_unreached_pkt_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxUnreachedPktCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_update_age_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxUpdateAgeCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_update_sctp_conn_addr: {
      value: cdktf.numberToHclTerraform(struct!.syncRxUpdateSctpConnAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_update_seqnos_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxUpdateSeqnosCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_zero_info_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxZeroInfoCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rx_zone_failure_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncRxZoneFailureCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_aflex_table_entry_add_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncTxAflexTableEntryAddCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_aflex_table_entry_append_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncTxAflexTableEntryAppendCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_aflex_table_entry_delete_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncTxAflexTableEntryDeleteCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_aflex_table_entry_error_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncTxAflexTableEntryErrorCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_aflex_table_entry_fastsync_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncTxAflexTableEntryFastsyncCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_aflex_table_entry_incr_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncTxAflexTableEntryIncrCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_aflex_table_entry_lifetime_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncTxAflexTableEntryLifetimeCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_aflex_table_entry_lookup_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncTxAflexTableEntryLookupCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_aflex_table_entry_not_eligible_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncTxAflexTableEntryNotEligibleCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_aflex_table_entry_replace_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncTxAflexTableEntryReplaceCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_aflex_table_entry_set_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncTxAflexTableEntrySetCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_aflex_table_entry_timeout_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncTxAflexTableEntryTimeoutCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_create_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncTxCreateCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_create_ext_bit_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncTxCreateExtBitCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_del_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncTxDelCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_estab_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncTxEstabCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_fw_set_dscp_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncTxFwSetDscpCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_get_buff_failed: {
      value: cdktf.numberToHclTerraform(struct!.syncTxGetBuffFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_lsn_fullcone: {
      value: cdktf.numberToHclTerraform(struct!.syncTxLsnFullcone),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_max_packed: {
      value: cdktf.numberToHclTerraform(struct!.syncTxMaxPacked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_min_packed: {
      value: cdktf.numberToHclTerraform(struct!.syncTxMinPacked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_mon_entity: {
      value: cdktf.numberToHclTerraform(struct!.syncTxMonEntity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_persist_create_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncTxPersistCreateCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_persist_del_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncTxPersistDelCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_persist_update_age_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncTxPersistUpdateAgeCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_smp_clear_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncTxSmpClearCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_smp_create_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncTxSmpCreateCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_smp_delete_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncTxSmpDeleteCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_smp_radius_table_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncTxSmpRadiusTableCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_smp_update_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncTxSmpUpdateCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_total_info_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncTxTotalInfoCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_update_age_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncTxUpdateAgeCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_update_sctp_conn_addr: {
      value: cdktf.numberToHclTerraform(struct!.syncTxUpdateSctpConnAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_tx_update_seqnos_counter: {
      value: cdktf.numberToHclTerraform(struct!.syncTxUpdateSeqnosCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVrrpAStateStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVrrpAStateStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsCacheSyncRxCreateCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCacheSyncRxCreateCounter = this._dnsCacheSyncRxCreateCounter;
    }
    if (this._dnsCacheSyncRxDelCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCacheSyncRxDelCounter = this._dnsCacheSyncRxDelCounter;
    }
    if (this._dnsCacheSyncRxErrorCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCacheSyncRxErrorCounter = this._dnsCacheSyncRxErrorCounter;
    }
    if (this._dnsCacheSyncRxFragCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCacheSyncRxFragCounter = this._dnsCacheSyncRxFragCounter;
    }
    if (this._dnsCacheSyncTxCreateCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCacheSyncTxCreateCounter = this._dnsCacheSyncTxCreateCounter;
    }
    if (this._dnsCacheSyncTxDelCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCacheSyncTxDelCounter = this._dnsCacheSyncTxDelCounter;
    }
    if (this._dnsCacheSyncTxErrorCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCacheSyncTxErrorCounter = this._dnsCacheSyncTxErrorCounter;
    }
    if (this._dnsCacheSyncTxFragCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsCacheSyncTxFragCounter = this._dnsCacheSyncTxFragCounter;
    }
    if (this._queryPktInvalidIdxCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryPktInvalidIdxCounter = this._queryPktInvalidIdxCounter;
    }
    if (this._queryPktNoReceivingIpCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryPktNoReceivingIpCounter = this._queryPktNoReceivingIpCounter;
    }
    if (this._queryPktRcvCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryPktRcvCounter = this._queryPktRcvCounter;
    }
    if (this._queryPktTxCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryPktTxCounter = this._queryPktTxCounter;
    }
    if (this._queryRxFullInfoCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryRxFullInfoCounter = this._queryRxFullInfoCounter;
    }
    if (this._queryRxInvalidHaGroupCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryRxInvalidHaGroupCounter = this._queryRxInvalidHaGroupCounter;
    }
    if (this._queryRxInvalidMsgDirCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryRxInvalidMsgDirCounter = this._queryRxInvalidMsgDirCounter;
    }
    if (this._queryRxInvalidPartitionCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryRxInvalidPartitionCounter = this._queryRxInvalidPartitionCounter;
    }
    if (this._queryRxInvalidSyncVersionCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryRxInvalidSyncVersionCounter = this._queryRxInvalidSyncVersionCounter;
    }
    if (this._queryRxUnkCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryRxUnkCounter = this._queryRxUnkCounter;
    }
    if (this._queryRxZeroInfoCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryRxZeroInfoCounter = this._queryRxZeroInfoCounter;
    }
    if (this._queryTxGetBuffFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTxGetBuffFailed = this._queryTxGetBuffFailed;
    }
    if (this._queryTxMaxPacked !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTxMaxPacked = this._queryTxMaxPacked;
    }
    if (this._queryTxMinPacked !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTxMinPacked = this._queryTxMinPacked;
    }
    if (this._syncErrLsnFullcone !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncErrLsnFullcone = this._syncErrLsnFullcone;
    }
    if (this._syncGetBuffFailedPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncGetBuffFailedPort = this._syncGetBuffFailedPort;
    }
    if (this._syncGetBuffFailedRt !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncGetBuffFailedRt = this._syncGetBuffFailedRt;
    }
    if (this._syncPersistRxCannotProcessMandatory !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPersistRxCannotProcessMandatory = this._syncPersistRxCannotProcessMandatory;
    }
    if (this._syncPersistRxConnGetFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPersistRxConnGetFailed = this._syncPersistRxConnGetFailed;
    }
    if (this._syncPersistRxExtBitProcessError !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPersistRxExtBitProcessError = this._syncPersistRxExtBitProcessError;
    }
    if (this._syncPersistRxLenInvalid !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPersistRxLenInvalid = this._syncPersistRxLenInvalid;
    }
    if (this._syncPersistRxNoSgGroupInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPersistRxNoSgGroupInfo = this._syncPersistRxNoSgGroupInfo;
    }
    if (this._syncPersistRxNoSuchRport !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPersistRxNoSuchRport = this._syncPersistRxNoSuchRport;
    }
    if (this._syncPersistRxNoSuchSgGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPersistRxNoSuchSgGroup = this._syncPersistRxNoSuchSgGroup;
    }
    if (this._syncPersistRxNoSuchVport !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPersistRxNoSuchVport = this._syncPersistRxNoSuchVport;
    }
    if (this._syncPersistRxProtoNotSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPersistRxProtoNotSupported = this._syncPersistRxProtoNotSupported;
    }
    if (this._syncPersistRxTypeInvalid !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPersistRxTypeInvalid = this._syncPersistRxTypeInvalid;
    }
    if (this._syncPersistRxVporttypeNotSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPersistRxVporttypeNotSupported = this._syncPersistRxVporttypeNotSupported;
    }
    if (this._syncPktEmptyBuffCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPktEmptyBuffCounter = this._syncPktEmptyBuffCounter;
    }
    if (this._syncPktFailedBuffCopyCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPktFailedBuffCopyCounter = this._syncPktFailedBuffCopyCounter;
    }
    if (this._syncPktInvalidIdxCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPktInvalidIdxCounter = this._syncPktInvalidIdxCounter;
    }
    if (this._syncPktNoReceivingVgrpCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPktNoReceivingVgrpCounter = this._syncPktNoReceivingVgrpCounter;
    }
    if (this._syncPktNoSendingVgrpCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPktNoSendingVgrpCounter = this._syncPktNoSendingVgrpCounter;
    }
    if (this._syncPktRcvCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPktRcvCounter = this._syncPktRcvCounter;
    }
    if (this._syncPktTxCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPktTxCounter = this._syncPktTxCounter;
    }
    if (this._syncQueryDcmsgCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncQueryDcmsgCounter = this._syncQueryDcmsgCounter;
    }
    if (this._syncRxAflexCreateCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxAflexCreateCounter = this._syncRxAflexCreateCounter;
    }
    if (this._syncRxAflexDelCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxAflexDelCounter = this._syncRxAflexDelCounter;
    }
    if (this._syncRxAflexFragCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxAflexFragCounter = this._syncRxAflexFragCounter;
    }
    if (this._syncRxAflexTableEntryAddCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxAflexTableEntryAddCounter = this._syncRxAflexTableEntryAddCounter;
    }
    if (this._syncRxAflexTableEntryAppendCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxAflexTableEntryAppendCounter = this._syncRxAflexTableEntryAppendCounter;
    }
    if (this._syncRxAflexTableEntryDeleteCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxAflexTableEntryDeleteCounter = this._syncRxAflexTableEntryDeleteCounter;
    }
    if (this._syncRxAflexTableEntryFastsyncCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxAflexTableEntryFastsyncCounter = this._syncRxAflexTableEntryFastsyncCounter;
    }
    if (this._syncRxAflexTableEntryIncrCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxAflexTableEntryIncrCounter = this._syncRxAflexTableEntryIncrCounter;
    }
    if (this._syncRxAflexTableEntryLifetimeCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxAflexTableEntryLifetimeCounter = this._syncRxAflexTableEntryLifetimeCounter;
    }
    if (this._syncRxAflexTableEntryLookupCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxAflexTableEntryLookupCounter = this._syncRxAflexTableEntryLookupCounter;
    }
    if (this._syncRxAflexTableEntryReplaceCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxAflexTableEntryReplaceCounter = this._syncRxAflexTableEntryReplaceCounter;
    }
    if (this._syncRxAflexTableEntrySetCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxAflexTableEntrySetCounter = this._syncRxAflexTableEntrySetCounter;
    }
    if (this._syncRxAflexTableEntryTimeoutCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxAflexTableEntryTimeoutCounter = this._syncRxAflexTableEntryTimeoutCounter;
    }
    if (this._syncRxAflexUpdateCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxAflexUpdateCounter = this._syncRxAflexUpdateCounter;
    }
    if (this._syncRxApptypeNotSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxApptypeNotSupported = this._syncRxApptypeNotSupported;
    }
    if (this._syncRxBadProtocolCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxBadProtocolCounter = this._syncRxBadProtocolCounter;
    }
    if (this._syncRxByInactivePeerCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxByInactivePeerCounter = this._syncRxByInactivePeerCounter;
    }
    if (this._syncRxCannotProcessMandatory !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxCannotProcessMandatory = this._syncRxCannotProcessMandatory;
    }
    if (this._syncRxConnExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxConnExists = this._syncRxConnExists;
    }
    if (this._syncRxConnGetFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxConnGetFailed = this._syncRxConnGetFailed;
    }
    if (this._syncRxCreateCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxCreateCounter = this._syncRxCreateCounter;
    }
    if (this._syncRxCreateExtBitCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxCreateExtBitCounter = this._syncRxCreateExtBitCounter;
    }
    if (this._syncRxCreateStaticSby !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxCreateStaticSby = this._syncRxCreateStaticSby;
    }
    if (this._syncRxDcmsgCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxDcmsgCounter = this._syncRxDcmsgCounter;
    }
    if (this._syncRxDdosDropCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxDdosDropCounter = this._syncRxDdosDropCounter;
    }
    if (this._syncRxDelCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxDelCounter = this._syncRxDelCounter;
    }
    if (this._syncRxDelNoSuchSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxDelNoSuchSession = this._syncRxDelNoSuchSession;
    }
    if (this._syncRxEstabCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxEstabCounter = this._syncRxEstabCounter;
    }
    if (this._syncRxExtBitProcessError !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxExtBitProcessError = this._syncRxExtBitProcessError;
    }
    if (this._syncRxExtDcfwLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxExtDcfwLog = this._syncRxExtDcfwLog;
    }
    if (this._syncRxExtDcfwRuleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxExtDcfwRuleId = this._syncRxExtDcfwRuleId;
    }
    if (this._syncRxExtDcfwRuleIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxExtDcfwRuleIdleTimeout = this._syncRxExtDcfwRuleIdleTimeout;
    }
    if (this._syncRxExtFwApps !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxExtFwApps = this._syncRxExtFwApps;
    }
    if (this._syncRxExtFwGtpEchoExtInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxExtFwGtpEchoExtInfo = this._syncRxExtFwGtpEchoExtInfo;
    }
    if (this._syncRxExtFwGtpExtInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxExtFwGtpExtInfo = this._syncRxExtFwGtpExtInfo;
    }
    if (this._syncRxExtFwGtpInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxExtFwGtpInfo = this._syncRxExtFwGtpInfo;
    }
    if (this._syncRxExtFwGtpLogExtInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxExtFwGtpLogExtInfo = this._syncRxExtFwGtpLogExtInfo;
    }
    if (this._syncRxExtFwGtpLogInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxExtFwGtpLogInfo = this._syncRxExtFwGtpLogInfo;
    }
    if (this._syncRxExtFwGtpUInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxExtFwGtpUInfo = this._syncRxExtFwGtpUInfo;
    }
    if (this._syncRxExtFwHttpLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxExtFwHttpLogging = this._syncRxExtFwHttpLogging;
    }
    if (this._syncRxExtFwLimitEntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxExtFwLimitEntry = this._syncRxExtFwLimitEntry;
    }
    if (this._syncRxExtFwSoShadowExtInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxExtFwSoShadowExtInfo = this._syncRxExtFwSoShadowExtInfo;
    }
    if (this._syncRxExtH323Alg !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxExtH323Alg = this._syncRxExtH323Alg;
    }
    if (this._syncRxExtLsnAcIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxExtLsnAcIdleTimeout = this._syncRxExtLsnAcIdleTimeout;
    }
    if (this._syncRxExtLsnAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxExtLsnAcl = this._syncRxExtLsnAcl;
    }
    if (this._syncRxExtNatAlgTcpInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxExtNatAlgTcpInfo = this._syncRxExtNatAlgTcpInfo;
    }
    if (this._syncRxExtNatMac !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxExtNatMac = this._syncRxExtNatMac;
    }
    if (this._syncRxExtPptp !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxExtPptp = this._syncRxExtPptp;
    }
    if (this._syncRxExtRtsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxExtRtsp = this._syncRxExtRtsp;
    }
    if (this._syncRxExtSipAlg !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxExtSipAlg = this._syncRxExtSipAlg;
    }
    if (this._syncRxFtpControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxFtpControl = this._syncRxFtpControl;
    }
    if (this._syncRxFwSetDscpCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxFwSetDscpCounter = this._syncRxFwSetDscpCounter;
    }
    if (this._syncRxInsertTuple !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxInsertTuple = this._syncRxInsertTuple;
    }
    if (this._syncRxInvalidSyncPacketCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxInvalidSyncPacketCounter = this._syncRxInvalidSyncPacketCounter;
    }
    if (this._syncRxLenInvalid !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxLenInvalid = this._syncRxLenInvalid;
    }
    if (this._syncRxLsnCreateSby !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxLsnCreateSby = this._syncRxLsnCreateSby;
    }
    if (this._syncRxLsnFullcone !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxLsnFullcone = this._syncRxLsnFullcone;
    }
    if (this._syncRxMonEntity !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxMonEntity = this._syncRxMonEntity;
    }
    if (this._syncRxNatAllocSby !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxNatAllocSby = this._syncRxNatAllocSby;
    }
    if (this._syncRxNatCreateSby !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxNatCreateSby = this._syncRxNatCreateSby;
    }
    if (this._syncRxNoDstForVportInline !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxNoDstForVportInline = this._syncRxNoDstForVportInline;
    }
    if (this._syncRxNoSuchNatPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxNoSuchNatPool = this._syncRxNoSuchNatPool;
    }
    if (this._syncRxNoSuchRport !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxNoSuchRport = this._syncRxNoSuchRport;
    }
    if (this._syncRxNoSuchSgNode !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxNoSuchSgNode = this._syncRxNoSuchSgNode;
    }
    if (this._syncRxNoSuchVport !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxNoSuchVport = this._syncRxNoSuchVport;
    }
    if (this._syncRxNoVgrpCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxNoVgrpCounter = this._syncRxNoVgrpCounter;
    }
    if (this._syncRxNotExpectSyncPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxNotExpectSyncPkt = this._syncRxNotExpectSyncPkt;
    }
    if (this._syncRxOutOfOrderPktCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxOutOfOrderPktCounter = this._syncRxOutOfOrderPktCounter;
    }
    if (this._syncRxPersistCreateCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxPersistCreateCounter = this._syncRxPersistCreateCounter;
    }
    if (this._syncRxPersistDelCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxPersistDelCounter = this._syncRxPersistDelCounter;
    }
    if (this._syncRxPersistUpdateAgeCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxPersistUpdateAgeCounter = this._syncRxPersistUpdateAgeCounter;
    }
    if (this._syncRxProtoNotSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxProtoNotSupported = this._syncRxProtoNotSupported;
    }
    if (this._syncRxReserveHa !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxReserveHa = this._syncRxReserveHa;
    }
    if (this._syncRxSeqDeltas !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxSeqDeltas = this._syncRxSeqDeltas;
    }
    if (this._syncRxSfw !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxSfw = this._syncRxSfw;
    }
    if (this._syncRxSmpClearCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxSmpClearCounter = this._syncRxSmpClearCounter;
    }
    if (this._syncRxSmpCreateCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxSmpCreateCounter = this._syncRxSmpCreateCounter;
    }
    if (this._syncRxSmpDeleteCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxSmpDeleteCounter = this._syncRxSmpDeleteCounter;
    }
    if (this._syncRxSmpRadiusTableCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxSmpRadiusTableCounter = this._syncRxSmpRadiusTableCounter;
    }
    if (this._syncRxSmpUpdateCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxSmpUpdateCounter = this._syncRxSmpUpdateCounter;
    }
    if (this._syncRxTableEntryCreateCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxTableEntryCreateCounter = this._syncRxTableEntryCreateCounter;
    }
    if (this._syncRxTableEntryDelCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxTableEntryDelCounter = this._syncRxTableEntryDelCounter;
    }
    if (this._syncRxTableEntryUpdateCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxTableEntryUpdateCounter = this._syncRxTableEntryUpdateCounter;
    }
    if (this._syncRxTotalInfoCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxTotalInfoCounter = this._syncRxTotalInfoCounter;
    }
    if (this._syncRxTypeInvalid !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxTypeInvalid = this._syncRxTypeInvalid;
    }
    if (this._syncRxUnkCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxUnkCounter = this._syncRxUnkCounter;
    }
    if (this._syncRxUnreachedPktCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxUnreachedPktCounter = this._syncRxUnreachedPktCounter;
    }
    if (this._syncRxUpdateAgeCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxUpdateAgeCounter = this._syncRxUpdateAgeCounter;
    }
    if (this._syncRxUpdateSctpConnAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxUpdateSctpConnAddr = this._syncRxUpdateSctpConnAddr;
    }
    if (this._syncRxUpdateSeqnosCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxUpdateSeqnosCounter = this._syncRxUpdateSeqnosCounter;
    }
    if (this._syncRxZeroInfoCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxZeroInfoCounter = this._syncRxZeroInfoCounter;
    }
    if (this._syncRxZoneFailureCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRxZoneFailureCounter = this._syncRxZoneFailureCounter;
    }
    if (this._syncTxAflexTableEntryAddCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxAflexTableEntryAddCounter = this._syncTxAflexTableEntryAddCounter;
    }
    if (this._syncTxAflexTableEntryAppendCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxAflexTableEntryAppendCounter = this._syncTxAflexTableEntryAppendCounter;
    }
    if (this._syncTxAflexTableEntryDeleteCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxAflexTableEntryDeleteCounter = this._syncTxAflexTableEntryDeleteCounter;
    }
    if (this._syncTxAflexTableEntryErrorCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxAflexTableEntryErrorCounter = this._syncTxAflexTableEntryErrorCounter;
    }
    if (this._syncTxAflexTableEntryFastsyncCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxAflexTableEntryFastsyncCounter = this._syncTxAflexTableEntryFastsyncCounter;
    }
    if (this._syncTxAflexTableEntryIncrCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxAflexTableEntryIncrCounter = this._syncTxAflexTableEntryIncrCounter;
    }
    if (this._syncTxAflexTableEntryLifetimeCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxAflexTableEntryLifetimeCounter = this._syncTxAflexTableEntryLifetimeCounter;
    }
    if (this._syncTxAflexTableEntryLookupCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxAflexTableEntryLookupCounter = this._syncTxAflexTableEntryLookupCounter;
    }
    if (this._syncTxAflexTableEntryNotEligibleCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxAflexTableEntryNotEligibleCounter = this._syncTxAflexTableEntryNotEligibleCounter;
    }
    if (this._syncTxAflexTableEntryReplaceCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxAflexTableEntryReplaceCounter = this._syncTxAflexTableEntryReplaceCounter;
    }
    if (this._syncTxAflexTableEntrySetCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxAflexTableEntrySetCounter = this._syncTxAflexTableEntrySetCounter;
    }
    if (this._syncTxAflexTableEntryTimeoutCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxAflexTableEntryTimeoutCounter = this._syncTxAflexTableEntryTimeoutCounter;
    }
    if (this._syncTxCreateCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxCreateCounter = this._syncTxCreateCounter;
    }
    if (this._syncTxCreateExtBitCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxCreateExtBitCounter = this._syncTxCreateExtBitCounter;
    }
    if (this._syncTxDelCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxDelCounter = this._syncTxDelCounter;
    }
    if (this._syncTxEstabCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxEstabCounter = this._syncTxEstabCounter;
    }
    if (this._syncTxFwSetDscpCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxFwSetDscpCounter = this._syncTxFwSetDscpCounter;
    }
    if (this._syncTxGetBuffFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxGetBuffFailed = this._syncTxGetBuffFailed;
    }
    if (this._syncTxLsnFullcone !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxLsnFullcone = this._syncTxLsnFullcone;
    }
    if (this._syncTxMaxPacked !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxMaxPacked = this._syncTxMaxPacked;
    }
    if (this._syncTxMinPacked !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxMinPacked = this._syncTxMinPacked;
    }
    if (this._syncTxMonEntity !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxMonEntity = this._syncTxMonEntity;
    }
    if (this._syncTxPersistCreateCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxPersistCreateCounter = this._syncTxPersistCreateCounter;
    }
    if (this._syncTxPersistDelCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxPersistDelCounter = this._syncTxPersistDelCounter;
    }
    if (this._syncTxPersistUpdateAgeCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxPersistUpdateAgeCounter = this._syncTxPersistUpdateAgeCounter;
    }
    if (this._syncTxSmpClearCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxSmpClearCounter = this._syncTxSmpClearCounter;
    }
    if (this._syncTxSmpCreateCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxSmpCreateCounter = this._syncTxSmpCreateCounter;
    }
    if (this._syncTxSmpDeleteCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxSmpDeleteCounter = this._syncTxSmpDeleteCounter;
    }
    if (this._syncTxSmpRadiusTableCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxSmpRadiusTableCounter = this._syncTxSmpRadiusTableCounter;
    }
    if (this._syncTxSmpUpdateCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxSmpUpdateCounter = this._syncTxSmpUpdateCounter;
    }
    if (this._syncTxTotalInfoCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxTotalInfoCounter = this._syncTxTotalInfoCounter;
    }
    if (this._syncTxUpdateAgeCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxUpdateAgeCounter = this._syncTxUpdateAgeCounter;
    }
    if (this._syncTxUpdateSctpConnAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxUpdateSctpConnAddr = this._syncTxUpdateSctpConnAddr;
    }
    if (this._syncTxUpdateSeqnosCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncTxUpdateSeqnosCounter = this._syncTxUpdateSeqnosCounter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVrrpAStateStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsCacheSyncRxCreateCounter = undefined;
      this._dnsCacheSyncRxDelCounter = undefined;
      this._dnsCacheSyncRxErrorCounter = undefined;
      this._dnsCacheSyncRxFragCounter = undefined;
      this._dnsCacheSyncTxCreateCounter = undefined;
      this._dnsCacheSyncTxDelCounter = undefined;
      this._dnsCacheSyncTxErrorCounter = undefined;
      this._dnsCacheSyncTxFragCounter = undefined;
      this._queryPktInvalidIdxCounter = undefined;
      this._queryPktNoReceivingIpCounter = undefined;
      this._queryPktRcvCounter = undefined;
      this._queryPktTxCounter = undefined;
      this._queryRxFullInfoCounter = undefined;
      this._queryRxInvalidHaGroupCounter = undefined;
      this._queryRxInvalidMsgDirCounter = undefined;
      this._queryRxInvalidPartitionCounter = undefined;
      this._queryRxInvalidSyncVersionCounter = undefined;
      this._queryRxUnkCounter = undefined;
      this._queryRxZeroInfoCounter = undefined;
      this._queryTxGetBuffFailed = undefined;
      this._queryTxMaxPacked = undefined;
      this._queryTxMinPacked = undefined;
      this._syncErrLsnFullcone = undefined;
      this._syncGetBuffFailedPort = undefined;
      this._syncGetBuffFailedRt = undefined;
      this._syncPersistRxCannotProcessMandatory = undefined;
      this._syncPersistRxConnGetFailed = undefined;
      this._syncPersistRxExtBitProcessError = undefined;
      this._syncPersistRxLenInvalid = undefined;
      this._syncPersistRxNoSgGroupInfo = undefined;
      this._syncPersistRxNoSuchRport = undefined;
      this._syncPersistRxNoSuchSgGroup = undefined;
      this._syncPersistRxNoSuchVport = undefined;
      this._syncPersistRxProtoNotSupported = undefined;
      this._syncPersistRxTypeInvalid = undefined;
      this._syncPersistRxVporttypeNotSupported = undefined;
      this._syncPktEmptyBuffCounter = undefined;
      this._syncPktFailedBuffCopyCounter = undefined;
      this._syncPktInvalidIdxCounter = undefined;
      this._syncPktNoReceivingVgrpCounter = undefined;
      this._syncPktNoSendingVgrpCounter = undefined;
      this._syncPktRcvCounter = undefined;
      this._syncPktTxCounter = undefined;
      this._syncQueryDcmsgCounter = undefined;
      this._syncRxAflexCreateCounter = undefined;
      this._syncRxAflexDelCounter = undefined;
      this._syncRxAflexFragCounter = undefined;
      this._syncRxAflexTableEntryAddCounter = undefined;
      this._syncRxAflexTableEntryAppendCounter = undefined;
      this._syncRxAflexTableEntryDeleteCounter = undefined;
      this._syncRxAflexTableEntryFastsyncCounter = undefined;
      this._syncRxAflexTableEntryIncrCounter = undefined;
      this._syncRxAflexTableEntryLifetimeCounter = undefined;
      this._syncRxAflexTableEntryLookupCounter = undefined;
      this._syncRxAflexTableEntryReplaceCounter = undefined;
      this._syncRxAflexTableEntrySetCounter = undefined;
      this._syncRxAflexTableEntryTimeoutCounter = undefined;
      this._syncRxAflexUpdateCounter = undefined;
      this._syncRxApptypeNotSupported = undefined;
      this._syncRxBadProtocolCounter = undefined;
      this._syncRxByInactivePeerCounter = undefined;
      this._syncRxCannotProcessMandatory = undefined;
      this._syncRxConnExists = undefined;
      this._syncRxConnGetFailed = undefined;
      this._syncRxCreateCounter = undefined;
      this._syncRxCreateExtBitCounter = undefined;
      this._syncRxCreateStaticSby = undefined;
      this._syncRxDcmsgCounter = undefined;
      this._syncRxDdosDropCounter = undefined;
      this._syncRxDelCounter = undefined;
      this._syncRxDelNoSuchSession = undefined;
      this._syncRxEstabCounter = undefined;
      this._syncRxExtBitProcessError = undefined;
      this._syncRxExtDcfwLog = undefined;
      this._syncRxExtDcfwRuleId = undefined;
      this._syncRxExtDcfwRuleIdleTimeout = undefined;
      this._syncRxExtFwApps = undefined;
      this._syncRxExtFwGtpEchoExtInfo = undefined;
      this._syncRxExtFwGtpExtInfo = undefined;
      this._syncRxExtFwGtpInfo = undefined;
      this._syncRxExtFwGtpLogExtInfo = undefined;
      this._syncRxExtFwGtpLogInfo = undefined;
      this._syncRxExtFwGtpUInfo = undefined;
      this._syncRxExtFwHttpLogging = undefined;
      this._syncRxExtFwLimitEntry = undefined;
      this._syncRxExtFwSoShadowExtInfo = undefined;
      this._syncRxExtH323Alg = undefined;
      this._syncRxExtLsnAcIdleTimeout = undefined;
      this._syncRxExtLsnAcl = undefined;
      this._syncRxExtNatAlgTcpInfo = undefined;
      this._syncRxExtNatMac = undefined;
      this._syncRxExtPptp = undefined;
      this._syncRxExtRtsp = undefined;
      this._syncRxExtSipAlg = undefined;
      this._syncRxFtpControl = undefined;
      this._syncRxFwSetDscpCounter = undefined;
      this._syncRxInsertTuple = undefined;
      this._syncRxInvalidSyncPacketCounter = undefined;
      this._syncRxLenInvalid = undefined;
      this._syncRxLsnCreateSby = undefined;
      this._syncRxLsnFullcone = undefined;
      this._syncRxMonEntity = undefined;
      this._syncRxNatAllocSby = undefined;
      this._syncRxNatCreateSby = undefined;
      this._syncRxNoDstForVportInline = undefined;
      this._syncRxNoSuchNatPool = undefined;
      this._syncRxNoSuchRport = undefined;
      this._syncRxNoSuchSgNode = undefined;
      this._syncRxNoSuchVport = undefined;
      this._syncRxNoVgrpCounter = undefined;
      this._syncRxNotExpectSyncPkt = undefined;
      this._syncRxOutOfOrderPktCounter = undefined;
      this._syncRxPersistCreateCounter = undefined;
      this._syncRxPersistDelCounter = undefined;
      this._syncRxPersistUpdateAgeCounter = undefined;
      this._syncRxProtoNotSupported = undefined;
      this._syncRxReserveHa = undefined;
      this._syncRxSeqDeltas = undefined;
      this._syncRxSfw = undefined;
      this._syncRxSmpClearCounter = undefined;
      this._syncRxSmpCreateCounter = undefined;
      this._syncRxSmpDeleteCounter = undefined;
      this._syncRxSmpRadiusTableCounter = undefined;
      this._syncRxSmpUpdateCounter = undefined;
      this._syncRxTableEntryCreateCounter = undefined;
      this._syncRxTableEntryDelCounter = undefined;
      this._syncRxTableEntryUpdateCounter = undefined;
      this._syncRxTotalInfoCounter = undefined;
      this._syncRxTypeInvalid = undefined;
      this._syncRxUnkCounter = undefined;
      this._syncRxUnreachedPktCounter = undefined;
      this._syncRxUpdateAgeCounter = undefined;
      this._syncRxUpdateSctpConnAddr = undefined;
      this._syncRxUpdateSeqnosCounter = undefined;
      this._syncRxZeroInfoCounter = undefined;
      this._syncRxZoneFailureCounter = undefined;
      this._syncTxAflexTableEntryAddCounter = undefined;
      this._syncTxAflexTableEntryAppendCounter = undefined;
      this._syncTxAflexTableEntryDeleteCounter = undefined;
      this._syncTxAflexTableEntryErrorCounter = undefined;
      this._syncTxAflexTableEntryFastsyncCounter = undefined;
      this._syncTxAflexTableEntryIncrCounter = undefined;
      this._syncTxAflexTableEntryLifetimeCounter = undefined;
      this._syncTxAflexTableEntryLookupCounter = undefined;
      this._syncTxAflexTableEntryNotEligibleCounter = undefined;
      this._syncTxAflexTableEntryReplaceCounter = undefined;
      this._syncTxAflexTableEntrySetCounter = undefined;
      this._syncTxAflexTableEntryTimeoutCounter = undefined;
      this._syncTxCreateCounter = undefined;
      this._syncTxCreateExtBitCounter = undefined;
      this._syncTxDelCounter = undefined;
      this._syncTxEstabCounter = undefined;
      this._syncTxFwSetDscpCounter = undefined;
      this._syncTxGetBuffFailed = undefined;
      this._syncTxLsnFullcone = undefined;
      this._syncTxMaxPacked = undefined;
      this._syncTxMinPacked = undefined;
      this._syncTxMonEntity = undefined;
      this._syncTxPersistCreateCounter = undefined;
      this._syncTxPersistDelCounter = undefined;
      this._syncTxPersistUpdateAgeCounter = undefined;
      this._syncTxSmpClearCounter = undefined;
      this._syncTxSmpCreateCounter = undefined;
      this._syncTxSmpDeleteCounter = undefined;
      this._syncTxSmpRadiusTableCounter = undefined;
      this._syncTxSmpUpdateCounter = undefined;
      this._syncTxTotalInfoCounter = undefined;
      this._syncTxUpdateAgeCounter = undefined;
      this._syncTxUpdateSctpConnAddr = undefined;
      this._syncTxUpdateSeqnosCounter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsCacheSyncRxCreateCounter = value.dnsCacheSyncRxCreateCounter;
      this._dnsCacheSyncRxDelCounter = value.dnsCacheSyncRxDelCounter;
      this._dnsCacheSyncRxErrorCounter = value.dnsCacheSyncRxErrorCounter;
      this._dnsCacheSyncRxFragCounter = value.dnsCacheSyncRxFragCounter;
      this._dnsCacheSyncTxCreateCounter = value.dnsCacheSyncTxCreateCounter;
      this._dnsCacheSyncTxDelCounter = value.dnsCacheSyncTxDelCounter;
      this._dnsCacheSyncTxErrorCounter = value.dnsCacheSyncTxErrorCounter;
      this._dnsCacheSyncTxFragCounter = value.dnsCacheSyncTxFragCounter;
      this._queryPktInvalidIdxCounter = value.queryPktInvalidIdxCounter;
      this._queryPktNoReceivingIpCounter = value.queryPktNoReceivingIpCounter;
      this._queryPktRcvCounter = value.queryPktRcvCounter;
      this._queryPktTxCounter = value.queryPktTxCounter;
      this._queryRxFullInfoCounter = value.queryRxFullInfoCounter;
      this._queryRxInvalidHaGroupCounter = value.queryRxInvalidHaGroupCounter;
      this._queryRxInvalidMsgDirCounter = value.queryRxInvalidMsgDirCounter;
      this._queryRxInvalidPartitionCounter = value.queryRxInvalidPartitionCounter;
      this._queryRxInvalidSyncVersionCounter = value.queryRxInvalidSyncVersionCounter;
      this._queryRxUnkCounter = value.queryRxUnkCounter;
      this._queryRxZeroInfoCounter = value.queryRxZeroInfoCounter;
      this._queryTxGetBuffFailed = value.queryTxGetBuffFailed;
      this._queryTxMaxPacked = value.queryTxMaxPacked;
      this._queryTxMinPacked = value.queryTxMinPacked;
      this._syncErrLsnFullcone = value.syncErrLsnFullcone;
      this._syncGetBuffFailedPort = value.syncGetBuffFailedPort;
      this._syncGetBuffFailedRt = value.syncGetBuffFailedRt;
      this._syncPersistRxCannotProcessMandatory = value.syncPersistRxCannotProcessMandatory;
      this._syncPersistRxConnGetFailed = value.syncPersistRxConnGetFailed;
      this._syncPersistRxExtBitProcessError = value.syncPersistRxExtBitProcessError;
      this._syncPersistRxLenInvalid = value.syncPersistRxLenInvalid;
      this._syncPersistRxNoSgGroupInfo = value.syncPersistRxNoSgGroupInfo;
      this._syncPersistRxNoSuchRport = value.syncPersistRxNoSuchRport;
      this._syncPersistRxNoSuchSgGroup = value.syncPersistRxNoSuchSgGroup;
      this._syncPersistRxNoSuchVport = value.syncPersistRxNoSuchVport;
      this._syncPersistRxProtoNotSupported = value.syncPersistRxProtoNotSupported;
      this._syncPersistRxTypeInvalid = value.syncPersistRxTypeInvalid;
      this._syncPersistRxVporttypeNotSupported = value.syncPersistRxVporttypeNotSupported;
      this._syncPktEmptyBuffCounter = value.syncPktEmptyBuffCounter;
      this._syncPktFailedBuffCopyCounter = value.syncPktFailedBuffCopyCounter;
      this._syncPktInvalidIdxCounter = value.syncPktInvalidIdxCounter;
      this._syncPktNoReceivingVgrpCounter = value.syncPktNoReceivingVgrpCounter;
      this._syncPktNoSendingVgrpCounter = value.syncPktNoSendingVgrpCounter;
      this._syncPktRcvCounter = value.syncPktRcvCounter;
      this._syncPktTxCounter = value.syncPktTxCounter;
      this._syncQueryDcmsgCounter = value.syncQueryDcmsgCounter;
      this._syncRxAflexCreateCounter = value.syncRxAflexCreateCounter;
      this._syncRxAflexDelCounter = value.syncRxAflexDelCounter;
      this._syncRxAflexFragCounter = value.syncRxAflexFragCounter;
      this._syncRxAflexTableEntryAddCounter = value.syncRxAflexTableEntryAddCounter;
      this._syncRxAflexTableEntryAppendCounter = value.syncRxAflexTableEntryAppendCounter;
      this._syncRxAflexTableEntryDeleteCounter = value.syncRxAflexTableEntryDeleteCounter;
      this._syncRxAflexTableEntryFastsyncCounter = value.syncRxAflexTableEntryFastsyncCounter;
      this._syncRxAflexTableEntryIncrCounter = value.syncRxAflexTableEntryIncrCounter;
      this._syncRxAflexTableEntryLifetimeCounter = value.syncRxAflexTableEntryLifetimeCounter;
      this._syncRxAflexTableEntryLookupCounter = value.syncRxAflexTableEntryLookupCounter;
      this._syncRxAflexTableEntryReplaceCounter = value.syncRxAflexTableEntryReplaceCounter;
      this._syncRxAflexTableEntrySetCounter = value.syncRxAflexTableEntrySetCounter;
      this._syncRxAflexTableEntryTimeoutCounter = value.syncRxAflexTableEntryTimeoutCounter;
      this._syncRxAflexUpdateCounter = value.syncRxAflexUpdateCounter;
      this._syncRxApptypeNotSupported = value.syncRxApptypeNotSupported;
      this._syncRxBadProtocolCounter = value.syncRxBadProtocolCounter;
      this._syncRxByInactivePeerCounter = value.syncRxByInactivePeerCounter;
      this._syncRxCannotProcessMandatory = value.syncRxCannotProcessMandatory;
      this._syncRxConnExists = value.syncRxConnExists;
      this._syncRxConnGetFailed = value.syncRxConnGetFailed;
      this._syncRxCreateCounter = value.syncRxCreateCounter;
      this._syncRxCreateExtBitCounter = value.syncRxCreateExtBitCounter;
      this._syncRxCreateStaticSby = value.syncRxCreateStaticSby;
      this._syncRxDcmsgCounter = value.syncRxDcmsgCounter;
      this._syncRxDdosDropCounter = value.syncRxDdosDropCounter;
      this._syncRxDelCounter = value.syncRxDelCounter;
      this._syncRxDelNoSuchSession = value.syncRxDelNoSuchSession;
      this._syncRxEstabCounter = value.syncRxEstabCounter;
      this._syncRxExtBitProcessError = value.syncRxExtBitProcessError;
      this._syncRxExtDcfwLog = value.syncRxExtDcfwLog;
      this._syncRxExtDcfwRuleId = value.syncRxExtDcfwRuleId;
      this._syncRxExtDcfwRuleIdleTimeout = value.syncRxExtDcfwRuleIdleTimeout;
      this._syncRxExtFwApps = value.syncRxExtFwApps;
      this._syncRxExtFwGtpEchoExtInfo = value.syncRxExtFwGtpEchoExtInfo;
      this._syncRxExtFwGtpExtInfo = value.syncRxExtFwGtpExtInfo;
      this._syncRxExtFwGtpInfo = value.syncRxExtFwGtpInfo;
      this._syncRxExtFwGtpLogExtInfo = value.syncRxExtFwGtpLogExtInfo;
      this._syncRxExtFwGtpLogInfo = value.syncRxExtFwGtpLogInfo;
      this._syncRxExtFwGtpUInfo = value.syncRxExtFwGtpUInfo;
      this._syncRxExtFwHttpLogging = value.syncRxExtFwHttpLogging;
      this._syncRxExtFwLimitEntry = value.syncRxExtFwLimitEntry;
      this._syncRxExtFwSoShadowExtInfo = value.syncRxExtFwSoShadowExtInfo;
      this._syncRxExtH323Alg = value.syncRxExtH323Alg;
      this._syncRxExtLsnAcIdleTimeout = value.syncRxExtLsnAcIdleTimeout;
      this._syncRxExtLsnAcl = value.syncRxExtLsnAcl;
      this._syncRxExtNatAlgTcpInfo = value.syncRxExtNatAlgTcpInfo;
      this._syncRxExtNatMac = value.syncRxExtNatMac;
      this._syncRxExtPptp = value.syncRxExtPptp;
      this._syncRxExtRtsp = value.syncRxExtRtsp;
      this._syncRxExtSipAlg = value.syncRxExtSipAlg;
      this._syncRxFtpControl = value.syncRxFtpControl;
      this._syncRxFwSetDscpCounter = value.syncRxFwSetDscpCounter;
      this._syncRxInsertTuple = value.syncRxInsertTuple;
      this._syncRxInvalidSyncPacketCounter = value.syncRxInvalidSyncPacketCounter;
      this._syncRxLenInvalid = value.syncRxLenInvalid;
      this._syncRxLsnCreateSby = value.syncRxLsnCreateSby;
      this._syncRxLsnFullcone = value.syncRxLsnFullcone;
      this._syncRxMonEntity = value.syncRxMonEntity;
      this._syncRxNatAllocSby = value.syncRxNatAllocSby;
      this._syncRxNatCreateSby = value.syncRxNatCreateSby;
      this._syncRxNoDstForVportInline = value.syncRxNoDstForVportInline;
      this._syncRxNoSuchNatPool = value.syncRxNoSuchNatPool;
      this._syncRxNoSuchRport = value.syncRxNoSuchRport;
      this._syncRxNoSuchSgNode = value.syncRxNoSuchSgNode;
      this._syncRxNoSuchVport = value.syncRxNoSuchVport;
      this._syncRxNoVgrpCounter = value.syncRxNoVgrpCounter;
      this._syncRxNotExpectSyncPkt = value.syncRxNotExpectSyncPkt;
      this._syncRxOutOfOrderPktCounter = value.syncRxOutOfOrderPktCounter;
      this._syncRxPersistCreateCounter = value.syncRxPersistCreateCounter;
      this._syncRxPersistDelCounter = value.syncRxPersistDelCounter;
      this._syncRxPersistUpdateAgeCounter = value.syncRxPersistUpdateAgeCounter;
      this._syncRxProtoNotSupported = value.syncRxProtoNotSupported;
      this._syncRxReserveHa = value.syncRxReserveHa;
      this._syncRxSeqDeltas = value.syncRxSeqDeltas;
      this._syncRxSfw = value.syncRxSfw;
      this._syncRxSmpClearCounter = value.syncRxSmpClearCounter;
      this._syncRxSmpCreateCounter = value.syncRxSmpCreateCounter;
      this._syncRxSmpDeleteCounter = value.syncRxSmpDeleteCounter;
      this._syncRxSmpRadiusTableCounter = value.syncRxSmpRadiusTableCounter;
      this._syncRxSmpUpdateCounter = value.syncRxSmpUpdateCounter;
      this._syncRxTableEntryCreateCounter = value.syncRxTableEntryCreateCounter;
      this._syncRxTableEntryDelCounter = value.syncRxTableEntryDelCounter;
      this._syncRxTableEntryUpdateCounter = value.syncRxTableEntryUpdateCounter;
      this._syncRxTotalInfoCounter = value.syncRxTotalInfoCounter;
      this._syncRxTypeInvalid = value.syncRxTypeInvalid;
      this._syncRxUnkCounter = value.syncRxUnkCounter;
      this._syncRxUnreachedPktCounter = value.syncRxUnreachedPktCounter;
      this._syncRxUpdateAgeCounter = value.syncRxUpdateAgeCounter;
      this._syncRxUpdateSctpConnAddr = value.syncRxUpdateSctpConnAddr;
      this._syncRxUpdateSeqnosCounter = value.syncRxUpdateSeqnosCounter;
      this._syncRxZeroInfoCounter = value.syncRxZeroInfoCounter;
      this._syncRxZoneFailureCounter = value.syncRxZoneFailureCounter;
      this._syncTxAflexTableEntryAddCounter = value.syncTxAflexTableEntryAddCounter;
      this._syncTxAflexTableEntryAppendCounter = value.syncTxAflexTableEntryAppendCounter;
      this._syncTxAflexTableEntryDeleteCounter = value.syncTxAflexTableEntryDeleteCounter;
      this._syncTxAflexTableEntryErrorCounter = value.syncTxAflexTableEntryErrorCounter;
      this._syncTxAflexTableEntryFastsyncCounter = value.syncTxAflexTableEntryFastsyncCounter;
      this._syncTxAflexTableEntryIncrCounter = value.syncTxAflexTableEntryIncrCounter;
      this._syncTxAflexTableEntryLifetimeCounter = value.syncTxAflexTableEntryLifetimeCounter;
      this._syncTxAflexTableEntryLookupCounter = value.syncTxAflexTableEntryLookupCounter;
      this._syncTxAflexTableEntryNotEligibleCounter = value.syncTxAflexTableEntryNotEligibleCounter;
      this._syncTxAflexTableEntryReplaceCounter = value.syncTxAflexTableEntryReplaceCounter;
      this._syncTxAflexTableEntrySetCounter = value.syncTxAflexTableEntrySetCounter;
      this._syncTxAflexTableEntryTimeoutCounter = value.syncTxAflexTableEntryTimeoutCounter;
      this._syncTxCreateCounter = value.syncTxCreateCounter;
      this._syncTxCreateExtBitCounter = value.syncTxCreateExtBitCounter;
      this._syncTxDelCounter = value.syncTxDelCounter;
      this._syncTxEstabCounter = value.syncTxEstabCounter;
      this._syncTxFwSetDscpCounter = value.syncTxFwSetDscpCounter;
      this._syncTxGetBuffFailed = value.syncTxGetBuffFailed;
      this._syncTxLsnFullcone = value.syncTxLsnFullcone;
      this._syncTxMaxPacked = value.syncTxMaxPacked;
      this._syncTxMinPacked = value.syncTxMinPacked;
      this._syncTxMonEntity = value.syncTxMonEntity;
      this._syncTxPersistCreateCounter = value.syncTxPersistCreateCounter;
      this._syncTxPersistDelCounter = value.syncTxPersistDelCounter;
      this._syncTxPersistUpdateAgeCounter = value.syncTxPersistUpdateAgeCounter;
      this._syncTxSmpClearCounter = value.syncTxSmpClearCounter;
      this._syncTxSmpCreateCounter = value.syncTxSmpCreateCounter;
      this._syncTxSmpDeleteCounter = value.syncTxSmpDeleteCounter;
      this._syncTxSmpRadiusTableCounter = value.syncTxSmpRadiusTableCounter;
      this._syncTxSmpUpdateCounter = value.syncTxSmpUpdateCounter;
      this._syncTxTotalInfoCounter = value.syncTxTotalInfoCounter;
      this._syncTxUpdateAgeCounter = value.syncTxUpdateAgeCounter;
      this._syncTxUpdateSctpConnAddr = value.syncTxUpdateSctpConnAddr;
      this._syncTxUpdateSeqnosCounter = value.syncTxUpdateSeqnosCounter;
    }
  }

  // dns_cache_sync_rx_create_counter - computed: false, optional: true, required: false
  private _dnsCacheSyncRxCreateCounter?: number; 
  public get dnsCacheSyncRxCreateCounter() {
    return this.getNumberAttribute('dns_cache_sync_rx_create_counter');
  }
  public set dnsCacheSyncRxCreateCounter(value: number) {
    this._dnsCacheSyncRxCreateCounter = value;
  }
  public resetDnsCacheSyncRxCreateCounter() {
    this._dnsCacheSyncRxCreateCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheSyncRxCreateCounterInput() {
    return this._dnsCacheSyncRxCreateCounter;
  }

  // dns_cache_sync_rx_del_counter - computed: false, optional: true, required: false
  private _dnsCacheSyncRxDelCounter?: number; 
  public get dnsCacheSyncRxDelCounter() {
    return this.getNumberAttribute('dns_cache_sync_rx_del_counter');
  }
  public set dnsCacheSyncRxDelCounter(value: number) {
    this._dnsCacheSyncRxDelCounter = value;
  }
  public resetDnsCacheSyncRxDelCounter() {
    this._dnsCacheSyncRxDelCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheSyncRxDelCounterInput() {
    return this._dnsCacheSyncRxDelCounter;
  }

  // dns_cache_sync_rx_error_counter - computed: false, optional: true, required: false
  private _dnsCacheSyncRxErrorCounter?: number; 
  public get dnsCacheSyncRxErrorCounter() {
    return this.getNumberAttribute('dns_cache_sync_rx_error_counter');
  }
  public set dnsCacheSyncRxErrorCounter(value: number) {
    this._dnsCacheSyncRxErrorCounter = value;
  }
  public resetDnsCacheSyncRxErrorCounter() {
    this._dnsCacheSyncRxErrorCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheSyncRxErrorCounterInput() {
    return this._dnsCacheSyncRxErrorCounter;
  }

  // dns_cache_sync_rx_frag_counter - computed: false, optional: true, required: false
  private _dnsCacheSyncRxFragCounter?: number; 
  public get dnsCacheSyncRxFragCounter() {
    return this.getNumberAttribute('dns_cache_sync_rx_frag_counter');
  }
  public set dnsCacheSyncRxFragCounter(value: number) {
    this._dnsCacheSyncRxFragCounter = value;
  }
  public resetDnsCacheSyncRxFragCounter() {
    this._dnsCacheSyncRxFragCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheSyncRxFragCounterInput() {
    return this._dnsCacheSyncRxFragCounter;
  }

  // dns_cache_sync_tx_create_counter - computed: false, optional: true, required: false
  private _dnsCacheSyncTxCreateCounter?: number; 
  public get dnsCacheSyncTxCreateCounter() {
    return this.getNumberAttribute('dns_cache_sync_tx_create_counter');
  }
  public set dnsCacheSyncTxCreateCounter(value: number) {
    this._dnsCacheSyncTxCreateCounter = value;
  }
  public resetDnsCacheSyncTxCreateCounter() {
    this._dnsCacheSyncTxCreateCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheSyncTxCreateCounterInput() {
    return this._dnsCacheSyncTxCreateCounter;
  }

  // dns_cache_sync_tx_del_counter - computed: false, optional: true, required: false
  private _dnsCacheSyncTxDelCounter?: number; 
  public get dnsCacheSyncTxDelCounter() {
    return this.getNumberAttribute('dns_cache_sync_tx_del_counter');
  }
  public set dnsCacheSyncTxDelCounter(value: number) {
    this._dnsCacheSyncTxDelCounter = value;
  }
  public resetDnsCacheSyncTxDelCounter() {
    this._dnsCacheSyncTxDelCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheSyncTxDelCounterInput() {
    return this._dnsCacheSyncTxDelCounter;
  }

  // dns_cache_sync_tx_error_counter - computed: false, optional: true, required: false
  private _dnsCacheSyncTxErrorCounter?: number; 
  public get dnsCacheSyncTxErrorCounter() {
    return this.getNumberAttribute('dns_cache_sync_tx_error_counter');
  }
  public set dnsCacheSyncTxErrorCounter(value: number) {
    this._dnsCacheSyncTxErrorCounter = value;
  }
  public resetDnsCacheSyncTxErrorCounter() {
    this._dnsCacheSyncTxErrorCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheSyncTxErrorCounterInput() {
    return this._dnsCacheSyncTxErrorCounter;
  }

  // dns_cache_sync_tx_frag_counter - computed: false, optional: true, required: false
  private _dnsCacheSyncTxFragCounter?: number; 
  public get dnsCacheSyncTxFragCounter() {
    return this.getNumberAttribute('dns_cache_sync_tx_frag_counter');
  }
  public set dnsCacheSyncTxFragCounter(value: number) {
    this._dnsCacheSyncTxFragCounter = value;
  }
  public resetDnsCacheSyncTxFragCounter() {
    this._dnsCacheSyncTxFragCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsCacheSyncTxFragCounterInput() {
    return this._dnsCacheSyncTxFragCounter;
  }

  // query_pkt_invalid_idx_counter - computed: false, optional: true, required: false
  private _queryPktInvalidIdxCounter?: number; 
  public get queryPktInvalidIdxCounter() {
    return this.getNumberAttribute('query_pkt_invalid_idx_counter');
  }
  public set queryPktInvalidIdxCounter(value: number) {
    this._queryPktInvalidIdxCounter = value;
  }
  public resetQueryPktInvalidIdxCounter() {
    this._queryPktInvalidIdxCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryPktInvalidIdxCounterInput() {
    return this._queryPktInvalidIdxCounter;
  }

  // query_pkt_no_receiving_ip_counter - computed: false, optional: true, required: false
  private _queryPktNoReceivingIpCounter?: number; 
  public get queryPktNoReceivingIpCounter() {
    return this.getNumberAttribute('query_pkt_no_receiving_ip_counter');
  }
  public set queryPktNoReceivingIpCounter(value: number) {
    this._queryPktNoReceivingIpCounter = value;
  }
  public resetQueryPktNoReceivingIpCounter() {
    this._queryPktNoReceivingIpCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryPktNoReceivingIpCounterInput() {
    return this._queryPktNoReceivingIpCounter;
  }

  // query_pkt_rcv_counter - computed: false, optional: true, required: false
  private _queryPktRcvCounter?: number; 
  public get queryPktRcvCounter() {
    return this.getNumberAttribute('query_pkt_rcv_counter');
  }
  public set queryPktRcvCounter(value: number) {
    this._queryPktRcvCounter = value;
  }
  public resetQueryPktRcvCounter() {
    this._queryPktRcvCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryPktRcvCounterInput() {
    return this._queryPktRcvCounter;
  }

  // query_pkt_tx_counter - computed: false, optional: true, required: false
  private _queryPktTxCounter?: number; 
  public get queryPktTxCounter() {
    return this.getNumberAttribute('query_pkt_tx_counter');
  }
  public set queryPktTxCounter(value: number) {
    this._queryPktTxCounter = value;
  }
  public resetQueryPktTxCounter() {
    this._queryPktTxCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryPktTxCounterInput() {
    return this._queryPktTxCounter;
  }

  // query_rx_full_info_counter - computed: false, optional: true, required: false
  private _queryRxFullInfoCounter?: number; 
  public get queryRxFullInfoCounter() {
    return this.getNumberAttribute('query_rx_full_info_counter');
  }
  public set queryRxFullInfoCounter(value: number) {
    this._queryRxFullInfoCounter = value;
  }
  public resetQueryRxFullInfoCounter() {
    this._queryRxFullInfoCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryRxFullInfoCounterInput() {
    return this._queryRxFullInfoCounter;
  }

  // query_rx_invalid_ha_group_counter - computed: false, optional: true, required: false
  private _queryRxInvalidHaGroupCounter?: number; 
  public get queryRxInvalidHaGroupCounter() {
    return this.getNumberAttribute('query_rx_invalid_ha_group_counter');
  }
  public set queryRxInvalidHaGroupCounter(value: number) {
    this._queryRxInvalidHaGroupCounter = value;
  }
  public resetQueryRxInvalidHaGroupCounter() {
    this._queryRxInvalidHaGroupCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryRxInvalidHaGroupCounterInput() {
    return this._queryRxInvalidHaGroupCounter;
  }

  // query_rx_invalid_msg_dir_counter - computed: false, optional: true, required: false
  private _queryRxInvalidMsgDirCounter?: number; 
  public get queryRxInvalidMsgDirCounter() {
    return this.getNumberAttribute('query_rx_invalid_msg_dir_counter');
  }
  public set queryRxInvalidMsgDirCounter(value: number) {
    this._queryRxInvalidMsgDirCounter = value;
  }
  public resetQueryRxInvalidMsgDirCounter() {
    this._queryRxInvalidMsgDirCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryRxInvalidMsgDirCounterInput() {
    return this._queryRxInvalidMsgDirCounter;
  }

  // query_rx_invalid_partition_counter - computed: false, optional: true, required: false
  private _queryRxInvalidPartitionCounter?: number; 
  public get queryRxInvalidPartitionCounter() {
    return this.getNumberAttribute('query_rx_invalid_partition_counter');
  }
  public set queryRxInvalidPartitionCounter(value: number) {
    this._queryRxInvalidPartitionCounter = value;
  }
  public resetQueryRxInvalidPartitionCounter() {
    this._queryRxInvalidPartitionCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryRxInvalidPartitionCounterInput() {
    return this._queryRxInvalidPartitionCounter;
  }

  // query_rx_invalid_sync_version_counter - computed: false, optional: true, required: false
  private _queryRxInvalidSyncVersionCounter?: number; 
  public get queryRxInvalidSyncVersionCounter() {
    return this.getNumberAttribute('query_rx_invalid_sync_version_counter');
  }
  public set queryRxInvalidSyncVersionCounter(value: number) {
    this._queryRxInvalidSyncVersionCounter = value;
  }
  public resetQueryRxInvalidSyncVersionCounter() {
    this._queryRxInvalidSyncVersionCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryRxInvalidSyncVersionCounterInput() {
    return this._queryRxInvalidSyncVersionCounter;
  }

  // query_rx_unk_counter - computed: false, optional: true, required: false
  private _queryRxUnkCounter?: number; 
  public get queryRxUnkCounter() {
    return this.getNumberAttribute('query_rx_unk_counter');
  }
  public set queryRxUnkCounter(value: number) {
    this._queryRxUnkCounter = value;
  }
  public resetQueryRxUnkCounter() {
    this._queryRxUnkCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryRxUnkCounterInput() {
    return this._queryRxUnkCounter;
  }

  // query_rx_zero_info_counter - computed: false, optional: true, required: false
  private _queryRxZeroInfoCounter?: number; 
  public get queryRxZeroInfoCounter() {
    return this.getNumberAttribute('query_rx_zero_info_counter');
  }
  public set queryRxZeroInfoCounter(value: number) {
    this._queryRxZeroInfoCounter = value;
  }
  public resetQueryRxZeroInfoCounter() {
    this._queryRxZeroInfoCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryRxZeroInfoCounterInput() {
    return this._queryRxZeroInfoCounter;
  }

  // query_tx_get_buff_failed - computed: false, optional: true, required: false
  private _queryTxGetBuffFailed?: number; 
  public get queryTxGetBuffFailed() {
    return this.getNumberAttribute('query_tx_get_buff_failed');
  }
  public set queryTxGetBuffFailed(value: number) {
    this._queryTxGetBuffFailed = value;
  }
  public resetQueryTxGetBuffFailed() {
    this._queryTxGetBuffFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTxGetBuffFailedInput() {
    return this._queryTxGetBuffFailed;
  }

  // query_tx_max_packed - computed: false, optional: true, required: false
  private _queryTxMaxPacked?: number; 
  public get queryTxMaxPacked() {
    return this.getNumberAttribute('query_tx_max_packed');
  }
  public set queryTxMaxPacked(value: number) {
    this._queryTxMaxPacked = value;
  }
  public resetQueryTxMaxPacked() {
    this._queryTxMaxPacked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTxMaxPackedInput() {
    return this._queryTxMaxPacked;
  }

  // query_tx_min_packed - computed: false, optional: true, required: false
  private _queryTxMinPacked?: number; 
  public get queryTxMinPacked() {
    return this.getNumberAttribute('query_tx_min_packed');
  }
  public set queryTxMinPacked(value: number) {
    this._queryTxMinPacked = value;
  }
  public resetQueryTxMinPacked() {
    this._queryTxMinPacked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTxMinPackedInput() {
    return this._queryTxMinPacked;
  }

  // sync_err_lsn_fullcone - computed: false, optional: true, required: false
  private _syncErrLsnFullcone?: number; 
  public get syncErrLsnFullcone() {
    return this.getNumberAttribute('sync_err_lsn_fullcone');
  }
  public set syncErrLsnFullcone(value: number) {
    this._syncErrLsnFullcone = value;
  }
  public resetSyncErrLsnFullcone() {
    this._syncErrLsnFullcone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncErrLsnFullconeInput() {
    return this._syncErrLsnFullcone;
  }

  // sync_get_buff_failed_port - computed: false, optional: true, required: false
  private _syncGetBuffFailedPort?: number; 
  public get syncGetBuffFailedPort() {
    return this.getNumberAttribute('sync_get_buff_failed_port');
  }
  public set syncGetBuffFailedPort(value: number) {
    this._syncGetBuffFailedPort = value;
  }
  public resetSyncGetBuffFailedPort() {
    this._syncGetBuffFailedPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncGetBuffFailedPortInput() {
    return this._syncGetBuffFailedPort;
  }

  // sync_get_buff_failed_rt - computed: false, optional: true, required: false
  private _syncGetBuffFailedRt?: number; 
  public get syncGetBuffFailedRt() {
    return this.getNumberAttribute('sync_get_buff_failed_rt');
  }
  public set syncGetBuffFailedRt(value: number) {
    this._syncGetBuffFailedRt = value;
  }
  public resetSyncGetBuffFailedRt() {
    this._syncGetBuffFailedRt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncGetBuffFailedRtInput() {
    return this._syncGetBuffFailedRt;
  }

  // sync_persist_rx_cannot_process_mandatory - computed: false, optional: true, required: false
  private _syncPersistRxCannotProcessMandatory?: number; 
  public get syncPersistRxCannotProcessMandatory() {
    return this.getNumberAttribute('sync_persist_rx_cannot_process_mandatory');
  }
  public set syncPersistRxCannotProcessMandatory(value: number) {
    this._syncPersistRxCannotProcessMandatory = value;
  }
  public resetSyncPersistRxCannotProcessMandatory() {
    this._syncPersistRxCannotProcessMandatory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPersistRxCannotProcessMandatoryInput() {
    return this._syncPersistRxCannotProcessMandatory;
  }

  // sync_persist_rx_conn_get_failed - computed: false, optional: true, required: false
  private _syncPersistRxConnGetFailed?: number; 
  public get syncPersistRxConnGetFailed() {
    return this.getNumberAttribute('sync_persist_rx_conn_get_failed');
  }
  public set syncPersistRxConnGetFailed(value: number) {
    this._syncPersistRxConnGetFailed = value;
  }
  public resetSyncPersistRxConnGetFailed() {
    this._syncPersistRxConnGetFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPersistRxConnGetFailedInput() {
    return this._syncPersistRxConnGetFailed;
  }

  // sync_persist_rx_ext_bit_process_error - computed: false, optional: true, required: false
  private _syncPersistRxExtBitProcessError?: number; 
  public get syncPersistRxExtBitProcessError() {
    return this.getNumberAttribute('sync_persist_rx_ext_bit_process_error');
  }
  public set syncPersistRxExtBitProcessError(value: number) {
    this._syncPersistRxExtBitProcessError = value;
  }
  public resetSyncPersistRxExtBitProcessError() {
    this._syncPersistRxExtBitProcessError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPersistRxExtBitProcessErrorInput() {
    return this._syncPersistRxExtBitProcessError;
  }

  // sync_persist_rx_len_invalid - computed: false, optional: true, required: false
  private _syncPersistRxLenInvalid?: number; 
  public get syncPersistRxLenInvalid() {
    return this.getNumberAttribute('sync_persist_rx_len_invalid');
  }
  public set syncPersistRxLenInvalid(value: number) {
    this._syncPersistRxLenInvalid = value;
  }
  public resetSyncPersistRxLenInvalid() {
    this._syncPersistRxLenInvalid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPersistRxLenInvalidInput() {
    return this._syncPersistRxLenInvalid;
  }

  // sync_persist_rx_no_sg_group_info - computed: false, optional: true, required: false
  private _syncPersistRxNoSgGroupInfo?: number; 
  public get syncPersistRxNoSgGroupInfo() {
    return this.getNumberAttribute('sync_persist_rx_no_sg_group_info');
  }
  public set syncPersistRxNoSgGroupInfo(value: number) {
    this._syncPersistRxNoSgGroupInfo = value;
  }
  public resetSyncPersistRxNoSgGroupInfo() {
    this._syncPersistRxNoSgGroupInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPersistRxNoSgGroupInfoInput() {
    return this._syncPersistRxNoSgGroupInfo;
  }

  // sync_persist_rx_no_such_rport - computed: false, optional: true, required: false
  private _syncPersistRxNoSuchRport?: number; 
  public get syncPersistRxNoSuchRport() {
    return this.getNumberAttribute('sync_persist_rx_no_such_rport');
  }
  public set syncPersistRxNoSuchRport(value: number) {
    this._syncPersistRxNoSuchRport = value;
  }
  public resetSyncPersistRxNoSuchRport() {
    this._syncPersistRxNoSuchRport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPersistRxNoSuchRportInput() {
    return this._syncPersistRxNoSuchRport;
  }

  // sync_persist_rx_no_such_sg_group - computed: false, optional: true, required: false
  private _syncPersistRxNoSuchSgGroup?: number; 
  public get syncPersistRxNoSuchSgGroup() {
    return this.getNumberAttribute('sync_persist_rx_no_such_sg_group');
  }
  public set syncPersistRxNoSuchSgGroup(value: number) {
    this._syncPersistRxNoSuchSgGroup = value;
  }
  public resetSyncPersistRxNoSuchSgGroup() {
    this._syncPersistRxNoSuchSgGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPersistRxNoSuchSgGroupInput() {
    return this._syncPersistRxNoSuchSgGroup;
  }

  // sync_persist_rx_no_such_vport - computed: false, optional: true, required: false
  private _syncPersistRxNoSuchVport?: number; 
  public get syncPersistRxNoSuchVport() {
    return this.getNumberAttribute('sync_persist_rx_no_such_vport');
  }
  public set syncPersistRxNoSuchVport(value: number) {
    this._syncPersistRxNoSuchVport = value;
  }
  public resetSyncPersistRxNoSuchVport() {
    this._syncPersistRxNoSuchVport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPersistRxNoSuchVportInput() {
    return this._syncPersistRxNoSuchVport;
  }

  // sync_persist_rx_proto_not_supported - computed: false, optional: true, required: false
  private _syncPersistRxProtoNotSupported?: number; 
  public get syncPersistRxProtoNotSupported() {
    return this.getNumberAttribute('sync_persist_rx_proto_not_supported');
  }
  public set syncPersistRxProtoNotSupported(value: number) {
    this._syncPersistRxProtoNotSupported = value;
  }
  public resetSyncPersistRxProtoNotSupported() {
    this._syncPersistRxProtoNotSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPersistRxProtoNotSupportedInput() {
    return this._syncPersistRxProtoNotSupported;
  }

  // sync_persist_rx_type_invalid - computed: false, optional: true, required: false
  private _syncPersistRxTypeInvalid?: number; 
  public get syncPersistRxTypeInvalid() {
    return this.getNumberAttribute('sync_persist_rx_type_invalid');
  }
  public set syncPersistRxTypeInvalid(value: number) {
    this._syncPersistRxTypeInvalid = value;
  }
  public resetSyncPersistRxTypeInvalid() {
    this._syncPersistRxTypeInvalid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPersistRxTypeInvalidInput() {
    return this._syncPersistRxTypeInvalid;
  }

  // sync_persist_rx_vporttype_not_supported - computed: false, optional: true, required: false
  private _syncPersistRxVporttypeNotSupported?: number; 
  public get syncPersistRxVporttypeNotSupported() {
    return this.getNumberAttribute('sync_persist_rx_vporttype_not_supported');
  }
  public set syncPersistRxVporttypeNotSupported(value: number) {
    this._syncPersistRxVporttypeNotSupported = value;
  }
  public resetSyncPersistRxVporttypeNotSupported() {
    this._syncPersistRxVporttypeNotSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPersistRxVporttypeNotSupportedInput() {
    return this._syncPersistRxVporttypeNotSupported;
  }

  // sync_pkt_empty_buff_counter - computed: false, optional: true, required: false
  private _syncPktEmptyBuffCounter?: number; 
  public get syncPktEmptyBuffCounter() {
    return this.getNumberAttribute('sync_pkt_empty_buff_counter');
  }
  public set syncPktEmptyBuffCounter(value: number) {
    this._syncPktEmptyBuffCounter = value;
  }
  public resetSyncPktEmptyBuffCounter() {
    this._syncPktEmptyBuffCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPktEmptyBuffCounterInput() {
    return this._syncPktEmptyBuffCounter;
  }

  // sync_pkt_failed_buff_copy_counter - computed: false, optional: true, required: false
  private _syncPktFailedBuffCopyCounter?: number; 
  public get syncPktFailedBuffCopyCounter() {
    return this.getNumberAttribute('sync_pkt_failed_buff_copy_counter');
  }
  public set syncPktFailedBuffCopyCounter(value: number) {
    this._syncPktFailedBuffCopyCounter = value;
  }
  public resetSyncPktFailedBuffCopyCounter() {
    this._syncPktFailedBuffCopyCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPktFailedBuffCopyCounterInput() {
    return this._syncPktFailedBuffCopyCounter;
  }

  // sync_pkt_invalid_idx_counter - computed: false, optional: true, required: false
  private _syncPktInvalidIdxCounter?: number; 
  public get syncPktInvalidIdxCounter() {
    return this.getNumberAttribute('sync_pkt_invalid_idx_counter');
  }
  public set syncPktInvalidIdxCounter(value: number) {
    this._syncPktInvalidIdxCounter = value;
  }
  public resetSyncPktInvalidIdxCounter() {
    this._syncPktInvalidIdxCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPktInvalidIdxCounterInput() {
    return this._syncPktInvalidIdxCounter;
  }

  // sync_pkt_no_receiving_vgrp_counter - computed: false, optional: true, required: false
  private _syncPktNoReceivingVgrpCounter?: number; 
  public get syncPktNoReceivingVgrpCounter() {
    return this.getNumberAttribute('sync_pkt_no_receiving_vgrp_counter');
  }
  public set syncPktNoReceivingVgrpCounter(value: number) {
    this._syncPktNoReceivingVgrpCounter = value;
  }
  public resetSyncPktNoReceivingVgrpCounter() {
    this._syncPktNoReceivingVgrpCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPktNoReceivingVgrpCounterInput() {
    return this._syncPktNoReceivingVgrpCounter;
  }

  // sync_pkt_no_sending_vgrp_counter - computed: false, optional: true, required: false
  private _syncPktNoSendingVgrpCounter?: number; 
  public get syncPktNoSendingVgrpCounter() {
    return this.getNumberAttribute('sync_pkt_no_sending_vgrp_counter');
  }
  public set syncPktNoSendingVgrpCounter(value: number) {
    this._syncPktNoSendingVgrpCounter = value;
  }
  public resetSyncPktNoSendingVgrpCounter() {
    this._syncPktNoSendingVgrpCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPktNoSendingVgrpCounterInput() {
    return this._syncPktNoSendingVgrpCounter;
  }

  // sync_pkt_rcv_counter - computed: false, optional: true, required: false
  private _syncPktRcvCounter?: number; 
  public get syncPktRcvCounter() {
    return this.getNumberAttribute('sync_pkt_rcv_counter');
  }
  public set syncPktRcvCounter(value: number) {
    this._syncPktRcvCounter = value;
  }
  public resetSyncPktRcvCounter() {
    this._syncPktRcvCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPktRcvCounterInput() {
    return this._syncPktRcvCounter;
  }

  // sync_pkt_tx_counter - computed: false, optional: true, required: false
  private _syncPktTxCounter?: number; 
  public get syncPktTxCounter() {
    return this.getNumberAttribute('sync_pkt_tx_counter');
  }
  public set syncPktTxCounter(value: number) {
    this._syncPktTxCounter = value;
  }
  public resetSyncPktTxCounter() {
    this._syncPktTxCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPktTxCounterInput() {
    return this._syncPktTxCounter;
  }

  // sync_query_dcmsg_counter - computed: false, optional: true, required: false
  private _syncQueryDcmsgCounter?: number; 
  public get syncQueryDcmsgCounter() {
    return this.getNumberAttribute('sync_query_dcmsg_counter');
  }
  public set syncQueryDcmsgCounter(value: number) {
    this._syncQueryDcmsgCounter = value;
  }
  public resetSyncQueryDcmsgCounter() {
    this._syncQueryDcmsgCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncQueryDcmsgCounterInput() {
    return this._syncQueryDcmsgCounter;
  }

  // sync_rx_aflex_create_counter - computed: false, optional: true, required: false
  private _syncRxAflexCreateCounter?: number; 
  public get syncRxAflexCreateCounter() {
    return this.getNumberAttribute('sync_rx_aflex_create_counter');
  }
  public set syncRxAflexCreateCounter(value: number) {
    this._syncRxAflexCreateCounter = value;
  }
  public resetSyncRxAflexCreateCounter() {
    this._syncRxAflexCreateCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxAflexCreateCounterInput() {
    return this._syncRxAflexCreateCounter;
  }

  // sync_rx_aflex_del_counter - computed: false, optional: true, required: false
  private _syncRxAflexDelCounter?: number; 
  public get syncRxAflexDelCounter() {
    return this.getNumberAttribute('sync_rx_aflex_del_counter');
  }
  public set syncRxAflexDelCounter(value: number) {
    this._syncRxAflexDelCounter = value;
  }
  public resetSyncRxAflexDelCounter() {
    this._syncRxAflexDelCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxAflexDelCounterInput() {
    return this._syncRxAflexDelCounter;
  }

  // sync_rx_aflex_frag_counter - computed: false, optional: true, required: false
  private _syncRxAflexFragCounter?: number; 
  public get syncRxAflexFragCounter() {
    return this.getNumberAttribute('sync_rx_aflex_frag_counter');
  }
  public set syncRxAflexFragCounter(value: number) {
    this._syncRxAflexFragCounter = value;
  }
  public resetSyncRxAflexFragCounter() {
    this._syncRxAflexFragCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxAflexFragCounterInput() {
    return this._syncRxAflexFragCounter;
  }

  // sync_rx_aflex_table_entry_add_counter - computed: false, optional: true, required: false
  private _syncRxAflexTableEntryAddCounter?: number; 
  public get syncRxAflexTableEntryAddCounter() {
    return this.getNumberAttribute('sync_rx_aflex_table_entry_add_counter');
  }
  public set syncRxAflexTableEntryAddCounter(value: number) {
    this._syncRxAflexTableEntryAddCounter = value;
  }
  public resetSyncRxAflexTableEntryAddCounter() {
    this._syncRxAflexTableEntryAddCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxAflexTableEntryAddCounterInput() {
    return this._syncRxAflexTableEntryAddCounter;
  }

  // sync_rx_aflex_table_entry_append_counter - computed: false, optional: true, required: false
  private _syncRxAflexTableEntryAppendCounter?: number; 
  public get syncRxAflexTableEntryAppendCounter() {
    return this.getNumberAttribute('sync_rx_aflex_table_entry_append_counter');
  }
  public set syncRxAflexTableEntryAppendCounter(value: number) {
    this._syncRxAflexTableEntryAppendCounter = value;
  }
  public resetSyncRxAflexTableEntryAppendCounter() {
    this._syncRxAflexTableEntryAppendCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxAflexTableEntryAppendCounterInput() {
    return this._syncRxAflexTableEntryAppendCounter;
  }

  // sync_rx_aflex_table_entry_delete_counter - computed: false, optional: true, required: false
  private _syncRxAflexTableEntryDeleteCounter?: number; 
  public get syncRxAflexTableEntryDeleteCounter() {
    return this.getNumberAttribute('sync_rx_aflex_table_entry_delete_counter');
  }
  public set syncRxAflexTableEntryDeleteCounter(value: number) {
    this._syncRxAflexTableEntryDeleteCounter = value;
  }
  public resetSyncRxAflexTableEntryDeleteCounter() {
    this._syncRxAflexTableEntryDeleteCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxAflexTableEntryDeleteCounterInput() {
    return this._syncRxAflexTableEntryDeleteCounter;
  }

  // sync_rx_aflex_table_entry_fastsync_counter - computed: false, optional: true, required: false
  private _syncRxAflexTableEntryFastsyncCounter?: number; 
  public get syncRxAflexTableEntryFastsyncCounter() {
    return this.getNumberAttribute('sync_rx_aflex_table_entry_fastsync_counter');
  }
  public set syncRxAflexTableEntryFastsyncCounter(value: number) {
    this._syncRxAflexTableEntryFastsyncCounter = value;
  }
  public resetSyncRxAflexTableEntryFastsyncCounter() {
    this._syncRxAflexTableEntryFastsyncCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxAflexTableEntryFastsyncCounterInput() {
    return this._syncRxAflexTableEntryFastsyncCounter;
  }

  // sync_rx_aflex_table_entry_incr_counter - computed: false, optional: true, required: false
  private _syncRxAflexTableEntryIncrCounter?: number; 
  public get syncRxAflexTableEntryIncrCounter() {
    return this.getNumberAttribute('sync_rx_aflex_table_entry_incr_counter');
  }
  public set syncRxAflexTableEntryIncrCounter(value: number) {
    this._syncRxAflexTableEntryIncrCounter = value;
  }
  public resetSyncRxAflexTableEntryIncrCounter() {
    this._syncRxAflexTableEntryIncrCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxAflexTableEntryIncrCounterInput() {
    return this._syncRxAflexTableEntryIncrCounter;
  }

  // sync_rx_aflex_table_entry_lifetime_counter - computed: false, optional: true, required: false
  private _syncRxAflexTableEntryLifetimeCounter?: number; 
  public get syncRxAflexTableEntryLifetimeCounter() {
    return this.getNumberAttribute('sync_rx_aflex_table_entry_lifetime_counter');
  }
  public set syncRxAflexTableEntryLifetimeCounter(value: number) {
    this._syncRxAflexTableEntryLifetimeCounter = value;
  }
  public resetSyncRxAflexTableEntryLifetimeCounter() {
    this._syncRxAflexTableEntryLifetimeCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxAflexTableEntryLifetimeCounterInput() {
    return this._syncRxAflexTableEntryLifetimeCounter;
  }

  // sync_rx_aflex_table_entry_lookup_counter - computed: false, optional: true, required: false
  private _syncRxAflexTableEntryLookupCounter?: number; 
  public get syncRxAflexTableEntryLookupCounter() {
    return this.getNumberAttribute('sync_rx_aflex_table_entry_lookup_counter');
  }
  public set syncRxAflexTableEntryLookupCounter(value: number) {
    this._syncRxAflexTableEntryLookupCounter = value;
  }
  public resetSyncRxAflexTableEntryLookupCounter() {
    this._syncRxAflexTableEntryLookupCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxAflexTableEntryLookupCounterInput() {
    return this._syncRxAflexTableEntryLookupCounter;
  }

  // sync_rx_aflex_table_entry_replace_counter - computed: false, optional: true, required: false
  private _syncRxAflexTableEntryReplaceCounter?: number; 
  public get syncRxAflexTableEntryReplaceCounter() {
    return this.getNumberAttribute('sync_rx_aflex_table_entry_replace_counter');
  }
  public set syncRxAflexTableEntryReplaceCounter(value: number) {
    this._syncRxAflexTableEntryReplaceCounter = value;
  }
  public resetSyncRxAflexTableEntryReplaceCounter() {
    this._syncRxAflexTableEntryReplaceCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxAflexTableEntryReplaceCounterInput() {
    return this._syncRxAflexTableEntryReplaceCounter;
  }

  // sync_rx_aflex_table_entry_set_counter - computed: false, optional: true, required: false
  private _syncRxAflexTableEntrySetCounter?: number; 
  public get syncRxAflexTableEntrySetCounter() {
    return this.getNumberAttribute('sync_rx_aflex_table_entry_set_counter');
  }
  public set syncRxAflexTableEntrySetCounter(value: number) {
    this._syncRxAflexTableEntrySetCounter = value;
  }
  public resetSyncRxAflexTableEntrySetCounter() {
    this._syncRxAflexTableEntrySetCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxAflexTableEntrySetCounterInput() {
    return this._syncRxAflexTableEntrySetCounter;
  }

  // sync_rx_aflex_table_entry_timeout_counter - computed: false, optional: true, required: false
  private _syncRxAflexTableEntryTimeoutCounter?: number; 
  public get syncRxAflexTableEntryTimeoutCounter() {
    return this.getNumberAttribute('sync_rx_aflex_table_entry_timeout_counter');
  }
  public set syncRxAflexTableEntryTimeoutCounter(value: number) {
    this._syncRxAflexTableEntryTimeoutCounter = value;
  }
  public resetSyncRxAflexTableEntryTimeoutCounter() {
    this._syncRxAflexTableEntryTimeoutCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxAflexTableEntryTimeoutCounterInput() {
    return this._syncRxAflexTableEntryTimeoutCounter;
  }

  // sync_rx_aflex_update_counter - computed: false, optional: true, required: false
  private _syncRxAflexUpdateCounter?: number; 
  public get syncRxAflexUpdateCounter() {
    return this.getNumberAttribute('sync_rx_aflex_update_counter');
  }
  public set syncRxAflexUpdateCounter(value: number) {
    this._syncRxAflexUpdateCounter = value;
  }
  public resetSyncRxAflexUpdateCounter() {
    this._syncRxAflexUpdateCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxAflexUpdateCounterInput() {
    return this._syncRxAflexUpdateCounter;
  }

  // sync_rx_apptype_not_supported - computed: false, optional: true, required: false
  private _syncRxApptypeNotSupported?: number; 
  public get syncRxApptypeNotSupported() {
    return this.getNumberAttribute('sync_rx_apptype_not_supported');
  }
  public set syncRxApptypeNotSupported(value: number) {
    this._syncRxApptypeNotSupported = value;
  }
  public resetSyncRxApptypeNotSupported() {
    this._syncRxApptypeNotSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxApptypeNotSupportedInput() {
    return this._syncRxApptypeNotSupported;
  }

  // sync_rx_bad_protocol_counter - computed: false, optional: true, required: false
  private _syncRxBadProtocolCounter?: number; 
  public get syncRxBadProtocolCounter() {
    return this.getNumberAttribute('sync_rx_bad_protocol_counter');
  }
  public set syncRxBadProtocolCounter(value: number) {
    this._syncRxBadProtocolCounter = value;
  }
  public resetSyncRxBadProtocolCounter() {
    this._syncRxBadProtocolCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxBadProtocolCounterInput() {
    return this._syncRxBadProtocolCounter;
  }

  // sync_rx_by_inactive_peer_counter - computed: false, optional: true, required: false
  private _syncRxByInactivePeerCounter?: number; 
  public get syncRxByInactivePeerCounter() {
    return this.getNumberAttribute('sync_rx_by_inactive_peer_counter');
  }
  public set syncRxByInactivePeerCounter(value: number) {
    this._syncRxByInactivePeerCounter = value;
  }
  public resetSyncRxByInactivePeerCounter() {
    this._syncRxByInactivePeerCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxByInactivePeerCounterInput() {
    return this._syncRxByInactivePeerCounter;
  }

  // sync_rx_cannot_process_mandatory - computed: false, optional: true, required: false
  private _syncRxCannotProcessMandatory?: number; 
  public get syncRxCannotProcessMandatory() {
    return this.getNumberAttribute('sync_rx_cannot_process_mandatory');
  }
  public set syncRxCannotProcessMandatory(value: number) {
    this._syncRxCannotProcessMandatory = value;
  }
  public resetSyncRxCannotProcessMandatory() {
    this._syncRxCannotProcessMandatory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxCannotProcessMandatoryInput() {
    return this._syncRxCannotProcessMandatory;
  }

  // sync_rx_conn_exists - computed: false, optional: true, required: false
  private _syncRxConnExists?: number; 
  public get syncRxConnExists() {
    return this.getNumberAttribute('sync_rx_conn_exists');
  }
  public set syncRxConnExists(value: number) {
    this._syncRxConnExists = value;
  }
  public resetSyncRxConnExists() {
    this._syncRxConnExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxConnExistsInput() {
    return this._syncRxConnExists;
  }

  // sync_rx_conn_get_failed - computed: false, optional: true, required: false
  private _syncRxConnGetFailed?: number; 
  public get syncRxConnGetFailed() {
    return this.getNumberAttribute('sync_rx_conn_get_failed');
  }
  public set syncRxConnGetFailed(value: number) {
    this._syncRxConnGetFailed = value;
  }
  public resetSyncRxConnGetFailed() {
    this._syncRxConnGetFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxConnGetFailedInput() {
    return this._syncRxConnGetFailed;
  }

  // sync_rx_create_counter - computed: false, optional: true, required: false
  private _syncRxCreateCounter?: number; 
  public get syncRxCreateCounter() {
    return this.getNumberAttribute('sync_rx_create_counter');
  }
  public set syncRxCreateCounter(value: number) {
    this._syncRxCreateCounter = value;
  }
  public resetSyncRxCreateCounter() {
    this._syncRxCreateCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxCreateCounterInput() {
    return this._syncRxCreateCounter;
  }

  // sync_rx_create_ext_bit_counter - computed: false, optional: true, required: false
  private _syncRxCreateExtBitCounter?: number; 
  public get syncRxCreateExtBitCounter() {
    return this.getNumberAttribute('sync_rx_create_ext_bit_counter');
  }
  public set syncRxCreateExtBitCounter(value: number) {
    this._syncRxCreateExtBitCounter = value;
  }
  public resetSyncRxCreateExtBitCounter() {
    this._syncRxCreateExtBitCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxCreateExtBitCounterInput() {
    return this._syncRxCreateExtBitCounter;
  }

  // sync_rx_create_static_sby - computed: false, optional: true, required: false
  private _syncRxCreateStaticSby?: number; 
  public get syncRxCreateStaticSby() {
    return this.getNumberAttribute('sync_rx_create_static_sby');
  }
  public set syncRxCreateStaticSby(value: number) {
    this._syncRxCreateStaticSby = value;
  }
  public resetSyncRxCreateStaticSby() {
    this._syncRxCreateStaticSby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxCreateStaticSbyInput() {
    return this._syncRxCreateStaticSby;
  }

  // sync_rx_dcmsg_counter - computed: false, optional: true, required: false
  private _syncRxDcmsgCounter?: number; 
  public get syncRxDcmsgCounter() {
    return this.getNumberAttribute('sync_rx_dcmsg_counter');
  }
  public set syncRxDcmsgCounter(value: number) {
    this._syncRxDcmsgCounter = value;
  }
  public resetSyncRxDcmsgCounter() {
    this._syncRxDcmsgCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxDcmsgCounterInput() {
    return this._syncRxDcmsgCounter;
  }

  // sync_rx_ddos_drop_counter - computed: false, optional: true, required: false
  private _syncRxDdosDropCounter?: number; 
  public get syncRxDdosDropCounter() {
    return this.getNumberAttribute('sync_rx_ddos_drop_counter');
  }
  public set syncRxDdosDropCounter(value: number) {
    this._syncRxDdosDropCounter = value;
  }
  public resetSyncRxDdosDropCounter() {
    this._syncRxDdosDropCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxDdosDropCounterInput() {
    return this._syncRxDdosDropCounter;
  }

  // sync_rx_del_counter - computed: false, optional: true, required: false
  private _syncRxDelCounter?: number; 
  public get syncRxDelCounter() {
    return this.getNumberAttribute('sync_rx_del_counter');
  }
  public set syncRxDelCounter(value: number) {
    this._syncRxDelCounter = value;
  }
  public resetSyncRxDelCounter() {
    this._syncRxDelCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxDelCounterInput() {
    return this._syncRxDelCounter;
  }

  // sync_rx_del_no_such_session - computed: false, optional: true, required: false
  private _syncRxDelNoSuchSession?: number; 
  public get syncRxDelNoSuchSession() {
    return this.getNumberAttribute('sync_rx_del_no_such_session');
  }
  public set syncRxDelNoSuchSession(value: number) {
    this._syncRxDelNoSuchSession = value;
  }
  public resetSyncRxDelNoSuchSession() {
    this._syncRxDelNoSuchSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxDelNoSuchSessionInput() {
    return this._syncRxDelNoSuchSession;
  }

  // sync_rx_estab_counter - computed: false, optional: true, required: false
  private _syncRxEstabCounter?: number; 
  public get syncRxEstabCounter() {
    return this.getNumberAttribute('sync_rx_estab_counter');
  }
  public set syncRxEstabCounter(value: number) {
    this._syncRxEstabCounter = value;
  }
  public resetSyncRxEstabCounter() {
    this._syncRxEstabCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxEstabCounterInput() {
    return this._syncRxEstabCounter;
  }

  // sync_rx_ext_bit_process_error - computed: false, optional: true, required: false
  private _syncRxExtBitProcessError?: number; 
  public get syncRxExtBitProcessError() {
    return this.getNumberAttribute('sync_rx_ext_bit_process_error');
  }
  public set syncRxExtBitProcessError(value: number) {
    this._syncRxExtBitProcessError = value;
  }
  public resetSyncRxExtBitProcessError() {
    this._syncRxExtBitProcessError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxExtBitProcessErrorInput() {
    return this._syncRxExtBitProcessError;
  }

  // sync_rx_ext_dcfw_log - computed: false, optional: true, required: false
  private _syncRxExtDcfwLog?: number; 
  public get syncRxExtDcfwLog() {
    return this.getNumberAttribute('sync_rx_ext_dcfw_log');
  }
  public set syncRxExtDcfwLog(value: number) {
    this._syncRxExtDcfwLog = value;
  }
  public resetSyncRxExtDcfwLog() {
    this._syncRxExtDcfwLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxExtDcfwLogInput() {
    return this._syncRxExtDcfwLog;
  }

  // sync_rx_ext_dcfw_rule_id - computed: false, optional: true, required: false
  private _syncRxExtDcfwRuleId?: number; 
  public get syncRxExtDcfwRuleId() {
    return this.getNumberAttribute('sync_rx_ext_dcfw_rule_id');
  }
  public set syncRxExtDcfwRuleId(value: number) {
    this._syncRxExtDcfwRuleId = value;
  }
  public resetSyncRxExtDcfwRuleId() {
    this._syncRxExtDcfwRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxExtDcfwRuleIdInput() {
    return this._syncRxExtDcfwRuleId;
  }

  // sync_rx_ext_dcfw_rule_idle_timeout - computed: false, optional: true, required: false
  private _syncRxExtDcfwRuleIdleTimeout?: number; 
  public get syncRxExtDcfwRuleIdleTimeout() {
    return this.getNumberAttribute('sync_rx_ext_dcfw_rule_idle_timeout');
  }
  public set syncRxExtDcfwRuleIdleTimeout(value: number) {
    this._syncRxExtDcfwRuleIdleTimeout = value;
  }
  public resetSyncRxExtDcfwRuleIdleTimeout() {
    this._syncRxExtDcfwRuleIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxExtDcfwRuleIdleTimeoutInput() {
    return this._syncRxExtDcfwRuleIdleTimeout;
  }

  // sync_rx_ext_fw_apps - computed: false, optional: true, required: false
  private _syncRxExtFwApps?: number; 
  public get syncRxExtFwApps() {
    return this.getNumberAttribute('sync_rx_ext_fw_apps');
  }
  public set syncRxExtFwApps(value: number) {
    this._syncRxExtFwApps = value;
  }
  public resetSyncRxExtFwApps() {
    this._syncRxExtFwApps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxExtFwAppsInput() {
    return this._syncRxExtFwApps;
  }

  // sync_rx_ext_fw_gtp_echo_ext_info - computed: false, optional: true, required: false
  private _syncRxExtFwGtpEchoExtInfo?: number; 
  public get syncRxExtFwGtpEchoExtInfo() {
    return this.getNumberAttribute('sync_rx_ext_fw_gtp_echo_ext_info');
  }
  public set syncRxExtFwGtpEchoExtInfo(value: number) {
    this._syncRxExtFwGtpEchoExtInfo = value;
  }
  public resetSyncRxExtFwGtpEchoExtInfo() {
    this._syncRxExtFwGtpEchoExtInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxExtFwGtpEchoExtInfoInput() {
    return this._syncRxExtFwGtpEchoExtInfo;
  }

  // sync_rx_ext_fw_gtp_ext_info - computed: false, optional: true, required: false
  private _syncRxExtFwGtpExtInfo?: number; 
  public get syncRxExtFwGtpExtInfo() {
    return this.getNumberAttribute('sync_rx_ext_fw_gtp_ext_info');
  }
  public set syncRxExtFwGtpExtInfo(value: number) {
    this._syncRxExtFwGtpExtInfo = value;
  }
  public resetSyncRxExtFwGtpExtInfo() {
    this._syncRxExtFwGtpExtInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxExtFwGtpExtInfoInput() {
    return this._syncRxExtFwGtpExtInfo;
  }

  // sync_rx_ext_fw_gtp_info - computed: false, optional: true, required: false
  private _syncRxExtFwGtpInfo?: number; 
  public get syncRxExtFwGtpInfo() {
    return this.getNumberAttribute('sync_rx_ext_fw_gtp_info');
  }
  public set syncRxExtFwGtpInfo(value: number) {
    this._syncRxExtFwGtpInfo = value;
  }
  public resetSyncRxExtFwGtpInfo() {
    this._syncRxExtFwGtpInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxExtFwGtpInfoInput() {
    return this._syncRxExtFwGtpInfo;
  }

  // sync_rx_ext_fw_gtp_log_ext_info - computed: false, optional: true, required: false
  private _syncRxExtFwGtpLogExtInfo?: number; 
  public get syncRxExtFwGtpLogExtInfo() {
    return this.getNumberAttribute('sync_rx_ext_fw_gtp_log_ext_info');
  }
  public set syncRxExtFwGtpLogExtInfo(value: number) {
    this._syncRxExtFwGtpLogExtInfo = value;
  }
  public resetSyncRxExtFwGtpLogExtInfo() {
    this._syncRxExtFwGtpLogExtInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxExtFwGtpLogExtInfoInput() {
    return this._syncRxExtFwGtpLogExtInfo;
  }

  // sync_rx_ext_fw_gtp_log_info - computed: false, optional: true, required: false
  private _syncRxExtFwGtpLogInfo?: number; 
  public get syncRxExtFwGtpLogInfo() {
    return this.getNumberAttribute('sync_rx_ext_fw_gtp_log_info');
  }
  public set syncRxExtFwGtpLogInfo(value: number) {
    this._syncRxExtFwGtpLogInfo = value;
  }
  public resetSyncRxExtFwGtpLogInfo() {
    this._syncRxExtFwGtpLogInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxExtFwGtpLogInfoInput() {
    return this._syncRxExtFwGtpLogInfo;
  }

  // sync_rx_ext_fw_gtp_u_info - computed: false, optional: true, required: false
  private _syncRxExtFwGtpUInfo?: number; 
  public get syncRxExtFwGtpUInfo() {
    return this.getNumberAttribute('sync_rx_ext_fw_gtp_u_info');
  }
  public set syncRxExtFwGtpUInfo(value: number) {
    this._syncRxExtFwGtpUInfo = value;
  }
  public resetSyncRxExtFwGtpUInfo() {
    this._syncRxExtFwGtpUInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxExtFwGtpUInfoInput() {
    return this._syncRxExtFwGtpUInfo;
  }

  // sync_rx_ext_fw_http_logging - computed: false, optional: true, required: false
  private _syncRxExtFwHttpLogging?: number; 
  public get syncRxExtFwHttpLogging() {
    return this.getNumberAttribute('sync_rx_ext_fw_http_logging');
  }
  public set syncRxExtFwHttpLogging(value: number) {
    this._syncRxExtFwHttpLogging = value;
  }
  public resetSyncRxExtFwHttpLogging() {
    this._syncRxExtFwHttpLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxExtFwHttpLoggingInput() {
    return this._syncRxExtFwHttpLogging;
  }

  // sync_rx_ext_fw_limit_entry - computed: false, optional: true, required: false
  private _syncRxExtFwLimitEntry?: number; 
  public get syncRxExtFwLimitEntry() {
    return this.getNumberAttribute('sync_rx_ext_fw_limit_entry');
  }
  public set syncRxExtFwLimitEntry(value: number) {
    this._syncRxExtFwLimitEntry = value;
  }
  public resetSyncRxExtFwLimitEntry() {
    this._syncRxExtFwLimitEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxExtFwLimitEntryInput() {
    return this._syncRxExtFwLimitEntry;
  }

  // sync_rx_ext_fw_so_shadow_ext_info - computed: false, optional: true, required: false
  private _syncRxExtFwSoShadowExtInfo?: number; 
  public get syncRxExtFwSoShadowExtInfo() {
    return this.getNumberAttribute('sync_rx_ext_fw_so_shadow_ext_info');
  }
  public set syncRxExtFwSoShadowExtInfo(value: number) {
    this._syncRxExtFwSoShadowExtInfo = value;
  }
  public resetSyncRxExtFwSoShadowExtInfo() {
    this._syncRxExtFwSoShadowExtInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxExtFwSoShadowExtInfoInput() {
    return this._syncRxExtFwSoShadowExtInfo;
  }

  // sync_rx_ext_h323_alg - computed: false, optional: true, required: false
  private _syncRxExtH323Alg?: number; 
  public get syncRxExtH323Alg() {
    return this.getNumberAttribute('sync_rx_ext_h323_alg');
  }
  public set syncRxExtH323Alg(value: number) {
    this._syncRxExtH323Alg = value;
  }
  public resetSyncRxExtH323Alg() {
    this._syncRxExtH323Alg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxExtH323AlgInput() {
    return this._syncRxExtH323Alg;
  }

  // sync_rx_ext_lsn_ac_idle_timeout - computed: false, optional: true, required: false
  private _syncRxExtLsnAcIdleTimeout?: number; 
  public get syncRxExtLsnAcIdleTimeout() {
    return this.getNumberAttribute('sync_rx_ext_lsn_ac_idle_timeout');
  }
  public set syncRxExtLsnAcIdleTimeout(value: number) {
    this._syncRxExtLsnAcIdleTimeout = value;
  }
  public resetSyncRxExtLsnAcIdleTimeout() {
    this._syncRxExtLsnAcIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxExtLsnAcIdleTimeoutInput() {
    return this._syncRxExtLsnAcIdleTimeout;
  }

  // sync_rx_ext_lsn_acl - computed: false, optional: true, required: false
  private _syncRxExtLsnAcl?: number; 
  public get syncRxExtLsnAcl() {
    return this.getNumberAttribute('sync_rx_ext_lsn_acl');
  }
  public set syncRxExtLsnAcl(value: number) {
    this._syncRxExtLsnAcl = value;
  }
  public resetSyncRxExtLsnAcl() {
    this._syncRxExtLsnAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxExtLsnAclInput() {
    return this._syncRxExtLsnAcl;
  }

  // sync_rx_ext_nat_alg_tcp_info - computed: false, optional: true, required: false
  private _syncRxExtNatAlgTcpInfo?: number; 
  public get syncRxExtNatAlgTcpInfo() {
    return this.getNumberAttribute('sync_rx_ext_nat_alg_tcp_info');
  }
  public set syncRxExtNatAlgTcpInfo(value: number) {
    this._syncRxExtNatAlgTcpInfo = value;
  }
  public resetSyncRxExtNatAlgTcpInfo() {
    this._syncRxExtNatAlgTcpInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxExtNatAlgTcpInfoInput() {
    return this._syncRxExtNatAlgTcpInfo;
  }

  // sync_rx_ext_nat_mac - computed: false, optional: true, required: false
  private _syncRxExtNatMac?: number; 
  public get syncRxExtNatMac() {
    return this.getNumberAttribute('sync_rx_ext_nat_mac');
  }
  public set syncRxExtNatMac(value: number) {
    this._syncRxExtNatMac = value;
  }
  public resetSyncRxExtNatMac() {
    this._syncRxExtNatMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxExtNatMacInput() {
    return this._syncRxExtNatMac;
  }

  // sync_rx_ext_pptp - computed: false, optional: true, required: false
  private _syncRxExtPptp?: number; 
  public get syncRxExtPptp() {
    return this.getNumberAttribute('sync_rx_ext_pptp');
  }
  public set syncRxExtPptp(value: number) {
    this._syncRxExtPptp = value;
  }
  public resetSyncRxExtPptp() {
    this._syncRxExtPptp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxExtPptpInput() {
    return this._syncRxExtPptp;
  }

  // sync_rx_ext_rtsp - computed: false, optional: true, required: false
  private _syncRxExtRtsp?: number; 
  public get syncRxExtRtsp() {
    return this.getNumberAttribute('sync_rx_ext_rtsp');
  }
  public set syncRxExtRtsp(value: number) {
    this._syncRxExtRtsp = value;
  }
  public resetSyncRxExtRtsp() {
    this._syncRxExtRtsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxExtRtspInput() {
    return this._syncRxExtRtsp;
  }

  // sync_rx_ext_sip_alg - computed: false, optional: true, required: false
  private _syncRxExtSipAlg?: number; 
  public get syncRxExtSipAlg() {
    return this.getNumberAttribute('sync_rx_ext_sip_alg');
  }
  public set syncRxExtSipAlg(value: number) {
    this._syncRxExtSipAlg = value;
  }
  public resetSyncRxExtSipAlg() {
    this._syncRxExtSipAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxExtSipAlgInput() {
    return this._syncRxExtSipAlg;
  }

  // sync_rx_ftp_control - computed: false, optional: true, required: false
  private _syncRxFtpControl?: number; 
  public get syncRxFtpControl() {
    return this.getNumberAttribute('sync_rx_ftp_control');
  }
  public set syncRxFtpControl(value: number) {
    this._syncRxFtpControl = value;
  }
  public resetSyncRxFtpControl() {
    this._syncRxFtpControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxFtpControlInput() {
    return this._syncRxFtpControl;
  }

  // sync_rx_fw_set_dscp_counter - computed: false, optional: true, required: false
  private _syncRxFwSetDscpCounter?: number; 
  public get syncRxFwSetDscpCounter() {
    return this.getNumberAttribute('sync_rx_fw_set_dscp_counter');
  }
  public set syncRxFwSetDscpCounter(value: number) {
    this._syncRxFwSetDscpCounter = value;
  }
  public resetSyncRxFwSetDscpCounter() {
    this._syncRxFwSetDscpCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxFwSetDscpCounterInput() {
    return this._syncRxFwSetDscpCounter;
  }

  // sync_rx_insert_tuple - computed: false, optional: true, required: false
  private _syncRxInsertTuple?: number; 
  public get syncRxInsertTuple() {
    return this.getNumberAttribute('sync_rx_insert_tuple');
  }
  public set syncRxInsertTuple(value: number) {
    this._syncRxInsertTuple = value;
  }
  public resetSyncRxInsertTuple() {
    this._syncRxInsertTuple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxInsertTupleInput() {
    return this._syncRxInsertTuple;
  }

  // sync_rx_invalid_sync_packet_counter - computed: false, optional: true, required: false
  private _syncRxInvalidSyncPacketCounter?: number; 
  public get syncRxInvalidSyncPacketCounter() {
    return this.getNumberAttribute('sync_rx_invalid_sync_packet_counter');
  }
  public set syncRxInvalidSyncPacketCounter(value: number) {
    this._syncRxInvalidSyncPacketCounter = value;
  }
  public resetSyncRxInvalidSyncPacketCounter() {
    this._syncRxInvalidSyncPacketCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxInvalidSyncPacketCounterInput() {
    return this._syncRxInvalidSyncPacketCounter;
  }

  // sync_rx_len_invalid - computed: false, optional: true, required: false
  private _syncRxLenInvalid?: number; 
  public get syncRxLenInvalid() {
    return this.getNumberAttribute('sync_rx_len_invalid');
  }
  public set syncRxLenInvalid(value: number) {
    this._syncRxLenInvalid = value;
  }
  public resetSyncRxLenInvalid() {
    this._syncRxLenInvalid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxLenInvalidInput() {
    return this._syncRxLenInvalid;
  }

  // sync_rx_lsn_create_sby - computed: false, optional: true, required: false
  private _syncRxLsnCreateSby?: number; 
  public get syncRxLsnCreateSby() {
    return this.getNumberAttribute('sync_rx_lsn_create_sby');
  }
  public set syncRxLsnCreateSby(value: number) {
    this._syncRxLsnCreateSby = value;
  }
  public resetSyncRxLsnCreateSby() {
    this._syncRxLsnCreateSby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxLsnCreateSbyInput() {
    return this._syncRxLsnCreateSby;
  }

  // sync_rx_lsn_fullcone - computed: false, optional: true, required: false
  private _syncRxLsnFullcone?: number; 
  public get syncRxLsnFullcone() {
    return this.getNumberAttribute('sync_rx_lsn_fullcone');
  }
  public set syncRxLsnFullcone(value: number) {
    this._syncRxLsnFullcone = value;
  }
  public resetSyncRxLsnFullcone() {
    this._syncRxLsnFullcone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxLsnFullconeInput() {
    return this._syncRxLsnFullcone;
  }

  // sync_rx_mon_entity - computed: false, optional: true, required: false
  private _syncRxMonEntity?: number; 
  public get syncRxMonEntity() {
    return this.getNumberAttribute('sync_rx_mon_entity');
  }
  public set syncRxMonEntity(value: number) {
    this._syncRxMonEntity = value;
  }
  public resetSyncRxMonEntity() {
    this._syncRxMonEntity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxMonEntityInput() {
    return this._syncRxMonEntity;
  }

  // sync_rx_nat_alloc_sby - computed: false, optional: true, required: false
  private _syncRxNatAllocSby?: number; 
  public get syncRxNatAllocSby() {
    return this.getNumberAttribute('sync_rx_nat_alloc_sby');
  }
  public set syncRxNatAllocSby(value: number) {
    this._syncRxNatAllocSby = value;
  }
  public resetSyncRxNatAllocSby() {
    this._syncRxNatAllocSby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxNatAllocSbyInput() {
    return this._syncRxNatAllocSby;
  }

  // sync_rx_nat_create_sby - computed: false, optional: true, required: false
  private _syncRxNatCreateSby?: number; 
  public get syncRxNatCreateSby() {
    return this.getNumberAttribute('sync_rx_nat_create_sby');
  }
  public set syncRxNatCreateSby(value: number) {
    this._syncRxNatCreateSby = value;
  }
  public resetSyncRxNatCreateSby() {
    this._syncRxNatCreateSby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxNatCreateSbyInput() {
    return this._syncRxNatCreateSby;
  }

  // sync_rx_no_dst_for_vport_inline - computed: false, optional: true, required: false
  private _syncRxNoDstForVportInline?: number; 
  public get syncRxNoDstForVportInline() {
    return this.getNumberAttribute('sync_rx_no_dst_for_vport_inline');
  }
  public set syncRxNoDstForVportInline(value: number) {
    this._syncRxNoDstForVportInline = value;
  }
  public resetSyncRxNoDstForVportInline() {
    this._syncRxNoDstForVportInline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxNoDstForVportInlineInput() {
    return this._syncRxNoDstForVportInline;
  }

  // sync_rx_no_such_nat_pool - computed: false, optional: true, required: false
  private _syncRxNoSuchNatPool?: number; 
  public get syncRxNoSuchNatPool() {
    return this.getNumberAttribute('sync_rx_no_such_nat_pool');
  }
  public set syncRxNoSuchNatPool(value: number) {
    this._syncRxNoSuchNatPool = value;
  }
  public resetSyncRxNoSuchNatPool() {
    this._syncRxNoSuchNatPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxNoSuchNatPoolInput() {
    return this._syncRxNoSuchNatPool;
  }

  // sync_rx_no_such_rport - computed: false, optional: true, required: false
  private _syncRxNoSuchRport?: number; 
  public get syncRxNoSuchRport() {
    return this.getNumberAttribute('sync_rx_no_such_rport');
  }
  public set syncRxNoSuchRport(value: number) {
    this._syncRxNoSuchRport = value;
  }
  public resetSyncRxNoSuchRport() {
    this._syncRxNoSuchRport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxNoSuchRportInput() {
    return this._syncRxNoSuchRport;
  }

  // sync_rx_no_such_sg_node - computed: false, optional: true, required: false
  private _syncRxNoSuchSgNode?: number; 
  public get syncRxNoSuchSgNode() {
    return this.getNumberAttribute('sync_rx_no_such_sg_node');
  }
  public set syncRxNoSuchSgNode(value: number) {
    this._syncRxNoSuchSgNode = value;
  }
  public resetSyncRxNoSuchSgNode() {
    this._syncRxNoSuchSgNode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxNoSuchSgNodeInput() {
    return this._syncRxNoSuchSgNode;
  }

  // sync_rx_no_such_vport - computed: false, optional: true, required: false
  private _syncRxNoSuchVport?: number; 
  public get syncRxNoSuchVport() {
    return this.getNumberAttribute('sync_rx_no_such_vport');
  }
  public set syncRxNoSuchVport(value: number) {
    this._syncRxNoSuchVport = value;
  }
  public resetSyncRxNoSuchVport() {
    this._syncRxNoSuchVport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxNoSuchVportInput() {
    return this._syncRxNoSuchVport;
  }

  // sync_rx_no_vgrp_counter - computed: false, optional: true, required: false
  private _syncRxNoVgrpCounter?: number; 
  public get syncRxNoVgrpCounter() {
    return this.getNumberAttribute('sync_rx_no_vgrp_counter');
  }
  public set syncRxNoVgrpCounter(value: number) {
    this._syncRxNoVgrpCounter = value;
  }
  public resetSyncRxNoVgrpCounter() {
    this._syncRxNoVgrpCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxNoVgrpCounterInput() {
    return this._syncRxNoVgrpCounter;
  }

  // sync_rx_not_expect_sync_pkt - computed: false, optional: true, required: false
  private _syncRxNotExpectSyncPkt?: number; 
  public get syncRxNotExpectSyncPkt() {
    return this.getNumberAttribute('sync_rx_not_expect_sync_pkt');
  }
  public set syncRxNotExpectSyncPkt(value: number) {
    this._syncRxNotExpectSyncPkt = value;
  }
  public resetSyncRxNotExpectSyncPkt() {
    this._syncRxNotExpectSyncPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxNotExpectSyncPktInput() {
    return this._syncRxNotExpectSyncPkt;
  }

  // sync_rx_out_of_order_pkt_counter - computed: false, optional: true, required: false
  private _syncRxOutOfOrderPktCounter?: number; 
  public get syncRxOutOfOrderPktCounter() {
    return this.getNumberAttribute('sync_rx_out_of_order_pkt_counter');
  }
  public set syncRxOutOfOrderPktCounter(value: number) {
    this._syncRxOutOfOrderPktCounter = value;
  }
  public resetSyncRxOutOfOrderPktCounter() {
    this._syncRxOutOfOrderPktCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxOutOfOrderPktCounterInput() {
    return this._syncRxOutOfOrderPktCounter;
  }

  // sync_rx_persist_create_counter - computed: false, optional: true, required: false
  private _syncRxPersistCreateCounter?: number; 
  public get syncRxPersistCreateCounter() {
    return this.getNumberAttribute('sync_rx_persist_create_counter');
  }
  public set syncRxPersistCreateCounter(value: number) {
    this._syncRxPersistCreateCounter = value;
  }
  public resetSyncRxPersistCreateCounter() {
    this._syncRxPersistCreateCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxPersistCreateCounterInput() {
    return this._syncRxPersistCreateCounter;
  }

  // sync_rx_persist_del_counter - computed: false, optional: true, required: false
  private _syncRxPersistDelCounter?: number; 
  public get syncRxPersistDelCounter() {
    return this.getNumberAttribute('sync_rx_persist_del_counter');
  }
  public set syncRxPersistDelCounter(value: number) {
    this._syncRxPersistDelCounter = value;
  }
  public resetSyncRxPersistDelCounter() {
    this._syncRxPersistDelCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxPersistDelCounterInput() {
    return this._syncRxPersistDelCounter;
  }

  // sync_rx_persist_update_age_counter - computed: false, optional: true, required: false
  private _syncRxPersistUpdateAgeCounter?: number; 
  public get syncRxPersistUpdateAgeCounter() {
    return this.getNumberAttribute('sync_rx_persist_update_age_counter');
  }
  public set syncRxPersistUpdateAgeCounter(value: number) {
    this._syncRxPersistUpdateAgeCounter = value;
  }
  public resetSyncRxPersistUpdateAgeCounter() {
    this._syncRxPersistUpdateAgeCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxPersistUpdateAgeCounterInput() {
    return this._syncRxPersistUpdateAgeCounter;
  }

  // sync_rx_proto_not_supported - computed: false, optional: true, required: false
  private _syncRxProtoNotSupported?: number; 
  public get syncRxProtoNotSupported() {
    return this.getNumberAttribute('sync_rx_proto_not_supported');
  }
  public set syncRxProtoNotSupported(value: number) {
    this._syncRxProtoNotSupported = value;
  }
  public resetSyncRxProtoNotSupported() {
    this._syncRxProtoNotSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxProtoNotSupportedInput() {
    return this._syncRxProtoNotSupported;
  }

  // sync_rx_reserve_ha - computed: false, optional: true, required: false
  private _syncRxReserveHa?: number; 
  public get syncRxReserveHa() {
    return this.getNumberAttribute('sync_rx_reserve_ha');
  }
  public set syncRxReserveHa(value: number) {
    this._syncRxReserveHa = value;
  }
  public resetSyncRxReserveHa() {
    this._syncRxReserveHa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxReserveHaInput() {
    return this._syncRxReserveHa;
  }

  // sync_rx_seq_deltas - computed: false, optional: true, required: false
  private _syncRxSeqDeltas?: number; 
  public get syncRxSeqDeltas() {
    return this.getNumberAttribute('sync_rx_seq_deltas');
  }
  public set syncRxSeqDeltas(value: number) {
    this._syncRxSeqDeltas = value;
  }
  public resetSyncRxSeqDeltas() {
    this._syncRxSeqDeltas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxSeqDeltasInput() {
    return this._syncRxSeqDeltas;
  }

  // sync_rx_sfw - computed: false, optional: true, required: false
  private _syncRxSfw?: number; 
  public get syncRxSfw() {
    return this.getNumberAttribute('sync_rx_sfw');
  }
  public set syncRxSfw(value: number) {
    this._syncRxSfw = value;
  }
  public resetSyncRxSfw() {
    this._syncRxSfw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxSfwInput() {
    return this._syncRxSfw;
  }

  // sync_rx_smp_clear_counter - computed: false, optional: true, required: false
  private _syncRxSmpClearCounter?: number; 
  public get syncRxSmpClearCounter() {
    return this.getNumberAttribute('sync_rx_smp_clear_counter');
  }
  public set syncRxSmpClearCounter(value: number) {
    this._syncRxSmpClearCounter = value;
  }
  public resetSyncRxSmpClearCounter() {
    this._syncRxSmpClearCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxSmpClearCounterInput() {
    return this._syncRxSmpClearCounter;
  }

  // sync_rx_smp_create_counter - computed: false, optional: true, required: false
  private _syncRxSmpCreateCounter?: number; 
  public get syncRxSmpCreateCounter() {
    return this.getNumberAttribute('sync_rx_smp_create_counter');
  }
  public set syncRxSmpCreateCounter(value: number) {
    this._syncRxSmpCreateCounter = value;
  }
  public resetSyncRxSmpCreateCounter() {
    this._syncRxSmpCreateCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxSmpCreateCounterInput() {
    return this._syncRxSmpCreateCounter;
  }

  // sync_rx_smp_delete_counter - computed: false, optional: true, required: false
  private _syncRxSmpDeleteCounter?: number; 
  public get syncRxSmpDeleteCounter() {
    return this.getNumberAttribute('sync_rx_smp_delete_counter');
  }
  public set syncRxSmpDeleteCounter(value: number) {
    this._syncRxSmpDeleteCounter = value;
  }
  public resetSyncRxSmpDeleteCounter() {
    this._syncRxSmpDeleteCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxSmpDeleteCounterInput() {
    return this._syncRxSmpDeleteCounter;
  }

  // sync_rx_smp_radius_table_counter - computed: false, optional: true, required: false
  private _syncRxSmpRadiusTableCounter?: number; 
  public get syncRxSmpRadiusTableCounter() {
    return this.getNumberAttribute('sync_rx_smp_radius_table_counter');
  }
  public set syncRxSmpRadiusTableCounter(value: number) {
    this._syncRxSmpRadiusTableCounter = value;
  }
  public resetSyncRxSmpRadiusTableCounter() {
    this._syncRxSmpRadiusTableCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxSmpRadiusTableCounterInput() {
    return this._syncRxSmpRadiusTableCounter;
  }

  // sync_rx_smp_update_counter - computed: false, optional: true, required: false
  private _syncRxSmpUpdateCounter?: number; 
  public get syncRxSmpUpdateCounter() {
    return this.getNumberAttribute('sync_rx_smp_update_counter');
  }
  public set syncRxSmpUpdateCounter(value: number) {
    this._syncRxSmpUpdateCounter = value;
  }
  public resetSyncRxSmpUpdateCounter() {
    this._syncRxSmpUpdateCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxSmpUpdateCounterInput() {
    return this._syncRxSmpUpdateCounter;
  }

  // sync_rx_table_entry_create_counter - computed: false, optional: true, required: false
  private _syncRxTableEntryCreateCounter?: number; 
  public get syncRxTableEntryCreateCounter() {
    return this.getNumberAttribute('sync_rx_table_entry_create_counter');
  }
  public set syncRxTableEntryCreateCounter(value: number) {
    this._syncRxTableEntryCreateCounter = value;
  }
  public resetSyncRxTableEntryCreateCounter() {
    this._syncRxTableEntryCreateCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxTableEntryCreateCounterInput() {
    return this._syncRxTableEntryCreateCounter;
  }

  // sync_rx_table_entry_del_counter - computed: false, optional: true, required: false
  private _syncRxTableEntryDelCounter?: number; 
  public get syncRxTableEntryDelCounter() {
    return this.getNumberAttribute('sync_rx_table_entry_del_counter');
  }
  public set syncRxTableEntryDelCounter(value: number) {
    this._syncRxTableEntryDelCounter = value;
  }
  public resetSyncRxTableEntryDelCounter() {
    this._syncRxTableEntryDelCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxTableEntryDelCounterInput() {
    return this._syncRxTableEntryDelCounter;
  }

  // sync_rx_table_entry_update_counter - computed: false, optional: true, required: false
  private _syncRxTableEntryUpdateCounter?: number; 
  public get syncRxTableEntryUpdateCounter() {
    return this.getNumberAttribute('sync_rx_table_entry_update_counter');
  }
  public set syncRxTableEntryUpdateCounter(value: number) {
    this._syncRxTableEntryUpdateCounter = value;
  }
  public resetSyncRxTableEntryUpdateCounter() {
    this._syncRxTableEntryUpdateCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxTableEntryUpdateCounterInput() {
    return this._syncRxTableEntryUpdateCounter;
  }

  // sync_rx_total_info_counter - computed: false, optional: true, required: false
  private _syncRxTotalInfoCounter?: number; 
  public get syncRxTotalInfoCounter() {
    return this.getNumberAttribute('sync_rx_total_info_counter');
  }
  public set syncRxTotalInfoCounter(value: number) {
    this._syncRxTotalInfoCounter = value;
  }
  public resetSyncRxTotalInfoCounter() {
    this._syncRxTotalInfoCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxTotalInfoCounterInput() {
    return this._syncRxTotalInfoCounter;
  }

  // sync_rx_type_invalid - computed: false, optional: true, required: false
  private _syncRxTypeInvalid?: number; 
  public get syncRxTypeInvalid() {
    return this.getNumberAttribute('sync_rx_type_invalid');
  }
  public set syncRxTypeInvalid(value: number) {
    this._syncRxTypeInvalid = value;
  }
  public resetSyncRxTypeInvalid() {
    this._syncRxTypeInvalid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxTypeInvalidInput() {
    return this._syncRxTypeInvalid;
  }

  // sync_rx_unk_counter - computed: false, optional: true, required: false
  private _syncRxUnkCounter?: number; 
  public get syncRxUnkCounter() {
    return this.getNumberAttribute('sync_rx_unk_counter');
  }
  public set syncRxUnkCounter(value: number) {
    this._syncRxUnkCounter = value;
  }
  public resetSyncRxUnkCounter() {
    this._syncRxUnkCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxUnkCounterInput() {
    return this._syncRxUnkCounter;
  }

  // sync_rx_unreached_pkt_counter - computed: false, optional: true, required: false
  private _syncRxUnreachedPktCounter?: number; 
  public get syncRxUnreachedPktCounter() {
    return this.getNumberAttribute('sync_rx_unreached_pkt_counter');
  }
  public set syncRxUnreachedPktCounter(value: number) {
    this._syncRxUnreachedPktCounter = value;
  }
  public resetSyncRxUnreachedPktCounter() {
    this._syncRxUnreachedPktCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxUnreachedPktCounterInput() {
    return this._syncRxUnreachedPktCounter;
  }

  // sync_rx_update_age_counter - computed: false, optional: true, required: false
  private _syncRxUpdateAgeCounter?: number; 
  public get syncRxUpdateAgeCounter() {
    return this.getNumberAttribute('sync_rx_update_age_counter');
  }
  public set syncRxUpdateAgeCounter(value: number) {
    this._syncRxUpdateAgeCounter = value;
  }
  public resetSyncRxUpdateAgeCounter() {
    this._syncRxUpdateAgeCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxUpdateAgeCounterInput() {
    return this._syncRxUpdateAgeCounter;
  }

  // sync_rx_update_sctp_conn_addr - computed: false, optional: true, required: false
  private _syncRxUpdateSctpConnAddr?: number; 
  public get syncRxUpdateSctpConnAddr() {
    return this.getNumberAttribute('sync_rx_update_sctp_conn_addr');
  }
  public set syncRxUpdateSctpConnAddr(value: number) {
    this._syncRxUpdateSctpConnAddr = value;
  }
  public resetSyncRxUpdateSctpConnAddr() {
    this._syncRxUpdateSctpConnAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxUpdateSctpConnAddrInput() {
    return this._syncRxUpdateSctpConnAddr;
  }

  // sync_rx_update_seqnos_counter - computed: false, optional: true, required: false
  private _syncRxUpdateSeqnosCounter?: number; 
  public get syncRxUpdateSeqnosCounter() {
    return this.getNumberAttribute('sync_rx_update_seqnos_counter');
  }
  public set syncRxUpdateSeqnosCounter(value: number) {
    this._syncRxUpdateSeqnosCounter = value;
  }
  public resetSyncRxUpdateSeqnosCounter() {
    this._syncRxUpdateSeqnosCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxUpdateSeqnosCounterInput() {
    return this._syncRxUpdateSeqnosCounter;
  }

  // sync_rx_zero_info_counter - computed: false, optional: true, required: false
  private _syncRxZeroInfoCounter?: number; 
  public get syncRxZeroInfoCounter() {
    return this.getNumberAttribute('sync_rx_zero_info_counter');
  }
  public set syncRxZeroInfoCounter(value: number) {
    this._syncRxZeroInfoCounter = value;
  }
  public resetSyncRxZeroInfoCounter() {
    this._syncRxZeroInfoCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxZeroInfoCounterInput() {
    return this._syncRxZeroInfoCounter;
  }

  // sync_rx_zone_failure_counter - computed: false, optional: true, required: false
  private _syncRxZoneFailureCounter?: number; 
  public get syncRxZoneFailureCounter() {
    return this.getNumberAttribute('sync_rx_zone_failure_counter');
  }
  public set syncRxZoneFailureCounter(value: number) {
    this._syncRxZoneFailureCounter = value;
  }
  public resetSyncRxZoneFailureCounter() {
    this._syncRxZoneFailureCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRxZoneFailureCounterInput() {
    return this._syncRxZoneFailureCounter;
  }

  // sync_tx_aflex_table_entry_add_counter - computed: false, optional: true, required: false
  private _syncTxAflexTableEntryAddCounter?: number; 
  public get syncTxAflexTableEntryAddCounter() {
    return this.getNumberAttribute('sync_tx_aflex_table_entry_add_counter');
  }
  public set syncTxAflexTableEntryAddCounter(value: number) {
    this._syncTxAflexTableEntryAddCounter = value;
  }
  public resetSyncTxAflexTableEntryAddCounter() {
    this._syncTxAflexTableEntryAddCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxAflexTableEntryAddCounterInput() {
    return this._syncTxAflexTableEntryAddCounter;
  }

  // sync_tx_aflex_table_entry_append_counter - computed: false, optional: true, required: false
  private _syncTxAflexTableEntryAppendCounter?: number; 
  public get syncTxAflexTableEntryAppendCounter() {
    return this.getNumberAttribute('sync_tx_aflex_table_entry_append_counter');
  }
  public set syncTxAflexTableEntryAppendCounter(value: number) {
    this._syncTxAflexTableEntryAppendCounter = value;
  }
  public resetSyncTxAflexTableEntryAppendCounter() {
    this._syncTxAflexTableEntryAppendCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxAflexTableEntryAppendCounterInput() {
    return this._syncTxAflexTableEntryAppendCounter;
  }

  // sync_tx_aflex_table_entry_delete_counter - computed: false, optional: true, required: false
  private _syncTxAflexTableEntryDeleteCounter?: number; 
  public get syncTxAflexTableEntryDeleteCounter() {
    return this.getNumberAttribute('sync_tx_aflex_table_entry_delete_counter');
  }
  public set syncTxAflexTableEntryDeleteCounter(value: number) {
    this._syncTxAflexTableEntryDeleteCounter = value;
  }
  public resetSyncTxAflexTableEntryDeleteCounter() {
    this._syncTxAflexTableEntryDeleteCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxAflexTableEntryDeleteCounterInput() {
    return this._syncTxAflexTableEntryDeleteCounter;
  }

  // sync_tx_aflex_table_entry_error_counter - computed: false, optional: true, required: false
  private _syncTxAflexTableEntryErrorCounter?: number; 
  public get syncTxAflexTableEntryErrorCounter() {
    return this.getNumberAttribute('sync_tx_aflex_table_entry_error_counter');
  }
  public set syncTxAflexTableEntryErrorCounter(value: number) {
    this._syncTxAflexTableEntryErrorCounter = value;
  }
  public resetSyncTxAflexTableEntryErrorCounter() {
    this._syncTxAflexTableEntryErrorCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxAflexTableEntryErrorCounterInput() {
    return this._syncTxAflexTableEntryErrorCounter;
  }

  // sync_tx_aflex_table_entry_fastsync_counter - computed: false, optional: true, required: false
  private _syncTxAflexTableEntryFastsyncCounter?: number; 
  public get syncTxAflexTableEntryFastsyncCounter() {
    return this.getNumberAttribute('sync_tx_aflex_table_entry_fastsync_counter');
  }
  public set syncTxAflexTableEntryFastsyncCounter(value: number) {
    this._syncTxAflexTableEntryFastsyncCounter = value;
  }
  public resetSyncTxAflexTableEntryFastsyncCounter() {
    this._syncTxAflexTableEntryFastsyncCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxAflexTableEntryFastsyncCounterInput() {
    return this._syncTxAflexTableEntryFastsyncCounter;
  }

  // sync_tx_aflex_table_entry_incr_counter - computed: false, optional: true, required: false
  private _syncTxAflexTableEntryIncrCounter?: number; 
  public get syncTxAflexTableEntryIncrCounter() {
    return this.getNumberAttribute('sync_tx_aflex_table_entry_incr_counter');
  }
  public set syncTxAflexTableEntryIncrCounter(value: number) {
    this._syncTxAflexTableEntryIncrCounter = value;
  }
  public resetSyncTxAflexTableEntryIncrCounter() {
    this._syncTxAflexTableEntryIncrCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxAflexTableEntryIncrCounterInput() {
    return this._syncTxAflexTableEntryIncrCounter;
  }

  // sync_tx_aflex_table_entry_lifetime_counter - computed: false, optional: true, required: false
  private _syncTxAflexTableEntryLifetimeCounter?: number; 
  public get syncTxAflexTableEntryLifetimeCounter() {
    return this.getNumberAttribute('sync_tx_aflex_table_entry_lifetime_counter');
  }
  public set syncTxAflexTableEntryLifetimeCounter(value: number) {
    this._syncTxAflexTableEntryLifetimeCounter = value;
  }
  public resetSyncTxAflexTableEntryLifetimeCounter() {
    this._syncTxAflexTableEntryLifetimeCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxAflexTableEntryLifetimeCounterInput() {
    return this._syncTxAflexTableEntryLifetimeCounter;
  }

  // sync_tx_aflex_table_entry_lookup_counter - computed: false, optional: true, required: false
  private _syncTxAflexTableEntryLookupCounter?: number; 
  public get syncTxAflexTableEntryLookupCounter() {
    return this.getNumberAttribute('sync_tx_aflex_table_entry_lookup_counter');
  }
  public set syncTxAflexTableEntryLookupCounter(value: number) {
    this._syncTxAflexTableEntryLookupCounter = value;
  }
  public resetSyncTxAflexTableEntryLookupCounter() {
    this._syncTxAflexTableEntryLookupCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxAflexTableEntryLookupCounterInput() {
    return this._syncTxAflexTableEntryLookupCounter;
  }

  // sync_tx_aflex_table_entry_not_eligible_counter - computed: false, optional: true, required: false
  private _syncTxAflexTableEntryNotEligibleCounter?: number; 
  public get syncTxAflexTableEntryNotEligibleCounter() {
    return this.getNumberAttribute('sync_tx_aflex_table_entry_not_eligible_counter');
  }
  public set syncTxAflexTableEntryNotEligibleCounter(value: number) {
    this._syncTxAflexTableEntryNotEligibleCounter = value;
  }
  public resetSyncTxAflexTableEntryNotEligibleCounter() {
    this._syncTxAflexTableEntryNotEligibleCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxAflexTableEntryNotEligibleCounterInput() {
    return this._syncTxAflexTableEntryNotEligibleCounter;
  }

  // sync_tx_aflex_table_entry_replace_counter - computed: false, optional: true, required: false
  private _syncTxAflexTableEntryReplaceCounter?: number; 
  public get syncTxAflexTableEntryReplaceCounter() {
    return this.getNumberAttribute('sync_tx_aflex_table_entry_replace_counter');
  }
  public set syncTxAflexTableEntryReplaceCounter(value: number) {
    this._syncTxAflexTableEntryReplaceCounter = value;
  }
  public resetSyncTxAflexTableEntryReplaceCounter() {
    this._syncTxAflexTableEntryReplaceCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxAflexTableEntryReplaceCounterInput() {
    return this._syncTxAflexTableEntryReplaceCounter;
  }

  // sync_tx_aflex_table_entry_set_counter - computed: false, optional: true, required: false
  private _syncTxAflexTableEntrySetCounter?: number; 
  public get syncTxAflexTableEntrySetCounter() {
    return this.getNumberAttribute('sync_tx_aflex_table_entry_set_counter');
  }
  public set syncTxAflexTableEntrySetCounter(value: number) {
    this._syncTxAflexTableEntrySetCounter = value;
  }
  public resetSyncTxAflexTableEntrySetCounter() {
    this._syncTxAflexTableEntrySetCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxAflexTableEntrySetCounterInput() {
    return this._syncTxAflexTableEntrySetCounter;
  }

  // sync_tx_aflex_table_entry_timeout_counter - computed: false, optional: true, required: false
  private _syncTxAflexTableEntryTimeoutCounter?: number; 
  public get syncTxAflexTableEntryTimeoutCounter() {
    return this.getNumberAttribute('sync_tx_aflex_table_entry_timeout_counter');
  }
  public set syncTxAflexTableEntryTimeoutCounter(value: number) {
    this._syncTxAflexTableEntryTimeoutCounter = value;
  }
  public resetSyncTxAflexTableEntryTimeoutCounter() {
    this._syncTxAflexTableEntryTimeoutCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxAflexTableEntryTimeoutCounterInput() {
    return this._syncTxAflexTableEntryTimeoutCounter;
  }

  // sync_tx_create_counter - computed: false, optional: true, required: false
  private _syncTxCreateCounter?: number; 
  public get syncTxCreateCounter() {
    return this.getNumberAttribute('sync_tx_create_counter');
  }
  public set syncTxCreateCounter(value: number) {
    this._syncTxCreateCounter = value;
  }
  public resetSyncTxCreateCounter() {
    this._syncTxCreateCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxCreateCounterInput() {
    return this._syncTxCreateCounter;
  }

  // sync_tx_create_ext_bit_counter - computed: false, optional: true, required: false
  private _syncTxCreateExtBitCounter?: number; 
  public get syncTxCreateExtBitCounter() {
    return this.getNumberAttribute('sync_tx_create_ext_bit_counter');
  }
  public set syncTxCreateExtBitCounter(value: number) {
    this._syncTxCreateExtBitCounter = value;
  }
  public resetSyncTxCreateExtBitCounter() {
    this._syncTxCreateExtBitCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxCreateExtBitCounterInput() {
    return this._syncTxCreateExtBitCounter;
  }

  // sync_tx_del_counter - computed: false, optional: true, required: false
  private _syncTxDelCounter?: number; 
  public get syncTxDelCounter() {
    return this.getNumberAttribute('sync_tx_del_counter');
  }
  public set syncTxDelCounter(value: number) {
    this._syncTxDelCounter = value;
  }
  public resetSyncTxDelCounter() {
    this._syncTxDelCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxDelCounterInput() {
    return this._syncTxDelCounter;
  }

  // sync_tx_estab_counter - computed: false, optional: true, required: false
  private _syncTxEstabCounter?: number; 
  public get syncTxEstabCounter() {
    return this.getNumberAttribute('sync_tx_estab_counter');
  }
  public set syncTxEstabCounter(value: number) {
    this._syncTxEstabCounter = value;
  }
  public resetSyncTxEstabCounter() {
    this._syncTxEstabCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxEstabCounterInput() {
    return this._syncTxEstabCounter;
  }

  // sync_tx_fw_set_dscp_counter - computed: false, optional: true, required: false
  private _syncTxFwSetDscpCounter?: number; 
  public get syncTxFwSetDscpCounter() {
    return this.getNumberAttribute('sync_tx_fw_set_dscp_counter');
  }
  public set syncTxFwSetDscpCounter(value: number) {
    this._syncTxFwSetDscpCounter = value;
  }
  public resetSyncTxFwSetDscpCounter() {
    this._syncTxFwSetDscpCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxFwSetDscpCounterInput() {
    return this._syncTxFwSetDscpCounter;
  }

  // sync_tx_get_buff_failed - computed: false, optional: true, required: false
  private _syncTxGetBuffFailed?: number; 
  public get syncTxGetBuffFailed() {
    return this.getNumberAttribute('sync_tx_get_buff_failed');
  }
  public set syncTxGetBuffFailed(value: number) {
    this._syncTxGetBuffFailed = value;
  }
  public resetSyncTxGetBuffFailed() {
    this._syncTxGetBuffFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxGetBuffFailedInput() {
    return this._syncTxGetBuffFailed;
  }

  // sync_tx_lsn_fullcone - computed: false, optional: true, required: false
  private _syncTxLsnFullcone?: number; 
  public get syncTxLsnFullcone() {
    return this.getNumberAttribute('sync_tx_lsn_fullcone');
  }
  public set syncTxLsnFullcone(value: number) {
    this._syncTxLsnFullcone = value;
  }
  public resetSyncTxLsnFullcone() {
    this._syncTxLsnFullcone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxLsnFullconeInput() {
    return this._syncTxLsnFullcone;
  }

  // sync_tx_max_packed - computed: false, optional: true, required: false
  private _syncTxMaxPacked?: number; 
  public get syncTxMaxPacked() {
    return this.getNumberAttribute('sync_tx_max_packed');
  }
  public set syncTxMaxPacked(value: number) {
    this._syncTxMaxPacked = value;
  }
  public resetSyncTxMaxPacked() {
    this._syncTxMaxPacked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxMaxPackedInput() {
    return this._syncTxMaxPacked;
  }

  // sync_tx_min_packed - computed: false, optional: true, required: false
  private _syncTxMinPacked?: number; 
  public get syncTxMinPacked() {
    return this.getNumberAttribute('sync_tx_min_packed');
  }
  public set syncTxMinPacked(value: number) {
    this._syncTxMinPacked = value;
  }
  public resetSyncTxMinPacked() {
    this._syncTxMinPacked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxMinPackedInput() {
    return this._syncTxMinPacked;
  }

  // sync_tx_mon_entity - computed: false, optional: true, required: false
  private _syncTxMonEntity?: number; 
  public get syncTxMonEntity() {
    return this.getNumberAttribute('sync_tx_mon_entity');
  }
  public set syncTxMonEntity(value: number) {
    this._syncTxMonEntity = value;
  }
  public resetSyncTxMonEntity() {
    this._syncTxMonEntity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxMonEntityInput() {
    return this._syncTxMonEntity;
  }

  // sync_tx_persist_create_counter - computed: false, optional: true, required: false
  private _syncTxPersistCreateCounter?: number; 
  public get syncTxPersistCreateCounter() {
    return this.getNumberAttribute('sync_tx_persist_create_counter');
  }
  public set syncTxPersistCreateCounter(value: number) {
    this._syncTxPersistCreateCounter = value;
  }
  public resetSyncTxPersistCreateCounter() {
    this._syncTxPersistCreateCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxPersistCreateCounterInput() {
    return this._syncTxPersistCreateCounter;
  }

  // sync_tx_persist_del_counter - computed: false, optional: true, required: false
  private _syncTxPersistDelCounter?: number; 
  public get syncTxPersistDelCounter() {
    return this.getNumberAttribute('sync_tx_persist_del_counter');
  }
  public set syncTxPersistDelCounter(value: number) {
    this._syncTxPersistDelCounter = value;
  }
  public resetSyncTxPersistDelCounter() {
    this._syncTxPersistDelCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxPersistDelCounterInput() {
    return this._syncTxPersistDelCounter;
  }

  // sync_tx_persist_update_age_counter - computed: false, optional: true, required: false
  private _syncTxPersistUpdateAgeCounter?: number; 
  public get syncTxPersistUpdateAgeCounter() {
    return this.getNumberAttribute('sync_tx_persist_update_age_counter');
  }
  public set syncTxPersistUpdateAgeCounter(value: number) {
    this._syncTxPersistUpdateAgeCounter = value;
  }
  public resetSyncTxPersistUpdateAgeCounter() {
    this._syncTxPersistUpdateAgeCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxPersistUpdateAgeCounterInput() {
    return this._syncTxPersistUpdateAgeCounter;
  }

  // sync_tx_smp_clear_counter - computed: false, optional: true, required: false
  private _syncTxSmpClearCounter?: number; 
  public get syncTxSmpClearCounter() {
    return this.getNumberAttribute('sync_tx_smp_clear_counter');
  }
  public set syncTxSmpClearCounter(value: number) {
    this._syncTxSmpClearCounter = value;
  }
  public resetSyncTxSmpClearCounter() {
    this._syncTxSmpClearCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxSmpClearCounterInput() {
    return this._syncTxSmpClearCounter;
  }

  // sync_tx_smp_create_counter - computed: false, optional: true, required: false
  private _syncTxSmpCreateCounter?: number; 
  public get syncTxSmpCreateCounter() {
    return this.getNumberAttribute('sync_tx_smp_create_counter');
  }
  public set syncTxSmpCreateCounter(value: number) {
    this._syncTxSmpCreateCounter = value;
  }
  public resetSyncTxSmpCreateCounter() {
    this._syncTxSmpCreateCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxSmpCreateCounterInput() {
    return this._syncTxSmpCreateCounter;
  }

  // sync_tx_smp_delete_counter - computed: false, optional: true, required: false
  private _syncTxSmpDeleteCounter?: number; 
  public get syncTxSmpDeleteCounter() {
    return this.getNumberAttribute('sync_tx_smp_delete_counter');
  }
  public set syncTxSmpDeleteCounter(value: number) {
    this._syncTxSmpDeleteCounter = value;
  }
  public resetSyncTxSmpDeleteCounter() {
    this._syncTxSmpDeleteCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxSmpDeleteCounterInput() {
    return this._syncTxSmpDeleteCounter;
  }

  // sync_tx_smp_radius_table_counter - computed: false, optional: true, required: false
  private _syncTxSmpRadiusTableCounter?: number; 
  public get syncTxSmpRadiusTableCounter() {
    return this.getNumberAttribute('sync_tx_smp_radius_table_counter');
  }
  public set syncTxSmpRadiusTableCounter(value: number) {
    this._syncTxSmpRadiusTableCounter = value;
  }
  public resetSyncTxSmpRadiusTableCounter() {
    this._syncTxSmpRadiusTableCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxSmpRadiusTableCounterInput() {
    return this._syncTxSmpRadiusTableCounter;
  }

  // sync_tx_smp_update_counter - computed: false, optional: true, required: false
  private _syncTxSmpUpdateCounter?: number; 
  public get syncTxSmpUpdateCounter() {
    return this.getNumberAttribute('sync_tx_smp_update_counter');
  }
  public set syncTxSmpUpdateCounter(value: number) {
    this._syncTxSmpUpdateCounter = value;
  }
  public resetSyncTxSmpUpdateCounter() {
    this._syncTxSmpUpdateCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxSmpUpdateCounterInput() {
    return this._syncTxSmpUpdateCounter;
  }

  // sync_tx_total_info_counter - computed: false, optional: true, required: false
  private _syncTxTotalInfoCounter?: number; 
  public get syncTxTotalInfoCounter() {
    return this.getNumberAttribute('sync_tx_total_info_counter');
  }
  public set syncTxTotalInfoCounter(value: number) {
    this._syncTxTotalInfoCounter = value;
  }
  public resetSyncTxTotalInfoCounter() {
    this._syncTxTotalInfoCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxTotalInfoCounterInput() {
    return this._syncTxTotalInfoCounter;
  }

  // sync_tx_update_age_counter - computed: false, optional: true, required: false
  private _syncTxUpdateAgeCounter?: number; 
  public get syncTxUpdateAgeCounter() {
    return this.getNumberAttribute('sync_tx_update_age_counter');
  }
  public set syncTxUpdateAgeCounter(value: number) {
    this._syncTxUpdateAgeCounter = value;
  }
  public resetSyncTxUpdateAgeCounter() {
    this._syncTxUpdateAgeCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxUpdateAgeCounterInput() {
    return this._syncTxUpdateAgeCounter;
  }

  // sync_tx_update_sctp_conn_addr - computed: false, optional: true, required: false
  private _syncTxUpdateSctpConnAddr?: number; 
  public get syncTxUpdateSctpConnAddr() {
    return this.getNumberAttribute('sync_tx_update_sctp_conn_addr');
  }
  public set syncTxUpdateSctpConnAddr(value: number) {
    this._syncTxUpdateSctpConnAddr = value;
  }
  public resetSyncTxUpdateSctpConnAddr() {
    this._syncTxUpdateSctpConnAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxUpdateSctpConnAddrInput() {
    return this._syncTxUpdateSctpConnAddr;
  }

  // sync_tx_update_seqnos_counter - computed: false, optional: true, required: false
  private _syncTxUpdateSeqnosCounter?: number; 
  public get syncTxUpdateSeqnosCounter() {
    return this.getNumberAttribute('sync_tx_update_seqnos_counter');
  }
  public set syncTxUpdateSeqnosCounter(value: number) {
    this._syncTxUpdateSeqnosCounter = value;
  }
  public resetSyncTxUpdateSeqnosCounter() {
    this._syncTxUpdateSeqnosCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTxUpdateSeqnosCounterInput() {
    return this._syncTxUpdateSeqnosCounter;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats thunder_vrrp_a_state_stats}
*/
export class DataThunderVrrpAStateStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vrrp_a_state_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVrrpAStateStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVrrpAStateStats to import
  * @param importFromId The id of the existing DataThunderVrrpAStateStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVrrpAStateStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vrrp_a_state_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vrrp_a_state_stats thunder_vrrp_a_state_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVrrpAStateStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVrrpAStateStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vrrp_a_state_stats',
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
  private _stats = new DataThunderVrrpAStateStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderVrrpAStateStatsStats) {
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
      stats: dataThunderVrrpAStateStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderVrrpAStateStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVrrpAStateStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
