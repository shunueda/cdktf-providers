// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for Custom FW4 Deny/Reset Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_deny_reset_event_fw4_records_sen VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_deny_reset_event_fw4_records_sen}
  */
  readonly customDenyResetEventFw4RecordsSen?: number;
  /**
  * Enable automatic packet-capture for Custom FW6 Deny/Reset Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_deny_reset_event_fw6_records_sen VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_deny_reset_event_fw6_records_sen}
  */
  readonly customDenyResetEventFw6RecordsSen?: number;
  /**
  * Enable automatic packet-capture for Custom FW iDDoS Entry Created Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_fw_iddos_entry_created_records_s VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_fw_iddos_entry_created_records_s}
  */
  readonly customFwIddosEntryCreatedRecordsS?: number;
  /**
  * Enable automatic packet-capture for Custom FW iDDoS Entry Deleted Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_fw_iddos_entry_deleted_records_s VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_fw_iddos_entry_deleted_records_s}
  */
  readonly customFwIddosEntryDeletedRecordsS?: number;
  /**
  * Enable automatic packet-capture for Custom FW Session Limit Exceeded Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_fw_sesn_limit_exceeded_records_s VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_fw_sesn_limit_exceeded_records_s}
  */
  readonly customFwSesnLimitExceededRecordsS?: number;
  /**
  * Enable automatic packet-capture for Custom GTP C Tunnel Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_gtp_c_tunnel_event_records_sent_ VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_gtp_c_tunnel_event_records_sent_}
  */
  readonly customGtpCTunnelEventRecordsSent?: number;
  /**
  * Enable automatic packet-capture for Custom GTP Deny Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_gtp_deny_event_records_sent_fail VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_gtp_deny_event_records_sent_fail}
  */
  readonly customGtpDenyEventRecordsSentFail?: number;
  /**
  * Enable automatic packet-capture for Custom GTP Info Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_gtp_info_event_records_sent_fail VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_gtp_info_event_records_sent_fail}
  */
  readonly customGtpInfoEventRecordsSentFail?: number;
  /**
  * Enable automatic packet-capture for Custom GTP U Tunnel Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_gtp_u_tunnel_event_records_sent_ VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_gtp_u_tunnel_event_records_sent_}
  */
  readonly customGtpUTunnelEventRecordsSent?: number;
  /**
  * Enable automatic packet-capture for Custom NAT iDDoS L3 Entry Created Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_nat_iddos_l3_entry_created_recor VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_nat_iddos_l3_entry_created_recor}
  */
  readonly customNatIddosL3EntryCreatedRecor?: number;
  /**
  * Enable automatic packet-capture for Custom NAT iDDoS L3 Entry Deleted Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_nat_iddos_l3_entry_deleted_recor VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_nat_iddos_l3_entry_deleted_recor}
  */
  readonly customNatIddosL3EntryDeletedRecor?: number;
  /**
  * Enable automatic packet-capture for Custom NAT iDDoS L4 Entry Created Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_nat_iddos_l4_entry_created_recor VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_nat_iddos_l4_entry_created_recor}
  */
  readonly customNatIddosL4EntryCreatedRecor?: number;
  /**
  * Enable automatic packet-capture for Custom NAT iDDoS L4 Entry Deleted Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_nat_iddos_l4_entry_deleted_recor VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_nat_iddos_l4_entry_deleted_recor}
  */
  readonly customNatIddosL4EntryDeletedRecor?: number;
  /**
  * Enable automatic packet-capture for Custom Dslite Port Batch Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_port_batching_dslite_creation_re VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_port_batching_dslite_creation_re}
  */
  readonly customPortBatchingDsliteCreationRe?: number;
  /**
  * Enable automatic packet-capture for Custom Dslite Port Batch Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_port_batching_dslite_deletion_re VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_port_batching_dslite_deletion_re}
  */
  readonly customPortBatchingDsliteDeletionRe?: number;
  /**
  * Enable automatic packet-capture for Custom Nat44 Port Batch Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_port_batching_nat44_creation_rec VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_port_batching_nat44_creation_rec}
  */
  readonly customPortBatchingNat44CreationRec?: number;
  /**
  * Enable automatic packet-capture for Custom Nat44 Port Batch Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_port_batching_nat44_deletion_rec VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_port_batching_nat44_deletion_rec}
  */
  readonly customPortBatchingNat44DeletionRec?: number;
  /**
  * Enable automatic packet-capture for Custom Nat64 Port Batch Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_port_batching_nat64_creation_rec VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_port_batching_nat64_creation_rec}
  */
  readonly customPortBatchingNat64CreationRec?: number;
  /**
  * Enable automatic packet-capture for Custom Nat64 Port Batch Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_port_batching_nat64_deletion_rec VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_port_batching_nat64_deletion_rec}
  */
  readonly customPortBatchingNat64DeletionRec?: number;
  /**
  * Enable automatic packet-capture for Custom Dslite Port Batch V2 Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_port_batching_v2_dslite_creation VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_port_batching_v2_dslite_creation}
  */
  readonly customPortBatchingV2DsliteCreation?: number;
  /**
  * Enable automatic packet-capture for Custom Dslite Port Batch V2 Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_port_batching_v2_dslite_deletion VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_port_batching_v2_dslite_deletion}
  */
  readonly customPortBatchingV2DsliteDeletion?: number;
  /**
  * Enable automatic packet-capture for Custom Nat44 Port Batch V2 Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_port_batching_v2_nat44_creation_ VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_port_batching_v2_nat44_creation_}
  */
  readonly customPortBatchingV2Nat44Creation?: number;
  /**
  * Enable automatic packet-capture for Custom Nat44 Port Batch V2 Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_port_batching_v2_nat44_deletion_ VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_port_batching_v2_nat44_deletion_}
  */
  readonly customPortBatchingV2Nat44Deletion?: number;
  /**
  * Enable automatic packet-capture for Custom Nat64 Port Batch V2 Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_port_batching_v2_nat64_creation_ VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_port_batching_v2_nat64_creation_}
  */
  readonly customPortBatchingV2Nat64Creation?: number;
  /**
  * Enable automatic packet-capture for Custom Nat64 Port Batch V2 Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_port_batching_v2_nat64_deletion_ VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_port_batching_v2_nat64_deletion_}
  */
  readonly customPortBatchingV2Nat64Deletion?: number;
  /**
  * Enable automatic packet-capture for Custom Dslite Port Map Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_port_mapping_dslite_creation_rec VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_port_mapping_dslite_creation_rec}
  */
  readonly customPortMappingDsliteCreationRec?: number;
  /**
  * Enable automatic packet-capture for Custom Dslite Port Map Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_port_mapping_dslite_deletion_rec VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_port_mapping_dslite_deletion_rec}
  */
  readonly customPortMappingDsliteDeletionRec?: number;
  /**
  * Enable automatic packet-capture for Custom Nat44 Port Map Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_port_mapping_nat44_creation_reco VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_port_mapping_nat44_creation_reco}
  */
  readonly customPortMappingNat44CreationReco?: number;
  /**
  * Enable automatic packet-capture for Custom Nat44 Port Map Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_port_mapping_nat44_deletion_reco VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_port_mapping_nat44_deletion_reco}
  */
  readonly customPortMappingNat44DeletionReco?: number;
  /**
  * Enable automatic packet-capture for Custom Nat64 Port Map Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_port_mapping_nat64_creation_reco VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_port_mapping_nat64_creation_reco}
  */
  readonly customPortMappingNat64CreationReco?: number;
  /**
  * Enable automatic packet-capture for Custom Nat64 Port Map Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_port_mapping_nat64_deletion_reco VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_port_mapping_nat64_deletion_reco}
  */
  readonly customPortMappingNat64DeletionReco?: number;
  /**
  * Enable automatic packet-capture for Custom Dslite Session Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_session_event_dslite_creation_re VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_session_event_dslite_creation_re}
  */
  readonly customSessionEventDsliteCreationRe?: number;
  /**
  * Enable automatic packet-capture for Custom Dslite Session Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_session_event_dslite_deletion_re VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_session_event_dslite_deletion_re}
  */
  readonly customSessionEventDsliteDeletionRe?: number;
  /**
  * Enable automatic packet-capture for Custom FW4 Session Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_session_event_fw4_creation_recor VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_session_event_fw4_creation_recor}
  */
  readonly customSessionEventFw4CreationRecor?: number;
  /**
  * Enable automatic packet-capture for Custom FW4 Session Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_session_event_fw4_deletion_recor VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_session_event_fw4_deletion_recor}
  */
  readonly customSessionEventFw4DeletionRecor?: number;
  /**
  * Enable automatic packet-capture for Custom FW6 Session Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_session_event_fw6_creation_recor VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_session_event_fw6_creation_recor}
  */
  readonly customSessionEventFw6CreationRecor?: number;
  /**
  * Enable automatic packet-capture for Custom FW6 Session Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_session_event_fw6_deletion_recor VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_session_event_fw6_deletion_recor}
  */
  readonly customSessionEventFw6DeletionRecor?: number;
  /**
  * Enable automatic packet-capture for Custom Nat44 Session Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_session_event_nat44_creation_rec VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_session_event_nat44_creation_rec}
  */
  readonly customSessionEventNat44CreationRec?: number;
  /**
  * Enable automatic packet-capture for Custom Nat44 Session Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_session_event_nat44_deletion_rec VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_session_event_nat44_deletion_rec}
  */
  readonly customSessionEventNat44DeletionRec?: number;
  /**
  * Enable automatic packet-capture for Custom Nat64 Session Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_session_event_nat64_creation_rec VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_session_event_nat64_creation_rec}
  */
  readonly customSessionEventNat64CreationRec?: number;
  /**
  * Enable automatic packet-capture for Custom Nat64 Session Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#custom_session_event_nat64_deletion_rec VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#custom_session_event_nat64_deletion_rec}
  */
  readonly customSessionEventNat64DeletionRec?: number;
  /**
  * Enable automatic packet-capture for Dslite Flow Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#dslite_records_sent_failure VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#dslite_records_sent_failure}
  */
  readonly dsliteRecordsSentFailure?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#id VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#name VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for NAT44 Flow Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#nat44_records_sent_failure VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#nat44_records_sent_failure}
  */
  readonly nat44RecordsSentFailure?: number;
  /**
  * Enable automatic packet-capture for NAT64 Flow Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#nat64_records_sent_failure VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#nat64_records_sent_failure}
  */
  readonly nat64RecordsSentFailure?: number;
  /**
  * Enable automatic packet-capture for Netflow v5 Ext Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#netflow_v5_ext_records_sent_failure VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#netflow_v5_ext_records_sent_failure}
  */
  readonly netflowV5ExtRecordsSentFailure?: number;
  /**
  * Enable automatic packet-capture for Netflow v5 Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#netflow_v5_records_sent_failure VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#netflow_v5_records_sent_failure}
  */
  readonly netflowV5RecordsSentFailure?: number;
  /**
  * Enable automatic packet-capture for Port Batching Dslite Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#port_batching_dslite_records_sent_failu VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#port_batching_dslite_records_sent_failu}
  */
  readonly portBatchingDsliteRecordsSentFailu?: number;
  /**
  * Enable automatic packet-capture for Port Batching Nat44 Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#port_batching_nat44_records_sent_failur VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#port_batching_nat44_records_sent_failur}
  */
  readonly portBatchingNat44RecordsSentFailur?: number;
  /**
  * Enable automatic packet-capture for Port Batching Nat64 Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#port_batching_nat64_records_sent_failur VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#port_batching_nat64_records_sent_failur}
  */
  readonly portBatchingNat64RecordsSentFailur?: number;
  /**
  * Enable automatic packet-capture for Port Batching V2 Dslite Records Falied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#port_batching_v2_dslite_records_sent_fa VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#port_batching_v2_dslite_records_sent_fa}
  */
  readonly portBatchingV2DsliteRecordsSentFa?: number;
  /**
  * Enable automatic packet-capture for Port Batching V2 Nat44 Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#port_batching_v2_nat44_records_sent_fai VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#port_batching_v2_nat44_records_sent_fai}
  */
  readonly portBatchingV2Nat44RecordsSentFai?: number;
  /**
  * Enable automatic packet-capture for Port Batching V2 Nat64 Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#port_batching_v2_nat64_records_sent_fai VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#port_batching_v2_nat64_records_sent_fai}
  */
  readonly portBatchingV2Nat64RecordsSentFai?: number;
  /**
  * Enable automatic packet-capture for Port Mapping Dslite Event Records failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#port_mapping_dslite_records_sent_failur VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#port_mapping_dslite_records_sent_failur}
  */
  readonly portMappingDsliteRecordsSentFailur?: number;
  /**
  * Enable automatic packet-capture for Port Mapping Nat44 Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#port_mapping_nat44_records_sent_failure VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#port_mapping_nat44_records_sent_failure}
  */
  readonly portMappingNat44RecordsSentFailure?: number;
  /**
  * Enable automatic packet-capture for Port Mapping Nat64 Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#port_mapping_nat64_records_sent_failure VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#port_mapping_nat64_records_sent_failure}
  */
  readonly portMappingNat64RecordsSentFailure?: number;
  /**
  * Enable automatic packet-capture for Dslite Session Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#session_event_dslite_records_sent_failu VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#session_event_dslite_records_sent_failu}
  */
  readonly sessionEventDsliteRecordsSentFailu?: number;
  /**
  * Enable automatic packet-capture for FW4 Session Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#session_event_fw4_records_sent_failure VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#session_event_fw4_records_sent_failure}
  */
  readonly sessionEventFw4RecordsSentFailure?: number;
  /**
  * Enable automatic packet-capture for FW6 Session Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#session_event_fw6_records_sent_failure VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#session_event_fw6_records_sent_failure}
  */
  readonly sessionEventFw6RecordsSentFailure?: number;
  /**
  * Enable automatic packet-capture for Nat44 Session Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#session_event_nat44_records_sent_failur VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#session_event_nat44_records_sent_failur}
  */
  readonly sessionEventNat44RecordsSentFailur?: number;
  /**
  * Enable automatic packet-capture for Nat64 Session Event Records Falied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#session_event_nat64_records_sent_failur VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#session_event_nat64_records_sent_failur}
  */
  readonly sessionEventNat64RecordsSentFailur?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#uuid VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc}
