// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDstZoneIpProtoProtoNumberPortIndStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#id DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ProtocolNum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#protocol_num DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#protocol_num}
  */
  readonly protocolNum: string;
  /**
  * ZoneName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#zone_name DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#zone_name}
  */
  readonly zoneName: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#stats DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#stats}
  */
  readonly stats?: DataThunderDdosDstZoneIpProtoProtoNumberPortIndStatsStats;
}
export interface DataThunderDdosDstZoneIpProtoProtoNumberPortIndStatsStats {
  /**
  * Bit Rate Adaptive Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_bit_rate_adaptive_threshold DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_bit_rate_adaptive_threshold}
  */
  readonly ddetIndBitRateAdaptiveThreshold?: number;
  /**
  * Bit Rate Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_bit_rate_current DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_bit_rate_current}
  */
  readonly ddetIndBitRateCurrent?: number;
  /**
  * Bit Rate Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_bit_rate_max DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_bit_rate_max}
  */
  readonly ddetIndBitRateMax?: number;
  /**
  * Bit Rate Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_bit_rate_min DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_bit_rate_min}
  */
  readonly ddetIndBitRateMin?: number;
  /**
  * TCP/UDP Concurrent Sessions Adaptive Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_concurrent_conns_adaptive_threshold DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_concurrent_conns_adaptive_threshold}
  */
  readonly ddetIndConcurrentConnsAdaptiveThreshold?: number;
  /**
  * TCP/UDP Concurrent Sessions Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_concurrent_conns_current DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_concurrent_conns_current}
  */
  readonly ddetIndConcurrentConnsCurrent?: number;
  /**
  * TCP/UDP Concurrent Sessions Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_concurrent_conns_max DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_concurrent_conns_max}
  */
  readonly ddetIndConcurrentConnsMax?: number;
  /**
  * TCP/UDP Concurrent Sessions Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_concurrent_conns_min DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_concurrent_conns_min}
  */
  readonly ddetIndConcurrentConnsMin?: number;
  /**
  * TCP Session Miss Rate Adaptive Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_conn_miss_rate_adaptive_threshold DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_conn_miss_rate_adaptive_threshold}
  */
  readonly ddetIndConnMissRateAdaptiveThreshold?: number;
  /**
  * TCP Session Miss Rate Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_conn_miss_rate_current DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_conn_miss_rate_current}
  */
  readonly ddetIndConnMissRateCurrent?: number;
  /**
  * TCP Session Miss Rate Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_conn_miss_rate_max DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_conn_miss_rate_max}
  */
  readonly ddetIndConnMissRateMax?: number;
  /**
  * TCP Session Miss Rate Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_conn_miss_rate_min DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_conn_miss_rate_min}
  */
  readonly ddetIndConnMissRateMin?: number;
  /**
  * Data CPU Utilization Adaptive Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_data_cpu_util_adaptive_threshold DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_data_cpu_util_adaptive_threshold}
  */
  readonly ddetIndDataCpuUtilAdaptiveThreshold?: number;
  /**
  * Data CPU Utilization Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_data_cpu_util_current DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_data_cpu_util_current}
  */
  readonly ddetIndDataCpuUtilCurrent?: number;
  /**
  * Data CPU Utilization Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_data_cpu_util_max DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_data_cpu_util_max}
  */
  readonly ddetIndDataCpuUtilMax?: number;
  /**
  * Data CPU Utilization Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_data_cpu_util_min DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_data_cpu_util_min}
  */
  readonly ddetIndDataCpuUtilMin?: number;
  /**
  * TCP Empty ACK Rate Adaptive Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_empty_ack_rate_adaptive_threshold DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_empty_ack_rate_adaptive_threshold}
  */
  readonly ddetIndEmptyAckRateAdaptiveThreshold?: number;
  /**
  * TCP Empty ACK Rate Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_empty_ack_rate_current DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_empty_ack_rate_current}
  */
  readonly ddetIndEmptyAckRateCurrent?: number;
  /**
  * TCP Empty ACK Rate Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_empty_ack_rate_max DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_empty_ack_rate_max}
  */
  readonly ddetIndEmptyAckRateMax?: number;
  /**
  * TCP Empty ACK Rate Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_empty_ack_rate_min DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_empty_ack_rate_min}
  */
  readonly ddetIndEmptyAckRateMin?: number;
  /**
  * TCP FIN Rate Adaptive Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_fin_rate_adaptive_threshold DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_fin_rate_adaptive_threshold}
  */
  readonly ddetIndFinRateAdaptiveThreshold?: number;
  /**
  * TCP FIN Rate Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_fin_rate_current DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_fin_rate_current}
  */
  readonly ddetIndFinRateCurrent?: number;
  /**
  * TCP FIN Rate Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_fin_rate_max DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_fin_rate_max}
  */
  readonly ddetIndFinRateMax?: number;
  /**
  * TCP FIN Rate Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_fin_rate_min DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_fin_rate_min}
  */
  readonly ddetIndFinRateMin?: number;
  /**
  * Frag Pkt Rate Adaptive Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_frag_rate_adaptive_threshold DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_frag_rate_adaptive_threshold}
  */
  readonly ddetIndFragRateAdaptiveThreshold?: number;
  /**
  * Frag Pkt Rate Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_frag_rate_current DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_frag_rate_current}
  */
  readonly ddetIndFragRateCurrent?: number;
  /**
  * Frag Pkt Rate Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_frag_rate_max DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_frag_rate_max}
  */
  readonly ddetIndFragRateMax?: number;
  /**
  * Frag Pkt Rate Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_frag_rate_min DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_frag_rate_min}
  */
  readonly ddetIndFragRateMin?: number;
  /**
  * Bytes-to / Bytes-from Adaptive Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_inb_per_outb_adaptive_threshold DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_inb_per_outb_adaptive_threshold}
  */
  readonly ddetIndInbPerOutbAdaptiveThreshold?: number;
  /**
  * Bytes-to / Bytes-from Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_inb_per_outb_current DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_inb_per_outb_current}
  */
  readonly ddetIndInbPerOutbCurrent?: number;
  /**
  * Bytes-to / Bytes-from Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_inb_per_outb_max DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_inb_per_outb_max}
  */
  readonly ddetIndInbPerOutbMax?: number;
  /**
  * Bytes-to / Bytes-from Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_inb_per_outb_min DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_inb_per_outb_min}
  */
  readonly ddetIndInbPerOutbMin?: number;
  /**
  * Outside Interface Utilization Adaptive Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_outside_intf_util_adaptive_threshold DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_outside_intf_util_adaptive_threshold}
  */
  readonly ddetIndOutsideIntfUtilAdaptiveThreshold?: number;
  /**
  * Outside Interface Utilization Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_outside_intf_util_current DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_outside_intf_util_current}
  */
  readonly ddetIndOutsideIntfUtilCurrent?: number;
  /**
  * Outside Interface Utilization Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_outside_intf_util_max DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_outside_intf_util_max}
  */
  readonly ddetIndOutsideIntfUtilMax?: number;
  /**
  * Outside Interface Utilization Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_outside_intf_util_min DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_outside_intf_util_min}
  */
  readonly ddetIndOutsideIntfUtilMin?: number;
  /**
  * Pkt Drop Rate Adaptive Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_pkt_drop_rate_adaptive_threshold DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_pkt_drop_rate_adaptive_threshold}
  */
  readonly ddetIndPktDropRateAdaptiveThreshold?: number;
  /**
  * Pkt Drop Rate Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_pkt_drop_rate_current DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_pkt_drop_rate_current}
  */
  readonly ddetIndPktDropRateCurrent?: number;
  /**
  * Pkt Drop Rate Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_pkt_drop_rate_max DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_pkt_drop_rate_max}
  */
  readonly ddetIndPktDropRateMax?: number;
  /**
  * Pkt Drop Rate Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_pkt_drop_rate_min DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_pkt_drop_rate_min}
  */
  readonly ddetIndPktDropRateMin?: number;
  /**
  * Pkt Drop / Pkt Rcvd Adaptive Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_pkt_drop_ratio_adaptive_threshold DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_pkt_drop_ratio_adaptive_threshold}
  */
  readonly ddetIndPktDropRatioAdaptiveThreshold?: number;
  /**
  * Pkt Drop / Pkt Rcvd Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_pkt_drop_ratio_current DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_pkt_drop_ratio_current}
  */
  readonly ddetIndPktDropRatioCurrent?: number;
  /**
  * Pkt Drop / Pkt Rcvd Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_pkt_drop_ratio_max DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_pkt_drop_ratio_max}
  */
  readonly ddetIndPktDropRatioMax?: number;
  /**
  * Pkt Drop / Pkt Rcvd Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_pkt_drop_ratio_min DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_pkt_drop_ratio_min}
  */
  readonly ddetIndPktDropRatioMin?: number;
  /**
  * Pkt Rate Adaptive Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_pkt_rate_adaptive_threshold DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_pkt_rate_adaptive_threshold}
  */
  readonly ddetIndPktRateAdaptiveThreshold?: number;
  /**
  * Pkt Rate Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_pkt_rate_current DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_pkt_rate_current}
  */
  readonly ddetIndPktRateCurrent?: number;
  /**
  * Pkt Rate Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_pkt_rate_max DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_pkt_rate_max}
  */
  readonly ddetIndPktRateMax?: number;
  /**
  * Pkt Rate Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_pkt_rate_min DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_pkt_rate_min}
  */
  readonly ddetIndPktRateMin?: number;
  /**
  * TCP RST Rate Adaptive Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_rst_rate_adaptive_threshold DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_rst_rate_adaptive_threshold}
  */
  readonly ddetIndRstRateAdaptiveThreshold?: number;
  /**
  * TCP RST Rate Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_rst_rate_current DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_rst_rate_current}
  */
  readonly ddetIndRstRateCurrent?: number;
  /**
  * TCP RST Rate Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_rst_rate_max DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_rst_rate_max}
  */
  readonly ddetIndRstRateMax?: number;
  /**
  * TCP RST Rate Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_rst_rate_min DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_rst_rate_min}
  */
  readonly ddetIndRstRateMin?: number;
  /**
  * TCP Small Payload Rate Adaptive Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_small_payload_rate_adaptive_threshold DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_small_payload_rate_adaptive_threshold}
  */
  readonly ddetIndSmallPayloadRateAdaptiveThreshold?: number;
  /**
  * TCP Small Payload Rate Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_small_payload_rate_current DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_small_payload_rate_current}
  */
  readonly ddetIndSmallPayloadRateCurrent?: number;
  /**
  * TCP Small Payload Rate Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_small_payload_rate_max DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_small_payload_rate_max}
  */
  readonly ddetIndSmallPayloadRateMax?: number;
  /**
  * TCP Small Payload Rate Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_small_payload_rate_min DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_small_payload_rate_min}
  */
  readonly ddetIndSmallPayloadRateMin?: number;
  /**
  * TCP Small Window ACK Rate Adaptive Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_small_window_ack_rate_adaptive_threshold DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_small_window_ack_rate_adaptive_threshold}
  */
  readonly ddetIndSmallWindowAckRateAdaptiveThreshold?: number;
  /**
  * TCP Small Window ACK Rate Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_small_window_ack_rate_current DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_small_window_ack_rate_current}
  */
  readonly ddetIndSmallWindowAckRateCurrent?: number;
  /**
  * TCP Small Window ACK Rate Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_small_window_ack_rate_max DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_small_window_ack_rate_max}
  */
  readonly ddetIndSmallWindowAckRateMax?: number;
  /**
  * TCP Small Window ACK Rate Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_small_window_ack_rate_min DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_small_window_ack_rate_min}
  */
  readonly ddetIndSmallWindowAckRateMin?: number;
  /**
  * TCP SYN ACK Adaptive Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_syn_ack_rate_adaptive_threshold DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_syn_ack_rate_adaptive_threshold}
  */
  readonly ddetIndSynAckRateAdaptiveThreshold?: number;
  /**
  * TCP SYN ACK Rate Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_syn_ack_rate_current DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_syn_ack_rate_current}
  */
  readonly ddetIndSynAckRateCurrent?: number;
  /**
  * TCP SYN ACK Rate Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_syn_ack_rate_max DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_syn_ack_rate_max}
  */
  readonly ddetIndSynAckRateMax?: number;
  /**
  * TCP SYN ACK Rate Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_syn_ack_rate_min DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_syn_ack_rate_min}
  */
  readonly ddetIndSynAckRateMin?: number;
  /**
  * TCP SYN Rate / FIN Rate Adaptive Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_syn_per_fin_rate_adaptive_threshold DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_syn_per_fin_rate_adaptive_threshold}
  */
  readonly ddetIndSynPerFinRateAdaptiveThreshold?: number;
  /**
  * TCP SYN Rate / FIN Rate Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_syn_per_fin_rate_current DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_syn_per_fin_rate_current}
  */
  readonly ddetIndSynPerFinRateCurrent?: number;
  /**
  * TCP SYN Rate / FIN Rate Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_syn_per_fin_rate_max DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_syn_per_fin_rate_max}
  */
  readonly ddetIndSynPerFinRateMax?: number;
  /**
  * TCP SYN Rate / FIN Rate Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_syn_per_fin_rate_min DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_syn_per_fin_rate_min}
  */
  readonly ddetIndSynPerFinRateMin?: number;
  /**
  * TCP SYN Rate Adaptive Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_syn_rate_adaptive_threshold DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_syn_rate_adaptive_threshold}
  */
  readonly ddetIndSynRateAdaptiveThreshold?: number;
  /**
  * TCP SYN Rate Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_syn_rate_current DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_syn_rate_current}
  */
  readonly ddetIndSynRateCurrent?: number;
  /**
  * TCP SYN Rate Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_syn_rate_max DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_syn_rate_max}
  */
  readonly ddetIndSynRateMax?: number;
  /**
  * TCP SYN Rate Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_syn_rate_min DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_syn_rate_min}
  */
  readonly ddetIndSynRateMin?: number;
  /**
  * Total Learnt Sources Adaptive Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_total_szp_adaptive_threshold DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_total_szp_adaptive_threshold}
  */
  readonly ddetIndTotalSzpAdaptiveThreshold?: number;
  /**
  * Total Learnt Sources Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_total_szp_current DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_total_szp_current}
  */
  readonly ddetIndTotalSzpCurrent?: number;
  /**
  * Total Learnt Sources Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_total_szp_max DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_total_szp_max}
  */
  readonly ddetIndTotalSzpMax?: number;
  /**
  * Total Learnt Sources Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ddet_ind_total_szp_min DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ddet_ind_total_szp_min}
  */
  readonly ddetIndTotalSzpMin?: number;
  /**
  * IP Protocol Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#ip_proto_type DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats#ip_proto_type}
  */
  readonly ipProtoType?: number;
}

