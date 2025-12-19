// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbFtpProxyStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#id DataThunderSlbFtpProxyStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#stats DataThunderSlbFtpProxyStats#stats}
  */
  readonly stats?: DataThunderSlbFtpProxyStatsStats;
}
export interface DataThunderSlbFtpProxyStatsStats {
  /**
  * adat cmd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#adat DataThunderSlbFtpProxyStats#adat}
  */
  readonly adat?: number;
  /**
  * Auth Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#auth_fail DataThunderSlbFtpProxyStats#auth_fail}
  */
  readonly authFail?: number;
  /**
  * Auth Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#auth_req DataThunderSlbFtpProxyStats#auth_req}
  */
  readonly authReq?: number;
  /**
  * Auth Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#auth_succ DataThunderSlbFtpProxyStats#auth_succ}
  */
  readonly authSucc?: number;
  /**
  * auth tls cmd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#auth_tls DataThunderSlbFtpProxyStats#auth_tls}
  */
  readonly authTls?: number;
  /**
  * Unsupported auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#auth_unsupported DataThunderSlbFtpProxyStats#auth_unsupported}
  */
  readonly authUnsupported?: number;
  /**
  * Bad Sequence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#bad_sequence DataThunderSlbFtpProxyStats#bad_sequence}
  */
  readonly badSequence?: number;
  /**
  * cant find eprt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#cant_find_eprt DataThunderSlbFtpProxyStats#cant_find_eprt}
  */
  readonly cantFindEprt?: number;
  /**
  * cant find epsv
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#cant_find_epsv DataThunderSlbFtpProxyStats#cant_find_epsv}
  */
  readonly cantFindEpsv?: number;
  /**
  * cant find pasv
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#cant_find_pasv DataThunderSlbFtpProxyStats#cant_find_pasv}
  */
  readonly cantFindPasv?: number;
  /**
  * cant find port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#cant_find_port DataThunderSlbFtpProxyStats#cant_find_port}
  */
  readonly cantFindPort?: number;
  /**
  * clear ctrl port packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#cc DataThunderSlbFtpProxyStats#cc}
  */
  readonly cc?: number;
  /**
  * Client EST state erro
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#cl_est_err DataThunderSlbFtpProxyStats#cl_est_err}
  */
  readonly clEstErr?: number;
  /**
  * Client RQ state error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#cl_request_err DataThunderSlbFtpProxyStats#cl_request_err}
  */
  readonly clRequestErr?: number;
  /**
  * client auth tls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#client_auth_tls DataThunderSlbFtpProxyStats#client_auth_tls}
  */
  readonly clientAuthTls?: number;
  /**
  * Control chn clear txt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#control_to_clear DataThunderSlbFtpProxyStats#control_to_clear}
  */
  readonly controlToClear?: number;
  /**
  * Control chn ssl
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#control_to_ssl DataThunderSlbFtpProxyStats#control_to_ssl}
  */
  readonly controlToSsl?: number;
  /**
  * Current proxy conns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#curr DataThunderSlbFtpProxyStats#curr}
  */
  readonly curr?: number;
  /**
  * Data Start state error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#data_conn_start_err DataThunderSlbFtpProxyStats#data_conn_start_err}
  */
  readonly dataConnStartErr?: number;
  /**
  * Current Data Proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#data_curr DataThunderSlbFtpProxyStats#data_curr}
  */
  readonly dataCurr?: number;
  /**
  * data send fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#data_send_fail DataThunderSlbFtpProxyStats#data_send_fail}
  */
  readonly dataSendFail?: number;
  /**
  * Data Serv CTED error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#data_serv_connected_err DataThunderSlbFtpProxyStats#data_serv_connected_err}
  */
  readonly dataServConnectedErr?: number;
  /**
  * Data Serv CTNG error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#data_serv_connecting_err DataThunderSlbFtpProxyStats#data_serv_connecting_err}
  */
  readonly dataServConnectingErr?: number;
  /**
  * data svr conn fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#data_server_conn_fail DataThunderSlbFtpProxyStats#data_server_conn_fail}
  */
  readonly dataServerConnFail?: number;
  /**
  * data ssl force
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#data_ssl DataThunderSlbFtpProxyStats#data_ssl}
  */
  readonly dataSsl?: number;
  /**
  * Total Data Proxy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#data_total DataThunderSlbFtpProxyStats#data_total}
  */
  readonly dataTotal?: number;
  /**
  * Total FTP Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#drop DataThunderSlbFtpProxyStats#drop}
  */
  readonly drop?: number;
  /**
  * Host Domain Name isn't resolved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#ds_fail DataThunderSlbFtpProxyStats#ds_fail}
  */
  readonly dsFail?: number;
  /**
  * Host Domain Name is resolved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#ds_succ DataThunderSlbFtpProxyStats#ds_succ}
  */
  readonly dsSucc?: number;
  /**
  * eprt cmd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#eprt DataThunderSlbFtpProxyStats#eprt}
  */
  readonly eprt?: number;
  /**
  * epsv command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#epsv DataThunderSlbFtpProxyStats#epsv}
  */
  readonly epsv?: number;
  /**
  * feat packet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#feat DataThunderSlbFtpProxyStats#feat}
  */
  readonly feat?: number;
  /**
  * Forward to Internet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#fwd_to_internet DataThunderSlbFtpProxyStats#fwd_to_internet}
  */
  readonly fwdToInternet?: number;
  /**
  * Total Forward to Service-group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#fwd_to_sg DataThunderSlbFtpProxyStats#fwd_to_sg}
  */
  readonly fwdToSg?: number;
  /**
  * Serv Sel insert tuple fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#insert_tuple_fail DataThunderSlbFtpProxyStats#insert_tuple_fail}
  */
  readonly insertTupleFail?: number;
  /**
  * invalid start line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#invalid_start_line DataThunderSlbFtpProxyStats#invalid_start_line}
  */
  readonly invalidStartLine?: number;
  /**
  * request line freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#line_mem_freed DataThunderSlbFtpProxyStats#line_mem_freed}
  */
  readonly lineMemFreed?: number;
  /**
  * line too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#line_too_long DataThunderSlbFtpProxyStats#line_too_long}
  */
  readonly lineTooLong?: number;
  /**
  * no route failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#no_route DataThunderSlbFtpProxyStats#no_route}
  */
  readonly noRoute?: number;
  /**
  * open cmd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#open DataThunderSlbFtpProxyStats#open}
  */
  readonly open?: number;
  /**
  * pass cmd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#pass DataThunderSlbFtpProxyStats#pass}
  */
  readonly pass?: number;
  /**
  * pasv cmd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#pasv DataThunderSlbFtpProxyStats#pasv}
  */
  readonly pasv?: number;
  /**
  * psv addr not equal to svr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#pasv_addr_ne_server DataThunderSlbFtpProxyStats#pasv_addr_ne_server}
  */
  readonly pasvAddrNeServer?: number;
  /**
  * pbsz cmd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#pbsz DataThunderSlbFtpProxyStats#pbsz}
  */
  readonly pbsz?: number;
  /**
  * port cmd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#port DataThunderSlbFtpProxyStats#port}
  */
  readonly port?: number;
  /**
  * prot cmd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#prot DataThunderSlbFtpProxyStats#prot}
  */
  readonly prot?: number;
  /**
  * quit cmd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#quit DataThunderSlbFtpProxyStats#quit}
  */
  readonly quit?: number;
  /**
  * Total FTP Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#request DataThunderSlbFtpProxyStats#request}
  */
  readonly request?: number;
  /**
  * other cmd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#request_dont_care DataThunderSlbFtpProxyStats#request_dont_care}
  */
  readonly requestDontCare?: number;
  /**
  * Serv Sel Persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#rsv_persist_conn_fail DataThunderSlbFtpProxyStats#rsv_persist_conn_fail}
  */
  readonly rsvPersistConnFail?: number;
  /**
  * Serv CTNG state error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#ser_connecting_err DataThunderSlbFtpProxyStats#ser_connecting_err}
  */
  readonly serConnectingErr?: number;
  /**
  * Serv RESP state error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#server_response_err DataThunderSlbFtpProxyStats#server_response_err}
  */
  readonly serverResponseErr?: number;
  /**
  * site cmd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#site DataThunderSlbFtpProxyStats#site}
  */
  readonly site?: number;
  /**
  * smp create fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#smp_create_fail DataThunderSlbFtpProxyStats#smp_create_fail}
  */
  readonly smpCreateFail?: number;
  /**
  * Serv Sel SMPv4 fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#smp_v4_fail DataThunderSlbFtpProxyStats#smp_v4_fail}
  */
  readonly smpV4Fail?: number;
  /**
  * Serv Sel SMPv6 fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#smp_v6_fail DataThunderSlbFtpProxyStats#smp_v6_fail}
  */
  readonly smpV6Fail?: number;
  /**
  * source nat failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#snat_fail DataThunderSlbFtpProxyStats#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Server selection failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#svrsel_fail DataThunderSlbFtpProxyStats#svrsel_fail}
  */
  readonly svrselFail?: number;
  /**
  * Total proxy conns
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#total DataThunderSlbFtpProxyStats#total}
  */
  readonly total?: number;
  /**
  * Unsupported cmd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#unsupported_command DataThunderSlbFtpProxyStats#unsupported_command}
  */
  readonly unsupportedCommand?: number;
  /**
  * Unsupported PBSZ
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#unsupported_pbsz_value DataThunderSlbFtpProxyStats#unsupported_pbsz_value}
  */
  readonly unsupportedPbszValue?: number;
  /**
  * Unsupported PROT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#unsupported_prot_value DataThunderSlbFtpProxyStats#unsupported_prot_value}
  */
  readonly unsupportedProtValue?: number;
  /**
  * user cmd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#user DataThunderSlbFtpProxyStats#user}
  */
  readonly user?: number;
}

