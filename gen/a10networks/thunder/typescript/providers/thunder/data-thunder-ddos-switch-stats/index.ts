// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_switch_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosSwitchStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_switch_stats#id DataThunderDdosSwitchStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_switch_stats#stats DataThunderDdosSwitchStats#stats}
  */
  readonly stats?: DataThunderDdosSwitchStatsStats;
}
export interface DataThunderDdosSwitchStatsStats {
  /**
  * Dst Blackhole Injected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_switch_stats#dst_blackhole_inject DataThunderDdosSwitchStats#dst_blackhole_inject}
  */
  readonly dstBlackholeInject?: number;
  /**
  * Dst Blackhole Withdrawn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_switch_stats#dst_blackhole_withdraw DataThunderDdosSwitchStats#dst_blackhole_withdraw}
  */
  readonly dstBlackholeWithdraw?: number;
  /**
  * Dst IP Bypass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_switch_stats#dst_ip_bypass DataThunderDdosSwitchStats#dst_ip_bypass}
  */
  readonly dstIpBypass?: number;
  /**
  * Outbound Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_switch_stats#egress_bytes DataThunderDdosSwitchStats#egress_bytes}
  */
  readonly egressBytes?: number;
  /**
  * Outbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_switch_stats#egress_packets DataThunderDdosSwitchStats#egress_packets}
  */
  readonly egressPackets?: number;
  /**
  * Stateless Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_switch_stats#in_stateless_pkt DataThunderDdosSwitchStats#in_stateless_pkt}
  */
  readonly inStatelessPkt?: number;
  /**
  * Inbound Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_switch_stats#ingress_bytes DataThunderDdosSwitchStats#ingress_bytes}
  */
  readonly ingressBytes?: number;
  /**
  * Inbound Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_switch_stats#ingress_packets DataThunderDdosSwitchStats#ingress_packets}
  */
  readonly ingressPackets?: number;
  /**
  * IPv4 Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_switch_stats#ip_rcvd DataThunderDdosSwitchStats#ip_rcvd}
  */
  readonly ipRcvd?: number;
  /**
  * IPv4 Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_switch_stats#ip_sent DataThunderDdosSwitchStats#ip_sent}
  */
  readonly ipSent?: number;
  /**
  * IPv6 Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_switch_stats#ipv6_rcvd DataThunderDdosSwitchStats#ipv6_rcvd}
  */
  readonly ipv6Rcvd?: number;
  /**
  * IPv6 Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_switch_stats#ipv6_sent DataThunderDdosSwitchStats#ipv6_sent}
  */
  readonly ipv6Sent?: number;
  /**
  * Jumbo Fragment Non Data Plane Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_switch_stats#jumbo_frag_drop_before_slb DataThunderDdosSwitchStats#jumbo_frag_drop_before_slb}
  */
  readonly jumboFragDropBeforeSlb?: number;
  /**
  * Jumbo Fragment Filter Miss Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_switch_stats#jumbo_frag_drop_by_filter DataThunderDdosSwitchStats#jumbo_frag_drop_by_filter}
  */
  readonly jumboFragDropByFilter?: number;
  /**
  * Jumbo Outgoing MTU Exceed Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_switch_stats#jumbo_outgoing_mtu_exceed_drop DataThunderDdosSwitchStats#jumbo_outgoing_mtu_exceed_drop}
  */
  readonly jumboOutgoingMtuExceedDrop?: number;
  /**
  * MPLS Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_switch_stats#mpls_drop DataThunderDdosSwitchStats#mpls_drop}
  */
  readonly mplsDrop?: number;
  /**
  * MPLS Malformed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_switch_stats#mpls_malformed DataThunderDdosSwitchStats#mpls_malformed}
  */
  readonly mplsMalformed?: number;
  /**
  * MPLS Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_switch_stats#mpls_rcvd DataThunderDdosSwitchStats#mpls_rcvd}
  */
  readonly mplsRcvd?: number;
  /**
  * IPv4/v6 Out No Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_switch_stats#noroute DataThunderDdosSwitchStats#noroute}
  */
  readonly noroute?: number;
  /**
  * Not For DDOS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_switch_stats#pkt_not_for_ddos DataThunderDdosSwitchStats#pkt_not_for_ddos}
  */
  readonly pktNotForDdos?: number;
  /**
  * Src IP Bypass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_switch_stats#src_ip_bypass DataThunderDdosSwitchStats#src_ip_bypass}
  */
  readonly srcIpBypass?: number;
}

