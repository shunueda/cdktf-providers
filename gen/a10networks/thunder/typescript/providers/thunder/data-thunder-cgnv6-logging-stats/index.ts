// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6LoggingStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#id DataThunderCgnv6LoggingStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#stats DataThunderCgnv6LoggingStats#stats}
  */
  readonly stats?: DataThunderCgnv6LoggingStatsStats;
}
export interface DataThunderCgnv6LoggingStatsStats {
  /**
  * TCP Connection Lost
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#conn_tcp_dropped DataThunderCgnv6LoggingStats#conn_tcp_dropped}
  */
  readonly connTcpDropped?: number;
  /**
  * TCP Connection Established
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#conn_tcp_established DataThunderCgnv6LoggingStats#conn_tcp_established}
  */
  readonly connTcpEstablished?: number;
  /**
  * Enhanced User Log
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#enhanced_user_log DataThunderCgnv6LoggingStats#enhanced_user_log}
  */
  readonly enhancedUserLog?: number;
  /**
  * ESP Resource Allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#esp_resource_allocated DataThunderCgnv6LoggingStats#esp_resource_allocated}
  */
  readonly espResourceAllocated?: number;
  /**
  * ESP Resource Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#esp_resource_freed DataThunderCgnv6LoggingStats#esp_resource_freed}
  */
  readonly espResourceFreed?: number;
  /**
  * ESP Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#esp_session_created DataThunderCgnv6LoggingStats#esp_session_created}
  */
  readonly espSessionCreated?: number;
  /**
  * ESP Session Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#esp_session_deleted DataThunderCgnv6LoggingStats#esp_session_deleted}
  */
  readonly espSessionDeleted?: number;
  /**
  * Fixed NAT Periodic Configs Logged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#fixed_nat_disable_config_logged DataThunderCgnv6LoggingStats#fixed_nat_disable_config_logged}
  */
  readonly fixedNatDisableConfigLogged?: number;
  /**
  * Fixed NAT Periodic Config Logs Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#fixed_nat_disable_config_logs_sent DataThunderCgnv6LoggingStats#fixed_nat_disable_config_logs_sent}
  */
  readonly fixedNatDisableConfigLogsSent?: number;
  /**
  * Fixed NAT Interim Updated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#fixed_nat_interim_updated DataThunderCgnv6LoggingStats#fixed_nat_interim_updated}
  */
  readonly fixedNatInterimUpdated?: number;
  /**
  * Fixed NAT Disabled Config Logs Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#fixed_nat_periodic_config_logged DataThunderCgnv6LoggingStats#fixed_nat_periodic_config_logged}
  */
  readonly fixedNatPeriodicConfigLogged?: number;
  /**
  * Fixed NAT Disabled Configs Logged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#fixed_nat_periodic_config_logs_sent DataThunderCgnv6LoggingStats#fixed_nat_periodic_config_logs_sent}
  */
  readonly fixedNatPeriodicConfigLogsSent?: number;
  /**
  * Fixed NAT Inside User Port Mapping
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#fixed_nat_user_ports DataThunderCgnv6LoggingStats#fixed_nat_user_ports}
  */
  readonly fixedNatUserPorts?: number;
  /**
  * GRE Resource Allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#gre_resource_allocated DataThunderCgnv6LoggingStats#gre_resource_allocated}
  */
  readonly greResourceAllocated?: number;
  /**
  * GRE Resource Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#gre_resource_freed DataThunderCgnv6LoggingStats#gre_resource_freed}
  */
  readonly greResourceFreed?: number;
  /**
  * GRE Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#gre_session_created DataThunderCgnv6LoggingStats#gre_session_created}
  */
  readonly greSessionCreated?: number;
  /**
  * GRE Session Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#gre_session_deleted DataThunderCgnv6LoggingStats#gre_session_deleted}
  */
  readonly greSessionDeleted?: number;
  /**
  * HTTP Request Logged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#http_request_logged DataThunderCgnv6LoggingStats#http_request_logged}
  */
  readonly httpRequestLogged?: number;
  /**
  * ICMP Resource Allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#icmp_resource_allocated DataThunderCgnv6LoggingStats#icmp_resource_allocated}
  */
  readonly icmpResourceAllocated?: number;
  /**
  * ICMP Resource Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#icmp_resource_freed DataThunderCgnv6LoggingStats#icmp_resource_freed}
  */
  readonly icmpResourceFreed?: number;
  /**
  * ICMP Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#icmp_session_created DataThunderCgnv6LoggingStats#icmp_session_created}
  */
  readonly icmpSessionCreated?: number;
  /**
  * ICMP Session Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#icmp_session_deleted DataThunderCgnv6LoggingStats#icmp_session_deleted}
  */
  readonly icmpSessionDeleted?: number;
  /**
  * ICMPV6 Resource Allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#icmpv6_resource_allocated DataThunderCgnv6LoggingStats#icmpv6_resource_allocated}
  */
  readonly icmpv6ResourceAllocated?: number;
  /**
  * ICMPV6 Resource Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#icmpv6_resource_freed DataThunderCgnv6LoggingStats#icmpv6_resource_freed}
  */
  readonly icmpv6ResourceFreed?: number;
  /**
  * ICMPV6 Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#icmpv6_session_created DataThunderCgnv6LoggingStats#icmpv6_session_created}
  */
  readonly icmpv6SessionCreated?: number;
  /**
  * ICMPV6 Session Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#icmpv6_session_deleted DataThunderCgnv6LoggingStats#icmpv6_session_deleted}
  */
  readonly icmpv6SessionDeleted?: number;
  /**
  * iDDoS L3 Entry Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#iddos_l3_entry_create DataThunderCgnv6LoggingStats#iddos_l3_entry_create}
  */
  readonly iddosL3EntryCreate?: number;
  /**
  * iDDoS L3 Entry Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#iddos_l3_entry_delete DataThunderCgnv6LoggingStats#iddos_l3_entry_delete}
  */
  readonly iddosL3EntryDelete?: number;
  /**
  * iDDoS L4 Entry Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#iddos_l4_entry_create DataThunderCgnv6LoggingStats#iddos_l4_entry_create}
  */
  readonly iddosL4EntryCreate?: number;
  /**
  * iDDoS L4 Entry Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#iddos_l4_entry_delete DataThunderCgnv6LoggingStats#iddos_l4_entry_delete}
  */
  readonly iddosL4EntryDelete?: number;
  /**
  * Port Allocation Interim Update Scheduled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#interim_update_scheduled DataThunderCgnv6LoggingStats#interim_update_scheduled}
  */
  readonly interimUpdateScheduled?: number;
  /**
  * Log Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#log_dropped DataThunderCgnv6LoggingStats#log_dropped}
  */
  readonly logDropped?: number;
  /**
  * Log Packets Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#log_sent DataThunderCgnv6LoggingStats#log_sent}
  */
  readonly logSent?: number;
  /**
  * Reduced Logs by Destination Protocol and Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#reduced_logs_by_destination DataThunderCgnv6LoggingStats#reduced_logs_by_destination}
  */
  readonly reducedLogsByDestination?: number;
  /**
  * TCP Port Allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#tcp_port_allocated DataThunderCgnv6LoggingStats#tcp_port_allocated}
  */
  readonly tcpPortAllocated?: number;
  /**
  * TCP Port Batch Allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#tcp_port_batch_allocated DataThunderCgnv6LoggingStats#tcp_port_batch_allocated}
  */
  readonly tcpPortBatchAllocated?: number;
  /**
  * TCP Port Batch Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#tcp_port_batch_freed DataThunderCgnv6LoggingStats#tcp_port_batch_freed}
  */
  readonly tcpPortBatchFreed?: number;
  /**
  * TCP Port Batch Interim Updated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#tcp_port_batch_interim_updated DataThunderCgnv6LoggingStats#tcp_port_batch_interim_updated}
  */
  readonly tcpPortBatchInterimUpdated?: number;
  /**
  * TCP Port Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#tcp_port_freed DataThunderCgnv6LoggingStats#tcp_port_freed}
  */
  readonly tcpPortFreed?: number;
  /**
  * TCP Port Overloading Allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#tcp_port_overloading_allocated DataThunderCgnv6LoggingStats#tcp_port_overloading_allocated}
  */
  readonly tcpPortOverloadingAllocated?: number;
  /**
  * TCP Port Overloading Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#tcp_port_overloading_freed DataThunderCgnv6LoggingStats#tcp_port_overloading_freed}
  */
  readonly tcpPortOverloadingFreed?: number;
  /**
  * TCP Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#tcp_session_created DataThunderCgnv6LoggingStats#tcp_session_created}
  */
  readonly tcpSessionCreated?: number;
  /**
  * TCP Session Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#tcp_session_deleted DataThunderCgnv6LoggingStats#tcp_session_deleted}
  */
  readonly tcpSessionDeleted?: number;
  /**
  * UDP Port Allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#udp_port_allocated DataThunderCgnv6LoggingStats#udp_port_allocated}
  */
  readonly udpPortAllocated?: number;
  /**
  * UDP Port Batch Allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#udp_port_batch_allocated DataThunderCgnv6LoggingStats#udp_port_batch_allocated}
  */
  readonly udpPortBatchAllocated?: number;
  /**
  * UDP Port Batch Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#udp_port_batch_freed DataThunderCgnv6LoggingStats#udp_port_batch_freed}
  */
  readonly udpPortBatchFreed?: number;
  /**
  * UDP Port Batch Interim Updated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#udp_port_batch_interim_updated DataThunderCgnv6LoggingStats#udp_port_batch_interim_updated}
  */
  readonly udpPortBatchInterimUpdated?: number;
  /**
  * UDP Port Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#udp_port_freed DataThunderCgnv6LoggingStats#udp_port_freed}
  */
  readonly udpPortFreed?: number;
  /**
  * UDP Port Overloading Allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#udp_port_overloading_allocated DataThunderCgnv6LoggingStats#udp_port_overloading_allocated}
  */
  readonly udpPortOverloadingAllocated?: number;
  /**
  * UDP Port Overloading Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#udp_port_overloading_freed DataThunderCgnv6LoggingStats#udp_port_overloading_freed}
  */
  readonly udpPortOverloadingFreed?: number;
  /**
  * UDP Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#udp_session_created DataThunderCgnv6LoggingStats#udp_session_created}
  */
  readonly udpSessionCreated?: number;
  /**
  * UDP Session Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#udp_session_deleted DataThunderCgnv6LoggingStats#udp_session_deleted}
  */
  readonly udpSessionDeleted?: number;
}