export function dataThunderSlbFtpProxyStatsStatsToTerraform(struct?: DataThunderSlbFtpProxyStatsStatsOutputReference | DataThunderSlbFtpProxyStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adat: cdktf.numberToTerraform(struct!.adat),
    auth_fail: cdktf.numberToTerraform(struct!.authFail),
    auth_req: cdktf.numberToTerraform(struct!.authReq),
    auth_succ: cdktf.numberToTerraform(struct!.authSucc),
    auth_tls: cdktf.numberToTerraform(struct!.authTls),
    auth_unsupported: cdktf.numberToTerraform(struct!.authUnsupported),
    bad_sequence: cdktf.numberToTerraform(struct!.badSequence),
    cant_find_eprt: cdktf.numberToTerraform(struct!.cantFindEprt),
    cant_find_epsv: cdktf.numberToTerraform(struct!.cantFindEpsv),
    cant_find_pasv: cdktf.numberToTerraform(struct!.cantFindPasv),
    cant_find_port: cdktf.numberToTerraform(struct!.cantFindPort),
    cc: cdktf.numberToTerraform(struct!.cc),
    cl_est_err: cdktf.numberToTerraform(struct!.clEstErr),
    cl_request_err: cdktf.numberToTerraform(struct!.clRequestErr),
    client_auth_tls: cdktf.numberToTerraform(struct!.clientAuthTls),
    control_to_clear: cdktf.numberToTerraform(struct!.controlToClear),
    control_to_ssl: cdktf.numberToTerraform(struct!.controlToSsl),
    curr: cdktf.numberToTerraform(struct!.curr),
    data_conn_start_err: cdktf.numberToTerraform(struct!.dataConnStartErr),
    data_curr: cdktf.numberToTerraform(struct!.dataCurr),
    data_send_fail: cdktf.numberToTerraform(struct!.dataSendFail),
    data_serv_connected_err: cdktf.numberToTerraform(struct!.dataServConnectedErr),
    data_serv_connecting_err: cdktf.numberToTerraform(struct!.dataServConnectingErr),
    data_server_conn_fail: cdktf.numberToTerraform(struct!.dataServerConnFail),
    data_ssl: cdktf.numberToTerraform(struct!.dataSsl),
    data_total: cdktf.numberToTerraform(struct!.dataTotal),
    drop: cdktf.numberToTerraform(struct!.drop),
    ds_fail: cdktf.numberToTerraform(struct!.dsFail),
    ds_succ: cdktf.numberToTerraform(struct!.dsSucc),
    eprt: cdktf.numberToTerraform(struct!.eprt),
    epsv: cdktf.numberToTerraform(struct!.epsv),
    feat: cdktf.numberToTerraform(struct!.feat),
    fwd_to_internet: cdktf.numberToTerraform(struct!.fwdToInternet),
    fwd_to_sg: cdktf.numberToTerraform(struct!.fwdToSg),
    insert_tuple_fail: cdktf.numberToTerraform(struct!.insertTupleFail),
    invalid_start_line: cdktf.numberToTerraform(struct!.invalidStartLine),
    line_mem_freed: cdktf.numberToTerraform(struct!.lineMemFreed),
    line_too_long: cdktf.numberToTerraform(struct!.lineTooLong),
    no_route: cdktf.numberToTerraform(struct!.noRoute),
    open: cdktf.numberToTerraform(struct!.open),
    pass: cdktf.numberToTerraform(struct!.pass),
    pasv: cdktf.numberToTerraform(struct!.pasv),
    pasv_addr_ne_server: cdktf.numberToTerraform(struct!.pasvAddrNeServer),
    pbsz: cdktf.numberToTerraform(struct!.pbsz),
    port: cdktf.numberToTerraform(struct!.port),
    prot: cdktf.numberToTerraform(struct!.prot),
    quit: cdktf.numberToTerraform(struct!.quit),
    request: cdktf.numberToTerraform(struct!.request),
    request_dont_care: cdktf.numberToTerraform(struct!.requestDontCare),
    rsv_persist_conn_fail: cdktf.numberToTerraform(struct!.rsvPersistConnFail),
    ser_connecting_err: cdktf.numberToTerraform(struct!.serConnectingErr),
    server_response_err: cdktf.numberToTerraform(struct!.serverResponseErr),
    site: cdktf.numberToTerraform(struct!.site),
    smp_create_fail: cdktf.numberToTerraform(struct!.smpCreateFail),
    smp_v4_fail: cdktf.numberToTerraform(struct!.smpV4Fail),
    smp_v6_fail: cdktf.numberToTerraform(struct!.smpV6Fail),
    snat_fail: cdktf.numberToTerraform(struct!.snatFail),
    svrsel_fail: cdktf.numberToTerraform(struct!.svrselFail),
    total: cdktf.numberToTerraform(struct!.total),
    unsupported_command: cdktf.numberToTerraform(struct!.unsupportedCommand),
    unsupported_pbsz_value: cdktf.numberToTerraform(struct!.unsupportedPbszValue),
    unsupported_prot_value: cdktf.numberToTerraform(struct!.unsupportedProtValue),
    user: cdktf.numberToTerraform(struct!.user),
  }
}


