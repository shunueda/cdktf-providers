// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbHttpProxyOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#id DataThunderSlbHttpProxyOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#oper DataThunderSlbHttpProxyOper#oper}
  */
  readonly oper?: DataThunderSlbHttpProxyOperOper;
}
export interface DataThunderSlbHttpProxyOperOperHttpProxyCpuListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#aflex_lb_reselect DataThunderSlbHttpProxyOper#aflex_lb_reselect}
  */
  readonly aflexLbReselect?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#aflex_lb_reselect_ok DataThunderSlbHttpProxyOper#aflex_lb_reselect_ok}
  */
  readonly aflexLbReselectOk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#aflex_retry DataThunderSlbHttpProxyOper#aflex_retry}
  */
  readonly aflexRetry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#aflex_switching DataThunderSlbHttpProxyOper#aflex_switching}
  */
  readonly aflexSwitching?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#aflex_switching_enqueue DataThunderSlbHttpProxyOper#aflex_switching_enqueue}
  */
  readonly aflexSwitchingEnqueue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#aflex_switching_ok DataThunderSlbHttpProxyOper#aflex_switching_ok}
  */
  readonly aflexSwitchingOk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#asm_cookie_fail DataThunderSlbHttpProxyOper#asm_cookie_fail}
  */
  readonly asmCookieFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#asm_cookie_header_fail DataThunderSlbHttpProxyOper#asm_cookie_header_fail}
  */
  readonly asmCookieHeaderFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#asm_setcookie_fail DataThunderSlbHttpProxyOper#asm_setcookie_fail}
  */
  readonly asmSetcookieFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#asm_setcookie_header_fail DataThunderSlbHttpProxyOper#asm_setcookie_header_fail}
  */
  readonly asmSetcookieHeaderFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#cache_rsp DataThunderSlbHttpProxyOper#cache_rsp}
  */
  readonly cacheRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#chunk_bad DataThunderSlbHttpProxyOper#chunk_bad}
  */
  readonly chunkBad?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#chunk_sz_1k DataThunderSlbHttpProxyOper#chunk_sz_1k}
  */
  readonly chunkSz1K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#chunk_sz_2k DataThunderSlbHttpProxyOper#chunk_sz_2k}
  */
  readonly chunkSz2K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#chunk_sz_4k DataThunderSlbHttpProxyOper#chunk_sz_4k}
  */
  readonly chunkSz4K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#chunk_sz_512 DataThunderSlbHttpProxyOper#chunk_sz_512}
  */
  readonly chunkSz512?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#chunk_sz_gt_4k DataThunderSlbHttpProxyOper#chunk_sz_gt_4k}
  */
  readonly chunkSzGt4K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#client_req_unexp_flag DataThunderSlbHttpProxyOper#client_req_unexp_flag}
  */
  readonly clientReqUnexpFlag?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#client_rst DataThunderSlbHttpProxyOper#client_rst}
  */
  readonly clientRst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#client_rst_connected DataThunderSlbHttpProxyOper#client_rst_connected}
  */
  readonly clientRstConnected?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#client_rst_connecting DataThunderSlbHttpProxyOper#client_rst_connecting}
  */
  readonly clientRstConnecting?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#client_rst_request DataThunderSlbHttpProxyOper#client_rst_request}
  */
  readonly clientRstRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#client_rst_response DataThunderSlbHttpProxyOper#client_rst_response}
  */
  readonly clientRstResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#close_on_ddos DataThunderSlbHttpProxyOper#close_on_ddos}
  */
  readonly closeOnDdos?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#compress_content_type_excluded DataThunderSlbHttpProxyOper#compress_content_type_excluded}
  */
  readonly compressContentTypeExcluded?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#compress_del_accept_enc DataThunderSlbHttpProxyOper#compress_del_accept_enc}
  */
  readonly compressDelAcceptEnc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#compress_no_content_type DataThunderSlbHttpProxyOper#compress_no_content_type}
  */
  readonly compressNoContentType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#compress_ratio_too_high DataThunderSlbHttpProxyOper#compress_ratio_too_high}
  */
  readonly compressRatioTooHigh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#compress_resp_already_compressed DataThunderSlbHttpProxyOper#compress_resp_already_compressed}
  */
  readonly compressRespAlreadyCompressed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#compress_resp_lt_min DataThunderSlbHttpProxyOper#compress_resp_lt_min}
  */
  readonly compressRespLtMin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#compress_resp_no_cl_or_ce DataThunderSlbHttpProxyOper#compress_resp_no_cl_or_ce}
  */
  readonly compressRespNoClOrCe?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#compress_rsp DataThunderSlbHttpProxyOper#compress_rsp}
  */
  readonly compressRsp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#compress_rsp_br DataThunderSlbHttpProxyOper#compress_rsp_br}
  */
  readonly compressRspBr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#compress_rsp_total DataThunderSlbHttpProxyOper#compress_rsp_total}
  */
  readonly compressRspTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#compression_after DataThunderSlbHttpProxyOper#compression_after}
  */
  readonly compressionAfter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#compression_after_br DataThunderSlbHttpProxyOper#compression_after_br}
  */
  readonly compressionAfterBr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#compression_after_total DataThunderSlbHttpProxyOper#compression_after_total}
  */
  readonly compressionAfterTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#compression_before DataThunderSlbHttpProxyOper#compression_before}
  */
  readonly compressionBefore?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#compression_before_br DataThunderSlbHttpProxyOper#compression_before_br}
  */
  readonly compressionBeforeBr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#compression_before_total DataThunderSlbHttpProxyOper#compression_before_total}
  */
  readonly compressionBeforeTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#connect_req DataThunderSlbHttpProxyOper#connect_req}
  */
  readonly connectReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#connecting_ack DataThunderSlbHttpProxyOper#connecting_ack}
  */
  readonly connectingAck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#connecting_fin DataThunderSlbHttpProxyOper#connecting_fin}
  */
  readonly connectingFin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#connecting_fin_ofo DataThunderSlbHttpProxyOper#connecting_fin_ofo}
  */
  readonly connectingFinOfo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#connecting_fin_retrans DataThunderSlbHttpProxyOper#connecting_fin_retrans}
  */
  readonly connectingFinRetrans?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#connecting_rst DataThunderSlbHttpProxyOper#connecting_rst}
  */
  readonly connectingRst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#connecting_rst_ofo DataThunderSlbHttpProxyOper#connecting_rst_ofo}
  */
  readonly connectingRstOfo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#connecting_rst_retrans DataThunderSlbHttpProxyOper#connecting_rst_retrans}
  */
  readonly connectingRstRetrans?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#cookie_switching DataThunderSlbHttpProxyOper#cookie_switching}
  */
  readonly cookieSwitching?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#cookie_switching_enqueue DataThunderSlbHttpProxyOper#cookie_switching_enqueue}
  */
  readonly cookieSwitchingEnqueue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#cookie_switching_ok DataThunderSlbHttpProxyOper#cookie_switching_ok}
  */
  readonly cookieSwitchingOk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#curr_proxy DataThunderSlbHttpProxyOper#curr_proxy}
  */
  readonly currProxy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#decompression_after DataThunderSlbHttpProxyOper#decompression_after}
  */
  readonly decompressionAfter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#decompression_after_br DataThunderSlbHttpProxyOper#decompression_after_br}
  */
  readonly decompressionAfterBr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#decompression_after_total DataThunderSlbHttpProxyOper#decompression_after_total}
  */
  readonly decompressionAfterTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#decompression_before DataThunderSlbHttpProxyOper#decompression_before}
  */
  readonly decompressionBefore?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#decompression_before_br DataThunderSlbHttpProxyOper#decompression_before_br}
  */
  readonly decompressionBeforeBr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#decompression_before_total DataThunderSlbHttpProxyOper#decompression_before_total}
  */
  readonly decompressionBeforeTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_dns_malformed_query DataThunderSlbHttpProxyOper#doh_dns_malformed_query}
  */
  readonly dohDnsMalformedQuery?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_dns_query_type_a DataThunderSlbHttpProxyOper#doh_dns_query_type_a}
  */
  readonly dohDnsQueryTypeA?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_dns_query_type_aaaa DataThunderSlbHttpProxyOper#doh_dns_query_type_aaaa}
  */
  readonly dohDnsQueryTypeAaaa?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_dns_query_type_any DataThunderSlbHttpProxyOper#doh_dns_query_type_any}
  */
  readonly dohDnsQueryTypeAny?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_dns_query_type_cname DataThunderSlbHttpProxyOper#doh_dns_query_type_cname}
  */
  readonly dohDnsQueryTypeCname?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_dns_query_type_mx DataThunderSlbHttpProxyOper#doh_dns_query_type_mx}
  */
  readonly dohDnsQueryTypeMx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_dns_query_type_ns DataThunderSlbHttpProxyOper#doh_dns_query_type_ns}
  */
  readonly dohDnsQueryTypeNs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_dns_query_type_others DataThunderSlbHttpProxyOper#doh_dns_query_type_others}
  */
  readonly dohDnsQueryTypeOthers?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_dns_query_type_soa DataThunderSlbHttpProxyOper#doh_dns_query_type_soa}
  */
  readonly dohDnsQueryTypeSoa?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_dns_query_type_srv DataThunderSlbHttpProxyOper#doh_dns_query_type_srv}
  */
  readonly dohDnsQueryTypeSrv?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_dns_resp_rcode_err_format DataThunderSlbHttpProxyOper#doh_dns_resp_rcode_err_format}
  */
  readonly dohDnsRespRcodeErrFormat?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_dns_resp_rcode_err_name DataThunderSlbHttpProxyOper#doh_dns_resp_rcode_err_name}
  */
  readonly dohDnsRespRcodeErrName?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_dns_resp_rcode_err_server DataThunderSlbHttpProxyOper#doh_dns_resp_rcode_err_server}
  */
  readonly dohDnsRespRcodeErrServer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_dns_resp_rcode_err_type DataThunderSlbHttpProxyOper#doh_dns_resp_rcode_err_type}
  */
  readonly dohDnsRespRcodeErrType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_dns_resp_rcode_notauth DataThunderSlbHttpProxyOper#doh_dns_resp_rcode_notauth}
  */
  readonly dohDnsRespRcodeNotauth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_dns_resp_rcode_notzone DataThunderSlbHttpProxyOper#doh_dns_resp_rcode_notzone}
  */
  readonly dohDnsRespRcodeNotzone?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_dns_resp_rcode_nxrrset DataThunderSlbHttpProxyOper#doh_dns_resp_rcode_nxrrset}
  */
  readonly dohDnsRespRcodeNxrrset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_dns_resp_rcode_other DataThunderSlbHttpProxyOper#doh_dns_resp_rcode_other}
  */
  readonly dohDnsRespRcodeOther?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_dns_resp_rcode_refuse DataThunderSlbHttpProxyOper#doh_dns_resp_rcode_refuse}
  */
  readonly dohDnsRespRcodeRefuse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_dns_resp_rcode_yxdomain DataThunderSlbHttpProxyOper#doh_dns_resp_rcode_yxdomain}
  */
  readonly dohDnsRespRcodeYxdomain?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_dns_resp_rcode_yxrrset DataThunderSlbHttpProxyOper#doh_dns_resp_rcode_yxrrset}
  */
  readonly dohDnsRespRcodeYxrrset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_get_base64_decode_failed DataThunderSlbHttpProxyOper#doh_get_base64_decode_failed}
  */
  readonly dohGetBase64DecodeFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_get_dns_arg_failed DataThunderSlbHttpProxyOper#doh_get_dns_arg_failed}
  */
  readonly dohGetDnsArgFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_get_uri_too_long DataThunderSlbHttpProxyOper#doh_get_uri_too_long}
  */
  readonly dohGetUriTooLong?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_malloc_fail DataThunderSlbHttpProxyOper#doh_malloc_fail}
  */
  readonly dohMallocFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_non_doh_method DataThunderSlbHttpProxyOper#doh_non_doh_method}
  */
  readonly dohNonDohMethod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_non_doh_req DataThunderSlbHttpProxyOper#doh_non_doh_req}
  */
  readonly dohNonDohReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_non_doh_req_get DataThunderSlbHttpProxyOper#doh_non_doh_req_get}
  */
  readonly dohNonDohReqGet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_non_doh_req_post DataThunderSlbHttpProxyOper#doh_non_doh_req_post}
  */
  readonly dohNonDohReqPost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_path_not_found DataThunderSlbHttpProxyOper#doh_path_not_found}
  */
  readonly dohPathNotFound?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_post_content_type_mismatch DataThunderSlbHttpProxyOper#doh_post_content_type_mismatch}
  */
  readonly dohPostContentTypeMismatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_post_payload_extract_failed DataThunderSlbHttpProxyOper#doh_post_payload_extract_failed}
  */
  readonly dohPostPayloadExtractFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_post_payload_not_found DataThunderSlbHttpProxyOper#doh_post_payload_not_found}
  */
  readonly dohPostPayloadNotFound?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_post_payload_too_large DataThunderSlbHttpProxyOper#doh_post_payload_too_large}
  */
  readonly dohPostPayloadTooLarge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_query_time_out DataThunderSlbHttpProxyOper#doh_query_time_out}
  */
  readonly dohQueryTimeOut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_req DataThunderSlbHttpProxyOper#doh_req}
  */
  readonly dohReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_req_get DataThunderSlbHttpProxyOper#doh_req_get}
  */
  readonly dohReqGet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_req_post DataThunderSlbHttpProxyOper#doh_req_post}
  */
  readonly dohReqPost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_req_send_failed DataThunderSlbHttpProxyOper#doh_req_send_failed}
  */
  readonly dohReqSendFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_req_tcp_retry DataThunderSlbHttpProxyOper#doh_req_tcp_retry}
  */
  readonly dohReqTcpRetry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_req_tcp_retry_fail DataThunderSlbHttpProxyOper#doh_req_tcp_retry_fail}
  */
  readonly dohReqTcpRetryFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_req_udp_retry DataThunderSlbHttpProxyOper#doh_req_udp_retry}
  */
  readonly dohReqUdpRetry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_req_udp_retry_fail DataThunderSlbHttpProxyOper#doh_req_udp_retry_fail}
  */
  readonly dohReqUdpRetryFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_resp DataThunderSlbHttpProxyOper#doh_resp}
  */
  readonly dohResp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_resp_header_alloc_failed DataThunderSlbHttpProxyOper#doh_resp_header_alloc_failed}
  */
  readonly dohRespHeaderAllocFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_resp_que_failed DataThunderSlbHttpProxyOper#doh_resp_que_failed}
  */
  readonly dohRespQueFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_resp_send_failed DataThunderSlbHttpProxyOper#doh_resp_send_failed}
  */
  readonly dohRespSendFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_resp_setup_failed DataThunderSlbHttpProxyOper#doh_resp_setup_failed}
  */
  readonly dohRespSetupFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_resp_tcp_frags DataThunderSlbHttpProxyOper#doh_resp_tcp_frags}
  */
  readonly dohRespTcpFrags?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_resp_udp_frags DataThunderSlbHttpProxyOper#doh_resp_udp_frags}
  */
  readonly dohRespUdpFrags?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_retry_w_tcp DataThunderSlbHttpProxyOper#doh_retry_w_tcp}
  */
  readonly dohRetryWTcp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_serv_sel_failed DataThunderSlbHttpProxyOper#doh_serv_sel_failed}
  */
  readonly dohServSelFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_snat_failed DataThunderSlbHttpProxyOper#doh_snat_failed}
  */
  readonly dohSnatFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_tc_resp DataThunderSlbHttpProxyOper#doh_tc_resp}
  */
  readonly dohTcResp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_tcp_dns_req DataThunderSlbHttpProxyOper#doh_tcp_dns_req}
  */
  readonly dohTcpDnsReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_tcp_dns_resp DataThunderSlbHttpProxyOper#doh_tcp_dns_resp}
  */
  readonly dohTcpDnsResp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_tcp_send_failed DataThunderSlbHttpProxyOper#doh_tcp_send_failed}
  */
  readonly dohTcpSendFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_udp_dns_req DataThunderSlbHttpProxyOper#doh_udp_dns_req}
  */
  readonly dohUdpDnsReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_udp_dns_resp DataThunderSlbHttpProxyOper#doh_udp_dns_resp}
  */
  readonly dohUdpDnsResp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#doh_udp_send_failed DataThunderSlbHttpProxyOper#doh_udp_send_failed}
  */
  readonly dohUdpSendFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#fwdreq_fail DataThunderSlbHttpProxyOper#fwdreq_fail}
  */
  readonly fwdreqFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#fwdreq_fail_buff DataThunderSlbHttpProxyOper#fwdreq_fail_buff}
  */
  readonly fwdreqFailBuff?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#fwdreq_fail_persist DataThunderSlbHttpProxyOper#fwdreq_fail_persist}
  */
  readonly fwdreqFailPersist?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#fwdreq_fail_route DataThunderSlbHttpProxyOper#fwdreq_fail_route}
  */
  readonly fwdreqFailRoute?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#fwdreq_fail_rport DataThunderSlbHttpProxyOper#fwdreq_fail_rport}
  */
  readonly fwdreqFailRport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#fwdreq_fail_server DataThunderSlbHttpProxyOper#fwdreq_fail_server}
  */
  readonly fwdreqFailServer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#fwdreq_fail_tuple DataThunderSlbHttpProxyOper#fwdreq_fail_tuple}
  */
  readonly fwdreqFailTuple?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#fwdreqdata_fail DataThunderSlbHttpProxyOper#fwdreqdata_fail}
  */
  readonly fwdreqdataFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#get_and_payload DataThunderSlbHttpProxyOper#get_and_payload}
  */
  readonly fetchAndPayload?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#h2up_content_length_alias DataThunderSlbHttpProxyOper#h2up_content_length_alias}
  */
  readonly h2UpContentLengthAlias?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#h2up_with_host_and_auth DataThunderSlbHttpProxyOper#h2up_with_host_and_auth}
  */
  readonly h2UpWithHostAndAuth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#h2up_with_transfer_encoding DataThunderSlbHttpProxyOper#h2up_with_transfer_encoding}
  */
  readonly h2UpWithTransferEncoding?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#header_delete DataThunderSlbHttpProxyOper#header_delete}
  */
  readonly headerDelete?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#header_filter_rule_hit DataThunderSlbHttpProxyOper#header_filter_rule_hit}
  */
  readonly headerFilterRuleHit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#header_insert DataThunderSlbHttpProxyOper#header_insert}
  */
  readonly headerInsert?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#header_name_too_long DataThunderSlbHttpProxyOper#header_name_too_long}
  */
  readonly headerNameTooLong?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#host_switching DataThunderSlbHttpProxyOper#host_switching}
  */
  readonly hostSwitching?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#host_switching_enqueue DataThunderSlbHttpProxyOper#host_switching_enqueue}
  */
  readonly hostSwitchingEnqueue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#host_switching_ok DataThunderSlbHttpProxyOper#host_switching_ok}
  */
  readonly hostSwitchingOk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#http1_client_idle_timeout DataThunderSlbHttpProxyOper#http1_client_idle_timeout}
  */
  readonly http1ClientIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#http2_client_idle_timeout DataThunderSlbHttpProxyOper#http2_client_idle_timeout}
  */
  readonly http2ClientIdleTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#http_allowed_methods DataThunderSlbHttpProxyOper#http_allowed_methods}
  */
  readonly httpAllowedMethods?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#http_disallowed_methods DataThunderSlbHttpProxyOper#http_disallowed_methods}
  */
  readonly httpDisallowedMethods?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#huge_cookie DataThunderSlbHttpProxyOper#huge_cookie}
  */
  readonly hugeCookie?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#huge_cookie_header DataThunderSlbHttpProxyOper#huge_cookie_header}
  */
  readonly hugeCookieHeader?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#insert_client_ip DataThunderSlbHttpProxyOper#insert_client_ip}
  */
  readonly insertClientIp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#insert_client_port DataThunderSlbHttpProxyOper#insert_client_port}
  */
  readonly insertClientPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#invalid_header DataThunderSlbHttpProxyOper#invalid_header}
  */
  readonly invalidHeader?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#l4_switching DataThunderSlbHttpProxyOper#l4_switching}
  */
  readonly l4Switching?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#l4_switching_enqueue DataThunderSlbHttpProxyOper#l4_switching_enqueue}
  */
  readonly l4SwitchingEnqueue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#l4_switching_ok DataThunderSlbHttpProxyOper#l4_switching_ok}
  */
  readonly l4SwitchingOk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#large_cookie DataThunderSlbHttpProxyOper#large_cookie}
  */
  readonly largeCookie?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#large_cookie_header DataThunderSlbHttpProxyOper#large_cookie_header}
  */
  readonly largeCookieHeader?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#lb_switching DataThunderSlbHttpProxyOper#lb_switching}
  */
  readonly lbSwitching?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#lb_switching_enqueue DataThunderSlbHttpProxyOper#lb_switching_enqueue}
  */
  readonly lbSwitchingEnqueue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#lb_switching_ok DataThunderSlbHttpProxyOper#lb_switching_ok}
  */
  readonly lbSwitchingOk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#line_too_long DataThunderSlbHttpProxyOper#line_too_long}
  */
  readonly lineTooLong?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#malformed_h2up_header_value DataThunderSlbHttpProxyOper#malformed_h2up_header_value}
  */
  readonly malformedH2UpHeaderValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#malformed_h2up_scheme_value DataThunderSlbHttpProxyOper#malformed_h2up_scheme_value}
  */
  readonly malformedH2UpSchemeValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#multiple_content_length DataThunderSlbHttpProxyOper#multiple_content_length}
  */
  readonly multipleContentLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#multiple_transfer_encoding DataThunderSlbHttpProxyOper#multiple_transfer_encoding}
  */
  readonly multipleTransferEncoding?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#negative_req_remain DataThunderSlbHttpProxyOper#negative_req_remain}
  */
  readonly negativeReqRemain?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#negative_resp_remain DataThunderSlbHttpProxyOper#negative_resp_remain}
  */
  readonly negativeRespRemain?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#new_svrconn DataThunderSlbHttpProxyOper#new_svrconn}
  */
  readonly newSvrconn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#non_http_bypass DataThunderSlbHttpProxyOper#non_http_bypass}
  */
  readonly nonHttpBypass?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#noproxy DataThunderSlbHttpProxyOper#noproxy}
  */
  readonly noproxy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#notuple DataThunderSlbHttpProxyOper#notuple}
  */
  readonly notuple?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#parse_cookie_fail DataThunderSlbHttpProxyOper#parse_cookie_fail}
  */
  readonly parseCookieFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#parse_setcookie_fail DataThunderSlbHttpProxyOper#parse_setcookie_fail}
  */
  readonly parseSetcookieFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#parsereq_fail DataThunderSlbHttpProxyOper#parsereq_fail}
  */
  readonly parsereqFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#pconn_connected DataThunderSlbHttpProxyOper#pconn_connected}
  */
  readonly pconnConnected?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#pconn_connecting DataThunderSlbHttpProxyOper#pconn_connecting}
  */
  readonly pconnConnecting?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#pconn_connecting_failed DataThunderSlbHttpProxyOper#pconn_connecting_failed}
  */
  readonly pconnConnectingFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#pkts_ofo DataThunderSlbHttpProxyOper#pkts_ofo}
  */
  readonly pktsOfo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#pkts_retrans DataThunderSlbHttpProxyOper#pkts_retrans}
  */
  readonly pktsRetrans?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#pkts_retrans_ack_finwait DataThunderSlbHttpProxyOper#pkts_retrans_ack_finwait}
  */
  readonly pktsRetransAckFinwait?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#pkts_retrans_fin DataThunderSlbHttpProxyOper#pkts_retrans_fin}
  */
  readonly pktsRetransFin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#pkts_retrans_push DataThunderSlbHttpProxyOper#pkts_retrans_push}
  */
  readonly pktsRetransPush?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#pkts_retrans_rst DataThunderSlbHttpProxyOper#pkts_retrans_rst}
  */
  readonly pktsRetransRst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req DataThunderSlbHttpProxyOper#req}
  */
  readonly req?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_100m DataThunderSlbHttpProxyOper#req_100m}
  */
  readonly req100M?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_100u DataThunderSlbHttpProxyOper#req_100u}
  */
  readonly req100U?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_10m DataThunderSlbHttpProxyOper#req_10m}
  */
  readonly req10M?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_10u DataThunderSlbHttpProxyOper#req_10u}
  */
  readonly req10U?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_1m DataThunderSlbHttpProxyOper#req_1m}
  */
  readonly req1M?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_1s DataThunderSlbHttpProxyOper#req_1s}
  */
  readonly req1S?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_200m DataThunderSlbHttpProxyOper#req_200m}
  */
  readonly req200M?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_200u DataThunderSlbHttpProxyOper#req_200u}
  */
  readonly req200U?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_20m DataThunderSlbHttpProxyOper#req_20m}
  */
  readonly req20M?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_20u DataThunderSlbHttpProxyOper#req_20u}
  */
  readonly req20U?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_2m DataThunderSlbHttpProxyOper#req_2m}
  */
  readonly req2M?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_2s DataThunderSlbHttpProxyOper#req_2s}
  */
  readonly req2S?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_500m DataThunderSlbHttpProxyOper#req_500m}
  */
  readonly req500M?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_500u DataThunderSlbHttpProxyOper#req_500u}
  */
  readonly req500U?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_50m DataThunderSlbHttpProxyOper#req_50m}
  */
  readonly req50M?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_50u DataThunderSlbHttpProxyOper#req_50u}
  */
  readonly req50U?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_5m DataThunderSlbHttpProxyOper#req_5m}
  */
  readonly req5M?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_5s DataThunderSlbHttpProxyOper#req_5s}
  */
  readonly req5S?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_connect DataThunderSlbHttpProxyOper#req_connect}
  */
  readonly reqConnect?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_content_len DataThunderSlbHttpProxyOper#req_content_len}
  */
  readonly reqContentLen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_delete DataThunderSlbHttpProxyOper#req_delete}
  */
  readonly reqDelete?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_enter_ssli DataThunderSlbHttpProxyOper#req_enter_ssli}
  */
  readonly reqEnterSsli?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_get DataThunderSlbHttpProxyOper#req_get}
  */
  readonly reqGet?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_head DataThunderSlbHttpProxyOper#req_head}
  */
  readonly reqHead?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_http10 DataThunderSlbHttpProxyOper#req_http10}
  */
  readonly reqHttp10?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_http10_keepalive DataThunderSlbHttpProxyOper#req_http10_keepalive}
  */
  readonly reqHttp10Keepalive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_http11 DataThunderSlbHttpProxyOper#req_http11}
  */
  readonly reqHttp11?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_http11_new_proxy DataThunderSlbHttpProxyOper#req_http11_new_proxy}
  */
  readonly reqHttp11NewProxy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_http2 DataThunderSlbHttpProxyOper#req_http2}
  */
  readonly reqHttp2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_ofo DataThunderSlbHttpProxyOper#req_ofo}
  */
  readonly reqOfo?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_options DataThunderSlbHttpProxyOper#req_options}
  */
  readonly reqOptions?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_over_5s DataThunderSlbHttpProxyOper#req_over_5s}
  */
  readonly reqOver5S?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_over_limit DataThunderSlbHttpProxyOper#req_over_limit}
  */
  readonly reqOverLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_post DataThunderSlbHttpProxyOper#req_post}
  */
  readonly reqPost?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_put DataThunderSlbHttpProxyOper#req_put}
  */
  readonly reqPut?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_rate_over_limit DataThunderSlbHttpProxyOper#req_rate_over_limit}
  */
  readonly reqRateOverLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_retran DataThunderSlbHttpProxyOper#req_retran}
  */
  readonly reqRetran?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_succ DataThunderSlbHttpProxyOper#req_succ}
  */
  readonly reqSucc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_sz_16k DataThunderSlbHttpProxyOper#req_sz_16k}
  */
  readonly reqSz16K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_sz_1k DataThunderSlbHttpProxyOper#req_sz_1k}
  */
  readonly reqSz1K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_sz_256k DataThunderSlbHttpProxyOper#req_sz_256k}
  */
  readonly reqSz256K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_sz_2k DataThunderSlbHttpProxyOper#req_sz_2k}
  */
  readonly reqSz2K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_sz_32k DataThunderSlbHttpProxyOper#req_sz_32k}
  */
  readonly reqSz32K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_sz_4k DataThunderSlbHttpProxyOper#req_sz_4k}
  */
  readonly reqSz4K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_sz_64k DataThunderSlbHttpProxyOper#req_sz_64k}
  */
  readonly reqSz64K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_sz_8k DataThunderSlbHttpProxyOper#req_sz_8k}
  */
  readonly reqSz8K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_sz_gt_256k DataThunderSlbHttpProxyOper#req_sz_gt_256k}
  */
  readonly reqSzGt256K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_timeout_close DataThunderSlbHttpProxyOper#req_timeout_close}
  */
  readonly reqTimeoutClose?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_timeout_retry DataThunderSlbHttpProxyOper#req_timeout_retry}
  */
  readonly reqTimeoutRetry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_trace DataThunderSlbHttpProxyOper#req_trace}
  */
  readonly reqTrace?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_track DataThunderSlbHttpProxyOper#req_track}
  */
  readonly reqTrack?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#req_unknown DataThunderSlbHttpProxyOper#req_unknown}
  */
  readonly reqUnknown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_100 DataThunderSlbHttpProxyOper#response_100}
  */
  readonly response100?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_101 DataThunderSlbHttpProxyOper#response_101}
  */
  readonly response101?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_102 DataThunderSlbHttpProxyOper#response_102}
  */
  readonly response102?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_1xx DataThunderSlbHttpProxyOper#response_1xx}
  */
  readonly response1Xx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_200 DataThunderSlbHttpProxyOper#response_200}
  */
  readonly response200?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_201 DataThunderSlbHttpProxyOper#response_201}
  */
  readonly response201?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_202 DataThunderSlbHttpProxyOper#response_202}
  */
  readonly response202?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_203 DataThunderSlbHttpProxyOper#response_203}
  */
  readonly response203?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_204 DataThunderSlbHttpProxyOper#response_204}
  */
  readonly response204?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_205 DataThunderSlbHttpProxyOper#response_205}
  */
  readonly response205?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_206 DataThunderSlbHttpProxyOper#response_206}
  */
  readonly response206?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_207 DataThunderSlbHttpProxyOper#response_207}
  */
  readonly response207?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_2xx DataThunderSlbHttpProxyOper#response_2xx}
  */
  readonly response2Xx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_300 DataThunderSlbHttpProxyOper#response_300}
  */
  readonly response300?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_301 DataThunderSlbHttpProxyOper#response_301}
  */
  readonly response301?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_302 DataThunderSlbHttpProxyOper#response_302}
  */
  readonly response302?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_303 DataThunderSlbHttpProxyOper#response_303}
  */
  readonly response303?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_304 DataThunderSlbHttpProxyOper#response_304}
  */
  readonly response304?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_305 DataThunderSlbHttpProxyOper#response_305}
  */
  readonly response305?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_306 DataThunderSlbHttpProxyOper#response_306}
  */
  readonly response306?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_307 DataThunderSlbHttpProxyOper#response_307}
  */
  readonly response307?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_3xx DataThunderSlbHttpProxyOper#response_3xx}
  */
  readonly response3Xx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_400 DataThunderSlbHttpProxyOper#response_400}
  */
  readonly response400?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_401 DataThunderSlbHttpProxyOper#response_401}
  */
  readonly response401?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_402 DataThunderSlbHttpProxyOper#response_402}
  */
  readonly response402?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_403 DataThunderSlbHttpProxyOper#response_403}
  */
  readonly response403?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_404 DataThunderSlbHttpProxyOper#response_404}
  */
  readonly response404?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_405 DataThunderSlbHttpProxyOper#response_405}
  */
  readonly response405?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_406 DataThunderSlbHttpProxyOper#response_406}
  */
  readonly response406?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_407 DataThunderSlbHttpProxyOper#response_407}
  */
  readonly response407?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_408 DataThunderSlbHttpProxyOper#response_408}
  */
  readonly response408?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_409 DataThunderSlbHttpProxyOper#response_409}
  */
  readonly response409?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_410 DataThunderSlbHttpProxyOper#response_410}
  */
  readonly response410?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_411 DataThunderSlbHttpProxyOper#response_411}
  */
  readonly response411?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_412 DataThunderSlbHttpProxyOper#response_412}
  */
  readonly response412?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_413 DataThunderSlbHttpProxyOper#response_413}
  */
  readonly response413?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_414 DataThunderSlbHttpProxyOper#response_414}
  */
  readonly response414?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_415 DataThunderSlbHttpProxyOper#response_415}
  */
  readonly response415?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_416 DataThunderSlbHttpProxyOper#response_416}
  */
  readonly response416?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_417 DataThunderSlbHttpProxyOper#response_417}
  */
  readonly response417?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_418 DataThunderSlbHttpProxyOper#response_418}
  */
  readonly response418?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_422 DataThunderSlbHttpProxyOper#response_422}
  */
  readonly response422?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_423 DataThunderSlbHttpProxyOper#response_423}
  */
  readonly response423?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_424 DataThunderSlbHttpProxyOper#response_424}
  */
  readonly response424?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_425 DataThunderSlbHttpProxyOper#response_425}
  */
  readonly response425?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_426 DataThunderSlbHttpProxyOper#response_426}
  */
  readonly response426?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_449 DataThunderSlbHttpProxyOper#response_449}
  */
  readonly response449?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_450 DataThunderSlbHttpProxyOper#response_450}
  */
  readonly response450?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_4xx DataThunderSlbHttpProxyOper#response_4xx}
  */
  readonly response4Xx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_500 DataThunderSlbHttpProxyOper#response_500}
  */
  readonly response500?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_501 DataThunderSlbHttpProxyOper#response_501}
  */
  readonly response501?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_502 DataThunderSlbHttpProxyOper#response_502}
  */
  readonly response502?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_503 DataThunderSlbHttpProxyOper#response_503}
  */
  readonly response503?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_504 DataThunderSlbHttpProxyOper#response_504}
  */
  readonly response504?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_504_ax DataThunderSlbHttpProxyOper#response_504_ax}
  */
  readonly response504Ax?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_505 DataThunderSlbHttpProxyOper#response_505}
  */
  readonly response505?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_506 DataThunderSlbHttpProxyOper#response_506}
  */
  readonly response506?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_507 DataThunderSlbHttpProxyOper#response_507}
  */
  readonly response507?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_508 DataThunderSlbHttpProxyOper#response_508}
  */
  readonly response508?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_509 DataThunderSlbHttpProxyOper#response_509}
  */
  readonly response509?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_510 DataThunderSlbHttpProxyOper#response_510}
  */
  readonly response510?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_5xx DataThunderSlbHttpProxyOper#response_5xx}
  */
  readonly response5Xx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_6xx DataThunderSlbHttpProxyOper#response_6xx}
  */
  readonly response6Xx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_http10 DataThunderSlbHttpProxyOper#response_http10}
  */
  readonly responseHttp10?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_http11 DataThunderSlbHttpProxyOper#response_http11}
  */
  readonly responseHttp11?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_http2 DataThunderSlbHttpProxyOper#response_http2}
  */
  readonly responseHttp2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#response_unknown DataThunderSlbHttpProxyOper#response_unknown}
  */
  readonly responseUnknown?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#retry_503 DataThunderSlbHttpProxyOper#retry_503}
  */
  readonly retry503?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#rsp_chunk DataThunderSlbHttpProxyOper#rsp_chunk}
  */
  readonly rspChunk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#rsp_content_len DataThunderSlbHttpProxyOper#rsp_content_len}
  */
  readonly rspContentLen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#rsp_sz_16k DataThunderSlbHttpProxyOper#rsp_sz_16k}
  */
  readonly rspSz16K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#rsp_sz_1k DataThunderSlbHttpProxyOper#rsp_sz_1k}
  */
  readonly rspSz1K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#rsp_sz_256k DataThunderSlbHttpProxyOper#rsp_sz_256k}
  */
  readonly rspSz256K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#rsp_sz_2k DataThunderSlbHttpProxyOper#rsp_sz_2k}
  */
  readonly rspSz2K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#rsp_sz_32k DataThunderSlbHttpProxyOper#rsp_sz_32k}
  */
  readonly rspSz32K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#rsp_sz_4k DataThunderSlbHttpProxyOper#rsp_sz_4k}
  */
  readonly rspSz4K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#rsp_sz_64k DataThunderSlbHttpProxyOper#rsp_sz_64k}
  */
  readonly rspSz64K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#rsp_sz_8k DataThunderSlbHttpProxyOper#rsp_sz_8k}
  */
  readonly rspSz8K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#rsp_sz_gt_256k DataThunderSlbHttpProxyOper#rsp_sz_gt_256k}
  */
  readonly rspSzGt256K?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#server_resel DataThunderSlbHttpProxyOper#server_resel}
  */
  readonly serverResel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#server_resel_failed DataThunderSlbHttpProxyOper#server_resel_failed}
  */
  readonly serverReselFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#server_rst DataThunderSlbHttpProxyOper#server_rst}
  */
  readonly serverRst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#server_rst_connected DataThunderSlbHttpProxyOper#server_rst_connected}
  */
  readonly serverRstConnected?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#server_rst_connecting DataThunderSlbHttpProxyOper#server_rst_connecting}
  */
  readonly serverRstConnecting?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#server_rst_request DataThunderSlbHttpProxyOper#server_rst_request}
  */
  readonly serverRstRequest?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#server_rst_response DataThunderSlbHttpProxyOper#server_rst_response}
  */
  readonly serverRstResponse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#skip_insert_client_ip DataThunderSlbHttpProxyOper#skip_insert_client_ip}
  */
  readonly skipInsertClientIp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#skip_insert_client_port DataThunderSlbHttpProxyOper#skip_insert_client_port}
  */
  readonly skipInsertClientPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#snat_fail DataThunderSlbHttpProxyOper#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#stale_sess DataThunderSlbHttpProxyOper#stale_sess}
  */
  readonly staleSess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#svr_prem_close DataThunderSlbHttpProxyOper#svr_prem_close}
  */
  readonly svrPremClose?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#svrsel_fail DataThunderSlbHttpProxyOper#svrsel_fail}
  */
  readonly svrselFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#too_many_headers DataThunderSlbHttpProxyOper#too_many_headers}
  */
  readonly tooManyHeaders?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#total_proxy DataThunderSlbHttpProxyOper#total_proxy}
  */
  readonly totalProxy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#transfer_encoding_and_content_length DataThunderSlbHttpProxyOper#transfer_encoding_and_content_length}
  */
  readonly transferEncodingAndContentLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#url_switching DataThunderSlbHttpProxyOper#url_switching}
  */
  readonly urlSwitching?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#url_switching_enqueue DataThunderSlbHttpProxyOper#url_switching_enqueue}
  */
  readonly urlSwitchingEnqueue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#url_switching_ok DataThunderSlbHttpProxyOper#url_switching_ok}
  */
  readonly urlSwitchingOk?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#wrong_resp_header DataThunderSlbHttpProxyOper#wrong_resp_header}
  */
  readonly wrongRespHeader?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#ws_client_packets DataThunderSlbHttpProxyOper#ws_client_packets}
  */
  readonly wsClientPackets?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#ws_handshake_req DataThunderSlbHttpProxyOper#ws_handshake_req}
  */
  readonly wsHandshakeReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#ws_handshake_resp DataThunderSlbHttpProxyOper#ws_handshake_resp}
  */
  readonly wsHandshakeResp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#ws_server_packets DataThunderSlbHttpProxyOper#ws_server_packets}
  */
  readonly wsServerPackets?: number;
}

