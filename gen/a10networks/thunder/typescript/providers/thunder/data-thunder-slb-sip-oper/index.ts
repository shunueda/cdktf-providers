// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbSipOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#id DataThunderSlbSipOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#oper DataThunderSlbSipOper#oper}
  */
  readonly oper?: DataThunderSlbSipOperOper;
}
export interface DataThunderSlbSipOperOperSipCpuListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#acl_denied DataThunderSlbSipOper#acl_denied}
  */
  readonly aclDenied?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#assemble_frag_failed DataThunderSlbSipOper#assemble_frag_failed}
  */
  readonly assembleFragFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#ax_health_check_received DataThunderSlbSipOper#ax_health_check_received}
  */
  readonly axHealthCheckReceived?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#body_too_big DataThunderSlbSipOper#body_too_big}
  */
  readonly bodyTooBig?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#call_id_select_client DataThunderSlbSipOper#call_id_select_client}
  */
  readonly callIdSelectClient?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#client_keepalive_received DataThunderSlbSipOper#client_keepalive_received}
  */
  readonly clientKeepaliveReceived?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#client_keepalive_send DataThunderSlbSipOper#client_keepalive_send}
  */
  readonly clientKeepaliveSend?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#client_request DataThunderSlbSipOper#client_request}
  */
  readonly clientRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#client_request_ok DataThunderSlbSipOper#client_request_ok}
  */
  readonly clientRequestOk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#client_select_failed DataThunderSlbSipOper#client_select_failed}
  */
  readonly clientSelectFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#cmsg_no_uri_header DataThunderSlbSipOper#cmsg_no_uri_header}
  */
  readonly cmsgNoUriHeader?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#cmsg_no_uri_session DataThunderSlbSipOper#cmsg_no_uri_session}
  */
  readonly cmsgNoUriSession?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#concatenate_msg DataThunderSlbSipOper#concatenate_msg}
  */
  readonly concatenateMsg?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#conn_allocd DataThunderSlbSipOper#conn_allocd}
  */
  readonly connAllocd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#conn_freed DataThunderSlbSipOper#conn_freed}
  */
  readonly connFreed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#deprecated_msg DataThunderSlbSipOper#deprecated_msg}
  */
  readonly deprecatedMsg?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#fail_get_counter DataThunderSlbSipOper#fail_get_counter}
  */
  readonly failGetCounter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#fail_insert_callid_session DataThunderSlbSipOper#fail_insert_callid_session}
  */
  readonly failInsertCallidSession?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#fail_insert_header DataThunderSlbSipOper#fail_insert_header}
  */
  readonly failInsertHeader?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#fail_insert_uri_session DataThunderSlbSipOper#fail_insert_uri_session}
  */
  readonly failInsertUriSession?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#fail_parse_headers DataThunderSlbSipOper#fail_parse_headers}
  */
  readonly failParseHeaders?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#fail_parse_start_line DataThunderSlbSipOper#fail_parse_start_line}
  */
  readonly failParseStartLine?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#fail_read_start_line DataThunderSlbSipOper#fail_read_start_line}
  */
  readonly failReadStartLine?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#fail_split_fragment DataThunderSlbSipOper#fail_split_fragment}
  */
  readonly failSplitFragment?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#ha_fail_alloc_call_id DataThunderSlbSipOper#ha_fail_alloc_call_id}
  */
  readonly haFailAllocCallId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#ha_fail_alloc_sip_session DataThunderSlbSipOper#ha_fail_alloc_sip_session}
  */
  readonly haFailAllocSipSession?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#ha_fail_clone_sip_session DataThunderSlbSipOper#ha_fail_clone_sip_session}
  */
  readonly haFailCloneSipSession?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#ha_fail_get_msg_header DataThunderSlbSipOper#ha_fail_get_msg_header}
  */
  readonly haFailGetMsgHeader?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#ha_insert_sip_session_ok DataThunderSlbSipOper#ha_insert_sip_session_ok}
  */
  readonly haInsertSipSessionOk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#ha_invalid_pkt DataThunderSlbSipOper#ha_invalid_pkt}
  */
  readonly haInvalidPkt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#ha_recv_sip_session DataThunderSlbSipOper#ha_recv_sip_session}
  */
  readonly haRecvSipSession?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#ha_send_sip_session DataThunderSlbSipOper#ha_send_sip_session}
  */
  readonly haSendSipSession?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#ha_send_sip_session_ok DataThunderSlbSipOper#ha_send_sip_session_ok}
  */
  readonly haSendSipSessionOk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#ha_update_sip_session_ok DataThunderSlbSipOper#ha_update_sip_session_ok}
  */
  readonly haUpdateSipSessionOk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#header_name_too_long DataThunderSlbSipOper#header_name_too_long}
  */
  readonly headerNameTooLong?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#identify_dir_failed DataThunderSlbSipOper#identify_dir_failed}
  */
  readonly identifyDirFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#invalid_header DataThunderSlbSipOper#invalid_header}
  */
  readonly invalidHeader?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#invalid_start_line DataThunderSlbSipOper#invalid_start_line}
  */
  readonly invalidStartLine?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#line_mem_allocd DataThunderSlbSipOper#line_mem_allocd}
  */
  readonly lineMemAllocd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#line_mem_freed DataThunderSlbSipOper#line_mem_freed}
  */
  readonly lineMemFreed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#line_too_long DataThunderSlbSipOper#line_too_long}
  */
  readonly lineTooLong?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_no_call_id DataThunderSlbSipOper#msg_no_call_id}
  */
  readonly msgNoCallId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_client_connection DataThunderSlbSipOper#msg_proxy_client_connection}
  */
  readonly msgProxyClientConnection?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_client_drop DataThunderSlbSipOper#msg_proxy_client_drop}
  */
  readonly msgProxyClientDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_client_exceed_tmp_buff DataThunderSlbSipOper#msg_proxy_client_exceed_tmp_buff}
  */
  readonly msgProxyClientExceedTmpBuff?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_client_fail DataThunderSlbSipOper#msg_proxy_client_fail}
  */
  readonly msgProxyClientFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_client_fail_parse DataThunderSlbSipOper#msg_proxy_client_fail_parse}
  */
  readonly msgProxyClientFailParse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_client_fail_process DataThunderSlbSipOper#msg_proxy_client_fail_process}
  */
  readonly msgProxyClientFailProcess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_client_fail_send_pkt DataThunderSlbSipOper#msg_proxy_client_fail_send_pkt}
  */
  readonly msgProxyClientFailSendPkt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_client_fail_snat DataThunderSlbSipOper#msg_proxy_client_fail_snat}
  */
  readonly msgProxyClientFailSnat?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_client_fail_start_server_conn DataThunderSlbSipOper#msg_proxy_client_fail_start_server_conn}
  */
  readonly msgProxyClientFailStartServerConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_client_incomplete DataThunderSlbSipOper#msg_proxy_client_incomplete}
  */
  readonly msgProxyClientIncomplete?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_client_recv DataThunderSlbSipOper#msg_proxy_client_recv}
  */
  readonly msgProxyClientRecv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_client_reset DataThunderSlbSipOper#msg_proxy_client_reset}
  */
  readonly msgProxyClientReset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_client_send_success DataThunderSlbSipOper#msg_proxy_client_send_success}
  */
  readonly msgProxyClientSendSuccess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_create_server_conn DataThunderSlbSipOper#msg_proxy_create_server_conn}
  */
  readonly msgProxyCreateServerConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_current DataThunderSlbSipOper#msg_proxy_current}
  */
  readonly msgProxyCurrent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_deprecated_conn DataThunderSlbSipOper#msg_proxy_deprecated_conn}
  */
  readonly msgProxyDeprecatedConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_fail_alloc_mem DataThunderSlbSipOper#msg_proxy_fail_alloc_mem}
  */
  readonly msgProxyFailAllocMem?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_fail_construct_server_conn DataThunderSlbSipOper#msg_proxy_fail_construct_server_conn}
  */
  readonly msgProxyFailConstructServerConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_fail_dcmsg DataThunderSlbSipOper#msg_proxy_fail_dcmsg}
  */
  readonly msgProxyFailDcmsg?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_fail_insert_server_conn DataThunderSlbSipOper#msg_proxy_fail_insert_server_conn}
  */
  readonly msgProxyFailInsertServerConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_fail_reserve_pconn DataThunderSlbSipOper#msg_proxy_fail_reserve_pconn}
  */
  readonly msgProxyFailReservePconn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_fail_select_server DataThunderSlbSipOper#msg_proxy_fail_select_server}
  */
  readonly msgProxyFailSelectServer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_fail_start_server_conn DataThunderSlbSipOper#msg_proxy_fail_start_server_conn}
  */
  readonly msgProxyFailStartServerConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_hold_msg DataThunderSlbSipOper#msg_proxy_hold_msg}
  */
  readonly msgProxyHoldMsg?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_l4_from_l4_send DataThunderSlbSipOper#msg_proxy_l4_from_l4_send}
  */
  readonly msgProxyL4FromL4Send?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_l4_from_l7 DataThunderSlbSipOper#msg_proxy_l4_from_l7}
  */
  readonly msgProxyL4FromL7?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_l4_to_l7 DataThunderSlbSipOper#msg_proxy_l4_to_l7}
  */
  readonly msgProxyL4ToL7?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_l7_cpu_failed DataThunderSlbSipOper#msg_proxy_l7_cpu_failed}
  */
  readonly msgProxyL7CpuFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_l7_to_l4 DataThunderSlbSipOper#msg_proxy_l7_to_l4}
  */
  readonly msgProxyL7ToL4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_mag_back DataThunderSlbSipOper#msg_proxy_mag_back}
  */
  readonly msgProxyMagBack?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_mem_allocd DataThunderSlbSipOper#msg_proxy_mem_allocd}
  */
  readonly msgProxyMemAllocd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_mem_cached DataThunderSlbSipOper#msg_proxy_mem_cached}
  */
  readonly msgProxyMemCached?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_mem_freed DataThunderSlbSipOper#msg_proxy_mem_freed}
  */
  readonly msgProxyMemFreed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_no_vport DataThunderSlbSipOper#msg_proxy_no_vport}
  */
  readonly msgProxyNoVport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_parse_msg_fail DataThunderSlbSipOper#msg_proxy_parse_msg_fail}
  */
  readonly msgProxyParseMsgFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_pipline_msg DataThunderSlbSipOper#msg_proxy_pipline_msg}
  */
  readonly msgProxyPiplineMsg?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_process_msg_fail DataThunderSlbSipOper#msg_proxy_process_msg_fail}
  */
  readonly msgProxyProcessMsgFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_server_conn_already_exists DataThunderSlbSipOper#msg_proxy_server_conn_already_exists}
  */
  readonly msgProxyServerConnAlreadyExists?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_server_conn_fail_snat DataThunderSlbSipOper#msg_proxy_server_conn_fail_snat}
  */
  readonly msgProxyServerConnFailSnat?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_server_drop DataThunderSlbSipOper#msg_proxy_server_drop}
  */
  readonly msgProxyServerDrop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_server_exceed_tmp_buff DataThunderSlbSipOper#msg_proxy_server_exceed_tmp_buff}
  */
  readonly msgProxyServerExceedTmpBuff?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_server_fail DataThunderSlbSipOper#msg_proxy_server_fail}
  */
  readonly msgProxyServerFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_server_fail_parse DataThunderSlbSipOper#msg_proxy_server_fail_parse}
  */
  readonly msgProxyServerFailParse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_server_fail_process DataThunderSlbSipOper#msg_proxy_server_fail_process}
  */
  readonly msgProxyServerFailProcess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_server_fail_selec_connt DataThunderSlbSipOper#msg_proxy_server_fail_selec_connt}
  */
  readonly msgProxyServerFailSelecConnt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_server_fail_send_pkt DataThunderSlbSipOper#msg_proxy_server_fail_send_pkt}
  */
  readonly msgProxyServerFailSendPkt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_server_fail_snat DataThunderSlbSipOper#msg_proxy_server_fail_snat}
  */
  readonly msgProxyServerFailSnat?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_server_incomplete DataThunderSlbSipOper#msg_proxy_server_incomplete}
  */
  readonly msgProxyServerIncomplete?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_server_recv DataThunderSlbSipOper#msg_proxy_server_recv}
  */
  readonly msgProxyServerRecv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_server_reset DataThunderSlbSipOper#msg_proxy_server_reset}
  */
  readonly msgProxyServerReset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_server_send_success DataThunderSlbSipOper#msg_proxy_server_send_success}
  */
  readonly msgProxyServerSendSuccess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_split_pkt DataThunderSlbSipOper#msg_proxy_split_pkt}
  */
  readonly msgProxySplitPkt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_start_server_conn DataThunderSlbSipOper#msg_proxy_start_server_conn}
  */
  readonly msgProxyStartServerConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_start_server_conn_failed DataThunderSlbSipOper#msg_proxy_start_server_conn_failed}
  */
  readonly msgProxyStartServerConnFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_to_l4_send_pkt DataThunderSlbSipOper#msg_proxy_to_l4_send_pkt}
  */
  readonly msgProxyToL4SendPkt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_total DataThunderSlbSipOper#msg_proxy_total}
  */
  readonly msgProxyTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_proxy_unexpected_err DataThunderSlbSipOper#msg_proxy_unexpected_err}
  */
  readonly msgProxyUnexpectedErr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_trans_body DataThunderSlbSipOper#msg_trans_body}
  */
  readonly msgTransBody?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_trans_start_headers DataThunderSlbSipOper#msg_trans_start_headers}
  */
  readonly msgTransStartHeaders?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_trans_start_line DataThunderSlbSipOper#msg_trans_start_line}
  */
  readonly msgTransStartLine?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_translation DataThunderSlbSipOper#msg_translation}
  */
  readonly msgTranslation?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#msg_translation_fail DataThunderSlbSipOper#msg_translation_fail}
  */
  readonly msgTranslationFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#no_sip_request DataThunderSlbSipOper#no_sip_request}
  */
  readonly noSipRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#process_error_when_message_switch DataThunderSlbSipOper#process_error_when_message_switch}
  */
  readonly processErrorWhenMessageSwitch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#request_ack DataThunderSlbSipOper#request_ack}
  */
  readonly requestAck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#request_bye DataThunderSlbSipOper#request_bye}
  */
  readonly requestBye?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#request_cancel DataThunderSlbSipOper#request_cancel}
  */
  readonly requestCancel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#request_info DataThunderSlbSipOper#request_info}
  */
  readonly requestInfo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#request_invite DataThunderSlbSipOper#request_invite}
  */
  readonly requestInvite?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#request_message DataThunderSlbSipOper#request_message}
  */
  readonly requestMessage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#request_notify DataThunderSlbSipOper#request_notify}
  */
  readonly requestNotify?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#request_options DataThunderSlbSipOper#request_options}
  */
  readonly requestOptions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#request_prack DataThunderSlbSipOper#request_prack}
  */
  readonly requestPrack?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#request_publish DataThunderSlbSipOper#request_publish}
  */
  readonly requestPublish?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#request_refer DataThunderSlbSipOper#request_refer}
  */
  readonly requestRefer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#request_register DataThunderSlbSipOper#request_register}
  */
  readonly requestRegister?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#request_subscribe DataThunderSlbSipOper#request_subscribe}
  */
  readonly requestSubscribe?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#request_unknown DataThunderSlbSipOper#request_unknown}
  */
  readonly requestUnknown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#request_unknown_version DataThunderSlbSipOper#request_unknown_version}
  */
  readonly requestUnknownVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#request_update DataThunderSlbSipOper#request_update}
  */
  readonly requestUpdate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#response_1xx DataThunderSlbSipOper#response_1xx}
  */
  readonly response1Xx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#response_2xx DataThunderSlbSipOper#response_2xx}
  */
  readonly response2Xx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#response_3xx DataThunderSlbSipOper#response_3xx}
  */
  readonly response3Xx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#response_4xx DataThunderSlbSipOper#response_4xx}
  */
  readonly response4Xx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#response_5xx DataThunderSlbSipOper#response_5xx}
  */
  readonly response5Xx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#response_6xx DataThunderSlbSipOper#response_6xx}
  */
  readonly response6Xx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#response_unknown DataThunderSlbSipOper#response_unknown}
  */
  readonly responseUnknown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#response_unknown_version DataThunderSlbSipOper#response_unknown_version}
  */
  readonly responseUnknownVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#save_call_id DataThunderSlbSipOper#save_call_id}
  */
  readonly saveCallId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#save_call_id_ok DataThunderSlbSipOper#save_call_id_ok}
  */
  readonly saveCallIdOk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#save_smp_call_id_rtp DataThunderSlbSipOper#save_smp_call_id_rtp}
  */
  readonly saveSmpCallIdRtp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#save_uri DataThunderSlbSipOper#save_uri}
  */
  readonly saveUri?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#save_uri_ok DataThunderSlbSipOper#save_uri_ok}
  */
  readonly saveUriOk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#select_client_conn DataThunderSlbSipOper#select_client_conn}
  */
  readonly selectClientConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#select_server_conn DataThunderSlbSipOper#select_server_conn}
  */
  readonly selectServerConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#select_server_conn_by_callid DataThunderSlbSipOper#select_server_conn_by_callid}
  */
  readonly selectServerConnByCallid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#select_server_conn_by_rev_tuple DataThunderSlbSipOper#select_server_conn_by_rev_tuple}
  */
  readonly selectServerConnByRevTuple?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#select_server_conn_by_uri DataThunderSlbSipOper#select_server_conn_by_uri}
  */
  readonly selectServerConnByUri?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#select_server_conn_failed DataThunderSlbSipOper#select_server_conn_failed}
  */
  readonly selectServerConnFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#server_keepalive_received DataThunderSlbSipOper#server_keepalive_received}
  */
  readonly serverKeepaliveReceived?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#server_keepalive_send DataThunderSlbSipOper#server_keepalive_send}
  */
  readonly serverKeepaliveSend?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#session_callid_allocd DataThunderSlbSipOper#session_callid_allocd}
  */
  readonly sessionCallidAllocd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#session_callid_freed DataThunderSlbSipOper#session_callid_freed}
  */
  readonly sessionCallidFreed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#session_created DataThunderSlbSipOper#session_created}
  */
  readonly sessionCreated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#session_freed DataThunderSlbSipOper#session_freed}
  */
  readonly sessionFreed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#session_in_rml DataThunderSlbSipOper#session_in_rml}
  */
  readonly sessionInRml?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#session_invalid DataThunderSlbSipOper#session_invalid}
  */
  readonly sessionInvalid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#sg_no_uri_header DataThunderSlbSipOper#sg_no_uri_header}
  */
  readonly sgNoUriHeader?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#size_too_large DataThunderSlbSipOper#size_too_large}
  */
  readonly sizeTooLarge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#smp_call_id_rtp_session_match DataThunderSlbSipOper#smp_call_id_rtp_session_match}
  */
  readonly smpCallIdRtpSessionMatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#smp_call_id_rtp_session_not_match DataThunderSlbSipOper#smp_call_id_rtp_session_not_match}
  */
  readonly smpCallIdRtpSessionNotMatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#smsg_no_uri_session DataThunderSlbSipOper#smsg_no_uri_session}
  */
  readonly smsgNoUriSession?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#table_mem_allocd DataThunderSlbSipOper#table_mem_allocd}
  */
  readonly tableMemAllocd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#table_mem_freed DataThunderSlbSipOper#table_mem_freed}
  */
  readonly tableMemFreed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#too_many_headers DataThunderSlbSipOper#too_many_headers}
  */
  readonly tooManyHeaders?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#update_smp_call_id_rtp DataThunderSlbSipOper#update_smp_call_id_rtp}
  */
  readonly updateSmpCallIdRtp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#uri_select_client DataThunderSlbSipOper#uri_select_client}
  */
  readonly uriSelectClient?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#wrong_ip_version DataThunderSlbSipOper#wrong_ip_version}
  */
  readonly wrongIpVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#x_forward_for_select_client DataThunderSlbSipOper#x_forward_for_select_client}
  */
  readonly xForwardForSelectClient?: number;
}

