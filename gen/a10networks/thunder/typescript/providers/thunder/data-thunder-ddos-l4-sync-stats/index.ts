// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosL4SyncStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#id DataThunderDdosL4SyncStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#stats DataThunderDdosL4SyncStats#stats}
  */
  readonly stats?: DataThunderDdosL4SyncStatsStats;
}
export interface DataThunderDdosL4SyncStatsStats {
  /**
  * Sync Dst Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_dst_rcv DataThunderDdosL4SyncStats#sync_dst_rcv}
  */
  readonly syncDstRcv?: number;
  /**
  * Sync Dst Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_dst_sent DataThunderDdosL4SyncStats#sync_dst_sent}
  */
  readonly syncDstSent?: number;
  /**
  * Sync Hello Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_hello_rcv DataThunderDdosL4SyncStats#sync_hello_rcv}
  */
  readonly syncHelloRcv?: number;
  /**
  * Sync Hello Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_hello_sent DataThunderDdosL4SyncStats#sync_hello_sent}
  */
  readonly syncHelloSent?: number;
  /**
  * Sync Received Entry Conflict Static
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_rcv_entry_conflict_static DataThunderDdosL4SyncStats#sync_rcv_entry_conflict_static}
  */
  readonly syncRcvEntryConflictStatic?: number;
  /**
  * Sync Received Entry Create Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_rcv_entry_create_fail DataThunderDdosL4SyncStats#sync_rcv_entry_create_fail}
  */
  readonly syncRcvEntryCreateFail?: number;
  /**
  * Sync Received Unknown Entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_rcv_entry_unk DataThunderDdosL4SyncStats#sync_rcv_entry_unk}
  */
  readonly syncRcvEntryUnk?: number;
  /**
  * Sync Received Entry Unknown Subtype
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_rcv_entry_unk_subtype DataThunderDdosL4SyncStats#sync_rcv_entry_unk_subtype}
  */
  readonly syncRcvEntryUnkSubtype?: number;
  /**
  * Sync Received Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_rcv_fail DataThunderDdosL4SyncStats#sync_rcv_fail}
  */
  readonly syncRcvFail?: number;
  /**
  * Sync Received Hello Unknown Peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_rcv_hello_unk_peer DataThunderDdosL4SyncStats#sync_rcv_hello_unk_peer}
  */
  readonly syncRcvHelloUnkPeer?: number;
  /**
  * Sync Received Hello Unknown Subtype
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_rcv_hello_unk_subtype DataThunderDdosL4SyncStats#sync_rcv_hello_unk_subtype}
  */
  readonly syncRcvHelloUnkSubtype?: number;
  /**
  * Sync Received Unknown Msg
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_rcv_unk_msg DataThunderDdosL4SyncStats#sync_rcv_unk_msg}
  */
  readonly syncRcvUnkMsg?: number;
  /**
  * Sync Sent Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_sent_fail DataThunderDdosL4SyncStats#sync_sent_fail}
  */
  readonly syncSentFail?: number;
  /**
  * Sync Sent No Peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_sent_no_peer DataThunderDdosL4SyncStats#sync_sent_no_peer}
  */
  readonly syncSentNoPeer?: number;
  /**
  * Sync Received Src Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_bl_rcvd DataThunderDdosL4SyncStats#sync_src_bl_rcvd}
  */
  readonly syncSrcBlRcvd?: number;
  /**
  * Sync Sent Src Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_bl_sent DataThunderDdosL4SyncStats#sync_src_bl_sent}
  */
  readonly syncSrcBlSent?: number;
  /**
  * Sync Received Src DNS Force-TCP Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_dns_tcp_auth_rcvd DataThunderDdosL4SyncStats#sync_src_dns_tcp_auth_rcvd}
  */
  readonly syncSrcDnsTcpAuthRcvd?: number;
  /**
  * Sync Sent Src DNS Force-TCP Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_dns_tcp_auth_sent DataThunderDdosL4SyncStats#sync_src_dns_tcp_auth_sent}
  */
  readonly syncSrcDnsTcpAuthSent?: number;
  /**
  * Sync Received Src DNS UDP Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_dns_udp_auth_rcvd DataThunderDdosL4SyncStats#sync_src_dns_udp_auth_rcvd}
  */
  readonly syncSrcDnsUdpAuthRcvd?: number;
  /**
  * Sync Sent Src DNS UDP Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_dns_udp_auth_sent DataThunderDdosL4SyncStats#sync_src_dns_udp_auth_sent}
  */
  readonly syncSrcDnsUdpAuthSent?: number;
  /**
  * Sync Received SrcDst Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_dst_bl_rcvd DataThunderDdosL4SyncStats#sync_src_dst_bl_rcvd}
  */
  readonly syncSrcDstBlRcvd?: number;
  /**
  * Sync Sent SrcDst Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_dst_bl_sent DataThunderDdosL4SyncStats#sync_src_dst_bl_sent}
  */
  readonly syncSrcDstBlSent?: number;
  /**
  * Sync Received SrcDst DNS Force-TCP Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_dst_dns_tcp_auth_rcvd DataThunderDdosL4SyncStats#sync_src_dst_dns_tcp_auth_rcvd}
  */
  readonly syncSrcDstDnsTcpAuthRcvd?: number;
  /**
  * Sync Sent SrcDst DNS Force-TCP Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_dst_dns_tcp_auth_sent DataThunderDdosL4SyncStats#sync_src_dst_dns_tcp_auth_sent}
  */
  readonly syncSrcDstDnsTcpAuthSent?: number;
  /**
  * Sync Received SrcDst DNS UDP Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_dst_dns_udp_auth_rcvd DataThunderDdosL4SyncStats#sync_src_dst_dns_udp_auth_rcvd}
  */
  readonly syncSrcDstDnsUdpAuthRcvd?: number;
  /**
  * Sync Sent SrcDst DNS UDP Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_dst_dns_udp_auth_sent DataThunderDdosL4SyncStats#sync_src_dst_dns_udp_auth_sent}
  */
  readonly syncSrcDstDnsUdpAuthSent?: number;
  /**
  * Sync Received SrcDst ICMP Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_dst_icmp_wl_rcvd DataThunderDdosL4SyncStats#sync_src_dst_icmp_wl_rcvd}
  */
  readonly syncSrcDstIcmpWlRcvd?: number;
  /**
  * Sync Sent SrcDst ICMP Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_dst_icmp_wl_sent DataThunderDdosL4SyncStats#sync_src_dst_icmp_wl_sent}
  */
  readonly syncSrcDstIcmpWlSent?: number;
  /**
  * Sync SrcDst No-Dst
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_dst_no_dst_drop DataThunderDdosL4SyncStats#sync_src_dst_no_dst_drop}
  */
  readonly syncSrcDstNoDstDrop?: number;
  /**
  * Sync Received SrcDst OTHER Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_dst_other_wl_rcvd DataThunderDdosL4SyncStats#sync_src_dst_other_wl_rcvd}
  */
  readonly syncSrcDstOtherWlRcvd?: number;
  /**
  * Sync Sent SrcDst OTHER Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_dst_other_wl_sent DataThunderDdosL4SyncStats#sync_src_dst_other_wl_sent}
  */
  readonly syncSrcDstOtherWlSent?: number;
  /**
  * Sync SrcDst Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_dst_rcv DataThunderDdosL4SyncStats#sync_src_dst_rcv}
  */
  readonly syncSrcDstRcv?: number;
  /**
  * Sync SrcDst Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_dst_sent DataThunderDdosL4SyncStats#sync_src_dst_sent}
  */
  readonly syncSrcDstSent?: number;
  /**
  * Sync Received SrcDst TCP Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_dst_tcp_wl_rcvd DataThunderDdosL4SyncStats#sync_src_dst_tcp_wl_rcvd}
  */
  readonly syncSrcDstTcpWlRcvd?: number;
  /**
  * Sync Sent SrcDst TCP Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_dst_tcp_wl_sent DataThunderDdosL4SyncStats#sync_src_dst_tcp_wl_sent}
  */
  readonly syncSrcDstTcpWlSent?: number;
  /**
  * Sync Received SrcDst UDP Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_dst_udp_wl_rcvd DataThunderDdosL4SyncStats#sync_src_dst_udp_wl_rcvd}
  */
  readonly syncSrcDstUdpWlRcvd?: number;
  /**
  * Sync Sent SrcDst UDP Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_dst_udp_wl_sent DataThunderDdosL4SyncStats#sync_src_dst_udp_wl_sent}
  */
  readonly syncSrcDstUdpWlSent?: number;
  /**
  * Sync Received Src ICMP Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_icmp_wl_rcvd DataThunderDdosL4SyncStats#sync_src_icmp_wl_rcvd}
  */
  readonly syncSrcIcmpWlRcvd?: number;
  /**
  * Sync Sent Src ICMP Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_icmp_wl_sent DataThunderDdosL4SyncStats#sync_src_icmp_wl_sent}
  */
  readonly syncSrcIcmpWlSent?: number;
  /**
  * Sync Received Src OTHER Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_other_wl_rcvd DataThunderDdosL4SyncStats#sync_src_other_wl_rcvd}
  */
  readonly syncSrcOtherWlRcvd?: number;
  /**
  * Sync Sent Src OTHER Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_other_wl_sent DataThunderDdosL4SyncStats#sync_src_other_wl_sent}
  */
  readonly syncSrcOtherWlSent?: number;
  /**
  * Sync Src Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_rcv DataThunderDdosL4SyncStats#sync_src_rcv}
  */
  readonly syncSrcRcv?: number;
  /**
  * Sync Src Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_sent DataThunderDdosL4SyncStats#sync_src_sent}
  */
  readonly syncSrcSent?: number;
  /**
  * Sync Received Src TCP Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_tcp_wl_rcvd DataThunderDdosL4SyncStats#sync_src_tcp_wl_rcvd}
  */
  readonly syncSrcTcpWlRcvd?: number;
  /**
  * Sync Sent Src TCP Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_tcp_wl_sent DataThunderDdosL4SyncStats#sync_src_tcp_wl_sent}
  */
  readonly syncSrcTcpWlSent?: number;
  /**
  * Sync Received Src UDP Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_udp_wl_rcvd DataThunderDdosL4SyncStats#sync_src_udp_wl_rcvd}
  */
  readonly syncSrcUdpWlRcvd?: number;
  /**
  * Sync Sent Src UDP Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_src_udp_wl_sent DataThunderDdosL4SyncStats#sync_src_udp_wl_sent}
  */
  readonly syncSrcUdpWlSent?: number;
  /**
  * Sync Received SrcZoneService Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_szp_bl_rcvd DataThunderDdosL4SyncStats#sync_szp_bl_rcvd}
  */
  readonly syncSzpBlRcvd?: number;
  /**
  * Sync Sent SrcZoneService Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_szp_bl_sent DataThunderDdosL4SyncStats#sync_szp_bl_sent}
  */
  readonly syncSzpBlSent?: number;
  /**
  * Sync Received SrcZoneService DNS Force-TCP Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_szp_dns_tcp_auth_rcvd DataThunderDdosL4SyncStats#sync_szp_dns_tcp_auth_rcvd}
  */
  readonly syncSzpDnsTcpAuthRcvd?: number;
  /**
  * Sync Sent SrcZoneService DNS Force-TCP Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_szp_dns_tcp_auth_sent DataThunderDdosL4SyncStats#sync_szp_dns_tcp_auth_sent}
  */
  readonly syncSzpDnsTcpAuthSent?: number;
  /**
  * Sync Received SrcZoneService DNS UDP Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_szp_dns_udp_auth_rcvd DataThunderDdosL4SyncStats#sync_szp_dns_udp_auth_rcvd}
  */
  readonly syncSzpDnsUdpAuthRcvd?: number;
  /**
  * Sync Sent SrcZoneService DNS UDP Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_szp_dns_udp_auth_sent DataThunderDdosL4SyncStats#sync_szp_dns_udp_auth_sent}
  */
  readonly syncSzpDnsUdpAuthSent?: number;
  /**
  * Sync Received SrcZoneService ICMP Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_szp_icmp_auth_rcvd DataThunderDdosL4SyncStats#sync_szp_icmp_auth_rcvd}
  */
  readonly syncSzpIcmpAuthRcvd?: number;
  /**
  * Sync Sent SrcZoneService ICMP Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_szp_icmp_auth_sent DataThunderDdosL4SyncStats#sync_szp_icmp_auth_sent}
  */
  readonly syncSzpIcmpAuthSent?: number;
  /**
  * Sync SrcZoneService No-Dst
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_szp_no_dst_drop DataThunderDdosL4SyncStats#sync_szp_no_dst_drop}
  */
  readonly syncSzpNoDstDrop?: number;
  /**
  * Sync Received SrcZoneService OTHER Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_szp_other_auth_rcvd DataThunderDdosL4SyncStats#sync_szp_other_auth_rcvd}
  */
  readonly syncSzpOtherAuthRcvd?: number;
  /**
  * Sync Sent SrcZoneService OTHER Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_szp_other_auth_sent DataThunderDdosL4SyncStats#sync_szp_other_auth_sent}
  */
  readonly syncSzpOtherAuthSent?: number;
  /**
  * Sync SrcZoneService Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_szp_rcv DataThunderDdosL4SyncStats#sync_szp_rcv}
  */
  readonly syncSzpRcv?: number;
  /**
  * Sync SrcZoneService Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_szp_sent DataThunderDdosL4SyncStats#sync_szp_sent}
  */
  readonly syncSzpSent?: number;
  /**
  * Sync Received SrcZoneService TCP Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_szp_tcp_auth_rcvd DataThunderDdosL4SyncStats#sync_szp_tcp_auth_rcvd}
  */
  readonly syncSzpTcpAuthRcvd?: number;
  /**
  * Sync Sent SrcZoneService TCP Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_szp_tcp_auth_sent DataThunderDdosL4SyncStats#sync_szp_tcp_auth_sent}
  */
  readonly syncSzpTcpAuthSent?: number;
  /**
  * Sync Received SrcZoneService UDP Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_szp_udp_auth_rcvd DataThunderDdosL4SyncStats#sync_szp_udp_auth_rcvd}
  */
  readonly syncSzpUdpAuthRcvd?: number;
  /**
  * Sync Sent SrcZoneService UDP Authenticated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#sync_szp_udp_auth_sent DataThunderDdosL4SyncStats#sync_szp_udp_auth_sent}
  */
  readonly syncSzpUdpAuthSent?: number;
}

