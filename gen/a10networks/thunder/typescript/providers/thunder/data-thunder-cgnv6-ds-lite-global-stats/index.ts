// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6DsLiteGlobalStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#id DataThunderCgnv6DsLiteGlobalStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#stats DataThunderCgnv6DsLiteGlobalStats#stats}
  */
  readonly stats?: DataThunderCgnv6DsLiteGlobalStatsStats;
}
export interface DataThunderCgnv6DsLiteGlobalStatsStats {
  /**
  * Permit Class-List Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#class_list_permit_drop DataThunderCgnv6DsLiteGlobalStats#class_list_permit_drop}
  */
  readonly classListPermitDrop?: number;
  /**
  * Conn Rate User-Quota Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#data_sesn_rate_user_quota_exceeded DataThunderCgnv6DsLiteGlobalStats#data_sesn_rate_user_quota_exceeded}
  */
  readonly dataSesnRateUserQuotaExceeded?: number;
  /**
  * Data Session User-Quota Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#data_sesn_user_quota_exceeded DataThunderCgnv6DsLiteGlobalStats#data_sesn_user_quota_exceeded}
  */
  readonly dataSesnUserQuotaExceeded?: number;
  /**
  * Data Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#data_session_created DataThunderCgnv6DsLiteGlobalStats#data_session_created}
  */
  readonly dataSessionCreated?: number;
  /**
  * Data Session Created Standby
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#data_session_created_sby DataThunderCgnv6DsLiteGlobalStats#data_session_created_sby}
  */
  readonly dataSessionCreatedSby?: number;
  /**
  * Data Session Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#data_session_freed DataThunderCgnv6DsLiteGlobalStats#data_session_freed}
  */
  readonly dataSessionFreed?: number;
  /**
  * Data Session Freed Standby
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#data_session_freed_sby DataThunderCgnv6DsLiteGlobalStats#data_session_freed_sby}
  */
  readonly dataSessionFreedSby?: number;
  /**
  * Endpoint-Independent Filtering Inbound Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#eif_limit_exceeded DataThunderCgnv6DsLiteGlobalStats#eif_limit_exceeded}
  */
  readonly eifLimitExceeded?: number;
  /**
  * Endpoint-Independent Filtering Matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#endpoint_indep_filter_match DataThunderCgnv6DsLiteGlobalStats#endpoint_indep_filter_match}
  */
  readonly endpointIndepFilterMatch?: number;
  /**
  * Endpoint-Independent Mapping Matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#endpoint_indep_map_match DataThunderCgnv6DsLiteGlobalStats#endpoint_indep_map_match}
  */
  readonly endpointIndepMapMatch?: number;
  /**
  * Extended User-Quota Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#extended_quota_exceeded DataThunderCgnv6DsLiteGlobalStats#extended_quota_exceeded}
  */
  readonly extendedQuotaExceeded?: number;
  /**
  * Extended User-Quota Matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#extended_quota_matched DataThunderCgnv6DsLiteGlobalStats#extended_quota_matched}
  */
  readonly extendedQuotaMatched?: number;
  /**
  * Full-cone Session Creation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#fullcone_failure DataThunderCgnv6DsLiteGlobalStats#fullcone_failure}
  */
  readonly fullconeFailure?: number;
  /**
  * Self-Hairpinning Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#fullcone_self_hairpinning_drop DataThunderCgnv6DsLiteGlobalStats#fullcone_self_hairpinning_drop}
  */
  readonly fullconeSelfHairpinningDrop?: number;
  /**
  * Forward Egress Bytes ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#fwd_egress_bytes_icmp DataThunderCgnv6DsLiteGlobalStats#fwd_egress_bytes_icmp}
  */
  readonly fwdEgressBytesIcmp?: number;
  /**
  * Forward Egress Bytes OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#fwd_egress_bytes_others DataThunderCgnv6DsLiteGlobalStats#fwd_egress_bytes_others}
  */
  readonly fwdEgressBytesOthers?: number;
  /**
  * Forward Egress Bytes TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#fwd_egress_bytes_tcp DataThunderCgnv6DsLiteGlobalStats#fwd_egress_bytes_tcp}
  */
  readonly fwdEgressBytesTcp?: number;
  /**
  * Forward Egress Bytes UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#fwd_egress_bytes_udp DataThunderCgnv6DsLiteGlobalStats#fwd_egress_bytes_udp}
  */
  readonly fwdEgressBytesUdp?: number;
  /**
  * Forward Egress Packets ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#fwd_egress_packets_icmp DataThunderCgnv6DsLiteGlobalStats#fwd_egress_packets_icmp}
  */
  readonly fwdEgressPacketsIcmp?: number;
  /**
  * Forward Egress Packets OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#fwd_egress_packets_others DataThunderCgnv6DsLiteGlobalStats#fwd_egress_packets_others}
  */
  readonly fwdEgressPacketsOthers?: number;
  /**
  * Forward Egress Packets TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#fwd_egress_packets_tcp DataThunderCgnv6DsLiteGlobalStats#fwd_egress_packets_tcp}
  */
  readonly fwdEgressPacketsTcp?: number;
  /**
  * Forward Egress Packets UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#fwd_egress_packets_udp DataThunderCgnv6DsLiteGlobalStats#fwd_egress_packets_udp}
  */
  readonly fwdEgressPacketsUdp?: number;
  /**
  * Forward Egress Packet size between 0 and 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#fwd_egress_pkt_size_range1 DataThunderCgnv6DsLiteGlobalStats#fwd_egress_pkt_size_range1}
  */
  readonly fwdEgressPktSizeRange1?: number;
  /**
  * Forward Egress Packet size between 201 and 800
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#fwd_egress_pkt_size_range2 DataThunderCgnv6DsLiteGlobalStats#fwd_egress_pkt_size_range2}
  */
  readonly fwdEgressPktSizeRange2?: number;
  /**
  * Forward Egress Packet size between 801 and 1550
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#fwd_egress_pkt_size_range3 DataThunderCgnv6DsLiteGlobalStats#fwd_egress_pkt_size_range3}
  */
  readonly fwdEgressPktSizeRange3?: number;
  /**
  * Forward Egress Packet size between 1551 and 9000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#fwd_egress_pkt_size_range4 DataThunderCgnv6DsLiteGlobalStats#fwd_egress_pkt_size_range4}
  */
  readonly fwdEgressPktSizeRange4?: number;
  /**
  * Forward Ingress Bytes ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#fwd_ingress_bytes_icmp DataThunderCgnv6DsLiteGlobalStats#fwd_ingress_bytes_icmp}
  */
  readonly fwdIngressBytesIcmp?: number;
  /**
  * Forward Ingress Bytes OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#fwd_ingress_bytes_others DataThunderCgnv6DsLiteGlobalStats#fwd_ingress_bytes_others}
  */
  readonly fwdIngressBytesOthers?: number;
  /**
  * Forward Ingress Bytes TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#fwd_ingress_bytes_tcp DataThunderCgnv6DsLiteGlobalStats#fwd_ingress_bytes_tcp}
  */
  readonly fwdIngressBytesTcp?: number;
  /**
  * Forward Ingress Bytes UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#fwd_ingress_bytes_udp DataThunderCgnv6DsLiteGlobalStats#fwd_ingress_bytes_udp}
  */
  readonly fwdIngressBytesUdp?: number;
  /**
  * Forward Ingress Packets ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#fwd_ingress_packets_icmp DataThunderCgnv6DsLiteGlobalStats#fwd_ingress_packets_icmp}
  */
  readonly fwdIngressPacketsIcmp?: number;
  /**
  * Forward Ingress Packets OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#fwd_ingress_packets_others DataThunderCgnv6DsLiteGlobalStats#fwd_ingress_packets_others}
  */
  readonly fwdIngressPacketsOthers?: number;
  /**
  * Forward Ingress Packets TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#fwd_ingress_packets_tcp DataThunderCgnv6DsLiteGlobalStats#fwd_ingress_packets_tcp}
  */
  readonly fwdIngressPacketsTcp?: number;
  /**
  * Forward Ingress Packets UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#fwd_ingress_packets_udp DataThunderCgnv6DsLiteGlobalStats#fwd_ingress_packets_udp}
  */
  readonly fwdIngressPacketsUdp?: number;
  /**
  * Forward Ingress Packet size between 0 and 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#fwd_ingress_pkt_size_range1 DataThunderCgnv6DsLiteGlobalStats#fwd_ingress_pkt_size_range1}
  */
  readonly fwdIngressPktSizeRange1?: number;
  /**
  * Forward Ingress Packet size between 201 and 800
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#fwd_ingress_pkt_size_range2 DataThunderCgnv6DsLiteGlobalStats#fwd_ingress_pkt_size_range2}
  */
  readonly fwdIngressPktSizeRange2?: number;
  /**
  * Forward Ingress Packet size between 801 and 1550
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#fwd_ingress_pkt_size_range3 DataThunderCgnv6DsLiteGlobalStats#fwd_ingress_pkt_size_range3}
  */
  readonly fwdIngressPktSizeRange3?: number;
  /**
  * Forward Ingress Packet size between 1551 and 9000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#fwd_ingress_pkt_size_range4 DataThunderCgnv6DsLiteGlobalStats#fwd_ingress_pkt_size_range4}
  */
  readonly fwdIngressPktSizeRange4?: number;
  /**
  * HA NAT Pool Batch Type Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#ha_nat_pool_batch_type_mismatch DataThunderCgnv6DsLiteGlobalStats#ha_nat_pool_batch_type_mismatch}
  */
  readonly haNatPoolBatchTypeMismatch?: number;
  /**
  * HA NAT Pool Unusable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#ha_nat_pool_unusable DataThunderCgnv6DsLiteGlobalStats#ha_nat_pool_unusable}
  */
  readonly haNatPoolUnusable?: number;
  /**
  * Hairpin Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#hairpin DataThunderCgnv6DsLiteGlobalStats#hairpin}
  */
  readonly hairpin?: number;
  /**
  * ICMP User-Quota Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#icmp_user_quota_exceeded DataThunderCgnv6DsLiteGlobalStats#icmp_user_quota_exceeded}
  */
  readonly icmpUserQuotaExceeded?: number;
  /**
  * Endpoint-Dependent Filtering Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#inbound_filtered DataThunderCgnv6DsLiteGlobalStats#inbound_filtered}
  */
  readonly inboundFiltered?: number;
  /**
  * LSN LID Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#lid_drop DataThunderCgnv6DsLiteGlobalStats#lid_drop}
  */
  readonly lidDrop?: number;
  /**
  * LSN LID Pass-through
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#lid_pass_through DataThunderCgnv6DsLiteGlobalStats#lid_pass_through}
  */
  readonly lidPassThrough?: number;
  /**
  * NAT Pool Unusable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#nat_pool_unusable DataThunderCgnv6DsLiteGlobalStats#nat_pool_unusable}
  */
  readonly natPoolUnusable?: number;
  /**
  * ICMP NAT Port Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#nat_port_unavailable_icmp DataThunderCgnv6DsLiteGlobalStats#nat_port_unavailable_icmp}
  */
  readonly natPortUnavailableIcmp?: number;
  /**
  * TCP NAT Port Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#nat_port_unavailable_tcp DataThunderCgnv6DsLiteGlobalStats#nat_port_unavailable_tcp}
  */
  readonly natPortUnavailableTcp?: number;
  /**
  * UDP NAT Port Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#nat_port_unavailable_udp DataThunderCgnv6DsLiteGlobalStats#nat_port_unavailable_udp}
  */
  readonly natPortUnavailableUdp?: number;
  /**
  * New User NAT Resource Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#new_user_resource_unavailable DataThunderCgnv6DsLiteGlobalStats#new_user_resource_unavailable}
  */
  readonly newUserResourceUnavailable?: number;
  /**
  * No Class-List Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#no_class_list_match DataThunderCgnv6DsLiteGlobalStats#no_class_list_match}
  */
  readonly noClassListMatch?: number;
  /**
  * No RADIUS Profile Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#no_radius_profile_match DataThunderCgnv6DsLiteGlobalStats#no_radius_profile_match}
  */
  readonly noRadiusProfileMatch?: number;
  /**
  * TCP Port Overloading NAT Port Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#port_overloading_port_free_tcp DataThunderCgnv6DsLiteGlobalStats#port_overloading_port_free_tcp}
  */
  readonly portOverloadingPortFreeTcp?: number;
  /**
  * UDP Port Overloading NAT Port Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#port_overloading_port_free_udp DataThunderCgnv6DsLiteGlobalStats#port_overloading_port_free_udp}
  */
  readonly portOverloadingPortFreeUdp?: number;
  /**
  * Port Overloading NAT Port TCP Inserted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#port_overloading_port_tcp_inserted DataThunderCgnv6DsLiteGlobalStats#port_overloading_port_tcp_inserted}
  */
  readonly portOverloadingPortTcpInserted?: number;
  /**
  * Port Overloading NAT Port UDP Inserted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#port_overloading_port_udp_inserted DataThunderCgnv6DsLiteGlobalStats#port_overloading_port_udp_inserted}
  */
  readonly portOverloadingPortUdpInserted?: number;
  /**
  * TCP Port Overloading Session Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#port_overloading_smp_free_tcp DataThunderCgnv6DsLiteGlobalStats#port_overloading_smp_free_tcp}
  */
  readonly portOverloadingSmpFreeTcp?: number;
  /**
  * UDP Port Overloading Session Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#port_overloading_smp_free_udp DataThunderCgnv6DsLiteGlobalStats#port_overloading_smp_free_udp}
  */
  readonly portOverloadingSmpFreeUdp?: number;
  /**
  * TCP Port Overloading Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#port_overloading_smp_inserted_tcp DataThunderCgnv6DsLiteGlobalStats#port_overloading_smp_inserted_tcp}
  */
  readonly portOverloadingSmpInsertedTcp?: number;
  /**
  * UDP Port Overloading Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#port_overloading_smp_inserted_udp DataThunderCgnv6DsLiteGlobalStats#port_overloading_smp_inserted_udp}
  */
  readonly portOverloadingSmpInsertedUdp?: number;
  /**
  * Prefix Quota NAT IP Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#prefix_quota_mismatch DataThunderCgnv6DsLiteGlobalStats#prefix_quota_mismatch}
  */
  readonly prefixQuotaMismatch?: number;
  /**
  * Reverse Egress Bytes ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#rev_egress_bytes_icmp DataThunderCgnv6DsLiteGlobalStats#rev_egress_bytes_icmp}
  */
  readonly revEgressBytesIcmp?: number;
  /**
  * Reverse Egress Bytes OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#rev_egress_bytes_others DataThunderCgnv6DsLiteGlobalStats#rev_egress_bytes_others}
  */
  readonly revEgressBytesOthers?: number;
  /**
  * Reverse Egress Bytes TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#rev_egress_bytes_tcp DataThunderCgnv6DsLiteGlobalStats#rev_egress_bytes_tcp}
  */
  readonly revEgressBytesTcp?: number;
  /**
  * Reverse Egress Bytes UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#rev_egress_bytes_udp DataThunderCgnv6DsLiteGlobalStats#rev_egress_bytes_udp}
  */
  readonly revEgressBytesUdp?: number;
  /**
  * Reverse Egress Packets ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#rev_egress_packets_icmp DataThunderCgnv6DsLiteGlobalStats#rev_egress_packets_icmp}
  */
  readonly revEgressPacketsIcmp?: number;
  /**
  * Reverse Egress Packets OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#rev_egress_packets_others DataThunderCgnv6DsLiteGlobalStats#rev_egress_packets_others}
  */
  readonly revEgressPacketsOthers?: number;
  /**
  * Reverse Egress Packets TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#rev_egress_packets_tcp DataThunderCgnv6DsLiteGlobalStats#rev_egress_packets_tcp}
  */
  readonly revEgressPacketsTcp?: number;
  /**
  * Reverse Egress Packets UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#rev_egress_packets_udp DataThunderCgnv6DsLiteGlobalStats#rev_egress_packets_udp}
  */
  readonly revEgressPacketsUdp?: number;
  /**
  * Reverse Egress Packet size between 0 and 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#rev_egress_pkt_size_range1 DataThunderCgnv6DsLiteGlobalStats#rev_egress_pkt_size_range1}
  */
  readonly revEgressPktSizeRange1?: number;
  /**
  * Reverse Egress Packet size between 201 and 800
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#rev_egress_pkt_size_range2 DataThunderCgnv6DsLiteGlobalStats#rev_egress_pkt_size_range2}
  */
  readonly revEgressPktSizeRange2?: number;
  /**
  * Reverse Egress Packet size between 801 and 1550
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#rev_egress_pkt_size_range3 DataThunderCgnv6DsLiteGlobalStats#rev_egress_pkt_size_range3}
  */
  readonly revEgressPktSizeRange3?: number;
  /**
  * Reverse Egress Packet size between 1551 and 9000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#rev_egress_pkt_size_range4 DataThunderCgnv6DsLiteGlobalStats#rev_egress_pkt_size_range4}
  */
  readonly revEgressPktSizeRange4?: number;
  /**
  * Reverse Ingress Bytes ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#rev_ingress_bytes_icmp DataThunderCgnv6DsLiteGlobalStats#rev_ingress_bytes_icmp}
  */
  readonly revIngressBytesIcmp?: number;
  /**
  * Reverse Ingress Bytes OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#rev_ingress_bytes_others DataThunderCgnv6DsLiteGlobalStats#rev_ingress_bytes_others}
  */
  readonly revIngressBytesOthers?: number;
  /**
  * Reverse Ingress Bytes TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#rev_ingress_bytes_tcp DataThunderCgnv6DsLiteGlobalStats#rev_ingress_bytes_tcp}
  */
  readonly revIngressBytesTcp?: number;
  /**
  * Reverse Ingress Bytes UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#rev_ingress_bytes_udp DataThunderCgnv6DsLiteGlobalStats#rev_ingress_bytes_udp}
  */
  readonly revIngressBytesUdp?: number;
  /**
  * Reverse Ingress Packets ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#rev_ingress_packets_icmp DataThunderCgnv6DsLiteGlobalStats#rev_ingress_packets_icmp}
  */
  readonly revIngressPacketsIcmp?: number;
  /**
  * Reverse Ingress Packets OTHERS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#rev_ingress_packets_others DataThunderCgnv6DsLiteGlobalStats#rev_ingress_packets_others}
  */
  readonly revIngressPacketsOthers?: number;
  /**
  * Reverse Ingress Packets TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#rev_ingress_packets_tcp DataThunderCgnv6DsLiteGlobalStats#rev_ingress_packets_tcp}
  */
  readonly revIngressPacketsTcp?: number;
  /**
  * Reverse Ingress Packets UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#rev_ingress_packets_udp DataThunderCgnv6DsLiteGlobalStats#rev_ingress_packets_udp}
  */
  readonly revIngressPacketsUdp?: number;
  /**
  * Reverse Ingress Packet size between 0 and 200
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#rev_ingress_pkt_size_range1 DataThunderCgnv6DsLiteGlobalStats#rev_ingress_pkt_size_range1}
  */
  readonly revIngressPktSizeRange1?: number;
  /**
  * Reverse Ingress Packet size between 201 and 800
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#rev_ingress_pkt_size_range2 DataThunderCgnv6DsLiteGlobalStats#rev_ingress_pkt_size_range2}
  */
  readonly revIngressPktSizeRange2?: number;
  /**
  * Reverse Ingress Packet size between 801 and 1550
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#rev_ingress_pkt_size_range3 DataThunderCgnv6DsLiteGlobalStats#rev_ingress_pkt_size_range3}
  */
  readonly revIngressPktSizeRange3?: number;
  /**
  * Reverse Ingress Packet size between 1551 and 9000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#rev_ingress_pkt_size_range4 DataThunderCgnv6DsLiteGlobalStats#rev_ingress_pkt_size_range4}
  */
  readonly revIngressPktSizeRange4?: number;
  /**
  * TCP Full-cone Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#tcp_fullcone_created DataThunderCgnv6DsLiteGlobalStats#tcp_fullcone_created}
  */
  readonly tcpFullconeCreated?: number;
  /**
  * TCP Full-cone Session Created Standby
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#tcp_fullcone_created_sby DataThunderCgnv6DsLiteGlobalStats#tcp_fullcone_created_sby}
  */
  readonly tcpFullconeCreatedSby?: number;
  /**
  * TCP Full-cone Session Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#tcp_fullcone_freed DataThunderCgnv6DsLiteGlobalStats#tcp_fullcone_freed}
  */
  readonly tcpFullconeFreed?: number;
  /**
  * TCP Full-cone Session Freed Standby
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#tcp_fullcone_freed_sby DataThunderCgnv6DsLiteGlobalStats#tcp_fullcone_freed_sby}
  */
  readonly tcpFullconeFreedSby?: number;
  /**
  * TCP User-Quota Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#tcp_user_quota_exceeded DataThunderCgnv6DsLiteGlobalStats#tcp_user_quota_exceeded}
  */
  readonly tcpUserQuotaExceeded?: number;
  /**
  * Total ICMP Ports Allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#total_icmp_allocated DataThunderCgnv6DsLiteGlobalStats#total_icmp_allocated}
  */
  readonly totalIcmpAllocated?: number;
  /**
  * Total ICMP Ports Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#total_icmp_freed DataThunderCgnv6DsLiteGlobalStats#total_icmp_freed}
  */
  readonly totalIcmpFreed?: number;
  /**
  * Total TCP Ports Allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#total_tcp_allocated DataThunderCgnv6DsLiteGlobalStats#total_tcp_allocated}
  */
  readonly totalTcpAllocated?: number;
  /**
  * Total TCP Ports Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#total_tcp_freed DataThunderCgnv6DsLiteGlobalStats#total_tcp_freed}
  */
  readonly totalTcpFreed?: number;
  /**
  * TCP Port Overloaded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#total_tcp_overloaded DataThunderCgnv6DsLiteGlobalStats#total_tcp_overloaded}
  */
  readonly totalTcpOverloaded?: number;
  /**
  * Total UDP Ports Allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#total_udp_allocated DataThunderCgnv6DsLiteGlobalStats#total_udp_allocated}
  */
  readonly totalUdpAllocated?: number;
  /**
  * Total UDP Ports Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#total_udp_freed DataThunderCgnv6DsLiteGlobalStats#total_udp_freed}
  */
  readonly totalUdpFreed?: number;
  /**
  * UDP Port Overloaded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#total_udp_overloaded DataThunderCgnv6DsLiteGlobalStats#total_udp_overloaded}
  */
  readonly totalUdpOverloaded?: number;
  /**
  * Truncated Packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#truncated_packet DataThunderCgnv6DsLiteGlobalStats#truncated_packet}
  */
  readonly truncatedPacket?: number;
  /**
  * UDP Full-cone Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#udp_fullcone_created DataThunderCgnv6DsLiteGlobalStats#udp_fullcone_created}
  */
  readonly udpFullconeCreated?: number;
  /**
  * UDP Full-cone Session Created Standby
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#udp_fullcone_created_sby DataThunderCgnv6DsLiteGlobalStats#udp_fullcone_created_sby}
  */
  readonly udpFullconeCreatedSby?: number;
  /**
  * UDP Full-cone Session Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#udp_fullcone_freed DataThunderCgnv6DsLiteGlobalStats#udp_fullcone_freed}
  */
  readonly udpFullconeFreed?: number;
  /**
  * UDP Full-cone Session Freed Standby
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#udp_fullcone_freed_sby DataThunderCgnv6DsLiteGlobalStats#udp_fullcone_freed_sby}
  */
  readonly udpFullconeFreedSby?: number;
  /**
  * UDP User-Quota Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#udp_user_quota_exceeded DataThunderCgnv6DsLiteGlobalStats#udp_user_quota_exceeded}
  */
  readonly udpUserQuotaExceeded?: number;
  /**
  * User-Quota Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#user_quota_created DataThunderCgnv6DsLiteGlobalStats#user_quota_created}
  */
  readonly userQuotaCreated?: number;
  /**
  * User-Quota Created Standby
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#user_quota_created_sby DataThunderCgnv6DsLiteGlobalStats#user_quota_created_sby}
  */
  readonly userQuotaCreatedSby?: number;
  /**
  * User-Quota Creation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#user_quota_failure DataThunderCgnv6DsLiteGlobalStats#user_quota_failure}
  */
  readonly userQuotaFailure?: number;
  /**
  * User-Quota Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#user_quota_put_in_del_q DataThunderCgnv6DsLiteGlobalStats#user_quota_put_in_del_q}
  */
  readonly userQuotaPutInDelQ?: number;
  /**
  * User-Quota Freed Standby
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#user_quota_put_in_del_q_sby DataThunderCgnv6DsLiteGlobalStats#user_quota_put_in_del_q_sby}
  */
  readonly userQuotaPutInDelQSby?: number;
  /**
  * User-Quota Marked Unusable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#user_quota_unusable DataThunderCgnv6DsLiteGlobalStats#user_quota_unusable}
  */
  readonly userQuotaUnusable?: number;
  /**
  * User-Quota Unusable Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#user_quota_unusable_drop DataThunderCgnv6DsLiteGlobalStats#user_quota_unusable_drop}
  */
  readonly userQuotaUnusableDrop?: number;
}

