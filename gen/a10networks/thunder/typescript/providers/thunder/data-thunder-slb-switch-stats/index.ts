// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbSwitchStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#id DataThunderSlbSwitchStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#stats DataThunderSlbSwitchStats#stats}
  */
  readonly stats?: DataThunderSlbSwitchStatsStats;
}
export interface DataThunderSlbSwitchStatsStats {
  /**
  * ACL Denys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#acl_deny DataThunderSlbSwitchStats#acl_deny}
  */
  readonly aclDeny?: number;
  /**
  * Bad Pkt Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#badpkt_drop DataThunderSlbSwitchStats#badpkt_drop}
  */
  readonly badpktDrop?: number;
  /**
  * BPDUs Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#bpdu_rcvd DataThunderSlbSwitchStats#bpdu_rcvd}
  */
  readonly bpduRcvd?: number;
  /**
  * BPDUs Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#bpdu_sent DataThunderSlbSwitchStats#bpdu_sent}
  */
  readonly bpduSent?: number;
  /**
  * BW Limit ignored packets count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#bw_ignore_limit DataThunderSlbSwitchStats#bw_ignore_limit}
  */
  readonly bwIgnoreLimit?: number;
  /**
  * BW Limit Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#bwl_drop DataThunderSlbSwitchStats#bwl_drop}
  */
  readonly bwlDrop?: number;
  /**
  * Linux Closed Port SYN Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#closed_port_syn_drop DataThunderSlbSwitchStats#closed_port_syn_drop}
  */
  readonly closedPortSynDrop?: number;
  /**
  * SYN rate exceeded Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ctrl_syn_rate_drop DataThunderSlbSwitchStats#ctrl_syn_rate_drop}
  */
  readonly ctrlSynRateDrop?: number;
  /**
  * ARP PKT dropped due to interface state checks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#dev_based_arp_drop DataThunderSlbSwitchStats#dev_based_arp_drop}
  */
  readonly devBasedArpDrop?: number;
  /**
  * ARP PKT dropped due to interface is down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#dev_link_down_arp_drop DataThunderSlbSwitchStats#dev_link_down_arp_drop}
  */
  readonly devLinkDownArpDrop?: number;
  /**
  * FPGA Error PKT1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#fpga_error_pkt1 DataThunderSlbSwitchStats#fpga_error_pkt1}
  */
  readonly fpgaErrorPkt1?: number;
  /**
  * FPGA Error PKT2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#fpga_error_pkt2 DataThunderSlbSwitchStats#fpga_error_pkt2}
  */
  readonly fpgaErrorPkt2?: number;
  /**
  * FW SMP Zone Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#fw_smp_zone_mismatch DataThunderSlbSwitchStats#fw_smp_zone_mismatch}
  */
  readonly fwSmpZoneMismatch?: number;
  /**
  * FWLB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#fwlb DataThunderSlbSwitchStats#fwlb}
  */
  readonly fwlb?: number;
  /**
  * ARP PKT dropped due to inactive nat pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#inactive_nat_pool_arp_drop DataThunderSlbSwitchStats#inactive_nat_pool_arp_drop}
  */
  readonly inactiveNatPoolArpDrop?: number;
  /**
  * ARP PKT dropped due to inactive static nat pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#inactive_static_nat_pool_arp_drop DataThunderSlbSwitchStats#inactive_static_nat_pool_arp_drop}
  */
  readonly inactiveStaticNatPoolArpDrop?: number;
  /**
  * Incorrect Length Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#incorrect_len_drop DataThunderSlbSwitchStats#incorrect_len_drop}
  */
  readonly incorrectLenDrop?: number;
  /**
  * Invalid ARP PKT Rcvd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#invalid_rx_arp_pkt DataThunderSlbSwitchStats#invalid_rx_arp_pkt}
  */
  readonly invalidRxArpPkt?: number;
  /**
  * ARP PKT dropped due to invalid sender MAC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#invalid_sender_mac_arp_drop DataThunderSlbSwitchStats#invalid_sender_mac_arp_drop}
  */
  readonly invalidSenderMacArpDrop?: number;
  /**
  * IP Defrag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ip_defrag DataThunderSlbSwitchStats#ip_defrag}
  */
  readonly ipDefrag?: number;
  /**
  * IP Invalid Length Frag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ip_defrag_invalid_len DataThunderSlbSwitchStats#ip_defrag_invalid_len}
  */
  readonly ipDefragInvalidLen?: number;
  /**
  * IP Fragment oversize
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ip_frag_oversize DataThunderSlbSwitchStats#ip_frag_oversize}
  */
  readonly ipFragOversize?: number;
  /**
  * IP frag sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ip_frag_sent DataThunderSlbSwitchStats#ip_frag_sent}
  */
  readonly ipFragSent?: number;
  /**
  * IP Fragment too many
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ip_frag_too_many DataThunderSlbSwitchStats#ip_frag_too_many}
  */
  readonly ipFragTooMany?: number;
  /**
  * IP ICMP Error Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ip_icmp_error_drop DataThunderSlbSwitchStats#ip_icmp_error_drop}
  */
  readonly ipIcmpErrorDrop?: number;
  /**
  * ARP PKT dropped due to IP not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ip_not_found_arp_drop DataThunderSlbSwitchStats#ip_not_found_arp_drop}
  */
  readonly ipNotFoundArpDrop?: number;
  /**
  * IP(ESP) Fragment Rcvd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipfrag_esp DataThunderSlbSwitchStats#ipfrag_esp}
  */
  readonly ipfragEsp?: number;
  /**
  * IP(ICMP) Fragment Rcvd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipfrag_icmp DataThunderSlbSwitchStats#ipfrag_icmp}
  */
  readonly ipfragIcmp?: number;
  /**
  * IP Frag IPIP Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipfrag_ipip_dropped DataThunderSlbSwitchStats#ipfrag_ipip_dropped}
  */
  readonly ipfragIpipDropped?: number;
  /**
  * IP(OSPF) Fragment Rcvd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipfrag_ospf DataThunderSlbSwitchStats#ipfrag_ospf}
  */
  readonly ipfragOspf?: number;
  /**
  * IP Fragment Overlap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipfrag_overlap DataThunderSlbSwitchStats#ipfrag_overlap}
  */
  readonly ipfragOverlap?: number;
  /**
  * IP Frag Overload Drops
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipfrag_overload DataThunderSlbSwitchStats#ipfrag_overload}
  */
  readonly ipfragOverload?: number;
  /**
  * IP Fragment Reasm Fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipfrag_reasmfails DataThunderSlbSwitchStats#ipfrag_reasmfails}
  */
  readonly ipfragReasmfails?: number;
  /**
  * IP Fragment Reasm OKs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipfrag_reasmoks DataThunderSlbSwitchStats#ipfrag_reasmoks}
  */
  readonly ipfragReasmoks?: number;
  /**
  * IP(TCP) Fragment Rcvd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipfrag_tcp DataThunderSlbSwitchStats#ipfrag_tcp}
  */
  readonly ipfragTcp?: number;
  /**
  * IP Frag TCP Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipfrag_tcp_dropped DataThunderSlbSwitchStats#ipfrag_tcp_dropped}
  */
  readonly ipfragTcpDropped?: number;
  /**
  * IP Fragment Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipfrag_timeout DataThunderSlbSwitchStats#ipfrag_timeout}
  */
  readonly ipfragTimeout?: number;
  /**
  * IP(UDP) Fragment Rcvd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipfrag_udp DataThunderSlbSwitchStats#ipfrag_udp}
  */
  readonly ipfragUdp?: number;
  /**
  * IP Frag UDP Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipfrag_udp_dropped DataThunderSlbSwitchStats#ipfrag_udp_dropped}
  */
  readonly ipfragUdpDropped?: number;
  /**
  * IPIPv6 Jumbo Frag Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipipv6_jumbo_frag_drop DataThunderSlbSwitchStats#ipipv6_jumbo_frag_drop}
  */
  readonly ipipv6JumboFragDrop?: number;
  /**
  * IPSec Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipsec_drop DataThunderSlbSwitchStats#ipsec_drop}
  */
  readonly ipsecDrop?: number;
  /**
  * IPv4 Frag 6RD Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipv4_frag_6rd_drop DataThunderSlbSwitchStats#ipv4_frag_6rd_drop}
  */
  readonly ipv4Frag6RdDrop?: number;
  /**
  * IPv4 Frag 6RD OK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipv4_frag_6rd_ok DataThunderSlbSwitchStats#ipv4_frag_6rd_ok}
  */
  readonly ipv4Frag6RdOk?: number;
  /**
  * IPv4 No Route Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipv4_noroute_drop DataThunderSlbSwitchStats#ipv4_noroute_drop}
  */
  readonly ipv4NorouteDrop?: number;
  /**
  * IPv4 No L3 VLAN FWD Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipv4_novlanfwd_drop DataThunderSlbSwitchStats#ipv4_novlanfwd_drop}
  */
  readonly ipv4NovlanfwdDrop?: number;
  /**
  * IPv4 RPF drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipv4_rpf_drop DataThunderSlbSwitchStats#ipv4_rpf_drop}
  */
  readonly ipv4RpfDrop?: number;
  /**
  * IPv4 source routed packet drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipv4_src_routed_pkt_drop DataThunderSlbSwitchStats#ipv4_src_routed_pkt_drop}
  */
  readonly ipv4SrcRoutedPktDrop?: number;
  /**
  * IPv6 Jumbo Frag Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipv6_jumbo_frag_drop DataThunderSlbSwitchStats#ipv6_jumbo_frag_drop}
  */
  readonly ipv6JumboFragDrop?: number;
  /**
  * IPv6 DAD on Adverts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipv6_ndisc_dad_adverts DataThunderSlbSwitchStats#ipv6_ndisc_dad_adverts}
  */
  readonly ipv6NdiscDadAdverts?: number;
  /**
  * IPv6 DAD on Advertise drop for prefix mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipv6_ndisc_dad_prefix_mismatch_drop DataThunderSlbSwitchStats#ipv6_ndisc_dad_prefix_mismatch_drop}
  */
  readonly ipv6NdiscDadPrefixMismatchDrop?: number;
  /**
  * IPv6 DAD on Solicits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipv6_ndisc_dad_solicits DataThunderSlbSwitchStats#ipv6_ndisc_dad_solicits}
  */
  readonly ipv6NdiscDadSolicits?: number;
  /**
  * IPv6 DAD MAC Changed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipv6_ndisc_mac_changes DataThunderSlbSwitchStats#ipv6_ndisc_mac_changes}
  */
  readonly ipv6NdiscMacChanges?: number;
  /**
  * IPv6 DAD Out-of-memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipv6_ndisc_out_of_memory DataThunderSlbSwitchStats#ipv6_ndisc_out_of_memory}
  */
  readonly ipv6NdiscOutOfMemory?: number;
  /**
  * IPv6 No Route Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipv6_noroute_drop DataThunderSlbSwitchStats#ipv6_noroute_drop}
  */
  readonly ipv6NorouteDrop?: number;
  /**
  * IPv6 No L3 VLAN FWD Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipv6_novlanfwd_drop DataThunderSlbSwitchStats#ipv6_novlanfwd_drop}
  */
  readonly ipv6NovlanfwdDrop?: number;
  /**
  * IPv6 RPF drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipv6_rpf_drop DataThunderSlbSwitchStats#ipv6_rpf_drop}
  */
  readonly ipv6RpfDrop?: number;
  /**
  * IPv6 source routed packet drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipv6_src_routed_pkt_drop DataThunderSlbSwitchStats#ipv6_src_routed_pkt_drop}
  */
  readonly ipv6SrcRoutedPktDrop?: number;
  /**
  * IPv6 Frag ESP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipv6frag_esp DataThunderSlbSwitchStats#ipv6frag_esp}
  */
  readonly ipv6FragEsp?: number;
  /**
  * IPv6 Frag gre Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipv6frag_gre_dropped DataThunderSlbSwitchStats#ipv6frag_gre_dropped}
  */
  readonly ipv6FragGreDropped?: number;
  /**
  * IPv6 Frag ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipv6frag_icmp DataThunderSlbSwitchStats#ipv6frag_icmp}
  */
  readonly ipv6FragIcmp?: number;
  /**
  * IPv6 Frag IPIP Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipv6frag_ipip_dropped DataThunderSlbSwitchStats#ipv6frag_ipip_dropped}
  */
  readonly ipv6FragIpipDropped?: number;
  /**
  * IPv6 Frag IPIP OKs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipv6frag_ipip_ok DataThunderSlbSwitchStats#ipv6frag_ipip_ok}
  */
  readonly ipv6FragIpipOk?: number;
  /**
  * IPv6 Frag OSPF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipv6frag_ospf DataThunderSlbSwitchStats#ipv6frag_ospf}
  */
  readonly ipv6FragOspf?: number;
  /**
  * IPv6 Frag TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipv6frag_tcp DataThunderSlbSwitchStats#ipv6frag_tcp}
  */
  readonly ipv6FragTcp?: number;
  /**
  * IPv6 Frag TCP Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipv6frag_tcp_dropped DataThunderSlbSwitchStats#ipv6frag_tcp_dropped}
  */
  readonly ipv6FragTcpDropped?: number;
  /**
  * IPv6 Frag UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipv6frag_udp DataThunderSlbSwitchStats#ipv6frag_udp}
  */
  readonly ipv6FragUdp?: number;
  /**
  * IPv6 Frag UDP Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ipv6frag_udp_dropped DataThunderSlbSwitchStats#ipv6frag_udp_dropped}
  */
  readonly ipv6FragUdpDropped?: number;
  /**
  * Jumbo Frag Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#jumbo_frag_drop DataThunderSlbSwitchStats#jumbo_frag_drop}
  */
  readonly jumboFragDrop?: number;
  /**
  * L2 Default Vlan FWD Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#l2_def_vlan_drop DataThunderSlbSwitchStats#l2_def_vlan_drop}
  */
  readonly l2DefVlanDrop?: number;
  /**
  * L2 Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#l2_forward DataThunderSlbSwitchStats#l2_forward}
  */
  readonly l2Forward?: number;
  /**
  * L3 IP Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#l3_forward_ip DataThunderSlbSwitchStats#l3_forward_ip}
  */
  readonly l3ForwardIp?: number;
  /**
  * L3 IPv6 Forward
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#l3_forward_ipv6 DataThunderSlbSwitchStats#l3_forward_ipv6}
  */
  readonly l3ForwardIpv6?: number;
  /**
  * L4 In Ctrl CPU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#l4_in_ctrl_cpu DataThunderSlbSwitchStats#l4_in_ctrl_cpu}
  */
  readonly l4InCtrlCpu?: number;
  /**
  * L4 Process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#l4_process DataThunderSlbSwitchStats#l4_process}
  */
  readonly l4Process?: number;
  /**
  * LACP interface error corrected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#lacp_tx_intf_err_drop DataThunderSlbSwitchStats#lacp_tx_intf_err_drop}
  */
  readonly lacpTxIntfErrDrop?: number;
  /**
  * License Expire Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#licexpire_drop DataThunderSlbSwitchStats#licexpire_drop}
  */
  readonly licexpireDrop?: number;
  /**
  * Link Down Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#linkdown_drop DataThunderSlbSwitchStats#linkdown_drop}
  */
  readonly linkdownDrop?: number;
  /**
  * MAC movement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#mac_movement DataThunderSlbSwitchStats#mac_movement}
  */
  readonly macMovement?: number;
  /**
  * Max ARP Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#max_arp_drop DataThunderSlbSwitchStats#max_arp_drop}
  */
  readonly maxArpDrop?: number;
  /**
  * Management Service Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#mgmt_svc_drop DataThunderSlbSwitchStats#mgmt_svc_drop}
  */
  readonly mgmtSvcDrop?: number;
  /**
  * No IP Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#no_ip_drop DataThunderSlbSwitchStats#no_ip_drop}
  */
  readonly noIpDrop?: number;
  /**
  * Packet-Per-Sec Limit Drop at egress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ppsl_drop_egr DataThunderSlbSwitchStats#ppsl_drop_egr}
  */
  readonly ppslDropEgr?: number;
  /**
  * Packet-Per-Sec Limit Drop at ingress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ppsl_drop_ing DataThunderSlbSwitchStats#ppsl_drop_ing}
  */
  readonly ppslDropIng?: number;
  /**
  * Packet-Per-Sec Limit ignored packets count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ppsl_ignore_limit DataThunderSlbSwitchStats#ppsl_ignore_limit}
  */
  readonly ppslIgnoreLimit?: number;
  /**
  * Prot Down Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#prot_down_drop DataThunderSlbSwitchStats#prot_down_drop}
  */
  readonly protDownDrop?: number;
  /**
  * Redirect failed in the fwd direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#redirect_fwd_fail DataThunderSlbSwitchStats#redirect_fwd_fail}
  */
  readonly redirectFwdFail?: number;
  /**
  * Redirect succeeded in the fwd direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#redirect_fwd_sent DataThunderSlbSwitchStats#redirect_fwd_sent}
  */
  readonly redirectFwdSent?: number;
  /**
  * Redirect failed in the rev direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#redirect_rev_fail DataThunderSlbSwitchStats#redirect_rev_fail}
  */
  readonly redirectRevFail?: number;
  /**
  * Redirect succeeded in the rev direction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#redirect_rev_sent DataThunderSlbSwitchStats#redirect_rev_sent}
  */
  readonly redirectRevSent?: number;
  /**
  * Redirect connection setup failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#redirect_setup_fail DataThunderSlbSwitchStats#redirect_setup_fail}
  */
  readonly redirectSetupFail?: number;
  /**
  * ARP REQ Rcvd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#rx_arp_req DataThunderSlbSwitchStats#rx_arp_req}
  */
  readonly rxArpReq?: number;
  /**
  * ARP RESP Rcvd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#rx_arp_resp DataThunderSlbSwitchStats#rx_arp_resp}
  */
  readonly rxArpResp?: number;
  /**
  * Received kernel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#rx_kernel DataThunderSlbSwitchStats#rx_kernel}
  */
  readonly rxKernel?: number;
  /**
  * ARP PKT dropped due to scaleout checks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#scaleout_arp_drop DataThunderSlbSwitchStats#scaleout_arp_drop}
  */
  readonly scaleoutArpDrop?: number;
  /**
  * ARP PKT dropped due to scaleout hairpin checks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#scaleout_hairpin_arp_drop DataThunderSlbSwitchStats#scaleout_hairpin_arp_drop}
  */
  readonly scaleoutHairpinArpDrop?: number;
  /**
  * Self generated grat ARP PKT dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#self_grat_arp_drop DataThunderSlbSwitchStats#self_grat_arp_drop}
  */
  readonly selfGratArpDrop?: number;
  /**
  * Self generated grat ARP PKT dropped for NAT IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#self_grat_nat_ip_arp_drop DataThunderSlbSwitchStats#self_grat_nat_ip_arp_drop}
  */
  readonly selfGratNatIpArpDrop?: number;
  /**
  * Service Chain Packets Rcvd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#service_chain_rcvd DataThunderSlbSwitchStats#service_chain_rcvd}
  */
  readonly serviceChainRcvd?: number;
  /**
  * Service Chain Packets Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#service_chain_sent DataThunderSlbSwitchStats#service_chain_sent}
  */
  readonly serviceChainSent?: number;
  /**
  * Shared IP mode non ctrl packet to linux drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#sp_non_ctrl_pkt_drop DataThunderSlbSwitchStats#sp_non_ctrl_pkt_drop}
  */
  readonly spNonCtrlPktDrop?: number;
  /**
  * SPORT Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#sport_drop DataThunderSlbSwitchStats#sport_drop}
  */
  readonly sportDrop?: number;
  /**
  * TLS12-Request-Per-Sec Limit Drop at ingress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#tls12_drop_req DataThunderSlbSwitchStats#tls12_drop_req}
  */
  readonly tls12DropReq?: number;
  /**
  * TLS12-Request-Per-Sec Limit ignored packets count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#tls12_ignore_req DataThunderSlbSwitchStats#tls12_ignore_req}
  */
  readonly tls12IgnoreReq?: number;
  /**
  * TLS12--TLS13-Request-Per-Sec Limit Drop at ingress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#tls12_tls13_drop_req DataThunderSlbSwitchStats#tls12_tls13_drop_req}
  */
  readonly tls12Tls13DropReq?: number;
  /**
  * TLS12-TLS13-Request-Per-Sec Limit ignored packets count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#tls12_tls13_ignore_req DataThunderSlbSwitchStats#tls12_tls13_ignore_req}
  */
  readonly tls12Tls13IgnoreReq?: number;
  /**
  * TLS13-Request-Per-Sec Limit Drop at ingress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#tls13_drop_req DataThunderSlbSwitchStats#tls13_drop_req}
  */
  readonly tls13DropReq?: number;
  /**
  * TLS13-Request-Per-Sec Limit ignored packets count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#tls13_ignore_req DataThunderSlbSwitchStats#tls13_ignore_req}
  */
  readonly tls13IgnoreReq?: number;
  /**
  * TTL Exceeded Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#ttl_exceeded_drop DataThunderSlbSwitchStats#ttl_exceeded_drop}
  */
  readonly ttlExceededDrop?: number;
  /**
  * Unknown Prot Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#unknown_prot_drop DataThunderSlbSwitchStats#unknown_prot_drop}
  */
  readonly unknownProtDrop?: number;
  /**
  * Unnumbered NAT error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#unnumbered_nat_error DataThunderSlbSwitchStats#unnumbered_nat_error}
  */
  readonly unnumberedNatError?: number;
  /**
  * Unsupported protocol for unnumbered
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#unnumbered_unsupported_drop DataThunderSlbSwitchStats#unnumbered_unsupported_drop}
  */
  readonly unnumberedUnsupportedDrop?: number;
  /**
  * URPF check packet drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#urpf_pkt_drop DataThunderSlbSwitchStats#urpf_pkt_drop}
  */
  readonly urpfPktDrop?: number;
  /**
  * ARP PKT dropped due to virtual IP not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#virtual_ip_not_found_arp_drop DataThunderSlbSwitchStats#virtual_ip_not_found_arp_drop}
  */
  readonly virtualIpNotFoundArpDrop?: number;
  /**
  * VLAN Flood
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#vlan_flood DataThunderSlbSwitchStats#vlan_flood}
  */
  readonly vlanFlood?: number;
}

