// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDstEntryL4TypePortIndStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * DstEntryName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#dst_entry_name DataThunderDdosDstEntryL4TypePortIndStats#dst_entry_name}
  */
  readonly dstEntryName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#id DataThunderDdosDstEntryL4TypePortIndStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Protocol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#protocol DataThunderDdosDstEntryL4TypePortIndStats#protocol}
  */
  readonly protocol: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#stats DataThunderDdosDstEntryL4TypePortIndStats#stats}
  */
  readonly stats?: DataThunderDdosDstEntryL4TypePortIndStatsStats;
}
export interface DataThunderDdosDstEntryL4TypePortIndStatsStats {
  /**
  * Bit Rate Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_bit_rate_current DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_bit_rate_current}
  */
  readonly ddetIndBitRateCurrent?: number;
  /**
  * Bit Rate Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_bit_rate_max DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_bit_rate_max}
  */
  readonly ddetIndBitRateMax?: number;
  /**
  * Bit Rate Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_bit_rate_min DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_bit_rate_min}
  */
  readonly ddetIndBitRateMin?: number;
  /**
  * TCP/UDP Concurrent Sessions Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_concurrent_conns_current DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_concurrent_conns_current}
  */
  readonly ddetIndConcurrentConnsCurrent?: number;
  /**
  * TCP/UDP Concurrent Sessions Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_concurrent_conns_max DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_concurrent_conns_max}
  */
  readonly ddetIndConcurrentConnsMax?: number;
  /**
  * TCP/UDP Concurrent Sessions Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_concurrent_conns_min DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_concurrent_conns_min}
  */
  readonly ddetIndConcurrentConnsMin?: number;
  /**
  * TCP Session Miss Rate Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_conn_miss_rate_current DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_conn_miss_rate_current}
  */
  readonly ddetIndConnMissRateCurrent?: number;
  /**
  * TCP Session Miss Rate Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_conn_miss_rate_max DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_conn_miss_rate_max}
  */
  readonly ddetIndConnMissRateMax?: number;
  /**
  * TCP Session Miss Rate Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_conn_miss_rate_min DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_conn_miss_rate_min}
  */
  readonly ddetIndConnMissRateMin?: number;
  /**
  * Data CPU Utilization Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_data_cpu_util_current DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_data_cpu_util_current}
  */
  readonly ddetIndDataCpuUtilCurrent?: number;
  /**
  * Data CPU Utilization Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_data_cpu_util_max DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_data_cpu_util_max}
  */
  readonly ddetIndDataCpuUtilMax?: number;
  /**
  * Data CPU Utilization Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_data_cpu_util_min DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_data_cpu_util_min}
  */
  readonly ddetIndDataCpuUtilMin?: number;
  /**
  * TCP Empty ACK Rate Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_empty_ack_rate_current DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_empty_ack_rate_current}
  */
  readonly ddetIndEmptyAckRateCurrent?: number;
  /**
  * TCP Empty ACK Rate Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_empty_ack_rate_max DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_empty_ack_rate_max}
  */
  readonly ddetIndEmptyAckRateMax?: number;
  /**
  * TCP Empty ACK Rate Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_empty_ack_rate_min DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_empty_ack_rate_min}
  */
  readonly ddetIndEmptyAckRateMin?: number;
  /**
  * TCP FIN Rate Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_fin_rate_current DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_fin_rate_current}
  */
  readonly ddetIndFinRateCurrent?: number;
  /**
  * TCP FIN Rate Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_fin_rate_max DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_fin_rate_max}
  */
  readonly ddetIndFinRateMax?: number;
  /**
  * TCP FIN Rate Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_fin_rate_min DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_fin_rate_min}
  */
  readonly ddetIndFinRateMin?: number;
  /**
  * Frag Pkt Rate Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_frag_rate_current DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_frag_rate_current}
  */
  readonly ddetIndFragRateCurrent?: number;
  /**
  * Frag Pkt Rate Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_frag_rate_max DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_frag_rate_max}
  */
  readonly ddetIndFragRateMax?: number;
  /**
  * Frag Pkt Rate Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_frag_rate_min DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_frag_rate_min}
  */
  readonly ddetIndFragRateMin?: number;
  /**
  * Bytes-to / Bytes-from Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_inb_per_outb_current DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_inb_per_outb_current}
  */
  readonly ddetIndInbPerOutbCurrent?: number;
  /**
  * Bytes-to / Bytes-from Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_inb_per_outb_max DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_inb_per_outb_max}
  */
  readonly ddetIndInbPerOutbMax?: number;
  /**
  * Bytes-to / Bytes-from Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_inb_per_outb_min DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_inb_per_outb_min}
  */
  readonly ddetIndInbPerOutbMin?: number;
  /**
  * Outside Interface Utilization Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_outside_intf_util_current DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_outside_intf_util_current}
  */
  readonly ddetIndOutsideIntfUtilCurrent?: number;
  /**
  * Outside Interface Utilization Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_outside_intf_util_max DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_outside_intf_util_max}
  */
  readonly ddetIndOutsideIntfUtilMax?: number;
  /**
  * Outside Interface Utilization Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_outside_intf_util_min DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_outside_intf_util_min}
  */
  readonly ddetIndOutsideIntfUtilMin?: number;
  /**
  * Pkt Drop Rate Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_pkt_drop_rate_current DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_pkt_drop_rate_current}
  */
  readonly ddetIndPktDropRateCurrent?: number;
  /**
  * Pkt Drop Rate Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_pkt_drop_rate_max DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_pkt_drop_rate_max}
  */
  readonly ddetIndPktDropRateMax?: number;
  /**
  * Pkt Drop Rate Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_pkt_drop_rate_min DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_pkt_drop_rate_min}
  */
  readonly ddetIndPktDropRateMin?: number;
  /**
  * Pkt Drop / Pkt Rcvd Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_pkt_drop_ratio_current DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_pkt_drop_ratio_current}
  */
  readonly ddetIndPktDropRatioCurrent?: number;
  /**
  * Pkt Drop / Pkt Rcvd Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_pkt_drop_ratio_max DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_pkt_drop_ratio_max}
  */
  readonly ddetIndPktDropRatioMax?: number;
  /**
  * Pkt Drop / Pkt Rcvd Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_pkt_drop_ratio_min DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_pkt_drop_ratio_min}
  */
  readonly ddetIndPktDropRatioMin?: number;
  /**
  * Pkt Rate Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_pkt_rate_current DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_pkt_rate_current}
  */
  readonly ddetIndPktRateCurrent?: number;
  /**
  * Pkt Rate Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_pkt_rate_max DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_pkt_rate_max}
  */
  readonly ddetIndPktRateMax?: number;
  /**
  * Pkt Rate Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_pkt_rate_min DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_pkt_rate_min}
  */
  readonly ddetIndPktRateMin?: number;
  /**
  * TCP RST Rate Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_rst_rate_current DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_rst_rate_current}
  */
  readonly ddetIndRstRateCurrent?: number;
  /**
  * TCP RST Rate Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_rst_rate_max DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_rst_rate_max}
  */
  readonly ddetIndRstRateMax?: number;
  /**
  * TCP RST Rate Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_rst_rate_min DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_rst_rate_min}
  */
  readonly ddetIndRstRateMin?: number;
  /**
  * TCP Small Payload Rate Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_small_payload_rate_current DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_small_payload_rate_current}
  */
  readonly ddetIndSmallPayloadRateCurrent?: number;
  /**
  * TCP Small Payload Rate Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_small_payload_rate_max DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_small_payload_rate_max}
  */
  readonly ddetIndSmallPayloadRateMax?: number;
  /**
  * TCP Small Payload Rate Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_small_payload_rate_min DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_small_payload_rate_min}
  */
  readonly ddetIndSmallPayloadRateMin?: number;
  /**
  * TCP Small Window ACK Rate Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_small_window_ack_rate_current DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_small_window_ack_rate_current}
  */
  readonly ddetIndSmallWindowAckRateCurrent?: number;
  /**
  * TCP Small Window ACK Rate Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_small_window_ack_rate_max DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_small_window_ack_rate_max}
  */
  readonly ddetIndSmallWindowAckRateMax?: number;
  /**
  * TCP Small Window ACK Rate Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_small_window_ack_rate_min DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_small_window_ack_rate_min}
  */
  readonly ddetIndSmallWindowAckRateMin?: number;
  /**
  * TCP SYN Rate / FIN Rate Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_syn_per_fin_rate_current DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_syn_per_fin_rate_current}
  */
  readonly ddetIndSynPerFinRateCurrent?: number;
  /**
  * TCP SYN Rate / FIN Rate Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_syn_per_fin_rate_max DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_syn_per_fin_rate_max}
  */
  readonly ddetIndSynPerFinRateMax?: number;
  /**
  * TCP SYN Rate / FIN Rate Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_syn_per_fin_rate_min DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_syn_per_fin_rate_min}
  */
  readonly ddetIndSynPerFinRateMin?: number;
  /**
  * TCP SYN Rate Current
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_syn_rate_current DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_syn_rate_current}
  */
  readonly ddetIndSynRateCurrent?: number;
  /**
  * TCP SYN Rate Max
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_syn_rate_max DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_syn_rate_max}
  */
  readonly ddetIndSynRateMax?: number;
  /**
  * TCP SYN Rate Min
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ddet_ind_syn_rate_min DataThunderDdosDstEntryL4TypePortIndStats#ddet_ind_syn_rate_min}
  */
  readonly ddetIndSynRateMin?: number;
  /**
  * IP Protocol Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#ip_proto_type DataThunderDdosDstEntryL4TypePortIndStats#ip_proto_type}
  */
  readonly ipProtoType?: number;
}

