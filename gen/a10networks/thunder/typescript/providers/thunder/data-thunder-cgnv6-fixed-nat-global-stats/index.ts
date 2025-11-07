// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6FixedNatGlobalStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#id DataThunderCgnv6FixedNatGlobalStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#stats DataThunderCgnv6FixedNatGlobalStats#stats}
  */
  readonly stats?: DataThunderCgnv6FixedNatGlobalStatsStats;
}
export interface DataThunderCgnv6FixedNatGlobalStatsStats {
  /**
  * Active Subscriber Added
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#active_subscriber_added DataThunderCgnv6FixedNatGlobalStats#active_subscriber_added}
  */
  readonly activeSubscriberAdded?: number;
  /**
  * Active Subscriber Removed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#active_subscriber_removed DataThunderCgnv6FixedNatGlobalStats#active_subscriber_removed}
  */
  readonly activeSubscriberRemoved?: number;
  /**
  * Fixed NAT Config not Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#config_not_found DataThunderCgnv6FixedNatGlobalStats#config_not_found}
  */
  readonly configNotFound?: number;
  /**
  * Fixed NAT Dest Rule List Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#dest_rlist_drop DataThunderCgnv6FixedNatGlobalStats#dest_rlist_drop}
  */
  readonly destRlistDrop?: number;
  /**
  * Fixed NAT Dest Rule List Pass-Through
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#dest_rlist_pass_through DataThunderCgnv6FixedNatGlobalStats#dest_rlist_pass_through}
  */
  readonly destRlistPassThrough?: number;
  /**
  * Fixed NAT Dest Rules List Source NAT Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#dest_rlist_snat_drop DataThunderCgnv6FixedNatGlobalStats#dest_rlist_snat_drop}
  */
  readonly destRlistSnatDrop?: number;
  /**
  * DS-Lite Data Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#dslite_data_session_created DataThunderCgnv6FixedNatGlobalStats#dslite_data_session_created}
  */
  readonly dsliteDataSessionCreated?: number;
  /**
  * DS-Lite Data Sessions Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#dslite_data_session_freed DataThunderCgnv6FixedNatGlobalStats#dslite_data_session_freed}
  */
  readonly dsliteDataSessionFreed?: number;
  /**
  * DS-Lite Endpoint-Independent-Filtering Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#dslite_eif_limit_exceeded DataThunderCgnv6FixedNatGlobalStats#dslite_eif_limit_exceeded}
  */
  readonly dsliteEifLimitExceeded?: number;
  /**
  * DS-Lite Endpoint-Independent-Filtering Matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#dslite_eif_match DataThunderCgnv6FixedNatGlobalStats#dslite_eif_match}
  */
  readonly dsliteEifMatch?: number;
  /**
  * DS-Lite Endpoint-Independent-Mapping Matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#dslite_eim_match DataThunderCgnv6FixedNatGlobalStats#dslite_eim_match}
  */
  readonly dsliteEimMatch?: number;
  /**
  * DS-Lite Hairpin Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#dslite_hairpin DataThunderCgnv6FixedNatGlobalStats#dslite_hairpin}
  */
  readonly dsliteHairpin?: number;
  /**
  * DS-Lite Endpoint-Dependent Filtering Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#dslite_inbound_filtered DataThunderCgnv6FixedNatGlobalStats#dslite_inbound_filtered}
  */
  readonly dsliteInboundFiltered?: number;
  /**
  * DS-Lite TCP Full-Cone Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#dslite_tcp_fullcone_created DataThunderCgnv6FixedNatGlobalStats#dslite_tcp_fullcone_created}
  */
  readonly dsliteTcpFullconeCreated?: number;
  /**
  * DS-Lite TCP Full-Cone Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#dslite_tcp_fullcone_freed DataThunderCgnv6FixedNatGlobalStats#dslite_tcp_fullcone_freed}
  */
  readonly dsliteTcpFullconeFreed?: number;
  /**
  * DS-Lite UDP ALG Full-Cone Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#dslite_udp_alg_fullcone_created DataThunderCgnv6FixedNatGlobalStats#dslite_udp_alg_fullcone_created}
  */
  readonly dsliteUdpAlgFullconeCreated?: number;
  /**
  * DS-Lite UDP ALG Full-Cone Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#dslite_udp_alg_fullcone_freed DataThunderCgnv6FixedNatGlobalStats#dslite_udp_alg_fullcone_freed}
  */
  readonly dsliteUdpAlgFullconeFreed?: number;
  /**
  * DS-Lite UDP Full-Cone Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#dslite_udp_fullcone_created DataThunderCgnv6FixedNatGlobalStats#dslite_udp_fullcone_created}
  */
  readonly dsliteUdpFullconeCreated?: number;
  /**
  * DS-Lite UDP Full-Cone Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#dslite_udp_fullcone_freed DataThunderCgnv6FixedNatGlobalStats#dslite_udp_fullcone_freed}
  */
  readonly dsliteUdpFullconeFreed?: number;
  /**
  * Self-Hairpinning Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fixed_nat_fullcone_self_hairpinning_drop DataThunderCgnv6FixedNatGlobalStats#fixed_nat_fullcone_self_hairpinning_drop}
  */
  readonly fixedNatFullconeSelfHairpinningDrop?: number;
  /**
  * Fixed NAT44 Forward Egress Bytes ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_fwd_egress_bytes_icmp DataThunderCgnv6FixedNatGlobalStats#fnat44_fwd_egress_bytes_icmp}
  */
  readonly fnat44FwdEgressBytesIcmp?: number;
  /**
  * Fixed NAT44 Forward Egress Bytes OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_fwd_egress_bytes_others DataThunderCgnv6FixedNatGlobalStats#fnat44_fwd_egress_bytes_others}
  */
  readonly fnat44FwdEgressBytesOthers?: number;
  /**
  * Fixed NAT44 Forward Egress Bytes TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_fwd_egress_bytes_tcp DataThunderCgnv6FixedNatGlobalStats#fnat44_fwd_egress_bytes_tcp}
  */
  readonly fnat44FwdEgressBytesTcp?: number;
  /**
  * Fixed NAT44 Forward Egress Bytes UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_fwd_egress_bytes_udp DataThunderCgnv6FixedNatGlobalStats#fnat44_fwd_egress_bytes_udp}
  */
  readonly fnat44FwdEgressBytesUdp?: number;
  /**
  * Fixed NAT44 Forward Egress Packets ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_fwd_egress_packets_icmp DataThunderCgnv6FixedNatGlobalStats#fnat44_fwd_egress_packets_icmp}
  */
  readonly fnat44FwdEgressPacketsIcmp?: number;
  /**
  * Fixed NAT44 Forward Egress Packets OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_fwd_egress_packets_others DataThunderCgnv6FixedNatGlobalStats#fnat44_fwd_egress_packets_others}
  */
  readonly fnat44FwdEgressPacketsOthers?: number;
  /**
  * Fixed NAT44 Forward Egress Packets TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_fwd_egress_packets_tcp DataThunderCgnv6FixedNatGlobalStats#fnat44_fwd_egress_packets_tcp}
  */
  readonly fnat44FwdEgressPacketsTcp?: number;
  /**
  * Fixed NAT44 Forward Egress Packets UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_fwd_egress_packets_udp DataThunderCgnv6FixedNatGlobalStats#fnat44_fwd_egress_packets_udp}
  */
  readonly fnat44FwdEgressPacketsUdp?: number;
  /**
  * Fixed NAT44 Forward Egress Packet size between 0 and 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_fwd_egress_pkt_size_range1 DataThunderCgnv6FixedNatGlobalStats#fnat44_fwd_egress_pkt_size_range1}
  */
  readonly fnat44FwdEgressPktSizeRange1?: number;
  /**
  * Fixed NAT44 Forward Egress Packet size between 201 and 800
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_fwd_egress_pkt_size_range2 DataThunderCgnv6FixedNatGlobalStats#fnat44_fwd_egress_pkt_size_range2}
  */
  readonly fnat44FwdEgressPktSizeRange2?: number;
  /**
  * Fixed NAT44 Forward Egress Packet size between 801 and 1550
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_fwd_egress_pkt_size_range3 DataThunderCgnv6FixedNatGlobalStats#fnat44_fwd_egress_pkt_size_range3}
  */
  readonly fnat44FwdEgressPktSizeRange3?: number;
  /**
  * Fixed NAT44 Forward Egress Packet size between 1551 and 9000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_fwd_egress_pkt_size_range4 DataThunderCgnv6FixedNatGlobalStats#fnat44_fwd_egress_pkt_size_range4}
  */
  readonly fnat44FwdEgressPktSizeRange4?: number;
  /**
  * Fixed NAT44 Forward Ingress Bytes ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_fwd_ingress_bytes_icmp DataThunderCgnv6FixedNatGlobalStats#fnat44_fwd_ingress_bytes_icmp}
  */
  readonly fnat44FwdIngressBytesIcmp?: number;
  /**
  * Fixed NAT44 Forward Ingress Bytes OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_fwd_ingress_bytes_others DataThunderCgnv6FixedNatGlobalStats#fnat44_fwd_ingress_bytes_others}
  */
  readonly fnat44FwdIngressBytesOthers?: number;
  /**
  * Fixed NAT44 Forward Ingress Bytes TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_fwd_ingress_bytes_tcp DataThunderCgnv6FixedNatGlobalStats#fnat44_fwd_ingress_bytes_tcp}
  */
  readonly fnat44FwdIngressBytesTcp?: number;
  /**
  * Fixed NAT44 Forward Ingress Bytes UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_fwd_ingress_bytes_udp DataThunderCgnv6FixedNatGlobalStats#fnat44_fwd_ingress_bytes_udp}
  */
  readonly fnat44FwdIngressBytesUdp?: number;
  /**
  * Fixed NAT44 Forward Ingress Packets ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_fwd_ingress_packets_icmp DataThunderCgnv6FixedNatGlobalStats#fnat44_fwd_ingress_packets_icmp}
  */
  readonly fnat44FwdIngressPacketsIcmp?: number;
  /**
  * Fixed NAT44 Forward Ingress Packets OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_fwd_ingress_packets_others DataThunderCgnv6FixedNatGlobalStats#fnat44_fwd_ingress_packets_others}
  */
  readonly fnat44FwdIngressPacketsOthers?: number;
  /**
  * Fixed NAT44 Forward Ingress Packets TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_fwd_ingress_packets_tcp DataThunderCgnv6FixedNatGlobalStats#fnat44_fwd_ingress_packets_tcp}
  */
  readonly fnat44FwdIngressPacketsTcp?: number;
  /**
  * Fixed NAT44 Forward Ingress Packets UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_fwd_ingress_packets_udp DataThunderCgnv6FixedNatGlobalStats#fnat44_fwd_ingress_packets_udp}
  */
  readonly fnat44FwdIngressPacketsUdp?: number;
  /**
  * Fixed NAT44 Forward Ingress Packet size between 0 and 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_fwd_ingress_pkt_size_range1 DataThunderCgnv6FixedNatGlobalStats#fnat44_fwd_ingress_pkt_size_range1}
  */
  readonly fnat44FwdIngressPktSizeRange1?: number;
  /**
  * Fixed NAT44 Forward Ingress Packet size between 201 and 800
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_fwd_ingress_pkt_size_range2 DataThunderCgnv6FixedNatGlobalStats#fnat44_fwd_ingress_pkt_size_range2}
  */
  readonly fnat44FwdIngressPktSizeRange2?: number;
  /**
  * Fixed NAT44 Forward Ingress Packet size between 801 and 1550
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_fwd_ingress_pkt_size_range3 DataThunderCgnv6FixedNatGlobalStats#fnat44_fwd_ingress_pkt_size_range3}
  */
  readonly fnat44FwdIngressPktSizeRange3?: number;
  /**
  * Fixed NAT44 Forward Ingress Packet size between 1551 and 9000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_fwd_ingress_pkt_size_range4 DataThunderCgnv6FixedNatGlobalStats#fnat44_fwd_ingress_pkt_size_range4}
  */
  readonly fnat44FwdIngressPktSizeRange4?: number;
  /**
  * Fixed NAT44 Reverse Egress Bytes ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_rev_egress_bytes_icmp DataThunderCgnv6FixedNatGlobalStats#fnat44_rev_egress_bytes_icmp}
  */
  readonly fnat44RevEgressBytesIcmp?: number;
  /**
  * Fixed NAT44 Reverse Egress Bytes OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_rev_egress_bytes_others DataThunderCgnv6FixedNatGlobalStats#fnat44_rev_egress_bytes_others}
  */
  readonly fnat44RevEgressBytesOthers?: number;
  /**
  * Fixed NAT44 Reverse Egress Bytes TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_rev_egress_bytes_tcp DataThunderCgnv6FixedNatGlobalStats#fnat44_rev_egress_bytes_tcp}
  */
  readonly fnat44RevEgressBytesTcp?: number;
  /**
  * Fixed NAT44 Reverse Egress Bytes UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_rev_egress_bytes_udp DataThunderCgnv6FixedNatGlobalStats#fnat44_rev_egress_bytes_udp}
  */
  readonly fnat44RevEgressBytesUdp?: number;
  /**
  * Fixed NAT44 Reverse Egress Packets ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_rev_egress_packets_icmp DataThunderCgnv6FixedNatGlobalStats#fnat44_rev_egress_packets_icmp}
  */
  readonly fnat44RevEgressPacketsIcmp?: number;
  /**
  * Fixed NAT44 Reverse Egress Packets OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_rev_egress_packets_others DataThunderCgnv6FixedNatGlobalStats#fnat44_rev_egress_packets_others}
  */
  readonly fnat44RevEgressPacketsOthers?: number;
  /**
  * Fixed NAT44 Reverse Egress Packets TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_rev_egress_packets_tcp DataThunderCgnv6FixedNatGlobalStats#fnat44_rev_egress_packets_tcp}
  */
  readonly fnat44RevEgressPacketsTcp?: number;
  /**
  * Fixed NAT44 Reverse Egress Packets UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_rev_egress_packets_udp DataThunderCgnv6FixedNatGlobalStats#fnat44_rev_egress_packets_udp}
  */
  readonly fnat44RevEgressPacketsUdp?: number;
  /**
  * Fixed NAT44 Reverse Egress Packet size between 0 and 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_rev_egress_pkt_size_range1 DataThunderCgnv6FixedNatGlobalStats#fnat44_rev_egress_pkt_size_range1}
  */
  readonly fnat44RevEgressPktSizeRange1?: number;
  /**
  * Fixed NAT44 Reverse Egress Packet size between 201 and 800
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_rev_egress_pkt_size_range2 DataThunderCgnv6FixedNatGlobalStats#fnat44_rev_egress_pkt_size_range2}
  */
  readonly fnat44RevEgressPktSizeRange2?: number;
  /**
  * Fixed NAT44 Reverse Egress Packet size between 801 and 1550
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_rev_egress_pkt_size_range3 DataThunderCgnv6FixedNatGlobalStats#fnat44_rev_egress_pkt_size_range3}
  */
  readonly fnat44RevEgressPktSizeRange3?: number;
  /**
  * Fixed NAT44 Reverse Egress Packet size between 1551 and 9000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_rev_egress_pkt_size_range4 DataThunderCgnv6FixedNatGlobalStats#fnat44_rev_egress_pkt_size_range4}
  */
  readonly fnat44RevEgressPktSizeRange4?: number;
  /**
  * Fixed NAT44 Reverse Ingress Bytes ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_rev_ingress_bytes_icmp DataThunderCgnv6FixedNatGlobalStats#fnat44_rev_ingress_bytes_icmp}
  */
  readonly fnat44RevIngressBytesIcmp?: number;
  /**
  * Fixed NAT44 Reverse Ingress Bytes OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_rev_ingress_bytes_others DataThunderCgnv6FixedNatGlobalStats#fnat44_rev_ingress_bytes_others}
  */
  readonly fnat44RevIngressBytesOthers?: number;
  /**
  * Fixed NAT44 Reverse Ingress Bytes TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_rev_ingress_bytes_tcp DataThunderCgnv6FixedNatGlobalStats#fnat44_rev_ingress_bytes_tcp}
  */
  readonly fnat44RevIngressBytesTcp?: number;
  /**
  * Fixed NAT44 Reverse Ingress Bytes UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_rev_ingress_bytes_udp DataThunderCgnv6FixedNatGlobalStats#fnat44_rev_ingress_bytes_udp}
  */
  readonly fnat44RevIngressBytesUdp?: number;
  /**
  * Fixed NAT44 Reverse Ingress Packets ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_rev_ingress_packets_icmp DataThunderCgnv6FixedNatGlobalStats#fnat44_rev_ingress_packets_icmp}
  */
  readonly fnat44RevIngressPacketsIcmp?: number;
  /**
  * Fixed NAT44 Reverse Ingress Packets OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_rev_ingress_packets_others DataThunderCgnv6FixedNatGlobalStats#fnat44_rev_ingress_packets_others}
  */
  readonly fnat44RevIngressPacketsOthers?: number;
  /**
  * Fixed NAT44 Reverse Ingress Packets TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_rev_ingress_packets_tcp DataThunderCgnv6FixedNatGlobalStats#fnat44_rev_ingress_packets_tcp}
  */
  readonly fnat44RevIngressPacketsTcp?: number;
  /**
  * Fixed NAT44 Reverse Ingress Packets UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_rev_ingress_packets_udp DataThunderCgnv6FixedNatGlobalStats#fnat44_rev_ingress_packets_udp}
  */
  readonly fnat44RevIngressPacketsUdp?: number;
  /**
  * Fixed NAT44 Reverse Ingress Packet size between 0 and 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_rev_ingress_pkt_size_range1 DataThunderCgnv6FixedNatGlobalStats#fnat44_rev_ingress_pkt_size_range1}
  */
  readonly fnat44RevIngressPktSizeRange1?: number;
  /**
  * Fixed NAT44 Reverse Ingress Packet size between 201 and 800
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_rev_ingress_pkt_size_range2 DataThunderCgnv6FixedNatGlobalStats#fnat44_rev_ingress_pkt_size_range2}
  */
  readonly fnat44RevIngressPktSizeRange2?: number;
  /**
  * Fixed NAT44 Reverse Ingress Packet size between 801 and 1550
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_rev_ingress_pkt_size_range3 DataThunderCgnv6FixedNatGlobalStats#fnat44_rev_ingress_pkt_size_range3}
  */
  readonly fnat44RevIngressPktSizeRange3?: number;
  /**
  * Fixed NAT44 Reverse Ingress Packet size between 1551 and 9000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat44_rev_ingress_pkt_size_range4 DataThunderCgnv6FixedNatGlobalStats#fnat44_rev_ingress_pkt_size_range4}
  */
  readonly fnat44RevIngressPktSizeRange4?: number;
  /**
  * Fixed NAT64 Forward Egress Bytes ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_fwd_egress_bytes_icmp DataThunderCgnv6FixedNatGlobalStats#fnat64_fwd_egress_bytes_icmp}
  */
  readonly fnat64FwdEgressBytesIcmp?: number;
  /**
  * Fixed NAT64 Forward Egress Bytes OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_fwd_egress_bytes_others DataThunderCgnv6FixedNatGlobalStats#fnat64_fwd_egress_bytes_others}
  */
  readonly fnat64FwdEgressBytesOthers?: number;
  /**
  * Fixed NAT64 Forward Egress Bytes TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_fwd_egress_bytes_tcp DataThunderCgnv6FixedNatGlobalStats#fnat64_fwd_egress_bytes_tcp}
  */
  readonly fnat64FwdEgressBytesTcp?: number;
  /**
  * Fixed NAT64 Forward Egress Bytes UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_fwd_egress_bytes_udp DataThunderCgnv6FixedNatGlobalStats#fnat64_fwd_egress_bytes_udp}
  */
  readonly fnat64FwdEgressBytesUdp?: number;
  /**
  * Fixed NAT64 Forward Egress Packets ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_fwd_egress_packets_icmp DataThunderCgnv6FixedNatGlobalStats#fnat64_fwd_egress_packets_icmp}
  */
  readonly fnat64FwdEgressPacketsIcmp?: number;
  /**
  * Fixed NAT64 Forward Egress Packets OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_fwd_egress_packets_others DataThunderCgnv6FixedNatGlobalStats#fnat64_fwd_egress_packets_others}
  */
  readonly fnat64FwdEgressPacketsOthers?: number;
  /**
  * Fixed NAT64 Forward Egress Packets TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_fwd_egress_packets_tcp DataThunderCgnv6FixedNatGlobalStats#fnat64_fwd_egress_packets_tcp}
  */
  readonly fnat64FwdEgressPacketsTcp?: number;
  /**
  * Fixed NAT64 Forward Egress Packets UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_fwd_egress_packets_udp DataThunderCgnv6FixedNatGlobalStats#fnat64_fwd_egress_packets_udp}
  */
  readonly fnat64FwdEgressPacketsUdp?: number;
  /**
  * Fixed NAT64 Forward Egress Packet size between 0 and 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_fwd_egress_pkt_size_range1 DataThunderCgnv6FixedNatGlobalStats#fnat64_fwd_egress_pkt_size_range1}
  */
  readonly fnat64FwdEgressPktSizeRange1?: number;
  /**
  * Fixed NAT64 Forward Egress Packet size between 201 and 800
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_fwd_egress_pkt_size_range2 DataThunderCgnv6FixedNatGlobalStats#fnat64_fwd_egress_pkt_size_range2}
  */
  readonly fnat64FwdEgressPktSizeRange2?: number;
  /**
  * Fixed NAT64 Forward Egress Packet size between 801 and 1550
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_fwd_egress_pkt_size_range3 DataThunderCgnv6FixedNatGlobalStats#fnat64_fwd_egress_pkt_size_range3}
  */
  readonly fnat64FwdEgressPktSizeRange3?: number;
  /**
  * Fixed NAT64 Forward Egress Packet size between 1551 and 9000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_fwd_egress_pkt_size_range4 DataThunderCgnv6FixedNatGlobalStats#fnat64_fwd_egress_pkt_size_range4}
  */
  readonly fnat64FwdEgressPktSizeRange4?: number;
  /**
  * Fixed NAT64 Forward Ingress Bytes ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_fwd_ingress_bytes_icmp DataThunderCgnv6FixedNatGlobalStats#fnat64_fwd_ingress_bytes_icmp}
  */
  readonly fnat64FwdIngressBytesIcmp?: number;
  /**
  * Fixed NAT64 Forward Ingress Bytes OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_fwd_ingress_bytes_others DataThunderCgnv6FixedNatGlobalStats#fnat64_fwd_ingress_bytes_others}
  */
  readonly fnat64FwdIngressBytesOthers?: number;
  /**
  * Fixed NAT64 Forward Ingress Bytes TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_fwd_ingress_bytes_tcp DataThunderCgnv6FixedNatGlobalStats#fnat64_fwd_ingress_bytes_tcp}
  */
  readonly fnat64FwdIngressBytesTcp?: number;
  /**
  * Fixed NAT64 Forward Ingress Bytes UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_fwd_ingress_bytes_udp DataThunderCgnv6FixedNatGlobalStats#fnat64_fwd_ingress_bytes_udp}
  */
  readonly fnat64FwdIngressBytesUdp?: number;
  /**
  * Fixed NAT64 Forward Ingress Packets ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_fwd_ingress_packets_icmp DataThunderCgnv6FixedNatGlobalStats#fnat64_fwd_ingress_packets_icmp}
  */
  readonly fnat64FwdIngressPacketsIcmp?: number;
  /**
  * Fixed NAT64 Forward Ingress Packets OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_fwd_ingress_packets_others DataThunderCgnv6FixedNatGlobalStats#fnat64_fwd_ingress_packets_others}
  */
  readonly fnat64FwdIngressPacketsOthers?: number;
  /**
  * Fixed NAT64 Forward Ingress Packets TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_fwd_ingress_packets_tcp DataThunderCgnv6FixedNatGlobalStats#fnat64_fwd_ingress_packets_tcp}
  */
  readonly fnat64FwdIngressPacketsTcp?: number;
  /**
  * Fixed NAT64 Forward Ingress Packets UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_fwd_ingress_packets_udp DataThunderCgnv6FixedNatGlobalStats#fnat64_fwd_ingress_packets_udp}
  */
  readonly fnat64FwdIngressPacketsUdp?: number;
  /**
  * Fixed NAT64 Forward Ingress Packet size between 0 and 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_fwd_ingress_pkt_size_range1 DataThunderCgnv6FixedNatGlobalStats#fnat64_fwd_ingress_pkt_size_range1}
  */
  readonly fnat64FwdIngressPktSizeRange1?: number;
  /**
  * Fixed NAT64 Forward Ingress Packet size between 201 and 800
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_fwd_ingress_pkt_size_range2 DataThunderCgnv6FixedNatGlobalStats#fnat64_fwd_ingress_pkt_size_range2}
  */
  readonly fnat64FwdIngressPktSizeRange2?: number;
  /**
  * Fixed NAT64 Forward Ingress Packet size between 801 and 1550
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_fwd_ingress_pkt_size_range3 DataThunderCgnv6FixedNatGlobalStats#fnat64_fwd_ingress_pkt_size_range3}
  */
  readonly fnat64FwdIngressPktSizeRange3?: number;
  /**
  * Fixed NAT64 Forward Ingress Packet size between 1551 and 9000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_fwd_ingress_pkt_size_range4 DataThunderCgnv6FixedNatGlobalStats#fnat64_fwd_ingress_pkt_size_range4}
  */
  readonly fnat64FwdIngressPktSizeRange4?: number;
  /**
  * Fixed NAT64 Reverse Egress Bytes ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_rev_egress_bytes_icmp DataThunderCgnv6FixedNatGlobalStats#fnat64_rev_egress_bytes_icmp}
  */
  readonly fnat64RevEgressBytesIcmp?: number;
  /**
  * Fixed NAT64 Reverse Egress Bytes OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_rev_egress_bytes_others DataThunderCgnv6FixedNatGlobalStats#fnat64_rev_egress_bytes_others}
  */
  readonly fnat64RevEgressBytesOthers?: number;
  /**
  * Fixed NAT64 Reverse Egress Bytes TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_rev_egress_bytes_tcp DataThunderCgnv6FixedNatGlobalStats#fnat64_rev_egress_bytes_tcp}
  */
  readonly fnat64RevEgressBytesTcp?: number;
  /**
  * Fixed NAT64 Reverse Egress Bytes UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_rev_egress_bytes_udp DataThunderCgnv6FixedNatGlobalStats#fnat64_rev_egress_bytes_udp}
  */
  readonly fnat64RevEgressBytesUdp?: number;
  /**
  * Fixed NAT64 Reverse Egress Packets ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_rev_egress_packets_icmp DataThunderCgnv6FixedNatGlobalStats#fnat64_rev_egress_packets_icmp}
  */
  readonly fnat64RevEgressPacketsIcmp?: number;
  /**
  * Fixed NAT64 Reverse Egress Packets OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_rev_egress_packets_others DataThunderCgnv6FixedNatGlobalStats#fnat64_rev_egress_packets_others}
  */
  readonly fnat64RevEgressPacketsOthers?: number;
  /**
  * Fixed NAT64 Reverse Egress Packets TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_rev_egress_packets_tcp DataThunderCgnv6FixedNatGlobalStats#fnat64_rev_egress_packets_tcp}
  */
  readonly fnat64RevEgressPacketsTcp?: number;
  /**
  * Fixed NAT64 Reverse Egress Packets UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_rev_egress_packets_udp DataThunderCgnv6FixedNatGlobalStats#fnat64_rev_egress_packets_udp}
  */
  readonly fnat64RevEgressPacketsUdp?: number;
  /**
  * Fixed NAT64 Reverse Egress Packet size between 0 and 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_rev_egress_pkt_size_range1 DataThunderCgnv6FixedNatGlobalStats#fnat64_rev_egress_pkt_size_range1}
  */
  readonly fnat64RevEgressPktSizeRange1?: number;
  /**
  * Fixed NAT64 Reverse Egress Packet size between 201 and 800
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_rev_egress_pkt_size_range2 DataThunderCgnv6FixedNatGlobalStats#fnat64_rev_egress_pkt_size_range2}
  */
  readonly fnat64RevEgressPktSizeRange2?: number;
  /**
  * Fixed NAT64 Reverse Egress Packet size between 801 and 1550
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_rev_egress_pkt_size_range3 DataThunderCgnv6FixedNatGlobalStats#fnat64_rev_egress_pkt_size_range3}
  */
  readonly fnat64RevEgressPktSizeRange3?: number;
  /**
  * Fixed NAT64 Reverse Egress Packet size between 1551 and 9000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_rev_egress_pkt_size_range4 DataThunderCgnv6FixedNatGlobalStats#fnat64_rev_egress_pkt_size_range4}
  */
  readonly fnat64RevEgressPktSizeRange4?: number;
  /**
  * Fixed NAT64 Reverse Ingress Bytes ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_rev_ingress_bytes_icmp DataThunderCgnv6FixedNatGlobalStats#fnat64_rev_ingress_bytes_icmp}
  */
  readonly fnat64RevIngressBytesIcmp?: number;
  /**
  * Fixed NAT64 Reverse Ingress Bytes OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_rev_ingress_bytes_others DataThunderCgnv6FixedNatGlobalStats#fnat64_rev_ingress_bytes_others}
  */
  readonly fnat64RevIngressBytesOthers?: number;
  /**
  * Fixed NAT64 Reverse Ingress Bytes TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_rev_ingress_bytes_tcp DataThunderCgnv6FixedNatGlobalStats#fnat64_rev_ingress_bytes_tcp}
  */
  readonly fnat64RevIngressBytesTcp?: number;
  /**
  * Fixed NAT64 Reverse Ingress Bytes UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_rev_ingress_bytes_udp DataThunderCgnv6FixedNatGlobalStats#fnat64_rev_ingress_bytes_udp}
  */
  readonly fnat64RevIngressBytesUdp?: number;
  /**
  * Fixed NAT64 Reverse Ingress Packets ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_rev_ingress_packets_icmp DataThunderCgnv6FixedNatGlobalStats#fnat64_rev_ingress_packets_icmp}
  */
  readonly fnat64RevIngressPacketsIcmp?: number;
  /**
  * Fixed NAT64 Reverse Ingress Packets OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_rev_ingress_packets_others DataThunderCgnv6FixedNatGlobalStats#fnat64_rev_ingress_packets_others}
  */
  readonly fnat64RevIngressPacketsOthers?: number;
  /**
  * Fixed NAT64 Reverse Ingress Packets TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_rev_ingress_packets_tcp DataThunderCgnv6FixedNatGlobalStats#fnat64_rev_ingress_packets_tcp}
  */
  readonly fnat64RevIngressPacketsTcp?: number;
  /**
  * Fixed NAT64 Reverse Ingress Packets UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_rev_ingress_packets_udp DataThunderCgnv6FixedNatGlobalStats#fnat64_rev_ingress_packets_udp}
  */
  readonly fnat64RevIngressPacketsUdp?: number;
  /**
  * Fixed NAT64 Reverse Ingress Packet size between 0 and 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_rev_ingress_pkt_size_range1 DataThunderCgnv6FixedNatGlobalStats#fnat64_rev_ingress_pkt_size_range1}
  */
  readonly fnat64RevIngressPktSizeRange1?: number;
  /**
  * Fixed NAT64 Reverse Ingress Packet size between 201 and 800
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_rev_ingress_pkt_size_range2 DataThunderCgnv6FixedNatGlobalStats#fnat64_rev_ingress_pkt_size_range2}
  */
  readonly fnat64RevIngressPktSizeRange2?: number;
  /**
  * Fixed NAT64 Reverse Ingress Packet size between 801 and 1550
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_rev_ingress_pkt_size_range3 DataThunderCgnv6FixedNatGlobalStats#fnat64_rev_ingress_pkt_size_range3}
  */
  readonly fnat64RevIngressPktSizeRange3?: number;
  /**
  * Fixed NAT64 Reverse Ingress Packet size between 1551 and 9000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnat64_rev_ingress_pkt_size_range4 DataThunderCgnv6FixedNatGlobalStats#fnat64_rev_ingress_pkt_size_range4}
  */
  readonly fnat64RevIngressPktSizeRange4?: number;
  /**
  * Fixed DS-Lite Forward Egress Bytes ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_fwd_egress_bytes_icmp DataThunderCgnv6FixedNatGlobalStats#fnatdslite_fwd_egress_bytes_icmp}
  */
  readonly fnatdsliteFwdEgressBytesIcmp?: number;
  /**
  * Fixed DS-Lite Forward Egress Bytes OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_fwd_egress_bytes_others DataThunderCgnv6FixedNatGlobalStats#fnatdslite_fwd_egress_bytes_others}
  */
  readonly fnatdsliteFwdEgressBytesOthers?: number;
  /**
  * Fixed DS-Lite Forward Egress Bytes TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_fwd_egress_bytes_tcp DataThunderCgnv6FixedNatGlobalStats#fnatdslite_fwd_egress_bytes_tcp}
  */
  readonly fnatdsliteFwdEgressBytesTcp?: number;
  /**
  * Fixed DS-Lite Forward Egress Bytes UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_fwd_egress_bytes_udp DataThunderCgnv6FixedNatGlobalStats#fnatdslite_fwd_egress_bytes_udp}
  */
  readonly fnatdsliteFwdEgressBytesUdp?: number;
  /**
  * Fixed DS-Lite Forward Egress Packets ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_fwd_egress_packets_icmp DataThunderCgnv6FixedNatGlobalStats#fnatdslite_fwd_egress_packets_icmp}
  */
  readonly fnatdsliteFwdEgressPacketsIcmp?: number;
  /**
  * Fixed DS-Lite Forward Egress Packets OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_fwd_egress_packets_others DataThunderCgnv6FixedNatGlobalStats#fnatdslite_fwd_egress_packets_others}
  */
  readonly fnatdsliteFwdEgressPacketsOthers?: number;
  /**
  * Fixed DS-Lite Forward Egress Packets TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_fwd_egress_packets_tcp DataThunderCgnv6FixedNatGlobalStats#fnatdslite_fwd_egress_packets_tcp}
  */
  readonly fnatdsliteFwdEgressPacketsTcp?: number;
  /**
  * Fixed DS-Lite Forward Egress Packets UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_fwd_egress_packets_udp DataThunderCgnv6FixedNatGlobalStats#fnatdslite_fwd_egress_packets_udp}
  */
  readonly fnatdsliteFwdEgressPacketsUdp?: number;
  /**
  * Fixed DS-Lite Forward Egress Packet size between 0 and 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_fwd_egress_pkt_size_range1 DataThunderCgnv6FixedNatGlobalStats#fnatdslite_fwd_egress_pkt_size_range1}
  */
  readonly fnatdsliteFwdEgressPktSizeRange1?: number;
  /**
  * Fixed DS-Lite Forward Egress Packet size between 201 and 800
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_fwd_egress_pkt_size_range2 DataThunderCgnv6FixedNatGlobalStats#fnatdslite_fwd_egress_pkt_size_range2}
  */
  readonly fnatdsliteFwdEgressPktSizeRange2?: number;
  /**
  * Fixed DS-Lite Forward Egress Packet size between 801 and 1550
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_fwd_egress_pkt_size_range3 DataThunderCgnv6FixedNatGlobalStats#fnatdslite_fwd_egress_pkt_size_range3}
  */
  readonly fnatdsliteFwdEgressPktSizeRange3?: number;
  /**
  * Fixed DS-Lite Forward Egress Packet size between 1551 and 9000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_fwd_egress_pkt_size_range4 DataThunderCgnv6FixedNatGlobalStats#fnatdslite_fwd_egress_pkt_size_range4}
  */
  readonly fnatdsliteFwdEgressPktSizeRange4?: number;
  /**
  * Fixed DS-Lite Forward Ingress Bytes ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_fwd_ingress_bytes_icmp DataThunderCgnv6FixedNatGlobalStats#fnatdslite_fwd_ingress_bytes_icmp}
  */
  readonly fnatdsliteFwdIngressBytesIcmp?: number;
  /**
  * Fixed DS-Lite Forward Ingress Bytes OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_fwd_ingress_bytes_others DataThunderCgnv6FixedNatGlobalStats#fnatdslite_fwd_ingress_bytes_others}
  */
  readonly fnatdsliteFwdIngressBytesOthers?: number;
  /**
  * Fixed DS-Lite Forward Ingress Bytes TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_fwd_ingress_bytes_tcp DataThunderCgnv6FixedNatGlobalStats#fnatdslite_fwd_ingress_bytes_tcp}
  */
  readonly fnatdsliteFwdIngressBytesTcp?: number;
  /**
  * Fixed DS-Lite Forward Ingress Bytes UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_fwd_ingress_bytes_udp DataThunderCgnv6FixedNatGlobalStats#fnatdslite_fwd_ingress_bytes_udp}
  */
  readonly fnatdsliteFwdIngressBytesUdp?: number;
  /**
  * Fixed DS-Lite Forward Ingress Packets ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_fwd_ingress_packets_icmp DataThunderCgnv6FixedNatGlobalStats#fnatdslite_fwd_ingress_packets_icmp}
  */
  readonly fnatdsliteFwdIngressPacketsIcmp?: number;
  /**
  * Fixed DS-Lite Forward Ingress Packets OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_fwd_ingress_packets_others DataThunderCgnv6FixedNatGlobalStats#fnatdslite_fwd_ingress_packets_others}
  */
  readonly fnatdsliteFwdIngressPacketsOthers?: number;
  /**
  * Fixed DS-Lite Forward Ingress Packets TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_fwd_ingress_packets_tcp DataThunderCgnv6FixedNatGlobalStats#fnatdslite_fwd_ingress_packets_tcp}
  */
  readonly fnatdsliteFwdIngressPacketsTcp?: number;
  /**
  * Fixed DS-Lite Forward Ingress Packets UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_fwd_ingress_packets_udp DataThunderCgnv6FixedNatGlobalStats#fnatdslite_fwd_ingress_packets_udp}
  */
  readonly fnatdsliteFwdIngressPacketsUdp?: number;
  /**
  * Fixed DS-Lite Forward Ingress Packet size between 0 and 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_fwd_ingress_pkt_size_range1 DataThunderCgnv6FixedNatGlobalStats#fnatdslite_fwd_ingress_pkt_size_range1}
  */
  readonly fnatdsliteFwdIngressPktSizeRange1?: number;
  /**
  * Fixed DS-Lite Forward Ingress Packet size between 201 and 800
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_fwd_ingress_pkt_size_range2 DataThunderCgnv6FixedNatGlobalStats#fnatdslite_fwd_ingress_pkt_size_range2}
  */
  readonly fnatdsliteFwdIngressPktSizeRange2?: number;
  /**
  * Fixed DS-Lite Forward Ingress Packet size between 801 and 1550
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_fwd_ingress_pkt_size_range3 DataThunderCgnv6FixedNatGlobalStats#fnatdslite_fwd_ingress_pkt_size_range3}
  */
  readonly fnatdsliteFwdIngressPktSizeRange3?: number;
  /**
  * Fixed DS-Lite Forward Ingress Packet size between 1551 and 9000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_fwd_ingress_pkt_size_range4 DataThunderCgnv6FixedNatGlobalStats#fnatdslite_fwd_ingress_pkt_size_range4}
  */
  readonly fnatdsliteFwdIngressPktSizeRange4?: number;
  /**
  * Fixed DS-Lite Reverse Egress Bytes ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_rev_egress_bytes_icmp DataThunderCgnv6FixedNatGlobalStats#fnatdslite_rev_egress_bytes_icmp}
  */
  readonly fnatdsliteRevEgressBytesIcmp?: number;
  /**
  * Fixed DS-Lite Reverse Egress Bytes OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_rev_egress_bytes_others DataThunderCgnv6FixedNatGlobalStats#fnatdslite_rev_egress_bytes_others}
  */
  readonly fnatdsliteRevEgressBytesOthers?: number;
  /**
  * Fixed DS-Lite Reverse Egress Bytes TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_rev_egress_bytes_tcp DataThunderCgnv6FixedNatGlobalStats#fnatdslite_rev_egress_bytes_tcp}
  */
  readonly fnatdsliteRevEgressBytesTcp?: number;
  /**
  * Fixed DS-Lite Reverse Egress Bytes UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_rev_egress_bytes_udp DataThunderCgnv6FixedNatGlobalStats#fnatdslite_rev_egress_bytes_udp}
  */
  readonly fnatdsliteRevEgressBytesUdp?: number;
  /**
  * Fixed DS-Lite Reverse Egress Packets ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_rev_egress_packets_icmp DataThunderCgnv6FixedNatGlobalStats#fnatdslite_rev_egress_packets_icmp}
  */
  readonly fnatdsliteRevEgressPacketsIcmp?: number;
  /**
  * Fixed DS-Lite Reverse Egress Packets OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_rev_egress_packets_others DataThunderCgnv6FixedNatGlobalStats#fnatdslite_rev_egress_packets_others}
  */
  readonly fnatdsliteRevEgressPacketsOthers?: number;
  /**
  * Fixed DS-Lite Reverse Egress Packets TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_rev_egress_packets_tcp DataThunderCgnv6FixedNatGlobalStats#fnatdslite_rev_egress_packets_tcp}
  */
  readonly fnatdsliteRevEgressPacketsTcp?: number;
  /**
  * Fixed DS-Lite Reverse Egress Packets UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_rev_egress_packets_udp DataThunderCgnv6FixedNatGlobalStats#fnatdslite_rev_egress_packets_udp}
  */
  readonly fnatdsliteRevEgressPacketsUdp?: number;
  /**
  * Fixed DS-Lite Reverse Egress Packet size between 0 and 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_rev_egress_pkt_size_range1 DataThunderCgnv6FixedNatGlobalStats#fnatdslite_rev_egress_pkt_size_range1}
  */
  readonly fnatdsliteRevEgressPktSizeRange1?: number;
  /**
  * Fixed DS-Lite Reverse Egress Packet size between 201 and 800
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_rev_egress_pkt_size_range2 DataThunderCgnv6FixedNatGlobalStats#fnatdslite_rev_egress_pkt_size_range2}
  */
  readonly fnatdsliteRevEgressPktSizeRange2?: number;
  /**
  * Fixed DS-Lite Reverse Egress Packet size between 801 and 1550
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_rev_egress_pkt_size_range3 DataThunderCgnv6FixedNatGlobalStats#fnatdslite_rev_egress_pkt_size_range3}
  */
  readonly fnatdsliteRevEgressPktSizeRange3?: number;
  /**
  * Fixed DS-Lite Reverse Egress Packet size between 1551 and 9000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_rev_egress_pkt_size_range4 DataThunderCgnv6FixedNatGlobalStats#fnatdslite_rev_egress_pkt_size_range4}
  */
  readonly fnatdsliteRevEgressPktSizeRange4?: number;
  /**
  * Fixed DS-Lite Reverse Ingress Bytes ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_rev_ingress_bytes_icmp DataThunderCgnv6FixedNatGlobalStats#fnatdslite_rev_ingress_bytes_icmp}
  */
  readonly fnatdsliteRevIngressBytesIcmp?: number;
  /**
  * Fixed DS-Lite Reverse Ingress Bytes OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_rev_ingress_bytes_others DataThunderCgnv6FixedNatGlobalStats#fnatdslite_rev_ingress_bytes_others}
  */
  readonly fnatdsliteRevIngressBytesOthers?: number;
  /**
  * Fixed DS-Lite Reverse Ingress Bytes TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_rev_ingress_bytes_tcp DataThunderCgnv6FixedNatGlobalStats#fnatdslite_rev_ingress_bytes_tcp}
  */
  readonly fnatdsliteRevIngressBytesTcp?: number;
  /**
  * Fixed DS-Lite Reverse Ingress Bytes UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_rev_ingress_bytes_udp DataThunderCgnv6FixedNatGlobalStats#fnatdslite_rev_ingress_bytes_udp}
  */
  readonly fnatdsliteRevIngressBytesUdp?: number;
  /**
  * Fixed DS-Lite Reverse Ingress Packets ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_rev_ingress_packets_icmp DataThunderCgnv6FixedNatGlobalStats#fnatdslite_rev_ingress_packets_icmp}
  */
  readonly fnatdsliteRevIngressPacketsIcmp?: number;
  /**
  * Fixed DS-Lite Reverse Ingress Packets OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_rev_ingress_packets_others DataThunderCgnv6FixedNatGlobalStats#fnatdslite_rev_ingress_packets_others}
  */
  readonly fnatdsliteRevIngressPacketsOthers?: number;
  /**
  * Fixed DS-Lite Reverse Ingress Packets TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_rev_ingress_packets_tcp DataThunderCgnv6FixedNatGlobalStats#fnatdslite_rev_ingress_packets_tcp}
  */
  readonly fnatdsliteRevIngressPacketsTcp?: number;
  /**
  * Fixed DS-Lite Reverse Ingress Packets UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_rev_ingress_packets_udp DataThunderCgnv6FixedNatGlobalStats#fnatdslite_rev_ingress_packets_udp}
  */
  readonly fnatdsliteRevIngressPacketsUdp?: number;
  /**
  * Fixed DS-Lite Reverse Ingress Packet size between 0 and 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_rev_ingress_pkt_size_range1 DataThunderCgnv6FixedNatGlobalStats#fnatdslite_rev_ingress_pkt_size_range1}
  */
  readonly fnatdsliteRevIngressPktSizeRange1?: number;
  /**
  * Fixed DS-Lite Reverse Ingress Packet size between 201 and 800
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_rev_ingress_pkt_size_range2 DataThunderCgnv6FixedNatGlobalStats#fnatdslite_rev_ingress_pkt_size_range2}
  */
  readonly fnatdsliteRevIngressPktSizeRange2?: number;
  /**
  * Fixed DS-Lite Reverse Ingress Packet size between 801 and 1550
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_rev_ingress_pkt_size_range3 DataThunderCgnv6FixedNatGlobalStats#fnatdslite_rev_ingress_pkt_size_range3}
  */
  readonly fnatdsliteRevIngressPktSizeRange3?: number;
  /**
  * Fixed DS-Lite Reverse Ingress Packet size between 1551 and 9000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fnatdslite_rev_ingress_pkt_size_range4 DataThunderCgnv6FixedNatGlobalStats#fnatdslite_rev_ingress_pkt_size_range4}
  */
  readonly fnatdsliteRevIngressPktSizeRange4?: number;
  /**
  * Full-Cone Session Creation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#fullcone_failure DataThunderCgnv6FixedNatGlobalStats#fullcone_failure}
  */
  readonly fullconeFailure?: number;
  /**
  * HA Sessions User Quota Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#ha_session_user_quota_exceeded DataThunderCgnv6FixedNatGlobalStats#ha_session_user_quota_exceeded}
  */
  readonly haSessionUserQuotaExceeded?: number;
  /**
  * NAT44 Data Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#nat44_data_session_created DataThunderCgnv6FixedNatGlobalStats#nat44_data_session_created}
  */
  readonly nat44DataSessionCreated?: number;
  /**
  * NAT44 Data Sessions Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#nat44_data_session_freed DataThunderCgnv6FixedNatGlobalStats#nat44_data_session_freed}
  */
  readonly nat44DataSessionFreed?: number;
  /**
  * NAT44 Endpoint-Independent-Filtering Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#nat44_eif_limit_exceeded DataThunderCgnv6FixedNatGlobalStats#nat44_eif_limit_exceeded}
  */
  readonly nat44EifLimitExceeded?: number;
  /**
  * NAT44 Endpoint-Independent-Filtering Matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#nat44_eif_match DataThunderCgnv6FixedNatGlobalStats#nat44_eif_match}
  */
  readonly nat44EifMatch?: number;
  /**
  * NAT44 Endpoint-Independent-Mapping Matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#nat44_eim_match DataThunderCgnv6FixedNatGlobalStats#nat44_eim_match}
  */
  readonly nat44EimMatch?: number;
  /**
  * NAT44 Hairpin Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#nat44_hairpin DataThunderCgnv6FixedNatGlobalStats#nat44_hairpin}
  */
  readonly nat44Hairpin?: number;
  /**
  * NAT44 Endpoint-Dependent Filtering Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#nat44_inbound_filtered DataThunderCgnv6FixedNatGlobalStats#nat44_inbound_filtered}
  */
  readonly nat44InboundFiltered?: number;
  /**
  * NAT44 TCP Full-Cone Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#nat44_tcp_fullcone_created DataThunderCgnv6FixedNatGlobalStats#nat44_tcp_fullcone_created}
  */
  readonly nat44TcpFullconeCreated?: number;
  /**
  * NAT44 TCP Full-Cone Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#nat44_tcp_fullcone_freed DataThunderCgnv6FixedNatGlobalStats#nat44_tcp_fullcone_freed}
  */
  readonly nat44TcpFullconeFreed?: number;
  /**
  * NAT44 UDP ALG Full-Cone Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#nat44_udp_alg_fullcone_created DataThunderCgnv6FixedNatGlobalStats#nat44_udp_alg_fullcone_created}
  */
  readonly nat44UdpAlgFullconeCreated?: number;
  /**
  * NAT44 UDP ALG Full-Cone Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#nat44_udp_alg_fullcone_freed DataThunderCgnv6FixedNatGlobalStats#nat44_udp_alg_fullcone_freed}
  */
  readonly nat44UdpAlgFullconeFreed?: number;
  /**
  * NAT44 UDP Full-Cone Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#nat44_udp_fullcone_created DataThunderCgnv6FixedNatGlobalStats#nat44_udp_fullcone_created}
  */
  readonly nat44UdpFullconeCreated?: number;
  /**
  * NAT44 UDP Full-Cone Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#nat44_udp_fullcone_freed DataThunderCgnv6FixedNatGlobalStats#nat44_udp_fullcone_freed}
  */
  readonly nat44UdpFullconeFreed?: number;
  /**
  * NAT64 Data Sessions Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#nat64_data_session_created DataThunderCgnv6FixedNatGlobalStats#nat64_data_session_created}
  */
  readonly nat64DataSessionCreated?: number;
  /**
  * NAT64 Data Sessions Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#nat64_data_session_freed DataThunderCgnv6FixedNatGlobalStats#nat64_data_session_freed}
  */
  readonly nat64DataSessionFreed?: number;
  /**
  * NAT64 Endpoint-Independent-Filtering Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#nat64_eif_limit_exceeded DataThunderCgnv6FixedNatGlobalStats#nat64_eif_limit_exceeded}
  */
  readonly nat64EifLimitExceeded?: number;
  /**
  * NAT64 Endpoint-Independent-Filtering Matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#nat64_eif_match DataThunderCgnv6FixedNatGlobalStats#nat64_eif_match}
  */
  readonly nat64EifMatch?: number;
  /**
  * NAT64 Endpoint-Independent-Mapping Matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#nat64_eim_match DataThunderCgnv6FixedNatGlobalStats#nat64_eim_match}
  */
  readonly nat64EimMatch?: number;
  /**
  * NAT64 Hairpin Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#nat64_hairpin DataThunderCgnv6FixedNatGlobalStats#nat64_hairpin}
  */
  readonly nat64Hairpin?: number;
  /**
  * NAT64 Endpoint-Dependent Filtering Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#nat64_inbound_filtered DataThunderCgnv6FixedNatGlobalStats#nat64_inbound_filtered}
  */
  readonly nat64InboundFiltered?: number;
  /**
  * NAT64 TCP Full-Cone Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#nat64_tcp_fullcone_created DataThunderCgnv6FixedNatGlobalStats#nat64_tcp_fullcone_created}
  */
  readonly nat64TcpFullconeCreated?: number;
  /**
  * NAT64 TCP Full-Cone Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#nat64_tcp_fullcone_freed DataThunderCgnv6FixedNatGlobalStats#nat64_tcp_fullcone_freed}
  */
  readonly nat64TcpFullconeFreed?: number;
  /**
  * NAT64 UDP ALG Full-Cone Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#nat64_udp_alg_fullcone_created DataThunderCgnv6FixedNatGlobalStats#nat64_udp_alg_fullcone_created}
  */
  readonly nat64UdpAlgFullconeCreated?: number;
  /**
  * NAT64 UDP ALG Full-Cone Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#nat64_udp_alg_fullcone_freed DataThunderCgnv6FixedNatGlobalStats#nat64_udp_alg_fullcone_freed}
  */
  readonly nat64UdpAlgFullconeFreed?: number;
  /**
  * NAT64 UDP Full-Cone Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#nat64_udp_fullcone_created DataThunderCgnv6FixedNatGlobalStats#nat64_udp_fullcone_created}
  */
  readonly nat64UdpFullconeCreated?: number;
  /**
  * NAT64 UDP Full-Cone Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#nat64_udp_fullcone_freed DataThunderCgnv6FixedNatGlobalStats#nat64_udp_fullcone_freed}
  */
  readonly nat64UdpFullconeFreed?: number;
  /**
  * ICMP NAT Port Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#nat_port_unavailable_icmp DataThunderCgnv6FixedNatGlobalStats#nat_port_unavailable_icmp}
  */
  readonly natPortUnavailableIcmp?: number;
  /**
  * TCP NAT Port Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#nat_port_unavailable_tcp DataThunderCgnv6FixedNatGlobalStats#nat_port_unavailable_tcp}
  */
  readonly natPortUnavailableTcp?: number;
  /**
  * UDP NAT Port Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#nat_port_unavailable_udp DataThunderCgnv6FixedNatGlobalStats#nat_port_unavailable_udp}
  */
  readonly natPortUnavailableUdp?: number;
  /**
  * Port overload failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#port_overload_failed DataThunderCgnv6FixedNatGlobalStats#port_overload_failed}
  */
  readonly portOverloadFailed?: number;
  /**
  * Port overload SMP conn delete scheduled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#port_overload_smp_delete_scheduled DataThunderCgnv6FixedNatGlobalStats#port_overload_smp_delete_scheduled}
  */
  readonly portOverloadSmpDeleteScheduled?: number;
  /**
  * Sessions User Quota Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#session_user_quota_exceeded DataThunderCgnv6FixedNatGlobalStats#session_user_quota_exceeded}
  */
  readonly sessionUserQuotaExceeded?: number;
  /**
  * Fixed NAT IPv6 in IPv4 Packet Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#sixrd_drop DataThunderCgnv6FixedNatGlobalStats#sixrd_drop}
  */
  readonly sixrdDrop?: number;
  /**
  * Fixed NAT LID Standby Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#standby_drop DataThunderCgnv6FixedNatGlobalStats#standby_drop}
  */
  readonly standbyDrop?: number;
  /**
  * Total ICMP Ports Allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#total_icmp_allocated DataThunderCgnv6FixedNatGlobalStats#total_icmp_allocated}
  */
  readonly totalIcmpAllocated?: number;
  /**
  * Total ICMP Ports Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#total_icmp_freed DataThunderCgnv6FixedNatGlobalStats#total_icmp_freed}
  */
  readonly totalIcmpFreed?: number;
  /**
  * Total NAT Addresses in-use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#total_nat_in_use DataThunderCgnv6FixedNatGlobalStats#total_nat_in_use}
  */
  readonly totalNatInUse?: number;
  /**
  * Total TCP ports allocated via overload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#total_tcp_alloc_overload DataThunderCgnv6FixedNatGlobalStats#total_tcp_alloc_overload}
  */
  readonly totalTcpAllocOverload?: number;
  /**
  * Total TCP Ports Allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#total_tcp_allocated DataThunderCgnv6FixedNatGlobalStats#total_tcp_allocated}
  */
  readonly totalTcpAllocated?: number;
  /**
  * Total TCP ports freed via overload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#total_tcp_free_overload DataThunderCgnv6FixedNatGlobalStats#total_tcp_free_overload}
  */
  readonly totalTcpFreeOverload?: number;
  /**
  * Total TCP Ports Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#total_tcp_freed DataThunderCgnv6FixedNatGlobalStats#total_tcp_freed}
  */
  readonly totalTcpFreed?: number;
  /**
  * Total TCP ports acquired for port overloading
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#total_tcp_overload_acquired DataThunderCgnv6FixedNatGlobalStats#total_tcp_overload_acquired}
  */
  readonly totalTcpOverloadAcquired?: number;
  /**
  * Total TCP ports released from port overloading
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#total_tcp_overload_released DataThunderCgnv6FixedNatGlobalStats#total_tcp_overload_released}
  */
  readonly totalTcpOverloadReleased?: number;
  /**
  * Total UDP ports allocated via overload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#total_udp_alloc_overload DataThunderCgnv6FixedNatGlobalStats#total_udp_alloc_overload}
  */
  readonly totalUdpAllocOverload?: number;
  /**
  * Total UDP Ports Allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#total_udp_allocated DataThunderCgnv6FixedNatGlobalStats#total_udp_allocated}
  */
  readonly totalUdpAllocated?: number;
  /**
  * Total UDP ports freed via overload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#total_udp_free_overload DataThunderCgnv6FixedNatGlobalStats#total_udp_free_overload}
  */
  readonly totalUdpFreeOverload?: number;
  /**
  * Total UDP Ports Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#total_udp_freed DataThunderCgnv6FixedNatGlobalStats#total_udp_freed}
  */
  readonly totalUdpFreed?: number;
  /**
  * Total UDP ports acquired for port overloading
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#total_udp_overload_acquired DataThunderCgnv6FixedNatGlobalStats#total_udp_overload_acquired}
  */
  readonly totalUdpOverloadAcquired?: number;
  /**
  * Total UDP ports released from port overloading
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#total_udp_overload_released DataThunderCgnv6FixedNatGlobalStats#total_udp_overload_released}
  */
  readonly totalUdpOverloadReleased?: number;
}