export function dataThunderSlbSwitchStatsStatsToTerraform(struct?: DataThunderSlbSwitchStatsStatsOutputReference | DataThunderSlbSwitchStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_deny: cdktf.numberToTerraform(struct!.aclDeny),
    badpkt_drop: cdktf.numberToTerraform(struct!.badpktDrop),
    bpdu_rcvd: cdktf.numberToTerraform(struct!.bpduRcvd),
    bpdu_sent: cdktf.numberToTerraform(struct!.bpduSent),
    bw_ignore_limit: cdktf.numberToTerraform(struct!.bwIgnoreLimit),
    bwl_drop: cdktf.numberToTerraform(struct!.bwlDrop),
    closed_port_syn_drop: cdktf.numberToTerraform(struct!.closedPortSynDrop),
    ctrl_syn_rate_drop: cdktf.numberToTerraform(struct!.ctrlSynRateDrop),
    dev_based_arp_drop: cdktf.numberToTerraform(struct!.devBasedArpDrop),
    dev_link_down_arp_drop: cdktf.numberToTerraform(struct!.devLinkDownArpDrop),
    fpga_error_pkt1: cdktf.numberToTerraform(struct!.fpgaErrorPkt1),
    fpga_error_pkt2: cdktf.numberToTerraform(struct!.fpgaErrorPkt2),
    fw_smp_zone_mismatch: cdktf.numberToTerraform(struct!.fwSmpZoneMismatch),
    fwlb: cdktf.numberToTerraform(struct!.fwlb),
    inactive_nat_pool_arp_drop: cdktf.numberToTerraform(struct!.inactiveNatPoolArpDrop),
    inactive_static_nat_pool_arp_drop: cdktf.numberToTerraform(struct!.inactiveStaticNatPoolArpDrop),
    incorrect_len_drop: cdktf.numberToTerraform(struct!.incorrectLenDrop),
    invalid_rx_arp_pkt: cdktf.numberToTerraform(struct!.invalidRxArpPkt),
    invalid_sender_mac_arp_drop: cdktf.numberToTerraform(struct!.invalidSenderMacArpDrop),
    ip_defrag: cdktf.numberToTerraform(struct!.ipDefrag),
    ip_defrag_invalid_len: cdktf.numberToTerraform(struct!.ipDefragInvalidLen),
    ip_frag_oversize: cdktf.numberToTerraform(struct!.ipFragOversize),
    ip_frag_sent: cdktf.numberToTerraform(struct!.ipFragSent),
    ip_frag_too_many: cdktf.numberToTerraform(struct!.ipFragTooMany),
    ip_icmp_error_drop: cdktf.numberToTerraform(struct!.ipIcmpErrorDrop),
    ip_not_found_arp_drop: cdktf.numberToTerraform(struct!.ipNotFoundArpDrop),
    ipfrag_esp: cdktf.numberToTerraform(struct!.ipfragEsp),
    ipfrag_icmp: cdktf.numberToTerraform(struct!.ipfragIcmp),
    ipfrag_ipip_dropped: cdktf.numberToTerraform(struct!.ipfragIpipDropped),
    ipfrag_ospf: cdktf.numberToTerraform(struct!.ipfragOspf),
    ipfrag_overlap: cdktf.numberToTerraform(struct!.ipfragOverlap),
    ipfrag_overload: cdktf.numberToTerraform(struct!.ipfragOverload),
    ipfrag_reasmfails: cdktf.numberToTerraform(struct!.ipfragReasmfails),
    ipfrag_reasmoks: cdktf.numberToTerraform(struct!.ipfragReasmoks),
    ipfrag_tcp: cdktf.numberToTerraform(struct!.ipfragTcp),
    ipfrag_tcp_dropped: cdktf.numberToTerraform(struct!.ipfragTcpDropped),
    ipfrag_timeout: cdktf.numberToTerraform(struct!.ipfragTimeout),
    ipfrag_udp: cdktf.numberToTerraform(struct!.ipfragUdp),
    ipfrag_udp_dropped: cdktf.numberToTerraform(struct!.ipfragUdpDropped),
    ipipv6_jumbo_frag_drop: cdktf.numberToTerraform(struct!.ipipv6JumboFragDrop),
    ipsec_drop: cdktf.numberToTerraform(struct!.ipsecDrop),
    ipv4_frag_6rd_drop: cdktf.numberToTerraform(struct!.ipv4Frag6RdDrop),
    ipv4_frag_6rd_ok: cdktf.numberToTerraform(struct!.ipv4Frag6RdOk),
    ipv4_noroute_drop: cdktf.numberToTerraform(struct!.ipv4NorouteDrop),
    ipv4_novlanfwd_drop: cdktf.numberToTerraform(struct!.ipv4NovlanfwdDrop),
    ipv4_rpf_drop: cdktf.numberToTerraform(struct!.ipv4RpfDrop),
    ipv4_src_routed_pkt_drop: cdktf.numberToTerraform(struct!.ipv4SrcRoutedPktDrop),
    ipv6_jumbo_frag_drop: cdktf.numberToTerraform(struct!.ipv6JumboFragDrop),
    ipv6_ndisc_dad_adverts: cdktf.numberToTerraform(struct!.ipv6NdiscDadAdverts),
    ipv6_ndisc_dad_prefix_mismatch_drop: cdktf.numberToTerraform(struct!.ipv6NdiscDadPrefixMismatchDrop),
    ipv6_ndisc_dad_solicits: cdktf.numberToTerraform(struct!.ipv6NdiscDadSolicits),
    ipv6_ndisc_mac_changes: cdktf.numberToTerraform(struct!.ipv6NdiscMacChanges),
    ipv6_ndisc_out_of_memory: cdktf.numberToTerraform(struct!.ipv6NdiscOutOfMemory),
    ipv6_noroute_drop: cdktf.numberToTerraform(struct!.ipv6NorouteDrop),
    ipv6_novlanfwd_drop: cdktf.numberToTerraform(struct!.ipv6NovlanfwdDrop),
    ipv6_rpf_drop: cdktf.numberToTerraform(struct!.ipv6RpfDrop),
    ipv6_src_routed_pkt_drop: cdktf.numberToTerraform(struct!.ipv6SrcRoutedPktDrop),
    ipv6frag_esp: cdktf.numberToTerraform(struct!.ipv6FragEsp),
    ipv6frag_gre_dropped: cdktf.numberToTerraform(struct!.ipv6FragGreDropped),
    ipv6frag_icmp: cdktf.numberToTerraform(struct!.ipv6FragIcmp),
    ipv6frag_ipip_dropped: cdktf.numberToTerraform(struct!.ipv6FragIpipDropped),
    ipv6frag_ipip_ok: cdktf.numberToTerraform(struct!.ipv6FragIpipOk),
    ipv6frag_ospf: cdktf.numberToTerraform(struct!.ipv6FragOspf),
    ipv6frag_tcp: cdktf.numberToTerraform(struct!.ipv6FragTcp),
    ipv6frag_tcp_dropped: cdktf.numberToTerraform(struct!.ipv6FragTcpDropped),
    ipv6frag_udp: cdktf.numberToTerraform(struct!.ipv6FragUdp),
    ipv6frag_udp_dropped: cdktf.numberToTerraform(struct!.ipv6FragUdpDropped),
    jumbo_frag_drop: cdktf.numberToTerraform(struct!.jumboFragDrop),
    l2_def_vlan_drop: cdktf.numberToTerraform(struct!.l2DefVlanDrop),
    l2_forward: cdktf.numberToTerraform(struct!.l2Forward),
    l3_forward_ip: cdktf.numberToTerraform(struct!.l3ForwardIp),
    l3_forward_ipv6: cdktf.numberToTerraform(struct!.l3ForwardIpv6),
    l4_in_ctrl_cpu: cdktf.numberToTerraform(struct!.l4InCtrlCpu),
    l4_process: cdktf.numberToTerraform(struct!.l4Process),
    lacp_tx_intf_err_drop: cdktf.numberToTerraform(struct!.lacpTxIntfErrDrop),
    licexpire_drop: cdktf.numberToTerraform(struct!.licexpireDrop),
    linkdown_drop: cdktf.numberToTerraform(struct!.linkdownDrop),
    mac_movement: cdktf.numberToTerraform(struct!.macMovement),
    max_arp_drop: cdktf.numberToTerraform(struct!.maxArpDrop),
    mgmt_svc_drop: cdktf.numberToTerraform(struct!.mgmtSvcDrop),
    no_ip_drop: cdktf.numberToTerraform(struct!.noIpDrop),
    ppsl_drop_egr: cdktf.numberToTerraform(struct!.ppslDropEgr),
    ppsl_drop_ing: cdktf.numberToTerraform(struct!.ppslDropIng),
    ppsl_ignore_limit: cdktf.numberToTerraform(struct!.ppslIgnoreLimit),
    prot_down_drop: cdktf.numberToTerraform(struct!.protDownDrop),
    redirect_fwd_fail: cdktf.numberToTerraform(struct!.redirectFwdFail),
    redirect_fwd_sent: cdktf.numberToTerraform(struct!.redirectFwdSent),
    redirect_rev_fail: cdktf.numberToTerraform(struct!.redirectRevFail),
    redirect_rev_sent: cdktf.numberToTerraform(struct!.redirectRevSent),
    redirect_setup_fail: cdktf.numberToTerraform(struct!.redirectSetupFail),
    rx_arp_req: cdktf.numberToTerraform(struct!.rxArpReq),
    rx_arp_resp: cdktf.numberToTerraform(struct!.rxArpResp),
    rx_kernel: cdktf.numberToTerraform(struct!.rxKernel),
    scaleout_arp_drop: cdktf.numberToTerraform(struct!.scaleoutArpDrop),
    scaleout_hairpin_arp_drop: cdktf.numberToTerraform(struct!.scaleoutHairpinArpDrop),
    self_grat_arp_drop: cdktf.numberToTerraform(struct!.selfGratArpDrop),
    self_grat_nat_ip_arp_drop: cdktf.numberToTerraform(struct!.selfGratNatIpArpDrop),
    service_chain_rcvd: cdktf.numberToTerraform(struct!.serviceChainRcvd),
    service_chain_sent: cdktf.numberToTerraform(struct!.serviceChainSent),
    sp_non_ctrl_pkt_drop: cdktf.numberToTerraform(struct!.spNonCtrlPktDrop),
    sport_drop: cdktf.numberToTerraform(struct!.sportDrop),
    tls12_drop_req: cdktf.numberToTerraform(struct!.tls12DropReq),
    tls12_ignore_req: cdktf.numberToTerraform(struct!.tls12IgnoreReq),
    tls12_tls13_drop_req: cdktf.numberToTerraform(struct!.tls12Tls13DropReq),
    tls12_tls13_ignore_req: cdktf.numberToTerraform(struct!.tls12Tls13IgnoreReq),
    tls13_drop_req: cdktf.numberToTerraform(struct!.tls13DropReq),
    tls13_ignore_req: cdktf.numberToTerraform(struct!.tls13IgnoreReq),
    ttl_exceeded_drop: cdktf.numberToTerraform(struct!.ttlExceededDrop),
    unknown_prot_drop: cdktf.numberToTerraform(struct!.unknownProtDrop),
    unnumbered_nat_error: cdktf.numberToTerraform(struct!.unnumberedNatError),
    unnumbered_unsupported_drop: cdktf.numberToTerraform(struct!.unnumberedUnsupportedDrop),
    urpf_pkt_drop: cdktf.numberToTerraform(struct!.urpfPktDrop),
    virtual_ip_not_found_arp_drop: cdktf.numberToTerraform(struct!.virtualIpNotFoundArpDrop),
    vlan_flood: cdktf.numberToTerraform(struct!.vlanFlood),
  }
}


