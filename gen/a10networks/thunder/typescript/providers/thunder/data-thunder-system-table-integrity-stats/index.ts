// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemTableIntegrityStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#id DataThunderSystemTableIntegrityStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#stats DataThunderSystemTableIntegrityStats#stats}
  */
  readonly stats?: DataThunderSystemTableIntegrityStatsStats;
}
export interface DataThunderSystemTableIntegrityStatsStats {
  /**
  * arp table checksum count in blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_cksum_b DataThunderSystemTableIntegrityStats#arp_tbl_cksum_b}
  */
  readonly arpTblCksumB?: number;
  /**
  * arp table checksum cancelled count in master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_cksum_cancel_m DataThunderSystemTableIntegrityStats#arp_tbl_cksum_cancel_m}
  */
  readonly arpTblCksumCancelM?: number;
  /**
  * arp table checksum count in master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_cksum_m DataThunderSystemTableIntegrityStats#arp_tbl_cksum_m}
  */
  readonly arpTblCksumM?: number;
  /**
  * arp table checksum mismatch count in blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_cksum_mismatch_b DataThunderSystemTableIntegrityStats#arp_tbl_cksum_mismatch_b}
  */
  readonly arpTblCksumMismatchB?: number;
  /**
  * arp table sync count in blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_b DataThunderSystemTableIntegrityStats#arp_tbl_sync_b}
  */
  readonly arpTblSyncB?: number;
  /**
  * arp table sync end time stamp blade for T0 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_end_ts_b_1st DataThunderSystemTableIntegrityStats#arp_tbl_sync_end_ts_b_1st}
  */
  readonly arpTblSyncEndTsB1St?: number;
  /**
  * arp table sync end time stamp blade for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_end_ts_b_2nd DataThunderSystemTableIntegrityStats#arp_tbl_sync_end_ts_b_2nd}
  */
  readonly arpTblSyncEndTsB2Nd?: number;
  /**
  * arp table sync end time stamp blade for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_end_ts_b_3rd DataThunderSystemTableIntegrityStats#arp_tbl_sync_end_ts_b_3rd}
  */
  readonly arpTblSyncEndTsB3Rd?: number;
  /**
  * arp table sync end time stamp blade for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_end_ts_b_4th DataThunderSystemTableIntegrityStats#arp_tbl_sync_end_ts_b_4th}
  */
  readonly arpTblSyncEndTsB4Th?: number;
  /**
  * arp table sync end time stamp blade for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_end_ts_b_5th DataThunderSystemTableIntegrityStats#arp_tbl_sync_end_ts_b_5th}
  */
  readonly arpTblSyncEndTsB5Th?: number;
  /**
  * arp table sync end time stamp master for T0 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_end_ts_m_1st DataThunderSystemTableIntegrityStats#arp_tbl_sync_end_ts_m_1st}
  */
  readonly arpTblSyncEndTsM1St?: number;
  /**
  * arp table sync end time stamp master for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_end_ts_m_2nd DataThunderSystemTableIntegrityStats#arp_tbl_sync_end_ts_m_2nd}
  */
  readonly arpTblSyncEndTsM2Nd?: number;
  /**
  * arp table sync end time stamp master for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_end_ts_m_3rd DataThunderSystemTableIntegrityStats#arp_tbl_sync_end_ts_m_3rd}
  */
  readonly arpTblSyncEndTsM3Rd?: number;
  /**
  * arp table sync end time stamp master for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_end_ts_m_4th DataThunderSystemTableIntegrityStats#arp_tbl_sync_end_ts_m_4th}
  */
  readonly arpTblSyncEndTsM4Th?: number;
  /**
  * arp table sync end time stamp master for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_end_ts_m_5th DataThunderSystemTableIntegrityStats#arp_tbl_sync_end_ts_m_5th}
  */
  readonly arpTblSyncEndTsM5Th?: number;
  /**
  * arp table entries added on blade for T0 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_entries_added_b_1st DataThunderSystemTableIntegrityStats#arp_tbl_sync_entries_added_b_1st}
  */
  readonly arpTblSyncEntriesAddedB1St?: number;
  /**
  * arp table entries added in blade for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_entries_added_b_2nd DataThunderSystemTableIntegrityStats#arp_tbl_sync_entries_added_b_2nd}
  */
  readonly arpTblSyncEntriesAddedB2Nd?: number;
  /**
  * arp table entries added in blade for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_entries_added_b_3rd DataThunderSystemTableIntegrityStats#arp_tbl_sync_entries_added_b_3rd}
  */
  readonly arpTblSyncEntriesAddedB3Rd?: number;
  /**
  * arp table entries added in blade for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_entries_added_b_4th DataThunderSystemTableIntegrityStats#arp_tbl_sync_entries_added_b_4th}
  */
  readonly arpTblSyncEntriesAddedB4Th?: number;
  /**
  * arp table entries added in blade for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_entries_added_b_5th DataThunderSystemTableIntegrityStats#arp_tbl_sync_entries_added_b_5th}
  */
  readonly arpTblSyncEntriesAddedB5Th?: number;
  /**
  * arp table entries received on blade for T0 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_entries_rcvd_b_1st DataThunderSystemTableIntegrityStats#arp_tbl_sync_entries_rcvd_b_1st}
  */
  readonly arpTblSyncEntriesRcvdB1St?: number;
  /**
  * arp table entries received in blade for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_entries_rcvd_b_2nd DataThunderSystemTableIntegrityStats#arp_tbl_sync_entries_rcvd_b_2nd}
  */
  readonly arpTblSyncEntriesRcvdB2Nd?: number;
  /**
  * arp table entries received in blade for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_entries_rcvd_b_3rd DataThunderSystemTableIntegrityStats#arp_tbl_sync_entries_rcvd_b_3rd}
  */
  readonly arpTblSyncEntriesRcvdB3Rd?: number;
  /**
  * arp table entries received in blade for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_entries_rcvd_b_4th DataThunderSystemTableIntegrityStats#arp_tbl_sync_entries_rcvd_b_4th}
  */
  readonly arpTblSyncEntriesRcvdB4Th?: number;
  /**
  * arp table entries received in blade for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_entries_rcvd_b_5th DataThunderSystemTableIntegrityStats#arp_tbl_sync_entries_rcvd_b_5th}
  */
  readonly arpTblSyncEntriesRcvdB5Th?: number;
  /**
  * arp table entries removed on blade for T0 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_entries_removed_b_1st DataThunderSystemTableIntegrityStats#arp_tbl_sync_entries_removed_b_1st}
  */
  readonly arpTblSyncEntriesRemovedB1St?: number;
  /**
  * arp table entries removed in blade for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_entries_removed_b_2nd DataThunderSystemTableIntegrityStats#arp_tbl_sync_entries_removed_b_2nd}
  */
  readonly arpTblSyncEntriesRemovedB2Nd?: number;
  /**
  * arp table entries removed in blade for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_entries_removed_b_3rd DataThunderSystemTableIntegrityStats#arp_tbl_sync_entries_removed_b_3rd}
  */
  readonly arpTblSyncEntriesRemovedB3Rd?: number;
  /**
  * arp table entries removed in blade for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_entries_removed_b_4th DataThunderSystemTableIntegrityStats#arp_tbl_sync_entries_removed_b_4th}
  */
  readonly arpTblSyncEntriesRemovedB4Th?: number;
  /**
  * arp table entries removed in blade for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_entries_removed_b_5th DataThunderSystemTableIntegrityStats#arp_tbl_sync_entries_removed_b_5th}
  */
  readonly arpTblSyncEntriesRemovedB5Th?: number;
  /**
  * arp table entries sent from master for T0 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_entries_sent_m_1st DataThunderSystemTableIntegrityStats#arp_tbl_sync_entries_sent_m_1st}
  */
  readonly arpTblSyncEntriesSentM1St?: number;
  /**
  * arp table entries sent from master for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_entries_sent_m_2nd DataThunderSystemTableIntegrityStats#arp_tbl_sync_entries_sent_m_2nd}
  */
  readonly arpTblSyncEntriesSentM2Nd?: number;
  /**
  * arp table entries sent from master for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_entries_sent_m_3rd DataThunderSystemTableIntegrityStats#arp_tbl_sync_entries_sent_m_3rd}
  */
  readonly arpTblSyncEntriesSentM3Rd?: number;
  /**
  * arp table entries sent from master for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_entries_sent_m_4th DataThunderSystemTableIntegrityStats#arp_tbl_sync_entries_sent_m_4th}
  */
  readonly arpTblSyncEntriesSentM4Th?: number;
  /**
  * arp table sync start time stamp blade for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_entries_sent_m_5th DataThunderSystemTableIntegrityStats#arp_tbl_sync_entries_sent_m_5th}
  */
  readonly arpTblSyncEntriesSentM5Th?: number;
  /**
  * arp table sync count in master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_m DataThunderSystemTableIntegrityStats#arp_tbl_sync_m}
  */
  readonly arpTblSyncM?: number;
  /**
  * arp table sync start time stamp blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_start_ts_b_1st DataThunderSystemTableIntegrityStats#arp_tbl_sync_start_ts_b_1st}
  */
  readonly arpTblSyncStartTsB1St?: number;
  /**
  * arp table sync start time stamp blade for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_start_ts_b_2nd DataThunderSystemTableIntegrityStats#arp_tbl_sync_start_ts_b_2nd}
  */
  readonly arpTblSyncStartTsB2Nd?: number;
  /**
  * arp table sync start time stamp blade for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_start_ts_b_3rd DataThunderSystemTableIntegrityStats#arp_tbl_sync_start_ts_b_3rd}
  */
  readonly arpTblSyncStartTsB3Rd?: number;
  /**
  * arp table sync start time stamp blade for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_start_ts_b_4th DataThunderSystemTableIntegrityStats#arp_tbl_sync_start_ts_b_4th}
  */
  readonly arpTblSyncStartTsB4Th?: number;
  /**
  * arp table sync start time stamp blade for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_start_ts_b_5th DataThunderSystemTableIntegrityStats#arp_tbl_sync_start_ts_b_5th}
  */
  readonly arpTblSyncStartTsB5Th?: number;
  /**
  * arp table sync start time stamp master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_start_ts_m_1st DataThunderSystemTableIntegrityStats#arp_tbl_sync_start_ts_m_1st}
  */
  readonly arpTblSyncStartTsM1St?: number;
  /**
  * arp table sync start time stamp master for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_start_ts_m_2nd DataThunderSystemTableIntegrityStats#arp_tbl_sync_start_ts_m_2nd}
  */
  readonly arpTblSyncStartTsM2Nd?: number;
  /**
  * arp table sync start time stamp master for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_start_ts_m_3rd DataThunderSystemTableIntegrityStats#arp_tbl_sync_start_ts_m_3rd}
  */
  readonly arpTblSyncStartTsM3Rd?: number;
  /**
  * arp table sync start time stamp master for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_start_ts_m_4th DataThunderSystemTableIntegrityStats#arp_tbl_sync_start_ts_m_4th}
  */
  readonly arpTblSyncStartTsM4Th?: number;
  /**
  * arp table sync start time stamp master for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#arp_tbl_sync_start_ts_m_5th DataThunderSystemTableIntegrityStats#arp_tbl_sync_start_ts_m_5th}
  */
  readonly arpTblSyncStartTsM5Th?: number;
  /**
  * ipv4-fib table checksum count in blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_cksum_b DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_cksum_b}
  */
  readonly ipv4FibTblCksumB?: number;
  /**
  * ipv4-fib table checksum cancelled count in master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_cksum_cancel_m DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_cksum_cancel_m}
  */
  readonly ipv4FibTblCksumCancelM?: number;
  /**
  * ipv4-fib table checksum count in master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_cksum_m DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_cksum_m}
  */
  readonly ipv4FibTblCksumM?: number;
  /**
  * ipv4-fib table checksum mismatch count in blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_cksum_mismatch_b DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_cksum_mismatch_b}
  */
  readonly ipv4FibTblCksumMismatchB?: number;
  /**
  * ipv4-fib table sync count in blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_b DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_b}
  */
  readonly ipv4FibTblSyncB?: number;
  /**
  * ipv4-fib table sync end time stamp blade for T0 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_end_ts_b_1st DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_end_ts_b_1st}
  */
  readonly ipv4FibTblSyncEndTsB1St?: number;
  /**
  * ipv4-fib table sync end time stamp blade for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_end_ts_b_2nd DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_end_ts_b_2nd}
  */
  readonly ipv4FibTblSyncEndTsB2Nd?: number;
  /**
  * ipv4-fib table sync end time stamp blade for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_end_ts_b_3rd DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_end_ts_b_3rd}
  */
  readonly ipv4FibTblSyncEndTsB3Rd?: number;
  /**
  * ipv4-fib table sync end time stamp blade for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_end_ts_b_4th DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_end_ts_b_4th}
  */
  readonly ipv4FibTblSyncEndTsB4Th?: number;
  /**
  * ipv4-fib table sync end time stamp blade for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_end_ts_b_5th DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_end_ts_b_5th}
  */
  readonly ipv4FibTblSyncEndTsB5Th?: number;
  /**
  * ipv4-fib table sync end time stamp master for T0 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_end_ts_m_1st DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_end_ts_m_1st}
  */
  readonly ipv4FibTblSyncEndTsM1St?: number;
  /**
  * ipv4-fib table sync end time stamp master for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_end_ts_m_2nd DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_end_ts_m_2nd}
  */
  readonly ipv4FibTblSyncEndTsM2Nd?: number;
  /**
  * ipv4-fib table sync end time stamp master for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_end_ts_m_3rd DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_end_ts_m_3rd}
  */
  readonly ipv4FibTblSyncEndTsM3Rd?: number;
  /**
  * ipv4-fib table sync end time stamp master for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_end_ts_m_4th DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_end_ts_m_4th}
  */
  readonly ipv4FibTblSyncEndTsM4Th?: number;
  /**
  * ipv4-fib table sync end time stamp master for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_end_ts_m_5th DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_end_ts_m_5th}
  */
  readonly ipv4FibTblSyncEndTsM5Th?: number;
  /**
  * ipv4-fib table entries added on blade for T0 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_entries_added_b_1st DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_entries_added_b_1st}
  */
  readonly ipv4FibTblSyncEntriesAddedB1St?: number;
  /**
  * ipv4-fib table entries added in blade for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_entries_added_b_2nd DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_entries_added_b_2nd}
  */
  readonly ipv4FibTblSyncEntriesAddedB2Nd?: number;
  /**
  * ipv4-fib table entries added in blade for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_entries_added_b_3rd DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_entries_added_b_3rd}
  */
  readonly ipv4FibTblSyncEntriesAddedB3Rd?: number;
  /**
  * ipv4-fib table entries added in blade for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_entries_added_b_4th DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_entries_added_b_4th}
  */
  readonly ipv4FibTblSyncEntriesAddedB4Th?: number;
  /**
  * ipv4-fib table entries added in blade for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_entries_added_b_5th DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_entries_added_b_5th}
  */
  readonly ipv4FibTblSyncEntriesAddedB5Th?: number;
  /**
  * ipv4-fib table entries received on blade for T0 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_entries_rcvd_b_1st DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_entries_rcvd_b_1st}
  */
  readonly ipv4FibTblSyncEntriesRcvdB1St?: number;
  /**
  * ipv4-fib table entries received in blade for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_entries_rcvd_b_2nd DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_entries_rcvd_b_2nd}
  */
  readonly ipv4FibTblSyncEntriesRcvdB2Nd?: number;
  /**
  * ipv4-fib table entries received in blade for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_entries_rcvd_b_3rd DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_entries_rcvd_b_3rd}
  */
  readonly ipv4FibTblSyncEntriesRcvdB3Rd?: number;
  /**
  * ipv4-fib table entries received in blade for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_entries_rcvd_b_4th DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_entries_rcvd_b_4th}
  */
  readonly ipv4FibTblSyncEntriesRcvdB4Th?: number;
  /**
  * ipv4-fib table entries received in blade for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_entries_rcvd_b_5th DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_entries_rcvd_b_5th}
  */
  readonly ipv4FibTblSyncEntriesRcvdB5Th?: number;
  /**
  * arp table entries removed on blade for T0 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_entries_removed_b_1st DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_entries_removed_b_1st}
  */
  readonly ipv4FibTblSyncEntriesRemovedB1St?: number;
  /**
  * ipv4-fib table entries removed in blade for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_entries_removed_b_2nd DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_entries_removed_b_2nd}
  */
  readonly ipv4FibTblSyncEntriesRemovedB2Nd?: number;
  /**
  * ipv4-fib table entries removed in blade for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_entries_removed_b_3rd DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_entries_removed_b_3rd}
  */
  readonly ipv4FibTblSyncEntriesRemovedB3Rd?: number;
  /**
  * ipv4-fib table entries removed in blade for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_entries_removed_b_4th DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_entries_removed_b_4th}
  */
  readonly ipv4FibTblSyncEntriesRemovedB4Th?: number;
  /**
  * ipv4-fib table entries removed in blade for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_entries_removed_b_5th DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_entries_removed_b_5th}
  */
  readonly ipv4FibTblSyncEntriesRemovedB5Th?: number;
  /**
  * ipv4-fib table entries sent from master for T0 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_entries_sent_m_1st DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_entries_sent_m_1st}
  */
  readonly ipv4FibTblSyncEntriesSentM1St?: number;
  /**
  * ipv4-fib table entries sent from master for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_entries_sent_m_2nd DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_entries_sent_m_2nd}
  */
  readonly ipv4FibTblSyncEntriesSentM2Nd?: number;
  /**
  * ipv4-fib table entries sent from master for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_entries_sent_m_3rd DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_entries_sent_m_3rd}
  */
  readonly ipv4FibTblSyncEntriesSentM3Rd?: number;
  /**
  * ipv4-fib table entries sent from master for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_entries_sent_m_4th DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_entries_sent_m_4th}
  */
  readonly ipv4FibTblSyncEntriesSentM4Th?: number;
  /**
  * ipv4-fib table sync start time stamp blade for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_entries_sent_m_5th DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_entries_sent_m_5th}
  */
  readonly ipv4FibTblSyncEntriesSentM5Th?: number;
  /**
  * ipv4-fib table sync count in master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_m DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_m}
  */
  readonly ipv4FibTblSyncM?: number;
  /**
  * ipv4-fib table sync start time stamp blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_start_ts_b_1st DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_start_ts_b_1st}
  */
  readonly ipv4FibTblSyncStartTsB1St?: number;
  /**
  * ipv4-fib table sync start time stamp blade for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_start_ts_b_2nd DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_start_ts_b_2nd}
  */
  readonly ipv4FibTblSyncStartTsB2Nd?: number;
  /**
  * ipv4-fib table sync start time stamp blade for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_start_ts_b_3rd DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_start_ts_b_3rd}
  */
  readonly ipv4FibTblSyncStartTsB3Rd?: number;
  /**
  * ipv4-fib table sync start time stamp blade for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_start_ts_b_4th DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_start_ts_b_4th}
  */
  readonly ipv4FibTblSyncStartTsB4Th?: number;
  /**
  * ipv4-fib table sync start time stamp blade for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_start_ts_b_5th DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_start_ts_b_5th}
  */
  readonly ipv4FibTblSyncStartTsB5Th?: number;
  /**
  * ipv4-fib table sync start time stamp master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_start_ts_m_1st DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_start_ts_m_1st}
  */
  readonly ipv4FibTblSyncStartTsM1St?: number;
  /**
  * ipv4-fib table sync start time stamp master for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_start_ts_m_2nd DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_start_ts_m_2nd}
  */
  readonly ipv4FibTblSyncStartTsM2Nd?: number;
  /**
  * ipv4-fib table sync start time stamp master for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_start_ts_m_3rd DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_start_ts_m_3rd}
  */
  readonly ipv4FibTblSyncStartTsM3Rd?: number;
  /**
  * ipv4-fib table sync start time stamp master for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_start_ts_m_4th DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_start_ts_m_4th}
  */
  readonly ipv4FibTblSyncStartTsM4Th?: number;
  /**
  * ipv4-fib table sync start time stamp master for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv4_fib_tbl_sync_start_ts_m_5th DataThunderSystemTableIntegrityStats#ipv4_fib_tbl_sync_start_ts_m_5th}
  */
  readonly ipv4FibTblSyncStartTsM5Th?: number;
  /**
  * ipv6-fib table checksum count in blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_cksum_b DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_cksum_b}
  */
  readonly ipv6FibTblCksumB?: number;
  /**
  * ipv6-fib table checksum cancelled count in master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_cksum_cancel_m DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_cksum_cancel_m}
  */
  readonly ipv6FibTblCksumCancelM?: number;
  /**
  * ipv6-fib table checksum count in master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_cksum_m DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_cksum_m}
  */
  readonly ipv6FibTblCksumM?: number;
  /**
  * ipv6-fib table checksum mismatch count in blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_cksum_mismatch_b DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_cksum_mismatch_b}
  */
  readonly ipv6FibTblCksumMismatchB?: number;
  /**
  * ipv6-fib table sync count in blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_b DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_b}
  */
  readonly ipv6FibTblSyncB?: number;
  /**
  * ipv6-fib table sync end time stamp blade for T0 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_end_ts_b_1st DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_end_ts_b_1st}
  */
  readonly ipv6FibTblSyncEndTsB1St?: number;
  /**
  * ipv6-fib table sync end time stamp blade for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_end_ts_b_2nd DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_end_ts_b_2nd}
  */
  readonly ipv6FibTblSyncEndTsB2Nd?: number;
  /**
  * ipv6-fib table sync end time stamp blade for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_end_ts_b_3rd DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_end_ts_b_3rd}
  */
  readonly ipv6FibTblSyncEndTsB3Rd?: number;
  /**
  * ipv6-fib table sync end time stamp blade for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_end_ts_b_4th DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_end_ts_b_4th}
  */
  readonly ipv6FibTblSyncEndTsB4Th?: number;
  /**
  * ipv6-fib table sync end time stamp blade for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_end_ts_b_5th DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_end_ts_b_5th}
  */
  readonly ipv6FibTblSyncEndTsB5Th?: number;
  /**
  * ipv6-fib table sync end time stamp master for T0 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_end_ts_m_1st DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_end_ts_m_1st}
  */
  readonly ipv6FibTblSyncEndTsM1St?: number;
  /**
  * ipv6-fib table sync end time stamp master for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_end_ts_m_2nd DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_end_ts_m_2nd}
  */
  readonly ipv6FibTblSyncEndTsM2Nd?: number;
  /**
  * ipv6-fib table sync end time stamp master for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_end_ts_m_3rd DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_end_ts_m_3rd}
  */
  readonly ipv6FibTblSyncEndTsM3Rd?: number;
  /**
  * ipv6-fib table sync end time stamp master for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_end_ts_m_4th DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_end_ts_m_4th}
  */
  readonly ipv6FibTblSyncEndTsM4Th?: number;
  /**
  * ipv6-fib table sync end time stamp master for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_end_ts_m_5th DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_end_ts_m_5th}
  */
  readonly ipv6FibTblSyncEndTsM5Th?: number;
  /**
  * ipv6-fib table entries added on blade for T0 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_entries_added_b_1st DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_entries_added_b_1st}
  */
  readonly ipv6FibTblSyncEntriesAddedB1St?: number;
  /**
  * ipv6-fib table entries added in blade for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_entries_added_b_2nd DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_entries_added_b_2nd}
  */
  readonly ipv6FibTblSyncEntriesAddedB2Nd?: number;
  /**
  * ipv6-fib table entries added in blade for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_entries_added_b_3rd DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_entries_added_b_3rd}
  */
  readonly ipv6FibTblSyncEntriesAddedB3Rd?: number;
  /**
  * ipv6-fib table entries added in blade for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_entries_added_b_4th DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_entries_added_b_4th}
  */
  readonly ipv6FibTblSyncEntriesAddedB4Th?: number;
  /**
  * ipv6-fib table entries added in blade for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_entries_added_b_5th DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_entries_added_b_5th}
  */
  readonly ipv6FibTblSyncEntriesAddedB5Th?: number;
  /**
  * ipv6-fib table entries received on blade for T0 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_entries_rcvd_b_1st DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_entries_rcvd_b_1st}
  */
  readonly ipv6FibTblSyncEntriesRcvdB1St?: number;
  /**
  * ipv6-fib table entries received in blade for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_entries_rcvd_b_2nd DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_entries_rcvd_b_2nd}
  */
  readonly ipv6FibTblSyncEntriesRcvdB2Nd?: number;
  /**
  * ipv6-fib table entries received in blade for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_entries_rcvd_b_3rd DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_entries_rcvd_b_3rd}
  */
  readonly ipv6FibTblSyncEntriesRcvdB3Rd?: number;
  /**
  * ipv6-fib table entries received in blade for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_entries_rcvd_b_4th DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_entries_rcvd_b_4th}
  */
  readonly ipv6FibTblSyncEntriesRcvdB4Th?: number;
  /**
  * ipv6-fib table entries received in blade for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_entries_rcvd_b_5th DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_entries_rcvd_b_5th}
  */
  readonly ipv6FibTblSyncEntriesRcvdB5Th?: number;
  /**
  * arp table entries removed on blade for T0 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_entries_removed_b_1st DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_entries_removed_b_1st}
  */
  readonly ipv6FibTblSyncEntriesRemovedB1St?: number;
  /**
  * ipv6-fib table entries removed in blade for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_entries_removed_b_2nd DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_entries_removed_b_2nd}
  */
  readonly ipv6FibTblSyncEntriesRemovedB2Nd?: number;
  /**
  * ipv6-fib table entries removed in blade for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_entries_removed_b_3rd DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_entries_removed_b_3rd}
  */
  readonly ipv6FibTblSyncEntriesRemovedB3Rd?: number;
  /**
  * ipv6-fib table entries removed in blade for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_entries_removed_b_4th DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_entries_removed_b_4th}
  */
  readonly ipv6FibTblSyncEntriesRemovedB4Th?: number;
  /**
  * ipv6-fib table entries removed in blade for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_entries_removed_b_5th DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_entries_removed_b_5th}
  */
  readonly ipv6FibTblSyncEntriesRemovedB5Th?: number;
  /**
  * ipv6-fib table entries sent from master for T0 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_entries_sent_m_1st DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_entries_sent_m_1st}
  */
  readonly ipv6FibTblSyncEntriesSentM1St?: number;
  /**
  * ipv6-fib table entries sent from master for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_entries_sent_m_2nd DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_entries_sent_m_2nd}
  */
  readonly ipv6FibTblSyncEntriesSentM2Nd?: number;
  /**
  * ipv6-fib table entries sent from master for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_entries_sent_m_3rd DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_entries_sent_m_3rd}
  */
  readonly ipv6FibTblSyncEntriesSentM3Rd?: number;
  /**
  * ipv6-fib table entries sent from master for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_entries_sent_m_4th DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_entries_sent_m_4th}
  */
  readonly ipv6FibTblSyncEntriesSentM4Th?: number;
  /**
  * ipv6-fib table sync start time stamp blade for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_entries_sent_m_5th DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_entries_sent_m_5th}
  */
  readonly ipv6FibTblSyncEntriesSentM5Th?: number;
  /**
  * ipv6-fib table sync count in master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_m DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_m}
  */
  readonly ipv6FibTblSyncM?: number;
  /**
  * ipv6-fib table sync start time stamp blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_start_ts_b_1st DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_start_ts_b_1st}
  */
  readonly ipv6FibTblSyncStartTsB1St?: number;
  /**
  * ipv6-fib table sync start time stamp blade for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_start_ts_b_2nd DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_start_ts_b_2nd}
  */
  readonly ipv6FibTblSyncStartTsB2Nd?: number;
  /**
  * ipv6-fib table sync start time stamp blade for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_start_ts_b_3rd DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_start_ts_b_3rd}
  */
  readonly ipv6FibTblSyncStartTsB3Rd?: number;
  /**
  * ipv6-fib table sync start time stamp blade for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_start_ts_b_4th DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_start_ts_b_4th}
  */
  readonly ipv6FibTblSyncStartTsB4Th?: number;
  /**
  * ipv6-fib table sync start time stamp blade for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_start_ts_b_5th DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_start_ts_b_5th}
  */
  readonly ipv6FibTblSyncStartTsB5Th?: number;
  /**
  * ipv6-fib table sync start time stamp master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_start_ts_m_1st DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_start_ts_m_1st}
  */
  readonly ipv6FibTblSyncStartTsM1St?: number;
  /**
  * ipv6-fib table sync start time stamp master for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_start_ts_m_2nd DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_start_ts_m_2nd}
  */
  readonly ipv6FibTblSyncStartTsM2Nd?: number;
  /**
  * ipv6-fib table sync start time stamp master for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_start_ts_m_3rd DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_start_ts_m_3rd}
  */
  readonly ipv6FibTblSyncStartTsM3Rd?: number;
  /**
  * ipv6-fib table sync start time stamp master for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_start_ts_m_4th DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_start_ts_m_4th}
  */
  readonly ipv6FibTblSyncStartTsM4Th?: number;
  /**
  * ipv6-fib table sync start time stamp master for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#ipv6_fib_tbl_sync_start_ts_m_5th DataThunderSystemTableIntegrityStats#ipv6_fib_tbl_sync_start_ts_m_5th}
  */
  readonly ipv6FibTblSyncStartTsM5Th?: number;
  /**
  * mac table checksum count in blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_cksum_b DataThunderSystemTableIntegrityStats#mac_tbl_cksum_b}
  */
  readonly macTblCksumB?: number;
  /**
  * mac table checksum cancelled count in master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_cksum_cancel_m DataThunderSystemTableIntegrityStats#mac_tbl_cksum_cancel_m}
  */
  readonly macTblCksumCancelM?: number;
  /**
  * mac table checksum count in master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_cksum_m DataThunderSystemTableIntegrityStats#mac_tbl_cksum_m}
  */
  readonly macTblCksumM?: number;
  /**
  * mac table checksum mismatch count in blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_cksum_mismatch_b DataThunderSystemTableIntegrityStats#mac_tbl_cksum_mismatch_b}
  */
  readonly macTblCksumMismatchB?: number;
  /**
  * mac table sync count in blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_b DataThunderSystemTableIntegrityStats#mac_tbl_sync_b}
  */
  readonly macTblSyncB?: number;
  /**
  * mac table sync end time stamp blade for T0 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_end_ts_b_1st DataThunderSystemTableIntegrityStats#mac_tbl_sync_end_ts_b_1st}
  */
  readonly macTblSyncEndTsB1St?: number;
  /**
  * mac table sync end time stamp blade for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_end_ts_b_2nd DataThunderSystemTableIntegrityStats#mac_tbl_sync_end_ts_b_2nd}
  */
  readonly macTblSyncEndTsB2Nd?: number;
  /**
  * mac table sync end time stamp blade for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_end_ts_b_3rd DataThunderSystemTableIntegrityStats#mac_tbl_sync_end_ts_b_3rd}
  */
  readonly macTblSyncEndTsB3Rd?: number;
  /**
  * mac table sync end time stamp blade for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_end_ts_b_4th DataThunderSystemTableIntegrityStats#mac_tbl_sync_end_ts_b_4th}
  */
  readonly macTblSyncEndTsB4Th?: number;
  /**
  * mac table sync end time stamp blade for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_end_ts_b_5th DataThunderSystemTableIntegrityStats#mac_tbl_sync_end_ts_b_5th}
  */
  readonly macTblSyncEndTsB5Th?: number;
  /**
  * mac table sync end time stamp master for T0 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_end_ts_m_1st DataThunderSystemTableIntegrityStats#mac_tbl_sync_end_ts_m_1st}
  */
  readonly macTblSyncEndTsM1St?: number;
  /**
  * mac table sync end time stamp master for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_end_ts_m_2nd DataThunderSystemTableIntegrityStats#mac_tbl_sync_end_ts_m_2nd}
  */
  readonly macTblSyncEndTsM2Nd?: number;
  /**
  * mac table sync end time stamp master for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_end_ts_m_3rd DataThunderSystemTableIntegrityStats#mac_tbl_sync_end_ts_m_3rd}
  */
  readonly macTblSyncEndTsM3Rd?: number;
  /**
  * mac table sync end time stamp master for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_end_ts_m_4th DataThunderSystemTableIntegrityStats#mac_tbl_sync_end_ts_m_4th}
  */
  readonly macTblSyncEndTsM4Th?: number;
  /**
  * mac table sync end time stamp master for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_end_ts_m_5th DataThunderSystemTableIntegrityStats#mac_tbl_sync_end_ts_m_5th}
  */
  readonly macTblSyncEndTsM5Th?: number;
  /**
  * mac table entries added on blade for T0 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_entries_added_b_1st DataThunderSystemTableIntegrityStats#mac_tbl_sync_entries_added_b_1st}
  */
  readonly macTblSyncEntriesAddedB1St?: number;
  /**
  * mac table entries added in blade for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_entries_added_b_2nd DataThunderSystemTableIntegrityStats#mac_tbl_sync_entries_added_b_2nd}
  */
  readonly macTblSyncEntriesAddedB2Nd?: number;
  /**
  * mac table entries added in blade for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_entries_added_b_3rd DataThunderSystemTableIntegrityStats#mac_tbl_sync_entries_added_b_3rd}
  */
  readonly macTblSyncEntriesAddedB3Rd?: number;
  /**
  * mac table entries added in blade for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_entries_added_b_4th DataThunderSystemTableIntegrityStats#mac_tbl_sync_entries_added_b_4th}
  */
  readonly macTblSyncEntriesAddedB4Th?: number;
  /**
  * mac table entries added in blade for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_entries_added_b_5th DataThunderSystemTableIntegrityStats#mac_tbl_sync_entries_added_b_5th}
  */
  readonly macTblSyncEntriesAddedB5Th?: number;
  /**
  * mac table entries received on blade for T0 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_entries_rcvd_b_1st DataThunderSystemTableIntegrityStats#mac_tbl_sync_entries_rcvd_b_1st}
  */
  readonly macTblSyncEntriesRcvdB1St?: number;
  /**
  * mac table entries received in blade for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_entries_rcvd_b_2nd DataThunderSystemTableIntegrityStats#mac_tbl_sync_entries_rcvd_b_2nd}
  */
  readonly macTblSyncEntriesRcvdB2Nd?: number;
  /**
  * mac table entries received in blade for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_entries_rcvd_b_3rd DataThunderSystemTableIntegrityStats#mac_tbl_sync_entries_rcvd_b_3rd}
  */
  readonly macTblSyncEntriesRcvdB3Rd?: number;
  /**
  * mac table entries received in blade for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_entries_rcvd_b_4th DataThunderSystemTableIntegrityStats#mac_tbl_sync_entries_rcvd_b_4th}
  */
  readonly macTblSyncEntriesRcvdB4Th?: number;
  /**
  * mac table entries received in blade for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_entries_rcvd_b_5th DataThunderSystemTableIntegrityStats#mac_tbl_sync_entries_rcvd_b_5th}
  */
  readonly macTblSyncEntriesRcvdB5Th?: number;
  /**
  * arp table entries removed on blade for T0 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_entries_removed_b_1st DataThunderSystemTableIntegrityStats#mac_tbl_sync_entries_removed_b_1st}
  */
  readonly macTblSyncEntriesRemovedB1St?: number;
  /**
  * mac table entries removed in blade for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_entries_removed_b_2nd DataThunderSystemTableIntegrityStats#mac_tbl_sync_entries_removed_b_2nd}
  */
  readonly macTblSyncEntriesRemovedB2Nd?: number;
  /**
  * mac table entries removed in blade for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_entries_removed_b_3rd DataThunderSystemTableIntegrityStats#mac_tbl_sync_entries_removed_b_3rd}
  */
  readonly macTblSyncEntriesRemovedB3Rd?: number;
  /**
  * mac table entries removed in blade for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_entries_removed_b_4th DataThunderSystemTableIntegrityStats#mac_tbl_sync_entries_removed_b_4th}
  */
  readonly macTblSyncEntriesRemovedB4Th?: number;
  /**
  * mac table entries removed in blade for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_entries_removed_b_5th DataThunderSystemTableIntegrityStats#mac_tbl_sync_entries_removed_b_5th}
  */
  readonly macTblSyncEntriesRemovedB5Th?: number;
  /**
  * mac table entries sent from master for T0 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_entries_sent_m_1st DataThunderSystemTableIntegrityStats#mac_tbl_sync_entries_sent_m_1st}
  */
  readonly macTblSyncEntriesSentM1St?: number;
  /**
  * mac table entries sent from master for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_entries_sent_m_2nd DataThunderSystemTableIntegrityStats#mac_tbl_sync_entries_sent_m_2nd}
  */
  readonly macTblSyncEntriesSentM2Nd?: number;
  /**
  * mac table entries sent from master for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_entries_sent_m_3rd DataThunderSystemTableIntegrityStats#mac_tbl_sync_entries_sent_m_3rd}
  */
  readonly macTblSyncEntriesSentM3Rd?: number;
  /**
  * mac table entries sent from master for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_entries_sent_m_4th DataThunderSystemTableIntegrityStats#mac_tbl_sync_entries_sent_m_4th}
  */
  readonly macTblSyncEntriesSentM4Th?: number;
  /**
  * mac table sync start time stamp blade for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_entries_sent_m_5th DataThunderSystemTableIntegrityStats#mac_tbl_sync_entries_sent_m_5th}
  */
  readonly macTblSyncEntriesSentM5Th?: number;
  /**
  * mac table sync count in master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_m DataThunderSystemTableIntegrityStats#mac_tbl_sync_m}
  */
  readonly macTblSyncM?: number;
  /**
  * mac table sync start time stamp blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_start_ts_b_1st DataThunderSystemTableIntegrityStats#mac_tbl_sync_start_ts_b_1st}
  */
  readonly macTblSyncStartTsB1St?: number;
  /**
  * mac table sync start time stamp blade for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_start_ts_b_2nd DataThunderSystemTableIntegrityStats#mac_tbl_sync_start_ts_b_2nd}
  */
  readonly macTblSyncStartTsB2Nd?: number;
  /**
  * mac table sync start time stamp blade for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_start_ts_b_3rd DataThunderSystemTableIntegrityStats#mac_tbl_sync_start_ts_b_3rd}
  */
  readonly macTblSyncStartTsB3Rd?: number;
  /**
  * mac table sync start time stamp blade for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_start_ts_b_4th DataThunderSystemTableIntegrityStats#mac_tbl_sync_start_ts_b_4th}
  */
  readonly macTblSyncStartTsB4Th?: number;
  /**
  * mac table sync start time stamp blade for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_start_ts_b_5th DataThunderSystemTableIntegrityStats#mac_tbl_sync_start_ts_b_5th}
  */
  readonly macTblSyncStartTsB5Th?: number;
  /**
  * mac table sync start time stamp master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_start_ts_m_1st DataThunderSystemTableIntegrityStats#mac_tbl_sync_start_ts_m_1st}
  */
  readonly macTblSyncStartTsM1St?: number;
  /**
  * mac table sync start time stamp master for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_start_ts_m_2nd DataThunderSystemTableIntegrityStats#mac_tbl_sync_start_ts_m_2nd}
  */
  readonly macTblSyncStartTsM2Nd?: number;
  /**
  * mac table sync start time stamp master for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_start_ts_m_3rd DataThunderSystemTableIntegrityStats#mac_tbl_sync_start_ts_m_3rd}
  */
  readonly macTblSyncStartTsM3Rd?: number;
  /**
  * mac table sync start time stamp master for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_start_ts_m_4th DataThunderSystemTableIntegrityStats#mac_tbl_sync_start_ts_m_4th}
  */
  readonly macTblSyncStartTsM4Th?: number;
  /**
  * mac table sync start time stamp master for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#mac_tbl_sync_start_ts_m_5th DataThunderSystemTableIntegrityStats#mac_tbl_sync_start_ts_m_5th}
  */
  readonly macTblSyncStartTsM5Th?: number;
  /**
  * nd6 table checksum count in blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_cksum_b DataThunderSystemTableIntegrityStats#nd6_tbl_cksum_b}
  */
  readonly nd6TblCksumB?: number;
  /**
  * nd6 table checksum cancelled count in master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_cksum_cancel_m DataThunderSystemTableIntegrityStats#nd6_tbl_cksum_cancel_m}
  */
  readonly nd6TblCksumCancelM?: number;
  /**
  * nd6 table checksum count in master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_cksum_m DataThunderSystemTableIntegrityStats#nd6_tbl_cksum_m}
  */
  readonly nd6TblCksumM?: number;
  /**
  * nd6 table checksum mismatch count in blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_cksum_mismatch_b DataThunderSystemTableIntegrityStats#nd6_tbl_cksum_mismatch_b}
  */
  readonly nd6TblCksumMismatchB?: number;
  /**
  * nd6 table sync count in blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_b DataThunderSystemTableIntegrityStats#nd6_tbl_sync_b}
  */
  readonly nd6TblSyncB?: number;
  /**
  * nd6 table sync end time stamp blade for T0 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_end_ts_b_1st DataThunderSystemTableIntegrityStats#nd6_tbl_sync_end_ts_b_1st}
  */
  readonly nd6TblSyncEndTsB1St?: number;
  /**
  * nd6 table sync end time stamp blade for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_end_ts_b_2nd DataThunderSystemTableIntegrityStats#nd6_tbl_sync_end_ts_b_2nd}
  */
  readonly nd6TblSyncEndTsB2Nd?: number;
  /**
  * nd6 table sync end time stamp blade for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_end_ts_b_3rd DataThunderSystemTableIntegrityStats#nd6_tbl_sync_end_ts_b_3rd}
  */
  readonly nd6TblSyncEndTsB3Rd?: number;
  /**
  * nd6 table sync end time stamp blade for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_end_ts_b_4th DataThunderSystemTableIntegrityStats#nd6_tbl_sync_end_ts_b_4th}
  */
  readonly nd6TblSyncEndTsB4Th?: number;
  /**
  * nd6 table sync end time stamp blade for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_end_ts_b_5th DataThunderSystemTableIntegrityStats#nd6_tbl_sync_end_ts_b_5th}
  */
  readonly nd6TblSyncEndTsB5Th?: number;
  /**
  * nd6 table sync end time stamp master for T0 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_end_ts_m_1st DataThunderSystemTableIntegrityStats#nd6_tbl_sync_end_ts_m_1st}
  */
  readonly nd6TblSyncEndTsM1St?: number;
  /**
  * nd6 table sync end time stamp master for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_end_ts_m_2nd DataThunderSystemTableIntegrityStats#nd6_tbl_sync_end_ts_m_2nd}
  */
  readonly nd6TblSyncEndTsM2Nd?: number;
  /**
  * nd6 table sync end time stamp master for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_end_ts_m_3rd DataThunderSystemTableIntegrityStats#nd6_tbl_sync_end_ts_m_3rd}
  */
  readonly nd6TblSyncEndTsM3Rd?: number;
  /**
  * nd6 table sync end time stamp master for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_end_ts_m_4th DataThunderSystemTableIntegrityStats#nd6_tbl_sync_end_ts_m_4th}
  */
  readonly nd6TblSyncEndTsM4Th?: number;
  /**
  * nd6 table sync end time stamp master for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_end_ts_m_5th DataThunderSystemTableIntegrityStats#nd6_tbl_sync_end_ts_m_5th}
  */
  readonly nd6TblSyncEndTsM5Th?: number;
  /**
  * nd6 table entries added on blade for T0 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_entries_added_b_1st DataThunderSystemTableIntegrityStats#nd6_tbl_sync_entries_added_b_1st}
  */
  readonly nd6TblSyncEntriesAddedB1St?: number;
  /**
  * nd6 table entries added in blade for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_entries_added_b_2nd DataThunderSystemTableIntegrityStats#nd6_tbl_sync_entries_added_b_2nd}
  */
  readonly nd6TblSyncEntriesAddedB2Nd?: number;
  /**
  * nd6 table entries added in blade for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_entries_added_b_3rd DataThunderSystemTableIntegrityStats#nd6_tbl_sync_entries_added_b_3rd}
  */
  readonly nd6TblSyncEntriesAddedB3Rd?: number;
  /**
  * nd6 table entries added in blade for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_entries_added_b_4th DataThunderSystemTableIntegrityStats#nd6_tbl_sync_entries_added_b_4th}
  */
  readonly nd6TblSyncEntriesAddedB4Th?: number;
  /**
  * nd6 table entries added in blade for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_entries_added_b_5th DataThunderSystemTableIntegrityStats#nd6_tbl_sync_entries_added_b_5th}
  */
  readonly nd6TblSyncEntriesAddedB5Th?: number;
  /**
  * nd6 table entries received on blade for T0 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_entries_rcvd_b_1st DataThunderSystemTableIntegrityStats#nd6_tbl_sync_entries_rcvd_b_1st}
  */
  readonly nd6TblSyncEntriesRcvdB1St?: number;
  /**
  * nd6 table entries received in blade for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_entries_rcvd_b_2nd DataThunderSystemTableIntegrityStats#nd6_tbl_sync_entries_rcvd_b_2nd}
  */
  readonly nd6TblSyncEntriesRcvdB2Nd?: number;
  /**
  * nd6 table entries received in blade for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_entries_rcvd_b_3rd DataThunderSystemTableIntegrityStats#nd6_tbl_sync_entries_rcvd_b_3rd}
  */
  readonly nd6TblSyncEntriesRcvdB3Rd?: number;
  /**
  * nd6 table entries received in blade for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_entries_rcvd_b_4th DataThunderSystemTableIntegrityStats#nd6_tbl_sync_entries_rcvd_b_4th}
  */
  readonly nd6TblSyncEntriesRcvdB4Th?: number;
  /**
  * nd6 table entries received in blade for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_entries_rcvd_b_5th DataThunderSystemTableIntegrityStats#nd6_tbl_sync_entries_rcvd_b_5th}
  */
  readonly nd6TblSyncEntriesRcvdB5Th?: number;
  /**
  * arp table entries removed on blade for T0 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_entries_removed_b_1st DataThunderSystemTableIntegrityStats#nd6_tbl_sync_entries_removed_b_1st}
  */
  readonly nd6TblSyncEntriesRemovedB1St?: number;
  /**
  * nd6 table entries removed in blade for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_entries_removed_b_2nd DataThunderSystemTableIntegrityStats#nd6_tbl_sync_entries_removed_b_2nd}
  */
  readonly nd6TblSyncEntriesRemovedB2Nd?: number;
  /**
  * nd6 table entries removed in blade for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_entries_removed_b_3rd DataThunderSystemTableIntegrityStats#nd6_tbl_sync_entries_removed_b_3rd}
  */
  readonly nd6TblSyncEntriesRemovedB3Rd?: number;
  /**
  * nd6 table entries removed in blade for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_entries_removed_b_4th DataThunderSystemTableIntegrityStats#nd6_tbl_sync_entries_removed_b_4th}
  */
  readonly nd6TblSyncEntriesRemovedB4Th?: number;
  /**
  * nd6 table entries removed in blade for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_entries_removed_b_5th DataThunderSystemTableIntegrityStats#nd6_tbl_sync_entries_removed_b_5th}
  */
  readonly nd6TblSyncEntriesRemovedB5Th?: number;
  /**
  * nd6 table entries sent from master for T0 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_entries_sent_m_1st DataThunderSystemTableIntegrityStats#nd6_tbl_sync_entries_sent_m_1st}
  */
  readonly nd6TblSyncEntriesSentM1St?: number;
  /**
  * nd6 table entries sent from master for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_entries_sent_m_2nd DataThunderSystemTableIntegrityStats#nd6_tbl_sync_entries_sent_m_2nd}
  */
  readonly nd6TblSyncEntriesSentM2Nd?: number;
  /**
  * nd6 table entries sent from master for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_entries_sent_m_3rd DataThunderSystemTableIntegrityStats#nd6_tbl_sync_entries_sent_m_3rd}
  */
  readonly nd6TblSyncEntriesSentM3Rd?: number;
  /**
  * nd6 table entries sent from master for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_entries_sent_m_4th DataThunderSystemTableIntegrityStats#nd6_tbl_sync_entries_sent_m_4th}
  */
  readonly nd6TblSyncEntriesSentM4Th?: number;
  /**
  * nd6 table sync start time stamp blade for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_entries_sent_m_5th DataThunderSystemTableIntegrityStats#nd6_tbl_sync_entries_sent_m_5th}
  */
  readonly nd6TblSyncEntriesSentM5Th?: number;
  /**
  * nd6 table sync count in master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_m DataThunderSystemTableIntegrityStats#nd6_tbl_sync_m}
  */
  readonly nd6TblSyncM?: number;
  /**
  * nd6 table sync start time stamp blade
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_start_ts_b_1st DataThunderSystemTableIntegrityStats#nd6_tbl_sync_start_ts_b_1st}
  */
  readonly nd6TblSyncStartTsB1St?: number;
  /**
  * nd6 table sync start time stamp blade for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_start_ts_b_2nd DataThunderSystemTableIntegrityStats#nd6_tbl_sync_start_ts_b_2nd}
  */
  readonly nd6TblSyncStartTsB2Nd?: number;
  /**
  * nd6 table sync start time stamp blade for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_start_ts_b_3rd DataThunderSystemTableIntegrityStats#nd6_tbl_sync_start_ts_b_3rd}
  */
  readonly nd6TblSyncStartTsB3Rd?: number;
  /**
  * nd6 table sync start time stamp blade for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_start_ts_b_4th DataThunderSystemTableIntegrityStats#nd6_tbl_sync_start_ts_b_4th}
  */
  readonly nd6TblSyncStartTsB4Th?: number;
  /**
  * nd6 table sync start time stamp blade for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_start_ts_b_5th DataThunderSystemTableIntegrityStats#nd6_tbl_sync_start_ts_b_5th}
  */
  readonly nd6TblSyncStartTsB5Th?: number;
  /**
  * nd6 table sync start time stamp master
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_start_ts_m_1st DataThunderSystemTableIntegrityStats#nd6_tbl_sync_start_ts_m_1st}
  */
  readonly nd6TblSyncStartTsM1St?: number;
  /**
  * nd6 table sync start time stamp master for T-1 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_start_ts_m_2nd DataThunderSystemTableIntegrityStats#nd6_tbl_sync_start_ts_m_2nd}
  */
  readonly nd6TblSyncStartTsM2Nd?: number;
  /**
  * nd6 table sync start time stamp master for T-2 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_start_ts_m_3rd DataThunderSystemTableIntegrityStats#nd6_tbl_sync_start_ts_m_3rd}
  */
  readonly nd6TblSyncStartTsM3Rd?: number;
  /**
  * nd6 table sync start time stamp master for T-3 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_start_ts_m_4th DataThunderSystemTableIntegrityStats#nd6_tbl_sync_start_ts_m_4th}
  */
  readonly nd6TblSyncStartTsM4Th?: number;
  /**
  * nd6 table sync start time stamp master for T-4 synchronization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#nd6_tbl_sync_start_ts_m_5th DataThunderSystemTableIntegrityStats#nd6_tbl_sync_start_ts_m_5th}
  */
  readonly nd6TblSyncStartTsM5Th?: number;
}

