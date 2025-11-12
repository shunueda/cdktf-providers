// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderNetflowMonitorStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#id DataThunderNetflowMonitorStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of netflow monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#name DataThunderNetflowMonitorStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#stats DataThunderNetflowMonitorStats#stats}
  */
  readonly stats?: DataThunderNetflowMonitorStatsStats;
}
export interface DataThunderNetflowMonitorStatsStats {
  /**
  * Sent Bytes Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#bytes_sent DataThunderNetflowMonitorStats#bytes_sent}
  */
  readonly bytesSent?: number;
  /**
  * Custom FW4 Deny/Reset Event Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_deny_reset_event_fw4_records_sent DataThunderNetflowMonitorStats#custom_deny_reset_event_fw4_records_sent}
  */
  readonly customDenyResetEventFw4RecordsSent?: number;
  /**
  * Custom FW4 Deny/Reset Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_deny_reset_event_fw4_records_sent_failure DataThunderNetflowMonitorStats#custom_deny_reset_event_fw4_records_sent_failure}
  */
  readonly customDenyResetEventFw4RecordsSentFailure?: number;
  /**
  * Custom FW6 Deny/Reset Event Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_deny_reset_event_fw6_records_sent DataThunderNetflowMonitorStats#custom_deny_reset_event_fw6_records_sent}
  */
  readonly customDenyResetEventFw6RecordsSent?: number;
  /**
  * Custom FW6 Deny/Reset Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_deny_reset_event_fw6_records_sent_failure DataThunderNetflowMonitorStats#custom_deny_reset_event_fw6_records_sent_failure}
  */
  readonly customDenyResetEventFw6RecordsSentFailure?: number;
  /**
  * Custom FW iDDoS Entry Created Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_fw_iddos_entry_created_records_sent DataThunderNetflowMonitorStats#custom_fw_iddos_entry_created_records_sent}
  */
  readonly customFwIddosEntryCreatedRecordsSent?: number;
  /**
  * Custom FW iDDoS Entry Created Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_fw_iddos_entry_created_records_sent_failure DataThunderNetflowMonitorStats#custom_fw_iddos_entry_created_records_sent_failure}
  */
  readonly customFwIddosEntryCreatedRecordsSentFailure?: number;
  /**
  * Custom FW iDDoS Entry Deleted Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_fw_iddos_entry_deleted_records_sent DataThunderNetflowMonitorStats#custom_fw_iddos_entry_deleted_records_sent}
  */
  readonly customFwIddosEntryDeletedRecordsSent?: number;
  /**
  * Custom FW iDDoS Entry Deleted Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_fw_iddos_entry_deleted_records_sent_failure DataThunderNetflowMonitorStats#custom_fw_iddos_entry_deleted_records_sent_failure}
  */
  readonly customFwIddosEntryDeletedRecordsSentFailure?: number;
  /**
  * Custom FW Session Limit Exceeded Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_fw_sesn_limit_exceeded_records_sent DataThunderNetflowMonitorStats#custom_fw_sesn_limit_exceeded_records_sent}
  */
  readonly customFwSesnLimitExceededRecordsSent?: number;
  /**
  * Custom FW Session Limit Exceeded Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_fw_sesn_limit_exceeded_records_sent_failure DataThunderNetflowMonitorStats#custom_fw_sesn_limit_exceeded_records_sent_failure}
  */
  readonly customFwSesnLimitExceededRecordsSentFailure?: number;
  /**
  * Custom GTP C Tunnel Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_gtp_c_tunnel_event_records_sent DataThunderNetflowMonitorStats#custom_gtp_c_tunnel_event_records_sent}
  */
  readonly customGtpCTunnelEventRecordsSent?: number;
  /**
  * Custom GTP C Tunnel Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_gtp_c_tunnel_event_records_sent_failure DataThunderNetflowMonitorStats#custom_gtp_c_tunnel_event_records_sent_failure}
  */
  readonly customGtpCTunnelEventRecordsSentFailure?: number;
  /**
  * Custom GTP Deny Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_gtp_deny_event_records_sent DataThunderNetflowMonitorStats#custom_gtp_deny_event_records_sent}
  */
  readonly customGtpDenyEventRecordsSent?: number;
  /**
  * Custom GTP Deny Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_gtp_deny_event_records_sent_failure DataThunderNetflowMonitorStats#custom_gtp_deny_event_records_sent_failure}
  */
  readonly customGtpDenyEventRecordsSentFailure?: number;
  /**
  * Custom GTP Info Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_gtp_info_event_records_sent DataThunderNetflowMonitorStats#custom_gtp_info_event_records_sent}
  */
  readonly customGtpInfoEventRecordsSent?: number;
  /**
  * Custom GTP Info Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_gtp_info_event_records_sent_failure DataThunderNetflowMonitorStats#custom_gtp_info_event_records_sent_failure}
  */
  readonly customGtpInfoEventRecordsSentFailure?: number;
  /**
  * Custom GTP Rate Limit Periodic Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_gtp_rate_limit_periodic_records_sent DataThunderNetflowMonitorStats#custom_gtp_rate_limit_periodic_records_sent}
  */
  readonly customGtpRateLimitPeriodicRecordsSent?: number;
  /**
  * Custom GTP Rate Limit Periodic Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_gtp_rate_limit_periodic_records_sent_failure DataThunderNetflowMonitorStats#custom_gtp_rate_limit_periodic_records_sent_failure}
  */
  readonly customGtpRateLimitPeriodicRecordsSentFailure?: number;
  /**
  * Custom GTP U Tunnel Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_gtp_u_tunnel_event_records_sent DataThunderNetflowMonitorStats#custom_gtp_u_tunnel_event_records_sent}
  */
  readonly customGtpUTunnelEventRecordsSent?: number;
  /**
  * Custom GTP U Tunnel Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_gtp_u_tunnel_event_records_sent_failure DataThunderNetflowMonitorStats#custom_gtp_u_tunnel_event_records_sent_failure}
  */
  readonly customGtpUTunnelEventRecordsSentFailure?: number;
  /**
  * Custom NAT iDDoS L3 Entry Created Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_nat_iddos_l3_entry_created_records_sent DataThunderNetflowMonitorStats#custom_nat_iddos_l3_entry_created_records_sent}
  */
  readonly customNatIddosL3EntryCreatedRecordsSent?: number;
  /**
  * Custom NAT iDDoS L3 Entry Created Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_nat_iddos_l3_entry_created_records_sent_failure DataThunderNetflowMonitorStats#custom_nat_iddos_l3_entry_created_records_sent_failure}
  */
  readonly customNatIddosL3EntryCreatedRecordsSentFailure?: number;
  /**
  * Custom NAT iDDoS L3 Entry Deleted Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_nat_iddos_l3_entry_deleted_records_sent DataThunderNetflowMonitorStats#custom_nat_iddos_l3_entry_deleted_records_sent}
  */
  readonly customNatIddosL3EntryDeletedRecordsSent?: number;
  /**
  * Custom NAT iDDoS L3 Entry Deleted Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_nat_iddos_l3_entry_deleted_records_sent_failure DataThunderNetflowMonitorStats#custom_nat_iddos_l3_entry_deleted_records_sent_failure}
  */
  readonly customNatIddosL3EntryDeletedRecordsSentFailure?: number;
  /**
  * Custom NAT iDDoS L4 Entry Created Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_nat_iddos_l4_entry_created_records_sent DataThunderNetflowMonitorStats#custom_nat_iddos_l4_entry_created_records_sent}
  */
  readonly customNatIddosL4EntryCreatedRecordsSent?: number;
  /**
  * Custom NAT iDDoS L4 Entry Created Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_nat_iddos_l4_entry_created_records_sent_failure DataThunderNetflowMonitorStats#custom_nat_iddos_l4_entry_created_records_sent_failure}
  */
  readonly customNatIddosL4EntryCreatedRecordsSentFailure?: number;
  /**
  * Custom NAT iDDoS L4 Entry Deleted Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_nat_iddos_l4_entry_deleted_records_sent DataThunderNetflowMonitorStats#custom_nat_iddos_l4_entry_deleted_records_sent}
  */
  readonly customNatIddosL4EntryDeletedRecordsSent?: number;
  /**
  * Custom NAT iDDoS L4 Entry Deleted Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_nat_iddos_l4_entry_deleted_records_sent_failure DataThunderNetflowMonitorStats#custom_nat_iddos_l4_entry_deleted_records_sent_failure}
  */
  readonly customNatIddosL4EntryDeletedRecordsSentFailure?: number;
  /**
  * Custom Dslite Port Batch Creation Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_batching_dslite_creation_records_sent DataThunderNetflowMonitorStats#custom_port_batching_dslite_creation_records_sent}
  */
  readonly customPortBatchingDsliteCreationRecordsSent?: number;
  /**
  * Custom Dslite Port Batch Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_batching_dslite_creation_records_sent_failure DataThunderNetflowMonitorStats#custom_port_batching_dslite_creation_records_sent_failure}
  */
  readonly customPortBatchingDsliteCreationRecordsSentFailure?: number;
  /**
  * Custom Dslite Port Batch Deletion Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_batching_dslite_deletion_records_sent DataThunderNetflowMonitorStats#custom_port_batching_dslite_deletion_records_sent}
  */
  readonly customPortBatchingDsliteDeletionRecordsSent?: number;
  /**
  * Custom Dslite Port Batch Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_batching_dslite_deletion_records_sent_failure DataThunderNetflowMonitorStats#custom_port_batching_dslite_deletion_records_sent_failure}
  */
  readonly customPortBatchingDsliteDeletionRecordsSentFailure?: number;
  /**
  * Custom Nat44 Port Batch Creation Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_batching_nat44_creation_records_sent DataThunderNetflowMonitorStats#custom_port_batching_nat44_creation_records_sent}
  */
  readonly customPortBatchingNat44CreationRecordsSent?: number;
  /**
  * Custom Nat44 Port Batch Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_batching_nat44_creation_records_sent_failure DataThunderNetflowMonitorStats#custom_port_batching_nat44_creation_records_sent_failure}
  */
  readonly customPortBatchingNat44CreationRecordsSentFailure?: number;
  /**
  * Custom Nat44 Port Batch Deletion Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_batching_nat44_deletion_records_sent DataThunderNetflowMonitorStats#custom_port_batching_nat44_deletion_records_sent}
  */
  readonly customPortBatchingNat44DeletionRecordsSent?: number;
  /**
  * Custom Nat44 Port Batch Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_batching_nat44_deletion_records_sent_failure DataThunderNetflowMonitorStats#custom_port_batching_nat44_deletion_records_sent_failure}
  */
  readonly customPortBatchingNat44DeletionRecordsSentFailure?: number;
  /**
  * Custom Nat64 Port Batch Creation Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_batching_nat64_creation_records_sent DataThunderNetflowMonitorStats#custom_port_batching_nat64_creation_records_sent}
  */
  readonly customPortBatchingNat64CreationRecordsSent?: number;
  /**
  * Custom Nat64 Port Batch Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_batching_nat64_creation_records_sent_failure DataThunderNetflowMonitorStats#custom_port_batching_nat64_creation_records_sent_failure}
  */
  readonly customPortBatchingNat64CreationRecordsSentFailure?: number;
  /**
  * Custom Nat64 Port Batch Deletion Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_batching_nat64_deletion_records_sent DataThunderNetflowMonitorStats#custom_port_batching_nat64_deletion_records_sent}
  */
  readonly customPortBatchingNat64DeletionRecordsSent?: number;
  /**
  * Custom Nat64 Port Batch Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_batching_nat64_deletion_records_sent_failure DataThunderNetflowMonitorStats#custom_port_batching_nat64_deletion_records_sent_failure}
  */
  readonly customPortBatchingNat64DeletionRecordsSentFailure?: number;
  /**
  * Custom Dslite Port Batch V2 Creation Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_batching_v2_dslite_creation_records_sent DataThunderNetflowMonitorStats#custom_port_batching_v2_dslite_creation_records_sent}
  */
  readonly customPortBatchingV2DsliteCreationRecordsSent?: number;
  /**
  * Custom Dslite Port Batch V2 Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_batching_v2_dslite_creation_records_sent_failure DataThunderNetflowMonitorStats#custom_port_batching_v2_dslite_creation_records_sent_failure}
  */
  readonly customPortBatchingV2DsliteCreationRecordsSentFailure?: number;
  /**
  * Custom Dslite Port Batch V2 Deletion Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_batching_v2_dslite_deletion_records_sent DataThunderNetflowMonitorStats#custom_port_batching_v2_dslite_deletion_records_sent}
  */
  readonly customPortBatchingV2DsliteDeletionRecordsSent?: number;
  /**
  * Custom Dslite Port Batch V2 Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_batching_v2_dslite_deletion_records_sent_failure DataThunderNetflowMonitorStats#custom_port_batching_v2_dslite_deletion_records_sent_failure}
  */
  readonly customPortBatchingV2DsliteDeletionRecordsSentFailure?: number;
  /**
  * Custom Nat44 Port Batch V2 Creation Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_batching_v2_nat44_creation_records_sent DataThunderNetflowMonitorStats#custom_port_batching_v2_nat44_creation_records_sent}
  */
  readonly customPortBatchingV2Nat44CreationRecordsSent?: number;
  /**
  * Custom Nat44 Port Batch V2 Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_batching_v2_nat44_creation_records_sent_failure DataThunderNetflowMonitorStats#custom_port_batching_v2_nat44_creation_records_sent_failure}
  */
  readonly customPortBatchingV2Nat44CreationRecordsSentFailure?: number;
  /**
  * Custom Nat44 Port Batch V2 Deletion Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_batching_v2_nat44_deletion_records_sent DataThunderNetflowMonitorStats#custom_port_batching_v2_nat44_deletion_records_sent}
  */
  readonly customPortBatchingV2Nat44DeletionRecordsSent?: number;
  /**
  * Custom Nat44 Port Batch V2 Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_batching_v2_nat44_deletion_records_sent_failure DataThunderNetflowMonitorStats#custom_port_batching_v2_nat44_deletion_records_sent_failure}
  */
  readonly customPortBatchingV2Nat44DeletionRecordsSentFailure?: number;
  /**
  * Custom Nat64 Port Batch V2 Creation Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_batching_v2_nat64_creation_records_sent DataThunderNetflowMonitorStats#custom_port_batching_v2_nat64_creation_records_sent}
  */
  readonly customPortBatchingV2Nat64CreationRecordsSent?: number;
  /**
  * Custom Nat64 Port Batch V2 Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_batching_v2_nat64_creation_records_sent_failure DataThunderNetflowMonitorStats#custom_port_batching_v2_nat64_creation_records_sent_failure}
  */
  readonly customPortBatchingV2Nat64CreationRecordsSentFailure?: number;
  /**
  * Custom Nat64 Port Batch V2 Deletion Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_batching_v2_nat64_deletion_records_sent DataThunderNetflowMonitorStats#custom_port_batching_v2_nat64_deletion_records_sent}
  */
  readonly customPortBatchingV2Nat64DeletionRecordsSent?: number;
  /**
  * Custom Nat64 Port Batch V2 Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_batching_v2_nat64_deletion_records_sent_failure DataThunderNetflowMonitorStats#custom_port_batching_v2_nat64_deletion_records_sent_failure}
  */
  readonly customPortBatchingV2Nat64DeletionRecordsSentFailure?: number;
  /**
  * Custom Dslite Port Map Creation Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_mapping_dslite_creation_records_sent DataThunderNetflowMonitorStats#custom_port_mapping_dslite_creation_records_sent}
  */
  readonly customPortMappingDsliteCreationRecordsSent?: number;
  /**
  * Custom Dslite Port Map Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_mapping_dslite_creation_records_sent_failure DataThunderNetflowMonitorStats#custom_port_mapping_dslite_creation_records_sent_failure}
  */
  readonly customPortMappingDsliteCreationRecordsSentFailure?: number;
  /**
  * Custom Dslite Port Map Deletion Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_mapping_dslite_deletion_records_sent DataThunderNetflowMonitorStats#custom_port_mapping_dslite_deletion_records_sent}
  */
  readonly customPortMappingDsliteDeletionRecordsSent?: number;
  /**
  * Custom Dslite Port Map Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_mapping_dslite_deletion_records_sent_failure DataThunderNetflowMonitorStats#custom_port_mapping_dslite_deletion_records_sent_failure}
  */
  readonly customPortMappingDsliteDeletionRecordsSentFailure?: number;
  /**
  * Custom Nat44 Port Map Creation Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_mapping_nat44_creation_records_sent DataThunderNetflowMonitorStats#custom_port_mapping_nat44_creation_records_sent}
  */
  readonly customPortMappingNat44CreationRecordsSent?: number;
  /**
  * Custom Nat44 Port Map Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_mapping_nat44_creation_records_sent_failure DataThunderNetflowMonitorStats#custom_port_mapping_nat44_creation_records_sent_failure}
  */
  readonly customPortMappingNat44CreationRecordsSentFailure?: number;
  /**
  * Custom Nat44 Port Map Deletion Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_mapping_nat44_deletion_records_sent DataThunderNetflowMonitorStats#custom_port_mapping_nat44_deletion_records_sent}
  */
  readonly customPortMappingNat44DeletionRecordsSent?: number;
  /**
  * Custom Nat44 Port Map Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_mapping_nat44_deletion_records_sent_failure DataThunderNetflowMonitorStats#custom_port_mapping_nat44_deletion_records_sent_failure}
  */
  readonly customPortMappingNat44DeletionRecordsSentFailure?: number;
  /**
  * Custom Nat64 Port Map Creation Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_mapping_nat64_creation_records_sent DataThunderNetflowMonitorStats#custom_port_mapping_nat64_creation_records_sent}
  */
  readonly customPortMappingNat64CreationRecordsSent?: number;
  /**
  * Custom Nat64 Port Map Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_mapping_nat64_creation_records_sent_failure DataThunderNetflowMonitorStats#custom_port_mapping_nat64_creation_records_sent_failure}
  */
  readonly customPortMappingNat64CreationRecordsSentFailure?: number;
  /**
  * Custom Nat64 Port Map Deletion Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_mapping_nat64_deletion_records_sent DataThunderNetflowMonitorStats#custom_port_mapping_nat64_deletion_records_sent}
  */
  readonly customPortMappingNat64DeletionRecordsSent?: number;
  /**
  * Custom Nat64 Port Map Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_port_mapping_nat64_deletion_records_sent_failure DataThunderNetflowMonitorStats#custom_port_mapping_nat64_deletion_records_sent_failure}
  */
  readonly customPortMappingNat64DeletionRecordsSentFailure?: number;
  /**
  * Custom Dslite Session Creation Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_session_event_dslite_creation_records_sent DataThunderNetflowMonitorStats#custom_session_event_dslite_creation_records_sent}
  */
  readonly customSessionEventDsliteCreationRecordsSent?: number;
  /**
  * Custom Dslite Session Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_session_event_dslite_creation_records_sent_failure DataThunderNetflowMonitorStats#custom_session_event_dslite_creation_records_sent_failure}
  */
  readonly customSessionEventDsliteCreationRecordsSentFailure?: number;
  /**
  * Custom Dslite Session Deletion Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_session_event_dslite_deletion_records_sent DataThunderNetflowMonitorStats#custom_session_event_dslite_deletion_records_sent}
  */
  readonly customSessionEventDsliteDeletionRecordsSent?: number;
  /**
  * Custom Dslite Session Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_session_event_dslite_deletion_records_sent_failure DataThunderNetflowMonitorStats#custom_session_event_dslite_deletion_records_sent_failure}
  */
  readonly customSessionEventDsliteDeletionRecordsSentFailure?: number;
  /**
  * Custom FW4 Session Creation Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_session_event_fw4_creation_records_sent DataThunderNetflowMonitorStats#custom_session_event_fw4_creation_records_sent}
  */
  readonly customSessionEventFw4CreationRecordsSent?: number;
  /**
  * Custom FW4 Session Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_session_event_fw4_creation_records_sent_failure DataThunderNetflowMonitorStats#custom_session_event_fw4_creation_records_sent_failure}
  */
  readonly customSessionEventFw4CreationRecordsSentFailure?: number;
  /**
  * Custom FW4 Session Deletion Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_session_event_fw4_deletion_records_sent DataThunderNetflowMonitorStats#custom_session_event_fw4_deletion_records_sent}
  */
  readonly customSessionEventFw4DeletionRecordsSent?: number;
  /**
  * Custom FW4 Session Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_session_event_fw4_deletion_records_sent_failure DataThunderNetflowMonitorStats#custom_session_event_fw4_deletion_records_sent_failure}
  */
  readonly customSessionEventFw4DeletionRecordsSentFailure?: number;
  /**
  * Custom FW6 Session Creation Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_session_event_fw6_creation_records_sent DataThunderNetflowMonitorStats#custom_session_event_fw6_creation_records_sent}
  */
  readonly customSessionEventFw6CreationRecordsSent?: number;
  /**
  * Custom FW6 Session Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_session_event_fw6_creation_records_sent_failure DataThunderNetflowMonitorStats#custom_session_event_fw6_creation_records_sent_failure}
  */
  readonly customSessionEventFw6CreationRecordsSentFailure?: number;
  /**
  * Custom FW6 Session Deletion Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_session_event_fw6_deletion_records_sent DataThunderNetflowMonitorStats#custom_session_event_fw6_deletion_records_sent}
  */
  readonly customSessionEventFw6DeletionRecordsSent?: number;
  /**
  * Custom FW6 Session Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_session_event_fw6_deletion_records_sent_failure DataThunderNetflowMonitorStats#custom_session_event_fw6_deletion_records_sent_failure}
  */
  readonly customSessionEventFw6DeletionRecordsSentFailure?: number;
  /**
  * Custom Nat44 Session Creation Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_session_event_nat44_creation_records_sent DataThunderNetflowMonitorStats#custom_session_event_nat44_creation_records_sent}
  */
  readonly customSessionEventNat44CreationRecordsSent?: number;
  /**
  * Custom Nat44 Session Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_session_event_nat44_creation_records_sent_failure DataThunderNetflowMonitorStats#custom_session_event_nat44_creation_records_sent_failure}
  */
  readonly customSessionEventNat44CreationRecordsSentFailure?: number;
  /**
  * Custom Nat44 Session Deletion Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_session_event_nat44_deletion_records_sent DataThunderNetflowMonitorStats#custom_session_event_nat44_deletion_records_sent}
  */
  readonly customSessionEventNat44DeletionRecordsSent?: number;
  /**
  * Custom Nat44 Session Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_session_event_nat44_deletion_records_sent_failure DataThunderNetflowMonitorStats#custom_session_event_nat44_deletion_records_sent_failure}
  */
  readonly customSessionEventNat44DeletionRecordsSentFailure?: number;
  /**
  * Custom Nat64 Session Creation Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_session_event_nat64_creation_records_sent DataThunderNetflowMonitorStats#custom_session_event_nat64_creation_records_sent}
  */
  readonly customSessionEventNat64CreationRecordsSent?: number;
  /**
  * Custom Nat64 Session Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_session_event_nat64_creation_records_sent_failure DataThunderNetflowMonitorStats#custom_session_event_nat64_creation_records_sent_failure}
  */
  readonly customSessionEventNat64CreationRecordsSentFailure?: number;
  /**
  * Custom Nat64 Session Deletion Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_session_event_nat64_deletion_records_sent DataThunderNetflowMonitorStats#custom_session_event_nat64_deletion_records_sent}
  */
  readonly customSessionEventNat64DeletionRecordsSent?: number;
  /**
  * Custom Nat64 Session Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#custom_session_event_nat64_deletion_records_sent_failure DataThunderNetflowMonitorStats#custom_session_event_nat64_deletion_records_sent_failure}
  */
  readonly customSessionEventNat64DeletionRecordsSentFailure?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#ddos_general_stat_records_sent DataThunderNetflowMonitorStats#ddos_general_stat_records_sent}
  */
  readonly ddosGeneralStatRecordsSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#ddos_general_stat_records_sent_failure DataThunderNetflowMonitorStats#ddos_general_stat_records_sent_failure}
  */
  readonly ddosGeneralStatRecordsSentFailure?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#ddos_http_stat_records_sent DataThunderNetflowMonitorStats#ddos_http_stat_records_sent}
  */
  readonly ddosHttpStatRecordsSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#ddos_http_stat_records_sent_failure DataThunderNetflowMonitorStats#ddos_http_stat_records_sent_failure}
  */
  readonly ddosHttpStatRecordsSentFailure?: number;
  /**
  * Dslite Flow Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#dslite_records_sent DataThunderNetflowMonitorStats#dslite_records_sent}
  */
  readonly dsliteRecordsSent?: number;
  /**
  * Dslite Flow Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#dslite_records_sent_failure DataThunderNetflowMonitorStats#dslite_records_sent_failure}
  */
  readonly dsliteRecordsSentFailure?: number;
  /**
  * NAT44 Flow Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#nat44_records_sent DataThunderNetflowMonitorStats#nat44_records_sent}
  */
  readonly nat44RecordsSent?: number;
  /**
  * NAT44 Flow Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#nat44_records_sent_failure DataThunderNetflowMonitorStats#nat44_records_sent_failure}
  */
  readonly nat44RecordsSentFailure?: number;
  /**
  * NAT64 Flow Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#nat64_records_sent DataThunderNetflowMonitorStats#nat64_records_sent}
  */
  readonly nat64RecordsSent?: number;
  /**
  * NAT64 Flow Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#nat64_records_sent_failure DataThunderNetflowMonitorStats#nat64_records_sent_failure}
  */
  readonly nat64RecordsSentFailure?: number;
  /**
  * Netflow v5 Ext Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#netflow_v5_ext_records_sent DataThunderNetflowMonitorStats#netflow_v5_ext_records_sent}
  */
  readonly netflowV5ExtRecordsSent?: number;
  /**
  * Netflow v5 Ext Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#netflow_v5_ext_records_sent_failure DataThunderNetflowMonitorStats#netflow_v5_ext_records_sent_failure}
  */
  readonly netflowV5ExtRecordsSentFailure?: number;
  /**
  * Netflow v5 Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#netflow_v5_records_sent DataThunderNetflowMonitorStats#netflow_v5_records_sent}
  */
  readonly netflowV5RecordsSent?: number;
  /**
  * Netflow v5 Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#netflow_v5_records_sent_failure DataThunderNetflowMonitorStats#netflow_v5_records_sent_failure}
  */
  readonly netflowV5RecordsSentFailure?: number;
  /**
  * Sent Packets Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#packets_sent DataThunderNetflowMonitorStats#packets_sent}
  */
  readonly packetsSent?: number;
  /**
  * Port Batching Dslite Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#port_batching_dslite_records_sent DataThunderNetflowMonitorStats#port_batching_dslite_records_sent}
  */
  readonly portBatchingDsliteRecordsSent?: number;
  /**
  * Port Batching Dslite Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#port_batching_dslite_records_sent_failure DataThunderNetflowMonitorStats#port_batching_dslite_records_sent_failure}
  */
  readonly portBatchingDsliteRecordsSentFailure?: number;
  /**
  * Port Batching Nat44 Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#port_batching_nat44_records_sent DataThunderNetflowMonitorStats#port_batching_nat44_records_sent}
  */
  readonly portBatchingNat44RecordsSent?: number;
  /**
  * Port Batching Nat44 Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#port_batching_nat44_records_sent_failure DataThunderNetflowMonitorStats#port_batching_nat44_records_sent_failure}
  */
  readonly portBatchingNat44RecordsSentFailure?: number;
  /**
  * Port Batching Nat64 Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#port_batching_nat64_records_sent DataThunderNetflowMonitorStats#port_batching_nat64_records_sent}
  */
  readonly portBatchingNat64RecordsSent?: number;
  /**
  * Port Batching Nat64 Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#port_batching_nat64_records_sent_failure DataThunderNetflowMonitorStats#port_batching_nat64_records_sent_failure}
  */
  readonly portBatchingNat64RecordsSentFailure?: number;
  /**
  * Port Batching V2 Dslite Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#port_batching_v2_dslite_records_sent DataThunderNetflowMonitorStats#port_batching_v2_dslite_records_sent}
  */
  readonly portBatchingV2DsliteRecordsSent?: number;
  /**
  * Port Batching V2 Dslite Records Falied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#port_batching_v2_dslite_records_sent_failure DataThunderNetflowMonitorStats#port_batching_v2_dslite_records_sent_failure}
  */
  readonly portBatchingV2DsliteRecordsSentFailure?: number;
  /**
  * Port Batching V2 Nat44 Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#port_batching_v2_nat44_records_sent DataThunderNetflowMonitorStats#port_batching_v2_nat44_records_sent}
  */
  readonly portBatchingV2Nat44RecordsSent?: number;
  /**
  * Port Batching V2 Nat44 Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#port_batching_v2_nat44_records_sent_failure DataThunderNetflowMonitorStats#port_batching_v2_nat44_records_sent_failure}
  */
  readonly portBatchingV2Nat44RecordsSentFailure?: number;
  /**
  * Port Batching V2 Nat64 Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#port_batching_v2_nat64_records_sent DataThunderNetflowMonitorStats#port_batching_v2_nat64_records_sent}
  */
  readonly portBatchingV2Nat64RecordsSent?: number;
  /**
  * Port Batching V2 Nat64 Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#port_batching_v2_nat64_records_sent_failure DataThunderNetflowMonitorStats#port_batching_v2_nat64_records_sent_failure}
  */
  readonly portBatchingV2Nat64RecordsSentFailure?: number;
  /**
  * Port Mapping Dslite Event Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#port_mapping_dslite_records_sent DataThunderNetflowMonitorStats#port_mapping_dslite_records_sent}
  */
  readonly portMappingDsliteRecordsSent?: number;
  /**
  * Port Mapping Dslite Event Records failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#port_mapping_dslite_records_sent_failure DataThunderNetflowMonitorStats#port_mapping_dslite_records_sent_failure}
  */
  readonly portMappingDsliteRecordsSentFailure?: number;
  /**
  * Port Mapping Nat44 Event Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#port_mapping_nat44_records_sent DataThunderNetflowMonitorStats#port_mapping_nat44_records_sent}
  */
  readonly portMappingNat44RecordsSent?: number;
  /**
  * Port Mapping Nat44 Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#port_mapping_nat44_records_sent_failure DataThunderNetflowMonitorStats#port_mapping_nat44_records_sent_failure}
  */
  readonly portMappingNat44RecordsSentFailure?: number;
  /**
  * Port Mapping Nat64 Event Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#port_mapping_nat64_records_sent DataThunderNetflowMonitorStats#port_mapping_nat64_records_sent}
  */
  readonly portMappingNat64RecordsSent?: number;
  /**
  * Port Mapping Nat64 Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#port_mapping_nat64_records_sent_failure DataThunderNetflowMonitorStats#port_mapping_nat64_records_sent_failure}
  */
  readonly portMappingNat64RecordsSentFailure?: number;
  /**
  * Reduced Logs by Destination Protocol and Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#reduced_logs_by_destination DataThunderNetflowMonitorStats#reduced_logs_by_destination}
  */
  readonly reducedLogsByDestination?: number;
  /**
  * Dslite Session Event Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#session_event_dslite_records_sent DataThunderNetflowMonitorStats#session_event_dslite_records_sent}
  */
  readonly sessionEventDsliteRecordsSent?: number;
  /**
  * Dslite Session Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#session_event_dslite_records_sent_failure DataThunderNetflowMonitorStats#session_event_dslite_records_sent_failure}
  */
  readonly sessionEventDsliteRecordsSentFailure?: number;
  /**
  * FW4 Session Event Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#session_event_fw4_records_sent DataThunderNetflowMonitorStats#session_event_fw4_records_sent}
  */
  readonly sessionEventFw4RecordsSent?: number;
  /**
  * FW4 Session Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#session_event_fw4_records_sent_failure DataThunderNetflowMonitorStats#session_event_fw4_records_sent_failure}
  */
  readonly sessionEventFw4RecordsSentFailure?: number;
  /**
  * FW6 Session Event Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#session_event_fw6_records_sent DataThunderNetflowMonitorStats#session_event_fw6_records_sent}
  */
  readonly sessionEventFw6RecordsSent?: number;
  /**
  * FW6 Session Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#session_event_fw6_records_sent_failure DataThunderNetflowMonitorStats#session_event_fw6_records_sent_failure}
  */
  readonly sessionEventFw6RecordsSentFailure?: number;
  /**
  * Nat44 Session Event Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#session_event_nat44_records_sent DataThunderNetflowMonitorStats#session_event_nat44_records_sent}
  */
  readonly sessionEventNat44RecordsSent?: number;
  /**
  * Nat44 Session Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#session_event_nat44_records_sent_failure DataThunderNetflowMonitorStats#session_event_nat44_records_sent_failure}
  */
  readonly sessionEventNat44RecordsSentFailure?: number;
  /**
  * Nat64 Session Event Records Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#session_event_nat64_records_sent DataThunderNetflowMonitorStats#session_event_nat64_records_sent}
  */
  readonly sessionEventNat64RecordsSent?: number;
  /**
  * Nat64 Session Event Records Falied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#session_event_nat64_records_sent_failure DataThunderNetflowMonitorStats#session_event_nat64_records_sent_failure}
  */
  readonly sessionEventNat64RecordsSentFailure?: number;
}

