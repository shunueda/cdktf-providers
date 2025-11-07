// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosL4IcmpStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#id DataThunderDdosL4IcmpStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#stats DataThunderDdosL4IcmpStats#stats}
  */
  readonly stats?: DataThunderDdosL4IcmpStatsStats;
}
export interface DataThunderDdosL4IcmpStatsStats {
  /**
  * ICMP Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_any_exceed DataThunderDdosL4IcmpStats#icmp_any_exceed}
  */
  readonly icmpAnyExceed?: number;
  /**
  * ICMP Blacklisted Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_drop_bl DataThunderDdosL4IcmpStats#icmp_drop_bl}
  */
  readonly icmpDropBl?: number;
  /**
  * ICMP Dst Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_dst_drop DataThunderDdosL4IcmpStats#icmp_dst_drop}
  */
  readonly icmpDstDrop?: number;
  /**
  * ICMP Echo Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_echo_rcvd DataThunderDdosL4IcmpStats#icmp_echo_rcvd}
  */
  readonly icmpEchoRcvd?: number;
  /**
  * ICMP Frag Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_frag_drop DataThunderDdosL4IcmpStats#icmp_frag_drop}
  */
  readonly icmpFragDrop?: number;
  /**
  * ICMP Frag Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_frag_rcvd DataThunderDdosL4IcmpStats#icmp_frag_rcvd}
  */
  readonly icmpFragRcvd?: number;
  /**
  * ICMP other Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_other_rcvd DataThunderDdosL4IcmpStats#icmp_other_rcvd}
  */
  readonly icmpOtherRcvd?: number;
  /**
  * ICMP Type Rate 1 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_rate_exceed0 DataThunderDdosL4IcmpStats#icmp_rate_exceed0}
  */
  readonly icmpRateExceed0?: number;
  /**
  * ICMP Type Rate 1 Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_rate_exceed0_bl DataThunderDdosL4IcmpStats#icmp_rate_exceed0_bl}
  */
  readonly icmpRateExceed0Bl?: number;
  /**
  * ICMP Type Rate 1 Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_rate_exceed0_drop DataThunderDdosL4IcmpStats#icmp_rate_exceed0_drop}
  */
  readonly icmpRateExceed0Drop?: number;
  /**
  * ICMP Type Rate 2 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_rate_exceed1 DataThunderDdosL4IcmpStats#icmp_rate_exceed1}
  */
  readonly icmpRateExceed1?: number;
  /**
  * ICMP Type Rate 2 Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_rate_exceed1_bl DataThunderDdosL4IcmpStats#icmp_rate_exceed1_bl}
  */
  readonly icmpRateExceed1Bl?: number;
  /**
  * ICMP Type Rate 2 Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_rate_exceed1_drop DataThunderDdosL4IcmpStats#icmp_rate_exceed1_drop}
  */
  readonly icmpRateExceed1Drop?: number;
  /**
  * ICMP Type Rate 3 Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_rate_exceed2 DataThunderDdosL4IcmpStats#icmp_rate_exceed2}
  */
  readonly icmpRateExceed2?: number;
  /**
  * ICMP Type Rate 3 Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_rate_exceed2_bl DataThunderDdosL4IcmpStats#icmp_rate_exceed2_bl}
  */
  readonly icmpRateExceed2Bl?: number;
  /**
  * ICMP Type Rate 3 Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_rate_exceed2_drop DataThunderDdosL4IcmpStats#icmp_rate_exceed2_drop}
  */
  readonly icmpRateExceed2Drop?: number;
  /**
  * ICMP Total Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_rcvd DataThunderDdosL4IcmpStats#icmp_rcvd}
  */
  readonly icmpRcvd?: number;
  /**
  * ICMP Src Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_src_drop DataThunderDdosL4IcmpStats#icmp_src_drop}
  */
  readonly icmpSrcDrop?: number;
  /**
  * ICMP SrcDst Blacklisted User Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_src_dst_bl_drop_user_cfg DataThunderDdosL4IcmpStats#icmp_src_dst_bl_drop_user_cfg}
  */
  readonly icmpSrcDstBlDropUserCfg?: number;
  /**
  * ICMP SrcDst Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_src_dst_drop DataThunderDdosL4IcmpStats#icmp_src_dst_drop}
  */
  readonly icmpSrcDstDrop?: number;
  /**
  * ICMP Total Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_total_bytes_drop DataThunderDdosL4IcmpStats#icmp_total_bytes_drop}
  */
  readonly icmpTotalBytesDrop?: number;
  /**
  * ICMP Total Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_total_bytes_rcv DataThunderDdosL4IcmpStats#icmp_total_bytes_rcv}
  */
  readonly icmpTotalBytesRcv?: number;
  /**
  * ICMP Total Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_total_drop DataThunderDdosL4IcmpStats#icmp_total_drop}
  */
  readonly icmpTotalDrop?: number;
  /**
  * ICMP Type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_type DataThunderDdosL4IcmpStats#icmp_type}
  */
  readonly icmpType?: number;
  /**
  * ICMP Type Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_type_bl DataThunderDdosL4IcmpStats#icmp_type_bl}
  */
  readonly icmpTypeBl?: number;
  /**
  * ICMP Type Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_type_deny_drop DataThunderDdosL4IcmpStats#icmp_type_deny_drop}
  */
  readonly icmpTypeDenyDrop?: number;
  /**
  * ICMPv4 RFC Undef Type Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_v4_rfc_undef_drop DataThunderDdosL4IcmpStats#icmp_v4_rfc_undef_drop}
  */
  readonly icmpV4RfcUndefDrop?: number;
  /**
  * ICMPv6 RFC Undef Type Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_v6_rfc_undef_drop DataThunderDdosL4IcmpStats#icmp_v6_rfc_undef_drop}
  */
  readonly icmpV6RfcUndefDrop?: number;
  /**
  * ICMP Type Wildcard
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_wildcard DataThunderDdosL4IcmpStats#icmp_wildcard}
  */
  readonly icmpWildcard?: number;
  /**
  * ICMP Type Wildcard Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_wildcard_bl DataThunderDdosL4IcmpStats#icmp_wildcard_bl}
  */
  readonly icmpWildcardBl?: number;
  /**
  * ICMP Type Wildcard Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#icmp_wildcard_deny_drop DataThunderDdosL4IcmpStats#icmp_wildcard_deny_drop}
  */
  readonly icmpWildcardDenyDrop?: number;
  /**
  * ICMP Src Blacklisted User Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#src_icmp_bl_user_config DataThunderDdosL4IcmpStats#src_icmp_bl_user_config}
  */
  readonly srcIcmpBlUserConfig?: number;
}

