// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosL4TypeIcmpStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#id DataThunderDdosL4TypeIcmpStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#stats DataThunderDdosL4TypeIcmpStats#stats}
  */
  readonly stats?: DataThunderDdosL4TypeIcmpStatsStats;
}
export interface DataThunderDdosL4TypeIcmpStatsStats {
  /**
  * Dst Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#bl DataThunderDdosL4TypeIcmpStats#bl}
  */
  readonly bl?: number;
  /**
  * Dst Hardware Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#dst_hw_drop DataThunderDdosL4TypeIcmpStats#dst_hw_drop}
  */
  readonly dstHwDrop?: number;
  /**
  * Exceed Action: Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#exceed_action_drop DataThunderDdosL4TypeIcmpStats#exceed_action_drop}
  */
  readonly exceedActionDrop?: number;
  /**
  * Exceed Action: Tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#exceed_action_tunnel DataThunderDdosL4TypeIcmpStats#exceed_action_tunnel}
  */
  readonly exceedActionTunnel?: number;
  /**
  * Src KiBit Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#exceed_drop_brate_src DataThunderDdosL4TypeIcmpStats#exceed_drop_brate_src}
  */
  readonly exceedDropBrateSrc?: number;
  /**
  * Src KiBit Rate Exceeded Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#exceed_drop_brate_src_pkt DataThunderDdosL4TypeIcmpStats#exceed_drop_brate_src_pkt}
  */
  readonly exceedDropBrateSrcPkt?: number;
  /**
  * Src Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#exceed_drop_prate_src DataThunderDdosL4TypeIcmpStats#exceed_drop_prate_src}
  */
  readonly exceedDropPrateSrc?: number;
  /**
  * Fragmented Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#frag_drop DataThunderDdosL4TypeIcmpStats#frag_drop}
  */
  readonly fragDrop?: number;
  /**
  * Fragmented Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#frag_rcvd DataThunderDdosL4TypeIcmpStats#frag_rcvd}
  */
  readonly fragRcvd?: number;
  /**
  * Fragmented Packets Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#frag_timeout DataThunderDdosL4TypeIcmpStats#frag_timeout}
  */
  readonly fragTimeout?: number;
  /**
  * ICMPv4 RFC Undef Type Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#icmpv4_rfc_undef_drop DataThunderDdosL4TypeIcmpStats#icmpv4_rfc_undef_drop}
  */
  readonly icmpv4RfcUndefDrop?: number;
  /**
  * ICMPv6 RFC Undef Type Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#icmpv6_rfc_undef_drop DataThunderDdosL4TypeIcmpStats#icmpv6_rfc_undef_drop}
  */
  readonly icmpv6RfcUndefDrop?: number;
  /**
  * Outbound Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#outbound_port_bytes DataThunderDdosL4TypeIcmpStats#outbound_port_bytes}
  */
  readonly outboundPortBytes?: number;
  /**
  * Outbound Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#outbound_port_bytes_drop DataThunderDdosL4TypeIcmpStats#outbound_port_bytes_drop}
  */
  readonly outboundPortBytesDrop?: number;
  /**
  * Outbound Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#outbound_port_bytes_sent DataThunderDdosL4TypeIcmpStats#outbound_port_bytes_sent}
  */
  readonly outboundPortBytesSent?: number;
  /**
  * Outbound Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#outbound_port_drop DataThunderDdosL4TypeIcmpStats#outbound_port_drop}
  */
  readonly outboundPortDrop?: number;
  /**
  * Outbound Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#outbound_port_pkt_sent DataThunderDdosL4TypeIcmpStats#outbound_port_pkt_sent}
  */
  readonly outboundPortPktSent?: number;
  /**
  * Outbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#outbound_port_rcvd DataThunderDdosL4TypeIcmpStats#outbound_port_rcvd}
  */
  readonly outboundPortRcvd?: number;
  /**
  * Inbound Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#port_bytes DataThunderDdosL4TypeIcmpStats#port_bytes}
  */
  readonly portBytes?: number;
  /**
  * Inbound Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#port_bytes_drop DataThunderDdosL4TypeIcmpStats#port_bytes_drop}
  */
  readonly portBytesDrop?: number;
  /**
  * Inbound Bytes Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#port_bytes_sent DataThunderDdosL4TypeIcmpStats#port_bytes_sent}
  */
  readonly portBytesSent?: number;
  /**
  * Inbound Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#port_drop DataThunderDdosL4TypeIcmpStats#port_drop}
  */
  readonly portDrop?: number;
  /**
  * KiBit Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#port_kbit_rate_exceed DataThunderDdosL4TypeIcmpStats#port_kbit_rate_exceed}
  */
  readonly portKbitRateExceed?: number;
  /**
  * KiBit Rate Exceeded Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#port_kbit_rate_exceed_pkt DataThunderDdosL4TypeIcmpStats#port_kbit_rate_exceed_pkt}
  */
  readonly portKbitRateExceedPkt?: number;
  /**
  * Packet Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#port_pkt_rate_exceed DataThunderDdosL4TypeIcmpStats#port_pkt_rate_exceed}
  */
  readonly portPktRateExceed?: number;
  /**
  * Inbound Packets Forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#port_pkt_sent DataThunderDdosL4TypeIcmpStats#port_pkt_sent}
  */
  readonly portPktSent?: number;
  /**
  * Inbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#port_rcvd DataThunderDdosL4TypeIcmpStats#port_rcvd}
  */
  readonly portRcvd?: number;
  /**
  * Src Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#port_src_bl DataThunderDdosL4TypeIcmpStats#port_src_bl}
  */
  readonly portSrcBl?: number;
  /**
  * ICMP Type Dst Rate 1 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#rate_type0_exceed DataThunderDdosL4TypeIcmpStats#rate_type0_exceed}
  */
  readonly rateType0Exceed?: number;
  /**
  * ICMP Type Dst Rate 1 Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#rate_type0_exceed_bl DataThunderDdosL4TypeIcmpStats#rate_type0_exceed_bl}
  */
  readonly rateType0ExceedBl?: number;
  /**
  * ICMP Type Dst Rate 1 Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#rate_type0_exceed_drop DataThunderDdosL4TypeIcmpStats#rate_type0_exceed_drop}
  */
  readonly rateType0ExceedDrop?: number;
  /**
  * ICMP Type Dst Rate 2 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#rate_type1_exceed DataThunderDdosL4TypeIcmpStats#rate_type1_exceed}
  */
  readonly rateType1Exceed?: number;
  /**
  * ICMP Type Dst Rate 2 Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#rate_type1_exceed_bl DataThunderDdosL4TypeIcmpStats#rate_type1_exceed_bl}
  */
  readonly rateType1ExceedBl?: number;
  /**
  * ICMP Type Dst Rate 2 Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#rate_type1_exceed_drop DataThunderDdosL4TypeIcmpStats#rate_type1_exceed_drop}
  */
  readonly rateType1ExceedDrop?: number;
  /**
  * ICMP Type Dst Rate 3 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#rate_type2_exceed DataThunderDdosL4TypeIcmpStats#rate_type2_exceed}
  */
  readonly rateType2Exceed?: number;
  /**
  * ICMP Type Dst Rate 3 Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#rate_type2_exceed_bl DataThunderDdosL4TypeIcmpStats#rate_type2_exceed_bl}
  */
  readonly rateType2ExceedBl?: number;
  /**
  * ICMP Type Dst Rate 3 Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#rate_type2_exceed_drop DataThunderDdosL4TypeIcmpStats#rate_type2_exceed_drop}
  */
  readonly rateType2ExceedDrop?: number;
  /**
  * Sflow External Packets Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#sflow_external_packets_sent DataThunderDdosL4TypeIcmpStats#sflow_external_packets_sent}
  */
  readonly sflowExternalPacketsSent?: number;
  /**
  * Sflow External Samples Packed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#sflow_external_samples_packed DataThunderDdosL4TypeIcmpStats#sflow_external_samples_packed}
  */
  readonly sflowExternalSamplesPacked?: number;
  /**
  * Sflow Internal Packets Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#sflow_internal_packets_sent DataThunderDdosL4TypeIcmpStats#sflow_internal_packets_sent}
  */
  readonly sflowInternalPacketsSent?: number;
  /**
  * Sflow Internal Samples Packed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#sflow_internal_samples_packed DataThunderDdosL4TypeIcmpStats#sflow_internal_samples_packed}
  */
  readonly sflowInternalSamplesPacked?: number;
  /**
  * Src Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#src_drop DataThunderDdosL4TypeIcmpStats#src_drop}
  */
  readonly srcDrop?: number;
  /**
  * Src Fragmented Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#src_frag_drop DataThunderDdosL4TypeIcmpStats#src_frag_drop}
  */
  readonly srcFragDrop?: number;
  /**
  * ICMP Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#type DataThunderDdosL4TypeIcmpStats#type}
  */
  readonly type?: number;
  /**
  * ICMP Type Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#type_bl DataThunderDdosL4TypeIcmpStats#type_bl}
  */
  readonly typeBl?: number;
  /**
  * ICMP Type Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#type_deny_drop DataThunderDdosL4TypeIcmpStats#type_deny_drop}
  */
  readonly typeDenyDrop?: number;
  /**
  * ICMP Type Wildcard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#wildcard DataThunderDdosL4TypeIcmpStats#wildcard}
  */
  readonly wildcard?: number;
  /**
  * ICMP Type Wildcard Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#wildcard_bl DataThunderDdosL4TypeIcmpStats#wildcard_bl}
  */
  readonly wildcardBl?: number;
  /**
  * ICMP Type Wildcard Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#wildcard_deny_drop DataThunderDdosL4TypeIcmpStats#wildcard_deny_drop}
  */
  readonly wildcardDenyDrop?: number;
}

