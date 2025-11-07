// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbSmppOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#id DataThunderSlbSmppOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#oper DataThunderSlbSmppOper#oper}
  */
  readonly oper?: DataThunderSlbSmppOperOper;
}
export interface DataThunderSlbSmppOperOperSmppCpuFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#ax_response_directly DataThunderSlbSmppOper#ax_response_directly}
  */
  readonly axResponseDirectly?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#bind_conn DataThunderSlbSmppOper#bind_conn}
  */
  readonly bindConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#client_conn_get_from_list DataThunderSlbSmppOper#client_conn_get_from_list}
  */
  readonly clientConnGetFromList?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#client_conn_put_in_list DataThunderSlbSmppOper#client_conn_put_in_list}
  */
  readonly clientConnPutInList?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#enquire_link_recv DataThunderSlbSmppOper#enquire_link_recv}
  */
  readonly enquireLinkRecv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#enquire_link_resp_recv DataThunderSlbSmppOper#enquire_link_resp_recv}
  */
  readonly enquireLinkRespRecv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#enquire_link_resp_send DataThunderSlbSmppOper#enquire_link_resp_send}
  */
  readonly enquireLinkRespSend?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#enquire_link_send DataThunderSlbSmppOper#enquire_link_send}
  */
  readonly enquireLinkSend?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#fail_bind_msg DataThunderSlbSmppOper#fail_bind_msg}
  */
  readonly failBindMsg?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#invalid_seq DataThunderSlbSmppOper#invalid_seq}
  */
  readonly invalidSeq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_client_connection DataThunderSlbSmppOper#msg_proxy_client_connection}
  */
  readonly msgProxyClientConnection?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_client_drop DataThunderSlbSmppOper#msg_proxy_client_drop}
  */
  readonly msgProxyClientDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_client_exceed_tmp_buff DataThunderSlbSmppOper#msg_proxy_client_exceed_tmp_buff}
  */
  readonly msgProxyClientExceedTmpBuff?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_client_fail DataThunderSlbSmppOper#msg_proxy_client_fail}
  */
  readonly msgProxyClientFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_client_fail_parse DataThunderSlbSmppOper#msg_proxy_client_fail_parse}
  */
  readonly msgProxyClientFailParse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_client_fail_process DataThunderSlbSmppOper#msg_proxy_client_fail_process}
  */
  readonly msgProxyClientFailProcess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_client_fail_send_pkt DataThunderSlbSmppOper#msg_proxy_client_fail_send_pkt}
  */
  readonly msgProxyClientFailSendPkt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_client_fail_snat DataThunderSlbSmppOper#msg_proxy_client_fail_snat}
  */
  readonly msgProxyClientFailSnat?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_client_fail_start_server_conn DataThunderSlbSmppOper#msg_proxy_client_fail_start_server_conn}
  */
  readonly msgProxyClientFailStartServerConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_client_incomplete DataThunderSlbSmppOper#msg_proxy_client_incomplete}
  */
  readonly msgProxyClientIncomplete?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_client_recv DataThunderSlbSmppOper#msg_proxy_client_recv}
  */
  readonly msgProxyClientRecv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_client_reset DataThunderSlbSmppOper#msg_proxy_client_reset}
  */
  readonly msgProxyClientReset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_client_send_success DataThunderSlbSmppOper#msg_proxy_client_send_success}
  */
  readonly msgProxyClientSendSuccess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_create_server_conn DataThunderSlbSmppOper#msg_proxy_create_server_conn}
  */
  readonly msgProxyCreateServerConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_current DataThunderSlbSmppOper#msg_proxy_current}
  */
  readonly msgProxyCurrent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_deprecated_conn DataThunderSlbSmppOper#msg_proxy_deprecated_conn}
  */
  readonly msgProxyDeprecatedConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_fail_alloc_mem DataThunderSlbSmppOper#msg_proxy_fail_alloc_mem}
  */
  readonly msgProxyFailAllocMem?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_fail_construct_server_conn DataThunderSlbSmppOper#msg_proxy_fail_construct_server_conn}
  */
  readonly msgProxyFailConstructServerConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_fail_dcmsg DataThunderSlbSmppOper#msg_proxy_fail_dcmsg}
  */
  readonly msgProxyFailDcmsg?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_fail_insert_server_conn DataThunderSlbSmppOper#msg_proxy_fail_insert_server_conn}
  */
  readonly msgProxyFailInsertServerConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_fail_reserve_pconn DataThunderSlbSmppOper#msg_proxy_fail_reserve_pconn}
  */
  readonly msgProxyFailReservePconn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_fail_select_server DataThunderSlbSmppOper#msg_proxy_fail_select_server}
  */
  readonly msgProxyFailSelectServer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_fail_start_server_conn DataThunderSlbSmppOper#msg_proxy_fail_start_server_conn}
  */
  readonly msgProxyFailStartServerConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_hold_msg DataThunderSlbSmppOper#msg_proxy_hold_msg}
  */
  readonly msgProxyHoldMsg?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_l4_from_l4_send DataThunderSlbSmppOper#msg_proxy_l4_from_l4_send}
  */
  readonly msgProxyL4FromL4Send?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_l4_from_l7 DataThunderSlbSmppOper#msg_proxy_l4_from_l7}
  */
  readonly msgProxyL4FromL7?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_l4_to_l7 DataThunderSlbSmppOper#msg_proxy_l4_to_l7}
  */
  readonly msgProxyL4ToL7?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_l7_cpu_failed DataThunderSlbSmppOper#msg_proxy_l7_cpu_failed}
  */
  readonly msgProxyL7CpuFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_l7_to_l4 DataThunderSlbSmppOper#msg_proxy_l7_to_l4}
  */
  readonly msgProxyL7ToL4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_mag_back DataThunderSlbSmppOper#msg_proxy_mag_back}
  */
  readonly msgProxyMagBack?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_mem_allocd DataThunderSlbSmppOper#msg_proxy_mem_allocd}
  */
  readonly msgProxyMemAllocd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_mem_cached DataThunderSlbSmppOper#msg_proxy_mem_cached}
  */
  readonly msgProxyMemCached?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_mem_freed DataThunderSlbSmppOper#msg_proxy_mem_freed}
  */
  readonly msgProxyMemFreed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_no_vport DataThunderSlbSmppOper#msg_proxy_no_vport}
  */
  readonly msgProxyNoVport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_parse_msg_fail DataThunderSlbSmppOper#msg_proxy_parse_msg_fail}
  */
  readonly msgProxyParseMsgFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_pipline_msg DataThunderSlbSmppOper#msg_proxy_pipline_msg}
  */
  readonly msgProxyPiplineMsg?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_process_msg_fail DataThunderSlbSmppOper#msg_proxy_process_msg_fail}
  */
  readonly msgProxyProcessMsgFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_server_conn_already_exists DataThunderSlbSmppOper#msg_proxy_server_conn_already_exists}
  */
  readonly msgProxyServerConnAlreadyExists?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_server_conn_fail_snat DataThunderSlbSmppOper#msg_proxy_server_conn_fail_snat}
  */
  readonly msgProxyServerConnFailSnat?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_server_drop DataThunderSlbSmppOper#msg_proxy_server_drop}
  */
  readonly msgProxyServerDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_server_exceed_tmp_buff DataThunderSlbSmppOper#msg_proxy_server_exceed_tmp_buff}
  */
  readonly msgProxyServerExceedTmpBuff?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_server_fail DataThunderSlbSmppOper#msg_proxy_server_fail}
  */
  readonly msgProxyServerFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_server_fail_parse DataThunderSlbSmppOper#msg_proxy_server_fail_parse}
  */
  readonly msgProxyServerFailParse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_server_fail_process DataThunderSlbSmppOper#msg_proxy_server_fail_process}
  */
  readonly msgProxyServerFailProcess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_server_fail_selec_connt DataThunderSlbSmppOper#msg_proxy_server_fail_selec_connt}
  */
  readonly msgProxyServerFailSelecConnt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_server_fail_send_pkt DataThunderSlbSmppOper#msg_proxy_server_fail_send_pkt}
  */
  readonly msgProxyServerFailSendPkt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_server_fail_snat DataThunderSlbSmppOper#msg_proxy_server_fail_snat}
  */
  readonly msgProxyServerFailSnat?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_server_incomplete DataThunderSlbSmppOper#msg_proxy_server_incomplete}
  */
  readonly msgProxyServerIncomplete?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_server_recv DataThunderSlbSmppOper#msg_proxy_server_recv}
  */
  readonly msgProxyServerRecv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_server_reset DataThunderSlbSmppOper#msg_proxy_server_reset}
  */
  readonly msgProxyServerReset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_server_send_success DataThunderSlbSmppOper#msg_proxy_server_send_success}
  */
  readonly msgProxyServerSendSuccess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_split_pkt DataThunderSlbSmppOper#msg_proxy_split_pkt}
  */
  readonly msgProxySplitPkt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_start_server_conn DataThunderSlbSmppOper#msg_proxy_start_server_conn}
  */
  readonly msgProxyStartServerConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_start_server_conn_failed DataThunderSlbSmppOper#msg_proxy_start_server_conn_failed}
  */
  readonly msgProxyStartServerConnFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_to_l4_send_pkt DataThunderSlbSmppOper#msg_proxy_to_l4_send_pkt}
  */
  readonly msgProxyToL4SendPkt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_total DataThunderSlbSmppOper#msg_proxy_total}
  */
  readonly msgProxyTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#msg_proxy_unexpected_err DataThunderSlbSmppOper#msg_proxy_unexpected_err}
  */
  readonly msgProxyUnexpectedErr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#payload_allocd DataThunderSlbSmppOper#payload_allocd}
  */
  readonly payloadAllocd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#payload_freed DataThunderSlbSmppOper#payload_freed}
  */
  readonly payloadFreed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#pkt_too_small DataThunderSlbSmppOper#pkt_too_small}
  */
  readonly pktTooSmall?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#select_client_by_conn DataThunderSlbSmppOper#select_client_by_conn}
  */
  readonly selectClientByConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#select_client_by_req DataThunderSlbSmppOper#select_client_by_req}
  */
  readonly selectClientByReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#select_client_conn DataThunderSlbSmppOper#select_client_conn}
  */
  readonly selectClientConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#select_client_fail DataThunderSlbSmppOper#select_client_fail}
  */
  readonly selectClientFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#select_client_from_list DataThunderSlbSmppOper#select_client_from_list}
  */
  readonly selectClientFromList?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#select_server_by_conn DataThunderSlbSmppOper#select_server_by_conn}
  */
  readonly selectServerByConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#select_server_by_req DataThunderSlbSmppOper#select_server_by_req}
  */
  readonly selectServerByReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#select_server_conn DataThunderSlbSmppOper#select_server_conn}
  */
  readonly selectServerConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#select_server_fail DataThunderSlbSmppOper#select_server_fail}
  */
  readonly selectServerFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#select_server_from_list DataThunderSlbSmppOper#select_server_from_list}
  */
  readonly selectServerFromList?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#server_conn_fail_bind DataThunderSlbSmppOper#server_conn_fail_bind}
  */
  readonly serverConnFailBind?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#server_conn_get_from_list DataThunderSlbSmppOper#server_conn_get_from_list}
  */
  readonly serverConnGetFromList?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#server_conn_put_in_list DataThunderSlbSmppOper#server_conn_put_in_list}
  */
  readonly serverConnPutInList?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#single_msg DataThunderSlbSmppOper#single_msg}
  */
  readonly singleMsg?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#unbind_conn DataThunderSlbSmppOper#unbind_conn}
  */
  readonly unbindConn?: number;
}