export function dataThunderDdosL4IcmpStatsStatsToTerraform(struct?: DataThunderDdosL4IcmpStatsStatsOutputReference | DataThunderDdosL4IcmpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp_any_exceed: cdktf.numberToTerraform(struct!.icmpAnyExceed),
    icmp_drop_bl: cdktf.numberToTerraform(struct!.icmpDropBl),
    icmp_dst_drop: cdktf.numberToTerraform(struct!.icmpDstDrop),
    icmp_echo_rcvd: cdktf.numberToTerraform(struct!.icmpEchoRcvd),
    icmp_frag_drop: cdktf.numberToTerraform(struct!.icmpFragDrop),
    icmp_frag_rcvd: cdktf.numberToTerraform(struct!.icmpFragRcvd),
    icmp_other_rcvd: cdktf.numberToTerraform(struct!.icmpOtherRcvd),
    icmp_rate_exceed0: cdktf.numberToTerraform(struct!.icmpRateExceed0),
    icmp_rate_exceed0_bl: cdktf.numberToTerraform(struct!.icmpRateExceed0Bl),
    icmp_rate_exceed0_drop: cdktf.numberToTerraform(struct!.icmpRateExceed0Drop),
    icmp_rate_exceed1: cdktf.numberToTerraform(struct!.icmpRateExceed1),
    icmp_rate_exceed1_bl: cdktf.numberToTerraform(struct!.icmpRateExceed1Bl),
    icmp_rate_exceed1_drop: cdktf.numberToTerraform(struct!.icmpRateExceed1Drop),
    icmp_rate_exceed2: cdktf.numberToTerraform(struct!.icmpRateExceed2),
    icmp_rate_exceed2_bl: cdktf.numberToTerraform(struct!.icmpRateExceed2Bl),
    icmp_rate_exceed2_drop: cdktf.numberToTerraform(struct!.icmpRateExceed2Drop),
    icmp_rcvd: cdktf.numberToTerraform(struct!.icmpRcvd),
    icmp_src_drop: cdktf.numberToTerraform(struct!.icmpSrcDrop),
    icmp_src_dst_bl_drop_user_cfg: cdktf.numberToTerraform(struct!.icmpSrcDstBlDropUserCfg),
    icmp_src_dst_drop: cdktf.numberToTerraform(struct!.icmpSrcDstDrop),
    icmp_total_bytes_drop: cdktf.numberToTerraform(struct!.icmpTotalBytesDrop),
    icmp_total_bytes_rcv: cdktf.numberToTerraform(struct!.icmpTotalBytesRcv),
    icmp_total_drop: cdktf.numberToTerraform(struct!.icmpTotalDrop),
    icmp_type: cdktf.numberToTerraform(struct!.icmpType),
    icmp_type_bl: cdktf.numberToTerraform(struct!.icmpTypeBl),
    icmp_type_deny_drop: cdktf.numberToTerraform(struct!.icmpTypeDenyDrop),
    icmp_v4_rfc_undef_drop: cdktf.numberToTerraform(struct!.icmpV4RfcUndefDrop),
    icmp_v6_rfc_undef_drop: cdktf.numberToTerraform(struct!.icmpV6RfcUndefDrop),
    icmp_wildcard: cdktf.numberToTerraform(struct!.icmpWildcard),
    icmp_wildcard_bl: cdktf.numberToTerraform(struct!.icmpWildcardBl),
    icmp_wildcard_deny_drop: cdktf.numberToTerraform(struct!.icmpWildcardDenyDrop),
    src_icmp_bl_user_config: cdktf.numberToTerraform(struct!.srcIcmpBlUserConfig),
  }
}