export function dataThunderSlbFtpProxyStatsStatsToHclTerraform(struct?: DataThunderSlbFtpProxyStatsStatsOutputReference | DataThunderSlbFtpProxyStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adat: {
      value: cdktf.numberToHclTerraform(struct!.adat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_fail: {
      value: cdktf.numberToHclTerraform(struct!.authFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_req: {
      value: cdktf.numberToHclTerraform(struct!.authReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_succ: {
      value: cdktf.numberToHclTerraform(struct!.authSucc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_tls: {
      value: cdktf.numberToHclTerraform(struct!.authTls),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_unsupported: {
      value: cdktf.numberToHclTerraform(struct!.authUnsupported),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_sequence: {
      value: cdktf.numberToHclTerraform(struct!.badSequence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cant_find_eprt: {
      value: cdktf.numberToHclTerraform(struct!.cantFindEprt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cant_find_epsv: {
      value: cdktf.numberToHclTerraform(struct!.cantFindEpsv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cant_find_pasv: {
      value: cdktf.numberToHclTerraform(struct!.cantFindPasv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cant_find_port: {
      value: cdktf.numberToHclTerraform(struct!.cantFindPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cc: {
      value: cdktf.numberToHclTerraform(struct!.cc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cl_est_err: {
      value: cdktf.numberToHclTerraform(struct!.clEstErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cl_request_err: {
      value: cdktf.numberToHclTerraform(struct!.clRequestErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_auth_tls: {
      value: cdktf.numberToHclTerraform(struct!.clientAuthTls),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    control_to_clear: {
      value: cdktf.numberToHclTerraform(struct!.controlToClear),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    control_to_ssl: {
      value: cdktf.numberToHclTerraform(struct!.controlToSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr: {
      value: cdktf.numberToHclTerraform(struct!.curr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_conn_start_err: {
      value: cdktf.numberToHclTerraform(struct!.dataConnStartErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_curr: {
      value: cdktf.numberToHclTerraform(struct!.dataCurr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_send_fail: {
      value: cdktf.numberToHclTerraform(struct!.dataSendFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_serv_connected_err: {
      value: cdktf.numberToHclTerraform(struct!.dataServConnectedErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_serv_connecting_err: {
      value: cdktf.numberToHclTerraform(struct!.dataServConnectingErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_server_conn_fail: {
      value: cdktf.numberToHclTerraform(struct!.dataServerConnFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_ssl: {
      value: cdktf.numberToHclTerraform(struct!.dataSsl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_total: {
      value: cdktf.numberToHclTerraform(struct!.dataTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop: {
      value: cdktf.numberToHclTerraform(struct!.drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ds_fail: {
      value: cdktf.numberToHclTerraform(struct!.dsFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ds_succ: {
      value: cdktf.numberToHclTerraform(struct!.dsSucc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    eprt: {
      value: cdktf.numberToHclTerraform(struct!.eprt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    epsv: {
      value: cdktf.numberToHclTerraform(struct!.epsv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    feat: {
      value: cdktf.numberToHclTerraform(struct!.feat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_to_internet: {
      value: cdktf.numberToHclTerraform(struct!.fwdToInternet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwd_to_sg: {
      value: cdktf.numberToHclTerraform(struct!.fwdToSg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insert_tuple_fail: {
      value: cdktf.numberToHclTerraform(struct!.insertTupleFail),
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
    no_route: {
      value: cdktf.numberToHclTerraform(struct!.noRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    open: {
      value: cdktf.numberToHclTerraform(struct!.open),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pass: {
      value: cdktf.numberToHclTerraform(struct!.pass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pasv: {
      value: cdktf.numberToHclTerraform(struct!.pasv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pasv_addr_ne_server: {
      value: cdktf.numberToHclTerraform(struct!.pasvAddrNeServer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pbsz: {
      value: cdktf.numberToHclTerraform(struct!.pbsz),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prot: {
      value: cdktf.numberToHclTerraform(struct!.prot),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quit: {
      value: cdktf.numberToHclTerraform(struct!.quit),
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
    request_dont_care: {
      value: cdktf.numberToHclTerraform(struct!.requestDontCare),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsv_persist_conn_fail: {
      value: cdktf.numberToHclTerraform(struct!.rsvPersistConnFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ser_connecting_err: {
      value: cdktf.numberToHclTerraform(struct!.serConnectingErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_response_err: {
      value: cdktf.numberToHclTerraform(struct!.serverResponseErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    site: {
      value: cdktf.numberToHclTerraform(struct!.site),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smp_create_fail: {
      value: cdktf.numberToHclTerraform(struct!.smpCreateFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smp_v4_fail: {
      value: cdktf.numberToHclTerraform(struct!.smpV4Fail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smp_v6_fail: {
      value: cdktf.numberToHclTerraform(struct!.smpV6Fail),
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
    svrsel_fail: {
      value: cdktf.numberToHclTerraform(struct!.svrselFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total: {
      value: cdktf.numberToHclTerraform(struct!.total),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsupported_command: {
      value: cdktf.numberToHclTerraform(struct!.unsupportedCommand),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsupported_pbsz_value: {
      value: cdktf.numberToHclTerraform(struct!.unsupportedPbszValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsupported_prot_value: {
      value: cdktf.numberToHclTerraform(struct!.unsupportedProtValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user: {
      value: cdktf.numberToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbFtpProxyStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbFtpProxyStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adat !== undefined) {
      hasAnyValues = true;
      internalValueResult.adat = this._adat;
    }
    if (this._authFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.authFail = this._authFail;
    }
    if (this._authReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.authReq = this._authReq;
    }
    if (this._authSucc !== undefined) {
      hasAnyValues = true;
      internalValueResult.authSucc = this._authSucc;
    }
    if (this._authTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.authTls = this._authTls;
    }
    if (this._authUnsupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUnsupported = this._authUnsupported;
    }
    if (this._badSequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.badSequence = this._badSequence;
    }
    if (this._cantFindEprt !== undefined) {
      hasAnyValues = true;
      internalValueResult.cantFindEprt = this._cantFindEprt;
    }
    if (this._cantFindEpsv !== undefined) {
      hasAnyValues = true;
      internalValueResult.cantFindEpsv = this._cantFindEpsv;
    }
    if (this._cantFindPasv !== undefined) {
      hasAnyValues = true;
      internalValueResult.cantFindPasv = this._cantFindPasv;
    }
    if (this._cantFindPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.cantFindPort = this._cantFindPort;
    }
    if (this._cc !== undefined) {
      hasAnyValues = true;
      internalValueResult.cc = this._cc;
    }
    if (this._clEstErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clEstErr = this._clEstErr;
    }
    if (this._clRequestErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clRequestErr = this._clRequestErr;
    }
    if (this._clientAuthTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuthTls = this._clientAuthTls;
    }
    if (this._controlToClear !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlToClear = this._controlToClear;
    }
    if (this._controlToSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlToSsl = this._controlToSsl;
    }
    if (this._curr !== undefined) {
      hasAnyValues = true;
      internalValueResult.curr = this._curr;
    }
    if (this._dataConnStartErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataConnStartErr = this._dataConnStartErr;
    }
    if (this._dataCurr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCurr = this._dataCurr;
    }
    if (this._dataSendFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSendFail = this._dataSendFail;
    }
    if (this._dataServConnectedErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataServConnectedErr = this._dataServConnectedErr;
    }
    if (this._dataServConnectingErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataServConnectingErr = this._dataServConnectingErr;
    }
    if (this._dataServerConnFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataServerConnFail = this._dataServerConnFail;
    }
    if (this._dataSsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSsl = this._dataSsl;
    }
    if (this._dataTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataTotal = this._dataTotal;
    }
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    if (this._dsFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsFail = this._dsFail;
    }
    if (this._dsSucc !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsSucc = this._dsSucc;
    }
    if (this._eprt !== undefined) {
      hasAnyValues = true;
      internalValueResult.eprt = this._eprt;
    }
    if (this._epsv !== undefined) {
      hasAnyValues = true;
      internalValueResult.epsv = this._epsv;
    }
    if (this._feat !== undefined) {
      hasAnyValues = true;
      internalValueResult.feat = this._feat;
    }
    if (this._fwdToInternet !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdToInternet = this._fwdToInternet;
    }
    if (this._fwdToSg !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdToSg = this._fwdToSg;
    }
    if (this._insertTupleFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertTupleFail = this._insertTupleFail;
    }
    if (this._invalidStartLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidStartLine = this._invalidStartLine;
    }
    if (this._lineMemFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineMemFreed = this._lineMemFreed;
    }
    if (this._lineTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineTooLong = this._lineTooLong;
    }
    if (this._noRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRoute = this._noRoute;
    }
    if (this._open !== undefined) {
      hasAnyValues = true;
      internalValueResult.open = this._open;
    }
    if (this._pass !== undefined) {
      hasAnyValues = true;
      internalValueResult.pass = this._pass;
    }
    if (this._pasv !== undefined) {
      hasAnyValues = true;
      internalValueResult.pasv = this._pasv;
    }
    if (this._pasvAddrNeServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.pasvAddrNeServer = this._pasvAddrNeServer;
    }
    if (this._pbsz !== undefined) {
      hasAnyValues = true;
      internalValueResult.pbsz = this._pbsz;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._prot !== undefined) {
      hasAnyValues = true;
      internalValueResult.prot = this._prot;
    }
    if (this._quit !== undefined) {
      hasAnyValues = true;
      internalValueResult.quit = this._quit;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    if (this._requestDontCare !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestDontCare = this._requestDontCare;
    }
    if (this._rsvPersistConnFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsvPersistConnFail = this._rsvPersistConnFail;
    }
    if (this._serConnectingErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serConnectingErr = this._serConnectingErr;
    }
    if (this._serverResponseErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverResponseErr = this._serverResponseErr;
    }
    if (this._site !== undefined) {
      hasAnyValues = true;
      internalValueResult.site = this._site;
    }
    if (this._smpCreateFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.smpCreateFail = this._smpCreateFail;
    }
    if (this._smpV4Fail !== undefined) {
      hasAnyValues = true;
      internalValueResult.smpV4Fail = this._smpV4Fail;
    }
    if (this._smpV6Fail !== undefined) {
      hasAnyValues = true;
      internalValueResult.smpV6Fail = this._smpV6Fail;
    }
    if (this._snatFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatFail = this._snatFail;
    }
    if (this._svrselFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.svrselFail = this._svrselFail;
    }
    if (this._total !== undefined) {
      hasAnyValues = true;
      internalValueResult.total = this._total;
    }
    if (this._unsupportedCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedCommand = this._unsupportedCommand;
    }
    if (this._unsupportedPbszValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedPbszValue = this._unsupportedPbszValue;
    }
    if (this._unsupportedProtValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedProtValue = this._unsupportedProtValue;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbFtpProxyStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adat = undefined;
      this._authFail = undefined;
      this._authReq = undefined;
      this._authSucc = undefined;
      this._authTls = undefined;
      this._authUnsupported = undefined;
      this._badSequence = undefined;
      this._cantFindEprt = undefined;
      this._cantFindEpsv = undefined;
      this._cantFindPasv = undefined;
      this._cantFindPort = undefined;
      this._cc = undefined;
      this._clEstErr = undefined;
      this._clRequestErr = undefined;
      this._clientAuthTls = undefined;
      this._controlToClear = undefined;
      this._controlToSsl = undefined;
      this._curr = undefined;
      this._dataConnStartErr = undefined;
      this._dataCurr = undefined;
      this._dataSendFail = undefined;
      this._dataServConnectedErr = undefined;
      this._dataServConnectingErr = undefined;
      this._dataServerConnFail = undefined;
      this._dataSsl = undefined;
      this._dataTotal = undefined;
      this._drop = undefined;
      this._dsFail = undefined;
      this._dsSucc = undefined;
      this._eprt = undefined;
      this._epsv = undefined;
      this._feat = undefined;
      this._fwdToInternet = undefined;
      this._fwdToSg = undefined;
      this._insertTupleFail = undefined;
      this._invalidStartLine = undefined;
      this._lineMemFreed = undefined;
      this._lineTooLong = undefined;
      this._noRoute = undefined;
      this._open = undefined;
      this._pass = undefined;
      this._pasv = undefined;
      this._pasvAddrNeServer = undefined;
      this._pbsz = undefined;
      this._port = undefined;
      this._prot = undefined;
      this._quit = undefined;
      this._request = undefined;
      this._requestDontCare = undefined;
      this._rsvPersistConnFail = undefined;
      this._serConnectingErr = undefined;
      this._serverResponseErr = undefined;
      this._site = undefined;
      this._smpCreateFail = undefined;
      this._smpV4Fail = undefined;
      this._smpV6Fail = undefined;
      this._snatFail = undefined;
      this._svrselFail = undefined;
      this._total = undefined;
      this._unsupportedCommand = undefined;
      this._unsupportedPbszValue = undefined;
      this._unsupportedProtValue = undefined;
      this._user = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adat = value.adat;
      this._authFail = value.authFail;
      this._authReq = value.authReq;
      this._authSucc = value.authSucc;
      this._authTls = value.authTls;
      this._authUnsupported = value.authUnsupported;
      this._badSequence = value.badSequence;
      this._cantFindEprt = value.cantFindEprt;
      this._cantFindEpsv = value.cantFindEpsv;
      this._cantFindPasv = value.cantFindPasv;
      this._cantFindPort = value.cantFindPort;
      this._cc = value.cc;
      this._clEstErr = value.clEstErr;
      this._clRequestErr = value.clRequestErr;
      this._clientAuthTls = value.clientAuthTls;
      this._controlToClear = value.controlToClear;
      this._controlToSsl = value.controlToSsl;
      this._curr = value.curr;
      this._dataConnStartErr = value.dataConnStartErr;
      this._dataCurr = value.dataCurr;
      this._dataSendFail = value.dataSendFail;
      this._dataServConnectedErr = value.dataServConnectedErr;
      this._dataServConnectingErr = value.dataServConnectingErr;
      this._dataServerConnFail = value.dataServerConnFail;
      this._dataSsl = value.dataSsl;
      this._dataTotal = value.dataTotal;
      this._drop = value.drop;
      this._dsFail = value.dsFail;
      this._dsSucc = value.dsSucc;
      this._eprt = value.eprt;
      this._epsv = value.epsv;
      this._feat = value.feat;
      this._fwdToInternet = value.fwdToInternet;
      this._fwdToSg = value.fwdToSg;
      this._insertTupleFail = value.insertTupleFail;
      this._invalidStartLine = value.invalidStartLine;
      this._lineMemFreed = value.lineMemFreed;
      this._lineTooLong = value.lineTooLong;
      this._noRoute = value.noRoute;
      this._open = value.open;
      this._pass = value.pass;
      this._pasv = value.pasv;
      this._pasvAddrNeServer = value.pasvAddrNeServer;
      this._pbsz = value.pbsz;
      this._port = value.port;
      this._prot = value.prot;
      this._quit = value.quit;
      this._request = value.request;
      this._requestDontCare = value.requestDontCare;
      this._rsvPersistConnFail = value.rsvPersistConnFail;
      this._serConnectingErr = value.serConnectingErr;
      this._serverResponseErr = value.serverResponseErr;
      this._site = value.site;
      this._smpCreateFail = value.smpCreateFail;
      this._smpV4Fail = value.smpV4Fail;
      this._smpV6Fail = value.smpV6Fail;
      this._snatFail = value.snatFail;
      this._svrselFail = value.svrselFail;
      this._total = value.total;
      this._unsupportedCommand = value.unsupportedCommand;
      this._unsupportedPbszValue = value.unsupportedPbszValue;
      this._unsupportedProtValue = value.unsupportedProtValue;
      this._user = value.user;
    }
  }

  // adat - computed: false, optional: true, required: false
  private _adat?: number; 
  public get adat() {
    return this.getNumberAttribute('adat');
  }
  public set adat(value: number) {
    this._adat = value;
  }
  public resetAdat() {
    this._adat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adatInput() {
    return this._adat;
  }

  // auth_fail - computed: false, optional: true, required: false
  private _authFail?: number; 
  public get authFail() {
    return this.getNumberAttribute('auth_fail');
  }
  public set authFail(value: number) {
    this._authFail = value;
  }
  public resetAuthFail() {
    this._authFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authFailInput() {
    return this._authFail;
  }

  // auth_req - computed: false, optional: true, required: false
  private _authReq?: number; 
  public get authReq() {
    return this.getNumberAttribute('auth_req');
  }
  public set authReq(value: number) {
    this._authReq = value;
  }
  public resetAuthReq() {
    this._authReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authReqInput() {
    return this._authReq;
  }

  // auth_succ - computed: false, optional: true, required: false
  private _authSucc?: number; 
  public get authSucc() {
    return this.getNumberAttribute('auth_succ');
  }
  public set authSucc(value: number) {
    this._authSucc = value;
  }
  public resetAuthSucc() {
    this._authSucc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSuccInput() {
    return this._authSucc;
  }

  // auth_tls - computed: false, optional: true, required: false
  private _authTls?: number; 
  public get authTls() {
    return this.getNumberAttribute('auth_tls');
  }
  public set authTls(value: number) {
    this._authTls = value;
  }
  public resetAuthTls() {
    this._authTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTlsInput() {
    return this._authTls;
  }

  // auth_unsupported - computed: false, optional: true, required: false
  private _authUnsupported?: number; 
  public get authUnsupported() {
    return this.getNumberAttribute('auth_unsupported');
  }
  public set authUnsupported(value: number) {
    this._authUnsupported = value;
  }
  public resetAuthUnsupported() {
    this._authUnsupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUnsupportedInput() {
    return this._authUnsupported;
  }

  // bad_sequence - computed: false, optional: true, required: false
  private _badSequence?: number; 
  public get badSequence() {
    return this.getNumberAttribute('bad_sequence');
  }
  public set badSequence(value: number) {
    this._badSequence = value;
  }
  public resetBadSequence() {
    this._badSequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badSequenceInput() {
    return this._badSequence;
  }

  // cant_find_eprt - computed: false, optional: true, required: false
  private _cantFindEprt?: number; 
  public get cantFindEprt() {
    return this.getNumberAttribute('cant_find_eprt');
  }
  public set cantFindEprt(value: number) {
    this._cantFindEprt = value;
  }
  public resetCantFindEprt() {
    this._cantFindEprt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cantFindEprtInput() {
    return this._cantFindEprt;
  }

  // cant_find_epsv - computed: false, optional: true, required: false
  private _cantFindEpsv?: number; 
  public get cantFindEpsv() {
    return this.getNumberAttribute('cant_find_epsv');
  }
  public set cantFindEpsv(value: number) {
    this._cantFindEpsv = value;
  }
  public resetCantFindEpsv() {
    this._cantFindEpsv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cantFindEpsvInput() {
    return this._cantFindEpsv;
  }

  // cant_find_pasv - computed: false, optional: true, required: false
  private _cantFindPasv?: number; 
  public get cantFindPasv() {
    return this.getNumberAttribute('cant_find_pasv');
  }
  public set cantFindPasv(value: number) {
    this._cantFindPasv = value;
  }
  public resetCantFindPasv() {
    this._cantFindPasv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cantFindPasvInput() {
    return this._cantFindPasv;
  }

  // cant_find_port - computed: false, optional: true, required: false
  private _cantFindPort?: number; 
  public get cantFindPort() {
    return this.getNumberAttribute('cant_find_port');
  }
  public set cantFindPort(value: number) {
    this._cantFindPort = value;
  }
  public resetCantFindPort() {
    this._cantFindPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cantFindPortInput() {
    return this._cantFindPort;
  }

  // cc - computed: false, optional: true, required: false
  private _cc?: number; 
  public get cc() {
    return this.getNumberAttribute('cc');
  }
  public set cc(value: number) {
    this._cc = value;
  }
  public resetCc() {
    this._cc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccInput() {
    return this._cc;
  }

  // cl_est_err - computed: false, optional: true, required: false
  private _clEstErr?: number; 
  public get clEstErr() {
    return this.getNumberAttribute('cl_est_err');
  }
  public set clEstErr(value: number) {
    this._clEstErr = value;
  }
  public resetClEstErr() {
    this._clEstErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clEstErrInput() {
    return this._clEstErr;
  }

  // cl_request_err - computed: false, optional: true, required: false
  private _clRequestErr?: number; 
  public get clRequestErr() {
    return this.getNumberAttribute('cl_request_err');
  }
  public set clRequestErr(value: number) {
    this._clRequestErr = value;
  }
  public resetClRequestErr() {
    this._clRequestErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clRequestErrInput() {
    return this._clRequestErr;
  }

  // client_auth_tls - computed: false, optional: true, required: false
  private _clientAuthTls?: number; 
  public get clientAuthTls() {
    return this.getNumberAttribute('client_auth_tls');
  }
  public set clientAuthTls(value: number) {
    this._clientAuthTls = value;
  }
  public resetClientAuthTls() {
    this._clientAuthTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthTlsInput() {
    return this._clientAuthTls;
  }

  // control_to_clear - computed: false, optional: true, required: false
  private _controlToClear?: number; 
  public get controlToClear() {
    return this.getNumberAttribute('control_to_clear');
  }
  public set controlToClear(value: number) {
    this._controlToClear = value;
  }
  public resetControlToClear() {
    this._controlToClear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlToClearInput() {
    return this._controlToClear;
  }

  // control_to_ssl - computed: false, optional: true, required: false
  private _controlToSsl?: number; 
  public get controlToSsl() {
    return this.getNumberAttribute('control_to_ssl');
  }
  public set controlToSsl(value: number) {
    this._controlToSsl = value;
  }
  public resetControlToSsl() {
    this._controlToSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlToSslInput() {
    return this._controlToSsl;
  }

  // curr - computed: false, optional: true, required: false
  private _curr?: number; 
  public get curr() {
    return this.getNumberAttribute('curr');
  }
  public set curr(value: number) {
    this._curr = value;
  }
  public resetCurr() {
    this._curr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currInput() {
    return this._curr;
  }

  // data_conn_start_err - computed: false, optional: true, required: false
  private _dataConnStartErr?: number; 
  public get dataConnStartErr() {
    return this.getNumberAttribute('data_conn_start_err');
  }
  public set dataConnStartErr(value: number) {
    this._dataConnStartErr = value;
  }
  public resetDataConnStartErr() {
    this._dataConnStartErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataConnStartErrInput() {
    return this._dataConnStartErr;
  }

  // data_curr - computed: false, optional: true, required: false
  private _dataCurr?: number; 
  public get dataCurr() {
    return this.getNumberAttribute('data_curr');
  }
  public set dataCurr(value: number) {
    this._dataCurr = value;
  }
  public resetDataCurr() {
    this._dataCurr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCurrInput() {
    return this._dataCurr;
  }

  // data_send_fail - computed: false, optional: true, required: false
  private _dataSendFail?: number; 
  public get dataSendFail() {
    return this.getNumberAttribute('data_send_fail');
  }
  public set dataSendFail(value: number) {
    this._dataSendFail = value;
  }
  public resetDataSendFail() {
    this._dataSendFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSendFailInput() {
    return this._dataSendFail;
  }

  // data_serv_connected_err - computed: false, optional: true, required: false
  private _dataServConnectedErr?: number; 
  public get dataServConnectedErr() {
    return this.getNumberAttribute('data_serv_connected_err');
  }
  public set dataServConnectedErr(value: number) {
    this._dataServConnectedErr = value;
  }
  public resetDataServConnectedErr() {
    this._dataServConnectedErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataServConnectedErrInput() {
    return this._dataServConnectedErr;
  }

  // data_serv_connecting_err - computed: false, optional: true, required: false
  private _dataServConnectingErr?: number; 
  public get dataServConnectingErr() {
    return this.getNumberAttribute('data_serv_connecting_err');
  }
  public set dataServConnectingErr(value: number) {
    this._dataServConnectingErr = value;
  }
  public resetDataServConnectingErr() {
    this._dataServConnectingErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataServConnectingErrInput() {
    return this._dataServConnectingErr;
  }

  // data_server_conn_fail - computed: false, optional: true, required: false
  private _dataServerConnFail?: number; 
  public get dataServerConnFail() {
    return this.getNumberAttribute('data_server_conn_fail');
  }
  public set dataServerConnFail(value: number) {
    this._dataServerConnFail = value;
  }
  public resetDataServerConnFail() {
    this._dataServerConnFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataServerConnFailInput() {
    return this._dataServerConnFail;
  }

  // data_ssl - computed: false, optional: true, required: false
  private _dataSsl?: number; 
  public get dataSsl() {
    return this.getNumberAttribute('data_ssl');
  }
  public set dataSsl(value: number) {
    this._dataSsl = value;
  }
  public resetDataSsl() {
    this._dataSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSslInput() {
    return this._dataSsl;
  }

  // data_total - computed: false, optional: true, required: false
  private _dataTotal?: number; 
  public get dataTotal() {
    return this.getNumberAttribute('data_total');
  }
  public set dataTotal(value: number) {
    this._dataTotal = value;
  }
  public resetDataTotal() {
    this._dataTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTotalInput() {
    return this._dataTotal;
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: number; 
  public get drop() {
    return this.getNumberAttribute('drop');
  }
  public set drop(value: number) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // ds_fail - computed: false, optional: true, required: false
  private _dsFail?: number; 
  public get dsFail() {
    return this.getNumberAttribute('ds_fail');
  }
  public set dsFail(value: number) {
    this._dsFail = value;
  }
  public resetDsFail() {
    this._dsFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsFailInput() {
    return this._dsFail;
  }

  // ds_succ - computed: false, optional: true, required: false
  private _dsSucc?: number; 
  public get dsSucc() {
    return this.getNumberAttribute('ds_succ');
  }
  public set dsSucc(value: number) {
    this._dsSucc = value;
  }
  public resetDsSucc() {
    this._dsSucc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsSuccInput() {
    return this._dsSucc;
  }

  // eprt - computed: false, optional: true, required: false
  private _eprt?: number; 
  public get eprt() {
    return this.getNumberAttribute('eprt');
  }
  public set eprt(value: number) {
    this._eprt = value;
  }
  public resetEprt() {
    this._eprt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eprtInput() {
    return this._eprt;
  }

  // epsv - computed: false, optional: true, required: false
  private _epsv?: number; 
  public get epsv() {
    return this.getNumberAttribute('epsv');
  }
  public set epsv(value: number) {
    this._epsv = value;
  }
  public resetEpsv() {
    this._epsv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epsvInput() {
    return this._epsv;
  }

  // feat - computed: false, optional: true, required: false
  private _feat?: number; 
  public get feat() {
    return this.getNumberAttribute('feat');
  }
  public set feat(value: number) {
    this._feat = value;
  }
  public resetFeat() {
    this._feat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featInput() {
    return this._feat;
  }

  // fwd_to_internet - computed: false, optional: true, required: false
  private _fwdToInternet?: number; 
  public get fwdToInternet() {
    return this.getNumberAttribute('fwd_to_internet');
  }
  public set fwdToInternet(value: number) {
    this._fwdToInternet = value;
  }
  public resetFwdToInternet() {
    this._fwdToInternet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdToInternetInput() {
    return this._fwdToInternet;
  }

  // fwd_to_sg - computed: false, optional: true, required: false
  private _fwdToSg?: number; 
  public get fwdToSg() {
    return this.getNumberAttribute('fwd_to_sg');
  }
  public set fwdToSg(value: number) {
    this._fwdToSg = value;
  }
  public resetFwdToSg() {
    this._fwdToSg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdToSgInput() {
    return this._fwdToSg;
  }

  // insert_tuple_fail - computed: false, optional: true, required: false
  private _insertTupleFail?: number; 
  public get insertTupleFail() {
    return this.getNumberAttribute('insert_tuple_fail');
  }
  public set insertTupleFail(value: number) {
    this._insertTupleFail = value;
  }
  public resetInsertTupleFail() {
    this._insertTupleFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertTupleFailInput() {
    return this._insertTupleFail;
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

  // no_route - computed: false, optional: true, required: false
  private _noRoute?: number; 
  public get noRoute() {
    return this.getNumberAttribute('no_route');
  }
  public set noRoute(value: number) {
    this._noRoute = value;
  }
  public resetNoRoute() {
    this._noRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRouteInput() {
    return this._noRoute;
  }

  // open - computed: false, optional: true, required: false
  private _open?: number; 
  public get open() {
    return this.getNumberAttribute('open');
  }
  public set open(value: number) {
    this._open = value;
  }
  public resetOpen() {
    this._open = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openInput() {
    return this._open;
  }

  // pass - computed: false, optional: true, required: false
  private _pass?: number; 
  public get pass() {
    return this.getNumberAttribute('pass');
  }
  public set pass(value: number) {
    this._pass = value;
  }
  public resetPass() {
    this._pass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passInput() {
    return this._pass;
  }

  // pasv - computed: false, optional: true, required: false
  private _pasv?: number; 
  public get pasv() {
    return this.getNumberAttribute('pasv');
  }
  public set pasv(value: number) {
    this._pasv = value;
  }
  public resetPasv() {
    this._pasv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pasvInput() {
    return this._pasv;
  }

  // pasv_addr_ne_server - computed: false, optional: true, required: false
  private _pasvAddrNeServer?: number; 
  public get pasvAddrNeServer() {
    return this.getNumberAttribute('pasv_addr_ne_server');
  }
  public set pasvAddrNeServer(value: number) {
    this._pasvAddrNeServer = value;
  }
  public resetPasvAddrNeServer() {
    this._pasvAddrNeServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pasvAddrNeServerInput() {
    return this._pasvAddrNeServer;
  }

  // pbsz - computed: false, optional: true, required: false
  private _pbsz?: number; 
  public get pbsz() {
    return this.getNumberAttribute('pbsz');
  }
  public set pbsz(value: number) {
    this._pbsz = value;
  }
  public resetPbsz() {
    this._pbsz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pbszInput() {
    return this._pbsz;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // prot - computed: false, optional: true, required: false
  private _prot?: number; 
  public get prot() {
    return this.getNumberAttribute('prot');
  }
  public set prot(value: number) {
    this._prot = value;
  }
  public resetProt() {
    this._prot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protInput() {
    return this._prot;
  }

  // quit - computed: false, optional: true, required: false
  private _quit?: number; 
  public get quit() {
    return this.getNumberAttribute('quit');
  }
  public set quit(value: number) {
    this._quit = value;
  }
  public resetQuit() {
    this._quit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quitInput() {
    return this._quit;
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

  // request_dont_care - computed: false, optional: true, required: false
  private _requestDontCare?: number; 
  public get requestDontCare() {
    return this.getNumberAttribute('request_dont_care');
  }
  public set requestDontCare(value: number) {
    this._requestDontCare = value;
  }
  public resetRequestDontCare() {
    this._requestDontCare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestDontCareInput() {
    return this._requestDontCare;
  }

  // rsv_persist_conn_fail - computed: false, optional: true, required: false
  private _rsvPersistConnFail?: number; 
  public get rsvPersistConnFail() {
    return this.getNumberAttribute('rsv_persist_conn_fail');
  }
  public set rsvPersistConnFail(value: number) {
    this._rsvPersistConnFail = value;
  }
  public resetRsvPersistConnFail() {
    this._rsvPersistConnFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsvPersistConnFailInput() {
    return this._rsvPersistConnFail;
  }

  // ser_connecting_err - computed: false, optional: true, required: false
  private _serConnectingErr?: number; 
  public get serConnectingErr() {
    return this.getNumberAttribute('ser_connecting_err');
  }
  public set serConnectingErr(value: number) {
    this._serConnectingErr = value;
  }
  public resetSerConnectingErr() {
    this._serConnectingErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serConnectingErrInput() {
    return this._serConnectingErr;
  }

  // server_response_err - computed: false, optional: true, required: false
  private _serverResponseErr?: number; 
  public get serverResponseErr() {
    return this.getNumberAttribute('server_response_err');
  }
  public set serverResponseErr(value: number) {
    this._serverResponseErr = value;
  }
  public resetServerResponseErr() {
    this._serverResponseErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverResponseErrInput() {
    return this._serverResponseErr;
  }

  // site - computed: false, optional: true, required: false
  private _site?: number; 
  public get site() {
    return this.getNumberAttribute('site');
  }
  public set site(value: number) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }

  // smp_create_fail - computed: false, optional: true, required: false
  private _smpCreateFail?: number; 
  public get smpCreateFail() {
    return this.getNumberAttribute('smp_create_fail');
  }
  public set smpCreateFail(value: number) {
    this._smpCreateFail = value;
  }
  public resetSmpCreateFail() {
    this._smpCreateFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpCreateFailInput() {
    return this._smpCreateFail;
  }

  // smp_v4_fail - computed: false, optional: true, required: false
  private _smpV4Fail?: number; 
  public get smpV4Fail() {
    return this.getNumberAttribute('smp_v4_fail');
  }
  public set smpV4Fail(value: number) {
    this._smpV4Fail = value;
  }
  public resetSmpV4Fail() {
    this._smpV4Fail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpV4FailInput() {
    return this._smpV4Fail;
  }

  // smp_v6_fail - computed: false, optional: true, required: false
  private _smpV6Fail?: number; 
  public get smpV6Fail() {
    return this.getNumberAttribute('smp_v6_fail');
  }
  public set smpV6Fail(value: number) {
    this._smpV6Fail = value;
  }
  public resetSmpV6Fail() {
    this._smpV6Fail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpV6FailInput() {
    return this._smpV6Fail;
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

  // svrsel_fail - computed: false, optional: true, required: false
  private _svrselFail?: number; 
  public get svrselFail() {
    return this.getNumberAttribute('svrsel_fail');
  }
  public set svrselFail(value: number) {
    this._svrselFail = value;
  }
  public resetSvrselFail() {
    this._svrselFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svrselFailInput() {
    return this._svrselFail;
  }

  // total - computed: false, optional: true, required: false
  private _total?: number; 
  public get total() {
    return this.getNumberAttribute('total');
  }
  public set total(value: number) {
    this._total = value;
  }
  public resetTotal() {
    this._total = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInput() {
    return this._total;
  }

  // unsupported_command - computed: false, optional: true, required: false
  private _unsupportedCommand?: number; 
  public get unsupportedCommand() {
    return this.getNumberAttribute('unsupported_command');
  }
  public set unsupportedCommand(value: number) {
    this._unsupportedCommand = value;
  }
  public resetUnsupportedCommand() {
    this._unsupportedCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedCommandInput() {
    return this._unsupportedCommand;
  }

  // unsupported_pbsz_value - computed: false, optional: true, required: false
  private _unsupportedPbszValue?: number; 
  public get unsupportedPbszValue() {
    return this.getNumberAttribute('unsupported_pbsz_value');
  }
  public set unsupportedPbszValue(value: number) {
    this._unsupportedPbszValue = value;
  }
  public resetUnsupportedPbszValue() {
    this._unsupportedPbszValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedPbszValueInput() {
    return this._unsupportedPbszValue;
  }

  // unsupported_prot_value - computed: false, optional: true, required: false
  private _unsupportedProtValue?: number; 
  public get unsupportedProtValue() {
    return this.getNumberAttribute('unsupported_prot_value');
  }
  public set unsupportedProtValue(value: number) {
    this._unsupportedProtValue = value;
  }
  public resetUnsupportedProtValue() {
    this._unsupportedProtValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedProtValueInput() {
    return this._unsupportedProtValue;
  }

  // user - computed: false, optional: true, required: false
  private _user?: number; 
  public get user() {
    return this.getNumberAttribute('user');
  }
  public set user(value: number) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats thunder_slb_ftp_proxy_stats}
*/
export class DataThunderSlbFtpProxyStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_ftp_proxy_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbFtpProxyStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbFtpProxyStats to import
  * @param importFromId The id of the existing DataThunderSlbFtpProxyStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbFtpProxyStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_ftp_proxy_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_ftp_proxy_stats thunder_slb_ftp_proxy_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbFtpProxyStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbFtpProxyStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_ftp_proxy_stats',
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
  private _stats = new DataThunderSlbFtpProxyStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbFtpProxyStatsStats) {
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
      stats: dataThunderSlbFtpProxyStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSlbFtpProxyStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbFtpProxyStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
