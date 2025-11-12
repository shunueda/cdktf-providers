// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemIcmp6StatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#id DataThunderSystemIcmp6Stats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#stats DataThunderSystemIcmp6Stats#stats}
  */
  readonly stats?: DataThunderSystemIcmp6StatsStats;
}
export interface DataThunderSystemIcmp6StatsStats {
  /**
  * Error Echo replies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#err_echo_replies DataThunderSystemIcmp6Stats#err_echo_replies}
  */
  readonly errEchoReplies?: number;
  /**
  * Error Echo requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#err_echoes DataThunderSystemIcmp6Stats#err_echoes}
  */
  readonly errEchoes?: number;
  /**
  * Error Neighbor advertisement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#err_na DataThunderSystemIcmp6Stats#err_na}
  */
  readonly errNa?: number;
  /**
  * Error Neighbor solicitation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#err_ns DataThunderSystemIcmp6Stats#err_ns}
  */
  readonly errNs?: number;
  /**
  * Error Router advertisement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#err_ra DataThunderSystemIcmp6Stats#err_ra}
  */
  readonly errRa?: number;
  /**
  * Error Redirects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#err_redirects DataThunderSystemIcmp6Stats#err_redirects}
  */
  readonly errRedirects?: number;
  /**
  * Error Router solicitation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#err_rs DataThunderSystemIcmp6Stats#err_rs}
  */
  readonly errRs?: number;
  /**
  * In Destunation Unreachable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#in_dest_un_reach DataThunderSystemIcmp6Stats#in_dest_un_reach}
  */
  readonly inDestUnReach?: number;
  /**
  * In Echo requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#in_echoes DataThunderSystemIcmp6Stats#in_echoes}
  */
  readonly inEchoes?: number;
  /**
  * In Errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#in_errors DataThunderSystemIcmp6Stats#in_errors}
  */
  readonly inErrors?: number;
  /**
  * In Echo replies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#in_exho_reply DataThunderSystemIcmp6Stats#in_exho_reply}
  */
  readonly inExhoReply?: number;
  /**
  * In Group member query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#in_grp_mem_query DataThunderSystemIcmp6Stats#in_grp_mem_query}
  */
  readonly inGrpMemQuery?: number;
  /**
  * In Group member reduction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#in_grp_mem_reduction DataThunderSystemIcmp6Stats#in_grp_mem_reduction}
  */
  readonly inGrpMemReduction?: number;
  /**
  * In Group member reply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#in_grp_mem_resp DataThunderSystemIcmp6Stats#in_grp_mem_resp}
  */
  readonly inGrpMemResp?: number;
  /**
  * In messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#in_msgs DataThunderSystemIcmp6Stats#in_msgs}
  */
  readonly inMsgs?: number;
  /**
  * In neighbor advertisement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#in_na DataThunderSystemIcmp6Stats#in_na}
  */
  readonly inNa?: number;
  /**
  * In neighbor solicitation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#in_ns DataThunderSystemIcmp6Stats#in_ns}
  */
  readonly inNs?: number;
  /**
  * In Parameter Problem
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#in_param_prob DataThunderSystemIcmp6Stats#in_param_prob}
  */
  readonly inParamProb?: number;
  /**
  * In Packet too big
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#in_pkt_too_big DataThunderSystemIcmp6Stats#in_pkt_too_big}
  */
  readonly inPktTooBig?: number;
  /**
  * In Router advertisement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#in_ra DataThunderSystemIcmp6Stats#in_ra}
  */
  readonly inRa?: number;
  /**
  * In Redirects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#in_redirect DataThunderSystemIcmp6Stats#in_redirect}
  */
  readonly inRedirect?: number;
  /**
  * In Router solicitation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#in_router_sol DataThunderSystemIcmp6Stats#in_router_sol}
  */
  readonly inRouterSol?: number;
  /**
  * In TTL Exceeds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#in_time_exceeds DataThunderSystemIcmp6Stats#in_time_exceeds}
  */
  readonly inTimeExceeds?: number;
  /**
  * Out Destination Unreachable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#out_dst_un_reach DataThunderSystemIcmp6Stats#out_dst_un_reach}
  */
  readonly outDstUnReach?: number;
  /**
  * Out Echo replies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#out_echo_replies DataThunderSystemIcmp6Stats#out_echo_replies}
  */
  readonly outEchoReplies?: number;
  /**
  * Out Echo requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#out_echo_req DataThunderSystemIcmp6Stats#out_echo_req}
  */
  readonly outEchoReq?: number;
  /**
  * Out Group member reduction
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#out_mem_reductions DataThunderSystemIcmp6Stats#out_mem_reductions}
  */
  readonly outMemReductions?: number;
  /**
  * Out Group member reply
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#out_mem_resp DataThunderSystemIcmp6Stats#out_mem_resp}
  */
  readonly outMemResp?: number;
  /**
  * Out Messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#out_msg DataThunderSystemIcmp6Stats#out_msg}
  */
  readonly outMsg?: number;
  /**
  * Out neighbor advertisement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#out_na DataThunderSystemIcmp6Stats#out_na}
  */
  readonly outNa?: number;
  /**
  * Out neighbor solicitation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#out_ns DataThunderSystemIcmp6Stats#out_ns}
  */
  readonly outNs?: number;
  /**
  * Out Parameter Problem
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#out_param_prob DataThunderSystemIcmp6Stats#out_param_prob}
  */
  readonly outParamProb?: number;
  /**
  * Out Packet too big
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#out_pkt_too_big DataThunderSystemIcmp6Stats#out_pkt_too_big}
  */
  readonly outPktTooBig?: number;
  /**
  * Out Router advertisement
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#out_ra DataThunderSystemIcmp6Stats#out_ra}
  */
  readonly outRa?: number;
  /**
  * Out Redirects
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#out_redirects DataThunderSystemIcmp6Stats#out_redirects}
  */
  readonly outRedirects?: number;
  /**
  * Out Router solicitation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#out_rs DataThunderSystemIcmp6Stats#out_rs}
  */
  readonly outRs?: number;
  /**
  * Out TTL Exceeds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#out_time_exceeds DataThunderSystemIcmp6Stats#out_time_exceeds}
  */
  readonly outTimeExceeds?: number;
}