export function dataThunderCgnv6DsLiteGlobalStatsStatsToTerraform(struct?: DataThunderCgnv6DsLiteGlobalStatsStatsOutputReference | DataThunderCgnv6DsLiteGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_list_permit_drop: cdktf.numberToTerraform(struct!.classListPermitDrop),
    data_sesn_rate_user_quota_exceeded: cdktf.numberToTerraform(struct!.dataSesnRateUserQuotaExceeded),
    data_sesn_user_quota_exceeded: cdktf.numberToTerraform(struct!.dataSesnUserQuotaExceeded),
    data_session_created: cdktf.numberToTerraform(struct!.dataSessionCreated),
    data_session_created_sby: cdktf.numberToTerraform(struct!.dataSessionCreatedSby),
    data_session_freed: cdktf.numberToTerraform(struct!.dataSessionFreed),
    data_session_freed_sby: cdktf.numberToTerraform(struct!.dataSessionFreedSby),
    eif_limit_exceeded: cdktf.numberToTerraform(struct!.eifLimitExceeded),
    endpoint_indep_filter_match: cdktf.numberToTerraform(struct!.endpointIndepFilterMatch),
    endpoint_indep_map_match: cdktf.numberToTerraform(struct!.endpointIndepMapMatch),
    extended_quota_exceeded: cdktf.numberToTerraform(struct!.extendedQuotaExceeded),
    extended_quota_matched: cdktf.numberToTerraform(struct!.extendedQuotaMatched),
    fullcone_failure: cdktf.numberToTerraform(struct!.fullconeFailure),
    fullcone_self_hairpinning_drop: cdktf.numberToTerraform(struct!.fullconeSelfHairpinningDrop),
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
    ha_nat_pool_batch_type_mismatch: cdktf.numberToTerraform(struct!.haNatPoolBatchTypeMismatch),
    ha_nat_pool_unusable: cdktf.numberToTerraform(struct!.haNatPoolUnusable),
    hairpin: cdktf.numberToTerraform(struct!.hairpin),
    icmp_user_quota_exceeded: cdktf.numberToTerraform(struct!.icmpUserQuotaExceeded),
    inbound_filtered: cdktf.numberToTerraform(struct!.inboundFiltered),
    lid_drop: cdktf.numberToTerraform(struct!.lidDrop),
    lid_pass_through: cdktf.numberToTerraform(struct!.lidPassThrough),
    nat_pool_unusable: cdktf.numberToTerraform(struct!.natPoolUnusable),
    nat_port_unavailable_icmp: cdktf.numberToTerraform(struct!.natPortUnavailableIcmp),
    nat_port_unavailable_tcp: cdktf.numberToTerraform(struct!.natPortUnavailableTcp),
    nat_port_unavailable_udp: cdktf.numberToTerraform(struct!.natPortUnavailableUdp),
    new_user_resource_unavailable: cdktf.numberToTerraform(struct!.newUserResourceUnavailable),
    no_class_list_match: cdktf.numberToTerraform(struct!.noClassListMatch),
    no_radius_profile_match: cdktf.numberToTerraform(struct!.noRadiusProfileMatch),
    port_overloading_port_free_tcp: cdktf.numberToTerraform(struct!.portOverloadingPortFreeTcp),
    port_overloading_port_free_udp: cdktf.numberToTerraform(struct!.portOverloadingPortFreeUdp),
    port_overloading_port_tcp_inserted: cdktf.numberToTerraform(struct!.portOverloadingPortTcpInserted),
    port_overloading_port_udp_inserted: cdktf.numberToTerraform(struct!.portOverloadingPortUdpInserted),
    port_overloading_smp_free_tcp: cdktf.numberToTerraform(struct!.portOverloadingSmpFreeTcp),
    port_overloading_smp_free_udp: cdktf.numberToTerraform(struct!.portOverloadingSmpFreeUdp),
    port_overloading_smp_inserted_tcp: cdktf.numberToTerraform(struct!.portOverloadingSmpInsertedTcp),
    port_overloading_smp_inserted_udp: cdktf.numberToTerraform(struct!.portOverloadingSmpInsertedUdp),
    prefix_quota_mismatch: cdktf.numberToTerraform(struct!.prefixQuotaMismatch),
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
    tcp_fullcone_created_sby: cdktf.numberToTerraform(struct!.tcpFullconeCreatedSby),
    tcp_fullcone_freed: cdktf.numberToTerraform(struct!.tcpFullconeFreed),
    tcp_fullcone_freed_sby: cdktf.numberToTerraform(struct!.tcpFullconeFreedSby),
    tcp_user_quota_exceeded: cdktf.numberToTerraform(struct!.tcpUserQuotaExceeded),
    total_icmp_allocated: cdktf.numberToTerraform(struct!.totalIcmpAllocated),
    total_icmp_freed: cdktf.numberToTerraform(struct!.totalIcmpFreed),
    total_tcp_allocated: cdktf.numberToTerraform(struct!.totalTcpAllocated),
    total_tcp_freed: cdktf.numberToTerraform(struct!.totalTcpFreed),
    total_tcp_overloaded: cdktf.numberToTerraform(struct!.totalTcpOverloaded),
    total_udp_allocated: cdktf.numberToTerraform(struct!.totalUdpAllocated),
    total_udp_freed: cdktf.numberToTerraform(struct!.totalUdpFreed),
    total_udp_overloaded: cdktf.numberToTerraform(struct!.totalUdpOverloaded),
    truncated_packet: cdktf.numberToTerraform(struct!.truncatedPacket),
    udp_fullcone_created: cdktf.numberToTerraform(struct!.udpFullconeCreated),
    udp_fullcone_created_sby: cdktf.numberToTerraform(struct!.udpFullconeCreatedSby),
    udp_fullcone_freed: cdktf.numberToTerraform(struct!.udpFullconeFreed),
    udp_fullcone_freed_sby: cdktf.numberToTerraform(struct!.udpFullconeFreedSby),
    udp_user_quota_exceeded: cdktf.numberToTerraform(struct!.udpUserQuotaExceeded),
    user_quota_created: cdktf.numberToTerraform(struct!.userQuotaCreated),
    user_quota_created_sby: cdktf.numberToTerraform(struct!.userQuotaCreatedSby),
    user_quota_failure: cdktf.numberToTerraform(struct!.userQuotaFailure),
    user_quota_put_in_del_q: cdktf.numberToTerraform(struct!.userQuotaPutInDelQ),
    user_quota_put_in_del_q_sby: cdktf.numberToTerraform(struct!.userQuotaPutInDelQSby),
    user_quota_unusable: cdktf.numberToTerraform(struct!.userQuotaUnusable),
    user_quota_unusable_drop: cdktf.numberToTerraform(struct!.userQuotaUnusableDrop),
  }
}


