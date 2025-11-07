// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosL4OtherStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#id DataThunderDdosL4OtherStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#stats DataThunderDdosL4OtherStats#stats}
  */
  readonly stats?: DataThunderDdosL4OtherStatsStats;
}
export interface DataThunderDdosL4OtherStatsStats {
  /**
  * Dst Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#dst_other_filter_action_blacklist DataThunderDdosL4OtherStats#dst_other_filter_action_blacklist}
  */
  readonly dstOtherFilterActionBlacklist?: number;
  /**
  * Dst Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#dst_other_filter_action_default_pass DataThunderDdosL4OtherStats#dst_other_filter_action_default_pass}
  */
  readonly dstOtherFilterActionDefaultPass?: number;
  /**
  * Dst Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#dst_other_filter_action_drop DataThunderDdosL4OtherStats#dst_other_filter_action_drop}
  */
  readonly dstOtherFilterActionDrop?: number;
  /**
  * Dst Filter Action WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#dst_other_filter_action_whitelist DataThunderDdosL4OtherStats#dst_other_filter_action_whitelist}
  */
  readonly dstOtherFilterActionWhitelist?: number;
  /**
  * Dst Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#dst_other_filter_match DataThunderDdosL4OtherStats#dst_other_filter_match}
  */
  readonly dstOtherFilterMatch?: number;
  /**
  * Dst Filter No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#dst_other_filter_not_match DataThunderDdosL4OtherStats#dst_other_filter_not_match}
  */
  readonly dstOtherFilterNotMatch?: number;
  /**
  * OTHER Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#other_any_exceed DataThunderDdosL4OtherStats#other_any_exceed}
  */
  readonly otherAnyExceed?: number;
  /**
  * OTHER Blacklisted Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#other_drop_bl DataThunderDdosL4OtherStats#other_drop_bl}
  */
  readonly otherDropBl?: number;
  /**
  * OTHER Src Blacklist User Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#other_drop_black_user_cfg_src DataThunderDdosL4OtherStats#other_drop_black_user_cfg_src}
  */
  readonly otherDropBlackUserCfgSrc?: number;
  /**
  * OTHER SrcDst Blacklist User Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#other_drop_black_user_cfg_src_dst DataThunderDdosL4OtherStats#other_drop_black_user_cfg_src_dst}
  */
  readonly otherDropBlackUserCfgSrcDst?: number;
  /**
  * OTHER Dst Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#other_dst_drop DataThunderDdosL4OtherStats#other_dst_drop}
  */
  readonly otherDstDrop?: number;
  /**
  * OTHER Frag Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#other_frag_drop DataThunderDdosL4OtherStats#other_frag_drop}
  */
  readonly otherFragDrop?: number;
  /**
  * OTHER Frag Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#other_frag_rcvd DataThunderDdosL4OtherStats#other_frag_rcvd}
  */
  readonly otherFragRcvd?: number;
  /**
  * OTHER Total Packets Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#other_receive DataThunderDdosL4OtherStats#other_receive}
  */
  readonly otherReceive?: number;
  /**
  * OTHER Src Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#other_src_drop DataThunderDdosL4OtherStats#other_src_drop}
  */
  readonly otherSrcDrop?: number;
  /**
  * OTHER SrcDst Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#other_src_dst_drop DataThunderDdosL4OtherStats#other_src_dst_drop}
  */
  readonly otherSrcDstDrop?: number;
  /**
  * OTHER Total Bytes Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#other_total_bytes_drop DataThunderDdosL4OtherStats#other_total_bytes_drop}
  */
  readonly otherTotalBytesDrop?: number;
  /**
  * OTHER Total Bytes Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#other_total_bytes_rcv DataThunderDdosL4OtherStats#other_total_bytes_rcv}
  */
  readonly otherTotalBytesRcv?: number;
  /**
  * OTHER Total Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#other_total_drop DataThunderDdosL4OtherStats#other_total_drop}
  */
  readonly otherTotalDrop?: number;
  /**
  * SrcDst Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#src_dst_other_filter_action_blacklist DataThunderDdosL4OtherStats#src_dst_other_filter_action_blacklist}
  */
  readonly srcDstOtherFilterActionBlacklist?: number;
  /**
  * SrcDst Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#src_dst_other_filter_action_default_pass DataThunderDdosL4OtherStats#src_dst_other_filter_action_default_pass}
  */
  readonly srcDstOtherFilterActionDefaultPass?: number;
  /**
  * SrcDst Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#src_dst_other_filter_action_drop DataThunderDdosL4OtherStats#src_dst_other_filter_action_drop}
  */
  readonly srcDstOtherFilterActionDrop?: number;
  /**
  * SrcDst Filter Action WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#src_dst_other_filter_action_whitelist DataThunderDdosL4OtherStats#src_dst_other_filter_action_whitelist}
  */
  readonly srcDstOtherFilterActionWhitelist?: number;
  /**
  * SrcDst Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#src_dst_other_filter_match DataThunderDdosL4OtherStats#src_dst_other_filter_match}
  */
  readonly srcDstOtherFilterMatch?: number;
  /**
  * SrcDst Filter No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#src_dst_other_filter_not_match DataThunderDdosL4OtherStats#src_dst_other_filter_not_match}
  */
  readonly srcDstOtherFilterNotMatch?: number;
  /**
  * Src Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#src_other_filter_action_blacklist DataThunderDdosL4OtherStats#src_other_filter_action_blacklist}
  */
  readonly srcOtherFilterActionBlacklist?: number;
  /**
  * Src Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#src_other_filter_action_default_pass DataThunderDdosL4OtherStats#src_other_filter_action_default_pass}
  */
  readonly srcOtherFilterActionDefaultPass?: number;
  /**
  * Src Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#src_other_filter_action_drop DataThunderDdosL4OtherStats#src_other_filter_action_drop}
  */
  readonly srcOtherFilterActionDrop?: number;
  /**
  * Src Filter Action WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#src_other_filter_action_whitelist DataThunderDdosL4OtherStats#src_other_filter_action_whitelist}
  */
  readonly srcOtherFilterActionWhitelist?: number;
  /**
  * Src Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#src_other_filter_match DataThunderDdosL4OtherStats#src_other_filter_match}
  */
  readonly srcOtherFilterMatch?: number;
  /**
  * Src Filter No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#src_other_filter_not_match DataThunderDdosL4OtherStats#src_other_filter_not_match}
  */
  readonly srcOtherFilterNotMatch?: number;
}

