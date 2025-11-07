// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbSmtpOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#id DataThunderSlbSmtpOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#oper DataThunderSlbSmtpOper#oper}
  */
  readonly oper?: DataThunderSlbSmtpOperOper;
}
export interface DataThunderSlbSmtpOperOperSmtpCpuListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#aflex_lb_reselect DataThunderSlbSmtpOper#aflex_lb_reselect}
  */
  readonly aflexLbReselect?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#aflex_lb_reselect_ok DataThunderSlbSmtpOper#aflex_lb_reselect_ok}
  */
  readonly aflexLbReselectOk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#aflex_mail_fail DataThunderSlbSmtpOper#aflex_mail_fail}
  */
  readonly aflexMailFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#aflex_switch DataThunderSlbSmtpOper#aflex_switch}
  */
  readonly aflexSwitch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#aflex_switch_ok DataThunderSlbSmtpOper#aflex_switch_ok}
  */
  readonly aflexSwitchOk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#client_domain_switch DataThunderSlbSmtpOper#client_domain_switch}
  */
  readonly clientDomainSwitch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#client_domain_switch_ok DataThunderSlbSmtpOper#client_domain_switch_ok}
  */
  readonly clientDomainSwitchOk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#client_ehlo_saved DataThunderSlbSmtpOper#client_ehlo_saved}
  */
  readonly clientEhloSaved?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#client_reset DataThunderSlbSmtpOper#client_reset}
  */
  readonly clientReset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#curr_proxy DataThunderSlbSmtpOper#curr_proxy}
  */
  readonly currProxy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#drop_server_ehlo_ok DataThunderSlbSmtpOper#drop_server_ehlo_ok}
  */
  readonly dropServerEhloOk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#fail_to_save_client_ehlo DataThunderSlbSmtpOper#fail_to_save_client_ehlo}
  */
  readonly failToSaveClientEhlo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#forward_req_data_fail DataThunderSlbSmtpOper#forward_req_data_fail}
  */
  readonly forwardReqDataFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#forward_req_fail DataThunderSlbSmtpOper#forward_req_fail}
  */
  readonly forwardReqFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#get_all_headers_fail DataThunderSlbSmtpOper#get_all_headers_fail}
  */
  readonly fetchAllHeadersFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#insert_resonse_line_fail DataThunderSlbSmtpOper#insert_resonse_line_fail}
  */
  readonly insertResonseLineFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#l4_switch DataThunderSlbSmtpOper#l4_switch}
  */
  readonly l4Switch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#lb_switch DataThunderSlbSmtpOper#lb_switch}
  */
  readonly lbSwitch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#lb_switch_ok DataThunderSlbSmtpOper#lb_switch_ok}
  */
  readonly lbSwitchOk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#line_across_packet DataThunderSlbSmtpOper#line_across_packet}
  */
  readonly lineAcrossPacket?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#line_extend DataThunderSlbSmtpOper#line_extend}
  */
  readonly lineExtend?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#line_extend_fail DataThunderSlbSmtpOper#line_extend_fail}
  */
  readonly lineExtendFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#line_table_extend DataThunderSlbSmtpOper#line_table_extend}
  */
  readonly lineTableExtend?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#line_table_extend_fail DataThunderSlbSmtpOper#line_table_extend_fail}
  */
  readonly lineTableExtendFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#line_too_long DataThunderSlbSmtpOper#line_too_long}
  */
  readonly lineTooLong?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#new_server_conn DataThunderSlbSmtpOper#new_server_conn}
  */
  readonly newServerConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#no_proxy DataThunderSlbSmtpOper#no_proxy}
  */
  readonly noProxy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#no_tuple DataThunderSlbSmtpOper#no_tuple}
  */
  readonly noTuple?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#parse_req_fail DataThunderSlbSmtpOper#parse_req_fail}
  */
  readonly parseReqFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#parse_request_line_fail DataThunderSlbSmtpOper#parse_request_line_fail}
  */
  readonly parseRequestLineFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#parse_resonse_line_fail DataThunderSlbSmtpOper#parse_resonse_line_fail}
  */
  readonly parseResonseLineFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#read_request_line_fail DataThunderSlbSmtpOper#read_request_line_fail}
  */
  readonly readRequestLineFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#recv_client_command_data DataThunderSlbSmtpOper#recv_client_command_data}
  */
  readonly recvClientCommandData?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#recv_client_command_ehlo DataThunderSlbSmtpOper#recv_client_command_ehlo}
  */
  readonly recvClientCommandEhlo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#recv_client_command_etrn DataThunderSlbSmtpOper#recv_client_command_etrn}
  */
  readonly recvClientCommandEtrn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#recv_client_command_expn DataThunderSlbSmtpOper#recv_client_command_expn}
  */
  readonly recvClientCommandExpn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#recv_client_command_helo DataThunderSlbSmtpOper#recv_client_command_helo}
  */
  readonly recvClientCommandHelo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#recv_client_command_help DataThunderSlbSmtpOper#recv_client_command_help}
  */
  readonly recvClientCommandHelp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#recv_client_command_mail DataThunderSlbSmtpOper#recv_client_command_mail}
  */
  readonly recvClientCommandMail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#recv_client_command_noop DataThunderSlbSmtpOper#recv_client_command_noop}
  */
  readonly recvClientCommandNoop?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#recv_client_command_others DataThunderSlbSmtpOper#recv_client_command_others}
  */
  readonly recvClientCommandOthers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#recv_client_command_quit DataThunderSlbSmtpOper#recv_client_command_quit}
  */
  readonly recvClientCommandQuit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#recv_client_command_rcpt DataThunderSlbSmtpOper#recv_client_command_rcpt}
  */
  readonly recvClientCommandRcpt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#recv_client_command_rset DataThunderSlbSmtpOper#recv_client_command_rset}
  */
  readonly recvClientCommandRset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#recv_client_command_starttls DataThunderSlbSmtpOper#recv_client_command_starttls}
  */
  readonly recvClientCommandStarttls?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#recv_client_command_turn DataThunderSlbSmtpOper#recv_client_command_turn}
  */
  readonly recvClientCommandTurn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#recv_client_command_vrfy DataThunderSlbSmtpOper#recv_client_command_vrfy}
  */
  readonly recvClientCommandVrfy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#recv_server_service_not_ready DataThunderSlbSmtpOper#recv_server_service_not_ready}
  */
  readonly recvServerServiceNotReady?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#recv_server_unknow_reply_code DataThunderSlbSmtpOper#recv_server_unknow_reply_code}
  */
  readonly recvServerUnknowReplyCode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#remove_resonse_line_fail DataThunderSlbSmtpOper#remove_resonse_line_fail}
  */
  readonly removeResonseLineFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#req_ofo DataThunderSlbSmtpOper#req_ofo}
  */
  readonly reqOfo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#req_retran DataThunderSlbSmtpOper#req_retran}
  */
  readonly reqRetran?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#request DataThunderSlbSmtpOper#request}
  */
  readonly request?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#request_success DataThunderSlbSmtpOper#request_success}
  */
  readonly requestSuccess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#rserver_starttls_disable DataThunderSlbSmtpOper#rserver_starttls_disable}
  */
  readonly rserverStarttlsDisable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#send_client_close_connection DataThunderSlbSmtpOper#send_client_close_connection}
  */
  readonly sendClientCloseConnection?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#send_client_go_ahead DataThunderSlbSmtpOper#send_client_go_ahead}
  */
  readonly sendClientGoAhead?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#send_client_no_command DataThunderSlbSmtpOper#send_client_no_command}
  */
  readonly sendClientNoCommand?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#send_client_service_not_ready DataThunderSlbSmtpOper#send_client_service_not_ready}
  */
  readonly sendClientServiceNotReady?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#send_client_service_ready DataThunderSlbSmtpOper#send_client_service_ready}
  */
  readonly sendClientServiceReady?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#send_client_start_tls_first DataThunderSlbSmtpOper#send_client_start_tls_first}
  */
  readonly sendClientStartTlsFirst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#send_client_tls_not_available DataThunderSlbSmtpOper#send_client_tls_not_available}
  */
  readonly sendClientTlsNotAvailable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#send_server_cmd_reset DataThunderSlbSmtpOper#send_server_cmd_reset}
  */
  readonly sendServerCmdReset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#send_server_ehlo DataThunderSlbSmtpOper#send_server_ehlo}
  */
  readonly sendServerEhlo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#server_prem_close DataThunderSlbSmtpOper#server_prem_close}
  */
  readonly serverPremClose?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#server_reselect DataThunderSlbSmtpOper#server_reselect}
  */
  readonly serverReselect?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#server_reset DataThunderSlbSmtpOper#server_reset}
  */
  readonly serverReset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#server_select_fail DataThunderSlbSmtpOper#server_select_fail}
  */
  readonly serverSelectFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#server_starttls_fail DataThunderSlbSmtpOper#server_starttls_fail}
  */
  readonly serverStarttlsFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#server_starttls_init DataThunderSlbSmtpOper#server_starttls_init}
  */
  readonly serverStarttlsInit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#snat_fail DataThunderSlbSmtpOper#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#tcp_out_reset DataThunderSlbSmtpOper#tcp_out_reset}
  */
  readonly tcpOutReset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#tls_established DataThunderSlbSmtpOper#tls_established}
  */
  readonly tlsEstablished?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#too_many_headers DataThunderSlbSmtpOper#too_many_headers}
  */
  readonly tooManyHeaders?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#total_proxy DataThunderSlbSmtpOper#total_proxy}
  */
  readonly totalProxy?: number;
}