export function dataThunderDdosL4IcmpStatsStatsToHclTerraform(struct?: DataThunderDdosL4IcmpStatsStatsOutputReference | DataThunderDdosL4IcmpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp_any_exceed: {
      value: cdktf.numberToHclTerraform(struct!.icmpAnyExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_drop_bl: {
      value: cdktf.numberToHclTerraform(struct!.icmpDropBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_dst_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmpDstDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_echo_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.icmpEchoRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_frag_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmpFragDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_frag_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.icmpFragRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_other_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.icmpOtherRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_rate_exceed0: {
      value: cdktf.numberToHclTerraform(struct!.icmpRateExceed0),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_rate_exceed0_bl: {
      value: cdktf.numberToHclTerraform(struct!.icmpRateExceed0Bl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_rate_exceed0_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmpRateExceed0Drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_rate_exceed1: {
      value: cdktf.numberToHclTerraform(struct!.icmpRateExceed1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_rate_exceed1_bl: {
      value: cdktf.numberToHclTerraform(struct!.icmpRateExceed1Bl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_rate_exceed1_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmpRateExceed1Drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_rate_exceed2: {
      value: cdktf.numberToHclTerraform(struct!.icmpRateExceed2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_rate_exceed2_bl: {
      value: cdktf.numberToHclTerraform(struct!.icmpRateExceed2Bl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_rate_exceed2_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmpRateExceed2Drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.icmpRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_src_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmpSrcDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_src_dst_bl_drop_user_cfg: {
      value: cdktf.numberToHclTerraform(struct!.icmpSrcDstBlDropUserCfg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_src_dst_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmpSrcDstDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_total_bytes_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmpTotalBytesDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_total_bytes_rcv: {
      value: cdktf.numberToHclTerraform(struct!.icmpTotalBytesRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_total_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmpTotalDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_type: {
      value: cdktf.numberToHclTerraform(struct!.icmpType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_type_bl: {
      value: cdktf.numberToHclTerraform(struct!.icmpTypeBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_type_deny_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmpTypeDenyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_v4_rfc_undef_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmpV4RfcUndefDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_v6_rfc_undef_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmpV6RfcUndefDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_wildcard: {
      value: cdktf.numberToHclTerraform(struct!.icmpWildcard),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_wildcard_bl: {
      value: cdktf.numberToHclTerraform(struct!.icmpWildcardBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_wildcard_deny_drop: {
      value: cdktf.numberToHclTerraform(struct!.icmpWildcardDenyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_icmp_bl_user_config: {
      value: cdktf.numberToHclTerraform(struct!.srcIcmpBlUserConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosL4IcmpStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosL4IcmpStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmpAnyExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpAnyExceed = this._icmpAnyExceed;
    }
    if (this._icmpDropBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpDropBl = this._icmpDropBl;
    }
    if (this._icmpDstDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpDstDrop = this._icmpDstDrop;
    }
    if (this._icmpEchoRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpEchoRcvd = this._icmpEchoRcvd;
    }
    if (this._icmpFragDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpFragDrop = this._icmpFragDrop;
    }
    if (this._icmpFragRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpFragRcvd = this._icmpFragRcvd;
    }
    if (this._icmpOtherRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpOtherRcvd = this._icmpOtherRcvd;
    }
    if (this._icmpRateExceed0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpRateExceed0 = this._icmpRateExceed0;
    }
    if (this._icmpRateExceed0Bl !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpRateExceed0Bl = this._icmpRateExceed0Bl;
    }
    if (this._icmpRateExceed0Drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpRateExceed0Drop = this._icmpRateExceed0Drop;
    }
    if (this._icmpRateExceed1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpRateExceed1 = this._icmpRateExceed1;
    }
    if (this._icmpRateExceed1Bl !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpRateExceed1Bl = this._icmpRateExceed1Bl;
    }
    if (this._icmpRateExceed1Drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpRateExceed1Drop = this._icmpRateExceed1Drop;
    }
    if (this._icmpRateExceed2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpRateExceed2 = this._icmpRateExceed2;
    }
    if (this._icmpRateExceed2Bl !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpRateExceed2Bl = this._icmpRateExceed2Bl;
    }
    if (this._icmpRateExceed2Drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpRateExceed2Drop = this._icmpRateExceed2Drop;
    }
    if (this._icmpRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpRcvd = this._icmpRcvd;
    }
    if (this._icmpSrcDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpSrcDrop = this._icmpSrcDrop;
    }
    if (this._icmpSrcDstBlDropUserCfg !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpSrcDstBlDropUserCfg = this._icmpSrcDstBlDropUserCfg;
    }
    if (this._icmpSrcDstDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpSrcDstDrop = this._icmpSrcDstDrop;
    }
    if (this._icmpTotalBytesDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpTotalBytesDrop = this._icmpTotalBytesDrop;
    }
    if (this._icmpTotalBytesRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpTotalBytesRcv = this._icmpTotalBytesRcv;
    }
    if (this._icmpTotalDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpTotalDrop = this._icmpTotalDrop;
    }
    if (this._icmpType !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpType = this._icmpType;
    }
    if (this._icmpTypeBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpTypeBl = this._icmpTypeBl;
    }
    if (this._icmpTypeDenyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpTypeDenyDrop = this._icmpTypeDenyDrop;
    }
    if (this._icmpV4RfcUndefDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpV4RfcUndefDrop = this._icmpV4RfcUndefDrop;
    }
    if (this._icmpV6RfcUndefDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpV6RfcUndefDrop = this._icmpV6RfcUndefDrop;
    }
    if (this._icmpWildcard !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpWildcard = this._icmpWildcard;
    }
    if (this._icmpWildcardBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpWildcardBl = this._icmpWildcardBl;
    }
    if (this._icmpWildcardDenyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpWildcardDenyDrop = this._icmpWildcardDenyDrop;
    }
    if (this._srcIcmpBlUserConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcIcmpBlUserConfig = this._srcIcmpBlUserConfig;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosL4IcmpStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._icmpAnyExceed = undefined;
      this._icmpDropBl = undefined;
      this._icmpDstDrop = undefined;
      this._icmpEchoRcvd = undefined;
      this._icmpFragDrop = undefined;
      this._icmpFragRcvd = undefined;
      this._icmpOtherRcvd = undefined;
      this._icmpRateExceed0 = undefined;
      this._icmpRateExceed0Bl = undefined;
      this._icmpRateExceed0Drop = undefined;
      this._icmpRateExceed1 = undefined;
      this._icmpRateExceed1Bl = undefined;
      this._icmpRateExceed1Drop = undefined;
      this._icmpRateExceed2 = undefined;
      this._icmpRateExceed2Bl = undefined;
      this._icmpRateExceed2Drop = undefined;
      this._icmpRcvd = undefined;
      this._icmpSrcDrop = undefined;
      this._icmpSrcDstBlDropUserCfg = undefined;
      this._icmpSrcDstDrop = undefined;
      this._icmpTotalBytesDrop = undefined;
      this._icmpTotalBytesRcv = undefined;
      this._icmpTotalDrop = undefined;
      this._icmpType = undefined;
      this._icmpTypeBl = undefined;
      this._icmpTypeDenyDrop = undefined;
      this._icmpV4RfcUndefDrop = undefined;
      this._icmpV6RfcUndefDrop = undefined;
      this._icmpWildcard = undefined;
      this._icmpWildcardBl = undefined;
      this._icmpWildcardDenyDrop = undefined;
      this._srcIcmpBlUserConfig = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._icmpAnyExceed = value.icmpAnyExceed;
      this._icmpDropBl = value.icmpDropBl;
      this._icmpDstDrop = value.icmpDstDrop;
      this._icmpEchoRcvd = value.icmpEchoRcvd;
      this._icmpFragDrop = value.icmpFragDrop;
      this._icmpFragRcvd = value.icmpFragRcvd;
      this._icmpOtherRcvd = value.icmpOtherRcvd;
      this._icmpRateExceed0 = value.icmpRateExceed0;
      this._icmpRateExceed0Bl = value.icmpRateExceed0Bl;
      this._icmpRateExceed0Drop = value.icmpRateExceed0Drop;
      this._icmpRateExceed1 = value.icmpRateExceed1;
      this._icmpRateExceed1Bl = value.icmpRateExceed1Bl;
      this._icmpRateExceed1Drop = value.icmpRateExceed1Drop;
      this._icmpRateExceed2 = value.icmpRateExceed2;
      this._icmpRateExceed2Bl = value.icmpRateExceed2Bl;
      this._icmpRateExceed2Drop = value.icmpRateExceed2Drop;
      this._icmpRcvd = value.icmpRcvd;
      this._icmpSrcDrop = value.icmpSrcDrop;
      this._icmpSrcDstBlDropUserCfg = value.icmpSrcDstBlDropUserCfg;
      this._icmpSrcDstDrop = value.icmpSrcDstDrop;
      this._icmpTotalBytesDrop = value.icmpTotalBytesDrop;
      this._icmpTotalBytesRcv = value.icmpTotalBytesRcv;
      this._icmpTotalDrop = value.icmpTotalDrop;
      this._icmpType = value.icmpType;
      this._icmpTypeBl = value.icmpTypeBl;
      this._icmpTypeDenyDrop = value.icmpTypeDenyDrop;
      this._icmpV4RfcUndefDrop = value.icmpV4RfcUndefDrop;
      this._icmpV6RfcUndefDrop = value.icmpV6RfcUndefDrop;
      this._icmpWildcard = value.icmpWildcard;
      this._icmpWildcardBl = value.icmpWildcardBl;
      this._icmpWildcardDenyDrop = value.icmpWildcardDenyDrop;
      this._srcIcmpBlUserConfig = value.srcIcmpBlUserConfig;
    }
  }

  // icmp_any_exceed - computed: false, optional: true, required: false
  private _icmpAnyExceed?: number; 
  public get icmpAnyExceed() {
    return this.getNumberAttribute('icmp_any_exceed');
  }
  public set icmpAnyExceed(value: number) {
    this._icmpAnyExceed = value;
  }
  public resetIcmpAnyExceed() {
    this._icmpAnyExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpAnyExceedInput() {
    return this._icmpAnyExceed;
  }

  // icmp_drop_bl - computed: false, optional: true, required: false
  private _icmpDropBl?: number; 
  public get icmpDropBl() {
    return this.getNumberAttribute('icmp_drop_bl');
  }
  public set icmpDropBl(value: number) {
    this._icmpDropBl = value;
  }
  public resetIcmpDropBl() {
    this._icmpDropBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpDropBlInput() {
    return this._icmpDropBl;
  }

  // icmp_dst_drop - computed: false, optional: true, required: false
  private _icmpDstDrop?: number; 
  public get icmpDstDrop() {
    return this.getNumberAttribute('icmp_dst_drop');
  }
  public set icmpDstDrop(value: number) {
    this._icmpDstDrop = value;
  }
  public resetIcmpDstDrop() {
    this._icmpDstDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpDstDropInput() {
    return this._icmpDstDrop;
  }

  // icmp_echo_rcvd - computed: false, optional: true, required: false
  private _icmpEchoRcvd?: number; 
  public get icmpEchoRcvd() {
    return this.getNumberAttribute('icmp_echo_rcvd');
  }
  public set icmpEchoRcvd(value: number) {
    this._icmpEchoRcvd = value;
  }
  public resetIcmpEchoRcvd() {
    this._icmpEchoRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpEchoRcvdInput() {
    return this._icmpEchoRcvd;
  }

  // icmp_frag_drop - computed: false, optional: true, required: false
  private _icmpFragDrop?: number; 
  public get icmpFragDrop() {
    return this.getNumberAttribute('icmp_frag_drop');
  }
  public set icmpFragDrop(value: number) {
    this._icmpFragDrop = value;
  }
  public resetIcmpFragDrop() {
    this._icmpFragDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpFragDropInput() {
    return this._icmpFragDrop;
  }

  // icmp_frag_rcvd - computed: false, optional: true, required: false
  private _icmpFragRcvd?: number; 
  public get icmpFragRcvd() {
    return this.getNumberAttribute('icmp_frag_rcvd');
  }
  public set icmpFragRcvd(value: number) {
    this._icmpFragRcvd = value;
  }
  public resetIcmpFragRcvd() {
    this._icmpFragRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpFragRcvdInput() {
    return this._icmpFragRcvd;
  }

  // icmp_other_rcvd - computed: false, optional: true, required: false
  private _icmpOtherRcvd?: number; 
  public get icmpOtherRcvd() {
    return this.getNumberAttribute('icmp_other_rcvd');
  }
  public set icmpOtherRcvd(value: number) {
    this._icmpOtherRcvd = value;
  }
  public resetIcmpOtherRcvd() {
    this._icmpOtherRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpOtherRcvdInput() {
    return this._icmpOtherRcvd;
  }

  // icmp_rate_exceed0 - computed: false, optional: true, required: false
  private _icmpRateExceed0?: number; 
  public get icmpRateExceed0() {
    return this.getNumberAttribute('icmp_rate_exceed0');
  }
  public set icmpRateExceed0(value: number) {
    this._icmpRateExceed0 = value;
  }
  public resetIcmpRateExceed0() {
    this._icmpRateExceed0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRateExceed0Input() {
    return this._icmpRateExceed0;
  }

  // icmp_rate_exceed0_bl - computed: false, optional: true, required: false
  private _icmpRateExceed0Bl?: number; 
  public get icmpRateExceed0Bl() {
    return this.getNumberAttribute('icmp_rate_exceed0_bl');
  }
  public set icmpRateExceed0Bl(value: number) {
    this._icmpRateExceed0Bl = value;
  }
  public resetIcmpRateExceed0Bl() {
    this._icmpRateExceed0Bl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRateExceed0BlInput() {
    return this._icmpRateExceed0Bl;
  }

  // icmp_rate_exceed0_drop - computed: false, optional: true, required: false
  private _icmpRateExceed0Drop?: number; 
  public get icmpRateExceed0Drop() {
    return this.getNumberAttribute('icmp_rate_exceed0_drop');
  }
  public set icmpRateExceed0Drop(value: number) {
    this._icmpRateExceed0Drop = value;
  }
  public resetIcmpRateExceed0Drop() {
    this._icmpRateExceed0Drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRateExceed0DropInput() {
    return this._icmpRateExceed0Drop;
  }

  // icmp_rate_exceed1 - computed: false, optional: true, required: false
  private _icmpRateExceed1?: number; 
  public get icmpRateExceed1() {
    return this.getNumberAttribute('icmp_rate_exceed1');
  }
  public set icmpRateExceed1(value: number) {
    this._icmpRateExceed1 = value;
  }
  public resetIcmpRateExceed1() {
    this._icmpRateExceed1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRateExceed1Input() {
    return this._icmpRateExceed1;
  }

  // icmp_rate_exceed1_bl - computed: false, optional: true, required: false
  private _icmpRateExceed1Bl?: number; 
  public get icmpRateExceed1Bl() {
    return this.getNumberAttribute('icmp_rate_exceed1_bl');
  }
  public set icmpRateExceed1Bl(value: number) {
    this._icmpRateExceed1Bl = value;
  }
  public resetIcmpRateExceed1Bl() {
    this._icmpRateExceed1Bl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRateExceed1BlInput() {
    return this._icmpRateExceed1Bl;
  }

  // icmp_rate_exceed1_drop - computed: false, optional: true, required: false
  private _icmpRateExceed1Drop?: number; 
  public get icmpRateExceed1Drop() {
    return this.getNumberAttribute('icmp_rate_exceed1_drop');
  }
  public set icmpRateExceed1Drop(value: number) {
    this._icmpRateExceed1Drop = value;
  }
  public resetIcmpRateExceed1Drop() {
    this._icmpRateExceed1Drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRateExceed1DropInput() {
    return this._icmpRateExceed1Drop;
  }

  // icmp_rate_exceed2 - computed: false, optional: true, required: false
  private _icmpRateExceed2?: number; 
  public get icmpRateExceed2() {
    return this.getNumberAttribute('icmp_rate_exceed2');
  }
  public set icmpRateExceed2(value: number) {
    this._icmpRateExceed2 = value;
  }
  public resetIcmpRateExceed2() {
    this._icmpRateExceed2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRateExceed2Input() {
    return this._icmpRateExceed2;
  }

  // icmp_rate_exceed2_bl - computed: false, optional: true, required: false
  private _icmpRateExceed2Bl?: number; 
  public get icmpRateExceed2Bl() {
    return this.getNumberAttribute('icmp_rate_exceed2_bl');
  }
  public set icmpRateExceed2Bl(value: number) {
    this._icmpRateExceed2Bl = value;
  }
  public resetIcmpRateExceed2Bl() {
    this._icmpRateExceed2Bl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRateExceed2BlInput() {
    return this._icmpRateExceed2Bl;
  }

  // icmp_rate_exceed2_drop - computed: false, optional: true, required: false
  private _icmpRateExceed2Drop?: number; 
  public get icmpRateExceed2Drop() {
    return this.getNumberAttribute('icmp_rate_exceed2_drop');
  }
  public set icmpRateExceed2Drop(value: number) {
    this._icmpRateExceed2Drop = value;
  }
  public resetIcmpRateExceed2Drop() {
    this._icmpRateExceed2Drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRateExceed2DropInput() {
    return this._icmpRateExceed2Drop;
  }

  // icmp_rcvd - computed: false, optional: true, required: false
  private _icmpRcvd?: number; 
  public get icmpRcvd() {
    return this.getNumberAttribute('icmp_rcvd');
  }
  public set icmpRcvd(value: number) {
    this._icmpRcvd = value;
  }
  public resetIcmpRcvd() {
    this._icmpRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpRcvdInput() {
    return this._icmpRcvd;
  }

  // icmp_src_drop - computed: false, optional: true, required: false
  private _icmpSrcDrop?: number; 
  public get icmpSrcDrop() {
    return this.getNumberAttribute('icmp_src_drop');
  }
  public set icmpSrcDrop(value: number) {
    this._icmpSrcDrop = value;
  }
  public resetIcmpSrcDrop() {
    this._icmpSrcDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpSrcDropInput() {
    return this._icmpSrcDrop;
  }

  // icmp_src_dst_bl_drop_user_cfg - computed: false, optional: true, required: false
  private _icmpSrcDstBlDropUserCfg?: number; 
  public get icmpSrcDstBlDropUserCfg() {
    return this.getNumberAttribute('icmp_src_dst_bl_drop_user_cfg');
  }
  public set icmpSrcDstBlDropUserCfg(value: number) {
    this._icmpSrcDstBlDropUserCfg = value;
  }
  public resetIcmpSrcDstBlDropUserCfg() {
    this._icmpSrcDstBlDropUserCfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpSrcDstBlDropUserCfgInput() {
    return this._icmpSrcDstBlDropUserCfg;
  }

  // icmp_src_dst_drop - computed: false, optional: true, required: false
  private _icmpSrcDstDrop?: number; 
  public get icmpSrcDstDrop() {
    return this.getNumberAttribute('icmp_src_dst_drop');
  }
  public set icmpSrcDstDrop(value: number) {
    this._icmpSrcDstDrop = value;
  }
  public resetIcmpSrcDstDrop() {
    this._icmpSrcDstDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpSrcDstDropInput() {
    return this._icmpSrcDstDrop;
  }

  // icmp_total_bytes_drop - computed: false, optional: true, required: false
  private _icmpTotalBytesDrop?: number; 
  public get icmpTotalBytesDrop() {
    return this.getNumberAttribute('icmp_total_bytes_drop');
  }
  public set icmpTotalBytesDrop(value: number) {
    this._icmpTotalBytesDrop = value;
  }
  public resetIcmpTotalBytesDrop() {
    this._icmpTotalBytesDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTotalBytesDropInput() {
    return this._icmpTotalBytesDrop;
  }

  // icmp_total_bytes_rcv - computed: false, optional: true, required: false
  private _icmpTotalBytesRcv?: number; 
  public get icmpTotalBytesRcv() {
    return this.getNumberAttribute('icmp_total_bytes_rcv');
  }
  public set icmpTotalBytesRcv(value: number) {
    this._icmpTotalBytesRcv = value;
  }
  public resetIcmpTotalBytesRcv() {
    this._icmpTotalBytesRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTotalBytesRcvInput() {
    return this._icmpTotalBytesRcv;
  }

  // icmp_total_drop - computed: false, optional: true, required: false
  private _icmpTotalDrop?: number; 
  public get icmpTotalDrop() {
    return this.getNumberAttribute('icmp_total_drop');
  }
  public set icmpTotalDrop(value: number) {
    this._icmpTotalDrop = value;
  }
  public resetIcmpTotalDrop() {
    this._icmpTotalDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTotalDropInput() {
    return this._icmpTotalDrop;
  }

  // icmp_type - computed: false, optional: true, required: false
  private _icmpType?: number; 
  public get icmpType() {
    return this.getNumberAttribute('icmp_type');
  }
  public set icmpType(value: number) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
  }

  // icmp_type_bl - computed: false, optional: true, required: false
  private _icmpTypeBl?: number; 
  public get icmpTypeBl() {
    return this.getNumberAttribute('icmp_type_bl');
  }
  public set icmpTypeBl(value: number) {
    this._icmpTypeBl = value;
  }
  public resetIcmpTypeBl() {
    this._icmpTypeBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeBlInput() {
    return this._icmpTypeBl;
  }

  // icmp_type_deny_drop - computed: false, optional: true, required: false
  private _icmpTypeDenyDrop?: number; 
  public get icmpTypeDenyDrop() {
    return this.getNumberAttribute('icmp_type_deny_drop');
  }
  public set icmpTypeDenyDrop(value: number) {
    this._icmpTypeDenyDrop = value;
  }
  public resetIcmpTypeDenyDrop() {
    this._icmpTypeDenyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeDenyDropInput() {
    return this._icmpTypeDenyDrop;
  }

  // icmp_v4_rfc_undef_drop - computed: false, optional: true, required: false
  private _icmpV4RfcUndefDrop?: number; 
  public get icmpV4RfcUndefDrop() {
    return this.getNumberAttribute('icmp_v4_rfc_undef_drop');
  }
  public set icmpV4RfcUndefDrop(value: number) {
    this._icmpV4RfcUndefDrop = value;
  }
  public resetIcmpV4RfcUndefDrop() {
    this._icmpV4RfcUndefDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpV4RfcUndefDropInput() {
    return this._icmpV4RfcUndefDrop;
  }

  // icmp_v6_rfc_undef_drop - computed: false, optional: true, required: false
  private _icmpV6RfcUndefDrop?: number; 
  public get icmpV6RfcUndefDrop() {
    return this.getNumberAttribute('icmp_v6_rfc_undef_drop');
  }
  public set icmpV6RfcUndefDrop(value: number) {
    this._icmpV6RfcUndefDrop = value;
  }
  public resetIcmpV6RfcUndefDrop() {
    this._icmpV6RfcUndefDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpV6RfcUndefDropInput() {
    return this._icmpV6RfcUndefDrop;
  }

  // icmp_wildcard - computed: false, optional: true, required: false
  private _icmpWildcard?: number; 
  public get icmpWildcard() {
    return this.getNumberAttribute('icmp_wildcard');
  }
  public set icmpWildcard(value: number) {
    this._icmpWildcard = value;
  }
  public resetIcmpWildcard() {
    this._icmpWildcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpWildcardInput() {
    return this._icmpWildcard;
  }

  // icmp_wildcard_bl - computed: false, optional: true, required: false
  private _icmpWildcardBl?: number; 
  public get icmpWildcardBl() {
    return this.getNumberAttribute('icmp_wildcard_bl');
  }
  public set icmpWildcardBl(value: number) {
    this._icmpWildcardBl = value;
  }
  public resetIcmpWildcardBl() {
    this._icmpWildcardBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpWildcardBlInput() {
    return this._icmpWildcardBl;
  }

  // icmp_wildcard_deny_drop - computed: false, optional: true, required: false
  private _icmpWildcardDenyDrop?: number; 
  public get icmpWildcardDenyDrop() {
    return this.getNumberAttribute('icmp_wildcard_deny_drop');
  }
  public set icmpWildcardDenyDrop(value: number) {
    this._icmpWildcardDenyDrop = value;
  }
  public resetIcmpWildcardDenyDrop() {
    this._icmpWildcardDenyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpWildcardDenyDropInput() {
    return this._icmpWildcardDenyDrop;
  }

  // src_icmp_bl_user_config - computed: false, optional: true, required: false
  private _srcIcmpBlUserConfig?: number; 
  public get srcIcmpBlUserConfig() {
    return this.getNumberAttribute('src_icmp_bl_user_config');
  }
  public set srcIcmpBlUserConfig(value: number) {
    this._srcIcmpBlUserConfig = value;
  }
  public resetSrcIcmpBlUserConfig() {
    this._srcIcmpBlUserConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIcmpBlUserConfigInput() {
    return this._srcIcmpBlUserConfig;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats thunder_ddos_l4_icmp_stats}
*/
export class DataThunderDdosL4IcmpStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_l4_icmp_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosL4IcmpStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosL4IcmpStats to import
  * @param importFromId The id of the existing DataThunderDdosL4IcmpStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosL4IcmpStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_l4_icmp_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_icmp_stats thunder_ddos_l4_icmp_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosL4IcmpStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosL4IcmpStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_l4_icmp_stats',
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
  private _stats = new DataThunderDdosL4IcmpStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosL4IcmpStatsStats) {
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
      stats: dataThunderDdosL4IcmpStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderDdosL4IcmpStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosL4IcmpStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