export function dataThunderDdosSwitchStatsStatsToTerraform(struct?: DataThunderDdosSwitchStatsStatsOutputReference | DataThunderDdosSwitchStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_blackhole_inject: cdktf.numberToTerraform(struct!.dstBlackholeInject),
    dst_blackhole_withdraw: cdktf.numberToTerraform(struct!.dstBlackholeWithdraw),
    dst_ip_bypass: cdktf.numberToTerraform(struct!.dstIpBypass),
    egress_bytes: cdktf.numberToTerraform(struct!.egressBytes),
    egress_packets: cdktf.numberToTerraform(struct!.egressPackets),
    in_stateless_pkt: cdktf.numberToTerraform(struct!.inStatelessPkt),
    ingress_bytes: cdktf.numberToTerraform(struct!.ingressBytes),
    ingress_packets: cdktf.numberToTerraform(struct!.ingressPackets),
    ip_rcvd: cdktf.numberToTerraform(struct!.ipRcvd),
    ip_sent: cdktf.numberToTerraform(struct!.ipSent),
    ipv6_rcvd: cdktf.numberToTerraform(struct!.ipv6Rcvd),
    ipv6_sent: cdktf.numberToTerraform(struct!.ipv6Sent),
    jumbo_frag_drop_before_slb: cdktf.numberToTerraform(struct!.jumboFragDropBeforeSlb),
    jumbo_frag_drop_by_filter: cdktf.numberToTerraform(struct!.jumboFragDropByFilter),
    jumbo_outgoing_mtu_exceed_drop: cdktf.numberToTerraform(struct!.jumboOutgoingMtuExceedDrop),
    mpls_drop: cdktf.numberToTerraform(struct!.mplsDrop),
    mpls_malformed: cdktf.numberToTerraform(struct!.mplsMalformed),
    mpls_rcvd: cdktf.numberToTerraform(struct!.mplsRcvd),
    noroute: cdktf.numberToTerraform(struct!.noroute),
    pkt_not_for_ddos: cdktf.numberToTerraform(struct!.pktNotForDdos),
    src_ip_bypass: cdktf.numberToTerraform(struct!.srcIpBypass),
  }
}