export function dataThunderSlbSmtpOperOperSmtpCpuListStructToTerraform(struct?: DataThunderSlbSmtpOperOperSmtpCpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aflex_lb_reselect: cdktf.numberToTerraform(struct!.aflexLbReselect),
    aflex_lb_reselect_ok: cdktf.numberToTerraform(struct!.aflexLbReselectOk),
    aflex_mail_fail: cdktf.numberToTerraform(struct!.aflexMailFail),
    aflex_switch: cdktf.numberToTerraform(struct!.aflexSwitch),
    aflex_switch_ok: cdktf.numberToTerraform(struct!.aflexSwitchOk),
    client_domain_switch: cdktf.numberToTerraform(struct!.clientDomainSwitch),
    client_domain_switch_ok: cdktf.numberToTerraform(struct!.clientDomainSwitchOk),
    client_ehlo_saved: cdktf.numberToTerraform(struct!.clientEhloSaved),
    client_reset: cdktf.numberToTerraform(struct!.clientReset),
    curr_proxy: cdktf.numberToTerraform(struct!.currProxy),
    drop_server_ehlo_ok: cdktf.numberToTerraform(struct!.dropServerEhloOk),
    fail_to_save_client_ehlo: cdktf.numberToTerraform(struct!.failToSaveClientEhlo),
    forward_req_data_fail: cdktf.numberToTerraform(struct!.forwardReqDataFail),
    forward_req_fail: cdktf.numberToTerraform(struct!.forwardReqFail),
    get_all_headers_fail: cdktf.numberToTerraform(struct!.fetchAllHeadersFail),
    insert_resonse_line_fail: cdktf.numberToTerraform(struct!.insertResonseLineFail),
    l4_switch: cdktf.numberToTerraform(struct!.l4Switch),
    lb_switch: cdktf.numberToTerraform(struct!.lbSwitch),
    lb_switch_ok: cdktf.numberToTerraform(struct!.lbSwitchOk),
    line_across_packet: cdktf.numberToTerraform(struct!.lineAcrossPacket),
    line_extend: cdktf.numberToTerraform(struct!.lineExtend),
    line_extend_fail: cdktf.numberToTerraform(struct!.lineExtendFail),
    line_table_extend: cdktf.numberToTerraform(struct!.lineTableExtend),
    line_table_extend_fail: cdktf.numberToTerraform(struct!.lineTableExtendFail),
    line_too_long: cdktf.numberToTerraform(struct!.lineTooLong),
    new_server_conn: cdktf.numberToTerraform(struct!.newServerConn),
    no_proxy: cdktf.numberToTerraform(struct!.noProxy),
    no_tuple: cdktf.numberToTerraform(struct!.noTuple),
    parse_req_fail: cdktf.numberToTerraform(struct!.parseReqFail),
    parse_request_line_fail: cdktf.numberToTerraform(struct!.parseRequestLineFail),
    parse_resonse_line_fail: cdktf.numberToTerraform(struct!.parseResonseLineFail),
    read_request_line_fail: cdktf.numberToTerraform(struct!.readRequestLineFail),
    recv_client_command_data: cdktf.numberToTerraform(struct!.recvClientCommandData),
    recv_client_command_ehlo: cdktf.numberToTerraform(struct!.recvClientCommandEhlo),
    recv_client_command_etrn: cdktf.numberToTerraform(struct!.recvClientCommandEtrn),
    recv_client_command_expn: cdktf.numberToTerraform(struct!.recvClientCommandExpn),
    recv_client_command_helo: cdktf.numberToTerraform(struct!.recvClientCommandHelo),
    recv_client_command_help: cdktf.numberToTerraform(struct!.recvClientCommandHelp),
    recv_client_command_mail: cdktf.numberToTerraform(struct!.recvClientCommandMail),
    recv_client_command_noop: cdktf.numberToTerraform(struct!.recvClientCommandNoop),
    recv_client_command_others: cdktf.numberToTerraform(struct!.recvClientCommandOthers),
    recv_client_command_quit: cdktf.numberToTerraform(struct!.recvClientCommandQuit),
    recv_client_command_rcpt: cdktf.numberToTerraform(struct!.recvClientCommandRcpt),
    recv_client_command_rset: cdktf.numberToTerraform(struct!.recvClientCommandRset),
    recv_client_command_starttls: cdktf.numberToTerraform(struct!.recvClientCommandStarttls),
    recv_client_command_turn: cdktf.numberToTerraform(struct!.recvClientCommandTurn),
    recv_client_command_vrfy: cdktf.numberToTerraform(struct!.recvClientCommandVrfy),
    recv_server_service_not_ready: cdktf.numberToTerraform(struct!.recvServerServiceNotReady),
    recv_server_unknow_reply_code: cdktf.numberToTerraform(struct!.recvServerUnknowReplyCode),
    remove_resonse_line_fail: cdktf.numberToTerraform(struct!.removeResonseLineFail),
    req_ofo: cdktf.numberToTerraform(struct!.reqOfo),
    req_retran: cdktf.numberToTerraform(struct!.reqRetran),
    request: cdktf.numberToTerraform(struct!.request),
    request_success: cdktf.numberToTerraform(struct!.requestSuccess),
    rserver_starttls_disable: cdktf.numberToTerraform(struct!.rserverStarttlsDisable),
    send_client_close_connection: cdktf.numberToTerraform(struct!.sendClientCloseConnection),
    send_client_go_ahead: cdktf.numberToTerraform(struct!.sendClientGoAhead),
    send_client_no_command: cdktf.numberToTerraform(struct!.sendClientNoCommand),
    send_client_service_not_ready: cdktf.numberToTerraform(struct!.sendClientServiceNotReady),
    send_client_service_ready: cdktf.numberToTerraform(struct!.sendClientServiceReady),
    send_client_start_tls_first: cdktf.numberToTerraform(struct!.sendClientStartTlsFirst),
    send_client_tls_not_available: cdktf.numberToTerraform(struct!.sendClientTlsNotAvailable),
    send_server_cmd_reset: cdktf.numberToTerraform(struct!.sendServerCmdReset),
    send_server_ehlo: cdktf.numberToTerraform(struct!.sendServerEhlo),
    server_prem_close: cdktf.numberToTerraform(struct!.serverPremClose),
    server_reselect: cdktf.numberToTerraform(struct!.serverReselect),
    server_reset: cdktf.numberToTerraform(struct!.serverReset),
    server_select_fail: cdktf.numberToTerraform(struct!.serverSelectFail),
    server_starttls_fail: cdktf.numberToTerraform(struct!.serverStarttlsFail),
    server_starttls_init: cdktf.numberToTerraform(struct!.serverStarttlsInit),
    snat_fail: cdktf.numberToTerraform(struct!.snatFail),
    tcp_out_reset: cdktf.numberToTerraform(struct!.tcpOutReset),
    tls_established: cdktf.numberToTerraform(struct!.tlsEstablished),
    too_many_headers: cdktf.numberToTerraform(struct!.tooManyHeaders),
    total_proxy: cdktf.numberToTerraform(struct!.totalProxy),
  }
}