export function dataThunderSlbSwitchStatsStatsToHclTerraform(struct?: DataThunderSlbSwitchStatsStatsOutputReference | DataThunderSlbSwitchStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_deny: {
      value: cdktf.numberToHclTerraform(struct!.aclDeny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    badpkt_drop: {
      value: cdktf.numberToHclTerraform(struct!.badpktDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bpdu_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.bpduRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bpdu_sent: {
      value: cdktf.numberToHclTerraform(struct!.bpduSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bw_ignore_limit: {
      value: cdktf.numberToHclTerraform(struct!.bwIgnoreLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bwl_drop: {
      value: cdktf.numberToHclTerraform(struct!.bwlDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    closed_port_syn_drop: {
      value: cdktf.numberToHclTerraform(struct!.closedPortSynDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ctrl_syn_rate_drop: {
      value: cdktf.numberToHclTerraform(struct!.ctrlSynRateDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dev_based_arp_drop: {
      value: cdktf.numberToHclTerraform(struct!.devBasedArpDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dev_link_down_arp_drop: {
      value: cdktf.numberToHclTerraform(struct!.devLinkDownArpDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fpga_error_pkt1: {
      value: cdktf.numberToHclTerraform(struct!.fpgaErrorPkt1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fpga_error_pkt2: {
      value: cdktf.numberToHclTerraform(struct!.fpgaErrorPkt2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fw_smp_zone_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.fwSmpZoneMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwlb: {
      value: cdktf.numberToHclTerraform(struct!.fwlb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inactive_nat_pool_arp_drop: {
      value: cdktf.numberToHclTerraform(struct!.inactiveNatPoolArpDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inactive_static_nat_pool_arp_drop: {
      value: cdktf.numberToHclTerraform(struct!.inactiveStaticNatPoolArpDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    incorrect_len_drop: {
      value: cdktf.numberToHclTerraform(struct!.incorrectLenDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_rx_arp_pkt: {
      value: cdktf.numberToHclTerraform(struct!.invalidRxArpPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_sender_mac_arp_drop: {
      value: cdktf.numberToHclTerraform(struct!.invalidSenderMacArpDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_defrag: {
      value: cdktf.numberToHclTerraform(struct!.ipDefrag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_defrag_invalid_len: {
      value: cdktf.numberToHclTerraform(struct!.ipDefragInvalidLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_frag_oversize: {
      value: cdktf.numberToHclTerraform(struct!.ipFragOversize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_frag_sent: {
      value: cdktf.numberToHclTerraform(struct!.ipFragSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_frag_too_many: {
      value: cdktf.numberToHclTerraform(struct!.ipFragTooMany),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_icmp_error_drop: {
      value: cdktf.numberToHclTerraform(struct!.ipIcmpErrorDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_not_found_arp_drop: {
      value: cdktf.numberToHclTerraform(struct!.ipNotFoundArpDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipfrag_esp: {
      value: cdktf.numberToHclTerraform(struct!.ipfragEsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipfrag_icmp: {
      value: cdktf.numberToHclTerraform(struct!.ipfragIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipfrag_ipip_dropped: {
      value: cdktf.numberToHclTerraform(struct!.ipfragIpipDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipfrag_ospf: {
      value: cdktf.numberToHclTerraform(struct!.ipfragOspf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipfrag_overlap: {
      value: cdktf.numberToHclTerraform(struct!.ipfragOverlap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipfrag_overload: {
      value: cdktf.numberToHclTerraform(struct!.ipfragOverload),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipfrag_reasmfails: {
      value: cdktf.numberToHclTerraform(struct!.ipfragReasmfails),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipfrag_reasmoks: {
      value: cdktf.numberToHclTerraform(struct!.ipfragReasmoks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipfrag_tcp: {
      value: cdktf.numberToHclTerraform(struct!.ipfragTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipfrag_tcp_dropped: {
      value: cdktf.numberToHclTerraform(struct!.ipfragTcpDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipfrag_timeout: {
      value: cdktf.numberToHclTerraform(struct!.ipfragTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipfrag_udp: {
      value: cdktf.numberToHclTerraform(struct!.ipfragUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipfrag_udp_dropped: {
      value: cdktf.numberToHclTerraform(struct!.ipfragUdpDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipipv6_jumbo_frag_drop: {
      value: cdktf.numberToHclTerraform(struct!.ipipv6JumboFragDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_drop: {
      value: cdktf.numberToHclTerraform(struct!.ipsecDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_frag_6rd_drop: {
      value: cdktf.numberToHclTerraform(struct!.ipv4Frag6RdDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_frag_6rd_ok: {
      value: cdktf.numberToHclTerraform(struct!.ipv4Frag6RdOk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_noroute_drop: {
      value: cdktf.numberToHclTerraform(struct!.ipv4NorouteDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_novlanfwd_drop: {
      value: cdktf.numberToHclTerraform(struct!.ipv4NovlanfwdDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_rpf_drop: {
      value: cdktf.numberToHclTerraform(struct!.ipv4RpfDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_src_routed_pkt_drop: {
      value: cdktf.numberToHclTerraform(struct!.ipv4SrcRoutedPktDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_jumbo_frag_drop: {
      value: cdktf.numberToHclTerraform(struct!.ipv6JumboFragDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_ndisc_dad_adverts: {
      value: cdktf.numberToHclTerraform(struct!.ipv6NdiscDadAdverts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_ndisc_dad_prefix_mismatch_drop: {
      value: cdktf.numberToHclTerraform(struct!.ipv6NdiscDadPrefixMismatchDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_ndisc_dad_solicits: {
      value: cdktf.numberToHclTerraform(struct!.ipv6NdiscDadSolicits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_ndisc_mac_changes: {
      value: cdktf.numberToHclTerraform(struct!.ipv6NdiscMacChanges),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_ndisc_out_of_memory: {
      value: cdktf.numberToHclTerraform(struct!.ipv6NdiscOutOfMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_noroute_drop: {
      value: cdktf.numberToHclTerraform(struct!.ipv6NorouteDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_novlanfwd_drop: {
      value: cdktf.numberToHclTerraform(struct!.ipv6NovlanfwdDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_rpf_drop: {
      value: cdktf.numberToHclTerraform(struct!.ipv6RpfDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_src_routed_pkt_drop: {
      value: cdktf.numberToHclTerraform(struct!.ipv6SrcRoutedPktDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6frag_esp: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FragEsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6frag_gre_dropped: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FragGreDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6frag_icmp: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FragIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6frag_ipip_dropped: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FragIpipDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6frag_ipip_ok: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FragIpipOk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6frag_ospf: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FragOspf),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6frag_tcp: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FragTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6frag_tcp_dropped: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FragTcpDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6frag_udp: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FragUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6frag_udp_dropped: {
      value: cdktf.numberToHclTerraform(struct!.ipv6FragUdpDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jumbo_frag_drop: {
      value: cdktf.numberToHclTerraform(struct!.jumboFragDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l2_def_vlan_drop: {
      value: cdktf.numberToHclTerraform(struct!.l2DefVlanDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l2_forward: {
      value: cdktf.numberToHclTerraform(struct!.l2Forward),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_forward_ip: {
      value: cdktf.numberToHclTerraform(struct!.l3ForwardIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_forward_ipv6: {
      value: cdktf.numberToHclTerraform(struct!.l3ForwardIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_in_ctrl_cpu: {
      value: cdktf.numberToHclTerraform(struct!.l4InCtrlCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_process: {
      value: cdktf.numberToHclTerraform(struct!.l4Process),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lacp_tx_intf_err_drop: {
      value: cdktf.numberToHclTerraform(struct!.lacpTxIntfErrDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    licexpire_drop: {
      value: cdktf.numberToHclTerraform(struct!.licexpireDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    linkdown_drop: {
      value: cdktf.numberToHclTerraform(struct!.linkdownDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mac_movement: {
      value: cdktf.numberToHclTerraform(struct!.macMovement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_arp_drop: {
      value: cdktf.numberToHclTerraform(struct!.maxArpDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mgmt_svc_drop: {
      value: cdktf.numberToHclTerraform(struct!.mgmtSvcDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_ip_drop: {
      value: cdktf.numberToHclTerraform(struct!.noIpDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ppsl_drop_egr: {
      value: cdktf.numberToHclTerraform(struct!.ppslDropEgr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ppsl_drop_ing: {
      value: cdktf.numberToHclTerraform(struct!.ppslDropIng),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ppsl_ignore_limit: {
      value: cdktf.numberToHclTerraform(struct!.ppslIgnoreLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prot_down_drop: {
      value: cdktf.numberToHclTerraform(struct!.protDownDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redirect_fwd_fail: {
      value: cdktf.numberToHclTerraform(struct!.redirectFwdFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redirect_fwd_sent: {
      value: cdktf.numberToHclTerraform(struct!.redirectFwdSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redirect_rev_fail: {
      value: cdktf.numberToHclTerraform(struct!.redirectRevFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redirect_rev_sent: {
      value: cdktf.numberToHclTerraform(struct!.redirectRevSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    redirect_setup_fail: {
      value: cdktf.numberToHclTerraform(struct!.redirectSetupFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx_arp_req: {
      value: cdktf.numberToHclTerraform(struct!.rxArpReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx_arp_resp: {
      value: cdktf.numberToHclTerraform(struct!.rxArpResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx_kernel: {
      value: cdktf.numberToHclTerraform(struct!.rxKernel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scaleout_arp_drop: {
      value: cdktf.numberToHclTerraform(struct!.scaleoutArpDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scaleout_hairpin_arp_drop: {
      value: cdktf.numberToHclTerraform(struct!.scaleoutHairpinArpDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    self_grat_arp_drop: {
      value: cdktf.numberToHclTerraform(struct!.selfGratArpDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    self_grat_nat_ip_arp_drop: {
      value: cdktf.numberToHclTerraform(struct!.selfGratNatIpArpDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_chain_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.serviceChainRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_chain_sent: {
      value: cdktf.numberToHclTerraform(struct!.serviceChainSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sp_non_ctrl_pkt_drop: {
      value: cdktf.numberToHclTerraform(struct!.spNonCtrlPktDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sport_drop: {
      value: cdktf.numberToHclTerraform(struct!.sportDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls12_drop_req: {
      value: cdktf.numberToHclTerraform(struct!.tls12DropReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls12_ignore_req: {
      value: cdktf.numberToHclTerraform(struct!.tls12IgnoreReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls12_tls13_drop_req: {
      value: cdktf.numberToHclTerraform(struct!.tls12Tls13DropReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls12_tls13_ignore_req: {
      value: cdktf.numberToHclTerraform(struct!.tls12Tls13IgnoreReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls13_drop_req: {
      value: cdktf.numberToHclTerraform(struct!.tls13DropReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls13_ignore_req: {
      value: cdktf.numberToHclTerraform(struct!.tls13IgnoreReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl_exceeded_drop: {
      value: cdktf.numberToHclTerraform(struct!.ttlExceededDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_prot_drop: {
      value: cdktf.numberToHclTerraform(struct!.unknownProtDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unnumbered_nat_error: {
      value: cdktf.numberToHclTerraform(struct!.unnumberedNatError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unnumbered_unsupported_drop: {
      value: cdktf.numberToHclTerraform(struct!.unnumberedUnsupportedDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    urpf_pkt_drop: {
      value: cdktf.numberToHclTerraform(struct!.urpfPktDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_ip_not_found_arp_drop: {
      value: cdktf.numberToHclTerraform(struct!.virtualIpNotFoundArpDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vlan_flood: {
      value: cdktf.numberToHclTerraform(struct!.vlanFlood),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSwitchStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbSwitchStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclDeny !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclDeny = this._aclDeny;
    }
    if (this._badpktDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.badpktDrop = this._badpktDrop;
    }
    if (this._bpduRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpduRcvd = this._bpduRcvd;
    }
    if (this._bpduSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.bpduSent = this._bpduSent;
    }
    if (this._bwIgnoreLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwIgnoreLimit = this._bwIgnoreLimit;
    }
    if (this._bwlDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.bwlDrop = this._bwlDrop;
    }
    if (this._closedPortSynDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.closedPortSynDrop = this._closedPortSynDrop;
    }
    if (this._ctrlSynRateDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ctrlSynRateDrop = this._ctrlSynRateDrop;
    }
    if (this._devBasedArpDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.devBasedArpDrop = this._devBasedArpDrop;
    }
    if (this._devLinkDownArpDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.devLinkDownArpDrop = this._devLinkDownArpDrop;
    }
    if (this._fpgaErrorPkt1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fpgaErrorPkt1 = this._fpgaErrorPkt1;
    }
    if (this._fpgaErrorPkt2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.fpgaErrorPkt2 = this._fpgaErrorPkt2;
    }
    if (this._fwSmpZoneMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwSmpZoneMismatch = this._fwSmpZoneMismatch;
    }
    if (this._fwlb !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwlb = this._fwlb;
    }
    if (this._inactiveNatPoolArpDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactiveNatPoolArpDrop = this._inactiveNatPoolArpDrop;
    }
    if (this._inactiveStaticNatPoolArpDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactiveStaticNatPoolArpDrop = this._inactiveStaticNatPoolArpDrop;
    }
    if (this._incorrectLenDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.incorrectLenDrop = this._incorrectLenDrop;
    }
    if (this._invalidRxArpPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidRxArpPkt = this._invalidRxArpPkt;
    }
    if (this._invalidSenderMacArpDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidSenderMacArpDrop = this._invalidSenderMacArpDrop;
    }
    if (this._ipDefrag !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipDefrag = this._ipDefrag;
    }
    if (this._ipDefragInvalidLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipDefragInvalidLen = this._ipDefragInvalidLen;
    }
    if (this._ipFragOversize !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFragOversize = this._ipFragOversize;
    }
    if (this._ipFragSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFragSent = this._ipFragSent;
    }
    if (this._ipFragTooMany !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFragTooMany = this._ipFragTooMany;
    }
    if (this._ipIcmpErrorDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipIcmpErrorDrop = this._ipIcmpErrorDrop;
    }
    if (this._ipNotFoundArpDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNotFoundArpDrop = this._ipNotFoundArpDrop;
    }
    if (this._ipfragEsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipfragEsp = this._ipfragEsp;
    }
    if (this._ipfragIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipfragIcmp = this._ipfragIcmp;
    }
    if (this._ipfragIpipDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipfragIpipDropped = this._ipfragIpipDropped;
    }
    if (this._ipfragOspf !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipfragOspf = this._ipfragOspf;
    }
    if (this._ipfragOverlap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipfragOverlap = this._ipfragOverlap;
    }
    if (this._ipfragOverload !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipfragOverload = this._ipfragOverload;
    }
    if (this._ipfragReasmfails !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipfragReasmfails = this._ipfragReasmfails;
    }
    if (this._ipfragReasmoks !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipfragReasmoks = this._ipfragReasmoks;
    }
    if (this._ipfragTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipfragTcp = this._ipfragTcp;
    }
    if (this._ipfragTcpDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipfragTcpDropped = this._ipfragTcpDropped;
    }
    if (this._ipfragTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipfragTimeout = this._ipfragTimeout;
    }
    if (this._ipfragUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipfragUdp = this._ipfragUdp;
    }
    if (this._ipfragUdpDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipfragUdpDropped = this._ipfragUdpDropped;
    }
    if (this._ipipv6JumboFragDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipipv6JumboFragDrop = this._ipipv6JumboFragDrop;
    }
    if (this._ipsecDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecDrop = this._ipsecDrop;
    }
    if (this._ipv4Frag6RdDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Frag6RdDrop = this._ipv4Frag6RdDrop;
    }
    if (this._ipv4Frag6RdOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Frag6RdOk = this._ipv4Frag6RdOk;
    }
    if (this._ipv4NorouteDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4NorouteDrop = this._ipv4NorouteDrop;
    }
    if (this._ipv4NovlanfwdDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4NovlanfwdDrop = this._ipv4NovlanfwdDrop;
    }
    if (this._ipv4RpfDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4RpfDrop = this._ipv4RpfDrop;
    }
    if (this._ipv4SrcRoutedPktDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4SrcRoutedPktDrop = this._ipv4SrcRoutedPktDrop;
    }
    if (this._ipv6JumboFragDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6JumboFragDrop = this._ipv6JumboFragDrop;
    }
    if (this._ipv6NdiscDadAdverts !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6NdiscDadAdverts = this._ipv6NdiscDadAdverts;
    }
    if (this._ipv6NdiscDadPrefixMismatchDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6NdiscDadPrefixMismatchDrop = this._ipv6NdiscDadPrefixMismatchDrop;
    }
    if (this._ipv6NdiscDadSolicits !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6NdiscDadSolicits = this._ipv6NdiscDadSolicits;
    }
    if (this._ipv6NdiscMacChanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6NdiscMacChanges = this._ipv6NdiscMacChanges;
    }
    if (this._ipv6NdiscOutOfMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6NdiscOutOfMemory = this._ipv6NdiscOutOfMemory;
    }
    if (this._ipv6NorouteDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6NorouteDrop = this._ipv6NorouteDrop;
    }
    if (this._ipv6NovlanfwdDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6NovlanfwdDrop = this._ipv6NovlanfwdDrop;
    }
    if (this._ipv6RpfDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6RpfDrop = this._ipv6RpfDrop;
    }
    if (this._ipv6SrcRoutedPktDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6SrcRoutedPktDrop = this._ipv6SrcRoutedPktDrop;
    }
    if (this._ipv6FragEsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FragEsp = this._ipv6FragEsp;
    }
    if (this._ipv6FragGreDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FragGreDropped = this._ipv6FragGreDropped;
    }
    if (this._ipv6FragIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FragIcmp = this._ipv6FragIcmp;
    }
    if (this._ipv6FragIpipDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FragIpipDropped = this._ipv6FragIpipDropped;
    }
    if (this._ipv6FragIpipOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FragIpipOk = this._ipv6FragIpipOk;
    }
    if (this._ipv6FragOspf !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FragOspf = this._ipv6FragOspf;
    }
    if (this._ipv6FragTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FragTcp = this._ipv6FragTcp;
    }
    if (this._ipv6FragTcpDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FragTcpDropped = this._ipv6FragTcpDropped;
    }
    if (this._ipv6FragUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FragUdp = this._ipv6FragUdp;
    }
    if (this._ipv6FragUdpDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6FragUdpDropped = this._ipv6FragUdpDropped;
    }
    if (this._jumboFragDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.jumboFragDrop = this._jumboFragDrop;
    }
    if (this._l2DefVlanDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2DefVlanDrop = this._l2DefVlanDrop;
    }
    if (this._l2Forward !== undefined) {
      hasAnyValues = true;
      internalValueResult.l2Forward = this._l2Forward;
    }
    if (this._l3ForwardIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3ForwardIp = this._l3ForwardIp;
    }
    if (this._l3ForwardIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3ForwardIpv6 = this._l3ForwardIpv6;
    }
    if (this._l4InCtrlCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4InCtrlCpu = this._l4InCtrlCpu;
    }
    if (this._l4Process !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Process = this._l4Process;
    }
    if (this._lacpTxIntfErrDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.lacpTxIntfErrDrop = this._lacpTxIntfErrDrop;
    }
    if (this._licexpireDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.licexpireDrop = this._licexpireDrop;
    }
    if (this._linkdownDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkdownDrop = this._linkdownDrop;
    }
    if (this._macMovement !== undefined) {
      hasAnyValues = true;
      internalValueResult.macMovement = this._macMovement;
    }
    if (this._maxArpDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxArpDrop = this._maxArpDrop;
    }
    if (this._mgmtSvcDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtSvcDrop = this._mgmtSvcDrop;
    }
    if (this._noIpDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpDrop = this._noIpDrop;
    }
    if (this._ppslDropEgr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ppslDropEgr = this._ppslDropEgr;
    }
    if (this._ppslDropIng !== undefined) {
      hasAnyValues = true;
      internalValueResult.ppslDropIng = this._ppslDropIng;
    }
    if (this._ppslIgnoreLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.ppslIgnoreLimit = this._ppslIgnoreLimit;
    }
    if (this._protDownDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.protDownDrop = this._protDownDrop;
    }
    if (this._redirectFwdFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectFwdFail = this._redirectFwdFail;
    }
    if (this._redirectFwdSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectFwdSent = this._redirectFwdSent;
    }
    if (this._redirectRevFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectRevFail = this._redirectRevFail;
    }
    if (this._redirectRevSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectRevSent = this._redirectRevSent;
    }
    if (this._redirectSetupFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectSetupFail = this._redirectSetupFail;
    }
    if (this._rxArpReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxArpReq = this._rxArpReq;
    }
    if (this._rxArpResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxArpResp = this._rxArpResp;
    }
    if (this._rxKernel !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxKernel = this._rxKernel;
    }
    if (this._scaleoutArpDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleoutArpDrop = this._scaleoutArpDrop;
    }
    if (this._scaleoutHairpinArpDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.scaleoutHairpinArpDrop = this._scaleoutHairpinArpDrop;
    }
    if (this._selfGratArpDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfGratArpDrop = this._selfGratArpDrop;
    }
    if (this._selfGratNatIpArpDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfGratNatIpArpDrop = this._selfGratNatIpArpDrop;
    }
    if (this._serviceChainRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceChainRcvd = this._serviceChainRcvd;
    }
    if (this._serviceChainSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceChainSent = this._serviceChainSent;
    }
    if (this._spNonCtrlPktDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.spNonCtrlPktDrop = this._spNonCtrlPktDrop;
    }
    if (this._sportDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.sportDrop = this._sportDrop;
    }
    if (this._tls12DropReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls12DropReq = this._tls12DropReq;
    }
    if (this._tls12IgnoreReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls12IgnoreReq = this._tls12IgnoreReq;
    }
    if (this._tls12Tls13DropReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls12Tls13DropReq = this._tls12Tls13DropReq;
    }
    if (this._tls12Tls13IgnoreReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls12Tls13IgnoreReq = this._tls12Tls13IgnoreReq;
    }
    if (this._tls13DropReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls13DropReq = this._tls13DropReq;
    }
    if (this._tls13IgnoreReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls13IgnoreReq = this._tls13IgnoreReq;
    }
    if (this._ttlExceededDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlExceededDrop = this._ttlExceededDrop;
    }
    if (this._unknownProtDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownProtDrop = this._unknownProtDrop;
    }
    if (this._unnumberedNatError !== undefined) {
      hasAnyValues = true;
      internalValueResult.unnumberedNatError = this._unnumberedNatError;
    }
    if (this._unnumberedUnsupportedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.unnumberedUnsupportedDrop = this._unnumberedUnsupportedDrop;
    }
    if (this._urpfPktDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.urpfPktDrop = this._urpfPktDrop;
    }
    if (this._virtualIpNotFoundArpDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualIpNotFoundArpDrop = this._virtualIpNotFoundArpDrop;
    }
    if (this._vlanFlood !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanFlood = this._vlanFlood;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSwitchStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._aclDeny = undefined;
      this._badpktDrop = undefined;
      this._bpduRcvd = undefined;
      this._bpduSent = undefined;
      this._bwIgnoreLimit = undefined;
      this._bwlDrop = undefined;
      this._closedPortSynDrop = undefined;
      this._ctrlSynRateDrop = undefined;
      this._devBasedArpDrop = undefined;
      this._devLinkDownArpDrop = undefined;
      this._fpgaErrorPkt1 = undefined;
      this._fpgaErrorPkt2 = undefined;
      this._fwSmpZoneMismatch = undefined;
      this._fwlb = undefined;
      this._inactiveNatPoolArpDrop = undefined;
      this._inactiveStaticNatPoolArpDrop = undefined;
      this._incorrectLenDrop = undefined;
      this._invalidRxArpPkt = undefined;
      this._invalidSenderMacArpDrop = undefined;
      this._ipDefrag = undefined;
      this._ipDefragInvalidLen = undefined;
      this._ipFragOversize = undefined;
      this._ipFragSent = undefined;
      this._ipFragTooMany = undefined;
      this._ipIcmpErrorDrop = undefined;
      this._ipNotFoundArpDrop = undefined;
      this._ipfragEsp = undefined;
      this._ipfragIcmp = undefined;
      this._ipfragIpipDropped = undefined;
      this._ipfragOspf = undefined;
      this._ipfragOverlap = undefined;
      this._ipfragOverload = undefined;
      this._ipfragReasmfails = undefined;
      this._ipfragReasmoks = undefined;
      this._ipfragTcp = undefined;
      this._ipfragTcpDropped = undefined;
      this._ipfragTimeout = undefined;
      this._ipfragUdp = undefined;
      this._ipfragUdpDropped = undefined;
      this._ipipv6JumboFragDrop = undefined;
      this._ipsecDrop = undefined;
      this._ipv4Frag6RdDrop = undefined;
      this._ipv4Frag6RdOk = undefined;
      this._ipv4NorouteDrop = undefined;
      this._ipv4NovlanfwdDrop = undefined;
      this._ipv4RpfDrop = undefined;
      this._ipv4SrcRoutedPktDrop = undefined;
      this._ipv6JumboFragDrop = undefined;
      this._ipv6NdiscDadAdverts = undefined;
      this._ipv6NdiscDadPrefixMismatchDrop = undefined;
      this._ipv6NdiscDadSolicits = undefined;
      this._ipv6NdiscMacChanges = undefined;
      this._ipv6NdiscOutOfMemory = undefined;
      this._ipv6NorouteDrop = undefined;
      this._ipv6NovlanfwdDrop = undefined;
      this._ipv6RpfDrop = undefined;
      this._ipv6SrcRoutedPktDrop = undefined;
      this._ipv6FragEsp = undefined;
      this._ipv6FragGreDropped = undefined;
      this._ipv6FragIcmp = undefined;
      this._ipv6FragIpipDropped = undefined;
      this._ipv6FragIpipOk = undefined;
      this._ipv6FragOspf = undefined;
      this._ipv6FragTcp = undefined;
      this._ipv6FragTcpDropped = undefined;
      this._ipv6FragUdp = undefined;
      this._ipv6FragUdpDropped = undefined;
      this._jumboFragDrop = undefined;
      this._l2DefVlanDrop = undefined;
      this._l2Forward = undefined;
      this._l3ForwardIp = undefined;
      this._l3ForwardIpv6 = undefined;
      this._l4InCtrlCpu = undefined;
      this._l4Process = undefined;
      this._lacpTxIntfErrDrop = undefined;
      this._licexpireDrop = undefined;
      this._linkdownDrop = undefined;
      this._macMovement = undefined;
      this._maxArpDrop = undefined;
      this._mgmtSvcDrop = undefined;
      this._noIpDrop = undefined;
      this._ppslDropEgr = undefined;
      this._ppslDropIng = undefined;
      this._ppslIgnoreLimit = undefined;
      this._protDownDrop = undefined;
      this._redirectFwdFail = undefined;
      this._redirectFwdSent = undefined;
      this._redirectRevFail = undefined;
      this._redirectRevSent = undefined;
      this._redirectSetupFail = undefined;
      this._rxArpReq = undefined;
      this._rxArpResp = undefined;
      this._rxKernel = undefined;
      this._scaleoutArpDrop = undefined;
      this._scaleoutHairpinArpDrop = undefined;
      this._selfGratArpDrop = undefined;
      this._selfGratNatIpArpDrop = undefined;
      this._serviceChainRcvd = undefined;
      this._serviceChainSent = undefined;
      this._spNonCtrlPktDrop = undefined;
      this._sportDrop = undefined;
      this._tls12DropReq = undefined;
      this._tls12IgnoreReq = undefined;
      this._tls12Tls13DropReq = undefined;
      this._tls12Tls13IgnoreReq = undefined;
      this._tls13DropReq = undefined;
      this._tls13IgnoreReq = undefined;
      this._ttlExceededDrop = undefined;
      this._unknownProtDrop = undefined;
      this._unnumberedNatError = undefined;
      this._unnumberedUnsupportedDrop = undefined;
      this._urpfPktDrop = undefined;
      this._virtualIpNotFoundArpDrop = undefined;
      this._vlanFlood = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._aclDeny = value.aclDeny;
      this._badpktDrop = value.badpktDrop;
      this._bpduRcvd = value.bpduRcvd;
      this._bpduSent = value.bpduSent;
      this._bwIgnoreLimit = value.bwIgnoreLimit;
      this._bwlDrop = value.bwlDrop;
      this._closedPortSynDrop = value.closedPortSynDrop;
      this._ctrlSynRateDrop = value.ctrlSynRateDrop;
      this._devBasedArpDrop = value.devBasedArpDrop;
      this._devLinkDownArpDrop = value.devLinkDownArpDrop;
      this._fpgaErrorPkt1 = value.fpgaErrorPkt1;
      this._fpgaErrorPkt2 = value.fpgaErrorPkt2;
      this._fwSmpZoneMismatch = value.fwSmpZoneMismatch;
      this._fwlb = value.fwlb;
      this._inactiveNatPoolArpDrop = value.inactiveNatPoolArpDrop;
      this._inactiveStaticNatPoolArpDrop = value.inactiveStaticNatPoolArpDrop;
      this._incorrectLenDrop = value.incorrectLenDrop;
      this._invalidRxArpPkt = value.invalidRxArpPkt;
      this._invalidSenderMacArpDrop = value.invalidSenderMacArpDrop;
      this._ipDefrag = value.ipDefrag;
      this._ipDefragInvalidLen = value.ipDefragInvalidLen;
      this._ipFragOversize = value.ipFragOversize;
      this._ipFragSent = value.ipFragSent;
      this._ipFragTooMany = value.ipFragTooMany;
      this._ipIcmpErrorDrop = value.ipIcmpErrorDrop;
      this._ipNotFoundArpDrop = value.ipNotFoundArpDrop;
      this._ipfragEsp = value.ipfragEsp;
      this._ipfragIcmp = value.ipfragIcmp;
      this._ipfragIpipDropped = value.ipfragIpipDropped;
      this._ipfragOspf = value.ipfragOspf;
      this._ipfragOverlap = value.ipfragOverlap;
      this._ipfragOverload = value.ipfragOverload;
      this._ipfragReasmfails = value.ipfragReasmfails;
      this._ipfragReasmoks = value.ipfragReasmoks;
      this._ipfragTcp = value.ipfragTcp;
      this._ipfragTcpDropped = value.ipfragTcpDropped;
      this._ipfragTimeout = value.ipfragTimeout;
      this._ipfragUdp = value.ipfragUdp;
      this._ipfragUdpDropped = value.ipfragUdpDropped;
      this._ipipv6JumboFragDrop = value.ipipv6JumboFragDrop;
      this._ipsecDrop = value.ipsecDrop;
      this._ipv4Frag6RdDrop = value.ipv4Frag6RdDrop;
      this._ipv4Frag6RdOk = value.ipv4Frag6RdOk;
      this._ipv4NorouteDrop = value.ipv4NorouteDrop;
      this._ipv4NovlanfwdDrop = value.ipv4NovlanfwdDrop;
      this._ipv4RpfDrop = value.ipv4RpfDrop;
      this._ipv4SrcRoutedPktDrop = value.ipv4SrcRoutedPktDrop;
      this._ipv6JumboFragDrop = value.ipv6JumboFragDrop;
      this._ipv6NdiscDadAdverts = value.ipv6NdiscDadAdverts;
      this._ipv6NdiscDadPrefixMismatchDrop = value.ipv6NdiscDadPrefixMismatchDrop;
      this._ipv6NdiscDadSolicits = value.ipv6NdiscDadSolicits;
      this._ipv6NdiscMacChanges = value.ipv6NdiscMacChanges;
      this._ipv6NdiscOutOfMemory = value.ipv6NdiscOutOfMemory;
      this._ipv6NorouteDrop = value.ipv6NorouteDrop;
      this._ipv6NovlanfwdDrop = value.ipv6NovlanfwdDrop;
      this._ipv6RpfDrop = value.ipv6RpfDrop;
      this._ipv6SrcRoutedPktDrop = value.ipv6SrcRoutedPktDrop;
      this._ipv6FragEsp = value.ipv6FragEsp;
      this._ipv6FragGreDropped = value.ipv6FragGreDropped;
      this._ipv6FragIcmp = value.ipv6FragIcmp;
      this._ipv6FragIpipDropped = value.ipv6FragIpipDropped;
      this._ipv6FragIpipOk = value.ipv6FragIpipOk;
      this._ipv6FragOspf = value.ipv6FragOspf;
      this._ipv6FragTcp = value.ipv6FragTcp;
      this._ipv6FragTcpDropped = value.ipv6FragTcpDropped;
      this._ipv6FragUdp = value.ipv6FragUdp;
      this._ipv6FragUdpDropped = value.ipv6FragUdpDropped;
      this._jumboFragDrop = value.jumboFragDrop;
      this._l2DefVlanDrop = value.l2DefVlanDrop;
      this._l2Forward = value.l2Forward;
      this._l3ForwardIp = value.l3ForwardIp;
      this._l3ForwardIpv6 = value.l3ForwardIpv6;
      this._l4InCtrlCpu = value.l4InCtrlCpu;
      this._l4Process = value.l4Process;
      this._lacpTxIntfErrDrop = value.lacpTxIntfErrDrop;
      this._licexpireDrop = value.licexpireDrop;
      this._linkdownDrop = value.linkdownDrop;
      this._macMovement = value.macMovement;
      this._maxArpDrop = value.maxArpDrop;
      this._mgmtSvcDrop = value.mgmtSvcDrop;
      this._noIpDrop = value.noIpDrop;
      this._ppslDropEgr = value.ppslDropEgr;
      this._ppslDropIng = value.ppslDropIng;
      this._ppslIgnoreLimit = value.ppslIgnoreLimit;
      this._protDownDrop = value.protDownDrop;
      this._redirectFwdFail = value.redirectFwdFail;
      this._redirectFwdSent = value.redirectFwdSent;
      this._redirectRevFail = value.redirectRevFail;
      this._redirectRevSent = value.redirectRevSent;
      this._redirectSetupFail = value.redirectSetupFail;
      this._rxArpReq = value.rxArpReq;
      this._rxArpResp = value.rxArpResp;
      this._rxKernel = value.rxKernel;
      this._scaleoutArpDrop = value.scaleoutArpDrop;
      this._scaleoutHairpinArpDrop = value.scaleoutHairpinArpDrop;
      this._selfGratArpDrop = value.selfGratArpDrop;
      this._selfGratNatIpArpDrop = value.selfGratNatIpArpDrop;
      this._serviceChainRcvd = value.serviceChainRcvd;
      this._serviceChainSent = value.serviceChainSent;
      this._spNonCtrlPktDrop = value.spNonCtrlPktDrop;
      this._sportDrop = value.sportDrop;
      this._tls12DropReq = value.tls12DropReq;
      this._tls12IgnoreReq = value.tls12IgnoreReq;
      this._tls12Tls13DropReq = value.tls12Tls13DropReq;
      this._tls12Tls13IgnoreReq = value.tls12Tls13IgnoreReq;
      this._tls13DropReq = value.tls13DropReq;
      this._tls13IgnoreReq = value.tls13IgnoreReq;
      this._ttlExceededDrop = value.ttlExceededDrop;
      this._unknownProtDrop = value.unknownProtDrop;
      this._unnumberedNatError = value.unnumberedNatError;
      this._unnumberedUnsupportedDrop = value.unnumberedUnsupportedDrop;
      this._urpfPktDrop = value.urpfPktDrop;
      this._virtualIpNotFoundArpDrop = value.virtualIpNotFoundArpDrop;
      this._vlanFlood = value.vlanFlood;
    }
  }

  // acl_deny - computed: false, optional: true, required: false
  private _aclDeny?: number; 
  public get aclDeny() {
    return this.getNumberAttribute('acl_deny');
  }
  public set aclDeny(value: number) {
    this._aclDeny = value;
  }
  public resetAclDeny() {
    this._aclDeny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclDenyInput() {
    return this._aclDeny;
  }

  // badpkt_drop - computed: false, optional: true, required: false
  private _badpktDrop?: number; 
  public get badpktDrop() {
    return this.getNumberAttribute('badpkt_drop');
  }
  public set badpktDrop(value: number) {
    this._badpktDrop = value;
  }
  public resetBadpktDrop() {
    this._badpktDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badpktDropInput() {
    return this._badpktDrop;
  }

  // bpdu_rcvd - computed: false, optional: true, required: false
  private _bpduRcvd?: number; 
  public get bpduRcvd() {
    return this.getNumberAttribute('bpdu_rcvd');
  }
  public set bpduRcvd(value: number) {
    this._bpduRcvd = value;
  }
  public resetBpduRcvd() {
    this._bpduRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpduRcvdInput() {
    return this._bpduRcvd;
  }

  // bpdu_sent - computed: false, optional: true, required: false
  private _bpduSent?: number; 
  public get bpduSent() {
    return this.getNumberAttribute('bpdu_sent');
  }
  public set bpduSent(value: number) {
    this._bpduSent = value;
  }
  public resetBpduSent() {
    this._bpduSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bpduSentInput() {
    return this._bpduSent;
  }

  // bw_ignore_limit - computed: false, optional: true, required: false
  private _bwIgnoreLimit?: number; 
  public get bwIgnoreLimit() {
    return this.getNumberAttribute('bw_ignore_limit');
  }
  public set bwIgnoreLimit(value: number) {
    this._bwIgnoreLimit = value;
  }
  public resetBwIgnoreLimit() {
    this._bwIgnoreLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwIgnoreLimitInput() {
    return this._bwIgnoreLimit;
  }

  // bwl_drop - computed: false, optional: true, required: false
  private _bwlDrop?: number; 
  public get bwlDrop() {
    return this.getNumberAttribute('bwl_drop');
  }
  public set bwlDrop(value: number) {
    this._bwlDrop = value;
  }
  public resetBwlDrop() {
    this._bwlDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bwlDropInput() {
    return this._bwlDrop;
  }

  // closed_port_syn_drop - computed: false, optional: true, required: false
  private _closedPortSynDrop?: number; 
  public get closedPortSynDrop() {
    return this.getNumberAttribute('closed_port_syn_drop');
  }
  public set closedPortSynDrop(value: number) {
    this._closedPortSynDrop = value;
  }
  public resetClosedPortSynDrop() {
    this._closedPortSynDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closedPortSynDropInput() {
    return this._closedPortSynDrop;
  }

  // ctrl_syn_rate_drop - computed: false, optional: true, required: false
  private _ctrlSynRateDrop?: number; 
  public get ctrlSynRateDrop() {
    return this.getNumberAttribute('ctrl_syn_rate_drop');
  }
  public set ctrlSynRateDrop(value: number) {
    this._ctrlSynRateDrop = value;
  }
  public resetCtrlSynRateDrop() {
    this._ctrlSynRateDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctrlSynRateDropInput() {
    return this._ctrlSynRateDrop;
  }

  // dev_based_arp_drop - computed: false, optional: true, required: false
  private _devBasedArpDrop?: number; 
  public get devBasedArpDrop() {
    return this.getNumberAttribute('dev_based_arp_drop');
  }
  public set devBasedArpDrop(value: number) {
    this._devBasedArpDrop = value;
  }
  public resetDevBasedArpDrop() {
    this._devBasedArpDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devBasedArpDropInput() {
    return this._devBasedArpDrop;
  }

  // dev_link_down_arp_drop - computed: false, optional: true, required: false
  private _devLinkDownArpDrop?: number; 
  public get devLinkDownArpDrop() {
    return this.getNumberAttribute('dev_link_down_arp_drop');
  }
  public set devLinkDownArpDrop(value: number) {
    this._devLinkDownArpDrop = value;
  }
  public resetDevLinkDownArpDrop() {
    this._devLinkDownArpDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devLinkDownArpDropInput() {
    return this._devLinkDownArpDrop;
  }

  // fpga_error_pkt1 - computed: false, optional: true, required: false
  private _fpgaErrorPkt1?: number; 
  public get fpgaErrorPkt1() {
    return this.getNumberAttribute('fpga_error_pkt1');
  }
  public set fpgaErrorPkt1(value: number) {
    this._fpgaErrorPkt1 = value;
  }
  public resetFpgaErrorPkt1() {
    this._fpgaErrorPkt1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpgaErrorPkt1Input() {
    return this._fpgaErrorPkt1;
  }

  // fpga_error_pkt2 - computed: false, optional: true, required: false
  private _fpgaErrorPkt2?: number; 
  public get fpgaErrorPkt2() {
    return this.getNumberAttribute('fpga_error_pkt2');
  }
  public set fpgaErrorPkt2(value: number) {
    this._fpgaErrorPkt2 = value;
  }
  public resetFpgaErrorPkt2() {
    this._fpgaErrorPkt2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fpgaErrorPkt2Input() {
    return this._fpgaErrorPkt2;
  }

  // fw_smp_zone_mismatch - computed: false, optional: true, required: false
  private _fwSmpZoneMismatch?: number; 
  public get fwSmpZoneMismatch() {
    return this.getNumberAttribute('fw_smp_zone_mismatch');
  }
  public set fwSmpZoneMismatch(value: number) {
    this._fwSmpZoneMismatch = value;
  }
  public resetFwSmpZoneMismatch() {
    this._fwSmpZoneMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwSmpZoneMismatchInput() {
    return this._fwSmpZoneMismatch;
  }

  // fwlb - computed: false, optional: true, required: false
  private _fwlb?: number; 
  public get fwlb() {
    return this.getNumberAttribute('fwlb');
  }
  public set fwlb(value: number) {
    this._fwlb = value;
  }
  public resetFwlb() {
    this._fwlb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwlbInput() {
    return this._fwlb;
  }

  // inactive_nat_pool_arp_drop - computed: false, optional: true, required: false
  private _inactiveNatPoolArpDrop?: number; 
  public get inactiveNatPoolArpDrop() {
    return this.getNumberAttribute('inactive_nat_pool_arp_drop');
  }
  public set inactiveNatPoolArpDrop(value: number) {
    this._inactiveNatPoolArpDrop = value;
  }
  public resetInactiveNatPoolArpDrop() {
    this._inactiveNatPoolArpDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactiveNatPoolArpDropInput() {
    return this._inactiveNatPoolArpDrop;
  }

  // inactive_static_nat_pool_arp_drop - computed: false, optional: true, required: false
  private _inactiveStaticNatPoolArpDrop?: number; 
  public get inactiveStaticNatPoolArpDrop() {
    return this.getNumberAttribute('inactive_static_nat_pool_arp_drop');
  }
  public set inactiveStaticNatPoolArpDrop(value: number) {
    this._inactiveStaticNatPoolArpDrop = value;
  }
  public resetInactiveStaticNatPoolArpDrop() {
    this._inactiveStaticNatPoolArpDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactiveStaticNatPoolArpDropInput() {
    return this._inactiveStaticNatPoolArpDrop;
  }

  // incorrect_len_drop - computed: false, optional: true, required: false
  private _incorrectLenDrop?: number; 
  public get incorrectLenDrop() {
    return this.getNumberAttribute('incorrect_len_drop');
  }
  public set incorrectLenDrop(value: number) {
    this._incorrectLenDrop = value;
  }
  public resetIncorrectLenDrop() {
    this._incorrectLenDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get incorrectLenDropInput() {
    return this._incorrectLenDrop;
  }

  // invalid_rx_arp_pkt - computed: false, optional: true, required: false
  private _invalidRxArpPkt?: number; 
  public get invalidRxArpPkt() {
    return this.getNumberAttribute('invalid_rx_arp_pkt');
  }
  public set invalidRxArpPkt(value: number) {
    this._invalidRxArpPkt = value;
  }
  public resetInvalidRxArpPkt() {
    this._invalidRxArpPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidRxArpPktInput() {
    return this._invalidRxArpPkt;
  }

  // invalid_sender_mac_arp_drop - computed: false, optional: true, required: false
  private _invalidSenderMacArpDrop?: number; 
  public get invalidSenderMacArpDrop() {
    return this.getNumberAttribute('invalid_sender_mac_arp_drop');
  }
  public set invalidSenderMacArpDrop(value: number) {
    this._invalidSenderMacArpDrop = value;
  }
  public resetInvalidSenderMacArpDrop() {
    this._invalidSenderMacArpDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidSenderMacArpDropInput() {
    return this._invalidSenderMacArpDrop;
  }

  // ip_defrag - computed: false, optional: true, required: false
  private _ipDefrag?: number; 
  public get ipDefrag() {
    return this.getNumberAttribute('ip_defrag');
  }
  public set ipDefrag(value: number) {
    this._ipDefrag = value;
  }
  public resetIpDefrag() {
    this._ipDefrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDefragInput() {
    return this._ipDefrag;
  }

  // ip_defrag_invalid_len - computed: false, optional: true, required: false
  private _ipDefragInvalidLen?: number; 
  public get ipDefragInvalidLen() {
    return this.getNumberAttribute('ip_defrag_invalid_len');
  }
  public set ipDefragInvalidLen(value: number) {
    this._ipDefragInvalidLen = value;
  }
  public resetIpDefragInvalidLen() {
    this._ipDefragInvalidLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDefragInvalidLenInput() {
    return this._ipDefragInvalidLen;
  }

  // ip_frag_oversize - computed: false, optional: true, required: false
  private _ipFragOversize?: number; 
  public get ipFragOversize() {
    return this.getNumberAttribute('ip_frag_oversize');
  }
  public set ipFragOversize(value: number) {
    this._ipFragOversize = value;
  }
  public resetIpFragOversize() {
    this._ipFragOversize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFragOversizeInput() {
    return this._ipFragOversize;
  }

  // ip_frag_sent - computed: false, optional: true, required: false
  private _ipFragSent?: number; 
  public get ipFragSent() {
    return this.getNumberAttribute('ip_frag_sent');
  }
  public set ipFragSent(value: number) {
    this._ipFragSent = value;
  }
  public resetIpFragSent() {
    this._ipFragSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFragSentInput() {
    return this._ipFragSent;
  }

  // ip_frag_too_many - computed: false, optional: true, required: false
  private _ipFragTooMany?: number; 
  public get ipFragTooMany() {
    return this.getNumberAttribute('ip_frag_too_many');
  }
  public set ipFragTooMany(value: number) {
    this._ipFragTooMany = value;
  }
  public resetIpFragTooMany() {
    this._ipFragTooMany = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFragTooManyInput() {
    return this._ipFragTooMany;
  }

  // ip_icmp_error_drop - computed: false, optional: true, required: false
  private _ipIcmpErrorDrop?: number; 
  public get ipIcmpErrorDrop() {
    return this.getNumberAttribute('ip_icmp_error_drop');
  }
  public set ipIcmpErrorDrop(value: number) {
    this._ipIcmpErrorDrop = value;
  }
  public resetIpIcmpErrorDrop() {
    this._ipIcmpErrorDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipIcmpErrorDropInput() {
    return this._ipIcmpErrorDrop;
  }

  // ip_not_found_arp_drop - computed: false, optional: true, required: false
  private _ipNotFoundArpDrop?: number; 
  public get ipNotFoundArpDrop() {
    return this.getNumberAttribute('ip_not_found_arp_drop');
  }
  public set ipNotFoundArpDrop(value: number) {
    this._ipNotFoundArpDrop = value;
  }
  public resetIpNotFoundArpDrop() {
    this._ipNotFoundArpDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNotFoundArpDropInput() {
    return this._ipNotFoundArpDrop;
  }

  // ipfrag_esp - computed: false, optional: true, required: false
  private _ipfragEsp?: number; 
  public get ipfragEsp() {
    return this.getNumberAttribute('ipfrag_esp');
  }
  public set ipfragEsp(value: number) {
    this._ipfragEsp = value;
  }
  public resetIpfragEsp() {
    this._ipfragEsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipfragEspInput() {
    return this._ipfragEsp;
  }

  // ipfrag_icmp - computed: false, optional: true, required: false
  private _ipfragIcmp?: number; 
  public get ipfragIcmp() {
    return this.getNumberAttribute('ipfrag_icmp');
  }
  public set ipfragIcmp(value: number) {
    this._ipfragIcmp = value;
  }
  public resetIpfragIcmp() {
    this._ipfragIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipfragIcmpInput() {
    return this._ipfragIcmp;
  }

  // ipfrag_ipip_dropped - computed: false, optional: true, required: false
  private _ipfragIpipDropped?: number; 
  public get ipfragIpipDropped() {
    return this.getNumberAttribute('ipfrag_ipip_dropped');
  }
  public set ipfragIpipDropped(value: number) {
    this._ipfragIpipDropped = value;
  }
  public resetIpfragIpipDropped() {
    this._ipfragIpipDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipfragIpipDroppedInput() {
    return this._ipfragIpipDropped;
  }

  // ipfrag_ospf - computed: false, optional: true, required: false
  private _ipfragOspf?: number; 
  public get ipfragOspf() {
    return this.getNumberAttribute('ipfrag_ospf');
  }
  public set ipfragOspf(value: number) {
    this._ipfragOspf = value;
  }
  public resetIpfragOspf() {
    this._ipfragOspf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipfragOspfInput() {
    return this._ipfragOspf;
  }

  // ipfrag_overlap - computed: false, optional: true, required: false
  private _ipfragOverlap?: number; 
  public get ipfragOverlap() {
    return this.getNumberAttribute('ipfrag_overlap');
  }
  public set ipfragOverlap(value: number) {
    this._ipfragOverlap = value;
  }
  public resetIpfragOverlap() {
    this._ipfragOverlap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipfragOverlapInput() {
    return this._ipfragOverlap;
  }

  // ipfrag_overload - computed: false, optional: true, required: false
  private _ipfragOverload?: number; 
  public get ipfragOverload() {
    return this.getNumberAttribute('ipfrag_overload');
  }
  public set ipfragOverload(value: number) {
    this._ipfragOverload = value;
  }
  public resetIpfragOverload() {
    this._ipfragOverload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipfragOverloadInput() {
    return this._ipfragOverload;
  }

  // ipfrag_reasmfails - computed: false, optional: true, required: false
  private _ipfragReasmfails?: number; 
  public get ipfragReasmfails() {
    return this.getNumberAttribute('ipfrag_reasmfails');
  }
  public set ipfragReasmfails(value: number) {
    this._ipfragReasmfails = value;
  }
  public resetIpfragReasmfails() {
    this._ipfragReasmfails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipfragReasmfailsInput() {
    return this._ipfragReasmfails;
  }

  // ipfrag_reasmoks - computed: false, optional: true, required: false
  private _ipfragReasmoks?: number; 
  public get ipfragReasmoks() {
    return this.getNumberAttribute('ipfrag_reasmoks');
  }
  public set ipfragReasmoks(value: number) {
    this._ipfragReasmoks = value;
  }
  public resetIpfragReasmoks() {
    this._ipfragReasmoks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipfragReasmoksInput() {
    return this._ipfragReasmoks;
  }

  // ipfrag_tcp - computed: false, optional: true, required: false
  private _ipfragTcp?: number; 
  public get ipfragTcp() {
    return this.getNumberAttribute('ipfrag_tcp');
  }
  public set ipfragTcp(value: number) {
    this._ipfragTcp = value;
  }
  public resetIpfragTcp() {
    this._ipfragTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipfragTcpInput() {
    return this._ipfragTcp;
  }

  // ipfrag_tcp_dropped - computed: false, optional: true, required: false
  private _ipfragTcpDropped?: number; 
  public get ipfragTcpDropped() {
    return this.getNumberAttribute('ipfrag_tcp_dropped');
  }
  public set ipfragTcpDropped(value: number) {
    this._ipfragTcpDropped = value;
  }
  public resetIpfragTcpDropped() {
    this._ipfragTcpDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipfragTcpDroppedInput() {
    return this._ipfragTcpDropped;
  }

  // ipfrag_timeout - computed: false, optional: true, required: false
  private _ipfragTimeout?: number; 
  public get ipfragTimeout() {
    return this.getNumberAttribute('ipfrag_timeout');
  }
  public set ipfragTimeout(value: number) {
    this._ipfragTimeout = value;
  }
  public resetIpfragTimeout() {
    this._ipfragTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipfragTimeoutInput() {
    return this._ipfragTimeout;
  }

  // ipfrag_udp - computed: false, optional: true, required: false
  private _ipfragUdp?: number; 
  public get ipfragUdp() {
    return this.getNumberAttribute('ipfrag_udp');
  }
  public set ipfragUdp(value: number) {
    this._ipfragUdp = value;
  }
  public resetIpfragUdp() {
    this._ipfragUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipfragUdpInput() {
    return this._ipfragUdp;
  }

  // ipfrag_udp_dropped - computed: false, optional: true, required: false
  private _ipfragUdpDropped?: number; 
  public get ipfragUdpDropped() {
    return this.getNumberAttribute('ipfrag_udp_dropped');
  }
  public set ipfragUdpDropped(value: number) {
    this._ipfragUdpDropped = value;
  }
  public resetIpfragUdpDropped() {
    this._ipfragUdpDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipfragUdpDroppedInput() {
    return this._ipfragUdpDropped;
  }

  // ipipv6_jumbo_frag_drop - computed: false, optional: true, required: false
  private _ipipv6JumboFragDrop?: number; 
  public get ipipv6JumboFragDrop() {
    return this.getNumberAttribute('ipipv6_jumbo_frag_drop');
  }
  public set ipipv6JumboFragDrop(value: number) {
    this._ipipv6JumboFragDrop = value;
  }
  public resetIpipv6JumboFragDrop() {
    this._ipipv6JumboFragDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipipv6JumboFragDropInput() {
    return this._ipipv6JumboFragDrop;
  }

  // ipsec_drop - computed: false, optional: true, required: false
  private _ipsecDrop?: number; 
  public get ipsecDrop() {
    return this.getNumberAttribute('ipsec_drop');
  }
  public set ipsecDrop(value: number) {
    this._ipsecDrop = value;
  }
  public resetIpsecDrop() {
    this._ipsecDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecDropInput() {
    return this._ipsecDrop;
  }

  // ipv4_frag_6rd_drop - computed: false, optional: true, required: false
  private _ipv4Frag6RdDrop?: number; 
  public get ipv4Frag6RdDrop() {
    return this.getNumberAttribute('ipv4_frag_6rd_drop');
  }
  public set ipv4Frag6RdDrop(value: number) {
    this._ipv4Frag6RdDrop = value;
  }
  public resetIpv4Frag6RdDrop() {
    this._ipv4Frag6RdDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Frag6RdDropInput() {
    return this._ipv4Frag6RdDrop;
  }

  // ipv4_frag_6rd_ok - computed: false, optional: true, required: false
  private _ipv4Frag6RdOk?: number; 
  public get ipv4Frag6RdOk() {
    return this.getNumberAttribute('ipv4_frag_6rd_ok');
  }
  public set ipv4Frag6RdOk(value: number) {
    this._ipv4Frag6RdOk = value;
  }
  public resetIpv4Frag6RdOk() {
    this._ipv4Frag6RdOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Frag6RdOkInput() {
    return this._ipv4Frag6RdOk;
  }

  // ipv4_noroute_drop - computed: false, optional: true, required: false
  private _ipv4NorouteDrop?: number; 
  public get ipv4NorouteDrop() {
    return this.getNumberAttribute('ipv4_noroute_drop');
  }
  public set ipv4NorouteDrop(value: number) {
    this._ipv4NorouteDrop = value;
  }
  public resetIpv4NorouteDrop() {
    this._ipv4NorouteDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NorouteDropInput() {
    return this._ipv4NorouteDrop;
  }

  // ipv4_novlanfwd_drop - computed: false, optional: true, required: false
  private _ipv4NovlanfwdDrop?: number; 
  public get ipv4NovlanfwdDrop() {
    return this.getNumberAttribute('ipv4_novlanfwd_drop');
  }
  public set ipv4NovlanfwdDrop(value: number) {
    this._ipv4NovlanfwdDrop = value;
  }
  public resetIpv4NovlanfwdDrop() {
    this._ipv4NovlanfwdDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4NovlanfwdDropInput() {
    return this._ipv4NovlanfwdDrop;
  }

  // ipv4_rpf_drop - computed: false, optional: true, required: false
  private _ipv4RpfDrop?: number; 
  public get ipv4RpfDrop() {
    return this.getNumberAttribute('ipv4_rpf_drop');
  }
  public set ipv4RpfDrop(value: number) {
    this._ipv4RpfDrop = value;
  }
  public resetIpv4RpfDrop() {
    this._ipv4RpfDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4RpfDropInput() {
    return this._ipv4RpfDrop;
  }

  // ipv4_src_routed_pkt_drop - computed: false, optional: true, required: false
  private _ipv4SrcRoutedPktDrop?: number; 
  public get ipv4SrcRoutedPktDrop() {
    return this.getNumberAttribute('ipv4_src_routed_pkt_drop');
  }
  public set ipv4SrcRoutedPktDrop(value: number) {
    this._ipv4SrcRoutedPktDrop = value;
  }
  public resetIpv4SrcRoutedPktDrop() {
    this._ipv4SrcRoutedPktDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SrcRoutedPktDropInput() {
    return this._ipv4SrcRoutedPktDrop;
  }

  // ipv6_jumbo_frag_drop - computed: false, optional: true, required: false
  private _ipv6JumboFragDrop?: number; 
  public get ipv6JumboFragDrop() {
    return this.getNumberAttribute('ipv6_jumbo_frag_drop');
  }
  public set ipv6JumboFragDrop(value: number) {
    this._ipv6JumboFragDrop = value;
  }
  public resetIpv6JumboFragDrop() {
    this._ipv6JumboFragDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6JumboFragDropInput() {
    return this._ipv6JumboFragDrop;
  }

  // ipv6_ndisc_dad_adverts - computed: false, optional: true, required: false
  private _ipv6NdiscDadAdverts?: number; 
  public get ipv6NdiscDadAdverts() {
    return this.getNumberAttribute('ipv6_ndisc_dad_adverts');
  }
  public set ipv6NdiscDadAdverts(value: number) {
    this._ipv6NdiscDadAdverts = value;
  }
  public resetIpv6NdiscDadAdverts() {
    this._ipv6NdiscDadAdverts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NdiscDadAdvertsInput() {
    return this._ipv6NdiscDadAdverts;
  }

  // ipv6_ndisc_dad_prefix_mismatch_drop - computed: false, optional: true, required: false
  private _ipv6NdiscDadPrefixMismatchDrop?: number; 
  public get ipv6NdiscDadPrefixMismatchDrop() {
    return this.getNumberAttribute('ipv6_ndisc_dad_prefix_mismatch_drop');
  }
  public set ipv6NdiscDadPrefixMismatchDrop(value: number) {
    this._ipv6NdiscDadPrefixMismatchDrop = value;
  }
  public resetIpv6NdiscDadPrefixMismatchDrop() {
    this._ipv6NdiscDadPrefixMismatchDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NdiscDadPrefixMismatchDropInput() {
    return this._ipv6NdiscDadPrefixMismatchDrop;
  }

  // ipv6_ndisc_dad_solicits - computed: false, optional: true, required: false
  private _ipv6NdiscDadSolicits?: number; 
  public get ipv6NdiscDadSolicits() {
    return this.getNumberAttribute('ipv6_ndisc_dad_solicits');
  }
  public set ipv6NdiscDadSolicits(value: number) {
    this._ipv6NdiscDadSolicits = value;
  }
  public resetIpv6NdiscDadSolicits() {
    this._ipv6NdiscDadSolicits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NdiscDadSolicitsInput() {
    return this._ipv6NdiscDadSolicits;
  }

  // ipv6_ndisc_mac_changes - computed: false, optional: true, required: false
  private _ipv6NdiscMacChanges?: number; 
  public get ipv6NdiscMacChanges() {
    return this.getNumberAttribute('ipv6_ndisc_mac_changes');
  }
  public set ipv6NdiscMacChanges(value: number) {
    this._ipv6NdiscMacChanges = value;
  }
  public resetIpv6NdiscMacChanges() {
    this._ipv6NdiscMacChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NdiscMacChangesInput() {
    return this._ipv6NdiscMacChanges;
  }

  // ipv6_ndisc_out_of_memory - computed: false, optional: true, required: false
  private _ipv6NdiscOutOfMemory?: number; 
  public get ipv6NdiscOutOfMemory() {
    return this.getNumberAttribute('ipv6_ndisc_out_of_memory');
  }
  public set ipv6NdiscOutOfMemory(value: number) {
    this._ipv6NdiscOutOfMemory = value;
  }
  public resetIpv6NdiscOutOfMemory() {
    this._ipv6NdiscOutOfMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NdiscOutOfMemoryInput() {
    return this._ipv6NdiscOutOfMemory;
  }

  // ipv6_noroute_drop - computed: false, optional: true, required: false
  private _ipv6NorouteDrop?: number; 
  public get ipv6NorouteDrop() {
    return this.getNumberAttribute('ipv6_noroute_drop');
  }
  public set ipv6NorouteDrop(value: number) {
    this._ipv6NorouteDrop = value;
  }
  public resetIpv6NorouteDrop() {
    this._ipv6NorouteDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NorouteDropInput() {
    return this._ipv6NorouteDrop;
  }

  // ipv6_novlanfwd_drop - computed: false, optional: true, required: false
  private _ipv6NovlanfwdDrop?: number; 
  public get ipv6NovlanfwdDrop() {
    return this.getNumberAttribute('ipv6_novlanfwd_drop');
  }
  public set ipv6NovlanfwdDrop(value: number) {
    this._ipv6NovlanfwdDrop = value;
  }
  public resetIpv6NovlanfwdDrop() {
    this._ipv6NovlanfwdDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6NovlanfwdDropInput() {
    return this._ipv6NovlanfwdDrop;
  }

  // ipv6_rpf_drop - computed: false, optional: true, required: false
  private _ipv6RpfDrop?: number; 
  public get ipv6RpfDrop() {
    return this.getNumberAttribute('ipv6_rpf_drop');
  }
  public set ipv6RpfDrop(value: number) {
    this._ipv6RpfDrop = value;
  }
  public resetIpv6RpfDrop() {
    this._ipv6RpfDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RpfDropInput() {
    return this._ipv6RpfDrop;
  }

  // ipv6_src_routed_pkt_drop - computed: false, optional: true, required: false
  private _ipv6SrcRoutedPktDrop?: number; 
  public get ipv6SrcRoutedPktDrop() {
    return this.getNumberAttribute('ipv6_src_routed_pkt_drop');
  }
  public set ipv6SrcRoutedPktDrop(value: number) {
    this._ipv6SrcRoutedPktDrop = value;
  }
  public resetIpv6SrcRoutedPktDrop() {
    this._ipv6SrcRoutedPktDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SrcRoutedPktDropInput() {
    return this._ipv6SrcRoutedPktDrop;
  }

  // ipv6frag_esp - computed: false, optional: true, required: false
  private _ipv6FragEsp?: number; 
  public get ipv6FragEsp() {
    return this.getNumberAttribute('ipv6frag_esp');
  }
  public set ipv6FragEsp(value: number) {
    this._ipv6FragEsp = value;
  }
  public resetIpv6FragEsp() {
    this._ipv6FragEsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FragEspInput() {
    return this._ipv6FragEsp;
  }

  // ipv6frag_gre_dropped - computed: false, optional: true, required: false
  private _ipv6FragGreDropped?: number; 
  public get ipv6FragGreDropped() {
    return this.getNumberAttribute('ipv6frag_gre_dropped');
  }
  public set ipv6FragGreDropped(value: number) {
    this._ipv6FragGreDropped = value;
  }
  public resetIpv6FragGreDropped() {
    this._ipv6FragGreDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FragGreDroppedInput() {
    return this._ipv6FragGreDropped;
  }

  // ipv6frag_icmp - computed: false, optional: true, required: false
  private _ipv6FragIcmp?: number; 
  public get ipv6FragIcmp() {
    return this.getNumberAttribute('ipv6frag_icmp');
  }
  public set ipv6FragIcmp(value: number) {
    this._ipv6FragIcmp = value;
  }
  public resetIpv6FragIcmp() {
    this._ipv6FragIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FragIcmpInput() {
    return this._ipv6FragIcmp;
  }

  // ipv6frag_ipip_dropped - computed: false, optional: true, required: false
  private _ipv6FragIpipDropped?: number; 
  public get ipv6FragIpipDropped() {
    return this.getNumberAttribute('ipv6frag_ipip_dropped');
  }
  public set ipv6FragIpipDropped(value: number) {
    this._ipv6FragIpipDropped = value;
  }
  public resetIpv6FragIpipDropped() {
    this._ipv6FragIpipDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FragIpipDroppedInput() {
    return this._ipv6FragIpipDropped;
  }

  // ipv6frag_ipip_ok - computed: false, optional: true, required: false
  private _ipv6FragIpipOk?: number; 
  public get ipv6FragIpipOk() {
    return this.getNumberAttribute('ipv6frag_ipip_ok');
  }
  public set ipv6FragIpipOk(value: number) {
    this._ipv6FragIpipOk = value;
  }
  public resetIpv6FragIpipOk() {
    this._ipv6FragIpipOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FragIpipOkInput() {
    return this._ipv6FragIpipOk;
  }

  // ipv6frag_ospf - computed: false, optional: true, required: false
  private _ipv6FragOspf?: number; 
  public get ipv6FragOspf() {
    return this.getNumberAttribute('ipv6frag_ospf');
  }
  public set ipv6FragOspf(value: number) {
    this._ipv6FragOspf = value;
  }
  public resetIpv6FragOspf() {
    this._ipv6FragOspf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FragOspfInput() {
    return this._ipv6FragOspf;
  }

  // ipv6frag_tcp - computed: false, optional: true, required: false
  private _ipv6FragTcp?: number; 
  public get ipv6FragTcp() {
    return this.getNumberAttribute('ipv6frag_tcp');
  }
  public set ipv6FragTcp(value: number) {
    this._ipv6FragTcp = value;
  }
  public resetIpv6FragTcp() {
    this._ipv6FragTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FragTcpInput() {
    return this._ipv6FragTcp;
  }

  // ipv6frag_tcp_dropped - computed: false, optional: true, required: false
  private _ipv6FragTcpDropped?: number; 
  public get ipv6FragTcpDropped() {
    return this.getNumberAttribute('ipv6frag_tcp_dropped');
  }
  public set ipv6FragTcpDropped(value: number) {
    this._ipv6FragTcpDropped = value;
  }
  public resetIpv6FragTcpDropped() {
    this._ipv6FragTcpDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FragTcpDroppedInput() {
    return this._ipv6FragTcpDropped;
  }

  // ipv6frag_udp - computed: false, optional: true, required: false
  private _ipv6FragUdp?: number; 
  public get ipv6FragUdp() {
    return this.getNumberAttribute('ipv6frag_udp');
  }
  public set ipv6FragUdp(value: number) {
    this._ipv6FragUdp = value;
  }
  public resetIpv6FragUdp() {
    this._ipv6FragUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FragUdpInput() {
    return this._ipv6FragUdp;
  }

  // ipv6frag_udp_dropped - computed: false, optional: true, required: false
  private _ipv6FragUdpDropped?: number; 
  public get ipv6FragUdpDropped() {
    return this.getNumberAttribute('ipv6frag_udp_dropped');
  }
  public set ipv6FragUdpDropped(value: number) {
    this._ipv6FragUdpDropped = value;
  }
  public resetIpv6FragUdpDropped() {
    this._ipv6FragUdpDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6FragUdpDroppedInput() {
    return this._ipv6FragUdpDropped;
  }

  // jumbo_frag_drop - computed: false, optional: true, required: false
  private _jumboFragDrop?: number; 
  public get jumboFragDrop() {
    return this.getNumberAttribute('jumbo_frag_drop');
  }
  public set jumboFragDrop(value: number) {
    this._jumboFragDrop = value;
  }
  public resetJumboFragDrop() {
    this._jumboFragDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumboFragDropInput() {
    return this._jumboFragDrop;
  }

  // l2_def_vlan_drop - computed: false, optional: true, required: false
  private _l2DefVlanDrop?: number; 
  public get l2DefVlanDrop() {
    return this.getNumberAttribute('l2_def_vlan_drop');
  }
  public set l2DefVlanDrop(value: number) {
    this._l2DefVlanDrop = value;
  }
  public resetL2DefVlanDrop() {
    this._l2DefVlanDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2DefVlanDropInput() {
    return this._l2DefVlanDrop;
  }

  // l2_forward - computed: false, optional: true, required: false
  private _l2Forward?: number; 
  public get l2Forward() {
    return this.getNumberAttribute('l2_forward');
  }
  public set l2Forward(value: number) {
    this._l2Forward = value;
  }
  public resetL2Forward() {
    this._l2Forward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2ForwardInput() {
    return this._l2Forward;
  }

  // l3_forward_ip - computed: false, optional: true, required: false
  private _l3ForwardIp?: number; 
  public get l3ForwardIp() {
    return this.getNumberAttribute('l3_forward_ip');
  }
  public set l3ForwardIp(value: number) {
    this._l3ForwardIp = value;
  }
  public resetL3ForwardIp() {
    this._l3ForwardIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3ForwardIpInput() {
    return this._l3ForwardIp;
  }

  // l3_forward_ipv6 - computed: false, optional: true, required: false
  private _l3ForwardIpv6?: number; 
  public get l3ForwardIpv6() {
    return this.getNumberAttribute('l3_forward_ipv6');
  }
  public set l3ForwardIpv6(value: number) {
    this._l3ForwardIpv6 = value;
  }
  public resetL3ForwardIpv6() {
    this._l3ForwardIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3ForwardIpv6Input() {
    return this._l3ForwardIpv6;
  }

  // l4_in_ctrl_cpu - computed: false, optional: true, required: false
  private _l4InCtrlCpu?: number; 
  public get l4InCtrlCpu() {
    return this.getNumberAttribute('l4_in_ctrl_cpu');
  }
  public set l4InCtrlCpu(value: number) {
    this._l4InCtrlCpu = value;
  }
  public resetL4InCtrlCpu() {
    this._l4InCtrlCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4InCtrlCpuInput() {
    return this._l4InCtrlCpu;
  }

  // l4_process - computed: false, optional: true, required: false
  private _l4Process?: number; 
  public get l4Process() {
    return this.getNumberAttribute('l4_process');
  }
  public set l4Process(value: number) {
    this._l4Process = value;
  }
  public resetL4Process() {
    this._l4Process = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4ProcessInput() {
    return this._l4Process;
  }

  // lacp_tx_intf_err_drop - computed: false, optional: true, required: false
  private _lacpTxIntfErrDrop?: number; 
  public get lacpTxIntfErrDrop() {
    return this.getNumberAttribute('lacp_tx_intf_err_drop');
  }
  public set lacpTxIntfErrDrop(value: number) {
    this._lacpTxIntfErrDrop = value;
  }
  public resetLacpTxIntfErrDrop() {
    this._lacpTxIntfErrDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lacpTxIntfErrDropInput() {
    return this._lacpTxIntfErrDrop;
  }

  // licexpire_drop - computed: false, optional: true, required: false
  private _licexpireDrop?: number; 
  public get licexpireDrop() {
    return this.getNumberAttribute('licexpire_drop');
  }
  public set licexpireDrop(value: number) {
    this._licexpireDrop = value;
  }
  public resetLicexpireDrop() {
    this._licexpireDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licexpireDropInput() {
    return this._licexpireDrop;
  }

  // linkdown_drop - computed: false, optional: true, required: false
  private _linkdownDrop?: number; 
  public get linkdownDrop() {
    return this.getNumberAttribute('linkdown_drop');
  }
  public set linkdownDrop(value: number) {
    this._linkdownDrop = value;
  }
  public resetLinkdownDrop() {
    this._linkdownDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkdownDropInput() {
    return this._linkdownDrop;
  }

  // mac_movement - computed: false, optional: true, required: false
  private _macMovement?: number; 
  public get macMovement() {
    return this.getNumberAttribute('mac_movement');
  }
  public set macMovement(value: number) {
    this._macMovement = value;
  }
  public resetMacMovement() {
    this._macMovement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macMovementInput() {
    return this._macMovement;
  }

  // max_arp_drop - computed: false, optional: true, required: false
  private _maxArpDrop?: number; 
  public get maxArpDrop() {
    return this.getNumberAttribute('max_arp_drop');
  }
  public set maxArpDrop(value: number) {
    this._maxArpDrop = value;
  }
  public resetMaxArpDrop() {
    this._maxArpDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxArpDropInput() {
    return this._maxArpDrop;
  }

  // mgmt_svc_drop - computed: false, optional: true, required: false
  private _mgmtSvcDrop?: number; 
  public get mgmtSvcDrop() {
    return this.getNumberAttribute('mgmt_svc_drop');
  }
  public set mgmtSvcDrop(value: number) {
    this._mgmtSvcDrop = value;
  }
  public resetMgmtSvcDrop() {
    this._mgmtSvcDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtSvcDropInput() {
    return this._mgmtSvcDrop;
  }

  // no_ip_drop - computed: false, optional: true, required: false
  private _noIpDrop?: number; 
  public get noIpDrop() {
    return this.getNumberAttribute('no_ip_drop');
  }
  public set noIpDrop(value: number) {
    this._noIpDrop = value;
  }
  public resetNoIpDrop() {
    this._noIpDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpDropInput() {
    return this._noIpDrop;
  }

  // ppsl_drop_egr - computed: false, optional: true, required: false
  private _ppslDropEgr?: number; 
  public get ppslDropEgr() {
    return this.getNumberAttribute('ppsl_drop_egr');
  }
  public set ppslDropEgr(value: number) {
    this._ppslDropEgr = value;
  }
  public resetPpslDropEgr() {
    this._ppslDropEgr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ppslDropEgrInput() {
    return this._ppslDropEgr;
  }

  // ppsl_drop_ing - computed: false, optional: true, required: false
  private _ppslDropIng?: number; 
  public get ppslDropIng() {
    return this.getNumberAttribute('ppsl_drop_ing');
  }
  public set ppslDropIng(value: number) {
    this._ppslDropIng = value;
  }
  public resetPpslDropIng() {
    this._ppslDropIng = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ppslDropIngInput() {
    return this._ppslDropIng;
  }

  // ppsl_ignore_limit - computed: false, optional: true, required: false
  private _ppslIgnoreLimit?: number; 
  public get ppslIgnoreLimit() {
    return this.getNumberAttribute('ppsl_ignore_limit');
  }
  public set ppslIgnoreLimit(value: number) {
    this._ppslIgnoreLimit = value;
  }
  public resetPpslIgnoreLimit() {
    this._ppslIgnoreLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ppslIgnoreLimitInput() {
    return this._ppslIgnoreLimit;
  }

  // prot_down_drop - computed: false, optional: true, required: false
  private _protDownDrop?: number; 
  public get protDownDrop() {
    return this.getNumberAttribute('prot_down_drop');
  }
  public set protDownDrop(value: number) {
    this._protDownDrop = value;
  }
  public resetProtDownDrop() {
    this._protDownDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protDownDropInput() {
    return this._protDownDrop;
  }

  // redirect_fwd_fail - computed: false, optional: true, required: false
  private _redirectFwdFail?: number; 
  public get redirectFwdFail() {
    return this.getNumberAttribute('redirect_fwd_fail');
  }
  public set redirectFwdFail(value: number) {
    this._redirectFwdFail = value;
  }
  public resetRedirectFwdFail() {
    this._redirectFwdFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectFwdFailInput() {
    return this._redirectFwdFail;
  }

  // redirect_fwd_sent - computed: false, optional: true, required: false
  private _redirectFwdSent?: number; 
  public get redirectFwdSent() {
    return this.getNumberAttribute('redirect_fwd_sent');
  }
  public set redirectFwdSent(value: number) {
    this._redirectFwdSent = value;
  }
  public resetRedirectFwdSent() {
    this._redirectFwdSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectFwdSentInput() {
    return this._redirectFwdSent;
  }

  // redirect_rev_fail - computed: false, optional: true, required: false
  private _redirectRevFail?: number; 
  public get redirectRevFail() {
    return this.getNumberAttribute('redirect_rev_fail');
  }
  public set redirectRevFail(value: number) {
    this._redirectRevFail = value;
  }
  public resetRedirectRevFail() {
    this._redirectRevFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectRevFailInput() {
    return this._redirectRevFail;
  }

  // redirect_rev_sent - computed: false, optional: true, required: false
  private _redirectRevSent?: number; 
  public get redirectRevSent() {
    return this.getNumberAttribute('redirect_rev_sent');
  }
  public set redirectRevSent(value: number) {
    this._redirectRevSent = value;
  }
  public resetRedirectRevSent() {
    this._redirectRevSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectRevSentInput() {
    return this._redirectRevSent;
  }

  // redirect_setup_fail - computed: false, optional: true, required: false
  private _redirectSetupFail?: number; 
  public get redirectSetupFail() {
    return this.getNumberAttribute('redirect_setup_fail');
  }
  public set redirectSetupFail(value: number) {
    this._redirectSetupFail = value;
  }
  public resetRedirectSetupFail() {
    this._redirectSetupFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectSetupFailInput() {
    return this._redirectSetupFail;
  }

  // rx_arp_req - computed: false, optional: true, required: false
  private _rxArpReq?: number; 
  public get rxArpReq() {
    return this.getNumberAttribute('rx_arp_req');
  }
  public set rxArpReq(value: number) {
    this._rxArpReq = value;
  }
  public resetRxArpReq() {
    this._rxArpReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxArpReqInput() {
    return this._rxArpReq;
  }

  // rx_arp_resp - computed: false, optional: true, required: false
  private _rxArpResp?: number; 
  public get rxArpResp() {
    return this.getNumberAttribute('rx_arp_resp');
  }
  public set rxArpResp(value: number) {
    this._rxArpResp = value;
  }
  public resetRxArpResp() {
    this._rxArpResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxArpRespInput() {
    return this._rxArpResp;
  }

  // rx_kernel - computed: false, optional: true, required: false
  private _rxKernel?: number; 
  public get rxKernel() {
    return this.getNumberAttribute('rx_kernel');
  }
  public set rxKernel(value: number) {
    this._rxKernel = value;
  }
  public resetRxKernel() {
    this._rxKernel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxKernelInput() {
    return this._rxKernel;
  }

  // scaleout_arp_drop - computed: false, optional: true, required: false
  private _scaleoutArpDrop?: number; 
  public get scaleoutArpDrop() {
    return this.getNumberAttribute('scaleout_arp_drop');
  }
  public set scaleoutArpDrop(value: number) {
    this._scaleoutArpDrop = value;
  }
  public resetScaleoutArpDrop() {
    this._scaleoutArpDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleoutArpDropInput() {
    return this._scaleoutArpDrop;
  }

  // scaleout_hairpin_arp_drop - computed: false, optional: true, required: false
  private _scaleoutHairpinArpDrop?: number; 
  public get scaleoutHairpinArpDrop() {
    return this.getNumberAttribute('scaleout_hairpin_arp_drop');
  }
  public set scaleoutHairpinArpDrop(value: number) {
    this._scaleoutHairpinArpDrop = value;
  }
  public resetScaleoutHairpinArpDrop() {
    this._scaleoutHairpinArpDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleoutHairpinArpDropInput() {
    return this._scaleoutHairpinArpDrop;
  }

  // self_grat_arp_drop - computed: false, optional: true, required: false
  private _selfGratArpDrop?: number; 
  public get selfGratArpDrop() {
    return this.getNumberAttribute('self_grat_arp_drop');
  }
  public set selfGratArpDrop(value: number) {
    this._selfGratArpDrop = value;
  }
  public resetSelfGratArpDrop() {
    this._selfGratArpDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfGratArpDropInput() {
    return this._selfGratArpDrop;
  }

  // self_grat_nat_ip_arp_drop - computed: false, optional: true, required: false
  private _selfGratNatIpArpDrop?: number; 
  public get selfGratNatIpArpDrop() {
    return this.getNumberAttribute('self_grat_nat_ip_arp_drop');
  }
  public set selfGratNatIpArpDrop(value: number) {
    this._selfGratNatIpArpDrop = value;
  }
  public resetSelfGratNatIpArpDrop() {
    this._selfGratNatIpArpDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfGratNatIpArpDropInput() {
    return this._selfGratNatIpArpDrop;
  }

  // service_chain_rcvd - computed: false, optional: true, required: false
  private _serviceChainRcvd?: number; 
  public get serviceChainRcvd() {
    return this.getNumberAttribute('service_chain_rcvd');
  }
  public set serviceChainRcvd(value: number) {
    this._serviceChainRcvd = value;
  }
  public resetServiceChainRcvd() {
    this._serviceChainRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceChainRcvdInput() {
    return this._serviceChainRcvd;
  }

  // service_chain_sent - computed: false, optional: true, required: false
  private _serviceChainSent?: number; 
  public get serviceChainSent() {
    return this.getNumberAttribute('service_chain_sent');
  }
  public set serviceChainSent(value: number) {
    this._serviceChainSent = value;
  }
  public resetServiceChainSent() {
    this._serviceChainSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceChainSentInput() {
    return this._serviceChainSent;
  }

  // sp_non_ctrl_pkt_drop - computed: false, optional: true, required: false
  private _spNonCtrlPktDrop?: number; 
  public get spNonCtrlPktDrop() {
    return this.getNumberAttribute('sp_non_ctrl_pkt_drop');
  }
  public set spNonCtrlPktDrop(value: number) {
    this._spNonCtrlPktDrop = value;
  }
  public resetSpNonCtrlPktDrop() {
    this._spNonCtrlPktDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spNonCtrlPktDropInput() {
    return this._spNonCtrlPktDrop;
  }

  // sport_drop - computed: false, optional: true, required: false
  private _sportDrop?: number; 
  public get sportDrop() {
    return this.getNumberAttribute('sport_drop');
  }
  public set sportDrop(value: number) {
    this._sportDrop = value;
  }
  public resetSportDrop() {
    this._sportDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sportDropInput() {
    return this._sportDrop;
  }

  // tls12_drop_req - computed: false, optional: true, required: false
  private _tls12DropReq?: number; 
  public get tls12DropReq() {
    return this.getNumberAttribute('tls12_drop_req');
  }
  public set tls12DropReq(value: number) {
    this._tls12DropReq = value;
  }
  public resetTls12DropReq() {
    this._tls12DropReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls12DropReqInput() {
    return this._tls12DropReq;
  }

  // tls12_ignore_req - computed: false, optional: true, required: false
  private _tls12IgnoreReq?: number; 
  public get tls12IgnoreReq() {
    return this.getNumberAttribute('tls12_ignore_req');
  }
  public set tls12IgnoreReq(value: number) {
    this._tls12IgnoreReq = value;
  }
  public resetTls12IgnoreReq() {
    this._tls12IgnoreReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls12IgnoreReqInput() {
    return this._tls12IgnoreReq;
  }

  // tls12_tls13_drop_req - computed: false, optional: true, required: false
  private _tls12Tls13DropReq?: number; 
  public get tls12Tls13DropReq() {
    return this.getNumberAttribute('tls12_tls13_drop_req');
  }
  public set tls12Tls13DropReq(value: number) {
    this._tls12Tls13DropReq = value;
  }
  public resetTls12Tls13DropReq() {
    this._tls12Tls13DropReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls12Tls13DropReqInput() {
    return this._tls12Tls13DropReq;
  }

  // tls12_tls13_ignore_req - computed: false, optional: true, required: false
  private _tls12Tls13IgnoreReq?: number; 
  public get tls12Tls13IgnoreReq() {
    return this.getNumberAttribute('tls12_tls13_ignore_req');
  }
  public set tls12Tls13IgnoreReq(value: number) {
    this._tls12Tls13IgnoreReq = value;
  }
  public resetTls12Tls13IgnoreReq() {
    this._tls12Tls13IgnoreReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls12Tls13IgnoreReqInput() {
    return this._tls12Tls13IgnoreReq;
  }

  // tls13_drop_req - computed: false, optional: true, required: false
  private _tls13DropReq?: number; 
  public get tls13DropReq() {
    return this.getNumberAttribute('tls13_drop_req');
  }
  public set tls13DropReq(value: number) {
    this._tls13DropReq = value;
  }
  public resetTls13DropReq() {
    this._tls13DropReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls13DropReqInput() {
    return this._tls13DropReq;
  }

  // tls13_ignore_req - computed: false, optional: true, required: false
  private _tls13IgnoreReq?: number; 
  public get tls13IgnoreReq() {
    return this.getNumberAttribute('tls13_ignore_req');
  }
  public set tls13IgnoreReq(value: number) {
    this._tls13IgnoreReq = value;
  }
  public resetTls13IgnoreReq() {
    this._tls13IgnoreReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tls13IgnoreReqInput() {
    return this._tls13IgnoreReq;
  }

  // ttl_exceeded_drop - computed: false, optional: true, required: false
  private _ttlExceededDrop?: number; 
  public get ttlExceededDrop() {
    return this.getNumberAttribute('ttl_exceeded_drop');
  }
  public set ttlExceededDrop(value: number) {
    this._ttlExceededDrop = value;
  }
  public resetTtlExceededDrop() {
    this._ttlExceededDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlExceededDropInput() {
    return this._ttlExceededDrop;
  }

  // unknown_prot_drop - computed: false, optional: true, required: false
  private _unknownProtDrop?: number; 
  public get unknownProtDrop() {
    return this.getNumberAttribute('unknown_prot_drop');
  }
  public set unknownProtDrop(value: number) {
    this._unknownProtDrop = value;
  }
  public resetUnknownProtDrop() {
    this._unknownProtDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownProtDropInput() {
    return this._unknownProtDrop;
  }

  // unnumbered_nat_error - computed: false, optional: true, required: false
  private _unnumberedNatError?: number; 
  public get unnumberedNatError() {
    return this.getNumberAttribute('unnumbered_nat_error');
  }
  public set unnumberedNatError(value: number) {
    this._unnumberedNatError = value;
  }
  public resetUnnumberedNatError() {
    this._unnumberedNatError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unnumberedNatErrorInput() {
    return this._unnumberedNatError;
  }

  // unnumbered_unsupported_drop - computed: false, optional: true, required: false
  private _unnumberedUnsupportedDrop?: number; 
  public get unnumberedUnsupportedDrop() {
    return this.getNumberAttribute('unnumbered_unsupported_drop');
  }
  public set unnumberedUnsupportedDrop(value: number) {
    this._unnumberedUnsupportedDrop = value;
  }
  public resetUnnumberedUnsupportedDrop() {
    this._unnumberedUnsupportedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unnumberedUnsupportedDropInput() {
    return this._unnumberedUnsupportedDrop;
  }

  // urpf_pkt_drop - computed: false, optional: true, required: false
  private _urpfPktDrop?: number; 
  public get urpfPktDrop() {
    return this.getNumberAttribute('urpf_pkt_drop');
  }
  public set urpfPktDrop(value: number) {
    this._urpfPktDrop = value;
  }
  public resetUrpfPktDrop() {
    this._urpfPktDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urpfPktDropInput() {
    return this._urpfPktDrop;
  }

  // virtual_ip_not_found_arp_drop - computed: false, optional: true, required: false
  private _virtualIpNotFoundArpDrop?: number; 
  public get virtualIpNotFoundArpDrop() {
    return this.getNumberAttribute('virtual_ip_not_found_arp_drop');
  }
  public set virtualIpNotFoundArpDrop(value: number) {
    this._virtualIpNotFoundArpDrop = value;
  }
  public resetVirtualIpNotFoundArpDrop() {
    this._virtualIpNotFoundArpDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualIpNotFoundArpDropInput() {
    return this._virtualIpNotFoundArpDrop;
  }

  // vlan_flood - computed: false, optional: true, required: false
  private _vlanFlood?: number; 
  public get vlanFlood() {
    return this.getNumberAttribute('vlan_flood');
  }
  public set vlanFlood(value: number) {
    this._vlanFlood = value;
  }
  public resetVlanFlood() {
    this._vlanFlood = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanFloodInput() {
    return this._vlanFlood;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats thunder_slb_switch_stats}
*/
export class DataThunderSlbSwitchStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_switch_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbSwitchStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbSwitchStats to import
  * @param importFromId The id of the existing DataThunderSlbSwitchStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbSwitchStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_switch_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_switch_stats thunder_slb_switch_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbSwitchStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbSwitchStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_switch_stats',
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
  private _stats = new DataThunderSlbSwitchStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbSwitchStatsStats) {
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
      stats: dataThunderSlbSwitchStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSlbSwitchStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbSwitchStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
