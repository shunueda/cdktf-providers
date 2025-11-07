// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat46_stateless_global_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6Nat46StatelessGlobalStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat46_stateless_global_stats#id DataThunderCgnv6Nat46StatelessGlobalStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat46_stateless_global_stats#stats DataThunderCgnv6Nat46StatelessGlobalStats#stats}
  */
  readonly stats?: DataThunderCgnv6Nat46StatelessGlobalStatsStats;
}
export interface DataThunderCgnv6Nat46StatelessGlobalStatsStats {
  /**
  * conn count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat46_stateless_global_stats#conn_count DataThunderCgnv6Nat46StatelessGlobalStats#conn_count}
  */
  readonly connCount?: number;
  /**
  * Fragment processing errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat46_stateless_global_stats#fragment_error DataThunderCgnv6Nat46StatelessGlobalStats#fragment_error}
  */
  readonly fragmentError?: number;
  /**
  * HA is standby
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat46_stateless_global_stats#ha_standby DataThunderCgnv6Nat46StatelessGlobalStats#ha_standby}
  */
  readonly haStandby?: number;
  /**
  * ICMP to ICMPv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat46_stateless_global_stats#icmp_to_icmpv6 DataThunderCgnv6Nat46StatelessGlobalStats#icmp_to_icmpv6}
  */
  readonly icmpToIcmpv6?: number;
  /**
  * ICMP to ICMPv6 errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat46_stateless_global_stats#icmp_to_icmpv6_error DataThunderCgnv6Nat46StatelessGlobalStats#icmp_to_icmpv6_error}
  */
  readonly icmpToIcmpv6Error?: number;
  /**
  * ICMPv6 to ICMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat46_stateless_global_stats#icmpv6_to_icmp DataThunderCgnv6Nat46StatelessGlobalStats#icmpv6_to_icmp}
  */
  readonly icmpv6ToIcmp?: number;
  /**
  * ICMPv6 to ICMP errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat46_stateless_global_stats#icmpv6_to_icmp_error DataThunderCgnv6Nat46StatelessGlobalStats#icmpv6_to_icmp_error}
  */
  readonly icmpv6ToIcmpError?: number;
  /**
  * Inbound IPv4 packets fragmented
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat46_stateless_global_stats#inbound_ipv4_fragmented DataThunderCgnv6Nat46StatelessGlobalStats#inbound_ipv4_fragmented}
  */
  readonly inboundIpv4Fragmented?: number;
  /**
  * Inbound IPv4 destination unreachable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat46_stateless_global_stats#inbound_ipv4_unreachable DataThunderCgnv6Nat46StatelessGlobalStats#inbound_ipv4_unreachable}
  */
  readonly inboundIpv4Unreachable?: number;
  /**
  * Inbound IPv6 packets dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat46_stateless_global_stats#inbound_ipv6_drop DataThunderCgnv6Nat46StatelessGlobalStats#inbound_ipv6_drop}
  */
  readonly inboundIpv6Drop?: number;
  /**
  * Inbound IPv6 fragment packets received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat46_stateless_global_stats#inbound_ipv6_fragment_received DataThunderCgnv6Nat46StatelessGlobalStats#inbound_ipv6_fragment_received}
  */
  readonly inboundIpv6FragmentReceived?: number;
  /**
  * Inbound IPv6 packets received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat46_stateless_global_stats#inbound_ipv6_received DataThunderCgnv6Nat46StatelessGlobalStats#inbound_ipv6_received}
  */
  readonly inboundIpv6Received?: number;
  /**
  * Other errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat46_stateless_global_stats#other_error DataThunderCgnv6Nat46StatelessGlobalStats#other_error}
  */
  readonly otherError?: number;
  /**
  * Outbound IPv4 packets dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat46_stateless_global_stats#outbound_ipv4_drop DataThunderCgnv6Nat46StatelessGlobalStats#outbound_ipv4_drop}
  */
  readonly outboundIpv4Drop?: number;
  /**
  * Outbound IPv4 fragment packets received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat46_stateless_global_stats#outbound_ipv4_fragment_received DataThunderCgnv6Nat46StatelessGlobalStats#outbound_ipv4_fragment_received}
  */
  readonly outboundIpv4FragmentReceived?: number;
  /**
  * Outbound IPv4 packets received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat46_stateless_global_stats#outbound_ipv4_received DataThunderCgnv6Nat46StatelessGlobalStats#outbound_ipv4_received}
  */
  readonly outboundIpv4Received?: number;
  /**
  * Outbound IPv6 packets fragmented
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat46_stateless_global_stats#outbound_ipv6_fragmented DataThunderCgnv6Nat46StatelessGlobalStats#outbound_ipv6_fragmented}
  */
  readonly outboundIpv6Fragmented?: number;
  /**
  * Outbound IPv6 destination unreachable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat46_stateless_global_stats#outbound_ipv6_unreachable DataThunderCgnv6Nat46StatelessGlobalStats#outbound_ipv6_unreachable}
  */
  readonly outboundIpv6Unreachable?: number;
  /**
  * Packet too big
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat46_stateless_global_stats#packet_too_big DataThunderCgnv6Nat46StatelessGlobalStats#packet_too_big}
  */
  readonly packetTooBig?: number;
}

