// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosTableStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#id DataThunderDdosTableStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#stats DataThunderDdosTableStats#stats}
  */
  readonly stats?: DataThunderDdosTableStatsStats;
}
export interface DataThunderDdosTableStatsStats {
  /**
  * Dst Entry Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#dst_black_list DataThunderDdosTableStats#dst_black_list}
  */
  readonly dstBlackList?: number;
  /**
  * Dst Entry Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#dst_entry_aged DataThunderDdosTableStats#dst_entry_aged}
  */
  readonly dstEntryAged?: number;
  /**
  * Dst Entry Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#dst_hit DataThunderDdosTableStats#dst_hit}
  */
  readonly dstHit?: number;
  /**
  * Dst Entry Learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#dst_learn DataThunderDdosTableStats#dst_learn}
  */
  readonly dstLearn?: number;
  /**
  * Dst Dynamic Entry Count Overflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#dst_learning_thre_exceed DataThunderDdosTableStats#dst_learning_thre_exceed}
  */
  readonly dstLearningThreExceed?: number;
  /**
  * Dst Entry Missed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#dst_miss DataThunderDdosTableStats#dst_miss}
  */
  readonly dstMiss?: number;
  /**
  * Dst Overflow Policy Hit At Learning Stage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#dst_over_thre_policy_at_learning DataThunderDdosTableStats#dst_over_thre_policy_at_learning}
  */
  readonly dstOverThrePolicyAtLearning?: number;
  /**
  * Dst Entry Whitelisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#dst_white_list DataThunderDdosTableStats#dst_white_list}
  */
  readonly dstWhiteList?: number;
  /**
  * Out of Entry Extension Memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#entry_ext_oom DataThunderDdosTableStats#entry_ext_oom}
  */
  readonly entryExtOom?: number;
  /**
  * Out of Entry Memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#entry_oom DataThunderDdosTableStats#entry_oom}
  */
  readonly entryOom?: number;
  /**
  * Src Entry Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#src_black_list DataThunderDdosTableStats#src_black_list}
  */
  readonly srcBlackList?: number;
  /**
  * SrcDst Entry Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#src_dst_black_list DataThunderDdosTableStats#src_dst_black_list}
  */
  readonly srcDstBlackList?: number;
  /**
  * SrcDst Class-List Overflow Policy Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#src_dst_classlist_overflow_policy_at_learning DataThunderDdosTableStats#src_dst_classlist_overflow_policy_at_learning}
  */
  readonly srcDstClasslistOverflowPolicyAtLearning?: number;
  /**
  * SrcDst Entry Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#src_dst_entry_aged DataThunderDdosTableStats#src_dst_entry_aged}
  */
  readonly srcDstEntryAged?: number;
  /**
  * SrcDst Entry Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#src_dst_hit DataThunderDdosTableStats#src_dst_hit}
  */
  readonly srcDstHit?: number;
  /**
  * SrcDst Entry Learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#src_dst_learn DataThunderDdosTableStats#src_dst_learn}
  */
  readonly srcDstLearn?: number;
  /**
  * SrcDst Dynamic Entry Count Overflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#src_dst_learning_thre_exceed DataThunderDdosTableStats#src_dst_learning_thre_exceed}
  */
  readonly srcDstLearningThreExceed?: number;
  /**
  * SrcDst Entry Missed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#src_dst_miss DataThunderDdosTableStats#src_dst_miss}
  */
  readonly srcDstMiss?: number;
  /**
  * SrcDst Overflow Policy Hit At Learning Stage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#src_dst_over_thre_policy_at_learning DataThunderDdosTableStats#src_dst_over_thre_policy_at_learning}
  */
  readonly srcDstOverThrePolicyAtLearning?: number;
  /**
  * SrcDst Overflow Policy Hit At Lookup Stage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#src_dst_over_thre_policy_at_lookup DataThunderDdosTableStats#src_dst_over_thre_policy_at_lookup}
  */
  readonly srcDstOverThrePolicyAtLookup?: number;
  /**
  * SrcDst Entry Whitelisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#src_dst_white_list DataThunderDdosTableStats#src_dst_white_list}
  */
  readonly srcDstWhiteList?: number;
  /**
  * Src Entry Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#src_entry_aged DataThunderDdosTableStats#src_entry_aged}
  */
  readonly srcEntryAged?: number;
  /**
  * Src Entry Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#src_hit DataThunderDdosTableStats#src_hit}
  */
  readonly srcHit?: number;
  /**
  * Src Entry Learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#src_learn DataThunderDdosTableStats#src_learn}
  */
  readonly srcLearn?: number;
  /**
  * Src Dynamic Entry Count Overflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#src_learning_thre_exceed DataThunderDdosTableStats#src_learning_thre_exceed}
  */
  readonly srcLearningThreExceed?: number;
  /**
  * Src Entry Missed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#src_miss DataThunderDdosTableStats#src_miss}
  */
  readonly srcMiss?: number;
  /**
  * Src Overflow Policy Hit At Learning Stage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#src_over_thre_policy_at_learning DataThunderDdosTableStats#src_over_thre_policy_at_learning}
  */
  readonly srcOverThrePolicyAtLearning?: number;
  /**
  * Src Overflow Policy Hit At Lookup Stage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#src_over_thre_policy_at_lookup DataThunderDdosTableStats#src_over_thre_policy_at_lookup}
  */
  readonly srcOverThrePolicyAtLookup?: number;
  /**
  * Src Entry Whitelisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#src_white_list DataThunderDdosTableStats#src_white_list}
  */
  readonly srcWhiteList?: number;
  /**
  * SrcZoneService Entry Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#src_zone_service_black_list DataThunderDdosTableStats#src_zone_service_black_list}
  */
  readonly srcZoneServiceBlackList?: number;
  /**
  * SrcZoneService Class-List Overflow Policy Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#src_zone_service_classlist_overflow_policy_at_learning DataThunderDdosTableStats#src_zone_service_classlist_overflow_policy_at_learning}
  */
  readonly srcZoneServiceClasslistOverflowPolicyAtLearning?: number;
  /**
  * SrcZoneService Entry Aged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#src_zone_service_entry_aged DataThunderDdosTableStats#src_zone_service_entry_aged}
  */
  readonly srcZoneServiceEntryAged?: number;
  /**
  * SrcZoneService Entry Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#src_zone_service_hit DataThunderDdosTableStats#src_zone_service_hit}
  */
  readonly srcZoneServiceHit?: number;
  /**
  * SrcZoneService Entry Learned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#src_zone_service_learn DataThunderDdosTableStats#src_zone_service_learn}
  */
  readonly srcZoneServiceLearn?: number;
  /**
  * SrcZoneService Dynamic Entry Count Overflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#src_zone_service_learning_thre_exceed DataThunderDdosTableStats#src_zone_service_learning_thre_exceed}
  */
  readonly srcZoneServiceLearningThreExceed?: number;
  /**
  * SrcZoneService Entry Missed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#src_zone_service_miss DataThunderDdosTableStats#src_zone_service_miss}
  */
  readonly srcZoneServiceMiss?: number;
  /**
  * SrcZoneService Overflow Policy Learning Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#src_zone_service_over_thre_policy_at_learning DataThunderDdosTableStats#src_zone_service_over_thre_policy_at_learning}
  */
  readonly srcZoneServiceOverThrePolicyAtLearning?: number;
  /**
  * SrcZoneService Overflow Policy Lookup Hit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#src_zone_service_over_thre_policy_at_lookup DataThunderDdosTableStats#src_zone_service_over_thre_policy_at_lookup}
  */
  readonly srcZoneServiceOverThrePolicyAtLookup?: number;
  /**
  * SrcZoneService Entry Whitelisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#src_zone_service_white_list DataThunderDdosTableStats#src_zone_service_white_list}
  */
  readonly srcZoneServiceWhiteList?: number;
  /**
  * From-l3-peer: Zone Entry Deleted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#telem_entry_cleared DataThunderDdosTableStats#telem_entry_cleared}
  */
  readonly telemEntryCleared?: number;
  /**
  * From-l3-peer: Zone Entry Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#telem_entry_created DataThunderDdosTableStats#telem_entry_created}
  */
  readonly telemEntryCreated?: number;
  /**
  * From-l3-peer: Conflict with Static Entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#telem_err_conflict_with_static DataThunderDdosTableStats#telem_err_conflict_with_static}
  */
  readonly telemErrConflictWithStatic?: number;
  /**
  * From-l3-peer: Zone Entry Create Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#telem_err_fail_to_create DataThunderDdosTableStats#telem_err_fail_to_create}
  */
  readonly telemErrFailToCreate?: number;
  /**
  * From-l3-peer: Zone Entry Delete Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#telem_err_fail_to_delete DataThunderDdosTableStats#telem_err_fail_to_delete}
  */
  readonly telemErrFailToDelete?: number;
  /**
  * From-l3-peer: Misc Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#telem_err_misc DataThunderDdosTableStats#telem_err_misc}
  */
  readonly telemErrMisc?: number;
  /**
  * From-l3-peer: Zone Entry Pre-exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#telem_err_telem_entry_pre_exist DataThunderDdosTableStats#telem_err_telem_entry_pre_exist}
  */
  readonly telemErrTelemEntryPreExist?: number;
  /**
  * From-l3-peer: Route-add Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#telem_route_add_rcvd DataThunderDdosTableStats#telem_route_add_rcvd}
  */
  readonly telemRouteAddRcvd?: number;
  /**
  * From-l3-peer: Route-del Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#telem_route_del_rcvd DataThunderDdosTableStats#telem_route_del_rcvd}
  */
  readonly telemRouteDelRcvd?: number;
}

