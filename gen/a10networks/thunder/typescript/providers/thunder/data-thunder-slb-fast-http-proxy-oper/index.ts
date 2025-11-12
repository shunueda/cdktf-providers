// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbFastHttpProxyOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#id DataThunderSlbFastHttpProxyOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#oper DataThunderSlbFastHttpProxyOper#oper}
  */
  readonly oper?: DataThunderSlbFastHttpProxyOperOper;
}
export interface DataThunderSlbFastHttpProxyOperOperFastHttpProxyCpuListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#aflex_lb_reselect DataThunderSlbFastHttpProxyOper#aflex_lb_reselect}
  */
  readonly aflexLbReselect?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#aflex_lb_reselect_ok DataThunderSlbFastHttpProxyOper#aflex_lb_reselect_ok}
  */
  readonly aflexLbReselectOk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#aflex_retry DataThunderSlbFastHttpProxyOper#aflex_retry}
  */
  readonly aflexRetry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#aflex_switching DataThunderSlbFastHttpProxyOper#aflex_switching}
  */
  readonly aflexSwitching?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#aflex_switching_enqueue DataThunderSlbFastHttpProxyOper#aflex_switching_enqueue}
  */
  readonly aflexSwitchingEnqueue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#aflex_switching_ok DataThunderSlbFastHttpProxyOper#aflex_switching_ok}
  */
  readonly aflexSwitchingOk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#asm_cookie_fail DataThunderSlbFastHttpProxyOper#asm_cookie_fail}
  */
  readonly asmCookieFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#asm_cookie_header_fail DataThunderSlbFastHttpProxyOper#asm_cookie_header_fail}
  */
  readonly asmCookieHeaderFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#asm_setcookie_fail DataThunderSlbFastHttpProxyOper#asm_setcookie_fail}
  */
  readonly asmSetcookieFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#asm_setcookie_header_fail DataThunderSlbFastHttpProxyOper#asm_setcookie_header_fail}
  */
  readonly asmSetcookieHeaderFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#cache_rsp DataThunderSlbFastHttpProxyOper#cache_rsp}
  */
  readonly cacheRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#chunk_bad DataThunderSlbFastHttpProxyOper#chunk_bad}
  */
  readonly chunkBad?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#chunk_sz_1k DataThunderSlbFastHttpProxyOper#chunk_sz_1k}
  */
  readonly chunkSz1K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#chunk_sz_2k DataThunderSlbFastHttpProxyOper#chunk_sz_2k}
  */
  readonly chunkSz2K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#chunk_sz_4k DataThunderSlbFastHttpProxyOper#chunk_sz_4k}
  */
  readonly chunkSz4K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#chunk_sz_512 DataThunderSlbFastHttpProxyOper#chunk_sz_512}
  */
  readonly chunkSz512?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#chunk_sz_gt_4k DataThunderSlbFastHttpProxyOper#chunk_sz_gt_4k}
  */
  readonly chunkSzGt4K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#client_req_unexp_flag DataThunderSlbFastHttpProxyOper#client_req_unexp_flag}
  */
  readonly clientReqUnexpFlag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#client_rst DataThunderSlbFastHttpProxyOper#client_rst}
  */
  readonly clientRst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#client_rst_connected DataThunderSlbFastHttpProxyOper#client_rst_connected}
  */
  readonly clientRstConnected?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#client_rst_connecting DataThunderSlbFastHttpProxyOper#client_rst_connecting}
  */
  readonly clientRstConnecting?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#client_rst_request DataThunderSlbFastHttpProxyOper#client_rst_request}
  */
  readonly clientRstRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#client_rst_response DataThunderSlbFastHttpProxyOper#client_rst_response}
  */
  readonly clientRstResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#close_on_ddos DataThunderSlbFastHttpProxyOper#close_on_ddos}
  */
  readonly closeOnDdos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#compress_content_type_excluded DataThunderSlbFastHttpProxyOper#compress_content_type_excluded}
  */
  readonly compressContentTypeExcluded?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#compress_del_accept_enc DataThunderSlbFastHttpProxyOper#compress_del_accept_enc}
  */
  readonly compressDelAcceptEnc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#compress_no_content_type DataThunderSlbFastHttpProxyOper#compress_no_content_type}
  */
  readonly compressNoContentType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#compress_ratio_too_high DataThunderSlbFastHttpProxyOper#compress_ratio_too_high}
  */
  readonly compressRatioTooHigh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#compress_resp_already_compressed DataThunderSlbFastHttpProxyOper#compress_resp_already_compressed}
  */
  readonly compressRespAlreadyCompressed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#compress_resp_lt_min DataThunderSlbFastHttpProxyOper#compress_resp_lt_min}
  */
  readonly compressRespLtMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#compress_resp_no_cl_or_ce DataThunderSlbFastHttpProxyOper#compress_resp_no_cl_or_ce}
  */
  readonly compressRespNoClOrCe?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#compress_rsp DataThunderSlbFastHttpProxyOper#compress_rsp}
  */
  readonly compressRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#compress_rsp_br DataThunderSlbFastHttpProxyOper#compress_rsp_br}
  */
  readonly compressRspBr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#compress_rsp_total DataThunderSlbFastHttpProxyOper#compress_rsp_total}
  */
  readonly compressRspTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#connecting_ack DataThunderSlbFastHttpProxyOper#connecting_ack}
  */
  readonly connectingAck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#connecting_fin DataThunderSlbFastHttpProxyOper#connecting_fin}
  */
  readonly connectingFin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#connecting_fin_ofo DataThunderSlbFastHttpProxyOper#connecting_fin_ofo}
  */
  readonly connectingFinOfo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#connecting_fin_retrans DataThunderSlbFastHttpProxyOper#connecting_fin_retrans}
  */
  readonly connectingFinRetrans?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#connecting_rst DataThunderSlbFastHttpProxyOper#connecting_rst}
  */
  readonly connectingRst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#connecting_rst_ofo DataThunderSlbFastHttpProxyOper#connecting_rst_ofo}
  */
  readonly connectingRstOfo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#connecting_rst_retrans DataThunderSlbFastHttpProxyOper#connecting_rst_retrans}
  */
  readonly connectingRstRetrans?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#cookie_switching DataThunderSlbFastHttpProxyOper#cookie_switching}
  */
  readonly cookieSwitching?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#cookie_switching_enqueue DataThunderSlbFastHttpProxyOper#cookie_switching_enqueue}
  */
  readonly cookieSwitchingEnqueue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#cookie_switching_ok DataThunderSlbFastHttpProxyOper#cookie_switching_ok}
  */
  readonly cookieSwitchingOk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#curr_proxy DataThunderSlbFastHttpProxyOper#curr_proxy}
  */
  readonly currProxy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#full_proxy DataThunderSlbFastHttpProxyOper#full_proxy}
  */
  readonly fullProxy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#full_proxy_fpga_err DataThunderSlbFastHttpProxyOper#full_proxy_fpga_err}
  */
  readonly fullProxyFpgaErr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#full_proxy_pipeline DataThunderSlbFastHttpProxyOper#full_proxy_pipeline}
  */
  readonly fullProxyPipeline?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#full_proxy_post DataThunderSlbFastHttpProxyOper#full_proxy_post}
  */
  readonly fullProxyPost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#full_proxy_put DataThunderSlbFastHttpProxyOper#full_proxy_put}
  */
  readonly fullProxyPut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#fwdreq_fail DataThunderSlbFastHttpProxyOper#fwdreq_fail}
  */
  readonly fwdreqFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#fwdreq_fail_buff DataThunderSlbFastHttpProxyOper#fwdreq_fail_buff}
  */
  readonly fwdreqFailBuff?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#fwdreq_fail_persist DataThunderSlbFastHttpProxyOper#fwdreq_fail_persist}
  */
  readonly fwdreqFailPersist?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#fwdreq_fail_route DataThunderSlbFastHttpProxyOper#fwdreq_fail_route}
  */
  readonly fwdreqFailRoute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#fwdreq_fail_rport DataThunderSlbFastHttpProxyOper#fwdreq_fail_rport}
  */
  readonly fwdreqFailRport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#fwdreq_fail_server DataThunderSlbFastHttpProxyOper#fwdreq_fail_server}
  */
  readonly fwdreqFailServer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#fwdreq_fail_tuple DataThunderSlbFastHttpProxyOper#fwdreq_fail_tuple}
  */
  readonly fwdreqFailTuple?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#fwdreqdata_fail DataThunderSlbFastHttpProxyOper#fwdreqdata_fail}
  */
  readonly fwdreqdataFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#header_delete DataThunderSlbFastHttpProxyOper#header_delete}
  */
  readonly headerDelete?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#header_insert DataThunderSlbFastHttpProxyOper#header_insert}
  */
  readonly headerInsert?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#header_name_too_long DataThunderSlbFastHttpProxyOper#header_name_too_long}
  */
  readonly headerNameTooLong?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#host_switching DataThunderSlbFastHttpProxyOper#host_switching}
  */
  readonly hostSwitching?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#host_switching_enqueue DataThunderSlbFastHttpProxyOper#host_switching_enqueue}
  */
  readonly hostSwitchingEnqueue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#host_switching_ok DataThunderSlbFastHttpProxyOper#host_switching_ok}
  */
  readonly hostSwitchingOk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#http_pkts_ofo DataThunderSlbFastHttpProxyOper#http_pkts_ofo}
  */
  readonly httpPktsOfo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#huge_cookie DataThunderSlbFastHttpProxyOper#huge_cookie}
  */
  readonly hugeCookie?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#huge_cookie_header DataThunderSlbFastHttpProxyOper#huge_cookie_header}
  */
  readonly hugeCookieHeader?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#insert_client_ip DataThunderSlbFastHttpProxyOper#insert_client_ip}
  */
  readonly insertClientIp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#insert_client_port DataThunderSlbFastHttpProxyOper#insert_client_port}
  */
  readonly insertClientPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#invalid_header DataThunderSlbFastHttpProxyOper#invalid_header}
  */
  readonly invalidHeader?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#l4_switching DataThunderSlbFastHttpProxyOper#l4_switching}
  */
  readonly l4Switching?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#l4_switching_enqueue DataThunderSlbFastHttpProxyOper#l4_switching_enqueue}
  */
  readonly l4SwitchingEnqueue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#l4_switching_ok DataThunderSlbFastHttpProxyOper#l4_switching_ok}
  */
  readonly l4SwitchingOk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#large_cookie DataThunderSlbFastHttpProxyOper#large_cookie}
  */
  readonly largeCookie?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#large_cookie_header DataThunderSlbFastHttpProxyOper#large_cookie_header}
  */
  readonly largeCookieHeader?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#lb_switching DataThunderSlbFastHttpProxyOper#lb_switching}
  */
  readonly lbSwitching?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#lb_switching_enqueue DataThunderSlbFastHttpProxyOper#lb_switching_enqueue}
  */
  readonly lbSwitchingEnqueue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#lb_switching_ok DataThunderSlbFastHttpProxyOper#lb_switching_ok}
  */
  readonly lbSwitchingOk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#line_too_long DataThunderSlbFastHttpProxyOper#line_too_long}
  */
  readonly lineTooLong?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#negative_req_remain DataThunderSlbFastHttpProxyOper#negative_req_remain}
  */
  readonly negativeReqRemain?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#negative_resp_remain DataThunderSlbFastHttpProxyOper#negative_resp_remain}
  */
  readonly negativeRespRemain?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#new_svrconn DataThunderSlbFastHttpProxyOper#new_svrconn}
  */
  readonly newSvrconn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#non_http_bypass DataThunderSlbFastHttpProxyOper#non_http_bypass}
  */
  readonly nonHttpBypass?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#noproxy DataThunderSlbFastHttpProxyOper#noproxy}
  */
  readonly noproxy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#notuple DataThunderSlbFastHttpProxyOper#notuple}
  */
  readonly notuple?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#parse_cookie_fail DataThunderSlbFastHttpProxyOper#parse_cookie_fail}
  */
  readonly parseCookieFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#parse_setcookie_fail DataThunderSlbFastHttpProxyOper#parse_setcookie_fail}
  */
  readonly parseSetcookieFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#parsereq_fail DataThunderSlbFastHttpProxyOper#parsereq_fail}
  */
  readonly parsereqFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#pconn_connected DataThunderSlbFastHttpProxyOper#pconn_connected}
  */
  readonly pconnConnected?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#pconn_connecting DataThunderSlbFastHttpProxyOper#pconn_connecting}
  */
  readonly pconnConnecting?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#pconn_connecting_failed DataThunderSlbFastHttpProxyOper#pconn_connecting_failed}
  */
  readonly pconnConnectingFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#pkts_ofo DataThunderSlbFastHttpProxyOper#pkts_ofo}
  */
  readonly pktsOfo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#pkts_retrans DataThunderSlbFastHttpProxyOper#pkts_retrans}
  */
  readonly pktsRetrans?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#pkts_retrans_ack_finwait DataThunderSlbFastHttpProxyOper#pkts_retrans_ack_finwait}
  */
  readonly pktsRetransAckFinwait?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#pkts_retrans_fin DataThunderSlbFastHttpProxyOper#pkts_retrans_fin}
  */
  readonly pktsRetransFin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#pkts_retrans_push DataThunderSlbFastHttpProxyOper#pkts_retrans_push}
  */
  readonly pktsRetransPush?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#pkts_retrans_rst DataThunderSlbFastHttpProxyOper#pkts_retrans_rst}
  */
  readonly pktsRetransRst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req DataThunderSlbFastHttpProxyOper#req}
  */
  readonly req?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_100m DataThunderSlbFastHttpProxyOper#req_100m}
  */
  readonly req100M?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_100u DataThunderSlbFastHttpProxyOper#req_100u}
  */
  readonly req100U?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_10m DataThunderSlbFastHttpProxyOper#req_10m}
  */
  readonly req10M?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_10u DataThunderSlbFastHttpProxyOper#req_10u}
  */
  readonly req10U?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_1m DataThunderSlbFastHttpProxyOper#req_1m}
  */
  readonly req1M?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_1s DataThunderSlbFastHttpProxyOper#req_1s}
  */
  readonly req1S?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_200m DataThunderSlbFastHttpProxyOper#req_200m}
  */
  readonly req200M?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_200u DataThunderSlbFastHttpProxyOper#req_200u}
  */
  readonly req200U?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_20m DataThunderSlbFastHttpProxyOper#req_20m}
  */
  readonly req20M?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_20u DataThunderSlbFastHttpProxyOper#req_20u}
  */
  readonly req20U?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_2m DataThunderSlbFastHttpProxyOper#req_2m}
  */
  readonly req2M?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_2s DataThunderSlbFastHttpProxyOper#req_2s}
  */
  readonly req2S?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_500m DataThunderSlbFastHttpProxyOper#req_500m}
  */
  readonly req500M?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_500u DataThunderSlbFastHttpProxyOper#req_500u}
  */
  readonly req500U?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_50m DataThunderSlbFastHttpProxyOper#req_50m}
  */
  readonly req50M?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_50u DataThunderSlbFastHttpProxyOper#req_50u}
  */
  readonly req50U?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_5m DataThunderSlbFastHttpProxyOper#req_5m}
  */
  readonly req5M?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_5s DataThunderSlbFastHttpProxyOper#req_5s}
  */
  readonly req5S?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_chunk DataThunderSlbFastHttpProxyOper#req_chunk}
  */
  readonly reqChunk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_connect DataThunderSlbFastHttpProxyOper#req_connect}
  */
  readonly reqConnect?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_content_len DataThunderSlbFastHttpProxyOper#req_content_len}
  */
  readonly reqContentLen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_delete DataThunderSlbFastHttpProxyOper#req_delete}
  */
  readonly reqDelete?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_get DataThunderSlbFastHttpProxyOper#req_get}
  */
  readonly reqGet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_head DataThunderSlbFastHttpProxyOper#req_head}
  */
  readonly reqHead?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_http10 DataThunderSlbFastHttpProxyOper#req_http10}
  */
  readonly reqHttp10?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_http10_keepalive DataThunderSlbFastHttpProxyOper#req_http10_keepalive}
  */
  readonly reqHttp10Keepalive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_http11 DataThunderSlbFastHttpProxyOper#req_http11}
  */
  readonly reqHttp11?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_ofo DataThunderSlbFastHttpProxyOper#req_ofo}
  */
  readonly reqOfo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_options DataThunderSlbFastHttpProxyOper#req_options}
  */
  readonly reqOptions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_over_5s DataThunderSlbFastHttpProxyOper#req_over_5s}
  */
  readonly reqOver5S?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_over_limit DataThunderSlbFastHttpProxyOper#req_over_limit}
  */
  readonly reqOverLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_post DataThunderSlbFastHttpProxyOper#req_post}
  */
  readonly reqPost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_put DataThunderSlbFastHttpProxyOper#req_put}
  */
  readonly reqPut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_rate_over_limit DataThunderSlbFastHttpProxyOper#req_rate_over_limit}
  */
  readonly reqRateOverLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_retran DataThunderSlbFastHttpProxyOper#req_retran}
  */
  readonly reqRetran?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_succ DataThunderSlbFastHttpProxyOper#req_succ}
  */
  readonly reqSucc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_sz_16k DataThunderSlbFastHttpProxyOper#req_sz_16k}
  */
  readonly reqSz16K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_sz_1k DataThunderSlbFastHttpProxyOper#req_sz_1k}
  */
  readonly reqSz1K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_sz_256k DataThunderSlbFastHttpProxyOper#req_sz_256k}
  */
  readonly reqSz256K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_sz_2k DataThunderSlbFastHttpProxyOper#req_sz_2k}
  */
  readonly reqSz2K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_sz_32k DataThunderSlbFastHttpProxyOper#req_sz_32k}
  */
  readonly reqSz32K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_sz_4k DataThunderSlbFastHttpProxyOper#req_sz_4k}
  */
  readonly reqSz4K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_sz_64k DataThunderSlbFastHttpProxyOper#req_sz_64k}
  */
  readonly reqSz64K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_sz_8k DataThunderSlbFastHttpProxyOper#req_sz_8k}
  */
  readonly reqSz8K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_sz_gt_256k DataThunderSlbFastHttpProxyOper#req_sz_gt_256k}
  */
  readonly reqSzGt256K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_trace DataThunderSlbFastHttpProxyOper#req_trace}
  */
  readonly reqTrace?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_track DataThunderSlbFastHttpProxyOper#req_track}
  */
  readonly reqTrack?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#req_unknown DataThunderSlbFastHttpProxyOper#req_unknown}
  */
  readonly reqUnknown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_100 DataThunderSlbFastHttpProxyOper#response_100}
  */
  readonly response100?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_101 DataThunderSlbFastHttpProxyOper#response_101}
  */
  readonly response101?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_102 DataThunderSlbFastHttpProxyOper#response_102}
  */
  readonly response102?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_1xx DataThunderSlbFastHttpProxyOper#response_1xx}
  */
  readonly response1Xx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_200 DataThunderSlbFastHttpProxyOper#response_200}
  */
  readonly response200?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_201 DataThunderSlbFastHttpProxyOper#response_201}
  */
  readonly response201?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_202 DataThunderSlbFastHttpProxyOper#response_202}
  */
  readonly response202?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_203 DataThunderSlbFastHttpProxyOper#response_203}
  */
  readonly response203?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_204 DataThunderSlbFastHttpProxyOper#response_204}
  */
  readonly response204?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_205 DataThunderSlbFastHttpProxyOper#response_205}
  */
  readonly response205?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_206 DataThunderSlbFastHttpProxyOper#response_206}
  */
  readonly response206?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_207 DataThunderSlbFastHttpProxyOper#response_207}
  */
  readonly response207?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_2xx DataThunderSlbFastHttpProxyOper#response_2xx}
  */
  readonly response2Xx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_300 DataThunderSlbFastHttpProxyOper#response_300}
  */
  readonly response300?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_301 DataThunderSlbFastHttpProxyOper#response_301}
  */
  readonly response301?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_302 DataThunderSlbFastHttpProxyOper#response_302}
  */
  readonly response302?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_303 DataThunderSlbFastHttpProxyOper#response_303}
  */
  readonly response303?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_304 DataThunderSlbFastHttpProxyOper#response_304}
  */
  readonly response304?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_305 DataThunderSlbFastHttpProxyOper#response_305}
  */
  readonly response305?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_306 DataThunderSlbFastHttpProxyOper#response_306}
  */
  readonly response306?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_307 DataThunderSlbFastHttpProxyOper#response_307}
  */
  readonly response307?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_3xx DataThunderSlbFastHttpProxyOper#response_3xx}
  */
  readonly response3Xx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_400 DataThunderSlbFastHttpProxyOper#response_400}
  */
  readonly response400?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_401 DataThunderSlbFastHttpProxyOper#response_401}
  */
  readonly response401?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_402 DataThunderSlbFastHttpProxyOper#response_402}
  */
  readonly response402?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_403 DataThunderSlbFastHttpProxyOper#response_403}
  */
  readonly response403?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_404 DataThunderSlbFastHttpProxyOper#response_404}
  */
  readonly response404?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_405 DataThunderSlbFastHttpProxyOper#response_405}
  */
  readonly response405?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_406 DataThunderSlbFastHttpProxyOper#response_406}
  */
  readonly response406?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_407 DataThunderSlbFastHttpProxyOper#response_407}
  */
  readonly response407?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_408 DataThunderSlbFastHttpProxyOper#response_408}
  */
  readonly response408?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_409 DataThunderSlbFastHttpProxyOper#response_409}
  */
  readonly response409?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_410 DataThunderSlbFastHttpProxyOper#response_410}
  */
  readonly response410?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_411 DataThunderSlbFastHttpProxyOper#response_411}
  */
  readonly response411?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_412 DataThunderSlbFastHttpProxyOper#response_412}
  */
  readonly response412?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_413 DataThunderSlbFastHttpProxyOper#response_413}
  */
  readonly response413?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_414 DataThunderSlbFastHttpProxyOper#response_414}
  */
  readonly response414?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_415 DataThunderSlbFastHttpProxyOper#response_415}
  */
  readonly response415?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_416 DataThunderSlbFastHttpProxyOper#response_416}
  */
  readonly response416?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_417 DataThunderSlbFastHttpProxyOper#response_417}
  */
  readonly response417?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_418 DataThunderSlbFastHttpProxyOper#response_418}
  */
  readonly response418?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_422 DataThunderSlbFastHttpProxyOper#response_422}
  */
  readonly response422?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_423 DataThunderSlbFastHttpProxyOper#response_423}
  */
  readonly response423?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_424 DataThunderSlbFastHttpProxyOper#response_424}
  */
  readonly response424?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_425 DataThunderSlbFastHttpProxyOper#response_425}
  */
  readonly response425?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_426 DataThunderSlbFastHttpProxyOper#response_426}
  */
  readonly response426?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_449 DataThunderSlbFastHttpProxyOper#response_449}
  */
  readonly response449?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_450 DataThunderSlbFastHttpProxyOper#response_450}
  */
  readonly response450?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_4xx DataThunderSlbFastHttpProxyOper#response_4xx}
  */
  readonly response4Xx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_500 DataThunderSlbFastHttpProxyOper#response_500}
  */
  readonly response500?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_501 DataThunderSlbFastHttpProxyOper#response_501}
  */
  readonly response501?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_502 DataThunderSlbFastHttpProxyOper#response_502}
  */
  readonly response502?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_503 DataThunderSlbFastHttpProxyOper#response_503}
  */
  readonly response503?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_504 DataThunderSlbFastHttpProxyOper#response_504}
  */
  readonly response504?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_505 DataThunderSlbFastHttpProxyOper#response_505}
  */
  readonly response505?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_506 DataThunderSlbFastHttpProxyOper#response_506}
  */
  readonly response506?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_507 DataThunderSlbFastHttpProxyOper#response_507}
  */
  readonly response507?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_508 DataThunderSlbFastHttpProxyOper#response_508}
  */
  readonly response508?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_509 DataThunderSlbFastHttpProxyOper#response_509}
  */
  readonly response509?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_510 DataThunderSlbFastHttpProxyOper#response_510}
  */
  readonly response510?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_5xx DataThunderSlbFastHttpProxyOper#response_5xx}
  */
  readonly response5Xx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_6xx DataThunderSlbFastHttpProxyOper#response_6xx}
  */
  readonly response6Xx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_http10 DataThunderSlbFastHttpProxyOper#response_http10}
  */
  readonly responseHttp10?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_http11 DataThunderSlbFastHttpProxyOper#response_http11}
  */
  readonly responseHttp11?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#response_unknown DataThunderSlbFastHttpProxyOper#response_unknown}
  */
  readonly responseUnknown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#retry_503 DataThunderSlbFastHttpProxyOper#retry_503}
  */
  readonly retry503?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#rsp_chunk DataThunderSlbFastHttpProxyOper#rsp_chunk}
  */
  readonly rspChunk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#rsp_content_len DataThunderSlbFastHttpProxyOper#rsp_content_len}
  */
  readonly rspContentLen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#rsp_sz_16k DataThunderSlbFastHttpProxyOper#rsp_sz_16k}
  */
  readonly rspSz16K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#rsp_sz_1k DataThunderSlbFastHttpProxyOper#rsp_sz_1k}
  */
  readonly rspSz1K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#rsp_sz_256k DataThunderSlbFastHttpProxyOper#rsp_sz_256k}
  */
  readonly rspSz256K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#rsp_sz_2k DataThunderSlbFastHttpProxyOper#rsp_sz_2k}
  */
  readonly rspSz2K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#rsp_sz_32k DataThunderSlbFastHttpProxyOper#rsp_sz_32k}
  */
  readonly rspSz32K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#rsp_sz_4k DataThunderSlbFastHttpProxyOper#rsp_sz_4k}
  */
  readonly rspSz4K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#rsp_sz_64k DataThunderSlbFastHttpProxyOper#rsp_sz_64k}
  */
  readonly rspSz64K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#rsp_sz_8k DataThunderSlbFastHttpProxyOper#rsp_sz_8k}
  */
  readonly rspSz8K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#rsp_sz_gt_256k DataThunderSlbFastHttpProxyOper#rsp_sz_gt_256k}
  */
  readonly rspSzGt256K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#server_resel DataThunderSlbFastHttpProxyOper#server_resel}
  */
  readonly serverResel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#server_resel_failed DataThunderSlbFastHttpProxyOper#server_resel_failed}
  */
  readonly serverReselFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#server_rst DataThunderSlbFastHttpProxyOper#server_rst}
  */
  readonly serverRst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#server_rst_connected DataThunderSlbFastHttpProxyOper#server_rst_connected}
  */
  readonly serverRstConnected?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#server_rst_connecting DataThunderSlbFastHttpProxyOper#server_rst_connecting}
  */
  readonly serverRstConnecting?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#server_rst_request DataThunderSlbFastHttpProxyOper#server_rst_request}
  */
  readonly serverRstRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#server_rst_response DataThunderSlbFastHttpProxyOper#server_rst_response}
  */
  readonly serverRstResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#skip_insert_client_ip DataThunderSlbFastHttpProxyOper#skip_insert_client_ip}
  */
  readonly skipInsertClientIp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#skip_insert_client_port DataThunderSlbFastHttpProxyOper#skip_insert_client_port}
  */
  readonly skipInsertClientPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#snat_fail DataThunderSlbFastHttpProxyOper#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#stale_sess DataThunderSlbFastHttpProxyOper#stale_sess}
  */
  readonly staleSess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#svr_prem_close DataThunderSlbFastHttpProxyOper#svr_prem_close}
  */
  readonly svrPremClose?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#svrsel_fail DataThunderSlbFastHttpProxyOper#svrsel_fail}
  */
  readonly svrselFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#tcpoutrst DataThunderSlbFastHttpProxyOper#tcpoutrst}
  */
  readonly tcpoutrst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#too_many_headers DataThunderSlbFastHttpProxyOper#too_many_headers}
  */
  readonly tooManyHeaders?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#total_proxy DataThunderSlbFastHttpProxyOper#total_proxy}
  */
  readonly totalProxy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#url_switching DataThunderSlbFastHttpProxyOper#url_switching}
  */
  readonly urlSwitching?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#url_switching_enqueue DataThunderSlbFastHttpProxyOper#url_switching_enqueue}
  */
  readonly urlSwitchingEnqueue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#url_switching_ok DataThunderSlbFastHttpProxyOper#url_switching_ok}
  */
  readonly urlSwitchingOk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#wrong_resp_header DataThunderSlbFastHttpProxyOper#wrong_resp_header}
  */
  readonly wrongRespHeader?: number;
}

