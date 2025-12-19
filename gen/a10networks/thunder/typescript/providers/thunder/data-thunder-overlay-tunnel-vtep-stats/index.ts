// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderOverlayTunnelVtepStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#id DataThunderOverlayTunnelVtepStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * VTEP Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#id1 DataThunderOverlayTunnelVtepStats#id1}
  */
  readonly id1: number;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#stats DataThunderOverlayTunnelVtepStats#stats}
  */
  readonly stats?: DataThunderOverlayTunnelVtepStatsStats;
}
export interface DataThunderOverlayTunnelVtepStatsStats {
  /**
  * Arp request sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#arp_req_sent DataThunderOverlayTunnelVtepStats#arp_req_sent}
  */
  readonly arpReqSent?: number;
  /**
  * Bad checksum in received packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#bad_chksum_pks_rx DataThunderOverlayTunnelVtepStats#bad_chksum_pks_rx}
  */
  readonly badChksumPksRx?: number;
  /**
  * bad inner ipv4 packet len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#bad_inner_ipv4_len_rx DataThunderOverlayTunnelVtepStats#bad_inner_ipv4_len_rx}
  */
  readonly badInnerIpv4LenRx?: number;
  /**
  * Bad inner ipv6 packet len
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#bad_inner_ipv6_len_rx DataThunderOverlayTunnelVtepStats#bad_inner_ipv6_len_rx}
  */
  readonly badInnerIpv6LenRx?: number;
  /**
  * Total broadcast packets in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#bcast_pkt_rx DataThunderOverlayTunnelVtepStats#bcast_pkt_rx}
  */
  readonly bcastPktRx?: number;
  /**
  * Broadcast packets out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#bcast_pkt_tx DataThunderOverlayTunnelVtepStats#bcast_pkt_tx}
  */
  readonly bcastPktTx?: number;
  /**
  * Config errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#cfg_err_count DataThunderOverlayTunnelVtepStats#cfg_err_count}
  */
  readonly cfgErrCount?: number;
  /**
  * Dot1q packets in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#dot1q_pkts_rx DataThunderOverlayTunnelVtepStats#dot1q_pkts_rx}
  */
  readonly dot1QPktsRx?: number;
  /**
  * Dropped received packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#dropped_pkt_rx DataThunderOverlayTunnelVtepStats#dropped_pkt_rx}
  */
  readonly droppedPktRx?: number;
  /**
  * Dropped packets out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#dropped_pkts_tx DataThunderOverlayTunnelVtepStats#dropped_pkts_tx}
  */
  readonly droppedPktsTx?: number;
  /**
  * Encap missed in received packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#encap_miss_pkts_rx DataThunderOverlayTunnelVtepStats#encap_miss_pkts_rx}
  */
  readonly encapMissPktsRx?: number;
  /**
  * Encap unresolved failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#encap_unresolved_count DataThunderOverlayTunnelVtepStats#encap_unresolved_count}
  */
  readonly encapUnresolvedCount?: number;
  /**
  * Flooded packet count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#flooded_pkt_count DataThunderOverlayTunnelVtepStats#flooded_pkt_count}
  */
  readonly floodedPktCount?: number;
  /**
  * Frag dropped packets out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#frag_drop_pkts_tx DataThunderOverlayTunnelVtepStats#frag_drop_pkts_tx}
  */
  readonly fragDropPktsTx?: number;
  /**
  * Frag packets out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#frag_pkts_tx DataThunderOverlayTunnelVtepStats#frag_pkts_tx}
  */
  readonly fragPktsTx?: number;
  /**
  * Invalid Lif pkts in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#invalid_lif_rx DataThunderOverlayTunnelVtepStats#invalid_lif_rx}
  */
  readonly invalidLifRx?: number;
  /**
  * Invalid Lif pkts out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#invalid_lif_tx DataThunderOverlayTunnelVtepStats#invalid_lif_tx}
  */
  readonly invalidLifTx?: number;
  /**
  * Too large packets in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#large_pkts_rx DataThunderOverlayTunnelVtepStats#large_pkts_rx}
  */
  readonly largePktsRx?: number;
  /**
  * Lif uninitialized packets in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#lif_un_init_rx DataThunderOverlayTunnelVtepStats#lif_un_init_rx}
  */
  readonly lifUnInitRx?: number;
  /**
  * Total multicast packets in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#mcast_pkt_rx DataThunderOverlayTunnelVtepStats#mcast_pkt_rx}
  */
  readonly mcastPktRx?: number;
  /**
  * Multicast packets out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#mcast_pkt_tx DataThunderOverlayTunnelVtepStats#mcast_pkt_tx}
  */
  readonly mcastPktTx?: number;
  /**
  * Packets out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#pkts_out DataThunderOverlayTunnelVtepStats#pkts_out}
  */
  readonly pktsOut?: number;
  /**
  * Reassembled packets in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#reassembled_pkts_rx DataThunderOverlayTunnelVtepStats#reassembled_pkts_rx}
  */
  readonly reassembledPktsRx?: number;
  /**
  * Requeued packets in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#requeue_pkts_in DataThunderOverlayTunnelVtepStats#requeue_pkts_in}
  */
  readonly requeuePktsIn?: number;
  /**
  * Total packet bytes in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#total_bytes_rx DataThunderOverlayTunnelVtepStats#total_bytes_rx}
  */
  readonly totalBytesRx?: number;
  /**
  * Packet bytes out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#total_bytes_tx DataThunderOverlayTunnelVtepStats#total_bytes_tx}
  */
  readonly totalBytesTx?: number;
  /**
  * Total packets out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#total_pkts_rx DataThunderOverlayTunnelVtepStats#total_pkts_rx}
  */
  readonly totalPktsRx?: number;
  /**
  * Unhandled packets in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#unhandled_pkt_rx DataThunderOverlayTunnelVtepStats#unhandled_pkt_rx}
  */
  readonly unhandledPktRx?: number;
  /**
  * Unhandled packets out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#unhandled_pkt_tx DataThunderOverlayTunnelVtepStats#unhandled_pkt_tx}
  */
  readonly unhandledPktTx?: number;
  /**
  * Total unicast packets in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#unicast_pkt_rx DataThunderOverlayTunnelVtepStats#unicast_pkt_rx}
  */
  readonly unicastPktRx?: number;
  /**
  * Unicast packets out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#unicast_pkt_tx DataThunderOverlayTunnelVtepStats#unicast_pkt_tx}
  */
  readonly unicastPktTx?: number;
  /**
  * Encap miss rx pkts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#unknown_encap_rx_pkt DataThunderOverlayTunnelVtepStats#unknown_encap_rx_pkt}
  */
  readonly unknownEncapRxPkt?: number;
  /**
  * Encap miss tx pkts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#unknown_encap_tx_pkt DataThunderOverlayTunnelVtepStats#unknown_encap_tx_pkt}
  */
  readonly unknownEncapTxPkt?: number;
  /**
  * Vtep Unkown rx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#unknown_vtep_rx DataThunderOverlayTunnelVtepStats#unknown_vtep_rx}
  */
  readonly unknownVtepRx?: number;
  /**
  * Vtep unknown tx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#unknown_vtep_tx DataThunderOverlayTunnelVtepStats#unknown_vtep_tx}
  */
  readonly unknownVtepTx?: number;
  /**
  * Host learn error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#vtep_host_learn_error DataThunderOverlayTunnelVtepStats#vtep_host_learn_error}
  */
  readonly vtepHostLearnError?: number;
  /**
  * Hosts learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#vtep_host_learned DataThunderOverlayTunnelVtepStats#vtep_host_learned}
  */
  readonly vtepHostLearned?: number;
}