export function dataThunderCgnv6FixedNatGlobalStatsStatsToTerraform(struct?: DataThunderCgnv6FixedNatGlobalStatsStatsOutputReference | DataThunderCgnv6FixedNatGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_subscriber_added: cdktf.numberToTerraform(struct!.activeSubscriberAdded),
    active_subscriber_removed: cdktf.numberToTerraform(struct!.activeSubscriberRemoved),
    config_not_found: cdktf.numberToTerraform(struct!.configNotFound),
    dest_rlist_drop: cdktf.numberToTerraform(struct!.destRlistDrop),
    dest_rlist_pass_through: cdktf.numberToTerraform(struct!.destRlistPassThrough),
    dest_rlist_snat_drop: cdktf.numberToTerraform(struct!.destRlistSnatDrop),
    dslite_data_session_created: cdktf.numberToTerraform(struct!.dsliteDataSessionCreated),
    dslite_data_session_freed: cdktf.numberToTerraform(struct!.dsliteDataSessionFreed),
    dslite_eif_limit_exceeded: cdktf.numberToTerraform(struct!.dsliteEifLimitExceeded),
    dslite_eif_match: cdktf.numberToTerraform(struct!.dsliteEifMatch),
    dslite_eim_match: cdktf.numberToTerraform(struct!.dsliteEimMatch),
    dslite_hairpin: cdktf.numberToTerraform(struct!.dsliteHairpin),
    dslite_inbound_filtered: cdktf.numberToTerraform(struct!.dsliteInboundFiltered),
    dslite_tcp_fullcone_created: cdktf.numberToTerraform(struct!.dsliteTcpFullconeCreated),
    dslite_tcp_fullcone_freed: cdktf.numberToTerraform(struct!.dsliteTcpFullconeFreed),
    dslite_udp_alg_fullcone_created: cdktf.numberToTerraform(struct!.dsliteUdpAlgFullconeCreated),
    dslite_udp_alg_fullcone_freed: cdktf.numberToTerraform(struct!.dsliteUdpAlgFullconeFreed),
    dslite_udp_fullcone_created: cdktf.numberToTerraform(struct!.dsliteUdpFullconeCreated),
    dslite_udp_fullcone_freed: cdktf.numberToTerraform(struct!.dsliteUdpFullconeFreed),
    fixed_nat_fullcone_self_hairpinning_drop: cdktf.numberToTerraform(struct!.fixedNatFullconeSelfHairpinningDrop),
    fnat44_fwd_egress_bytes_icmp: cdktf.numberToTerraform(struct!.fnat44FwdEgressBytesIcmp),
    fnat44_fwd_egress_bytes_others: cdktf.numberToTerraform(struct!.fnat44FwdEgressBytesOthers),
    fnat44_fwd_egress_bytes_tcp: cdktf.numberToTerraform(struct!.fnat44FwdEgressBytesTcp),
    fnat44_fwd_egress_bytes_udp: cdktf.numberToTerraform(struct!.fnat44FwdEgressBytesUdp),
    fnat44_fwd_egress_packets_icmp: cdktf.numberToTerraform(struct!.fnat44FwdEgressPacketsIcmp),
    fnat44_fwd_egress_packets_others: cdktf.numberToTerraform(struct!.fnat44FwdEgressPacketsOthers),
    fnat44_fwd_egress_packets_tcp: cdktf.numberToTerraform(struct!.fnat44FwdEgressPacketsTcp),
    fnat44_fwd_egress_packets_udp: cdktf.numberToTerraform(struct!.fnat44FwdEgressPacketsUdp),
    fnat44_fwd_egress_pkt_size_range1: cdktf.numberToTerraform(struct!.fnat44FwdEgressPktSizeRange1),
    fnat44_fwd_egress_pkt_size_range2: cdktf.numberToTerraform(struct!.fnat44FwdEgressPktSizeRange2),
    fnat44_fwd_egress_pkt_size_range3: cdktf.numberToTerraform(struct!.fnat44FwdEgressPktSizeRange3),
    fnat44_fwd_egress_pkt_size_range4: cdktf.numberToTerraform(struct!.fnat44FwdEgressPktSizeRange4),
    fnat44_fwd_ingress_bytes_icmp: cdktf.numberToTerraform(struct!.fnat44FwdIngressBytesIcmp),
    fnat44_fwd_ingress_bytes_others: cdktf.numberToTerraform(struct!.fnat44FwdIngressBytesOthers),
    fnat44_fwd_ingress_bytes_tcp: cdktf.numberToTerraform(struct!.fnat44FwdIngressBytesTcp),
    fnat44_fwd_ingress_bytes_udp: cdktf.numberToTerraform(struct!.fnat44FwdIngressBytesUdp),
    fnat44_fwd_ingress_packets_icmp: cdktf.numberToTerraform(struct!.fnat44FwdIngressPacketsIcmp),
    fnat44_fwd_ingress_packets_others: cdktf.numberToTerraform(struct!.fnat44FwdIngressPacketsOthers),
    fnat44_fwd_ingress_packets_tcp: cdktf.numberToTerraform(struct!.fnat44FwdIngressPacketsTcp),
    fnat44_fwd_ingress_packets_udp: cdktf.numberToTerraform(struct!.fnat44FwdIngressPacketsUdp),
    fnat44_fwd_ingress_pkt_size_range1: cdktf.numberToTerraform(struct!.fnat44FwdIngressPktSizeRange1),
    fnat44_fwd_ingress_pkt_size_range2: cdktf.numberToTerraform(struct!.fnat44FwdIngressPktSizeRange2),
    fnat44_fwd_ingress_pkt_size_range3: cdktf.numberToTerraform(struct!.fnat44FwdIngressPktSizeRange3),
    fnat44_fwd_ingress_pkt_size_range4: cdktf.numberToTerraform(struct!.fnat44FwdIngressPktSizeRange4),
    fnat44_rev_egress_bytes_icmp: cdktf.numberToTerraform(struct!.fnat44RevEgressBytesIcmp),
    fnat44_rev_egress_bytes_others: cdktf.numberToTerraform(struct!.fnat44RevEgressBytesOthers),
    fnat44_rev_egress_bytes_tcp: cdktf.numberToTerraform(struct!.fnat44RevEgressBytesTcp),
    fnat44_rev_egress_bytes_udp: cdktf.numberToTerraform(struct!.fnat44RevEgressBytesUdp),
    fnat44_rev_egress_packets_icmp: cdktf.numberToTerraform(struct!.fnat44RevEgressPacketsIcmp),
    fnat44_rev_egress_packets_others: cdktf.numberToTerraform(struct!.fnat44RevEgressPacketsOthers),
    fnat44_rev_egress_packets_tcp: cdktf.numberToTerraform(struct!.fnat44RevEgressPacketsTcp),
    fnat44_rev_egress_packets_udp: cdktf.numberToTerraform(struct!.fnat44RevEgressPacketsUdp),
    fnat44_rev_egress_pkt_size_range1: cdktf.numberToTerraform(struct!.fnat44RevEgressPktSizeRange1),
    fnat44_rev_egress_pkt_size_range2: cdktf.numberToTerraform(struct!.fnat44RevEgressPktSizeRange2),
    fnat44_rev_egress_pkt_size_range3: cdktf.numberToTerraform(struct!.fnat44RevEgressPktSizeRange3),
    fnat44_rev_egress_pkt_size_range4: cdktf.numberToTerraform(struct!.fnat44RevEgressPktSizeRange4),
    fnat44_rev_ingress_bytes_icmp: cdktf.numberToTerraform(struct!.fnat44RevIngressBytesIcmp),
    fnat44_rev_ingress_bytes_others: cdktf.numberToTerraform(struct!.fnat44RevIngressBytesOthers),
    fnat44_rev_ingress_bytes_tcp: cdktf.numberToTerraform(struct!.fnat44RevIngressBytesTcp),
    fnat44_rev_ingress_bytes_udp: cdktf.numberToTerraform(struct!.fnat44RevIngressBytesUdp),
    fnat44_rev_ingress_packets_icmp: cdktf.numberToTerraform(struct!.fnat44RevIngressPacketsIcmp),
    fnat44_rev_ingress_packets_others: cdktf.numberToTerraform(struct!.fnat44RevIngressPacketsOthers),
    fnat44_rev_ingress_packets_tcp: cdktf.numberToTerraform(struct!.fnat44RevIngressPacketsTcp),
    fnat44_rev_ingress_packets_udp: cdktf.numberToTerraform(struct!.fnat44RevIngressPacketsUdp),
    fnat44_rev_ingress_pkt_size_range1: cdktf.numberToTerraform(struct!.fnat44RevIngressPktSizeRange1),
    fnat44_rev_ingress_pkt_size_range2: cdktf.numberToTerraform(struct!.fnat44RevIngressPktSizeRange2),
    fnat44_rev_ingress_pkt_size_range3: cdktf.numberToTerraform(struct!.fnat44RevIngressPktSizeRange3),
    fnat44_rev_ingress_pkt_size_range4: cdktf.numberToTerraform(struct!.fnat44RevIngressPktSizeRange4),
    fnat64_fwd_egress_bytes_icmp: cdktf.numberToTerraform(struct!.fnat64FwdEgressBytesIcmp),
    fnat64_fwd_egress_bytes_others: cdktf.numberToTerraform(struct!.fnat64FwdEgressBytesOthers),
    fnat64_fwd_egress_bytes_tcp: cdktf.numberToTerraform(struct!.fnat64FwdEgressBytesTcp),
    fnat64_fwd_egress_bytes_udp: cdktf.numberToTerraform(struct!.fnat64FwdEgressBytesUdp),
    fnat64_fwd_egress_packets_icmp: cdktf.numberToTerraform(struct!.fnat64FwdEgressPacketsIcmp),
    fnat64_fwd_egress_packets_others: cdktf.numberToTerraform(struct!.fnat64FwdEgressPacketsOthers),
    fnat64_fwd_egress_packets_tcp: cdktf.numberToTerraform(struct!.fnat64FwdEgressPacketsTcp),
    fnat64_fwd_egress_packets_udp: cdktf.numberToTerraform(struct!.fnat64FwdEgressPacketsUdp),
    fnat64_fwd_egress_pkt_size_range1: cdktf.numberToTerraform(struct!.fnat64FwdEgressPktSizeRange1),
    fnat64_fwd_egress_pkt_size_range2: cdktf.numberToTerraform(struct!.fnat64FwdEgressPktSizeRange2),
    fnat64_fwd_egress_pkt_size_range3: cdktf.numberToTerraform(struct!.fnat64FwdEgressPktSizeRange3),
    fnat64_fwd_egress_pkt_size_range4: cdktf.numberToTerraform(struct!.fnat64FwdEgressPktSizeRange4),
    fnat64_fwd_ingress_bytes_icmp: cdktf.numberToTerraform(struct!.fnat64FwdIngressBytesIcmp),
    fnat64_fwd_ingress_bytes_others: cdktf.numberToTerraform(struct!.fnat64FwdIngressBytesOthers),
    fnat64_fwd_ingress_bytes_tcp: cdktf.numberToTerraform(struct!.fnat64FwdIngressBytesTcp),
    fnat64_fwd_ingress_bytes_udp: cdktf.numberToTerraform(struct!.fnat64FwdIngressBytesUdp),
    fnat64_fwd_ingress_packets_icmp: cdktf.numberToTerraform(struct!.fnat64FwdIngressPacketsIcmp),
    fnat64_fwd_ingress_packets_others: cdktf.numberToTerraform(struct!.fnat64FwdIngressPacketsOthers),
    fnat64_fwd_ingress_packets_tcp: cdktf.numberToTerraform(struct!.fnat64FwdIngressPacketsTcp),
    fnat64_fwd_ingress_packets_udp: cdktf.numberToTerraform(struct!.fnat64FwdIngressPacketsUdp),
    fnat64_fwd_ingress_pkt_size_range1: cdktf.numberToTerraform(struct!.fnat64FwdIngressPktSizeRange1),
    fnat64_fwd_ingress_pkt_size_range2: cdktf.numberToTerraform(struct!.fnat64FwdIngressPktSizeRange2),
    fnat64_fwd_ingress_pkt_size_range3: cdktf.numberToTerraform(struct!.fnat64FwdIngressPktSizeRange3),
    fnat64_fwd_ingress_pkt_size_range4: cdktf.numberToTerraform(struct!.fnat64FwdIngressPktSizeRange4),
    fnat64_rev_egress_bytes_icmp: cdktf.numberToTerraform(struct!.fnat64RevEgressBytesIcmp),
    fnat64_rev_egress_bytes_others: cdktf.numberToTerraform(struct!.fnat64RevEgressBytesOthers),
    fnat64_rev_egress_bytes_tcp: cdktf.numberToTerraform(struct!.fnat64RevEgressBytesTcp),
    fnat64_rev_egress_bytes_udp: cdktf.numberToTerraform(struct!.fnat64RevEgressBytesUdp),
    fnat64_rev_egress_packets_icmp: cdktf.numberToTerraform(struct!.fnat64RevEgressPacketsIcmp),
    fnat64_rev_egress_packets_others: cdktf.numberToTerraform(struct!.fnat64RevEgressPacketsOthers),
    fnat64_rev_egress_packets_tcp: cdktf.numberToTerraform(struct!.fnat64RevEgressPacketsTcp),
    fnat64_rev_egress_packets_udp: cdktf.numberToTerraform(struct!.fnat64RevEgressPacketsUdp),
    fnat64_rev_egress_pkt_size_range1: cdktf.numberToTerraform(struct!.fnat64RevEgressPktSizeRange1),
    fnat64_rev_egress_pkt_size_range2: cdktf.numberToTerraform(struct!.fnat64RevEgressPktSizeRange2),
    fnat64_rev_egress_pkt_size_range3: cdktf.numberToTerraform(struct!.fnat64RevEgressPktSizeRange3),
    fnat64_rev_egress_pkt_size_range4: cdktf.numberToTerraform(struct!.fnat64RevEgressPktSizeRange4),
    fnat64_rev_ingress_bytes_icmp: cdktf.numberToTerraform(struct!.fnat64RevIngressBytesIcmp),
    fnat64_rev_ingress_bytes_others: cdktf.numberToTerraform(struct!.fnat64RevIngressBytesOthers),
    fnat64_rev_ingress_bytes_tcp: cdktf.numberToTerraform(struct!.fnat64RevIngressBytesTcp),
    fnat64_rev_ingress_bytes_udp: cdktf.numberToTerraform(struct!.fnat64RevIngressBytesUdp),
    fnat64_rev_ingress_packets_icmp: cdktf.numberToTerraform(struct!.fnat64RevIngressPacketsIcmp),
    fnat64_rev_ingress_packets_others: cdktf.numberToTerraform(struct!.fnat64RevIngressPacketsOthers),
    fnat64_rev_ingress_packets_tcp: cdktf.numberToTerraform(struct!.fnat64RevIngressPacketsTcp),
    fnat64_rev_ingress_packets_udp: cdktf.numberToTerraform(struct!.fnat64RevIngressPacketsUdp),
    fnat64_rev_ingress_pkt_size_range1: cdktf.numberToTerraform(struct!.fnat64RevIngressPktSizeRange1),
    fnat64_rev_ingress_pkt_size_range2: cdktf.numberToTerraform(struct!.fnat64RevIngressPktSizeRange2),
    fnat64_rev_ingress_pkt_size_range3: cdktf.numberToTerraform(struct!.fnat64RevIngressPktSizeRange3),
    fnat64_rev_ingress_pkt_size_range4: cdktf.numberToTerraform(struct!.fnat64RevIngressPktSizeRange4),
    fnatdslite_fwd_egress_bytes_icmp: cdktf.numberToTerraform(struct!.fnatdsliteFwdEgressBytesIcmp),
    fnatdslite_fwd_egress_bytes_others: cdktf.numberToTerraform(struct!.fnatdsliteFwdEgressBytesOthers),
    fnatdslite_fwd_egress_bytes_tcp: cdktf.numberToTerraform(struct!.fnatdsliteFwdEgressBytesTcp),
    fnatdslite_fwd_egress_bytes_udp: cdktf.numberToTerraform(struct!.fnatdsliteFwdEgressBytesUdp),
    fnatdslite_fwd_egress_packets_icmp: cdktf.numberToTerraform(struct!.fnatdsliteFwdEgressPacketsIcmp),
    fnatdslite_fwd_egress_packets_others: cdktf.numberToTerraform(struct!.fnatdsliteFwdEgressPacketsOthers),
    fnatdslite_fwd_egress_packets_tcp: cdktf.numberToTerraform(struct!.fnatdsliteFwdEgressPacketsTcp),
    fnatdslite_fwd_egress_packets_udp: cdktf.numberToTerraform(struct!.fnatdsliteFwdEgressPacketsUdp),
    fnatdslite_fwd_egress_pkt_size_range1: cdktf.numberToTerraform(struct!.fnatdsliteFwdEgressPktSizeRange1),
    fnatdslite_fwd_egress_pkt_size_range2: cdktf.numberToTerraform(struct!.fnatdsliteFwdEgressPktSizeRange2),
    fnatdslite_fwd_egress_pkt_size_range3: cdktf.numberToTerraform(struct!.fnatdsliteFwdEgressPktSizeRange3),
    fnatdslite_fwd_egress_pkt_size_range4: cdktf.numberToTerraform(struct!.fnatdsliteFwdEgressPktSizeRange4),
    fnatdslite_fwd_ingress_bytes_icmp: cdktf.numberToTerraform(struct!.fnatdsliteFwdIngressBytesIcmp),
    fnatdslite_fwd_ingress_bytes_others: cdktf.numberToTerraform(struct!.fnatdsliteFwdIngressBytesOthers),
    fnatdslite_fwd_ingress_bytes_tcp: cdktf.numberToTerraform(struct!.fnatdsliteFwdIngressBytesTcp),
    fnatdslite_fwd_ingress_bytes_udp: cdktf.numberToTerraform(struct!.fnatdsliteFwdIngressBytesUdp),
    fnatdslite_fwd_ingress_packets_icmp: cdktf.numberToTerraform(struct!.fnatdsliteFwdIngressPacketsIcmp),
    fnatdslite_fwd_ingress_packets_others: cdktf.numberToTerraform(struct!.fnatdsliteFwdIngressPacketsOthers),
    fnatdslite_fwd_ingress_packets_tcp: cdktf.numberToTerraform(struct!.fnatdsliteFwdIngressPacketsTcp),
    fnatdslite_fwd_ingress_packets_udp: cdktf.numberToTerraform(struct!.fnatdsliteFwdIngressPacketsUdp),
    fnatdslite_fwd_ingress_pkt_size_range1: cdktf.numberToTerraform(struct!.fnatdsliteFwdIngressPktSizeRange1),
    fnatdslite_fwd_ingress_pkt_size_range2: cdktf.numberToTerraform(struct!.fnatdsliteFwdIngressPktSizeRange2),
    fnatdslite_fwd_ingress_pkt_size_range3: cdktf.numberToTerraform(struct!.fnatdsliteFwdIngressPktSizeRange3),
    fnatdslite_fwd_ingress_pkt_size_range4: cdktf.numberToTerraform(struct!.fnatdsliteFwdIngressPktSizeRange4),
    fnatdslite_rev_egress_bytes_icmp: cdktf.numberToTerraform(struct!.fnatdsliteRevEgressBytesIcmp),
    fnatdslite_rev_egress_bytes_others: cdktf.numberToTerraform(struct!.fnatdsliteRevEgressBytesOthers),
    fnatdslite_rev_egress_bytes_tcp: cdktf.numberToTerraform(struct!.fnatdsliteRevEgressBytesTcp),
    fnatdslite_rev_egress_bytes_udp: cdktf.numberToTerraform(struct!.fnatdsliteRevEgressBytesUdp),
    fnatdslite_rev_egress_packets_icmp: cdktf.numberToTerraform(struct!.fnatdsliteRevEgressPacketsIcmp),
    fnatdslite_rev_egress_packets_others: cdktf.numberToTerraform(struct!.fnatdsliteRevEgressPacketsOthers),
    fnatdslite_rev_egress_packets_tcp: cdktf.numberToTerraform(struct!.fnatdsliteRevEgressPacketsTcp),
    fnatdslite_rev_egress_packets_udp: cdktf.numberToTerraform(struct!.fnatdsliteRevEgressPacketsUdp),
    fnatdslite_rev_egress_pkt_size_range1: cdktf.numberToTerraform(struct!.fnatdsliteRevEgressPktSizeRange1),
    fnatdslite_rev_egress_pkt_size_range2: cdktf.numberToTerraform(struct!.fnatdsliteRevEgressPktSizeRange2),
    fnatdslite_rev_egress_pkt_size_range3: cdktf.numberToTerraform(struct!.fnatdsliteRevEgressPktSizeRange3),
    fnatdslite_rev_egress_pkt_size_range4: cdktf.numberToTerraform(struct!.fnatdsliteRevEgressPktSizeRange4),
    fnatdslite_rev_ingress_bytes_icmp: cdktf.numberToTerraform(struct!.fnatdsliteRevIngressBytesIcmp),
    fnatdslite_rev_ingress_bytes_others: cdktf.numberToTerraform(struct!.fnatdsliteRevIngressBytesOthers),
    fnatdslite_rev_ingress_bytes_tcp: cdktf.numberToTerraform(struct!.fnatdsliteRevIngressBytesTcp),
    fnatdslite_rev_ingress_bytes_udp: cdktf.numberToTerraform(struct!.fnatdsliteRevIngressBytesUdp),
    fnatdslite_rev_ingress_packets_icmp: cdktf.numberToTerraform(struct!.fnatdsliteRevIngressPacketsIcmp),
    fnatdslite_rev_ingress_packets_others: cdktf.numberToTerraform(struct!.fnatdsliteRevIngressPacketsOthers),
    fnatdslite_rev_ingress_packets_tcp: cdktf.numberToTerraform(struct!.fnatdsliteRevIngressPacketsTcp),
    fnatdslite_rev_ingress_packets_udp: cdktf.numberToTerraform(struct!.fnatdsliteRevIngressPacketsUdp),
    fnatdslite_rev_ingress_pkt_size_range1: cdktf.numberToTerraform(struct!.fnatdsliteRevIngressPktSizeRange1),
    fnatdslite_rev_ingress_pkt_size_range2: cdktf.numberToTerraform(struct!.fnatdsliteRevIngressPktSizeRange2),
    fnatdslite_rev_ingress_pkt_size_range3: cdktf.numberToTerraform(struct!.fnatdsliteRevIngressPktSizeRange3),
    fnatdslite_rev_ingress_pkt_size_range4: cdktf.numberToTerraform(struct!.fnatdsliteRevIngressPktSizeRange4),
    fullcone_failure: cdktf.numberToTerraform(struct!.fullconeFailure),
    ha_session_user_quota_exceeded: cdktf.numberToTerraform(struct!.haSessionUserQuotaExceeded),
    nat44_data_session_created: cdktf.numberToTerraform(struct!.nat44DataSessionCreated),
    nat44_data_session_freed: cdktf.numberToTerraform(struct!.nat44DataSessionFreed),
    nat44_eif_limit_exceeded: cdktf.numberToTerraform(struct!.nat44EifLimitExceeded),
    nat44_eif_match: cdktf.numberToTerraform(struct!.nat44EifMatch),
    nat44_eim_match: cdktf.numberToTerraform(struct!.nat44EimMatch),
    nat44_hairpin: cdktf.numberToTerraform(struct!.nat44Hairpin),
    nat44_inbound_filtered: cdktf.numberToTerraform(struct!.nat44InboundFiltered),
    nat44_tcp_fullcone_created: cdktf.numberToTerraform(struct!.nat44TcpFullconeCreated),
    nat44_tcp_fullcone_freed: cdktf.numberToTerraform(struct!.nat44TcpFullconeFreed),
    nat44_udp_alg_fullcone_created: cdktf.numberToTerraform(struct!.nat44UdpAlgFullconeCreated),
    nat44_udp_alg_fullcone_freed: cdktf.numberToTerraform(struct!.nat44UdpAlgFullconeFreed),
    nat44_udp_fullcone_created: cdktf.numberToTerraform(struct!.nat44UdpFullconeCreated),
    nat44_udp_fullcone_freed: cdktf.numberToTerraform(struct!.nat44UdpFullconeFreed),
    nat64_data_session_created: cdktf.numberToTerraform(struct!.nat64DataSessionCreated),
    nat64_data_session_freed: cdktf.numberToTerraform(struct!.nat64DataSessionFreed),
    nat64_eif_limit_exceeded: cdktf.numberToTerraform(struct!.nat64EifLimitExceeded),
    nat64_eif_match: cdktf.numberToTerraform(struct!.nat64EifMatch),
    nat64_eim_match: cdktf.numberToTerraform(struct!.nat64EimMatch),
    nat64_hairpin: cdktf.numberToTerraform(struct!.nat64Hairpin),
    nat64_inbound_filtered: cdktf.numberToTerraform(struct!.nat64InboundFiltered),
    nat64_tcp_fullcone_created: cdktf.numberToTerraform(struct!.nat64TcpFullconeCreated),
    nat64_tcp_fullcone_freed: cdktf.numberToTerraform(struct!.nat64TcpFullconeFreed),
    nat64_udp_alg_fullcone_created: cdktf.numberToTerraform(struct!.nat64UdpAlgFullconeCreated),
    nat64_udp_alg_fullcone_freed: cdktf.numberToTerraform(struct!.nat64UdpAlgFullconeFreed),
    nat64_udp_fullcone_created: cdktf.numberToTerraform(struct!.nat64UdpFullconeCreated),
    nat64_udp_fullcone_freed: cdktf.numberToTerraform(struct!.nat64UdpFullconeFreed),
    nat_port_unavailable_icmp: cdktf.numberToTerraform(struct!.natPortUnavailableIcmp),
    nat_port_unavailable_tcp: cdktf.numberToTerraform(struct!.natPortUnavailableTcp),
    nat_port_unavailable_udp: cdktf.numberToTerraform(struct!.natPortUnavailableUdp),
    port_overload_failed: cdktf.numberToTerraform(struct!.portOverloadFailed),
    port_overload_smp_delete_scheduled: cdktf.numberToTerraform(struct!.portOverloadSmpDeleteScheduled),
    session_user_quota_exceeded: cdktf.numberToTerraform(struct!.sessionUserQuotaExceeded),
    sixrd_drop: cdktf.numberToTerraform(struct!.sixrdDrop),
    standby_drop: cdktf.numberToTerraform(struct!.standbyDrop),
    total_icmp_allocated: cdktf.numberToTerraform(struct!.totalIcmpAllocated),
    total_icmp_freed: cdktf.numberToTerraform(struct!.totalIcmpFreed),
    total_nat_in_use: cdktf.numberToTerraform(struct!.totalNatInUse),
    total_tcp_alloc_overload: cdktf.numberToTerraform(struct!.totalTcpAllocOverload),
    total_tcp_allocated: cdktf.numberToTerraform(struct!.totalTcpAllocated),
    total_tcp_free_overload: cdktf.numberToTerraform(struct!.totalTcpFreeOverload),
    total_tcp_freed: cdktf.numberToTerraform(struct!.totalTcpFreed),
    total_tcp_overload_acquired: cdktf.numberToTerraform(struct!.totalTcpOverloadAcquired),
    total_tcp_overload_released: cdktf.numberToTerraform(struct!.totalTcpOverloadReleased),
    total_udp_alloc_overload: cdktf.numberToTerraform(struct!.totalUdpAllocOverload),
    total_udp_allocated: cdktf.numberToTerraform(struct!.totalUdpAllocated),
    total_udp_free_overload: cdktf.numberToTerraform(struct!.totalUdpFreeOverload),
    total_udp_freed: cdktf.numberToTerraform(struct!.totalUdpFreed),
    total_udp_overload_acquired: cdktf.numberToTerraform(struct!.totalUdpOverloadAcquired),
    total_udp_overload_released: cdktf.numberToTerraform(struct!.totalUdpOverloadReleased),
  }
}


