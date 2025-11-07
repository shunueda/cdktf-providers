// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderFwGlobalStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#id DataThunderFwGlobalStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#stats DataThunderFwGlobalStats#stats}
  */
  readonly stats?: DataThunderFwGlobalStatsStats;
}
export interface DataThunderFwGlobalStatsStats {
  /**
  * Total Active Full-cone sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#active_fullcone_session DataThunderFwGlobalStats#active_fullcone_session}
  */
  readonly activeFullconeSession?: number;
  /**
  * Data Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#data_session_created DataThunderFwGlobalStats#data_session_created}
  */
  readonly dataSessionCreated?: number;
  /**
  * Data Session Created Local
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#data_session_created_local DataThunderFwGlobalStats#data_session_created_local}
  */
  readonly dataSessionCreatedLocal?: number;
  /**
  * Data Session Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#data_session_freed DataThunderFwGlobalStats#data_session_freed}
  */
  readonly dataSessionFreed?: number;
  /**
  * Data Session Freed Local
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#data_session_freed_local DataThunderFwGlobalStats#data_session_freed_local}
  */
  readonly dataSessionFreedLocal?: number;
  /**
  * Dynamic Blacklist - Packet Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#dyn_blist_pkt_drop DataThunderFwGlobalStats#dyn_blist_pkt_drop}
  */
  readonly dynBlistPktDrop?: number;
  /**
  * Dynamic Blacklist Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#dyn_blist_sess_created DataThunderFwGlobalStats#dyn_blist_sess_created}
  */
  readonly dynBlistSessCreated?: number;
  /**
  * Dynamic Blacklist Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#dyn_blist_sess_freed DataThunderFwGlobalStats#dyn_blist_sess_freed}
  */
  readonly dynBlistSessFreed?: number;
  /**
  * Full-Cone Creation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#fullcone_creation_failure DataThunderFwGlobalStats#fullcone_creation_failure}
  */
  readonly fullconeCreationFailure?: number;
  /**
  * Forward Egress Bytes ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#fwd_egress_bytes_icmp DataThunderFwGlobalStats#fwd_egress_bytes_icmp}
  */
  readonly fwdEgressBytesIcmp?: number;
  /**
  * Forward Egress Bytes OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#fwd_egress_bytes_others DataThunderFwGlobalStats#fwd_egress_bytes_others}
  */
  readonly fwdEgressBytesOthers?: number;
  /**
  * Forward Egress Bytes TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#fwd_egress_bytes_tcp DataThunderFwGlobalStats#fwd_egress_bytes_tcp}
  */
  readonly fwdEgressBytesTcp?: number;
  /**
  * Forward Egress Bytes UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#fwd_egress_bytes_udp DataThunderFwGlobalStats#fwd_egress_bytes_udp}
  */
  readonly fwdEgressBytesUdp?: number;
  /**
  * Forward Egress Packets ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#fwd_egress_packets_icmp DataThunderFwGlobalStats#fwd_egress_packets_icmp}
  */
  readonly fwdEgressPacketsIcmp?: number;
  /**
  * Forward Egress Packets OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#fwd_egress_packets_others DataThunderFwGlobalStats#fwd_egress_packets_others}
  */
  readonly fwdEgressPacketsOthers?: number;
  /**
  * Forward Egress Packets TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#fwd_egress_packets_tcp DataThunderFwGlobalStats#fwd_egress_packets_tcp}
  */
  readonly fwdEgressPacketsTcp?: number;
  /**
  * Forward Egress Packets UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#fwd_egress_packets_udp DataThunderFwGlobalStats#fwd_egress_packets_udp}
  */
  readonly fwdEgressPacketsUdp?: number;
  /**
  * Forward Egress Packet size between 0 and 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#fwd_egress_pkt_size_range1 DataThunderFwGlobalStats#fwd_egress_pkt_size_range1}
  */
  readonly fwdEgressPktSizeRange1?: number;
  /**
  * Forward Egress Packet size between 201 and 800
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#fwd_egress_pkt_size_range2 DataThunderFwGlobalStats#fwd_egress_pkt_size_range2}
  */
  readonly fwdEgressPktSizeRange2?: number;
  /**
  * Forward Egress Packet size between 801 and 1550
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#fwd_egress_pkt_size_range3 DataThunderFwGlobalStats#fwd_egress_pkt_size_range3}
  */
  readonly fwdEgressPktSizeRange3?: number;
  /**
  * Forward Egress Packet size between 1551 and 9000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#fwd_egress_pkt_size_range4 DataThunderFwGlobalStats#fwd_egress_pkt_size_range4}
  */
  readonly fwdEgressPktSizeRange4?: number;
  /**
  * Forward Ingress Bytes ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#fwd_ingress_bytes_icmp DataThunderFwGlobalStats#fwd_ingress_bytes_icmp}
  */
  readonly fwdIngressBytesIcmp?: number;
  /**
  * Forward Ingress Bytes OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#fwd_ingress_bytes_others DataThunderFwGlobalStats#fwd_ingress_bytes_others}
  */
  readonly fwdIngressBytesOthers?: number;
  /**
  * Forward Ingress Bytes TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#fwd_ingress_bytes_tcp DataThunderFwGlobalStats#fwd_ingress_bytes_tcp}
  */
  readonly fwdIngressBytesTcp?: number;
  /**
  * Forward Ingress Bytes UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#fwd_ingress_bytes_udp DataThunderFwGlobalStats#fwd_ingress_bytes_udp}
  */
  readonly fwdIngressBytesUdp?: number;
  /**
  * Forward Ingress Packets ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#fwd_ingress_packets_icmp DataThunderFwGlobalStats#fwd_ingress_packets_icmp}
  */
  readonly fwdIngressPacketsIcmp?: number;
  /**
  * Forward Ingress Packets OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#fwd_ingress_packets_others DataThunderFwGlobalStats#fwd_ingress_packets_others}
  */
  readonly fwdIngressPacketsOthers?: number;
  /**
  * Forward Ingress Packets TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#fwd_ingress_packets_tcp DataThunderFwGlobalStats#fwd_ingress_packets_tcp}
  */
  readonly fwdIngressPacketsTcp?: number;
  /**
  * Forward Ingress Packets UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#fwd_ingress_packets_udp DataThunderFwGlobalStats#fwd_ingress_packets_udp}
  */
  readonly fwdIngressPacketsUdp?: number;
  /**
  * Forward Ingress Packet size between 0 and 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#fwd_ingress_pkt_size_range1 DataThunderFwGlobalStats#fwd_ingress_pkt_size_range1}
  */
  readonly fwdIngressPktSizeRange1?: number;
  /**
  * Forward Ingress Packet size between 201 and 800
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#fwd_ingress_pkt_size_range2 DataThunderFwGlobalStats#fwd_ingress_pkt_size_range2}
  */
  readonly fwdIngressPktSizeRange2?: number;
  /**
  * Forward Ingress Packet size between 801 and 1550
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#fwd_ingress_pkt_size_range3 DataThunderFwGlobalStats#fwd_ingress_pkt_size_range3}
  */
  readonly fwdIngressPktSizeRange3?: number;
  /**
  * Forward Ingress Packet size between 1551 and 9000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#fwd_ingress_pkt_size_range4 DataThunderFwGlobalStats#fwd_ingress_pkt_size_range4}
  */
  readonly fwdIngressPktSizeRange4?: number;
  /**
  * Limit Entry Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#limit_entry_created DataThunderFwGlobalStats#limit_entry_created}
  */
  readonly limitEntryCreated?: number;
  /**
  * Limit Entry Marked Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#limit_entry_marked_deleted DataThunderFwGlobalStats#limit_entry_marked_deleted}
  */
  readonly limitEntryMarkedDeleted?: number;
  /**
  * Non-SYN pkt forward allowed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#non_syn_pkt_fwd_allowed DataThunderFwGlobalStats#non_syn_pkt_fwd_allowed}
  */
  readonly nonSynPktFwdAllowed?: number;
  /**
  * Reverse Egress Bytes ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#rev_egress_bytes_icmp DataThunderFwGlobalStats#rev_egress_bytes_icmp}
  */
  readonly revEgressBytesIcmp?: number;
  /**
  * Reverse Egress Bytes OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#rev_egress_bytes_others DataThunderFwGlobalStats#rev_egress_bytes_others}
  */
  readonly revEgressBytesOthers?: number;
  /**
  * Reverse Egress Bytes TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#rev_egress_bytes_tcp DataThunderFwGlobalStats#rev_egress_bytes_tcp}
  */
  readonly revEgressBytesTcp?: number;
  /**
  * Reverse Egress Bytes UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#rev_egress_bytes_udp DataThunderFwGlobalStats#rev_egress_bytes_udp}
  */
  readonly revEgressBytesUdp?: number;
  /**
  * Reverse Egress Packets ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#rev_egress_packets_icmp DataThunderFwGlobalStats#rev_egress_packets_icmp}
  */
  readonly revEgressPacketsIcmp?: number;
  /**
  * Reverse Egress Packets OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#rev_egress_packets_others DataThunderFwGlobalStats#rev_egress_packets_others}
  */
  readonly revEgressPacketsOthers?: number;
  /**
  * Reverse Egress Packets TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#rev_egress_packets_tcp DataThunderFwGlobalStats#rev_egress_packets_tcp}
  */
  readonly revEgressPacketsTcp?: number;
  /**
  * Reverse Egress Packets UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#rev_egress_packets_udp DataThunderFwGlobalStats#rev_egress_packets_udp}
  */
  readonly revEgressPacketsUdp?: number;
  /**
  * Reverse Egress Packet size between 0 and 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#rev_egress_pkt_size_range1 DataThunderFwGlobalStats#rev_egress_pkt_size_range1}
  */
  readonly revEgressPktSizeRange1?: number;
  /**
  * Reverse Egress Packet size between 201 and 800
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#rev_egress_pkt_size_range2 DataThunderFwGlobalStats#rev_egress_pkt_size_range2}
  */
  readonly revEgressPktSizeRange2?: number;
  /**
  * Reverse Egress Packet size between 801 and 1550
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#rev_egress_pkt_size_range3 DataThunderFwGlobalStats#rev_egress_pkt_size_range3}
  */
  readonly revEgressPktSizeRange3?: number;
  /**
  * Reverse Egress Packet size between 1551 and 9000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#rev_egress_pkt_size_range4 DataThunderFwGlobalStats#rev_egress_pkt_size_range4}
  */
  readonly revEgressPktSizeRange4?: number;
  /**
  * Reverse Ingress Bytes ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#rev_ingress_bytes_icmp DataThunderFwGlobalStats#rev_ingress_bytes_icmp}
  */
  readonly revIngressBytesIcmp?: number;
  /**
  * Reverse Ingress Bytes OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#rev_ingress_bytes_others DataThunderFwGlobalStats#rev_ingress_bytes_others}
  */
  readonly revIngressBytesOthers?: number;
  /**
  * Reverse Ingress Bytes TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#rev_ingress_bytes_tcp DataThunderFwGlobalStats#rev_ingress_bytes_tcp}
  */
  readonly revIngressBytesTcp?: number;
  /**
  * Reverse Ingress Bytes UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#rev_ingress_bytes_udp DataThunderFwGlobalStats#rev_ingress_bytes_udp}
  */
  readonly revIngressBytesUdp?: number;
  /**
  * Reverse Ingress Packets ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#rev_ingress_packets_icmp DataThunderFwGlobalStats#rev_ingress_packets_icmp}
  */
  readonly revIngressPacketsIcmp?: number;
  /**
  * Reverse Ingress Packets OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#rev_ingress_packets_others DataThunderFwGlobalStats#rev_ingress_packets_others}
  */
  readonly revIngressPacketsOthers?: number;
  /**
  * Reverse Ingress Packets TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#rev_ingress_packets_tcp DataThunderFwGlobalStats#rev_ingress_packets_tcp}
  */
  readonly revIngressPacketsTcp?: number;
  /**
  * Reverse Ingress Packets UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#rev_ingress_packets_udp DataThunderFwGlobalStats#rev_ingress_packets_udp}
  */
  readonly revIngressPacketsUdp?: number;
  /**
  * Reverse Ingress Packet size between 0 and 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#rev_ingress_pkt_size_range1 DataThunderFwGlobalStats#rev_ingress_pkt_size_range1}
  */
  readonly revIngressPktSizeRange1?: number;
  /**
  * Reverse Ingress Packet size between 201 and 800
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#rev_ingress_pkt_size_range2 DataThunderFwGlobalStats#rev_ingress_pkt_size_range2}
  */
  readonly revIngressPktSizeRange2?: number;
  /**
  * Reverse Ingress Packet size between 801 and 1550
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#rev_ingress_pkt_size_range3 DataThunderFwGlobalStats#rev_ingress_pkt_size_range3}
  */
  readonly revIngressPktSizeRange3?: number;
  /**
  * Reverse Ingress Packet size between 1551 and 9000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#rev_ingress_pkt_size_range4 DataThunderFwGlobalStats#rev_ingress_pkt_size_range4}
  */
  readonly revIngressPktSizeRange4?: number;
  /**
  * TCP Full-cone Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#tcp_fullcone_created DataThunderFwGlobalStats#tcp_fullcone_created}
  */
  readonly tcpFullconeCreated?: number;
  /**
  * TCP Full-cone Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#tcp_fullcone_freed DataThunderFwGlobalStats#tcp_fullcone_freed}
  */
  readonly tcpFullconeFreed?: number;
  /**
  * UDP Full-cone Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#udp_fullcone_created DataThunderFwGlobalStats#udp_fullcone_created}
  */
  readonly udpFullconeCreated?: number;
  /**
  * UDP Full-cone Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#udp_fullcone_freed DataThunderFwGlobalStats#udp_fullcone_freed}
  */
  readonly udpFullconeFreed?: number;
  /**
  * Undetermined rule detected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#undetermined_rule_counter DataThunderFwGlobalStats#undetermined_rule_counter}
  */
  readonly undeterminedRuleCounter?: number;
}