export function dataThunderDdosL4OtherStatsStatsToTerraform(struct?: DataThunderDdosL4OtherStatsStatsOutputReference | DataThunderDdosL4OtherStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_other_filter_action_blacklist: cdktf.numberToTerraform(struct!.dstOtherFilterActionBlacklist),
    dst_other_filter_action_default_pass: cdktf.numberToTerraform(struct!.dstOtherFilterActionDefaultPass),
    dst_other_filter_action_drop: cdktf.numberToTerraform(struct!.dstOtherFilterActionDrop),
    dst_other_filter_action_whitelist: cdktf.numberToTerraform(struct!.dstOtherFilterActionWhitelist),
    dst_other_filter_match: cdktf.numberToTerraform(struct!.dstOtherFilterMatch),
    dst_other_filter_not_match: cdktf.numberToTerraform(struct!.dstOtherFilterNotMatch),
    other_any_exceed: cdktf.numberToTerraform(struct!.otherAnyExceed),
    other_drop_bl: cdktf.numberToTerraform(struct!.otherDropBl),
    other_drop_black_user_cfg_src: cdktf.numberToTerraform(struct!.otherDropBlackUserCfgSrc),
    other_drop_black_user_cfg_src_dst: cdktf.numberToTerraform(struct!.otherDropBlackUserCfgSrcDst),
    other_dst_drop: cdktf.numberToTerraform(struct!.otherDstDrop),
    other_frag_drop: cdktf.numberToTerraform(struct!.otherFragDrop),
    other_frag_rcvd: cdktf.numberToTerraform(struct!.otherFragRcvd),
    other_receive: cdktf.numberToTerraform(struct!.otherReceive),
    other_src_drop: cdktf.numberToTerraform(struct!.otherSrcDrop),
    other_src_dst_drop: cdktf.numberToTerraform(struct!.otherSrcDstDrop),
    other_total_bytes_drop: cdktf.numberToTerraform(struct!.otherTotalBytesDrop),
    other_total_bytes_rcv: cdktf.numberToTerraform(struct!.otherTotalBytesRcv),
    other_total_drop: cdktf.numberToTerraform(struct!.otherTotalDrop),
    src_dst_other_filter_action_blacklist: cdktf.numberToTerraform(struct!.srcDstOtherFilterActionBlacklist),
    src_dst_other_filter_action_default_pass: cdktf.numberToTerraform(struct!.srcDstOtherFilterActionDefaultPass),
    src_dst_other_filter_action_drop: cdktf.numberToTerraform(struct!.srcDstOtherFilterActionDrop),
    src_dst_other_filter_action_whitelist: cdktf.numberToTerraform(struct!.srcDstOtherFilterActionWhitelist),
    src_dst_other_filter_match: cdktf.numberToTerraform(struct!.srcDstOtherFilterMatch),
    src_dst_other_filter_not_match: cdktf.numberToTerraform(struct!.srcDstOtherFilterNotMatch),
    src_other_filter_action_blacklist: cdktf.numberToTerraform(struct!.srcOtherFilterActionBlacklist),
    src_other_filter_action_default_pass: cdktf.numberToTerraform(struct!.srcOtherFilterActionDefaultPass),
    src_other_filter_action_drop: cdktf.numberToTerraform(struct!.srcOtherFilterActionDrop),
    src_other_filter_action_whitelist: cdktf.numberToTerraform(struct!.srcOtherFilterActionWhitelist),
    src_other_filter_match: cdktf.numberToTerraform(struct!.srcOtherFilterMatch),
    src_other_filter_not_match: cdktf.numberToTerraform(struct!.srcOtherFilterNotMatch),
  }
}