export function dataThunderDdosDstZoneIpProtoProtoNumberPortIndStatsStatsToTerraform(struct?: DataThunderDdosDstZoneIpProtoProtoNumberPortIndStatsStatsOutputReference | DataThunderDdosDstZoneIpProtoProtoNumberPortIndStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ddet_ind_bit_rate_adaptive_threshold: cdktf.numberToTerraform(struct!.ddetIndBitRateAdaptiveThreshold),
    ddet_ind_bit_rate_current: cdktf.numberToTerraform(struct!.ddetIndBitRateCurrent),
    ddet_ind_bit_rate_max: cdktf.numberToTerraform(struct!.ddetIndBitRateMax),
    ddet_ind_bit_rate_min: cdktf.numberToTerraform(struct!.ddetIndBitRateMin),
    ddet_ind_concurrent_conns_adaptive_threshold: cdktf.numberToTerraform(struct!.ddetIndConcurrentConnsAdaptiveThreshold),
    ddet_ind_concurrent_conns_current: cdktf.numberToTerraform(struct!.ddetIndConcurrentConnsCurrent),
    ddet_ind_concurrent_conns_max: cdktf.numberToTerraform(struct!.ddetIndConcurrentConnsMax),
    ddet_ind_concurrent_conns_min: cdktf.numberToTerraform(struct!.ddetIndConcurrentConnsMin),
    ddet_ind_conn_miss_rate_adaptive_threshold: cdktf.numberToTerraform(struct!.ddetIndConnMissRateAdaptiveThreshold),
    ddet_ind_conn_miss_rate_current: cdktf.numberToTerraform(struct!.ddetIndConnMissRateCurrent),
    ddet_ind_conn_miss_rate_max: cdktf.numberToTerraform(struct!.ddetIndConnMissRateMax),
    ddet_ind_conn_miss_rate_min: cdktf.numberToTerraform(struct!.ddetIndConnMissRateMin),
    ddet_ind_data_cpu_util_adaptive_threshold: cdktf.numberToTerraform(struct!.ddetIndDataCpuUtilAdaptiveThreshold),
    ddet_ind_data_cpu_util_current: cdktf.numberToTerraform(struct!.ddetIndDataCpuUtilCurrent),
    ddet_ind_data_cpu_util_max: cdktf.numberToTerraform(struct!.ddetIndDataCpuUtilMax),
    ddet_ind_data_cpu_util_min: cdktf.numberToTerraform(struct!.ddetIndDataCpuUtilMin),
    ddet_ind_empty_ack_rate_adaptive_threshold: cdktf.numberToTerraform(struct!.ddetIndEmptyAckRateAdaptiveThreshold),
    ddet_ind_empty_ack_rate_current: cdktf.numberToTerraform(struct!.ddetIndEmptyAckRateCurrent),
    ddet_ind_empty_ack_rate_max: cdktf.numberToTerraform(struct!.ddetIndEmptyAckRateMax),
    ddet_ind_empty_ack_rate_min: cdktf.numberToTerraform(struct!.ddetIndEmptyAckRateMin),
    ddet_ind_fin_rate_adaptive_threshold: cdktf.numberToTerraform(struct!.ddetIndFinRateAdaptiveThreshold),
    ddet_ind_fin_rate_current: cdktf.numberToTerraform(struct!.ddetIndFinRateCurrent),
    ddet_ind_fin_rate_max: cdktf.numberToTerraform(struct!.ddetIndFinRateMax),
    ddet_ind_fin_rate_min: cdktf.numberToTerraform(struct!.ddetIndFinRateMin),
    ddet_ind_frag_rate_adaptive_threshold: cdktf.numberToTerraform(struct!.ddetIndFragRateAdaptiveThreshold),
    ddet_ind_frag_rate_current: cdktf.numberToTerraform(struct!.ddetIndFragRateCurrent),
    ddet_ind_frag_rate_max: cdktf.numberToTerraform(struct!.ddetIndFragRateMax),
    ddet_ind_frag_rate_min: cdktf.numberToTerraform(struct!.ddetIndFragRateMin),
    ddet_ind_inb_per_outb_adaptive_threshold: cdktf.numberToTerraform(struct!.ddetIndInbPerOutbAdaptiveThreshold),
    ddet_ind_inb_per_outb_current: cdktf.numberToTerraform(struct!.ddetIndInbPerOutbCurrent),
    ddet_ind_inb_per_outb_max: cdktf.numberToTerraform(struct!.ddetIndInbPerOutbMax),
    ddet_ind_inb_per_outb_min: cdktf.numberToTerraform(struct!.ddetIndInbPerOutbMin),
    ddet_ind_outside_intf_util_adaptive_threshold: cdktf.numberToTerraform(struct!.ddetIndOutsideIntfUtilAdaptiveThreshold),
    ddet_ind_outside_intf_util_current: cdktf.numberToTerraform(struct!.ddetIndOutsideIntfUtilCurrent),
    ddet_ind_outside_intf_util_max: cdktf.numberToTerraform(struct!.ddetIndOutsideIntfUtilMax),
    ddet_ind_outside_intf_util_min: cdktf.numberToTerraform(struct!.ddetIndOutsideIntfUtilMin),
    ddet_ind_pkt_drop_rate_adaptive_threshold: cdktf.numberToTerraform(struct!.ddetIndPktDropRateAdaptiveThreshold),
    ddet_ind_pkt_drop_rate_current: cdktf.numberToTerraform(struct!.ddetIndPktDropRateCurrent),
    ddet_ind_pkt_drop_rate_max: cdktf.numberToTerraform(struct!.ddetIndPktDropRateMax),
    ddet_ind_pkt_drop_rate_min: cdktf.numberToTerraform(struct!.ddetIndPktDropRateMin),
    ddet_ind_pkt_drop_ratio_adaptive_threshold: cdktf.numberToTerraform(struct!.ddetIndPktDropRatioAdaptiveThreshold),
    ddet_ind_pkt_drop_ratio_current: cdktf.numberToTerraform(struct!.ddetIndPktDropRatioCurrent),
    ddet_ind_pkt_drop_ratio_max: cdktf.numberToTerraform(struct!.ddetIndPktDropRatioMax),
    ddet_ind_pkt_drop_ratio_min: cdktf.numberToTerraform(struct!.ddetIndPktDropRatioMin),
    ddet_ind_pkt_rate_adaptive_threshold: cdktf.numberToTerraform(struct!.ddetIndPktRateAdaptiveThreshold),
    ddet_ind_pkt_rate_current: cdktf.numberToTerraform(struct!.ddetIndPktRateCurrent),
    ddet_ind_pkt_rate_max: cdktf.numberToTerraform(struct!.ddetIndPktRateMax),
    ddet_ind_pkt_rate_min: cdktf.numberToTerraform(struct!.ddetIndPktRateMin),
    ddet_ind_rst_rate_adaptive_threshold: cdktf.numberToTerraform(struct!.ddetIndRstRateAdaptiveThreshold),
    ddet_ind_rst_rate_current: cdktf.numberToTerraform(struct!.ddetIndRstRateCurrent),
    ddet_ind_rst_rate_max: cdktf.numberToTerraform(struct!.ddetIndRstRateMax),
    ddet_ind_rst_rate_min: cdktf.numberToTerraform(struct!.ddetIndRstRateMin),
    ddet_ind_small_payload_rate_adaptive_threshold: cdktf.numberToTerraform(struct!.ddetIndSmallPayloadRateAdaptiveThreshold),
    ddet_ind_small_payload_rate_current: cdktf.numberToTerraform(struct!.ddetIndSmallPayloadRateCurrent),
    ddet_ind_small_payload_rate_max: cdktf.numberToTerraform(struct!.ddetIndSmallPayloadRateMax),
    ddet_ind_small_payload_rate_min: cdktf.numberToTerraform(struct!.ddetIndSmallPayloadRateMin),
    ddet_ind_small_window_ack_rate_adaptive_threshold: cdktf.numberToTerraform(struct!.ddetIndSmallWindowAckRateAdaptiveThreshold),
    ddet_ind_small_window_ack_rate_current: cdktf.numberToTerraform(struct!.ddetIndSmallWindowAckRateCurrent),
    ddet_ind_small_window_ack_rate_max: cdktf.numberToTerraform(struct!.ddetIndSmallWindowAckRateMax),
    ddet_ind_small_window_ack_rate_min: cdktf.numberToTerraform(struct!.ddetIndSmallWindowAckRateMin),
    ddet_ind_syn_ack_rate_adaptive_threshold: cdktf.numberToTerraform(struct!.ddetIndSynAckRateAdaptiveThreshold),
    ddet_ind_syn_ack_rate_current: cdktf.numberToTerraform(struct!.ddetIndSynAckRateCurrent),
    ddet_ind_syn_ack_rate_max: cdktf.numberToTerraform(struct!.ddetIndSynAckRateMax),
    ddet_ind_syn_ack_rate_min: cdktf.numberToTerraform(struct!.ddetIndSynAckRateMin),
    ddet_ind_syn_per_fin_rate_adaptive_threshold: cdktf.numberToTerraform(struct!.ddetIndSynPerFinRateAdaptiveThreshold),
    ddet_ind_syn_per_fin_rate_current: cdktf.numberToTerraform(struct!.ddetIndSynPerFinRateCurrent),
    ddet_ind_syn_per_fin_rate_max: cdktf.numberToTerraform(struct!.ddetIndSynPerFinRateMax),
    ddet_ind_syn_per_fin_rate_min: cdktf.numberToTerraform(struct!.ddetIndSynPerFinRateMin),
    ddet_ind_syn_rate_adaptive_threshold: cdktf.numberToTerraform(struct!.ddetIndSynRateAdaptiveThreshold),
    ddet_ind_syn_rate_current: cdktf.numberToTerraform(struct!.ddetIndSynRateCurrent),
    ddet_ind_syn_rate_max: cdktf.numberToTerraform(struct!.ddetIndSynRateMax),
    ddet_ind_syn_rate_min: cdktf.numberToTerraform(struct!.ddetIndSynRateMin),
    ddet_ind_total_szp_adaptive_threshold: cdktf.numberToTerraform(struct!.ddetIndTotalSzpAdaptiveThreshold),
    ddet_ind_total_szp_current: cdktf.numberToTerraform(struct!.ddetIndTotalSzpCurrent),
    ddet_ind_total_szp_max: cdktf.numberToTerraform(struct!.ddetIndTotalSzpMax),
    ddet_ind_total_szp_min: cdktf.numberToTerraform(struct!.ddetIndTotalSzpMin),
    ip_proto_type: cdktf.numberToTerraform(struct!.ipProtoType),
  }
}


