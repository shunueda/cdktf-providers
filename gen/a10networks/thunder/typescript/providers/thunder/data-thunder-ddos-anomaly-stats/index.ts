// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosAnomalyStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#id DataThunderDdosAnomalyStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#stats DataThunderDdosAnomalyStats#stats}
  */
  readonly stats?: DataThunderDdosAnomalyStatsStats;
}
export interface DataThunderDdosAnomalyStatsStats {
  /**
  * IPv4 Invalid Checksum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#bad_ip_csum DataThunderDdosAnomalyStats#bad_ip_csum}
  */
  readonly badIpCsum?: number;
  /**
  * IPv4 Invalid Flags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#bad_ip_flags DataThunderDdosAnomalyStats#bad_ip_flags}
  */
  readonly badIpFlags?: number;
  /**
  * IPv4 Invalid Fragment Offset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#bad_ip_frag_off DataThunderDdosAnomalyStats#bad_ip_frag_off}
  */
  readonly badIpFragOff?: number;
  /**
  * IPv4 Invalid Header Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#bad_ip_hdr_len DataThunderDdosAnomalyStats#bad_ip_hdr_len}
  */
  readonly badIpHdrLen?: number;
  /**
  * IP Invalid Payload Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#bad_ip_pl_len DataThunderDdosAnomalyStats#bad_ip_pl_len}
  */
  readonly badIpPlLen?: number;
  /**
  * IP Invalid TTL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#bad_ip_ttl DataThunderDdosAnomalyStats#bad_ip_ttl}
  */
  readonly badIpTtl?: number;
  /**
  * IPv4 Empty Fragment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#empty_frag DataThunderDdosAnomalyStats#empty_frag}
  */
  readonly emptyFrag?: number;
  /**
  * ICMP Ping Of Death
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#icmp_pod DataThunderDdosAnomalyStats#icmp_pod}
  */
  readonly icmpPod?: number;
  /**
  * IP Fragment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#ip_frag DataThunderDdosAnomalyStats#ip_frag}
  */
  readonly ipFrag?: number;
  /**
  * IPv4 Option
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#ipv4_opt DataThunderDdosAnomalyStats#ipv4_opt}
  */
  readonly ipv4Opt?: number;
  /**
  * IP Land Attack
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#land_attack DataThunderDdosAnomalyStats#land_attack}
  */
  readonly landAttack?: number;
  /**
  * IPv4 Micro Fragment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#micro_frag DataThunderDdosAnomalyStats#micro_frag}
  */
  readonly microFrag?: number;
  /**
  * IP Payload None
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#no_ip_payload DataThunderDdosAnomalyStats#no_ip_payload}
  */
  readonly noIpPayload?: number;
  /**
  * IP Payload Too Large
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#oversize_ip_pl DataThunderDdosAnomalyStats#oversize_ip_pl}
  */
  readonly oversizeIpPl?: number;
  /**
  * IP Runt Header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#runt_ip_hdr DataThunderDdosAnomalyStats#runt_ip_hdr}
  */
  readonly runtIpHdr?: number;
  /**
  * TCPUDP Runt Header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#runt_tcpudp_hdr DataThunderDdosAnomalyStats#runt_tcpudp_hdr}
  */
  readonly runtTcpudpHdr?: number;
  /**
  * TCP Invalid Checksum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#tcp_bad_csum DataThunderDdosAnomalyStats#tcp_bad_csum}
  */
  readonly tcpBadCsum?: number;
  /**
  * TCP Invalid IPv4 Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#tcp_bad_ip_len DataThunderDdosAnomalyStats#tcp_bad_ip_len}
  */
  readonly tcpBadIpLen?: number;
  /**
  * TCP Invalid Urgent Offset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#tcp_bad_urg_off DataThunderDdosAnomalyStats#tcp_bad_urg_off}
  */
  readonly tcpBadUrgOff?: number;
  /**
  * TCP Fragment Header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#tcp_frag_header DataThunderDdosAnomalyStats#tcp_frag_header}
  */
  readonly tcpFragHeader?: number;
  /**
  * TCP Null Flags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#tcp_null_flags DataThunderDdosAnomalyStats#tcp_null_flags}
  */
  readonly tcpNullFlags?: number;
  /**
  * TCP Null Scan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#tcp_null_scan DataThunderDdosAnomalyStats#tcp_null_scan}
  */
  readonly tcpNullScan?: number;
  /**
  * TCP Option Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#tcp_opt_overflow DataThunderDdosAnomalyStats#tcp_opt_overflow}
  */
  readonly tcpOptOverflow?: number;
  /**
  * TCP Short Header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#tcp_short_hdr DataThunderDdosAnomalyStats#tcp_short_hdr}
  */
  readonly tcpShortHdr?: number;
  /**
  * TCP SYN&FIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#tcp_syn_fin DataThunderDdosAnomalyStats#tcp_syn_fin}
  */
  readonly tcpSynFin?: number;
  /**
  * TCP SYN Fragment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#tcp_syn_frag DataThunderDdosAnomalyStats#tcp_syn_frag}
  */
  readonly tcpSynFrag?: number;
  /**
  * TCP XMAS Flags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#tcp_xmas_flags DataThunderDdosAnomalyStats#tcp_xmas_flags}
  */
  readonly tcpXmasFlags?: number;
  /**
  * TCP XMAS Scan
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#tcp_xmas_scan DataThunderDdosAnomalyStats#tcp_xmas_scan}
  */
  readonly tcpXmasScan?: number;
  /**
  * IP Tunnel Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#tun_mismatch DataThunderDdosAnomalyStats#tun_mismatch}
  */
  readonly tunMismatch?: number;
  /**
  * UDP Invalid Checksum
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#udp_bad_csum DataThunderDdosAnomalyStats#udp_bad_csum}
  */
  readonly udpBadCsum?: number;
  /**
  * UDP KB Fragment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#udp_kb_frag DataThunderDdosAnomalyStats#udp_kb_frag}
  */
  readonly udpKbFrag?: number;
  /**
  * UDP Port LB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#udp_port_lb DataThunderDdosAnomalyStats#udp_port_lb}
  */
  readonly udpPortLb?: number;
  /**
  * UDP Short Header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#udp_short_hdr DataThunderDdosAnomalyStats#udp_short_hdr}
  */
  readonly udpShortHdr?: number;
  /**
  * UDP Invalid Length
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#udp_short_leng DataThunderDdosAnomalyStats#udp_short_leng}
  */
  readonly udpShortLeng?: number;
}

