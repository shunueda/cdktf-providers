// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVpnIkeStatsByGwOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#id DataThunderVpnIkeStatsByGwOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#oper DataThunderVpnIkeStatsByGwOper#oper}
  */
  readonly oper?: DataThunderVpnIkeStatsByGwOperOper;
}
export interface DataThunderVpnIkeStatsByGwOperOperIkeStatsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#ike_version DataThunderVpnIkeStatsByGwOper#ike_version}
  */
  readonly ikeVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#name DataThunderVpnIkeStatsByGwOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#remote_id DataThunderVpnIkeStatsByGwOper#remote_id}
  */
  readonly remoteId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#remote_ip DataThunderVpnIkeStatsByGwOper#remote_ip}
  */
  readonly remoteIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v1_child_sa_invalid_spi DataThunderVpnIkeStatsByGwOper#v1_child_sa_invalid_spi}
  */
  readonly v1ChildSaInvalidSpi?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v1_in_aggressive_req DataThunderVpnIkeStatsByGwOper#v1_in_aggressive_req}
  */
  readonly v1InAggressiveReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v1_in_aggressive_rsp DataThunderVpnIkeStatsByGwOper#v1_in_aggressive_rsp}
  */
  readonly v1InAggressiveRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v1_in_auth_only_req DataThunderVpnIkeStatsByGwOper#v1_in_auth_only_req}
  */
  readonly v1InAuthOnlyReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v1_in_auth_only_rsp DataThunderVpnIkeStatsByGwOper#v1_in_auth_only_rsp}
  */
  readonly v1InAuthOnlyRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v1_in_id_prot_req DataThunderVpnIkeStatsByGwOper#v1_in_id_prot_req}
  */
  readonly v1InIdProtReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v1_in_id_prot_rsp DataThunderVpnIkeStatsByGwOper#v1_in_id_prot_rsp}
  */
  readonly v1InIdProtRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v1_in_info_v1_req DataThunderVpnIkeStatsByGwOper#v1_in_info_v1_req}
  */
  readonly v1InInfoV1Req?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v1_in_info_v1_rsp DataThunderVpnIkeStatsByGwOper#v1_in_info_v1_rsp}
  */
  readonly v1InInfoV1Rsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v1_in_new_group_mode_req DataThunderVpnIkeStatsByGwOper#v1_in_new_group_mode_req}
  */
  readonly v1InNewGroupModeReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v1_in_new_group_mode_rsp DataThunderVpnIkeStatsByGwOper#v1_in_new_group_mode_rsp}
  */
  readonly v1InNewGroupModeRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v1_in_quick_mode_req DataThunderVpnIkeStatsByGwOper#v1_in_quick_mode_req}
  */
  readonly v1InQuickModeReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v1_in_quick_mode_rsp DataThunderVpnIkeStatsByGwOper#v1_in_quick_mode_rsp}
  */
  readonly v1InQuickModeRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v1_in_transaction_req DataThunderVpnIkeStatsByGwOper#v1_in_transaction_req}
  */
  readonly v1InTransactionReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v1_in_transaction_rsp DataThunderVpnIkeStatsByGwOper#v1_in_transaction_rsp}
  */
  readonly v1InTransactionRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v1_out_aggressive_req DataThunderVpnIkeStatsByGwOper#v1_out_aggressive_req}
  */
  readonly v1OutAggressiveReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v1_out_aggressive_rsp DataThunderVpnIkeStatsByGwOper#v1_out_aggressive_rsp}
  */
  readonly v1OutAggressiveRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v1_out_auth_only_req DataThunderVpnIkeStatsByGwOper#v1_out_auth_only_req}
  */
  readonly v1OutAuthOnlyReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v1_out_auth_only_rsp DataThunderVpnIkeStatsByGwOper#v1_out_auth_only_rsp}
  */
  readonly v1OutAuthOnlyRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v1_out_id_prot_req DataThunderVpnIkeStatsByGwOper#v1_out_id_prot_req}
  */
  readonly v1OutIdProtReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v1_out_id_prot_rsp DataThunderVpnIkeStatsByGwOper#v1_out_id_prot_rsp}
  */
  readonly v1OutIdProtRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v1_out_info_v1_req DataThunderVpnIkeStatsByGwOper#v1_out_info_v1_req}
  */
  readonly v1OutInfoV1Req?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v1_out_info_v1_rsp DataThunderVpnIkeStatsByGwOper#v1_out_info_v1_rsp}
  */
  readonly v1OutInfoV1Rsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v1_out_new_group_mode_req DataThunderVpnIkeStatsByGwOper#v1_out_new_group_mode_req}
  */
  readonly v1OutNewGroupModeReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v1_out_new_group_mode_rsp DataThunderVpnIkeStatsByGwOper#v1_out_new_group_mode_rsp}
  */
  readonly v1OutNewGroupModeRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v1_out_quick_mode_req DataThunderVpnIkeStatsByGwOper#v1_out_quick_mode_req}
  */
  readonly v1OutQuickModeReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v1_out_quick_mode_rsp DataThunderVpnIkeStatsByGwOper#v1_out_quick_mode_rsp}
  */
  readonly v1OutQuickModeRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v1_out_transaction_req DataThunderVpnIkeStatsByGwOper#v1_out_transaction_req}
  */
  readonly v1OutTransactionReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v1_out_transaction_rsp DataThunderVpnIkeStatsByGwOper#v1_out_transaction_rsp}
  */
  readonly v1OutTransactionRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v2_child_sa_invalid_spi DataThunderVpnIkeStatsByGwOper#v2_child_sa_invalid_spi}
  */
  readonly v2ChildSaInvalidSpi?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v2_child_sa_rekey DataThunderVpnIkeStatsByGwOper#v2_child_sa_rekey}
  */
  readonly v2ChildSaRekey?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v2_in_auth_req DataThunderVpnIkeStatsByGwOper#v2_in_auth_req}
  */
  readonly v2InAuthReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v2_in_auth_rsp DataThunderVpnIkeStatsByGwOper#v2_in_auth_rsp}
  */
  readonly v2InAuthRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v2_in_create_child_req DataThunderVpnIkeStatsByGwOper#v2_in_create_child_req}
  */
  readonly v2InCreateChildReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v2_in_create_child_rsp DataThunderVpnIkeStatsByGwOper#v2_in_create_child_rsp}
  */
  readonly v2InCreateChildRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v2_in_info_req DataThunderVpnIkeStatsByGwOper#v2_in_info_req}
  */
  readonly v2InInfoReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v2_in_info_rsp DataThunderVpnIkeStatsByGwOper#v2_in_info_rsp}
  */
  readonly v2InInfoRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v2_in_init_req DataThunderVpnIkeStatsByGwOper#v2_in_init_req}
  */
  readonly v2InInitReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v2_in_init_rsp DataThunderVpnIkeStatsByGwOper#v2_in_init_rsp}
  */
  readonly v2InInitRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v2_in_invalid DataThunderVpnIkeStatsByGwOper#v2_in_invalid}
  */
  readonly v2InInvalid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v2_in_invalid_spi DataThunderVpnIkeStatsByGwOper#v2_in_invalid_spi}
  */
  readonly v2InInvalidSpi?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v2_init_rekey DataThunderVpnIkeStatsByGwOper#v2_init_rekey}
  */
  readonly v2InitRekey?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v2_out_auth_req DataThunderVpnIkeStatsByGwOper#v2_out_auth_req}
  */
  readonly v2OutAuthReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v2_out_auth_rsp DataThunderVpnIkeStatsByGwOper#v2_out_auth_rsp}
  */
  readonly v2OutAuthRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v2_out_create_child_req DataThunderVpnIkeStatsByGwOper#v2_out_create_child_req}
  */
  readonly v2OutCreateChildReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v2_out_create_child_rsp DataThunderVpnIkeStatsByGwOper#v2_out_create_child_rsp}
  */
  readonly v2OutCreateChildRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v2_out_info_req DataThunderVpnIkeStatsByGwOper#v2_out_info_req}
  */
  readonly v2OutInfoReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v2_out_info_rsp DataThunderVpnIkeStatsByGwOper#v2_out_info_rsp}
  */
  readonly v2OutInfoRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v2_out_init_req DataThunderVpnIkeStatsByGwOper#v2_out_init_req}
  */
  readonly v2OutInitReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v2_out_init_rsp DataThunderVpnIkeStatsByGwOper#v2_out_init_rsp}
  */
  readonly v2OutInitRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#v2_rsp_rekey DataThunderVpnIkeStatsByGwOper#v2_rsp_rekey}
  */
  readonly v2RspRekey?: number;
}