export function dataThunderDdosSwitchStatsStatsToHclTerraform(struct?: DataThunderDdosSwitchStatsStatsOutputReference | DataThunderDdosSwitchStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_blackhole_inject: {
      value: cdktf.numberToHclTerraform(struct!.dstBlackholeInject),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_blackhole_withdraw: {
      value: cdktf.numberToHclTerraform(struct!.dstBlackholeWithdraw),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_ip_bypass: {
      value: cdktf.numberToHclTerraform(struct!.dstIpBypass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    egress_bytes: {
      value: cdktf.numberToHclTerraform(struct!.egressBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    egress_packets: {
      value: cdktf.numberToHclTerraform(struct!.egressPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_stateless_pkt: {
      value: cdktf.numberToHclTerraform(struct!.inStatelessPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ingress_bytes: {
      value: cdktf.numberToHclTerraform(struct!.ingressBytes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ingress_packets: {
      value: cdktf.numberToHclTerraform(struct!.ingressPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.ipRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_sent: {
      value: cdktf.numberToHclTerraform(struct!.ipSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Rcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_sent: {
      value: cdktf.numberToHclTerraform(struct!.ipv6Sent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jumbo_frag_drop_before_slb: {
      value: cdktf.numberToHclTerraform(struct!.jumboFragDropBeforeSlb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jumbo_frag_drop_by_filter: {
      value: cdktf.numberToHclTerraform(struct!.jumboFragDropByFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jumbo_outgoing_mtu_exceed_drop: {
      value: cdktf.numberToHclTerraform(struct!.jumboOutgoingMtuExceedDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mpls_drop: {
      value: cdktf.numberToHclTerraform(struct!.mplsDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mpls_malformed: {
      value: cdktf.numberToHclTerraform(struct!.mplsMalformed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mpls_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.mplsRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    noroute: {
      value: cdktf.numberToHclTerraform(struct!.noroute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_not_for_ddos: {
      value: cdktf.numberToHclTerraform(struct!.pktNotForDdos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_ip_bypass: {
      value: cdktf.numberToHclTerraform(struct!.srcIpBypass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosSwitchStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosSwitchStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstBlackholeInject !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstBlackholeInject = this._dstBlackholeInject;
    }
    if (this._dstBlackholeWithdraw !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstBlackholeWithdraw = this._dstBlackholeWithdraw;
    }
    if (this._dstIpBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstIpBypass = this._dstIpBypass;
    }
    if (this._egressBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressBytes = this._egressBytes;
    }
    if (this._egressPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.egressPackets = this._egressPackets;
    }
    if (this._inStatelessPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.inStatelessPkt = this._inStatelessPkt;
    }
    if (this._ingressBytes !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressBytes = this._ingressBytes;
    }
    if (this._ingressPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.ingressPackets = this._ingressPackets;
    }
    if (this._ipRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipRcvd = this._ipRcvd;
    }
    if (this._ipSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSent = this._ipSent;
    }
    if (this._ipv6Rcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Rcvd = this._ipv6Rcvd;
    }
    if (this._ipv6Sent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Sent = this._ipv6Sent;
    }
    if (this._jumboFragDropBeforeSlb !== undefined) {
      hasAnyValues = true;
      internalValueResult.jumboFragDropBeforeSlb = this._jumboFragDropBeforeSlb;
    }
    if (this._jumboFragDropByFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.jumboFragDropByFilter = this._jumboFragDropByFilter;
    }
    if (this._jumboOutgoingMtuExceedDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.jumboOutgoingMtuExceedDrop = this._jumboOutgoingMtuExceedDrop;
    }
    if (this._mplsDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.mplsDrop = this._mplsDrop;
    }
    if (this._mplsMalformed !== undefined) {
      hasAnyValues = true;
      internalValueResult.mplsMalformed = this._mplsMalformed;
    }
    if (this._mplsRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.mplsRcvd = this._mplsRcvd;
    }
    if (this._noroute !== undefined) {
      hasAnyValues = true;
      internalValueResult.noroute = this._noroute;
    }
    if (this._pktNotForDdos !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktNotForDdos = this._pktNotForDdos;
    }
    if (this._srcIpBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIpBypass = this._srcIpBypass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosSwitchStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstBlackholeInject = undefined;
      this._dstBlackholeWithdraw = undefined;
      this._dstIpBypass = undefined;
      this._egressBytes = undefined;
      this._egressPackets = undefined;
      this._inStatelessPkt = undefined;
      this._ingressBytes = undefined;
      this._ingressPackets = undefined;
      this._ipRcvd = undefined;
      this._ipSent = undefined;
      this._ipv6Rcvd = undefined;
      this._ipv6Sent = undefined;
      this._jumboFragDropBeforeSlb = undefined;
      this._jumboFragDropByFilter = undefined;
      this._jumboOutgoingMtuExceedDrop = undefined;
      this._mplsDrop = undefined;
      this._mplsMalformed = undefined;
      this._mplsRcvd = undefined;
      this._noroute = undefined;
      this._pktNotForDdos = undefined;
      this._srcIpBypass = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstBlackholeInject = value.dstBlackholeInject;
      this._dstBlackholeWithdraw = value.dstBlackholeWithdraw;
      this._dstIpBypass = value.dstIpBypass;
      this._egressBytes = value.egressBytes;
      this._egressPackets = value.egressPackets;
      this._inStatelessPkt = value.inStatelessPkt;
      this._ingressBytes = value.ingressBytes;
      this._ingressPackets = value.ingressPackets;
      this._ipRcvd = value.ipRcvd;
      this._ipSent = value.ipSent;
      this._ipv6Rcvd = value.ipv6Rcvd;
      this._ipv6Sent = value.ipv6Sent;
      this._jumboFragDropBeforeSlb = value.jumboFragDropBeforeSlb;
      this._jumboFragDropByFilter = value.jumboFragDropByFilter;
      this._jumboOutgoingMtuExceedDrop = value.jumboOutgoingMtuExceedDrop;
      this._mplsDrop = value.mplsDrop;
      this._mplsMalformed = value.mplsMalformed;
      this._mplsRcvd = value.mplsRcvd;
      this._noroute = value.noroute;
      this._pktNotForDdos = value.pktNotForDdos;
      this._srcIpBypass = value.srcIpBypass;
    }
  }

  // dst_blackhole_inject - computed: false, optional: true, required: false
  private _dstBlackholeInject?: number; 
  public get dstBlackholeInject() {
    return this.getNumberAttribute('dst_blackhole_inject');
  }
  public set dstBlackholeInject(value: number) {
    this._dstBlackholeInject = value;
  }
  public resetDstBlackholeInject() {
    this._dstBlackholeInject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstBlackholeInjectInput() {
    return this._dstBlackholeInject;
  }

  // dst_blackhole_withdraw - computed: false, optional: true, required: false
  private _dstBlackholeWithdraw?: number; 
  public get dstBlackholeWithdraw() {
    return this.getNumberAttribute('dst_blackhole_withdraw');
  }
  public set dstBlackholeWithdraw(value: number) {
    this._dstBlackholeWithdraw = value;
  }
  public resetDstBlackholeWithdraw() {
    this._dstBlackholeWithdraw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstBlackholeWithdrawInput() {
    return this._dstBlackholeWithdraw;
  }

  // dst_ip_bypass - computed: false, optional: true, required: false
  private _dstIpBypass?: number; 
  public get dstIpBypass() {
    return this.getNumberAttribute('dst_ip_bypass');
  }
  public set dstIpBypass(value: number) {
    this._dstIpBypass = value;
  }
  public resetDstIpBypass() {
    this._dstIpBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpBypassInput() {
    return this._dstIpBypass;
  }

  // egress_bytes - computed: false, optional: true, required: false
  private _egressBytes?: number; 
  public get egressBytes() {
    return this.getNumberAttribute('egress_bytes');
  }
  public set egressBytes(value: number) {
    this._egressBytes = value;
  }
  public resetEgressBytes() {
    this._egressBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressBytesInput() {
    return this._egressBytes;
  }

  // egress_packets - computed: false, optional: true, required: false
  private _egressPackets?: number; 
  public get egressPackets() {
    return this.getNumberAttribute('egress_packets');
  }
  public set egressPackets(value: number) {
    this._egressPackets = value;
  }
  public resetEgressPackets() {
    this._egressPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressPacketsInput() {
    return this._egressPackets;
  }

  // in_stateless_pkt - computed: false, optional: true, required: false
  private _inStatelessPkt?: number; 
  public get inStatelessPkt() {
    return this.getNumberAttribute('in_stateless_pkt');
  }
  public set inStatelessPkt(value: number) {
    this._inStatelessPkt = value;
  }
  public resetInStatelessPkt() {
    this._inStatelessPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inStatelessPktInput() {
    return this._inStatelessPkt;
  }

  // ingress_bytes - computed: false, optional: true, required: false
  private _ingressBytes?: number; 
  public get ingressBytes() {
    return this.getNumberAttribute('ingress_bytes');
  }
  public set ingressBytes(value: number) {
    this._ingressBytes = value;
  }
  public resetIngressBytes() {
    this._ingressBytes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressBytesInput() {
    return this._ingressBytes;
  }

  // ingress_packets - computed: false, optional: true, required: false
  private _ingressPackets?: number; 
  public get ingressPackets() {
    return this.getNumberAttribute('ingress_packets');
  }
  public set ingressPackets(value: number) {
    this._ingressPackets = value;
  }
  public resetIngressPackets() {
    this._ingressPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressPacketsInput() {
    return this._ingressPackets;
  }

  // ip_rcvd - computed: false, optional: true, required: false
  private _ipRcvd?: number; 
  public get ipRcvd() {
    return this.getNumberAttribute('ip_rcvd');
  }
  public set ipRcvd(value: number) {
    this._ipRcvd = value;
  }
  public resetIpRcvd() {
    this._ipRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipRcvdInput() {
    return this._ipRcvd;
  }

  // ip_sent - computed: false, optional: true, required: false
  private _ipSent?: number; 
  public get ipSent() {
    return this.getNumberAttribute('ip_sent');
  }
  public set ipSent(value: number) {
    this._ipSent = value;
  }
  public resetIpSent() {
    this._ipSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSentInput() {
    return this._ipSent;
  }

  // ipv6_rcvd - computed: false, optional: true, required: false
  private _ipv6Rcvd?: number; 
  public get ipv6Rcvd() {
    return this.getNumberAttribute('ipv6_rcvd');
  }
  public set ipv6Rcvd(value: number) {
    this._ipv6Rcvd = value;
  }
  public resetIpv6Rcvd() {
    this._ipv6Rcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6RcvdInput() {
    return this._ipv6Rcvd;
  }

  // ipv6_sent - computed: false, optional: true, required: false
  private _ipv6Sent?: number; 
  public get ipv6Sent() {
    return this.getNumberAttribute('ipv6_sent');
  }
  public set ipv6Sent(value: number) {
    this._ipv6Sent = value;
  }
  public resetIpv6Sent() {
    this._ipv6Sent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SentInput() {
    return this._ipv6Sent;
  }

  // jumbo_frag_drop_before_slb - computed: false, optional: true, required: false
  private _jumboFragDropBeforeSlb?: number; 
  public get jumboFragDropBeforeSlb() {
    return this.getNumberAttribute('jumbo_frag_drop_before_slb');
  }
  public set jumboFragDropBeforeSlb(value: number) {
    this._jumboFragDropBeforeSlb = value;
  }
  public resetJumboFragDropBeforeSlb() {
    this._jumboFragDropBeforeSlb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumboFragDropBeforeSlbInput() {
    return this._jumboFragDropBeforeSlb;
  }

  // jumbo_frag_drop_by_filter - computed: false, optional: true, required: false
  private _jumboFragDropByFilter?: number; 
  public get jumboFragDropByFilter() {
    return this.getNumberAttribute('jumbo_frag_drop_by_filter');
  }
  public set jumboFragDropByFilter(value: number) {
    this._jumboFragDropByFilter = value;
  }
  public resetJumboFragDropByFilter() {
    this._jumboFragDropByFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumboFragDropByFilterInput() {
    return this._jumboFragDropByFilter;
  }

  // jumbo_outgoing_mtu_exceed_drop - computed: false, optional: true, required: false
  private _jumboOutgoingMtuExceedDrop?: number; 
  public get jumboOutgoingMtuExceedDrop() {
    return this.getNumberAttribute('jumbo_outgoing_mtu_exceed_drop');
  }
  public set jumboOutgoingMtuExceedDrop(value: number) {
    this._jumboOutgoingMtuExceedDrop = value;
  }
  public resetJumboOutgoingMtuExceedDrop() {
    this._jumboOutgoingMtuExceedDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jumboOutgoingMtuExceedDropInput() {
    return this._jumboOutgoingMtuExceedDrop;
  }

  // mpls_drop - computed: false, optional: true, required: false
  private _mplsDrop?: number; 
  public get mplsDrop() {
    return this.getNumberAttribute('mpls_drop');
  }
  public set mplsDrop(value: number) {
    this._mplsDrop = value;
  }
  public resetMplsDrop() {
    this._mplsDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mplsDropInput() {
    return this._mplsDrop;
  }

  // mpls_malformed - computed: false, optional: true, required: false
  private _mplsMalformed?: number; 
  public get mplsMalformed() {
    return this.getNumberAttribute('mpls_malformed');
  }
  public set mplsMalformed(value: number) {
    this._mplsMalformed = value;
  }
  public resetMplsMalformed() {
    this._mplsMalformed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mplsMalformedInput() {
    return this._mplsMalformed;
  }

  // mpls_rcvd - computed: false, optional: true, required: false
  private _mplsRcvd?: number; 
  public get mplsRcvd() {
    return this.getNumberAttribute('mpls_rcvd');
  }
  public set mplsRcvd(value: number) {
    this._mplsRcvd = value;
  }
  public resetMplsRcvd() {
    this._mplsRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mplsRcvdInput() {
    return this._mplsRcvd;
  }

  // noroute - computed: false, optional: true, required: false
  private _noroute?: number; 
  public get noroute() {
    return this.getNumberAttribute('noroute');
  }
  public set noroute(value: number) {
    this._noroute = value;
  }
  public resetNoroute() {
    this._noroute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get norouteInput() {
    return this._noroute;
  }

  // pkt_not_for_ddos - computed: false, optional: true, required: false
  private _pktNotForDdos?: number; 
  public get pktNotForDdos() {
    return this.getNumberAttribute('pkt_not_for_ddos');
  }
  public set pktNotForDdos(value: number) {
    this._pktNotForDdos = value;
  }
  public resetPktNotForDdos() {
    this._pktNotForDdos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktNotForDdosInput() {
    return this._pktNotForDdos;
  }

  // src_ip_bypass - computed: false, optional: true, required: false
  private _srcIpBypass?: number; 
  public get srcIpBypass() {
    return this.getNumberAttribute('src_ip_bypass');
  }
  public set srcIpBypass(value: number) {
    this._srcIpBypass = value;
  }
  public resetSrcIpBypass() {
    this._srcIpBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpBypassInput() {
    return this._srcIpBypass;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_switch_stats thunder_ddos_switch_stats}
*/
export class DataThunderDdosSwitchStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_switch_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosSwitchStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosSwitchStats to import
  * @param importFromId The id of the existing DataThunderDdosSwitchStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_switch_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosSwitchStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_switch_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/ddos_switch_stats thunder_ddos_switch_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosSwitchStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosSwitchStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_switch_stats',
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
  private _stats = new DataThunderDdosSwitchStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosSwitchStatsStats) {
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
      stats: dataThunderDdosSwitchStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderDdosSwitchStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosSwitchStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