export function dataThunderDdosL4TypeIcmpStatsStatsToTerraform(struct?: DataThunderDdosL4TypeIcmpStatsStatsOutputReference | DataThunderDdosL4TypeIcmpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bl: cdktf.numberToTerraform(struct!.bl),
    dst_hw_drop: cdktf.numberToTerraform(struct!.dstHwDrop),
    exceed_action_drop: cdktf.numberToTerraform(struct!.exceedActionDrop),
    exceed_action_tunnel: cdktf.numberToTerraform(struct!.exceedActionTunnel),
    exceed_drop_brate_src: cdktf.numberToTerraform(struct!.exceedDropBrateSrc),
    exceed_drop_brate_src_pkt: cdktf.numberToTerraform(struct!.exceedDropBrateSrcPkt),
    exceed_drop_prate_src: cdktf.numberToTerraform(struct!.exceedDropPrateSrc),
    frag_drop: cdktf.numberToTerraform(struct!.fragDrop),
    frag_rcvd: cdktf.numberToTerraform(struct!.fragRcvd),
    frag_timeout: cdktf.numberToTerraform(struct!.fragTimeout),
    icmpv4_rfc_undef_drop: cdktf.numberToTerraform(struct!.icmpv4RfcUndefDrop),
    icmpv6_rfc_undef_drop: cdktf.numberToTerraform(struct!.icmpv6RfcUndefDrop),
    outbound_port_bytes: cdktf.numberToTerraform(struct!.outboundPortBytes),
    outbound_port_bytes_drop: cdktf.numberToTerraform(struct!.outboundPortBytesDrop),
    outbound_port_bytes_sent: cdktf.numberToTerraform(struct!.outboundPortBytesSent),
    outbound_port_drop: cdktf.numberToTerraform(struct!.outboundPortDrop),
    outbound_port_pkt_sent: cdktf.numberToTerraform(struct!.outboundPortPktSent),
    outbound_port_rcvd: cdktf.numberToTerraform(struct!.outboundPortRcvd),
    port_bytes: cdktf.numberToTerraform(struct!.portBytes),
    port_bytes_drop: cdktf.numberToTerraform(struct!.portBytesDrop),
    port_bytes_sent: cdktf.numberToTerraform(struct!.portBytesSent),
    port_drop: cdktf.numberToTerraform(struct!.portDrop),
    port_kbit_rate_exceed: cdktf.numberToTerraform(struct!.portKbitRateExceed),
    port_kbit_rate_exceed_pkt: cdktf.numberToTerraform(struct!.portKbitRateExceedPkt),
    port_pkt_rate_exceed: cdktf.numberToTerraform(struct!.portPktRateExceed),
    port_pkt_sent: cdktf.numberToTerraform(struct!.portPktSent),
    port_rcvd: cdktf.numberToTerraform(struct!.portRcvd),
    port_src_bl: cdktf.numberToTerraform(struct!.portSrcBl),
    rate_type0_exceed: cdktf.numberToTerraform(struct!.rateType0Exceed),
    rate_type0_exceed_bl: cdktf.numberToTerraform(struct!.rateType0ExceedBl),
    rate_type0_exceed_drop: cdktf.numberToTerraform(struct!.rateType0ExceedDrop),
    rate_type1_exceed: cdktf.numberToTerraform(struct!.rateType1Exceed),
    rate_type1_exceed_bl: cdktf.numberToTerraform(struct!.rateType1ExceedBl),
    rate_type1_exceed_drop: cdktf.numberToTerraform(struct!.rateType1ExceedDrop),
    rate_type2_exceed: cdktf.numberToTerraform(struct!.rateType2Exceed),
    rate_type2_exceed_bl: cdktf.numberToTerraform(struct!.rateType2ExceedBl),
    rate_type2_exceed_drop: cdktf.numberToTerraform(struct!.rateType2ExceedDrop),
    sflow_external_packets_sent: cdktf.numberToTerraform(struct!.sflowExternalPacketsSent),
    sflow_external_samples_packed: cdktf.numberToTerraform(struct!.sflowExternalSamplesPacked),
    sflow_internal_packets_sent: cdktf.numberToTerraform(struct!.sflowInternalPacketsSent),
    sflow_internal_samples_packed: cdktf.numberToTerraform(struct!.sflowInternalSamplesPacked),
    src_drop: cdktf.numberToTerraform(struct!.srcDrop),
    src_frag_drop: cdktf.numberToTerraform(struct!.srcFragDrop),
    type: cdktf.numberToTerraform(struct!.type),
    type_bl: cdktf.numberToTerraform(struct!.typeBl),
    type_deny_drop: cdktf.numberToTerraform(struct!.typeDenyDrop),
    wildcard: cdktf.numberToTerraform(struct!.wildcard),
    wildcard_bl: cdktf.numberToTerraform(struct!.wildcardBl),
    wildcard_deny_drop: cdktf.numberToTerraform(struct!.wildcardDenyDrop),
  }
}


