// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_l4_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6L4StatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_l4_stats#id DataThunderCgnv6L4Stats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_l4_stats#stats DataThunderCgnv6L4Stats#stats}
  */
  readonly stats?: DataThunderCgnv6L4StatsStats;
}
export interface DataThunderCgnv6L4StatsStats {
  /**
  * ICMP Administratively Filtered Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_l4_stats#icmp_filtered_sent DataThunderCgnv6L4Stats#icmp_filtered_sent}
  */
  readonly icmpFilteredSent?: number;
  /**
  * ICMP Host Unreachable Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_l4_stats#icmp_host_unreachable_sent DataThunderCgnv6L4Stats#icmp_host_unreachable_sent}
  */
  readonly icmpHostUnreachableSent?: number;
  /**
  * ICMP Reply No Session Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_l4_stats#icmp_reply_no_session_drop DataThunderCgnv6L4Stats#icmp_reply_no_session_drop}
  */
  readonly icmpReplyNoSessionDrop?: number;
  /**
  * IPv4 Destination Not Valid Unicast
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_l4_stats#ip_dst_invalid_unicast DataThunderCgnv6L4Stats#ip_dst_invalid_unicast}
  */
  readonly ipDstInvalidUnicast?: number;
  /**
  * IPv4 Source Not Valid Unicast
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_l4_stats#ip_src_invalid_unicast DataThunderCgnv6L4Stats#ip_src_invalid_unicast}
  */
  readonly ipSrcInvalidUnicast?: number;
  /**
  * IPIP ICMP Echo Reply Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_l4_stats#ipip_icmp_reply_sent DataThunderCgnv6L4Stats#ipip_icmp_reply_sent}
  */
  readonly ipipIcmpReplySent?: number;
  /**
  * IPIP Truncated Packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_l4_stats#ipip_truncated DataThunderCgnv6L4Stats#ipip_truncated}
  */
  readonly ipipTruncated?: number;
  /**
  * IPv6 Destination Not Valid Unicast
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_l4_stats#ipv6_dst_invalid_unicast DataThunderCgnv6L4Stats#ipv6_dst_invalid_unicast}
  */
  readonly ipv6DstInvalidUnicast?: number;
  /**
  * IPv6 Source Not Valid Unicast
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_l4_stats#ipv6_src_invalid_unicast DataThunderCgnv6L4Stats#ipv6_src_invalid_unicast}
  */
  readonly ipv6SrcInvalidUnicast?: number;
  /**
  * No Forward Route for Session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_l4_stats#no_fwd_route DataThunderCgnv6L4Stats#no_fwd_route}
  */
  readonly noFwdRoute?: number;
  /**
  * No Reverse Route for Session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_l4_stats#no_rev_route DataThunderCgnv6L4Stats#no_rev_route}
  */
  readonly noRevRoute?: number;
  /**
  * Out of Session Memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_l4_stats#out_of_session_memory DataThunderCgnv6L4Stats#out_of_session_memory}
  */
  readonly outOfSessionMemory?: number;
  /**
  * Rate Drop reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_l4_stats#rate_drop_reset_unkn DataThunderCgnv6L4Stats#rate_drop_reset_unkn}
  */
  readonly rateDropResetUnkn?: number;
  /**
  * TCP RST Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_l4_stats#tcp_rst_sent DataThunderCgnv6L4Stats#tcp_rst_sent}
  */
  readonly tcpRstSent?: number;
}

export function dataThunderCgnv6L4StatsStatsToTerraform(struct?: DataThunderCgnv6L4StatsStatsOutputReference | DataThunderCgnv6L4StatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp_filtered_sent: cdktf.numberToTerraform(struct!.icmpFilteredSent),
    icmp_host_unreachable_sent: cdktf.numberToTerraform(struct!.icmpHostUnreachableSent),
    icmp_reply_no_session_drop: cdktf.numberToTerraform(struct!.icmpReplyNoSessionDrop),
    ip_dst_invalid_unicast: cdktf.numberToTerraform(struct!.ipDstInvalidUnicast),
    ip_src_invalid_unicast: cdktf.numberToTerraform(struct!.ipSrcInvalidUnicast),
    ipip_icmp_reply_sent: cdktf.numberToTerraform(struct!.ipipIcmpReplySent),
    ipip_truncated: cdktf.numberToTerraform(struct!.ipipTruncated),
    ipv6_dst_invalid_unicast: cdktf.numberToTerraform(struct!.ipv6DstInvalidUnicast),
    ipv6_src_invalid_unicast: cdktf.numberToTerraform(struct!.ipv6SrcInvalidUnicast),
    no_fwd_route: cdktf.numberToTerraform(struct!.noFwdRoute),
    no_rev_route: cdktf.numberToTerraform(struct!.noRevRoute),
    out_of_session_memory: cdktf.numberToTerraform(struct!.outOfSessionMemory),
    rate_drop_reset_unkn: cdktf.numberToTerraform(struct!.rateDropResetUnkn),
    tcp_rst_sent: cdktf.numberToTerraform(struct!.tcpRstSent),
  }
}


