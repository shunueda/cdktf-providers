// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbGenericProxyOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#id DataThunderSlbGenericProxyOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#oper DataThunderSlbGenericProxyOper#oper}
  */
  readonly oper?: DataThunderSlbGenericProxyOperOper;
}
export interface DataThunderSlbGenericProxyOperOperGenericProxyCpuListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#aca_in DataThunderSlbGenericProxyOper#aca_in}
  */
  readonly acaIn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#aca_out DataThunderSlbGenericProxyOper#aca_out}
  */
  readonly acaOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#acr_in DataThunderSlbGenericProxyOper#acr_in}
  */
  readonly acrIn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#acr_out DataThunderSlbGenericProxyOper#acr_out}
  */
  readonly acrOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#asa_in DataThunderSlbGenericProxyOper#asa_in}
  */
  readonly asaIn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#asa_out DataThunderSlbGenericProxyOper#asa_out}
  */
  readonly asaOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#asr_in DataThunderSlbGenericProxyOper#asr_in}
  */
  readonly asrIn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#asr_out DataThunderSlbGenericProxyOper#asr_out}
  */
  readonly asrOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#cca_in DataThunderSlbGenericProxyOper#cca_in}
  */
  readonly ccaIn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#cca_out DataThunderSlbGenericProxyOper#cca_out}
  */
  readonly ccaOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#cca_t DataThunderSlbGenericProxyOper#cca_t}
  */
  readonly ccaT?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#ccr_i DataThunderSlbGenericProxyOper#ccr_i}
  */
  readonly ccrI?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#ccr_in DataThunderSlbGenericProxyOper#ccr_in}
  */
  readonly ccrIn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#ccr_out DataThunderSlbGenericProxyOper#ccr_out}
  */
  readonly ccrOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#ccr_t DataThunderSlbGenericProxyOper#ccr_t}
  */
  readonly ccrT?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#ccr_u DataThunderSlbGenericProxyOper#ccr_u}
  */
  readonly ccrU?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#cea_in DataThunderSlbGenericProxyOper#cea_in}
  */
  readonly ceaIn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#cea_out DataThunderSlbGenericProxyOper#cea_out}
  */
  readonly ceaOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#cer_in DataThunderSlbGenericProxyOper#cer_in}
  */
  readonly cerIn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#cer_out DataThunderSlbGenericProxyOper#cer_out}
  */
  readonly cerOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#client_fail DataThunderSlbGenericProxyOper#client_fail}
  */
  readonly clientFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#client_select_fail DataThunderSlbGenericProxyOper#client_select_fail}
  */
  readonly clientSelectFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#close_conn_when_vport_down DataThunderSlbGenericProxyOper#close_conn_when_vport_down}
  */
  readonly closeConnWhenVportDown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#conn_closed_by_client DataThunderSlbGenericProxyOper#conn_closed_by_client}
  */
  readonly connClosedByClient?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#conn_closed_by_server DataThunderSlbGenericProxyOper#conn_closed_by_server}
  */
  readonly connClosedByServer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#curr_proxy_conns DataThunderSlbGenericProxyOper#curr_proxy_conns}
  */
  readonly currProxyConns?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#dcmsg_error DataThunderSlbGenericProxyOper#dcmsg_error}
  */
  readonly dcmsgError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#dcmsg_fwd_in DataThunderSlbGenericProxyOper#dcmsg_fwd_in}
  */
  readonly dcmsgFwdIn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#dcmsg_fwd_out DataThunderSlbGenericProxyOper#dcmsg_fwd_out}
  */
  readonly dcmsgFwdOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#dcmsg_rev_in DataThunderSlbGenericProxyOper#dcmsg_rev_in}
  */
  readonly dcmsgRevIn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#dcmsg_rev_out DataThunderSlbGenericProxyOper#dcmsg_rev_out}
  */
  readonly dcmsgRevOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#dpa_in DataThunderSlbGenericProxyOper#dpa_in}
  */
  readonly dpaIn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#dpa_out DataThunderSlbGenericProxyOper#dpa_out}
  */
  readonly dpaOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#dpr_in DataThunderSlbGenericProxyOper#dpr_in}
  */
  readonly dprIn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#dpr_out DataThunderSlbGenericProxyOper#dpr_out}
  */
  readonly dprOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#dwa_in DataThunderSlbGenericProxyOper#dwa_in}
  */
  readonly dwaIn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#dwa_out DataThunderSlbGenericProxyOper#dwa_out}
  */
  readonly dwaOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#dwr_in DataThunderSlbGenericProxyOper#dwr_in}
  */
  readonly dwrIn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#dwr_out DataThunderSlbGenericProxyOper#dwr_out}
  */
  readonly dwrOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#forward_unknown_session_id DataThunderSlbGenericProxyOper#forward_unknown_session_id}
  */
  readonly forwardUnknownSessionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#invalid_avp DataThunderSlbGenericProxyOper#invalid_avp}
  */
  readonly invalidAvp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#mismatch_fwd_id DataThunderSlbGenericProxyOper#mismatch_fwd_id}
  */
  readonly mismatchFwdId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#mismatch_rev_id DataThunderSlbGenericProxyOper#mismatch_rev_id}
  */
  readonly mismatchRevId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#no_fwd_tuple DataThunderSlbGenericProxyOper#no_fwd_tuple}
  */
  readonly noFwdTuple?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#no_rev_tuple DataThunderSlbGenericProxyOper#no_rev_tuple}
  */
  readonly noRevTuple?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#no_route_fail DataThunderSlbGenericProxyOper#no_route_fail}
  */
  readonly noRouteFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#no_session_id DataThunderSlbGenericProxyOper#no_session_id}
  */
  readonly noSessionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#other_in DataThunderSlbGenericProxyOper#other_in}
  */
  readonly otherIn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#other_out DataThunderSlbGenericProxyOper#other_out}
  */
  readonly otherOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#reply_error_info_fail DataThunderSlbGenericProxyOper#reply_error_info_fail}
  */
  readonly replyErrorInfoFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#reply_invalid_avp_value DataThunderSlbGenericProxyOper#reply_invalid_avp_value}
  */
  readonly replyInvalidAvpValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#reply_unable_to_deliver DataThunderSlbGenericProxyOper#reply_unable_to_deliver}
  */
  readonly replyUnableToDeliver?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#reply_unknown_session_id DataThunderSlbGenericProxyOper#reply_unknown_session_id}
  */
  readonly replyUnknownSessionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#reselect_fwd_tuple DataThunderSlbGenericProxyOper#reselect_fwd_tuple}
  */
  readonly reselectFwdTuple?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#reselect_fwd_tuple_other_cpu DataThunderSlbGenericProxyOper#reselect_fwd_tuple_other_cpu}
  */
  readonly reselectFwdTupleOtherCpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#reselect_rev_tuple DataThunderSlbGenericProxyOper#reselect_rev_tuple}
  */
  readonly reselectRevTuple?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#retry_client_request DataThunderSlbGenericProxyOper#retry_client_request}
  */
  readonly retryClientRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#retry_client_request_fail DataThunderSlbGenericProxyOper#retry_client_request_fail}
  */
  readonly retryClientRequestFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#server_fail DataThunderSlbGenericProxyOper#server_fail}
  */
  readonly serverFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#server_selection_fail DataThunderSlbGenericProxyOper#server_selection_fail}
  */
  readonly serverSelectionFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#source_nat_fail DataThunderSlbGenericProxyOper#source_nat_fail}
  */
  readonly sourceNatFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#sta_in DataThunderSlbGenericProxyOper#sta_in}
  */
  readonly staIn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#sta_out DataThunderSlbGenericProxyOper#sta_out}
  */
  readonly staOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#str_in DataThunderSlbGenericProxyOper#str_in}
  */
  readonly strIn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#str_out DataThunderSlbGenericProxyOper#str_out}
  */
  readonly strOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#terminate_on_cca_t DataThunderSlbGenericProxyOper#terminate_on_cca_t}
  */
  readonly terminateOnCcaT?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#total_http_conn_generic_proxy DataThunderSlbGenericProxyOper#total_http_conn_generic_proxy}
  */
  readonly totalHttpConnGenericProxy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#total_proxy_conns DataThunderSlbGenericProxyOper#total_proxy_conns}
  */
  readonly totalProxyConns?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#unkwn_cmd_code DataThunderSlbGenericProxyOper#unkwn_cmd_code}
  */
  readonly unkwnCmdCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#update_latest_server DataThunderSlbGenericProxyOper#update_latest_server}
  */
  readonly updateLatestServer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#user_session DataThunderSlbGenericProxyOper#user_session}
  */
  readonly userSession?: string;
}