export function dataThunderSlbHttpProxyOperOperHttpProxyCpuListStructToTerraform(struct?: DataThunderSlbHttpProxyOperOperHttpProxyCpuListStruct | cdktf.IResolvable): any {
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
    compression_after: cdktf.numberToTerraform(struct!.compressionAfter),
    compression_after_br: cdktf.numberToTerraform(struct!.compressionAfterBr),
    compression_after_total: cdktf.numberToTerraform(struct!.compressionAfterTotal),
    compression_before: cdktf.numberToTerraform(struct!.compressionBefore),
    compression_before_br: cdktf.numberToTerraform(struct!.compressionBeforeBr),
    compression_before_total: cdktf.numberToTerraform(struct!.compressionBeforeTotal),
    connect_req: cdktf.numberToTerraform(struct!.connectReq),
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
    decompression_after: cdktf.numberToTerraform(struct!.decompressionAfter),
    decompression_after_br: cdktf.numberToTerraform(struct!.decompressionAfterBr),
    decompression_after_total: cdktf.numberToTerraform(struct!.decompressionAfterTotal),
    decompression_before: cdktf.numberToTerraform(struct!.decompressionBefore),
    decompression_before_br: cdktf.numberToTerraform(struct!.decompressionBeforeBr),
    decompression_before_total: cdktf.numberToTerraform(struct!.decompressionBeforeTotal),
    doh_dns_malformed_query: cdktf.numberToTerraform(struct!.dohDnsMalformedQuery),
    doh_dns_query_type_a: cdktf.numberToTerraform(struct!.dohDnsQueryTypeA),
    doh_dns_query_type_aaaa: cdktf.numberToTerraform(struct!.dohDnsQueryTypeAaaa),
    doh_dns_query_type_any: cdktf.numberToTerraform(struct!.dohDnsQueryTypeAny),
    doh_dns_query_type_cname: cdktf.numberToTerraform(struct!.dohDnsQueryTypeCname),
    doh_dns_query_type_mx: cdktf.numberToTerraform(struct!.dohDnsQueryTypeMx),
    doh_dns_query_type_ns: cdktf.numberToTerraform(struct!.dohDnsQueryTypeNs),
    doh_dns_query_type_others: cdktf.numberToTerraform(struct!.dohDnsQueryTypeOthers),
    doh_dns_query_type_soa: cdktf.numberToTerraform(struct!.dohDnsQueryTypeSoa),
    doh_dns_query_type_srv: cdktf.numberToTerraform(struct!.dohDnsQueryTypeSrv),
    doh_dns_resp_rcode_err_format: cdktf.numberToTerraform(struct!.dohDnsRespRcodeErrFormat),
    doh_dns_resp_rcode_err_name: cdktf.numberToTerraform(struct!.dohDnsRespRcodeErrName),
    doh_dns_resp_rcode_err_server: cdktf.numberToTerraform(struct!.dohDnsRespRcodeErrServer),
    doh_dns_resp_rcode_err_type: cdktf.numberToTerraform(struct!.dohDnsRespRcodeErrType),
    doh_dns_resp_rcode_notauth: cdktf.numberToTerraform(struct!.dohDnsRespRcodeNotauth),
    doh_dns_resp_rcode_notzone: cdktf.numberToTerraform(struct!.dohDnsRespRcodeNotzone),
    doh_dns_resp_rcode_nxrrset: cdktf.numberToTerraform(struct!.dohDnsRespRcodeNxrrset),
    doh_dns_resp_rcode_other: cdktf.numberToTerraform(struct!.dohDnsRespRcodeOther),
    doh_dns_resp_rcode_refuse: cdktf.numberToTerraform(struct!.dohDnsRespRcodeRefuse),
    doh_dns_resp_rcode_yxdomain: cdktf.numberToTerraform(struct!.dohDnsRespRcodeYxdomain),
    doh_dns_resp_rcode_yxrrset: cdktf.numberToTerraform(struct!.dohDnsRespRcodeYxrrset),
    doh_get_base64_decode_failed: cdktf.numberToTerraform(struct!.dohGetBase64DecodeFailed),
    doh_get_dns_arg_failed: cdktf.numberToTerraform(struct!.dohGetDnsArgFailed),
    doh_get_uri_too_long: cdktf.numberToTerraform(struct!.dohGetUriTooLong),
    doh_malloc_fail: cdktf.numberToTerraform(struct!.dohMallocFail),
    doh_non_doh_method: cdktf.numberToTerraform(struct!.dohNonDohMethod),
    doh_non_doh_req: cdktf.numberToTerraform(struct!.dohNonDohReq),
    doh_non_doh_req_get: cdktf.numberToTerraform(struct!.dohNonDohReqGet),
    doh_non_doh_req_post: cdktf.numberToTerraform(struct!.dohNonDohReqPost),
    doh_path_not_found: cdktf.numberToTerraform(struct!.dohPathNotFound),
    doh_post_content_type_mismatch: cdktf.numberToTerraform(struct!.dohPostContentTypeMismatch),
    doh_post_payload_extract_failed: cdktf.numberToTerraform(struct!.dohPostPayloadExtractFailed),
    doh_post_payload_not_found: cdktf.numberToTerraform(struct!.dohPostPayloadNotFound),
    doh_post_payload_too_large: cdktf.numberToTerraform(struct!.dohPostPayloadTooLarge),
    doh_query_time_out: cdktf.numberToTerraform(struct!.dohQueryTimeOut),
    doh_req: cdktf.numberToTerraform(struct!.dohReq),
    doh_req_get: cdktf.numberToTerraform(struct!.dohReqGet),
    doh_req_post: cdktf.numberToTerraform(struct!.dohReqPost),
    doh_req_send_failed: cdktf.numberToTerraform(struct!.dohReqSendFailed),
    doh_req_tcp_retry: cdktf.numberToTerraform(struct!.dohReqTcpRetry),
    doh_req_tcp_retry_fail: cdktf.numberToTerraform(struct!.dohReqTcpRetryFail),
    doh_req_udp_retry: cdktf.numberToTerraform(struct!.dohReqUdpRetry),
    doh_req_udp_retry_fail: cdktf.numberToTerraform(struct!.dohReqUdpRetryFail),
    doh_resp: cdktf.numberToTerraform(struct!.dohResp),
    doh_resp_header_alloc_failed: cdktf.numberToTerraform(struct!.dohRespHeaderAllocFailed),
    doh_resp_que_failed: cdktf.numberToTerraform(struct!.dohRespQueFailed),
    doh_resp_send_failed: cdktf.numberToTerraform(struct!.dohRespSendFailed),
    doh_resp_setup_failed: cdktf.numberToTerraform(struct!.dohRespSetupFailed),
    doh_resp_tcp_frags: cdktf.numberToTerraform(struct!.dohRespTcpFrags),
    doh_resp_udp_frags: cdktf.numberToTerraform(struct!.dohRespUdpFrags),
    doh_retry_w_tcp: cdktf.numberToTerraform(struct!.dohRetryWTcp),
    doh_serv_sel_failed: cdktf.numberToTerraform(struct!.dohServSelFailed),
    doh_snat_failed: cdktf.numberToTerraform(struct!.dohSnatFailed),
    doh_tc_resp: cdktf.numberToTerraform(struct!.dohTcResp),
    doh_tcp_dns_req: cdktf.numberToTerraform(struct!.dohTcpDnsReq),
    doh_tcp_dns_resp: cdktf.numberToTerraform(struct!.dohTcpDnsResp),
    doh_tcp_send_failed: cdktf.numberToTerraform(struct!.dohTcpSendFailed),
    doh_udp_dns_req: cdktf.numberToTerraform(struct!.dohUdpDnsReq),
    doh_udp_dns_resp: cdktf.numberToTerraform(struct!.dohUdpDnsResp),
    doh_udp_send_failed: cdktf.numberToTerraform(struct!.dohUdpSendFailed),
    fwdreq_fail: cdktf.numberToTerraform(struct!.fwdreqFail),
    fwdreq_fail_buff: cdktf.numberToTerraform(struct!.fwdreqFailBuff),
    fwdreq_fail_persist: cdktf.numberToTerraform(struct!.fwdreqFailPersist),
    fwdreq_fail_route: cdktf.numberToTerraform(struct!.fwdreqFailRoute),
    fwdreq_fail_rport: cdktf.numberToTerraform(struct!.fwdreqFailRport),
    fwdreq_fail_server: cdktf.numberToTerraform(struct!.fwdreqFailServer),
    fwdreq_fail_tuple: cdktf.numberToTerraform(struct!.fwdreqFailTuple),
    fwdreqdata_fail: cdktf.numberToTerraform(struct!.fwdreqdataFail),
    get_and_payload: cdktf.numberToTerraform(struct!.fetchAndPayload),
    h2up_content_length_alias: cdktf.numberToTerraform(struct!.h2UpContentLengthAlias),
    h2up_with_host_and_auth: cdktf.numberToTerraform(struct!.h2UpWithHostAndAuth),
    h2up_with_transfer_encoding: cdktf.numberToTerraform(struct!.h2UpWithTransferEncoding),
    header_delete: cdktf.numberToTerraform(struct!.headerDelete),
    header_filter_rule_hit: cdktf.numberToTerraform(struct!.headerFilterRuleHit),
    header_insert: cdktf.numberToTerraform(struct!.headerInsert),
    header_name_too_long: cdktf.numberToTerraform(struct!.headerNameTooLong),
    host_switching: cdktf.numberToTerraform(struct!.hostSwitching),
    host_switching_enqueue: cdktf.numberToTerraform(struct!.hostSwitchingEnqueue),
    host_switching_ok: cdktf.numberToTerraform(struct!.hostSwitchingOk),
    http1_client_idle_timeout: cdktf.numberToTerraform(struct!.http1ClientIdleTimeout),
    http2_client_idle_timeout: cdktf.numberToTerraform(struct!.http2ClientIdleTimeout),
    http_allowed_methods: cdktf.numberToTerraform(struct!.httpAllowedMethods),
    http_disallowed_methods: cdktf.numberToTerraform(struct!.httpDisallowedMethods),
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
    malformed_h2up_header_value: cdktf.numberToTerraform(struct!.malformedH2UpHeaderValue),
    malformed_h2up_scheme_value: cdktf.numberToTerraform(struct!.malformedH2UpSchemeValue),
    multiple_content_length: cdktf.numberToTerraform(struct!.multipleContentLength),
    multiple_transfer_encoding: cdktf.numberToTerraform(struct!.multipleTransferEncoding),
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
    req_connect: cdktf.numberToTerraform(struct!.reqConnect),
    req_content_len: cdktf.numberToTerraform(struct!.reqContentLen),
    req_delete: cdktf.numberToTerraform(struct!.reqDelete),
    req_enter_ssli: cdktf.numberToTerraform(struct!.reqEnterSsli),
    req_get: cdktf.numberToTerraform(struct!.reqGet),
    req_head: cdktf.numberToTerraform(struct!.reqHead),
    req_http10: cdktf.numberToTerraform(struct!.reqHttp10),
    req_http10_keepalive: cdktf.numberToTerraform(struct!.reqHttp10Keepalive),
    req_http11: cdktf.numberToTerraform(struct!.reqHttp11),
    req_http11_new_proxy: cdktf.numberToTerraform(struct!.reqHttp11NewProxy),
    req_http2: cdktf.numberToTerraform(struct!.reqHttp2),
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
    req_timeout_close: cdktf.numberToTerraform(struct!.reqTimeoutClose),
    req_timeout_retry: cdktf.numberToTerraform(struct!.reqTimeoutRetry),
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
    response_504_ax: cdktf.numberToTerraform(struct!.response504Ax),
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
    response_http2: cdktf.numberToTerraform(struct!.responseHttp2),
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
    too_many_headers: cdktf.numberToTerraform(struct!.tooManyHeaders),
    total_proxy: cdktf.numberToTerraform(struct!.totalProxy),
    transfer_encoding_and_content_length: cdktf.numberToTerraform(struct!.transferEncodingAndContentLength),
    url_switching: cdktf.numberToTerraform(struct!.urlSwitching),
    url_switching_enqueue: cdktf.numberToTerraform(struct!.urlSwitchingEnqueue),
    url_switching_ok: cdktf.numberToTerraform(struct!.urlSwitchingOk),
    wrong_resp_header: cdktf.numberToTerraform(struct!.wrongRespHeader),
    ws_client_packets: cdktf.numberToTerraform(struct!.wsClientPackets),
    ws_handshake_req: cdktf.numberToTerraform(struct!.wsHandshakeReq),
    ws_handshake_resp: cdktf.numberToTerraform(struct!.wsHandshakeResp),
    ws_server_packets: cdktf.numberToTerraform(struct!.wsServerPackets),
  }
}