export function dataThunderSlbSmtpOperOperSmtpCpuListStructToHclTerraform(struct?: DataThunderSlbSmtpOperOperSmtpCpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aflex_lb_reselect: {
      value: cdktf.numberToHclTerraform(struct!.aflexLbReselect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_lb_reselect_ok: {
      value: cdktf.numberToHclTerraform(struct!.aflexLbReselectOk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_mail_fail: {
      value: cdktf.numberToHclTerraform(struct!.aflexMailFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_switch: {
      value: cdktf.numberToHclTerraform(struct!.aflexSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_switch_ok: {
      value: cdktf.numberToHclTerraform(struct!.aflexSwitchOk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_domain_switch: {
      value: cdktf.numberToHclTerraform(struct!.clientDomainSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_domain_switch_ok: {
      value: cdktf.numberToHclTerraform(struct!.clientDomainSwitchOk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_ehlo_saved: {
      value: cdktf.numberToHclTerraform(struct!.clientEhloSaved),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_reset: {
      value: cdktf.numberToHclTerraform(struct!.clientReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_proxy: {
      value: cdktf.numberToHclTerraform(struct!.currProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_server_ehlo_ok: {
      value: cdktf.numberToHclTerraform(struct!.dropServerEhloOk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail_to_save_client_ehlo: {
      value: cdktf.numberToHclTerraform(struct!.failToSaveClientEhlo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forward_req_data_fail: {
      value: cdktf.numberToHclTerraform(struct!.forwardReqDataFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forward_req_fail: {
      value: cdktf.numberToHclTerraform(struct!.forwardReqFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    get_all_headers_fail: {
      value: cdktf.numberToHclTerraform(struct!.fetchAllHeadersFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insert_resonse_line_fail: {
      value: cdktf.numberToHclTerraform(struct!.insertResonseLineFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_switch: {
      value: cdktf.numberToHclTerraform(struct!.l4Switch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lb_switch: {
      value: cdktf.numberToHclTerraform(struct!.lbSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lb_switch_ok: {
      value: cdktf.numberToHclTerraform(struct!.lbSwitchOk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_across_packet: {
      value: cdktf.numberToHclTerraform(struct!.lineAcrossPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_extend: {
      value: cdktf.numberToHclTerraform(struct!.lineExtend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_extend_fail: {
      value: cdktf.numberToHclTerraform(struct!.lineExtendFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_table_extend: {
      value: cdktf.numberToHclTerraform(struct!.lineTableExtend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_table_extend_fail: {
      value: cdktf.numberToHclTerraform(struct!.lineTableExtendFail),
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
    new_server_conn: {
      value: cdktf.numberToHclTerraform(struct!.newServerConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_proxy: {
      value: cdktf.numberToHclTerraform(struct!.noProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_tuple: {
      value: cdktf.numberToHclTerraform(struct!.noTuple),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_req_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseReqFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_request_line_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseRequestLineFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_resonse_line_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseResonseLineFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_request_line_fail: {
      value: cdktf.numberToHclTerraform(struct!.readRequestLineFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_client_command_data: {
      value: cdktf.numberToHclTerraform(struct!.recvClientCommandData),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_client_command_ehlo: {
      value: cdktf.numberToHclTerraform(struct!.recvClientCommandEhlo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_client_command_etrn: {
      value: cdktf.numberToHclTerraform(struct!.recvClientCommandEtrn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_client_command_expn: {
      value: cdktf.numberToHclTerraform(struct!.recvClientCommandExpn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_client_command_helo: {
      value: cdktf.numberToHclTerraform(struct!.recvClientCommandHelo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_client_command_help: {
      value: cdktf.numberToHclTerraform(struct!.recvClientCommandHelp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_client_command_mail: {
      value: cdktf.numberToHclTerraform(struct!.recvClientCommandMail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_client_command_noop: {
      value: cdktf.numberToHclTerraform(struct!.recvClientCommandNoop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_client_command_others: {
      value: cdktf.numberToHclTerraform(struct!.recvClientCommandOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_client_command_quit: {
      value: cdktf.numberToHclTerraform(struct!.recvClientCommandQuit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_client_command_rcpt: {
      value: cdktf.numberToHclTerraform(struct!.recvClientCommandRcpt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_client_command_rset: {
      value: cdktf.numberToHclTerraform(struct!.recvClientCommandRset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_client_command_starttls: {
      value: cdktf.numberToHclTerraform(struct!.recvClientCommandStarttls),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_client_command_turn: {
      value: cdktf.numberToHclTerraform(struct!.recvClientCommandTurn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_client_command_vrfy: {
      value: cdktf.numberToHclTerraform(struct!.recvClientCommandVrfy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_server_service_not_ready: {
      value: cdktf.numberToHclTerraform(struct!.recvServerServiceNotReady),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_server_unknow_reply_code: {
      value: cdktf.numberToHclTerraform(struct!.recvServerUnknowReplyCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remove_resonse_line_fail: {
      value: cdktf.numberToHclTerraform(struct!.removeResonseLineFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_ofo: {
      value: cdktf.numberToHclTerraform(struct!.reqOfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_retran: {
      value: cdktf.numberToHclTerraform(struct!.reqRetran),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request: {
      value: cdktf.numberToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_success: {
      value: cdktf.numberToHclTerraform(struct!.requestSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rserver_starttls_disable: {
      value: cdktf.numberToHclTerraform(struct!.rserverStarttlsDisable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_client_close_connection: {
      value: cdktf.numberToHclTerraform(struct!.sendClientCloseConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_client_go_ahead: {
      value: cdktf.numberToHclTerraform(struct!.sendClientGoAhead),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_client_no_command: {
      value: cdktf.numberToHclTerraform(struct!.sendClientNoCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_client_service_not_ready: {
      value: cdktf.numberToHclTerraform(struct!.sendClientServiceNotReady),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_client_service_ready: {
      value: cdktf.numberToHclTerraform(struct!.sendClientServiceReady),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_client_start_tls_first: {
      value: cdktf.numberToHclTerraform(struct!.sendClientStartTlsFirst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_client_tls_not_available: {
      value: cdktf.numberToHclTerraform(struct!.sendClientTlsNotAvailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_server_cmd_reset: {
      value: cdktf.numberToHclTerraform(struct!.sendServerCmdReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_server_ehlo: {
      value: cdktf.numberToHclTerraform(struct!.sendServerEhlo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_prem_close: {
      value: cdktf.numberToHclTerraform(struct!.serverPremClose),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_reselect: {
      value: cdktf.numberToHclTerraform(struct!.serverReselect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_reset: {
      value: cdktf.numberToHclTerraform(struct!.serverReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_select_fail: {
      value: cdktf.numberToHclTerraform(struct!.serverSelectFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_starttls_fail: {
      value: cdktf.numberToHclTerraform(struct!.serverStarttlsFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_starttls_init: {
      value: cdktf.numberToHclTerraform(struct!.serverStarttlsInit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_fail: {
      value: cdktf.numberToHclTerraform(struct!.snatFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_out_reset: {
      value: cdktf.numberToHclTerraform(struct!.tcpOutReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls_established: {
      value: cdktf.numberToHclTerraform(struct!.tlsEstablished),
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
    total_proxy: {
      value: cdktf.numberToHclTerraform(struct!.totalProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSmtpOperOperSmtpCpuListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbSmtpOperOperSmtpCpuListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aflexLbReselect !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexLbReselect = this._aflexLbReselect;
    }
    if (this._aflexLbReselectOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexLbReselectOk = this._aflexLbReselectOk;
    }
    if (this._aflexMailFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexMailFail = this._aflexMailFail;
    }
    if (this._aflexSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexSwitch = this._aflexSwitch;
    }
    if (this._aflexSwitchOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexSwitchOk = this._aflexSwitchOk;
    }
    if (this._clientDomainSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientDomainSwitch = this._clientDomainSwitch;
    }
    if (this._clientDomainSwitchOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientDomainSwitchOk = this._clientDomainSwitchOk;
    }
    if (this._clientEhloSaved !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientEhloSaved = this._clientEhloSaved;
    }
    if (this._clientReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientReset = this._clientReset;
    }
    if (this._currProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.currProxy = this._currProxy;
    }
    if (this._dropServerEhloOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropServerEhloOk = this._dropServerEhloOk;
    }
    if (this._failToSaveClientEhlo !== undefined) {
      hasAnyValues = true;
      internalValueResult.failToSaveClientEhlo = this._failToSaveClientEhlo;
    }
    if (this._forwardReqDataFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardReqDataFail = this._forwardReqDataFail;
    }
    if (this._forwardReqFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardReqFail = this._forwardReqFail;
    }
    if (this._getAllHeadersFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchAllHeadersFail = this._getAllHeadersFail;
    }
    if (this._insertResonseLineFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertResonseLineFail = this._insertResonseLineFail;
    }
    if (this._l4Switch !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Switch = this._l4Switch;
    }
    if (this._lbSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbSwitch = this._lbSwitch;
    }
    if (this._lbSwitchOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbSwitchOk = this._lbSwitchOk;
    }
    if (this._lineAcrossPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineAcrossPacket = this._lineAcrossPacket;
    }
    if (this._lineExtend !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineExtend = this._lineExtend;
    }
    if (this._lineExtendFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineExtendFail = this._lineExtendFail;
    }
    if (this._lineTableExtend !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineTableExtend = this._lineTableExtend;
    }
    if (this._lineTableExtendFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineTableExtendFail = this._lineTableExtendFail;
    }
    if (this._lineTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineTooLong = this._lineTooLong;
    }
    if (this._newServerConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.newServerConn = this._newServerConn;
    }
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    if (this._noTuple !== undefined) {
      hasAnyValues = true;
      internalValueResult.noTuple = this._noTuple;
    }
    if (this._parseReqFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseReqFail = this._parseReqFail;
    }
    if (this._parseRequestLineFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseRequestLineFail = this._parseRequestLineFail;
    }
    if (this._parseResonseLineFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseResonseLineFail = this._parseResonseLineFail;
    }
    if (this._readRequestLineFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.readRequestLineFail = this._readRequestLineFail;
    }
    if (this._recvClientCommandData !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvClientCommandData = this._recvClientCommandData;
    }
    if (this._recvClientCommandEhlo !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvClientCommandEhlo = this._recvClientCommandEhlo;
    }
    if (this._recvClientCommandEtrn !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvClientCommandEtrn = this._recvClientCommandEtrn;
    }
    if (this._recvClientCommandExpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvClientCommandExpn = this._recvClientCommandExpn;
    }
    if (this._recvClientCommandHelo !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvClientCommandHelo = this._recvClientCommandHelo;
    }
    if (this._recvClientCommandHelp !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvClientCommandHelp = this._recvClientCommandHelp;
    }
    if (this._recvClientCommandMail !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvClientCommandMail = this._recvClientCommandMail;
    }
    if (this._recvClientCommandNoop !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvClientCommandNoop = this._recvClientCommandNoop;
    }
    if (this._recvClientCommandOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvClientCommandOthers = this._recvClientCommandOthers;
    }
    if (this._recvClientCommandQuit !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvClientCommandQuit = this._recvClientCommandQuit;
    }
    if (this._recvClientCommandRcpt !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvClientCommandRcpt = this._recvClientCommandRcpt;
    }
    if (this._recvClientCommandRset !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvClientCommandRset = this._recvClientCommandRset;
    }
    if (this._recvClientCommandStarttls !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvClientCommandStarttls = this._recvClientCommandStarttls;
    }
    if (this._recvClientCommandTurn !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvClientCommandTurn = this._recvClientCommandTurn;
    }
    if (this._recvClientCommandVrfy !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvClientCommandVrfy = this._recvClientCommandVrfy;
    }
    if (this._recvServerServiceNotReady !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvServerServiceNotReady = this._recvServerServiceNotReady;
    }
    if (this._recvServerUnknowReplyCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvServerUnknowReplyCode = this._recvServerUnknowReplyCode;
    }
    if (this._removeResonseLineFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeResonseLineFail = this._removeResonseLineFail;
    }
    if (this._reqOfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqOfo = this._reqOfo;
    }
    if (this._reqRetran !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqRetran = this._reqRetran;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    if (this._requestSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestSuccess = this._requestSuccess;
    }
    if (this._rserverStarttlsDisable !== undefined) {
      hasAnyValues = true;
      internalValueResult.rserverStarttlsDisable = this._rserverStarttlsDisable;
    }
    if (this._sendClientCloseConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendClientCloseConnection = this._sendClientCloseConnection;
    }
    if (this._sendClientGoAhead !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendClientGoAhead = this._sendClientGoAhead;
    }
    if (this._sendClientNoCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendClientNoCommand = this._sendClientNoCommand;
    }
    if (this._sendClientServiceNotReady !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendClientServiceNotReady = this._sendClientServiceNotReady;
    }
    if (this._sendClientServiceReady !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendClientServiceReady = this._sendClientServiceReady;
    }
    if (this._sendClientStartTlsFirst !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendClientStartTlsFirst = this._sendClientStartTlsFirst;
    }
    if (this._sendClientTlsNotAvailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendClientTlsNotAvailable = this._sendClientTlsNotAvailable;
    }
    if (this._sendServerCmdReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendServerCmdReset = this._sendServerCmdReset;
    }
    if (this._sendServerEhlo !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendServerEhlo = this._sendServerEhlo;
    }
    if (this._serverPremClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverPremClose = this._serverPremClose;
    }
    if (this._serverReselect !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverReselect = this._serverReselect;
    }
    if (this._serverReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverReset = this._serverReset;
    }
    if (this._serverSelectFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSelectFail = this._serverSelectFail;
    }
    if (this._serverStarttlsFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverStarttlsFail = this._serverStarttlsFail;
    }
    if (this._serverStarttlsInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverStarttlsInit = this._serverStarttlsInit;
    }
    if (this._snatFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatFail = this._snatFail;
    }
    if (this._tcpOutReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOutReset = this._tcpOutReset;
    }
    if (this._tlsEstablished !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsEstablished = this._tlsEstablished;
    }
    if (this._tooManyHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooManyHeaders = this._tooManyHeaders;
    }
    if (this._totalProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalProxy = this._totalProxy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSmtpOperOperSmtpCpuListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aflexLbReselect = undefined;
      this._aflexLbReselectOk = undefined;
      this._aflexMailFail = undefined;
      this._aflexSwitch = undefined;
      this._aflexSwitchOk = undefined;
      this._clientDomainSwitch = undefined;
      this._clientDomainSwitchOk = undefined;
      this._clientEhloSaved = undefined;
      this._clientReset = undefined;
      this._currProxy = undefined;
      this._dropServerEhloOk = undefined;
      this._failToSaveClientEhlo = undefined;
      this._forwardReqDataFail = undefined;
      this._forwardReqFail = undefined;
      this._getAllHeadersFail = undefined;
      this._insertResonseLineFail = undefined;
      this._l4Switch = undefined;
      this._lbSwitch = undefined;
      this._lbSwitchOk = undefined;
      this._lineAcrossPacket = undefined;
      this._lineExtend = undefined;
      this._lineExtendFail = undefined;
      this._lineTableExtend = undefined;
      this._lineTableExtendFail = undefined;
      this._lineTooLong = undefined;
      this._newServerConn = undefined;
      this._noProxy = undefined;
      this._noTuple = undefined;
      this._parseReqFail = undefined;
      this._parseRequestLineFail = undefined;
      this._parseResonseLineFail = undefined;
      this._readRequestLineFail = undefined;
      this._recvClientCommandData = undefined;
      this._recvClientCommandEhlo = undefined;
      this._recvClientCommandEtrn = undefined;
      this._recvClientCommandExpn = undefined;
      this._recvClientCommandHelo = undefined;
      this._recvClientCommandHelp = undefined;
      this._recvClientCommandMail = undefined;
      this._recvClientCommandNoop = undefined;
      this._recvClientCommandOthers = undefined;
      this._recvClientCommandQuit = undefined;
      this._recvClientCommandRcpt = undefined;
      this._recvClientCommandRset = undefined;
      this._recvClientCommandStarttls = undefined;
      this._recvClientCommandTurn = undefined;
      this._recvClientCommandVrfy = undefined;
      this._recvServerServiceNotReady = undefined;
      this._recvServerUnknowReplyCode = undefined;
      this._removeResonseLineFail = undefined;
      this._reqOfo = undefined;
      this._reqRetran = undefined;
      this._request = undefined;
      this._requestSuccess = undefined;
      this._rserverStarttlsDisable = undefined;
      this._sendClientCloseConnection = undefined;
      this._sendClientGoAhead = undefined;
      this._sendClientNoCommand = undefined;
      this._sendClientServiceNotReady = undefined;
      this._sendClientServiceReady = undefined;
      this._sendClientStartTlsFirst = undefined;
      this._sendClientTlsNotAvailable = undefined;
      this._sendServerCmdReset = undefined;
      this._sendServerEhlo = undefined;
      this._serverPremClose = undefined;
      this._serverReselect = undefined;
      this._serverReset = undefined;
      this._serverSelectFail = undefined;
      this._serverStarttlsFail = undefined;
      this._serverStarttlsInit = undefined;
      this._snatFail = undefined;
      this._tcpOutReset = undefined;
      this._tlsEstablished = undefined;
      this._tooManyHeaders = undefined;
      this._totalProxy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aflexLbReselect = value.aflexLbReselect;
      this._aflexLbReselectOk = value.aflexLbReselectOk;
      this._aflexMailFail = value.aflexMailFail;
      this._aflexSwitch = value.aflexSwitch;
      this._aflexSwitchOk = value.aflexSwitchOk;
      this._clientDomainSwitch = value.clientDomainSwitch;
      this._clientDomainSwitchOk = value.clientDomainSwitchOk;
      this._clientEhloSaved = value.clientEhloSaved;
      this._clientReset = value.clientReset;
      this._currProxy = value.currProxy;
      this._dropServerEhloOk = value.dropServerEhloOk;
      this._failToSaveClientEhlo = value.failToSaveClientEhlo;
      this._forwardReqDataFail = value.forwardReqDataFail;
      this._forwardReqFail = value.forwardReqFail;
      this._getAllHeadersFail = value.fetchAllHeadersFail;
      this._insertResonseLineFail = value.insertResonseLineFail;
      this._l4Switch = value.l4Switch;
      this._lbSwitch = value.lbSwitch;
      this._lbSwitchOk = value.lbSwitchOk;
      this._lineAcrossPacket = value.lineAcrossPacket;
      this._lineExtend = value.lineExtend;
      this._lineExtendFail = value.lineExtendFail;
      this._lineTableExtend = value.lineTableExtend;
      this._lineTableExtendFail = value.lineTableExtendFail;
      this._lineTooLong = value.lineTooLong;
      this._newServerConn = value.newServerConn;
      this._noProxy = value.noProxy;
      this._noTuple = value.noTuple;
      this._parseReqFail = value.parseReqFail;
      this._parseRequestLineFail = value.parseRequestLineFail;
      this._parseResonseLineFail = value.parseResonseLineFail;
      this._readRequestLineFail = value.readRequestLineFail;
      this._recvClientCommandData = value.recvClientCommandData;
      this._recvClientCommandEhlo = value.recvClientCommandEhlo;
      this._recvClientCommandEtrn = value.recvClientCommandEtrn;
      this._recvClientCommandExpn = value.recvClientCommandExpn;
      this._recvClientCommandHelo = value.recvClientCommandHelo;
      this._recvClientCommandHelp = value.recvClientCommandHelp;
      this._recvClientCommandMail = value.recvClientCommandMail;
      this._recvClientCommandNoop = value.recvClientCommandNoop;
      this._recvClientCommandOthers = value.recvClientCommandOthers;
      this._recvClientCommandQuit = value.recvClientCommandQuit;
      this._recvClientCommandRcpt = value.recvClientCommandRcpt;
      this._recvClientCommandRset = value.recvClientCommandRset;
      this._recvClientCommandStarttls = value.recvClientCommandStarttls;
      this._recvClientCommandTurn = value.recvClientCommandTurn;
      this._recvClientCommandVrfy = value.recvClientCommandVrfy;
      this._recvServerServiceNotReady = value.recvServerServiceNotReady;
      this._recvServerUnknowReplyCode = value.recvServerUnknowReplyCode;
      this._removeResonseLineFail = value.removeResonseLineFail;
      this._reqOfo = value.reqOfo;
      this._reqRetran = value.reqRetran;
      this._request = value.request;
      this._requestSuccess = value.requestSuccess;
      this._rserverStarttlsDisable = value.rserverStarttlsDisable;
      this._sendClientCloseConnection = value.sendClientCloseConnection;
      this._sendClientGoAhead = value.sendClientGoAhead;
      this._sendClientNoCommand = value.sendClientNoCommand;
      this._sendClientServiceNotReady = value.sendClientServiceNotReady;
      this._sendClientServiceReady = value.sendClientServiceReady;
      this._sendClientStartTlsFirst = value.sendClientStartTlsFirst;
      this._sendClientTlsNotAvailable = value.sendClientTlsNotAvailable;
      this._sendServerCmdReset = value.sendServerCmdReset;
      this._sendServerEhlo = value.sendServerEhlo;
      this._serverPremClose = value.serverPremClose;
      this._serverReselect = value.serverReselect;
      this._serverReset = value.serverReset;
      this._serverSelectFail = value.serverSelectFail;
      this._serverStarttlsFail = value.serverStarttlsFail;
      this._serverStarttlsInit = value.serverStarttlsInit;
      this._snatFail = value.snatFail;
      this._tcpOutReset = value.tcpOutReset;
      this._tlsEstablished = value.tlsEstablished;
      this._tooManyHeaders = value.tooManyHeaders;
      this._totalProxy = value.totalProxy;
    }
  }

  // aflex_lb_reselect - computed: false, optional: true, required: false
  private _aflexLbReselect?: number; 
  public get aflexLbReselect() {
    return this.getNumberAttribute('aflex_lb_reselect');
  }
  public set aflexLbReselect(value: number) {
    this._aflexLbReselect = value;
  }
  public resetAflexLbReselect() {
    this._aflexLbReselect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexLbReselectInput() {
    return this._aflexLbReselect;
  }

  // aflex_lb_reselect_ok - computed: false, optional: true, required: false
  private _aflexLbReselectOk?: number; 
  public get aflexLbReselectOk() {
    return this.getNumberAttribute('aflex_lb_reselect_ok');
  }
  public set aflexLbReselectOk(value: number) {
    this._aflexLbReselectOk = value;
  }
  public resetAflexLbReselectOk() {
    this._aflexLbReselectOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexLbReselectOkInput() {
    return this._aflexLbReselectOk;
  }

  // aflex_mail_fail - computed: false, optional: true, required: false
  private _aflexMailFail?: number; 
  public get aflexMailFail() {
    return this.getNumberAttribute('aflex_mail_fail');
  }
  public set aflexMailFail(value: number) {
    this._aflexMailFail = value;
  }
  public resetAflexMailFail() {
    this._aflexMailFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexMailFailInput() {
    return this._aflexMailFail;
  }

  // aflex_switch - computed: false, optional: true, required: false
  private _aflexSwitch?: number; 
  public get aflexSwitch() {
    return this.getNumberAttribute('aflex_switch');
  }
  public set aflexSwitch(value: number) {
    this._aflexSwitch = value;
  }
  public resetAflexSwitch() {
    this._aflexSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexSwitchInput() {
    return this._aflexSwitch;
  }

  // aflex_switch_ok - computed: false, optional: true, required: false
  private _aflexSwitchOk?: number; 
  public get aflexSwitchOk() {
    return this.getNumberAttribute('aflex_switch_ok');
  }
  public set aflexSwitchOk(value: number) {
    this._aflexSwitchOk = value;
  }
  public resetAflexSwitchOk() {
    this._aflexSwitchOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexSwitchOkInput() {
    return this._aflexSwitchOk;
  }

  // client_domain_switch - computed: false, optional: true, required: false
  private _clientDomainSwitch?: number; 
  public get clientDomainSwitch() {
    return this.getNumberAttribute('client_domain_switch');
  }
  public set clientDomainSwitch(value: number) {
    this._clientDomainSwitch = value;
  }
  public resetClientDomainSwitch() {
    this._clientDomainSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientDomainSwitchInput() {
    return this._clientDomainSwitch;
  }

  // client_domain_switch_ok - computed: false, optional: true, required: false
  private _clientDomainSwitchOk?: number; 
  public get clientDomainSwitchOk() {
    return this.getNumberAttribute('client_domain_switch_ok');
  }
  public set clientDomainSwitchOk(value: number) {
    this._clientDomainSwitchOk = value;
  }
  public resetClientDomainSwitchOk() {
    this._clientDomainSwitchOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientDomainSwitchOkInput() {
    return this._clientDomainSwitchOk;
  }

  // client_ehlo_saved - computed: false, optional: true, required: false
  private _clientEhloSaved?: number; 
  public get clientEhloSaved() {
    return this.getNumberAttribute('client_ehlo_saved');
  }
  public set clientEhloSaved(value: number) {
    this._clientEhloSaved = value;
  }
  public resetClientEhloSaved() {
    this._clientEhloSaved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEhloSavedInput() {
    return this._clientEhloSaved;
  }

  // client_reset - computed: false, optional: true, required: false
  private _clientReset?: number; 
  public get clientReset() {
    return this.getNumberAttribute('client_reset');
  }
  public set clientReset(value: number) {
    this._clientReset = value;
  }
  public resetClientReset() {
    this._clientReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientResetInput() {
    return this._clientReset;
  }

  // curr_proxy - computed: false, optional: true, required: false
  private _currProxy?: number; 
  public get currProxy() {
    return this.getNumberAttribute('curr_proxy');
  }
  public set currProxy(value: number) {
    this._currProxy = value;
  }
  public resetCurrProxy() {
    this._currProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currProxyInput() {
    return this._currProxy;
  }

  // drop_server_ehlo_ok - computed: false, optional: true, required: false
  private _dropServerEhloOk?: number; 
  public get dropServerEhloOk() {
    return this.getNumberAttribute('drop_server_ehlo_ok');
  }
  public set dropServerEhloOk(value: number) {
    this._dropServerEhloOk = value;
  }
  public resetDropServerEhloOk() {
    this._dropServerEhloOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropServerEhloOkInput() {
    return this._dropServerEhloOk;
  }

  // fail_to_save_client_ehlo - computed: false, optional: true, required: false
  private _failToSaveClientEhlo?: number; 
  public get failToSaveClientEhlo() {
    return this.getNumberAttribute('fail_to_save_client_ehlo');
  }
  public set failToSaveClientEhlo(value: number) {
    this._failToSaveClientEhlo = value;
  }
  public resetFailToSaveClientEhlo() {
    this._failToSaveClientEhlo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failToSaveClientEhloInput() {
    return this._failToSaveClientEhlo;
  }

  // forward_req_data_fail - computed: false, optional: true, required: false
  private _forwardReqDataFail?: number; 
  public get forwardReqDataFail() {
    return this.getNumberAttribute('forward_req_data_fail');
  }
  public set forwardReqDataFail(value: number) {
    this._forwardReqDataFail = value;
  }
  public resetForwardReqDataFail() {
    this._forwardReqDataFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardReqDataFailInput() {
    return this._forwardReqDataFail;
  }

  // forward_req_fail - computed: false, optional: true, required: false
  private _forwardReqFail?: number; 
  public get forwardReqFail() {
    return this.getNumberAttribute('forward_req_fail');
  }
  public set forwardReqFail(value: number) {
    this._forwardReqFail = value;
  }
  public resetForwardReqFail() {
    this._forwardReqFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardReqFailInput() {
    return this._forwardReqFail;
  }

  // get_all_headers_fail - computed: false, optional: true, required: false
  private _getAllHeadersFail?: number; 
  public get fetchAllHeadersFail() {
    return this.getNumberAttribute('get_all_headers_fail');
  }
  public set fetchAllHeadersFail(value: number) {
    this._getAllHeadersFail = value;
  }
  public resetFetchAllHeadersFail() {
    this._getAllHeadersFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllHeadersFailInput() {
    return this._getAllHeadersFail;
  }

  // insert_resonse_line_fail - computed: false, optional: true, required: false
  private _insertResonseLineFail?: number; 
  public get insertResonseLineFail() {
    return this.getNumberAttribute('insert_resonse_line_fail');
  }
  public set insertResonseLineFail(value: number) {
    this._insertResonseLineFail = value;
  }
  public resetInsertResonseLineFail() {
    this._insertResonseLineFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertResonseLineFailInput() {
    return this._insertResonseLineFail;
  }

  // l4_switch - computed: false, optional: true, required: false
  private _l4Switch?: number; 
  public get l4Switch() {
    return this.getNumberAttribute('l4_switch');
  }
  public set l4Switch(value: number) {
    this._l4Switch = value;
  }
  public resetL4Switch() {
    this._l4Switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SwitchInput() {
    return this._l4Switch;
  }

  // lb_switch - computed: false, optional: true, required: false
  private _lbSwitch?: number; 
  public get lbSwitch() {
    return this.getNumberAttribute('lb_switch');
  }
  public set lbSwitch(value: number) {
    this._lbSwitch = value;
  }
  public resetLbSwitch() {
    this._lbSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbSwitchInput() {
    return this._lbSwitch;
  }

  // lb_switch_ok - computed: false, optional: true, required: false
  private _lbSwitchOk?: number; 
  public get lbSwitchOk() {
    return this.getNumberAttribute('lb_switch_ok');
  }
  public set lbSwitchOk(value: number) {
    this._lbSwitchOk = value;
  }
  public resetLbSwitchOk() {
    this._lbSwitchOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbSwitchOkInput() {
    return this._lbSwitchOk;
  }

  // line_across_packet - computed: false, optional: true, required: false
  private _lineAcrossPacket?: number; 
  public get lineAcrossPacket() {
    return this.getNumberAttribute('line_across_packet');
  }
  public set lineAcrossPacket(value: number) {
    this._lineAcrossPacket = value;
  }
  public resetLineAcrossPacket() {
    this._lineAcrossPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineAcrossPacketInput() {
    return this._lineAcrossPacket;
  }

  // line_extend - computed: false, optional: true, required: false
  private _lineExtend?: number; 
  public get lineExtend() {
    return this.getNumberAttribute('line_extend');
  }
  public set lineExtend(value: number) {
    this._lineExtend = value;
  }
  public resetLineExtend() {
    this._lineExtend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineExtendInput() {
    return this._lineExtend;
  }

  // line_extend_fail - computed: false, optional: true, required: false
  private _lineExtendFail?: number; 
  public get lineExtendFail() {
    return this.getNumberAttribute('line_extend_fail');
  }
  public set lineExtendFail(value: number) {
    this._lineExtendFail = value;
  }
  public resetLineExtendFail() {
    this._lineExtendFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineExtendFailInput() {
    return this._lineExtendFail;
  }

  // line_table_extend - computed: false, optional: true, required: false
  private _lineTableExtend?: number; 
  public get lineTableExtend() {
    return this.getNumberAttribute('line_table_extend');
  }
  public set lineTableExtend(value: number) {
    this._lineTableExtend = value;
  }
  public resetLineTableExtend() {
    this._lineTableExtend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineTableExtendInput() {
    return this._lineTableExtend;
  }

  // line_table_extend_fail - computed: false, optional: true, required: false
  private _lineTableExtendFail?: number; 
  public get lineTableExtendFail() {
    return this.getNumberAttribute('line_table_extend_fail');
  }
  public set lineTableExtendFail(value: number) {
    this._lineTableExtendFail = value;
  }
  public resetLineTableExtendFail() {
    this._lineTableExtendFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineTableExtendFailInput() {
    return this._lineTableExtendFail;
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

  // new_server_conn - computed: false, optional: true, required: false
  private _newServerConn?: number; 
  public get newServerConn() {
    return this.getNumberAttribute('new_server_conn');
  }
  public set newServerConn(value: number) {
    this._newServerConn = value;
  }
  public resetNewServerConn() {
    this._newServerConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newServerConnInput() {
    return this._newServerConn;
  }

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: number; 
  public get noProxy() {
    return this.getNumberAttribute('no_proxy');
  }
  public set noProxy(value: number) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // no_tuple - computed: false, optional: true, required: false
  private _noTuple?: number; 
  public get noTuple() {
    return this.getNumberAttribute('no_tuple');
  }
  public set noTuple(value: number) {
    this._noTuple = value;
  }
  public resetNoTuple() {
    this._noTuple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noTupleInput() {
    return this._noTuple;
  }

  // parse_req_fail - computed: false, optional: true, required: false
  private _parseReqFail?: number; 
  public get parseReqFail() {
    return this.getNumberAttribute('parse_req_fail');
  }
  public set parseReqFail(value: number) {
    this._parseReqFail = value;
  }
  public resetParseReqFail() {
    this._parseReqFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseReqFailInput() {
    return this._parseReqFail;
  }

  // parse_request_line_fail - computed: false, optional: true, required: false
  private _parseRequestLineFail?: number; 
  public get parseRequestLineFail() {
    return this.getNumberAttribute('parse_request_line_fail');
  }
  public set parseRequestLineFail(value: number) {
    this._parseRequestLineFail = value;
  }
  public resetParseRequestLineFail() {
    this._parseRequestLineFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseRequestLineFailInput() {
    return this._parseRequestLineFail;
  }

  // parse_resonse_line_fail - computed: false, optional: true, required: false
  private _parseResonseLineFail?: number; 
  public get parseResonseLineFail() {
    return this.getNumberAttribute('parse_resonse_line_fail');
  }
  public set parseResonseLineFail(value: number) {
    this._parseResonseLineFail = value;
  }
  public resetParseResonseLineFail() {
    this._parseResonseLineFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseResonseLineFailInput() {
    return this._parseResonseLineFail;
  }

  // read_request_line_fail - computed: false, optional: true, required: false
  private _readRequestLineFail?: number; 
  public get readRequestLineFail() {
    return this.getNumberAttribute('read_request_line_fail');
  }
  public set readRequestLineFail(value: number) {
    this._readRequestLineFail = value;
  }
  public resetReadRequestLineFail() {
    this._readRequestLineFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readRequestLineFailInput() {
    return this._readRequestLineFail;
  }

  // recv_client_command_data - computed: false, optional: true, required: false
  private _recvClientCommandData?: number; 
  public get recvClientCommandData() {
    return this.getNumberAttribute('recv_client_command_data');
  }
  public set recvClientCommandData(value: number) {
    this._recvClientCommandData = value;
  }
  public resetRecvClientCommandData() {
    this._recvClientCommandData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvClientCommandDataInput() {
    return this._recvClientCommandData;
  }

  // recv_client_command_ehlo - computed: false, optional: true, required: false
  private _recvClientCommandEhlo?: number; 
  public get recvClientCommandEhlo() {
    return this.getNumberAttribute('recv_client_command_ehlo');
  }
  public set recvClientCommandEhlo(value: number) {
    this._recvClientCommandEhlo = value;
  }
  public resetRecvClientCommandEhlo() {
    this._recvClientCommandEhlo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvClientCommandEhloInput() {
    return this._recvClientCommandEhlo;
  }

  // recv_client_command_etrn - computed: false, optional: true, required: false
  private _recvClientCommandEtrn?: number; 
  public get recvClientCommandEtrn() {
    return this.getNumberAttribute('recv_client_command_etrn');
  }
  public set recvClientCommandEtrn(value: number) {
    this._recvClientCommandEtrn = value;
  }
  public resetRecvClientCommandEtrn() {
    this._recvClientCommandEtrn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvClientCommandEtrnInput() {
    return this._recvClientCommandEtrn;
  }

  // recv_client_command_expn - computed: false, optional: true, required: false
  private _recvClientCommandExpn?: number; 
  public get recvClientCommandExpn() {
    return this.getNumberAttribute('recv_client_command_expn');
  }
  public set recvClientCommandExpn(value: number) {
    this._recvClientCommandExpn = value;
  }
  public resetRecvClientCommandExpn() {
    this._recvClientCommandExpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvClientCommandExpnInput() {
    return this._recvClientCommandExpn;
  }

  // recv_client_command_helo - computed: false, optional: true, required: false
  private _recvClientCommandHelo?: number; 
  public get recvClientCommandHelo() {
    return this.getNumberAttribute('recv_client_command_helo');
  }
  public set recvClientCommandHelo(value: number) {
    this._recvClientCommandHelo = value;
  }
  public resetRecvClientCommandHelo() {
    this._recvClientCommandHelo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvClientCommandHeloInput() {
    return this._recvClientCommandHelo;
  }

  // recv_client_command_help - computed: false, optional: true, required: false
  private _recvClientCommandHelp?: number; 
  public get recvClientCommandHelp() {
    return this.getNumberAttribute('recv_client_command_help');
  }
  public set recvClientCommandHelp(value: number) {
    this._recvClientCommandHelp = value;
  }
  public resetRecvClientCommandHelp() {
    this._recvClientCommandHelp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvClientCommandHelpInput() {
    return this._recvClientCommandHelp;
  }

  // recv_client_command_mail - computed: false, optional: true, required: false
  private _recvClientCommandMail?: number; 
  public get recvClientCommandMail() {
    return this.getNumberAttribute('recv_client_command_mail');
  }
  public set recvClientCommandMail(value: number) {
    this._recvClientCommandMail = value;
  }
  public resetRecvClientCommandMail() {
    this._recvClientCommandMail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvClientCommandMailInput() {
    return this._recvClientCommandMail;
  }

  // recv_client_command_noop - computed: false, optional: true, required: false
  private _recvClientCommandNoop?: number; 
  public get recvClientCommandNoop() {
    return this.getNumberAttribute('recv_client_command_noop');
  }
  public set recvClientCommandNoop(value: number) {
    this._recvClientCommandNoop = value;
  }
  public resetRecvClientCommandNoop() {
    this._recvClientCommandNoop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvClientCommandNoopInput() {
    return this._recvClientCommandNoop;
  }

  // recv_client_command_others - computed: false, optional: true, required: false
  private _recvClientCommandOthers?: number; 
  public get recvClientCommandOthers() {
    return this.getNumberAttribute('recv_client_command_others');
  }
  public set recvClientCommandOthers(value: number) {
    this._recvClientCommandOthers = value;
  }
  public resetRecvClientCommandOthers() {
    this._recvClientCommandOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvClientCommandOthersInput() {
    return this._recvClientCommandOthers;
  }

  // recv_client_command_quit - computed: false, optional: true, required: false
  private _recvClientCommandQuit?: number; 
  public get recvClientCommandQuit() {
    return this.getNumberAttribute('recv_client_command_quit');
  }
  public set recvClientCommandQuit(value: number) {
    this._recvClientCommandQuit = value;
  }
  public resetRecvClientCommandQuit() {
    this._recvClientCommandQuit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvClientCommandQuitInput() {
    return this._recvClientCommandQuit;
  }

  // recv_client_command_rcpt - computed: false, optional: true, required: false
  private _recvClientCommandRcpt?: number; 
  public get recvClientCommandRcpt() {
    return this.getNumberAttribute('recv_client_command_rcpt');
  }
  public set recvClientCommandRcpt(value: number) {
    this._recvClientCommandRcpt = value;
  }
  public resetRecvClientCommandRcpt() {
    this._recvClientCommandRcpt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvClientCommandRcptInput() {
    return this._recvClientCommandRcpt;
  }

  // recv_client_command_rset - computed: false, optional: true, required: false
  private _recvClientCommandRset?: number; 
  public get recvClientCommandRset() {
    return this.getNumberAttribute('recv_client_command_rset');
  }
  public set recvClientCommandRset(value: number) {
    this._recvClientCommandRset = value;
  }
  public resetRecvClientCommandRset() {
    this._recvClientCommandRset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvClientCommandRsetInput() {
    return this._recvClientCommandRset;
  }

  // recv_client_command_starttls - computed: false, optional: true, required: false
  private _recvClientCommandStarttls?: number; 
  public get recvClientCommandStarttls() {
    return this.getNumberAttribute('recv_client_command_starttls');
  }
  public set recvClientCommandStarttls(value: number) {
    this._recvClientCommandStarttls = value;
  }
  public resetRecvClientCommandStarttls() {
    this._recvClientCommandStarttls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvClientCommandStarttlsInput() {
    return this._recvClientCommandStarttls;
  }

  // recv_client_command_turn - computed: false, optional: true, required: false
  private _recvClientCommandTurn?: number; 
  public get recvClientCommandTurn() {
    return this.getNumberAttribute('recv_client_command_turn');
  }
  public set recvClientCommandTurn(value: number) {
    this._recvClientCommandTurn = value;
  }
  public resetRecvClientCommandTurn() {
    this._recvClientCommandTurn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvClientCommandTurnInput() {
    return this._recvClientCommandTurn;
  }

  // recv_client_command_vrfy - computed: false, optional: true, required: false
  private _recvClientCommandVrfy?: number; 
  public get recvClientCommandVrfy() {
    return this.getNumberAttribute('recv_client_command_vrfy');
  }
  public set recvClientCommandVrfy(value: number) {
    this._recvClientCommandVrfy = value;
  }
  public resetRecvClientCommandVrfy() {
    this._recvClientCommandVrfy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvClientCommandVrfyInput() {
    return this._recvClientCommandVrfy;
  }

  // recv_server_service_not_ready - computed: false, optional: true, required: false
  private _recvServerServiceNotReady?: number; 
  public get recvServerServiceNotReady() {
    return this.getNumberAttribute('recv_server_service_not_ready');
  }
  public set recvServerServiceNotReady(value: number) {
    this._recvServerServiceNotReady = value;
  }
  public resetRecvServerServiceNotReady() {
    this._recvServerServiceNotReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvServerServiceNotReadyInput() {
    return this._recvServerServiceNotReady;
  }

  // recv_server_unknow_reply_code - computed: false, optional: true, required: false
  private _recvServerUnknowReplyCode?: number; 
  public get recvServerUnknowReplyCode() {
    return this.getNumberAttribute('recv_server_unknow_reply_code');
  }
  public set recvServerUnknowReplyCode(value: number) {
    this._recvServerUnknowReplyCode = value;
  }
  public resetRecvServerUnknowReplyCode() {
    this._recvServerUnknowReplyCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvServerUnknowReplyCodeInput() {
    return this._recvServerUnknowReplyCode;
  }

  // remove_resonse_line_fail - computed: false, optional: true, required: false
  private _removeResonseLineFail?: number; 
  public get removeResonseLineFail() {
    return this.getNumberAttribute('remove_resonse_line_fail');
  }
  public set removeResonseLineFail(value: number) {
    this._removeResonseLineFail = value;
  }
  public resetRemoveResonseLineFail() {
    this._removeResonseLineFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeResonseLineFailInput() {
    return this._removeResonseLineFail;
  }

  // req_ofo - computed: false, optional: true, required: false
  private _reqOfo?: number; 
  public get reqOfo() {
    return this.getNumberAttribute('req_ofo');
  }
  public set reqOfo(value: number) {
    this._reqOfo = value;
  }
  public resetReqOfo() {
    this._reqOfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqOfoInput() {
    return this._reqOfo;
  }

  // req_retran - computed: false, optional: true, required: false
  private _reqRetran?: number; 
  public get reqRetran() {
    return this.getNumberAttribute('req_retran');
  }
  public set reqRetran(value: number) {
    this._reqRetran = value;
  }
  public resetReqRetran() {
    this._reqRetran = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqRetranInput() {
    return this._reqRetran;
  }

  // request - computed: false, optional: true, required: false
  private _request?: number; 
  public get request() {
    return this.getNumberAttribute('request');
  }
  public set request(value: number) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }

  // request_success - computed: false, optional: true, required: false
  private _requestSuccess?: number; 
  public get requestSuccess() {
    return this.getNumberAttribute('request_success');
  }
  public set requestSuccess(value: number) {
    this._requestSuccess = value;
  }
  public resetRequestSuccess() {
    this._requestSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestSuccessInput() {
    return this._requestSuccess;
  }

  // rserver_starttls_disable - computed: false, optional: true, required: false
  private _rserverStarttlsDisable?: number; 
  public get rserverStarttlsDisable() {
    return this.getNumberAttribute('rserver_starttls_disable');
  }
  public set rserverStarttlsDisable(value: number) {
    this._rserverStarttlsDisable = value;
  }
  public resetRserverStarttlsDisable() {
    this._rserverStarttlsDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rserverStarttlsDisableInput() {
    return this._rserverStarttlsDisable;
  }

  // send_client_close_connection - computed: false, optional: true, required: false
  private _sendClientCloseConnection?: number; 
  public get sendClientCloseConnection() {
    return this.getNumberAttribute('send_client_close_connection');
  }
  public set sendClientCloseConnection(value: number) {
    this._sendClientCloseConnection = value;
  }
  public resetSendClientCloseConnection() {
    this._sendClientCloseConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendClientCloseConnectionInput() {
    return this._sendClientCloseConnection;
  }

  // send_client_go_ahead - computed: false, optional: true, required: false
  private _sendClientGoAhead?: number; 
  public get sendClientGoAhead() {
    return this.getNumberAttribute('send_client_go_ahead');
  }
  public set sendClientGoAhead(value: number) {
    this._sendClientGoAhead = value;
  }
  public resetSendClientGoAhead() {
    this._sendClientGoAhead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendClientGoAheadInput() {
    return this._sendClientGoAhead;
  }

  // send_client_no_command - computed: false, optional: true, required: false
  private _sendClientNoCommand?: number; 
  public get sendClientNoCommand() {
    return this.getNumberAttribute('send_client_no_command');
  }
  public set sendClientNoCommand(value: number) {
    this._sendClientNoCommand = value;
  }
  public resetSendClientNoCommand() {
    this._sendClientNoCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendClientNoCommandInput() {
    return this._sendClientNoCommand;
  }

  // send_client_service_not_ready - computed: false, optional: true, required: false
  private _sendClientServiceNotReady?: number; 
  public get sendClientServiceNotReady() {
    return this.getNumberAttribute('send_client_service_not_ready');
  }
  public set sendClientServiceNotReady(value: number) {
    this._sendClientServiceNotReady = value;
  }
  public resetSendClientServiceNotReady() {
    this._sendClientServiceNotReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendClientServiceNotReadyInput() {
    return this._sendClientServiceNotReady;
  }

  // send_client_service_ready - computed: false, optional: true, required: false
  private _sendClientServiceReady?: number; 
  public get sendClientServiceReady() {
    return this.getNumberAttribute('send_client_service_ready');
  }
  public set sendClientServiceReady(value: number) {
    this._sendClientServiceReady = value;
  }
  public resetSendClientServiceReady() {
    this._sendClientServiceReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendClientServiceReadyInput() {
    return this._sendClientServiceReady;
  }

  // send_client_start_tls_first - computed: false, optional: true, required: false
  private _sendClientStartTlsFirst?: number; 
  public get sendClientStartTlsFirst() {
    return this.getNumberAttribute('send_client_start_tls_first');
  }
  public set sendClientStartTlsFirst(value: number) {
    this._sendClientStartTlsFirst = value;
  }
  public resetSendClientStartTlsFirst() {
    this._sendClientStartTlsFirst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendClientStartTlsFirstInput() {
    return this._sendClientStartTlsFirst;
  }

  // send_client_tls_not_available - computed: false, optional: true, required: false
  private _sendClientTlsNotAvailable?: number; 
  public get sendClientTlsNotAvailable() {
    return this.getNumberAttribute('send_client_tls_not_available');
  }
  public set sendClientTlsNotAvailable(value: number) {
    this._sendClientTlsNotAvailable = value;
  }
  public resetSendClientTlsNotAvailable() {
    this._sendClientTlsNotAvailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendClientTlsNotAvailableInput() {
    return this._sendClientTlsNotAvailable;
  }

  // send_server_cmd_reset - computed: false, optional: true, required: false
  private _sendServerCmdReset?: number; 
  public get sendServerCmdReset() {
    return this.getNumberAttribute('send_server_cmd_reset');
  }
  public set sendServerCmdReset(value: number) {
    this._sendServerCmdReset = value;
  }
  public resetSendServerCmdReset() {
    this._sendServerCmdReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendServerCmdResetInput() {
    return this._sendServerCmdReset;
  }

  // send_server_ehlo - computed: false, optional: true, required: false
  private _sendServerEhlo?: number; 
  public get sendServerEhlo() {
    return this.getNumberAttribute('send_server_ehlo');
  }
  public set sendServerEhlo(value: number) {
    this._sendServerEhlo = value;
  }
  public resetSendServerEhlo() {
    this._sendServerEhlo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendServerEhloInput() {
    return this._sendServerEhlo;
  }

  // server_prem_close - computed: false, optional: true, required: false
  private _serverPremClose?: number; 
  public get serverPremClose() {
    return this.getNumberAttribute('server_prem_close');
  }
  public set serverPremClose(value: number) {
    this._serverPremClose = value;
  }
  public resetServerPremClose() {
    this._serverPremClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPremCloseInput() {
    return this._serverPremClose;
  }

  // server_reselect - computed: false, optional: true, required: false
  private _serverReselect?: number; 
  public get serverReselect() {
    return this.getNumberAttribute('server_reselect');
  }
  public set serverReselect(value: number) {
    this._serverReselect = value;
  }
  public resetServerReselect() {
    this._serverReselect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverReselectInput() {
    return this._serverReselect;
  }

  // server_reset - computed: false, optional: true, required: false
  private _serverReset?: number; 
  public get serverReset() {
    return this.getNumberAttribute('server_reset');
  }
  public set serverReset(value: number) {
    this._serverReset = value;
  }
  public resetServerReset() {
    this._serverReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverResetInput() {
    return this._serverReset;
  }

  // server_select_fail - computed: false, optional: true, required: false
  private _serverSelectFail?: number; 
  public get serverSelectFail() {
    return this.getNumberAttribute('server_select_fail');
  }
  public set serverSelectFail(value: number) {
    this._serverSelectFail = value;
  }
  public resetServerSelectFail() {
    this._serverSelectFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSelectFailInput() {
    return this._serverSelectFail;
  }

  // server_starttls_fail - computed: false, optional: true, required: false
  private _serverStarttlsFail?: number; 
  public get serverStarttlsFail() {
    return this.getNumberAttribute('server_starttls_fail');
  }
  public set serverStarttlsFail(value: number) {
    this._serverStarttlsFail = value;
  }
  public resetServerStarttlsFail() {
    this._serverStarttlsFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverStarttlsFailInput() {
    return this._serverStarttlsFail;
  }

  // server_starttls_init - computed: false, optional: true, required: false
  private _serverStarttlsInit?: number; 
  public get serverStarttlsInit() {
    return this.getNumberAttribute('server_starttls_init');
  }
  public set serverStarttlsInit(value: number) {
    this._serverStarttlsInit = value;
  }
  public resetServerStarttlsInit() {
    this._serverStarttlsInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverStarttlsInitInput() {
    return this._serverStarttlsInit;
  }

  // snat_fail - computed: false, optional: true, required: false
  private _snatFail?: number; 
  public get snatFail() {
    return this.getNumberAttribute('snat_fail');
  }
  public set snatFail(value: number) {
    this._snatFail = value;
  }
  public resetSnatFail() {
    this._snatFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatFailInput() {
    return this._snatFail;
  }

  // tcp_out_reset - computed: false, optional: true, required: false
  private _tcpOutReset?: number; 
  public get tcpOutReset() {
    return this.getNumberAttribute('tcp_out_reset');
  }
  public set tcpOutReset(value: number) {
    this._tcpOutReset = value;
  }
  public resetTcpOutReset() {
    this._tcpOutReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOutResetInput() {
    return this._tcpOutReset;
  }

  // tls_established - computed: false, optional: true, required: false
  private _tlsEstablished?: number; 
  public get tlsEstablished() {
    return this.getNumberAttribute('tls_established');
  }
  public set tlsEstablished(value: number) {
    this._tlsEstablished = value;
  }
  public resetTlsEstablished() {
    this._tlsEstablished = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsEstablishedInput() {
    return this._tlsEstablished;
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

  // total_proxy - computed: false, optional: true, required: false
  private _totalProxy?: number; 
  public get totalProxy() {
    return this.getNumberAttribute('total_proxy');
  }
  public set totalProxy(value: number) {
    this._totalProxy = value;
  }
  public resetTotalProxy() {
    this._totalProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalProxyInput() {
    return this._totalProxy;
  }
}

export class DataThunderSlbSmtpOperOperSmtpCpuListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbSmtpOperOperSmtpCpuListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbSmtpOperOperSmtpCpuListStructOutputReference {
    return new DataThunderSlbSmtpOperOperSmtpCpuListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbSmtpOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#cpu_count DataThunderSlbSmtpOper#cpu_count}
  */
  readonly cpuCount?: number;
  /**
  * smtp_cpu_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#smtp_cpu_list DataThunderSlbSmtpOper#smtp_cpu_list}
  */
  readonly smtpCpuList?: DataThunderSlbSmtpOperOperSmtpCpuListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbSmtpOperOperToTerraform(struct?: DataThunderSlbSmtpOperOperOutputReference | DataThunderSlbSmtpOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    smtp_cpu_list: cdktf.listMapper(dataThunderSlbSmtpOperOperSmtpCpuListStructToTerraform, true)(struct!.smtpCpuList),
  }
}


export function dataThunderSlbSmtpOperOperToHclTerraform(struct?: DataThunderSlbSmtpOperOperOutputReference | DataThunderSlbSmtpOperOper): any {
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
    smtp_cpu_list: {
      value: cdktf.listMapperHcl(dataThunderSlbSmtpOperOperSmtpCpuListStructToHclTerraform, true)(struct!.smtpCpuList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbSmtpOperOperSmtpCpuListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSmtpOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbSmtpOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._smtpCpuList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpCpuList = this._smtpCpuList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSmtpOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCount = undefined;
      this._smtpCpuList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCount = value.cpuCount;
      this._smtpCpuList.internalValue = value.smtpCpuList;
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

  // smtp_cpu_list - computed: false, optional: true, required: false
  private _smtpCpuList = new DataThunderSlbSmtpOperOperSmtpCpuListStructList(this, "smtp_cpu_list", false);
  public get smtpCpuList() {
    return this._smtpCpuList;
  }
  public putSmtpCpuList(value: DataThunderSlbSmtpOperOperSmtpCpuListStruct[] | cdktf.IResolvable) {
    this._smtpCpuList.internalValue = value;
  }
  public resetSmtpCpuList() {
    this._smtpCpuList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpCpuListInput() {
    return this._smtpCpuList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper thunder_slb_smtp_oper}
*/
export class DataThunderSlbSmtpOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_smtp_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbSmtpOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbSmtpOper to import
  * @param importFromId The id of the existing DataThunderSlbSmtpOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbSmtpOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_smtp_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_smtp_oper thunder_slb_smtp_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbSmtpOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbSmtpOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_smtp_oper',
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
  private _oper = new DataThunderSlbSmtpOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbSmtpOperOper) {
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
      oper: dataThunderSlbSmtpOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbSmtpOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbSmtpOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