export function dataThunderDdosL4SyncStatsStatsToTerraform(struct?: DataThunderDdosL4SyncStatsStatsOutputReference | DataThunderDdosL4SyncStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sync_dst_rcv: cdktf.numberToTerraform(struct!.syncDstRcv),
    sync_dst_sent: cdktf.numberToTerraform(struct!.syncDstSent),
    sync_hello_rcv: cdktf.numberToTerraform(struct!.syncHelloRcv),
    sync_hello_sent: cdktf.numberToTerraform(struct!.syncHelloSent),
    sync_rcv_entry_conflict_static: cdktf.numberToTerraform(struct!.syncRcvEntryConflictStatic),
    sync_rcv_entry_create_fail: cdktf.numberToTerraform(struct!.syncRcvEntryCreateFail),
    sync_rcv_entry_unk: cdktf.numberToTerraform(struct!.syncRcvEntryUnk),
    sync_rcv_entry_unk_subtype: cdktf.numberToTerraform(struct!.syncRcvEntryUnkSubtype),
    sync_rcv_fail: cdktf.numberToTerraform(struct!.syncRcvFail),
    sync_rcv_hello_unk_peer: cdktf.numberToTerraform(struct!.syncRcvHelloUnkPeer),
    sync_rcv_hello_unk_subtype: cdktf.numberToTerraform(struct!.syncRcvHelloUnkSubtype),
    sync_rcv_unk_msg: cdktf.numberToTerraform(struct!.syncRcvUnkMsg),
    sync_sent_fail: cdktf.numberToTerraform(struct!.syncSentFail),
    sync_sent_no_peer: cdktf.numberToTerraform(struct!.syncSentNoPeer),
    sync_src_bl_rcvd: cdktf.numberToTerraform(struct!.syncSrcBlRcvd),
    sync_src_bl_sent: cdktf.numberToTerraform(struct!.syncSrcBlSent),
    sync_src_dns_tcp_auth_rcvd: cdktf.numberToTerraform(struct!.syncSrcDnsTcpAuthRcvd),
    sync_src_dns_tcp_auth_sent: cdktf.numberToTerraform(struct!.syncSrcDnsTcpAuthSent),
    sync_src_dns_udp_auth_rcvd: cdktf.numberToTerraform(struct!.syncSrcDnsUdpAuthRcvd),
    sync_src_dns_udp_auth_sent: cdktf.numberToTerraform(struct!.syncSrcDnsUdpAuthSent),
    sync_src_dst_bl_rcvd: cdktf.numberToTerraform(struct!.syncSrcDstBlRcvd),
    sync_src_dst_bl_sent: cdktf.numberToTerraform(struct!.syncSrcDstBlSent),
    sync_src_dst_dns_tcp_auth_rcvd: cdktf.numberToTerraform(struct!.syncSrcDstDnsTcpAuthRcvd),
    sync_src_dst_dns_tcp_auth_sent: cdktf.numberToTerraform(struct!.syncSrcDstDnsTcpAuthSent),
    sync_src_dst_dns_udp_auth_rcvd: cdktf.numberToTerraform(struct!.syncSrcDstDnsUdpAuthRcvd),
    sync_src_dst_dns_udp_auth_sent: cdktf.numberToTerraform(struct!.syncSrcDstDnsUdpAuthSent),
    sync_src_dst_icmp_wl_rcvd: cdktf.numberToTerraform(struct!.syncSrcDstIcmpWlRcvd),
    sync_src_dst_icmp_wl_sent: cdktf.numberToTerraform(struct!.syncSrcDstIcmpWlSent),
    sync_src_dst_no_dst_drop: cdktf.numberToTerraform(struct!.syncSrcDstNoDstDrop),
    sync_src_dst_other_wl_rcvd: cdktf.numberToTerraform(struct!.syncSrcDstOtherWlRcvd),
    sync_src_dst_other_wl_sent: cdktf.numberToTerraform(struct!.syncSrcDstOtherWlSent),
    sync_src_dst_rcv: cdktf.numberToTerraform(struct!.syncSrcDstRcv),
    sync_src_dst_sent: cdktf.numberToTerraform(struct!.syncSrcDstSent),
    sync_src_dst_tcp_wl_rcvd: cdktf.numberToTerraform(struct!.syncSrcDstTcpWlRcvd),
    sync_src_dst_tcp_wl_sent: cdktf.numberToTerraform(struct!.syncSrcDstTcpWlSent),
    sync_src_dst_udp_wl_rcvd: cdktf.numberToTerraform(struct!.syncSrcDstUdpWlRcvd),
    sync_src_dst_udp_wl_sent: cdktf.numberToTerraform(struct!.syncSrcDstUdpWlSent),
    sync_src_icmp_wl_rcvd: cdktf.numberToTerraform(struct!.syncSrcIcmpWlRcvd),
    sync_src_icmp_wl_sent: cdktf.numberToTerraform(struct!.syncSrcIcmpWlSent),
    sync_src_other_wl_rcvd: cdktf.numberToTerraform(struct!.syncSrcOtherWlRcvd),
    sync_src_other_wl_sent: cdktf.numberToTerraform(struct!.syncSrcOtherWlSent),
    sync_src_rcv: cdktf.numberToTerraform(struct!.syncSrcRcv),
    sync_src_sent: cdktf.numberToTerraform(struct!.syncSrcSent),
    sync_src_tcp_wl_rcvd: cdktf.numberToTerraform(struct!.syncSrcTcpWlRcvd),
    sync_src_tcp_wl_sent: cdktf.numberToTerraform(struct!.syncSrcTcpWlSent),
    sync_src_udp_wl_rcvd: cdktf.numberToTerraform(struct!.syncSrcUdpWlRcvd),
    sync_src_udp_wl_sent: cdktf.numberToTerraform(struct!.syncSrcUdpWlSent),
    sync_szp_bl_rcvd: cdktf.numberToTerraform(struct!.syncSzpBlRcvd),
    sync_szp_bl_sent: cdktf.numberToTerraform(struct!.syncSzpBlSent),
    sync_szp_dns_tcp_auth_rcvd: cdktf.numberToTerraform(struct!.syncSzpDnsTcpAuthRcvd),
    sync_szp_dns_tcp_auth_sent: cdktf.numberToTerraform(struct!.syncSzpDnsTcpAuthSent),
    sync_szp_dns_udp_auth_rcvd: cdktf.numberToTerraform(struct!.syncSzpDnsUdpAuthRcvd),
    sync_szp_dns_udp_auth_sent: cdktf.numberToTerraform(struct!.syncSzpDnsUdpAuthSent),
    sync_szp_icmp_auth_rcvd: cdktf.numberToTerraform(struct!.syncSzpIcmpAuthRcvd),
    sync_szp_icmp_auth_sent: cdktf.numberToTerraform(struct!.syncSzpIcmpAuthSent),
    sync_szp_no_dst_drop: cdktf.numberToTerraform(struct!.syncSzpNoDstDrop),
    sync_szp_other_auth_rcvd: cdktf.numberToTerraform(struct!.syncSzpOtherAuthRcvd),
    sync_szp_other_auth_sent: cdktf.numberToTerraform(struct!.syncSzpOtherAuthSent),
    sync_szp_rcv: cdktf.numberToTerraform(struct!.syncSzpRcv),
    sync_szp_sent: cdktf.numberToTerraform(struct!.syncSzpSent),
    sync_szp_tcp_auth_rcvd: cdktf.numberToTerraform(struct!.syncSzpTcpAuthRcvd),
    sync_szp_tcp_auth_sent: cdktf.numberToTerraform(struct!.syncSzpTcpAuthSent),
    sync_szp_udp_auth_rcvd: cdktf.numberToTerraform(struct!.syncSzpUdpAuthRcvd),
    sync_szp_udp_auth_sent: cdktf.numberToTerraform(struct!.syncSzpUdpAuthSent),
  }
}