export function dataThunderSlbHttpProxyOperOperHttpProxyCpuListStructToHclTerraform(struct?: DataThunderSlbHttpProxyOperOperHttpProxyCpuListStruct | cdktf.IResolvable): any {
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
    compression_after: {
      value: cdktf.numberToHclTerraform(struct!.compressionAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_after_br: {
      value: cdktf.numberToHclTerraform(struct!.compressionAfterBr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_after_total: {
      value: cdktf.numberToHclTerraform(struct!.compressionAfterTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_before: {
      value: cdktf.numberToHclTerraform(struct!.compressionBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_before_br: {
      value: cdktf.numberToHclTerraform(struct!.compressionBeforeBr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_before_total: {
      value: cdktf.numberToHclTerraform(struct!.compressionBeforeTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connect_req: {
      value: cdktf.numberToHclTerraform(struct!.connectReq),
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
    decompression_after: {
      value: cdktf.numberToHclTerraform(struct!.decompressionAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    decompression_after_br: {
      value: cdktf.numberToHclTerraform(struct!.decompressionAfterBr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    decompression_after_total: {
      value: cdktf.numberToHclTerraform(struct!.decompressionAfterTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    decompression_before: {
      value: cdktf.numberToHclTerraform(struct!.decompressionBefore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    decompression_before_br: {
      value: cdktf.numberToHclTerraform(struct!.decompressionBeforeBr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    decompression_before_total: {
      value: cdktf.numberToHclTerraform(struct!.decompressionBeforeTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_malformed_query: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsMalformedQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_query_type_a: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsQueryTypeA),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_query_type_aaaa: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsQueryTypeAaaa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_query_type_any: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsQueryTypeAny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_query_type_cname: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsQueryTypeCname),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_query_type_mx: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsQueryTypeMx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_query_type_ns: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsQueryTypeNs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_query_type_others: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsQueryTypeOthers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_query_type_soa: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsQueryTypeSoa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_query_type_srv: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsQueryTypeSrv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_resp_rcode_err_format: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsRespRcodeErrFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_resp_rcode_err_name: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsRespRcodeErrName),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_resp_rcode_err_server: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsRespRcodeErrServer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_resp_rcode_err_type: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsRespRcodeErrType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_resp_rcode_notauth: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsRespRcodeNotauth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_resp_rcode_notzone: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsRespRcodeNotzone),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_resp_rcode_nxrrset: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsRespRcodeNxrrset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_resp_rcode_other: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsRespRcodeOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_resp_rcode_refuse: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsRespRcodeRefuse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_resp_rcode_yxdomain: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsRespRcodeYxdomain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_dns_resp_rcode_yxrrset: {
      value: cdktf.numberToHclTerraform(struct!.dohDnsRespRcodeYxrrset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_get_base64_decode_failed: {
      value: cdktf.numberToHclTerraform(struct!.dohGetBase64DecodeFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_get_dns_arg_failed: {
      value: cdktf.numberToHclTerraform(struct!.dohGetDnsArgFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_get_uri_too_long: {
      value: cdktf.numberToHclTerraform(struct!.dohGetUriTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_malloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.dohMallocFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_non_doh_method: {
      value: cdktf.numberToHclTerraform(struct!.dohNonDohMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_non_doh_req: {
      value: cdktf.numberToHclTerraform(struct!.dohNonDohReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_non_doh_req_get: {
      value: cdktf.numberToHclTerraform(struct!.dohNonDohReqGet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_non_doh_req_post: {
      value: cdktf.numberToHclTerraform(struct!.dohNonDohReqPost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_path_not_found: {
      value: cdktf.numberToHclTerraform(struct!.dohPathNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_post_content_type_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.dohPostContentTypeMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_post_payload_extract_failed: {
      value: cdktf.numberToHclTerraform(struct!.dohPostPayloadExtractFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_post_payload_not_found: {
      value: cdktf.numberToHclTerraform(struct!.dohPostPayloadNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_post_payload_too_large: {
      value: cdktf.numberToHclTerraform(struct!.dohPostPayloadTooLarge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_query_time_out: {
      value: cdktf.numberToHclTerraform(struct!.dohQueryTimeOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_req: {
      value: cdktf.numberToHclTerraform(struct!.dohReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_req_get: {
      value: cdktf.numberToHclTerraform(struct!.dohReqGet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_req_post: {
      value: cdktf.numberToHclTerraform(struct!.dohReqPost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_req_send_failed: {
      value: cdktf.numberToHclTerraform(struct!.dohReqSendFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_req_tcp_retry: {
      value: cdktf.numberToHclTerraform(struct!.dohReqTcpRetry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_req_tcp_retry_fail: {
      value: cdktf.numberToHclTerraform(struct!.dohReqTcpRetryFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_req_udp_retry: {
      value: cdktf.numberToHclTerraform(struct!.dohReqUdpRetry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_req_udp_retry_fail: {
      value: cdktf.numberToHclTerraform(struct!.dohReqUdpRetryFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_resp: {
      value: cdktf.numberToHclTerraform(struct!.dohResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_resp_header_alloc_failed: {
      value: cdktf.numberToHclTerraform(struct!.dohRespHeaderAllocFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_resp_que_failed: {
      value: cdktf.numberToHclTerraform(struct!.dohRespQueFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_resp_send_failed: {
      value: cdktf.numberToHclTerraform(struct!.dohRespSendFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_resp_setup_failed: {
      value: cdktf.numberToHclTerraform(struct!.dohRespSetupFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_resp_tcp_frags: {
      value: cdktf.numberToHclTerraform(struct!.dohRespTcpFrags),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_resp_udp_frags: {
      value: cdktf.numberToHclTerraform(struct!.dohRespUdpFrags),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_retry_w_tcp: {
      value: cdktf.numberToHclTerraform(struct!.dohRetryWTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_serv_sel_failed: {
      value: cdktf.numberToHclTerraform(struct!.dohServSelFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_snat_failed: {
      value: cdktf.numberToHclTerraform(struct!.dohSnatFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_tc_resp: {
      value: cdktf.numberToHclTerraform(struct!.dohTcResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_tcp_dns_req: {
      value: cdktf.numberToHclTerraform(struct!.dohTcpDnsReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_tcp_dns_resp: {
      value: cdktf.numberToHclTerraform(struct!.dohTcpDnsResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_tcp_send_failed: {
      value: cdktf.numberToHclTerraform(struct!.dohTcpSendFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_udp_dns_req: {
      value: cdktf.numberToHclTerraform(struct!.dohUdpDnsReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_udp_dns_resp: {
      value: cdktf.numberToHclTerraform(struct!.dohUdpDnsResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    doh_udp_send_failed: {
      value: cdktf.numberToHclTerraform(struct!.dohUdpSendFailed),
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
    get_and_payload: {
      value: cdktf.numberToHclTerraform(struct!.fetchAndPayload),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    h2up_content_length_alias: {
      value: cdktf.numberToHclTerraform(struct!.h2UpContentLengthAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    h2up_with_host_and_auth: {
      value: cdktf.numberToHclTerraform(struct!.h2UpWithHostAndAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    h2up_with_transfer_encoding: {
      value: cdktf.numberToHclTerraform(struct!.h2UpWithTransferEncoding),
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
    header_filter_rule_hit: {
      value: cdktf.numberToHclTerraform(struct!.headerFilterRuleHit),
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
    http1_client_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.http1ClientIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http2_client_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.http2ClientIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_allowed_methods: {
      value: cdktf.numberToHclTerraform(struct!.httpAllowedMethods),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_disallowed_methods: {
      value: cdktf.numberToHclTerraform(struct!.httpDisallowedMethods),
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
    malformed_h2up_header_value: {
      value: cdktf.numberToHclTerraform(struct!.malformedH2UpHeaderValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malformed_h2up_scheme_value: {
      value: cdktf.numberToHclTerraform(struct!.malformedH2UpSchemeValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multiple_content_length: {
      value: cdktf.numberToHclTerraform(struct!.multipleContentLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multiple_transfer_encoding: {
      value: cdktf.numberToHclTerraform(struct!.multipleTransferEncoding),
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
    req_enter_ssli: {
      value: cdktf.numberToHclTerraform(struct!.reqEnterSsli),
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
    req_http11_new_proxy: {
      value: cdktf.numberToHclTerraform(struct!.reqHttp11NewProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_http2: {
      value: cdktf.numberToHclTerraform(struct!.reqHttp2),
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
    req_timeout_close: {
      value: cdktf.numberToHclTerraform(struct!.reqTimeoutClose),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_timeout_retry: {
      value: cdktf.numberToHclTerraform(struct!.reqTimeoutRetry),
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
    response_504_ax: {
      value: cdktf.numberToHclTerraform(struct!.response504Ax),
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
    response_http2: {
      value: cdktf.numberToHclTerraform(struct!.responseHttp2),
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
    transfer_encoding_and_content_length: {
      value: cdktf.numberToHclTerraform(struct!.transferEncodingAndContentLength),
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
    ws_client_packets: {
      value: cdktf.numberToHclTerraform(struct!.wsClientPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ws_handshake_req: {
      value: cdktf.numberToHclTerraform(struct!.wsHandshakeReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ws_handshake_resp: {
      value: cdktf.numberToHclTerraform(struct!.wsHandshakeResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ws_server_packets: {
      value: cdktf.numberToHclTerraform(struct!.wsServerPackets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbHttpProxyOperOperHttpProxyCpuListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbHttpProxyOperOperHttpProxyCpuListStruct | cdktf.IResolvable | undefined {
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
    if (this._compressionAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionAfter = this._compressionAfter;
    }
    if (this._compressionAfterBr !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionAfterBr = this._compressionAfterBr;
    }
    if (this._compressionAfterTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionAfterTotal = this._compressionAfterTotal;
    }
    if (this._compressionBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionBefore = this._compressionBefore;
    }
    if (this._compressionBeforeBr !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionBeforeBr = this._compressionBeforeBr;
    }
    if (this._compressionBeforeTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionBeforeTotal = this._compressionBeforeTotal;
    }
    if (this._connectReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectReq = this._connectReq;
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
    if (this._decompressionAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.decompressionAfter = this._decompressionAfter;
    }
    if (this._decompressionAfterBr !== undefined) {
      hasAnyValues = true;
      internalValueResult.decompressionAfterBr = this._decompressionAfterBr;
    }
    if (this._decompressionAfterTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.decompressionAfterTotal = this._decompressionAfterTotal;
    }
    if (this._decompressionBefore !== undefined) {
      hasAnyValues = true;
      internalValueResult.decompressionBefore = this._decompressionBefore;
    }
    if (this._decompressionBeforeBr !== undefined) {
      hasAnyValues = true;
      internalValueResult.decompressionBeforeBr = this._decompressionBeforeBr;
    }
    if (this._decompressionBeforeTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.decompressionBeforeTotal = this._decompressionBeforeTotal;
    }
    if (this._dohDnsMalformedQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsMalformedQuery = this._dohDnsMalformedQuery;
    }
    if (this._dohDnsQueryTypeA !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsQueryTypeA = this._dohDnsQueryTypeA;
    }
    if (this._dohDnsQueryTypeAaaa !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsQueryTypeAaaa = this._dohDnsQueryTypeAaaa;
    }
    if (this._dohDnsQueryTypeAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsQueryTypeAny = this._dohDnsQueryTypeAny;
    }
    if (this._dohDnsQueryTypeCname !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsQueryTypeCname = this._dohDnsQueryTypeCname;
    }
    if (this._dohDnsQueryTypeMx !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsQueryTypeMx = this._dohDnsQueryTypeMx;
    }
    if (this._dohDnsQueryTypeNs !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsQueryTypeNs = this._dohDnsQueryTypeNs;
    }
    if (this._dohDnsQueryTypeOthers !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsQueryTypeOthers = this._dohDnsQueryTypeOthers;
    }
    if (this._dohDnsQueryTypeSoa !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsQueryTypeSoa = this._dohDnsQueryTypeSoa;
    }
    if (this._dohDnsQueryTypeSrv !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsQueryTypeSrv = this._dohDnsQueryTypeSrv;
    }
    if (this._dohDnsRespRcodeErrFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsRespRcodeErrFormat = this._dohDnsRespRcodeErrFormat;
    }
    if (this._dohDnsRespRcodeErrName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsRespRcodeErrName = this._dohDnsRespRcodeErrName;
    }
    if (this._dohDnsRespRcodeErrServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsRespRcodeErrServer = this._dohDnsRespRcodeErrServer;
    }
    if (this._dohDnsRespRcodeErrType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsRespRcodeErrType = this._dohDnsRespRcodeErrType;
    }
    if (this._dohDnsRespRcodeNotauth !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsRespRcodeNotauth = this._dohDnsRespRcodeNotauth;
    }
    if (this._dohDnsRespRcodeNotzone !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsRespRcodeNotzone = this._dohDnsRespRcodeNotzone;
    }
    if (this._dohDnsRespRcodeNxrrset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsRespRcodeNxrrset = this._dohDnsRespRcodeNxrrset;
    }
    if (this._dohDnsRespRcodeOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsRespRcodeOther = this._dohDnsRespRcodeOther;
    }
    if (this._dohDnsRespRcodeRefuse !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsRespRcodeRefuse = this._dohDnsRespRcodeRefuse;
    }
    if (this._dohDnsRespRcodeYxdomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsRespRcodeYxdomain = this._dohDnsRespRcodeYxdomain;
    }
    if (this._dohDnsRespRcodeYxrrset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohDnsRespRcodeYxrrset = this._dohDnsRespRcodeYxrrset;
    }
    if (this._dohGetBase64DecodeFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohGetBase64DecodeFailed = this._dohGetBase64DecodeFailed;
    }
    if (this._dohGetDnsArgFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohGetDnsArgFailed = this._dohGetDnsArgFailed;
    }
    if (this._dohGetUriTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohGetUriTooLong = this._dohGetUriTooLong;
    }
    if (this._dohMallocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohMallocFail = this._dohMallocFail;
    }
    if (this._dohNonDohMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohNonDohMethod = this._dohNonDohMethod;
    }
    if (this._dohNonDohReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohNonDohReq = this._dohNonDohReq;
    }
    if (this._dohNonDohReqGet !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohNonDohReqGet = this._dohNonDohReqGet;
    }
    if (this._dohNonDohReqPost !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohNonDohReqPost = this._dohNonDohReqPost;
    }
    if (this._dohPathNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohPathNotFound = this._dohPathNotFound;
    }
    if (this._dohPostContentTypeMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohPostContentTypeMismatch = this._dohPostContentTypeMismatch;
    }
    if (this._dohPostPayloadExtractFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohPostPayloadExtractFailed = this._dohPostPayloadExtractFailed;
    }
    if (this._dohPostPayloadNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohPostPayloadNotFound = this._dohPostPayloadNotFound;
    }
    if (this._dohPostPayloadTooLarge !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohPostPayloadTooLarge = this._dohPostPayloadTooLarge;
    }
    if (this._dohQueryTimeOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohQueryTimeOut = this._dohQueryTimeOut;
    }
    if (this._dohReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohReq = this._dohReq;
    }
    if (this._dohReqGet !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohReqGet = this._dohReqGet;
    }
    if (this._dohReqPost !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohReqPost = this._dohReqPost;
    }
    if (this._dohReqSendFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohReqSendFailed = this._dohReqSendFailed;
    }
    if (this._dohReqTcpRetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohReqTcpRetry = this._dohReqTcpRetry;
    }
    if (this._dohReqTcpRetryFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohReqTcpRetryFail = this._dohReqTcpRetryFail;
    }
    if (this._dohReqUdpRetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohReqUdpRetry = this._dohReqUdpRetry;
    }
    if (this._dohReqUdpRetryFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohReqUdpRetryFail = this._dohReqUdpRetryFail;
    }
    if (this._dohResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohResp = this._dohResp;
    }
    if (this._dohRespHeaderAllocFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohRespHeaderAllocFailed = this._dohRespHeaderAllocFailed;
    }
    if (this._dohRespQueFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohRespQueFailed = this._dohRespQueFailed;
    }
    if (this._dohRespSendFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohRespSendFailed = this._dohRespSendFailed;
    }
    if (this._dohRespSetupFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohRespSetupFailed = this._dohRespSetupFailed;
    }
    if (this._dohRespTcpFrags !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohRespTcpFrags = this._dohRespTcpFrags;
    }
    if (this._dohRespUdpFrags !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohRespUdpFrags = this._dohRespUdpFrags;
    }
    if (this._dohRetryWTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohRetryWTcp = this._dohRetryWTcp;
    }
    if (this._dohServSelFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohServSelFailed = this._dohServSelFailed;
    }
    if (this._dohSnatFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohSnatFailed = this._dohSnatFailed;
    }
    if (this._dohTcResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohTcResp = this._dohTcResp;
    }
    if (this._dohTcpDnsReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohTcpDnsReq = this._dohTcpDnsReq;
    }
    if (this._dohTcpDnsResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohTcpDnsResp = this._dohTcpDnsResp;
    }
    if (this._dohTcpSendFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohTcpSendFailed = this._dohTcpSendFailed;
    }
    if (this._dohUdpDnsReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohUdpDnsReq = this._dohUdpDnsReq;
    }
    if (this._dohUdpDnsResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohUdpDnsResp = this._dohUdpDnsResp;
    }
    if (this._dohUdpSendFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dohUdpSendFailed = this._dohUdpSendFailed;
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
    if (this._getAndPayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchAndPayload = this._getAndPayload;
    }
    if (this._h2UpContentLengthAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.h2UpContentLengthAlias = this._h2UpContentLengthAlias;
    }
    if (this._h2UpWithHostAndAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.h2UpWithHostAndAuth = this._h2UpWithHostAndAuth;
    }
    if (this._h2UpWithTransferEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.h2UpWithTransferEncoding = this._h2UpWithTransferEncoding;
    }
    if (this._headerDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerDelete = this._headerDelete;
    }
    if (this._headerFilterRuleHit !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerFilterRuleHit = this._headerFilterRuleHit;
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
    if (this._http1ClientIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.http1ClientIdleTimeout = this._http1ClientIdleTimeout;
    }
    if (this._http2ClientIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2ClientIdleTimeout = this._http2ClientIdleTimeout;
    }
    if (this._httpAllowedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpAllowedMethods = this._httpAllowedMethods;
    }
    if (this._httpDisallowedMethods !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpDisallowedMethods = this._httpDisallowedMethods;
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
    if (this._malformedH2UpHeaderValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedH2UpHeaderValue = this._malformedH2UpHeaderValue;
    }
    if (this._malformedH2UpSchemeValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedH2UpSchemeValue = this._malformedH2UpSchemeValue;
    }
    if (this._multipleContentLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipleContentLength = this._multipleContentLength;
    }
    if (this._multipleTransferEncoding !== undefined) {
      hasAnyValues = true;
      internalValueResult.multipleTransferEncoding = this._multipleTransferEncoding;
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
    if (this._reqEnterSsli !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqEnterSsli = this._reqEnterSsli;
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
    if (this._reqHttp11NewProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqHttp11NewProxy = this._reqHttp11NewProxy;
    }
    if (this._reqHttp2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqHttp2 = this._reqHttp2;
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
    if (this._reqTimeoutClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqTimeoutClose = this._reqTimeoutClose;
    }
    if (this._reqTimeoutRetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqTimeoutRetry = this._reqTimeoutRetry;
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
    if (this._response504Ax !== undefined) {
      hasAnyValues = true;
      internalValueResult.response504Ax = this._response504Ax;
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
    if (this._responseHttp2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseHttp2 = this._responseHttp2;
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
    if (this._tooManyHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooManyHeaders = this._tooManyHeaders;
    }
    if (this._totalProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalProxy = this._totalProxy;
    }
    if (this._transferEncodingAndContentLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.transferEncodingAndContentLength = this._transferEncodingAndContentLength;
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
    if (this._wsClientPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.wsClientPackets = this._wsClientPackets;
    }
    if (this._wsHandshakeReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.wsHandshakeReq = this._wsHandshakeReq;
    }
    if (this._wsHandshakeResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.wsHandshakeResp = this._wsHandshakeResp;
    }
    if (this._wsServerPackets !== undefined) {
      hasAnyValues = true;
      internalValueResult.wsServerPackets = this._wsServerPackets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbHttpProxyOperOperHttpProxyCpuListStruct | cdktf.IResolvable | undefined) {
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
      this._compressionAfter = undefined;
      this._compressionAfterBr = undefined;
      this._compressionAfterTotal = undefined;
      this._compressionBefore = undefined;
      this._compressionBeforeBr = undefined;
      this._compressionBeforeTotal = undefined;
      this._connectReq = undefined;
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
      this._decompressionAfter = undefined;
      this._decompressionAfterBr = undefined;
      this._decompressionAfterTotal = undefined;
      this._decompressionBefore = undefined;
      this._decompressionBeforeBr = undefined;
      this._decompressionBeforeTotal = undefined;
      this._dohDnsMalformedQuery = undefined;
      this._dohDnsQueryTypeA = undefined;
      this._dohDnsQueryTypeAaaa = undefined;
      this._dohDnsQueryTypeAny = undefined;
      this._dohDnsQueryTypeCname = undefined;
      this._dohDnsQueryTypeMx = undefined;
      this._dohDnsQueryTypeNs = undefined;
      this._dohDnsQueryTypeOthers = undefined;
      this._dohDnsQueryTypeSoa = undefined;
      this._dohDnsQueryTypeSrv = undefined;
      this._dohDnsRespRcodeErrFormat = undefined;
      this._dohDnsRespRcodeErrName = undefined;
      this._dohDnsRespRcodeErrServer = undefined;
      this._dohDnsRespRcodeErrType = undefined;
      this._dohDnsRespRcodeNotauth = undefined;
      this._dohDnsRespRcodeNotzone = undefined;
      this._dohDnsRespRcodeNxrrset = undefined;
      this._dohDnsRespRcodeOther = undefined;
      this._dohDnsRespRcodeRefuse = undefined;
      this._dohDnsRespRcodeYxdomain = undefined;
      this._dohDnsRespRcodeYxrrset = undefined;
      this._dohGetBase64DecodeFailed = undefined;
      this._dohGetDnsArgFailed = undefined;
      this._dohGetUriTooLong = undefined;
      this._dohMallocFail = undefined;
      this._dohNonDohMethod = undefined;
      this._dohNonDohReq = undefined;
      this._dohNonDohReqGet = undefined;
      this._dohNonDohReqPost = undefined;
      this._dohPathNotFound = undefined;
      this._dohPostContentTypeMismatch = undefined;
      this._dohPostPayloadExtractFailed = undefined;
      this._dohPostPayloadNotFound = undefined;
      this._dohPostPayloadTooLarge = undefined;
      this._dohQueryTimeOut = undefined;
      this._dohReq = undefined;
      this._dohReqGet = undefined;
      this._dohReqPost = undefined;
      this._dohReqSendFailed = undefined;
      this._dohReqTcpRetry = undefined;
      this._dohReqTcpRetryFail = undefined;
      this._dohReqUdpRetry = undefined;
      this._dohReqUdpRetryFail = undefined;
      this._dohResp = undefined;
      this._dohRespHeaderAllocFailed = undefined;
      this._dohRespQueFailed = undefined;
      this._dohRespSendFailed = undefined;
      this._dohRespSetupFailed = undefined;
      this._dohRespTcpFrags = undefined;
      this._dohRespUdpFrags = undefined;
      this._dohRetryWTcp = undefined;
      this._dohServSelFailed = undefined;
      this._dohSnatFailed = undefined;
      this._dohTcResp = undefined;
      this._dohTcpDnsReq = undefined;
      this._dohTcpDnsResp = undefined;
      this._dohTcpSendFailed = undefined;
      this._dohUdpDnsReq = undefined;
      this._dohUdpDnsResp = undefined;
      this._dohUdpSendFailed = undefined;
      this._fwdreqFail = undefined;
      this._fwdreqFailBuff = undefined;
      this._fwdreqFailPersist = undefined;
      this._fwdreqFailRoute = undefined;
      this._fwdreqFailRport = undefined;
      this._fwdreqFailServer = undefined;
      this._fwdreqFailTuple = undefined;
      this._fwdreqdataFail = undefined;
      this._getAndPayload = undefined;
      this._h2UpContentLengthAlias = undefined;
      this._h2UpWithHostAndAuth = undefined;
      this._h2UpWithTransferEncoding = undefined;
      this._headerDelete = undefined;
      this._headerFilterRuleHit = undefined;
      this._headerInsert = undefined;
      this._headerNameTooLong = undefined;
      this._hostSwitching = undefined;
      this._hostSwitchingEnqueue = undefined;
      this._hostSwitchingOk = undefined;
      this._http1ClientIdleTimeout = undefined;
      this._http2ClientIdleTimeout = undefined;
      this._httpAllowedMethods = undefined;
      this._httpDisallowedMethods = undefined;
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
      this._malformedH2UpHeaderValue = undefined;
      this._malformedH2UpSchemeValue = undefined;
      this._multipleContentLength = undefined;
      this._multipleTransferEncoding = undefined;
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
      this._reqConnect = undefined;
      this._reqContentLen = undefined;
      this._reqDelete = undefined;
      this._reqEnterSsli = undefined;
      this._reqGet = undefined;
      this._reqHead = undefined;
      this._reqHttp10 = undefined;
      this._reqHttp10Keepalive = undefined;
      this._reqHttp11 = undefined;
      this._reqHttp11NewProxy = undefined;
      this._reqHttp2 = undefined;
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
      this._reqTimeoutClose = undefined;
      this._reqTimeoutRetry = undefined;
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
      this._response504Ax = undefined;
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
      this._responseHttp2 = undefined;
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
      this._tooManyHeaders = undefined;
      this._totalProxy = undefined;
      this._transferEncodingAndContentLength = undefined;
      this._urlSwitching = undefined;
      this._urlSwitchingEnqueue = undefined;
      this._urlSwitchingOk = undefined;
      this._wrongRespHeader = undefined;
      this._wsClientPackets = undefined;
      this._wsHandshakeReq = undefined;
      this._wsHandshakeResp = undefined;
      this._wsServerPackets = undefined;
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
      this._compressionAfter = value.compressionAfter;
      this._compressionAfterBr = value.compressionAfterBr;
      this._compressionAfterTotal = value.compressionAfterTotal;
      this._compressionBefore = value.compressionBefore;
      this._compressionBeforeBr = value.compressionBeforeBr;
      this._compressionBeforeTotal = value.compressionBeforeTotal;
      this._connectReq = value.connectReq;
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
      this._decompressionAfter = value.decompressionAfter;
      this._decompressionAfterBr = value.decompressionAfterBr;
      this._decompressionAfterTotal = value.decompressionAfterTotal;
      this._decompressionBefore = value.decompressionBefore;
      this._decompressionBeforeBr = value.decompressionBeforeBr;
      this._decompressionBeforeTotal = value.decompressionBeforeTotal;
      this._dohDnsMalformedQuery = value.dohDnsMalformedQuery;
      this._dohDnsQueryTypeA = value.dohDnsQueryTypeA;
      this._dohDnsQueryTypeAaaa = value.dohDnsQueryTypeAaaa;
      this._dohDnsQueryTypeAny = value.dohDnsQueryTypeAny;
      this._dohDnsQueryTypeCname = value.dohDnsQueryTypeCname;
      this._dohDnsQueryTypeMx = value.dohDnsQueryTypeMx;
      this._dohDnsQueryTypeNs = value.dohDnsQueryTypeNs;
      this._dohDnsQueryTypeOthers = value.dohDnsQueryTypeOthers;
      this._dohDnsQueryTypeSoa = value.dohDnsQueryTypeSoa;
      this._dohDnsQueryTypeSrv = value.dohDnsQueryTypeSrv;
      this._dohDnsRespRcodeErrFormat = value.dohDnsRespRcodeErrFormat;
      this._dohDnsRespRcodeErrName = value.dohDnsRespRcodeErrName;
      this._dohDnsRespRcodeErrServer = value.dohDnsRespRcodeErrServer;
      this._dohDnsRespRcodeErrType = value.dohDnsRespRcodeErrType;
      this._dohDnsRespRcodeNotauth = value.dohDnsRespRcodeNotauth;
      this._dohDnsRespRcodeNotzone = value.dohDnsRespRcodeNotzone;
      this._dohDnsRespRcodeNxrrset = value.dohDnsRespRcodeNxrrset;
      this._dohDnsRespRcodeOther = value.dohDnsRespRcodeOther;
      this._dohDnsRespRcodeRefuse = value.dohDnsRespRcodeRefuse;
      this._dohDnsRespRcodeYxdomain = value.dohDnsRespRcodeYxdomain;
      this._dohDnsRespRcodeYxrrset = value.dohDnsRespRcodeYxrrset;
      this._dohGetBase64DecodeFailed = value.dohGetBase64DecodeFailed;
      this._dohGetDnsArgFailed = value.dohGetDnsArgFailed;
      this._dohGetUriTooLong = value.dohGetUriTooLong;
      this._dohMallocFail = value.dohMallocFail;
      this._dohNonDohMethod = value.dohNonDohMethod;
      this._dohNonDohReq = value.dohNonDohReq;
      this._dohNonDohReqGet = value.dohNonDohReqGet;
      this._dohNonDohReqPost = value.dohNonDohReqPost;
      this._dohPathNotFound = value.dohPathNotFound;
      this._dohPostContentTypeMismatch = value.dohPostContentTypeMismatch;
      this._dohPostPayloadExtractFailed = value.dohPostPayloadExtractFailed;
      this._dohPostPayloadNotFound = value.dohPostPayloadNotFound;
      this._dohPostPayloadTooLarge = value.dohPostPayloadTooLarge;
      this._dohQueryTimeOut = value.dohQueryTimeOut;
      this._dohReq = value.dohReq;
      this._dohReqGet = value.dohReqGet;
      this._dohReqPost = value.dohReqPost;
      this._dohReqSendFailed = value.dohReqSendFailed;
      this._dohReqTcpRetry = value.dohReqTcpRetry;
      this._dohReqTcpRetryFail = value.dohReqTcpRetryFail;
      this._dohReqUdpRetry = value.dohReqUdpRetry;
      this._dohReqUdpRetryFail = value.dohReqUdpRetryFail;
      this._dohResp = value.dohResp;
      this._dohRespHeaderAllocFailed = value.dohRespHeaderAllocFailed;
      this._dohRespQueFailed = value.dohRespQueFailed;
      this._dohRespSendFailed = value.dohRespSendFailed;
      this._dohRespSetupFailed = value.dohRespSetupFailed;
      this._dohRespTcpFrags = value.dohRespTcpFrags;
      this._dohRespUdpFrags = value.dohRespUdpFrags;
      this._dohRetryWTcp = value.dohRetryWTcp;
      this._dohServSelFailed = value.dohServSelFailed;
      this._dohSnatFailed = value.dohSnatFailed;
      this._dohTcResp = value.dohTcResp;
      this._dohTcpDnsReq = value.dohTcpDnsReq;
      this._dohTcpDnsResp = value.dohTcpDnsResp;
      this._dohTcpSendFailed = value.dohTcpSendFailed;
      this._dohUdpDnsReq = value.dohUdpDnsReq;
      this._dohUdpDnsResp = value.dohUdpDnsResp;
      this._dohUdpSendFailed = value.dohUdpSendFailed;
      this._fwdreqFail = value.fwdreqFail;
      this._fwdreqFailBuff = value.fwdreqFailBuff;
      this._fwdreqFailPersist = value.fwdreqFailPersist;
      this._fwdreqFailRoute = value.fwdreqFailRoute;
      this._fwdreqFailRport = value.fwdreqFailRport;
      this._fwdreqFailServer = value.fwdreqFailServer;
      this._fwdreqFailTuple = value.fwdreqFailTuple;
      this._fwdreqdataFail = value.fwdreqdataFail;
      this._getAndPayload = value.fetchAndPayload;
      this._h2UpContentLengthAlias = value.h2UpContentLengthAlias;
      this._h2UpWithHostAndAuth = value.h2UpWithHostAndAuth;
      this._h2UpWithTransferEncoding = value.h2UpWithTransferEncoding;
      this._headerDelete = value.headerDelete;
      this._headerFilterRuleHit = value.headerFilterRuleHit;
      this._headerInsert = value.headerInsert;
      this._headerNameTooLong = value.headerNameTooLong;
      this._hostSwitching = value.hostSwitching;
      this._hostSwitchingEnqueue = value.hostSwitchingEnqueue;
      this._hostSwitchingOk = value.hostSwitchingOk;
      this._http1ClientIdleTimeout = value.http1ClientIdleTimeout;
      this._http2ClientIdleTimeout = value.http2ClientIdleTimeout;
      this._httpAllowedMethods = value.httpAllowedMethods;
      this._httpDisallowedMethods = value.httpDisallowedMethods;
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
      this._malformedH2UpHeaderValue = value.malformedH2UpHeaderValue;
      this._malformedH2UpSchemeValue = value.malformedH2UpSchemeValue;
      this._multipleContentLength = value.multipleContentLength;
      this._multipleTransferEncoding = value.multipleTransferEncoding;
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
      this._reqConnect = value.reqConnect;
      this._reqContentLen = value.reqContentLen;
      this._reqDelete = value.reqDelete;
      this._reqEnterSsli = value.reqEnterSsli;
      this._reqGet = value.reqGet;
      this._reqHead = value.reqHead;
      this._reqHttp10 = value.reqHttp10;
      this._reqHttp10Keepalive = value.reqHttp10Keepalive;
      this._reqHttp11 = value.reqHttp11;
      this._reqHttp11NewProxy = value.reqHttp11NewProxy;
      this._reqHttp2 = value.reqHttp2;
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
      this._reqTimeoutClose = value.reqTimeoutClose;
      this._reqTimeoutRetry = value.reqTimeoutRetry;
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
      this._response504Ax = value.response504Ax;
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
      this._responseHttp2 = value.responseHttp2;
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
      this._tooManyHeaders = value.tooManyHeaders;
      this._totalProxy = value.totalProxy;
      this._transferEncodingAndContentLength = value.transferEncodingAndContentLength;
      this._urlSwitching = value.urlSwitching;
      this._urlSwitchingEnqueue = value.urlSwitchingEnqueue;
      this._urlSwitchingOk = value.urlSwitchingOk;
      this._wrongRespHeader = value.wrongRespHeader;
      this._wsClientPackets = value.wsClientPackets;
      this._wsHandshakeReq = value.wsHandshakeReq;
      this._wsHandshakeResp = value.wsHandshakeResp;
      this._wsServerPackets = value.wsServerPackets;
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

  // compression_after - computed: false, optional: true, required: false
  private _compressionAfter?: number; 
  public get compressionAfter() {
    return this.getNumberAttribute('compression_after');
  }
  public set compressionAfter(value: number) {
    this._compressionAfter = value;
  }
  public resetCompressionAfter() {
    this._compressionAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionAfterInput() {
    return this._compressionAfter;
  }

  // compression_after_br - computed: false, optional: true, required: false
  private _compressionAfterBr?: number; 
  public get compressionAfterBr() {
    return this.getNumberAttribute('compression_after_br');
  }
  public set compressionAfterBr(value: number) {
    this._compressionAfterBr = value;
  }
  public resetCompressionAfterBr() {
    this._compressionAfterBr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionAfterBrInput() {
    return this._compressionAfterBr;
  }

  // compression_after_total - computed: false, optional: true, required: false
  private _compressionAfterTotal?: number; 
  public get compressionAfterTotal() {
    return this.getNumberAttribute('compression_after_total');
  }
  public set compressionAfterTotal(value: number) {
    this._compressionAfterTotal = value;
  }
  public resetCompressionAfterTotal() {
    this._compressionAfterTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionAfterTotalInput() {
    return this._compressionAfterTotal;
  }

  // compression_before - computed: false, optional: true, required: false
  private _compressionBefore?: number; 
  public get compressionBefore() {
    return this.getNumberAttribute('compression_before');
  }
  public set compressionBefore(value: number) {
    this._compressionBefore = value;
  }
  public resetCompressionBefore() {
    this._compressionBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionBeforeInput() {
    return this._compressionBefore;
  }

  // compression_before_br - computed: false, optional: true, required: false
  private _compressionBeforeBr?: number; 
  public get compressionBeforeBr() {
    return this.getNumberAttribute('compression_before_br');
  }
  public set compressionBeforeBr(value: number) {
    this._compressionBeforeBr = value;
  }
  public resetCompressionBeforeBr() {
    this._compressionBeforeBr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionBeforeBrInput() {
    return this._compressionBeforeBr;
  }

  // compression_before_total - computed: false, optional: true, required: false
  private _compressionBeforeTotal?: number; 
  public get compressionBeforeTotal() {
    return this.getNumberAttribute('compression_before_total');
  }
  public set compressionBeforeTotal(value: number) {
    this._compressionBeforeTotal = value;
  }
  public resetCompressionBeforeTotal() {
    this._compressionBeforeTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionBeforeTotalInput() {
    return this._compressionBeforeTotal;
  }

  // connect_req - computed: false, optional: true, required: false
  private _connectReq?: number; 
  public get connectReq() {
    return this.getNumberAttribute('connect_req');
  }
  public set connectReq(value: number) {
    this._connectReq = value;
  }
  public resetConnectReq() {
    this._connectReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectReqInput() {
    return this._connectReq;
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

  // decompression_after - computed: false, optional: true, required: false
  private _decompressionAfter?: number; 
  public get decompressionAfter() {
    return this.getNumberAttribute('decompression_after');
  }
  public set decompressionAfter(value: number) {
    this._decompressionAfter = value;
  }
  public resetDecompressionAfter() {
    this._decompressionAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decompressionAfterInput() {
    return this._decompressionAfter;
  }

  // decompression_after_br - computed: false, optional: true, required: false
  private _decompressionAfterBr?: number; 
  public get decompressionAfterBr() {
    return this.getNumberAttribute('decompression_after_br');
  }
  public set decompressionAfterBr(value: number) {
    this._decompressionAfterBr = value;
  }
  public resetDecompressionAfterBr() {
    this._decompressionAfterBr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decompressionAfterBrInput() {
    return this._decompressionAfterBr;
  }

  // decompression_after_total - computed: false, optional: true, required: false
  private _decompressionAfterTotal?: number; 
  public get decompressionAfterTotal() {
    return this.getNumberAttribute('decompression_after_total');
  }
  public set decompressionAfterTotal(value: number) {
    this._decompressionAfterTotal = value;
  }
  public resetDecompressionAfterTotal() {
    this._decompressionAfterTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decompressionAfterTotalInput() {
    return this._decompressionAfterTotal;
  }

  // decompression_before - computed: false, optional: true, required: false
  private _decompressionBefore?: number; 
  public get decompressionBefore() {
    return this.getNumberAttribute('decompression_before');
  }
  public set decompressionBefore(value: number) {
    this._decompressionBefore = value;
  }
  public resetDecompressionBefore() {
    this._decompressionBefore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decompressionBeforeInput() {
    return this._decompressionBefore;
  }

  // decompression_before_br - computed: false, optional: true, required: false
  private _decompressionBeforeBr?: number; 
  public get decompressionBeforeBr() {
    return this.getNumberAttribute('decompression_before_br');
  }
  public set decompressionBeforeBr(value: number) {
    this._decompressionBeforeBr = value;
  }
  public resetDecompressionBeforeBr() {
    this._decompressionBeforeBr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decompressionBeforeBrInput() {
    return this._decompressionBeforeBr;
  }

  // decompression_before_total - computed: false, optional: true, required: false
  private _decompressionBeforeTotal?: number; 
  public get decompressionBeforeTotal() {
    return this.getNumberAttribute('decompression_before_total');
  }
  public set decompressionBeforeTotal(value: number) {
    this._decompressionBeforeTotal = value;
  }
  public resetDecompressionBeforeTotal() {
    this._decompressionBeforeTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decompressionBeforeTotalInput() {
    return this._decompressionBeforeTotal;
  }

  // doh_dns_malformed_query - computed: false, optional: true, required: false
  private _dohDnsMalformedQuery?: number; 
  public get dohDnsMalformedQuery() {
    return this.getNumberAttribute('doh_dns_malformed_query');
  }
  public set dohDnsMalformedQuery(value: number) {
    this._dohDnsMalformedQuery = value;
  }
  public resetDohDnsMalformedQuery() {
    this._dohDnsMalformedQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsMalformedQueryInput() {
    return this._dohDnsMalformedQuery;
  }

  // doh_dns_query_type_a - computed: false, optional: true, required: false
  private _dohDnsQueryTypeA?: number; 
  public get dohDnsQueryTypeA() {
    return this.getNumberAttribute('doh_dns_query_type_a');
  }
  public set dohDnsQueryTypeA(value: number) {
    this._dohDnsQueryTypeA = value;
  }
  public resetDohDnsQueryTypeA() {
    this._dohDnsQueryTypeA = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsQueryTypeAInput() {
    return this._dohDnsQueryTypeA;
  }

  // doh_dns_query_type_aaaa - computed: false, optional: true, required: false
  private _dohDnsQueryTypeAaaa?: number; 
  public get dohDnsQueryTypeAaaa() {
    return this.getNumberAttribute('doh_dns_query_type_aaaa');
  }
  public set dohDnsQueryTypeAaaa(value: number) {
    this._dohDnsQueryTypeAaaa = value;
  }
  public resetDohDnsQueryTypeAaaa() {
    this._dohDnsQueryTypeAaaa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsQueryTypeAaaaInput() {
    return this._dohDnsQueryTypeAaaa;
  }

  // doh_dns_query_type_any - computed: false, optional: true, required: false
  private _dohDnsQueryTypeAny?: number; 
  public get dohDnsQueryTypeAny() {
    return this.getNumberAttribute('doh_dns_query_type_any');
  }
  public set dohDnsQueryTypeAny(value: number) {
    this._dohDnsQueryTypeAny = value;
  }
  public resetDohDnsQueryTypeAny() {
    this._dohDnsQueryTypeAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsQueryTypeAnyInput() {
    return this._dohDnsQueryTypeAny;
  }

  // doh_dns_query_type_cname - computed: false, optional: true, required: false
  private _dohDnsQueryTypeCname?: number; 
  public get dohDnsQueryTypeCname() {
    return this.getNumberAttribute('doh_dns_query_type_cname');
  }
  public set dohDnsQueryTypeCname(value: number) {
    this._dohDnsQueryTypeCname = value;
  }
  public resetDohDnsQueryTypeCname() {
    this._dohDnsQueryTypeCname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsQueryTypeCnameInput() {
    return this._dohDnsQueryTypeCname;
  }

  // doh_dns_query_type_mx - computed: false, optional: true, required: false
  private _dohDnsQueryTypeMx?: number; 
  public get dohDnsQueryTypeMx() {
    return this.getNumberAttribute('doh_dns_query_type_mx');
  }
  public set dohDnsQueryTypeMx(value: number) {
    this._dohDnsQueryTypeMx = value;
  }
  public resetDohDnsQueryTypeMx() {
    this._dohDnsQueryTypeMx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsQueryTypeMxInput() {
    return this._dohDnsQueryTypeMx;
  }

  // doh_dns_query_type_ns - computed: false, optional: true, required: false
  private _dohDnsQueryTypeNs?: number; 
  public get dohDnsQueryTypeNs() {
    return this.getNumberAttribute('doh_dns_query_type_ns');
  }
  public set dohDnsQueryTypeNs(value: number) {
    this._dohDnsQueryTypeNs = value;
  }
  public resetDohDnsQueryTypeNs() {
    this._dohDnsQueryTypeNs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsQueryTypeNsInput() {
    return this._dohDnsQueryTypeNs;
  }

  // doh_dns_query_type_others - computed: false, optional: true, required: false
  private _dohDnsQueryTypeOthers?: number; 
  public get dohDnsQueryTypeOthers() {
    return this.getNumberAttribute('doh_dns_query_type_others');
  }
  public set dohDnsQueryTypeOthers(value: number) {
    this._dohDnsQueryTypeOthers = value;
  }
  public resetDohDnsQueryTypeOthers() {
    this._dohDnsQueryTypeOthers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsQueryTypeOthersInput() {
    return this._dohDnsQueryTypeOthers;
  }

  // doh_dns_query_type_soa - computed: false, optional: true, required: false
  private _dohDnsQueryTypeSoa?: number; 
  public get dohDnsQueryTypeSoa() {
    return this.getNumberAttribute('doh_dns_query_type_soa');
  }
  public set dohDnsQueryTypeSoa(value: number) {
    this._dohDnsQueryTypeSoa = value;
  }
  public resetDohDnsQueryTypeSoa() {
    this._dohDnsQueryTypeSoa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsQueryTypeSoaInput() {
    return this._dohDnsQueryTypeSoa;
  }

  // doh_dns_query_type_srv - computed: false, optional: true, required: false
  private _dohDnsQueryTypeSrv?: number; 
  public get dohDnsQueryTypeSrv() {
    return this.getNumberAttribute('doh_dns_query_type_srv');
  }
  public set dohDnsQueryTypeSrv(value: number) {
    this._dohDnsQueryTypeSrv = value;
  }
  public resetDohDnsQueryTypeSrv() {
    this._dohDnsQueryTypeSrv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsQueryTypeSrvInput() {
    return this._dohDnsQueryTypeSrv;
  }

  // doh_dns_resp_rcode_err_format - computed: false, optional: true, required: false
  private _dohDnsRespRcodeErrFormat?: number; 
  public get dohDnsRespRcodeErrFormat() {
    return this.getNumberAttribute('doh_dns_resp_rcode_err_format');
  }
  public set dohDnsRespRcodeErrFormat(value: number) {
    this._dohDnsRespRcodeErrFormat = value;
  }
  public resetDohDnsRespRcodeErrFormat() {
    this._dohDnsRespRcodeErrFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsRespRcodeErrFormatInput() {
    return this._dohDnsRespRcodeErrFormat;
  }

  // doh_dns_resp_rcode_err_name - computed: false, optional: true, required: false
  private _dohDnsRespRcodeErrName?: number; 
  public get dohDnsRespRcodeErrName() {
    return this.getNumberAttribute('doh_dns_resp_rcode_err_name');
  }
  public set dohDnsRespRcodeErrName(value: number) {
    this._dohDnsRespRcodeErrName = value;
  }
  public resetDohDnsRespRcodeErrName() {
    this._dohDnsRespRcodeErrName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsRespRcodeErrNameInput() {
    return this._dohDnsRespRcodeErrName;
  }

  // doh_dns_resp_rcode_err_server - computed: false, optional: true, required: false
  private _dohDnsRespRcodeErrServer?: number; 
  public get dohDnsRespRcodeErrServer() {
    return this.getNumberAttribute('doh_dns_resp_rcode_err_server');
  }
  public set dohDnsRespRcodeErrServer(value: number) {
    this._dohDnsRespRcodeErrServer = value;
  }
  public resetDohDnsRespRcodeErrServer() {
    this._dohDnsRespRcodeErrServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsRespRcodeErrServerInput() {
    return this._dohDnsRespRcodeErrServer;
  }

  // doh_dns_resp_rcode_err_type - computed: false, optional: true, required: false
  private _dohDnsRespRcodeErrType?: number; 
  public get dohDnsRespRcodeErrType() {
    return this.getNumberAttribute('doh_dns_resp_rcode_err_type');
  }
  public set dohDnsRespRcodeErrType(value: number) {
    this._dohDnsRespRcodeErrType = value;
  }
  public resetDohDnsRespRcodeErrType() {
    this._dohDnsRespRcodeErrType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsRespRcodeErrTypeInput() {
    return this._dohDnsRespRcodeErrType;
  }

  // doh_dns_resp_rcode_notauth - computed: false, optional: true, required: false
  private _dohDnsRespRcodeNotauth?: number; 
  public get dohDnsRespRcodeNotauth() {
    return this.getNumberAttribute('doh_dns_resp_rcode_notauth');
  }
  public set dohDnsRespRcodeNotauth(value: number) {
    this._dohDnsRespRcodeNotauth = value;
  }
  public resetDohDnsRespRcodeNotauth() {
    this._dohDnsRespRcodeNotauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsRespRcodeNotauthInput() {
    return this._dohDnsRespRcodeNotauth;
  }

  // doh_dns_resp_rcode_notzone - computed: false, optional: true, required: false
  private _dohDnsRespRcodeNotzone?: number; 
  public get dohDnsRespRcodeNotzone() {
    return this.getNumberAttribute('doh_dns_resp_rcode_notzone');
  }
  public set dohDnsRespRcodeNotzone(value: number) {
    this._dohDnsRespRcodeNotzone = value;
  }
  public resetDohDnsRespRcodeNotzone() {
    this._dohDnsRespRcodeNotzone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsRespRcodeNotzoneInput() {
    return this._dohDnsRespRcodeNotzone;
  }

  // doh_dns_resp_rcode_nxrrset - computed: false, optional: true, required: false
  private _dohDnsRespRcodeNxrrset?: number; 
  public get dohDnsRespRcodeNxrrset() {
    return this.getNumberAttribute('doh_dns_resp_rcode_nxrrset');
  }
  public set dohDnsRespRcodeNxrrset(value: number) {
    this._dohDnsRespRcodeNxrrset = value;
  }
  public resetDohDnsRespRcodeNxrrset() {
    this._dohDnsRespRcodeNxrrset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsRespRcodeNxrrsetInput() {
    return this._dohDnsRespRcodeNxrrset;
  }

  // doh_dns_resp_rcode_other - computed: false, optional: true, required: false
  private _dohDnsRespRcodeOther?: number; 
  public get dohDnsRespRcodeOther() {
    return this.getNumberAttribute('doh_dns_resp_rcode_other');
  }
  public set dohDnsRespRcodeOther(value: number) {
    this._dohDnsRespRcodeOther = value;
  }
  public resetDohDnsRespRcodeOther() {
    this._dohDnsRespRcodeOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsRespRcodeOtherInput() {
    return this._dohDnsRespRcodeOther;
  }

  // doh_dns_resp_rcode_refuse - computed: false, optional: true, required: false
  private _dohDnsRespRcodeRefuse?: number; 
  public get dohDnsRespRcodeRefuse() {
    return this.getNumberAttribute('doh_dns_resp_rcode_refuse');
  }
  public set dohDnsRespRcodeRefuse(value: number) {
    this._dohDnsRespRcodeRefuse = value;
  }
  public resetDohDnsRespRcodeRefuse() {
    this._dohDnsRespRcodeRefuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsRespRcodeRefuseInput() {
    return this._dohDnsRespRcodeRefuse;
  }

  // doh_dns_resp_rcode_yxdomain - computed: false, optional: true, required: false
  private _dohDnsRespRcodeYxdomain?: number; 
  public get dohDnsRespRcodeYxdomain() {
    return this.getNumberAttribute('doh_dns_resp_rcode_yxdomain');
  }
  public set dohDnsRespRcodeYxdomain(value: number) {
    this._dohDnsRespRcodeYxdomain = value;
  }
  public resetDohDnsRespRcodeYxdomain() {
    this._dohDnsRespRcodeYxdomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsRespRcodeYxdomainInput() {
    return this._dohDnsRespRcodeYxdomain;
  }

  // doh_dns_resp_rcode_yxrrset - computed: false, optional: true, required: false
  private _dohDnsRespRcodeYxrrset?: number; 
  public get dohDnsRespRcodeYxrrset() {
    return this.getNumberAttribute('doh_dns_resp_rcode_yxrrset');
  }
  public set dohDnsRespRcodeYxrrset(value: number) {
    this._dohDnsRespRcodeYxrrset = value;
  }
  public resetDohDnsRespRcodeYxrrset() {
    this._dohDnsRespRcodeYxrrset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohDnsRespRcodeYxrrsetInput() {
    return this._dohDnsRespRcodeYxrrset;
  }

  // doh_get_base64_decode_failed - computed: false, optional: true, required: false
  private _dohGetBase64DecodeFailed?: number; 
  public get dohGetBase64DecodeFailed() {
    return this.getNumberAttribute('doh_get_base64_decode_failed');
  }
  public set dohGetBase64DecodeFailed(value: number) {
    this._dohGetBase64DecodeFailed = value;
  }
  public resetDohGetBase64DecodeFailed() {
    this._dohGetBase64DecodeFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohGetBase64DecodeFailedInput() {
    return this._dohGetBase64DecodeFailed;
  }

  // doh_get_dns_arg_failed - computed: false, optional: true, required: false
  private _dohGetDnsArgFailed?: number; 
  public get dohGetDnsArgFailed() {
    return this.getNumberAttribute('doh_get_dns_arg_failed');
  }
  public set dohGetDnsArgFailed(value: number) {
    this._dohGetDnsArgFailed = value;
  }
  public resetDohGetDnsArgFailed() {
    this._dohGetDnsArgFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohGetDnsArgFailedInput() {
    return this._dohGetDnsArgFailed;
  }

  // doh_get_uri_too_long - computed: false, optional: true, required: false
  private _dohGetUriTooLong?: number; 
  public get dohGetUriTooLong() {
    return this.getNumberAttribute('doh_get_uri_too_long');
  }
  public set dohGetUriTooLong(value: number) {
    this._dohGetUriTooLong = value;
  }
  public resetDohGetUriTooLong() {
    this._dohGetUriTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohGetUriTooLongInput() {
    return this._dohGetUriTooLong;
  }

  // doh_malloc_fail - computed: false, optional: true, required: false
  private _dohMallocFail?: number; 
  public get dohMallocFail() {
    return this.getNumberAttribute('doh_malloc_fail');
  }
  public set dohMallocFail(value: number) {
    this._dohMallocFail = value;
  }
  public resetDohMallocFail() {
    this._dohMallocFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohMallocFailInput() {
    return this._dohMallocFail;
  }

  // doh_non_doh_method - computed: false, optional: true, required: false
  private _dohNonDohMethod?: number; 
  public get dohNonDohMethod() {
    return this.getNumberAttribute('doh_non_doh_method');
  }
  public set dohNonDohMethod(value: number) {
    this._dohNonDohMethod = value;
  }
  public resetDohNonDohMethod() {
    this._dohNonDohMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohNonDohMethodInput() {
    return this._dohNonDohMethod;
  }

  // doh_non_doh_req - computed: false, optional: true, required: false
  private _dohNonDohReq?: number; 
  public get dohNonDohReq() {
    return this.getNumberAttribute('doh_non_doh_req');
  }
  public set dohNonDohReq(value: number) {
    this._dohNonDohReq = value;
  }
  public resetDohNonDohReq() {
    this._dohNonDohReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohNonDohReqInput() {
    return this._dohNonDohReq;
  }

  // doh_non_doh_req_get - computed: false, optional: true, required: false
  private _dohNonDohReqGet?: number; 
  public get dohNonDohReqGet() {
    return this.getNumberAttribute('doh_non_doh_req_get');
  }
  public set dohNonDohReqGet(value: number) {
    this._dohNonDohReqGet = value;
  }
  public resetDohNonDohReqGet() {
    this._dohNonDohReqGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohNonDohReqGetInput() {
    return this._dohNonDohReqGet;
  }

  // doh_non_doh_req_post - computed: false, optional: true, required: false
  private _dohNonDohReqPost?: number; 
  public get dohNonDohReqPost() {
    return this.getNumberAttribute('doh_non_doh_req_post');
  }
  public set dohNonDohReqPost(value: number) {
    this._dohNonDohReqPost = value;
  }
  public resetDohNonDohReqPost() {
    this._dohNonDohReqPost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohNonDohReqPostInput() {
    return this._dohNonDohReqPost;
  }

  // doh_path_not_found - computed: false, optional: true, required: false
  private _dohPathNotFound?: number; 
  public get dohPathNotFound() {
    return this.getNumberAttribute('doh_path_not_found');
  }
  public set dohPathNotFound(value: number) {
    this._dohPathNotFound = value;
  }
  public resetDohPathNotFound() {
    this._dohPathNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohPathNotFoundInput() {
    return this._dohPathNotFound;
  }

  // doh_post_content_type_mismatch - computed: false, optional: true, required: false
  private _dohPostContentTypeMismatch?: number; 
  public get dohPostContentTypeMismatch() {
    return this.getNumberAttribute('doh_post_content_type_mismatch');
  }
  public set dohPostContentTypeMismatch(value: number) {
    this._dohPostContentTypeMismatch = value;
  }
  public resetDohPostContentTypeMismatch() {
    this._dohPostContentTypeMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohPostContentTypeMismatchInput() {
    return this._dohPostContentTypeMismatch;
  }

  // doh_post_payload_extract_failed - computed: false, optional: true, required: false
  private _dohPostPayloadExtractFailed?: number; 
  public get dohPostPayloadExtractFailed() {
    return this.getNumberAttribute('doh_post_payload_extract_failed');
  }
  public set dohPostPayloadExtractFailed(value: number) {
    this._dohPostPayloadExtractFailed = value;
  }
  public resetDohPostPayloadExtractFailed() {
    this._dohPostPayloadExtractFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohPostPayloadExtractFailedInput() {
    return this._dohPostPayloadExtractFailed;
  }

  // doh_post_payload_not_found - computed: false, optional: true, required: false
  private _dohPostPayloadNotFound?: number; 
  public get dohPostPayloadNotFound() {
    return this.getNumberAttribute('doh_post_payload_not_found');
  }
  public set dohPostPayloadNotFound(value: number) {
    this._dohPostPayloadNotFound = value;
  }
  public resetDohPostPayloadNotFound() {
    this._dohPostPayloadNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohPostPayloadNotFoundInput() {
    return this._dohPostPayloadNotFound;
  }

  // doh_post_payload_too_large - computed: false, optional: true, required: false
  private _dohPostPayloadTooLarge?: number; 
  public get dohPostPayloadTooLarge() {
    return this.getNumberAttribute('doh_post_payload_too_large');
  }
  public set dohPostPayloadTooLarge(value: number) {
    this._dohPostPayloadTooLarge = value;
  }
  public resetDohPostPayloadTooLarge() {
    this._dohPostPayloadTooLarge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohPostPayloadTooLargeInput() {
    return this._dohPostPayloadTooLarge;
  }

  // doh_query_time_out - computed: false, optional: true, required: false
  private _dohQueryTimeOut?: number; 
  public get dohQueryTimeOut() {
    return this.getNumberAttribute('doh_query_time_out');
  }
  public set dohQueryTimeOut(value: number) {
    this._dohQueryTimeOut = value;
  }
  public resetDohQueryTimeOut() {
    this._dohQueryTimeOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohQueryTimeOutInput() {
    return this._dohQueryTimeOut;
  }

  // doh_req - computed: false, optional: true, required: false
  private _dohReq?: number; 
  public get dohReq() {
    return this.getNumberAttribute('doh_req');
  }
  public set dohReq(value: number) {
    this._dohReq = value;
  }
  public resetDohReq() {
    this._dohReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohReqInput() {
    return this._dohReq;
  }

  // doh_req_get - computed: false, optional: true, required: false
  private _dohReqGet?: number; 
  public get dohReqGet() {
    return this.getNumberAttribute('doh_req_get');
  }
  public set dohReqGet(value: number) {
    this._dohReqGet = value;
  }
  public resetDohReqGet() {
    this._dohReqGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohReqGetInput() {
    return this._dohReqGet;
  }

  // doh_req_post - computed: false, optional: true, required: false
  private _dohReqPost?: number; 
  public get dohReqPost() {
    return this.getNumberAttribute('doh_req_post');
  }
  public set dohReqPost(value: number) {
    this._dohReqPost = value;
  }
  public resetDohReqPost() {
    this._dohReqPost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohReqPostInput() {
    return this._dohReqPost;
  }

  // doh_req_send_failed - computed: false, optional: true, required: false
  private _dohReqSendFailed?: number; 
  public get dohReqSendFailed() {
    return this.getNumberAttribute('doh_req_send_failed');
  }
  public set dohReqSendFailed(value: number) {
    this._dohReqSendFailed = value;
  }
  public resetDohReqSendFailed() {
    this._dohReqSendFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohReqSendFailedInput() {
    return this._dohReqSendFailed;
  }

  // doh_req_tcp_retry - computed: false, optional: true, required: false
  private _dohReqTcpRetry?: number; 
  public get dohReqTcpRetry() {
    return this.getNumberAttribute('doh_req_tcp_retry');
  }
  public set dohReqTcpRetry(value: number) {
    this._dohReqTcpRetry = value;
  }
  public resetDohReqTcpRetry() {
    this._dohReqTcpRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohReqTcpRetryInput() {
    return this._dohReqTcpRetry;
  }

  // doh_req_tcp_retry_fail - computed: false, optional: true, required: false
  private _dohReqTcpRetryFail?: number; 
  public get dohReqTcpRetryFail() {
    return this.getNumberAttribute('doh_req_tcp_retry_fail');
  }
  public set dohReqTcpRetryFail(value: number) {
    this._dohReqTcpRetryFail = value;
  }
  public resetDohReqTcpRetryFail() {
    this._dohReqTcpRetryFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohReqTcpRetryFailInput() {
    return this._dohReqTcpRetryFail;
  }

  // doh_req_udp_retry - computed: false, optional: true, required: false
  private _dohReqUdpRetry?: number; 
  public get dohReqUdpRetry() {
    return this.getNumberAttribute('doh_req_udp_retry');
  }
  public set dohReqUdpRetry(value: number) {
    this._dohReqUdpRetry = value;
  }
  public resetDohReqUdpRetry() {
    this._dohReqUdpRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohReqUdpRetryInput() {
    return this._dohReqUdpRetry;
  }

  // doh_req_udp_retry_fail - computed: false, optional: true, required: false
  private _dohReqUdpRetryFail?: number; 
  public get dohReqUdpRetryFail() {
    return this.getNumberAttribute('doh_req_udp_retry_fail');
  }
  public set dohReqUdpRetryFail(value: number) {
    this._dohReqUdpRetryFail = value;
  }
  public resetDohReqUdpRetryFail() {
    this._dohReqUdpRetryFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohReqUdpRetryFailInput() {
    return this._dohReqUdpRetryFail;
  }

  // doh_resp - computed: false, optional: true, required: false
  private _dohResp?: number; 
  public get dohResp() {
    return this.getNumberAttribute('doh_resp');
  }
  public set dohResp(value: number) {
    this._dohResp = value;
  }
  public resetDohResp() {
    this._dohResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohRespInput() {
    return this._dohResp;
  }

  // doh_resp_header_alloc_failed - computed: false, optional: true, required: false
  private _dohRespHeaderAllocFailed?: number; 
  public get dohRespHeaderAllocFailed() {
    return this.getNumberAttribute('doh_resp_header_alloc_failed');
  }
  public set dohRespHeaderAllocFailed(value: number) {
    this._dohRespHeaderAllocFailed = value;
  }
  public resetDohRespHeaderAllocFailed() {
    this._dohRespHeaderAllocFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohRespHeaderAllocFailedInput() {
    return this._dohRespHeaderAllocFailed;
  }

  // doh_resp_que_failed - computed: false, optional: true, required: false
  private _dohRespQueFailed?: number; 
  public get dohRespQueFailed() {
    return this.getNumberAttribute('doh_resp_que_failed');
  }
  public set dohRespQueFailed(value: number) {
    this._dohRespQueFailed = value;
  }
  public resetDohRespQueFailed() {
    this._dohRespQueFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohRespQueFailedInput() {
    return this._dohRespQueFailed;
  }

  // doh_resp_send_failed - computed: false, optional: true, required: false
  private _dohRespSendFailed?: number; 
  public get dohRespSendFailed() {
    return this.getNumberAttribute('doh_resp_send_failed');
  }
  public set dohRespSendFailed(value: number) {
    this._dohRespSendFailed = value;
  }
  public resetDohRespSendFailed() {
    this._dohRespSendFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohRespSendFailedInput() {
    return this._dohRespSendFailed;
  }

  // doh_resp_setup_failed - computed: false, optional: true, required: false
  private _dohRespSetupFailed?: number; 
  public get dohRespSetupFailed() {
    return this.getNumberAttribute('doh_resp_setup_failed');
  }
  public set dohRespSetupFailed(value: number) {
    this._dohRespSetupFailed = value;
  }
  public resetDohRespSetupFailed() {
    this._dohRespSetupFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohRespSetupFailedInput() {
    return this._dohRespSetupFailed;
  }

  // doh_resp_tcp_frags - computed: false, optional: true, required: false
  private _dohRespTcpFrags?: number; 
  public get dohRespTcpFrags() {
    return this.getNumberAttribute('doh_resp_tcp_frags');
  }
  public set dohRespTcpFrags(value: number) {
    this._dohRespTcpFrags = value;
  }
  public resetDohRespTcpFrags() {
    this._dohRespTcpFrags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohRespTcpFragsInput() {
    return this._dohRespTcpFrags;
  }

  // doh_resp_udp_frags - computed: false, optional: true, required: false
  private _dohRespUdpFrags?: number; 
  public get dohRespUdpFrags() {
    return this.getNumberAttribute('doh_resp_udp_frags');
  }
  public set dohRespUdpFrags(value: number) {
    this._dohRespUdpFrags = value;
  }
  public resetDohRespUdpFrags() {
    this._dohRespUdpFrags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohRespUdpFragsInput() {
    return this._dohRespUdpFrags;
  }

  // doh_retry_w_tcp - computed: false, optional: true, required: false
  private _dohRetryWTcp?: number; 
  public get dohRetryWTcp() {
    return this.getNumberAttribute('doh_retry_w_tcp');
  }
  public set dohRetryWTcp(value: number) {
    this._dohRetryWTcp = value;
  }
  public resetDohRetryWTcp() {
    this._dohRetryWTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohRetryWTcpInput() {
    return this._dohRetryWTcp;
  }

  // doh_serv_sel_failed - computed: false, optional: true, required: false
  private _dohServSelFailed?: number; 
  public get dohServSelFailed() {
    return this.getNumberAttribute('doh_serv_sel_failed');
  }
  public set dohServSelFailed(value: number) {
    this._dohServSelFailed = value;
  }
  public resetDohServSelFailed() {
    this._dohServSelFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohServSelFailedInput() {
    return this._dohServSelFailed;
  }

  // doh_snat_failed - computed: false, optional: true, required: false
  private _dohSnatFailed?: number; 
  public get dohSnatFailed() {
    return this.getNumberAttribute('doh_snat_failed');
  }
  public set dohSnatFailed(value: number) {
    this._dohSnatFailed = value;
  }
  public resetDohSnatFailed() {
    this._dohSnatFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohSnatFailedInput() {
    return this._dohSnatFailed;
  }

  // doh_tc_resp - computed: false, optional: true, required: false
  private _dohTcResp?: number; 
  public get dohTcResp() {
    return this.getNumberAttribute('doh_tc_resp');
  }
  public set dohTcResp(value: number) {
    this._dohTcResp = value;
  }
  public resetDohTcResp() {
    this._dohTcResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohTcRespInput() {
    return this._dohTcResp;
  }

  // doh_tcp_dns_req - computed: false, optional: true, required: false
  private _dohTcpDnsReq?: number; 
  public get dohTcpDnsReq() {
    return this.getNumberAttribute('doh_tcp_dns_req');
  }
  public set dohTcpDnsReq(value: number) {
    this._dohTcpDnsReq = value;
  }
  public resetDohTcpDnsReq() {
    this._dohTcpDnsReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohTcpDnsReqInput() {
    return this._dohTcpDnsReq;
  }

  // doh_tcp_dns_resp - computed: false, optional: true, required: false
  private _dohTcpDnsResp?: number; 
  public get dohTcpDnsResp() {
    return this.getNumberAttribute('doh_tcp_dns_resp');
  }
  public set dohTcpDnsResp(value: number) {
    this._dohTcpDnsResp = value;
  }
  public resetDohTcpDnsResp() {
    this._dohTcpDnsResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohTcpDnsRespInput() {
    return this._dohTcpDnsResp;
  }

  // doh_tcp_send_failed - computed: false, optional: true, required: false
  private _dohTcpSendFailed?: number; 
  public get dohTcpSendFailed() {
    return this.getNumberAttribute('doh_tcp_send_failed');
  }
  public set dohTcpSendFailed(value: number) {
    this._dohTcpSendFailed = value;
  }
  public resetDohTcpSendFailed() {
    this._dohTcpSendFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohTcpSendFailedInput() {
    return this._dohTcpSendFailed;
  }

  // doh_udp_dns_req - computed: false, optional: true, required: false
  private _dohUdpDnsReq?: number; 
  public get dohUdpDnsReq() {
    return this.getNumberAttribute('doh_udp_dns_req');
  }
  public set dohUdpDnsReq(value: number) {
    this._dohUdpDnsReq = value;
  }
  public resetDohUdpDnsReq() {
    this._dohUdpDnsReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohUdpDnsReqInput() {
    return this._dohUdpDnsReq;
  }

  // doh_udp_dns_resp - computed: false, optional: true, required: false
  private _dohUdpDnsResp?: number; 
  public get dohUdpDnsResp() {
    return this.getNumberAttribute('doh_udp_dns_resp');
  }
  public set dohUdpDnsResp(value: number) {
    this._dohUdpDnsResp = value;
  }
  public resetDohUdpDnsResp() {
    this._dohUdpDnsResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohUdpDnsRespInput() {
    return this._dohUdpDnsResp;
  }

  // doh_udp_send_failed - computed: false, optional: true, required: false
  private _dohUdpSendFailed?: number; 
  public get dohUdpSendFailed() {
    return this.getNumberAttribute('doh_udp_send_failed');
  }
  public set dohUdpSendFailed(value: number) {
    this._dohUdpSendFailed = value;
  }
  public resetDohUdpSendFailed() {
    this._dohUdpSendFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dohUdpSendFailedInput() {
    return this._dohUdpSendFailed;
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

  // get_and_payload - computed: false, optional: true, required: false
  private _getAndPayload?: number; 
  public get fetchAndPayload() {
    return this.getNumberAttribute('get_and_payload');
  }
  public set fetchAndPayload(value: number) {
    this._getAndPayload = value;
  }
  public resetFetchAndPayload() {
    this._getAndPayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAndPayloadInput() {
    return this._getAndPayload;
  }

  // h2up_content_length_alias - computed: false, optional: true, required: false
  private _h2UpContentLengthAlias?: number; 
  public get h2UpContentLengthAlias() {
    return this.getNumberAttribute('h2up_content_length_alias');
  }
  public set h2UpContentLengthAlias(value: number) {
    this._h2UpContentLengthAlias = value;
  }
  public resetH2UpContentLengthAlias() {
    this._h2UpContentLengthAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h2UpContentLengthAliasInput() {
    return this._h2UpContentLengthAlias;
  }

  // h2up_with_host_and_auth - computed: false, optional: true, required: false
  private _h2UpWithHostAndAuth?: number; 
  public get h2UpWithHostAndAuth() {
    return this.getNumberAttribute('h2up_with_host_and_auth');
  }
  public set h2UpWithHostAndAuth(value: number) {
    this._h2UpWithHostAndAuth = value;
  }
  public resetH2UpWithHostAndAuth() {
    this._h2UpWithHostAndAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h2UpWithHostAndAuthInput() {
    return this._h2UpWithHostAndAuth;
  }

  // h2up_with_transfer_encoding - computed: false, optional: true, required: false
  private _h2UpWithTransferEncoding?: number; 
  public get h2UpWithTransferEncoding() {
    return this.getNumberAttribute('h2up_with_transfer_encoding');
  }
  public set h2UpWithTransferEncoding(value: number) {
    this._h2UpWithTransferEncoding = value;
  }
  public resetH2UpWithTransferEncoding() {
    this._h2UpWithTransferEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h2UpWithTransferEncodingInput() {
    return this._h2UpWithTransferEncoding;
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

  // header_filter_rule_hit - computed: false, optional: true, required: false
  private _headerFilterRuleHit?: number; 
  public get headerFilterRuleHit() {
    return this.getNumberAttribute('header_filter_rule_hit');
  }
  public set headerFilterRuleHit(value: number) {
    this._headerFilterRuleHit = value;
  }
  public resetHeaderFilterRuleHit() {
    this._headerFilterRuleHit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerFilterRuleHitInput() {
    return this._headerFilterRuleHit;
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

  // http1_client_idle_timeout - computed: false, optional: true, required: false
  private _http1ClientIdleTimeout?: number; 
  public get http1ClientIdleTimeout() {
    return this.getNumberAttribute('http1_client_idle_timeout');
  }
  public set http1ClientIdleTimeout(value: number) {
    this._http1ClientIdleTimeout = value;
  }
  public resetHttp1ClientIdleTimeout() {
    this._http1ClientIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http1ClientIdleTimeoutInput() {
    return this._http1ClientIdleTimeout;
  }

  // http2_client_idle_timeout - computed: false, optional: true, required: false
  private _http2ClientIdleTimeout?: number; 
  public get http2ClientIdleTimeout() {
    return this.getNumberAttribute('http2_client_idle_timeout');
  }
  public set http2ClientIdleTimeout(value: number) {
    this._http2ClientIdleTimeout = value;
  }
  public resetHttp2ClientIdleTimeout() {
    this._http2ClientIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2ClientIdleTimeoutInput() {
    return this._http2ClientIdleTimeout;
  }

  // http_allowed_methods - computed: false, optional: true, required: false
  private _httpAllowedMethods?: number; 
  public get httpAllowedMethods() {
    return this.getNumberAttribute('http_allowed_methods');
  }
  public set httpAllowedMethods(value: number) {
    this._httpAllowedMethods = value;
  }
  public resetHttpAllowedMethods() {
    this._httpAllowedMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAllowedMethodsInput() {
    return this._httpAllowedMethods;
  }

  // http_disallowed_methods - computed: false, optional: true, required: false
  private _httpDisallowedMethods?: number; 
  public get httpDisallowedMethods() {
    return this.getNumberAttribute('http_disallowed_methods');
  }
  public set httpDisallowedMethods(value: number) {
    this._httpDisallowedMethods = value;
  }
  public resetHttpDisallowedMethods() {
    this._httpDisallowedMethods = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpDisallowedMethodsInput() {
    return this._httpDisallowedMethods;
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

  // malformed_h2up_header_value - computed: false, optional: true, required: false
  private _malformedH2UpHeaderValue?: number; 
  public get malformedH2UpHeaderValue() {
    return this.getNumberAttribute('malformed_h2up_header_value');
  }
  public set malformedH2UpHeaderValue(value: number) {
    this._malformedH2UpHeaderValue = value;
  }
  public resetMalformedH2UpHeaderValue() {
    this._malformedH2UpHeaderValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedH2UpHeaderValueInput() {
    return this._malformedH2UpHeaderValue;
  }

  // malformed_h2up_scheme_value - computed: false, optional: true, required: false
  private _malformedH2UpSchemeValue?: number; 
  public get malformedH2UpSchemeValue() {
    return this.getNumberAttribute('malformed_h2up_scheme_value');
  }
  public set malformedH2UpSchemeValue(value: number) {
    this._malformedH2UpSchemeValue = value;
  }
  public resetMalformedH2UpSchemeValue() {
    this._malformedH2UpSchemeValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedH2UpSchemeValueInput() {
    return this._malformedH2UpSchemeValue;
  }

  // multiple_content_length - computed: false, optional: true, required: false
  private _multipleContentLength?: number; 
  public get multipleContentLength() {
    return this.getNumberAttribute('multiple_content_length');
  }
  public set multipleContentLength(value: number) {
    this._multipleContentLength = value;
  }
  public resetMultipleContentLength() {
    this._multipleContentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleContentLengthInput() {
    return this._multipleContentLength;
  }

  // multiple_transfer_encoding - computed: false, optional: true, required: false
  private _multipleTransferEncoding?: number; 
  public get multipleTransferEncoding() {
    return this.getNumberAttribute('multiple_transfer_encoding');
  }
  public set multipleTransferEncoding(value: number) {
    this._multipleTransferEncoding = value;
  }
  public resetMultipleTransferEncoding() {
    this._multipleTransferEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multipleTransferEncodingInput() {
    return this._multipleTransferEncoding;
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

  // req_enter_ssli - computed: false, optional: true, required: false
  private _reqEnterSsli?: number; 
  public get reqEnterSsli() {
    return this.getNumberAttribute('req_enter_ssli');
  }
  public set reqEnterSsli(value: number) {
    this._reqEnterSsli = value;
  }
  public resetReqEnterSsli() {
    this._reqEnterSsli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqEnterSsliInput() {
    return this._reqEnterSsli;
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

  // req_http11_new_proxy - computed: false, optional: true, required: false
  private _reqHttp11NewProxy?: number; 
  public get reqHttp11NewProxy() {
    return this.getNumberAttribute('req_http11_new_proxy');
  }
  public set reqHttp11NewProxy(value: number) {
    this._reqHttp11NewProxy = value;
  }
  public resetReqHttp11NewProxy() {
    this._reqHttp11NewProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqHttp11NewProxyInput() {
    return this._reqHttp11NewProxy;
  }

  // req_http2 - computed: false, optional: true, required: false
  private _reqHttp2?: number; 
  public get reqHttp2() {
    return this.getNumberAttribute('req_http2');
  }
  public set reqHttp2(value: number) {
    this._reqHttp2 = value;
  }
  public resetReqHttp2() {
    this._reqHttp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqHttp2Input() {
    return this._reqHttp2;
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

  // req_timeout_close - computed: false, optional: true, required: false
  private _reqTimeoutClose?: number; 
  public get reqTimeoutClose() {
    return this.getNumberAttribute('req_timeout_close');
  }
  public set reqTimeoutClose(value: number) {
    this._reqTimeoutClose = value;
  }
  public resetReqTimeoutClose() {
    this._reqTimeoutClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqTimeoutCloseInput() {
    return this._reqTimeoutClose;
  }

  // req_timeout_retry - computed: false, optional: true, required: false
  private _reqTimeoutRetry?: number; 
  public get reqTimeoutRetry() {
    return this.getNumberAttribute('req_timeout_retry');
  }
  public set reqTimeoutRetry(value: number) {
    this._reqTimeoutRetry = value;
  }
  public resetReqTimeoutRetry() {
    this._reqTimeoutRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqTimeoutRetryInput() {
    return this._reqTimeoutRetry;
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

  // response_504_ax - computed: false, optional: true, required: false
  private _response504Ax?: number; 
  public get response504Ax() {
    return this.getNumberAttribute('response_504_ax');
  }
  public set response504Ax(value: number) {
    this._response504Ax = value;
  }
  public resetResponse504Ax() {
    this._response504Ax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get response504AxInput() {
    return this._response504Ax;
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

  // response_http2 - computed: false, optional: true, required: false
  private _responseHttp2?: number; 
  public get responseHttp2() {
    return this.getNumberAttribute('response_http2');
  }
  public set responseHttp2(value: number) {
    this._responseHttp2 = value;
  }
  public resetResponseHttp2() {
    this._responseHttp2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseHttp2Input() {
    return this._responseHttp2;
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

  // transfer_encoding_and_content_length - computed: false, optional: true, required: false
  private _transferEncodingAndContentLength?: number; 
  public get transferEncodingAndContentLength() {
    return this.getNumberAttribute('transfer_encoding_and_content_length');
  }
  public set transferEncodingAndContentLength(value: number) {
    this._transferEncodingAndContentLength = value;
  }
  public resetTransferEncodingAndContentLength() {
    this._transferEncodingAndContentLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transferEncodingAndContentLengthInput() {
    return this._transferEncodingAndContentLength;
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

  // ws_client_packets - computed: false, optional: true, required: false
  private _wsClientPackets?: number; 
  public get wsClientPackets() {
    return this.getNumberAttribute('ws_client_packets');
  }
  public set wsClientPackets(value: number) {
    this._wsClientPackets = value;
  }
  public resetWsClientPackets() {
    this._wsClientPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wsClientPacketsInput() {
    return this._wsClientPackets;
  }

  // ws_handshake_req - computed: false, optional: true, required: false
  private _wsHandshakeReq?: number; 
  public get wsHandshakeReq() {
    return this.getNumberAttribute('ws_handshake_req');
  }
  public set wsHandshakeReq(value: number) {
    this._wsHandshakeReq = value;
  }
  public resetWsHandshakeReq() {
    this._wsHandshakeReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wsHandshakeReqInput() {
    return this._wsHandshakeReq;
  }

  // ws_handshake_resp - computed: false, optional: true, required: false
  private _wsHandshakeResp?: number; 
  public get wsHandshakeResp() {
    return this.getNumberAttribute('ws_handshake_resp');
  }
  public set wsHandshakeResp(value: number) {
    this._wsHandshakeResp = value;
  }
  public resetWsHandshakeResp() {
    this._wsHandshakeResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wsHandshakeRespInput() {
    return this._wsHandshakeResp;
  }

  // ws_server_packets - computed: false, optional: true, required: false
  private _wsServerPackets?: number; 
  public get wsServerPackets() {
    return this.getNumberAttribute('ws_server_packets');
  }
  public set wsServerPackets(value: number) {
    this._wsServerPackets = value;
  }
  public resetWsServerPackets() {
    this._wsServerPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wsServerPacketsInput() {
    return this._wsServerPackets;
  }
}

export class DataThunderSlbHttpProxyOperOperHttpProxyCpuListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbHttpProxyOperOperHttpProxyCpuListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbHttpProxyOperOperHttpProxyCpuListStructOutputReference {
    return new DataThunderSlbHttpProxyOperOperHttpProxyCpuListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbHttpProxyOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#cpu_count DataThunderSlbHttpProxyOper#cpu_count}
  */
  readonly cpuCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#debug_fields DataThunderSlbHttpProxyOper#debug_fields}
  */
  readonly debugFields?: number;
  /**
  * http_proxy_cpu_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#http_proxy_cpu_list DataThunderSlbHttpProxyOper#http_proxy_cpu_list}
  */
  readonly httpProxyCpuList?: DataThunderSlbHttpProxyOperOperHttpProxyCpuListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbHttpProxyOperOperToTerraform(struct?: DataThunderSlbHttpProxyOperOperOutputReference | DataThunderSlbHttpProxyOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    debug_fields: cdktf.numberToTerraform(struct!.debugFields),
    http_proxy_cpu_list: cdktf.listMapper(dataThunderSlbHttpProxyOperOperHttpProxyCpuListStructToTerraform, true)(struct!.httpProxyCpuList),
  }
}


export function dataThunderSlbHttpProxyOperOperToHclTerraform(struct?: DataThunderSlbHttpProxyOperOperOutputReference | DataThunderSlbHttpProxyOperOper): any {
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
    http_proxy_cpu_list: {
      value: cdktf.listMapperHcl(dataThunderSlbHttpProxyOperOperHttpProxyCpuListStructToHclTerraform, true)(struct!.httpProxyCpuList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbHttpProxyOperOperHttpProxyCpuListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbHttpProxyOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbHttpProxyOperOper | undefined {
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
    if (this._httpProxyCpuList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpProxyCpuList = this._httpProxyCpuList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbHttpProxyOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCount = undefined;
      this._debugFields = undefined;
      this._httpProxyCpuList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCount = value.cpuCount;
      this._debugFields = value.debugFields;
      this._httpProxyCpuList.internalValue = value.httpProxyCpuList;
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

  // http_proxy_cpu_list - computed: false, optional: true, required: false
  private _httpProxyCpuList = new DataThunderSlbHttpProxyOperOperHttpProxyCpuListStructList(this, "http_proxy_cpu_list", false);
  public get httpProxyCpuList() {
    return this._httpProxyCpuList;
  }
  public putHttpProxyCpuList(value: DataThunderSlbHttpProxyOperOperHttpProxyCpuListStruct[] | cdktf.IResolvable) {
    this._httpProxyCpuList.internalValue = value;
  }
  public resetHttpProxyCpuList() {
    this._httpProxyCpuList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyCpuListInput() {
    return this._httpProxyCpuList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper thunder_slb_http_proxy_oper}
*/
export class DataThunderSlbHttpProxyOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_http_proxy_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbHttpProxyOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbHttpProxyOper to import
  * @param importFromId The id of the existing DataThunderSlbHttpProxyOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbHttpProxyOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_http_proxy_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http_proxy_oper thunder_slb_http_proxy_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbHttpProxyOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbHttpProxyOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_http_proxy_oper',
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
  private _oper = new DataThunderSlbHttpProxyOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbHttpProxyOperOper) {
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
      oper: dataThunderSlbHttpProxyOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbHttpProxyOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbHttpProxyOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