export function dataThunderOverlayTunnelVtepStatsStatsToTerraform(struct?: DataThunderOverlayTunnelVtepStatsStatsOutputReference | DataThunderOverlayTunnelVtepStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arp_req_sent: cdktf.numberToTerraform(struct!.arpReqSent),
    bad_chksum_pks_rx: cdktf.numberToTerraform(struct!.badChksumPksRx),
    bad_inner_ipv4_len_rx: cdktf.numberToTerraform(struct!.badInnerIpv4LenRx),
    bad_inner_ipv6_len_rx: cdktf.numberToTerraform(struct!.badInnerIpv6LenRx),
    bcast_pkt_rx: cdktf.numberToTerraform(struct!.bcastPktRx),
    bcast_pkt_tx: cdktf.numberToTerraform(struct!.bcastPktTx),
    cfg_err_count: cdktf.numberToTerraform(struct!.cfgErrCount),
    dot1q_pkts_rx: cdktf.numberToTerraform(struct!.dot1QPktsRx),
    dropped_pkt_rx: cdktf.numberToTerraform(struct!.droppedPktRx),
    dropped_pkts_tx: cdktf.numberToTerraform(struct!.droppedPktsTx),
    encap_miss_pkts_rx: cdktf.numberToTerraform(struct!.encapMissPktsRx),
    encap_unresolved_count: cdktf.numberToTerraform(struct!.encapUnresolvedCount),
    flooded_pkt_count: cdktf.numberToTerraform(struct!.floodedPktCount),
    frag_drop_pkts_tx: cdktf.numberToTerraform(struct!.fragDropPktsTx),
    frag_pkts_tx: cdktf.numberToTerraform(struct!.fragPktsTx),
    invalid_lif_rx: cdktf.numberToTerraform(struct!.invalidLifRx),
    invalid_lif_tx: cdktf.numberToTerraform(struct!.invalidLifTx),
    large_pkts_rx: cdktf.numberToTerraform(struct!.largePktsRx),
    lif_un_init_rx: cdktf.numberToTerraform(struct!.lifUnInitRx),
    mcast_pkt_rx: cdktf.numberToTerraform(struct!.mcastPktRx),
    mcast_pkt_tx: cdktf.numberToTerraform(struct!.mcastPktTx),
    pkts_out: cdktf.numberToTerraform(struct!.pktsOut),
    reassembled_pkts_rx: cdktf.numberToTerraform(struct!.reassembledPktsRx),
    requeue_pkts_in: cdktf.numberToTerraform(struct!.requeuePktsIn),
    total_bytes_rx: cdktf.numberToTerraform(struct!.totalBytesRx),
    total_bytes_tx: cdktf.numberToTerraform(struct!.totalBytesTx),
    total_pkts_rx: cdktf.numberToTerraform(struct!.totalPktsRx),
    unhandled_pkt_rx: cdktf.numberToTerraform(struct!.unhandledPktRx),
    unhandled_pkt_tx: cdktf.numberToTerraform(struct!.unhandledPktTx),
    unicast_pkt_rx: cdktf.numberToTerraform(struct!.unicastPktRx),
    unicast_pkt_tx: cdktf.numberToTerraform(struct!.unicastPktTx),
    unknown_encap_rx_pkt: cdktf.numberToTerraform(struct!.unknownEncapRxPkt),
    unknown_encap_tx_pkt: cdktf.numberToTerraform(struct!.unknownEncapTxPkt),
    unknown_vtep_rx: cdktf.numberToTerraform(struct!.unknownVtepRx),
    unknown_vtep_tx: cdktf.numberToTerraform(struct!.unknownVtepTx),
    vtep_host_learn_error: cdktf.numberToTerraform(struct!.vtepHostLearnError),
    vtep_host_learned: cdktf.numberToTerraform(struct!.vtepHostLearned),
  }
}


