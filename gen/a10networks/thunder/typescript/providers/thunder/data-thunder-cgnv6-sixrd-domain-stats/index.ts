// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sixrd_domain_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6SixrdDomainStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sixrd_domain_stats#id DataThunderCgnv6SixrdDomainStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 6rd Domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sixrd_domain_stats#name DataThunderCgnv6SixrdDomainStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sixrd_domain_stats#stats DataThunderCgnv6SixrdDomainStats#stats}
  */
  readonly stats?: DataThunderCgnv6SixrdDomainStatsStats;
}
export interface DataThunderCgnv6SixrdDomainStatsStats {
  /**
  * Fragment processing errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sixrd_domain_stats#fragment_error DataThunderCgnv6SixrdDomainStats#fragment_error}
  */
  readonly fragmentError?: number;
  /**
  * Inbound Fragmented IPv4
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sixrd_domain_stats#inbound_fragment_ipv4 DataThunderCgnv6SixrdDomainStats#inbound_fragment_ipv4}
  */
  readonly inboundFragmentIpv4?: number;
  /**
  * Inbound ICMP packets received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sixrd_domain_stats#inbound_icmp_packets_received DataThunderCgnv6SixrdDomainStats#inbound_icmp_packets_received}
  */
  readonly inboundIcmpPacketsReceived?: number;
  /**
  * Inbound IPv4 destination unreachable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sixrd_domain_stats#inbound_ipv4_dest_unreachable DataThunderCgnv6SixrdDomainStats#inbound_ipv4_dest_unreachable}
  */
  readonly inboundIpv4DestUnreachable?: number;
  /**
  * Inbound other packets received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sixrd_domain_stats#inbound_other_packets_received DataThunderCgnv6SixrdDomainStats#inbound_other_packets_received}
  */
  readonly inboundOtherPacketsReceived?: number;
  /**
  * Inbound packets dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sixrd_domain_stats#inbound_packets_drop DataThunderCgnv6SixrdDomainStats#inbound_packets_drop}
  */
  readonly inboundPacketsDrop?: number;
  /**
  * Inbound TCP packets received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sixrd_domain_stats#inbound_tcp_packets_received DataThunderCgnv6SixrdDomainStats#inbound_tcp_packets_received}
  */
  readonly inboundTcpPacketsReceived?: number;
  /**
  * Inbound Fragmented IPv6 in tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sixrd_domain_stats#inbound_tunnel_fragment_ipv6 DataThunderCgnv6SixrdDomainStats#inbound_tunnel_fragment_ipv6}
  */
  readonly inboundTunnelFragmentIpv6?: number;
  /**
  * Inbound UDP packets received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sixrd_domain_stats#inbound_udp_packets_received DataThunderCgnv6SixrdDomainStats#inbound_udp_packets_received}
  */
  readonly inboundUdpPacketsReceived?: number;
  /**
  * Not local IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sixrd_domain_stats#not_local_ip DataThunderCgnv6SixrdDomainStats#not_local_ip}
  */
  readonly notLocalIp?: number;
  /**
  * Other errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sixrd_domain_stats#other_error DataThunderCgnv6SixrdDomainStats#other_error}
  */
  readonly otherError?: number;
  /**
  * Outbound Fragmented IPv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sixrd_domain_stats#outbound_fragment_ipv6 DataThunderCgnv6SixrdDomainStats#outbound_fragment_ipv6}
  */
  readonly outboundFragmentIpv6?: number;
  /**
  * Outbound ICMP packets received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sixrd_domain_stats#outbound_icmp_packets_received DataThunderCgnv6SixrdDomainStats#outbound_icmp_packets_received}
  */
  readonly outboundIcmpPacketsReceived?: number;
  /**
  * Outbound IPv6 destination unreachable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sixrd_domain_stats#outbound_ipv6_dest_unreachable DataThunderCgnv6SixrdDomainStats#outbound_ipv6_dest_unreachable}
  */
  readonly outboundIpv6DestUnreachable?: number;
  /**
  * Outbound other packets received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sixrd_domain_stats#outbound_other_packets_received DataThunderCgnv6SixrdDomainStats#outbound_other_packets_received}
  */
  readonly outboundOtherPacketsReceived?: number;
  /**
  * Outbound packets dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sixrd_domain_stats#outbound_packets_drop DataThunderCgnv6SixrdDomainStats#outbound_packets_drop}
  */
  readonly outboundPacketsDrop?: number;
  /**
  * Outbound TCP packets received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sixrd_domain_stats#outbound_tcp_packets_received DataThunderCgnv6SixrdDomainStats#outbound_tcp_packets_received}
  */
  readonly outboundTcpPacketsReceived?: number;
  /**
  * Outbound UDP packets received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sixrd_domain_stats#outbound_udp_packets_received DataThunderCgnv6SixrdDomainStats#outbound_udp_packets_received}
  */
  readonly outboundUdpPacketsReceived?: number;
  /**
  * Packet too big
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sixrd_domain_stats#packet_too_big DataThunderCgnv6SixrdDomainStats#packet_too_big}
  */
  readonly packetTooBig?: number;
  /**
  * Unknown 6rd delegated prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sixrd_domain_stats#unknown_delegated_prefix DataThunderCgnv6SixrdDomainStats#unknown_delegated_prefix}
  */
  readonly unknownDelegatedPrefix?: number;
  /**
  * Traffic match SLB virtual port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sixrd_domain_stats#vport_matched DataThunderCgnv6SixrdDomainStats#vport_matched}
  */
  readonly vportMatched?: number;
}