export function dataThunderSlbGenericProxyOperOperGenericProxyCpuListStructToTerraform(struct?: DataThunderSlbGenericProxyOperOperGenericProxyCpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aca_in: cdktf.numberToTerraform(struct!.acaIn),
    aca_out: cdktf.numberToTerraform(struct!.acaOut),
    acr_in: cdktf.numberToTerraform(struct!.acrIn),
    acr_out: cdktf.numberToTerraform(struct!.acrOut),
    asa_in: cdktf.numberToTerraform(struct!.asaIn),
    asa_out: cdktf.numberToTerraform(struct!.asaOut),
    asr_in: cdktf.numberToTerraform(struct!.asrIn),
    asr_out: cdktf.numberToTerraform(struct!.asrOut),
    cca_in: cdktf.numberToTerraform(struct!.ccaIn),
    cca_out: cdktf.numberToTerraform(struct!.ccaOut),
    cca_t: cdktf.numberToTerraform(struct!.ccaT),
    ccr_i: cdktf.numberToTerraform(struct!.ccrI),
    ccr_in: cdktf.numberToTerraform(struct!.ccrIn),
    ccr_out: cdktf.numberToTerraform(struct!.ccrOut),
    ccr_t: cdktf.numberToTerraform(struct!.ccrT),
    ccr_u: cdktf.numberToTerraform(struct!.ccrU),
    cea_in: cdktf.numberToTerraform(struct!.ceaIn),
    cea_out: cdktf.numberToTerraform(struct!.ceaOut),
    cer_in: cdktf.numberToTerraform(struct!.cerIn),
    cer_out: cdktf.numberToTerraform(struct!.cerOut),
    client_fail: cdktf.numberToTerraform(struct!.clientFail),
    client_select_fail: cdktf.numberToTerraform(struct!.clientSelectFail),
    close_conn_when_vport_down: cdktf.numberToTerraform(struct!.closeConnWhenVportDown),
    conn_closed_by_client: cdktf.numberToTerraform(struct!.connClosedByClient),
    conn_closed_by_server: cdktf.numberToTerraform(struct!.connClosedByServer),
    curr_proxy_conns: cdktf.numberToTerraform(struct!.currProxyConns),
    dcmsg_error: cdktf.numberToTerraform(struct!.dcmsgError),
    dcmsg_fwd_in: cdktf.numberToTerraform(struct!.dcmsgFwdIn),
    dcmsg_fwd_out: cdktf.numberToTerraform(struct!.dcmsgFwdOut),
    dcmsg_rev_in: cdktf.numberToTerraform(struct!.dcmsgRevIn),
    dcmsg_rev_out: cdktf.numberToTerraform(struct!.dcmsgRevOut),
    dpa_in: cdktf.numberToTerraform(struct!.dpaIn),
    dpa_out: cdktf.numberToTerraform(struct!.dpaOut),
    dpr_in: cdktf.numberToTerraform(struct!.dprIn),
    dpr_out: cdktf.numberToTerraform(struct!.dprOut),
    dwa_in: cdktf.numberToTerraform(struct!.dwaIn),
    dwa_out: cdktf.numberToTerraform(struct!.dwaOut),
    dwr_in: cdktf.numberToTerraform(struct!.dwrIn),
    dwr_out: cdktf.numberToTerraform(struct!.dwrOut),
    forward_unknown_session_id: cdktf.numberToTerraform(struct!.forwardUnknownSessionId),
    invalid_avp: cdktf.numberToTerraform(struct!.invalidAvp),
    mismatch_fwd_id: cdktf.numberToTerraform(struct!.mismatchFwdId),
    mismatch_rev_id: cdktf.numberToTerraform(struct!.mismatchRevId),
    no_fwd_tuple: cdktf.numberToTerraform(struct!.noFwdTuple),
    no_rev_tuple: cdktf.numberToTerraform(struct!.noRevTuple),
    no_route_fail: cdktf.numberToTerraform(struct!.noRouteFail),
    no_session_id: cdktf.numberToTerraform(struct!.noSessionId),
    other_in: cdktf.numberToTerraform(struct!.otherIn),
    other_out: cdktf.numberToTerraform(struct!.otherOut),
    reply_error_info_fail: cdktf.numberToTerraform(struct!.replyErrorInfoFail),
    reply_invalid_avp_value: cdktf.numberToTerraform(struct!.replyInvalidAvpValue),
    reply_unable_to_deliver: cdktf.numberToTerraform(struct!.replyUnableToDeliver),
    reply_unknown_session_id: cdktf.numberToTerraform(struct!.replyUnknownSessionId),
    reselect_fwd_tuple: cdktf.numberToTerraform(struct!.reselectFwdTuple),
    reselect_fwd_tuple_other_cpu: cdktf.numberToTerraform(struct!.reselectFwdTupleOtherCpu),
    reselect_rev_tuple: cdktf.numberToTerraform(struct!.reselectRevTuple),
    retry_client_request: cdktf.numberToTerraform(struct!.retryClientRequest),
    retry_client_request_fail: cdktf.numberToTerraform(struct!.retryClientRequestFail),
    server_fail: cdktf.numberToTerraform(struct!.serverFail),
    server_selection_fail: cdktf.numberToTerraform(struct!.serverSelectionFail),
    source_nat_fail: cdktf.numberToTerraform(struct!.sourceNatFail),
    sta_in: cdktf.numberToTerraform(struct!.staIn),
    sta_out: cdktf.numberToTerraform(struct!.staOut),
    str_in: cdktf.numberToTerraform(struct!.strIn),
    str_out: cdktf.numberToTerraform(struct!.strOut),
    terminate_on_cca_t: cdktf.numberToTerraform(struct!.terminateOnCcaT),
    total_http_conn_generic_proxy: cdktf.numberToTerraform(struct!.totalHttpConnGenericProxy),
    total_proxy_conns: cdktf.numberToTerraform(struct!.totalProxyConns),
    unkwn_cmd_code: cdktf.numberToTerraform(struct!.unkwnCmdCode),
    update_latest_server: cdktf.numberToTerraform(struct!.updateLatestServer),
    user_session: cdktf.stringToTerraform(struct!.userSession),
  }
}