export function dataThunderCgnv6Nat46StatelessGlobalStatsStatsToTerraform(struct?: DataThunderCgnv6Nat46StatelessGlobalStatsStatsOutputReference | DataThunderCgnv6Nat46StatelessGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conn_count: cdktf.numberToTerraform(struct!.connCount),
    fragment_error: cdktf.numberToTerraform(struct!.fragmentError),
    ha_standby: cdktf.numberToTerraform(struct!.haStandby),
    icmp_to_icmpv6: cdktf.numberToTerraform(struct!.icmpToIcmpv6),
    icmp_to_icmpv6_error: cdktf.numberToTerraform(struct!.icmpToIcmpv6Error),
    icmpv6_to_icmp: cdktf.numberToTerraform(struct!.icmpv6ToIcmp),
    icmpv6_to_icmp_error: cdktf.numberToTerraform(struct!.icmpv6ToIcmpError),
    inbound_ipv4_fragmented: cdktf.numberToTerraform(struct!.inboundIpv4Fragmented),
    inbound_ipv4_unreachable: cdktf.numberToTerraform(struct!.inboundIpv4Unreachable),
    inbound_ipv6_drop: cdktf.numberToTerraform(struct!.inboundIpv6Drop),
    inbound_ipv6_fragment_received: cdktf.numberToTerraform(struct!.inboundIpv6FragmentReceived),
    inbound_ipv6_received: cdktf.numberToTerraform(struct!.inboundIpv6Received),
    other_error: cdktf.numberToTerraform(struct!.otherError),
    outbound_ipv4_drop: cdktf.numberToTerraform(struct!.outboundIpv4Drop),
    outbound_ipv4_fragment_received: cdktf.numberToTerraform(struct!.outboundIpv4FragmentReceived),
    outbound_ipv4_received: cdktf.numberToTerraform(struct!.outboundIpv4Received),
    outbound_ipv6_fragmented: cdktf.numberToTerraform(struct!.outboundIpv6Fragmented),
    outbound_ipv6_unreachable: cdktf.numberToTerraform(struct!.outboundIpv6Unreachable),
    packet_too_big: cdktf.numberToTerraform(struct!.packetTooBig),
  }
}