export function dataThunderNetflowMonitorStatsStatsToTerraform(struct?: DataThunderNetflowMonitorStatsStatsOutputReference | DataThunderNetflowMonitorStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bytes_sent: cdktf.numberToTerraform(struct!.bytesSent),
    custom_deny_reset_event_fw4_records_sent: cdktf.numberToTerraform(struct!.customDenyResetEventFw4RecordsSent),
    custom_deny_reset_event_fw4_records_sent_failure: cdktf.numberToTerraform(struct!.customDenyResetEventFw4RecordsSentFailure),
    custom_deny_reset_event_fw6_records_sent: cdktf.numberToTerraform(struct!.customDenyResetEventFw6RecordsSent),
    custom_deny_reset_event_fw6_records_sent_failure: cdktf.numberToTerraform(struct!.customDenyResetEventFw6RecordsSentFailure),
    custom_fw_iddos_entry_created_records_sent: cdktf.numberToTerraform(struct!.customFwIddosEntryCreatedRecordsSent),
    custom_fw_iddos_entry_created_records_sent_failure: cdktf.numberToTerraform(struct!.customFwIddosEntryCreatedRecordsSentFailure),
    custom_fw_iddos_entry_deleted_records_sent: cdktf.numberToTerraform(struct!.customFwIddosEntryDeletedRecordsSent),
    custom_fw_iddos_entry_deleted_records_sent_failure: cdktf.numberToTerraform(struct!.customFwIddosEntryDeletedRecordsSentFailure),
    custom_fw_sesn_limit_exceeded_records_sent: cdktf.numberToTerraform(struct!.customFwSesnLimitExceededRecordsSent),
    custom_fw_sesn_limit_exceeded_records_sent_failure: cdktf.numberToTerraform(struct!.customFwSesnLimitExceededRecordsSentFailure),
    custom_gtp_c_tunnel_event_records_sent: cdktf.numberToTerraform(struct!.customGtpCTunnelEventRecordsSent),
    custom_gtp_c_tunnel_event_records_sent_failure: cdktf.numberToTerraform(struct!.customGtpCTunnelEventRecordsSentFailure),
    custom_gtp_deny_event_records_sent: cdktf.numberToTerraform(struct!.customGtpDenyEventRecordsSent),
    custom_gtp_deny_event_records_sent_failure: cdktf.numberToTerraform(struct!.customGtpDenyEventRecordsSentFailure),
    custom_gtp_info_event_records_sent: cdktf.numberToTerraform(struct!.customGtpInfoEventRecordsSent),
    custom_gtp_info_event_records_sent_failure: cdktf.numberToTerraform(struct!.customGtpInfoEventRecordsSentFailure),
    custom_gtp_rate_limit_periodic_records_sent: cdktf.numberToTerraform(struct!.customGtpRateLimitPeriodicRecordsSent),
    custom_gtp_rate_limit_periodic_records_sent_failure: cdktf.numberToTerraform(struct!.customGtpRateLimitPeriodicRecordsSentFailure),
    custom_gtp_u_tunnel_event_records_sent: cdktf.numberToTerraform(struct!.customGtpUTunnelEventRecordsSent),
    custom_gtp_u_tunnel_event_records_sent_failure: cdktf.numberToTerraform(struct!.customGtpUTunnelEventRecordsSentFailure),
    custom_nat_iddos_l3_entry_created_records_sent: cdktf.numberToTerraform(struct!.customNatIddosL3EntryCreatedRecordsSent),
    custom_nat_iddos_l3_entry_created_records_sent_failure: cdktf.numberToTerraform(struct!.customNatIddosL3EntryCreatedRecordsSentFailure),
    custom_nat_iddos_l3_entry_deleted_records_sent: cdktf.numberToTerraform(struct!.customNatIddosL3EntryDeletedRecordsSent),
    custom_nat_iddos_l3_entry_deleted_records_sent_failure: cdktf.numberToTerraform(struct!.customNatIddosL3EntryDeletedRecordsSentFailure),
    custom_nat_iddos_l4_entry_created_records_sent: cdktf.numberToTerraform(struct!.customNatIddosL4EntryCreatedRecordsSent),
    custom_nat_iddos_l4_entry_created_records_sent_failure: cdktf.numberToTerraform(struct!.customNatIddosL4EntryCreatedRecordsSentFailure),
    custom_nat_iddos_l4_entry_deleted_records_sent: cdktf.numberToTerraform(struct!.customNatIddosL4EntryDeletedRecordsSent),
    custom_nat_iddos_l4_entry_deleted_records_sent_failure: cdktf.numberToTerraform(struct!.customNatIddosL4EntryDeletedRecordsSentFailure),
    custom_port_batching_dslite_creation_records_sent: cdktf.numberToTerraform(struct!.customPortBatchingDsliteCreationRecordsSent),
    custom_port_batching_dslite_creation_records_sent_failure: cdktf.numberToTerraform(struct!.customPortBatchingDsliteCreationRecordsSentFailure),
    custom_port_batching_dslite_deletion_records_sent: cdktf.numberToTerraform(struct!.customPortBatchingDsliteDeletionRecordsSent),
    custom_port_batching_dslite_deletion_records_sent_failure: cdktf.numberToTerraform(struct!.customPortBatchingDsliteDeletionRecordsSentFailure),
    custom_port_batching_nat44_creation_records_sent: cdktf.numberToTerraform(struct!.customPortBatchingNat44CreationRecordsSent),
    custom_port_batching_nat44_creation_records_sent_failure: cdktf.numberToTerraform(struct!.customPortBatchingNat44CreationRecordsSentFailure),
    custom_port_batching_nat44_deletion_records_sent: cdktf.numberToTerraform(struct!.customPortBatchingNat44DeletionRecordsSent),
    custom_port_batching_nat44_deletion_records_sent_failure: cdktf.numberToTerraform(struct!.customPortBatchingNat44DeletionRecordsSentFailure),
    custom_port_batching_nat64_creation_records_sent: cdktf.numberToTerraform(struct!.customPortBatchingNat64CreationRecordsSent),
    custom_port_batching_nat64_creation_records_sent_failure: cdktf.numberToTerraform(struct!.customPortBatchingNat64CreationRecordsSentFailure),
    custom_port_batching_nat64_deletion_records_sent: cdktf.numberToTerraform(struct!.customPortBatchingNat64DeletionRecordsSent),
    custom_port_batching_nat64_deletion_records_sent_failure: cdktf.numberToTerraform(struct!.customPortBatchingNat64DeletionRecordsSentFailure),
    custom_port_batching_v2_dslite_creation_records_sent: cdktf.numberToTerraform(struct!.customPortBatchingV2DsliteCreationRecordsSent),
    custom_port_batching_v2_dslite_creation_records_sent_failure: cdktf.numberToTerraform(struct!.customPortBatchingV2DsliteCreationRecordsSentFailure),
    custom_port_batching_v2_dslite_deletion_records_sent: cdktf.numberToTerraform(struct!.customPortBatchingV2DsliteDeletionRecordsSent),
    custom_port_batching_v2_dslite_deletion_records_sent_failure: cdktf.numberToTerraform(struct!.customPortBatchingV2DsliteDeletionRecordsSentFailure),
    custom_port_batching_v2_nat44_creation_records_sent: cdktf.numberToTerraform(struct!.customPortBatchingV2Nat44CreationRecordsSent),
    custom_port_batching_v2_nat44_creation_records_sent_failure: cdktf.numberToTerraform(struct!.customPortBatchingV2Nat44CreationRecordsSentFailure),
    custom_port_batching_v2_nat44_deletion_records_sent: cdktf.numberToTerraform(struct!.customPortBatchingV2Nat44DeletionRecordsSent),
    custom_port_batching_v2_nat44_deletion_records_sent_failure: cdktf.numberToTerraform(struct!.customPortBatchingV2Nat44DeletionRecordsSentFailure),
    custom_port_batching_v2_nat64_creation_records_sent: cdktf.numberToTerraform(struct!.customPortBatchingV2Nat64CreationRecordsSent),
    custom_port_batching_v2_nat64_creation_records_sent_failure: cdktf.numberToTerraform(struct!.customPortBatchingV2Nat64CreationRecordsSentFailure),
    custom_port_batching_v2_nat64_deletion_records_sent: cdktf.numberToTerraform(struct!.customPortBatchingV2Nat64DeletionRecordsSent),
    custom_port_batching_v2_nat64_deletion_records_sent_failure: cdktf.numberToTerraform(struct!.customPortBatchingV2Nat64DeletionRecordsSentFailure),
    custom_port_mapping_dslite_creation_records_sent: cdktf.numberToTerraform(struct!.customPortMappingDsliteCreationRecordsSent),
    custom_port_mapping_dslite_creation_records_sent_failure: cdktf.numberToTerraform(struct!.customPortMappingDsliteCreationRecordsSentFailure),
    custom_port_mapping_dslite_deletion_records_sent: cdktf.numberToTerraform(struct!.customPortMappingDsliteDeletionRecordsSent),
    custom_port_mapping_dslite_deletion_records_sent_failure: cdktf.numberToTerraform(struct!.customPortMappingDsliteDeletionRecordsSentFailure),
    custom_port_mapping_nat44_creation_records_sent: cdktf.numberToTerraform(struct!.customPortMappingNat44CreationRecordsSent),
    custom_port_mapping_nat44_creation_records_sent_failure: cdktf.numberToTerraform(struct!.customPortMappingNat44CreationRecordsSentFailure),
    custom_port_mapping_nat44_deletion_records_sent: cdktf.numberToTerraform(struct!.customPortMappingNat44DeletionRecordsSent),
    custom_port_mapping_nat44_deletion_records_sent_failure: cdktf.numberToTerraform(struct!.customPortMappingNat44DeletionRecordsSentFailure),
    custom_port_mapping_nat64_creation_records_sent: cdktf.numberToTerraform(struct!.customPortMappingNat64CreationRecordsSent),
    custom_port_mapping_nat64_creation_records_sent_failure: cdktf.numberToTerraform(struct!.customPortMappingNat64CreationRecordsSentFailure),
    custom_port_mapping_nat64_deletion_records_sent: cdktf.numberToTerraform(struct!.customPortMappingNat64DeletionRecordsSent),
    custom_port_mapping_nat64_deletion_records_sent_failure: cdktf.numberToTerraform(struct!.customPortMappingNat64DeletionRecordsSentFailure),
    custom_session_event_dslite_creation_records_sent: cdktf.numberToTerraform(struct!.customSessionEventDsliteCreationRecordsSent),
    custom_session_event_dslite_creation_records_sent_failure: cdktf.numberToTerraform(struct!.customSessionEventDsliteCreationRecordsSentFailure),
    custom_session_event_dslite_deletion_records_sent: cdktf.numberToTerraform(struct!.customSessionEventDsliteDeletionRecordsSent),
    custom_session_event_dslite_deletion_records_sent_failure: cdktf.numberToTerraform(struct!.customSessionEventDsliteDeletionRecordsSentFailure),
    custom_session_event_fw4_creation_records_sent: cdktf.numberToTerraform(struct!.customSessionEventFw4CreationRecordsSent),
    custom_session_event_fw4_creation_records_sent_failure: cdktf.numberToTerraform(struct!.customSessionEventFw4CreationRecordsSentFailure),
    custom_session_event_fw4_deletion_records_sent: cdktf.numberToTerraform(struct!.customSessionEventFw4DeletionRecordsSent),
    custom_session_event_fw4_deletion_records_sent_failure: cdktf.numberToTerraform(struct!.customSessionEventFw4DeletionRecordsSentFailure),
    custom_session_event_fw6_creation_records_sent: cdktf.numberToTerraform(struct!.customSessionEventFw6CreationRecordsSent),
    custom_session_event_fw6_creation_records_sent_failure: cdktf.numberToTerraform(struct!.customSessionEventFw6CreationRecordsSentFailure),
    custom_session_event_fw6_deletion_records_sent: cdktf.numberToTerraform(struct!.customSessionEventFw6DeletionRecordsSent),
    custom_session_event_fw6_deletion_records_sent_failure: cdktf.numberToTerraform(struct!.customSessionEventFw6DeletionRecordsSentFailure),
    custom_session_event_nat44_creation_records_sent: cdktf.numberToTerraform(struct!.customSessionEventNat44CreationRecordsSent),
    custom_session_event_nat44_creation_records_sent_failure: cdktf.numberToTerraform(struct!.customSessionEventNat44CreationRecordsSentFailure),
    custom_session_event_nat44_deletion_records_sent: cdktf.numberToTerraform(struct!.customSessionEventNat44DeletionRecordsSent),
    custom_session_event_nat44_deletion_records_sent_failure: cdktf.numberToTerraform(struct!.customSessionEventNat44DeletionRecordsSentFailure),
    custom_session_event_nat64_creation_records_sent: cdktf.numberToTerraform(struct!.customSessionEventNat64CreationRecordsSent),
    custom_session_event_nat64_creation_records_sent_failure: cdktf.numberToTerraform(struct!.customSessionEventNat64CreationRecordsSentFailure),
    custom_session_event_nat64_deletion_records_sent: cdktf.numberToTerraform(struct!.customSessionEventNat64DeletionRecordsSent),
    custom_session_event_nat64_deletion_records_sent_failure: cdktf.numberToTerraform(struct!.customSessionEventNat64DeletionRecordsSentFailure),
    ddos_general_stat_records_sent: cdktf.numberToTerraform(struct!.ddosGeneralStatRecordsSent),
    ddos_general_stat_records_sent_failure: cdktf.numberToTerraform(struct!.ddosGeneralStatRecordsSentFailure),
    ddos_http_stat_records_sent: cdktf.numberToTerraform(struct!.ddosHttpStatRecordsSent),
    ddos_http_stat_records_sent_failure: cdktf.numberToTerraform(struct!.ddosHttpStatRecordsSentFailure),
    dslite_records_sent: cdktf.numberToTerraform(struct!.dsliteRecordsSent),
    dslite_records_sent_failure: cdktf.numberToTerraform(struct!.dsliteRecordsSentFailure),
    nat44_records_sent: cdktf.numberToTerraform(struct!.nat44RecordsSent),
    nat44_records_sent_failure: cdktf.numberToTerraform(struct!.nat44RecordsSentFailure),
    nat64_records_sent: cdktf.numberToTerraform(struct!.nat64RecordsSent),
    nat64_records_sent_failure: cdktf.numberToTerraform(struct!.nat64RecordsSentFailure),
    netflow_v5_ext_records_sent: cdktf.numberToTerraform(struct!.netflowV5ExtRecordsSent),
    netflow_v5_ext_records_sent_failure: cdktf.numberToTerraform(struct!.netflowV5ExtRecordsSentFailure),
    netflow_v5_records_sent: cdktf.numberToTerraform(struct!.netflowV5RecordsSent),
    netflow_v5_records_sent_failure: cdktf.numberToTerraform(struct!.netflowV5RecordsSentFailure),
    packets_sent: cdktf.numberToTerraform(struct!.packetsSent),
    port_batching_dslite_records_sent: cdktf.numberToTerraform(struct!.portBatchingDsliteRecordsSent),
    port_batching_dslite_records_sent_failure: cdktf.numberToTerraform(struct!.portBatchingDsliteRecordsSentFailure),
    port_batching_nat44_records_sent: cdktf.numberToTerraform(struct!.portBatchingNat44RecordsSent),
    port_batching_nat44_records_sent_failure: cdktf.numberToTerraform(struct!.portBatchingNat44RecordsSentFailure),
    port_batching_nat64_records_sent: cdktf.numberToTerraform(struct!.portBatchingNat64RecordsSent),
    port_batching_nat64_records_sent_failure: cdktf.numberToTerraform(struct!.portBatchingNat64RecordsSentFailure),
    port_batching_v2_dslite_records_sent: cdktf.numberToTerraform(struct!.portBatchingV2DsliteRecordsSent),
    port_batching_v2_dslite_records_sent_failure: cdktf.numberToTerraform(struct!.portBatchingV2DsliteRecordsSentFailure),
    port_batching_v2_nat44_records_sent: cdktf.numberToTerraform(struct!.portBatchingV2Nat44RecordsSent),
    port_batching_v2_nat44_records_sent_failure: cdktf.numberToTerraform(struct!.portBatchingV2Nat44RecordsSentFailure),
    port_batching_v2_nat64_records_sent: cdktf.numberToTerraform(struct!.portBatchingV2Nat64RecordsSent),
    port_batching_v2_nat64_records_sent_failure: cdktf.numberToTerraform(struct!.portBatchingV2Nat64RecordsSentFailure),
    port_mapping_dslite_records_sent: cdktf.numberToTerraform(struct!.portMappingDsliteRecordsSent),
    port_mapping_dslite_records_sent_failure: cdktf.numberToTerraform(struct!.portMappingDsliteRecordsSentFailure),
    port_mapping_nat44_records_sent: cdktf.numberToTerraform(struct!.portMappingNat44RecordsSent),
    port_mapping_nat44_records_sent_failure: cdktf.numberToTerraform(struct!.portMappingNat44RecordsSentFailure),
    port_mapping_nat64_records_sent: cdktf.numberToTerraform(struct!.portMappingNat64RecordsSent),
    port_mapping_nat64_records_sent_failure: cdktf.numberToTerraform(struct!.portMappingNat64RecordsSentFailure),
    reduced_logs_by_destination: cdktf.numberToTerraform(struct!.reducedLogsByDestination),
    session_event_dslite_records_sent: cdktf.numberToTerraform(struct!.sessionEventDsliteRecordsSent),
    session_event_dslite_records_sent_failure: cdktf.numberToTerraform(struct!.sessionEventDsliteRecordsSentFailure),
    session_event_fw4_records_sent: cdktf.numberToTerraform(struct!.sessionEventFw4RecordsSent),
    session_event_fw4_records_sent_failure: cdktf.numberToTerraform(struct!.sessionEventFw4RecordsSentFailure),
    session_event_fw6_records_sent: cdktf.numberToTerraform(struct!.sessionEventFw6RecordsSent),
    session_event_fw6_records_sent_failure: cdktf.numberToTerraform(struct!.sessionEventFw6RecordsSentFailure),
    session_event_nat44_records_sent: cdktf.numberToTerraform(struct!.sessionEventNat44RecordsSent),
    session_event_nat44_records_sent_failure: cdktf.numberToTerraform(struct!.sessionEventNat44RecordsSentFailure),
    session_event_nat64_records_sent: cdktf.numberToTerraform(struct!.sessionEventNat64RecordsSent),
    session_event_nat64_records_sent_failure: cdktf.numberToTerraform(struct!.sessionEventNat64RecordsSentFailure),
  }
}