export function dataThunderDdosDstEntryL4TypePortIndStatsStatsToTerraform(struct?: DataThunderDdosDstEntryL4TypePortIndStatsStatsOutputReference | DataThunderDdosDstEntryL4TypePortIndStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ddet_ind_bit_rate_current: cdktf.numberToTerraform(struct!.ddetIndBitRateCurrent),
    ddet_ind_bit_rate_max: cdktf.numberToTerraform(struct!.ddetIndBitRateMax),
    ddet_ind_bit_rate_min: cdktf.numberToTerraform(struct!.ddetIndBitRateMin),
    ddet_ind_concurrent_conns_current: cdktf.numberToTerraform(struct!.ddetIndConcurrentConnsCurrent),
    ddet_ind_concurrent_conns_max: cdktf.numberToTerraform(struct!.ddetIndConcurrentConnsMax),
    ddet_ind_concurrent_conns_min: cdktf.numberToTerraform(struct!.ddetIndConcurrentConnsMin),
    ddet_ind_conn_miss_rate_current: cdktf.numberToTerraform(struct!.ddetIndConnMissRateCurrent),
    ddet_ind_conn_miss_rate_max: cdktf.numberToTerraform(struct!.ddetIndConnMissRateMax),
    ddet_ind_conn_miss_rate_min: cdktf.numberToTerraform(struct!.ddetIndConnMissRateMin),
    ddet_ind_data_cpu_util_current: cdktf.numberToTerraform(struct!.ddetIndDataCpuUtilCurrent),
    ddet_ind_data_cpu_util_max: cdktf.numberToTerraform(struct!.ddetIndDataCpuUtilMax),
    ddet_ind_data_cpu_util_min: cdktf.numberToTerraform(struct!.ddetIndDataCpuUtilMin),
    ddet_ind_empty_ack_rate_current: cdktf.numberToTerraform(struct!.ddetIndEmptyAckRateCurrent),
    ddet_ind_empty_ack_rate_max: cdktf.numberToTerraform(struct!.ddetIndEmptyAckRateMax),
    ddet_ind_empty_ack_rate_min: cdktf.numberToTerraform(struct!.ddetIndEmptyAckRateMin),
    ddet_ind_fin_rate_current: cdktf.numberToTerraform(struct!.ddetIndFinRateCurrent),
    ddet_ind_fin_rate_max: cdktf.numberToTerraform(struct!.ddetIndFinRateMax),
    ddet_ind_fin_rate_min: cdktf.numberToTerraform(struct!.ddetIndFinRateMin),
    ddet_ind_frag_rate_current: cdktf.numberToTerraform(struct!.ddetIndFragRateCurrent),
    ddet_ind_frag_rate_max: cdktf.numberToTerraform(struct!.ddetIndFragRateMax),
    ddet_ind_frag_rate_min: cdktf.numberToTerraform(struct!.ddetIndFragRateMin),
    ddet_ind_inb_per_outb_current: cdktf.numberToTerraform(struct!.ddetIndInbPerOutbCurrent),
    ddet_ind_inb_per_outb_max: cdktf.numberToTerraform(struct!.ddetIndInbPerOutbMax),
    ddet_ind_inb_per_outb_min: cdktf.numberToTerraform(struct!.ddetIndInbPerOutbMin),
    ddet_ind_outside_intf_util_current: cdktf.numberToTerraform(struct!.ddetIndOutsideIntfUtilCurrent),
    ddet_ind_outside_intf_util_max: cdktf.numberToTerraform(struct!.ddetIndOutsideIntfUtilMax),
    ddet_ind_outside_intf_util_min: cdktf.numberToTerraform(struct!.ddetIndOutsideIntfUtilMin),
    ddet_ind_pkt_drop_rate_current: cdktf.numberToTerraform(struct!.ddetIndPktDropRateCurrent),
    ddet_ind_pkt_drop_rate_max: cdktf.numberToTerraform(struct!.ddetIndPktDropRateMax),
    ddet_ind_pkt_drop_rate_min: cdktf.numberToTerraform(struct!.ddetIndPktDropRateMin),
    ddet_ind_pkt_drop_ratio_current: cdktf.numberToTerraform(struct!.ddetIndPktDropRatioCurrent),
    ddet_ind_pkt_drop_ratio_max: cdktf.numberToTerraform(struct!.ddetIndPktDropRatioMax),
    ddet_ind_pkt_drop_ratio_min: cdktf.numberToTerraform(struct!.ddetIndPktDropRatioMin),
    ddet_ind_pkt_rate_current: cdktf.numberToTerraform(struct!.ddetIndPktRateCurrent),
    ddet_ind_pkt_rate_max: cdktf.numberToTerraform(struct!.ddetIndPktRateMax),
    ddet_ind_pkt_rate_min: cdktf.numberToTerraform(struct!.ddetIndPktRateMin),
    ddet_ind_rst_rate_current: cdktf.numberToTerraform(struct!.ddetIndRstRateCurrent),
    ddet_ind_rst_rate_max: cdktf.numberToTerraform(struct!.ddetIndRstRateMax),
    ddet_ind_rst_rate_min: cdktf.numberToTerraform(struct!.ddetIndRstRateMin),
    ddet_ind_small_payload_rate_current: cdktf.numberToTerraform(struct!.ddetIndSmallPayloadRateCurrent),
    ddet_ind_small_payload_rate_max: cdktf.numberToTerraform(struct!.ddetIndSmallPayloadRateMax),
    ddet_ind_small_payload_rate_min: cdktf.numberToTerraform(struct!.ddetIndSmallPayloadRateMin),
    ddet_ind_small_window_ack_rate_current: cdktf.numberToTerraform(struct!.ddetIndSmallWindowAckRateCurrent),
    ddet_ind_small_window_ack_rate_max: cdktf.numberToTerraform(struct!.ddetIndSmallWindowAckRateMax),
    ddet_ind_small_window_ack_rate_min: cdktf.numberToTerraform(struct!.ddetIndSmallWindowAckRateMin),
    ddet_ind_syn_per_fin_rate_current: cdktf.numberToTerraform(struct!.ddetIndSynPerFinRateCurrent),
    ddet_ind_syn_per_fin_rate_max: cdktf.numberToTerraform(struct!.ddetIndSynPerFinRateMax),
    ddet_ind_syn_per_fin_rate_min: cdktf.numberToTerraform(struct!.ddetIndSynPerFinRateMin),
    ddet_ind_syn_rate_current: cdktf.numberToTerraform(struct!.ddetIndSynRateCurrent),
    ddet_ind_syn_rate_max: cdktf.numberToTerraform(struct!.ddetIndSynRateMax),
    ddet_ind_syn_rate_min: cdktf.numberToTerraform(struct!.ddetIndSynRateMin),
    ip_proto_type: cdktf.numberToTerraform(struct!.ipProtoType),
  }
}