export function dataThunderSlbFastHttpProxyOperOperFastHttpProxyCpuListStructToTerraform(struct?: DataThunderSlbFastHttpProxyOperOperFastHttpProxyCpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aflex_lb_reselect: cdktf.numberToTerraform(struct!.aflexLbReselect),
    aflex_lb_reselect_ok: cdktf.numberToTerraform(struct!.aflexLbReselectOk),
    aflex_retry: cdktf.numberToTerraform(struct!.aflexRetry),
    aflex_switching: cdktf.numberToTerraform(struct!.aflexSwitching),
    aflex_switching_enqueue: cdktf.numberToTerraform(struct!.aflexSwitchingEnqueue),
    aflex_switching_ok: cdktf.numberToTerraform(struct!.aflexSwitchingOk),
    asm_cookie_fail: cdktf.numberToTerraform(struct!.asmCookieFail),
    asm_cookie_header_fail: cdktf.numberToTerraform(struct!.asmCookieHeaderFail),
    asm_setcookie_fail: cdktf.numberToTerraform(struct!.asmSetcookieFail),
    asm_setcookie_header_fail: cdktf.numberToTerraform(struct!.asmSetcookieHeaderFail),
    cache_rsp: cdktf.numberToTerraform(struct!.cacheRsp),
    chunk_bad: cdktf.numberToTerraform(struct!.chunkBad),
    chunk_sz_1k: cdktf.numberToTerraform(struct!.chunkSz1K),
    chunk_sz_2k: cdktf.numberToTerraform(struct!.chunkSz2K),
    chunk_sz_4k: cdktf.numberToTerraform(struct!.chunkSz4K),
    chunk_sz_512: cdktf.numberToTerraform(struct!.chunkSz512),
    chunk_sz_gt_4k: cdktf.numberToTerraform(struct!.chunkSzGt4K),
    client_req_unexp_flag: cdktf.numberToTerraform(struct!.clientReqUnexpFlag),
    client_rst: cdktf.numberToTerraform(struct!.clientRst),
    client_rst_connected: cdktf.numberToTerraform(struct!.clientRstConnected),
    client_rst_connecting: cdktf.numberToTerraform(struct!.clientRstConnecting),
    client_rst_request: cdktf.numberToTerraform(struct!.clientRstRequest),
    client_rst_response: cdktf.numberToTerraform(struct!.clientRstResponse),
    close_on_ddos: cdktf.numberToTerraform(struct!.closeOnDdos),
    compress_content_type_excluded: cdktf.numberToTerraform(struct!.compressContentTypeExcluded),
    compress_del_accept_enc: cdktf.numberToTerraform(struct!.compressDelAcceptEnc),
    compress_no_content_type: cdktf.numberToTerraform(struct!.compressNoContentType),
    compress_ratio_too_high: cdktf.numberToTerraform(struct!.compressRatioTooHigh),
    compress_resp_already_compressed: cdktf.numberToTerraform(struct!.compressRespAlreadyCompressed),
    compress_resp_lt_min: cdktf.numberToTerraform(struct!.compressRespLtMin),
    compress_resp_no_cl_or_ce: cdktf.numberToTerraform(struct!.compressRespNoClOrCe),
    compress_rsp: cdktf.numberToTerraform(struct!.compressRsp),
    compress_rsp_br: cdktf.numberToTerraform(struct!.compressRspBr),
    compress_rsp_total: cdktf.numberToTerraform(struct!.compressRspTotal),
    connecting_ack: cdktf.numberToTerraform(struct!.connectingAck),
    connecting_fin: cdktf.numberToTerraform(struct!.connectingFin),
    connecting_fin_ofo: cdktf.numberToTerraform(struct!.connectingFinOfo),
    connecting_fin_retrans: cdktf.numberToTerraform(struct!.connectingFinRetrans),
    connecting_rst: cdktf.numberToTerraform(struct!.connectingRst),
    connecting_rst_ofo: cdktf.numberToTerraform(struct!.connectingRstOfo),
    connecting_rst_retrans: cdktf.numberToTerraform(struct!.connectingRstRetrans),
    cookie_switching: cdktf.numberToTerraform(struct!.cookieSwitching),
    cookie_switching_enqueue: cdktf.numberToTerraform(struct!.cookieSwitchingEnqueue),
    cookie_switching_ok: cdktf.numberToTerraform(struct!.cookieSwitchingOk),
    curr_proxy: cdktf.numberToTerraform(struct!.currProxy),
    full_proxy: cdktf.numberToTerraform(struct!.fullProxy),
    full_proxy_fpga_err: cdktf.numberToTerraform(struct!.fullProxyFpgaErr),
    full_proxy_pipeline: cdktf.numberToTerraform(struct!.fullProxyPipeline),
    full_proxy_post: cdktf.numberToTerraform(struct!.fullProxyPost),
    full_proxy_put: cdktf.numberToTerraform(struct!.fullProxyPut),
    fwdreq_fail: cdktf.numberToTerraform(struct!.fwdreqFail),
    fwdreq_fail_buff: cdktf.numberToTerraform(struct!.fwdreqFailBuff),
    fwdreq_fail_persist: cdktf.numberToTerraform(struct!.fwdreqFailPersist),
    fwdreq_fail_route: cdktf.numberToTerraform(struct!.fwdreqFailRoute),
    fwdreq_fail_rport: cdktf.numberToTerraform(struct!.fwdreqFailRport),
    fwdreq_fail_server: cdktf.numberToTerraform(struct!.fwdreqFailServer),
    fwdreq_fail_tuple: cdktf.numberToTerraform(struct!.fwdreqFailTuple),
    fwdreqdata_fail: cdktf.numberToTerraform(struct!.fwdreqdataFail),
    header_delete: cdktf.numberToTerraform(struct!.headerDelete),
    header_insert: cdktf.numberToTerraform(struct!.headerInsert),
    header_name_too_long: cdktf.numberToTerraform(struct!.headerNameTooLong),
    host_switching: cdktf.numberToTerraform(struct!.hostSwitching),
    host_switching_enqueue: cdktf.numberToTerraform(struct!.hostSwitchingEnqueue),
    host_switching_ok: cdktf.numberToTerraform(struct!.hostSwitchingOk),
    http_pkts_ofo: cdktf.numberToTerraform(struct!.httpPktsOfo),
    huge_cookie: cdktf.numberToTerraform(struct!.hugeCookie),
    huge_cookie_header: cdktf.numberToTerraform(struct!.hugeCookieHeader),
    insert_client_ip: cdktf.numberToTerraform(struct!.insertClientIp),
    insert_client_port: cdktf.numberToTerraform(struct!.insertClientPort),
    invalid_header: cdktf.numberToTerraform(struct!.invalidHeader),
    l4_switching: cdktf.numberToTerraform(struct!.l4Switching),
    l4_switching_enqueue: cdktf.numberToTerraform(struct!.l4SwitchingEnqueue),
    l4_switching_ok: cdktf.numberToTerraform(struct!.l4SwitchingOk),
    large_cookie: cdktf.numberToTerraform(struct!.largeCookie),
    large_cookie_header: cdktf.numberToTerraform(struct!.largeCookieHeader),
    lb_switching: cdktf.numberToTerraform(struct!.lbSwitching),
    lb_switching_enqueue: cdktf.numberToTerraform(struct!.lbSwitchingEnqueue),
    lb_switching_ok: cdktf.numberToTerraform(struct!.lbSwitchingOk),
    line_too_long: cdktf.numberToTerraform(struct!.lineTooLong),
    negative_req_remain: cdktf.numberToTerraform(struct!.negativeReqRemain),
    negative_resp_remain: cdktf.numberToTerraform(struct!.negativeRespRemain),
    new_svrconn: cdktf.numberToTerraform(struct!.newSvrconn),
    non_http_bypass: cdktf.numberToTerraform(struct!.nonHttpBypass),
    noproxy: cdktf.numberToTerraform(struct!.noproxy),
    notuple: cdktf.numberToTerraform(struct!.notuple),
    parse_cookie_fail: cdktf.numberToTerraform(struct!.parseCookieFail),
    parse_setcookie_fail: cdktf.numberToTerraform(struct!.parseSetcookieFail),
    parsereq_fail: cdktf.numberToTerraform(struct!.parsereqFail),
    pconn_connected: cdktf.numberToTerraform(struct!.pconnConnected),
    pconn_connecting: cdktf.numberToTerraform(struct!.pconnConnecting),
    pconn_connecting_failed: cdktf.numberToTerraform(struct!.pconnConnectingFailed),
    pkts_ofo: cdktf.numberToTerraform(struct!.pktsOfo),
    pkts_retrans: cdktf.numberToTerraform(struct!.pktsRetrans),
    pkts_retrans_ack_finwait: cdktf.numberToTerraform(struct!.pktsRetransAckFinwait),
    pkts_retrans_fin: cdktf.numberToTerraform(struct!.pktsRetransFin),
    pkts_retrans_push: cdktf.numberToTerraform(struct!.pktsRetransPush),
    pkts_retrans_rst: cdktf.numberToTerraform(struct!.pktsRetransRst),
    req: cdktf.numberToTerraform(struct!.req),
    req_100m: cdktf.numberToTerraform(struct!.req100M),
    req_100u: cdktf.numberToTerraform(struct!.req100U),
    req_10m: cdktf.numberToTerraform(struct!.req10M),
    req_10u: cdktf.numberToTerraform(struct!.req10U),
    req_1m: cdktf.numberToTerraform(struct!.req1M),
    req_1s: cdktf.numberToTerraform(struct!.req1S),
    req_200m: cdktf.numberToTerraform(struct!.req200M),
    req_200u: cdktf.numberToTerraform(struct!.req200U),
    req_20m: cdktf.numberToTerraform(struct!.req20M),
    req_20u: cdktf.numberToTerraform(struct!.req20U),
    req_2m: cdktf.numberToTerraform(struct!.req2M),
    req_2s: cdktf.numberToTerraform(struct!.req2S),
    req_500m: cdktf.numberToTerraform(struct!.req500M),
    req_500u: cdktf.numberToTerraform(struct!.req500U),
    req_50m: cdktf.numberToTerraform(struct!.req50M),
    req_50u: cdktf.numberToTerraform(struct!.req50U),
    req_5m: cdktf.numberToTerraform(struct!.req5M),
    req_5s: cdktf.numberToTerraform(struct!.req5S),
    req_chunk: cdktf.numberToTerraform(struct!.reqChunk),
    req_connect: cdktf.numberToTerraform(struct!.reqConnect),
    req_content_len: cdktf.numberToTerraform(struct!.reqContentLen),
    req_delete: cdktf.numberToTerraform(struct!.reqDelete),
    req_get: cdktf.numberToTerraform(struct!.reqGet),
    req_head: cdktf.numberToTerraform(struct!.reqHead),
    req_http10: cdktf.numberToTerraform(struct!.reqHttp10),
    req_http10_keepalive: cdktf.numberToTerraform(struct!.reqHttp10Keepalive),
    req_http11: cdktf.numberToTerraform(struct!.reqHttp11),
    req_ofo: cdktf.numberToTerraform(struct!.reqOfo),
    req_options: cdktf.numberToTerraform(struct!.reqOptions),
    req_over_5s: cdktf.numberToTerraform(struct!.reqOver5S),
    req_over_limit: cdktf.numberToTerraform(struct!.reqOverLimit),
    req_post: cdktf.numberToTerraform(struct!.reqPost),
    req_put: cdktf.numberToTerraform(struct!.reqPut),
    req_rate_over_limit: cdktf.numberToTerraform(struct!.reqRateOverLimit),
    req_retran: cdktf.numberToTerraform(struct!.reqRetran),
    req_succ: cdktf.numberToTerraform(struct!.reqSucc),
    req_sz_16k: cdktf.numberToTerraform(struct!.reqSz16K),
    req_sz_1k: cdktf.numberToTerraform(struct!.reqSz1K),
    req_sz_256k: cdktf.numberToTerraform(struct!.reqSz256K),
    req_sz_2k: cdktf.numberToTerraform(struct!.reqSz2K),
    req_sz_32k: cdktf.numberToTerraform(struct!.reqSz32K),
    req_sz_4k: cdktf.numberToTerraform(struct!.reqSz4K),
    req_sz_64k: cdktf.numberToTerraform(struct!.reqSz64K),
    req_sz_8k: cdktf.numberToTerraform(struct!.reqSz8K),
    req_sz_gt_256k: cdktf.numberToTerraform(struct!.reqSzGt256K),
    req_trace: cdktf.numberToTerraform(struct!.reqTrace),
    req_track: cdktf.numberToTerraform(struct!.reqTrack),
    req_unknown: cdktf.numberToTerraform(struct!.reqUnknown),
    response_100: cdktf.numberToTerraform(struct!.response100),
    response_101: cdktf.numberToTerraform(struct!.response101),
    response_102: cdktf.numberToTerraform(struct!.response102),
    response_1xx: cdktf.numberToTerraform(struct!.response1Xx),
    response_200: cdktf.numberToTerraform(struct!.response200),
    response_201: cdktf.numberToTerraform(struct!.response201),
    response_202: cdktf.numberToTerraform(struct!.response202),
    response_203: cdktf.numberToTerraform(struct!.response203),
    response_204: cdktf.numberToTerraform(struct!.response204),
    response_205: cdktf.numberToTerraform(struct!.response205),
    response_206: cdktf.numberToTerraform(struct!.response206),
    response_207: cdktf.numberToTerraform(struct!.response207),
    response_2xx: cdktf.numberToTerraform(struct!.response2Xx),
    response_300: cdktf.numberToTerraform(struct!.response300),
    response_301: cdktf.numberToTerraform(struct!.response301),
    response_302: cdktf.numberToTerraform(struct!.response302),
    response_303: cdktf.numberToTerraform(struct!.response303),
    response_304: cdktf.numberToTerraform(struct!.response304),
    response_305: cdktf.numberToTerraform(struct!.response305),
    response_306: cdktf.numberToTerraform(struct!.response306),
    response_307: cdktf.numberToTerraform(struct!.response307),
    response_3xx: cdktf.numberToTerraform(struct!.response3Xx),
    response_400: cdktf.numberToTerraform(struct!.response400),
    response_401: cdktf.numberToTerraform(struct!.response401),
    response_402: cdktf.numberToTerraform(struct!.response402),
    response_403: cdktf.numberToTerraform(struct!.response403),
    response_404: cdktf.numberToTerraform(struct!.response404),
    response_405: cdktf.numberToTerraform(struct!.response405),
    response_406: cdktf.numberToTerraform(struct!.response406),
    response_407: cdktf.numberToTerraform(struct!.response407),
    response_408: cdktf.numberToTerraform(struct!.response408),
    response_409: cdktf.numberToTerraform(struct!.response409),
    response_410: cdktf.numberToTerraform(struct!.response410),
    response_411: cdktf.numberToTerraform(struct!.response411),
    response_412: cdktf.numberToTerraform(struct!.response412),
    response_413: cdktf.numberToTerraform(struct!.response413),
    response_414: cdktf.numberToTerraform(struct!.response414),
    response_415: cdktf.numberToTerraform(struct!.response415),
    response_416: cdktf.numberToTerraform(struct!.response416),
    response_417: cdktf.numberToTerraform(struct!.response417),
    response_418: cdktf.numberToTerraform(struct!.response418),
    response_422: cdktf.numberToTerraform(struct!.response422),
    response_423: cdktf.numberToTerraform(struct!.response423),
    response_424: cdktf.numberToTerraform(struct!.response424),
    response_425: cdktf.numberToTerraform(struct!.response425),
    response_426: cdktf.numberToTerraform(struct!.response426),
    response_449: cdktf.numberToTerraform(struct!.response449),
    response_450: cdktf.numberToTerraform(struct!.response450),
    response_4xx: cdktf.numberToTerraform(struct!.response4Xx),
    response_500: cdktf.numberToTerraform(struct!.response500),
    response_501: cdktf.numberToTerraform(struct!.response501),
    response_502: cdktf.numberToTerraform(struct!.response502),
    response_503: cdktf.numberToTerraform(struct!.response503),
    response_504: cdktf.numberToTerraform(struct!.response504),
    response_505: cdktf.numberToTerraform(struct!.response505),
    response_506: cdktf.numberToTerraform(struct!.response506),
    response_507: cdktf.numberToTerraform(struct!.response507),
    response_508: cdktf.numberToTerraform(struct!.response508),
    response_509: cdktf.numberToTerraform(struct!.response509),
    response_510: cdktf.numberToTerraform(struct!.response510),
    response_5xx: cdktf.numberToTerraform(struct!.response5Xx),
    response_6xx: cdktf.numberToTerraform(struct!.response6Xx),
    response_http10: cdktf.numberToTerraform(struct!.responseHttp10),
    response_http11: cdktf.numberToTerraform(struct!.responseHttp11),
    response_unknown: cdktf.numberToTerraform(struct!.responseUnknown),
    retry_503: cdktf.numberToTerraform(struct!.retry503),
    rsp_chunk: cdktf.numberToTerraform(struct!.rspChunk),
    rsp_content_len: cdktf.numberToTerraform(struct!.rspContentLen),
    rsp_sz_16k: cdktf.numberToTerraform(struct!.rspSz16K),
    rsp_sz_1k: cdktf.numberToTerraform(struct!.rspSz1K),
    rsp_sz_256k: cdktf.numberToTerraform(struct!.rspSz256K),
    rsp_sz_2k: cdktf.numberToTerraform(struct!.rspSz2K),
    rsp_sz_32k: cdktf.numberToTerraform(struct!.rspSz32K),
    rsp_sz_4k: cdktf.numberToTerraform(struct!.rspSz4K),
    rsp_sz_64k: cdktf.numberToTerraform(struct!.rspSz64K),
    rsp_sz_8k: cdktf.numberToTerraform(struct!.rspSz8K),
    rsp_sz_gt_256k: cdktf.numberToTerraform(struct!.rspSzGt256K),
    server_resel: cdktf.numberToTerraform(struct!.serverResel),
    server_resel_failed: cdktf.numberToTerraform(struct!.serverReselFailed),
    server_rst: cdktf.numberToTerraform(struct!.serverRst),
    server_rst_connected: cdktf.numberToTerraform(struct!.serverRstConnected),
    server_rst_connecting: cdktf.numberToTerraform(struct!.serverRstConnecting),
    server_rst_request: cdktf.numberToTerraform(struct!.serverRstRequest),
    server_rst_response: cdktf.numberToTerraform(struct!.serverRstResponse),
    skip_insert_client_ip: cdktf.numberToTerraform(struct!.skipInsertClientIp),
    skip_insert_client_port: cdktf.numberToTerraform(struct!.skipInsertClientPort),
    snat_fail: cdktf.numberToTerraform(struct!.snatFail),
    stale_sess: cdktf.numberToTerraform(struct!.staleSess),
    svr_prem_close: cdktf.numberToTerraform(struct!.svrPremClose),
    svrsel_fail: cdktf.numberToTerraform(struct!.svrselFail),
    tcpoutrst: cdktf.numberToTerraform(struct!.tcpoutrst),
    too_many_headers: cdktf.numberToTerraform(struct!.tooManyHeaders),
    total_proxy: cdktf.numberToTerraform(struct!.totalProxy),
    url_switching: cdktf.numberToTerraform(struct!.urlSwitching),
    url_switching_enqueue: cdktf.numberToTerraform(struct!.urlSwitchingEnqueue),
    url_switching_ok: cdktf.numberToTerraform(struct!.urlSwitchingOk),
    wrong_resp_header: cdktf.numberToTerraform(struct!.wrongRespHeader),
  }
}