export function dataThunderDdosL4OtherStatsStatsToHclTerraform(struct?: DataThunderDdosL4OtherStatsStatsOutputReference | DataThunderDdosL4OtherStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_other_filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.dstOtherFilterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_other_filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.dstOtherFilterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_other_filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstOtherFilterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_other_filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.dstOtherFilterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_other_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.dstOtherFilterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_other_filter_not_match: {
      value: cdktf.numberToHclTerraform(struct!.dstOtherFilterNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_any_exceed: {
      value: cdktf.numberToHclTerraform(struct!.otherAnyExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_drop_bl: {
      value: cdktf.numberToHclTerraform(struct!.otherDropBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_drop_black_user_cfg_src: {
      value: cdktf.numberToHclTerraform(struct!.otherDropBlackUserCfgSrc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_drop_black_user_cfg_src_dst: {
      value: cdktf.numberToHclTerraform(struct!.otherDropBlackUserCfgSrcDst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_dst_drop: {
      value: cdktf.numberToHclTerraform(struct!.otherDstDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_frag_drop: {
      value: cdktf.numberToHclTerraform(struct!.otherFragDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_frag_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.otherFragRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_receive: {
      value: cdktf.numberToHclTerraform(struct!.otherReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_src_drop: {
      value: cdktf.numberToHclTerraform(struct!.otherSrcDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_src_dst_drop: {
      value: cdktf.numberToHclTerraform(struct!.otherSrcDstDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_total_bytes_drop: {
      value: cdktf.numberToHclTerraform(struct!.otherTotalBytesDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_total_bytes_rcv: {
      value: cdktf.numberToHclTerraform(struct!.otherTotalBytesRcv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_total_drop: {
      value: cdktf.numberToHclTerraform(struct!.otherTotalDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_other_filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.srcDstOtherFilterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_other_filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.srcDstOtherFilterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_other_filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcDstOtherFilterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_other_filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.srcDstOtherFilterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_other_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.srcDstOtherFilterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_other_filter_not_match: {
      value: cdktf.numberToHclTerraform(struct!.srcDstOtherFilterNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_other_filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.srcOtherFilterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_other_filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.srcOtherFilterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_other_filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcOtherFilterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_other_filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.srcOtherFilterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_other_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.srcOtherFilterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_other_filter_not_match: {
      value: cdktf.numberToHclTerraform(struct!.srcOtherFilterNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosL4OtherStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosL4OtherStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstOtherFilterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOtherFilterActionBlacklist = this._dstOtherFilterActionBlacklist;
    }
    if (this._dstOtherFilterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOtherFilterActionDefaultPass = this._dstOtherFilterActionDefaultPass;
    }
    if (this._dstOtherFilterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOtherFilterActionDrop = this._dstOtherFilterActionDrop;
    }
    if (this._dstOtherFilterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOtherFilterActionWhitelist = this._dstOtherFilterActionWhitelist;
    }
    if (this._dstOtherFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOtherFilterMatch = this._dstOtherFilterMatch;
    }
    if (this._dstOtherFilterNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOtherFilterNotMatch = this._dstOtherFilterNotMatch;
    }
    if (this._otherAnyExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherAnyExceed = this._otherAnyExceed;
    }
    if (this._otherDropBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherDropBl = this._otherDropBl;
    }
    if (this._otherDropBlackUserCfgSrc !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherDropBlackUserCfgSrc = this._otherDropBlackUserCfgSrc;
    }
    if (this._otherDropBlackUserCfgSrcDst !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherDropBlackUserCfgSrcDst = this._otherDropBlackUserCfgSrcDst;
    }
    if (this._otherDstDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherDstDrop = this._otherDstDrop;
    }
    if (this._otherFragDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherFragDrop = this._otherFragDrop;
    }
    if (this._otherFragRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherFragRcvd = this._otherFragRcvd;
    }
    if (this._otherReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherReceive = this._otherReceive;
    }
    if (this._otherSrcDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherSrcDrop = this._otherSrcDrop;
    }
    if (this._otherSrcDstDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherSrcDstDrop = this._otherSrcDstDrop;
    }
    if (this._otherTotalBytesDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherTotalBytesDrop = this._otherTotalBytesDrop;
    }
    if (this._otherTotalBytesRcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherTotalBytesRcv = this._otherTotalBytesRcv;
    }
    if (this._otherTotalDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherTotalDrop = this._otherTotalDrop;
    }
    if (this._srcDstOtherFilterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstOtherFilterActionBlacklist = this._srcDstOtherFilterActionBlacklist;
    }
    if (this._srcDstOtherFilterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstOtherFilterActionDefaultPass = this._srcDstOtherFilterActionDefaultPass;
    }
    if (this._srcDstOtherFilterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstOtherFilterActionDrop = this._srcDstOtherFilterActionDrop;
    }
    if (this._srcDstOtherFilterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstOtherFilterActionWhitelist = this._srcDstOtherFilterActionWhitelist;
    }
    if (this._srcDstOtherFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstOtherFilterMatch = this._srcDstOtherFilterMatch;
    }
    if (this._srcDstOtherFilterNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstOtherFilterNotMatch = this._srcDstOtherFilterNotMatch;
    }
    if (this._srcOtherFilterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcOtherFilterActionBlacklist = this._srcOtherFilterActionBlacklist;
    }
    if (this._srcOtherFilterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcOtherFilterActionDefaultPass = this._srcOtherFilterActionDefaultPass;
    }
    if (this._srcOtherFilterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcOtherFilterActionDrop = this._srcOtherFilterActionDrop;
    }
    if (this._srcOtherFilterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcOtherFilterActionWhitelist = this._srcOtherFilterActionWhitelist;
    }
    if (this._srcOtherFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcOtherFilterMatch = this._srcOtherFilterMatch;
    }
    if (this._srcOtherFilterNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcOtherFilterNotMatch = this._srcOtherFilterNotMatch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosL4OtherStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstOtherFilterActionBlacklist = undefined;
      this._dstOtherFilterActionDefaultPass = undefined;
      this._dstOtherFilterActionDrop = undefined;
      this._dstOtherFilterActionWhitelist = undefined;
      this._dstOtherFilterMatch = undefined;
      this._dstOtherFilterNotMatch = undefined;
      this._otherAnyExceed = undefined;
      this._otherDropBl = undefined;
      this._otherDropBlackUserCfgSrc = undefined;
      this._otherDropBlackUserCfgSrcDst = undefined;
      this._otherDstDrop = undefined;
      this._otherFragDrop = undefined;
      this._otherFragRcvd = undefined;
      this._otherReceive = undefined;
      this._otherSrcDrop = undefined;
      this._otherSrcDstDrop = undefined;
      this._otherTotalBytesDrop = undefined;
      this._otherTotalBytesRcv = undefined;
      this._otherTotalDrop = undefined;
      this._srcDstOtherFilterActionBlacklist = undefined;
      this._srcDstOtherFilterActionDefaultPass = undefined;
      this._srcDstOtherFilterActionDrop = undefined;
      this._srcDstOtherFilterActionWhitelist = undefined;
      this._srcDstOtherFilterMatch = undefined;
      this._srcDstOtherFilterNotMatch = undefined;
      this._srcOtherFilterActionBlacklist = undefined;
      this._srcOtherFilterActionDefaultPass = undefined;
      this._srcOtherFilterActionDrop = undefined;
      this._srcOtherFilterActionWhitelist = undefined;
      this._srcOtherFilterMatch = undefined;
      this._srcOtherFilterNotMatch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstOtherFilterActionBlacklist = value.dstOtherFilterActionBlacklist;
      this._dstOtherFilterActionDefaultPass = value.dstOtherFilterActionDefaultPass;
      this._dstOtherFilterActionDrop = value.dstOtherFilterActionDrop;
      this._dstOtherFilterActionWhitelist = value.dstOtherFilterActionWhitelist;
      this._dstOtherFilterMatch = value.dstOtherFilterMatch;
      this._dstOtherFilterNotMatch = value.dstOtherFilterNotMatch;
      this._otherAnyExceed = value.otherAnyExceed;
      this._otherDropBl = value.otherDropBl;
      this._otherDropBlackUserCfgSrc = value.otherDropBlackUserCfgSrc;
      this._otherDropBlackUserCfgSrcDst = value.otherDropBlackUserCfgSrcDst;
      this._otherDstDrop = value.otherDstDrop;
      this._otherFragDrop = value.otherFragDrop;
      this._otherFragRcvd = value.otherFragRcvd;
      this._otherReceive = value.otherReceive;
      this._otherSrcDrop = value.otherSrcDrop;
      this._otherSrcDstDrop = value.otherSrcDstDrop;
      this._otherTotalBytesDrop = value.otherTotalBytesDrop;
      this._otherTotalBytesRcv = value.otherTotalBytesRcv;
      this._otherTotalDrop = value.otherTotalDrop;
      this._srcDstOtherFilterActionBlacklist = value.srcDstOtherFilterActionBlacklist;
      this._srcDstOtherFilterActionDefaultPass = value.srcDstOtherFilterActionDefaultPass;
      this._srcDstOtherFilterActionDrop = value.srcDstOtherFilterActionDrop;
      this._srcDstOtherFilterActionWhitelist = value.srcDstOtherFilterActionWhitelist;
      this._srcDstOtherFilterMatch = value.srcDstOtherFilterMatch;
      this._srcDstOtherFilterNotMatch = value.srcDstOtherFilterNotMatch;
      this._srcOtherFilterActionBlacklist = value.srcOtherFilterActionBlacklist;
      this._srcOtherFilterActionDefaultPass = value.srcOtherFilterActionDefaultPass;
      this._srcOtherFilterActionDrop = value.srcOtherFilterActionDrop;
      this._srcOtherFilterActionWhitelist = value.srcOtherFilterActionWhitelist;
      this._srcOtherFilterMatch = value.srcOtherFilterMatch;
      this._srcOtherFilterNotMatch = value.srcOtherFilterNotMatch;
    }
  }

  // dst_other_filter_action_blacklist - computed: false, optional: true, required: false
  private _dstOtherFilterActionBlacklist?: number; 
  public get dstOtherFilterActionBlacklist() {
    return this.getNumberAttribute('dst_other_filter_action_blacklist');
  }
  public set dstOtherFilterActionBlacklist(value: number) {
    this._dstOtherFilterActionBlacklist = value;
  }
  public resetDstOtherFilterActionBlacklist() {
    this._dstOtherFilterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstOtherFilterActionBlacklistInput() {
    return this._dstOtherFilterActionBlacklist;
  }

  // dst_other_filter_action_default_pass - computed: false, optional: true, required: false
  private _dstOtherFilterActionDefaultPass?: number; 
  public get dstOtherFilterActionDefaultPass() {
    return this.getNumberAttribute('dst_other_filter_action_default_pass');
  }
  public set dstOtherFilterActionDefaultPass(value: number) {
    this._dstOtherFilterActionDefaultPass = value;
  }
  public resetDstOtherFilterActionDefaultPass() {
    this._dstOtherFilterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstOtherFilterActionDefaultPassInput() {
    return this._dstOtherFilterActionDefaultPass;
  }

  // dst_other_filter_action_drop - computed: false, optional: true, required: false
  private _dstOtherFilterActionDrop?: number; 
  public get dstOtherFilterActionDrop() {
    return this.getNumberAttribute('dst_other_filter_action_drop');
  }
  public set dstOtherFilterActionDrop(value: number) {
    this._dstOtherFilterActionDrop = value;
  }
  public resetDstOtherFilterActionDrop() {
    this._dstOtherFilterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstOtherFilterActionDropInput() {
    return this._dstOtherFilterActionDrop;
  }

  // dst_other_filter_action_whitelist - computed: false, optional: true, required: false
  private _dstOtherFilterActionWhitelist?: number; 
  public get dstOtherFilterActionWhitelist() {
    return this.getNumberAttribute('dst_other_filter_action_whitelist');
  }
  public set dstOtherFilterActionWhitelist(value: number) {
    this._dstOtherFilterActionWhitelist = value;
  }
  public resetDstOtherFilterActionWhitelist() {
    this._dstOtherFilterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstOtherFilterActionWhitelistInput() {
    return this._dstOtherFilterActionWhitelist;
  }

  // dst_other_filter_match - computed: false, optional: true, required: false
  private _dstOtherFilterMatch?: number; 
  public get dstOtherFilterMatch() {
    return this.getNumberAttribute('dst_other_filter_match');
  }
  public set dstOtherFilterMatch(value: number) {
    this._dstOtherFilterMatch = value;
  }
  public resetDstOtherFilterMatch() {
    this._dstOtherFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstOtherFilterMatchInput() {
    return this._dstOtherFilterMatch;
  }

  // dst_other_filter_not_match - computed: false, optional: true, required: false
  private _dstOtherFilterNotMatch?: number; 
  public get dstOtherFilterNotMatch() {
    return this.getNumberAttribute('dst_other_filter_not_match');
  }
  public set dstOtherFilterNotMatch(value: number) {
    this._dstOtherFilterNotMatch = value;
  }
  public resetDstOtherFilterNotMatch() {
    this._dstOtherFilterNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstOtherFilterNotMatchInput() {
    return this._dstOtherFilterNotMatch;
  }

  // other_any_exceed - computed: false, optional: true, required: false
  private _otherAnyExceed?: number; 
  public get otherAnyExceed() {
    return this.getNumberAttribute('other_any_exceed');
  }
  public set otherAnyExceed(value: number) {
    this._otherAnyExceed = value;
  }
  public resetOtherAnyExceed() {
    this._otherAnyExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherAnyExceedInput() {
    return this._otherAnyExceed;
  }

  // other_drop_bl - computed: false, optional: true, required: false
  private _otherDropBl?: number; 
  public get otherDropBl() {
    return this.getNumberAttribute('other_drop_bl');
  }
  public set otherDropBl(value: number) {
    this._otherDropBl = value;
  }
  public resetOtherDropBl() {
    this._otherDropBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherDropBlInput() {
    return this._otherDropBl;
  }

  // other_drop_black_user_cfg_src - computed: false, optional: true, required: false
  private _otherDropBlackUserCfgSrc?: number; 
  public get otherDropBlackUserCfgSrc() {
    return this.getNumberAttribute('other_drop_black_user_cfg_src');
  }
  public set otherDropBlackUserCfgSrc(value: number) {
    this._otherDropBlackUserCfgSrc = value;
  }
  public resetOtherDropBlackUserCfgSrc() {
    this._otherDropBlackUserCfgSrc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherDropBlackUserCfgSrcInput() {
    return this._otherDropBlackUserCfgSrc;
  }

  // other_drop_black_user_cfg_src_dst - computed: false, optional: true, required: false
  private _otherDropBlackUserCfgSrcDst?: number; 
  public get otherDropBlackUserCfgSrcDst() {
    return this.getNumberAttribute('other_drop_black_user_cfg_src_dst');
  }
  public set otherDropBlackUserCfgSrcDst(value: number) {
    this._otherDropBlackUserCfgSrcDst = value;
  }
  public resetOtherDropBlackUserCfgSrcDst() {
    this._otherDropBlackUserCfgSrcDst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherDropBlackUserCfgSrcDstInput() {
    return this._otherDropBlackUserCfgSrcDst;
  }

  // other_dst_drop - computed: false, optional: true, required: false
  private _otherDstDrop?: number; 
  public get otherDstDrop() {
    return this.getNumberAttribute('other_dst_drop');
  }
  public set otherDstDrop(value: number) {
    this._otherDstDrop = value;
  }
  public resetOtherDstDrop() {
    this._otherDstDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherDstDropInput() {
    return this._otherDstDrop;
  }

  // other_frag_drop - computed: false, optional: true, required: false
  private _otherFragDrop?: number; 
  public get otherFragDrop() {
    return this.getNumberAttribute('other_frag_drop');
  }
  public set otherFragDrop(value: number) {
    this._otherFragDrop = value;
  }
  public resetOtherFragDrop() {
    this._otherFragDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherFragDropInput() {
    return this._otherFragDrop;
  }

  // other_frag_rcvd - computed: false, optional: true, required: false
  private _otherFragRcvd?: number; 
  public get otherFragRcvd() {
    return this.getNumberAttribute('other_frag_rcvd');
  }
  public set otherFragRcvd(value: number) {
    this._otherFragRcvd = value;
  }
  public resetOtherFragRcvd() {
    this._otherFragRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherFragRcvdInput() {
    return this._otherFragRcvd;
  }

  // other_receive - computed: false, optional: true, required: false
  private _otherReceive?: number; 
  public get otherReceive() {
    return this.getNumberAttribute('other_receive');
  }
  public set otherReceive(value: number) {
    this._otherReceive = value;
  }
  public resetOtherReceive() {
    this._otherReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherReceiveInput() {
    return this._otherReceive;
  }

  // other_src_drop - computed: false, optional: true, required: false
  private _otherSrcDrop?: number; 
  public get otherSrcDrop() {
    return this.getNumberAttribute('other_src_drop');
  }
  public set otherSrcDrop(value: number) {
    this._otherSrcDrop = value;
  }
  public resetOtherSrcDrop() {
    this._otherSrcDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherSrcDropInput() {
    return this._otherSrcDrop;
  }

  // other_src_dst_drop - computed: false, optional: true, required: false
  private _otherSrcDstDrop?: number; 
  public get otherSrcDstDrop() {
    return this.getNumberAttribute('other_src_dst_drop');
  }
  public set otherSrcDstDrop(value: number) {
    this._otherSrcDstDrop = value;
  }
  public resetOtherSrcDstDrop() {
    this._otherSrcDstDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherSrcDstDropInput() {
    return this._otherSrcDstDrop;
  }

  // other_total_bytes_drop - computed: false, optional: true, required: false
  private _otherTotalBytesDrop?: number; 
  public get otherTotalBytesDrop() {
    return this.getNumberAttribute('other_total_bytes_drop');
  }
  public set otherTotalBytesDrop(value: number) {
    this._otherTotalBytesDrop = value;
  }
  public resetOtherTotalBytesDrop() {
    this._otherTotalBytesDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherTotalBytesDropInput() {
    return this._otherTotalBytesDrop;
  }

  // other_total_bytes_rcv - computed: false, optional: true, required: false
  private _otherTotalBytesRcv?: number; 
  public get otherTotalBytesRcv() {
    return this.getNumberAttribute('other_total_bytes_rcv');
  }
  public set otherTotalBytesRcv(value: number) {
    this._otherTotalBytesRcv = value;
  }
  public resetOtherTotalBytesRcv() {
    this._otherTotalBytesRcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherTotalBytesRcvInput() {
    return this._otherTotalBytesRcv;
  }

  // other_total_drop - computed: false, optional: true, required: false
  private _otherTotalDrop?: number; 
  public get otherTotalDrop() {
    return this.getNumberAttribute('other_total_drop');
  }
  public set otherTotalDrop(value: number) {
    this._otherTotalDrop = value;
  }
  public resetOtherTotalDrop() {
    this._otherTotalDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherTotalDropInput() {
    return this._otherTotalDrop;
  }

  // src_dst_other_filter_action_blacklist - computed: false, optional: true, required: false
  private _srcDstOtherFilterActionBlacklist?: number; 
  public get srcDstOtherFilterActionBlacklist() {
    return this.getNumberAttribute('src_dst_other_filter_action_blacklist');
  }
  public set srcDstOtherFilterActionBlacklist(value: number) {
    this._srcDstOtherFilterActionBlacklist = value;
  }
  public resetSrcDstOtherFilterActionBlacklist() {
    this._srcDstOtherFilterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstOtherFilterActionBlacklistInput() {
    return this._srcDstOtherFilterActionBlacklist;
  }

  // src_dst_other_filter_action_default_pass - computed: false, optional: true, required: false
  private _srcDstOtherFilterActionDefaultPass?: number; 
  public get srcDstOtherFilterActionDefaultPass() {
    return this.getNumberAttribute('src_dst_other_filter_action_default_pass');
  }
  public set srcDstOtherFilterActionDefaultPass(value: number) {
    this._srcDstOtherFilterActionDefaultPass = value;
  }
  public resetSrcDstOtherFilterActionDefaultPass() {
    this._srcDstOtherFilterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstOtherFilterActionDefaultPassInput() {
    return this._srcDstOtherFilterActionDefaultPass;
  }

  // src_dst_other_filter_action_drop - computed: false, optional: true, required: false
  private _srcDstOtherFilterActionDrop?: number; 
  public get srcDstOtherFilterActionDrop() {
    return this.getNumberAttribute('src_dst_other_filter_action_drop');
  }
  public set srcDstOtherFilterActionDrop(value: number) {
    this._srcDstOtherFilterActionDrop = value;
  }
  public resetSrcDstOtherFilterActionDrop() {
    this._srcDstOtherFilterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstOtherFilterActionDropInput() {
    return this._srcDstOtherFilterActionDrop;
  }

  // src_dst_other_filter_action_whitelist - computed: false, optional: true, required: false
  private _srcDstOtherFilterActionWhitelist?: number; 
  public get srcDstOtherFilterActionWhitelist() {
    return this.getNumberAttribute('src_dst_other_filter_action_whitelist');
  }
  public set srcDstOtherFilterActionWhitelist(value: number) {
    this._srcDstOtherFilterActionWhitelist = value;
  }
  public resetSrcDstOtherFilterActionWhitelist() {
    this._srcDstOtherFilterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstOtherFilterActionWhitelistInput() {
    return this._srcDstOtherFilterActionWhitelist;
  }

  // src_dst_other_filter_match - computed: false, optional: true, required: false
  private _srcDstOtherFilterMatch?: number; 
  public get srcDstOtherFilterMatch() {
    return this.getNumberAttribute('src_dst_other_filter_match');
  }
  public set srcDstOtherFilterMatch(value: number) {
    this._srcDstOtherFilterMatch = value;
  }
  public resetSrcDstOtherFilterMatch() {
    this._srcDstOtherFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstOtherFilterMatchInput() {
    return this._srcDstOtherFilterMatch;
  }

  // src_dst_other_filter_not_match - computed: false, optional: true, required: false
  private _srcDstOtherFilterNotMatch?: number; 
  public get srcDstOtherFilterNotMatch() {
    return this.getNumberAttribute('src_dst_other_filter_not_match');
  }
  public set srcDstOtherFilterNotMatch(value: number) {
    this._srcDstOtherFilterNotMatch = value;
  }
  public resetSrcDstOtherFilterNotMatch() {
    this._srcDstOtherFilterNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstOtherFilterNotMatchInput() {
    return this._srcDstOtherFilterNotMatch;
  }

  // src_other_filter_action_blacklist - computed: false, optional: true, required: false
  private _srcOtherFilterActionBlacklist?: number; 
  public get srcOtherFilterActionBlacklist() {
    return this.getNumberAttribute('src_other_filter_action_blacklist');
  }
  public set srcOtherFilterActionBlacklist(value: number) {
    this._srcOtherFilterActionBlacklist = value;
  }
  public resetSrcOtherFilterActionBlacklist() {
    this._srcOtherFilterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcOtherFilterActionBlacklistInput() {
    return this._srcOtherFilterActionBlacklist;
  }

  // src_other_filter_action_default_pass - computed: false, optional: true, required: false
  private _srcOtherFilterActionDefaultPass?: number; 
  public get srcOtherFilterActionDefaultPass() {
    return this.getNumberAttribute('src_other_filter_action_default_pass');
  }
  public set srcOtherFilterActionDefaultPass(value: number) {
    this._srcOtherFilterActionDefaultPass = value;
  }
  public resetSrcOtherFilterActionDefaultPass() {
    this._srcOtherFilterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcOtherFilterActionDefaultPassInput() {
    return this._srcOtherFilterActionDefaultPass;
  }

  // src_other_filter_action_drop - computed: false, optional: true, required: false
  private _srcOtherFilterActionDrop?: number; 
  public get srcOtherFilterActionDrop() {
    return this.getNumberAttribute('src_other_filter_action_drop');
  }
  public set srcOtherFilterActionDrop(value: number) {
    this._srcOtherFilterActionDrop = value;
  }
  public resetSrcOtherFilterActionDrop() {
    this._srcOtherFilterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcOtherFilterActionDropInput() {
    return this._srcOtherFilterActionDrop;
  }

  // src_other_filter_action_whitelist - computed: false, optional: true, required: false
  private _srcOtherFilterActionWhitelist?: number; 
  public get srcOtherFilterActionWhitelist() {
    return this.getNumberAttribute('src_other_filter_action_whitelist');
  }
  public set srcOtherFilterActionWhitelist(value: number) {
    this._srcOtherFilterActionWhitelist = value;
  }
  public resetSrcOtherFilterActionWhitelist() {
    this._srcOtherFilterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcOtherFilterActionWhitelistInput() {
    return this._srcOtherFilterActionWhitelist;
  }

  // src_other_filter_match - computed: false, optional: true, required: false
  private _srcOtherFilterMatch?: number; 
  public get srcOtherFilterMatch() {
    return this.getNumberAttribute('src_other_filter_match');
  }
  public set srcOtherFilterMatch(value: number) {
    this._srcOtherFilterMatch = value;
  }
  public resetSrcOtherFilterMatch() {
    this._srcOtherFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcOtherFilterMatchInput() {
    return this._srcOtherFilterMatch;
  }

  // src_other_filter_not_match - computed: false, optional: true, required: false
  private _srcOtherFilterNotMatch?: number; 
  public get srcOtherFilterNotMatch() {
    return this.getNumberAttribute('src_other_filter_not_match');
  }
  public set srcOtherFilterNotMatch(value: number) {
    this._srcOtherFilterNotMatch = value;
  }
  public resetSrcOtherFilterNotMatch() {
    this._srcOtherFilterNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcOtherFilterNotMatchInput() {
    return this._srcOtherFilterNotMatch;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats thunder_ddos_l4_other_stats}
*/
export class DataThunderDdosL4OtherStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_l4_other_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosL4OtherStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosL4OtherStats to import
  * @param importFromId The id of the existing DataThunderDdosL4OtherStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosL4OtherStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_l4_other_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l4_other_stats thunder_ddos_l4_other_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosL4OtherStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosL4OtherStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_l4_other_stats',
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
  private _stats = new DataThunderDdosL4OtherStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosL4OtherStatsStats) {
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
      stats: dataThunderDdosL4OtherStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderDdosL4OtherStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosL4OtherStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