export function dataThunderNetflowMonitorStatsStatsToHclTerraform(struct?: DataThunderNetflowMonitorStatsStatsOutputReference | DataThunderNetflowMonitorStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.bytesSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_deny_reset_event_fw4_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customDenyResetEventFw4RecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_deny_reset_event_fw4_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customDenyResetEventFw4RecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_deny_reset_event_fw6_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customDenyResetEventFw6RecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_deny_reset_event_fw6_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customDenyResetEventFw6RecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_fw_iddos_entry_created_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customFwIddosEntryCreatedRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_fw_iddos_entry_created_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customFwIddosEntryCreatedRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_fw_iddos_entry_deleted_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customFwIddosEntryDeletedRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_fw_iddos_entry_deleted_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customFwIddosEntryDeletedRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_fw_sesn_limit_exceeded_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customFwSesnLimitExceededRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_fw_sesn_limit_exceeded_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customFwSesnLimitExceededRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_gtp_c_tunnel_event_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customGtpCTunnelEventRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_gtp_c_tunnel_event_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customGtpCTunnelEventRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_gtp_deny_event_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customGtpDenyEventRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_gtp_deny_event_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customGtpDenyEventRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_gtp_info_event_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customGtpInfoEventRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_gtp_info_event_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customGtpInfoEventRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_gtp_rate_limit_periodic_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customGtpRateLimitPeriodicRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_gtp_rate_limit_periodic_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customGtpRateLimitPeriodicRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_gtp_u_tunnel_event_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customGtpUTunnelEventRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_gtp_u_tunnel_event_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customGtpUTunnelEventRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_nat_iddos_l3_entry_created_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customNatIddosL3EntryCreatedRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_nat_iddos_l3_entry_created_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customNatIddosL3EntryCreatedRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_nat_iddos_l3_entry_deleted_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customNatIddosL3EntryDeletedRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_nat_iddos_l3_entry_deleted_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customNatIddosL3EntryDeletedRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_nat_iddos_l4_entry_created_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customNatIddosL4EntryCreatedRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_nat_iddos_l4_entry_created_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customNatIddosL4EntryCreatedRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_nat_iddos_l4_entry_deleted_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customNatIddosL4EntryDeletedRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_nat_iddos_l4_entry_deleted_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customNatIddosL4EntryDeletedRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_dslite_creation_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingDsliteCreationRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_dslite_creation_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingDsliteCreationRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_dslite_deletion_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingDsliteDeletionRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_dslite_deletion_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingDsliteDeletionRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_nat44_creation_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingNat44CreationRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_nat44_creation_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingNat44CreationRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_nat44_deletion_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingNat44DeletionRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_nat44_deletion_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingNat44DeletionRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_nat64_creation_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingNat64CreationRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_nat64_creation_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingNat64CreationRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_nat64_deletion_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingNat64DeletionRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_nat64_deletion_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingNat64DeletionRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_v2_dslite_creation_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingV2DsliteCreationRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_v2_dslite_creation_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingV2DsliteCreationRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_v2_dslite_deletion_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingV2DsliteDeletionRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_v2_dslite_deletion_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingV2DsliteDeletionRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_v2_nat44_creation_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingV2Nat44CreationRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_v2_nat44_creation_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingV2Nat44CreationRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_v2_nat44_deletion_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingV2Nat44DeletionRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_v2_nat44_deletion_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingV2Nat44DeletionRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_v2_nat64_creation_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingV2Nat64CreationRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_v2_nat64_creation_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingV2Nat64CreationRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_v2_nat64_deletion_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingV2Nat64DeletionRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_v2_nat64_deletion_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingV2Nat64DeletionRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_mapping_dslite_creation_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customPortMappingDsliteCreationRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_mapping_dslite_creation_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customPortMappingDsliteCreationRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_mapping_dslite_deletion_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customPortMappingDsliteDeletionRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_mapping_dslite_deletion_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customPortMappingDsliteDeletionRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_mapping_nat44_creation_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customPortMappingNat44CreationRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_mapping_nat44_creation_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customPortMappingNat44CreationRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_mapping_nat44_deletion_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customPortMappingNat44DeletionRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_mapping_nat44_deletion_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customPortMappingNat44DeletionRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_mapping_nat64_creation_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customPortMappingNat64CreationRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_mapping_nat64_creation_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customPortMappingNat64CreationRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_mapping_nat64_deletion_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customPortMappingNat64DeletionRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_mapping_nat64_deletion_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customPortMappingNat64DeletionRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_dslite_creation_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventDsliteCreationRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_dslite_creation_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventDsliteCreationRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_dslite_deletion_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventDsliteDeletionRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_dslite_deletion_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventDsliteDeletionRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_fw4_creation_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventFw4CreationRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_fw4_creation_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventFw4CreationRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_fw4_deletion_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventFw4DeletionRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_fw4_deletion_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventFw4DeletionRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_fw6_creation_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventFw6CreationRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_fw6_creation_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventFw6CreationRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_fw6_deletion_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventFw6DeletionRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_fw6_deletion_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventFw6DeletionRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_nat44_creation_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventNat44CreationRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_nat44_creation_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventNat44CreationRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_nat44_deletion_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventNat44DeletionRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_nat44_deletion_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventNat44DeletionRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_nat64_creation_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventNat64CreationRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_nat64_creation_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventNat64CreationRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_nat64_deletion_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventNat64DeletionRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_nat64_deletion_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventNat64DeletionRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_general_stat_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.ddosGeneralStatRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_general_stat_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.ddosGeneralStatRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_http_stat_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.ddosHttpStatRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_http_stat_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.ddosHttpStatRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dslite_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.dsliteRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dslite_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.dsliteRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat44_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.nat44RecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat44_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.nat44RecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat64_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.nat64RecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat64_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.nat64RecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow_v5_ext_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.netflowV5ExtRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow_v5_ext_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.netflowV5ExtRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow_v5_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.netflowV5RecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow_v5_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.netflowV5RecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packets_sent: {
      value: cdktf.numberToHclTerraform(struct!.packetsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_batching_dslite_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.portBatchingDsliteRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_batching_dslite_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.portBatchingDsliteRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_batching_nat44_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.portBatchingNat44RecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_batching_nat44_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.portBatchingNat44RecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_batching_nat64_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.portBatchingNat64RecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_batching_nat64_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.portBatchingNat64RecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_batching_v2_dslite_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.portBatchingV2DsliteRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_batching_v2_dslite_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.portBatchingV2DsliteRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_batching_v2_nat44_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.portBatchingV2Nat44RecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_batching_v2_nat44_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.portBatchingV2Nat44RecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_batching_v2_nat64_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.portBatchingV2Nat64RecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_batching_v2_nat64_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.portBatchingV2Nat64RecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_mapping_dslite_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.portMappingDsliteRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_mapping_dslite_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.portMappingDsliteRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_mapping_nat44_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.portMappingNat44RecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_mapping_nat44_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.portMappingNat44RecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_mapping_nat64_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.portMappingNat64RecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_mapping_nat64_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.portMappingNat64RecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reduced_logs_by_destination: {
      value: cdktf.numberToHclTerraform(struct!.reducedLogsByDestination),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_event_dslite_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.sessionEventDsliteRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_event_dslite_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.sessionEventDsliteRecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_event_fw4_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.sessionEventFw4RecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_event_fw4_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.sessionEventFw4RecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_event_fw6_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.sessionEventFw6RecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_event_fw6_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.sessionEventFw6RecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_event_nat44_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.sessionEventNat44RecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_event_nat44_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.sessionEventNat44RecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_event_nat64_records_sent: {
      value: cdktf.numberToHclTerraform(struct!.sessionEventNat64RecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_event_nat64_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.sessionEventNat64RecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetflowMonitorStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNetflowMonitorStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.bytesSent = this._bytesSent;
    }
    if (this._customDenyResetEventFw4RecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDenyResetEventFw4RecordsSent = this._customDenyResetEventFw4RecordsSent;
    }
    if (this._customDenyResetEventFw4RecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDenyResetEventFw4RecordsSentFailure = this._customDenyResetEventFw4RecordsSentFailure;
    }
    if (this._customDenyResetEventFw6RecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDenyResetEventFw6RecordsSent = this._customDenyResetEventFw6RecordsSent;
    }
    if (this._customDenyResetEventFw6RecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDenyResetEventFw6RecordsSentFailure = this._customDenyResetEventFw6RecordsSentFailure;
    }
    if (this._customFwIddosEntryCreatedRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFwIddosEntryCreatedRecordsSent = this._customFwIddosEntryCreatedRecordsSent;
    }
    if (this._customFwIddosEntryCreatedRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFwIddosEntryCreatedRecordsSentFailure = this._customFwIddosEntryCreatedRecordsSentFailure;
    }
    if (this._customFwIddosEntryDeletedRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFwIddosEntryDeletedRecordsSent = this._customFwIddosEntryDeletedRecordsSent;
    }
    if (this._customFwIddosEntryDeletedRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFwIddosEntryDeletedRecordsSentFailure = this._customFwIddosEntryDeletedRecordsSentFailure;
    }
    if (this._customFwSesnLimitExceededRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFwSesnLimitExceededRecordsSent = this._customFwSesnLimitExceededRecordsSent;
    }
    if (this._customFwSesnLimitExceededRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFwSesnLimitExceededRecordsSentFailure = this._customFwSesnLimitExceededRecordsSentFailure;
    }
    if (this._customGtpCTunnelEventRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customGtpCTunnelEventRecordsSent = this._customGtpCTunnelEventRecordsSent;
    }
    if (this._customGtpCTunnelEventRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customGtpCTunnelEventRecordsSentFailure = this._customGtpCTunnelEventRecordsSentFailure;
    }
    if (this._customGtpDenyEventRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customGtpDenyEventRecordsSent = this._customGtpDenyEventRecordsSent;
    }
    if (this._customGtpDenyEventRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customGtpDenyEventRecordsSentFailure = this._customGtpDenyEventRecordsSentFailure;
    }
    if (this._customGtpInfoEventRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customGtpInfoEventRecordsSent = this._customGtpInfoEventRecordsSent;
    }
    if (this._customGtpInfoEventRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customGtpInfoEventRecordsSentFailure = this._customGtpInfoEventRecordsSentFailure;
    }
    if (this._customGtpRateLimitPeriodicRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customGtpRateLimitPeriodicRecordsSent = this._customGtpRateLimitPeriodicRecordsSent;
    }
    if (this._customGtpRateLimitPeriodicRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customGtpRateLimitPeriodicRecordsSentFailure = this._customGtpRateLimitPeriodicRecordsSentFailure;
    }
    if (this._customGtpUTunnelEventRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customGtpUTunnelEventRecordsSent = this._customGtpUTunnelEventRecordsSent;
    }
    if (this._customGtpUTunnelEventRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customGtpUTunnelEventRecordsSentFailure = this._customGtpUTunnelEventRecordsSentFailure;
    }
    if (this._customNatIddosL3EntryCreatedRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNatIddosL3EntryCreatedRecordsSent = this._customNatIddosL3EntryCreatedRecordsSent;
    }
    if (this._customNatIddosL3EntryCreatedRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNatIddosL3EntryCreatedRecordsSentFailure = this._customNatIddosL3EntryCreatedRecordsSentFailure;
    }
    if (this._customNatIddosL3EntryDeletedRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNatIddosL3EntryDeletedRecordsSent = this._customNatIddosL3EntryDeletedRecordsSent;
    }
    if (this._customNatIddosL3EntryDeletedRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNatIddosL3EntryDeletedRecordsSentFailure = this._customNatIddosL3EntryDeletedRecordsSentFailure;
    }
    if (this._customNatIddosL4EntryCreatedRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNatIddosL4EntryCreatedRecordsSent = this._customNatIddosL4EntryCreatedRecordsSent;
    }
    if (this._customNatIddosL4EntryCreatedRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNatIddosL4EntryCreatedRecordsSentFailure = this._customNatIddosL4EntryCreatedRecordsSentFailure;
    }
    if (this._customNatIddosL4EntryDeletedRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNatIddosL4EntryDeletedRecordsSent = this._customNatIddosL4EntryDeletedRecordsSent;
    }
    if (this._customNatIddosL4EntryDeletedRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNatIddosL4EntryDeletedRecordsSentFailure = this._customNatIddosL4EntryDeletedRecordsSentFailure;
    }
    if (this._customPortBatchingDsliteCreationRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingDsliteCreationRecordsSent = this._customPortBatchingDsliteCreationRecordsSent;
    }
    if (this._customPortBatchingDsliteCreationRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingDsliteCreationRecordsSentFailure = this._customPortBatchingDsliteCreationRecordsSentFailure;
    }
    if (this._customPortBatchingDsliteDeletionRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingDsliteDeletionRecordsSent = this._customPortBatchingDsliteDeletionRecordsSent;
    }
    if (this._customPortBatchingDsliteDeletionRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingDsliteDeletionRecordsSentFailure = this._customPortBatchingDsliteDeletionRecordsSentFailure;
    }
    if (this._customPortBatchingNat44CreationRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingNat44CreationRecordsSent = this._customPortBatchingNat44CreationRecordsSent;
    }
    if (this._customPortBatchingNat44CreationRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingNat44CreationRecordsSentFailure = this._customPortBatchingNat44CreationRecordsSentFailure;
    }
    if (this._customPortBatchingNat44DeletionRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingNat44DeletionRecordsSent = this._customPortBatchingNat44DeletionRecordsSent;
    }
    if (this._customPortBatchingNat44DeletionRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingNat44DeletionRecordsSentFailure = this._customPortBatchingNat44DeletionRecordsSentFailure;
    }
    if (this._customPortBatchingNat64CreationRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingNat64CreationRecordsSent = this._customPortBatchingNat64CreationRecordsSent;
    }
    if (this._customPortBatchingNat64CreationRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingNat64CreationRecordsSentFailure = this._customPortBatchingNat64CreationRecordsSentFailure;
    }
    if (this._customPortBatchingNat64DeletionRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingNat64DeletionRecordsSent = this._customPortBatchingNat64DeletionRecordsSent;
    }
    if (this._customPortBatchingNat64DeletionRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingNat64DeletionRecordsSentFailure = this._customPortBatchingNat64DeletionRecordsSentFailure;
    }
    if (this._customPortBatchingV2DsliteCreationRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingV2DsliteCreationRecordsSent = this._customPortBatchingV2DsliteCreationRecordsSent;
    }
    if (this._customPortBatchingV2DsliteCreationRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingV2DsliteCreationRecordsSentFailure = this._customPortBatchingV2DsliteCreationRecordsSentFailure;
    }
    if (this._customPortBatchingV2DsliteDeletionRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingV2DsliteDeletionRecordsSent = this._customPortBatchingV2DsliteDeletionRecordsSent;
    }
    if (this._customPortBatchingV2DsliteDeletionRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingV2DsliteDeletionRecordsSentFailure = this._customPortBatchingV2DsliteDeletionRecordsSentFailure;
    }
    if (this._customPortBatchingV2Nat44CreationRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingV2Nat44CreationRecordsSent = this._customPortBatchingV2Nat44CreationRecordsSent;
    }
    if (this._customPortBatchingV2Nat44CreationRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingV2Nat44CreationRecordsSentFailure = this._customPortBatchingV2Nat44CreationRecordsSentFailure;
    }
    if (this._customPortBatchingV2Nat44DeletionRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingV2Nat44DeletionRecordsSent = this._customPortBatchingV2Nat44DeletionRecordsSent;
    }
    if (this._customPortBatchingV2Nat44DeletionRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingV2Nat44DeletionRecordsSentFailure = this._customPortBatchingV2Nat44DeletionRecordsSentFailure;
    }
    if (this._customPortBatchingV2Nat64CreationRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingV2Nat64CreationRecordsSent = this._customPortBatchingV2Nat64CreationRecordsSent;
    }
    if (this._customPortBatchingV2Nat64CreationRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingV2Nat64CreationRecordsSentFailure = this._customPortBatchingV2Nat64CreationRecordsSentFailure;
    }
    if (this._customPortBatchingV2Nat64DeletionRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingV2Nat64DeletionRecordsSent = this._customPortBatchingV2Nat64DeletionRecordsSent;
    }
    if (this._customPortBatchingV2Nat64DeletionRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingV2Nat64DeletionRecordsSentFailure = this._customPortBatchingV2Nat64DeletionRecordsSentFailure;
    }
    if (this._customPortMappingDsliteCreationRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortMappingDsliteCreationRecordsSent = this._customPortMappingDsliteCreationRecordsSent;
    }
    if (this._customPortMappingDsliteCreationRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortMappingDsliteCreationRecordsSentFailure = this._customPortMappingDsliteCreationRecordsSentFailure;
    }
    if (this._customPortMappingDsliteDeletionRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortMappingDsliteDeletionRecordsSent = this._customPortMappingDsliteDeletionRecordsSent;
    }
    if (this._customPortMappingDsliteDeletionRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortMappingDsliteDeletionRecordsSentFailure = this._customPortMappingDsliteDeletionRecordsSentFailure;
    }
    if (this._customPortMappingNat44CreationRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortMappingNat44CreationRecordsSent = this._customPortMappingNat44CreationRecordsSent;
    }
    if (this._customPortMappingNat44CreationRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortMappingNat44CreationRecordsSentFailure = this._customPortMappingNat44CreationRecordsSentFailure;
    }
    if (this._customPortMappingNat44DeletionRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortMappingNat44DeletionRecordsSent = this._customPortMappingNat44DeletionRecordsSent;
    }
    if (this._customPortMappingNat44DeletionRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortMappingNat44DeletionRecordsSentFailure = this._customPortMappingNat44DeletionRecordsSentFailure;
    }
    if (this._customPortMappingNat64CreationRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortMappingNat64CreationRecordsSent = this._customPortMappingNat64CreationRecordsSent;
    }
    if (this._customPortMappingNat64CreationRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortMappingNat64CreationRecordsSentFailure = this._customPortMappingNat64CreationRecordsSentFailure;
    }
    if (this._customPortMappingNat64DeletionRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortMappingNat64DeletionRecordsSent = this._customPortMappingNat64DeletionRecordsSent;
    }
    if (this._customPortMappingNat64DeletionRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortMappingNat64DeletionRecordsSentFailure = this._customPortMappingNat64DeletionRecordsSentFailure;
    }
    if (this._customSessionEventDsliteCreationRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventDsliteCreationRecordsSent = this._customSessionEventDsliteCreationRecordsSent;
    }
    if (this._customSessionEventDsliteCreationRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventDsliteCreationRecordsSentFailure = this._customSessionEventDsliteCreationRecordsSentFailure;
    }
    if (this._customSessionEventDsliteDeletionRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventDsliteDeletionRecordsSent = this._customSessionEventDsliteDeletionRecordsSent;
    }
    if (this._customSessionEventDsliteDeletionRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventDsliteDeletionRecordsSentFailure = this._customSessionEventDsliteDeletionRecordsSentFailure;
    }
    if (this._customSessionEventFw4CreationRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventFw4CreationRecordsSent = this._customSessionEventFw4CreationRecordsSent;
    }
    if (this._customSessionEventFw4CreationRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventFw4CreationRecordsSentFailure = this._customSessionEventFw4CreationRecordsSentFailure;
    }
    if (this._customSessionEventFw4DeletionRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventFw4DeletionRecordsSent = this._customSessionEventFw4DeletionRecordsSent;
    }
    if (this._customSessionEventFw4DeletionRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventFw4DeletionRecordsSentFailure = this._customSessionEventFw4DeletionRecordsSentFailure;
    }
    if (this._customSessionEventFw6CreationRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventFw6CreationRecordsSent = this._customSessionEventFw6CreationRecordsSent;
    }
    if (this._customSessionEventFw6CreationRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventFw6CreationRecordsSentFailure = this._customSessionEventFw6CreationRecordsSentFailure;
    }
    if (this._customSessionEventFw6DeletionRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventFw6DeletionRecordsSent = this._customSessionEventFw6DeletionRecordsSent;
    }
    if (this._customSessionEventFw6DeletionRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventFw6DeletionRecordsSentFailure = this._customSessionEventFw6DeletionRecordsSentFailure;
    }
    if (this._customSessionEventNat44CreationRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventNat44CreationRecordsSent = this._customSessionEventNat44CreationRecordsSent;
    }
    if (this._customSessionEventNat44CreationRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventNat44CreationRecordsSentFailure = this._customSessionEventNat44CreationRecordsSentFailure;
    }
    if (this._customSessionEventNat44DeletionRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventNat44DeletionRecordsSent = this._customSessionEventNat44DeletionRecordsSent;
    }
    if (this._customSessionEventNat44DeletionRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventNat44DeletionRecordsSentFailure = this._customSessionEventNat44DeletionRecordsSentFailure;
    }
    if (this._customSessionEventNat64CreationRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventNat64CreationRecordsSent = this._customSessionEventNat64CreationRecordsSent;
    }
    if (this._customSessionEventNat64CreationRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventNat64CreationRecordsSentFailure = this._customSessionEventNat64CreationRecordsSentFailure;
    }
    if (this._customSessionEventNat64DeletionRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventNat64DeletionRecordsSent = this._customSessionEventNat64DeletionRecordsSent;
    }
    if (this._customSessionEventNat64DeletionRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventNat64DeletionRecordsSentFailure = this._customSessionEventNat64DeletionRecordsSentFailure;
    }
    if (this._ddosGeneralStatRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosGeneralStatRecordsSent = this._ddosGeneralStatRecordsSent;
    }
    if (this._ddosGeneralStatRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosGeneralStatRecordsSentFailure = this._ddosGeneralStatRecordsSentFailure;
    }
    if (this._ddosHttpStatRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosHttpStatRecordsSent = this._ddosHttpStatRecordsSent;
    }
    if (this._ddosHttpStatRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosHttpStatRecordsSentFailure = this._ddosHttpStatRecordsSentFailure;
    }
    if (this._dsliteRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsliteRecordsSent = this._dsliteRecordsSent;
    }
    if (this._dsliteRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsliteRecordsSentFailure = this._dsliteRecordsSentFailure;
    }
    if (this._nat44RecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat44RecordsSent = this._nat44RecordsSent;
    }
    if (this._nat44RecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat44RecordsSentFailure = this._nat44RecordsSentFailure;
    }
    if (this._nat64RecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64RecordsSent = this._nat64RecordsSent;
    }
    if (this._nat64RecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64RecordsSentFailure = this._nat64RecordsSentFailure;
    }
    if (this._netflowV5ExtRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowV5ExtRecordsSent = this._netflowV5ExtRecordsSent;
    }
    if (this._netflowV5ExtRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowV5ExtRecordsSentFailure = this._netflowV5ExtRecordsSentFailure;
    }
    if (this._netflowV5RecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowV5RecordsSent = this._netflowV5RecordsSent;
    }
    if (this._netflowV5RecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowV5RecordsSentFailure = this._netflowV5RecordsSentFailure;
    }
    if (this._packetsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsSent = this._packetsSent;
    }
    if (this._portBatchingDsliteRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchingDsliteRecordsSent = this._portBatchingDsliteRecordsSent;
    }
    if (this._portBatchingDsliteRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchingDsliteRecordsSentFailure = this._portBatchingDsliteRecordsSentFailure;
    }
    if (this._portBatchingNat44RecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchingNat44RecordsSent = this._portBatchingNat44RecordsSent;
    }
    if (this._portBatchingNat44RecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchingNat44RecordsSentFailure = this._portBatchingNat44RecordsSentFailure;
    }
    if (this._portBatchingNat64RecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchingNat64RecordsSent = this._portBatchingNat64RecordsSent;
    }
    if (this._portBatchingNat64RecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchingNat64RecordsSentFailure = this._portBatchingNat64RecordsSentFailure;
    }
    if (this._portBatchingV2DsliteRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchingV2DsliteRecordsSent = this._portBatchingV2DsliteRecordsSent;
    }
    if (this._portBatchingV2DsliteRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchingV2DsliteRecordsSentFailure = this._portBatchingV2DsliteRecordsSentFailure;
    }
    if (this._portBatchingV2Nat44RecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchingV2Nat44RecordsSent = this._portBatchingV2Nat44RecordsSent;
    }
    if (this._portBatchingV2Nat44RecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchingV2Nat44RecordsSentFailure = this._portBatchingV2Nat44RecordsSentFailure;
    }
    if (this._portBatchingV2Nat64RecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchingV2Nat64RecordsSent = this._portBatchingV2Nat64RecordsSent;
    }
    if (this._portBatchingV2Nat64RecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchingV2Nat64RecordsSentFailure = this._portBatchingV2Nat64RecordsSentFailure;
    }
    if (this._portMappingDsliteRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMappingDsliteRecordsSent = this._portMappingDsliteRecordsSent;
    }
    if (this._portMappingDsliteRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMappingDsliteRecordsSentFailure = this._portMappingDsliteRecordsSentFailure;
    }
    if (this._portMappingNat44RecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMappingNat44RecordsSent = this._portMappingNat44RecordsSent;
    }
    if (this._portMappingNat44RecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMappingNat44RecordsSentFailure = this._portMappingNat44RecordsSentFailure;
    }
    if (this._portMappingNat64RecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMappingNat64RecordsSent = this._portMappingNat64RecordsSent;
    }
    if (this._portMappingNat64RecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMappingNat64RecordsSentFailure = this._portMappingNat64RecordsSentFailure;
    }
    if (this._reducedLogsByDestination !== undefined) {
      hasAnyValues = true;
      internalValueResult.reducedLogsByDestination = this._reducedLogsByDestination;
    }
    if (this._sessionEventDsliteRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionEventDsliteRecordsSent = this._sessionEventDsliteRecordsSent;
    }
    if (this._sessionEventDsliteRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionEventDsliteRecordsSentFailure = this._sessionEventDsliteRecordsSentFailure;
    }
    if (this._sessionEventFw4RecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionEventFw4RecordsSent = this._sessionEventFw4RecordsSent;
    }
    if (this._sessionEventFw4RecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionEventFw4RecordsSentFailure = this._sessionEventFw4RecordsSentFailure;
    }
    if (this._sessionEventFw6RecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionEventFw6RecordsSent = this._sessionEventFw6RecordsSent;
    }
    if (this._sessionEventFw6RecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionEventFw6RecordsSentFailure = this._sessionEventFw6RecordsSentFailure;
    }
    if (this._sessionEventNat44RecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionEventNat44RecordsSent = this._sessionEventNat44RecordsSent;
    }
    if (this._sessionEventNat44RecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionEventNat44RecordsSentFailure = this._sessionEventNat44RecordsSentFailure;
    }
    if (this._sessionEventNat64RecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionEventNat64RecordsSent = this._sessionEventNat64RecordsSent;
    }
    if (this._sessionEventNat64RecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionEventNat64RecordsSentFailure = this._sessionEventNat64RecordsSentFailure;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetflowMonitorStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bytesSent = undefined;
      this._customDenyResetEventFw4RecordsSent = undefined;
      this._customDenyResetEventFw4RecordsSentFailure = undefined;
      this._customDenyResetEventFw6RecordsSent = undefined;
      this._customDenyResetEventFw6RecordsSentFailure = undefined;
      this._customFwIddosEntryCreatedRecordsSent = undefined;
      this._customFwIddosEntryCreatedRecordsSentFailure = undefined;
      this._customFwIddosEntryDeletedRecordsSent = undefined;
      this._customFwIddosEntryDeletedRecordsSentFailure = undefined;
      this._customFwSesnLimitExceededRecordsSent = undefined;
      this._customFwSesnLimitExceededRecordsSentFailure = undefined;
      this._customGtpCTunnelEventRecordsSent = undefined;
      this._customGtpCTunnelEventRecordsSentFailure = undefined;
      this._customGtpDenyEventRecordsSent = undefined;
      this._customGtpDenyEventRecordsSentFailure = undefined;
      this._customGtpInfoEventRecordsSent = undefined;
      this._customGtpInfoEventRecordsSentFailure = undefined;
      this._customGtpRateLimitPeriodicRecordsSent = undefined;
      this._customGtpRateLimitPeriodicRecordsSentFailure = undefined;
      this._customGtpUTunnelEventRecordsSent = undefined;
      this._customGtpUTunnelEventRecordsSentFailure = undefined;
      this._customNatIddosL3EntryCreatedRecordsSent = undefined;
      this._customNatIddosL3EntryCreatedRecordsSentFailure = undefined;
      this._customNatIddosL3EntryDeletedRecordsSent = undefined;
      this._customNatIddosL3EntryDeletedRecordsSentFailure = undefined;
      this._customNatIddosL4EntryCreatedRecordsSent = undefined;
      this._customNatIddosL4EntryCreatedRecordsSentFailure = undefined;
      this._customNatIddosL4EntryDeletedRecordsSent = undefined;
      this._customNatIddosL4EntryDeletedRecordsSentFailure = undefined;
      this._customPortBatchingDsliteCreationRecordsSent = undefined;
      this._customPortBatchingDsliteCreationRecordsSentFailure = undefined;
      this._customPortBatchingDsliteDeletionRecordsSent = undefined;
      this._customPortBatchingDsliteDeletionRecordsSentFailure = undefined;
      this._customPortBatchingNat44CreationRecordsSent = undefined;
      this._customPortBatchingNat44CreationRecordsSentFailure = undefined;
      this._customPortBatchingNat44DeletionRecordsSent = undefined;
      this._customPortBatchingNat44DeletionRecordsSentFailure = undefined;
      this._customPortBatchingNat64CreationRecordsSent = undefined;
      this._customPortBatchingNat64CreationRecordsSentFailure = undefined;
      this._customPortBatchingNat64DeletionRecordsSent = undefined;
      this._customPortBatchingNat64DeletionRecordsSentFailure = undefined;
      this._customPortBatchingV2DsliteCreationRecordsSent = undefined;
      this._customPortBatchingV2DsliteCreationRecordsSentFailure = undefined;
      this._customPortBatchingV2DsliteDeletionRecordsSent = undefined;
      this._customPortBatchingV2DsliteDeletionRecordsSentFailure = undefined;
      this._customPortBatchingV2Nat44CreationRecordsSent = undefined;
      this._customPortBatchingV2Nat44CreationRecordsSentFailure = undefined;
      this._customPortBatchingV2Nat44DeletionRecordsSent = undefined;
      this._customPortBatchingV2Nat44DeletionRecordsSentFailure = undefined;
      this._customPortBatchingV2Nat64CreationRecordsSent = undefined;
      this._customPortBatchingV2Nat64CreationRecordsSentFailure = undefined;
      this._customPortBatchingV2Nat64DeletionRecordsSent = undefined;
      this._customPortBatchingV2Nat64DeletionRecordsSentFailure = undefined;
      this._customPortMappingDsliteCreationRecordsSent = undefined;
      this._customPortMappingDsliteCreationRecordsSentFailure = undefined;
      this._customPortMappingDsliteDeletionRecordsSent = undefined;
      this._customPortMappingDsliteDeletionRecordsSentFailure = undefined;
      this._customPortMappingNat44CreationRecordsSent = undefined;
      this._customPortMappingNat44CreationRecordsSentFailure = undefined;
      this._customPortMappingNat44DeletionRecordsSent = undefined;
      this._customPortMappingNat44DeletionRecordsSentFailure = undefined;
      this._customPortMappingNat64CreationRecordsSent = undefined;
      this._customPortMappingNat64CreationRecordsSentFailure = undefined;
      this._customPortMappingNat64DeletionRecordsSent = undefined;
      this._customPortMappingNat64DeletionRecordsSentFailure = undefined;
      this._customSessionEventDsliteCreationRecordsSent = undefined;
      this._customSessionEventDsliteCreationRecordsSentFailure = undefined;
      this._customSessionEventDsliteDeletionRecordsSent = undefined;
      this._customSessionEventDsliteDeletionRecordsSentFailure = undefined;
      this._customSessionEventFw4CreationRecordsSent = undefined;
      this._customSessionEventFw4CreationRecordsSentFailure = undefined;
      this._customSessionEventFw4DeletionRecordsSent = undefined;
      this._customSessionEventFw4DeletionRecordsSentFailure = undefined;
      this._customSessionEventFw6CreationRecordsSent = undefined;
      this._customSessionEventFw6CreationRecordsSentFailure = undefined;
      this._customSessionEventFw6DeletionRecordsSent = undefined;
      this._customSessionEventFw6DeletionRecordsSentFailure = undefined;
      this._customSessionEventNat44CreationRecordsSent = undefined;
      this._customSessionEventNat44CreationRecordsSentFailure = undefined;
      this._customSessionEventNat44DeletionRecordsSent = undefined;
      this._customSessionEventNat44DeletionRecordsSentFailure = undefined;
      this._customSessionEventNat64CreationRecordsSent = undefined;
      this._customSessionEventNat64CreationRecordsSentFailure = undefined;
      this._customSessionEventNat64DeletionRecordsSent = undefined;
      this._customSessionEventNat64DeletionRecordsSentFailure = undefined;
      this._ddosGeneralStatRecordsSent = undefined;
      this._ddosGeneralStatRecordsSentFailure = undefined;
      this._ddosHttpStatRecordsSent = undefined;
      this._ddosHttpStatRecordsSentFailure = undefined;
      this._dsliteRecordsSent = undefined;
      this._dsliteRecordsSentFailure = undefined;
      this._nat44RecordsSent = undefined;
      this._nat44RecordsSentFailure = undefined;
      this._nat64RecordsSent = undefined;
      this._nat64RecordsSentFailure = undefined;
      this._netflowV5ExtRecordsSent = undefined;
      this._netflowV5ExtRecordsSentFailure = undefined;
      this._netflowV5RecordsSent = undefined;
      this._netflowV5RecordsSentFailure = undefined;
      this._packetsSent = undefined;
      this._portBatchingDsliteRecordsSent = undefined;
      this._portBatchingDsliteRecordsSentFailure = undefined;
      this._portBatchingNat44RecordsSent = undefined;
      this._portBatchingNat44RecordsSentFailure = undefined;
      this._portBatchingNat64RecordsSent = undefined;
      this._portBatchingNat64RecordsSentFailure = undefined;
      this._portBatchingV2DsliteRecordsSent = undefined;
      this._portBatchingV2DsliteRecordsSentFailure = undefined;
      this._portBatchingV2Nat44RecordsSent = undefined;
      this._portBatchingV2Nat44RecordsSentFailure = undefined;
      this._portBatchingV2Nat64RecordsSent = undefined;
      this._portBatchingV2Nat64RecordsSentFailure = undefined;
      this._portMappingDsliteRecordsSent = undefined;
      this._portMappingDsliteRecordsSentFailure = undefined;
      this._portMappingNat44RecordsSent = undefined;
      this._portMappingNat44RecordsSentFailure = undefined;
      this._portMappingNat64RecordsSent = undefined;
      this._portMappingNat64RecordsSentFailure = undefined;
      this._reducedLogsByDestination = undefined;
      this._sessionEventDsliteRecordsSent = undefined;
      this._sessionEventDsliteRecordsSentFailure = undefined;
      this._sessionEventFw4RecordsSent = undefined;
      this._sessionEventFw4RecordsSentFailure = undefined;
      this._sessionEventFw6RecordsSent = undefined;
      this._sessionEventFw6RecordsSentFailure = undefined;
      this._sessionEventNat44RecordsSent = undefined;
      this._sessionEventNat44RecordsSentFailure = undefined;
      this._sessionEventNat64RecordsSent = undefined;
      this._sessionEventNat64RecordsSentFailure = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bytesSent = value.bytesSent;
      this._customDenyResetEventFw4RecordsSent = value.customDenyResetEventFw4RecordsSent;
      this._customDenyResetEventFw4RecordsSentFailure = value.customDenyResetEventFw4RecordsSentFailure;
      this._customDenyResetEventFw6RecordsSent = value.customDenyResetEventFw6RecordsSent;
      this._customDenyResetEventFw6RecordsSentFailure = value.customDenyResetEventFw6RecordsSentFailure;
      this._customFwIddosEntryCreatedRecordsSent = value.customFwIddosEntryCreatedRecordsSent;
      this._customFwIddosEntryCreatedRecordsSentFailure = value.customFwIddosEntryCreatedRecordsSentFailure;
      this._customFwIddosEntryDeletedRecordsSent = value.customFwIddosEntryDeletedRecordsSent;
      this._customFwIddosEntryDeletedRecordsSentFailure = value.customFwIddosEntryDeletedRecordsSentFailure;
      this._customFwSesnLimitExceededRecordsSent = value.customFwSesnLimitExceededRecordsSent;
      this._customFwSesnLimitExceededRecordsSentFailure = value.customFwSesnLimitExceededRecordsSentFailure;
      this._customGtpCTunnelEventRecordsSent = value.customGtpCTunnelEventRecordsSent;
      this._customGtpCTunnelEventRecordsSentFailure = value.customGtpCTunnelEventRecordsSentFailure;
      this._customGtpDenyEventRecordsSent = value.customGtpDenyEventRecordsSent;
      this._customGtpDenyEventRecordsSentFailure = value.customGtpDenyEventRecordsSentFailure;
      this._customGtpInfoEventRecordsSent = value.customGtpInfoEventRecordsSent;
      this._customGtpInfoEventRecordsSentFailure = value.customGtpInfoEventRecordsSentFailure;
      this._customGtpRateLimitPeriodicRecordsSent = value.customGtpRateLimitPeriodicRecordsSent;
      this._customGtpRateLimitPeriodicRecordsSentFailure = value.customGtpRateLimitPeriodicRecordsSentFailure;
      this._customGtpUTunnelEventRecordsSent = value.customGtpUTunnelEventRecordsSent;
      this._customGtpUTunnelEventRecordsSentFailure = value.customGtpUTunnelEventRecordsSentFailure;
      this._customNatIddosL3EntryCreatedRecordsSent = value.customNatIddosL3EntryCreatedRecordsSent;
      this._customNatIddosL3EntryCreatedRecordsSentFailure = value.customNatIddosL3EntryCreatedRecordsSentFailure;
      this._customNatIddosL3EntryDeletedRecordsSent = value.customNatIddosL3EntryDeletedRecordsSent;
      this._customNatIddosL3EntryDeletedRecordsSentFailure = value.customNatIddosL3EntryDeletedRecordsSentFailure;
      this._customNatIddosL4EntryCreatedRecordsSent = value.customNatIddosL4EntryCreatedRecordsSent;
      this._customNatIddosL4EntryCreatedRecordsSentFailure = value.customNatIddosL4EntryCreatedRecordsSentFailure;
      this._customNatIddosL4EntryDeletedRecordsSent = value.customNatIddosL4EntryDeletedRecordsSent;
      this._customNatIddosL4EntryDeletedRecordsSentFailure = value.customNatIddosL4EntryDeletedRecordsSentFailure;
      this._customPortBatchingDsliteCreationRecordsSent = value.customPortBatchingDsliteCreationRecordsSent;
      this._customPortBatchingDsliteCreationRecordsSentFailure = value.customPortBatchingDsliteCreationRecordsSentFailure;
      this._customPortBatchingDsliteDeletionRecordsSent = value.customPortBatchingDsliteDeletionRecordsSent;
      this._customPortBatchingDsliteDeletionRecordsSentFailure = value.customPortBatchingDsliteDeletionRecordsSentFailure;
      this._customPortBatchingNat44CreationRecordsSent = value.customPortBatchingNat44CreationRecordsSent;
      this._customPortBatchingNat44CreationRecordsSentFailure = value.customPortBatchingNat44CreationRecordsSentFailure;
      this._customPortBatchingNat44DeletionRecordsSent = value.customPortBatchingNat44DeletionRecordsSent;
      this._customPortBatchingNat44DeletionRecordsSentFailure = value.customPortBatchingNat44DeletionRecordsSentFailure;
      this._customPortBatchingNat64CreationRecordsSent = value.customPortBatchingNat64CreationRecordsSent;
      this._customPortBatchingNat64CreationRecordsSentFailure = value.customPortBatchingNat64CreationRecordsSentFailure;
      this._customPortBatchingNat64DeletionRecordsSent = value.customPortBatchingNat64DeletionRecordsSent;
      this._customPortBatchingNat64DeletionRecordsSentFailure = value.customPortBatchingNat64DeletionRecordsSentFailure;
      this._customPortBatchingV2DsliteCreationRecordsSent = value.customPortBatchingV2DsliteCreationRecordsSent;
      this._customPortBatchingV2DsliteCreationRecordsSentFailure = value.customPortBatchingV2DsliteCreationRecordsSentFailure;
      this._customPortBatchingV2DsliteDeletionRecordsSent = value.customPortBatchingV2DsliteDeletionRecordsSent;
      this._customPortBatchingV2DsliteDeletionRecordsSentFailure = value.customPortBatchingV2DsliteDeletionRecordsSentFailure;
      this._customPortBatchingV2Nat44CreationRecordsSent = value.customPortBatchingV2Nat44CreationRecordsSent;
      this._customPortBatchingV2Nat44CreationRecordsSentFailure = value.customPortBatchingV2Nat44CreationRecordsSentFailure;
      this._customPortBatchingV2Nat44DeletionRecordsSent = value.customPortBatchingV2Nat44DeletionRecordsSent;
      this._customPortBatchingV2Nat44DeletionRecordsSentFailure = value.customPortBatchingV2Nat44DeletionRecordsSentFailure;
      this._customPortBatchingV2Nat64CreationRecordsSent = value.customPortBatchingV2Nat64CreationRecordsSent;
      this._customPortBatchingV2Nat64CreationRecordsSentFailure = value.customPortBatchingV2Nat64CreationRecordsSentFailure;
      this._customPortBatchingV2Nat64DeletionRecordsSent = value.customPortBatchingV2Nat64DeletionRecordsSent;
      this._customPortBatchingV2Nat64DeletionRecordsSentFailure = value.customPortBatchingV2Nat64DeletionRecordsSentFailure;
      this._customPortMappingDsliteCreationRecordsSent = value.customPortMappingDsliteCreationRecordsSent;
      this._customPortMappingDsliteCreationRecordsSentFailure = value.customPortMappingDsliteCreationRecordsSentFailure;
      this._customPortMappingDsliteDeletionRecordsSent = value.customPortMappingDsliteDeletionRecordsSent;
      this._customPortMappingDsliteDeletionRecordsSentFailure = value.customPortMappingDsliteDeletionRecordsSentFailure;
      this._customPortMappingNat44CreationRecordsSent = value.customPortMappingNat44CreationRecordsSent;
      this._customPortMappingNat44CreationRecordsSentFailure = value.customPortMappingNat44CreationRecordsSentFailure;
      this._customPortMappingNat44DeletionRecordsSent = value.customPortMappingNat44DeletionRecordsSent;
      this._customPortMappingNat44DeletionRecordsSentFailure = value.customPortMappingNat44DeletionRecordsSentFailure;
      this._customPortMappingNat64CreationRecordsSent = value.customPortMappingNat64CreationRecordsSent;
      this._customPortMappingNat64CreationRecordsSentFailure = value.customPortMappingNat64CreationRecordsSentFailure;
      this._customPortMappingNat64DeletionRecordsSent = value.customPortMappingNat64DeletionRecordsSent;
      this._customPortMappingNat64DeletionRecordsSentFailure = value.customPortMappingNat64DeletionRecordsSentFailure;
      this._customSessionEventDsliteCreationRecordsSent = value.customSessionEventDsliteCreationRecordsSent;
      this._customSessionEventDsliteCreationRecordsSentFailure = value.customSessionEventDsliteCreationRecordsSentFailure;
      this._customSessionEventDsliteDeletionRecordsSent = value.customSessionEventDsliteDeletionRecordsSent;
      this._customSessionEventDsliteDeletionRecordsSentFailure = value.customSessionEventDsliteDeletionRecordsSentFailure;
      this._customSessionEventFw4CreationRecordsSent = value.customSessionEventFw4CreationRecordsSent;
      this._customSessionEventFw4CreationRecordsSentFailure = value.customSessionEventFw4CreationRecordsSentFailure;
      this._customSessionEventFw4DeletionRecordsSent = value.customSessionEventFw4DeletionRecordsSent;
      this._customSessionEventFw4DeletionRecordsSentFailure = value.customSessionEventFw4DeletionRecordsSentFailure;
      this._customSessionEventFw6CreationRecordsSent = value.customSessionEventFw6CreationRecordsSent;
      this._customSessionEventFw6CreationRecordsSentFailure = value.customSessionEventFw6CreationRecordsSentFailure;
      this._customSessionEventFw6DeletionRecordsSent = value.customSessionEventFw6DeletionRecordsSent;
      this._customSessionEventFw6DeletionRecordsSentFailure = value.customSessionEventFw6DeletionRecordsSentFailure;
      this._customSessionEventNat44CreationRecordsSent = value.customSessionEventNat44CreationRecordsSent;
      this._customSessionEventNat44CreationRecordsSentFailure = value.customSessionEventNat44CreationRecordsSentFailure;
      this._customSessionEventNat44DeletionRecordsSent = value.customSessionEventNat44DeletionRecordsSent;
      this._customSessionEventNat44DeletionRecordsSentFailure = value.customSessionEventNat44DeletionRecordsSentFailure;
      this._customSessionEventNat64CreationRecordsSent = value.customSessionEventNat64CreationRecordsSent;
      this._customSessionEventNat64CreationRecordsSentFailure = value.customSessionEventNat64CreationRecordsSentFailure;
      this._customSessionEventNat64DeletionRecordsSent = value.customSessionEventNat64DeletionRecordsSent;
      this._customSessionEventNat64DeletionRecordsSentFailure = value.customSessionEventNat64DeletionRecordsSentFailure;
      this._ddosGeneralStatRecordsSent = value.ddosGeneralStatRecordsSent;
      this._ddosGeneralStatRecordsSentFailure = value.ddosGeneralStatRecordsSentFailure;
      this._ddosHttpStatRecordsSent = value.ddosHttpStatRecordsSent;
      this._ddosHttpStatRecordsSentFailure = value.ddosHttpStatRecordsSentFailure;
      this._dsliteRecordsSent = value.dsliteRecordsSent;
      this._dsliteRecordsSentFailure = value.dsliteRecordsSentFailure;
      this._nat44RecordsSent = value.nat44RecordsSent;
      this._nat44RecordsSentFailure = value.nat44RecordsSentFailure;
      this._nat64RecordsSent = value.nat64RecordsSent;
      this._nat64RecordsSentFailure = value.nat64RecordsSentFailure;
      this._netflowV5ExtRecordsSent = value.netflowV5ExtRecordsSent;
      this._netflowV5ExtRecordsSentFailure = value.netflowV5ExtRecordsSentFailure;
      this._netflowV5RecordsSent = value.netflowV5RecordsSent;
      this._netflowV5RecordsSentFailure = value.netflowV5RecordsSentFailure;
      this._packetsSent = value.packetsSent;
      this._portBatchingDsliteRecordsSent = value.portBatchingDsliteRecordsSent;
      this._portBatchingDsliteRecordsSentFailure = value.portBatchingDsliteRecordsSentFailure;
      this._portBatchingNat44RecordsSent = value.portBatchingNat44RecordsSent;
      this._portBatchingNat44RecordsSentFailure = value.portBatchingNat44RecordsSentFailure;
      this._portBatchingNat64RecordsSent = value.portBatchingNat64RecordsSent;
      this._portBatchingNat64RecordsSentFailure = value.portBatchingNat64RecordsSentFailure;
      this._portBatchingV2DsliteRecordsSent = value.portBatchingV2DsliteRecordsSent;
      this._portBatchingV2DsliteRecordsSentFailure = value.portBatchingV2DsliteRecordsSentFailure;
      this._portBatchingV2Nat44RecordsSent = value.portBatchingV2Nat44RecordsSent;
      this._portBatchingV2Nat44RecordsSentFailure = value.portBatchingV2Nat44RecordsSentFailure;
      this._portBatchingV2Nat64RecordsSent = value.portBatchingV2Nat64RecordsSent;
      this._portBatchingV2Nat64RecordsSentFailure = value.portBatchingV2Nat64RecordsSentFailure;
      this._portMappingDsliteRecordsSent = value.portMappingDsliteRecordsSent;
      this._portMappingDsliteRecordsSentFailure = value.portMappingDsliteRecordsSentFailure;
      this._portMappingNat44RecordsSent = value.portMappingNat44RecordsSent;
      this._portMappingNat44RecordsSentFailure = value.portMappingNat44RecordsSentFailure;
      this._portMappingNat64RecordsSent = value.portMappingNat64RecordsSent;
      this._portMappingNat64RecordsSentFailure = value.portMappingNat64RecordsSentFailure;
      this._reducedLogsByDestination = value.reducedLogsByDestination;
      this._sessionEventDsliteRecordsSent = value.sessionEventDsliteRecordsSent;
      this._sessionEventDsliteRecordsSentFailure = value.sessionEventDsliteRecordsSentFailure;
      this._sessionEventFw4RecordsSent = value.sessionEventFw4RecordsSent;
      this._sessionEventFw4RecordsSentFailure = value.sessionEventFw4RecordsSentFailure;
      this._sessionEventFw6RecordsSent = value.sessionEventFw6RecordsSent;
      this._sessionEventFw6RecordsSentFailure = value.sessionEventFw6RecordsSentFailure;
      this._sessionEventNat44RecordsSent = value.sessionEventNat44RecordsSent;
      this._sessionEventNat44RecordsSentFailure = value.sessionEventNat44RecordsSentFailure;
      this._sessionEventNat64RecordsSent = value.sessionEventNat64RecordsSent;
      this._sessionEventNat64RecordsSentFailure = value.sessionEventNat64RecordsSentFailure;
    }
  }

  // bytes_sent - computed: false, optional: true, required: false
  private _bytesSent?: number; 
  public get bytesSent() {
    return this.getNumberAttribute('bytes_sent');
  }
  public set bytesSent(value: number) {
    this._bytesSent = value;
  }
  public resetBytesSent() {
    this._bytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bytesSentInput() {
    return this._bytesSent;
  }

  // custom_deny_reset_event_fw4_records_sent - computed: false, optional: true, required: false
  private _customDenyResetEventFw4RecordsSent?: number; 
  public get customDenyResetEventFw4RecordsSent() {
    return this.getNumberAttribute('custom_deny_reset_event_fw4_records_sent');
  }
  public set customDenyResetEventFw4RecordsSent(value: number) {
    this._customDenyResetEventFw4RecordsSent = value;
  }
  public resetCustomDenyResetEventFw4RecordsSent() {
    this._customDenyResetEventFw4RecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDenyResetEventFw4RecordsSentInput() {
    return this._customDenyResetEventFw4RecordsSent;
  }

  // custom_deny_reset_event_fw4_records_sent_failure - computed: false, optional: true, required: false
  private _customDenyResetEventFw4RecordsSentFailure?: number; 
  public get customDenyResetEventFw4RecordsSentFailure() {
    return this.getNumberAttribute('custom_deny_reset_event_fw4_records_sent_failure');
  }
  public set customDenyResetEventFw4RecordsSentFailure(value: number) {
    this._customDenyResetEventFw4RecordsSentFailure = value;
  }
  public resetCustomDenyResetEventFw4RecordsSentFailure() {
    this._customDenyResetEventFw4RecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDenyResetEventFw4RecordsSentFailureInput() {
    return this._customDenyResetEventFw4RecordsSentFailure;
  }

  // custom_deny_reset_event_fw6_records_sent - computed: false, optional: true, required: false
  private _customDenyResetEventFw6RecordsSent?: number; 
  public get customDenyResetEventFw6RecordsSent() {
    return this.getNumberAttribute('custom_deny_reset_event_fw6_records_sent');
  }
  public set customDenyResetEventFw6RecordsSent(value: number) {
    this._customDenyResetEventFw6RecordsSent = value;
  }
  public resetCustomDenyResetEventFw6RecordsSent() {
    this._customDenyResetEventFw6RecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDenyResetEventFw6RecordsSentInput() {
    return this._customDenyResetEventFw6RecordsSent;
  }

  // custom_deny_reset_event_fw6_records_sent_failure - computed: false, optional: true, required: false
  private _customDenyResetEventFw6RecordsSentFailure?: number; 
  public get customDenyResetEventFw6RecordsSentFailure() {
    return this.getNumberAttribute('custom_deny_reset_event_fw6_records_sent_failure');
  }
  public set customDenyResetEventFw6RecordsSentFailure(value: number) {
    this._customDenyResetEventFw6RecordsSentFailure = value;
  }
  public resetCustomDenyResetEventFw6RecordsSentFailure() {
    this._customDenyResetEventFw6RecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDenyResetEventFw6RecordsSentFailureInput() {
    return this._customDenyResetEventFw6RecordsSentFailure;
  }

  // custom_fw_iddos_entry_created_records_sent - computed: false, optional: true, required: false
  private _customFwIddosEntryCreatedRecordsSent?: number; 
  public get customFwIddosEntryCreatedRecordsSent() {
    return this.getNumberAttribute('custom_fw_iddos_entry_created_records_sent');
  }
  public set customFwIddosEntryCreatedRecordsSent(value: number) {
    this._customFwIddosEntryCreatedRecordsSent = value;
  }
  public resetCustomFwIddosEntryCreatedRecordsSent() {
    this._customFwIddosEntryCreatedRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFwIddosEntryCreatedRecordsSentInput() {
    return this._customFwIddosEntryCreatedRecordsSent;
  }

  // custom_fw_iddos_entry_created_records_sent_failure - computed: false, optional: true, required: false
  private _customFwIddosEntryCreatedRecordsSentFailure?: number; 
  public get customFwIddosEntryCreatedRecordsSentFailure() {
    return this.getNumberAttribute('custom_fw_iddos_entry_created_records_sent_failure');
  }
  public set customFwIddosEntryCreatedRecordsSentFailure(value: number) {
    this._customFwIddosEntryCreatedRecordsSentFailure = value;
  }
  public resetCustomFwIddosEntryCreatedRecordsSentFailure() {
    this._customFwIddosEntryCreatedRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFwIddosEntryCreatedRecordsSentFailureInput() {
    return this._customFwIddosEntryCreatedRecordsSentFailure;
  }

  // custom_fw_iddos_entry_deleted_records_sent - computed: false, optional: true, required: false
  private _customFwIddosEntryDeletedRecordsSent?: number; 
  public get customFwIddosEntryDeletedRecordsSent() {
    return this.getNumberAttribute('custom_fw_iddos_entry_deleted_records_sent');
  }
  public set customFwIddosEntryDeletedRecordsSent(value: number) {
    this._customFwIddosEntryDeletedRecordsSent = value;
  }
  public resetCustomFwIddosEntryDeletedRecordsSent() {
    this._customFwIddosEntryDeletedRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFwIddosEntryDeletedRecordsSentInput() {
    return this._customFwIddosEntryDeletedRecordsSent;
  }

  // custom_fw_iddos_entry_deleted_records_sent_failure - computed: false, optional: true, required: false
  private _customFwIddosEntryDeletedRecordsSentFailure?: number; 
  public get customFwIddosEntryDeletedRecordsSentFailure() {
    return this.getNumberAttribute('custom_fw_iddos_entry_deleted_records_sent_failure');
  }
  public set customFwIddosEntryDeletedRecordsSentFailure(value: number) {
    this._customFwIddosEntryDeletedRecordsSentFailure = value;
  }
  public resetCustomFwIddosEntryDeletedRecordsSentFailure() {
    this._customFwIddosEntryDeletedRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFwIddosEntryDeletedRecordsSentFailureInput() {
    return this._customFwIddosEntryDeletedRecordsSentFailure;
  }

  // custom_fw_sesn_limit_exceeded_records_sent - computed: false, optional: true, required: false
  private _customFwSesnLimitExceededRecordsSent?: number; 
  public get customFwSesnLimitExceededRecordsSent() {
    return this.getNumberAttribute('custom_fw_sesn_limit_exceeded_records_sent');
  }
  public set customFwSesnLimitExceededRecordsSent(value: number) {
    this._customFwSesnLimitExceededRecordsSent = value;
  }
  public resetCustomFwSesnLimitExceededRecordsSent() {
    this._customFwSesnLimitExceededRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFwSesnLimitExceededRecordsSentInput() {
    return this._customFwSesnLimitExceededRecordsSent;
  }

  // custom_fw_sesn_limit_exceeded_records_sent_failure - computed: false, optional: true, required: false
  private _customFwSesnLimitExceededRecordsSentFailure?: number; 
  public get customFwSesnLimitExceededRecordsSentFailure() {
    return this.getNumberAttribute('custom_fw_sesn_limit_exceeded_records_sent_failure');
  }
  public set customFwSesnLimitExceededRecordsSentFailure(value: number) {
    this._customFwSesnLimitExceededRecordsSentFailure = value;
  }
  public resetCustomFwSesnLimitExceededRecordsSentFailure() {
    this._customFwSesnLimitExceededRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFwSesnLimitExceededRecordsSentFailureInput() {
    return this._customFwSesnLimitExceededRecordsSentFailure;
  }

  // custom_gtp_c_tunnel_event_records_sent - computed: false, optional: true, required: false
  private _customGtpCTunnelEventRecordsSent?: number; 
  public get customGtpCTunnelEventRecordsSent() {
    return this.getNumberAttribute('custom_gtp_c_tunnel_event_records_sent');
  }
  public set customGtpCTunnelEventRecordsSent(value: number) {
    this._customGtpCTunnelEventRecordsSent = value;
  }
  public resetCustomGtpCTunnelEventRecordsSent() {
    this._customGtpCTunnelEventRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customGtpCTunnelEventRecordsSentInput() {
    return this._customGtpCTunnelEventRecordsSent;
  }

  // custom_gtp_c_tunnel_event_records_sent_failure - computed: false, optional: true, required: false
  private _customGtpCTunnelEventRecordsSentFailure?: number; 
  public get customGtpCTunnelEventRecordsSentFailure() {
    return this.getNumberAttribute('custom_gtp_c_tunnel_event_records_sent_failure');
  }
  public set customGtpCTunnelEventRecordsSentFailure(value: number) {
    this._customGtpCTunnelEventRecordsSentFailure = value;
  }
  public resetCustomGtpCTunnelEventRecordsSentFailure() {
    this._customGtpCTunnelEventRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customGtpCTunnelEventRecordsSentFailureInput() {
    return this._customGtpCTunnelEventRecordsSentFailure;
  }

  // custom_gtp_deny_event_records_sent - computed: false, optional: true, required: false
  private _customGtpDenyEventRecordsSent?: number; 
  public get customGtpDenyEventRecordsSent() {
    return this.getNumberAttribute('custom_gtp_deny_event_records_sent');
  }
  public set customGtpDenyEventRecordsSent(value: number) {
    this._customGtpDenyEventRecordsSent = value;
  }
  public resetCustomGtpDenyEventRecordsSent() {
    this._customGtpDenyEventRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customGtpDenyEventRecordsSentInput() {
    return this._customGtpDenyEventRecordsSent;
  }

  // custom_gtp_deny_event_records_sent_failure - computed: false, optional: true, required: false
  private _customGtpDenyEventRecordsSentFailure?: number; 
  public get customGtpDenyEventRecordsSentFailure() {
    return this.getNumberAttribute('custom_gtp_deny_event_records_sent_failure');
  }
  public set customGtpDenyEventRecordsSentFailure(value: number) {
    this._customGtpDenyEventRecordsSentFailure = value;
  }
  public resetCustomGtpDenyEventRecordsSentFailure() {
    this._customGtpDenyEventRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customGtpDenyEventRecordsSentFailureInput() {
    return this._customGtpDenyEventRecordsSentFailure;
  }

  // custom_gtp_info_event_records_sent - computed: false, optional: true, required: false
  private _customGtpInfoEventRecordsSent?: number; 
  public get customGtpInfoEventRecordsSent() {
    return this.getNumberAttribute('custom_gtp_info_event_records_sent');
  }
  public set customGtpInfoEventRecordsSent(value: number) {
    this._customGtpInfoEventRecordsSent = value;
  }
  public resetCustomGtpInfoEventRecordsSent() {
    this._customGtpInfoEventRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customGtpInfoEventRecordsSentInput() {
    return this._customGtpInfoEventRecordsSent;
  }

  // custom_gtp_info_event_records_sent_failure - computed: false, optional: true, required: false
  private _customGtpInfoEventRecordsSentFailure?: number; 
  public get customGtpInfoEventRecordsSentFailure() {
    return this.getNumberAttribute('custom_gtp_info_event_records_sent_failure');
  }
  public set customGtpInfoEventRecordsSentFailure(value: number) {
    this._customGtpInfoEventRecordsSentFailure = value;
  }
  public resetCustomGtpInfoEventRecordsSentFailure() {
    this._customGtpInfoEventRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customGtpInfoEventRecordsSentFailureInput() {
    return this._customGtpInfoEventRecordsSentFailure;
  }

  // custom_gtp_rate_limit_periodic_records_sent - computed: false, optional: true, required: false
  private _customGtpRateLimitPeriodicRecordsSent?: number; 
  public get customGtpRateLimitPeriodicRecordsSent() {
    return this.getNumberAttribute('custom_gtp_rate_limit_periodic_records_sent');
  }
  public set customGtpRateLimitPeriodicRecordsSent(value: number) {
    this._customGtpRateLimitPeriodicRecordsSent = value;
  }
  public resetCustomGtpRateLimitPeriodicRecordsSent() {
    this._customGtpRateLimitPeriodicRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customGtpRateLimitPeriodicRecordsSentInput() {
    return this._customGtpRateLimitPeriodicRecordsSent;
  }

  // custom_gtp_rate_limit_periodic_records_sent_failure - computed: false, optional: true, required: false
  private _customGtpRateLimitPeriodicRecordsSentFailure?: number; 
  public get customGtpRateLimitPeriodicRecordsSentFailure() {
    return this.getNumberAttribute('custom_gtp_rate_limit_periodic_records_sent_failure');
  }
  public set customGtpRateLimitPeriodicRecordsSentFailure(value: number) {
    this._customGtpRateLimitPeriodicRecordsSentFailure = value;
  }
  public resetCustomGtpRateLimitPeriodicRecordsSentFailure() {
    this._customGtpRateLimitPeriodicRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customGtpRateLimitPeriodicRecordsSentFailureInput() {
    return this._customGtpRateLimitPeriodicRecordsSentFailure;
  }

  // custom_gtp_u_tunnel_event_records_sent - computed: false, optional: true, required: false
  private _customGtpUTunnelEventRecordsSent?: number; 
  public get customGtpUTunnelEventRecordsSent() {
    return this.getNumberAttribute('custom_gtp_u_tunnel_event_records_sent');
  }
  public set customGtpUTunnelEventRecordsSent(value: number) {
    this._customGtpUTunnelEventRecordsSent = value;
  }
  public resetCustomGtpUTunnelEventRecordsSent() {
    this._customGtpUTunnelEventRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customGtpUTunnelEventRecordsSentInput() {
    return this._customGtpUTunnelEventRecordsSent;
  }

  // custom_gtp_u_tunnel_event_records_sent_failure - computed: false, optional: true, required: false
  private _customGtpUTunnelEventRecordsSentFailure?: number; 
  public get customGtpUTunnelEventRecordsSentFailure() {
    return this.getNumberAttribute('custom_gtp_u_tunnel_event_records_sent_failure');
  }
  public set customGtpUTunnelEventRecordsSentFailure(value: number) {
    this._customGtpUTunnelEventRecordsSentFailure = value;
  }
  public resetCustomGtpUTunnelEventRecordsSentFailure() {
    this._customGtpUTunnelEventRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customGtpUTunnelEventRecordsSentFailureInput() {
    return this._customGtpUTunnelEventRecordsSentFailure;
  }

  // custom_nat_iddos_l3_entry_created_records_sent - computed: false, optional: true, required: false
  private _customNatIddosL3EntryCreatedRecordsSent?: number; 
  public get customNatIddosL3EntryCreatedRecordsSent() {
    return this.getNumberAttribute('custom_nat_iddos_l3_entry_created_records_sent');
  }
  public set customNatIddosL3EntryCreatedRecordsSent(value: number) {
    this._customNatIddosL3EntryCreatedRecordsSent = value;
  }
  public resetCustomNatIddosL3EntryCreatedRecordsSent() {
    this._customNatIddosL3EntryCreatedRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNatIddosL3EntryCreatedRecordsSentInput() {
    return this._customNatIddosL3EntryCreatedRecordsSent;
  }

  // custom_nat_iddos_l3_entry_created_records_sent_failure - computed: false, optional: true, required: false
  private _customNatIddosL3EntryCreatedRecordsSentFailure?: number; 
  public get customNatIddosL3EntryCreatedRecordsSentFailure() {
    return this.getNumberAttribute('custom_nat_iddos_l3_entry_created_records_sent_failure');
  }
  public set customNatIddosL3EntryCreatedRecordsSentFailure(value: number) {
    this._customNatIddosL3EntryCreatedRecordsSentFailure = value;
  }
  public resetCustomNatIddosL3EntryCreatedRecordsSentFailure() {
    this._customNatIddosL3EntryCreatedRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNatIddosL3EntryCreatedRecordsSentFailureInput() {
    return this._customNatIddosL3EntryCreatedRecordsSentFailure;
  }

  // custom_nat_iddos_l3_entry_deleted_records_sent - computed: false, optional: true, required: false
  private _customNatIddosL3EntryDeletedRecordsSent?: number; 
  public get customNatIddosL3EntryDeletedRecordsSent() {
    return this.getNumberAttribute('custom_nat_iddos_l3_entry_deleted_records_sent');
  }
  public set customNatIddosL3EntryDeletedRecordsSent(value: number) {
    this._customNatIddosL3EntryDeletedRecordsSent = value;
  }
  public resetCustomNatIddosL3EntryDeletedRecordsSent() {
    this._customNatIddosL3EntryDeletedRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNatIddosL3EntryDeletedRecordsSentInput() {
    return this._customNatIddosL3EntryDeletedRecordsSent;
  }

  // custom_nat_iddos_l3_entry_deleted_records_sent_failure - computed: false, optional: true, required: false
  private _customNatIddosL3EntryDeletedRecordsSentFailure?: number; 
  public get customNatIddosL3EntryDeletedRecordsSentFailure() {
    return this.getNumberAttribute('custom_nat_iddos_l3_entry_deleted_records_sent_failure');
  }
  public set customNatIddosL3EntryDeletedRecordsSentFailure(value: number) {
    this._customNatIddosL3EntryDeletedRecordsSentFailure = value;
  }
  public resetCustomNatIddosL3EntryDeletedRecordsSentFailure() {
    this._customNatIddosL3EntryDeletedRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNatIddosL3EntryDeletedRecordsSentFailureInput() {
    return this._customNatIddosL3EntryDeletedRecordsSentFailure;
  }

  // custom_nat_iddos_l4_entry_created_records_sent - computed: false, optional: true, required: false
  private _customNatIddosL4EntryCreatedRecordsSent?: number; 
  public get customNatIddosL4EntryCreatedRecordsSent() {
    return this.getNumberAttribute('custom_nat_iddos_l4_entry_created_records_sent');
  }
  public set customNatIddosL4EntryCreatedRecordsSent(value: number) {
    this._customNatIddosL4EntryCreatedRecordsSent = value;
  }
  public resetCustomNatIddosL4EntryCreatedRecordsSent() {
    this._customNatIddosL4EntryCreatedRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNatIddosL4EntryCreatedRecordsSentInput() {
    return this._customNatIddosL4EntryCreatedRecordsSent;
  }

  // custom_nat_iddos_l4_entry_created_records_sent_failure - computed: false, optional: true, required: false
  private _customNatIddosL4EntryCreatedRecordsSentFailure?: number; 
  public get customNatIddosL4EntryCreatedRecordsSentFailure() {
    return this.getNumberAttribute('custom_nat_iddos_l4_entry_created_records_sent_failure');
  }
  public set customNatIddosL4EntryCreatedRecordsSentFailure(value: number) {
    this._customNatIddosL4EntryCreatedRecordsSentFailure = value;
  }
  public resetCustomNatIddosL4EntryCreatedRecordsSentFailure() {
    this._customNatIddosL4EntryCreatedRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNatIddosL4EntryCreatedRecordsSentFailureInput() {
    return this._customNatIddosL4EntryCreatedRecordsSentFailure;
  }

  // custom_nat_iddos_l4_entry_deleted_records_sent - computed: false, optional: true, required: false
  private _customNatIddosL4EntryDeletedRecordsSent?: number; 
  public get customNatIddosL4EntryDeletedRecordsSent() {
    return this.getNumberAttribute('custom_nat_iddos_l4_entry_deleted_records_sent');
  }
  public set customNatIddosL4EntryDeletedRecordsSent(value: number) {
    this._customNatIddosL4EntryDeletedRecordsSent = value;
  }
  public resetCustomNatIddosL4EntryDeletedRecordsSent() {
    this._customNatIddosL4EntryDeletedRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNatIddosL4EntryDeletedRecordsSentInput() {
    return this._customNatIddosL4EntryDeletedRecordsSent;
  }

  // custom_nat_iddos_l4_entry_deleted_records_sent_failure - computed: false, optional: true, required: false
  private _customNatIddosL4EntryDeletedRecordsSentFailure?: number; 
  public get customNatIddosL4EntryDeletedRecordsSentFailure() {
    return this.getNumberAttribute('custom_nat_iddos_l4_entry_deleted_records_sent_failure');
  }
  public set customNatIddosL4EntryDeletedRecordsSentFailure(value: number) {
    this._customNatIddosL4EntryDeletedRecordsSentFailure = value;
  }
  public resetCustomNatIddosL4EntryDeletedRecordsSentFailure() {
    this._customNatIddosL4EntryDeletedRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNatIddosL4EntryDeletedRecordsSentFailureInput() {
    return this._customNatIddosL4EntryDeletedRecordsSentFailure;
  }

  // custom_port_batching_dslite_creation_records_sent - computed: false, optional: true, required: false
  private _customPortBatchingDsliteCreationRecordsSent?: number; 
  public get customPortBatchingDsliteCreationRecordsSent() {
    return this.getNumberAttribute('custom_port_batching_dslite_creation_records_sent');
  }
  public set customPortBatchingDsliteCreationRecordsSent(value: number) {
    this._customPortBatchingDsliteCreationRecordsSent = value;
  }
  public resetCustomPortBatchingDsliteCreationRecordsSent() {
    this._customPortBatchingDsliteCreationRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingDsliteCreationRecordsSentInput() {
    return this._customPortBatchingDsliteCreationRecordsSent;
  }

  // custom_port_batching_dslite_creation_records_sent_failure - computed: false, optional: true, required: false
  private _customPortBatchingDsliteCreationRecordsSentFailure?: number; 
  public get customPortBatchingDsliteCreationRecordsSentFailure() {
    return this.getNumberAttribute('custom_port_batching_dslite_creation_records_sent_failure');
  }
  public set customPortBatchingDsliteCreationRecordsSentFailure(value: number) {
    this._customPortBatchingDsliteCreationRecordsSentFailure = value;
  }
  public resetCustomPortBatchingDsliteCreationRecordsSentFailure() {
    this._customPortBatchingDsliteCreationRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingDsliteCreationRecordsSentFailureInput() {
    return this._customPortBatchingDsliteCreationRecordsSentFailure;
  }

  // custom_port_batching_dslite_deletion_records_sent - computed: false, optional: true, required: false
  private _customPortBatchingDsliteDeletionRecordsSent?: number; 
  public get customPortBatchingDsliteDeletionRecordsSent() {
    return this.getNumberAttribute('custom_port_batching_dslite_deletion_records_sent');
  }
  public set customPortBatchingDsliteDeletionRecordsSent(value: number) {
    this._customPortBatchingDsliteDeletionRecordsSent = value;
  }
  public resetCustomPortBatchingDsliteDeletionRecordsSent() {
    this._customPortBatchingDsliteDeletionRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingDsliteDeletionRecordsSentInput() {
    return this._customPortBatchingDsliteDeletionRecordsSent;
  }

  // custom_port_batching_dslite_deletion_records_sent_failure - computed: false, optional: true, required: false
  private _customPortBatchingDsliteDeletionRecordsSentFailure?: number; 
  public get customPortBatchingDsliteDeletionRecordsSentFailure() {
    return this.getNumberAttribute('custom_port_batching_dslite_deletion_records_sent_failure');
  }
  public set customPortBatchingDsliteDeletionRecordsSentFailure(value: number) {
    this._customPortBatchingDsliteDeletionRecordsSentFailure = value;
  }
  public resetCustomPortBatchingDsliteDeletionRecordsSentFailure() {
    this._customPortBatchingDsliteDeletionRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingDsliteDeletionRecordsSentFailureInput() {
    return this._customPortBatchingDsliteDeletionRecordsSentFailure;
  }

  // custom_port_batching_nat44_creation_records_sent - computed: false, optional: true, required: false
  private _customPortBatchingNat44CreationRecordsSent?: number; 
  public get customPortBatchingNat44CreationRecordsSent() {
    return this.getNumberAttribute('custom_port_batching_nat44_creation_records_sent');
  }
  public set customPortBatchingNat44CreationRecordsSent(value: number) {
    this._customPortBatchingNat44CreationRecordsSent = value;
  }
  public resetCustomPortBatchingNat44CreationRecordsSent() {
    this._customPortBatchingNat44CreationRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingNat44CreationRecordsSentInput() {
    return this._customPortBatchingNat44CreationRecordsSent;
  }

  // custom_port_batching_nat44_creation_records_sent_failure - computed: false, optional: true, required: false
  private _customPortBatchingNat44CreationRecordsSentFailure?: number; 
  public get customPortBatchingNat44CreationRecordsSentFailure() {
    return this.getNumberAttribute('custom_port_batching_nat44_creation_records_sent_failure');
  }
  public set customPortBatchingNat44CreationRecordsSentFailure(value: number) {
    this._customPortBatchingNat44CreationRecordsSentFailure = value;
  }
  public resetCustomPortBatchingNat44CreationRecordsSentFailure() {
    this._customPortBatchingNat44CreationRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingNat44CreationRecordsSentFailureInput() {
    return this._customPortBatchingNat44CreationRecordsSentFailure;
  }

  // custom_port_batching_nat44_deletion_records_sent - computed: false, optional: true, required: false
  private _customPortBatchingNat44DeletionRecordsSent?: number; 
  public get customPortBatchingNat44DeletionRecordsSent() {
    return this.getNumberAttribute('custom_port_batching_nat44_deletion_records_sent');
  }
  public set customPortBatchingNat44DeletionRecordsSent(value: number) {
    this._customPortBatchingNat44DeletionRecordsSent = value;
  }
  public resetCustomPortBatchingNat44DeletionRecordsSent() {
    this._customPortBatchingNat44DeletionRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingNat44DeletionRecordsSentInput() {
    return this._customPortBatchingNat44DeletionRecordsSent;
  }

  // custom_port_batching_nat44_deletion_records_sent_failure - computed: false, optional: true, required: false
  private _customPortBatchingNat44DeletionRecordsSentFailure?: number; 
  public get customPortBatchingNat44DeletionRecordsSentFailure() {
    return this.getNumberAttribute('custom_port_batching_nat44_deletion_records_sent_failure');
  }
  public set customPortBatchingNat44DeletionRecordsSentFailure(value: number) {
    this._customPortBatchingNat44DeletionRecordsSentFailure = value;
  }
  public resetCustomPortBatchingNat44DeletionRecordsSentFailure() {
    this._customPortBatchingNat44DeletionRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingNat44DeletionRecordsSentFailureInput() {
    return this._customPortBatchingNat44DeletionRecordsSentFailure;
  }

  // custom_port_batching_nat64_creation_records_sent - computed: false, optional: true, required: false
  private _customPortBatchingNat64CreationRecordsSent?: number; 
  public get customPortBatchingNat64CreationRecordsSent() {
    return this.getNumberAttribute('custom_port_batching_nat64_creation_records_sent');
  }
  public set customPortBatchingNat64CreationRecordsSent(value: number) {
    this._customPortBatchingNat64CreationRecordsSent = value;
  }
  public resetCustomPortBatchingNat64CreationRecordsSent() {
    this._customPortBatchingNat64CreationRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingNat64CreationRecordsSentInput() {
    return this._customPortBatchingNat64CreationRecordsSent;
  }

  // custom_port_batching_nat64_creation_records_sent_failure - computed: false, optional: true, required: false
  private _customPortBatchingNat64CreationRecordsSentFailure?: number; 
  public get customPortBatchingNat64CreationRecordsSentFailure() {
    return this.getNumberAttribute('custom_port_batching_nat64_creation_records_sent_failure');
  }
  public set customPortBatchingNat64CreationRecordsSentFailure(value: number) {
    this._customPortBatchingNat64CreationRecordsSentFailure = value;
  }
  public resetCustomPortBatchingNat64CreationRecordsSentFailure() {
    this._customPortBatchingNat64CreationRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingNat64CreationRecordsSentFailureInput() {
    return this._customPortBatchingNat64CreationRecordsSentFailure;
  }

  // custom_port_batching_nat64_deletion_records_sent - computed: false, optional: true, required: false
  private _customPortBatchingNat64DeletionRecordsSent?: number; 
  public get customPortBatchingNat64DeletionRecordsSent() {
    return this.getNumberAttribute('custom_port_batching_nat64_deletion_records_sent');
  }
  public set customPortBatchingNat64DeletionRecordsSent(value: number) {
    this._customPortBatchingNat64DeletionRecordsSent = value;
  }
  public resetCustomPortBatchingNat64DeletionRecordsSent() {
    this._customPortBatchingNat64DeletionRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingNat64DeletionRecordsSentInput() {
    return this._customPortBatchingNat64DeletionRecordsSent;
  }

  // custom_port_batching_nat64_deletion_records_sent_failure - computed: false, optional: true, required: false
  private _customPortBatchingNat64DeletionRecordsSentFailure?: number; 
  public get customPortBatchingNat64DeletionRecordsSentFailure() {
    return this.getNumberAttribute('custom_port_batching_nat64_deletion_records_sent_failure');
  }
  public set customPortBatchingNat64DeletionRecordsSentFailure(value: number) {
    this._customPortBatchingNat64DeletionRecordsSentFailure = value;
  }
  public resetCustomPortBatchingNat64DeletionRecordsSentFailure() {
    this._customPortBatchingNat64DeletionRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingNat64DeletionRecordsSentFailureInput() {
    return this._customPortBatchingNat64DeletionRecordsSentFailure;
  }

  // custom_port_batching_v2_dslite_creation_records_sent - computed: false, optional: true, required: false
  private _customPortBatchingV2DsliteCreationRecordsSent?: number; 
  public get customPortBatchingV2DsliteCreationRecordsSent() {
    return this.getNumberAttribute('custom_port_batching_v2_dslite_creation_records_sent');
  }
  public set customPortBatchingV2DsliteCreationRecordsSent(value: number) {
    this._customPortBatchingV2DsliteCreationRecordsSent = value;
  }
  public resetCustomPortBatchingV2DsliteCreationRecordsSent() {
    this._customPortBatchingV2DsliteCreationRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingV2DsliteCreationRecordsSentInput() {
    return this._customPortBatchingV2DsliteCreationRecordsSent;
  }

  // custom_port_batching_v2_dslite_creation_records_sent_failure - computed: false, optional: true, required: false
  private _customPortBatchingV2DsliteCreationRecordsSentFailure?: number; 
  public get customPortBatchingV2DsliteCreationRecordsSentFailure() {
    return this.getNumberAttribute('custom_port_batching_v2_dslite_creation_records_sent_failure');
  }
  public set customPortBatchingV2DsliteCreationRecordsSentFailure(value: number) {
    this._customPortBatchingV2DsliteCreationRecordsSentFailure = value;
  }
  public resetCustomPortBatchingV2DsliteCreationRecordsSentFailure() {
    this._customPortBatchingV2DsliteCreationRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingV2DsliteCreationRecordsSentFailureInput() {
    return this._customPortBatchingV2DsliteCreationRecordsSentFailure;
  }

  // custom_port_batching_v2_dslite_deletion_records_sent - computed: false, optional: true, required: false
  private _customPortBatchingV2DsliteDeletionRecordsSent?: number; 
  public get customPortBatchingV2DsliteDeletionRecordsSent() {
    return this.getNumberAttribute('custom_port_batching_v2_dslite_deletion_records_sent');
  }
  public set customPortBatchingV2DsliteDeletionRecordsSent(value: number) {
    this._customPortBatchingV2DsliteDeletionRecordsSent = value;
  }
  public resetCustomPortBatchingV2DsliteDeletionRecordsSent() {
    this._customPortBatchingV2DsliteDeletionRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingV2DsliteDeletionRecordsSentInput() {
    return this._customPortBatchingV2DsliteDeletionRecordsSent;
  }

  // custom_port_batching_v2_dslite_deletion_records_sent_failure - computed: false, optional: true, required: false
  private _customPortBatchingV2DsliteDeletionRecordsSentFailure?: number; 
  public get customPortBatchingV2DsliteDeletionRecordsSentFailure() {
    return this.getNumberAttribute('custom_port_batching_v2_dslite_deletion_records_sent_failure');
  }
  public set customPortBatchingV2DsliteDeletionRecordsSentFailure(value: number) {
    this._customPortBatchingV2DsliteDeletionRecordsSentFailure = value;
  }
  public resetCustomPortBatchingV2DsliteDeletionRecordsSentFailure() {
    this._customPortBatchingV2DsliteDeletionRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingV2DsliteDeletionRecordsSentFailureInput() {
    return this._customPortBatchingV2DsliteDeletionRecordsSentFailure;
  }

  // custom_port_batching_v2_nat44_creation_records_sent - computed: false, optional: true, required: false
  private _customPortBatchingV2Nat44CreationRecordsSent?: number; 
  public get customPortBatchingV2Nat44CreationRecordsSent() {
    return this.getNumberAttribute('custom_port_batching_v2_nat44_creation_records_sent');
  }
  public set customPortBatchingV2Nat44CreationRecordsSent(value: number) {
    this._customPortBatchingV2Nat44CreationRecordsSent = value;
  }
  public resetCustomPortBatchingV2Nat44CreationRecordsSent() {
    this._customPortBatchingV2Nat44CreationRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingV2Nat44CreationRecordsSentInput() {
    return this._customPortBatchingV2Nat44CreationRecordsSent;
  }

  // custom_port_batching_v2_nat44_creation_records_sent_failure - computed: false, optional: true, required: false
  private _customPortBatchingV2Nat44CreationRecordsSentFailure?: number; 
  public get customPortBatchingV2Nat44CreationRecordsSentFailure() {
    return this.getNumberAttribute('custom_port_batching_v2_nat44_creation_records_sent_failure');
  }
  public set customPortBatchingV2Nat44CreationRecordsSentFailure(value: number) {
    this._customPortBatchingV2Nat44CreationRecordsSentFailure = value;
  }
  public resetCustomPortBatchingV2Nat44CreationRecordsSentFailure() {
    this._customPortBatchingV2Nat44CreationRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingV2Nat44CreationRecordsSentFailureInput() {
    return this._customPortBatchingV2Nat44CreationRecordsSentFailure;
  }

  // custom_port_batching_v2_nat44_deletion_records_sent - computed: false, optional: true, required: false
  private _customPortBatchingV2Nat44DeletionRecordsSent?: number; 
  public get customPortBatchingV2Nat44DeletionRecordsSent() {
    return this.getNumberAttribute('custom_port_batching_v2_nat44_deletion_records_sent');
  }
  public set customPortBatchingV2Nat44DeletionRecordsSent(value: number) {
    this._customPortBatchingV2Nat44DeletionRecordsSent = value;
  }
  public resetCustomPortBatchingV2Nat44DeletionRecordsSent() {
    this._customPortBatchingV2Nat44DeletionRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingV2Nat44DeletionRecordsSentInput() {
    return this._customPortBatchingV2Nat44DeletionRecordsSent;
  }

  // custom_port_batching_v2_nat44_deletion_records_sent_failure - computed: false, optional: true, required: false
  private _customPortBatchingV2Nat44DeletionRecordsSentFailure?: number; 
  public get customPortBatchingV2Nat44DeletionRecordsSentFailure() {
    return this.getNumberAttribute('custom_port_batching_v2_nat44_deletion_records_sent_failure');
  }
  public set customPortBatchingV2Nat44DeletionRecordsSentFailure(value: number) {
    this._customPortBatchingV2Nat44DeletionRecordsSentFailure = value;
  }
  public resetCustomPortBatchingV2Nat44DeletionRecordsSentFailure() {
    this._customPortBatchingV2Nat44DeletionRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingV2Nat44DeletionRecordsSentFailureInput() {
    return this._customPortBatchingV2Nat44DeletionRecordsSentFailure;
  }

  // custom_port_batching_v2_nat64_creation_records_sent - computed: false, optional: true, required: false
  private _customPortBatchingV2Nat64CreationRecordsSent?: number; 
  public get customPortBatchingV2Nat64CreationRecordsSent() {
    return this.getNumberAttribute('custom_port_batching_v2_nat64_creation_records_sent');
  }
  public set customPortBatchingV2Nat64CreationRecordsSent(value: number) {
    this._customPortBatchingV2Nat64CreationRecordsSent = value;
  }
  public resetCustomPortBatchingV2Nat64CreationRecordsSent() {
    this._customPortBatchingV2Nat64CreationRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingV2Nat64CreationRecordsSentInput() {
    return this._customPortBatchingV2Nat64CreationRecordsSent;
  }

  // custom_port_batching_v2_nat64_creation_records_sent_failure - computed: false, optional: true, required: false
  private _customPortBatchingV2Nat64CreationRecordsSentFailure?: number; 
  public get customPortBatchingV2Nat64CreationRecordsSentFailure() {
    return this.getNumberAttribute('custom_port_batching_v2_nat64_creation_records_sent_failure');
  }
  public set customPortBatchingV2Nat64CreationRecordsSentFailure(value: number) {
    this._customPortBatchingV2Nat64CreationRecordsSentFailure = value;
  }
  public resetCustomPortBatchingV2Nat64CreationRecordsSentFailure() {
    this._customPortBatchingV2Nat64CreationRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingV2Nat64CreationRecordsSentFailureInput() {
    return this._customPortBatchingV2Nat64CreationRecordsSentFailure;
  }

  // custom_port_batching_v2_nat64_deletion_records_sent - computed: false, optional: true, required: false
  private _customPortBatchingV2Nat64DeletionRecordsSent?: number; 
  public get customPortBatchingV2Nat64DeletionRecordsSent() {
    return this.getNumberAttribute('custom_port_batching_v2_nat64_deletion_records_sent');
  }
  public set customPortBatchingV2Nat64DeletionRecordsSent(value: number) {
    this._customPortBatchingV2Nat64DeletionRecordsSent = value;
  }
  public resetCustomPortBatchingV2Nat64DeletionRecordsSent() {
    this._customPortBatchingV2Nat64DeletionRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingV2Nat64DeletionRecordsSentInput() {
    return this._customPortBatchingV2Nat64DeletionRecordsSent;
  }

  // custom_port_batching_v2_nat64_deletion_records_sent_failure - computed: false, optional: true, required: false
  private _customPortBatchingV2Nat64DeletionRecordsSentFailure?: number; 
  public get customPortBatchingV2Nat64DeletionRecordsSentFailure() {
    return this.getNumberAttribute('custom_port_batching_v2_nat64_deletion_records_sent_failure');
  }
  public set customPortBatchingV2Nat64DeletionRecordsSentFailure(value: number) {
    this._customPortBatchingV2Nat64DeletionRecordsSentFailure = value;
  }
  public resetCustomPortBatchingV2Nat64DeletionRecordsSentFailure() {
    this._customPortBatchingV2Nat64DeletionRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingV2Nat64DeletionRecordsSentFailureInput() {
    return this._customPortBatchingV2Nat64DeletionRecordsSentFailure;
  }

  // custom_port_mapping_dslite_creation_records_sent - computed: false, optional: true, required: false
  private _customPortMappingDsliteCreationRecordsSent?: number; 
  public get customPortMappingDsliteCreationRecordsSent() {
    return this.getNumberAttribute('custom_port_mapping_dslite_creation_records_sent');
  }
  public set customPortMappingDsliteCreationRecordsSent(value: number) {
    this._customPortMappingDsliteCreationRecordsSent = value;
  }
  public resetCustomPortMappingDsliteCreationRecordsSent() {
    this._customPortMappingDsliteCreationRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortMappingDsliteCreationRecordsSentInput() {
    return this._customPortMappingDsliteCreationRecordsSent;
  }

  // custom_port_mapping_dslite_creation_records_sent_failure - computed: false, optional: true, required: false
  private _customPortMappingDsliteCreationRecordsSentFailure?: number; 
  public get customPortMappingDsliteCreationRecordsSentFailure() {
    return this.getNumberAttribute('custom_port_mapping_dslite_creation_records_sent_failure');
  }
  public set customPortMappingDsliteCreationRecordsSentFailure(value: number) {
    this._customPortMappingDsliteCreationRecordsSentFailure = value;
  }
  public resetCustomPortMappingDsliteCreationRecordsSentFailure() {
    this._customPortMappingDsliteCreationRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortMappingDsliteCreationRecordsSentFailureInput() {
    return this._customPortMappingDsliteCreationRecordsSentFailure;
  }

  // custom_port_mapping_dslite_deletion_records_sent - computed: false, optional: true, required: false
  private _customPortMappingDsliteDeletionRecordsSent?: number; 
  public get customPortMappingDsliteDeletionRecordsSent() {
    return this.getNumberAttribute('custom_port_mapping_dslite_deletion_records_sent');
  }
  public set customPortMappingDsliteDeletionRecordsSent(value: number) {
    this._customPortMappingDsliteDeletionRecordsSent = value;
  }
  public resetCustomPortMappingDsliteDeletionRecordsSent() {
    this._customPortMappingDsliteDeletionRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortMappingDsliteDeletionRecordsSentInput() {
    return this._customPortMappingDsliteDeletionRecordsSent;
  }

  // custom_port_mapping_dslite_deletion_records_sent_failure - computed: false, optional: true, required: false
  private _customPortMappingDsliteDeletionRecordsSentFailure?: number; 
  public get customPortMappingDsliteDeletionRecordsSentFailure() {
    return this.getNumberAttribute('custom_port_mapping_dslite_deletion_records_sent_failure');
  }
  public set customPortMappingDsliteDeletionRecordsSentFailure(value: number) {
    this._customPortMappingDsliteDeletionRecordsSentFailure = value;
  }
  public resetCustomPortMappingDsliteDeletionRecordsSentFailure() {
    this._customPortMappingDsliteDeletionRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortMappingDsliteDeletionRecordsSentFailureInput() {
    return this._customPortMappingDsliteDeletionRecordsSentFailure;
  }

  // custom_port_mapping_nat44_creation_records_sent - computed: false, optional: true, required: false
  private _customPortMappingNat44CreationRecordsSent?: number; 
  public get customPortMappingNat44CreationRecordsSent() {
    return this.getNumberAttribute('custom_port_mapping_nat44_creation_records_sent');
  }
  public set customPortMappingNat44CreationRecordsSent(value: number) {
    this._customPortMappingNat44CreationRecordsSent = value;
  }
  public resetCustomPortMappingNat44CreationRecordsSent() {
    this._customPortMappingNat44CreationRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortMappingNat44CreationRecordsSentInput() {
    return this._customPortMappingNat44CreationRecordsSent;
  }

  // custom_port_mapping_nat44_creation_records_sent_failure - computed: false, optional: true, required: false
  private _customPortMappingNat44CreationRecordsSentFailure?: number; 
  public get customPortMappingNat44CreationRecordsSentFailure() {
    return this.getNumberAttribute('custom_port_mapping_nat44_creation_records_sent_failure');
  }
  public set customPortMappingNat44CreationRecordsSentFailure(value: number) {
    this._customPortMappingNat44CreationRecordsSentFailure = value;
  }
  public resetCustomPortMappingNat44CreationRecordsSentFailure() {
    this._customPortMappingNat44CreationRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortMappingNat44CreationRecordsSentFailureInput() {
    return this._customPortMappingNat44CreationRecordsSentFailure;
  }

  // custom_port_mapping_nat44_deletion_records_sent - computed: false, optional: true, required: false
  private _customPortMappingNat44DeletionRecordsSent?: number; 
  public get customPortMappingNat44DeletionRecordsSent() {
    return this.getNumberAttribute('custom_port_mapping_nat44_deletion_records_sent');
  }
  public set customPortMappingNat44DeletionRecordsSent(value: number) {
    this._customPortMappingNat44DeletionRecordsSent = value;
  }
  public resetCustomPortMappingNat44DeletionRecordsSent() {
    this._customPortMappingNat44DeletionRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortMappingNat44DeletionRecordsSentInput() {
    return this._customPortMappingNat44DeletionRecordsSent;
  }

  // custom_port_mapping_nat44_deletion_records_sent_failure - computed: false, optional: true, required: false
  private _customPortMappingNat44DeletionRecordsSentFailure?: number; 
  public get customPortMappingNat44DeletionRecordsSentFailure() {
    return this.getNumberAttribute('custom_port_mapping_nat44_deletion_records_sent_failure');
  }
  public set customPortMappingNat44DeletionRecordsSentFailure(value: number) {
    this._customPortMappingNat44DeletionRecordsSentFailure = value;
  }
  public resetCustomPortMappingNat44DeletionRecordsSentFailure() {
    this._customPortMappingNat44DeletionRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortMappingNat44DeletionRecordsSentFailureInput() {
    return this._customPortMappingNat44DeletionRecordsSentFailure;
  }

  // custom_port_mapping_nat64_creation_records_sent - computed: false, optional: true, required: false
  private _customPortMappingNat64CreationRecordsSent?: number; 
  public get customPortMappingNat64CreationRecordsSent() {
    return this.getNumberAttribute('custom_port_mapping_nat64_creation_records_sent');
  }
  public set customPortMappingNat64CreationRecordsSent(value: number) {
    this._customPortMappingNat64CreationRecordsSent = value;
  }
  public resetCustomPortMappingNat64CreationRecordsSent() {
    this._customPortMappingNat64CreationRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortMappingNat64CreationRecordsSentInput() {
    return this._customPortMappingNat64CreationRecordsSent;
  }

  // custom_port_mapping_nat64_creation_records_sent_failure - computed: false, optional: true, required: false
  private _customPortMappingNat64CreationRecordsSentFailure?: number; 
  public get customPortMappingNat64CreationRecordsSentFailure() {
    return this.getNumberAttribute('custom_port_mapping_nat64_creation_records_sent_failure');
  }
  public set customPortMappingNat64CreationRecordsSentFailure(value: number) {
    this._customPortMappingNat64CreationRecordsSentFailure = value;
  }
  public resetCustomPortMappingNat64CreationRecordsSentFailure() {
    this._customPortMappingNat64CreationRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortMappingNat64CreationRecordsSentFailureInput() {
    return this._customPortMappingNat64CreationRecordsSentFailure;
  }

  // custom_port_mapping_nat64_deletion_records_sent - computed: false, optional: true, required: false
  private _customPortMappingNat64DeletionRecordsSent?: number; 
  public get customPortMappingNat64DeletionRecordsSent() {
    return this.getNumberAttribute('custom_port_mapping_nat64_deletion_records_sent');
  }
  public set customPortMappingNat64DeletionRecordsSent(value: number) {
    this._customPortMappingNat64DeletionRecordsSent = value;
  }
  public resetCustomPortMappingNat64DeletionRecordsSent() {
    this._customPortMappingNat64DeletionRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortMappingNat64DeletionRecordsSentInput() {
    return this._customPortMappingNat64DeletionRecordsSent;
  }

  // custom_port_mapping_nat64_deletion_records_sent_failure - computed: false, optional: true, required: false
  private _customPortMappingNat64DeletionRecordsSentFailure?: number; 
  public get customPortMappingNat64DeletionRecordsSentFailure() {
    return this.getNumberAttribute('custom_port_mapping_nat64_deletion_records_sent_failure');
  }
  public set customPortMappingNat64DeletionRecordsSentFailure(value: number) {
    this._customPortMappingNat64DeletionRecordsSentFailure = value;
  }
  public resetCustomPortMappingNat64DeletionRecordsSentFailure() {
    this._customPortMappingNat64DeletionRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortMappingNat64DeletionRecordsSentFailureInput() {
    return this._customPortMappingNat64DeletionRecordsSentFailure;
  }

  // custom_session_event_dslite_creation_records_sent - computed: false, optional: true, required: false
  private _customSessionEventDsliteCreationRecordsSent?: number; 
  public get customSessionEventDsliteCreationRecordsSent() {
    return this.getNumberAttribute('custom_session_event_dslite_creation_records_sent');
  }
  public set customSessionEventDsliteCreationRecordsSent(value: number) {
    this._customSessionEventDsliteCreationRecordsSent = value;
  }
  public resetCustomSessionEventDsliteCreationRecordsSent() {
    this._customSessionEventDsliteCreationRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionEventDsliteCreationRecordsSentInput() {
    return this._customSessionEventDsliteCreationRecordsSent;
  }

  // custom_session_event_dslite_creation_records_sent_failure - computed: false, optional: true, required: false
  private _customSessionEventDsliteCreationRecordsSentFailure?: number; 
  public get customSessionEventDsliteCreationRecordsSentFailure() {
    return this.getNumberAttribute('custom_session_event_dslite_creation_records_sent_failure');
  }
  public set customSessionEventDsliteCreationRecordsSentFailure(value: number) {
    this._customSessionEventDsliteCreationRecordsSentFailure = value;
  }
  public resetCustomSessionEventDsliteCreationRecordsSentFailure() {
    this._customSessionEventDsliteCreationRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionEventDsliteCreationRecordsSentFailureInput() {
    return this._customSessionEventDsliteCreationRecordsSentFailure;
  }

  // custom_session_event_dslite_deletion_records_sent - computed: false, optional: true, required: false
  private _customSessionEventDsliteDeletionRecordsSent?: number; 
  public get customSessionEventDsliteDeletionRecordsSent() {
    return this.getNumberAttribute('custom_session_event_dslite_deletion_records_sent');
  }
  public set customSessionEventDsliteDeletionRecordsSent(value: number) {
    this._customSessionEventDsliteDeletionRecordsSent = value;
  }
  public resetCustomSessionEventDsliteDeletionRecordsSent() {
    this._customSessionEventDsliteDeletionRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionEventDsliteDeletionRecordsSentInput() {
    return this._customSessionEventDsliteDeletionRecordsSent;
  }

  // custom_session_event_dslite_deletion_records_sent_failure - computed: false, optional: true, required: false
  private _customSessionEventDsliteDeletionRecordsSentFailure?: number; 
  public get customSessionEventDsliteDeletionRecordsSentFailure() {
    return this.getNumberAttribute('custom_session_event_dslite_deletion_records_sent_failure');
  }
  public set customSessionEventDsliteDeletionRecordsSentFailure(value: number) {
    this._customSessionEventDsliteDeletionRecordsSentFailure = value;
  }
  public resetCustomSessionEventDsliteDeletionRecordsSentFailure() {
    this._customSessionEventDsliteDeletionRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionEventDsliteDeletionRecordsSentFailureInput() {
    return this._customSessionEventDsliteDeletionRecordsSentFailure;
  }

  // custom_session_event_fw4_creation_records_sent - computed: false, optional: true, required: false
  private _customSessionEventFw4CreationRecordsSent?: number; 
  public get customSessionEventFw4CreationRecordsSent() {
    return this.getNumberAttribute('custom_session_event_fw4_creation_records_sent');
  }
  public set customSessionEventFw4CreationRecordsSent(value: number) {
    this._customSessionEventFw4CreationRecordsSent = value;
  }
  public resetCustomSessionEventFw4CreationRecordsSent() {
    this._customSessionEventFw4CreationRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionEventFw4CreationRecordsSentInput() {
    return this._customSessionEventFw4CreationRecordsSent;
  }

  // custom_session_event_fw4_creation_records_sent_failure - computed: false, optional: true, required: false
  private _customSessionEventFw4CreationRecordsSentFailure?: number; 
  public get customSessionEventFw4CreationRecordsSentFailure() {
    return this.getNumberAttribute('custom_session_event_fw4_creation_records_sent_failure');
  }
  public set customSessionEventFw4CreationRecordsSentFailure(value: number) {
    this._customSessionEventFw4CreationRecordsSentFailure = value;
  }
  public resetCustomSessionEventFw4CreationRecordsSentFailure() {
    this._customSessionEventFw4CreationRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionEventFw4CreationRecordsSentFailureInput() {
    return this._customSessionEventFw4CreationRecordsSentFailure;
  }

  // custom_session_event_fw4_deletion_records_sent - computed: false, optional: true, required: false
  private _customSessionEventFw4DeletionRecordsSent?: number; 
  public get customSessionEventFw4DeletionRecordsSent() {
    return this.getNumberAttribute('custom_session_event_fw4_deletion_records_sent');
  }
  public set customSessionEventFw4DeletionRecordsSent(value: number) {
    this._customSessionEventFw4DeletionRecordsSent = value;
  }
  public resetCustomSessionEventFw4DeletionRecordsSent() {
    this._customSessionEventFw4DeletionRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionEventFw4DeletionRecordsSentInput() {
    return this._customSessionEventFw4DeletionRecordsSent;
  }

  // custom_session_event_fw4_deletion_records_sent_failure - computed: false, optional: true, required: false
  private _customSessionEventFw4DeletionRecordsSentFailure?: number; 
  public get customSessionEventFw4DeletionRecordsSentFailure() {
    return this.getNumberAttribute('custom_session_event_fw4_deletion_records_sent_failure');
  }
  public set customSessionEventFw4DeletionRecordsSentFailure(value: number) {
    this._customSessionEventFw4DeletionRecordsSentFailure = value;
  }
  public resetCustomSessionEventFw4DeletionRecordsSentFailure() {
    this._customSessionEventFw4DeletionRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionEventFw4DeletionRecordsSentFailureInput() {
    return this._customSessionEventFw4DeletionRecordsSentFailure;
  }

  // custom_session_event_fw6_creation_records_sent - computed: false, optional: true, required: false
  private _customSessionEventFw6CreationRecordsSent?: number; 
  public get customSessionEventFw6CreationRecordsSent() {
    return this.getNumberAttribute('custom_session_event_fw6_creation_records_sent');
  }
  public set customSessionEventFw6CreationRecordsSent(value: number) {
    this._customSessionEventFw6CreationRecordsSent = value;
  }
  public resetCustomSessionEventFw6CreationRecordsSent() {
    this._customSessionEventFw6CreationRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionEventFw6CreationRecordsSentInput() {
    return this._customSessionEventFw6CreationRecordsSent;
  }

  // custom_session_event_fw6_creation_records_sent_failure - computed: false, optional: true, required: false
  private _customSessionEventFw6CreationRecordsSentFailure?: number; 
  public get customSessionEventFw6CreationRecordsSentFailure() {
    return this.getNumberAttribute('custom_session_event_fw6_creation_records_sent_failure');
  }
  public set customSessionEventFw6CreationRecordsSentFailure(value: number) {
    this._customSessionEventFw6CreationRecordsSentFailure = value;
  }
  public resetCustomSessionEventFw6CreationRecordsSentFailure() {
    this._customSessionEventFw6CreationRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionEventFw6CreationRecordsSentFailureInput() {
    return this._customSessionEventFw6CreationRecordsSentFailure;
  }

  // custom_session_event_fw6_deletion_records_sent - computed: false, optional: true, required: false
  private _customSessionEventFw6DeletionRecordsSent?: number; 
  public get customSessionEventFw6DeletionRecordsSent() {
    return this.getNumberAttribute('custom_session_event_fw6_deletion_records_sent');
  }
  public set customSessionEventFw6DeletionRecordsSent(value: number) {
    this._customSessionEventFw6DeletionRecordsSent = value;
  }
  public resetCustomSessionEventFw6DeletionRecordsSent() {
    this._customSessionEventFw6DeletionRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionEventFw6DeletionRecordsSentInput() {
    return this._customSessionEventFw6DeletionRecordsSent;
  }

  // custom_session_event_fw6_deletion_records_sent_failure - computed: false, optional: true, required: false
  private _customSessionEventFw6DeletionRecordsSentFailure?: number; 
  public get customSessionEventFw6DeletionRecordsSentFailure() {
    return this.getNumberAttribute('custom_session_event_fw6_deletion_records_sent_failure');
  }
  public set customSessionEventFw6DeletionRecordsSentFailure(value: number) {
    this._customSessionEventFw6DeletionRecordsSentFailure = value;
  }
  public resetCustomSessionEventFw6DeletionRecordsSentFailure() {
    this._customSessionEventFw6DeletionRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionEventFw6DeletionRecordsSentFailureInput() {
    return this._customSessionEventFw6DeletionRecordsSentFailure;
  }

  // custom_session_event_nat44_creation_records_sent - computed: false, optional: true, required: false
  private _customSessionEventNat44CreationRecordsSent?: number; 
  public get customSessionEventNat44CreationRecordsSent() {
    return this.getNumberAttribute('custom_session_event_nat44_creation_records_sent');
  }
  public set customSessionEventNat44CreationRecordsSent(value: number) {
    this._customSessionEventNat44CreationRecordsSent = value;
  }
  public resetCustomSessionEventNat44CreationRecordsSent() {
    this._customSessionEventNat44CreationRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionEventNat44CreationRecordsSentInput() {
    return this._customSessionEventNat44CreationRecordsSent;
  }

  // custom_session_event_nat44_creation_records_sent_failure - computed: false, optional: true, required: false
  private _customSessionEventNat44CreationRecordsSentFailure?: number; 
  public get customSessionEventNat44CreationRecordsSentFailure() {
    return this.getNumberAttribute('custom_session_event_nat44_creation_records_sent_failure');
  }
  public set customSessionEventNat44CreationRecordsSentFailure(value: number) {
    this._customSessionEventNat44CreationRecordsSentFailure = value;
  }
  public resetCustomSessionEventNat44CreationRecordsSentFailure() {
    this._customSessionEventNat44CreationRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionEventNat44CreationRecordsSentFailureInput() {
    return this._customSessionEventNat44CreationRecordsSentFailure;
  }

  // custom_session_event_nat44_deletion_records_sent - computed: false, optional: true, required: false
  private _customSessionEventNat44DeletionRecordsSent?: number; 
  public get customSessionEventNat44DeletionRecordsSent() {
    return this.getNumberAttribute('custom_session_event_nat44_deletion_records_sent');
  }
  public set customSessionEventNat44DeletionRecordsSent(value: number) {
    this._customSessionEventNat44DeletionRecordsSent = value;
  }
  public resetCustomSessionEventNat44DeletionRecordsSent() {
    this._customSessionEventNat44DeletionRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionEventNat44DeletionRecordsSentInput() {
    return this._customSessionEventNat44DeletionRecordsSent;
  }

  // custom_session_event_nat44_deletion_records_sent_failure - computed: false, optional: true, required: false
  private _customSessionEventNat44DeletionRecordsSentFailure?: number; 
  public get customSessionEventNat44DeletionRecordsSentFailure() {
    return this.getNumberAttribute('custom_session_event_nat44_deletion_records_sent_failure');
  }
  public set customSessionEventNat44DeletionRecordsSentFailure(value: number) {
    this._customSessionEventNat44DeletionRecordsSentFailure = value;
  }
  public resetCustomSessionEventNat44DeletionRecordsSentFailure() {
    this._customSessionEventNat44DeletionRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionEventNat44DeletionRecordsSentFailureInput() {
    return this._customSessionEventNat44DeletionRecordsSentFailure;
  }

  // custom_session_event_nat64_creation_records_sent - computed: false, optional: true, required: false
  private _customSessionEventNat64CreationRecordsSent?: number; 
  public get customSessionEventNat64CreationRecordsSent() {
    return this.getNumberAttribute('custom_session_event_nat64_creation_records_sent');
  }
  public set customSessionEventNat64CreationRecordsSent(value: number) {
    this._customSessionEventNat64CreationRecordsSent = value;
  }
  public resetCustomSessionEventNat64CreationRecordsSent() {
    this._customSessionEventNat64CreationRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionEventNat64CreationRecordsSentInput() {
    return this._customSessionEventNat64CreationRecordsSent;
  }

  // custom_session_event_nat64_creation_records_sent_failure - computed: false, optional: true, required: false
  private _customSessionEventNat64CreationRecordsSentFailure?: number; 
  public get customSessionEventNat64CreationRecordsSentFailure() {
    return this.getNumberAttribute('custom_session_event_nat64_creation_records_sent_failure');
  }
  public set customSessionEventNat64CreationRecordsSentFailure(value: number) {
    this._customSessionEventNat64CreationRecordsSentFailure = value;
  }
  public resetCustomSessionEventNat64CreationRecordsSentFailure() {
    this._customSessionEventNat64CreationRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionEventNat64CreationRecordsSentFailureInput() {
    return this._customSessionEventNat64CreationRecordsSentFailure;
  }

  // custom_session_event_nat64_deletion_records_sent - computed: false, optional: true, required: false
  private _customSessionEventNat64DeletionRecordsSent?: number; 
  public get customSessionEventNat64DeletionRecordsSent() {
    return this.getNumberAttribute('custom_session_event_nat64_deletion_records_sent');
  }
  public set customSessionEventNat64DeletionRecordsSent(value: number) {
    this._customSessionEventNat64DeletionRecordsSent = value;
  }
  public resetCustomSessionEventNat64DeletionRecordsSent() {
    this._customSessionEventNat64DeletionRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionEventNat64DeletionRecordsSentInput() {
    return this._customSessionEventNat64DeletionRecordsSent;
  }

  // custom_session_event_nat64_deletion_records_sent_failure - computed: false, optional: true, required: false
  private _customSessionEventNat64DeletionRecordsSentFailure?: number; 
  public get customSessionEventNat64DeletionRecordsSentFailure() {
    return this.getNumberAttribute('custom_session_event_nat64_deletion_records_sent_failure');
  }
  public set customSessionEventNat64DeletionRecordsSentFailure(value: number) {
    this._customSessionEventNat64DeletionRecordsSentFailure = value;
  }
  public resetCustomSessionEventNat64DeletionRecordsSentFailure() {
    this._customSessionEventNat64DeletionRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionEventNat64DeletionRecordsSentFailureInput() {
    return this._customSessionEventNat64DeletionRecordsSentFailure;
  }

  // ddos_general_stat_records_sent - computed: false, optional: true, required: false
  private _ddosGeneralStatRecordsSent?: number; 
  public get ddosGeneralStatRecordsSent() {
    return this.getNumberAttribute('ddos_general_stat_records_sent');
  }
  public set ddosGeneralStatRecordsSent(value: number) {
    this._ddosGeneralStatRecordsSent = value;
  }
  public resetDdosGeneralStatRecordsSent() {
    this._ddosGeneralStatRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosGeneralStatRecordsSentInput() {
    return this._ddosGeneralStatRecordsSent;
  }

  // ddos_general_stat_records_sent_failure - computed: false, optional: true, required: false
  private _ddosGeneralStatRecordsSentFailure?: number; 
  public get ddosGeneralStatRecordsSentFailure() {
    return this.getNumberAttribute('ddos_general_stat_records_sent_failure');
  }
  public set ddosGeneralStatRecordsSentFailure(value: number) {
    this._ddosGeneralStatRecordsSentFailure = value;
  }
  public resetDdosGeneralStatRecordsSentFailure() {
    this._ddosGeneralStatRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosGeneralStatRecordsSentFailureInput() {
    return this._ddosGeneralStatRecordsSentFailure;
  }

  // ddos_http_stat_records_sent - computed: false, optional: true, required: false
  private _ddosHttpStatRecordsSent?: number; 
  public get ddosHttpStatRecordsSent() {
    return this.getNumberAttribute('ddos_http_stat_records_sent');
  }
  public set ddosHttpStatRecordsSent(value: number) {
    this._ddosHttpStatRecordsSent = value;
  }
  public resetDdosHttpStatRecordsSent() {
    this._ddosHttpStatRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosHttpStatRecordsSentInput() {
    return this._ddosHttpStatRecordsSent;
  }

  // ddos_http_stat_records_sent_failure - computed: false, optional: true, required: false
  private _ddosHttpStatRecordsSentFailure?: number; 
  public get ddosHttpStatRecordsSentFailure() {
    return this.getNumberAttribute('ddos_http_stat_records_sent_failure');
  }
  public set ddosHttpStatRecordsSentFailure(value: number) {
    this._ddosHttpStatRecordsSentFailure = value;
  }
  public resetDdosHttpStatRecordsSentFailure() {
    this._ddosHttpStatRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosHttpStatRecordsSentFailureInput() {
    return this._ddosHttpStatRecordsSentFailure;
  }

  // dslite_records_sent - computed: false, optional: true, required: false
  private _dsliteRecordsSent?: number; 
  public get dsliteRecordsSent() {
    return this.getNumberAttribute('dslite_records_sent');
  }
  public set dsliteRecordsSent(value: number) {
    this._dsliteRecordsSent = value;
  }
  public resetDsliteRecordsSent() {
    this._dsliteRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsliteRecordsSentInput() {
    return this._dsliteRecordsSent;
  }

  // dslite_records_sent_failure - computed: false, optional: true, required: false
  private _dsliteRecordsSentFailure?: number; 
  public get dsliteRecordsSentFailure() {
    return this.getNumberAttribute('dslite_records_sent_failure');
  }
  public set dsliteRecordsSentFailure(value: number) {
    this._dsliteRecordsSentFailure = value;
  }
  public resetDsliteRecordsSentFailure() {
    this._dsliteRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsliteRecordsSentFailureInput() {
    return this._dsliteRecordsSentFailure;
  }

  // nat44_records_sent - computed: false, optional: true, required: false
  private _nat44RecordsSent?: number; 
  public get nat44RecordsSent() {
    return this.getNumberAttribute('nat44_records_sent');
  }
  public set nat44RecordsSent(value: number) {
    this._nat44RecordsSent = value;
  }
  public resetNat44RecordsSent() {
    this._nat44RecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat44RecordsSentInput() {
    return this._nat44RecordsSent;
  }

  // nat44_records_sent_failure - computed: false, optional: true, required: false
  private _nat44RecordsSentFailure?: number; 
  public get nat44RecordsSentFailure() {
    return this.getNumberAttribute('nat44_records_sent_failure');
  }
  public set nat44RecordsSentFailure(value: number) {
    this._nat44RecordsSentFailure = value;
  }
  public resetNat44RecordsSentFailure() {
    this._nat44RecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat44RecordsSentFailureInput() {
    return this._nat44RecordsSentFailure;
  }

  // nat64_records_sent - computed: false, optional: true, required: false
  private _nat64RecordsSent?: number; 
  public get nat64RecordsSent() {
    return this.getNumberAttribute('nat64_records_sent');
  }
  public set nat64RecordsSent(value: number) {
    this._nat64RecordsSent = value;
  }
  public resetNat64RecordsSent() {
    this._nat64RecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64RecordsSentInput() {
    return this._nat64RecordsSent;
  }

  // nat64_records_sent_failure - computed: false, optional: true, required: false
  private _nat64RecordsSentFailure?: number; 
  public get nat64RecordsSentFailure() {
    return this.getNumberAttribute('nat64_records_sent_failure');
  }
  public set nat64RecordsSentFailure(value: number) {
    this._nat64RecordsSentFailure = value;
  }
  public resetNat64RecordsSentFailure() {
    this._nat64RecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64RecordsSentFailureInput() {
    return this._nat64RecordsSentFailure;
  }

  // netflow_v5_ext_records_sent - computed: false, optional: true, required: false
  private _netflowV5ExtRecordsSent?: number; 
  public get netflowV5ExtRecordsSent() {
    return this.getNumberAttribute('netflow_v5_ext_records_sent');
  }
  public set netflowV5ExtRecordsSent(value: number) {
    this._netflowV5ExtRecordsSent = value;
  }
  public resetNetflowV5ExtRecordsSent() {
    this._netflowV5ExtRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowV5ExtRecordsSentInput() {
    return this._netflowV5ExtRecordsSent;
  }

  // netflow_v5_ext_records_sent_failure - computed: false, optional: true, required: false
  private _netflowV5ExtRecordsSentFailure?: number; 
  public get netflowV5ExtRecordsSentFailure() {
    return this.getNumberAttribute('netflow_v5_ext_records_sent_failure');
  }
  public set netflowV5ExtRecordsSentFailure(value: number) {
    this._netflowV5ExtRecordsSentFailure = value;
  }
  public resetNetflowV5ExtRecordsSentFailure() {
    this._netflowV5ExtRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowV5ExtRecordsSentFailureInput() {
    return this._netflowV5ExtRecordsSentFailure;
  }

  // netflow_v5_records_sent - computed: false, optional: true, required: false
  private _netflowV5RecordsSent?: number; 
  public get netflowV5RecordsSent() {
    return this.getNumberAttribute('netflow_v5_records_sent');
  }
  public set netflowV5RecordsSent(value: number) {
    this._netflowV5RecordsSent = value;
  }
  public resetNetflowV5RecordsSent() {
    this._netflowV5RecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowV5RecordsSentInput() {
    return this._netflowV5RecordsSent;
  }

  // netflow_v5_records_sent_failure - computed: false, optional: true, required: false
  private _netflowV5RecordsSentFailure?: number; 
  public get netflowV5RecordsSentFailure() {
    return this.getNumberAttribute('netflow_v5_records_sent_failure');
  }
  public set netflowV5RecordsSentFailure(value: number) {
    this._netflowV5RecordsSentFailure = value;
  }
  public resetNetflowV5RecordsSentFailure() {
    this._netflowV5RecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowV5RecordsSentFailureInput() {
    return this._netflowV5RecordsSentFailure;
  }

  // packets_sent - computed: false, optional: true, required: false
  private _packetsSent?: number; 
  public get packetsSent() {
    return this.getNumberAttribute('packets_sent');
  }
  public set packetsSent(value: number) {
    this._packetsSent = value;
  }
  public resetPacketsSent() {
    this._packetsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsSentInput() {
    return this._packetsSent;
  }

  // port_batching_dslite_records_sent - computed: false, optional: true, required: false
  private _portBatchingDsliteRecordsSent?: number; 
  public get portBatchingDsliteRecordsSent() {
    return this.getNumberAttribute('port_batching_dslite_records_sent');
  }
  public set portBatchingDsliteRecordsSent(value: number) {
    this._portBatchingDsliteRecordsSent = value;
  }
  public resetPortBatchingDsliteRecordsSent() {
    this._portBatchingDsliteRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchingDsliteRecordsSentInput() {
    return this._portBatchingDsliteRecordsSent;
  }

  // port_batching_dslite_records_sent_failure - computed: false, optional: true, required: false
  private _portBatchingDsliteRecordsSentFailure?: number; 
  public get portBatchingDsliteRecordsSentFailure() {
    return this.getNumberAttribute('port_batching_dslite_records_sent_failure');
  }
  public set portBatchingDsliteRecordsSentFailure(value: number) {
    this._portBatchingDsliteRecordsSentFailure = value;
  }
  public resetPortBatchingDsliteRecordsSentFailure() {
    this._portBatchingDsliteRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchingDsliteRecordsSentFailureInput() {
    return this._portBatchingDsliteRecordsSentFailure;
  }

  // port_batching_nat44_records_sent - computed: false, optional: true, required: false
  private _portBatchingNat44RecordsSent?: number; 
  public get portBatchingNat44RecordsSent() {
    return this.getNumberAttribute('port_batching_nat44_records_sent');
  }
  public set portBatchingNat44RecordsSent(value: number) {
    this._portBatchingNat44RecordsSent = value;
  }
  public resetPortBatchingNat44RecordsSent() {
    this._portBatchingNat44RecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchingNat44RecordsSentInput() {
    return this._portBatchingNat44RecordsSent;
  }

  // port_batching_nat44_records_sent_failure - computed: false, optional: true, required: false
  private _portBatchingNat44RecordsSentFailure?: number; 
  public get portBatchingNat44RecordsSentFailure() {
    return this.getNumberAttribute('port_batching_nat44_records_sent_failure');
  }
  public set portBatchingNat44RecordsSentFailure(value: number) {
    this._portBatchingNat44RecordsSentFailure = value;
  }
  public resetPortBatchingNat44RecordsSentFailure() {
    this._portBatchingNat44RecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchingNat44RecordsSentFailureInput() {
    return this._portBatchingNat44RecordsSentFailure;
  }

  // port_batching_nat64_records_sent - computed: false, optional: true, required: false
  private _portBatchingNat64RecordsSent?: number; 
  public get portBatchingNat64RecordsSent() {
    return this.getNumberAttribute('port_batching_nat64_records_sent');
  }
  public set portBatchingNat64RecordsSent(value: number) {
    this._portBatchingNat64RecordsSent = value;
  }
  public resetPortBatchingNat64RecordsSent() {
    this._portBatchingNat64RecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchingNat64RecordsSentInput() {
    return this._portBatchingNat64RecordsSent;
  }

  // port_batching_nat64_records_sent_failure - computed: false, optional: true, required: false
  private _portBatchingNat64RecordsSentFailure?: number; 
  public get portBatchingNat64RecordsSentFailure() {
    return this.getNumberAttribute('port_batching_nat64_records_sent_failure');
  }
  public set portBatchingNat64RecordsSentFailure(value: number) {
    this._portBatchingNat64RecordsSentFailure = value;
  }
  public resetPortBatchingNat64RecordsSentFailure() {
    this._portBatchingNat64RecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchingNat64RecordsSentFailureInput() {
    return this._portBatchingNat64RecordsSentFailure;
  }

  // port_batching_v2_dslite_records_sent - computed: false, optional: true, required: false
  private _portBatchingV2DsliteRecordsSent?: number; 
  public get portBatchingV2DsliteRecordsSent() {
    return this.getNumberAttribute('port_batching_v2_dslite_records_sent');
  }
  public set portBatchingV2DsliteRecordsSent(value: number) {
    this._portBatchingV2DsliteRecordsSent = value;
  }
  public resetPortBatchingV2DsliteRecordsSent() {
    this._portBatchingV2DsliteRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchingV2DsliteRecordsSentInput() {
    return this._portBatchingV2DsliteRecordsSent;
  }

  // port_batching_v2_dslite_records_sent_failure - computed: false, optional: true, required: false
  private _portBatchingV2DsliteRecordsSentFailure?: number; 
  public get portBatchingV2DsliteRecordsSentFailure() {
    return this.getNumberAttribute('port_batching_v2_dslite_records_sent_failure');
  }
  public set portBatchingV2DsliteRecordsSentFailure(value: number) {
    this._portBatchingV2DsliteRecordsSentFailure = value;
  }
  public resetPortBatchingV2DsliteRecordsSentFailure() {
    this._portBatchingV2DsliteRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchingV2DsliteRecordsSentFailureInput() {
    return this._portBatchingV2DsliteRecordsSentFailure;
  }

  // port_batching_v2_nat44_records_sent - computed: false, optional: true, required: false
  private _portBatchingV2Nat44RecordsSent?: number; 
  public get portBatchingV2Nat44RecordsSent() {
    return this.getNumberAttribute('port_batching_v2_nat44_records_sent');
  }
  public set portBatchingV2Nat44RecordsSent(value: number) {
    this._portBatchingV2Nat44RecordsSent = value;
  }
  public resetPortBatchingV2Nat44RecordsSent() {
    this._portBatchingV2Nat44RecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchingV2Nat44RecordsSentInput() {
    return this._portBatchingV2Nat44RecordsSent;
  }

  // port_batching_v2_nat44_records_sent_failure - computed: false, optional: true, required: false
  private _portBatchingV2Nat44RecordsSentFailure?: number; 
  public get portBatchingV2Nat44RecordsSentFailure() {
    return this.getNumberAttribute('port_batching_v2_nat44_records_sent_failure');
  }
  public set portBatchingV2Nat44RecordsSentFailure(value: number) {
    this._portBatchingV2Nat44RecordsSentFailure = value;
  }
  public resetPortBatchingV2Nat44RecordsSentFailure() {
    this._portBatchingV2Nat44RecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchingV2Nat44RecordsSentFailureInput() {
    return this._portBatchingV2Nat44RecordsSentFailure;
  }

  // port_batching_v2_nat64_records_sent - computed: false, optional: true, required: false
  private _portBatchingV2Nat64RecordsSent?: number; 
  public get portBatchingV2Nat64RecordsSent() {
    return this.getNumberAttribute('port_batching_v2_nat64_records_sent');
  }
  public set portBatchingV2Nat64RecordsSent(value: number) {
    this._portBatchingV2Nat64RecordsSent = value;
  }
  public resetPortBatchingV2Nat64RecordsSent() {
    this._portBatchingV2Nat64RecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchingV2Nat64RecordsSentInput() {
    return this._portBatchingV2Nat64RecordsSent;
  }

  // port_batching_v2_nat64_records_sent_failure - computed: false, optional: true, required: false
  private _portBatchingV2Nat64RecordsSentFailure?: number; 
  public get portBatchingV2Nat64RecordsSentFailure() {
    return this.getNumberAttribute('port_batching_v2_nat64_records_sent_failure');
  }
  public set portBatchingV2Nat64RecordsSentFailure(value: number) {
    this._portBatchingV2Nat64RecordsSentFailure = value;
  }
  public resetPortBatchingV2Nat64RecordsSentFailure() {
    this._portBatchingV2Nat64RecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchingV2Nat64RecordsSentFailureInput() {
    return this._portBatchingV2Nat64RecordsSentFailure;
  }

  // port_mapping_dslite_records_sent - computed: false, optional: true, required: false
  private _portMappingDsliteRecordsSent?: number; 
  public get portMappingDsliteRecordsSent() {
    return this.getNumberAttribute('port_mapping_dslite_records_sent');
  }
  public set portMappingDsliteRecordsSent(value: number) {
    this._portMappingDsliteRecordsSent = value;
  }
  public resetPortMappingDsliteRecordsSent() {
    this._portMappingDsliteRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portMappingDsliteRecordsSentInput() {
    return this._portMappingDsliteRecordsSent;
  }

  // port_mapping_dslite_records_sent_failure - computed: false, optional: true, required: false
  private _portMappingDsliteRecordsSentFailure?: number; 
  public get portMappingDsliteRecordsSentFailure() {
    return this.getNumberAttribute('port_mapping_dslite_records_sent_failure');
  }
  public set portMappingDsliteRecordsSentFailure(value: number) {
    this._portMappingDsliteRecordsSentFailure = value;
  }
  public resetPortMappingDsliteRecordsSentFailure() {
    this._portMappingDsliteRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portMappingDsliteRecordsSentFailureInput() {
    return this._portMappingDsliteRecordsSentFailure;
  }

  // port_mapping_nat44_records_sent - computed: false, optional: true, required: false
  private _portMappingNat44RecordsSent?: number; 
  public get portMappingNat44RecordsSent() {
    return this.getNumberAttribute('port_mapping_nat44_records_sent');
  }
  public set portMappingNat44RecordsSent(value: number) {
    this._portMappingNat44RecordsSent = value;
  }
  public resetPortMappingNat44RecordsSent() {
    this._portMappingNat44RecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portMappingNat44RecordsSentInput() {
    return this._portMappingNat44RecordsSent;
  }

  // port_mapping_nat44_records_sent_failure - computed: false, optional: true, required: false
  private _portMappingNat44RecordsSentFailure?: number; 
  public get portMappingNat44RecordsSentFailure() {
    return this.getNumberAttribute('port_mapping_nat44_records_sent_failure');
  }
  public set portMappingNat44RecordsSentFailure(value: number) {
    this._portMappingNat44RecordsSentFailure = value;
  }
  public resetPortMappingNat44RecordsSentFailure() {
    this._portMappingNat44RecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portMappingNat44RecordsSentFailureInput() {
    return this._portMappingNat44RecordsSentFailure;
  }

  // port_mapping_nat64_records_sent - computed: false, optional: true, required: false
  private _portMappingNat64RecordsSent?: number; 
  public get portMappingNat64RecordsSent() {
    return this.getNumberAttribute('port_mapping_nat64_records_sent');
  }
  public set portMappingNat64RecordsSent(value: number) {
    this._portMappingNat64RecordsSent = value;
  }
  public resetPortMappingNat64RecordsSent() {
    this._portMappingNat64RecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portMappingNat64RecordsSentInput() {
    return this._portMappingNat64RecordsSent;
  }

  // port_mapping_nat64_records_sent_failure - computed: false, optional: true, required: false
  private _portMappingNat64RecordsSentFailure?: number; 
  public get portMappingNat64RecordsSentFailure() {
    return this.getNumberAttribute('port_mapping_nat64_records_sent_failure');
  }
  public set portMappingNat64RecordsSentFailure(value: number) {
    this._portMappingNat64RecordsSentFailure = value;
  }
  public resetPortMappingNat64RecordsSentFailure() {
    this._portMappingNat64RecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portMappingNat64RecordsSentFailureInput() {
    return this._portMappingNat64RecordsSentFailure;
  }

  // reduced_logs_by_destination - computed: false, optional: true, required: false
  private _reducedLogsByDestination?: number; 
  public get reducedLogsByDestination() {
    return this.getNumberAttribute('reduced_logs_by_destination');
  }
  public set reducedLogsByDestination(value: number) {
    this._reducedLogsByDestination = value;
  }
  public resetReducedLogsByDestination() {
    this._reducedLogsByDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reducedLogsByDestinationInput() {
    return this._reducedLogsByDestination;
  }

  // session_event_dslite_records_sent - computed: false, optional: true, required: false
  private _sessionEventDsliteRecordsSent?: number; 
  public get sessionEventDsliteRecordsSent() {
    return this.getNumberAttribute('session_event_dslite_records_sent');
  }
  public set sessionEventDsliteRecordsSent(value: number) {
    this._sessionEventDsliteRecordsSent = value;
  }
  public resetSessionEventDsliteRecordsSent() {
    this._sessionEventDsliteRecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionEventDsliteRecordsSentInput() {
    return this._sessionEventDsliteRecordsSent;
  }

  // session_event_dslite_records_sent_failure - computed: false, optional: true, required: false
  private _sessionEventDsliteRecordsSentFailure?: number; 
  public get sessionEventDsliteRecordsSentFailure() {
    return this.getNumberAttribute('session_event_dslite_records_sent_failure');
  }
  public set sessionEventDsliteRecordsSentFailure(value: number) {
    this._sessionEventDsliteRecordsSentFailure = value;
  }
  public resetSessionEventDsliteRecordsSentFailure() {
    this._sessionEventDsliteRecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionEventDsliteRecordsSentFailureInput() {
    return this._sessionEventDsliteRecordsSentFailure;
  }

  // session_event_fw4_records_sent - computed: false, optional: true, required: false
  private _sessionEventFw4RecordsSent?: number; 
  public get sessionEventFw4RecordsSent() {
    return this.getNumberAttribute('session_event_fw4_records_sent');
  }
  public set sessionEventFw4RecordsSent(value: number) {
    this._sessionEventFw4RecordsSent = value;
  }
  public resetSessionEventFw4RecordsSent() {
    this._sessionEventFw4RecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionEventFw4RecordsSentInput() {
    return this._sessionEventFw4RecordsSent;
  }

  // session_event_fw4_records_sent_failure - computed: false, optional: true, required: false
  private _sessionEventFw4RecordsSentFailure?: number; 
  public get sessionEventFw4RecordsSentFailure() {
    return this.getNumberAttribute('session_event_fw4_records_sent_failure');
  }
  public set sessionEventFw4RecordsSentFailure(value: number) {
    this._sessionEventFw4RecordsSentFailure = value;
  }
  public resetSessionEventFw4RecordsSentFailure() {
    this._sessionEventFw4RecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionEventFw4RecordsSentFailureInput() {
    return this._sessionEventFw4RecordsSentFailure;
  }

  // session_event_fw6_records_sent - computed: false, optional: true, required: false
  private _sessionEventFw6RecordsSent?: number; 
  public get sessionEventFw6RecordsSent() {
    return this.getNumberAttribute('session_event_fw6_records_sent');
  }
  public set sessionEventFw6RecordsSent(value: number) {
    this._sessionEventFw6RecordsSent = value;
  }
  public resetSessionEventFw6RecordsSent() {
    this._sessionEventFw6RecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionEventFw6RecordsSentInput() {
    return this._sessionEventFw6RecordsSent;
  }

  // session_event_fw6_records_sent_failure - computed: false, optional: true, required: false
  private _sessionEventFw6RecordsSentFailure?: number; 
  public get sessionEventFw6RecordsSentFailure() {
    return this.getNumberAttribute('session_event_fw6_records_sent_failure');
  }
  public set sessionEventFw6RecordsSentFailure(value: number) {
    this._sessionEventFw6RecordsSentFailure = value;
  }
  public resetSessionEventFw6RecordsSentFailure() {
    this._sessionEventFw6RecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionEventFw6RecordsSentFailureInput() {
    return this._sessionEventFw6RecordsSentFailure;
  }

  // session_event_nat44_records_sent - computed: false, optional: true, required: false
  private _sessionEventNat44RecordsSent?: number; 
  public get sessionEventNat44RecordsSent() {
    return this.getNumberAttribute('session_event_nat44_records_sent');
  }
  public set sessionEventNat44RecordsSent(value: number) {
    this._sessionEventNat44RecordsSent = value;
  }
  public resetSessionEventNat44RecordsSent() {
    this._sessionEventNat44RecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionEventNat44RecordsSentInput() {
    return this._sessionEventNat44RecordsSent;
  }

  // session_event_nat44_records_sent_failure - computed: false, optional: true, required: false
  private _sessionEventNat44RecordsSentFailure?: number; 
  public get sessionEventNat44RecordsSentFailure() {
    return this.getNumberAttribute('session_event_nat44_records_sent_failure');
  }
  public set sessionEventNat44RecordsSentFailure(value: number) {
    this._sessionEventNat44RecordsSentFailure = value;
  }
  public resetSessionEventNat44RecordsSentFailure() {
    this._sessionEventNat44RecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionEventNat44RecordsSentFailureInput() {
    return this._sessionEventNat44RecordsSentFailure;
  }

  // session_event_nat64_records_sent - computed: false, optional: true, required: false
  private _sessionEventNat64RecordsSent?: number; 
  public get sessionEventNat64RecordsSent() {
    return this.getNumberAttribute('session_event_nat64_records_sent');
  }
  public set sessionEventNat64RecordsSent(value: number) {
    this._sessionEventNat64RecordsSent = value;
  }
  public resetSessionEventNat64RecordsSent() {
    this._sessionEventNat64RecordsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionEventNat64RecordsSentInput() {
    return this._sessionEventNat64RecordsSent;
  }

  // session_event_nat64_records_sent_failure - computed: false, optional: true, required: false
  private _sessionEventNat64RecordsSentFailure?: number; 
  public get sessionEventNat64RecordsSentFailure() {
    return this.getNumberAttribute('session_event_nat64_records_sent_failure');
  }
  public set sessionEventNat64RecordsSentFailure(value: number) {
    this._sessionEventNat64RecordsSentFailure = value;
  }
  public resetSessionEventNat64RecordsSentFailure() {
    this._sessionEventNat64RecordsSentFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionEventNat64RecordsSentFailureInput() {
    return this._sessionEventNat64RecordsSentFailure;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats thunder_netflow_monitor_stats}
*/
export class DataThunderNetflowMonitorStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_netflow_monitor_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderNetflowMonitorStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderNetflowMonitorStats to import
  * @param importFromId The id of the existing DataThunderNetflowMonitorStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderNetflowMonitorStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_netflow_monitor_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/netflow_monitor_stats thunder_netflow_monitor_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderNetflowMonitorStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderNetflowMonitorStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_netflow_monitor_stats',
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
    this._name = config.name;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderNetflowMonitorStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderNetflowMonitorStatsStats) {
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
      name: cdktf.stringToTerraform(this._name),
      stats: dataThunderNetflowMonitorStatsStatsToTerraform(this._stats.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderNetflowMonitorStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderNetflowMonitorStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