export function dataThunderSystemTableIntegrityStatsStatsToTerraform(struct?: DataThunderSystemTableIntegrityStatsStatsOutputReference | DataThunderSystemTableIntegrityStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arp_tbl_cksum_b: cdktf.numberToTerraform(struct!.arpTblCksumB),
    arp_tbl_cksum_cancel_m: cdktf.numberToTerraform(struct!.arpTblCksumCancelM),
    arp_tbl_cksum_m: cdktf.numberToTerraform(struct!.arpTblCksumM),
    arp_tbl_cksum_mismatch_b: cdktf.numberToTerraform(struct!.arpTblCksumMismatchB),
    arp_tbl_sync_b: cdktf.numberToTerraform(struct!.arpTblSyncB),
    arp_tbl_sync_end_ts_b_1st: cdktf.numberToTerraform(struct!.arpTblSyncEndTsB1St),
    arp_tbl_sync_end_ts_b_2nd: cdktf.numberToTerraform(struct!.arpTblSyncEndTsB2Nd),
    arp_tbl_sync_end_ts_b_3rd: cdktf.numberToTerraform(struct!.arpTblSyncEndTsB3Rd),
    arp_tbl_sync_end_ts_b_4th: cdktf.numberToTerraform(struct!.arpTblSyncEndTsB4Th),
    arp_tbl_sync_end_ts_b_5th: cdktf.numberToTerraform(struct!.arpTblSyncEndTsB5Th),
    arp_tbl_sync_end_ts_m_1st: cdktf.numberToTerraform(struct!.arpTblSyncEndTsM1St),
    arp_tbl_sync_end_ts_m_2nd: cdktf.numberToTerraform(struct!.arpTblSyncEndTsM2Nd),
    arp_tbl_sync_end_ts_m_3rd: cdktf.numberToTerraform(struct!.arpTblSyncEndTsM3Rd),
    arp_tbl_sync_end_ts_m_4th: cdktf.numberToTerraform(struct!.arpTblSyncEndTsM4Th),
    arp_tbl_sync_end_ts_m_5th: cdktf.numberToTerraform(struct!.arpTblSyncEndTsM5Th),
    arp_tbl_sync_entries_added_b_1st: cdktf.numberToTerraform(struct!.arpTblSyncEntriesAddedB1St),
    arp_tbl_sync_entries_added_b_2nd: cdktf.numberToTerraform(struct!.arpTblSyncEntriesAddedB2Nd),
    arp_tbl_sync_entries_added_b_3rd: cdktf.numberToTerraform(struct!.arpTblSyncEntriesAddedB3Rd),
    arp_tbl_sync_entries_added_b_4th: cdktf.numberToTerraform(struct!.arpTblSyncEntriesAddedB4Th),
    arp_tbl_sync_entries_added_b_5th: cdktf.numberToTerraform(struct!.arpTblSyncEntriesAddedB5Th),
    arp_tbl_sync_entries_rcvd_b_1st: cdktf.numberToTerraform(struct!.arpTblSyncEntriesRcvdB1St),
    arp_tbl_sync_entries_rcvd_b_2nd: cdktf.numberToTerraform(struct!.arpTblSyncEntriesRcvdB2Nd),
    arp_tbl_sync_entries_rcvd_b_3rd: cdktf.numberToTerraform(struct!.arpTblSyncEntriesRcvdB3Rd),
    arp_tbl_sync_entries_rcvd_b_4th: cdktf.numberToTerraform(struct!.arpTblSyncEntriesRcvdB4Th),
    arp_tbl_sync_entries_rcvd_b_5th: cdktf.numberToTerraform(struct!.arpTblSyncEntriesRcvdB5Th),
    arp_tbl_sync_entries_removed_b_1st: cdktf.numberToTerraform(struct!.arpTblSyncEntriesRemovedB1St),
    arp_tbl_sync_entries_removed_b_2nd: cdktf.numberToTerraform(struct!.arpTblSyncEntriesRemovedB2Nd),
    arp_tbl_sync_entries_removed_b_3rd: cdktf.numberToTerraform(struct!.arpTblSyncEntriesRemovedB3Rd),
    arp_tbl_sync_entries_removed_b_4th: cdktf.numberToTerraform(struct!.arpTblSyncEntriesRemovedB4Th),
    arp_tbl_sync_entries_removed_b_5th: cdktf.numberToTerraform(struct!.arpTblSyncEntriesRemovedB5Th),
    arp_tbl_sync_entries_sent_m_1st: cdktf.numberToTerraform(struct!.arpTblSyncEntriesSentM1St),
    arp_tbl_sync_entries_sent_m_2nd: cdktf.numberToTerraform(struct!.arpTblSyncEntriesSentM2Nd),
    arp_tbl_sync_entries_sent_m_3rd: cdktf.numberToTerraform(struct!.arpTblSyncEntriesSentM3Rd),
    arp_tbl_sync_entries_sent_m_4th: cdktf.numberToTerraform(struct!.arpTblSyncEntriesSentM4Th),
    arp_tbl_sync_entries_sent_m_5th: cdktf.numberToTerraform(struct!.arpTblSyncEntriesSentM5Th),
    arp_tbl_sync_m: cdktf.numberToTerraform(struct!.arpTblSyncM),
    arp_tbl_sync_start_ts_b_1st: cdktf.numberToTerraform(struct!.arpTblSyncStartTsB1St),
    arp_tbl_sync_start_ts_b_2nd: cdktf.numberToTerraform(struct!.arpTblSyncStartTsB2Nd),
    arp_tbl_sync_start_ts_b_3rd: cdktf.numberToTerraform(struct!.arpTblSyncStartTsB3Rd),
    arp_tbl_sync_start_ts_b_4th: cdktf.numberToTerraform(struct!.arpTblSyncStartTsB4Th),
    arp_tbl_sync_start_ts_b_5th: cdktf.numberToTerraform(struct!.arpTblSyncStartTsB5Th),
    arp_tbl_sync_start_ts_m_1st: cdktf.numberToTerraform(struct!.arpTblSyncStartTsM1St),
    arp_tbl_sync_start_ts_m_2nd: cdktf.numberToTerraform(struct!.arpTblSyncStartTsM2Nd),
    arp_tbl_sync_start_ts_m_3rd: cdktf.numberToTerraform(struct!.arpTblSyncStartTsM3Rd),
    arp_tbl_sync_start_ts_m_4th: cdktf.numberToTerraform(struct!.arpTblSyncStartTsM4Th),
    arp_tbl_sync_start_ts_m_5th: cdktf.numberToTerraform(struct!.arpTblSyncStartTsM5Th),
    ipv4_fib_tbl_cksum_b: cdktf.numberToTerraform(struct!.ipv4FibTblCksumB),
    ipv4_fib_tbl_cksum_cancel_m: cdktf.numberToTerraform(struct!.ipv4FibTblCksumCancelM),
    ipv4_fib_tbl_cksum_m: cdktf.numberToTerraform(struct!.ipv4FibTblCksumM),
    ipv4_fib_tbl_cksum_mismatch_b: cdktf.numberToTerraform(struct!.ipv4FibTblCksumMismatchB),
    ipv4_fib_tbl_sync_b: cdktf.numberToTerraform(struct!.ipv4FibTblSyncB),
    ipv4_fib_tbl_sync_end_ts_b_1st: cdktf.numberToTerraform(struct!.ipv4FibTblSyncEndTsB1St),
    ipv4_fib_tbl_sync_end_ts_b_2nd: cdktf.numberToTerraform(struct!.ipv4FibTblSyncEndTsB2Nd),
    ipv4_fib_tbl_sync_end_ts_b_3rd: cdktf.numberToTerraform(struct!.ipv4FibTblSyncEndTsB3Rd),
    ipv4_fib_tbl_sync_end_ts_b_4th: cdktf.numberToTerraform(struct!.ipv4FibTblSyncEndTsB4Th),
    ipv4_fib_tbl_sync_end_ts_b_5th: cdktf.numberToTerraform(struct!.ipv4FibTblSyncEndTsB5Th),
    ipv4_fib_tbl_sync_end_ts_m_1st: cdktf.numberToTerraform(struct!.ipv4FibTblSyncEndTsM1St),
    ipv4_fib_tbl_sync_end_ts_m_2nd: cdktf.numberToTerraform(struct!.ipv4FibTblSyncEndTsM2Nd),
    ipv4_fib_tbl_sync_end_ts_m_3rd: cdktf.numberToTerraform(struct!.ipv4FibTblSyncEndTsM3Rd),
    ipv4_fib_tbl_sync_end_ts_m_4th: cdktf.numberToTerraform(struct!.ipv4FibTblSyncEndTsM4Th),
    ipv4_fib_tbl_sync_end_ts_m_5th: cdktf.numberToTerraform(struct!.ipv4FibTblSyncEndTsM5Th),
    ipv4_fib_tbl_sync_entries_added_b_1st: cdktf.numberToTerraform(struct!.ipv4FibTblSyncEntriesAddedB1St),
    ipv4_fib_tbl_sync_entries_added_b_2nd: cdktf.numberToTerraform(struct!.ipv4FibTblSyncEntriesAddedB2Nd),
    ipv4_fib_tbl_sync_entries_added_b_3rd: cdktf.numberToTerraform(struct!.ipv4FibTblSyncEntriesAddedB3Rd),
    ipv4_fib_tbl_sync_entries_added_b_4th: cdktf.numberToTerraform(struct!.ipv4FibTblSyncEntriesAddedB4Th),
    ipv4_fib_tbl_sync_entries_added_b_5th: cdktf.numberToTerraform(struct!.ipv4FibTblSyncEntriesAddedB5Th),
    ipv4_fib_tbl_sync_entries_rcvd_b_1st: cdktf.numberToTerraform(struct!.ipv4FibTblSyncEntriesRcvdB1St),
    ipv4_fib_tbl_sync_entries_rcvd_b_2nd: cdktf.numberToTerraform(struct!.ipv4FibTblSyncEntriesRcvdB2Nd),
    ipv4_fib_tbl_sync_entries_rcvd_b_3rd: cdktf.numberToTerraform(struct!.ipv4FibTblSyncEntriesRcvdB3Rd),
    ipv4_fib_tbl_sync_entries_rcvd_b_4th: cdktf.numberToTerraform(struct!.ipv4FibTblSyncEntriesRcvdB4Th),
    ipv4_fib_tbl_sync_entries_rcvd_b_5th: cdktf.numberToTerraform(struct!.ipv4FibTblSyncEntriesRcvdB5Th),
    ipv4_fib_tbl_sync_entries_removed_b_1st: cdktf.numberToTerraform(struct!.ipv4FibTblSyncEntriesRemovedB1St),
    ipv4_fib_tbl_sync_entries_removed_b_2nd: cdktf.numberToTerraform(struct!.ipv4FibTblSyncEntriesRemovedB2Nd),
    ipv4_fib_tbl_sync_entries_removed_b_3rd: cdktf.numberToTerraform(struct!.ipv4FibTblSyncEntriesRemovedB3Rd),
    ipv4_fib_tbl_sync_entries_removed_b_4th: cdktf.numberToTerraform(struct!.ipv4FibTblSyncEntriesRemovedB4Th),
    ipv4_fib_tbl_sync_entries_removed_b_5th: cdktf.numberToTerraform(struct!.ipv4FibTblSyncEntriesRemovedB5Th),
    ipv4_fib_tbl_sync_entries_sent_m_1st: cdktf.numberToTerraform(struct!.ipv4FibTblSyncEntriesSentM1St),
    ipv4_fib_tbl_sync_entries_sent_m_2nd: cdktf.numberToTerraform(struct!.ipv4FibTblSyncEntriesSentM2Nd),
    ipv4_fib_tbl_sync_entries_sent_m_3rd: cdktf.numberToTerraform(struct!.ipv4FibTblSyncEntriesSentM3Rd),
    ipv4_fib_tbl_sync_entries_sent_m_4th: cdktf.numberToTerraform(struct!.ipv4FibTblSyncEntriesSentM4Th),
    ipv4_fib_tbl_sync_entries_sent_m_5th: cdktf.numberToTerraform(struct!.ipv4FibTblSyncEntriesSentM5Th),
    ipv4_fib_tbl_sync_m: cdktf.numberToTerraform(struct!.ipv4FibTblSyncM),
    ipv4_fib_tbl_sync_start_ts_b_1st: cdktf.numberToTerraform(struct!.ipv4FibTblSyncStartTsB1St),
    ipv4_fib_tbl_sync_start_ts_b_2nd: cdktf.numberToTerraform(struct!.ipv4FibTblSyncStartTsB2Nd),
    ipv4_fib_tbl_sync_start_ts_b_3rd: cdktf.numberToTerraform(struct!.ipv4FibTblSyncStartTsB3Rd),
    ipv4_fib_tbl_sync_start_ts_b_4th: cdktf.numberToTerraform(struct!.ipv4FibTblSyncStartTsB4Th),
    ipv4_fib_tbl_sync_start_ts_b_5th: cdktf.numberToTerraform(struct!.ipv4FibTblSyncStartTsB5Th),
    ipv4_fib_tbl_sync_start_ts_m_1st: cdktf.numberToTerraform(struct!.ipv4FibTblSyncStartTsM1St),
    ipv4_fib_tbl_sync_start_ts_m_2nd: cdktf.numberToTerraform(struct!.ipv4FibTblSyncStartTsM2Nd),
    ipv4_fib_tbl_sync_start_ts_m_3rd: cdktf.numberToTerraform(struct!.ipv4FibTblSyncStartTsM3Rd),
    ipv4_fib_tbl_sync_start_ts_m_4th: cdktf.numberToTerraform(struct!.ipv4FibTblSyncStartTsM4Th),
    ipv4_fib_tbl_sync_start_ts_m_5th: cdktf.numberToTerraform(struct!.ipv4FibTblSyncStartTsM5Th),
    ipv6_fib_tbl_cksum_b: cdktf.numberToTerraform(struct!.ipv6FibTblCksumB),
    ipv6_fib_tbl_cksum_cancel_m: cdktf.numberToTerraform(struct!.ipv6FibTblCksumCancelM),
    ipv6_fib_tbl_cksum_m: cdktf.numberToTerraform(struct!.ipv6FibTblCksumM),
    ipv6_fib_tbl_cksum_mismatch_b: cdktf.numberToTerraform(struct!.ipv6FibTblCksumMismatchB),
    ipv6_fib_tbl_sync_b: cdktf.numberToTerraform(struct!.ipv6FibTblSyncB),
    ipv6_fib_tbl_sync_end_ts_b_1st: cdktf.numberToTerraform(struct!.ipv6FibTblSyncEndTsB1St),
    ipv6_fib_tbl_sync_end_ts_b_2nd: cdktf.numberToTerraform(struct!.ipv6FibTblSyncEndTsB2Nd),
    ipv6_fib_tbl_sync_end_ts_b_3rd: cdktf.numberToTerraform(struct!.ipv6FibTblSyncEndTsB3Rd),
    ipv6_fib_tbl_sync_end_ts_b_4th: cdktf.numberToTerraform(struct!.ipv6FibTblSyncEndTsB4Th),
    ipv6_fib_tbl_sync_end_ts_b_5th: cdktf.numberToTerraform(struct!.ipv6FibTblSyncEndTsB5Th),
    ipv6_fib_tbl_sync_end_ts_m_1st: cdktf.numberToTerraform(struct!.ipv6FibTblSyncEndTsM1St),
    ipv6_fib_tbl_sync_end_ts_m_2nd: cdktf.numberToTerraform(struct!.ipv6FibTblSyncEndTsM2Nd),
    ipv6_fib_tbl_sync_end_ts_m_3rd: cdktf.numberToTerraform(struct!.ipv6FibTblSyncEndTsM3Rd),
    ipv6_fib_tbl_sync_end_ts_m_4th: cdktf.numberToTerraform(struct!.ipv6FibTblSyncEndTsM4Th),
    ipv6_fib_tbl_sync_end_ts_m_5th: cdktf.numberToTerraform(struct!.ipv6FibTblSyncEndTsM5Th),
    ipv6_fib_tbl_sync_entries_added_b_1st: cdktf.numberToTerraform(struct!.ipv6FibTblSyncEntriesAddedB1St),
    ipv6_fib_tbl_sync_entries_added_b_2nd: cdktf.numberToTerraform(struct!.ipv6FibTblSyncEntriesAddedB2Nd),
    ipv6_fib_tbl_sync_entries_added_b_3rd: cdktf.numberToTerraform(struct!.ipv6FibTblSyncEntriesAddedB3Rd),
    ipv6_fib_tbl_sync_entries_added_b_4th: cdktf.numberToTerraform(struct!.ipv6FibTblSyncEntriesAddedB4Th),
    ipv6_fib_tbl_sync_entries_added_b_5th: cdktf.numberToTerraform(struct!.ipv6FibTblSyncEntriesAddedB5Th),
    ipv6_fib_tbl_sync_entries_rcvd_b_1st: cdktf.numberToTerraform(struct!.ipv6FibTblSyncEntriesRcvdB1St),
    ipv6_fib_tbl_sync_entries_rcvd_b_2nd: cdktf.numberToTerraform(struct!.ipv6FibTblSyncEntriesRcvdB2Nd),
    ipv6_fib_tbl_sync_entries_rcvd_b_3rd: cdktf.numberToTerraform(struct!.ipv6FibTblSyncEntriesRcvdB3Rd),
    ipv6_fib_tbl_sync_entries_rcvd_b_4th: cdktf.numberToTerraform(struct!.ipv6FibTblSyncEntriesRcvdB4Th),
    ipv6_fib_tbl_sync_entries_rcvd_b_5th: cdktf.numberToTerraform(struct!.ipv6FibTblSyncEntriesRcvdB5Th),
    ipv6_fib_tbl_sync_entries_removed_b_1st: cdktf.numberToTerraform(struct!.ipv6FibTblSyncEntriesRemovedB1St),
    ipv6_fib_tbl_sync_entries_removed_b_2nd: cdktf.numberToTerraform(struct!.ipv6FibTblSyncEntriesRemovedB2Nd),
    ipv6_fib_tbl_sync_entries_removed_b_3rd: cdktf.numberToTerraform(struct!.ipv6FibTblSyncEntriesRemovedB3Rd),
    ipv6_fib_tbl_sync_entries_removed_b_4th: cdktf.numberToTerraform(struct!.ipv6FibTblSyncEntriesRemovedB4Th),
    ipv6_fib_tbl_sync_entries_removed_b_5th: cdktf.numberToTerraform(struct!.ipv6FibTblSyncEntriesRemovedB5Th),
    ipv6_fib_tbl_sync_entries_sent_m_1st: cdktf.numberToTerraform(struct!.ipv6FibTblSyncEntriesSentM1St),
    ipv6_fib_tbl_sync_entries_sent_m_2nd: cdktf.numberToTerraform(struct!.ipv6FibTblSyncEntriesSentM2Nd),
    ipv6_fib_tbl_sync_entries_sent_m_3rd: cdktf.numberToTerraform(struct!.ipv6FibTblSyncEntriesSentM3Rd),
    ipv6_fib_tbl_sync_entries_sent_m_4th: cdktf.numberToTerraform(struct!.ipv6FibTblSyncEntriesSentM4Th),
    ipv6_fib_tbl_sync_entries_sent_m_5th: cdktf.numberToTerraform(struct!.ipv6FibTblSyncEntriesSentM5Th),
    ipv6_fib_tbl_sync_m: cdktf.numberToTerraform(struct!.ipv6FibTblSyncM),
    ipv6_fib_tbl_sync_start_ts_b_1st: cdktf.numberToTerraform(struct!.ipv6FibTblSyncStartTsB1St),
    ipv6_fib_tbl_sync_start_ts_b_2nd: cdktf.numberToTerraform(struct!.ipv6FibTblSyncStartTsB2Nd),
    ipv6_fib_tbl_sync_start_ts_b_3rd: cdktf.numberToTerraform(struct!.ipv6FibTblSyncStartTsB3Rd),
    ipv6_fib_tbl_sync_start_ts_b_4th: cdktf.numberToTerraform(struct!.ipv6FibTblSyncStartTsB4Th),
    ipv6_fib_tbl_sync_start_ts_b_5th: cdktf.numberToTerraform(struct!.ipv6FibTblSyncStartTsB5Th),
    ipv6_fib_tbl_sync_start_ts_m_1st: cdktf.numberToTerraform(struct!.ipv6FibTblSyncStartTsM1St),
    ipv6_fib_tbl_sync_start_ts_m_2nd: cdktf.numberToTerraform(struct!.ipv6FibTblSyncStartTsM2Nd),
    ipv6_fib_tbl_sync_start_ts_m_3rd: cdktf.numberToTerraform(struct!.ipv6FibTblSyncStartTsM3Rd),
    ipv6_fib_tbl_sync_start_ts_m_4th: cdktf.numberToTerraform(struct!.ipv6FibTblSyncStartTsM4Th),
    ipv6_fib_tbl_sync_start_ts_m_5th: cdktf.numberToTerraform(struct!.ipv6FibTblSyncStartTsM5Th),
    mac_tbl_cksum_b: cdktf.numberToTerraform(struct!.macTblCksumB),
    mac_tbl_cksum_cancel_m: cdktf.numberToTerraform(struct!.macTblCksumCancelM),
    mac_tbl_cksum_m: cdktf.numberToTerraform(struct!.macTblCksumM),
    mac_tbl_cksum_mismatch_b: cdktf.numberToTerraform(struct!.macTblCksumMismatchB),
    mac_tbl_sync_b: cdktf.numberToTerraform(struct!.macTblSyncB),
    mac_tbl_sync_end_ts_b_1st: cdktf.numberToTerraform(struct!.macTblSyncEndTsB1St),
    mac_tbl_sync_end_ts_b_2nd: cdktf.numberToTerraform(struct!.macTblSyncEndTsB2Nd),
    mac_tbl_sync_end_ts_b_3rd: cdktf.numberToTerraform(struct!.macTblSyncEndTsB3Rd),
    mac_tbl_sync_end_ts_b_4th: cdktf.numberToTerraform(struct!.macTblSyncEndTsB4Th),
    mac_tbl_sync_end_ts_b_5th: cdktf.numberToTerraform(struct!.macTblSyncEndTsB5Th),
    mac_tbl_sync_end_ts_m_1st: cdktf.numberToTerraform(struct!.macTblSyncEndTsM1St),
    mac_tbl_sync_end_ts_m_2nd: cdktf.numberToTerraform(struct!.macTblSyncEndTsM2Nd),
    mac_tbl_sync_end_ts_m_3rd: cdktf.numberToTerraform(struct!.macTblSyncEndTsM3Rd),
    mac_tbl_sync_end_ts_m_4th: cdktf.numberToTerraform(struct!.macTblSyncEndTsM4Th),
    mac_tbl_sync_end_ts_m_5th: cdktf.numberToTerraform(struct!.macTblSyncEndTsM5Th),
    mac_tbl_sync_entries_added_b_1st: cdktf.numberToTerraform(struct!.macTblSyncEntriesAddedB1St),
    mac_tbl_sync_entries_added_b_2nd: cdktf.numberToTerraform(struct!.macTblSyncEntriesAddedB2Nd),
    mac_tbl_sync_entries_added_b_3rd: cdktf.numberToTerraform(struct!.macTblSyncEntriesAddedB3Rd),
    mac_tbl_sync_entries_added_b_4th: cdktf.numberToTerraform(struct!.macTblSyncEntriesAddedB4Th),
    mac_tbl_sync_entries_added_b_5th: cdktf.numberToTerraform(struct!.macTblSyncEntriesAddedB5Th),
    mac_tbl_sync_entries_rcvd_b_1st: cdktf.numberToTerraform(struct!.macTblSyncEntriesRcvdB1St),
    mac_tbl_sync_entries_rcvd_b_2nd: cdktf.numberToTerraform(struct!.macTblSyncEntriesRcvdB2Nd),
    mac_tbl_sync_entries_rcvd_b_3rd: cdktf.numberToTerraform(struct!.macTblSyncEntriesRcvdB3Rd),
    mac_tbl_sync_entries_rcvd_b_4th: cdktf.numberToTerraform(struct!.macTblSyncEntriesRcvdB4Th),
    mac_tbl_sync_entries_rcvd_b_5th: cdktf.numberToTerraform(struct!.macTblSyncEntriesRcvdB5Th),
    mac_tbl_sync_entries_removed_b_1st: cdktf.numberToTerraform(struct!.macTblSyncEntriesRemovedB1St),
    mac_tbl_sync_entries_removed_b_2nd: cdktf.numberToTerraform(struct!.macTblSyncEntriesRemovedB2Nd),
    mac_tbl_sync_entries_removed_b_3rd: cdktf.numberToTerraform(struct!.macTblSyncEntriesRemovedB3Rd),
    mac_tbl_sync_entries_removed_b_4th: cdktf.numberToTerraform(struct!.macTblSyncEntriesRemovedB4Th),
    mac_tbl_sync_entries_removed_b_5th: cdktf.numberToTerraform(struct!.macTblSyncEntriesRemovedB5Th),
    mac_tbl_sync_entries_sent_m_1st: cdktf.numberToTerraform(struct!.macTblSyncEntriesSentM1St),
    mac_tbl_sync_entries_sent_m_2nd: cdktf.numberToTerraform(struct!.macTblSyncEntriesSentM2Nd),
    mac_tbl_sync_entries_sent_m_3rd: cdktf.numberToTerraform(struct!.macTblSyncEntriesSentM3Rd),
    mac_tbl_sync_entries_sent_m_4th: cdktf.numberToTerraform(struct!.macTblSyncEntriesSentM4Th),
    mac_tbl_sync_entries_sent_m_5th: cdktf.numberToTerraform(struct!.macTblSyncEntriesSentM5Th),
    mac_tbl_sync_m: cdktf.numberToTerraform(struct!.macTblSyncM),
    mac_tbl_sync_start_ts_b_1st: cdktf.numberToTerraform(struct!.macTblSyncStartTsB1St),
    mac_tbl_sync_start_ts_b_2nd: cdktf.numberToTerraform(struct!.macTblSyncStartTsB2Nd),
    mac_tbl_sync_start_ts_b_3rd: cdktf.numberToTerraform(struct!.macTblSyncStartTsB3Rd),
    mac_tbl_sync_start_ts_b_4th: cdktf.numberToTerraform(struct!.macTblSyncStartTsB4Th),
    mac_tbl_sync_start_ts_b_5th: cdktf.numberToTerraform(struct!.macTblSyncStartTsB5Th),
    mac_tbl_sync_start_ts_m_1st: cdktf.numberToTerraform(struct!.macTblSyncStartTsM1St),
    mac_tbl_sync_start_ts_m_2nd: cdktf.numberToTerraform(struct!.macTblSyncStartTsM2Nd),
    mac_tbl_sync_start_ts_m_3rd: cdktf.numberToTerraform(struct!.macTblSyncStartTsM3Rd),
    mac_tbl_sync_start_ts_m_4th: cdktf.numberToTerraform(struct!.macTblSyncStartTsM4Th),
    mac_tbl_sync_start_ts_m_5th: cdktf.numberToTerraform(struct!.macTblSyncStartTsM5Th),
    nd6_tbl_cksum_b: cdktf.numberToTerraform(struct!.nd6TblCksumB),
    nd6_tbl_cksum_cancel_m: cdktf.numberToTerraform(struct!.nd6TblCksumCancelM),
    nd6_tbl_cksum_m: cdktf.numberToTerraform(struct!.nd6TblCksumM),
    nd6_tbl_cksum_mismatch_b: cdktf.numberToTerraform(struct!.nd6TblCksumMismatchB),
    nd6_tbl_sync_b: cdktf.numberToTerraform(struct!.nd6TblSyncB),
    nd6_tbl_sync_end_ts_b_1st: cdktf.numberToTerraform(struct!.nd6TblSyncEndTsB1St),
    nd6_tbl_sync_end_ts_b_2nd: cdktf.numberToTerraform(struct!.nd6TblSyncEndTsB2Nd),
    nd6_tbl_sync_end_ts_b_3rd: cdktf.numberToTerraform(struct!.nd6TblSyncEndTsB3Rd),
    nd6_tbl_sync_end_ts_b_4th: cdktf.numberToTerraform(struct!.nd6TblSyncEndTsB4Th),
    nd6_tbl_sync_end_ts_b_5th: cdktf.numberToTerraform(struct!.nd6TblSyncEndTsB5Th),
    nd6_tbl_sync_end_ts_m_1st: cdktf.numberToTerraform(struct!.nd6TblSyncEndTsM1St),
    nd6_tbl_sync_end_ts_m_2nd: cdktf.numberToTerraform(struct!.nd6TblSyncEndTsM2Nd),
    nd6_tbl_sync_end_ts_m_3rd: cdktf.numberToTerraform(struct!.nd6TblSyncEndTsM3Rd),
    nd6_tbl_sync_end_ts_m_4th: cdktf.numberToTerraform(struct!.nd6TblSyncEndTsM4Th),
    nd6_tbl_sync_end_ts_m_5th: cdktf.numberToTerraform(struct!.nd6TblSyncEndTsM5Th),
    nd6_tbl_sync_entries_added_b_1st: cdktf.numberToTerraform(struct!.nd6TblSyncEntriesAddedB1St),
    nd6_tbl_sync_entries_added_b_2nd: cdktf.numberToTerraform(struct!.nd6TblSyncEntriesAddedB2Nd),
    nd6_tbl_sync_entries_added_b_3rd: cdktf.numberToTerraform(struct!.nd6TblSyncEntriesAddedB3Rd),
    nd6_tbl_sync_entries_added_b_4th: cdktf.numberToTerraform(struct!.nd6TblSyncEntriesAddedB4Th),
    nd6_tbl_sync_entries_added_b_5th: cdktf.numberToTerraform(struct!.nd6TblSyncEntriesAddedB5Th),
    nd6_tbl_sync_entries_rcvd_b_1st: cdktf.numberToTerraform(struct!.nd6TblSyncEntriesRcvdB1St),
    nd6_tbl_sync_entries_rcvd_b_2nd: cdktf.numberToTerraform(struct!.nd6TblSyncEntriesRcvdB2Nd),
    nd6_tbl_sync_entries_rcvd_b_3rd: cdktf.numberToTerraform(struct!.nd6TblSyncEntriesRcvdB3Rd),
    nd6_tbl_sync_entries_rcvd_b_4th: cdktf.numberToTerraform(struct!.nd6TblSyncEntriesRcvdB4Th),
    nd6_tbl_sync_entries_rcvd_b_5th: cdktf.numberToTerraform(struct!.nd6TblSyncEntriesRcvdB5Th),
    nd6_tbl_sync_entries_removed_b_1st: cdktf.numberToTerraform(struct!.nd6TblSyncEntriesRemovedB1St),
    nd6_tbl_sync_entries_removed_b_2nd: cdktf.numberToTerraform(struct!.nd6TblSyncEntriesRemovedB2Nd),
    nd6_tbl_sync_entries_removed_b_3rd: cdktf.numberToTerraform(struct!.nd6TblSyncEntriesRemovedB3Rd),
    nd6_tbl_sync_entries_removed_b_4th: cdktf.numberToTerraform(struct!.nd6TblSyncEntriesRemovedB4Th),
    nd6_tbl_sync_entries_removed_b_5th: cdktf.numberToTerraform(struct!.nd6TblSyncEntriesRemovedB5Th),
    nd6_tbl_sync_entries_sent_m_1st: cdktf.numberToTerraform(struct!.nd6TblSyncEntriesSentM1St),
    nd6_tbl_sync_entries_sent_m_2nd: cdktf.numberToTerraform(struct!.nd6TblSyncEntriesSentM2Nd),
    nd6_tbl_sync_entries_sent_m_3rd: cdktf.numberToTerraform(struct!.nd6TblSyncEntriesSentM3Rd),
    nd6_tbl_sync_entries_sent_m_4th: cdktf.numberToTerraform(struct!.nd6TblSyncEntriesSentM4Th),
    nd6_tbl_sync_entries_sent_m_5th: cdktf.numberToTerraform(struct!.nd6TblSyncEntriesSentM5Th),
    nd6_tbl_sync_m: cdktf.numberToTerraform(struct!.nd6TblSyncM),
    nd6_tbl_sync_start_ts_b_1st: cdktf.numberToTerraform(struct!.nd6TblSyncStartTsB1St),
    nd6_tbl_sync_start_ts_b_2nd: cdktf.numberToTerraform(struct!.nd6TblSyncStartTsB2Nd),
    nd6_tbl_sync_start_ts_b_3rd: cdktf.numberToTerraform(struct!.nd6TblSyncStartTsB3Rd),
    nd6_tbl_sync_start_ts_b_4th: cdktf.numberToTerraform(struct!.nd6TblSyncStartTsB4Th),
    nd6_tbl_sync_start_ts_b_5th: cdktf.numberToTerraform(struct!.nd6TblSyncStartTsB5Th),
    nd6_tbl_sync_start_ts_m_1st: cdktf.numberToTerraform(struct!.nd6TblSyncStartTsM1St),
    nd6_tbl_sync_start_ts_m_2nd: cdktf.numberToTerraform(struct!.nd6TblSyncStartTsM2Nd),
    nd6_tbl_sync_start_ts_m_3rd: cdktf.numberToTerraform(struct!.nd6TblSyncStartTsM3Rd),
    nd6_tbl_sync_start_ts_m_4th: cdktf.numberToTerraform(struct!.nd6TblSyncStartTsM4Th),
    nd6_tbl_sync_start_ts_m_5th: cdktf.numberToTerraform(struct!.nd6TblSyncStartTsM5Th),
  }
}