export function dataThunderDdosAnomalyStatsStatsToTerraform(struct?: DataThunderDdosAnomalyStatsStatsOutputReference | DataThunderDdosAnomalyStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bad_ip_csum: cdktf.numberToTerraform(struct!.badIpCsum),
    bad_ip_flags: cdktf.numberToTerraform(struct!.badIpFlags),
    bad_ip_frag_off: cdktf.numberToTerraform(struct!.badIpFragOff),
    bad_ip_hdr_len: cdktf.numberToTerraform(struct!.badIpHdrLen),
    bad_ip_pl_len: cdktf.numberToTerraform(struct!.badIpPlLen),
    bad_ip_ttl: cdktf.numberToTerraform(struct!.badIpTtl),
    empty_frag: cdktf.numberToTerraform(struct!.emptyFrag),
    icmp_pod: cdktf.numberToTerraform(struct!.icmpPod),
    ip_frag: cdktf.numberToTerraform(struct!.ipFrag),
    ipv4_opt: cdktf.numberToTerraform(struct!.ipv4Opt),
    land_attack: cdktf.numberToTerraform(struct!.landAttack),
    micro_frag: cdktf.numberToTerraform(struct!.microFrag),
    no_ip_payload: cdktf.numberToTerraform(struct!.noIpPayload),
    oversize_ip_pl: cdktf.numberToTerraform(struct!.oversizeIpPl),
    runt_ip_hdr: cdktf.numberToTerraform(struct!.runtIpHdr),
    runt_tcpudp_hdr: cdktf.numberToTerraform(struct!.runtTcpudpHdr),
    tcp_bad_csum: cdktf.numberToTerraform(struct!.tcpBadCsum),
    tcp_bad_ip_len: cdktf.numberToTerraform(struct!.tcpBadIpLen),
    tcp_bad_urg_off: cdktf.numberToTerraform(struct!.tcpBadUrgOff),
    tcp_frag_header: cdktf.numberToTerraform(struct!.tcpFragHeader),
    tcp_null_flags: cdktf.numberToTerraform(struct!.tcpNullFlags),
    tcp_null_scan: cdktf.numberToTerraform(struct!.tcpNullScan),
    tcp_opt_overflow: cdktf.numberToTerraform(struct!.tcpOptOverflow),
    tcp_short_hdr: cdktf.numberToTerraform(struct!.tcpShortHdr),
    tcp_syn_fin: cdktf.numberToTerraform(struct!.tcpSynFin),
    tcp_syn_frag: cdktf.numberToTerraform(struct!.tcpSynFrag),
    tcp_xmas_flags: cdktf.numberToTerraform(struct!.tcpXmasFlags),
    tcp_xmas_scan: cdktf.numberToTerraform(struct!.tcpXmasScan),
    tun_mismatch: cdktf.numberToTerraform(struct!.tunMismatch),
    udp_bad_csum: cdktf.numberToTerraform(struct!.udpBadCsum),
    udp_kb_frag: cdktf.numberToTerraform(struct!.udpKbFrag),
    udp_port_lb: cdktf.numberToTerraform(struct!.udpPortLb),
    udp_short_hdr: cdktf.numberToTerraform(struct!.udpShortHdr),
    udp_short_leng: cdktf.numberToTerraform(struct!.udpShortLeng),
  }
}


