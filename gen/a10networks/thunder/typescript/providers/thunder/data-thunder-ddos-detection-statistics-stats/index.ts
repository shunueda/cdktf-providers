// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDetectionStatisticsStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#id DataThunderDdosDetectionStatisticsStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#stats DataThunderDdosDetectionStatisticsStats#stats}
  */
  readonly stats?: DataThunderDdosDetectionStatisticsStatsStats;
}
export interface DataThunderDdosDetectionStatisticsStatsStats {
  /**
  * Detection Agent Not Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#agent_not_found DataThunderDdosDetectionStatisticsStats#agent_not_found}
  */
  readonly agentNotFound?: number;
  /**
  * Database Network IP Entry Restoring Attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#db_n_ip_restore_attempt DataThunderDdosDetectionStatisticsStats#db_n_ip_restore_attempt}
  */
  readonly dbNIpRestoreAttempt?: number;
  /**
  * Database Network IP Entry Saving Attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#db_n_ip_save_attempt DataThunderDdosDetectionStatisticsStats#db_n_ip_save_attempt}
  */
  readonly dbNIpSaveAttempt?: number;
  /**
  * Database Network IP Entry Saving Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#db_n_ip_save_failure DataThunderDdosDetectionStatisticsStats#db_n_ip_save_failure}
  */
  readonly dbNIpSaveFailure?: number;
  /**
  * Database Network IP Entry Table Creation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#db_n_ip_table_create_failure DataThunderDdosDetectionStatisticsStats#db_n_ip_table_create_failure}
  */
  readonly dbNIpTableCreateFailure?: number;
  /**
  * Database Network IP Entry Table Purge Entries Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#db_n_ip_table_purge_failure DataThunderDdosDetectionStatisticsStats#db_n_ip_table_purge_failure}
  */
  readonly dbNIpTablePurgeFailure?: number;
  /**
  * Database Network Parent Entry Not Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#db_n_parent_entry_not_found DataThunderDdosDetectionStatisticsStats#db_n_parent_entry_not_found}
  */
  readonly dbNParentEntryNotFound?: number;
  /**
  * Database Network Static Subnet Entry Not Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#db_n_static_subnet_not_found DataThunderDdosDetectionStatisticsStats#db_n_static_subnet_not_found}
  */
  readonly dbNStaticSubnetNotFound?: number;
  /**
  * Database Network Subnet Entry Restoring Attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#db_n_subnet_restore_attempt DataThunderDdosDetectionStatisticsStats#db_n_subnet_restore_attempt}
  */
  readonly dbNSubnetRestoreAttempt?: number;
  /**
  * Database Network Subnet Entry Saving Attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#db_n_subnet_save_attempt DataThunderDdosDetectionStatisticsStats#db_n_subnet_save_attempt}
  */
  readonly dbNSubnetSaveAttempt?: number;
  /**
  * Database Network Subnet Entry Saving Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#db_n_subnet_save_failure DataThunderDdosDetectionStatisticsStats#db_n_subnet_save_failure}
  */
  readonly dbNSubnetSaveFailure?: number;
  /**
  * Database Network Subnet Entry Table Creation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#db_n_subnet_table_create_failure DataThunderDdosDetectionStatisticsStats#db_n_subnet_table_create_failure}
  */
  readonly dbNSubnetTableCreateFailure?: number;
  /**
  * Database Network Subnet Entry Table Purge Entries Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#db_n_subnet_table_purge_failure DataThunderDdosDetectionStatisticsStats#db_n_subnet_table_purge_failure}
  */
  readonly dbNSubnetTablePurgeFailure?: number;
  /**
  * Database Network Service Entry Restoring Attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#db_n_svc_restore_attempt DataThunderDdosDetectionStatisticsStats#db_n_svc_restore_attempt}
  */
  readonly dbNSvcRestoreAttempt?: number;
  /**
  * Database Network Service Entry Saving Attempt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#db_n_svc_save_attempt DataThunderDdosDetectionStatisticsStats#db_n_svc_save_attempt}
  */
  readonly dbNSvcSaveAttempt?: number;
  /**
  * Database Network Service Entry Saving Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#db_n_svc_save_failure DataThunderDdosDetectionStatisticsStats#db_n_svc_save_failure}
  */
  readonly dbNSvcSaveFailure?: number;
  /**
  * Database Network Service Entry Table Creation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#db_n_svc_table_create_failure DataThunderDdosDetectionStatisticsStats#db_n_svc_table_create_failure}
  */
  readonly dbNSvcTableCreateFailure?: number;
  /**
  * Database Network Service Entry Table Purge Entries Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#db_n_svc_table_purge_failure DataThunderDdosDetectionStatisticsStats#db_n_svc_table_purge_failure}
  */
  readonly dbNSvcTablePurgeFailure?: number;
  /**
  * Database Open Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#db_open_failure DataThunderDdosDetectionStatisticsStats#db_open_failure}
  */
  readonly dbOpenFailure?: number;
  /**
  * Database Operation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#db_oper_failure DataThunderDdosDetectionStatisticsStats#db_oper_failure}
  */
  readonly dbOperFailure?: number;
  /**
  * Database Unexpected Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#db_unexpected_error DataThunderDdosDetectionStatisticsStats#db_unexpected_error}
  */
  readonly dbUnexpectedError?: number;
  /**
  * Database Worker Enqueue Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#db_worker_enq_failure DataThunderDdosDetectionStatisticsStats#db_worker_enq_failure}
  */
  readonly dbWorkerEnqFailure?: number;
  /**
  * Dst Entry Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#dst_age DataThunderDdosDetectionStatisticsStats#dst_age}
  */
  readonly dstAge?: number;
  /**
  * Dst Entry Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#dst_hit DataThunderDdosDetectionStatisticsStats#dst_hit}
  */
  readonly dstHit?: number;
  /**
  * Dst IP Entry Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#dst_ip_age DataThunderDdosDetectionStatisticsStats#dst_ip_age}
  */
  readonly dstIpAge?: number;
  /**
  * Dst IP Entry Learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#dst_ip_learn DataThunderDdosDetectionStatisticsStats#dst_ip_learn}
  */
  readonly dstIpLearn?: number;
  /**
  * Dst Entry Learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#dst_learn DataThunderDdosDetectionStatisticsStats#dst_learn}
  */
  readonly dstLearn?: number;
  /**
  * Dst Entry Missed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#dst_miss DataThunderDdosDetectionStatisticsStats#dst_miss}
  */
  readonly dstMiss?: number;
  /**
  * Dst Service Entry Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#dst_service_age DataThunderDdosDetectionStatisticsStats#dst_service_age}
  */
  readonly dstServiceAge?: number;
  /**
  * Dst Service Entry Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#dst_service_hit DataThunderDdosDetectionStatisticsStats#dst_service_hit}
  */
  readonly dstServiceHit?: number;
  /**
  * Dst Service Entry Learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#dst_service_learn DataThunderDdosDetectionStatisticsStats#dst_service_learn}
  */
  readonly dstServiceLearn?: number;
  /**
  * Dst Service Entry Missed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#dst_service_miss DataThunderDdosDetectionStatisticsStats#dst_service_miss}
  */
  readonly dstServiceMiss?: number;
  /**
  * Entry Allocate Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#entry_alloc_fail DataThunderDdosDetectionStatisticsStats#entry_alloc_fail}
  */
  readonly entryAllocFail?: number;
  /**
  * Fragment Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#frag_rcvd DataThunderDdosDetectionStatisticsStats#frag_rcvd}
  */
  readonly fragRcvd?: number;
  /**
  * Geolocation Entry Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#geo_age DataThunderDdosDetectionStatisticsStats#geo_age}
  */
  readonly geoAge?: number;
  /**
  * Geolocation Entry Learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#geo_learn DataThunderDdosDetectionStatisticsStats#geo_learn}
  */
  readonly geoLearn?: number;
  /**
  * Invalid Event in Notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#invalid_event DataThunderDdosDetectionStatisticsStats#invalid_event}
  */
  readonly invalidEvent?: number;
  /**
  * Invalid Proto in Notification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#invalid_proto DataThunderDdosDetectionStatisticsStats#invalid_proto}
  */
  readonly invalidProto?: number;
  /**
  * IPv4 Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#ip_rcvd DataThunderDdosDetectionStatisticsStats#ip_rcvd}
  */
  readonly ipRcvd?: number;
  /**
  * IPv6 Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#ipv6_rcvd DataThunderDdosDetectionStatisticsStats#ipv6_rcvd}
  */
  readonly ipv6Rcvd?: number;
  /**
  * IP Entry of Network-object Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#n_ip_aged DataThunderDdosDetectionStatisticsStats#n_ip_aged}
  */
  readonly nIpAged?: number;
  /**
  * IP Entry of Network-object Create Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#n_ip_create_fail DataThunderDdosDetectionStatisticsStats#n_ip_create_fail}
  */
  readonly nIpCreateFail?: number;
  /**
  * IP Entry of Network-object Learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#n_ip_learned DataThunderDdosDetectionStatisticsStats#n_ip_learned}
  */
  readonly nIpLearned?: number;
  /**
  * Service Entry of Network-object Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#n_service_aged DataThunderDdosDetectionStatisticsStats#n_service_aged}
  */
  readonly nServiceAged?: number;
  /**
  * Service Entry of Network-object Create Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#n_service_create_fail DataThunderDdosDetectionStatisticsStats#n_service_create_fail}
  */
  readonly nServiceCreateFail?: number;
  /**
  * Service Entry of Network-object Learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#n_service_learned DataThunderDdosDetectionStatisticsStats#n_service_learned}
  */
  readonly nServiceLearned?: number;
  /**
  * Service Entry of Network-object Not Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#n_service_not_found DataThunderDdosDetectionStatisticsStats#n_service_not_found}
  */
  readonly nServiceNotFound?: number;
  /**
  * Subnet Entry of Network-object Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#n_subnet_aged DataThunderDdosDetectionStatisticsStats#n_subnet_aged}
  */
  readonly nSubnetAged?: number;
  /**
  * Subnet Entry of Network-object Create Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#n_subnet_create_fail DataThunderDdosDetectionStatisticsStats#n_subnet_create_fail}
  */
  readonly nSubnetCreateFail?: number;
  /**
  * Subnet Entry of Network-object learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#n_subnet_learned DataThunderDdosDetectionStatisticsStats#n_subnet_learned}
  */
  readonly nSubnetLearned?: number;
  /**
  * Netflow Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#netflow_pkts_received DataThunderDdosDetectionStatisticsStats#netflow_pkts_received}
  */
  readonly netflowPktsReceived?: number;
  /**
  * Network-object Match Missed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#network_match_miss DataThunderDdosDetectionStatisticsStats#network_match_miss}
  */
  readonly networkMatchMiss?: number;
  /**
  * sFlow Packets Version Not Supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#not_supported_sflow_ver DataThunderDdosDetectionStatisticsStats#not_supported_sflow_ver}
  */
  readonly notSupportedSflowVer?: number;
  /**
  * Netflow Packets Version Not Supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#not_supproted_nflow_ver DataThunderDdosDetectionStatisticsStats#not_supproted_nflow_ver}
  */
  readonly notSupprotedNflowVer?: number;
  /**
  * Object Allocate Failure Out of Memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#object_alloc_oom DataThunderDdosDetectionStatisticsStats#object_alloc_oom}
  */
  readonly objectAllocOom?: number;
  /**
  * Flow Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#pkt_drop DataThunderDdosDetectionStatisticsStats#pkt_drop}
  */
  readonly pktDrop?: number;
  /**
  * Report Allocate Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#report_alloc_fail DataThunderDdosDetectionStatisticsStats#report_alloc_fail}
  */
  readonly reportAllocFail?: number;
  /**
  * Report Enqueue Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#report_enqueue_fail DataThunderDdosDetectionStatisticsStats#report_enqueue_fail}
  */
  readonly reportEnqueueFail?: number;
  /**
  * RTBH Start Notification Sent Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#rtbh_start_fail DataThunderDdosDetectionStatisticsStats#rtbh_start_fail}
  */
  readonly rtbhStartFail?: number;
  /**
  * RTBH Start Notification Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#rtbh_start_sent DataThunderDdosDetectionStatisticsStats#rtbh_start_sent}
  */
  readonly rtbhStartSent?: number;
  /**
  * RTBH Stop Notification Sent Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#rtbh_stop_fail DataThunderDdosDetectionStatisticsStats#rtbh_stop_fail}
  */
  readonly rtbhStopFail?: number;
  /**
  * RTBH Stop Notification Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#rtbh_stop_sent DataThunderDdosDetectionStatisticsStats#rtbh_stop_sent}
  */
  readonly rtbhStopSent?: number;
  /**
  * Sample Processed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#sample_procssed DataThunderDdosDetectionStatisticsStats#sample_procssed}
  */
  readonly sampleProcssed?: number;
  /**
  * Session Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#session_aged DataThunderDdosDetectionStatisticsStats#session_aged}
  */
  readonly sessionAged?: number;
  /**
  * Session Allocate Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#session_allocate_fail DataThunderDdosDetectionStatisticsStats#session_allocate_fail}
  */
  readonly sessionAllocateFail?: number;
  /**
  * Session Learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#session_learned DataThunderDdosDetectionStatisticsStats#session_learned}
  */
  readonly sessionLearned?: number;
  /**
  * Session Match Missed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#session_match_miss DataThunderDdosDetectionStatisticsStats#session_match_miss}
  */
  readonly sessionMatchMiss?: number;
  /**
  * sFlow Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#sflow_packets_received DataThunderDdosDetectionStatisticsStats#sflow_packets_received}
  */
  readonly sflowPacketsReceived?: number;
  /**
  * Src Entry Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#src_age DataThunderDdosDetectionStatisticsStats#src_age}
  */
  readonly srcAge?: number;
  /**
  * Src Entry Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#src_hit DataThunderDdosDetectionStatisticsStats#src_hit}
  */
  readonly srcHit?: number;
  /**
  * Src Entry Learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#src_learn DataThunderDdosDetectionStatisticsStats#src_learn}
  */
  readonly srcLearn?: number;
  /**
  * Src Entry Missed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#src_miss DataThunderDdosDetectionStatisticsStats#src_miss}
  */
  readonly srcMiss?: number;
  /**
  * Src Port Entry Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#src_port_age DataThunderDdosDetectionStatisticsStats#src_port_age}
  */
  readonly srcPortAge?: number;
  /**
  * Src Port Entry Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#src_port_hit DataThunderDdosDetectionStatisticsStats#src_port_hit}
  */
  readonly srcPortHit?: number;
  /**
  * Src Port Entry Learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#src_port_learn DataThunderDdosDetectionStatisticsStats#src_port_learn}
  */
  readonly srcPortLearn?: number;
  /**
  * Src Port Entry Missed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#src_port_miss DataThunderDdosDetectionStatisticsStats#src_port_miss}
  */
  readonly srcPortMiss?: number;
  /**
  * Unmatched Entry Port-zero Packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#unmatch_entry_port_zero DataThunderDdosDetectionStatisticsStats#unmatch_entry_port_zero}
  */
  readonly unmatchEntryPortZero?: number;
}