export function dataThunderSystemIcmp6StatsStatsToTerraform(struct?: DataThunderSystemIcmp6StatsStatsOutputReference | DataThunderSystemIcmp6StatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    err_echo_replies: cdktf.numberToTerraform(struct!.errEchoReplies),
    err_echoes: cdktf.numberToTerraform(struct!.errEchoes),
    err_na: cdktf.numberToTerraform(struct!.errNa),
    err_ns: cdktf.numberToTerraform(struct!.errNs),
    err_ra: cdktf.numberToTerraform(struct!.errRa),
    err_redirects: cdktf.numberToTerraform(struct!.errRedirects),
    err_rs: cdktf.numberToTerraform(struct!.errRs),
    in_dest_un_reach: cdktf.numberToTerraform(struct!.inDestUnReach),
    in_echoes: cdktf.numberToTerraform(struct!.inEchoes),
    in_errors: cdktf.numberToTerraform(struct!.inErrors),
    in_exho_reply: cdktf.numberToTerraform(struct!.inExhoReply),
    in_grp_mem_query: cdktf.numberToTerraform(struct!.inGrpMemQuery),
    in_grp_mem_reduction: cdktf.numberToTerraform(struct!.inGrpMemReduction),
    in_grp_mem_resp: cdktf.numberToTerraform(struct!.inGrpMemResp),
    in_msgs: cdktf.numberToTerraform(struct!.inMsgs),
    in_na: cdktf.numberToTerraform(struct!.inNa),
    in_ns: cdktf.numberToTerraform(struct!.inNs),
    in_param_prob: cdktf.numberToTerraform(struct!.inParamProb),
    in_pkt_too_big: cdktf.numberToTerraform(struct!.inPktTooBig),
    in_ra: cdktf.numberToTerraform(struct!.inRa),
    in_redirect: cdktf.numberToTerraform(struct!.inRedirect),
    in_router_sol: cdktf.numberToTerraform(struct!.inRouterSol),
    in_time_exceeds: cdktf.numberToTerraform(struct!.inTimeExceeds),
    out_dst_un_reach: cdktf.numberToTerraform(struct!.outDstUnReach),
    out_echo_replies: cdktf.numberToTerraform(struct!.outEchoReplies),
    out_echo_req: cdktf.numberToTerraform(struct!.outEchoReq),
    out_mem_reductions: cdktf.numberToTerraform(struct!.outMemReductions),
    out_mem_resp: cdktf.numberToTerraform(struct!.outMemResp),
    out_msg: cdktf.numberToTerraform(struct!.outMsg),
    out_na: cdktf.numberToTerraform(struct!.outNa),
    out_ns: cdktf.numberToTerraform(struct!.outNs),
    out_param_prob: cdktf.numberToTerraform(struct!.outParamProb),
    out_pkt_too_big: cdktf.numberToTerraform(struct!.outPktTooBig),
    out_ra: cdktf.numberToTerraform(struct!.outRa),
    out_redirects: cdktf.numberToTerraform(struct!.outRedirects),
    out_rs: cdktf.numberToTerraform(struct!.outRs),
    out_time_exceeds: cdktf.numberToTerraform(struct!.outTimeExceeds),
  }
}