export function dataThunderDdosAnomalyStatsStatsToHclTerraform(struct?: DataThunderDdosAnomalyStatsStatsOutputReference | DataThunderDdosAnomalyStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bad_ip_csum: {
      value: cdktf.numberToHclTerraform(struct!.badIpCsum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ip_flags: {
      value: cdktf.numberToHclTerraform(struct!.badIpFlags),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ip_frag_off: {
      value: cdktf.numberToHclTerraform(struct!.badIpFragOff),
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
    bad_ip_pl_len: {
      value: cdktf.numberToHclTerraform(struct!.badIpPlLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_ip_ttl: {
      value: cdktf.numberToHclTerraform(struct!.badIpTtl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    empty_frag: {
      value: cdktf.numberToHclTerraform(struct!.emptyFrag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_pod: {
      value: cdktf.numberToHclTerraform(struct!.icmpPod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_frag: {
      value: cdktf.numberToHclTerraform(struct!.ipFrag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_opt: {
      value: cdktf.numberToHclTerraform(struct!.ipv4Opt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    land_attack: {
      value: cdktf.numberToHclTerraform(struct!.landAttack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    micro_frag: {
      value: cdktf.numberToHclTerraform(struct!.microFrag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_ip_payload: {
      value: cdktf.numberToHclTerraform(struct!.noIpPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    oversize_ip_pl: {
      value: cdktf.numberToHclTerraform(struct!.oversizeIpPl),
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
    tcp_bad_csum: {
      value: cdktf.numberToHclTerraform(struct!.tcpBadCsum),
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
    tcp_bad_urg_off: {
      value: cdktf.numberToHclTerraform(struct!.tcpBadUrgOff),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_frag_header: {
      value: cdktf.numberToHclTerraform(struct!.tcpFragHeader),
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
    tcp_opt_overflow: {
      value: cdktf.numberToHclTerraform(struct!.tcpOptOverflow),
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
    tcp_syn_fin: {
      value: cdktf.numberToHclTerraform(struct!.tcpSynFin),
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
    udp_bad_csum: {
      value: cdktf.numberToHclTerraform(struct!.udpBadCsum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_kb_frag: {
      value: cdktf.numberToHclTerraform(struct!.udpKbFrag),
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
    udp_short_leng: {
      value: cdktf.numberToHclTerraform(struct!.udpShortLeng),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosAnomalyStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosAnomalyStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._badIpCsum !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpCsum = this._badIpCsum;
    }
    if (this._badIpFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpFlags = this._badIpFlags;
    }
    if (this._badIpFragOff !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpFragOff = this._badIpFragOff;
    }
    if (this._badIpHdrLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpHdrLen = this._badIpHdrLen;
    }
    if (this._badIpPlLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpPlLen = this._badIpPlLen;
    }
    if (this._badIpTtl !== undefined) {
      hasAnyValues = true;
      internalValueResult.badIpTtl = this._badIpTtl;
    }
    if (this._emptyFrag !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptyFrag = this._emptyFrag;
    }
    if (this._icmpPod !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpPod = this._icmpPod;
    }
    if (this._ipFrag !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFrag = this._ipFrag;
    }
    if (this._ipv4Opt !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Opt = this._ipv4Opt;
    }
    if (this._landAttack !== undefined) {
      hasAnyValues = true;
      internalValueResult.landAttack = this._landAttack;
    }
    if (this._microFrag !== undefined) {
      hasAnyValues = true;
      internalValueResult.microFrag = this._microFrag;
    }
    if (this._noIpPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIpPayload = this._noIpPayload;
    }
    if (this._oversizeIpPl !== undefined) {
      hasAnyValues = true;
      internalValueResult.oversizeIpPl = this._oversizeIpPl;
    }
    if (this._runtIpHdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtIpHdr = this._runtIpHdr;
    }
    if (this._runtTcpudpHdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.runtTcpudpHdr = this._runtTcpudpHdr;
    }
    if (this._tcpBadCsum !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpBadCsum = this._tcpBadCsum;
    }
    if (this._tcpBadIpLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpBadIpLen = this._tcpBadIpLen;
    }
    if (this._tcpBadUrgOff !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpBadUrgOff = this._tcpBadUrgOff;
    }
    if (this._tcpFragHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpFragHeader = this._tcpFragHeader;
    }
    if (this._tcpNullFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpNullFlags = this._tcpNullFlags;
    }
    if (this._tcpNullScan !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpNullScan = this._tcpNullScan;
    }
    if (this._tcpOptOverflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOptOverflow = this._tcpOptOverflow;
    }
    if (this._tcpShortHdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpShortHdr = this._tcpShortHdr;
    }
    if (this._tcpSynFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpSynFin = this._tcpSynFin;
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
    if (this._udpBadCsum !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpBadCsum = this._udpBadCsum;
    }
    if (this._udpKbFrag !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpKbFrag = this._udpKbFrag;
    }
    if (this._udpPortLb !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPortLb = this._udpPortLb;
    }
    if (this._udpShortHdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpShortHdr = this._udpShortHdr;
    }
    if (this._udpShortLeng !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpShortLeng = this._udpShortLeng;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosAnomalyStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._badIpCsum = undefined;
      this._badIpFlags = undefined;
      this._badIpFragOff = undefined;
      this._badIpHdrLen = undefined;
      this._badIpPlLen = undefined;
      this._badIpTtl = undefined;
      this._emptyFrag = undefined;
      this._icmpPod = undefined;
      this._ipFrag = undefined;
      this._ipv4Opt = undefined;
      this._landAttack = undefined;
      this._microFrag = undefined;
      this._noIpPayload = undefined;
      this._oversizeIpPl = undefined;
      this._runtIpHdr = undefined;
      this._runtTcpudpHdr = undefined;
      this._tcpBadCsum = undefined;
      this._tcpBadIpLen = undefined;
      this._tcpBadUrgOff = undefined;
      this._tcpFragHeader = undefined;
      this._tcpNullFlags = undefined;
      this._tcpNullScan = undefined;
      this._tcpOptOverflow = undefined;
      this._tcpShortHdr = undefined;
      this._tcpSynFin = undefined;
      this._tcpSynFrag = undefined;
      this._tcpXmasFlags = undefined;
      this._tcpXmasScan = undefined;
      this._tunMismatch = undefined;
      this._udpBadCsum = undefined;
      this._udpKbFrag = undefined;
      this._udpPortLb = undefined;
      this._udpShortHdr = undefined;
      this._udpShortLeng = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._badIpCsum = value.badIpCsum;
      this._badIpFlags = value.badIpFlags;
      this._badIpFragOff = value.badIpFragOff;
      this._badIpHdrLen = value.badIpHdrLen;
      this._badIpPlLen = value.badIpPlLen;
      this._badIpTtl = value.badIpTtl;
      this._emptyFrag = value.emptyFrag;
      this._icmpPod = value.icmpPod;
      this._ipFrag = value.ipFrag;
      this._ipv4Opt = value.ipv4Opt;
      this._landAttack = value.landAttack;
      this._microFrag = value.microFrag;
      this._noIpPayload = value.noIpPayload;
      this._oversizeIpPl = value.oversizeIpPl;
      this._runtIpHdr = value.runtIpHdr;
      this._runtTcpudpHdr = value.runtTcpudpHdr;
      this._tcpBadCsum = value.tcpBadCsum;
      this._tcpBadIpLen = value.tcpBadIpLen;
      this._tcpBadUrgOff = value.tcpBadUrgOff;
      this._tcpFragHeader = value.tcpFragHeader;
      this._tcpNullFlags = value.tcpNullFlags;
      this._tcpNullScan = value.tcpNullScan;
      this._tcpOptOverflow = value.tcpOptOverflow;
      this._tcpShortHdr = value.tcpShortHdr;
      this._tcpSynFin = value.tcpSynFin;
      this._tcpSynFrag = value.tcpSynFrag;
      this._tcpXmasFlags = value.tcpXmasFlags;
      this._tcpXmasScan = value.tcpXmasScan;
      this._tunMismatch = value.tunMismatch;
      this._udpBadCsum = value.udpBadCsum;
      this._udpKbFrag = value.udpKbFrag;
      this._udpPortLb = value.udpPortLb;
      this._udpShortHdr = value.udpShortHdr;
      this._udpShortLeng = value.udpShortLeng;
    }
  }

  // bad_ip_csum - computed: false, optional: true, required: false
  private _badIpCsum?: number; 
  public get badIpCsum() {
    return this.getNumberAttribute('bad_ip_csum');
  }
  public set badIpCsum(value: number) {
    this._badIpCsum = value;
  }
  public resetBadIpCsum() {
    this._badIpCsum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpCsumInput() {
    return this._badIpCsum;
  }

  // bad_ip_flags - computed: false, optional: true, required: false
  private _badIpFlags?: number; 
  public get badIpFlags() {
    return this.getNumberAttribute('bad_ip_flags');
  }
  public set badIpFlags(value: number) {
    this._badIpFlags = value;
  }
  public resetBadIpFlags() {
    this._badIpFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpFlagsInput() {
    return this._badIpFlags;
  }

  // bad_ip_frag_off - computed: false, optional: true, required: false
  private _badIpFragOff?: number; 
  public get badIpFragOff() {
    return this.getNumberAttribute('bad_ip_frag_off');
  }
  public set badIpFragOff(value: number) {
    this._badIpFragOff = value;
  }
  public resetBadIpFragOff() {
    this._badIpFragOff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpFragOffInput() {
    return this._badIpFragOff;
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

  // bad_ip_pl_len - computed: false, optional: true, required: false
  private _badIpPlLen?: number; 
  public get badIpPlLen() {
    return this.getNumberAttribute('bad_ip_pl_len');
  }
  public set badIpPlLen(value: number) {
    this._badIpPlLen = value;
  }
  public resetBadIpPlLen() {
    this._badIpPlLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpPlLenInput() {
    return this._badIpPlLen;
  }

  // bad_ip_ttl - computed: false, optional: true, required: false
  private _badIpTtl?: number; 
  public get badIpTtl() {
    return this.getNumberAttribute('bad_ip_ttl');
  }
  public set badIpTtl(value: number) {
    this._badIpTtl = value;
  }
  public resetBadIpTtl() {
    this._badIpTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badIpTtlInput() {
    return this._badIpTtl;
  }

  // empty_frag - computed: false, optional: true, required: false
  private _emptyFrag?: number; 
  public get emptyFrag() {
    return this.getNumberAttribute('empty_frag');
  }
  public set emptyFrag(value: number) {
    this._emptyFrag = value;
  }
  public resetEmptyFrag() {
    this._emptyFrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptyFragInput() {
    return this._emptyFrag;
  }

  // icmp_pod - computed: false, optional: true, required: false
  private _icmpPod?: number; 
  public get icmpPod() {
    return this.getNumberAttribute('icmp_pod');
  }
  public set icmpPod(value: number) {
    this._icmpPod = value;
  }
  public resetIcmpPod() {
    this._icmpPod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpPodInput() {
    return this._icmpPod;
  }

  // ip_frag - computed: false, optional: true, required: false
  private _ipFrag?: number; 
  public get ipFrag() {
    return this.getNumberAttribute('ip_frag');
  }
  public set ipFrag(value: number) {
    this._ipFrag = value;
  }
  public resetIpFrag() {
    this._ipFrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFragInput() {
    return this._ipFrag;
  }

  // ipv4_opt - computed: false, optional: true, required: false
  private _ipv4Opt?: number; 
  public get ipv4Opt() {
    return this.getNumberAttribute('ipv4_opt');
  }
  public set ipv4Opt(value: number) {
    this._ipv4Opt = value;
  }
  public resetIpv4Opt() {
    this._ipv4Opt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4OptInput() {
    return this._ipv4Opt;
  }

  // land_attack - computed: false, optional: true, required: false
  private _landAttack?: number; 
  public get landAttack() {
    return this.getNumberAttribute('land_attack');
  }
  public set landAttack(value: number) {
    this._landAttack = value;
  }
  public resetLandAttack() {
    this._landAttack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get landAttackInput() {
    return this._landAttack;
  }

  // micro_frag - computed: false, optional: true, required: false
  private _microFrag?: number; 
  public get microFrag() {
    return this.getNumberAttribute('micro_frag');
  }
  public set microFrag(value: number) {
    this._microFrag = value;
  }
  public resetMicroFrag() {
    this._microFrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get microFragInput() {
    return this._microFrag;
  }

  // no_ip_payload - computed: false, optional: true, required: false
  private _noIpPayload?: number; 
  public get noIpPayload() {
    return this.getNumberAttribute('no_ip_payload');
  }
  public set noIpPayload(value: number) {
    this._noIpPayload = value;
  }
  public resetNoIpPayload() {
    this._noIpPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIpPayloadInput() {
    return this._noIpPayload;
  }

  // oversize_ip_pl - computed: false, optional: true, required: false
  private _oversizeIpPl?: number; 
  public get oversizeIpPl() {
    return this.getNumberAttribute('oversize_ip_pl');
  }
  public set oversizeIpPl(value: number) {
    this._oversizeIpPl = value;
  }
  public resetOversizeIpPl() {
    this._oversizeIpPl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oversizeIpPlInput() {
    return this._oversizeIpPl;
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

  // tcp_bad_csum - computed: false, optional: true, required: false
  private _tcpBadCsum?: number; 
  public get tcpBadCsum() {
    return this.getNumberAttribute('tcp_bad_csum');
  }
  public set tcpBadCsum(value: number) {
    this._tcpBadCsum = value;
  }
  public resetTcpBadCsum() {
    this._tcpBadCsum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpBadCsumInput() {
    return this._tcpBadCsum;
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

  // tcp_bad_urg_off - computed: false, optional: true, required: false
  private _tcpBadUrgOff?: number; 
  public get tcpBadUrgOff() {
    return this.getNumberAttribute('tcp_bad_urg_off');
  }
  public set tcpBadUrgOff(value: number) {
    this._tcpBadUrgOff = value;
  }
  public resetTcpBadUrgOff() {
    this._tcpBadUrgOff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpBadUrgOffInput() {
    return this._tcpBadUrgOff;
  }

  // tcp_frag_header - computed: false, optional: true, required: false
  private _tcpFragHeader?: number; 
  public get tcpFragHeader() {
    return this.getNumberAttribute('tcp_frag_header');
  }
  public set tcpFragHeader(value: number) {
    this._tcpFragHeader = value;
  }
  public resetTcpFragHeader() {
    this._tcpFragHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpFragHeaderInput() {
    return this._tcpFragHeader;
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

  // tcp_opt_overflow - computed: false, optional: true, required: false
  private _tcpOptOverflow?: number; 
  public get tcpOptOverflow() {
    return this.getNumberAttribute('tcp_opt_overflow');
  }
  public set tcpOptOverflow(value: number) {
    this._tcpOptOverflow = value;
  }
  public resetTcpOptOverflow() {
    this._tcpOptOverflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOptOverflowInput() {
    return this._tcpOptOverflow;
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

  // tcp_syn_fin - computed: false, optional: true, required: false
  private _tcpSynFin?: number; 
  public get tcpSynFin() {
    return this.getNumberAttribute('tcp_syn_fin');
  }
  public set tcpSynFin(value: number) {
    this._tcpSynFin = value;
  }
  public resetTcpSynFin() {
    this._tcpSynFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpSynFinInput() {
    return this._tcpSynFin;
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

  // udp_bad_csum - computed: false, optional: true, required: false
  private _udpBadCsum?: number; 
  public get udpBadCsum() {
    return this.getNumberAttribute('udp_bad_csum');
  }
  public set udpBadCsum(value: number) {
    this._udpBadCsum = value;
  }
  public resetUdpBadCsum() {
    this._udpBadCsum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpBadCsumInput() {
    return this._udpBadCsum;
  }

  // udp_kb_frag - computed: false, optional: true, required: false
  private _udpKbFrag?: number; 
  public get udpKbFrag() {
    return this.getNumberAttribute('udp_kb_frag');
  }
  public set udpKbFrag(value: number) {
    this._udpKbFrag = value;
  }
  public resetUdpKbFrag() {
    this._udpKbFrag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpKbFragInput() {
    return this._udpKbFrag;
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

  // udp_short_leng - computed: false, optional: true, required: false
  private _udpShortLeng?: number; 
  public get udpShortLeng() {
    return this.getNumberAttribute('udp_short_leng');
  }
  public set udpShortLeng(value: number) {
    this._udpShortLeng = value;
  }
  public resetUdpShortLeng() {
    this._udpShortLeng = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpShortLengInput() {
    return this._udpShortLeng;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats thunder_ddos_anomaly_stats}
*/
export class DataThunderDdosAnomalyStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_anomaly_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosAnomalyStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosAnomalyStats to import
  * @param importFromId The id of the existing DataThunderDdosAnomalyStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosAnomalyStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_anomaly_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_anomaly_stats thunder_ddos_anomaly_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosAnomalyStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosAnomalyStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_anomaly_stats',
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
  private _stats = new DataThunderDdosAnomalyStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosAnomalyStatsStats) {
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
      stats: dataThunderDdosAnomalyStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderDdosAnomalyStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosAnomalyStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