export function dataThunderCgnv6L4StatsStatsToHclTerraform(struct?: DataThunderCgnv6L4StatsStatsOutputReference | DataThunderCgnv6L4StatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp_filtered_sent: {
      value: cdktf.numberToHclTerraform(struct!.icmpFilteredSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_host_unreachable_sent: {
      value: cdktf.numberToHclTerraform(struct!.icmpHostUnreachableSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_reply_no_session_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmpReplyNoSessionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_dst_invalid_unicast: {
      value: cdktf.numberToHclTerraform(struct!.ipDstInvalidUnicast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_src_invalid_unicast: {
      value: cdktf.numberToHclTerraform(struct!.ipSrcInvalidUnicast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipip_icmp_reply_sent: {
      value: cdktf.numberToHclTerraform(struct!.ipipIcmpReplySent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipip_truncated: {
      value: cdktf.numberToHclTerraform(struct!.ipipTruncated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_dst_invalid_unicast: {
      value: cdktf.numberToHclTerraform(struct!.ipv6DstInvalidUnicast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_src_invalid_unicast: {
      value: cdktf.numberToHclTerraform(struct!.ipv6SrcInvalidUnicast),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_fwd_route: {
      value: cdktf.numberToHclTerraform(struct!.noFwdRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_rev_route: {
      value: cdktf.numberToHclTerraform(struct!.noRevRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_of_session_memory: {
      value: cdktf.numberToHclTerraform(struct!.outOfSessionMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate_drop_reset_unkn: {
      value: cdktf.numberToHclTerraform(struct!.rateDropResetUnkn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_rst_sent: {
      value: cdktf.numberToHclTerraform(struct!.tcpRstSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6L4StatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6L4StatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmpFilteredSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpFilteredSent = this._icmpFilteredSent;
    }
    if (this._icmpHostUnreachableSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpHostUnreachableSent = this._icmpHostUnreachableSent;
    }
    if (this._icmpReplyNoSessionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpReplyNoSessionDrop = this._icmpReplyNoSessionDrop;
    }
    if (this._ipDstInvalidUnicast !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipDstInvalidUnicast = this._ipDstInvalidUnicast;
    }
    if (this._ipSrcInvalidUnicast !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSrcInvalidUnicast = this._ipSrcInvalidUnicast;
    }
    if (this._ipipIcmpReplySent !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipipIcmpReplySent = this._ipipIcmpReplySent;
    }
    if (this._ipipTruncated !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipipTruncated = this._ipipTruncated;
    }
    if (this._ipv6DstInvalidUnicast !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6DstInvalidUnicast = this._ipv6DstInvalidUnicast;
    }
    if (this._ipv6SrcInvalidUnicast !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6SrcInvalidUnicast = this._ipv6SrcInvalidUnicast;
    }
    if (this._noFwdRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.noFwdRoute = this._noFwdRoute;
    }
    if (this._noRevRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRevRoute = this._noRevRoute;
    }
    if (this._outOfSessionMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.outOfSessionMemory = this._outOfSessionMemory;
    }
    if (this._rateDropResetUnkn !== undefined) {
      hasAnyValues = true;
      internalValueResult.rateDropResetUnkn = this._rateDropResetUnkn;
    }
    if (this._tcpRstSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpRstSent = this._tcpRstSent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6L4StatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._icmpFilteredSent = undefined;
      this._icmpHostUnreachableSent = undefined;
      this._icmpReplyNoSessionDrop = undefined;
      this._ipDstInvalidUnicast = undefined;
      this._ipSrcInvalidUnicast = undefined;
      this._ipipIcmpReplySent = undefined;
      this._ipipTruncated = undefined;
      this._ipv6DstInvalidUnicast = undefined;
      this._ipv6SrcInvalidUnicast = undefined;
      this._noFwdRoute = undefined;
      this._noRevRoute = undefined;
      this._outOfSessionMemory = undefined;
      this._rateDropResetUnkn = undefined;
      this._tcpRstSent = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._icmpFilteredSent = value.icmpFilteredSent;
      this._icmpHostUnreachableSent = value.icmpHostUnreachableSent;
      this._icmpReplyNoSessionDrop = value.icmpReplyNoSessionDrop;
      this._ipDstInvalidUnicast = value.ipDstInvalidUnicast;
      this._ipSrcInvalidUnicast = value.ipSrcInvalidUnicast;
      this._ipipIcmpReplySent = value.ipipIcmpReplySent;
      this._ipipTruncated = value.ipipTruncated;
      this._ipv6DstInvalidUnicast = value.ipv6DstInvalidUnicast;
      this._ipv6SrcInvalidUnicast = value.ipv6SrcInvalidUnicast;
      this._noFwdRoute = value.noFwdRoute;
      this._noRevRoute = value.noRevRoute;
      this._outOfSessionMemory = value.outOfSessionMemory;
      this._rateDropResetUnkn = value.rateDropResetUnkn;
      this._tcpRstSent = value.tcpRstSent;
    }
  }

  // icmp_filtered_sent - computed: false, optional: true, required: false
  private _icmpFilteredSent?: number; 
  public get icmpFilteredSent() {
    return this.getNumberAttribute('icmp_filtered_sent');
  }
  public set icmpFilteredSent(value: number) {
    this._icmpFilteredSent = value;
  }
  public resetIcmpFilteredSent() {
    this._icmpFilteredSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpFilteredSentInput() {
    return this._icmpFilteredSent;
  }

  // icmp_host_unreachable_sent - computed: false, optional: true, required: false
  private _icmpHostUnreachableSent?: number; 
  public get icmpHostUnreachableSent() {
    return this.getNumberAttribute('icmp_host_unreachable_sent');
  }
  public set icmpHostUnreachableSent(value: number) {
    this._icmpHostUnreachableSent = value;
  }
  public resetIcmpHostUnreachableSent() {
    this._icmpHostUnreachableSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpHostUnreachableSentInput() {
    return this._icmpHostUnreachableSent;
  }

  // icmp_reply_no_session_drop - computed: false, optional: true, required: false
  private _icmpReplyNoSessionDrop?: number; 
  public get icmpReplyNoSessionDrop() {
    return this.getNumberAttribute('icmp_reply_no_session_drop');
  }
  public set icmpReplyNoSessionDrop(value: number) {
    this._icmpReplyNoSessionDrop = value;
  }
  public resetIcmpReplyNoSessionDrop() {
    this._icmpReplyNoSessionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpReplyNoSessionDropInput() {
    return this._icmpReplyNoSessionDrop;
  }

  // ip_dst_invalid_unicast - computed: false, optional: true, required: false
  private _ipDstInvalidUnicast?: number; 
  public get ipDstInvalidUnicast() {
    return this.getNumberAttribute('ip_dst_invalid_unicast');
  }
  public set ipDstInvalidUnicast(value: number) {
    this._ipDstInvalidUnicast = value;
  }
  public resetIpDstInvalidUnicast() {
    this._ipDstInvalidUnicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipDstInvalidUnicastInput() {
    return this._ipDstInvalidUnicast;
  }

  // ip_src_invalid_unicast - computed: false, optional: true, required: false
  private _ipSrcInvalidUnicast?: number; 
  public get ipSrcInvalidUnicast() {
    return this.getNumberAttribute('ip_src_invalid_unicast');
  }
  public set ipSrcInvalidUnicast(value: number) {
    this._ipSrcInvalidUnicast = value;
  }
  public resetIpSrcInvalidUnicast() {
    this._ipSrcInvalidUnicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSrcInvalidUnicastInput() {
    return this._ipSrcInvalidUnicast;
  }

  // ipip_icmp_reply_sent - computed: false, optional: true, required: false
  private _ipipIcmpReplySent?: number; 
  public get ipipIcmpReplySent() {
    return this.getNumberAttribute('ipip_icmp_reply_sent');
  }
  public set ipipIcmpReplySent(value: number) {
    this._ipipIcmpReplySent = value;
  }
  public resetIpipIcmpReplySent() {
    this._ipipIcmpReplySent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipipIcmpReplySentInput() {
    return this._ipipIcmpReplySent;
  }

  // ipip_truncated - computed: false, optional: true, required: false
  private _ipipTruncated?: number; 
  public get ipipTruncated() {
    return this.getNumberAttribute('ipip_truncated');
  }
  public set ipipTruncated(value: number) {
    this._ipipTruncated = value;
  }
  public resetIpipTruncated() {
    this._ipipTruncated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipipTruncatedInput() {
    return this._ipipTruncated;
  }

  // ipv6_dst_invalid_unicast - computed: false, optional: true, required: false
  private _ipv6DstInvalidUnicast?: number; 
  public get ipv6DstInvalidUnicast() {
    return this.getNumberAttribute('ipv6_dst_invalid_unicast');
  }
  public set ipv6DstInvalidUnicast(value: number) {
    this._ipv6DstInvalidUnicast = value;
  }
  public resetIpv6DstInvalidUnicast() {
    this._ipv6DstInvalidUnicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DstInvalidUnicastInput() {
    return this._ipv6DstInvalidUnicast;
  }

  // ipv6_src_invalid_unicast - computed: false, optional: true, required: false
  private _ipv6SrcInvalidUnicast?: number; 
  public get ipv6SrcInvalidUnicast() {
    return this.getNumberAttribute('ipv6_src_invalid_unicast');
  }
  public set ipv6SrcInvalidUnicast(value: number) {
    this._ipv6SrcInvalidUnicast = value;
  }
  public resetIpv6SrcInvalidUnicast() {
    this._ipv6SrcInvalidUnicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SrcInvalidUnicastInput() {
    return this._ipv6SrcInvalidUnicast;
  }

  // no_fwd_route - computed: false, optional: true, required: false
  private _noFwdRoute?: number; 
  public get noFwdRoute() {
    return this.getNumberAttribute('no_fwd_route');
  }
  public set noFwdRoute(value: number) {
    this._noFwdRoute = value;
  }
  public resetNoFwdRoute() {
    this._noFwdRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noFwdRouteInput() {
    return this._noFwdRoute;
  }

  // no_rev_route - computed: false, optional: true, required: false
  private _noRevRoute?: number; 
  public get noRevRoute() {
    return this.getNumberAttribute('no_rev_route');
  }
  public set noRevRoute(value: number) {
    this._noRevRoute = value;
  }
  public resetNoRevRoute() {
    this._noRevRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRevRouteInput() {
    return this._noRevRoute;
  }

  // out_of_session_memory - computed: false, optional: true, required: false
  private _outOfSessionMemory?: number; 
  public get outOfSessionMemory() {
    return this.getNumberAttribute('out_of_session_memory');
  }
  public set outOfSessionMemory(value: number) {
    this._outOfSessionMemory = value;
  }
  public resetOutOfSessionMemory() {
    this._outOfSessionMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfSessionMemoryInput() {
    return this._outOfSessionMemory;
  }

  // rate_drop_reset_unkn - computed: false, optional: true, required: false
  private _rateDropResetUnkn?: number; 
  public get rateDropResetUnkn() {
    return this.getNumberAttribute('rate_drop_reset_unkn');
  }
  public set rateDropResetUnkn(value: number) {
    this._rateDropResetUnkn = value;
  }
  public resetRateDropResetUnkn() {
    this._rateDropResetUnkn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateDropResetUnknInput() {
    return this._rateDropResetUnkn;
  }

  // tcp_rst_sent - computed: false, optional: true, required: false
  private _tcpRstSent?: number; 
  public get tcpRstSent() {
    return this.getNumberAttribute('tcp_rst_sent');
  }
  public set tcpRstSent(value: number) {
    this._tcpRstSent = value;
  }
  public resetTcpRstSent() {
    this._tcpRstSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpRstSentInput() {
    return this._tcpRstSent;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_l4_stats thunder_cgnv6_l4_stats}
*/
export class DataThunderCgnv6L4Stats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_l4_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6L4Stats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6L4Stats to import
  * @param importFromId The id of the existing DataThunderCgnv6L4Stats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_l4_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6L4Stats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_l4_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/cgnv6_l4_stats thunder_cgnv6_l4_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6L4StatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6L4StatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_l4_stats',
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
  private _stats = new DataThunderCgnv6L4StatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6L4StatsStats) {
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
      stats: dataThunderCgnv6L4StatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderCgnv6L4StatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6L4StatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
