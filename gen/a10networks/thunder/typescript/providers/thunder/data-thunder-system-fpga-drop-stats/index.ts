// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemFpgaDropStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#id DataThunderSystemFpgaDropStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#stats DataThunderSystemFpgaDropStats#stats}
  */
  readonly stats?: DataThunderSystemFpgaDropStatsStats;
}
export interface DataThunderSystemFpgaDropStatsStats {
  /**
  * Total Bad IP csum Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#bad_ip_chksum_drop DataThunderSystemFpgaDropStats#bad_ip_chksum_drop}
  */
  readonly badIpChksumDrop?: number;
  /**
  * Total Bad IP Flags Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#bad_ip_flags_drop DataThunderSystemFpgaDropStats#bad_ip_flags_drop}
  */
  readonly badIpFlagsDrop?: number;
  /**
  * Total Bad IP frag off Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#bad_ip_frag_offset DataThunderSystemFpgaDropStats#bad_ip_frag_offset}
  */
  readonly badIpFragOffset?: number;
  /**
  * Total Bad IP hdr len Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#bad_ip_hdr_len DataThunderSystemFpgaDropStats#bad_ip_hdr_len}
  */
  readonly badIpHdrLen?: number;
  /**
  * Total Bad IP PL len Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#bad_ip_payload_len DataThunderSystemFpgaDropStats#bad_ip_payload_len}
  */
  readonly badIpPayloadLen?: number;
  /**
  * Total Bad IP TTL Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#bad_ip_ttl_drop DataThunderSystemFpgaDropStats#bad_ip_ttl_drop}
  */
  readonly badIpTtlDrop?: number;
  /**
  * Total Empty frag Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#empty_frag_drop DataThunderSystemFpgaDropStats#empty_frag_drop}
  */
  readonly emptyFragDrop?: number;
  /**
  * Total FCS Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#fcs_drop DataThunderSystemFpgaDropStats#fcs_drop}
  */
  readonly fcsDrop?: number;
  /**
  * Total HRX Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#hrx_drop DataThunderSystemFpgaDropStats#hrx_drop}
  */
  readonly hrxDrop?: number;
  /**
  * Total ICMP POD Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#icmp_pod_drop DataThunderSystemFpgaDropStats#icmp_pod_drop}
  */
  readonly icmpPodDrop?: number;
  /**
  * Total IP frag Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#ipv4_frag DataThunderSystemFpgaDropStats#ipv4_frag}
  */
  readonly ipv4Frag?: number;
  /**
  * Total IPv4 opt Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#ipv4_opt_drop DataThunderSystemFpgaDropStats#ipv4_opt_drop}
  */
  readonly ipv4OptDrop?: number;
  /**
  * Total LAND Attack Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#land_drop DataThunderSystemFpgaDropStats#land_drop}
  */
  readonly landDrop?: number;
  /**
  * Total Micro frag Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#mic_frag_drop DataThunderSystemFpgaDropStats#mic_frag_drop}
  */
  readonly micFragDrop?: number;
  /**
  * Total MRX Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#mrx_drop DataThunderSystemFpgaDropStats#mrx_drop}
  */
  readonly mrxDrop?: number;
  /**
  * Total No IP Payload Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#no_ip_payload_drop DataThunderSystemFpgaDropStats#no_ip_payload_drop}
  */
  readonly noIpPayloadDrop?: number;
  /**
  * Total Oversize IP PL Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#oversize_ip_payload DataThunderSystemFpgaDropStats#oversize_ip_payload}
  */
  readonly oversizeIpPayload?: number;
  /**
  * Total QDR Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#qdr_drop DataThunderSystemFpgaDropStats#qdr_drop}
  */
  readonly qdrDrop?: number;
  /**
  * Total Runt IP hdr Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#runt_ip_hdr DataThunderSystemFpgaDropStats#runt_ip_hdr}
  */
  readonly runtIpHdr?: number;
  /**
  * Total Runt TCPUDP hdr Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#runt_tcpudp_hdr DataThunderSystemFpgaDropStats#runt_tcpudp_hdr}
  */
  readonly runtTcpudpHdr?: number;
  /**
  * Total Size Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#siz_drop DataThunderSystemFpgaDropStats#siz_drop}
  */
  readonly sizDrop?: number;
  /**
  * Total TCP bad csum Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#tcp_bad_chksum DataThunderSystemFpgaDropStats#tcp_bad_chksum}
  */
  readonly tcpBadChksum?: number;
  /**
  * Total TCP Bad IP Len Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#tcp_bad_ip_len DataThunderSystemFpgaDropStats#tcp_bad_ip_len}
  */
  readonly tcpBadIpLen?: number;
  /**
  * Total TCP bad urg off Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#tcp_bad_urg_offet DataThunderSystemFpgaDropStats#tcp_bad_urg_offet}
  */
  readonly tcpBadUrgOffet?: number;
  /**
  * Total TCP SYN&FIN Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#tcp_fin_sin DataThunderSystemFpgaDropStats#tcp_fin_sin}
  */
  readonly tcpFinSin?: number;
  /**
  * Total TCP frag header Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#tcp_frag_hdr DataThunderSystemFpgaDropStats#tcp_frag_hdr}
  */
  readonly tcpFragHdr?: number;
  /**
  * Total TCP null flags Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#tcp_null_flags DataThunderSystemFpgaDropStats#tcp_null_flags}
  */
  readonly tcpNullFlags?: number;
  /**
  * Total TCP null scan Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#tcp_null_scan DataThunderSystemFpgaDropStats#tcp_null_scan}
  */
  readonly tcpNullScan?: number;
  /**
  * Total TCP short hdr Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#tcp_short_hdr DataThunderSystemFpgaDropStats#tcp_short_hdr}
  */
  readonly tcpShortHdr?: number;
  /**
  * Total TCP SYN frag Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#tcp_syn_frag DataThunderSystemFpgaDropStats#tcp_syn_frag}
  */
  readonly tcpSynFrag?: number;
  /**
  * Total TCP XMAS FLAGS Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#tcp_xmas_flags DataThunderSystemFpgaDropStats#tcp_xmas_flags}
  */
  readonly tcpXmasFlags?: number;
  /**
  * Total TCP XMAS scan Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#tcp_xmas_scan DataThunderSystemFpgaDropStats#tcp_xmas_scan}
  */
  readonly tcpXmasScan?: number;
  /**
  * Total Tun mismatch Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#tun_mismatch DataThunderSystemFpgaDropStats#tun_mismatch}
  */
  readonly tunMismatch?: number;
  /**
  * Total UDP bad csum Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#udp_bad_chksum DataThunderSystemFpgaDropStats#udp_bad_chksum}
  */
  readonly udpBadChksum?: number;
  /**
  * Total UDP bad leng Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#udp_bad_ip_len DataThunderSystemFpgaDropStats#udp_bad_ip_len}
  */
  readonly udpBadIpLen?: number;
  /**
  * Total UDP KB frag Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#udp_kb_frags DataThunderSystemFpgaDropStats#udp_kb_frags}
  */
  readonly udpKbFrags?: number;
  /**
  * Total UDP port LB Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#udp_port_lb DataThunderSystemFpgaDropStats#udp_port_lb}
  */
  readonly udpPortLb?: number;
  /**
  * Total UDP short hdr Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#udp_short_hdr DataThunderSystemFpgaDropStats#udp_short_hdr}
  */
  readonly udpShortHdr?: number;
}