export function dataThunderDdosL4TypeIcmpStatsStatsToHclTerraform(struct?: DataThunderDdosL4TypeIcmpStatsStatsOutputReference | DataThunderDdosL4TypeIcmpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bl: {
      value: cdktf.numberToHclTerraform(struct!.bl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_hw_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstHwDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.exceedActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_action_tunnel: {
      value: cdktf.numberToHclTerraform(struct!.exceedActionTunnel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_drop_brate_src: {
      value: cdktf.numberToHclTerraform(struct!.exceedDropBrateSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_drop_brate_src_pkt: {
      value: cdktf.numberToHclTerraform(struct!.exceedDropBrateSrcPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceed_drop_prate_src: {
      value: cdktf.numberToHclTerraform(struct!.exceedDropPrateSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_drop: {
      value: cdktf.numberToHclTerraform(struct!.fragDrop),
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
    frag_timeout: {
      value: cdktf.numberToHclTerraform(struct!.fragTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv4_rfc_undef_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmpv4RfcUndefDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_rfc_undef_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6RfcUndefDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_port_bytes: {
      value: cdktf.numberToHclTerraform(struct!.outboundPortBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_port_bytes_drop: {
      value: cdktf.numberToHclTerraform(struct!.outboundPortBytesDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_port_bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.outboundPortBytesSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_port_drop: {
      value: cdktf.numberToHclTerraform(struct!.outboundPortDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_port_pkt_sent: {
      value: cdktf.numberToHclTerraform(struct!.outboundPortPktSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_port_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.outboundPortRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_bytes: {
      value: cdktf.numberToHclTerraform(struct!.portBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_bytes_drop: {
      value: cdktf.numberToHclTerraform(struct!.portBytesDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.portBytesSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_drop: {
      value: cdktf.numberToHclTerraform(struct!.portDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_kbit_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.portKbitRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_kbit_rate_exceed_pkt: {
      value: cdktf.numberToHclTerraform(struct!.portKbitRateExceedPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.portPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_pkt_sent: {
      value: cdktf.numberToHclTerraform(struct!.portPktSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.portRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_src_bl: {
      value: cdktf.numberToHclTerraform(struct!.portSrcBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_type0_exceed: {
      value: cdktf.numberToHclTerraform(struct!.rateType0Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_type0_exceed_bl: {
      value: cdktf.numberToHclTerraform(struct!.rateType0ExceedBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_type0_exceed_drop: {
      value: cdktf.numberToHclTerraform(struct!.rateType0ExceedDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_type1_exceed: {
      value: cdktf.numberToHclTerraform(struct!.rateType1Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_type1_exceed_bl: {
      value: cdktf.numberToHclTerraform(struct!.rateType1ExceedBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_type1_exceed_drop: {
      value: cdktf.numberToHclTerraform(struct!.rateType1ExceedDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_type2_exceed: {
      value: cdktf.numberToHclTerraform(struct!.rateType2Exceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_type2_exceed_bl: {
      value: cdktf.numberToHclTerraform(struct!.rateType2ExceedBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_type2_exceed_drop: {
      value: cdktf.numberToHclTerraform(struct!.rateType2ExceedDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_external_packets_sent: {
      value: cdktf.numberToHclTerraform(struct!.sflowExternalPacketsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_external_samples_packed: {
      value: cdktf.numberToHclTerraform(struct!.sflowExternalSamplesPacked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_internal_packets_sent: {
      value: cdktf.numberToHclTerraform(struct!.sflowInternalPacketsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sflow_internal_samples_packed: {
      value: cdktf.numberToHclTerraform(struct!.sflowInternalSamplesPacked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_frag_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcFragDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.numberToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_bl: {
      value: cdktf.numberToHclTerraform(struct!.typeBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type_deny_drop: {
      value: cdktf.numberToHclTerraform(struct!.typeDenyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wildcard: {
      value: cdktf.numberToHclTerraform(struct!.wildcard),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wildcard_bl: {
      value: cdktf.numberToHclTerraform(struct!.wildcardBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wildcard_deny_drop: {
      value: cdktf.numberToHclTerraform(struct!.wildcardDenyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosL4TypeIcmpStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosL4TypeIcmpStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bl !== undefined) {
      hasAnyValues = true;
      internalValueResult.bl = this._bl;
    }
    if (this._dstHwDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstHwDrop = this._dstHwDrop;
    }
    if (this._exceedActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedActionDrop = this._exceedActionDrop;
    }
    if (this._exceedActionTunnel !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedActionTunnel = this._exceedActionTunnel;
    }
    if (this._exceedDropBrateSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedDropBrateSrc = this._exceedDropBrateSrc;
    }
    if (this._exceedDropBrateSrcPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedDropBrateSrcPkt = this._exceedDropBrateSrcPkt;
    }
    if (this._exceedDropPrateSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedDropPrateSrc = this._exceedDropPrateSrc;
    }
    if (this._fragDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragDrop = this._fragDrop;
    }
    if (this._fragRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragRcvd = this._fragRcvd;
    }
    if (this._fragTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragTimeout = this._fragTimeout;
    }
    if (this._icmpv4RfcUndefDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv4RfcUndefDrop = this._icmpv4RfcUndefDrop;
    }
    if (this._icmpv6RfcUndefDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6RfcUndefDrop = this._icmpv6RfcUndefDrop;
    }
    if (this._outboundPortBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPortBytes = this._outboundPortBytes;
    }
    if (this._outboundPortBytesDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPortBytesDrop = this._outboundPortBytesDrop;
    }
    if (this._outboundPortBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPortBytesSent = this._outboundPortBytesSent;
    }
    if (this._outboundPortDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPortDrop = this._outboundPortDrop;
    }
    if (this._outboundPortPktSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPortPktSent = this._outboundPortPktSent;
    }
    if (this._outboundPortRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPortRcvd = this._outboundPortRcvd;
    }
    if (this._portBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBytes = this._portBytes;
    }
    if (this._portBytesDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBytesDrop = this._portBytesDrop;
    }
    if (this._portBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.portBytesSent = this._portBytesSent;
    }
    if (this._portDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.portDrop = this._portDrop;
    }
    if (this._portKbitRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portKbitRateExceed = this._portKbitRateExceed;
    }
    if (this._portKbitRateExceedPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.portKbitRateExceedPkt = this._portKbitRateExceedPkt;
    }
    if (this._portPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portPktRateExceed = this._portPktRateExceed;
    }
    if (this._portPktSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.portPktSent = this._portPktSent;
    }
    if (this._portRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRcvd = this._portRcvd;
    }
    if (this._portSrcBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSrcBl = this._portSrcBl;
    }
    if (this._rateType0Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateType0Exceed = this._rateType0Exceed;
    }
    if (this._rateType0ExceedBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateType0ExceedBl = this._rateType0ExceedBl;
    }
    if (this._rateType0ExceedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateType0ExceedDrop = this._rateType0ExceedDrop;
    }
    if (this._rateType1Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateType1Exceed = this._rateType1Exceed;
    }
    if (this._rateType1ExceedBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateType1ExceedBl = this._rateType1ExceedBl;
    }
    if (this._rateType1ExceedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateType1ExceedDrop = this._rateType1ExceedDrop;
    }
    if (this._rateType2Exceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateType2Exceed = this._rateType2Exceed;
    }
    if (this._rateType2ExceedBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateType2ExceedBl = this._rateType2ExceedBl;
    }
    if (this._rateType2ExceedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateType2ExceedDrop = this._rateType2ExceedDrop;
    }
    if (this._sflowExternalPacketsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowExternalPacketsSent = this._sflowExternalPacketsSent;
    }
    if (this._sflowExternalSamplesPacked !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowExternalSamplesPacked = this._sflowExternalSamplesPacked;
    }
    if (this._sflowInternalPacketsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowInternalPacketsSent = this._sflowInternalPacketsSent;
    }
    if (this._sflowInternalSamplesPacked !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowInternalSamplesPacked = this._sflowInternalSamplesPacked;
    }
    if (this._srcDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDrop = this._srcDrop;
    }
    if (this._srcFragDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFragDrop = this._srcFragDrop;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._typeBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeBl = this._typeBl;
    }
    if (this._typeDenyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.typeDenyDrop = this._typeDenyDrop;
    }
    if (this._wildcard !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildcard = this._wildcard;
    }
    if (this._wildcardBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildcardBl = this._wildcardBl;
    }
    if (this._wildcardDenyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.wildcardDenyDrop = this._wildcardDenyDrop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosL4TypeIcmpStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bl = undefined;
      this._dstHwDrop = undefined;
      this._exceedActionDrop = undefined;
      this._exceedActionTunnel = undefined;
      this._exceedDropBrateSrc = undefined;
      this._exceedDropBrateSrcPkt = undefined;
      this._exceedDropPrateSrc = undefined;
      this._fragDrop = undefined;
      this._fragRcvd = undefined;
      this._fragTimeout = undefined;
      this._icmpv4RfcUndefDrop = undefined;
      this._icmpv6RfcUndefDrop = undefined;
      this._outboundPortBytes = undefined;
      this._outboundPortBytesDrop = undefined;
      this._outboundPortBytesSent = undefined;
      this._outboundPortDrop = undefined;
      this._outboundPortPktSent = undefined;
      this._outboundPortRcvd = undefined;
      this._portBytes = undefined;
      this._portBytesDrop = undefined;
      this._portBytesSent = undefined;
      this._portDrop = undefined;
      this._portKbitRateExceed = undefined;
      this._portKbitRateExceedPkt = undefined;
      this._portPktRateExceed = undefined;
      this._portPktSent = undefined;
      this._portRcvd = undefined;
      this._portSrcBl = undefined;
      this._rateType0Exceed = undefined;
      this._rateType0ExceedBl = undefined;
      this._rateType0ExceedDrop = undefined;
      this._rateType1Exceed = undefined;
      this._rateType1ExceedBl = undefined;
      this._rateType1ExceedDrop = undefined;
      this._rateType2Exceed = undefined;
      this._rateType2ExceedBl = undefined;
      this._rateType2ExceedDrop = undefined;
      this._sflowExternalPacketsSent = undefined;
      this._sflowExternalSamplesPacked = undefined;
      this._sflowInternalPacketsSent = undefined;
      this._sflowInternalSamplesPacked = undefined;
      this._srcDrop = undefined;
      this._srcFragDrop = undefined;
      this._type = undefined;
      this._typeBl = undefined;
      this._typeDenyDrop = undefined;
      this._wildcard = undefined;
      this._wildcardBl = undefined;
      this._wildcardDenyDrop = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bl = value.bl;
      this._dstHwDrop = value.dstHwDrop;
      this._exceedActionDrop = value.exceedActionDrop;
      this._exceedActionTunnel = value.exceedActionTunnel;
      this._exceedDropBrateSrc = value.exceedDropBrateSrc;
      this._exceedDropBrateSrcPkt = value.exceedDropBrateSrcPkt;
      this._exceedDropPrateSrc = value.exceedDropPrateSrc;
      this._fragDrop = value.fragDrop;
      this._fragRcvd = value.fragRcvd;
      this._fragTimeout = value.fragTimeout;
      this._icmpv4RfcUndefDrop = value.icmpv4RfcUndefDrop;
      this._icmpv6RfcUndefDrop = value.icmpv6RfcUndefDrop;
      this._outboundPortBytes = value.outboundPortBytes;
      this._outboundPortBytesDrop = value.outboundPortBytesDrop;
      this._outboundPortBytesSent = value.outboundPortBytesSent;
      this._outboundPortDrop = value.outboundPortDrop;
      this._outboundPortPktSent = value.outboundPortPktSent;
      this._outboundPortRcvd = value.outboundPortRcvd;
      this._portBytes = value.portBytes;
      this._portBytesDrop = value.portBytesDrop;
      this._portBytesSent = value.portBytesSent;
      this._portDrop = value.portDrop;
      this._portKbitRateExceed = value.portKbitRateExceed;
      this._portKbitRateExceedPkt = value.portKbitRateExceedPkt;
      this._portPktRateExceed = value.portPktRateExceed;
      this._portPktSent = value.portPktSent;
      this._portRcvd = value.portRcvd;
      this._portSrcBl = value.portSrcBl;
      this._rateType0Exceed = value.rateType0Exceed;
      this._rateType0ExceedBl = value.rateType0ExceedBl;
      this._rateType0ExceedDrop = value.rateType0ExceedDrop;
      this._rateType1Exceed = value.rateType1Exceed;
      this._rateType1ExceedBl = value.rateType1ExceedBl;
      this._rateType1ExceedDrop = value.rateType1ExceedDrop;
      this._rateType2Exceed = value.rateType2Exceed;
      this._rateType2ExceedBl = value.rateType2ExceedBl;
      this._rateType2ExceedDrop = value.rateType2ExceedDrop;
      this._sflowExternalPacketsSent = value.sflowExternalPacketsSent;
      this._sflowExternalSamplesPacked = value.sflowExternalSamplesPacked;
      this._sflowInternalPacketsSent = value.sflowInternalPacketsSent;
      this._sflowInternalSamplesPacked = value.sflowInternalSamplesPacked;
      this._srcDrop = value.srcDrop;
      this._srcFragDrop = value.srcFragDrop;
      this._type = value.type;
      this._typeBl = value.typeBl;
      this._typeDenyDrop = value.typeDenyDrop;
      this._wildcard = value.wildcard;
      this._wildcardBl = value.wildcardBl;
      this._wildcardDenyDrop = value.wildcardDenyDrop;
    }
  }

  // bl - computed: false, optional: true, required: false
  private _bl?: number; 
  public get bl() {
    return this.getNumberAttribute('bl');
  }
  public set bl(value: number) {
    this._bl = value;
  }
  public resetBl() {
    this._bl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blInput() {
    return this._bl;
  }

  // dst_hw_drop - computed: false, optional: true, required: false
  private _dstHwDrop?: number; 
  public get dstHwDrop() {
    return this.getNumberAttribute('dst_hw_drop');
  }
  public set dstHwDrop(value: number) {
    this._dstHwDrop = value;
  }
  public resetDstHwDrop() {
    this._dstHwDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstHwDropInput() {
    return this._dstHwDrop;
  }

  // exceed_action_drop - computed: false, optional: true, required: false
  private _exceedActionDrop?: number; 
  public get exceedActionDrop() {
    return this.getNumberAttribute('exceed_action_drop');
  }
  public set exceedActionDrop(value: number) {
    this._exceedActionDrop = value;
  }
  public resetExceedActionDrop() {
    this._exceedActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedActionDropInput() {
    return this._exceedActionDrop;
  }

  // exceed_action_tunnel - computed: false, optional: true, required: false
  private _exceedActionTunnel?: number; 
  public get exceedActionTunnel() {
    return this.getNumberAttribute('exceed_action_tunnel');
  }
  public set exceedActionTunnel(value: number) {
    this._exceedActionTunnel = value;
  }
  public resetExceedActionTunnel() {
    this._exceedActionTunnel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedActionTunnelInput() {
    return this._exceedActionTunnel;
  }

  // exceed_drop_brate_src - computed: false, optional: true, required: false
  private _exceedDropBrateSrc?: number; 
  public get exceedDropBrateSrc() {
    return this.getNumberAttribute('exceed_drop_brate_src');
  }
  public set exceedDropBrateSrc(value: number) {
    this._exceedDropBrateSrc = value;
  }
  public resetExceedDropBrateSrc() {
    this._exceedDropBrateSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedDropBrateSrcInput() {
    return this._exceedDropBrateSrc;
  }

  // exceed_drop_brate_src_pkt - computed: false, optional: true, required: false
  private _exceedDropBrateSrcPkt?: number; 
  public get exceedDropBrateSrcPkt() {
    return this.getNumberAttribute('exceed_drop_brate_src_pkt');
  }
  public set exceedDropBrateSrcPkt(value: number) {
    this._exceedDropBrateSrcPkt = value;
  }
  public resetExceedDropBrateSrcPkt() {
    this._exceedDropBrateSrcPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedDropBrateSrcPktInput() {
    return this._exceedDropBrateSrcPkt;
  }

  // exceed_drop_prate_src - computed: false, optional: true, required: false
  private _exceedDropPrateSrc?: number; 
  public get exceedDropPrateSrc() {
    return this.getNumberAttribute('exceed_drop_prate_src');
  }
  public set exceedDropPrateSrc(value: number) {
    this._exceedDropPrateSrc = value;
  }
  public resetExceedDropPrateSrc() {
    this._exceedDropPrateSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedDropPrateSrcInput() {
    return this._exceedDropPrateSrc;
  }

  // frag_drop - computed: false, optional: true, required: false
  private _fragDrop?: number; 
  public get fragDrop() {
    return this.getNumberAttribute('frag_drop');
  }
  public set fragDrop(value: number) {
    this._fragDrop = value;
  }
  public resetFragDrop() {
    this._fragDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragDropInput() {
    return this._fragDrop;
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

  // frag_timeout - computed: false, optional: true, required: false
  private _fragTimeout?: number; 
  public get fragTimeout() {
    return this.getNumberAttribute('frag_timeout');
  }
  public set fragTimeout(value: number) {
    this._fragTimeout = value;
  }
  public resetFragTimeout() {
    this._fragTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragTimeoutInput() {
    return this._fragTimeout;
  }

  // icmpv4_rfc_undef_drop - computed: false, optional: true, required: false
  private _icmpv4RfcUndefDrop?: number; 
  public get icmpv4RfcUndefDrop() {
    return this.getNumberAttribute('icmpv4_rfc_undef_drop');
  }
  public set icmpv4RfcUndefDrop(value: number) {
    this._icmpv4RfcUndefDrop = value;
  }
  public resetIcmpv4RfcUndefDrop() {
    this._icmpv4RfcUndefDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv4RfcUndefDropInput() {
    return this._icmpv4RfcUndefDrop;
  }

  // icmpv6_rfc_undef_drop - computed: false, optional: true, required: false
  private _icmpv6RfcUndefDrop?: number; 
  public get icmpv6RfcUndefDrop() {
    return this.getNumberAttribute('icmpv6_rfc_undef_drop');
  }
  public set icmpv6RfcUndefDrop(value: number) {
    this._icmpv6RfcUndefDrop = value;
  }
  public resetIcmpv6RfcUndefDrop() {
    this._icmpv6RfcUndefDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6RfcUndefDropInput() {
    return this._icmpv6RfcUndefDrop;
  }

  // outbound_port_bytes - computed: false, optional: true, required: false
  private _outboundPortBytes?: number; 
  public get outboundPortBytes() {
    return this.getNumberAttribute('outbound_port_bytes');
  }
  public set outboundPortBytes(value: number) {
    this._outboundPortBytes = value;
  }
  public resetOutboundPortBytes() {
    this._outboundPortBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPortBytesInput() {
    return this._outboundPortBytes;
  }

  // outbound_port_bytes_drop - computed: false, optional: true, required: false
  private _outboundPortBytesDrop?: number; 
  public get outboundPortBytesDrop() {
    return this.getNumberAttribute('outbound_port_bytes_drop');
  }
  public set outboundPortBytesDrop(value: number) {
    this._outboundPortBytesDrop = value;
  }
  public resetOutboundPortBytesDrop() {
    this._outboundPortBytesDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPortBytesDropInput() {
    return this._outboundPortBytesDrop;
  }

  // outbound_port_bytes_sent - computed: false, optional: true, required: false
  private _outboundPortBytesSent?: number; 
  public get outboundPortBytesSent() {
    return this.getNumberAttribute('outbound_port_bytes_sent');
  }
  public set outboundPortBytesSent(value: number) {
    this._outboundPortBytesSent = value;
  }
  public resetOutboundPortBytesSent() {
    this._outboundPortBytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPortBytesSentInput() {
    return this._outboundPortBytesSent;
  }

  // outbound_port_drop - computed: false, optional: true, required: false
  private _outboundPortDrop?: number; 
  public get outboundPortDrop() {
    return this.getNumberAttribute('outbound_port_drop');
  }
  public set outboundPortDrop(value: number) {
    this._outboundPortDrop = value;
  }
  public resetOutboundPortDrop() {
    this._outboundPortDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPortDropInput() {
    return this._outboundPortDrop;
  }

  // outbound_port_pkt_sent - computed: false, optional: true, required: false
  private _outboundPortPktSent?: number; 
  public get outboundPortPktSent() {
    return this.getNumberAttribute('outbound_port_pkt_sent');
  }
  public set outboundPortPktSent(value: number) {
    this._outboundPortPktSent = value;
  }
  public resetOutboundPortPktSent() {
    this._outboundPortPktSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPortPktSentInput() {
    return this._outboundPortPktSent;
  }

  // outbound_port_rcvd - computed: false, optional: true, required: false
  private _outboundPortRcvd?: number; 
  public get outboundPortRcvd() {
    return this.getNumberAttribute('outbound_port_rcvd');
  }
  public set outboundPortRcvd(value: number) {
    this._outboundPortRcvd = value;
  }
  public resetOutboundPortRcvd() {
    this._outboundPortRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPortRcvdInput() {
    return this._outboundPortRcvd;
  }

  // port_bytes - computed: false, optional: true, required: false
  private _portBytes?: number; 
  public get portBytes() {
    return this.getNumberAttribute('port_bytes');
  }
  public set portBytes(value: number) {
    this._portBytes = value;
  }
  public resetPortBytes() {
    this._portBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBytesInput() {
    return this._portBytes;
  }

  // port_bytes_drop - computed: false, optional: true, required: false
  private _portBytesDrop?: number; 
  public get portBytesDrop() {
    return this.getNumberAttribute('port_bytes_drop');
  }
  public set portBytesDrop(value: number) {
    this._portBytesDrop = value;
  }
  public resetPortBytesDrop() {
    this._portBytesDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBytesDropInput() {
    return this._portBytesDrop;
  }

  // port_bytes_sent - computed: false, optional: true, required: false
  private _portBytesSent?: number; 
  public get portBytesSent() {
    return this.getNumberAttribute('port_bytes_sent');
  }
  public set portBytesSent(value: number) {
    this._portBytesSent = value;
  }
  public resetPortBytesSent() {
    this._portBytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portBytesSentInput() {
    return this._portBytesSent;
  }

  // port_drop - computed: false, optional: true, required: false
  private _portDrop?: number; 
  public get portDrop() {
    return this.getNumberAttribute('port_drop');
  }
  public set portDrop(value: number) {
    this._portDrop = value;
  }
  public resetPortDrop() {
    this._portDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portDropInput() {
    return this._portDrop;
  }

  // port_kbit_rate_exceed - computed: false, optional: true, required: false
  private _portKbitRateExceed?: number; 
  public get portKbitRateExceed() {
    return this.getNumberAttribute('port_kbit_rate_exceed');
  }
  public set portKbitRateExceed(value: number) {
    this._portKbitRateExceed = value;
  }
  public resetPortKbitRateExceed() {
    this._portKbitRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portKbitRateExceedInput() {
    return this._portKbitRateExceed;
  }

  // port_kbit_rate_exceed_pkt - computed: false, optional: true, required: false
  private _portKbitRateExceedPkt?: number; 
  public get portKbitRateExceedPkt() {
    return this.getNumberAttribute('port_kbit_rate_exceed_pkt');
  }
  public set portKbitRateExceedPkt(value: number) {
    this._portKbitRateExceedPkt = value;
  }
  public resetPortKbitRateExceedPkt() {
    this._portKbitRateExceedPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portKbitRateExceedPktInput() {
    return this._portKbitRateExceedPkt;
  }

  // port_pkt_rate_exceed - computed: false, optional: true, required: false
  private _portPktRateExceed?: number; 
  public get portPktRateExceed() {
    return this.getNumberAttribute('port_pkt_rate_exceed');
  }
  public set portPktRateExceed(value: number) {
    this._portPktRateExceed = value;
  }
  public resetPortPktRateExceed() {
    this._portPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portPktRateExceedInput() {
    return this._portPktRateExceed;
  }

  // port_pkt_sent - computed: false, optional: true, required: false
  private _portPktSent?: number; 
  public get portPktSent() {
    return this.getNumberAttribute('port_pkt_sent');
  }
  public set portPktSent(value: number) {
    this._portPktSent = value;
  }
  public resetPortPktSent() {
    this._portPktSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portPktSentInput() {
    return this._portPktSent;
  }

  // port_rcvd - computed: false, optional: true, required: false
  private _portRcvd?: number; 
  public get portRcvd() {
    return this.getNumberAttribute('port_rcvd');
  }
  public set portRcvd(value: number) {
    this._portRcvd = value;
  }
  public resetPortRcvd() {
    this._portRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRcvdInput() {
    return this._portRcvd;
  }

  // port_src_bl - computed: false, optional: true, required: false
  private _portSrcBl?: number; 
  public get portSrcBl() {
    return this.getNumberAttribute('port_src_bl');
  }
  public set portSrcBl(value: number) {
    this._portSrcBl = value;
  }
  public resetPortSrcBl() {
    this._portSrcBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSrcBlInput() {
    return this._portSrcBl;
  }

  // rate_type0_exceed - computed: false, optional: true, required: false
  private _rateType0Exceed?: number; 
  public get rateType0Exceed() {
    return this.getNumberAttribute('rate_type0_exceed');
  }
  public set rateType0Exceed(value: number) {
    this._rateType0Exceed = value;
  }
  public resetRateType0Exceed() {
    this._rateType0Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateType0ExceedInput() {
    return this._rateType0Exceed;
  }

  // rate_type0_exceed_bl - computed: false, optional: true, required: false
  private _rateType0ExceedBl?: number; 
  public get rateType0ExceedBl() {
    return this.getNumberAttribute('rate_type0_exceed_bl');
  }
  public set rateType0ExceedBl(value: number) {
    this._rateType0ExceedBl = value;
  }
  public resetRateType0ExceedBl() {
    this._rateType0ExceedBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateType0ExceedBlInput() {
    return this._rateType0ExceedBl;
  }

  // rate_type0_exceed_drop - computed: false, optional: true, required: false
  private _rateType0ExceedDrop?: number; 
  public get rateType0ExceedDrop() {
    return this.getNumberAttribute('rate_type0_exceed_drop');
  }
  public set rateType0ExceedDrop(value: number) {
    this._rateType0ExceedDrop = value;
  }
  public resetRateType0ExceedDrop() {
    this._rateType0ExceedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateType0ExceedDropInput() {
    return this._rateType0ExceedDrop;
  }

  // rate_type1_exceed - computed: false, optional: true, required: false
  private _rateType1Exceed?: number; 
  public get rateType1Exceed() {
    return this.getNumberAttribute('rate_type1_exceed');
  }
  public set rateType1Exceed(value: number) {
    this._rateType1Exceed = value;
  }
  public resetRateType1Exceed() {
    this._rateType1Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateType1ExceedInput() {
    return this._rateType1Exceed;
  }

  // rate_type1_exceed_bl - computed: false, optional: true, required: false
  private _rateType1ExceedBl?: number; 
  public get rateType1ExceedBl() {
    return this.getNumberAttribute('rate_type1_exceed_bl');
  }
  public set rateType1ExceedBl(value: number) {
    this._rateType1ExceedBl = value;
  }
  public resetRateType1ExceedBl() {
    this._rateType1ExceedBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateType1ExceedBlInput() {
    return this._rateType1ExceedBl;
  }

  // rate_type1_exceed_drop - computed: false, optional: true, required: false
  private _rateType1ExceedDrop?: number; 
  public get rateType1ExceedDrop() {
    return this.getNumberAttribute('rate_type1_exceed_drop');
  }
  public set rateType1ExceedDrop(value: number) {
    this._rateType1ExceedDrop = value;
  }
  public resetRateType1ExceedDrop() {
    this._rateType1ExceedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateType1ExceedDropInput() {
    return this._rateType1ExceedDrop;
  }

  // rate_type2_exceed - computed: false, optional: true, required: false
  private _rateType2Exceed?: number; 
  public get rateType2Exceed() {
    return this.getNumberAttribute('rate_type2_exceed');
  }
  public set rateType2Exceed(value: number) {
    this._rateType2Exceed = value;
  }
  public resetRateType2Exceed() {
    this._rateType2Exceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateType2ExceedInput() {
    return this._rateType2Exceed;
  }

  // rate_type2_exceed_bl - computed: false, optional: true, required: false
  private _rateType2ExceedBl?: number; 
  public get rateType2ExceedBl() {
    return this.getNumberAttribute('rate_type2_exceed_bl');
  }
  public set rateType2ExceedBl(value: number) {
    this._rateType2ExceedBl = value;
  }
  public resetRateType2ExceedBl() {
    this._rateType2ExceedBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateType2ExceedBlInput() {
    return this._rateType2ExceedBl;
  }

  // rate_type2_exceed_drop - computed: false, optional: true, required: false
  private _rateType2ExceedDrop?: number; 
  public get rateType2ExceedDrop() {
    return this.getNumberAttribute('rate_type2_exceed_drop');
  }
  public set rateType2ExceedDrop(value: number) {
    this._rateType2ExceedDrop = value;
  }
  public resetRateType2ExceedDrop() {
    this._rateType2ExceedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateType2ExceedDropInput() {
    return this._rateType2ExceedDrop;
  }

  // sflow_external_packets_sent - computed: false, optional: true, required: false
  private _sflowExternalPacketsSent?: number; 
  public get sflowExternalPacketsSent() {
    return this.getNumberAttribute('sflow_external_packets_sent');
  }
  public set sflowExternalPacketsSent(value: number) {
    this._sflowExternalPacketsSent = value;
  }
  public resetSflowExternalPacketsSent() {
    this._sflowExternalPacketsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowExternalPacketsSentInput() {
    return this._sflowExternalPacketsSent;
  }

  // sflow_external_samples_packed - computed: false, optional: true, required: false
  private _sflowExternalSamplesPacked?: number; 
  public get sflowExternalSamplesPacked() {
    return this.getNumberAttribute('sflow_external_samples_packed');
  }
  public set sflowExternalSamplesPacked(value: number) {
    this._sflowExternalSamplesPacked = value;
  }
  public resetSflowExternalSamplesPacked() {
    this._sflowExternalSamplesPacked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowExternalSamplesPackedInput() {
    return this._sflowExternalSamplesPacked;
  }

  // sflow_internal_packets_sent - computed: false, optional: true, required: false
  private _sflowInternalPacketsSent?: number; 
  public get sflowInternalPacketsSent() {
    return this.getNumberAttribute('sflow_internal_packets_sent');
  }
  public set sflowInternalPacketsSent(value: number) {
    this._sflowInternalPacketsSent = value;
  }
  public resetSflowInternalPacketsSent() {
    this._sflowInternalPacketsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowInternalPacketsSentInput() {
    return this._sflowInternalPacketsSent;
  }

  // sflow_internal_samples_packed - computed: false, optional: true, required: false
  private _sflowInternalSamplesPacked?: number; 
  public get sflowInternalSamplesPacked() {
    return this.getNumberAttribute('sflow_internal_samples_packed');
  }
  public set sflowInternalSamplesPacked(value: number) {
    this._sflowInternalSamplesPacked = value;
  }
  public resetSflowInternalSamplesPacked() {
    this._sflowInternalSamplesPacked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowInternalSamplesPackedInput() {
    return this._sflowInternalSamplesPacked;
  }

  // src_drop - computed: false, optional: true, required: false
  private _srcDrop?: number; 
  public get srcDrop() {
    return this.getNumberAttribute('src_drop');
  }
  public set srcDrop(value: number) {
    this._srcDrop = value;
  }
  public resetSrcDrop() {
    this._srcDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDropInput() {
    return this._srcDrop;
  }

  // src_frag_drop - computed: false, optional: true, required: false
  private _srcFragDrop?: number; 
  public get srcFragDrop() {
    return this.getNumberAttribute('src_frag_drop');
  }
  public set srcFragDrop(value: number) {
    this._srcFragDrop = value;
  }
  public resetSrcFragDrop() {
    this._srcFragDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFragDropInput() {
    return this._srcFragDrop;
  }

  // type - computed: false, optional: true, required: false
  private _type?: number; 
  public get type() {
    return this.getNumberAttribute('type');
  }
  public set type(value: number) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // type_bl - computed: false, optional: true, required: false
  private _typeBl?: number; 
  public get typeBl() {
    return this.getNumberAttribute('type_bl');
  }
  public set typeBl(value: number) {
    this._typeBl = value;
  }
  public resetTypeBl() {
    this._typeBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeBlInput() {
    return this._typeBl;
  }

  // type_deny_drop - computed: false, optional: true, required: false
  private _typeDenyDrop?: number; 
  public get typeDenyDrop() {
    return this.getNumberAttribute('type_deny_drop');
  }
  public set typeDenyDrop(value: number) {
    this._typeDenyDrop = value;
  }
  public resetTypeDenyDrop() {
    this._typeDenyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeDenyDropInput() {
    return this._typeDenyDrop;
  }

  // wildcard - computed: false, optional: true, required: false
  private _wildcard?: number; 
  public get wildcard() {
    return this.getNumberAttribute('wildcard');
  }
  public set wildcard(value: number) {
    this._wildcard = value;
  }
  public resetWildcard() {
    this._wildcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardInput() {
    return this._wildcard;
  }

  // wildcard_bl - computed: false, optional: true, required: false
  private _wildcardBl?: number; 
  public get wildcardBl() {
    return this.getNumberAttribute('wildcard_bl');
  }
  public set wildcardBl(value: number) {
    this._wildcardBl = value;
  }
  public resetWildcardBl() {
    this._wildcardBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardBlInput() {
    return this._wildcardBl;
  }

  // wildcard_deny_drop - computed: false, optional: true, required: false
  private _wildcardDenyDrop?: number; 
  public get wildcardDenyDrop() {
    return this.getNumberAttribute('wildcard_deny_drop');
  }
  public set wildcardDenyDrop(value: number) {
    this._wildcardDenyDrop = value;
  }
  public resetWildcardDenyDrop() {
    this._wildcardDenyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardDenyDropInput() {
    return this._wildcardDenyDrop;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats thunder_ddos_l4type_icmp_stats}
*/
export class DataThunderDdosL4TypeIcmpStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_l4type_icmp_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosL4TypeIcmpStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosL4TypeIcmpStats to import
  * @param importFromId The id of the existing DataThunderDdosL4TypeIcmpStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosL4TypeIcmpStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_l4type_icmp_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4type_icmp_stats thunder_ddos_l4type_icmp_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosL4TypeIcmpStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosL4TypeIcmpStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_l4type_icmp_stats',
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
  private _stats = new DataThunderDdosL4TypeIcmpStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosL4TypeIcmpStatsStats) {
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
      stats: dataThunderDdosL4TypeIcmpStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderDdosL4TypeIcmpStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosL4TypeIcmpStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