export function dataThunderCgnv6LoggingStatsStatsToTerraform(struct?: DataThunderCgnv6LoggingStatsStatsOutputReference | DataThunderCgnv6LoggingStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conn_tcp_dropped: cdktf.numberToTerraform(struct!.connTcpDropped),
    conn_tcp_established: cdktf.numberToTerraform(struct!.connTcpEstablished),
    enhanced_user_log: cdktf.numberToTerraform(struct!.enhancedUserLog),
    esp_resource_allocated: cdktf.numberToTerraform(struct!.espResourceAllocated),
    esp_resource_freed: cdktf.numberToTerraform(struct!.espResourceFreed),
    esp_session_created: cdktf.numberToTerraform(struct!.espSessionCreated),
    esp_session_deleted: cdktf.numberToTerraform(struct!.espSessionDeleted),
    fixed_nat_disable_config_logged: cdktf.numberToTerraform(struct!.fixedNatDisableConfigLogged),
    fixed_nat_disable_config_logs_sent: cdktf.numberToTerraform(struct!.fixedNatDisableConfigLogsSent),
    fixed_nat_interim_updated: cdktf.numberToTerraform(struct!.fixedNatInterimUpdated),
    fixed_nat_periodic_config_logged: cdktf.numberToTerraform(struct!.fixedNatPeriodicConfigLogged),
    fixed_nat_periodic_config_logs_sent: cdktf.numberToTerraform(struct!.fixedNatPeriodicConfigLogsSent),
    fixed_nat_user_ports: cdktf.numberToTerraform(struct!.fixedNatUserPorts),
    gre_resource_allocated: cdktf.numberToTerraform(struct!.greResourceAllocated),
    gre_resource_freed: cdktf.numberToTerraform(struct!.greResourceFreed),
    gre_session_created: cdktf.numberToTerraform(struct!.greSessionCreated),
    gre_session_deleted: cdktf.numberToTerraform(struct!.greSessionDeleted),
    http_request_logged: cdktf.numberToTerraform(struct!.httpRequestLogged),
    icmp_resource_allocated: cdktf.numberToTerraform(struct!.icmpResourceAllocated),
    icmp_resource_freed: cdktf.numberToTerraform(struct!.icmpResourceFreed),
    icmp_session_created: cdktf.numberToTerraform(struct!.icmpSessionCreated),
    icmp_session_deleted: cdktf.numberToTerraform(struct!.icmpSessionDeleted),
    icmpv6_resource_allocated: cdktf.numberToTerraform(struct!.icmpv6ResourceAllocated),
    icmpv6_resource_freed: cdktf.numberToTerraform(struct!.icmpv6ResourceFreed),
    icmpv6_session_created: cdktf.numberToTerraform(struct!.icmpv6SessionCreated),
    icmpv6_session_deleted: cdktf.numberToTerraform(struct!.icmpv6SessionDeleted),
    iddos_l3_entry_create: cdktf.numberToTerraform(struct!.iddosL3EntryCreate),
    iddos_l3_entry_delete: cdktf.numberToTerraform(struct!.iddosL3EntryDelete),
    iddos_l4_entry_create: cdktf.numberToTerraform(struct!.iddosL4EntryCreate),
    iddos_l4_entry_delete: cdktf.numberToTerraform(struct!.iddosL4EntryDelete),
    interim_update_scheduled: cdktf.numberToTerraform(struct!.interimUpdateScheduled),
    log_dropped: cdktf.numberToTerraform(struct!.logDropped),
    log_sent: cdktf.numberToTerraform(struct!.logSent),
    reduced_logs_by_destination: cdktf.numberToTerraform(struct!.reducedLogsByDestination),
    tcp_port_allocated: cdktf.numberToTerraform(struct!.tcpPortAllocated),
    tcp_port_batch_allocated: cdktf.numberToTerraform(struct!.tcpPortBatchAllocated),
    tcp_port_batch_freed: cdktf.numberToTerraform(struct!.tcpPortBatchFreed),
    tcp_port_batch_interim_updated: cdktf.numberToTerraform(struct!.tcpPortBatchInterimUpdated),
    tcp_port_freed: cdktf.numberToTerraform(struct!.tcpPortFreed),
    tcp_port_overloading_allocated: cdktf.numberToTerraform(struct!.tcpPortOverloadingAllocated),
    tcp_port_overloading_freed: cdktf.numberToTerraform(struct!.tcpPortOverloadingFreed),
    tcp_session_created: cdktf.numberToTerraform(struct!.tcpSessionCreated),
    tcp_session_deleted: cdktf.numberToTerraform(struct!.tcpSessionDeleted),
    udp_port_allocated: cdktf.numberToTerraform(struct!.udpPortAllocated),
    udp_port_batch_allocated: cdktf.numberToTerraform(struct!.udpPortBatchAllocated),
    udp_port_batch_freed: cdktf.numberToTerraform(struct!.udpPortBatchFreed),
    udp_port_batch_interim_updated: cdktf.numberToTerraform(struct!.udpPortBatchInterimUpdated),
    udp_port_freed: cdktf.numberToTerraform(struct!.udpPortFreed),
    udp_port_overloading_allocated: cdktf.numberToTerraform(struct!.udpPortOverloadingAllocated),
    udp_port_overloading_freed: cdktf.numberToTerraform(struct!.udpPortOverloadingFreed),
    udp_session_created: cdktf.numberToTerraform(struct!.udpSessionCreated),
    udp_session_deleted: cdktf.numberToTerraform(struct!.udpSessionDeleted),
  }
}