export function dataThunderVpnIkeStatsByGwOperOperIkeStatsListStructToTerraform(struct?: DataThunderVpnIkeStatsByGwOperOperIkeStatsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ike_version: cdktf.stringToTerraform(struct!.ikeVersion),
    name: cdktf.stringToTerraform(struct!.name),
    remote_id: cdktf.stringToTerraform(struct!.remoteId),
    remote_ip: cdktf.stringToTerraform(struct!.remoteIp),
    v1_child_sa_invalid_spi: cdktf.numberToTerraform(struct!.v1ChildSaInvalidSpi),
    v1_in_aggressive_req: cdktf.numberToTerraform(struct!.v1InAggressiveReq),
    v1_in_aggressive_rsp: cdktf.numberToTerraform(struct!.v1InAggressiveRsp),
    v1_in_auth_only_req: cdktf.numberToTerraform(struct!.v1InAuthOnlyReq),
    v1_in_auth_only_rsp: cdktf.numberToTerraform(struct!.v1InAuthOnlyRsp),
    v1_in_id_prot_req: cdktf.numberToTerraform(struct!.v1InIdProtReq),
    v1_in_id_prot_rsp: cdktf.numberToTerraform(struct!.v1InIdProtRsp),
    v1_in_info_v1_req: cdktf.numberToTerraform(struct!.v1InInfoV1Req),
    v1_in_info_v1_rsp: cdktf.numberToTerraform(struct!.v1InInfoV1Rsp),
    v1_in_new_group_mode_req: cdktf.numberToTerraform(struct!.v1InNewGroupModeReq),
    v1_in_new_group_mode_rsp: cdktf.numberToTerraform(struct!.v1InNewGroupModeRsp),
    v1_in_quick_mode_req: cdktf.numberToTerraform(struct!.v1InQuickModeReq),
    v1_in_quick_mode_rsp: cdktf.numberToTerraform(struct!.v1InQuickModeRsp),
    v1_in_transaction_req: cdktf.numberToTerraform(struct!.v1InTransactionReq),
    v1_in_transaction_rsp: cdktf.numberToTerraform(struct!.v1InTransactionRsp),
    v1_out_aggressive_req: cdktf.numberToTerraform(struct!.v1OutAggressiveReq),
    v1_out_aggressive_rsp: cdktf.numberToTerraform(struct!.v1OutAggressiveRsp),
    v1_out_auth_only_req: cdktf.numberToTerraform(struct!.v1OutAuthOnlyReq),
    v1_out_auth_only_rsp: cdktf.numberToTerraform(struct!.v1OutAuthOnlyRsp),
    v1_out_id_prot_req: cdktf.numberToTerraform(struct!.v1OutIdProtReq),
    v1_out_id_prot_rsp: cdktf.numberToTerraform(struct!.v1OutIdProtRsp),
    v1_out_info_v1_req: cdktf.numberToTerraform(struct!.v1OutInfoV1Req),
    v1_out_info_v1_rsp: cdktf.numberToTerraform(struct!.v1OutInfoV1Rsp),
    v1_out_new_group_mode_req: cdktf.numberToTerraform(struct!.v1OutNewGroupModeReq),
    v1_out_new_group_mode_rsp: cdktf.numberToTerraform(struct!.v1OutNewGroupModeRsp),
    v1_out_quick_mode_req: cdktf.numberToTerraform(struct!.v1OutQuickModeReq),
    v1_out_quick_mode_rsp: cdktf.numberToTerraform(struct!.v1OutQuickModeRsp),
    v1_out_transaction_req: cdktf.numberToTerraform(struct!.v1OutTransactionReq),
    v1_out_transaction_rsp: cdktf.numberToTerraform(struct!.v1OutTransactionRsp),
    v2_child_sa_invalid_spi: cdktf.numberToTerraform(struct!.v2ChildSaInvalidSpi),
    v2_child_sa_rekey: cdktf.numberToTerraform(struct!.v2ChildSaRekey),
    v2_in_auth_req: cdktf.numberToTerraform(struct!.v2InAuthReq),
    v2_in_auth_rsp: cdktf.numberToTerraform(struct!.v2InAuthRsp),
    v2_in_create_child_req: cdktf.numberToTerraform(struct!.v2InCreateChildReq),
    v2_in_create_child_rsp: cdktf.numberToTerraform(struct!.v2InCreateChildRsp),
    v2_in_info_req: cdktf.numberToTerraform(struct!.v2InInfoReq),
    v2_in_info_rsp: cdktf.numberToTerraform(struct!.v2InInfoRsp),
    v2_in_init_req: cdktf.numberToTerraform(struct!.v2InInitReq),
    v2_in_init_rsp: cdktf.numberToTerraform(struct!.v2InInitRsp),
    v2_in_invalid: cdktf.numberToTerraform(struct!.v2InInvalid),
    v2_in_invalid_spi: cdktf.numberToTerraform(struct!.v2InInvalidSpi),
    v2_init_rekey: cdktf.numberToTerraform(struct!.v2InitRekey),
    v2_out_auth_req: cdktf.numberToTerraform(struct!.v2OutAuthReq),
    v2_out_auth_rsp: cdktf.numberToTerraform(struct!.v2OutAuthRsp),
    v2_out_create_child_req: cdktf.numberToTerraform(struct!.v2OutCreateChildReq),
    v2_out_create_child_rsp: cdktf.numberToTerraform(struct!.v2OutCreateChildRsp),
    v2_out_info_req: cdktf.numberToTerraform(struct!.v2OutInfoReq),
    v2_out_info_rsp: cdktf.numberToTerraform(struct!.v2OutInfoRsp),
    v2_out_init_req: cdktf.numberToTerraform(struct!.v2OutInitReq),
    v2_out_init_rsp: cdktf.numberToTerraform(struct!.v2OutInitRsp),
    v2_rsp_rekey: cdktf.numberToTerraform(struct!.v2RspRekey),
  }
}