export function dataThunderCgnv6DsLiteGlobalStatsStatsToHclTerraform(struct?: DataThunderCgnv6DsLiteGlobalStatsStatsOutputReference | DataThunderCgnv6DsLiteGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_list_permit_drop: {
      value: cdktf.numberToHclTerraform(struct!.classListPermitDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_sesn_rate_user_quota_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.dataSesnRateUserQuotaExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_sesn_user_quota_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.dataSesnUserQuotaExceeded),
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
    data_session_created_sby: {
      value: cdktf.numberToHclTerraform(struct!.dataSessionCreatedSby),
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
    data_session_freed_sby: {
      value: cdktf.numberToHclTerraform(struct!.dataSessionFreedSby),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eif_limit_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.eifLimitExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    endpoint_indep_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.endpointIndepFilterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    endpoint_indep_map_match: {
      value: cdktf.numberToHclTerraform(struct!.endpointIndepMapMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extended_quota_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.extendedQuotaExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extended_quota_matched: {
      value: cdktf.numberToHclTerraform(struct!.extendedQuotaMatched),
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
    fullcone_self_hairpinning_drop: {
      value: cdktf.numberToHclTerraform(struct!.fullconeSelfHairpinningDrop),
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
    ha_nat_pool_batch_type_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.haNatPoolBatchTypeMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_nat_pool_unusable: {
      value: cdktf.numberToHclTerraform(struct!.haNatPoolUnusable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hairpin: {
      value: cdktf.numberToHclTerraform(struct!.hairpin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_user_quota_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.icmpUserQuotaExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound_filtered: {
      value: cdktf.numberToHclTerraform(struct!.inboundFiltered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lid_drop: {
      value: cdktf.numberToHclTerraform(struct!.lidDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lid_pass_through: {
      value: cdktf.numberToHclTerraform(struct!.lidPassThrough),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_pool_unusable: {
      value: cdktf.numberToHclTerraform(struct!.natPoolUnusable),
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
    new_user_resource_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.newUserResourceUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_class_list_match: {
      value: cdktf.numberToHclTerraform(struct!.noClassListMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_radius_profile_match: {
      value: cdktf.numberToHclTerraform(struct!.noRadiusProfileMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_overloading_port_free_tcp: {
      value: cdktf.numberToHclTerraform(struct!.portOverloadingPortFreeTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_overloading_port_free_udp: {
      value: cdktf.numberToHclTerraform(struct!.portOverloadingPortFreeUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_overloading_port_tcp_inserted: {
      value: cdktf.numberToHclTerraform(struct!.portOverloadingPortTcpInserted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_overloading_port_udp_inserted: {
      value: cdktf.numberToHclTerraform(struct!.portOverloadingPortUdpInserted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_overloading_smp_free_tcp: {
      value: cdktf.numberToHclTerraform(struct!.portOverloadingSmpFreeTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_overloading_smp_free_udp: {
      value: cdktf.numberToHclTerraform(struct!.portOverloadingSmpFreeUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_overloading_smp_inserted_tcp: {
      value: cdktf.numberToHclTerraform(struct!.portOverloadingSmpInsertedTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_overloading_smp_inserted_udp: {
      value: cdktf.numberToHclTerraform(struct!.portOverloadingSmpInsertedUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_quota_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.prefixQuotaMismatch),
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
    tcp_fullcone_created_sby: {
      value: cdktf.numberToHclTerraform(struct!.tcpFullconeCreatedSby),
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
    tcp_fullcone_freed_sby: {
      value: cdktf.numberToHclTerraform(struct!.tcpFullconeFreedSby),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_user_quota_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.tcpUserQuotaExceeded),
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
    total_tcp_allocated: {
      value: cdktf.numberToHclTerraform(struct!.totalTcpAllocated),
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
    total_tcp_overloaded: {
      value: cdktf.numberToHclTerraform(struct!.totalTcpOverloaded),
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
    total_udp_freed: {
      value: cdktf.numberToHclTerraform(struct!.totalUdpFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_udp_overloaded: {
      value: cdktf.numberToHclTerraform(struct!.totalUdpOverloaded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    truncated_packet: {
      value: cdktf.numberToHclTerraform(struct!.truncatedPacket),
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
    udp_fullcone_created_sby: {
      value: cdktf.numberToHclTerraform(struct!.udpFullconeCreatedSby),
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
    udp_fullcone_freed_sby: {
      value: cdktf.numberToHclTerraform(struct!.udpFullconeFreedSby),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_user_quota_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.udpUserQuotaExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_quota_created: {
      value: cdktf.numberToHclTerraform(struct!.userQuotaCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_quota_created_sby: {
      value: cdktf.numberToHclTerraform(struct!.userQuotaCreatedSby),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_quota_failure: {
      value: cdktf.numberToHclTerraform(struct!.userQuotaFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_quota_put_in_del_q: {
      value: cdktf.numberToHclTerraform(struct!.userQuotaPutInDelQ),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_quota_put_in_del_q_sby: {
      value: cdktf.numberToHclTerraform(struct!.userQuotaPutInDelQSby),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_quota_unusable: {
      value: cdktf.numberToHclTerraform(struct!.userQuotaUnusable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_quota_unusable_drop: {
      value: cdktf.numberToHclTerraform(struct!.userQuotaUnusableDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6DsLiteGlobalStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6DsLiteGlobalStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classListPermitDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListPermitDrop = this._classListPermitDrop;
    }
    if (this._dataSesnRateUserQuotaExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSesnRateUserQuotaExceeded = this._dataSesnRateUserQuotaExceeded;
    }
    if (this._dataSesnUserQuotaExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSesnUserQuotaExceeded = this._dataSesnUserQuotaExceeded;
    }
    if (this._dataSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSessionCreated = this._dataSessionCreated;
    }
    if (this._dataSessionCreatedSby !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSessionCreatedSby = this._dataSessionCreatedSby;
    }
    if (this._dataSessionFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSessionFreed = this._dataSessionFreed;
    }
    if (this._dataSessionFreedSby !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSessionFreedSby = this._dataSessionFreedSby;
    }
    if (this._eifLimitExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.eifLimitExceeded = this._eifLimitExceeded;
    }
    if (this._endpointIndepFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointIndepFilterMatch = this._endpointIndepFilterMatch;
    }
    if (this._endpointIndepMapMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointIndepMapMatch = this._endpointIndepMapMatch;
    }
    if (this._extendedQuotaExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedQuotaExceeded = this._extendedQuotaExceeded;
    }
    if (this._extendedQuotaMatched !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedQuotaMatched = this._extendedQuotaMatched;
    }
    if (this._fullconeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullconeFailure = this._fullconeFailure;
    }
    if (this._fullconeSelfHairpinningDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullconeSelfHairpinningDrop = this._fullconeSelfHairpinningDrop;
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
    if (this._haNatPoolBatchTypeMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.haNatPoolBatchTypeMismatch = this._haNatPoolBatchTypeMismatch;
    }
    if (this._haNatPoolUnusable !== undefined) {
      hasAnyValues = true;
      internalValueResult.haNatPoolUnusable = this._haNatPoolUnusable;
    }
    if (this._hairpin !== undefined) {
      hasAnyValues = true;
      internalValueResult.hairpin = this._hairpin;
    }
    if (this._icmpUserQuotaExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpUserQuotaExceeded = this._icmpUserQuotaExceeded;
    }
    if (this._inboundFiltered !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundFiltered = this._inboundFiltered;
    }
    if (this._lidDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidDrop = this._lidDrop;
    }
    if (this._lidPassThrough !== undefined) {
      hasAnyValues = true;
      internalValueResult.lidPassThrough = this._lidPassThrough;
    }
    if (this._natPoolUnusable !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolUnusable = this._natPoolUnusable;
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
    if (this._newUserResourceUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.newUserResourceUnavailable = this._newUserResourceUnavailable;
    }
    if (this._noClassListMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.noClassListMatch = this._noClassListMatch;
    }
    if (this._noRadiusProfileMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRadiusProfileMatch = this._noRadiusProfileMatch;
    }
    if (this._portOverloadingPortFreeTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.portOverloadingPortFreeTcp = this._portOverloadingPortFreeTcp;
    }
    if (this._portOverloadingPortFreeUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.portOverloadingPortFreeUdp = this._portOverloadingPortFreeUdp;
    }
    if (this._portOverloadingPortTcpInserted !== undefined) {
      hasAnyValues = true;
      internalValueResult.portOverloadingPortTcpInserted = this._portOverloadingPortTcpInserted;
    }
    if (this._portOverloadingPortUdpInserted !== undefined) {
      hasAnyValues = true;
      internalValueResult.portOverloadingPortUdpInserted = this._portOverloadingPortUdpInserted;
    }
    if (this._portOverloadingSmpFreeTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.portOverloadingSmpFreeTcp = this._portOverloadingSmpFreeTcp;
    }
    if (this._portOverloadingSmpFreeUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.portOverloadingSmpFreeUdp = this._portOverloadingSmpFreeUdp;
    }
    if (this._portOverloadingSmpInsertedTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.portOverloadingSmpInsertedTcp = this._portOverloadingSmpInsertedTcp;
    }
    if (this._portOverloadingSmpInsertedUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.portOverloadingSmpInsertedUdp = this._portOverloadingSmpInsertedUdp;
    }
    if (this._prefixQuotaMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixQuotaMismatch = this._prefixQuotaMismatch;
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
    if (this._tcpFullconeCreatedSby !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFullconeCreatedSby = this._tcpFullconeCreatedSby;
    }
    if (this._tcpFullconeFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFullconeFreed = this._tcpFullconeFreed;
    }
    if (this._tcpFullconeFreedSby !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFullconeFreedSby = this._tcpFullconeFreedSby;
    }
    if (this._tcpUserQuotaExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpUserQuotaExceeded = this._tcpUserQuotaExceeded;
    }
    if (this._totalIcmpAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalIcmpAllocated = this._totalIcmpAllocated;
    }
    if (this._totalIcmpFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalIcmpFreed = this._totalIcmpFreed;
    }
    if (this._totalTcpAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalTcpAllocated = this._totalTcpAllocated;
    }
    if (this._totalTcpFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalTcpFreed = this._totalTcpFreed;
    }
    if (this._totalTcpOverloaded !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalTcpOverloaded = this._totalTcpOverloaded;
    }
    if (this._totalUdpAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalUdpAllocated = this._totalUdpAllocated;
    }
    if (this._totalUdpFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalUdpFreed = this._totalUdpFreed;
    }
    if (this._totalUdpOverloaded !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalUdpOverloaded = this._totalUdpOverloaded;
    }
    if (this._truncatedPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.truncatedPacket = this._truncatedPacket;
    }
    if (this._udpFullconeCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFullconeCreated = this._udpFullconeCreated;
    }
    if (this._udpFullconeCreatedSby !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFullconeCreatedSby = this._udpFullconeCreatedSby;
    }
    if (this._udpFullconeFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFullconeFreed = this._udpFullconeFreed;
    }
    if (this._udpFullconeFreedSby !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpFullconeFreedSby = this._udpFullconeFreedSby;
    }
    if (this._udpUserQuotaExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpUserQuotaExceeded = this._udpUserQuotaExceeded;
    }
    if (this._userQuotaCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.userQuotaCreated = this._userQuotaCreated;
    }
    if (this._userQuotaCreatedSby !== undefined) {
      hasAnyValues = true;
      internalValueResult.userQuotaCreatedSby = this._userQuotaCreatedSby;
    }
    if (this._userQuotaFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.userQuotaFailure = this._userQuotaFailure;
    }
    if (this._userQuotaPutInDelQ !== undefined) {
      hasAnyValues = true;
      internalValueResult.userQuotaPutInDelQ = this._userQuotaPutInDelQ;
    }
    if (this._userQuotaPutInDelQSby !== undefined) {
      hasAnyValues = true;
      internalValueResult.userQuotaPutInDelQSby = this._userQuotaPutInDelQSby;
    }
    if (this._userQuotaUnusable !== undefined) {
      hasAnyValues = true;
      internalValueResult.userQuotaUnusable = this._userQuotaUnusable;
    }
    if (this._userQuotaUnusableDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.userQuotaUnusableDrop = this._userQuotaUnusableDrop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6DsLiteGlobalStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._classListPermitDrop = undefined;
      this._dataSesnRateUserQuotaExceeded = undefined;
      this._dataSesnUserQuotaExceeded = undefined;
      this._dataSessionCreated = undefined;
      this._dataSessionCreatedSby = undefined;
      this._dataSessionFreed = undefined;
      this._dataSessionFreedSby = undefined;
      this._eifLimitExceeded = undefined;
      this._endpointIndepFilterMatch = undefined;
      this._endpointIndepMapMatch = undefined;
      this._extendedQuotaExceeded = undefined;
      this._extendedQuotaMatched = undefined;
      this._fullconeFailure = undefined;
      this._fullconeSelfHairpinningDrop = undefined;
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
      this._haNatPoolBatchTypeMismatch = undefined;
      this._haNatPoolUnusable = undefined;
      this._hairpin = undefined;
      this._icmpUserQuotaExceeded = undefined;
      this._inboundFiltered = undefined;
      this._lidDrop = undefined;
      this._lidPassThrough = undefined;
      this._natPoolUnusable = undefined;
      this._natPortUnavailableIcmp = undefined;
      this._natPortUnavailableTcp = undefined;
      this._natPortUnavailableUdp = undefined;
      this._newUserResourceUnavailable = undefined;
      this._noClassListMatch = undefined;
      this._noRadiusProfileMatch = undefined;
      this._portOverloadingPortFreeTcp = undefined;
      this._portOverloadingPortFreeUdp = undefined;
      this._portOverloadingPortTcpInserted = undefined;
      this._portOverloadingPortUdpInserted = undefined;
      this._portOverloadingSmpFreeTcp = undefined;
      this._portOverloadingSmpFreeUdp = undefined;
      this._portOverloadingSmpInsertedTcp = undefined;
      this._portOverloadingSmpInsertedUdp = undefined;
      this._prefixQuotaMismatch = undefined;
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
      this._tcpFullconeCreatedSby = undefined;
      this._tcpFullconeFreed = undefined;
      this._tcpFullconeFreedSby = undefined;
      this._tcpUserQuotaExceeded = undefined;
      this._totalIcmpAllocated = undefined;
      this._totalIcmpFreed = undefined;
      this._totalTcpAllocated = undefined;
      this._totalTcpFreed = undefined;
      this._totalTcpOverloaded = undefined;
      this._totalUdpAllocated = undefined;
      this._totalUdpFreed = undefined;
      this._totalUdpOverloaded = undefined;
      this._truncatedPacket = undefined;
      this._udpFullconeCreated = undefined;
      this._udpFullconeCreatedSby = undefined;
      this._udpFullconeFreed = undefined;
      this._udpFullconeFreedSby = undefined;
      this._udpUserQuotaExceeded = undefined;
      this._userQuotaCreated = undefined;
      this._userQuotaCreatedSby = undefined;
      this._userQuotaFailure = undefined;
      this._userQuotaPutInDelQ = undefined;
      this._userQuotaPutInDelQSby = undefined;
      this._userQuotaUnusable = undefined;
      this._userQuotaUnusableDrop = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._classListPermitDrop = value.classListPermitDrop;
      this._dataSesnRateUserQuotaExceeded = value.dataSesnRateUserQuotaExceeded;
      this._dataSesnUserQuotaExceeded = value.dataSesnUserQuotaExceeded;
      this._dataSessionCreated = value.dataSessionCreated;
      this._dataSessionCreatedSby = value.dataSessionCreatedSby;
      this._dataSessionFreed = value.dataSessionFreed;
      this._dataSessionFreedSby = value.dataSessionFreedSby;
      this._eifLimitExceeded = value.eifLimitExceeded;
      this._endpointIndepFilterMatch = value.endpointIndepFilterMatch;
      this._endpointIndepMapMatch = value.endpointIndepMapMatch;
      this._extendedQuotaExceeded = value.extendedQuotaExceeded;
      this._extendedQuotaMatched = value.extendedQuotaMatched;
      this._fullconeFailure = value.fullconeFailure;
      this._fullconeSelfHairpinningDrop = value.fullconeSelfHairpinningDrop;
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
      this._haNatPoolBatchTypeMismatch = value.haNatPoolBatchTypeMismatch;
      this._haNatPoolUnusable = value.haNatPoolUnusable;
      this._hairpin = value.hairpin;
      this._icmpUserQuotaExceeded = value.icmpUserQuotaExceeded;
      this._inboundFiltered = value.inboundFiltered;
      this._lidDrop = value.lidDrop;
      this._lidPassThrough = value.lidPassThrough;
      this._natPoolUnusable = value.natPoolUnusable;
      this._natPortUnavailableIcmp = value.natPortUnavailableIcmp;
      this._natPortUnavailableTcp = value.natPortUnavailableTcp;
      this._natPortUnavailableUdp = value.natPortUnavailableUdp;
      this._newUserResourceUnavailable = value.newUserResourceUnavailable;
      this._noClassListMatch = value.noClassListMatch;
      this._noRadiusProfileMatch = value.noRadiusProfileMatch;
      this._portOverloadingPortFreeTcp = value.portOverloadingPortFreeTcp;
      this._portOverloadingPortFreeUdp = value.portOverloadingPortFreeUdp;
      this._portOverloadingPortTcpInserted = value.portOverloadingPortTcpInserted;
      this._portOverloadingPortUdpInserted = value.portOverloadingPortUdpInserted;
      this._portOverloadingSmpFreeTcp = value.portOverloadingSmpFreeTcp;
      this._portOverloadingSmpFreeUdp = value.portOverloadingSmpFreeUdp;
      this._portOverloadingSmpInsertedTcp = value.portOverloadingSmpInsertedTcp;
      this._portOverloadingSmpInsertedUdp = value.portOverloadingSmpInsertedUdp;
      this._prefixQuotaMismatch = value.prefixQuotaMismatch;
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
      this._tcpFullconeCreatedSby = value.tcpFullconeCreatedSby;
      this._tcpFullconeFreed = value.tcpFullconeFreed;
      this._tcpFullconeFreedSby = value.tcpFullconeFreedSby;
      this._tcpUserQuotaExceeded = value.tcpUserQuotaExceeded;
      this._totalIcmpAllocated = value.totalIcmpAllocated;
      this._totalIcmpFreed = value.totalIcmpFreed;
      this._totalTcpAllocated = value.totalTcpAllocated;
      this._totalTcpFreed = value.totalTcpFreed;
      this._totalTcpOverloaded = value.totalTcpOverloaded;
      this._totalUdpAllocated = value.totalUdpAllocated;
      this._totalUdpFreed = value.totalUdpFreed;
      this._totalUdpOverloaded = value.totalUdpOverloaded;
      this._truncatedPacket = value.truncatedPacket;
      this._udpFullconeCreated = value.udpFullconeCreated;
      this._udpFullconeCreatedSby = value.udpFullconeCreatedSby;
      this._udpFullconeFreed = value.udpFullconeFreed;
      this._udpFullconeFreedSby = value.udpFullconeFreedSby;
      this._udpUserQuotaExceeded = value.udpUserQuotaExceeded;
      this._userQuotaCreated = value.userQuotaCreated;
      this._userQuotaCreatedSby = value.userQuotaCreatedSby;
      this._userQuotaFailure = value.userQuotaFailure;
      this._userQuotaPutInDelQ = value.userQuotaPutInDelQ;
      this._userQuotaPutInDelQSby = value.userQuotaPutInDelQSby;
      this._userQuotaUnusable = value.userQuotaUnusable;
      this._userQuotaUnusableDrop = value.userQuotaUnusableDrop;
    }
  }

  // class_list_permit_drop - computed: false, optional: true, required: false
  private _classListPermitDrop?: number; 
  public get classListPermitDrop() {
    return this.getNumberAttribute('class_list_permit_drop');
  }
  public set classListPermitDrop(value: number) {
    this._classListPermitDrop = value;
  }
  public resetClassListPermitDrop() {
    this._classListPermitDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListPermitDropInput() {
    return this._classListPermitDrop;
  }

  // data_sesn_rate_user_quota_exceeded - computed: false, optional: true, required: false
  private _dataSesnRateUserQuotaExceeded?: number; 
  public get dataSesnRateUserQuotaExceeded() {
    return this.getNumberAttribute('data_sesn_rate_user_quota_exceeded');
  }
  public set dataSesnRateUserQuotaExceeded(value: number) {
    this._dataSesnRateUserQuotaExceeded = value;
  }
  public resetDataSesnRateUserQuotaExceeded() {
    this._dataSesnRateUserQuotaExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSesnRateUserQuotaExceededInput() {
    return this._dataSesnRateUserQuotaExceeded;
  }

  // data_sesn_user_quota_exceeded - computed: false, optional: true, required: false
  private _dataSesnUserQuotaExceeded?: number; 
  public get dataSesnUserQuotaExceeded() {
    return this.getNumberAttribute('data_sesn_user_quota_exceeded');
  }
  public set dataSesnUserQuotaExceeded(value: number) {
    this._dataSesnUserQuotaExceeded = value;
  }
  public resetDataSesnUserQuotaExceeded() {
    this._dataSesnUserQuotaExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSesnUserQuotaExceededInput() {
    return this._dataSesnUserQuotaExceeded;
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

  // data_session_created_sby - computed: false, optional: true, required: false
  private _dataSessionCreatedSby?: number; 
  public get dataSessionCreatedSby() {
    return this.getNumberAttribute('data_session_created_sby');
  }
  public set dataSessionCreatedSby(value: number) {
    this._dataSessionCreatedSby = value;
  }
  public resetDataSessionCreatedSby() {
    this._dataSessionCreatedSby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSessionCreatedSbyInput() {
    return this._dataSessionCreatedSby;
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

  // data_session_freed_sby - computed: false, optional: true, required: false
  private _dataSessionFreedSby?: number; 
  public get dataSessionFreedSby() {
    return this.getNumberAttribute('data_session_freed_sby');
  }
  public set dataSessionFreedSby(value: number) {
    this._dataSessionFreedSby = value;
  }
  public resetDataSessionFreedSby() {
    this._dataSessionFreedSby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSessionFreedSbyInput() {
    return this._dataSessionFreedSby;
  }

  // eif_limit_exceeded - computed: false, optional: true, required: false
  private _eifLimitExceeded?: number; 
  public get eifLimitExceeded() {
    return this.getNumberAttribute('eif_limit_exceeded');
  }
  public set eifLimitExceeded(value: number) {
    this._eifLimitExceeded = value;
  }
  public resetEifLimitExceeded() {
    this._eifLimitExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eifLimitExceededInput() {
    return this._eifLimitExceeded;
  }

  // endpoint_indep_filter_match - computed: false, optional: true, required: false
  private _endpointIndepFilterMatch?: number; 
  public get endpointIndepFilterMatch() {
    return this.getNumberAttribute('endpoint_indep_filter_match');
  }
  public set endpointIndepFilterMatch(value: number) {
    this._endpointIndepFilterMatch = value;
  }
  public resetEndpointIndepFilterMatch() {
    this._endpointIndepFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIndepFilterMatchInput() {
    return this._endpointIndepFilterMatch;
  }

  // endpoint_indep_map_match - computed: false, optional: true, required: false
  private _endpointIndepMapMatch?: number; 
  public get endpointIndepMapMatch() {
    return this.getNumberAttribute('endpoint_indep_map_match');
  }
  public set endpointIndepMapMatch(value: number) {
    this._endpointIndepMapMatch = value;
  }
  public resetEndpointIndepMapMatch() {
    this._endpointIndepMapMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIndepMapMatchInput() {
    return this._endpointIndepMapMatch;
  }

  // extended_quota_exceeded - computed: false, optional: true, required: false
  private _extendedQuotaExceeded?: number; 
  public get extendedQuotaExceeded() {
    return this.getNumberAttribute('extended_quota_exceeded');
  }
  public set extendedQuotaExceeded(value: number) {
    this._extendedQuotaExceeded = value;
  }
  public resetExtendedQuotaExceeded() {
    this._extendedQuotaExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedQuotaExceededInput() {
    return this._extendedQuotaExceeded;
  }

  // extended_quota_matched - computed: false, optional: true, required: false
  private _extendedQuotaMatched?: number; 
  public get extendedQuotaMatched() {
    return this.getNumberAttribute('extended_quota_matched');
  }
  public set extendedQuotaMatched(value: number) {
    this._extendedQuotaMatched = value;
  }
  public resetExtendedQuotaMatched() {
    this._extendedQuotaMatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedQuotaMatchedInput() {
    return this._extendedQuotaMatched;
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

  // fullcone_self_hairpinning_drop - computed: false, optional: true, required: false
  private _fullconeSelfHairpinningDrop?: number; 
  public get fullconeSelfHairpinningDrop() {
    return this.getNumberAttribute('fullcone_self_hairpinning_drop');
  }
  public set fullconeSelfHairpinningDrop(value: number) {
    this._fullconeSelfHairpinningDrop = value;
  }
  public resetFullconeSelfHairpinningDrop() {
    this._fullconeSelfHairpinningDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullconeSelfHairpinningDropInput() {
    return this._fullconeSelfHairpinningDrop;
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

  // ha_nat_pool_batch_type_mismatch - computed: false, optional: true, required: false
  private _haNatPoolBatchTypeMismatch?: number; 
  public get haNatPoolBatchTypeMismatch() {
    return this.getNumberAttribute('ha_nat_pool_batch_type_mismatch');
  }
  public set haNatPoolBatchTypeMismatch(value: number) {
    this._haNatPoolBatchTypeMismatch = value;
  }
  public resetHaNatPoolBatchTypeMismatch() {
    this._haNatPoolBatchTypeMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haNatPoolBatchTypeMismatchInput() {
    return this._haNatPoolBatchTypeMismatch;
  }

  // ha_nat_pool_unusable - computed: false, optional: true, required: false
  private _haNatPoolUnusable?: number; 
  public get haNatPoolUnusable() {
    return this.getNumberAttribute('ha_nat_pool_unusable');
  }
  public set haNatPoolUnusable(value: number) {
    this._haNatPoolUnusable = value;
  }
  public resetHaNatPoolUnusable() {
    this._haNatPoolUnusable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haNatPoolUnusableInput() {
    return this._haNatPoolUnusable;
  }

  // hairpin - computed: false, optional: true, required: false
  private _hairpin?: number; 
  public get hairpin() {
    return this.getNumberAttribute('hairpin');
  }
  public set hairpin(value: number) {
    this._hairpin = value;
  }
  public resetHairpin() {
    this._hairpin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hairpinInput() {
    return this._hairpin;
  }

  // icmp_user_quota_exceeded - computed: false, optional: true, required: false
  private _icmpUserQuotaExceeded?: number; 
  public get icmpUserQuotaExceeded() {
    return this.getNumberAttribute('icmp_user_quota_exceeded');
  }
  public set icmpUserQuotaExceeded(value: number) {
    this._icmpUserQuotaExceeded = value;
  }
  public resetIcmpUserQuotaExceeded() {
    this._icmpUserQuotaExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpUserQuotaExceededInput() {
    return this._icmpUserQuotaExceeded;
  }

  // inbound_filtered - computed: false, optional: true, required: false
  private _inboundFiltered?: number; 
  public get inboundFiltered() {
    return this.getNumberAttribute('inbound_filtered');
  }
  public set inboundFiltered(value: number) {
    this._inboundFiltered = value;
  }
  public resetInboundFiltered() {
    this._inboundFiltered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundFilteredInput() {
    return this._inboundFiltered;
  }

  // lid_drop - computed: false, optional: true, required: false
  private _lidDrop?: number; 
  public get lidDrop() {
    return this.getNumberAttribute('lid_drop');
  }
  public set lidDrop(value: number) {
    this._lidDrop = value;
  }
  public resetLidDrop() {
    this._lidDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidDropInput() {
    return this._lidDrop;
  }

  // lid_pass_through - computed: false, optional: true, required: false
  private _lidPassThrough?: number; 
  public get lidPassThrough() {
    return this.getNumberAttribute('lid_pass_through');
  }
  public set lidPassThrough(value: number) {
    this._lidPassThrough = value;
  }
  public resetLidPassThrough() {
    this._lidPassThrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lidPassThroughInput() {
    return this._lidPassThrough;
  }

  // nat_pool_unusable - computed: false, optional: true, required: false
  private _natPoolUnusable?: number; 
  public get natPoolUnusable() {
    return this.getNumberAttribute('nat_pool_unusable');
  }
  public set natPoolUnusable(value: number) {
    this._natPoolUnusable = value;
  }
  public resetNatPoolUnusable() {
    this._natPoolUnusable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolUnusableInput() {
    return this._natPoolUnusable;
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

  // new_user_resource_unavailable - computed: false, optional: true, required: false
  private _newUserResourceUnavailable?: number; 
  public get newUserResourceUnavailable() {
    return this.getNumberAttribute('new_user_resource_unavailable');
  }
  public set newUserResourceUnavailable(value: number) {
    this._newUserResourceUnavailable = value;
  }
  public resetNewUserResourceUnavailable() {
    this._newUserResourceUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newUserResourceUnavailableInput() {
    return this._newUserResourceUnavailable;
  }

  // no_class_list_match - computed: false, optional: true, required: false
  private _noClassListMatch?: number; 
  public get noClassListMatch() {
    return this.getNumberAttribute('no_class_list_match');
  }
  public set noClassListMatch(value: number) {
    this._noClassListMatch = value;
  }
  public resetNoClassListMatch() {
    this._noClassListMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noClassListMatchInput() {
    return this._noClassListMatch;
  }

  // no_radius_profile_match - computed: false, optional: true, required: false
  private _noRadiusProfileMatch?: number; 
  public get noRadiusProfileMatch() {
    return this.getNumberAttribute('no_radius_profile_match');
  }
  public set noRadiusProfileMatch(value: number) {
    this._noRadiusProfileMatch = value;
  }
  public resetNoRadiusProfileMatch() {
    this._noRadiusProfileMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRadiusProfileMatchInput() {
    return this._noRadiusProfileMatch;
  }

  // port_overloading_port_free_tcp - computed: false, optional: true, required: false
  private _portOverloadingPortFreeTcp?: number; 
  public get portOverloadingPortFreeTcp() {
    return this.getNumberAttribute('port_overloading_port_free_tcp');
  }
  public set portOverloadingPortFreeTcp(value: number) {
    this._portOverloadingPortFreeTcp = value;
  }
  public resetPortOverloadingPortFreeTcp() {
    this._portOverloadingPortFreeTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOverloadingPortFreeTcpInput() {
    return this._portOverloadingPortFreeTcp;
  }

  // port_overloading_port_free_udp - computed: false, optional: true, required: false
  private _portOverloadingPortFreeUdp?: number; 
  public get portOverloadingPortFreeUdp() {
    return this.getNumberAttribute('port_overloading_port_free_udp');
  }
  public set portOverloadingPortFreeUdp(value: number) {
    this._portOverloadingPortFreeUdp = value;
  }
  public resetPortOverloadingPortFreeUdp() {
    this._portOverloadingPortFreeUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOverloadingPortFreeUdpInput() {
    return this._portOverloadingPortFreeUdp;
  }

  // port_overloading_port_tcp_inserted - computed: false, optional: true, required: false
  private _portOverloadingPortTcpInserted?: number; 
  public get portOverloadingPortTcpInserted() {
    return this.getNumberAttribute('port_overloading_port_tcp_inserted');
  }
  public set portOverloadingPortTcpInserted(value: number) {
    this._portOverloadingPortTcpInserted = value;
  }
  public resetPortOverloadingPortTcpInserted() {
    this._portOverloadingPortTcpInserted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOverloadingPortTcpInsertedInput() {
    return this._portOverloadingPortTcpInserted;
  }

  // port_overloading_port_udp_inserted - computed: false, optional: true, required: false
  private _portOverloadingPortUdpInserted?: number; 
  public get portOverloadingPortUdpInserted() {
    return this.getNumberAttribute('port_overloading_port_udp_inserted');
  }
  public set portOverloadingPortUdpInserted(value: number) {
    this._portOverloadingPortUdpInserted = value;
  }
  public resetPortOverloadingPortUdpInserted() {
    this._portOverloadingPortUdpInserted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOverloadingPortUdpInsertedInput() {
    return this._portOverloadingPortUdpInserted;
  }

  // port_overloading_smp_free_tcp - computed: false, optional: true, required: false
  private _portOverloadingSmpFreeTcp?: number; 
  public get portOverloadingSmpFreeTcp() {
    return this.getNumberAttribute('port_overloading_smp_free_tcp');
  }
  public set portOverloadingSmpFreeTcp(value: number) {
    this._portOverloadingSmpFreeTcp = value;
  }
  public resetPortOverloadingSmpFreeTcp() {
    this._portOverloadingSmpFreeTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOverloadingSmpFreeTcpInput() {
    return this._portOverloadingSmpFreeTcp;
  }

  // port_overloading_smp_free_udp - computed: false, optional: true, required: false
  private _portOverloadingSmpFreeUdp?: number; 
  public get portOverloadingSmpFreeUdp() {
    return this.getNumberAttribute('port_overloading_smp_free_udp');
  }
  public set portOverloadingSmpFreeUdp(value: number) {
    this._portOverloadingSmpFreeUdp = value;
  }
  public resetPortOverloadingSmpFreeUdp() {
    this._portOverloadingSmpFreeUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOverloadingSmpFreeUdpInput() {
    return this._portOverloadingSmpFreeUdp;
  }

  // port_overloading_smp_inserted_tcp - computed: false, optional: true, required: false
  private _portOverloadingSmpInsertedTcp?: number; 
  public get portOverloadingSmpInsertedTcp() {
    return this.getNumberAttribute('port_overloading_smp_inserted_tcp');
  }
  public set portOverloadingSmpInsertedTcp(value: number) {
    this._portOverloadingSmpInsertedTcp = value;
  }
  public resetPortOverloadingSmpInsertedTcp() {
    this._portOverloadingSmpInsertedTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOverloadingSmpInsertedTcpInput() {
    return this._portOverloadingSmpInsertedTcp;
  }

  // port_overloading_smp_inserted_udp - computed: false, optional: true, required: false
  private _portOverloadingSmpInsertedUdp?: number; 
  public get portOverloadingSmpInsertedUdp() {
    return this.getNumberAttribute('port_overloading_smp_inserted_udp');
  }
  public set portOverloadingSmpInsertedUdp(value: number) {
    this._portOverloadingSmpInsertedUdp = value;
  }
  public resetPortOverloadingSmpInsertedUdp() {
    this._portOverloadingSmpInsertedUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOverloadingSmpInsertedUdpInput() {
    return this._portOverloadingSmpInsertedUdp;
  }

  // prefix_quota_mismatch - computed: false, optional: true, required: false
  private _prefixQuotaMismatch?: number; 
  public get prefixQuotaMismatch() {
    return this.getNumberAttribute('prefix_quota_mismatch');
  }
  public set prefixQuotaMismatch(value: number) {
    this._prefixQuotaMismatch = value;
  }
  public resetPrefixQuotaMismatch() {
    this._prefixQuotaMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixQuotaMismatchInput() {
    return this._prefixQuotaMismatch;
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

  // tcp_fullcone_created_sby - computed: false, optional: true, required: false
  private _tcpFullconeCreatedSby?: number; 
  public get tcpFullconeCreatedSby() {
    return this.getNumberAttribute('tcp_fullcone_created_sby');
  }
  public set tcpFullconeCreatedSby(value: number) {
    this._tcpFullconeCreatedSby = value;
  }
  public resetTcpFullconeCreatedSby() {
    this._tcpFullconeCreatedSby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFullconeCreatedSbyInput() {
    return this._tcpFullconeCreatedSby;
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

  // tcp_fullcone_freed_sby - computed: false, optional: true, required: false
  private _tcpFullconeFreedSby?: number; 
  public get tcpFullconeFreedSby() {
    return this.getNumberAttribute('tcp_fullcone_freed_sby');
  }
  public set tcpFullconeFreedSby(value: number) {
    this._tcpFullconeFreedSby = value;
  }
  public resetTcpFullconeFreedSby() {
    this._tcpFullconeFreedSby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFullconeFreedSbyInput() {
    return this._tcpFullconeFreedSby;
  }

  // tcp_user_quota_exceeded - computed: false, optional: true, required: false
  private _tcpUserQuotaExceeded?: number; 
  public get tcpUserQuotaExceeded() {
    return this.getNumberAttribute('tcp_user_quota_exceeded');
  }
  public set tcpUserQuotaExceeded(value: number) {
    this._tcpUserQuotaExceeded = value;
  }
  public resetTcpUserQuotaExceeded() {
    this._tcpUserQuotaExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpUserQuotaExceededInput() {
    return this._tcpUserQuotaExceeded;
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

  // total_tcp_overloaded - computed: false, optional: true, required: false
  private _totalTcpOverloaded?: number; 
  public get totalTcpOverloaded() {
    return this.getNumberAttribute('total_tcp_overloaded');
  }
  public set totalTcpOverloaded(value: number) {
    this._totalTcpOverloaded = value;
  }
  public resetTotalTcpOverloaded() {
    this._totalTcpOverloaded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalTcpOverloadedInput() {
    return this._totalTcpOverloaded;
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

  // total_udp_overloaded - computed: false, optional: true, required: false
  private _totalUdpOverloaded?: number; 
  public get totalUdpOverloaded() {
    return this.getNumberAttribute('total_udp_overloaded');
  }
  public set totalUdpOverloaded(value: number) {
    this._totalUdpOverloaded = value;
  }
  public resetTotalUdpOverloaded() {
    this._totalUdpOverloaded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalUdpOverloadedInput() {
    return this._totalUdpOverloaded;
  }

  // truncated_packet - computed: false, optional: true, required: false
  private _truncatedPacket?: number; 
  public get truncatedPacket() {
    return this.getNumberAttribute('truncated_packet');
  }
  public set truncatedPacket(value: number) {
    this._truncatedPacket = value;
  }
  public resetTruncatedPacket() {
    this._truncatedPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get truncatedPacketInput() {
    return this._truncatedPacket;
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

  // udp_fullcone_created_sby - computed: false, optional: true, required: false
  private _udpFullconeCreatedSby?: number; 
  public get udpFullconeCreatedSby() {
    return this.getNumberAttribute('udp_fullcone_created_sby');
  }
  public set udpFullconeCreatedSby(value: number) {
    this._udpFullconeCreatedSby = value;
  }
  public resetUdpFullconeCreatedSby() {
    this._udpFullconeCreatedSby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFullconeCreatedSbyInput() {
    return this._udpFullconeCreatedSby;
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

  // udp_fullcone_freed_sby - computed: false, optional: true, required: false
  private _udpFullconeFreedSby?: number; 
  public get udpFullconeFreedSby() {
    return this.getNumberAttribute('udp_fullcone_freed_sby');
  }
  public set udpFullconeFreedSby(value: number) {
    this._udpFullconeFreedSby = value;
  }
  public resetUdpFullconeFreedSby() {
    this._udpFullconeFreedSby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpFullconeFreedSbyInput() {
    return this._udpFullconeFreedSby;
  }

  // udp_user_quota_exceeded - computed: false, optional: true, required: false
  private _udpUserQuotaExceeded?: number; 
  public get udpUserQuotaExceeded() {
    return this.getNumberAttribute('udp_user_quota_exceeded');
  }
  public set udpUserQuotaExceeded(value: number) {
    this._udpUserQuotaExceeded = value;
  }
  public resetUdpUserQuotaExceeded() {
    this._udpUserQuotaExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpUserQuotaExceededInput() {
    return this._udpUserQuotaExceeded;
  }

  // user_quota_created - computed: false, optional: true, required: false
  private _userQuotaCreated?: number; 
  public get userQuotaCreated() {
    return this.getNumberAttribute('user_quota_created');
  }
  public set userQuotaCreated(value: number) {
    this._userQuotaCreated = value;
  }
  public resetUserQuotaCreated() {
    this._userQuotaCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userQuotaCreatedInput() {
    return this._userQuotaCreated;
  }

  // user_quota_created_sby - computed: false, optional: true, required: false
  private _userQuotaCreatedSby?: number; 
  public get userQuotaCreatedSby() {
    return this.getNumberAttribute('user_quota_created_sby');
  }
  public set userQuotaCreatedSby(value: number) {
    this._userQuotaCreatedSby = value;
  }
  public resetUserQuotaCreatedSby() {
    this._userQuotaCreatedSby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userQuotaCreatedSbyInput() {
    return this._userQuotaCreatedSby;
  }

  // user_quota_failure - computed: false, optional: true, required: false
  private _userQuotaFailure?: number; 
  public get userQuotaFailure() {
    return this.getNumberAttribute('user_quota_failure');
  }
  public set userQuotaFailure(value: number) {
    this._userQuotaFailure = value;
  }
  public resetUserQuotaFailure() {
    this._userQuotaFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userQuotaFailureInput() {
    return this._userQuotaFailure;
  }

  // user_quota_put_in_del_q - computed: false, optional: true, required: false
  private _userQuotaPutInDelQ?: number; 
  public get userQuotaPutInDelQ() {
    return this.getNumberAttribute('user_quota_put_in_del_q');
  }
  public set userQuotaPutInDelQ(value: number) {
    this._userQuotaPutInDelQ = value;
  }
  public resetUserQuotaPutInDelQ() {
    this._userQuotaPutInDelQ = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userQuotaPutInDelQInput() {
    return this._userQuotaPutInDelQ;
  }

  // user_quota_put_in_del_q_sby - computed: false, optional: true, required: false
  private _userQuotaPutInDelQSby?: number; 
  public get userQuotaPutInDelQSby() {
    return this.getNumberAttribute('user_quota_put_in_del_q_sby');
  }
  public set userQuotaPutInDelQSby(value: number) {
    this._userQuotaPutInDelQSby = value;
  }
  public resetUserQuotaPutInDelQSby() {
    this._userQuotaPutInDelQSby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userQuotaPutInDelQSbyInput() {
    return this._userQuotaPutInDelQSby;
  }

  // user_quota_unusable - computed: false, optional: true, required: false
  private _userQuotaUnusable?: number; 
  public get userQuotaUnusable() {
    return this.getNumberAttribute('user_quota_unusable');
  }
  public set userQuotaUnusable(value: number) {
    this._userQuotaUnusable = value;
  }
  public resetUserQuotaUnusable() {
    this._userQuotaUnusable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userQuotaUnusableInput() {
    return this._userQuotaUnusable;
  }

  // user_quota_unusable_drop - computed: false, optional: true, required: false
  private _userQuotaUnusableDrop?: number; 
  public get userQuotaUnusableDrop() {
    return this.getNumberAttribute('user_quota_unusable_drop');
  }
  public set userQuotaUnusableDrop(value: number) {
    this._userQuotaUnusableDrop = value;
  }
  public resetUserQuotaUnusableDrop() {
    this._userQuotaUnusableDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userQuotaUnusableDropInput() {
    return this._userQuotaUnusableDrop;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats thunder_cgnv6_ds_lite_global_stats}
*/
export class DataThunderCgnv6DsLiteGlobalStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_ds_lite_global_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6DsLiteGlobalStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6DsLiteGlobalStats to import
  * @param importFromId The id of the existing DataThunderCgnv6DsLiteGlobalStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6DsLiteGlobalStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_ds_lite_global_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_ds_lite_global_stats thunder_cgnv6_ds_lite_global_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6DsLiteGlobalStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6DsLiteGlobalStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_ds_lite_global_stats',
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
  private _stats = new DataThunderCgnv6DsLiteGlobalStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6DsLiteGlobalStatsStats) {
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
      stats: dataThunderCgnv6DsLiteGlobalStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderCgnv6DsLiteGlobalStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6DsLiteGlobalStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
