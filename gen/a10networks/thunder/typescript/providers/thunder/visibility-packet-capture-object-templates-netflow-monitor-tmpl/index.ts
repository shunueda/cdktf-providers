// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify name of the capture-config to use with this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#capture_config VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#capture_config}
  */
  readonly captureConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#id VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Packet Capture Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#name VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#user_tag VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#uuid VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#trigger_stats_inc VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsInc;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#trigger_stats_rate VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsRate;
  /**
  * trigger_stats_severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#trigger_stats_severity VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#trigger_stats_severity}
  */
  readonly triggerStatsSeverity?: VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsSeverity;
}
export interface VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsInc {
  /**
  * Enable automatic packet-capture for Custom FW4 Deny/Reset Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_deny_reset_event_fw4_records_sen VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_deny_reset_event_fw4_records_sen}
  */
  readonly customDenyResetEventFw4RecordsSen?: number;
  /**
  * Enable automatic packet-capture for Custom FW6 Deny/Reset Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_deny_reset_event_fw6_records_sen VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_deny_reset_event_fw6_records_sen}
  */
  readonly customDenyResetEventFw6RecordsSen?: number;
  /**
  * Enable automatic packet-capture for Custom FW iDDoS Entry Created Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_fw_iddos_entry_created_records_s VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_fw_iddos_entry_created_records_s}
  */
  readonly customFwIddosEntryCreatedRecordsS?: number;
  /**
  * Enable automatic packet-capture for Custom FW iDDoS Entry Deleted Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_fw_iddos_entry_deleted_records_s VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_fw_iddos_entry_deleted_records_s}
  */
  readonly customFwIddosEntryDeletedRecordsS?: number;
  /**
  * Enable automatic packet-capture for Custom FW Session Limit Exceeded Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_fw_sesn_limit_exceeded_records_s VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_fw_sesn_limit_exceeded_records_s}
  */
  readonly customFwSesnLimitExceededRecordsS?: number;
  /**
  * Enable automatic packet-capture for Custom GTP C Tunnel Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_gtp_c_tunnel_event_records_sent_ VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_gtp_c_tunnel_event_records_sent_}
  */
  readonly customGtpCTunnelEventRecordsSent?: number;
  /**
  * Enable automatic packet-capture for Custom GTP Deny Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_gtp_deny_event_records_sent_fail VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_gtp_deny_event_records_sent_fail}
  */
  readonly customGtpDenyEventRecordsSentFail?: number;
  /**
  * Enable automatic packet-capture for Custom GTP Info Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_gtp_info_event_records_sent_fail VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_gtp_info_event_records_sent_fail}
  */
  readonly customGtpInfoEventRecordsSentFail?: number;
  /**
  * Enable automatic packet-capture for Custom GTP U Tunnel Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_gtp_u_tunnel_event_records_sent_ VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_gtp_u_tunnel_event_records_sent_}
  */
  readonly customGtpUTunnelEventRecordsSent?: number;
  /**
  * Enable automatic packet-capture for Custom NAT iDDoS L3 Entry Created Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_nat_iddos_l3_entry_created_recor VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_nat_iddos_l3_entry_created_recor}
  */
  readonly customNatIddosL3EntryCreatedRecor?: number;
  /**
  * Enable automatic packet-capture for Custom NAT iDDoS L3 Entry Deleted Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_nat_iddos_l3_entry_deleted_recor VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_nat_iddos_l3_entry_deleted_recor}
  */
  readonly customNatIddosL3EntryDeletedRecor?: number;
  /**
  * Enable automatic packet-capture for Custom NAT iDDoS L4 Entry Created Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_nat_iddos_l4_entry_created_recor VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_nat_iddos_l4_entry_created_recor}
  */
  readonly customNatIddosL4EntryCreatedRecor?: number;
  /**
  * Enable automatic packet-capture for Custom NAT iDDoS L4 Entry Deleted Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_nat_iddos_l4_entry_deleted_recor VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_nat_iddos_l4_entry_deleted_recor}
  */
  readonly customNatIddosL4EntryDeletedRecor?: number;
  /**
  * Enable automatic packet-capture for Custom Dslite Port Batch Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_batching_dslite_creation_re VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_batching_dslite_creation_re}
  */
  readonly customPortBatchingDsliteCreationRe?: number;
  /**
  * Enable automatic packet-capture for Custom Dslite Port Batch Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_batching_dslite_deletion_re VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_batching_dslite_deletion_re}
  */
  readonly customPortBatchingDsliteDeletionRe?: number;
  /**
  * Enable automatic packet-capture for Custom Nat44 Port Batch Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_batching_nat44_creation_rec VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_batching_nat44_creation_rec}
  */
  readonly customPortBatchingNat44CreationRec?: number;
  /**
  * Enable automatic packet-capture for Custom Nat44 Port Batch Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_batching_nat44_deletion_rec VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_batching_nat44_deletion_rec}
  */
  readonly customPortBatchingNat44DeletionRec?: number;
  /**
  * Enable automatic packet-capture for Custom Nat64 Port Batch Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_batching_nat64_creation_rec VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_batching_nat64_creation_rec}
  */
  readonly customPortBatchingNat64CreationRec?: number;
  /**
  * Enable automatic packet-capture for Custom Nat64 Port Batch Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_batching_nat64_deletion_rec VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_batching_nat64_deletion_rec}
  */
  readonly customPortBatchingNat64DeletionRec?: number;
  /**
  * Enable automatic packet-capture for Custom Dslite Port Batch V2 Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_batching_v2_dslite_creation VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_batching_v2_dslite_creation}
  */
  readonly customPortBatchingV2DsliteCreation?: number;
  /**
  * Enable automatic packet-capture for Custom Dslite Port Batch V2 Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_batching_v2_dslite_deletion VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_batching_v2_dslite_deletion}
  */
  readonly customPortBatchingV2DsliteDeletion?: number;
  /**
  * Enable automatic packet-capture for Custom Nat44 Port Batch V2 Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_batching_v2_nat44_creation_ VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_batching_v2_nat44_creation_}
  */
  readonly customPortBatchingV2Nat44Creation?: number;
  /**
  * Enable automatic packet-capture for Custom Nat44 Port Batch V2 Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_batching_v2_nat44_deletion_ VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_batching_v2_nat44_deletion_}
  */
  readonly customPortBatchingV2Nat44Deletion?: number;
  /**
  * Enable automatic packet-capture for Custom Nat64 Port Batch V2 Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_batching_v2_nat64_creation_ VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_batching_v2_nat64_creation_}
  */
  readonly customPortBatchingV2Nat64Creation?: number;
  /**
  * Enable automatic packet-capture for Custom Nat64 Port Batch V2 Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_batching_v2_nat64_deletion_ VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_batching_v2_nat64_deletion_}
  */
  readonly customPortBatchingV2Nat64Deletion?: number;
  /**
  * Enable automatic packet-capture for Custom Dslite Port Map Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_mapping_dslite_creation_rec VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_mapping_dslite_creation_rec}
  */
  readonly customPortMappingDsliteCreationRec?: number;
  /**
  * Enable automatic packet-capture for Custom Dslite Port Map Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_mapping_dslite_deletion_rec VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_mapping_dslite_deletion_rec}
  */
  readonly customPortMappingDsliteDeletionRec?: number;
  /**
  * Enable automatic packet-capture for Custom Nat44 Port Map Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_mapping_nat44_creation_reco VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_mapping_nat44_creation_reco}
  */
  readonly customPortMappingNat44CreationReco?: number;
  /**
  * Enable automatic packet-capture for Custom Nat44 Port Map Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_mapping_nat44_deletion_reco VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_mapping_nat44_deletion_reco}
  */
  readonly customPortMappingNat44DeletionReco?: number;
  /**
  * Enable automatic packet-capture for Custom Nat64 Port Map Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_mapping_nat64_creation_reco VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_mapping_nat64_creation_reco}
  */
  readonly customPortMappingNat64CreationReco?: number;
  /**
  * Enable automatic packet-capture for Custom Nat64 Port Map Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_mapping_nat64_deletion_reco VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_mapping_nat64_deletion_reco}
  */
  readonly customPortMappingNat64DeletionReco?: number;
  /**
  * Enable automatic packet-capture for Custom Dslite Session Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_session_event_dslite_creation_re VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_session_event_dslite_creation_re}
  */
  readonly customSessionEventDsliteCreationRe?: number;
  /**
  * Enable automatic packet-capture for Custom Dslite Session Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_session_event_dslite_deletion_re VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_session_event_dslite_deletion_re}
  */
  readonly customSessionEventDsliteDeletionRe?: number;
  /**
  * Enable automatic packet-capture for Custom FW4 Session Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_session_event_fw4_creation_recor VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_session_event_fw4_creation_recor}
  */
  readonly customSessionEventFw4CreationRecor?: number;
  /**
  * Enable automatic packet-capture for Custom FW4 Session Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_session_event_fw4_deletion_recor VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_session_event_fw4_deletion_recor}
  */
  readonly customSessionEventFw4DeletionRecor?: number;
  /**
  * Enable automatic packet-capture for Custom FW6 Session Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_session_event_fw6_creation_recor VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_session_event_fw6_creation_recor}
  */
  readonly customSessionEventFw6CreationRecor?: number;
  /**
  * Enable automatic packet-capture for Custom FW6 Session Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_session_event_fw6_deletion_recor VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_session_event_fw6_deletion_recor}
  */
  readonly customSessionEventFw6DeletionRecor?: number;
  /**
  * Enable automatic packet-capture for Custom Nat44 Session Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_session_event_nat44_creation_rec VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_session_event_nat44_creation_rec}
  */
  readonly customSessionEventNat44CreationRec?: number;
  /**
  * Enable automatic packet-capture for Custom Nat44 Session Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_session_event_nat44_deletion_rec VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_session_event_nat44_deletion_rec}
  */
  readonly customSessionEventNat44DeletionRec?: number;
  /**
  * Enable automatic packet-capture for Custom Nat64 Session Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_session_event_nat64_creation_rec VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_session_event_nat64_creation_rec}
  */
  readonly customSessionEventNat64CreationRec?: number;
  /**
  * Enable automatic packet-capture for Custom Nat64 Session Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_session_event_nat64_deletion_rec VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_session_event_nat64_deletion_rec}
  */
  readonly customSessionEventNat64DeletionRec?: number;
  /**
  * Enable automatic packet-capture for Dslite Flow Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#dslite_records_sent_failure VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#dslite_records_sent_failure}
  */
  readonly dsliteRecordsSentFailure?: number;
  /**
  * Enable automatic packet-capture for NAT44 Flow Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#nat44_records_sent_failure VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#nat44_records_sent_failure}
  */
  readonly nat44RecordsSentFailure?: number;
  /**
  * Enable automatic packet-capture for NAT64 Flow Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#nat64_records_sent_failure VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#nat64_records_sent_failure}
  */
  readonly nat64RecordsSentFailure?: number;
  /**
  * Enable automatic packet-capture for Netflow v5 Ext Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#netflow_v5_ext_records_sent_failure VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#netflow_v5_ext_records_sent_failure}
  */
  readonly netflowV5ExtRecordsSentFailure?: number;
  /**
  * Enable automatic packet-capture for Netflow v5 Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#netflow_v5_records_sent_failure VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#netflow_v5_records_sent_failure}
  */
  readonly netflowV5RecordsSentFailure?: number;
  /**
  * Enable automatic packet-capture for Port Batching Dslite Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#port_batching_dslite_records_sent_failu VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#port_batching_dslite_records_sent_failu}
  */
  readonly portBatchingDsliteRecordsSentFailu?: number;
  /**
  * Enable automatic packet-capture for Port Batching Nat44 Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#port_batching_nat44_records_sent_failur VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#port_batching_nat44_records_sent_failur}
  */
  readonly portBatchingNat44RecordsSentFailur?: number;
  /**
  * Enable automatic packet-capture for Port Batching Nat64 Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#port_batching_nat64_records_sent_failur VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#port_batching_nat64_records_sent_failur}
  */
  readonly portBatchingNat64RecordsSentFailur?: number;
  /**
  * Enable automatic packet-capture for Port Batching V2 Dslite Records Falied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#port_batching_v2_dslite_records_sent_fa VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#port_batching_v2_dslite_records_sent_fa}
  */
  readonly portBatchingV2DsliteRecordsSentFa?: number;
  /**
  * Enable automatic packet-capture for Port Batching V2 Nat44 Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#port_batching_v2_nat44_records_sent_fai VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#port_batching_v2_nat44_records_sent_fai}
  */
  readonly portBatchingV2Nat44RecordsSentFai?: number;
  /**
  * Enable automatic packet-capture for Port Batching V2 Nat64 Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#port_batching_v2_nat64_records_sent_fai VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#port_batching_v2_nat64_records_sent_fai}
  */
  readonly portBatchingV2Nat64RecordsSentFai?: number;
  /**
  * Enable automatic packet-capture for Port Mapping Dslite Event Records failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#port_mapping_dslite_records_sent_failur VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#port_mapping_dslite_records_sent_failur}
  */
  readonly portMappingDsliteRecordsSentFailur?: number;
  /**
  * Enable automatic packet-capture for Port Mapping Nat44 Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#port_mapping_nat44_records_sent_failure VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#port_mapping_nat44_records_sent_failure}
  */
  readonly portMappingNat44RecordsSentFailure?: number;
  /**
  * Enable automatic packet-capture for Port Mapping Nat64 Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#port_mapping_nat64_records_sent_failure VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#port_mapping_nat64_records_sent_failure}
  */
  readonly portMappingNat64RecordsSentFailure?: number;
  /**
  * Enable automatic packet-capture for Dslite Session Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#session_event_dslite_records_sent_failu VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#session_event_dslite_records_sent_failu}
  */
  readonly sessionEventDsliteRecordsSentFailu?: number;
  /**
  * Enable automatic packet-capture for FW4 Session Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#session_event_fw4_records_sent_failure VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#session_event_fw4_records_sent_failure}
  */
  readonly sessionEventFw4RecordsSentFailure?: number;
  /**
  * Enable automatic packet-capture for FW6 Session Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#session_event_fw6_records_sent_failure VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#session_event_fw6_records_sent_failure}
  */
  readonly sessionEventFw6RecordsSentFailure?: number;
  /**
  * Enable automatic packet-capture for Nat44 Session Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#session_event_nat44_records_sent_failur VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#session_event_nat44_records_sent_failur}
  */
  readonly sessionEventNat44RecordsSentFailur?: number;
  /**
  * Enable automatic packet-capture for Nat64 Session Event Records Falied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#session_event_nat64_records_sent_failur VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#session_event_nat64_records_sent_failur}
  */
  readonly sessionEventNat64RecordsSentFailur?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#uuid VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncOutputReference | VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsInc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_deny_reset_event_fw4_records_sen: cdktf.numberToTerraform(struct!.customDenyResetEventFw4RecordsSen),
    custom_deny_reset_event_fw6_records_sen: cdktf.numberToTerraform(struct!.customDenyResetEventFw6RecordsSen),
    custom_fw_iddos_entry_created_records_s: cdktf.numberToTerraform(struct!.customFwIddosEntryCreatedRecordsS),
    custom_fw_iddos_entry_deleted_records_s: cdktf.numberToTerraform(struct!.customFwIddosEntryDeletedRecordsS),
    custom_fw_sesn_limit_exceeded_records_s: cdktf.numberToTerraform(struct!.customFwSesnLimitExceededRecordsS),
    custom_gtp_c_tunnel_event_records_sent_: cdktf.numberToTerraform(struct!.customGtpCTunnelEventRecordsSent),
    custom_gtp_deny_event_records_sent_fail: cdktf.numberToTerraform(struct!.customGtpDenyEventRecordsSentFail),
    custom_gtp_info_event_records_sent_fail: cdktf.numberToTerraform(struct!.customGtpInfoEventRecordsSentFail),
    custom_gtp_u_tunnel_event_records_sent_: cdktf.numberToTerraform(struct!.customGtpUTunnelEventRecordsSent),
    custom_nat_iddos_l3_entry_created_recor: cdktf.numberToTerraform(struct!.customNatIddosL3EntryCreatedRecor),
    custom_nat_iddos_l3_entry_deleted_recor: cdktf.numberToTerraform(struct!.customNatIddosL3EntryDeletedRecor),
    custom_nat_iddos_l4_entry_created_recor: cdktf.numberToTerraform(struct!.customNatIddosL4EntryCreatedRecor),
    custom_nat_iddos_l4_entry_deleted_recor: cdktf.numberToTerraform(struct!.customNatIddosL4EntryDeletedRecor),
    custom_port_batching_dslite_creation_re: cdktf.numberToTerraform(struct!.customPortBatchingDsliteCreationRe),
    custom_port_batching_dslite_deletion_re: cdktf.numberToTerraform(struct!.customPortBatchingDsliteDeletionRe),
    custom_port_batching_nat44_creation_rec: cdktf.numberToTerraform(struct!.customPortBatchingNat44CreationRec),
    custom_port_batching_nat44_deletion_rec: cdktf.numberToTerraform(struct!.customPortBatchingNat44DeletionRec),
    custom_port_batching_nat64_creation_rec: cdktf.numberToTerraform(struct!.customPortBatchingNat64CreationRec),
    custom_port_batching_nat64_deletion_rec: cdktf.numberToTerraform(struct!.customPortBatchingNat64DeletionRec),
    custom_port_batching_v2_dslite_creation: cdktf.numberToTerraform(struct!.customPortBatchingV2DsliteCreation),
    custom_port_batching_v2_dslite_deletion: cdktf.numberToTerraform(struct!.customPortBatchingV2DsliteDeletion),
    custom_port_batching_v2_nat44_creation_: cdktf.numberToTerraform(struct!.customPortBatchingV2Nat44Creation),
    custom_port_batching_v2_nat44_deletion_: cdktf.numberToTerraform(struct!.customPortBatchingV2Nat44Deletion),
    custom_port_batching_v2_nat64_creation_: cdktf.numberToTerraform(struct!.customPortBatchingV2Nat64Creation),
    custom_port_batching_v2_nat64_deletion_: cdktf.numberToTerraform(struct!.customPortBatchingV2Nat64Deletion),
    custom_port_mapping_dslite_creation_rec: cdktf.numberToTerraform(struct!.customPortMappingDsliteCreationRec),
    custom_port_mapping_dslite_deletion_rec: cdktf.numberToTerraform(struct!.customPortMappingDsliteDeletionRec),
    custom_port_mapping_nat44_creation_reco: cdktf.numberToTerraform(struct!.customPortMappingNat44CreationReco),
    custom_port_mapping_nat44_deletion_reco: cdktf.numberToTerraform(struct!.customPortMappingNat44DeletionReco),
    custom_port_mapping_nat64_creation_reco: cdktf.numberToTerraform(struct!.customPortMappingNat64CreationReco),
    custom_port_mapping_nat64_deletion_reco: cdktf.numberToTerraform(struct!.customPortMappingNat64DeletionReco),
    custom_session_event_dslite_creation_re: cdktf.numberToTerraform(struct!.customSessionEventDsliteCreationRe),
    custom_session_event_dslite_deletion_re: cdktf.numberToTerraform(struct!.customSessionEventDsliteDeletionRe),
    custom_session_event_fw4_creation_recor: cdktf.numberToTerraform(struct!.customSessionEventFw4CreationRecor),
    custom_session_event_fw4_deletion_recor: cdktf.numberToTerraform(struct!.customSessionEventFw4DeletionRecor),
    custom_session_event_fw6_creation_recor: cdktf.numberToTerraform(struct!.customSessionEventFw6CreationRecor),
    custom_session_event_fw6_deletion_recor: cdktf.numberToTerraform(struct!.customSessionEventFw6DeletionRecor),
    custom_session_event_nat44_creation_rec: cdktf.numberToTerraform(struct!.customSessionEventNat44CreationRec),
    custom_session_event_nat44_deletion_rec: cdktf.numberToTerraform(struct!.customSessionEventNat44DeletionRec),
    custom_session_event_nat64_creation_rec: cdktf.numberToTerraform(struct!.customSessionEventNat64CreationRec),
    custom_session_event_nat64_deletion_rec: cdktf.numberToTerraform(struct!.customSessionEventNat64DeletionRec),
    dslite_records_sent_failure: cdktf.numberToTerraform(struct!.dsliteRecordsSentFailure),
    nat44_records_sent_failure: cdktf.numberToTerraform(struct!.nat44RecordsSentFailure),
    nat64_records_sent_failure: cdktf.numberToTerraform(struct!.nat64RecordsSentFailure),
    netflow_v5_ext_records_sent_failure: cdktf.numberToTerraform(struct!.netflowV5ExtRecordsSentFailure),
    netflow_v5_records_sent_failure: cdktf.numberToTerraform(struct!.netflowV5RecordsSentFailure),
    port_batching_dslite_records_sent_failu: cdktf.numberToTerraform(struct!.portBatchingDsliteRecordsSentFailu),
    port_batching_nat44_records_sent_failur: cdktf.numberToTerraform(struct!.portBatchingNat44RecordsSentFailur),
    port_batching_nat64_records_sent_failur: cdktf.numberToTerraform(struct!.portBatchingNat64RecordsSentFailur),
    port_batching_v2_dslite_records_sent_fa: cdktf.numberToTerraform(struct!.portBatchingV2DsliteRecordsSentFa),
    port_batching_v2_nat44_records_sent_fai: cdktf.numberToTerraform(struct!.portBatchingV2Nat44RecordsSentFai),
    port_batching_v2_nat64_records_sent_fai: cdktf.numberToTerraform(struct!.portBatchingV2Nat64RecordsSentFai),
    port_mapping_dslite_records_sent_failur: cdktf.numberToTerraform(struct!.portMappingDsliteRecordsSentFailur),
    port_mapping_nat44_records_sent_failure: cdktf.numberToTerraform(struct!.portMappingNat44RecordsSentFailure),
    port_mapping_nat64_records_sent_failure: cdktf.numberToTerraform(struct!.portMappingNat64RecordsSentFailure),
    session_event_dslite_records_sent_failu: cdktf.numberToTerraform(struct!.sessionEventDsliteRecordsSentFailu),
    session_event_fw4_records_sent_failure: cdktf.numberToTerraform(struct!.sessionEventFw4RecordsSentFailure),
    session_event_fw6_records_sent_failure: cdktf.numberToTerraform(struct!.sessionEventFw6RecordsSentFailure),
    session_event_nat44_records_sent_failur: cdktf.numberToTerraform(struct!.sessionEventNat44RecordsSentFailur),
    session_event_nat64_records_sent_failur: cdktf.numberToTerraform(struct!.sessionEventNat64RecordsSentFailur),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncOutputReference | VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsInc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_deny_reset_event_fw4_records_sen: {
      value: cdktf.numberToHclTerraform(struct!.customDenyResetEventFw4RecordsSen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_deny_reset_event_fw6_records_sen: {
      value: cdktf.numberToHclTerraform(struct!.customDenyResetEventFw6RecordsSen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_fw_iddos_entry_created_records_s: {
      value: cdktf.numberToHclTerraform(struct!.customFwIddosEntryCreatedRecordsS),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_fw_iddos_entry_deleted_records_s: {
      value: cdktf.numberToHclTerraform(struct!.customFwIddosEntryDeletedRecordsS),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_fw_sesn_limit_exceeded_records_s: {
      value: cdktf.numberToHclTerraform(struct!.customFwSesnLimitExceededRecordsS),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_gtp_c_tunnel_event_records_sent_: {
      value: cdktf.numberToHclTerraform(struct!.customGtpCTunnelEventRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_gtp_deny_event_records_sent_fail: {
      value: cdktf.numberToHclTerraform(struct!.customGtpDenyEventRecordsSentFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_gtp_info_event_records_sent_fail: {
      value: cdktf.numberToHclTerraform(struct!.customGtpInfoEventRecordsSentFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_gtp_u_tunnel_event_records_sent_: {
      value: cdktf.numberToHclTerraform(struct!.customGtpUTunnelEventRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_nat_iddos_l3_entry_created_recor: {
      value: cdktf.numberToHclTerraform(struct!.customNatIddosL3EntryCreatedRecor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_nat_iddos_l3_entry_deleted_recor: {
      value: cdktf.numberToHclTerraform(struct!.customNatIddosL3EntryDeletedRecor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_nat_iddos_l4_entry_created_recor: {
      value: cdktf.numberToHclTerraform(struct!.customNatIddosL4EntryCreatedRecor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_nat_iddos_l4_entry_deleted_recor: {
      value: cdktf.numberToHclTerraform(struct!.customNatIddosL4EntryDeletedRecor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_dslite_creation_re: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingDsliteCreationRe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_dslite_deletion_re: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingDsliteDeletionRe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_nat44_creation_rec: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingNat44CreationRec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_nat44_deletion_rec: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingNat44DeletionRec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_nat64_creation_rec: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingNat64CreationRec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_nat64_deletion_rec: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingNat64DeletionRec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_v2_dslite_creation: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingV2DsliteCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_v2_dslite_deletion: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingV2DsliteDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_v2_nat44_creation_: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingV2Nat44Creation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_v2_nat44_deletion_: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingV2Nat44Deletion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_v2_nat64_creation_: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingV2Nat64Creation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_v2_nat64_deletion_: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingV2Nat64Deletion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_mapping_dslite_creation_rec: {
      value: cdktf.numberToHclTerraform(struct!.customPortMappingDsliteCreationRec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_mapping_dslite_deletion_rec: {
      value: cdktf.numberToHclTerraform(struct!.customPortMappingDsliteDeletionRec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_mapping_nat44_creation_reco: {
      value: cdktf.numberToHclTerraform(struct!.customPortMappingNat44CreationReco),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_mapping_nat44_deletion_reco: {
      value: cdktf.numberToHclTerraform(struct!.customPortMappingNat44DeletionReco),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_mapping_nat64_creation_reco: {
      value: cdktf.numberToHclTerraform(struct!.customPortMappingNat64CreationReco),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_mapping_nat64_deletion_reco: {
      value: cdktf.numberToHclTerraform(struct!.customPortMappingNat64DeletionReco),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_dslite_creation_re: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventDsliteCreationRe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_dslite_deletion_re: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventDsliteDeletionRe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_fw4_creation_recor: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventFw4CreationRecor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_fw4_deletion_recor: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventFw4DeletionRecor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_fw6_creation_recor: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventFw6CreationRecor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_fw6_deletion_recor: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventFw6DeletionRecor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_nat44_creation_rec: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventNat44CreationRec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_nat44_deletion_rec: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventNat44DeletionRec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_nat64_creation_rec: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventNat64CreationRec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_nat64_deletion_rec: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventNat64DeletionRec),
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
    nat44_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.nat44RecordsSentFailure),
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
    netflow_v5_ext_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.netflowV5ExtRecordsSentFailure),
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
    port_batching_dslite_records_sent_failu: {
      value: cdktf.numberToHclTerraform(struct!.portBatchingDsliteRecordsSentFailu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_batching_nat44_records_sent_failur: {
      value: cdktf.numberToHclTerraform(struct!.portBatchingNat44RecordsSentFailur),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_batching_nat64_records_sent_failur: {
      value: cdktf.numberToHclTerraform(struct!.portBatchingNat64RecordsSentFailur),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_batching_v2_dslite_records_sent_fa: {
      value: cdktf.numberToHclTerraform(struct!.portBatchingV2DsliteRecordsSentFa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_batching_v2_nat44_records_sent_fai: {
      value: cdktf.numberToHclTerraform(struct!.portBatchingV2Nat44RecordsSentFai),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_batching_v2_nat64_records_sent_fai: {
      value: cdktf.numberToHclTerraform(struct!.portBatchingV2Nat64RecordsSentFai),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_mapping_dslite_records_sent_failur: {
      value: cdktf.numberToHclTerraform(struct!.portMappingDsliteRecordsSentFailur),
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
    port_mapping_nat64_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.portMappingNat64RecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_event_dslite_records_sent_failu: {
      value: cdktf.numberToHclTerraform(struct!.sessionEventDsliteRecordsSentFailu),
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
    session_event_fw6_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.sessionEventFw6RecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_event_nat44_records_sent_failur: {
      value: cdktf.numberToHclTerraform(struct!.sessionEventNat44RecordsSentFailur),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_event_nat64_records_sent_failur: {
      value: cdktf.numberToHclTerraform(struct!.sessionEventNat64RecordsSentFailur),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsInc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customDenyResetEventFw4RecordsSen !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDenyResetEventFw4RecordsSen = this._customDenyResetEventFw4RecordsSen;
    }
    if (this._customDenyResetEventFw6RecordsSen !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDenyResetEventFw6RecordsSen = this._customDenyResetEventFw6RecordsSen;
    }
    if (this._customFwIddosEntryCreatedRecordsS !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFwIddosEntryCreatedRecordsS = this._customFwIddosEntryCreatedRecordsS;
    }
    if (this._customFwIddosEntryDeletedRecordsS !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFwIddosEntryDeletedRecordsS = this._customFwIddosEntryDeletedRecordsS;
    }
    if (this._customFwSesnLimitExceededRecordsS !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFwSesnLimitExceededRecordsS = this._customFwSesnLimitExceededRecordsS;
    }
    if (this._customGtpCTunnelEventRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customGtpCTunnelEventRecordsSent = this._customGtpCTunnelEventRecordsSent;
    }
    if (this._customGtpDenyEventRecordsSentFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.customGtpDenyEventRecordsSentFail = this._customGtpDenyEventRecordsSentFail;
    }
    if (this._customGtpInfoEventRecordsSentFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.customGtpInfoEventRecordsSentFail = this._customGtpInfoEventRecordsSentFail;
    }
    if (this._customGtpUTunnelEventRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customGtpUTunnelEventRecordsSent = this._customGtpUTunnelEventRecordsSent;
    }
    if (this._customNatIddosL3EntryCreatedRecor !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNatIddosL3EntryCreatedRecor = this._customNatIddosL3EntryCreatedRecor;
    }
    if (this._customNatIddosL3EntryDeletedRecor !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNatIddosL3EntryDeletedRecor = this._customNatIddosL3EntryDeletedRecor;
    }
    if (this._customNatIddosL4EntryCreatedRecor !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNatIddosL4EntryCreatedRecor = this._customNatIddosL4EntryCreatedRecor;
    }
    if (this._customNatIddosL4EntryDeletedRecor !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNatIddosL4EntryDeletedRecor = this._customNatIddosL4EntryDeletedRecor;
    }
    if (this._customPortBatchingDsliteCreationRe !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingDsliteCreationRe = this._customPortBatchingDsliteCreationRe;
    }
    if (this._customPortBatchingDsliteDeletionRe !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingDsliteDeletionRe = this._customPortBatchingDsliteDeletionRe;
    }
    if (this._customPortBatchingNat44CreationRec !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingNat44CreationRec = this._customPortBatchingNat44CreationRec;
    }
    if (this._customPortBatchingNat44DeletionRec !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingNat44DeletionRec = this._customPortBatchingNat44DeletionRec;
    }
    if (this._customPortBatchingNat64CreationRec !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingNat64CreationRec = this._customPortBatchingNat64CreationRec;
    }
    if (this._customPortBatchingNat64DeletionRec !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingNat64DeletionRec = this._customPortBatchingNat64DeletionRec;
    }
    if (this._customPortBatchingV2DsliteCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingV2DsliteCreation = this._customPortBatchingV2DsliteCreation;
    }
    if (this._customPortBatchingV2DsliteDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingV2DsliteDeletion = this._customPortBatchingV2DsliteDeletion;
    }
    if (this._customPortBatchingV2Nat44Creation !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingV2Nat44Creation = this._customPortBatchingV2Nat44Creation;
    }
    if (this._customPortBatchingV2Nat44Deletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingV2Nat44Deletion = this._customPortBatchingV2Nat44Deletion;
    }
    if (this._customPortBatchingV2Nat64Creation !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingV2Nat64Creation = this._customPortBatchingV2Nat64Creation;
    }
    if (this._customPortBatchingV2Nat64Deletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingV2Nat64Deletion = this._customPortBatchingV2Nat64Deletion;
    }
    if (this._customPortMappingDsliteCreationRec !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortMappingDsliteCreationRec = this._customPortMappingDsliteCreationRec;
    }
    if (this._customPortMappingDsliteDeletionRec !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortMappingDsliteDeletionRec = this._customPortMappingDsliteDeletionRec;
    }
    if (this._customPortMappingNat44CreationReco !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortMappingNat44CreationReco = this._customPortMappingNat44CreationReco;
    }
    if (this._customPortMappingNat44DeletionReco !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortMappingNat44DeletionReco = this._customPortMappingNat44DeletionReco;
    }
    if (this._customPortMappingNat64CreationReco !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortMappingNat64CreationReco = this._customPortMappingNat64CreationReco;
    }
    if (this._customPortMappingNat64DeletionReco !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortMappingNat64DeletionReco = this._customPortMappingNat64DeletionReco;
    }
    if (this._customSessionEventDsliteCreationRe !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventDsliteCreationRe = this._customSessionEventDsliteCreationRe;
    }
    if (this._customSessionEventDsliteDeletionRe !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventDsliteDeletionRe = this._customSessionEventDsliteDeletionRe;
    }
    if (this._customSessionEventFw4CreationRecor !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventFw4CreationRecor = this._customSessionEventFw4CreationRecor;
    }
    if (this._customSessionEventFw4DeletionRecor !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventFw4DeletionRecor = this._customSessionEventFw4DeletionRecor;
    }
    if (this._customSessionEventFw6CreationRecor !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventFw6CreationRecor = this._customSessionEventFw6CreationRecor;
    }
    if (this._customSessionEventFw6DeletionRecor !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventFw6DeletionRecor = this._customSessionEventFw6DeletionRecor;
    }
    if (this._customSessionEventNat44CreationRec !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventNat44CreationRec = this._customSessionEventNat44CreationRec;
    }
    if (this._customSessionEventNat44DeletionRec !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventNat44DeletionRec = this._customSessionEventNat44DeletionRec;
    }
    if (this._customSessionEventNat64CreationRec !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventNat64CreationRec = this._customSessionEventNat64CreationRec;
    }
    if (this._customSessionEventNat64DeletionRec !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventNat64DeletionRec = this._customSessionEventNat64DeletionRec;
    }
    if (this._dsliteRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsliteRecordsSentFailure = this._dsliteRecordsSentFailure;
    }
    if (this._nat44RecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat44RecordsSentFailure = this._nat44RecordsSentFailure;
    }
    if (this._nat64RecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64RecordsSentFailure = this._nat64RecordsSentFailure;
    }
    if (this._netflowV5ExtRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowV5ExtRecordsSentFailure = this._netflowV5ExtRecordsSentFailure;
    }
    if (this._netflowV5RecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowV5RecordsSentFailure = this._netflowV5RecordsSentFailure;
    }
    if (this._portBatchingDsliteRecordsSentFailu !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchingDsliteRecordsSentFailu = this._portBatchingDsliteRecordsSentFailu;
    }
    if (this._portBatchingNat44RecordsSentFailur !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchingNat44RecordsSentFailur = this._portBatchingNat44RecordsSentFailur;
    }
    if (this._portBatchingNat64RecordsSentFailur !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchingNat64RecordsSentFailur = this._portBatchingNat64RecordsSentFailur;
    }
    if (this._portBatchingV2DsliteRecordsSentFa !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchingV2DsliteRecordsSentFa = this._portBatchingV2DsliteRecordsSentFa;
    }
    if (this._portBatchingV2Nat44RecordsSentFai !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchingV2Nat44RecordsSentFai = this._portBatchingV2Nat44RecordsSentFai;
    }
    if (this._portBatchingV2Nat64RecordsSentFai !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchingV2Nat64RecordsSentFai = this._portBatchingV2Nat64RecordsSentFai;
    }
    if (this._portMappingDsliteRecordsSentFailur !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMappingDsliteRecordsSentFailur = this._portMappingDsliteRecordsSentFailur;
    }
    if (this._portMappingNat44RecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMappingNat44RecordsSentFailure = this._portMappingNat44RecordsSentFailure;
    }
    if (this._portMappingNat64RecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMappingNat64RecordsSentFailure = this._portMappingNat64RecordsSentFailure;
    }
    if (this._sessionEventDsliteRecordsSentFailu !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionEventDsliteRecordsSentFailu = this._sessionEventDsliteRecordsSentFailu;
    }
    if (this._sessionEventFw4RecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionEventFw4RecordsSentFailure = this._sessionEventFw4RecordsSentFailure;
    }
    if (this._sessionEventFw6RecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionEventFw6RecordsSentFailure = this._sessionEventFw6RecordsSentFailure;
    }
    if (this._sessionEventNat44RecordsSentFailur !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionEventNat44RecordsSentFailur = this._sessionEventNat44RecordsSentFailur;
    }
    if (this._sessionEventNat64RecordsSentFailur !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionEventNat64RecordsSentFailur = this._sessionEventNat64RecordsSentFailur;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsInc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customDenyResetEventFw4RecordsSen = undefined;
      this._customDenyResetEventFw6RecordsSen = undefined;
      this._customFwIddosEntryCreatedRecordsS = undefined;
      this._customFwIddosEntryDeletedRecordsS = undefined;
      this._customFwSesnLimitExceededRecordsS = undefined;
      this._customGtpCTunnelEventRecordsSent = undefined;
      this._customGtpDenyEventRecordsSentFail = undefined;
      this._customGtpInfoEventRecordsSentFail = undefined;
      this._customGtpUTunnelEventRecordsSent = undefined;
      this._customNatIddosL3EntryCreatedRecor = undefined;
      this._customNatIddosL3EntryDeletedRecor = undefined;
      this._customNatIddosL4EntryCreatedRecor = undefined;
      this._customNatIddosL4EntryDeletedRecor = undefined;
      this._customPortBatchingDsliteCreationRe = undefined;
      this._customPortBatchingDsliteDeletionRe = undefined;
      this._customPortBatchingNat44CreationRec = undefined;
      this._customPortBatchingNat44DeletionRec = undefined;
      this._customPortBatchingNat64CreationRec = undefined;
      this._customPortBatchingNat64DeletionRec = undefined;
      this._customPortBatchingV2DsliteCreation = undefined;
      this._customPortBatchingV2DsliteDeletion = undefined;
      this._customPortBatchingV2Nat44Creation = undefined;
      this._customPortBatchingV2Nat44Deletion = undefined;
      this._customPortBatchingV2Nat64Creation = undefined;
      this._customPortBatchingV2Nat64Deletion = undefined;
      this._customPortMappingDsliteCreationRec = undefined;
      this._customPortMappingDsliteDeletionRec = undefined;
      this._customPortMappingNat44CreationReco = undefined;
      this._customPortMappingNat44DeletionReco = undefined;
      this._customPortMappingNat64CreationReco = undefined;
      this._customPortMappingNat64DeletionReco = undefined;
      this._customSessionEventDsliteCreationRe = undefined;
      this._customSessionEventDsliteDeletionRe = undefined;
      this._customSessionEventFw4CreationRecor = undefined;
      this._customSessionEventFw4DeletionRecor = undefined;
      this._customSessionEventFw6CreationRecor = undefined;
      this._customSessionEventFw6DeletionRecor = undefined;
      this._customSessionEventNat44CreationRec = undefined;
      this._customSessionEventNat44DeletionRec = undefined;
      this._customSessionEventNat64CreationRec = undefined;
      this._customSessionEventNat64DeletionRec = undefined;
      this._dsliteRecordsSentFailure = undefined;
      this._nat44RecordsSentFailure = undefined;
      this._nat64RecordsSentFailure = undefined;
      this._netflowV5ExtRecordsSentFailure = undefined;
      this._netflowV5RecordsSentFailure = undefined;
      this._portBatchingDsliteRecordsSentFailu = undefined;
      this._portBatchingNat44RecordsSentFailur = undefined;
      this._portBatchingNat64RecordsSentFailur = undefined;
      this._portBatchingV2DsliteRecordsSentFa = undefined;
      this._portBatchingV2Nat44RecordsSentFai = undefined;
      this._portBatchingV2Nat64RecordsSentFai = undefined;
      this._portMappingDsliteRecordsSentFailur = undefined;
      this._portMappingNat44RecordsSentFailure = undefined;
      this._portMappingNat64RecordsSentFailure = undefined;
      this._sessionEventDsliteRecordsSentFailu = undefined;
      this._sessionEventFw4RecordsSentFailure = undefined;
      this._sessionEventFw6RecordsSentFailure = undefined;
      this._sessionEventNat44RecordsSentFailur = undefined;
      this._sessionEventNat64RecordsSentFailur = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customDenyResetEventFw4RecordsSen = value.customDenyResetEventFw4RecordsSen;
      this._customDenyResetEventFw6RecordsSen = value.customDenyResetEventFw6RecordsSen;
      this._customFwIddosEntryCreatedRecordsS = value.customFwIddosEntryCreatedRecordsS;
      this._customFwIddosEntryDeletedRecordsS = value.customFwIddosEntryDeletedRecordsS;
      this._customFwSesnLimitExceededRecordsS = value.customFwSesnLimitExceededRecordsS;
      this._customGtpCTunnelEventRecordsSent = value.customGtpCTunnelEventRecordsSent;
      this._customGtpDenyEventRecordsSentFail = value.customGtpDenyEventRecordsSentFail;
      this._customGtpInfoEventRecordsSentFail = value.customGtpInfoEventRecordsSentFail;
      this._customGtpUTunnelEventRecordsSent = value.customGtpUTunnelEventRecordsSent;
      this._customNatIddosL3EntryCreatedRecor = value.customNatIddosL3EntryCreatedRecor;
      this._customNatIddosL3EntryDeletedRecor = value.customNatIddosL3EntryDeletedRecor;
      this._customNatIddosL4EntryCreatedRecor = value.customNatIddosL4EntryCreatedRecor;
      this._customNatIddosL4EntryDeletedRecor = value.customNatIddosL4EntryDeletedRecor;
      this._customPortBatchingDsliteCreationRe = value.customPortBatchingDsliteCreationRe;
      this._customPortBatchingDsliteDeletionRe = value.customPortBatchingDsliteDeletionRe;
      this._customPortBatchingNat44CreationRec = value.customPortBatchingNat44CreationRec;
      this._customPortBatchingNat44DeletionRec = value.customPortBatchingNat44DeletionRec;
      this._customPortBatchingNat64CreationRec = value.customPortBatchingNat64CreationRec;
      this._customPortBatchingNat64DeletionRec = value.customPortBatchingNat64DeletionRec;
      this._customPortBatchingV2DsliteCreation = value.customPortBatchingV2DsliteCreation;
      this._customPortBatchingV2DsliteDeletion = value.customPortBatchingV2DsliteDeletion;
      this._customPortBatchingV2Nat44Creation = value.customPortBatchingV2Nat44Creation;
      this._customPortBatchingV2Nat44Deletion = value.customPortBatchingV2Nat44Deletion;
      this._customPortBatchingV2Nat64Creation = value.customPortBatchingV2Nat64Creation;
      this._customPortBatchingV2Nat64Deletion = value.customPortBatchingV2Nat64Deletion;
      this._customPortMappingDsliteCreationRec = value.customPortMappingDsliteCreationRec;
      this._customPortMappingDsliteDeletionRec = value.customPortMappingDsliteDeletionRec;
      this._customPortMappingNat44CreationReco = value.customPortMappingNat44CreationReco;
      this._customPortMappingNat44DeletionReco = value.customPortMappingNat44DeletionReco;
      this._customPortMappingNat64CreationReco = value.customPortMappingNat64CreationReco;
      this._customPortMappingNat64DeletionReco = value.customPortMappingNat64DeletionReco;
      this._customSessionEventDsliteCreationRe = value.customSessionEventDsliteCreationRe;
      this._customSessionEventDsliteDeletionRe = value.customSessionEventDsliteDeletionRe;
      this._customSessionEventFw4CreationRecor = value.customSessionEventFw4CreationRecor;
      this._customSessionEventFw4DeletionRecor = value.customSessionEventFw4DeletionRecor;
      this._customSessionEventFw6CreationRecor = value.customSessionEventFw6CreationRecor;
      this._customSessionEventFw6DeletionRecor = value.customSessionEventFw6DeletionRecor;
      this._customSessionEventNat44CreationRec = value.customSessionEventNat44CreationRec;
      this._customSessionEventNat44DeletionRec = value.customSessionEventNat44DeletionRec;
      this._customSessionEventNat64CreationRec = value.customSessionEventNat64CreationRec;
      this._customSessionEventNat64DeletionRec = value.customSessionEventNat64DeletionRec;
      this._dsliteRecordsSentFailure = value.dsliteRecordsSentFailure;
      this._nat44RecordsSentFailure = value.nat44RecordsSentFailure;
      this._nat64RecordsSentFailure = value.nat64RecordsSentFailure;
      this._netflowV5ExtRecordsSentFailure = value.netflowV5ExtRecordsSentFailure;
      this._netflowV5RecordsSentFailure = value.netflowV5RecordsSentFailure;
      this._portBatchingDsliteRecordsSentFailu = value.portBatchingDsliteRecordsSentFailu;
      this._portBatchingNat44RecordsSentFailur = value.portBatchingNat44RecordsSentFailur;
      this._portBatchingNat64RecordsSentFailur = value.portBatchingNat64RecordsSentFailur;
      this._portBatchingV2DsliteRecordsSentFa = value.portBatchingV2DsliteRecordsSentFa;
      this._portBatchingV2Nat44RecordsSentFai = value.portBatchingV2Nat44RecordsSentFai;
      this._portBatchingV2Nat64RecordsSentFai = value.portBatchingV2Nat64RecordsSentFai;
      this._portMappingDsliteRecordsSentFailur = value.portMappingDsliteRecordsSentFailur;
      this._portMappingNat44RecordsSentFailure = value.portMappingNat44RecordsSentFailure;
      this._portMappingNat64RecordsSentFailure = value.portMappingNat64RecordsSentFailure;
      this._sessionEventDsliteRecordsSentFailu = value.sessionEventDsliteRecordsSentFailu;
      this._sessionEventFw4RecordsSentFailure = value.sessionEventFw4RecordsSentFailure;
      this._sessionEventFw6RecordsSentFailure = value.sessionEventFw6RecordsSentFailure;
      this._sessionEventNat44RecordsSentFailur = value.sessionEventNat44RecordsSentFailur;
      this._sessionEventNat64RecordsSentFailur = value.sessionEventNat64RecordsSentFailur;
      this._uuid = value.uuid;
    }
  }

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
}
export interface VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsRate {
  /**
  * Enable automatic packet-capture for Custom FW4 Deny/Reset Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_deny_reset_event_fw4_records_sen VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_deny_reset_event_fw4_records_sen}
  */
  readonly customDenyResetEventFw4RecordsSen?: number;
  /**
  * Enable automatic packet-capture for Custom FW6 Deny/Reset Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_deny_reset_event_fw6_records_sen VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_deny_reset_event_fw6_records_sen}
  */
  readonly customDenyResetEventFw6RecordsSen?: number;
  /**
  * Enable automatic packet-capture for Custom FW iDDoS Entry Created Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_fw_iddos_entry_created_records_s VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_fw_iddos_entry_created_records_s}
  */
  readonly customFwIddosEntryCreatedRecordsS?: number;
  /**
  * Enable automatic packet-capture for Custom FW iDDoS Entry Deleted Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_fw_iddos_entry_deleted_records_s VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_fw_iddos_entry_deleted_records_s}
  */
  readonly customFwIddosEntryDeletedRecordsS?: number;
  /**
  * Enable automatic packet-capture for Custom FW Session Limit Exceeded Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_fw_sesn_limit_exceeded_records_s VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_fw_sesn_limit_exceeded_records_s}
  */
  readonly customFwSesnLimitExceededRecordsS?: number;
  /**
  * Enable automatic packet-capture for Custom GTP C Tunnel Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_gtp_c_tunnel_event_records_sent_ VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_gtp_c_tunnel_event_records_sent_}
  */
  readonly customGtpCTunnelEventRecordsSent?: number;
  /**
  * Enable automatic packet-capture for Custom GTP Deny Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_gtp_deny_event_records_sent_fail VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_gtp_deny_event_records_sent_fail}
  */
  readonly customGtpDenyEventRecordsSentFail?: number;
  /**
  * Enable automatic packet-capture for Custom GTP Info Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_gtp_info_event_records_sent_fail VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_gtp_info_event_records_sent_fail}
  */
  readonly customGtpInfoEventRecordsSentFail?: number;
  /**
  * Enable automatic packet-capture for Custom GTP U Tunnel Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_gtp_u_tunnel_event_records_sent_ VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_gtp_u_tunnel_event_records_sent_}
  */
  readonly customGtpUTunnelEventRecordsSent?: number;
  /**
  * Enable automatic packet-capture for Custom NAT iDDoS L3 Entry Created Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_nat_iddos_l3_entry_created_recor VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_nat_iddos_l3_entry_created_recor}
  */
  readonly customNatIddosL3EntryCreatedRecor?: number;
  /**
  * Enable automatic packet-capture for Custom NAT iDDoS L3 Entry Deleted Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_nat_iddos_l3_entry_deleted_recor VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_nat_iddos_l3_entry_deleted_recor}
  */
  readonly customNatIddosL3EntryDeletedRecor?: number;
  /**
  * Enable automatic packet-capture for Custom NAT iDDoS L4 Entry Created Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_nat_iddos_l4_entry_created_recor VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_nat_iddos_l4_entry_created_recor}
  */
  readonly customNatIddosL4EntryCreatedRecor?: number;
  /**
  * Enable automatic packet-capture for Custom NAT iDDoS L4 Entry Deleted Records Sent Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_nat_iddos_l4_entry_deleted_recor VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_nat_iddos_l4_entry_deleted_recor}
  */
  readonly customNatIddosL4EntryDeletedRecor?: number;
  /**
  * Enable automatic packet-capture for Custom Dslite Port Batch Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_batching_dslite_creation_re VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_batching_dslite_creation_re}
  */
  readonly customPortBatchingDsliteCreationRe?: number;
  /**
  * Enable automatic packet-capture for Custom Dslite Port Batch Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_batching_dslite_deletion_re VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_batching_dslite_deletion_re}
  */
  readonly customPortBatchingDsliteDeletionRe?: number;
  /**
  * Enable automatic packet-capture for Custom Nat44 Port Batch Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_batching_nat44_creation_rec VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_batching_nat44_creation_rec}
  */
  readonly customPortBatchingNat44CreationRec?: number;
  /**
  * Enable automatic packet-capture for Custom Nat44 Port Batch Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_batching_nat44_deletion_rec VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_batching_nat44_deletion_rec}
  */
  readonly customPortBatchingNat44DeletionRec?: number;
  /**
  * Enable automatic packet-capture for Custom Nat64 Port Batch Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_batching_nat64_creation_rec VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_batching_nat64_creation_rec}
  */
  readonly customPortBatchingNat64CreationRec?: number;
  /**
  * Enable automatic packet-capture for Custom Nat64 Port Batch Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_batching_nat64_deletion_rec VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_batching_nat64_deletion_rec}
  */
  readonly customPortBatchingNat64DeletionRec?: number;
  /**
  * Enable automatic packet-capture for Custom Dslite Port Batch V2 Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_batching_v2_dslite_creation VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_batching_v2_dslite_creation}
  */
  readonly customPortBatchingV2DsliteCreation?: number;
  /**
  * Enable automatic packet-capture for Custom Dslite Port Batch V2 Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_batching_v2_dslite_deletion VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_batching_v2_dslite_deletion}
  */
  readonly customPortBatchingV2DsliteDeletion?: number;
  /**
  * Enable automatic packet-capture for Custom Nat44 Port Batch V2 Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_batching_v2_nat44_creation_ VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_batching_v2_nat44_creation_}
  */
  readonly customPortBatchingV2Nat44Creation?: number;
  /**
  * Enable automatic packet-capture for Custom Nat44 Port Batch V2 Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_batching_v2_nat44_deletion_ VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_batching_v2_nat44_deletion_}
  */
  readonly customPortBatchingV2Nat44Deletion?: number;
  /**
  * Enable automatic packet-capture for Custom Nat64 Port Batch V2 Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_batching_v2_nat64_creation_ VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_batching_v2_nat64_creation_}
  */
  readonly customPortBatchingV2Nat64Creation?: number;
  /**
  * Enable automatic packet-capture for Custom Nat64 Port Batch V2 Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_batching_v2_nat64_deletion_ VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_batching_v2_nat64_deletion_}
  */
  readonly customPortBatchingV2Nat64Deletion?: number;
  /**
  * Enable automatic packet-capture for Custom Dslite Port Map Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_mapping_dslite_creation_rec VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_mapping_dslite_creation_rec}
  */
  readonly customPortMappingDsliteCreationRec?: number;
  /**
  * Enable automatic packet-capture for Custom Dslite Port Map Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_mapping_dslite_deletion_rec VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_mapping_dslite_deletion_rec}
  */
  readonly customPortMappingDsliteDeletionRec?: number;
  /**
  * Enable automatic packet-capture for Custom Nat44 Port Map Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_mapping_nat44_creation_reco VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_mapping_nat44_creation_reco}
  */
  readonly customPortMappingNat44CreationReco?: number;
  /**
  * Enable automatic packet-capture for Custom Nat44 Port Map Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_mapping_nat44_deletion_reco VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_mapping_nat44_deletion_reco}
  */
  readonly customPortMappingNat44DeletionReco?: number;
  /**
  * Enable automatic packet-capture for Custom Nat64 Port Map Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_mapping_nat64_creation_reco VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_mapping_nat64_creation_reco}
  */
  readonly customPortMappingNat64CreationReco?: number;
  /**
  * Enable automatic packet-capture for Custom Nat64 Port Map Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_port_mapping_nat64_deletion_reco VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_port_mapping_nat64_deletion_reco}
  */
  readonly customPortMappingNat64DeletionReco?: number;
  /**
  * Enable automatic packet-capture for Custom Dslite Session Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_session_event_dslite_creation_re VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_session_event_dslite_creation_re}
  */
  readonly customSessionEventDsliteCreationRe?: number;
  /**
  * Enable automatic packet-capture for Custom Dslite Session Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_session_event_dslite_deletion_re VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_session_event_dslite_deletion_re}
  */
  readonly customSessionEventDsliteDeletionRe?: number;
  /**
  * Enable automatic packet-capture for Custom FW4 Session Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_session_event_fw4_creation_recor VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_session_event_fw4_creation_recor}
  */
  readonly customSessionEventFw4CreationRecor?: number;
  /**
  * Enable automatic packet-capture for Custom FW4 Session Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_session_event_fw4_deletion_recor VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_session_event_fw4_deletion_recor}
  */
  readonly customSessionEventFw4DeletionRecor?: number;
  /**
  * Enable automatic packet-capture for Custom FW6 Session Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_session_event_fw6_creation_recor VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_session_event_fw6_creation_recor}
  */
  readonly customSessionEventFw6CreationRecor?: number;
  /**
  * Enable automatic packet-capture for Custom FW6 Session Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_session_event_fw6_deletion_recor VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_session_event_fw6_deletion_recor}
  */
  readonly customSessionEventFw6DeletionRecor?: number;
  /**
  * Enable automatic packet-capture for Custom Nat44 Session Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_session_event_nat44_creation_rec VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_session_event_nat44_creation_rec}
  */
  readonly customSessionEventNat44CreationRec?: number;
  /**
  * Enable automatic packet-capture for Custom Nat44 Session Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_session_event_nat44_deletion_rec VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_session_event_nat44_deletion_rec}
  */
  readonly customSessionEventNat44DeletionRec?: number;
  /**
  * Enable automatic packet-capture for Custom Nat64 Session Creation Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_session_event_nat64_creation_rec VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_session_event_nat64_creation_rec}
  */
  readonly customSessionEventNat64CreationRec?: number;
  /**
  * Enable automatic packet-capture for Custom Nat64 Session Deletion Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#custom_session_event_nat64_deletion_rec VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#custom_session_event_nat64_deletion_rec}
  */
  readonly customSessionEventNat64DeletionRec?: number;
  /**
  * Enable automatic packet-capture for Dslite Flow Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#dslite_records_sent_failure VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#dslite_records_sent_failure}
  */
  readonly dsliteRecordsSentFailure?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#duration VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for NAT44 Flow Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#nat44_records_sent_failure VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#nat44_records_sent_failure}
  */
  readonly nat44RecordsSentFailure?: number;
  /**
  * Enable automatic packet-capture for NAT64 Flow Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#nat64_records_sent_failure VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#nat64_records_sent_failure}
  */
  readonly nat64RecordsSentFailure?: number;
  /**
  * Enable automatic packet-capture for Netflow v5 Ext Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#netflow_v5_ext_records_sent_failure VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#netflow_v5_ext_records_sent_failure}
  */
  readonly netflowV5ExtRecordsSentFailure?: number;
  /**
  * Enable automatic packet-capture for Netflow v5 Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#netflow_v5_records_sent_failure VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#netflow_v5_records_sent_failure}
  */
  readonly netflowV5RecordsSentFailure?: number;
  /**
  * Enable automatic packet-capture for Port Batching Dslite Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#port_batching_dslite_records_sent_failu VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#port_batching_dslite_records_sent_failu}
  */
  readonly portBatchingDsliteRecordsSentFailu?: number;
  /**
  * Enable automatic packet-capture for Port Batching Nat44 Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#port_batching_nat44_records_sent_failur VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#port_batching_nat44_records_sent_failur}
  */
  readonly portBatchingNat44RecordsSentFailur?: number;
  /**
  * Enable automatic packet-capture for Port Batching Nat64 Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#port_batching_nat64_records_sent_failur VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#port_batching_nat64_records_sent_failur}
  */
  readonly portBatchingNat64RecordsSentFailur?: number;
  /**
  * Enable automatic packet-capture for Port Batching V2 Dslite Records Falied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#port_batching_v2_dslite_records_sent_fa VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#port_batching_v2_dslite_records_sent_fa}
  */
  readonly portBatchingV2DsliteRecordsSentFa?: number;
  /**
  * Enable automatic packet-capture for Port Batching V2 Nat44 Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#port_batching_v2_nat44_records_sent_fai VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#port_batching_v2_nat44_records_sent_fai}
  */
  readonly portBatchingV2Nat44RecordsSentFai?: number;
  /**
  * Enable automatic packet-capture for Port Batching V2 Nat64 Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#port_batching_v2_nat64_records_sent_fai VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#port_batching_v2_nat64_records_sent_fai}
  */
  readonly portBatchingV2Nat64RecordsSentFai?: number;
  /**
  * Enable automatic packet-capture for Port Mapping Dslite Event Records failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#port_mapping_dslite_records_sent_failur VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#port_mapping_dslite_records_sent_failur}
  */
  readonly portMappingDsliteRecordsSentFailur?: number;
  /**
  * Enable automatic packet-capture for Port Mapping Nat44 Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#port_mapping_nat44_records_sent_failure VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#port_mapping_nat44_records_sent_failure}
  */
  readonly portMappingNat44RecordsSentFailure?: number;
  /**
  * Enable automatic packet-capture for Port Mapping Nat64 Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#port_mapping_nat64_records_sent_failure VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#port_mapping_nat64_records_sent_failure}
  */
  readonly portMappingNat64RecordsSentFailure?: number;
  /**
  * Enable automatic packet-capture for Dslite Session Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#session_event_dslite_records_sent_failu VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#session_event_dslite_records_sent_failu}
  */
  readonly sessionEventDsliteRecordsSentFailu?: number;
  /**
  * Enable automatic packet-capture for FW4 Session Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#session_event_fw4_records_sent_failure VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#session_event_fw4_records_sent_failure}
  */
  readonly sessionEventFw4RecordsSentFailure?: number;
  /**
  * Enable automatic packet-capture for FW6 Session Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#session_event_fw6_records_sent_failure VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#session_event_fw6_records_sent_failure}
  */
  readonly sessionEventFw6RecordsSentFailure?: number;
  /**
  * Enable automatic packet-capture for Nat44 Session Event Records Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#session_event_nat44_records_sent_failur VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#session_event_nat44_records_sent_failur}
  */
  readonly sessionEventNat44RecordsSentFailur?: number;
  /**
  * Enable automatic packet-capture for Nat64 Session Event Records Falied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#session_event_nat64_records_sent_failur VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#session_event_nat64_records_sent_failur}
  */
  readonly sessionEventNat64RecordsSentFailur?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#threshold_exceeded_by VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#uuid VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsRateToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsRateOutputReference | VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_deny_reset_event_fw4_records_sen: cdktf.numberToTerraform(struct!.customDenyResetEventFw4RecordsSen),
    custom_deny_reset_event_fw6_records_sen: cdktf.numberToTerraform(struct!.customDenyResetEventFw6RecordsSen),
    custom_fw_iddos_entry_created_records_s: cdktf.numberToTerraform(struct!.customFwIddosEntryCreatedRecordsS),
    custom_fw_iddos_entry_deleted_records_s: cdktf.numberToTerraform(struct!.customFwIddosEntryDeletedRecordsS),
    custom_fw_sesn_limit_exceeded_records_s: cdktf.numberToTerraform(struct!.customFwSesnLimitExceededRecordsS),
    custom_gtp_c_tunnel_event_records_sent_: cdktf.numberToTerraform(struct!.customGtpCTunnelEventRecordsSent),
    custom_gtp_deny_event_records_sent_fail: cdktf.numberToTerraform(struct!.customGtpDenyEventRecordsSentFail),
    custom_gtp_info_event_records_sent_fail: cdktf.numberToTerraform(struct!.customGtpInfoEventRecordsSentFail),
    custom_gtp_u_tunnel_event_records_sent_: cdktf.numberToTerraform(struct!.customGtpUTunnelEventRecordsSent),
    custom_nat_iddos_l3_entry_created_recor: cdktf.numberToTerraform(struct!.customNatIddosL3EntryCreatedRecor),
    custom_nat_iddos_l3_entry_deleted_recor: cdktf.numberToTerraform(struct!.customNatIddosL3EntryDeletedRecor),
    custom_nat_iddos_l4_entry_created_recor: cdktf.numberToTerraform(struct!.customNatIddosL4EntryCreatedRecor),
    custom_nat_iddos_l4_entry_deleted_recor: cdktf.numberToTerraform(struct!.customNatIddosL4EntryDeletedRecor),
    custom_port_batching_dslite_creation_re: cdktf.numberToTerraform(struct!.customPortBatchingDsliteCreationRe),
    custom_port_batching_dslite_deletion_re: cdktf.numberToTerraform(struct!.customPortBatchingDsliteDeletionRe),
    custom_port_batching_nat44_creation_rec: cdktf.numberToTerraform(struct!.customPortBatchingNat44CreationRec),
    custom_port_batching_nat44_deletion_rec: cdktf.numberToTerraform(struct!.customPortBatchingNat44DeletionRec),
    custom_port_batching_nat64_creation_rec: cdktf.numberToTerraform(struct!.customPortBatchingNat64CreationRec),
    custom_port_batching_nat64_deletion_rec: cdktf.numberToTerraform(struct!.customPortBatchingNat64DeletionRec),
    custom_port_batching_v2_dslite_creation: cdktf.numberToTerraform(struct!.customPortBatchingV2DsliteCreation),
    custom_port_batching_v2_dslite_deletion: cdktf.numberToTerraform(struct!.customPortBatchingV2DsliteDeletion),
    custom_port_batching_v2_nat44_creation_: cdktf.numberToTerraform(struct!.customPortBatchingV2Nat44Creation),
    custom_port_batching_v2_nat44_deletion_: cdktf.numberToTerraform(struct!.customPortBatchingV2Nat44Deletion),
    custom_port_batching_v2_nat64_creation_: cdktf.numberToTerraform(struct!.customPortBatchingV2Nat64Creation),
    custom_port_batching_v2_nat64_deletion_: cdktf.numberToTerraform(struct!.customPortBatchingV2Nat64Deletion),
    custom_port_mapping_dslite_creation_rec: cdktf.numberToTerraform(struct!.customPortMappingDsliteCreationRec),
    custom_port_mapping_dslite_deletion_rec: cdktf.numberToTerraform(struct!.customPortMappingDsliteDeletionRec),
    custom_port_mapping_nat44_creation_reco: cdktf.numberToTerraform(struct!.customPortMappingNat44CreationReco),
    custom_port_mapping_nat44_deletion_reco: cdktf.numberToTerraform(struct!.customPortMappingNat44DeletionReco),
    custom_port_mapping_nat64_creation_reco: cdktf.numberToTerraform(struct!.customPortMappingNat64CreationReco),
    custom_port_mapping_nat64_deletion_reco: cdktf.numberToTerraform(struct!.customPortMappingNat64DeletionReco),
    custom_session_event_dslite_creation_re: cdktf.numberToTerraform(struct!.customSessionEventDsliteCreationRe),
    custom_session_event_dslite_deletion_re: cdktf.numberToTerraform(struct!.customSessionEventDsliteDeletionRe),
    custom_session_event_fw4_creation_recor: cdktf.numberToTerraform(struct!.customSessionEventFw4CreationRecor),
    custom_session_event_fw4_deletion_recor: cdktf.numberToTerraform(struct!.customSessionEventFw4DeletionRecor),
    custom_session_event_fw6_creation_recor: cdktf.numberToTerraform(struct!.customSessionEventFw6CreationRecor),
    custom_session_event_fw6_deletion_recor: cdktf.numberToTerraform(struct!.customSessionEventFw6DeletionRecor),
    custom_session_event_nat44_creation_rec: cdktf.numberToTerraform(struct!.customSessionEventNat44CreationRec),
    custom_session_event_nat44_deletion_rec: cdktf.numberToTerraform(struct!.customSessionEventNat44DeletionRec),
    custom_session_event_nat64_creation_rec: cdktf.numberToTerraform(struct!.customSessionEventNat64CreationRec),
    custom_session_event_nat64_deletion_rec: cdktf.numberToTerraform(struct!.customSessionEventNat64DeletionRec),
    dslite_records_sent_failure: cdktf.numberToTerraform(struct!.dsliteRecordsSentFailure),
    duration: cdktf.numberToTerraform(struct!.duration),
    nat44_records_sent_failure: cdktf.numberToTerraform(struct!.nat44RecordsSentFailure),
    nat64_records_sent_failure: cdktf.numberToTerraform(struct!.nat64RecordsSentFailure),
    netflow_v5_ext_records_sent_failure: cdktf.numberToTerraform(struct!.netflowV5ExtRecordsSentFailure),
    netflow_v5_records_sent_failure: cdktf.numberToTerraform(struct!.netflowV5RecordsSentFailure),
    port_batching_dslite_records_sent_failu: cdktf.numberToTerraform(struct!.portBatchingDsliteRecordsSentFailu),
    port_batching_nat44_records_sent_failur: cdktf.numberToTerraform(struct!.portBatchingNat44RecordsSentFailur),
    port_batching_nat64_records_sent_failur: cdktf.numberToTerraform(struct!.portBatchingNat64RecordsSentFailur),
    port_batching_v2_dslite_records_sent_fa: cdktf.numberToTerraform(struct!.portBatchingV2DsliteRecordsSentFa),
    port_batching_v2_nat44_records_sent_fai: cdktf.numberToTerraform(struct!.portBatchingV2Nat44RecordsSentFai),
    port_batching_v2_nat64_records_sent_fai: cdktf.numberToTerraform(struct!.portBatchingV2Nat64RecordsSentFai),
    port_mapping_dslite_records_sent_failur: cdktf.numberToTerraform(struct!.portMappingDsliteRecordsSentFailur),
    port_mapping_nat44_records_sent_failure: cdktf.numberToTerraform(struct!.portMappingNat44RecordsSentFailure),
    port_mapping_nat64_records_sent_failure: cdktf.numberToTerraform(struct!.portMappingNat64RecordsSentFailure),
    session_event_dslite_records_sent_failu: cdktf.numberToTerraform(struct!.sessionEventDsliteRecordsSentFailu),
    session_event_fw4_records_sent_failure: cdktf.numberToTerraform(struct!.sessionEventFw4RecordsSentFailure),
    session_event_fw6_records_sent_failure: cdktf.numberToTerraform(struct!.sessionEventFw6RecordsSentFailure),
    session_event_nat44_records_sent_failur: cdktf.numberToTerraform(struct!.sessionEventNat44RecordsSentFailur),
    session_event_nat64_records_sent_failur: cdktf.numberToTerraform(struct!.sessionEventNat64RecordsSentFailur),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsRateToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsRateOutputReference | VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_deny_reset_event_fw4_records_sen: {
      value: cdktf.numberToHclTerraform(struct!.customDenyResetEventFw4RecordsSen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_deny_reset_event_fw6_records_sen: {
      value: cdktf.numberToHclTerraform(struct!.customDenyResetEventFw6RecordsSen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_fw_iddos_entry_created_records_s: {
      value: cdktf.numberToHclTerraform(struct!.customFwIddosEntryCreatedRecordsS),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_fw_iddos_entry_deleted_records_s: {
      value: cdktf.numberToHclTerraform(struct!.customFwIddosEntryDeletedRecordsS),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_fw_sesn_limit_exceeded_records_s: {
      value: cdktf.numberToHclTerraform(struct!.customFwSesnLimitExceededRecordsS),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_gtp_c_tunnel_event_records_sent_: {
      value: cdktf.numberToHclTerraform(struct!.customGtpCTunnelEventRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_gtp_deny_event_records_sent_fail: {
      value: cdktf.numberToHclTerraform(struct!.customGtpDenyEventRecordsSentFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_gtp_info_event_records_sent_fail: {
      value: cdktf.numberToHclTerraform(struct!.customGtpInfoEventRecordsSentFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_gtp_u_tunnel_event_records_sent_: {
      value: cdktf.numberToHclTerraform(struct!.customGtpUTunnelEventRecordsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_nat_iddos_l3_entry_created_recor: {
      value: cdktf.numberToHclTerraform(struct!.customNatIddosL3EntryCreatedRecor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_nat_iddos_l3_entry_deleted_recor: {
      value: cdktf.numberToHclTerraform(struct!.customNatIddosL3EntryDeletedRecor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_nat_iddos_l4_entry_created_recor: {
      value: cdktf.numberToHclTerraform(struct!.customNatIddosL4EntryCreatedRecor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_nat_iddos_l4_entry_deleted_recor: {
      value: cdktf.numberToHclTerraform(struct!.customNatIddosL4EntryDeletedRecor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_dslite_creation_re: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingDsliteCreationRe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_dslite_deletion_re: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingDsliteDeletionRe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_nat44_creation_rec: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingNat44CreationRec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_nat44_deletion_rec: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingNat44DeletionRec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_nat64_creation_rec: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingNat64CreationRec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_nat64_deletion_rec: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingNat64DeletionRec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_v2_dslite_creation: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingV2DsliteCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_v2_dslite_deletion: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingV2DsliteDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_v2_nat44_creation_: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingV2Nat44Creation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_v2_nat44_deletion_: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingV2Nat44Deletion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_v2_nat64_creation_: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingV2Nat64Creation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_batching_v2_nat64_deletion_: {
      value: cdktf.numberToHclTerraform(struct!.customPortBatchingV2Nat64Deletion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_mapping_dslite_creation_rec: {
      value: cdktf.numberToHclTerraform(struct!.customPortMappingDsliteCreationRec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_mapping_dslite_deletion_rec: {
      value: cdktf.numberToHclTerraform(struct!.customPortMappingDsliteDeletionRec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_mapping_nat44_creation_reco: {
      value: cdktf.numberToHclTerraform(struct!.customPortMappingNat44CreationReco),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_mapping_nat44_deletion_reco: {
      value: cdktf.numberToHclTerraform(struct!.customPortMappingNat44DeletionReco),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_mapping_nat64_creation_reco: {
      value: cdktf.numberToHclTerraform(struct!.customPortMappingNat64CreationReco),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_port_mapping_nat64_deletion_reco: {
      value: cdktf.numberToHclTerraform(struct!.customPortMappingNat64DeletionReco),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_dslite_creation_re: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventDsliteCreationRe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_dslite_deletion_re: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventDsliteDeletionRe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_fw4_creation_recor: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventFw4CreationRecor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_fw4_deletion_recor: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventFw4DeletionRecor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_fw6_creation_recor: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventFw6CreationRecor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_fw6_deletion_recor: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventFw6DeletionRecor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_nat44_creation_rec: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventNat44CreationRec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_nat44_deletion_rec: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventNat44DeletionRec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_nat64_creation_rec: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventNat64CreationRec),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    custom_session_event_nat64_deletion_rec: {
      value: cdktf.numberToHclTerraform(struct!.customSessionEventNat64DeletionRec),
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
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
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
    nat64_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.nat64RecordsSentFailure),
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
    netflow_v5_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.netflowV5RecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_batching_dslite_records_sent_failu: {
      value: cdktf.numberToHclTerraform(struct!.portBatchingDsliteRecordsSentFailu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_batching_nat44_records_sent_failur: {
      value: cdktf.numberToHclTerraform(struct!.portBatchingNat44RecordsSentFailur),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_batching_nat64_records_sent_failur: {
      value: cdktf.numberToHclTerraform(struct!.portBatchingNat64RecordsSentFailur),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_batching_v2_dslite_records_sent_fa: {
      value: cdktf.numberToHclTerraform(struct!.portBatchingV2DsliteRecordsSentFa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_batching_v2_nat44_records_sent_fai: {
      value: cdktf.numberToHclTerraform(struct!.portBatchingV2Nat44RecordsSentFai),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_batching_v2_nat64_records_sent_fai: {
      value: cdktf.numberToHclTerraform(struct!.portBatchingV2Nat64RecordsSentFai),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_mapping_dslite_records_sent_failur: {
      value: cdktf.numberToHclTerraform(struct!.portMappingDsliteRecordsSentFailur),
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
    port_mapping_nat64_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.portMappingNat64RecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_event_dslite_records_sent_failu: {
      value: cdktf.numberToHclTerraform(struct!.sessionEventDsliteRecordsSentFailu),
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
    session_event_fw6_records_sent_failure: {
      value: cdktf.numberToHclTerraform(struct!.sessionEventFw6RecordsSentFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_event_nat44_records_sent_failur: {
      value: cdktf.numberToHclTerraform(struct!.sessionEventNat44RecordsSentFailur),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_event_nat64_records_sent_failur: {
      value: cdktf.numberToHclTerraform(struct!.sessionEventNat64RecordsSentFailur),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_exceeded_by: {
      value: cdktf.numberToHclTerraform(struct!.thresholdExceededBy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customDenyResetEventFw4RecordsSen !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDenyResetEventFw4RecordsSen = this._customDenyResetEventFw4RecordsSen;
    }
    if (this._customDenyResetEventFw6RecordsSen !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDenyResetEventFw6RecordsSen = this._customDenyResetEventFw6RecordsSen;
    }
    if (this._customFwIddosEntryCreatedRecordsS !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFwIddosEntryCreatedRecordsS = this._customFwIddosEntryCreatedRecordsS;
    }
    if (this._customFwIddosEntryDeletedRecordsS !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFwIddosEntryDeletedRecordsS = this._customFwIddosEntryDeletedRecordsS;
    }
    if (this._customFwSesnLimitExceededRecordsS !== undefined) {
      hasAnyValues = true;
      internalValueResult.customFwSesnLimitExceededRecordsS = this._customFwSesnLimitExceededRecordsS;
    }
    if (this._customGtpCTunnelEventRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customGtpCTunnelEventRecordsSent = this._customGtpCTunnelEventRecordsSent;
    }
    if (this._customGtpDenyEventRecordsSentFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.customGtpDenyEventRecordsSentFail = this._customGtpDenyEventRecordsSentFail;
    }
    if (this._customGtpInfoEventRecordsSentFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.customGtpInfoEventRecordsSentFail = this._customGtpInfoEventRecordsSentFail;
    }
    if (this._customGtpUTunnelEventRecordsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.customGtpUTunnelEventRecordsSent = this._customGtpUTunnelEventRecordsSent;
    }
    if (this._customNatIddosL3EntryCreatedRecor !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNatIddosL3EntryCreatedRecor = this._customNatIddosL3EntryCreatedRecor;
    }
    if (this._customNatIddosL3EntryDeletedRecor !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNatIddosL3EntryDeletedRecor = this._customNatIddosL3EntryDeletedRecor;
    }
    if (this._customNatIddosL4EntryCreatedRecor !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNatIddosL4EntryCreatedRecor = this._customNatIddosL4EntryCreatedRecor;
    }
    if (this._customNatIddosL4EntryDeletedRecor !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNatIddosL4EntryDeletedRecor = this._customNatIddosL4EntryDeletedRecor;
    }
    if (this._customPortBatchingDsliteCreationRe !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingDsliteCreationRe = this._customPortBatchingDsliteCreationRe;
    }
    if (this._customPortBatchingDsliteDeletionRe !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingDsliteDeletionRe = this._customPortBatchingDsliteDeletionRe;
    }
    if (this._customPortBatchingNat44CreationRec !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingNat44CreationRec = this._customPortBatchingNat44CreationRec;
    }
    if (this._customPortBatchingNat44DeletionRec !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingNat44DeletionRec = this._customPortBatchingNat44DeletionRec;
    }
    if (this._customPortBatchingNat64CreationRec !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingNat64CreationRec = this._customPortBatchingNat64CreationRec;
    }
    if (this._customPortBatchingNat64DeletionRec !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingNat64DeletionRec = this._customPortBatchingNat64DeletionRec;
    }
    if (this._customPortBatchingV2DsliteCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingV2DsliteCreation = this._customPortBatchingV2DsliteCreation;
    }
    if (this._customPortBatchingV2DsliteDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingV2DsliteDeletion = this._customPortBatchingV2DsliteDeletion;
    }
    if (this._customPortBatchingV2Nat44Creation !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingV2Nat44Creation = this._customPortBatchingV2Nat44Creation;
    }
    if (this._customPortBatchingV2Nat44Deletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingV2Nat44Deletion = this._customPortBatchingV2Nat44Deletion;
    }
    if (this._customPortBatchingV2Nat64Creation !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingV2Nat64Creation = this._customPortBatchingV2Nat64Creation;
    }
    if (this._customPortBatchingV2Nat64Deletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortBatchingV2Nat64Deletion = this._customPortBatchingV2Nat64Deletion;
    }
    if (this._customPortMappingDsliteCreationRec !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortMappingDsliteCreationRec = this._customPortMappingDsliteCreationRec;
    }
    if (this._customPortMappingDsliteDeletionRec !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortMappingDsliteDeletionRec = this._customPortMappingDsliteDeletionRec;
    }
    if (this._customPortMappingNat44CreationReco !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortMappingNat44CreationReco = this._customPortMappingNat44CreationReco;
    }
    if (this._customPortMappingNat44DeletionReco !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortMappingNat44DeletionReco = this._customPortMappingNat44DeletionReco;
    }
    if (this._customPortMappingNat64CreationReco !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortMappingNat64CreationReco = this._customPortMappingNat64CreationReco;
    }
    if (this._customPortMappingNat64DeletionReco !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPortMappingNat64DeletionReco = this._customPortMappingNat64DeletionReco;
    }
    if (this._customSessionEventDsliteCreationRe !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventDsliteCreationRe = this._customSessionEventDsliteCreationRe;
    }
    if (this._customSessionEventDsliteDeletionRe !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventDsliteDeletionRe = this._customSessionEventDsliteDeletionRe;
    }
    if (this._customSessionEventFw4CreationRecor !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventFw4CreationRecor = this._customSessionEventFw4CreationRecor;
    }
    if (this._customSessionEventFw4DeletionRecor !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventFw4DeletionRecor = this._customSessionEventFw4DeletionRecor;
    }
    if (this._customSessionEventFw6CreationRecor !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventFw6CreationRecor = this._customSessionEventFw6CreationRecor;
    }
    if (this._customSessionEventFw6DeletionRecor !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventFw6DeletionRecor = this._customSessionEventFw6DeletionRecor;
    }
    if (this._customSessionEventNat44CreationRec !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventNat44CreationRec = this._customSessionEventNat44CreationRec;
    }
    if (this._customSessionEventNat44DeletionRec !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventNat44DeletionRec = this._customSessionEventNat44DeletionRec;
    }
    if (this._customSessionEventNat64CreationRec !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventNat64CreationRec = this._customSessionEventNat64CreationRec;
    }
    if (this._customSessionEventNat64DeletionRec !== undefined) {
      hasAnyValues = true;
      internalValueResult.customSessionEventNat64DeletionRec = this._customSessionEventNat64DeletionRec;
    }
    if (this._dsliteRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsliteRecordsSentFailure = this._dsliteRecordsSentFailure;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._nat44RecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat44RecordsSentFailure = this._nat44RecordsSentFailure;
    }
    if (this._nat64RecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64RecordsSentFailure = this._nat64RecordsSentFailure;
    }
    if (this._netflowV5ExtRecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowV5ExtRecordsSentFailure = this._netflowV5ExtRecordsSentFailure;
    }
    if (this._netflowV5RecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowV5RecordsSentFailure = this._netflowV5RecordsSentFailure;
    }
    if (this._portBatchingDsliteRecordsSentFailu !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchingDsliteRecordsSentFailu = this._portBatchingDsliteRecordsSentFailu;
    }
    if (this._portBatchingNat44RecordsSentFailur !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchingNat44RecordsSentFailur = this._portBatchingNat44RecordsSentFailur;
    }
    if (this._portBatchingNat64RecordsSentFailur !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchingNat64RecordsSentFailur = this._portBatchingNat64RecordsSentFailur;
    }
    if (this._portBatchingV2DsliteRecordsSentFa !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchingV2DsliteRecordsSentFa = this._portBatchingV2DsliteRecordsSentFa;
    }
    if (this._portBatchingV2Nat44RecordsSentFai !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchingV2Nat44RecordsSentFai = this._portBatchingV2Nat44RecordsSentFai;
    }
    if (this._portBatchingV2Nat64RecordsSentFai !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBatchingV2Nat64RecordsSentFai = this._portBatchingV2Nat64RecordsSentFai;
    }
    if (this._portMappingDsliteRecordsSentFailur !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMappingDsliteRecordsSentFailur = this._portMappingDsliteRecordsSentFailur;
    }
    if (this._portMappingNat44RecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMappingNat44RecordsSentFailure = this._portMappingNat44RecordsSentFailure;
    }
    if (this._portMappingNat64RecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.portMappingNat64RecordsSentFailure = this._portMappingNat64RecordsSentFailure;
    }
    if (this._sessionEventDsliteRecordsSentFailu !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionEventDsliteRecordsSentFailu = this._sessionEventDsliteRecordsSentFailu;
    }
    if (this._sessionEventFw4RecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionEventFw4RecordsSentFailure = this._sessionEventFw4RecordsSentFailure;
    }
    if (this._sessionEventFw6RecordsSentFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionEventFw6RecordsSentFailure = this._sessionEventFw6RecordsSentFailure;
    }
    if (this._sessionEventNat44RecordsSentFailur !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionEventNat44RecordsSentFailur = this._sessionEventNat44RecordsSentFailur;
    }
    if (this._sessionEventNat64RecordsSentFailur !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionEventNat64RecordsSentFailur = this._sessionEventNat64RecordsSentFailur;
    }
    if (this._thresholdExceededBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdExceededBy = this._thresholdExceededBy;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._customDenyResetEventFw4RecordsSen = undefined;
      this._customDenyResetEventFw6RecordsSen = undefined;
      this._customFwIddosEntryCreatedRecordsS = undefined;
      this._customFwIddosEntryDeletedRecordsS = undefined;
      this._customFwSesnLimitExceededRecordsS = undefined;
      this._customGtpCTunnelEventRecordsSent = undefined;
      this._customGtpDenyEventRecordsSentFail = undefined;
      this._customGtpInfoEventRecordsSentFail = undefined;
      this._customGtpUTunnelEventRecordsSent = undefined;
      this._customNatIddosL3EntryCreatedRecor = undefined;
      this._customNatIddosL3EntryDeletedRecor = undefined;
      this._customNatIddosL4EntryCreatedRecor = undefined;
      this._customNatIddosL4EntryDeletedRecor = undefined;
      this._customPortBatchingDsliteCreationRe = undefined;
      this._customPortBatchingDsliteDeletionRe = undefined;
      this._customPortBatchingNat44CreationRec = undefined;
      this._customPortBatchingNat44DeletionRec = undefined;
      this._customPortBatchingNat64CreationRec = undefined;
      this._customPortBatchingNat64DeletionRec = undefined;
      this._customPortBatchingV2DsliteCreation = undefined;
      this._customPortBatchingV2DsliteDeletion = undefined;
      this._customPortBatchingV2Nat44Creation = undefined;
      this._customPortBatchingV2Nat44Deletion = undefined;
      this._customPortBatchingV2Nat64Creation = undefined;
      this._customPortBatchingV2Nat64Deletion = undefined;
      this._customPortMappingDsliteCreationRec = undefined;
      this._customPortMappingDsliteDeletionRec = undefined;
      this._customPortMappingNat44CreationReco = undefined;
      this._customPortMappingNat44DeletionReco = undefined;
      this._customPortMappingNat64CreationReco = undefined;
      this._customPortMappingNat64DeletionReco = undefined;
      this._customSessionEventDsliteCreationRe = undefined;
      this._customSessionEventDsliteDeletionRe = undefined;
      this._customSessionEventFw4CreationRecor = undefined;
      this._customSessionEventFw4DeletionRecor = undefined;
      this._customSessionEventFw6CreationRecor = undefined;
      this._customSessionEventFw6DeletionRecor = undefined;
      this._customSessionEventNat44CreationRec = undefined;
      this._customSessionEventNat44DeletionRec = undefined;
      this._customSessionEventNat64CreationRec = undefined;
      this._customSessionEventNat64DeletionRec = undefined;
      this._dsliteRecordsSentFailure = undefined;
      this._duration = undefined;
      this._nat44RecordsSentFailure = undefined;
      this._nat64RecordsSentFailure = undefined;
      this._netflowV5ExtRecordsSentFailure = undefined;
      this._netflowV5RecordsSentFailure = undefined;
      this._portBatchingDsliteRecordsSentFailu = undefined;
      this._portBatchingNat44RecordsSentFailur = undefined;
      this._portBatchingNat64RecordsSentFailur = undefined;
      this._portBatchingV2DsliteRecordsSentFa = undefined;
      this._portBatchingV2Nat44RecordsSentFai = undefined;
      this._portBatchingV2Nat64RecordsSentFai = undefined;
      this._portMappingDsliteRecordsSentFailur = undefined;
      this._portMappingNat44RecordsSentFailure = undefined;
      this._portMappingNat64RecordsSentFailure = undefined;
      this._sessionEventDsliteRecordsSentFailu = undefined;
      this._sessionEventFw4RecordsSentFailure = undefined;
      this._sessionEventFw6RecordsSentFailure = undefined;
      this._sessionEventNat44RecordsSentFailur = undefined;
      this._sessionEventNat64RecordsSentFailur = undefined;
      this._thresholdExceededBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._customDenyResetEventFw4RecordsSen = value.customDenyResetEventFw4RecordsSen;
      this._customDenyResetEventFw6RecordsSen = value.customDenyResetEventFw6RecordsSen;
      this._customFwIddosEntryCreatedRecordsS = value.customFwIddosEntryCreatedRecordsS;
      this._customFwIddosEntryDeletedRecordsS = value.customFwIddosEntryDeletedRecordsS;
      this._customFwSesnLimitExceededRecordsS = value.customFwSesnLimitExceededRecordsS;
      this._customGtpCTunnelEventRecordsSent = value.customGtpCTunnelEventRecordsSent;
      this._customGtpDenyEventRecordsSentFail = value.customGtpDenyEventRecordsSentFail;
      this._customGtpInfoEventRecordsSentFail = value.customGtpInfoEventRecordsSentFail;
      this._customGtpUTunnelEventRecordsSent = value.customGtpUTunnelEventRecordsSent;
      this._customNatIddosL3EntryCreatedRecor = value.customNatIddosL3EntryCreatedRecor;
      this._customNatIddosL3EntryDeletedRecor = value.customNatIddosL3EntryDeletedRecor;
      this._customNatIddosL4EntryCreatedRecor = value.customNatIddosL4EntryCreatedRecor;
      this._customNatIddosL4EntryDeletedRecor = value.customNatIddosL4EntryDeletedRecor;
      this._customPortBatchingDsliteCreationRe = value.customPortBatchingDsliteCreationRe;
      this._customPortBatchingDsliteDeletionRe = value.customPortBatchingDsliteDeletionRe;
      this._customPortBatchingNat44CreationRec = value.customPortBatchingNat44CreationRec;
      this._customPortBatchingNat44DeletionRec = value.customPortBatchingNat44DeletionRec;
      this._customPortBatchingNat64CreationRec = value.customPortBatchingNat64CreationRec;
      this._customPortBatchingNat64DeletionRec = value.customPortBatchingNat64DeletionRec;
      this._customPortBatchingV2DsliteCreation = value.customPortBatchingV2DsliteCreation;
      this._customPortBatchingV2DsliteDeletion = value.customPortBatchingV2DsliteDeletion;
      this._customPortBatchingV2Nat44Creation = value.customPortBatchingV2Nat44Creation;
      this._customPortBatchingV2Nat44Deletion = value.customPortBatchingV2Nat44Deletion;
      this._customPortBatchingV2Nat64Creation = value.customPortBatchingV2Nat64Creation;
      this._customPortBatchingV2Nat64Deletion = value.customPortBatchingV2Nat64Deletion;
      this._customPortMappingDsliteCreationRec = value.customPortMappingDsliteCreationRec;
      this._customPortMappingDsliteDeletionRec = value.customPortMappingDsliteDeletionRec;
      this._customPortMappingNat44CreationReco = value.customPortMappingNat44CreationReco;
      this._customPortMappingNat44DeletionReco = value.customPortMappingNat44DeletionReco;
      this._customPortMappingNat64CreationReco = value.customPortMappingNat64CreationReco;
      this._customPortMappingNat64DeletionReco = value.customPortMappingNat64DeletionReco;
      this._customSessionEventDsliteCreationRe = value.customSessionEventDsliteCreationRe;
      this._customSessionEventDsliteDeletionRe = value.customSessionEventDsliteDeletionRe;
      this._customSessionEventFw4CreationRecor = value.customSessionEventFw4CreationRecor;
      this._customSessionEventFw4DeletionRecor = value.customSessionEventFw4DeletionRecor;
      this._customSessionEventFw6CreationRecor = value.customSessionEventFw6CreationRecor;
      this._customSessionEventFw6DeletionRecor = value.customSessionEventFw6DeletionRecor;
      this._customSessionEventNat44CreationRec = value.customSessionEventNat44CreationRec;
      this._customSessionEventNat44DeletionRec = value.customSessionEventNat44DeletionRec;
      this._customSessionEventNat64CreationRec = value.customSessionEventNat64CreationRec;
      this._customSessionEventNat64DeletionRec = value.customSessionEventNat64DeletionRec;
      this._dsliteRecordsSentFailure = value.dsliteRecordsSentFailure;
      this._duration = value.duration;
      this._nat44RecordsSentFailure = value.nat44RecordsSentFailure;
      this._nat64RecordsSentFailure = value.nat64RecordsSentFailure;
      this._netflowV5ExtRecordsSentFailure = value.netflowV5ExtRecordsSentFailure;
      this._netflowV5RecordsSentFailure = value.netflowV5RecordsSentFailure;
      this._portBatchingDsliteRecordsSentFailu = value.portBatchingDsliteRecordsSentFailu;
      this._portBatchingNat44RecordsSentFailur = value.portBatchingNat44RecordsSentFailur;
      this._portBatchingNat64RecordsSentFailur = value.portBatchingNat64RecordsSentFailur;
      this._portBatchingV2DsliteRecordsSentFa = value.portBatchingV2DsliteRecordsSentFa;
      this._portBatchingV2Nat44RecordsSentFai = value.portBatchingV2Nat44RecordsSentFai;
      this._portBatchingV2Nat64RecordsSentFai = value.portBatchingV2Nat64RecordsSentFai;
      this._portMappingDsliteRecordsSentFailur = value.portMappingDsliteRecordsSentFailur;
      this._portMappingNat44RecordsSentFailure = value.portMappingNat44RecordsSentFailure;
      this._portMappingNat64RecordsSentFailure = value.portMappingNat64RecordsSentFailure;
      this._sessionEventDsliteRecordsSentFailu = value.sessionEventDsliteRecordsSentFailu;
      this._sessionEventFw4RecordsSentFailure = value.sessionEventFw4RecordsSentFailure;
      this._sessionEventFw6RecordsSentFailure = value.sessionEventFw6RecordsSentFailure;
      this._sessionEventNat44RecordsSentFailur = value.sessionEventNat44RecordsSentFailur;
      this._sessionEventNat64RecordsSentFailur = value.sessionEventNat64RecordsSentFailur;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._uuid = value.uuid;
    }
  }

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

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // threshold_exceeded_by - computed: false, optional: true, required: false
  private _thresholdExceededBy?: number; 
  public get thresholdExceededBy() {
    return this.getNumberAttribute('threshold_exceeded_by');
  }
  public set thresholdExceededBy(value: number) {
    this._thresholdExceededBy = value;
  }
  public resetThresholdExceededBy() {
    this._thresholdExceededBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdExceededByInput() {
    return this._thresholdExceededBy;
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
}
export interface VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsSeverity {
  /**
  * Enable packet capture on all drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#drop VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#drop}
  */
  readonly drop?: number;
  /**
  * Enable packet capture on all alert drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#drop_alert VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#drop_alert}
  */
  readonly dropAlert?: number;
  /**
  * Enable packet capture on all critical drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#drop_critical VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#drop_critical}
  */
  readonly dropCritical?: number;
  /**
  * Enable packet capture on all warning drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#drop_warning VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#drop_warning}
  */
  readonly dropWarning?: number;
  /**
  * Enable packet capture on all error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#error VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#error}
  */
  readonly error?: number;
  /**
  * Enable packet capture on all alert error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#error_alert VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#error_alert}
  */
  readonly errorAlert?: number;
  /**
  * Enable packet capture on all critical error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#error_critical VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#error_critical}
  */
  readonly errorCritical?: number;
  /**
  * Enable packet capture on all warning error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#error_warning VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#error_warning}
  */
  readonly errorWarning?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#uuid VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsSeverityToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsSeverityOutputReference | VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsSeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop: cdktf.numberToTerraform(struct!.drop),
    drop_alert: cdktf.numberToTerraform(struct!.dropAlert),
    drop_critical: cdktf.numberToTerraform(struct!.dropCritical),
    drop_warning: cdktf.numberToTerraform(struct!.dropWarning),
    error: cdktf.numberToTerraform(struct!.error),
    error_alert: cdktf.numberToTerraform(struct!.errorAlert),
    error_critical: cdktf.numberToTerraform(struct!.errorCritical),
    error_warning: cdktf.numberToTerraform(struct!.errorWarning),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsSeverityToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsSeverityOutputReference | VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsSeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop: {
      value: cdktf.numberToHclTerraform(struct!.drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_alert: {
      value: cdktf.numberToHclTerraform(struct!.dropAlert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_critical: {
      value: cdktf.numberToHclTerraform(struct!.dropCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_warning: {
      value: cdktf.numberToHclTerraform(struct!.dropWarning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error: {
      value: cdktf.numberToHclTerraform(struct!.error),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_alert: {
      value: cdktf.numberToHclTerraform(struct!.errorAlert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_critical: {
      value: cdktf.numberToHclTerraform(struct!.errorCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_warning: {
      value: cdktf.numberToHclTerraform(struct!.errorWarning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsSeverityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsSeverity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    if (this._dropAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropAlert = this._dropAlert;
    }
    if (this._dropCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropCritical = this._dropCritical;
    }
    if (this._dropWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropWarning = this._dropWarning;
    }
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._errorAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorAlert = this._errorAlert;
    }
    if (this._errorCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorCritical = this._errorCritical;
    }
    if (this._errorWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorWarning = this._errorWarning;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsSeverity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._drop = undefined;
      this._dropAlert = undefined;
      this._dropCritical = undefined;
      this._dropWarning = undefined;
      this._error = undefined;
      this._errorAlert = undefined;
      this._errorCritical = undefined;
      this._errorWarning = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._drop = value.drop;
      this._dropAlert = value.dropAlert;
      this._dropCritical = value.dropCritical;
      this._dropWarning = value.dropWarning;
      this._error = value.error;
      this._errorAlert = value.errorAlert;
      this._errorCritical = value.errorCritical;
      this._errorWarning = value.errorWarning;
      this._uuid = value.uuid;
    }
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: number; 
  public get drop() {
    return this.getNumberAttribute('drop');
  }
  public set drop(value: number) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // drop_alert - computed: false, optional: true, required: false
  private _dropAlert?: number; 
  public get dropAlert() {
    return this.getNumberAttribute('drop_alert');
  }
  public set dropAlert(value: number) {
    this._dropAlert = value;
  }
  public resetDropAlert() {
    this._dropAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropAlertInput() {
    return this._dropAlert;
  }

  // drop_critical - computed: false, optional: true, required: false
  private _dropCritical?: number; 
  public get dropCritical() {
    return this.getNumberAttribute('drop_critical');
  }
  public set dropCritical(value: number) {
    this._dropCritical = value;
  }
  public resetDropCritical() {
    this._dropCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropCriticalInput() {
    return this._dropCritical;
  }

  // drop_warning - computed: false, optional: true, required: false
  private _dropWarning?: number; 
  public get dropWarning() {
    return this.getNumberAttribute('drop_warning');
  }
  public set dropWarning(value: number) {
    this._dropWarning = value;
  }
  public resetDropWarning() {
    this._dropWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropWarningInput() {
    return this._dropWarning;
  }

  // error - computed: false, optional: true, required: false
  private _error?: number; 
  public get error() {
    return this.getNumberAttribute('error');
  }
  public set error(value: number) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // error_alert - computed: false, optional: true, required: false
  private _errorAlert?: number; 
  public get errorAlert() {
    return this.getNumberAttribute('error_alert');
  }
  public set errorAlert(value: number) {
    this._errorAlert = value;
  }
  public resetErrorAlert() {
    this._errorAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorAlertInput() {
    return this._errorAlert;
  }

  // error_critical - computed: false, optional: true, required: false
  private _errorCritical?: number; 
  public get errorCritical() {
    return this.getNumberAttribute('error_critical');
  }
  public set errorCritical(value: number) {
    this._errorCritical = value;
  }
  public resetErrorCritical() {
    this._errorCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCriticalInput() {
    return this._errorCritical;
  }

  // error_warning - computed: false, optional: true, required: false
  private _errorWarning?: number; 
  public get errorWarning() {
    return this.getNumberAttribute('error_warning');
  }
  public set errorWarning(value: number) {
    this._errorWarning = value;
  }
  public resetErrorWarning() {
    this._errorWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorWarningInput() {
    return this._errorWarning;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl thunder_visibility_packet_capture_object_templates_netflow_monitor_tmpl}
*/
export class VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_netflow_monitor_tmpl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmpl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_netflow_monitor_tmpl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_netflow_monitor_tmpl thunder_visibility_packet_capture_object_templates_netflow_monitor_tmpl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_netflow_monitor_tmpl',
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
    this._captureConfig = config.captureConfig;
    this._id = config.id;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._triggerStatsInc.internalValue = config.triggerStatsInc;
    this._triggerStatsRate.internalValue = config.triggerStatsRate;
    this._triggerStatsSeverity.internalValue = config.triggerStatsSeverity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capture_config - computed: false, optional: true, required: false
  private _captureConfig?: string; 
  public get captureConfig() {
    return this.getStringAttribute('capture_config');
  }
  public set captureConfig(value: string) {
    this._captureConfig = value;
  }
  public resetCaptureConfig() {
    this._captureConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigInput() {
    return this._captureConfig;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // trigger_stats_inc - computed: false, optional: true, required: false
  private _triggerStatsInc = new VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsInc) {
    this._triggerStatsInc.internalValue = value;
  }
  public resetTriggerStatsInc() {
    this._triggerStatsInc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsIncInput() {
    return this._triggerStatsInc.internalValue;
  }

  // trigger_stats_rate - computed: false, optional: true, required: false
  private _triggerStatsRate = new VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsRateOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsRate) {
    this._triggerStatsRate.internalValue = value;
  }
  public resetTriggerStatsRate() {
    this._triggerStatsRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsRateInput() {
    return this._triggerStatsRate.internalValue;
  }

  // trigger_stats_severity - computed: false, optional: true, required: false
  private _triggerStatsSeverity = new VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsSeverityOutputReference(this, "trigger_stats_severity");
  public get triggerStatsSeverity() {
    return this._triggerStatsSeverity;
  }
  public putTriggerStatsSeverity(value: VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsSeverity) {
    this._triggerStatsSeverity.internalValue = value;
  }
  public resetTriggerStatsSeverity() {
    this._triggerStatsSeverity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsSeverityInput() {
    return this._triggerStatsSeverity.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capture_config: cdktf.stringToTerraform(this._captureConfig),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      trigger_stats_inc: visibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsRateToTerraform(this._triggerStatsRate.internalValue),
      trigger_stats_severity: visibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsSeverityToTerraform(this._triggerStatsSeverity.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capture_config: {
        value: cdktf.stringToHclTerraform(this._captureConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
      trigger_stats_inc: {
        value: visibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsIncList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsRateToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsRateList",
      },
      trigger_stats_severity: {
        value: visibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsSeverityToHclTerraform(this._triggerStatsSeverity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesNetflowMonitorTmplTriggerStatsSeverityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