export function dataThunderDdosTableStatsStatsToTerraform(struct?: DataThunderDdosTableStatsStatsOutputReference | DataThunderDdosTableStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_black_list: cdktf.numberToTerraform(struct!.dstBlackList),
    dst_entry_aged: cdktf.numberToTerraform(struct!.dstEntryAged),
    dst_hit: cdktf.numberToTerraform(struct!.dstHit),
    dst_learn: cdktf.numberToTerraform(struct!.dstLearn),
    dst_learning_thre_exceed: cdktf.numberToTerraform(struct!.dstLearningThreExceed),
    dst_miss: cdktf.numberToTerraform(struct!.dstMiss),
    dst_over_thre_policy_at_learning: cdktf.numberToTerraform(struct!.dstOverThrePolicyAtLearning),
    dst_white_list: cdktf.numberToTerraform(struct!.dstWhiteList),
    entry_ext_oom: cdktf.numberToTerraform(struct!.entryExtOom),
    entry_oom: cdktf.numberToTerraform(struct!.entryOom),
    src_black_list: cdktf.numberToTerraform(struct!.srcBlackList),
    src_dst_black_list: cdktf.numberToTerraform(struct!.srcDstBlackList),
    src_dst_classlist_overflow_policy_at_learning: cdktf.numberToTerraform(struct!.srcDstClasslistOverflowPolicyAtLearning),
    src_dst_entry_aged: cdktf.numberToTerraform(struct!.srcDstEntryAged),
    src_dst_hit: cdktf.numberToTerraform(struct!.srcDstHit),
    src_dst_learn: cdktf.numberToTerraform(struct!.srcDstLearn),
    src_dst_learning_thre_exceed: cdktf.numberToTerraform(struct!.srcDstLearningThreExceed),
    src_dst_miss: cdktf.numberToTerraform(struct!.srcDstMiss),
    src_dst_over_thre_policy_at_learning: cdktf.numberToTerraform(struct!.srcDstOverThrePolicyAtLearning),
    src_dst_over_thre_policy_at_lookup: cdktf.numberToTerraform(struct!.srcDstOverThrePolicyAtLookup),
    src_dst_white_list: cdktf.numberToTerraform(struct!.srcDstWhiteList),
    src_entry_aged: cdktf.numberToTerraform(struct!.srcEntryAged),
    src_hit: cdktf.numberToTerraform(struct!.srcHit),
    src_learn: cdktf.numberToTerraform(struct!.srcLearn),
    src_learning_thre_exceed: cdktf.numberToTerraform(struct!.srcLearningThreExceed),
    src_miss: cdktf.numberToTerraform(struct!.srcMiss),
    src_over_thre_policy_at_learning: cdktf.numberToTerraform(struct!.srcOverThrePolicyAtLearning),
    src_over_thre_policy_at_lookup: cdktf.numberToTerraform(struct!.srcOverThrePolicyAtLookup),
    src_white_list: cdktf.numberToTerraform(struct!.srcWhiteList),
    src_zone_service_black_list: cdktf.numberToTerraform(struct!.srcZoneServiceBlackList),
    src_zone_service_classlist_overflow_policy_at_learning: cdktf.numberToTerraform(struct!.srcZoneServiceClasslistOverflowPolicyAtLearning),
    src_zone_service_entry_aged: cdktf.numberToTerraform(struct!.srcZoneServiceEntryAged),
    src_zone_service_hit: cdktf.numberToTerraform(struct!.srcZoneServiceHit),
    src_zone_service_learn: cdktf.numberToTerraform(struct!.srcZoneServiceLearn),
    src_zone_service_learning_thre_exceed: cdktf.numberToTerraform(struct!.srcZoneServiceLearningThreExceed),
    src_zone_service_miss: cdktf.numberToTerraform(struct!.srcZoneServiceMiss),
    src_zone_service_over_thre_policy_at_learning: cdktf.numberToTerraform(struct!.srcZoneServiceOverThrePolicyAtLearning),
    src_zone_service_over_thre_policy_at_lookup: cdktf.numberToTerraform(struct!.srcZoneServiceOverThrePolicyAtLookup),
    src_zone_service_white_list: cdktf.numberToTerraform(struct!.srcZoneServiceWhiteList),
    telem_entry_cleared: cdktf.numberToTerraform(struct!.telemEntryCleared),
    telem_entry_created: cdktf.numberToTerraform(struct!.telemEntryCreated),
    telem_err_conflict_with_static: cdktf.numberToTerraform(struct!.telemErrConflictWithStatic),
    telem_err_fail_to_create: cdktf.numberToTerraform(struct!.telemErrFailToCreate),
    telem_err_fail_to_delete: cdktf.numberToTerraform(struct!.telemErrFailToDelete),
    telem_err_misc: cdktf.numberToTerraform(struct!.telemErrMisc),
    telem_err_telem_entry_pre_exist: cdktf.numberToTerraform(struct!.telemErrTelemEntryPreExist),
    telem_route_add_rcvd: cdktf.numberToTerraform(struct!.telemRouteAddRcvd),
    telem_route_del_rcvd: cdktf.numberToTerraform(struct!.telemRouteDelRcvd),
  }
}