export function dataThunderSlbSmppOperOperSmppCpuFieldsToTerraform(struct?: DataThunderSlbSmppOperOperSmppCpuFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ax_response_directly: cdktf.numberToTerraform(struct!.axResponseDirectly),
    bind_conn: cdktf.numberToTerraform(struct!.bindConn),
    client_conn_get_from_list: cdktf.numberToTerraform(struct!.clientConnGetFromList),
    client_conn_put_in_list: cdktf.numberToTerraform(struct!.clientConnPutInList),
    enquire_link_recv: cdktf.numberToTerraform(struct!.enquireLinkRecv),
    enquire_link_resp_recv: cdktf.numberToTerraform(struct!.enquireLinkRespRecv),
    enquire_link_resp_send: cdktf.numberToTerraform(struct!.enquireLinkRespSend),
    enquire_link_send: cdktf.numberToTerraform(struct!.enquireLinkSend),
    fail_bind_msg: cdktf.numberToTerraform(struct!.failBindMsg),
    invalid_seq: cdktf.numberToTerraform(struct!.invalidSeq),
    msg_proxy_client_connection: cdktf.numberToTerraform(struct!.msgProxyClientConnection),
    msg_proxy_client_drop: cdktf.numberToTerraform(struct!.msgProxyClientDrop),
    msg_proxy_client_exceed_tmp_buff: cdktf.numberToTerraform(struct!.msgProxyClientExceedTmpBuff),
    msg_proxy_client_fail: cdktf.numberToTerraform(struct!.msgProxyClientFail),
    msg_proxy_client_fail_parse: cdktf.numberToTerraform(struct!.msgProxyClientFailParse),
    msg_proxy_client_fail_process: cdktf.numberToTerraform(struct!.msgProxyClientFailProcess),
    msg_proxy_client_fail_send_pkt: cdktf.numberToTerraform(struct!.msgProxyClientFailSendPkt),
    msg_proxy_client_fail_snat: cdktf.numberToTerraform(struct!.msgProxyClientFailSnat),
    msg_proxy_client_fail_start_server_conn: cdktf.numberToTerraform(struct!.msgProxyClientFailStartServerConn),
    msg_proxy_client_incomplete: cdktf.numberToTerraform(struct!.msgProxyClientIncomplete),
    msg_proxy_client_recv: cdktf.numberToTerraform(struct!.msgProxyClientRecv),
    msg_proxy_client_reset: cdktf.numberToTerraform(struct!.msgProxyClientReset),
    msg_proxy_client_send_success: cdktf.numberToTerraform(struct!.msgProxyClientSendSuccess),
    msg_proxy_create_server_conn: cdktf.numberToTerraform(struct!.msgProxyCreateServerConn),
    msg_proxy_current: cdktf.numberToTerraform(struct!.msgProxyCurrent),
    msg_proxy_deprecated_conn: cdktf.numberToTerraform(struct!.msgProxyDeprecatedConn),
    msg_proxy_fail_alloc_mem: cdktf.numberToTerraform(struct!.msgProxyFailAllocMem),
    msg_proxy_fail_construct_server_conn: cdktf.numberToTerraform(struct!.msgProxyFailConstructServerConn),
    msg_proxy_fail_dcmsg: cdktf.numberToTerraform(struct!.msgProxyFailDcmsg),
    msg_proxy_fail_insert_server_conn: cdktf.numberToTerraform(struct!.msgProxyFailInsertServerConn),
    msg_proxy_fail_reserve_pconn: cdktf.numberToTerraform(struct!.msgProxyFailReservePconn),
    msg_proxy_fail_select_server: cdktf.numberToTerraform(struct!.msgProxyFailSelectServer),
    msg_proxy_fail_start_server_conn: cdktf.numberToTerraform(struct!.msgProxyFailStartServerConn),
    msg_proxy_hold_msg: cdktf.numberToTerraform(struct!.msgProxyHoldMsg),
    msg_proxy_l4_from_l4_send: cdktf.numberToTerraform(struct!.msgProxyL4FromL4Send),
    msg_proxy_l4_from_l7: cdktf.numberToTerraform(struct!.msgProxyL4FromL7),
    msg_proxy_l4_to_l7: cdktf.numberToTerraform(struct!.msgProxyL4ToL7),
    msg_proxy_l7_cpu_failed: cdktf.numberToTerraform(struct!.msgProxyL7CpuFailed),
    msg_proxy_l7_to_l4: cdktf.numberToTerraform(struct!.msgProxyL7ToL4),
    msg_proxy_mag_back: cdktf.numberToTerraform(struct!.msgProxyMagBack),
    msg_proxy_mem_allocd: cdktf.numberToTerraform(struct!.msgProxyMemAllocd),
    msg_proxy_mem_cached: cdktf.numberToTerraform(struct!.msgProxyMemCached),
    msg_proxy_mem_freed: cdktf.numberToTerraform(struct!.msgProxyMemFreed),
    msg_proxy_no_vport: cdktf.numberToTerraform(struct!.msgProxyNoVport),
    msg_proxy_parse_msg_fail: cdktf.numberToTerraform(struct!.msgProxyParseMsgFail),
    msg_proxy_pipline_msg: cdktf.numberToTerraform(struct!.msgProxyPiplineMsg),
    msg_proxy_process_msg_fail: cdktf.numberToTerraform(struct!.msgProxyProcessMsgFail),
    msg_proxy_server_conn_already_exists: cdktf.numberToTerraform(struct!.msgProxyServerConnAlreadyExists),
    msg_proxy_server_conn_fail_snat: cdktf.numberToTerraform(struct!.msgProxyServerConnFailSnat),
    msg_proxy_server_drop: cdktf.numberToTerraform(struct!.msgProxyServerDrop),
    msg_proxy_server_exceed_tmp_buff: cdktf.numberToTerraform(struct!.msgProxyServerExceedTmpBuff),
    msg_proxy_server_fail: cdktf.numberToTerraform(struct!.msgProxyServerFail),
    msg_proxy_server_fail_parse: cdktf.numberToTerraform(struct!.msgProxyServerFailParse),
    msg_proxy_server_fail_process: cdktf.numberToTerraform(struct!.msgProxyServerFailProcess),
    msg_proxy_server_fail_selec_connt: cdktf.numberToTerraform(struct!.msgProxyServerFailSelecConnt),
    msg_proxy_server_fail_send_pkt: cdktf.numberToTerraform(struct!.msgProxyServerFailSendPkt),
    msg_proxy_server_fail_snat: cdktf.numberToTerraform(struct!.msgProxyServerFailSnat),
    msg_proxy_server_incomplete: cdktf.numberToTerraform(struct!.msgProxyServerIncomplete),
    msg_proxy_server_recv: cdktf.numberToTerraform(struct!.msgProxyServerRecv),
    msg_proxy_server_reset: cdktf.numberToTerraform(struct!.msgProxyServerReset),
    msg_proxy_server_send_success: cdktf.numberToTerraform(struct!.msgProxyServerSendSuccess),
    msg_proxy_split_pkt: cdktf.numberToTerraform(struct!.msgProxySplitPkt),
    msg_proxy_start_server_conn: cdktf.numberToTerraform(struct!.msgProxyStartServerConn),
    msg_proxy_start_server_conn_failed: cdktf.numberToTerraform(struct!.msgProxyStartServerConnFailed),
    msg_proxy_to_l4_send_pkt: cdktf.numberToTerraform(struct!.msgProxyToL4SendPkt),
    msg_proxy_total: cdktf.numberToTerraform(struct!.msgProxyTotal),
    msg_proxy_unexpected_err: cdktf.numberToTerraform(struct!.msgProxyUnexpectedErr),
    payload_allocd: cdktf.numberToTerraform(struct!.payloadAllocd),
    payload_freed: cdktf.numberToTerraform(struct!.payloadFreed),
    pkt_too_small: cdktf.numberToTerraform(struct!.pktTooSmall),
    select_client_by_conn: cdktf.numberToTerraform(struct!.selectClientByConn),
    select_client_by_req: cdktf.numberToTerraform(struct!.selectClientByReq),
    select_client_conn: cdktf.numberToTerraform(struct!.selectClientConn),
    select_client_fail: cdktf.numberToTerraform(struct!.selectClientFail),
    select_client_from_list: cdktf.numberToTerraform(struct!.selectClientFromList),
    select_server_by_conn: cdktf.numberToTerraform(struct!.selectServerByConn),
    select_server_by_req: cdktf.numberToTerraform(struct!.selectServerByReq),
    select_server_conn: cdktf.numberToTerraform(struct!.selectServerConn),
    select_server_fail: cdktf.numberToTerraform(struct!.selectServerFail),
    select_server_from_list: cdktf.numberToTerraform(struct!.selectServerFromList),
    server_conn_fail_bind: cdktf.numberToTerraform(struct!.serverConnFailBind),
    server_conn_get_from_list: cdktf.numberToTerraform(struct!.serverConnGetFromList),
    server_conn_put_in_list: cdktf.numberToTerraform(struct!.serverConnPutInList),
    single_msg: cdktf.numberToTerraform(struct!.singleMsg),
    unbind_conn: cdktf.numberToTerraform(struct!.unbindConn),
  }
}