export function dataThunderSlbSipOperOperSipCpuListStructToTerraform(struct?: DataThunderSlbSipOperOperSipCpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_denied: cdktf.numberToTerraform(struct!.aclDenied),
    assemble_frag_failed: cdktf.numberToTerraform(struct!.assembleFragFailed),
    ax_health_check_received: cdktf.numberToTerraform(struct!.axHealthCheckReceived),
    body_too_big: cdktf.numberToTerraform(struct!.bodyTooBig),
    call_id_select_client: cdktf.numberToTerraform(struct!.callIdSelectClient),
    client_keepalive_received: cdktf.numberToTerraform(struct!.clientKeepaliveReceived),
    client_keepalive_send: cdktf.numberToTerraform(struct!.clientKeepaliveSend),
    client_request: cdktf.numberToTerraform(struct!.clientRequest),
    client_request_ok: cdktf.numberToTerraform(struct!.clientRequestOk),
    client_select_failed: cdktf.numberToTerraform(struct!.clientSelectFailed),
    cmsg_no_uri_header: cdktf.numberToTerraform(struct!.cmsgNoUriHeader),
    cmsg_no_uri_session: cdktf.numberToTerraform(struct!.cmsgNoUriSession),
    concatenate_msg: cdktf.numberToTerraform(struct!.concatenateMsg),
    conn_allocd: cdktf.numberToTerraform(struct!.connAllocd),
    conn_freed: cdktf.numberToTerraform(struct!.connFreed),
    deprecated_msg: cdktf.numberToTerraform(struct!.deprecatedMsg),
    fail_get_counter: cdktf.numberToTerraform(struct!.failGetCounter),
    fail_insert_callid_session: cdktf.numberToTerraform(struct!.failInsertCallidSession),
    fail_insert_header: cdktf.numberToTerraform(struct!.failInsertHeader),
    fail_insert_uri_session: cdktf.numberToTerraform(struct!.failInsertUriSession),
    fail_parse_headers: cdktf.numberToTerraform(struct!.failParseHeaders),
    fail_parse_start_line: cdktf.numberToTerraform(struct!.failParseStartLine),
    fail_read_start_line: cdktf.numberToTerraform(struct!.failReadStartLine),
    fail_split_fragment: cdktf.numberToTerraform(struct!.failSplitFragment),
    ha_fail_alloc_call_id: cdktf.numberToTerraform(struct!.haFailAllocCallId),
    ha_fail_alloc_sip_session: cdktf.numberToTerraform(struct!.haFailAllocSipSession),
    ha_fail_clone_sip_session: cdktf.numberToTerraform(struct!.haFailCloneSipSession),
    ha_fail_get_msg_header: cdktf.numberToTerraform(struct!.haFailGetMsgHeader),
    ha_insert_sip_session_ok: cdktf.numberToTerraform(struct!.haInsertSipSessionOk),
    ha_invalid_pkt: cdktf.numberToTerraform(struct!.haInvalidPkt),
    ha_recv_sip_session: cdktf.numberToTerraform(struct!.haRecvSipSession),
    ha_send_sip_session: cdktf.numberToTerraform(struct!.haSendSipSession),
    ha_send_sip_session_ok: cdktf.numberToTerraform(struct!.haSendSipSessionOk),
    ha_update_sip_session_ok: cdktf.numberToTerraform(struct!.haUpdateSipSessionOk),
    header_name_too_long: cdktf.numberToTerraform(struct!.headerNameTooLong),
    identify_dir_failed: cdktf.numberToTerraform(struct!.identifyDirFailed),
    invalid_header: cdktf.numberToTerraform(struct!.invalidHeader),
    invalid_start_line: cdktf.numberToTerraform(struct!.invalidStartLine),
    line_mem_allocd: cdktf.numberToTerraform(struct!.lineMemAllocd),
    line_mem_freed: cdktf.numberToTerraform(struct!.lineMemFreed),
    line_too_long: cdktf.numberToTerraform(struct!.lineTooLong),
    msg_no_call_id: cdktf.numberToTerraform(struct!.msgNoCallId),
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
    msg_trans_body: cdktf.numberToTerraform(struct!.msgTransBody),
    msg_trans_start_headers: cdktf.numberToTerraform(struct!.msgTransStartHeaders),
    msg_trans_start_line: cdktf.numberToTerraform(struct!.msgTransStartLine),
    msg_translation: cdktf.numberToTerraform(struct!.msgTranslation),
    msg_translation_fail: cdktf.numberToTerraform(struct!.msgTranslationFail),
    no_sip_request: cdktf.numberToTerraform(struct!.noSipRequest),
    process_error_when_message_switch: cdktf.numberToTerraform(struct!.processErrorWhenMessageSwitch),
    request_ack: cdktf.numberToTerraform(struct!.requestAck),
    request_bye: cdktf.numberToTerraform(struct!.requestBye),
    request_cancel: cdktf.numberToTerraform(struct!.requestCancel),
    request_info: cdktf.numberToTerraform(struct!.requestInfo),
    request_invite: cdktf.numberToTerraform(struct!.requestInvite),
    request_message: cdktf.numberToTerraform(struct!.requestMessage),
    request_notify: cdktf.numberToTerraform(struct!.requestNotify),
    request_options: cdktf.numberToTerraform(struct!.requestOptions),
    request_prack: cdktf.numberToTerraform(struct!.requestPrack),
    request_publish: cdktf.numberToTerraform(struct!.requestPublish),
    request_refer: cdktf.numberToTerraform(struct!.requestRefer),
    request_register: cdktf.numberToTerraform(struct!.requestRegister),
    request_subscribe: cdktf.numberToTerraform(struct!.requestSubscribe),
    request_unknown: cdktf.numberToTerraform(struct!.requestUnknown),
    request_unknown_version: cdktf.numberToTerraform(struct!.requestUnknownVersion),
    request_update: cdktf.numberToTerraform(struct!.requestUpdate),
    response_1xx: cdktf.numberToTerraform(struct!.response1Xx),
    response_2xx: cdktf.numberToTerraform(struct!.response2Xx),
    response_3xx: cdktf.numberToTerraform(struct!.response3Xx),
    response_4xx: cdktf.numberToTerraform(struct!.response4Xx),
    response_5xx: cdktf.numberToTerraform(struct!.response5Xx),
    response_6xx: cdktf.numberToTerraform(struct!.response6Xx),
    response_unknown: cdktf.numberToTerraform(struct!.responseUnknown),
    response_unknown_version: cdktf.numberToTerraform(struct!.responseUnknownVersion),
    save_call_id: cdktf.numberToTerraform(struct!.saveCallId),
    save_call_id_ok: cdktf.numberToTerraform(struct!.saveCallIdOk),
    save_smp_call_id_rtp: cdktf.numberToTerraform(struct!.saveSmpCallIdRtp),
    save_uri: cdktf.numberToTerraform(struct!.saveUri),
    save_uri_ok: cdktf.numberToTerraform(struct!.saveUriOk),
    select_client_conn: cdktf.numberToTerraform(struct!.selectClientConn),
    select_server_conn: cdktf.numberToTerraform(struct!.selectServerConn),
    select_server_conn_by_callid: cdktf.numberToTerraform(struct!.selectServerConnByCallid),
    select_server_conn_by_rev_tuple: cdktf.numberToTerraform(struct!.selectServerConnByRevTuple),
    select_server_conn_by_uri: cdktf.numberToTerraform(struct!.selectServerConnByUri),
    select_server_conn_failed: cdktf.numberToTerraform(struct!.selectServerConnFailed),
    server_keepalive_received: cdktf.numberToTerraform(struct!.serverKeepaliveReceived),
    server_keepalive_send: cdktf.numberToTerraform(struct!.serverKeepaliveSend),
    session_callid_allocd: cdktf.numberToTerraform(struct!.sessionCallidAllocd),
    session_callid_freed: cdktf.numberToTerraform(struct!.sessionCallidFreed),
    session_created: cdktf.numberToTerraform(struct!.sessionCreated),
    session_freed: cdktf.numberToTerraform(struct!.sessionFreed),
    session_in_rml: cdktf.numberToTerraform(struct!.sessionInRml),
    session_invalid: cdktf.numberToTerraform(struct!.sessionInvalid),
    sg_no_uri_header: cdktf.numberToTerraform(struct!.sgNoUriHeader),
    size_too_large: cdktf.numberToTerraform(struct!.sizeTooLarge),
    smp_call_id_rtp_session_match: cdktf.numberToTerraform(struct!.smpCallIdRtpSessionMatch),
    smp_call_id_rtp_session_not_match: cdktf.numberToTerraform(struct!.smpCallIdRtpSessionNotMatch),
    smsg_no_uri_session: cdktf.numberToTerraform(struct!.smsgNoUriSession),
    table_mem_allocd: cdktf.numberToTerraform(struct!.tableMemAllocd),
    table_mem_freed: cdktf.numberToTerraform(struct!.tableMemFreed),
    too_many_headers: cdktf.numberToTerraform(struct!.tooManyHeaders),
    update_smp_call_id_rtp: cdktf.numberToTerraform(struct!.updateSmpCallIdRtp),
    uri_select_client: cdktf.numberToTerraform(struct!.uriSelectClient),
    wrong_ip_version: cdktf.numberToTerraform(struct!.wrongIpVersion),
    x_forward_for_select_client: cdktf.numberToTerraform(struct!.xForwardForSelectClient),
  }
}