export function dataThunderSystemIcmp6StatsStatsToHclTerraform(struct?: DataThunderSystemIcmp6StatsStatsOutputReference | DataThunderSystemIcmp6StatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    err_echo_replies: {
      value: cdktf.numberToHclTerraform(struct!.errEchoReplies),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_echoes: {
      value: cdktf.numberToHclTerraform(struct!.errEchoes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_na: {
      value: cdktf.numberToHclTerraform(struct!.errNa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_ns: {
      value: cdktf.numberToHclTerraform(struct!.errNs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_ra: {
      value: cdktf.numberToHclTerraform(struct!.errRa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_redirects: {
      value: cdktf.numberToHclTerraform(struct!.errRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_rs: {
      value: cdktf.numberToHclTerraform(struct!.errRs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_dest_un_reach: {
      value: cdktf.numberToHclTerraform(struct!.inDestUnReach),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_echoes: {
      value: cdktf.numberToHclTerraform(struct!.inEchoes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_errors: {
      value: cdktf.numberToHclTerraform(struct!.inErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_exho_reply: {
      value: cdktf.numberToHclTerraform(struct!.inExhoReply),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_grp_mem_query: {
      value: cdktf.numberToHclTerraform(struct!.inGrpMemQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_grp_mem_reduction: {
      value: cdktf.numberToHclTerraform(struct!.inGrpMemReduction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_grp_mem_resp: {
      value: cdktf.numberToHclTerraform(struct!.inGrpMemResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_msgs: {
      value: cdktf.numberToHclTerraform(struct!.inMsgs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_na: {
      value: cdktf.numberToHclTerraform(struct!.inNa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_ns: {
      value: cdktf.numberToHclTerraform(struct!.inNs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_param_prob: {
      value: cdktf.numberToHclTerraform(struct!.inParamProb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_pkt_too_big: {
      value: cdktf.numberToHclTerraform(struct!.inPktTooBig),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_ra: {
      value: cdktf.numberToHclTerraform(struct!.inRa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_redirect: {
      value: cdktf.numberToHclTerraform(struct!.inRedirect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_router_sol: {
      value: cdktf.numberToHclTerraform(struct!.inRouterSol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    in_time_exceeds: {
      value: cdktf.numberToHclTerraform(struct!.inTimeExceeds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_dst_un_reach: {
      value: cdktf.numberToHclTerraform(struct!.outDstUnReach),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_echo_replies: {
      value: cdktf.numberToHclTerraform(struct!.outEchoReplies),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_echo_req: {
      value: cdktf.numberToHclTerraform(struct!.outEchoReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_mem_reductions: {
      value: cdktf.numberToHclTerraform(struct!.outMemReductions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_mem_resp: {
      value: cdktf.numberToHclTerraform(struct!.outMemResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_msg: {
      value: cdktf.numberToHclTerraform(struct!.outMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_na: {
      value: cdktf.numberToHclTerraform(struct!.outNa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_ns: {
      value: cdktf.numberToHclTerraform(struct!.outNs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_param_prob: {
      value: cdktf.numberToHclTerraform(struct!.outParamProb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_pkt_too_big: {
      value: cdktf.numberToHclTerraform(struct!.outPktTooBig),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_ra: {
      value: cdktf.numberToHclTerraform(struct!.outRa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_redirects: {
      value: cdktf.numberToHclTerraform(struct!.outRedirects),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_rs: {
      value: cdktf.numberToHclTerraform(struct!.outRs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_time_exceeds: {
      value: cdktf.numberToHclTerraform(struct!.outTimeExceeds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemIcmp6StatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemIcmp6StatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._errEchoReplies !== undefined) {
      hasAnyValues = true;
      internalValueResult.errEchoReplies = this._errEchoReplies;
    }
    if (this._errEchoes !== undefined) {
      hasAnyValues = true;
      internalValueResult.errEchoes = this._errEchoes;
    }
    if (this._errNa !== undefined) {
      hasAnyValues = true;
      internalValueResult.errNa = this._errNa;
    }
    if (this._errNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.errNs = this._errNs;
    }
    if (this._errRa !== undefined) {
      hasAnyValues = true;
      internalValueResult.errRa = this._errRa;
    }
    if (this._errRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.errRedirects = this._errRedirects;
    }
    if (this._errRs !== undefined) {
      hasAnyValues = true;
      internalValueResult.errRs = this._errRs;
    }
    if (this._inDestUnReach !== undefined) {
      hasAnyValues = true;
      internalValueResult.inDestUnReach = this._inDestUnReach;
    }
    if (this._inEchoes !== undefined) {
      hasAnyValues = true;
      internalValueResult.inEchoes = this._inEchoes;
    }
    if (this._inErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.inErrors = this._inErrors;
    }
    if (this._inExhoReply !== undefined) {
      hasAnyValues = true;
      internalValueResult.inExhoReply = this._inExhoReply;
    }
    if (this._inGrpMemQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.inGrpMemQuery = this._inGrpMemQuery;
    }
    if (this._inGrpMemReduction !== undefined) {
      hasAnyValues = true;
      internalValueResult.inGrpMemReduction = this._inGrpMemReduction;
    }
    if (this._inGrpMemResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.inGrpMemResp = this._inGrpMemResp;
    }
    if (this._inMsgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inMsgs = this._inMsgs;
    }
    if (this._inNa !== undefined) {
      hasAnyValues = true;
      internalValueResult.inNa = this._inNa;
    }
    if (this._inNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.inNs = this._inNs;
    }
    if (this._inParamProb !== undefined) {
      hasAnyValues = true;
      internalValueResult.inParamProb = this._inParamProb;
    }
    if (this._inPktTooBig !== undefined) {
      hasAnyValues = true;
      internalValueResult.inPktTooBig = this._inPktTooBig;
    }
    if (this._inRa !== undefined) {
      hasAnyValues = true;
      internalValueResult.inRa = this._inRa;
    }
    if (this._inRedirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.inRedirect = this._inRedirect;
    }
    if (this._inRouterSol !== undefined) {
      hasAnyValues = true;
      internalValueResult.inRouterSol = this._inRouterSol;
    }
    if (this._inTimeExceeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.inTimeExceeds = this._inTimeExceeds;
    }
    if (this._outDstUnReach !== undefined) {
      hasAnyValues = true;
      internalValueResult.outDstUnReach = this._outDstUnReach;
    }
    if (this._outEchoReplies !== undefined) {
      hasAnyValues = true;
      internalValueResult.outEchoReplies = this._outEchoReplies;
    }
    if (this._outEchoReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.outEchoReq = this._outEchoReq;
    }
    if (this._outMemReductions !== undefined) {
      hasAnyValues = true;
      internalValueResult.outMemReductions = this._outMemReductions;
    }
    if (this._outMemResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.outMemResp = this._outMemResp;
    }
    if (this._outMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.outMsg = this._outMsg;
    }
    if (this._outNa !== undefined) {
      hasAnyValues = true;
      internalValueResult.outNa = this._outNa;
    }
    if (this._outNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.outNs = this._outNs;
    }
    if (this._outParamProb !== undefined) {
      hasAnyValues = true;
      internalValueResult.outParamProb = this._outParamProb;
    }
    if (this._outPktTooBig !== undefined) {
      hasAnyValues = true;
      internalValueResult.outPktTooBig = this._outPktTooBig;
    }
    if (this._outRa !== undefined) {
      hasAnyValues = true;
      internalValueResult.outRa = this._outRa;
    }
    if (this._outRedirects !== undefined) {
      hasAnyValues = true;
      internalValueResult.outRedirects = this._outRedirects;
    }
    if (this._outRs !== undefined) {
      hasAnyValues = true;
      internalValueResult.outRs = this._outRs;
    }
    if (this._outTimeExceeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.outTimeExceeds = this._outTimeExceeds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemIcmp6StatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._errEchoReplies = undefined;
      this._errEchoes = undefined;
      this._errNa = undefined;
      this._errNs = undefined;
      this._errRa = undefined;
      this._errRedirects = undefined;
      this._errRs = undefined;
      this._inDestUnReach = undefined;
      this._inEchoes = undefined;
      this._inErrors = undefined;
      this._inExhoReply = undefined;
      this._inGrpMemQuery = undefined;
      this._inGrpMemReduction = undefined;
      this._inGrpMemResp = undefined;
      this._inMsgs = undefined;
      this._inNa = undefined;
      this._inNs = undefined;
      this._inParamProb = undefined;
      this._inPktTooBig = undefined;
      this._inRa = undefined;
      this._inRedirect = undefined;
      this._inRouterSol = undefined;
      this._inTimeExceeds = undefined;
      this._outDstUnReach = undefined;
      this._outEchoReplies = undefined;
      this._outEchoReq = undefined;
      this._outMemReductions = undefined;
      this._outMemResp = undefined;
      this._outMsg = undefined;
      this._outNa = undefined;
      this._outNs = undefined;
      this._outParamProb = undefined;
      this._outPktTooBig = undefined;
      this._outRa = undefined;
      this._outRedirects = undefined;
      this._outRs = undefined;
      this._outTimeExceeds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._errEchoReplies = value.errEchoReplies;
      this._errEchoes = value.errEchoes;
      this._errNa = value.errNa;
      this._errNs = value.errNs;
      this._errRa = value.errRa;
      this._errRedirects = value.errRedirects;
      this._errRs = value.errRs;
      this._inDestUnReach = value.inDestUnReach;
      this._inEchoes = value.inEchoes;
      this._inErrors = value.inErrors;
      this._inExhoReply = value.inExhoReply;
      this._inGrpMemQuery = value.inGrpMemQuery;
      this._inGrpMemReduction = value.inGrpMemReduction;
      this._inGrpMemResp = value.inGrpMemResp;
      this._inMsgs = value.inMsgs;
      this._inNa = value.inNa;
      this._inNs = value.inNs;
      this._inParamProb = value.inParamProb;
      this._inPktTooBig = value.inPktTooBig;
      this._inRa = value.inRa;
      this._inRedirect = value.inRedirect;
      this._inRouterSol = value.inRouterSol;
      this._inTimeExceeds = value.inTimeExceeds;
      this._outDstUnReach = value.outDstUnReach;
      this._outEchoReplies = value.outEchoReplies;
      this._outEchoReq = value.outEchoReq;
      this._outMemReductions = value.outMemReductions;
      this._outMemResp = value.outMemResp;
      this._outMsg = value.outMsg;
      this._outNa = value.outNa;
      this._outNs = value.outNs;
      this._outParamProb = value.outParamProb;
      this._outPktTooBig = value.outPktTooBig;
      this._outRa = value.outRa;
      this._outRedirects = value.outRedirects;
      this._outRs = value.outRs;
      this._outTimeExceeds = value.outTimeExceeds;
    }
  }

  // err_echo_replies - computed: false, optional: true, required: false
  private _errEchoReplies?: number; 
  public get errEchoReplies() {
    return this.getNumberAttribute('err_echo_replies');
  }
  public set errEchoReplies(value: number) {
    this._errEchoReplies = value;
  }
  public resetErrEchoReplies() {
    this._errEchoReplies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errEchoRepliesInput() {
    return this._errEchoReplies;
  }

  // err_echoes - computed: false, optional: true, required: false
  private _errEchoes?: number; 
  public get errEchoes() {
    return this.getNumberAttribute('err_echoes');
  }
  public set errEchoes(value: number) {
    this._errEchoes = value;
  }
  public resetErrEchoes() {
    this._errEchoes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errEchoesInput() {
    return this._errEchoes;
  }

  // err_na - computed: false, optional: true, required: false
  private _errNa?: number; 
  public get errNa() {
    return this.getNumberAttribute('err_na');
  }
  public set errNa(value: number) {
    this._errNa = value;
  }
  public resetErrNa() {
    this._errNa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errNaInput() {
    return this._errNa;
  }

  // err_ns - computed: false, optional: true, required: false
  private _errNs?: number; 
  public get errNs() {
    return this.getNumberAttribute('err_ns');
  }
  public set errNs(value: number) {
    this._errNs = value;
  }
  public resetErrNs() {
    this._errNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errNsInput() {
    return this._errNs;
  }

  // err_ra - computed: false, optional: true, required: false
  private _errRa?: number; 
  public get errRa() {
    return this.getNumberAttribute('err_ra');
  }
  public set errRa(value: number) {
    this._errRa = value;
  }
  public resetErrRa() {
    this._errRa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errRaInput() {
    return this._errRa;
  }

  // err_redirects - computed: false, optional: true, required: false
  private _errRedirects?: number; 
  public get errRedirects() {
    return this.getNumberAttribute('err_redirects');
  }
  public set errRedirects(value: number) {
    this._errRedirects = value;
  }
  public resetErrRedirects() {
    this._errRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errRedirectsInput() {
    return this._errRedirects;
  }

  // err_rs - computed: false, optional: true, required: false
  private _errRs?: number; 
  public get errRs() {
    return this.getNumberAttribute('err_rs');
  }
  public set errRs(value: number) {
    this._errRs = value;
  }
  public resetErrRs() {
    this._errRs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errRsInput() {
    return this._errRs;
  }

  // in_dest_un_reach - computed: false, optional: true, required: false
  private _inDestUnReach?: number; 
  public get inDestUnReach() {
    return this.getNumberAttribute('in_dest_un_reach');
  }
  public set inDestUnReach(value: number) {
    this._inDestUnReach = value;
  }
  public resetInDestUnReach() {
    this._inDestUnReach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inDestUnReachInput() {
    return this._inDestUnReach;
  }

  // in_echoes - computed: false, optional: true, required: false
  private _inEchoes?: number; 
  public get inEchoes() {
    return this.getNumberAttribute('in_echoes');
  }
  public set inEchoes(value: number) {
    this._inEchoes = value;
  }
  public resetInEchoes() {
    this._inEchoes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inEchoesInput() {
    return this._inEchoes;
  }

  // in_errors - computed: false, optional: true, required: false
  private _inErrors?: number; 
  public get inErrors() {
    return this.getNumberAttribute('in_errors');
  }
  public set inErrors(value: number) {
    this._inErrors = value;
  }
  public resetInErrors() {
    this._inErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inErrorsInput() {
    return this._inErrors;
  }

  // in_exho_reply - computed: false, optional: true, required: false
  private _inExhoReply?: number; 
  public get inExhoReply() {
    return this.getNumberAttribute('in_exho_reply');
  }
  public set inExhoReply(value: number) {
    this._inExhoReply = value;
  }
  public resetInExhoReply() {
    this._inExhoReply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inExhoReplyInput() {
    return this._inExhoReply;
  }

  // in_grp_mem_query - computed: false, optional: true, required: false
  private _inGrpMemQuery?: number; 
  public get inGrpMemQuery() {
    return this.getNumberAttribute('in_grp_mem_query');
  }
  public set inGrpMemQuery(value: number) {
    this._inGrpMemQuery = value;
  }
  public resetInGrpMemQuery() {
    this._inGrpMemQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inGrpMemQueryInput() {
    return this._inGrpMemQuery;
  }

  // in_grp_mem_reduction - computed: false, optional: true, required: false
  private _inGrpMemReduction?: number; 
  public get inGrpMemReduction() {
    return this.getNumberAttribute('in_grp_mem_reduction');
  }
  public set inGrpMemReduction(value: number) {
    this._inGrpMemReduction = value;
  }
  public resetInGrpMemReduction() {
    this._inGrpMemReduction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inGrpMemReductionInput() {
    return this._inGrpMemReduction;
  }

  // in_grp_mem_resp - computed: false, optional: true, required: false
  private _inGrpMemResp?: number; 
  public get inGrpMemResp() {
    return this.getNumberAttribute('in_grp_mem_resp');
  }
  public set inGrpMemResp(value: number) {
    this._inGrpMemResp = value;
  }
  public resetInGrpMemResp() {
    this._inGrpMemResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inGrpMemRespInput() {
    return this._inGrpMemResp;
  }

  // in_msgs - computed: false, optional: true, required: false
  private _inMsgs?: number; 
  public get inMsgs() {
    return this.getNumberAttribute('in_msgs');
  }
  public set inMsgs(value: number) {
    this._inMsgs = value;
  }
  public resetInMsgs() {
    this._inMsgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inMsgsInput() {
    return this._inMsgs;
  }

  // in_na - computed: false, optional: true, required: false
  private _inNa?: number; 
  public get inNa() {
    return this.getNumberAttribute('in_na');
  }
  public set inNa(value: number) {
    this._inNa = value;
  }
  public resetInNa() {
    this._inNa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inNaInput() {
    return this._inNa;
  }

  // in_ns - computed: false, optional: true, required: false
  private _inNs?: number; 
  public get inNs() {
    return this.getNumberAttribute('in_ns');
  }
  public set inNs(value: number) {
    this._inNs = value;
  }
  public resetInNs() {
    this._inNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inNsInput() {
    return this._inNs;
  }

  // in_param_prob - computed: false, optional: true, required: false
  private _inParamProb?: number; 
  public get inParamProb() {
    return this.getNumberAttribute('in_param_prob');
  }
  public set inParamProb(value: number) {
    this._inParamProb = value;
  }
  public resetInParamProb() {
    this._inParamProb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inParamProbInput() {
    return this._inParamProb;
  }

  // in_pkt_too_big - computed: false, optional: true, required: false
  private _inPktTooBig?: number; 
  public get inPktTooBig() {
    return this.getNumberAttribute('in_pkt_too_big');
  }
  public set inPktTooBig(value: number) {
    this._inPktTooBig = value;
  }
  public resetInPktTooBig() {
    this._inPktTooBig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inPktTooBigInput() {
    return this._inPktTooBig;
  }

  // in_ra - computed: false, optional: true, required: false
  private _inRa?: number; 
  public get inRa() {
    return this.getNumberAttribute('in_ra');
  }
  public set inRa(value: number) {
    this._inRa = value;
  }
  public resetInRa() {
    this._inRa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inRaInput() {
    return this._inRa;
  }

  // in_redirect - computed: false, optional: true, required: false
  private _inRedirect?: number; 
  public get inRedirect() {
    return this.getNumberAttribute('in_redirect');
  }
  public set inRedirect(value: number) {
    this._inRedirect = value;
  }
  public resetInRedirect() {
    this._inRedirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inRedirectInput() {
    return this._inRedirect;
  }

  // in_router_sol - computed: false, optional: true, required: false
  private _inRouterSol?: number; 
  public get inRouterSol() {
    return this.getNumberAttribute('in_router_sol');
  }
  public set inRouterSol(value: number) {
    this._inRouterSol = value;
  }
  public resetInRouterSol() {
    this._inRouterSol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inRouterSolInput() {
    return this._inRouterSol;
  }

  // in_time_exceeds - computed: false, optional: true, required: false
  private _inTimeExceeds?: number; 
  public get inTimeExceeds() {
    return this.getNumberAttribute('in_time_exceeds');
  }
  public set inTimeExceeds(value: number) {
    this._inTimeExceeds = value;
  }
  public resetInTimeExceeds() {
    this._inTimeExceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inTimeExceedsInput() {
    return this._inTimeExceeds;
  }

  // out_dst_un_reach - computed: false, optional: true, required: false
  private _outDstUnReach?: number; 
  public get outDstUnReach() {
    return this.getNumberAttribute('out_dst_un_reach');
  }
  public set outDstUnReach(value: number) {
    this._outDstUnReach = value;
  }
  public resetOutDstUnReach() {
    this._outDstUnReach = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outDstUnReachInput() {
    return this._outDstUnReach;
  }

  // out_echo_replies - computed: false, optional: true, required: false
  private _outEchoReplies?: number; 
  public get outEchoReplies() {
    return this.getNumberAttribute('out_echo_replies');
  }
  public set outEchoReplies(value: number) {
    this._outEchoReplies = value;
  }
  public resetOutEchoReplies() {
    this._outEchoReplies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outEchoRepliesInput() {
    return this._outEchoReplies;
  }

  // out_echo_req - computed: false, optional: true, required: false
  private _outEchoReq?: number; 
  public get outEchoReq() {
    return this.getNumberAttribute('out_echo_req');
  }
  public set outEchoReq(value: number) {
    this._outEchoReq = value;
  }
  public resetOutEchoReq() {
    this._outEchoReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outEchoReqInput() {
    return this._outEchoReq;
  }

  // out_mem_reductions - computed: false, optional: true, required: false
  private _outMemReductions?: number; 
  public get outMemReductions() {
    return this.getNumberAttribute('out_mem_reductions');
  }
  public set outMemReductions(value: number) {
    this._outMemReductions = value;
  }
  public resetOutMemReductions() {
    this._outMemReductions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outMemReductionsInput() {
    return this._outMemReductions;
  }

  // out_mem_resp - computed: false, optional: true, required: false
  private _outMemResp?: number; 
  public get outMemResp() {
    return this.getNumberAttribute('out_mem_resp');
  }
  public set outMemResp(value: number) {
    this._outMemResp = value;
  }
  public resetOutMemResp() {
    this._outMemResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outMemRespInput() {
    return this._outMemResp;
  }

  // out_msg - computed: false, optional: true, required: false
  private _outMsg?: number; 
  public get outMsg() {
    return this.getNumberAttribute('out_msg');
  }
  public set outMsg(value: number) {
    this._outMsg = value;
  }
  public resetOutMsg() {
    this._outMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outMsgInput() {
    return this._outMsg;
  }

  // out_na - computed: false, optional: true, required: false
  private _outNa?: number; 
  public get outNa() {
    return this.getNumberAttribute('out_na');
  }
  public set outNa(value: number) {
    this._outNa = value;
  }
  public resetOutNa() {
    this._outNa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outNaInput() {
    return this._outNa;
  }

  // out_ns - computed: false, optional: true, required: false
  private _outNs?: number; 
  public get outNs() {
    return this.getNumberAttribute('out_ns');
  }
  public set outNs(value: number) {
    this._outNs = value;
  }
  public resetOutNs() {
    this._outNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outNsInput() {
    return this._outNs;
  }

  // out_param_prob - computed: false, optional: true, required: false
  private _outParamProb?: number; 
  public get outParamProb() {
    return this.getNumberAttribute('out_param_prob');
  }
  public set outParamProb(value: number) {
    this._outParamProb = value;
  }
  public resetOutParamProb() {
    this._outParamProb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outParamProbInput() {
    return this._outParamProb;
  }

  // out_pkt_too_big - computed: false, optional: true, required: false
  private _outPktTooBig?: number; 
  public get outPktTooBig() {
    return this.getNumberAttribute('out_pkt_too_big');
  }
  public set outPktTooBig(value: number) {
    this._outPktTooBig = value;
  }
  public resetOutPktTooBig() {
    this._outPktTooBig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outPktTooBigInput() {
    return this._outPktTooBig;
  }

  // out_ra - computed: false, optional: true, required: false
  private _outRa?: number; 
  public get outRa() {
    return this.getNumberAttribute('out_ra');
  }
  public set outRa(value: number) {
    this._outRa = value;
  }
  public resetOutRa() {
    this._outRa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outRaInput() {
    return this._outRa;
  }

  // out_redirects - computed: false, optional: true, required: false
  private _outRedirects?: number; 
  public get outRedirects() {
    return this.getNumberAttribute('out_redirects');
  }
  public set outRedirects(value: number) {
    this._outRedirects = value;
  }
  public resetOutRedirects() {
    this._outRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outRedirectsInput() {
    return this._outRedirects;
  }

  // out_rs - computed: false, optional: true, required: false
  private _outRs?: number; 
  public get outRs() {
    return this.getNumberAttribute('out_rs');
  }
  public set outRs(value: number) {
    this._outRs = value;
  }
  public resetOutRs() {
    this._outRs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outRsInput() {
    return this._outRs;
  }

  // out_time_exceeds - computed: false, optional: true, required: false
  private _outTimeExceeds?: number; 
  public get outTimeExceeds() {
    return this.getNumberAttribute('out_time_exceeds');
  }
  public set outTimeExceeds(value: number) {
    this._outTimeExceeds = value;
  }
  public resetOutTimeExceeds() {
    this._outTimeExceeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outTimeExceedsInput() {
    return this._outTimeExceeds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats thunder_system_icmp6_stats}
*/
export class DataThunderSystemIcmp6Stats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_icmp6_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemIcmp6Stats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemIcmp6Stats to import
  * @param importFromId The id of the existing DataThunderSystemIcmp6Stats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemIcmp6Stats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_icmp6_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/system_icmp6_stats thunder_system_icmp6_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemIcmp6StatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemIcmp6StatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_icmp6_stats',
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
  private _stats = new DataThunderSystemIcmp6StatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSystemIcmp6StatsStats) {
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
      stats: dataThunderSystemIcmp6StatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSystemIcmp6StatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemIcmp6StatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