export function dataThunderDdosDetectionStatisticsStatsStatsToTerraform(struct?: DataThunderDdosDetectionStatisticsStatsStatsOutputReference | DataThunderDdosDetectionStatisticsStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_not_found: cdktf.numberToTerraform(struct!.agentNotFound),
    db_n_ip_restore_attempt: cdktf.numberToTerraform(struct!.dbNIpRestoreAttempt),
    db_n_ip_save_attempt: cdktf.numberToTerraform(struct!.dbNIpSaveAttempt),
    db_n_ip_save_failure: cdktf.numberToTerraform(struct!.dbNIpSaveFailure),
    db_n_ip_table_create_failure: cdktf.numberToTerraform(struct!.dbNIpTableCreateFailure),
    db_n_ip_table_purge_failure: cdktf.numberToTerraform(struct!.dbNIpTablePurgeFailure),
    db_n_parent_entry_not_found: cdktf.numberToTerraform(struct!.dbNParentEntryNotFound),
    db_n_static_subnet_not_found: cdktf.numberToTerraform(struct!.dbNStaticSubnetNotFound),
    db_n_subnet_restore_attempt: cdktf.numberToTerraform(struct!.dbNSubnetRestoreAttempt),
    db_n_subnet_save_attempt: cdktf.numberToTerraform(struct!.dbNSubnetSaveAttempt),
    db_n_subnet_save_failure: cdktf.numberToTerraform(struct!.dbNSubnetSaveFailure),
    db_n_subnet_table_create_failure: cdktf.numberToTerraform(struct!.dbNSubnetTableCreateFailure),
    db_n_subnet_table_purge_failure: cdktf.numberToTerraform(struct!.dbNSubnetTablePurgeFailure),
    db_n_svc_restore_attempt: cdktf.numberToTerraform(struct!.dbNSvcRestoreAttempt),
    db_n_svc_save_attempt: cdktf.numberToTerraform(struct!.dbNSvcSaveAttempt),
    db_n_svc_save_failure: cdktf.numberToTerraform(struct!.dbNSvcSaveFailure),
    db_n_svc_table_create_failure: cdktf.numberToTerraform(struct!.dbNSvcTableCreateFailure),
    db_n_svc_table_purge_failure: cdktf.numberToTerraform(struct!.dbNSvcTablePurgeFailure),
    db_open_failure: cdktf.numberToTerraform(struct!.dbOpenFailure),
    db_oper_failure: cdktf.numberToTerraform(struct!.dbOperFailure),
    db_unexpected_error: cdktf.numberToTerraform(struct!.dbUnexpectedError),
    db_worker_enq_failure: cdktf.numberToTerraform(struct!.dbWorkerEnqFailure),
    dst_age: cdktf.numberToTerraform(struct!.dstAge),
    dst_hit: cdktf.numberToTerraform(struct!.dstHit),
    dst_ip_age: cdktf.numberToTerraform(struct!.dstIpAge),
    dst_ip_learn: cdktf.numberToTerraform(struct!.dstIpLearn),
    dst_learn: cdktf.numberToTerraform(struct!.dstLearn),
    dst_miss: cdktf.numberToTerraform(struct!.dstMiss),
    dst_service_age: cdktf.numberToTerraform(struct!.dstServiceAge),
    dst_service_hit: cdktf.numberToTerraform(struct!.dstServiceHit),
    dst_service_learn: cdktf.numberToTerraform(struct!.dstServiceLearn),
    dst_service_miss: cdktf.numberToTerraform(struct!.dstServiceMiss),
    entry_alloc_fail: cdktf.numberToTerraform(struct!.entryAllocFail),
    frag_rcvd: cdktf.numberToTerraform(struct!.fragRcvd),
    geo_age: cdktf.numberToTerraform(struct!.geoAge),
    geo_learn: cdktf.numberToTerraform(struct!.geoLearn),
    invalid_event: cdktf.numberToTerraform(struct!.invalidEvent),
    invalid_proto: cdktf.numberToTerraform(struct!.invalidProto),
    ip_rcvd: cdktf.numberToTerraform(struct!.ipRcvd),
    ipv6_rcvd: cdktf.numberToTerraform(struct!.ipv6Rcvd),
    n_ip_aged: cdktf.numberToTerraform(struct!.nIpAged),
    n_ip_create_fail: cdktf.numberToTerraform(struct!.nIpCreateFail),
    n_ip_learned: cdktf.numberToTerraform(struct!.nIpLearned),
    n_service_aged: cdktf.numberToTerraform(struct!.nServiceAged),
    n_service_create_fail: cdktf.numberToTerraform(struct!.nServiceCreateFail),
    n_service_learned: cdktf.numberToTerraform(struct!.nServiceLearned),
    n_service_not_found: cdktf.numberToTerraform(struct!.nServiceNotFound),
    n_subnet_aged: cdktf.numberToTerraform(struct!.nSubnetAged),
    n_subnet_create_fail: cdktf.numberToTerraform(struct!.nSubnetCreateFail),
    n_subnet_learned: cdktf.numberToTerraform(struct!.nSubnetLearned),
    netflow_pkts_received: cdktf.numberToTerraform(struct!.netflowPktsReceived),
    network_match_miss: cdktf.numberToTerraform(struct!.networkMatchMiss),
    not_supported_sflow_ver: cdktf.numberToTerraform(struct!.notSupportedSflowVer),
    not_supproted_nflow_ver: cdktf.numberToTerraform(struct!.notSupprotedNflowVer),
    object_alloc_oom: cdktf.numberToTerraform(struct!.objectAllocOom),
    pkt_drop: cdktf.numberToTerraform(struct!.pktDrop),
    report_alloc_fail: cdktf.numberToTerraform(struct!.reportAllocFail),
    report_enqueue_fail: cdktf.numberToTerraform(struct!.reportEnqueueFail),
    rtbh_start_fail: cdktf.numberToTerraform(struct!.rtbhStartFail),
    rtbh_start_sent: cdktf.numberToTerraform(struct!.rtbhStartSent),
    rtbh_stop_fail: cdktf.numberToTerraform(struct!.rtbhStopFail),
    rtbh_stop_sent: cdktf.numberToTerraform(struct!.rtbhStopSent),
    sample_procssed: cdktf.numberToTerraform(struct!.sampleProcssed),
    session_aged: cdktf.numberToTerraform(struct!.sessionAged),
    session_allocate_fail: cdktf.numberToTerraform(struct!.sessionAllocateFail),
    session_learned: cdktf.numberToTerraform(struct!.sessionLearned),
    session_match_miss: cdktf.numberToTerraform(struct!.sessionMatchMiss),
    sflow_packets_received: cdktf.numberToTerraform(struct!.sflowPacketsReceived),
    src_age: cdktf.numberToTerraform(struct!.srcAge),
    src_hit: cdktf.numberToTerraform(struct!.srcHit),
    src_learn: cdktf.numberToTerraform(struct!.srcLearn),
    src_miss: cdktf.numberToTerraform(struct!.srcMiss),
    src_port_age: cdktf.numberToTerraform(struct!.srcPortAge),
    src_port_hit: cdktf.numberToTerraform(struct!.srcPortHit),
    src_port_learn: cdktf.numberToTerraform(struct!.srcPortLearn),
    src_port_miss: cdktf.numberToTerraform(struct!.srcPortMiss),
    unmatch_entry_port_zero: cdktf.numberToTerraform(struct!.unmatchEntryPortZero),
  }
}