export function dataThunderSlbFastHttpProxyOperOperFastHttpProxyCpuListStructToHclTerraform(struct?: DataThunderSlbFastHttpProxyOperOperFastHttpProxyCpuListStruct | cdktf.IResolvable): any {
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
    aflex_retry: {
      value: cdktf.numberToHclTerraform(struct!.aflexRetry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_switching: {
      value: cdktf.numberToHclTerraform(struct!.aflexSwitching),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_switching_enqueue: {
      value: cdktf.numberToHclTerraform(struct!.aflexSwitchingEnqueue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_switching_ok: {
      value: cdktf.numberToHclTerraform(struct!.aflexSwitchingOk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asm_cookie_fail: {
      value: cdktf.numberToHclTerraform(struct!.asmCookieFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asm_cookie_header_fail: {
      value: cdktf.numberToHclTerraform(struct!.asmCookieHeaderFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asm_setcookie_fail: {
      value: cdktf.numberToHclTerraform(struct!.asmSetcookieFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asm_setcookie_header_fail: {
      value: cdktf.numberToHclTerraform(struct!.asmSetcookieHeaderFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_rsp: {
      value: cdktf.numberToHclTerraform(struct!.cacheRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chunk_bad: {
      value: cdktf.numberToHclTerraform(struct!.chunkBad),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chunk_sz_1k: {
      value: cdktf.numberToHclTerraform(struct!.chunkSz1K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chunk_sz_2k: {
      value: cdktf.numberToHclTerraform(struct!.chunkSz2K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chunk_sz_4k: {
      value: cdktf.numberToHclTerraform(struct!.chunkSz4K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chunk_sz_512: {
      value: cdktf.numberToHclTerraform(struct!.chunkSz512),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chunk_sz_gt_4k: {
      value: cdktf.numberToHclTerraform(struct!.chunkSzGt4K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_req_unexp_flag: {
      value: cdktf.numberToHclTerraform(struct!.clientReqUnexpFlag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_rst: {
      value: cdktf.numberToHclTerraform(struct!.clientRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_rst_connected: {
      value: cdktf.numberToHclTerraform(struct!.clientRstConnected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_rst_connecting: {
      value: cdktf.numberToHclTerraform(struct!.clientRstConnecting),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_rst_request: {
      value: cdktf.numberToHclTerraform(struct!.clientRstRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_rst_response: {
      value: cdktf.numberToHclTerraform(struct!.clientRstResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    close_on_ddos: {
      value: cdktf.numberToHclTerraform(struct!.closeOnDdos),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compress_content_type_excluded: {
      value: cdktf.numberToHclTerraform(struct!.compressContentTypeExcluded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compress_del_accept_enc: {
      value: cdktf.numberToHclTerraform(struct!.compressDelAcceptEnc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compress_no_content_type: {
      value: cdktf.numberToHclTerraform(struct!.compressNoContentType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compress_ratio_too_high: {
      value: cdktf.numberToHclTerraform(struct!.compressRatioTooHigh),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compress_resp_already_compressed: {
      value: cdktf.numberToHclTerraform(struct!.compressRespAlreadyCompressed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compress_resp_lt_min: {
      value: cdktf.numberToHclTerraform(struct!.compressRespLtMin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compress_resp_no_cl_or_ce: {
      value: cdktf.numberToHclTerraform(struct!.compressRespNoClOrCe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compress_rsp: {
      value: cdktf.numberToHclTerraform(struct!.compressRsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compress_rsp_br: {
      value: cdktf.numberToHclTerraform(struct!.compressRspBr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compress_rsp_total: {
      value: cdktf.numberToHclTerraform(struct!.compressRspTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connecting_ack: {
      value: cdktf.numberToHclTerraform(struct!.connectingAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connecting_fin: {
      value: cdktf.numberToHclTerraform(struct!.connectingFin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connecting_fin_ofo: {
      value: cdktf.numberToHclTerraform(struct!.connectingFinOfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connecting_fin_retrans: {
      value: cdktf.numberToHclTerraform(struct!.connectingFinRetrans),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connecting_rst: {
      value: cdktf.numberToHclTerraform(struct!.connectingRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connecting_rst_ofo: {
      value: cdktf.numberToHclTerraform(struct!.connectingRstOfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connecting_rst_retrans: {
      value: cdktf.numberToHclTerraform(struct!.connectingRstRetrans),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cookie_switching: {
      value: cdktf.numberToHclTerraform(struct!.cookieSwitching),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cookie_switching_enqueue: {
      value: cdktf.numberToHclTerraform(struct!.cookieSwitchingEnqueue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cookie_switching_ok: {
      value: cdktf.numberToHclTerraform(struct!.cookieSwitchingOk),
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
    full_proxy: {
      value: cdktf.numberToHclTerraform(struct!.fullProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    full_proxy_fpga_err: {
      value: cdktf.numberToHclTerraform(struct!.fullProxyFpgaErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    full_proxy_pipeline: {
      value: cdktf.numberToHclTerraform(struct!.fullProxyPipeline),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    full_proxy_post: {
      value: cdktf.numberToHclTerraform(struct!.fullProxyPost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    full_proxy_put: {
      value: cdktf.numberToHclTerraform(struct!.fullProxyPut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwdreq_fail: {
      value: cdktf.numberToHclTerraform(struct!.fwdreqFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwdreq_fail_buff: {
      value: cdktf.numberToHclTerraform(struct!.fwdreqFailBuff),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwdreq_fail_persist: {
      value: cdktf.numberToHclTerraform(struct!.fwdreqFailPersist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwdreq_fail_route: {
      value: cdktf.numberToHclTerraform(struct!.fwdreqFailRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwdreq_fail_rport: {
      value: cdktf.numberToHclTerraform(struct!.fwdreqFailRport),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwdreq_fail_server: {
      value: cdktf.numberToHclTerraform(struct!.fwdreqFailServer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwdreq_fail_tuple: {
      value: cdktf.numberToHclTerraform(struct!.fwdreqFailTuple),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwdreqdata_fail: {
      value: cdktf.numberToHclTerraform(struct!.fwdreqdataFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_delete: {
      value: cdktf.numberToHclTerraform(struct!.headerDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_insert: {
      value: cdktf.numberToHclTerraform(struct!.headerInsert),
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
    host_switching: {
      value: cdktf.numberToHclTerraform(struct!.hostSwitching),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_switching_enqueue: {
      value: cdktf.numberToHclTerraform(struct!.hostSwitchingEnqueue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_switching_ok: {
      value: cdktf.numberToHclTerraform(struct!.hostSwitchingOk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_pkts_ofo: {
      value: cdktf.numberToHclTerraform(struct!.httpPktsOfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    huge_cookie: {
      value: cdktf.numberToHclTerraform(struct!.hugeCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    huge_cookie_header: {
      value: cdktf.numberToHclTerraform(struct!.hugeCookieHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insert_client_ip: {
      value: cdktf.numberToHclTerraform(struct!.insertClientIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insert_client_port: {
      value: cdktf.numberToHclTerraform(struct!.insertClientPort),
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
    l4_switching: {
      value: cdktf.numberToHclTerraform(struct!.l4Switching),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_switching_enqueue: {
      value: cdktf.numberToHclTerraform(struct!.l4SwitchingEnqueue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_switching_ok: {
      value: cdktf.numberToHclTerraform(struct!.l4SwitchingOk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    large_cookie: {
      value: cdktf.numberToHclTerraform(struct!.largeCookie),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    large_cookie_header: {
      value: cdktf.numberToHclTerraform(struct!.largeCookieHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lb_switching: {
      value: cdktf.numberToHclTerraform(struct!.lbSwitching),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lb_switching_enqueue: {
      value: cdktf.numberToHclTerraform(struct!.lbSwitchingEnqueue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lb_switching_ok: {
      value: cdktf.numberToHclTerraform(struct!.lbSwitchingOk),
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
    negative_req_remain: {
      value: cdktf.numberToHclTerraform(struct!.negativeReqRemain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    negative_resp_remain: {
      value: cdktf.numberToHclTerraform(struct!.negativeRespRemain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_svrconn: {
      value: cdktf.numberToHclTerraform(struct!.newSvrconn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    non_http_bypass: {
      value: cdktf.numberToHclTerraform(struct!.nonHttpBypass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    noproxy: {
      value: cdktf.numberToHclTerraform(struct!.noproxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    notuple: {
      value: cdktf.numberToHclTerraform(struct!.notuple),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_cookie_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseCookieFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_setcookie_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseSetcookieFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parsereq_fail: {
      value: cdktf.numberToHclTerraform(struct!.parsereqFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pconn_connected: {
      value: cdktf.numberToHclTerraform(struct!.pconnConnected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pconn_connecting: {
      value: cdktf.numberToHclTerraform(struct!.pconnConnecting),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pconn_connecting_failed: {
      value: cdktf.numberToHclTerraform(struct!.pconnConnectingFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkts_ofo: {
      value: cdktf.numberToHclTerraform(struct!.pktsOfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkts_retrans: {
      value: cdktf.numberToHclTerraform(struct!.pktsRetrans),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkts_retrans_ack_finwait: {
      value: cdktf.numberToHclTerraform(struct!.pktsRetransAckFinwait),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkts_retrans_fin: {
      value: cdktf.numberToHclTerraform(struct!.pktsRetransFin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkts_retrans_push: {
      value: cdktf.numberToHclTerraform(struct!.pktsRetransPush),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkts_retrans_rst: {
      value: cdktf.numberToHclTerraform(struct!.pktsRetransRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req: {
      value: cdktf.numberToHclTerraform(struct!.req),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_100m: {
      value: cdktf.numberToHclTerraform(struct!.req100M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_100u: {
      value: cdktf.numberToHclTerraform(struct!.req100U),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_10m: {
      value: cdktf.numberToHclTerraform(struct!.req10M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_10u: {
      value: cdktf.numberToHclTerraform(struct!.req10U),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_1m: {
      value: cdktf.numberToHclTerraform(struct!.req1M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_1s: {
      value: cdktf.numberToHclTerraform(struct!.req1S),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_200m: {
      value: cdktf.numberToHclTerraform(struct!.req200M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_200u: {
      value: cdktf.numberToHclTerraform(struct!.req200U),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_20m: {
      value: cdktf.numberToHclTerraform(struct!.req20M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_20u: {
      value: cdktf.numberToHclTerraform(struct!.req20U),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_2m: {
      value: cdktf.numberToHclTerraform(struct!.req2M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_2s: {
      value: cdktf.numberToHclTerraform(struct!.req2S),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_500m: {
      value: cdktf.numberToHclTerraform(struct!.req500M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_500u: {
      value: cdktf.numberToHclTerraform(struct!.req500U),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_50m: {
      value: cdktf.numberToHclTerraform(struct!.req50M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_50u: {
      value: cdktf.numberToHclTerraform(struct!.req50U),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_5m: {
      value: cdktf.numberToHclTerraform(struct!.req5M),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_5s: {
      value: cdktf.numberToHclTerraform(struct!.req5S),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_chunk: {
      value: cdktf.numberToHclTerraform(struct!.reqChunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_connect: {
      value: cdktf.numberToHclTerraform(struct!.reqConnect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_content_len: {
      value: cdktf.numberToHclTerraform(struct!.reqContentLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_delete: {
      value: cdktf.numberToHclTerraform(struct!.reqDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_get: {
      value: cdktf.numberToHclTerraform(struct!.reqGet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_head: {
      value: cdktf.numberToHclTerraform(struct!.reqHead),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_http10: {
      value: cdktf.numberToHclTerraform(struct!.reqHttp10),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_http10_keepalive: {
      value: cdktf.numberToHclTerraform(struct!.reqHttp10Keepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_http11: {
      value: cdktf.numberToHclTerraform(struct!.reqHttp11),
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
    req_options: {
      value: cdktf.numberToHclTerraform(struct!.reqOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_over_5s: {
      value: cdktf.numberToHclTerraform(struct!.reqOver5S),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_over_limit: {
      value: cdktf.numberToHclTerraform(struct!.reqOverLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_post: {
      value: cdktf.numberToHclTerraform(struct!.reqPost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_put: {
      value: cdktf.numberToHclTerraform(struct!.reqPut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_rate_over_limit: {
      value: cdktf.numberToHclTerraform(struct!.reqRateOverLimit),
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
    req_succ: {
      value: cdktf.numberToHclTerraform(struct!.reqSucc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_sz_16k: {
      value: cdktf.numberToHclTerraform(struct!.reqSz16K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_sz_1k: {
      value: cdktf.numberToHclTerraform(struct!.reqSz1K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_sz_256k: {
      value: cdktf.numberToHclTerraform(struct!.reqSz256K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_sz_2k: {
      value: cdktf.numberToHclTerraform(struct!.reqSz2K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_sz_32k: {
      value: cdktf.numberToHclTerraform(struct!.reqSz32K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_sz_4k: {
      value: cdktf.numberToHclTerraform(struct!.reqSz4K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_sz_64k: {
      value: cdktf.numberToHclTerraform(struct!.reqSz64K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_sz_8k: {
      value: cdktf.numberToHclTerraform(struct!.reqSz8K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_sz_gt_256k: {
      value: cdktf.numberToHclTerraform(struct!.reqSzGt256K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_trace: {
      value: cdktf.numberToHclTerraform(struct!.reqTrace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_track: {
      value: cdktf.numberToHclTerraform(struct!.reqTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_unknown: {
      value: cdktf.numberToHclTerraform(struct!.reqUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_100: {
      value: cdktf.numberToHclTerraform(struct!.response100),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_101: {
      value: cdktf.numberToHclTerraform(struct!.response101),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_102: {
      value: cdktf.numberToHclTerraform(struct!.response102),
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
    response_200: {
      value: cdktf.numberToHclTerraform(struct!.response200),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_201: {
      value: cdktf.numberToHclTerraform(struct!.response201),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_202: {
      value: cdktf.numberToHclTerraform(struct!.response202),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_203: {
      value: cdktf.numberToHclTerraform(struct!.response203),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_204: {
      value: cdktf.numberToHclTerraform(struct!.response204),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_205: {
      value: cdktf.numberToHclTerraform(struct!.response205),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_206: {
      value: cdktf.numberToHclTerraform(struct!.response206),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_207: {
      value: cdktf.numberToHclTerraform(struct!.response207),
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
    response_300: {
      value: cdktf.numberToHclTerraform(struct!.response300),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_301: {
      value: cdktf.numberToHclTerraform(struct!.response301),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_302: {
      value: cdktf.numberToHclTerraform(struct!.response302),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_303: {
      value: cdktf.numberToHclTerraform(struct!.response303),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_304: {
      value: cdktf.numberToHclTerraform(struct!.response304),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_305: {
      value: cdktf.numberToHclTerraform(struct!.response305),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_306: {
      value: cdktf.numberToHclTerraform(struct!.response306),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_307: {
      value: cdktf.numberToHclTerraform(struct!.response307),
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
    response_400: {
      value: cdktf.numberToHclTerraform(struct!.response400),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_401: {
      value: cdktf.numberToHclTerraform(struct!.response401),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_402: {
      value: cdktf.numberToHclTerraform(struct!.response402),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_403: {
      value: cdktf.numberToHclTerraform(struct!.response403),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_404: {
      value: cdktf.numberToHclTerraform(struct!.response404),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_405: {
      value: cdktf.numberToHclTerraform(struct!.response405),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_406: {
      value: cdktf.numberToHclTerraform(struct!.response406),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_407: {
      value: cdktf.numberToHclTerraform(struct!.response407),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_408: {
      value: cdktf.numberToHclTerraform(struct!.response408),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_409: {
      value: cdktf.numberToHclTerraform(struct!.response409),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_410: {
      value: cdktf.numberToHclTerraform(struct!.response410),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_411: {
      value: cdktf.numberToHclTerraform(struct!.response411),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_412: {
      value: cdktf.numberToHclTerraform(struct!.response412),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_413: {
      value: cdktf.numberToHclTerraform(struct!.response413),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_414: {
      value: cdktf.numberToHclTerraform(struct!.response414),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_415: {
      value: cdktf.numberToHclTerraform(struct!.response415),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_416: {
      value: cdktf.numberToHclTerraform(struct!.response416),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_417: {
      value: cdktf.numberToHclTerraform(struct!.response417),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_418: {
      value: cdktf.numberToHclTerraform(struct!.response418),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_422: {
      value: cdktf.numberToHclTerraform(struct!.response422),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_423: {
      value: cdktf.numberToHclTerraform(struct!.response423),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_424: {
      value: cdktf.numberToHclTerraform(struct!.response424),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_425: {
      value: cdktf.numberToHclTerraform(struct!.response425),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_426: {
      value: cdktf.numberToHclTerraform(struct!.response426),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_449: {
      value: cdktf.numberToHclTerraform(struct!.response449),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_450: {
      value: cdktf.numberToHclTerraform(struct!.response450),
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
    response_500: {
      value: cdktf.numberToHclTerraform(struct!.response500),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_501: {
      value: cdktf.numberToHclTerraform(struct!.response501),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_502: {
      value: cdktf.numberToHclTerraform(struct!.response502),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_503: {
      value: cdktf.numberToHclTerraform(struct!.response503),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_504: {
      value: cdktf.numberToHclTerraform(struct!.response504),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_505: {
      value: cdktf.numberToHclTerraform(struct!.response505),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_506: {
      value: cdktf.numberToHclTerraform(struct!.response506),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_507: {
      value: cdktf.numberToHclTerraform(struct!.response507),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_508: {
      value: cdktf.numberToHclTerraform(struct!.response508),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_509: {
      value: cdktf.numberToHclTerraform(struct!.response509),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_510: {
      value: cdktf.numberToHclTerraform(struct!.response510),
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
    response_http10: {
      value: cdktf.numberToHclTerraform(struct!.responseHttp10),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_http11: {
      value: cdktf.numberToHclTerraform(struct!.responseHttp11),
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
    retry_503: {
      value: cdktf.numberToHclTerraform(struct!.retry503),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_chunk: {
      value: cdktf.numberToHclTerraform(struct!.rspChunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_content_len: {
      value: cdktf.numberToHclTerraform(struct!.rspContentLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_sz_16k: {
      value: cdktf.numberToHclTerraform(struct!.rspSz16K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_sz_1k: {
      value: cdktf.numberToHclTerraform(struct!.rspSz1K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_sz_256k: {
      value: cdktf.numberToHclTerraform(struct!.rspSz256K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_sz_2k: {
      value: cdktf.numberToHclTerraform(struct!.rspSz2K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_sz_32k: {
      value: cdktf.numberToHclTerraform(struct!.rspSz32K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_sz_4k: {
      value: cdktf.numberToHclTerraform(struct!.rspSz4K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_sz_64k: {
      value: cdktf.numberToHclTerraform(struct!.rspSz64K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_sz_8k: {
      value: cdktf.numberToHclTerraform(struct!.rspSz8K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsp_sz_gt_256k: {
      value: cdktf.numberToHclTerraform(struct!.rspSzGt256K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_resel: {
      value: cdktf.numberToHclTerraform(struct!.serverResel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_resel_failed: {
      value: cdktf.numberToHclTerraform(struct!.serverReselFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_rst: {
      value: cdktf.numberToHclTerraform(struct!.serverRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_rst_connected: {
      value: cdktf.numberToHclTerraform(struct!.serverRstConnected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_rst_connecting: {
      value: cdktf.numberToHclTerraform(struct!.serverRstConnecting),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_rst_request: {
      value: cdktf.numberToHclTerraform(struct!.serverRstRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_rst_response: {
      value: cdktf.numberToHclTerraform(struct!.serverRstResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skip_insert_client_ip: {
      value: cdktf.numberToHclTerraform(struct!.skipInsertClientIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    skip_insert_client_port: {
      value: cdktf.numberToHclTerraform(struct!.skipInsertClientPort),
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
    stale_sess: {
      value: cdktf.numberToHclTerraform(struct!.staleSess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    svr_prem_close: {
      value: cdktf.numberToHclTerraform(struct!.svrPremClose),
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
    tcpoutrst: {
      value: cdktf.numberToHclTerraform(struct!.tcpoutrst),
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
    url_switching: {
      value: cdktf.numberToHclTerraform(struct!.urlSwitching),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url_switching_enqueue: {
      value: cdktf.numberToHclTerraform(struct!.urlSwitchingEnqueue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url_switching_ok: {
      value: cdktf.numberToHclTerraform(struct!.urlSwitchingOk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wrong_resp_header: {
      value: cdktf.numberToHclTerraform(struct!.wrongRespHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbFastHttpProxyOperOperFastHttpProxyCpuListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbFastHttpProxyOperOperFastHttpProxyCpuListStruct | cdktf.IResolvable | undefined {
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
    if (this._aflexRetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexRetry = this._aflexRetry;
    }
    if (this._aflexSwitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexSwitching = this._aflexSwitching;
    }
    if (this._aflexSwitchingEnqueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexSwitchingEnqueue = this._aflexSwitchingEnqueue;
    }
    if (this._aflexSwitchingOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexSwitchingOk = this._aflexSwitchingOk;
    }
    if (this._asmCookieFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.asmCookieFail = this._asmCookieFail;
    }
    if (this._asmCookieHeaderFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.asmCookieHeaderFail = this._asmCookieHeaderFail;
    }
    if (this._asmSetcookieFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.asmSetcookieFail = this._asmSetcookieFail;
    }
    if (this._asmSetcookieHeaderFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.asmSetcookieHeaderFail = this._asmSetcookieHeaderFail;
    }
    if (this._cacheRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheRsp = this._cacheRsp;
    }
    if (this._chunkBad !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkBad = this._chunkBad;
    }
    if (this._chunkSz1K !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSz1K = this._chunkSz1K;
    }
    if (this._chunkSz2K !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSz2K = this._chunkSz2K;
    }
    if (this._chunkSz4K !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSz4K = this._chunkSz4K;
    }
    if (this._chunkSz512 !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSz512 = this._chunkSz512;
    }
    if (this._chunkSzGt4K !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkSzGt4K = this._chunkSzGt4K;
    }
    if (this._clientReqUnexpFlag !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientReqUnexpFlag = this._clientReqUnexpFlag;
    }
    if (this._clientRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRst = this._clientRst;
    }
    if (this._clientRstConnected !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRstConnected = this._clientRstConnected;
    }
    if (this._clientRstConnecting !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRstConnecting = this._clientRstConnecting;
    }
    if (this._clientRstRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRstRequest = this._clientRstRequest;
    }
    if (this._clientRstResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRstResponse = this._clientRstResponse;
    }
    if (this._closeOnDdos !== undefined) {
      hasAnyValues = true;
      internalValueResult.closeOnDdos = this._closeOnDdos;
    }
    if (this._compressContentTypeExcluded !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressContentTypeExcluded = this._compressContentTypeExcluded;
    }
    if (this._compressDelAcceptEnc !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressDelAcceptEnc = this._compressDelAcceptEnc;
    }
    if (this._compressNoContentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressNoContentType = this._compressNoContentType;
    }
    if (this._compressRatioTooHigh !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressRatioTooHigh = this._compressRatioTooHigh;
    }
    if (this._compressRespAlreadyCompressed !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressRespAlreadyCompressed = this._compressRespAlreadyCompressed;
    }
    if (this._compressRespLtMin !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressRespLtMin = this._compressRespLtMin;
    }
    if (this._compressRespNoClOrCe !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressRespNoClOrCe = this._compressRespNoClOrCe;
    }
    if (this._compressRsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressRsp = this._compressRsp;
    }
    if (this._compressRspBr !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressRspBr = this._compressRspBr;
    }
    if (this._compressRspTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressRspTotal = this._compressRspTotal;
    }
    if (this._connectingAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectingAck = this._connectingAck;
    }
    if (this._connectingFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectingFin = this._connectingFin;
    }
    if (this._connectingFinOfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectingFinOfo = this._connectingFinOfo;
    }
    if (this._connectingFinRetrans !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectingFinRetrans = this._connectingFinRetrans;
    }
    if (this._connectingRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectingRst = this._connectingRst;
    }
    if (this._connectingRstOfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectingRstOfo = this._connectingRstOfo;
    }
    if (this._connectingRstRetrans !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectingRstRetrans = this._connectingRstRetrans;
    }
    if (this._cookieSwitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieSwitching = this._cookieSwitching;
    }
    if (this._cookieSwitchingEnqueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieSwitchingEnqueue = this._cookieSwitchingEnqueue;
    }
    if (this._cookieSwitchingOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.cookieSwitchingOk = this._cookieSwitchingOk;
    }
    if (this._currProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.currProxy = this._currProxy;
    }
    if (this._fullProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullProxy = this._fullProxy;
    }
    if (this._fullProxyFpgaErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullProxyFpgaErr = this._fullProxyFpgaErr;
    }
    if (this._fullProxyPipeline !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullProxyPipeline = this._fullProxyPipeline;
    }
    if (this._fullProxyPost !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullProxyPost = this._fullProxyPost;
    }
    if (this._fullProxyPut !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullProxyPut = this._fullProxyPut;
    }
    if (this._fwdreqFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdreqFail = this._fwdreqFail;
    }
    if (this._fwdreqFailBuff !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdreqFailBuff = this._fwdreqFailBuff;
    }
    if (this._fwdreqFailPersist !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdreqFailPersist = this._fwdreqFailPersist;
    }
    if (this._fwdreqFailRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdreqFailRoute = this._fwdreqFailRoute;
    }
    if (this._fwdreqFailRport !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdreqFailRport = this._fwdreqFailRport;
    }
    if (this._fwdreqFailServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdreqFailServer = this._fwdreqFailServer;
    }
    if (this._fwdreqFailTuple !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdreqFailTuple = this._fwdreqFailTuple;
    }
    if (this._fwdreqdataFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdreqdataFail = this._fwdreqdataFail;
    }
    if (this._headerDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerDelete = this._headerDelete;
    }
    if (this._headerInsert !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerInsert = this._headerInsert;
    }
    if (this._headerNameTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerNameTooLong = this._headerNameTooLong;
    }
    if (this._hostSwitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostSwitching = this._hostSwitching;
    }
    if (this._hostSwitchingEnqueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostSwitchingEnqueue = this._hostSwitchingEnqueue;
    }
    if (this._hostSwitchingOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostSwitchingOk = this._hostSwitchingOk;
    }
    if (this._httpPktsOfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPktsOfo = this._httpPktsOfo;
    }
    if (this._hugeCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.hugeCookie = this._hugeCookie;
    }
    if (this._hugeCookieHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.hugeCookieHeader = this._hugeCookieHeader;
    }
    if (this._insertClientIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertClientIp = this._insertClientIp;
    }
    if (this._insertClientPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertClientPort = this._insertClientPort;
    }
    if (this._invalidHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidHeader = this._invalidHeader;
    }
    if (this._l4Switching !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4Switching = this._l4Switching;
    }
    if (this._l4SwitchingEnqueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4SwitchingEnqueue = this._l4SwitchingEnqueue;
    }
    if (this._l4SwitchingOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4SwitchingOk = this._l4SwitchingOk;
    }
    if (this._largeCookie !== undefined) {
      hasAnyValues = true;
      internalValueResult.largeCookie = this._largeCookie;
    }
    if (this._largeCookieHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.largeCookieHeader = this._largeCookieHeader;
    }
    if (this._lbSwitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbSwitching = this._lbSwitching;
    }
    if (this._lbSwitchingEnqueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbSwitchingEnqueue = this._lbSwitchingEnqueue;
    }
    if (this._lbSwitchingOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbSwitchingOk = this._lbSwitchingOk;
    }
    if (this._lineTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineTooLong = this._lineTooLong;
    }
    if (this._negativeReqRemain !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeReqRemain = this._negativeReqRemain;
    }
    if (this._negativeRespRemain !== undefined) {
      hasAnyValues = true;
      internalValueResult.negativeRespRemain = this._negativeRespRemain;
    }
    if (this._newSvrconn !== undefined) {
      hasAnyValues = true;
      internalValueResult.newSvrconn = this._newSvrconn;
    }
    if (this._nonHttpBypass !== undefined) {
      hasAnyValues = true;
      internalValueResult.nonHttpBypass = this._nonHttpBypass;
    }
    if (this._noproxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noproxy = this._noproxy;
    }
    if (this._notuple !== undefined) {
      hasAnyValues = true;
      internalValueResult.notuple = this._notuple;
    }
    if (this._parseCookieFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseCookieFail = this._parseCookieFail;
    }
    if (this._parseSetcookieFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseSetcookieFail = this._parseSetcookieFail;
    }
    if (this._parsereqFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsereqFail = this._parsereqFail;
    }
    if (this._pconnConnected !== undefined) {
      hasAnyValues = true;
      internalValueResult.pconnConnected = this._pconnConnected;
    }
    if (this._pconnConnecting !== undefined) {
      hasAnyValues = true;
      internalValueResult.pconnConnecting = this._pconnConnecting;
    }
    if (this._pconnConnectingFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.pconnConnectingFailed = this._pconnConnectingFailed;
    }
    if (this._pktsOfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktsOfo = this._pktsOfo;
    }
    if (this._pktsRetrans !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktsRetrans = this._pktsRetrans;
    }
    if (this._pktsRetransAckFinwait !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktsRetransAckFinwait = this._pktsRetransAckFinwait;
    }
    if (this._pktsRetransFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktsRetransFin = this._pktsRetransFin;
    }
    if (this._pktsRetransPush !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktsRetransPush = this._pktsRetransPush;
    }
    if (this._pktsRetransRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktsRetransRst = this._pktsRetransRst;
    }
    if (this._req !== undefined) {
      hasAnyValues = true;
      internalValueResult.req = this._req;
    }
    if (this._req100M !== undefined) {
      hasAnyValues = true;
      internalValueResult.req100M = this._req100M;
    }
    if (this._req100U !== undefined) {
      hasAnyValues = true;
      internalValueResult.req100U = this._req100U;
    }
    if (this._req10M !== undefined) {
      hasAnyValues = true;
      internalValueResult.req10M = this._req10M;
    }
    if (this._req10U !== undefined) {
      hasAnyValues = true;
      internalValueResult.req10U = this._req10U;
    }
    if (this._req1M !== undefined) {
      hasAnyValues = true;
      internalValueResult.req1M = this._req1M;
    }
    if (this._req1S !== undefined) {
      hasAnyValues = true;
      internalValueResult.req1S = this._req1S;
    }
    if (this._req200M !== undefined) {
      hasAnyValues = true;
      internalValueResult.req200M = this._req200M;
    }
    if (this._req200U !== undefined) {
      hasAnyValues = true;
      internalValueResult.req200U = this._req200U;
    }
    if (this._req20M !== undefined) {
      hasAnyValues = true;
      internalValueResult.req20M = this._req20M;
    }
    if (this._req20U !== undefined) {
      hasAnyValues = true;
      internalValueResult.req20U = this._req20U;
    }
    if (this._req2M !== undefined) {
      hasAnyValues = true;
      internalValueResult.req2M = this._req2M;
    }
    if (this._req2S !== undefined) {
      hasAnyValues = true;
      internalValueResult.req2S = this._req2S;
    }
    if (this._req500M !== undefined) {
      hasAnyValues = true;
      internalValueResult.req500M = this._req500M;
    }
    if (this._req500U !== undefined) {
      hasAnyValues = true;
      internalValueResult.req500U = this._req500U;
    }
    if (this._req50M !== undefined) {
      hasAnyValues = true;
      internalValueResult.req50M = this._req50M;
    }
    if (this._req50U !== undefined) {
      hasAnyValues = true;
      internalValueResult.req50U = this._req50U;
    }
    if (this._req5M !== undefined) {
      hasAnyValues = true;
      internalValueResult.req5M = this._req5M;
    }
    if (this._req5S !== undefined) {
      hasAnyValues = true;
      internalValueResult.req5S = this._req5S;
    }
    if (this._reqChunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqChunk = this._reqChunk;
    }
    if (this._reqConnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqConnect = this._reqConnect;
    }
    if (this._reqContentLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqContentLen = this._reqContentLen;
    }
    if (this._reqDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqDelete = this._reqDelete;
    }
    if (this._reqGet !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqGet = this._reqGet;
    }
    if (this._reqHead !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqHead = this._reqHead;
    }
    if (this._reqHttp10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqHttp10 = this._reqHttp10;
    }
    if (this._reqHttp10Keepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqHttp10Keepalive = this._reqHttp10Keepalive;
    }
    if (this._reqHttp11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqHttp11 = this._reqHttp11;
    }
    if (this._reqOfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqOfo = this._reqOfo;
    }
    if (this._reqOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqOptions = this._reqOptions;
    }
    if (this._reqOver5S !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqOver5S = this._reqOver5S;
    }
    if (this._reqOverLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqOverLimit = this._reqOverLimit;
    }
    if (this._reqPost !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqPost = this._reqPost;
    }
    if (this._reqPut !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqPut = this._reqPut;
    }
    if (this._reqRateOverLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqRateOverLimit = this._reqRateOverLimit;
    }
    if (this._reqRetran !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqRetran = this._reqRetran;
    }
    if (this._reqSucc !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSucc = this._reqSucc;
    }
    if (this._reqSz16K !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSz16K = this._reqSz16K;
    }
    if (this._reqSz1K !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSz1K = this._reqSz1K;
    }
    if (this._reqSz256K !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSz256K = this._reqSz256K;
    }
    if (this._reqSz2K !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSz2K = this._reqSz2K;
    }
    if (this._reqSz32K !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSz32K = this._reqSz32K;
    }
    if (this._reqSz4K !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSz4K = this._reqSz4K;
    }
    if (this._reqSz64K !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSz64K = this._reqSz64K;
    }
    if (this._reqSz8K !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSz8K = this._reqSz8K;
    }
    if (this._reqSzGt256K !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqSzGt256K = this._reqSzGt256K;
    }
    if (this._reqTrace !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqTrace = this._reqTrace;
    }
    if (this._reqTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqTrack = this._reqTrack;
    }
    if (this._reqUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqUnknown = this._reqUnknown;
    }
    if (this._response100 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response100 = this._response100;
    }
    if (this._response101 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response101 = this._response101;
    }
    if (this._response102 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response102 = this._response102;
    }
    if (this._response1Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.response1Xx = this._response1Xx;
    }
    if (this._response200 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response200 = this._response200;
    }
    if (this._response201 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response201 = this._response201;
    }
    if (this._response202 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response202 = this._response202;
    }
    if (this._response203 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response203 = this._response203;
    }
    if (this._response204 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response204 = this._response204;
    }
    if (this._response205 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response205 = this._response205;
    }
    if (this._response206 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response206 = this._response206;
    }
    if (this._response207 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response207 = this._response207;
    }
    if (this._response2Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.response2Xx = this._response2Xx;
    }
    if (this._response300 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response300 = this._response300;
    }
    if (this._response301 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response301 = this._response301;
    }
    if (this._response302 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response302 = this._response302;
    }
    if (this._response303 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response303 = this._response303;
    }
    if (this._response304 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response304 = this._response304;
    }
    if (this._response305 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response305 = this._response305;
    }
    if (this._response306 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response306 = this._response306;
    }
    if (this._response307 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response307 = this._response307;
    }
    if (this._response3Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.response3Xx = this._response3Xx;
    }
    if (this._response400 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response400 = this._response400;
    }
    if (this._response401 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response401 = this._response401;
    }
    if (this._response402 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response402 = this._response402;
    }
    if (this._response403 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response403 = this._response403;
    }
    if (this._response404 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response404 = this._response404;
    }
    if (this._response405 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response405 = this._response405;
    }
    if (this._response406 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response406 = this._response406;
    }
    if (this._response407 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response407 = this._response407;
    }
    if (this._response408 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response408 = this._response408;
    }
    if (this._response409 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response409 = this._response409;
    }
    if (this._response410 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response410 = this._response410;
    }
    if (this._response411 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response411 = this._response411;
    }
    if (this._response412 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response412 = this._response412;
    }
    if (this._response413 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response413 = this._response413;
    }
    if (this._response414 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response414 = this._response414;
    }
    if (this._response415 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response415 = this._response415;
    }
    if (this._response416 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response416 = this._response416;
    }
    if (this._response417 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response417 = this._response417;
    }
    if (this._response418 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response418 = this._response418;
    }
    if (this._response422 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response422 = this._response422;
    }
    if (this._response423 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response423 = this._response423;
    }
    if (this._response424 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response424 = this._response424;
    }
    if (this._response425 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response425 = this._response425;
    }
    if (this._response426 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response426 = this._response426;
    }
    if (this._response449 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response449 = this._response449;
    }
    if (this._response450 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response450 = this._response450;
    }
    if (this._response4Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.response4Xx = this._response4Xx;
    }
    if (this._response500 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response500 = this._response500;
    }
    if (this._response501 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response501 = this._response501;
    }
    if (this._response502 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response502 = this._response502;
    }
    if (this._response503 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response503 = this._response503;
    }
    if (this._response504 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response504 = this._response504;
    }
    if (this._response505 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response505 = this._response505;
    }
    if (this._response506 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response506 = this._response506;
    }
    if (this._response507 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response507 = this._response507;
    }
    if (this._response508 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response508 = this._response508;
    }
    if (this._response509 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response509 = this._response509;
    }
    if (this._response510 !== undefined) {
      hasAnyValues = true;
      internalValueResult.response510 = this._response510;
    }
    if (this._response5Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.response5Xx = this._response5Xx;
    }
    if (this._response6Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.response6Xx = this._response6Xx;
    }
    if (this._responseHttp10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHttp10 = this._responseHttp10;
    }
    if (this._responseHttp11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHttp11 = this._responseHttp11;
    }
    if (this._responseUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseUnknown = this._responseUnknown;
    }
    if (this._retry503 !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry503 = this._retry503;
    }
    if (this._rspChunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspChunk = this._rspChunk;
    }
    if (this._rspContentLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspContentLen = this._rspContentLen;
    }
    if (this._rspSz16K !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspSz16K = this._rspSz16K;
    }
    if (this._rspSz1K !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspSz1K = this._rspSz1K;
    }
    if (this._rspSz256K !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspSz256K = this._rspSz256K;
    }
    if (this._rspSz2K !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspSz2K = this._rspSz2K;
    }
    if (this._rspSz32K !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspSz32K = this._rspSz32K;
    }
    if (this._rspSz4K !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspSz4K = this._rspSz4K;
    }
    if (this._rspSz64K !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspSz64K = this._rspSz64K;
    }
    if (this._rspSz8K !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspSz8K = this._rspSz8K;
    }
    if (this._rspSzGt256K !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspSzGt256K = this._rspSzGt256K;
    }
    if (this._serverResel !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverResel = this._serverResel;
    }
    if (this._serverReselFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverReselFailed = this._serverReselFailed;
    }
    if (this._serverRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRst = this._serverRst;
    }
    if (this._serverRstConnected !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRstConnected = this._serverRstConnected;
    }
    if (this._serverRstConnecting !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRstConnecting = this._serverRstConnecting;
    }
    if (this._serverRstRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRstRequest = this._serverRstRequest;
    }
    if (this._serverRstResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRstResponse = this._serverRstResponse;
    }
    if (this._skipInsertClientIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipInsertClientIp = this._skipInsertClientIp;
    }
    if (this._skipInsertClientPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipInsertClientPort = this._skipInsertClientPort;
    }
    if (this._snatFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatFail = this._snatFail;
    }
    if (this._staleSess !== undefined) {
      hasAnyValues = true;
      internalValueResult.staleSess = this._staleSess;
    }
    if (this._svrPremClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.svrPremClose = this._svrPremClose;
    }
    if (this._svrselFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.svrselFail = this._svrselFail;
    }
    if (this._tcpoutrst !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpoutrst = this._tcpoutrst;
    }
    if (this._tooManyHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooManyHeaders = this._tooManyHeaders;
    }
    if (this._totalProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalProxy = this._totalProxy;
    }
    if (this._urlSwitching !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlSwitching = this._urlSwitching;
    }
    if (this._urlSwitchingEnqueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlSwitchingEnqueue = this._urlSwitchingEnqueue;
    }
    if (this._urlSwitchingOk !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlSwitchingOk = this._urlSwitchingOk;
    }
    if (this._wrongRespHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrongRespHeader = this._wrongRespHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbFastHttpProxyOperOperFastHttpProxyCpuListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aflexLbReselect = undefined;
      this._aflexLbReselectOk = undefined;
      this._aflexRetry = undefined;
      this._aflexSwitching = undefined;
      this._aflexSwitchingEnqueue = undefined;
      this._aflexSwitchingOk = undefined;
      this._asmCookieFail = undefined;
      this._asmCookieHeaderFail = undefined;
      this._asmSetcookieFail = undefined;
      this._asmSetcookieHeaderFail = undefined;
      this._cacheRsp = undefined;
      this._chunkBad = undefined;
      this._chunkSz1K = undefined;
      this._chunkSz2K = undefined;
      this._chunkSz4K = undefined;
      this._chunkSz512 = undefined;
      this._chunkSzGt4K = undefined;
      this._clientReqUnexpFlag = undefined;
      this._clientRst = undefined;
      this._clientRstConnected = undefined;
      this._clientRstConnecting = undefined;
      this._clientRstRequest = undefined;
      this._clientRstResponse = undefined;
      this._closeOnDdos = undefined;
      this._compressContentTypeExcluded = undefined;
      this._compressDelAcceptEnc = undefined;
      this._compressNoContentType = undefined;
      this._compressRatioTooHigh = undefined;
      this._compressRespAlreadyCompressed = undefined;
      this._compressRespLtMin = undefined;
      this._compressRespNoClOrCe = undefined;
      this._compressRsp = undefined;
      this._compressRspBr = undefined;
      this._compressRspTotal = undefined;
      this._connectingAck = undefined;
      this._connectingFin = undefined;
      this._connectingFinOfo = undefined;
      this._connectingFinRetrans = undefined;
      this._connectingRst = undefined;
      this._connectingRstOfo = undefined;
      this._connectingRstRetrans = undefined;
      this._cookieSwitching = undefined;
      this._cookieSwitchingEnqueue = undefined;
      this._cookieSwitchingOk = undefined;
      this._currProxy = undefined;
      this._fullProxy = undefined;
      this._fullProxyFpgaErr = undefined;
      this._fullProxyPipeline = undefined;
      this._fullProxyPost = undefined;
      this._fullProxyPut = undefined;
      this._fwdreqFail = undefined;
      this._fwdreqFailBuff = undefined;
      this._fwdreqFailPersist = undefined;
      this._fwdreqFailRoute = undefined;
      this._fwdreqFailRport = undefined;
      this._fwdreqFailServer = undefined;
      this._fwdreqFailTuple = undefined;
      this._fwdreqdataFail = undefined;
      this._headerDelete = undefined;
      this._headerInsert = undefined;
      this._headerNameTooLong = undefined;
      this._hostSwitching = undefined;
      this._hostSwitchingEnqueue = undefined;
      this._hostSwitchingOk = undefined;
      this._httpPktsOfo = undefined;
      this._hugeCookie = undefined;
      this._hugeCookieHeader = undefined;
      this._insertClientIp = undefined;
      this._insertClientPort = undefined;
      this._invalidHeader = undefined;
      this._l4Switching = undefined;
      this._l4SwitchingEnqueue = undefined;
      this._l4SwitchingOk = undefined;
      this._largeCookie = undefined;
      this._largeCookieHeader = undefined;
      this._lbSwitching = undefined;
      this._lbSwitchingEnqueue = undefined;
      this._lbSwitchingOk = undefined;
      this._lineTooLong = undefined;
      this._negativeReqRemain = undefined;
      this._negativeRespRemain = undefined;
      this._newSvrconn = undefined;
      this._nonHttpBypass = undefined;
      this._noproxy = undefined;
      this._notuple = undefined;
      this._parseCookieFail = undefined;
      this._parseSetcookieFail = undefined;
      this._parsereqFail = undefined;
      this._pconnConnected = undefined;
      this._pconnConnecting = undefined;
      this._pconnConnectingFailed = undefined;
      this._pktsOfo = undefined;
      this._pktsRetrans = undefined;
      this._pktsRetransAckFinwait = undefined;
      this._pktsRetransFin = undefined;
      this._pktsRetransPush = undefined;
      this._pktsRetransRst = undefined;
      this._req = undefined;
      this._req100M = undefined;
      this._req100U = undefined;
      this._req10M = undefined;
      this._req10U = undefined;
      this._req1M = undefined;
      this._req1S = undefined;
      this._req200M = undefined;
      this._req200U = undefined;
      this._req20M = undefined;
      this._req20U = undefined;
      this._req2M = undefined;
      this._req2S = undefined;
      this._req500M = undefined;
      this._req500U = undefined;
      this._req50M = undefined;
      this._req50U = undefined;
      this._req5M = undefined;
      this._req5S = undefined;
      this._reqChunk = undefined;
      this._reqConnect = undefined;
      this._reqContentLen = undefined;
      this._reqDelete = undefined;
      this._reqGet = undefined;
      this._reqHead = undefined;
      this._reqHttp10 = undefined;
      this._reqHttp10Keepalive = undefined;
      this._reqHttp11 = undefined;
      this._reqOfo = undefined;
      this._reqOptions = undefined;
      this._reqOver5S = undefined;
      this._reqOverLimit = undefined;
      this._reqPost = undefined;
      this._reqPut = undefined;
      this._reqRateOverLimit = undefined;
      this._reqRetran = undefined;
      this._reqSucc = undefined;
      this._reqSz16K = undefined;
      this._reqSz1K = undefined;
      this._reqSz256K = undefined;
      this._reqSz2K = undefined;
      this._reqSz32K = undefined;
      this._reqSz4K = undefined;
      this._reqSz64K = undefined;
      this._reqSz8K = undefined;
      this._reqSzGt256K = undefined;
      this._reqTrace = undefined;
      this._reqTrack = undefined;
      this._reqUnknown = undefined;
      this._response100 = undefined;
      this._response101 = undefined;
      this._response102 = undefined;
      this._response1Xx = undefined;
      this._response200 = undefined;
      this._response201 = undefined;
      this._response202 = undefined;
      this._response203 = undefined;
      this._response204 = undefined;
      this._response205 = undefined;
      this._response206 = undefined;
      this._response207 = undefined;
      this._response2Xx = undefined;
      this._response300 = undefined;
      this._response301 = undefined;
      this._response302 = undefined;
      this._response303 = undefined;
      this._response304 = undefined;
      this._response305 = undefined;
      this._response306 = undefined;
      this._response307 = undefined;
      this._response3Xx = undefined;
      this._response400 = undefined;
      this._response401 = undefined;
      this._response402 = undefined;
      this._response403 = undefined;
      this._response404 = undefined;
      this._response405 = undefined;
      this._response406 = undefined;
      this._response407 = undefined;
      this._response408 = undefined;
      this._response409 = undefined;
      this._response410 = undefined;
      this._response411 = undefined;
      this._response412 = undefined;
      this._response413 = undefined;
      this._response414 = undefined;
      this._response415 = undefined;
      this._response416 = undefined;
      this._response417 = undefined;
      this._response418 = undefined;
      this._response422 = undefined;
      this._response423 = undefined;
      this._response424 = undefined;
      this._response425 = undefined;
      this._response426 = undefined;
      this._response449 = undefined;
      this._response450 = undefined;
      this._response4Xx = undefined;
      this._response500 = undefined;
      this._response501 = undefined;
      this._response502 = undefined;
      this._response503 = undefined;
      this._response504 = undefined;
      this._response505 = undefined;
      this._response506 = undefined;
      this._response507 = undefined;
      this._response508 = undefined;
      this._response509 = undefined;
      this._response510 = undefined;
      this._response5Xx = undefined;
      this._response6Xx = undefined;
      this._responseHttp10 = undefined;
      this._responseHttp11 = undefined;
      this._responseUnknown = undefined;
      this._retry503 = undefined;
      this._rspChunk = undefined;
      this._rspContentLen = undefined;
      this._rspSz16K = undefined;
      this._rspSz1K = undefined;
      this._rspSz256K = undefined;
      this._rspSz2K = undefined;
      this._rspSz32K = undefined;
      this._rspSz4K = undefined;
      this._rspSz64K = undefined;
      this._rspSz8K = undefined;
      this._rspSzGt256K = undefined;
      this._serverResel = undefined;
      this._serverReselFailed = undefined;
      this._serverRst = undefined;
      this._serverRstConnected = undefined;
      this._serverRstConnecting = undefined;
      this._serverRstRequest = undefined;
      this._serverRstResponse = undefined;
      this._skipInsertClientIp = undefined;
      this._skipInsertClientPort = undefined;
      this._snatFail = undefined;
      this._staleSess = undefined;
      this._svrPremClose = undefined;
      this._svrselFail = undefined;
      this._tcpoutrst = undefined;
      this._tooManyHeaders = undefined;
      this._totalProxy = undefined;
      this._urlSwitching = undefined;
      this._urlSwitchingEnqueue = undefined;
      this._urlSwitchingOk = undefined;
      this._wrongRespHeader = undefined;
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
      this._aflexRetry = value.aflexRetry;
      this._aflexSwitching = value.aflexSwitching;
      this._aflexSwitchingEnqueue = value.aflexSwitchingEnqueue;
      this._aflexSwitchingOk = value.aflexSwitchingOk;
      this._asmCookieFail = value.asmCookieFail;
      this._asmCookieHeaderFail = value.asmCookieHeaderFail;
      this._asmSetcookieFail = value.asmSetcookieFail;
      this._asmSetcookieHeaderFail = value.asmSetcookieHeaderFail;
      this._cacheRsp = value.cacheRsp;
      this._chunkBad = value.chunkBad;
      this._chunkSz1K = value.chunkSz1K;
      this._chunkSz2K = value.chunkSz2K;
      this._chunkSz4K = value.chunkSz4K;
      this._chunkSz512 = value.chunkSz512;
      this._chunkSzGt4K = value.chunkSzGt4K;
      this._clientReqUnexpFlag = value.clientReqUnexpFlag;
      this._clientRst = value.clientRst;
      this._clientRstConnected = value.clientRstConnected;
      this._clientRstConnecting = value.clientRstConnecting;
      this._clientRstRequest = value.clientRstRequest;
      this._clientRstResponse = value.clientRstResponse;
      this._closeOnDdos = value.closeOnDdos;
      this._compressContentTypeExcluded = value.compressContentTypeExcluded;
      this._compressDelAcceptEnc = value.compressDelAcceptEnc;
      this._compressNoContentType = value.compressNoContentType;
      this._compressRatioTooHigh = value.compressRatioTooHigh;
      this._compressRespAlreadyCompressed = value.compressRespAlreadyCompressed;
      this._compressRespLtMin = value.compressRespLtMin;
      this._compressRespNoClOrCe = value.compressRespNoClOrCe;
      this._compressRsp = value.compressRsp;
      this._compressRspBr = value.compressRspBr;
      this._compressRspTotal = value.compressRspTotal;
      this._connectingAck = value.connectingAck;
      this._connectingFin = value.connectingFin;
      this._connectingFinOfo = value.connectingFinOfo;
      this._connectingFinRetrans = value.connectingFinRetrans;
      this._connectingRst = value.connectingRst;
      this._connectingRstOfo = value.connectingRstOfo;
      this._connectingRstRetrans = value.connectingRstRetrans;
      this._cookieSwitching = value.cookieSwitching;
      this._cookieSwitchingEnqueue = value.cookieSwitchingEnqueue;
      this._cookieSwitchingOk = value.cookieSwitchingOk;
      this._currProxy = value.currProxy;
      this._fullProxy = value.fullProxy;
      this._fullProxyFpgaErr = value.fullProxyFpgaErr;
      this._fullProxyPipeline = value.fullProxyPipeline;
      this._fullProxyPost = value.fullProxyPost;
      this._fullProxyPut = value.fullProxyPut;
      this._fwdreqFail = value.fwdreqFail;
      this._fwdreqFailBuff = value.fwdreqFailBuff;
      this._fwdreqFailPersist = value.fwdreqFailPersist;
      this._fwdreqFailRoute = value.fwdreqFailRoute;
      this._fwdreqFailRport = value.fwdreqFailRport;
      this._fwdreqFailServer = value.fwdreqFailServer;
      this._fwdreqFailTuple = value.fwdreqFailTuple;
      this._fwdreqdataFail = value.fwdreqdataFail;
      this._headerDelete = value.headerDelete;
      this._headerInsert = value.headerInsert;
      this._headerNameTooLong = value.headerNameTooLong;
      this._hostSwitching = value.hostSwitching;
      this._hostSwitchingEnqueue = value.hostSwitchingEnqueue;
      this._hostSwitchingOk = value.hostSwitchingOk;
      this._httpPktsOfo = value.httpPktsOfo;
      this._hugeCookie = value.hugeCookie;
      this._hugeCookieHeader = value.hugeCookieHeader;
      this._insertClientIp = value.insertClientIp;
      this._insertClientPort = value.insertClientPort;
      this._invalidHeader = value.invalidHeader;
      this._l4Switching = value.l4Switching;
      this._l4SwitchingEnqueue = value.l4SwitchingEnqueue;
      this._l4SwitchingOk = value.l4SwitchingOk;
      this._largeCookie = value.largeCookie;
      this._largeCookieHeader = value.largeCookieHeader;
      this._lbSwitching = value.lbSwitching;
      this._lbSwitchingEnqueue = value.lbSwitchingEnqueue;
      this._lbSwitchingOk = value.lbSwitchingOk;
      this._lineTooLong = value.lineTooLong;
      this._negativeReqRemain = value.negativeReqRemain;
      this._negativeRespRemain = value.negativeRespRemain;
      this._newSvrconn = value.newSvrconn;
      this._nonHttpBypass = value.nonHttpBypass;
      this._noproxy = value.noproxy;
      this._notuple = value.notuple;
      this._parseCookieFail = value.parseCookieFail;
      this._parseSetcookieFail = value.parseSetcookieFail;
      this._parsereqFail = value.parsereqFail;
      this._pconnConnected = value.pconnConnected;
      this._pconnConnecting = value.pconnConnecting;
      this._pconnConnectingFailed = value.pconnConnectingFailed;
      this._pktsOfo = value.pktsOfo;
      this._pktsRetrans = value.pktsRetrans;
      this._pktsRetransAckFinwait = value.pktsRetransAckFinwait;
      this._pktsRetransFin = value.pktsRetransFin;
      this._pktsRetransPush = value.pktsRetransPush;
      this._pktsRetransRst = value.pktsRetransRst;
      this._req = value.req;
      this._req100M = value.req100M;
      this._req100U = value.req100U;
      this._req10M = value.req10M;
      this._req10U = value.req10U;
      this._req1M = value.req1M;
      this._req1S = value.req1S;
      this._req200M = value.req200M;
      this._req200U = value.req200U;
      this._req20M = value.req20M;
      this._req20U = value.req20U;
      this._req2M = value.req2M;
      this._req2S = value.req2S;
      this._req500M = value.req500M;
      this._req500U = value.req500U;
      this._req50M = value.req50M;
      this._req50U = value.req50U;
      this._req5M = value.req5M;
      this._req5S = value.req5S;
      this._reqChunk = value.reqChunk;
      this._reqConnect = value.reqConnect;
      this._reqContentLen = value.reqContentLen;
      this._reqDelete = value.reqDelete;
      this._reqGet = value.reqGet;
      this._reqHead = value.reqHead;
      this._reqHttp10 = value.reqHttp10;
      this._reqHttp10Keepalive = value.reqHttp10Keepalive;
      this._reqHttp11 = value.reqHttp11;
      this._reqOfo = value.reqOfo;
      this._reqOptions = value.reqOptions;
      this._reqOver5S = value.reqOver5S;
      this._reqOverLimit = value.reqOverLimit;
      this._reqPost = value.reqPost;
      this._reqPut = value.reqPut;
      this._reqRateOverLimit = value.reqRateOverLimit;
      this._reqRetran = value.reqRetran;
      this._reqSucc = value.reqSucc;
      this._reqSz16K = value.reqSz16K;
      this._reqSz1K = value.reqSz1K;
      this._reqSz256K = value.reqSz256K;
      this._reqSz2K = value.reqSz2K;
      this._reqSz32K = value.reqSz32K;
      this._reqSz4K = value.reqSz4K;
      this._reqSz64K = value.reqSz64K;
      this._reqSz8K = value.reqSz8K;
      this._reqSzGt256K = value.reqSzGt256K;
      this._reqTrace = value.reqTrace;
      this._reqTrack = value.reqTrack;
      this._reqUnknown = value.reqUnknown;
      this._response100 = value.response100;
      this._response101 = value.response101;
      this._response102 = value.response102;
      this._response1Xx = value.response1Xx;
      this._response200 = value.response200;
      this._response201 = value.response201;
      this._response202 = value.response202;
      this._response203 = value.response203;
      this._response204 = value.response204;
      this._response205 = value.response205;
      this._response206 = value.response206;
      this._response207 = value.response207;
      this._response2Xx = value.response2Xx;
      this._response300 = value.response300;
      this._response301 = value.response301;
      this._response302 = value.response302;
      this._response303 = value.response303;
      this._response304 = value.response304;
      this._response305 = value.response305;
      this._response306 = value.response306;
      this._response307 = value.response307;
      this._response3Xx = value.response3Xx;
      this._response400 = value.response400;
      this._response401 = value.response401;
      this._response402 = value.response402;
      this._response403 = value.response403;
      this._response404 = value.response404;
      this._response405 = value.response405;
      this._response406 = value.response406;
      this._response407 = value.response407;
      this._response408 = value.response408;
      this._response409 = value.response409;
      this._response410 = value.response410;
      this._response411 = value.response411;
      this._response412 = value.response412;
      this._response413 = value.response413;
      this._response414 = value.response414;
      this._response415 = value.response415;
      this._response416 = value.response416;
      this._response417 = value.response417;
      this._response418 = value.response418;
      this._response422 = value.response422;
      this._response423 = value.response423;
      this._response424 = value.response424;
      this._response425 = value.response425;
      this._response426 = value.response426;
      this._response449 = value.response449;
      this._response450 = value.response450;
      this._response4Xx = value.response4Xx;
      this._response500 = value.response500;
      this._response501 = value.response501;
      this._response502 = value.response502;
      this._response503 = value.response503;
      this._response504 = value.response504;
      this._response505 = value.response505;
      this._response506 = value.response506;
      this._response507 = value.response507;
      this._response508 = value.response508;
      this._response509 = value.response509;
      this._response510 = value.response510;
      this._response5Xx = value.response5Xx;
      this._response6Xx = value.response6Xx;
      this._responseHttp10 = value.responseHttp10;
      this._responseHttp11 = value.responseHttp11;
      this._responseUnknown = value.responseUnknown;
      this._retry503 = value.retry503;
      this._rspChunk = value.rspChunk;
      this._rspContentLen = value.rspContentLen;
      this._rspSz16K = value.rspSz16K;
      this._rspSz1K = value.rspSz1K;
      this._rspSz256K = value.rspSz256K;
      this._rspSz2K = value.rspSz2K;
      this._rspSz32K = value.rspSz32K;
      this._rspSz4K = value.rspSz4K;
      this._rspSz64K = value.rspSz64K;
      this._rspSz8K = value.rspSz8K;
      this._rspSzGt256K = value.rspSzGt256K;
      this._serverResel = value.serverResel;
      this._serverReselFailed = value.serverReselFailed;
      this._serverRst = value.serverRst;
      this._serverRstConnected = value.serverRstConnected;
      this._serverRstConnecting = value.serverRstConnecting;
      this._serverRstRequest = value.serverRstRequest;
      this._serverRstResponse = value.serverRstResponse;
      this._skipInsertClientIp = value.skipInsertClientIp;
      this._skipInsertClientPort = value.skipInsertClientPort;
      this._snatFail = value.snatFail;
      this._staleSess = value.staleSess;
      this._svrPremClose = value.svrPremClose;
      this._svrselFail = value.svrselFail;
      this._tcpoutrst = value.tcpoutrst;
      this._tooManyHeaders = value.tooManyHeaders;
      this._totalProxy = value.totalProxy;
      this._urlSwitching = value.urlSwitching;
      this._urlSwitchingEnqueue = value.urlSwitchingEnqueue;
      this._urlSwitchingOk = value.urlSwitchingOk;
      this._wrongRespHeader = value.wrongRespHeader;
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

  // aflex_retry - computed: false, optional: true, required: false
  private _aflexRetry?: number; 
  public get aflexRetry() {
    return this.getNumberAttribute('aflex_retry');
  }
  public set aflexRetry(value: number) {
    this._aflexRetry = value;
  }
  public resetAflexRetry() {
    this._aflexRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexRetryInput() {
    return this._aflexRetry;
  }

  // aflex_switching - computed: false, optional: true, required: false
  private _aflexSwitching?: number; 
  public get aflexSwitching() {
    return this.getNumberAttribute('aflex_switching');
  }
  public set aflexSwitching(value: number) {
    this._aflexSwitching = value;
  }
  public resetAflexSwitching() {
    this._aflexSwitching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexSwitchingInput() {
    return this._aflexSwitching;
  }

  // aflex_switching_enqueue - computed: false, optional: true, required: false
  private _aflexSwitchingEnqueue?: number; 
  public get aflexSwitchingEnqueue() {
    return this.getNumberAttribute('aflex_switching_enqueue');
  }
  public set aflexSwitchingEnqueue(value: number) {
    this._aflexSwitchingEnqueue = value;
  }
  public resetAflexSwitchingEnqueue() {
    this._aflexSwitchingEnqueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexSwitchingEnqueueInput() {
    return this._aflexSwitchingEnqueue;
  }

  // aflex_switching_ok - computed: false, optional: true, required: false
  private _aflexSwitchingOk?: number; 
  public get aflexSwitchingOk() {
    return this.getNumberAttribute('aflex_switching_ok');
  }
  public set aflexSwitchingOk(value: number) {
    this._aflexSwitchingOk = value;
  }
  public resetAflexSwitchingOk() {
    this._aflexSwitchingOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexSwitchingOkInput() {
    return this._aflexSwitchingOk;
  }

  // asm_cookie_fail - computed: false, optional: true, required: false
  private _asmCookieFail?: number; 
  public get asmCookieFail() {
    return this.getNumberAttribute('asm_cookie_fail');
  }
  public set asmCookieFail(value: number) {
    this._asmCookieFail = value;
  }
  public resetAsmCookieFail() {
    this._asmCookieFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asmCookieFailInput() {
    return this._asmCookieFail;
  }

  // asm_cookie_header_fail - computed: false, optional: true, required: false
  private _asmCookieHeaderFail?: number; 
  public get asmCookieHeaderFail() {
    return this.getNumberAttribute('asm_cookie_header_fail');
  }
  public set asmCookieHeaderFail(value: number) {
    this._asmCookieHeaderFail = value;
  }
  public resetAsmCookieHeaderFail() {
    this._asmCookieHeaderFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asmCookieHeaderFailInput() {
    return this._asmCookieHeaderFail;
  }

  // asm_setcookie_fail - computed: false, optional: true, required: false
  private _asmSetcookieFail?: number; 
  public get asmSetcookieFail() {
    return this.getNumberAttribute('asm_setcookie_fail');
  }
  public set asmSetcookieFail(value: number) {
    this._asmSetcookieFail = value;
  }
  public resetAsmSetcookieFail() {
    this._asmSetcookieFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asmSetcookieFailInput() {
    return this._asmSetcookieFail;
  }

  // asm_setcookie_header_fail - computed: false, optional: true, required: false
  private _asmSetcookieHeaderFail?: number; 
  public get asmSetcookieHeaderFail() {
    return this.getNumberAttribute('asm_setcookie_header_fail');
  }
  public set asmSetcookieHeaderFail(value: number) {
    this._asmSetcookieHeaderFail = value;
  }
  public resetAsmSetcookieHeaderFail() {
    this._asmSetcookieHeaderFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asmSetcookieHeaderFailInput() {
    return this._asmSetcookieHeaderFail;
  }

  // cache_rsp - computed: false, optional: true, required: false
  private _cacheRsp?: number; 
  public get cacheRsp() {
    return this.getNumberAttribute('cache_rsp');
  }
  public set cacheRsp(value: number) {
    this._cacheRsp = value;
  }
  public resetCacheRsp() {
    this._cacheRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheRspInput() {
    return this._cacheRsp;
  }

  // chunk_bad - computed: false, optional: true, required: false
  private _chunkBad?: number; 
  public get chunkBad() {
    return this.getNumberAttribute('chunk_bad');
  }
  public set chunkBad(value: number) {
    this._chunkBad = value;
  }
  public resetChunkBad() {
    this._chunkBad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkBadInput() {
    return this._chunkBad;
  }

  // chunk_sz_1k - computed: false, optional: true, required: false
  private _chunkSz1K?: number; 
  public get chunkSz1K() {
    return this.getNumberAttribute('chunk_sz_1k');
  }
  public set chunkSz1K(value: number) {
    this._chunkSz1K = value;
  }
  public resetChunkSz1K() {
    this._chunkSz1K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSz1KInput() {
    return this._chunkSz1K;
  }

  // chunk_sz_2k - computed: false, optional: true, required: false
  private _chunkSz2K?: number; 
  public get chunkSz2K() {
    return this.getNumberAttribute('chunk_sz_2k');
  }
  public set chunkSz2K(value: number) {
    this._chunkSz2K = value;
  }
  public resetChunkSz2K() {
    this._chunkSz2K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSz2KInput() {
    return this._chunkSz2K;
  }

  // chunk_sz_4k - computed: false, optional: true, required: false
  private _chunkSz4K?: number; 
  public get chunkSz4K() {
    return this.getNumberAttribute('chunk_sz_4k');
  }
  public set chunkSz4K(value: number) {
    this._chunkSz4K = value;
  }
  public resetChunkSz4K() {
    this._chunkSz4K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSz4KInput() {
    return this._chunkSz4K;
  }

  // chunk_sz_512 - computed: false, optional: true, required: false
  private _chunkSz512?: number; 
  public get chunkSz512() {
    return this.getNumberAttribute('chunk_sz_512');
  }
  public set chunkSz512(value: number) {
    this._chunkSz512 = value;
  }
  public resetChunkSz512() {
    this._chunkSz512 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSz512Input() {
    return this._chunkSz512;
  }

  // chunk_sz_gt_4k - computed: false, optional: true, required: false
  private _chunkSzGt4K?: number; 
  public get chunkSzGt4K() {
    return this.getNumberAttribute('chunk_sz_gt_4k');
  }
  public set chunkSzGt4K(value: number) {
    this._chunkSzGt4K = value;
  }
  public resetChunkSzGt4K() {
    this._chunkSzGt4K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSzGt4KInput() {
    return this._chunkSzGt4K;
  }

  // client_req_unexp_flag - computed: false, optional: true, required: false
  private _clientReqUnexpFlag?: number; 
  public get clientReqUnexpFlag() {
    return this.getNumberAttribute('client_req_unexp_flag');
  }
  public set clientReqUnexpFlag(value: number) {
    this._clientReqUnexpFlag = value;
  }
  public resetClientReqUnexpFlag() {
    this._clientReqUnexpFlag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientReqUnexpFlagInput() {
    return this._clientReqUnexpFlag;
  }

  // client_rst - computed: false, optional: true, required: false
  private _clientRst?: number; 
  public get clientRst() {
    return this.getNumberAttribute('client_rst');
  }
  public set clientRst(value: number) {
    this._clientRst = value;
  }
  public resetClientRst() {
    this._clientRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRstInput() {
    return this._clientRst;
  }

  // client_rst_connected - computed: false, optional: true, required: false
  private _clientRstConnected?: number; 
  public get clientRstConnected() {
    return this.getNumberAttribute('client_rst_connected');
  }
  public set clientRstConnected(value: number) {
    this._clientRstConnected = value;
  }
  public resetClientRstConnected() {
    this._clientRstConnected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRstConnectedInput() {
    return this._clientRstConnected;
  }

  // client_rst_connecting - computed: false, optional: true, required: false
  private _clientRstConnecting?: number; 
  public get clientRstConnecting() {
    return this.getNumberAttribute('client_rst_connecting');
  }
  public set clientRstConnecting(value: number) {
    this._clientRstConnecting = value;
  }
  public resetClientRstConnecting() {
    this._clientRstConnecting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRstConnectingInput() {
    return this._clientRstConnecting;
  }

  // client_rst_request - computed: false, optional: true, required: false
  private _clientRstRequest?: number; 
  public get clientRstRequest() {
    return this.getNumberAttribute('client_rst_request');
  }
  public set clientRstRequest(value: number) {
    this._clientRstRequest = value;
  }
  public resetClientRstRequest() {
    this._clientRstRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRstRequestInput() {
    return this._clientRstRequest;
  }

  // client_rst_response - computed: false, optional: true, required: false
  private _clientRstResponse?: number; 
  public get clientRstResponse() {
    return this.getNumberAttribute('client_rst_response');
  }
  public set clientRstResponse(value: number) {
    this._clientRstResponse = value;
  }
  public resetClientRstResponse() {
    this._clientRstResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRstResponseInput() {
    return this._clientRstResponse;
  }

  // close_on_ddos - computed: false, optional: true, required: false
  private _closeOnDdos?: number; 
  public get closeOnDdos() {
    return this.getNumberAttribute('close_on_ddos');
  }
  public set closeOnDdos(value: number) {
    this._closeOnDdos = value;
  }
  public resetCloseOnDdos() {
    this._closeOnDdos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeOnDdosInput() {
    return this._closeOnDdos;
  }

  // compress_content_type_excluded - computed: false, optional: true, required: false
  private _compressContentTypeExcluded?: number; 
  public get compressContentTypeExcluded() {
    return this.getNumberAttribute('compress_content_type_excluded');
  }
  public set compressContentTypeExcluded(value: number) {
    this._compressContentTypeExcluded = value;
  }
  public resetCompressContentTypeExcluded() {
    this._compressContentTypeExcluded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressContentTypeExcludedInput() {
    return this._compressContentTypeExcluded;
  }

  // compress_del_accept_enc - computed: false, optional: true, required: false
  private _compressDelAcceptEnc?: number; 
  public get compressDelAcceptEnc() {
    return this.getNumberAttribute('compress_del_accept_enc');
  }
  public set compressDelAcceptEnc(value: number) {
    this._compressDelAcceptEnc = value;
  }
  public resetCompressDelAcceptEnc() {
    this._compressDelAcceptEnc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressDelAcceptEncInput() {
    return this._compressDelAcceptEnc;
  }

  // compress_no_content_type - computed: false, optional: true, required: false
  private _compressNoContentType?: number; 
  public get compressNoContentType() {
    return this.getNumberAttribute('compress_no_content_type');
  }
  public set compressNoContentType(value: number) {
    this._compressNoContentType = value;
  }
  public resetCompressNoContentType() {
    this._compressNoContentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressNoContentTypeInput() {
    return this._compressNoContentType;
  }

  // compress_ratio_too_high - computed: false, optional: true, required: false
  private _compressRatioTooHigh?: number; 
  public get compressRatioTooHigh() {
    return this.getNumberAttribute('compress_ratio_too_high');
  }
  public set compressRatioTooHigh(value: number) {
    this._compressRatioTooHigh = value;
  }
  public resetCompressRatioTooHigh() {
    this._compressRatioTooHigh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressRatioTooHighInput() {
    return this._compressRatioTooHigh;
  }

  // compress_resp_already_compressed - computed: false, optional: true, required: false
  private _compressRespAlreadyCompressed?: number; 
  public get compressRespAlreadyCompressed() {
    return this.getNumberAttribute('compress_resp_already_compressed');
  }
  public set compressRespAlreadyCompressed(value: number) {
    this._compressRespAlreadyCompressed = value;
  }
  public resetCompressRespAlreadyCompressed() {
    this._compressRespAlreadyCompressed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressRespAlreadyCompressedInput() {
    return this._compressRespAlreadyCompressed;
  }

  // compress_resp_lt_min - computed: false, optional: true, required: false
  private _compressRespLtMin?: number; 
  public get compressRespLtMin() {
    return this.getNumberAttribute('compress_resp_lt_min');
  }
  public set compressRespLtMin(value: number) {
    this._compressRespLtMin = value;
  }
  public resetCompressRespLtMin() {
    this._compressRespLtMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressRespLtMinInput() {
    return this._compressRespLtMin;
  }

  // compress_resp_no_cl_or_ce - computed: false, optional: true, required: false
  private _compressRespNoClOrCe?: number; 
  public get compressRespNoClOrCe() {
    return this.getNumberAttribute('compress_resp_no_cl_or_ce');
  }
  public set compressRespNoClOrCe(value: number) {
    this._compressRespNoClOrCe = value;
  }
  public resetCompressRespNoClOrCe() {
    this._compressRespNoClOrCe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressRespNoClOrCeInput() {
    return this._compressRespNoClOrCe;
  }

  // compress_rsp - computed: false, optional: true, required: false
  private _compressRsp?: number; 
  public get compressRsp() {
    return this.getNumberAttribute('compress_rsp');
  }
  public set compressRsp(value: number) {
    this._compressRsp = value;
  }
  public resetCompressRsp() {
    this._compressRsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressRspInput() {
    return this._compressRsp;
  }

  // compress_rsp_br - computed: false, optional: true, required: false
  private _compressRspBr?: number; 
  public get compressRspBr() {
    return this.getNumberAttribute('compress_rsp_br');
  }
  public set compressRspBr(value: number) {
    this._compressRspBr = value;
  }
  public resetCompressRspBr() {
    this._compressRspBr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressRspBrInput() {
    return this._compressRspBr;
  }

  // compress_rsp_total - computed: false, optional: true, required: false
  private _compressRspTotal?: number; 
  public get compressRspTotal() {
    return this.getNumberAttribute('compress_rsp_total');
  }
  public set compressRspTotal(value: number) {
    this._compressRspTotal = value;
  }
  public resetCompressRspTotal() {
    this._compressRspTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressRspTotalInput() {
    return this._compressRspTotal;
  }

  // connecting_ack - computed: false, optional: true, required: false
  private _connectingAck?: number; 
  public get connectingAck() {
    return this.getNumberAttribute('connecting_ack');
  }
  public set connectingAck(value: number) {
    this._connectingAck = value;
  }
  public resetConnectingAck() {
    this._connectingAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectingAckInput() {
    return this._connectingAck;
  }

  // connecting_fin - computed: false, optional: true, required: false
  private _connectingFin?: number; 
  public get connectingFin() {
    return this.getNumberAttribute('connecting_fin');
  }
  public set connectingFin(value: number) {
    this._connectingFin = value;
  }
  public resetConnectingFin() {
    this._connectingFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectingFinInput() {
    return this._connectingFin;
  }

  // connecting_fin_ofo - computed: false, optional: true, required: false
  private _connectingFinOfo?: number; 
  public get connectingFinOfo() {
    return this.getNumberAttribute('connecting_fin_ofo');
  }
  public set connectingFinOfo(value: number) {
    this._connectingFinOfo = value;
  }
  public resetConnectingFinOfo() {
    this._connectingFinOfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectingFinOfoInput() {
    return this._connectingFinOfo;
  }

  // connecting_fin_retrans - computed: false, optional: true, required: false
  private _connectingFinRetrans?: number; 
  public get connectingFinRetrans() {
    return this.getNumberAttribute('connecting_fin_retrans');
  }
  public set connectingFinRetrans(value: number) {
    this._connectingFinRetrans = value;
  }
  public resetConnectingFinRetrans() {
    this._connectingFinRetrans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectingFinRetransInput() {
    return this._connectingFinRetrans;
  }

  // connecting_rst - computed: false, optional: true, required: false
  private _connectingRst?: number; 
  public get connectingRst() {
    return this.getNumberAttribute('connecting_rst');
  }
  public set connectingRst(value: number) {
    this._connectingRst = value;
  }
  public resetConnectingRst() {
    this._connectingRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectingRstInput() {
    return this._connectingRst;
  }

  // connecting_rst_ofo - computed: false, optional: true, required: false
  private _connectingRstOfo?: number; 
  public get connectingRstOfo() {
    return this.getNumberAttribute('connecting_rst_ofo');
  }
  public set connectingRstOfo(value: number) {
    this._connectingRstOfo = value;
  }
  public resetConnectingRstOfo() {
    this._connectingRstOfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectingRstOfoInput() {
    return this._connectingRstOfo;
  }

  // connecting_rst_retrans - computed: false, optional: true, required: false
  private _connectingRstRetrans?: number; 
  public get connectingRstRetrans() {
    return this.getNumberAttribute('connecting_rst_retrans');
  }
  public set connectingRstRetrans(value: number) {
    this._connectingRstRetrans = value;
  }
  public resetConnectingRstRetrans() {
    this._connectingRstRetrans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectingRstRetransInput() {
    return this._connectingRstRetrans;
  }

  // cookie_switching - computed: false, optional: true, required: false
  private _cookieSwitching?: number; 
  public get cookieSwitching() {
    return this.getNumberAttribute('cookie_switching');
  }
  public set cookieSwitching(value: number) {
    this._cookieSwitching = value;
  }
  public resetCookieSwitching() {
    this._cookieSwitching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieSwitchingInput() {
    return this._cookieSwitching;
  }

  // cookie_switching_enqueue - computed: false, optional: true, required: false
  private _cookieSwitchingEnqueue?: number; 
  public get cookieSwitchingEnqueue() {
    return this.getNumberAttribute('cookie_switching_enqueue');
  }
  public set cookieSwitchingEnqueue(value: number) {
    this._cookieSwitchingEnqueue = value;
  }
  public resetCookieSwitchingEnqueue() {
    this._cookieSwitchingEnqueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieSwitchingEnqueueInput() {
    return this._cookieSwitchingEnqueue;
  }

  // cookie_switching_ok - computed: false, optional: true, required: false
  private _cookieSwitchingOk?: number; 
  public get cookieSwitchingOk() {
    return this.getNumberAttribute('cookie_switching_ok');
  }
  public set cookieSwitchingOk(value: number) {
    this._cookieSwitchingOk = value;
  }
  public resetCookieSwitchingOk() {
    this._cookieSwitchingOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieSwitchingOkInput() {
    return this._cookieSwitchingOk;
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

  // full_proxy - computed: false, optional: true, required: false
  private _fullProxy?: number; 
  public get fullProxy() {
    return this.getNumberAttribute('full_proxy');
  }
  public set fullProxy(value: number) {
    this._fullProxy = value;
  }
  public resetFullProxy() {
    this._fullProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullProxyInput() {
    return this._fullProxy;
  }

  // full_proxy_fpga_err - computed: false, optional: true, required: false
  private _fullProxyFpgaErr?: number; 
  public get fullProxyFpgaErr() {
    return this.getNumberAttribute('full_proxy_fpga_err');
  }
  public set fullProxyFpgaErr(value: number) {
    this._fullProxyFpgaErr = value;
  }
  public resetFullProxyFpgaErr() {
    this._fullProxyFpgaErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullProxyFpgaErrInput() {
    return this._fullProxyFpgaErr;
  }

  // full_proxy_pipeline - computed: false, optional: true, required: false
  private _fullProxyPipeline?: number; 
  public get fullProxyPipeline() {
    return this.getNumberAttribute('full_proxy_pipeline');
  }
  public set fullProxyPipeline(value: number) {
    this._fullProxyPipeline = value;
  }
  public resetFullProxyPipeline() {
    this._fullProxyPipeline = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullProxyPipelineInput() {
    return this._fullProxyPipeline;
  }

  // full_proxy_post - computed: false, optional: true, required: false
  private _fullProxyPost?: number; 
  public get fullProxyPost() {
    return this.getNumberAttribute('full_proxy_post');
  }
  public set fullProxyPost(value: number) {
    this._fullProxyPost = value;
  }
  public resetFullProxyPost() {
    this._fullProxyPost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullProxyPostInput() {
    return this._fullProxyPost;
  }

  // full_proxy_put - computed: false, optional: true, required: false
  private _fullProxyPut?: number; 
  public get fullProxyPut() {
    return this.getNumberAttribute('full_proxy_put');
  }
  public set fullProxyPut(value: number) {
    this._fullProxyPut = value;
  }
  public resetFullProxyPut() {
    this._fullProxyPut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullProxyPutInput() {
    return this._fullProxyPut;
  }

  // fwdreq_fail - computed: false, optional: true, required: false
  private _fwdreqFail?: number; 
  public get fwdreqFail() {
    return this.getNumberAttribute('fwdreq_fail');
  }
  public set fwdreqFail(value: number) {
    this._fwdreqFail = value;
  }
  public resetFwdreqFail() {
    this._fwdreqFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdreqFailInput() {
    return this._fwdreqFail;
  }

  // fwdreq_fail_buff - computed: false, optional: true, required: false
  private _fwdreqFailBuff?: number; 
  public get fwdreqFailBuff() {
    return this.getNumberAttribute('fwdreq_fail_buff');
  }
  public set fwdreqFailBuff(value: number) {
    this._fwdreqFailBuff = value;
  }
  public resetFwdreqFailBuff() {
    this._fwdreqFailBuff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdreqFailBuffInput() {
    return this._fwdreqFailBuff;
  }

  // fwdreq_fail_persist - computed: false, optional: true, required: false
  private _fwdreqFailPersist?: number; 
  public get fwdreqFailPersist() {
    return this.getNumberAttribute('fwdreq_fail_persist');
  }
  public set fwdreqFailPersist(value: number) {
    this._fwdreqFailPersist = value;
  }
  public resetFwdreqFailPersist() {
    this._fwdreqFailPersist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdreqFailPersistInput() {
    return this._fwdreqFailPersist;
  }

  // fwdreq_fail_route - computed: false, optional: true, required: false
  private _fwdreqFailRoute?: number; 
  public get fwdreqFailRoute() {
    return this.getNumberAttribute('fwdreq_fail_route');
  }
  public set fwdreqFailRoute(value: number) {
    this._fwdreqFailRoute = value;
  }
  public resetFwdreqFailRoute() {
    this._fwdreqFailRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdreqFailRouteInput() {
    return this._fwdreqFailRoute;
  }

  // fwdreq_fail_rport - computed: false, optional: true, required: false
  private _fwdreqFailRport?: number; 
  public get fwdreqFailRport() {
    return this.getNumberAttribute('fwdreq_fail_rport');
  }
  public set fwdreqFailRport(value: number) {
    this._fwdreqFailRport = value;
  }
  public resetFwdreqFailRport() {
    this._fwdreqFailRport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdreqFailRportInput() {
    return this._fwdreqFailRport;
  }

  // fwdreq_fail_server - computed: false, optional: true, required: false
  private _fwdreqFailServer?: number; 
  public get fwdreqFailServer() {
    return this.getNumberAttribute('fwdreq_fail_server');
  }
  public set fwdreqFailServer(value: number) {
    this._fwdreqFailServer = value;
  }
  public resetFwdreqFailServer() {
    this._fwdreqFailServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdreqFailServerInput() {
    return this._fwdreqFailServer;
  }

  // fwdreq_fail_tuple - computed: false, optional: true, required: false
  private _fwdreqFailTuple?: number; 
  public get fwdreqFailTuple() {
    return this.getNumberAttribute('fwdreq_fail_tuple');
  }
  public set fwdreqFailTuple(value: number) {
    this._fwdreqFailTuple = value;
  }
  public resetFwdreqFailTuple() {
    this._fwdreqFailTuple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdreqFailTupleInput() {
    return this._fwdreqFailTuple;
  }

  // fwdreqdata_fail - computed: false, optional: true, required: false
  private _fwdreqdataFail?: number; 
  public get fwdreqdataFail() {
    return this.getNumberAttribute('fwdreqdata_fail');
  }
  public set fwdreqdataFail(value: number) {
    this._fwdreqdataFail = value;
  }
  public resetFwdreqdataFail() {
    this._fwdreqdataFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdreqdataFailInput() {
    return this._fwdreqdataFail;
  }

  // header_delete - computed: false, optional: true, required: false
  private _headerDelete?: number; 
  public get headerDelete() {
    return this.getNumberAttribute('header_delete');
  }
  public set headerDelete(value: number) {
    this._headerDelete = value;
  }
  public resetHeaderDelete() {
    this._headerDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerDeleteInput() {
    return this._headerDelete;
  }

  // header_insert - computed: false, optional: true, required: false
  private _headerInsert?: number; 
  public get headerInsert() {
    return this.getNumberAttribute('header_insert');
  }
  public set headerInsert(value: number) {
    this._headerInsert = value;
  }
  public resetHeaderInsert() {
    this._headerInsert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInsertInput() {
    return this._headerInsert;
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

  // host_switching - computed: false, optional: true, required: false
  private _hostSwitching?: number; 
  public get hostSwitching() {
    return this.getNumberAttribute('host_switching');
  }
  public set hostSwitching(value: number) {
    this._hostSwitching = value;
  }
  public resetHostSwitching() {
    this._hostSwitching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSwitchingInput() {
    return this._hostSwitching;
  }

  // host_switching_enqueue - computed: false, optional: true, required: false
  private _hostSwitchingEnqueue?: number; 
  public get hostSwitchingEnqueue() {
    return this.getNumberAttribute('host_switching_enqueue');
  }
  public set hostSwitchingEnqueue(value: number) {
    this._hostSwitchingEnqueue = value;
  }
  public resetHostSwitchingEnqueue() {
    this._hostSwitchingEnqueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSwitchingEnqueueInput() {
    return this._hostSwitchingEnqueue;
  }

  // host_switching_ok - computed: false, optional: true, required: false
  private _hostSwitchingOk?: number; 
  public get hostSwitchingOk() {
    return this.getNumberAttribute('host_switching_ok');
  }
  public set hostSwitchingOk(value: number) {
    this._hostSwitchingOk = value;
  }
  public resetHostSwitchingOk() {
    this._hostSwitchingOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSwitchingOkInput() {
    return this._hostSwitchingOk;
  }

  // http_pkts_ofo - computed: false, optional: true, required: false
  private _httpPktsOfo?: number; 
  public get httpPktsOfo() {
    return this.getNumberAttribute('http_pkts_ofo');
  }
  public set httpPktsOfo(value: number) {
    this._httpPktsOfo = value;
  }
  public resetHttpPktsOfo() {
    this._httpPktsOfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPktsOfoInput() {
    return this._httpPktsOfo;
  }

  // huge_cookie - computed: false, optional: true, required: false
  private _hugeCookie?: number; 
  public get hugeCookie() {
    return this.getNumberAttribute('huge_cookie');
  }
  public set hugeCookie(value: number) {
    this._hugeCookie = value;
  }
  public resetHugeCookie() {
    this._hugeCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hugeCookieInput() {
    return this._hugeCookie;
  }

  // huge_cookie_header - computed: false, optional: true, required: false
  private _hugeCookieHeader?: number; 
  public get hugeCookieHeader() {
    return this.getNumberAttribute('huge_cookie_header');
  }
  public set hugeCookieHeader(value: number) {
    this._hugeCookieHeader = value;
  }
  public resetHugeCookieHeader() {
    this._hugeCookieHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hugeCookieHeaderInput() {
    return this._hugeCookieHeader;
  }

  // insert_client_ip - computed: false, optional: true, required: false
  private _insertClientIp?: number; 
  public get insertClientIp() {
    return this.getNumberAttribute('insert_client_ip');
  }
  public set insertClientIp(value: number) {
    this._insertClientIp = value;
  }
  public resetInsertClientIp() {
    this._insertClientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertClientIpInput() {
    return this._insertClientIp;
  }

  // insert_client_port - computed: false, optional: true, required: false
  private _insertClientPort?: number; 
  public get insertClientPort() {
    return this.getNumberAttribute('insert_client_port');
  }
  public set insertClientPort(value: number) {
    this._insertClientPort = value;
  }
  public resetInsertClientPort() {
    this._insertClientPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertClientPortInput() {
    return this._insertClientPort;
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

  // l4_switching - computed: false, optional: true, required: false
  private _l4Switching?: number; 
  public get l4Switching() {
    return this.getNumberAttribute('l4_switching');
  }
  public set l4Switching(value: number) {
    this._l4Switching = value;
  }
  public resetL4Switching() {
    this._l4Switching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SwitchingInput() {
    return this._l4Switching;
  }

  // l4_switching_enqueue - computed: false, optional: true, required: false
  private _l4SwitchingEnqueue?: number; 
  public get l4SwitchingEnqueue() {
    return this.getNumberAttribute('l4_switching_enqueue');
  }
  public set l4SwitchingEnqueue(value: number) {
    this._l4SwitchingEnqueue = value;
  }
  public resetL4SwitchingEnqueue() {
    this._l4SwitchingEnqueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SwitchingEnqueueInput() {
    return this._l4SwitchingEnqueue;
  }

  // l4_switching_ok - computed: false, optional: true, required: false
  private _l4SwitchingOk?: number; 
  public get l4SwitchingOk() {
    return this.getNumberAttribute('l4_switching_ok');
  }
  public set l4SwitchingOk(value: number) {
    this._l4SwitchingOk = value;
  }
  public resetL4SwitchingOk() {
    this._l4SwitchingOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4SwitchingOkInput() {
    return this._l4SwitchingOk;
  }

  // large_cookie - computed: false, optional: true, required: false
  private _largeCookie?: number; 
  public get largeCookie() {
    return this.getNumberAttribute('large_cookie');
  }
  public set largeCookie(value: number) {
    this._largeCookie = value;
  }
  public resetLargeCookie() {
    this._largeCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeCookieInput() {
    return this._largeCookie;
  }

  // large_cookie_header - computed: false, optional: true, required: false
  private _largeCookieHeader?: number; 
  public get largeCookieHeader() {
    return this.getNumberAttribute('large_cookie_header');
  }
  public set largeCookieHeader(value: number) {
    this._largeCookieHeader = value;
  }
  public resetLargeCookieHeader() {
    this._largeCookieHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get largeCookieHeaderInput() {
    return this._largeCookieHeader;
  }

  // lb_switching - computed: false, optional: true, required: false
  private _lbSwitching?: number; 
  public get lbSwitching() {
    return this.getNumberAttribute('lb_switching');
  }
  public set lbSwitching(value: number) {
    this._lbSwitching = value;
  }
  public resetLbSwitching() {
    this._lbSwitching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbSwitchingInput() {
    return this._lbSwitching;
  }

  // lb_switching_enqueue - computed: false, optional: true, required: false
  private _lbSwitchingEnqueue?: number; 
  public get lbSwitchingEnqueue() {
    return this.getNumberAttribute('lb_switching_enqueue');
  }
  public set lbSwitchingEnqueue(value: number) {
    this._lbSwitchingEnqueue = value;
  }
  public resetLbSwitchingEnqueue() {
    this._lbSwitchingEnqueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbSwitchingEnqueueInput() {
    return this._lbSwitchingEnqueue;
  }

  // lb_switching_ok - computed: false, optional: true, required: false
  private _lbSwitchingOk?: number; 
  public get lbSwitchingOk() {
    return this.getNumberAttribute('lb_switching_ok');
  }
  public set lbSwitchingOk(value: number) {
    this._lbSwitchingOk = value;
  }
  public resetLbSwitchingOk() {
    this._lbSwitchingOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lbSwitchingOkInput() {
    return this._lbSwitchingOk;
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

  // negative_req_remain - computed: false, optional: true, required: false
  private _negativeReqRemain?: number; 
  public get negativeReqRemain() {
    return this.getNumberAttribute('negative_req_remain');
  }
  public set negativeReqRemain(value: number) {
    this._negativeReqRemain = value;
  }
  public resetNegativeReqRemain() {
    this._negativeReqRemain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeReqRemainInput() {
    return this._negativeReqRemain;
  }

  // negative_resp_remain - computed: false, optional: true, required: false
  private _negativeRespRemain?: number; 
  public get negativeRespRemain() {
    return this.getNumberAttribute('negative_resp_remain');
  }
  public set negativeRespRemain(value: number) {
    this._negativeRespRemain = value;
  }
  public resetNegativeRespRemain() {
    this._negativeRespRemain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeRespRemainInput() {
    return this._negativeRespRemain;
  }

  // new_svrconn - computed: false, optional: true, required: false
  private _newSvrconn?: number; 
  public get newSvrconn() {
    return this.getNumberAttribute('new_svrconn');
  }
  public set newSvrconn(value: number) {
    this._newSvrconn = value;
  }
  public resetNewSvrconn() {
    this._newSvrconn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newSvrconnInput() {
    return this._newSvrconn;
  }

  // non_http_bypass - computed: false, optional: true, required: false
  private _nonHttpBypass?: number; 
  public get nonHttpBypass() {
    return this.getNumberAttribute('non_http_bypass');
  }
  public set nonHttpBypass(value: number) {
    this._nonHttpBypass = value;
  }
  public resetNonHttpBypass() {
    this._nonHttpBypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nonHttpBypassInput() {
    return this._nonHttpBypass;
  }

  // noproxy - computed: false, optional: true, required: false
  private _noproxy?: number; 
  public get noproxy() {
    return this.getNumberAttribute('noproxy');
  }
  public set noproxy(value: number) {
    this._noproxy = value;
  }
  public resetNoproxy() {
    this._noproxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noproxyInput() {
    return this._noproxy;
  }

  // notuple - computed: false, optional: true, required: false
  private _notuple?: number; 
  public get notuple() {
    return this.getNumberAttribute('notuple');
  }
  public set notuple(value: number) {
    this._notuple = value;
  }
  public resetNotuple() {
    this._notuple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notupleInput() {
    return this._notuple;
  }

  // parse_cookie_fail - computed: false, optional: true, required: false
  private _parseCookieFail?: number; 
  public get parseCookieFail() {
    return this.getNumberAttribute('parse_cookie_fail');
  }
  public set parseCookieFail(value: number) {
    this._parseCookieFail = value;
  }
  public resetParseCookieFail() {
    this._parseCookieFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseCookieFailInput() {
    return this._parseCookieFail;
  }

  // parse_setcookie_fail - computed: false, optional: true, required: false
  private _parseSetcookieFail?: number; 
  public get parseSetcookieFail() {
    return this.getNumberAttribute('parse_setcookie_fail');
  }
  public set parseSetcookieFail(value: number) {
    this._parseSetcookieFail = value;
  }
  public resetParseSetcookieFail() {
    this._parseSetcookieFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseSetcookieFailInput() {
    return this._parseSetcookieFail;
  }

  // parsereq_fail - computed: false, optional: true, required: false
  private _parsereqFail?: number; 
  public get parsereqFail() {
    return this.getNumberAttribute('parsereq_fail');
  }
  public set parsereqFail(value: number) {
    this._parsereqFail = value;
  }
  public resetParsereqFail() {
    this._parsereqFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parsereqFailInput() {
    return this._parsereqFail;
  }

  // pconn_connected - computed: false, optional: true, required: false
  private _pconnConnected?: number; 
  public get pconnConnected() {
    return this.getNumberAttribute('pconn_connected');
  }
  public set pconnConnected(value: number) {
    this._pconnConnected = value;
  }
  public resetPconnConnected() {
    this._pconnConnected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pconnConnectedInput() {
    return this._pconnConnected;
  }

  // pconn_connecting - computed: false, optional: true, required: false
  private _pconnConnecting?: number; 
  public get pconnConnecting() {
    return this.getNumberAttribute('pconn_connecting');
  }
  public set pconnConnecting(value: number) {
    this._pconnConnecting = value;
  }
  public resetPconnConnecting() {
    this._pconnConnecting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pconnConnectingInput() {
    return this._pconnConnecting;
  }

  // pconn_connecting_failed - computed: false, optional: true, required: false
  private _pconnConnectingFailed?: number; 
  public get pconnConnectingFailed() {
    return this.getNumberAttribute('pconn_connecting_failed');
  }
  public set pconnConnectingFailed(value: number) {
    this._pconnConnectingFailed = value;
  }
  public resetPconnConnectingFailed() {
    this._pconnConnectingFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pconnConnectingFailedInput() {
    return this._pconnConnectingFailed;
  }

  // pkts_ofo - computed: false, optional: true, required: false
  private _pktsOfo?: number; 
  public get pktsOfo() {
    return this.getNumberAttribute('pkts_ofo');
  }
  public set pktsOfo(value: number) {
    this._pktsOfo = value;
  }
  public resetPktsOfo() {
    this._pktsOfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktsOfoInput() {
    return this._pktsOfo;
  }

  // pkts_retrans - computed: false, optional: true, required: false
  private _pktsRetrans?: number; 
  public get pktsRetrans() {
    return this.getNumberAttribute('pkts_retrans');
  }
  public set pktsRetrans(value: number) {
    this._pktsRetrans = value;
  }
  public resetPktsRetrans() {
    this._pktsRetrans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktsRetransInput() {
    return this._pktsRetrans;
  }

  // pkts_retrans_ack_finwait - computed: false, optional: true, required: false
  private _pktsRetransAckFinwait?: number; 
  public get pktsRetransAckFinwait() {
    return this.getNumberAttribute('pkts_retrans_ack_finwait');
  }
  public set pktsRetransAckFinwait(value: number) {
    this._pktsRetransAckFinwait = value;
  }
  public resetPktsRetransAckFinwait() {
    this._pktsRetransAckFinwait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktsRetransAckFinwaitInput() {
    return this._pktsRetransAckFinwait;
  }

  // pkts_retrans_fin - computed: false, optional: true, required: false
  private _pktsRetransFin?: number; 
  public get pktsRetransFin() {
    return this.getNumberAttribute('pkts_retrans_fin');
  }
  public set pktsRetransFin(value: number) {
    this._pktsRetransFin = value;
  }
  public resetPktsRetransFin() {
    this._pktsRetransFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktsRetransFinInput() {
    return this._pktsRetransFin;
  }

  // pkts_retrans_push - computed: false, optional: true, required: false
  private _pktsRetransPush?: number; 
  public get pktsRetransPush() {
    return this.getNumberAttribute('pkts_retrans_push');
  }
  public set pktsRetransPush(value: number) {
    this._pktsRetransPush = value;
  }
  public resetPktsRetransPush() {
    this._pktsRetransPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktsRetransPushInput() {
    return this._pktsRetransPush;
  }

  // pkts_retrans_rst - computed: false, optional: true, required: false
  private _pktsRetransRst?: number; 
  public get pktsRetransRst() {
    return this.getNumberAttribute('pkts_retrans_rst');
  }
  public set pktsRetransRst(value: number) {
    this._pktsRetransRst = value;
  }
  public resetPktsRetransRst() {
    this._pktsRetransRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktsRetransRstInput() {
    return this._pktsRetransRst;
  }

  // req - computed: false, optional: true, required: false
  private _req?: number; 
  public get req() {
    return this.getNumberAttribute('req');
  }
  public set req(value: number) {
    this._req = value;
  }
  public resetReq() {
    this._req = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqInput() {
    return this._req;
  }

  // req_100m - computed: false, optional: true, required: false
  private _req100M?: number; 
  public get req100M() {
    return this.getNumberAttribute('req_100m');
  }
  public set req100M(value: number) {
    this._req100M = value;
  }
  public resetReq100M() {
    this._req100M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req100MInput() {
    return this._req100M;
  }

  // req_100u - computed: false, optional: true, required: false
  private _req100U?: number; 
  public get req100U() {
    return this.getNumberAttribute('req_100u');
  }
  public set req100U(value: number) {
    this._req100U = value;
  }
  public resetReq100U() {
    this._req100U = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req100UInput() {
    return this._req100U;
  }

  // req_10m - computed: false, optional: true, required: false
  private _req10M?: number; 
  public get req10M() {
    return this.getNumberAttribute('req_10m');
  }
  public set req10M(value: number) {
    this._req10M = value;
  }
  public resetReq10M() {
    this._req10M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req10MInput() {
    return this._req10M;
  }

  // req_10u - computed: false, optional: true, required: false
  private _req10U?: number; 
  public get req10U() {
    return this.getNumberAttribute('req_10u');
  }
  public set req10U(value: number) {
    this._req10U = value;
  }
  public resetReq10U() {
    this._req10U = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req10UInput() {
    return this._req10U;
  }

  // req_1m - computed: false, optional: true, required: false
  private _req1M?: number; 
  public get req1M() {
    return this.getNumberAttribute('req_1m');
  }
  public set req1M(value: number) {
    this._req1M = value;
  }
  public resetReq1M() {
    this._req1M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req1MInput() {
    return this._req1M;
  }

  // req_1s - computed: false, optional: true, required: false
  private _req1S?: number; 
  public get req1S() {
    return this.getNumberAttribute('req_1s');
  }
  public set req1S(value: number) {
    this._req1S = value;
  }
  public resetReq1S() {
    this._req1S = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req1SInput() {
    return this._req1S;
  }

  // req_200m - computed: false, optional: true, required: false
  private _req200M?: number; 
  public get req200M() {
    return this.getNumberAttribute('req_200m');
  }
  public set req200M(value: number) {
    this._req200M = value;
  }
  public resetReq200M() {
    this._req200M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req200MInput() {
    return this._req200M;
  }

  // req_200u - computed: false, optional: true, required: false
  private _req200U?: number; 
  public get req200U() {
    return this.getNumberAttribute('req_200u');
  }
  public set req200U(value: number) {
    this._req200U = value;
  }
  public resetReq200U() {
    this._req200U = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req200UInput() {
    return this._req200U;
  }

  // req_20m - computed: false, optional: true, required: false
  private _req20M?: number; 
  public get req20M() {
    return this.getNumberAttribute('req_20m');
  }
  public set req20M(value: number) {
    this._req20M = value;
  }
  public resetReq20M() {
    this._req20M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req20MInput() {
    return this._req20M;
  }

  // req_20u - computed: false, optional: true, required: false
  private _req20U?: number; 
  public get req20U() {
    return this.getNumberAttribute('req_20u');
  }
  public set req20U(value: number) {
    this._req20U = value;
  }
  public resetReq20U() {
    this._req20U = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req20UInput() {
    return this._req20U;
  }

  // req_2m - computed: false, optional: true, required: false
  private _req2M?: number; 
  public get req2M() {
    return this.getNumberAttribute('req_2m');
  }
  public set req2M(value: number) {
    this._req2M = value;
  }
  public resetReq2M() {
    this._req2M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req2MInput() {
    return this._req2M;
  }

  // req_2s - computed: false, optional: true, required: false
  private _req2S?: number; 
  public get req2S() {
    return this.getNumberAttribute('req_2s');
  }
  public set req2S(value: number) {
    this._req2S = value;
  }
  public resetReq2S() {
    this._req2S = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req2SInput() {
    return this._req2S;
  }

  // req_500m - computed: false, optional: true, required: false
  private _req500M?: number; 
  public get req500M() {
    return this.getNumberAttribute('req_500m');
  }
  public set req500M(value: number) {
    this._req500M = value;
  }
  public resetReq500M() {
    this._req500M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req500MInput() {
    return this._req500M;
  }

  // req_500u - computed: false, optional: true, required: false
  private _req500U?: number; 
  public get req500U() {
    return this.getNumberAttribute('req_500u');
  }
  public set req500U(value: number) {
    this._req500U = value;
  }
  public resetReq500U() {
    this._req500U = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req500UInput() {
    return this._req500U;
  }

  // req_50m - computed: false, optional: true, required: false
  private _req50M?: number; 
  public get req50M() {
    return this.getNumberAttribute('req_50m');
  }
  public set req50M(value: number) {
    this._req50M = value;
  }
  public resetReq50M() {
    this._req50M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req50MInput() {
    return this._req50M;
  }

  // req_50u - computed: false, optional: true, required: false
  private _req50U?: number; 
  public get req50U() {
    return this.getNumberAttribute('req_50u');
  }
  public set req50U(value: number) {
    this._req50U = value;
  }
  public resetReq50U() {
    this._req50U = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req50UInput() {
    return this._req50U;
  }

  // req_5m - computed: false, optional: true, required: false
  private _req5M?: number; 
  public get req5M() {
    return this.getNumberAttribute('req_5m');
  }
  public set req5M(value: number) {
    this._req5M = value;
  }
  public resetReq5M() {
    this._req5M = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req5MInput() {
    return this._req5M;
  }

  // req_5s - computed: false, optional: true, required: false
  private _req5S?: number; 
  public get req5S() {
    return this.getNumberAttribute('req_5s');
  }
  public set req5S(value: number) {
    this._req5S = value;
  }
  public resetReq5S() {
    this._req5S = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get req5SInput() {
    return this._req5S;
  }

  // req_chunk - computed: false, optional: true, required: false
  private _reqChunk?: number; 
  public get reqChunk() {
    return this.getNumberAttribute('req_chunk');
  }
  public set reqChunk(value: number) {
    this._reqChunk = value;
  }
  public resetReqChunk() {
    this._reqChunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqChunkInput() {
    return this._reqChunk;
  }

  // req_connect - computed: false, optional: true, required: false
  private _reqConnect?: number; 
  public get reqConnect() {
    return this.getNumberAttribute('req_connect');
  }
  public set reqConnect(value: number) {
    this._reqConnect = value;
  }
  public resetReqConnect() {
    this._reqConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqConnectInput() {
    return this._reqConnect;
  }

  // req_content_len - computed: false, optional: true, required: false
  private _reqContentLen?: number; 
  public get reqContentLen() {
    return this.getNumberAttribute('req_content_len');
  }
  public set reqContentLen(value: number) {
    this._reqContentLen = value;
  }
  public resetReqContentLen() {
    this._reqContentLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqContentLenInput() {
    return this._reqContentLen;
  }

  // req_delete - computed: false, optional: true, required: false
  private _reqDelete?: number; 
  public get reqDelete() {
    return this.getNumberAttribute('req_delete');
  }
  public set reqDelete(value: number) {
    this._reqDelete = value;
  }
  public resetReqDelete() {
    this._reqDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqDeleteInput() {
    return this._reqDelete;
  }

  // req_get - computed: false, optional: true, required: false
  private _reqGet?: number; 
  public get reqGet() {
    return this.getNumberAttribute('req_get');
  }
  public set reqGet(value: number) {
    this._reqGet = value;
  }
  public resetReqGet() {
    this._reqGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqGetInput() {
    return this._reqGet;
  }

  // req_head - computed: false, optional: true, required: false
  private _reqHead?: number; 
  public get reqHead() {
    return this.getNumberAttribute('req_head');
  }
  public set reqHead(value: number) {
    this._reqHead = value;
  }
  public resetReqHead() {
    this._reqHead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqHeadInput() {
    return this._reqHead;
  }

  // req_http10 - computed: false, optional: true, required: false
  private _reqHttp10?: number; 
  public get reqHttp10() {
    return this.getNumberAttribute('req_http10');
  }
  public set reqHttp10(value: number) {
    this._reqHttp10 = value;
  }
  public resetReqHttp10() {
    this._reqHttp10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqHttp10Input() {
    return this._reqHttp10;
  }

  // req_http10_keepalive - computed: false, optional: true, required: false
  private _reqHttp10Keepalive?: number; 
  public get reqHttp10Keepalive() {
    return this.getNumberAttribute('req_http10_keepalive');
  }
  public set reqHttp10Keepalive(value: number) {
    this._reqHttp10Keepalive = value;
  }
  public resetReqHttp10Keepalive() {
    this._reqHttp10Keepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqHttp10KeepaliveInput() {
    return this._reqHttp10Keepalive;
  }

  // req_http11 - computed: false, optional: true, required: false
  private _reqHttp11?: number; 
  public get reqHttp11() {
    return this.getNumberAttribute('req_http11');
  }
  public set reqHttp11(value: number) {
    this._reqHttp11 = value;
  }
  public resetReqHttp11() {
    this._reqHttp11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqHttp11Input() {
    return this._reqHttp11;
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

  // req_options - computed: false, optional: true, required: false
  private _reqOptions?: number; 
  public get reqOptions() {
    return this.getNumberAttribute('req_options');
  }
  public set reqOptions(value: number) {
    this._reqOptions = value;
  }
  public resetReqOptions() {
    this._reqOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqOptionsInput() {
    return this._reqOptions;
  }

  // req_over_5s - computed: false, optional: true, required: false
  private _reqOver5S?: number; 
  public get reqOver5S() {
    return this.getNumberAttribute('req_over_5s');
  }
  public set reqOver5S(value: number) {
    this._reqOver5S = value;
  }
  public resetReqOver5S() {
    this._reqOver5S = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqOver5SInput() {
    return this._reqOver5S;
  }

  // req_over_limit - computed: false, optional: true, required: false
  private _reqOverLimit?: number; 
  public get reqOverLimit() {
    return this.getNumberAttribute('req_over_limit');
  }
  public set reqOverLimit(value: number) {
    this._reqOverLimit = value;
  }
  public resetReqOverLimit() {
    this._reqOverLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqOverLimitInput() {
    return this._reqOverLimit;
  }

  // req_post - computed: false, optional: true, required: false
  private _reqPost?: number; 
  public get reqPost() {
    return this.getNumberAttribute('req_post');
  }
  public set reqPost(value: number) {
    this._reqPost = value;
  }
  public resetReqPost() {
    this._reqPost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqPostInput() {
    return this._reqPost;
  }

  // req_put - computed: false, optional: true, required: false
  private _reqPut?: number; 
  public get reqPut() {
    return this.getNumberAttribute('req_put');
  }
  public set reqPut(value: number) {
    this._reqPut = value;
  }
  public resetReqPut() {
    this._reqPut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqPutInput() {
    return this._reqPut;
  }

  // req_rate_over_limit - computed: false, optional: true, required: false
  private _reqRateOverLimit?: number; 
  public get reqRateOverLimit() {
    return this.getNumberAttribute('req_rate_over_limit');
  }
  public set reqRateOverLimit(value: number) {
    this._reqRateOverLimit = value;
  }
  public resetReqRateOverLimit() {
    this._reqRateOverLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqRateOverLimitInput() {
    return this._reqRateOverLimit;
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

  // req_succ - computed: false, optional: true, required: false
  private _reqSucc?: number; 
  public get reqSucc() {
    return this.getNumberAttribute('req_succ');
  }
  public set reqSucc(value: number) {
    this._reqSucc = value;
  }
  public resetReqSucc() {
    this._reqSucc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSuccInput() {
    return this._reqSucc;
  }

  // req_sz_16k - computed: false, optional: true, required: false
  private _reqSz16K?: number; 
  public get reqSz16K() {
    return this.getNumberAttribute('req_sz_16k');
  }
  public set reqSz16K(value: number) {
    this._reqSz16K = value;
  }
  public resetReqSz16K() {
    this._reqSz16K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSz16KInput() {
    return this._reqSz16K;
  }

  // req_sz_1k - computed: false, optional: true, required: false
  private _reqSz1K?: number; 
  public get reqSz1K() {
    return this.getNumberAttribute('req_sz_1k');
  }
  public set reqSz1K(value: number) {
    this._reqSz1K = value;
  }
  public resetReqSz1K() {
    this._reqSz1K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSz1KInput() {
    return this._reqSz1K;
  }

  // req_sz_256k - computed: false, optional: true, required: false
  private _reqSz256K?: number; 
  public get reqSz256K() {
    return this.getNumberAttribute('req_sz_256k');
  }
  public set reqSz256K(value: number) {
    this._reqSz256K = value;
  }
  public resetReqSz256K() {
    this._reqSz256K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSz256KInput() {
    return this._reqSz256K;
  }

  // req_sz_2k - computed: false, optional: true, required: false
  private _reqSz2K?: number; 
  public get reqSz2K() {
    return this.getNumberAttribute('req_sz_2k');
  }
  public set reqSz2K(value: number) {
    this._reqSz2K = value;
  }
  public resetReqSz2K() {
    this._reqSz2K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSz2KInput() {
    return this._reqSz2K;
  }

  // req_sz_32k - computed: false, optional: true, required: false
  private _reqSz32K?: number; 
  public get reqSz32K() {
    return this.getNumberAttribute('req_sz_32k');
  }
  public set reqSz32K(value: number) {
    this._reqSz32K = value;
  }
  public resetReqSz32K() {
    this._reqSz32K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSz32KInput() {
    return this._reqSz32K;
  }

  // req_sz_4k - computed: false, optional: true, required: false
  private _reqSz4K?: number; 
  public get reqSz4K() {
    return this.getNumberAttribute('req_sz_4k');
  }
  public set reqSz4K(value: number) {
    this._reqSz4K = value;
  }
  public resetReqSz4K() {
    this._reqSz4K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSz4KInput() {
    return this._reqSz4K;
  }

  // req_sz_64k - computed: false, optional: true, required: false
  private _reqSz64K?: number; 
  public get reqSz64K() {
    return this.getNumberAttribute('req_sz_64k');
  }
  public set reqSz64K(value: number) {
    this._reqSz64K = value;
  }
  public resetReqSz64K() {
    this._reqSz64K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSz64KInput() {
    return this._reqSz64K;
  }

  // req_sz_8k - computed: false, optional: true, required: false
  private _reqSz8K?: number; 
  public get reqSz8K() {
    return this.getNumberAttribute('req_sz_8k');
  }
  public set reqSz8K(value: number) {
    this._reqSz8K = value;
  }
  public resetReqSz8K() {
    this._reqSz8K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSz8KInput() {
    return this._reqSz8K;
  }

  // req_sz_gt_256k - computed: false, optional: true, required: false
  private _reqSzGt256K?: number; 
  public get reqSzGt256K() {
    return this.getNumberAttribute('req_sz_gt_256k');
  }
  public set reqSzGt256K(value: number) {
    this._reqSzGt256K = value;
  }
  public resetReqSzGt256K() {
    this._reqSzGt256K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqSzGt256KInput() {
    return this._reqSzGt256K;
  }

  // req_trace - computed: false, optional: true, required: false
  private _reqTrace?: number; 
  public get reqTrace() {
    return this.getNumberAttribute('req_trace');
  }
  public set reqTrace(value: number) {
    this._reqTrace = value;
  }
  public resetReqTrace() {
    this._reqTrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqTraceInput() {
    return this._reqTrace;
  }

  // req_track - computed: false, optional: true, required: false
  private _reqTrack?: number; 
  public get reqTrack() {
    return this.getNumberAttribute('req_track');
  }
  public set reqTrack(value: number) {
    this._reqTrack = value;
  }
  public resetReqTrack() {
    this._reqTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqTrackInput() {
    return this._reqTrack;
  }

  // req_unknown - computed: false, optional: true, required: false
  private _reqUnknown?: number; 
  public get reqUnknown() {
    return this.getNumberAttribute('req_unknown');
  }
  public set reqUnknown(value: number) {
    this._reqUnknown = value;
  }
  public resetReqUnknown() {
    this._reqUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqUnknownInput() {
    return this._reqUnknown;
  }

  // response_100 - computed: false, optional: true, required: false
  private _response100?: number; 
  public get response100() {
    return this.getNumberAttribute('response_100');
  }
  public set response100(value: number) {
    this._response100 = value;
  }
  public resetResponse100() {
    this._response100 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response100Input() {
    return this._response100;
  }

  // response_101 - computed: false, optional: true, required: false
  private _response101?: number; 
  public get response101() {
    return this.getNumberAttribute('response_101');
  }
  public set response101(value: number) {
    this._response101 = value;
  }
  public resetResponse101() {
    this._response101 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response101Input() {
    return this._response101;
  }

  // response_102 - computed: false, optional: true, required: false
  private _response102?: number; 
  public get response102() {
    return this.getNumberAttribute('response_102');
  }
  public set response102(value: number) {
    this._response102 = value;
  }
  public resetResponse102() {
    this._response102 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response102Input() {
    return this._response102;
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

  // response_200 - computed: false, optional: true, required: false
  private _response200?: number; 
  public get response200() {
    return this.getNumberAttribute('response_200');
  }
  public set response200(value: number) {
    this._response200 = value;
  }
  public resetResponse200() {
    this._response200 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response200Input() {
    return this._response200;
  }

  // response_201 - computed: false, optional: true, required: false
  private _response201?: number; 
  public get response201() {
    return this.getNumberAttribute('response_201');
  }
  public set response201(value: number) {
    this._response201 = value;
  }
  public resetResponse201() {
    this._response201 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response201Input() {
    return this._response201;
  }

  // response_202 - computed: false, optional: true, required: false
  private _response202?: number; 
  public get response202() {
    return this.getNumberAttribute('response_202');
  }
  public set response202(value: number) {
    this._response202 = value;
  }
  public resetResponse202() {
    this._response202 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response202Input() {
    return this._response202;
  }

  // response_203 - computed: false, optional: true, required: false
  private _response203?: number; 
  public get response203() {
    return this.getNumberAttribute('response_203');
  }
  public set response203(value: number) {
    this._response203 = value;
  }
  public resetResponse203() {
    this._response203 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response203Input() {
    return this._response203;
  }

  // response_204 - computed: false, optional: true, required: false
  private _response204?: number; 
  public get response204() {
    return this.getNumberAttribute('response_204');
  }
  public set response204(value: number) {
    this._response204 = value;
  }
  public resetResponse204() {
    this._response204 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response204Input() {
    return this._response204;
  }

  // response_205 - computed: false, optional: true, required: false
  private _response205?: number; 
  public get response205() {
    return this.getNumberAttribute('response_205');
  }
  public set response205(value: number) {
    this._response205 = value;
  }
  public resetResponse205() {
    this._response205 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response205Input() {
    return this._response205;
  }

  // response_206 - computed: false, optional: true, required: false
  private _response206?: number; 
  public get response206() {
    return this.getNumberAttribute('response_206');
  }
  public set response206(value: number) {
    this._response206 = value;
  }
  public resetResponse206() {
    this._response206 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response206Input() {
    return this._response206;
  }

  // response_207 - computed: false, optional: true, required: false
  private _response207?: number; 
  public get response207() {
    return this.getNumberAttribute('response_207');
  }
  public set response207(value: number) {
    this._response207 = value;
  }
  public resetResponse207() {
    this._response207 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response207Input() {
    return this._response207;
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

  // response_300 - computed: false, optional: true, required: false
  private _response300?: number; 
  public get response300() {
    return this.getNumberAttribute('response_300');
  }
  public set response300(value: number) {
    this._response300 = value;
  }
  public resetResponse300() {
    this._response300 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response300Input() {
    return this._response300;
  }

  // response_301 - computed: false, optional: true, required: false
  private _response301?: number; 
  public get response301() {
    return this.getNumberAttribute('response_301');
  }
  public set response301(value: number) {
    this._response301 = value;
  }
  public resetResponse301() {
    this._response301 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response301Input() {
    return this._response301;
  }

  // response_302 - computed: false, optional: true, required: false
  private _response302?: number; 
  public get response302() {
    return this.getNumberAttribute('response_302');
  }
  public set response302(value: number) {
    this._response302 = value;
  }
  public resetResponse302() {
    this._response302 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response302Input() {
    return this._response302;
  }

  // response_303 - computed: false, optional: true, required: false
  private _response303?: number; 
  public get response303() {
    return this.getNumberAttribute('response_303');
  }
  public set response303(value: number) {
    this._response303 = value;
  }
  public resetResponse303() {
    this._response303 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response303Input() {
    return this._response303;
  }

  // response_304 - computed: false, optional: true, required: false
  private _response304?: number; 
  public get response304() {
    return this.getNumberAttribute('response_304');
  }
  public set response304(value: number) {
    this._response304 = value;
  }
  public resetResponse304() {
    this._response304 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response304Input() {
    return this._response304;
  }

  // response_305 - computed: false, optional: true, required: false
  private _response305?: number; 
  public get response305() {
    return this.getNumberAttribute('response_305');
  }
  public set response305(value: number) {
    this._response305 = value;
  }
  public resetResponse305() {
    this._response305 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response305Input() {
    return this._response305;
  }

  // response_306 - computed: false, optional: true, required: false
  private _response306?: number; 
  public get response306() {
    return this.getNumberAttribute('response_306');
  }
  public set response306(value: number) {
    this._response306 = value;
  }
  public resetResponse306() {
    this._response306 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response306Input() {
    return this._response306;
  }

  // response_307 - computed: false, optional: true, required: false
  private _response307?: number; 
  public get response307() {
    return this.getNumberAttribute('response_307');
  }
  public set response307(value: number) {
    this._response307 = value;
  }
  public resetResponse307() {
    this._response307 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response307Input() {
    return this._response307;
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

  // response_400 - computed: false, optional: true, required: false
  private _response400?: number; 
  public get response400() {
    return this.getNumberAttribute('response_400');
  }
  public set response400(value: number) {
    this._response400 = value;
  }
  public resetResponse400() {
    this._response400 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response400Input() {
    return this._response400;
  }

  // response_401 - computed: false, optional: true, required: false
  private _response401?: number; 
  public get response401() {
    return this.getNumberAttribute('response_401');
  }
  public set response401(value: number) {
    this._response401 = value;
  }
  public resetResponse401() {
    this._response401 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response401Input() {
    return this._response401;
  }

  // response_402 - computed: false, optional: true, required: false
  private _response402?: number; 
  public get response402() {
    return this.getNumberAttribute('response_402');
  }
  public set response402(value: number) {
    this._response402 = value;
  }
  public resetResponse402() {
    this._response402 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response402Input() {
    return this._response402;
  }

  // response_403 - computed: false, optional: true, required: false
  private _response403?: number; 
  public get response403() {
    return this.getNumberAttribute('response_403');
  }
  public set response403(value: number) {
    this._response403 = value;
  }
  public resetResponse403() {
    this._response403 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response403Input() {
    return this._response403;
  }

  // response_404 - computed: false, optional: true, required: false
  private _response404?: number; 
  public get response404() {
    return this.getNumberAttribute('response_404');
  }
  public set response404(value: number) {
    this._response404 = value;
  }
  public resetResponse404() {
    this._response404 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response404Input() {
    return this._response404;
  }

  // response_405 - computed: false, optional: true, required: false
  private _response405?: number; 
  public get response405() {
    return this.getNumberAttribute('response_405');
  }
  public set response405(value: number) {
    this._response405 = value;
  }
  public resetResponse405() {
    this._response405 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response405Input() {
    return this._response405;
  }

  // response_406 - computed: false, optional: true, required: false
  private _response406?: number; 
  public get response406() {
    return this.getNumberAttribute('response_406');
  }
  public set response406(value: number) {
    this._response406 = value;
  }
  public resetResponse406() {
    this._response406 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response406Input() {
    return this._response406;
  }

  // response_407 - computed: false, optional: true, required: false
  private _response407?: number; 
  public get response407() {
    return this.getNumberAttribute('response_407');
  }
  public set response407(value: number) {
    this._response407 = value;
  }
  public resetResponse407() {
    this._response407 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response407Input() {
    return this._response407;
  }

  // response_408 - computed: false, optional: true, required: false
  private _response408?: number; 
  public get response408() {
    return this.getNumberAttribute('response_408');
  }
  public set response408(value: number) {
    this._response408 = value;
  }
  public resetResponse408() {
    this._response408 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response408Input() {
    return this._response408;
  }

  // response_409 - computed: false, optional: true, required: false
  private _response409?: number; 
  public get response409() {
    return this.getNumberAttribute('response_409');
  }
  public set response409(value: number) {
    this._response409 = value;
  }
  public resetResponse409() {
    this._response409 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response409Input() {
    return this._response409;
  }

  // response_410 - computed: false, optional: true, required: false
  private _response410?: number; 
  public get response410() {
    return this.getNumberAttribute('response_410');
  }
  public set response410(value: number) {
    this._response410 = value;
  }
  public resetResponse410() {
    this._response410 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response410Input() {
    return this._response410;
  }

  // response_411 - computed: false, optional: true, required: false
  private _response411?: number; 
  public get response411() {
    return this.getNumberAttribute('response_411');
  }
  public set response411(value: number) {
    this._response411 = value;
  }
  public resetResponse411() {
    this._response411 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response411Input() {
    return this._response411;
  }

  // response_412 - computed: false, optional: true, required: false
  private _response412?: number; 
  public get response412() {
    return this.getNumberAttribute('response_412');
  }
  public set response412(value: number) {
    this._response412 = value;
  }
  public resetResponse412() {
    this._response412 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response412Input() {
    return this._response412;
  }

  // response_413 - computed: false, optional: true, required: false
  private _response413?: number; 
  public get response413() {
    return this.getNumberAttribute('response_413');
  }
  public set response413(value: number) {
    this._response413 = value;
  }
  public resetResponse413() {
    this._response413 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response413Input() {
    return this._response413;
  }

  // response_414 - computed: false, optional: true, required: false
  private _response414?: number; 
  public get response414() {
    return this.getNumberAttribute('response_414');
  }
  public set response414(value: number) {
    this._response414 = value;
  }
  public resetResponse414() {
    this._response414 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response414Input() {
    return this._response414;
  }

  // response_415 - computed: false, optional: true, required: false
  private _response415?: number; 
  public get response415() {
    return this.getNumberAttribute('response_415');
  }
  public set response415(value: number) {
    this._response415 = value;
  }
  public resetResponse415() {
    this._response415 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response415Input() {
    return this._response415;
  }

  // response_416 - computed: false, optional: true, required: false
  private _response416?: number; 
  public get response416() {
    return this.getNumberAttribute('response_416');
  }
  public set response416(value: number) {
    this._response416 = value;
  }
  public resetResponse416() {
    this._response416 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response416Input() {
    return this._response416;
  }

  // response_417 - computed: false, optional: true, required: false
  private _response417?: number; 
  public get response417() {
    return this.getNumberAttribute('response_417');
  }
  public set response417(value: number) {
    this._response417 = value;
  }
  public resetResponse417() {
    this._response417 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response417Input() {
    return this._response417;
  }

  // response_418 - computed: false, optional: true, required: false
  private _response418?: number; 
  public get response418() {
    return this.getNumberAttribute('response_418');
  }
  public set response418(value: number) {
    this._response418 = value;
  }
  public resetResponse418() {
    this._response418 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response418Input() {
    return this._response418;
  }

  // response_422 - computed: false, optional: true, required: false
  private _response422?: number; 
  public get response422() {
    return this.getNumberAttribute('response_422');
  }
  public set response422(value: number) {
    this._response422 = value;
  }
  public resetResponse422() {
    this._response422 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response422Input() {
    return this._response422;
  }

  // response_423 - computed: false, optional: true, required: false
  private _response423?: number; 
  public get response423() {
    return this.getNumberAttribute('response_423');
  }
  public set response423(value: number) {
    this._response423 = value;
  }
  public resetResponse423() {
    this._response423 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response423Input() {
    return this._response423;
  }

  // response_424 - computed: false, optional: true, required: false
  private _response424?: number; 
  public get response424() {
    return this.getNumberAttribute('response_424');
  }
  public set response424(value: number) {
    this._response424 = value;
  }
  public resetResponse424() {
    this._response424 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response424Input() {
    return this._response424;
  }

  // response_425 - computed: false, optional: true, required: false
  private _response425?: number; 
  public get response425() {
    return this.getNumberAttribute('response_425');
  }
  public set response425(value: number) {
    this._response425 = value;
  }
  public resetResponse425() {
    this._response425 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response425Input() {
    return this._response425;
  }

  // response_426 - computed: false, optional: true, required: false
  private _response426?: number; 
  public get response426() {
    return this.getNumberAttribute('response_426');
  }
  public set response426(value: number) {
    this._response426 = value;
  }
  public resetResponse426() {
    this._response426 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response426Input() {
    return this._response426;
  }

  // response_449 - computed: false, optional: true, required: false
  private _response449?: number; 
  public get response449() {
    return this.getNumberAttribute('response_449');
  }
  public set response449(value: number) {
    this._response449 = value;
  }
  public resetResponse449() {
    this._response449 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response449Input() {
    return this._response449;
  }

  // response_450 - computed: false, optional: true, required: false
  private _response450?: number; 
  public get response450() {
    return this.getNumberAttribute('response_450');
  }
  public set response450(value: number) {
    this._response450 = value;
  }
  public resetResponse450() {
    this._response450 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response450Input() {
    return this._response450;
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

  // response_500 - computed: false, optional: true, required: false
  private _response500?: number; 
  public get response500() {
    return this.getNumberAttribute('response_500');
  }
  public set response500(value: number) {
    this._response500 = value;
  }
  public resetResponse500() {
    this._response500 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response500Input() {
    return this._response500;
  }

  // response_501 - computed: false, optional: true, required: false
  private _response501?: number; 
  public get response501() {
    return this.getNumberAttribute('response_501');
  }
  public set response501(value: number) {
    this._response501 = value;
  }
  public resetResponse501() {
    this._response501 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response501Input() {
    return this._response501;
  }

  // response_502 - computed: false, optional: true, required: false
  private _response502?: number; 
  public get response502() {
    return this.getNumberAttribute('response_502');
  }
  public set response502(value: number) {
    this._response502 = value;
  }
  public resetResponse502() {
    this._response502 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response502Input() {
    return this._response502;
  }

  // response_503 - computed: false, optional: true, required: false
  private _response503?: number; 
  public get response503() {
    return this.getNumberAttribute('response_503');
  }
  public set response503(value: number) {
    this._response503 = value;
  }
  public resetResponse503() {
    this._response503 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response503Input() {
    return this._response503;
  }

  // response_504 - computed: false, optional: true, required: false
  private _response504?: number; 
  public get response504() {
    return this.getNumberAttribute('response_504');
  }
  public set response504(value: number) {
    this._response504 = value;
  }
  public resetResponse504() {
    this._response504 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response504Input() {
    return this._response504;
  }

  // response_505 - computed: false, optional: true, required: false
  private _response505?: number; 
  public get response505() {
    return this.getNumberAttribute('response_505');
  }
  public set response505(value: number) {
    this._response505 = value;
  }
  public resetResponse505() {
    this._response505 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response505Input() {
    return this._response505;
  }

  // response_506 - computed: false, optional: true, required: false
  private _response506?: number; 
  public get response506() {
    return this.getNumberAttribute('response_506');
  }
  public set response506(value: number) {
    this._response506 = value;
  }
  public resetResponse506() {
    this._response506 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response506Input() {
    return this._response506;
  }

  // response_507 - computed: false, optional: true, required: false
  private _response507?: number; 
  public get response507() {
    return this.getNumberAttribute('response_507');
  }
  public set response507(value: number) {
    this._response507 = value;
  }
  public resetResponse507() {
    this._response507 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response507Input() {
    return this._response507;
  }

  // response_508 - computed: false, optional: true, required: false
  private _response508?: number; 
  public get response508() {
    return this.getNumberAttribute('response_508');
  }
  public set response508(value: number) {
    this._response508 = value;
  }
  public resetResponse508() {
    this._response508 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response508Input() {
    return this._response508;
  }

  // response_509 - computed: false, optional: true, required: false
  private _response509?: number; 
  public get response509() {
    return this.getNumberAttribute('response_509');
  }
  public set response509(value: number) {
    this._response509 = value;
  }
  public resetResponse509() {
    this._response509 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response509Input() {
    return this._response509;
  }

  // response_510 - computed: false, optional: true, required: false
  private _response510?: number; 
  public get response510() {
    return this.getNumberAttribute('response_510');
  }
  public set response510(value: number) {
    this._response510 = value;
  }
  public resetResponse510() {
    this._response510 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response510Input() {
    return this._response510;
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

  // response_http10 - computed: false, optional: true, required: false
  private _responseHttp10?: number; 
  public get responseHttp10() {
    return this.getNumberAttribute('response_http10');
  }
  public set responseHttp10(value: number) {
    this._responseHttp10 = value;
  }
  public resetResponseHttp10() {
    this._responseHttp10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHttp10Input() {
    return this._responseHttp10;
  }

  // response_http11 - computed: false, optional: true, required: false
  private _responseHttp11?: number; 
  public get responseHttp11() {
    return this.getNumberAttribute('response_http11');
  }
  public set responseHttp11(value: number) {
    this._responseHttp11 = value;
  }
  public resetResponseHttp11() {
    this._responseHttp11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHttp11Input() {
    return this._responseHttp11;
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

  // retry_503 - computed: false, optional: true, required: false
  private _retry503?: number; 
  public get retry503() {
    return this.getNumberAttribute('retry_503');
  }
  public set retry503(value: number) {
    this._retry503 = value;
  }
  public resetRetry503() {
    this._retry503 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retry503Input() {
    return this._retry503;
  }

  // rsp_chunk - computed: false, optional: true, required: false
  private _rspChunk?: number; 
  public get rspChunk() {
    return this.getNumberAttribute('rsp_chunk');
  }
  public set rspChunk(value: number) {
    this._rspChunk = value;
  }
  public resetRspChunk() {
    this._rspChunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspChunkInput() {
    return this._rspChunk;
  }

  // rsp_content_len - computed: false, optional: true, required: false
  private _rspContentLen?: number; 
  public get rspContentLen() {
    return this.getNumberAttribute('rsp_content_len');
  }
  public set rspContentLen(value: number) {
    this._rspContentLen = value;
  }
  public resetRspContentLen() {
    this._rspContentLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspContentLenInput() {
    return this._rspContentLen;
  }

  // rsp_sz_16k - computed: false, optional: true, required: false
  private _rspSz16K?: number; 
  public get rspSz16K() {
    return this.getNumberAttribute('rsp_sz_16k');
  }
  public set rspSz16K(value: number) {
    this._rspSz16K = value;
  }
  public resetRspSz16K() {
    this._rspSz16K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspSz16KInput() {
    return this._rspSz16K;
  }

  // rsp_sz_1k - computed: false, optional: true, required: false
  private _rspSz1K?: number; 
  public get rspSz1K() {
    return this.getNumberAttribute('rsp_sz_1k');
  }
  public set rspSz1K(value: number) {
    this._rspSz1K = value;
  }
  public resetRspSz1K() {
    this._rspSz1K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspSz1KInput() {
    return this._rspSz1K;
  }

  // rsp_sz_256k - computed: false, optional: true, required: false
  private _rspSz256K?: number; 
  public get rspSz256K() {
    return this.getNumberAttribute('rsp_sz_256k');
  }
  public set rspSz256K(value: number) {
    this._rspSz256K = value;
  }
  public resetRspSz256K() {
    this._rspSz256K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspSz256KInput() {
    return this._rspSz256K;
  }

  // rsp_sz_2k - computed: false, optional: true, required: false
  private _rspSz2K?: number; 
  public get rspSz2K() {
    return this.getNumberAttribute('rsp_sz_2k');
  }
  public set rspSz2K(value: number) {
    this._rspSz2K = value;
  }
  public resetRspSz2K() {
    this._rspSz2K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspSz2KInput() {
    return this._rspSz2K;
  }

  // rsp_sz_32k - computed: false, optional: true, required: false
  private _rspSz32K?: number; 
  public get rspSz32K() {
    return this.getNumberAttribute('rsp_sz_32k');
  }
  public set rspSz32K(value: number) {
    this._rspSz32K = value;
  }
  public resetRspSz32K() {
    this._rspSz32K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspSz32KInput() {
    return this._rspSz32K;
  }

  // rsp_sz_4k - computed: false, optional: true, required: false
  private _rspSz4K?: number; 
  public get rspSz4K() {
    return this.getNumberAttribute('rsp_sz_4k');
  }
  public set rspSz4K(value: number) {
    this._rspSz4K = value;
  }
  public resetRspSz4K() {
    this._rspSz4K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspSz4KInput() {
    return this._rspSz4K;
  }

  // rsp_sz_64k - computed: false, optional: true, required: false
  private _rspSz64K?: number; 
  public get rspSz64K() {
    return this.getNumberAttribute('rsp_sz_64k');
  }
  public set rspSz64K(value: number) {
    this._rspSz64K = value;
  }
  public resetRspSz64K() {
    this._rspSz64K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspSz64KInput() {
    return this._rspSz64K;
  }

  // rsp_sz_8k - computed: false, optional: true, required: false
  private _rspSz8K?: number; 
  public get rspSz8K() {
    return this.getNumberAttribute('rsp_sz_8k');
  }
  public set rspSz8K(value: number) {
    this._rspSz8K = value;
  }
  public resetRspSz8K() {
    this._rspSz8K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspSz8KInput() {
    return this._rspSz8K;
  }

  // rsp_sz_gt_256k - computed: false, optional: true, required: false
  private _rspSzGt256K?: number; 
  public get rspSzGt256K() {
    return this.getNumberAttribute('rsp_sz_gt_256k');
  }
  public set rspSzGt256K(value: number) {
    this._rspSzGt256K = value;
  }
  public resetRspSzGt256K() {
    this._rspSzGt256K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rspSzGt256KInput() {
    return this._rspSzGt256K;
  }

  // server_resel - computed: false, optional: true, required: false
  private _serverResel?: number; 
  public get serverResel() {
    return this.getNumberAttribute('server_resel');
  }
  public set serverResel(value: number) {
    this._serverResel = value;
  }
  public resetServerResel() {
    this._serverResel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverReselInput() {
    return this._serverResel;
  }

  // server_resel_failed - computed: false, optional: true, required: false
  private _serverReselFailed?: number; 
  public get serverReselFailed() {
    return this.getNumberAttribute('server_resel_failed');
  }
  public set serverReselFailed(value: number) {
    this._serverReselFailed = value;
  }
  public resetServerReselFailed() {
    this._serverReselFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverReselFailedInput() {
    return this._serverReselFailed;
  }

  // server_rst - computed: false, optional: true, required: false
  private _serverRst?: number; 
  public get serverRst() {
    return this.getNumberAttribute('server_rst');
  }
  public set serverRst(value: number) {
    this._serverRst = value;
  }
  public resetServerRst() {
    this._serverRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRstInput() {
    return this._serverRst;
  }

  // server_rst_connected - computed: false, optional: true, required: false
  private _serverRstConnected?: number; 
  public get serverRstConnected() {
    return this.getNumberAttribute('server_rst_connected');
  }
  public set serverRstConnected(value: number) {
    this._serverRstConnected = value;
  }
  public resetServerRstConnected() {
    this._serverRstConnected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRstConnectedInput() {
    return this._serverRstConnected;
  }

  // server_rst_connecting - computed: false, optional: true, required: false
  private _serverRstConnecting?: number; 
  public get serverRstConnecting() {
    return this.getNumberAttribute('server_rst_connecting');
  }
  public set serverRstConnecting(value: number) {
    this._serverRstConnecting = value;
  }
  public resetServerRstConnecting() {
    this._serverRstConnecting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRstConnectingInput() {
    return this._serverRstConnecting;
  }

  // server_rst_request - computed: false, optional: true, required: false
  private _serverRstRequest?: number; 
  public get serverRstRequest() {
    return this.getNumberAttribute('server_rst_request');
  }
  public set serverRstRequest(value: number) {
    this._serverRstRequest = value;
  }
  public resetServerRstRequest() {
    this._serverRstRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRstRequestInput() {
    return this._serverRstRequest;
  }

  // server_rst_response - computed: false, optional: true, required: false
  private _serverRstResponse?: number; 
  public get serverRstResponse() {
    return this.getNumberAttribute('server_rst_response');
  }
  public set serverRstResponse(value: number) {
    this._serverRstResponse = value;
  }
  public resetServerRstResponse() {
    this._serverRstResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRstResponseInput() {
    return this._serverRstResponse;
  }

  // skip_insert_client_ip - computed: false, optional: true, required: false
  private _skipInsertClientIp?: number; 
  public get skipInsertClientIp() {
    return this.getNumberAttribute('skip_insert_client_ip');
  }
  public set skipInsertClientIp(value: number) {
    this._skipInsertClientIp = value;
  }
  public resetSkipInsertClientIp() {
    this._skipInsertClientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInsertClientIpInput() {
    return this._skipInsertClientIp;
  }

  // skip_insert_client_port - computed: false, optional: true, required: false
  private _skipInsertClientPort?: number; 
  public get skipInsertClientPort() {
    return this.getNumberAttribute('skip_insert_client_port');
  }
  public set skipInsertClientPort(value: number) {
    this._skipInsertClientPort = value;
  }
  public resetSkipInsertClientPort() {
    this._skipInsertClientPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInsertClientPortInput() {
    return this._skipInsertClientPort;
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

  // stale_sess - computed: false, optional: true, required: false
  private _staleSess?: number; 
  public get staleSess() {
    return this.getNumberAttribute('stale_sess');
  }
  public set staleSess(value: number) {
    this._staleSess = value;
  }
  public resetStaleSess() {
    this._staleSess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleSessInput() {
    return this._staleSess;
  }

  // svr_prem_close - computed: false, optional: true, required: false
  private _svrPremClose?: number; 
  public get svrPremClose() {
    return this.getNumberAttribute('svr_prem_close');
  }
  public set svrPremClose(value: number) {
    this._svrPremClose = value;
  }
  public resetSvrPremClose() {
    this._svrPremClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svrPremCloseInput() {
    return this._svrPremClose;
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

  // tcpoutrst - computed: false, optional: true, required: false
  private _tcpoutrst?: number; 
  public get tcpoutrst() {
    return this.getNumberAttribute('tcpoutrst');
  }
  public set tcpoutrst(value: number) {
    this._tcpoutrst = value;
  }
  public resetTcpoutrst() {
    this._tcpoutrst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpoutrstInput() {
    return this._tcpoutrst;
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

  // url_switching - computed: false, optional: true, required: false
  private _urlSwitching?: number; 
  public get urlSwitching() {
    return this.getNumberAttribute('url_switching');
  }
  public set urlSwitching(value: number) {
    this._urlSwitching = value;
  }
  public resetUrlSwitching() {
    this._urlSwitching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlSwitchingInput() {
    return this._urlSwitching;
  }

  // url_switching_enqueue - computed: false, optional: true, required: false
  private _urlSwitchingEnqueue?: number; 
  public get urlSwitchingEnqueue() {
    return this.getNumberAttribute('url_switching_enqueue');
  }
  public set urlSwitchingEnqueue(value: number) {
    this._urlSwitchingEnqueue = value;
  }
  public resetUrlSwitchingEnqueue() {
    this._urlSwitchingEnqueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlSwitchingEnqueueInput() {
    return this._urlSwitchingEnqueue;
  }

  // url_switching_ok - computed: false, optional: true, required: false
  private _urlSwitchingOk?: number; 
  public get urlSwitchingOk() {
    return this.getNumberAttribute('url_switching_ok');
  }
  public set urlSwitchingOk(value: number) {
    this._urlSwitchingOk = value;
  }
  public resetUrlSwitchingOk() {
    this._urlSwitchingOk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlSwitchingOkInput() {
    return this._urlSwitchingOk;
  }

  // wrong_resp_header - computed: false, optional: true, required: false
  private _wrongRespHeader?: number; 
  public get wrongRespHeader() {
    return this.getNumberAttribute('wrong_resp_header');
  }
  public set wrongRespHeader(value: number) {
    this._wrongRespHeader = value;
  }
  public resetWrongRespHeader() {
    this._wrongRespHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrongRespHeaderInput() {
    return this._wrongRespHeader;
  }
}

export class DataThunderSlbFastHttpProxyOperOperFastHttpProxyCpuListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbFastHttpProxyOperOperFastHttpProxyCpuListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbFastHttpProxyOperOperFastHttpProxyCpuListStructOutputReference {
    return new DataThunderSlbFastHttpProxyOperOperFastHttpProxyCpuListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbFastHttpProxyOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#cpu_count DataThunderSlbFastHttpProxyOper#cpu_count}
  */
  readonly cpuCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#debug_fields DataThunderSlbFastHttpProxyOper#debug_fields}
  */
  readonly debugFields?: number;
  /**
  * fast_http_proxy_cpu_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#fast_http_proxy_cpu_list DataThunderSlbFastHttpProxyOper#fast_http_proxy_cpu_list}
  */
  readonly fastHttpProxyCpuList?: DataThunderSlbFastHttpProxyOperOperFastHttpProxyCpuListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbFastHttpProxyOperOperToTerraform(struct?: DataThunderSlbFastHttpProxyOperOperOutputReference | DataThunderSlbFastHttpProxyOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    debug_fields: cdktf.numberToTerraform(struct!.debugFields),
    fast_http_proxy_cpu_list: cdktf.listMapper(dataThunderSlbFastHttpProxyOperOperFastHttpProxyCpuListStructToTerraform, true)(struct!.fastHttpProxyCpuList),
  }
}


export function dataThunderSlbFastHttpProxyOperOperToHclTerraform(struct?: DataThunderSlbFastHttpProxyOperOperOutputReference | DataThunderSlbFastHttpProxyOperOper): any {
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
    debug_fields: {
      value: cdktf.numberToHclTerraform(struct!.debugFields),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fast_http_proxy_cpu_list: {
      value: cdktf.listMapperHcl(dataThunderSlbFastHttpProxyOperOperFastHttpProxyCpuListStructToHclTerraform, true)(struct!.fastHttpProxyCpuList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbFastHttpProxyOperOperFastHttpProxyCpuListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbFastHttpProxyOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbFastHttpProxyOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._debugFields !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugFields = this._debugFields;
    }
    if (this._fastHttpProxyCpuList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fastHttpProxyCpuList = this._fastHttpProxyCpuList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbFastHttpProxyOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCount = undefined;
      this._debugFields = undefined;
      this._fastHttpProxyCpuList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCount = value.cpuCount;
      this._debugFields = value.debugFields;
      this._fastHttpProxyCpuList.internalValue = value.fastHttpProxyCpuList;
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

  // debug_fields - computed: false, optional: true, required: false
  private _debugFields?: number; 
  public get debugFields() {
    return this.getNumberAttribute('debug_fields');
  }
  public set debugFields(value: number) {
    this._debugFields = value;
  }
  public resetDebugFields() {
    this._debugFields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugFieldsInput() {
    return this._debugFields;
  }

  // fast_http_proxy_cpu_list - computed: false, optional: true, required: false
  private _fastHttpProxyCpuList = new DataThunderSlbFastHttpProxyOperOperFastHttpProxyCpuListStructList(this, "fast_http_proxy_cpu_list", false);
  public get fastHttpProxyCpuList() {
    return this._fastHttpProxyCpuList;
  }
  public putFastHttpProxyCpuList(value: DataThunderSlbFastHttpProxyOperOperFastHttpProxyCpuListStruct[] | cdktf.IResolvable) {
    this._fastHttpProxyCpuList.internalValue = value;
  }
  public resetFastHttpProxyCpuList() {
    this._fastHttpProxyCpuList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fastHttpProxyCpuListInput() {
    return this._fastHttpProxyCpuList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper thunder_slb_fast_http_proxy_oper}
*/
export class DataThunderSlbFastHttpProxyOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_fast_http_proxy_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbFastHttpProxyOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbFastHttpProxyOper to import
  * @param importFromId The id of the existing DataThunderSlbFastHttpProxyOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbFastHttpProxyOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_fast_http_proxy_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_fast_http_proxy_oper thunder_slb_fast_http_proxy_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbFastHttpProxyOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbFastHttpProxyOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_fast_http_proxy_oper',
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
  private _oper = new DataThunderSlbFastHttpProxyOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbFastHttpProxyOperOper) {
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
      oper: dataThunderSlbFastHttpProxyOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbFastHttpProxyOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbFastHttpProxyOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