export function dataThunderSlbGenericProxyOperOperGenericProxyCpuListStructToHclTerraform(struct?: DataThunderSlbGenericProxyOperOperGenericProxyCpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aca_in: {
      value: cdktf.numberToHclTerraform(struct!.acaIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aca_out: {
      value: cdktf.numberToHclTerraform(struct!.acaOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acr_in: {
      value: cdktf.numberToHclTerraform(struct!.acrIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acr_out: {
      value: cdktf.numberToHclTerraform(struct!.acrOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asa_in: {
      value: cdktf.numberToHclTerraform(struct!.asaIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asa_out: {
      value: cdktf.numberToHclTerraform(struct!.asaOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asr_in: {
      value: cdktf.numberToHclTerraform(struct!.asrIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asr_out: {
      value: cdktf.numberToHclTerraform(struct!.asrOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cca_in: {
      value: cdktf.numberToHclTerraform(struct!.ccaIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cca_out: {
      value: cdktf.numberToHclTerraform(struct!.ccaOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cca_t: {
      value: cdktf.numberToHclTerraform(struct!.ccaT),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ccr_i: {
      value: cdktf.numberToHclTerraform(struct!.ccrI),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ccr_in: {
      value: cdktf.numberToHclTerraform(struct!.ccrIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ccr_out: {
      value: cdktf.numberToHclTerraform(struct!.ccrOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ccr_t: {
      value: cdktf.numberToHclTerraform(struct!.ccrT),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ccr_u: {
      value: cdktf.numberToHclTerraform(struct!.ccrU),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cea_in: {
      value: cdktf.numberToHclTerraform(struct!.ceaIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cea_out: {
      value: cdktf.numberToHclTerraform(struct!.ceaOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cer_in: {
      value: cdktf.numberToHclTerraform(struct!.cerIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cer_out: {
      value: cdktf.numberToHclTerraform(struct!.cerOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_fail: {
      value: cdktf.numberToHclTerraform(struct!.clientFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_select_fail: {
      value: cdktf.numberToHclTerraform(struct!.clientSelectFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    close_conn_when_vport_down: {
      value: cdktf.numberToHclTerraform(struct!.closeConnWhenVportDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_closed_by_client: {
      value: cdktf.numberToHclTerraform(struct!.connClosedByClient),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_closed_by_server: {
      value: cdktf.numberToHclTerraform(struct!.connClosedByServer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_proxy_conns: {
      value: cdktf.numberToHclTerraform(struct!.currProxyConns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dcmsg_error: {
      value: cdktf.numberToHclTerraform(struct!.dcmsgError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dcmsg_fwd_in: {
      value: cdktf.numberToHclTerraform(struct!.dcmsgFwdIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dcmsg_fwd_out: {
      value: cdktf.numberToHclTerraform(struct!.dcmsgFwdOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dcmsg_rev_in: {
      value: cdktf.numberToHclTerraform(struct!.dcmsgRevIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dcmsg_rev_out: {
      value: cdktf.numberToHclTerraform(struct!.dcmsgRevOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dpa_in: {
      value: cdktf.numberToHclTerraform(struct!.dpaIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dpa_out: {
      value: cdktf.numberToHclTerraform(struct!.dpaOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dpr_in: {
      value: cdktf.numberToHclTerraform(struct!.dprIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dpr_out: {
      value: cdktf.numberToHclTerraform(struct!.dprOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dwa_in: {
      value: cdktf.numberToHclTerraform(struct!.dwaIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dwa_out: {
      value: cdktf.numberToHclTerraform(struct!.dwaOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dwr_in: {
      value: cdktf.numberToHclTerraform(struct!.dwrIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dwr_out: {
      value: cdktf.numberToHclTerraform(struct!.dwrOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forward_unknown_session_id: {
      value: cdktf.numberToHclTerraform(struct!.forwardUnknownSessionId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_avp: {
      value: cdktf.numberToHclTerraform(struct!.invalidAvp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mismatch_fwd_id: {
      value: cdktf.numberToHclTerraform(struct!.mismatchFwdId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mismatch_rev_id: {
      value: cdktf.numberToHclTerraform(struct!.mismatchRevId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_fwd_tuple: {
      value: cdktf.numberToHclTerraform(struct!.noFwdTuple),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_rev_tuple: {
      value: cdktf.numberToHclTerraform(struct!.noRevTuple),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_route_fail: {
      value: cdktf.numberToHclTerraform(struct!.noRouteFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_session_id: {
      value: cdktf.numberToHclTerraform(struct!.noSessionId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_in: {
      value: cdktf.numberToHclTerraform(struct!.otherIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_out: {
      value: cdktf.numberToHclTerraform(struct!.otherOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reply_error_info_fail: {
      value: cdktf.numberToHclTerraform(struct!.replyErrorInfoFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reply_invalid_avp_value: {
      value: cdktf.numberToHclTerraform(struct!.replyInvalidAvpValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reply_unable_to_deliver: {
      value: cdktf.numberToHclTerraform(struct!.replyUnableToDeliver),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reply_unknown_session_id: {
      value: cdktf.numberToHclTerraform(struct!.replyUnknownSessionId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reselect_fwd_tuple: {
      value: cdktf.numberToHclTerraform(struct!.reselectFwdTuple),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reselect_fwd_tuple_other_cpu: {
      value: cdktf.numberToHclTerraform(struct!.reselectFwdTupleOtherCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reselect_rev_tuple: {
      value: cdktf.numberToHclTerraform(struct!.reselectRevTuple),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_client_request: {
      value: cdktf.numberToHclTerraform(struct!.retryClientRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_client_request_fail: {
      value: cdktf.numberToHclTerraform(struct!.retryClientRequestFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_fail: {
      value: cdktf.numberToHclTerraform(struct!.serverFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_selection_fail: {
      value: cdktf.numberToHclTerraform(struct!.serverSelectionFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_nat_fail: {
      value: cdktf.numberToHclTerraform(struct!.sourceNatFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sta_in: {
      value: cdktf.numberToHclTerraform(struct!.staIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sta_out: {
      value: cdktf.numberToHclTerraform(struct!.staOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    str_in: {
      value: cdktf.numberToHclTerraform(struct!.strIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    str_out: {
      value: cdktf.numberToHclTerraform(struct!.strOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    terminate_on_cca_t: {
      value: cdktf.numberToHclTerraform(struct!.terminateOnCcaT),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_http_conn_generic_proxy: {
      value: cdktf.numberToHclTerraform(struct!.totalHttpConnGenericProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_proxy_conns: {
      value: cdktf.numberToHclTerraform(struct!.totalProxyConns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unkwn_cmd_code: {
      value: cdktf.numberToHclTerraform(struct!.unkwnCmdCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    update_latest_server: {
      value: cdktf.numberToHclTerraform(struct!.updateLatestServer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_session: {
      value: cdktf.stringToHclTerraform(struct!.userSession),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbGenericProxyOperOperGenericProxyCpuListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbGenericProxyOperOperGenericProxyCpuListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acaIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.acaIn = this._acaIn;
    }
    if (this._acaOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.acaOut = this._acaOut;
    }
    if (this._acrIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.acrIn = this._acrIn;
    }
    if (this._acrOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.acrOut = this._acrOut;
    }
    if (this._asaIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asaIn = this._asaIn;
    }
    if (this._asaOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.asaOut = this._asaOut;
    }
    if (this._asrIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asrIn = this._asrIn;
    }
    if (this._asrOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.asrOut = this._asrOut;
    }
    if (this._ccaIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccaIn = this._ccaIn;
    }
    if (this._ccaOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccaOut = this._ccaOut;
    }
    if (this._ccaT !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccaT = this._ccaT;
    }
    if (this._ccrI !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccrI = this._ccrI;
    }
    if (this._ccrIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccrIn = this._ccrIn;
    }
    if (this._ccrOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccrOut = this._ccrOut;
    }
    if (this._ccrT !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccrT = this._ccrT;
    }
    if (this._ccrU !== undefined) {
      hasAnyValues = true;
      internalValueResult.ccrU = this._ccrU;
    }
    if (this._ceaIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.ceaIn = this._ceaIn;
    }
    if (this._ceaOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.ceaOut = this._ceaOut;
    }
    if (this._cerIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.cerIn = this._cerIn;
    }
    if (this._cerOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.cerOut = this._cerOut;
    }
    if (this._clientFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientFail = this._clientFail;
    }
    if (this._clientSelectFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSelectFail = this._clientSelectFail;
    }
    if (this._closeConnWhenVportDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.closeConnWhenVportDown = this._closeConnWhenVportDown;
    }
    if (this._connClosedByClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.connClosedByClient = this._connClosedByClient;
    }
    if (this._connClosedByServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.connClosedByServer = this._connClosedByServer;
    }
    if (this._currProxyConns !== undefined) {
      hasAnyValues = true;
      internalValueResult.currProxyConns = this._currProxyConns;
    }
    if (this._dcmsgError !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcmsgError = this._dcmsgError;
    }
    if (this._dcmsgFwdIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcmsgFwdIn = this._dcmsgFwdIn;
    }
    if (this._dcmsgFwdOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcmsgFwdOut = this._dcmsgFwdOut;
    }
    if (this._dcmsgRevIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcmsgRevIn = this._dcmsgRevIn;
    }
    if (this._dcmsgRevOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcmsgRevOut = this._dcmsgRevOut;
    }
    if (this._dpaIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpaIn = this._dpaIn;
    }
    if (this._dpaOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.dpaOut = this._dpaOut;
    }
    if (this._dprIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dprIn = this._dprIn;
    }
    if (this._dprOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.dprOut = this._dprOut;
    }
    if (this._dwaIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dwaIn = this._dwaIn;
    }
    if (this._dwaOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.dwaOut = this._dwaOut;
    }
    if (this._dwrIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dwrIn = this._dwrIn;
    }
    if (this._dwrOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.dwrOut = this._dwrOut;
    }
    if (this._forwardUnknownSessionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardUnknownSessionId = this._forwardUnknownSessionId;
    }
    if (this._invalidAvp !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidAvp = this._invalidAvp;
    }
    if (this._mismatchFwdId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchFwdId = this._mismatchFwdId;
    }
    if (this._mismatchRevId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchRevId = this._mismatchRevId;
    }
    if (this._noFwdTuple !== undefined) {
      hasAnyValues = true;
      internalValueResult.noFwdTuple = this._noFwdTuple;
    }
    if (this._noRevTuple !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRevTuple = this._noRevTuple;
    }
    if (this._noRouteFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRouteFail = this._noRouteFail;
    }
    if (this._noSessionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSessionId = this._noSessionId;
    }
    if (this._otherIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherIn = this._otherIn;
    }
    if (this._otherOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherOut = this._otherOut;
    }
    if (this._replyErrorInfoFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.replyErrorInfoFail = this._replyErrorInfoFail;
    }
    if (this._replyInvalidAvpValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replyInvalidAvpValue = this._replyInvalidAvpValue;
    }
    if (this._replyUnableToDeliver !== undefined) {
      hasAnyValues = true;
      internalValueResult.replyUnableToDeliver = this._replyUnableToDeliver;
    }
    if (this._replyUnknownSessionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.replyUnknownSessionId = this._replyUnknownSessionId;
    }
    if (this._reselectFwdTuple !== undefined) {
      hasAnyValues = true;
      internalValueResult.reselectFwdTuple = this._reselectFwdTuple;
    }
    if (this._reselectFwdTupleOtherCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.reselectFwdTupleOtherCpu = this._reselectFwdTupleOtherCpu;
    }
    if (this._reselectRevTuple !== undefined) {
      hasAnyValues = true;
      internalValueResult.reselectRevTuple = this._reselectRevTuple;
    }
    if (this._retryClientRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryClientRequest = this._retryClientRequest;
    }
    if (this._retryClientRequestFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryClientRequestFail = this._retryClientRequestFail;
    }
    if (this._serverFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverFail = this._serverFail;
    }
    if (this._serverSelectionFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSelectionFail = this._serverSelectionFail;
    }
    if (this._sourceNatFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceNatFail = this._sourceNatFail;
    }
    if (this._staIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.staIn = this._staIn;
    }
    if (this._staOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.staOut = this._staOut;
    }
    if (this._strIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.strIn = this._strIn;
    }
    if (this._strOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.strOut = this._strOut;
    }
    if (this._terminateOnCcaT !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminateOnCcaT = this._terminateOnCcaT;
    }
    if (this._totalHttpConnGenericProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalHttpConnGenericProxy = this._totalHttpConnGenericProxy;
    }
    if (this._totalProxyConns !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalProxyConns = this._totalProxyConns;
    }
    if (this._unkwnCmdCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.unkwnCmdCode = this._unkwnCmdCode;
    }
    if (this._updateLatestServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateLatestServer = this._updateLatestServer;
    }
    if (this._userSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSession = this._userSession;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbGenericProxyOperOperGenericProxyCpuListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acaIn = undefined;
      this._acaOut = undefined;
      this._acrIn = undefined;
      this._acrOut = undefined;
      this._asaIn = undefined;
      this._asaOut = undefined;
      this._asrIn = undefined;
      this._asrOut = undefined;
      this._ccaIn = undefined;
      this._ccaOut = undefined;
      this._ccaT = undefined;
      this._ccrI = undefined;
      this._ccrIn = undefined;
      this._ccrOut = undefined;
      this._ccrT = undefined;
      this._ccrU = undefined;
      this._ceaIn = undefined;
      this._ceaOut = undefined;
      this._cerIn = undefined;
      this._cerOut = undefined;
      this._clientFail = undefined;
      this._clientSelectFail = undefined;
      this._closeConnWhenVportDown = undefined;
      this._connClosedByClient = undefined;
      this._connClosedByServer = undefined;
      this._currProxyConns = undefined;
      this._dcmsgError = undefined;
      this._dcmsgFwdIn = undefined;
      this._dcmsgFwdOut = undefined;
      this._dcmsgRevIn = undefined;
      this._dcmsgRevOut = undefined;
      this._dpaIn = undefined;
      this._dpaOut = undefined;
      this._dprIn = undefined;
      this._dprOut = undefined;
      this._dwaIn = undefined;
      this._dwaOut = undefined;
      this._dwrIn = undefined;
      this._dwrOut = undefined;
      this._forwardUnknownSessionId = undefined;
      this._invalidAvp = undefined;
      this._mismatchFwdId = undefined;
      this._mismatchRevId = undefined;
      this._noFwdTuple = undefined;
      this._noRevTuple = undefined;
      this._noRouteFail = undefined;
      this._noSessionId = undefined;
      this._otherIn = undefined;
      this._otherOut = undefined;
      this._replyErrorInfoFail = undefined;
      this._replyInvalidAvpValue = undefined;
      this._replyUnableToDeliver = undefined;
      this._replyUnknownSessionId = undefined;
      this._reselectFwdTuple = undefined;
      this._reselectFwdTupleOtherCpu = undefined;
      this._reselectRevTuple = undefined;
      this._retryClientRequest = undefined;
      this._retryClientRequestFail = undefined;
      this._serverFail = undefined;
      this._serverSelectionFail = undefined;
      this._sourceNatFail = undefined;
      this._staIn = undefined;
      this._staOut = undefined;
      this._strIn = undefined;
      this._strOut = undefined;
      this._terminateOnCcaT = undefined;
      this._totalHttpConnGenericProxy = undefined;
      this._totalProxyConns = undefined;
      this._unkwnCmdCode = undefined;
      this._updateLatestServer = undefined;
      this._userSession = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._acaIn = value.acaIn;
      this._acaOut = value.acaOut;
      this._acrIn = value.acrIn;
      this._acrOut = value.acrOut;
      this._asaIn = value.asaIn;
      this._asaOut = value.asaOut;
      this._asrIn = value.asrIn;
      this._asrOut = value.asrOut;
      this._ccaIn = value.ccaIn;
      this._ccaOut = value.ccaOut;
      this._ccaT = value.ccaT;
      this._ccrI = value.ccrI;
      this._ccrIn = value.ccrIn;
      this._ccrOut = value.ccrOut;
      this._ccrT = value.ccrT;
      this._ccrU = value.ccrU;
      this._ceaIn = value.ceaIn;
      this._ceaOut = value.ceaOut;
      this._cerIn = value.cerIn;
      this._cerOut = value.cerOut;
      this._clientFail = value.clientFail;
      this._clientSelectFail = value.clientSelectFail;
      this._closeConnWhenVportDown = value.closeConnWhenVportDown;
      this._connClosedByClient = value.connClosedByClient;
      this._connClosedByServer = value.connClosedByServer;
      this._currProxyConns = value.currProxyConns;
      this._dcmsgError = value.dcmsgError;
      this._dcmsgFwdIn = value.dcmsgFwdIn;
      this._dcmsgFwdOut = value.dcmsgFwdOut;
      this._dcmsgRevIn = value.dcmsgRevIn;
      this._dcmsgRevOut = value.dcmsgRevOut;
      this._dpaIn = value.dpaIn;
      this._dpaOut = value.dpaOut;
      this._dprIn = value.dprIn;
      this._dprOut = value.dprOut;
      this._dwaIn = value.dwaIn;
      this._dwaOut = value.dwaOut;
      this._dwrIn = value.dwrIn;
      this._dwrOut = value.dwrOut;
      this._forwardUnknownSessionId = value.forwardUnknownSessionId;
      this._invalidAvp = value.invalidAvp;
      this._mismatchFwdId = value.mismatchFwdId;
      this._mismatchRevId = value.mismatchRevId;
      this._noFwdTuple = value.noFwdTuple;
      this._noRevTuple = value.noRevTuple;
      this._noRouteFail = value.noRouteFail;
      this._noSessionId = value.noSessionId;
      this._otherIn = value.otherIn;
      this._otherOut = value.otherOut;
      this._replyErrorInfoFail = value.replyErrorInfoFail;
      this._replyInvalidAvpValue = value.replyInvalidAvpValue;
      this._replyUnableToDeliver = value.replyUnableToDeliver;
      this._replyUnknownSessionId = value.replyUnknownSessionId;
      this._reselectFwdTuple = value.reselectFwdTuple;
      this._reselectFwdTupleOtherCpu = value.reselectFwdTupleOtherCpu;
      this._reselectRevTuple = value.reselectRevTuple;
      this._retryClientRequest = value.retryClientRequest;
      this._retryClientRequestFail = value.retryClientRequestFail;
      this._serverFail = value.serverFail;
      this._serverSelectionFail = value.serverSelectionFail;
      this._sourceNatFail = value.sourceNatFail;
      this._staIn = value.staIn;
      this._staOut = value.staOut;
      this._strIn = value.strIn;
      this._strOut = value.strOut;
      this._terminateOnCcaT = value.terminateOnCcaT;
      this._totalHttpConnGenericProxy = value.totalHttpConnGenericProxy;
      this._totalProxyConns = value.totalProxyConns;
      this._unkwnCmdCode = value.unkwnCmdCode;
      this._updateLatestServer = value.updateLatestServer;
      this._userSession = value.userSession;
    }
  }

  // aca_in - computed: false, optional: true, required: false
  private _acaIn?: number; 
  public get acaIn() {
    return this.getNumberAttribute('aca_in');
  }
  public set acaIn(value: number) {
    this._acaIn = value;
  }
  public resetAcaIn() {
    this._acaIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acaInInput() {
    return this._acaIn;
  }

  // aca_out - computed: false, optional: true, required: false
  private _acaOut?: number; 
  public get acaOut() {
    return this.getNumberAttribute('aca_out');
  }
  public set acaOut(value: number) {
    this._acaOut = value;
  }
  public resetAcaOut() {
    this._acaOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acaOutInput() {
    return this._acaOut;
  }

  // acr_in - computed: false, optional: true, required: false
  private _acrIn?: number; 
  public get acrIn() {
    return this.getNumberAttribute('acr_in');
  }
  public set acrIn(value: number) {
    this._acrIn = value;
  }
  public resetAcrIn() {
    this._acrIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acrInInput() {
    return this._acrIn;
  }

  // acr_out - computed: false, optional: true, required: false
  private _acrOut?: number; 
  public get acrOut() {
    return this.getNumberAttribute('acr_out');
  }
  public set acrOut(value: number) {
    this._acrOut = value;
  }
  public resetAcrOut() {
    this._acrOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acrOutInput() {
    return this._acrOut;
  }

  // asa_in - computed: false, optional: true, required: false
  private _asaIn?: number; 
  public get asaIn() {
    return this.getNumberAttribute('asa_in');
  }
  public set asaIn(value: number) {
    this._asaIn = value;
  }
  public resetAsaIn() {
    this._asaIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asaInInput() {
    return this._asaIn;
  }

  // asa_out - computed: false, optional: true, required: false
  private _asaOut?: number; 
  public get asaOut() {
    return this.getNumberAttribute('asa_out');
  }
  public set asaOut(value: number) {
    this._asaOut = value;
  }
  public resetAsaOut() {
    this._asaOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asaOutInput() {
    return this._asaOut;
  }

  // asr_in - computed: false, optional: true, required: false
  private _asrIn?: number; 
  public get asrIn() {
    return this.getNumberAttribute('asr_in');
  }
  public set asrIn(value: number) {
    this._asrIn = value;
  }
  public resetAsrIn() {
    this._asrIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asrInInput() {
    return this._asrIn;
  }

  // asr_out - computed: false, optional: true, required: false
  private _asrOut?: number; 
  public get asrOut() {
    return this.getNumberAttribute('asr_out');
  }
  public set asrOut(value: number) {
    this._asrOut = value;
  }
  public resetAsrOut() {
    this._asrOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asrOutInput() {
    return this._asrOut;
  }

  // cca_in - computed: false, optional: true, required: false
  private _ccaIn?: number; 
  public get ccaIn() {
    return this.getNumberAttribute('cca_in');
  }
  public set ccaIn(value: number) {
    this._ccaIn = value;
  }
  public resetCcaIn() {
    this._ccaIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccaInInput() {
    return this._ccaIn;
  }

  // cca_out - computed: false, optional: true, required: false
  private _ccaOut?: number; 
  public get ccaOut() {
    return this.getNumberAttribute('cca_out');
  }
  public set ccaOut(value: number) {
    this._ccaOut = value;
  }
  public resetCcaOut() {
    this._ccaOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccaOutInput() {
    return this._ccaOut;
  }

  // cca_t - computed: false, optional: true, required: false
  private _ccaT?: number; 
  public get ccaT() {
    return this.getNumberAttribute('cca_t');
  }
  public set ccaT(value: number) {
    this._ccaT = value;
  }
  public resetCcaT() {
    this._ccaT = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccaTInput() {
    return this._ccaT;
  }

  // ccr_i - computed: false, optional: true, required: false
  private _ccrI?: number; 
  public get ccrI() {
    return this.getNumberAttribute('ccr_i');
  }
  public set ccrI(value: number) {
    this._ccrI = value;
  }
  public resetCcrI() {
    this._ccrI = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccrIInput() {
    return this._ccrI;
  }

  // ccr_in - computed: false, optional: true, required: false
  private _ccrIn?: number; 
  public get ccrIn() {
    return this.getNumberAttribute('ccr_in');
  }
  public set ccrIn(value: number) {
    this._ccrIn = value;
  }
  public resetCcrIn() {
    this._ccrIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccrInInput() {
    return this._ccrIn;
  }

  // ccr_out - computed: false, optional: true, required: false
  private _ccrOut?: number; 
  public get ccrOut() {
    return this.getNumberAttribute('ccr_out');
  }
  public set ccrOut(value: number) {
    this._ccrOut = value;
  }
  public resetCcrOut() {
    this._ccrOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccrOutInput() {
    return this._ccrOut;
  }

  // ccr_t - computed: false, optional: true, required: false
  private _ccrT?: number; 
  public get ccrT() {
    return this.getNumberAttribute('ccr_t');
  }
  public set ccrT(value: number) {
    this._ccrT = value;
  }
  public resetCcrT() {
    this._ccrT = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccrTInput() {
    return this._ccrT;
  }

  // ccr_u - computed: false, optional: true, required: false
  private _ccrU?: number; 
  public get ccrU() {
    return this.getNumberAttribute('ccr_u');
  }
  public set ccrU(value: number) {
    this._ccrU = value;
  }
  public resetCcrU() {
    this._ccrU = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccrUInput() {
    return this._ccrU;
  }

  // cea_in - computed: false, optional: true, required: false
  private _ceaIn?: number; 
  public get ceaIn() {
    return this.getNumberAttribute('cea_in');
  }
  public set ceaIn(value: number) {
    this._ceaIn = value;
  }
  public resetCeaIn() {
    this._ceaIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ceaInInput() {
    return this._ceaIn;
  }

  // cea_out - computed: false, optional: true, required: false
  private _ceaOut?: number; 
  public get ceaOut() {
    return this.getNumberAttribute('cea_out');
  }
  public set ceaOut(value: number) {
    this._ceaOut = value;
  }
  public resetCeaOut() {
    this._ceaOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ceaOutInput() {
    return this._ceaOut;
  }

  // cer_in - computed: false, optional: true, required: false
  private _cerIn?: number; 
  public get cerIn() {
    return this.getNumberAttribute('cer_in');
  }
  public set cerIn(value: number) {
    this._cerIn = value;
  }
  public resetCerIn() {
    this._cerIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cerInInput() {
    return this._cerIn;
  }

  // cer_out - computed: false, optional: true, required: false
  private _cerOut?: number; 
  public get cerOut() {
    return this.getNumberAttribute('cer_out');
  }
  public set cerOut(value: number) {
    this._cerOut = value;
  }
  public resetCerOut() {
    this._cerOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cerOutInput() {
    return this._cerOut;
  }

  // client_fail - computed: false, optional: true, required: false
  private _clientFail?: number; 
  public get clientFail() {
    return this.getNumberAttribute('client_fail');
  }
  public set clientFail(value: number) {
    this._clientFail = value;
  }
  public resetClientFail() {
    this._clientFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientFailInput() {
    return this._clientFail;
  }

  // client_select_fail - computed: false, optional: true, required: false
  private _clientSelectFail?: number; 
  public get clientSelectFail() {
    return this.getNumberAttribute('client_select_fail');
  }
  public set clientSelectFail(value: number) {
    this._clientSelectFail = value;
  }
  public resetClientSelectFail() {
    this._clientSelectFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSelectFailInput() {
    return this._clientSelectFail;
  }

  // close_conn_when_vport_down - computed: false, optional: true, required: false
  private _closeConnWhenVportDown?: number; 
  public get closeConnWhenVportDown() {
    return this.getNumberAttribute('close_conn_when_vport_down');
  }
  public set closeConnWhenVportDown(value: number) {
    this._closeConnWhenVportDown = value;
  }
  public resetCloseConnWhenVportDown() {
    this._closeConnWhenVportDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeConnWhenVportDownInput() {
    return this._closeConnWhenVportDown;
  }

  // conn_closed_by_client - computed: false, optional: true, required: false
  private _connClosedByClient?: number; 
  public get connClosedByClient() {
    return this.getNumberAttribute('conn_closed_by_client');
  }
  public set connClosedByClient(value: number) {
    this._connClosedByClient = value;
  }
  public resetConnClosedByClient() {
    this._connClosedByClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connClosedByClientInput() {
    return this._connClosedByClient;
  }

  // conn_closed_by_server - computed: false, optional: true, required: false
  private _connClosedByServer?: number; 
  public get connClosedByServer() {
    return this.getNumberAttribute('conn_closed_by_server');
  }
  public set connClosedByServer(value: number) {
    this._connClosedByServer = value;
  }
  public resetConnClosedByServer() {
    this._connClosedByServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connClosedByServerInput() {
    return this._connClosedByServer;
  }

  // curr_proxy_conns - computed: false, optional: true, required: false
  private _currProxyConns?: number; 
  public get currProxyConns() {
    return this.getNumberAttribute('curr_proxy_conns');
  }
  public set currProxyConns(value: number) {
    this._currProxyConns = value;
  }
  public resetCurrProxyConns() {
    this._currProxyConns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currProxyConnsInput() {
    return this._currProxyConns;
  }

  // dcmsg_error - computed: false, optional: true, required: false
  private _dcmsgError?: number; 
  public get dcmsgError() {
    return this.getNumberAttribute('dcmsg_error');
  }
  public set dcmsgError(value: number) {
    this._dcmsgError = value;
  }
  public resetDcmsgError() {
    this._dcmsgError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcmsgErrorInput() {
    return this._dcmsgError;
  }

  // dcmsg_fwd_in - computed: false, optional: true, required: false
  private _dcmsgFwdIn?: number; 
  public get dcmsgFwdIn() {
    return this.getNumberAttribute('dcmsg_fwd_in');
  }
  public set dcmsgFwdIn(value: number) {
    this._dcmsgFwdIn = value;
  }
  public resetDcmsgFwdIn() {
    this._dcmsgFwdIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcmsgFwdInInput() {
    return this._dcmsgFwdIn;
  }

  // dcmsg_fwd_out - computed: false, optional: true, required: false
  private _dcmsgFwdOut?: number; 
  public get dcmsgFwdOut() {
    return this.getNumberAttribute('dcmsg_fwd_out');
  }
  public set dcmsgFwdOut(value: number) {
    this._dcmsgFwdOut = value;
  }
  public resetDcmsgFwdOut() {
    this._dcmsgFwdOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcmsgFwdOutInput() {
    return this._dcmsgFwdOut;
  }

  // dcmsg_rev_in - computed: false, optional: true, required: false
  private _dcmsgRevIn?: number; 
  public get dcmsgRevIn() {
    return this.getNumberAttribute('dcmsg_rev_in');
  }
  public set dcmsgRevIn(value: number) {
    this._dcmsgRevIn = value;
  }
  public resetDcmsgRevIn() {
    this._dcmsgRevIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcmsgRevInInput() {
    return this._dcmsgRevIn;
  }

  // dcmsg_rev_out - computed: false, optional: true, required: false
  private _dcmsgRevOut?: number; 
  public get dcmsgRevOut() {
    return this.getNumberAttribute('dcmsg_rev_out');
  }
  public set dcmsgRevOut(value: number) {
    this._dcmsgRevOut = value;
  }
  public resetDcmsgRevOut() {
    this._dcmsgRevOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcmsgRevOutInput() {
    return this._dcmsgRevOut;
  }

  // dpa_in - computed: false, optional: true, required: false
  private _dpaIn?: number; 
  public get dpaIn() {
    return this.getNumberAttribute('dpa_in');
  }
  public set dpaIn(value: number) {
    this._dpaIn = value;
  }
  public resetDpaIn() {
    this._dpaIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpaInInput() {
    return this._dpaIn;
  }

  // dpa_out - computed: false, optional: true, required: false
  private _dpaOut?: number; 
  public get dpaOut() {
    return this.getNumberAttribute('dpa_out');
  }
  public set dpaOut(value: number) {
    this._dpaOut = value;
  }
  public resetDpaOut() {
    this._dpaOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpaOutInput() {
    return this._dpaOut;
  }

  // dpr_in - computed: false, optional: true, required: false
  private _dprIn?: number; 
  public get dprIn() {
    return this.getNumberAttribute('dpr_in');
  }
  public set dprIn(value: number) {
    this._dprIn = value;
  }
  public resetDprIn() {
    this._dprIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dprInInput() {
    return this._dprIn;
  }

  // dpr_out - computed: false, optional: true, required: false
  private _dprOut?: number; 
  public get dprOut() {
    return this.getNumberAttribute('dpr_out');
  }
  public set dprOut(value: number) {
    this._dprOut = value;
  }
  public resetDprOut() {
    this._dprOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dprOutInput() {
    return this._dprOut;
  }

  // dwa_in - computed: false, optional: true, required: false
  private _dwaIn?: number; 
  public get dwaIn() {
    return this.getNumberAttribute('dwa_in');
  }
  public set dwaIn(value: number) {
    this._dwaIn = value;
  }
  public resetDwaIn() {
    this._dwaIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dwaInInput() {
    return this._dwaIn;
  }

  // dwa_out - computed: false, optional: true, required: false
  private _dwaOut?: number; 
  public get dwaOut() {
    return this.getNumberAttribute('dwa_out');
  }
  public set dwaOut(value: number) {
    this._dwaOut = value;
  }
  public resetDwaOut() {
    this._dwaOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dwaOutInput() {
    return this._dwaOut;
  }

  // dwr_in - computed: false, optional: true, required: false
  private _dwrIn?: number; 
  public get dwrIn() {
    return this.getNumberAttribute('dwr_in');
  }
  public set dwrIn(value: number) {
    this._dwrIn = value;
  }
  public resetDwrIn() {
    this._dwrIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dwrInInput() {
    return this._dwrIn;
  }

  // dwr_out - computed: false, optional: true, required: false
  private _dwrOut?: number; 
  public get dwrOut() {
    return this.getNumberAttribute('dwr_out');
  }
  public set dwrOut(value: number) {
    this._dwrOut = value;
  }
  public resetDwrOut() {
    this._dwrOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dwrOutInput() {
    return this._dwrOut;
  }

  // forward_unknown_session_id - computed: false, optional: true, required: false
  private _forwardUnknownSessionId?: number; 
  public get forwardUnknownSessionId() {
    return this.getNumberAttribute('forward_unknown_session_id');
  }
  public set forwardUnknownSessionId(value: number) {
    this._forwardUnknownSessionId = value;
  }
  public resetForwardUnknownSessionId() {
    this._forwardUnknownSessionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardUnknownSessionIdInput() {
    return this._forwardUnknownSessionId;
  }

  // invalid_avp - computed: false, optional: true, required: false
  private _invalidAvp?: number; 
  public get invalidAvp() {
    return this.getNumberAttribute('invalid_avp');
  }
  public set invalidAvp(value: number) {
    this._invalidAvp = value;
  }
  public resetInvalidAvp() {
    this._invalidAvp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidAvpInput() {
    return this._invalidAvp;
  }

  // mismatch_fwd_id - computed: false, optional: true, required: false
  private _mismatchFwdId?: number; 
  public get mismatchFwdId() {
    return this.getNumberAttribute('mismatch_fwd_id');
  }
  public set mismatchFwdId(value: number) {
    this._mismatchFwdId = value;
  }
  public resetMismatchFwdId() {
    this._mismatchFwdId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchFwdIdInput() {
    return this._mismatchFwdId;
  }

  // mismatch_rev_id - computed: false, optional: true, required: false
  private _mismatchRevId?: number; 
  public get mismatchRevId() {
    return this.getNumberAttribute('mismatch_rev_id');
  }
  public set mismatchRevId(value: number) {
    this._mismatchRevId = value;
  }
  public resetMismatchRevId() {
    this._mismatchRevId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchRevIdInput() {
    return this._mismatchRevId;
  }

  // no_fwd_tuple - computed: false, optional: true, required: false
  private _noFwdTuple?: number; 
  public get noFwdTuple() {
    return this.getNumberAttribute('no_fwd_tuple');
  }
  public set noFwdTuple(value: number) {
    this._noFwdTuple = value;
  }
  public resetNoFwdTuple() {
    this._noFwdTuple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noFwdTupleInput() {
    return this._noFwdTuple;
  }

  // no_rev_tuple - computed: false, optional: true, required: false
  private _noRevTuple?: number; 
  public get noRevTuple() {
    return this.getNumberAttribute('no_rev_tuple');
  }
  public set noRevTuple(value: number) {
    this._noRevTuple = value;
  }
  public resetNoRevTuple() {
    this._noRevTuple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRevTupleInput() {
    return this._noRevTuple;
  }

  // no_route_fail - computed: false, optional: true, required: false
  private _noRouteFail?: number; 
  public get noRouteFail() {
    return this.getNumberAttribute('no_route_fail');
  }
  public set noRouteFail(value: number) {
    this._noRouteFail = value;
  }
  public resetNoRouteFail() {
    this._noRouteFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRouteFailInput() {
    return this._noRouteFail;
  }

  // no_session_id - computed: false, optional: true, required: false
  private _noSessionId?: number; 
  public get noSessionId() {
    return this.getNumberAttribute('no_session_id');
  }
  public set noSessionId(value: number) {
    this._noSessionId = value;
  }
  public resetNoSessionId() {
    this._noSessionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSessionIdInput() {
    return this._noSessionId;
  }

  // other_in - computed: false, optional: true, required: false
  private _otherIn?: number; 
  public get otherIn() {
    return this.getNumberAttribute('other_in');
  }
  public set otherIn(value: number) {
    this._otherIn = value;
  }
  public resetOtherIn() {
    this._otherIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherInInput() {
    return this._otherIn;
  }

  // other_out - computed: false, optional: true, required: false
  private _otherOut?: number; 
  public get otherOut() {
    return this.getNumberAttribute('other_out');
  }
  public set otherOut(value: number) {
    this._otherOut = value;
  }
  public resetOtherOut() {
    this._otherOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherOutInput() {
    return this._otherOut;
  }

  // reply_error_info_fail - computed: false, optional: true, required: false
  private _replyErrorInfoFail?: number; 
  public get replyErrorInfoFail() {
    return this.getNumberAttribute('reply_error_info_fail');
  }
  public set replyErrorInfoFail(value: number) {
    this._replyErrorInfoFail = value;
  }
  public resetReplyErrorInfoFail() {
    this._replyErrorInfoFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyErrorInfoFailInput() {
    return this._replyErrorInfoFail;
  }

  // reply_invalid_avp_value - computed: false, optional: true, required: false
  private _replyInvalidAvpValue?: number; 
  public get replyInvalidAvpValue() {
    return this.getNumberAttribute('reply_invalid_avp_value');
  }
  public set replyInvalidAvpValue(value: number) {
    this._replyInvalidAvpValue = value;
  }
  public resetReplyInvalidAvpValue() {
    this._replyInvalidAvpValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyInvalidAvpValueInput() {
    return this._replyInvalidAvpValue;
  }

  // reply_unable_to_deliver - computed: false, optional: true, required: false
  private _replyUnableToDeliver?: number; 
  public get replyUnableToDeliver() {
    return this.getNumberAttribute('reply_unable_to_deliver');
  }
  public set replyUnableToDeliver(value: number) {
    this._replyUnableToDeliver = value;
  }
  public resetReplyUnableToDeliver() {
    this._replyUnableToDeliver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyUnableToDeliverInput() {
    return this._replyUnableToDeliver;
  }

  // reply_unknown_session_id - computed: false, optional: true, required: false
  private _replyUnknownSessionId?: number; 
  public get replyUnknownSessionId() {
    return this.getNumberAttribute('reply_unknown_session_id');
  }
  public set replyUnknownSessionId(value: number) {
    this._replyUnknownSessionId = value;
  }
  public resetReplyUnknownSessionId() {
    this._replyUnknownSessionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyUnknownSessionIdInput() {
    return this._replyUnknownSessionId;
  }

  // reselect_fwd_tuple - computed: false, optional: true, required: false
  private _reselectFwdTuple?: number; 
  public get reselectFwdTuple() {
    return this.getNumberAttribute('reselect_fwd_tuple');
  }
  public set reselectFwdTuple(value: number) {
    this._reselectFwdTuple = value;
  }
  public resetReselectFwdTuple() {
    this._reselectFwdTuple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reselectFwdTupleInput() {
    return this._reselectFwdTuple;
  }

  // reselect_fwd_tuple_other_cpu - computed: false, optional: true, required: false
  private _reselectFwdTupleOtherCpu?: number; 
  public get reselectFwdTupleOtherCpu() {
    return this.getNumberAttribute('reselect_fwd_tuple_other_cpu');
  }
  public set reselectFwdTupleOtherCpu(value: number) {
    this._reselectFwdTupleOtherCpu = value;
  }
  public resetReselectFwdTupleOtherCpu() {
    this._reselectFwdTupleOtherCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reselectFwdTupleOtherCpuInput() {
    return this._reselectFwdTupleOtherCpu;
  }

  // reselect_rev_tuple - computed: false, optional: true, required: false
  private _reselectRevTuple?: number; 
  public get reselectRevTuple() {
    return this.getNumberAttribute('reselect_rev_tuple');
  }
  public set reselectRevTuple(value: number) {
    this._reselectRevTuple = value;
  }
  public resetReselectRevTuple() {
    this._reselectRevTuple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reselectRevTupleInput() {
    return this._reselectRevTuple;
  }

  // retry_client_request - computed: false, optional: true, required: false
  private _retryClientRequest?: number; 
  public get retryClientRequest() {
    return this.getNumberAttribute('retry_client_request');
  }
  public set retryClientRequest(value: number) {
    this._retryClientRequest = value;
  }
  public resetRetryClientRequest() {
    this._retryClientRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryClientRequestInput() {
    return this._retryClientRequest;
  }

  // retry_client_request_fail - computed: false, optional: true, required: false
  private _retryClientRequestFail?: number; 
  public get retryClientRequestFail() {
    return this.getNumberAttribute('retry_client_request_fail');
  }
  public set retryClientRequestFail(value: number) {
    this._retryClientRequestFail = value;
  }
  public resetRetryClientRequestFail() {
    this._retryClientRequestFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryClientRequestFailInput() {
    return this._retryClientRequestFail;
  }

  // server_fail - computed: false, optional: true, required: false
  private _serverFail?: number; 
  public get serverFail() {
    return this.getNumberAttribute('server_fail');
  }
  public set serverFail(value: number) {
    this._serverFail = value;
  }
  public resetServerFail() {
    this._serverFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFailInput() {
    return this._serverFail;
  }

  // server_selection_fail - computed: false, optional: true, required: false
  private _serverSelectionFail?: number; 
  public get serverSelectionFail() {
    return this.getNumberAttribute('server_selection_fail');
  }
  public set serverSelectionFail(value: number) {
    this._serverSelectionFail = value;
  }
  public resetServerSelectionFail() {
    this._serverSelectionFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSelectionFailInput() {
    return this._serverSelectionFail;
  }

  // source_nat_fail - computed: false, optional: true, required: false
  private _sourceNatFail?: number; 
  public get sourceNatFail() {
    return this.getNumberAttribute('source_nat_fail');
  }
  public set sourceNatFail(value: number) {
    this._sourceNatFail = value;
  }
  public resetSourceNatFail() {
    this._sourceNatFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNatFailInput() {
    return this._sourceNatFail;
  }

  // sta_in - computed: false, optional: true, required: false
  private _staIn?: number; 
  public get staIn() {
    return this.getNumberAttribute('sta_in');
  }
  public set staIn(value: number) {
    this._staIn = value;
  }
  public resetStaIn() {
    this._staIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staInInput() {
    return this._staIn;
  }

  // sta_out - computed: false, optional: true, required: false
  private _staOut?: number; 
  public get staOut() {
    return this.getNumberAttribute('sta_out');
  }
  public set staOut(value: number) {
    this._staOut = value;
  }
  public resetStaOut() {
    this._staOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staOutInput() {
    return this._staOut;
  }

  // str_in - computed: false, optional: true, required: false
  private _strIn?: number; 
  public get strIn() {
    return this.getNumberAttribute('str_in');
  }
  public set strIn(value: number) {
    this._strIn = value;
  }
  public resetStrIn() {
    this._strIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strInInput() {
    return this._strIn;
  }

  // str_out - computed: false, optional: true, required: false
  private _strOut?: number; 
  public get strOut() {
    return this.getNumberAttribute('str_out');
  }
  public set strOut(value: number) {
    this._strOut = value;
  }
  public resetStrOut() {
    this._strOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strOutInput() {
    return this._strOut;
  }

  // terminate_on_cca_t - computed: false, optional: true, required: false
  private _terminateOnCcaT?: number; 
  public get terminateOnCcaT() {
    return this.getNumberAttribute('terminate_on_cca_t');
  }
  public set terminateOnCcaT(value: number) {
    this._terminateOnCcaT = value;
  }
  public resetTerminateOnCcaT() {
    this._terminateOnCcaT = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateOnCcaTInput() {
    return this._terminateOnCcaT;
  }

  // total_http_conn_generic_proxy - computed: false, optional: true, required: false
  private _totalHttpConnGenericProxy?: number; 
  public get totalHttpConnGenericProxy() {
    return this.getNumberAttribute('total_http_conn_generic_proxy');
  }
  public set totalHttpConnGenericProxy(value: number) {
    this._totalHttpConnGenericProxy = value;
  }
  public resetTotalHttpConnGenericProxy() {
    this._totalHttpConnGenericProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalHttpConnGenericProxyInput() {
    return this._totalHttpConnGenericProxy;
  }

  // total_proxy_conns - computed: false, optional: true, required: false
  private _totalProxyConns?: number; 
  public get totalProxyConns() {
    return this.getNumberAttribute('total_proxy_conns');
  }
  public set totalProxyConns(value: number) {
    this._totalProxyConns = value;
  }
  public resetTotalProxyConns() {
    this._totalProxyConns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalProxyConnsInput() {
    return this._totalProxyConns;
  }

  // unkwn_cmd_code - computed: false, optional: true, required: false
  private _unkwnCmdCode?: number; 
  public get unkwnCmdCode() {
    return this.getNumberAttribute('unkwn_cmd_code');
  }
  public set unkwnCmdCode(value: number) {
    this._unkwnCmdCode = value;
  }
  public resetUnkwnCmdCode() {
    this._unkwnCmdCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unkwnCmdCodeInput() {
    return this._unkwnCmdCode;
  }

  // update_latest_server - computed: false, optional: true, required: false
  private _updateLatestServer?: number; 
  public get updateLatestServer() {
    return this.getNumberAttribute('update_latest_server');
  }
  public set updateLatestServer(value: number) {
    this._updateLatestServer = value;
  }
  public resetUpdateLatestServer() {
    this._updateLatestServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateLatestServerInput() {
    return this._updateLatestServer;
  }

  // user_session - computed: false, optional: true, required: false
  private _userSession?: string; 
  public get userSession() {
    return this.getStringAttribute('user_session');
  }
  public set userSession(value: string) {
    this._userSession = value;
  }
  public resetUserSession() {
    this._userSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSessionInput() {
    return this._userSession;
  }
}

export class DataThunderSlbGenericProxyOperOperGenericProxyCpuListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbGenericProxyOperOperGenericProxyCpuListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbGenericProxyOperOperGenericProxyCpuListStructOutputReference {
    return new DataThunderSlbGenericProxyOperOperGenericProxyCpuListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbGenericProxyOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#cpu_count DataThunderSlbGenericProxyOper#cpu_count}
  */
  readonly cpuCount?: number;
  /**
  * generic_proxy_cpu_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#generic_proxy_cpu_list DataThunderSlbGenericProxyOper#generic_proxy_cpu_list}
  */
  readonly genericProxyCpuList?: DataThunderSlbGenericProxyOperOperGenericProxyCpuListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbGenericProxyOperOperToTerraform(struct?: DataThunderSlbGenericProxyOperOperOutputReference | DataThunderSlbGenericProxyOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    generic_proxy_cpu_list: cdktf.listMapper(dataThunderSlbGenericProxyOperOperGenericProxyCpuListStructToTerraform, true)(struct!.genericProxyCpuList),
  }
}


export function dataThunderSlbGenericProxyOperOperToHclTerraform(struct?: DataThunderSlbGenericProxyOperOperOutputReference | DataThunderSlbGenericProxyOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_count: {
      value: cdktf.numberToHclTerraform(struct!.cpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    generic_proxy_cpu_list: {
      value: cdktf.listMapperHcl(dataThunderSlbGenericProxyOperOperGenericProxyCpuListStructToHclTerraform, true)(struct!.genericProxyCpuList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbGenericProxyOperOperGenericProxyCpuListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbGenericProxyOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbGenericProxyOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._genericProxyCpuList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.genericProxyCpuList = this._genericProxyCpuList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbGenericProxyOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCount = undefined;
      this._genericProxyCpuList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCount = value.cpuCount;
      this._genericProxyCpuList.internalValue = value.genericProxyCpuList;
    }
  }

  // cpu_count - computed: false, optional: true, required: false
  private _cpuCount?: number; 
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }
  public set cpuCount(value: number) {
    this._cpuCount = value;
  }
  public resetCpuCount() {
    this._cpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCountInput() {
    return this._cpuCount;
  }

  // generic_proxy_cpu_list - computed: false, optional: true, required: false
  private _genericProxyCpuList = new DataThunderSlbGenericProxyOperOperGenericProxyCpuListStructList(this, "generic_proxy_cpu_list", false);
  public get genericProxyCpuList() {
    return this._genericProxyCpuList;
  }
  public putGenericProxyCpuList(value: DataThunderSlbGenericProxyOperOperGenericProxyCpuListStruct[] | cdktf.IResolvable) {
    this._genericProxyCpuList.internalValue = value;
  }
  public resetGenericProxyCpuList() {
    this._genericProxyCpuList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericProxyCpuListInput() {
    return this._genericProxyCpuList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper thunder_slb_generic_proxy_oper}
*/
export class DataThunderSlbGenericProxyOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_generic_proxy_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbGenericProxyOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbGenericProxyOper to import
  * @param importFromId The id of the existing DataThunderSlbGenericProxyOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbGenericProxyOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_generic_proxy_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_generic_proxy_oper thunder_slb_generic_proxy_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbGenericProxyOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbGenericProxyOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_generic_proxy_oper',
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
  private _oper = new DataThunderSlbGenericProxyOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbGenericProxyOperOper) {
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
      oper: dataThunderSlbGenericProxyOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbGenericProxyOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbGenericProxyOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