export function dataThunderSystemFpgaDropStatsStatsToTerraform(struct?: DataThunderSystemFpgaDropStatsStatsOutputReference | DataThunderSystemFpgaDropStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bad_ip_chksum_drop: cdktf.numberToTerraform(struct!.badIpChksumDrop),
    bad_ip_flags_drop: cdktf.numberToTerraform(struct!.badIpFlagsDrop),
    bad_ip_frag_offset: cdktf.numberToTerraform(struct!.badIpFragOffset),
    bad_ip_hdr_len: cdktf.numberToTerraform(struct!.badIpHdrLen),
    bad_ip_payload_len: cdktf.numberToTerraform(struct!.badIpPayloadLen),
    bad_ip_ttl_drop: cdktf.numberToTerraform(struct!.badIpTtlDrop),
    empty_frag_drop: cdktf.numberToTerraform(struct!.emptyFragDrop),
    fcs_drop: cdktf.numberToTerraform(struct!.fcsDrop),
    hrx_drop: cdktf.numberToTerraform(struct!.hrxDrop),
    icmp_pod_drop: cdktf.numberToTerraform(struct!.icmpPodDrop),
    ipv4_frag: cdktf.numberToTerraform(struct!.ipv4Frag),
    ipv4_opt_drop: cdktf.numberToTerraform(struct!.ipv4OptDrop),
    land_drop: cdktf.numberToTerraform(struct!.landDrop),
    mic_frag_drop: cdktf.numberToTerraform(struct!.micFragDrop),
    mrx_drop: cdktf.numberToTerraform(struct!.mrxDrop),
    no_ip_payload_drop: cdktf.numberToTerraform(struct!.noIpPayloadDrop),
    oversize_ip_payload: cdktf.numberToTerraform(struct!.oversizeIpPayload),
    qdr_drop: cdktf.numberToTerraform(struct!.qdrDrop),
    runt_ip_hdr: cdktf.numberToTerraform(struct!.runtIpHdr),
    runt_tcpudp_hdr: cdktf.numberToTerraform(struct!.runtTcpudpHdr),
    siz_drop: cdktf.numberToTerraform(struct!.sizDrop),
    tcp_bad_chksum: cdktf.numberToTerraform(struct!.tcpBadChksum),
    tcp_bad_ip_len: cdktf.numberToTerraform(struct!.tcpBadIpLen),
    tcp_bad_urg_offet: cdktf.numberToTerraform(struct!.tcpBadUrgOffet),
    tcp_fin_sin: cdktf.numberToTerraform(struct!.tcpFinSin),
    tcp_frag_hdr: cdktf.numberToTerraform(struct!.tcpFragHdr),
    tcp_null_flags: cdktf.numberToTerraform(struct!.tcpNullFlags),
    tcp_null_scan: cdktf.numberToTerraform(struct!.tcpNullScan),
    tcp_short_hdr: cdktf.numberToTerraform(struct!.tcpShortHdr),
    tcp_syn_frag: cdktf.numberToTerraform(struct!.tcpSynFrag),
    tcp_xmas_flags: cdktf.numberToTerraform(struct!.tcpXmasFlags),
    tcp_xmas_scan: cdktf.numberToTerraform(struct!.tcpXmasScan),
    tun_mismatch: cdktf.numberToTerraform(struct!.tunMismatch),
    udp_bad_chksum: cdktf.numberToTerraform(struct!.udpBadChksum),
    udp_bad_ip_len: cdktf.numberToTerraform(struct!.udpBadIpLen),
    udp_kb_frags: cdktf.numberToTerraform(struct!.udpKbFrags),
    udp_port_lb: cdktf.numberToTerraform(struct!.udpPortLb),
    udp_short_hdr: cdktf.numberToTerraform(struct!.udpShortHdr),
  }
}