export function dataThunderDdosDstEntryL4TypePortIndStatsStatsToHclTerraform(struct?: DataThunderDdosDstEntryL4TypePortIndStatsStatsOutputReference | DataThunderDdosDstEntryL4TypePortIndStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataThunderDdosDstEntryL4TypePortIndStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstEntryL4TypePortIndStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._ipProtoType !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipProtoType = this._ipProtoType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstEntryL4TypePortIndStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ddetIndBitRateCurrent = undefined;
      this._ddetIndBitRateMax = undefined;
      this._ddetIndBitRateMin = undefined;
      this._ddetIndConcurrentConnsCurrent = undefined;
      this._ddetIndConcurrentConnsMax = undefined;
      this._ddetIndConcurrentConnsMin = undefined;
      this._ddetIndConnMissRateCurrent = undefined;
      this._ddetIndConnMissRateMax = undefined;
      this._ddetIndConnMissRateMin = undefined;
      this._ddetIndDataCpuUtilCurrent = undefined;
      this._ddetIndDataCpuUtilMax = undefined;
      this._ddetIndDataCpuUtilMin = undefined;
      this._ddetIndEmptyAckRateCurrent = undefined;
      this._ddetIndEmptyAckRateMax = undefined;
      this._ddetIndEmptyAckRateMin = undefined;
      this._ddetIndFinRateCurrent = undefined;
      this._ddetIndFinRateMax = undefined;
      this._ddetIndFinRateMin = undefined;
      this._ddetIndFragRateCurrent = undefined;
      this._ddetIndFragRateMax = undefined;
      this._ddetIndFragRateMin = undefined;
      this._ddetIndInbPerOutbCurrent = undefined;
      this._ddetIndInbPerOutbMax = undefined;
      this._ddetIndInbPerOutbMin = undefined;
      this._ddetIndOutsideIntfUtilCurrent = undefined;
      this._ddetIndOutsideIntfUtilMax = undefined;
      this._ddetIndOutsideIntfUtilMin = undefined;
      this._ddetIndPktDropRateCurrent = undefined;
      this._ddetIndPktDropRateMax = undefined;
      this._ddetIndPktDropRateMin = undefined;
      this._ddetIndPktDropRatioCurrent = undefined;
      this._ddetIndPktDropRatioMax = undefined;
      this._ddetIndPktDropRatioMin = undefined;
      this._ddetIndPktRateCurrent = undefined;
      this._ddetIndPktRateMax = undefined;
      this._ddetIndPktRateMin = undefined;
      this._ddetIndRstRateCurrent = undefined;
      this._ddetIndRstRateMax = undefined;
      this._ddetIndRstRateMin = undefined;
      this._ddetIndSmallPayloadRateCurrent = undefined;
      this._ddetIndSmallPayloadRateMax = undefined;
      this._ddetIndSmallPayloadRateMin = undefined;
      this._ddetIndSmallWindowAckRateCurrent = undefined;
      this._ddetIndSmallWindowAckRateMax = undefined;
      this._ddetIndSmallWindowAckRateMin = undefined;
      this._ddetIndSynPerFinRateCurrent = undefined;
      this._ddetIndSynPerFinRateMax = undefined;
      this._ddetIndSynPerFinRateMin = undefined;
      this._ddetIndSynRateCurrent = undefined;
      this._ddetIndSynRateMax = undefined;
      this._ddetIndSynRateMin = undefined;
      this._ipProtoType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ddetIndBitRateCurrent = value.ddetIndBitRateCurrent;
      this._ddetIndBitRateMax = value.ddetIndBitRateMax;
      this._ddetIndBitRateMin = value.ddetIndBitRateMin;
      this._ddetIndConcurrentConnsCurrent = value.ddetIndConcurrentConnsCurrent;
      this._ddetIndConcurrentConnsMax = value.ddetIndConcurrentConnsMax;
      this._ddetIndConcurrentConnsMin = value.ddetIndConcurrentConnsMin;
      this._ddetIndConnMissRateCurrent = value.ddetIndConnMissRateCurrent;
      this._ddetIndConnMissRateMax = value.ddetIndConnMissRateMax;
      this._ddetIndConnMissRateMin = value.ddetIndConnMissRateMin;
      this._ddetIndDataCpuUtilCurrent = value.ddetIndDataCpuUtilCurrent;
      this._ddetIndDataCpuUtilMax = value.ddetIndDataCpuUtilMax;
      this._ddetIndDataCpuUtilMin = value.ddetIndDataCpuUtilMin;
      this._ddetIndEmptyAckRateCurrent = value.ddetIndEmptyAckRateCurrent;
      this._ddetIndEmptyAckRateMax = value.ddetIndEmptyAckRateMax;
      this._ddetIndEmptyAckRateMin = value.ddetIndEmptyAckRateMin;
      this._ddetIndFinRateCurrent = value.ddetIndFinRateCurrent;
      this._ddetIndFinRateMax = value.ddetIndFinRateMax;
      this._ddetIndFinRateMin = value.ddetIndFinRateMin;
      this._ddetIndFragRateCurrent = value.ddetIndFragRateCurrent;
      this._ddetIndFragRateMax = value.ddetIndFragRateMax;
      this._ddetIndFragRateMin = value.ddetIndFragRateMin;
      this._ddetIndInbPerOutbCurrent = value.ddetIndInbPerOutbCurrent;
      this._ddetIndInbPerOutbMax = value.ddetIndInbPerOutbMax;
      this._ddetIndInbPerOutbMin = value.ddetIndInbPerOutbMin;
      this._ddetIndOutsideIntfUtilCurrent = value.ddetIndOutsideIntfUtilCurrent;
      this._ddetIndOutsideIntfUtilMax = value.ddetIndOutsideIntfUtilMax;
      this._ddetIndOutsideIntfUtilMin = value.ddetIndOutsideIntfUtilMin;
      this._ddetIndPktDropRateCurrent = value.ddetIndPktDropRateCurrent;
      this._ddetIndPktDropRateMax = value.ddetIndPktDropRateMax;
      this._ddetIndPktDropRateMin = value.ddetIndPktDropRateMin;
      this._ddetIndPktDropRatioCurrent = value.ddetIndPktDropRatioCurrent;
      this._ddetIndPktDropRatioMax = value.ddetIndPktDropRatioMax;
      this._ddetIndPktDropRatioMin = value.ddetIndPktDropRatioMin;
      this._ddetIndPktRateCurrent = value.ddetIndPktRateCurrent;
      this._ddetIndPktRateMax = value.ddetIndPktRateMax;
      this._ddetIndPktRateMin = value.ddetIndPktRateMin;
      this._ddetIndRstRateCurrent = value.ddetIndRstRateCurrent;
      this._ddetIndRstRateMax = value.ddetIndRstRateMax;
      this._ddetIndRstRateMin = value.ddetIndRstRateMin;
      this._ddetIndSmallPayloadRateCurrent = value.ddetIndSmallPayloadRateCurrent;
      this._ddetIndSmallPayloadRateMax = value.ddetIndSmallPayloadRateMax;
      this._ddetIndSmallPayloadRateMin = value.ddetIndSmallPayloadRateMin;
      this._ddetIndSmallWindowAckRateCurrent = value.ddetIndSmallWindowAckRateCurrent;
      this._ddetIndSmallWindowAckRateMax = value.ddetIndSmallWindowAckRateMax;
      this._ddetIndSmallWindowAckRateMin = value.ddetIndSmallWindowAckRateMin;
      this._ddetIndSynPerFinRateCurrent = value.ddetIndSynPerFinRateCurrent;
      this._ddetIndSynPerFinRateMax = value.ddetIndSynPerFinRateMax;
      this._ddetIndSynPerFinRateMin = value.ddetIndSynPerFinRateMin;
      this._ddetIndSynRateCurrent = value.ddetIndSynRateCurrent;
      this._ddetIndSynRateMax = value.ddetIndSynRateMax;
      this._ddetIndSynRateMin = value.ddetIndSynRateMin;
      this._ipProtoType = value.ipProtoType;
    }
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats thunder_ddos_dst_entry_l4_type_port_ind_stats}
*/
export class DataThunderDdosDstEntryL4TypePortIndStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_entry_l4_type_port_ind_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDstEntryL4TypePortIndStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDstEntryL4TypePortIndStats to import
  * @param importFromId The id of the existing DataThunderDdosDstEntryL4TypePortIndStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDstEntryL4TypePortIndStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_entry_l4_type_port_ind_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_dst_entry_l4_type_port_ind_stats thunder_ddos_dst_entry_l4_type_port_ind_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDstEntryL4TypePortIndStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDstEntryL4TypePortIndStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_entry_l4_type_port_ind_stats',
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
    this._dstEntryName = config.dstEntryName;
    this._id = config.id;
    this._protocol = config.protocol;
    this._stats.internalValue = config.stats;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dst_entry_name - computed: false, optional: false, required: true
  private _dstEntryName?: string; 
  public get dstEntryName() {
    return this.getStringAttribute('dst_entry_name');
  }
  public set dstEntryName(value: string) {
    this._dstEntryName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryNameInput() {
    return this._dstEntryName;
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderDdosDstEntryL4TypePortIndStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosDstEntryL4TypePortIndStatsStats) {
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
      dst_entry_name: cdktf.stringToTerraform(this._dstEntryName),
      id: cdktf.stringToTerraform(this._id),
      protocol: cdktf.stringToTerraform(this._protocol),
      stats: dataThunderDdosDstEntryL4TypePortIndStatsStatsToTerraform(this._stats.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dst_entry_name: {
        value: cdktf.stringToHclTerraform(this._dstEntryName),
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
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderDdosDstEntryL4TypePortIndStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstEntryL4TypePortIndStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