export function dataThunderOverlayTunnelVtepStatsStatsToHclTerraform(struct?: DataThunderOverlayTunnelVtepStatsStatsOutputReference | DataThunderOverlayTunnelVtepStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arp_req_sent: {
      value: cdktf.numberToHclTerraform(struct!.arpReqSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_chksum_pks_rx: {
      value: cdktf.numberToHclTerraform(struct!.badChksumPksRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_inner_ipv4_len_rx: {
      value: cdktf.numberToHclTerraform(struct!.badInnerIpv4LenRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_inner_ipv6_len_rx: {
      value: cdktf.numberToHclTerraform(struct!.badInnerIpv6LenRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bcast_pkt_rx: {
      value: cdktf.numberToHclTerraform(struct!.bcastPktRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bcast_pkt_tx: {
      value: cdktf.numberToHclTerraform(struct!.bcastPktTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cfg_err_count: {
      value: cdktf.numberToHclTerraform(struct!.cfgErrCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dot1q_pkts_rx: {
      value: cdktf.numberToHclTerraform(struct!.dot1QPktsRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dropped_pkt_rx: {
      value: cdktf.numberToHclTerraform(struct!.droppedPktRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dropped_pkts_tx: {
      value: cdktf.numberToHclTerraform(struct!.droppedPktsTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    encap_miss_pkts_rx: {
      value: cdktf.numberToHclTerraform(struct!.encapMissPktsRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    encap_unresolved_count: {
      value: cdktf.numberToHclTerraform(struct!.encapUnresolvedCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flooded_pkt_count: {
      value: cdktf.numberToHclTerraform(struct!.floodedPktCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_drop_pkts_tx: {
      value: cdktf.numberToHclTerraform(struct!.fragDropPktsTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frag_pkts_tx: {
      value: cdktf.numberToHclTerraform(struct!.fragPktsTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_lif_rx: {
      value: cdktf.numberToHclTerraform(struct!.invalidLifRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_lif_tx: {
      value: cdktf.numberToHclTerraform(struct!.invalidLifTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    large_pkts_rx: {
      value: cdktf.numberToHclTerraform(struct!.largePktsRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lif_un_init_rx: {
      value: cdktf.numberToHclTerraform(struct!.lifUnInitRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mcast_pkt_rx: {
      value: cdktf.numberToHclTerraform(struct!.mcastPktRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mcast_pkt_tx: {
      value: cdktf.numberToHclTerraform(struct!.mcastPktTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkts_out: {
      value: cdktf.numberToHclTerraform(struct!.pktsOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reassembled_pkts_rx: {
      value: cdktf.numberToHclTerraform(struct!.reassembledPktsRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    requeue_pkts_in: {
      value: cdktf.numberToHclTerraform(struct!.requeuePktsIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_bytes_rx: {
      value: cdktf.numberToHclTerraform(struct!.totalBytesRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_bytes_tx: {
      value: cdktf.numberToHclTerraform(struct!.totalBytesTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_pkts_rx: {
      value: cdktf.numberToHclTerraform(struct!.totalPktsRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unhandled_pkt_rx: {
      value: cdktf.numberToHclTerraform(struct!.unhandledPktRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unhandled_pkt_tx: {
      value: cdktf.numberToHclTerraform(struct!.unhandledPktTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unicast_pkt_rx: {
      value: cdktf.numberToHclTerraform(struct!.unicastPktRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unicast_pkt_tx: {
      value: cdktf.numberToHclTerraform(struct!.unicastPktTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_encap_rx_pkt: {
      value: cdktf.numberToHclTerraform(struct!.unknownEncapRxPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_encap_tx_pkt: {
      value: cdktf.numberToHclTerraform(struct!.unknownEncapTxPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_vtep_rx: {
      value: cdktf.numberToHclTerraform(struct!.unknownVtepRx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_vtep_tx: {
      value: cdktf.numberToHclTerraform(struct!.unknownVtepTx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vtep_host_learn_error: {
      value: cdktf.numberToHclTerraform(struct!.vtepHostLearnError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vtep_host_learned: {
      value: cdktf.numberToHclTerraform(struct!.vtepHostLearned),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderOverlayTunnelVtepStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderOverlayTunnelVtepStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._arpReqSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.arpReqSent = this._arpReqSent;
    }
    if (this._badChksumPksRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.badChksumPksRx = this._badChksumPksRx;
    }
    if (this._badInnerIpv4LenRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.badInnerIpv4LenRx = this._badInnerIpv4LenRx;
    }
    if (this._badInnerIpv6LenRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.badInnerIpv6LenRx = this._badInnerIpv6LenRx;
    }
    if (this._bcastPktRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.bcastPktRx = this._bcastPktRx;
    }
    if (this._bcastPktTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.bcastPktTx = this._bcastPktTx;
    }
    if (this._cfgErrCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfgErrCount = this._cfgErrCount;
    }
    if (this._dot1QPktsRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.dot1QPktsRx = this._dot1QPktsRx;
    }
    if (this._droppedPktRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.droppedPktRx = this._droppedPktRx;
    }
    if (this._droppedPktsTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.droppedPktsTx = this._droppedPktsTx;
    }
    if (this._encapMissPktsRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapMissPktsRx = this._encapMissPktsRx;
    }
    if (this._encapUnresolvedCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapUnresolvedCount = this._encapUnresolvedCount;
    }
    if (this._floodedPktCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.floodedPktCount = this._floodedPktCount;
    }
    if (this._fragDropPktsTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragDropPktsTx = this._fragDropPktsTx;
    }
    if (this._fragPktsTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragPktsTx = this._fragPktsTx;
    }
    if (this._invalidLifRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidLifRx = this._invalidLifRx;
    }
    if (this._invalidLifTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidLifTx = this._invalidLifTx;
    }
    if (this._largePktsRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.largePktsRx = this._largePktsRx;
    }
    if (this._lifUnInitRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.lifUnInitRx = this._lifUnInitRx;
    }
    if (this._mcastPktRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcastPktRx = this._mcastPktRx;
    }
    if (this._mcastPktTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.mcastPktTx = this._mcastPktTx;
    }
    if (this._pktsOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktsOut = this._pktsOut;
    }
    if (this._reassembledPktsRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.reassembledPktsRx = this._reassembledPktsRx;
    }
    if (this._requeuePktsIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.requeuePktsIn = this._requeuePktsIn;
    }
    if (this._totalBytesRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalBytesRx = this._totalBytesRx;
    }
    if (this._totalBytesTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalBytesTx = this._totalBytesTx;
    }
    if (this._totalPktsRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalPktsRx = this._totalPktsRx;
    }
    if (this._unhandledPktRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhandledPktRx = this._unhandledPktRx;
    }
    if (this._unhandledPktTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.unhandledPktTx = this._unhandledPktTx;
    }
    if (this._unicastPktRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.unicastPktRx = this._unicastPktRx;
    }
    if (this._unicastPktTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.unicastPktTx = this._unicastPktTx;
    }
    if (this._unknownEncapRxPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownEncapRxPkt = this._unknownEncapRxPkt;
    }
    if (this._unknownEncapTxPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownEncapTxPkt = this._unknownEncapTxPkt;
    }
    if (this._unknownVtepRx !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownVtepRx = this._unknownVtepRx;
    }
    if (this._unknownVtepTx !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownVtepTx = this._unknownVtepTx;
    }
    if (this._vtepHostLearnError !== undefined) {
      hasAnyValues = true;
      internalValueResult.vtepHostLearnError = this._vtepHostLearnError;
    }
    if (this._vtepHostLearned !== undefined) {
      hasAnyValues = true;
      internalValueResult.vtepHostLearned = this._vtepHostLearned;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderOverlayTunnelVtepStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._arpReqSent = undefined;
      this._badChksumPksRx = undefined;
      this._badInnerIpv4LenRx = undefined;
      this._badInnerIpv6LenRx = undefined;
      this._bcastPktRx = undefined;
      this._bcastPktTx = undefined;
      this._cfgErrCount = undefined;
      this._dot1QPktsRx = undefined;
      this._droppedPktRx = undefined;
      this._droppedPktsTx = undefined;
      this._encapMissPktsRx = undefined;
      this._encapUnresolvedCount = undefined;
      this._floodedPktCount = undefined;
      this._fragDropPktsTx = undefined;
      this._fragPktsTx = undefined;
      this._invalidLifRx = undefined;
      this._invalidLifTx = undefined;
      this._largePktsRx = undefined;
      this._lifUnInitRx = undefined;
      this._mcastPktRx = undefined;
      this._mcastPktTx = undefined;
      this._pktsOut = undefined;
      this._reassembledPktsRx = undefined;
      this._requeuePktsIn = undefined;
      this._totalBytesRx = undefined;
      this._totalBytesTx = undefined;
      this._totalPktsRx = undefined;
      this._unhandledPktRx = undefined;
      this._unhandledPktTx = undefined;
      this._unicastPktRx = undefined;
      this._unicastPktTx = undefined;
      this._unknownEncapRxPkt = undefined;
      this._unknownEncapTxPkt = undefined;
      this._unknownVtepRx = undefined;
      this._unknownVtepTx = undefined;
      this._vtepHostLearnError = undefined;
      this._vtepHostLearned = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._arpReqSent = value.arpReqSent;
      this._badChksumPksRx = value.badChksumPksRx;
      this._badInnerIpv4LenRx = value.badInnerIpv4LenRx;
      this._badInnerIpv6LenRx = value.badInnerIpv6LenRx;
      this._bcastPktRx = value.bcastPktRx;
      this._bcastPktTx = value.bcastPktTx;
      this._cfgErrCount = value.cfgErrCount;
      this._dot1QPktsRx = value.dot1QPktsRx;
      this._droppedPktRx = value.droppedPktRx;
      this._droppedPktsTx = value.droppedPktsTx;
      this._encapMissPktsRx = value.encapMissPktsRx;
      this._encapUnresolvedCount = value.encapUnresolvedCount;
      this._floodedPktCount = value.floodedPktCount;
      this._fragDropPktsTx = value.fragDropPktsTx;
      this._fragPktsTx = value.fragPktsTx;
      this._invalidLifRx = value.invalidLifRx;
      this._invalidLifTx = value.invalidLifTx;
      this._largePktsRx = value.largePktsRx;
      this._lifUnInitRx = value.lifUnInitRx;
      this._mcastPktRx = value.mcastPktRx;
      this._mcastPktTx = value.mcastPktTx;
      this._pktsOut = value.pktsOut;
      this._reassembledPktsRx = value.reassembledPktsRx;
      this._requeuePktsIn = value.requeuePktsIn;
      this._totalBytesRx = value.totalBytesRx;
      this._totalBytesTx = value.totalBytesTx;
      this._totalPktsRx = value.totalPktsRx;
      this._unhandledPktRx = value.unhandledPktRx;
      this._unhandledPktTx = value.unhandledPktTx;
      this._unicastPktRx = value.unicastPktRx;
      this._unicastPktTx = value.unicastPktTx;
      this._unknownEncapRxPkt = value.unknownEncapRxPkt;
      this._unknownEncapTxPkt = value.unknownEncapTxPkt;
      this._unknownVtepRx = value.unknownVtepRx;
      this._unknownVtepTx = value.unknownVtepTx;
      this._vtepHostLearnError = value.vtepHostLearnError;
      this._vtepHostLearned = value.vtepHostLearned;
    }
  }

  // arp_req_sent - computed: false, optional: true, required: false
  private _arpReqSent?: number; 
  public get arpReqSent() {
    return this.getNumberAttribute('arp_req_sent');
  }
  public set arpReqSent(value: number) {
    this._arpReqSent = value;
  }
  public resetArpReqSent() {
    this._arpReqSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpReqSentInput() {
    return this._arpReqSent;
  }

  // bad_chksum_pks_rx - computed: false, optional: true, required: false
  private _badChksumPksRx?: number; 
  public get badChksumPksRx() {
    return this.getNumberAttribute('bad_chksum_pks_rx');
  }
  public set badChksumPksRx(value: number) {
    this._badChksumPksRx = value;
  }
  public resetBadChksumPksRx() {
    this._badChksumPksRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badChksumPksRxInput() {
    return this._badChksumPksRx;
  }

  // bad_inner_ipv4_len_rx - computed: false, optional: true, required: false
  private _badInnerIpv4LenRx?: number; 
  public get badInnerIpv4LenRx() {
    return this.getNumberAttribute('bad_inner_ipv4_len_rx');
  }
  public set badInnerIpv4LenRx(value: number) {
    this._badInnerIpv4LenRx = value;
  }
  public resetBadInnerIpv4LenRx() {
    this._badInnerIpv4LenRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badInnerIpv4LenRxInput() {
    return this._badInnerIpv4LenRx;
  }

  // bad_inner_ipv6_len_rx - computed: false, optional: true, required: false
  private _badInnerIpv6LenRx?: number; 
  public get badInnerIpv6LenRx() {
    return this.getNumberAttribute('bad_inner_ipv6_len_rx');
  }
  public set badInnerIpv6LenRx(value: number) {
    this._badInnerIpv6LenRx = value;
  }
  public resetBadInnerIpv6LenRx() {
    this._badInnerIpv6LenRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badInnerIpv6LenRxInput() {
    return this._badInnerIpv6LenRx;
  }

  // bcast_pkt_rx - computed: false, optional: true, required: false
  private _bcastPktRx?: number; 
  public get bcastPktRx() {
    return this.getNumberAttribute('bcast_pkt_rx');
  }
  public set bcastPktRx(value: number) {
    this._bcastPktRx = value;
  }
  public resetBcastPktRx() {
    this._bcastPktRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bcastPktRxInput() {
    return this._bcastPktRx;
  }

  // bcast_pkt_tx - computed: false, optional: true, required: false
  private _bcastPktTx?: number; 
  public get bcastPktTx() {
    return this.getNumberAttribute('bcast_pkt_tx');
  }
  public set bcastPktTx(value: number) {
    this._bcastPktTx = value;
  }
  public resetBcastPktTx() {
    this._bcastPktTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bcastPktTxInput() {
    return this._bcastPktTx;
  }

  // cfg_err_count - computed: false, optional: true, required: false
  private _cfgErrCount?: number; 
  public get cfgErrCount() {
    return this.getNumberAttribute('cfg_err_count');
  }
  public set cfgErrCount(value: number) {
    this._cfgErrCount = value;
  }
  public resetCfgErrCount() {
    this._cfgErrCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfgErrCountInput() {
    return this._cfgErrCount;
  }

  // dot1q_pkts_rx - computed: false, optional: true, required: false
  private _dot1QPktsRx?: number; 
  public get dot1QPktsRx() {
    return this.getNumberAttribute('dot1q_pkts_rx');
  }
  public set dot1QPktsRx(value: number) {
    this._dot1QPktsRx = value;
  }
  public resetDot1QPktsRx() {
    this._dot1QPktsRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dot1QPktsRxInput() {
    return this._dot1QPktsRx;
  }

  // dropped_pkt_rx - computed: false, optional: true, required: false
  private _droppedPktRx?: number; 
  public get droppedPktRx() {
    return this.getNumberAttribute('dropped_pkt_rx');
  }
  public set droppedPktRx(value: number) {
    this._droppedPktRx = value;
  }
  public resetDroppedPktRx() {
    this._droppedPktRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get droppedPktRxInput() {
    return this._droppedPktRx;
  }

  // dropped_pkts_tx - computed: false, optional: true, required: false
  private _droppedPktsTx?: number; 
  public get droppedPktsTx() {
    return this.getNumberAttribute('dropped_pkts_tx');
  }
  public set droppedPktsTx(value: number) {
    this._droppedPktsTx = value;
  }
  public resetDroppedPktsTx() {
    this._droppedPktsTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get droppedPktsTxInput() {
    return this._droppedPktsTx;
  }

  // encap_miss_pkts_rx - computed: false, optional: true, required: false
  private _encapMissPktsRx?: number; 
  public get encapMissPktsRx() {
    return this.getNumberAttribute('encap_miss_pkts_rx');
  }
  public set encapMissPktsRx(value: number) {
    this._encapMissPktsRx = value;
  }
  public resetEncapMissPktsRx() {
    this._encapMissPktsRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapMissPktsRxInput() {
    return this._encapMissPktsRx;
  }

  // encap_unresolved_count - computed: false, optional: true, required: false
  private _encapUnresolvedCount?: number; 
  public get encapUnresolvedCount() {
    return this.getNumberAttribute('encap_unresolved_count');
  }
  public set encapUnresolvedCount(value: number) {
    this._encapUnresolvedCount = value;
  }
  public resetEncapUnresolvedCount() {
    this._encapUnresolvedCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapUnresolvedCountInput() {
    return this._encapUnresolvedCount;
  }

  // flooded_pkt_count - computed: false, optional: true, required: false
  private _floodedPktCount?: number; 
  public get floodedPktCount() {
    return this.getNumberAttribute('flooded_pkt_count');
  }
  public set floodedPktCount(value: number) {
    this._floodedPktCount = value;
  }
  public resetFloodedPktCount() {
    this._floodedPktCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floodedPktCountInput() {
    return this._floodedPktCount;
  }

  // frag_drop_pkts_tx - computed: false, optional: true, required: false
  private _fragDropPktsTx?: number; 
  public get fragDropPktsTx() {
    return this.getNumberAttribute('frag_drop_pkts_tx');
  }
  public set fragDropPktsTx(value: number) {
    this._fragDropPktsTx = value;
  }
  public resetFragDropPktsTx() {
    this._fragDropPktsTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragDropPktsTxInput() {
    return this._fragDropPktsTx;
  }

  // frag_pkts_tx - computed: false, optional: true, required: false
  private _fragPktsTx?: number; 
  public get fragPktsTx() {
    return this.getNumberAttribute('frag_pkts_tx');
  }
  public set fragPktsTx(value: number) {
    this._fragPktsTx = value;
  }
  public resetFragPktsTx() {
    this._fragPktsTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragPktsTxInput() {
    return this._fragPktsTx;
  }

  // invalid_lif_rx - computed: false, optional: true, required: false
  private _invalidLifRx?: number; 
  public get invalidLifRx() {
    return this.getNumberAttribute('invalid_lif_rx');
  }
  public set invalidLifRx(value: number) {
    this._invalidLifRx = value;
  }
  public resetInvalidLifRx() {
    this._invalidLifRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidLifRxInput() {
    return this._invalidLifRx;
  }

  // invalid_lif_tx - computed: false, optional: true, required: false
  private _invalidLifTx?: number; 
  public get invalidLifTx() {
    return this.getNumberAttribute('invalid_lif_tx');
  }
  public set invalidLifTx(value: number) {
    this._invalidLifTx = value;
  }
  public resetInvalidLifTx() {
    this._invalidLifTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidLifTxInput() {
    return this._invalidLifTx;
  }

  // large_pkts_rx - computed: false, optional: true, required: false
  private _largePktsRx?: number; 
  public get largePktsRx() {
    return this.getNumberAttribute('large_pkts_rx');
  }
  public set largePktsRx(value: number) {
    this._largePktsRx = value;
  }
  public resetLargePktsRx() {
    this._largePktsRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largePktsRxInput() {
    return this._largePktsRx;
  }

  // lif_un_init_rx - computed: false, optional: true, required: false
  private _lifUnInitRx?: number; 
  public get lifUnInitRx() {
    return this.getNumberAttribute('lif_un_init_rx');
  }
  public set lifUnInitRx(value: number) {
    this._lifUnInitRx = value;
  }
  public resetLifUnInitRx() {
    this._lifUnInitRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifUnInitRxInput() {
    return this._lifUnInitRx;
  }

  // mcast_pkt_rx - computed: false, optional: true, required: false
  private _mcastPktRx?: number; 
  public get mcastPktRx() {
    return this.getNumberAttribute('mcast_pkt_rx');
  }
  public set mcastPktRx(value: number) {
    this._mcastPktRx = value;
  }
  public resetMcastPktRx() {
    this._mcastPktRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcastPktRxInput() {
    return this._mcastPktRx;
  }

  // mcast_pkt_tx - computed: false, optional: true, required: false
  private _mcastPktTx?: number; 
  public get mcastPktTx() {
    return this.getNumberAttribute('mcast_pkt_tx');
  }
  public set mcastPktTx(value: number) {
    this._mcastPktTx = value;
  }
  public resetMcastPktTx() {
    this._mcastPktTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mcastPktTxInput() {
    return this._mcastPktTx;
  }

  // pkts_out - computed: false, optional: true, required: false
  private _pktsOut?: number; 
  public get pktsOut() {
    return this.getNumberAttribute('pkts_out');
  }
  public set pktsOut(value: number) {
    this._pktsOut = value;
  }
  public resetPktsOut() {
    this._pktsOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktsOutInput() {
    return this._pktsOut;
  }

  // reassembled_pkts_rx - computed: false, optional: true, required: false
  private _reassembledPktsRx?: number; 
  public get reassembledPktsRx() {
    return this.getNumberAttribute('reassembled_pkts_rx');
  }
  public set reassembledPktsRx(value: number) {
    this._reassembledPktsRx = value;
  }
  public resetReassembledPktsRx() {
    this._reassembledPktsRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reassembledPktsRxInput() {
    return this._reassembledPktsRx;
  }

  // requeue_pkts_in - computed: false, optional: true, required: false
  private _requeuePktsIn?: number; 
  public get requeuePktsIn() {
    return this.getNumberAttribute('requeue_pkts_in');
  }
  public set requeuePktsIn(value: number) {
    this._requeuePktsIn = value;
  }
  public resetRequeuePktsIn() {
    this._requeuePktsIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requeuePktsInInput() {
    return this._requeuePktsIn;
  }

  // total_bytes_rx - computed: false, optional: true, required: false
  private _totalBytesRx?: number; 
  public get totalBytesRx() {
    return this.getNumberAttribute('total_bytes_rx');
  }
  public set totalBytesRx(value: number) {
    this._totalBytesRx = value;
  }
  public resetTotalBytesRx() {
    this._totalBytesRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalBytesRxInput() {
    return this._totalBytesRx;
  }

  // total_bytes_tx - computed: false, optional: true, required: false
  private _totalBytesTx?: number; 
  public get totalBytesTx() {
    return this.getNumberAttribute('total_bytes_tx');
  }
  public set totalBytesTx(value: number) {
    this._totalBytesTx = value;
  }
  public resetTotalBytesTx() {
    this._totalBytesTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalBytesTxInput() {
    return this._totalBytesTx;
  }

  // total_pkts_rx - computed: false, optional: true, required: false
  private _totalPktsRx?: number; 
  public get totalPktsRx() {
    return this.getNumberAttribute('total_pkts_rx');
  }
  public set totalPktsRx(value: number) {
    this._totalPktsRx = value;
  }
  public resetTotalPktsRx() {
    this._totalPktsRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalPktsRxInput() {
    return this._totalPktsRx;
  }

  // unhandled_pkt_rx - computed: false, optional: true, required: false
  private _unhandledPktRx?: number; 
  public get unhandledPktRx() {
    return this.getNumberAttribute('unhandled_pkt_rx');
  }
  public set unhandledPktRx(value: number) {
    this._unhandledPktRx = value;
  }
  public resetUnhandledPktRx() {
    this._unhandledPktRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhandledPktRxInput() {
    return this._unhandledPktRx;
  }

  // unhandled_pkt_tx - computed: false, optional: true, required: false
  private _unhandledPktTx?: number; 
  public get unhandledPktTx() {
    return this.getNumberAttribute('unhandled_pkt_tx');
  }
  public set unhandledPktTx(value: number) {
    this._unhandledPktTx = value;
  }
  public resetUnhandledPktTx() {
    this._unhandledPktTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unhandledPktTxInput() {
    return this._unhandledPktTx;
  }

  // unicast_pkt_rx - computed: false, optional: true, required: false
  private _unicastPktRx?: number; 
  public get unicastPktRx() {
    return this.getNumberAttribute('unicast_pkt_rx');
  }
  public set unicastPktRx(value: number) {
    this._unicastPktRx = value;
  }
  public resetUnicastPktRx() {
    this._unicastPktRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastPktRxInput() {
    return this._unicastPktRx;
  }

  // unicast_pkt_tx - computed: false, optional: true, required: false
  private _unicastPktTx?: number; 
  public get unicastPktTx() {
    return this.getNumberAttribute('unicast_pkt_tx');
  }
  public set unicastPktTx(value: number) {
    this._unicastPktTx = value;
  }
  public resetUnicastPktTx() {
    this._unicastPktTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastPktTxInput() {
    return this._unicastPktTx;
  }

  // unknown_encap_rx_pkt - computed: false, optional: true, required: false
  private _unknownEncapRxPkt?: number; 
  public get unknownEncapRxPkt() {
    return this.getNumberAttribute('unknown_encap_rx_pkt');
  }
  public set unknownEncapRxPkt(value: number) {
    this._unknownEncapRxPkt = value;
  }
  public resetUnknownEncapRxPkt() {
    this._unknownEncapRxPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownEncapRxPktInput() {
    return this._unknownEncapRxPkt;
  }

  // unknown_encap_tx_pkt - computed: false, optional: true, required: false
  private _unknownEncapTxPkt?: number; 
  public get unknownEncapTxPkt() {
    return this.getNumberAttribute('unknown_encap_tx_pkt');
  }
  public set unknownEncapTxPkt(value: number) {
    this._unknownEncapTxPkt = value;
  }
  public resetUnknownEncapTxPkt() {
    this._unknownEncapTxPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownEncapTxPktInput() {
    return this._unknownEncapTxPkt;
  }

  // unknown_vtep_rx - computed: false, optional: true, required: false
  private _unknownVtepRx?: number; 
  public get unknownVtepRx() {
    return this.getNumberAttribute('unknown_vtep_rx');
  }
  public set unknownVtepRx(value: number) {
    this._unknownVtepRx = value;
  }
  public resetUnknownVtepRx() {
    this._unknownVtepRx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownVtepRxInput() {
    return this._unknownVtepRx;
  }

  // unknown_vtep_tx - computed: false, optional: true, required: false
  private _unknownVtepTx?: number; 
  public get unknownVtepTx() {
    return this.getNumberAttribute('unknown_vtep_tx');
  }
  public set unknownVtepTx(value: number) {
    this._unknownVtepTx = value;
  }
  public resetUnknownVtepTx() {
    this._unknownVtepTx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownVtepTxInput() {
    return this._unknownVtepTx;
  }

  // vtep_host_learn_error - computed: false, optional: true, required: false
  private _vtepHostLearnError?: number; 
  public get vtepHostLearnError() {
    return this.getNumberAttribute('vtep_host_learn_error');
  }
  public set vtepHostLearnError(value: number) {
    this._vtepHostLearnError = value;
  }
  public resetVtepHostLearnError() {
    this._vtepHostLearnError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtepHostLearnErrorInput() {
    return this._vtepHostLearnError;
  }

  // vtep_host_learned - computed: false, optional: true, required: false
  private _vtepHostLearned?: number; 
  public get vtepHostLearned() {
    return this.getNumberAttribute('vtep_host_learned');
  }
  public set vtepHostLearned(value: number) {
    this._vtepHostLearned = value;
  }
  public resetVtepHostLearned() {
    this._vtepHostLearned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vtepHostLearnedInput() {
    return this._vtepHostLearned;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats thunder_overlay_tunnel_vtep_stats}
*/
export class DataThunderOverlayTunnelVtepStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_overlay_tunnel_vtep_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderOverlayTunnelVtepStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderOverlayTunnelVtepStats to import
  * @param importFromId The id of the existing DataThunderOverlayTunnelVtepStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderOverlayTunnelVtepStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_overlay_tunnel_vtep_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/overlay_tunnel_vtep_stats thunder_overlay_tunnel_vtep_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderOverlayTunnelVtepStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderOverlayTunnelVtepStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_overlay_tunnel_vtep_stats',
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
    this._id1 = config.id1;
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

  // id1 - computed: false, optional: false, required: true
  private _id1?: number; 
  public get id1() {
    return this.getNumberAttribute('id1');
  }
  public set id1(value: number) {
    this._id1 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get id1Input() {
    return this._id1;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderOverlayTunnelVtepStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderOverlayTunnelVtepStatsStats) {
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
      id1: cdktf.numberToTerraform(this._id1),
      stats: dataThunderOverlayTunnelVtepStatsStatsToTerraform(this._stats.internalValue),
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
      id1: {
        value: cdktf.numberToHclTerraform(this._id1),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stats: {
        value: dataThunderOverlayTunnelVtepStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderOverlayTunnelVtepStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