export function dataThunderSlbSipOperOperSipCpuListStructToHclTerraform(struct?: DataThunderSlbSipOperOperSipCpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_denied: {
      value: cdktf.numberToHclTerraform(struct!.aclDenied),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    assemble_frag_failed: {
      value: cdktf.numberToHclTerraform(struct!.assembleFragFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ax_health_check_received: {
      value: cdktf.numberToHclTerraform(struct!.axHealthCheckReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    body_too_big: {
      value: cdktf.numberToHclTerraform(struct!.bodyTooBig),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    call_id_select_client: {
      value: cdktf.numberToHclTerraform(struct!.callIdSelectClient),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_keepalive_received: {
      value: cdktf.numberToHclTerraform(struct!.clientKeepaliveReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_keepalive_send: {
      value: cdktf.numberToHclTerraform(struct!.clientKeepaliveSend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_request: {
      value: cdktf.numberToHclTerraform(struct!.clientRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_request_ok: {
      value: cdktf.numberToHclTerraform(struct!.clientRequestOk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_select_failed: {
      value: cdktf.numberToHclTerraform(struct!.clientSelectFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cmsg_no_uri_header: {
      value: cdktf.numberToHclTerraform(struct!.cmsgNoUriHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cmsg_no_uri_session: {
      value: cdktf.numberToHclTerraform(struct!.cmsgNoUriSession),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    concatenate_msg: {
      value: cdktf.numberToHclTerraform(struct!.concatenateMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_allocd: {
      value: cdktf.numberToHclTerraform(struct!.connAllocd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_freed: {
      value: cdktf.numberToHclTerraform(struct!.connFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deprecated_msg: {
      value: cdktf.numberToHclTerraform(struct!.deprecatedMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail_get_counter: {
      value: cdktf.numberToHclTerraform(struct!.failGetCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail_insert_callid_session: {
      value: cdktf.numberToHclTerraform(struct!.failInsertCallidSession),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail_insert_header: {
      value: cdktf.numberToHclTerraform(struct!.failInsertHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail_insert_uri_session: {
      value: cdktf.numberToHclTerraform(struct!.failInsertUriSession),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail_parse_headers: {
      value: cdktf.numberToHclTerraform(struct!.failParseHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail_parse_start_line: {
      value: cdktf.numberToHclTerraform(struct!.failParseStartLine),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail_read_start_line: {
      value: cdktf.numberToHclTerraform(struct!.failReadStartLine),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail_split_fragment: {
      value: cdktf.numberToHclTerraform(struct!.failSplitFragment),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_fail_alloc_call_id: {
      value: cdktf.numberToHclTerraform(struct!.haFailAllocCallId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_fail_alloc_sip_session: {
      value: cdktf.numberToHclTerraform(struct!.haFailAllocSipSession),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_fail_clone_sip_session: {
      value: cdktf.numberToHclTerraform(struct!.haFailCloneSipSession),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_fail_get_msg_header: {
      value: cdktf.numberToHclTerraform(struct!.haFailGetMsgHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_insert_sip_session_ok: {
      value: cdktf.numberToHclTerraform(struct!.haInsertSipSessionOk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_invalid_pkt: {
      value: cdktf.numberToHclTerraform(struct!.haInvalidPkt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_recv_sip_session: {
      value: cdktf.numberToHclTerraform(struct!.haRecvSipSession),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_send_sip_session: {
      value: cdktf.numberToHclTerraform(struct!.haSendSipSession),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_send_sip_session_ok: {
      value: cdktf.numberToHclTerraform(struct!.haSendSipSessionOk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_update_sip_session_ok: {
      value: cdktf.numberToHclTerraform(struct!.haUpdateSipSessionOk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_name_too_long: {
      value: cdktf.numberToHclTerraform(struct!.headerNameTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    identify_dir_failed: {
      value: cdktf.numberToHclTerraform(struct!.identifyDirFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_header: {
      value: cdktf.numberToHclTerraform(struct!.invalidHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_start_line: {
      value: cdktf.numberToHclTerraform(struct!.invalidStartLine),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_mem_allocd: {
      value: cdktf.numberToHclTerraform(struct!.lineMemAllocd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_mem_freed: {
      value: cdktf.numberToHclTerraform(struct!.lineMemFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_too_long: {
      value: cdktf.numberToHclTerraform(struct!.lineTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_no_call_id: {
      value: cdktf.numberToHclTerraform(struct!.msgNoCallId),
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
    msg_trans_body: {
      value: cdktf.numberToHclTerraform(struct!.msgTransBody),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_trans_start_headers: {
      value: cdktf.numberToHclTerraform(struct!.msgTransStartHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_trans_start_line: {
      value: cdktf.numberToHclTerraform(struct!.msgTransStartLine),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_translation: {
      value: cdktf.numberToHclTerraform(struct!.msgTranslation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    msg_translation_fail: {
      value: cdktf.numberToHclTerraform(struct!.msgTranslationFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_sip_request: {
      value: cdktf.numberToHclTerraform(struct!.noSipRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    process_error_when_message_switch: {
      value: cdktf.numberToHclTerraform(struct!.processErrorWhenMessageSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_ack: {
      value: cdktf.numberToHclTerraform(struct!.requestAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_bye: {
      value: cdktf.numberToHclTerraform(struct!.requestBye),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_cancel: {
      value: cdktf.numberToHclTerraform(struct!.requestCancel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_info: {
      value: cdktf.numberToHclTerraform(struct!.requestInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_invite: {
      value: cdktf.numberToHclTerraform(struct!.requestInvite),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_message: {
      value: cdktf.numberToHclTerraform(struct!.requestMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_notify: {
      value: cdktf.numberToHclTerraform(struct!.requestNotify),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_options: {
      value: cdktf.numberToHclTerraform(struct!.requestOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_prack: {
      value: cdktf.numberToHclTerraform(struct!.requestPrack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_publish: {
      value: cdktf.numberToHclTerraform(struct!.requestPublish),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_refer: {
      value: cdktf.numberToHclTerraform(struct!.requestRefer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_register: {
      value: cdktf.numberToHclTerraform(struct!.requestRegister),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_subscribe: {
      value: cdktf.numberToHclTerraform(struct!.requestSubscribe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_unknown: {
      value: cdktf.numberToHclTerraform(struct!.requestUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_unknown_version: {
      value: cdktf.numberToHclTerraform(struct!.requestUnknownVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_update: {
      value: cdktf.numberToHclTerraform(struct!.requestUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_1xx: {
      value: cdktf.numberToHclTerraform(struct!.response1Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_2xx: {
      value: cdktf.numberToHclTerraform(struct!.response2Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_3xx: {
      value: cdktf.numberToHclTerraform(struct!.response3Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_4xx: {
      value: cdktf.numberToHclTerraform(struct!.response4Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_5xx: {
      value: cdktf.numberToHclTerraform(struct!.response5Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_6xx: {
      value: cdktf.numberToHclTerraform(struct!.response6Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_unknown: {
      value: cdktf.numberToHclTerraform(struct!.responseUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_unknown_version: {
      value: cdktf.numberToHclTerraform(struct!.responseUnknownVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    save_call_id: {
      value: cdktf.numberToHclTerraform(struct!.saveCallId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    save_call_id_ok: {
      value: cdktf.numberToHclTerraform(struct!.saveCallIdOk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    save_smp_call_id_rtp: {
      value: cdktf.numberToHclTerraform(struct!.saveSmpCallIdRtp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    save_uri: {
      value: cdktf.numberToHclTerraform(struct!.saveUri),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    save_uri_ok: {
      value: cdktf.numberToHclTerraform(struct!.saveUriOk),
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
    select_server_conn: {
      value: cdktf.numberToHclTerraform(struct!.selectServerConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    select_server_conn_by_callid: {
      value: cdktf.numberToHclTerraform(struct!.selectServerConnByCallid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    select_server_conn_by_rev_tuple: {
      value: cdktf.numberToHclTerraform(struct!.selectServerConnByRevTuple),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    select_server_conn_by_uri: {
      value: cdktf.numberToHclTerraform(struct!.selectServerConnByUri),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    select_server_conn_failed: {
      value: cdktf.numberToHclTerraform(struct!.selectServerConnFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_keepalive_received: {
      value: cdktf.numberToHclTerraform(struct!.serverKeepaliveReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_keepalive_send: {
      value: cdktf.numberToHclTerraform(struct!.serverKeepaliveSend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_callid_allocd: {
      value: cdktf.numberToHclTerraform(struct!.sessionCallidAllocd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_callid_freed: {
      value: cdktf.numberToHclTerraform(struct!.sessionCallidFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_created: {
      value: cdktf.numberToHclTerraform(struct!.sessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_freed: {
      value: cdktf.numberToHclTerraform(struct!.sessionFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_in_rml: {
      value: cdktf.numberToHclTerraform(struct!.sessionInRml),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_invalid: {
      value: cdktf.numberToHclTerraform(struct!.sessionInvalid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sg_no_uri_header: {
      value: cdktf.numberToHclTerraform(struct!.sgNoUriHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    size_too_large: {
      value: cdktf.numberToHclTerraform(struct!.sizeTooLarge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smp_call_id_rtp_session_match: {
      value: cdktf.numberToHclTerraform(struct!.smpCallIdRtpSessionMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smp_call_id_rtp_session_not_match: {
      value: cdktf.numberToHclTerraform(struct!.smpCallIdRtpSessionNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smsg_no_uri_session: {
      value: cdktf.numberToHclTerraform(struct!.smsgNoUriSession),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    table_mem_allocd: {
      value: cdktf.numberToHclTerraform(struct!.tableMemAllocd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    table_mem_freed: {
      value: cdktf.numberToHclTerraform(struct!.tableMemFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    too_many_headers: {
      value: cdktf.numberToHclTerraform(struct!.tooManyHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    update_smp_call_id_rtp: {
      value: cdktf.numberToHclTerraform(struct!.updateSmpCallIdRtp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uri_select_client: {
      value: cdktf.numberToHclTerraform(struct!.uriSelectClient),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wrong_ip_version: {
      value: cdktf.numberToHclTerraform(struct!.wrongIpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    x_forward_for_select_client: {
      value: cdktf.numberToHclTerraform(struct!.xForwardForSelectClient),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSipOperOperSipCpuListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbSipOperOperSipCpuListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclDenied !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclDenied = this._aclDenied;
    }
    if (this._assembleFragFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.assembleFragFailed = this._assembleFragFailed;
    }
    if (this._axHealthCheckReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.axHealthCheckReceived = this._axHealthCheckReceived;
    }
    if (this._bodyTooBig !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyTooBig = this._bodyTooBig;
    }
    if (this._callIdSelectClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.callIdSelectClient = this._callIdSelectClient;
    }
    if (this._clientKeepaliveReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKeepaliveReceived = this._clientKeepaliveReceived;
    }
    if (this._clientKeepaliveSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientKeepaliveSend = this._clientKeepaliveSend;
    }
    if (this._clientRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRequest = this._clientRequest;
    }
    if (this._clientRequestOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRequestOk = this._clientRequestOk;
    }
    if (this._clientSelectFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSelectFailed = this._clientSelectFailed;
    }
    if (this._cmsgNoUriHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmsgNoUriHeader = this._cmsgNoUriHeader;
    }
    if (this._cmsgNoUriSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.cmsgNoUriSession = this._cmsgNoUriSession;
    }
    if (this._concatenateMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.concatenateMsg = this._concatenateMsg;
    }
    if (this._connAllocd !== undefined) {
      hasAnyValues = true;
      internalValueResult.connAllocd = this._connAllocd;
    }
    if (this._connFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.connFreed = this._connFreed;
    }
    if (this._deprecatedMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.deprecatedMsg = this._deprecatedMsg;
    }
    if (this._failGetCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.failGetCounter = this._failGetCounter;
    }
    if (this._failInsertCallidSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.failInsertCallidSession = this._failInsertCallidSession;
    }
    if (this._failInsertHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.failInsertHeader = this._failInsertHeader;
    }
    if (this._failInsertUriSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.failInsertUriSession = this._failInsertUriSession;
    }
    if (this._failParseHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.failParseHeaders = this._failParseHeaders;
    }
    if (this._failParseStartLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.failParseStartLine = this._failParseStartLine;
    }
    if (this._failReadStartLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.failReadStartLine = this._failReadStartLine;
    }
    if (this._failSplitFragment !== undefined) {
      hasAnyValues = true;
      internalValueResult.failSplitFragment = this._failSplitFragment;
    }
    if (this._haFailAllocCallId !== undefined) {
      hasAnyValues = true;
      internalValueResult.haFailAllocCallId = this._haFailAllocCallId;
    }
    if (this._haFailAllocSipSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.haFailAllocSipSession = this._haFailAllocSipSession;
    }
    if (this._haFailCloneSipSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.haFailCloneSipSession = this._haFailCloneSipSession;
    }
    if (this._haFailGetMsgHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.haFailGetMsgHeader = this._haFailGetMsgHeader;
    }
    if (this._haInsertSipSessionOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.haInsertSipSessionOk = this._haInsertSipSessionOk;
    }
    if (this._haInvalidPkt !== undefined) {
      hasAnyValues = true;
      internalValueResult.haInvalidPkt = this._haInvalidPkt;
    }
    if (this._haRecvSipSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.haRecvSipSession = this._haRecvSipSession;
    }
    if (this._haSendSipSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.haSendSipSession = this._haSendSipSession;
    }
    if (this._haSendSipSessionOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.haSendSipSessionOk = this._haSendSipSessionOk;
    }
    if (this._haUpdateSipSessionOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.haUpdateSipSessionOk = this._haUpdateSipSessionOk;
    }
    if (this._headerNameTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerNameTooLong = this._headerNameTooLong;
    }
    if (this._identifyDirFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifyDirFailed = this._identifyDirFailed;
    }
    if (this._invalidHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidHeader = this._invalidHeader;
    }
    if (this._invalidStartLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidStartLine = this._invalidStartLine;
    }
    if (this._lineMemAllocd !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineMemAllocd = this._lineMemAllocd;
    }
    if (this._lineMemFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineMemFreed = this._lineMemFreed;
    }
    if (this._lineTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineTooLong = this._lineTooLong;
    }
    if (this._msgNoCallId !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgNoCallId = this._msgNoCallId;
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
    if (this._msgTransBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgTransBody = this._msgTransBody;
    }
    if (this._msgTransStartHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgTransStartHeaders = this._msgTransStartHeaders;
    }
    if (this._msgTransStartLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgTransStartLine = this._msgTransStartLine;
    }
    if (this._msgTranslation !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgTranslation = this._msgTranslation;
    }
    if (this._msgTranslationFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.msgTranslationFail = this._msgTranslationFail;
    }
    if (this._noSipRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSipRequest = this._noSipRequest;
    }
    if (this._processErrorWhenMessageSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.processErrorWhenMessageSwitch = this._processErrorWhenMessageSwitch;
    }
    if (this._requestAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestAck = this._requestAck;
    }
    if (this._requestBye !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestBye = this._requestBye;
    }
    if (this._requestCancel !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCancel = this._requestCancel;
    }
    if (this._requestInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestInfo = this._requestInfo;
    }
    if (this._requestInvite !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestInvite = this._requestInvite;
    }
    if (this._requestMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMessage = this._requestMessage;
    }
    if (this._requestNotify !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestNotify = this._requestNotify;
    }
    if (this._requestOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestOptions = this._requestOptions;
    }
    if (this._requestPrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPrack = this._requestPrack;
    }
    if (this._requestPublish !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestPublish = this._requestPublish;
    }
    if (this._requestRefer !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestRefer = this._requestRefer;
    }
    if (this._requestRegister !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestRegister = this._requestRegister;
    }
    if (this._requestSubscribe !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestSubscribe = this._requestSubscribe;
    }
    if (this._requestUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestUnknown = this._requestUnknown;
    }
    if (this._requestUnknownVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestUnknownVersion = this._requestUnknownVersion;
    }
    if (this._requestUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestUpdate = this._requestUpdate;
    }
    if (this._response1Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.response1Xx = this._response1Xx;
    }
    if (this._response2Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.response2Xx = this._response2Xx;
    }
    if (this._response3Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.response3Xx = this._response3Xx;
    }
    if (this._response4Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.response4Xx = this._response4Xx;
    }
    if (this._response5Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.response5Xx = this._response5Xx;
    }
    if (this._response6Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.response6Xx = this._response6Xx;
    }
    if (this._responseUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseUnknown = this._responseUnknown;
    }
    if (this._responseUnknownVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseUnknownVersion = this._responseUnknownVersion;
    }
    if (this._saveCallId !== undefined) {
      hasAnyValues = true;
      internalValueResult.saveCallId = this._saveCallId;
    }
    if (this._saveCallIdOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.saveCallIdOk = this._saveCallIdOk;
    }
    if (this._saveSmpCallIdRtp !== undefined) {
      hasAnyValues = true;
      internalValueResult.saveSmpCallIdRtp = this._saveSmpCallIdRtp;
    }
    if (this._saveUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.saveUri = this._saveUri;
    }
    if (this._saveUriOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.saveUriOk = this._saveUriOk;
    }
    if (this._selectClientConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectClientConn = this._selectClientConn;
    }
    if (this._selectServerConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectServerConn = this._selectServerConn;
    }
    if (this._selectServerConnByCallid !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectServerConnByCallid = this._selectServerConnByCallid;
    }
    if (this._selectServerConnByRevTuple !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectServerConnByRevTuple = this._selectServerConnByRevTuple;
    }
    if (this._selectServerConnByUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectServerConnByUri = this._selectServerConnByUri;
    }
    if (this._selectServerConnFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectServerConnFailed = this._selectServerConnFailed;
    }
    if (this._serverKeepaliveReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverKeepaliveReceived = this._serverKeepaliveReceived;
    }
    if (this._serverKeepaliveSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverKeepaliveSend = this._serverKeepaliveSend;
    }
    if (this._sessionCallidAllocd !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCallidAllocd = this._sessionCallidAllocd;
    }
    if (this._sessionCallidFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCallidFreed = this._sessionCallidFreed;
    }
    if (this._sessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionCreated = this._sessionCreated;
    }
    if (this._sessionFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionFreed = this._sessionFreed;
    }
    if (this._sessionInRml !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionInRml = this._sessionInRml;
    }
    if (this._sessionInvalid !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionInvalid = this._sessionInvalid;
    }
    if (this._sgNoUriHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.sgNoUriHeader = this._sgNoUriHeader;
    }
    if (this._sizeTooLarge !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeTooLarge = this._sizeTooLarge;
    }
    if (this._smpCallIdRtpSessionMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.smpCallIdRtpSessionMatch = this._smpCallIdRtpSessionMatch;
    }
    if (this._smpCallIdRtpSessionNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.smpCallIdRtpSessionNotMatch = this._smpCallIdRtpSessionNotMatch;
    }
    if (this._smsgNoUriSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsgNoUriSession = this._smsgNoUriSession;
    }
    if (this._tableMemAllocd !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableMemAllocd = this._tableMemAllocd;
    }
    if (this._tableMemFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.tableMemFreed = this._tableMemFreed;
    }
    if (this._tooManyHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooManyHeaders = this._tooManyHeaders;
    }
    if (this._updateSmpCallIdRtp !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateSmpCallIdRtp = this._updateSmpCallIdRtp;
    }
    if (this._uriSelectClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriSelectClient = this._uriSelectClient;
    }
    if (this._wrongIpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrongIpVersion = this._wrongIpVersion;
    }
    if (this._xForwardForSelectClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.xForwardForSelectClient = this._xForwardForSelectClient;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSipOperOperSipCpuListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aclDenied = undefined;
      this._assembleFragFailed = undefined;
      this._axHealthCheckReceived = undefined;
      this._bodyTooBig = undefined;
      this._callIdSelectClient = undefined;
      this._clientKeepaliveReceived = undefined;
      this._clientKeepaliveSend = undefined;
      this._clientRequest = undefined;
      this._clientRequestOk = undefined;
      this._clientSelectFailed = undefined;
      this._cmsgNoUriHeader = undefined;
      this._cmsgNoUriSession = undefined;
      this._concatenateMsg = undefined;
      this._connAllocd = undefined;
      this._connFreed = undefined;
      this._deprecatedMsg = undefined;
      this._failGetCounter = undefined;
      this._failInsertCallidSession = undefined;
      this._failInsertHeader = undefined;
      this._failInsertUriSession = undefined;
      this._failParseHeaders = undefined;
      this._failParseStartLine = undefined;
      this._failReadStartLine = undefined;
      this._failSplitFragment = undefined;
      this._haFailAllocCallId = undefined;
      this._haFailAllocSipSession = undefined;
      this._haFailCloneSipSession = undefined;
      this._haFailGetMsgHeader = undefined;
      this._haInsertSipSessionOk = undefined;
      this._haInvalidPkt = undefined;
      this._haRecvSipSession = undefined;
      this._haSendSipSession = undefined;
      this._haSendSipSessionOk = undefined;
      this._haUpdateSipSessionOk = undefined;
      this._headerNameTooLong = undefined;
      this._identifyDirFailed = undefined;
      this._invalidHeader = undefined;
      this._invalidStartLine = undefined;
      this._lineMemAllocd = undefined;
      this._lineMemFreed = undefined;
      this._lineTooLong = undefined;
      this._msgNoCallId = undefined;
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
      this._msgTransBody = undefined;
      this._msgTransStartHeaders = undefined;
      this._msgTransStartLine = undefined;
      this._msgTranslation = undefined;
      this._msgTranslationFail = undefined;
      this._noSipRequest = undefined;
      this._processErrorWhenMessageSwitch = undefined;
      this._requestAck = undefined;
      this._requestBye = undefined;
      this._requestCancel = undefined;
      this._requestInfo = undefined;
      this._requestInvite = undefined;
      this._requestMessage = undefined;
      this._requestNotify = undefined;
      this._requestOptions = undefined;
      this._requestPrack = undefined;
      this._requestPublish = undefined;
      this._requestRefer = undefined;
      this._requestRegister = undefined;
      this._requestSubscribe = undefined;
      this._requestUnknown = undefined;
      this._requestUnknownVersion = undefined;
      this._requestUpdate = undefined;
      this._response1Xx = undefined;
      this._response2Xx = undefined;
      this._response3Xx = undefined;
      this._response4Xx = undefined;
      this._response5Xx = undefined;
      this._response6Xx = undefined;
      this._responseUnknown = undefined;
      this._responseUnknownVersion = undefined;
      this._saveCallId = undefined;
      this._saveCallIdOk = undefined;
      this._saveSmpCallIdRtp = undefined;
      this._saveUri = undefined;
      this._saveUriOk = undefined;
      this._selectClientConn = undefined;
      this._selectServerConn = undefined;
      this._selectServerConnByCallid = undefined;
      this._selectServerConnByRevTuple = undefined;
      this._selectServerConnByUri = undefined;
      this._selectServerConnFailed = undefined;
      this._serverKeepaliveReceived = undefined;
      this._serverKeepaliveSend = undefined;
      this._sessionCallidAllocd = undefined;
      this._sessionCallidFreed = undefined;
      this._sessionCreated = undefined;
      this._sessionFreed = undefined;
      this._sessionInRml = undefined;
      this._sessionInvalid = undefined;
      this._sgNoUriHeader = undefined;
      this._sizeTooLarge = undefined;
      this._smpCallIdRtpSessionMatch = undefined;
      this._smpCallIdRtpSessionNotMatch = undefined;
      this._smsgNoUriSession = undefined;
      this._tableMemAllocd = undefined;
      this._tableMemFreed = undefined;
      this._tooManyHeaders = undefined;
      this._updateSmpCallIdRtp = undefined;
      this._uriSelectClient = undefined;
      this._wrongIpVersion = undefined;
      this._xForwardForSelectClient = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aclDenied = value.aclDenied;
      this._assembleFragFailed = value.assembleFragFailed;
      this._axHealthCheckReceived = value.axHealthCheckReceived;
      this._bodyTooBig = value.bodyTooBig;
      this._callIdSelectClient = value.callIdSelectClient;
      this._clientKeepaliveReceived = value.clientKeepaliveReceived;
      this._clientKeepaliveSend = value.clientKeepaliveSend;
      this._clientRequest = value.clientRequest;
      this._clientRequestOk = value.clientRequestOk;
      this._clientSelectFailed = value.clientSelectFailed;
      this._cmsgNoUriHeader = value.cmsgNoUriHeader;
      this._cmsgNoUriSession = value.cmsgNoUriSession;
      this._concatenateMsg = value.concatenateMsg;
      this._connAllocd = value.connAllocd;
      this._connFreed = value.connFreed;
      this._deprecatedMsg = value.deprecatedMsg;
      this._failGetCounter = value.failGetCounter;
      this._failInsertCallidSession = value.failInsertCallidSession;
      this._failInsertHeader = value.failInsertHeader;
      this._failInsertUriSession = value.failInsertUriSession;
      this._failParseHeaders = value.failParseHeaders;
      this._failParseStartLine = value.failParseStartLine;
      this._failReadStartLine = value.failReadStartLine;
      this._failSplitFragment = value.failSplitFragment;
      this._haFailAllocCallId = value.haFailAllocCallId;
      this._haFailAllocSipSession = value.haFailAllocSipSession;
      this._haFailCloneSipSession = value.haFailCloneSipSession;
      this._haFailGetMsgHeader = value.haFailGetMsgHeader;
      this._haInsertSipSessionOk = value.haInsertSipSessionOk;
      this._haInvalidPkt = value.haInvalidPkt;
      this._haRecvSipSession = value.haRecvSipSession;
      this._haSendSipSession = value.haSendSipSession;
      this._haSendSipSessionOk = value.haSendSipSessionOk;
      this._haUpdateSipSessionOk = value.haUpdateSipSessionOk;
      this._headerNameTooLong = value.headerNameTooLong;
      this._identifyDirFailed = value.identifyDirFailed;
      this._invalidHeader = value.invalidHeader;
      this._invalidStartLine = value.invalidStartLine;
      this._lineMemAllocd = value.lineMemAllocd;
      this._lineMemFreed = value.lineMemFreed;
      this._lineTooLong = value.lineTooLong;
      this._msgNoCallId = value.msgNoCallId;
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
      this._msgTransBody = value.msgTransBody;
      this._msgTransStartHeaders = value.msgTransStartHeaders;
      this._msgTransStartLine = value.msgTransStartLine;
      this._msgTranslation = value.msgTranslation;
      this._msgTranslationFail = value.msgTranslationFail;
      this._noSipRequest = value.noSipRequest;
      this._processErrorWhenMessageSwitch = value.processErrorWhenMessageSwitch;
      this._requestAck = value.requestAck;
      this._requestBye = value.requestBye;
      this._requestCancel = value.requestCancel;
      this._requestInfo = value.requestInfo;
      this._requestInvite = value.requestInvite;
      this._requestMessage = value.requestMessage;
      this._requestNotify = value.requestNotify;
      this._requestOptions = value.requestOptions;
      this._requestPrack = value.requestPrack;
      this._requestPublish = value.requestPublish;
      this._requestRefer = value.requestRefer;
      this._requestRegister = value.requestRegister;
      this._requestSubscribe = value.requestSubscribe;
      this._requestUnknown = value.requestUnknown;
      this._requestUnknownVersion = value.requestUnknownVersion;
      this._requestUpdate = value.requestUpdate;
      this._response1Xx = value.response1Xx;
      this._response2Xx = value.response2Xx;
      this._response3Xx = value.response3Xx;
      this._response4Xx = value.response4Xx;
      this._response5Xx = value.response5Xx;
      this._response6Xx = value.response6Xx;
      this._responseUnknown = value.responseUnknown;
      this._responseUnknownVersion = value.responseUnknownVersion;
      this._saveCallId = value.saveCallId;
      this._saveCallIdOk = value.saveCallIdOk;
      this._saveSmpCallIdRtp = value.saveSmpCallIdRtp;
      this._saveUri = value.saveUri;
      this._saveUriOk = value.saveUriOk;
      this._selectClientConn = value.selectClientConn;
      this._selectServerConn = value.selectServerConn;
      this._selectServerConnByCallid = value.selectServerConnByCallid;
      this._selectServerConnByRevTuple = value.selectServerConnByRevTuple;
      this._selectServerConnByUri = value.selectServerConnByUri;
      this._selectServerConnFailed = value.selectServerConnFailed;
      this._serverKeepaliveReceived = value.serverKeepaliveReceived;
      this._serverKeepaliveSend = value.serverKeepaliveSend;
      this._sessionCallidAllocd = value.sessionCallidAllocd;
      this._sessionCallidFreed = value.sessionCallidFreed;
      this._sessionCreated = value.sessionCreated;
      this._sessionFreed = value.sessionFreed;
      this._sessionInRml = value.sessionInRml;
      this._sessionInvalid = value.sessionInvalid;
      this._sgNoUriHeader = value.sgNoUriHeader;
      this._sizeTooLarge = value.sizeTooLarge;
      this._smpCallIdRtpSessionMatch = value.smpCallIdRtpSessionMatch;
      this._smpCallIdRtpSessionNotMatch = value.smpCallIdRtpSessionNotMatch;
      this._smsgNoUriSession = value.smsgNoUriSession;
      this._tableMemAllocd = value.tableMemAllocd;
      this._tableMemFreed = value.tableMemFreed;
      this._tooManyHeaders = value.tooManyHeaders;
      this._updateSmpCallIdRtp = value.updateSmpCallIdRtp;
      this._uriSelectClient = value.uriSelectClient;
      this._wrongIpVersion = value.wrongIpVersion;
      this._xForwardForSelectClient = value.xForwardForSelectClient;
    }
  }

  // acl_denied - computed: false, optional: true, required: false
  private _aclDenied?: number; 
  public get aclDenied() {
    return this.getNumberAttribute('acl_denied');
  }
  public set aclDenied(value: number) {
    this._aclDenied = value;
  }
  public resetAclDenied() {
    this._aclDenied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclDeniedInput() {
    return this._aclDenied;
  }

  // assemble_frag_failed - computed: false, optional: true, required: false
  private _assembleFragFailed?: number; 
  public get assembleFragFailed() {
    return this.getNumberAttribute('assemble_frag_failed');
  }
  public set assembleFragFailed(value: number) {
    this._assembleFragFailed = value;
  }
  public resetAssembleFragFailed() {
    this._assembleFragFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assembleFragFailedInput() {
    return this._assembleFragFailed;
  }

  // ax_health_check_received - computed: false, optional: true, required: false
  private _axHealthCheckReceived?: number; 
  public get axHealthCheckReceived() {
    return this.getNumberAttribute('ax_health_check_received');
  }
  public set axHealthCheckReceived(value: number) {
    this._axHealthCheckReceived = value;
  }
  public resetAxHealthCheckReceived() {
    this._axHealthCheckReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get axHealthCheckReceivedInput() {
    return this._axHealthCheckReceived;
  }

  // body_too_big - computed: false, optional: true, required: false
  private _bodyTooBig?: number; 
  public get bodyTooBig() {
    return this.getNumberAttribute('body_too_big');
  }
  public set bodyTooBig(value: number) {
    this._bodyTooBig = value;
  }
  public resetBodyTooBig() {
    this._bodyTooBig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyTooBigInput() {
    return this._bodyTooBig;
  }

  // call_id_select_client - computed: false, optional: true, required: false
  private _callIdSelectClient?: number; 
  public get callIdSelectClient() {
    return this.getNumberAttribute('call_id_select_client');
  }
  public set callIdSelectClient(value: number) {
    this._callIdSelectClient = value;
  }
  public resetCallIdSelectClient() {
    this._callIdSelectClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callIdSelectClientInput() {
    return this._callIdSelectClient;
  }

  // client_keepalive_received - computed: false, optional: true, required: false
  private _clientKeepaliveReceived?: number; 
  public get clientKeepaliveReceived() {
    return this.getNumberAttribute('client_keepalive_received');
  }
  public set clientKeepaliveReceived(value: number) {
    this._clientKeepaliveReceived = value;
  }
  public resetClientKeepaliveReceived() {
    this._clientKeepaliveReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeepaliveReceivedInput() {
    return this._clientKeepaliveReceived;
  }

  // client_keepalive_send - computed: false, optional: true, required: false
  private _clientKeepaliveSend?: number; 
  public get clientKeepaliveSend() {
    return this.getNumberAttribute('client_keepalive_send');
  }
  public set clientKeepaliveSend(value: number) {
    this._clientKeepaliveSend = value;
  }
  public resetClientKeepaliveSend() {
    this._clientKeepaliveSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientKeepaliveSendInput() {
    return this._clientKeepaliveSend;
  }

  // client_request - computed: false, optional: true, required: false
  private _clientRequest?: number; 
  public get clientRequest() {
    return this.getNumberAttribute('client_request');
  }
  public set clientRequest(value: number) {
    this._clientRequest = value;
  }
  public resetClientRequest() {
    this._clientRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRequestInput() {
    return this._clientRequest;
  }

  // client_request_ok - computed: false, optional: true, required: false
  private _clientRequestOk?: number; 
  public get clientRequestOk() {
    return this.getNumberAttribute('client_request_ok');
  }
  public set clientRequestOk(value: number) {
    this._clientRequestOk = value;
  }
  public resetClientRequestOk() {
    this._clientRequestOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRequestOkInput() {
    return this._clientRequestOk;
  }

  // client_select_failed - computed: false, optional: true, required: false
  private _clientSelectFailed?: number; 
  public get clientSelectFailed() {
    return this.getNumberAttribute('client_select_failed');
  }
  public set clientSelectFailed(value: number) {
    this._clientSelectFailed = value;
  }
  public resetClientSelectFailed() {
    this._clientSelectFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSelectFailedInput() {
    return this._clientSelectFailed;
  }

  // cmsg_no_uri_header - computed: false, optional: true, required: false
  private _cmsgNoUriHeader?: number; 
  public get cmsgNoUriHeader() {
    return this.getNumberAttribute('cmsg_no_uri_header');
  }
  public set cmsgNoUriHeader(value: number) {
    this._cmsgNoUriHeader = value;
  }
  public resetCmsgNoUriHeader() {
    this._cmsgNoUriHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmsgNoUriHeaderInput() {
    return this._cmsgNoUriHeader;
  }

  // cmsg_no_uri_session - computed: false, optional: true, required: false
  private _cmsgNoUriSession?: number; 
  public get cmsgNoUriSession() {
    return this.getNumberAttribute('cmsg_no_uri_session');
  }
  public set cmsgNoUriSession(value: number) {
    this._cmsgNoUriSession = value;
  }
  public resetCmsgNoUriSession() {
    this._cmsgNoUriSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmsgNoUriSessionInput() {
    return this._cmsgNoUriSession;
  }

  // concatenate_msg - computed: false, optional: true, required: false
  private _concatenateMsg?: number; 
  public get concatenateMsg() {
    return this.getNumberAttribute('concatenate_msg');
  }
  public set concatenateMsg(value: number) {
    this._concatenateMsg = value;
  }
  public resetConcatenateMsg() {
    this._concatenateMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get concatenateMsgInput() {
    return this._concatenateMsg;
  }

  // conn_allocd - computed: false, optional: true, required: false
  private _connAllocd?: number; 
  public get connAllocd() {
    return this.getNumberAttribute('conn_allocd');
  }
  public set connAllocd(value: number) {
    this._connAllocd = value;
  }
  public resetConnAllocd() {
    this._connAllocd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connAllocdInput() {
    return this._connAllocd;
  }

  // conn_freed - computed: false, optional: true, required: false
  private _connFreed?: number; 
  public get connFreed() {
    return this.getNumberAttribute('conn_freed');
  }
  public set connFreed(value: number) {
    this._connFreed = value;
  }
  public resetConnFreed() {
    this._connFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connFreedInput() {
    return this._connFreed;
  }

  // deprecated_msg - computed: false, optional: true, required: false
  private _deprecatedMsg?: number; 
  public get deprecatedMsg() {
    return this.getNumberAttribute('deprecated_msg');
  }
  public set deprecatedMsg(value: number) {
    this._deprecatedMsg = value;
  }
  public resetDeprecatedMsg() {
    this._deprecatedMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deprecatedMsgInput() {
    return this._deprecatedMsg;
  }

  // fail_get_counter - computed: false, optional: true, required: false
  private _failGetCounter?: number; 
  public get failGetCounter() {
    return this.getNumberAttribute('fail_get_counter');
  }
  public set failGetCounter(value: number) {
    this._failGetCounter = value;
  }
  public resetFailGetCounter() {
    this._failGetCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failGetCounterInput() {
    return this._failGetCounter;
  }

  // fail_insert_callid_session - computed: false, optional: true, required: false
  private _failInsertCallidSession?: number; 
  public get failInsertCallidSession() {
    return this.getNumberAttribute('fail_insert_callid_session');
  }
  public set failInsertCallidSession(value: number) {
    this._failInsertCallidSession = value;
  }
  public resetFailInsertCallidSession() {
    this._failInsertCallidSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failInsertCallidSessionInput() {
    return this._failInsertCallidSession;
  }

  // fail_insert_header - computed: false, optional: true, required: false
  private _failInsertHeader?: number; 
  public get failInsertHeader() {
    return this.getNumberAttribute('fail_insert_header');
  }
  public set failInsertHeader(value: number) {
    this._failInsertHeader = value;
  }
  public resetFailInsertHeader() {
    this._failInsertHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failInsertHeaderInput() {
    return this._failInsertHeader;
  }

  // fail_insert_uri_session - computed: false, optional: true, required: false
  private _failInsertUriSession?: number; 
  public get failInsertUriSession() {
    return this.getNumberAttribute('fail_insert_uri_session');
  }
  public set failInsertUriSession(value: number) {
    this._failInsertUriSession = value;
  }
  public resetFailInsertUriSession() {
    this._failInsertUriSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failInsertUriSessionInput() {
    return this._failInsertUriSession;
  }

  // fail_parse_headers - computed: false, optional: true, required: false
  private _failParseHeaders?: number; 
  public get failParseHeaders() {
    return this.getNumberAttribute('fail_parse_headers');
  }
  public set failParseHeaders(value: number) {
    this._failParseHeaders = value;
  }
  public resetFailParseHeaders() {
    this._failParseHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failParseHeadersInput() {
    return this._failParseHeaders;
  }

  // fail_parse_start_line - computed: false, optional: true, required: false
  private _failParseStartLine?: number; 
  public get failParseStartLine() {
    return this.getNumberAttribute('fail_parse_start_line');
  }
  public set failParseStartLine(value: number) {
    this._failParseStartLine = value;
  }
  public resetFailParseStartLine() {
    this._failParseStartLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failParseStartLineInput() {
    return this._failParseStartLine;
  }

  // fail_read_start_line - computed: false, optional: true, required: false
  private _failReadStartLine?: number; 
  public get failReadStartLine() {
    return this.getNumberAttribute('fail_read_start_line');
  }
  public set failReadStartLine(value: number) {
    this._failReadStartLine = value;
  }
  public resetFailReadStartLine() {
    this._failReadStartLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failReadStartLineInput() {
    return this._failReadStartLine;
  }

  // fail_split_fragment - computed: false, optional: true, required: false
  private _failSplitFragment?: number; 
  public get failSplitFragment() {
    return this.getNumberAttribute('fail_split_fragment');
  }
  public set failSplitFragment(value: number) {
    this._failSplitFragment = value;
  }
  public resetFailSplitFragment() {
    this._failSplitFragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failSplitFragmentInput() {
    return this._failSplitFragment;
  }

  // ha_fail_alloc_call_id - computed: false, optional: true, required: false
  private _haFailAllocCallId?: number; 
  public get haFailAllocCallId() {
    return this.getNumberAttribute('ha_fail_alloc_call_id');
  }
  public set haFailAllocCallId(value: number) {
    this._haFailAllocCallId = value;
  }
  public resetHaFailAllocCallId() {
    this._haFailAllocCallId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haFailAllocCallIdInput() {
    return this._haFailAllocCallId;
  }

  // ha_fail_alloc_sip_session - computed: false, optional: true, required: false
  private _haFailAllocSipSession?: number; 
  public get haFailAllocSipSession() {
    return this.getNumberAttribute('ha_fail_alloc_sip_session');
  }
  public set haFailAllocSipSession(value: number) {
    this._haFailAllocSipSession = value;
  }
  public resetHaFailAllocSipSession() {
    this._haFailAllocSipSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haFailAllocSipSessionInput() {
    return this._haFailAllocSipSession;
  }

  // ha_fail_clone_sip_session - computed: false, optional: true, required: false
  private _haFailCloneSipSession?: number; 
  public get haFailCloneSipSession() {
    return this.getNumberAttribute('ha_fail_clone_sip_session');
  }
  public set haFailCloneSipSession(value: number) {
    this._haFailCloneSipSession = value;
  }
  public resetHaFailCloneSipSession() {
    this._haFailCloneSipSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haFailCloneSipSessionInput() {
    return this._haFailCloneSipSession;
  }

  // ha_fail_get_msg_header - computed: false, optional: true, required: false
  private _haFailGetMsgHeader?: number; 
  public get haFailGetMsgHeader() {
    return this.getNumberAttribute('ha_fail_get_msg_header');
  }
  public set haFailGetMsgHeader(value: number) {
    this._haFailGetMsgHeader = value;
  }
  public resetHaFailGetMsgHeader() {
    this._haFailGetMsgHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haFailGetMsgHeaderInput() {
    return this._haFailGetMsgHeader;
  }

  // ha_insert_sip_session_ok - computed: false, optional: true, required: false
  private _haInsertSipSessionOk?: number; 
  public get haInsertSipSessionOk() {
    return this.getNumberAttribute('ha_insert_sip_session_ok');
  }
  public set haInsertSipSessionOk(value: number) {
    this._haInsertSipSessionOk = value;
  }
  public resetHaInsertSipSessionOk() {
    this._haInsertSipSessionOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haInsertSipSessionOkInput() {
    return this._haInsertSipSessionOk;
  }

  // ha_invalid_pkt - computed: false, optional: true, required: false
  private _haInvalidPkt?: number; 
  public get haInvalidPkt() {
    return this.getNumberAttribute('ha_invalid_pkt');
  }
  public set haInvalidPkt(value: number) {
    this._haInvalidPkt = value;
  }
  public resetHaInvalidPkt() {
    this._haInvalidPkt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haInvalidPktInput() {
    return this._haInvalidPkt;
  }

  // ha_recv_sip_session - computed: false, optional: true, required: false
  private _haRecvSipSession?: number; 
  public get haRecvSipSession() {
    return this.getNumberAttribute('ha_recv_sip_session');
  }
  public set haRecvSipSession(value: number) {
    this._haRecvSipSession = value;
  }
  public resetHaRecvSipSession() {
    this._haRecvSipSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haRecvSipSessionInput() {
    return this._haRecvSipSession;
  }

  // ha_send_sip_session - computed: false, optional: true, required: false
  private _haSendSipSession?: number; 
  public get haSendSipSession() {
    return this.getNumberAttribute('ha_send_sip_session');
  }
  public set haSendSipSession(value: number) {
    this._haSendSipSession = value;
  }
  public resetHaSendSipSession() {
    this._haSendSipSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haSendSipSessionInput() {
    return this._haSendSipSession;
  }

  // ha_send_sip_session_ok - computed: false, optional: true, required: false
  private _haSendSipSessionOk?: number; 
  public get haSendSipSessionOk() {
    return this.getNumberAttribute('ha_send_sip_session_ok');
  }
  public set haSendSipSessionOk(value: number) {
    this._haSendSipSessionOk = value;
  }
  public resetHaSendSipSessionOk() {
    this._haSendSipSessionOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haSendSipSessionOkInput() {
    return this._haSendSipSessionOk;
  }

  // ha_update_sip_session_ok - computed: false, optional: true, required: false
  private _haUpdateSipSessionOk?: number; 
  public get haUpdateSipSessionOk() {
    return this.getNumberAttribute('ha_update_sip_session_ok');
  }
  public set haUpdateSipSessionOk(value: number) {
    this._haUpdateSipSessionOk = value;
  }
  public resetHaUpdateSipSessionOk() {
    this._haUpdateSipSessionOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haUpdateSipSessionOkInput() {
    return this._haUpdateSipSessionOk;
  }

  // header_name_too_long - computed: false, optional: true, required: false
  private _headerNameTooLong?: number; 
  public get headerNameTooLong() {
    return this.getNumberAttribute('header_name_too_long');
  }
  public set headerNameTooLong(value: number) {
    this._headerNameTooLong = value;
  }
  public resetHeaderNameTooLong() {
    this._headerNameTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNameTooLongInput() {
    return this._headerNameTooLong;
  }

  // identify_dir_failed - computed: false, optional: true, required: false
  private _identifyDirFailed?: number; 
  public get identifyDirFailed() {
    return this.getNumberAttribute('identify_dir_failed');
  }
  public set identifyDirFailed(value: number) {
    this._identifyDirFailed = value;
  }
  public resetIdentifyDirFailed() {
    this._identifyDirFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifyDirFailedInput() {
    return this._identifyDirFailed;
  }

  // invalid_header - computed: false, optional: true, required: false
  private _invalidHeader?: number; 
  public get invalidHeader() {
    return this.getNumberAttribute('invalid_header');
  }
  public set invalidHeader(value: number) {
    this._invalidHeader = value;
  }
  public resetInvalidHeader() {
    this._invalidHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidHeaderInput() {
    return this._invalidHeader;
  }

  // invalid_start_line - computed: false, optional: true, required: false
  private _invalidStartLine?: number; 
  public get invalidStartLine() {
    return this.getNumberAttribute('invalid_start_line');
  }
  public set invalidStartLine(value: number) {
    this._invalidStartLine = value;
  }
  public resetInvalidStartLine() {
    this._invalidStartLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidStartLineInput() {
    return this._invalidStartLine;
  }

  // line_mem_allocd - computed: false, optional: true, required: false
  private _lineMemAllocd?: number; 
  public get lineMemAllocd() {
    return this.getNumberAttribute('line_mem_allocd');
  }
  public set lineMemAllocd(value: number) {
    this._lineMemAllocd = value;
  }
  public resetLineMemAllocd() {
    this._lineMemAllocd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineMemAllocdInput() {
    return this._lineMemAllocd;
  }

  // line_mem_freed - computed: false, optional: true, required: false
  private _lineMemFreed?: number; 
  public get lineMemFreed() {
    return this.getNumberAttribute('line_mem_freed');
  }
  public set lineMemFreed(value: number) {
    this._lineMemFreed = value;
  }
  public resetLineMemFreed() {
    this._lineMemFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineMemFreedInput() {
    return this._lineMemFreed;
  }

  // line_too_long - computed: false, optional: true, required: false
  private _lineTooLong?: number; 
  public get lineTooLong() {
    return this.getNumberAttribute('line_too_long');
  }
  public set lineTooLong(value: number) {
    this._lineTooLong = value;
  }
  public resetLineTooLong() {
    this._lineTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineTooLongInput() {
    return this._lineTooLong;
  }

  // msg_no_call_id - computed: false, optional: true, required: false
  private _msgNoCallId?: number; 
  public get msgNoCallId() {
    return this.getNumberAttribute('msg_no_call_id');
  }
  public set msgNoCallId(value: number) {
    this._msgNoCallId = value;
  }
  public resetMsgNoCallId() {
    this._msgNoCallId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgNoCallIdInput() {
    return this._msgNoCallId;
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

  // msg_trans_body - computed: false, optional: true, required: false
  private _msgTransBody?: number; 
  public get msgTransBody() {
    return this.getNumberAttribute('msg_trans_body');
  }
  public set msgTransBody(value: number) {
    this._msgTransBody = value;
  }
  public resetMsgTransBody() {
    this._msgTransBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTransBodyInput() {
    return this._msgTransBody;
  }

  // msg_trans_start_headers - computed: false, optional: true, required: false
  private _msgTransStartHeaders?: number; 
  public get msgTransStartHeaders() {
    return this.getNumberAttribute('msg_trans_start_headers');
  }
  public set msgTransStartHeaders(value: number) {
    this._msgTransStartHeaders = value;
  }
  public resetMsgTransStartHeaders() {
    this._msgTransStartHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTransStartHeadersInput() {
    return this._msgTransStartHeaders;
  }

  // msg_trans_start_line - computed: false, optional: true, required: false
  private _msgTransStartLine?: number; 
  public get msgTransStartLine() {
    return this.getNumberAttribute('msg_trans_start_line');
  }
  public set msgTransStartLine(value: number) {
    this._msgTransStartLine = value;
  }
  public resetMsgTransStartLine() {
    this._msgTransStartLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTransStartLineInput() {
    return this._msgTransStartLine;
  }

  // msg_translation - computed: false, optional: true, required: false
  private _msgTranslation?: number; 
  public get msgTranslation() {
    return this.getNumberAttribute('msg_translation');
  }
  public set msgTranslation(value: number) {
    this._msgTranslation = value;
  }
  public resetMsgTranslation() {
    this._msgTranslation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTranslationInput() {
    return this._msgTranslation;
  }

  // msg_translation_fail - computed: false, optional: true, required: false
  private _msgTranslationFail?: number; 
  public get msgTranslationFail() {
    return this.getNumberAttribute('msg_translation_fail');
  }
  public set msgTranslationFail(value: number) {
    this._msgTranslationFail = value;
  }
  public resetMsgTranslationFail() {
    this._msgTranslationFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTranslationFailInput() {
    return this._msgTranslationFail;
  }

  // no_sip_request - computed: false, optional: true, required: false
  private _noSipRequest?: number; 
  public get noSipRequest() {
    return this.getNumberAttribute('no_sip_request');
  }
  public set noSipRequest(value: number) {
    this._noSipRequest = value;
  }
  public resetNoSipRequest() {
    this._noSipRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSipRequestInput() {
    return this._noSipRequest;
  }

  // process_error_when_message_switch - computed: false, optional: true, required: false
  private _processErrorWhenMessageSwitch?: number; 
  public get processErrorWhenMessageSwitch() {
    return this.getNumberAttribute('process_error_when_message_switch');
  }
  public set processErrorWhenMessageSwitch(value: number) {
    this._processErrorWhenMessageSwitch = value;
  }
  public resetProcessErrorWhenMessageSwitch() {
    this._processErrorWhenMessageSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processErrorWhenMessageSwitchInput() {
    return this._processErrorWhenMessageSwitch;
  }

  // request_ack - computed: false, optional: true, required: false
  private _requestAck?: number; 
  public get requestAck() {
    return this.getNumberAttribute('request_ack');
  }
  public set requestAck(value: number) {
    this._requestAck = value;
  }
  public resetRequestAck() {
    this._requestAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestAckInput() {
    return this._requestAck;
  }

  // request_bye - computed: false, optional: true, required: false
  private _requestBye?: number; 
  public get requestBye() {
    return this.getNumberAttribute('request_bye');
  }
  public set requestBye(value: number) {
    this._requestBye = value;
  }
  public resetRequestBye() {
    this._requestBye = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestByeInput() {
    return this._requestBye;
  }

  // request_cancel - computed: false, optional: true, required: false
  private _requestCancel?: number; 
  public get requestCancel() {
    return this.getNumberAttribute('request_cancel');
  }
  public set requestCancel(value: number) {
    this._requestCancel = value;
  }
  public resetRequestCancel() {
    this._requestCancel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCancelInput() {
    return this._requestCancel;
  }

  // request_info - computed: false, optional: true, required: false
  private _requestInfo?: number; 
  public get requestInfo() {
    return this.getNumberAttribute('request_info');
  }
  public set requestInfo(value: number) {
    this._requestInfo = value;
  }
  public resetRequestInfo() {
    this._requestInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInfoInput() {
    return this._requestInfo;
  }

  // request_invite - computed: false, optional: true, required: false
  private _requestInvite?: number; 
  public get requestInvite() {
    return this.getNumberAttribute('request_invite');
  }
  public set requestInvite(value: number) {
    this._requestInvite = value;
  }
  public resetRequestInvite() {
    this._requestInvite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInviteInput() {
    return this._requestInvite;
  }

  // request_message - computed: false, optional: true, required: false
  private _requestMessage?: number; 
  public get requestMessage() {
    return this.getNumberAttribute('request_message');
  }
  public set requestMessage(value: number) {
    this._requestMessage = value;
  }
  public resetRequestMessage() {
    this._requestMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMessageInput() {
    return this._requestMessage;
  }

  // request_notify - computed: false, optional: true, required: false
  private _requestNotify?: number; 
  public get requestNotify() {
    return this.getNumberAttribute('request_notify');
  }
  public set requestNotify(value: number) {
    this._requestNotify = value;
  }
  public resetRequestNotify() {
    this._requestNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestNotifyInput() {
    return this._requestNotify;
  }

  // request_options - computed: false, optional: true, required: false
  private _requestOptions?: number; 
  public get requestOptions() {
    return this.getNumberAttribute('request_options');
  }
  public set requestOptions(value: number) {
    this._requestOptions = value;
  }
  public resetRequestOptions() {
    this._requestOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestOptionsInput() {
    return this._requestOptions;
  }

  // request_prack - computed: false, optional: true, required: false
  private _requestPrack?: number; 
  public get requestPrack() {
    return this.getNumberAttribute('request_prack');
  }
  public set requestPrack(value: number) {
    this._requestPrack = value;
  }
  public resetRequestPrack() {
    this._requestPrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPrackInput() {
    return this._requestPrack;
  }

  // request_publish - computed: false, optional: true, required: false
  private _requestPublish?: number; 
  public get requestPublish() {
    return this.getNumberAttribute('request_publish');
  }
  public set requestPublish(value: number) {
    this._requestPublish = value;
  }
  public resetRequestPublish() {
    this._requestPublish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPublishInput() {
    return this._requestPublish;
  }

  // request_refer - computed: false, optional: true, required: false
  private _requestRefer?: number; 
  public get requestRefer() {
    return this.getNumberAttribute('request_refer');
  }
  public set requestRefer(value: number) {
    this._requestRefer = value;
  }
  public resetRequestRefer() {
    this._requestRefer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestReferInput() {
    return this._requestRefer;
  }

  // request_register - computed: false, optional: true, required: false
  private _requestRegister?: number; 
  public get requestRegister() {
    return this.getNumberAttribute('request_register');
  }
  public set requestRegister(value: number) {
    this._requestRegister = value;
  }
  public resetRequestRegister() {
    this._requestRegister = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestRegisterInput() {
    return this._requestRegister;
  }

  // request_subscribe - computed: false, optional: true, required: false
  private _requestSubscribe?: number; 
  public get requestSubscribe() {
    return this.getNumberAttribute('request_subscribe');
  }
  public set requestSubscribe(value: number) {
    this._requestSubscribe = value;
  }
  public resetRequestSubscribe() {
    this._requestSubscribe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestSubscribeInput() {
    return this._requestSubscribe;
  }

  // request_unknown - computed: false, optional: true, required: false
  private _requestUnknown?: number; 
  public get requestUnknown() {
    return this.getNumberAttribute('request_unknown');
  }
  public set requestUnknown(value: number) {
    this._requestUnknown = value;
  }
  public resetRequestUnknown() {
    this._requestUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUnknownInput() {
    return this._requestUnknown;
  }

  // request_unknown_version - computed: false, optional: true, required: false
  private _requestUnknownVersion?: number; 
  public get requestUnknownVersion() {
    return this.getNumberAttribute('request_unknown_version');
  }
  public set requestUnknownVersion(value: number) {
    this._requestUnknownVersion = value;
  }
  public resetRequestUnknownVersion() {
    this._requestUnknownVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUnknownVersionInput() {
    return this._requestUnknownVersion;
  }

  // request_update - computed: false, optional: true, required: false
  private _requestUpdate?: number; 
  public get requestUpdate() {
    return this.getNumberAttribute('request_update');
  }
  public set requestUpdate(value: number) {
    this._requestUpdate = value;
  }
  public resetRequestUpdate() {
    this._requestUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestUpdateInput() {
    return this._requestUpdate;
  }

  // response_1xx - computed: false, optional: true, required: false
  private _response1Xx?: number; 
  public get response1Xx() {
    return this.getNumberAttribute('response_1xx');
  }
  public set response1Xx(value: number) {
    this._response1Xx = value;
  }
  public resetResponse1Xx() {
    this._response1Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response1XxInput() {
    return this._response1Xx;
  }

  // response_2xx - computed: false, optional: true, required: false
  private _response2Xx?: number; 
  public get response2Xx() {
    return this.getNumberAttribute('response_2xx');
  }
  public set response2Xx(value: number) {
    this._response2Xx = value;
  }
  public resetResponse2Xx() {
    this._response2Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response2XxInput() {
    return this._response2Xx;
  }

  // response_3xx - computed: false, optional: true, required: false
  private _response3Xx?: number; 
  public get response3Xx() {
    return this.getNumberAttribute('response_3xx');
  }
  public set response3Xx(value: number) {
    this._response3Xx = value;
  }
  public resetResponse3Xx() {
    this._response3Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response3XxInput() {
    return this._response3Xx;
  }

  // response_4xx - computed: false, optional: true, required: false
  private _response4Xx?: number; 
  public get response4Xx() {
    return this.getNumberAttribute('response_4xx');
  }
  public set response4Xx(value: number) {
    this._response4Xx = value;
  }
  public resetResponse4Xx() {
    this._response4Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response4XxInput() {
    return this._response4Xx;
  }

  // response_5xx - computed: false, optional: true, required: false
  private _response5Xx?: number; 
  public get response5Xx() {
    return this.getNumberAttribute('response_5xx');
  }
  public set response5Xx(value: number) {
    this._response5Xx = value;
  }
  public resetResponse5Xx() {
    this._response5Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response5XxInput() {
    return this._response5Xx;
  }

  // response_6xx - computed: false, optional: true, required: false
  private _response6Xx?: number; 
  public get response6Xx() {
    return this.getNumberAttribute('response_6xx');
  }
  public set response6Xx(value: number) {
    this._response6Xx = value;
  }
  public resetResponse6Xx() {
    this._response6Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response6XxInput() {
    return this._response6Xx;
  }

  // response_unknown - computed: false, optional: true, required: false
  private _responseUnknown?: number; 
  public get responseUnknown() {
    return this.getNumberAttribute('response_unknown');
  }
  public set responseUnknown(value: number) {
    this._responseUnknown = value;
  }
  public resetResponseUnknown() {
    this._responseUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseUnknownInput() {
    return this._responseUnknown;
  }

  // response_unknown_version - computed: false, optional: true, required: false
  private _responseUnknownVersion?: number; 
  public get responseUnknownVersion() {
    return this.getNumberAttribute('response_unknown_version');
  }
  public set responseUnknownVersion(value: number) {
    this._responseUnknownVersion = value;
  }
  public resetResponseUnknownVersion() {
    this._responseUnknownVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseUnknownVersionInput() {
    return this._responseUnknownVersion;
  }

  // save_call_id - computed: false, optional: true, required: false
  private _saveCallId?: number; 
  public get saveCallId() {
    return this.getNumberAttribute('save_call_id');
  }
  public set saveCallId(value: number) {
    this._saveCallId = value;
  }
  public resetSaveCallId() {
    this._saveCallId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveCallIdInput() {
    return this._saveCallId;
  }

  // save_call_id_ok - computed: false, optional: true, required: false
  private _saveCallIdOk?: number; 
  public get saveCallIdOk() {
    return this.getNumberAttribute('save_call_id_ok');
  }
  public set saveCallIdOk(value: number) {
    this._saveCallIdOk = value;
  }
  public resetSaveCallIdOk() {
    this._saveCallIdOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveCallIdOkInput() {
    return this._saveCallIdOk;
  }

  // save_smp_call_id_rtp - computed: false, optional: true, required: false
  private _saveSmpCallIdRtp?: number; 
  public get saveSmpCallIdRtp() {
    return this.getNumberAttribute('save_smp_call_id_rtp');
  }
  public set saveSmpCallIdRtp(value: number) {
    this._saveSmpCallIdRtp = value;
  }
  public resetSaveSmpCallIdRtp() {
    this._saveSmpCallIdRtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveSmpCallIdRtpInput() {
    return this._saveSmpCallIdRtp;
  }

  // save_uri - computed: false, optional: true, required: false
  private _saveUri?: number; 
  public get saveUri() {
    return this.getNumberAttribute('save_uri');
  }
  public set saveUri(value: number) {
    this._saveUri = value;
  }
  public resetSaveUri() {
    this._saveUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveUriInput() {
    return this._saveUri;
  }

  // save_uri_ok - computed: false, optional: true, required: false
  private _saveUriOk?: number; 
  public get saveUriOk() {
    return this.getNumberAttribute('save_uri_ok');
  }
  public set saveUriOk(value: number) {
    this._saveUriOk = value;
  }
  public resetSaveUriOk() {
    this._saveUriOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveUriOkInput() {
    return this._saveUriOk;
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

  // select_server_conn_by_callid - computed: false, optional: true, required: false
  private _selectServerConnByCallid?: number; 
  public get selectServerConnByCallid() {
    return this.getNumberAttribute('select_server_conn_by_callid');
  }
  public set selectServerConnByCallid(value: number) {
    this._selectServerConnByCallid = value;
  }
  public resetSelectServerConnByCallid() {
    this._selectServerConnByCallid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectServerConnByCallidInput() {
    return this._selectServerConnByCallid;
  }

  // select_server_conn_by_rev_tuple - computed: false, optional: true, required: false
  private _selectServerConnByRevTuple?: number; 
  public get selectServerConnByRevTuple() {
    return this.getNumberAttribute('select_server_conn_by_rev_tuple');
  }
  public set selectServerConnByRevTuple(value: number) {
    this._selectServerConnByRevTuple = value;
  }
  public resetSelectServerConnByRevTuple() {
    this._selectServerConnByRevTuple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectServerConnByRevTupleInput() {
    return this._selectServerConnByRevTuple;
  }

  // select_server_conn_by_uri - computed: false, optional: true, required: false
  private _selectServerConnByUri?: number; 
  public get selectServerConnByUri() {
    return this.getNumberAttribute('select_server_conn_by_uri');
  }
  public set selectServerConnByUri(value: number) {
    this._selectServerConnByUri = value;
  }
  public resetSelectServerConnByUri() {
    this._selectServerConnByUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectServerConnByUriInput() {
    return this._selectServerConnByUri;
  }

  // select_server_conn_failed - computed: false, optional: true, required: false
  private _selectServerConnFailed?: number; 
  public get selectServerConnFailed() {
    return this.getNumberAttribute('select_server_conn_failed');
  }
  public set selectServerConnFailed(value: number) {
    this._selectServerConnFailed = value;
  }
  public resetSelectServerConnFailed() {
    this._selectServerConnFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectServerConnFailedInput() {
    return this._selectServerConnFailed;
  }

  // server_keepalive_received - computed: false, optional: true, required: false
  private _serverKeepaliveReceived?: number; 
  public get serverKeepaliveReceived() {
    return this.getNumberAttribute('server_keepalive_received');
  }
  public set serverKeepaliveReceived(value: number) {
    this._serverKeepaliveReceived = value;
  }
  public resetServerKeepaliveReceived() {
    this._serverKeepaliveReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverKeepaliveReceivedInput() {
    return this._serverKeepaliveReceived;
  }

  // server_keepalive_send - computed: false, optional: true, required: false
  private _serverKeepaliveSend?: number; 
  public get serverKeepaliveSend() {
    return this.getNumberAttribute('server_keepalive_send');
  }
  public set serverKeepaliveSend(value: number) {
    this._serverKeepaliveSend = value;
  }
  public resetServerKeepaliveSend() {
    this._serverKeepaliveSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverKeepaliveSendInput() {
    return this._serverKeepaliveSend;
  }

  // session_callid_allocd - computed: false, optional: true, required: false
  private _sessionCallidAllocd?: number; 
  public get sessionCallidAllocd() {
    return this.getNumberAttribute('session_callid_allocd');
  }
  public set sessionCallidAllocd(value: number) {
    this._sessionCallidAllocd = value;
  }
  public resetSessionCallidAllocd() {
    this._sessionCallidAllocd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCallidAllocdInput() {
    return this._sessionCallidAllocd;
  }

  // session_callid_freed - computed: false, optional: true, required: false
  private _sessionCallidFreed?: number; 
  public get sessionCallidFreed() {
    return this.getNumberAttribute('session_callid_freed');
  }
  public set sessionCallidFreed(value: number) {
    this._sessionCallidFreed = value;
  }
  public resetSessionCallidFreed() {
    this._sessionCallidFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCallidFreedInput() {
    return this._sessionCallidFreed;
  }

  // session_created - computed: false, optional: true, required: false
  private _sessionCreated?: number; 
  public get sessionCreated() {
    return this.getNumberAttribute('session_created');
  }
  public set sessionCreated(value: number) {
    this._sessionCreated = value;
  }
  public resetSessionCreated() {
    this._sessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCreatedInput() {
    return this._sessionCreated;
  }

  // session_freed - computed: false, optional: true, required: false
  private _sessionFreed?: number; 
  public get sessionFreed() {
    return this.getNumberAttribute('session_freed');
  }
  public set sessionFreed(value: number) {
    this._sessionFreed = value;
  }
  public resetSessionFreed() {
    this._sessionFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionFreedInput() {
    return this._sessionFreed;
  }

  // session_in_rml - computed: false, optional: true, required: false
  private _sessionInRml?: number; 
  public get sessionInRml() {
    return this.getNumberAttribute('session_in_rml');
  }
  public set sessionInRml(value: number) {
    this._sessionInRml = value;
  }
  public resetSessionInRml() {
    this._sessionInRml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionInRmlInput() {
    return this._sessionInRml;
  }

  // session_invalid - computed: false, optional: true, required: false
  private _sessionInvalid?: number; 
  public get sessionInvalid() {
    return this.getNumberAttribute('session_invalid');
  }
  public set sessionInvalid(value: number) {
    this._sessionInvalid = value;
  }
  public resetSessionInvalid() {
    this._sessionInvalid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionInvalidInput() {
    return this._sessionInvalid;
  }

  // sg_no_uri_header - computed: false, optional: true, required: false
  private _sgNoUriHeader?: number; 
  public get sgNoUriHeader() {
    return this.getNumberAttribute('sg_no_uri_header');
  }
  public set sgNoUriHeader(value: number) {
    this._sgNoUriHeader = value;
  }
  public resetSgNoUriHeader() {
    this._sgNoUriHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgNoUriHeaderInput() {
    return this._sgNoUriHeader;
  }

  // size_too_large - computed: false, optional: true, required: false
  private _sizeTooLarge?: number; 
  public get sizeTooLarge() {
    return this.getNumberAttribute('size_too_large');
  }
  public set sizeTooLarge(value: number) {
    this._sizeTooLarge = value;
  }
  public resetSizeTooLarge() {
    this._sizeTooLarge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeTooLargeInput() {
    return this._sizeTooLarge;
  }

  // smp_call_id_rtp_session_match - computed: false, optional: true, required: false
  private _smpCallIdRtpSessionMatch?: number; 
  public get smpCallIdRtpSessionMatch() {
    return this.getNumberAttribute('smp_call_id_rtp_session_match');
  }
  public set smpCallIdRtpSessionMatch(value: number) {
    this._smpCallIdRtpSessionMatch = value;
  }
  public resetSmpCallIdRtpSessionMatch() {
    this._smpCallIdRtpSessionMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpCallIdRtpSessionMatchInput() {
    return this._smpCallIdRtpSessionMatch;
  }

  // smp_call_id_rtp_session_not_match - computed: false, optional: true, required: false
  private _smpCallIdRtpSessionNotMatch?: number; 
  public get smpCallIdRtpSessionNotMatch() {
    return this.getNumberAttribute('smp_call_id_rtp_session_not_match');
  }
  public set smpCallIdRtpSessionNotMatch(value: number) {
    this._smpCallIdRtpSessionNotMatch = value;
  }
  public resetSmpCallIdRtpSessionNotMatch() {
    this._smpCallIdRtpSessionNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpCallIdRtpSessionNotMatchInput() {
    return this._smpCallIdRtpSessionNotMatch;
  }

  // smsg_no_uri_session - computed: false, optional: true, required: false
  private _smsgNoUriSession?: number; 
  public get smsgNoUriSession() {
    return this.getNumberAttribute('smsg_no_uri_session');
  }
  public set smsgNoUriSession(value: number) {
    this._smsgNoUriSession = value;
  }
  public resetSmsgNoUriSession() {
    this._smsgNoUriSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsgNoUriSessionInput() {
    return this._smsgNoUriSession;
  }

  // table_mem_allocd - computed: false, optional: true, required: false
  private _tableMemAllocd?: number; 
  public get tableMemAllocd() {
    return this.getNumberAttribute('table_mem_allocd');
  }
  public set tableMemAllocd(value: number) {
    this._tableMemAllocd = value;
  }
  public resetTableMemAllocd() {
    this._tableMemAllocd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableMemAllocdInput() {
    return this._tableMemAllocd;
  }

  // table_mem_freed - computed: false, optional: true, required: false
  private _tableMemFreed?: number; 
  public get tableMemFreed() {
    return this.getNumberAttribute('table_mem_freed');
  }
  public set tableMemFreed(value: number) {
    this._tableMemFreed = value;
  }
  public resetTableMemFreed() {
    this._tableMemFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tableMemFreedInput() {
    return this._tableMemFreed;
  }

  // too_many_headers - computed: false, optional: true, required: false
  private _tooManyHeaders?: number; 
  public get tooManyHeaders() {
    return this.getNumberAttribute('too_many_headers');
  }
  public set tooManyHeaders(value: number) {
    this._tooManyHeaders = value;
  }
  public resetTooManyHeaders() {
    this._tooManyHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooManyHeadersInput() {
    return this._tooManyHeaders;
  }

  // update_smp_call_id_rtp - computed: false, optional: true, required: false
  private _updateSmpCallIdRtp?: number; 
  public get updateSmpCallIdRtp() {
    return this.getNumberAttribute('update_smp_call_id_rtp');
  }
  public set updateSmpCallIdRtp(value: number) {
    this._updateSmpCallIdRtp = value;
  }
  public resetUpdateSmpCallIdRtp() {
    this._updateSmpCallIdRtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateSmpCallIdRtpInput() {
    return this._updateSmpCallIdRtp;
  }

  // uri_select_client - computed: false, optional: true, required: false
  private _uriSelectClient?: number; 
  public get uriSelectClient() {
    return this.getNumberAttribute('uri_select_client');
  }
  public set uriSelectClient(value: number) {
    this._uriSelectClient = value;
  }
  public resetUriSelectClient() {
    this._uriSelectClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriSelectClientInput() {
    return this._uriSelectClient;
  }

  // wrong_ip_version - computed: false, optional: true, required: false
  private _wrongIpVersion?: number; 
  public get wrongIpVersion() {
    return this.getNumberAttribute('wrong_ip_version');
  }
  public set wrongIpVersion(value: number) {
    this._wrongIpVersion = value;
  }
  public resetWrongIpVersion() {
    this._wrongIpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrongIpVersionInput() {
    return this._wrongIpVersion;
  }

  // x_forward_for_select_client - computed: false, optional: true, required: false
  private _xForwardForSelectClient?: number; 
  public get xForwardForSelectClient() {
    return this.getNumberAttribute('x_forward_for_select_client');
  }
  public set xForwardForSelectClient(value: number) {
    this._xForwardForSelectClient = value;
  }
  public resetXForwardForSelectClient() {
    this._xForwardForSelectClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xForwardForSelectClientInput() {
    return this._xForwardForSelectClient;
  }
}

export class DataThunderSlbSipOperOperSipCpuListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbSipOperOperSipCpuListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbSipOperOperSipCpuListStructOutputReference {
    return new DataThunderSlbSipOperOperSipCpuListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbSipOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#cpu_count DataThunderSlbSipOper#cpu_count}
  */
  readonly cpuCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#filter_type DataThunderSlbSipOper#filter_type}
  */
  readonly filterType?: string;
  /**
  * sip_cpu_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#sip_cpu_list DataThunderSlbSipOper#sip_cpu_list}
  */
  readonly sipCpuList?: DataThunderSlbSipOperOperSipCpuListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbSipOperOperToTerraform(struct?: DataThunderSlbSipOperOperOutputReference | DataThunderSlbSipOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    sip_cpu_list: cdktf.listMapper(dataThunderSlbSipOperOperSipCpuListStructToTerraform, true)(struct!.sipCpuList),
  }
}


export function dataThunderSlbSipOperOperToHclTerraform(struct?: DataThunderSlbSipOperOperOutputReference | DataThunderSlbSipOperOper): any {
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
    sip_cpu_list: {
      value: cdktf.listMapperHcl(dataThunderSlbSipOperOperSipCpuListStructToHclTerraform, true)(struct!.sipCpuList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbSipOperOperSipCpuListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSipOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbSipOperOper | undefined {
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
    if (this._sipCpuList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipCpuList = this._sipCpuList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSipOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCount = undefined;
      this._filterType = undefined;
      this._sipCpuList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCount = value.cpuCount;
      this._filterType = value.filterType;
      this._sipCpuList.internalValue = value.sipCpuList;
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

  // sip_cpu_list - computed: false, optional: true, required: false
  private _sipCpuList = new DataThunderSlbSipOperOperSipCpuListStructList(this, "sip_cpu_list", false);
  public get sipCpuList() {
    return this._sipCpuList;
  }
  public putSipCpuList(value: DataThunderSlbSipOperOperSipCpuListStruct[] | cdktf.IResolvable) {
    this._sipCpuList.internalValue = value;
  }
  public resetSipCpuList() {
    this._sipCpuList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipCpuListInput() {
    return this._sipCpuList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper thunder_slb_sip_oper}
*/
export class DataThunderSlbSipOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_sip_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbSipOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbSipOper to import
  * @param importFromId The id of the existing DataThunderSlbSipOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbSipOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_sip_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_sip_oper thunder_slb_sip_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbSipOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbSipOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_sip_oper',
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
  private _oper = new DataThunderSlbSipOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbSipOperOper) {
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
      oper: dataThunderSlbSipOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbSipOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbSipOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