export function dataThunderCgnv6Nat46StatelessGlobalStatsStatsToHclTerraform(struct?: DataThunderCgnv6Nat46StatelessGlobalStatsStatsOutputReference | DataThunderCgnv6Nat46StatelessGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conn_count: {
      value: cdktf.numberToHclTerraform(struct!.connCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fragment_error: {
      value: cdktf.numberToHclTerraform(struct!.fragmentError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_standby: {
      value: cdktf.numberToHclTerraform(struct!.haStandby),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_to_icmpv6: {
      value: cdktf.numberToHclTerraform(struct!.icmpToIcmpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_to_icmpv6_error: {
      value: cdktf.numberToHclTerraform(struct!.icmpToIcmpv6Error),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_to_icmp: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6ToIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_to_icmp_error: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6ToIcmpError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound_ipv4_fragmented: {
      value: cdktf.numberToHclTerraform(struct!.inboundIpv4Fragmented),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound_ipv4_unreachable: {
      value: cdktf.numberToHclTerraform(struct!.inboundIpv4Unreachable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound_ipv6_drop: {
      value: cdktf.numberToHclTerraform(struct!.inboundIpv6Drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound_ipv6_fragment_received: {
      value: cdktf.numberToHclTerraform(struct!.inboundIpv6FragmentReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inbound_ipv6_received: {
      value: cdktf.numberToHclTerraform(struct!.inboundIpv6Received),
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
    outbound_ipv4_drop: {
      value: cdktf.numberToHclTerraform(struct!.outboundIpv4Drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_ipv4_fragment_received: {
      value: cdktf.numberToHclTerraform(struct!.outboundIpv4FragmentReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_ipv4_received: {
      value: cdktf.numberToHclTerraform(struct!.outboundIpv4Received),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_ipv6_fragmented: {
      value: cdktf.numberToHclTerraform(struct!.outboundIpv6Fragmented),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    outbound_ipv6_unreachable: {
      value: cdktf.numberToHclTerraform(struct!.outboundIpv6Unreachable),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6Nat46StatelessGlobalStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6Nat46StatelessGlobalStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.connCount = this._connCount;
    }
    if (this._fragmentError !== undefined) {
      hasAnyValues = true;
      internalValueResult.fragmentError = this._fragmentError;
    }
    if (this._haStandby !== undefined) {
      hasAnyValues = true;
      internalValueResult.haStandby = this._haStandby;
    }
    if (this._icmpToIcmpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpToIcmpv6 = this._icmpToIcmpv6;
    }
    if (this._icmpToIcmpv6Error !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpToIcmpv6Error = this._icmpToIcmpv6Error;
    }
    if (this._icmpv6ToIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6ToIcmp = this._icmpv6ToIcmp;
    }
    if (this._icmpv6ToIcmpError !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6ToIcmpError = this._icmpv6ToIcmpError;
    }
    if (this._inboundIpv4Fragmented !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundIpv4Fragmented = this._inboundIpv4Fragmented;
    }
    if (this._inboundIpv4Unreachable !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundIpv4Unreachable = this._inboundIpv4Unreachable;
    }
    if (this._inboundIpv6Drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundIpv6Drop = this._inboundIpv6Drop;
    }
    if (this._inboundIpv6FragmentReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundIpv6FragmentReceived = this._inboundIpv6FragmentReceived;
    }
    if (this._inboundIpv6Received !== undefined) {
      hasAnyValues = true;
      internalValueResult.inboundIpv6Received = this._inboundIpv6Received;
    }
    if (this._otherError !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherError = this._otherError;
    }
    if (this._outboundIpv4Drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundIpv4Drop = this._outboundIpv4Drop;
    }
    if (this._outboundIpv4FragmentReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundIpv4FragmentReceived = this._outboundIpv4FragmentReceived;
    }
    if (this._outboundIpv4Received !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundIpv4Received = this._outboundIpv4Received;
    }
    if (this._outboundIpv6Fragmented !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundIpv6Fragmented = this._outboundIpv6Fragmented;
    }
    if (this._outboundIpv6Unreachable !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundIpv6Unreachable = this._outboundIpv6Unreachable;
    }
    if (this._packetTooBig !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetTooBig = this._packetTooBig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6Nat46StatelessGlobalStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connCount = undefined;
      this._fragmentError = undefined;
      this._haStandby = undefined;
      this._icmpToIcmpv6 = undefined;
      this._icmpToIcmpv6Error = undefined;
      this._icmpv6ToIcmp = undefined;
      this._icmpv6ToIcmpError = undefined;
      this._inboundIpv4Fragmented = undefined;
      this._inboundIpv4Unreachable = undefined;
      this._inboundIpv6Drop = undefined;
      this._inboundIpv6FragmentReceived = undefined;
      this._inboundIpv6Received = undefined;
      this._otherError = undefined;
      this._outboundIpv4Drop = undefined;
      this._outboundIpv4FragmentReceived = undefined;
      this._outboundIpv4Received = undefined;
      this._outboundIpv6Fragmented = undefined;
      this._outboundIpv6Unreachable = undefined;
      this._packetTooBig = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connCount = value.connCount;
      this._fragmentError = value.fragmentError;
      this._haStandby = value.haStandby;
      this._icmpToIcmpv6 = value.icmpToIcmpv6;
      this._icmpToIcmpv6Error = value.icmpToIcmpv6Error;
      this._icmpv6ToIcmp = value.icmpv6ToIcmp;
      this._icmpv6ToIcmpError = value.icmpv6ToIcmpError;
      this._inboundIpv4Fragmented = value.inboundIpv4Fragmented;
      this._inboundIpv4Unreachable = value.inboundIpv4Unreachable;
      this._inboundIpv6Drop = value.inboundIpv6Drop;
      this._inboundIpv6FragmentReceived = value.inboundIpv6FragmentReceived;
      this._inboundIpv6Received = value.inboundIpv6Received;
      this._otherError = value.otherError;
      this._outboundIpv4Drop = value.outboundIpv4Drop;
      this._outboundIpv4FragmentReceived = value.outboundIpv4FragmentReceived;
      this._outboundIpv4Received = value.outboundIpv4Received;
      this._outboundIpv6Fragmented = value.outboundIpv6Fragmented;
      this._outboundIpv6Unreachable = value.outboundIpv6Unreachable;
      this._packetTooBig = value.packetTooBig;
    }
  }

  // conn_count - computed: false, optional: true, required: false
  private _connCount?: number; 
  public get connCount() {
    return this.getNumberAttribute('conn_count');
  }
  public set connCount(value: number) {
    this._connCount = value;
  }
  public resetConnCount() {
    this._connCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connCountInput() {
    return this._connCount;
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

  // ha_standby - computed: false, optional: true, required: false
  private _haStandby?: number; 
  public get haStandby() {
    return this.getNumberAttribute('ha_standby');
  }
  public set haStandby(value: number) {
    this._haStandby = value;
  }
  public resetHaStandby() {
    this._haStandby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haStandbyInput() {
    return this._haStandby;
  }

  // icmp_to_icmpv6 - computed: false, optional: true, required: false
  private _icmpToIcmpv6?: number; 
  public get icmpToIcmpv6() {
    return this.getNumberAttribute('icmp_to_icmpv6');
  }
  public set icmpToIcmpv6(value: number) {
    this._icmpToIcmpv6 = value;
  }
  public resetIcmpToIcmpv6() {
    this._icmpToIcmpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpToIcmpv6Input() {
    return this._icmpToIcmpv6;
  }

  // icmp_to_icmpv6_error - computed: false, optional: true, required: false
  private _icmpToIcmpv6Error?: number; 
  public get icmpToIcmpv6Error() {
    return this.getNumberAttribute('icmp_to_icmpv6_error');
  }
  public set icmpToIcmpv6Error(value: number) {
    this._icmpToIcmpv6Error = value;
  }
  public resetIcmpToIcmpv6Error() {
    this._icmpToIcmpv6Error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpToIcmpv6ErrorInput() {
    return this._icmpToIcmpv6Error;
  }

  // icmpv6_to_icmp - computed: false, optional: true, required: false
  private _icmpv6ToIcmp?: number; 
  public get icmpv6ToIcmp() {
    return this.getNumberAttribute('icmpv6_to_icmp');
  }
  public set icmpv6ToIcmp(value: number) {
    this._icmpv6ToIcmp = value;
  }
  public resetIcmpv6ToIcmp() {
    this._icmpv6ToIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6ToIcmpInput() {
    return this._icmpv6ToIcmp;
  }

  // icmpv6_to_icmp_error - computed: false, optional: true, required: false
  private _icmpv6ToIcmpError?: number; 
  public get icmpv6ToIcmpError() {
    return this.getNumberAttribute('icmpv6_to_icmp_error');
  }
  public set icmpv6ToIcmpError(value: number) {
    this._icmpv6ToIcmpError = value;
  }
  public resetIcmpv6ToIcmpError() {
    this._icmpv6ToIcmpError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6ToIcmpErrorInput() {
    return this._icmpv6ToIcmpError;
  }

  // inbound_ipv4_fragmented - computed: false, optional: true, required: false
  private _inboundIpv4Fragmented?: number; 
  public get inboundIpv4Fragmented() {
    return this.getNumberAttribute('inbound_ipv4_fragmented');
  }
  public set inboundIpv4Fragmented(value: number) {
    this._inboundIpv4Fragmented = value;
  }
  public resetInboundIpv4Fragmented() {
    this._inboundIpv4Fragmented = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundIpv4FragmentedInput() {
    return this._inboundIpv4Fragmented;
  }

  // inbound_ipv4_unreachable - computed: false, optional: true, required: false
  private _inboundIpv4Unreachable?: number; 
  public get inboundIpv4Unreachable() {
    return this.getNumberAttribute('inbound_ipv4_unreachable');
  }
  public set inboundIpv4Unreachable(value: number) {
    this._inboundIpv4Unreachable = value;
  }
  public resetInboundIpv4Unreachable() {
    this._inboundIpv4Unreachable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundIpv4UnreachableInput() {
    return this._inboundIpv4Unreachable;
  }

  // inbound_ipv6_drop - computed: false, optional: true, required: false
  private _inboundIpv6Drop?: number; 
  public get inboundIpv6Drop() {
    return this.getNumberAttribute('inbound_ipv6_drop');
  }
  public set inboundIpv6Drop(value: number) {
    this._inboundIpv6Drop = value;
  }
  public resetInboundIpv6Drop() {
    this._inboundIpv6Drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundIpv6DropInput() {
    return this._inboundIpv6Drop;
  }

  // inbound_ipv6_fragment_received - computed: false, optional: true, required: false
  private _inboundIpv6FragmentReceived?: number; 
  public get inboundIpv6FragmentReceived() {
    return this.getNumberAttribute('inbound_ipv6_fragment_received');
  }
  public set inboundIpv6FragmentReceived(value: number) {
    this._inboundIpv6FragmentReceived = value;
  }
  public resetInboundIpv6FragmentReceived() {
    this._inboundIpv6FragmentReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundIpv6FragmentReceivedInput() {
    return this._inboundIpv6FragmentReceived;
  }

  // inbound_ipv6_received - computed: false, optional: true, required: false
  private _inboundIpv6Received?: number; 
  public get inboundIpv6Received() {
    return this.getNumberAttribute('inbound_ipv6_received');
  }
  public set inboundIpv6Received(value: number) {
    this._inboundIpv6Received = value;
  }
  public resetInboundIpv6Received() {
    this._inboundIpv6Received = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inboundIpv6ReceivedInput() {
    return this._inboundIpv6Received;
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

  // outbound_ipv4_drop - computed: false, optional: true, required: false
  private _outboundIpv4Drop?: number; 
  public get outboundIpv4Drop() {
    return this.getNumberAttribute('outbound_ipv4_drop');
  }
  public set outboundIpv4Drop(value: number) {
    this._outboundIpv4Drop = value;
  }
  public resetOutboundIpv4Drop() {
    this._outboundIpv4Drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundIpv4DropInput() {
    return this._outboundIpv4Drop;
  }

  // outbound_ipv4_fragment_received - computed: false, optional: true, required: false
  private _outboundIpv4FragmentReceived?: number; 
  public get outboundIpv4FragmentReceived() {
    return this.getNumberAttribute('outbound_ipv4_fragment_received');
  }
  public set outboundIpv4FragmentReceived(value: number) {
    this._outboundIpv4FragmentReceived = value;
  }
  public resetOutboundIpv4FragmentReceived() {
    this._outboundIpv4FragmentReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundIpv4FragmentReceivedInput() {
    return this._outboundIpv4FragmentReceived;
  }

  // outbound_ipv4_received - computed: false, optional: true, required: false
  private _outboundIpv4Received?: number; 
  public get outboundIpv4Received() {
    return this.getNumberAttribute('outbound_ipv4_received');
  }
  public set outboundIpv4Received(value: number) {
    this._outboundIpv4Received = value;
  }
  public resetOutboundIpv4Received() {
    this._outboundIpv4Received = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundIpv4ReceivedInput() {
    return this._outboundIpv4Received;
  }

  // outbound_ipv6_fragmented - computed: false, optional: true, required: false
  private _outboundIpv6Fragmented?: number; 
  public get outboundIpv6Fragmented() {
    return this.getNumberAttribute('outbound_ipv6_fragmented');
  }
  public set outboundIpv6Fragmented(value: number) {
    this._outboundIpv6Fragmented = value;
  }
  public resetOutboundIpv6Fragmented() {
    this._outboundIpv6Fragmented = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundIpv6FragmentedInput() {
    return this._outboundIpv6Fragmented;
  }

  // outbound_ipv6_unreachable - computed: false, optional: true, required: false
  private _outboundIpv6Unreachable?: number; 
  public get outboundIpv6Unreachable() {
    return this.getNumberAttribute('outbound_ipv6_unreachable');
  }
  public set outboundIpv6Unreachable(value: number) {
    this._outboundIpv6Unreachable = value;
  }
  public resetOutboundIpv6Unreachable() {
    this._outboundIpv6Unreachable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundIpv6UnreachableInput() {
    return this._outboundIpv6Unreachable;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat46_stateless_global_stats thunder_cgnv6_nat46_stateless_global_stats}
*/
export class DataThunderCgnv6Nat46StatelessGlobalStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_nat46_stateless_global_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6Nat46StatelessGlobalStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6Nat46StatelessGlobalStats to import
  * @param importFromId The id of the existing DataThunderCgnv6Nat46StatelessGlobalStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat46_stateless_global_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6Nat46StatelessGlobalStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_nat46_stateless_global_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat46_stateless_global_stats thunder_cgnv6_nat46_stateless_global_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6Nat46StatelessGlobalStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6Nat46StatelessGlobalStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_nat46_stateless_global_stats',
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
  private _stats = new DataThunderCgnv6Nat46StatelessGlobalStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6Nat46StatelessGlobalStatsStats) {
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
      stats: dataThunderCgnv6Nat46StatelessGlobalStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderCgnv6Nat46StatelessGlobalStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6Nat46StatelessGlobalStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