export function dataThunderCgnv6SixrdDomainStatsStatsToTerraform(struct?: DataThunderCgnv6SixrdDomainStatsStatsOutputReference | DataThunderCgnv6SixrdDomainStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fragment_error: cdktf.numberToTerraform(struct!.fragmentError),
    inbound_fragment_ipv4: cdktf.numberToTerraform(struct!.inboundFragmentIpv4),
    inbound_icmp_packets_received: cdktf.numberToTerraform(struct!.inboundIcmpPacketsReceived),
    inbound_ipv4_dest_unreachable: cdktf.numberToTerraform(struct!.inboundIpv4DestUnreachable),
    inbound_other_packets_received: cdktf.numberToTerraform(struct!.inboundOtherPacketsReceived),
    inbound_packets_drop: cdktf.numberToTerraform(struct!.inboundPacketsDrop),
    inbound_tcp_packets_received: cdktf.numberToTerraform(struct!.inboundTcpPacketsReceived),
    inbound_tunnel_fragment_ipv6: cdktf.numberToTerraform(struct!.inboundTunnelFragmentIpv6),
    inbound_udp_packets_received: cdktf.numberToTerraform(struct!.inboundUdpPacketsReceived),
    not_local_ip: cdktf.numberToTerraform(struct!.notLocalIp),
    other_error: cdktf.numberToTerraform(struct!.otherError),
    outbound_fragment_ipv6: cdktf.numberToTerraform(struct!.outboundFragmentIpv6),
    outbound_icmp_packets_received: cdktf.numberToTerraform(struct!.outboundIcmpPacketsReceived),
    outbound_ipv6_dest_unreachable: cdktf.numberToTerraform(struct!.outboundIpv6DestUnreachable),
    outbound_other_packets_received: cdktf.numberToTerraform(struct!.outboundOtherPacketsReceived),
    outbound_packets_drop: cdktf.numberToTerraform(struct!.outboundPacketsDrop),
    outbound_tcp_packets_received: cdktf.numberToTerraform(struct!.outboundTcpPacketsReceived),
    outbound_udp_packets_received: cdktf.numberToTerraform(struct!.outboundUdpPacketsReceived),
    packet_too_big: cdktf.numberToTerraform(struct!.packetTooBig),
    unknown_delegated_prefix: cdktf.numberToTerraform(struct!.unknownDelegatedPrefix),
    vport_matched: cdktf.numberToTerraform(struct!.vportMatched),
  }
}