export function dataThunderCgnv6LoggingStatsStatsToHclTerraform(struct?: DataThunderCgnv6LoggingStatsStatsOutputReference | DataThunderCgnv6LoggingStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conn_tcp_dropped: {
      value: cdktf.numberToHclTerraform(struct!.connTcpDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_tcp_established: {
      value: cdktf.numberToHclTerraform(struct!.connTcpEstablished),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enhanced_user_log: {
      value: cdktf.numberToHclTerraform(struct!.enhancedUserLog),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    esp_resource_allocated: {
      value: cdktf.numberToHclTerraform(struct!.espResourceAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    esp_resource_freed: {
      value: cdktf.numberToHclTerraform(struct!.espResourceFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    esp_session_created: {
      value: cdktf.numberToHclTerraform(struct!.espSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    esp_session_deleted: {
      value: cdktf.numberToHclTerraform(struct!.espSessionDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_nat_disable_config_logged: {
      value: cdktf.numberToHclTerraform(struct!.fixedNatDisableConfigLogged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_nat_disable_config_logs_sent: {
      value: cdktf.numberToHclTerraform(struct!.fixedNatDisableConfigLogsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_nat_interim_updated: {
      value: cdktf.numberToHclTerraform(struct!.fixedNatInterimUpdated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_nat_periodic_config_logged: {
      value: cdktf.numberToHclTerraform(struct!.fixedNatPeriodicConfigLogged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_nat_periodic_config_logs_sent: {
      value: cdktf.numberToHclTerraform(struct!.fixedNatPeriodicConfigLogsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_nat_user_ports: {
      value: cdktf.numberToHclTerraform(struct!.fixedNatUserPorts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gre_resource_allocated: {
      value: cdktf.numberToHclTerraform(struct!.greResourceAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gre_resource_freed: {
      value: cdktf.numberToHclTerraform(struct!.greResourceFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gre_session_created: {
      value: cdktf.numberToHclTerraform(struct!.greSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gre_session_deleted: {
      value: cdktf.numberToHclTerraform(struct!.greSessionDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_request_logged: {
      value: cdktf.numberToHclTerraform(struct!.httpRequestLogged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_resource_allocated: {
      value: cdktf.numberToHclTerraform(struct!.icmpResourceAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_resource_freed: {
      value: cdktf.numberToHclTerraform(struct!.icmpResourceFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_session_created: {
      value: cdktf.numberToHclTerraform(struct!.icmpSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_session_deleted: {
      value: cdktf.numberToHclTerraform(struct!.icmpSessionDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_resource_allocated: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6ResourceAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_resource_freed: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6ResourceFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_session_created: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6SessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_session_deleted: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6SessionDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iddos_l3_entry_create: {
      value: cdktf.numberToHclTerraform(struct!.iddosL3EntryCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iddos_l3_entry_delete: {
      value: cdktf.numberToHclTerraform(struct!.iddosL3EntryDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iddos_l4_entry_create: {
      value: cdktf.numberToHclTerraform(struct!.iddosL4EntryCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    iddos_l4_entry_delete: {
      value: cdktf.numberToHclTerraform(struct!.iddosL4EntryDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interim_update_scheduled: {
      value: cdktf.numberToHclTerraform(struct!.interimUpdateScheduled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_dropped: {
      value: cdktf.numberToHclTerraform(struct!.logDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_sent: {
      value: cdktf.numberToHclTerraform(struct!.logSent),
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
    tcp_port_allocated: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_port_batch_allocated: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortBatchAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_port_batch_freed: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortBatchFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_port_batch_interim_updated: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortBatchInterimUpdated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_port_freed: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_port_overloading_allocated: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortOverloadingAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_port_overloading_freed: {
      value: cdktf.numberToHclTerraform(struct!.tcpPortOverloadingFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_session_created: {
      value: cdktf.numberToHclTerraform(struct!.tcpSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_session_deleted: {
      value: cdktf.numberToHclTerraform(struct!.tcpSessionDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_allocated: {
      value: cdktf.numberToHclTerraform(struct!.udpPortAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_batch_allocated: {
      value: cdktf.numberToHclTerraform(struct!.udpPortBatchAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_batch_freed: {
      value: cdktf.numberToHclTerraform(struct!.udpPortBatchFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_batch_interim_updated: {
      value: cdktf.numberToHclTerraform(struct!.udpPortBatchInterimUpdated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_freed: {
      value: cdktf.numberToHclTerraform(struct!.udpPortFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_overloading_allocated: {
      value: cdktf.numberToHclTerraform(struct!.udpPortOverloadingAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_overloading_freed: {
      value: cdktf.numberToHclTerraform(struct!.udpPortOverloadingFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_session_created: {
      value: cdktf.numberToHclTerraform(struct!.udpSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_session_deleted: {
      value: cdktf.numberToHclTerraform(struct!.udpSessionDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6LoggingStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6LoggingStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connTcpDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.connTcpDropped = this._connTcpDropped;
    }
    if (this._connTcpEstablished !== undefined) {
      hasAnyValues = true;
      internalValueResult.connTcpEstablished = this._connTcpEstablished;
    }
    if (this._enhancedUserLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhancedUserLog = this._enhancedUserLog;
    }
    if (this._espResourceAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.espResourceAllocated = this._espResourceAllocated;
    }
    if (this._espResourceFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.espResourceFreed = this._espResourceFreed;
    }
    if (this._espSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.espSessionCreated = this._espSessionCreated;
    }
    if (this._espSessionDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.espSessionDeleted = this._espSessionDeleted;
    }
    if (this._fixedNatDisableConfigLogged !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedNatDisableConfigLogged = this._fixedNatDisableConfigLogged;
    }
    if (this._fixedNatDisableConfigLogsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedNatDisableConfigLogsSent = this._fixedNatDisableConfigLogsSent;
    }
    if (this._fixedNatInterimUpdated !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedNatInterimUpdated = this._fixedNatInterimUpdated;
    }
    if (this._fixedNatPeriodicConfigLogged !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedNatPeriodicConfigLogged = this._fixedNatPeriodicConfigLogged;
    }
    if (this._fixedNatPeriodicConfigLogsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedNatPeriodicConfigLogsSent = this._fixedNatPeriodicConfigLogsSent;
    }
    if (this._fixedNatUserPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedNatUserPorts = this._fixedNatUserPorts;
    }
    if (this._greResourceAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.greResourceAllocated = this._greResourceAllocated;
    }
    if (this._greResourceFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.greResourceFreed = this._greResourceFreed;
    }
    if (this._greSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.greSessionCreated = this._greSessionCreated;
    }
    if (this._greSessionDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.greSessionDeleted = this._greSessionDeleted;
    }
    if (this._httpRequestLogged !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRequestLogged = this._httpRequestLogged;
    }
    if (this._icmpResourceAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpResourceAllocated = this._icmpResourceAllocated;
    }
    if (this._icmpResourceFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpResourceFreed = this._icmpResourceFreed;
    }
    if (this._icmpSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpSessionCreated = this._icmpSessionCreated;
    }
    if (this._icmpSessionDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpSessionDeleted = this._icmpSessionDeleted;
    }
    if (this._icmpv6ResourceAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6ResourceAllocated = this._icmpv6ResourceAllocated;
    }
    if (this._icmpv6ResourceFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6ResourceFreed = this._icmpv6ResourceFreed;
    }
    if (this._icmpv6SessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6SessionCreated = this._icmpv6SessionCreated;
    }
    if (this._icmpv6SessionDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6SessionDeleted = this._icmpv6SessionDeleted;
    }
    if (this._iddosL3EntryCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.iddosL3EntryCreate = this._iddosL3EntryCreate;
    }
    if (this._iddosL3EntryDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.iddosL3EntryDelete = this._iddosL3EntryDelete;
    }
    if (this._iddosL4EntryCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.iddosL4EntryCreate = this._iddosL4EntryCreate;
    }
    if (this._iddosL4EntryDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.iddosL4EntryDelete = this._iddosL4EntryDelete;
    }
    if (this._interimUpdateScheduled !== undefined) {
      hasAnyValues = true;
      internalValueResult.interimUpdateScheduled = this._interimUpdateScheduled;
    }
    if (this._logDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.logDropped = this._logDropped;
    }
    if (this._logSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.logSent = this._logSent;
    }
    if (this._reducedLogsByDestination !== undefined) {
      hasAnyValues = true;
      internalValueResult.reducedLogsByDestination = this._reducedLogsByDestination;
    }
    if (this._tcpPortAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortAllocated = this._tcpPortAllocated;
    }
    if (this._tcpPortBatchAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortBatchAllocated = this._tcpPortBatchAllocated;
    }
    if (this._tcpPortBatchFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortBatchFreed = this._tcpPortBatchFreed;
    }
    if (this._tcpPortBatchInterimUpdated !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortBatchInterimUpdated = this._tcpPortBatchInterimUpdated;
    }
    if (this._tcpPortFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortFreed = this._tcpPortFreed;
    }
    if (this._tcpPortOverloadingAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortOverloadingAllocated = this._tcpPortOverloadingAllocated;
    }
    if (this._tcpPortOverloadingFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPortOverloadingFreed = this._tcpPortOverloadingFreed;
    }
    if (this._tcpSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSessionCreated = this._tcpSessionCreated;
    }
    if (this._tcpSessionDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSessionDeleted = this._tcpSessionDeleted;
    }
    if (this._udpPortAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortAllocated = this._udpPortAllocated;
    }
    if (this._udpPortBatchAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortBatchAllocated = this._udpPortBatchAllocated;
    }
    if (this._udpPortBatchFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortBatchFreed = this._udpPortBatchFreed;
    }
    if (this._udpPortBatchInterimUpdated !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortBatchInterimUpdated = this._udpPortBatchInterimUpdated;
    }
    if (this._udpPortFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortFreed = this._udpPortFreed;
    }
    if (this._udpPortOverloadingAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortOverloadingAllocated = this._udpPortOverloadingAllocated;
    }
    if (this._udpPortOverloadingFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortOverloadingFreed = this._udpPortOverloadingFreed;
    }
    if (this._udpSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpSessionCreated = this._udpSessionCreated;
    }
    if (this._udpSessionDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpSessionDeleted = this._udpSessionDeleted;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6LoggingStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connTcpDropped = undefined;
      this._connTcpEstablished = undefined;
      this._enhancedUserLog = undefined;
      this._espResourceAllocated = undefined;
      this._espResourceFreed = undefined;
      this._espSessionCreated = undefined;
      this._espSessionDeleted = undefined;
      this._fixedNatDisableConfigLogged = undefined;
      this._fixedNatDisableConfigLogsSent = undefined;
      this._fixedNatInterimUpdated = undefined;
      this._fixedNatPeriodicConfigLogged = undefined;
      this._fixedNatPeriodicConfigLogsSent = undefined;
      this._fixedNatUserPorts = undefined;
      this._greResourceAllocated = undefined;
      this._greResourceFreed = undefined;
      this._greSessionCreated = undefined;
      this._greSessionDeleted = undefined;
      this._httpRequestLogged = undefined;
      this._icmpResourceAllocated = undefined;
      this._icmpResourceFreed = undefined;
      this._icmpSessionCreated = undefined;
      this._icmpSessionDeleted = undefined;
      this._icmpv6ResourceAllocated = undefined;
      this._icmpv6ResourceFreed = undefined;
      this._icmpv6SessionCreated = undefined;
      this._icmpv6SessionDeleted = undefined;
      this._iddosL3EntryCreate = undefined;
      this._iddosL3EntryDelete = undefined;
      this._iddosL4EntryCreate = undefined;
      this._iddosL4EntryDelete = undefined;
      this._interimUpdateScheduled = undefined;
      this._logDropped = undefined;
      this._logSent = undefined;
      this._reducedLogsByDestination = undefined;
      this._tcpPortAllocated = undefined;
      this._tcpPortBatchAllocated = undefined;
      this._tcpPortBatchFreed = undefined;
      this._tcpPortBatchInterimUpdated = undefined;
      this._tcpPortFreed = undefined;
      this._tcpPortOverloadingAllocated = undefined;
      this._tcpPortOverloadingFreed = undefined;
      this._tcpSessionCreated = undefined;
      this._tcpSessionDeleted = undefined;
      this._udpPortAllocated = undefined;
      this._udpPortBatchAllocated = undefined;
      this._udpPortBatchFreed = undefined;
      this._udpPortBatchInterimUpdated = undefined;
      this._udpPortFreed = undefined;
      this._udpPortOverloadingAllocated = undefined;
      this._udpPortOverloadingFreed = undefined;
      this._udpSessionCreated = undefined;
      this._udpSessionDeleted = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connTcpDropped = value.connTcpDropped;
      this._connTcpEstablished = value.connTcpEstablished;
      this._enhancedUserLog = value.enhancedUserLog;
      this._espResourceAllocated = value.espResourceAllocated;
      this._espResourceFreed = value.espResourceFreed;
      this._espSessionCreated = value.espSessionCreated;
      this._espSessionDeleted = value.espSessionDeleted;
      this._fixedNatDisableConfigLogged = value.fixedNatDisableConfigLogged;
      this._fixedNatDisableConfigLogsSent = value.fixedNatDisableConfigLogsSent;
      this._fixedNatInterimUpdated = value.fixedNatInterimUpdated;
      this._fixedNatPeriodicConfigLogged = value.fixedNatPeriodicConfigLogged;
      this._fixedNatPeriodicConfigLogsSent = value.fixedNatPeriodicConfigLogsSent;
      this._fixedNatUserPorts = value.fixedNatUserPorts;
      this._greResourceAllocated = value.greResourceAllocated;
      this._greResourceFreed = value.greResourceFreed;
      this._greSessionCreated = value.greSessionCreated;
      this._greSessionDeleted = value.greSessionDeleted;
      this._httpRequestLogged = value.httpRequestLogged;
      this._icmpResourceAllocated = value.icmpResourceAllocated;
      this._icmpResourceFreed = value.icmpResourceFreed;
      this._icmpSessionCreated = value.icmpSessionCreated;
      this._icmpSessionDeleted = value.icmpSessionDeleted;
      this._icmpv6ResourceAllocated = value.icmpv6ResourceAllocated;
      this._icmpv6ResourceFreed = value.icmpv6ResourceFreed;
      this._icmpv6SessionCreated = value.icmpv6SessionCreated;
      this._icmpv6SessionDeleted = value.icmpv6SessionDeleted;
      this._iddosL3EntryCreate = value.iddosL3EntryCreate;
      this._iddosL3EntryDelete = value.iddosL3EntryDelete;
      this._iddosL4EntryCreate = value.iddosL4EntryCreate;
      this._iddosL4EntryDelete = value.iddosL4EntryDelete;
      this._interimUpdateScheduled = value.interimUpdateScheduled;
      this._logDropped = value.logDropped;
      this._logSent = value.logSent;
      this._reducedLogsByDestination = value.reducedLogsByDestination;
      this._tcpPortAllocated = value.tcpPortAllocated;
      this._tcpPortBatchAllocated = value.tcpPortBatchAllocated;
      this._tcpPortBatchFreed = value.tcpPortBatchFreed;
      this._tcpPortBatchInterimUpdated = value.tcpPortBatchInterimUpdated;
      this._tcpPortFreed = value.tcpPortFreed;
      this._tcpPortOverloadingAllocated = value.tcpPortOverloadingAllocated;
      this._tcpPortOverloadingFreed = value.tcpPortOverloadingFreed;
      this._tcpSessionCreated = value.tcpSessionCreated;
      this._tcpSessionDeleted = value.tcpSessionDeleted;
      this._udpPortAllocated = value.udpPortAllocated;
      this._udpPortBatchAllocated = value.udpPortBatchAllocated;
      this._udpPortBatchFreed = value.udpPortBatchFreed;
      this._udpPortBatchInterimUpdated = value.udpPortBatchInterimUpdated;
      this._udpPortFreed = value.udpPortFreed;
      this._udpPortOverloadingAllocated = value.udpPortOverloadingAllocated;
      this._udpPortOverloadingFreed = value.udpPortOverloadingFreed;
      this._udpSessionCreated = value.udpSessionCreated;
      this._udpSessionDeleted = value.udpSessionDeleted;
    }
  }

  // conn_tcp_dropped - computed: false, optional: true, required: false
  private _connTcpDropped?: number; 
  public get connTcpDropped() {
    return this.getNumberAttribute('conn_tcp_dropped');
  }
  public set connTcpDropped(value: number) {
    this._connTcpDropped = value;
  }
  public resetConnTcpDropped() {
    this._connTcpDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connTcpDroppedInput() {
    return this._connTcpDropped;
  }

  // conn_tcp_established - computed: false, optional: true, required: false
  private _connTcpEstablished?: number; 
  public get connTcpEstablished() {
    return this.getNumberAttribute('conn_tcp_established');
  }
  public set connTcpEstablished(value: number) {
    this._connTcpEstablished = value;
  }
  public resetConnTcpEstablished() {
    this._connTcpEstablished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connTcpEstablishedInput() {
    return this._connTcpEstablished;
  }

  // enhanced_user_log - computed: false, optional: true, required: false
  private _enhancedUserLog?: number; 
  public get enhancedUserLog() {
    return this.getNumberAttribute('enhanced_user_log');
  }
  public set enhancedUserLog(value: number) {
    this._enhancedUserLog = value;
  }
  public resetEnhancedUserLog() {
    this._enhancedUserLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhancedUserLogInput() {
    return this._enhancedUserLog;
  }

  // esp_resource_allocated - computed: false, optional: true, required: false
  private _espResourceAllocated?: number; 
  public get espResourceAllocated() {
    return this.getNumberAttribute('esp_resource_allocated');
  }
  public set espResourceAllocated(value: number) {
    this._espResourceAllocated = value;
  }
  public resetEspResourceAllocated() {
    this._espResourceAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get espResourceAllocatedInput() {
    return this._espResourceAllocated;
  }

  // esp_resource_freed - computed: false, optional: true, required: false
  private _espResourceFreed?: number; 
  public get espResourceFreed() {
    return this.getNumberAttribute('esp_resource_freed');
  }
  public set espResourceFreed(value: number) {
    this._espResourceFreed = value;
  }
  public resetEspResourceFreed() {
    this._espResourceFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get espResourceFreedInput() {
    return this._espResourceFreed;
  }

  // esp_session_created - computed: false, optional: true, required: false
  private _espSessionCreated?: number; 
  public get espSessionCreated() {
    return this.getNumberAttribute('esp_session_created');
  }
  public set espSessionCreated(value: number) {
    this._espSessionCreated = value;
  }
  public resetEspSessionCreated() {
    this._espSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get espSessionCreatedInput() {
    return this._espSessionCreated;
  }

  // esp_session_deleted - computed: false, optional: true, required: false
  private _espSessionDeleted?: number; 
  public get espSessionDeleted() {
    return this.getNumberAttribute('esp_session_deleted');
  }
  public set espSessionDeleted(value: number) {
    this._espSessionDeleted = value;
  }
  public resetEspSessionDeleted() {
    this._espSessionDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get espSessionDeletedInput() {
    return this._espSessionDeleted;
  }

  // fixed_nat_disable_config_logged - computed: false, optional: true, required: false
  private _fixedNatDisableConfigLogged?: number; 
  public get fixedNatDisableConfigLogged() {
    return this.getNumberAttribute('fixed_nat_disable_config_logged');
  }
  public set fixedNatDisableConfigLogged(value: number) {
    this._fixedNatDisableConfigLogged = value;
  }
  public resetFixedNatDisableConfigLogged() {
    this._fixedNatDisableConfigLogged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNatDisableConfigLoggedInput() {
    return this._fixedNatDisableConfigLogged;
  }

  // fixed_nat_disable_config_logs_sent - computed: false, optional: true, required: false
  private _fixedNatDisableConfigLogsSent?: number; 
  public get fixedNatDisableConfigLogsSent() {
    return this.getNumberAttribute('fixed_nat_disable_config_logs_sent');
  }
  public set fixedNatDisableConfigLogsSent(value: number) {
    this._fixedNatDisableConfigLogsSent = value;
  }
  public resetFixedNatDisableConfigLogsSent() {
    this._fixedNatDisableConfigLogsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNatDisableConfigLogsSentInput() {
    return this._fixedNatDisableConfigLogsSent;
  }

  // fixed_nat_interim_updated - computed: false, optional: true, required: false
  private _fixedNatInterimUpdated?: number; 
  public get fixedNatInterimUpdated() {
    return this.getNumberAttribute('fixed_nat_interim_updated');
  }
  public set fixedNatInterimUpdated(value: number) {
    this._fixedNatInterimUpdated = value;
  }
  public resetFixedNatInterimUpdated() {
    this._fixedNatInterimUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNatInterimUpdatedInput() {
    return this._fixedNatInterimUpdated;
  }

  // fixed_nat_periodic_config_logged - computed: false, optional: true, required: false
  private _fixedNatPeriodicConfigLogged?: number; 
  public get fixedNatPeriodicConfigLogged() {
    return this.getNumberAttribute('fixed_nat_periodic_config_logged');
  }
  public set fixedNatPeriodicConfigLogged(value: number) {
    this._fixedNatPeriodicConfigLogged = value;
  }
  public resetFixedNatPeriodicConfigLogged() {
    this._fixedNatPeriodicConfigLogged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNatPeriodicConfigLoggedInput() {
    return this._fixedNatPeriodicConfigLogged;
  }

  // fixed_nat_periodic_config_logs_sent - computed: false, optional: true, required: false
  private _fixedNatPeriodicConfigLogsSent?: number; 
  public get fixedNatPeriodicConfigLogsSent() {
    return this.getNumberAttribute('fixed_nat_periodic_config_logs_sent');
  }
  public set fixedNatPeriodicConfigLogsSent(value: number) {
    this._fixedNatPeriodicConfigLogsSent = value;
  }
  public resetFixedNatPeriodicConfigLogsSent() {
    this._fixedNatPeriodicConfigLogsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNatPeriodicConfigLogsSentInput() {
    return this._fixedNatPeriodicConfigLogsSent;
  }

  // fixed_nat_user_ports - computed: false, optional: true, required: false
  private _fixedNatUserPorts?: number; 
  public get fixedNatUserPorts() {
    return this.getNumberAttribute('fixed_nat_user_ports');
  }
  public set fixedNatUserPorts(value: number) {
    this._fixedNatUserPorts = value;
  }
  public resetFixedNatUserPorts() {
    this._fixedNatUserPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNatUserPortsInput() {
    return this._fixedNatUserPorts;
  }

  // gre_resource_allocated - computed: false, optional: true, required: false
  private _greResourceAllocated?: number; 
  public get greResourceAllocated() {
    return this.getNumberAttribute('gre_resource_allocated');
  }
  public set greResourceAllocated(value: number) {
    this._greResourceAllocated = value;
  }
  public resetGreResourceAllocated() {
    this._greResourceAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greResourceAllocatedInput() {
    return this._greResourceAllocated;
  }

  // gre_resource_freed - computed: false, optional: true, required: false
  private _greResourceFreed?: number; 
  public get greResourceFreed() {
    return this.getNumberAttribute('gre_resource_freed');
  }
  public set greResourceFreed(value: number) {
    this._greResourceFreed = value;
  }
  public resetGreResourceFreed() {
    this._greResourceFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greResourceFreedInput() {
    return this._greResourceFreed;
  }

  // gre_session_created - computed: false, optional: true, required: false
  private _greSessionCreated?: number; 
  public get greSessionCreated() {
    return this.getNumberAttribute('gre_session_created');
  }
  public set greSessionCreated(value: number) {
    this._greSessionCreated = value;
  }
  public resetGreSessionCreated() {
    this._greSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greSessionCreatedInput() {
    return this._greSessionCreated;
  }

  // gre_session_deleted - computed: false, optional: true, required: false
  private _greSessionDeleted?: number; 
  public get greSessionDeleted() {
    return this.getNumberAttribute('gre_session_deleted');
  }
  public set greSessionDeleted(value: number) {
    this._greSessionDeleted = value;
  }
  public resetGreSessionDeleted() {
    this._greSessionDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greSessionDeletedInput() {
    return this._greSessionDeleted;
  }

  // http_request_logged - computed: false, optional: true, required: false
  private _httpRequestLogged?: number; 
  public get httpRequestLogged() {
    return this.getNumberAttribute('http_request_logged');
  }
  public set httpRequestLogged(value: number) {
    this._httpRequestLogged = value;
  }
  public resetHttpRequestLogged() {
    this._httpRequestLogged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRequestLoggedInput() {
    return this._httpRequestLogged;
  }

  // icmp_resource_allocated - computed: false, optional: true, required: false
  private _icmpResourceAllocated?: number; 
  public get icmpResourceAllocated() {
    return this.getNumberAttribute('icmp_resource_allocated');
  }
  public set icmpResourceAllocated(value: number) {
    this._icmpResourceAllocated = value;
  }
  public resetIcmpResourceAllocated() {
    this._icmpResourceAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpResourceAllocatedInput() {
    return this._icmpResourceAllocated;
  }

  // icmp_resource_freed - computed: false, optional: true, required: false
  private _icmpResourceFreed?: number; 
  public get icmpResourceFreed() {
    return this.getNumberAttribute('icmp_resource_freed');
  }
  public set icmpResourceFreed(value: number) {
    this._icmpResourceFreed = value;
  }
  public resetIcmpResourceFreed() {
    this._icmpResourceFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpResourceFreedInput() {
    return this._icmpResourceFreed;
  }

  // icmp_session_created - computed: false, optional: true, required: false
  private _icmpSessionCreated?: number; 
  public get icmpSessionCreated() {
    return this.getNumberAttribute('icmp_session_created');
  }
  public set icmpSessionCreated(value: number) {
    this._icmpSessionCreated = value;
  }
  public resetIcmpSessionCreated() {
    this._icmpSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpSessionCreatedInput() {
    return this._icmpSessionCreated;
  }

  // icmp_session_deleted - computed: false, optional: true, required: false
  private _icmpSessionDeleted?: number; 
  public get icmpSessionDeleted() {
    return this.getNumberAttribute('icmp_session_deleted');
  }
  public set icmpSessionDeleted(value: number) {
    this._icmpSessionDeleted = value;
  }
  public resetIcmpSessionDeleted() {
    this._icmpSessionDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpSessionDeletedInput() {
    return this._icmpSessionDeleted;
  }

  // icmpv6_resource_allocated - computed: false, optional: true, required: false
  private _icmpv6ResourceAllocated?: number; 
  public get icmpv6ResourceAllocated() {
    return this.getNumberAttribute('icmpv6_resource_allocated');
  }
  public set icmpv6ResourceAllocated(value: number) {
    this._icmpv6ResourceAllocated = value;
  }
  public resetIcmpv6ResourceAllocated() {
    this._icmpv6ResourceAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6ResourceAllocatedInput() {
    return this._icmpv6ResourceAllocated;
  }

  // icmpv6_resource_freed - computed: false, optional: true, required: false
  private _icmpv6ResourceFreed?: number; 
  public get icmpv6ResourceFreed() {
    return this.getNumberAttribute('icmpv6_resource_freed');
  }
  public set icmpv6ResourceFreed(value: number) {
    this._icmpv6ResourceFreed = value;
  }
  public resetIcmpv6ResourceFreed() {
    this._icmpv6ResourceFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6ResourceFreedInput() {
    return this._icmpv6ResourceFreed;
  }

  // icmpv6_session_created - computed: false, optional: true, required: false
  private _icmpv6SessionCreated?: number; 
  public get icmpv6SessionCreated() {
    return this.getNumberAttribute('icmpv6_session_created');
  }
  public set icmpv6SessionCreated(value: number) {
    this._icmpv6SessionCreated = value;
  }
  public resetIcmpv6SessionCreated() {
    this._icmpv6SessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6SessionCreatedInput() {
    return this._icmpv6SessionCreated;
  }

  // icmpv6_session_deleted - computed: false, optional: true, required: false
  private _icmpv6SessionDeleted?: number; 
  public get icmpv6SessionDeleted() {
    return this.getNumberAttribute('icmpv6_session_deleted');
  }
  public set icmpv6SessionDeleted(value: number) {
    this._icmpv6SessionDeleted = value;
  }
  public resetIcmpv6SessionDeleted() {
    this._icmpv6SessionDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6SessionDeletedInput() {
    return this._icmpv6SessionDeleted;
  }

  // iddos_l3_entry_create - computed: false, optional: true, required: false
  private _iddosL3EntryCreate?: number; 
  public get iddosL3EntryCreate() {
    return this.getNumberAttribute('iddos_l3_entry_create');
  }
  public set iddosL3EntryCreate(value: number) {
    this._iddosL3EntryCreate = value;
  }
  public resetIddosL3EntryCreate() {
    this._iddosL3EntryCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iddosL3EntryCreateInput() {
    return this._iddosL3EntryCreate;
  }

  // iddos_l3_entry_delete - computed: false, optional: true, required: false
  private _iddosL3EntryDelete?: number; 
  public get iddosL3EntryDelete() {
    return this.getNumberAttribute('iddos_l3_entry_delete');
  }
  public set iddosL3EntryDelete(value: number) {
    this._iddosL3EntryDelete = value;
  }
  public resetIddosL3EntryDelete() {
    this._iddosL3EntryDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iddosL3EntryDeleteInput() {
    return this._iddosL3EntryDelete;
  }

  // iddos_l4_entry_create - computed: false, optional: true, required: false
  private _iddosL4EntryCreate?: number; 
  public get iddosL4EntryCreate() {
    return this.getNumberAttribute('iddos_l4_entry_create');
  }
  public set iddosL4EntryCreate(value: number) {
    this._iddosL4EntryCreate = value;
  }
  public resetIddosL4EntryCreate() {
    this._iddosL4EntryCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iddosL4EntryCreateInput() {
    return this._iddosL4EntryCreate;
  }

  // iddos_l4_entry_delete - computed: false, optional: true, required: false
  private _iddosL4EntryDelete?: number; 
  public get iddosL4EntryDelete() {
    return this.getNumberAttribute('iddos_l4_entry_delete');
  }
  public set iddosL4EntryDelete(value: number) {
    this._iddosL4EntryDelete = value;
  }
  public resetIddosL4EntryDelete() {
    this._iddosL4EntryDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iddosL4EntryDeleteInput() {
    return this._iddosL4EntryDelete;
  }

  // interim_update_scheduled - computed: false, optional: true, required: false
  private _interimUpdateScheduled?: number; 
  public get interimUpdateScheduled() {
    return this.getNumberAttribute('interim_update_scheduled');
  }
  public set interimUpdateScheduled(value: number) {
    this._interimUpdateScheduled = value;
  }
  public resetInterimUpdateScheduled() {
    this._interimUpdateScheduled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interimUpdateScheduledInput() {
    return this._interimUpdateScheduled;
  }

  // log_dropped - computed: false, optional: true, required: false
  private _logDropped?: number; 
  public get logDropped() {
    return this.getNumberAttribute('log_dropped');
  }
  public set logDropped(value: number) {
    this._logDropped = value;
  }
  public resetLogDropped() {
    this._logDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDroppedInput() {
    return this._logDropped;
  }

  // log_sent - computed: false, optional: true, required: false
  private _logSent?: number; 
  public get logSent() {
    return this.getNumberAttribute('log_sent');
  }
  public set logSent(value: number) {
    this._logSent = value;
  }
  public resetLogSent() {
    this._logSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSentInput() {
    return this._logSent;
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

  // tcp_port_allocated - computed: false, optional: true, required: false
  private _tcpPortAllocated?: number; 
  public get tcpPortAllocated() {
    return this.getNumberAttribute('tcp_port_allocated');
  }
  public set tcpPortAllocated(value: number) {
    this._tcpPortAllocated = value;
  }
  public resetTcpPortAllocated() {
    this._tcpPortAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortAllocatedInput() {
    return this._tcpPortAllocated;
  }

  // tcp_port_batch_allocated - computed: false, optional: true, required: false
  private _tcpPortBatchAllocated?: number; 
  public get tcpPortBatchAllocated() {
    return this.getNumberAttribute('tcp_port_batch_allocated');
  }
  public set tcpPortBatchAllocated(value: number) {
    this._tcpPortBatchAllocated = value;
  }
  public resetTcpPortBatchAllocated() {
    this._tcpPortBatchAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortBatchAllocatedInput() {
    return this._tcpPortBatchAllocated;
  }

  // tcp_port_batch_freed - computed: false, optional: true, required: false
  private _tcpPortBatchFreed?: number; 
  public get tcpPortBatchFreed() {
    return this.getNumberAttribute('tcp_port_batch_freed');
  }
  public set tcpPortBatchFreed(value: number) {
    this._tcpPortBatchFreed = value;
  }
  public resetTcpPortBatchFreed() {
    this._tcpPortBatchFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortBatchFreedInput() {
    return this._tcpPortBatchFreed;
  }

  // tcp_port_batch_interim_updated - computed: false, optional: true, required: false
  private _tcpPortBatchInterimUpdated?: number; 
  public get tcpPortBatchInterimUpdated() {
    return this.getNumberAttribute('tcp_port_batch_interim_updated');
  }
  public set tcpPortBatchInterimUpdated(value: number) {
    this._tcpPortBatchInterimUpdated = value;
  }
  public resetTcpPortBatchInterimUpdated() {
    this._tcpPortBatchInterimUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortBatchInterimUpdatedInput() {
    return this._tcpPortBatchInterimUpdated;
  }

  // tcp_port_freed - computed: false, optional: true, required: false
  private _tcpPortFreed?: number; 
  public get tcpPortFreed() {
    return this.getNumberAttribute('tcp_port_freed');
  }
  public set tcpPortFreed(value: number) {
    this._tcpPortFreed = value;
  }
  public resetTcpPortFreed() {
    this._tcpPortFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortFreedInput() {
    return this._tcpPortFreed;
  }

  // tcp_port_overloading_allocated - computed: false, optional: true, required: false
  private _tcpPortOverloadingAllocated?: number; 
  public get tcpPortOverloadingAllocated() {
    return this.getNumberAttribute('tcp_port_overloading_allocated');
  }
  public set tcpPortOverloadingAllocated(value: number) {
    this._tcpPortOverloadingAllocated = value;
  }
  public resetTcpPortOverloadingAllocated() {
    this._tcpPortOverloadingAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortOverloadingAllocatedInput() {
    return this._tcpPortOverloadingAllocated;
  }

  // tcp_port_overloading_freed - computed: false, optional: true, required: false
  private _tcpPortOverloadingFreed?: number; 
  public get tcpPortOverloadingFreed() {
    return this.getNumberAttribute('tcp_port_overloading_freed');
  }
  public set tcpPortOverloadingFreed(value: number) {
    this._tcpPortOverloadingFreed = value;
  }
  public resetTcpPortOverloadingFreed() {
    this._tcpPortOverloadingFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortOverloadingFreedInput() {
    return this._tcpPortOverloadingFreed;
  }

  // tcp_session_created - computed: false, optional: true, required: false
  private _tcpSessionCreated?: number; 
  public get tcpSessionCreated() {
    return this.getNumberAttribute('tcp_session_created');
  }
  public set tcpSessionCreated(value: number) {
    this._tcpSessionCreated = value;
  }
  public resetTcpSessionCreated() {
    this._tcpSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSessionCreatedInput() {
    return this._tcpSessionCreated;
  }

  // tcp_session_deleted - computed: false, optional: true, required: false
  private _tcpSessionDeleted?: number; 
  public get tcpSessionDeleted() {
    return this.getNumberAttribute('tcp_session_deleted');
  }
  public set tcpSessionDeleted(value: number) {
    this._tcpSessionDeleted = value;
  }
  public resetTcpSessionDeleted() {
    this._tcpSessionDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSessionDeletedInput() {
    return this._tcpSessionDeleted;
  }

  // udp_port_allocated - computed: false, optional: true, required: false
  private _udpPortAllocated?: number; 
  public get udpPortAllocated() {
    return this.getNumberAttribute('udp_port_allocated');
  }
  public set udpPortAllocated(value: number) {
    this._udpPortAllocated = value;
  }
  public resetUdpPortAllocated() {
    this._udpPortAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortAllocatedInput() {
    return this._udpPortAllocated;
  }

  // udp_port_batch_allocated - computed: false, optional: true, required: false
  private _udpPortBatchAllocated?: number; 
  public get udpPortBatchAllocated() {
    return this.getNumberAttribute('udp_port_batch_allocated');
  }
  public set udpPortBatchAllocated(value: number) {
    this._udpPortBatchAllocated = value;
  }
  public resetUdpPortBatchAllocated() {
    this._udpPortBatchAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortBatchAllocatedInput() {
    return this._udpPortBatchAllocated;
  }

  // udp_port_batch_freed - computed: false, optional: true, required: false
  private _udpPortBatchFreed?: number; 
  public get udpPortBatchFreed() {
    return this.getNumberAttribute('udp_port_batch_freed');
  }
  public set udpPortBatchFreed(value: number) {
    this._udpPortBatchFreed = value;
  }
  public resetUdpPortBatchFreed() {
    this._udpPortBatchFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortBatchFreedInput() {
    return this._udpPortBatchFreed;
  }

  // udp_port_batch_interim_updated - computed: false, optional: true, required: false
  private _udpPortBatchInterimUpdated?: number; 
  public get udpPortBatchInterimUpdated() {
    return this.getNumberAttribute('udp_port_batch_interim_updated');
  }
  public set udpPortBatchInterimUpdated(value: number) {
    this._udpPortBatchInterimUpdated = value;
  }
  public resetUdpPortBatchInterimUpdated() {
    this._udpPortBatchInterimUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortBatchInterimUpdatedInput() {
    return this._udpPortBatchInterimUpdated;
  }

  // udp_port_freed - computed: false, optional: true, required: false
  private _udpPortFreed?: number; 
  public get udpPortFreed() {
    return this.getNumberAttribute('udp_port_freed');
  }
  public set udpPortFreed(value: number) {
    this._udpPortFreed = value;
  }
  public resetUdpPortFreed() {
    this._udpPortFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortFreedInput() {
    return this._udpPortFreed;
  }

  // udp_port_overloading_allocated - computed: false, optional: true, required: false
  private _udpPortOverloadingAllocated?: number; 
  public get udpPortOverloadingAllocated() {
    return this.getNumberAttribute('udp_port_overloading_allocated');
  }
  public set udpPortOverloadingAllocated(value: number) {
    this._udpPortOverloadingAllocated = value;
  }
  public resetUdpPortOverloadingAllocated() {
    this._udpPortOverloadingAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortOverloadingAllocatedInput() {
    return this._udpPortOverloadingAllocated;
  }

  // udp_port_overloading_freed - computed: false, optional: true, required: false
  private _udpPortOverloadingFreed?: number; 
  public get udpPortOverloadingFreed() {
    return this.getNumberAttribute('udp_port_overloading_freed');
  }
  public set udpPortOverloadingFreed(value: number) {
    this._udpPortOverloadingFreed = value;
  }
  public resetUdpPortOverloadingFreed() {
    this._udpPortOverloadingFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortOverloadingFreedInput() {
    return this._udpPortOverloadingFreed;
  }

  // udp_session_created - computed: false, optional: true, required: false
  private _udpSessionCreated?: number; 
  public get udpSessionCreated() {
    return this.getNumberAttribute('udp_session_created');
  }
  public set udpSessionCreated(value: number) {
    this._udpSessionCreated = value;
  }
  public resetUdpSessionCreated() {
    this._udpSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpSessionCreatedInput() {
    return this._udpSessionCreated;
  }

  // udp_session_deleted - computed: false, optional: true, required: false
  private _udpSessionDeleted?: number; 
  public get udpSessionDeleted() {
    return this.getNumberAttribute('udp_session_deleted');
  }
  public set udpSessionDeleted(value: number) {
    this._udpSessionDeleted = value;
  }
  public resetUdpSessionDeleted() {
    this._udpSessionDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpSessionDeletedInput() {
    return this._udpSessionDeleted;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats thunder_cgnv6_logging_stats}
*/
export class DataThunderCgnv6LoggingStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_logging_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6LoggingStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6LoggingStats to import
  * @param importFromId The id of the existing DataThunderCgnv6LoggingStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6LoggingStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_logging_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_logging_stats thunder_cgnv6_logging_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6LoggingStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6LoggingStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_logging_stats',
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
  private _stats = new DataThunderCgnv6LoggingStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6LoggingStatsStats) {
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
      stats: dataThunderCgnv6LoggingStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderCgnv6LoggingStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6LoggingStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