export function dataThunderVpnIkeStatsByGwOperOperIkeStatsListStructToHclTerraform(struct?: DataThunderVpnIkeStatsByGwOperOperIkeStatsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ike_version: {
      value: cdktf.stringToHclTerraform(struct!.ikeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_id: {
      value: cdktf.stringToHclTerraform(struct!.remoteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ip: {
      value: cdktf.stringToHclTerraform(struct!.remoteIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v1_child_sa_invalid_spi: {
      value: cdktf.numberToHclTerraform(struct!.v1ChildSaInvalidSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_aggressive_req: {
      value: cdktf.numberToHclTerraform(struct!.v1InAggressiveReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_aggressive_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1InAggressiveRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_auth_only_req: {
      value: cdktf.numberToHclTerraform(struct!.v1InAuthOnlyReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_auth_only_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1InAuthOnlyRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_id_prot_req: {
      value: cdktf.numberToHclTerraform(struct!.v1InIdProtReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_id_prot_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1InIdProtRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_info_v1_req: {
      value: cdktf.numberToHclTerraform(struct!.v1InInfoV1Req),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_info_v1_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1InInfoV1Rsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_new_group_mode_req: {
      value: cdktf.numberToHclTerraform(struct!.v1InNewGroupModeReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_new_group_mode_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1InNewGroupModeRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_quick_mode_req: {
      value: cdktf.numberToHclTerraform(struct!.v1InQuickModeReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_quick_mode_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1InQuickModeRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_transaction_req: {
      value: cdktf.numberToHclTerraform(struct!.v1InTransactionReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_in_transaction_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1InTransactionRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_aggressive_req: {
      value: cdktf.numberToHclTerraform(struct!.v1OutAggressiveReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_aggressive_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1OutAggressiveRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_auth_only_req: {
      value: cdktf.numberToHclTerraform(struct!.v1OutAuthOnlyReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_auth_only_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1OutAuthOnlyRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_id_prot_req: {
      value: cdktf.numberToHclTerraform(struct!.v1OutIdProtReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_id_prot_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1OutIdProtRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_info_v1_req: {
      value: cdktf.numberToHclTerraform(struct!.v1OutInfoV1Req),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_info_v1_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1OutInfoV1Rsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_new_group_mode_req: {
      value: cdktf.numberToHclTerraform(struct!.v1OutNewGroupModeReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_new_group_mode_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1OutNewGroupModeRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_quick_mode_req: {
      value: cdktf.numberToHclTerraform(struct!.v1OutQuickModeReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_quick_mode_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1OutQuickModeRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_transaction_req: {
      value: cdktf.numberToHclTerraform(struct!.v1OutTransactionReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v1_out_transaction_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v1OutTransactionRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_child_sa_invalid_spi: {
      value: cdktf.numberToHclTerraform(struct!.v2ChildSaInvalidSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_child_sa_rekey: {
      value: cdktf.numberToHclTerraform(struct!.v2ChildSaRekey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_auth_req: {
      value: cdktf.numberToHclTerraform(struct!.v2InAuthReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_auth_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2InAuthRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_create_child_req: {
      value: cdktf.numberToHclTerraform(struct!.v2InCreateChildReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_create_child_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2InCreateChildRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_info_req: {
      value: cdktf.numberToHclTerraform(struct!.v2InInfoReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_info_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2InInfoRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_init_req: {
      value: cdktf.numberToHclTerraform(struct!.v2InInitReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_init_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2InInitRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_invalid: {
      value: cdktf.numberToHclTerraform(struct!.v2InInvalid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_in_invalid_spi: {
      value: cdktf.numberToHclTerraform(struct!.v2InInvalidSpi),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_init_rekey: {
      value: cdktf.numberToHclTerraform(struct!.v2InitRekey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_auth_req: {
      value: cdktf.numberToHclTerraform(struct!.v2OutAuthReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_auth_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2OutAuthRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_create_child_req: {
      value: cdktf.numberToHclTerraform(struct!.v2OutCreateChildReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_create_child_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2OutCreateChildRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_info_req: {
      value: cdktf.numberToHclTerraform(struct!.v2OutInfoReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_info_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2OutInfoRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_init_req: {
      value: cdktf.numberToHclTerraform(struct!.v2OutInitReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_out_init_rsp: {
      value: cdktf.numberToHclTerraform(struct!.v2OutInitRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    v2_rsp_rekey: {
      value: cdktf.numberToHclTerraform(struct!.v2RspRekey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnIkeStatsByGwOperOperIkeStatsListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataThunderVpnIkeStatsByGwOperOperIkeStatsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ikeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeVersion = this._ikeVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._remoteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteId = this._remoteId;
    }
    if (this._remoteIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIp = this._remoteIp;
    }
    if (this._v1ChildSaInvalidSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1ChildSaInvalidSpi = this._v1ChildSaInvalidSpi;
    }
    if (this._v1InAggressiveReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InAggressiveReq = this._v1InAggressiveReq;
    }
    if (this._v1InAggressiveRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InAggressiveRsp = this._v1InAggressiveRsp;
    }
    if (this._v1InAuthOnlyReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InAuthOnlyReq = this._v1InAuthOnlyReq;
    }
    if (this._v1InAuthOnlyRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InAuthOnlyRsp = this._v1InAuthOnlyRsp;
    }
    if (this._v1InIdProtReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InIdProtReq = this._v1InIdProtReq;
    }
    if (this._v1InIdProtRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InIdProtRsp = this._v1InIdProtRsp;
    }
    if (this._v1InInfoV1Req !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InInfoV1Req = this._v1InInfoV1Req;
    }
    if (this._v1InInfoV1Rsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InInfoV1Rsp = this._v1InInfoV1Rsp;
    }
    if (this._v1InNewGroupModeReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InNewGroupModeReq = this._v1InNewGroupModeReq;
    }
    if (this._v1InNewGroupModeRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InNewGroupModeRsp = this._v1InNewGroupModeRsp;
    }
    if (this._v1InQuickModeReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InQuickModeReq = this._v1InQuickModeReq;
    }
    if (this._v1InQuickModeRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InQuickModeRsp = this._v1InQuickModeRsp;
    }
    if (this._v1InTransactionReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InTransactionReq = this._v1InTransactionReq;
    }
    if (this._v1InTransactionRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1InTransactionRsp = this._v1InTransactionRsp;
    }
    if (this._v1OutAggressiveReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutAggressiveReq = this._v1OutAggressiveReq;
    }
    if (this._v1OutAggressiveRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutAggressiveRsp = this._v1OutAggressiveRsp;
    }
    if (this._v1OutAuthOnlyReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutAuthOnlyReq = this._v1OutAuthOnlyReq;
    }
    if (this._v1OutAuthOnlyRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutAuthOnlyRsp = this._v1OutAuthOnlyRsp;
    }
    if (this._v1OutIdProtReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutIdProtReq = this._v1OutIdProtReq;
    }
    if (this._v1OutIdProtRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutIdProtRsp = this._v1OutIdProtRsp;
    }
    if (this._v1OutInfoV1Req !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutInfoV1Req = this._v1OutInfoV1Req;
    }
    if (this._v1OutInfoV1Rsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutInfoV1Rsp = this._v1OutInfoV1Rsp;
    }
    if (this._v1OutNewGroupModeReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutNewGroupModeReq = this._v1OutNewGroupModeReq;
    }
    if (this._v1OutNewGroupModeRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutNewGroupModeRsp = this._v1OutNewGroupModeRsp;
    }
    if (this._v1OutQuickModeReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutQuickModeReq = this._v1OutQuickModeReq;
    }
    if (this._v1OutQuickModeRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutQuickModeRsp = this._v1OutQuickModeRsp;
    }
    if (this._v1OutTransactionReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutTransactionReq = this._v1OutTransactionReq;
    }
    if (this._v1OutTransactionRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v1OutTransactionRsp = this._v1OutTransactionRsp;
    }
    if (this._v2ChildSaInvalidSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2ChildSaInvalidSpi = this._v2ChildSaInvalidSpi;
    }
    if (this._v2ChildSaRekey !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2ChildSaRekey = this._v2ChildSaRekey;
    }
    if (this._v2InAuthReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InAuthReq = this._v2InAuthReq;
    }
    if (this._v2InAuthRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InAuthRsp = this._v2InAuthRsp;
    }
    if (this._v2InCreateChildReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InCreateChildReq = this._v2InCreateChildReq;
    }
    if (this._v2InCreateChildRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InCreateChildRsp = this._v2InCreateChildRsp;
    }
    if (this._v2InInfoReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InInfoReq = this._v2InInfoReq;
    }
    if (this._v2InInfoRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InInfoRsp = this._v2InInfoRsp;
    }
    if (this._v2InInitReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InInitReq = this._v2InInitReq;
    }
    if (this._v2InInitRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InInitRsp = this._v2InInitRsp;
    }
    if (this._v2InInvalid !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InInvalid = this._v2InInvalid;
    }
    if (this._v2InInvalidSpi !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InInvalidSpi = this._v2InInvalidSpi;
    }
    if (this._v2InitRekey !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2InitRekey = this._v2InitRekey;
    }
    if (this._v2OutAuthReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutAuthReq = this._v2OutAuthReq;
    }
    if (this._v2OutAuthRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutAuthRsp = this._v2OutAuthRsp;
    }
    if (this._v2OutCreateChildReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutCreateChildReq = this._v2OutCreateChildReq;
    }
    if (this._v2OutCreateChildRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutCreateChildRsp = this._v2OutCreateChildRsp;
    }
    if (this._v2OutInfoReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutInfoReq = this._v2OutInfoReq;
    }
    if (this._v2OutInfoRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutInfoRsp = this._v2OutInfoRsp;
    }
    if (this._v2OutInitReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutInitReq = this._v2OutInitReq;
    }
    if (this._v2OutInitRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2OutInitRsp = this._v2OutInitRsp;
    }
    if (this._v2RspRekey !== undefined) {
      hasAnyValues = true;
      internalValueResult.v2RspRekey = this._v2RspRekey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnIkeStatsByGwOperOperIkeStatsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ikeVersion = undefined;
      this._name = undefined;
      this._remoteId = undefined;
      this._remoteIp = undefined;
      this._v1ChildSaInvalidSpi = undefined;
      this._v1InAggressiveReq = undefined;
      this._v1InAggressiveRsp = undefined;
      this._v1InAuthOnlyReq = undefined;
      this._v1InAuthOnlyRsp = undefined;
      this._v1InIdProtReq = undefined;
      this._v1InIdProtRsp = undefined;
      this._v1InInfoV1Req = undefined;
      this._v1InInfoV1Rsp = undefined;
      this._v1InNewGroupModeReq = undefined;
      this._v1InNewGroupModeRsp = undefined;
      this._v1InQuickModeReq = undefined;
      this._v1InQuickModeRsp = undefined;
      this._v1InTransactionReq = undefined;
      this._v1InTransactionRsp = undefined;
      this._v1OutAggressiveReq = undefined;
      this._v1OutAggressiveRsp = undefined;
      this._v1OutAuthOnlyReq = undefined;
      this._v1OutAuthOnlyRsp = undefined;
      this._v1OutIdProtReq = undefined;
      this._v1OutIdProtRsp = undefined;
      this._v1OutInfoV1Req = undefined;
      this._v1OutInfoV1Rsp = undefined;
      this._v1OutNewGroupModeReq = undefined;
      this._v1OutNewGroupModeRsp = undefined;
      this._v1OutQuickModeReq = undefined;
      this._v1OutQuickModeRsp = undefined;
      this._v1OutTransactionReq = undefined;
      this._v1OutTransactionRsp = undefined;
      this._v2ChildSaInvalidSpi = undefined;
      this._v2ChildSaRekey = undefined;
      this._v2InAuthReq = undefined;
      this._v2InAuthRsp = undefined;
      this._v2InCreateChildReq = undefined;
      this._v2InCreateChildRsp = undefined;
      this._v2InInfoReq = undefined;
      this._v2InInfoRsp = undefined;
      this._v2InInitReq = undefined;
      this._v2InInitRsp = undefined;
      this._v2InInvalid = undefined;
      this._v2InInvalidSpi = undefined;
      this._v2InitRekey = undefined;
      this._v2OutAuthReq = undefined;
      this._v2OutAuthRsp = undefined;
      this._v2OutCreateChildReq = undefined;
      this._v2OutCreateChildRsp = undefined;
      this._v2OutInfoReq = undefined;
      this._v2OutInfoRsp = undefined;
      this._v2OutInitReq = undefined;
      this._v2OutInitRsp = undefined;
      this._v2RspRekey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ikeVersion = value.ikeVersion;
      this._name = value.name;
      this._remoteId = value.remoteId;
      this._remoteIp = value.remoteIp;
      this._v1ChildSaInvalidSpi = value.v1ChildSaInvalidSpi;
      this._v1InAggressiveReq = value.v1InAggressiveReq;
      this._v1InAggressiveRsp = value.v1InAggressiveRsp;
      this._v1InAuthOnlyReq = value.v1InAuthOnlyReq;
      this._v1InAuthOnlyRsp = value.v1InAuthOnlyRsp;
      this._v1InIdProtReq = value.v1InIdProtReq;
      this._v1InIdProtRsp = value.v1InIdProtRsp;
      this._v1InInfoV1Req = value.v1InInfoV1Req;
      this._v1InInfoV1Rsp = value.v1InInfoV1Rsp;
      this._v1InNewGroupModeReq = value.v1InNewGroupModeReq;
      this._v1InNewGroupModeRsp = value.v1InNewGroupModeRsp;
      this._v1InQuickModeReq = value.v1InQuickModeReq;
      this._v1InQuickModeRsp = value.v1InQuickModeRsp;
      this._v1InTransactionReq = value.v1InTransactionReq;
      this._v1InTransactionRsp = value.v1InTransactionRsp;
      this._v1OutAggressiveReq = value.v1OutAggressiveReq;
      this._v1OutAggressiveRsp = value.v1OutAggressiveRsp;
      this._v1OutAuthOnlyReq = value.v1OutAuthOnlyReq;
      this._v1OutAuthOnlyRsp = value.v1OutAuthOnlyRsp;
      this._v1OutIdProtReq = value.v1OutIdProtReq;
      this._v1OutIdProtRsp = value.v1OutIdProtRsp;
      this._v1OutInfoV1Req = value.v1OutInfoV1Req;
      this._v1OutInfoV1Rsp = value.v1OutInfoV1Rsp;
      this._v1OutNewGroupModeReq = value.v1OutNewGroupModeReq;
      this._v1OutNewGroupModeRsp = value.v1OutNewGroupModeRsp;
      this._v1OutQuickModeReq = value.v1OutQuickModeReq;
      this._v1OutQuickModeRsp = value.v1OutQuickModeRsp;
      this._v1OutTransactionReq = value.v1OutTransactionReq;
      this._v1OutTransactionRsp = value.v1OutTransactionRsp;
      this._v2ChildSaInvalidSpi = value.v2ChildSaInvalidSpi;
      this._v2ChildSaRekey = value.v2ChildSaRekey;
      this._v2InAuthReq = value.v2InAuthReq;
      this._v2InAuthRsp = value.v2InAuthRsp;
      this._v2InCreateChildReq = value.v2InCreateChildReq;
      this._v2InCreateChildRsp = value.v2InCreateChildRsp;
      this._v2InInfoReq = value.v2InInfoReq;
      this._v2InInfoRsp = value.v2InInfoRsp;
      this._v2InInitReq = value.v2InInitReq;
      this._v2InInitRsp = value.v2InInitRsp;
      this._v2InInvalid = value.v2InInvalid;
      this._v2InInvalidSpi = value.v2InInvalidSpi;
      this._v2InitRekey = value.v2InitRekey;
      this._v2OutAuthReq = value.v2OutAuthReq;
      this._v2OutAuthRsp = value.v2OutAuthRsp;
      this._v2OutCreateChildReq = value.v2OutCreateChildReq;
      this._v2OutCreateChildRsp = value.v2OutCreateChildRsp;
      this._v2OutInfoReq = value.v2OutInfoReq;
      this._v2OutInfoRsp = value.v2OutInfoRsp;
      this._v2OutInitReq = value.v2OutInitReq;
      this._v2OutInitRsp = value.v2OutInitRsp;
      this._v2RspRekey = value.v2RspRekey;
    }
  }

  // ike_version - computed: false, optional: true, required: false
  private _ikeVersion?: string; 
  public get ikeVersion() {
    return this.getStringAttribute('ike_version');
  }
  public set ikeVersion(value: string) {
    this._ikeVersion = value;
  }
  public resetIkeVersion() {
    this._ikeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeVersionInput() {
    return this._ikeVersion;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // remote_id - computed: false, optional: true, required: false
  private _remoteId?: string; 
  public get remoteId() {
    return this.getStringAttribute('remote_id');
  }
  public set remoteId(value: string) {
    this._remoteId = value;
  }
  public resetRemoteId() {
    this._remoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdInput() {
    return this._remoteId;
  }

  // remote_ip - computed: false, optional: true, required: false
  private _remoteIp?: string; 
  public get remoteIp() {
    return this.getStringAttribute('remote_ip');
  }
  public set remoteIp(value: string) {
    this._remoteIp = value;
  }
  public resetRemoteIp() {
    this._remoteIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpInput() {
    return this._remoteIp;
  }

  // v1_child_sa_invalid_spi - computed: false, optional: true, required: false
  private _v1ChildSaInvalidSpi?: number; 
  public get v1ChildSaInvalidSpi() {
    return this.getNumberAttribute('v1_child_sa_invalid_spi');
  }
  public set v1ChildSaInvalidSpi(value: number) {
    this._v1ChildSaInvalidSpi = value;
  }
  public resetV1ChildSaInvalidSpi() {
    this._v1ChildSaInvalidSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1ChildSaInvalidSpiInput() {
    return this._v1ChildSaInvalidSpi;
  }

  // v1_in_aggressive_req - computed: false, optional: true, required: false
  private _v1InAggressiveReq?: number; 
  public get v1InAggressiveReq() {
    return this.getNumberAttribute('v1_in_aggressive_req');
  }
  public set v1InAggressiveReq(value: number) {
    this._v1InAggressiveReq = value;
  }
  public resetV1InAggressiveReq() {
    this._v1InAggressiveReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InAggressiveReqInput() {
    return this._v1InAggressiveReq;
  }

  // v1_in_aggressive_rsp - computed: false, optional: true, required: false
  private _v1InAggressiveRsp?: number; 
  public get v1InAggressiveRsp() {
    return this.getNumberAttribute('v1_in_aggressive_rsp');
  }
  public set v1InAggressiveRsp(value: number) {
    this._v1InAggressiveRsp = value;
  }
  public resetV1InAggressiveRsp() {
    this._v1InAggressiveRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InAggressiveRspInput() {
    return this._v1InAggressiveRsp;
  }

  // v1_in_auth_only_req - computed: false, optional: true, required: false
  private _v1InAuthOnlyReq?: number; 
  public get v1InAuthOnlyReq() {
    return this.getNumberAttribute('v1_in_auth_only_req');
  }
  public set v1InAuthOnlyReq(value: number) {
    this._v1InAuthOnlyReq = value;
  }
  public resetV1InAuthOnlyReq() {
    this._v1InAuthOnlyReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InAuthOnlyReqInput() {
    return this._v1InAuthOnlyReq;
  }

  // v1_in_auth_only_rsp - computed: false, optional: true, required: false
  private _v1InAuthOnlyRsp?: number; 
  public get v1InAuthOnlyRsp() {
    return this.getNumberAttribute('v1_in_auth_only_rsp');
  }
  public set v1InAuthOnlyRsp(value: number) {
    this._v1InAuthOnlyRsp = value;
  }
  public resetV1InAuthOnlyRsp() {
    this._v1InAuthOnlyRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InAuthOnlyRspInput() {
    return this._v1InAuthOnlyRsp;
  }

  // v1_in_id_prot_req - computed: false, optional: true, required: false
  private _v1InIdProtReq?: number; 
  public get v1InIdProtReq() {
    return this.getNumberAttribute('v1_in_id_prot_req');
  }
  public set v1InIdProtReq(value: number) {
    this._v1InIdProtReq = value;
  }
  public resetV1InIdProtReq() {
    this._v1InIdProtReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InIdProtReqInput() {
    return this._v1InIdProtReq;
  }

  // v1_in_id_prot_rsp - computed: false, optional: true, required: false
  private _v1InIdProtRsp?: number; 
  public get v1InIdProtRsp() {
    return this.getNumberAttribute('v1_in_id_prot_rsp');
  }
  public set v1InIdProtRsp(value: number) {
    this._v1InIdProtRsp = value;
  }
  public resetV1InIdProtRsp() {
    this._v1InIdProtRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InIdProtRspInput() {
    return this._v1InIdProtRsp;
  }

  // v1_in_info_v1_req - computed: false, optional: true, required: false
  private _v1InInfoV1Req?: number; 
  public get v1InInfoV1Req() {
    return this.getNumberAttribute('v1_in_info_v1_req');
  }
  public set v1InInfoV1Req(value: number) {
    this._v1InInfoV1Req = value;
  }
  public resetV1InInfoV1Req() {
    this._v1InInfoV1Req = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InInfoV1ReqInput() {
    return this._v1InInfoV1Req;
  }

  // v1_in_info_v1_rsp - computed: false, optional: true, required: false
  private _v1InInfoV1Rsp?: number; 
  public get v1InInfoV1Rsp() {
    return this.getNumberAttribute('v1_in_info_v1_rsp');
  }
  public set v1InInfoV1Rsp(value: number) {
    this._v1InInfoV1Rsp = value;
  }
  public resetV1InInfoV1Rsp() {
    this._v1InInfoV1Rsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InInfoV1RspInput() {
    return this._v1InInfoV1Rsp;
  }

  // v1_in_new_group_mode_req - computed: false, optional: true, required: false
  private _v1InNewGroupModeReq?: number; 
  public get v1InNewGroupModeReq() {
    return this.getNumberAttribute('v1_in_new_group_mode_req');
  }
  public set v1InNewGroupModeReq(value: number) {
    this._v1InNewGroupModeReq = value;
  }
  public resetV1InNewGroupModeReq() {
    this._v1InNewGroupModeReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InNewGroupModeReqInput() {
    return this._v1InNewGroupModeReq;
  }

  // v1_in_new_group_mode_rsp - computed: false, optional: true, required: false
  private _v1InNewGroupModeRsp?: number; 
  public get v1InNewGroupModeRsp() {
    return this.getNumberAttribute('v1_in_new_group_mode_rsp');
  }
  public set v1InNewGroupModeRsp(value: number) {
    this._v1InNewGroupModeRsp = value;
  }
  public resetV1InNewGroupModeRsp() {
    this._v1InNewGroupModeRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InNewGroupModeRspInput() {
    return this._v1InNewGroupModeRsp;
  }

  // v1_in_quick_mode_req - computed: false, optional: true, required: false
  private _v1InQuickModeReq?: number; 
  public get v1InQuickModeReq() {
    return this.getNumberAttribute('v1_in_quick_mode_req');
  }
  public set v1InQuickModeReq(value: number) {
    this._v1InQuickModeReq = value;
  }
  public resetV1InQuickModeReq() {
    this._v1InQuickModeReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InQuickModeReqInput() {
    return this._v1InQuickModeReq;
  }

  // v1_in_quick_mode_rsp - computed: false, optional: true, required: false
  private _v1InQuickModeRsp?: number; 
  public get v1InQuickModeRsp() {
    return this.getNumberAttribute('v1_in_quick_mode_rsp');
  }
  public set v1InQuickModeRsp(value: number) {
    this._v1InQuickModeRsp = value;
  }
  public resetV1InQuickModeRsp() {
    this._v1InQuickModeRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InQuickModeRspInput() {
    return this._v1InQuickModeRsp;
  }

  // v1_in_transaction_req - computed: false, optional: true, required: false
  private _v1InTransactionReq?: number; 
  public get v1InTransactionReq() {
    return this.getNumberAttribute('v1_in_transaction_req');
  }
  public set v1InTransactionReq(value: number) {
    this._v1InTransactionReq = value;
  }
  public resetV1InTransactionReq() {
    this._v1InTransactionReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InTransactionReqInput() {
    return this._v1InTransactionReq;
  }

  // v1_in_transaction_rsp - computed: false, optional: true, required: false
  private _v1InTransactionRsp?: number; 
  public get v1InTransactionRsp() {
    return this.getNumberAttribute('v1_in_transaction_rsp');
  }
  public set v1InTransactionRsp(value: number) {
    this._v1InTransactionRsp = value;
  }
  public resetV1InTransactionRsp() {
    this._v1InTransactionRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1InTransactionRspInput() {
    return this._v1InTransactionRsp;
  }

  // v1_out_aggressive_req - computed: false, optional: true, required: false
  private _v1OutAggressiveReq?: number; 
  public get v1OutAggressiveReq() {
    return this.getNumberAttribute('v1_out_aggressive_req');
  }
  public set v1OutAggressiveReq(value: number) {
    this._v1OutAggressiveReq = value;
  }
  public resetV1OutAggressiveReq() {
    this._v1OutAggressiveReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutAggressiveReqInput() {
    return this._v1OutAggressiveReq;
  }

  // v1_out_aggressive_rsp - computed: false, optional: true, required: false
  private _v1OutAggressiveRsp?: number; 
  public get v1OutAggressiveRsp() {
    return this.getNumberAttribute('v1_out_aggressive_rsp');
  }
  public set v1OutAggressiveRsp(value: number) {
    this._v1OutAggressiveRsp = value;
  }
  public resetV1OutAggressiveRsp() {
    this._v1OutAggressiveRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutAggressiveRspInput() {
    return this._v1OutAggressiveRsp;
  }

  // v1_out_auth_only_req - computed: false, optional: true, required: false
  private _v1OutAuthOnlyReq?: number; 
  public get v1OutAuthOnlyReq() {
    return this.getNumberAttribute('v1_out_auth_only_req');
  }
  public set v1OutAuthOnlyReq(value: number) {
    this._v1OutAuthOnlyReq = value;
  }
  public resetV1OutAuthOnlyReq() {
    this._v1OutAuthOnlyReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutAuthOnlyReqInput() {
    return this._v1OutAuthOnlyReq;
  }

  // v1_out_auth_only_rsp - computed: false, optional: true, required: false
  private _v1OutAuthOnlyRsp?: number; 
  public get v1OutAuthOnlyRsp() {
    return this.getNumberAttribute('v1_out_auth_only_rsp');
  }
  public set v1OutAuthOnlyRsp(value: number) {
    this._v1OutAuthOnlyRsp = value;
  }
  public resetV1OutAuthOnlyRsp() {
    this._v1OutAuthOnlyRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutAuthOnlyRspInput() {
    return this._v1OutAuthOnlyRsp;
  }

  // v1_out_id_prot_req - computed: false, optional: true, required: false
  private _v1OutIdProtReq?: number; 
  public get v1OutIdProtReq() {
    return this.getNumberAttribute('v1_out_id_prot_req');
  }
  public set v1OutIdProtReq(value: number) {
    this._v1OutIdProtReq = value;
  }
  public resetV1OutIdProtReq() {
    this._v1OutIdProtReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutIdProtReqInput() {
    return this._v1OutIdProtReq;
  }

  // v1_out_id_prot_rsp - computed: false, optional: true, required: false
  private _v1OutIdProtRsp?: number; 
  public get v1OutIdProtRsp() {
    return this.getNumberAttribute('v1_out_id_prot_rsp');
  }
  public set v1OutIdProtRsp(value: number) {
    this._v1OutIdProtRsp = value;
  }
  public resetV1OutIdProtRsp() {
    this._v1OutIdProtRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutIdProtRspInput() {
    return this._v1OutIdProtRsp;
  }

  // v1_out_info_v1_req - computed: false, optional: true, required: false
  private _v1OutInfoV1Req?: number; 
  public get v1OutInfoV1Req() {
    return this.getNumberAttribute('v1_out_info_v1_req');
  }
  public set v1OutInfoV1Req(value: number) {
    this._v1OutInfoV1Req = value;
  }
  public resetV1OutInfoV1Req() {
    this._v1OutInfoV1Req = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutInfoV1ReqInput() {
    return this._v1OutInfoV1Req;
  }

  // v1_out_info_v1_rsp - computed: false, optional: true, required: false
  private _v1OutInfoV1Rsp?: number; 
  public get v1OutInfoV1Rsp() {
    return this.getNumberAttribute('v1_out_info_v1_rsp');
  }
  public set v1OutInfoV1Rsp(value: number) {
    this._v1OutInfoV1Rsp = value;
  }
  public resetV1OutInfoV1Rsp() {
    this._v1OutInfoV1Rsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutInfoV1RspInput() {
    return this._v1OutInfoV1Rsp;
  }

  // v1_out_new_group_mode_req - computed: false, optional: true, required: false
  private _v1OutNewGroupModeReq?: number; 
  public get v1OutNewGroupModeReq() {
    return this.getNumberAttribute('v1_out_new_group_mode_req');
  }
  public set v1OutNewGroupModeReq(value: number) {
    this._v1OutNewGroupModeReq = value;
  }
  public resetV1OutNewGroupModeReq() {
    this._v1OutNewGroupModeReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutNewGroupModeReqInput() {
    return this._v1OutNewGroupModeReq;
  }

  // v1_out_new_group_mode_rsp - computed: false, optional: true, required: false
  private _v1OutNewGroupModeRsp?: number; 
  public get v1OutNewGroupModeRsp() {
    return this.getNumberAttribute('v1_out_new_group_mode_rsp');
  }
  public set v1OutNewGroupModeRsp(value: number) {
    this._v1OutNewGroupModeRsp = value;
  }
  public resetV1OutNewGroupModeRsp() {
    this._v1OutNewGroupModeRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutNewGroupModeRspInput() {
    return this._v1OutNewGroupModeRsp;
  }

  // v1_out_quick_mode_req - computed: false, optional: true, required: false
  private _v1OutQuickModeReq?: number; 
  public get v1OutQuickModeReq() {
    return this.getNumberAttribute('v1_out_quick_mode_req');
  }
  public set v1OutQuickModeReq(value: number) {
    this._v1OutQuickModeReq = value;
  }
  public resetV1OutQuickModeReq() {
    this._v1OutQuickModeReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutQuickModeReqInput() {
    return this._v1OutQuickModeReq;
  }

  // v1_out_quick_mode_rsp - computed: false, optional: true, required: false
  private _v1OutQuickModeRsp?: number; 
  public get v1OutQuickModeRsp() {
    return this.getNumberAttribute('v1_out_quick_mode_rsp');
  }
  public set v1OutQuickModeRsp(value: number) {
    this._v1OutQuickModeRsp = value;
  }
  public resetV1OutQuickModeRsp() {
    this._v1OutQuickModeRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutQuickModeRspInput() {
    return this._v1OutQuickModeRsp;
  }

  // v1_out_transaction_req - computed: false, optional: true, required: false
  private _v1OutTransactionReq?: number; 
  public get v1OutTransactionReq() {
    return this.getNumberAttribute('v1_out_transaction_req');
  }
  public set v1OutTransactionReq(value: number) {
    this._v1OutTransactionReq = value;
  }
  public resetV1OutTransactionReq() {
    this._v1OutTransactionReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutTransactionReqInput() {
    return this._v1OutTransactionReq;
  }

  // v1_out_transaction_rsp - computed: false, optional: true, required: false
  private _v1OutTransactionRsp?: number; 
  public get v1OutTransactionRsp() {
    return this.getNumberAttribute('v1_out_transaction_rsp');
  }
  public set v1OutTransactionRsp(value: number) {
    this._v1OutTransactionRsp = value;
  }
  public resetV1OutTransactionRsp() {
    this._v1OutTransactionRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v1OutTransactionRspInput() {
    return this._v1OutTransactionRsp;
  }

  // v2_child_sa_invalid_spi - computed: false, optional: true, required: false
  private _v2ChildSaInvalidSpi?: number; 
  public get v2ChildSaInvalidSpi() {
    return this.getNumberAttribute('v2_child_sa_invalid_spi');
  }
  public set v2ChildSaInvalidSpi(value: number) {
    this._v2ChildSaInvalidSpi = value;
  }
  public resetV2ChildSaInvalidSpi() {
    this._v2ChildSaInvalidSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2ChildSaInvalidSpiInput() {
    return this._v2ChildSaInvalidSpi;
  }

  // v2_child_sa_rekey - computed: false, optional: true, required: false
  private _v2ChildSaRekey?: number; 
  public get v2ChildSaRekey() {
    return this.getNumberAttribute('v2_child_sa_rekey');
  }
  public set v2ChildSaRekey(value: number) {
    this._v2ChildSaRekey = value;
  }
  public resetV2ChildSaRekey() {
    this._v2ChildSaRekey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2ChildSaRekeyInput() {
    return this._v2ChildSaRekey;
  }

  // v2_in_auth_req - computed: false, optional: true, required: false
  private _v2InAuthReq?: number; 
  public get v2InAuthReq() {
    return this.getNumberAttribute('v2_in_auth_req');
  }
  public set v2InAuthReq(value: number) {
    this._v2InAuthReq = value;
  }
  public resetV2InAuthReq() {
    this._v2InAuthReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InAuthReqInput() {
    return this._v2InAuthReq;
  }

  // v2_in_auth_rsp - computed: false, optional: true, required: false
  private _v2InAuthRsp?: number; 
  public get v2InAuthRsp() {
    return this.getNumberAttribute('v2_in_auth_rsp');
  }
  public set v2InAuthRsp(value: number) {
    this._v2InAuthRsp = value;
  }
  public resetV2InAuthRsp() {
    this._v2InAuthRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InAuthRspInput() {
    return this._v2InAuthRsp;
  }

  // v2_in_create_child_req - computed: false, optional: true, required: false
  private _v2InCreateChildReq?: number; 
  public get v2InCreateChildReq() {
    return this.getNumberAttribute('v2_in_create_child_req');
  }
  public set v2InCreateChildReq(value: number) {
    this._v2InCreateChildReq = value;
  }
  public resetV2InCreateChildReq() {
    this._v2InCreateChildReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InCreateChildReqInput() {
    return this._v2InCreateChildReq;
  }

  // v2_in_create_child_rsp - computed: false, optional: true, required: false
  private _v2InCreateChildRsp?: number; 
  public get v2InCreateChildRsp() {
    return this.getNumberAttribute('v2_in_create_child_rsp');
  }
  public set v2InCreateChildRsp(value: number) {
    this._v2InCreateChildRsp = value;
  }
  public resetV2InCreateChildRsp() {
    this._v2InCreateChildRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InCreateChildRspInput() {
    return this._v2InCreateChildRsp;
  }

  // v2_in_info_req - computed: false, optional: true, required: false
  private _v2InInfoReq?: number; 
  public get v2InInfoReq() {
    return this.getNumberAttribute('v2_in_info_req');
  }
  public set v2InInfoReq(value: number) {
    this._v2InInfoReq = value;
  }
  public resetV2InInfoReq() {
    this._v2InInfoReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InInfoReqInput() {
    return this._v2InInfoReq;
  }

  // v2_in_info_rsp - computed: false, optional: true, required: false
  private _v2InInfoRsp?: number; 
  public get v2InInfoRsp() {
    return this.getNumberAttribute('v2_in_info_rsp');
  }
  public set v2InInfoRsp(value: number) {
    this._v2InInfoRsp = value;
  }
  public resetV2InInfoRsp() {
    this._v2InInfoRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InInfoRspInput() {
    return this._v2InInfoRsp;
  }

  // v2_in_init_req - computed: false, optional: true, required: false
  private _v2InInitReq?: number; 
  public get v2InInitReq() {
    return this.getNumberAttribute('v2_in_init_req');
  }
  public set v2InInitReq(value: number) {
    this._v2InInitReq = value;
  }
  public resetV2InInitReq() {
    this._v2InInitReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InInitReqInput() {
    return this._v2InInitReq;
  }

  // v2_in_init_rsp - computed: false, optional: true, required: false
  private _v2InInitRsp?: number; 
  public get v2InInitRsp() {
    return this.getNumberAttribute('v2_in_init_rsp');
  }
  public set v2InInitRsp(value: number) {
    this._v2InInitRsp = value;
  }
  public resetV2InInitRsp() {
    this._v2InInitRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InInitRspInput() {
    return this._v2InInitRsp;
  }

  // v2_in_invalid - computed: false, optional: true, required: false
  private _v2InInvalid?: number; 
  public get v2InInvalid() {
    return this.getNumberAttribute('v2_in_invalid');
  }
  public set v2InInvalid(value: number) {
    this._v2InInvalid = value;
  }
  public resetV2InInvalid() {
    this._v2InInvalid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InInvalidInput() {
    return this._v2InInvalid;
  }

  // v2_in_invalid_spi - computed: false, optional: true, required: false
  private _v2InInvalidSpi?: number; 
  public get v2InInvalidSpi() {
    return this.getNumberAttribute('v2_in_invalid_spi');
  }
  public set v2InInvalidSpi(value: number) {
    this._v2InInvalidSpi = value;
  }
  public resetV2InInvalidSpi() {
    this._v2InInvalidSpi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InInvalidSpiInput() {
    return this._v2InInvalidSpi;
  }

  // v2_init_rekey - computed: false, optional: true, required: false
  private _v2InitRekey?: number; 
  public get v2InitRekey() {
    return this.getNumberAttribute('v2_init_rekey');
  }
  public set v2InitRekey(value: number) {
    this._v2InitRekey = value;
  }
  public resetV2InitRekey() {
    this._v2InitRekey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2InitRekeyInput() {
    return this._v2InitRekey;
  }

  // v2_out_auth_req - computed: false, optional: true, required: false
  private _v2OutAuthReq?: number; 
  public get v2OutAuthReq() {
    return this.getNumberAttribute('v2_out_auth_req');
  }
  public set v2OutAuthReq(value: number) {
    this._v2OutAuthReq = value;
  }
  public resetV2OutAuthReq() {
    this._v2OutAuthReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutAuthReqInput() {
    return this._v2OutAuthReq;
  }

  // v2_out_auth_rsp - computed: false, optional: true, required: false
  private _v2OutAuthRsp?: number; 
  public get v2OutAuthRsp() {
    return this.getNumberAttribute('v2_out_auth_rsp');
  }
  public set v2OutAuthRsp(value: number) {
    this._v2OutAuthRsp = value;
  }
  public resetV2OutAuthRsp() {
    this._v2OutAuthRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutAuthRspInput() {
    return this._v2OutAuthRsp;
  }

  // v2_out_create_child_req - computed: false, optional: true, required: false
  private _v2OutCreateChildReq?: number; 
  public get v2OutCreateChildReq() {
    return this.getNumberAttribute('v2_out_create_child_req');
  }
  public set v2OutCreateChildReq(value: number) {
    this._v2OutCreateChildReq = value;
  }
  public resetV2OutCreateChildReq() {
    this._v2OutCreateChildReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutCreateChildReqInput() {
    return this._v2OutCreateChildReq;
  }

  // v2_out_create_child_rsp - computed: false, optional: true, required: false
  private _v2OutCreateChildRsp?: number; 
  public get v2OutCreateChildRsp() {
    return this.getNumberAttribute('v2_out_create_child_rsp');
  }
  public set v2OutCreateChildRsp(value: number) {
    this._v2OutCreateChildRsp = value;
  }
  public resetV2OutCreateChildRsp() {
    this._v2OutCreateChildRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutCreateChildRspInput() {
    return this._v2OutCreateChildRsp;
  }

  // v2_out_info_req - computed: false, optional: true, required: false
  private _v2OutInfoReq?: number; 
  public get v2OutInfoReq() {
    return this.getNumberAttribute('v2_out_info_req');
  }
  public set v2OutInfoReq(value: number) {
    this._v2OutInfoReq = value;
  }
  public resetV2OutInfoReq() {
    this._v2OutInfoReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutInfoReqInput() {
    return this._v2OutInfoReq;
  }

  // v2_out_info_rsp - computed: false, optional: true, required: false
  private _v2OutInfoRsp?: number; 
  public get v2OutInfoRsp() {
    return this.getNumberAttribute('v2_out_info_rsp');
  }
  public set v2OutInfoRsp(value: number) {
    this._v2OutInfoRsp = value;
  }
  public resetV2OutInfoRsp() {
    this._v2OutInfoRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutInfoRspInput() {
    return this._v2OutInfoRsp;
  }

  // v2_out_init_req - computed: false, optional: true, required: false
  private _v2OutInitReq?: number; 
  public get v2OutInitReq() {
    return this.getNumberAttribute('v2_out_init_req');
  }
  public set v2OutInitReq(value: number) {
    this._v2OutInitReq = value;
  }
  public resetV2OutInitReq() {
    this._v2OutInitReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutInitReqInput() {
    return this._v2OutInitReq;
  }

  // v2_out_init_rsp - computed: false, optional: true, required: false
  private _v2OutInitRsp?: number; 
  public get v2OutInitRsp() {
    return this.getNumberAttribute('v2_out_init_rsp');
  }
  public set v2OutInitRsp(value: number) {
    this._v2OutInitRsp = value;
  }
  public resetV2OutInitRsp() {
    this._v2OutInitRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2OutInitRspInput() {
    return this._v2OutInitRsp;
  }

  // v2_rsp_rekey - computed: false, optional: true, required: false
  private _v2RspRekey?: number; 
  public get v2RspRekey() {
    return this.getNumberAttribute('v2_rsp_rekey');
  }
  public set v2RspRekey(value: number) {
    this._v2RspRekey = value;
  }
  public resetV2RspRekey() {
    this._v2RspRekey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v2RspRekeyInput() {
    return this._v2RspRekey;
  }
}

export class DataThunderVpnIkeStatsByGwOperOperIkeStatsListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVpnIkeStatsByGwOperOperIkeStatsListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataThunderVpnIkeStatsByGwOperOperIkeStatsListStructOutputReference {
    return new DataThunderVpnIkeStatsByGwOperOperIkeStatsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVpnIkeStatsByGwOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#display_all_filter DataThunderVpnIkeStatsByGwOper#display_all_filter}
  */
  readonly displayAllFilter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#gateway_name_filter DataThunderVpnIkeStatsByGwOper#gateway_name_filter}
  */
  readonly gatewayNameFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#remote_id_filter DataThunderVpnIkeStatsByGwOper#remote_id_filter}
  */
  readonly remoteIdFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#remote_ip_filter DataThunderVpnIkeStatsByGwOper#remote_ip_filter}
  */
  readonly remoteIpFilter?: string;
  /**
  * ike_stats_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#ike_stats_list DataThunderVpnIkeStatsByGwOper#ike_stats_list}
  */
  readonly ikeStatsList?: DataThunderVpnIkeStatsByGwOperOperIkeStatsListStruct[] | cdktf.IResolvable;
}

export function dataThunderVpnIkeStatsByGwOperOperToTerraform(struct?: DataThunderVpnIkeStatsByGwOperOperOutputReference | DataThunderVpnIkeStatsByGwOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    display_all_filter: cdktf.numberToTerraform(struct!.displayAllFilter),
    gateway_name_filter: cdktf.stringToTerraform(struct!.gatewayNameFilter),
    remote_id_filter: cdktf.stringToTerraform(struct!.remoteIdFilter),
    remote_ip_filter: cdktf.stringToTerraform(struct!.remoteIpFilter),
    ike_stats_list: cdktf.listMapper(dataThunderVpnIkeStatsByGwOperOperIkeStatsListStructToTerraform, true)(struct!.ikeStatsList),
  }
}


export function dataThunderVpnIkeStatsByGwOperOperToHclTerraform(struct?: DataThunderVpnIkeStatsByGwOperOperOutputReference | DataThunderVpnIkeStatsByGwOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    display_all_filter: {
      value: cdktf.numberToHclTerraform(struct!.displayAllFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gateway_name_filter: {
      value: cdktf.stringToHclTerraform(struct!.gatewayNameFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_id_filter: {
      value: cdktf.stringToHclTerraform(struct!.remoteIdFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_ip_filter: {
      value: cdktf.stringToHclTerraform(struct!.remoteIpFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_stats_list: {
      value: cdktf.listMapperHcl(dataThunderVpnIkeStatsByGwOperOperIkeStatsListStructToHclTerraform, true)(struct!.ikeStatsList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVpnIkeStatsByGwOperOperIkeStatsListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVpnIkeStatsByGwOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVpnIkeStatsByGwOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._displayAllFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayAllFilter = this._displayAllFilter;
    }
    if (this._gatewayNameFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayNameFilter = this._gatewayNameFilter;
    }
    if (this._remoteIdFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIdFilter = this._remoteIdFilter;
    }
    if (this._remoteIpFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteIpFilter = this._remoteIpFilter;
    }
    if (this._ikeStatsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeStatsList = this._ikeStatsList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVpnIkeStatsByGwOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._displayAllFilter = undefined;
      this._gatewayNameFilter = undefined;
      this._remoteIdFilter = undefined;
      this._remoteIpFilter = undefined;
      this._ikeStatsList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._displayAllFilter = value.displayAllFilter;
      this._gatewayNameFilter = value.gatewayNameFilter;
      this._remoteIdFilter = value.remoteIdFilter;
      this._remoteIpFilter = value.remoteIpFilter;
      this._ikeStatsList.internalValue = value.ikeStatsList;
    }
  }

  // display_all_filter - computed: false, optional: true, required: false
  private _displayAllFilter?: number; 
  public get displayAllFilter() {
    return this.getNumberAttribute('display_all_filter');
  }
  public set displayAllFilter(value: number) {
    this._displayAllFilter = value;
  }
  public resetDisplayAllFilter() {
    this._displayAllFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayAllFilterInput() {
    return this._displayAllFilter;
  }

  // gateway_name_filter - computed: false, optional: true, required: false
  private _gatewayNameFilter?: string; 
  public get gatewayNameFilter() {
    return this.getStringAttribute('gateway_name_filter');
  }
  public set gatewayNameFilter(value: string) {
    this._gatewayNameFilter = value;
  }
  public resetGatewayNameFilter() {
    this._gatewayNameFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayNameFilterInput() {
    return this._gatewayNameFilter;
  }

  // remote_id_filter - computed: false, optional: true, required: false
  private _remoteIdFilter?: string; 
  public get remoteIdFilter() {
    return this.getStringAttribute('remote_id_filter');
  }
  public set remoteIdFilter(value: string) {
    this._remoteIdFilter = value;
  }
  public resetRemoteIdFilter() {
    this._remoteIdFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdFilterInput() {
    return this._remoteIdFilter;
  }

  // remote_ip_filter - computed: false, optional: true, required: false
  private _remoteIpFilter?: string; 
  public get remoteIpFilter() {
    return this.getStringAttribute('remote_ip_filter');
  }
  public set remoteIpFilter(value: string) {
    this._remoteIpFilter = value;
  }
  public resetRemoteIpFilter() {
    this._remoteIpFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIpFilterInput() {
    return this._remoteIpFilter;
  }

  // ike_stats_list - computed: false, optional: true, required: false
  private _ikeStatsList = new DataThunderVpnIkeStatsByGwOperOperIkeStatsListStructList(this, "ike_stats_list", false);
  public get ikeStatsList() {
    return this._ikeStatsList;
  }
  public putIkeStatsList(value: DataThunderVpnIkeStatsByGwOperOperIkeStatsListStruct[] | cdktf.IResolvable) {
    this._ikeStatsList.internalValue = value;
  }
  public resetIkeStatsList() {
    this._ikeStatsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeStatsListInput() {
    return this._ikeStatsList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper thunder_vpn_ike_stats_by_gw_oper}
*/
export class DataThunderVpnIkeStatsByGwOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vpn_ike_stats_by_gw_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVpnIkeStatsByGwOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVpnIkeStatsByGwOper to import
  * @param importFromId The id of the existing DataThunderVpnIkeStatsByGwOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVpnIkeStatsByGwOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vpn_ike_stats_by_gw_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/vpn_ike_stats_by_gw_oper thunder_vpn_ike_stats_by_gw_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVpnIkeStatsByGwOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVpnIkeStatsByGwOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vpn_ike_stats_by_gw_oper',
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderVpnIkeStatsByGwOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVpnIkeStatsByGwOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderVpnIkeStatsByGwOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderVpnIkeStatsByGwOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVpnIkeStatsByGwOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