export function dataThunderFwGlobalStatsStatsToTerraform(struct?: DataThunderFwGlobalStatsStatsOutputReference | DataThunderFwGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_fullcone_session: cdktf.numberToTerraform(struct!.activeFullconeSession),
    data_session_created: cdktf.numberToTerraform(struct!.dataSessionCreated),
    data_session_created_local: cdktf.numberToTerraform(struct!.dataSessionCreatedLocal),
    data_session_freed: cdktf.numberToTerraform(struct!.dataSessionFreed),
    data_session_freed_local: cdktf.numberToTerraform(struct!.dataSessionFreedLocal),
    dyn_blist_pkt_drop: cdktf.numberToTerraform(struct!.dynBlistPktDrop),
    dyn_blist_sess_created: cdktf.numberToTerraform(struct!.dynBlistSessCreated),
    dyn_blist_sess_freed: cdktf.numberToTerraform(struct!.dynBlistSessFreed),
    fullcone_creation_failure: cdktf.numberToTerraform(struct!.fullconeCreationFailure),
    fwd_egress_bytes_icmp: cdktf.numberToTerraform(struct!.fwdEgressBytesIcmp),
    fwd_egress_bytes_others: cdktf.numberToTerraform(struct!.fwdEgressBytesOthers),
    fwd_egress_bytes_tcp: cdktf.numberToTerraform(struct!.fwdEgressBytesTcp),
    fwd_egress_bytes_udp: cdktf.numberToTerraform(struct!.fwdEgressBytesUdp),
    fwd_egress_packets_icmp: cdktf.numberToTerraform(struct!.fwdEgressPacketsIcmp),
    fwd_egress_packets_others: cdktf.numberToTerraform(struct!.fwdEgressPacketsOthers),
    fwd_egress_packets_tcp: cdktf.numberToTerraform(struct!.fwdEgressPacketsTcp),
    fwd_egress_packets_udp: cdktf.numberToTerraform(struct!.fwdEgressPacketsUdp),
    fwd_egress_pkt_size_range1: cdktf.numberToTerraform(struct!.fwdEgressPktSizeRange1),
    fwd_egress_pkt_size_range2: cdktf.numberToTerraform(struct!.fwdEgressPktSizeRange2),
    fwd_egress_pkt_size_range3: cdktf.numberToTerraform(struct!.fwdEgressPktSizeRange3),
    fwd_egress_pkt_size_range4: cdktf.numberToTerraform(struct!.fwdEgressPktSizeRange4),
    fwd_ingress_bytes_icmp: cdktf.numberToTerraform(struct!.fwdIngressBytesIcmp),
    fwd_ingress_bytes_others: cdktf.numberToTerraform(struct!.fwdIngressBytesOthers),
    fwd_ingress_bytes_tcp: cdktf.numberToTerraform(struct!.fwdIngressBytesTcp),
    fwd_ingress_bytes_udp: cdktf.numberToTerraform(struct!.fwdIngressBytesUdp),
    fwd_ingress_packets_icmp: cdktf.numberToTerraform(struct!.fwdIngressPacketsIcmp),
    fwd_ingress_packets_others: cdktf.numberToTerraform(struct!.fwdIngressPacketsOthers),
    fwd_ingress_packets_tcp: cdktf.numberToTerraform(struct!.fwdIngressPacketsTcp),
    fwd_ingress_packets_udp: cdktf.numberToTerraform(struct!.fwdIngressPacketsUdp),
    fwd_ingress_pkt_size_range1: cdktf.numberToTerraform(struct!.fwdIngressPktSizeRange1),
    fwd_ingress_pkt_size_range2: cdktf.numberToTerraform(struct!.fwdIngressPktSizeRange2),
    fwd_ingress_pkt_size_range3: cdktf.numberToTerraform(struct!.fwdIngressPktSizeRange3),
    fwd_ingress_pkt_size_range4: cdktf.numberToTerraform(struct!.fwdIngressPktSizeRange4),
    limit_entry_created: cdktf.numberToTerraform(struct!.limitEntryCreated),
    limit_entry_marked_deleted: cdktf.numberToTerraform(struct!.limitEntryMarkedDeleted),
    non_syn_pkt_fwd_allowed: cdktf.numberToTerraform(struct!.nonSynPktFwdAllowed),
    rev_egress_bytes_icmp: cdktf.numberToTerraform(struct!.revEgressBytesIcmp),
    rev_egress_bytes_others: cdktf.numberToTerraform(struct!.revEgressBytesOthers),
    rev_egress_bytes_tcp: cdktf.numberToTerraform(struct!.revEgressBytesTcp),
    rev_egress_bytes_udp: cdktf.numberToTerraform(struct!.revEgressBytesUdp),
    rev_egress_packets_icmp: cdktf.numberToTerraform(struct!.revEgressPacketsIcmp),
    rev_egress_packets_others: cdktf.numberToTerraform(struct!.revEgressPacketsOthers),
    rev_egress_packets_tcp: cdktf.numberToTerraform(struct!.revEgressPacketsTcp),
    rev_egress_packets_udp: cdktf.numberToTerraform(struct!.revEgressPacketsUdp),
    rev_egress_pkt_size_range1: cdktf.numberToTerraform(struct!.revEgressPktSizeRange1),
    rev_egress_pkt_size_range2: cdktf.numberToTerraform(struct!.revEgressPktSizeRange2),
    rev_egress_pkt_size_range3: cdktf.numberToTerraform(struct!.revEgressPktSizeRange3),
    rev_egress_pkt_size_range4: cdktf.numberToTerraform(struct!.revEgressPktSizeRange4),
    rev_ingress_bytes_icmp: cdktf.numberToTerraform(struct!.revIngressBytesIcmp),
    rev_ingress_bytes_others: cdktf.numberToTerraform(struct!.revIngressBytesOthers),
    rev_ingress_bytes_tcp: cdktf.numberToTerraform(struct!.revIngressBytesTcp),
    rev_ingress_bytes_udp: cdktf.numberToTerraform(struct!.revIngressBytesUdp),
    rev_ingress_packets_icmp: cdktf.numberToTerraform(struct!.revIngressPacketsIcmp),
    rev_ingress_packets_others: cdktf.numberToTerraform(struct!.revIngressPacketsOthers),
    rev_ingress_packets_tcp: cdktf.numberToTerraform(struct!.revIngressPacketsTcp),
    rev_ingress_packets_udp: cdktf.numberToTerraform(struct!.revIngressPacketsUdp),
    rev_ingress_pkt_size_range1: cdktf.numberToTerraform(struct!.revIngressPktSizeRange1),
    rev_ingress_pkt_size_range2: cdktf.numberToTerraform(struct!.revIngressPktSizeRange2),
    rev_ingress_pkt_size_range3: cdktf.numberToTerraform(struct!.revIngressPktSizeRange3),
    rev_ingress_pkt_size_range4: cdktf.numberToTerraform(struct!.revIngressPktSizeRange4),
    tcp_fullcone_created: cdktf.numberToTerraform(struct!.tcpFullconeCreated),
    tcp_fullcone_freed: cdktf.numberToTerraform(struct!.tcpFullconeFreed),
    udp_fullcone_created: cdktf.numberToTerraform(struct!.udpFullconeCreated),
    udp_fullcone_freed: cdktf.numberToTerraform(struct!.udpFullconeFreed),
    undetermined_rule_counter: cdktf.numberToTerraform(struct!.undeterminedRuleCounter),
  }
}