export function dataThunderSlbSmppOperOperSmppCpuFieldsToHclTerraform(struct?: DataThunderSlbSmppOperOperSmppCpuFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ax_response_directly: {
      value: cdktf.numberToHclTerraform(struct!.axResponseDirectly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bind_conn: {
      value: cdktf.numberToHclTerraform(struct!.bindConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_conn_get_from_list: {
      value: cdktf.numberToHclTerraform(struct!.clientConnGetFromList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_conn_put_in_list: {
      value: cdktf.numberToHclTerraform(struct!.clientConnPutInList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enquire_link_recv: {
      value: cdktf.numberToHclTerraform(struct!.enquireLinkRecv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enquire_link_resp_recv: {
      value: cdktf.numberToHclTerraform(struct!.enquireLinkRespRecv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enquire_link_resp_send: {
      value: cdktf.numberToHclTerraform(struct!.enquireLinkRespSend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enquire_link_send: {
      value: cdktf.numberToHclTerraform(struct!.enquireLinkSend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail_bind_msg: {
      value: cdktf.numberToHclTerraform(struct!.failBindMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_seq: {
      value: cdktf.numberToHclTerraform(struct!.invalidSeq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_client_connection: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyClientConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_client_drop: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyClientDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_client_exceed_tmp_buff: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyClientExceedTmpBuff),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_client_fail: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyClientFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_client_fail_parse: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyClientFailParse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_client_fail_process: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyClientFailProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_client_fail_send_pkt: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyClientFailSendPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_client_fail_snat: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyClientFailSnat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_client_fail_start_server_conn: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyClientFailStartServerConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_client_incomplete: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyClientIncomplete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_client_recv: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyClientRecv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_client_reset: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyClientReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_client_send_success: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyClientSendSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_create_server_conn: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyCreateServerConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_current: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_deprecated_conn: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyDeprecatedConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_fail_alloc_mem: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyFailAllocMem),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_fail_construct_server_conn: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyFailConstructServerConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_fail_dcmsg: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyFailDcmsg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_fail_insert_server_conn: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyFailInsertServerConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_fail_reserve_pconn: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyFailReservePconn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_fail_select_server: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyFailSelectServer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_fail_start_server_conn: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyFailStartServerConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_hold_msg: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyHoldMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_l4_from_l4_send: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyL4FromL4Send),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_l4_from_l7: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyL4FromL7),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_l4_to_l7: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyL4ToL7),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_l7_cpu_failed: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyL7CpuFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_l7_to_l4: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyL7ToL4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_mag_back: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyMagBack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_mem_allocd: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyMemAllocd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_mem_cached: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyMemCached),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_mem_freed: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyMemFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_no_vport: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyNoVport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_parse_msg_fail: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyParseMsgFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_pipline_msg: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyPiplineMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_process_msg_fail: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyProcessMsgFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_server_conn_already_exists: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyServerConnAlreadyExists),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_server_conn_fail_snat: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyServerConnFailSnat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_server_drop: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyServerDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_server_exceed_tmp_buff: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyServerExceedTmpBuff),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_server_fail: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyServerFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_server_fail_parse: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyServerFailParse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_server_fail_process: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyServerFailProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_server_fail_selec_connt: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyServerFailSelecConnt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_server_fail_send_pkt: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyServerFailSendPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_server_fail_snat: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyServerFailSnat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_server_incomplete: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyServerIncomplete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_server_recv: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyServerRecv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_server_reset: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyServerReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_server_send_success: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyServerSendSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_split_pkt: {
      value: cdktf.numberToHclTerraform(struct!.msgProxySplitPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_start_server_conn: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyStartServerConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_start_server_conn_failed: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyStartServerConnFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_to_l4_send_pkt: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyToL4SendPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_total: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_proxy_unexpected_err: {
      value: cdktf.numberToHclTerraform(struct!.msgProxyUnexpectedErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    payload_allocd: {
      value: cdktf.numberToHclTerraform(struct!.payloadAllocd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    payload_freed: {
      value: cdktf.numberToHclTerraform(struct!.payloadFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkt_too_small: {
      value: cdktf.numberToHclTerraform(struct!.pktTooSmall),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    select_client_by_conn: {
      value: cdktf.numberToHclTerraform(struct!.selectClientByConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    select_client_by_req: {
      value: cdktf.numberToHclTerraform(struct!.selectClientByReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    select_client_conn: {
      value: cdktf.numberToHclTerraform(struct!.selectClientConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    select_client_fail: {
      value: cdktf.numberToHclTerraform(struct!.selectClientFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    select_client_from_list: {
      value: cdktf.numberToHclTerraform(struct!.selectClientFromList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    select_server_by_conn: {
      value: cdktf.numberToHclTerraform(struct!.selectServerByConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    select_server_by_req: {
      value: cdktf.numberToHclTerraform(struct!.selectServerByReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    select_server_conn: {
      value: cdktf.numberToHclTerraform(struct!.selectServerConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    select_server_fail: {
      value: cdktf.numberToHclTerraform(struct!.selectServerFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    select_server_from_list: {
      value: cdktf.numberToHclTerraform(struct!.selectServerFromList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_conn_fail_bind: {
      value: cdktf.numberToHclTerraform(struct!.serverConnFailBind),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_conn_get_from_list: {
      value: cdktf.numberToHclTerraform(struct!.serverConnGetFromList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_conn_put_in_list: {
      value: cdktf.numberToHclTerraform(struct!.serverConnPutInList),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    single_msg: {
      value: cdktf.numberToHclTerraform(struct!.singleMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unbind_conn: {
      value: cdktf.numberToHclTerraform(struct!.unbindConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSmppOperOperSmppCpuFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbSmppOperOperSmppCpuFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._axResponseDirectly !== undefined) {
      hasAnyValues = true;
      internalValueResult.axResponseDirectly = this._axResponseDirectly;
    }
    if (this._bindConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindConn = this._bindConn;
    }
    if (this._clientConnGetFromList !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientConnGetFromList = this._clientConnGetFromList;
    }
    if (this._clientConnPutInList !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientConnPutInList = this._clientConnPutInList;
    }
    if (this._enquireLinkRecv !== undefined) {
      hasAnyValues = true;
      internalValueResult.enquireLinkRecv = this._enquireLinkRecv;
    }
    if (this._enquireLinkRespRecv !== undefined) {
      hasAnyValues = true;
      internalValueResult.enquireLinkRespRecv = this._enquireLinkRespRecv;
    }
    if (this._enquireLinkRespSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.enquireLinkRespSend = this._enquireLinkRespSend;
    }
    if (this._enquireLinkSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.enquireLinkSend = this._enquireLinkSend;
    }
    if (this._failBindMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.failBindMsg = this._failBindMsg;
    }
    if (this._invalidSeq !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidSeq = this._invalidSeq;
    }
    if (this._msgProxyClientConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyClientConnection = this._msgProxyClientConnection;
    }
    if (this._msgProxyClientDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyClientDrop = this._msgProxyClientDrop;
    }
    if (this._msgProxyClientExceedTmpBuff !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyClientExceedTmpBuff = this._msgProxyClientExceedTmpBuff;
    }
    if (this._msgProxyClientFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyClientFail = this._msgProxyClientFail;
    }
    if (this._msgProxyClientFailParse !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyClientFailParse = this._msgProxyClientFailParse;
    }
    if (this._msgProxyClientFailProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyClientFailProcess = this._msgProxyClientFailProcess;
    }
    if (this._msgProxyClientFailSendPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyClientFailSendPkt = this._msgProxyClientFailSendPkt;
    }
    if (this._msgProxyClientFailSnat !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyClientFailSnat = this._msgProxyClientFailSnat;
    }
    if (this._msgProxyClientFailStartServerConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyClientFailStartServerConn = this._msgProxyClientFailStartServerConn;
    }
    if (this._msgProxyClientIncomplete !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyClientIncomplete = this._msgProxyClientIncomplete;
    }
    if (this._msgProxyClientRecv !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyClientRecv = this._msgProxyClientRecv;
    }
    if (this._msgProxyClientReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyClientReset = this._msgProxyClientReset;
    }
    if (this._msgProxyClientSendSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyClientSendSuccess = this._msgProxyClientSendSuccess;
    }
    if (this._msgProxyCreateServerConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyCreateServerConn = this._msgProxyCreateServerConn;
    }
    if (this._msgProxyCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyCurrent = this._msgProxyCurrent;
    }
    if (this._msgProxyDeprecatedConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyDeprecatedConn = this._msgProxyDeprecatedConn;
    }
    if (this._msgProxyFailAllocMem !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyFailAllocMem = this._msgProxyFailAllocMem;
    }
    if (this._msgProxyFailConstructServerConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyFailConstructServerConn = this._msgProxyFailConstructServerConn;
    }
    if (this._msgProxyFailDcmsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyFailDcmsg = this._msgProxyFailDcmsg;
    }
    if (this._msgProxyFailInsertServerConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyFailInsertServerConn = this._msgProxyFailInsertServerConn;
    }
    if (this._msgProxyFailReservePconn !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyFailReservePconn = this._msgProxyFailReservePconn;
    }
    if (this._msgProxyFailSelectServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyFailSelectServer = this._msgProxyFailSelectServer;
    }
    if (this._msgProxyFailStartServerConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyFailStartServerConn = this._msgProxyFailStartServerConn;
    }
    if (this._msgProxyHoldMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyHoldMsg = this._msgProxyHoldMsg;
    }
    if (this._msgProxyL4FromL4Send !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyL4FromL4Send = this._msgProxyL4FromL4Send;
    }
    if (this._msgProxyL4FromL7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyL4FromL7 = this._msgProxyL4FromL7;
    }
    if (this._msgProxyL4ToL7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyL4ToL7 = this._msgProxyL4ToL7;
    }
    if (this._msgProxyL7CpuFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyL7CpuFailed = this._msgProxyL7CpuFailed;
    }
    if (this._msgProxyL7ToL4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyL7ToL4 = this._msgProxyL7ToL4;
    }
    if (this._msgProxyMagBack !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyMagBack = this._msgProxyMagBack;
    }
    if (this._msgProxyMemAllocd !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyMemAllocd = this._msgProxyMemAllocd;
    }
    if (this._msgProxyMemCached !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyMemCached = this._msgProxyMemCached;
    }
    if (this._msgProxyMemFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyMemFreed = this._msgProxyMemFreed;
    }
    if (this._msgProxyNoVport !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyNoVport = this._msgProxyNoVport;
    }
    if (this._msgProxyParseMsgFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyParseMsgFail = this._msgProxyParseMsgFail;
    }
    if (this._msgProxyPiplineMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyPiplineMsg = this._msgProxyPiplineMsg;
    }
    if (this._msgProxyProcessMsgFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyProcessMsgFail = this._msgProxyProcessMsgFail;
    }
    if (this._msgProxyServerConnAlreadyExists !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyServerConnAlreadyExists = this._msgProxyServerConnAlreadyExists;
    }
    if (this._msgProxyServerConnFailSnat !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyServerConnFailSnat = this._msgProxyServerConnFailSnat;
    }
    if (this._msgProxyServerDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyServerDrop = this._msgProxyServerDrop;
    }
    if (this._msgProxyServerExceedTmpBuff !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyServerExceedTmpBuff = this._msgProxyServerExceedTmpBuff;
    }
    if (this._msgProxyServerFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyServerFail = this._msgProxyServerFail;
    }
    if (this._msgProxyServerFailParse !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyServerFailParse = this._msgProxyServerFailParse;
    }
    if (this._msgProxyServerFailProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyServerFailProcess = this._msgProxyServerFailProcess;
    }
    if (this._msgProxyServerFailSelecConnt !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyServerFailSelecConnt = this._msgProxyServerFailSelecConnt;
    }
    if (this._msgProxyServerFailSendPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyServerFailSendPkt = this._msgProxyServerFailSendPkt;
    }
    if (this._msgProxyServerFailSnat !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyServerFailSnat = this._msgProxyServerFailSnat;
    }
    if (this._msgProxyServerIncomplete !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyServerIncomplete = this._msgProxyServerIncomplete;
    }
    if (this._msgProxyServerRecv !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyServerRecv = this._msgProxyServerRecv;
    }
    if (this._msgProxyServerReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyServerReset = this._msgProxyServerReset;
    }
    if (this._msgProxyServerSendSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyServerSendSuccess = this._msgProxyServerSendSuccess;
    }
    if (this._msgProxySplitPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxySplitPkt = this._msgProxySplitPkt;
    }
    if (this._msgProxyStartServerConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyStartServerConn = this._msgProxyStartServerConn;
    }
    if (this._msgProxyStartServerConnFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyStartServerConnFailed = this._msgProxyStartServerConnFailed;
    }
    if (this._msgProxyToL4SendPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyToL4SendPkt = this._msgProxyToL4SendPkt;
    }
    if (this._msgProxyTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyTotal = this._msgProxyTotal;
    }
    if (this._msgProxyUnexpectedErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgProxyUnexpectedErr = this._msgProxyUnexpectedErr;
    }
    if (this._payloadAllocd !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadAllocd = this._payloadAllocd;
    }
    if (this._payloadFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadFreed = this._payloadFreed;
    }
    if (this._pktTooSmall !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktTooSmall = this._pktTooSmall;
    }
    if (this._selectClientByConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectClientByConn = this._selectClientByConn;
    }
    if (this._selectClientByReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectClientByReq = this._selectClientByReq;
    }
    if (this._selectClientConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectClientConn = this._selectClientConn;
    }
    if (this._selectClientFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectClientFail = this._selectClientFail;
    }
    if (this._selectClientFromList !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectClientFromList = this._selectClientFromList;
    }
    if (this._selectServerByConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectServerByConn = this._selectServerByConn;
    }
    if (this._selectServerByReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectServerByReq = this._selectServerByReq;
    }
    if (this._selectServerConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectServerConn = this._selectServerConn;
    }
    if (this._selectServerFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectServerFail = this._selectServerFail;
    }
    if (this._selectServerFromList !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectServerFromList = this._selectServerFromList;
    }
    if (this._serverConnFailBind !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverConnFailBind = this._serverConnFailBind;
    }
    if (this._serverConnGetFromList !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverConnGetFromList = this._serverConnGetFromList;
    }
    if (this._serverConnPutInList !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverConnPutInList = this._serverConnPutInList;
    }
    if (this._singleMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleMsg = this._singleMsg;
    }
    if (this._unbindConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.unbindConn = this._unbindConn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSmppOperOperSmppCpuFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._axResponseDirectly = undefined;
      this._bindConn = undefined;
      this._clientConnGetFromList = undefined;
      this._clientConnPutInList = undefined;
      this._enquireLinkRecv = undefined;
      this._enquireLinkRespRecv = undefined;
      this._enquireLinkRespSend = undefined;
      this._enquireLinkSend = undefined;
      this._failBindMsg = undefined;
      this._invalidSeq = undefined;
      this._msgProxyClientConnection = undefined;
      this._msgProxyClientDrop = undefined;
      this._msgProxyClientExceedTmpBuff = undefined;
      this._msgProxyClientFail = undefined;
      this._msgProxyClientFailParse = undefined;
      this._msgProxyClientFailProcess = undefined;
      this._msgProxyClientFailSendPkt = undefined;
      this._msgProxyClientFailSnat = undefined;
      this._msgProxyClientFailStartServerConn = undefined;
      this._msgProxyClientIncomplete = undefined;
      this._msgProxyClientRecv = undefined;
      this._msgProxyClientReset = undefined;
      this._msgProxyClientSendSuccess = undefined;
      this._msgProxyCreateServerConn = undefined;
      this._msgProxyCurrent = undefined;
      this._msgProxyDeprecatedConn = undefined;
      this._msgProxyFailAllocMem = undefined;
      this._msgProxyFailConstructServerConn = undefined;
      this._msgProxyFailDcmsg = undefined;
      this._msgProxyFailInsertServerConn = undefined;
      this._msgProxyFailReservePconn = undefined;
      this._msgProxyFailSelectServer = undefined;
      this._msgProxyFailStartServerConn = undefined;
      this._msgProxyHoldMsg = undefined;
      this._msgProxyL4FromL4Send = undefined;
      this._msgProxyL4FromL7 = undefined;
      this._msgProxyL4ToL7 = undefined;
      this._msgProxyL7CpuFailed = undefined;
      this._msgProxyL7ToL4 = undefined;
      this._msgProxyMagBack = undefined;
      this._msgProxyMemAllocd = undefined;
      this._msgProxyMemCached = undefined;
      this._msgProxyMemFreed = undefined;
      this._msgProxyNoVport = undefined;
      this._msgProxyParseMsgFail = undefined;
      this._msgProxyPiplineMsg = undefined;
      this._msgProxyProcessMsgFail = undefined;
      this._msgProxyServerConnAlreadyExists = undefined;
      this._msgProxyServerConnFailSnat = undefined;
      this._msgProxyServerDrop = undefined;
      this._msgProxyServerExceedTmpBuff = undefined;
      this._msgProxyServerFail = undefined;
      this._msgProxyServerFailParse = undefined;
      this._msgProxyServerFailProcess = undefined;
      this._msgProxyServerFailSelecConnt = undefined;
      this._msgProxyServerFailSendPkt = undefined;
      this._msgProxyServerFailSnat = undefined;
      this._msgProxyServerIncomplete = undefined;
      this._msgProxyServerRecv = undefined;
      this._msgProxyServerReset = undefined;
      this._msgProxyServerSendSuccess = undefined;
      this._msgProxySplitPkt = undefined;
      this._msgProxyStartServerConn = undefined;
      this._msgProxyStartServerConnFailed = undefined;
      this._msgProxyToL4SendPkt = undefined;
      this._msgProxyTotal = undefined;
      this._msgProxyUnexpectedErr = undefined;
      this._payloadAllocd = undefined;
      this._payloadFreed = undefined;
      this._pktTooSmall = undefined;
      this._selectClientByConn = undefined;
      this._selectClientByReq = undefined;
      this._selectClientConn = undefined;
      this._selectClientFail = undefined;
      this._selectClientFromList = undefined;
      this._selectServerByConn = undefined;
      this._selectServerByReq = undefined;
      this._selectServerConn = undefined;
      this._selectServerFail = undefined;
      this._selectServerFromList = undefined;
      this._serverConnFailBind = undefined;
      this._serverConnGetFromList = undefined;
      this._serverConnPutInList = undefined;
      this._singleMsg = undefined;
      this._unbindConn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._axResponseDirectly = value.axResponseDirectly;
      this._bindConn = value.bindConn;
      this._clientConnGetFromList = value.clientConnGetFromList;
      this._clientConnPutInList = value.clientConnPutInList;
      this._enquireLinkRecv = value.enquireLinkRecv;
      this._enquireLinkRespRecv = value.enquireLinkRespRecv;
      this._enquireLinkRespSend = value.enquireLinkRespSend;
      this._enquireLinkSend = value.enquireLinkSend;
      this._failBindMsg = value.failBindMsg;
      this._invalidSeq = value.invalidSeq;
      this._msgProxyClientConnection = value.msgProxyClientConnection;
      this._msgProxyClientDrop = value.msgProxyClientDrop;
      this._msgProxyClientExceedTmpBuff = value.msgProxyClientExceedTmpBuff;
      this._msgProxyClientFail = value.msgProxyClientFail;
      this._msgProxyClientFailParse = value.msgProxyClientFailParse;
      this._msgProxyClientFailProcess = value.msgProxyClientFailProcess;
      this._msgProxyClientFailSendPkt = value.msgProxyClientFailSendPkt;
      this._msgProxyClientFailSnat = value.msgProxyClientFailSnat;
      this._msgProxyClientFailStartServerConn = value.msgProxyClientFailStartServerConn;
      this._msgProxyClientIncomplete = value.msgProxyClientIncomplete;
      this._msgProxyClientRecv = value.msgProxyClientRecv;
      this._msgProxyClientReset = value.msgProxyClientReset;
      this._msgProxyClientSendSuccess = value.msgProxyClientSendSuccess;
      this._msgProxyCreateServerConn = value.msgProxyCreateServerConn;
      this._msgProxyCurrent = value.msgProxyCurrent;
      this._msgProxyDeprecatedConn = value.msgProxyDeprecatedConn;
      this._msgProxyFailAllocMem = value.msgProxyFailAllocMem;
      this._msgProxyFailConstructServerConn = value.msgProxyFailConstructServerConn;
      this._msgProxyFailDcmsg = value.msgProxyFailDcmsg;
      this._msgProxyFailInsertServerConn = value.msgProxyFailInsertServerConn;
      this._msgProxyFailReservePconn = value.msgProxyFailReservePconn;
      this._msgProxyFailSelectServer = value.msgProxyFailSelectServer;
      this._msgProxyFailStartServerConn = value.msgProxyFailStartServerConn;
      this._msgProxyHoldMsg = value.msgProxyHoldMsg;
      this._msgProxyL4FromL4Send = value.msgProxyL4FromL4Send;
      this._msgProxyL4FromL7 = value.msgProxyL4FromL7;
      this._msgProxyL4ToL7 = value.msgProxyL4ToL7;
      this._msgProxyL7CpuFailed = value.msgProxyL7CpuFailed;
      this._msgProxyL7ToL4 = value.msgProxyL7ToL4;
      this._msgProxyMagBack = value.msgProxyMagBack;
      this._msgProxyMemAllocd = value.msgProxyMemAllocd;
      this._msgProxyMemCached = value.msgProxyMemCached;
      this._msgProxyMemFreed = value.msgProxyMemFreed;
      this._msgProxyNoVport = value.msgProxyNoVport;
      this._msgProxyParseMsgFail = value.msgProxyParseMsgFail;
      this._msgProxyPiplineMsg = value.msgProxyPiplineMsg;
      this._msgProxyProcessMsgFail = value.msgProxyProcessMsgFail;
      this._msgProxyServerConnAlreadyExists = value.msgProxyServerConnAlreadyExists;
      this._msgProxyServerConnFailSnat = value.msgProxyServerConnFailSnat;
      this._msgProxyServerDrop = value.msgProxyServerDrop;
      this._msgProxyServerExceedTmpBuff = value.msgProxyServerExceedTmpBuff;
      this._msgProxyServerFail = value.msgProxyServerFail;
      this._msgProxyServerFailParse = value.msgProxyServerFailParse;
      this._msgProxyServerFailProcess = value.msgProxyServerFailProcess;
      this._msgProxyServerFailSelecConnt = value.msgProxyServerFailSelecConnt;
      this._msgProxyServerFailSendPkt = value.msgProxyServerFailSendPkt;
      this._msgProxyServerFailSnat = value.msgProxyServerFailSnat;
      this._msgProxyServerIncomplete = value.msgProxyServerIncomplete;
      this._msgProxyServerRecv = value.msgProxyServerRecv;
      this._msgProxyServerReset = value.msgProxyServerReset;
      this._msgProxyServerSendSuccess = value.msgProxyServerSendSuccess;
      this._msgProxySplitPkt = value.msgProxySplitPkt;
      this._msgProxyStartServerConn = value.msgProxyStartServerConn;
      this._msgProxyStartServerConnFailed = value.msgProxyStartServerConnFailed;
      this._msgProxyToL4SendPkt = value.msgProxyToL4SendPkt;
      this._msgProxyTotal = value.msgProxyTotal;
      this._msgProxyUnexpectedErr = value.msgProxyUnexpectedErr;
      this._payloadAllocd = value.payloadAllocd;
      this._payloadFreed = value.payloadFreed;
      this._pktTooSmall = value.pktTooSmall;
      this._selectClientByConn = value.selectClientByConn;
      this._selectClientByReq = value.selectClientByReq;
      this._selectClientConn = value.selectClientConn;
      this._selectClientFail = value.selectClientFail;
      this._selectClientFromList = value.selectClientFromList;
      this._selectServerByConn = value.selectServerByConn;
      this._selectServerByReq = value.selectServerByReq;
      this._selectServerConn = value.selectServerConn;
      this._selectServerFail = value.selectServerFail;
      this._selectServerFromList = value.selectServerFromList;
      this._serverConnFailBind = value.serverConnFailBind;
      this._serverConnGetFromList = value.serverConnGetFromList;
      this._serverConnPutInList = value.serverConnPutInList;
      this._singleMsg = value.singleMsg;
      this._unbindConn = value.unbindConn;
    }
  }

  // ax_response_directly - computed: false, optional: true, required: false
  private _axResponseDirectly?: number; 
  public get axResponseDirectly() {
    return this.getNumberAttribute('ax_response_directly');
  }
  public set axResponseDirectly(value: number) {
    this._axResponseDirectly = value;
  }
  public resetAxResponseDirectly() {
    this._axResponseDirectly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axResponseDirectlyInput() {
    return this._axResponseDirectly;
  }

  // bind_conn - computed: false, optional: true, required: false
  private _bindConn?: number; 
  public get bindConn() {
    return this.getNumberAttribute('bind_conn');
  }
  public set bindConn(value: number) {
    this._bindConn = value;
  }
  public resetBindConn() {
    this._bindConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindConnInput() {
    return this._bindConn;
  }

  // client_conn_get_from_list - computed: false, optional: true, required: false
  private _clientConnGetFromList?: number; 
  public get clientConnGetFromList() {
    return this.getNumberAttribute('client_conn_get_from_list');
  }
  public set clientConnGetFromList(value: number) {
    this._clientConnGetFromList = value;
  }
  public resetClientConnGetFromList() {
    this._clientConnGetFromList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConnGetFromListInput() {
    return this._clientConnGetFromList;
  }

  // client_conn_put_in_list - computed: false, optional: true, required: false
  private _clientConnPutInList?: number; 
  public get clientConnPutInList() {
    return this.getNumberAttribute('client_conn_put_in_list');
  }
  public set clientConnPutInList(value: number) {
    this._clientConnPutInList = value;
  }
  public resetClientConnPutInList() {
    this._clientConnPutInList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConnPutInListInput() {
    return this._clientConnPutInList;
  }

  // enquire_link_recv - computed: false, optional: true, required: false
  private _enquireLinkRecv?: number; 
  public get enquireLinkRecv() {
    return this.getNumberAttribute('enquire_link_recv');
  }
  public set enquireLinkRecv(value: number) {
    this._enquireLinkRecv = value;
  }
  public resetEnquireLinkRecv() {
    this._enquireLinkRecv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enquireLinkRecvInput() {
    return this._enquireLinkRecv;
  }

  // enquire_link_resp_recv - computed: false, optional: true, required: false
  private _enquireLinkRespRecv?: number; 
  public get enquireLinkRespRecv() {
    return this.getNumberAttribute('enquire_link_resp_recv');
  }
  public set enquireLinkRespRecv(value: number) {
    this._enquireLinkRespRecv = value;
  }
  public resetEnquireLinkRespRecv() {
    this._enquireLinkRespRecv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enquireLinkRespRecvInput() {
    return this._enquireLinkRespRecv;
  }

  // enquire_link_resp_send - computed: false, optional: true, required: false
  private _enquireLinkRespSend?: number; 
  public get enquireLinkRespSend() {
    return this.getNumberAttribute('enquire_link_resp_send');
  }
  public set enquireLinkRespSend(value: number) {
    this._enquireLinkRespSend = value;
  }
  public resetEnquireLinkRespSend() {
    this._enquireLinkRespSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enquireLinkRespSendInput() {
    return this._enquireLinkRespSend;
  }

  // enquire_link_send - computed: false, optional: true, required: false
  private _enquireLinkSend?: number; 
  public get enquireLinkSend() {
    return this.getNumberAttribute('enquire_link_send');
  }
  public set enquireLinkSend(value: number) {
    this._enquireLinkSend = value;
  }
  public resetEnquireLinkSend() {
    this._enquireLinkSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enquireLinkSendInput() {
    return this._enquireLinkSend;
  }

  // fail_bind_msg - computed: false, optional: true, required: false
  private _failBindMsg?: number; 
  public get failBindMsg() {
    return this.getNumberAttribute('fail_bind_msg');
  }
  public set failBindMsg(value: number) {
    this._failBindMsg = value;
  }
  public resetFailBindMsg() {
    this._failBindMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failBindMsgInput() {
    return this._failBindMsg;
  }

  // invalid_seq - computed: false, optional: true, required: false
  private _invalidSeq?: number; 
  public get invalidSeq() {
    return this.getNumberAttribute('invalid_seq');
  }
  public set invalidSeq(value: number) {
    this._invalidSeq = value;
  }
  public resetInvalidSeq() {
    this._invalidSeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidSeqInput() {
    return this._invalidSeq;
  }

  // msg_proxy_client_connection - computed: false, optional: true, required: false
  private _msgProxyClientConnection?: number; 
  public get msgProxyClientConnection() {
    return this.getNumberAttribute('msg_proxy_client_connection');
  }
  public set msgProxyClientConnection(value: number) {
    this._msgProxyClientConnection = value;
  }
  public resetMsgProxyClientConnection() {
    this._msgProxyClientConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyClientConnectionInput() {
    return this._msgProxyClientConnection;
  }

  // msg_proxy_client_drop - computed: false, optional: true, required: false
  private _msgProxyClientDrop?: number; 
  public get msgProxyClientDrop() {
    return this.getNumberAttribute('msg_proxy_client_drop');
  }
  public set msgProxyClientDrop(value: number) {
    this._msgProxyClientDrop = value;
  }
  public resetMsgProxyClientDrop() {
    this._msgProxyClientDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyClientDropInput() {
    return this._msgProxyClientDrop;
  }

  // msg_proxy_client_exceed_tmp_buff - computed: false, optional: true, required: false
  private _msgProxyClientExceedTmpBuff?: number; 
  public get msgProxyClientExceedTmpBuff() {
    return this.getNumberAttribute('msg_proxy_client_exceed_tmp_buff');
  }
  public set msgProxyClientExceedTmpBuff(value: number) {
    this._msgProxyClientExceedTmpBuff = value;
  }
  public resetMsgProxyClientExceedTmpBuff() {
    this._msgProxyClientExceedTmpBuff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyClientExceedTmpBuffInput() {
    return this._msgProxyClientExceedTmpBuff;
  }

  // msg_proxy_client_fail - computed: false, optional: true, required: false
  private _msgProxyClientFail?: number; 
  public get msgProxyClientFail() {
    return this.getNumberAttribute('msg_proxy_client_fail');
  }
  public set msgProxyClientFail(value: number) {
    this._msgProxyClientFail = value;
  }
  public resetMsgProxyClientFail() {
    this._msgProxyClientFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyClientFailInput() {
    return this._msgProxyClientFail;
  }

  // msg_proxy_client_fail_parse - computed: false, optional: true, required: false
  private _msgProxyClientFailParse?: number; 
  public get msgProxyClientFailParse() {
    return this.getNumberAttribute('msg_proxy_client_fail_parse');
  }
  public set msgProxyClientFailParse(value: number) {
    this._msgProxyClientFailParse = value;
  }
  public resetMsgProxyClientFailParse() {
    this._msgProxyClientFailParse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyClientFailParseInput() {
    return this._msgProxyClientFailParse;
  }

  // msg_proxy_client_fail_process - computed: false, optional: true, required: false
  private _msgProxyClientFailProcess?: number; 
  public get msgProxyClientFailProcess() {
    return this.getNumberAttribute('msg_proxy_client_fail_process');
  }
  public set msgProxyClientFailProcess(value: number) {
    this._msgProxyClientFailProcess = value;
  }
  public resetMsgProxyClientFailProcess() {
    this._msgProxyClientFailProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyClientFailProcessInput() {
    return this._msgProxyClientFailProcess;
  }

  // msg_proxy_client_fail_send_pkt - computed: false, optional: true, required: false
  private _msgProxyClientFailSendPkt?: number; 
  public get msgProxyClientFailSendPkt() {
    return this.getNumberAttribute('msg_proxy_client_fail_send_pkt');
  }
  public set msgProxyClientFailSendPkt(value: number) {
    this._msgProxyClientFailSendPkt = value;
  }
  public resetMsgProxyClientFailSendPkt() {
    this._msgProxyClientFailSendPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyClientFailSendPktInput() {
    return this._msgProxyClientFailSendPkt;
  }

  // msg_proxy_client_fail_snat - computed: false, optional: true, required: false
  private _msgProxyClientFailSnat?: number; 
  public get msgProxyClientFailSnat() {
    return this.getNumberAttribute('msg_proxy_client_fail_snat');
  }
  public set msgProxyClientFailSnat(value: number) {
    this._msgProxyClientFailSnat = value;
  }
  public resetMsgProxyClientFailSnat() {
    this._msgProxyClientFailSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyClientFailSnatInput() {
    return this._msgProxyClientFailSnat;
  }

  // msg_proxy_client_fail_start_server_conn - computed: false, optional: true, required: false
  private _msgProxyClientFailStartServerConn?: number; 
  public get msgProxyClientFailStartServerConn() {
    return this.getNumberAttribute('msg_proxy_client_fail_start_server_conn');
  }
  public set msgProxyClientFailStartServerConn(value: number) {
    this._msgProxyClientFailStartServerConn = value;
  }
  public resetMsgProxyClientFailStartServerConn() {
    this._msgProxyClientFailStartServerConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyClientFailStartServerConnInput() {
    return this._msgProxyClientFailStartServerConn;
  }

  // msg_proxy_client_incomplete - computed: false, optional: true, required: false
  private _msgProxyClientIncomplete?: number; 
  public get msgProxyClientIncomplete() {
    return this.getNumberAttribute('msg_proxy_client_incomplete');
  }
  public set msgProxyClientIncomplete(value: number) {
    this._msgProxyClientIncomplete = value;
  }
  public resetMsgProxyClientIncomplete() {
    this._msgProxyClientIncomplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyClientIncompleteInput() {
    return this._msgProxyClientIncomplete;
  }

  // msg_proxy_client_recv - computed: false, optional: true, required: false
  private _msgProxyClientRecv?: number; 
  public get msgProxyClientRecv() {
    return this.getNumberAttribute('msg_proxy_client_recv');
  }
  public set msgProxyClientRecv(value: number) {
    this._msgProxyClientRecv = value;
  }
  public resetMsgProxyClientRecv() {
    this._msgProxyClientRecv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyClientRecvInput() {
    return this._msgProxyClientRecv;
  }

  // msg_proxy_client_reset - computed: false, optional: true, required: false
  private _msgProxyClientReset?: number; 
  public get msgProxyClientReset() {
    return this.getNumberAttribute('msg_proxy_client_reset');
  }
  public set msgProxyClientReset(value: number) {
    this._msgProxyClientReset = value;
  }
  public resetMsgProxyClientReset() {
    this._msgProxyClientReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyClientResetInput() {
    return this._msgProxyClientReset;
  }

  // msg_proxy_client_send_success - computed: false, optional: true, required: false
  private _msgProxyClientSendSuccess?: number; 
  public get msgProxyClientSendSuccess() {
    return this.getNumberAttribute('msg_proxy_client_send_success');
  }
  public set msgProxyClientSendSuccess(value: number) {
    this._msgProxyClientSendSuccess = value;
  }
  public resetMsgProxyClientSendSuccess() {
    this._msgProxyClientSendSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyClientSendSuccessInput() {
    return this._msgProxyClientSendSuccess;
  }

  // msg_proxy_create_server_conn - computed: false, optional: true, required: false
  private _msgProxyCreateServerConn?: number; 
  public get msgProxyCreateServerConn() {
    return this.getNumberAttribute('msg_proxy_create_server_conn');
  }
  public set msgProxyCreateServerConn(value: number) {
    this._msgProxyCreateServerConn = value;
  }
  public resetMsgProxyCreateServerConn() {
    this._msgProxyCreateServerConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyCreateServerConnInput() {
    return this._msgProxyCreateServerConn;
  }

  // msg_proxy_current - computed: false, optional: true, required: false
  private _msgProxyCurrent?: number; 
  public get msgProxyCurrent() {
    return this.getNumberAttribute('msg_proxy_current');
  }
  public set msgProxyCurrent(value: number) {
    this._msgProxyCurrent = value;
  }
  public resetMsgProxyCurrent() {
    this._msgProxyCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyCurrentInput() {
    return this._msgProxyCurrent;
  }

  // msg_proxy_deprecated_conn - computed: false, optional: true, required: false
  private _msgProxyDeprecatedConn?: number; 
  public get msgProxyDeprecatedConn() {
    return this.getNumberAttribute('msg_proxy_deprecated_conn');
  }
  public set msgProxyDeprecatedConn(value: number) {
    this._msgProxyDeprecatedConn = value;
  }
  public resetMsgProxyDeprecatedConn() {
    this._msgProxyDeprecatedConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyDeprecatedConnInput() {
    return this._msgProxyDeprecatedConn;
  }

  // msg_proxy_fail_alloc_mem - computed: false, optional: true, required: false
  private _msgProxyFailAllocMem?: number; 
  public get msgProxyFailAllocMem() {
    return this.getNumberAttribute('msg_proxy_fail_alloc_mem');
  }
  public set msgProxyFailAllocMem(value: number) {
    this._msgProxyFailAllocMem = value;
  }
  public resetMsgProxyFailAllocMem() {
    this._msgProxyFailAllocMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyFailAllocMemInput() {
    return this._msgProxyFailAllocMem;
  }

  // msg_proxy_fail_construct_server_conn - computed: false, optional: true, required: false
  private _msgProxyFailConstructServerConn?: number; 
  public get msgProxyFailConstructServerConn() {
    return this.getNumberAttribute('msg_proxy_fail_construct_server_conn');
  }
  public set msgProxyFailConstructServerConn(value: number) {
    this._msgProxyFailConstructServerConn = value;
  }
  public resetMsgProxyFailConstructServerConn() {
    this._msgProxyFailConstructServerConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyFailConstructServerConnInput() {
    return this._msgProxyFailConstructServerConn;
  }

  // msg_proxy_fail_dcmsg - computed: false, optional: true, required: false
  private _msgProxyFailDcmsg?: number; 
  public get msgProxyFailDcmsg() {
    return this.getNumberAttribute('msg_proxy_fail_dcmsg');
  }
  public set msgProxyFailDcmsg(value: number) {
    this._msgProxyFailDcmsg = value;
  }
  public resetMsgProxyFailDcmsg() {
    this._msgProxyFailDcmsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyFailDcmsgInput() {
    return this._msgProxyFailDcmsg;
  }

  // msg_proxy_fail_insert_server_conn - computed: false, optional: true, required: false
  private _msgProxyFailInsertServerConn?: number; 
  public get msgProxyFailInsertServerConn() {
    return this.getNumberAttribute('msg_proxy_fail_insert_server_conn');
  }
  public set msgProxyFailInsertServerConn(value: number) {
    this._msgProxyFailInsertServerConn = value;
  }
  public resetMsgProxyFailInsertServerConn() {
    this._msgProxyFailInsertServerConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyFailInsertServerConnInput() {
    return this._msgProxyFailInsertServerConn;
  }

  // msg_proxy_fail_reserve_pconn - computed: false, optional: true, required: false
  private _msgProxyFailReservePconn?: number; 
  public get msgProxyFailReservePconn() {
    return this.getNumberAttribute('msg_proxy_fail_reserve_pconn');
  }
  public set msgProxyFailReservePconn(value: number) {
    this._msgProxyFailReservePconn = value;
  }
  public resetMsgProxyFailReservePconn() {
    this._msgProxyFailReservePconn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyFailReservePconnInput() {
    return this._msgProxyFailReservePconn;
  }

  // msg_proxy_fail_select_server - computed: false, optional: true, required: false
  private _msgProxyFailSelectServer?: number; 
  public get msgProxyFailSelectServer() {
    return this.getNumberAttribute('msg_proxy_fail_select_server');
  }
  public set msgProxyFailSelectServer(value: number) {
    this._msgProxyFailSelectServer = value;
  }
  public resetMsgProxyFailSelectServer() {
    this._msgProxyFailSelectServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyFailSelectServerInput() {
    return this._msgProxyFailSelectServer;
  }

  // msg_proxy_fail_start_server_conn - computed: false, optional: true, required: false
  private _msgProxyFailStartServerConn?: number; 
  public get msgProxyFailStartServerConn() {
    return this.getNumberAttribute('msg_proxy_fail_start_server_conn');
  }
  public set msgProxyFailStartServerConn(value: number) {
    this._msgProxyFailStartServerConn = value;
  }
  public resetMsgProxyFailStartServerConn() {
    this._msgProxyFailStartServerConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyFailStartServerConnInput() {
    return this._msgProxyFailStartServerConn;
  }

  // msg_proxy_hold_msg - computed: false, optional: true, required: false
  private _msgProxyHoldMsg?: number; 
  public get msgProxyHoldMsg() {
    return this.getNumberAttribute('msg_proxy_hold_msg');
  }
  public set msgProxyHoldMsg(value: number) {
    this._msgProxyHoldMsg = value;
  }
  public resetMsgProxyHoldMsg() {
    this._msgProxyHoldMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyHoldMsgInput() {
    return this._msgProxyHoldMsg;
  }

  // msg_proxy_l4_from_l4_send - computed: false, optional: true, required: false
  private _msgProxyL4FromL4Send?: number; 
  public get msgProxyL4FromL4Send() {
    return this.getNumberAttribute('msg_proxy_l4_from_l4_send');
  }
  public set msgProxyL4FromL4Send(value: number) {
    this._msgProxyL4FromL4Send = value;
  }
  public resetMsgProxyL4FromL4Send() {
    this._msgProxyL4FromL4Send = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyL4FromL4SendInput() {
    return this._msgProxyL4FromL4Send;
  }

  // msg_proxy_l4_from_l7 - computed: false, optional: true, required: false
  private _msgProxyL4FromL7?: number; 
  public get msgProxyL4FromL7() {
    return this.getNumberAttribute('msg_proxy_l4_from_l7');
  }
  public set msgProxyL4FromL7(value: number) {
    this._msgProxyL4FromL7 = value;
  }
  public resetMsgProxyL4FromL7() {
    this._msgProxyL4FromL7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyL4FromL7Input() {
    return this._msgProxyL4FromL7;
  }

  // msg_proxy_l4_to_l7 - computed: false, optional: true, required: false
  private _msgProxyL4ToL7?: number; 
  public get msgProxyL4ToL7() {
    return this.getNumberAttribute('msg_proxy_l4_to_l7');
  }
  public set msgProxyL4ToL7(value: number) {
    this._msgProxyL4ToL7 = value;
  }
  public resetMsgProxyL4ToL7() {
    this._msgProxyL4ToL7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyL4ToL7Input() {
    return this._msgProxyL4ToL7;
  }

  // msg_proxy_l7_cpu_failed - computed: false, optional: true, required: false
  private _msgProxyL7CpuFailed?: number; 
  public get msgProxyL7CpuFailed() {
    return this.getNumberAttribute('msg_proxy_l7_cpu_failed');
  }
  public set msgProxyL7CpuFailed(value: number) {
    this._msgProxyL7CpuFailed = value;
  }
  public resetMsgProxyL7CpuFailed() {
    this._msgProxyL7CpuFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyL7CpuFailedInput() {
    return this._msgProxyL7CpuFailed;
  }

  // msg_proxy_l7_to_l4 - computed: false, optional: true, required: false
  private _msgProxyL7ToL4?: number; 
  public get msgProxyL7ToL4() {
    return this.getNumberAttribute('msg_proxy_l7_to_l4');
  }
  public set msgProxyL7ToL4(value: number) {
    this._msgProxyL7ToL4 = value;
  }
  public resetMsgProxyL7ToL4() {
    this._msgProxyL7ToL4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyL7ToL4Input() {
    return this._msgProxyL7ToL4;
  }

  // msg_proxy_mag_back - computed: false, optional: true, required: false
  private _msgProxyMagBack?: number; 
  public get msgProxyMagBack() {
    return this.getNumberAttribute('msg_proxy_mag_back');
  }
  public set msgProxyMagBack(value: number) {
    this._msgProxyMagBack = value;
  }
  public resetMsgProxyMagBack() {
    this._msgProxyMagBack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyMagBackInput() {
    return this._msgProxyMagBack;
  }

  // msg_proxy_mem_allocd - computed: false, optional: true, required: false
  private _msgProxyMemAllocd?: number; 
  public get msgProxyMemAllocd() {
    return this.getNumberAttribute('msg_proxy_mem_allocd');
  }
  public set msgProxyMemAllocd(value: number) {
    this._msgProxyMemAllocd = value;
  }
  public resetMsgProxyMemAllocd() {
    this._msgProxyMemAllocd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyMemAllocdInput() {
    return this._msgProxyMemAllocd;
  }

  // msg_proxy_mem_cached - computed: false, optional: true, required: false
  private _msgProxyMemCached?: number; 
  public get msgProxyMemCached() {
    return this.getNumberAttribute('msg_proxy_mem_cached');
  }
  public set msgProxyMemCached(value: number) {
    this._msgProxyMemCached = value;
  }
  public resetMsgProxyMemCached() {
    this._msgProxyMemCached = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyMemCachedInput() {
    return this._msgProxyMemCached;
  }

  // msg_proxy_mem_freed - computed: false, optional: true, required: false
  private _msgProxyMemFreed?: number; 
  public get msgProxyMemFreed() {
    return this.getNumberAttribute('msg_proxy_mem_freed');
  }
  public set msgProxyMemFreed(value: number) {
    this._msgProxyMemFreed = value;
  }
  public resetMsgProxyMemFreed() {
    this._msgProxyMemFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyMemFreedInput() {
    return this._msgProxyMemFreed;
  }

  // msg_proxy_no_vport - computed: false, optional: true, required: false
  private _msgProxyNoVport?: number; 
  public get msgProxyNoVport() {
    return this.getNumberAttribute('msg_proxy_no_vport');
  }
  public set msgProxyNoVport(value: number) {
    this._msgProxyNoVport = value;
  }
  public resetMsgProxyNoVport() {
    this._msgProxyNoVport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyNoVportInput() {
    return this._msgProxyNoVport;
  }

  // msg_proxy_parse_msg_fail - computed: false, optional: true, required: false
  private _msgProxyParseMsgFail?: number; 
  public get msgProxyParseMsgFail() {
    return this.getNumberAttribute('msg_proxy_parse_msg_fail');
  }
  public set msgProxyParseMsgFail(value: number) {
    this._msgProxyParseMsgFail = value;
  }
  public resetMsgProxyParseMsgFail() {
    this._msgProxyParseMsgFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyParseMsgFailInput() {
    return this._msgProxyParseMsgFail;
  }

  // msg_proxy_pipline_msg - computed: false, optional: true, required: false
  private _msgProxyPiplineMsg?: number; 
  public get msgProxyPiplineMsg() {
    return this.getNumberAttribute('msg_proxy_pipline_msg');
  }
  public set msgProxyPiplineMsg(value: number) {
    this._msgProxyPiplineMsg = value;
  }
  public resetMsgProxyPiplineMsg() {
    this._msgProxyPiplineMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyPiplineMsgInput() {
    return this._msgProxyPiplineMsg;
  }

  // msg_proxy_process_msg_fail - computed: false, optional: true, required: false
  private _msgProxyProcessMsgFail?: number; 
  public get msgProxyProcessMsgFail() {
    return this.getNumberAttribute('msg_proxy_process_msg_fail');
  }
  public set msgProxyProcessMsgFail(value: number) {
    this._msgProxyProcessMsgFail = value;
  }
  public resetMsgProxyProcessMsgFail() {
    this._msgProxyProcessMsgFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyProcessMsgFailInput() {
    return this._msgProxyProcessMsgFail;
  }

  // msg_proxy_server_conn_already_exists - computed: false, optional: true, required: false
  private _msgProxyServerConnAlreadyExists?: number; 
  public get msgProxyServerConnAlreadyExists() {
    return this.getNumberAttribute('msg_proxy_server_conn_already_exists');
  }
  public set msgProxyServerConnAlreadyExists(value: number) {
    this._msgProxyServerConnAlreadyExists = value;
  }
  public resetMsgProxyServerConnAlreadyExists() {
    this._msgProxyServerConnAlreadyExists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyServerConnAlreadyExistsInput() {
    return this._msgProxyServerConnAlreadyExists;
  }

  // msg_proxy_server_conn_fail_snat - computed: false, optional: true, required: false
  private _msgProxyServerConnFailSnat?: number; 
  public get msgProxyServerConnFailSnat() {
    return this.getNumberAttribute('msg_proxy_server_conn_fail_snat');
  }
  public set msgProxyServerConnFailSnat(value: number) {
    this._msgProxyServerConnFailSnat = value;
  }
  public resetMsgProxyServerConnFailSnat() {
    this._msgProxyServerConnFailSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyServerConnFailSnatInput() {
    return this._msgProxyServerConnFailSnat;
  }

  // msg_proxy_server_drop - computed: false, optional: true, required: false
  private _msgProxyServerDrop?: number; 
  public get msgProxyServerDrop() {
    return this.getNumberAttribute('msg_proxy_server_drop');
  }
  public set msgProxyServerDrop(value: number) {
    this._msgProxyServerDrop = value;
  }
  public resetMsgProxyServerDrop() {
    this._msgProxyServerDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyServerDropInput() {
    return this._msgProxyServerDrop;
  }

  // msg_proxy_server_exceed_tmp_buff - computed: false, optional: true, required: false
  private _msgProxyServerExceedTmpBuff?: number; 
  public get msgProxyServerExceedTmpBuff() {
    return this.getNumberAttribute('msg_proxy_server_exceed_tmp_buff');
  }
  public set msgProxyServerExceedTmpBuff(value: number) {
    this._msgProxyServerExceedTmpBuff = value;
  }
  public resetMsgProxyServerExceedTmpBuff() {
    this._msgProxyServerExceedTmpBuff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyServerExceedTmpBuffInput() {
    return this._msgProxyServerExceedTmpBuff;
  }

  // msg_proxy_server_fail - computed: false, optional: true, required: false
  private _msgProxyServerFail?: number; 
  public get msgProxyServerFail() {
    return this.getNumberAttribute('msg_proxy_server_fail');
  }
  public set msgProxyServerFail(value: number) {
    this._msgProxyServerFail = value;
  }
  public resetMsgProxyServerFail() {
    this._msgProxyServerFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyServerFailInput() {
    return this._msgProxyServerFail;
  }

  // msg_proxy_server_fail_parse - computed: false, optional: true, required: false
  private _msgProxyServerFailParse?: number; 
  public get msgProxyServerFailParse() {
    return this.getNumberAttribute('msg_proxy_server_fail_parse');
  }
  public set msgProxyServerFailParse(value: number) {
    this._msgProxyServerFailParse = value;
  }
  public resetMsgProxyServerFailParse() {
    this._msgProxyServerFailParse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyServerFailParseInput() {
    return this._msgProxyServerFailParse;
  }

  // msg_proxy_server_fail_process - computed: false, optional: true, required: false
  private _msgProxyServerFailProcess?: number; 
  public get msgProxyServerFailProcess() {
    return this.getNumberAttribute('msg_proxy_server_fail_process');
  }
  public set msgProxyServerFailProcess(value: number) {
    this._msgProxyServerFailProcess = value;
  }
  public resetMsgProxyServerFailProcess() {
    this._msgProxyServerFailProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyServerFailProcessInput() {
    return this._msgProxyServerFailProcess;
  }

  // msg_proxy_server_fail_selec_connt - computed: false, optional: true, required: false
  private _msgProxyServerFailSelecConnt?: number; 
  public get msgProxyServerFailSelecConnt() {
    return this.getNumberAttribute('msg_proxy_server_fail_selec_connt');
  }
  public set msgProxyServerFailSelecConnt(value: number) {
    this._msgProxyServerFailSelecConnt = value;
  }
  public resetMsgProxyServerFailSelecConnt() {
    this._msgProxyServerFailSelecConnt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyServerFailSelecConntInput() {
    return this._msgProxyServerFailSelecConnt;
  }

  // msg_proxy_server_fail_send_pkt - computed: false, optional: true, required: false
  private _msgProxyServerFailSendPkt?: number; 
  public get msgProxyServerFailSendPkt() {
    return this.getNumberAttribute('msg_proxy_server_fail_send_pkt');
  }
  public set msgProxyServerFailSendPkt(value: number) {
    this._msgProxyServerFailSendPkt = value;
  }
  public resetMsgProxyServerFailSendPkt() {
    this._msgProxyServerFailSendPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyServerFailSendPktInput() {
    return this._msgProxyServerFailSendPkt;
  }

  // msg_proxy_server_fail_snat - computed: false, optional: true, required: false
  private _msgProxyServerFailSnat?: number; 
  public get msgProxyServerFailSnat() {
    return this.getNumberAttribute('msg_proxy_server_fail_snat');
  }
  public set msgProxyServerFailSnat(value: number) {
    this._msgProxyServerFailSnat = value;
  }
  public resetMsgProxyServerFailSnat() {
    this._msgProxyServerFailSnat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyServerFailSnatInput() {
    return this._msgProxyServerFailSnat;
  }

  // msg_proxy_server_incomplete - computed: false, optional: true, required: false
  private _msgProxyServerIncomplete?: number; 
  public get msgProxyServerIncomplete() {
    return this.getNumberAttribute('msg_proxy_server_incomplete');
  }
  public set msgProxyServerIncomplete(value: number) {
    this._msgProxyServerIncomplete = value;
  }
  public resetMsgProxyServerIncomplete() {
    this._msgProxyServerIncomplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyServerIncompleteInput() {
    return this._msgProxyServerIncomplete;
  }

  // msg_proxy_server_recv - computed: false, optional: true, required: false
  private _msgProxyServerRecv?: number; 
  public get msgProxyServerRecv() {
    return this.getNumberAttribute('msg_proxy_server_recv');
  }
  public set msgProxyServerRecv(value: number) {
    this._msgProxyServerRecv = value;
  }
  public resetMsgProxyServerRecv() {
    this._msgProxyServerRecv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyServerRecvInput() {
    return this._msgProxyServerRecv;
  }

  // msg_proxy_server_reset - computed: false, optional: true, required: false
  private _msgProxyServerReset?: number; 
  public get msgProxyServerReset() {
    return this.getNumberAttribute('msg_proxy_server_reset');
  }
  public set msgProxyServerReset(value: number) {
    this._msgProxyServerReset = value;
  }
  public resetMsgProxyServerReset() {
    this._msgProxyServerReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyServerResetInput() {
    return this._msgProxyServerReset;
  }

  // msg_proxy_server_send_success - computed: false, optional: true, required: false
  private _msgProxyServerSendSuccess?: number; 
  public get msgProxyServerSendSuccess() {
    return this.getNumberAttribute('msg_proxy_server_send_success');
  }
  public set msgProxyServerSendSuccess(value: number) {
    this._msgProxyServerSendSuccess = value;
  }
  public resetMsgProxyServerSendSuccess() {
    this._msgProxyServerSendSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyServerSendSuccessInput() {
    return this._msgProxyServerSendSuccess;
  }

  // msg_proxy_split_pkt - computed: false, optional: true, required: false
  private _msgProxySplitPkt?: number; 
  public get msgProxySplitPkt() {
    return this.getNumberAttribute('msg_proxy_split_pkt');
  }
  public set msgProxySplitPkt(value: number) {
    this._msgProxySplitPkt = value;
  }
  public resetMsgProxySplitPkt() {
    this._msgProxySplitPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxySplitPktInput() {
    return this._msgProxySplitPkt;
  }

  // msg_proxy_start_server_conn - computed: false, optional: true, required: false
  private _msgProxyStartServerConn?: number; 
  public get msgProxyStartServerConn() {
    return this.getNumberAttribute('msg_proxy_start_server_conn');
  }
  public set msgProxyStartServerConn(value: number) {
    this._msgProxyStartServerConn = value;
  }
  public resetMsgProxyStartServerConn() {
    this._msgProxyStartServerConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyStartServerConnInput() {
    return this._msgProxyStartServerConn;
  }

  // msg_proxy_start_server_conn_failed - computed: false, optional: true, required: false
  private _msgProxyStartServerConnFailed?: number; 
  public get msgProxyStartServerConnFailed() {
    return this.getNumberAttribute('msg_proxy_start_server_conn_failed');
  }
  public set msgProxyStartServerConnFailed(value: number) {
    this._msgProxyStartServerConnFailed = value;
  }
  public resetMsgProxyStartServerConnFailed() {
    this._msgProxyStartServerConnFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyStartServerConnFailedInput() {
    return this._msgProxyStartServerConnFailed;
  }

  // msg_proxy_to_l4_send_pkt - computed: false, optional: true, required: false
  private _msgProxyToL4SendPkt?: number; 
  public get msgProxyToL4SendPkt() {
    return this.getNumberAttribute('msg_proxy_to_l4_send_pkt');
  }
  public set msgProxyToL4SendPkt(value: number) {
    this._msgProxyToL4SendPkt = value;
  }
  public resetMsgProxyToL4SendPkt() {
    this._msgProxyToL4SendPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyToL4SendPktInput() {
    return this._msgProxyToL4SendPkt;
  }

  // msg_proxy_total - computed: false, optional: true, required: false
  private _msgProxyTotal?: number; 
  public get msgProxyTotal() {
    return this.getNumberAttribute('msg_proxy_total');
  }
  public set msgProxyTotal(value: number) {
    this._msgProxyTotal = value;
  }
  public resetMsgProxyTotal() {
    this._msgProxyTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyTotalInput() {
    return this._msgProxyTotal;
  }

  // msg_proxy_unexpected_err - computed: false, optional: true, required: false
  private _msgProxyUnexpectedErr?: number; 
  public get msgProxyUnexpectedErr() {
    return this.getNumberAttribute('msg_proxy_unexpected_err');
  }
  public set msgProxyUnexpectedErr(value: number) {
    this._msgProxyUnexpectedErr = value;
  }
  public resetMsgProxyUnexpectedErr() {
    this._msgProxyUnexpectedErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgProxyUnexpectedErrInput() {
    return this._msgProxyUnexpectedErr;
  }

  // payload_allocd - computed: false, optional: true, required: false
  private _payloadAllocd?: number; 
  public get payloadAllocd() {
    return this.getNumberAttribute('payload_allocd');
  }
  public set payloadAllocd(value: number) {
    this._payloadAllocd = value;
  }
  public resetPayloadAllocd() {
    this._payloadAllocd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadAllocdInput() {
    return this._payloadAllocd;
  }

  // payload_freed - computed: false, optional: true, required: false
  private _payloadFreed?: number; 
  public get payloadFreed() {
    return this.getNumberAttribute('payload_freed');
  }
  public set payloadFreed(value: number) {
    this._payloadFreed = value;
  }
  public resetPayloadFreed() {
    this._payloadFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadFreedInput() {
    return this._payloadFreed;
  }

  // pkt_too_small - computed: false, optional: true, required: false
  private _pktTooSmall?: number; 
  public get pktTooSmall() {
    return this.getNumberAttribute('pkt_too_small');
  }
  public set pktTooSmall(value: number) {
    this._pktTooSmall = value;
  }
  public resetPktTooSmall() {
    this._pktTooSmall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktTooSmallInput() {
    return this._pktTooSmall;
  }

  // select_client_by_conn - computed: false, optional: true, required: false
  private _selectClientByConn?: number; 
  public get selectClientByConn() {
    return this.getNumberAttribute('select_client_by_conn');
  }
  public set selectClientByConn(value: number) {
    this._selectClientByConn = value;
  }
  public resetSelectClientByConn() {
    this._selectClientByConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectClientByConnInput() {
    return this._selectClientByConn;
  }

  // select_client_by_req - computed: false, optional: true, required: false
  private _selectClientByReq?: number; 
  public get selectClientByReq() {
    return this.getNumberAttribute('select_client_by_req');
  }
  public set selectClientByReq(value: number) {
    this._selectClientByReq = value;
  }
  public resetSelectClientByReq() {
    this._selectClientByReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectClientByReqInput() {
    return this._selectClientByReq;
  }

  // select_client_conn - computed: false, optional: true, required: false
  private _selectClientConn?: number; 
  public get selectClientConn() {
    return this.getNumberAttribute('select_client_conn');
  }
  public set selectClientConn(value: number) {
    this._selectClientConn = value;
  }
  public resetSelectClientConn() {
    this._selectClientConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectClientConnInput() {
    return this._selectClientConn;
  }

  // select_client_fail - computed: false, optional: true, required: false
  private _selectClientFail?: number; 
  public get selectClientFail() {
    return this.getNumberAttribute('select_client_fail');
  }
  public set selectClientFail(value: number) {
    this._selectClientFail = value;
  }
  public resetSelectClientFail() {
    this._selectClientFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectClientFailInput() {
    return this._selectClientFail;
  }

  // select_client_from_list - computed: false, optional: true, required: false
  private _selectClientFromList?: number; 
  public get selectClientFromList() {
    return this.getNumberAttribute('select_client_from_list');
  }
  public set selectClientFromList(value: number) {
    this._selectClientFromList = value;
  }
  public resetSelectClientFromList() {
    this._selectClientFromList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectClientFromListInput() {
    return this._selectClientFromList;
  }

  // select_server_by_conn - computed: false, optional: true, required: false
  private _selectServerByConn?: number; 
  public get selectServerByConn() {
    return this.getNumberAttribute('select_server_by_conn');
  }
  public set selectServerByConn(value: number) {
    this._selectServerByConn = value;
  }
  public resetSelectServerByConn() {
    this._selectServerByConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectServerByConnInput() {
    return this._selectServerByConn;
  }

  // select_server_by_req - computed: false, optional: true, required: false
  private _selectServerByReq?: number; 
  public get selectServerByReq() {
    return this.getNumberAttribute('select_server_by_req');
  }
  public set selectServerByReq(value: number) {
    this._selectServerByReq = value;
  }
  public resetSelectServerByReq() {
    this._selectServerByReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectServerByReqInput() {
    return this._selectServerByReq;
  }

  // select_server_conn - computed: false, optional: true, required: false
  private _selectServerConn?: number; 
  public get selectServerConn() {
    return this.getNumberAttribute('select_server_conn');
  }
  public set selectServerConn(value: number) {
    this._selectServerConn = value;
  }
  public resetSelectServerConn() {
    this._selectServerConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectServerConnInput() {
    return this._selectServerConn;
  }

  // select_server_fail - computed: false, optional: true, required: false
  private _selectServerFail?: number; 
  public get selectServerFail() {
    return this.getNumberAttribute('select_server_fail');
  }
  public set selectServerFail(value: number) {
    this._selectServerFail = value;
  }
  public resetSelectServerFail() {
    this._selectServerFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectServerFailInput() {
    return this._selectServerFail;
  }

  // select_server_from_list - computed: false, optional: true, required: false
  private _selectServerFromList?: number; 
  public get selectServerFromList() {
    return this.getNumberAttribute('select_server_from_list');
  }
  public set selectServerFromList(value: number) {
    this._selectServerFromList = value;
  }
  public resetSelectServerFromList() {
    this._selectServerFromList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectServerFromListInput() {
    return this._selectServerFromList;
  }

  // server_conn_fail_bind - computed: false, optional: true, required: false
  private _serverConnFailBind?: number; 
  public get serverConnFailBind() {
    return this.getNumberAttribute('server_conn_fail_bind');
  }
  public set serverConnFailBind(value: number) {
    this._serverConnFailBind = value;
  }
  public resetServerConnFailBind() {
    this._serverConnFailBind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConnFailBindInput() {
    return this._serverConnFailBind;
  }

  // server_conn_get_from_list - computed: false, optional: true, required: false
  private _serverConnGetFromList?: number; 
  public get serverConnGetFromList() {
    return this.getNumberAttribute('server_conn_get_from_list');
  }
  public set serverConnGetFromList(value: number) {
    this._serverConnGetFromList = value;
  }
  public resetServerConnGetFromList() {
    this._serverConnGetFromList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConnGetFromListInput() {
    return this._serverConnGetFromList;
  }

  // server_conn_put_in_list - computed: false, optional: true, required: false
  private _serverConnPutInList?: number; 
  public get serverConnPutInList() {
    return this.getNumberAttribute('server_conn_put_in_list');
  }
  public set serverConnPutInList(value: number) {
    this._serverConnPutInList = value;
  }
  public resetServerConnPutInList() {
    this._serverConnPutInList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConnPutInListInput() {
    return this._serverConnPutInList;
  }

  // single_msg - computed: false, optional: true, required: false
  private _singleMsg?: number; 
  public get singleMsg() {
    return this.getNumberAttribute('single_msg');
  }
  public set singleMsg(value: number) {
    this._singleMsg = value;
  }
  public resetSingleMsg() {
    this._singleMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleMsgInput() {
    return this._singleMsg;
  }

  // unbind_conn - computed: false, optional: true, required: false
  private _unbindConn?: number; 
  public get unbindConn() {
    return this.getNumberAttribute('unbind_conn');
  }
  public set unbindConn(value: number) {
    this._unbindConn = value;
  }
  public resetUnbindConn() {
    this._unbindConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unbindConnInput() {
    return this._unbindConn;
  }
}

export class DataThunderSlbSmppOperOperSmppCpuFieldsList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbSmppOperOperSmppCpuFields[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbSmppOperOperSmppCpuFieldsOutputReference {
    return new DataThunderSlbSmppOperOperSmppCpuFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbSmppOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#cpu_count DataThunderSlbSmppOper#cpu_count}
  */
  readonly cpuCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#filter_type DataThunderSlbSmppOper#filter_type}
  */
  readonly filterType?: string;
  /**
  * smpp_cpu_fields block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#smpp_cpu_fields DataThunderSlbSmppOper#smpp_cpu_fields}
  */
  readonly smppCpuFields?: DataThunderSlbSmppOperOperSmppCpuFields[] | cdktf.IResolvable;
}

export function dataThunderSlbSmppOperOperToTerraform(struct?: DataThunderSlbSmppOperOperOutputReference | DataThunderSlbSmppOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    smpp_cpu_fields: cdktf.listMapper(dataThunderSlbSmppOperOperSmppCpuFieldsToTerraform, true)(struct!.smppCpuFields),
  }
}


export function dataThunderSlbSmppOperOperToHclTerraform(struct?: DataThunderSlbSmppOperOperOutputReference | DataThunderSlbSmppOperOper): any {
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
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smpp_cpu_fields: {
      value: cdktf.listMapperHcl(dataThunderSlbSmppOperOperSmppCpuFieldsToHclTerraform, true)(struct!.smppCpuFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbSmppOperOperSmppCpuFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSmppOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbSmppOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._smppCpuFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smppCpuFields = this._smppCpuFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSmppOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCount = undefined;
      this._filterType = undefined;
      this._smppCpuFields.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCount = value.cpuCount;
      this._filterType = value.filterType;
      this._smppCpuFields.internalValue = value.smppCpuFields;
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

  // filter_type - computed: false, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // smpp_cpu_fields - computed: false, optional: true, required: false
  private _smppCpuFields = new DataThunderSlbSmppOperOperSmppCpuFieldsList(this, "smpp_cpu_fields", false);
  public get smppCpuFields() {
    return this._smppCpuFields;
  }
  public putSmppCpuFields(value: DataThunderSlbSmppOperOperSmppCpuFields[] | cdktf.IResolvable) {
    this._smppCpuFields.internalValue = value;
  }
  public resetSmppCpuFields() {
    this._smppCpuFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smppCpuFieldsInput() {
    return this._smppCpuFields.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper thunder_slb_smpp_oper}
*/
export class DataThunderSlbSmppOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_smpp_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbSmppOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbSmppOper to import
  * @param importFromId The id of the existing DataThunderSlbSmppOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbSmppOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_smpp_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smpp_oper thunder_slb_smpp_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbSmppOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbSmppOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_smpp_oper',
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
  private _oper = new DataThunderSlbSmppOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbSmppOperOper) {
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
      oper: dataThunderSlbSmppOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbSmppOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbSmppOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