export function dataThunderCgnv6SixrdDomainStatsStatsToHclTerraform(struct?: DataThunderCgnv6SixrdDomainStatsStatsOutputReference | DataThunderCgnv6SixrdDomainStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fragment_error: {
      value: cdktf.numberToHclTerraform(struct!.fragmentError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound_fragment_ipv4: {
      value: cdktf.numberToHclTerraform(struct!.inboundFragmentIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound_icmp_packets_received: {
      value: cdktf.numberToHclTerraform(struct!.inboundIcmpPacketsReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound_ipv4_dest_unreachable: {
      value: cdktf.numberToHclTerraform(struct!.inboundIpv4DestUnreachable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound_other_packets_received: {
      value: cdktf.numberToHclTerraform(struct!.inboundOtherPacketsReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound_packets_drop: {
      value: cdktf.numberToHclTerraform(struct!.inboundPacketsDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound_tcp_packets_received: {
      value: cdktf.numberToHclTerraform(struct!.inboundTcpPacketsReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound_tunnel_fragment_ipv6: {
      value: cdktf.numberToHclTerraform(struct!.inboundTunnelFragmentIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound_udp_packets_received: {
      value: cdktf.numberToHclTerraform(struct!.inboundUdpPacketsReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    not_local_ip: {
      value: cdktf.numberToHclTerraform(struct!.notLocalIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_error: {
      value: cdktf.numberToHclTerraform(struct!.otherError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_fragment_ipv6: {
      value: cdktf.numberToHclTerraform(struct!.outboundFragmentIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_icmp_packets_received: {
      value: cdktf.numberToHclTerraform(struct!.outboundIcmpPacketsReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_ipv6_dest_unreachable: {
      value: cdktf.numberToHclTerraform(struct!.outboundIpv6DestUnreachable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_other_packets_received: {
      value: cdktf.numberToHclTerraform(struct!.outboundOtherPacketsReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_packets_drop: {
      value: cdktf.numberToHclTerraform(struct!.outboundPacketsDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_tcp_packets_received: {
      value: cdktf.numberToHclTerraform(struct!.outboundTcpPacketsReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_udp_packets_received: {
      value: cdktf.numberToHclTerraform(struct!.outboundUdpPacketsReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_too_big: {
      value: cdktf.numberToHclTerraform(struct!.packetTooBig),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_delegated_prefix: {
      value: cdktf.numberToHclTerraform(struct!.unknownDelegatedPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vport_matched: {
      value: cdktf.numberToHclTerraform(struct!.vportMatched),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6SixrdDomainStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6SixrdDomainStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fragmentError !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragmentError = this._fragmentError;
    }
    if (this._inboundFragmentIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundFragmentIpv4 = this._inboundFragmentIpv4;
    }
    if (this._inboundIcmpPacketsReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundIcmpPacketsReceived = this._inboundIcmpPacketsReceived;
    }
    if (this._inboundIpv4DestUnreachable !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundIpv4DestUnreachable = this._inboundIpv4DestUnreachable;
    }
    if (this._inboundOtherPacketsReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundOtherPacketsReceived = this._inboundOtherPacketsReceived;
    }
    if (this._inboundPacketsDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundPacketsDrop = this._inboundPacketsDrop;
    }
    if (this._inboundTcpPacketsReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundTcpPacketsReceived = this._inboundTcpPacketsReceived;
    }
    if (this._inboundTunnelFragmentIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundTunnelFragmentIpv6 = this._inboundTunnelFragmentIpv6;
    }
    if (this._inboundUdpPacketsReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundUdpPacketsReceived = this._inboundUdpPacketsReceived;
    }
    if (this._notLocalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.notLocalIp = this._notLocalIp;
    }
    if (this._otherError !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherError = this._otherError;
    }
    if (this._outboundFragmentIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundFragmentIpv6 = this._outboundFragmentIpv6;
    }
    if (this._outboundIcmpPacketsReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundIcmpPacketsReceived = this._outboundIcmpPacketsReceived;
    }
    if (this._outboundIpv6DestUnreachable !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundIpv6DestUnreachable = this._outboundIpv6DestUnreachable;
    }
    if (this._outboundOtherPacketsReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundOtherPacketsReceived = this._outboundOtherPacketsReceived;
    }
    if (this._outboundPacketsDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundPacketsDrop = this._outboundPacketsDrop;
    }
    if (this._outboundTcpPacketsReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundTcpPacketsReceived = this._outboundTcpPacketsReceived;
    }
    if (this._outboundUdpPacketsReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundUdpPacketsReceived = this._outboundUdpPacketsReceived;
    }
    if (this._packetTooBig !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetTooBig = this._packetTooBig;
    }
    if (this._unknownDelegatedPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownDelegatedPrefix = this._unknownDelegatedPrefix;
    }
    if (this._vportMatched !== undefined) {
      hasAnyValues = true;
      internalValueResult.vportMatched = this._vportMatched;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6SixrdDomainStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fragmentError = undefined;
      this._inboundFragmentIpv4 = undefined;
      this._inboundIcmpPacketsReceived = undefined;
      this._inboundIpv4DestUnreachable = undefined;
      this._inboundOtherPacketsReceived = undefined;
      this._inboundPacketsDrop = undefined;
      this._inboundTcpPacketsReceived = undefined;
      this._inboundTunnelFragmentIpv6 = undefined;
      this._inboundUdpPacketsReceived = undefined;
      this._notLocalIp = undefined;
      this._otherError = undefined;
      this._outboundFragmentIpv6 = undefined;
      this._outboundIcmpPacketsReceived = undefined;
      this._outboundIpv6DestUnreachable = undefined;
      this._outboundOtherPacketsReceived = undefined;
      this._outboundPacketsDrop = undefined;
      this._outboundTcpPacketsReceived = undefined;
      this._outboundUdpPacketsReceived = undefined;
      this._packetTooBig = undefined;
      this._unknownDelegatedPrefix = undefined;
      this._vportMatched = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fragmentError = value.fragmentError;
      this._inboundFragmentIpv4 = value.inboundFragmentIpv4;
      this._inboundIcmpPacketsReceived = value.inboundIcmpPacketsReceived;
      this._inboundIpv4DestUnreachable = value.inboundIpv4DestUnreachable;
      this._inboundOtherPacketsReceived = value.inboundOtherPacketsReceived;
      this._inboundPacketsDrop = value.inboundPacketsDrop;
      this._inboundTcpPacketsReceived = value.inboundTcpPacketsReceived;
      this._inboundTunnelFragmentIpv6 = value.inboundTunnelFragmentIpv6;
      this._inboundUdpPacketsReceived = value.inboundUdpPacketsReceived;
      this._notLocalIp = value.notLocalIp;
      this._otherError = value.otherError;
      this._outboundFragmentIpv6 = value.outboundFragmentIpv6;
      this._outboundIcmpPacketsReceived = value.outboundIcmpPacketsReceived;
      this._outboundIpv6DestUnreachable = value.outboundIpv6DestUnreachable;
      this._outboundOtherPacketsReceived = value.outboundOtherPacketsReceived;
      this._outboundPacketsDrop = value.outboundPacketsDrop;
      this._outboundTcpPacketsReceived = value.outboundTcpPacketsReceived;
      this._outboundUdpPacketsReceived = value.outboundUdpPacketsReceived;
      this._packetTooBig = value.packetTooBig;
      this._unknownDelegatedPrefix = value.unknownDelegatedPrefix;
      this._vportMatched = value.vportMatched;
    }
  }

  // fragment_error - computed: false, optional: true, required: false
  private _fragmentError?: number; 
  public get fragmentError() {
    return this.getNumberAttribute('fragment_error');
  }
  public set fragmentError(value: number) {
    this._fragmentError = value;
  }
  public resetFragmentError() {
    this._fragmentError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fragmentErrorInput() {
    return this._fragmentError;
  }

  // inbound_fragment_ipv4 - computed: false, optional: true, required: false
  private _inboundFragmentIpv4?: number; 
  public get inboundFragmentIpv4() {
    return this.getNumberAttribute('inbound_fragment_ipv4');
  }
  public set inboundFragmentIpv4(value: number) {
    this._inboundFragmentIpv4 = value;
  }
  public resetInboundFragmentIpv4() {
    this._inboundFragmentIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundFragmentIpv4Input() {
    return this._inboundFragmentIpv4;
  }

  // inbound_icmp_packets_received - computed: false, optional: true, required: false
  private _inboundIcmpPacketsReceived?: number; 
  public get inboundIcmpPacketsReceived() {
    return this.getNumberAttribute('inbound_icmp_packets_received');
  }
  public set inboundIcmpPacketsReceived(value: number) {
    this._inboundIcmpPacketsReceived = value;
  }
  public resetInboundIcmpPacketsReceived() {
    this._inboundIcmpPacketsReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundIcmpPacketsReceivedInput() {
    return this._inboundIcmpPacketsReceived;
  }

  // inbound_ipv4_dest_unreachable - computed: false, optional: true, required: false
  private _inboundIpv4DestUnreachable?: number; 
  public get inboundIpv4DestUnreachable() {
    return this.getNumberAttribute('inbound_ipv4_dest_unreachable');
  }
  public set inboundIpv4DestUnreachable(value: number) {
    this._inboundIpv4DestUnreachable = value;
  }
  public resetInboundIpv4DestUnreachable() {
    this._inboundIpv4DestUnreachable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundIpv4DestUnreachableInput() {
    return this._inboundIpv4DestUnreachable;
  }

  // inbound_other_packets_received - computed: false, optional: true, required: false
  private _inboundOtherPacketsReceived?: number; 
  public get inboundOtherPacketsReceived() {
    return this.getNumberAttribute('inbound_other_packets_received');
  }
  public set inboundOtherPacketsReceived(value: number) {
    this._inboundOtherPacketsReceived = value;
  }
  public resetInboundOtherPacketsReceived() {
    this._inboundOtherPacketsReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundOtherPacketsReceivedInput() {
    return this._inboundOtherPacketsReceived;
  }

  // inbound_packets_drop - computed: false, optional: true, required: false
  private _inboundPacketsDrop?: number; 
  public get inboundPacketsDrop() {
    return this.getNumberAttribute('inbound_packets_drop');
  }
  public set inboundPacketsDrop(value: number) {
    this._inboundPacketsDrop = value;
  }
  public resetInboundPacketsDrop() {
    this._inboundPacketsDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundPacketsDropInput() {
    return this._inboundPacketsDrop;
  }

  // inbound_tcp_packets_received - computed: false, optional: true, required: false
  private _inboundTcpPacketsReceived?: number; 
  public get inboundTcpPacketsReceived() {
    return this.getNumberAttribute('inbound_tcp_packets_received');
  }
  public set inboundTcpPacketsReceived(value: number) {
    this._inboundTcpPacketsReceived = value;
  }
  public resetInboundTcpPacketsReceived() {
    this._inboundTcpPacketsReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundTcpPacketsReceivedInput() {
    return this._inboundTcpPacketsReceived;
  }

  // inbound_tunnel_fragment_ipv6 - computed: false, optional: true, required: false
  private _inboundTunnelFragmentIpv6?: number; 
  public get inboundTunnelFragmentIpv6() {
    return this.getNumberAttribute('inbound_tunnel_fragment_ipv6');
  }
  public set inboundTunnelFragmentIpv6(value: number) {
    this._inboundTunnelFragmentIpv6 = value;
  }
  public resetInboundTunnelFragmentIpv6() {
    this._inboundTunnelFragmentIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundTunnelFragmentIpv6Input() {
    return this._inboundTunnelFragmentIpv6;
  }

  // inbound_udp_packets_received - computed: false, optional: true, required: false
  private _inboundUdpPacketsReceived?: number; 
  public get inboundUdpPacketsReceived() {
    return this.getNumberAttribute('inbound_udp_packets_received');
  }
  public set inboundUdpPacketsReceived(value: number) {
    this._inboundUdpPacketsReceived = value;
  }
  public resetInboundUdpPacketsReceived() {
    this._inboundUdpPacketsReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundUdpPacketsReceivedInput() {
    return this._inboundUdpPacketsReceived;
  }

  // not_local_ip - computed: false, optional: true, required: false
  private _notLocalIp?: number; 
  public get notLocalIp() {
    return this.getNumberAttribute('not_local_ip');
  }
  public set notLocalIp(value: number) {
    this._notLocalIp = value;
  }
  public resetNotLocalIp() {
    this._notLocalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notLocalIpInput() {
    return this._notLocalIp;
  }

  // other_error - computed: false, optional: true, required: false
  private _otherError?: number; 
  public get otherError() {
    return this.getNumberAttribute('other_error');
  }
  public set otherError(value: number) {
    this._otherError = value;
  }
  public resetOtherError() {
    this._otherError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherErrorInput() {
    return this._otherError;
  }

  // outbound_fragment_ipv6 - computed: false, optional: true, required: false
  private _outboundFragmentIpv6?: number; 
  public get outboundFragmentIpv6() {
    return this.getNumberAttribute('outbound_fragment_ipv6');
  }
  public set outboundFragmentIpv6(value: number) {
    this._outboundFragmentIpv6 = value;
  }
  public resetOutboundFragmentIpv6() {
    this._outboundFragmentIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundFragmentIpv6Input() {
    return this._outboundFragmentIpv6;
  }

  // outbound_icmp_packets_received - computed: false, optional: true, required: false
  private _outboundIcmpPacketsReceived?: number; 
  public get outboundIcmpPacketsReceived() {
    return this.getNumberAttribute('outbound_icmp_packets_received');
  }
  public set outboundIcmpPacketsReceived(value: number) {
    this._outboundIcmpPacketsReceived = value;
  }
  public resetOutboundIcmpPacketsReceived() {
    this._outboundIcmpPacketsReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundIcmpPacketsReceivedInput() {
    return this._outboundIcmpPacketsReceived;
  }

  // outbound_ipv6_dest_unreachable - computed: false, optional: true, required: false
  private _outboundIpv6DestUnreachable?: number; 
  public get outboundIpv6DestUnreachable() {
    return this.getNumberAttribute('outbound_ipv6_dest_unreachable');
  }
  public set outboundIpv6DestUnreachable(value: number) {
    this._outboundIpv6DestUnreachable = value;
  }
  public resetOutboundIpv6DestUnreachable() {
    this._outboundIpv6DestUnreachable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundIpv6DestUnreachableInput() {
    return this._outboundIpv6DestUnreachable;
  }

  // outbound_other_packets_received - computed: false, optional: true, required: false
  private _outboundOtherPacketsReceived?: number; 
  public get outboundOtherPacketsReceived() {
    return this.getNumberAttribute('outbound_other_packets_received');
  }
  public set outboundOtherPacketsReceived(value: number) {
    this._outboundOtherPacketsReceived = value;
  }
  public resetOutboundOtherPacketsReceived() {
    this._outboundOtherPacketsReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundOtherPacketsReceivedInput() {
    return this._outboundOtherPacketsReceived;
  }

  // outbound_packets_drop - computed: false, optional: true, required: false
  private _outboundPacketsDrop?: number; 
  public get outboundPacketsDrop() {
    return this.getNumberAttribute('outbound_packets_drop');
  }
  public set outboundPacketsDrop(value: number) {
    this._outboundPacketsDrop = value;
  }
  public resetOutboundPacketsDrop() {
    this._outboundPacketsDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundPacketsDropInput() {
    return this._outboundPacketsDrop;
  }

  // outbound_tcp_packets_received - computed: false, optional: true, required: false
  private _outboundTcpPacketsReceived?: number; 
  public get outboundTcpPacketsReceived() {
    return this.getNumberAttribute('outbound_tcp_packets_received');
  }
  public set outboundTcpPacketsReceived(value: number) {
    this._outboundTcpPacketsReceived = value;
  }
  public resetOutboundTcpPacketsReceived() {
    this._outboundTcpPacketsReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundTcpPacketsReceivedInput() {
    return this._outboundTcpPacketsReceived;
  }

  // outbound_udp_packets_received - computed: false, optional: true, required: false
  private _outboundUdpPacketsReceived?: number; 
  public get outboundUdpPacketsReceived() {
    return this.getNumberAttribute('outbound_udp_packets_received');
  }
  public set outboundUdpPacketsReceived(value: number) {
    this._outboundUdpPacketsReceived = value;
  }
  public resetOutboundUdpPacketsReceived() {
    this._outboundUdpPacketsReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundUdpPacketsReceivedInput() {
    return this._outboundUdpPacketsReceived;
  }

  // packet_too_big - computed: false, optional: true, required: false
  private _packetTooBig?: number; 
  public get packetTooBig() {
    return this.getNumberAttribute('packet_too_big');
  }
  public set packetTooBig(value: number) {
    this._packetTooBig = value;
  }
  public resetPacketTooBig() {
    this._packetTooBig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetTooBigInput() {
    return this._packetTooBig;
  }

  // unknown_delegated_prefix - computed: false, optional: true, required: false
  private _unknownDelegatedPrefix?: number; 
  public get unknownDelegatedPrefix() {
    return this.getNumberAttribute('unknown_delegated_prefix');
  }
  public set unknownDelegatedPrefix(value: number) {
    this._unknownDelegatedPrefix = value;
  }
  public resetUnknownDelegatedPrefix() {
    this._unknownDelegatedPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownDelegatedPrefixInput() {
    return this._unknownDelegatedPrefix;
  }

  // vport_matched - computed: false, optional: true, required: false
  private _vportMatched?: number; 
  public get vportMatched() {
    return this.getNumberAttribute('vport_matched');
  }
  public set vportMatched(value: number) {
    this._vportMatched = value;
  }
  public resetVportMatched() {
    this._vportMatched = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vportMatchedInput() {
    return this._vportMatched;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sixrd_domain_stats thunder_cgnv6_sixrd_domain_stats}
*/
export class DataThunderCgnv6SixrdDomainStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_sixrd_domain_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6SixrdDomainStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6SixrdDomainStats to import
  * @param importFromId The id of the existing DataThunderCgnv6SixrdDomainStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sixrd_domain_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6SixrdDomainStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_sixrd_domain_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_sixrd_domain_stats thunder_cgnv6_sixrd_domain_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6SixrdDomainStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6SixrdDomainStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_sixrd_domain_stats',
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
    this._name = config.name;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderCgnv6SixrdDomainStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6SixrdDomainStatsStats) {
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
      name: cdktf.stringToTerraform(this._name),
      stats: dataThunderCgnv6SixrdDomainStatsStatsToTerraform(this._stats.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stats: {
        value: dataThunderCgnv6SixrdDomainStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6SixrdDomainStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