export function dataThunderDdosTableStatsStatsToHclTerraform(struct?: DataThunderDdosTableStatsStatsOutputReference | DataThunderDdosTableStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_black_list: {
      value: cdktf.numberToHclTerraform(struct!.dstBlackList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_entry_aged: {
      value: cdktf.numberToHclTerraform(struct!.dstEntryAged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_hit: {
      value: cdktf.numberToHclTerraform(struct!.dstHit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_learn: {
      value: cdktf.numberToHclTerraform(struct!.dstLearn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_learning_thre_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstLearningThreExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_miss: {
      value: cdktf.numberToHclTerraform(struct!.dstMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_over_thre_policy_at_learning: {
      value: cdktf.numberToHclTerraform(struct!.dstOverThrePolicyAtLearning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_white_list: {
      value: cdktf.numberToHclTerraform(struct!.dstWhiteList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_ext_oom: {
      value: cdktf.numberToHclTerraform(struct!.entryExtOom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_oom: {
      value: cdktf.numberToHclTerraform(struct!.entryOom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_black_list: {
      value: cdktf.numberToHclTerraform(struct!.srcBlackList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_black_list: {
      value: cdktf.numberToHclTerraform(struct!.srcDstBlackList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_classlist_overflow_policy_at_learning: {
      value: cdktf.numberToHclTerraform(struct!.srcDstClasslistOverflowPolicyAtLearning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_entry_aged: {
      value: cdktf.numberToHclTerraform(struct!.srcDstEntryAged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_hit: {
      value: cdktf.numberToHclTerraform(struct!.srcDstHit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_learn: {
      value: cdktf.numberToHclTerraform(struct!.srcDstLearn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_learning_thre_exceed: {
      value: cdktf.numberToHclTerraform(struct!.srcDstLearningThreExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_miss: {
      value: cdktf.numberToHclTerraform(struct!.srcDstMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_over_thre_policy_at_learning: {
      value: cdktf.numberToHclTerraform(struct!.srcDstOverThrePolicyAtLearning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_over_thre_policy_at_lookup: {
      value: cdktf.numberToHclTerraform(struct!.srcDstOverThrePolicyAtLookup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_white_list: {
      value: cdktf.numberToHclTerraform(struct!.srcDstWhiteList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_entry_aged: {
      value: cdktf.numberToHclTerraform(struct!.srcEntryAged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_hit: {
      value: cdktf.numberToHclTerraform(struct!.srcHit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_learn: {
      value: cdktf.numberToHclTerraform(struct!.srcLearn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_learning_thre_exceed: {
      value: cdktf.numberToHclTerraform(struct!.srcLearningThreExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_miss: {
      value: cdktf.numberToHclTerraform(struct!.srcMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_over_thre_policy_at_learning: {
      value: cdktf.numberToHclTerraform(struct!.srcOverThrePolicyAtLearning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_over_thre_policy_at_lookup: {
      value: cdktf.numberToHclTerraform(struct!.srcOverThrePolicyAtLookup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_white_list: {
      value: cdktf.numberToHclTerraform(struct!.srcWhiteList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_zone_service_black_list: {
      value: cdktf.numberToHclTerraform(struct!.srcZoneServiceBlackList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_zone_service_classlist_overflow_policy_at_learning: {
      value: cdktf.numberToHclTerraform(struct!.srcZoneServiceClasslistOverflowPolicyAtLearning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_zone_service_entry_aged: {
      value: cdktf.numberToHclTerraform(struct!.srcZoneServiceEntryAged),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_zone_service_hit: {
      value: cdktf.numberToHclTerraform(struct!.srcZoneServiceHit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_zone_service_learn: {
      value: cdktf.numberToHclTerraform(struct!.srcZoneServiceLearn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_zone_service_learning_thre_exceed: {
      value: cdktf.numberToHclTerraform(struct!.srcZoneServiceLearningThreExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_zone_service_miss: {
      value: cdktf.numberToHclTerraform(struct!.srcZoneServiceMiss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_zone_service_over_thre_policy_at_learning: {
      value: cdktf.numberToHclTerraform(struct!.srcZoneServiceOverThrePolicyAtLearning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_zone_service_over_thre_policy_at_lookup: {
      value: cdktf.numberToHclTerraform(struct!.srcZoneServiceOverThrePolicyAtLookup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_zone_service_white_list: {
      value: cdktf.numberToHclTerraform(struct!.srcZoneServiceWhiteList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    telem_entry_cleared: {
      value: cdktf.numberToHclTerraform(struct!.telemEntryCleared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    telem_entry_created: {
      value: cdktf.numberToHclTerraform(struct!.telemEntryCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    telem_err_conflict_with_static: {
      value: cdktf.numberToHclTerraform(struct!.telemErrConflictWithStatic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    telem_err_fail_to_create: {
      value: cdktf.numberToHclTerraform(struct!.telemErrFailToCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    telem_err_fail_to_delete: {
      value: cdktf.numberToHclTerraform(struct!.telemErrFailToDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    telem_err_misc: {
      value: cdktf.numberToHclTerraform(struct!.telemErrMisc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    telem_err_telem_entry_pre_exist: {
      value: cdktf.numberToHclTerraform(struct!.telemErrTelemEntryPreExist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    telem_route_add_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.telemRouteAddRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    telem_route_del_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.telemRouteDelRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosTableStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosTableStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstBlackList !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstBlackList = this._dstBlackList;
    }
    if (this._dstEntryAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEntryAged = this._dstEntryAged;
    }
    if (this._dstHit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstHit = this._dstHit;
    }
    if (this._dstLearn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstLearn = this._dstLearn;
    }
    if (this._dstLearningThreExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstLearningThreExceed = this._dstLearningThreExceed;
    }
    if (this._dstMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstMiss = this._dstMiss;
    }
    if (this._dstOverThrePolicyAtLearning !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstOverThrePolicyAtLearning = this._dstOverThrePolicyAtLearning;
    }
    if (this._dstWhiteList !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstWhiteList = this._dstWhiteList;
    }
    if (this._entryExtOom !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryExtOom = this._entryExtOom;
    }
    if (this._entryOom !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryOom = this._entryOom;
    }
    if (this._srcBlackList !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcBlackList = this._srcBlackList;
    }
    if (this._srcDstBlackList !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstBlackList = this._srcDstBlackList;
    }
    if (this._srcDstClasslistOverflowPolicyAtLearning !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstClasslistOverflowPolicyAtLearning = this._srcDstClasslistOverflowPolicyAtLearning;
    }
    if (this._srcDstEntryAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstEntryAged = this._srcDstEntryAged;
    }
    if (this._srcDstHit !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstHit = this._srcDstHit;
    }
    if (this._srcDstLearn !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstLearn = this._srcDstLearn;
    }
    if (this._srcDstLearningThreExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstLearningThreExceed = this._srcDstLearningThreExceed;
    }
    if (this._srcDstMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstMiss = this._srcDstMiss;
    }
    if (this._srcDstOverThrePolicyAtLearning !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstOverThrePolicyAtLearning = this._srcDstOverThrePolicyAtLearning;
    }
    if (this._srcDstOverThrePolicyAtLookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstOverThrePolicyAtLookup = this._srcDstOverThrePolicyAtLookup;
    }
    if (this._srcDstWhiteList !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstWhiteList = this._srcDstWhiteList;
    }
    if (this._srcEntryAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcEntryAged = this._srcEntryAged;
    }
    if (this._srcHit !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHit = this._srcHit;
    }
    if (this._srcLearn !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcLearn = this._srcLearn;
    }
    if (this._srcLearningThreExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcLearningThreExceed = this._srcLearningThreExceed;
    }
    if (this._srcMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcMiss = this._srcMiss;
    }
    if (this._srcOverThrePolicyAtLearning !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcOverThrePolicyAtLearning = this._srcOverThrePolicyAtLearning;
    }
    if (this._srcOverThrePolicyAtLookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcOverThrePolicyAtLookup = this._srcOverThrePolicyAtLookup;
    }
    if (this._srcWhiteList !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcWhiteList = this._srcWhiteList;
    }
    if (this._srcZoneServiceBlackList !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcZoneServiceBlackList = this._srcZoneServiceBlackList;
    }
    if (this._srcZoneServiceClasslistOverflowPolicyAtLearning !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcZoneServiceClasslistOverflowPolicyAtLearning = this._srcZoneServiceClasslistOverflowPolicyAtLearning;
    }
    if (this._srcZoneServiceEntryAged !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcZoneServiceEntryAged = this._srcZoneServiceEntryAged;
    }
    if (this._srcZoneServiceHit !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcZoneServiceHit = this._srcZoneServiceHit;
    }
    if (this._srcZoneServiceLearn !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcZoneServiceLearn = this._srcZoneServiceLearn;
    }
    if (this._srcZoneServiceLearningThreExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcZoneServiceLearningThreExceed = this._srcZoneServiceLearningThreExceed;
    }
    if (this._srcZoneServiceMiss !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcZoneServiceMiss = this._srcZoneServiceMiss;
    }
    if (this._srcZoneServiceOverThrePolicyAtLearning !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcZoneServiceOverThrePolicyAtLearning = this._srcZoneServiceOverThrePolicyAtLearning;
    }
    if (this._srcZoneServiceOverThrePolicyAtLookup !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcZoneServiceOverThrePolicyAtLookup = this._srcZoneServiceOverThrePolicyAtLookup;
    }
    if (this._srcZoneServiceWhiteList !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcZoneServiceWhiteList = this._srcZoneServiceWhiteList;
    }
    if (this._telemEntryCleared !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemEntryCleared = this._telemEntryCleared;
    }
    if (this._telemEntryCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemEntryCreated = this._telemEntryCreated;
    }
    if (this._telemErrConflictWithStatic !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemErrConflictWithStatic = this._telemErrConflictWithStatic;
    }
    if (this._telemErrFailToCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemErrFailToCreate = this._telemErrFailToCreate;
    }
    if (this._telemErrFailToDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemErrFailToDelete = this._telemErrFailToDelete;
    }
    if (this._telemErrMisc !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemErrMisc = this._telemErrMisc;
    }
    if (this._telemErrTelemEntryPreExist !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemErrTelemEntryPreExist = this._telemErrTelemEntryPreExist;
    }
    if (this._telemRouteAddRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemRouteAddRcvd = this._telemRouteAddRcvd;
    }
    if (this._telemRouteDelRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemRouteDelRcvd = this._telemRouteDelRcvd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosTableStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstBlackList = undefined;
      this._dstEntryAged = undefined;
      this._dstHit = undefined;
      this._dstLearn = undefined;
      this._dstLearningThreExceed = undefined;
      this._dstMiss = undefined;
      this._dstOverThrePolicyAtLearning = undefined;
      this._dstWhiteList = undefined;
      this._entryExtOom = undefined;
      this._entryOom = undefined;
      this._srcBlackList = undefined;
      this._srcDstBlackList = undefined;
      this._srcDstClasslistOverflowPolicyAtLearning = undefined;
      this._srcDstEntryAged = undefined;
      this._srcDstHit = undefined;
      this._srcDstLearn = undefined;
      this._srcDstLearningThreExceed = undefined;
      this._srcDstMiss = undefined;
      this._srcDstOverThrePolicyAtLearning = undefined;
      this._srcDstOverThrePolicyAtLookup = undefined;
      this._srcDstWhiteList = undefined;
      this._srcEntryAged = undefined;
      this._srcHit = undefined;
      this._srcLearn = undefined;
      this._srcLearningThreExceed = undefined;
      this._srcMiss = undefined;
      this._srcOverThrePolicyAtLearning = undefined;
      this._srcOverThrePolicyAtLookup = undefined;
      this._srcWhiteList = undefined;
      this._srcZoneServiceBlackList = undefined;
      this._srcZoneServiceClasslistOverflowPolicyAtLearning = undefined;
      this._srcZoneServiceEntryAged = undefined;
      this._srcZoneServiceHit = undefined;
      this._srcZoneServiceLearn = undefined;
      this._srcZoneServiceLearningThreExceed = undefined;
      this._srcZoneServiceMiss = undefined;
      this._srcZoneServiceOverThrePolicyAtLearning = undefined;
      this._srcZoneServiceOverThrePolicyAtLookup = undefined;
      this._srcZoneServiceWhiteList = undefined;
      this._telemEntryCleared = undefined;
      this._telemEntryCreated = undefined;
      this._telemErrConflictWithStatic = undefined;
      this._telemErrFailToCreate = undefined;
      this._telemErrFailToDelete = undefined;
      this._telemErrMisc = undefined;
      this._telemErrTelemEntryPreExist = undefined;
      this._telemRouteAddRcvd = undefined;
      this._telemRouteDelRcvd = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstBlackList = value.dstBlackList;
      this._dstEntryAged = value.dstEntryAged;
      this._dstHit = value.dstHit;
      this._dstLearn = value.dstLearn;
      this._dstLearningThreExceed = value.dstLearningThreExceed;
      this._dstMiss = value.dstMiss;
      this._dstOverThrePolicyAtLearning = value.dstOverThrePolicyAtLearning;
      this._dstWhiteList = value.dstWhiteList;
      this._entryExtOom = value.entryExtOom;
      this._entryOom = value.entryOom;
      this._srcBlackList = value.srcBlackList;
      this._srcDstBlackList = value.srcDstBlackList;
      this._srcDstClasslistOverflowPolicyAtLearning = value.srcDstClasslistOverflowPolicyAtLearning;
      this._srcDstEntryAged = value.srcDstEntryAged;
      this._srcDstHit = value.srcDstHit;
      this._srcDstLearn = value.srcDstLearn;
      this._srcDstLearningThreExceed = value.srcDstLearningThreExceed;
      this._srcDstMiss = value.srcDstMiss;
      this._srcDstOverThrePolicyAtLearning = value.srcDstOverThrePolicyAtLearning;
      this._srcDstOverThrePolicyAtLookup = value.srcDstOverThrePolicyAtLookup;
      this._srcDstWhiteList = value.srcDstWhiteList;
      this._srcEntryAged = value.srcEntryAged;
      this._srcHit = value.srcHit;
      this._srcLearn = value.srcLearn;
      this._srcLearningThreExceed = value.srcLearningThreExceed;
      this._srcMiss = value.srcMiss;
      this._srcOverThrePolicyAtLearning = value.srcOverThrePolicyAtLearning;
      this._srcOverThrePolicyAtLookup = value.srcOverThrePolicyAtLookup;
      this._srcWhiteList = value.srcWhiteList;
      this._srcZoneServiceBlackList = value.srcZoneServiceBlackList;
      this._srcZoneServiceClasslistOverflowPolicyAtLearning = value.srcZoneServiceClasslistOverflowPolicyAtLearning;
      this._srcZoneServiceEntryAged = value.srcZoneServiceEntryAged;
      this._srcZoneServiceHit = value.srcZoneServiceHit;
      this._srcZoneServiceLearn = value.srcZoneServiceLearn;
      this._srcZoneServiceLearningThreExceed = value.srcZoneServiceLearningThreExceed;
      this._srcZoneServiceMiss = value.srcZoneServiceMiss;
      this._srcZoneServiceOverThrePolicyAtLearning = value.srcZoneServiceOverThrePolicyAtLearning;
      this._srcZoneServiceOverThrePolicyAtLookup = value.srcZoneServiceOverThrePolicyAtLookup;
      this._srcZoneServiceWhiteList = value.srcZoneServiceWhiteList;
      this._telemEntryCleared = value.telemEntryCleared;
      this._telemEntryCreated = value.telemEntryCreated;
      this._telemErrConflictWithStatic = value.telemErrConflictWithStatic;
      this._telemErrFailToCreate = value.telemErrFailToCreate;
      this._telemErrFailToDelete = value.telemErrFailToDelete;
      this._telemErrMisc = value.telemErrMisc;
      this._telemErrTelemEntryPreExist = value.telemErrTelemEntryPreExist;
      this._telemRouteAddRcvd = value.telemRouteAddRcvd;
      this._telemRouteDelRcvd = value.telemRouteDelRcvd;
    }
  }

  // dst_black_list - computed: false, optional: true, required: false
  private _dstBlackList?: number; 
  public get dstBlackList() {
    return this.getNumberAttribute('dst_black_list');
  }
  public set dstBlackList(value: number) {
    this._dstBlackList = value;
  }
  public resetDstBlackList() {
    this._dstBlackList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstBlackListInput() {
    return this._dstBlackList;
  }

  // dst_entry_aged - computed: false, optional: true, required: false
  private _dstEntryAged?: number; 
  public get dstEntryAged() {
    return this.getNumberAttribute('dst_entry_aged');
  }
  public set dstEntryAged(value: number) {
    this._dstEntryAged = value;
  }
  public resetDstEntryAged() {
    this._dstEntryAged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryAgedInput() {
    return this._dstEntryAged;
  }

  // dst_hit - computed: false, optional: true, required: false
  private _dstHit?: number; 
  public get dstHit() {
    return this.getNumberAttribute('dst_hit');
  }
  public set dstHit(value: number) {
    this._dstHit = value;
  }
  public resetDstHit() {
    this._dstHit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstHitInput() {
    return this._dstHit;
  }

  // dst_learn - computed: false, optional: true, required: false
  private _dstLearn?: number; 
  public get dstLearn() {
    return this.getNumberAttribute('dst_learn');
  }
  public set dstLearn(value: number) {
    this._dstLearn = value;
  }
  public resetDstLearn() {
    this._dstLearn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstLearnInput() {
    return this._dstLearn;
  }

  // dst_learning_thre_exceed - computed: false, optional: true, required: false
  private _dstLearningThreExceed?: number; 
  public get dstLearningThreExceed() {
    return this.getNumberAttribute('dst_learning_thre_exceed');
  }
  public set dstLearningThreExceed(value: number) {
    this._dstLearningThreExceed = value;
  }
  public resetDstLearningThreExceed() {
    this._dstLearningThreExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstLearningThreExceedInput() {
    return this._dstLearningThreExceed;
  }

  // dst_miss - computed: false, optional: true, required: false
  private _dstMiss?: number; 
  public get dstMiss() {
    return this.getNumberAttribute('dst_miss');
  }
  public set dstMiss(value: number) {
    this._dstMiss = value;
  }
  public resetDstMiss() {
    this._dstMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstMissInput() {
    return this._dstMiss;
  }

  // dst_over_thre_policy_at_learning - computed: false, optional: true, required: false
  private _dstOverThrePolicyAtLearning?: number; 
  public get dstOverThrePolicyAtLearning() {
    return this.getNumberAttribute('dst_over_thre_policy_at_learning');
  }
  public set dstOverThrePolicyAtLearning(value: number) {
    this._dstOverThrePolicyAtLearning = value;
  }
  public resetDstOverThrePolicyAtLearning() {
    this._dstOverThrePolicyAtLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstOverThrePolicyAtLearningInput() {
    return this._dstOverThrePolicyAtLearning;
  }

  // dst_white_list - computed: false, optional: true, required: false
  private _dstWhiteList?: number; 
  public get dstWhiteList() {
    return this.getNumberAttribute('dst_white_list');
  }
  public set dstWhiteList(value: number) {
    this._dstWhiteList = value;
  }
  public resetDstWhiteList() {
    this._dstWhiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstWhiteListInput() {
    return this._dstWhiteList;
  }

  // entry_ext_oom - computed: false, optional: true, required: false
  private _entryExtOom?: number; 
  public get entryExtOom() {
    return this.getNumberAttribute('entry_ext_oom');
  }
  public set entryExtOom(value: number) {
    this._entryExtOom = value;
  }
  public resetEntryExtOom() {
    this._entryExtOom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryExtOomInput() {
    return this._entryExtOom;
  }

  // entry_oom - computed: false, optional: true, required: false
  private _entryOom?: number; 
  public get entryOom() {
    return this.getNumberAttribute('entry_oom');
  }
  public set entryOom(value: number) {
    this._entryOom = value;
  }
  public resetEntryOom() {
    this._entryOom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryOomInput() {
    return this._entryOom;
  }

  // src_black_list - computed: false, optional: true, required: false
  private _srcBlackList?: number; 
  public get srcBlackList() {
    return this.getNumberAttribute('src_black_list');
  }
  public set srcBlackList(value: number) {
    this._srcBlackList = value;
  }
  public resetSrcBlackList() {
    this._srcBlackList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcBlackListInput() {
    return this._srcBlackList;
  }

  // src_dst_black_list - computed: false, optional: true, required: false
  private _srcDstBlackList?: number; 
  public get srcDstBlackList() {
    return this.getNumberAttribute('src_dst_black_list');
  }
  public set srcDstBlackList(value: number) {
    this._srcDstBlackList = value;
  }
  public resetSrcDstBlackList() {
    this._srcDstBlackList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstBlackListInput() {
    return this._srcDstBlackList;
  }

  // src_dst_classlist_overflow_policy_at_learning - computed: false, optional: true, required: false
  private _srcDstClasslistOverflowPolicyAtLearning?: number; 
  public get srcDstClasslistOverflowPolicyAtLearning() {
    return this.getNumberAttribute('src_dst_classlist_overflow_policy_at_learning');
  }
  public set srcDstClasslistOverflowPolicyAtLearning(value: number) {
    this._srcDstClasslistOverflowPolicyAtLearning = value;
  }
  public resetSrcDstClasslistOverflowPolicyAtLearning() {
    this._srcDstClasslistOverflowPolicyAtLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstClasslistOverflowPolicyAtLearningInput() {
    return this._srcDstClasslistOverflowPolicyAtLearning;
  }

  // src_dst_entry_aged - computed: false, optional: true, required: false
  private _srcDstEntryAged?: number; 
  public get srcDstEntryAged() {
    return this.getNumberAttribute('src_dst_entry_aged');
  }
  public set srcDstEntryAged(value: number) {
    this._srcDstEntryAged = value;
  }
  public resetSrcDstEntryAged() {
    this._srcDstEntryAged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstEntryAgedInput() {
    return this._srcDstEntryAged;
  }

  // src_dst_hit - computed: false, optional: true, required: false
  private _srcDstHit?: number; 
  public get srcDstHit() {
    return this.getNumberAttribute('src_dst_hit');
  }
  public set srcDstHit(value: number) {
    this._srcDstHit = value;
  }
  public resetSrcDstHit() {
    this._srcDstHit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstHitInput() {
    return this._srcDstHit;
  }

  // src_dst_learn - computed: false, optional: true, required: false
  private _srcDstLearn?: number; 
  public get srcDstLearn() {
    return this.getNumberAttribute('src_dst_learn');
  }
  public set srcDstLearn(value: number) {
    this._srcDstLearn = value;
  }
  public resetSrcDstLearn() {
    this._srcDstLearn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstLearnInput() {
    return this._srcDstLearn;
  }

  // src_dst_learning_thre_exceed - computed: false, optional: true, required: false
  private _srcDstLearningThreExceed?: number; 
  public get srcDstLearningThreExceed() {
    return this.getNumberAttribute('src_dst_learning_thre_exceed');
  }
  public set srcDstLearningThreExceed(value: number) {
    this._srcDstLearningThreExceed = value;
  }
  public resetSrcDstLearningThreExceed() {
    this._srcDstLearningThreExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstLearningThreExceedInput() {
    return this._srcDstLearningThreExceed;
  }

  // src_dst_miss - computed: false, optional: true, required: false
  private _srcDstMiss?: number; 
  public get srcDstMiss() {
    return this.getNumberAttribute('src_dst_miss');
  }
  public set srcDstMiss(value: number) {
    this._srcDstMiss = value;
  }
  public resetSrcDstMiss() {
    this._srcDstMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstMissInput() {
    return this._srcDstMiss;
  }

  // src_dst_over_thre_policy_at_learning - computed: false, optional: true, required: false
  private _srcDstOverThrePolicyAtLearning?: number; 
  public get srcDstOverThrePolicyAtLearning() {
    return this.getNumberAttribute('src_dst_over_thre_policy_at_learning');
  }
  public set srcDstOverThrePolicyAtLearning(value: number) {
    this._srcDstOverThrePolicyAtLearning = value;
  }
  public resetSrcDstOverThrePolicyAtLearning() {
    this._srcDstOverThrePolicyAtLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstOverThrePolicyAtLearningInput() {
    return this._srcDstOverThrePolicyAtLearning;
  }

  // src_dst_over_thre_policy_at_lookup - computed: false, optional: true, required: false
  private _srcDstOverThrePolicyAtLookup?: number; 
  public get srcDstOverThrePolicyAtLookup() {
    return this.getNumberAttribute('src_dst_over_thre_policy_at_lookup');
  }
  public set srcDstOverThrePolicyAtLookup(value: number) {
    this._srcDstOverThrePolicyAtLookup = value;
  }
  public resetSrcDstOverThrePolicyAtLookup() {
    this._srcDstOverThrePolicyAtLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstOverThrePolicyAtLookupInput() {
    return this._srcDstOverThrePolicyAtLookup;
  }

  // src_dst_white_list - computed: false, optional: true, required: false
  private _srcDstWhiteList?: number; 
  public get srcDstWhiteList() {
    return this.getNumberAttribute('src_dst_white_list');
  }
  public set srcDstWhiteList(value: number) {
    this._srcDstWhiteList = value;
  }
  public resetSrcDstWhiteList() {
    this._srcDstWhiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstWhiteListInput() {
    return this._srcDstWhiteList;
  }

  // src_entry_aged - computed: false, optional: true, required: false
  private _srcEntryAged?: number; 
  public get srcEntryAged() {
    return this.getNumberAttribute('src_entry_aged');
  }
  public set srcEntryAged(value: number) {
    this._srcEntryAged = value;
  }
  public resetSrcEntryAged() {
    this._srcEntryAged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcEntryAgedInput() {
    return this._srcEntryAged;
  }

  // src_hit - computed: false, optional: true, required: false
  private _srcHit?: number; 
  public get srcHit() {
    return this.getNumberAttribute('src_hit');
  }
  public set srcHit(value: number) {
    this._srcHit = value;
  }
  public resetSrcHit() {
    this._srcHit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHitInput() {
    return this._srcHit;
  }

  // src_learn - computed: false, optional: true, required: false
  private _srcLearn?: number; 
  public get srcLearn() {
    return this.getNumberAttribute('src_learn');
  }
  public set srcLearn(value: number) {
    this._srcLearn = value;
  }
  public resetSrcLearn() {
    this._srcLearn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcLearnInput() {
    return this._srcLearn;
  }

  // src_learning_thre_exceed - computed: false, optional: true, required: false
  private _srcLearningThreExceed?: number; 
  public get srcLearningThreExceed() {
    return this.getNumberAttribute('src_learning_thre_exceed');
  }
  public set srcLearningThreExceed(value: number) {
    this._srcLearningThreExceed = value;
  }
  public resetSrcLearningThreExceed() {
    this._srcLearningThreExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcLearningThreExceedInput() {
    return this._srcLearningThreExceed;
  }

  // src_miss - computed: false, optional: true, required: false
  private _srcMiss?: number; 
  public get srcMiss() {
    return this.getNumberAttribute('src_miss');
  }
  public set srcMiss(value: number) {
    this._srcMiss = value;
  }
  public resetSrcMiss() {
    this._srcMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcMissInput() {
    return this._srcMiss;
  }

  // src_over_thre_policy_at_learning - computed: false, optional: true, required: false
  private _srcOverThrePolicyAtLearning?: number; 
  public get srcOverThrePolicyAtLearning() {
    return this.getNumberAttribute('src_over_thre_policy_at_learning');
  }
  public set srcOverThrePolicyAtLearning(value: number) {
    this._srcOverThrePolicyAtLearning = value;
  }
  public resetSrcOverThrePolicyAtLearning() {
    this._srcOverThrePolicyAtLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcOverThrePolicyAtLearningInput() {
    return this._srcOverThrePolicyAtLearning;
  }

  // src_over_thre_policy_at_lookup - computed: false, optional: true, required: false
  private _srcOverThrePolicyAtLookup?: number; 
  public get srcOverThrePolicyAtLookup() {
    return this.getNumberAttribute('src_over_thre_policy_at_lookup');
  }
  public set srcOverThrePolicyAtLookup(value: number) {
    this._srcOverThrePolicyAtLookup = value;
  }
  public resetSrcOverThrePolicyAtLookup() {
    this._srcOverThrePolicyAtLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcOverThrePolicyAtLookupInput() {
    return this._srcOverThrePolicyAtLookup;
  }

  // src_white_list - computed: false, optional: true, required: false
  private _srcWhiteList?: number; 
  public get srcWhiteList() {
    return this.getNumberAttribute('src_white_list');
  }
  public set srcWhiteList(value: number) {
    this._srcWhiteList = value;
  }
  public resetSrcWhiteList() {
    this._srcWhiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcWhiteListInput() {
    return this._srcWhiteList;
  }

  // src_zone_service_black_list - computed: false, optional: true, required: false
  private _srcZoneServiceBlackList?: number; 
  public get srcZoneServiceBlackList() {
    return this.getNumberAttribute('src_zone_service_black_list');
  }
  public set srcZoneServiceBlackList(value: number) {
    this._srcZoneServiceBlackList = value;
  }
  public resetSrcZoneServiceBlackList() {
    this._srcZoneServiceBlackList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcZoneServiceBlackListInput() {
    return this._srcZoneServiceBlackList;
  }

  // src_zone_service_classlist_overflow_policy_at_learning - computed: false, optional: true, required: false
  private _srcZoneServiceClasslistOverflowPolicyAtLearning?: number; 
  public get srcZoneServiceClasslistOverflowPolicyAtLearning() {
    return this.getNumberAttribute('src_zone_service_classlist_overflow_policy_at_learning');
  }
  public set srcZoneServiceClasslistOverflowPolicyAtLearning(value: number) {
    this._srcZoneServiceClasslistOverflowPolicyAtLearning = value;
  }
  public resetSrcZoneServiceClasslistOverflowPolicyAtLearning() {
    this._srcZoneServiceClasslistOverflowPolicyAtLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcZoneServiceClasslistOverflowPolicyAtLearningInput() {
    return this._srcZoneServiceClasslistOverflowPolicyAtLearning;
  }

  // src_zone_service_entry_aged - computed: false, optional: true, required: false
  private _srcZoneServiceEntryAged?: number; 
  public get srcZoneServiceEntryAged() {
    return this.getNumberAttribute('src_zone_service_entry_aged');
  }
  public set srcZoneServiceEntryAged(value: number) {
    this._srcZoneServiceEntryAged = value;
  }
  public resetSrcZoneServiceEntryAged() {
    this._srcZoneServiceEntryAged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcZoneServiceEntryAgedInput() {
    return this._srcZoneServiceEntryAged;
  }

  // src_zone_service_hit - computed: false, optional: true, required: false
  private _srcZoneServiceHit?: number; 
  public get srcZoneServiceHit() {
    return this.getNumberAttribute('src_zone_service_hit');
  }
  public set srcZoneServiceHit(value: number) {
    this._srcZoneServiceHit = value;
  }
  public resetSrcZoneServiceHit() {
    this._srcZoneServiceHit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcZoneServiceHitInput() {
    return this._srcZoneServiceHit;
  }

  // src_zone_service_learn - computed: false, optional: true, required: false
  private _srcZoneServiceLearn?: number; 
  public get srcZoneServiceLearn() {
    return this.getNumberAttribute('src_zone_service_learn');
  }
  public set srcZoneServiceLearn(value: number) {
    this._srcZoneServiceLearn = value;
  }
  public resetSrcZoneServiceLearn() {
    this._srcZoneServiceLearn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcZoneServiceLearnInput() {
    return this._srcZoneServiceLearn;
  }

  // src_zone_service_learning_thre_exceed - computed: false, optional: true, required: false
  private _srcZoneServiceLearningThreExceed?: number; 
  public get srcZoneServiceLearningThreExceed() {
    return this.getNumberAttribute('src_zone_service_learning_thre_exceed');
  }
  public set srcZoneServiceLearningThreExceed(value: number) {
    this._srcZoneServiceLearningThreExceed = value;
  }
  public resetSrcZoneServiceLearningThreExceed() {
    this._srcZoneServiceLearningThreExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcZoneServiceLearningThreExceedInput() {
    return this._srcZoneServiceLearningThreExceed;
  }

  // src_zone_service_miss - computed: false, optional: true, required: false
  private _srcZoneServiceMiss?: number; 
  public get srcZoneServiceMiss() {
    return this.getNumberAttribute('src_zone_service_miss');
  }
  public set srcZoneServiceMiss(value: number) {
    this._srcZoneServiceMiss = value;
  }
  public resetSrcZoneServiceMiss() {
    this._srcZoneServiceMiss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcZoneServiceMissInput() {
    return this._srcZoneServiceMiss;
  }

  // src_zone_service_over_thre_policy_at_learning - computed: false, optional: true, required: false
  private _srcZoneServiceOverThrePolicyAtLearning?: number; 
  public get srcZoneServiceOverThrePolicyAtLearning() {
    return this.getNumberAttribute('src_zone_service_over_thre_policy_at_learning');
  }
  public set srcZoneServiceOverThrePolicyAtLearning(value: number) {
    this._srcZoneServiceOverThrePolicyAtLearning = value;
  }
  public resetSrcZoneServiceOverThrePolicyAtLearning() {
    this._srcZoneServiceOverThrePolicyAtLearning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcZoneServiceOverThrePolicyAtLearningInput() {
    return this._srcZoneServiceOverThrePolicyAtLearning;
  }

  // src_zone_service_over_thre_policy_at_lookup - computed: false, optional: true, required: false
  private _srcZoneServiceOverThrePolicyAtLookup?: number; 
  public get srcZoneServiceOverThrePolicyAtLookup() {
    return this.getNumberAttribute('src_zone_service_over_thre_policy_at_lookup');
  }
  public set srcZoneServiceOverThrePolicyAtLookup(value: number) {
    this._srcZoneServiceOverThrePolicyAtLookup = value;
  }
  public resetSrcZoneServiceOverThrePolicyAtLookup() {
    this._srcZoneServiceOverThrePolicyAtLookup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcZoneServiceOverThrePolicyAtLookupInput() {
    return this._srcZoneServiceOverThrePolicyAtLookup;
  }

  // src_zone_service_white_list - computed: false, optional: true, required: false
  private _srcZoneServiceWhiteList?: number; 
  public get srcZoneServiceWhiteList() {
    return this.getNumberAttribute('src_zone_service_white_list');
  }
  public set srcZoneServiceWhiteList(value: number) {
    this._srcZoneServiceWhiteList = value;
  }
  public resetSrcZoneServiceWhiteList() {
    this._srcZoneServiceWhiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcZoneServiceWhiteListInput() {
    return this._srcZoneServiceWhiteList;
  }

  // telem_entry_cleared - computed: false, optional: true, required: false
  private _telemEntryCleared?: number; 
  public get telemEntryCleared() {
    return this.getNumberAttribute('telem_entry_cleared');
  }
  public set telemEntryCleared(value: number) {
    this._telemEntryCleared = value;
  }
  public resetTelemEntryCleared() {
    this._telemEntryCleared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemEntryClearedInput() {
    return this._telemEntryCleared;
  }

  // telem_entry_created - computed: false, optional: true, required: false
  private _telemEntryCreated?: number; 
  public get telemEntryCreated() {
    return this.getNumberAttribute('telem_entry_created');
  }
  public set telemEntryCreated(value: number) {
    this._telemEntryCreated = value;
  }
  public resetTelemEntryCreated() {
    this._telemEntryCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemEntryCreatedInput() {
    return this._telemEntryCreated;
  }

  // telem_err_conflict_with_static - computed: false, optional: true, required: false
  private _telemErrConflictWithStatic?: number; 
  public get telemErrConflictWithStatic() {
    return this.getNumberAttribute('telem_err_conflict_with_static');
  }
  public set telemErrConflictWithStatic(value: number) {
    this._telemErrConflictWithStatic = value;
  }
  public resetTelemErrConflictWithStatic() {
    this._telemErrConflictWithStatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemErrConflictWithStaticInput() {
    return this._telemErrConflictWithStatic;
  }

  // telem_err_fail_to_create - computed: false, optional: true, required: false
  private _telemErrFailToCreate?: number; 
  public get telemErrFailToCreate() {
    return this.getNumberAttribute('telem_err_fail_to_create');
  }
  public set telemErrFailToCreate(value: number) {
    this._telemErrFailToCreate = value;
  }
  public resetTelemErrFailToCreate() {
    this._telemErrFailToCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemErrFailToCreateInput() {
    return this._telemErrFailToCreate;
  }

  // telem_err_fail_to_delete - computed: false, optional: true, required: false
  private _telemErrFailToDelete?: number; 
  public get telemErrFailToDelete() {
    return this.getNumberAttribute('telem_err_fail_to_delete');
  }
  public set telemErrFailToDelete(value: number) {
    this._telemErrFailToDelete = value;
  }
  public resetTelemErrFailToDelete() {
    this._telemErrFailToDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemErrFailToDeleteInput() {
    return this._telemErrFailToDelete;
  }

  // telem_err_misc - computed: false, optional: true, required: false
  private _telemErrMisc?: number; 
  public get telemErrMisc() {
    return this.getNumberAttribute('telem_err_misc');
  }
  public set telemErrMisc(value: number) {
    this._telemErrMisc = value;
  }
  public resetTelemErrMisc() {
    this._telemErrMisc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemErrMiscInput() {
    return this._telemErrMisc;
  }

  // telem_err_telem_entry_pre_exist - computed: false, optional: true, required: false
  private _telemErrTelemEntryPreExist?: number; 
  public get telemErrTelemEntryPreExist() {
    return this.getNumberAttribute('telem_err_telem_entry_pre_exist');
  }
  public set telemErrTelemEntryPreExist(value: number) {
    this._telemErrTelemEntryPreExist = value;
  }
  public resetTelemErrTelemEntryPreExist() {
    this._telemErrTelemEntryPreExist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemErrTelemEntryPreExistInput() {
    return this._telemErrTelemEntryPreExist;
  }

  // telem_route_add_rcvd - computed: false, optional: true, required: false
  private _telemRouteAddRcvd?: number; 
  public get telemRouteAddRcvd() {
    return this.getNumberAttribute('telem_route_add_rcvd');
  }
  public set telemRouteAddRcvd(value: number) {
    this._telemRouteAddRcvd = value;
  }
  public resetTelemRouteAddRcvd() {
    this._telemRouteAddRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemRouteAddRcvdInput() {
    return this._telemRouteAddRcvd;
  }

  // telem_route_del_rcvd - computed: false, optional: true, required: false
  private _telemRouteDelRcvd?: number; 
  public get telemRouteDelRcvd() {
    return this.getNumberAttribute('telem_route_del_rcvd');
  }
  public set telemRouteDelRcvd(value: number) {
    this._telemRouteDelRcvd = value;
  }
  public resetTelemRouteDelRcvd() {
    this._telemRouteDelRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemRouteDelRcvdInput() {
    return this._telemRouteDelRcvd;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats thunder_ddos_table_stats}
*/
export class DataThunderDdosTableStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_table_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosTableStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosTableStats to import
  * @param importFromId The id of the existing DataThunderDdosTableStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosTableStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_table_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_table_stats thunder_ddos_table_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosTableStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosTableStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_table_stats',
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
  private _stats = new DataThunderDdosTableStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosTableStatsStats) {
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
      stats: dataThunderDdosTableStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderDdosTableStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosTableStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