export function dataThunderDdosDstZoneIpProtoProtoNumberPortIndStatsStatsToHclTerraform(struct?: DataThunderDdosDstZoneIpProtoProtoNumberPortIndStatsStatsOutputReference | DataThunderDdosDstZoneIpProtoProtoNumberPortIndStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ddet_ind_bit_rate_adaptive_threshold: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndBitRateAdaptiveThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_bit_rate_current: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndBitRateCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_bit_rate_max: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndBitRateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_bit_rate_min: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndBitRateMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_concurrent_conns_adaptive_threshold: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndConcurrentConnsAdaptiveThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_concurrent_conns_current: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndConcurrentConnsCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_concurrent_conns_max: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndConcurrentConnsMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_concurrent_conns_min: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndConcurrentConnsMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_conn_miss_rate_adaptive_threshold: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndConnMissRateAdaptiveThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_conn_miss_rate_current: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndConnMissRateCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_conn_miss_rate_max: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndConnMissRateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_conn_miss_rate_min: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndConnMissRateMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_data_cpu_util_adaptive_threshold: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndDataCpuUtilAdaptiveThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_data_cpu_util_current: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndDataCpuUtilCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_data_cpu_util_max: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndDataCpuUtilMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_data_cpu_util_min: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndDataCpuUtilMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_empty_ack_rate_adaptive_threshold: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndEmptyAckRateAdaptiveThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_empty_ack_rate_current: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndEmptyAckRateCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_empty_ack_rate_max: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndEmptyAckRateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_empty_ack_rate_min: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndEmptyAckRateMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_fin_rate_adaptive_threshold: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndFinRateAdaptiveThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_fin_rate_current: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndFinRateCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_fin_rate_max: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndFinRateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_fin_rate_min: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndFinRateMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_frag_rate_adaptive_threshold: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndFragRateAdaptiveThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_frag_rate_current: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndFragRateCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_frag_rate_max: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndFragRateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_frag_rate_min: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndFragRateMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_inb_per_outb_adaptive_threshold: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndInbPerOutbAdaptiveThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_inb_per_outb_current: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndInbPerOutbCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_inb_per_outb_max: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndInbPerOutbMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_inb_per_outb_min: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndInbPerOutbMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_outside_intf_util_adaptive_threshold: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndOutsideIntfUtilAdaptiveThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_outside_intf_util_current: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndOutsideIntfUtilCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_outside_intf_util_max: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndOutsideIntfUtilMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_outside_intf_util_min: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndOutsideIntfUtilMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_pkt_drop_rate_adaptive_threshold: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndPktDropRateAdaptiveThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_pkt_drop_rate_current: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndPktDropRateCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_pkt_drop_rate_max: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndPktDropRateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_pkt_drop_rate_min: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndPktDropRateMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_pkt_drop_ratio_adaptive_threshold: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndPktDropRatioAdaptiveThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_pkt_drop_ratio_current: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndPktDropRatioCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_pkt_drop_ratio_max: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndPktDropRatioMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_pkt_drop_ratio_min: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndPktDropRatioMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_pkt_rate_adaptive_threshold: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndPktRateAdaptiveThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_pkt_rate_current: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndPktRateCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_pkt_rate_max: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndPktRateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_pkt_rate_min: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndPktRateMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_rst_rate_adaptive_threshold: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndRstRateAdaptiveThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_rst_rate_current: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndRstRateCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_rst_rate_max: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndRstRateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_rst_rate_min: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndRstRateMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_small_payload_rate_adaptive_threshold: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndSmallPayloadRateAdaptiveThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_small_payload_rate_current: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndSmallPayloadRateCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_small_payload_rate_max: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndSmallPayloadRateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_small_payload_rate_min: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndSmallPayloadRateMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_small_window_ack_rate_adaptive_threshold: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndSmallWindowAckRateAdaptiveThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_small_window_ack_rate_current: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndSmallWindowAckRateCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_small_window_ack_rate_max: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndSmallWindowAckRateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_small_window_ack_rate_min: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndSmallWindowAckRateMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_syn_ack_rate_adaptive_threshold: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndSynAckRateAdaptiveThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_syn_ack_rate_current: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndSynAckRateCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_syn_ack_rate_max: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndSynAckRateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_syn_ack_rate_min: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndSynAckRateMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_syn_per_fin_rate_adaptive_threshold: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndSynPerFinRateAdaptiveThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_syn_per_fin_rate_current: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndSynPerFinRateCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_syn_per_fin_rate_max: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndSynPerFinRateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_syn_per_fin_rate_min: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndSynPerFinRateMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_syn_rate_adaptive_threshold: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndSynRateAdaptiveThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_syn_rate_current: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndSynRateCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_syn_rate_max: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndSynRateMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_syn_rate_min: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndSynRateMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_total_szp_adaptive_threshold: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndTotalSzpAdaptiveThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_total_szp_current: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndTotalSzpCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_total_szp_max: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndTotalSzpMax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddet_ind_total_szp_min: {
      value: cdktf.numberToHclTerraform(struct!.ddetIndTotalSzpMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_proto_type: {
      value: cdktf.numberToHclTerraform(struct!.ipProtoType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstZoneIpProtoProtoNumberPortIndStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstZoneIpProtoProtoNumberPortIndStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ddetIndBitRateAdaptiveThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndBitRateAdaptiveThreshold = this._ddetIndBitRateAdaptiveThreshold;
    }
    if (this._ddetIndBitRateCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndBitRateCurrent = this._ddetIndBitRateCurrent;
    }
    if (this._ddetIndBitRateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndBitRateMax = this._ddetIndBitRateMax;
    }
    if (this._ddetIndBitRateMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndBitRateMin = this._ddetIndBitRateMin;
    }
    if (this._ddetIndConcurrentConnsAdaptiveThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndConcurrentConnsAdaptiveThreshold = this._ddetIndConcurrentConnsAdaptiveThreshold;
    }
    if (this._ddetIndConcurrentConnsCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndConcurrentConnsCurrent = this._ddetIndConcurrentConnsCurrent;
    }
    if (this._ddetIndConcurrentConnsMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndConcurrentConnsMax = this._ddetIndConcurrentConnsMax;
    }
    if (this._ddetIndConcurrentConnsMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndConcurrentConnsMin = this._ddetIndConcurrentConnsMin;
    }
    if (this._ddetIndConnMissRateAdaptiveThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndConnMissRateAdaptiveThreshold = this._ddetIndConnMissRateAdaptiveThreshold;
    }
    if (this._ddetIndConnMissRateCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndConnMissRateCurrent = this._ddetIndConnMissRateCurrent;
    }
    if (this._ddetIndConnMissRateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndConnMissRateMax = this._ddetIndConnMissRateMax;
    }
    if (this._ddetIndConnMissRateMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndConnMissRateMin = this._ddetIndConnMissRateMin;
    }
    if (this._ddetIndDataCpuUtilAdaptiveThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndDataCpuUtilAdaptiveThreshold = this._ddetIndDataCpuUtilAdaptiveThreshold;
    }
    if (this._ddetIndDataCpuUtilCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndDataCpuUtilCurrent = this._ddetIndDataCpuUtilCurrent;
    }
    if (this._ddetIndDataCpuUtilMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndDataCpuUtilMax = this._ddetIndDataCpuUtilMax;
    }
    if (this._ddetIndDataCpuUtilMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndDataCpuUtilMin = this._ddetIndDataCpuUtilMin;
    }
    if (this._ddetIndEmptyAckRateAdaptiveThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndEmptyAckRateAdaptiveThreshold = this._ddetIndEmptyAckRateAdaptiveThreshold;
    }
    if (this._ddetIndEmptyAckRateCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndEmptyAckRateCurrent = this._ddetIndEmptyAckRateCurrent;
    }
    if (this._ddetIndEmptyAckRateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndEmptyAckRateMax = this._ddetIndEmptyAckRateMax;
    }
    if (this._ddetIndEmptyAckRateMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndEmptyAckRateMin = this._ddetIndEmptyAckRateMin;
    }
    if (this._ddetIndFinRateAdaptiveThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndFinRateAdaptiveThreshold = this._ddetIndFinRateAdaptiveThreshold;
    }
    if (this._ddetIndFinRateCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndFinRateCurrent = this._ddetIndFinRateCurrent;
    }
    if (this._ddetIndFinRateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndFinRateMax = this._ddetIndFinRateMax;
    }
    if (this._ddetIndFinRateMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndFinRateMin = this._ddetIndFinRateMin;
    }
    if (this._ddetIndFragRateAdaptiveThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndFragRateAdaptiveThreshold = this._ddetIndFragRateAdaptiveThreshold;
    }
    if (this._ddetIndFragRateCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndFragRateCurrent = this._ddetIndFragRateCurrent;
    }
    if (this._ddetIndFragRateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndFragRateMax = this._ddetIndFragRateMax;
    }
    if (this._ddetIndFragRateMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndFragRateMin = this._ddetIndFragRateMin;
    }
    if (this._ddetIndInbPerOutbAdaptiveThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndInbPerOutbAdaptiveThreshold = this._ddetIndInbPerOutbAdaptiveThreshold;
    }
    if (this._ddetIndInbPerOutbCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndInbPerOutbCurrent = this._ddetIndInbPerOutbCurrent;
    }
    if (this._ddetIndInbPerOutbMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndInbPerOutbMax = this._ddetIndInbPerOutbMax;
    }
    if (this._ddetIndInbPerOutbMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndInbPerOutbMin = this._ddetIndInbPerOutbMin;
    }
    if (this._ddetIndOutsideIntfUtilAdaptiveThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndOutsideIntfUtilAdaptiveThreshold = this._ddetIndOutsideIntfUtilAdaptiveThreshold;
    }
    if (this._ddetIndOutsideIntfUtilCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndOutsideIntfUtilCurrent = this._ddetIndOutsideIntfUtilCurrent;
    }
    if (this._ddetIndOutsideIntfUtilMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndOutsideIntfUtilMax = this._ddetIndOutsideIntfUtilMax;
    }
    if (this._ddetIndOutsideIntfUtilMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndOutsideIntfUtilMin = this._ddetIndOutsideIntfUtilMin;
    }
    if (this._ddetIndPktDropRateAdaptiveThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndPktDropRateAdaptiveThreshold = this._ddetIndPktDropRateAdaptiveThreshold;
    }
    if (this._ddetIndPktDropRateCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndPktDropRateCurrent = this._ddetIndPktDropRateCurrent;
    }
    if (this._ddetIndPktDropRateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndPktDropRateMax = this._ddetIndPktDropRateMax;
    }
    if (this._ddetIndPktDropRateMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndPktDropRateMin = this._ddetIndPktDropRateMin;
    }
    if (this._ddetIndPktDropRatioAdaptiveThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndPktDropRatioAdaptiveThreshold = this._ddetIndPktDropRatioAdaptiveThreshold;
    }
    if (this._ddetIndPktDropRatioCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndPktDropRatioCurrent = this._ddetIndPktDropRatioCurrent;
    }
    if (this._ddetIndPktDropRatioMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndPktDropRatioMax = this._ddetIndPktDropRatioMax;
    }
    if (this._ddetIndPktDropRatioMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndPktDropRatioMin = this._ddetIndPktDropRatioMin;
    }
    if (this._ddetIndPktRateAdaptiveThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndPktRateAdaptiveThreshold = this._ddetIndPktRateAdaptiveThreshold;
    }
    if (this._ddetIndPktRateCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndPktRateCurrent = this._ddetIndPktRateCurrent;
    }
    if (this._ddetIndPktRateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndPktRateMax = this._ddetIndPktRateMax;
    }
    if (this._ddetIndPktRateMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndPktRateMin = this._ddetIndPktRateMin;
    }
    if (this._ddetIndRstRateAdaptiveThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndRstRateAdaptiveThreshold = this._ddetIndRstRateAdaptiveThreshold;
    }
    if (this._ddetIndRstRateCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndRstRateCurrent = this._ddetIndRstRateCurrent;
    }
    if (this._ddetIndRstRateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndRstRateMax = this._ddetIndRstRateMax;
    }
    if (this._ddetIndRstRateMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndRstRateMin = this._ddetIndRstRateMin;
    }
    if (this._ddetIndSmallPayloadRateAdaptiveThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndSmallPayloadRateAdaptiveThreshold = this._ddetIndSmallPayloadRateAdaptiveThreshold;
    }
    if (this._ddetIndSmallPayloadRateCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndSmallPayloadRateCurrent = this._ddetIndSmallPayloadRateCurrent;
    }
    if (this._ddetIndSmallPayloadRateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndSmallPayloadRateMax = this._ddetIndSmallPayloadRateMax;
    }
    if (this._ddetIndSmallPayloadRateMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndSmallPayloadRateMin = this._ddetIndSmallPayloadRateMin;
    }
    if (this._ddetIndSmallWindowAckRateAdaptiveThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndSmallWindowAckRateAdaptiveThreshold = this._ddetIndSmallWindowAckRateAdaptiveThreshold;
    }
    if (this._ddetIndSmallWindowAckRateCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndSmallWindowAckRateCurrent = this._ddetIndSmallWindowAckRateCurrent;
    }
    if (this._ddetIndSmallWindowAckRateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndSmallWindowAckRateMax = this._ddetIndSmallWindowAckRateMax;
    }
    if (this._ddetIndSmallWindowAckRateMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndSmallWindowAckRateMin = this._ddetIndSmallWindowAckRateMin;
    }
    if (this._ddetIndSynAckRateAdaptiveThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndSynAckRateAdaptiveThreshold = this._ddetIndSynAckRateAdaptiveThreshold;
    }
    if (this._ddetIndSynAckRateCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndSynAckRateCurrent = this._ddetIndSynAckRateCurrent;
    }
    if (this._ddetIndSynAckRateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndSynAckRateMax = this._ddetIndSynAckRateMax;
    }
    if (this._ddetIndSynAckRateMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndSynAckRateMin = this._ddetIndSynAckRateMin;
    }
    if (this._ddetIndSynPerFinRateAdaptiveThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndSynPerFinRateAdaptiveThreshold = this._ddetIndSynPerFinRateAdaptiveThreshold;
    }
    if (this._ddetIndSynPerFinRateCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndSynPerFinRateCurrent = this._ddetIndSynPerFinRateCurrent;
    }
    if (this._ddetIndSynPerFinRateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndSynPerFinRateMax = this._ddetIndSynPerFinRateMax;
    }
    if (this._ddetIndSynPerFinRateMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndSynPerFinRateMin = this._ddetIndSynPerFinRateMin;
    }
    if (this._ddetIndSynRateAdaptiveThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndSynRateAdaptiveThreshold = this._ddetIndSynRateAdaptiveThreshold;
    }
    if (this._ddetIndSynRateCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndSynRateCurrent = this._ddetIndSynRateCurrent;
    }
    if (this._ddetIndSynRateMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndSynRateMax = this._ddetIndSynRateMax;
    }
    if (this._ddetIndSynRateMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndSynRateMin = this._ddetIndSynRateMin;
    }
    if (this._ddetIndTotalSzpAdaptiveThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndTotalSzpAdaptiveThreshold = this._ddetIndTotalSzpAdaptiveThreshold;
    }
    if (this._ddetIndTotalSzpCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndTotalSzpCurrent = this._ddetIndTotalSzpCurrent;
    }
    if (this._ddetIndTotalSzpMax !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndTotalSzpMax = this._ddetIndTotalSzpMax;
    }
    if (this._ddetIndTotalSzpMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddetIndTotalSzpMin = this._ddetIndTotalSzpMin;
    }
    if (this._ipProtoType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtoType = this._ipProtoType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstZoneIpProtoProtoNumberPortIndStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ddetIndBitRateAdaptiveThreshold = undefined;
      this._ddetIndBitRateCurrent = undefined;
      this._ddetIndBitRateMax = undefined;
      this._ddetIndBitRateMin = undefined;
      this._ddetIndConcurrentConnsAdaptiveThreshold = undefined;
      this._ddetIndConcurrentConnsCurrent = undefined;
      this._ddetIndConcurrentConnsMax = undefined;
      this._ddetIndConcurrentConnsMin = undefined;
      this._ddetIndConnMissRateAdaptiveThreshold = undefined;
      this._ddetIndConnMissRateCurrent = undefined;
      this._ddetIndConnMissRateMax = undefined;
      this._ddetIndConnMissRateMin = undefined;
      this._ddetIndDataCpuUtilAdaptiveThreshold = undefined;
      this._ddetIndDataCpuUtilCurrent = undefined;
      this._ddetIndDataCpuUtilMax = undefined;
      this._ddetIndDataCpuUtilMin = undefined;
      this._ddetIndEmptyAckRateAdaptiveThreshold = undefined;
      this._ddetIndEmptyAckRateCurrent = undefined;
      this._ddetIndEmptyAckRateMax = undefined;
      this._ddetIndEmptyAckRateMin = undefined;
      this._ddetIndFinRateAdaptiveThreshold = undefined;
      this._ddetIndFinRateCurrent = undefined;
      this._ddetIndFinRateMax = undefined;
      this._ddetIndFinRateMin = undefined;
      this._ddetIndFragRateAdaptiveThreshold = undefined;
      this._ddetIndFragRateCurrent = undefined;
      this._ddetIndFragRateMax = undefined;
      this._ddetIndFragRateMin = undefined;
      this._ddetIndInbPerOutbAdaptiveThreshold = undefined;
      this._ddetIndInbPerOutbCurrent = undefined;
      this._ddetIndInbPerOutbMax = undefined;
      this._ddetIndInbPerOutbMin = undefined;
      this._ddetIndOutsideIntfUtilAdaptiveThreshold = undefined;
      this._ddetIndOutsideIntfUtilCurrent = undefined;
      this._ddetIndOutsideIntfUtilMax = undefined;
      this._ddetIndOutsideIntfUtilMin = undefined;
      this._ddetIndPktDropRateAdaptiveThreshold = undefined;
      this._ddetIndPktDropRateCurrent = undefined;
      this._ddetIndPktDropRateMax = undefined;
      this._ddetIndPktDropRateMin = undefined;
      this._ddetIndPktDropRatioAdaptiveThreshold = undefined;
      this._ddetIndPktDropRatioCurrent = undefined;
      this._ddetIndPktDropRatioMax = undefined;
      this._ddetIndPktDropRatioMin = undefined;
      this._ddetIndPktRateAdaptiveThreshold = undefined;
      this._ddetIndPktRateCurrent = undefined;
      this._ddetIndPktRateMax = undefined;
      this._ddetIndPktRateMin = undefined;
      this._ddetIndRstRateAdaptiveThreshold = undefined;
      this._ddetIndRstRateCurrent = undefined;
      this._ddetIndRstRateMax = undefined;
      this._ddetIndRstRateMin = undefined;
      this._ddetIndSmallPayloadRateAdaptiveThreshold = undefined;
      this._ddetIndSmallPayloadRateCurrent = undefined;
      this._ddetIndSmallPayloadRateMax = undefined;
      this._ddetIndSmallPayloadRateMin = undefined;
      this._ddetIndSmallWindowAckRateAdaptiveThreshold = undefined;
      this._ddetIndSmallWindowAckRateCurrent = undefined;
      this._ddetIndSmallWindowAckRateMax = undefined;
      this._ddetIndSmallWindowAckRateMin = undefined;
      this._ddetIndSynAckRateAdaptiveThreshold = undefined;
      this._ddetIndSynAckRateCurrent = undefined;
      this._ddetIndSynAckRateMax = undefined;
      this._ddetIndSynAckRateMin = undefined;
      this._ddetIndSynPerFinRateAdaptiveThreshold = undefined;
      this._ddetIndSynPerFinRateCurrent = undefined;
      this._ddetIndSynPerFinRateMax = undefined;
      this._ddetIndSynPerFinRateMin = undefined;
      this._ddetIndSynRateAdaptiveThreshold = undefined;
      this._ddetIndSynRateCurrent = undefined;
      this._ddetIndSynRateMax = undefined;
      this._ddetIndSynRateMin = undefined;
      this._ddetIndTotalSzpAdaptiveThreshold = undefined;
      this._ddetIndTotalSzpCurrent = undefined;
      this._ddetIndTotalSzpMax = undefined;
      this._ddetIndTotalSzpMin = undefined;
      this._ipProtoType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ddetIndBitRateAdaptiveThreshold = value.ddetIndBitRateAdaptiveThreshold;
      this._ddetIndBitRateCurrent = value.ddetIndBitRateCurrent;
      this._ddetIndBitRateMax = value.ddetIndBitRateMax;
      this._ddetIndBitRateMin = value.ddetIndBitRateMin;
      this._ddetIndConcurrentConnsAdaptiveThreshold = value.ddetIndConcurrentConnsAdaptiveThreshold;
      this._ddetIndConcurrentConnsCurrent = value.ddetIndConcurrentConnsCurrent;
      this._ddetIndConcurrentConnsMax = value.ddetIndConcurrentConnsMax;
      this._ddetIndConcurrentConnsMin = value.ddetIndConcurrentConnsMin;
      this._ddetIndConnMissRateAdaptiveThreshold = value.ddetIndConnMissRateAdaptiveThreshold;
      this._ddetIndConnMissRateCurrent = value.ddetIndConnMissRateCurrent;
      this._ddetIndConnMissRateMax = value.ddetIndConnMissRateMax;
      this._ddetIndConnMissRateMin = value.ddetIndConnMissRateMin;
      this._ddetIndDataCpuUtilAdaptiveThreshold = value.ddetIndDataCpuUtilAdaptiveThreshold;
      this._ddetIndDataCpuUtilCurrent = value.ddetIndDataCpuUtilCurrent;
      this._ddetIndDataCpuUtilMax = value.ddetIndDataCpuUtilMax;
      this._ddetIndDataCpuUtilMin = value.ddetIndDataCpuUtilMin;
      this._ddetIndEmptyAckRateAdaptiveThreshold = value.ddetIndEmptyAckRateAdaptiveThreshold;
      this._ddetIndEmptyAckRateCurrent = value.ddetIndEmptyAckRateCurrent;
      this._ddetIndEmptyAckRateMax = value.ddetIndEmptyAckRateMax;
      this._ddetIndEmptyAckRateMin = value.ddetIndEmptyAckRateMin;
      this._ddetIndFinRateAdaptiveThreshold = value.ddetIndFinRateAdaptiveThreshold;
      this._ddetIndFinRateCurrent = value.ddetIndFinRateCurrent;
      this._ddetIndFinRateMax = value.ddetIndFinRateMax;
      this._ddetIndFinRateMin = value.ddetIndFinRateMin;
      this._ddetIndFragRateAdaptiveThreshold = value.ddetIndFragRateAdaptiveThreshold;
      this._ddetIndFragRateCurrent = value.ddetIndFragRateCurrent;
      this._ddetIndFragRateMax = value.ddetIndFragRateMax;
      this._ddetIndFragRateMin = value.ddetIndFragRateMin;
      this._ddetIndInbPerOutbAdaptiveThreshold = value.ddetIndInbPerOutbAdaptiveThreshold;
      this._ddetIndInbPerOutbCurrent = value.ddetIndInbPerOutbCurrent;
      this._ddetIndInbPerOutbMax = value.ddetIndInbPerOutbMax;
      this._ddetIndInbPerOutbMin = value.ddetIndInbPerOutbMin;
      this._ddetIndOutsideIntfUtilAdaptiveThreshold = value.ddetIndOutsideIntfUtilAdaptiveThreshold;
      this._ddetIndOutsideIntfUtilCurrent = value.ddetIndOutsideIntfUtilCurrent;
      this._ddetIndOutsideIntfUtilMax = value.ddetIndOutsideIntfUtilMax;
      this._ddetIndOutsideIntfUtilMin = value.ddetIndOutsideIntfUtilMin;
      this._ddetIndPktDropRateAdaptiveThreshold = value.ddetIndPktDropRateAdaptiveThreshold;
      this._ddetIndPktDropRateCurrent = value.ddetIndPktDropRateCurrent;
      this._ddetIndPktDropRateMax = value.ddetIndPktDropRateMax;
      this._ddetIndPktDropRateMin = value.ddetIndPktDropRateMin;
      this._ddetIndPktDropRatioAdaptiveThreshold = value.ddetIndPktDropRatioAdaptiveThreshold;
      this._ddetIndPktDropRatioCurrent = value.ddetIndPktDropRatioCurrent;
      this._ddetIndPktDropRatioMax = value.ddetIndPktDropRatioMax;
      this._ddetIndPktDropRatioMin = value.ddetIndPktDropRatioMin;
      this._ddetIndPktRateAdaptiveThreshold = value.ddetIndPktRateAdaptiveThreshold;
      this._ddetIndPktRateCurrent = value.ddetIndPktRateCurrent;
      this._ddetIndPktRateMax = value.ddetIndPktRateMax;
      this._ddetIndPktRateMin = value.ddetIndPktRateMin;
      this._ddetIndRstRateAdaptiveThreshold = value.ddetIndRstRateAdaptiveThreshold;
      this._ddetIndRstRateCurrent = value.ddetIndRstRateCurrent;
      this._ddetIndRstRateMax = value.ddetIndRstRateMax;
      this._ddetIndRstRateMin = value.ddetIndRstRateMin;
      this._ddetIndSmallPayloadRateAdaptiveThreshold = value.ddetIndSmallPayloadRateAdaptiveThreshold;
      this._ddetIndSmallPayloadRateCurrent = value.ddetIndSmallPayloadRateCurrent;
      this._ddetIndSmallPayloadRateMax = value.ddetIndSmallPayloadRateMax;
      this._ddetIndSmallPayloadRateMin = value.ddetIndSmallPayloadRateMin;
      this._ddetIndSmallWindowAckRateAdaptiveThreshold = value.ddetIndSmallWindowAckRateAdaptiveThreshold;
      this._ddetIndSmallWindowAckRateCurrent = value.ddetIndSmallWindowAckRateCurrent;
      this._ddetIndSmallWindowAckRateMax = value.ddetIndSmallWindowAckRateMax;
      this._ddetIndSmallWindowAckRateMin = value.ddetIndSmallWindowAckRateMin;
      this._ddetIndSynAckRateAdaptiveThreshold = value.ddetIndSynAckRateAdaptiveThreshold;
      this._ddetIndSynAckRateCurrent = value.ddetIndSynAckRateCurrent;
      this._ddetIndSynAckRateMax = value.ddetIndSynAckRateMax;
      this._ddetIndSynAckRateMin = value.ddetIndSynAckRateMin;
      this._ddetIndSynPerFinRateAdaptiveThreshold = value.ddetIndSynPerFinRateAdaptiveThreshold;
      this._ddetIndSynPerFinRateCurrent = value.ddetIndSynPerFinRateCurrent;
      this._ddetIndSynPerFinRateMax = value.ddetIndSynPerFinRateMax;
      this._ddetIndSynPerFinRateMin = value.ddetIndSynPerFinRateMin;
      this._ddetIndSynRateAdaptiveThreshold = value.ddetIndSynRateAdaptiveThreshold;
      this._ddetIndSynRateCurrent = value.ddetIndSynRateCurrent;
      this._ddetIndSynRateMax = value.ddetIndSynRateMax;
      this._ddetIndSynRateMin = value.ddetIndSynRateMin;
      this._ddetIndTotalSzpAdaptiveThreshold = value.ddetIndTotalSzpAdaptiveThreshold;
      this._ddetIndTotalSzpCurrent = value.ddetIndTotalSzpCurrent;
      this._ddetIndTotalSzpMax = value.ddetIndTotalSzpMax;
      this._ddetIndTotalSzpMin = value.ddetIndTotalSzpMin;
      this._ipProtoType = value.ipProtoType;
    }
  }

  // ddet_ind_bit_rate_adaptive_threshold - computed: false, optional: true, required: false
  private _ddetIndBitRateAdaptiveThreshold?: number; 
  public get ddetIndBitRateAdaptiveThreshold() {
    return this.getNumberAttribute('ddet_ind_bit_rate_adaptive_threshold');
  }
  public set ddetIndBitRateAdaptiveThreshold(value: number) {
    this._ddetIndBitRateAdaptiveThreshold = value;
  }
  public resetDdetIndBitRateAdaptiveThreshold() {
    this._ddetIndBitRateAdaptiveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndBitRateAdaptiveThresholdInput() {
    return this._ddetIndBitRateAdaptiveThreshold;
  }

  // ddet_ind_bit_rate_current - computed: false, optional: true, required: false
  private _ddetIndBitRateCurrent?: number; 
  public get ddetIndBitRateCurrent() {
    return this.getNumberAttribute('ddet_ind_bit_rate_current');
  }
  public set ddetIndBitRateCurrent(value: number) {
    this._ddetIndBitRateCurrent = value;
  }
  public resetDdetIndBitRateCurrent() {
    this._ddetIndBitRateCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndBitRateCurrentInput() {
    return this._ddetIndBitRateCurrent;
  }

  // ddet_ind_bit_rate_max - computed: false, optional: true, required: false
  private _ddetIndBitRateMax?: number; 
  public get ddetIndBitRateMax() {
    return this.getNumberAttribute('ddet_ind_bit_rate_max');
  }
  public set ddetIndBitRateMax(value: number) {
    this._ddetIndBitRateMax = value;
  }
  public resetDdetIndBitRateMax() {
    this._ddetIndBitRateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndBitRateMaxInput() {
    return this._ddetIndBitRateMax;
  }

  // ddet_ind_bit_rate_min - computed: false, optional: true, required: false
  private _ddetIndBitRateMin?: number; 
  public get ddetIndBitRateMin() {
    return this.getNumberAttribute('ddet_ind_bit_rate_min');
  }
  public set ddetIndBitRateMin(value: number) {
    this._ddetIndBitRateMin = value;
  }
  public resetDdetIndBitRateMin() {
    this._ddetIndBitRateMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndBitRateMinInput() {
    return this._ddetIndBitRateMin;
  }

  // ddet_ind_concurrent_conns_adaptive_threshold - computed: false, optional: true, required: false
  private _ddetIndConcurrentConnsAdaptiveThreshold?: number; 
  public get ddetIndConcurrentConnsAdaptiveThreshold() {
    return this.getNumberAttribute('ddet_ind_concurrent_conns_adaptive_threshold');
  }
  public set ddetIndConcurrentConnsAdaptiveThreshold(value: number) {
    this._ddetIndConcurrentConnsAdaptiveThreshold = value;
  }
  public resetDdetIndConcurrentConnsAdaptiveThreshold() {
    this._ddetIndConcurrentConnsAdaptiveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndConcurrentConnsAdaptiveThresholdInput() {
    return this._ddetIndConcurrentConnsAdaptiveThreshold;
  }

  // ddet_ind_concurrent_conns_current - computed: false, optional: true, required: false
  private _ddetIndConcurrentConnsCurrent?: number; 
  public get ddetIndConcurrentConnsCurrent() {
    return this.getNumberAttribute('ddet_ind_concurrent_conns_current');
  }
  public set ddetIndConcurrentConnsCurrent(value: number) {
    this._ddetIndConcurrentConnsCurrent = value;
  }
  public resetDdetIndConcurrentConnsCurrent() {
    this._ddetIndConcurrentConnsCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndConcurrentConnsCurrentInput() {
    return this._ddetIndConcurrentConnsCurrent;
  }

  // ddet_ind_concurrent_conns_max - computed: false, optional: true, required: false
  private _ddetIndConcurrentConnsMax?: number; 
  public get ddetIndConcurrentConnsMax() {
    return this.getNumberAttribute('ddet_ind_concurrent_conns_max');
  }
  public set ddetIndConcurrentConnsMax(value: number) {
    this._ddetIndConcurrentConnsMax = value;
  }
  public resetDdetIndConcurrentConnsMax() {
    this._ddetIndConcurrentConnsMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndConcurrentConnsMaxInput() {
    return this._ddetIndConcurrentConnsMax;
  }

  // ddet_ind_concurrent_conns_min - computed: false, optional: true, required: false
  private _ddetIndConcurrentConnsMin?: number; 
  public get ddetIndConcurrentConnsMin() {
    return this.getNumberAttribute('ddet_ind_concurrent_conns_min');
  }
  public set ddetIndConcurrentConnsMin(value: number) {
    this._ddetIndConcurrentConnsMin = value;
  }
  public resetDdetIndConcurrentConnsMin() {
    this._ddetIndConcurrentConnsMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndConcurrentConnsMinInput() {
    return this._ddetIndConcurrentConnsMin;
  }

  // ddet_ind_conn_miss_rate_adaptive_threshold - computed: false, optional: true, required: false
  private _ddetIndConnMissRateAdaptiveThreshold?: number; 
  public get ddetIndConnMissRateAdaptiveThreshold() {
    return this.getNumberAttribute('ddet_ind_conn_miss_rate_adaptive_threshold');
  }
  public set ddetIndConnMissRateAdaptiveThreshold(value: number) {
    this._ddetIndConnMissRateAdaptiveThreshold = value;
  }
  public resetDdetIndConnMissRateAdaptiveThreshold() {
    this._ddetIndConnMissRateAdaptiveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndConnMissRateAdaptiveThresholdInput() {
    return this._ddetIndConnMissRateAdaptiveThreshold;
  }

  // ddet_ind_conn_miss_rate_current - computed: false, optional: true, required: false
  private _ddetIndConnMissRateCurrent?: number; 
  public get ddetIndConnMissRateCurrent() {
    return this.getNumberAttribute('ddet_ind_conn_miss_rate_current');
  }
  public set ddetIndConnMissRateCurrent(value: number) {
    this._ddetIndConnMissRateCurrent = value;
  }
  public resetDdetIndConnMissRateCurrent() {
    this._ddetIndConnMissRateCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndConnMissRateCurrentInput() {
    return this._ddetIndConnMissRateCurrent;
  }

  // ddet_ind_conn_miss_rate_max - computed: false, optional: true, required: false
  private _ddetIndConnMissRateMax?: number; 
  public get ddetIndConnMissRateMax() {
    return this.getNumberAttribute('ddet_ind_conn_miss_rate_max');
  }
  public set ddetIndConnMissRateMax(value: number) {
    this._ddetIndConnMissRateMax = value;
  }
  public resetDdetIndConnMissRateMax() {
    this._ddetIndConnMissRateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndConnMissRateMaxInput() {
    return this._ddetIndConnMissRateMax;
  }

  // ddet_ind_conn_miss_rate_min - computed: false, optional: true, required: false
  private _ddetIndConnMissRateMin?: number; 
  public get ddetIndConnMissRateMin() {
    return this.getNumberAttribute('ddet_ind_conn_miss_rate_min');
  }
  public set ddetIndConnMissRateMin(value: number) {
    this._ddetIndConnMissRateMin = value;
  }
  public resetDdetIndConnMissRateMin() {
    this._ddetIndConnMissRateMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndConnMissRateMinInput() {
    return this._ddetIndConnMissRateMin;
  }

  // ddet_ind_data_cpu_util_adaptive_threshold - computed: false, optional: true, required: false
  private _ddetIndDataCpuUtilAdaptiveThreshold?: number; 
  public get ddetIndDataCpuUtilAdaptiveThreshold() {
    return this.getNumberAttribute('ddet_ind_data_cpu_util_adaptive_threshold');
  }
  public set ddetIndDataCpuUtilAdaptiveThreshold(value: number) {
    this._ddetIndDataCpuUtilAdaptiveThreshold = value;
  }
  public resetDdetIndDataCpuUtilAdaptiveThreshold() {
    this._ddetIndDataCpuUtilAdaptiveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndDataCpuUtilAdaptiveThresholdInput() {
    return this._ddetIndDataCpuUtilAdaptiveThreshold;
  }

  // ddet_ind_data_cpu_util_current - computed: false, optional: true, required: false
  private _ddetIndDataCpuUtilCurrent?: number; 
  public get ddetIndDataCpuUtilCurrent() {
    return this.getNumberAttribute('ddet_ind_data_cpu_util_current');
  }
  public set ddetIndDataCpuUtilCurrent(value: number) {
    this._ddetIndDataCpuUtilCurrent = value;
  }
  public resetDdetIndDataCpuUtilCurrent() {
    this._ddetIndDataCpuUtilCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndDataCpuUtilCurrentInput() {
    return this._ddetIndDataCpuUtilCurrent;
  }

  // ddet_ind_data_cpu_util_max - computed: false, optional: true, required: false
  private _ddetIndDataCpuUtilMax?: number; 
  public get ddetIndDataCpuUtilMax() {
    return this.getNumberAttribute('ddet_ind_data_cpu_util_max');
  }
  public set ddetIndDataCpuUtilMax(value: number) {
    this._ddetIndDataCpuUtilMax = value;
  }
  public resetDdetIndDataCpuUtilMax() {
    this._ddetIndDataCpuUtilMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndDataCpuUtilMaxInput() {
    return this._ddetIndDataCpuUtilMax;
  }

  // ddet_ind_data_cpu_util_min - computed: false, optional: true, required: false
  private _ddetIndDataCpuUtilMin?: number; 
  public get ddetIndDataCpuUtilMin() {
    return this.getNumberAttribute('ddet_ind_data_cpu_util_min');
  }
  public set ddetIndDataCpuUtilMin(value: number) {
    this._ddetIndDataCpuUtilMin = value;
  }
  public resetDdetIndDataCpuUtilMin() {
    this._ddetIndDataCpuUtilMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndDataCpuUtilMinInput() {
    return this._ddetIndDataCpuUtilMin;
  }

  // ddet_ind_empty_ack_rate_adaptive_threshold - computed: false, optional: true, required: false
  private _ddetIndEmptyAckRateAdaptiveThreshold?: number; 
  public get ddetIndEmptyAckRateAdaptiveThreshold() {
    return this.getNumberAttribute('ddet_ind_empty_ack_rate_adaptive_threshold');
  }
  public set ddetIndEmptyAckRateAdaptiveThreshold(value: number) {
    this._ddetIndEmptyAckRateAdaptiveThreshold = value;
  }
  public resetDdetIndEmptyAckRateAdaptiveThreshold() {
    this._ddetIndEmptyAckRateAdaptiveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndEmptyAckRateAdaptiveThresholdInput() {
    return this._ddetIndEmptyAckRateAdaptiveThreshold;
  }

  // ddet_ind_empty_ack_rate_current - computed: false, optional: true, required: false
  private _ddetIndEmptyAckRateCurrent?: number; 
  public get ddetIndEmptyAckRateCurrent() {
    return this.getNumberAttribute('ddet_ind_empty_ack_rate_current');
  }
  public set ddetIndEmptyAckRateCurrent(value: number) {
    this._ddetIndEmptyAckRateCurrent = value;
  }
  public resetDdetIndEmptyAckRateCurrent() {
    this._ddetIndEmptyAckRateCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndEmptyAckRateCurrentInput() {
    return this._ddetIndEmptyAckRateCurrent;
  }

  // ddet_ind_empty_ack_rate_max - computed: false, optional: true, required: false
  private _ddetIndEmptyAckRateMax?: number; 
  public get ddetIndEmptyAckRateMax() {
    return this.getNumberAttribute('ddet_ind_empty_ack_rate_max');
  }
  public set ddetIndEmptyAckRateMax(value: number) {
    this._ddetIndEmptyAckRateMax = value;
  }
  public resetDdetIndEmptyAckRateMax() {
    this._ddetIndEmptyAckRateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndEmptyAckRateMaxInput() {
    return this._ddetIndEmptyAckRateMax;
  }

  // ddet_ind_empty_ack_rate_min - computed: false, optional: true, required: false
  private _ddetIndEmptyAckRateMin?: number; 
  public get ddetIndEmptyAckRateMin() {
    return this.getNumberAttribute('ddet_ind_empty_ack_rate_min');
  }
  public set ddetIndEmptyAckRateMin(value: number) {
    this._ddetIndEmptyAckRateMin = value;
  }
  public resetDdetIndEmptyAckRateMin() {
    this._ddetIndEmptyAckRateMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndEmptyAckRateMinInput() {
    return this._ddetIndEmptyAckRateMin;
  }

  // ddet_ind_fin_rate_adaptive_threshold - computed: false, optional: true, required: false
  private _ddetIndFinRateAdaptiveThreshold?: number; 
  public get ddetIndFinRateAdaptiveThreshold() {
    return this.getNumberAttribute('ddet_ind_fin_rate_adaptive_threshold');
  }
  public set ddetIndFinRateAdaptiveThreshold(value: number) {
    this._ddetIndFinRateAdaptiveThreshold = value;
  }
  public resetDdetIndFinRateAdaptiveThreshold() {
    this._ddetIndFinRateAdaptiveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndFinRateAdaptiveThresholdInput() {
    return this._ddetIndFinRateAdaptiveThreshold;
  }

  // ddet_ind_fin_rate_current - computed: false, optional: true, required: false
  private _ddetIndFinRateCurrent?: number; 
  public get ddetIndFinRateCurrent() {
    return this.getNumberAttribute('ddet_ind_fin_rate_current');
  }
  public set ddetIndFinRateCurrent(value: number) {
    this._ddetIndFinRateCurrent = value;
  }
  public resetDdetIndFinRateCurrent() {
    this._ddetIndFinRateCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndFinRateCurrentInput() {
    return this._ddetIndFinRateCurrent;
  }

  // ddet_ind_fin_rate_max - computed: false, optional: true, required: false
  private _ddetIndFinRateMax?: number; 
  public get ddetIndFinRateMax() {
    return this.getNumberAttribute('ddet_ind_fin_rate_max');
  }
  public set ddetIndFinRateMax(value: number) {
    this._ddetIndFinRateMax = value;
  }
  public resetDdetIndFinRateMax() {
    this._ddetIndFinRateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndFinRateMaxInput() {
    return this._ddetIndFinRateMax;
  }

  // ddet_ind_fin_rate_min - computed: false, optional: true, required: false
  private _ddetIndFinRateMin?: number; 
  public get ddetIndFinRateMin() {
    return this.getNumberAttribute('ddet_ind_fin_rate_min');
  }
  public set ddetIndFinRateMin(value: number) {
    this._ddetIndFinRateMin = value;
  }
  public resetDdetIndFinRateMin() {
    this._ddetIndFinRateMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndFinRateMinInput() {
    return this._ddetIndFinRateMin;
  }

  // ddet_ind_frag_rate_adaptive_threshold - computed: false, optional: true, required: false
  private _ddetIndFragRateAdaptiveThreshold?: number; 
  public get ddetIndFragRateAdaptiveThreshold() {
    return this.getNumberAttribute('ddet_ind_frag_rate_adaptive_threshold');
  }
  public set ddetIndFragRateAdaptiveThreshold(value: number) {
    this._ddetIndFragRateAdaptiveThreshold = value;
  }
  public resetDdetIndFragRateAdaptiveThreshold() {
    this._ddetIndFragRateAdaptiveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndFragRateAdaptiveThresholdInput() {
    return this._ddetIndFragRateAdaptiveThreshold;
  }

  // ddet_ind_frag_rate_current - computed: false, optional: true, required: false
  private _ddetIndFragRateCurrent?: number; 
  public get ddetIndFragRateCurrent() {
    return this.getNumberAttribute('ddet_ind_frag_rate_current');
  }
  public set ddetIndFragRateCurrent(value: number) {
    this._ddetIndFragRateCurrent = value;
  }
  public resetDdetIndFragRateCurrent() {
    this._ddetIndFragRateCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndFragRateCurrentInput() {
    return this._ddetIndFragRateCurrent;
  }

  // ddet_ind_frag_rate_max - computed: false, optional: true, required: false
  private _ddetIndFragRateMax?: number; 
  public get ddetIndFragRateMax() {
    return this.getNumberAttribute('ddet_ind_frag_rate_max');
  }
  public set ddetIndFragRateMax(value: number) {
    this._ddetIndFragRateMax = value;
  }
  public resetDdetIndFragRateMax() {
    this._ddetIndFragRateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndFragRateMaxInput() {
    return this._ddetIndFragRateMax;
  }

  // ddet_ind_frag_rate_min - computed: false, optional: true, required: false
  private _ddetIndFragRateMin?: number; 
  public get ddetIndFragRateMin() {
    return this.getNumberAttribute('ddet_ind_frag_rate_min');
  }
  public set ddetIndFragRateMin(value: number) {
    this._ddetIndFragRateMin = value;
  }
  public resetDdetIndFragRateMin() {
    this._ddetIndFragRateMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndFragRateMinInput() {
    return this._ddetIndFragRateMin;
  }

  // ddet_ind_inb_per_outb_adaptive_threshold - computed: false, optional: true, required: false
  private _ddetIndInbPerOutbAdaptiveThreshold?: number; 
  public get ddetIndInbPerOutbAdaptiveThreshold() {
    return this.getNumberAttribute('ddet_ind_inb_per_outb_adaptive_threshold');
  }
  public set ddetIndInbPerOutbAdaptiveThreshold(value: number) {
    this._ddetIndInbPerOutbAdaptiveThreshold = value;
  }
  public resetDdetIndInbPerOutbAdaptiveThreshold() {
    this._ddetIndInbPerOutbAdaptiveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndInbPerOutbAdaptiveThresholdInput() {
    return this._ddetIndInbPerOutbAdaptiveThreshold;
  }

  // ddet_ind_inb_per_outb_current - computed: false, optional: true, required: false
  private _ddetIndInbPerOutbCurrent?: number; 
  public get ddetIndInbPerOutbCurrent() {
    return this.getNumberAttribute('ddet_ind_inb_per_outb_current');
  }
  public set ddetIndInbPerOutbCurrent(value: number) {
    this._ddetIndInbPerOutbCurrent = value;
  }
  public resetDdetIndInbPerOutbCurrent() {
    this._ddetIndInbPerOutbCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndInbPerOutbCurrentInput() {
    return this._ddetIndInbPerOutbCurrent;
  }

  // ddet_ind_inb_per_outb_max - computed: false, optional: true, required: false
  private _ddetIndInbPerOutbMax?: number; 
  public get ddetIndInbPerOutbMax() {
    return this.getNumberAttribute('ddet_ind_inb_per_outb_max');
  }
  public set ddetIndInbPerOutbMax(value: number) {
    this._ddetIndInbPerOutbMax = value;
  }
  public resetDdetIndInbPerOutbMax() {
    this._ddetIndInbPerOutbMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndInbPerOutbMaxInput() {
    return this._ddetIndInbPerOutbMax;
  }

  // ddet_ind_inb_per_outb_min - computed: false, optional: true, required: false
  private _ddetIndInbPerOutbMin?: number; 
  public get ddetIndInbPerOutbMin() {
    return this.getNumberAttribute('ddet_ind_inb_per_outb_min');
  }
  public set ddetIndInbPerOutbMin(value: number) {
    this._ddetIndInbPerOutbMin = value;
  }
  public resetDdetIndInbPerOutbMin() {
    this._ddetIndInbPerOutbMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndInbPerOutbMinInput() {
    return this._ddetIndInbPerOutbMin;
  }

  // ddet_ind_outside_intf_util_adaptive_threshold - computed: false, optional: true, required: false
  private _ddetIndOutsideIntfUtilAdaptiveThreshold?: number; 
  public get ddetIndOutsideIntfUtilAdaptiveThreshold() {
    return this.getNumberAttribute('ddet_ind_outside_intf_util_adaptive_threshold');
  }
  public set ddetIndOutsideIntfUtilAdaptiveThreshold(value: number) {
    this._ddetIndOutsideIntfUtilAdaptiveThreshold = value;
  }
  public resetDdetIndOutsideIntfUtilAdaptiveThreshold() {
    this._ddetIndOutsideIntfUtilAdaptiveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndOutsideIntfUtilAdaptiveThresholdInput() {
    return this._ddetIndOutsideIntfUtilAdaptiveThreshold;
  }

  // ddet_ind_outside_intf_util_current - computed: false, optional: true, required: false
  private _ddetIndOutsideIntfUtilCurrent?: number; 
  public get ddetIndOutsideIntfUtilCurrent() {
    return this.getNumberAttribute('ddet_ind_outside_intf_util_current');
  }
  public set ddetIndOutsideIntfUtilCurrent(value: number) {
    this._ddetIndOutsideIntfUtilCurrent = value;
  }
  public resetDdetIndOutsideIntfUtilCurrent() {
    this._ddetIndOutsideIntfUtilCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndOutsideIntfUtilCurrentInput() {
    return this._ddetIndOutsideIntfUtilCurrent;
  }

  // ddet_ind_outside_intf_util_max - computed: false, optional: true, required: false
  private _ddetIndOutsideIntfUtilMax?: number; 
  public get ddetIndOutsideIntfUtilMax() {
    return this.getNumberAttribute('ddet_ind_outside_intf_util_max');
  }
  public set ddetIndOutsideIntfUtilMax(value: number) {
    this._ddetIndOutsideIntfUtilMax = value;
  }
  public resetDdetIndOutsideIntfUtilMax() {
    this._ddetIndOutsideIntfUtilMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndOutsideIntfUtilMaxInput() {
    return this._ddetIndOutsideIntfUtilMax;
  }

  // ddet_ind_outside_intf_util_min - computed: false, optional: true, required: false
  private _ddetIndOutsideIntfUtilMin?: number; 
  public get ddetIndOutsideIntfUtilMin() {
    return this.getNumberAttribute('ddet_ind_outside_intf_util_min');
  }
  public set ddetIndOutsideIntfUtilMin(value: number) {
    this._ddetIndOutsideIntfUtilMin = value;
  }
  public resetDdetIndOutsideIntfUtilMin() {
    this._ddetIndOutsideIntfUtilMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndOutsideIntfUtilMinInput() {
    return this._ddetIndOutsideIntfUtilMin;
  }

  // ddet_ind_pkt_drop_rate_adaptive_threshold - computed: false, optional: true, required: false
  private _ddetIndPktDropRateAdaptiveThreshold?: number; 
  public get ddetIndPktDropRateAdaptiveThreshold() {
    return this.getNumberAttribute('ddet_ind_pkt_drop_rate_adaptive_threshold');
  }
  public set ddetIndPktDropRateAdaptiveThreshold(value: number) {
    this._ddetIndPktDropRateAdaptiveThreshold = value;
  }
  public resetDdetIndPktDropRateAdaptiveThreshold() {
    this._ddetIndPktDropRateAdaptiveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndPktDropRateAdaptiveThresholdInput() {
    return this._ddetIndPktDropRateAdaptiveThreshold;
  }

  // ddet_ind_pkt_drop_rate_current - computed: false, optional: true, required: false
  private _ddetIndPktDropRateCurrent?: number; 
  public get ddetIndPktDropRateCurrent() {
    return this.getNumberAttribute('ddet_ind_pkt_drop_rate_current');
  }
  public set ddetIndPktDropRateCurrent(value: number) {
    this._ddetIndPktDropRateCurrent = value;
  }
  public resetDdetIndPktDropRateCurrent() {
    this._ddetIndPktDropRateCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndPktDropRateCurrentInput() {
    return this._ddetIndPktDropRateCurrent;
  }

  // ddet_ind_pkt_drop_rate_max - computed: false, optional: true, required: false
  private _ddetIndPktDropRateMax?: number; 
  public get ddetIndPktDropRateMax() {
    return this.getNumberAttribute('ddet_ind_pkt_drop_rate_max');
  }
  public set ddetIndPktDropRateMax(value: number) {
    this._ddetIndPktDropRateMax = value;
  }
  public resetDdetIndPktDropRateMax() {
    this._ddetIndPktDropRateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndPktDropRateMaxInput() {
    return this._ddetIndPktDropRateMax;
  }

  // ddet_ind_pkt_drop_rate_min - computed: false, optional: true, required: false
  private _ddetIndPktDropRateMin?: number; 
  public get ddetIndPktDropRateMin() {
    return this.getNumberAttribute('ddet_ind_pkt_drop_rate_min');
  }
  public set ddetIndPktDropRateMin(value: number) {
    this._ddetIndPktDropRateMin = value;
  }
  public resetDdetIndPktDropRateMin() {
    this._ddetIndPktDropRateMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndPktDropRateMinInput() {
    return this._ddetIndPktDropRateMin;
  }

  // ddet_ind_pkt_drop_ratio_adaptive_threshold - computed: false, optional: true, required: false
  private _ddetIndPktDropRatioAdaptiveThreshold?: number; 
  public get ddetIndPktDropRatioAdaptiveThreshold() {
    return this.getNumberAttribute('ddet_ind_pkt_drop_ratio_adaptive_threshold');
  }
  public set ddetIndPktDropRatioAdaptiveThreshold(value: number) {
    this._ddetIndPktDropRatioAdaptiveThreshold = value;
  }
  public resetDdetIndPktDropRatioAdaptiveThreshold() {
    this._ddetIndPktDropRatioAdaptiveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndPktDropRatioAdaptiveThresholdInput() {
    return this._ddetIndPktDropRatioAdaptiveThreshold;
  }

  // ddet_ind_pkt_drop_ratio_current - computed: false, optional: true, required: false
  private _ddetIndPktDropRatioCurrent?: number; 
  public get ddetIndPktDropRatioCurrent() {
    return this.getNumberAttribute('ddet_ind_pkt_drop_ratio_current');
  }
  public set ddetIndPktDropRatioCurrent(value: number) {
    this._ddetIndPktDropRatioCurrent = value;
  }
  public resetDdetIndPktDropRatioCurrent() {
    this._ddetIndPktDropRatioCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndPktDropRatioCurrentInput() {
    return this._ddetIndPktDropRatioCurrent;
  }

  // ddet_ind_pkt_drop_ratio_max - computed: false, optional: true, required: false
  private _ddetIndPktDropRatioMax?: number; 
  public get ddetIndPktDropRatioMax() {
    return this.getNumberAttribute('ddet_ind_pkt_drop_ratio_max');
  }
  public set ddetIndPktDropRatioMax(value: number) {
    this._ddetIndPktDropRatioMax = value;
  }
  public resetDdetIndPktDropRatioMax() {
    this._ddetIndPktDropRatioMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndPktDropRatioMaxInput() {
    return this._ddetIndPktDropRatioMax;
  }

  // ddet_ind_pkt_drop_ratio_min - computed: false, optional: true, required: false
  private _ddetIndPktDropRatioMin?: number; 
  public get ddetIndPktDropRatioMin() {
    return this.getNumberAttribute('ddet_ind_pkt_drop_ratio_min');
  }
  public set ddetIndPktDropRatioMin(value: number) {
    this._ddetIndPktDropRatioMin = value;
  }
  public resetDdetIndPktDropRatioMin() {
    this._ddetIndPktDropRatioMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndPktDropRatioMinInput() {
    return this._ddetIndPktDropRatioMin;
  }

  // ddet_ind_pkt_rate_adaptive_threshold - computed: false, optional: true, required: false
  private _ddetIndPktRateAdaptiveThreshold?: number; 
  public get ddetIndPktRateAdaptiveThreshold() {
    return this.getNumberAttribute('ddet_ind_pkt_rate_adaptive_threshold');
  }
  public set ddetIndPktRateAdaptiveThreshold(value: number) {
    this._ddetIndPktRateAdaptiveThreshold = value;
  }
  public resetDdetIndPktRateAdaptiveThreshold() {
    this._ddetIndPktRateAdaptiveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndPktRateAdaptiveThresholdInput() {
    return this._ddetIndPktRateAdaptiveThreshold;
  }

  // ddet_ind_pkt_rate_current - computed: false, optional: true, required: false
  private _ddetIndPktRateCurrent?: number; 
  public get ddetIndPktRateCurrent() {
    return this.getNumberAttribute('ddet_ind_pkt_rate_current');
  }
  public set ddetIndPktRateCurrent(value: number) {
    this._ddetIndPktRateCurrent = value;
  }
  public resetDdetIndPktRateCurrent() {
    this._ddetIndPktRateCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndPktRateCurrentInput() {
    return this._ddetIndPktRateCurrent;
  }

  // ddet_ind_pkt_rate_max - computed: false, optional: true, required: false
  private _ddetIndPktRateMax?: number; 
  public get ddetIndPktRateMax() {
    return this.getNumberAttribute('ddet_ind_pkt_rate_max');
  }
  public set ddetIndPktRateMax(value: number) {
    this._ddetIndPktRateMax = value;
  }
  public resetDdetIndPktRateMax() {
    this._ddetIndPktRateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndPktRateMaxInput() {
    return this._ddetIndPktRateMax;
  }

  // ddet_ind_pkt_rate_min - computed: false, optional: true, required: false
  private _ddetIndPktRateMin?: number; 
  public get ddetIndPktRateMin() {
    return this.getNumberAttribute('ddet_ind_pkt_rate_min');
  }
  public set ddetIndPktRateMin(value: number) {
    this._ddetIndPktRateMin = value;
  }
  public resetDdetIndPktRateMin() {
    this._ddetIndPktRateMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndPktRateMinInput() {
    return this._ddetIndPktRateMin;
  }

  // ddet_ind_rst_rate_adaptive_threshold - computed: false, optional: true, required: false
  private _ddetIndRstRateAdaptiveThreshold?: number; 
  public get ddetIndRstRateAdaptiveThreshold() {
    return this.getNumberAttribute('ddet_ind_rst_rate_adaptive_threshold');
  }
  public set ddetIndRstRateAdaptiveThreshold(value: number) {
    this._ddetIndRstRateAdaptiveThreshold = value;
  }
  public resetDdetIndRstRateAdaptiveThreshold() {
    this._ddetIndRstRateAdaptiveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndRstRateAdaptiveThresholdInput() {
    return this._ddetIndRstRateAdaptiveThreshold;
  }

  // ddet_ind_rst_rate_current - computed: false, optional: true, required: false
  private _ddetIndRstRateCurrent?: number; 
  public get ddetIndRstRateCurrent() {
    return this.getNumberAttribute('ddet_ind_rst_rate_current');
  }
  public set ddetIndRstRateCurrent(value: number) {
    this._ddetIndRstRateCurrent = value;
  }
  public resetDdetIndRstRateCurrent() {
    this._ddetIndRstRateCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndRstRateCurrentInput() {
    return this._ddetIndRstRateCurrent;
  }

  // ddet_ind_rst_rate_max - computed: false, optional: true, required: false
  private _ddetIndRstRateMax?: number; 
  public get ddetIndRstRateMax() {
    return this.getNumberAttribute('ddet_ind_rst_rate_max');
  }
  public set ddetIndRstRateMax(value: number) {
    this._ddetIndRstRateMax = value;
  }
  public resetDdetIndRstRateMax() {
    this._ddetIndRstRateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndRstRateMaxInput() {
    return this._ddetIndRstRateMax;
  }

  // ddet_ind_rst_rate_min - computed: false, optional: true, required: false
  private _ddetIndRstRateMin?: number; 
  public get ddetIndRstRateMin() {
    return this.getNumberAttribute('ddet_ind_rst_rate_min');
  }
  public set ddetIndRstRateMin(value: number) {
    this._ddetIndRstRateMin = value;
  }
  public resetDdetIndRstRateMin() {
    this._ddetIndRstRateMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndRstRateMinInput() {
    return this._ddetIndRstRateMin;
  }

  // ddet_ind_small_payload_rate_adaptive_threshold - computed: false, optional: true, required: false
  private _ddetIndSmallPayloadRateAdaptiveThreshold?: number; 
  public get ddetIndSmallPayloadRateAdaptiveThreshold() {
    return this.getNumberAttribute('ddet_ind_small_payload_rate_adaptive_threshold');
  }
  public set ddetIndSmallPayloadRateAdaptiveThreshold(value: number) {
    this._ddetIndSmallPayloadRateAdaptiveThreshold = value;
  }
  public resetDdetIndSmallPayloadRateAdaptiveThreshold() {
    this._ddetIndSmallPayloadRateAdaptiveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndSmallPayloadRateAdaptiveThresholdInput() {
    return this._ddetIndSmallPayloadRateAdaptiveThreshold;
  }

  // ddet_ind_small_payload_rate_current - computed: false, optional: true, required: false
  private _ddetIndSmallPayloadRateCurrent?: number; 
  public get ddetIndSmallPayloadRateCurrent() {
    return this.getNumberAttribute('ddet_ind_small_payload_rate_current');
  }
  public set ddetIndSmallPayloadRateCurrent(value: number) {
    this._ddetIndSmallPayloadRateCurrent = value;
  }
  public resetDdetIndSmallPayloadRateCurrent() {
    this._ddetIndSmallPayloadRateCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndSmallPayloadRateCurrentInput() {
    return this._ddetIndSmallPayloadRateCurrent;
  }

  // ddet_ind_small_payload_rate_max - computed: false, optional: true, required: false
  private _ddetIndSmallPayloadRateMax?: number; 
  public get ddetIndSmallPayloadRateMax() {
    return this.getNumberAttribute('ddet_ind_small_payload_rate_max');
  }
  public set ddetIndSmallPayloadRateMax(value: number) {
    this._ddetIndSmallPayloadRateMax = value;
  }
  public resetDdetIndSmallPayloadRateMax() {
    this._ddetIndSmallPayloadRateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndSmallPayloadRateMaxInput() {
    return this._ddetIndSmallPayloadRateMax;
  }

  // ddet_ind_small_payload_rate_min - computed: false, optional: true, required: false
  private _ddetIndSmallPayloadRateMin?: number; 
  public get ddetIndSmallPayloadRateMin() {
    return this.getNumberAttribute('ddet_ind_small_payload_rate_min');
  }
  public set ddetIndSmallPayloadRateMin(value: number) {
    this._ddetIndSmallPayloadRateMin = value;
  }
  public resetDdetIndSmallPayloadRateMin() {
    this._ddetIndSmallPayloadRateMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndSmallPayloadRateMinInput() {
    return this._ddetIndSmallPayloadRateMin;
  }

  // ddet_ind_small_window_ack_rate_adaptive_threshold - computed: false, optional: true, required: false
  private _ddetIndSmallWindowAckRateAdaptiveThreshold?: number; 
  public get ddetIndSmallWindowAckRateAdaptiveThreshold() {
    return this.getNumberAttribute('ddet_ind_small_window_ack_rate_adaptive_threshold');
  }
  public set ddetIndSmallWindowAckRateAdaptiveThreshold(value: number) {
    this._ddetIndSmallWindowAckRateAdaptiveThreshold = value;
  }
  public resetDdetIndSmallWindowAckRateAdaptiveThreshold() {
    this._ddetIndSmallWindowAckRateAdaptiveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndSmallWindowAckRateAdaptiveThresholdInput() {
    return this._ddetIndSmallWindowAckRateAdaptiveThreshold;
  }

  // ddet_ind_small_window_ack_rate_current - computed: false, optional: true, required: false
  private _ddetIndSmallWindowAckRateCurrent?: number; 
  public get ddetIndSmallWindowAckRateCurrent() {
    return this.getNumberAttribute('ddet_ind_small_window_ack_rate_current');
  }
  public set ddetIndSmallWindowAckRateCurrent(value: number) {
    this._ddetIndSmallWindowAckRateCurrent = value;
  }
  public resetDdetIndSmallWindowAckRateCurrent() {
    this._ddetIndSmallWindowAckRateCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndSmallWindowAckRateCurrentInput() {
    return this._ddetIndSmallWindowAckRateCurrent;
  }

  // ddet_ind_small_window_ack_rate_max - computed: false, optional: true, required: false
  private _ddetIndSmallWindowAckRateMax?: number; 
  public get ddetIndSmallWindowAckRateMax() {
    return this.getNumberAttribute('ddet_ind_small_window_ack_rate_max');
  }
  public set ddetIndSmallWindowAckRateMax(value: number) {
    this._ddetIndSmallWindowAckRateMax = value;
  }
  public resetDdetIndSmallWindowAckRateMax() {
    this._ddetIndSmallWindowAckRateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndSmallWindowAckRateMaxInput() {
    return this._ddetIndSmallWindowAckRateMax;
  }

  // ddet_ind_small_window_ack_rate_min - computed: false, optional: true, required: false
  private _ddetIndSmallWindowAckRateMin?: number; 
  public get ddetIndSmallWindowAckRateMin() {
    return this.getNumberAttribute('ddet_ind_small_window_ack_rate_min');
  }
  public set ddetIndSmallWindowAckRateMin(value: number) {
    this._ddetIndSmallWindowAckRateMin = value;
  }
  public resetDdetIndSmallWindowAckRateMin() {
    this._ddetIndSmallWindowAckRateMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndSmallWindowAckRateMinInput() {
    return this._ddetIndSmallWindowAckRateMin;
  }

  // ddet_ind_syn_ack_rate_adaptive_threshold - computed: false, optional: true, required: false
  private _ddetIndSynAckRateAdaptiveThreshold?: number; 
  public get ddetIndSynAckRateAdaptiveThreshold() {
    return this.getNumberAttribute('ddet_ind_syn_ack_rate_adaptive_threshold');
  }
  public set ddetIndSynAckRateAdaptiveThreshold(value: number) {
    this._ddetIndSynAckRateAdaptiveThreshold = value;
  }
  public resetDdetIndSynAckRateAdaptiveThreshold() {
    this._ddetIndSynAckRateAdaptiveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndSynAckRateAdaptiveThresholdInput() {
    return this._ddetIndSynAckRateAdaptiveThreshold;
  }

  // ddet_ind_syn_ack_rate_current - computed: false, optional: true, required: false
  private _ddetIndSynAckRateCurrent?: number; 
  public get ddetIndSynAckRateCurrent() {
    return this.getNumberAttribute('ddet_ind_syn_ack_rate_current');
  }
  public set ddetIndSynAckRateCurrent(value: number) {
    this._ddetIndSynAckRateCurrent = value;
  }
  public resetDdetIndSynAckRateCurrent() {
    this._ddetIndSynAckRateCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndSynAckRateCurrentInput() {
    return this._ddetIndSynAckRateCurrent;
  }

  // ddet_ind_syn_ack_rate_max - computed: false, optional: true, required: false
  private _ddetIndSynAckRateMax?: number; 
  public get ddetIndSynAckRateMax() {
    return this.getNumberAttribute('ddet_ind_syn_ack_rate_max');
  }
  public set ddetIndSynAckRateMax(value: number) {
    this._ddetIndSynAckRateMax = value;
  }
  public resetDdetIndSynAckRateMax() {
    this._ddetIndSynAckRateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndSynAckRateMaxInput() {
    return this._ddetIndSynAckRateMax;
  }

  // ddet_ind_syn_ack_rate_min - computed: false, optional: true, required: false
  private _ddetIndSynAckRateMin?: number; 
  public get ddetIndSynAckRateMin() {
    return this.getNumberAttribute('ddet_ind_syn_ack_rate_min');
  }
  public set ddetIndSynAckRateMin(value: number) {
    this._ddetIndSynAckRateMin = value;
  }
  public resetDdetIndSynAckRateMin() {
    this._ddetIndSynAckRateMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndSynAckRateMinInput() {
    return this._ddetIndSynAckRateMin;
  }

  // ddet_ind_syn_per_fin_rate_adaptive_threshold - computed: false, optional: true, required: false
  private _ddetIndSynPerFinRateAdaptiveThreshold?: number; 
  public get ddetIndSynPerFinRateAdaptiveThreshold() {
    return this.getNumberAttribute('ddet_ind_syn_per_fin_rate_adaptive_threshold');
  }
  public set ddetIndSynPerFinRateAdaptiveThreshold(value: number) {
    this._ddetIndSynPerFinRateAdaptiveThreshold = value;
  }
  public resetDdetIndSynPerFinRateAdaptiveThreshold() {
    this._ddetIndSynPerFinRateAdaptiveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndSynPerFinRateAdaptiveThresholdInput() {
    return this._ddetIndSynPerFinRateAdaptiveThreshold;
  }

  // ddet_ind_syn_per_fin_rate_current - computed: false, optional: true, required: false
  private _ddetIndSynPerFinRateCurrent?: number; 
  public get ddetIndSynPerFinRateCurrent() {
    return this.getNumberAttribute('ddet_ind_syn_per_fin_rate_current');
  }
  public set ddetIndSynPerFinRateCurrent(value: number) {
    this._ddetIndSynPerFinRateCurrent = value;
  }
  public resetDdetIndSynPerFinRateCurrent() {
    this._ddetIndSynPerFinRateCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndSynPerFinRateCurrentInput() {
    return this._ddetIndSynPerFinRateCurrent;
  }

  // ddet_ind_syn_per_fin_rate_max - computed: false, optional: true, required: false
  private _ddetIndSynPerFinRateMax?: number; 
  public get ddetIndSynPerFinRateMax() {
    return this.getNumberAttribute('ddet_ind_syn_per_fin_rate_max');
  }
  public set ddetIndSynPerFinRateMax(value: number) {
    this._ddetIndSynPerFinRateMax = value;
  }
  public resetDdetIndSynPerFinRateMax() {
    this._ddetIndSynPerFinRateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndSynPerFinRateMaxInput() {
    return this._ddetIndSynPerFinRateMax;
  }

  // ddet_ind_syn_per_fin_rate_min - computed: false, optional: true, required: false
  private _ddetIndSynPerFinRateMin?: number; 
  public get ddetIndSynPerFinRateMin() {
    return this.getNumberAttribute('ddet_ind_syn_per_fin_rate_min');
  }
  public set ddetIndSynPerFinRateMin(value: number) {
    this._ddetIndSynPerFinRateMin = value;
  }
  public resetDdetIndSynPerFinRateMin() {
    this._ddetIndSynPerFinRateMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndSynPerFinRateMinInput() {
    return this._ddetIndSynPerFinRateMin;
  }

  // ddet_ind_syn_rate_adaptive_threshold - computed: false, optional: true, required: false
  private _ddetIndSynRateAdaptiveThreshold?: number; 
  public get ddetIndSynRateAdaptiveThreshold() {
    return this.getNumberAttribute('ddet_ind_syn_rate_adaptive_threshold');
  }
  public set ddetIndSynRateAdaptiveThreshold(value: number) {
    this._ddetIndSynRateAdaptiveThreshold = value;
  }
  public resetDdetIndSynRateAdaptiveThreshold() {
    this._ddetIndSynRateAdaptiveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndSynRateAdaptiveThresholdInput() {
    return this._ddetIndSynRateAdaptiveThreshold;
  }

  // ddet_ind_syn_rate_current - computed: false, optional: true, required: false
  private _ddetIndSynRateCurrent?: number; 
  public get ddetIndSynRateCurrent() {
    return this.getNumberAttribute('ddet_ind_syn_rate_current');
  }
  public set ddetIndSynRateCurrent(value: number) {
    this._ddetIndSynRateCurrent = value;
  }
  public resetDdetIndSynRateCurrent() {
    this._ddetIndSynRateCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndSynRateCurrentInput() {
    return this._ddetIndSynRateCurrent;
  }

  // ddet_ind_syn_rate_max - computed: false, optional: true, required: false
  private _ddetIndSynRateMax?: number; 
  public get ddetIndSynRateMax() {
    return this.getNumberAttribute('ddet_ind_syn_rate_max');
  }
  public set ddetIndSynRateMax(value: number) {
    this._ddetIndSynRateMax = value;
  }
  public resetDdetIndSynRateMax() {
    this._ddetIndSynRateMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndSynRateMaxInput() {
    return this._ddetIndSynRateMax;
  }

  // ddet_ind_syn_rate_min - computed: false, optional: true, required: false
  private _ddetIndSynRateMin?: number; 
  public get ddetIndSynRateMin() {
    return this.getNumberAttribute('ddet_ind_syn_rate_min');
  }
  public set ddetIndSynRateMin(value: number) {
    this._ddetIndSynRateMin = value;
  }
  public resetDdetIndSynRateMin() {
    this._ddetIndSynRateMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndSynRateMinInput() {
    return this._ddetIndSynRateMin;
  }

  // ddet_ind_total_szp_adaptive_threshold - computed: false, optional: true, required: false
  private _ddetIndTotalSzpAdaptiveThreshold?: number; 
  public get ddetIndTotalSzpAdaptiveThreshold() {
    return this.getNumberAttribute('ddet_ind_total_szp_adaptive_threshold');
  }
  public set ddetIndTotalSzpAdaptiveThreshold(value: number) {
    this._ddetIndTotalSzpAdaptiveThreshold = value;
  }
  public resetDdetIndTotalSzpAdaptiveThreshold() {
    this._ddetIndTotalSzpAdaptiveThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndTotalSzpAdaptiveThresholdInput() {
    return this._ddetIndTotalSzpAdaptiveThreshold;
  }

  // ddet_ind_total_szp_current - computed: false, optional: true, required: false
  private _ddetIndTotalSzpCurrent?: number; 
  public get ddetIndTotalSzpCurrent() {
    return this.getNumberAttribute('ddet_ind_total_szp_current');
  }
  public set ddetIndTotalSzpCurrent(value: number) {
    this._ddetIndTotalSzpCurrent = value;
  }
  public resetDdetIndTotalSzpCurrent() {
    this._ddetIndTotalSzpCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndTotalSzpCurrentInput() {
    return this._ddetIndTotalSzpCurrent;
  }

  // ddet_ind_total_szp_max - computed: false, optional: true, required: false
  private _ddetIndTotalSzpMax?: number; 
  public get ddetIndTotalSzpMax() {
    return this.getNumberAttribute('ddet_ind_total_szp_max');
  }
  public set ddetIndTotalSzpMax(value: number) {
    this._ddetIndTotalSzpMax = value;
  }
  public resetDdetIndTotalSzpMax() {
    this._ddetIndTotalSzpMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndTotalSzpMaxInput() {
    return this._ddetIndTotalSzpMax;
  }

  // ddet_ind_total_szp_min - computed: false, optional: true, required: false
  private _ddetIndTotalSzpMin?: number; 
  public get ddetIndTotalSzpMin() {
    return this.getNumberAttribute('ddet_ind_total_szp_min');
  }
  public set ddetIndTotalSzpMin(value: number) {
    this._ddetIndTotalSzpMin = value;
  }
  public resetDdetIndTotalSzpMin() {
    this._ddetIndTotalSzpMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddetIndTotalSzpMinInput() {
    return this._ddetIndTotalSzpMin;
  }

  // ip_proto_type - computed: false, optional: true, required: false
  private _ipProtoType?: number; 
  public get ipProtoType() {
    return this.getNumberAttribute('ip_proto_type');
  }
  public set ipProtoType(value: number) {
    this._ipProtoType = value;
  }
  public resetIpProtoType() {
    this._ipProtoType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipProtoTypeInput() {
    return this._ipProtoType;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats thunder_ddos_dst_zone_ip_proto_proto_number_port_ind_stats}
*/
export class DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_zone_ip_proto_proto_number_port_ind_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats to import
  * @param importFromId The id of the existing DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDstZoneIpProtoProtoNumberPortIndStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_zone_ip_proto_proto_number_port_ind_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_zone_ip_proto_proto_number_port_ind_stats thunder_ddos_dst_zone_ip_proto_proto_number_port_ind_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDstZoneIpProtoProtoNumberPortIndStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDstZoneIpProtoProtoNumberPortIndStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_zone_ip_proto_proto_number_port_ind_stats',
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
    this._protocolNum = config.protocolNum;
    this._zoneName = config.zoneName;
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

  // protocol_num - computed: false, optional: false, required: true
  private _protocolNum?: string; 
  public get protocolNum() {
    return this.getStringAttribute('protocol_num');
  }
  public set protocolNum(value: string) {
    this._protocolNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolNumInput() {
    return this._protocolNum;
  }

  // zone_name - computed: false, optional: false, required: true
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderDdosDstZoneIpProtoProtoNumberPortIndStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosDstZoneIpProtoProtoNumberPortIndStatsStats) {
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
      protocol_num: cdktf.stringToTerraform(this._protocolNum),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      stats: dataThunderDdosDstZoneIpProtoProtoNumberPortIndStatsStatsToTerraform(this._stats.internalValue),
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
      protocol_num: {
        value: cdktf.stringToHclTerraform(this._protocolNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderDdosDstZoneIpProtoProtoNumberPortIndStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstZoneIpProtoProtoNumberPortIndStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