export function dataThunderFwGlobalStatsStatsToHclTerraform(struct?: DataThunderFwGlobalStatsStatsOutputReference | DataThunderFwGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_fullcone_session: {
      value: cdktf.numberToHclTerraform(struct!.activeFullconeSession),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_session_created: {
      value: cdktf.numberToHclTerraform(struct!.dataSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_session_created_local: {
      value: cdktf.numberToHclTerraform(struct!.dataSessionCreatedLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_session_freed: {
      value: cdktf.numberToHclTerraform(struct!.dataSessionFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_session_freed_local: {
      value: cdktf.numberToHclTerraform(struct!.dataSessionFreedLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dyn_blist_pkt_drop: {
      value: cdktf.numberToHclTerraform(struct!.dynBlistPktDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dyn_blist_sess_created: {
      value: cdktf.numberToHclTerraform(struct!.dynBlistSessCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dyn_blist_sess_freed: {
      value: cdktf.numberToHclTerraform(struct!.dynBlistSessFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fullcone_creation_failure: {
      value: cdktf.numberToHclTerraform(struct!.fullconeCreationFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_egress_bytes_icmp: {
      value: cdktf.numberToHclTerraform(struct!.fwdEgressBytesIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_egress_bytes_others: {
      value: cdktf.numberToHclTerraform(struct!.fwdEgressBytesOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_egress_bytes_tcp: {
      value: cdktf.numberToHclTerraform(struct!.fwdEgressBytesTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_egress_bytes_udp: {
      value: cdktf.numberToHclTerraform(struct!.fwdEgressBytesUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_egress_packets_icmp: {
      value: cdktf.numberToHclTerraform(struct!.fwdEgressPacketsIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_egress_packets_others: {
      value: cdktf.numberToHclTerraform(struct!.fwdEgressPacketsOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_egress_packets_tcp: {
      value: cdktf.numberToHclTerraform(struct!.fwdEgressPacketsTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_egress_packets_udp: {
      value: cdktf.numberToHclTerraform(struct!.fwdEgressPacketsUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_egress_pkt_size_range1: {
      value: cdktf.numberToHclTerraform(struct!.fwdEgressPktSizeRange1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_egress_pkt_size_range2: {
      value: cdktf.numberToHclTerraform(struct!.fwdEgressPktSizeRange2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_egress_pkt_size_range3: {
      value: cdktf.numberToHclTerraform(struct!.fwdEgressPktSizeRange3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_egress_pkt_size_range4: {
      value: cdktf.numberToHclTerraform(struct!.fwdEgressPktSizeRange4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_ingress_bytes_icmp: {
      value: cdktf.numberToHclTerraform(struct!.fwdIngressBytesIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_ingress_bytes_others: {
      value: cdktf.numberToHclTerraform(struct!.fwdIngressBytesOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_ingress_bytes_tcp: {
      value: cdktf.numberToHclTerraform(struct!.fwdIngressBytesTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_ingress_bytes_udp: {
      value: cdktf.numberToHclTerraform(struct!.fwdIngressBytesUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_ingress_packets_icmp: {
      value: cdktf.numberToHclTerraform(struct!.fwdIngressPacketsIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_ingress_packets_others: {
      value: cdktf.numberToHclTerraform(struct!.fwdIngressPacketsOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_ingress_packets_tcp: {
      value: cdktf.numberToHclTerraform(struct!.fwdIngressPacketsTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_ingress_packets_udp: {
      value: cdktf.numberToHclTerraform(struct!.fwdIngressPacketsUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_ingress_pkt_size_range1: {
      value: cdktf.numberToHclTerraform(struct!.fwdIngressPktSizeRange1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_ingress_pkt_size_range2: {
      value: cdktf.numberToHclTerraform(struct!.fwdIngressPktSizeRange2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_ingress_pkt_size_range3: {
      value: cdktf.numberToHclTerraform(struct!.fwdIngressPktSizeRange3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_ingress_pkt_size_range4: {
      value: cdktf.numberToHclTerraform(struct!.fwdIngressPktSizeRange4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit_entry_created: {
      value: cdktf.numberToHclTerraform(struct!.limitEntryCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    limit_entry_marked_deleted: {
      value: cdktf.numberToHclTerraform(struct!.limitEntryMarkedDeleted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    non_syn_pkt_fwd_allowed: {
      value: cdktf.numberToHclTerraform(struct!.nonSynPktFwdAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_egress_bytes_icmp: {
      value: cdktf.numberToHclTerraform(struct!.revEgressBytesIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_egress_bytes_others: {
      value: cdktf.numberToHclTerraform(struct!.revEgressBytesOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_egress_bytes_tcp: {
      value: cdktf.numberToHclTerraform(struct!.revEgressBytesTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_egress_bytes_udp: {
      value: cdktf.numberToHclTerraform(struct!.revEgressBytesUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_egress_packets_icmp: {
      value: cdktf.numberToHclTerraform(struct!.revEgressPacketsIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_egress_packets_others: {
      value: cdktf.numberToHclTerraform(struct!.revEgressPacketsOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_egress_packets_tcp: {
      value: cdktf.numberToHclTerraform(struct!.revEgressPacketsTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_egress_packets_udp: {
      value: cdktf.numberToHclTerraform(struct!.revEgressPacketsUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_egress_pkt_size_range1: {
      value: cdktf.numberToHclTerraform(struct!.revEgressPktSizeRange1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_egress_pkt_size_range2: {
      value: cdktf.numberToHclTerraform(struct!.revEgressPktSizeRange2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_egress_pkt_size_range3: {
      value: cdktf.numberToHclTerraform(struct!.revEgressPktSizeRange3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_egress_pkt_size_range4: {
      value: cdktf.numberToHclTerraform(struct!.revEgressPktSizeRange4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_ingress_bytes_icmp: {
      value: cdktf.numberToHclTerraform(struct!.revIngressBytesIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_ingress_bytes_others: {
      value: cdktf.numberToHclTerraform(struct!.revIngressBytesOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_ingress_bytes_tcp: {
      value: cdktf.numberToHclTerraform(struct!.revIngressBytesTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_ingress_bytes_udp: {
      value: cdktf.numberToHclTerraform(struct!.revIngressBytesUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_ingress_packets_icmp: {
      value: cdktf.numberToHclTerraform(struct!.revIngressPacketsIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_ingress_packets_others: {
      value: cdktf.numberToHclTerraform(struct!.revIngressPacketsOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_ingress_packets_tcp: {
      value: cdktf.numberToHclTerraform(struct!.revIngressPacketsTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_ingress_packets_udp: {
      value: cdktf.numberToHclTerraform(struct!.revIngressPacketsUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_ingress_pkt_size_range1: {
      value: cdktf.numberToHclTerraform(struct!.revIngressPktSizeRange1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_ingress_pkt_size_range2: {
      value: cdktf.numberToHclTerraform(struct!.revIngressPktSizeRange2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_ingress_pkt_size_range3: {
      value: cdktf.numberToHclTerraform(struct!.revIngressPktSizeRange3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rev_ingress_pkt_size_range4: {
      value: cdktf.numberToHclTerraform(struct!.revIngressPktSizeRange4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_fullcone_created: {
      value: cdktf.numberToHclTerraform(struct!.tcpFullconeCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_fullcone_freed: {
      value: cdktf.numberToHclTerraform(struct!.tcpFullconeFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_fullcone_created: {
      value: cdktf.numberToHclTerraform(struct!.udpFullconeCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_fullcone_freed: {
      value: cdktf.numberToHclTerraform(struct!.udpFullconeFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    undetermined_rule_counter: {
      value: cdktf.numberToHclTerraform(struct!.undeterminedRuleCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwGlobalStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwGlobalStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeFullconeSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeFullconeSession = this._activeFullconeSession;
    }
    if (this._dataSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSessionCreated = this._dataSessionCreated;
    }
    if (this._dataSessionCreatedLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSessionCreatedLocal = this._dataSessionCreatedLocal;
    }
    if (this._dataSessionFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSessionFreed = this._dataSessionFreed;
    }
    if (this._dataSessionFreedLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSessionFreedLocal = this._dataSessionFreedLocal;
    }
    if (this._dynBlistPktDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynBlistPktDrop = this._dynBlistPktDrop;
    }
    if (this._dynBlistSessCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynBlistSessCreated = this._dynBlistSessCreated;
    }
    if (this._dynBlistSessFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynBlistSessFreed = this._dynBlistSessFreed;
    }
    if (this._fullconeCreationFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullconeCreationFailure = this._fullconeCreationFailure;
    }
    if (this._fwdEgressBytesIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdEgressBytesIcmp = this._fwdEgressBytesIcmp;
    }
    if (this._fwdEgressBytesOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdEgressBytesOthers = this._fwdEgressBytesOthers;
    }
    if (this._fwdEgressBytesTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdEgressBytesTcp = this._fwdEgressBytesTcp;
    }
    if (this._fwdEgressBytesUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdEgressBytesUdp = this._fwdEgressBytesUdp;
    }
    if (this._fwdEgressPacketsIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdEgressPacketsIcmp = this._fwdEgressPacketsIcmp;
    }
    if (this._fwdEgressPacketsOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdEgressPacketsOthers = this._fwdEgressPacketsOthers;
    }
    if (this._fwdEgressPacketsTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdEgressPacketsTcp = this._fwdEgressPacketsTcp;
    }
    if (this._fwdEgressPacketsUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdEgressPacketsUdp = this._fwdEgressPacketsUdp;
    }
    if (this._fwdEgressPktSizeRange1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdEgressPktSizeRange1 = this._fwdEgressPktSizeRange1;
    }
    if (this._fwdEgressPktSizeRange2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdEgressPktSizeRange2 = this._fwdEgressPktSizeRange2;
    }
    if (this._fwdEgressPktSizeRange3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdEgressPktSizeRange3 = this._fwdEgressPktSizeRange3;
    }
    if (this._fwdEgressPktSizeRange4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdEgressPktSizeRange4 = this._fwdEgressPktSizeRange4;
    }
    if (this._fwdIngressBytesIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdIngressBytesIcmp = this._fwdIngressBytesIcmp;
    }
    if (this._fwdIngressBytesOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdIngressBytesOthers = this._fwdIngressBytesOthers;
    }
    if (this._fwdIngressBytesTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdIngressBytesTcp = this._fwdIngressBytesTcp;
    }
    if (this._fwdIngressBytesUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdIngressBytesUdp = this._fwdIngressBytesUdp;
    }
    if (this._fwdIngressPacketsIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdIngressPacketsIcmp = this._fwdIngressPacketsIcmp;
    }
    if (this._fwdIngressPacketsOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdIngressPacketsOthers = this._fwdIngressPacketsOthers;
    }
    if (this._fwdIngressPacketsTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdIngressPacketsTcp = this._fwdIngressPacketsTcp;
    }
    if (this._fwdIngressPacketsUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdIngressPacketsUdp = this._fwdIngressPacketsUdp;
    }
    if (this._fwdIngressPktSizeRange1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdIngressPktSizeRange1 = this._fwdIngressPktSizeRange1;
    }
    if (this._fwdIngressPktSizeRange2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdIngressPktSizeRange2 = this._fwdIngressPktSizeRange2;
    }
    if (this._fwdIngressPktSizeRange3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdIngressPktSizeRange3 = this._fwdIngressPktSizeRange3;
    }
    if (this._fwdIngressPktSizeRange4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdIngressPktSizeRange4 = this._fwdIngressPktSizeRange4;
    }
    if (this._limitEntryCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitEntryCreated = this._limitEntryCreated;
    }
    if (this._limitEntryMarkedDeleted !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitEntryMarkedDeleted = this._limitEntryMarkedDeleted;
    }
    if (this._nonSynPktFwdAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonSynPktFwdAllowed = this._nonSynPktFwdAllowed;
    }
    if (this._revEgressBytesIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.revEgressBytesIcmp = this._revEgressBytesIcmp;
    }
    if (this._revEgressBytesOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.revEgressBytesOthers = this._revEgressBytesOthers;
    }
    if (this._revEgressBytesTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.revEgressBytesTcp = this._revEgressBytesTcp;
    }
    if (this._revEgressBytesUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.revEgressBytesUdp = this._revEgressBytesUdp;
    }
    if (this._revEgressPacketsIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.revEgressPacketsIcmp = this._revEgressPacketsIcmp;
    }
    if (this._revEgressPacketsOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.revEgressPacketsOthers = this._revEgressPacketsOthers;
    }
    if (this._revEgressPacketsTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.revEgressPacketsTcp = this._revEgressPacketsTcp;
    }
    if (this._revEgressPacketsUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.revEgressPacketsUdp = this._revEgressPacketsUdp;
    }
    if (this._revEgressPktSizeRange1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.revEgressPktSizeRange1 = this._revEgressPktSizeRange1;
    }
    if (this._revEgressPktSizeRange2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.revEgressPktSizeRange2 = this._revEgressPktSizeRange2;
    }
    if (this._revEgressPktSizeRange3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.revEgressPktSizeRange3 = this._revEgressPktSizeRange3;
    }
    if (this._revEgressPktSizeRange4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.revEgressPktSizeRange4 = this._revEgressPktSizeRange4;
    }
    if (this._revIngressBytesIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.revIngressBytesIcmp = this._revIngressBytesIcmp;
    }
    if (this._revIngressBytesOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.revIngressBytesOthers = this._revIngressBytesOthers;
    }
    if (this._revIngressBytesTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.revIngressBytesTcp = this._revIngressBytesTcp;
    }
    if (this._revIngressBytesUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.revIngressBytesUdp = this._revIngressBytesUdp;
    }
    if (this._revIngressPacketsIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.revIngressPacketsIcmp = this._revIngressPacketsIcmp;
    }
    if (this._revIngressPacketsOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.revIngressPacketsOthers = this._revIngressPacketsOthers;
    }
    if (this._revIngressPacketsTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.revIngressPacketsTcp = this._revIngressPacketsTcp;
    }
    if (this._revIngressPacketsUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.revIngressPacketsUdp = this._revIngressPacketsUdp;
    }
    if (this._revIngressPktSizeRange1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.revIngressPktSizeRange1 = this._revIngressPktSizeRange1;
    }
    if (this._revIngressPktSizeRange2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.revIngressPktSizeRange2 = this._revIngressPktSizeRange2;
    }
    if (this._revIngressPktSizeRange3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.revIngressPktSizeRange3 = this._revIngressPktSizeRange3;
    }
    if (this._revIngressPktSizeRange4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.revIngressPktSizeRange4 = this._revIngressPktSizeRange4;
    }
    if (this._tcpFullconeCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFullconeCreated = this._tcpFullconeCreated;
    }
    if (this._tcpFullconeFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFullconeFreed = this._tcpFullconeFreed;
    }
    if (this._udpFullconeCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFullconeCreated = this._udpFullconeCreated;
    }
    if (this._udpFullconeFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFullconeFreed = this._udpFullconeFreed;
    }
    if (this._undeterminedRuleCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.undeterminedRuleCounter = this._undeterminedRuleCounter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwGlobalStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeFullconeSession = undefined;
      this._dataSessionCreated = undefined;
      this._dataSessionCreatedLocal = undefined;
      this._dataSessionFreed = undefined;
      this._dataSessionFreedLocal = undefined;
      this._dynBlistPktDrop = undefined;
      this._dynBlistSessCreated = undefined;
      this._dynBlistSessFreed = undefined;
      this._fullconeCreationFailure = undefined;
      this._fwdEgressBytesIcmp = undefined;
      this._fwdEgressBytesOthers = undefined;
      this._fwdEgressBytesTcp = undefined;
      this._fwdEgressBytesUdp = undefined;
      this._fwdEgressPacketsIcmp = undefined;
      this._fwdEgressPacketsOthers = undefined;
      this._fwdEgressPacketsTcp = undefined;
      this._fwdEgressPacketsUdp = undefined;
      this._fwdEgressPktSizeRange1 = undefined;
      this._fwdEgressPktSizeRange2 = undefined;
      this._fwdEgressPktSizeRange3 = undefined;
      this._fwdEgressPktSizeRange4 = undefined;
      this._fwdIngressBytesIcmp = undefined;
      this._fwdIngressBytesOthers = undefined;
      this._fwdIngressBytesTcp = undefined;
      this._fwdIngressBytesUdp = undefined;
      this._fwdIngressPacketsIcmp = undefined;
      this._fwdIngressPacketsOthers = undefined;
      this._fwdIngressPacketsTcp = undefined;
      this._fwdIngressPacketsUdp = undefined;
      this._fwdIngressPktSizeRange1 = undefined;
      this._fwdIngressPktSizeRange2 = undefined;
      this._fwdIngressPktSizeRange3 = undefined;
      this._fwdIngressPktSizeRange4 = undefined;
      this._limitEntryCreated = undefined;
      this._limitEntryMarkedDeleted = undefined;
      this._nonSynPktFwdAllowed = undefined;
      this._revEgressBytesIcmp = undefined;
      this._revEgressBytesOthers = undefined;
      this._revEgressBytesTcp = undefined;
      this._revEgressBytesUdp = undefined;
      this._revEgressPacketsIcmp = undefined;
      this._revEgressPacketsOthers = undefined;
      this._revEgressPacketsTcp = undefined;
      this._revEgressPacketsUdp = undefined;
      this._revEgressPktSizeRange1 = undefined;
      this._revEgressPktSizeRange2 = undefined;
      this._revEgressPktSizeRange3 = undefined;
      this._revEgressPktSizeRange4 = undefined;
      this._revIngressBytesIcmp = undefined;
      this._revIngressBytesOthers = undefined;
      this._revIngressBytesTcp = undefined;
      this._revIngressBytesUdp = undefined;
      this._revIngressPacketsIcmp = undefined;
      this._revIngressPacketsOthers = undefined;
      this._revIngressPacketsTcp = undefined;
      this._revIngressPacketsUdp = undefined;
      this._revIngressPktSizeRange1 = undefined;
      this._revIngressPktSizeRange2 = undefined;
      this._revIngressPktSizeRange3 = undefined;
      this._revIngressPktSizeRange4 = undefined;
      this._tcpFullconeCreated = undefined;
      this._tcpFullconeFreed = undefined;
      this._udpFullconeCreated = undefined;
      this._udpFullconeFreed = undefined;
      this._undeterminedRuleCounter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeFullconeSession = value.activeFullconeSession;
      this._dataSessionCreated = value.dataSessionCreated;
      this._dataSessionCreatedLocal = value.dataSessionCreatedLocal;
      this._dataSessionFreed = value.dataSessionFreed;
      this._dataSessionFreedLocal = value.dataSessionFreedLocal;
      this._dynBlistPktDrop = value.dynBlistPktDrop;
      this._dynBlistSessCreated = value.dynBlistSessCreated;
      this._dynBlistSessFreed = value.dynBlistSessFreed;
      this._fullconeCreationFailure = value.fullconeCreationFailure;
      this._fwdEgressBytesIcmp = value.fwdEgressBytesIcmp;
      this._fwdEgressBytesOthers = value.fwdEgressBytesOthers;
      this._fwdEgressBytesTcp = value.fwdEgressBytesTcp;
      this._fwdEgressBytesUdp = value.fwdEgressBytesUdp;
      this._fwdEgressPacketsIcmp = value.fwdEgressPacketsIcmp;
      this._fwdEgressPacketsOthers = value.fwdEgressPacketsOthers;
      this._fwdEgressPacketsTcp = value.fwdEgressPacketsTcp;
      this._fwdEgressPacketsUdp = value.fwdEgressPacketsUdp;
      this._fwdEgressPktSizeRange1 = value.fwdEgressPktSizeRange1;
      this._fwdEgressPktSizeRange2 = value.fwdEgressPktSizeRange2;
      this._fwdEgressPktSizeRange3 = value.fwdEgressPktSizeRange3;
      this._fwdEgressPktSizeRange4 = value.fwdEgressPktSizeRange4;
      this._fwdIngressBytesIcmp = value.fwdIngressBytesIcmp;
      this._fwdIngressBytesOthers = value.fwdIngressBytesOthers;
      this._fwdIngressBytesTcp = value.fwdIngressBytesTcp;
      this._fwdIngressBytesUdp = value.fwdIngressBytesUdp;
      this._fwdIngressPacketsIcmp = value.fwdIngressPacketsIcmp;
      this._fwdIngressPacketsOthers = value.fwdIngressPacketsOthers;
      this._fwdIngressPacketsTcp = value.fwdIngressPacketsTcp;
      this._fwdIngressPacketsUdp = value.fwdIngressPacketsUdp;
      this._fwdIngressPktSizeRange1 = value.fwdIngressPktSizeRange1;
      this._fwdIngressPktSizeRange2 = value.fwdIngressPktSizeRange2;
      this._fwdIngressPktSizeRange3 = value.fwdIngressPktSizeRange3;
      this._fwdIngressPktSizeRange4 = value.fwdIngressPktSizeRange4;
      this._limitEntryCreated = value.limitEntryCreated;
      this._limitEntryMarkedDeleted = value.limitEntryMarkedDeleted;
      this._nonSynPktFwdAllowed = value.nonSynPktFwdAllowed;
      this._revEgressBytesIcmp = value.revEgressBytesIcmp;
      this._revEgressBytesOthers = value.revEgressBytesOthers;
      this._revEgressBytesTcp = value.revEgressBytesTcp;
      this._revEgressBytesUdp = value.revEgressBytesUdp;
      this._revEgressPacketsIcmp = value.revEgressPacketsIcmp;
      this._revEgressPacketsOthers = value.revEgressPacketsOthers;
      this._revEgressPacketsTcp = value.revEgressPacketsTcp;
      this._revEgressPacketsUdp = value.revEgressPacketsUdp;
      this._revEgressPktSizeRange1 = value.revEgressPktSizeRange1;
      this._revEgressPktSizeRange2 = value.revEgressPktSizeRange2;
      this._revEgressPktSizeRange3 = value.revEgressPktSizeRange3;
      this._revEgressPktSizeRange4 = value.revEgressPktSizeRange4;
      this._revIngressBytesIcmp = value.revIngressBytesIcmp;
      this._revIngressBytesOthers = value.revIngressBytesOthers;
      this._revIngressBytesTcp = value.revIngressBytesTcp;
      this._revIngressBytesUdp = value.revIngressBytesUdp;
      this._revIngressPacketsIcmp = value.revIngressPacketsIcmp;
      this._revIngressPacketsOthers = value.revIngressPacketsOthers;
      this._revIngressPacketsTcp = value.revIngressPacketsTcp;
      this._revIngressPacketsUdp = value.revIngressPacketsUdp;
      this._revIngressPktSizeRange1 = value.revIngressPktSizeRange1;
      this._revIngressPktSizeRange2 = value.revIngressPktSizeRange2;
      this._revIngressPktSizeRange3 = value.revIngressPktSizeRange3;
      this._revIngressPktSizeRange4 = value.revIngressPktSizeRange4;
      this._tcpFullconeCreated = value.tcpFullconeCreated;
      this._tcpFullconeFreed = value.tcpFullconeFreed;
      this._udpFullconeCreated = value.udpFullconeCreated;
      this._udpFullconeFreed = value.udpFullconeFreed;
      this._undeterminedRuleCounter = value.undeterminedRuleCounter;
    }
  }

  // active_fullcone_session - computed: false, optional: true, required: false
  private _activeFullconeSession?: number; 
  public get activeFullconeSession() {
    return this.getNumberAttribute('active_fullcone_session');
  }
  public set activeFullconeSession(value: number) {
    this._activeFullconeSession = value;
  }
  public resetActiveFullconeSession() {
    this._activeFullconeSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeFullconeSessionInput() {
    return this._activeFullconeSession;
  }

  // data_session_created - computed: false, optional: true, required: false
  private _dataSessionCreated?: number; 
  public get dataSessionCreated() {
    return this.getNumberAttribute('data_session_created');
  }
  public set dataSessionCreated(value: number) {
    this._dataSessionCreated = value;
  }
  public resetDataSessionCreated() {
    this._dataSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSessionCreatedInput() {
    return this._dataSessionCreated;
  }

  // data_session_created_local - computed: false, optional: true, required: false
  private _dataSessionCreatedLocal?: number; 
  public get dataSessionCreatedLocal() {
    return this.getNumberAttribute('data_session_created_local');
  }
  public set dataSessionCreatedLocal(value: number) {
    this._dataSessionCreatedLocal = value;
  }
  public resetDataSessionCreatedLocal() {
    this._dataSessionCreatedLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSessionCreatedLocalInput() {
    return this._dataSessionCreatedLocal;
  }

  // data_session_freed - computed: false, optional: true, required: false
  private _dataSessionFreed?: number; 
  public get dataSessionFreed() {
    return this.getNumberAttribute('data_session_freed');
  }
  public set dataSessionFreed(value: number) {
    this._dataSessionFreed = value;
  }
  public resetDataSessionFreed() {
    this._dataSessionFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSessionFreedInput() {
    return this._dataSessionFreed;
  }

  // data_session_freed_local - computed: false, optional: true, required: false
  private _dataSessionFreedLocal?: number; 
  public get dataSessionFreedLocal() {
    return this.getNumberAttribute('data_session_freed_local');
  }
  public set dataSessionFreedLocal(value: number) {
    this._dataSessionFreedLocal = value;
  }
  public resetDataSessionFreedLocal() {
    this._dataSessionFreedLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSessionFreedLocalInput() {
    return this._dataSessionFreedLocal;
  }

  // dyn_blist_pkt_drop - computed: false, optional: true, required: false
  private _dynBlistPktDrop?: number; 
  public get dynBlistPktDrop() {
    return this.getNumberAttribute('dyn_blist_pkt_drop');
  }
  public set dynBlistPktDrop(value: number) {
    this._dynBlistPktDrop = value;
  }
  public resetDynBlistPktDrop() {
    this._dynBlistPktDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynBlistPktDropInput() {
    return this._dynBlistPktDrop;
  }

  // dyn_blist_sess_created - computed: false, optional: true, required: false
  private _dynBlistSessCreated?: number; 
  public get dynBlistSessCreated() {
    return this.getNumberAttribute('dyn_blist_sess_created');
  }
  public set dynBlistSessCreated(value: number) {
    this._dynBlistSessCreated = value;
  }
  public resetDynBlistSessCreated() {
    this._dynBlistSessCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynBlistSessCreatedInput() {
    return this._dynBlistSessCreated;
  }

  // dyn_blist_sess_freed - computed: false, optional: true, required: false
  private _dynBlistSessFreed?: number; 
  public get dynBlistSessFreed() {
    return this.getNumberAttribute('dyn_blist_sess_freed');
  }
  public set dynBlistSessFreed(value: number) {
    this._dynBlistSessFreed = value;
  }
  public resetDynBlistSessFreed() {
    this._dynBlistSessFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynBlistSessFreedInput() {
    return this._dynBlistSessFreed;
  }

  // fullcone_creation_failure - computed: false, optional: true, required: false
  private _fullconeCreationFailure?: number; 
  public get fullconeCreationFailure() {
    return this.getNumberAttribute('fullcone_creation_failure');
  }
  public set fullconeCreationFailure(value: number) {
    this._fullconeCreationFailure = value;
  }
  public resetFullconeCreationFailure() {
    this._fullconeCreationFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullconeCreationFailureInput() {
    return this._fullconeCreationFailure;
  }

  // fwd_egress_bytes_icmp - computed: false, optional: true, required: false
  private _fwdEgressBytesIcmp?: number; 
  public get fwdEgressBytesIcmp() {
    return this.getNumberAttribute('fwd_egress_bytes_icmp');
  }
  public set fwdEgressBytesIcmp(value: number) {
    this._fwdEgressBytesIcmp = value;
  }
  public resetFwdEgressBytesIcmp() {
    this._fwdEgressBytesIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdEgressBytesIcmpInput() {
    return this._fwdEgressBytesIcmp;
  }

  // fwd_egress_bytes_others - computed: false, optional: true, required: false
  private _fwdEgressBytesOthers?: number; 
  public get fwdEgressBytesOthers() {
    return this.getNumberAttribute('fwd_egress_bytes_others');
  }
  public set fwdEgressBytesOthers(value: number) {
    this._fwdEgressBytesOthers = value;
  }
  public resetFwdEgressBytesOthers() {
    this._fwdEgressBytesOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdEgressBytesOthersInput() {
    return this._fwdEgressBytesOthers;
  }

  // fwd_egress_bytes_tcp - computed: false, optional: true, required: false
  private _fwdEgressBytesTcp?: number; 
  public get fwdEgressBytesTcp() {
    return this.getNumberAttribute('fwd_egress_bytes_tcp');
  }
  public set fwdEgressBytesTcp(value: number) {
    this._fwdEgressBytesTcp = value;
  }
  public resetFwdEgressBytesTcp() {
    this._fwdEgressBytesTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdEgressBytesTcpInput() {
    return this._fwdEgressBytesTcp;
  }

  // fwd_egress_bytes_udp - computed: false, optional: true, required: false
  private _fwdEgressBytesUdp?: number; 
  public get fwdEgressBytesUdp() {
    return this.getNumberAttribute('fwd_egress_bytes_udp');
  }
  public set fwdEgressBytesUdp(value: number) {
    this._fwdEgressBytesUdp = value;
  }
  public resetFwdEgressBytesUdp() {
    this._fwdEgressBytesUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdEgressBytesUdpInput() {
    return this._fwdEgressBytesUdp;
  }

  // fwd_egress_packets_icmp - computed: false, optional: true, required: false
  private _fwdEgressPacketsIcmp?: number; 
  public get fwdEgressPacketsIcmp() {
    return this.getNumberAttribute('fwd_egress_packets_icmp');
  }
  public set fwdEgressPacketsIcmp(value: number) {
    this._fwdEgressPacketsIcmp = value;
  }
  public resetFwdEgressPacketsIcmp() {
    this._fwdEgressPacketsIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdEgressPacketsIcmpInput() {
    return this._fwdEgressPacketsIcmp;
  }

  // fwd_egress_packets_others - computed: false, optional: true, required: false
  private _fwdEgressPacketsOthers?: number; 
  public get fwdEgressPacketsOthers() {
    return this.getNumberAttribute('fwd_egress_packets_others');
  }
  public set fwdEgressPacketsOthers(value: number) {
    this._fwdEgressPacketsOthers = value;
  }
  public resetFwdEgressPacketsOthers() {
    this._fwdEgressPacketsOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdEgressPacketsOthersInput() {
    return this._fwdEgressPacketsOthers;
  }

  // fwd_egress_packets_tcp - computed: false, optional: true, required: false
  private _fwdEgressPacketsTcp?: number; 
  public get fwdEgressPacketsTcp() {
    return this.getNumberAttribute('fwd_egress_packets_tcp');
  }
  public set fwdEgressPacketsTcp(value: number) {
    this._fwdEgressPacketsTcp = value;
  }
  public resetFwdEgressPacketsTcp() {
    this._fwdEgressPacketsTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdEgressPacketsTcpInput() {
    return this._fwdEgressPacketsTcp;
  }

  // fwd_egress_packets_udp - computed: false, optional: true, required: false
  private _fwdEgressPacketsUdp?: number; 
  public get fwdEgressPacketsUdp() {
    return this.getNumberAttribute('fwd_egress_packets_udp');
  }
  public set fwdEgressPacketsUdp(value: number) {
    this._fwdEgressPacketsUdp = value;
  }
  public resetFwdEgressPacketsUdp() {
    this._fwdEgressPacketsUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdEgressPacketsUdpInput() {
    return this._fwdEgressPacketsUdp;
  }

  // fwd_egress_pkt_size_range1 - computed: false, optional: true, required: false
  private _fwdEgressPktSizeRange1?: number; 
  public get fwdEgressPktSizeRange1() {
    return this.getNumberAttribute('fwd_egress_pkt_size_range1');
  }
  public set fwdEgressPktSizeRange1(value: number) {
    this._fwdEgressPktSizeRange1 = value;
  }
  public resetFwdEgressPktSizeRange1() {
    this._fwdEgressPktSizeRange1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdEgressPktSizeRange1Input() {
    return this._fwdEgressPktSizeRange1;
  }

  // fwd_egress_pkt_size_range2 - computed: false, optional: true, required: false
  private _fwdEgressPktSizeRange2?: number; 
  public get fwdEgressPktSizeRange2() {
    return this.getNumberAttribute('fwd_egress_pkt_size_range2');
  }
  public set fwdEgressPktSizeRange2(value: number) {
    this._fwdEgressPktSizeRange2 = value;
  }
  public resetFwdEgressPktSizeRange2() {
    this._fwdEgressPktSizeRange2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdEgressPktSizeRange2Input() {
    return this._fwdEgressPktSizeRange2;
  }

  // fwd_egress_pkt_size_range3 - computed: false, optional: true, required: false
  private _fwdEgressPktSizeRange3?: number; 
  public get fwdEgressPktSizeRange3() {
    return this.getNumberAttribute('fwd_egress_pkt_size_range3');
  }
  public set fwdEgressPktSizeRange3(value: number) {
    this._fwdEgressPktSizeRange3 = value;
  }
  public resetFwdEgressPktSizeRange3() {
    this._fwdEgressPktSizeRange3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdEgressPktSizeRange3Input() {
    return this._fwdEgressPktSizeRange3;
  }

  // fwd_egress_pkt_size_range4 - computed: false, optional: true, required: false
  private _fwdEgressPktSizeRange4?: number; 
  public get fwdEgressPktSizeRange4() {
    return this.getNumberAttribute('fwd_egress_pkt_size_range4');
  }
  public set fwdEgressPktSizeRange4(value: number) {
    this._fwdEgressPktSizeRange4 = value;
  }
  public resetFwdEgressPktSizeRange4() {
    this._fwdEgressPktSizeRange4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdEgressPktSizeRange4Input() {
    return this._fwdEgressPktSizeRange4;
  }

  // fwd_ingress_bytes_icmp - computed: false, optional: true, required: false
  private _fwdIngressBytesIcmp?: number; 
  public get fwdIngressBytesIcmp() {
    return this.getNumberAttribute('fwd_ingress_bytes_icmp');
  }
  public set fwdIngressBytesIcmp(value: number) {
    this._fwdIngressBytesIcmp = value;
  }
  public resetFwdIngressBytesIcmp() {
    this._fwdIngressBytesIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdIngressBytesIcmpInput() {
    return this._fwdIngressBytesIcmp;
  }

  // fwd_ingress_bytes_others - computed: false, optional: true, required: false
  private _fwdIngressBytesOthers?: number; 
  public get fwdIngressBytesOthers() {
    return this.getNumberAttribute('fwd_ingress_bytes_others');
  }
  public set fwdIngressBytesOthers(value: number) {
    this._fwdIngressBytesOthers = value;
  }
  public resetFwdIngressBytesOthers() {
    this._fwdIngressBytesOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdIngressBytesOthersInput() {
    return this._fwdIngressBytesOthers;
  }

  // fwd_ingress_bytes_tcp - computed: false, optional: true, required: false
  private _fwdIngressBytesTcp?: number; 
  public get fwdIngressBytesTcp() {
    return this.getNumberAttribute('fwd_ingress_bytes_tcp');
  }
  public set fwdIngressBytesTcp(value: number) {
    this._fwdIngressBytesTcp = value;
  }
  public resetFwdIngressBytesTcp() {
    this._fwdIngressBytesTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdIngressBytesTcpInput() {
    return this._fwdIngressBytesTcp;
  }

  // fwd_ingress_bytes_udp - computed: false, optional: true, required: false
  private _fwdIngressBytesUdp?: number; 
  public get fwdIngressBytesUdp() {
    return this.getNumberAttribute('fwd_ingress_bytes_udp');
  }
  public set fwdIngressBytesUdp(value: number) {
    this._fwdIngressBytesUdp = value;
  }
  public resetFwdIngressBytesUdp() {
    this._fwdIngressBytesUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdIngressBytesUdpInput() {
    return this._fwdIngressBytesUdp;
  }

  // fwd_ingress_packets_icmp - computed: false, optional: true, required: false
  private _fwdIngressPacketsIcmp?: number; 
  public get fwdIngressPacketsIcmp() {
    return this.getNumberAttribute('fwd_ingress_packets_icmp');
  }
  public set fwdIngressPacketsIcmp(value: number) {
    this._fwdIngressPacketsIcmp = value;
  }
  public resetFwdIngressPacketsIcmp() {
    this._fwdIngressPacketsIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdIngressPacketsIcmpInput() {
    return this._fwdIngressPacketsIcmp;
  }

  // fwd_ingress_packets_others - computed: false, optional: true, required: false
  private _fwdIngressPacketsOthers?: number; 
  public get fwdIngressPacketsOthers() {
    return this.getNumberAttribute('fwd_ingress_packets_others');
  }
  public set fwdIngressPacketsOthers(value: number) {
    this._fwdIngressPacketsOthers = value;
  }
  public resetFwdIngressPacketsOthers() {
    this._fwdIngressPacketsOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdIngressPacketsOthersInput() {
    return this._fwdIngressPacketsOthers;
  }

  // fwd_ingress_packets_tcp - computed: false, optional: true, required: false
  private _fwdIngressPacketsTcp?: number; 
  public get fwdIngressPacketsTcp() {
    return this.getNumberAttribute('fwd_ingress_packets_tcp');
  }
  public set fwdIngressPacketsTcp(value: number) {
    this._fwdIngressPacketsTcp = value;
  }
  public resetFwdIngressPacketsTcp() {
    this._fwdIngressPacketsTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdIngressPacketsTcpInput() {
    return this._fwdIngressPacketsTcp;
  }

  // fwd_ingress_packets_udp - computed: false, optional: true, required: false
  private _fwdIngressPacketsUdp?: number; 
  public get fwdIngressPacketsUdp() {
    return this.getNumberAttribute('fwd_ingress_packets_udp');
  }
  public set fwdIngressPacketsUdp(value: number) {
    this._fwdIngressPacketsUdp = value;
  }
  public resetFwdIngressPacketsUdp() {
    this._fwdIngressPacketsUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdIngressPacketsUdpInput() {
    return this._fwdIngressPacketsUdp;
  }

  // fwd_ingress_pkt_size_range1 - computed: false, optional: true, required: false
  private _fwdIngressPktSizeRange1?: number; 
  public get fwdIngressPktSizeRange1() {
    return this.getNumberAttribute('fwd_ingress_pkt_size_range1');
  }
  public set fwdIngressPktSizeRange1(value: number) {
    this._fwdIngressPktSizeRange1 = value;
  }
  public resetFwdIngressPktSizeRange1() {
    this._fwdIngressPktSizeRange1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdIngressPktSizeRange1Input() {
    return this._fwdIngressPktSizeRange1;
  }

  // fwd_ingress_pkt_size_range2 - computed: false, optional: true, required: false
  private _fwdIngressPktSizeRange2?: number; 
  public get fwdIngressPktSizeRange2() {
    return this.getNumberAttribute('fwd_ingress_pkt_size_range2');
  }
  public set fwdIngressPktSizeRange2(value: number) {
    this._fwdIngressPktSizeRange2 = value;
  }
  public resetFwdIngressPktSizeRange2() {
    this._fwdIngressPktSizeRange2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdIngressPktSizeRange2Input() {
    return this._fwdIngressPktSizeRange2;
  }

  // fwd_ingress_pkt_size_range3 - computed: false, optional: true, required: false
  private _fwdIngressPktSizeRange3?: number; 
  public get fwdIngressPktSizeRange3() {
    return this.getNumberAttribute('fwd_ingress_pkt_size_range3');
  }
  public set fwdIngressPktSizeRange3(value: number) {
    this._fwdIngressPktSizeRange3 = value;
  }
  public resetFwdIngressPktSizeRange3() {
    this._fwdIngressPktSizeRange3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdIngressPktSizeRange3Input() {
    return this._fwdIngressPktSizeRange3;
  }

  // fwd_ingress_pkt_size_range4 - computed: false, optional: true, required: false
  private _fwdIngressPktSizeRange4?: number; 
  public get fwdIngressPktSizeRange4() {
    return this.getNumberAttribute('fwd_ingress_pkt_size_range4');
  }
  public set fwdIngressPktSizeRange4(value: number) {
    this._fwdIngressPktSizeRange4 = value;
  }
  public resetFwdIngressPktSizeRange4() {
    this._fwdIngressPktSizeRange4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdIngressPktSizeRange4Input() {
    return this._fwdIngressPktSizeRange4;
  }

  // limit_entry_created - computed: false, optional: true, required: false
  private _limitEntryCreated?: number; 
  public get limitEntryCreated() {
    return this.getNumberAttribute('limit_entry_created');
  }
  public set limitEntryCreated(value: number) {
    this._limitEntryCreated = value;
  }
  public resetLimitEntryCreated() {
    this._limitEntryCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitEntryCreatedInput() {
    return this._limitEntryCreated;
  }

  // limit_entry_marked_deleted - computed: false, optional: true, required: false
  private _limitEntryMarkedDeleted?: number; 
  public get limitEntryMarkedDeleted() {
    return this.getNumberAttribute('limit_entry_marked_deleted');
  }
  public set limitEntryMarkedDeleted(value: number) {
    this._limitEntryMarkedDeleted = value;
  }
  public resetLimitEntryMarkedDeleted() {
    this._limitEntryMarkedDeleted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitEntryMarkedDeletedInput() {
    return this._limitEntryMarkedDeleted;
  }

  // non_syn_pkt_fwd_allowed - computed: false, optional: true, required: false
  private _nonSynPktFwdAllowed?: number; 
  public get nonSynPktFwdAllowed() {
    return this.getNumberAttribute('non_syn_pkt_fwd_allowed');
  }
  public set nonSynPktFwdAllowed(value: number) {
    this._nonSynPktFwdAllowed = value;
  }
  public resetNonSynPktFwdAllowed() {
    this._nonSynPktFwdAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonSynPktFwdAllowedInput() {
    return this._nonSynPktFwdAllowed;
  }

  // rev_egress_bytes_icmp - computed: false, optional: true, required: false
  private _revEgressBytesIcmp?: number; 
  public get revEgressBytesIcmp() {
    return this.getNumberAttribute('rev_egress_bytes_icmp');
  }
  public set revEgressBytesIcmp(value: number) {
    this._revEgressBytesIcmp = value;
  }
  public resetRevEgressBytesIcmp() {
    this._revEgressBytesIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revEgressBytesIcmpInput() {
    return this._revEgressBytesIcmp;
  }

  // rev_egress_bytes_others - computed: false, optional: true, required: false
  private _revEgressBytesOthers?: number; 
  public get revEgressBytesOthers() {
    return this.getNumberAttribute('rev_egress_bytes_others');
  }
  public set revEgressBytesOthers(value: number) {
    this._revEgressBytesOthers = value;
  }
  public resetRevEgressBytesOthers() {
    this._revEgressBytesOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revEgressBytesOthersInput() {
    return this._revEgressBytesOthers;
  }

  // rev_egress_bytes_tcp - computed: false, optional: true, required: false
  private _revEgressBytesTcp?: number; 
  public get revEgressBytesTcp() {
    return this.getNumberAttribute('rev_egress_bytes_tcp');
  }
  public set revEgressBytesTcp(value: number) {
    this._revEgressBytesTcp = value;
  }
  public resetRevEgressBytesTcp() {
    this._revEgressBytesTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revEgressBytesTcpInput() {
    return this._revEgressBytesTcp;
  }

  // rev_egress_bytes_udp - computed: false, optional: true, required: false
  private _revEgressBytesUdp?: number; 
  public get revEgressBytesUdp() {
    return this.getNumberAttribute('rev_egress_bytes_udp');
  }
  public set revEgressBytesUdp(value: number) {
    this._revEgressBytesUdp = value;
  }
  public resetRevEgressBytesUdp() {
    this._revEgressBytesUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revEgressBytesUdpInput() {
    return this._revEgressBytesUdp;
  }

  // rev_egress_packets_icmp - computed: false, optional: true, required: false
  private _revEgressPacketsIcmp?: number; 
  public get revEgressPacketsIcmp() {
    return this.getNumberAttribute('rev_egress_packets_icmp');
  }
  public set revEgressPacketsIcmp(value: number) {
    this._revEgressPacketsIcmp = value;
  }
  public resetRevEgressPacketsIcmp() {
    this._revEgressPacketsIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revEgressPacketsIcmpInput() {
    return this._revEgressPacketsIcmp;
  }

  // rev_egress_packets_others - computed: false, optional: true, required: false
  private _revEgressPacketsOthers?: number; 
  public get revEgressPacketsOthers() {
    return this.getNumberAttribute('rev_egress_packets_others');
  }
  public set revEgressPacketsOthers(value: number) {
    this._revEgressPacketsOthers = value;
  }
  public resetRevEgressPacketsOthers() {
    this._revEgressPacketsOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revEgressPacketsOthersInput() {
    return this._revEgressPacketsOthers;
  }

  // rev_egress_packets_tcp - computed: false, optional: true, required: false
  private _revEgressPacketsTcp?: number; 
  public get revEgressPacketsTcp() {
    return this.getNumberAttribute('rev_egress_packets_tcp');
  }
  public set revEgressPacketsTcp(value: number) {
    this._revEgressPacketsTcp = value;
  }
  public resetRevEgressPacketsTcp() {
    this._revEgressPacketsTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revEgressPacketsTcpInput() {
    return this._revEgressPacketsTcp;
  }

  // rev_egress_packets_udp - computed: false, optional: true, required: false
  private _revEgressPacketsUdp?: number; 
  public get revEgressPacketsUdp() {
    return this.getNumberAttribute('rev_egress_packets_udp');
  }
  public set revEgressPacketsUdp(value: number) {
    this._revEgressPacketsUdp = value;
  }
  public resetRevEgressPacketsUdp() {
    this._revEgressPacketsUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revEgressPacketsUdpInput() {
    return this._revEgressPacketsUdp;
  }

  // rev_egress_pkt_size_range1 - computed: false, optional: true, required: false
  private _revEgressPktSizeRange1?: number; 
  public get revEgressPktSizeRange1() {
    return this.getNumberAttribute('rev_egress_pkt_size_range1');
  }
  public set revEgressPktSizeRange1(value: number) {
    this._revEgressPktSizeRange1 = value;
  }
  public resetRevEgressPktSizeRange1() {
    this._revEgressPktSizeRange1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revEgressPktSizeRange1Input() {
    return this._revEgressPktSizeRange1;
  }

  // rev_egress_pkt_size_range2 - computed: false, optional: true, required: false
  private _revEgressPktSizeRange2?: number; 
  public get revEgressPktSizeRange2() {
    return this.getNumberAttribute('rev_egress_pkt_size_range2');
  }
  public set revEgressPktSizeRange2(value: number) {
    this._revEgressPktSizeRange2 = value;
  }
  public resetRevEgressPktSizeRange2() {
    this._revEgressPktSizeRange2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revEgressPktSizeRange2Input() {
    return this._revEgressPktSizeRange2;
  }

  // rev_egress_pkt_size_range3 - computed: false, optional: true, required: false
  private _revEgressPktSizeRange3?: number; 
  public get revEgressPktSizeRange3() {
    return this.getNumberAttribute('rev_egress_pkt_size_range3');
  }
  public set revEgressPktSizeRange3(value: number) {
    this._revEgressPktSizeRange3 = value;
  }
  public resetRevEgressPktSizeRange3() {
    this._revEgressPktSizeRange3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revEgressPktSizeRange3Input() {
    return this._revEgressPktSizeRange3;
  }

  // rev_egress_pkt_size_range4 - computed: false, optional: true, required: false
  private _revEgressPktSizeRange4?: number; 
  public get revEgressPktSizeRange4() {
    return this.getNumberAttribute('rev_egress_pkt_size_range4');
  }
  public set revEgressPktSizeRange4(value: number) {
    this._revEgressPktSizeRange4 = value;
  }
  public resetRevEgressPktSizeRange4() {
    this._revEgressPktSizeRange4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revEgressPktSizeRange4Input() {
    return this._revEgressPktSizeRange4;
  }

  // rev_ingress_bytes_icmp - computed: false, optional: true, required: false
  private _revIngressBytesIcmp?: number; 
  public get revIngressBytesIcmp() {
    return this.getNumberAttribute('rev_ingress_bytes_icmp');
  }
  public set revIngressBytesIcmp(value: number) {
    this._revIngressBytesIcmp = value;
  }
  public resetRevIngressBytesIcmp() {
    this._revIngressBytesIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revIngressBytesIcmpInput() {
    return this._revIngressBytesIcmp;
  }

  // rev_ingress_bytes_others - computed: false, optional: true, required: false
  private _revIngressBytesOthers?: number; 
  public get revIngressBytesOthers() {
    return this.getNumberAttribute('rev_ingress_bytes_others');
  }
  public set revIngressBytesOthers(value: number) {
    this._revIngressBytesOthers = value;
  }
  public resetRevIngressBytesOthers() {
    this._revIngressBytesOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revIngressBytesOthersInput() {
    return this._revIngressBytesOthers;
  }

  // rev_ingress_bytes_tcp - computed: false, optional: true, required: false
  private _revIngressBytesTcp?: number; 
  public get revIngressBytesTcp() {
    return this.getNumberAttribute('rev_ingress_bytes_tcp');
  }
  public set revIngressBytesTcp(value: number) {
    this._revIngressBytesTcp = value;
  }
  public resetRevIngressBytesTcp() {
    this._revIngressBytesTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revIngressBytesTcpInput() {
    return this._revIngressBytesTcp;
  }

  // rev_ingress_bytes_udp - computed: false, optional: true, required: false
  private _revIngressBytesUdp?: number; 
  public get revIngressBytesUdp() {
    return this.getNumberAttribute('rev_ingress_bytes_udp');
  }
  public set revIngressBytesUdp(value: number) {
    this._revIngressBytesUdp = value;
  }
  public resetRevIngressBytesUdp() {
    this._revIngressBytesUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revIngressBytesUdpInput() {
    return this._revIngressBytesUdp;
  }

  // rev_ingress_packets_icmp - computed: false, optional: true, required: false
  private _revIngressPacketsIcmp?: number; 
  public get revIngressPacketsIcmp() {
    return this.getNumberAttribute('rev_ingress_packets_icmp');
  }
  public set revIngressPacketsIcmp(value: number) {
    this._revIngressPacketsIcmp = value;
  }
  public resetRevIngressPacketsIcmp() {
    this._revIngressPacketsIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revIngressPacketsIcmpInput() {
    return this._revIngressPacketsIcmp;
  }

  // rev_ingress_packets_others - computed: false, optional: true, required: false
  private _revIngressPacketsOthers?: number; 
  public get revIngressPacketsOthers() {
    return this.getNumberAttribute('rev_ingress_packets_others');
  }
  public set revIngressPacketsOthers(value: number) {
    this._revIngressPacketsOthers = value;
  }
  public resetRevIngressPacketsOthers() {
    this._revIngressPacketsOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revIngressPacketsOthersInput() {
    return this._revIngressPacketsOthers;
  }

  // rev_ingress_packets_tcp - computed: false, optional: true, required: false
  private _revIngressPacketsTcp?: number; 
  public get revIngressPacketsTcp() {
    return this.getNumberAttribute('rev_ingress_packets_tcp');
  }
  public set revIngressPacketsTcp(value: number) {
    this._revIngressPacketsTcp = value;
  }
  public resetRevIngressPacketsTcp() {
    this._revIngressPacketsTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revIngressPacketsTcpInput() {
    return this._revIngressPacketsTcp;
  }

  // rev_ingress_packets_udp - computed: false, optional: true, required: false
  private _revIngressPacketsUdp?: number; 
  public get revIngressPacketsUdp() {
    return this.getNumberAttribute('rev_ingress_packets_udp');
  }
  public set revIngressPacketsUdp(value: number) {
    this._revIngressPacketsUdp = value;
  }
  public resetRevIngressPacketsUdp() {
    this._revIngressPacketsUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revIngressPacketsUdpInput() {
    return this._revIngressPacketsUdp;
  }

  // rev_ingress_pkt_size_range1 - computed: false, optional: true, required: false
  private _revIngressPktSizeRange1?: number; 
  public get revIngressPktSizeRange1() {
    return this.getNumberAttribute('rev_ingress_pkt_size_range1');
  }
  public set revIngressPktSizeRange1(value: number) {
    this._revIngressPktSizeRange1 = value;
  }
  public resetRevIngressPktSizeRange1() {
    this._revIngressPktSizeRange1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revIngressPktSizeRange1Input() {
    return this._revIngressPktSizeRange1;
  }

  // rev_ingress_pkt_size_range2 - computed: false, optional: true, required: false
  private _revIngressPktSizeRange2?: number; 
  public get revIngressPktSizeRange2() {
    return this.getNumberAttribute('rev_ingress_pkt_size_range2');
  }
  public set revIngressPktSizeRange2(value: number) {
    this._revIngressPktSizeRange2 = value;
  }
  public resetRevIngressPktSizeRange2() {
    this._revIngressPktSizeRange2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revIngressPktSizeRange2Input() {
    return this._revIngressPktSizeRange2;
  }

  // rev_ingress_pkt_size_range3 - computed: false, optional: true, required: false
  private _revIngressPktSizeRange3?: number; 
  public get revIngressPktSizeRange3() {
    return this.getNumberAttribute('rev_ingress_pkt_size_range3');
  }
  public set revIngressPktSizeRange3(value: number) {
    this._revIngressPktSizeRange3 = value;
  }
  public resetRevIngressPktSizeRange3() {
    this._revIngressPktSizeRange3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revIngressPktSizeRange3Input() {
    return this._revIngressPktSizeRange3;
  }

  // rev_ingress_pkt_size_range4 - computed: false, optional: true, required: false
  private _revIngressPktSizeRange4?: number; 
  public get revIngressPktSizeRange4() {
    return this.getNumberAttribute('rev_ingress_pkt_size_range4');
  }
  public set revIngressPktSizeRange4(value: number) {
    this._revIngressPktSizeRange4 = value;
  }
  public resetRevIngressPktSizeRange4() {
    this._revIngressPktSizeRange4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revIngressPktSizeRange4Input() {
    return this._revIngressPktSizeRange4;
  }

  // tcp_fullcone_created - computed: false, optional: true, required: false
  private _tcpFullconeCreated?: number; 
  public get tcpFullconeCreated() {
    return this.getNumberAttribute('tcp_fullcone_created');
  }
  public set tcpFullconeCreated(value: number) {
    this._tcpFullconeCreated = value;
  }
  public resetTcpFullconeCreated() {
    this._tcpFullconeCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFullconeCreatedInput() {
    return this._tcpFullconeCreated;
  }

  // tcp_fullcone_freed - computed: false, optional: true, required: false
  private _tcpFullconeFreed?: number; 
  public get tcpFullconeFreed() {
    return this.getNumberAttribute('tcp_fullcone_freed');
  }
  public set tcpFullconeFreed(value: number) {
    this._tcpFullconeFreed = value;
  }
  public resetTcpFullconeFreed() {
    this._tcpFullconeFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFullconeFreedInput() {
    return this._tcpFullconeFreed;
  }

  // udp_fullcone_created - computed: false, optional: true, required: false
  private _udpFullconeCreated?: number; 
  public get udpFullconeCreated() {
    return this.getNumberAttribute('udp_fullcone_created');
  }
  public set udpFullconeCreated(value: number) {
    this._udpFullconeCreated = value;
  }
  public resetUdpFullconeCreated() {
    this._udpFullconeCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFullconeCreatedInput() {
    return this._udpFullconeCreated;
  }

  // udp_fullcone_freed - computed: false, optional: true, required: false
  private _udpFullconeFreed?: number; 
  public get udpFullconeFreed() {
    return this.getNumberAttribute('udp_fullcone_freed');
  }
  public set udpFullconeFreed(value: number) {
    this._udpFullconeFreed = value;
  }
  public resetUdpFullconeFreed() {
    this._udpFullconeFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFullconeFreedInput() {
    return this._udpFullconeFreed;
  }

  // undetermined_rule_counter - computed: false, optional: true, required: false
  private _undeterminedRuleCounter?: number; 
  public get undeterminedRuleCounter() {
    return this.getNumberAttribute('undetermined_rule_counter');
  }
  public set undeterminedRuleCounter(value: number) {
    this._undeterminedRuleCounter = value;
  }
  public resetUndeterminedRuleCounter() {
    this._undeterminedRuleCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get undeterminedRuleCounterInput() {
    return this._undeterminedRuleCounter;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats thunder_fw_global_stats}
*/
export class DataThunderFwGlobalStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_global_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderFwGlobalStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderFwGlobalStats to import
  * @param importFromId The id of the existing DataThunderFwGlobalStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderFwGlobalStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_global_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_global_stats thunder_fw_global_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderFwGlobalStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderFwGlobalStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_global_stats',
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
  private _stats = new DataThunderFwGlobalStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderFwGlobalStatsStats) {
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
      stats: dataThunderFwGlobalStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderFwGlobalStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFwGlobalStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