export function dataThunderDdosL4SyncStatsStatsToHclTerraform(struct?: DataThunderDdosL4SyncStatsStatsOutputReference | DataThunderDdosL4SyncStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sync_dst_rcv: {
      value: cdktf.numberToHclTerraform(struct!.syncDstRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_dst_sent: {
      value: cdktf.numberToHclTerraform(struct!.syncDstSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_hello_rcv: {
      value: cdktf.numberToHclTerraform(struct!.syncHelloRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_hello_sent: {
      value: cdktf.numberToHclTerraform(struct!.syncHelloSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rcv_entry_conflict_static: {
      value: cdktf.numberToHclTerraform(struct!.syncRcvEntryConflictStatic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rcv_entry_create_fail: {
      value: cdktf.numberToHclTerraform(struct!.syncRcvEntryCreateFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rcv_entry_unk: {
      value: cdktf.numberToHclTerraform(struct!.syncRcvEntryUnk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rcv_entry_unk_subtype: {
      value: cdktf.numberToHclTerraform(struct!.syncRcvEntryUnkSubtype),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rcv_fail: {
      value: cdktf.numberToHclTerraform(struct!.syncRcvFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rcv_hello_unk_peer: {
      value: cdktf.numberToHclTerraform(struct!.syncRcvHelloUnkPeer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rcv_hello_unk_subtype: {
      value: cdktf.numberToHclTerraform(struct!.syncRcvHelloUnkSubtype),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_rcv_unk_msg: {
      value: cdktf.numberToHclTerraform(struct!.syncRcvUnkMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_sent_fail: {
      value: cdktf.numberToHclTerraform(struct!.syncSentFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_sent_no_peer: {
      value: cdktf.numberToHclTerraform(struct!.syncSentNoPeer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_bl_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcBlRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_bl_sent: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcBlSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_dns_tcp_auth_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcDnsTcpAuthRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_dns_tcp_auth_sent: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcDnsTcpAuthSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_dns_udp_auth_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcDnsUdpAuthRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_dns_udp_auth_sent: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcDnsUdpAuthSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_dst_bl_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcDstBlRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_dst_bl_sent: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcDstBlSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_dst_dns_tcp_auth_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcDstDnsTcpAuthRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_dst_dns_tcp_auth_sent: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcDstDnsTcpAuthSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_dst_dns_udp_auth_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcDstDnsUdpAuthRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_dst_dns_udp_auth_sent: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcDstDnsUdpAuthSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_dst_icmp_wl_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcDstIcmpWlRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_dst_icmp_wl_sent: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcDstIcmpWlSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_dst_no_dst_drop: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcDstNoDstDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_dst_other_wl_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcDstOtherWlRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_dst_other_wl_sent: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcDstOtherWlSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_dst_rcv: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcDstRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_dst_sent: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcDstSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_dst_tcp_wl_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcDstTcpWlRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_dst_tcp_wl_sent: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcDstTcpWlSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_dst_udp_wl_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcDstUdpWlRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_dst_udp_wl_sent: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcDstUdpWlSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_icmp_wl_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcIcmpWlRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_icmp_wl_sent: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcIcmpWlSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_other_wl_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcOtherWlRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_other_wl_sent: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcOtherWlSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_rcv: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_sent: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_tcp_wl_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcTcpWlRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_tcp_wl_sent: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcTcpWlSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_udp_wl_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcUdpWlRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_src_udp_wl_sent: {
      value: cdktf.numberToHclTerraform(struct!.syncSrcUdpWlSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_szp_bl_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.syncSzpBlRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_szp_bl_sent: {
      value: cdktf.numberToHclTerraform(struct!.syncSzpBlSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_szp_dns_tcp_auth_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.syncSzpDnsTcpAuthRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_szp_dns_tcp_auth_sent: {
      value: cdktf.numberToHclTerraform(struct!.syncSzpDnsTcpAuthSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_szp_dns_udp_auth_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.syncSzpDnsUdpAuthRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_szp_dns_udp_auth_sent: {
      value: cdktf.numberToHclTerraform(struct!.syncSzpDnsUdpAuthSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_szp_icmp_auth_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.syncSzpIcmpAuthRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_szp_icmp_auth_sent: {
      value: cdktf.numberToHclTerraform(struct!.syncSzpIcmpAuthSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_szp_no_dst_drop: {
      value: cdktf.numberToHclTerraform(struct!.syncSzpNoDstDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_szp_other_auth_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.syncSzpOtherAuthRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_szp_other_auth_sent: {
      value: cdktf.numberToHclTerraform(struct!.syncSzpOtherAuthSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_szp_rcv: {
      value: cdktf.numberToHclTerraform(struct!.syncSzpRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_szp_sent: {
      value: cdktf.numberToHclTerraform(struct!.syncSzpSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_szp_tcp_auth_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.syncSzpTcpAuthRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_szp_tcp_auth_sent: {
      value: cdktf.numberToHclTerraform(struct!.syncSzpTcpAuthSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_szp_udp_auth_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.syncSzpUdpAuthRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_szp_udp_auth_sent: {
      value: cdktf.numberToHclTerraform(struct!.syncSzpUdpAuthSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosL4SyncStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosL4SyncStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._syncDstRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncDstRcv = this._syncDstRcv;
    }
    if (this._syncDstSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncDstSent = this._syncDstSent;
    }
    if (this._syncHelloRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncHelloRcv = this._syncHelloRcv;
    }
    if (this._syncHelloSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncHelloSent = this._syncHelloSent;
    }
    if (this._syncRcvEntryConflictStatic !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRcvEntryConflictStatic = this._syncRcvEntryConflictStatic;
    }
    if (this._syncRcvEntryCreateFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRcvEntryCreateFail = this._syncRcvEntryCreateFail;
    }
    if (this._syncRcvEntryUnk !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRcvEntryUnk = this._syncRcvEntryUnk;
    }
    if (this._syncRcvEntryUnkSubtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRcvEntryUnkSubtype = this._syncRcvEntryUnkSubtype;
    }
    if (this._syncRcvFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRcvFail = this._syncRcvFail;
    }
    if (this._syncRcvHelloUnkPeer !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRcvHelloUnkPeer = this._syncRcvHelloUnkPeer;
    }
    if (this._syncRcvHelloUnkSubtype !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRcvHelloUnkSubtype = this._syncRcvHelloUnkSubtype;
    }
    if (this._syncRcvUnkMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncRcvUnkMsg = this._syncRcvUnkMsg;
    }
    if (this._syncSentFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSentFail = this._syncSentFail;
    }
    if (this._syncSentNoPeer !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSentNoPeer = this._syncSentNoPeer;
    }
    if (this._syncSrcBlRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcBlRcvd = this._syncSrcBlRcvd;
    }
    if (this._syncSrcBlSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcBlSent = this._syncSrcBlSent;
    }
    if (this._syncSrcDnsTcpAuthRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcDnsTcpAuthRcvd = this._syncSrcDnsTcpAuthRcvd;
    }
    if (this._syncSrcDnsTcpAuthSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcDnsTcpAuthSent = this._syncSrcDnsTcpAuthSent;
    }
    if (this._syncSrcDnsUdpAuthRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcDnsUdpAuthRcvd = this._syncSrcDnsUdpAuthRcvd;
    }
    if (this._syncSrcDnsUdpAuthSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcDnsUdpAuthSent = this._syncSrcDnsUdpAuthSent;
    }
    if (this._syncSrcDstBlRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcDstBlRcvd = this._syncSrcDstBlRcvd;
    }
    if (this._syncSrcDstBlSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcDstBlSent = this._syncSrcDstBlSent;
    }
    if (this._syncSrcDstDnsTcpAuthRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcDstDnsTcpAuthRcvd = this._syncSrcDstDnsTcpAuthRcvd;
    }
    if (this._syncSrcDstDnsTcpAuthSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcDstDnsTcpAuthSent = this._syncSrcDstDnsTcpAuthSent;
    }
    if (this._syncSrcDstDnsUdpAuthRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcDstDnsUdpAuthRcvd = this._syncSrcDstDnsUdpAuthRcvd;
    }
    if (this._syncSrcDstDnsUdpAuthSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcDstDnsUdpAuthSent = this._syncSrcDstDnsUdpAuthSent;
    }
    if (this._syncSrcDstIcmpWlRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcDstIcmpWlRcvd = this._syncSrcDstIcmpWlRcvd;
    }
    if (this._syncSrcDstIcmpWlSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcDstIcmpWlSent = this._syncSrcDstIcmpWlSent;
    }
    if (this._syncSrcDstNoDstDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcDstNoDstDrop = this._syncSrcDstNoDstDrop;
    }
    if (this._syncSrcDstOtherWlRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcDstOtherWlRcvd = this._syncSrcDstOtherWlRcvd;
    }
    if (this._syncSrcDstOtherWlSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcDstOtherWlSent = this._syncSrcDstOtherWlSent;
    }
    if (this._syncSrcDstRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcDstRcv = this._syncSrcDstRcv;
    }
    if (this._syncSrcDstSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcDstSent = this._syncSrcDstSent;
    }
    if (this._syncSrcDstTcpWlRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcDstTcpWlRcvd = this._syncSrcDstTcpWlRcvd;
    }
    if (this._syncSrcDstTcpWlSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcDstTcpWlSent = this._syncSrcDstTcpWlSent;
    }
    if (this._syncSrcDstUdpWlRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcDstUdpWlRcvd = this._syncSrcDstUdpWlRcvd;
    }
    if (this._syncSrcDstUdpWlSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcDstUdpWlSent = this._syncSrcDstUdpWlSent;
    }
    if (this._syncSrcIcmpWlRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcIcmpWlRcvd = this._syncSrcIcmpWlRcvd;
    }
    if (this._syncSrcIcmpWlSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcIcmpWlSent = this._syncSrcIcmpWlSent;
    }
    if (this._syncSrcOtherWlRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcOtherWlRcvd = this._syncSrcOtherWlRcvd;
    }
    if (this._syncSrcOtherWlSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcOtherWlSent = this._syncSrcOtherWlSent;
    }
    if (this._syncSrcRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcRcv = this._syncSrcRcv;
    }
    if (this._syncSrcSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcSent = this._syncSrcSent;
    }
    if (this._syncSrcTcpWlRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcTcpWlRcvd = this._syncSrcTcpWlRcvd;
    }
    if (this._syncSrcTcpWlSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcTcpWlSent = this._syncSrcTcpWlSent;
    }
    if (this._syncSrcUdpWlRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcUdpWlRcvd = this._syncSrcUdpWlRcvd;
    }
    if (this._syncSrcUdpWlSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSrcUdpWlSent = this._syncSrcUdpWlSent;
    }
    if (this._syncSzpBlRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSzpBlRcvd = this._syncSzpBlRcvd;
    }
    if (this._syncSzpBlSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSzpBlSent = this._syncSzpBlSent;
    }
    if (this._syncSzpDnsTcpAuthRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSzpDnsTcpAuthRcvd = this._syncSzpDnsTcpAuthRcvd;
    }
    if (this._syncSzpDnsTcpAuthSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSzpDnsTcpAuthSent = this._syncSzpDnsTcpAuthSent;
    }
    if (this._syncSzpDnsUdpAuthRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSzpDnsUdpAuthRcvd = this._syncSzpDnsUdpAuthRcvd;
    }
    if (this._syncSzpDnsUdpAuthSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSzpDnsUdpAuthSent = this._syncSzpDnsUdpAuthSent;
    }
    if (this._syncSzpIcmpAuthRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSzpIcmpAuthRcvd = this._syncSzpIcmpAuthRcvd;
    }
    if (this._syncSzpIcmpAuthSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSzpIcmpAuthSent = this._syncSzpIcmpAuthSent;
    }
    if (this._syncSzpNoDstDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSzpNoDstDrop = this._syncSzpNoDstDrop;
    }
    if (this._syncSzpOtherAuthRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSzpOtherAuthRcvd = this._syncSzpOtherAuthRcvd;
    }
    if (this._syncSzpOtherAuthSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSzpOtherAuthSent = this._syncSzpOtherAuthSent;
    }
    if (this._syncSzpRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSzpRcv = this._syncSzpRcv;
    }
    if (this._syncSzpSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSzpSent = this._syncSzpSent;
    }
    if (this._syncSzpTcpAuthRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSzpTcpAuthRcvd = this._syncSzpTcpAuthRcvd;
    }
    if (this._syncSzpTcpAuthSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSzpTcpAuthSent = this._syncSzpTcpAuthSent;
    }
    if (this._syncSzpUdpAuthRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSzpUdpAuthRcvd = this._syncSzpUdpAuthRcvd;
    }
    if (this._syncSzpUdpAuthSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncSzpUdpAuthSent = this._syncSzpUdpAuthSent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosL4SyncStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._syncDstRcv = undefined;
      this._syncDstSent = undefined;
      this._syncHelloRcv = undefined;
      this._syncHelloSent = undefined;
      this._syncRcvEntryConflictStatic = undefined;
      this._syncRcvEntryCreateFail = undefined;
      this._syncRcvEntryUnk = undefined;
      this._syncRcvEntryUnkSubtype = undefined;
      this._syncRcvFail = undefined;
      this._syncRcvHelloUnkPeer = undefined;
      this._syncRcvHelloUnkSubtype = undefined;
      this._syncRcvUnkMsg = undefined;
      this._syncSentFail = undefined;
      this._syncSentNoPeer = undefined;
      this._syncSrcBlRcvd = undefined;
      this._syncSrcBlSent = undefined;
      this._syncSrcDnsTcpAuthRcvd = undefined;
      this._syncSrcDnsTcpAuthSent = undefined;
      this._syncSrcDnsUdpAuthRcvd = undefined;
      this._syncSrcDnsUdpAuthSent = undefined;
      this._syncSrcDstBlRcvd = undefined;
      this._syncSrcDstBlSent = undefined;
      this._syncSrcDstDnsTcpAuthRcvd = undefined;
      this._syncSrcDstDnsTcpAuthSent = undefined;
      this._syncSrcDstDnsUdpAuthRcvd = undefined;
      this._syncSrcDstDnsUdpAuthSent = undefined;
      this._syncSrcDstIcmpWlRcvd = undefined;
      this._syncSrcDstIcmpWlSent = undefined;
      this._syncSrcDstNoDstDrop = undefined;
      this._syncSrcDstOtherWlRcvd = undefined;
      this._syncSrcDstOtherWlSent = undefined;
      this._syncSrcDstRcv = undefined;
      this._syncSrcDstSent = undefined;
      this._syncSrcDstTcpWlRcvd = undefined;
      this._syncSrcDstTcpWlSent = undefined;
      this._syncSrcDstUdpWlRcvd = undefined;
      this._syncSrcDstUdpWlSent = undefined;
      this._syncSrcIcmpWlRcvd = undefined;
      this._syncSrcIcmpWlSent = undefined;
      this._syncSrcOtherWlRcvd = undefined;
      this._syncSrcOtherWlSent = undefined;
      this._syncSrcRcv = undefined;
      this._syncSrcSent = undefined;
      this._syncSrcTcpWlRcvd = undefined;
      this._syncSrcTcpWlSent = undefined;
      this._syncSrcUdpWlRcvd = undefined;
      this._syncSrcUdpWlSent = undefined;
      this._syncSzpBlRcvd = undefined;
      this._syncSzpBlSent = undefined;
      this._syncSzpDnsTcpAuthRcvd = undefined;
      this._syncSzpDnsTcpAuthSent = undefined;
      this._syncSzpDnsUdpAuthRcvd = undefined;
      this._syncSzpDnsUdpAuthSent = undefined;
      this._syncSzpIcmpAuthRcvd = undefined;
      this._syncSzpIcmpAuthSent = undefined;
      this._syncSzpNoDstDrop = undefined;
      this._syncSzpOtherAuthRcvd = undefined;
      this._syncSzpOtherAuthSent = undefined;
      this._syncSzpRcv = undefined;
      this._syncSzpSent = undefined;
      this._syncSzpTcpAuthRcvd = undefined;
      this._syncSzpTcpAuthSent = undefined;
      this._syncSzpUdpAuthRcvd = undefined;
      this._syncSzpUdpAuthSent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._syncDstRcv = value.syncDstRcv;
      this._syncDstSent = value.syncDstSent;
      this._syncHelloRcv = value.syncHelloRcv;
      this._syncHelloSent = value.syncHelloSent;
      this._syncRcvEntryConflictStatic = value.syncRcvEntryConflictStatic;
      this._syncRcvEntryCreateFail = value.syncRcvEntryCreateFail;
      this._syncRcvEntryUnk = value.syncRcvEntryUnk;
      this._syncRcvEntryUnkSubtype = value.syncRcvEntryUnkSubtype;
      this._syncRcvFail = value.syncRcvFail;
      this._syncRcvHelloUnkPeer = value.syncRcvHelloUnkPeer;
      this._syncRcvHelloUnkSubtype = value.syncRcvHelloUnkSubtype;
      this._syncRcvUnkMsg = value.syncRcvUnkMsg;
      this._syncSentFail = value.syncSentFail;
      this._syncSentNoPeer = value.syncSentNoPeer;
      this._syncSrcBlRcvd = value.syncSrcBlRcvd;
      this._syncSrcBlSent = value.syncSrcBlSent;
      this._syncSrcDnsTcpAuthRcvd = value.syncSrcDnsTcpAuthRcvd;
      this._syncSrcDnsTcpAuthSent = value.syncSrcDnsTcpAuthSent;
      this._syncSrcDnsUdpAuthRcvd = value.syncSrcDnsUdpAuthRcvd;
      this._syncSrcDnsUdpAuthSent = value.syncSrcDnsUdpAuthSent;
      this._syncSrcDstBlRcvd = value.syncSrcDstBlRcvd;
      this._syncSrcDstBlSent = value.syncSrcDstBlSent;
      this._syncSrcDstDnsTcpAuthRcvd = value.syncSrcDstDnsTcpAuthRcvd;
      this._syncSrcDstDnsTcpAuthSent = value.syncSrcDstDnsTcpAuthSent;
      this._syncSrcDstDnsUdpAuthRcvd = value.syncSrcDstDnsUdpAuthRcvd;
      this._syncSrcDstDnsUdpAuthSent = value.syncSrcDstDnsUdpAuthSent;
      this._syncSrcDstIcmpWlRcvd = value.syncSrcDstIcmpWlRcvd;
      this._syncSrcDstIcmpWlSent = value.syncSrcDstIcmpWlSent;
      this._syncSrcDstNoDstDrop = value.syncSrcDstNoDstDrop;
      this._syncSrcDstOtherWlRcvd = value.syncSrcDstOtherWlRcvd;
      this._syncSrcDstOtherWlSent = value.syncSrcDstOtherWlSent;
      this._syncSrcDstRcv = value.syncSrcDstRcv;
      this._syncSrcDstSent = value.syncSrcDstSent;
      this._syncSrcDstTcpWlRcvd = value.syncSrcDstTcpWlRcvd;
      this._syncSrcDstTcpWlSent = value.syncSrcDstTcpWlSent;
      this._syncSrcDstUdpWlRcvd = value.syncSrcDstUdpWlRcvd;
      this._syncSrcDstUdpWlSent = value.syncSrcDstUdpWlSent;
      this._syncSrcIcmpWlRcvd = value.syncSrcIcmpWlRcvd;
      this._syncSrcIcmpWlSent = value.syncSrcIcmpWlSent;
      this._syncSrcOtherWlRcvd = value.syncSrcOtherWlRcvd;
      this._syncSrcOtherWlSent = value.syncSrcOtherWlSent;
      this._syncSrcRcv = value.syncSrcRcv;
      this._syncSrcSent = value.syncSrcSent;
      this._syncSrcTcpWlRcvd = value.syncSrcTcpWlRcvd;
      this._syncSrcTcpWlSent = value.syncSrcTcpWlSent;
      this._syncSrcUdpWlRcvd = value.syncSrcUdpWlRcvd;
      this._syncSrcUdpWlSent = value.syncSrcUdpWlSent;
      this._syncSzpBlRcvd = value.syncSzpBlRcvd;
      this._syncSzpBlSent = value.syncSzpBlSent;
      this._syncSzpDnsTcpAuthRcvd = value.syncSzpDnsTcpAuthRcvd;
      this._syncSzpDnsTcpAuthSent = value.syncSzpDnsTcpAuthSent;
      this._syncSzpDnsUdpAuthRcvd = value.syncSzpDnsUdpAuthRcvd;
      this._syncSzpDnsUdpAuthSent = value.syncSzpDnsUdpAuthSent;
      this._syncSzpIcmpAuthRcvd = value.syncSzpIcmpAuthRcvd;
      this._syncSzpIcmpAuthSent = value.syncSzpIcmpAuthSent;
      this._syncSzpNoDstDrop = value.syncSzpNoDstDrop;
      this._syncSzpOtherAuthRcvd = value.syncSzpOtherAuthRcvd;
      this._syncSzpOtherAuthSent = value.syncSzpOtherAuthSent;
      this._syncSzpRcv = value.syncSzpRcv;
      this._syncSzpSent = value.syncSzpSent;
      this._syncSzpTcpAuthRcvd = value.syncSzpTcpAuthRcvd;
      this._syncSzpTcpAuthSent = value.syncSzpTcpAuthSent;
      this._syncSzpUdpAuthRcvd = value.syncSzpUdpAuthRcvd;
      this._syncSzpUdpAuthSent = value.syncSzpUdpAuthSent;
    }
  }

  // sync_dst_rcv - computed: false, optional: true, required: false
  private _syncDstRcv?: number; 
  public get syncDstRcv() {
    return this.getNumberAttribute('sync_dst_rcv');
  }
  public set syncDstRcv(value: number) {
    this._syncDstRcv = value;
  }
  public resetSyncDstRcv() {
    this._syncDstRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncDstRcvInput() {
    return this._syncDstRcv;
  }

  // sync_dst_sent - computed: false, optional: true, required: false
  private _syncDstSent?: number; 
  public get syncDstSent() {
    return this.getNumberAttribute('sync_dst_sent');
  }
  public set syncDstSent(value: number) {
    this._syncDstSent = value;
  }
  public resetSyncDstSent() {
    this._syncDstSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncDstSentInput() {
    return this._syncDstSent;
  }

  // sync_hello_rcv - computed: false, optional: true, required: false
  private _syncHelloRcv?: number; 
  public get syncHelloRcv() {
    return this.getNumberAttribute('sync_hello_rcv');
  }
  public set syncHelloRcv(value: number) {
    this._syncHelloRcv = value;
  }
  public resetSyncHelloRcv() {
    this._syncHelloRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncHelloRcvInput() {
    return this._syncHelloRcv;
  }

  // sync_hello_sent - computed: false, optional: true, required: false
  private _syncHelloSent?: number; 
  public get syncHelloSent() {
    return this.getNumberAttribute('sync_hello_sent');
  }
  public set syncHelloSent(value: number) {
    this._syncHelloSent = value;
  }
  public resetSyncHelloSent() {
    this._syncHelloSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncHelloSentInput() {
    return this._syncHelloSent;
  }

  // sync_rcv_entry_conflict_static - computed: false, optional: true, required: false
  private _syncRcvEntryConflictStatic?: number; 
  public get syncRcvEntryConflictStatic() {
    return this.getNumberAttribute('sync_rcv_entry_conflict_static');
  }
  public set syncRcvEntryConflictStatic(value: number) {
    this._syncRcvEntryConflictStatic = value;
  }
  public resetSyncRcvEntryConflictStatic() {
    this._syncRcvEntryConflictStatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRcvEntryConflictStaticInput() {
    return this._syncRcvEntryConflictStatic;
  }

  // sync_rcv_entry_create_fail - computed: false, optional: true, required: false
  private _syncRcvEntryCreateFail?: number; 
  public get syncRcvEntryCreateFail() {
    return this.getNumberAttribute('sync_rcv_entry_create_fail');
  }
  public set syncRcvEntryCreateFail(value: number) {
    this._syncRcvEntryCreateFail = value;
  }
  public resetSyncRcvEntryCreateFail() {
    this._syncRcvEntryCreateFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRcvEntryCreateFailInput() {
    return this._syncRcvEntryCreateFail;
  }

  // sync_rcv_entry_unk - computed: false, optional: true, required: false
  private _syncRcvEntryUnk?: number; 
  public get syncRcvEntryUnk() {
    return this.getNumberAttribute('sync_rcv_entry_unk');
  }
  public set syncRcvEntryUnk(value: number) {
    this._syncRcvEntryUnk = value;
  }
  public resetSyncRcvEntryUnk() {
    this._syncRcvEntryUnk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRcvEntryUnkInput() {
    return this._syncRcvEntryUnk;
  }

  // sync_rcv_entry_unk_subtype - computed: false, optional: true, required: false
  private _syncRcvEntryUnkSubtype?: number; 
  public get syncRcvEntryUnkSubtype() {
    return this.getNumberAttribute('sync_rcv_entry_unk_subtype');
  }
  public set syncRcvEntryUnkSubtype(value: number) {
    this._syncRcvEntryUnkSubtype = value;
  }
  public resetSyncRcvEntryUnkSubtype() {
    this._syncRcvEntryUnkSubtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRcvEntryUnkSubtypeInput() {
    return this._syncRcvEntryUnkSubtype;
  }

  // sync_rcv_fail - computed: false, optional: true, required: false
  private _syncRcvFail?: number; 
  public get syncRcvFail() {
    return this.getNumberAttribute('sync_rcv_fail');
  }
  public set syncRcvFail(value: number) {
    this._syncRcvFail = value;
  }
  public resetSyncRcvFail() {
    this._syncRcvFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRcvFailInput() {
    return this._syncRcvFail;
  }

  // sync_rcv_hello_unk_peer - computed: false, optional: true, required: false
  private _syncRcvHelloUnkPeer?: number; 
  public get syncRcvHelloUnkPeer() {
    return this.getNumberAttribute('sync_rcv_hello_unk_peer');
  }
  public set syncRcvHelloUnkPeer(value: number) {
    this._syncRcvHelloUnkPeer = value;
  }
  public resetSyncRcvHelloUnkPeer() {
    this._syncRcvHelloUnkPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRcvHelloUnkPeerInput() {
    return this._syncRcvHelloUnkPeer;
  }

  // sync_rcv_hello_unk_subtype - computed: false, optional: true, required: false
  private _syncRcvHelloUnkSubtype?: number; 
  public get syncRcvHelloUnkSubtype() {
    return this.getNumberAttribute('sync_rcv_hello_unk_subtype');
  }
  public set syncRcvHelloUnkSubtype(value: number) {
    this._syncRcvHelloUnkSubtype = value;
  }
  public resetSyncRcvHelloUnkSubtype() {
    this._syncRcvHelloUnkSubtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRcvHelloUnkSubtypeInput() {
    return this._syncRcvHelloUnkSubtype;
  }

  // sync_rcv_unk_msg - computed: false, optional: true, required: false
  private _syncRcvUnkMsg?: number; 
  public get syncRcvUnkMsg() {
    return this.getNumberAttribute('sync_rcv_unk_msg');
  }
  public set syncRcvUnkMsg(value: number) {
    this._syncRcvUnkMsg = value;
  }
  public resetSyncRcvUnkMsg() {
    this._syncRcvUnkMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncRcvUnkMsgInput() {
    return this._syncRcvUnkMsg;
  }

  // sync_sent_fail - computed: false, optional: true, required: false
  private _syncSentFail?: number; 
  public get syncSentFail() {
    return this.getNumberAttribute('sync_sent_fail');
  }
  public set syncSentFail(value: number) {
    this._syncSentFail = value;
  }
  public resetSyncSentFail() {
    this._syncSentFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSentFailInput() {
    return this._syncSentFail;
  }

  // sync_sent_no_peer - computed: false, optional: true, required: false
  private _syncSentNoPeer?: number; 
  public get syncSentNoPeer() {
    return this.getNumberAttribute('sync_sent_no_peer');
  }
  public set syncSentNoPeer(value: number) {
    this._syncSentNoPeer = value;
  }
  public resetSyncSentNoPeer() {
    this._syncSentNoPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSentNoPeerInput() {
    return this._syncSentNoPeer;
  }

  // sync_src_bl_rcvd - computed: false, optional: true, required: false
  private _syncSrcBlRcvd?: number; 
  public get syncSrcBlRcvd() {
    return this.getNumberAttribute('sync_src_bl_rcvd');
  }
  public set syncSrcBlRcvd(value: number) {
    this._syncSrcBlRcvd = value;
  }
  public resetSyncSrcBlRcvd() {
    this._syncSrcBlRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcBlRcvdInput() {
    return this._syncSrcBlRcvd;
  }

  // sync_src_bl_sent - computed: false, optional: true, required: false
  private _syncSrcBlSent?: number; 
  public get syncSrcBlSent() {
    return this.getNumberAttribute('sync_src_bl_sent');
  }
  public set syncSrcBlSent(value: number) {
    this._syncSrcBlSent = value;
  }
  public resetSyncSrcBlSent() {
    this._syncSrcBlSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcBlSentInput() {
    return this._syncSrcBlSent;
  }

  // sync_src_dns_tcp_auth_rcvd - computed: false, optional: true, required: false
  private _syncSrcDnsTcpAuthRcvd?: number; 
  public get syncSrcDnsTcpAuthRcvd() {
    return this.getNumberAttribute('sync_src_dns_tcp_auth_rcvd');
  }
  public set syncSrcDnsTcpAuthRcvd(value: number) {
    this._syncSrcDnsTcpAuthRcvd = value;
  }
  public resetSyncSrcDnsTcpAuthRcvd() {
    this._syncSrcDnsTcpAuthRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcDnsTcpAuthRcvdInput() {
    return this._syncSrcDnsTcpAuthRcvd;
  }

  // sync_src_dns_tcp_auth_sent - computed: false, optional: true, required: false
  private _syncSrcDnsTcpAuthSent?: number; 
  public get syncSrcDnsTcpAuthSent() {
    return this.getNumberAttribute('sync_src_dns_tcp_auth_sent');
  }
  public set syncSrcDnsTcpAuthSent(value: number) {
    this._syncSrcDnsTcpAuthSent = value;
  }
  public resetSyncSrcDnsTcpAuthSent() {
    this._syncSrcDnsTcpAuthSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcDnsTcpAuthSentInput() {
    return this._syncSrcDnsTcpAuthSent;
  }

  // sync_src_dns_udp_auth_rcvd - computed: false, optional: true, required: false
  private _syncSrcDnsUdpAuthRcvd?: number; 
  public get syncSrcDnsUdpAuthRcvd() {
    return this.getNumberAttribute('sync_src_dns_udp_auth_rcvd');
  }
  public set syncSrcDnsUdpAuthRcvd(value: number) {
    this._syncSrcDnsUdpAuthRcvd = value;
  }
  public resetSyncSrcDnsUdpAuthRcvd() {
    this._syncSrcDnsUdpAuthRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcDnsUdpAuthRcvdInput() {
    return this._syncSrcDnsUdpAuthRcvd;
  }

  // sync_src_dns_udp_auth_sent - computed: false, optional: true, required: false
  private _syncSrcDnsUdpAuthSent?: number; 
  public get syncSrcDnsUdpAuthSent() {
    return this.getNumberAttribute('sync_src_dns_udp_auth_sent');
  }
  public set syncSrcDnsUdpAuthSent(value: number) {
    this._syncSrcDnsUdpAuthSent = value;
  }
  public resetSyncSrcDnsUdpAuthSent() {
    this._syncSrcDnsUdpAuthSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcDnsUdpAuthSentInput() {
    return this._syncSrcDnsUdpAuthSent;
  }

  // sync_src_dst_bl_rcvd - computed: false, optional: true, required: false
  private _syncSrcDstBlRcvd?: number; 
  public get syncSrcDstBlRcvd() {
    return this.getNumberAttribute('sync_src_dst_bl_rcvd');
  }
  public set syncSrcDstBlRcvd(value: number) {
    this._syncSrcDstBlRcvd = value;
  }
  public resetSyncSrcDstBlRcvd() {
    this._syncSrcDstBlRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcDstBlRcvdInput() {
    return this._syncSrcDstBlRcvd;
  }

  // sync_src_dst_bl_sent - computed: false, optional: true, required: false
  private _syncSrcDstBlSent?: number; 
  public get syncSrcDstBlSent() {
    return this.getNumberAttribute('sync_src_dst_bl_sent');
  }
  public set syncSrcDstBlSent(value: number) {
    this._syncSrcDstBlSent = value;
  }
  public resetSyncSrcDstBlSent() {
    this._syncSrcDstBlSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcDstBlSentInput() {
    return this._syncSrcDstBlSent;
  }

  // sync_src_dst_dns_tcp_auth_rcvd - computed: false, optional: true, required: false
  private _syncSrcDstDnsTcpAuthRcvd?: number; 
  public get syncSrcDstDnsTcpAuthRcvd() {
    return this.getNumberAttribute('sync_src_dst_dns_tcp_auth_rcvd');
  }
  public set syncSrcDstDnsTcpAuthRcvd(value: number) {
    this._syncSrcDstDnsTcpAuthRcvd = value;
  }
  public resetSyncSrcDstDnsTcpAuthRcvd() {
    this._syncSrcDstDnsTcpAuthRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcDstDnsTcpAuthRcvdInput() {
    return this._syncSrcDstDnsTcpAuthRcvd;
  }

  // sync_src_dst_dns_tcp_auth_sent - computed: false, optional: true, required: false
  private _syncSrcDstDnsTcpAuthSent?: number; 
  public get syncSrcDstDnsTcpAuthSent() {
    return this.getNumberAttribute('sync_src_dst_dns_tcp_auth_sent');
  }
  public set syncSrcDstDnsTcpAuthSent(value: number) {
    this._syncSrcDstDnsTcpAuthSent = value;
  }
  public resetSyncSrcDstDnsTcpAuthSent() {
    this._syncSrcDstDnsTcpAuthSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcDstDnsTcpAuthSentInput() {
    return this._syncSrcDstDnsTcpAuthSent;
  }

  // sync_src_dst_dns_udp_auth_rcvd - computed: false, optional: true, required: false
  private _syncSrcDstDnsUdpAuthRcvd?: number; 
  public get syncSrcDstDnsUdpAuthRcvd() {
    return this.getNumberAttribute('sync_src_dst_dns_udp_auth_rcvd');
  }
  public set syncSrcDstDnsUdpAuthRcvd(value: number) {
    this._syncSrcDstDnsUdpAuthRcvd = value;
  }
  public resetSyncSrcDstDnsUdpAuthRcvd() {
    this._syncSrcDstDnsUdpAuthRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcDstDnsUdpAuthRcvdInput() {
    return this._syncSrcDstDnsUdpAuthRcvd;
  }

  // sync_src_dst_dns_udp_auth_sent - computed: false, optional: true, required: false
  private _syncSrcDstDnsUdpAuthSent?: number; 
  public get syncSrcDstDnsUdpAuthSent() {
    return this.getNumberAttribute('sync_src_dst_dns_udp_auth_sent');
  }
  public set syncSrcDstDnsUdpAuthSent(value: number) {
    this._syncSrcDstDnsUdpAuthSent = value;
  }
  public resetSyncSrcDstDnsUdpAuthSent() {
    this._syncSrcDstDnsUdpAuthSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcDstDnsUdpAuthSentInput() {
    return this._syncSrcDstDnsUdpAuthSent;
  }

  // sync_src_dst_icmp_wl_rcvd - computed: false, optional: true, required: false
  private _syncSrcDstIcmpWlRcvd?: number; 
  public get syncSrcDstIcmpWlRcvd() {
    return this.getNumberAttribute('sync_src_dst_icmp_wl_rcvd');
  }
  public set syncSrcDstIcmpWlRcvd(value: number) {
    this._syncSrcDstIcmpWlRcvd = value;
  }
  public resetSyncSrcDstIcmpWlRcvd() {
    this._syncSrcDstIcmpWlRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcDstIcmpWlRcvdInput() {
    return this._syncSrcDstIcmpWlRcvd;
  }

  // sync_src_dst_icmp_wl_sent - computed: false, optional: true, required: false
  private _syncSrcDstIcmpWlSent?: number; 
  public get syncSrcDstIcmpWlSent() {
    return this.getNumberAttribute('sync_src_dst_icmp_wl_sent');
  }
  public set syncSrcDstIcmpWlSent(value: number) {
    this._syncSrcDstIcmpWlSent = value;
  }
  public resetSyncSrcDstIcmpWlSent() {
    this._syncSrcDstIcmpWlSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcDstIcmpWlSentInput() {
    return this._syncSrcDstIcmpWlSent;
  }

  // sync_src_dst_no_dst_drop - computed: false, optional: true, required: false
  private _syncSrcDstNoDstDrop?: number; 
  public get syncSrcDstNoDstDrop() {
    return this.getNumberAttribute('sync_src_dst_no_dst_drop');
  }
  public set syncSrcDstNoDstDrop(value: number) {
    this._syncSrcDstNoDstDrop = value;
  }
  public resetSyncSrcDstNoDstDrop() {
    this._syncSrcDstNoDstDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcDstNoDstDropInput() {
    return this._syncSrcDstNoDstDrop;
  }

  // sync_src_dst_other_wl_rcvd - computed: false, optional: true, required: false
  private _syncSrcDstOtherWlRcvd?: number; 
  public get syncSrcDstOtherWlRcvd() {
    return this.getNumberAttribute('sync_src_dst_other_wl_rcvd');
  }
  public set syncSrcDstOtherWlRcvd(value: number) {
    this._syncSrcDstOtherWlRcvd = value;
  }
  public resetSyncSrcDstOtherWlRcvd() {
    this._syncSrcDstOtherWlRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcDstOtherWlRcvdInput() {
    return this._syncSrcDstOtherWlRcvd;
  }

  // sync_src_dst_other_wl_sent - computed: false, optional: true, required: false
  private _syncSrcDstOtherWlSent?: number; 
  public get syncSrcDstOtherWlSent() {
    return this.getNumberAttribute('sync_src_dst_other_wl_sent');
  }
  public set syncSrcDstOtherWlSent(value: number) {
    this._syncSrcDstOtherWlSent = value;
  }
  public resetSyncSrcDstOtherWlSent() {
    this._syncSrcDstOtherWlSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcDstOtherWlSentInput() {
    return this._syncSrcDstOtherWlSent;
  }

  // sync_src_dst_rcv - computed: false, optional: true, required: false
  private _syncSrcDstRcv?: number; 
  public get syncSrcDstRcv() {
    return this.getNumberAttribute('sync_src_dst_rcv');
  }
  public set syncSrcDstRcv(value: number) {
    this._syncSrcDstRcv = value;
  }
  public resetSyncSrcDstRcv() {
    this._syncSrcDstRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcDstRcvInput() {
    return this._syncSrcDstRcv;
  }

  // sync_src_dst_sent - computed: false, optional: true, required: false
  private _syncSrcDstSent?: number; 
  public get syncSrcDstSent() {
    return this.getNumberAttribute('sync_src_dst_sent');
  }
  public set syncSrcDstSent(value: number) {
    this._syncSrcDstSent = value;
  }
  public resetSyncSrcDstSent() {
    this._syncSrcDstSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcDstSentInput() {
    return this._syncSrcDstSent;
  }

  // sync_src_dst_tcp_wl_rcvd - computed: false, optional: true, required: false
  private _syncSrcDstTcpWlRcvd?: number; 
  public get syncSrcDstTcpWlRcvd() {
    return this.getNumberAttribute('sync_src_dst_tcp_wl_rcvd');
  }
  public set syncSrcDstTcpWlRcvd(value: number) {
    this._syncSrcDstTcpWlRcvd = value;
  }
  public resetSyncSrcDstTcpWlRcvd() {
    this._syncSrcDstTcpWlRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcDstTcpWlRcvdInput() {
    return this._syncSrcDstTcpWlRcvd;
  }

  // sync_src_dst_tcp_wl_sent - computed: false, optional: true, required: false
  private _syncSrcDstTcpWlSent?: number; 
  public get syncSrcDstTcpWlSent() {
    return this.getNumberAttribute('sync_src_dst_tcp_wl_sent');
  }
  public set syncSrcDstTcpWlSent(value: number) {
    this._syncSrcDstTcpWlSent = value;
  }
  public resetSyncSrcDstTcpWlSent() {
    this._syncSrcDstTcpWlSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcDstTcpWlSentInput() {
    return this._syncSrcDstTcpWlSent;
  }

  // sync_src_dst_udp_wl_rcvd - computed: false, optional: true, required: false
  private _syncSrcDstUdpWlRcvd?: number; 
  public get syncSrcDstUdpWlRcvd() {
    return this.getNumberAttribute('sync_src_dst_udp_wl_rcvd');
  }
  public set syncSrcDstUdpWlRcvd(value: number) {
    this._syncSrcDstUdpWlRcvd = value;
  }
  public resetSyncSrcDstUdpWlRcvd() {
    this._syncSrcDstUdpWlRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcDstUdpWlRcvdInput() {
    return this._syncSrcDstUdpWlRcvd;
  }

  // sync_src_dst_udp_wl_sent - computed: false, optional: true, required: false
  private _syncSrcDstUdpWlSent?: number; 
  public get syncSrcDstUdpWlSent() {
    return this.getNumberAttribute('sync_src_dst_udp_wl_sent');
  }
  public set syncSrcDstUdpWlSent(value: number) {
    this._syncSrcDstUdpWlSent = value;
  }
  public resetSyncSrcDstUdpWlSent() {
    this._syncSrcDstUdpWlSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcDstUdpWlSentInput() {
    return this._syncSrcDstUdpWlSent;
  }

  // sync_src_icmp_wl_rcvd - computed: false, optional: true, required: false
  private _syncSrcIcmpWlRcvd?: number; 
  public get syncSrcIcmpWlRcvd() {
    return this.getNumberAttribute('sync_src_icmp_wl_rcvd');
  }
  public set syncSrcIcmpWlRcvd(value: number) {
    this._syncSrcIcmpWlRcvd = value;
  }
  public resetSyncSrcIcmpWlRcvd() {
    this._syncSrcIcmpWlRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcIcmpWlRcvdInput() {
    return this._syncSrcIcmpWlRcvd;
  }

  // sync_src_icmp_wl_sent - computed: false, optional: true, required: false
  private _syncSrcIcmpWlSent?: number; 
  public get syncSrcIcmpWlSent() {
    return this.getNumberAttribute('sync_src_icmp_wl_sent');
  }
  public set syncSrcIcmpWlSent(value: number) {
    this._syncSrcIcmpWlSent = value;
  }
  public resetSyncSrcIcmpWlSent() {
    this._syncSrcIcmpWlSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcIcmpWlSentInput() {
    return this._syncSrcIcmpWlSent;
  }

  // sync_src_other_wl_rcvd - computed: false, optional: true, required: false
  private _syncSrcOtherWlRcvd?: number; 
  public get syncSrcOtherWlRcvd() {
    return this.getNumberAttribute('sync_src_other_wl_rcvd');
  }
  public set syncSrcOtherWlRcvd(value: number) {
    this._syncSrcOtherWlRcvd = value;
  }
  public resetSyncSrcOtherWlRcvd() {
    this._syncSrcOtherWlRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcOtherWlRcvdInput() {
    return this._syncSrcOtherWlRcvd;
  }

  // sync_src_other_wl_sent - computed: false, optional: true, required: false
  private _syncSrcOtherWlSent?: number; 
  public get syncSrcOtherWlSent() {
    return this.getNumberAttribute('sync_src_other_wl_sent');
  }
  public set syncSrcOtherWlSent(value: number) {
    this._syncSrcOtherWlSent = value;
  }
  public resetSyncSrcOtherWlSent() {
    this._syncSrcOtherWlSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcOtherWlSentInput() {
    return this._syncSrcOtherWlSent;
  }

  // sync_src_rcv - computed: false, optional: true, required: false
  private _syncSrcRcv?: number; 
  public get syncSrcRcv() {
    return this.getNumberAttribute('sync_src_rcv');
  }
  public set syncSrcRcv(value: number) {
    this._syncSrcRcv = value;
  }
  public resetSyncSrcRcv() {
    this._syncSrcRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcRcvInput() {
    return this._syncSrcRcv;
  }

  // sync_src_sent - computed: false, optional: true, required: false
  private _syncSrcSent?: number; 
  public get syncSrcSent() {
    return this.getNumberAttribute('sync_src_sent');
  }
  public set syncSrcSent(value: number) {
    this._syncSrcSent = value;
  }
  public resetSyncSrcSent() {
    this._syncSrcSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcSentInput() {
    return this._syncSrcSent;
  }

  // sync_src_tcp_wl_rcvd - computed: false, optional: true, required: false
  private _syncSrcTcpWlRcvd?: number; 
  public get syncSrcTcpWlRcvd() {
    return this.getNumberAttribute('sync_src_tcp_wl_rcvd');
  }
  public set syncSrcTcpWlRcvd(value: number) {
    this._syncSrcTcpWlRcvd = value;
  }
  public resetSyncSrcTcpWlRcvd() {
    this._syncSrcTcpWlRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcTcpWlRcvdInput() {
    return this._syncSrcTcpWlRcvd;
  }

  // sync_src_tcp_wl_sent - computed: false, optional: true, required: false
  private _syncSrcTcpWlSent?: number; 
  public get syncSrcTcpWlSent() {
    return this.getNumberAttribute('sync_src_tcp_wl_sent');
  }
  public set syncSrcTcpWlSent(value: number) {
    this._syncSrcTcpWlSent = value;
  }
  public resetSyncSrcTcpWlSent() {
    this._syncSrcTcpWlSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcTcpWlSentInput() {
    return this._syncSrcTcpWlSent;
  }

  // sync_src_udp_wl_rcvd - computed: false, optional: true, required: false
  private _syncSrcUdpWlRcvd?: number; 
  public get syncSrcUdpWlRcvd() {
    return this.getNumberAttribute('sync_src_udp_wl_rcvd');
  }
  public set syncSrcUdpWlRcvd(value: number) {
    this._syncSrcUdpWlRcvd = value;
  }
  public resetSyncSrcUdpWlRcvd() {
    this._syncSrcUdpWlRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcUdpWlRcvdInput() {
    return this._syncSrcUdpWlRcvd;
  }

  // sync_src_udp_wl_sent - computed: false, optional: true, required: false
  private _syncSrcUdpWlSent?: number; 
  public get syncSrcUdpWlSent() {
    return this.getNumberAttribute('sync_src_udp_wl_sent');
  }
  public set syncSrcUdpWlSent(value: number) {
    this._syncSrcUdpWlSent = value;
  }
  public resetSyncSrcUdpWlSent() {
    this._syncSrcUdpWlSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSrcUdpWlSentInput() {
    return this._syncSrcUdpWlSent;
  }

  // sync_szp_bl_rcvd - computed: false, optional: true, required: false
  private _syncSzpBlRcvd?: number; 
  public get syncSzpBlRcvd() {
    return this.getNumberAttribute('sync_szp_bl_rcvd');
  }
  public set syncSzpBlRcvd(value: number) {
    this._syncSzpBlRcvd = value;
  }
  public resetSyncSzpBlRcvd() {
    this._syncSzpBlRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSzpBlRcvdInput() {
    return this._syncSzpBlRcvd;
  }

  // sync_szp_bl_sent - computed: false, optional: true, required: false
  private _syncSzpBlSent?: number; 
  public get syncSzpBlSent() {
    return this.getNumberAttribute('sync_szp_bl_sent');
  }
  public set syncSzpBlSent(value: number) {
    this._syncSzpBlSent = value;
  }
  public resetSyncSzpBlSent() {
    this._syncSzpBlSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSzpBlSentInput() {
    return this._syncSzpBlSent;
  }

  // sync_szp_dns_tcp_auth_rcvd - computed: false, optional: true, required: false
  private _syncSzpDnsTcpAuthRcvd?: number; 
  public get syncSzpDnsTcpAuthRcvd() {
    return this.getNumberAttribute('sync_szp_dns_tcp_auth_rcvd');
  }
  public set syncSzpDnsTcpAuthRcvd(value: number) {
    this._syncSzpDnsTcpAuthRcvd = value;
  }
  public resetSyncSzpDnsTcpAuthRcvd() {
    this._syncSzpDnsTcpAuthRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSzpDnsTcpAuthRcvdInput() {
    return this._syncSzpDnsTcpAuthRcvd;
  }

  // sync_szp_dns_tcp_auth_sent - computed: false, optional: true, required: false
  private _syncSzpDnsTcpAuthSent?: number; 
  public get syncSzpDnsTcpAuthSent() {
    return this.getNumberAttribute('sync_szp_dns_tcp_auth_sent');
  }
  public set syncSzpDnsTcpAuthSent(value: number) {
    this._syncSzpDnsTcpAuthSent = value;
  }
  public resetSyncSzpDnsTcpAuthSent() {
    this._syncSzpDnsTcpAuthSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSzpDnsTcpAuthSentInput() {
    return this._syncSzpDnsTcpAuthSent;
  }

  // sync_szp_dns_udp_auth_rcvd - computed: false, optional: true, required: false
  private _syncSzpDnsUdpAuthRcvd?: number; 
  public get syncSzpDnsUdpAuthRcvd() {
    return this.getNumberAttribute('sync_szp_dns_udp_auth_rcvd');
  }
  public set syncSzpDnsUdpAuthRcvd(value: number) {
    this._syncSzpDnsUdpAuthRcvd = value;
  }
  public resetSyncSzpDnsUdpAuthRcvd() {
    this._syncSzpDnsUdpAuthRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSzpDnsUdpAuthRcvdInput() {
    return this._syncSzpDnsUdpAuthRcvd;
  }

  // sync_szp_dns_udp_auth_sent - computed: false, optional: true, required: false
  private _syncSzpDnsUdpAuthSent?: number; 
  public get syncSzpDnsUdpAuthSent() {
    return this.getNumberAttribute('sync_szp_dns_udp_auth_sent');
  }
  public set syncSzpDnsUdpAuthSent(value: number) {
    this._syncSzpDnsUdpAuthSent = value;
  }
  public resetSyncSzpDnsUdpAuthSent() {
    this._syncSzpDnsUdpAuthSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSzpDnsUdpAuthSentInput() {
    return this._syncSzpDnsUdpAuthSent;
  }

  // sync_szp_icmp_auth_rcvd - computed: false, optional: true, required: false
  private _syncSzpIcmpAuthRcvd?: number; 
  public get syncSzpIcmpAuthRcvd() {
    return this.getNumberAttribute('sync_szp_icmp_auth_rcvd');
  }
  public set syncSzpIcmpAuthRcvd(value: number) {
    this._syncSzpIcmpAuthRcvd = value;
  }
  public resetSyncSzpIcmpAuthRcvd() {
    this._syncSzpIcmpAuthRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSzpIcmpAuthRcvdInput() {
    return this._syncSzpIcmpAuthRcvd;
  }

  // sync_szp_icmp_auth_sent - computed: false, optional: true, required: false
  private _syncSzpIcmpAuthSent?: number; 
  public get syncSzpIcmpAuthSent() {
    return this.getNumberAttribute('sync_szp_icmp_auth_sent');
  }
  public set syncSzpIcmpAuthSent(value: number) {
    this._syncSzpIcmpAuthSent = value;
  }
  public resetSyncSzpIcmpAuthSent() {
    this._syncSzpIcmpAuthSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSzpIcmpAuthSentInput() {
    return this._syncSzpIcmpAuthSent;
  }

  // sync_szp_no_dst_drop - computed: false, optional: true, required: false
  private _syncSzpNoDstDrop?: number; 
  public get syncSzpNoDstDrop() {
    return this.getNumberAttribute('sync_szp_no_dst_drop');
  }
  public set syncSzpNoDstDrop(value: number) {
    this._syncSzpNoDstDrop = value;
  }
  public resetSyncSzpNoDstDrop() {
    this._syncSzpNoDstDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSzpNoDstDropInput() {
    return this._syncSzpNoDstDrop;
  }

  // sync_szp_other_auth_rcvd - computed: false, optional: true, required: false
  private _syncSzpOtherAuthRcvd?: number; 
  public get syncSzpOtherAuthRcvd() {
    return this.getNumberAttribute('sync_szp_other_auth_rcvd');
  }
  public set syncSzpOtherAuthRcvd(value: number) {
    this._syncSzpOtherAuthRcvd = value;
  }
  public resetSyncSzpOtherAuthRcvd() {
    this._syncSzpOtherAuthRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSzpOtherAuthRcvdInput() {
    return this._syncSzpOtherAuthRcvd;
  }

  // sync_szp_other_auth_sent - computed: false, optional: true, required: false
  private _syncSzpOtherAuthSent?: number; 
  public get syncSzpOtherAuthSent() {
    return this.getNumberAttribute('sync_szp_other_auth_sent');
  }
  public set syncSzpOtherAuthSent(value: number) {
    this._syncSzpOtherAuthSent = value;
  }
  public resetSyncSzpOtherAuthSent() {
    this._syncSzpOtherAuthSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSzpOtherAuthSentInput() {
    return this._syncSzpOtherAuthSent;
  }

  // sync_szp_rcv - computed: false, optional: true, required: false
  private _syncSzpRcv?: number; 
  public get syncSzpRcv() {
    return this.getNumberAttribute('sync_szp_rcv');
  }
  public set syncSzpRcv(value: number) {
    this._syncSzpRcv = value;
  }
  public resetSyncSzpRcv() {
    this._syncSzpRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSzpRcvInput() {
    return this._syncSzpRcv;
  }

  // sync_szp_sent - computed: false, optional: true, required: false
  private _syncSzpSent?: number; 
  public get syncSzpSent() {
    return this.getNumberAttribute('sync_szp_sent');
  }
  public set syncSzpSent(value: number) {
    this._syncSzpSent = value;
  }
  public resetSyncSzpSent() {
    this._syncSzpSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSzpSentInput() {
    return this._syncSzpSent;
  }

  // sync_szp_tcp_auth_rcvd - computed: false, optional: true, required: false
  private _syncSzpTcpAuthRcvd?: number; 
  public get syncSzpTcpAuthRcvd() {
    return this.getNumberAttribute('sync_szp_tcp_auth_rcvd');
  }
  public set syncSzpTcpAuthRcvd(value: number) {
    this._syncSzpTcpAuthRcvd = value;
  }
  public resetSyncSzpTcpAuthRcvd() {
    this._syncSzpTcpAuthRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSzpTcpAuthRcvdInput() {
    return this._syncSzpTcpAuthRcvd;
  }

  // sync_szp_tcp_auth_sent - computed: false, optional: true, required: false
  private _syncSzpTcpAuthSent?: number; 
  public get syncSzpTcpAuthSent() {
    return this.getNumberAttribute('sync_szp_tcp_auth_sent');
  }
  public set syncSzpTcpAuthSent(value: number) {
    this._syncSzpTcpAuthSent = value;
  }
  public resetSyncSzpTcpAuthSent() {
    this._syncSzpTcpAuthSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSzpTcpAuthSentInput() {
    return this._syncSzpTcpAuthSent;
  }

  // sync_szp_udp_auth_rcvd - computed: false, optional: true, required: false
  private _syncSzpUdpAuthRcvd?: number; 
  public get syncSzpUdpAuthRcvd() {
    return this.getNumberAttribute('sync_szp_udp_auth_rcvd');
  }
  public set syncSzpUdpAuthRcvd(value: number) {
    this._syncSzpUdpAuthRcvd = value;
  }
  public resetSyncSzpUdpAuthRcvd() {
    this._syncSzpUdpAuthRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSzpUdpAuthRcvdInput() {
    return this._syncSzpUdpAuthRcvd;
  }

  // sync_szp_udp_auth_sent - computed: false, optional: true, required: false
  private _syncSzpUdpAuthSent?: number; 
  public get syncSzpUdpAuthSent() {
    return this.getNumberAttribute('sync_szp_udp_auth_sent');
  }
  public set syncSzpUdpAuthSent(value: number) {
    this._syncSzpUdpAuthSent = value;
  }
  public resetSyncSzpUdpAuthSent() {
    this._syncSzpUdpAuthSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncSzpUdpAuthSentInput() {
    return this._syncSzpUdpAuthSent;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats thunder_ddos_l4_sync_stats}
*/
export class DataThunderDdosL4SyncStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_l4_sync_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosL4SyncStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosL4SyncStats to import
  * @param importFromId The id of the existing DataThunderDdosL4SyncStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosL4SyncStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_l4_sync_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_sync_stats thunder_ddos_l4_sync_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosL4SyncStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosL4SyncStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_l4_sync_stats',
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
  private _stats = new DataThunderDdosL4SyncStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosL4SyncStatsStats) {
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
      stats: dataThunderDdosL4SyncStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderDdosL4SyncStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosL4SyncStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