export function dataThunderSystemFpgaDropStatsStatsToHclTerraform(struct?: DataThunderSystemFpgaDropStatsStatsOutputReference | DataThunderSystemFpgaDropStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bad_ip_chksum_drop: {
      value: cdktf.numberToHclTerraform(struct!.badIpChksumDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ip_flags_drop: {
      value: cdktf.numberToHclTerraform(struct!.badIpFlagsDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ip_frag_offset: {
      value: cdktf.numberToHclTerraform(struct!.badIpFragOffset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ip_hdr_len: {
      value: cdktf.numberToHclTerraform(struct!.badIpHdrLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ip_payload_len: {
      value: cdktf.numberToHclTerraform(struct!.badIpPayloadLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ip_ttl_drop: {
      value: cdktf.numberToHclTerraform(struct!.badIpTtlDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    empty_frag_drop: {
      value: cdktf.numberToHclTerraform(struct!.emptyFragDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fcs_drop: {
      value: cdktf.numberToHclTerraform(struct!.fcsDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hrx_drop: {
      value: cdktf.numberToHclTerraform(struct!.hrxDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_pod_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmpPodDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_frag: {
      value: cdktf.numberToHclTerraform(struct!.ipv4Frag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_opt_drop: {
      value: cdktf.numberToHclTerraform(struct!.ipv4OptDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    land_drop: {
      value: cdktf.numberToHclTerraform(struct!.landDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mic_frag_drop: {
      value: cdktf.numberToHclTerraform(struct!.micFragDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mrx_drop: {
      value: cdktf.numberToHclTerraform(struct!.mrxDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_ip_payload_drop: {
      value: cdktf.numberToHclTerraform(struct!.noIpPayloadDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    oversize_ip_payload: {
      value: cdktf.numberToHclTerraform(struct!.oversizeIpPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    qdr_drop: {
      value: cdktf.numberToHclTerraform(struct!.qdrDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    runt_ip_hdr: {
      value: cdktf.numberToHclTerraform(struct!.runtIpHdr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    runt_tcpudp_hdr: {
      value: cdktf.numberToHclTerraform(struct!.runtTcpudpHdr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    siz_drop: {
      value: cdktf.numberToHclTerraform(struct!.sizDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_bad_chksum: {
      value: cdktf.numberToHclTerraform(struct!.tcpBadChksum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_bad_ip_len: {
      value: cdktf.numberToHclTerraform(struct!.tcpBadIpLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_bad_urg_offet: {
      value: cdktf.numberToHclTerraform(struct!.tcpBadUrgOffet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_fin_sin: {
      value: cdktf.numberToHclTerraform(struct!.tcpFinSin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_frag_hdr: {
      value: cdktf.numberToHclTerraform(struct!.tcpFragHdr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_null_flags: {
      value: cdktf.numberToHclTerraform(struct!.tcpNullFlags),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_null_scan: {
      value: cdktf.numberToHclTerraform(struct!.tcpNullScan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_short_hdr: {
      value: cdktf.numberToHclTerraform(struct!.tcpShortHdr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_syn_frag: {
      value: cdktf.numberToHclTerraform(struct!.tcpSynFrag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_xmas_flags: {
      value: cdktf.numberToHclTerraform(struct!.tcpXmasFlags),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_xmas_scan: {
      value: cdktf.numberToHclTerraform(struct!.tcpXmasScan),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tun_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.tunMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_bad_chksum: {
      value: cdktf.numberToHclTerraform(struct!.udpBadChksum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_bad_ip_len: {
      value: cdktf.numberToHclTerraform(struct!.udpBadIpLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_kb_frags: {
      value: cdktf.numberToHclTerraform(struct!.udpKbFrags),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port_lb: {
      value: cdktf.numberToHclTerraform(struct!.udpPortLb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_short_hdr: {
      value: cdktf.numberToHclTerraform(struct!.udpShortHdr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemFpgaDropStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemFpgaDropStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._badIpChksumDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpChksumDrop = this._badIpChksumDrop;
    }
    if (this._badIpFlagsDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpFlagsDrop = this._badIpFlagsDrop;
    }
    if (this._badIpFragOffset !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpFragOffset = this._badIpFragOffset;
    }
    if (this._badIpHdrLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpHdrLen = this._badIpHdrLen;
    }
    if (this._badIpPayloadLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpPayloadLen = this._badIpPayloadLen;
    }
    if (this._badIpTtlDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpTtlDrop = this._badIpTtlDrop;
    }
    if (this._emptyFragDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyFragDrop = this._emptyFragDrop;
    }
    if (this._fcsDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.fcsDrop = this._fcsDrop;
    }
    if (this._hrxDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.hrxDrop = this._hrxDrop;
    }
    if (this._icmpPodDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpPodDrop = this._icmpPodDrop;
    }
    if (this._ipv4Frag !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Frag = this._ipv4Frag;
    }
    if (this._ipv4OptDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4OptDrop = this._ipv4OptDrop;
    }
    if (this._landDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.landDrop = this._landDrop;
    }
    if (this._micFragDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.micFragDrop = this._micFragDrop;
    }
    if (this._mrxDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.mrxDrop = this._mrxDrop;
    }
    if (this._noIpPayloadDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpPayloadDrop = this._noIpPayloadDrop;
    }
    if (this._oversizeIpPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeIpPayload = this._oversizeIpPayload;
    }
    if (this._qdrDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.qdrDrop = this._qdrDrop;
    }
    if (this._runtIpHdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtIpHdr = this._runtIpHdr;
    }
    if (this._runtTcpudpHdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtTcpudpHdr = this._runtTcpudpHdr;
    }
    if (this._sizDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizDrop = this._sizDrop;
    }
    if (this._tcpBadChksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpBadChksum = this._tcpBadChksum;
    }
    if (this._tcpBadIpLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpBadIpLen = this._tcpBadIpLen;
    }
    if (this._tcpBadUrgOffet !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpBadUrgOffet = this._tcpBadUrgOffet;
    }
    if (this._tcpFinSin !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFinSin = this._tcpFinSin;
    }
    if (this._tcpFragHdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFragHdr = this._tcpFragHdr;
    }
    if (this._tcpNullFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpNullFlags = this._tcpNullFlags;
    }
    if (this._tcpNullScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpNullScan = this._tcpNullScan;
    }
    if (this._tcpShortHdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpShortHdr = this._tcpShortHdr;
    }
    if (this._tcpSynFrag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynFrag = this._tcpSynFrag;
    }
    if (this._tcpXmasFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpXmasFlags = this._tcpXmasFlags;
    }
    if (this._tcpXmasScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpXmasScan = this._tcpXmasScan;
    }
    if (this._tunMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunMismatch = this._tunMismatch;
    }
    if (this._udpBadChksum !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpBadChksum = this._udpBadChksum;
    }
    if (this._udpBadIpLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpBadIpLen = this._udpBadIpLen;
    }
    if (this._udpKbFrags !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpKbFrags = this._udpKbFrags;
    }
    if (this._udpPortLb !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortLb = this._udpPortLb;
    }
    if (this._udpShortHdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpShortHdr = this._udpShortHdr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemFpgaDropStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._badIpChksumDrop = undefined;
      this._badIpFlagsDrop = undefined;
      this._badIpFragOffset = undefined;
      this._badIpHdrLen = undefined;
      this._badIpPayloadLen = undefined;
      this._badIpTtlDrop = undefined;
      this._emptyFragDrop = undefined;
      this._fcsDrop = undefined;
      this._hrxDrop = undefined;
      this._icmpPodDrop = undefined;
      this._ipv4Frag = undefined;
      this._ipv4OptDrop = undefined;
      this._landDrop = undefined;
      this._micFragDrop = undefined;
      this._mrxDrop = undefined;
      this._noIpPayloadDrop = undefined;
      this._oversizeIpPayload = undefined;
      this._qdrDrop = undefined;
      this._runtIpHdr = undefined;
      this._runtTcpudpHdr = undefined;
      this._sizDrop = undefined;
      this._tcpBadChksum = undefined;
      this._tcpBadIpLen = undefined;
      this._tcpBadUrgOffet = undefined;
      this._tcpFinSin = undefined;
      this._tcpFragHdr = undefined;
      this._tcpNullFlags = undefined;
      this._tcpNullScan = undefined;
      this._tcpShortHdr = undefined;
      this._tcpSynFrag = undefined;
      this._tcpXmasFlags = undefined;
      this._tcpXmasScan = undefined;
      this._tunMismatch = undefined;
      this._udpBadChksum = undefined;
      this._udpBadIpLen = undefined;
      this._udpKbFrags = undefined;
      this._udpPortLb = undefined;
      this._udpShortHdr = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._badIpChksumDrop = value.badIpChksumDrop;
      this._badIpFlagsDrop = value.badIpFlagsDrop;
      this._badIpFragOffset = value.badIpFragOffset;
      this._badIpHdrLen = value.badIpHdrLen;
      this._badIpPayloadLen = value.badIpPayloadLen;
      this._badIpTtlDrop = value.badIpTtlDrop;
      this._emptyFragDrop = value.emptyFragDrop;
      this._fcsDrop = value.fcsDrop;
      this._hrxDrop = value.hrxDrop;
      this._icmpPodDrop = value.icmpPodDrop;
      this._ipv4Frag = value.ipv4Frag;
      this._ipv4OptDrop = value.ipv4OptDrop;
      this._landDrop = value.landDrop;
      this._micFragDrop = value.micFragDrop;
      this._mrxDrop = value.mrxDrop;
      this._noIpPayloadDrop = value.noIpPayloadDrop;
      this._oversizeIpPayload = value.oversizeIpPayload;
      this._qdrDrop = value.qdrDrop;
      this._runtIpHdr = value.runtIpHdr;
      this._runtTcpudpHdr = value.runtTcpudpHdr;
      this._sizDrop = value.sizDrop;
      this._tcpBadChksum = value.tcpBadChksum;
      this._tcpBadIpLen = value.tcpBadIpLen;
      this._tcpBadUrgOffet = value.tcpBadUrgOffet;
      this._tcpFinSin = value.tcpFinSin;
      this._tcpFragHdr = value.tcpFragHdr;
      this._tcpNullFlags = value.tcpNullFlags;
      this._tcpNullScan = value.tcpNullScan;
      this._tcpShortHdr = value.tcpShortHdr;
      this._tcpSynFrag = value.tcpSynFrag;
      this._tcpXmasFlags = value.tcpXmasFlags;
      this._tcpXmasScan = value.tcpXmasScan;
      this._tunMismatch = value.tunMismatch;
      this._udpBadChksum = value.udpBadChksum;
      this._udpBadIpLen = value.udpBadIpLen;
      this._udpKbFrags = value.udpKbFrags;
      this._udpPortLb = value.udpPortLb;
      this._udpShortHdr = value.udpShortHdr;
    }
  }

  // bad_ip_chksum_drop - computed: false, optional: true, required: false
  private _badIpChksumDrop?: number; 
  public get badIpChksumDrop() {
    return this.getNumberAttribute('bad_ip_chksum_drop');
  }
  public set badIpChksumDrop(value: number) {
    this._badIpChksumDrop = value;
  }
  public resetBadIpChksumDrop() {
    this._badIpChksumDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpChksumDropInput() {
    return this._badIpChksumDrop;
  }

  // bad_ip_flags_drop - computed: false, optional: true, required: false
  private _badIpFlagsDrop?: number; 
  public get badIpFlagsDrop() {
    return this.getNumberAttribute('bad_ip_flags_drop');
  }
  public set badIpFlagsDrop(value: number) {
    this._badIpFlagsDrop = value;
  }
  public resetBadIpFlagsDrop() {
    this._badIpFlagsDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpFlagsDropInput() {
    return this._badIpFlagsDrop;
  }

  // bad_ip_frag_offset - computed: false, optional: true, required: false
  private _badIpFragOffset?: number; 
  public get badIpFragOffset() {
    return this.getNumberAttribute('bad_ip_frag_offset');
  }
  public set badIpFragOffset(value: number) {
    this._badIpFragOffset = value;
  }
  public resetBadIpFragOffset() {
    this._badIpFragOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpFragOffsetInput() {
    return this._badIpFragOffset;
  }

  // bad_ip_hdr_len - computed: false, optional: true, required: false
  private _badIpHdrLen?: number; 
  public get badIpHdrLen() {
    return this.getNumberAttribute('bad_ip_hdr_len');
  }
  public set badIpHdrLen(value: number) {
    this._badIpHdrLen = value;
  }
  public resetBadIpHdrLen() {
    this._badIpHdrLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpHdrLenInput() {
    return this._badIpHdrLen;
  }

  // bad_ip_payload_len - computed: false, optional: true, required: false
  private _badIpPayloadLen?: number; 
  public get badIpPayloadLen() {
    return this.getNumberAttribute('bad_ip_payload_len');
  }
  public set badIpPayloadLen(value: number) {
    this._badIpPayloadLen = value;
  }
  public resetBadIpPayloadLen() {
    this._badIpPayloadLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpPayloadLenInput() {
    return this._badIpPayloadLen;
  }

  // bad_ip_ttl_drop - computed: false, optional: true, required: false
  private _badIpTtlDrop?: number; 
  public get badIpTtlDrop() {
    return this.getNumberAttribute('bad_ip_ttl_drop');
  }
  public set badIpTtlDrop(value: number) {
    this._badIpTtlDrop = value;
  }
  public resetBadIpTtlDrop() {
    this._badIpTtlDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpTtlDropInput() {
    return this._badIpTtlDrop;
  }

  // empty_frag_drop - computed: false, optional: true, required: false
  private _emptyFragDrop?: number; 
  public get emptyFragDrop() {
    return this.getNumberAttribute('empty_frag_drop');
  }
  public set emptyFragDrop(value: number) {
    this._emptyFragDrop = value;
  }
  public resetEmptyFragDrop() {
    this._emptyFragDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyFragDropInput() {
    return this._emptyFragDrop;
  }

  // fcs_drop - computed: false, optional: true, required: false
  private _fcsDrop?: number; 
  public get fcsDrop() {
    return this.getNumberAttribute('fcs_drop');
  }
  public set fcsDrop(value: number) {
    this._fcsDrop = value;
  }
  public resetFcsDrop() {
    this._fcsDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fcsDropInput() {
    return this._fcsDrop;
  }

  // hrx_drop - computed: false, optional: true, required: false
  private _hrxDrop?: number; 
  public get hrxDrop() {
    return this.getNumberAttribute('hrx_drop');
  }
  public set hrxDrop(value: number) {
    this._hrxDrop = value;
  }
  public resetHrxDrop() {
    this._hrxDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hrxDropInput() {
    return this._hrxDrop;
  }

  // icmp_pod_drop - computed: false, optional: true, required: false
  private _icmpPodDrop?: number; 
  public get icmpPodDrop() {
    return this.getNumberAttribute('icmp_pod_drop');
  }
  public set icmpPodDrop(value: number) {
    this._icmpPodDrop = value;
  }
  public resetIcmpPodDrop() {
    this._icmpPodDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpPodDropInput() {
    return this._icmpPodDrop;
  }

  // ipv4_frag - computed: false, optional: true, required: false
  private _ipv4Frag?: number; 
  public get ipv4Frag() {
    return this.getNumberAttribute('ipv4_frag');
  }
  public set ipv4Frag(value: number) {
    this._ipv4Frag = value;
  }
  public resetIpv4Frag() {
    this._ipv4Frag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4FragInput() {
    return this._ipv4Frag;
  }

  // ipv4_opt_drop - computed: false, optional: true, required: false
  private _ipv4OptDrop?: number; 
  public get ipv4OptDrop() {
    return this.getNumberAttribute('ipv4_opt_drop');
  }
  public set ipv4OptDrop(value: number) {
    this._ipv4OptDrop = value;
  }
  public resetIpv4OptDrop() {
    this._ipv4OptDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4OptDropInput() {
    return this._ipv4OptDrop;
  }

  // land_drop - computed: false, optional: true, required: false
  private _landDrop?: number; 
  public get landDrop() {
    return this.getNumberAttribute('land_drop');
  }
  public set landDrop(value: number) {
    this._landDrop = value;
  }
  public resetLandDrop() {
    this._landDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get landDropInput() {
    return this._landDrop;
  }

  // mic_frag_drop - computed: false, optional: true, required: false
  private _micFragDrop?: number; 
  public get micFragDrop() {
    return this.getNumberAttribute('mic_frag_drop');
  }
  public set micFragDrop(value: number) {
    this._micFragDrop = value;
  }
  public resetMicFragDrop() {
    this._micFragDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get micFragDropInput() {
    return this._micFragDrop;
  }

  // mrx_drop - computed: false, optional: true, required: false
  private _mrxDrop?: number; 
  public get mrxDrop() {
    return this.getNumberAttribute('mrx_drop');
  }
  public set mrxDrop(value: number) {
    this._mrxDrop = value;
  }
  public resetMrxDrop() {
    this._mrxDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mrxDropInput() {
    return this._mrxDrop;
  }

  // no_ip_payload_drop - computed: false, optional: true, required: false
  private _noIpPayloadDrop?: number; 
  public get noIpPayloadDrop() {
    return this.getNumberAttribute('no_ip_payload_drop');
  }
  public set noIpPayloadDrop(value: number) {
    this._noIpPayloadDrop = value;
  }
  public resetNoIpPayloadDrop() {
    this._noIpPayloadDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpPayloadDropInput() {
    return this._noIpPayloadDrop;
  }

  // oversize_ip_payload - computed: false, optional: true, required: false
  private _oversizeIpPayload?: number; 
  public get oversizeIpPayload() {
    return this.getNumberAttribute('oversize_ip_payload');
  }
  public set oversizeIpPayload(value: number) {
    this._oversizeIpPayload = value;
  }
  public resetOversizeIpPayload() {
    this._oversizeIpPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeIpPayloadInput() {
    return this._oversizeIpPayload;
  }

  // qdr_drop - computed: false, optional: true, required: false
  private _qdrDrop?: number; 
  public get qdrDrop() {
    return this.getNumberAttribute('qdr_drop');
  }
  public set qdrDrop(value: number) {
    this._qdrDrop = value;
  }
  public resetQdrDrop() {
    this._qdrDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qdrDropInput() {
    return this._qdrDrop;
  }

  // runt_ip_hdr - computed: false, optional: true, required: false
  private _runtIpHdr?: number; 
  public get runtIpHdr() {
    return this.getNumberAttribute('runt_ip_hdr');
  }
  public set runtIpHdr(value: number) {
    this._runtIpHdr = value;
  }
  public resetRuntIpHdr() {
    this._runtIpHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtIpHdrInput() {
    return this._runtIpHdr;
  }

  // runt_tcpudp_hdr - computed: false, optional: true, required: false
  private _runtTcpudpHdr?: number; 
  public get runtTcpudpHdr() {
    return this.getNumberAttribute('runt_tcpudp_hdr');
  }
  public set runtTcpudpHdr(value: number) {
    this._runtTcpudpHdr = value;
  }
  public resetRuntTcpudpHdr() {
    this._runtTcpudpHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runtTcpudpHdrInput() {
    return this._runtTcpudpHdr;
  }

  // siz_drop - computed: false, optional: true, required: false
  private _sizDrop?: number; 
  public get sizDrop() {
    return this.getNumberAttribute('siz_drop');
  }
  public set sizDrop(value: number) {
    this._sizDrop = value;
  }
  public resetSizDrop() {
    this._sizDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizDropInput() {
    return this._sizDrop;
  }

  // tcp_bad_chksum - computed: false, optional: true, required: false
  private _tcpBadChksum?: number; 
  public get tcpBadChksum() {
    return this.getNumberAttribute('tcp_bad_chksum');
  }
  public set tcpBadChksum(value: number) {
    this._tcpBadChksum = value;
  }
  public resetTcpBadChksum() {
    this._tcpBadChksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpBadChksumInput() {
    return this._tcpBadChksum;
  }

  // tcp_bad_ip_len - computed: false, optional: true, required: false
  private _tcpBadIpLen?: number; 
  public get tcpBadIpLen() {
    return this.getNumberAttribute('tcp_bad_ip_len');
  }
  public set tcpBadIpLen(value: number) {
    this._tcpBadIpLen = value;
  }
  public resetTcpBadIpLen() {
    this._tcpBadIpLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpBadIpLenInput() {
    return this._tcpBadIpLen;
  }

  // tcp_bad_urg_offet - computed: false, optional: true, required: false
  private _tcpBadUrgOffet?: number; 
  public get tcpBadUrgOffet() {
    return this.getNumberAttribute('tcp_bad_urg_offet');
  }
  public set tcpBadUrgOffet(value: number) {
    this._tcpBadUrgOffet = value;
  }
  public resetTcpBadUrgOffet() {
    this._tcpBadUrgOffet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpBadUrgOffetInput() {
    return this._tcpBadUrgOffet;
  }

  // tcp_fin_sin - computed: false, optional: true, required: false
  private _tcpFinSin?: number; 
  public get tcpFinSin() {
    return this.getNumberAttribute('tcp_fin_sin');
  }
  public set tcpFinSin(value: number) {
    this._tcpFinSin = value;
  }
  public resetTcpFinSin() {
    this._tcpFinSin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFinSinInput() {
    return this._tcpFinSin;
  }

  // tcp_frag_hdr - computed: false, optional: true, required: false
  private _tcpFragHdr?: number; 
  public get tcpFragHdr() {
    return this.getNumberAttribute('tcp_frag_hdr');
  }
  public set tcpFragHdr(value: number) {
    this._tcpFragHdr = value;
  }
  public resetTcpFragHdr() {
    this._tcpFragHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFragHdrInput() {
    return this._tcpFragHdr;
  }

  // tcp_null_flags - computed: false, optional: true, required: false
  private _tcpNullFlags?: number; 
  public get tcpNullFlags() {
    return this.getNumberAttribute('tcp_null_flags');
  }
  public set tcpNullFlags(value: number) {
    this._tcpNullFlags = value;
  }
  public resetTcpNullFlags() {
    this._tcpNullFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpNullFlagsInput() {
    return this._tcpNullFlags;
  }

  // tcp_null_scan - computed: false, optional: true, required: false
  private _tcpNullScan?: number; 
  public get tcpNullScan() {
    return this.getNumberAttribute('tcp_null_scan');
  }
  public set tcpNullScan(value: number) {
    this._tcpNullScan = value;
  }
  public resetTcpNullScan() {
    this._tcpNullScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpNullScanInput() {
    return this._tcpNullScan;
  }

  // tcp_short_hdr - computed: false, optional: true, required: false
  private _tcpShortHdr?: number; 
  public get tcpShortHdr() {
    return this.getNumberAttribute('tcp_short_hdr');
  }
  public set tcpShortHdr(value: number) {
    this._tcpShortHdr = value;
  }
  public resetTcpShortHdr() {
    this._tcpShortHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpShortHdrInput() {
    return this._tcpShortHdr;
  }

  // tcp_syn_frag - computed: false, optional: true, required: false
  private _tcpSynFrag?: number; 
  public get tcpSynFrag() {
    return this.getNumberAttribute('tcp_syn_frag');
  }
  public set tcpSynFrag(value: number) {
    this._tcpSynFrag = value;
  }
  public resetTcpSynFrag() {
    this._tcpSynFrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynFragInput() {
    return this._tcpSynFrag;
  }

  // tcp_xmas_flags - computed: false, optional: true, required: false
  private _tcpXmasFlags?: number; 
  public get tcpXmasFlags() {
    return this.getNumberAttribute('tcp_xmas_flags');
  }
  public set tcpXmasFlags(value: number) {
    this._tcpXmasFlags = value;
  }
  public resetTcpXmasFlags() {
    this._tcpXmasFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpXmasFlagsInput() {
    return this._tcpXmasFlags;
  }

  // tcp_xmas_scan - computed: false, optional: true, required: false
  private _tcpXmasScan?: number; 
  public get tcpXmasScan() {
    return this.getNumberAttribute('tcp_xmas_scan');
  }
  public set tcpXmasScan(value: number) {
    this._tcpXmasScan = value;
  }
  public resetTcpXmasScan() {
    this._tcpXmasScan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpXmasScanInput() {
    return this._tcpXmasScan;
  }

  // tun_mismatch - computed: false, optional: true, required: false
  private _tunMismatch?: number; 
  public get tunMismatch() {
    return this.getNumberAttribute('tun_mismatch');
  }
  public set tunMismatch(value: number) {
    this._tunMismatch = value;
  }
  public resetTunMismatch() {
    this._tunMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunMismatchInput() {
    return this._tunMismatch;
  }

  // udp_bad_chksum - computed: false, optional: true, required: false
  private _udpBadChksum?: number; 
  public get udpBadChksum() {
    return this.getNumberAttribute('udp_bad_chksum');
  }
  public set udpBadChksum(value: number) {
    this._udpBadChksum = value;
  }
  public resetUdpBadChksum() {
    this._udpBadChksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpBadChksumInput() {
    return this._udpBadChksum;
  }

  // udp_bad_ip_len - computed: false, optional: true, required: false
  private _udpBadIpLen?: number; 
  public get udpBadIpLen() {
    return this.getNumberAttribute('udp_bad_ip_len');
  }
  public set udpBadIpLen(value: number) {
    this._udpBadIpLen = value;
  }
  public resetUdpBadIpLen() {
    this._udpBadIpLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpBadIpLenInput() {
    return this._udpBadIpLen;
  }

  // udp_kb_frags - computed: false, optional: true, required: false
  private _udpKbFrags?: number; 
  public get udpKbFrags() {
    return this.getNumberAttribute('udp_kb_frags');
  }
  public set udpKbFrags(value: number) {
    this._udpKbFrags = value;
  }
  public resetUdpKbFrags() {
    this._udpKbFrags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpKbFragsInput() {
    return this._udpKbFrags;
  }

  // udp_port_lb - computed: false, optional: true, required: false
  private _udpPortLb?: number; 
  public get udpPortLb() {
    return this.getNumberAttribute('udp_port_lb');
  }
  public set udpPortLb(value: number) {
    this._udpPortLb = value;
  }
  public resetUdpPortLb() {
    this._udpPortLb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortLbInput() {
    return this._udpPortLb;
  }

  // udp_short_hdr - computed: false, optional: true, required: false
  private _udpShortHdr?: number; 
  public get udpShortHdr() {
    return this.getNumberAttribute('udp_short_hdr');
  }
  public set udpShortHdr(value: number) {
    this._udpShortHdr = value;
  }
  public resetUdpShortHdr() {
    this._udpShortHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpShortHdrInput() {
    return this._udpShortHdr;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats thunder_system_fpga_drop_stats}
*/
export class DataThunderSystemFpgaDropStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_fpga_drop_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemFpgaDropStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemFpgaDropStats to import
  * @param importFromId The id of the existing DataThunderSystemFpgaDropStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemFpgaDropStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_fpga_drop_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_fpga_drop_stats thunder_system_fpga_drop_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemFpgaDropStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemFpgaDropStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_fpga_drop_stats',
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
  private _stats = new DataThunderSystemFpgaDropStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSystemFpgaDropStatsStats) {
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
      stats: dataThunderSystemFpgaDropStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSystemFpgaDropStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemFpgaDropStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