*/
export class VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_netflow_monitor_tmpl_trigger_stats_inc',
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
    this._customDenyResetEventFw4RecordsSen = config.customDenyResetEventFw4RecordsSen;
    this._customDenyResetEventFw6RecordsSen = config.customDenyResetEventFw6RecordsSen;
    this._customFwIddosEntryCreatedRecordsS = config.customFwIddosEntryCreatedRecordsS;
    this._customFwIddosEntryDeletedRecordsS = config.customFwIddosEntryDeletedRecordsS;
    this._customFwSesnLimitExceededRecordsS = config.customFwSesnLimitExceededRecordsS;
    this._customGtpCTunnelEventRecordsSent = config.customGtpCTunnelEventRecordsSent;
    this._customGtpDenyEventRecordsSentFail = config.customGtpDenyEventRecordsSentFail;
    this._customGtpInfoEventRecordsSentFail = config.customGtpInfoEventRecordsSentFail;
    this._customGtpUTunnelEventRecordsSent = config.customGtpUTunnelEventRecordsSent;
    this._customNatIddosL3EntryCreatedRecor = config.customNatIddosL3EntryCreatedRecor;
    this._customNatIddosL3EntryDeletedRecor = config.customNatIddosL3EntryDeletedRecor;
    this._customNatIddosL4EntryCreatedRecor = config.customNatIddosL4EntryCreatedRecor;
    this._customNatIddosL4EntryDeletedRecor = config.customNatIddosL4EntryDeletedRecor;
    this._customPortBatchingDsliteCreationRe = config.customPortBatchingDsliteCreationRe;
    this._customPortBatchingDsliteDeletionRe = config.customPortBatchingDsliteDeletionRe;
    this._customPortBatchingNat44CreationRec = config.customPortBatchingNat44CreationRec;
    this._customPortBatchingNat44DeletionRec = config.customPortBatchingNat44DeletionRec;
    this._customPortBatchingNat64CreationRec = config.customPortBatchingNat64CreationRec;
    this._customPortBatchingNat64DeletionRec = config.customPortBatchingNat64DeletionRec;
    this._customPortBatchingV2DsliteCreation = config.customPortBatchingV2DsliteCreation;
    this._customPortBatchingV2DsliteDeletion = config.customPortBatchingV2DsliteDeletion;
    this._customPortBatchingV2Nat44Creation = config.customPortBatchingV2Nat44Creation;
    this._customPortBatchingV2Nat44Deletion = config.customPortBatchingV2Nat44Deletion;
    this._customPortBatchingV2Nat64Creation = config.customPortBatchingV2Nat64Creation;
    this._customPortBatchingV2Nat64Deletion = config.customPortBatchingV2Nat64Deletion;
    this._customPortMappingDsliteCreationRec = config.customPortMappingDsliteCreationRec;
    this._customPortMappingDsliteDeletionRec = config.customPortMappingDsliteDeletionRec;
    this._customPortMappingNat44CreationReco = config.customPortMappingNat44CreationReco;
    this._customPortMappingNat44DeletionReco = config.customPortMappingNat44DeletionReco;
    this._customPortMappingNat64CreationReco = config.customPortMappingNat64CreationReco;
    this._customPortMappingNat64DeletionReco = config.customPortMappingNat64DeletionReco;
    this._customSessionEventDsliteCreationRe = config.customSessionEventDsliteCreationRe;
    this._customSessionEventDsliteDeletionRe = config.customSessionEventDsliteDeletionRe;
    this._customSessionEventFw4CreationRecor = config.customSessionEventFw4CreationRecor;
    this._customSessionEventFw4DeletionRecor = config.customSessionEventFw4DeletionRecor;
    this._customSessionEventFw6CreationRecor = config.customSessionEventFw6CreationRecor;
    this._customSessionEventFw6DeletionRecor = config.customSessionEventFw6DeletionRecor;
    this._customSessionEventNat44CreationRec = config.customSessionEventNat44CreationRec;
    this._customSessionEventNat44DeletionRec = config.customSessionEventNat44DeletionRec;
    this._customSessionEventNat64CreationRec = config.customSessionEventNat64CreationRec;
    this._customSessionEventNat64DeletionRec = config.customSessionEventNat64DeletionRec;
    this._dsliteRecordsSentFailure = config.dsliteRecordsSentFailure;
    this._id = config.id;
    this._name = config.name;
    this._nat44RecordsSentFailure = config.nat44RecordsSentFailure;
    this._nat64RecordsSentFailure = config.nat64RecordsSentFailure;
    this._netflowV5ExtRecordsSentFailure = config.netflowV5ExtRecordsSentFailure;
    this._netflowV5RecordsSentFailure = config.netflowV5RecordsSentFailure;
    this._portBatchingDsliteRecordsSentFailu = config.portBatchingDsliteRecordsSentFailu;
    this._portBatchingNat44RecordsSentFailur = config.portBatchingNat44RecordsSentFailur;
    this._portBatchingNat64RecordsSentFailur = config.portBatchingNat64RecordsSentFailur;
    this._portBatchingV2DsliteRecordsSentFa = config.portBatchingV2DsliteRecordsSentFa;
    this._portBatchingV2Nat44RecordsSentFai = config.portBatchingV2Nat44RecordsSentFai;
    this._portBatchingV2Nat64RecordsSentFai = config.portBatchingV2Nat64RecordsSentFai;
    this._portMappingDsliteRecordsSentFailur = config.portMappingDsliteRecordsSentFailur;
    this._portMappingNat44RecordsSentFailure = config.portMappingNat44RecordsSentFailure;
    this._portMappingNat64RecordsSentFailure = config.portMappingNat64RecordsSentFailure;
    this._sessionEventDsliteRecordsSentFailu = config.sessionEventDsliteRecordsSentFailu;
    this._sessionEventFw4RecordsSentFailure = config.sessionEventFw4RecordsSentFailure;
    this._sessionEventFw6RecordsSentFailure = config.sessionEventFw6RecordsSentFailure;
    this._sessionEventNat44RecordsSentFailur = config.sessionEventNat44RecordsSentFailur;
    this._sessionEventNat64RecordsSentFailur = config.sessionEventNat64RecordsSentFailur;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_deny_reset_event_fw4_records_sen - computed: false, optional: true, required: false
  private _customDenyResetEventFw4RecordsSen?: number; 
  public get customDenyResetEventFw4RecordsSen() {
    return this.getNumberAttribute('custom_deny_reset_event_fw4_records_sen');
  }
  public set customDenyResetEventFw4RecordsSen(value: number) {
    this._customDenyResetEventFw4RecordsSen = value;
  }
  public resetCustomDenyResetEventFw4RecordsSen() {
    this._customDenyResetEventFw4RecordsSen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDenyResetEventFw4RecordsSenInput() {
    return this._customDenyResetEventFw4RecordsSen;
  }

  // custom_deny_reset_event_fw6_records_sen - computed: false, optional: true, required: false
  private _customDenyResetEventFw6RecordsSen?: number; 
  public get customDenyResetEventFw6RecordsSen() {
    return this.getNumberAttribute('custom_deny_reset_event_fw6_records_sen');
  }
  public set customDenyResetEventFw6RecordsSen(value: number) {
    this._customDenyResetEventFw6RecordsSen = value;
  }
  public resetCustomDenyResetEventFw6RecordsSen() {
    this._customDenyResetEventFw6RecordsSen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDenyResetEventFw6RecordsSenInput() {
    return this._customDenyResetEventFw6RecordsSen;
  }

  // custom_fw_iddos_entry_created_records_s - computed: false, optional: true, required: false
  private _customFwIddosEntryCreatedRecordsS?: number; 
  public get customFwIddosEntryCreatedRecordsS() {
    return this.getNumberAttribute('custom_fw_iddos_entry_created_records_s');
  }
  public set customFwIddosEntryCreatedRecordsS(value: number) {
    this._customFwIddosEntryCreatedRecordsS = value;
  }
  public resetCustomFwIddosEntryCreatedRecordsS() {
    this._customFwIddosEntryCreatedRecordsS = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFwIddosEntryCreatedRecordsSInput() {
    return this._customFwIddosEntryCreatedRecordsS;
  }

  // custom_fw_iddos_entry_deleted_records_s - computed: false, optional: true, required: false
  private _customFwIddosEntryDeletedRecordsS?: number; 
  public get customFwIddosEntryDeletedRecordsS() {
    return this.getNumberAttribute('custom_fw_iddos_entry_deleted_records_s');
  }
  public set customFwIddosEntryDeletedRecordsS(value: number) {
    this._customFwIddosEntryDeletedRecordsS = value;
  }
  public resetCustomFwIddosEntryDeletedRecordsS() {
    this._customFwIddosEntryDeletedRecordsS = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFwIddosEntryDeletedRecordsSInput() {
    return this._customFwIddosEntryDeletedRecordsS;
  }

  // custom_fw_sesn_limit_exceeded_records_s - computed: false, optional: true, required: false
  private _customFwSesnLimitExceededRecordsS?: number; 
  public get customFwSesnLimitExceededRecordsS() {
    return this.getNumberAttribute('custom_fw_sesn_limit_exceeded_records_s');
  }
  public set customFwSesnLimitExceededRecordsS(value: number) {
    this._customFwSesnLimitExceededRecordsS = value;
  }
  public resetCustomFwSesnLimitExceededRecordsS() {
    this._customFwSesnLimitExceededRecordsS = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customFwSesnLimitExceededRecordsSInput() {
    return this._customFwSesnLimitExceededRecordsS;
  }

  // custom_gtp_c_tunnel_event_records_sent_ - computed: false, optional: true, required: false
  private _customGtpCTunnelEventRecordsSent?: number; 
  public get customGtpCTunnelEventRecordsSent() {
    return this.getNumberAttribute('custom_gtp_c_tunnel_event_records_sent_');
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

  // custom_gtp_deny_event_records_sent_fail - computed: false, optional: true, required: false
  private _customGtpDenyEventRecordsSentFail?: number; 
  public get customGtpDenyEventRecordsSentFail() {
    return this.getNumberAttribute('custom_gtp_deny_event_records_sent_fail');
  }
  public set customGtpDenyEventRecordsSentFail(value: number) {
    this._customGtpDenyEventRecordsSentFail = value;
  }
  public resetCustomGtpDenyEventRecordsSentFail() {
    this._customGtpDenyEventRecordsSentFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customGtpDenyEventRecordsSentFailInput() {
    return this._customGtpDenyEventRecordsSentFail;
  }

  // custom_gtp_info_event_records_sent_fail - computed: false, optional: true, required: false
  private _customGtpInfoEventRecordsSentFail?: number; 
  public get customGtpInfoEventRecordsSentFail() {
    return this.getNumberAttribute('custom_gtp_info_event_records_sent_fail');
  }
  public set customGtpInfoEventRecordsSentFail(value: number) {
    this._customGtpInfoEventRecordsSentFail = value;
  }
  public resetCustomGtpInfoEventRecordsSentFail() {
    this._customGtpInfoEventRecordsSentFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customGtpInfoEventRecordsSentFailInput() {
    return this._customGtpInfoEventRecordsSentFail;
  }

  // custom_gtp_u_tunnel_event_records_sent_ - computed: false, optional: true, required: false
  private _customGtpUTunnelEventRecordsSent?: number; 
  public get customGtpUTunnelEventRecordsSent() {
    return this.getNumberAttribute('custom_gtp_u_tunnel_event_records_sent_');
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

  // custom_nat_iddos_l3_entry_created_recor - computed: false, optional: true, required: false
  private _customNatIddosL3EntryCreatedRecor?: number; 
  public get customNatIddosL3EntryCreatedRecor() {
    return this.getNumberAttribute('custom_nat_iddos_l3_entry_created_recor');
  }
  public set customNatIddosL3EntryCreatedRecor(value: number) {
    this._customNatIddosL3EntryCreatedRecor = value;
  }
  public resetCustomNatIddosL3EntryCreatedRecor() {
    this._customNatIddosL3EntryCreatedRecor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNatIddosL3EntryCreatedRecorInput() {
    return this._customNatIddosL3EntryCreatedRecor;
  }

  // custom_nat_iddos_l3_entry_deleted_recor - computed: false, optional: true, required: false
  private _customNatIddosL3EntryDeletedRecor?: number; 
  public get customNatIddosL3EntryDeletedRecor() {
    return this.getNumberAttribute('custom_nat_iddos_l3_entry_deleted_recor');
  }
  public set customNatIddosL3EntryDeletedRecor(value: number) {
    this._customNatIddosL3EntryDeletedRecor = value;
  }
  public resetCustomNatIddosL3EntryDeletedRecor() {
    this._customNatIddosL3EntryDeletedRecor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNatIddosL3EntryDeletedRecorInput() {
    return this._customNatIddosL3EntryDeletedRecor;
  }

  // custom_nat_iddos_l4_entry_created_recor - computed: false, optional: true, required: false
  private _customNatIddosL4EntryCreatedRecor?: number; 
  public get customNatIddosL4EntryCreatedRecor() {
    return this.getNumberAttribute('custom_nat_iddos_l4_entry_created_recor');
  }
  public set customNatIddosL4EntryCreatedRecor(value: number) {
    this._customNatIddosL4EntryCreatedRecor = value;
  }
  public resetCustomNatIddosL4EntryCreatedRecor() {
    this._customNatIddosL4EntryCreatedRecor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNatIddosL4EntryCreatedRecorInput() {
    return this._customNatIddosL4EntryCreatedRecor;
  }

  // custom_nat_iddos_l4_entry_deleted_recor - computed: false, optional: true, required: false
  private _customNatIddosL4EntryDeletedRecor?: number; 
  public get customNatIddosL4EntryDeletedRecor() {
    return this.getNumberAttribute('custom_nat_iddos_l4_entry_deleted_recor');
  }
  public set customNatIddosL4EntryDeletedRecor(value: number) {
    this._customNatIddosL4EntryDeletedRecor = value;
  }
  public resetCustomNatIddosL4EntryDeletedRecor() {
    this._customNatIddosL4EntryDeletedRecor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNatIddosL4EntryDeletedRecorInput() {
    return this._customNatIddosL4EntryDeletedRecor;
  }

  // custom_port_batching_dslite_creation_re - computed: false, optional: true, required: false
  private _customPortBatchingDsliteCreationRe?: number; 
  public get customPortBatchingDsliteCreationRe() {
    return this.getNumberAttribute('custom_port_batching_dslite_creation_re');
  }
  public set customPortBatchingDsliteCreationRe(value: number) {
    this._customPortBatchingDsliteCreationRe = value;
  }
  public resetCustomPortBatchingDsliteCreationRe() {
    this._customPortBatchingDsliteCreationRe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingDsliteCreationReInput() {
    return this._customPortBatchingDsliteCreationRe;
  }

  // custom_port_batching_dslite_deletion_re - computed: false, optional: true, required: false
  private _customPortBatchingDsliteDeletionRe?: number; 
  public get customPortBatchingDsliteDeletionRe() {
    return this.getNumberAttribute('custom_port_batching_dslite_deletion_re');
  }
  public set customPortBatchingDsliteDeletionRe(value: number) {
    this._customPortBatchingDsliteDeletionRe = value;
  }
  public resetCustomPortBatchingDsliteDeletionRe() {
    this._customPortBatchingDsliteDeletionRe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingDsliteDeletionReInput() {
    return this._customPortBatchingDsliteDeletionRe;
  }

  // custom_port_batching_nat44_creation_rec - computed: false, optional: true, required: false
  private _customPortBatchingNat44CreationRec?: number; 
  public get customPortBatchingNat44CreationRec() {
    return this.getNumberAttribute('custom_port_batching_nat44_creation_rec');
  }
  public set customPortBatchingNat44CreationRec(value: number) {
    this._customPortBatchingNat44CreationRec = value;
  }
  public resetCustomPortBatchingNat44CreationRec() {
    this._customPortBatchingNat44CreationRec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingNat44CreationRecInput() {
    return this._customPortBatchingNat44CreationRec;
  }

  // custom_port_batching_nat44_deletion_rec - computed: false, optional: true, required: false
  private _customPortBatchingNat44DeletionRec?: number; 
  public get customPortBatchingNat44DeletionRec() {
    return this.getNumberAttribute('custom_port_batching_nat44_deletion_rec');
  }
  public set customPortBatchingNat44DeletionRec(value: number) {
    this._customPortBatchingNat44DeletionRec = value;
  }
  public resetCustomPortBatchingNat44DeletionRec() {
    this._customPortBatchingNat44DeletionRec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingNat44DeletionRecInput() {
    return this._customPortBatchingNat44DeletionRec;
  }

  // custom_port_batching_nat64_creation_rec - computed: false, optional: true, required: false
  private _customPortBatchingNat64CreationRec?: number; 
  public get customPortBatchingNat64CreationRec() {
    return this.getNumberAttribute('custom_port_batching_nat64_creation_rec');
  }
  public set customPortBatchingNat64CreationRec(value: number) {
    this._customPortBatchingNat64CreationRec = value;
  }
  public resetCustomPortBatchingNat64CreationRec() {
    this._customPortBatchingNat64CreationRec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingNat64CreationRecInput() {
    return this._customPortBatchingNat64CreationRec;
  }

  // custom_port_batching_nat64_deletion_rec - computed: false, optional: true, required: false
  private _customPortBatchingNat64DeletionRec?: number; 
  public get customPortBatchingNat64DeletionRec() {
    return this.getNumberAttribute('custom_port_batching_nat64_deletion_rec');
  }
  public set customPortBatchingNat64DeletionRec(value: number) {
    this._customPortBatchingNat64DeletionRec = value;
  }
  public resetCustomPortBatchingNat64DeletionRec() {
    this._customPortBatchingNat64DeletionRec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingNat64DeletionRecInput() {
    return this._customPortBatchingNat64DeletionRec;
  }

  // custom_port_batching_v2_dslite_creation - computed: false, optional: true, required: false
  private _customPortBatchingV2DsliteCreation?: number; 
  public get customPortBatchingV2DsliteCreation() {
    return this.getNumberAttribute('custom_port_batching_v2_dslite_creation');
  }
  public set customPortBatchingV2DsliteCreation(value: number) {
    this._customPortBatchingV2DsliteCreation = value;
  }
  public resetCustomPortBatchingV2DsliteCreation() {
    this._customPortBatchingV2DsliteCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingV2DsliteCreationInput() {
    return this._customPortBatchingV2DsliteCreation;
  }

  // custom_port_batching_v2_dslite_deletion - computed: false, optional: true, required: false
  private _customPortBatchingV2DsliteDeletion?: number; 
  public get customPortBatchingV2DsliteDeletion() {
    return this.getNumberAttribute('custom_port_batching_v2_dslite_deletion');
  }
  public set customPortBatchingV2DsliteDeletion(value: number) {
    this._customPortBatchingV2DsliteDeletion = value;
  }
  public resetCustomPortBatchingV2DsliteDeletion() {
    this._customPortBatchingV2DsliteDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingV2DsliteDeletionInput() {
    return this._customPortBatchingV2DsliteDeletion;
  }

  // custom_port_batching_v2_nat44_creation_ - computed: false, optional: true, required: false
  private _customPortBatchingV2Nat44Creation?: number; 
  public get customPortBatchingV2Nat44Creation() {
    return this.getNumberAttribute('custom_port_batching_v2_nat44_creation_');
  }
  public set customPortBatchingV2Nat44Creation(value: number) {
    this._customPortBatchingV2Nat44Creation = value;
  }
  public resetCustomPortBatchingV2Nat44Creation() {
    this._customPortBatchingV2Nat44Creation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingV2Nat44CreationInput() {
    return this._customPortBatchingV2Nat44Creation;
  }

  // custom_port_batching_v2_nat44_deletion_ - computed: false, optional: true, required: false
  private _customPortBatchingV2Nat44Deletion?: number; 
  public get customPortBatchingV2Nat44Deletion() {
    return this.getNumberAttribute('custom_port_batching_v2_nat44_deletion_');
  }
  public set customPortBatchingV2Nat44Deletion(value: number) {
    this._customPortBatchingV2Nat44Deletion = value;
  }
  public resetCustomPortBatchingV2Nat44Deletion() {
    this._customPortBatchingV2Nat44Deletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingV2Nat44DeletionInput() {
    return this._customPortBatchingV2Nat44Deletion;
  }

  // custom_port_batching_v2_nat64_creation_ - computed: false, optional: true, required: false
  private _customPortBatchingV2Nat64Creation?: number; 
  public get customPortBatchingV2Nat64Creation() {
    return this.getNumberAttribute('custom_port_batching_v2_nat64_creation_');
  }
  public set customPortBatchingV2Nat64Creation(value: number) {
    this._customPortBatchingV2Nat64Creation = value;
  }
  public resetCustomPortBatchingV2Nat64Creation() {
    this._customPortBatchingV2Nat64Creation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingV2Nat64CreationInput() {
    return this._customPortBatchingV2Nat64Creation;
  }

  // custom_port_batching_v2_nat64_deletion_ - computed: false, optional: true, required: false
  private _customPortBatchingV2Nat64Deletion?: number; 
  public get customPortBatchingV2Nat64Deletion() {
    return this.getNumberAttribute('custom_port_batching_v2_nat64_deletion_');
  }
  public set customPortBatchingV2Nat64Deletion(value: number) {
    this._customPortBatchingV2Nat64Deletion = value;
  }
  public resetCustomPortBatchingV2Nat64Deletion() {
    this._customPortBatchingV2Nat64Deletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortBatchingV2Nat64DeletionInput() {
    return this._customPortBatchingV2Nat64Deletion;
  }

  // custom_port_mapping_dslite_creation_rec - computed: false, optional: true, required: false
  private _customPortMappingDsliteCreationRec?: number; 
  public get customPortMappingDsliteCreationRec() {
    return this.getNumberAttribute('custom_port_mapping_dslite_creation_rec');
  }
  public set customPortMappingDsliteCreationRec(value: number) {
    this._customPortMappingDsliteCreationRec = value;
  }
  public resetCustomPortMappingDsliteCreationRec() {
    this._customPortMappingDsliteCreationRec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortMappingDsliteCreationRecInput() {
    return this._customPortMappingDsliteCreationRec;
  }

  // custom_port_mapping_dslite_deletion_rec - computed: false, optional: true, required: false
  private _customPortMappingDsliteDeletionRec?: number; 
  public get customPortMappingDsliteDeletionRec() {
    return this.getNumberAttribute('custom_port_mapping_dslite_deletion_rec');
  }
  public set customPortMappingDsliteDeletionRec(value: number) {
    this._customPortMappingDsliteDeletionRec = value;
  }
  public resetCustomPortMappingDsliteDeletionRec() {
    this._customPortMappingDsliteDeletionRec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortMappingDsliteDeletionRecInput() {
    return this._customPortMappingDsliteDeletionRec;
  }

  // custom_port_mapping_nat44_creation_reco - computed: false, optional: true, required: false
  private _customPortMappingNat44CreationReco?: number; 
  public get customPortMappingNat44CreationReco() {
    return this.getNumberAttribute('custom_port_mapping_nat44_creation_reco');
  }
  public set customPortMappingNat44CreationReco(value: number) {
    this._customPortMappingNat44CreationReco = value;
  }
  public resetCustomPortMappingNat44CreationReco() {
    this._customPortMappingNat44CreationReco = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortMappingNat44CreationRecoInput() {
    return this._customPortMappingNat44CreationReco;
  }

  // custom_port_mapping_nat44_deletion_reco - computed: false, optional: true, required: false
  private _customPortMappingNat44DeletionReco?: number; 
  public get customPortMappingNat44DeletionReco() {
    return this.getNumberAttribute('custom_port_mapping_nat44_deletion_reco');
  }
  public set customPortMappingNat44DeletionReco(value: number) {
    this._customPortMappingNat44DeletionReco = value;
  }
  public resetCustomPortMappingNat44DeletionReco() {
    this._customPortMappingNat44DeletionReco = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortMappingNat44DeletionRecoInput() {
    return this._customPortMappingNat44DeletionReco;
  }

  // custom_port_mapping_nat64_creation_reco - computed: false, optional: true, required: false
  private _customPortMappingNat64CreationReco?: number; 
  public get customPortMappingNat64CreationReco() {
    return this.getNumberAttribute('custom_port_mapping_nat64_creation_reco');
  }
  public set customPortMappingNat64CreationReco(value: number) {
    this._customPortMappingNat64CreationReco = value;
  }
  public resetCustomPortMappingNat64CreationReco() {
    this._customPortMappingNat64CreationReco = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortMappingNat64CreationRecoInput() {
    return this._customPortMappingNat64CreationReco;
  }

  // custom_port_mapping_nat64_deletion_reco - computed: false, optional: true, required: false
  private _customPortMappingNat64DeletionReco?: number; 
  public get customPortMappingNat64DeletionReco() {
    return this.getNumberAttribute('custom_port_mapping_nat64_deletion_reco');
  }
  public set customPortMappingNat64DeletionReco(value: number) {
    this._customPortMappingNat64DeletionReco = value;
  }
  public resetCustomPortMappingNat64DeletionReco() {
    this._customPortMappingNat64DeletionReco = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPortMappingNat64DeletionRecoInput() {
    return this._customPortMappingNat64DeletionReco;
  }

  // custom_session_event_dslite_creation_re - computed: false, optional: true, required: false
  private _customSessionEventDsliteCreationRe?: number; 
  public get customSessionEventDsliteCreationRe() {
    return this.getNumberAttribute('custom_session_event_dslite_creation_re');
  }
  public set customSessionEventDsliteCreationRe(value: number) {
    this._customSessionEventDsliteCreationRe = value;
  }
  public resetCustomSessionEventDsliteCreationRe() {
    this._customSessionEventDsliteCreationRe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionEventDsliteCreationReInput() {
    return this._customSessionEventDsliteCreationRe;
  }

  // custom_session_event_dslite_deletion_re - computed: false, optional: true, required: false
  private _customSessionEventDsliteDeletionRe?: number; 
  public get customSessionEventDsliteDeletionRe() {
    return this.getNumberAttribute('custom_session_event_dslite_deletion_re');
  }
  public set customSessionEventDsliteDeletionRe(value: number) {
    this._customSessionEventDsliteDeletionRe = value;
  }
  public resetCustomSessionEventDsliteDeletionRe() {
    this._customSessionEventDsliteDeletionRe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionEventDsliteDeletionReInput() {
    return this._customSessionEventDsliteDeletionRe;
  }

  // custom_session_event_fw4_creation_recor - computed: false, optional: true, required: false
  private _customSessionEventFw4CreationRecor?: number; 
  public get customSessionEventFw4CreationRecor() {
    return this.getNumberAttribute('custom_session_event_fw4_creation_recor');
  }
  public set customSessionEventFw4CreationRecor(value: number) {
    this._customSessionEventFw4CreationRecor = value;
  }
  public resetCustomSessionEventFw4CreationRecor() {
    this._customSessionEventFw4CreationRecor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionEventFw4CreationRecorInput() {
    return this._customSessionEventFw4CreationRecor;
  }

  // custom_session_event_fw4_deletion_recor - computed: false, optional: true, required: false
  private _customSessionEventFw4DeletionRecor?: number; 
  public get customSessionEventFw4DeletionRecor() {
    return this.getNumberAttribute('custom_session_event_fw4_deletion_recor');
  }
  public set customSessionEventFw4DeletionRecor(value: number) {
    this._customSessionEventFw4DeletionRecor = value;
  }
  public resetCustomSessionEventFw4DeletionRecor() {
    this._customSessionEventFw4DeletionRecor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionEventFw4DeletionRecorInput() {
    return this._customSessionEventFw4DeletionRecor;
  }

  // custom_session_event_fw6_creation_recor - computed: false, optional: true, required: false
  private _customSessionEventFw6CreationRecor?: number; 
  public get customSessionEventFw6CreationRecor() {
    return this.getNumberAttribute('custom_session_event_fw6_creation_recor');
  }
  public set customSessionEventFw6CreationRecor(value: number) {
    this._customSessionEventFw6CreationRecor = value;
  }
  public resetCustomSessionEventFw6CreationRecor() {
    this._customSessionEventFw6CreationRecor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionEventFw6CreationRecorInput() {
    return this._customSessionEventFw6CreationRecor;
  }

  // custom_session_event_fw6_deletion_recor - computed: false, optional: true, required: false
  private _customSessionEventFw6DeletionRecor?: number; 
  public get customSessionEventFw6DeletionRecor() {
    return this.getNumberAttribute('custom_session_event_fw6_deletion_recor');
  }
  public set customSessionEventFw6DeletionRecor(value: number) {
    this._customSessionEventFw6DeletionRecor = value;
  }
  public resetCustomSessionEventFw6DeletionRecor() {
    this._customSessionEventFw6DeletionRecor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionEventFw6DeletionRecorInput() {
    return this._customSessionEventFw6DeletionRecor;
  }

  // custom_session_event_nat44_creation_rec - computed: false, optional: true, required: false
  private _customSessionEventNat44CreationRec?: number; 
  public get customSessionEventNat44CreationRec() {
    return this.getNumberAttribute('custom_session_event_nat44_creation_rec');
  }
  public set customSessionEventNat44CreationRec(value: number) {
    this._customSessionEventNat44CreationRec = value;
  }
  public resetCustomSessionEventNat44CreationRec() {
    this._customSessionEventNat44CreationRec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionEventNat44CreationRecInput() {
    return this._customSessionEventNat44CreationRec;
  }

  // custom_session_event_nat44_deletion_rec - computed: false, optional: true, required: false
  private _customSessionEventNat44DeletionRec?: number; 
  public get customSessionEventNat44DeletionRec() {
    return this.getNumberAttribute('custom_session_event_nat44_deletion_rec');
  }
  public set customSessionEventNat44DeletionRec(value: number) {
    this._customSessionEventNat44DeletionRec = value;
  }
  public resetCustomSessionEventNat44DeletionRec() {
    this._customSessionEventNat44DeletionRec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionEventNat44DeletionRecInput() {
    return this._customSessionEventNat44DeletionRec;
  }

  // custom_session_event_nat64_creation_rec - computed: false, optional: true, required: false
  private _customSessionEventNat64CreationRec?: number; 
  public get customSessionEventNat64CreationRec() {
    return this.getNumberAttribute('custom_session_event_nat64_creation_rec');
  }
  public set customSessionEventNat64CreationRec(value: number) {
    this._customSessionEventNat64CreationRec = value;
  }
  public resetCustomSessionEventNat64CreationRec() {
    this._customSessionEventNat64CreationRec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionEventNat64CreationRecInput() {
    return this._customSessionEventNat64CreationRec;
  }

  // custom_session_event_nat64_deletion_rec - computed: false, optional: true, required: false
  private _customSessionEventNat64DeletionRec?: number; 
  public get customSessionEventNat64DeletionRec() {
    return this.getNumberAttribute('custom_session_event_nat64_deletion_rec');
  }
  public set customSessionEventNat64DeletionRec(value: number) {
    this._customSessionEventNat64DeletionRec = value;
  }
  public resetCustomSessionEventNat64DeletionRec() {
    this._customSessionEventNat64DeletionRec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customSessionEventNat64DeletionRecInput() {
    return this._customSessionEventNat64DeletionRec;
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

  // port_batching_dslite_records_sent_failu - computed: false, optional: true, required: false
  private _portBatchingDsliteRecordsSentFailu?: number; 
  public get portBatchingDsliteRecordsSentFailu() {
    return this.getNumberAttribute('port_batching_dslite_records_sent_failu');
  }
  public set portBatchingDsliteRecordsSentFailu(value: number) {
    this._portBatchingDsliteRecordsSentFailu = value;
  }
  public resetPortBatchingDsliteRecordsSentFailu() {
    this._portBatchingDsliteRecordsSentFailu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchingDsliteRecordsSentFailuInput() {
    return this._portBatchingDsliteRecordsSentFailu;
  }

  // port_batching_nat44_records_sent_failur - computed: false, optional: true, required: false
  private _portBatchingNat44RecordsSentFailur?: number; 
  public get portBatchingNat44RecordsSentFailur() {
    return this.getNumberAttribute('port_batching_nat44_records_sent_failur');
  }
  public set portBatchingNat44RecordsSentFailur(value: number) {
    this._portBatchingNat44RecordsSentFailur = value;
  }
  public resetPortBatchingNat44RecordsSentFailur() {
    this._portBatchingNat44RecordsSentFailur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchingNat44RecordsSentFailurInput() {
    return this._portBatchingNat44RecordsSentFailur;
  }

  // port_batching_nat64_records_sent_failur - computed: false, optional: true, required: false
  private _portBatchingNat64RecordsSentFailur?: number; 
  public get portBatchingNat64RecordsSentFailur() {
    return this.getNumberAttribute('port_batching_nat64_records_sent_failur');
  }
  public set portBatchingNat64RecordsSentFailur(value: number) {
    this._portBatchingNat64RecordsSentFailur = value;
  }
  public resetPortBatchingNat64RecordsSentFailur() {
    this._portBatchingNat64RecordsSentFailur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchingNat64RecordsSentFailurInput() {
    return this._portBatchingNat64RecordsSentFailur;
  }

  // port_batching_v2_dslite_records_sent_fa - computed: false, optional: true, required: false
  private _portBatchingV2DsliteRecordsSentFa?: number; 
  public get portBatchingV2DsliteRecordsSentFa() {
    return this.getNumberAttribute('port_batching_v2_dslite_records_sent_fa');
  }
  public set portBatchingV2DsliteRecordsSentFa(value: number) {
    this._portBatchingV2DsliteRecordsSentFa = value;
  }
  public resetPortBatchingV2DsliteRecordsSentFa() {
    this._portBatchingV2DsliteRecordsSentFa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchingV2DsliteRecordsSentFaInput() {
    return this._portBatchingV2DsliteRecordsSentFa;
  }

  // port_batching_v2_nat44_records_sent_fai - computed: false, optional: true, required: false
  private _portBatchingV2Nat44RecordsSentFai?: number; 
  public get portBatchingV2Nat44RecordsSentFai() {
    return this.getNumberAttribute('port_batching_v2_nat44_records_sent_fai');
  }
  public set portBatchingV2Nat44RecordsSentFai(value: number) {
    this._portBatchingV2Nat44RecordsSentFai = value;
  }
  public resetPortBatchingV2Nat44RecordsSentFai() {
    this._portBatchingV2Nat44RecordsSentFai = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchingV2Nat44RecordsSentFaiInput() {
    return this._portBatchingV2Nat44RecordsSentFai;
  }

  // port_batching_v2_nat64_records_sent_fai - computed: false, optional: true, required: false
  private _portBatchingV2Nat64RecordsSentFai?: number; 
  public get portBatchingV2Nat64RecordsSentFai() {
    return this.getNumberAttribute('port_batching_v2_nat64_records_sent_fai');
  }
  public set portBatchingV2Nat64RecordsSentFai(value: number) {
    this._portBatchingV2Nat64RecordsSentFai = value;
  }
  public resetPortBatchingV2Nat64RecordsSentFai() {
    this._portBatchingV2Nat64RecordsSentFai = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBatchingV2Nat64RecordsSentFaiInput() {
    return this._portBatchingV2Nat64RecordsSentFai;
  }

  // port_mapping_dslite_records_sent_failur - computed: false, optional: true, required: false
  private _portMappingDsliteRecordsSentFailur?: number; 
  public get portMappingDsliteRecordsSentFailur() {
    return this.getNumberAttribute('port_mapping_dslite_records_sent_failur');
  }
  public set portMappingDsliteRecordsSentFailur(value: number) {
    this._portMappingDsliteRecordsSentFailur = value;
  }
  public resetPortMappingDsliteRecordsSentFailur() {
    this._portMappingDsliteRecordsSentFailur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portMappingDsliteRecordsSentFailurInput() {
    return this._portMappingDsliteRecordsSentFailur;
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

  // session_event_dslite_records_sent_failu - computed: false, optional: true, required: false
  private _sessionEventDsliteRecordsSentFailu?: number; 
  public get sessionEventDsliteRecordsSentFailu() {
    return this.getNumberAttribute('session_event_dslite_records_sent_failu');
  }
  public set sessionEventDsliteRecordsSentFailu(value: number) {
    this._sessionEventDsliteRecordsSentFailu = value;
  }
  public resetSessionEventDsliteRecordsSentFailu() {
    this._sessionEventDsliteRecordsSentFailu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionEventDsliteRecordsSentFailuInput() {
    return this._sessionEventDsliteRecordsSentFailu;
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

  // session_event_nat44_records_sent_failur - computed: false, optional: true, required: false
  private _sessionEventNat44RecordsSentFailur?: number; 
  public get sessionEventNat44RecordsSentFailur() {
    return this.getNumberAttribute('session_event_nat44_records_sent_failur');
  }
  public set sessionEventNat44RecordsSentFailur(value: number) {
    this._sessionEventNat44RecordsSentFailur = value;
  }
  public resetSessionEventNat44RecordsSentFailur() {
    this._sessionEventNat44RecordsSentFailur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionEventNat44RecordsSentFailurInput() {
    return this._sessionEventNat44RecordsSentFailur;
  }

  // session_event_nat64_records_sent_failur - computed: false, optional: true, required: false
  private _sessionEventNat64RecordsSentFailur?: number; 
  public get sessionEventNat64RecordsSentFailur() {
    return this.getNumberAttribute('session_event_nat64_records_sent_failur');
  }
  public set sessionEventNat64RecordsSentFailur(value: number) {
    this._sessionEventNat64RecordsSentFailur = value;
  }
  public resetSessionEventNat64RecordsSentFailur() {
    this._sessionEventNat64RecordsSentFailur = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionEventNat64RecordsSentFailurInput() {
    return this._sessionEventNat64RecordsSentFailur;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_deny_reset_event_fw4_records_sen: cdktf.numberToTerraform(this._customDenyResetEventFw4RecordsSen),
      custom_deny_reset_event_fw6_records_sen: cdktf.numberToTerraform(this._customDenyResetEventFw6RecordsSen),
      custom_fw_iddos_entry_created_records_s: cdktf.numberToTerraform(this._customFwIddosEntryCreatedRecordsS),
      custom_fw_iddos_entry_deleted_records_s: cdktf.numberToTerraform(this._customFwIddosEntryDeletedRecordsS),
      custom_fw_sesn_limit_exceeded_records_s: cdktf.numberToTerraform(this._customFwSesnLimitExceededRecordsS),
      custom_gtp_c_tunnel_event_records_sent_: cdktf.numberToTerraform(this._customGtpCTunnelEventRecordsSent),
      custom_gtp_deny_event_records_sent_fail: cdktf.numberToTerraform(this._customGtpDenyEventRecordsSentFail),
      custom_gtp_info_event_records_sent_fail: cdktf.numberToTerraform(this._customGtpInfoEventRecordsSentFail),
      custom_gtp_u_tunnel_event_records_sent_: cdktf.numberToTerraform(this._customGtpUTunnelEventRecordsSent),
      custom_nat_iddos_l3_entry_created_recor: cdktf.numberToTerraform(this._customNatIddosL3EntryCreatedRecor),
      custom_nat_iddos_l3_entry_deleted_recor: cdktf.numberToTerraform(this._customNatIddosL3EntryDeletedRecor),
      custom_nat_iddos_l4_entry_created_recor: cdktf.numberToTerraform(this._customNatIddosL4EntryCreatedRecor),
      custom_nat_iddos_l4_entry_deleted_recor: cdktf.numberToTerraform(this._customNatIddosL4EntryDeletedRecor),
      custom_port_batching_dslite_creation_re: cdktf.numberToTerraform(this._customPortBatchingDsliteCreationRe),
      custom_port_batching_dslite_deletion_re: cdktf.numberToTerraform(this._customPortBatchingDsliteDeletionRe),
      custom_port_batching_nat44_creation_rec: cdktf.numberToTerraform(this._customPortBatchingNat44CreationRec),
      custom_port_batching_nat44_deletion_rec: cdktf.numberToTerraform(this._customPortBatchingNat44DeletionRec),
      custom_port_batching_nat64_creation_rec: cdktf.numberToTerraform(this._customPortBatchingNat64CreationRec),
      custom_port_batching_nat64_deletion_rec: cdktf.numberToTerraform(this._customPortBatchingNat64DeletionRec),
      custom_port_batching_v2_dslite_creation: cdktf.numberToTerraform(this._customPortBatchingV2DsliteCreation),
      custom_port_batching_v2_dslite_deletion: cdktf.numberToTerraform(this._customPortBatchingV2DsliteDeletion),
      custom_port_batching_v2_nat44_creation_: cdktf.numberToTerraform(this._customPortBatchingV2Nat44Creation),
      custom_port_batching_v2_nat44_deletion_: cdktf.numberToTerraform(this._customPortBatchingV2Nat44Deletion),
      custom_port_batching_v2_nat64_creation_: cdktf.numberToTerraform(this._customPortBatchingV2Nat64Creation),
      custom_port_batching_v2_nat64_deletion_: cdktf.numberToTerraform(this._customPortBatchingV2Nat64Deletion),
      custom_port_mapping_dslite_creation_rec: cdktf.numberToTerraform(this._customPortMappingDsliteCreationRec),
      custom_port_mapping_dslite_deletion_rec: cdktf.numberToTerraform(this._customPortMappingDsliteDeletionRec),
      custom_port_mapping_nat44_creation_reco: cdktf.numberToTerraform(this._customPortMappingNat44CreationReco),
      custom_port_mapping_nat44_deletion_reco: cdktf.numberToTerraform(this._customPortMappingNat44DeletionReco),
      custom_port_mapping_nat64_creation_reco: cdktf.numberToTerraform(this._customPortMappingNat64CreationReco),
      custom_port_mapping_nat64_deletion_reco: cdktf.numberToTerraform(this._customPortMappingNat64DeletionReco),
      custom_session_event_dslite_creation_re: cdktf.numberToTerraform(this._customSessionEventDsliteCreationRe),
      custom_session_event_dslite_deletion_re: cdktf.numberToTerraform(this._customSessionEventDsliteDeletionRe),
      custom_session_event_fw4_creation_recor: cdktf.numberToTerraform(this._customSessionEventFw4CreationRecor),
      custom_session_event_fw4_deletion_recor: cdktf.numberToTerraform(this._customSessionEventFw4DeletionRecor),
      custom_session_event_fw6_creation_recor: cdktf.numberToTerraform(this._customSessionEventFw6CreationRecor),
      custom_session_event_fw6_deletion_recor: cdktf.numberToTerraform(this._customSessionEventFw6DeletionRecor),
      custom_session_event_nat44_creation_rec: cdktf.numberToTerraform(this._customSessionEventNat44CreationRec),
      custom_session_event_nat44_deletion_rec: cdktf.numberToTerraform(this._customSessionEventNat44DeletionRec),
      custom_session_event_nat64_creation_rec: cdktf.numberToTerraform(this._customSessionEventNat64CreationRec),
      custom_session_event_nat64_deletion_rec: cdktf.numberToTerraform(this._customSessionEventNat64DeletionRec),
      dslite_records_sent_failure: cdktf.numberToTerraform(this._dsliteRecordsSentFailure),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      nat44_records_sent_failure: cdktf.numberToTerraform(this._nat44RecordsSentFailure),
      nat64_records_sent_failure: cdktf.numberToTerraform(this._nat64RecordsSentFailure),
      netflow_v5_ext_records_sent_failure: cdktf.numberToTerraform(this._netflowV5ExtRecordsSentFailure),
      netflow_v5_records_sent_failure: cdktf.numberToTerraform(this._netflowV5RecordsSentFailure),
      port_batching_dslite_records_sent_failu: cdktf.numberToTerraform(this._portBatchingDsliteRecordsSentFailu),
      port_batching_nat44_records_sent_failur: cdktf.numberToTerraform(this._portBatchingNat44RecordsSentFailur),
      port_batching_nat64_records_sent_failur: cdktf.numberToTerraform(this._portBatchingNat64RecordsSentFailur),
      port_batching_v2_dslite_records_sent_fa: cdktf.numberToTerraform(this._portBatchingV2DsliteRecordsSentFa),
      port_batching_v2_nat44_records_sent_fai: cdktf.numberToTerraform(this._portBatchingV2Nat44RecordsSentFai),
      port_batching_v2_nat64_records_sent_fai: cdktf.numberToTerraform(this._portBatchingV2Nat64RecordsSentFai),
      port_mapping_dslite_records_sent_failur: cdktf.numberToTerraform(this._portMappingDsliteRecordsSentFailur),
      port_mapping_nat44_records_sent_failure: cdktf.numberToTerraform(this._portMappingNat44RecordsSentFailure),
      port_mapping_nat64_records_sent_failure: cdktf.numberToTerraform(this._portMappingNat64RecordsSentFailure),
      session_event_dslite_records_sent_failu: cdktf.numberToTerraform(this._sessionEventDsliteRecordsSentFailu),
      session_event_fw4_records_sent_failure: cdktf.numberToTerraform(this._sessionEventFw4RecordsSentFailure),
      session_event_fw6_records_sent_failure: cdktf.numberToTerraform(this._sessionEventFw6RecordsSentFailure),
      session_event_nat44_records_sent_failur: cdktf.numberToTerraform(this._sessionEventNat44RecordsSentFailur),
      session_event_nat64_records_sent_failur: cdktf.numberToTerraform(this._sessionEventNat64RecordsSentFailur),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_deny_reset_event_fw4_records_sen: {
        value: cdktf.numberToHclTerraform(this._customDenyResetEventFw4RecordsSen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_deny_reset_event_fw6_records_sen: {
        value: cdktf.numberToHclTerraform(this._customDenyResetEventFw6RecordsSen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_fw_iddos_entry_created_records_s: {
        value: cdktf.numberToHclTerraform(this._customFwIddosEntryCreatedRecordsS),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_fw_iddos_entry_deleted_records_s: {
        value: cdktf.numberToHclTerraform(this._customFwIddosEntryDeletedRecordsS),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_fw_sesn_limit_exceeded_records_s: {
        value: cdktf.numberToHclTerraform(this._customFwSesnLimitExceededRecordsS),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_gtp_c_tunnel_event_records_sent_: {
        value: cdktf.numberToHclTerraform(this._customGtpCTunnelEventRecordsSent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_gtp_deny_event_records_sent_fail: {
        value: cdktf.numberToHclTerraform(this._customGtpDenyEventRecordsSentFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_gtp_info_event_records_sent_fail: {
        value: cdktf.numberToHclTerraform(this._customGtpInfoEventRecordsSentFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_gtp_u_tunnel_event_records_sent_: {
        value: cdktf.numberToHclTerraform(this._customGtpUTunnelEventRecordsSent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_nat_iddos_l3_entry_created_recor: {
        value: cdktf.numberToHclTerraform(this._customNatIddosL3EntryCreatedRecor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_nat_iddos_l3_entry_deleted_recor: {
        value: cdktf.numberToHclTerraform(this._customNatIddosL3EntryDeletedRecor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_nat_iddos_l4_entry_created_recor: {
        value: cdktf.numberToHclTerraform(this._customNatIddosL4EntryCreatedRecor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_nat_iddos_l4_entry_deleted_recor: {
        value: cdktf.numberToHclTerraform(this._customNatIddosL4EntryDeletedRecor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_port_batching_dslite_creation_re: {
        value: cdktf.numberToHclTerraform(this._customPortBatchingDsliteCreationRe),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_port_batching_dslite_deletion_re: {
        value: cdktf.numberToHclTerraform(this._customPortBatchingDsliteDeletionRe),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_port_batching_nat44_creation_rec: {
        value: cdktf.numberToHclTerraform(this._customPortBatchingNat44CreationRec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_port_batching_nat44_deletion_rec: {
        value: cdktf.numberToHclTerraform(this._customPortBatchingNat44DeletionRec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_port_batching_nat64_creation_rec: {
        value: cdktf.numberToHclTerraform(this._customPortBatchingNat64CreationRec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_port_batching_nat64_deletion_rec: {
        value: cdktf.numberToHclTerraform(this._customPortBatchingNat64DeletionRec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_port_batching_v2_dslite_creation: {
        value: cdktf.numberToHclTerraform(this._customPortBatchingV2DsliteCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_port_batching_v2_dslite_deletion: {
        value: cdktf.numberToHclTerraform(this._customPortBatchingV2DsliteDeletion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_port_batching_v2_nat44_creation_: {
        value: cdktf.numberToHclTerraform(this._customPortBatchingV2Nat44Creation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_port_batching_v2_nat44_deletion_: {
        value: cdktf.numberToHclTerraform(this._customPortBatchingV2Nat44Deletion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_port_batching_v2_nat64_creation_: {
        value: cdktf.numberToHclTerraform(this._customPortBatchingV2Nat64Creation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_port_batching_v2_nat64_deletion_: {
        value: cdktf.numberToHclTerraform(this._customPortBatchingV2Nat64Deletion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_port_mapping_dslite_creation_rec: {
        value: cdktf.numberToHclTerraform(this._customPortMappingDsliteCreationRec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_port_mapping_dslite_deletion_rec: {
        value: cdktf.numberToHclTerraform(this._customPortMappingDsliteDeletionRec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_port_mapping_nat44_creation_reco: {
        value: cdktf.numberToHclTerraform(this._customPortMappingNat44CreationReco),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_port_mapping_nat44_deletion_reco: {
        value: cdktf.numberToHclTerraform(this._customPortMappingNat44DeletionReco),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_port_mapping_nat64_creation_reco: {
        value: cdktf.numberToHclTerraform(this._customPortMappingNat64CreationReco),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_port_mapping_nat64_deletion_reco: {
        value: cdktf.numberToHclTerraform(this._customPortMappingNat64DeletionReco),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_session_event_dslite_creation_re: {
        value: cdktf.numberToHclTerraform(this._customSessionEventDsliteCreationRe),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_session_event_dslite_deletion_re: {
        value: cdktf.numberToHclTerraform(this._customSessionEventDsliteDeletionRe),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_session_event_fw4_creation_recor: {
        value: cdktf.numberToHclTerraform(this._customSessionEventFw4CreationRecor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_session_event_fw4_deletion_recor: {
        value: cdktf.numberToHclTerraform(this._customSessionEventFw4DeletionRecor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_session_event_fw6_creation_recor: {
        value: cdktf.numberToHclTerraform(this._customSessionEventFw6CreationRecor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_session_event_fw6_deletion_recor: {
        value: cdktf.numberToHclTerraform(this._customSessionEventFw6DeletionRecor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_session_event_nat44_creation_rec: {
        value: cdktf.numberToHclTerraform(this._customSessionEventNat44CreationRec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_session_event_nat44_deletion_rec: {
        value: cdktf.numberToHclTerraform(this._customSessionEventNat44DeletionRec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_session_event_nat64_creation_rec: {
        value: cdktf.numberToHclTerraform(this._customSessionEventNat64CreationRec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_session_event_nat64_deletion_rec: {
        value: cdktf.numberToHclTerraform(this._customSessionEventNat64DeletionRec),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dslite_records_sent_failure: {
        value: cdktf.numberToHclTerraform(this._dsliteRecordsSentFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
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
      nat44_records_sent_failure: {
        value: cdktf.numberToHclTerraform(this._nat44RecordsSentFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat64_records_sent_failure: {
        value: cdktf.numberToHclTerraform(this._nat64RecordsSentFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      netflow_v5_ext_records_sent_failure: {
        value: cdktf.numberToHclTerraform(this._netflowV5ExtRecordsSentFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      netflow_v5_records_sent_failure: {
        value: cdktf.numberToHclTerraform(this._netflowV5RecordsSentFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_batching_dslite_records_sent_failu: {
        value: cdktf.numberToHclTerraform(this._portBatchingDsliteRecordsSentFailu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_batching_nat44_records_sent_failur: {
        value: cdktf.numberToHclTerraform(this._portBatchingNat44RecordsSentFailur),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_batching_nat64_records_sent_failur: {
        value: cdktf.numberToHclTerraform(this._portBatchingNat64RecordsSentFailur),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_batching_v2_dslite_records_sent_fa: {
        value: cdktf.numberToHclTerraform(this._portBatchingV2DsliteRecordsSentFa),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_batching_v2_nat44_records_sent_fai: {
        value: cdktf.numberToHclTerraform(this._portBatchingV2Nat44RecordsSentFai),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_batching_v2_nat64_records_sent_fai: {
        value: cdktf.numberToHclTerraform(this._portBatchingV2Nat64RecordsSentFai),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_mapping_dslite_records_sent_failur: {
        value: cdktf.numberToHclTerraform(this._portMappingDsliteRecordsSentFailur),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_mapping_nat44_records_sent_failure: {
        value: cdktf.numberToHclTerraform(this._portMappingNat44RecordsSentFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_mapping_nat64_records_sent_failure: {
        value: cdktf.numberToHclTerraform(this._portMappingNat64RecordsSentFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_event_dslite_records_sent_failu: {
        value: cdktf.numberToHclTerraform(this._sessionEventDsliteRecordsSentFailu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_event_fw4_records_sent_failure: {
        value: cdktf.numberToHclTerraform(this._sessionEventFw4RecordsSentFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_event_fw6_records_sent_failure: {
        value: cdktf.numberToHclTerraform(this._sessionEventFw6RecordsSentFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_event_nat44_records_sent_failur: {
        value: cdktf.numberToHclTerraform(this._sessionEventNat44RecordsSentFailur),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_event_nat64_records_sent_failur: {
        value: cdktf.numberToHclTerraform(this._sessionEventNat64RecordsSentFailur),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