export function dataThunderCgnv6FixedNatGlobalStatsStatsToHclTerraform(struct?: DataThunderCgnv6FixedNatGlobalStatsStatsOutputReference | DataThunderCgnv6FixedNatGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_subscriber_added: {
      value: cdktf.numberToHclTerraform(struct!.activeSubscriberAdded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    active_subscriber_removed: {
      value: cdktf.numberToHclTerraform(struct!.activeSubscriberRemoved),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    config_not_found: {
      value: cdktf.numberToHclTerraform(struct!.configNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dest_rlist_drop: {
      value: cdktf.numberToHclTerraform(struct!.destRlistDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dest_rlist_pass_through: {
      value: cdktf.numberToHclTerraform(struct!.destRlistPassThrough),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dest_rlist_snat_drop: {
      value: cdktf.numberToHclTerraform(struct!.destRlistSnatDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dslite_data_session_created: {
      value: cdktf.numberToHclTerraform(struct!.dsliteDataSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dslite_data_session_freed: {
      value: cdktf.numberToHclTerraform(struct!.dsliteDataSessionFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dslite_eif_limit_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.dsliteEifLimitExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dslite_eif_match: {
      value: cdktf.numberToHclTerraform(struct!.dsliteEifMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dslite_eim_match: {
      value: cdktf.numberToHclTerraform(struct!.dsliteEimMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dslite_hairpin: {
      value: cdktf.numberToHclTerraform(struct!.dsliteHairpin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dslite_inbound_filtered: {
      value: cdktf.numberToHclTerraform(struct!.dsliteInboundFiltered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dslite_tcp_fullcone_created: {
      value: cdktf.numberToHclTerraform(struct!.dsliteTcpFullconeCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dslite_tcp_fullcone_freed: {
      value: cdktf.numberToHclTerraform(struct!.dsliteTcpFullconeFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dslite_udp_alg_fullcone_created: {
      value: cdktf.numberToHclTerraform(struct!.dsliteUdpAlgFullconeCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dslite_udp_alg_fullcone_freed: {
      value: cdktf.numberToHclTerraform(struct!.dsliteUdpAlgFullconeFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dslite_udp_fullcone_created: {
      value: cdktf.numberToHclTerraform(struct!.dsliteUdpFullconeCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dslite_udp_fullcone_freed: {
      value: cdktf.numberToHclTerraform(struct!.dsliteUdpFullconeFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_nat_fullcone_self_hairpinning_drop: {
      value: cdktf.numberToHclTerraform(struct!.fixedNatFullconeSelfHairpinningDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_fwd_egress_bytes_icmp: {
      value: cdktf.numberToHclTerraform(struct!.fnat44FwdEgressBytesIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_fwd_egress_bytes_others: {
      value: cdktf.numberToHclTerraform(struct!.fnat44FwdEgressBytesOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_fwd_egress_bytes_tcp: {
      value: cdktf.numberToHclTerraform(struct!.fnat44FwdEgressBytesTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_fwd_egress_bytes_udp: {
      value: cdktf.numberToHclTerraform(struct!.fnat44FwdEgressBytesUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_fwd_egress_packets_icmp: {
      value: cdktf.numberToHclTerraform(struct!.fnat44FwdEgressPacketsIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_fwd_egress_packets_others: {
      value: cdktf.numberToHclTerraform(struct!.fnat44FwdEgressPacketsOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_fwd_egress_packets_tcp: {
      value: cdktf.numberToHclTerraform(struct!.fnat44FwdEgressPacketsTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_fwd_egress_packets_udp: {
      value: cdktf.numberToHclTerraform(struct!.fnat44FwdEgressPacketsUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_fwd_egress_pkt_size_range1: {
      value: cdktf.numberToHclTerraform(struct!.fnat44FwdEgressPktSizeRange1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_fwd_egress_pkt_size_range2: {
      value: cdktf.numberToHclTerraform(struct!.fnat44FwdEgressPktSizeRange2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_fwd_egress_pkt_size_range3: {
      value: cdktf.numberToHclTerraform(struct!.fnat44FwdEgressPktSizeRange3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_fwd_egress_pkt_size_range4: {
      value: cdktf.numberToHclTerraform(struct!.fnat44FwdEgressPktSizeRange4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_fwd_ingress_bytes_icmp: {
      value: cdktf.numberToHclTerraform(struct!.fnat44FwdIngressBytesIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_fwd_ingress_bytes_others: {
      value: cdktf.numberToHclTerraform(struct!.fnat44FwdIngressBytesOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_fwd_ingress_bytes_tcp: {
      value: cdktf.numberToHclTerraform(struct!.fnat44FwdIngressBytesTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_fwd_ingress_bytes_udp: {
      value: cdktf.numberToHclTerraform(struct!.fnat44FwdIngressBytesUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_fwd_ingress_packets_icmp: {
      value: cdktf.numberToHclTerraform(struct!.fnat44FwdIngressPacketsIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_fwd_ingress_packets_others: {
      value: cdktf.numberToHclTerraform(struct!.fnat44FwdIngressPacketsOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_fwd_ingress_packets_tcp: {
      value: cdktf.numberToHclTerraform(struct!.fnat44FwdIngressPacketsTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_fwd_ingress_packets_udp: {
      value: cdktf.numberToHclTerraform(struct!.fnat44FwdIngressPacketsUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_fwd_ingress_pkt_size_range1: {
      value: cdktf.numberToHclTerraform(struct!.fnat44FwdIngressPktSizeRange1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_fwd_ingress_pkt_size_range2: {
      value: cdktf.numberToHclTerraform(struct!.fnat44FwdIngressPktSizeRange2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_fwd_ingress_pkt_size_range3: {
      value: cdktf.numberToHclTerraform(struct!.fnat44FwdIngressPktSizeRange3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_fwd_ingress_pkt_size_range4: {
      value: cdktf.numberToHclTerraform(struct!.fnat44FwdIngressPktSizeRange4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_rev_egress_bytes_icmp: {
      value: cdktf.numberToHclTerraform(struct!.fnat44RevEgressBytesIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_rev_egress_bytes_others: {
      value: cdktf.numberToHclTerraform(struct!.fnat44RevEgressBytesOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_rev_egress_bytes_tcp: {
      value: cdktf.numberToHclTerraform(struct!.fnat44RevEgressBytesTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_rev_egress_bytes_udp: {
      value: cdktf.numberToHclTerraform(struct!.fnat44RevEgressBytesUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_rev_egress_packets_icmp: {
      value: cdktf.numberToHclTerraform(struct!.fnat44RevEgressPacketsIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_rev_egress_packets_others: {
      value: cdktf.numberToHclTerraform(struct!.fnat44RevEgressPacketsOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_rev_egress_packets_tcp: {
      value: cdktf.numberToHclTerraform(struct!.fnat44RevEgressPacketsTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_rev_egress_packets_udp: {
      value: cdktf.numberToHclTerraform(struct!.fnat44RevEgressPacketsUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_rev_egress_pkt_size_range1: {
      value: cdktf.numberToHclTerraform(struct!.fnat44RevEgressPktSizeRange1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_rev_egress_pkt_size_range2: {
      value: cdktf.numberToHclTerraform(struct!.fnat44RevEgressPktSizeRange2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_rev_egress_pkt_size_range3: {
      value: cdktf.numberToHclTerraform(struct!.fnat44RevEgressPktSizeRange3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_rev_egress_pkt_size_range4: {
      value: cdktf.numberToHclTerraform(struct!.fnat44RevEgressPktSizeRange4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_rev_ingress_bytes_icmp: {
      value: cdktf.numberToHclTerraform(struct!.fnat44RevIngressBytesIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_rev_ingress_bytes_others: {
      value: cdktf.numberToHclTerraform(struct!.fnat44RevIngressBytesOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_rev_ingress_bytes_tcp: {
      value: cdktf.numberToHclTerraform(struct!.fnat44RevIngressBytesTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_rev_ingress_bytes_udp: {
      value: cdktf.numberToHclTerraform(struct!.fnat44RevIngressBytesUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_rev_ingress_packets_icmp: {
      value: cdktf.numberToHclTerraform(struct!.fnat44RevIngressPacketsIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_rev_ingress_packets_others: {
      value: cdktf.numberToHclTerraform(struct!.fnat44RevIngressPacketsOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_rev_ingress_packets_tcp: {
      value: cdktf.numberToHclTerraform(struct!.fnat44RevIngressPacketsTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_rev_ingress_packets_udp: {
      value: cdktf.numberToHclTerraform(struct!.fnat44RevIngressPacketsUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_rev_ingress_pkt_size_range1: {
      value: cdktf.numberToHclTerraform(struct!.fnat44RevIngressPktSizeRange1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_rev_ingress_pkt_size_range2: {
      value: cdktf.numberToHclTerraform(struct!.fnat44RevIngressPktSizeRange2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_rev_ingress_pkt_size_range3: {
      value: cdktf.numberToHclTerraform(struct!.fnat44RevIngressPktSizeRange3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat44_rev_ingress_pkt_size_range4: {
      value: cdktf.numberToHclTerraform(struct!.fnat44RevIngressPktSizeRange4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_fwd_egress_bytes_icmp: {
      value: cdktf.numberToHclTerraform(struct!.fnat64FwdEgressBytesIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_fwd_egress_bytes_others: {
      value: cdktf.numberToHclTerraform(struct!.fnat64FwdEgressBytesOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_fwd_egress_bytes_tcp: {
      value: cdktf.numberToHclTerraform(struct!.fnat64FwdEgressBytesTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_fwd_egress_bytes_udp: {
      value: cdktf.numberToHclTerraform(struct!.fnat64FwdEgressBytesUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_fwd_egress_packets_icmp: {
      value: cdktf.numberToHclTerraform(struct!.fnat64FwdEgressPacketsIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_fwd_egress_packets_others: {
      value: cdktf.numberToHclTerraform(struct!.fnat64FwdEgressPacketsOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_fwd_egress_packets_tcp: {
      value: cdktf.numberToHclTerraform(struct!.fnat64FwdEgressPacketsTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_fwd_egress_packets_udp: {
      value: cdktf.numberToHclTerraform(struct!.fnat64FwdEgressPacketsUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_fwd_egress_pkt_size_range1: {
      value: cdktf.numberToHclTerraform(struct!.fnat64FwdEgressPktSizeRange1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_fwd_egress_pkt_size_range2: {
      value: cdktf.numberToHclTerraform(struct!.fnat64FwdEgressPktSizeRange2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_fwd_egress_pkt_size_range3: {
      value: cdktf.numberToHclTerraform(struct!.fnat64FwdEgressPktSizeRange3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_fwd_egress_pkt_size_range4: {
      value: cdktf.numberToHclTerraform(struct!.fnat64FwdEgressPktSizeRange4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_fwd_ingress_bytes_icmp: {
      value: cdktf.numberToHclTerraform(struct!.fnat64FwdIngressBytesIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_fwd_ingress_bytes_others: {
      value: cdktf.numberToHclTerraform(struct!.fnat64FwdIngressBytesOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_fwd_ingress_bytes_tcp: {
      value: cdktf.numberToHclTerraform(struct!.fnat64FwdIngressBytesTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_fwd_ingress_bytes_udp: {
      value: cdktf.numberToHclTerraform(struct!.fnat64FwdIngressBytesUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_fwd_ingress_packets_icmp: {
      value: cdktf.numberToHclTerraform(struct!.fnat64FwdIngressPacketsIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_fwd_ingress_packets_others: {
      value: cdktf.numberToHclTerraform(struct!.fnat64FwdIngressPacketsOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_fwd_ingress_packets_tcp: {
      value: cdktf.numberToHclTerraform(struct!.fnat64FwdIngressPacketsTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_fwd_ingress_packets_udp: {
      value: cdktf.numberToHclTerraform(struct!.fnat64FwdIngressPacketsUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_fwd_ingress_pkt_size_range1: {
      value: cdktf.numberToHclTerraform(struct!.fnat64FwdIngressPktSizeRange1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_fwd_ingress_pkt_size_range2: {
      value: cdktf.numberToHclTerraform(struct!.fnat64FwdIngressPktSizeRange2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_fwd_ingress_pkt_size_range3: {
      value: cdktf.numberToHclTerraform(struct!.fnat64FwdIngressPktSizeRange3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_fwd_ingress_pkt_size_range4: {
      value: cdktf.numberToHclTerraform(struct!.fnat64FwdIngressPktSizeRange4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_rev_egress_bytes_icmp: {
      value: cdktf.numberToHclTerraform(struct!.fnat64RevEgressBytesIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_rev_egress_bytes_others: {
      value: cdktf.numberToHclTerraform(struct!.fnat64RevEgressBytesOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_rev_egress_bytes_tcp: {
      value: cdktf.numberToHclTerraform(struct!.fnat64RevEgressBytesTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_rev_egress_bytes_udp: {
      value: cdktf.numberToHclTerraform(struct!.fnat64RevEgressBytesUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_rev_egress_packets_icmp: {
      value: cdktf.numberToHclTerraform(struct!.fnat64RevEgressPacketsIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_rev_egress_packets_others: {
      value: cdktf.numberToHclTerraform(struct!.fnat64RevEgressPacketsOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_rev_egress_packets_tcp: {
      value: cdktf.numberToHclTerraform(struct!.fnat64RevEgressPacketsTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_rev_egress_packets_udp: {
      value: cdktf.numberToHclTerraform(struct!.fnat64RevEgressPacketsUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_rev_egress_pkt_size_range1: {
      value: cdktf.numberToHclTerraform(struct!.fnat64RevEgressPktSizeRange1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_rev_egress_pkt_size_range2: {
      value: cdktf.numberToHclTerraform(struct!.fnat64RevEgressPktSizeRange2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_rev_egress_pkt_size_range3: {
      value: cdktf.numberToHclTerraform(struct!.fnat64RevEgressPktSizeRange3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_rev_egress_pkt_size_range4: {
      value: cdktf.numberToHclTerraform(struct!.fnat64RevEgressPktSizeRange4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_rev_ingress_bytes_icmp: {
      value: cdktf.numberToHclTerraform(struct!.fnat64RevIngressBytesIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_rev_ingress_bytes_others: {
      value: cdktf.numberToHclTerraform(struct!.fnat64RevIngressBytesOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_rev_ingress_bytes_tcp: {
      value: cdktf.numberToHclTerraform(struct!.fnat64RevIngressBytesTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_rev_ingress_bytes_udp: {
      value: cdktf.numberToHclTerraform(struct!.fnat64RevIngressBytesUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_rev_ingress_packets_icmp: {
      value: cdktf.numberToHclTerraform(struct!.fnat64RevIngressPacketsIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_rev_ingress_packets_others: {
      value: cdktf.numberToHclTerraform(struct!.fnat64RevIngressPacketsOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_rev_ingress_packets_tcp: {
      value: cdktf.numberToHclTerraform(struct!.fnat64RevIngressPacketsTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_rev_ingress_packets_udp: {
      value: cdktf.numberToHclTerraform(struct!.fnat64RevIngressPacketsUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_rev_ingress_pkt_size_range1: {
      value: cdktf.numberToHclTerraform(struct!.fnat64RevIngressPktSizeRange1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_rev_ingress_pkt_size_range2: {
      value: cdktf.numberToHclTerraform(struct!.fnat64RevIngressPktSizeRange2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_rev_ingress_pkt_size_range3: {
      value: cdktf.numberToHclTerraform(struct!.fnat64RevIngressPktSizeRange3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnat64_rev_ingress_pkt_size_range4: {
      value: cdktf.numberToHclTerraform(struct!.fnat64RevIngressPktSizeRange4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_fwd_egress_bytes_icmp: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteFwdEgressBytesIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_fwd_egress_bytes_others: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteFwdEgressBytesOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_fwd_egress_bytes_tcp: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteFwdEgressBytesTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_fwd_egress_bytes_udp: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteFwdEgressBytesUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_fwd_egress_packets_icmp: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteFwdEgressPacketsIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_fwd_egress_packets_others: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteFwdEgressPacketsOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_fwd_egress_packets_tcp: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteFwdEgressPacketsTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_fwd_egress_packets_udp: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteFwdEgressPacketsUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_fwd_egress_pkt_size_range1: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteFwdEgressPktSizeRange1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_fwd_egress_pkt_size_range2: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteFwdEgressPktSizeRange2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_fwd_egress_pkt_size_range3: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteFwdEgressPktSizeRange3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_fwd_egress_pkt_size_range4: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteFwdEgressPktSizeRange4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_fwd_ingress_bytes_icmp: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteFwdIngressBytesIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_fwd_ingress_bytes_others: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteFwdIngressBytesOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_fwd_ingress_bytes_tcp: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteFwdIngressBytesTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_fwd_ingress_bytes_udp: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteFwdIngressBytesUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_fwd_ingress_packets_icmp: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteFwdIngressPacketsIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_fwd_ingress_packets_others: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteFwdIngressPacketsOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_fwd_ingress_packets_tcp: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteFwdIngressPacketsTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_fwd_ingress_packets_udp: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteFwdIngressPacketsUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_fwd_ingress_pkt_size_range1: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteFwdIngressPktSizeRange1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_fwd_ingress_pkt_size_range2: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteFwdIngressPktSizeRange2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_fwd_ingress_pkt_size_range3: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteFwdIngressPktSizeRange3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_fwd_ingress_pkt_size_range4: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteFwdIngressPktSizeRange4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_rev_egress_bytes_icmp: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteRevEgressBytesIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_rev_egress_bytes_others: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteRevEgressBytesOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_rev_egress_bytes_tcp: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteRevEgressBytesTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_rev_egress_bytes_udp: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteRevEgressBytesUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_rev_egress_packets_icmp: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteRevEgressPacketsIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_rev_egress_packets_others: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteRevEgressPacketsOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_rev_egress_packets_tcp: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteRevEgressPacketsTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_rev_egress_packets_udp: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteRevEgressPacketsUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_rev_egress_pkt_size_range1: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteRevEgressPktSizeRange1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_rev_egress_pkt_size_range2: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteRevEgressPktSizeRange2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_rev_egress_pkt_size_range3: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteRevEgressPktSizeRange3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_rev_egress_pkt_size_range4: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteRevEgressPktSizeRange4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_rev_ingress_bytes_icmp: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteRevIngressBytesIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_rev_ingress_bytes_others: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteRevIngressBytesOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_rev_ingress_bytes_tcp: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteRevIngressBytesTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_rev_ingress_bytes_udp: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteRevIngressBytesUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_rev_ingress_packets_icmp: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteRevIngressPacketsIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_rev_ingress_packets_others: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteRevIngressPacketsOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_rev_ingress_packets_tcp: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteRevIngressPacketsTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_rev_ingress_packets_udp: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteRevIngressPacketsUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_rev_ingress_pkt_size_range1: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteRevIngressPktSizeRange1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_rev_ingress_pkt_size_range2: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteRevIngressPktSizeRange2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_rev_ingress_pkt_size_range3: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteRevIngressPktSizeRange3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fnatdslite_rev_ingress_pkt_size_range4: {
      value: cdktf.numberToHclTerraform(struct!.fnatdsliteRevIngressPktSizeRange4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fullcone_failure: {
      value: cdktf.numberToHclTerraform(struct!.fullconeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_session_user_quota_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.haSessionUserQuotaExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat44_data_session_created: {
      value: cdktf.numberToHclTerraform(struct!.nat44DataSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat44_data_session_freed: {
      value: cdktf.numberToHclTerraform(struct!.nat44DataSessionFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat44_eif_limit_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.nat44EifLimitExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat44_eif_match: {
      value: cdktf.numberToHclTerraform(struct!.nat44EifMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat44_eim_match: {
      value: cdktf.numberToHclTerraform(struct!.nat44EimMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat44_hairpin: {
      value: cdktf.numberToHclTerraform(struct!.nat44Hairpin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat44_inbound_filtered: {
      value: cdktf.numberToHclTerraform(struct!.nat44InboundFiltered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat44_tcp_fullcone_created: {
      value: cdktf.numberToHclTerraform(struct!.nat44TcpFullconeCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat44_tcp_fullcone_freed: {
      value: cdktf.numberToHclTerraform(struct!.nat44TcpFullconeFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat44_udp_alg_fullcone_created: {
      value: cdktf.numberToHclTerraform(struct!.nat44UdpAlgFullconeCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat44_udp_alg_fullcone_freed: {
      value: cdktf.numberToHclTerraform(struct!.nat44UdpAlgFullconeFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat44_udp_fullcone_created: {
      value: cdktf.numberToHclTerraform(struct!.nat44UdpFullconeCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat44_udp_fullcone_freed: {
      value: cdktf.numberToHclTerraform(struct!.nat44UdpFullconeFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat64_data_session_created: {
      value: cdktf.numberToHclTerraform(struct!.nat64DataSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat64_data_session_freed: {
      value: cdktf.numberToHclTerraform(struct!.nat64DataSessionFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat64_eif_limit_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.nat64EifLimitExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat64_eif_match: {
      value: cdktf.numberToHclTerraform(struct!.nat64EifMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat64_eim_match: {
      value: cdktf.numberToHclTerraform(struct!.nat64EimMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat64_hairpin: {
      value: cdktf.numberToHclTerraform(struct!.nat64Hairpin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat64_inbound_filtered: {
      value: cdktf.numberToHclTerraform(struct!.nat64InboundFiltered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat64_tcp_fullcone_created: {
      value: cdktf.numberToHclTerraform(struct!.nat64TcpFullconeCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat64_tcp_fullcone_freed: {
      value: cdktf.numberToHclTerraform(struct!.nat64TcpFullconeFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat64_udp_alg_fullcone_created: {
      value: cdktf.numberToHclTerraform(struct!.nat64UdpAlgFullconeCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat64_udp_alg_fullcone_freed: {
      value: cdktf.numberToHclTerraform(struct!.nat64UdpAlgFullconeFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat64_udp_fullcone_created: {
      value: cdktf.numberToHclTerraform(struct!.nat64UdpFullconeCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat64_udp_fullcone_freed: {
      value: cdktf.numberToHclTerraform(struct!.nat64UdpFullconeFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_port_unavailable_icmp: {
      value: cdktf.numberToHclTerraform(struct!.natPortUnavailableIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_port_unavailable_tcp: {
      value: cdktf.numberToHclTerraform(struct!.natPortUnavailableTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_port_unavailable_udp: {
      value: cdktf.numberToHclTerraform(struct!.natPortUnavailableUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_overload_failed: {
      value: cdktf.numberToHclTerraform(struct!.portOverloadFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_overload_smp_delete_scheduled: {
      value: cdktf.numberToHclTerraform(struct!.portOverloadSmpDeleteScheduled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_user_quota_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.sessionUserQuotaExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sixrd_drop: {
      value: cdktf.numberToHclTerraform(struct!.sixrdDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    standby_drop: {
      value: cdktf.numberToHclTerraform(struct!.standbyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_icmp_allocated: {
      value: cdktf.numberToHclTerraform(struct!.totalIcmpAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_icmp_freed: {
      value: cdktf.numberToHclTerraform(struct!.totalIcmpFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_nat_in_use: {
      value: cdktf.numberToHclTerraform(struct!.totalNatInUse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_tcp_alloc_overload: {
      value: cdktf.numberToHclTerraform(struct!.totalTcpAllocOverload),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_tcp_allocated: {
      value: cdktf.numberToHclTerraform(struct!.totalTcpAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_tcp_free_overload: {
      value: cdktf.numberToHclTerraform(struct!.totalTcpFreeOverload),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_tcp_freed: {
      value: cdktf.numberToHclTerraform(struct!.totalTcpFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_tcp_overload_acquired: {
      value: cdktf.numberToHclTerraform(struct!.totalTcpOverloadAcquired),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_tcp_overload_released: {
      value: cdktf.numberToHclTerraform(struct!.totalTcpOverloadReleased),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_udp_alloc_overload: {
      value: cdktf.numberToHclTerraform(struct!.totalUdpAllocOverload),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_udp_allocated: {
      value: cdktf.numberToHclTerraform(struct!.totalUdpAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_udp_free_overload: {
      value: cdktf.numberToHclTerraform(struct!.totalUdpFreeOverload),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_udp_freed: {
      value: cdktf.numberToHclTerraform(struct!.totalUdpFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_udp_overload_acquired: {
      value: cdktf.numberToHclTerraform(struct!.totalUdpOverloadAcquired),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_udp_overload_released: {
      value: cdktf.numberToHclTerraform(struct!.totalUdpOverloadReleased),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6FixedNatGlobalStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6FixedNatGlobalStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeSubscriberAdded !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeSubscriberAdded = this._activeSubscriberAdded;
    }
    if (this._activeSubscriberRemoved !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeSubscriberRemoved = this._activeSubscriberRemoved;
    }
    if (this._configNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.configNotFound = this._configNotFound;
    }
    if (this._destRlistDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.destRlistDrop = this._destRlistDrop;
    }
    if (this._destRlistPassThrough !== undefined) {
      hasAnyValues = true;
      internalValueResult.destRlistPassThrough = this._destRlistPassThrough;
    }
    if (this._destRlistSnatDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.destRlistSnatDrop = this._destRlistSnatDrop;
    }
    if (this._dsliteDataSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsliteDataSessionCreated = this._dsliteDataSessionCreated;
    }
    if (this._dsliteDataSessionFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsliteDataSessionFreed = this._dsliteDataSessionFreed;
    }
    if (this._dsliteEifLimitExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsliteEifLimitExceeded = this._dsliteEifLimitExceeded;
    }
    if (this._dsliteEifMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsliteEifMatch = this._dsliteEifMatch;
    }
    if (this._dsliteEimMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsliteEimMatch = this._dsliteEimMatch;
    }
    if (this._dsliteHairpin !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsliteHairpin = this._dsliteHairpin;
    }
    if (this._dsliteInboundFiltered !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsliteInboundFiltered = this._dsliteInboundFiltered;
    }
    if (this._dsliteTcpFullconeCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsliteTcpFullconeCreated = this._dsliteTcpFullconeCreated;
    }
    if (this._dsliteTcpFullconeFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsliteTcpFullconeFreed = this._dsliteTcpFullconeFreed;
    }
    if (this._dsliteUdpAlgFullconeCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsliteUdpAlgFullconeCreated = this._dsliteUdpAlgFullconeCreated;
    }
    if (this._dsliteUdpAlgFullconeFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsliteUdpAlgFullconeFreed = this._dsliteUdpAlgFullconeFreed;
    }
    if (this._dsliteUdpFullconeCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsliteUdpFullconeCreated = this._dsliteUdpFullconeCreated;
    }
    if (this._dsliteUdpFullconeFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsliteUdpFullconeFreed = this._dsliteUdpFullconeFreed;
    }
    if (this._fixedNatFullconeSelfHairpinningDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedNatFullconeSelfHairpinningDrop = this._fixedNatFullconeSelfHairpinningDrop;
    }
    if (this._fnat44FwdEgressBytesIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44FwdEgressBytesIcmp = this._fnat44FwdEgressBytesIcmp;
    }
    if (this._fnat44FwdEgressBytesOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44FwdEgressBytesOthers = this._fnat44FwdEgressBytesOthers;
    }
    if (this._fnat44FwdEgressBytesTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44FwdEgressBytesTcp = this._fnat44FwdEgressBytesTcp;
    }
    if (this._fnat44FwdEgressBytesUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44FwdEgressBytesUdp = this._fnat44FwdEgressBytesUdp;
    }
    if (this._fnat44FwdEgressPacketsIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44FwdEgressPacketsIcmp = this._fnat44FwdEgressPacketsIcmp;
    }
    if (this._fnat44FwdEgressPacketsOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44FwdEgressPacketsOthers = this._fnat44FwdEgressPacketsOthers;
    }
    if (this._fnat44FwdEgressPacketsTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44FwdEgressPacketsTcp = this._fnat44FwdEgressPacketsTcp;
    }
    if (this._fnat44FwdEgressPacketsUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44FwdEgressPacketsUdp = this._fnat44FwdEgressPacketsUdp;
    }
    if (this._fnat44FwdEgressPktSizeRange1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44FwdEgressPktSizeRange1 = this._fnat44FwdEgressPktSizeRange1;
    }
    if (this._fnat44FwdEgressPktSizeRange2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44FwdEgressPktSizeRange2 = this._fnat44FwdEgressPktSizeRange2;
    }
    if (this._fnat44FwdEgressPktSizeRange3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44FwdEgressPktSizeRange3 = this._fnat44FwdEgressPktSizeRange3;
    }
    if (this._fnat44FwdEgressPktSizeRange4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44FwdEgressPktSizeRange4 = this._fnat44FwdEgressPktSizeRange4;
    }
    if (this._fnat44FwdIngressBytesIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44FwdIngressBytesIcmp = this._fnat44FwdIngressBytesIcmp;
    }
    if (this._fnat44FwdIngressBytesOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44FwdIngressBytesOthers = this._fnat44FwdIngressBytesOthers;
    }
    if (this._fnat44FwdIngressBytesTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44FwdIngressBytesTcp = this._fnat44FwdIngressBytesTcp;
    }
    if (this._fnat44FwdIngressBytesUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44FwdIngressBytesUdp = this._fnat44FwdIngressBytesUdp;
    }
    if (this._fnat44FwdIngressPacketsIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44FwdIngressPacketsIcmp = this._fnat44FwdIngressPacketsIcmp;
    }
    if (this._fnat44FwdIngressPacketsOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44FwdIngressPacketsOthers = this._fnat44FwdIngressPacketsOthers;
    }
    if (this._fnat44FwdIngressPacketsTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44FwdIngressPacketsTcp = this._fnat44FwdIngressPacketsTcp;
    }
    if (this._fnat44FwdIngressPacketsUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44FwdIngressPacketsUdp = this._fnat44FwdIngressPacketsUdp;
    }
    if (this._fnat44FwdIngressPktSizeRange1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44FwdIngressPktSizeRange1 = this._fnat44FwdIngressPktSizeRange1;
    }
    if (this._fnat44FwdIngressPktSizeRange2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44FwdIngressPktSizeRange2 = this._fnat44FwdIngressPktSizeRange2;
    }
    if (this._fnat44FwdIngressPktSizeRange3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44FwdIngressPktSizeRange3 = this._fnat44FwdIngressPktSizeRange3;
    }
    if (this._fnat44FwdIngressPktSizeRange4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44FwdIngressPktSizeRange4 = this._fnat44FwdIngressPktSizeRange4;
    }
    if (this._fnat44RevEgressBytesIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44RevEgressBytesIcmp = this._fnat44RevEgressBytesIcmp;
    }
    if (this._fnat44RevEgressBytesOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44RevEgressBytesOthers = this._fnat44RevEgressBytesOthers;
    }
    if (this._fnat44RevEgressBytesTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44RevEgressBytesTcp = this._fnat44RevEgressBytesTcp;
    }
    if (this._fnat44RevEgressBytesUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44RevEgressBytesUdp = this._fnat44RevEgressBytesUdp;
    }
    if (this._fnat44RevEgressPacketsIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44RevEgressPacketsIcmp = this._fnat44RevEgressPacketsIcmp;
    }
    if (this._fnat44RevEgressPacketsOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44RevEgressPacketsOthers = this._fnat44RevEgressPacketsOthers;
    }
    if (this._fnat44RevEgressPacketsTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44RevEgressPacketsTcp = this._fnat44RevEgressPacketsTcp;
    }
    if (this._fnat44RevEgressPacketsUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44RevEgressPacketsUdp = this._fnat44RevEgressPacketsUdp;
    }
    if (this._fnat44RevEgressPktSizeRange1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44RevEgressPktSizeRange1 = this._fnat44RevEgressPktSizeRange1;
    }
    if (this._fnat44RevEgressPktSizeRange2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44RevEgressPktSizeRange2 = this._fnat44RevEgressPktSizeRange2;
    }
    if (this._fnat44RevEgressPktSizeRange3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44RevEgressPktSizeRange3 = this._fnat44RevEgressPktSizeRange3;
    }
    if (this._fnat44RevEgressPktSizeRange4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44RevEgressPktSizeRange4 = this._fnat44RevEgressPktSizeRange4;
    }
    if (this._fnat44RevIngressBytesIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44RevIngressBytesIcmp = this._fnat44RevIngressBytesIcmp;
    }
    if (this._fnat44RevIngressBytesOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44RevIngressBytesOthers = this._fnat44RevIngressBytesOthers;
    }
    if (this._fnat44RevIngressBytesTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44RevIngressBytesTcp = this._fnat44RevIngressBytesTcp;
    }
    if (this._fnat44RevIngressBytesUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44RevIngressBytesUdp = this._fnat44RevIngressBytesUdp;
    }
    if (this._fnat44RevIngressPacketsIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44RevIngressPacketsIcmp = this._fnat44RevIngressPacketsIcmp;
    }
    if (this._fnat44RevIngressPacketsOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44RevIngressPacketsOthers = this._fnat44RevIngressPacketsOthers;
    }
    if (this._fnat44RevIngressPacketsTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44RevIngressPacketsTcp = this._fnat44RevIngressPacketsTcp;
    }
    if (this._fnat44RevIngressPacketsUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44RevIngressPacketsUdp = this._fnat44RevIngressPacketsUdp;
    }
    if (this._fnat44RevIngressPktSizeRange1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44RevIngressPktSizeRange1 = this._fnat44RevIngressPktSizeRange1;
    }
    if (this._fnat44RevIngressPktSizeRange2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44RevIngressPktSizeRange2 = this._fnat44RevIngressPktSizeRange2;
    }
    if (this._fnat44RevIngressPktSizeRange3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44RevIngressPktSizeRange3 = this._fnat44RevIngressPktSizeRange3;
    }
    if (this._fnat44RevIngressPktSizeRange4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat44RevIngressPktSizeRange4 = this._fnat44RevIngressPktSizeRange4;
    }
    if (this._fnat64FwdEgressBytesIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64FwdEgressBytesIcmp = this._fnat64FwdEgressBytesIcmp;
    }
    if (this._fnat64FwdEgressBytesOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64FwdEgressBytesOthers = this._fnat64FwdEgressBytesOthers;
    }
    if (this._fnat64FwdEgressBytesTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64FwdEgressBytesTcp = this._fnat64FwdEgressBytesTcp;
    }
    if (this._fnat64FwdEgressBytesUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64FwdEgressBytesUdp = this._fnat64FwdEgressBytesUdp;
    }
    if (this._fnat64FwdEgressPacketsIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64FwdEgressPacketsIcmp = this._fnat64FwdEgressPacketsIcmp;
    }
    if (this._fnat64FwdEgressPacketsOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64FwdEgressPacketsOthers = this._fnat64FwdEgressPacketsOthers;
    }
    if (this._fnat64FwdEgressPacketsTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64FwdEgressPacketsTcp = this._fnat64FwdEgressPacketsTcp;
    }
    if (this._fnat64FwdEgressPacketsUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64FwdEgressPacketsUdp = this._fnat64FwdEgressPacketsUdp;
    }
    if (this._fnat64FwdEgressPktSizeRange1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64FwdEgressPktSizeRange1 = this._fnat64FwdEgressPktSizeRange1;
    }
    if (this._fnat64FwdEgressPktSizeRange2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64FwdEgressPktSizeRange2 = this._fnat64FwdEgressPktSizeRange2;
    }
    if (this._fnat64FwdEgressPktSizeRange3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64FwdEgressPktSizeRange3 = this._fnat64FwdEgressPktSizeRange3;
    }
    if (this._fnat64FwdEgressPktSizeRange4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64FwdEgressPktSizeRange4 = this._fnat64FwdEgressPktSizeRange4;
    }
    if (this._fnat64FwdIngressBytesIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64FwdIngressBytesIcmp = this._fnat64FwdIngressBytesIcmp;
    }
    if (this._fnat64FwdIngressBytesOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64FwdIngressBytesOthers = this._fnat64FwdIngressBytesOthers;
    }
    if (this._fnat64FwdIngressBytesTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64FwdIngressBytesTcp = this._fnat64FwdIngressBytesTcp;
    }
    if (this._fnat64FwdIngressBytesUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64FwdIngressBytesUdp = this._fnat64FwdIngressBytesUdp;
    }
    if (this._fnat64FwdIngressPacketsIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64FwdIngressPacketsIcmp = this._fnat64FwdIngressPacketsIcmp;
    }
    if (this._fnat64FwdIngressPacketsOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64FwdIngressPacketsOthers = this._fnat64FwdIngressPacketsOthers;
    }
    if (this._fnat64FwdIngressPacketsTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64FwdIngressPacketsTcp = this._fnat64FwdIngressPacketsTcp;
    }
    if (this._fnat64FwdIngressPacketsUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64FwdIngressPacketsUdp = this._fnat64FwdIngressPacketsUdp;
    }
    if (this._fnat64FwdIngressPktSizeRange1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64FwdIngressPktSizeRange1 = this._fnat64FwdIngressPktSizeRange1;
    }
    if (this._fnat64FwdIngressPktSizeRange2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64FwdIngressPktSizeRange2 = this._fnat64FwdIngressPktSizeRange2;
    }
    if (this._fnat64FwdIngressPktSizeRange3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64FwdIngressPktSizeRange3 = this._fnat64FwdIngressPktSizeRange3;
    }
    if (this._fnat64FwdIngressPktSizeRange4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64FwdIngressPktSizeRange4 = this._fnat64FwdIngressPktSizeRange4;
    }
    if (this._fnat64RevEgressBytesIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64RevEgressBytesIcmp = this._fnat64RevEgressBytesIcmp;
    }
    if (this._fnat64RevEgressBytesOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64RevEgressBytesOthers = this._fnat64RevEgressBytesOthers;
    }
    if (this._fnat64RevEgressBytesTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64RevEgressBytesTcp = this._fnat64RevEgressBytesTcp;
    }
    if (this._fnat64RevEgressBytesUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64RevEgressBytesUdp = this._fnat64RevEgressBytesUdp;
    }
    if (this._fnat64RevEgressPacketsIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64RevEgressPacketsIcmp = this._fnat64RevEgressPacketsIcmp;
    }
    if (this._fnat64RevEgressPacketsOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64RevEgressPacketsOthers = this._fnat64RevEgressPacketsOthers;
    }
    if (this._fnat64RevEgressPacketsTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64RevEgressPacketsTcp = this._fnat64RevEgressPacketsTcp;
    }
    if (this._fnat64RevEgressPacketsUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64RevEgressPacketsUdp = this._fnat64RevEgressPacketsUdp;
    }
    if (this._fnat64RevEgressPktSizeRange1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64RevEgressPktSizeRange1 = this._fnat64RevEgressPktSizeRange1;
    }
    if (this._fnat64RevEgressPktSizeRange2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64RevEgressPktSizeRange2 = this._fnat64RevEgressPktSizeRange2;
    }
    if (this._fnat64RevEgressPktSizeRange3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64RevEgressPktSizeRange3 = this._fnat64RevEgressPktSizeRange3;
    }
    if (this._fnat64RevEgressPktSizeRange4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64RevEgressPktSizeRange4 = this._fnat64RevEgressPktSizeRange4;
    }
    if (this._fnat64RevIngressBytesIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64RevIngressBytesIcmp = this._fnat64RevIngressBytesIcmp;
    }
    if (this._fnat64RevIngressBytesOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64RevIngressBytesOthers = this._fnat64RevIngressBytesOthers;
    }
    if (this._fnat64RevIngressBytesTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64RevIngressBytesTcp = this._fnat64RevIngressBytesTcp;
    }
    if (this._fnat64RevIngressBytesUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64RevIngressBytesUdp = this._fnat64RevIngressBytesUdp;
    }
    if (this._fnat64RevIngressPacketsIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64RevIngressPacketsIcmp = this._fnat64RevIngressPacketsIcmp;
    }
    if (this._fnat64RevIngressPacketsOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64RevIngressPacketsOthers = this._fnat64RevIngressPacketsOthers;
    }
    if (this._fnat64RevIngressPacketsTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64RevIngressPacketsTcp = this._fnat64RevIngressPacketsTcp;
    }
    if (this._fnat64RevIngressPacketsUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64RevIngressPacketsUdp = this._fnat64RevIngressPacketsUdp;
    }
    if (this._fnat64RevIngressPktSizeRange1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64RevIngressPktSizeRange1 = this._fnat64RevIngressPktSizeRange1;
    }
    if (this._fnat64RevIngressPktSizeRange2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64RevIngressPktSizeRange2 = this._fnat64RevIngressPktSizeRange2;
    }
    if (this._fnat64RevIngressPktSizeRange3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64RevIngressPktSizeRange3 = this._fnat64RevIngressPktSizeRange3;
    }
    if (this._fnat64RevIngressPktSizeRange4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnat64RevIngressPktSizeRange4 = this._fnat64RevIngressPktSizeRange4;
    }
    if (this._fnatdsliteFwdEgressBytesIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteFwdEgressBytesIcmp = this._fnatdsliteFwdEgressBytesIcmp;
    }
    if (this._fnatdsliteFwdEgressBytesOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteFwdEgressBytesOthers = this._fnatdsliteFwdEgressBytesOthers;
    }
    if (this._fnatdsliteFwdEgressBytesTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteFwdEgressBytesTcp = this._fnatdsliteFwdEgressBytesTcp;
    }
    if (this._fnatdsliteFwdEgressBytesUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteFwdEgressBytesUdp = this._fnatdsliteFwdEgressBytesUdp;
    }
    if (this._fnatdsliteFwdEgressPacketsIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteFwdEgressPacketsIcmp = this._fnatdsliteFwdEgressPacketsIcmp;
    }
    if (this._fnatdsliteFwdEgressPacketsOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteFwdEgressPacketsOthers = this._fnatdsliteFwdEgressPacketsOthers;
    }
    if (this._fnatdsliteFwdEgressPacketsTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteFwdEgressPacketsTcp = this._fnatdsliteFwdEgressPacketsTcp;
    }
    if (this._fnatdsliteFwdEgressPacketsUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteFwdEgressPacketsUdp = this._fnatdsliteFwdEgressPacketsUdp;
    }
    if (this._fnatdsliteFwdEgressPktSizeRange1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteFwdEgressPktSizeRange1 = this._fnatdsliteFwdEgressPktSizeRange1;
    }
    if (this._fnatdsliteFwdEgressPktSizeRange2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteFwdEgressPktSizeRange2 = this._fnatdsliteFwdEgressPktSizeRange2;
    }
    if (this._fnatdsliteFwdEgressPktSizeRange3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteFwdEgressPktSizeRange3 = this._fnatdsliteFwdEgressPktSizeRange3;
    }
    if (this._fnatdsliteFwdEgressPktSizeRange4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteFwdEgressPktSizeRange4 = this._fnatdsliteFwdEgressPktSizeRange4;
    }
    if (this._fnatdsliteFwdIngressBytesIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteFwdIngressBytesIcmp = this._fnatdsliteFwdIngressBytesIcmp;
    }
    if (this._fnatdsliteFwdIngressBytesOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteFwdIngressBytesOthers = this._fnatdsliteFwdIngressBytesOthers;
    }
    if (this._fnatdsliteFwdIngressBytesTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteFwdIngressBytesTcp = this._fnatdsliteFwdIngressBytesTcp;
    }
    if (this._fnatdsliteFwdIngressBytesUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteFwdIngressBytesUdp = this._fnatdsliteFwdIngressBytesUdp;
    }
    if (this._fnatdsliteFwdIngressPacketsIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteFwdIngressPacketsIcmp = this._fnatdsliteFwdIngressPacketsIcmp;
    }
    if (this._fnatdsliteFwdIngressPacketsOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteFwdIngressPacketsOthers = this._fnatdsliteFwdIngressPacketsOthers;
    }
    if (this._fnatdsliteFwdIngressPacketsTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteFwdIngressPacketsTcp = this._fnatdsliteFwdIngressPacketsTcp;
    }
    if (this._fnatdsliteFwdIngressPacketsUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteFwdIngressPacketsUdp = this._fnatdsliteFwdIngressPacketsUdp;
    }
    if (this._fnatdsliteFwdIngressPktSizeRange1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteFwdIngressPktSizeRange1 = this._fnatdsliteFwdIngressPktSizeRange1;
    }
    if (this._fnatdsliteFwdIngressPktSizeRange2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteFwdIngressPktSizeRange2 = this._fnatdsliteFwdIngressPktSizeRange2;
    }
    if (this._fnatdsliteFwdIngressPktSizeRange3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteFwdIngressPktSizeRange3 = this._fnatdsliteFwdIngressPktSizeRange3;
    }
    if (this._fnatdsliteFwdIngressPktSizeRange4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteFwdIngressPktSizeRange4 = this._fnatdsliteFwdIngressPktSizeRange4;
    }
    if (this._fnatdsliteRevEgressBytesIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteRevEgressBytesIcmp = this._fnatdsliteRevEgressBytesIcmp;
    }
    if (this._fnatdsliteRevEgressBytesOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteRevEgressBytesOthers = this._fnatdsliteRevEgressBytesOthers;
    }
    if (this._fnatdsliteRevEgressBytesTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteRevEgressBytesTcp = this._fnatdsliteRevEgressBytesTcp;
    }
    if (this._fnatdsliteRevEgressBytesUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteRevEgressBytesUdp = this._fnatdsliteRevEgressBytesUdp;
    }
    if (this._fnatdsliteRevEgressPacketsIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteRevEgressPacketsIcmp = this._fnatdsliteRevEgressPacketsIcmp;
    }
    if (this._fnatdsliteRevEgressPacketsOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteRevEgressPacketsOthers = this._fnatdsliteRevEgressPacketsOthers;
    }
    if (this._fnatdsliteRevEgressPacketsTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteRevEgressPacketsTcp = this._fnatdsliteRevEgressPacketsTcp;
    }
    if (this._fnatdsliteRevEgressPacketsUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteRevEgressPacketsUdp = this._fnatdsliteRevEgressPacketsUdp;
    }
    if (this._fnatdsliteRevEgressPktSizeRange1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteRevEgressPktSizeRange1 = this._fnatdsliteRevEgressPktSizeRange1;
    }
    if (this._fnatdsliteRevEgressPktSizeRange2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteRevEgressPktSizeRange2 = this._fnatdsliteRevEgressPktSizeRange2;
    }
    if (this._fnatdsliteRevEgressPktSizeRange3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteRevEgressPktSizeRange3 = this._fnatdsliteRevEgressPktSizeRange3;
    }
    if (this._fnatdsliteRevEgressPktSizeRange4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteRevEgressPktSizeRange4 = this._fnatdsliteRevEgressPktSizeRange4;
    }
    if (this._fnatdsliteRevIngressBytesIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteRevIngressBytesIcmp = this._fnatdsliteRevIngressBytesIcmp;
    }
    if (this._fnatdsliteRevIngressBytesOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteRevIngressBytesOthers = this._fnatdsliteRevIngressBytesOthers;
    }
    if (this._fnatdsliteRevIngressBytesTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteRevIngressBytesTcp = this._fnatdsliteRevIngressBytesTcp;
    }
    if (this._fnatdsliteRevIngressBytesUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteRevIngressBytesUdp = this._fnatdsliteRevIngressBytesUdp;
    }
    if (this._fnatdsliteRevIngressPacketsIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteRevIngressPacketsIcmp = this._fnatdsliteRevIngressPacketsIcmp;
    }
    if (this._fnatdsliteRevIngressPacketsOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteRevIngressPacketsOthers = this._fnatdsliteRevIngressPacketsOthers;
    }
    if (this._fnatdsliteRevIngressPacketsTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteRevIngressPacketsTcp = this._fnatdsliteRevIngressPacketsTcp;
    }
    if (this._fnatdsliteRevIngressPacketsUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteRevIngressPacketsUdp = this._fnatdsliteRevIngressPacketsUdp;
    }
    if (this._fnatdsliteRevIngressPktSizeRange1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteRevIngressPktSizeRange1 = this._fnatdsliteRevIngressPktSizeRange1;
    }
    if (this._fnatdsliteRevIngressPktSizeRange2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteRevIngressPktSizeRange2 = this._fnatdsliteRevIngressPktSizeRange2;
    }
    if (this._fnatdsliteRevIngressPktSizeRange3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteRevIngressPktSizeRange3 = this._fnatdsliteRevIngressPktSizeRange3;
    }
    if (this._fnatdsliteRevIngressPktSizeRange4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fnatdsliteRevIngressPktSizeRange4 = this._fnatdsliteRevIngressPktSizeRange4;
    }
    if (this._fullconeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullconeFailure = this._fullconeFailure;
    }
    if (this._haSessionUserQuotaExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.haSessionUserQuotaExceeded = this._haSessionUserQuotaExceeded;
    }
    if (this._nat44DataSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat44DataSessionCreated = this._nat44DataSessionCreated;
    }
    if (this._nat44DataSessionFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat44DataSessionFreed = this._nat44DataSessionFreed;
    }
    if (this._nat44EifLimitExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat44EifLimitExceeded = this._nat44EifLimitExceeded;
    }
    if (this._nat44EifMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat44EifMatch = this._nat44EifMatch;
    }
    if (this._nat44EimMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat44EimMatch = this._nat44EimMatch;
    }
    if (this._nat44Hairpin !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat44Hairpin = this._nat44Hairpin;
    }
    if (this._nat44InboundFiltered !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat44InboundFiltered = this._nat44InboundFiltered;
    }
    if (this._nat44TcpFullconeCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat44TcpFullconeCreated = this._nat44TcpFullconeCreated;
    }
    if (this._nat44TcpFullconeFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat44TcpFullconeFreed = this._nat44TcpFullconeFreed;
    }
    if (this._nat44UdpAlgFullconeCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat44UdpAlgFullconeCreated = this._nat44UdpAlgFullconeCreated;
    }
    if (this._nat44UdpAlgFullconeFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat44UdpAlgFullconeFreed = this._nat44UdpAlgFullconeFreed;
    }
    if (this._nat44UdpFullconeCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat44UdpFullconeCreated = this._nat44UdpFullconeCreated;
    }
    if (this._nat44UdpFullconeFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat44UdpFullconeFreed = this._nat44UdpFullconeFreed;
    }
    if (this._nat64DataSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64DataSessionCreated = this._nat64DataSessionCreated;
    }
    if (this._nat64DataSessionFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64DataSessionFreed = this._nat64DataSessionFreed;
    }
    if (this._nat64EifLimitExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64EifLimitExceeded = this._nat64EifLimitExceeded;
    }
    if (this._nat64EifMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64EifMatch = this._nat64EifMatch;
    }
    if (this._nat64EimMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64EimMatch = this._nat64EimMatch;
    }
    if (this._nat64Hairpin !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64Hairpin = this._nat64Hairpin;
    }
    if (this._nat64InboundFiltered !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64InboundFiltered = this._nat64InboundFiltered;
    }
    if (this._nat64TcpFullconeCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64TcpFullconeCreated = this._nat64TcpFullconeCreated;
    }
    if (this._nat64TcpFullconeFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64TcpFullconeFreed = this._nat64TcpFullconeFreed;
    }
    if (this._nat64UdpAlgFullconeCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64UdpAlgFullconeCreated = this._nat64UdpAlgFullconeCreated;
    }
    if (this._nat64UdpAlgFullconeFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64UdpAlgFullconeFreed = this._nat64UdpAlgFullconeFreed;
    }
    if (this._nat64UdpFullconeCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64UdpFullconeCreated = this._nat64UdpFullconeCreated;
    }
    if (this._nat64UdpFullconeFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64UdpFullconeFreed = this._nat64UdpFullconeFreed;
    }
    if (this._natPortUnavailableIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPortUnavailableIcmp = this._natPortUnavailableIcmp;
    }
    if (this._natPortUnavailableTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPortUnavailableTcp = this._natPortUnavailableTcp;
    }
    if (this._natPortUnavailableUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPortUnavailableUdp = this._natPortUnavailableUdp;
    }
    if (this._portOverloadFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portOverloadFailed = this._portOverloadFailed;
    }
    if (this._portOverloadSmpDeleteScheduled !== undefined) {
      hasAnyValues = true;
      internalValueResult.portOverloadSmpDeleteScheduled = this._portOverloadSmpDeleteScheduled;
    }
    if (this._sessionUserQuotaExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionUserQuotaExceeded = this._sessionUserQuotaExceeded;
    }
    if (this._sixrdDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.sixrdDrop = this._sixrdDrop;
    }
    if (this._standbyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.standbyDrop = this._standbyDrop;
    }
    if (this._totalIcmpAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalIcmpAllocated = this._totalIcmpAllocated;
    }
    if (this._totalIcmpFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalIcmpFreed = this._totalIcmpFreed;
    }
    if (this._totalNatInUse !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalNatInUse = this._totalNatInUse;
    }
    if (this._totalTcpAllocOverload !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalTcpAllocOverload = this._totalTcpAllocOverload;
    }
    if (this._totalTcpAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalTcpAllocated = this._totalTcpAllocated;
    }
    if (this._totalTcpFreeOverload !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalTcpFreeOverload = this._totalTcpFreeOverload;
    }
    if (this._totalTcpFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalTcpFreed = this._totalTcpFreed;
    }
    if (this._totalTcpOverloadAcquired !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalTcpOverloadAcquired = this._totalTcpOverloadAcquired;
    }
    if (this._totalTcpOverloadReleased !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalTcpOverloadReleased = this._totalTcpOverloadReleased;
    }
    if (this._totalUdpAllocOverload !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalUdpAllocOverload = this._totalUdpAllocOverload;
    }
    if (this._totalUdpAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalUdpAllocated = this._totalUdpAllocated;
    }
    if (this._totalUdpFreeOverload !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalUdpFreeOverload = this._totalUdpFreeOverload;
    }
    if (this._totalUdpFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalUdpFreed = this._totalUdpFreed;
    }
    if (this._totalUdpOverloadAcquired !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalUdpOverloadAcquired = this._totalUdpOverloadAcquired;
    }
    if (this._totalUdpOverloadReleased !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalUdpOverloadReleased = this._totalUdpOverloadReleased;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6FixedNatGlobalStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeSubscriberAdded = undefined;
      this._activeSubscriberRemoved = undefined;
      this._configNotFound = undefined;
      this._destRlistDrop = undefined;
      this._destRlistPassThrough = undefined;
      this._destRlistSnatDrop = undefined;
      this._dsliteDataSessionCreated = undefined;
      this._dsliteDataSessionFreed = undefined;
      this._dsliteEifLimitExceeded = undefined;
      this._dsliteEifMatch = undefined;
      this._dsliteEimMatch = undefined;
      this._dsliteHairpin = undefined;
      this._dsliteInboundFiltered = undefined;
      this._dsliteTcpFullconeCreated = undefined;
      this._dsliteTcpFullconeFreed = undefined;
      this._dsliteUdpAlgFullconeCreated = undefined;
      this._dsliteUdpAlgFullconeFreed = undefined;
      this._dsliteUdpFullconeCreated = undefined;
      this._dsliteUdpFullconeFreed = undefined;
      this._fixedNatFullconeSelfHairpinningDrop = undefined;
      this._fnat44FwdEgressBytesIcmp = undefined;
      this._fnat44FwdEgressBytesOthers = undefined;
      this._fnat44FwdEgressBytesTcp = undefined;
      this._fnat44FwdEgressBytesUdp = undefined;
      this._fnat44FwdEgressPacketsIcmp = undefined;
      this._fnat44FwdEgressPacketsOthers = undefined;
      this._fnat44FwdEgressPacketsTcp = undefined;
      this._fnat44FwdEgressPacketsUdp = undefined;
      this._fnat44FwdEgressPktSizeRange1 = undefined;
      this._fnat44FwdEgressPktSizeRange2 = undefined;
      this._fnat44FwdEgressPktSizeRange3 = undefined;
      this._fnat44FwdEgressPktSizeRange4 = undefined;
      this._fnat44FwdIngressBytesIcmp = undefined;
      this._fnat44FwdIngressBytesOthers = undefined;
      this._fnat44FwdIngressBytesTcp = undefined;
      this._fnat44FwdIngressBytesUdp = undefined;
      this._fnat44FwdIngressPacketsIcmp = undefined;
      this._fnat44FwdIngressPacketsOthers = undefined;
      this._fnat44FwdIngressPacketsTcp = undefined;
      this._fnat44FwdIngressPacketsUdp = undefined;
      this._fnat44FwdIngressPktSizeRange1 = undefined;
      this._fnat44FwdIngressPktSizeRange2 = undefined;
      this._fnat44FwdIngressPktSizeRange3 = undefined;
      this._fnat44FwdIngressPktSizeRange4 = undefined;
      this._fnat44RevEgressBytesIcmp = undefined;
      this._fnat44RevEgressBytesOthers = undefined;
      this._fnat44RevEgressBytesTcp = undefined;
      this._fnat44RevEgressBytesUdp = undefined;
      this._fnat44RevEgressPacketsIcmp = undefined;
      this._fnat44RevEgressPacketsOthers = undefined;
      this._fnat44RevEgressPacketsTcp = undefined;
      this._fnat44RevEgressPacketsUdp = undefined;
      this._fnat44RevEgressPktSizeRange1 = undefined;
      this._fnat44RevEgressPktSizeRange2 = undefined;
      this._fnat44RevEgressPktSizeRange3 = undefined;
      this._fnat44RevEgressPktSizeRange4 = undefined;
      this._fnat44RevIngressBytesIcmp = undefined;
      this._fnat44RevIngressBytesOthers = undefined;
      this._fnat44RevIngressBytesTcp = undefined;
      this._fnat44RevIngressBytesUdp = undefined;
      this._fnat44RevIngressPacketsIcmp = undefined;
      this._fnat44RevIngressPacketsOthers = undefined;
      this._fnat44RevIngressPacketsTcp = undefined;
      this._fnat44RevIngressPacketsUdp = undefined;
      this._fnat44RevIngressPktSizeRange1 = undefined;
      this._fnat44RevIngressPktSizeRange2 = undefined;
      this._fnat44RevIngressPktSizeRange3 = undefined;
      this._fnat44RevIngressPktSizeRange4 = undefined;
      this._fnat64FwdEgressBytesIcmp = undefined;
      this._fnat64FwdEgressBytesOthers = undefined;
      this._fnat64FwdEgressBytesTcp = undefined;
      this._fnat64FwdEgressBytesUdp = undefined;
      this._fnat64FwdEgressPacketsIcmp = undefined;
      this._fnat64FwdEgressPacketsOthers = undefined;
      this._fnat64FwdEgressPacketsTcp = undefined;
      this._fnat64FwdEgressPacketsUdp = undefined;
      this._fnat64FwdEgressPktSizeRange1 = undefined;
      this._fnat64FwdEgressPktSizeRange2 = undefined;
      this._fnat64FwdEgressPktSizeRange3 = undefined;
      this._fnat64FwdEgressPktSizeRange4 = undefined;
      this._fnat64FwdIngressBytesIcmp = undefined;
      this._fnat64FwdIngressBytesOthers = undefined;
      this._fnat64FwdIngressBytesTcp = undefined;
      this._fnat64FwdIngressBytesUdp = undefined;
      this._fnat64FwdIngressPacketsIcmp = undefined;
      this._fnat64FwdIngressPacketsOthers = undefined;
      this._fnat64FwdIngressPacketsTcp = undefined;
      this._fnat64FwdIngressPacketsUdp = undefined;
      this._fnat64FwdIngressPktSizeRange1 = undefined;
      this._fnat64FwdIngressPktSizeRange2 = undefined;
      this._fnat64FwdIngressPktSizeRange3 = undefined;
      this._fnat64FwdIngressPktSizeRange4 = undefined;
      this._fnat64RevEgressBytesIcmp = undefined;
      this._fnat64RevEgressBytesOthers = undefined;
      this._fnat64RevEgressBytesTcp = undefined;
      this._fnat64RevEgressBytesUdp = undefined;
      this._fnat64RevEgressPacketsIcmp = undefined;
      this._fnat64RevEgressPacketsOthers = undefined;
      this._fnat64RevEgressPacketsTcp = undefined;
      this._fnat64RevEgressPacketsUdp = undefined;
      this._fnat64RevEgressPktSizeRange1 = undefined;
      this._fnat64RevEgressPktSizeRange2 = undefined;
      this._fnat64RevEgressPktSizeRange3 = undefined;
      this._fnat64RevEgressPktSizeRange4 = undefined;
      this._fnat64RevIngressBytesIcmp = undefined;
      this._fnat64RevIngressBytesOthers = undefined;
      this._fnat64RevIngressBytesTcp = undefined;
      this._fnat64RevIngressBytesUdp = undefined;
      this._fnat64RevIngressPacketsIcmp = undefined;
      this._fnat64RevIngressPacketsOthers = undefined;
      this._fnat64RevIngressPacketsTcp = undefined;
      this._fnat64RevIngressPacketsUdp = undefined;
      this._fnat64RevIngressPktSizeRange1 = undefined;
      this._fnat64RevIngressPktSizeRange2 = undefined;
      this._fnat64RevIngressPktSizeRange3 = undefined;
      this._fnat64RevIngressPktSizeRange4 = undefined;
      this._fnatdsliteFwdEgressBytesIcmp = undefined;
      this._fnatdsliteFwdEgressBytesOthers = undefined;
      this._fnatdsliteFwdEgressBytesTcp = undefined;
      this._fnatdsliteFwdEgressBytesUdp = undefined;
      this._fnatdsliteFwdEgressPacketsIcmp = undefined;
      this._fnatdsliteFwdEgressPacketsOthers = undefined;
      this._fnatdsliteFwdEgressPacketsTcp = undefined;
      this._fnatdsliteFwdEgressPacketsUdp = undefined;
      this._fnatdsliteFwdEgressPktSizeRange1 = undefined;
      this._fnatdsliteFwdEgressPktSizeRange2 = undefined;
      this._fnatdsliteFwdEgressPktSizeRange3 = undefined;
      this._fnatdsliteFwdEgressPktSizeRange4 = undefined;
      this._fnatdsliteFwdIngressBytesIcmp = undefined;
      this._fnatdsliteFwdIngressBytesOthers = undefined;
      this._fnatdsliteFwdIngressBytesTcp = undefined;
      this._fnatdsliteFwdIngressBytesUdp = undefined;
      this._fnatdsliteFwdIngressPacketsIcmp = undefined;
      this._fnatdsliteFwdIngressPacketsOthers = undefined;
      this._fnatdsliteFwdIngressPacketsTcp = undefined;
      this._fnatdsliteFwdIngressPacketsUdp = undefined;
      this._fnatdsliteFwdIngressPktSizeRange1 = undefined;
      this._fnatdsliteFwdIngressPktSizeRange2 = undefined;
      this._fnatdsliteFwdIngressPktSizeRange3 = undefined;
      this._fnatdsliteFwdIngressPktSizeRange4 = undefined;
      this._fnatdsliteRevEgressBytesIcmp = undefined;
      this._fnatdsliteRevEgressBytesOthers = undefined;
      this._fnatdsliteRevEgressBytesTcp = undefined;
      this._fnatdsliteRevEgressBytesUdp = undefined;
      this._fnatdsliteRevEgressPacketsIcmp = undefined;
      this._fnatdsliteRevEgressPacketsOthers = undefined;
      this._fnatdsliteRevEgressPacketsTcp = undefined;
      this._fnatdsliteRevEgressPacketsUdp = undefined;
      this._fnatdsliteRevEgressPktSizeRange1 = undefined;
      this._fnatdsliteRevEgressPktSizeRange2 = undefined;
      this._fnatdsliteRevEgressPktSizeRange3 = undefined;
      this._fnatdsliteRevEgressPktSizeRange4 = undefined;
      this._fnatdsliteRevIngressBytesIcmp = undefined;
      this._fnatdsliteRevIngressBytesOthers = undefined;
      this._fnatdsliteRevIngressBytesTcp = undefined;
      this._fnatdsliteRevIngressBytesUdp = undefined;
      this._fnatdsliteRevIngressPacketsIcmp = undefined;
      this._fnatdsliteRevIngressPacketsOthers = undefined;
      this._fnatdsliteRevIngressPacketsTcp = undefined;
      this._fnatdsliteRevIngressPacketsUdp = undefined;
      this._fnatdsliteRevIngressPktSizeRange1 = undefined;
      this._fnatdsliteRevIngressPktSizeRange2 = undefined;
      this._fnatdsliteRevIngressPktSizeRange3 = undefined;
      this._fnatdsliteRevIngressPktSizeRange4 = undefined;
      this._fullconeFailure = undefined;
      this._haSessionUserQuotaExceeded = undefined;
      this._nat44DataSessionCreated = undefined;
      this._nat44DataSessionFreed = undefined;
      this._nat44EifLimitExceeded = undefined;
      this._nat44EifMatch = undefined;
      this._nat44EimMatch = undefined;
      this._nat44Hairpin = undefined;
      this._nat44InboundFiltered = undefined;
      this._nat44TcpFullconeCreated = undefined;
      this._nat44TcpFullconeFreed = undefined;
      this._nat44UdpAlgFullconeCreated = undefined;
      this._nat44UdpAlgFullconeFreed = undefined;
      this._nat44UdpFullconeCreated = undefined;
      this._nat44UdpFullconeFreed = undefined;
      this._nat64DataSessionCreated = undefined;
      this._nat64DataSessionFreed = undefined;
      this._nat64EifLimitExceeded = undefined;
      this._nat64EifMatch = undefined;
      this._nat64EimMatch = undefined;
      this._nat64Hairpin = undefined;
      this._nat64InboundFiltered = undefined;
      this._nat64TcpFullconeCreated = undefined;
      this._nat64TcpFullconeFreed = undefined;
      this._nat64UdpAlgFullconeCreated = undefined;
      this._nat64UdpAlgFullconeFreed = undefined;
      this._nat64UdpFullconeCreated = undefined;
      this._nat64UdpFullconeFreed = undefined;
      this._natPortUnavailableIcmp = undefined;
      this._natPortUnavailableTcp = undefined;
      this._natPortUnavailableUdp = undefined;
      this._portOverloadFailed = undefined;
      this._portOverloadSmpDeleteScheduled = undefined;
      this._sessionUserQuotaExceeded = undefined;
      this._sixrdDrop = undefined;
      this._standbyDrop = undefined;
      this._totalIcmpAllocated = undefined;
      this._totalIcmpFreed = undefined;
      this._totalNatInUse = undefined;
      this._totalTcpAllocOverload = undefined;
      this._totalTcpAllocated = undefined;
      this._totalTcpFreeOverload = undefined;
      this._totalTcpFreed = undefined;
      this._totalTcpOverloadAcquired = undefined;
      this._totalTcpOverloadReleased = undefined;
      this._totalUdpAllocOverload = undefined;
      this._totalUdpAllocated = undefined;
      this._totalUdpFreeOverload = undefined;
      this._totalUdpFreed = undefined;
      this._totalUdpOverloadAcquired = undefined;
      this._totalUdpOverloadReleased = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeSubscriberAdded = value.activeSubscriberAdded;
      this._activeSubscriberRemoved = value.activeSubscriberRemoved;
      this._configNotFound = value.configNotFound;
      this._destRlistDrop = value.destRlistDrop;
      this._destRlistPassThrough = value.destRlistPassThrough;
      this._destRlistSnatDrop = value.destRlistSnatDrop;
      this._dsliteDataSessionCreated = value.dsliteDataSessionCreated;
      this._dsliteDataSessionFreed = value.dsliteDataSessionFreed;
      this._dsliteEifLimitExceeded = value.dsliteEifLimitExceeded;
      this._dsliteEifMatch = value.dsliteEifMatch;
      this._dsliteEimMatch = value.dsliteEimMatch;
      this._dsliteHairpin = value.dsliteHairpin;
      this._dsliteInboundFiltered = value.dsliteInboundFiltered;
      this._dsliteTcpFullconeCreated = value.dsliteTcpFullconeCreated;
      this._dsliteTcpFullconeFreed = value.dsliteTcpFullconeFreed;
      this._dsliteUdpAlgFullconeCreated = value.dsliteUdpAlgFullconeCreated;
      this._dsliteUdpAlgFullconeFreed = value.dsliteUdpAlgFullconeFreed;
      this._dsliteUdpFullconeCreated = value.dsliteUdpFullconeCreated;
      this._dsliteUdpFullconeFreed = value.dsliteUdpFullconeFreed;
      this._fixedNatFullconeSelfHairpinningDrop = value.fixedNatFullconeSelfHairpinningDrop;
      this._fnat44FwdEgressBytesIcmp = value.fnat44FwdEgressBytesIcmp;
      this._fnat44FwdEgressBytesOthers = value.fnat44FwdEgressBytesOthers;
      this._fnat44FwdEgressBytesTcp = value.fnat44FwdEgressBytesTcp;
      this._fnat44FwdEgressBytesUdp = value.fnat44FwdEgressBytesUdp;
      this._fnat44FwdEgressPacketsIcmp = value.fnat44FwdEgressPacketsIcmp;
      this._fnat44FwdEgressPacketsOthers = value.fnat44FwdEgressPacketsOthers;
      this._fnat44FwdEgressPacketsTcp = value.fnat44FwdEgressPacketsTcp;
      this._fnat44FwdEgressPacketsUdp = value.fnat44FwdEgressPacketsUdp;
      this._fnat44FwdEgressPktSizeRange1 = value.fnat44FwdEgressPktSizeRange1;
      this._fnat44FwdEgressPktSizeRange2 = value.fnat44FwdEgressPktSizeRange2;
      this._fnat44FwdEgressPktSizeRange3 = value.fnat44FwdEgressPktSizeRange3;
      this._fnat44FwdEgressPktSizeRange4 = value.fnat44FwdEgressPktSizeRange4;
      this._fnat44FwdIngressBytesIcmp = value.fnat44FwdIngressBytesIcmp;
      this._fnat44FwdIngressBytesOthers = value.fnat44FwdIngressBytesOthers;
      this._fnat44FwdIngressBytesTcp = value.fnat44FwdIngressBytesTcp;
      this._fnat44FwdIngressBytesUdp = value.fnat44FwdIngressBytesUdp;
      this._fnat44FwdIngressPacketsIcmp = value.fnat44FwdIngressPacketsIcmp;
      this._fnat44FwdIngressPacketsOthers = value.fnat44FwdIngressPacketsOthers;
      this._fnat44FwdIngressPacketsTcp = value.fnat44FwdIngressPacketsTcp;
      this._fnat44FwdIngressPacketsUdp = value.fnat44FwdIngressPacketsUdp;
      this._fnat44FwdIngressPktSizeRange1 = value.fnat44FwdIngressPktSizeRange1;
      this._fnat44FwdIngressPktSizeRange2 = value.fnat44FwdIngressPktSizeRange2;
      this._fnat44FwdIngressPktSizeRange3 = value.fnat44FwdIngressPktSizeRange3;
      this._fnat44FwdIngressPktSizeRange4 = value.fnat44FwdIngressPktSizeRange4;
      this._fnat44RevEgressBytesIcmp = value.fnat44RevEgressBytesIcmp;
      this._fnat44RevEgressBytesOthers = value.fnat44RevEgressBytesOthers;
      this._fnat44RevEgressBytesTcp = value.fnat44RevEgressBytesTcp;
      this._fnat44RevEgressBytesUdp = value.fnat44RevEgressBytesUdp;
      this._fnat44RevEgressPacketsIcmp = value.fnat44RevEgressPacketsIcmp;
      this._fnat44RevEgressPacketsOthers = value.fnat44RevEgressPacketsOthers;
      this._fnat44RevEgressPacketsTcp = value.fnat44RevEgressPacketsTcp;
      this._fnat44RevEgressPacketsUdp = value.fnat44RevEgressPacketsUdp;
      this._fnat44RevEgressPktSizeRange1 = value.fnat44RevEgressPktSizeRange1;
      this._fnat44RevEgressPktSizeRange2 = value.fnat44RevEgressPktSizeRange2;
      this._fnat44RevEgressPktSizeRange3 = value.fnat44RevEgressPktSizeRange3;
      this._fnat44RevEgressPktSizeRange4 = value.fnat44RevEgressPktSizeRange4;
      this._fnat44RevIngressBytesIcmp = value.fnat44RevIngressBytesIcmp;
      this._fnat44RevIngressBytesOthers = value.fnat44RevIngressBytesOthers;
      this._fnat44RevIngressBytesTcp = value.fnat44RevIngressBytesTcp;
      this._fnat44RevIngressBytesUdp = value.fnat44RevIngressBytesUdp;
      this._fnat44RevIngressPacketsIcmp = value.fnat44RevIngressPacketsIcmp;
      this._fnat44RevIngressPacketsOthers = value.fnat44RevIngressPacketsOthers;
      this._fnat44RevIngressPacketsTcp = value.fnat44RevIngressPacketsTcp;
      this._fnat44RevIngressPacketsUdp = value.fnat44RevIngressPacketsUdp;
      this._fnat44RevIngressPktSizeRange1 = value.fnat44RevIngressPktSizeRange1;
      this._fnat44RevIngressPktSizeRange2 = value.fnat44RevIngressPktSizeRange2;
      this._fnat44RevIngressPktSizeRange3 = value.fnat44RevIngressPktSizeRange3;
      this._fnat44RevIngressPktSizeRange4 = value.fnat44RevIngressPktSizeRange4;
      this._fnat64FwdEgressBytesIcmp = value.fnat64FwdEgressBytesIcmp;
      this._fnat64FwdEgressBytesOthers = value.fnat64FwdEgressBytesOthers;
      this._fnat64FwdEgressBytesTcp = value.fnat64FwdEgressBytesTcp;
      this._fnat64FwdEgressBytesUdp = value.fnat64FwdEgressBytesUdp;
      this._fnat64FwdEgressPacketsIcmp = value.fnat64FwdEgressPacketsIcmp;
      this._fnat64FwdEgressPacketsOthers = value.fnat64FwdEgressPacketsOthers;
      this._fnat64FwdEgressPacketsTcp = value.fnat64FwdEgressPacketsTcp;
      this._fnat64FwdEgressPacketsUdp = value.fnat64FwdEgressPacketsUdp;
      this._fnat64FwdEgressPktSizeRange1 = value.fnat64FwdEgressPktSizeRange1;
      this._fnat64FwdEgressPktSizeRange2 = value.fnat64FwdEgressPktSizeRange2;
      this._fnat64FwdEgressPktSizeRange3 = value.fnat64FwdEgressPktSizeRange3;
      this._fnat64FwdEgressPktSizeRange4 = value.fnat64FwdEgressPktSizeRange4;
      this._fnat64FwdIngressBytesIcmp = value.fnat64FwdIngressBytesIcmp;
      this._fnat64FwdIngressBytesOthers = value.fnat64FwdIngressBytesOthers;
      this._fnat64FwdIngressBytesTcp = value.fnat64FwdIngressBytesTcp;
      this._fnat64FwdIngressBytesUdp = value.fnat64FwdIngressBytesUdp;
      this._fnat64FwdIngressPacketsIcmp = value.fnat64FwdIngressPacketsIcmp;
      this._fnat64FwdIngressPacketsOthers = value.fnat64FwdIngressPacketsOthers;
      this._fnat64FwdIngressPacketsTcp = value.fnat64FwdIngressPacketsTcp;
      this._fnat64FwdIngressPacketsUdp = value.fnat64FwdIngressPacketsUdp;
      this._fnat64FwdIngressPktSizeRange1 = value.fnat64FwdIngressPktSizeRange1;
      this._fnat64FwdIngressPktSizeRange2 = value.fnat64FwdIngressPktSizeRange2;
      this._fnat64FwdIngressPktSizeRange3 = value.fnat64FwdIngressPktSizeRange3;
      this._fnat64FwdIngressPktSizeRange4 = value.fnat64FwdIngressPktSizeRange4;
      this._fnat64RevEgressBytesIcmp = value.fnat64RevEgressBytesIcmp;
      this._fnat64RevEgressBytesOthers = value.fnat64RevEgressBytesOthers;
      this._fnat64RevEgressBytesTcp = value.fnat64RevEgressBytesTcp;
      this._fnat64RevEgressBytesUdp = value.fnat64RevEgressBytesUdp;
      this._fnat64RevEgressPacketsIcmp = value.fnat64RevEgressPacketsIcmp;
      this._fnat64RevEgressPacketsOthers = value.fnat64RevEgressPacketsOthers;
      this._fnat64RevEgressPacketsTcp = value.fnat64RevEgressPacketsTcp;
      this._fnat64RevEgressPacketsUdp = value.fnat64RevEgressPacketsUdp;
      this._fnat64RevEgressPktSizeRange1 = value.fnat64RevEgressPktSizeRange1;
      this._fnat64RevEgressPktSizeRange2 = value.fnat64RevEgressPktSizeRange2;
      this._fnat64RevEgressPktSizeRange3 = value.fnat64RevEgressPktSizeRange3;
      this._fnat64RevEgressPktSizeRange4 = value.fnat64RevEgressPktSizeRange4;
      this._fnat64RevIngressBytesIcmp = value.fnat64RevIngressBytesIcmp;
      this._fnat64RevIngressBytesOthers = value.fnat64RevIngressBytesOthers;
      this._fnat64RevIngressBytesTcp = value.fnat64RevIngressBytesTcp;
      this._fnat64RevIngressBytesUdp = value.fnat64RevIngressBytesUdp;
      this._fnat64RevIngressPacketsIcmp = value.fnat64RevIngressPacketsIcmp;
      this._fnat64RevIngressPacketsOthers = value.fnat64RevIngressPacketsOthers;
      this._fnat64RevIngressPacketsTcp = value.fnat64RevIngressPacketsTcp;
      this._fnat64RevIngressPacketsUdp = value.fnat64RevIngressPacketsUdp;
      this._fnat64RevIngressPktSizeRange1 = value.fnat64RevIngressPktSizeRange1;
      this._fnat64RevIngressPktSizeRange2 = value.fnat64RevIngressPktSizeRange2;
      this._fnat64RevIngressPktSizeRange3 = value.fnat64RevIngressPktSizeRange3;
      this._fnat64RevIngressPktSizeRange4 = value.fnat64RevIngressPktSizeRange4;
      this._fnatdsliteFwdEgressBytesIcmp = value.fnatdsliteFwdEgressBytesIcmp;
      this._fnatdsliteFwdEgressBytesOthers = value.fnatdsliteFwdEgressBytesOthers;
      this._fnatdsliteFwdEgressBytesTcp = value.fnatdsliteFwdEgressBytesTcp;
      this._fnatdsliteFwdEgressBytesUdp = value.fnatdsliteFwdEgressBytesUdp;
      this._fnatdsliteFwdEgressPacketsIcmp = value.fnatdsliteFwdEgressPacketsIcmp;
      this._fnatdsliteFwdEgressPacketsOthers = value.fnatdsliteFwdEgressPacketsOthers;
      this._fnatdsliteFwdEgressPacketsTcp = value.fnatdsliteFwdEgressPacketsTcp;
      this._fnatdsliteFwdEgressPacketsUdp = value.fnatdsliteFwdEgressPacketsUdp;
      this._fnatdsliteFwdEgressPktSizeRange1 = value.fnatdsliteFwdEgressPktSizeRange1;
      this._fnatdsliteFwdEgressPktSizeRange2 = value.fnatdsliteFwdEgressPktSizeRange2;
      this._fnatdsliteFwdEgressPktSizeRange3 = value.fnatdsliteFwdEgressPktSizeRange3;
      this._fnatdsliteFwdEgressPktSizeRange4 = value.fnatdsliteFwdEgressPktSizeRange4;
      this._fnatdsliteFwdIngressBytesIcmp = value.fnatdsliteFwdIngressBytesIcmp;
      this._fnatdsliteFwdIngressBytesOthers = value.fnatdsliteFwdIngressBytesOthers;
      this._fnatdsliteFwdIngressBytesTcp = value.fnatdsliteFwdIngressBytesTcp;
      this._fnatdsliteFwdIngressBytesUdp = value.fnatdsliteFwdIngressBytesUdp;
      this._fnatdsliteFwdIngressPacketsIcmp = value.fnatdsliteFwdIngressPacketsIcmp;
      this._fnatdsliteFwdIngressPacketsOthers = value.fnatdsliteFwdIngressPacketsOthers;
      this._fnatdsliteFwdIngressPacketsTcp = value.fnatdsliteFwdIngressPacketsTcp;
      this._fnatdsliteFwdIngressPacketsUdp = value.fnatdsliteFwdIngressPacketsUdp;
      this._fnatdsliteFwdIngressPktSizeRange1 = value.fnatdsliteFwdIngressPktSizeRange1;
      this._fnatdsliteFwdIngressPktSizeRange2 = value.fnatdsliteFwdIngressPktSizeRange2;
      this._fnatdsliteFwdIngressPktSizeRange3 = value.fnatdsliteFwdIngressPktSizeRange3;
      this._fnatdsliteFwdIngressPktSizeRange4 = value.fnatdsliteFwdIngressPktSizeRange4;
      this._fnatdsliteRevEgressBytesIcmp = value.fnatdsliteRevEgressBytesIcmp;
      this._fnatdsliteRevEgressBytesOthers = value.fnatdsliteRevEgressBytesOthers;
      this._fnatdsliteRevEgressBytesTcp = value.fnatdsliteRevEgressBytesTcp;
      this._fnatdsliteRevEgressBytesUdp = value.fnatdsliteRevEgressBytesUdp;
      this._fnatdsliteRevEgressPacketsIcmp = value.fnatdsliteRevEgressPacketsIcmp;
      this._fnatdsliteRevEgressPacketsOthers = value.fnatdsliteRevEgressPacketsOthers;
      this._fnatdsliteRevEgressPacketsTcp = value.fnatdsliteRevEgressPacketsTcp;
      this._fnatdsliteRevEgressPacketsUdp = value.fnatdsliteRevEgressPacketsUdp;
      this._fnatdsliteRevEgressPktSizeRange1 = value.fnatdsliteRevEgressPktSizeRange1;
      this._fnatdsliteRevEgressPktSizeRange2 = value.fnatdsliteRevEgressPktSizeRange2;
      this._fnatdsliteRevEgressPktSizeRange3 = value.fnatdsliteRevEgressPktSizeRange3;
      this._fnatdsliteRevEgressPktSizeRange4 = value.fnatdsliteRevEgressPktSizeRange4;
      this._fnatdsliteRevIngressBytesIcmp = value.fnatdsliteRevIngressBytesIcmp;
      this._fnatdsliteRevIngressBytesOthers = value.fnatdsliteRevIngressBytesOthers;
      this._fnatdsliteRevIngressBytesTcp = value.fnatdsliteRevIngressBytesTcp;
      this._fnatdsliteRevIngressBytesUdp = value.fnatdsliteRevIngressBytesUdp;
      this._fnatdsliteRevIngressPacketsIcmp = value.fnatdsliteRevIngressPacketsIcmp;
      this._fnatdsliteRevIngressPacketsOthers = value.fnatdsliteRevIngressPacketsOthers;
      this._fnatdsliteRevIngressPacketsTcp = value.fnatdsliteRevIngressPacketsTcp;
      this._fnatdsliteRevIngressPacketsUdp = value.fnatdsliteRevIngressPacketsUdp;
      this._fnatdsliteRevIngressPktSizeRange1 = value.fnatdsliteRevIngressPktSizeRange1;
      this._fnatdsliteRevIngressPktSizeRange2 = value.fnatdsliteRevIngressPktSizeRange2;
      this._fnatdsliteRevIngressPktSizeRange3 = value.fnatdsliteRevIngressPktSizeRange3;
      this._fnatdsliteRevIngressPktSizeRange4 = value.fnatdsliteRevIngressPktSizeRange4;
      this._fullconeFailure = value.fullconeFailure;
      this._haSessionUserQuotaExceeded = value.haSessionUserQuotaExceeded;
      this._nat44DataSessionCreated = value.nat44DataSessionCreated;
      this._nat44DataSessionFreed = value.nat44DataSessionFreed;
      this._nat44EifLimitExceeded = value.nat44EifLimitExceeded;
      this._nat44EifMatch = value.nat44EifMatch;
      this._nat44EimMatch = value.nat44EimMatch;
      this._nat44Hairpin = value.nat44Hairpin;
      this._nat44InboundFiltered = value.nat44InboundFiltered;
      this._nat44TcpFullconeCreated = value.nat44TcpFullconeCreated;
      this._nat44TcpFullconeFreed = value.nat44TcpFullconeFreed;
      this._nat44UdpAlgFullconeCreated = value.nat44UdpAlgFullconeCreated;
      this._nat44UdpAlgFullconeFreed = value.nat44UdpAlgFullconeFreed;
      this._nat44UdpFullconeCreated = value.nat44UdpFullconeCreated;
      this._nat44UdpFullconeFreed = value.nat44UdpFullconeFreed;
      this._nat64DataSessionCreated = value.nat64DataSessionCreated;
      this._nat64DataSessionFreed = value.nat64DataSessionFreed;
      this._nat64EifLimitExceeded = value.nat64EifLimitExceeded;
      this._nat64EifMatch = value.nat64EifMatch;
      this._nat64EimMatch = value.nat64EimMatch;
      this._nat64Hairpin = value.nat64Hairpin;
      this._nat64InboundFiltered = value.nat64InboundFiltered;
      this._nat64TcpFullconeCreated = value.nat64TcpFullconeCreated;
      this._nat64TcpFullconeFreed = value.nat64TcpFullconeFreed;
      this._nat64UdpAlgFullconeCreated = value.nat64UdpAlgFullconeCreated;
      this._nat64UdpAlgFullconeFreed = value.nat64UdpAlgFullconeFreed;
      this._nat64UdpFullconeCreated = value.nat64UdpFullconeCreated;
      this._nat64UdpFullconeFreed = value.nat64UdpFullconeFreed;
      this._natPortUnavailableIcmp = value.natPortUnavailableIcmp;
      this._natPortUnavailableTcp = value.natPortUnavailableTcp;
      this._natPortUnavailableUdp = value.natPortUnavailableUdp;
      this._portOverloadFailed = value.portOverloadFailed;
      this._portOverloadSmpDeleteScheduled = value.portOverloadSmpDeleteScheduled;
      this._sessionUserQuotaExceeded = value.sessionUserQuotaExceeded;
      this._sixrdDrop = value.sixrdDrop;
      this._standbyDrop = value.standbyDrop;
      this._totalIcmpAllocated = value.totalIcmpAllocated;
      this._totalIcmpFreed = value.totalIcmpFreed;
      this._totalNatInUse = value.totalNatInUse;
      this._totalTcpAllocOverload = value.totalTcpAllocOverload;
      this._totalTcpAllocated = value.totalTcpAllocated;
      this._totalTcpFreeOverload = value.totalTcpFreeOverload;
      this._totalTcpFreed = value.totalTcpFreed;
      this._totalTcpOverloadAcquired = value.totalTcpOverloadAcquired;
      this._totalTcpOverloadReleased = value.totalTcpOverloadReleased;
      this._totalUdpAllocOverload = value.totalUdpAllocOverload;
      this._totalUdpAllocated = value.totalUdpAllocated;
      this._totalUdpFreeOverload = value.totalUdpFreeOverload;
      this._totalUdpFreed = value.totalUdpFreed;
      this._totalUdpOverloadAcquired = value.totalUdpOverloadAcquired;
      this._totalUdpOverloadReleased = value.totalUdpOverloadReleased;
    }
  }

  // active_subscriber_added - computed: false, optional: true, required: false
  private _activeSubscriberAdded?: number; 
  public get activeSubscriberAdded() {
    return this.getNumberAttribute('active_subscriber_added');
  }
  public set activeSubscriberAdded(value: number) {
    this._activeSubscriberAdded = value;
  }
  public resetActiveSubscriberAdded() {
    this._activeSubscriberAdded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeSubscriberAddedInput() {
    return this._activeSubscriberAdded;
  }

  // active_subscriber_removed - computed: false, optional: true, required: false
  private _activeSubscriberRemoved?: number; 
  public get activeSubscriberRemoved() {
    return this.getNumberAttribute('active_subscriber_removed');
  }
  public set activeSubscriberRemoved(value: number) {
    this._activeSubscriberRemoved = value;
  }
  public resetActiveSubscriberRemoved() {
    this._activeSubscriberRemoved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeSubscriberRemovedInput() {
    return this._activeSubscriberRemoved;
  }

  // config_not_found - computed: false, optional: true, required: false
  private _configNotFound?: number; 
  public get configNotFound() {
    return this.getNumberAttribute('config_not_found');
  }
  public set configNotFound(value: number) {
    this._configNotFound = value;
  }
  public resetConfigNotFound() {
    this._configNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configNotFoundInput() {
    return this._configNotFound;
  }

  // dest_rlist_drop - computed: false, optional: true, required: false
  private _destRlistDrop?: number; 
  public get destRlistDrop() {
    return this.getNumberAttribute('dest_rlist_drop');
  }
  public set destRlistDrop(value: number) {
    this._destRlistDrop = value;
  }
  public resetDestRlistDrop() {
    this._destRlistDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destRlistDropInput() {
    return this._destRlistDrop;
  }

  // dest_rlist_pass_through - computed: false, optional: true, required: false
  private _destRlistPassThrough?: number; 
  public get destRlistPassThrough() {
    return this.getNumberAttribute('dest_rlist_pass_through');
  }
  public set destRlistPassThrough(value: number) {
    this._destRlistPassThrough = value;
  }
  public resetDestRlistPassThrough() {
    this._destRlistPassThrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destRlistPassThroughInput() {
    return this._destRlistPassThrough;
  }

  // dest_rlist_snat_drop - computed: false, optional: true, required: false
  private _destRlistSnatDrop?: number; 
  public get destRlistSnatDrop() {
    return this.getNumberAttribute('dest_rlist_snat_drop');
  }
  public set destRlistSnatDrop(value: number) {
    this._destRlistSnatDrop = value;
  }
  public resetDestRlistSnatDrop() {
    this._destRlistSnatDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destRlistSnatDropInput() {
    return this._destRlistSnatDrop;
  }

  // dslite_data_session_created - computed: false, optional: true, required: false
  private _dsliteDataSessionCreated?: number; 
  public get dsliteDataSessionCreated() {
    return this.getNumberAttribute('dslite_data_session_created');
  }
  public set dsliteDataSessionCreated(value: number) {
    this._dsliteDataSessionCreated = value;
  }
  public resetDsliteDataSessionCreated() {
    this._dsliteDataSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsliteDataSessionCreatedInput() {
    return this._dsliteDataSessionCreated;
  }

  // dslite_data_session_freed - computed: false, optional: true, required: false
  private _dsliteDataSessionFreed?: number; 
  public get dsliteDataSessionFreed() {
    return this.getNumberAttribute('dslite_data_session_freed');
  }
  public set dsliteDataSessionFreed(value: number) {
    this._dsliteDataSessionFreed = value;
  }
  public resetDsliteDataSessionFreed() {
    this._dsliteDataSessionFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsliteDataSessionFreedInput() {
    return this._dsliteDataSessionFreed;
  }

  // dslite_eif_limit_exceeded - computed: false, optional: true, required: false
  private _dsliteEifLimitExceeded?: number; 
  public get dsliteEifLimitExceeded() {
    return this.getNumberAttribute('dslite_eif_limit_exceeded');
  }
  public set dsliteEifLimitExceeded(value: number) {
    this._dsliteEifLimitExceeded = value;
  }
  public resetDsliteEifLimitExceeded() {
    this._dsliteEifLimitExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsliteEifLimitExceededInput() {
    return this._dsliteEifLimitExceeded;
  }

  // dslite_eif_match - computed: false, optional: true, required: false
  private _dsliteEifMatch?: number; 
  public get dsliteEifMatch() {
    return this.getNumberAttribute('dslite_eif_match');
  }
  public set dsliteEifMatch(value: number) {
    this._dsliteEifMatch = value;
  }
  public resetDsliteEifMatch() {
    this._dsliteEifMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsliteEifMatchInput() {
    return this._dsliteEifMatch;
  }

  // dslite_eim_match - computed: false, optional: true, required: false
  private _dsliteEimMatch?: number; 
  public get dsliteEimMatch() {
    return this.getNumberAttribute('dslite_eim_match');
  }
  public set dsliteEimMatch(value: number) {
    this._dsliteEimMatch = value;
  }
  public resetDsliteEimMatch() {
    this._dsliteEimMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsliteEimMatchInput() {
    return this._dsliteEimMatch;
  }

  // dslite_hairpin - computed: false, optional: true, required: false
  private _dsliteHairpin?: number; 
  public get dsliteHairpin() {
    return this.getNumberAttribute('dslite_hairpin');
  }
  public set dsliteHairpin(value: number) {
    this._dsliteHairpin = value;
  }
  public resetDsliteHairpin() {
    this._dsliteHairpin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsliteHairpinInput() {
    return this._dsliteHairpin;
  }

  // dslite_inbound_filtered - computed: false, optional: true, required: false
  private _dsliteInboundFiltered?: number; 
  public get dsliteInboundFiltered() {
    return this.getNumberAttribute('dslite_inbound_filtered');
  }
  public set dsliteInboundFiltered(value: number) {
    this._dsliteInboundFiltered = value;
  }
  public resetDsliteInboundFiltered() {
    this._dsliteInboundFiltered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsliteInboundFilteredInput() {
    return this._dsliteInboundFiltered;
  }

  // dslite_tcp_fullcone_created - computed: false, optional: true, required: false
  private _dsliteTcpFullconeCreated?: number; 
  public get dsliteTcpFullconeCreated() {
    return this.getNumberAttribute('dslite_tcp_fullcone_created');
  }
  public set dsliteTcpFullconeCreated(value: number) {
    this._dsliteTcpFullconeCreated = value;
  }
  public resetDsliteTcpFullconeCreated() {
    this._dsliteTcpFullconeCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsliteTcpFullconeCreatedInput() {
    return this._dsliteTcpFullconeCreated;
  }

  // dslite_tcp_fullcone_freed - computed: false, optional: true, required: false
  private _dsliteTcpFullconeFreed?: number; 
  public get dsliteTcpFullconeFreed() {
    return this.getNumberAttribute('dslite_tcp_fullcone_freed');
  }
  public set dsliteTcpFullconeFreed(value: number) {
    this._dsliteTcpFullconeFreed = value;
  }
  public resetDsliteTcpFullconeFreed() {
    this._dsliteTcpFullconeFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsliteTcpFullconeFreedInput() {
    return this._dsliteTcpFullconeFreed;
  }

  // dslite_udp_alg_fullcone_created - computed: false, optional: true, required: false
  private _dsliteUdpAlgFullconeCreated?: number; 
  public get dsliteUdpAlgFullconeCreated() {
    return this.getNumberAttribute('dslite_udp_alg_fullcone_created');
  }
  public set dsliteUdpAlgFullconeCreated(value: number) {
    this._dsliteUdpAlgFullconeCreated = value;
  }
  public resetDsliteUdpAlgFullconeCreated() {
    this._dsliteUdpAlgFullconeCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsliteUdpAlgFullconeCreatedInput() {
    return this._dsliteUdpAlgFullconeCreated;
  }

  // dslite_udp_alg_fullcone_freed - computed: false, optional: true, required: false
  private _dsliteUdpAlgFullconeFreed?: number; 
  public get dsliteUdpAlgFullconeFreed() {
    return this.getNumberAttribute('dslite_udp_alg_fullcone_freed');
  }
  public set dsliteUdpAlgFullconeFreed(value: number) {
    this._dsliteUdpAlgFullconeFreed = value;
  }
  public resetDsliteUdpAlgFullconeFreed() {
    this._dsliteUdpAlgFullconeFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsliteUdpAlgFullconeFreedInput() {
    return this._dsliteUdpAlgFullconeFreed;
  }

  // dslite_udp_fullcone_created - computed: false, optional: true, required: false
  private _dsliteUdpFullconeCreated?: number; 
  public get dsliteUdpFullconeCreated() {
    return this.getNumberAttribute('dslite_udp_fullcone_created');
  }
  public set dsliteUdpFullconeCreated(value: number) {
    this._dsliteUdpFullconeCreated = value;
  }
  public resetDsliteUdpFullconeCreated() {
    this._dsliteUdpFullconeCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsliteUdpFullconeCreatedInput() {
    return this._dsliteUdpFullconeCreated;
  }

  // dslite_udp_fullcone_freed - computed: false, optional: true, required: false
  private _dsliteUdpFullconeFreed?: number; 
  public get dsliteUdpFullconeFreed() {
    return this.getNumberAttribute('dslite_udp_fullcone_freed');
  }
  public set dsliteUdpFullconeFreed(value: number) {
    this._dsliteUdpFullconeFreed = value;
  }
  public resetDsliteUdpFullconeFreed() {
    this._dsliteUdpFullconeFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsliteUdpFullconeFreedInput() {
    return this._dsliteUdpFullconeFreed;
  }

  // fixed_nat_fullcone_self_hairpinning_drop - computed: false, optional: true, required: false
  private _fixedNatFullconeSelfHairpinningDrop?: number; 
  public get fixedNatFullconeSelfHairpinningDrop() {
    return this.getNumberAttribute('fixed_nat_fullcone_self_hairpinning_drop');
  }
  public set fixedNatFullconeSelfHairpinningDrop(value: number) {
    this._fixedNatFullconeSelfHairpinningDrop = value;
  }
  public resetFixedNatFullconeSelfHairpinningDrop() {
    this._fixedNatFullconeSelfHairpinningDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNatFullconeSelfHairpinningDropInput() {
    return this._fixedNatFullconeSelfHairpinningDrop;
  }

  // fnat44_fwd_egress_bytes_icmp - computed: false, optional: true, required: false
  private _fnat44FwdEgressBytesIcmp?: number; 
  public get fnat44FwdEgressBytesIcmp() {
    return this.getNumberAttribute('fnat44_fwd_egress_bytes_icmp');
  }
  public set fnat44FwdEgressBytesIcmp(value: number) {
    this._fnat44FwdEgressBytesIcmp = value;
  }
  public resetFnat44FwdEgressBytesIcmp() {
    this._fnat44FwdEgressBytesIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44FwdEgressBytesIcmpInput() {
    return this._fnat44FwdEgressBytesIcmp;
  }

  // fnat44_fwd_egress_bytes_others - computed: false, optional: true, required: false
  private _fnat44FwdEgressBytesOthers?: number; 
  public get fnat44FwdEgressBytesOthers() {
    return this.getNumberAttribute('fnat44_fwd_egress_bytes_others');
  }
  public set fnat44FwdEgressBytesOthers(value: number) {
    this._fnat44FwdEgressBytesOthers = value;
  }
  public resetFnat44FwdEgressBytesOthers() {
    this._fnat44FwdEgressBytesOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44FwdEgressBytesOthersInput() {
    return this._fnat44FwdEgressBytesOthers;
  }

  // fnat44_fwd_egress_bytes_tcp - computed: false, optional: true, required: false
  private _fnat44FwdEgressBytesTcp?: number; 
  public get fnat44FwdEgressBytesTcp() {
    return this.getNumberAttribute('fnat44_fwd_egress_bytes_tcp');
  }
  public set fnat44FwdEgressBytesTcp(value: number) {
    this._fnat44FwdEgressBytesTcp = value;
  }
  public resetFnat44FwdEgressBytesTcp() {
    this._fnat44FwdEgressBytesTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44FwdEgressBytesTcpInput() {
    return this._fnat44FwdEgressBytesTcp;
  }

  // fnat44_fwd_egress_bytes_udp - computed: false, optional: true, required: false
  private _fnat44FwdEgressBytesUdp?: number; 
  public get fnat44FwdEgressBytesUdp() {
    return this.getNumberAttribute('fnat44_fwd_egress_bytes_udp');
  }
  public set fnat44FwdEgressBytesUdp(value: number) {
    this._fnat44FwdEgressBytesUdp = value;
  }
  public resetFnat44FwdEgressBytesUdp() {
    this._fnat44FwdEgressBytesUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44FwdEgressBytesUdpInput() {
    return this._fnat44FwdEgressBytesUdp;
  }

  // fnat44_fwd_egress_packets_icmp - computed: false, optional: true, required: false
  private _fnat44FwdEgressPacketsIcmp?: number; 
  public get fnat44FwdEgressPacketsIcmp() {
    return this.getNumberAttribute('fnat44_fwd_egress_packets_icmp');
  }
  public set fnat44FwdEgressPacketsIcmp(value: number) {
    this._fnat44FwdEgressPacketsIcmp = value;
  }
  public resetFnat44FwdEgressPacketsIcmp() {
    this._fnat44FwdEgressPacketsIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44FwdEgressPacketsIcmpInput() {
    return this._fnat44FwdEgressPacketsIcmp;
  }

  // fnat44_fwd_egress_packets_others - computed: false, optional: true, required: false
  private _fnat44FwdEgressPacketsOthers?: number; 
  public get fnat44FwdEgressPacketsOthers() {
    return this.getNumberAttribute('fnat44_fwd_egress_packets_others');
  }
  public set fnat44FwdEgressPacketsOthers(value: number) {
    this._fnat44FwdEgressPacketsOthers = value;
  }
  public resetFnat44FwdEgressPacketsOthers() {
    this._fnat44FwdEgressPacketsOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44FwdEgressPacketsOthersInput() {
    return this._fnat44FwdEgressPacketsOthers;
  }

  // fnat44_fwd_egress_packets_tcp - computed: false, optional: true, required: false
  private _fnat44FwdEgressPacketsTcp?: number; 
  public get fnat44FwdEgressPacketsTcp() {
    return this.getNumberAttribute('fnat44_fwd_egress_packets_tcp');
  }
  public set fnat44FwdEgressPacketsTcp(value: number) {
    this._fnat44FwdEgressPacketsTcp = value;
  }
  public resetFnat44FwdEgressPacketsTcp() {
    this._fnat44FwdEgressPacketsTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44FwdEgressPacketsTcpInput() {
    return this._fnat44FwdEgressPacketsTcp;
  }

  // fnat44_fwd_egress_packets_udp - computed: false, optional: true, required: false
  private _fnat44FwdEgressPacketsUdp?: number; 
  public get fnat44FwdEgressPacketsUdp() {
    return this.getNumberAttribute('fnat44_fwd_egress_packets_udp');
  }
  public set fnat44FwdEgressPacketsUdp(value: number) {
    this._fnat44FwdEgressPacketsUdp = value;
  }
  public resetFnat44FwdEgressPacketsUdp() {
    this._fnat44FwdEgressPacketsUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44FwdEgressPacketsUdpInput() {
    return this._fnat44FwdEgressPacketsUdp;
  }

  // fnat44_fwd_egress_pkt_size_range1 - computed: false, optional: true, required: false
  private _fnat44FwdEgressPktSizeRange1?: number; 
  public get fnat44FwdEgressPktSizeRange1() {
    return this.getNumberAttribute('fnat44_fwd_egress_pkt_size_range1');
  }
  public set fnat44FwdEgressPktSizeRange1(value: number) {
    this._fnat44FwdEgressPktSizeRange1 = value;
  }
  public resetFnat44FwdEgressPktSizeRange1() {
    this._fnat44FwdEgressPktSizeRange1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44FwdEgressPktSizeRange1Input() {
    return this._fnat44FwdEgressPktSizeRange1;
  }

  // fnat44_fwd_egress_pkt_size_range2 - computed: false, optional: true, required: false
  private _fnat44FwdEgressPktSizeRange2?: number; 
  public get fnat44FwdEgressPktSizeRange2() {
    return this.getNumberAttribute('fnat44_fwd_egress_pkt_size_range2');
  }
  public set fnat44FwdEgressPktSizeRange2(value: number) {
    this._fnat44FwdEgressPktSizeRange2 = value;
  }
  public resetFnat44FwdEgressPktSizeRange2() {
    this._fnat44FwdEgressPktSizeRange2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44FwdEgressPktSizeRange2Input() {
    return this._fnat44FwdEgressPktSizeRange2;
  }

  // fnat44_fwd_egress_pkt_size_range3 - computed: false, optional: true, required: false
  private _fnat44FwdEgressPktSizeRange3?: number; 
  public get fnat44FwdEgressPktSizeRange3() {
    return this.getNumberAttribute('fnat44_fwd_egress_pkt_size_range3');
  }
  public set fnat44FwdEgressPktSizeRange3(value: number) {
    this._fnat44FwdEgressPktSizeRange3 = value;
  }
  public resetFnat44FwdEgressPktSizeRange3() {
    this._fnat44FwdEgressPktSizeRange3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44FwdEgressPktSizeRange3Input() {
    return this._fnat44FwdEgressPktSizeRange3;
  }

  // fnat44_fwd_egress_pkt_size_range4 - computed: false, optional: true, required: false
  private _fnat44FwdEgressPktSizeRange4?: number; 
  public get fnat44FwdEgressPktSizeRange4() {
    return this.getNumberAttribute('fnat44_fwd_egress_pkt_size_range4');
  }
  public set fnat44FwdEgressPktSizeRange4(value: number) {
    this._fnat44FwdEgressPktSizeRange4 = value;
  }
  public resetFnat44FwdEgressPktSizeRange4() {
    this._fnat44FwdEgressPktSizeRange4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44FwdEgressPktSizeRange4Input() {
    return this._fnat44FwdEgressPktSizeRange4;
  }

  // fnat44_fwd_ingress_bytes_icmp - computed: false, optional: true, required: false
  private _fnat44FwdIngressBytesIcmp?: number; 
  public get fnat44FwdIngressBytesIcmp() {
    return this.getNumberAttribute('fnat44_fwd_ingress_bytes_icmp');
  }
  public set fnat44FwdIngressBytesIcmp(value: number) {
    this._fnat44FwdIngressBytesIcmp = value;
  }
  public resetFnat44FwdIngressBytesIcmp() {
    this._fnat44FwdIngressBytesIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44FwdIngressBytesIcmpInput() {
    return this._fnat44FwdIngressBytesIcmp;
  }

  // fnat44_fwd_ingress_bytes_others - computed: false, optional: true, required: false
  private _fnat44FwdIngressBytesOthers?: number; 
  public get fnat44FwdIngressBytesOthers() {
    return this.getNumberAttribute('fnat44_fwd_ingress_bytes_others');
  }
  public set fnat44FwdIngressBytesOthers(value: number) {
    this._fnat44FwdIngressBytesOthers = value;
  }
  public resetFnat44FwdIngressBytesOthers() {
    this._fnat44FwdIngressBytesOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44FwdIngressBytesOthersInput() {
    return this._fnat44FwdIngressBytesOthers;
  }

  // fnat44_fwd_ingress_bytes_tcp - computed: false, optional: true, required: false
  private _fnat44FwdIngressBytesTcp?: number; 
  public get fnat44FwdIngressBytesTcp() {
    return this.getNumberAttribute('fnat44_fwd_ingress_bytes_tcp');
  }
  public set fnat44FwdIngressBytesTcp(value: number) {
    this._fnat44FwdIngressBytesTcp = value;
  }
  public resetFnat44FwdIngressBytesTcp() {
    this._fnat44FwdIngressBytesTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44FwdIngressBytesTcpInput() {
    return this._fnat44FwdIngressBytesTcp;
  }

  // fnat44_fwd_ingress_bytes_udp - computed: false, optional: true, required: false
  private _fnat44FwdIngressBytesUdp?: number; 
  public get fnat44FwdIngressBytesUdp() {
    return this.getNumberAttribute('fnat44_fwd_ingress_bytes_udp');
  }
  public set fnat44FwdIngressBytesUdp(value: number) {
    this._fnat44FwdIngressBytesUdp = value;
  }
  public resetFnat44FwdIngressBytesUdp() {
    this._fnat44FwdIngressBytesUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44FwdIngressBytesUdpInput() {
    return this._fnat44FwdIngressBytesUdp;
  }

  // fnat44_fwd_ingress_packets_icmp - computed: false, optional: true, required: false
  private _fnat44FwdIngressPacketsIcmp?: number; 
  public get fnat44FwdIngressPacketsIcmp() {
    return this.getNumberAttribute('fnat44_fwd_ingress_packets_icmp');
  }
  public set fnat44FwdIngressPacketsIcmp(value: number) {
    this._fnat44FwdIngressPacketsIcmp = value;
  }
  public resetFnat44FwdIngressPacketsIcmp() {
    this._fnat44FwdIngressPacketsIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44FwdIngressPacketsIcmpInput() {
    return this._fnat44FwdIngressPacketsIcmp;
  }

  // fnat44_fwd_ingress_packets_others - computed: false, optional: true, required: false
  private _fnat44FwdIngressPacketsOthers?: number; 
  public get fnat44FwdIngressPacketsOthers() {
    return this.getNumberAttribute('fnat44_fwd_ingress_packets_others');
  }
  public set fnat44FwdIngressPacketsOthers(value: number) {
    this._fnat44FwdIngressPacketsOthers = value;
  }
  public resetFnat44FwdIngressPacketsOthers() {
    this._fnat44FwdIngressPacketsOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44FwdIngressPacketsOthersInput() {
    return this._fnat44FwdIngressPacketsOthers;
  }

  // fnat44_fwd_ingress_packets_tcp - computed: false, optional: true, required: false
  private _fnat44FwdIngressPacketsTcp?: number; 
  public get fnat44FwdIngressPacketsTcp() {
    return this.getNumberAttribute('fnat44_fwd_ingress_packets_tcp');
  }
  public set fnat44FwdIngressPacketsTcp(value: number) {
    this._fnat44FwdIngressPacketsTcp = value;
  }
  public resetFnat44FwdIngressPacketsTcp() {
    this._fnat44FwdIngressPacketsTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44FwdIngressPacketsTcpInput() {
    return this._fnat44FwdIngressPacketsTcp;
  }

  // fnat44_fwd_ingress_packets_udp - computed: false, optional: true, required: false
  private _fnat44FwdIngressPacketsUdp?: number; 
  public get fnat44FwdIngressPacketsUdp() {
    return this.getNumberAttribute('fnat44_fwd_ingress_packets_udp');
  }
  public set fnat44FwdIngressPacketsUdp(value: number) {
    this._fnat44FwdIngressPacketsUdp = value;
  }
  public resetFnat44FwdIngressPacketsUdp() {
    this._fnat44FwdIngressPacketsUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44FwdIngressPacketsUdpInput() {
    return this._fnat44FwdIngressPacketsUdp;
  }

  // fnat44_fwd_ingress_pkt_size_range1 - computed: false, optional: true, required: false
  private _fnat44FwdIngressPktSizeRange1?: number; 
  public get fnat44FwdIngressPktSizeRange1() {
    return this.getNumberAttribute('fnat44_fwd_ingress_pkt_size_range1');
  }
  public set fnat44FwdIngressPktSizeRange1(value: number) {
    this._fnat44FwdIngressPktSizeRange1 = value;
  }
  public resetFnat44FwdIngressPktSizeRange1() {
    this._fnat44FwdIngressPktSizeRange1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44FwdIngressPktSizeRange1Input() {
    return this._fnat44FwdIngressPktSizeRange1;
  }

  // fnat44_fwd_ingress_pkt_size_range2 - computed: false, optional: true, required: false
  private _fnat44FwdIngressPktSizeRange2?: number; 
  public get fnat44FwdIngressPktSizeRange2() {
    return this.getNumberAttribute('fnat44_fwd_ingress_pkt_size_range2');
  }
  public set fnat44FwdIngressPktSizeRange2(value: number) {
    this._fnat44FwdIngressPktSizeRange2 = value;
  }
  public resetFnat44FwdIngressPktSizeRange2() {
    this._fnat44FwdIngressPktSizeRange2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44FwdIngressPktSizeRange2Input() {
    return this._fnat44FwdIngressPktSizeRange2;
  }

  // fnat44_fwd_ingress_pkt_size_range3 - computed: false, optional: true, required: false
  private _fnat44FwdIngressPktSizeRange3?: number; 
  public get fnat44FwdIngressPktSizeRange3() {
    return this.getNumberAttribute('fnat44_fwd_ingress_pkt_size_range3');
  }
  public set fnat44FwdIngressPktSizeRange3(value: number) {
    this._fnat44FwdIngressPktSizeRange3 = value;
  }
  public resetFnat44FwdIngressPktSizeRange3() {
    this._fnat44FwdIngressPktSizeRange3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44FwdIngressPktSizeRange3Input() {
    return this._fnat44FwdIngressPktSizeRange3;
  }

  // fnat44_fwd_ingress_pkt_size_range4 - computed: false, optional: true, required: false
  private _fnat44FwdIngressPktSizeRange4?: number; 
  public get fnat44FwdIngressPktSizeRange4() {
    return this.getNumberAttribute('fnat44_fwd_ingress_pkt_size_range4');
  }
  public set fnat44FwdIngressPktSizeRange4(value: number) {
    this._fnat44FwdIngressPktSizeRange4 = value;
  }
  public resetFnat44FwdIngressPktSizeRange4() {
    this._fnat44FwdIngressPktSizeRange4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44FwdIngressPktSizeRange4Input() {
    return this._fnat44FwdIngressPktSizeRange4;
  }

  // fnat44_rev_egress_bytes_icmp - computed: false, optional: true, required: false
  private _fnat44RevEgressBytesIcmp?: number; 
  public get fnat44RevEgressBytesIcmp() {
    return this.getNumberAttribute('fnat44_rev_egress_bytes_icmp');
  }
  public set fnat44RevEgressBytesIcmp(value: number) {
    this._fnat44RevEgressBytesIcmp = value;
  }
  public resetFnat44RevEgressBytesIcmp() {
    this._fnat44RevEgressBytesIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44RevEgressBytesIcmpInput() {
    return this._fnat44RevEgressBytesIcmp;
  }

  // fnat44_rev_egress_bytes_others - computed: false, optional: true, required: false
  private _fnat44RevEgressBytesOthers?: number; 
  public get fnat44RevEgressBytesOthers() {
    return this.getNumberAttribute('fnat44_rev_egress_bytes_others');
  }
  public set fnat44RevEgressBytesOthers(value: number) {
    this._fnat44RevEgressBytesOthers = value;
  }
  public resetFnat44RevEgressBytesOthers() {
    this._fnat44RevEgressBytesOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44RevEgressBytesOthersInput() {
    return this._fnat44RevEgressBytesOthers;
  }

  // fnat44_rev_egress_bytes_tcp - computed: false, optional: true, required: false
  private _fnat44RevEgressBytesTcp?: number; 
  public get fnat44RevEgressBytesTcp() {
    return this.getNumberAttribute('fnat44_rev_egress_bytes_tcp');
  }
  public set fnat44RevEgressBytesTcp(value: number) {
    this._fnat44RevEgressBytesTcp = value;
  }
  public resetFnat44RevEgressBytesTcp() {
    this._fnat44RevEgressBytesTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44RevEgressBytesTcpInput() {
    return this._fnat44RevEgressBytesTcp;
  }

  // fnat44_rev_egress_bytes_udp - computed: false, optional: true, required: false
  private _fnat44RevEgressBytesUdp?: number; 
  public get fnat44RevEgressBytesUdp() {
    return this.getNumberAttribute('fnat44_rev_egress_bytes_udp');
  }
  public set fnat44RevEgressBytesUdp(value: number) {
    this._fnat44RevEgressBytesUdp = value;
  }
  public resetFnat44RevEgressBytesUdp() {
    this._fnat44RevEgressBytesUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44RevEgressBytesUdpInput() {
    return this._fnat44RevEgressBytesUdp;
  }

  // fnat44_rev_egress_packets_icmp - computed: false, optional: true, required: false
  private _fnat44RevEgressPacketsIcmp?: number; 
  public get fnat44RevEgressPacketsIcmp() {
    return this.getNumberAttribute('fnat44_rev_egress_packets_icmp');
  }
  public set fnat44RevEgressPacketsIcmp(value: number) {
    this._fnat44RevEgressPacketsIcmp = value;
  }
  public resetFnat44RevEgressPacketsIcmp() {
    this._fnat44RevEgressPacketsIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44RevEgressPacketsIcmpInput() {
    return this._fnat44RevEgressPacketsIcmp;
  }

  // fnat44_rev_egress_packets_others - computed: false, optional: true, required: false
  private _fnat44RevEgressPacketsOthers?: number; 
  public get fnat44RevEgressPacketsOthers() {
    return this.getNumberAttribute('fnat44_rev_egress_packets_others');
  }
  public set fnat44RevEgressPacketsOthers(value: number) {
    this._fnat44RevEgressPacketsOthers = value;
  }
  public resetFnat44RevEgressPacketsOthers() {
    this._fnat44RevEgressPacketsOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44RevEgressPacketsOthersInput() {
    return this._fnat44RevEgressPacketsOthers;
  }

  // fnat44_rev_egress_packets_tcp - computed: false, optional: true, required: false
  private _fnat44RevEgressPacketsTcp?: number; 
  public get fnat44RevEgressPacketsTcp() {
    return this.getNumberAttribute('fnat44_rev_egress_packets_tcp');
  }
  public set fnat44RevEgressPacketsTcp(value: number) {
    this._fnat44RevEgressPacketsTcp = value;
  }
  public resetFnat44RevEgressPacketsTcp() {
    this._fnat44RevEgressPacketsTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44RevEgressPacketsTcpInput() {
    return this._fnat44RevEgressPacketsTcp;
  }

  // fnat44_rev_egress_packets_udp - computed: false, optional: true, required: false
  private _fnat44RevEgressPacketsUdp?: number; 
  public get fnat44RevEgressPacketsUdp() {
    return this.getNumberAttribute('fnat44_rev_egress_packets_udp');
  }
  public set fnat44RevEgressPacketsUdp(value: number) {
    this._fnat44RevEgressPacketsUdp = value;
  }
  public resetFnat44RevEgressPacketsUdp() {
    this._fnat44RevEgressPacketsUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44RevEgressPacketsUdpInput() {
    return this._fnat44RevEgressPacketsUdp;
  }

  // fnat44_rev_egress_pkt_size_range1 - computed: false, optional: true, required: false
  private _fnat44RevEgressPktSizeRange1?: number; 
  public get fnat44RevEgressPktSizeRange1() {
    return this.getNumberAttribute('fnat44_rev_egress_pkt_size_range1');
  }
  public set fnat44RevEgressPktSizeRange1(value: number) {
    this._fnat44RevEgressPktSizeRange1 = value;
  }
  public resetFnat44RevEgressPktSizeRange1() {
    this._fnat44RevEgressPktSizeRange1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44RevEgressPktSizeRange1Input() {
    return this._fnat44RevEgressPktSizeRange1;
  }

  // fnat44_rev_egress_pkt_size_range2 - computed: false, optional: true, required: false
  private _fnat44RevEgressPktSizeRange2?: number; 
  public get fnat44RevEgressPktSizeRange2() {
    return this.getNumberAttribute('fnat44_rev_egress_pkt_size_range2');
  }
  public set fnat44RevEgressPktSizeRange2(value: number) {
    this._fnat44RevEgressPktSizeRange2 = value;
  }
  public resetFnat44RevEgressPktSizeRange2() {
    this._fnat44RevEgressPktSizeRange2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44RevEgressPktSizeRange2Input() {
    return this._fnat44RevEgressPktSizeRange2;
  }

  // fnat44_rev_egress_pkt_size_range3 - computed: false, optional: true, required: false
  private _fnat44RevEgressPktSizeRange3?: number; 
  public get fnat44RevEgressPktSizeRange3() {
    return this.getNumberAttribute('fnat44_rev_egress_pkt_size_range3');
  }
  public set fnat44RevEgressPktSizeRange3(value: number) {
    this._fnat44RevEgressPktSizeRange3 = value;
  }
  public resetFnat44RevEgressPktSizeRange3() {
    this._fnat44RevEgressPktSizeRange3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44RevEgressPktSizeRange3Input() {
    return this._fnat44RevEgressPktSizeRange3;
  }

  // fnat44_rev_egress_pkt_size_range4 - computed: false, optional: true, required: false
  private _fnat44RevEgressPktSizeRange4?: number; 
  public get fnat44RevEgressPktSizeRange4() {
    return this.getNumberAttribute('fnat44_rev_egress_pkt_size_range4');
  }
  public set fnat44RevEgressPktSizeRange4(value: number) {
    this._fnat44RevEgressPktSizeRange4 = value;
  }
  public resetFnat44RevEgressPktSizeRange4() {
    this._fnat44RevEgressPktSizeRange4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44RevEgressPktSizeRange4Input() {
    return this._fnat44RevEgressPktSizeRange4;
  }

  // fnat44_rev_ingress_bytes_icmp - computed: false, optional: true, required: false
  private _fnat44RevIngressBytesIcmp?: number; 
  public get fnat44RevIngressBytesIcmp() {
    return this.getNumberAttribute('fnat44_rev_ingress_bytes_icmp');
  }
  public set fnat44RevIngressBytesIcmp(value: number) {
    this._fnat44RevIngressBytesIcmp = value;
  }
  public resetFnat44RevIngressBytesIcmp() {
    this._fnat44RevIngressBytesIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44RevIngressBytesIcmpInput() {
    return this._fnat44RevIngressBytesIcmp;
  }

  // fnat44_rev_ingress_bytes_others - computed: false, optional: true, required: false
  private _fnat44RevIngressBytesOthers?: number; 
  public get fnat44RevIngressBytesOthers() {
    return this.getNumberAttribute('fnat44_rev_ingress_bytes_others');
  }
  public set fnat44RevIngressBytesOthers(value: number) {
    this._fnat44RevIngressBytesOthers = value;
  }
  public resetFnat44RevIngressBytesOthers() {
    this._fnat44RevIngressBytesOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44RevIngressBytesOthersInput() {
    return this._fnat44RevIngressBytesOthers;
  }

  // fnat44_rev_ingress_bytes_tcp - computed: false, optional: true, required: false
  private _fnat44RevIngressBytesTcp?: number; 
  public get fnat44RevIngressBytesTcp() {
    return this.getNumberAttribute('fnat44_rev_ingress_bytes_tcp');
  }
  public set fnat44RevIngressBytesTcp(value: number) {
    this._fnat44RevIngressBytesTcp = value;
  }
  public resetFnat44RevIngressBytesTcp() {
    this._fnat44RevIngressBytesTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44RevIngressBytesTcpInput() {
    return this._fnat44RevIngressBytesTcp;
  }

  // fnat44_rev_ingress_bytes_udp - computed: false, optional: true, required: false
  private _fnat44RevIngressBytesUdp?: number; 
  public get fnat44RevIngressBytesUdp() {
    return this.getNumberAttribute('fnat44_rev_ingress_bytes_udp');
  }
  public set fnat44RevIngressBytesUdp(value: number) {
    this._fnat44RevIngressBytesUdp = value;
  }
  public resetFnat44RevIngressBytesUdp() {
    this._fnat44RevIngressBytesUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44RevIngressBytesUdpInput() {
    return this._fnat44RevIngressBytesUdp;
  }

  // fnat44_rev_ingress_packets_icmp - computed: false, optional: true, required: false
  private _fnat44RevIngressPacketsIcmp?: number; 
  public get fnat44RevIngressPacketsIcmp() {
    return this.getNumberAttribute('fnat44_rev_ingress_packets_icmp');
  }
  public set fnat44RevIngressPacketsIcmp(value: number) {
    this._fnat44RevIngressPacketsIcmp = value;
  }
  public resetFnat44RevIngressPacketsIcmp() {
    this._fnat44RevIngressPacketsIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44RevIngressPacketsIcmpInput() {
    return this._fnat44RevIngressPacketsIcmp;
  }

  // fnat44_rev_ingress_packets_others - computed: false, optional: true, required: false
  private _fnat44RevIngressPacketsOthers?: number; 
  public get fnat44RevIngressPacketsOthers() {
    return this.getNumberAttribute('fnat44_rev_ingress_packets_others');
  }
  public set fnat44RevIngressPacketsOthers(value: number) {
    this._fnat44RevIngressPacketsOthers = value;
  }
  public resetFnat44RevIngressPacketsOthers() {
    this._fnat44RevIngressPacketsOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44RevIngressPacketsOthersInput() {
    return this._fnat44RevIngressPacketsOthers;
  }

  // fnat44_rev_ingress_packets_tcp - computed: false, optional: true, required: false
  private _fnat44RevIngressPacketsTcp?: number; 
  public get fnat44RevIngressPacketsTcp() {
    return this.getNumberAttribute('fnat44_rev_ingress_packets_tcp');
  }
  public set fnat44RevIngressPacketsTcp(value: number) {
    this._fnat44RevIngressPacketsTcp = value;
  }
  public resetFnat44RevIngressPacketsTcp() {
    this._fnat44RevIngressPacketsTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44RevIngressPacketsTcpInput() {
    return this._fnat44RevIngressPacketsTcp;
  }

  // fnat44_rev_ingress_packets_udp - computed: false, optional: true, required: false
  private _fnat44RevIngressPacketsUdp?: number; 
  public get fnat44RevIngressPacketsUdp() {
    return this.getNumberAttribute('fnat44_rev_ingress_packets_udp');
  }
  public set fnat44RevIngressPacketsUdp(value: number) {
    this._fnat44RevIngressPacketsUdp = value;
  }
  public resetFnat44RevIngressPacketsUdp() {
    this._fnat44RevIngressPacketsUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44RevIngressPacketsUdpInput() {
    return this._fnat44RevIngressPacketsUdp;
  }

  // fnat44_rev_ingress_pkt_size_range1 - computed: false, optional: true, required: false
  private _fnat44RevIngressPktSizeRange1?: number; 
  public get fnat44RevIngressPktSizeRange1() {
    return this.getNumberAttribute('fnat44_rev_ingress_pkt_size_range1');
  }
  public set fnat44RevIngressPktSizeRange1(value: number) {
    this._fnat44RevIngressPktSizeRange1 = value;
  }
  public resetFnat44RevIngressPktSizeRange1() {
    this._fnat44RevIngressPktSizeRange1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44RevIngressPktSizeRange1Input() {
    return this._fnat44RevIngressPktSizeRange1;
  }

  // fnat44_rev_ingress_pkt_size_range2 - computed: false, optional: true, required: false
  private _fnat44RevIngressPktSizeRange2?: number; 
  public get fnat44RevIngressPktSizeRange2() {
    return this.getNumberAttribute('fnat44_rev_ingress_pkt_size_range2');
  }
  public set fnat44RevIngressPktSizeRange2(value: number) {
    this._fnat44RevIngressPktSizeRange2 = value;
  }
  public resetFnat44RevIngressPktSizeRange2() {
    this._fnat44RevIngressPktSizeRange2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44RevIngressPktSizeRange2Input() {
    return this._fnat44RevIngressPktSizeRange2;
  }

  // fnat44_rev_ingress_pkt_size_range3 - computed: false, optional: true, required: false
  private _fnat44RevIngressPktSizeRange3?: number; 
  public get fnat44RevIngressPktSizeRange3() {
    return this.getNumberAttribute('fnat44_rev_ingress_pkt_size_range3');
  }
  public set fnat44RevIngressPktSizeRange3(value: number) {
    this._fnat44RevIngressPktSizeRange3 = value;
  }
  public resetFnat44RevIngressPktSizeRange3() {
    this._fnat44RevIngressPktSizeRange3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44RevIngressPktSizeRange3Input() {
    return this._fnat44RevIngressPktSizeRange3;
  }

  // fnat44_rev_ingress_pkt_size_range4 - computed: false, optional: true, required: false
  private _fnat44RevIngressPktSizeRange4?: number; 
  public get fnat44RevIngressPktSizeRange4() {
    return this.getNumberAttribute('fnat44_rev_ingress_pkt_size_range4');
  }
  public set fnat44RevIngressPktSizeRange4(value: number) {
    this._fnat44RevIngressPktSizeRange4 = value;
  }
  public resetFnat44RevIngressPktSizeRange4() {
    this._fnat44RevIngressPktSizeRange4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat44RevIngressPktSizeRange4Input() {
    return this._fnat44RevIngressPktSizeRange4;
  }

  // fnat64_fwd_egress_bytes_icmp - computed: false, optional: true, required: false
  private _fnat64FwdEgressBytesIcmp?: number; 
  public get fnat64FwdEgressBytesIcmp() {
    return this.getNumberAttribute('fnat64_fwd_egress_bytes_icmp');
  }
  public set fnat64FwdEgressBytesIcmp(value: number) {
    this._fnat64FwdEgressBytesIcmp = value;
  }
  public resetFnat64FwdEgressBytesIcmp() {
    this._fnat64FwdEgressBytesIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64FwdEgressBytesIcmpInput() {
    return this._fnat64FwdEgressBytesIcmp;
  }

  // fnat64_fwd_egress_bytes_others - computed: false, optional: true, required: false
  private _fnat64FwdEgressBytesOthers?: number; 
  public get fnat64FwdEgressBytesOthers() {
    return this.getNumberAttribute('fnat64_fwd_egress_bytes_others');
  }
  public set fnat64FwdEgressBytesOthers(value: number) {
    this._fnat64FwdEgressBytesOthers = value;
  }
  public resetFnat64FwdEgressBytesOthers() {
    this._fnat64FwdEgressBytesOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64FwdEgressBytesOthersInput() {
    return this._fnat64FwdEgressBytesOthers;
  }

  // fnat64_fwd_egress_bytes_tcp - computed: false, optional: true, required: false
  private _fnat64FwdEgressBytesTcp?: number; 
  public get fnat64FwdEgressBytesTcp() {
    return this.getNumberAttribute('fnat64_fwd_egress_bytes_tcp');
  }
  public set fnat64FwdEgressBytesTcp(value: number) {
    this._fnat64FwdEgressBytesTcp = value;
  }
  public resetFnat64FwdEgressBytesTcp() {
    this._fnat64FwdEgressBytesTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64FwdEgressBytesTcpInput() {
    return this._fnat64FwdEgressBytesTcp;
  }

  // fnat64_fwd_egress_bytes_udp - computed: false, optional: true, required: false
  private _fnat64FwdEgressBytesUdp?: number; 
  public get fnat64FwdEgressBytesUdp() {
    return this.getNumberAttribute('fnat64_fwd_egress_bytes_udp');
  }
  public set fnat64FwdEgressBytesUdp(value: number) {
    this._fnat64FwdEgressBytesUdp = value;
  }
  public resetFnat64FwdEgressBytesUdp() {
    this._fnat64FwdEgressBytesUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64FwdEgressBytesUdpInput() {
    return this._fnat64FwdEgressBytesUdp;
  }

  // fnat64_fwd_egress_packets_icmp - computed: false, optional: true, required: false
  private _fnat64FwdEgressPacketsIcmp?: number; 
  public get fnat64FwdEgressPacketsIcmp() {
    return this.getNumberAttribute('fnat64_fwd_egress_packets_icmp');
  }
  public set fnat64FwdEgressPacketsIcmp(value: number) {
    this._fnat64FwdEgressPacketsIcmp = value;
  }
  public resetFnat64FwdEgressPacketsIcmp() {
    this._fnat64FwdEgressPacketsIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64FwdEgressPacketsIcmpInput() {
    return this._fnat64FwdEgressPacketsIcmp;
  }

  // fnat64_fwd_egress_packets_others - computed: false, optional: true, required: false
  private _fnat64FwdEgressPacketsOthers?: number; 
  public get fnat64FwdEgressPacketsOthers() {
    return this.getNumberAttribute('fnat64_fwd_egress_packets_others');
  }
  public set fnat64FwdEgressPacketsOthers(value: number) {
    this._fnat64FwdEgressPacketsOthers = value;
  }
  public resetFnat64FwdEgressPacketsOthers() {
    this._fnat64FwdEgressPacketsOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64FwdEgressPacketsOthersInput() {
    return this._fnat64FwdEgressPacketsOthers;
  }

  // fnat64_fwd_egress_packets_tcp - computed: false, optional: true, required: false
  private _fnat64FwdEgressPacketsTcp?: number; 
  public get fnat64FwdEgressPacketsTcp() {
    return this.getNumberAttribute('fnat64_fwd_egress_packets_tcp');
  }
  public set fnat64FwdEgressPacketsTcp(value: number) {
    this._fnat64FwdEgressPacketsTcp = value;
  }
  public resetFnat64FwdEgressPacketsTcp() {
    this._fnat64FwdEgressPacketsTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64FwdEgressPacketsTcpInput() {
    return this._fnat64FwdEgressPacketsTcp;
  }

  // fnat64_fwd_egress_packets_udp - computed: false, optional: true, required: false
  private _fnat64FwdEgressPacketsUdp?: number; 
  public get fnat64FwdEgressPacketsUdp() {
    return this.getNumberAttribute('fnat64_fwd_egress_packets_udp');
  }
  public set fnat64FwdEgressPacketsUdp(value: number) {
    this._fnat64FwdEgressPacketsUdp = value;
  }
  public resetFnat64FwdEgressPacketsUdp() {
    this._fnat64FwdEgressPacketsUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64FwdEgressPacketsUdpInput() {
    return this._fnat64FwdEgressPacketsUdp;
  }

  // fnat64_fwd_egress_pkt_size_range1 - computed: false, optional: true, required: false
  private _fnat64FwdEgressPktSizeRange1?: number; 
  public get fnat64FwdEgressPktSizeRange1() {
    return this.getNumberAttribute('fnat64_fwd_egress_pkt_size_range1');
  }
  public set fnat64FwdEgressPktSizeRange1(value: number) {
    this._fnat64FwdEgressPktSizeRange1 = value;
  }
  public resetFnat64FwdEgressPktSizeRange1() {
    this._fnat64FwdEgressPktSizeRange1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64FwdEgressPktSizeRange1Input() {
    return this._fnat64FwdEgressPktSizeRange1;
  }

  // fnat64_fwd_egress_pkt_size_range2 - computed: false, optional: true, required: false
  private _fnat64FwdEgressPktSizeRange2?: number; 
  public get fnat64FwdEgressPktSizeRange2() {
    return this.getNumberAttribute('fnat64_fwd_egress_pkt_size_range2');
  }
  public set fnat64FwdEgressPktSizeRange2(value: number) {
    this._fnat64FwdEgressPktSizeRange2 = value;
  }
  public resetFnat64FwdEgressPktSizeRange2() {
    this._fnat64FwdEgressPktSizeRange2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64FwdEgressPktSizeRange2Input() {
    return this._fnat64FwdEgressPktSizeRange2;
  }

  // fnat64_fwd_egress_pkt_size_range3 - computed: false, optional: true, required: false
  private _fnat64FwdEgressPktSizeRange3?: number; 
  public get fnat64FwdEgressPktSizeRange3() {
    return this.getNumberAttribute('fnat64_fwd_egress_pkt_size_range3');
  }
  public set fnat64FwdEgressPktSizeRange3(value: number) {
    this._fnat64FwdEgressPktSizeRange3 = value;
  }
  public resetFnat64FwdEgressPktSizeRange3() {
    this._fnat64FwdEgressPktSizeRange3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64FwdEgressPktSizeRange3Input() {
    return this._fnat64FwdEgressPktSizeRange3;
  }

  // fnat64_fwd_egress_pkt_size_range4 - computed: false, optional: true, required: false
  private _fnat64FwdEgressPktSizeRange4?: number; 
  public get fnat64FwdEgressPktSizeRange4() {
    return this.getNumberAttribute('fnat64_fwd_egress_pkt_size_range4');
  }
  public set fnat64FwdEgressPktSizeRange4(value: number) {
    this._fnat64FwdEgressPktSizeRange4 = value;
  }
  public resetFnat64FwdEgressPktSizeRange4() {
    this._fnat64FwdEgressPktSizeRange4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64FwdEgressPktSizeRange4Input() {
    return this._fnat64FwdEgressPktSizeRange4;
  }

  // fnat64_fwd_ingress_bytes_icmp - computed: false, optional: true, required: false
  private _fnat64FwdIngressBytesIcmp?: number; 
  public get fnat64FwdIngressBytesIcmp() {
    return this.getNumberAttribute('fnat64_fwd_ingress_bytes_icmp');
  }
  public set fnat64FwdIngressBytesIcmp(value: number) {
    this._fnat64FwdIngressBytesIcmp = value;
  }
  public resetFnat64FwdIngressBytesIcmp() {
    this._fnat64FwdIngressBytesIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64FwdIngressBytesIcmpInput() {
    return this._fnat64FwdIngressBytesIcmp;
  }

  // fnat64_fwd_ingress_bytes_others - computed: false, optional: true, required: false
  private _fnat64FwdIngressBytesOthers?: number; 
  public get fnat64FwdIngressBytesOthers() {
    return this.getNumberAttribute('fnat64_fwd_ingress_bytes_others');
  }
  public set fnat64FwdIngressBytesOthers(value: number) {
    this._fnat64FwdIngressBytesOthers = value;
  }
  public resetFnat64FwdIngressBytesOthers() {
    this._fnat64FwdIngressBytesOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64FwdIngressBytesOthersInput() {
    return this._fnat64FwdIngressBytesOthers;
  }

  // fnat64_fwd_ingress_bytes_tcp - computed: false, optional: true, required: false
  private _fnat64FwdIngressBytesTcp?: number; 
  public get fnat64FwdIngressBytesTcp() {
    return this.getNumberAttribute('fnat64_fwd_ingress_bytes_tcp');
  }
  public set fnat64FwdIngressBytesTcp(value: number) {
    this._fnat64FwdIngressBytesTcp = value;
  }
  public resetFnat64FwdIngressBytesTcp() {
    this._fnat64FwdIngressBytesTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64FwdIngressBytesTcpInput() {
    return this._fnat64FwdIngressBytesTcp;
  }

  // fnat64_fwd_ingress_bytes_udp - computed: false, optional: true, required: false
  private _fnat64FwdIngressBytesUdp?: number; 
  public get fnat64FwdIngressBytesUdp() {
    return this.getNumberAttribute('fnat64_fwd_ingress_bytes_udp');
  }
  public set fnat64FwdIngressBytesUdp(value: number) {
    this._fnat64FwdIngressBytesUdp = value;
  }
  public resetFnat64FwdIngressBytesUdp() {
    this._fnat64FwdIngressBytesUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64FwdIngressBytesUdpInput() {
    return this._fnat64FwdIngressBytesUdp;
  }

  // fnat64_fwd_ingress_packets_icmp - computed: false, optional: true, required: false
  private _fnat64FwdIngressPacketsIcmp?: number; 
  public get fnat64FwdIngressPacketsIcmp() {
    return this.getNumberAttribute('fnat64_fwd_ingress_packets_icmp');
  }
  public set fnat64FwdIngressPacketsIcmp(value: number) {
    this._fnat64FwdIngressPacketsIcmp = value;
  }
  public resetFnat64FwdIngressPacketsIcmp() {
    this._fnat64FwdIngressPacketsIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64FwdIngressPacketsIcmpInput() {
    return this._fnat64FwdIngressPacketsIcmp;
  }

  // fnat64_fwd_ingress_packets_others - computed: false, optional: true, required: false
  private _fnat64FwdIngressPacketsOthers?: number; 
  public get fnat64FwdIngressPacketsOthers() {
    return this.getNumberAttribute('fnat64_fwd_ingress_packets_others');
  }
  public set fnat64FwdIngressPacketsOthers(value: number) {
    this._fnat64FwdIngressPacketsOthers = value;
  }
  public resetFnat64FwdIngressPacketsOthers() {
    this._fnat64FwdIngressPacketsOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64FwdIngressPacketsOthersInput() {
    return this._fnat64FwdIngressPacketsOthers;
  }

  // fnat64_fwd_ingress_packets_tcp - computed: false, optional: true, required: false
  private _fnat64FwdIngressPacketsTcp?: number; 
  public get fnat64FwdIngressPacketsTcp() {
    return this.getNumberAttribute('fnat64_fwd_ingress_packets_tcp');
  }
  public set fnat64FwdIngressPacketsTcp(value: number) {
    this._fnat64FwdIngressPacketsTcp = value;
  }
  public resetFnat64FwdIngressPacketsTcp() {
    this._fnat64FwdIngressPacketsTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64FwdIngressPacketsTcpInput() {
    return this._fnat64FwdIngressPacketsTcp;
  }

  // fnat64_fwd_ingress_packets_udp - computed: false, optional: true, required: false
  private _fnat64FwdIngressPacketsUdp?: number; 
  public get fnat64FwdIngressPacketsUdp() {
    return this.getNumberAttribute('fnat64_fwd_ingress_packets_udp');
  }
  public set fnat64FwdIngressPacketsUdp(value: number) {
    this._fnat64FwdIngressPacketsUdp = value;
  }
  public resetFnat64FwdIngressPacketsUdp() {
    this._fnat64FwdIngressPacketsUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64FwdIngressPacketsUdpInput() {
    return this._fnat64FwdIngressPacketsUdp;
  }

  // fnat64_fwd_ingress_pkt_size_range1 - computed: false, optional: true, required: false
  private _fnat64FwdIngressPktSizeRange1?: number; 
  public get fnat64FwdIngressPktSizeRange1() {
    return this.getNumberAttribute('fnat64_fwd_ingress_pkt_size_range1');
  }
  public set fnat64FwdIngressPktSizeRange1(value: number) {
    this._fnat64FwdIngressPktSizeRange1 = value;
  }
  public resetFnat64FwdIngressPktSizeRange1() {
    this._fnat64FwdIngressPktSizeRange1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64FwdIngressPktSizeRange1Input() {
    return this._fnat64FwdIngressPktSizeRange1;
  }

  // fnat64_fwd_ingress_pkt_size_range2 - computed: false, optional: true, required: false
  private _fnat64FwdIngressPktSizeRange2?: number; 
  public get fnat64FwdIngressPktSizeRange2() {
    return this.getNumberAttribute('fnat64_fwd_ingress_pkt_size_range2');
  }
  public set fnat64FwdIngressPktSizeRange2(value: number) {
    this._fnat64FwdIngressPktSizeRange2 = value;
  }
  public resetFnat64FwdIngressPktSizeRange2() {
    this._fnat64FwdIngressPktSizeRange2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64FwdIngressPktSizeRange2Input() {
    return this._fnat64FwdIngressPktSizeRange2;
  }

  // fnat64_fwd_ingress_pkt_size_range3 - computed: false, optional: true, required: false
  private _fnat64FwdIngressPktSizeRange3?: number; 
  public get fnat64FwdIngressPktSizeRange3() {
    return this.getNumberAttribute('fnat64_fwd_ingress_pkt_size_range3');
  }
  public set fnat64FwdIngressPktSizeRange3(value: number) {
    this._fnat64FwdIngressPktSizeRange3 = value;
  }
  public resetFnat64FwdIngressPktSizeRange3() {
    this._fnat64FwdIngressPktSizeRange3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64FwdIngressPktSizeRange3Input() {
    return this._fnat64FwdIngressPktSizeRange3;
  }

  // fnat64_fwd_ingress_pkt_size_range4 - computed: false, optional: true, required: false
  private _fnat64FwdIngressPktSizeRange4?: number; 
  public get fnat64FwdIngressPktSizeRange4() {
    return this.getNumberAttribute('fnat64_fwd_ingress_pkt_size_range4');
  }
  public set fnat64FwdIngressPktSizeRange4(value: number) {
    this._fnat64FwdIngressPktSizeRange4 = value;
  }
  public resetFnat64FwdIngressPktSizeRange4() {
    this._fnat64FwdIngressPktSizeRange4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64FwdIngressPktSizeRange4Input() {
    return this._fnat64FwdIngressPktSizeRange4;
  }

  // fnat64_rev_egress_bytes_icmp - computed: false, optional: true, required: false
  private _fnat64RevEgressBytesIcmp?: number; 
  public get fnat64RevEgressBytesIcmp() {
    return this.getNumberAttribute('fnat64_rev_egress_bytes_icmp');
  }
  public set fnat64RevEgressBytesIcmp(value: number) {
    this._fnat64RevEgressBytesIcmp = value;
  }
  public resetFnat64RevEgressBytesIcmp() {
    this._fnat64RevEgressBytesIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64RevEgressBytesIcmpInput() {
    return this._fnat64RevEgressBytesIcmp;
  }

  // fnat64_rev_egress_bytes_others - computed: false, optional: true, required: false
  private _fnat64RevEgressBytesOthers?: number; 
  public get fnat64RevEgressBytesOthers() {
    return this.getNumberAttribute('fnat64_rev_egress_bytes_others');
  }
  public set fnat64RevEgressBytesOthers(value: number) {
    this._fnat64RevEgressBytesOthers = value;
  }
  public resetFnat64RevEgressBytesOthers() {
    this._fnat64RevEgressBytesOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64RevEgressBytesOthersInput() {
    return this._fnat64RevEgressBytesOthers;
  }

  // fnat64_rev_egress_bytes_tcp - computed: false, optional: true, required: false
  private _fnat64RevEgressBytesTcp?: number; 
  public get fnat64RevEgressBytesTcp() {
    return this.getNumberAttribute('fnat64_rev_egress_bytes_tcp');
  }
  public set fnat64RevEgressBytesTcp(value: number) {
    this._fnat64RevEgressBytesTcp = value;
  }
  public resetFnat64RevEgressBytesTcp() {
    this._fnat64RevEgressBytesTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64RevEgressBytesTcpInput() {
    return this._fnat64RevEgressBytesTcp;
  }

  // fnat64_rev_egress_bytes_udp - computed: false, optional: true, required: false
  private _fnat64RevEgressBytesUdp?: number; 
  public get fnat64RevEgressBytesUdp() {
    return this.getNumberAttribute('fnat64_rev_egress_bytes_udp');
  }
  public set fnat64RevEgressBytesUdp(value: number) {
    this._fnat64RevEgressBytesUdp = value;
  }
  public resetFnat64RevEgressBytesUdp() {
    this._fnat64RevEgressBytesUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64RevEgressBytesUdpInput() {
    return this._fnat64RevEgressBytesUdp;
  }

  // fnat64_rev_egress_packets_icmp - computed: false, optional: true, required: false
  private _fnat64RevEgressPacketsIcmp?: number; 
  public get fnat64RevEgressPacketsIcmp() {
    return this.getNumberAttribute('fnat64_rev_egress_packets_icmp');
  }
  public set fnat64RevEgressPacketsIcmp(value: number) {
    this._fnat64RevEgressPacketsIcmp = value;
  }
  public resetFnat64RevEgressPacketsIcmp() {
    this._fnat64RevEgressPacketsIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64RevEgressPacketsIcmpInput() {
    return this._fnat64RevEgressPacketsIcmp;
  }

  // fnat64_rev_egress_packets_others - computed: false, optional: true, required: false
  private _fnat64RevEgressPacketsOthers?: number; 
  public get fnat64RevEgressPacketsOthers() {
    return this.getNumberAttribute('fnat64_rev_egress_packets_others');
  }
  public set fnat64RevEgressPacketsOthers(value: number) {
    this._fnat64RevEgressPacketsOthers = value;
  }
  public resetFnat64RevEgressPacketsOthers() {
    this._fnat64RevEgressPacketsOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64RevEgressPacketsOthersInput() {
    return this._fnat64RevEgressPacketsOthers;
  }

  // fnat64_rev_egress_packets_tcp - computed: false, optional: true, required: false
  private _fnat64RevEgressPacketsTcp?: number; 
  public get fnat64RevEgressPacketsTcp() {
    return this.getNumberAttribute('fnat64_rev_egress_packets_tcp');
  }
  public set fnat64RevEgressPacketsTcp(value: number) {
    this._fnat64RevEgressPacketsTcp = value;
  }
  public resetFnat64RevEgressPacketsTcp() {
    this._fnat64RevEgressPacketsTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64RevEgressPacketsTcpInput() {
    return this._fnat64RevEgressPacketsTcp;
  }

  // fnat64_rev_egress_packets_udp - computed: false, optional: true, required: false
  private _fnat64RevEgressPacketsUdp?: number; 
  public get fnat64RevEgressPacketsUdp() {
    return this.getNumberAttribute('fnat64_rev_egress_packets_udp');
  }
  public set fnat64RevEgressPacketsUdp(value: number) {
    this._fnat64RevEgressPacketsUdp = value;
  }
  public resetFnat64RevEgressPacketsUdp() {
    this._fnat64RevEgressPacketsUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64RevEgressPacketsUdpInput() {
    return this._fnat64RevEgressPacketsUdp;
  }

  // fnat64_rev_egress_pkt_size_range1 - computed: false, optional: true, required: false
  private _fnat64RevEgressPktSizeRange1?: number; 
  public get fnat64RevEgressPktSizeRange1() {
    return this.getNumberAttribute('fnat64_rev_egress_pkt_size_range1');
  }
  public set fnat64RevEgressPktSizeRange1(value: number) {
    this._fnat64RevEgressPktSizeRange1 = value;
  }
  public resetFnat64RevEgressPktSizeRange1() {
    this._fnat64RevEgressPktSizeRange1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64RevEgressPktSizeRange1Input() {
    return this._fnat64RevEgressPktSizeRange1;
  }

  // fnat64_rev_egress_pkt_size_range2 - computed: false, optional: true, required: false
  private _fnat64RevEgressPktSizeRange2?: number; 
  public get fnat64RevEgressPktSizeRange2() {
    return this.getNumberAttribute('fnat64_rev_egress_pkt_size_range2');
  }
  public set fnat64RevEgressPktSizeRange2(value: number) {
    this._fnat64RevEgressPktSizeRange2 = value;
  }
  public resetFnat64RevEgressPktSizeRange2() {
    this._fnat64RevEgressPktSizeRange2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64RevEgressPktSizeRange2Input() {
    return this._fnat64RevEgressPktSizeRange2;
  }

  // fnat64_rev_egress_pkt_size_range3 - computed: false, optional: true, required: false
  private _fnat64RevEgressPktSizeRange3?: number; 
  public get fnat64RevEgressPktSizeRange3() {
    return this.getNumberAttribute('fnat64_rev_egress_pkt_size_range3');
  }
  public set fnat64RevEgressPktSizeRange3(value: number) {
    this._fnat64RevEgressPktSizeRange3 = value;
  }
  public resetFnat64RevEgressPktSizeRange3() {
    this._fnat64RevEgressPktSizeRange3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64RevEgressPktSizeRange3Input() {
    return this._fnat64RevEgressPktSizeRange3;
  }

  // fnat64_rev_egress_pkt_size_range4 - computed: false, optional: true, required: false
  private _fnat64RevEgressPktSizeRange4?: number; 
  public get fnat64RevEgressPktSizeRange4() {
    return this.getNumberAttribute('fnat64_rev_egress_pkt_size_range4');
  }
  public set fnat64RevEgressPktSizeRange4(value: number) {
    this._fnat64RevEgressPktSizeRange4 = value;
  }
  public resetFnat64RevEgressPktSizeRange4() {
    this._fnat64RevEgressPktSizeRange4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64RevEgressPktSizeRange4Input() {
    return this._fnat64RevEgressPktSizeRange4;
  }

  // fnat64_rev_ingress_bytes_icmp - computed: false, optional: true, required: false
  private _fnat64RevIngressBytesIcmp?: number; 
  public get fnat64RevIngressBytesIcmp() {
    return this.getNumberAttribute('fnat64_rev_ingress_bytes_icmp');
  }
  public set fnat64RevIngressBytesIcmp(value: number) {
    this._fnat64RevIngressBytesIcmp = value;
  }
  public resetFnat64RevIngressBytesIcmp() {
    this._fnat64RevIngressBytesIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64RevIngressBytesIcmpInput() {
    return this._fnat64RevIngressBytesIcmp;
  }

  // fnat64_rev_ingress_bytes_others - computed: false, optional: true, required: false
  private _fnat64RevIngressBytesOthers?: number; 
  public get fnat64RevIngressBytesOthers() {
    return this.getNumberAttribute('fnat64_rev_ingress_bytes_others');
  }
  public set fnat64RevIngressBytesOthers(value: number) {
    this._fnat64RevIngressBytesOthers = value;
  }
  public resetFnat64RevIngressBytesOthers() {
    this._fnat64RevIngressBytesOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64RevIngressBytesOthersInput() {
    return this._fnat64RevIngressBytesOthers;
  }

  // fnat64_rev_ingress_bytes_tcp - computed: false, optional: true, required: false
  private _fnat64RevIngressBytesTcp?: number; 
  public get fnat64RevIngressBytesTcp() {
    return this.getNumberAttribute('fnat64_rev_ingress_bytes_tcp');
  }
  public set fnat64RevIngressBytesTcp(value: number) {
    this._fnat64RevIngressBytesTcp = value;
  }
  public resetFnat64RevIngressBytesTcp() {
    this._fnat64RevIngressBytesTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64RevIngressBytesTcpInput() {
    return this._fnat64RevIngressBytesTcp;
  }

  // fnat64_rev_ingress_bytes_udp - computed: false, optional: true, required: false
  private _fnat64RevIngressBytesUdp?: number; 
  public get fnat64RevIngressBytesUdp() {
    return this.getNumberAttribute('fnat64_rev_ingress_bytes_udp');
  }
  public set fnat64RevIngressBytesUdp(value: number) {
    this._fnat64RevIngressBytesUdp = value;
  }
  public resetFnat64RevIngressBytesUdp() {
    this._fnat64RevIngressBytesUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64RevIngressBytesUdpInput() {
    return this._fnat64RevIngressBytesUdp;
  }

  // fnat64_rev_ingress_packets_icmp - computed: false, optional: true, required: false
  private _fnat64RevIngressPacketsIcmp?: number; 
  public get fnat64RevIngressPacketsIcmp() {
    return this.getNumberAttribute('fnat64_rev_ingress_packets_icmp');
  }
  public set fnat64RevIngressPacketsIcmp(value: number) {
    this._fnat64RevIngressPacketsIcmp = value;
  }
  public resetFnat64RevIngressPacketsIcmp() {
    this._fnat64RevIngressPacketsIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64RevIngressPacketsIcmpInput() {
    return this._fnat64RevIngressPacketsIcmp;
  }

  // fnat64_rev_ingress_packets_others - computed: false, optional: true, required: false
  private _fnat64RevIngressPacketsOthers?: number; 
  public get fnat64RevIngressPacketsOthers() {
    return this.getNumberAttribute('fnat64_rev_ingress_packets_others');
  }
  public set fnat64RevIngressPacketsOthers(value: number) {
    this._fnat64RevIngressPacketsOthers = value;
  }
  public resetFnat64RevIngressPacketsOthers() {
    this._fnat64RevIngressPacketsOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64RevIngressPacketsOthersInput() {
    return this._fnat64RevIngressPacketsOthers;
  }

  // fnat64_rev_ingress_packets_tcp - computed: false, optional: true, required: false
  private _fnat64RevIngressPacketsTcp?: number; 
  public get fnat64RevIngressPacketsTcp() {
    return this.getNumberAttribute('fnat64_rev_ingress_packets_tcp');
  }
  public set fnat64RevIngressPacketsTcp(value: number) {
    this._fnat64RevIngressPacketsTcp = value;
  }
  public resetFnat64RevIngressPacketsTcp() {
    this._fnat64RevIngressPacketsTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64RevIngressPacketsTcpInput() {
    return this._fnat64RevIngressPacketsTcp;
  }

  // fnat64_rev_ingress_packets_udp - computed: false, optional: true, required: false
  private _fnat64RevIngressPacketsUdp?: number; 
  public get fnat64RevIngressPacketsUdp() {
    return this.getNumberAttribute('fnat64_rev_ingress_packets_udp');
  }
  public set fnat64RevIngressPacketsUdp(value: number) {
    this._fnat64RevIngressPacketsUdp = value;
  }
  public resetFnat64RevIngressPacketsUdp() {
    this._fnat64RevIngressPacketsUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64RevIngressPacketsUdpInput() {
    return this._fnat64RevIngressPacketsUdp;
  }

  // fnat64_rev_ingress_pkt_size_range1 - computed: false, optional: true, required: false
  private _fnat64RevIngressPktSizeRange1?: number; 
  public get fnat64RevIngressPktSizeRange1() {
    return this.getNumberAttribute('fnat64_rev_ingress_pkt_size_range1');
  }
  public set fnat64RevIngressPktSizeRange1(value: number) {
    this._fnat64RevIngressPktSizeRange1 = value;
  }
  public resetFnat64RevIngressPktSizeRange1() {
    this._fnat64RevIngressPktSizeRange1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64RevIngressPktSizeRange1Input() {
    return this._fnat64RevIngressPktSizeRange1;
  }

  // fnat64_rev_ingress_pkt_size_range2 - computed: false, optional: true, required: false
  private _fnat64RevIngressPktSizeRange2?: number; 
  public get fnat64RevIngressPktSizeRange2() {
    return this.getNumberAttribute('fnat64_rev_ingress_pkt_size_range2');
  }
  public set fnat64RevIngressPktSizeRange2(value: number) {
    this._fnat64RevIngressPktSizeRange2 = value;
  }
  public resetFnat64RevIngressPktSizeRange2() {
    this._fnat64RevIngressPktSizeRange2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64RevIngressPktSizeRange2Input() {
    return this._fnat64RevIngressPktSizeRange2;
  }

  // fnat64_rev_ingress_pkt_size_range3 - computed: false, optional: true, required: false
  private _fnat64RevIngressPktSizeRange3?: number; 
  public get fnat64RevIngressPktSizeRange3() {
    return this.getNumberAttribute('fnat64_rev_ingress_pkt_size_range3');
  }
  public set fnat64RevIngressPktSizeRange3(value: number) {
    this._fnat64RevIngressPktSizeRange3 = value;
  }
  public resetFnat64RevIngressPktSizeRange3() {
    this._fnat64RevIngressPktSizeRange3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64RevIngressPktSizeRange3Input() {
    return this._fnat64RevIngressPktSizeRange3;
  }

  // fnat64_rev_ingress_pkt_size_range4 - computed: false, optional: true, required: false
  private _fnat64RevIngressPktSizeRange4?: number; 
  public get fnat64RevIngressPktSizeRange4() {
    return this.getNumberAttribute('fnat64_rev_ingress_pkt_size_range4');
  }
  public set fnat64RevIngressPktSizeRange4(value: number) {
    this._fnat64RevIngressPktSizeRange4 = value;
  }
  public resetFnat64RevIngressPktSizeRange4() {
    this._fnat64RevIngressPktSizeRange4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnat64RevIngressPktSizeRange4Input() {
    return this._fnat64RevIngressPktSizeRange4;
  }

  // fnatdslite_fwd_egress_bytes_icmp - computed: false, optional: true, required: false
  private _fnatdsliteFwdEgressBytesIcmp?: number; 
  public get fnatdsliteFwdEgressBytesIcmp() {
    return this.getNumberAttribute('fnatdslite_fwd_egress_bytes_icmp');
  }
  public set fnatdsliteFwdEgressBytesIcmp(value: number) {
    this._fnatdsliteFwdEgressBytesIcmp = value;
  }
  public resetFnatdsliteFwdEgressBytesIcmp() {
    this._fnatdsliteFwdEgressBytesIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteFwdEgressBytesIcmpInput() {
    return this._fnatdsliteFwdEgressBytesIcmp;
  }

  // fnatdslite_fwd_egress_bytes_others - computed: false, optional: true, required: false
  private _fnatdsliteFwdEgressBytesOthers?: number; 
  public get fnatdsliteFwdEgressBytesOthers() {
    return this.getNumberAttribute('fnatdslite_fwd_egress_bytes_others');
  }
  public set fnatdsliteFwdEgressBytesOthers(value: number) {
    this._fnatdsliteFwdEgressBytesOthers = value;
  }
  public resetFnatdsliteFwdEgressBytesOthers() {
    this._fnatdsliteFwdEgressBytesOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteFwdEgressBytesOthersInput() {
    return this._fnatdsliteFwdEgressBytesOthers;
  }

  // fnatdslite_fwd_egress_bytes_tcp - computed: false, optional: true, required: false
  private _fnatdsliteFwdEgressBytesTcp?: number; 
  public get fnatdsliteFwdEgressBytesTcp() {
    return this.getNumberAttribute('fnatdslite_fwd_egress_bytes_tcp');
  }
  public set fnatdsliteFwdEgressBytesTcp(value: number) {
    this._fnatdsliteFwdEgressBytesTcp = value;
  }
  public resetFnatdsliteFwdEgressBytesTcp() {
    this._fnatdsliteFwdEgressBytesTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteFwdEgressBytesTcpInput() {
    return this._fnatdsliteFwdEgressBytesTcp;
  }

  // fnatdslite_fwd_egress_bytes_udp - computed: false, optional: true, required: false
  private _fnatdsliteFwdEgressBytesUdp?: number; 
  public get fnatdsliteFwdEgressBytesUdp() {
    return this.getNumberAttribute('fnatdslite_fwd_egress_bytes_udp');
  }
  public set fnatdsliteFwdEgressBytesUdp(value: number) {
    this._fnatdsliteFwdEgressBytesUdp = value;
  }
  public resetFnatdsliteFwdEgressBytesUdp() {
    this._fnatdsliteFwdEgressBytesUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteFwdEgressBytesUdpInput() {
    return this._fnatdsliteFwdEgressBytesUdp;
  }

  // fnatdslite_fwd_egress_packets_icmp - computed: false, optional: true, required: false
  private _fnatdsliteFwdEgressPacketsIcmp?: number; 
  public get fnatdsliteFwdEgressPacketsIcmp() {
    return this.getNumberAttribute('fnatdslite_fwd_egress_packets_icmp');
  }
  public set fnatdsliteFwdEgressPacketsIcmp(value: number) {
    this._fnatdsliteFwdEgressPacketsIcmp = value;
  }
  public resetFnatdsliteFwdEgressPacketsIcmp() {
    this._fnatdsliteFwdEgressPacketsIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteFwdEgressPacketsIcmpInput() {
    return this._fnatdsliteFwdEgressPacketsIcmp;
  }

  // fnatdslite_fwd_egress_packets_others - computed: false, optional: true, required: false
  private _fnatdsliteFwdEgressPacketsOthers?: number; 
  public get fnatdsliteFwdEgressPacketsOthers() {
    return this.getNumberAttribute('fnatdslite_fwd_egress_packets_others');
  }
  public set fnatdsliteFwdEgressPacketsOthers(value: number) {
    this._fnatdsliteFwdEgressPacketsOthers = value;
  }
  public resetFnatdsliteFwdEgressPacketsOthers() {
    this._fnatdsliteFwdEgressPacketsOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteFwdEgressPacketsOthersInput() {
    return this._fnatdsliteFwdEgressPacketsOthers;
  }

  // fnatdslite_fwd_egress_packets_tcp - computed: false, optional: true, required: false
  private _fnatdsliteFwdEgressPacketsTcp?: number; 
  public get fnatdsliteFwdEgressPacketsTcp() {
    return this.getNumberAttribute('fnatdslite_fwd_egress_packets_tcp');
  }
  public set fnatdsliteFwdEgressPacketsTcp(value: number) {
    this._fnatdsliteFwdEgressPacketsTcp = value;
  }
  public resetFnatdsliteFwdEgressPacketsTcp() {
    this._fnatdsliteFwdEgressPacketsTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteFwdEgressPacketsTcpInput() {
    return this._fnatdsliteFwdEgressPacketsTcp;
  }

  // fnatdslite_fwd_egress_packets_udp - computed: false, optional: true, required: false
  private _fnatdsliteFwdEgressPacketsUdp?: number; 
  public get fnatdsliteFwdEgressPacketsUdp() {
    return this.getNumberAttribute('fnatdslite_fwd_egress_packets_udp');
  }
  public set fnatdsliteFwdEgressPacketsUdp(value: number) {
    this._fnatdsliteFwdEgressPacketsUdp = value;
  }
  public resetFnatdsliteFwdEgressPacketsUdp() {
    this._fnatdsliteFwdEgressPacketsUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteFwdEgressPacketsUdpInput() {
    return this._fnatdsliteFwdEgressPacketsUdp;
  }

  // fnatdslite_fwd_egress_pkt_size_range1 - computed: false, optional: true, required: false
  private _fnatdsliteFwdEgressPktSizeRange1?: number; 
  public get fnatdsliteFwdEgressPktSizeRange1() {
    return this.getNumberAttribute('fnatdslite_fwd_egress_pkt_size_range1');
  }
  public set fnatdsliteFwdEgressPktSizeRange1(value: number) {
    this._fnatdsliteFwdEgressPktSizeRange1 = value;
  }
  public resetFnatdsliteFwdEgressPktSizeRange1() {
    this._fnatdsliteFwdEgressPktSizeRange1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteFwdEgressPktSizeRange1Input() {
    return this._fnatdsliteFwdEgressPktSizeRange1;
  }

  // fnatdslite_fwd_egress_pkt_size_range2 - computed: false, optional: true, required: false
  private _fnatdsliteFwdEgressPktSizeRange2?: number; 
  public get fnatdsliteFwdEgressPktSizeRange2() {
    return this.getNumberAttribute('fnatdslite_fwd_egress_pkt_size_range2');
  }
  public set fnatdsliteFwdEgressPktSizeRange2(value: number) {
    this._fnatdsliteFwdEgressPktSizeRange2 = value;
  }
  public resetFnatdsliteFwdEgressPktSizeRange2() {
    this._fnatdsliteFwdEgressPktSizeRange2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteFwdEgressPktSizeRange2Input() {
    return this._fnatdsliteFwdEgressPktSizeRange2;
  }

  // fnatdslite_fwd_egress_pkt_size_range3 - computed: false, optional: true, required: false
  private _fnatdsliteFwdEgressPktSizeRange3?: number; 
  public get fnatdsliteFwdEgressPktSizeRange3() {
    return this.getNumberAttribute('fnatdslite_fwd_egress_pkt_size_range3');
  }
  public set fnatdsliteFwdEgressPktSizeRange3(value: number) {
    this._fnatdsliteFwdEgressPktSizeRange3 = value;
  }
  public resetFnatdsliteFwdEgressPktSizeRange3() {
    this._fnatdsliteFwdEgressPktSizeRange3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteFwdEgressPktSizeRange3Input() {
    return this._fnatdsliteFwdEgressPktSizeRange3;
  }

  // fnatdslite_fwd_egress_pkt_size_range4 - computed: false, optional: true, required: false
  private _fnatdsliteFwdEgressPktSizeRange4?: number; 
  public get fnatdsliteFwdEgressPktSizeRange4() {
    return this.getNumberAttribute('fnatdslite_fwd_egress_pkt_size_range4');
  }
  public set fnatdsliteFwdEgressPktSizeRange4(value: number) {
    this._fnatdsliteFwdEgressPktSizeRange4 = value;
  }
  public resetFnatdsliteFwdEgressPktSizeRange4() {
    this._fnatdsliteFwdEgressPktSizeRange4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteFwdEgressPktSizeRange4Input() {
    return this._fnatdsliteFwdEgressPktSizeRange4;
  }

  // fnatdslite_fwd_ingress_bytes_icmp - computed: false, optional: true, required: false
  private _fnatdsliteFwdIngressBytesIcmp?: number; 
  public get fnatdsliteFwdIngressBytesIcmp() {
    return this.getNumberAttribute('fnatdslite_fwd_ingress_bytes_icmp');
  }
  public set fnatdsliteFwdIngressBytesIcmp(value: number) {
    this._fnatdsliteFwdIngressBytesIcmp = value;
  }
  public resetFnatdsliteFwdIngressBytesIcmp() {
    this._fnatdsliteFwdIngressBytesIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteFwdIngressBytesIcmpInput() {
    return this._fnatdsliteFwdIngressBytesIcmp;
  }

  // fnatdslite_fwd_ingress_bytes_others - computed: false, optional: true, required: false
  private _fnatdsliteFwdIngressBytesOthers?: number; 
  public get fnatdsliteFwdIngressBytesOthers() {
    return this.getNumberAttribute('fnatdslite_fwd_ingress_bytes_others');
  }
  public set fnatdsliteFwdIngressBytesOthers(value: number) {
    this._fnatdsliteFwdIngressBytesOthers = value;
  }
  public resetFnatdsliteFwdIngressBytesOthers() {
    this._fnatdsliteFwdIngressBytesOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteFwdIngressBytesOthersInput() {
    return this._fnatdsliteFwdIngressBytesOthers;
  }

  // fnatdslite_fwd_ingress_bytes_tcp - computed: false, optional: true, required: false
  private _fnatdsliteFwdIngressBytesTcp?: number; 
  public get fnatdsliteFwdIngressBytesTcp() {
    return this.getNumberAttribute('fnatdslite_fwd_ingress_bytes_tcp');
  }
  public set fnatdsliteFwdIngressBytesTcp(value: number) {
    this._fnatdsliteFwdIngressBytesTcp = value;
  }
  public resetFnatdsliteFwdIngressBytesTcp() {
    this._fnatdsliteFwdIngressBytesTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteFwdIngressBytesTcpInput() {
    return this._fnatdsliteFwdIngressBytesTcp;
  }

  // fnatdslite_fwd_ingress_bytes_udp - computed: false, optional: true, required: false
  private _fnatdsliteFwdIngressBytesUdp?: number; 
  public get fnatdsliteFwdIngressBytesUdp() {
    return this.getNumberAttribute('fnatdslite_fwd_ingress_bytes_udp');
  }
  public set fnatdsliteFwdIngressBytesUdp(value: number) {
    this._fnatdsliteFwdIngressBytesUdp = value;
  }
  public resetFnatdsliteFwdIngressBytesUdp() {
    this._fnatdsliteFwdIngressBytesUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteFwdIngressBytesUdpInput() {
    return this._fnatdsliteFwdIngressBytesUdp;
  }

  // fnatdslite_fwd_ingress_packets_icmp - computed: false, optional: true, required: false
  private _fnatdsliteFwdIngressPacketsIcmp?: number; 
  public get fnatdsliteFwdIngressPacketsIcmp() {
    return this.getNumberAttribute('fnatdslite_fwd_ingress_packets_icmp');
  }
  public set fnatdsliteFwdIngressPacketsIcmp(value: number) {
    this._fnatdsliteFwdIngressPacketsIcmp = value;
  }
  public resetFnatdsliteFwdIngressPacketsIcmp() {
    this._fnatdsliteFwdIngressPacketsIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteFwdIngressPacketsIcmpInput() {
    return this._fnatdsliteFwdIngressPacketsIcmp;
  }

  // fnatdslite_fwd_ingress_packets_others - computed: false, optional: true, required: false
  private _fnatdsliteFwdIngressPacketsOthers?: number; 
  public get fnatdsliteFwdIngressPacketsOthers() {
    return this.getNumberAttribute('fnatdslite_fwd_ingress_packets_others');
  }
  public set fnatdsliteFwdIngressPacketsOthers(value: number) {
    this._fnatdsliteFwdIngressPacketsOthers = value;
  }
  public resetFnatdsliteFwdIngressPacketsOthers() {
    this._fnatdsliteFwdIngressPacketsOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteFwdIngressPacketsOthersInput() {
    return this._fnatdsliteFwdIngressPacketsOthers;
  }

  // fnatdslite_fwd_ingress_packets_tcp - computed: false, optional: true, required: false
  private _fnatdsliteFwdIngressPacketsTcp?: number; 
  public get fnatdsliteFwdIngressPacketsTcp() {
    return this.getNumberAttribute('fnatdslite_fwd_ingress_packets_tcp');
  }
  public set fnatdsliteFwdIngressPacketsTcp(value: number) {
    this._fnatdsliteFwdIngressPacketsTcp = value;
  }
  public resetFnatdsliteFwdIngressPacketsTcp() {
    this._fnatdsliteFwdIngressPacketsTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteFwdIngressPacketsTcpInput() {
    return this._fnatdsliteFwdIngressPacketsTcp;
  }

  // fnatdslite_fwd_ingress_packets_udp - computed: false, optional: true, required: false
  private _fnatdsliteFwdIngressPacketsUdp?: number; 
  public get fnatdsliteFwdIngressPacketsUdp() {
    return this.getNumberAttribute('fnatdslite_fwd_ingress_packets_udp');
  }
  public set fnatdsliteFwdIngressPacketsUdp(value: number) {
    this._fnatdsliteFwdIngressPacketsUdp = value;
  }
  public resetFnatdsliteFwdIngressPacketsUdp() {
    this._fnatdsliteFwdIngressPacketsUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteFwdIngressPacketsUdpInput() {
    return this._fnatdsliteFwdIngressPacketsUdp;
  }

  // fnatdslite_fwd_ingress_pkt_size_range1 - computed: false, optional: true, required: false
  private _fnatdsliteFwdIngressPktSizeRange1?: number; 
  public get fnatdsliteFwdIngressPktSizeRange1() {
    return this.getNumberAttribute('fnatdslite_fwd_ingress_pkt_size_range1');
  }
  public set fnatdsliteFwdIngressPktSizeRange1(value: number) {
    this._fnatdsliteFwdIngressPktSizeRange1 = value;
  }
  public resetFnatdsliteFwdIngressPktSizeRange1() {
    this._fnatdsliteFwdIngressPktSizeRange1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteFwdIngressPktSizeRange1Input() {
    return this._fnatdsliteFwdIngressPktSizeRange1;
  }

  // fnatdslite_fwd_ingress_pkt_size_range2 - computed: false, optional: true, required: false
  private _fnatdsliteFwdIngressPktSizeRange2?: number; 
  public get fnatdsliteFwdIngressPktSizeRange2() {
    return this.getNumberAttribute('fnatdslite_fwd_ingress_pkt_size_range2');
  }
  public set fnatdsliteFwdIngressPktSizeRange2(value: number) {
    this._fnatdsliteFwdIngressPktSizeRange2 = value;
  }
  public resetFnatdsliteFwdIngressPktSizeRange2() {
    this._fnatdsliteFwdIngressPktSizeRange2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteFwdIngressPktSizeRange2Input() {
    return this._fnatdsliteFwdIngressPktSizeRange2;
  }

  // fnatdslite_fwd_ingress_pkt_size_range3 - computed: false, optional: true, required: false
  private _fnatdsliteFwdIngressPktSizeRange3?: number; 
  public get fnatdsliteFwdIngressPktSizeRange3() {
    return this.getNumberAttribute('fnatdslite_fwd_ingress_pkt_size_range3');
  }
  public set fnatdsliteFwdIngressPktSizeRange3(value: number) {
    this._fnatdsliteFwdIngressPktSizeRange3 = value;
  }
  public resetFnatdsliteFwdIngressPktSizeRange3() {
    this._fnatdsliteFwdIngressPktSizeRange3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteFwdIngressPktSizeRange3Input() {
    return this._fnatdsliteFwdIngressPktSizeRange3;
  }

  // fnatdslite_fwd_ingress_pkt_size_range4 - computed: false, optional: true, required: false
  private _fnatdsliteFwdIngressPktSizeRange4?: number; 
  public get fnatdsliteFwdIngressPktSizeRange4() {
    return this.getNumberAttribute('fnatdslite_fwd_ingress_pkt_size_range4');
  }
  public set fnatdsliteFwdIngressPktSizeRange4(value: number) {
    this._fnatdsliteFwdIngressPktSizeRange4 = value;
  }
  public resetFnatdsliteFwdIngressPktSizeRange4() {
    this._fnatdsliteFwdIngressPktSizeRange4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteFwdIngressPktSizeRange4Input() {
    return this._fnatdsliteFwdIngressPktSizeRange4;
  }

  // fnatdslite_rev_egress_bytes_icmp - computed: false, optional: true, required: false
  private _fnatdsliteRevEgressBytesIcmp?: number; 
  public get fnatdsliteRevEgressBytesIcmp() {
    return this.getNumberAttribute('fnatdslite_rev_egress_bytes_icmp');
  }
  public set fnatdsliteRevEgressBytesIcmp(value: number) {
    this._fnatdsliteRevEgressBytesIcmp = value;
  }
  public resetFnatdsliteRevEgressBytesIcmp() {
    this._fnatdsliteRevEgressBytesIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteRevEgressBytesIcmpInput() {
    return this._fnatdsliteRevEgressBytesIcmp;
  }

  // fnatdslite_rev_egress_bytes_others - computed: false, optional: true, required: false
  private _fnatdsliteRevEgressBytesOthers?: number; 
  public get fnatdsliteRevEgressBytesOthers() {
    return this.getNumberAttribute('fnatdslite_rev_egress_bytes_others');
  }
  public set fnatdsliteRevEgressBytesOthers(value: number) {
    this._fnatdsliteRevEgressBytesOthers = value;
  }
  public resetFnatdsliteRevEgressBytesOthers() {
    this._fnatdsliteRevEgressBytesOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteRevEgressBytesOthersInput() {
    return this._fnatdsliteRevEgressBytesOthers;
  }

  // fnatdslite_rev_egress_bytes_tcp - computed: false, optional: true, required: false
  private _fnatdsliteRevEgressBytesTcp?: number; 
  public get fnatdsliteRevEgressBytesTcp() {
    return this.getNumberAttribute('fnatdslite_rev_egress_bytes_tcp');
  }
  public set fnatdsliteRevEgressBytesTcp(value: number) {
    this._fnatdsliteRevEgressBytesTcp = value;
  }
  public resetFnatdsliteRevEgressBytesTcp() {
    this._fnatdsliteRevEgressBytesTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteRevEgressBytesTcpInput() {
    return this._fnatdsliteRevEgressBytesTcp;
  }

  // fnatdslite_rev_egress_bytes_udp - computed: false, optional: true, required: false
  private _fnatdsliteRevEgressBytesUdp?: number; 
  public get fnatdsliteRevEgressBytesUdp() {
    return this.getNumberAttribute('fnatdslite_rev_egress_bytes_udp');
  }
  public set fnatdsliteRevEgressBytesUdp(value: number) {
    this._fnatdsliteRevEgressBytesUdp = value;
  }
  public resetFnatdsliteRevEgressBytesUdp() {
    this._fnatdsliteRevEgressBytesUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteRevEgressBytesUdpInput() {
    return this._fnatdsliteRevEgressBytesUdp;
  }

  // fnatdslite_rev_egress_packets_icmp - computed: false, optional: true, required: false
  private _fnatdsliteRevEgressPacketsIcmp?: number; 
  public get fnatdsliteRevEgressPacketsIcmp() {
    return this.getNumberAttribute('fnatdslite_rev_egress_packets_icmp');
  }
  public set fnatdsliteRevEgressPacketsIcmp(value: number) {
    this._fnatdsliteRevEgressPacketsIcmp = value;
  }
  public resetFnatdsliteRevEgressPacketsIcmp() {
    this._fnatdsliteRevEgressPacketsIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteRevEgressPacketsIcmpInput() {
    return this._fnatdsliteRevEgressPacketsIcmp;
  }

  // fnatdslite_rev_egress_packets_others - computed: false, optional: true, required: false
  private _fnatdsliteRevEgressPacketsOthers?: number; 
  public get fnatdsliteRevEgressPacketsOthers() {
    return this.getNumberAttribute('fnatdslite_rev_egress_packets_others');
  }
  public set fnatdsliteRevEgressPacketsOthers(value: number) {
    this._fnatdsliteRevEgressPacketsOthers = value;
  }
  public resetFnatdsliteRevEgressPacketsOthers() {
    this._fnatdsliteRevEgressPacketsOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteRevEgressPacketsOthersInput() {
    return this._fnatdsliteRevEgressPacketsOthers;
  }

  // fnatdslite_rev_egress_packets_tcp - computed: false, optional: true, required: false
  private _fnatdsliteRevEgressPacketsTcp?: number; 
  public get fnatdsliteRevEgressPacketsTcp() {
    return this.getNumberAttribute('fnatdslite_rev_egress_packets_tcp');
  }
  public set fnatdsliteRevEgressPacketsTcp(value: number) {
    this._fnatdsliteRevEgressPacketsTcp = value;
  }
  public resetFnatdsliteRevEgressPacketsTcp() {
    this._fnatdsliteRevEgressPacketsTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteRevEgressPacketsTcpInput() {
    return this._fnatdsliteRevEgressPacketsTcp;
  }

  // fnatdslite_rev_egress_packets_udp - computed: false, optional: true, required: false
  private _fnatdsliteRevEgressPacketsUdp?: number; 
  public get fnatdsliteRevEgressPacketsUdp() {
    return this.getNumberAttribute('fnatdslite_rev_egress_packets_udp');
  }
  public set fnatdsliteRevEgressPacketsUdp(value: number) {
    this._fnatdsliteRevEgressPacketsUdp = value;
  }
  public resetFnatdsliteRevEgressPacketsUdp() {
    this._fnatdsliteRevEgressPacketsUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteRevEgressPacketsUdpInput() {
    return this._fnatdsliteRevEgressPacketsUdp;
  }

  // fnatdslite_rev_egress_pkt_size_range1 - computed: false, optional: true, required: false
  private _fnatdsliteRevEgressPktSizeRange1?: number; 
  public get fnatdsliteRevEgressPktSizeRange1() {
    return this.getNumberAttribute('fnatdslite_rev_egress_pkt_size_range1');
  }
  public set fnatdsliteRevEgressPktSizeRange1(value: number) {
    this._fnatdsliteRevEgressPktSizeRange1 = value;
  }
  public resetFnatdsliteRevEgressPktSizeRange1() {
    this._fnatdsliteRevEgressPktSizeRange1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteRevEgressPktSizeRange1Input() {
    return this._fnatdsliteRevEgressPktSizeRange1;
  }

  // fnatdslite_rev_egress_pkt_size_range2 - computed: false, optional: true, required: false
  private _fnatdsliteRevEgressPktSizeRange2?: number; 
  public get fnatdsliteRevEgressPktSizeRange2() {
    return this.getNumberAttribute('fnatdslite_rev_egress_pkt_size_range2');
  }
  public set fnatdsliteRevEgressPktSizeRange2(value: number) {
    this._fnatdsliteRevEgressPktSizeRange2 = value;
  }
  public resetFnatdsliteRevEgressPktSizeRange2() {
    this._fnatdsliteRevEgressPktSizeRange2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteRevEgressPktSizeRange2Input() {
    return this._fnatdsliteRevEgressPktSizeRange2;
  }

  // fnatdslite_rev_egress_pkt_size_range3 - computed: false, optional: true, required: false
  private _fnatdsliteRevEgressPktSizeRange3?: number; 
  public get fnatdsliteRevEgressPktSizeRange3() {
    return this.getNumberAttribute('fnatdslite_rev_egress_pkt_size_range3');
  }
  public set fnatdsliteRevEgressPktSizeRange3(value: number) {
    this._fnatdsliteRevEgressPktSizeRange3 = value;
  }
  public resetFnatdsliteRevEgressPktSizeRange3() {
    this._fnatdsliteRevEgressPktSizeRange3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteRevEgressPktSizeRange3Input() {
    return this._fnatdsliteRevEgressPktSizeRange3;
  }

  // fnatdslite_rev_egress_pkt_size_range4 - computed: false, optional: true, required: false
  private _fnatdsliteRevEgressPktSizeRange4?: number; 
  public get fnatdsliteRevEgressPktSizeRange4() {
    return this.getNumberAttribute('fnatdslite_rev_egress_pkt_size_range4');
  }
  public set fnatdsliteRevEgressPktSizeRange4(value: number) {
    this._fnatdsliteRevEgressPktSizeRange4 = value;
  }
  public resetFnatdsliteRevEgressPktSizeRange4() {
    this._fnatdsliteRevEgressPktSizeRange4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteRevEgressPktSizeRange4Input() {
    return this._fnatdsliteRevEgressPktSizeRange4;
  }

  // fnatdslite_rev_ingress_bytes_icmp - computed: false, optional: true, required: false
  private _fnatdsliteRevIngressBytesIcmp?: number; 
  public get fnatdsliteRevIngressBytesIcmp() {
    return this.getNumberAttribute('fnatdslite_rev_ingress_bytes_icmp');
  }
  public set fnatdsliteRevIngressBytesIcmp(value: number) {
    this._fnatdsliteRevIngressBytesIcmp = value;
  }
  public resetFnatdsliteRevIngressBytesIcmp() {
    this._fnatdsliteRevIngressBytesIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteRevIngressBytesIcmpInput() {
    return this._fnatdsliteRevIngressBytesIcmp;
  }

  // fnatdslite_rev_ingress_bytes_others - computed: false, optional: true, required: false
  private _fnatdsliteRevIngressBytesOthers?: number; 
  public get fnatdsliteRevIngressBytesOthers() {
    return this.getNumberAttribute('fnatdslite_rev_ingress_bytes_others');
  }
  public set fnatdsliteRevIngressBytesOthers(value: number) {
    this._fnatdsliteRevIngressBytesOthers = value;
  }
  public resetFnatdsliteRevIngressBytesOthers() {
    this._fnatdsliteRevIngressBytesOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteRevIngressBytesOthersInput() {
    return this._fnatdsliteRevIngressBytesOthers;
  }

  // fnatdslite_rev_ingress_bytes_tcp - computed: false, optional: true, required: false
  private _fnatdsliteRevIngressBytesTcp?: number; 
  public get fnatdsliteRevIngressBytesTcp() {
    return this.getNumberAttribute('fnatdslite_rev_ingress_bytes_tcp');
  }
  public set fnatdsliteRevIngressBytesTcp(value: number) {
    this._fnatdsliteRevIngressBytesTcp = value;
  }
  public resetFnatdsliteRevIngressBytesTcp() {
    this._fnatdsliteRevIngressBytesTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteRevIngressBytesTcpInput() {
    return this._fnatdsliteRevIngressBytesTcp;
  }

  // fnatdslite_rev_ingress_bytes_udp - computed: false, optional: true, required: false
  private _fnatdsliteRevIngressBytesUdp?: number; 
  public get fnatdsliteRevIngressBytesUdp() {
    return this.getNumberAttribute('fnatdslite_rev_ingress_bytes_udp');
  }
  public set fnatdsliteRevIngressBytesUdp(value: number) {
    this._fnatdsliteRevIngressBytesUdp = value;
  }
  public resetFnatdsliteRevIngressBytesUdp() {
    this._fnatdsliteRevIngressBytesUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteRevIngressBytesUdpInput() {
    return this._fnatdsliteRevIngressBytesUdp;
  }

  // fnatdslite_rev_ingress_packets_icmp - computed: false, optional: true, required: false
  private _fnatdsliteRevIngressPacketsIcmp?: number; 
  public get fnatdsliteRevIngressPacketsIcmp() {
    return this.getNumberAttribute('fnatdslite_rev_ingress_packets_icmp');
  }
  public set fnatdsliteRevIngressPacketsIcmp(value: number) {
    this._fnatdsliteRevIngressPacketsIcmp = value;
  }
  public resetFnatdsliteRevIngressPacketsIcmp() {
    this._fnatdsliteRevIngressPacketsIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteRevIngressPacketsIcmpInput() {
    return this._fnatdsliteRevIngressPacketsIcmp;
  }

  // fnatdslite_rev_ingress_packets_others - computed: false, optional: true, required: false
  private _fnatdsliteRevIngressPacketsOthers?: number; 
  public get fnatdsliteRevIngressPacketsOthers() {
    return this.getNumberAttribute('fnatdslite_rev_ingress_packets_others');
  }
  public set fnatdsliteRevIngressPacketsOthers(value: number) {
    this._fnatdsliteRevIngressPacketsOthers = value;
  }
  public resetFnatdsliteRevIngressPacketsOthers() {
    this._fnatdsliteRevIngressPacketsOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteRevIngressPacketsOthersInput() {
    return this._fnatdsliteRevIngressPacketsOthers;
  }

  // fnatdslite_rev_ingress_packets_tcp - computed: false, optional: true, required: false
  private _fnatdsliteRevIngressPacketsTcp?: number; 
  public get fnatdsliteRevIngressPacketsTcp() {
    return this.getNumberAttribute('fnatdslite_rev_ingress_packets_tcp');
  }
  public set fnatdsliteRevIngressPacketsTcp(value: number) {
    this._fnatdsliteRevIngressPacketsTcp = value;
  }
  public resetFnatdsliteRevIngressPacketsTcp() {
    this._fnatdsliteRevIngressPacketsTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteRevIngressPacketsTcpInput() {
    return this._fnatdsliteRevIngressPacketsTcp;
  }

  // fnatdslite_rev_ingress_packets_udp - computed: false, optional: true, required: false
  private _fnatdsliteRevIngressPacketsUdp?: number; 
  public get fnatdsliteRevIngressPacketsUdp() {
    return this.getNumberAttribute('fnatdslite_rev_ingress_packets_udp');
  }
  public set fnatdsliteRevIngressPacketsUdp(value: number) {
    this._fnatdsliteRevIngressPacketsUdp = value;
  }
  public resetFnatdsliteRevIngressPacketsUdp() {
    this._fnatdsliteRevIngressPacketsUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteRevIngressPacketsUdpInput() {
    return this._fnatdsliteRevIngressPacketsUdp;
  }

  // fnatdslite_rev_ingress_pkt_size_range1 - computed: false, optional: true, required: false
  private _fnatdsliteRevIngressPktSizeRange1?: number; 
  public get fnatdsliteRevIngressPktSizeRange1() {
    return this.getNumberAttribute('fnatdslite_rev_ingress_pkt_size_range1');
  }
  public set fnatdsliteRevIngressPktSizeRange1(value: number) {
    this._fnatdsliteRevIngressPktSizeRange1 = value;
  }
  public resetFnatdsliteRevIngressPktSizeRange1() {
    this._fnatdsliteRevIngressPktSizeRange1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteRevIngressPktSizeRange1Input() {
    return this._fnatdsliteRevIngressPktSizeRange1;
  }

  // fnatdslite_rev_ingress_pkt_size_range2 - computed: false, optional: true, required: false
  private _fnatdsliteRevIngressPktSizeRange2?: number; 
  public get fnatdsliteRevIngressPktSizeRange2() {
    return this.getNumberAttribute('fnatdslite_rev_ingress_pkt_size_range2');
  }
  public set fnatdsliteRevIngressPktSizeRange2(value: number) {
    this._fnatdsliteRevIngressPktSizeRange2 = value;
  }
  public resetFnatdsliteRevIngressPktSizeRange2() {
    this._fnatdsliteRevIngressPktSizeRange2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteRevIngressPktSizeRange2Input() {
    return this._fnatdsliteRevIngressPktSizeRange2;
  }

  // fnatdslite_rev_ingress_pkt_size_range3 - computed: false, optional: true, required: false
  private _fnatdsliteRevIngressPktSizeRange3?: number; 
  public get fnatdsliteRevIngressPktSizeRange3() {
    return this.getNumberAttribute('fnatdslite_rev_ingress_pkt_size_range3');
  }
  public set fnatdsliteRevIngressPktSizeRange3(value: number) {
    this._fnatdsliteRevIngressPktSizeRange3 = value;
  }
  public resetFnatdsliteRevIngressPktSizeRange3() {
    this._fnatdsliteRevIngressPktSizeRange3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteRevIngressPktSizeRange3Input() {
    return this._fnatdsliteRevIngressPktSizeRange3;
  }

  // fnatdslite_rev_ingress_pkt_size_range4 - computed: false, optional: true, required: false
  private _fnatdsliteRevIngressPktSizeRange4?: number; 
  public get fnatdsliteRevIngressPktSizeRange4() {
    return this.getNumberAttribute('fnatdslite_rev_ingress_pkt_size_range4');
  }
  public set fnatdsliteRevIngressPktSizeRange4(value: number) {
    this._fnatdsliteRevIngressPktSizeRange4 = value;
  }
  public resetFnatdsliteRevIngressPktSizeRange4() {
    this._fnatdsliteRevIngressPktSizeRange4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fnatdsliteRevIngressPktSizeRange4Input() {
    return this._fnatdsliteRevIngressPktSizeRange4;
  }

  // fullcone_failure - computed: false, optional: true, required: false
  private _fullconeFailure?: number; 
  public get fullconeFailure() {
    return this.getNumberAttribute('fullcone_failure');
  }
  public set fullconeFailure(value: number) {
    this._fullconeFailure = value;
  }
  public resetFullconeFailure() {
    this._fullconeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullconeFailureInput() {
    return this._fullconeFailure;
  }

  // ha_session_user_quota_exceeded - computed: false, optional: true, required: false
  private _haSessionUserQuotaExceeded?: number; 
  public get haSessionUserQuotaExceeded() {
    return this.getNumberAttribute('ha_session_user_quota_exceeded');
  }
  public set haSessionUserQuotaExceeded(value: number) {
    this._haSessionUserQuotaExceeded = value;
  }
  public resetHaSessionUserQuotaExceeded() {
    this._haSessionUserQuotaExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haSessionUserQuotaExceededInput() {
    return this._haSessionUserQuotaExceeded;
  }

  // nat44_data_session_created - computed: false, optional: true, required: false
  private _nat44DataSessionCreated?: number; 
  public get nat44DataSessionCreated() {
    return this.getNumberAttribute('nat44_data_session_created');
  }
  public set nat44DataSessionCreated(value: number) {
    this._nat44DataSessionCreated = value;
  }
  public resetNat44DataSessionCreated() {
    this._nat44DataSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat44DataSessionCreatedInput() {
    return this._nat44DataSessionCreated;
  }

  // nat44_data_session_freed - computed: false, optional: true, required: false
  private _nat44DataSessionFreed?: number; 
  public get nat44DataSessionFreed() {
    return this.getNumberAttribute('nat44_data_session_freed');
  }
  public set nat44DataSessionFreed(value: number) {
    this._nat44DataSessionFreed = value;
  }
  public resetNat44DataSessionFreed() {
    this._nat44DataSessionFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat44DataSessionFreedInput() {
    return this._nat44DataSessionFreed;
  }

  // nat44_eif_limit_exceeded - computed: false, optional: true, required: false
  private _nat44EifLimitExceeded?: number; 
  public get nat44EifLimitExceeded() {
    return this.getNumberAttribute('nat44_eif_limit_exceeded');
  }
  public set nat44EifLimitExceeded(value: number) {
    this._nat44EifLimitExceeded = value;
  }
  public resetNat44EifLimitExceeded() {
    this._nat44EifLimitExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat44EifLimitExceededInput() {
    return this._nat44EifLimitExceeded;
  }

  // nat44_eif_match - computed: false, optional: true, required: false
  private _nat44EifMatch?: number; 
  public get nat44EifMatch() {
    return this.getNumberAttribute('nat44_eif_match');
  }
  public set nat44EifMatch(value: number) {
    this._nat44EifMatch = value;
  }
  public resetNat44EifMatch() {
    this._nat44EifMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat44EifMatchInput() {
    return this._nat44EifMatch;
  }

  // nat44_eim_match - computed: false, optional: true, required: false
  private _nat44EimMatch?: number; 
  public get nat44EimMatch() {
    return this.getNumberAttribute('nat44_eim_match');
  }
  public set nat44EimMatch(value: number) {
    this._nat44EimMatch = value;
  }
  public resetNat44EimMatch() {
    this._nat44EimMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat44EimMatchInput() {
    return this._nat44EimMatch;
  }

  // nat44_hairpin - computed: false, optional: true, required: false
  private _nat44Hairpin?: number; 
  public get nat44Hairpin() {
    return this.getNumberAttribute('nat44_hairpin');
  }
  public set nat44Hairpin(value: number) {
    this._nat44Hairpin = value;
  }
  public resetNat44Hairpin() {
    this._nat44Hairpin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat44HairpinInput() {
    return this._nat44Hairpin;
  }

  // nat44_inbound_filtered - computed: false, optional: true, required: false
  private _nat44InboundFiltered?: number; 
  public get nat44InboundFiltered() {
    return this.getNumberAttribute('nat44_inbound_filtered');
  }
  public set nat44InboundFiltered(value: number) {
    this._nat44InboundFiltered = value;
  }
  public resetNat44InboundFiltered() {
    this._nat44InboundFiltered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat44InboundFilteredInput() {
    return this._nat44InboundFiltered;
  }

  // nat44_tcp_fullcone_created - computed: false, optional: true, required: false
  private _nat44TcpFullconeCreated?: number; 
  public get nat44TcpFullconeCreated() {
    return this.getNumberAttribute('nat44_tcp_fullcone_created');
  }
  public set nat44TcpFullconeCreated(value: number) {
    this._nat44TcpFullconeCreated = value;
  }
  public resetNat44TcpFullconeCreated() {
    this._nat44TcpFullconeCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat44TcpFullconeCreatedInput() {
    return this._nat44TcpFullconeCreated;
  }

  // nat44_tcp_fullcone_freed - computed: false, optional: true, required: false
  private _nat44TcpFullconeFreed?: number; 
  public get nat44TcpFullconeFreed() {
    return this.getNumberAttribute('nat44_tcp_fullcone_freed');
  }
  public set nat44TcpFullconeFreed(value: number) {
    this._nat44TcpFullconeFreed = value;
  }
  public resetNat44TcpFullconeFreed() {
    this._nat44TcpFullconeFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat44TcpFullconeFreedInput() {
    return this._nat44TcpFullconeFreed;
  }

  // nat44_udp_alg_fullcone_created - computed: false, optional: true, required: false
  private _nat44UdpAlgFullconeCreated?: number; 
  public get nat44UdpAlgFullconeCreated() {
    return this.getNumberAttribute('nat44_udp_alg_fullcone_created');
  }
  public set nat44UdpAlgFullconeCreated(value: number) {
    this._nat44UdpAlgFullconeCreated = value;
  }
  public resetNat44UdpAlgFullconeCreated() {
    this._nat44UdpAlgFullconeCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat44UdpAlgFullconeCreatedInput() {
    return this._nat44UdpAlgFullconeCreated;
  }

  // nat44_udp_alg_fullcone_freed - computed: false, optional: true, required: false
  private _nat44UdpAlgFullconeFreed?: number; 
  public get nat44UdpAlgFullconeFreed() {
    return this.getNumberAttribute('nat44_udp_alg_fullcone_freed');
  }
  public set nat44UdpAlgFullconeFreed(value: number) {
    this._nat44UdpAlgFullconeFreed = value;
  }
  public resetNat44UdpAlgFullconeFreed() {
    this._nat44UdpAlgFullconeFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat44UdpAlgFullconeFreedInput() {
    return this._nat44UdpAlgFullconeFreed;
  }

  // nat44_udp_fullcone_created - computed: false, optional: true, required: false
  private _nat44UdpFullconeCreated?: number; 
  public get nat44UdpFullconeCreated() {
    return this.getNumberAttribute('nat44_udp_fullcone_created');
  }
  public set nat44UdpFullconeCreated(value: number) {
    this._nat44UdpFullconeCreated = value;
  }
  public resetNat44UdpFullconeCreated() {
    this._nat44UdpFullconeCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat44UdpFullconeCreatedInput() {
    return this._nat44UdpFullconeCreated;
  }

  // nat44_udp_fullcone_freed - computed: false, optional: true, required: false
  private _nat44UdpFullconeFreed?: number; 
  public get nat44UdpFullconeFreed() {
    return this.getNumberAttribute('nat44_udp_fullcone_freed');
  }
  public set nat44UdpFullconeFreed(value: number) {
    this._nat44UdpFullconeFreed = value;
  }
  public resetNat44UdpFullconeFreed() {
    this._nat44UdpFullconeFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat44UdpFullconeFreedInput() {
    return this._nat44UdpFullconeFreed;
  }

  // nat64_data_session_created - computed: false, optional: true, required: false
  private _nat64DataSessionCreated?: number; 
  public get nat64DataSessionCreated() {
    return this.getNumberAttribute('nat64_data_session_created');
  }
  public set nat64DataSessionCreated(value: number) {
    this._nat64DataSessionCreated = value;
  }
  public resetNat64DataSessionCreated() {
    this._nat64DataSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64DataSessionCreatedInput() {
    return this._nat64DataSessionCreated;
  }

  // nat64_data_session_freed - computed: false, optional: true, required: false
  private _nat64DataSessionFreed?: number; 
  public get nat64DataSessionFreed() {
    return this.getNumberAttribute('nat64_data_session_freed');
  }
  public set nat64DataSessionFreed(value: number) {
    this._nat64DataSessionFreed = value;
  }
  public resetNat64DataSessionFreed() {
    this._nat64DataSessionFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64DataSessionFreedInput() {
    return this._nat64DataSessionFreed;
  }

  // nat64_eif_limit_exceeded - computed: false, optional: true, required: false
  private _nat64EifLimitExceeded?: number; 
  public get nat64EifLimitExceeded() {
    return this.getNumberAttribute('nat64_eif_limit_exceeded');
  }
  public set nat64EifLimitExceeded(value: number) {
    this._nat64EifLimitExceeded = value;
  }
  public resetNat64EifLimitExceeded() {
    this._nat64EifLimitExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64EifLimitExceededInput() {
    return this._nat64EifLimitExceeded;
  }

  // nat64_eif_match - computed: false, optional: true, required: false
  private _nat64EifMatch?: number; 
  public get nat64EifMatch() {
    return this.getNumberAttribute('nat64_eif_match');
  }
  public set nat64EifMatch(value: number) {
    this._nat64EifMatch = value;
  }
  public resetNat64EifMatch() {
    this._nat64EifMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64EifMatchInput() {
    return this._nat64EifMatch;
  }

  // nat64_eim_match - computed: false, optional: true, required: false
  private _nat64EimMatch?: number; 
  public get nat64EimMatch() {
    return this.getNumberAttribute('nat64_eim_match');
  }
  public set nat64EimMatch(value: number) {
    this._nat64EimMatch = value;
  }
  public resetNat64EimMatch() {
    this._nat64EimMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64EimMatchInput() {
    return this._nat64EimMatch;
  }

  // nat64_hairpin - computed: false, optional: true, required: false
  private _nat64Hairpin?: number; 
  public get nat64Hairpin() {
    return this.getNumberAttribute('nat64_hairpin');
  }
  public set nat64Hairpin(value: number) {
    this._nat64Hairpin = value;
  }
  public resetNat64Hairpin() {
    this._nat64Hairpin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64HairpinInput() {
    return this._nat64Hairpin;
  }

  // nat64_inbound_filtered - computed: false, optional: true, required: false
  private _nat64InboundFiltered?: number; 
  public get nat64InboundFiltered() {
    return this.getNumberAttribute('nat64_inbound_filtered');
  }
  public set nat64InboundFiltered(value: number) {
    this._nat64InboundFiltered = value;
  }
  public resetNat64InboundFiltered() {
    this._nat64InboundFiltered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64InboundFilteredInput() {
    return this._nat64InboundFiltered;
  }

  // nat64_tcp_fullcone_created - computed: false, optional: true, required: false
  private _nat64TcpFullconeCreated?: number; 
  public get nat64TcpFullconeCreated() {
    return this.getNumberAttribute('nat64_tcp_fullcone_created');
  }
  public set nat64TcpFullconeCreated(value: number) {
    this._nat64TcpFullconeCreated = value;
  }
  public resetNat64TcpFullconeCreated() {
    this._nat64TcpFullconeCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64TcpFullconeCreatedInput() {
    return this._nat64TcpFullconeCreated;
  }

  // nat64_tcp_fullcone_freed - computed: false, optional: true, required: false
  private _nat64TcpFullconeFreed?: number; 
  public get nat64TcpFullconeFreed() {
    return this.getNumberAttribute('nat64_tcp_fullcone_freed');
  }
  public set nat64TcpFullconeFreed(value: number) {
    this._nat64TcpFullconeFreed = value;
  }
  public resetNat64TcpFullconeFreed() {
    this._nat64TcpFullconeFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64TcpFullconeFreedInput() {
    return this._nat64TcpFullconeFreed;
  }

  // nat64_udp_alg_fullcone_created - computed: false, optional: true, required: false
  private _nat64UdpAlgFullconeCreated?: number; 
  public get nat64UdpAlgFullconeCreated() {
    return this.getNumberAttribute('nat64_udp_alg_fullcone_created');
  }
  public set nat64UdpAlgFullconeCreated(value: number) {
    this._nat64UdpAlgFullconeCreated = value;
  }
  public resetNat64UdpAlgFullconeCreated() {
    this._nat64UdpAlgFullconeCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64UdpAlgFullconeCreatedInput() {
    return this._nat64UdpAlgFullconeCreated;
  }

  // nat64_udp_alg_fullcone_freed - computed: false, optional: true, required: false
  private _nat64UdpAlgFullconeFreed?: number; 
  public get nat64UdpAlgFullconeFreed() {
    return this.getNumberAttribute('nat64_udp_alg_fullcone_freed');
  }
  public set nat64UdpAlgFullconeFreed(value: number) {
    this._nat64UdpAlgFullconeFreed = value;
  }
  public resetNat64UdpAlgFullconeFreed() {
    this._nat64UdpAlgFullconeFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64UdpAlgFullconeFreedInput() {
    return this._nat64UdpAlgFullconeFreed;
  }

  // nat64_udp_fullcone_created - computed: false, optional: true, required: false
  private _nat64UdpFullconeCreated?: number; 
  public get nat64UdpFullconeCreated() {
    return this.getNumberAttribute('nat64_udp_fullcone_created');
  }
  public set nat64UdpFullconeCreated(value: number) {
    this._nat64UdpFullconeCreated = value;
  }
  public resetNat64UdpFullconeCreated() {
    this._nat64UdpFullconeCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64UdpFullconeCreatedInput() {
    return this._nat64UdpFullconeCreated;
  }

  // nat64_udp_fullcone_freed - computed: false, optional: true, required: false
  private _nat64UdpFullconeFreed?: number; 
  public get nat64UdpFullconeFreed() {
    return this.getNumberAttribute('nat64_udp_fullcone_freed');
  }
  public set nat64UdpFullconeFreed(value: number) {
    this._nat64UdpFullconeFreed = value;
  }
  public resetNat64UdpFullconeFreed() {
    this._nat64UdpFullconeFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64UdpFullconeFreedInput() {
    return this._nat64UdpFullconeFreed;
  }

  // nat_port_unavailable_icmp - computed: false, optional: true, required: false
  private _natPortUnavailableIcmp?: number; 
  public get natPortUnavailableIcmp() {
    return this.getNumberAttribute('nat_port_unavailable_icmp');
  }
  public set natPortUnavailableIcmp(value: number) {
    this._natPortUnavailableIcmp = value;
  }
  public resetNatPortUnavailableIcmp() {
    this._natPortUnavailableIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPortUnavailableIcmpInput() {
    return this._natPortUnavailableIcmp;
  }

  // nat_port_unavailable_tcp - computed: false, optional: true, required: false
  private _natPortUnavailableTcp?: number; 
  public get natPortUnavailableTcp() {
    return this.getNumberAttribute('nat_port_unavailable_tcp');
  }
  public set natPortUnavailableTcp(value: number) {
    this._natPortUnavailableTcp = value;
  }
  public resetNatPortUnavailableTcp() {
    this._natPortUnavailableTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPortUnavailableTcpInput() {
    return this._natPortUnavailableTcp;
  }

  // nat_port_unavailable_udp - computed: false, optional: true, required: false
  private _natPortUnavailableUdp?: number; 
  public get natPortUnavailableUdp() {
    return this.getNumberAttribute('nat_port_unavailable_udp');
  }
  public set natPortUnavailableUdp(value: number) {
    this._natPortUnavailableUdp = value;
  }
  public resetNatPortUnavailableUdp() {
    this._natPortUnavailableUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPortUnavailableUdpInput() {
    return this._natPortUnavailableUdp;
  }

  // port_overload_failed - computed: false, optional: true, required: false
  private _portOverloadFailed?: number; 
  public get portOverloadFailed() {
    return this.getNumberAttribute('port_overload_failed');
  }
  public set portOverloadFailed(value: number) {
    this._portOverloadFailed = value;
  }
  public resetPortOverloadFailed() {
    this._portOverloadFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOverloadFailedInput() {
    return this._portOverloadFailed;
  }

  // port_overload_smp_delete_scheduled - computed: false, optional: true, required: false
  private _portOverloadSmpDeleteScheduled?: number; 
  public get portOverloadSmpDeleteScheduled() {
    return this.getNumberAttribute('port_overload_smp_delete_scheduled');
  }
  public set portOverloadSmpDeleteScheduled(value: number) {
    this._portOverloadSmpDeleteScheduled = value;
  }
  public resetPortOverloadSmpDeleteScheduled() {
    this._portOverloadSmpDeleteScheduled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOverloadSmpDeleteScheduledInput() {
    return this._portOverloadSmpDeleteScheduled;
  }

  // session_user_quota_exceeded - computed: false, optional: true, required: false
  private _sessionUserQuotaExceeded?: number; 
  public get sessionUserQuotaExceeded() {
    return this.getNumberAttribute('session_user_quota_exceeded');
  }
  public set sessionUserQuotaExceeded(value: number) {
    this._sessionUserQuotaExceeded = value;
  }
  public resetSessionUserQuotaExceeded() {
    this._sessionUserQuotaExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionUserQuotaExceededInput() {
    return this._sessionUserQuotaExceeded;
  }

  // sixrd_drop - computed: false, optional: true, required: false
  private _sixrdDrop?: number; 
  public get sixrdDrop() {
    return this.getNumberAttribute('sixrd_drop');
  }
  public set sixrdDrop(value: number) {
    this._sixrdDrop = value;
  }
  public resetSixrdDrop() {
    this._sixrdDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sixrdDropInput() {
    return this._sixrdDrop;
  }

  // standby_drop - computed: false, optional: true, required: false
  private _standbyDrop?: number; 
  public get standbyDrop() {
    return this.getNumberAttribute('standby_drop');
  }
  public set standbyDrop(value: number) {
    this._standbyDrop = value;
  }
  public resetStandbyDrop() {
    this._standbyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyDropInput() {
    return this._standbyDrop;
  }

  // total_icmp_allocated - computed: false, optional: true, required: false
  private _totalIcmpAllocated?: number; 
  public get totalIcmpAllocated() {
    return this.getNumberAttribute('total_icmp_allocated');
  }
  public set totalIcmpAllocated(value: number) {
    this._totalIcmpAllocated = value;
  }
  public resetTotalIcmpAllocated() {
    this._totalIcmpAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalIcmpAllocatedInput() {
    return this._totalIcmpAllocated;
  }

  // total_icmp_freed - computed: false, optional: true, required: false
  private _totalIcmpFreed?: number; 
  public get totalIcmpFreed() {
    return this.getNumberAttribute('total_icmp_freed');
  }
  public set totalIcmpFreed(value: number) {
    this._totalIcmpFreed = value;
  }
  public resetTotalIcmpFreed() {
    this._totalIcmpFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalIcmpFreedInput() {
    return this._totalIcmpFreed;
  }

  // total_nat_in_use - computed: false, optional: true, required: false
  private _totalNatInUse?: number; 
  public get totalNatInUse() {
    return this.getNumberAttribute('total_nat_in_use');
  }
  public set totalNatInUse(value: number) {
    this._totalNatInUse = value;
  }
  public resetTotalNatInUse() {
    this._totalNatInUse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalNatInUseInput() {
    return this._totalNatInUse;
  }

  // total_tcp_alloc_overload - computed: false, optional: true, required: false
  private _totalTcpAllocOverload?: number; 
  public get totalTcpAllocOverload() {
    return this.getNumberAttribute('total_tcp_alloc_overload');
  }
  public set totalTcpAllocOverload(value: number) {
    this._totalTcpAllocOverload = value;
  }
  public resetTotalTcpAllocOverload() {
    this._totalTcpAllocOverload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalTcpAllocOverloadInput() {
    return this._totalTcpAllocOverload;
  }

  // total_tcp_allocated - computed: false, optional: true, required: false
  private _totalTcpAllocated?: number; 
  public get totalTcpAllocated() {
    return this.getNumberAttribute('total_tcp_allocated');
  }
  public set totalTcpAllocated(value: number) {
    this._totalTcpAllocated = value;
  }
  public resetTotalTcpAllocated() {
    this._totalTcpAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalTcpAllocatedInput() {
    return this._totalTcpAllocated;
  }

  // total_tcp_free_overload - computed: false, optional: true, required: false
  private _totalTcpFreeOverload?: number; 
  public get totalTcpFreeOverload() {
    return this.getNumberAttribute('total_tcp_free_overload');
  }
  public set totalTcpFreeOverload(value: number) {
    this._totalTcpFreeOverload = value;
  }
  public resetTotalTcpFreeOverload() {
    this._totalTcpFreeOverload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalTcpFreeOverloadInput() {
    return this._totalTcpFreeOverload;
  }

  // total_tcp_freed - computed: false, optional: true, required: false
  private _totalTcpFreed?: number; 
  public get totalTcpFreed() {
    return this.getNumberAttribute('total_tcp_freed');
  }
  public set totalTcpFreed(value: number) {
    this._totalTcpFreed = value;
  }
  public resetTotalTcpFreed() {
    this._totalTcpFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalTcpFreedInput() {
    return this._totalTcpFreed;
  }

  // total_tcp_overload_acquired - computed: false, optional: true, required: false
  private _totalTcpOverloadAcquired?: number; 
  public get totalTcpOverloadAcquired() {
    return this.getNumberAttribute('total_tcp_overload_acquired');
  }
  public set totalTcpOverloadAcquired(value: number) {
    this._totalTcpOverloadAcquired = value;
  }
  public resetTotalTcpOverloadAcquired() {
    this._totalTcpOverloadAcquired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalTcpOverloadAcquiredInput() {
    return this._totalTcpOverloadAcquired;
  }

  // total_tcp_overload_released - computed: false, optional: true, required: false
  private _totalTcpOverloadReleased?: number; 
  public get totalTcpOverloadReleased() {
    return this.getNumberAttribute('total_tcp_overload_released');
  }
  public set totalTcpOverloadReleased(value: number) {
    this._totalTcpOverloadReleased = value;
  }
  public resetTotalTcpOverloadReleased() {
    this._totalTcpOverloadReleased = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalTcpOverloadReleasedInput() {
    return this._totalTcpOverloadReleased;
  }

  // total_udp_alloc_overload - computed: false, optional: true, required: false
  private _totalUdpAllocOverload?: number; 
  public get totalUdpAllocOverload() {
    return this.getNumberAttribute('total_udp_alloc_overload');
  }
  public set totalUdpAllocOverload(value: number) {
    this._totalUdpAllocOverload = value;
  }
  public resetTotalUdpAllocOverload() {
    this._totalUdpAllocOverload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalUdpAllocOverloadInput() {
    return this._totalUdpAllocOverload;
  }

  // total_udp_allocated - computed: false, optional: true, required: false
  private _totalUdpAllocated?: number; 
  public get totalUdpAllocated() {
    return this.getNumberAttribute('total_udp_allocated');
  }
  public set totalUdpAllocated(value: number) {
    this._totalUdpAllocated = value;
  }
  public resetTotalUdpAllocated() {
    this._totalUdpAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalUdpAllocatedInput() {
    return this._totalUdpAllocated;
  }

  // total_udp_free_overload - computed: false, optional: true, required: false
  private _totalUdpFreeOverload?: number; 
  public get totalUdpFreeOverload() {
    return this.getNumberAttribute('total_udp_free_overload');
  }
  public set totalUdpFreeOverload(value: number) {
    this._totalUdpFreeOverload = value;
  }
  public resetTotalUdpFreeOverload() {
    this._totalUdpFreeOverload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalUdpFreeOverloadInput() {
    return this._totalUdpFreeOverload;
  }

  // total_udp_freed - computed: false, optional: true, required: false
  private _totalUdpFreed?: number; 
  public get totalUdpFreed() {
    return this.getNumberAttribute('total_udp_freed');
  }
  public set totalUdpFreed(value: number) {
    this._totalUdpFreed = value;
  }
  public resetTotalUdpFreed() {
    this._totalUdpFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalUdpFreedInput() {
    return this._totalUdpFreed;
  }

  // total_udp_overload_acquired - computed: false, optional: true, required: false
  private _totalUdpOverloadAcquired?: number; 
  public get totalUdpOverloadAcquired() {
    return this.getNumberAttribute('total_udp_overload_acquired');
  }
  public set totalUdpOverloadAcquired(value: number) {
    this._totalUdpOverloadAcquired = value;
  }
  public resetTotalUdpOverloadAcquired() {
    this._totalUdpOverloadAcquired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalUdpOverloadAcquiredInput() {
    return this._totalUdpOverloadAcquired;
  }

  // total_udp_overload_released - computed: false, optional: true, required: false
  private _totalUdpOverloadReleased?: number; 
  public get totalUdpOverloadReleased() {
    return this.getNumberAttribute('total_udp_overload_released');
  }
  public set totalUdpOverloadReleased(value: number) {
    this._totalUdpOverloadReleased = value;
  }
  public resetTotalUdpOverloadReleased() {
    this._totalUdpOverloadReleased = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalUdpOverloadReleasedInput() {
    return this._totalUdpOverloadReleased;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats thunder_cgnv6_fixed_nat_global_stats}
*/
export class DataThunderCgnv6FixedNatGlobalStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_fixed_nat_global_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6FixedNatGlobalStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6FixedNatGlobalStats to import
  * @param importFromId The id of the existing DataThunderCgnv6FixedNatGlobalStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6FixedNatGlobalStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_fixed_nat_global_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_fixed_nat_global_stats thunder_cgnv6_fixed_nat_global_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6FixedNatGlobalStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6FixedNatGlobalStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_fixed_nat_global_stats',
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
  private _stats = new DataThunderCgnv6FixedNatGlobalStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6FixedNatGlobalStatsStats) {
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
      stats: dataThunderCgnv6FixedNatGlobalStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderCgnv6FixedNatGlobalStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6FixedNatGlobalStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