export function dataThunderSystemTableIntegrityStatsStatsToHclTerraform(struct?: DataThunderSystemTableIntegrityStatsStatsOutputReference | DataThunderSystemTableIntegrityStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arp_tbl_cksum_b: {
      value: cdktf.numberToHclTerraform(struct!.arpTblCksumB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_cksum_cancel_m: {
      value: cdktf.numberToHclTerraform(struct!.arpTblCksumCancelM),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_cksum_m: {
      value: cdktf.numberToHclTerraform(struct!.arpTblCksumM),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_cksum_mismatch_b: {
      value: cdktf.numberToHclTerraform(struct!.arpTblCksumMismatchB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_b: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_end_ts_b_1st: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncEndTsB1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_end_ts_b_2nd: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncEndTsB2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_end_ts_b_3rd: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncEndTsB3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_end_ts_b_4th: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncEndTsB4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_end_ts_b_5th: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncEndTsB5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_end_ts_m_1st: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncEndTsM1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_end_ts_m_2nd: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncEndTsM2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_end_ts_m_3rd: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncEndTsM3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_end_ts_m_4th: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncEndTsM4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_end_ts_m_5th: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncEndTsM5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_entries_added_b_1st: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncEntriesAddedB1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_entries_added_b_2nd: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncEntriesAddedB2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_entries_added_b_3rd: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncEntriesAddedB3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_entries_added_b_4th: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncEntriesAddedB4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_entries_added_b_5th: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncEntriesAddedB5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_entries_rcvd_b_1st: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncEntriesRcvdB1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_entries_rcvd_b_2nd: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncEntriesRcvdB2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_entries_rcvd_b_3rd: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncEntriesRcvdB3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_entries_rcvd_b_4th: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncEntriesRcvdB4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_entries_rcvd_b_5th: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncEntriesRcvdB5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_entries_removed_b_1st: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncEntriesRemovedB1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_entries_removed_b_2nd: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncEntriesRemovedB2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_entries_removed_b_3rd: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncEntriesRemovedB3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_entries_removed_b_4th: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncEntriesRemovedB4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_entries_removed_b_5th: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncEntriesRemovedB5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_entries_sent_m_1st: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncEntriesSentM1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_entries_sent_m_2nd: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncEntriesSentM2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_entries_sent_m_3rd: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncEntriesSentM3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_entries_sent_m_4th: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncEntriesSentM4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_entries_sent_m_5th: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncEntriesSentM5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_m: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncM),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_start_ts_b_1st: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncStartTsB1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_start_ts_b_2nd: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncStartTsB2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_start_ts_b_3rd: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncStartTsB3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_start_ts_b_4th: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncStartTsB4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_start_ts_b_5th: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncStartTsB5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_start_ts_m_1st: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncStartTsM1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_start_ts_m_2nd: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncStartTsM2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_start_ts_m_3rd: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncStartTsM3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_start_ts_m_4th: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncStartTsM4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    arp_tbl_sync_start_ts_m_5th: {
      value: cdktf.numberToHclTerraform(struct!.arpTblSyncStartTsM5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_cksum_b: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblCksumB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_cksum_cancel_m: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblCksumCancelM),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_cksum_m: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblCksumM),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_cksum_mismatch_b: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblCksumMismatchB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_b: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_end_ts_b_1st: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncEndTsB1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_end_ts_b_2nd: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncEndTsB2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_end_ts_b_3rd: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncEndTsB3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_end_ts_b_4th: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncEndTsB4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_end_ts_b_5th: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncEndTsB5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_end_ts_m_1st: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncEndTsM1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_end_ts_m_2nd: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncEndTsM2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_end_ts_m_3rd: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncEndTsM3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_end_ts_m_4th: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncEndTsM4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_end_ts_m_5th: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncEndTsM5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_entries_added_b_1st: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncEntriesAddedB1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_entries_added_b_2nd: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncEntriesAddedB2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_entries_added_b_3rd: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncEntriesAddedB3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_entries_added_b_4th: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncEntriesAddedB4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_entries_added_b_5th: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncEntriesAddedB5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_entries_rcvd_b_1st: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncEntriesRcvdB1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_entries_rcvd_b_2nd: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncEntriesRcvdB2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_entries_rcvd_b_3rd: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncEntriesRcvdB3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_entries_rcvd_b_4th: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncEntriesRcvdB4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_entries_rcvd_b_5th: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncEntriesRcvdB5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_entries_removed_b_1st: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncEntriesRemovedB1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_entries_removed_b_2nd: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncEntriesRemovedB2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_entries_removed_b_3rd: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncEntriesRemovedB3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_entries_removed_b_4th: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncEntriesRemovedB4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_entries_removed_b_5th: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncEntriesRemovedB5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_entries_sent_m_1st: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncEntriesSentM1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_entries_sent_m_2nd: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncEntriesSentM2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_entries_sent_m_3rd: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncEntriesSentM3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_entries_sent_m_4th: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncEntriesSentM4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_entries_sent_m_5th: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncEntriesSentM5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_m: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncM),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_start_ts_b_1st: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncStartTsB1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_start_ts_b_2nd: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncStartTsB2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_start_ts_b_3rd: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncStartTsB3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_start_ts_b_4th: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncStartTsB4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_start_ts_b_5th: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncStartTsB5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_start_ts_m_1st: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncStartTsM1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_start_ts_m_2nd: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncStartTsM2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_start_ts_m_3rd: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncStartTsM3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_start_ts_m_4th: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncStartTsM4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_fib_tbl_sync_start_ts_m_5th: {
      value: cdktf.numberToHclTerraform(struct!.ipv4FibTblSyncStartTsM5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_cksum_b: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblCksumB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_cksum_cancel_m: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblCksumCancelM),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_cksum_m: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblCksumM),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_cksum_mismatch_b: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblCksumMismatchB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_b: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_end_ts_b_1st: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncEndTsB1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_end_ts_b_2nd: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncEndTsB2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_end_ts_b_3rd: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncEndTsB3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_end_ts_b_4th: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncEndTsB4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_end_ts_b_5th: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncEndTsB5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_end_ts_m_1st: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncEndTsM1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_end_ts_m_2nd: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncEndTsM2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_end_ts_m_3rd: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncEndTsM3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_end_ts_m_4th: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncEndTsM4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_end_ts_m_5th: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncEndTsM5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_entries_added_b_1st: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncEntriesAddedB1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_entries_added_b_2nd: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncEntriesAddedB2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_entries_added_b_3rd: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncEntriesAddedB3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_entries_added_b_4th: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncEntriesAddedB4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_entries_added_b_5th: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncEntriesAddedB5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_entries_rcvd_b_1st: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncEntriesRcvdB1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_entries_rcvd_b_2nd: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncEntriesRcvdB2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_entries_rcvd_b_3rd: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncEntriesRcvdB3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_entries_rcvd_b_4th: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncEntriesRcvdB4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_entries_rcvd_b_5th: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncEntriesRcvdB5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_entries_removed_b_1st: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncEntriesRemovedB1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_entries_removed_b_2nd: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncEntriesRemovedB2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_entries_removed_b_3rd: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncEntriesRemovedB3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_entries_removed_b_4th: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncEntriesRemovedB4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_entries_removed_b_5th: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncEntriesRemovedB5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_entries_sent_m_1st: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncEntriesSentM1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_entries_sent_m_2nd: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncEntriesSentM2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_entries_sent_m_3rd: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncEntriesSentM3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_entries_sent_m_4th: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncEntriesSentM4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_entries_sent_m_5th: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncEntriesSentM5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_m: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncM),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_start_ts_b_1st: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncStartTsB1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_start_ts_b_2nd: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncStartTsB2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_start_ts_b_3rd: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncStartTsB3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_start_ts_b_4th: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncStartTsB4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_start_ts_b_5th: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncStartTsB5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_start_ts_m_1st: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncStartTsM1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_start_ts_m_2nd: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncStartTsM2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_start_ts_m_3rd: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncStartTsM3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_start_ts_m_4th: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncStartTsM4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_fib_tbl_sync_start_ts_m_5th: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FibTblSyncStartTsM5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_cksum_b: {
      value: cdktf.numberToHclTerraform(struct!.macTblCksumB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_cksum_cancel_m: {
      value: cdktf.numberToHclTerraform(struct!.macTblCksumCancelM),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_cksum_m: {
      value: cdktf.numberToHclTerraform(struct!.macTblCksumM),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_cksum_mismatch_b: {
      value: cdktf.numberToHclTerraform(struct!.macTblCksumMismatchB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_b: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_end_ts_b_1st: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncEndTsB1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_end_ts_b_2nd: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncEndTsB2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_end_ts_b_3rd: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncEndTsB3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_end_ts_b_4th: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncEndTsB4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_end_ts_b_5th: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncEndTsB5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_end_ts_m_1st: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncEndTsM1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_end_ts_m_2nd: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncEndTsM2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_end_ts_m_3rd: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncEndTsM3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_end_ts_m_4th: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncEndTsM4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_end_ts_m_5th: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncEndTsM5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_entries_added_b_1st: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncEntriesAddedB1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_entries_added_b_2nd: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncEntriesAddedB2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_entries_added_b_3rd: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncEntriesAddedB3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_entries_added_b_4th: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncEntriesAddedB4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_entries_added_b_5th: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncEntriesAddedB5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_entries_rcvd_b_1st: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncEntriesRcvdB1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_entries_rcvd_b_2nd: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncEntriesRcvdB2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_entries_rcvd_b_3rd: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncEntriesRcvdB3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_entries_rcvd_b_4th: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncEntriesRcvdB4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_entries_rcvd_b_5th: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncEntriesRcvdB5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_entries_removed_b_1st: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncEntriesRemovedB1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_entries_removed_b_2nd: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncEntriesRemovedB2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_entries_removed_b_3rd: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncEntriesRemovedB3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_entries_removed_b_4th: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncEntriesRemovedB4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_entries_removed_b_5th: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncEntriesRemovedB5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_entries_sent_m_1st: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncEntriesSentM1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_entries_sent_m_2nd: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncEntriesSentM2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_entries_sent_m_3rd: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncEntriesSentM3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_entries_sent_m_4th: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncEntriesSentM4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_entries_sent_m_5th: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncEntriesSentM5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_m: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncM),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_start_ts_b_1st: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncStartTsB1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_start_ts_b_2nd: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncStartTsB2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_start_ts_b_3rd: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncStartTsB3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_start_ts_b_4th: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncStartTsB4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_start_ts_b_5th: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncStartTsB5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_start_ts_m_1st: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncStartTsM1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_start_ts_m_2nd: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncStartTsM2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_start_ts_m_3rd: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncStartTsM3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_start_ts_m_4th: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncStartTsM4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_tbl_sync_start_ts_m_5th: {
      value: cdktf.numberToHclTerraform(struct!.macTblSyncStartTsM5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_cksum_b: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblCksumB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_cksum_cancel_m: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblCksumCancelM),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_cksum_m: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblCksumM),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_cksum_mismatch_b: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblCksumMismatchB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_b: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_end_ts_b_1st: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncEndTsB1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_end_ts_b_2nd: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncEndTsB2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_end_ts_b_3rd: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncEndTsB3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_end_ts_b_4th: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncEndTsB4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_end_ts_b_5th: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncEndTsB5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_end_ts_m_1st: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncEndTsM1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_end_ts_m_2nd: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncEndTsM2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_end_ts_m_3rd: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncEndTsM3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_end_ts_m_4th: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncEndTsM4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_end_ts_m_5th: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncEndTsM5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_entries_added_b_1st: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncEntriesAddedB1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_entries_added_b_2nd: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncEntriesAddedB2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_entries_added_b_3rd: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncEntriesAddedB3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_entries_added_b_4th: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncEntriesAddedB4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_entries_added_b_5th: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncEntriesAddedB5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_entries_rcvd_b_1st: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncEntriesRcvdB1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_entries_rcvd_b_2nd: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncEntriesRcvdB2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_entries_rcvd_b_3rd: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncEntriesRcvdB3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_entries_rcvd_b_4th: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncEntriesRcvdB4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_entries_rcvd_b_5th: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncEntriesRcvdB5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_entries_removed_b_1st: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncEntriesRemovedB1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_entries_removed_b_2nd: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncEntriesRemovedB2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_entries_removed_b_3rd: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncEntriesRemovedB3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_entries_removed_b_4th: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncEntriesRemovedB4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_entries_removed_b_5th: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncEntriesRemovedB5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_entries_sent_m_1st: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncEntriesSentM1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_entries_sent_m_2nd: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncEntriesSentM2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_entries_sent_m_3rd: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncEntriesSentM3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_entries_sent_m_4th: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncEntriesSentM4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_entries_sent_m_5th: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncEntriesSentM5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_m: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncM),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_start_ts_b_1st: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncStartTsB1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_start_ts_b_2nd: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncStartTsB2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_start_ts_b_3rd: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncStartTsB3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_start_ts_b_4th: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncStartTsB4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_start_ts_b_5th: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncStartTsB5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_start_ts_m_1st: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncStartTsM1St),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_start_ts_m_2nd: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncStartTsM2Nd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_start_ts_m_3rd: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncStartTsM3Rd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_start_ts_m_4th: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncStartTsM4Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nd6_tbl_sync_start_ts_m_5th: {
      value: cdktf.numberToHclTerraform(struct!.nd6TblSyncStartTsM5Th),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemTableIntegrityStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemTableIntegrityStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arpTblCksumB !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblCksumB = this._arpTblCksumB;
    }
    if (this._arpTblCksumCancelM !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblCksumCancelM = this._arpTblCksumCancelM;
    }
    if (this._arpTblCksumM !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblCksumM = this._arpTblCksumM;
    }
    if (this._arpTblCksumMismatchB !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblCksumMismatchB = this._arpTblCksumMismatchB;
    }
    if (this._arpTblSyncB !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncB = this._arpTblSyncB;
    }
    if (this._arpTblSyncEndTsB1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncEndTsB1St = this._arpTblSyncEndTsB1St;
    }
    if (this._arpTblSyncEndTsB2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncEndTsB2Nd = this._arpTblSyncEndTsB2Nd;
    }
    if (this._arpTblSyncEndTsB3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncEndTsB3Rd = this._arpTblSyncEndTsB3Rd;
    }
    if (this._arpTblSyncEndTsB4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncEndTsB4Th = this._arpTblSyncEndTsB4Th;
    }
    if (this._arpTblSyncEndTsB5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncEndTsB5Th = this._arpTblSyncEndTsB5Th;
    }
    if (this._arpTblSyncEndTsM1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncEndTsM1St = this._arpTblSyncEndTsM1St;
    }
    if (this._arpTblSyncEndTsM2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncEndTsM2Nd = this._arpTblSyncEndTsM2Nd;
    }
    if (this._arpTblSyncEndTsM3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncEndTsM3Rd = this._arpTblSyncEndTsM3Rd;
    }
    if (this._arpTblSyncEndTsM4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncEndTsM4Th = this._arpTblSyncEndTsM4Th;
    }
    if (this._arpTblSyncEndTsM5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncEndTsM5Th = this._arpTblSyncEndTsM5Th;
    }
    if (this._arpTblSyncEntriesAddedB1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncEntriesAddedB1St = this._arpTblSyncEntriesAddedB1St;
    }
    if (this._arpTblSyncEntriesAddedB2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncEntriesAddedB2Nd = this._arpTblSyncEntriesAddedB2Nd;
    }
    if (this._arpTblSyncEntriesAddedB3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncEntriesAddedB3Rd = this._arpTblSyncEntriesAddedB3Rd;
    }
    if (this._arpTblSyncEntriesAddedB4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncEntriesAddedB4Th = this._arpTblSyncEntriesAddedB4Th;
    }
    if (this._arpTblSyncEntriesAddedB5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncEntriesAddedB5Th = this._arpTblSyncEntriesAddedB5Th;
    }
    if (this._arpTblSyncEntriesRcvdB1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncEntriesRcvdB1St = this._arpTblSyncEntriesRcvdB1St;
    }
    if (this._arpTblSyncEntriesRcvdB2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncEntriesRcvdB2Nd = this._arpTblSyncEntriesRcvdB2Nd;
    }
    if (this._arpTblSyncEntriesRcvdB3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncEntriesRcvdB3Rd = this._arpTblSyncEntriesRcvdB3Rd;
    }
    if (this._arpTblSyncEntriesRcvdB4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncEntriesRcvdB4Th = this._arpTblSyncEntriesRcvdB4Th;
    }
    if (this._arpTblSyncEntriesRcvdB5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncEntriesRcvdB5Th = this._arpTblSyncEntriesRcvdB5Th;
    }
    if (this._arpTblSyncEntriesRemovedB1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncEntriesRemovedB1St = this._arpTblSyncEntriesRemovedB1St;
    }
    if (this._arpTblSyncEntriesRemovedB2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncEntriesRemovedB2Nd = this._arpTblSyncEntriesRemovedB2Nd;
    }
    if (this._arpTblSyncEntriesRemovedB3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncEntriesRemovedB3Rd = this._arpTblSyncEntriesRemovedB3Rd;
    }
    if (this._arpTblSyncEntriesRemovedB4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncEntriesRemovedB4Th = this._arpTblSyncEntriesRemovedB4Th;
    }
    if (this._arpTblSyncEntriesRemovedB5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncEntriesRemovedB5Th = this._arpTblSyncEntriesRemovedB5Th;
    }
    if (this._arpTblSyncEntriesSentM1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncEntriesSentM1St = this._arpTblSyncEntriesSentM1St;
    }
    if (this._arpTblSyncEntriesSentM2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncEntriesSentM2Nd = this._arpTblSyncEntriesSentM2Nd;
    }
    if (this._arpTblSyncEntriesSentM3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncEntriesSentM3Rd = this._arpTblSyncEntriesSentM3Rd;
    }
    if (this._arpTblSyncEntriesSentM4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncEntriesSentM4Th = this._arpTblSyncEntriesSentM4Th;
    }
    if (this._arpTblSyncEntriesSentM5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncEntriesSentM5Th = this._arpTblSyncEntriesSentM5Th;
    }
    if (this._arpTblSyncM !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncM = this._arpTblSyncM;
    }
    if (this._arpTblSyncStartTsB1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncStartTsB1St = this._arpTblSyncStartTsB1St;
    }
    if (this._arpTblSyncStartTsB2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncStartTsB2Nd = this._arpTblSyncStartTsB2Nd;
    }
    if (this._arpTblSyncStartTsB3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncStartTsB3Rd = this._arpTblSyncStartTsB3Rd;
    }
    if (this._arpTblSyncStartTsB4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncStartTsB4Th = this._arpTblSyncStartTsB4Th;
    }
    if (this._arpTblSyncStartTsB5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncStartTsB5Th = this._arpTblSyncStartTsB5Th;
    }
    if (this._arpTblSyncStartTsM1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncStartTsM1St = this._arpTblSyncStartTsM1St;
    }
    if (this._arpTblSyncStartTsM2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncStartTsM2Nd = this._arpTblSyncStartTsM2Nd;
    }
    if (this._arpTblSyncStartTsM3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncStartTsM3Rd = this._arpTblSyncStartTsM3Rd;
    }
    if (this._arpTblSyncStartTsM4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncStartTsM4Th = this._arpTblSyncStartTsM4Th;
    }
    if (this._arpTblSyncStartTsM5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpTblSyncStartTsM5Th = this._arpTblSyncStartTsM5Th;
    }
    if (this._ipv4FibTblCksumB !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblCksumB = this._ipv4FibTblCksumB;
    }
    if (this._ipv4FibTblCksumCancelM !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblCksumCancelM = this._ipv4FibTblCksumCancelM;
    }
    if (this._ipv4FibTblCksumM !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblCksumM = this._ipv4FibTblCksumM;
    }
    if (this._ipv4FibTblCksumMismatchB !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblCksumMismatchB = this._ipv4FibTblCksumMismatchB;
    }
    if (this._ipv4FibTblSyncB !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncB = this._ipv4FibTblSyncB;
    }
    if (this._ipv4FibTblSyncEndTsB1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncEndTsB1St = this._ipv4FibTblSyncEndTsB1St;
    }
    if (this._ipv4FibTblSyncEndTsB2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncEndTsB2Nd = this._ipv4FibTblSyncEndTsB2Nd;
    }
    if (this._ipv4FibTblSyncEndTsB3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncEndTsB3Rd = this._ipv4FibTblSyncEndTsB3Rd;
    }
    if (this._ipv4FibTblSyncEndTsB4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncEndTsB4Th = this._ipv4FibTblSyncEndTsB4Th;
    }
    if (this._ipv4FibTblSyncEndTsB5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncEndTsB5Th = this._ipv4FibTblSyncEndTsB5Th;
    }
    if (this._ipv4FibTblSyncEndTsM1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncEndTsM1St = this._ipv4FibTblSyncEndTsM1St;
    }
    if (this._ipv4FibTblSyncEndTsM2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncEndTsM2Nd = this._ipv4FibTblSyncEndTsM2Nd;
    }
    if (this._ipv4FibTblSyncEndTsM3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncEndTsM3Rd = this._ipv4FibTblSyncEndTsM3Rd;
    }
    if (this._ipv4FibTblSyncEndTsM4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncEndTsM4Th = this._ipv4FibTblSyncEndTsM4Th;
    }
    if (this._ipv4FibTblSyncEndTsM5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncEndTsM5Th = this._ipv4FibTblSyncEndTsM5Th;
    }
    if (this._ipv4FibTblSyncEntriesAddedB1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncEntriesAddedB1St = this._ipv4FibTblSyncEntriesAddedB1St;
    }
    if (this._ipv4FibTblSyncEntriesAddedB2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncEntriesAddedB2Nd = this._ipv4FibTblSyncEntriesAddedB2Nd;
    }
    if (this._ipv4FibTblSyncEntriesAddedB3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncEntriesAddedB3Rd = this._ipv4FibTblSyncEntriesAddedB3Rd;
    }
    if (this._ipv4FibTblSyncEntriesAddedB4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncEntriesAddedB4Th = this._ipv4FibTblSyncEntriesAddedB4Th;
    }
    if (this._ipv4FibTblSyncEntriesAddedB5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncEntriesAddedB5Th = this._ipv4FibTblSyncEntriesAddedB5Th;
    }
    if (this._ipv4FibTblSyncEntriesRcvdB1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncEntriesRcvdB1St = this._ipv4FibTblSyncEntriesRcvdB1St;
    }
    if (this._ipv4FibTblSyncEntriesRcvdB2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncEntriesRcvdB2Nd = this._ipv4FibTblSyncEntriesRcvdB2Nd;
    }
    if (this._ipv4FibTblSyncEntriesRcvdB3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncEntriesRcvdB3Rd = this._ipv4FibTblSyncEntriesRcvdB3Rd;
    }
    if (this._ipv4FibTblSyncEntriesRcvdB4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncEntriesRcvdB4Th = this._ipv4FibTblSyncEntriesRcvdB4Th;
    }
    if (this._ipv4FibTblSyncEntriesRcvdB5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncEntriesRcvdB5Th = this._ipv4FibTblSyncEntriesRcvdB5Th;
    }
    if (this._ipv4FibTblSyncEntriesRemovedB1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncEntriesRemovedB1St = this._ipv4FibTblSyncEntriesRemovedB1St;
    }
    if (this._ipv4FibTblSyncEntriesRemovedB2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncEntriesRemovedB2Nd = this._ipv4FibTblSyncEntriesRemovedB2Nd;
    }
    if (this._ipv4FibTblSyncEntriesRemovedB3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncEntriesRemovedB3Rd = this._ipv4FibTblSyncEntriesRemovedB3Rd;
    }
    if (this._ipv4FibTblSyncEntriesRemovedB4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncEntriesRemovedB4Th = this._ipv4FibTblSyncEntriesRemovedB4Th;
    }
    if (this._ipv4FibTblSyncEntriesRemovedB5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncEntriesRemovedB5Th = this._ipv4FibTblSyncEntriesRemovedB5Th;
    }
    if (this._ipv4FibTblSyncEntriesSentM1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncEntriesSentM1St = this._ipv4FibTblSyncEntriesSentM1St;
    }
    if (this._ipv4FibTblSyncEntriesSentM2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncEntriesSentM2Nd = this._ipv4FibTblSyncEntriesSentM2Nd;
    }
    if (this._ipv4FibTblSyncEntriesSentM3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncEntriesSentM3Rd = this._ipv4FibTblSyncEntriesSentM3Rd;
    }
    if (this._ipv4FibTblSyncEntriesSentM4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncEntriesSentM4Th = this._ipv4FibTblSyncEntriesSentM4Th;
    }
    if (this._ipv4FibTblSyncEntriesSentM5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncEntriesSentM5Th = this._ipv4FibTblSyncEntriesSentM5Th;
    }
    if (this._ipv4FibTblSyncM !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncM = this._ipv4FibTblSyncM;
    }
    if (this._ipv4FibTblSyncStartTsB1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncStartTsB1St = this._ipv4FibTblSyncStartTsB1St;
    }
    if (this._ipv4FibTblSyncStartTsB2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncStartTsB2Nd = this._ipv4FibTblSyncStartTsB2Nd;
    }
    if (this._ipv4FibTblSyncStartTsB3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncStartTsB3Rd = this._ipv4FibTblSyncStartTsB3Rd;
    }
    if (this._ipv4FibTblSyncStartTsB4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncStartTsB4Th = this._ipv4FibTblSyncStartTsB4Th;
    }
    if (this._ipv4FibTblSyncStartTsB5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncStartTsB5Th = this._ipv4FibTblSyncStartTsB5Th;
    }
    if (this._ipv4FibTblSyncStartTsM1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncStartTsM1St = this._ipv4FibTblSyncStartTsM1St;
    }
    if (this._ipv4FibTblSyncStartTsM2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncStartTsM2Nd = this._ipv4FibTblSyncStartTsM2Nd;
    }
    if (this._ipv4FibTblSyncStartTsM3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncStartTsM3Rd = this._ipv4FibTblSyncStartTsM3Rd;
    }
    if (this._ipv4FibTblSyncStartTsM4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncStartTsM4Th = this._ipv4FibTblSyncStartTsM4Th;
    }
    if (this._ipv4FibTblSyncStartTsM5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4FibTblSyncStartTsM5Th = this._ipv4FibTblSyncStartTsM5Th;
    }
    if (this._ipv6FibTblCksumB !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblCksumB = this._ipv6FibTblCksumB;
    }
    if (this._ipv6FibTblCksumCancelM !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblCksumCancelM = this._ipv6FibTblCksumCancelM;
    }
    if (this._ipv6FibTblCksumM !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblCksumM = this._ipv6FibTblCksumM;
    }
    if (this._ipv6FibTblCksumMismatchB !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblCksumMismatchB = this._ipv6FibTblCksumMismatchB;
    }
    if (this._ipv6FibTblSyncB !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncB = this._ipv6FibTblSyncB;
    }
    if (this._ipv6FibTblSyncEndTsB1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncEndTsB1St = this._ipv6FibTblSyncEndTsB1St;
    }
    if (this._ipv6FibTblSyncEndTsB2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncEndTsB2Nd = this._ipv6FibTblSyncEndTsB2Nd;
    }
    if (this._ipv6FibTblSyncEndTsB3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncEndTsB3Rd = this._ipv6FibTblSyncEndTsB3Rd;
    }
    if (this._ipv6FibTblSyncEndTsB4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncEndTsB4Th = this._ipv6FibTblSyncEndTsB4Th;
    }
    if (this._ipv6FibTblSyncEndTsB5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncEndTsB5Th = this._ipv6FibTblSyncEndTsB5Th;
    }
    if (this._ipv6FibTblSyncEndTsM1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncEndTsM1St = this._ipv6FibTblSyncEndTsM1St;
    }
    if (this._ipv6FibTblSyncEndTsM2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncEndTsM2Nd = this._ipv6FibTblSyncEndTsM2Nd;
    }
    if (this._ipv6FibTblSyncEndTsM3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncEndTsM3Rd = this._ipv6FibTblSyncEndTsM3Rd;
    }
    if (this._ipv6FibTblSyncEndTsM4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncEndTsM4Th = this._ipv6FibTblSyncEndTsM4Th;
    }
    if (this._ipv6FibTblSyncEndTsM5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncEndTsM5Th = this._ipv6FibTblSyncEndTsM5Th;
    }
    if (this._ipv6FibTblSyncEntriesAddedB1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncEntriesAddedB1St = this._ipv6FibTblSyncEntriesAddedB1St;
    }
    if (this._ipv6FibTblSyncEntriesAddedB2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncEntriesAddedB2Nd = this._ipv6FibTblSyncEntriesAddedB2Nd;
    }
    if (this._ipv6FibTblSyncEntriesAddedB3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncEntriesAddedB3Rd = this._ipv6FibTblSyncEntriesAddedB3Rd;
    }
    if (this._ipv6FibTblSyncEntriesAddedB4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncEntriesAddedB4Th = this._ipv6FibTblSyncEntriesAddedB4Th;
    }
    if (this._ipv6FibTblSyncEntriesAddedB5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncEntriesAddedB5Th = this._ipv6FibTblSyncEntriesAddedB5Th;
    }
    if (this._ipv6FibTblSyncEntriesRcvdB1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncEntriesRcvdB1St = this._ipv6FibTblSyncEntriesRcvdB1St;
    }
    if (this._ipv6FibTblSyncEntriesRcvdB2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncEntriesRcvdB2Nd = this._ipv6FibTblSyncEntriesRcvdB2Nd;
    }
    if (this._ipv6FibTblSyncEntriesRcvdB3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncEntriesRcvdB3Rd = this._ipv6FibTblSyncEntriesRcvdB3Rd;
    }
    if (this._ipv6FibTblSyncEntriesRcvdB4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncEntriesRcvdB4Th = this._ipv6FibTblSyncEntriesRcvdB4Th;
    }
    if (this._ipv6FibTblSyncEntriesRcvdB5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncEntriesRcvdB5Th = this._ipv6FibTblSyncEntriesRcvdB5Th;
    }
    if (this._ipv6FibTblSyncEntriesRemovedB1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncEntriesRemovedB1St = this._ipv6FibTblSyncEntriesRemovedB1St;
    }
    if (this._ipv6FibTblSyncEntriesRemovedB2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncEntriesRemovedB2Nd = this._ipv6FibTblSyncEntriesRemovedB2Nd;
    }
    if (this._ipv6FibTblSyncEntriesRemovedB3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncEntriesRemovedB3Rd = this._ipv6FibTblSyncEntriesRemovedB3Rd;
    }
    if (this._ipv6FibTblSyncEntriesRemovedB4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncEntriesRemovedB4Th = this._ipv6FibTblSyncEntriesRemovedB4Th;
    }
    if (this._ipv6FibTblSyncEntriesRemovedB5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncEntriesRemovedB5Th = this._ipv6FibTblSyncEntriesRemovedB5Th;
    }
    if (this._ipv6FibTblSyncEntriesSentM1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncEntriesSentM1St = this._ipv6FibTblSyncEntriesSentM1St;
    }
    if (this._ipv6FibTblSyncEntriesSentM2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncEntriesSentM2Nd = this._ipv6FibTblSyncEntriesSentM2Nd;
    }
    if (this._ipv6FibTblSyncEntriesSentM3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncEntriesSentM3Rd = this._ipv6FibTblSyncEntriesSentM3Rd;
    }
    if (this._ipv6FibTblSyncEntriesSentM4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncEntriesSentM4Th = this._ipv6FibTblSyncEntriesSentM4Th;
    }
    if (this._ipv6FibTblSyncEntriesSentM5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncEntriesSentM5Th = this._ipv6FibTblSyncEntriesSentM5Th;
    }
    if (this._ipv6FibTblSyncM !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncM = this._ipv6FibTblSyncM;
    }
    if (this._ipv6FibTblSyncStartTsB1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncStartTsB1St = this._ipv6FibTblSyncStartTsB1St;
    }
    if (this._ipv6FibTblSyncStartTsB2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncStartTsB2Nd = this._ipv6FibTblSyncStartTsB2Nd;
    }
    if (this._ipv6FibTblSyncStartTsB3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncStartTsB3Rd = this._ipv6FibTblSyncStartTsB3Rd;
    }
    if (this._ipv6FibTblSyncStartTsB4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncStartTsB4Th = this._ipv6FibTblSyncStartTsB4Th;
    }
    if (this._ipv6FibTblSyncStartTsB5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncStartTsB5Th = this._ipv6FibTblSyncStartTsB5Th;
    }
    if (this._ipv6FibTblSyncStartTsM1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncStartTsM1St = this._ipv6FibTblSyncStartTsM1St;
    }
    if (this._ipv6FibTblSyncStartTsM2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncStartTsM2Nd = this._ipv6FibTblSyncStartTsM2Nd;
    }
    if (this._ipv6FibTblSyncStartTsM3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncStartTsM3Rd = this._ipv6FibTblSyncStartTsM3Rd;
    }
    if (this._ipv6FibTblSyncStartTsM4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncStartTsM4Th = this._ipv6FibTblSyncStartTsM4Th;
    }
    if (this._ipv6FibTblSyncStartTsM5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FibTblSyncStartTsM5Th = this._ipv6FibTblSyncStartTsM5Th;
    }
    if (this._macTblCksumB !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblCksumB = this._macTblCksumB;
    }
    if (this._macTblCksumCancelM !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblCksumCancelM = this._macTblCksumCancelM;
    }
    if (this._macTblCksumM !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblCksumM = this._macTblCksumM;
    }
    if (this._macTblCksumMismatchB !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblCksumMismatchB = this._macTblCksumMismatchB;
    }
    if (this._macTblSyncB !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncB = this._macTblSyncB;
    }
    if (this._macTblSyncEndTsB1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncEndTsB1St = this._macTblSyncEndTsB1St;
    }
    if (this._macTblSyncEndTsB2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncEndTsB2Nd = this._macTblSyncEndTsB2Nd;
    }
    if (this._macTblSyncEndTsB3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncEndTsB3Rd = this._macTblSyncEndTsB3Rd;
    }
    if (this._macTblSyncEndTsB4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncEndTsB4Th = this._macTblSyncEndTsB4Th;
    }
    if (this._macTblSyncEndTsB5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncEndTsB5Th = this._macTblSyncEndTsB5Th;
    }
    if (this._macTblSyncEndTsM1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncEndTsM1St = this._macTblSyncEndTsM1St;
    }
    if (this._macTblSyncEndTsM2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncEndTsM2Nd = this._macTblSyncEndTsM2Nd;
    }
    if (this._macTblSyncEndTsM3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncEndTsM3Rd = this._macTblSyncEndTsM3Rd;
    }
    if (this._macTblSyncEndTsM4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncEndTsM4Th = this._macTblSyncEndTsM4Th;
    }
    if (this._macTblSyncEndTsM5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncEndTsM5Th = this._macTblSyncEndTsM5Th;
    }
    if (this._macTblSyncEntriesAddedB1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncEntriesAddedB1St = this._macTblSyncEntriesAddedB1St;
    }
    if (this._macTblSyncEntriesAddedB2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncEntriesAddedB2Nd = this._macTblSyncEntriesAddedB2Nd;
    }
    if (this._macTblSyncEntriesAddedB3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncEntriesAddedB3Rd = this._macTblSyncEntriesAddedB3Rd;
    }
    if (this._macTblSyncEntriesAddedB4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncEntriesAddedB4Th = this._macTblSyncEntriesAddedB4Th;
    }
    if (this._macTblSyncEntriesAddedB5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncEntriesAddedB5Th = this._macTblSyncEntriesAddedB5Th;
    }
    if (this._macTblSyncEntriesRcvdB1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncEntriesRcvdB1St = this._macTblSyncEntriesRcvdB1St;
    }
    if (this._macTblSyncEntriesRcvdB2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncEntriesRcvdB2Nd = this._macTblSyncEntriesRcvdB2Nd;
    }
    if (this._macTblSyncEntriesRcvdB3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncEntriesRcvdB3Rd = this._macTblSyncEntriesRcvdB3Rd;
    }
    if (this._macTblSyncEntriesRcvdB4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncEntriesRcvdB4Th = this._macTblSyncEntriesRcvdB4Th;
    }
    if (this._macTblSyncEntriesRcvdB5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncEntriesRcvdB5Th = this._macTblSyncEntriesRcvdB5Th;
    }
    if (this._macTblSyncEntriesRemovedB1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncEntriesRemovedB1St = this._macTblSyncEntriesRemovedB1St;
    }
    if (this._macTblSyncEntriesRemovedB2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncEntriesRemovedB2Nd = this._macTblSyncEntriesRemovedB2Nd;
    }
    if (this._macTblSyncEntriesRemovedB3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncEntriesRemovedB3Rd = this._macTblSyncEntriesRemovedB3Rd;
    }
    if (this._macTblSyncEntriesRemovedB4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncEntriesRemovedB4Th = this._macTblSyncEntriesRemovedB4Th;
    }
    if (this._macTblSyncEntriesRemovedB5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncEntriesRemovedB5Th = this._macTblSyncEntriesRemovedB5Th;
    }
    if (this._macTblSyncEntriesSentM1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncEntriesSentM1St = this._macTblSyncEntriesSentM1St;
    }
    if (this._macTblSyncEntriesSentM2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncEntriesSentM2Nd = this._macTblSyncEntriesSentM2Nd;
    }
    if (this._macTblSyncEntriesSentM3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncEntriesSentM3Rd = this._macTblSyncEntriesSentM3Rd;
    }
    if (this._macTblSyncEntriesSentM4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncEntriesSentM4Th = this._macTblSyncEntriesSentM4Th;
    }
    if (this._macTblSyncEntriesSentM5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncEntriesSentM5Th = this._macTblSyncEntriesSentM5Th;
    }
    if (this._macTblSyncM !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncM = this._macTblSyncM;
    }
    if (this._macTblSyncStartTsB1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncStartTsB1St = this._macTblSyncStartTsB1St;
    }
    if (this._macTblSyncStartTsB2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncStartTsB2Nd = this._macTblSyncStartTsB2Nd;
    }
    if (this._macTblSyncStartTsB3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncStartTsB3Rd = this._macTblSyncStartTsB3Rd;
    }
    if (this._macTblSyncStartTsB4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncStartTsB4Th = this._macTblSyncStartTsB4Th;
    }
    if (this._macTblSyncStartTsB5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncStartTsB5Th = this._macTblSyncStartTsB5Th;
    }
    if (this._macTblSyncStartTsM1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncStartTsM1St = this._macTblSyncStartTsM1St;
    }
    if (this._macTblSyncStartTsM2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncStartTsM2Nd = this._macTblSyncStartTsM2Nd;
    }
    if (this._macTblSyncStartTsM3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncStartTsM3Rd = this._macTblSyncStartTsM3Rd;
    }
    if (this._macTblSyncStartTsM4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncStartTsM4Th = this._macTblSyncStartTsM4Th;
    }
    if (this._macTblSyncStartTsM5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.macTblSyncStartTsM5Th = this._macTblSyncStartTsM5Th;
    }
    if (this._nd6TblCksumB !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblCksumB = this._nd6TblCksumB;
    }
    if (this._nd6TblCksumCancelM !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblCksumCancelM = this._nd6TblCksumCancelM;
    }
    if (this._nd6TblCksumM !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblCksumM = this._nd6TblCksumM;
    }
    if (this._nd6TblCksumMismatchB !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblCksumMismatchB = this._nd6TblCksumMismatchB;
    }
    if (this._nd6TblSyncB !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncB = this._nd6TblSyncB;
    }
    if (this._nd6TblSyncEndTsB1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncEndTsB1St = this._nd6TblSyncEndTsB1St;
    }
    if (this._nd6TblSyncEndTsB2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncEndTsB2Nd = this._nd6TblSyncEndTsB2Nd;
    }
    if (this._nd6TblSyncEndTsB3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncEndTsB3Rd = this._nd6TblSyncEndTsB3Rd;
    }
    if (this._nd6TblSyncEndTsB4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncEndTsB4Th = this._nd6TblSyncEndTsB4Th;
    }
    if (this._nd6TblSyncEndTsB5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncEndTsB5Th = this._nd6TblSyncEndTsB5Th;
    }
    if (this._nd6TblSyncEndTsM1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncEndTsM1St = this._nd6TblSyncEndTsM1St;
    }
    if (this._nd6TblSyncEndTsM2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncEndTsM2Nd = this._nd6TblSyncEndTsM2Nd;
    }
    if (this._nd6TblSyncEndTsM3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncEndTsM3Rd = this._nd6TblSyncEndTsM3Rd;
    }
    if (this._nd6TblSyncEndTsM4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncEndTsM4Th = this._nd6TblSyncEndTsM4Th;
    }
    if (this._nd6TblSyncEndTsM5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncEndTsM5Th = this._nd6TblSyncEndTsM5Th;
    }
    if (this._nd6TblSyncEntriesAddedB1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncEntriesAddedB1St = this._nd6TblSyncEntriesAddedB1St;
    }
    if (this._nd6TblSyncEntriesAddedB2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncEntriesAddedB2Nd = this._nd6TblSyncEntriesAddedB2Nd;
    }
    if (this._nd6TblSyncEntriesAddedB3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncEntriesAddedB3Rd = this._nd6TblSyncEntriesAddedB3Rd;
    }
    if (this._nd6TblSyncEntriesAddedB4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncEntriesAddedB4Th = this._nd6TblSyncEntriesAddedB4Th;
    }
    if (this._nd6TblSyncEntriesAddedB5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncEntriesAddedB5Th = this._nd6TblSyncEntriesAddedB5Th;
    }
    if (this._nd6TblSyncEntriesRcvdB1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncEntriesRcvdB1St = this._nd6TblSyncEntriesRcvdB1St;
    }
    if (this._nd6TblSyncEntriesRcvdB2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncEntriesRcvdB2Nd = this._nd6TblSyncEntriesRcvdB2Nd;
    }
    if (this._nd6TblSyncEntriesRcvdB3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncEntriesRcvdB3Rd = this._nd6TblSyncEntriesRcvdB3Rd;
    }
    if (this._nd6TblSyncEntriesRcvdB4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncEntriesRcvdB4Th = this._nd6TblSyncEntriesRcvdB4Th;
    }
    if (this._nd6TblSyncEntriesRcvdB5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncEntriesRcvdB5Th = this._nd6TblSyncEntriesRcvdB5Th;
    }
    if (this._nd6TblSyncEntriesRemovedB1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncEntriesRemovedB1St = this._nd6TblSyncEntriesRemovedB1St;
    }
    if (this._nd6TblSyncEntriesRemovedB2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncEntriesRemovedB2Nd = this._nd6TblSyncEntriesRemovedB2Nd;
    }
    if (this._nd6TblSyncEntriesRemovedB3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncEntriesRemovedB3Rd = this._nd6TblSyncEntriesRemovedB3Rd;
    }
    if (this._nd6TblSyncEntriesRemovedB4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncEntriesRemovedB4Th = this._nd6TblSyncEntriesRemovedB4Th;
    }
    if (this._nd6TblSyncEntriesRemovedB5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncEntriesRemovedB5Th = this._nd6TblSyncEntriesRemovedB5Th;
    }
    if (this._nd6TblSyncEntriesSentM1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncEntriesSentM1St = this._nd6TblSyncEntriesSentM1St;
    }
    if (this._nd6TblSyncEntriesSentM2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncEntriesSentM2Nd = this._nd6TblSyncEntriesSentM2Nd;
    }
    if (this._nd6TblSyncEntriesSentM3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncEntriesSentM3Rd = this._nd6TblSyncEntriesSentM3Rd;
    }
    if (this._nd6TblSyncEntriesSentM4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncEntriesSentM4Th = this._nd6TblSyncEntriesSentM4Th;
    }
    if (this._nd6TblSyncEntriesSentM5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncEntriesSentM5Th = this._nd6TblSyncEntriesSentM5Th;
    }
    if (this._nd6TblSyncM !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncM = this._nd6TblSyncM;
    }
    if (this._nd6TblSyncStartTsB1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncStartTsB1St = this._nd6TblSyncStartTsB1St;
    }
    if (this._nd6TblSyncStartTsB2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncStartTsB2Nd = this._nd6TblSyncStartTsB2Nd;
    }
    if (this._nd6TblSyncStartTsB3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncStartTsB3Rd = this._nd6TblSyncStartTsB3Rd;
    }
    if (this._nd6TblSyncStartTsB4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncStartTsB4Th = this._nd6TblSyncStartTsB4Th;
    }
    if (this._nd6TblSyncStartTsB5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncStartTsB5Th = this._nd6TblSyncStartTsB5Th;
    }
    if (this._nd6TblSyncStartTsM1St !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncStartTsM1St = this._nd6TblSyncStartTsM1St;
    }
    if (this._nd6TblSyncStartTsM2Nd !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncStartTsM2Nd = this._nd6TblSyncStartTsM2Nd;
    }
    if (this._nd6TblSyncStartTsM3Rd !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncStartTsM3Rd = this._nd6TblSyncStartTsM3Rd;
    }
    if (this._nd6TblSyncStartTsM4Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncStartTsM4Th = this._nd6TblSyncStartTsM4Th;
    }
    if (this._nd6TblSyncStartTsM5Th !== undefined) {
      hasAnyValues = true;
      internalValueResult.nd6TblSyncStartTsM5Th = this._nd6TblSyncStartTsM5Th;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemTableIntegrityStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arpTblCksumB = undefined;
      this._arpTblCksumCancelM = undefined;
      this._arpTblCksumM = undefined;
      this._arpTblCksumMismatchB = undefined;
      this._arpTblSyncB = undefined;
      this._arpTblSyncEndTsB1St = undefined;
      this._arpTblSyncEndTsB2Nd = undefined;
      this._arpTblSyncEndTsB3Rd = undefined;
      this._arpTblSyncEndTsB4Th = undefined;
      this._arpTblSyncEndTsB5Th = undefined;
      this._arpTblSyncEndTsM1St = undefined;
      this._arpTblSyncEndTsM2Nd = undefined;
      this._arpTblSyncEndTsM3Rd = undefined;
      this._arpTblSyncEndTsM4Th = undefined;
      this._arpTblSyncEndTsM5Th = undefined;
      this._arpTblSyncEntriesAddedB1St = undefined;
      this._arpTblSyncEntriesAddedB2Nd = undefined;
      this._arpTblSyncEntriesAddedB3Rd = undefined;
      this._arpTblSyncEntriesAddedB4Th = undefined;
      this._arpTblSyncEntriesAddedB5Th = undefined;
      this._arpTblSyncEntriesRcvdB1St = undefined;
      this._arpTblSyncEntriesRcvdB2Nd = undefined;
      this._arpTblSyncEntriesRcvdB3Rd = undefined;
      this._arpTblSyncEntriesRcvdB4Th = undefined;
      this._arpTblSyncEntriesRcvdB5Th = undefined;
      this._arpTblSyncEntriesRemovedB1St = undefined;
      this._arpTblSyncEntriesRemovedB2Nd = undefined;
      this._arpTblSyncEntriesRemovedB3Rd = undefined;
      this._arpTblSyncEntriesRemovedB4Th = undefined;
      this._arpTblSyncEntriesRemovedB5Th = undefined;
      this._arpTblSyncEntriesSentM1St = undefined;
      this._arpTblSyncEntriesSentM2Nd = undefined;
      this._arpTblSyncEntriesSentM3Rd = undefined;
      this._arpTblSyncEntriesSentM4Th = undefined;
      this._arpTblSyncEntriesSentM5Th = undefined;
      this._arpTblSyncM = undefined;
      this._arpTblSyncStartTsB1St = undefined;
      this._arpTblSyncStartTsB2Nd = undefined;
      this._arpTblSyncStartTsB3Rd = undefined;
      this._arpTblSyncStartTsB4Th = undefined;
      this._arpTblSyncStartTsB5Th = undefined;
      this._arpTblSyncStartTsM1St = undefined;
      this._arpTblSyncStartTsM2Nd = undefined;
      this._arpTblSyncStartTsM3Rd = undefined;
      this._arpTblSyncStartTsM4Th = undefined;
      this._arpTblSyncStartTsM5Th = undefined;
      this._ipv4FibTblCksumB = undefined;
      this._ipv4FibTblCksumCancelM = undefined;
      this._ipv4FibTblCksumM = undefined;
      this._ipv4FibTblCksumMismatchB = undefined;
      this._ipv4FibTblSyncB = undefined;
      this._ipv4FibTblSyncEndTsB1St = undefined;
      this._ipv4FibTblSyncEndTsB2Nd = undefined;
      this._ipv4FibTblSyncEndTsB3Rd = undefined;
      this._ipv4FibTblSyncEndTsB4Th = undefined;
      this._ipv4FibTblSyncEndTsB5Th = undefined;
      this._ipv4FibTblSyncEndTsM1St = undefined;
      this._ipv4FibTblSyncEndTsM2Nd = undefined;
      this._ipv4FibTblSyncEndTsM3Rd = undefined;
      this._ipv4FibTblSyncEndTsM4Th = undefined;
      this._ipv4FibTblSyncEndTsM5Th = undefined;
      this._ipv4FibTblSyncEntriesAddedB1St = undefined;
      this._ipv4FibTblSyncEntriesAddedB2Nd = undefined;
      this._ipv4FibTblSyncEntriesAddedB3Rd = undefined;
      this._ipv4FibTblSyncEntriesAddedB4Th = undefined;
      this._ipv4FibTblSyncEntriesAddedB5Th = undefined;
      this._ipv4FibTblSyncEntriesRcvdB1St = undefined;
      this._ipv4FibTblSyncEntriesRcvdB2Nd = undefined;
      this._ipv4FibTblSyncEntriesRcvdB3Rd = undefined;
      this._ipv4FibTblSyncEntriesRcvdB4Th = undefined;
      this._ipv4FibTblSyncEntriesRcvdB5Th = undefined;
      this._ipv4FibTblSyncEntriesRemovedB1St = undefined;
      this._ipv4FibTblSyncEntriesRemovedB2Nd = undefined;
      this._ipv4FibTblSyncEntriesRemovedB3Rd = undefined;
      this._ipv4FibTblSyncEntriesRemovedB4Th = undefined;
      this._ipv4FibTblSyncEntriesRemovedB5Th = undefined;
      this._ipv4FibTblSyncEntriesSentM1St = undefined;
      this._ipv4FibTblSyncEntriesSentM2Nd = undefined;
      this._ipv4FibTblSyncEntriesSentM3Rd = undefined;
      this._ipv4FibTblSyncEntriesSentM4Th = undefined;
      this._ipv4FibTblSyncEntriesSentM5Th = undefined;
      this._ipv4FibTblSyncM = undefined;
      this._ipv4FibTblSyncStartTsB1St = undefined;
      this._ipv4FibTblSyncStartTsB2Nd = undefined;
      this._ipv4FibTblSyncStartTsB3Rd = undefined;
      this._ipv4FibTblSyncStartTsB4Th = undefined;
      this._ipv4FibTblSyncStartTsB5Th = undefined;
      this._ipv4FibTblSyncStartTsM1St = undefined;
      this._ipv4FibTblSyncStartTsM2Nd = undefined;
      this._ipv4FibTblSyncStartTsM3Rd = undefined;
      this._ipv4FibTblSyncStartTsM4Th = undefined;
      this._ipv4FibTblSyncStartTsM5Th = undefined;
      this._ipv6FibTblCksumB = undefined;
      this._ipv6FibTblCksumCancelM = undefined;
      this._ipv6FibTblCksumM = undefined;
      this._ipv6FibTblCksumMismatchB = undefined;
      this._ipv6FibTblSyncB = undefined;
      this._ipv6FibTblSyncEndTsB1St = undefined;
      this._ipv6FibTblSyncEndTsB2Nd = undefined;
      this._ipv6FibTblSyncEndTsB3Rd = undefined;
      this._ipv6FibTblSyncEndTsB4Th = undefined;
      this._ipv6FibTblSyncEndTsB5Th = undefined;
      this._ipv6FibTblSyncEndTsM1St = undefined;
      this._ipv6FibTblSyncEndTsM2Nd = undefined;
      this._ipv6FibTblSyncEndTsM3Rd = undefined;
      this._ipv6FibTblSyncEndTsM4Th = undefined;
      this._ipv6FibTblSyncEndTsM5Th = undefined;
      this._ipv6FibTblSyncEntriesAddedB1St = undefined;
      this._ipv6FibTblSyncEntriesAddedB2Nd = undefined;
      this._ipv6FibTblSyncEntriesAddedB3Rd = undefined;
      this._ipv6FibTblSyncEntriesAddedB4Th = undefined;
      this._ipv6FibTblSyncEntriesAddedB5Th = undefined;
      this._ipv6FibTblSyncEntriesRcvdB1St = undefined;
      this._ipv6FibTblSyncEntriesRcvdB2Nd = undefined;
      this._ipv6FibTblSyncEntriesRcvdB3Rd = undefined;
      this._ipv6FibTblSyncEntriesRcvdB4Th = undefined;
      this._ipv6FibTblSyncEntriesRcvdB5Th = undefined;
      this._ipv6FibTblSyncEntriesRemovedB1St = undefined;
      this._ipv6FibTblSyncEntriesRemovedB2Nd = undefined;
      this._ipv6FibTblSyncEntriesRemovedB3Rd = undefined;
      this._ipv6FibTblSyncEntriesRemovedB4Th = undefined;
      this._ipv6FibTblSyncEntriesRemovedB5Th = undefined;
      this._ipv6FibTblSyncEntriesSentM1St = undefined;
      this._ipv6FibTblSyncEntriesSentM2Nd = undefined;
      this._ipv6FibTblSyncEntriesSentM3Rd = undefined;
      this._ipv6FibTblSyncEntriesSentM4Th = undefined;
      this._ipv6FibTblSyncEntriesSentM5Th = undefined;
      this._ipv6FibTblSyncM = undefined;
      this._ipv6FibTblSyncStartTsB1St = undefined;
      this._ipv6FibTblSyncStartTsB2Nd = undefined;
      this._ipv6FibTblSyncStartTsB3Rd = undefined;
      this._ipv6FibTblSyncStartTsB4Th = undefined;
      this._ipv6FibTblSyncStartTsB5Th = undefined;
      this._ipv6FibTblSyncStartTsM1St = undefined;
      this._ipv6FibTblSyncStartTsM2Nd = undefined;
      this._ipv6FibTblSyncStartTsM3Rd = undefined;
      this._ipv6FibTblSyncStartTsM4Th = undefined;
      this._ipv6FibTblSyncStartTsM5Th = undefined;
      this._macTblCksumB = undefined;
      this._macTblCksumCancelM = undefined;
      this._macTblCksumM = undefined;
      this._macTblCksumMismatchB = undefined;
      this._macTblSyncB = undefined;
      this._macTblSyncEndTsB1St = undefined;
      this._macTblSyncEndTsB2Nd = undefined;
      this._macTblSyncEndTsB3Rd = undefined;
      this._macTblSyncEndTsB4Th = undefined;
      this._macTblSyncEndTsB5Th = undefined;
      this._macTblSyncEndTsM1St = undefined;
      this._macTblSyncEndTsM2Nd = undefined;
      this._macTblSyncEndTsM3Rd = undefined;
      this._macTblSyncEndTsM4Th = undefined;
      this._macTblSyncEndTsM5Th = undefined;
      this._macTblSyncEntriesAddedB1St = undefined;
      this._macTblSyncEntriesAddedB2Nd = undefined;
      this._macTblSyncEntriesAddedB3Rd = undefined;
      this._macTblSyncEntriesAddedB4Th = undefined;
      this._macTblSyncEntriesAddedB5Th = undefined;
      this._macTblSyncEntriesRcvdB1St = undefined;
      this._macTblSyncEntriesRcvdB2Nd = undefined;
      this._macTblSyncEntriesRcvdB3Rd = undefined;
      this._macTblSyncEntriesRcvdB4Th = undefined;
      this._macTblSyncEntriesRcvdB5Th = undefined;
      this._macTblSyncEntriesRemovedB1St = undefined;
      this._macTblSyncEntriesRemovedB2Nd = undefined;
      this._macTblSyncEntriesRemovedB3Rd = undefined;
      this._macTblSyncEntriesRemovedB4Th = undefined;
      this._macTblSyncEntriesRemovedB5Th = undefined;
      this._macTblSyncEntriesSentM1St = undefined;
      this._macTblSyncEntriesSentM2Nd = undefined;
      this._macTblSyncEntriesSentM3Rd = undefined;
      this._macTblSyncEntriesSentM4Th = undefined;
      this._macTblSyncEntriesSentM5Th = undefined;
      this._macTblSyncM = undefined;
      this._macTblSyncStartTsB1St = undefined;
      this._macTblSyncStartTsB2Nd = undefined;
      this._macTblSyncStartTsB3Rd = undefined;
      this._macTblSyncStartTsB4Th = undefined;
      this._macTblSyncStartTsB5Th = undefined;
      this._macTblSyncStartTsM1St = undefined;
      this._macTblSyncStartTsM2Nd = undefined;
      this._macTblSyncStartTsM3Rd = undefined;
      this._macTblSyncStartTsM4Th = undefined;
      this._macTblSyncStartTsM5Th = undefined;
      this._nd6TblCksumB = undefined;
      this._nd6TblCksumCancelM = undefined;
      this._nd6TblCksumM = undefined;
      this._nd6TblCksumMismatchB = undefined;
      this._nd6TblSyncB = undefined;
      this._nd6TblSyncEndTsB1St = undefined;
      this._nd6TblSyncEndTsB2Nd = undefined;
      this._nd6TblSyncEndTsB3Rd = undefined;
      this._nd6TblSyncEndTsB4Th = undefined;
      this._nd6TblSyncEndTsB5Th = undefined;
      this._nd6TblSyncEndTsM1St = undefined;
      this._nd6TblSyncEndTsM2Nd = undefined;
      this._nd6TblSyncEndTsM3Rd = undefined;
      this._nd6TblSyncEndTsM4Th = undefined;
      this._nd6TblSyncEndTsM5Th = undefined;
      this._nd6TblSyncEntriesAddedB1St = undefined;
      this._nd6TblSyncEntriesAddedB2Nd = undefined;
      this._nd6TblSyncEntriesAddedB3Rd = undefined;
      this._nd6TblSyncEntriesAddedB4Th = undefined;
      this._nd6TblSyncEntriesAddedB5Th = undefined;
      this._nd6TblSyncEntriesRcvdB1St = undefined;
      this._nd6TblSyncEntriesRcvdB2Nd = undefined;
      this._nd6TblSyncEntriesRcvdB3Rd = undefined;
      this._nd6TblSyncEntriesRcvdB4Th = undefined;
      this._nd6TblSyncEntriesRcvdB5Th = undefined;
      this._nd6TblSyncEntriesRemovedB1St = undefined;
      this._nd6TblSyncEntriesRemovedB2Nd = undefined;
      this._nd6TblSyncEntriesRemovedB3Rd = undefined;
      this._nd6TblSyncEntriesRemovedB4Th = undefined;
      this._nd6TblSyncEntriesRemovedB5Th = undefined;
      this._nd6TblSyncEntriesSentM1St = undefined;
      this._nd6TblSyncEntriesSentM2Nd = undefined;
      this._nd6TblSyncEntriesSentM3Rd = undefined;
      this._nd6TblSyncEntriesSentM4Th = undefined;
      this._nd6TblSyncEntriesSentM5Th = undefined;
      this._nd6TblSyncM = undefined;
      this._nd6TblSyncStartTsB1St = undefined;
      this._nd6TblSyncStartTsB2Nd = undefined;
      this._nd6TblSyncStartTsB3Rd = undefined;
      this._nd6TblSyncStartTsB4Th = undefined;
      this._nd6TblSyncStartTsB5Th = undefined;
      this._nd6TblSyncStartTsM1St = undefined;
      this._nd6TblSyncStartTsM2Nd = undefined;
      this._nd6TblSyncStartTsM3Rd = undefined;
      this._nd6TblSyncStartTsM4Th = undefined;
      this._nd6TblSyncStartTsM5Th = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arpTblCksumB = value.arpTblCksumB;
      this._arpTblCksumCancelM = value.arpTblCksumCancelM;
      this._arpTblCksumM = value.arpTblCksumM;
      this._arpTblCksumMismatchB = value.arpTblCksumMismatchB;
      this._arpTblSyncB = value.arpTblSyncB;
      this._arpTblSyncEndTsB1St = value.arpTblSyncEndTsB1St;
      this._arpTblSyncEndTsB2Nd = value.arpTblSyncEndTsB2Nd;
      this._arpTblSyncEndTsB3Rd = value.arpTblSyncEndTsB3Rd;
      this._arpTblSyncEndTsB4Th = value.arpTblSyncEndTsB4Th;
      this._arpTblSyncEndTsB5Th = value.arpTblSyncEndTsB5Th;
      this._arpTblSyncEndTsM1St = value.arpTblSyncEndTsM1St;
      this._arpTblSyncEndTsM2Nd = value.arpTblSyncEndTsM2Nd;
      this._arpTblSyncEndTsM3Rd = value.arpTblSyncEndTsM3Rd;
      this._arpTblSyncEndTsM4Th = value.arpTblSyncEndTsM4Th;
      this._arpTblSyncEndTsM5Th = value.arpTblSyncEndTsM5Th;
      this._arpTblSyncEntriesAddedB1St = value.arpTblSyncEntriesAddedB1St;
      this._arpTblSyncEntriesAddedB2Nd = value.arpTblSyncEntriesAddedB2Nd;
      this._arpTblSyncEntriesAddedB3Rd = value.arpTblSyncEntriesAddedB3Rd;
      this._arpTblSyncEntriesAddedB4Th = value.arpTblSyncEntriesAddedB4Th;
      this._arpTblSyncEntriesAddedB5Th = value.arpTblSyncEntriesAddedB5Th;
      this._arpTblSyncEntriesRcvdB1St = value.arpTblSyncEntriesRcvdB1St;
      this._arpTblSyncEntriesRcvdB2Nd = value.arpTblSyncEntriesRcvdB2Nd;
      this._arpTblSyncEntriesRcvdB3Rd = value.arpTblSyncEntriesRcvdB3Rd;
      this._arpTblSyncEntriesRcvdB4Th = value.arpTblSyncEntriesRcvdB4Th;
      this._arpTblSyncEntriesRcvdB5Th = value.arpTblSyncEntriesRcvdB5Th;
      this._arpTblSyncEntriesRemovedB1St = value.arpTblSyncEntriesRemovedB1St;
      this._arpTblSyncEntriesRemovedB2Nd = value.arpTblSyncEntriesRemovedB2Nd;
      this._arpTblSyncEntriesRemovedB3Rd = value.arpTblSyncEntriesRemovedB3Rd;
      this._arpTblSyncEntriesRemovedB4Th = value.arpTblSyncEntriesRemovedB4Th;
      this._arpTblSyncEntriesRemovedB5Th = value.arpTblSyncEntriesRemovedB5Th;
      this._arpTblSyncEntriesSentM1St = value.arpTblSyncEntriesSentM1St;
      this._arpTblSyncEntriesSentM2Nd = value.arpTblSyncEntriesSentM2Nd;
      this._arpTblSyncEntriesSentM3Rd = value.arpTblSyncEntriesSentM3Rd;
      this._arpTblSyncEntriesSentM4Th = value.arpTblSyncEntriesSentM4Th;
      this._arpTblSyncEntriesSentM5Th = value.arpTblSyncEntriesSentM5Th;
      this._arpTblSyncM = value.arpTblSyncM;
      this._arpTblSyncStartTsB1St = value.arpTblSyncStartTsB1St;
      this._arpTblSyncStartTsB2Nd = value.arpTblSyncStartTsB2Nd;
      this._arpTblSyncStartTsB3Rd = value.arpTblSyncStartTsB3Rd;
      this._arpTblSyncStartTsB4Th = value.arpTblSyncStartTsB4Th;
      this._arpTblSyncStartTsB5Th = value.arpTblSyncStartTsB5Th;
      this._arpTblSyncStartTsM1St = value.arpTblSyncStartTsM1St;
      this._arpTblSyncStartTsM2Nd = value.arpTblSyncStartTsM2Nd;
      this._arpTblSyncStartTsM3Rd = value.arpTblSyncStartTsM3Rd;
      this._arpTblSyncStartTsM4Th = value.arpTblSyncStartTsM4Th;
      this._arpTblSyncStartTsM5Th = value.arpTblSyncStartTsM5Th;
      this._ipv4FibTblCksumB = value.ipv4FibTblCksumB;
      this._ipv4FibTblCksumCancelM = value.ipv4FibTblCksumCancelM;
      this._ipv4FibTblCksumM = value.ipv4FibTblCksumM;
      this._ipv4FibTblCksumMismatchB = value.ipv4FibTblCksumMismatchB;
      this._ipv4FibTblSyncB = value.ipv4FibTblSyncB;
      this._ipv4FibTblSyncEndTsB1St = value.ipv4FibTblSyncEndTsB1St;
      this._ipv4FibTblSyncEndTsB2Nd = value.ipv4FibTblSyncEndTsB2Nd;
      this._ipv4FibTblSyncEndTsB3Rd = value.ipv4FibTblSyncEndTsB3Rd;
      this._ipv4FibTblSyncEndTsB4Th = value.ipv4FibTblSyncEndTsB4Th;
      this._ipv4FibTblSyncEndTsB5Th = value.ipv4FibTblSyncEndTsB5Th;
      this._ipv4FibTblSyncEndTsM1St = value.ipv4FibTblSyncEndTsM1St;
      this._ipv4FibTblSyncEndTsM2Nd = value.ipv4FibTblSyncEndTsM2Nd;
      this._ipv4FibTblSyncEndTsM3Rd = value.ipv4FibTblSyncEndTsM3Rd;
      this._ipv4FibTblSyncEndTsM4Th = value.ipv4FibTblSyncEndTsM4Th;
      this._ipv4FibTblSyncEndTsM5Th = value.ipv4FibTblSyncEndTsM5Th;
      this._ipv4FibTblSyncEntriesAddedB1St = value.ipv4FibTblSyncEntriesAddedB1St;
      this._ipv4FibTblSyncEntriesAddedB2Nd = value.ipv4FibTblSyncEntriesAddedB2Nd;
      this._ipv4FibTblSyncEntriesAddedB3Rd = value.ipv4FibTblSyncEntriesAddedB3Rd;
      this._ipv4FibTblSyncEntriesAddedB4Th = value.ipv4FibTblSyncEntriesAddedB4Th;
      this._ipv4FibTblSyncEntriesAddedB5Th = value.ipv4FibTblSyncEntriesAddedB5Th;
      this._ipv4FibTblSyncEntriesRcvdB1St = value.ipv4FibTblSyncEntriesRcvdB1St;
      this._ipv4FibTblSyncEntriesRcvdB2Nd = value.ipv4FibTblSyncEntriesRcvdB2Nd;
      this._ipv4FibTblSyncEntriesRcvdB3Rd = value.ipv4FibTblSyncEntriesRcvdB3Rd;
      this._ipv4FibTblSyncEntriesRcvdB4Th = value.ipv4FibTblSyncEntriesRcvdB4Th;
      this._ipv4FibTblSyncEntriesRcvdB5Th = value.ipv4FibTblSyncEntriesRcvdB5Th;
      this._ipv4FibTblSyncEntriesRemovedB1St = value.ipv4FibTblSyncEntriesRemovedB1St;
      this._ipv4FibTblSyncEntriesRemovedB2Nd = value.ipv4FibTblSyncEntriesRemovedB2Nd;
      this._ipv4FibTblSyncEntriesRemovedB3Rd = value.ipv4FibTblSyncEntriesRemovedB3Rd;
      this._ipv4FibTblSyncEntriesRemovedB4Th = value.ipv4FibTblSyncEntriesRemovedB4Th;
      this._ipv4FibTblSyncEntriesRemovedB5Th = value.ipv4FibTblSyncEntriesRemovedB5Th;
      this._ipv4FibTblSyncEntriesSentM1St = value.ipv4FibTblSyncEntriesSentM1St;
      this._ipv4FibTblSyncEntriesSentM2Nd = value.ipv4FibTblSyncEntriesSentM2Nd;
      this._ipv4FibTblSyncEntriesSentM3Rd = value.ipv4FibTblSyncEntriesSentM3Rd;
      this._ipv4FibTblSyncEntriesSentM4Th = value.ipv4FibTblSyncEntriesSentM4Th;
      this._ipv4FibTblSyncEntriesSentM5Th = value.ipv4FibTblSyncEntriesSentM5Th;
      this._ipv4FibTblSyncM = value.ipv4FibTblSyncM;
      this._ipv4FibTblSyncStartTsB1St = value.ipv4FibTblSyncStartTsB1St;
      this._ipv4FibTblSyncStartTsB2Nd = value.ipv4FibTblSyncStartTsB2Nd;
      this._ipv4FibTblSyncStartTsB3Rd = value.ipv4FibTblSyncStartTsB3Rd;
      this._ipv4FibTblSyncStartTsB4Th = value.ipv4FibTblSyncStartTsB4Th;
      this._ipv4FibTblSyncStartTsB5Th = value.ipv4FibTblSyncStartTsB5Th;
      this._ipv4FibTblSyncStartTsM1St = value.ipv4FibTblSyncStartTsM1St;
      this._ipv4FibTblSyncStartTsM2Nd = value.ipv4FibTblSyncStartTsM2Nd;
      this._ipv4FibTblSyncStartTsM3Rd = value.ipv4FibTblSyncStartTsM3Rd;
      this._ipv4FibTblSyncStartTsM4Th = value.ipv4FibTblSyncStartTsM4Th;
      this._ipv4FibTblSyncStartTsM5Th = value.ipv4FibTblSyncStartTsM5Th;
      this._ipv6FibTblCksumB = value.ipv6FibTblCksumB;
      this._ipv6FibTblCksumCancelM = value.ipv6FibTblCksumCancelM;
      this._ipv6FibTblCksumM = value.ipv6FibTblCksumM;
      this._ipv6FibTblCksumMismatchB = value.ipv6FibTblCksumMismatchB;
      this._ipv6FibTblSyncB = value.ipv6FibTblSyncB;
      this._ipv6FibTblSyncEndTsB1St = value.ipv6FibTblSyncEndTsB1St;
      this._ipv6FibTblSyncEndTsB2Nd = value.ipv6FibTblSyncEndTsB2Nd;
      this._ipv6FibTblSyncEndTsB3Rd = value.ipv6FibTblSyncEndTsB3Rd;
      this._ipv6FibTblSyncEndTsB4Th = value.ipv6FibTblSyncEndTsB4Th;
      this._ipv6FibTblSyncEndTsB5Th = value.ipv6FibTblSyncEndTsB5Th;
      this._ipv6FibTblSyncEndTsM1St = value.ipv6FibTblSyncEndTsM1St;
      this._ipv6FibTblSyncEndTsM2Nd = value.ipv6FibTblSyncEndTsM2Nd;
      this._ipv6FibTblSyncEndTsM3Rd = value.ipv6FibTblSyncEndTsM3Rd;
      this._ipv6FibTblSyncEndTsM4Th = value.ipv6FibTblSyncEndTsM4Th;
      this._ipv6FibTblSyncEndTsM5Th = value.ipv6FibTblSyncEndTsM5Th;
      this._ipv6FibTblSyncEntriesAddedB1St = value.ipv6FibTblSyncEntriesAddedB1St;
      this._ipv6FibTblSyncEntriesAddedB2Nd = value.ipv6FibTblSyncEntriesAddedB2Nd;
      this._ipv6FibTblSyncEntriesAddedB3Rd = value.ipv6FibTblSyncEntriesAddedB3Rd;
      this._ipv6FibTblSyncEntriesAddedB4Th = value.ipv6FibTblSyncEntriesAddedB4Th;
      this._ipv6FibTblSyncEntriesAddedB5Th = value.ipv6FibTblSyncEntriesAddedB5Th;
      this._ipv6FibTblSyncEntriesRcvdB1St = value.ipv6FibTblSyncEntriesRcvdB1St;
      this._ipv6FibTblSyncEntriesRcvdB2Nd = value.ipv6FibTblSyncEntriesRcvdB2Nd;
      this._ipv6FibTblSyncEntriesRcvdB3Rd = value.ipv6FibTblSyncEntriesRcvdB3Rd;
      this._ipv6FibTblSyncEntriesRcvdB4Th = value.ipv6FibTblSyncEntriesRcvdB4Th;
      this._ipv6FibTblSyncEntriesRcvdB5Th = value.ipv6FibTblSyncEntriesRcvdB5Th;
      this._ipv6FibTblSyncEntriesRemovedB1St = value.ipv6FibTblSyncEntriesRemovedB1St;
      this._ipv6FibTblSyncEntriesRemovedB2Nd = value.ipv6FibTblSyncEntriesRemovedB2Nd;
      this._ipv6FibTblSyncEntriesRemovedB3Rd = value.ipv6FibTblSyncEntriesRemovedB3Rd;
      this._ipv6FibTblSyncEntriesRemovedB4Th = value.ipv6FibTblSyncEntriesRemovedB4Th;
      this._ipv6FibTblSyncEntriesRemovedB5Th = value.ipv6FibTblSyncEntriesRemovedB5Th;
      this._ipv6FibTblSyncEntriesSentM1St = value.ipv6FibTblSyncEntriesSentM1St;
      this._ipv6FibTblSyncEntriesSentM2Nd = value.ipv6FibTblSyncEntriesSentM2Nd;
      this._ipv6FibTblSyncEntriesSentM3Rd = value.ipv6FibTblSyncEntriesSentM3Rd;
      this._ipv6FibTblSyncEntriesSentM4Th = value.ipv6FibTblSyncEntriesSentM4Th;
      this._ipv6FibTblSyncEntriesSentM5Th = value.ipv6FibTblSyncEntriesSentM5Th;
      this._ipv6FibTblSyncM = value.ipv6FibTblSyncM;
      this._ipv6FibTblSyncStartTsB1St = value.ipv6FibTblSyncStartTsB1St;
      this._ipv6FibTblSyncStartTsB2Nd = value.ipv6FibTblSyncStartTsB2Nd;
      this._ipv6FibTblSyncStartTsB3Rd = value.ipv6FibTblSyncStartTsB3Rd;
      this._ipv6FibTblSyncStartTsB4Th = value.ipv6FibTblSyncStartTsB4Th;
      this._ipv6FibTblSyncStartTsB5Th = value.ipv6FibTblSyncStartTsB5Th;
      this._ipv6FibTblSyncStartTsM1St = value.ipv6FibTblSyncStartTsM1St;
      this._ipv6FibTblSyncStartTsM2Nd = value.ipv6FibTblSyncStartTsM2Nd;
      this._ipv6FibTblSyncStartTsM3Rd = value.ipv6FibTblSyncStartTsM3Rd;
      this._ipv6FibTblSyncStartTsM4Th = value.ipv6FibTblSyncStartTsM4Th;
      this._ipv6FibTblSyncStartTsM5Th = value.ipv6FibTblSyncStartTsM5Th;
      this._macTblCksumB = value.macTblCksumB;
      this._macTblCksumCancelM = value.macTblCksumCancelM;
      this._macTblCksumM = value.macTblCksumM;
      this._macTblCksumMismatchB = value.macTblCksumMismatchB;
      this._macTblSyncB = value.macTblSyncB;
      this._macTblSyncEndTsB1St = value.macTblSyncEndTsB1St;
      this._macTblSyncEndTsB2Nd = value.macTblSyncEndTsB2Nd;
      this._macTblSyncEndTsB3Rd = value.macTblSyncEndTsB3Rd;
      this._macTblSyncEndTsB4Th = value.macTblSyncEndTsB4Th;
      this._macTblSyncEndTsB5Th = value.macTblSyncEndTsB5Th;
      this._macTblSyncEndTsM1St = value.macTblSyncEndTsM1St;
      this._macTblSyncEndTsM2Nd = value.macTblSyncEndTsM2Nd;
      this._macTblSyncEndTsM3Rd = value.macTblSyncEndTsM3Rd;
      this._macTblSyncEndTsM4Th = value.macTblSyncEndTsM4Th;
      this._macTblSyncEndTsM5Th = value.macTblSyncEndTsM5Th;
      this._macTblSyncEntriesAddedB1St = value.macTblSyncEntriesAddedB1St;
      this._macTblSyncEntriesAddedB2Nd = value.macTblSyncEntriesAddedB2Nd;
      this._macTblSyncEntriesAddedB3Rd = value.macTblSyncEntriesAddedB3Rd;
      this._macTblSyncEntriesAddedB4Th = value.macTblSyncEntriesAddedB4Th;
      this._macTblSyncEntriesAddedB5Th = value.macTblSyncEntriesAddedB5Th;
      this._macTblSyncEntriesRcvdB1St = value.macTblSyncEntriesRcvdB1St;
      this._macTblSyncEntriesRcvdB2Nd = value.macTblSyncEntriesRcvdB2Nd;
      this._macTblSyncEntriesRcvdB3Rd = value.macTblSyncEntriesRcvdB3Rd;
      this._macTblSyncEntriesRcvdB4Th = value.macTblSyncEntriesRcvdB4Th;
      this._macTblSyncEntriesRcvdB5Th = value.macTblSyncEntriesRcvdB5Th;
      this._macTblSyncEntriesRemovedB1St = value.macTblSyncEntriesRemovedB1St;
      this._macTblSyncEntriesRemovedB2Nd = value.macTblSyncEntriesRemovedB2Nd;
      this._macTblSyncEntriesRemovedB3Rd = value.macTblSyncEntriesRemovedB3Rd;
      this._macTblSyncEntriesRemovedB4Th = value.macTblSyncEntriesRemovedB4Th;
      this._macTblSyncEntriesRemovedB5Th = value.macTblSyncEntriesRemovedB5Th;
      this._macTblSyncEntriesSentM1St = value.macTblSyncEntriesSentM1St;
      this._macTblSyncEntriesSentM2Nd = value.macTblSyncEntriesSentM2Nd;
      this._macTblSyncEntriesSentM3Rd = value.macTblSyncEntriesSentM3Rd;
      this._macTblSyncEntriesSentM4Th = value.macTblSyncEntriesSentM4Th;
      this._macTblSyncEntriesSentM5Th = value.macTblSyncEntriesSentM5Th;
      this._macTblSyncM = value.macTblSyncM;
      this._macTblSyncStartTsB1St = value.macTblSyncStartTsB1St;
      this._macTblSyncStartTsB2Nd = value.macTblSyncStartTsB2Nd;
      this._macTblSyncStartTsB3Rd = value.macTblSyncStartTsB3Rd;
      this._macTblSyncStartTsB4Th = value.macTblSyncStartTsB4Th;
      this._macTblSyncStartTsB5Th = value.macTblSyncStartTsB5Th;
      this._macTblSyncStartTsM1St = value.macTblSyncStartTsM1St;
      this._macTblSyncStartTsM2Nd = value.macTblSyncStartTsM2Nd;
      this._macTblSyncStartTsM3Rd = value.macTblSyncStartTsM3Rd;
      this._macTblSyncStartTsM4Th = value.macTblSyncStartTsM4Th;
      this._macTblSyncStartTsM5Th = value.macTblSyncStartTsM5Th;
      this._nd6TblCksumB = value.nd6TblCksumB;
      this._nd6TblCksumCancelM = value.nd6TblCksumCancelM;
      this._nd6TblCksumM = value.nd6TblCksumM;
      this._nd6TblCksumMismatchB = value.nd6TblCksumMismatchB;
      this._nd6TblSyncB = value.nd6TblSyncB;
      this._nd6TblSyncEndTsB1St = value.nd6TblSyncEndTsB1St;
      this._nd6TblSyncEndTsB2Nd = value.nd6TblSyncEndTsB2Nd;
      this._nd6TblSyncEndTsB3Rd = value.nd6TblSyncEndTsB3Rd;
      this._nd6TblSyncEndTsB4Th = value.nd6TblSyncEndTsB4Th;
      this._nd6TblSyncEndTsB5Th = value.nd6TblSyncEndTsB5Th;
      this._nd6TblSyncEndTsM1St = value.nd6TblSyncEndTsM1St;
      this._nd6TblSyncEndTsM2Nd = value.nd6TblSyncEndTsM2Nd;
      this._nd6TblSyncEndTsM3Rd = value.nd6TblSyncEndTsM3Rd;
      this._nd6TblSyncEndTsM4Th = value.nd6TblSyncEndTsM4Th;
      this._nd6TblSyncEndTsM5Th = value.nd6TblSyncEndTsM5Th;
      this._nd6TblSyncEntriesAddedB1St = value.nd6TblSyncEntriesAddedB1St;
      this._nd6TblSyncEntriesAddedB2Nd = value.nd6TblSyncEntriesAddedB2Nd;
      this._nd6TblSyncEntriesAddedB3Rd = value.nd6TblSyncEntriesAddedB3Rd;
      this._nd6TblSyncEntriesAddedB4Th = value.nd6TblSyncEntriesAddedB4Th;
      this._nd6TblSyncEntriesAddedB5Th = value.nd6TblSyncEntriesAddedB5Th;
      this._nd6TblSyncEntriesRcvdB1St = value.nd6TblSyncEntriesRcvdB1St;
      this._nd6TblSyncEntriesRcvdB2Nd = value.nd6TblSyncEntriesRcvdB2Nd;
      this._nd6TblSyncEntriesRcvdB3Rd = value.nd6TblSyncEntriesRcvdB3Rd;
      this._nd6TblSyncEntriesRcvdB4Th = value.nd6TblSyncEntriesRcvdB4Th;
      this._nd6TblSyncEntriesRcvdB5Th = value.nd6TblSyncEntriesRcvdB5Th;
      this._nd6TblSyncEntriesRemovedB1St = value.nd6TblSyncEntriesRemovedB1St;
      this._nd6TblSyncEntriesRemovedB2Nd = value.nd6TblSyncEntriesRemovedB2Nd;
      this._nd6TblSyncEntriesRemovedB3Rd = value.nd6TblSyncEntriesRemovedB3Rd;
      this._nd6TblSyncEntriesRemovedB4Th = value.nd6TblSyncEntriesRemovedB4Th;
      this._nd6TblSyncEntriesRemovedB5Th = value.nd6TblSyncEntriesRemovedB5Th;
      this._nd6TblSyncEntriesSentM1St = value.nd6TblSyncEntriesSentM1St;
      this._nd6TblSyncEntriesSentM2Nd = value.nd6TblSyncEntriesSentM2Nd;
      this._nd6TblSyncEntriesSentM3Rd = value.nd6TblSyncEntriesSentM3Rd;
      this._nd6TblSyncEntriesSentM4Th = value.nd6TblSyncEntriesSentM4Th;
      this._nd6TblSyncEntriesSentM5Th = value.nd6TblSyncEntriesSentM5Th;
      this._nd6TblSyncM = value.nd6TblSyncM;
      this._nd6TblSyncStartTsB1St = value.nd6TblSyncStartTsB1St;
      this._nd6TblSyncStartTsB2Nd = value.nd6TblSyncStartTsB2Nd;
      this._nd6TblSyncStartTsB3Rd = value.nd6TblSyncStartTsB3Rd;
      this._nd6TblSyncStartTsB4Th = value.nd6TblSyncStartTsB4Th;
      this._nd6TblSyncStartTsB5Th = value.nd6TblSyncStartTsB5Th;
      this._nd6TblSyncStartTsM1St = value.nd6TblSyncStartTsM1St;
      this._nd6TblSyncStartTsM2Nd = value.nd6TblSyncStartTsM2Nd;
      this._nd6TblSyncStartTsM3Rd = value.nd6TblSyncStartTsM3Rd;
      this._nd6TblSyncStartTsM4Th = value.nd6TblSyncStartTsM4Th;
      this._nd6TblSyncStartTsM5Th = value.nd6TblSyncStartTsM5Th;
    }
  }

  // arp_tbl_cksum_b - computed: false, optional: true, required: false
  private _arpTblCksumB?: number; 
  public get arpTblCksumB() {
    return this.getNumberAttribute('arp_tbl_cksum_b');
  }
  public set arpTblCksumB(value: number) {
    this._arpTblCksumB = value;
  }
  public resetArpTblCksumB() {
    this._arpTblCksumB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblCksumBInput() {
    return this._arpTblCksumB;
  }

  // arp_tbl_cksum_cancel_m - computed: false, optional: true, required: false
  private _arpTblCksumCancelM?: number; 
  public get arpTblCksumCancelM() {
    return this.getNumberAttribute('arp_tbl_cksum_cancel_m');
  }
  public set arpTblCksumCancelM(value: number) {
    this._arpTblCksumCancelM = value;
  }
  public resetArpTblCksumCancelM() {
    this._arpTblCksumCancelM = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblCksumCancelMInput() {
    return this._arpTblCksumCancelM;
  }

  // arp_tbl_cksum_m - computed: false, optional: true, required: false
  private _arpTblCksumM?: number; 
  public get arpTblCksumM() {
    return this.getNumberAttribute('arp_tbl_cksum_m');
  }
  public set arpTblCksumM(value: number) {
    this._arpTblCksumM = value;
  }
  public resetArpTblCksumM() {
    this._arpTblCksumM = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblCksumMInput() {
    return this._arpTblCksumM;
  }

  // arp_tbl_cksum_mismatch_b - computed: false, optional: true, required: false
  private _arpTblCksumMismatchB?: number; 
  public get arpTblCksumMismatchB() {
    return this.getNumberAttribute('arp_tbl_cksum_mismatch_b');
  }
  public set arpTblCksumMismatchB(value: number) {
    this._arpTblCksumMismatchB = value;
  }
  public resetArpTblCksumMismatchB() {
    this._arpTblCksumMismatchB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblCksumMismatchBInput() {
    return this._arpTblCksumMismatchB;
  }

  // arp_tbl_sync_b - computed: false, optional: true, required: false
  private _arpTblSyncB?: number; 
  public get arpTblSyncB() {
    return this.getNumberAttribute('arp_tbl_sync_b');
  }
  public set arpTblSyncB(value: number) {
    this._arpTblSyncB = value;
  }
  public resetArpTblSyncB() {
    this._arpTblSyncB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncBInput() {
    return this._arpTblSyncB;
  }

  // arp_tbl_sync_end_ts_b_1st - computed: false, optional: true, required: false
  private _arpTblSyncEndTsB1St?: number; 
  public get arpTblSyncEndTsB1St() {
    return this.getNumberAttribute('arp_tbl_sync_end_ts_b_1st');
  }
  public set arpTblSyncEndTsB1St(value: number) {
    this._arpTblSyncEndTsB1St = value;
  }
  public resetArpTblSyncEndTsB1St() {
    this._arpTblSyncEndTsB1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncEndTsB1StInput() {
    return this._arpTblSyncEndTsB1St;
  }

  // arp_tbl_sync_end_ts_b_2nd - computed: false, optional: true, required: false
  private _arpTblSyncEndTsB2Nd?: number; 
  public get arpTblSyncEndTsB2Nd() {
    return this.getNumberAttribute('arp_tbl_sync_end_ts_b_2nd');
  }
  public set arpTblSyncEndTsB2Nd(value: number) {
    this._arpTblSyncEndTsB2Nd = value;
  }
  public resetArpTblSyncEndTsB2Nd() {
    this._arpTblSyncEndTsB2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncEndTsB2NdInput() {
    return this._arpTblSyncEndTsB2Nd;
  }

  // arp_tbl_sync_end_ts_b_3rd - computed: false, optional: true, required: false
  private _arpTblSyncEndTsB3Rd?: number; 
  public get arpTblSyncEndTsB3Rd() {
    return this.getNumberAttribute('arp_tbl_sync_end_ts_b_3rd');
  }
  public set arpTblSyncEndTsB3Rd(value: number) {
    this._arpTblSyncEndTsB3Rd = value;
  }
  public resetArpTblSyncEndTsB3Rd() {
    this._arpTblSyncEndTsB3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncEndTsB3RdInput() {
    return this._arpTblSyncEndTsB3Rd;
  }

  // arp_tbl_sync_end_ts_b_4th - computed: false, optional: true, required: false
  private _arpTblSyncEndTsB4Th?: number; 
  public get arpTblSyncEndTsB4Th() {
    return this.getNumberAttribute('arp_tbl_sync_end_ts_b_4th');
  }
  public set arpTblSyncEndTsB4Th(value: number) {
    this._arpTblSyncEndTsB4Th = value;
  }
  public resetArpTblSyncEndTsB4Th() {
    this._arpTblSyncEndTsB4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncEndTsB4ThInput() {
    return this._arpTblSyncEndTsB4Th;
  }

  // arp_tbl_sync_end_ts_b_5th - computed: false, optional: true, required: false
  private _arpTblSyncEndTsB5Th?: number; 
  public get arpTblSyncEndTsB5Th() {
    return this.getNumberAttribute('arp_tbl_sync_end_ts_b_5th');
  }
  public set arpTblSyncEndTsB5Th(value: number) {
    this._arpTblSyncEndTsB5Th = value;
  }
  public resetArpTblSyncEndTsB5Th() {
    this._arpTblSyncEndTsB5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncEndTsB5ThInput() {
    return this._arpTblSyncEndTsB5Th;
  }

  // arp_tbl_sync_end_ts_m_1st - computed: false, optional: true, required: false
  private _arpTblSyncEndTsM1St?: number; 
  public get arpTblSyncEndTsM1St() {
    return this.getNumberAttribute('arp_tbl_sync_end_ts_m_1st');
  }
  public set arpTblSyncEndTsM1St(value: number) {
    this._arpTblSyncEndTsM1St = value;
  }
  public resetArpTblSyncEndTsM1St() {
    this._arpTblSyncEndTsM1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncEndTsM1StInput() {
    return this._arpTblSyncEndTsM1St;
  }

  // arp_tbl_sync_end_ts_m_2nd - computed: false, optional: true, required: false
  private _arpTblSyncEndTsM2Nd?: number; 
  public get arpTblSyncEndTsM2Nd() {
    return this.getNumberAttribute('arp_tbl_sync_end_ts_m_2nd');
  }
  public set arpTblSyncEndTsM2Nd(value: number) {
    this._arpTblSyncEndTsM2Nd = value;
  }
  public resetArpTblSyncEndTsM2Nd() {
    this._arpTblSyncEndTsM2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncEndTsM2NdInput() {
    return this._arpTblSyncEndTsM2Nd;
  }

  // arp_tbl_sync_end_ts_m_3rd - computed: false, optional: true, required: false
  private _arpTblSyncEndTsM3Rd?: number; 
  public get arpTblSyncEndTsM3Rd() {
    return this.getNumberAttribute('arp_tbl_sync_end_ts_m_3rd');
  }
  public set arpTblSyncEndTsM3Rd(value: number) {
    this._arpTblSyncEndTsM3Rd = value;
  }
  public resetArpTblSyncEndTsM3Rd() {
    this._arpTblSyncEndTsM3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncEndTsM3RdInput() {
    return this._arpTblSyncEndTsM3Rd;
  }

  // arp_tbl_sync_end_ts_m_4th - computed: false, optional: true, required: false
  private _arpTblSyncEndTsM4Th?: number; 
  public get arpTblSyncEndTsM4Th() {
    return this.getNumberAttribute('arp_tbl_sync_end_ts_m_4th');
  }
  public set arpTblSyncEndTsM4Th(value: number) {
    this._arpTblSyncEndTsM4Th = value;
  }
  public resetArpTblSyncEndTsM4Th() {
    this._arpTblSyncEndTsM4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncEndTsM4ThInput() {
    return this._arpTblSyncEndTsM4Th;
  }

  // arp_tbl_sync_end_ts_m_5th - computed: false, optional: true, required: false
  private _arpTblSyncEndTsM5Th?: number; 
  public get arpTblSyncEndTsM5Th() {
    return this.getNumberAttribute('arp_tbl_sync_end_ts_m_5th');
  }
  public set arpTblSyncEndTsM5Th(value: number) {
    this._arpTblSyncEndTsM5Th = value;
  }
  public resetArpTblSyncEndTsM5Th() {
    this._arpTblSyncEndTsM5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncEndTsM5ThInput() {
    return this._arpTblSyncEndTsM5Th;
  }

  // arp_tbl_sync_entries_added_b_1st - computed: false, optional: true, required: false
  private _arpTblSyncEntriesAddedB1St?: number; 
  public get arpTblSyncEntriesAddedB1St() {
    return this.getNumberAttribute('arp_tbl_sync_entries_added_b_1st');
  }
  public set arpTblSyncEntriesAddedB1St(value: number) {
    this._arpTblSyncEntriesAddedB1St = value;
  }
  public resetArpTblSyncEntriesAddedB1St() {
    this._arpTblSyncEntriesAddedB1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncEntriesAddedB1StInput() {
    return this._arpTblSyncEntriesAddedB1St;
  }

  // arp_tbl_sync_entries_added_b_2nd - computed: false, optional: true, required: false
  private _arpTblSyncEntriesAddedB2Nd?: number; 
  public get arpTblSyncEntriesAddedB2Nd() {
    return this.getNumberAttribute('arp_tbl_sync_entries_added_b_2nd');
  }
  public set arpTblSyncEntriesAddedB2Nd(value: number) {
    this._arpTblSyncEntriesAddedB2Nd = value;
  }
  public resetArpTblSyncEntriesAddedB2Nd() {
    this._arpTblSyncEntriesAddedB2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncEntriesAddedB2NdInput() {
    return this._arpTblSyncEntriesAddedB2Nd;
  }

  // arp_tbl_sync_entries_added_b_3rd - computed: false, optional: true, required: false
  private _arpTblSyncEntriesAddedB3Rd?: number; 
  public get arpTblSyncEntriesAddedB3Rd() {
    return this.getNumberAttribute('arp_tbl_sync_entries_added_b_3rd');
  }
  public set arpTblSyncEntriesAddedB3Rd(value: number) {
    this._arpTblSyncEntriesAddedB3Rd = value;
  }
  public resetArpTblSyncEntriesAddedB3Rd() {
    this._arpTblSyncEntriesAddedB3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncEntriesAddedB3RdInput() {
    return this._arpTblSyncEntriesAddedB3Rd;
  }

  // arp_tbl_sync_entries_added_b_4th - computed: false, optional: true, required: false
  private _arpTblSyncEntriesAddedB4Th?: number; 
  public get arpTblSyncEntriesAddedB4Th() {
    return this.getNumberAttribute('arp_tbl_sync_entries_added_b_4th');
  }
  public set arpTblSyncEntriesAddedB4Th(value: number) {
    this._arpTblSyncEntriesAddedB4Th = value;
  }
  public resetArpTblSyncEntriesAddedB4Th() {
    this._arpTblSyncEntriesAddedB4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncEntriesAddedB4ThInput() {
    return this._arpTblSyncEntriesAddedB4Th;
  }

  // arp_tbl_sync_entries_added_b_5th - computed: false, optional: true, required: false
  private _arpTblSyncEntriesAddedB5Th?: number; 
  public get arpTblSyncEntriesAddedB5Th() {
    return this.getNumberAttribute('arp_tbl_sync_entries_added_b_5th');
  }
  public set arpTblSyncEntriesAddedB5Th(value: number) {
    this._arpTblSyncEntriesAddedB5Th = value;
  }
  public resetArpTblSyncEntriesAddedB5Th() {
    this._arpTblSyncEntriesAddedB5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncEntriesAddedB5ThInput() {
    return this._arpTblSyncEntriesAddedB5Th;
  }

  // arp_tbl_sync_entries_rcvd_b_1st - computed: false, optional: true, required: false
  private _arpTblSyncEntriesRcvdB1St?: number; 
  public get arpTblSyncEntriesRcvdB1St() {
    return this.getNumberAttribute('arp_tbl_sync_entries_rcvd_b_1st');
  }
  public set arpTblSyncEntriesRcvdB1St(value: number) {
    this._arpTblSyncEntriesRcvdB1St = value;
  }
  public resetArpTblSyncEntriesRcvdB1St() {
    this._arpTblSyncEntriesRcvdB1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncEntriesRcvdB1StInput() {
    return this._arpTblSyncEntriesRcvdB1St;
  }

  // arp_tbl_sync_entries_rcvd_b_2nd - computed: false, optional: true, required: false
  private _arpTblSyncEntriesRcvdB2Nd?: number; 
  public get arpTblSyncEntriesRcvdB2Nd() {
    return this.getNumberAttribute('arp_tbl_sync_entries_rcvd_b_2nd');
  }
  public set arpTblSyncEntriesRcvdB2Nd(value: number) {
    this._arpTblSyncEntriesRcvdB2Nd = value;
  }
  public resetArpTblSyncEntriesRcvdB2Nd() {
    this._arpTblSyncEntriesRcvdB2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncEntriesRcvdB2NdInput() {
    return this._arpTblSyncEntriesRcvdB2Nd;
  }

  // arp_tbl_sync_entries_rcvd_b_3rd - computed: false, optional: true, required: false
  private _arpTblSyncEntriesRcvdB3Rd?: number; 
  public get arpTblSyncEntriesRcvdB3Rd() {
    return this.getNumberAttribute('arp_tbl_sync_entries_rcvd_b_3rd');
  }
  public set arpTblSyncEntriesRcvdB3Rd(value: number) {
    this._arpTblSyncEntriesRcvdB3Rd = value;
  }
  public resetArpTblSyncEntriesRcvdB3Rd() {
    this._arpTblSyncEntriesRcvdB3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncEntriesRcvdB3RdInput() {
    return this._arpTblSyncEntriesRcvdB3Rd;
  }

  // arp_tbl_sync_entries_rcvd_b_4th - computed: false, optional: true, required: false
  private _arpTblSyncEntriesRcvdB4Th?: number; 
  public get arpTblSyncEntriesRcvdB4Th() {
    return this.getNumberAttribute('arp_tbl_sync_entries_rcvd_b_4th');
  }
  public set arpTblSyncEntriesRcvdB4Th(value: number) {
    this._arpTblSyncEntriesRcvdB4Th = value;
  }
  public resetArpTblSyncEntriesRcvdB4Th() {
    this._arpTblSyncEntriesRcvdB4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncEntriesRcvdB4ThInput() {
    return this._arpTblSyncEntriesRcvdB4Th;
  }

  // arp_tbl_sync_entries_rcvd_b_5th - computed: false, optional: true, required: false
  private _arpTblSyncEntriesRcvdB5Th?: number; 
  public get arpTblSyncEntriesRcvdB5Th() {
    return this.getNumberAttribute('arp_tbl_sync_entries_rcvd_b_5th');
  }
  public set arpTblSyncEntriesRcvdB5Th(value: number) {
    this._arpTblSyncEntriesRcvdB5Th = value;
  }
  public resetArpTblSyncEntriesRcvdB5Th() {
    this._arpTblSyncEntriesRcvdB5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncEntriesRcvdB5ThInput() {
    return this._arpTblSyncEntriesRcvdB5Th;
  }

  // arp_tbl_sync_entries_removed_b_1st - computed: false, optional: true, required: false
  private _arpTblSyncEntriesRemovedB1St?: number; 
  public get arpTblSyncEntriesRemovedB1St() {
    return this.getNumberAttribute('arp_tbl_sync_entries_removed_b_1st');
  }
  public set arpTblSyncEntriesRemovedB1St(value: number) {
    this._arpTblSyncEntriesRemovedB1St = value;
  }
  public resetArpTblSyncEntriesRemovedB1St() {
    this._arpTblSyncEntriesRemovedB1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncEntriesRemovedB1StInput() {
    return this._arpTblSyncEntriesRemovedB1St;
  }

  // arp_tbl_sync_entries_removed_b_2nd - computed: false, optional: true, required: false
  private _arpTblSyncEntriesRemovedB2Nd?: number; 
  public get arpTblSyncEntriesRemovedB2Nd() {
    return this.getNumberAttribute('arp_tbl_sync_entries_removed_b_2nd');
  }
  public set arpTblSyncEntriesRemovedB2Nd(value: number) {
    this._arpTblSyncEntriesRemovedB2Nd = value;
  }
  public resetArpTblSyncEntriesRemovedB2Nd() {
    this._arpTblSyncEntriesRemovedB2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncEntriesRemovedB2NdInput() {
    return this._arpTblSyncEntriesRemovedB2Nd;
  }

  // arp_tbl_sync_entries_removed_b_3rd - computed: false, optional: true, required: false
  private _arpTblSyncEntriesRemovedB3Rd?: number; 
  public get arpTblSyncEntriesRemovedB3Rd() {
    return this.getNumberAttribute('arp_tbl_sync_entries_removed_b_3rd');
  }
  public set arpTblSyncEntriesRemovedB3Rd(value: number) {
    this._arpTblSyncEntriesRemovedB3Rd = value;
  }
  public resetArpTblSyncEntriesRemovedB3Rd() {
    this._arpTblSyncEntriesRemovedB3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncEntriesRemovedB3RdInput() {
    return this._arpTblSyncEntriesRemovedB3Rd;
  }

  // arp_tbl_sync_entries_removed_b_4th - computed: false, optional: true, required: false
  private _arpTblSyncEntriesRemovedB4Th?: number; 
  public get arpTblSyncEntriesRemovedB4Th() {
    return this.getNumberAttribute('arp_tbl_sync_entries_removed_b_4th');
  }
  public set arpTblSyncEntriesRemovedB4Th(value: number) {
    this._arpTblSyncEntriesRemovedB4Th = value;
  }
  public resetArpTblSyncEntriesRemovedB4Th() {
    this._arpTblSyncEntriesRemovedB4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncEntriesRemovedB4ThInput() {
    return this._arpTblSyncEntriesRemovedB4Th;
  }

  // arp_tbl_sync_entries_removed_b_5th - computed: false, optional: true, required: false
  private _arpTblSyncEntriesRemovedB5Th?: number; 
  public get arpTblSyncEntriesRemovedB5Th() {
    return this.getNumberAttribute('arp_tbl_sync_entries_removed_b_5th');
  }
  public set arpTblSyncEntriesRemovedB5Th(value: number) {
    this._arpTblSyncEntriesRemovedB5Th = value;
  }
  public resetArpTblSyncEntriesRemovedB5Th() {
    this._arpTblSyncEntriesRemovedB5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncEntriesRemovedB5ThInput() {
    return this._arpTblSyncEntriesRemovedB5Th;
  }

  // arp_tbl_sync_entries_sent_m_1st - computed: false, optional: true, required: false
  private _arpTblSyncEntriesSentM1St?: number; 
  public get arpTblSyncEntriesSentM1St() {
    return this.getNumberAttribute('arp_tbl_sync_entries_sent_m_1st');
  }
  public set arpTblSyncEntriesSentM1St(value: number) {
    this._arpTblSyncEntriesSentM1St = value;
  }
  public resetArpTblSyncEntriesSentM1St() {
    this._arpTblSyncEntriesSentM1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncEntriesSentM1StInput() {
    return this._arpTblSyncEntriesSentM1St;
  }

  // arp_tbl_sync_entries_sent_m_2nd - computed: false, optional: true, required: false
  private _arpTblSyncEntriesSentM2Nd?: number; 
  public get arpTblSyncEntriesSentM2Nd() {
    return this.getNumberAttribute('arp_tbl_sync_entries_sent_m_2nd');
  }
  public set arpTblSyncEntriesSentM2Nd(value: number) {
    this._arpTblSyncEntriesSentM2Nd = value;
  }
  public resetArpTblSyncEntriesSentM2Nd() {
    this._arpTblSyncEntriesSentM2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncEntriesSentM2NdInput() {
    return this._arpTblSyncEntriesSentM2Nd;
  }

  // arp_tbl_sync_entries_sent_m_3rd - computed: false, optional: true, required: false
  private _arpTblSyncEntriesSentM3Rd?: number; 
  public get arpTblSyncEntriesSentM3Rd() {
    return this.getNumberAttribute('arp_tbl_sync_entries_sent_m_3rd');
  }
  public set arpTblSyncEntriesSentM3Rd(value: number) {
    this._arpTblSyncEntriesSentM3Rd = value;
  }
  public resetArpTblSyncEntriesSentM3Rd() {
    this._arpTblSyncEntriesSentM3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncEntriesSentM3RdInput() {
    return this._arpTblSyncEntriesSentM3Rd;
  }

  // arp_tbl_sync_entries_sent_m_4th - computed: false, optional: true, required: false
  private _arpTblSyncEntriesSentM4Th?: number; 
  public get arpTblSyncEntriesSentM4Th() {
    return this.getNumberAttribute('arp_tbl_sync_entries_sent_m_4th');
  }
  public set arpTblSyncEntriesSentM4Th(value: number) {
    this._arpTblSyncEntriesSentM4Th = value;
  }
  public resetArpTblSyncEntriesSentM4Th() {
    this._arpTblSyncEntriesSentM4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncEntriesSentM4ThInput() {
    return this._arpTblSyncEntriesSentM4Th;
  }

  // arp_tbl_sync_entries_sent_m_5th - computed: false, optional: true, required: false
  private _arpTblSyncEntriesSentM5Th?: number; 
  public get arpTblSyncEntriesSentM5Th() {
    return this.getNumberAttribute('arp_tbl_sync_entries_sent_m_5th');
  }
  public set arpTblSyncEntriesSentM5Th(value: number) {
    this._arpTblSyncEntriesSentM5Th = value;
  }
  public resetArpTblSyncEntriesSentM5Th() {
    this._arpTblSyncEntriesSentM5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncEntriesSentM5ThInput() {
    return this._arpTblSyncEntriesSentM5Th;
  }

  // arp_tbl_sync_m - computed: false, optional: true, required: false
  private _arpTblSyncM?: number; 
  public get arpTblSyncM() {
    return this.getNumberAttribute('arp_tbl_sync_m');
  }
  public set arpTblSyncM(value: number) {
    this._arpTblSyncM = value;
  }
  public resetArpTblSyncM() {
    this._arpTblSyncM = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncMInput() {
    return this._arpTblSyncM;
  }

  // arp_tbl_sync_start_ts_b_1st - computed: false, optional: true, required: false
  private _arpTblSyncStartTsB1St?: number; 
  public get arpTblSyncStartTsB1St() {
    return this.getNumberAttribute('arp_tbl_sync_start_ts_b_1st');
  }
  public set arpTblSyncStartTsB1St(value: number) {
    this._arpTblSyncStartTsB1St = value;
  }
  public resetArpTblSyncStartTsB1St() {
    this._arpTblSyncStartTsB1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncStartTsB1StInput() {
    return this._arpTblSyncStartTsB1St;
  }

  // arp_tbl_sync_start_ts_b_2nd - computed: false, optional: true, required: false
  private _arpTblSyncStartTsB2Nd?: number; 
  public get arpTblSyncStartTsB2Nd() {
    return this.getNumberAttribute('arp_tbl_sync_start_ts_b_2nd');
  }
  public set arpTblSyncStartTsB2Nd(value: number) {
    this._arpTblSyncStartTsB2Nd = value;
  }
  public resetArpTblSyncStartTsB2Nd() {
    this._arpTblSyncStartTsB2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncStartTsB2NdInput() {
    return this._arpTblSyncStartTsB2Nd;
  }

  // arp_tbl_sync_start_ts_b_3rd - computed: false, optional: true, required: false
  private _arpTblSyncStartTsB3Rd?: number; 
  public get arpTblSyncStartTsB3Rd() {
    return this.getNumberAttribute('arp_tbl_sync_start_ts_b_3rd');
  }
  public set arpTblSyncStartTsB3Rd(value: number) {
    this._arpTblSyncStartTsB3Rd = value;
  }
  public resetArpTblSyncStartTsB3Rd() {
    this._arpTblSyncStartTsB3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncStartTsB3RdInput() {
    return this._arpTblSyncStartTsB3Rd;
  }

  // arp_tbl_sync_start_ts_b_4th - computed: false, optional: true, required: false
  private _arpTblSyncStartTsB4Th?: number; 
  public get arpTblSyncStartTsB4Th() {
    return this.getNumberAttribute('arp_tbl_sync_start_ts_b_4th');
  }
  public set arpTblSyncStartTsB4Th(value: number) {
    this._arpTblSyncStartTsB4Th = value;
  }
  public resetArpTblSyncStartTsB4Th() {
    this._arpTblSyncStartTsB4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncStartTsB4ThInput() {
    return this._arpTblSyncStartTsB4Th;
  }

  // arp_tbl_sync_start_ts_b_5th - computed: false, optional: true, required: false
  private _arpTblSyncStartTsB5Th?: number; 
  public get arpTblSyncStartTsB5Th() {
    return this.getNumberAttribute('arp_tbl_sync_start_ts_b_5th');
  }
  public set arpTblSyncStartTsB5Th(value: number) {
    this._arpTblSyncStartTsB5Th = value;
  }
  public resetArpTblSyncStartTsB5Th() {
    this._arpTblSyncStartTsB5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncStartTsB5ThInput() {
    return this._arpTblSyncStartTsB5Th;
  }

  // arp_tbl_sync_start_ts_m_1st - computed: false, optional: true, required: false
  private _arpTblSyncStartTsM1St?: number; 
  public get arpTblSyncStartTsM1St() {
    return this.getNumberAttribute('arp_tbl_sync_start_ts_m_1st');
  }
  public set arpTblSyncStartTsM1St(value: number) {
    this._arpTblSyncStartTsM1St = value;
  }
  public resetArpTblSyncStartTsM1St() {
    this._arpTblSyncStartTsM1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncStartTsM1StInput() {
    return this._arpTblSyncStartTsM1St;
  }

  // arp_tbl_sync_start_ts_m_2nd - computed: false, optional: true, required: false
  private _arpTblSyncStartTsM2Nd?: number; 
  public get arpTblSyncStartTsM2Nd() {
    return this.getNumberAttribute('arp_tbl_sync_start_ts_m_2nd');
  }
  public set arpTblSyncStartTsM2Nd(value: number) {
    this._arpTblSyncStartTsM2Nd = value;
  }
  public resetArpTblSyncStartTsM2Nd() {
    this._arpTblSyncStartTsM2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncStartTsM2NdInput() {
    return this._arpTblSyncStartTsM2Nd;
  }

  // arp_tbl_sync_start_ts_m_3rd - computed: false, optional: true, required: false
  private _arpTblSyncStartTsM3Rd?: number; 
  public get arpTblSyncStartTsM3Rd() {
    return this.getNumberAttribute('arp_tbl_sync_start_ts_m_3rd');
  }
  public set arpTblSyncStartTsM3Rd(value: number) {
    this._arpTblSyncStartTsM3Rd = value;
  }
  public resetArpTblSyncStartTsM3Rd() {
    this._arpTblSyncStartTsM3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncStartTsM3RdInput() {
    return this._arpTblSyncStartTsM3Rd;
  }

  // arp_tbl_sync_start_ts_m_4th - computed: false, optional: true, required: false
  private _arpTblSyncStartTsM4Th?: number; 
  public get arpTblSyncStartTsM4Th() {
    return this.getNumberAttribute('arp_tbl_sync_start_ts_m_4th');
  }
  public set arpTblSyncStartTsM4Th(value: number) {
    this._arpTblSyncStartTsM4Th = value;
  }
  public resetArpTblSyncStartTsM4Th() {
    this._arpTblSyncStartTsM4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncStartTsM4ThInput() {
    return this._arpTblSyncStartTsM4Th;
  }

  // arp_tbl_sync_start_ts_m_5th - computed: false, optional: true, required: false
  private _arpTblSyncStartTsM5Th?: number; 
  public get arpTblSyncStartTsM5Th() {
    return this.getNumberAttribute('arp_tbl_sync_start_ts_m_5th');
  }
  public set arpTblSyncStartTsM5Th(value: number) {
    this._arpTblSyncStartTsM5Th = value;
  }
  public resetArpTblSyncStartTsM5Th() {
    this._arpTblSyncStartTsM5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTblSyncStartTsM5ThInput() {
    return this._arpTblSyncStartTsM5Th;
  }

  // ipv4_fib_tbl_cksum_b - computed: false, optional: true, required: false
  private _ipv4FibTblCksumB?: number; 
  public get ipv4FibTblCksumB() {
    return this.getNumberAttribute('ipv4_fib_tbl_cksum_b');
  }
  public set ipv4FibTblCksumB(value: number) {
    this._ipv4FibTblCksumB = value;
  }
  public resetIpv4FibTblCksumB() {
    this._ipv4FibTblCksumB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblCksumBInput() {
    return this._ipv4FibTblCksumB;
  }

  // ipv4_fib_tbl_cksum_cancel_m - computed: false, optional: true, required: false
  private _ipv4FibTblCksumCancelM?: number; 
  public get ipv4FibTblCksumCancelM() {
    return this.getNumberAttribute('ipv4_fib_tbl_cksum_cancel_m');
  }
  public set ipv4FibTblCksumCancelM(value: number) {
    this._ipv4FibTblCksumCancelM = value;
  }
  public resetIpv4FibTblCksumCancelM() {
    this._ipv4FibTblCksumCancelM = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblCksumCancelMInput() {
    return this._ipv4FibTblCksumCancelM;
  }

  // ipv4_fib_tbl_cksum_m - computed: false, optional: true, required: false
  private _ipv4FibTblCksumM?: number; 
  public get ipv4FibTblCksumM() {
    return this.getNumberAttribute('ipv4_fib_tbl_cksum_m');
  }
  public set ipv4FibTblCksumM(value: number) {
    this._ipv4FibTblCksumM = value;
  }
  public resetIpv4FibTblCksumM() {
    this._ipv4FibTblCksumM = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblCksumMInput() {
    return this._ipv4FibTblCksumM;
  }

  // ipv4_fib_tbl_cksum_mismatch_b - computed: false, optional: true, required: false
  private _ipv4FibTblCksumMismatchB?: number; 
  public get ipv4FibTblCksumMismatchB() {
    return this.getNumberAttribute('ipv4_fib_tbl_cksum_mismatch_b');
  }
  public set ipv4FibTblCksumMismatchB(value: number) {
    this._ipv4FibTblCksumMismatchB = value;
  }
  public resetIpv4FibTblCksumMismatchB() {
    this._ipv4FibTblCksumMismatchB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblCksumMismatchBInput() {
    return this._ipv4FibTblCksumMismatchB;
  }

  // ipv4_fib_tbl_sync_b - computed: false, optional: true, required: false
  private _ipv4FibTblSyncB?: number; 
  public get ipv4FibTblSyncB() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_b');
  }
  public set ipv4FibTblSyncB(value: number) {
    this._ipv4FibTblSyncB = value;
  }
  public resetIpv4FibTblSyncB() {
    this._ipv4FibTblSyncB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncBInput() {
    return this._ipv4FibTblSyncB;
  }

  // ipv4_fib_tbl_sync_end_ts_b_1st - computed: false, optional: true, required: false
  private _ipv4FibTblSyncEndTsB1St?: number; 
  public get ipv4FibTblSyncEndTsB1St() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_end_ts_b_1st');
  }
  public set ipv4FibTblSyncEndTsB1St(value: number) {
    this._ipv4FibTblSyncEndTsB1St = value;
  }
  public resetIpv4FibTblSyncEndTsB1St() {
    this._ipv4FibTblSyncEndTsB1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncEndTsB1StInput() {
    return this._ipv4FibTblSyncEndTsB1St;
  }

  // ipv4_fib_tbl_sync_end_ts_b_2nd - computed: false, optional: true, required: false
  private _ipv4FibTblSyncEndTsB2Nd?: number; 
  public get ipv4FibTblSyncEndTsB2Nd() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_end_ts_b_2nd');
  }
  public set ipv4FibTblSyncEndTsB2Nd(value: number) {
    this._ipv4FibTblSyncEndTsB2Nd = value;
  }
  public resetIpv4FibTblSyncEndTsB2Nd() {
    this._ipv4FibTblSyncEndTsB2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncEndTsB2NdInput() {
    return this._ipv4FibTblSyncEndTsB2Nd;
  }

  // ipv4_fib_tbl_sync_end_ts_b_3rd - computed: false, optional: true, required: false
  private _ipv4FibTblSyncEndTsB3Rd?: number; 
  public get ipv4FibTblSyncEndTsB3Rd() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_end_ts_b_3rd');
  }
  public set ipv4FibTblSyncEndTsB3Rd(value: number) {
    this._ipv4FibTblSyncEndTsB3Rd = value;
  }
  public resetIpv4FibTblSyncEndTsB3Rd() {
    this._ipv4FibTblSyncEndTsB3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncEndTsB3RdInput() {
    return this._ipv4FibTblSyncEndTsB3Rd;
  }

  // ipv4_fib_tbl_sync_end_ts_b_4th - computed: false, optional: true, required: false
  private _ipv4FibTblSyncEndTsB4Th?: number; 
  public get ipv4FibTblSyncEndTsB4Th() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_end_ts_b_4th');
  }
  public set ipv4FibTblSyncEndTsB4Th(value: number) {
    this._ipv4FibTblSyncEndTsB4Th = value;
  }
  public resetIpv4FibTblSyncEndTsB4Th() {
    this._ipv4FibTblSyncEndTsB4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncEndTsB4ThInput() {
    return this._ipv4FibTblSyncEndTsB4Th;
  }

  // ipv4_fib_tbl_sync_end_ts_b_5th - computed: false, optional: true, required: false
  private _ipv4FibTblSyncEndTsB5Th?: number; 
  public get ipv4FibTblSyncEndTsB5Th() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_end_ts_b_5th');
  }
  public set ipv4FibTblSyncEndTsB5Th(value: number) {
    this._ipv4FibTblSyncEndTsB5Th = value;
  }
  public resetIpv4FibTblSyncEndTsB5Th() {
    this._ipv4FibTblSyncEndTsB5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncEndTsB5ThInput() {
    return this._ipv4FibTblSyncEndTsB5Th;
  }

  // ipv4_fib_tbl_sync_end_ts_m_1st - computed: false, optional: true, required: false
  private _ipv4FibTblSyncEndTsM1St?: number; 
  public get ipv4FibTblSyncEndTsM1St() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_end_ts_m_1st');
  }
  public set ipv4FibTblSyncEndTsM1St(value: number) {
    this._ipv4FibTblSyncEndTsM1St = value;
  }
  public resetIpv4FibTblSyncEndTsM1St() {
    this._ipv4FibTblSyncEndTsM1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncEndTsM1StInput() {
    return this._ipv4FibTblSyncEndTsM1St;
  }

  // ipv4_fib_tbl_sync_end_ts_m_2nd - computed: false, optional: true, required: false
  private _ipv4FibTblSyncEndTsM2Nd?: number; 
  public get ipv4FibTblSyncEndTsM2Nd() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_end_ts_m_2nd');
  }
  public set ipv4FibTblSyncEndTsM2Nd(value: number) {
    this._ipv4FibTblSyncEndTsM2Nd = value;
  }
  public resetIpv4FibTblSyncEndTsM2Nd() {
    this._ipv4FibTblSyncEndTsM2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncEndTsM2NdInput() {
    return this._ipv4FibTblSyncEndTsM2Nd;
  }

  // ipv4_fib_tbl_sync_end_ts_m_3rd - computed: false, optional: true, required: false
  private _ipv4FibTblSyncEndTsM3Rd?: number; 
  public get ipv4FibTblSyncEndTsM3Rd() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_end_ts_m_3rd');
  }
  public set ipv4FibTblSyncEndTsM3Rd(value: number) {
    this._ipv4FibTblSyncEndTsM3Rd = value;
  }
  public resetIpv4FibTblSyncEndTsM3Rd() {
    this._ipv4FibTblSyncEndTsM3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncEndTsM3RdInput() {
    return this._ipv4FibTblSyncEndTsM3Rd;
  }

  // ipv4_fib_tbl_sync_end_ts_m_4th - computed: false, optional: true, required: false
  private _ipv4FibTblSyncEndTsM4Th?: number; 
  public get ipv4FibTblSyncEndTsM4Th() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_end_ts_m_4th');
  }
  public set ipv4FibTblSyncEndTsM4Th(value: number) {
    this._ipv4FibTblSyncEndTsM4Th = value;
  }
  public resetIpv4FibTblSyncEndTsM4Th() {
    this._ipv4FibTblSyncEndTsM4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncEndTsM4ThInput() {
    return this._ipv4FibTblSyncEndTsM4Th;
  }

  // ipv4_fib_tbl_sync_end_ts_m_5th - computed: false, optional: true, required: false
  private _ipv4FibTblSyncEndTsM5Th?: number; 
  public get ipv4FibTblSyncEndTsM5Th() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_end_ts_m_5th');
  }
  public set ipv4FibTblSyncEndTsM5Th(value: number) {
    this._ipv4FibTblSyncEndTsM5Th = value;
  }
  public resetIpv4FibTblSyncEndTsM5Th() {
    this._ipv4FibTblSyncEndTsM5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncEndTsM5ThInput() {
    return this._ipv4FibTblSyncEndTsM5Th;
  }

  // ipv4_fib_tbl_sync_entries_added_b_1st - computed: false, optional: true, required: false
  private _ipv4FibTblSyncEntriesAddedB1St?: number; 
  public get ipv4FibTblSyncEntriesAddedB1St() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_entries_added_b_1st');
  }
  public set ipv4FibTblSyncEntriesAddedB1St(value: number) {
    this._ipv4FibTblSyncEntriesAddedB1St = value;
  }
  public resetIpv4FibTblSyncEntriesAddedB1St() {
    this._ipv4FibTblSyncEntriesAddedB1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncEntriesAddedB1StInput() {
    return this._ipv4FibTblSyncEntriesAddedB1St;
  }

  // ipv4_fib_tbl_sync_entries_added_b_2nd - computed: false, optional: true, required: false
  private _ipv4FibTblSyncEntriesAddedB2Nd?: number; 
  public get ipv4FibTblSyncEntriesAddedB2Nd() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_entries_added_b_2nd');
  }
  public set ipv4FibTblSyncEntriesAddedB2Nd(value: number) {
    this._ipv4FibTblSyncEntriesAddedB2Nd = value;
  }
  public resetIpv4FibTblSyncEntriesAddedB2Nd() {
    this._ipv4FibTblSyncEntriesAddedB2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncEntriesAddedB2NdInput() {
    return this._ipv4FibTblSyncEntriesAddedB2Nd;
  }

  // ipv4_fib_tbl_sync_entries_added_b_3rd - computed: false, optional: true, required: false
  private _ipv4FibTblSyncEntriesAddedB3Rd?: number; 
  public get ipv4FibTblSyncEntriesAddedB3Rd() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_entries_added_b_3rd');
  }
  public set ipv4FibTblSyncEntriesAddedB3Rd(value: number) {
    this._ipv4FibTblSyncEntriesAddedB3Rd = value;
  }
  public resetIpv4FibTblSyncEntriesAddedB3Rd() {
    this._ipv4FibTblSyncEntriesAddedB3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncEntriesAddedB3RdInput() {
    return this._ipv4FibTblSyncEntriesAddedB3Rd;
  }

  // ipv4_fib_tbl_sync_entries_added_b_4th - computed: false, optional: true, required: false
  private _ipv4FibTblSyncEntriesAddedB4Th?: number; 
  public get ipv4FibTblSyncEntriesAddedB4Th() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_entries_added_b_4th');
  }
  public set ipv4FibTblSyncEntriesAddedB4Th(value: number) {
    this._ipv4FibTblSyncEntriesAddedB4Th = value;
  }
  public resetIpv4FibTblSyncEntriesAddedB4Th() {
    this._ipv4FibTblSyncEntriesAddedB4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncEntriesAddedB4ThInput() {
    return this._ipv4FibTblSyncEntriesAddedB4Th;
  }

  // ipv4_fib_tbl_sync_entries_added_b_5th - computed: false, optional: true, required: false
  private _ipv4FibTblSyncEntriesAddedB5Th?: number; 
  public get ipv4FibTblSyncEntriesAddedB5Th() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_entries_added_b_5th');
  }
  public set ipv4FibTblSyncEntriesAddedB5Th(value: number) {
    this._ipv4FibTblSyncEntriesAddedB5Th = value;
  }
  public resetIpv4FibTblSyncEntriesAddedB5Th() {
    this._ipv4FibTblSyncEntriesAddedB5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncEntriesAddedB5ThInput() {
    return this._ipv4FibTblSyncEntriesAddedB5Th;
  }

  // ipv4_fib_tbl_sync_entries_rcvd_b_1st - computed: false, optional: true, required: false
  private _ipv4FibTblSyncEntriesRcvdB1St?: number; 
  public get ipv4FibTblSyncEntriesRcvdB1St() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_entries_rcvd_b_1st');
  }
  public set ipv4FibTblSyncEntriesRcvdB1St(value: number) {
    this._ipv4FibTblSyncEntriesRcvdB1St = value;
  }
  public resetIpv4FibTblSyncEntriesRcvdB1St() {
    this._ipv4FibTblSyncEntriesRcvdB1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncEntriesRcvdB1StInput() {
    return this._ipv4FibTblSyncEntriesRcvdB1St;
  }

  // ipv4_fib_tbl_sync_entries_rcvd_b_2nd - computed: false, optional: true, required: false
  private _ipv4FibTblSyncEntriesRcvdB2Nd?: number; 
  public get ipv4FibTblSyncEntriesRcvdB2Nd() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_entries_rcvd_b_2nd');
  }
  public set ipv4FibTblSyncEntriesRcvdB2Nd(value: number) {
    this._ipv4FibTblSyncEntriesRcvdB2Nd = value;
  }
  public resetIpv4FibTblSyncEntriesRcvdB2Nd() {
    this._ipv4FibTblSyncEntriesRcvdB2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncEntriesRcvdB2NdInput() {
    return this._ipv4FibTblSyncEntriesRcvdB2Nd;
  }

  // ipv4_fib_tbl_sync_entries_rcvd_b_3rd - computed: false, optional: true, required: false
  private _ipv4FibTblSyncEntriesRcvdB3Rd?: number; 
  public get ipv4FibTblSyncEntriesRcvdB3Rd() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_entries_rcvd_b_3rd');
  }
  public set ipv4FibTblSyncEntriesRcvdB3Rd(value: number) {
    this._ipv4FibTblSyncEntriesRcvdB3Rd = value;
  }
  public resetIpv4FibTblSyncEntriesRcvdB3Rd() {
    this._ipv4FibTblSyncEntriesRcvdB3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncEntriesRcvdB3RdInput() {
    return this._ipv4FibTblSyncEntriesRcvdB3Rd;
  }

  // ipv4_fib_tbl_sync_entries_rcvd_b_4th - computed: false, optional: true, required: false
  private _ipv4FibTblSyncEntriesRcvdB4Th?: number; 
  public get ipv4FibTblSyncEntriesRcvdB4Th() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_entries_rcvd_b_4th');
  }
  public set ipv4FibTblSyncEntriesRcvdB4Th(value: number) {
    this._ipv4FibTblSyncEntriesRcvdB4Th = value;
  }
  public resetIpv4FibTblSyncEntriesRcvdB4Th() {
    this._ipv4FibTblSyncEntriesRcvdB4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncEntriesRcvdB4ThInput() {
    return this._ipv4FibTblSyncEntriesRcvdB4Th;
  }

  // ipv4_fib_tbl_sync_entries_rcvd_b_5th - computed: false, optional: true, required: false
  private _ipv4FibTblSyncEntriesRcvdB5Th?: number; 
  public get ipv4FibTblSyncEntriesRcvdB5Th() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_entries_rcvd_b_5th');
  }
  public set ipv4FibTblSyncEntriesRcvdB5Th(value: number) {
    this._ipv4FibTblSyncEntriesRcvdB5Th = value;
  }
  public resetIpv4FibTblSyncEntriesRcvdB5Th() {
    this._ipv4FibTblSyncEntriesRcvdB5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncEntriesRcvdB5ThInput() {
    return this._ipv4FibTblSyncEntriesRcvdB5Th;
  }

  // ipv4_fib_tbl_sync_entries_removed_b_1st - computed: false, optional: true, required: false
  private _ipv4FibTblSyncEntriesRemovedB1St?: number; 
  public get ipv4FibTblSyncEntriesRemovedB1St() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_entries_removed_b_1st');
  }
  public set ipv4FibTblSyncEntriesRemovedB1St(value: number) {
    this._ipv4FibTblSyncEntriesRemovedB1St = value;
  }
  public resetIpv4FibTblSyncEntriesRemovedB1St() {
    this._ipv4FibTblSyncEntriesRemovedB1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncEntriesRemovedB1StInput() {
    return this._ipv4FibTblSyncEntriesRemovedB1St;
  }

  // ipv4_fib_tbl_sync_entries_removed_b_2nd - computed: false, optional: true, required: false
  private _ipv4FibTblSyncEntriesRemovedB2Nd?: number; 
  public get ipv4FibTblSyncEntriesRemovedB2Nd() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_entries_removed_b_2nd');
  }
  public set ipv4FibTblSyncEntriesRemovedB2Nd(value: number) {
    this._ipv4FibTblSyncEntriesRemovedB2Nd = value;
  }
  public resetIpv4FibTblSyncEntriesRemovedB2Nd() {
    this._ipv4FibTblSyncEntriesRemovedB2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncEntriesRemovedB2NdInput() {
    return this._ipv4FibTblSyncEntriesRemovedB2Nd;
  }

  // ipv4_fib_tbl_sync_entries_removed_b_3rd - computed: false, optional: true, required: false
  private _ipv4FibTblSyncEntriesRemovedB3Rd?: number; 
  public get ipv4FibTblSyncEntriesRemovedB3Rd() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_entries_removed_b_3rd');
  }
  public set ipv4FibTblSyncEntriesRemovedB3Rd(value: number) {
    this._ipv4FibTblSyncEntriesRemovedB3Rd = value;
  }
  public resetIpv4FibTblSyncEntriesRemovedB3Rd() {
    this._ipv4FibTblSyncEntriesRemovedB3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncEntriesRemovedB3RdInput() {
    return this._ipv4FibTblSyncEntriesRemovedB3Rd;
  }

  // ipv4_fib_tbl_sync_entries_removed_b_4th - computed: false, optional: true, required: false
  private _ipv4FibTblSyncEntriesRemovedB4Th?: number; 
  public get ipv4FibTblSyncEntriesRemovedB4Th() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_entries_removed_b_4th');
  }
  public set ipv4FibTblSyncEntriesRemovedB4Th(value: number) {
    this._ipv4FibTblSyncEntriesRemovedB4Th = value;
  }
  public resetIpv4FibTblSyncEntriesRemovedB4Th() {
    this._ipv4FibTblSyncEntriesRemovedB4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncEntriesRemovedB4ThInput() {
    return this._ipv4FibTblSyncEntriesRemovedB4Th;
  }

  // ipv4_fib_tbl_sync_entries_removed_b_5th - computed: false, optional: true, required: false
  private _ipv4FibTblSyncEntriesRemovedB5Th?: number; 
  public get ipv4FibTblSyncEntriesRemovedB5Th() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_entries_removed_b_5th');
  }
  public set ipv4FibTblSyncEntriesRemovedB5Th(value: number) {
    this._ipv4FibTblSyncEntriesRemovedB5Th = value;
  }
  public resetIpv4FibTblSyncEntriesRemovedB5Th() {
    this._ipv4FibTblSyncEntriesRemovedB5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncEntriesRemovedB5ThInput() {
    return this._ipv4FibTblSyncEntriesRemovedB5Th;
  }

  // ipv4_fib_tbl_sync_entries_sent_m_1st - computed: false, optional: true, required: false
  private _ipv4FibTblSyncEntriesSentM1St?: number; 
  public get ipv4FibTblSyncEntriesSentM1St() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_entries_sent_m_1st');
  }
  public set ipv4FibTblSyncEntriesSentM1St(value: number) {
    this._ipv4FibTblSyncEntriesSentM1St = value;
  }
  public resetIpv4FibTblSyncEntriesSentM1St() {
    this._ipv4FibTblSyncEntriesSentM1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncEntriesSentM1StInput() {
    return this._ipv4FibTblSyncEntriesSentM1St;
  }

  // ipv4_fib_tbl_sync_entries_sent_m_2nd - computed: false, optional: true, required: false
  private _ipv4FibTblSyncEntriesSentM2Nd?: number; 
  public get ipv4FibTblSyncEntriesSentM2Nd() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_entries_sent_m_2nd');
  }
  public set ipv4FibTblSyncEntriesSentM2Nd(value: number) {
    this._ipv4FibTblSyncEntriesSentM2Nd = value;
  }
  public resetIpv4FibTblSyncEntriesSentM2Nd() {
    this._ipv4FibTblSyncEntriesSentM2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncEntriesSentM2NdInput() {
    return this._ipv4FibTblSyncEntriesSentM2Nd;
  }

  // ipv4_fib_tbl_sync_entries_sent_m_3rd - computed: false, optional: true, required: false
  private _ipv4FibTblSyncEntriesSentM3Rd?: number; 
  public get ipv4FibTblSyncEntriesSentM3Rd() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_entries_sent_m_3rd');
  }
  public set ipv4FibTblSyncEntriesSentM3Rd(value: number) {
    this._ipv4FibTblSyncEntriesSentM3Rd = value;
  }
  public resetIpv4FibTblSyncEntriesSentM3Rd() {
    this._ipv4FibTblSyncEntriesSentM3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncEntriesSentM3RdInput() {
    return this._ipv4FibTblSyncEntriesSentM3Rd;
  }

  // ipv4_fib_tbl_sync_entries_sent_m_4th - computed: false, optional: true, required: false
  private _ipv4FibTblSyncEntriesSentM4Th?: number; 
  public get ipv4FibTblSyncEntriesSentM4Th() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_entries_sent_m_4th');
  }
  public set ipv4FibTblSyncEntriesSentM4Th(value: number) {
    this._ipv4FibTblSyncEntriesSentM4Th = value;
  }
  public resetIpv4FibTblSyncEntriesSentM4Th() {
    this._ipv4FibTblSyncEntriesSentM4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncEntriesSentM4ThInput() {
    return this._ipv4FibTblSyncEntriesSentM4Th;
  }

  // ipv4_fib_tbl_sync_entries_sent_m_5th - computed: false, optional: true, required: false
  private _ipv4FibTblSyncEntriesSentM5Th?: number; 
  public get ipv4FibTblSyncEntriesSentM5Th() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_entries_sent_m_5th');
  }
  public set ipv4FibTblSyncEntriesSentM5Th(value: number) {
    this._ipv4FibTblSyncEntriesSentM5Th = value;
  }
  public resetIpv4FibTblSyncEntriesSentM5Th() {
    this._ipv4FibTblSyncEntriesSentM5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncEntriesSentM5ThInput() {
    return this._ipv4FibTblSyncEntriesSentM5Th;
  }

  // ipv4_fib_tbl_sync_m - computed: false, optional: true, required: false
  private _ipv4FibTblSyncM?: number; 
  public get ipv4FibTblSyncM() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_m');
  }
  public set ipv4FibTblSyncM(value: number) {
    this._ipv4FibTblSyncM = value;
  }
  public resetIpv4FibTblSyncM() {
    this._ipv4FibTblSyncM = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncMInput() {
    return this._ipv4FibTblSyncM;
  }

  // ipv4_fib_tbl_sync_start_ts_b_1st - computed: false, optional: true, required: false
  private _ipv4FibTblSyncStartTsB1St?: number; 
  public get ipv4FibTblSyncStartTsB1St() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_start_ts_b_1st');
  }
  public set ipv4FibTblSyncStartTsB1St(value: number) {
    this._ipv4FibTblSyncStartTsB1St = value;
  }
  public resetIpv4FibTblSyncStartTsB1St() {
    this._ipv4FibTblSyncStartTsB1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncStartTsB1StInput() {
    return this._ipv4FibTblSyncStartTsB1St;
  }

  // ipv4_fib_tbl_sync_start_ts_b_2nd - computed: false, optional: true, required: false
  private _ipv4FibTblSyncStartTsB2Nd?: number; 
  public get ipv4FibTblSyncStartTsB2Nd() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_start_ts_b_2nd');
  }
  public set ipv4FibTblSyncStartTsB2Nd(value: number) {
    this._ipv4FibTblSyncStartTsB2Nd = value;
  }
  public resetIpv4FibTblSyncStartTsB2Nd() {
    this._ipv4FibTblSyncStartTsB2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncStartTsB2NdInput() {
    return this._ipv4FibTblSyncStartTsB2Nd;
  }

  // ipv4_fib_tbl_sync_start_ts_b_3rd - computed: false, optional: true, required: false
  private _ipv4FibTblSyncStartTsB3Rd?: number; 
  public get ipv4FibTblSyncStartTsB3Rd() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_start_ts_b_3rd');
  }
  public set ipv4FibTblSyncStartTsB3Rd(value: number) {
    this._ipv4FibTblSyncStartTsB3Rd = value;
  }
  public resetIpv4FibTblSyncStartTsB3Rd() {
    this._ipv4FibTblSyncStartTsB3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncStartTsB3RdInput() {
    return this._ipv4FibTblSyncStartTsB3Rd;
  }

  // ipv4_fib_tbl_sync_start_ts_b_4th - computed: false, optional: true, required: false
  private _ipv4FibTblSyncStartTsB4Th?: number; 
  public get ipv4FibTblSyncStartTsB4Th() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_start_ts_b_4th');
  }
  public set ipv4FibTblSyncStartTsB4Th(value: number) {
    this._ipv4FibTblSyncStartTsB4Th = value;
  }
  public resetIpv4FibTblSyncStartTsB4Th() {
    this._ipv4FibTblSyncStartTsB4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncStartTsB4ThInput() {
    return this._ipv4FibTblSyncStartTsB4Th;
  }

  // ipv4_fib_tbl_sync_start_ts_b_5th - computed: false, optional: true, required: false
  private _ipv4FibTblSyncStartTsB5Th?: number; 
  public get ipv4FibTblSyncStartTsB5Th() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_start_ts_b_5th');
  }
  public set ipv4FibTblSyncStartTsB5Th(value: number) {
    this._ipv4FibTblSyncStartTsB5Th = value;
  }
  public resetIpv4FibTblSyncStartTsB5Th() {
    this._ipv4FibTblSyncStartTsB5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncStartTsB5ThInput() {
    return this._ipv4FibTblSyncStartTsB5Th;
  }

  // ipv4_fib_tbl_sync_start_ts_m_1st - computed: false, optional: true, required: false
  private _ipv4FibTblSyncStartTsM1St?: number; 
  public get ipv4FibTblSyncStartTsM1St() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_start_ts_m_1st');
  }
  public set ipv4FibTblSyncStartTsM1St(value: number) {
    this._ipv4FibTblSyncStartTsM1St = value;
  }
  public resetIpv4FibTblSyncStartTsM1St() {
    this._ipv4FibTblSyncStartTsM1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncStartTsM1StInput() {
    return this._ipv4FibTblSyncStartTsM1St;
  }

  // ipv4_fib_tbl_sync_start_ts_m_2nd - computed: false, optional: true, required: false
  private _ipv4FibTblSyncStartTsM2Nd?: number; 
  public get ipv4FibTblSyncStartTsM2Nd() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_start_ts_m_2nd');
  }
  public set ipv4FibTblSyncStartTsM2Nd(value: number) {
    this._ipv4FibTblSyncStartTsM2Nd = value;
  }
  public resetIpv4FibTblSyncStartTsM2Nd() {
    this._ipv4FibTblSyncStartTsM2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncStartTsM2NdInput() {
    return this._ipv4FibTblSyncStartTsM2Nd;
  }

  // ipv4_fib_tbl_sync_start_ts_m_3rd - computed: false, optional: true, required: false
  private _ipv4FibTblSyncStartTsM3Rd?: number; 
  public get ipv4FibTblSyncStartTsM3Rd() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_start_ts_m_3rd');
  }
  public set ipv4FibTblSyncStartTsM3Rd(value: number) {
    this._ipv4FibTblSyncStartTsM3Rd = value;
  }
  public resetIpv4FibTblSyncStartTsM3Rd() {
    this._ipv4FibTblSyncStartTsM3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncStartTsM3RdInput() {
    return this._ipv4FibTblSyncStartTsM3Rd;
  }

  // ipv4_fib_tbl_sync_start_ts_m_4th - computed: false, optional: true, required: false
  private _ipv4FibTblSyncStartTsM4Th?: number; 
  public get ipv4FibTblSyncStartTsM4Th() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_start_ts_m_4th');
  }
  public set ipv4FibTblSyncStartTsM4Th(value: number) {
    this._ipv4FibTblSyncStartTsM4Th = value;
  }
  public resetIpv4FibTblSyncStartTsM4Th() {
    this._ipv4FibTblSyncStartTsM4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncStartTsM4ThInput() {
    return this._ipv4FibTblSyncStartTsM4Th;
  }

  // ipv4_fib_tbl_sync_start_ts_m_5th - computed: false, optional: true, required: false
  private _ipv4FibTblSyncStartTsM5Th?: number; 
  public get ipv4FibTblSyncStartTsM5Th() {
    return this.getNumberAttribute('ipv4_fib_tbl_sync_start_ts_m_5th');
  }
  public set ipv4FibTblSyncStartTsM5Th(value: number) {
    this._ipv4FibTblSyncStartTsM5Th = value;
  }
  public resetIpv4FibTblSyncStartTsM5Th() {
    this._ipv4FibTblSyncStartTsM5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FibTblSyncStartTsM5ThInput() {
    return this._ipv4FibTblSyncStartTsM5Th;
  }

  // ipv6_fib_tbl_cksum_b - computed: false, optional: true, required: false
  private _ipv6FibTblCksumB?: number; 
  public get ipv6FibTblCksumB() {
    return this.getNumberAttribute('ipv6_fib_tbl_cksum_b');
  }
  public set ipv6FibTblCksumB(value: number) {
    this._ipv6FibTblCksumB = value;
  }
  public resetIpv6FibTblCksumB() {
    this._ipv6FibTblCksumB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblCksumBInput() {
    return this._ipv6FibTblCksumB;
  }

  // ipv6_fib_tbl_cksum_cancel_m - computed: false, optional: true, required: false
  private _ipv6FibTblCksumCancelM?: number; 
  public get ipv6FibTblCksumCancelM() {
    return this.getNumberAttribute('ipv6_fib_tbl_cksum_cancel_m');
  }
  public set ipv6FibTblCksumCancelM(value: number) {
    this._ipv6FibTblCksumCancelM = value;
  }
  public resetIpv6FibTblCksumCancelM() {
    this._ipv6FibTblCksumCancelM = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblCksumCancelMInput() {
    return this._ipv6FibTblCksumCancelM;
  }

  // ipv6_fib_tbl_cksum_m - computed: false, optional: true, required: false
  private _ipv6FibTblCksumM?: number; 
  public get ipv6FibTblCksumM() {
    return this.getNumberAttribute('ipv6_fib_tbl_cksum_m');
  }
  public set ipv6FibTblCksumM(value: number) {
    this._ipv6FibTblCksumM = value;
  }
  public resetIpv6FibTblCksumM() {
    this._ipv6FibTblCksumM = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblCksumMInput() {
    return this._ipv6FibTblCksumM;
  }

  // ipv6_fib_tbl_cksum_mismatch_b - computed: false, optional: true, required: false
  private _ipv6FibTblCksumMismatchB?: number; 
  public get ipv6FibTblCksumMismatchB() {
    return this.getNumberAttribute('ipv6_fib_tbl_cksum_mismatch_b');
  }
  public set ipv6FibTblCksumMismatchB(value: number) {
    this._ipv6FibTblCksumMismatchB = value;
  }
  public resetIpv6FibTblCksumMismatchB() {
    this._ipv6FibTblCksumMismatchB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblCksumMismatchBInput() {
    return this._ipv6FibTblCksumMismatchB;
  }

  // ipv6_fib_tbl_sync_b - computed: false, optional: true, required: false
  private _ipv6FibTblSyncB?: number; 
  public get ipv6FibTblSyncB() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_b');
  }
  public set ipv6FibTblSyncB(value: number) {
    this._ipv6FibTblSyncB = value;
  }
  public resetIpv6FibTblSyncB() {
    this._ipv6FibTblSyncB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncBInput() {
    return this._ipv6FibTblSyncB;
  }

  // ipv6_fib_tbl_sync_end_ts_b_1st - computed: false, optional: true, required: false
  private _ipv6FibTblSyncEndTsB1St?: number; 
  public get ipv6FibTblSyncEndTsB1St() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_end_ts_b_1st');
  }
  public set ipv6FibTblSyncEndTsB1St(value: number) {
    this._ipv6FibTblSyncEndTsB1St = value;
  }
  public resetIpv6FibTblSyncEndTsB1St() {
    this._ipv6FibTblSyncEndTsB1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncEndTsB1StInput() {
    return this._ipv6FibTblSyncEndTsB1St;
  }

  // ipv6_fib_tbl_sync_end_ts_b_2nd - computed: false, optional: true, required: false
  private _ipv6FibTblSyncEndTsB2Nd?: number; 
  public get ipv6FibTblSyncEndTsB2Nd() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_end_ts_b_2nd');
  }
  public set ipv6FibTblSyncEndTsB2Nd(value: number) {
    this._ipv6FibTblSyncEndTsB2Nd = value;
  }
  public resetIpv6FibTblSyncEndTsB2Nd() {
    this._ipv6FibTblSyncEndTsB2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncEndTsB2NdInput() {
    return this._ipv6FibTblSyncEndTsB2Nd;
  }

  // ipv6_fib_tbl_sync_end_ts_b_3rd - computed: false, optional: true, required: false
  private _ipv6FibTblSyncEndTsB3Rd?: number; 
  public get ipv6FibTblSyncEndTsB3Rd() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_end_ts_b_3rd');
  }
  public set ipv6FibTblSyncEndTsB3Rd(value: number) {
    this._ipv6FibTblSyncEndTsB3Rd = value;
  }
  public resetIpv6FibTblSyncEndTsB3Rd() {
    this._ipv6FibTblSyncEndTsB3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncEndTsB3RdInput() {
    return this._ipv6FibTblSyncEndTsB3Rd;
  }

  // ipv6_fib_tbl_sync_end_ts_b_4th - computed: false, optional: true, required: false
  private _ipv6FibTblSyncEndTsB4Th?: number; 
  public get ipv6FibTblSyncEndTsB4Th() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_end_ts_b_4th');
  }
  public set ipv6FibTblSyncEndTsB4Th(value: number) {
    this._ipv6FibTblSyncEndTsB4Th = value;
  }
  public resetIpv6FibTblSyncEndTsB4Th() {
    this._ipv6FibTblSyncEndTsB4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncEndTsB4ThInput() {
    return this._ipv6FibTblSyncEndTsB4Th;
  }

  // ipv6_fib_tbl_sync_end_ts_b_5th - computed: false, optional: true, required: false
  private _ipv6FibTblSyncEndTsB5Th?: number; 
  public get ipv6FibTblSyncEndTsB5Th() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_end_ts_b_5th');
  }
  public set ipv6FibTblSyncEndTsB5Th(value: number) {
    this._ipv6FibTblSyncEndTsB5Th = value;
  }
  public resetIpv6FibTblSyncEndTsB5Th() {
    this._ipv6FibTblSyncEndTsB5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncEndTsB5ThInput() {
    return this._ipv6FibTblSyncEndTsB5Th;
  }

  // ipv6_fib_tbl_sync_end_ts_m_1st - computed: false, optional: true, required: false
  private _ipv6FibTblSyncEndTsM1St?: number; 
  public get ipv6FibTblSyncEndTsM1St() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_end_ts_m_1st');
  }
  public set ipv6FibTblSyncEndTsM1St(value: number) {
    this._ipv6FibTblSyncEndTsM1St = value;
  }
  public resetIpv6FibTblSyncEndTsM1St() {
    this._ipv6FibTblSyncEndTsM1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncEndTsM1StInput() {
    return this._ipv6FibTblSyncEndTsM1St;
  }

  // ipv6_fib_tbl_sync_end_ts_m_2nd - computed: false, optional: true, required: false
  private _ipv6FibTblSyncEndTsM2Nd?: number; 
  public get ipv6FibTblSyncEndTsM2Nd() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_end_ts_m_2nd');
  }
  public set ipv6FibTblSyncEndTsM2Nd(value: number) {
    this._ipv6FibTblSyncEndTsM2Nd = value;
  }
  public resetIpv6FibTblSyncEndTsM2Nd() {
    this._ipv6FibTblSyncEndTsM2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncEndTsM2NdInput() {
    return this._ipv6FibTblSyncEndTsM2Nd;
  }

  // ipv6_fib_tbl_sync_end_ts_m_3rd - computed: false, optional: true, required: false
  private _ipv6FibTblSyncEndTsM3Rd?: number; 
  public get ipv6FibTblSyncEndTsM3Rd() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_end_ts_m_3rd');
  }
  public set ipv6FibTblSyncEndTsM3Rd(value: number) {
    this._ipv6FibTblSyncEndTsM3Rd = value;
  }
  public resetIpv6FibTblSyncEndTsM3Rd() {
    this._ipv6FibTblSyncEndTsM3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncEndTsM3RdInput() {
    return this._ipv6FibTblSyncEndTsM3Rd;
  }

  // ipv6_fib_tbl_sync_end_ts_m_4th - computed: false, optional: true, required: false
  private _ipv6FibTblSyncEndTsM4Th?: number; 
  public get ipv6FibTblSyncEndTsM4Th() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_end_ts_m_4th');
  }
  public set ipv6FibTblSyncEndTsM4Th(value: number) {
    this._ipv6FibTblSyncEndTsM4Th = value;
  }
  public resetIpv6FibTblSyncEndTsM4Th() {
    this._ipv6FibTblSyncEndTsM4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncEndTsM4ThInput() {
    return this._ipv6FibTblSyncEndTsM4Th;
  }

  // ipv6_fib_tbl_sync_end_ts_m_5th - computed: false, optional: true, required: false
  private _ipv6FibTblSyncEndTsM5Th?: number; 
  public get ipv6FibTblSyncEndTsM5Th() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_end_ts_m_5th');
  }
  public set ipv6FibTblSyncEndTsM5Th(value: number) {
    this._ipv6FibTblSyncEndTsM5Th = value;
  }
  public resetIpv6FibTblSyncEndTsM5Th() {
    this._ipv6FibTblSyncEndTsM5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncEndTsM5ThInput() {
    return this._ipv6FibTblSyncEndTsM5Th;
  }

  // ipv6_fib_tbl_sync_entries_added_b_1st - computed: false, optional: true, required: false
  private _ipv6FibTblSyncEntriesAddedB1St?: number; 
  public get ipv6FibTblSyncEntriesAddedB1St() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_entries_added_b_1st');
  }
  public set ipv6FibTblSyncEntriesAddedB1St(value: number) {
    this._ipv6FibTblSyncEntriesAddedB1St = value;
  }
  public resetIpv6FibTblSyncEntriesAddedB1St() {
    this._ipv6FibTblSyncEntriesAddedB1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncEntriesAddedB1StInput() {
    return this._ipv6FibTblSyncEntriesAddedB1St;
  }

  // ipv6_fib_tbl_sync_entries_added_b_2nd - computed: false, optional: true, required: false
  private _ipv6FibTblSyncEntriesAddedB2Nd?: number; 
  public get ipv6FibTblSyncEntriesAddedB2Nd() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_entries_added_b_2nd');
  }
  public set ipv6FibTblSyncEntriesAddedB2Nd(value: number) {
    this._ipv6FibTblSyncEntriesAddedB2Nd = value;
  }
  public resetIpv6FibTblSyncEntriesAddedB2Nd() {
    this._ipv6FibTblSyncEntriesAddedB2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncEntriesAddedB2NdInput() {
    return this._ipv6FibTblSyncEntriesAddedB2Nd;
  }

  // ipv6_fib_tbl_sync_entries_added_b_3rd - computed: false, optional: true, required: false
  private _ipv6FibTblSyncEntriesAddedB3Rd?: number; 
  public get ipv6FibTblSyncEntriesAddedB3Rd() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_entries_added_b_3rd');
  }
  public set ipv6FibTblSyncEntriesAddedB3Rd(value: number) {
    this._ipv6FibTblSyncEntriesAddedB3Rd = value;
  }
  public resetIpv6FibTblSyncEntriesAddedB3Rd() {
    this._ipv6FibTblSyncEntriesAddedB3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncEntriesAddedB3RdInput() {
    return this._ipv6FibTblSyncEntriesAddedB3Rd;
  }

  // ipv6_fib_tbl_sync_entries_added_b_4th - computed: false, optional: true, required: false
  private _ipv6FibTblSyncEntriesAddedB4Th?: number; 
  public get ipv6FibTblSyncEntriesAddedB4Th() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_entries_added_b_4th');
  }
  public set ipv6FibTblSyncEntriesAddedB4Th(value: number) {
    this._ipv6FibTblSyncEntriesAddedB4Th = value;
  }
  public resetIpv6FibTblSyncEntriesAddedB4Th() {
    this._ipv6FibTblSyncEntriesAddedB4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncEntriesAddedB4ThInput() {
    return this._ipv6FibTblSyncEntriesAddedB4Th;
  }

  // ipv6_fib_tbl_sync_entries_added_b_5th - computed: false, optional: true, required: false
  private _ipv6FibTblSyncEntriesAddedB5Th?: number; 
  public get ipv6FibTblSyncEntriesAddedB5Th() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_entries_added_b_5th');
  }
  public set ipv6FibTblSyncEntriesAddedB5Th(value: number) {
    this._ipv6FibTblSyncEntriesAddedB5Th = value;
  }
  public resetIpv6FibTblSyncEntriesAddedB5Th() {
    this._ipv6FibTblSyncEntriesAddedB5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncEntriesAddedB5ThInput() {
    return this._ipv6FibTblSyncEntriesAddedB5Th;
  }

  // ipv6_fib_tbl_sync_entries_rcvd_b_1st - computed: false, optional: true, required: false
  private _ipv6FibTblSyncEntriesRcvdB1St?: number; 
  public get ipv6FibTblSyncEntriesRcvdB1St() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_entries_rcvd_b_1st');
  }
  public set ipv6FibTblSyncEntriesRcvdB1St(value: number) {
    this._ipv6FibTblSyncEntriesRcvdB1St = value;
  }
  public resetIpv6FibTblSyncEntriesRcvdB1St() {
    this._ipv6FibTblSyncEntriesRcvdB1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncEntriesRcvdB1StInput() {
    return this._ipv6FibTblSyncEntriesRcvdB1St;
  }

  // ipv6_fib_tbl_sync_entries_rcvd_b_2nd - computed: false, optional: true, required: false
  private _ipv6FibTblSyncEntriesRcvdB2Nd?: number; 
  public get ipv6FibTblSyncEntriesRcvdB2Nd() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_entries_rcvd_b_2nd');
  }
  public set ipv6FibTblSyncEntriesRcvdB2Nd(value: number) {
    this._ipv6FibTblSyncEntriesRcvdB2Nd = value;
  }
  public resetIpv6FibTblSyncEntriesRcvdB2Nd() {
    this._ipv6FibTblSyncEntriesRcvdB2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncEntriesRcvdB2NdInput() {
    return this._ipv6FibTblSyncEntriesRcvdB2Nd;
  }

  // ipv6_fib_tbl_sync_entries_rcvd_b_3rd - computed: false, optional: true, required: false
  private _ipv6FibTblSyncEntriesRcvdB3Rd?: number; 
  public get ipv6FibTblSyncEntriesRcvdB3Rd() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_entries_rcvd_b_3rd');
  }
  public set ipv6FibTblSyncEntriesRcvdB3Rd(value: number) {
    this._ipv6FibTblSyncEntriesRcvdB3Rd = value;
  }
  public resetIpv6FibTblSyncEntriesRcvdB3Rd() {
    this._ipv6FibTblSyncEntriesRcvdB3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncEntriesRcvdB3RdInput() {
    return this._ipv6FibTblSyncEntriesRcvdB3Rd;
  }

  // ipv6_fib_tbl_sync_entries_rcvd_b_4th - computed: false, optional: true, required: false
  private _ipv6FibTblSyncEntriesRcvdB4Th?: number; 
  public get ipv6FibTblSyncEntriesRcvdB4Th() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_entries_rcvd_b_4th');
  }
  public set ipv6FibTblSyncEntriesRcvdB4Th(value: number) {
    this._ipv6FibTblSyncEntriesRcvdB4Th = value;
  }
  public resetIpv6FibTblSyncEntriesRcvdB4Th() {
    this._ipv6FibTblSyncEntriesRcvdB4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncEntriesRcvdB4ThInput() {
    return this._ipv6FibTblSyncEntriesRcvdB4Th;
  }

  // ipv6_fib_tbl_sync_entries_rcvd_b_5th - computed: false, optional: true, required: false
  private _ipv6FibTblSyncEntriesRcvdB5Th?: number; 
  public get ipv6FibTblSyncEntriesRcvdB5Th() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_entries_rcvd_b_5th');
  }
  public set ipv6FibTblSyncEntriesRcvdB5Th(value: number) {
    this._ipv6FibTblSyncEntriesRcvdB5Th = value;
  }
  public resetIpv6FibTblSyncEntriesRcvdB5Th() {
    this._ipv6FibTblSyncEntriesRcvdB5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncEntriesRcvdB5ThInput() {
    return this._ipv6FibTblSyncEntriesRcvdB5Th;
  }

  // ipv6_fib_tbl_sync_entries_removed_b_1st - computed: false, optional: true, required: false
  private _ipv6FibTblSyncEntriesRemovedB1St?: number; 
  public get ipv6FibTblSyncEntriesRemovedB1St() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_entries_removed_b_1st');
  }
  public set ipv6FibTblSyncEntriesRemovedB1St(value: number) {
    this._ipv6FibTblSyncEntriesRemovedB1St = value;
  }
  public resetIpv6FibTblSyncEntriesRemovedB1St() {
    this._ipv6FibTblSyncEntriesRemovedB1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncEntriesRemovedB1StInput() {
    return this._ipv6FibTblSyncEntriesRemovedB1St;
  }

  // ipv6_fib_tbl_sync_entries_removed_b_2nd - computed: false, optional: true, required: false
  private _ipv6FibTblSyncEntriesRemovedB2Nd?: number; 
  public get ipv6FibTblSyncEntriesRemovedB2Nd() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_entries_removed_b_2nd');
  }
  public set ipv6FibTblSyncEntriesRemovedB2Nd(value: number) {
    this._ipv6FibTblSyncEntriesRemovedB2Nd = value;
  }
  public resetIpv6FibTblSyncEntriesRemovedB2Nd() {
    this._ipv6FibTblSyncEntriesRemovedB2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncEntriesRemovedB2NdInput() {
    return this._ipv6FibTblSyncEntriesRemovedB2Nd;
  }

  // ipv6_fib_tbl_sync_entries_removed_b_3rd - computed: false, optional: true, required: false
  private _ipv6FibTblSyncEntriesRemovedB3Rd?: number; 
  public get ipv6FibTblSyncEntriesRemovedB3Rd() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_entries_removed_b_3rd');
  }
  public set ipv6FibTblSyncEntriesRemovedB3Rd(value: number) {
    this._ipv6FibTblSyncEntriesRemovedB3Rd = value;
  }
  public resetIpv6FibTblSyncEntriesRemovedB3Rd() {
    this._ipv6FibTblSyncEntriesRemovedB3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncEntriesRemovedB3RdInput() {
    return this._ipv6FibTblSyncEntriesRemovedB3Rd;
  }

  // ipv6_fib_tbl_sync_entries_removed_b_4th - computed: false, optional: true, required: false
  private _ipv6FibTblSyncEntriesRemovedB4Th?: number; 
  public get ipv6FibTblSyncEntriesRemovedB4Th() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_entries_removed_b_4th');
  }
  public set ipv6FibTblSyncEntriesRemovedB4Th(value: number) {
    this._ipv6FibTblSyncEntriesRemovedB4Th = value;
  }
  public resetIpv6FibTblSyncEntriesRemovedB4Th() {
    this._ipv6FibTblSyncEntriesRemovedB4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncEntriesRemovedB4ThInput() {
    return this._ipv6FibTblSyncEntriesRemovedB4Th;
  }

  // ipv6_fib_tbl_sync_entries_removed_b_5th - computed: false, optional: true, required: false
  private _ipv6FibTblSyncEntriesRemovedB5Th?: number; 
  public get ipv6FibTblSyncEntriesRemovedB5Th() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_entries_removed_b_5th');
  }
  public set ipv6FibTblSyncEntriesRemovedB5Th(value: number) {
    this._ipv6FibTblSyncEntriesRemovedB5Th = value;
  }
  public resetIpv6FibTblSyncEntriesRemovedB5Th() {
    this._ipv6FibTblSyncEntriesRemovedB5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncEntriesRemovedB5ThInput() {
    return this._ipv6FibTblSyncEntriesRemovedB5Th;
  }

  // ipv6_fib_tbl_sync_entries_sent_m_1st - computed: false, optional: true, required: false
  private _ipv6FibTblSyncEntriesSentM1St?: number; 
  public get ipv6FibTblSyncEntriesSentM1St() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_entries_sent_m_1st');
  }
  public set ipv6FibTblSyncEntriesSentM1St(value: number) {
    this._ipv6FibTblSyncEntriesSentM1St = value;
  }
  public resetIpv6FibTblSyncEntriesSentM1St() {
    this._ipv6FibTblSyncEntriesSentM1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncEntriesSentM1StInput() {
    return this._ipv6FibTblSyncEntriesSentM1St;
  }

  // ipv6_fib_tbl_sync_entries_sent_m_2nd - computed: false, optional: true, required: false
  private _ipv6FibTblSyncEntriesSentM2Nd?: number; 
  public get ipv6FibTblSyncEntriesSentM2Nd() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_entries_sent_m_2nd');
  }
  public set ipv6FibTblSyncEntriesSentM2Nd(value: number) {
    this._ipv6FibTblSyncEntriesSentM2Nd = value;
  }
  public resetIpv6FibTblSyncEntriesSentM2Nd() {
    this._ipv6FibTblSyncEntriesSentM2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncEntriesSentM2NdInput() {
    return this._ipv6FibTblSyncEntriesSentM2Nd;
  }

  // ipv6_fib_tbl_sync_entries_sent_m_3rd - computed: false, optional: true, required: false
  private _ipv6FibTblSyncEntriesSentM3Rd?: number; 
  public get ipv6FibTblSyncEntriesSentM3Rd() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_entries_sent_m_3rd');
  }
  public set ipv6FibTblSyncEntriesSentM3Rd(value: number) {
    this._ipv6FibTblSyncEntriesSentM3Rd = value;
  }
  public resetIpv6FibTblSyncEntriesSentM3Rd() {
    this._ipv6FibTblSyncEntriesSentM3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncEntriesSentM3RdInput() {
    return this._ipv6FibTblSyncEntriesSentM3Rd;
  }

  // ipv6_fib_tbl_sync_entries_sent_m_4th - computed: false, optional: true, required: false
  private _ipv6FibTblSyncEntriesSentM4Th?: number; 
  public get ipv6FibTblSyncEntriesSentM4Th() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_entries_sent_m_4th');
  }
  public set ipv6FibTblSyncEntriesSentM4Th(value: number) {
    this._ipv6FibTblSyncEntriesSentM4Th = value;
  }
  public resetIpv6FibTblSyncEntriesSentM4Th() {
    this._ipv6FibTblSyncEntriesSentM4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncEntriesSentM4ThInput() {
    return this._ipv6FibTblSyncEntriesSentM4Th;
  }

  // ipv6_fib_tbl_sync_entries_sent_m_5th - computed: false, optional: true, required: false
  private _ipv6FibTblSyncEntriesSentM5Th?: number; 
  public get ipv6FibTblSyncEntriesSentM5Th() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_entries_sent_m_5th');
  }
  public set ipv6FibTblSyncEntriesSentM5Th(value: number) {
    this._ipv6FibTblSyncEntriesSentM5Th = value;
  }
  public resetIpv6FibTblSyncEntriesSentM5Th() {
    this._ipv6FibTblSyncEntriesSentM5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncEntriesSentM5ThInput() {
    return this._ipv6FibTblSyncEntriesSentM5Th;
  }

  // ipv6_fib_tbl_sync_m - computed: false, optional: true, required: false
  private _ipv6FibTblSyncM?: number; 
  public get ipv6FibTblSyncM() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_m');
  }
  public set ipv6FibTblSyncM(value: number) {
    this._ipv6FibTblSyncM = value;
  }
  public resetIpv6FibTblSyncM() {
    this._ipv6FibTblSyncM = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncMInput() {
    return this._ipv6FibTblSyncM;
  }

  // ipv6_fib_tbl_sync_start_ts_b_1st - computed: false, optional: true, required: false
  private _ipv6FibTblSyncStartTsB1St?: number; 
  public get ipv6FibTblSyncStartTsB1St() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_start_ts_b_1st');
  }
  public set ipv6FibTblSyncStartTsB1St(value: number) {
    this._ipv6FibTblSyncStartTsB1St = value;
  }
  public resetIpv6FibTblSyncStartTsB1St() {
    this._ipv6FibTblSyncStartTsB1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncStartTsB1StInput() {
    return this._ipv6FibTblSyncStartTsB1St;
  }

  // ipv6_fib_tbl_sync_start_ts_b_2nd - computed: false, optional: true, required: false
  private _ipv6FibTblSyncStartTsB2Nd?: number; 
  public get ipv6FibTblSyncStartTsB2Nd() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_start_ts_b_2nd');
  }
  public set ipv6FibTblSyncStartTsB2Nd(value: number) {
    this._ipv6FibTblSyncStartTsB2Nd = value;
  }
  public resetIpv6FibTblSyncStartTsB2Nd() {
    this._ipv6FibTblSyncStartTsB2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncStartTsB2NdInput() {
    return this._ipv6FibTblSyncStartTsB2Nd;
  }

  // ipv6_fib_tbl_sync_start_ts_b_3rd - computed: false, optional: true, required: false
  private _ipv6FibTblSyncStartTsB3Rd?: number; 
  public get ipv6FibTblSyncStartTsB3Rd() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_start_ts_b_3rd');
  }
  public set ipv6FibTblSyncStartTsB3Rd(value: number) {
    this._ipv6FibTblSyncStartTsB3Rd = value;
  }
  public resetIpv6FibTblSyncStartTsB3Rd() {
    this._ipv6FibTblSyncStartTsB3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncStartTsB3RdInput() {
    return this._ipv6FibTblSyncStartTsB3Rd;
  }

  // ipv6_fib_tbl_sync_start_ts_b_4th - computed: false, optional: true, required: false
  private _ipv6FibTblSyncStartTsB4Th?: number; 
  public get ipv6FibTblSyncStartTsB4Th() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_start_ts_b_4th');
  }
  public set ipv6FibTblSyncStartTsB4Th(value: number) {
    this._ipv6FibTblSyncStartTsB4Th = value;
  }
  public resetIpv6FibTblSyncStartTsB4Th() {
    this._ipv6FibTblSyncStartTsB4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncStartTsB4ThInput() {
    return this._ipv6FibTblSyncStartTsB4Th;
  }

  // ipv6_fib_tbl_sync_start_ts_b_5th - computed: false, optional: true, required: false
  private _ipv6FibTblSyncStartTsB5Th?: number; 
  public get ipv6FibTblSyncStartTsB5Th() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_start_ts_b_5th');
  }
  public set ipv6FibTblSyncStartTsB5Th(value: number) {
    this._ipv6FibTblSyncStartTsB5Th = value;
  }
  public resetIpv6FibTblSyncStartTsB5Th() {
    this._ipv6FibTblSyncStartTsB5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncStartTsB5ThInput() {
    return this._ipv6FibTblSyncStartTsB5Th;
  }

  // ipv6_fib_tbl_sync_start_ts_m_1st - computed: false, optional: true, required: false
  private _ipv6FibTblSyncStartTsM1St?: number; 
  public get ipv6FibTblSyncStartTsM1St() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_start_ts_m_1st');
  }
  public set ipv6FibTblSyncStartTsM1St(value: number) {
    this._ipv6FibTblSyncStartTsM1St = value;
  }
  public resetIpv6FibTblSyncStartTsM1St() {
    this._ipv6FibTblSyncStartTsM1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncStartTsM1StInput() {
    return this._ipv6FibTblSyncStartTsM1St;
  }

  // ipv6_fib_tbl_sync_start_ts_m_2nd - computed: false, optional: true, required: false
  private _ipv6FibTblSyncStartTsM2Nd?: number; 
  public get ipv6FibTblSyncStartTsM2Nd() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_start_ts_m_2nd');
  }
  public set ipv6FibTblSyncStartTsM2Nd(value: number) {
    this._ipv6FibTblSyncStartTsM2Nd = value;
  }
  public resetIpv6FibTblSyncStartTsM2Nd() {
    this._ipv6FibTblSyncStartTsM2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncStartTsM2NdInput() {
    return this._ipv6FibTblSyncStartTsM2Nd;
  }

  // ipv6_fib_tbl_sync_start_ts_m_3rd - computed: false, optional: true, required: false
  private _ipv6FibTblSyncStartTsM3Rd?: number; 
  public get ipv6FibTblSyncStartTsM3Rd() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_start_ts_m_3rd');
  }
  public set ipv6FibTblSyncStartTsM3Rd(value: number) {
    this._ipv6FibTblSyncStartTsM3Rd = value;
  }
  public resetIpv6FibTblSyncStartTsM3Rd() {
    this._ipv6FibTblSyncStartTsM3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncStartTsM3RdInput() {
    return this._ipv6FibTblSyncStartTsM3Rd;
  }

  // ipv6_fib_tbl_sync_start_ts_m_4th - computed: false, optional: true, required: false
  private _ipv6FibTblSyncStartTsM4Th?: number; 
  public get ipv6FibTblSyncStartTsM4Th() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_start_ts_m_4th');
  }
  public set ipv6FibTblSyncStartTsM4Th(value: number) {
    this._ipv6FibTblSyncStartTsM4Th = value;
  }
  public resetIpv6FibTblSyncStartTsM4Th() {
    this._ipv6FibTblSyncStartTsM4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncStartTsM4ThInput() {
    return this._ipv6FibTblSyncStartTsM4Th;
  }

  // ipv6_fib_tbl_sync_start_ts_m_5th - computed: false, optional: true, required: false
  private _ipv6FibTblSyncStartTsM5Th?: number; 
  public get ipv6FibTblSyncStartTsM5Th() {
    return this.getNumberAttribute('ipv6_fib_tbl_sync_start_ts_m_5th');
  }
  public set ipv6FibTblSyncStartTsM5Th(value: number) {
    this._ipv6FibTblSyncStartTsM5Th = value;
  }
  public resetIpv6FibTblSyncStartTsM5Th() {
    this._ipv6FibTblSyncStartTsM5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FibTblSyncStartTsM5ThInput() {
    return this._ipv6FibTblSyncStartTsM5Th;
  }

  // mac_tbl_cksum_b - computed: false, optional: true, required: false
  private _macTblCksumB?: number; 
  public get macTblCksumB() {
    return this.getNumberAttribute('mac_tbl_cksum_b');
  }
  public set macTblCksumB(value: number) {
    this._macTblCksumB = value;
  }
  public resetMacTblCksumB() {
    this._macTblCksumB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblCksumBInput() {
    return this._macTblCksumB;
  }

  // mac_tbl_cksum_cancel_m - computed: false, optional: true, required: false
  private _macTblCksumCancelM?: number; 
  public get macTblCksumCancelM() {
    return this.getNumberAttribute('mac_tbl_cksum_cancel_m');
  }
  public set macTblCksumCancelM(value: number) {
    this._macTblCksumCancelM = value;
  }
  public resetMacTblCksumCancelM() {
    this._macTblCksumCancelM = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblCksumCancelMInput() {
    return this._macTblCksumCancelM;
  }

  // mac_tbl_cksum_m - computed: false, optional: true, required: false
  private _macTblCksumM?: number; 
  public get macTblCksumM() {
    return this.getNumberAttribute('mac_tbl_cksum_m');
  }
  public set macTblCksumM(value: number) {
    this._macTblCksumM = value;
  }
  public resetMacTblCksumM() {
    this._macTblCksumM = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblCksumMInput() {
    return this._macTblCksumM;
  }

  // mac_tbl_cksum_mismatch_b - computed: false, optional: true, required: false
  private _macTblCksumMismatchB?: number; 
  public get macTblCksumMismatchB() {
    return this.getNumberAttribute('mac_tbl_cksum_mismatch_b');
  }
  public set macTblCksumMismatchB(value: number) {
    this._macTblCksumMismatchB = value;
  }
  public resetMacTblCksumMismatchB() {
    this._macTblCksumMismatchB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblCksumMismatchBInput() {
    return this._macTblCksumMismatchB;
  }

  // mac_tbl_sync_b - computed: false, optional: true, required: false
  private _macTblSyncB?: number; 
  public get macTblSyncB() {
    return this.getNumberAttribute('mac_tbl_sync_b');
  }
  public set macTblSyncB(value: number) {
    this._macTblSyncB = value;
  }
  public resetMacTblSyncB() {
    this._macTblSyncB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncBInput() {
    return this._macTblSyncB;
  }

  // mac_tbl_sync_end_ts_b_1st - computed: false, optional: true, required: false
  private _macTblSyncEndTsB1St?: number; 
  public get macTblSyncEndTsB1St() {
    return this.getNumberAttribute('mac_tbl_sync_end_ts_b_1st');
  }
  public set macTblSyncEndTsB1St(value: number) {
    this._macTblSyncEndTsB1St = value;
  }
  public resetMacTblSyncEndTsB1St() {
    this._macTblSyncEndTsB1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncEndTsB1StInput() {
    return this._macTblSyncEndTsB1St;
  }

  // mac_tbl_sync_end_ts_b_2nd - computed: false, optional: true, required: false
  private _macTblSyncEndTsB2Nd?: number; 
  public get macTblSyncEndTsB2Nd() {
    return this.getNumberAttribute('mac_tbl_sync_end_ts_b_2nd');
  }
  public set macTblSyncEndTsB2Nd(value: number) {
    this._macTblSyncEndTsB2Nd = value;
  }
  public resetMacTblSyncEndTsB2Nd() {
    this._macTblSyncEndTsB2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncEndTsB2NdInput() {
    return this._macTblSyncEndTsB2Nd;
  }

  // mac_tbl_sync_end_ts_b_3rd - computed: false, optional: true, required: false
  private _macTblSyncEndTsB3Rd?: number; 
  public get macTblSyncEndTsB3Rd() {
    return this.getNumberAttribute('mac_tbl_sync_end_ts_b_3rd');
  }
  public set macTblSyncEndTsB3Rd(value: number) {
    this._macTblSyncEndTsB3Rd = value;
  }
  public resetMacTblSyncEndTsB3Rd() {
    this._macTblSyncEndTsB3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncEndTsB3RdInput() {
    return this._macTblSyncEndTsB3Rd;
  }

  // mac_tbl_sync_end_ts_b_4th - computed: false, optional: true, required: false
  private _macTblSyncEndTsB4Th?: number; 
  public get macTblSyncEndTsB4Th() {
    return this.getNumberAttribute('mac_tbl_sync_end_ts_b_4th');
  }
  public set macTblSyncEndTsB4Th(value: number) {
    this._macTblSyncEndTsB4Th = value;
  }
  public resetMacTblSyncEndTsB4Th() {
    this._macTblSyncEndTsB4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncEndTsB4ThInput() {
    return this._macTblSyncEndTsB4Th;
  }

  // mac_tbl_sync_end_ts_b_5th - computed: false, optional: true, required: false
  private _macTblSyncEndTsB5Th?: number; 
  public get macTblSyncEndTsB5Th() {
    return this.getNumberAttribute('mac_tbl_sync_end_ts_b_5th');
  }
  public set macTblSyncEndTsB5Th(value: number) {
    this._macTblSyncEndTsB5Th = value;
  }
  public resetMacTblSyncEndTsB5Th() {
    this._macTblSyncEndTsB5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncEndTsB5ThInput() {
    return this._macTblSyncEndTsB5Th;
  }

  // mac_tbl_sync_end_ts_m_1st - computed: false, optional: true, required: false
  private _macTblSyncEndTsM1St?: number; 
  public get macTblSyncEndTsM1St() {
    return this.getNumberAttribute('mac_tbl_sync_end_ts_m_1st');
  }
  public set macTblSyncEndTsM1St(value: number) {
    this._macTblSyncEndTsM1St = value;
  }
  public resetMacTblSyncEndTsM1St() {
    this._macTblSyncEndTsM1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncEndTsM1StInput() {
    return this._macTblSyncEndTsM1St;
  }

  // mac_tbl_sync_end_ts_m_2nd - computed: false, optional: true, required: false
  private _macTblSyncEndTsM2Nd?: number; 
  public get macTblSyncEndTsM2Nd() {
    return this.getNumberAttribute('mac_tbl_sync_end_ts_m_2nd');
  }
  public set macTblSyncEndTsM2Nd(value: number) {
    this._macTblSyncEndTsM2Nd = value;
  }
  public resetMacTblSyncEndTsM2Nd() {
    this._macTblSyncEndTsM2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncEndTsM2NdInput() {
    return this._macTblSyncEndTsM2Nd;
  }

  // mac_tbl_sync_end_ts_m_3rd - computed: false, optional: true, required: false
  private _macTblSyncEndTsM3Rd?: number; 
  public get macTblSyncEndTsM3Rd() {
    return this.getNumberAttribute('mac_tbl_sync_end_ts_m_3rd');
  }
  public set macTblSyncEndTsM3Rd(value: number) {
    this._macTblSyncEndTsM3Rd = value;
  }
  public resetMacTblSyncEndTsM3Rd() {
    this._macTblSyncEndTsM3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncEndTsM3RdInput() {
    return this._macTblSyncEndTsM3Rd;
  }

  // mac_tbl_sync_end_ts_m_4th - computed: false, optional: true, required: false
  private _macTblSyncEndTsM4Th?: number; 
  public get macTblSyncEndTsM4Th() {
    return this.getNumberAttribute('mac_tbl_sync_end_ts_m_4th');
  }
  public set macTblSyncEndTsM4Th(value: number) {
    this._macTblSyncEndTsM4Th = value;
  }
  public resetMacTblSyncEndTsM4Th() {
    this._macTblSyncEndTsM4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncEndTsM4ThInput() {
    return this._macTblSyncEndTsM4Th;
  }

  // mac_tbl_sync_end_ts_m_5th - computed: false, optional: true, required: false
  private _macTblSyncEndTsM5Th?: number; 
  public get macTblSyncEndTsM5Th() {
    return this.getNumberAttribute('mac_tbl_sync_end_ts_m_5th');
  }
  public set macTblSyncEndTsM5Th(value: number) {
    this._macTblSyncEndTsM5Th = value;
  }
  public resetMacTblSyncEndTsM5Th() {
    this._macTblSyncEndTsM5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncEndTsM5ThInput() {
    return this._macTblSyncEndTsM5Th;
  }

  // mac_tbl_sync_entries_added_b_1st - computed: false, optional: true, required: false
  private _macTblSyncEntriesAddedB1St?: number; 
  public get macTblSyncEntriesAddedB1St() {
    return this.getNumberAttribute('mac_tbl_sync_entries_added_b_1st');
  }
  public set macTblSyncEntriesAddedB1St(value: number) {
    this._macTblSyncEntriesAddedB1St = value;
  }
  public resetMacTblSyncEntriesAddedB1St() {
    this._macTblSyncEntriesAddedB1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncEntriesAddedB1StInput() {
    return this._macTblSyncEntriesAddedB1St;
  }

  // mac_tbl_sync_entries_added_b_2nd - computed: false, optional: true, required: false
  private _macTblSyncEntriesAddedB2Nd?: number; 
  public get macTblSyncEntriesAddedB2Nd() {
    return this.getNumberAttribute('mac_tbl_sync_entries_added_b_2nd');
  }
  public set macTblSyncEntriesAddedB2Nd(value: number) {
    this._macTblSyncEntriesAddedB2Nd = value;
  }
  public resetMacTblSyncEntriesAddedB2Nd() {
    this._macTblSyncEntriesAddedB2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncEntriesAddedB2NdInput() {
    return this._macTblSyncEntriesAddedB2Nd;
  }

  // mac_tbl_sync_entries_added_b_3rd - computed: false, optional: true, required: false
  private _macTblSyncEntriesAddedB3Rd?: number; 
  public get macTblSyncEntriesAddedB3Rd() {
    return this.getNumberAttribute('mac_tbl_sync_entries_added_b_3rd');
  }
  public set macTblSyncEntriesAddedB3Rd(value: number) {
    this._macTblSyncEntriesAddedB3Rd = value;
  }
  public resetMacTblSyncEntriesAddedB3Rd() {
    this._macTblSyncEntriesAddedB3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncEntriesAddedB3RdInput() {
    return this._macTblSyncEntriesAddedB3Rd;
  }

  // mac_tbl_sync_entries_added_b_4th - computed: false, optional: true, required: false
  private _macTblSyncEntriesAddedB4Th?: number; 
  public get macTblSyncEntriesAddedB4Th() {
    return this.getNumberAttribute('mac_tbl_sync_entries_added_b_4th');
  }
  public set macTblSyncEntriesAddedB4Th(value: number) {
    this._macTblSyncEntriesAddedB4Th = value;
  }
  public resetMacTblSyncEntriesAddedB4Th() {
    this._macTblSyncEntriesAddedB4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncEntriesAddedB4ThInput() {
    return this._macTblSyncEntriesAddedB4Th;
  }

  // mac_tbl_sync_entries_added_b_5th - computed: false, optional: true, required: false
  private _macTblSyncEntriesAddedB5Th?: number; 
  public get macTblSyncEntriesAddedB5Th() {
    return this.getNumberAttribute('mac_tbl_sync_entries_added_b_5th');
  }
  public set macTblSyncEntriesAddedB5Th(value: number) {
    this._macTblSyncEntriesAddedB5Th = value;
  }
  public resetMacTblSyncEntriesAddedB5Th() {
    this._macTblSyncEntriesAddedB5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncEntriesAddedB5ThInput() {
    return this._macTblSyncEntriesAddedB5Th;
  }

  // mac_tbl_sync_entries_rcvd_b_1st - computed: false, optional: true, required: false
  private _macTblSyncEntriesRcvdB1St?: number; 
  public get macTblSyncEntriesRcvdB1St() {
    return this.getNumberAttribute('mac_tbl_sync_entries_rcvd_b_1st');
  }
  public set macTblSyncEntriesRcvdB1St(value: number) {
    this._macTblSyncEntriesRcvdB1St = value;
  }
  public resetMacTblSyncEntriesRcvdB1St() {
    this._macTblSyncEntriesRcvdB1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncEntriesRcvdB1StInput() {
    return this._macTblSyncEntriesRcvdB1St;
  }

  // mac_tbl_sync_entries_rcvd_b_2nd - computed: false, optional: true, required: false
  private _macTblSyncEntriesRcvdB2Nd?: number; 
  public get macTblSyncEntriesRcvdB2Nd() {
    return this.getNumberAttribute('mac_tbl_sync_entries_rcvd_b_2nd');
  }
  public set macTblSyncEntriesRcvdB2Nd(value: number) {
    this._macTblSyncEntriesRcvdB2Nd = value;
  }
  public resetMacTblSyncEntriesRcvdB2Nd() {
    this._macTblSyncEntriesRcvdB2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncEntriesRcvdB2NdInput() {
    return this._macTblSyncEntriesRcvdB2Nd;
  }

  // mac_tbl_sync_entries_rcvd_b_3rd - computed: false, optional: true, required: false
  private _macTblSyncEntriesRcvdB3Rd?: number; 
  public get macTblSyncEntriesRcvdB3Rd() {
    return this.getNumberAttribute('mac_tbl_sync_entries_rcvd_b_3rd');
  }
  public set macTblSyncEntriesRcvdB3Rd(value: number) {
    this._macTblSyncEntriesRcvdB3Rd = value;
  }
  public resetMacTblSyncEntriesRcvdB3Rd() {
    this._macTblSyncEntriesRcvdB3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncEntriesRcvdB3RdInput() {
    return this._macTblSyncEntriesRcvdB3Rd;
  }

  // mac_tbl_sync_entries_rcvd_b_4th - computed: false, optional: true, required: false
  private _macTblSyncEntriesRcvdB4Th?: number; 
  public get macTblSyncEntriesRcvdB4Th() {
    return this.getNumberAttribute('mac_tbl_sync_entries_rcvd_b_4th');
  }
  public set macTblSyncEntriesRcvdB4Th(value: number) {
    this._macTblSyncEntriesRcvdB4Th = value;
  }
  public resetMacTblSyncEntriesRcvdB4Th() {
    this._macTblSyncEntriesRcvdB4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncEntriesRcvdB4ThInput() {
    return this._macTblSyncEntriesRcvdB4Th;
  }

  // mac_tbl_sync_entries_rcvd_b_5th - computed: false, optional: true, required: false
  private _macTblSyncEntriesRcvdB5Th?: number; 
  public get macTblSyncEntriesRcvdB5Th() {
    return this.getNumberAttribute('mac_tbl_sync_entries_rcvd_b_5th');
  }
  public set macTblSyncEntriesRcvdB5Th(value: number) {
    this._macTblSyncEntriesRcvdB5Th = value;
  }
  public resetMacTblSyncEntriesRcvdB5Th() {
    this._macTblSyncEntriesRcvdB5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncEntriesRcvdB5ThInput() {
    return this._macTblSyncEntriesRcvdB5Th;
  }

  // mac_tbl_sync_entries_removed_b_1st - computed: false, optional: true, required: false
  private _macTblSyncEntriesRemovedB1St?: number; 
  public get macTblSyncEntriesRemovedB1St() {
    return this.getNumberAttribute('mac_tbl_sync_entries_removed_b_1st');
  }
  public set macTblSyncEntriesRemovedB1St(value: number) {
    this._macTblSyncEntriesRemovedB1St = value;
  }
  public resetMacTblSyncEntriesRemovedB1St() {
    this._macTblSyncEntriesRemovedB1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncEntriesRemovedB1StInput() {
    return this._macTblSyncEntriesRemovedB1St;
  }

  // mac_tbl_sync_entries_removed_b_2nd - computed: false, optional: true, required: false
  private _macTblSyncEntriesRemovedB2Nd?: number; 
  public get macTblSyncEntriesRemovedB2Nd() {
    return this.getNumberAttribute('mac_tbl_sync_entries_removed_b_2nd');
  }
  public set macTblSyncEntriesRemovedB2Nd(value: number) {
    this._macTblSyncEntriesRemovedB2Nd = value;
  }
  public resetMacTblSyncEntriesRemovedB2Nd() {
    this._macTblSyncEntriesRemovedB2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncEntriesRemovedB2NdInput() {
    return this._macTblSyncEntriesRemovedB2Nd;
  }

  // mac_tbl_sync_entries_removed_b_3rd - computed: false, optional: true, required: false
  private _macTblSyncEntriesRemovedB3Rd?: number; 
  public get macTblSyncEntriesRemovedB3Rd() {
    return this.getNumberAttribute('mac_tbl_sync_entries_removed_b_3rd');
  }
  public set macTblSyncEntriesRemovedB3Rd(value: number) {
    this._macTblSyncEntriesRemovedB3Rd = value;
  }
  public resetMacTblSyncEntriesRemovedB3Rd() {
    this._macTblSyncEntriesRemovedB3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncEntriesRemovedB3RdInput() {
    return this._macTblSyncEntriesRemovedB3Rd;
  }

  // mac_tbl_sync_entries_removed_b_4th - computed: false, optional: true, required: false
  private _macTblSyncEntriesRemovedB4Th?: number; 
  public get macTblSyncEntriesRemovedB4Th() {
    return this.getNumberAttribute('mac_tbl_sync_entries_removed_b_4th');
  }
  public set macTblSyncEntriesRemovedB4Th(value: number) {
    this._macTblSyncEntriesRemovedB4Th = value;
  }
  public resetMacTblSyncEntriesRemovedB4Th() {
    this._macTblSyncEntriesRemovedB4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncEntriesRemovedB4ThInput() {
    return this._macTblSyncEntriesRemovedB4Th;
  }

  // mac_tbl_sync_entries_removed_b_5th - computed: false, optional: true, required: false
  private _macTblSyncEntriesRemovedB5Th?: number; 
  public get macTblSyncEntriesRemovedB5Th() {
    return this.getNumberAttribute('mac_tbl_sync_entries_removed_b_5th');
  }
  public set macTblSyncEntriesRemovedB5Th(value: number) {
    this._macTblSyncEntriesRemovedB5Th = value;
  }
  public resetMacTblSyncEntriesRemovedB5Th() {
    this._macTblSyncEntriesRemovedB5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncEntriesRemovedB5ThInput() {
    return this._macTblSyncEntriesRemovedB5Th;
  }

  // mac_tbl_sync_entries_sent_m_1st - computed: false, optional: true, required: false
  private _macTblSyncEntriesSentM1St?: number; 
  public get macTblSyncEntriesSentM1St() {
    return this.getNumberAttribute('mac_tbl_sync_entries_sent_m_1st');
  }
  public set macTblSyncEntriesSentM1St(value: number) {
    this._macTblSyncEntriesSentM1St = value;
  }
  public resetMacTblSyncEntriesSentM1St() {
    this._macTblSyncEntriesSentM1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncEntriesSentM1StInput() {
    return this._macTblSyncEntriesSentM1St;
  }

  // mac_tbl_sync_entries_sent_m_2nd - computed: false, optional: true, required: false
  private _macTblSyncEntriesSentM2Nd?: number; 
  public get macTblSyncEntriesSentM2Nd() {
    return this.getNumberAttribute('mac_tbl_sync_entries_sent_m_2nd');
  }
  public set macTblSyncEntriesSentM2Nd(value: number) {
    this._macTblSyncEntriesSentM2Nd = value;
  }
  public resetMacTblSyncEntriesSentM2Nd() {
    this._macTblSyncEntriesSentM2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncEntriesSentM2NdInput() {
    return this._macTblSyncEntriesSentM2Nd;
  }

  // mac_tbl_sync_entries_sent_m_3rd - computed: false, optional: true, required: false
  private _macTblSyncEntriesSentM3Rd?: number; 
  public get macTblSyncEntriesSentM3Rd() {
    return this.getNumberAttribute('mac_tbl_sync_entries_sent_m_3rd');
  }
  public set macTblSyncEntriesSentM3Rd(value: number) {
    this._macTblSyncEntriesSentM3Rd = value;
  }
  public resetMacTblSyncEntriesSentM3Rd() {
    this._macTblSyncEntriesSentM3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncEntriesSentM3RdInput() {
    return this._macTblSyncEntriesSentM3Rd;
  }

  // mac_tbl_sync_entries_sent_m_4th - computed: false, optional: true, required: false
  private _macTblSyncEntriesSentM4Th?: number; 
  public get macTblSyncEntriesSentM4Th() {
    return this.getNumberAttribute('mac_tbl_sync_entries_sent_m_4th');
  }
  public set macTblSyncEntriesSentM4Th(value: number) {
    this._macTblSyncEntriesSentM4Th = value;
  }
  public resetMacTblSyncEntriesSentM4Th() {
    this._macTblSyncEntriesSentM4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncEntriesSentM4ThInput() {
    return this._macTblSyncEntriesSentM4Th;
  }

  // mac_tbl_sync_entries_sent_m_5th - computed: false, optional: true, required: false
  private _macTblSyncEntriesSentM5Th?: number; 
  public get macTblSyncEntriesSentM5Th() {
    return this.getNumberAttribute('mac_tbl_sync_entries_sent_m_5th');
  }
  public set macTblSyncEntriesSentM5Th(value: number) {
    this._macTblSyncEntriesSentM5Th = value;
  }
  public resetMacTblSyncEntriesSentM5Th() {
    this._macTblSyncEntriesSentM5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncEntriesSentM5ThInput() {
    return this._macTblSyncEntriesSentM5Th;
  }

  // mac_tbl_sync_m - computed: false, optional: true, required: false
  private _macTblSyncM?: number; 
  public get macTblSyncM() {
    return this.getNumberAttribute('mac_tbl_sync_m');
  }
  public set macTblSyncM(value: number) {
    this._macTblSyncM = value;
  }
  public resetMacTblSyncM() {
    this._macTblSyncM = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncMInput() {
    return this._macTblSyncM;
  }

  // mac_tbl_sync_start_ts_b_1st - computed: false, optional: true, required: false
  private _macTblSyncStartTsB1St?: number; 
  public get macTblSyncStartTsB1St() {
    return this.getNumberAttribute('mac_tbl_sync_start_ts_b_1st');
  }
  public set macTblSyncStartTsB1St(value: number) {
    this._macTblSyncStartTsB1St = value;
  }
  public resetMacTblSyncStartTsB1St() {
    this._macTblSyncStartTsB1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncStartTsB1StInput() {
    return this._macTblSyncStartTsB1St;
  }

  // mac_tbl_sync_start_ts_b_2nd - computed: false, optional: true, required: false
  private _macTblSyncStartTsB2Nd?: number; 
  public get macTblSyncStartTsB2Nd() {
    return this.getNumberAttribute('mac_tbl_sync_start_ts_b_2nd');
  }
  public set macTblSyncStartTsB2Nd(value: number) {
    this._macTblSyncStartTsB2Nd = value;
  }
  public resetMacTblSyncStartTsB2Nd() {
    this._macTblSyncStartTsB2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncStartTsB2NdInput() {
    return this._macTblSyncStartTsB2Nd;
  }

  // mac_tbl_sync_start_ts_b_3rd - computed: false, optional: true, required: false
  private _macTblSyncStartTsB3Rd?: number; 
  public get macTblSyncStartTsB3Rd() {
    return this.getNumberAttribute('mac_tbl_sync_start_ts_b_3rd');
  }
  public set macTblSyncStartTsB3Rd(value: number) {
    this._macTblSyncStartTsB3Rd = value;
  }
  public resetMacTblSyncStartTsB3Rd() {
    this._macTblSyncStartTsB3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncStartTsB3RdInput() {
    return this._macTblSyncStartTsB3Rd;
  }

  // mac_tbl_sync_start_ts_b_4th - computed: false, optional: true, required: false
  private _macTblSyncStartTsB4Th?: number; 
  public get macTblSyncStartTsB4Th() {
    return this.getNumberAttribute('mac_tbl_sync_start_ts_b_4th');
  }
  public set macTblSyncStartTsB4Th(value: number) {
    this._macTblSyncStartTsB4Th = value;
  }
  public resetMacTblSyncStartTsB4Th() {
    this._macTblSyncStartTsB4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncStartTsB4ThInput() {
    return this._macTblSyncStartTsB4Th;
  }

  // mac_tbl_sync_start_ts_b_5th - computed: false, optional: true, required: false
  private _macTblSyncStartTsB5Th?: number; 
  public get macTblSyncStartTsB5Th() {
    return this.getNumberAttribute('mac_tbl_sync_start_ts_b_5th');
  }
  public set macTblSyncStartTsB5Th(value: number) {
    this._macTblSyncStartTsB5Th = value;
  }
  public resetMacTblSyncStartTsB5Th() {
    this._macTblSyncStartTsB5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncStartTsB5ThInput() {
    return this._macTblSyncStartTsB5Th;
  }

  // mac_tbl_sync_start_ts_m_1st - computed: false, optional: true, required: false
  private _macTblSyncStartTsM1St?: number; 
  public get macTblSyncStartTsM1St() {
    return this.getNumberAttribute('mac_tbl_sync_start_ts_m_1st');
  }
  public set macTblSyncStartTsM1St(value: number) {
    this._macTblSyncStartTsM1St = value;
  }
  public resetMacTblSyncStartTsM1St() {
    this._macTblSyncStartTsM1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncStartTsM1StInput() {
    return this._macTblSyncStartTsM1St;
  }

  // mac_tbl_sync_start_ts_m_2nd - computed: false, optional: true, required: false
  private _macTblSyncStartTsM2Nd?: number; 
  public get macTblSyncStartTsM2Nd() {
    return this.getNumberAttribute('mac_tbl_sync_start_ts_m_2nd');
  }
  public set macTblSyncStartTsM2Nd(value: number) {
    this._macTblSyncStartTsM2Nd = value;
  }
  public resetMacTblSyncStartTsM2Nd() {
    this._macTblSyncStartTsM2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncStartTsM2NdInput() {
    return this._macTblSyncStartTsM2Nd;
  }

  // mac_tbl_sync_start_ts_m_3rd - computed: false, optional: true, required: false
  private _macTblSyncStartTsM3Rd?: number; 
  public get macTblSyncStartTsM3Rd() {
    return this.getNumberAttribute('mac_tbl_sync_start_ts_m_3rd');
  }
  public set macTblSyncStartTsM3Rd(value: number) {
    this._macTblSyncStartTsM3Rd = value;
  }
  public resetMacTblSyncStartTsM3Rd() {
    this._macTblSyncStartTsM3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncStartTsM3RdInput() {
    return this._macTblSyncStartTsM3Rd;
  }

  // mac_tbl_sync_start_ts_m_4th - computed: false, optional: true, required: false
  private _macTblSyncStartTsM4Th?: number; 
  public get macTblSyncStartTsM4Th() {
    return this.getNumberAttribute('mac_tbl_sync_start_ts_m_4th');
  }
  public set macTblSyncStartTsM4Th(value: number) {
    this._macTblSyncStartTsM4Th = value;
  }
  public resetMacTblSyncStartTsM4Th() {
    this._macTblSyncStartTsM4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncStartTsM4ThInput() {
    return this._macTblSyncStartTsM4Th;
  }

  // mac_tbl_sync_start_ts_m_5th - computed: false, optional: true, required: false
  private _macTblSyncStartTsM5Th?: number; 
  public get macTblSyncStartTsM5Th() {
    return this.getNumberAttribute('mac_tbl_sync_start_ts_m_5th');
  }
  public set macTblSyncStartTsM5Th(value: number) {
    this._macTblSyncStartTsM5Th = value;
  }
  public resetMacTblSyncStartTsM5Th() {
    this._macTblSyncStartTsM5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macTblSyncStartTsM5ThInput() {
    return this._macTblSyncStartTsM5Th;
  }

  // nd6_tbl_cksum_b - computed: false, optional: true, required: false
  private _nd6TblCksumB?: number; 
  public get nd6TblCksumB() {
    return this.getNumberAttribute('nd6_tbl_cksum_b');
  }
  public set nd6TblCksumB(value: number) {
    this._nd6TblCksumB = value;
  }
  public resetNd6TblCksumB() {
    this._nd6TblCksumB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblCksumBInput() {
    return this._nd6TblCksumB;
  }

  // nd6_tbl_cksum_cancel_m - computed: false, optional: true, required: false
  private _nd6TblCksumCancelM?: number; 
  public get nd6TblCksumCancelM() {
    return this.getNumberAttribute('nd6_tbl_cksum_cancel_m');
  }
  public set nd6TblCksumCancelM(value: number) {
    this._nd6TblCksumCancelM = value;
  }
  public resetNd6TblCksumCancelM() {
    this._nd6TblCksumCancelM = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblCksumCancelMInput() {
    return this._nd6TblCksumCancelM;
  }

  // nd6_tbl_cksum_m - computed: false, optional: true, required: false
  private _nd6TblCksumM?: number; 
  public get nd6TblCksumM() {
    return this.getNumberAttribute('nd6_tbl_cksum_m');
  }
  public set nd6TblCksumM(value: number) {
    this._nd6TblCksumM = value;
  }
  public resetNd6TblCksumM() {
    this._nd6TblCksumM = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblCksumMInput() {
    return this._nd6TblCksumM;
  }

  // nd6_tbl_cksum_mismatch_b - computed: false, optional: true, required: false
  private _nd6TblCksumMismatchB?: number; 
  public get nd6TblCksumMismatchB() {
    return this.getNumberAttribute('nd6_tbl_cksum_mismatch_b');
  }
  public set nd6TblCksumMismatchB(value: number) {
    this._nd6TblCksumMismatchB = value;
  }
  public resetNd6TblCksumMismatchB() {
    this._nd6TblCksumMismatchB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblCksumMismatchBInput() {
    return this._nd6TblCksumMismatchB;
  }

  // nd6_tbl_sync_b - computed: false, optional: true, required: false
  private _nd6TblSyncB?: number; 
  public get nd6TblSyncB() {
    return this.getNumberAttribute('nd6_tbl_sync_b');
  }
  public set nd6TblSyncB(value: number) {
    this._nd6TblSyncB = value;
  }
  public resetNd6TblSyncB() {
    this._nd6TblSyncB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncBInput() {
    return this._nd6TblSyncB;
  }

  // nd6_tbl_sync_end_ts_b_1st - computed: false, optional: true, required: false
  private _nd6TblSyncEndTsB1St?: number; 
  public get nd6TblSyncEndTsB1St() {
    return this.getNumberAttribute('nd6_tbl_sync_end_ts_b_1st');
  }
  public set nd6TblSyncEndTsB1St(value: number) {
    this._nd6TblSyncEndTsB1St = value;
  }
  public resetNd6TblSyncEndTsB1St() {
    this._nd6TblSyncEndTsB1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncEndTsB1StInput() {
    return this._nd6TblSyncEndTsB1St;
  }

  // nd6_tbl_sync_end_ts_b_2nd - computed: false, optional: true, required: false
  private _nd6TblSyncEndTsB2Nd?: number; 
  public get nd6TblSyncEndTsB2Nd() {
    return this.getNumberAttribute('nd6_tbl_sync_end_ts_b_2nd');
  }
  public set nd6TblSyncEndTsB2Nd(value: number) {
    this._nd6TblSyncEndTsB2Nd = value;
  }
  public resetNd6TblSyncEndTsB2Nd() {
    this._nd6TblSyncEndTsB2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncEndTsB2NdInput() {
    return this._nd6TblSyncEndTsB2Nd;
  }

  // nd6_tbl_sync_end_ts_b_3rd - computed: false, optional: true, required: false
  private _nd6TblSyncEndTsB3Rd?: number; 
  public get nd6TblSyncEndTsB3Rd() {
    return this.getNumberAttribute('nd6_tbl_sync_end_ts_b_3rd');
  }
  public set nd6TblSyncEndTsB3Rd(value: number) {
    this._nd6TblSyncEndTsB3Rd = value;
  }
  public resetNd6TblSyncEndTsB3Rd() {
    this._nd6TblSyncEndTsB3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncEndTsB3RdInput() {
    return this._nd6TblSyncEndTsB3Rd;
  }

  // nd6_tbl_sync_end_ts_b_4th - computed: false, optional: true, required: false
  private _nd6TblSyncEndTsB4Th?: number; 
  public get nd6TblSyncEndTsB4Th() {
    return this.getNumberAttribute('nd6_tbl_sync_end_ts_b_4th');
  }
  public set nd6TblSyncEndTsB4Th(value: number) {
    this._nd6TblSyncEndTsB4Th = value;
  }
  public resetNd6TblSyncEndTsB4Th() {
    this._nd6TblSyncEndTsB4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncEndTsB4ThInput() {
    return this._nd6TblSyncEndTsB4Th;
  }

  // nd6_tbl_sync_end_ts_b_5th - computed: false, optional: true, required: false
  private _nd6TblSyncEndTsB5Th?: number; 
  public get nd6TblSyncEndTsB5Th() {
    return this.getNumberAttribute('nd6_tbl_sync_end_ts_b_5th');
  }
  public set nd6TblSyncEndTsB5Th(value: number) {
    this._nd6TblSyncEndTsB5Th = value;
  }
  public resetNd6TblSyncEndTsB5Th() {
    this._nd6TblSyncEndTsB5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncEndTsB5ThInput() {
    return this._nd6TblSyncEndTsB5Th;
  }

  // nd6_tbl_sync_end_ts_m_1st - computed: false, optional: true, required: false
  private _nd6TblSyncEndTsM1St?: number; 
  public get nd6TblSyncEndTsM1St() {
    return this.getNumberAttribute('nd6_tbl_sync_end_ts_m_1st');
  }
  public set nd6TblSyncEndTsM1St(value: number) {
    this._nd6TblSyncEndTsM1St = value;
  }
  public resetNd6TblSyncEndTsM1St() {
    this._nd6TblSyncEndTsM1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncEndTsM1StInput() {
    return this._nd6TblSyncEndTsM1St;
  }

  // nd6_tbl_sync_end_ts_m_2nd - computed: false, optional: true, required: false
  private _nd6TblSyncEndTsM2Nd?: number; 
  public get nd6TblSyncEndTsM2Nd() {
    return this.getNumberAttribute('nd6_tbl_sync_end_ts_m_2nd');
  }
  public set nd6TblSyncEndTsM2Nd(value: number) {
    this._nd6TblSyncEndTsM2Nd = value;
  }
  public resetNd6TblSyncEndTsM2Nd() {
    this._nd6TblSyncEndTsM2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncEndTsM2NdInput() {
    return this._nd6TblSyncEndTsM2Nd;
  }

  // nd6_tbl_sync_end_ts_m_3rd - computed: false, optional: true, required: false
  private _nd6TblSyncEndTsM3Rd?: number; 
  public get nd6TblSyncEndTsM3Rd() {
    return this.getNumberAttribute('nd6_tbl_sync_end_ts_m_3rd');
  }
  public set nd6TblSyncEndTsM3Rd(value: number) {
    this._nd6TblSyncEndTsM3Rd = value;
  }
  public resetNd6TblSyncEndTsM3Rd() {
    this._nd6TblSyncEndTsM3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncEndTsM3RdInput() {
    return this._nd6TblSyncEndTsM3Rd;
  }

  // nd6_tbl_sync_end_ts_m_4th - computed: false, optional: true, required: false
  private _nd6TblSyncEndTsM4Th?: number; 
  public get nd6TblSyncEndTsM4Th() {
    return this.getNumberAttribute('nd6_tbl_sync_end_ts_m_4th');
  }
  public set nd6TblSyncEndTsM4Th(value: number) {
    this._nd6TblSyncEndTsM4Th = value;
  }
  public resetNd6TblSyncEndTsM4Th() {
    this._nd6TblSyncEndTsM4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncEndTsM4ThInput() {
    return this._nd6TblSyncEndTsM4Th;
  }

  // nd6_tbl_sync_end_ts_m_5th - computed: false, optional: true, required: false
  private _nd6TblSyncEndTsM5Th?: number; 
  public get nd6TblSyncEndTsM5Th() {
    return this.getNumberAttribute('nd6_tbl_sync_end_ts_m_5th');
  }
  public set nd6TblSyncEndTsM5Th(value: number) {
    this._nd6TblSyncEndTsM5Th = value;
  }
  public resetNd6TblSyncEndTsM5Th() {
    this._nd6TblSyncEndTsM5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncEndTsM5ThInput() {
    return this._nd6TblSyncEndTsM5Th;
  }

  // nd6_tbl_sync_entries_added_b_1st - computed: false, optional: true, required: false
  private _nd6TblSyncEntriesAddedB1St?: number; 
  public get nd6TblSyncEntriesAddedB1St() {
    return this.getNumberAttribute('nd6_tbl_sync_entries_added_b_1st');
  }
  public set nd6TblSyncEntriesAddedB1St(value: number) {
    this._nd6TblSyncEntriesAddedB1St = value;
  }
  public resetNd6TblSyncEntriesAddedB1St() {
    this._nd6TblSyncEntriesAddedB1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncEntriesAddedB1StInput() {
    return this._nd6TblSyncEntriesAddedB1St;
  }

  // nd6_tbl_sync_entries_added_b_2nd - computed: false, optional: true, required: false
  private _nd6TblSyncEntriesAddedB2Nd?: number; 
  public get nd6TblSyncEntriesAddedB2Nd() {
    return this.getNumberAttribute('nd6_tbl_sync_entries_added_b_2nd');
  }
  public set nd6TblSyncEntriesAddedB2Nd(value: number) {
    this._nd6TblSyncEntriesAddedB2Nd = value;
  }
  public resetNd6TblSyncEntriesAddedB2Nd() {
    this._nd6TblSyncEntriesAddedB2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncEntriesAddedB2NdInput() {
    return this._nd6TblSyncEntriesAddedB2Nd;
  }

  // nd6_tbl_sync_entries_added_b_3rd - computed: false, optional: true, required: false
  private _nd6TblSyncEntriesAddedB3Rd?: number; 
  public get nd6TblSyncEntriesAddedB3Rd() {
    return this.getNumberAttribute('nd6_tbl_sync_entries_added_b_3rd');
  }
  public set nd6TblSyncEntriesAddedB3Rd(value: number) {
    this._nd6TblSyncEntriesAddedB3Rd = value;
  }
  public resetNd6TblSyncEntriesAddedB3Rd() {
    this._nd6TblSyncEntriesAddedB3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncEntriesAddedB3RdInput() {
    return this._nd6TblSyncEntriesAddedB3Rd;
  }

  // nd6_tbl_sync_entries_added_b_4th - computed: false, optional: true, required: false
  private _nd6TblSyncEntriesAddedB4Th?: number; 
  public get nd6TblSyncEntriesAddedB4Th() {
    return this.getNumberAttribute('nd6_tbl_sync_entries_added_b_4th');
  }
  public set nd6TblSyncEntriesAddedB4Th(value: number) {
    this._nd6TblSyncEntriesAddedB4Th = value;
  }
  public resetNd6TblSyncEntriesAddedB4Th() {
    this._nd6TblSyncEntriesAddedB4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncEntriesAddedB4ThInput() {
    return this._nd6TblSyncEntriesAddedB4Th;
  }

  // nd6_tbl_sync_entries_added_b_5th - computed: false, optional: true, required: false
  private _nd6TblSyncEntriesAddedB5Th?: number; 
  public get nd6TblSyncEntriesAddedB5Th() {
    return this.getNumberAttribute('nd6_tbl_sync_entries_added_b_5th');
  }
  public set nd6TblSyncEntriesAddedB5Th(value: number) {
    this._nd6TblSyncEntriesAddedB5Th = value;
  }
  public resetNd6TblSyncEntriesAddedB5Th() {
    this._nd6TblSyncEntriesAddedB5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncEntriesAddedB5ThInput() {
    return this._nd6TblSyncEntriesAddedB5Th;
  }

  // nd6_tbl_sync_entries_rcvd_b_1st - computed: false, optional: true, required: false
  private _nd6TblSyncEntriesRcvdB1St?: number; 
  public get nd6TblSyncEntriesRcvdB1St() {
    return this.getNumberAttribute('nd6_tbl_sync_entries_rcvd_b_1st');
  }
  public set nd6TblSyncEntriesRcvdB1St(value: number) {
    this._nd6TblSyncEntriesRcvdB1St = value;
  }
  public resetNd6TblSyncEntriesRcvdB1St() {
    this._nd6TblSyncEntriesRcvdB1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncEntriesRcvdB1StInput() {
    return this._nd6TblSyncEntriesRcvdB1St;
  }

  // nd6_tbl_sync_entries_rcvd_b_2nd - computed: false, optional: true, required: false
  private _nd6TblSyncEntriesRcvdB2Nd?: number; 
  public get nd6TblSyncEntriesRcvdB2Nd() {
    return this.getNumberAttribute('nd6_tbl_sync_entries_rcvd_b_2nd');
  }
  public set nd6TblSyncEntriesRcvdB2Nd(value: number) {
    this._nd6TblSyncEntriesRcvdB2Nd = value;
  }
  public resetNd6TblSyncEntriesRcvdB2Nd() {
    this._nd6TblSyncEntriesRcvdB2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncEntriesRcvdB2NdInput() {
    return this._nd6TblSyncEntriesRcvdB2Nd;
  }

  // nd6_tbl_sync_entries_rcvd_b_3rd - computed: false, optional: true, required: false
  private _nd6TblSyncEntriesRcvdB3Rd?: number; 
  public get nd6TblSyncEntriesRcvdB3Rd() {
    return this.getNumberAttribute('nd6_tbl_sync_entries_rcvd_b_3rd');
  }
  public set nd6TblSyncEntriesRcvdB3Rd(value: number) {
    this._nd6TblSyncEntriesRcvdB3Rd = value;
  }
  public resetNd6TblSyncEntriesRcvdB3Rd() {
    this._nd6TblSyncEntriesRcvdB3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncEntriesRcvdB3RdInput() {
    return this._nd6TblSyncEntriesRcvdB3Rd;
  }

  // nd6_tbl_sync_entries_rcvd_b_4th - computed: false, optional: true, required: false
  private _nd6TblSyncEntriesRcvdB4Th?: number; 
  public get nd6TblSyncEntriesRcvdB4Th() {
    return this.getNumberAttribute('nd6_tbl_sync_entries_rcvd_b_4th');
  }
  public set nd6TblSyncEntriesRcvdB4Th(value: number) {
    this._nd6TblSyncEntriesRcvdB4Th = value;
  }
  public resetNd6TblSyncEntriesRcvdB4Th() {
    this._nd6TblSyncEntriesRcvdB4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncEntriesRcvdB4ThInput() {
    return this._nd6TblSyncEntriesRcvdB4Th;
  }

  // nd6_tbl_sync_entries_rcvd_b_5th - computed: false, optional: true, required: false
  private _nd6TblSyncEntriesRcvdB5Th?: number; 
  public get nd6TblSyncEntriesRcvdB5Th() {
    return this.getNumberAttribute('nd6_tbl_sync_entries_rcvd_b_5th');
  }
  public set nd6TblSyncEntriesRcvdB5Th(value: number) {
    this._nd6TblSyncEntriesRcvdB5Th = value;
  }
  public resetNd6TblSyncEntriesRcvdB5Th() {
    this._nd6TblSyncEntriesRcvdB5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncEntriesRcvdB5ThInput() {
    return this._nd6TblSyncEntriesRcvdB5Th;
  }

  // nd6_tbl_sync_entries_removed_b_1st - computed: false, optional: true, required: false
  private _nd6TblSyncEntriesRemovedB1St?: number; 
  public get nd6TblSyncEntriesRemovedB1St() {
    return this.getNumberAttribute('nd6_tbl_sync_entries_removed_b_1st');
  }
  public set nd6TblSyncEntriesRemovedB1St(value: number) {
    this._nd6TblSyncEntriesRemovedB1St = value;
  }
  public resetNd6TblSyncEntriesRemovedB1St() {
    this._nd6TblSyncEntriesRemovedB1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncEntriesRemovedB1StInput() {
    return this._nd6TblSyncEntriesRemovedB1St;
  }

  // nd6_tbl_sync_entries_removed_b_2nd - computed: false, optional: true, required: false
  private _nd6TblSyncEntriesRemovedB2Nd?: number; 
  public get nd6TblSyncEntriesRemovedB2Nd() {
    return this.getNumberAttribute('nd6_tbl_sync_entries_removed_b_2nd');
  }
  public set nd6TblSyncEntriesRemovedB2Nd(value: number) {
    this._nd6TblSyncEntriesRemovedB2Nd = value;
  }
  public resetNd6TblSyncEntriesRemovedB2Nd() {
    this._nd6TblSyncEntriesRemovedB2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncEntriesRemovedB2NdInput() {
    return this._nd6TblSyncEntriesRemovedB2Nd;
  }

  // nd6_tbl_sync_entries_removed_b_3rd - computed: false, optional: true, required: false
  private _nd6TblSyncEntriesRemovedB3Rd?: number; 
  public get nd6TblSyncEntriesRemovedB3Rd() {
    return this.getNumberAttribute('nd6_tbl_sync_entries_removed_b_3rd');
  }
  public set nd6TblSyncEntriesRemovedB3Rd(value: number) {
    this._nd6TblSyncEntriesRemovedB3Rd = value;
  }
  public resetNd6TblSyncEntriesRemovedB3Rd() {
    this._nd6TblSyncEntriesRemovedB3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncEntriesRemovedB3RdInput() {
    return this._nd6TblSyncEntriesRemovedB3Rd;
  }

  // nd6_tbl_sync_entries_removed_b_4th - computed: false, optional: true, required: false
  private _nd6TblSyncEntriesRemovedB4Th?: number; 
  public get nd6TblSyncEntriesRemovedB4Th() {
    return this.getNumberAttribute('nd6_tbl_sync_entries_removed_b_4th');
  }
  public set nd6TblSyncEntriesRemovedB4Th(value: number) {
    this._nd6TblSyncEntriesRemovedB4Th = value;
  }
  public resetNd6TblSyncEntriesRemovedB4Th() {
    this._nd6TblSyncEntriesRemovedB4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncEntriesRemovedB4ThInput() {
    return this._nd6TblSyncEntriesRemovedB4Th;
  }

  // nd6_tbl_sync_entries_removed_b_5th - computed: false, optional: true, required: false
  private _nd6TblSyncEntriesRemovedB5Th?: number; 
  public get nd6TblSyncEntriesRemovedB5Th() {
    return this.getNumberAttribute('nd6_tbl_sync_entries_removed_b_5th');
  }
  public set nd6TblSyncEntriesRemovedB5Th(value: number) {
    this._nd6TblSyncEntriesRemovedB5Th = value;
  }
  public resetNd6TblSyncEntriesRemovedB5Th() {
    this._nd6TblSyncEntriesRemovedB5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncEntriesRemovedB5ThInput() {
    return this._nd6TblSyncEntriesRemovedB5Th;
  }

  // nd6_tbl_sync_entries_sent_m_1st - computed: false, optional: true, required: false
  private _nd6TblSyncEntriesSentM1St?: number; 
  public get nd6TblSyncEntriesSentM1St() {
    return this.getNumberAttribute('nd6_tbl_sync_entries_sent_m_1st');
  }
  public set nd6TblSyncEntriesSentM1St(value: number) {
    this._nd6TblSyncEntriesSentM1St = value;
  }
  public resetNd6TblSyncEntriesSentM1St() {
    this._nd6TblSyncEntriesSentM1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncEntriesSentM1StInput() {
    return this._nd6TblSyncEntriesSentM1St;
  }

  // nd6_tbl_sync_entries_sent_m_2nd - computed: false, optional: true, required: false
  private _nd6TblSyncEntriesSentM2Nd?: number; 
  public get nd6TblSyncEntriesSentM2Nd() {
    return this.getNumberAttribute('nd6_tbl_sync_entries_sent_m_2nd');
  }
  public set nd6TblSyncEntriesSentM2Nd(value: number) {
    this._nd6TblSyncEntriesSentM2Nd = value;
  }
  public resetNd6TblSyncEntriesSentM2Nd() {
    this._nd6TblSyncEntriesSentM2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncEntriesSentM2NdInput() {
    return this._nd6TblSyncEntriesSentM2Nd;
  }

  // nd6_tbl_sync_entries_sent_m_3rd - computed: false, optional: true, required: false
  private _nd6TblSyncEntriesSentM3Rd?: number; 
  public get nd6TblSyncEntriesSentM3Rd() {
    return this.getNumberAttribute('nd6_tbl_sync_entries_sent_m_3rd');
  }
  public set nd6TblSyncEntriesSentM3Rd(value: number) {
    this._nd6TblSyncEntriesSentM3Rd = value;
  }
  public resetNd6TblSyncEntriesSentM3Rd() {
    this._nd6TblSyncEntriesSentM3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncEntriesSentM3RdInput() {
    return this._nd6TblSyncEntriesSentM3Rd;
  }

  // nd6_tbl_sync_entries_sent_m_4th - computed: false, optional: true, required: false
  private _nd6TblSyncEntriesSentM4Th?: number; 
  public get nd6TblSyncEntriesSentM4Th() {
    return this.getNumberAttribute('nd6_tbl_sync_entries_sent_m_4th');
  }
  public set nd6TblSyncEntriesSentM4Th(value: number) {
    this._nd6TblSyncEntriesSentM4Th = value;
  }
  public resetNd6TblSyncEntriesSentM4Th() {
    this._nd6TblSyncEntriesSentM4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncEntriesSentM4ThInput() {
    return this._nd6TblSyncEntriesSentM4Th;
  }

  // nd6_tbl_sync_entries_sent_m_5th - computed: false, optional: true, required: false
  private _nd6TblSyncEntriesSentM5Th?: number; 
  public get nd6TblSyncEntriesSentM5Th() {
    return this.getNumberAttribute('nd6_tbl_sync_entries_sent_m_5th');
  }
  public set nd6TblSyncEntriesSentM5Th(value: number) {
    this._nd6TblSyncEntriesSentM5Th = value;
  }
  public resetNd6TblSyncEntriesSentM5Th() {
    this._nd6TblSyncEntriesSentM5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncEntriesSentM5ThInput() {
    return this._nd6TblSyncEntriesSentM5Th;
  }

  // nd6_tbl_sync_m - computed: false, optional: true, required: false
  private _nd6TblSyncM?: number; 
  public get nd6TblSyncM() {
    return this.getNumberAttribute('nd6_tbl_sync_m');
  }
  public set nd6TblSyncM(value: number) {
    this._nd6TblSyncM = value;
  }
  public resetNd6TblSyncM() {
    this._nd6TblSyncM = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncMInput() {
    return this._nd6TblSyncM;
  }

  // nd6_tbl_sync_start_ts_b_1st - computed: false, optional: true, required: false
  private _nd6TblSyncStartTsB1St?: number; 
  public get nd6TblSyncStartTsB1St() {
    return this.getNumberAttribute('nd6_tbl_sync_start_ts_b_1st');
  }
  public set nd6TblSyncStartTsB1St(value: number) {
    this._nd6TblSyncStartTsB1St = value;
  }
  public resetNd6TblSyncStartTsB1St() {
    this._nd6TblSyncStartTsB1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncStartTsB1StInput() {
    return this._nd6TblSyncStartTsB1St;
  }

  // nd6_tbl_sync_start_ts_b_2nd - computed: false, optional: true, required: false
  private _nd6TblSyncStartTsB2Nd?: number; 
  public get nd6TblSyncStartTsB2Nd() {
    return this.getNumberAttribute('nd6_tbl_sync_start_ts_b_2nd');
  }
  public set nd6TblSyncStartTsB2Nd(value: number) {
    this._nd6TblSyncStartTsB2Nd = value;
  }
  public resetNd6TblSyncStartTsB2Nd() {
    this._nd6TblSyncStartTsB2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncStartTsB2NdInput() {
    return this._nd6TblSyncStartTsB2Nd;
  }

  // nd6_tbl_sync_start_ts_b_3rd - computed: false, optional: true, required: false
  private _nd6TblSyncStartTsB3Rd?: number; 
  public get nd6TblSyncStartTsB3Rd() {
    return this.getNumberAttribute('nd6_tbl_sync_start_ts_b_3rd');
  }
  public set nd6TblSyncStartTsB3Rd(value: number) {
    this._nd6TblSyncStartTsB3Rd = value;
  }
  public resetNd6TblSyncStartTsB3Rd() {
    this._nd6TblSyncStartTsB3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncStartTsB3RdInput() {
    return this._nd6TblSyncStartTsB3Rd;
  }

  // nd6_tbl_sync_start_ts_b_4th - computed: false, optional: true, required: false
  private _nd6TblSyncStartTsB4Th?: number; 
  public get nd6TblSyncStartTsB4Th() {
    return this.getNumberAttribute('nd6_tbl_sync_start_ts_b_4th');
  }
  public set nd6TblSyncStartTsB4Th(value: number) {
    this._nd6TblSyncStartTsB4Th = value;
  }
  public resetNd6TblSyncStartTsB4Th() {
    this._nd6TblSyncStartTsB4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncStartTsB4ThInput() {
    return this._nd6TblSyncStartTsB4Th;
  }

  // nd6_tbl_sync_start_ts_b_5th - computed: false, optional: true, required: false
  private _nd6TblSyncStartTsB5Th?: number; 
  public get nd6TblSyncStartTsB5Th() {
    return this.getNumberAttribute('nd6_tbl_sync_start_ts_b_5th');
  }
  public set nd6TblSyncStartTsB5Th(value: number) {
    this._nd6TblSyncStartTsB5Th = value;
  }
  public resetNd6TblSyncStartTsB5Th() {
    this._nd6TblSyncStartTsB5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncStartTsB5ThInput() {
    return this._nd6TblSyncStartTsB5Th;
  }

  // nd6_tbl_sync_start_ts_m_1st - computed: false, optional: true, required: false
  private _nd6TblSyncStartTsM1St?: number; 
  public get nd6TblSyncStartTsM1St() {
    return this.getNumberAttribute('nd6_tbl_sync_start_ts_m_1st');
  }
  public set nd6TblSyncStartTsM1St(value: number) {
    this._nd6TblSyncStartTsM1St = value;
  }
  public resetNd6TblSyncStartTsM1St() {
    this._nd6TblSyncStartTsM1St = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncStartTsM1StInput() {
    return this._nd6TblSyncStartTsM1St;
  }

  // nd6_tbl_sync_start_ts_m_2nd - computed: false, optional: true, required: false
  private _nd6TblSyncStartTsM2Nd?: number; 
  public get nd6TblSyncStartTsM2Nd() {
    return this.getNumberAttribute('nd6_tbl_sync_start_ts_m_2nd');
  }
  public set nd6TblSyncStartTsM2Nd(value: number) {
    this._nd6TblSyncStartTsM2Nd = value;
  }
  public resetNd6TblSyncStartTsM2Nd() {
    this._nd6TblSyncStartTsM2Nd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncStartTsM2NdInput() {
    return this._nd6TblSyncStartTsM2Nd;
  }

  // nd6_tbl_sync_start_ts_m_3rd - computed: false, optional: true, required: false
  private _nd6TblSyncStartTsM3Rd?: number; 
  public get nd6TblSyncStartTsM3Rd() {
    return this.getNumberAttribute('nd6_tbl_sync_start_ts_m_3rd');
  }
  public set nd6TblSyncStartTsM3Rd(value: number) {
    this._nd6TblSyncStartTsM3Rd = value;
  }
  public resetNd6TblSyncStartTsM3Rd() {
    this._nd6TblSyncStartTsM3Rd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncStartTsM3RdInput() {
    return this._nd6TblSyncStartTsM3Rd;
  }

  // nd6_tbl_sync_start_ts_m_4th - computed: false, optional: true, required: false
  private _nd6TblSyncStartTsM4Th?: number; 
  public get nd6TblSyncStartTsM4Th() {
    return this.getNumberAttribute('nd6_tbl_sync_start_ts_m_4th');
  }
  public set nd6TblSyncStartTsM4Th(value: number) {
    this._nd6TblSyncStartTsM4Th = value;
  }
  public resetNd6TblSyncStartTsM4Th() {
    this._nd6TblSyncStartTsM4Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncStartTsM4ThInput() {
    return this._nd6TblSyncStartTsM4Th;
  }

  // nd6_tbl_sync_start_ts_m_5th - computed: false, optional: true, required: false
  private _nd6TblSyncStartTsM5Th?: number; 
  public get nd6TblSyncStartTsM5Th() {
    return this.getNumberAttribute('nd6_tbl_sync_start_ts_m_5th');
  }
  public set nd6TblSyncStartTsM5Th(value: number) {
    this._nd6TblSyncStartTsM5Th = value;
  }
  public resetNd6TblSyncStartTsM5Th() {
    this._nd6TblSyncStartTsM5Th = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nd6TblSyncStartTsM5ThInput() {
    return this._nd6TblSyncStartTsM5Th;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats thunder_system_table_integrity_stats}
*/
export class DataThunderSystemTableIntegrityStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_table_integrity_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemTableIntegrityStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemTableIntegrityStats to import
  * @param importFromId The id of the existing DataThunderSystemTableIntegrityStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemTableIntegrityStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_table_integrity_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_table_integrity_stats thunder_system_table_integrity_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemTableIntegrityStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemTableIntegrityStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_table_integrity_stats',
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
  private _stats = new DataThunderSystemTableIntegrityStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSystemTableIntegrityStatsStats) {
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
      stats: dataThunderSystemTableIntegrityStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSystemTableIntegrityStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemTableIntegrityStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