export function dataThunderDdosDetectionStatisticsStatsStatsToHclTerraform(struct?: DataThunderDdosDetectionStatisticsStatsStatsOutputReference | DataThunderDdosDetectionStatisticsStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_not_found: {
      value: cdktf.numberToHclTerraform(struct!.agentNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_n_ip_restore_attempt: {
      value: cdktf.numberToHclTerraform(struct!.dbNIpRestoreAttempt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_n_ip_save_attempt: {
      value: cdktf.numberToHclTerraform(struct!.dbNIpSaveAttempt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_n_ip_save_failure: {
      value: cdktf.numberToHclTerraform(struct!.dbNIpSaveFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_n_ip_table_create_failure: {
      value: cdktf.numberToHclTerraform(struct!.dbNIpTableCreateFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_n_ip_table_purge_failure: {
      value: cdktf.numberToHclTerraform(struct!.dbNIpTablePurgeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_n_parent_entry_not_found: {
      value: cdktf.numberToHclTerraform(struct!.dbNParentEntryNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_n_static_subnet_not_found: {
      value: cdktf.numberToHclTerraform(struct!.dbNStaticSubnetNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_n_subnet_restore_attempt: {
      value: cdktf.numberToHclTerraform(struct!.dbNSubnetRestoreAttempt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_n_subnet_save_attempt: {
      value: cdktf.numberToHclTerraform(struct!.dbNSubnetSaveAttempt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_n_subnet_save_failure: {
      value: cdktf.numberToHclTerraform(struct!.dbNSubnetSaveFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_n_subnet_table_create_failure: {
      value: cdktf.numberToHclTerraform(struct!.dbNSubnetTableCreateFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_n_subnet_table_purge_failure: {
      value: cdktf.numberToHclTerraform(struct!.dbNSubnetTablePurgeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_n_svc_restore_attempt: {
      value: cdktf.numberToHclTerraform(struct!.dbNSvcRestoreAttempt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_n_svc_save_attempt: {
      value: cdktf.numberToHclTerraform(struct!.dbNSvcSaveAttempt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_n_svc_save_failure: {
      value: cdktf.numberToHclTerraform(struct!.dbNSvcSaveFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_n_svc_table_create_failure: {
      value: cdktf.numberToHclTerraform(struct!.dbNSvcTableCreateFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_n_svc_table_purge_failure: {
      value: cdktf.numberToHclTerraform(struct!.dbNSvcTablePurgeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_open_failure: {
      value: cdktf.numberToHclTerraform(struct!.dbOpenFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_oper_failure: {
      value: cdktf.numberToHclTerraform(struct!.dbOperFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_unexpected_error: {
      value: cdktf.numberToHclTerraform(struct!.dbUnexpectedError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_worker_enq_failure: {
      value: cdktf.numberToHclTerraform(struct!.dbWorkerEnqFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_age: {
      value: cdktf.numberToHclTerraform(struct!.dstAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_hit: {
      value: cdktf.numberToHclTerraform(struct!.dstHit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ip_age: {
      value: cdktf.numberToHclTerraform(struct!.dstIpAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ip_learn: {
      value: cdktf.numberToHclTerraform(struct!.dstIpLearn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_learn: {
      value: cdktf.numberToHclTerraform(struct!.dstLearn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_miss: {
      value: cdktf.numberToHclTerraform(struct!.dstMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_service_age: {
      value: cdktf.numberToHclTerraform(struct!.dstServiceAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_service_hit: {
      value: cdktf.numberToHclTerraform(struct!.dstServiceHit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_service_learn: {
      value: cdktf.numberToHclTerraform(struct!.dstServiceLearn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_service_miss: {
      value: cdktf.numberToHclTerraform(struct!.dstServiceMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_alloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.entryAllocFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.fragRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    geo_age: {
      value: cdktf.numberToHclTerraform(struct!.geoAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    geo_learn: {
      value: cdktf.numberToHclTerraform(struct!.geoLearn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_event: {
      value: cdktf.numberToHclTerraform(struct!.invalidEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_proto: {
      value: cdktf.numberToHclTerraform(struct!.invalidProto),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.ipRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Rcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_ip_aged: {
      value: cdktf.numberToHclTerraform(struct!.nIpAged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_ip_create_fail: {
      value: cdktf.numberToHclTerraform(struct!.nIpCreateFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_ip_learned: {
      value: cdktf.numberToHclTerraform(struct!.nIpLearned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_service_aged: {
      value: cdktf.numberToHclTerraform(struct!.nServiceAged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_service_create_fail: {
      value: cdktf.numberToHclTerraform(struct!.nServiceCreateFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_service_learned: {
      value: cdktf.numberToHclTerraform(struct!.nServiceLearned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_service_not_found: {
      value: cdktf.numberToHclTerraform(struct!.nServiceNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_subnet_aged: {
      value: cdktf.numberToHclTerraform(struct!.nSubnetAged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_subnet_create_fail: {
      value: cdktf.numberToHclTerraform(struct!.nSubnetCreateFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    n_subnet_learned: {
      value: cdktf.numberToHclTerraform(struct!.nSubnetLearned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow_pkts_received: {
      value: cdktf.numberToHclTerraform(struct!.netflowPktsReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_match_miss: {
      value: cdktf.numberToHclTerraform(struct!.networkMatchMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    not_supported_sflow_ver: {
      value: cdktf.numberToHclTerraform(struct!.notSupportedSflowVer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    not_supproted_nflow_ver: {
      value: cdktf.numberToHclTerraform(struct!.notSupprotedNflowVer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    object_alloc_oom: {
      value: cdktf.numberToHclTerraform(struct!.objectAllocOom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_drop: {
      value: cdktf.numberToHclTerraform(struct!.pktDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    report_alloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.reportAllocFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    report_enqueue_fail: {
      value: cdktf.numberToHclTerraform(struct!.reportEnqueueFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rtbh_start_fail: {
      value: cdktf.numberToHclTerraform(struct!.rtbhStartFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rtbh_start_sent: {
      value: cdktf.numberToHclTerraform(struct!.rtbhStartSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rtbh_stop_fail: {
      value: cdktf.numberToHclTerraform(struct!.rtbhStopFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rtbh_stop_sent: {
      value: cdktf.numberToHclTerraform(struct!.rtbhStopSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sample_procssed: {
      value: cdktf.numberToHclTerraform(struct!.sampleProcssed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_aged: {
      value: cdktf.numberToHclTerraform(struct!.sessionAged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_allocate_fail: {
      value: cdktf.numberToHclTerraform(struct!.sessionAllocateFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_learned: {
      value: cdktf.numberToHclTerraform(struct!.sessionLearned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_match_miss: {
      value: cdktf.numberToHclTerraform(struct!.sessionMatchMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_packets_received: {
      value: cdktf.numberToHclTerraform(struct!.sflowPacketsReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_age: {
      value: cdktf.numberToHclTerraform(struct!.srcAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_hit: {
      value: cdktf.numberToHclTerraform(struct!.srcHit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_learn: {
      value: cdktf.numberToHclTerraform(struct!.srcLearn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_miss: {
      value: cdktf.numberToHclTerraform(struct!.srcMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_port_age: {
      value: cdktf.numberToHclTerraform(struct!.srcPortAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_port_hit: {
      value: cdktf.numberToHclTerraform(struct!.srcPortHit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_port_learn: {
      value: cdktf.numberToHclTerraform(struct!.srcPortLearn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_port_miss: {
      value: cdktf.numberToHclTerraform(struct!.srcPortMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unmatch_entry_port_zero: {
      value: cdktf.numberToHclTerraform(struct!.unmatchEntryPortZero),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDetectionStatisticsStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDetectionStatisticsStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentNotFound = this._agentNotFound;
    }
    if (this._dbNIpRestoreAttempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbNIpRestoreAttempt = this._dbNIpRestoreAttempt;
    }
    if (this._dbNIpSaveAttempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbNIpSaveAttempt = this._dbNIpSaveAttempt;
    }
    if (this._dbNIpSaveFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbNIpSaveFailure = this._dbNIpSaveFailure;
    }
    if (this._dbNIpTableCreateFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbNIpTableCreateFailure = this._dbNIpTableCreateFailure;
    }
    if (this._dbNIpTablePurgeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbNIpTablePurgeFailure = this._dbNIpTablePurgeFailure;
    }
    if (this._dbNParentEntryNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbNParentEntryNotFound = this._dbNParentEntryNotFound;
    }
    if (this._dbNStaticSubnetNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbNStaticSubnetNotFound = this._dbNStaticSubnetNotFound;
    }
    if (this._dbNSubnetRestoreAttempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbNSubnetRestoreAttempt = this._dbNSubnetRestoreAttempt;
    }
    if (this._dbNSubnetSaveAttempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbNSubnetSaveAttempt = this._dbNSubnetSaveAttempt;
    }
    if (this._dbNSubnetSaveFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbNSubnetSaveFailure = this._dbNSubnetSaveFailure;
    }
    if (this._dbNSubnetTableCreateFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbNSubnetTableCreateFailure = this._dbNSubnetTableCreateFailure;
    }
    if (this._dbNSubnetTablePurgeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbNSubnetTablePurgeFailure = this._dbNSubnetTablePurgeFailure;
    }
    if (this._dbNSvcRestoreAttempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbNSvcRestoreAttempt = this._dbNSvcRestoreAttempt;
    }
    if (this._dbNSvcSaveAttempt !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbNSvcSaveAttempt = this._dbNSvcSaveAttempt;
    }
    if (this._dbNSvcSaveFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbNSvcSaveFailure = this._dbNSvcSaveFailure;
    }
    if (this._dbNSvcTableCreateFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbNSvcTableCreateFailure = this._dbNSvcTableCreateFailure;
    }
    if (this._dbNSvcTablePurgeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbNSvcTablePurgeFailure = this._dbNSvcTablePurgeFailure;
    }
    if (this._dbOpenFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbOpenFailure = this._dbOpenFailure;
    }
    if (this._dbOperFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbOperFailure = this._dbOperFailure;
    }
    if (this._dbUnexpectedError !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbUnexpectedError = this._dbUnexpectedError;
    }
    if (this._dbWorkerEnqFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbWorkerEnqFailure = this._dbWorkerEnqFailure;
    }
    if (this._dstAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstAge = this._dstAge;
    }
    if (this._dstHit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstHit = this._dstHit;
    }
    if (this._dstIpAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpAge = this._dstIpAge;
    }
    if (this._dstIpLearn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpLearn = this._dstIpLearn;
    }
    if (this._dstLearn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstLearn = this._dstLearn;
    }
    if (this._dstMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstMiss = this._dstMiss;
    }
    if (this._dstServiceAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstServiceAge = this._dstServiceAge;
    }
    if (this._dstServiceHit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstServiceHit = this._dstServiceHit;
    }
    if (this._dstServiceLearn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstServiceLearn = this._dstServiceLearn;
    }
    if (this._dstServiceMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstServiceMiss = this._dstServiceMiss;
    }
    if (this._entryAllocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryAllocFail = this._entryAllocFail;
    }
    if (this._fragRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragRcvd = this._fragRcvd;
    }
    if (this._geoAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoAge = this._geoAge;
    }
    if (this._geoLearn !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoLearn = this._geoLearn;
    }
    if (this._invalidEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidEvent = this._invalidEvent;
    }
    if (this._invalidProto !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidProto = this._invalidProto;
    }
    if (this._ipRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRcvd = this._ipRcvd;
    }
    if (this._ipv6Rcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Rcvd = this._ipv6Rcvd;
    }
    if (this._nIpAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.nIpAged = this._nIpAged;
    }
    if (this._nIpCreateFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.nIpCreateFail = this._nIpCreateFail;
    }
    if (this._nIpLearned !== undefined) {
      hasAnyValues = true;
      internalValueResult.nIpLearned = this._nIpLearned;
    }
    if (this._nServiceAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.nServiceAged = this._nServiceAged;
    }
    if (this._nServiceCreateFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.nServiceCreateFail = this._nServiceCreateFail;
    }
    if (this._nServiceLearned !== undefined) {
      hasAnyValues = true;
      internalValueResult.nServiceLearned = this._nServiceLearned;
    }
    if (this._nServiceNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.nServiceNotFound = this._nServiceNotFound;
    }
    if (this._nSubnetAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.nSubnetAged = this._nSubnetAged;
    }
    if (this._nSubnetCreateFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.nSubnetCreateFail = this._nSubnetCreateFail;
    }
    if (this._nSubnetLearned !== undefined) {
      hasAnyValues = true;
      internalValueResult.nSubnetLearned = this._nSubnetLearned;
    }
    if (this._netflowPktsReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowPktsReceived = this._netflowPktsReceived;
    }
    if (this._networkMatchMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkMatchMiss = this._networkMatchMiss;
    }
    if (this._notSupportedSflowVer !== undefined) {
      hasAnyValues = true;
      internalValueResult.notSupportedSflowVer = this._notSupportedSflowVer;
    }
    if (this._notSupprotedNflowVer !== undefined) {
      hasAnyValues = true;
      internalValueResult.notSupprotedNflowVer = this._notSupprotedNflowVer;
    }
    if (this._objectAllocOom !== undefined) {
      hasAnyValues = true;
      internalValueResult.objectAllocOom = this._objectAllocOom;
    }
    if (this._pktDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktDrop = this._pktDrop;
    }
    if (this._reportAllocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportAllocFail = this._reportAllocFail;
    }
    if (this._reportEnqueueFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportEnqueueFail = this._reportEnqueueFail;
    }
    if (this._rtbhStartFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtbhStartFail = this._rtbhStartFail;
    }
    if (this._rtbhStartSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtbhStartSent = this._rtbhStartSent;
    }
    if (this._rtbhStopFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtbhStopFail = this._rtbhStopFail;
    }
    if (this._rtbhStopSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtbhStopSent = this._rtbhStopSent;
    }
    if (this._sampleProcssed !== undefined) {
      hasAnyValues = true;
      internalValueResult.sampleProcssed = this._sampleProcssed;
    }
    if (this._sessionAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAged = this._sessionAged;
    }
    if (this._sessionAllocateFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionAllocateFail = this._sessionAllocateFail;
    }
    if (this._sessionLearned !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionLearned = this._sessionLearned;
    }
    if (this._sessionMatchMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionMatchMiss = this._sessionMatchMiss;
    }
    if (this._sflowPacketsReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowPacketsReceived = this._sflowPacketsReceived;
    }
    if (this._srcAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcAge = this._srcAge;
    }
    if (this._srcHit !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHit = this._srcHit;
    }
    if (this._srcLearn !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcLearn = this._srcLearn;
    }
    if (this._srcMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcMiss = this._srcMiss;
    }
    if (this._srcPortAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPortAge = this._srcPortAge;
    }
    if (this._srcPortHit !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPortHit = this._srcPortHit;
    }
    if (this._srcPortLearn !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPortLearn = this._srcPortLearn;
    }
    if (this._srcPortMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPortMiss = this._srcPortMiss;
    }
    if (this._unmatchEntryPortZero !== undefined) {
      hasAnyValues = true;
      internalValueResult.unmatchEntryPortZero = this._unmatchEntryPortZero;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDetectionStatisticsStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentNotFound = undefined;
      this._dbNIpRestoreAttempt = undefined;
      this._dbNIpSaveAttempt = undefined;
      this._dbNIpSaveFailure = undefined;
      this._dbNIpTableCreateFailure = undefined;
      this._dbNIpTablePurgeFailure = undefined;
      this._dbNParentEntryNotFound = undefined;
      this._dbNStaticSubnetNotFound = undefined;
      this._dbNSubnetRestoreAttempt = undefined;
      this._dbNSubnetSaveAttempt = undefined;
      this._dbNSubnetSaveFailure = undefined;
      this._dbNSubnetTableCreateFailure = undefined;
      this._dbNSubnetTablePurgeFailure = undefined;
      this._dbNSvcRestoreAttempt = undefined;
      this._dbNSvcSaveAttempt = undefined;
      this._dbNSvcSaveFailure = undefined;
      this._dbNSvcTableCreateFailure = undefined;
      this._dbNSvcTablePurgeFailure = undefined;
      this._dbOpenFailure = undefined;
      this._dbOperFailure = undefined;
      this._dbUnexpectedError = undefined;
      this._dbWorkerEnqFailure = undefined;
      this._dstAge = undefined;
      this._dstHit = undefined;
      this._dstIpAge = undefined;
      this._dstIpLearn = undefined;
      this._dstLearn = undefined;
      this._dstMiss = undefined;
      this._dstServiceAge = undefined;
      this._dstServiceHit = undefined;
      this._dstServiceLearn = undefined;
      this._dstServiceMiss = undefined;
      this._entryAllocFail = undefined;
      this._fragRcvd = undefined;
      this._geoAge = undefined;
      this._geoLearn = undefined;
      this._invalidEvent = undefined;
      this._invalidProto = undefined;
      this._ipRcvd = undefined;
      this._ipv6Rcvd = undefined;
      this._nIpAged = undefined;
      this._nIpCreateFail = undefined;
      this._nIpLearned = undefined;
      this._nServiceAged = undefined;
      this._nServiceCreateFail = undefined;
      this._nServiceLearned = undefined;
      this._nServiceNotFound = undefined;
      this._nSubnetAged = undefined;
      this._nSubnetCreateFail = undefined;
      this._nSubnetLearned = undefined;
      this._netflowPktsReceived = undefined;
      this._networkMatchMiss = undefined;
      this._notSupportedSflowVer = undefined;
      this._notSupprotedNflowVer = undefined;
      this._objectAllocOom = undefined;
      this._pktDrop = undefined;
      this._reportAllocFail = undefined;
      this._reportEnqueueFail = undefined;
      this._rtbhStartFail = undefined;
      this._rtbhStartSent = undefined;
      this._rtbhStopFail = undefined;
      this._rtbhStopSent = undefined;
      this._sampleProcssed = undefined;
      this._sessionAged = undefined;
      this._sessionAllocateFail = undefined;
      this._sessionLearned = undefined;
      this._sessionMatchMiss = undefined;
      this._sflowPacketsReceived = undefined;
      this._srcAge = undefined;
      this._srcHit = undefined;
      this._srcLearn = undefined;
      this._srcMiss = undefined;
      this._srcPortAge = undefined;
      this._srcPortHit = undefined;
      this._srcPortLearn = undefined;
      this._srcPortMiss = undefined;
      this._unmatchEntryPortZero = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentNotFound = value.agentNotFound;
      this._dbNIpRestoreAttempt = value.dbNIpRestoreAttempt;
      this._dbNIpSaveAttempt = value.dbNIpSaveAttempt;
      this._dbNIpSaveFailure = value.dbNIpSaveFailure;
      this._dbNIpTableCreateFailure = value.dbNIpTableCreateFailure;
      this._dbNIpTablePurgeFailure = value.dbNIpTablePurgeFailure;
      this._dbNParentEntryNotFound = value.dbNParentEntryNotFound;
      this._dbNStaticSubnetNotFound = value.dbNStaticSubnetNotFound;
      this._dbNSubnetRestoreAttempt = value.dbNSubnetRestoreAttempt;
      this._dbNSubnetSaveAttempt = value.dbNSubnetSaveAttempt;
      this._dbNSubnetSaveFailure = value.dbNSubnetSaveFailure;
      this._dbNSubnetTableCreateFailure = value.dbNSubnetTableCreateFailure;
      this._dbNSubnetTablePurgeFailure = value.dbNSubnetTablePurgeFailure;
      this._dbNSvcRestoreAttempt = value.dbNSvcRestoreAttempt;
      this._dbNSvcSaveAttempt = value.dbNSvcSaveAttempt;
      this._dbNSvcSaveFailure = value.dbNSvcSaveFailure;
      this._dbNSvcTableCreateFailure = value.dbNSvcTableCreateFailure;
      this._dbNSvcTablePurgeFailure = value.dbNSvcTablePurgeFailure;
      this._dbOpenFailure = value.dbOpenFailure;
      this._dbOperFailure = value.dbOperFailure;
      this._dbUnexpectedError = value.dbUnexpectedError;
      this._dbWorkerEnqFailure = value.dbWorkerEnqFailure;
      this._dstAge = value.dstAge;
      this._dstHit = value.dstHit;
      this._dstIpAge = value.dstIpAge;
      this._dstIpLearn = value.dstIpLearn;
      this._dstLearn = value.dstLearn;
      this._dstMiss = value.dstMiss;
      this._dstServiceAge = value.dstServiceAge;
      this._dstServiceHit = value.dstServiceHit;
      this._dstServiceLearn = value.dstServiceLearn;
      this._dstServiceMiss = value.dstServiceMiss;
      this._entryAllocFail = value.entryAllocFail;
      this._fragRcvd = value.fragRcvd;
      this._geoAge = value.geoAge;
      this._geoLearn = value.geoLearn;
      this._invalidEvent = value.invalidEvent;
      this._invalidProto = value.invalidProto;
      this._ipRcvd = value.ipRcvd;
      this._ipv6Rcvd = value.ipv6Rcvd;
      this._nIpAged = value.nIpAged;
      this._nIpCreateFail = value.nIpCreateFail;
      this._nIpLearned = value.nIpLearned;
      this._nServiceAged = value.nServiceAged;
      this._nServiceCreateFail = value.nServiceCreateFail;
      this._nServiceLearned = value.nServiceLearned;
      this._nServiceNotFound = value.nServiceNotFound;
      this._nSubnetAged = value.nSubnetAged;
      this._nSubnetCreateFail = value.nSubnetCreateFail;
      this._nSubnetLearned = value.nSubnetLearned;
      this._netflowPktsReceived = value.netflowPktsReceived;
      this._networkMatchMiss = value.networkMatchMiss;
      this._notSupportedSflowVer = value.notSupportedSflowVer;
      this._notSupprotedNflowVer = value.notSupprotedNflowVer;
      this._objectAllocOom = value.objectAllocOom;
      this._pktDrop = value.pktDrop;
      this._reportAllocFail = value.reportAllocFail;
      this._reportEnqueueFail = value.reportEnqueueFail;
      this._rtbhStartFail = value.rtbhStartFail;
      this._rtbhStartSent = value.rtbhStartSent;
      this._rtbhStopFail = value.rtbhStopFail;
      this._rtbhStopSent = value.rtbhStopSent;
      this._sampleProcssed = value.sampleProcssed;
      this._sessionAged = value.sessionAged;
      this._sessionAllocateFail = value.sessionAllocateFail;
      this._sessionLearned = value.sessionLearned;
      this._sessionMatchMiss = value.sessionMatchMiss;
      this._sflowPacketsReceived = value.sflowPacketsReceived;
      this._srcAge = value.srcAge;
      this._srcHit = value.srcHit;
      this._srcLearn = value.srcLearn;
      this._srcMiss = value.srcMiss;
      this._srcPortAge = value.srcPortAge;
      this._srcPortHit = value.srcPortHit;
      this._srcPortLearn = value.srcPortLearn;
      this._srcPortMiss = value.srcPortMiss;
      this._unmatchEntryPortZero = value.unmatchEntryPortZero;
    }
  }

  // agent_not_found - computed: false, optional: true, required: false
  private _agentNotFound?: number; 
  public get agentNotFound() {
    return this.getNumberAttribute('agent_not_found');
  }
  public set agentNotFound(value: number) {
    this._agentNotFound = value;
  }
  public resetAgentNotFound() {
    this._agentNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentNotFoundInput() {
    return this._agentNotFound;
  }

  // db_n_ip_restore_attempt - computed: false, optional: true, required: false
  private _dbNIpRestoreAttempt?: number; 
  public get dbNIpRestoreAttempt() {
    return this.getNumberAttribute('db_n_ip_restore_attempt');
  }
  public set dbNIpRestoreAttempt(value: number) {
    this._dbNIpRestoreAttempt = value;
  }
  public resetDbNIpRestoreAttempt() {
    this._dbNIpRestoreAttempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNIpRestoreAttemptInput() {
    return this._dbNIpRestoreAttempt;
  }

  // db_n_ip_save_attempt - computed: false, optional: true, required: false
  private _dbNIpSaveAttempt?: number; 
  public get dbNIpSaveAttempt() {
    return this.getNumberAttribute('db_n_ip_save_attempt');
  }
  public set dbNIpSaveAttempt(value: number) {
    this._dbNIpSaveAttempt = value;
  }
  public resetDbNIpSaveAttempt() {
    this._dbNIpSaveAttempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNIpSaveAttemptInput() {
    return this._dbNIpSaveAttempt;
  }

  // db_n_ip_save_failure - computed: false, optional: true, required: false
  private _dbNIpSaveFailure?: number; 
  public get dbNIpSaveFailure() {
    return this.getNumberAttribute('db_n_ip_save_failure');
  }
  public set dbNIpSaveFailure(value: number) {
    this._dbNIpSaveFailure = value;
  }
  public resetDbNIpSaveFailure() {
    this._dbNIpSaveFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNIpSaveFailureInput() {
    return this._dbNIpSaveFailure;
  }

  // db_n_ip_table_create_failure - computed: false, optional: true, required: false
  private _dbNIpTableCreateFailure?: number; 
  public get dbNIpTableCreateFailure() {
    return this.getNumberAttribute('db_n_ip_table_create_failure');
  }
  public set dbNIpTableCreateFailure(value: number) {
    this._dbNIpTableCreateFailure = value;
  }
  public resetDbNIpTableCreateFailure() {
    this._dbNIpTableCreateFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNIpTableCreateFailureInput() {
    return this._dbNIpTableCreateFailure;
  }

  // db_n_ip_table_purge_failure - computed: false, optional: true, required: false
  private _dbNIpTablePurgeFailure?: number; 
  public get dbNIpTablePurgeFailure() {
    return this.getNumberAttribute('db_n_ip_table_purge_failure');
  }
  public set dbNIpTablePurgeFailure(value: number) {
    this._dbNIpTablePurgeFailure = value;
  }
  public resetDbNIpTablePurgeFailure() {
    this._dbNIpTablePurgeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNIpTablePurgeFailureInput() {
    return this._dbNIpTablePurgeFailure;
  }

  // db_n_parent_entry_not_found - computed: false, optional: true, required: false
  private _dbNParentEntryNotFound?: number; 
  public get dbNParentEntryNotFound() {
    return this.getNumberAttribute('db_n_parent_entry_not_found');
  }
  public set dbNParentEntryNotFound(value: number) {
    this._dbNParentEntryNotFound = value;
  }
  public resetDbNParentEntryNotFound() {
    this._dbNParentEntryNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNParentEntryNotFoundInput() {
    return this._dbNParentEntryNotFound;
  }

  // db_n_static_subnet_not_found - computed: false, optional: true, required: false
  private _dbNStaticSubnetNotFound?: number; 
  public get dbNStaticSubnetNotFound() {
    return this.getNumberAttribute('db_n_static_subnet_not_found');
  }
  public set dbNStaticSubnetNotFound(value: number) {
    this._dbNStaticSubnetNotFound = value;
  }
  public resetDbNStaticSubnetNotFound() {
    this._dbNStaticSubnetNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNStaticSubnetNotFoundInput() {
    return this._dbNStaticSubnetNotFound;
  }

  // db_n_subnet_restore_attempt - computed: false, optional: true, required: false
  private _dbNSubnetRestoreAttempt?: number; 
  public get dbNSubnetRestoreAttempt() {
    return this.getNumberAttribute('db_n_subnet_restore_attempt');
  }
  public set dbNSubnetRestoreAttempt(value: number) {
    this._dbNSubnetRestoreAttempt = value;
  }
  public resetDbNSubnetRestoreAttempt() {
    this._dbNSubnetRestoreAttempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNSubnetRestoreAttemptInput() {
    return this._dbNSubnetRestoreAttempt;
  }

  // db_n_subnet_save_attempt - computed: false, optional: true, required: false
  private _dbNSubnetSaveAttempt?: number; 
  public get dbNSubnetSaveAttempt() {
    return this.getNumberAttribute('db_n_subnet_save_attempt');
  }
  public set dbNSubnetSaveAttempt(value: number) {
    this._dbNSubnetSaveAttempt = value;
  }
  public resetDbNSubnetSaveAttempt() {
    this._dbNSubnetSaveAttempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNSubnetSaveAttemptInput() {
    return this._dbNSubnetSaveAttempt;
  }

  // db_n_subnet_save_failure - computed: false, optional: true, required: false
  private _dbNSubnetSaveFailure?: number; 
  public get dbNSubnetSaveFailure() {
    return this.getNumberAttribute('db_n_subnet_save_failure');
  }
  public set dbNSubnetSaveFailure(value: number) {
    this._dbNSubnetSaveFailure = value;
  }
  public resetDbNSubnetSaveFailure() {
    this._dbNSubnetSaveFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNSubnetSaveFailureInput() {
    return this._dbNSubnetSaveFailure;
  }

  // db_n_subnet_table_create_failure - computed: false, optional: true, required: false
  private _dbNSubnetTableCreateFailure?: number; 
  public get dbNSubnetTableCreateFailure() {
    return this.getNumberAttribute('db_n_subnet_table_create_failure');
  }
  public set dbNSubnetTableCreateFailure(value: number) {
    this._dbNSubnetTableCreateFailure = value;
  }
  public resetDbNSubnetTableCreateFailure() {
    this._dbNSubnetTableCreateFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNSubnetTableCreateFailureInput() {
    return this._dbNSubnetTableCreateFailure;
  }

  // db_n_subnet_table_purge_failure - computed: false, optional: true, required: false
  private _dbNSubnetTablePurgeFailure?: number; 
  public get dbNSubnetTablePurgeFailure() {
    return this.getNumberAttribute('db_n_subnet_table_purge_failure');
  }
  public set dbNSubnetTablePurgeFailure(value: number) {
    this._dbNSubnetTablePurgeFailure = value;
  }
  public resetDbNSubnetTablePurgeFailure() {
    this._dbNSubnetTablePurgeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNSubnetTablePurgeFailureInput() {
    return this._dbNSubnetTablePurgeFailure;
  }

  // db_n_svc_restore_attempt - computed: false, optional: true, required: false
  private _dbNSvcRestoreAttempt?: number; 
  public get dbNSvcRestoreAttempt() {
    return this.getNumberAttribute('db_n_svc_restore_attempt');
  }
  public set dbNSvcRestoreAttempt(value: number) {
    this._dbNSvcRestoreAttempt = value;
  }
  public resetDbNSvcRestoreAttempt() {
    this._dbNSvcRestoreAttempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNSvcRestoreAttemptInput() {
    return this._dbNSvcRestoreAttempt;
  }

  // db_n_svc_save_attempt - computed: false, optional: true, required: false
  private _dbNSvcSaveAttempt?: number; 
  public get dbNSvcSaveAttempt() {
    return this.getNumberAttribute('db_n_svc_save_attempt');
  }
  public set dbNSvcSaveAttempt(value: number) {
    this._dbNSvcSaveAttempt = value;
  }
  public resetDbNSvcSaveAttempt() {
    this._dbNSvcSaveAttempt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNSvcSaveAttemptInput() {
    return this._dbNSvcSaveAttempt;
  }

  // db_n_svc_save_failure - computed: false, optional: true, required: false
  private _dbNSvcSaveFailure?: number; 
  public get dbNSvcSaveFailure() {
    return this.getNumberAttribute('db_n_svc_save_failure');
  }
  public set dbNSvcSaveFailure(value: number) {
    this._dbNSvcSaveFailure = value;
  }
  public resetDbNSvcSaveFailure() {
    this._dbNSvcSaveFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNSvcSaveFailureInput() {
    return this._dbNSvcSaveFailure;
  }

  // db_n_svc_table_create_failure - computed: false, optional: true, required: false
  private _dbNSvcTableCreateFailure?: number; 
  public get dbNSvcTableCreateFailure() {
    return this.getNumberAttribute('db_n_svc_table_create_failure');
  }
  public set dbNSvcTableCreateFailure(value: number) {
    this._dbNSvcTableCreateFailure = value;
  }
  public resetDbNSvcTableCreateFailure() {
    this._dbNSvcTableCreateFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNSvcTableCreateFailureInput() {
    return this._dbNSvcTableCreateFailure;
  }

  // db_n_svc_table_purge_failure - computed: false, optional: true, required: false
  private _dbNSvcTablePurgeFailure?: number; 
  public get dbNSvcTablePurgeFailure() {
    return this.getNumberAttribute('db_n_svc_table_purge_failure');
  }
  public set dbNSvcTablePurgeFailure(value: number) {
    this._dbNSvcTablePurgeFailure = value;
  }
  public resetDbNSvcTablePurgeFailure() {
    this._dbNSvcTablePurgeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNSvcTablePurgeFailureInput() {
    return this._dbNSvcTablePurgeFailure;
  }

  // db_open_failure - computed: false, optional: true, required: false
  private _dbOpenFailure?: number; 
  public get dbOpenFailure() {
    return this.getNumberAttribute('db_open_failure');
  }
  public set dbOpenFailure(value: number) {
    this._dbOpenFailure = value;
  }
  public resetDbOpenFailure() {
    this._dbOpenFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbOpenFailureInput() {
    return this._dbOpenFailure;
  }

  // db_oper_failure - computed: false, optional: true, required: false
  private _dbOperFailure?: number; 
  public get dbOperFailure() {
    return this.getNumberAttribute('db_oper_failure');
  }
  public set dbOperFailure(value: number) {
    this._dbOperFailure = value;
  }
  public resetDbOperFailure() {
    this._dbOperFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbOperFailureInput() {
    return this._dbOperFailure;
  }

  // db_unexpected_error - computed: false, optional: true, required: false
  private _dbUnexpectedError?: number; 
  public get dbUnexpectedError() {
    return this.getNumberAttribute('db_unexpected_error');
  }
  public set dbUnexpectedError(value: number) {
    this._dbUnexpectedError = value;
  }
  public resetDbUnexpectedError() {
    this._dbUnexpectedError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbUnexpectedErrorInput() {
    return this._dbUnexpectedError;
  }

  // db_worker_enq_failure - computed: false, optional: true, required: false
  private _dbWorkerEnqFailure?: number; 
  public get dbWorkerEnqFailure() {
    return this.getNumberAttribute('db_worker_enq_failure');
  }
  public set dbWorkerEnqFailure(value: number) {
    this._dbWorkerEnqFailure = value;
  }
  public resetDbWorkerEnqFailure() {
    this._dbWorkerEnqFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbWorkerEnqFailureInput() {
    return this._dbWorkerEnqFailure;
  }

  // dst_age - computed: false, optional: true, required: false
  private _dstAge?: number; 
  public get dstAge() {
    return this.getNumberAttribute('dst_age');
  }
  public set dstAge(value: number) {
    this._dstAge = value;
  }
  public resetDstAge() {
    this._dstAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstAgeInput() {
    return this._dstAge;
  }

  // dst_hit - computed: false, optional: true, required: false
  private _dstHit?: number; 
  public get dstHit() {
    return this.getNumberAttribute('dst_hit');
  }
  public set dstHit(value: number) {
    this._dstHit = value;
  }
  public resetDstHit() {
    this._dstHit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstHitInput() {
    return this._dstHit;
  }

  // dst_ip_age - computed: false, optional: true, required: false
  private _dstIpAge?: number; 
  public get dstIpAge() {
    return this.getNumberAttribute('dst_ip_age');
  }
  public set dstIpAge(value: number) {
    this._dstIpAge = value;
  }
  public resetDstIpAge() {
    this._dstIpAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpAgeInput() {
    return this._dstIpAge;
  }

  // dst_ip_learn - computed: false, optional: true, required: false
  private _dstIpLearn?: number; 
  public get dstIpLearn() {
    return this.getNumberAttribute('dst_ip_learn');
  }
  public set dstIpLearn(value: number) {
    this._dstIpLearn = value;
  }
  public resetDstIpLearn() {
    this._dstIpLearn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpLearnInput() {
    return this._dstIpLearn;
  }

  // dst_learn - computed: false, optional: true, required: false
  private _dstLearn?: number; 
  public get dstLearn() {
    return this.getNumberAttribute('dst_learn');
  }
  public set dstLearn(value: number) {
    this._dstLearn = value;
  }
  public resetDstLearn() {
    this._dstLearn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstLearnInput() {
    return this._dstLearn;
  }

  // dst_miss - computed: false, optional: true, required: false
  private _dstMiss?: number; 
  public get dstMiss() {
    return this.getNumberAttribute('dst_miss');
  }
  public set dstMiss(value: number) {
    this._dstMiss = value;
  }
  public resetDstMiss() {
    this._dstMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstMissInput() {
    return this._dstMiss;
  }

  // dst_service_age - computed: false, optional: true, required: false
  private _dstServiceAge?: number; 
  public get dstServiceAge() {
    return this.getNumberAttribute('dst_service_age');
  }
  public set dstServiceAge(value: number) {
    this._dstServiceAge = value;
  }
  public resetDstServiceAge() {
    this._dstServiceAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstServiceAgeInput() {
    return this._dstServiceAge;
  }

  // dst_service_hit - computed: false, optional: true, required: false
  private _dstServiceHit?: number; 
  public get dstServiceHit() {
    return this.getNumberAttribute('dst_service_hit');
  }
  public set dstServiceHit(value: number) {
    this._dstServiceHit = value;
  }
  public resetDstServiceHit() {
    this._dstServiceHit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstServiceHitInput() {
    return this._dstServiceHit;
  }

  // dst_service_learn - computed: false, optional: true, required: false
  private _dstServiceLearn?: number; 
  public get dstServiceLearn() {
    return this.getNumberAttribute('dst_service_learn');
  }
  public set dstServiceLearn(value: number) {
    this._dstServiceLearn = value;
  }
  public resetDstServiceLearn() {
    this._dstServiceLearn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstServiceLearnInput() {
    return this._dstServiceLearn;
  }

  // dst_service_miss - computed: false, optional: true, required: false
  private _dstServiceMiss?: number; 
  public get dstServiceMiss() {
    return this.getNumberAttribute('dst_service_miss');
  }
  public set dstServiceMiss(value: number) {
    this._dstServiceMiss = value;
  }
  public resetDstServiceMiss() {
    this._dstServiceMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstServiceMissInput() {
    return this._dstServiceMiss;
  }

  // entry_alloc_fail - computed: false, optional: true, required: false
  private _entryAllocFail?: number; 
  public get entryAllocFail() {
    return this.getNumberAttribute('entry_alloc_fail');
  }
  public set entryAllocFail(value: number) {
    this._entryAllocFail = value;
  }
  public resetEntryAllocFail() {
    this._entryAllocFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryAllocFailInput() {
    return this._entryAllocFail;
  }

  // frag_rcvd - computed: false, optional: true, required: false
  private _fragRcvd?: number; 
  public get fragRcvd() {
    return this.getNumberAttribute('frag_rcvd');
  }
  public set fragRcvd(value: number) {
    this._fragRcvd = value;
  }
  public resetFragRcvd() {
    this._fragRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragRcvdInput() {
    return this._fragRcvd;
  }

  // geo_age - computed: false, optional: true, required: false
  private _geoAge?: number; 
  public get geoAge() {
    return this.getNumberAttribute('geo_age');
  }
  public set geoAge(value: number) {
    this._geoAge = value;
  }
  public resetGeoAge() {
    this._geoAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoAgeInput() {
    return this._geoAge;
  }

  // geo_learn - computed: false, optional: true, required: false
  private _geoLearn?: number; 
  public get geoLearn() {
    return this.getNumberAttribute('geo_learn');
  }
  public set geoLearn(value: number) {
    this._geoLearn = value;
  }
  public resetGeoLearn() {
    this._geoLearn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoLearnInput() {
    return this._geoLearn;
  }

  // invalid_event - computed: false, optional: true, required: false
  private _invalidEvent?: number; 
  public get invalidEvent() {
    return this.getNumberAttribute('invalid_event');
  }
  public set invalidEvent(value: number) {
    this._invalidEvent = value;
  }
  public resetInvalidEvent() {
    this._invalidEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidEventInput() {
    return this._invalidEvent;
  }

  // invalid_proto - computed: false, optional: true, required: false
  private _invalidProto?: number; 
  public get invalidProto() {
    return this.getNumberAttribute('invalid_proto');
  }
  public set invalidProto(value: number) {
    this._invalidProto = value;
  }
  public resetInvalidProto() {
    this._invalidProto = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidProtoInput() {
    return this._invalidProto;
  }

  // ip_rcvd - computed: false, optional: true, required: false
  private _ipRcvd?: number; 
  public get ipRcvd() {
    return this.getNumberAttribute('ip_rcvd');
  }
  public set ipRcvd(value: number) {
    this._ipRcvd = value;
  }
  public resetIpRcvd() {
    this._ipRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRcvdInput() {
    return this._ipRcvd;
  }

  // ipv6_rcvd - computed: false, optional: true, required: false
  private _ipv6Rcvd?: number; 
  public get ipv6Rcvd() {
    return this.getNumberAttribute('ipv6_rcvd');
  }
  public set ipv6Rcvd(value: number) {
    this._ipv6Rcvd = value;
  }
  public resetIpv6Rcvd() {
    this._ipv6Rcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RcvdInput() {
    return this._ipv6Rcvd;
  }

  // n_ip_aged - computed: false, optional: true, required: false
  private _nIpAged?: number; 
  public get nIpAged() {
    return this.getNumberAttribute('n_ip_aged');
  }
  public set nIpAged(value: number) {
    this._nIpAged = value;
  }
  public resetNIpAged() {
    this._nIpAged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nIpAgedInput() {
    return this._nIpAged;
  }

  // n_ip_create_fail - computed: false, optional: true, required: false
  private _nIpCreateFail?: number; 
  public get nIpCreateFail() {
    return this.getNumberAttribute('n_ip_create_fail');
  }
  public set nIpCreateFail(value: number) {
    this._nIpCreateFail = value;
  }
  public resetNIpCreateFail() {
    this._nIpCreateFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nIpCreateFailInput() {
    return this._nIpCreateFail;
  }

  // n_ip_learned - computed: false, optional: true, required: false
  private _nIpLearned?: number; 
  public get nIpLearned() {
    return this.getNumberAttribute('n_ip_learned');
  }
  public set nIpLearned(value: number) {
    this._nIpLearned = value;
  }
  public resetNIpLearned() {
    this._nIpLearned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nIpLearnedInput() {
    return this._nIpLearned;
  }

  // n_service_aged - computed: false, optional: true, required: false
  private _nServiceAged?: number; 
  public get nServiceAged() {
    return this.getNumberAttribute('n_service_aged');
  }
  public set nServiceAged(value: number) {
    this._nServiceAged = value;
  }
  public resetNServiceAged() {
    this._nServiceAged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nServiceAgedInput() {
    return this._nServiceAged;
  }

  // n_service_create_fail - computed: false, optional: true, required: false
  private _nServiceCreateFail?: number; 
  public get nServiceCreateFail() {
    return this.getNumberAttribute('n_service_create_fail');
  }
  public set nServiceCreateFail(value: number) {
    this._nServiceCreateFail = value;
  }
  public resetNServiceCreateFail() {
    this._nServiceCreateFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nServiceCreateFailInput() {
    return this._nServiceCreateFail;
  }

  // n_service_learned - computed: false, optional: true, required: false
  private _nServiceLearned?: number; 
  public get nServiceLearned() {
    return this.getNumberAttribute('n_service_learned');
  }
  public set nServiceLearned(value: number) {
    this._nServiceLearned = value;
  }
  public resetNServiceLearned() {
    this._nServiceLearned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nServiceLearnedInput() {
    return this._nServiceLearned;
  }

  // n_service_not_found - computed: false, optional: true, required: false
  private _nServiceNotFound?: number; 
  public get nServiceNotFound() {
    return this.getNumberAttribute('n_service_not_found');
  }
  public set nServiceNotFound(value: number) {
    this._nServiceNotFound = value;
  }
  public resetNServiceNotFound() {
    this._nServiceNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nServiceNotFoundInput() {
    return this._nServiceNotFound;
  }

  // n_subnet_aged - computed: false, optional: true, required: false
  private _nSubnetAged?: number; 
  public get nSubnetAged() {
    return this.getNumberAttribute('n_subnet_aged');
  }
  public set nSubnetAged(value: number) {
    this._nSubnetAged = value;
  }
  public resetNSubnetAged() {
    this._nSubnetAged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nSubnetAgedInput() {
    return this._nSubnetAged;
  }

  // n_subnet_create_fail - computed: false, optional: true, required: false
  private _nSubnetCreateFail?: number; 
  public get nSubnetCreateFail() {
    return this.getNumberAttribute('n_subnet_create_fail');
  }
  public set nSubnetCreateFail(value: number) {
    this._nSubnetCreateFail = value;
  }
  public resetNSubnetCreateFail() {
    this._nSubnetCreateFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nSubnetCreateFailInput() {
    return this._nSubnetCreateFail;
  }

  // n_subnet_learned - computed: false, optional: true, required: false
  private _nSubnetLearned?: number; 
  public get nSubnetLearned() {
    return this.getNumberAttribute('n_subnet_learned');
  }
  public set nSubnetLearned(value: number) {
    this._nSubnetLearned = value;
  }
  public resetNSubnetLearned() {
    this._nSubnetLearned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nSubnetLearnedInput() {
    return this._nSubnetLearned;
  }

  // netflow_pkts_received - computed: false, optional: true, required: false
  private _netflowPktsReceived?: number; 
  public get netflowPktsReceived() {
    return this.getNumberAttribute('netflow_pkts_received');
  }
  public set netflowPktsReceived(value: number) {
    this._netflowPktsReceived = value;
  }
  public resetNetflowPktsReceived() {
    this._netflowPktsReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowPktsReceivedInput() {
    return this._netflowPktsReceived;
  }

  // network_match_miss - computed: false, optional: true, required: false
  private _networkMatchMiss?: number; 
  public get networkMatchMiss() {
    return this.getNumberAttribute('network_match_miss');
  }
  public set networkMatchMiss(value: number) {
    this._networkMatchMiss = value;
  }
  public resetNetworkMatchMiss() {
    this._networkMatchMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkMatchMissInput() {
    return this._networkMatchMiss;
  }

  // not_supported_sflow_ver - computed: false, optional: true, required: false
  private _notSupportedSflowVer?: number; 
  public get notSupportedSflowVer() {
    return this.getNumberAttribute('not_supported_sflow_ver');
  }
  public set notSupportedSflowVer(value: number) {
    this._notSupportedSflowVer = value;
  }
  public resetNotSupportedSflowVer() {
    this._notSupportedSflowVer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notSupportedSflowVerInput() {
    return this._notSupportedSflowVer;
  }

  // not_supproted_nflow_ver - computed: false, optional: true, required: false
  private _notSupprotedNflowVer?: number; 
  public get notSupprotedNflowVer() {
    return this.getNumberAttribute('not_supproted_nflow_ver');
  }
  public set notSupprotedNflowVer(value: number) {
    this._notSupprotedNflowVer = value;
  }
  public resetNotSupprotedNflowVer() {
    this._notSupprotedNflowVer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notSupprotedNflowVerInput() {
    return this._notSupprotedNflowVer;
  }

  // object_alloc_oom - computed: false, optional: true, required: false
  private _objectAllocOom?: number; 
  public get objectAllocOom() {
    return this.getNumberAttribute('object_alloc_oom');
  }
  public set objectAllocOom(value: number) {
    this._objectAllocOom = value;
  }
  public resetObjectAllocOom() {
    this._objectAllocOom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectAllocOomInput() {
    return this._objectAllocOom;
  }

  // pkt_drop - computed: false, optional: true, required: false
  private _pktDrop?: number; 
  public get pktDrop() {
    return this.getNumberAttribute('pkt_drop');
  }
  public set pktDrop(value: number) {
    this._pktDrop = value;
  }
  public resetPktDrop() {
    this._pktDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktDropInput() {
    return this._pktDrop;
  }

  // report_alloc_fail - computed: false, optional: true, required: false
  private _reportAllocFail?: number; 
  public get reportAllocFail() {
    return this.getNumberAttribute('report_alloc_fail');
  }
  public set reportAllocFail(value: number) {
    this._reportAllocFail = value;
  }
  public resetReportAllocFail() {
    this._reportAllocFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportAllocFailInput() {
    return this._reportAllocFail;
  }

  // report_enqueue_fail - computed: false, optional: true, required: false
  private _reportEnqueueFail?: number; 
  public get reportEnqueueFail() {
    return this.getNumberAttribute('report_enqueue_fail');
  }
  public set reportEnqueueFail(value: number) {
    this._reportEnqueueFail = value;
  }
  public resetReportEnqueueFail() {
    this._reportEnqueueFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportEnqueueFailInput() {
    return this._reportEnqueueFail;
  }

  // rtbh_start_fail - computed: false, optional: true, required: false
  private _rtbhStartFail?: number; 
  public get rtbhStartFail() {
    return this.getNumberAttribute('rtbh_start_fail');
  }
  public set rtbhStartFail(value: number) {
    this._rtbhStartFail = value;
  }
  public resetRtbhStartFail() {
    this._rtbhStartFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtbhStartFailInput() {
    return this._rtbhStartFail;
  }

  // rtbh_start_sent - computed: false, optional: true, required: false
  private _rtbhStartSent?: number; 
  public get rtbhStartSent() {
    return this.getNumberAttribute('rtbh_start_sent');
  }
  public set rtbhStartSent(value: number) {
    this._rtbhStartSent = value;
  }
  public resetRtbhStartSent() {
    this._rtbhStartSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtbhStartSentInput() {
    return this._rtbhStartSent;
  }

  // rtbh_stop_fail - computed: false, optional: true, required: false
  private _rtbhStopFail?: number; 
  public get rtbhStopFail() {
    return this.getNumberAttribute('rtbh_stop_fail');
  }
  public set rtbhStopFail(value: number) {
    this._rtbhStopFail = value;
  }
  public resetRtbhStopFail() {
    this._rtbhStopFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtbhStopFailInput() {
    return this._rtbhStopFail;
  }

  // rtbh_stop_sent - computed: false, optional: true, required: false
  private _rtbhStopSent?: number; 
  public get rtbhStopSent() {
    return this.getNumberAttribute('rtbh_stop_sent');
  }
  public set rtbhStopSent(value: number) {
    this._rtbhStopSent = value;
  }
  public resetRtbhStopSent() {
    this._rtbhStopSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtbhStopSentInput() {
    return this._rtbhStopSent;
  }

  // sample_procssed - computed: false, optional: true, required: false
  private _sampleProcssed?: number; 
  public get sampleProcssed() {
    return this.getNumberAttribute('sample_procssed');
  }
  public set sampleProcssed(value: number) {
    this._sampleProcssed = value;
  }
  public resetSampleProcssed() {
    this._sampleProcssed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleProcssedInput() {
    return this._sampleProcssed;
  }

  // session_aged - computed: false, optional: true, required: false
  private _sessionAged?: number; 
  public get sessionAged() {
    return this.getNumberAttribute('session_aged');
  }
  public set sessionAged(value: number) {
    this._sessionAged = value;
  }
  public resetSessionAged() {
    this._sessionAged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAgedInput() {
    return this._sessionAged;
  }

  // session_allocate_fail - computed: false, optional: true, required: false
  private _sessionAllocateFail?: number; 
  public get sessionAllocateFail() {
    return this.getNumberAttribute('session_allocate_fail');
  }
  public set sessionAllocateFail(value: number) {
    this._sessionAllocateFail = value;
  }
  public resetSessionAllocateFail() {
    this._sessionAllocateFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionAllocateFailInput() {
    return this._sessionAllocateFail;
  }

  // session_learned - computed: false, optional: true, required: false
  private _sessionLearned?: number; 
  public get sessionLearned() {
    return this.getNumberAttribute('session_learned');
  }
  public set sessionLearned(value: number) {
    this._sessionLearned = value;
  }
  public resetSessionLearned() {
    this._sessionLearned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionLearnedInput() {
    return this._sessionLearned;
  }

  // session_match_miss - computed: false, optional: true, required: false
  private _sessionMatchMiss?: number; 
  public get sessionMatchMiss() {
    return this.getNumberAttribute('session_match_miss');
  }
  public set sessionMatchMiss(value: number) {
    this._sessionMatchMiss = value;
  }
  public resetSessionMatchMiss() {
    this._sessionMatchMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionMatchMissInput() {
    return this._sessionMatchMiss;
  }

  // sflow_packets_received - computed: false, optional: true, required: false
  private _sflowPacketsReceived?: number; 
  public get sflowPacketsReceived() {
    return this.getNumberAttribute('sflow_packets_received');
  }
  public set sflowPacketsReceived(value: number) {
    this._sflowPacketsReceived = value;
  }
  public resetSflowPacketsReceived() {
    this._sflowPacketsReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowPacketsReceivedInput() {
    return this._sflowPacketsReceived;
  }

  // src_age - computed: false, optional: true, required: false
  private _srcAge?: number; 
  public get srcAge() {
    return this.getNumberAttribute('src_age');
  }
  public set srcAge(value: number) {
    this._srcAge = value;
  }
  public resetSrcAge() {
    this._srcAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAgeInput() {
    return this._srcAge;
  }

  // src_hit - computed: false, optional: true, required: false
  private _srcHit?: number; 
  public get srcHit() {
    return this.getNumberAttribute('src_hit');
  }
  public set srcHit(value: number) {
    this._srcHit = value;
  }
  public resetSrcHit() {
    this._srcHit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHitInput() {
    return this._srcHit;
  }

  // src_learn - computed: false, optional: true, required: false
  private _srcLearn?: number; 
  public get srcLearn() {
    return this.getNumberAttribute('src_learn');
  }
  public set srcLearn(value: number) {
    this._srcLearn = value;
  }
  public resetSrcLearn() {
    this._srcLearn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcLearnInput() {
    return this._srcLearn;
  }

  // src_miss - computed: false, optional: true, required: false
  private _srcMiss?: number; 
  public get srcMiss() {
    return this.getNumberAttribute('src_miss');
  }
  public set srcMiss(value: number) {
    this._srcMiss = value;
  }
  public resetSrcMiss() {
    this._srcMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcMissInput() {
    return this._srcMiss;
  }

  // src_port_age - computed: false, optional: true, required: false
  private _srcPortAge?: number; 
  public get srcPortAge() {
    return this.getNumberAttribute('src_port_age');
  }
  public set srcPortAge(value: number) {
    this._srcPortAge = value;
  }
  public resetSrcPortAge() {
    this._srcPortAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortAgeInput() {
    return this._srcPortAge;
  }

  // src_port_hit - computed: false, optional: true, required: false
  private _srcPortHit?: number; 
  public get srcPortHit() {
    return this.getNumberAttribute('src_port_hit');
  }
  public set srcPortHit(value: number) {
    this._srcPortHit = value;
  }
  public resetSrcPortHit() {
    this._srcPortHit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortHitInput() {
    return this._srcPortHit;
  }

  // src_port_learn - computed: false, optional: true, required: false
  private _srcPortLearn?: number; 
  public get srcPortLearn() {
    return this.getNumberAttribute('src_port_learn');
  }
  public set srcPortLearn(value: number) {
    this._srcPortLearn = value;
  }
  public resetSrcPortLearn() {
    this._srcPortLearn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortLearnInput() {
    return this._srcPortLearn;
  }

  // src_port_miss - computed: false, optional: true, required: false
  private _srcPortMiss?: number; 
  public get srcPortMiss() {
    return this.getNumberAttribute('src_port_miss');
  }
  public set srcPortMiss(value: number) {
    this._srcPortMiss = value;
  }
  public resetSrcPortMiss() {
    this._srcPortMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortMissInput() {
    return this._srcPortMiss;
  }

  // unmatch_entry_port_zero - computed: false, optional: true, required: false
  private _unmatchEntryPortZero?: number; 
  public get unmatchEntryPortZero() {
    return this.getNumberAttribute('unmatch_entry_port_zero');
  }
  public set unmatchEntryPortZero(value: number) {
    this._unmatchEntryPortZero = value;
  }
  public resetUnmatchEntryPortZero() {
    this._unmatchEntryPortZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmatchEntryPortZeroInput() {
    return this._unmatchEntryPortZero;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats thunder_ddos_detection_statistics_stats}
*/
export class DataThunderDdosDetectionStatisticsStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_detection_statistics_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDetectionStatisticsStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDetectionStatisticsStats to import
  * @param importFromId The id of the existing DataThunderDdosDetectionStatisticsStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDetectionStatisticsStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_detection_statistics_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_detection_statistics_stats thunder_ddos_detection_statistics_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDetectionStatisticsStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDetectionStatisticsStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_detection_statistics_stats',
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
  private _stats = new DataThunderDdosDetectionStatisticsStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosDetectionStatisticsStatsStats) {
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
      stats: dataThunderDdosDetectionStatisticsStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderDdosDetectionStatisticsStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDetectionStatisticsStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
