// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbSpdyProxyOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#id DataThunderSlbSpdyProxyOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#oper DataThunderSlbSpdyProxyOper#oper}
  */
  readonly oper?: DataThunderSlbSpdyProxyOperOper;
}
export interface DataThunderSlbSpdyProxyOperOperL4CpuListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#client_fin DataThunderSlbSpdyProxyOper#client_fin}
  */
  readonly clientFin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#client_goaway DataThunderSlbSpdyProxyOper#client_goaway}
  */
  readonly clientGoaway?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#client_rst DataThunderSlbSpdyProxyOper#client_rst}
  */
  readonly clientRst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#client_rst_nostream DataThunderSlbSpdyProxyOper#client_rst_nostream}
  */
  readonly clientRstNostream?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#close_session_already_closed DataThunderSlbSpdyProxyOper#close_session_already_closed}
  */
  readonly closeSessionAlreadyClosed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#close_stream_already_closed DataThunderSlbSpdyProxyOper#close_stream_already_closed}
  */
  readonly closeStreamAlreadyClosed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#close_stream_not_http_proxy DataThunderSlbSpdyProxyOper#close_stream_not_http_proxy}
  */
  readonly closeStreamNotHttpProxy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#close_stream_session_close DataThunderSlbSpdyProxyOper#close_stream_session_close}
  */
  readonly closeStreamSessionClose?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#close_stream_session_not_found DataThunderSlbSpdyProxyOper#close_stream_session_not_found}
  */
  readonly closeStreamSessionNotFound?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#close_stream_stream_not_found DataThunderSlbSpdyProxyOper#close_stream_stream_not_found}
  */
  readonly closeStreamStreamNotFound?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#compress_ctx_alloc_fail DataThunderSlbSpdyProxyOper#compress_ctx_alloc_fail}
  */
  readonly compressCtxAllocFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#control_frame DataThunderSlbSpdyProxyOper#control_frame}
  */
  readonly controlFrame?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#ctx_alloc_fail DataThunderSlbSpdyProxyOper#ctx_alloc_fail}
  */
  readonly ctxAllocFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#curr_http_proxy DataThunderSlbSpdyProxyOper#curr_http_proxy}
  */
  readonly currHttpProxy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#curr_proxy DataThunderSlbSpdyProxyOper#curr_proxy}
  */
  readonly currProxy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#curr_stream DataThunderSlbSpdyProxyOper#curr_stream}
  */
  readonly currStream?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#data_cb_no_tuple DataThunderSlbSpdyProxyOper#data_cb_no_tuple}
  */
  readonly dataCbNoTuple?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#data_frame DataThunderSlbSpdyProxyOper#data_frame}
  */
  readonly dataFrame?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#data_no_stream DataThunderSlbSpdyProxyOper#data_no_stream}
  */
  readonly dataNoStream?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#data_no_stream_goaway_close DataThunderSlbSpdyProxyOper#data_no_stream_goaway_close}
  */
  readonly dataNoStreamGoawayClose?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#data_no_stream_no_goaway DataThunderSlbSpdyProxyOper#data_no_stream_no_goaway}
  */
  readonly dataNoStreamNoGoaway?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#data_on_closed_stream DataThunderSlbSpdyProxyOper#data_on_closed_stream}
  */
  readonly dataOnClosedStream?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#decompress_fail DataThunderSlbSpdyProxyOper#decompress_fail}
  */
  readonly decompressFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#deflate_ctx DataThunderSlbSpdyProxyOper#deflate_ctx}
  */
  readonly deflateCtx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#est_cb_no_tuple DataThunderSlbSpdyProxyOper#est_cb_no_tuple}
  */
  readonly estCbNoTuple?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#fin_close_session DataThunderSlbSpdyProxyOper#fin_close_session}
  */
  readonly finCloseSession?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#fin_stream_closed DataThunderSlbSpdyProxyOper#fin_stream_closed}
  */
  readonly finStreamClosed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#header_after_session_close DataThunderSlbSpdyProxyOper#header_after_session_close}
  */
  readonly headerAfterSessionClose?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#header_compress_fail DataThunderSlbSpdyProxyOper#header_compress_fail}
  */
  readonly headerCompressFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#headers_frame DataThunderSlbSpdyProxyOper#headers_frame}
  */
  readonly headersFrame?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#http_close_stream_closed DataThunderSlbSpdyProxyOper#http_close_stream_closed}
  */
  readonly httpCloseStreamClosed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#http_conn_alloc_fail DataThunderSlbSpdyProxyOper#http_conn_alloc_fail}
  */
  readonly httpConnAllocFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#http_data_session_close DataThunderSlbSpdyProxyOper#http_data_session_close}
  */
  readonly httpDataSessionClose?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#http_data_stream_close DataThunderSlbSpdyProxyOper#http_data_stream_close}
  */
  readonly httpDataStreamClose?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#http_data_stream_not_found DataThunderSlbSpdyProxyOper#http_data_stream_not_found}
  */
  readonly httpDataStreamNotFound?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#http_err_stream_closed DataThunderSlbSpdyProxyOper#http_err_stream_closed}
  */
  readonly httpErrStreamClosed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#http_hdr_stream_close DataThunderSlbSpdyProxyOper#http_hdr_stream_close}
  */
  readonly httpHdrStreamClose?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#inflate_ctx DataThunderSlbSpdyProxyOper#inflate_ctx}
  */
  readonly inflateCtx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#invalid_frame_size DataThunderSlbSpdyProxyOper#invalid_frame_size}
  */
  readonly invalidFrameSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#invalid_version DataThunderSlbSpdyProxyOper#invalid_version}
  */
  readonly invalidVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#invalid_window_size DataThunderSlbSpdyProxyOper#invalid_window_size}
  */
  readonly invalidWindowSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#max_concurrent_stream_limit DataThunderSlbSpdyProxyOper#max_concurrent_stream_limit}
  */
  readonly maxConcurrentStreamLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#name_value_connection DataThunderSlbSpdyProxyOper#name_value_connection}
  */
  readonly nameValueConnection?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#name_value_invalid_http_ver DataThunderSlbSpdyProxyOper#name_value_invalid_http_ver}
  */
  readonly nameValueInvalidHttpVer?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#name_value_keepalive DataThunderSlbSpdyProxyOper#name_value_keepalive}
  */
  readonly nameValueKeepalive?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#name_value_no_must_have DataThunderSlbSpdyProxyOper#name_value_no_must_have}
  */
  readonly nameValueNoMustHave?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#name_value_proxy_conn DataThunderSlbSpdyProxyOper#name_value_proxy_conn}
  */
  readonly nameValueProxyConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#name_value_total_len_ex DataThunderSlbSpdyProxyOper#name_value_total_len_ex}
  */
  readonly nameValueTotalLenEx?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#name_value_trasnfer_encod DataThunderSlbSpdyProxyOper#name_value_trasnfer_encod}
  */
  readonly nameValueTrasnferEncod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#name_value_zero_len DataThunderSlbSpdyProxyOper#name_value_zero_len}
  */
  readonly nameValueZeroLen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#new_stream_session_del DataThunderSlbSpdyProxyOper#new_stream_session_del}
  */
  readonly newStreamSessionDel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#ping_frame DataThunderSlbSpdyProxyOper#ping_frame}
  */
  readonly pingFrame?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#ping_sent DataThunderSlbSpdyProxyOper#ping_sent}
  */
  readonly pingSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#request_header_alloc_fail DataThunderSlbSpdyProxyOper#request_header_alloc_fail}
  */
  readonly requestHeaderAllocFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#server_fin DataThunderSlbSpdyProxyOper#server_fin}
  */
  readonly serverFin?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#server_goaway DataThunderSlbSpdyProxyOper#server_goaway}
  */
  readonly serverGoaway?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#server_rst DataThunderSlbSpdyProxyOper#server_rst}
  */
  readonly serverRst?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#server_rst_close_stream DataThunderSlbSpdyProxyOper#server_rst_close_stream}
  */
  readonly serverRstCloseStream?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#session_close DataThunderSlbSpdyProxyOper#session_close}
  */
  readonly sessionClose?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#session_err DataThunderSlbSpdyProxyOper#session_err}
  */
  readonly sessionErr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#session_needs_requeue DataThunderSlbSpdyProxyOper#session_needs_requeue}
  */
  readonly sessionNeedsRequeue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#settings_frame DataThunderSlbSpdyProxyOper#settings_frame}
  */
  readonly settingsFrame?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#stream_alloc_fail DataThunderSlbSpdyProxyOper#stream_alloc_fail}
  */
  readonly streamAllocFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#stream_close DataThunderSlbSpdyProxyOper#stream_close}
  */
  readonly streamClose?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#stream_err DataThunderSlbSpdyProxyOper#stream_err}
  */
  readonly streamErr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#stream_found DataThunderSlbSpdyProxyOper#stream_found}
  */
  readonly streamFound?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#stream_lt_prev DataThunderSlbSpdyProxyOper#stream_lt_prev}
  */
  readonly streamLtPrev?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#stream_not_found DataThunderSlbSpdyProxyOper#stream_not_found}
  */
  readonly streamNotFound?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#syn_after_goaway DataThunderSlbSpdyProxyOper#syn_after_goaway}
  */
  readonly synAfterGoaway?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#syn_frame DataThunderSlbSpdyProxyOper#syn_frame}
  */
  readonly synFrame?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#syn_reply_alr_rcvd DataThunderSlbSpdyProxyOper#syn_reply_alr_rcvd}
  */
  readonly synReplyAlrRcvd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#syn_reply_frame DataThunderSlbSpdyProxyOper#syn_reply_frame}
  */
  readonly synReplyFrame?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#syn_stream_exist_or_even DataThunderSlbSpdyProxyOper#syn_stream_exist_or_even}
  */
  readonly synStreamExistOrEven?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#syn_unidir DataThunderSlbSpdyProxyOper#syn_unidir}
  */
  readonly synUnidir?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#tcp_err DataThunderSlbSpdyProxyOper#tcp_err}
  */
  readonly tcpErr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#total_http_proxy DataThunderSlbSpdyProxyOper#total_http_proxy}
  */
  readonly totalHttpProxy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#total_proxy DataThunderSlbSpdyProxyOper#total_proxy}
  */
  readonly totalProxy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#total_stream DataThunderSlbSpdyProxyOper#total_stream}
  */
  readonly totalStream?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#total_stream_succ DataThunderSlbSpdyProxyOper#total_stream_succ}
  */
  readonly totalStreamSucc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#total_v2_proxy DataThunderSlbSpdyProxyOper#total_v2_proxy}
  */
  readonly totalV2Proxy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#total_v3_proxy DataThunderSlbSpdyProxyOper#total_v3_proxy}
  */
  readonly totalV3Proxy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#unknown_control_frame DataThunderSlbSpdyProxyOper#unknown_control_frame}
  */
  readonly unknownControlFrame?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#window_frame DataThunderSlbSpdyProxyOper#window_frame}
  */
  readonly windowFrame?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#window_no_stream DataThunderSlbSpdyProxyOper#window_no_stream}
  */
  readonly windowNoStream?: number;
}

export function dataThunderSlbSpdyProxyOperOperL4CpuListStructToTerraform(struct?: DataThunderSlbSpdyProxyOperOperL4CpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_fin: cdktf.numberToTerraform(struct!.clientFin),
    client_goaway: cdktf.numberToTerraform(struct!.clientGoaway),
    client_rst: cdktf.numberToTerraform(struct!.clientRst),
    client_rst_nostream: cdktf.numberToTerraform(struct!.clientRstNostream),
    close_session_already_closed: cdktf.numberToTerraform(struct!.closeSessionAlreadyClosed),
    close_stream_already_closed: cdktf.numberToTerraform(struct!.closeStreamAlreadyClosed),
    close_stream_not_http_proxy: cdktf.numberToTerraform(struct!.closeStreamNotHttpProxy),
    close_stream_session_close: cdktf.numberToTerraform(struct!.closeStreamSessionClose),
    close_stream_session_not_found: cdktf.numberToTerraform(struct!.closeStreamSessionNotFound),
    close_stream_stream_not_found: cdktf.numberToTerraform(struct!.closeStreamStreamNotFound),
    compress_ctx_alloc_fail: cdktf.numberToTerraform(struct!.compressCtxAllocFail),
    control_frame: cdktf.numberToTerraform(struct!.controlFrame),
    ctx_alloc_fail: cdktf.numberToTerraform(struct!.ctxAllocFail),
    curr_http_proxy: cdktf.numberToTerraform(struct!.currHttpProxy),
    curr_proxy: cdktf.numberToTerraform(struct!.currProxy),
    curr_stream: cdktf.numberToTerraform(struct!.currStream),
    data_cb_no_tuple: cdktf.numberToTerraform(struct!.dataCbNoTuple),
    data_frame: cdktf.numberToTerraform(struct!.dataFrame),
    data_no_stream: cdktf.numberToTerraform(struct!.dataNoStream),
    data_no_stream_goaway_close: cdktf.numberToTerraform(struct!.dataNoStreamGoawayClose),
    data_no_stream_no_goaway: cdktf.numberToTerraform(struct!.dataNoStreamNoGoaway),
    data_on_closed_stream: cdktf.numberToTerraform(struct!.dataOnClosedStream),
    decompress_fail: cdktf.numberToTerraform(struct!.decompressFail),
    deflate_ctx: cdktf.numberToTerraform(struct!.deflateCtx),
    est_cb_no_tuple: cdktf.numberToTerraform(struct!.estCbNoTuple),
    fin_close_session: cdktf.numberToTerraform(struct!.finCloseSession),
    fin_stream_closed: cdktf.numberToTerraform(struct!.finStreamClosed),
    header_after_session_close: cdktf.numberToTerraform(struct!.headerAfterSessionClose),
    header_compress_fail: cdktf.numberToTerraform(struct!.headerCompressFail),
    headers_frame: cdktf.numberToTerraform(struct!.headersFrame),
    http_close_stream_closed: cdktf.numberToTerraform(struct!.httpCloseStreamClosed),
    http_conn_alloc_fail: cdktf.numberToTerraform(struct!.httpConnAllocFail),
    http_data_session_close: cdktf.numberToTerraform(struct!.httpDataSessionClose),
    http_data_stream_close: cdktf.numberToTerraform(struct!.httpDataStreamClose),
    http_data_stream_not_found: cdktf.numberToTerraform(struct!.httpDataStreamNotFound),
    http_err_stream_closed: cdktf.numberToTerraform(struct!.httpErrStreamClosed),
    http_hdr_stream_close: cdktf.numberToTerraform(struct!.httpHdrStreamClose),
    inflate_ctx: cdktf.numberToTerraform(struct!.inflateCtx),
    invalid_frame_size: cdktf.numberToTerraform(struct!.invalidFrameSize),
    invalid_version: cdktf.numberToTerraform(struct!.invalidVersion),
    invalid_window_size: cdktf.numberToTerraform(struct!.invalidWindowSize),
    max_concurrent_stream_limit: cdktf.numberToTerraform(struct!.maxConcurrentStreamLimit),
    name_value_connection: cdktf.numberToTerraform(struct!.nameValueConnection),
    name_value_invalid_http_ver: cdktf.numberToTerraform(struct!.nameValueInvalidHttpVer),
    name_value_keepalive: cdktf.numberToTerraform(struct!.nameValueKeepalive),
    name_value_no_must_have: cdktf.numberToTerraform(struct!.nameValueNoMustHave),
    name_value_proxy_conn: cdktf.numberToTerraform(struct!.nameValueProxyConn),
    name_value_total_len_ex: cdktf.numberToTerraform(struct!.nameValueTotalLenEx),
    name_value_trasnfer_encod: cdktf.numberToTerraform(struct!.nameValueTrasnferEncod),
    name_value_zero_len: cdktf.numberToTerraform(struct!.nameValueZeroLen),
    new_stream_session_del: cdktf.numberToTerraform(struct!.newStreamSessionDel),
    ping_frame: cdktf.numberToTerraform(struct!.pingFrame),
    ping_sent: cdktf.numberToTerraform(struct!.pingSent),
    request_header_alloc_fail: cdktf.numberToTerraform(struct!.requestHeaderAllocFail),
    server_fin: cdktf.numberToTerraform(struct!.serverFin),
    server_goaway: cdktf.numberToTerraform(struct!.serverGoaway),
    server_rst: cdktf.numberToTerraform(struct!.serverRst),
    server_rst_close_stream: cdktf.numberToTerraform(struct!.serverRstCloseStream),
    session_close: cdktf.numberToTerraform(struct!.sessionClose),
    session_err: cdktf.numberToTerraform(struct!.sessionErr),
    session_needs_requeue: cdktf.numberToTerraform(struct!.sessionNeedsRequeue),
    settings_frame: cdktf.numberToTerraform(struct!.settingsFrame),
    stream_alloc_fail: cdktf.numberToTerraform(struct!.streamAllocFail),
    stream_close: cdktf.numberToTerraform(struct!.streamClose),
    stream_err: cdktf.numberToTerraform(struct!.streamErr),
    stream_found: cdktf.numberToTerraform(struct!.streamFound),
    stream_lt_prev: cdktf.numberToTerraform(struct!.streamLtPrev),
    stream_not_found: cdktf.numberToTerraform(struct!.streamNotFound),
    syn_after_goaway: cdktf.numberToTerraform(struct!.synAfterGoaway),
    syn_frame: cdktf.numberToTerraform(struct!.synFrame),
    syn_reply_alr_rcvd: cdktf.numberToTerraform(struct!.synReplyAlrRcvd),
    syn_reply_frame: cdktf.numberToTerraform(struct!.synReplyFrame),
    syn_stream_exist_or_even: cdktf.numberToTerraform(struct!.synStreamExistOrEven),
    syn_unidir: cdktf.numberToTerraform(struct!.synUnidir),
    tcp_err: cdktf.numberToTerraform(struct!.tcpErr),
    total_http_proxy: cdktf.numberToTerraform(struct!.totalHttpProxy),
    total_proxy: cdktf.numberToTerraform(struct!.totalProxy),
    total_stream: cdktf.numberToTerraform(struct!.totalStream),
    total_stream_succ: cdktf.numberToTerraform(struct!.totalStreamSucc),
    total_v2_proxy: cdktf.numberToTerraform(struct!.totalV2Proxy),
    total_v3_proxy: cdktf.numberToTerraform(struct!.totalV3Proxy),
    unknown_control_frame: cdktf.numberToTerraform(struct!.unknownControlFrame),
    window_frame: cdktf.numberToTerraform(struct!.windowFrame),
    window_no_stream: cdktf.numberToTerraform(struct!.windowNoStream),
  }
}


export function dataThunderSlbSpdyProxyOperOperL4CpuListStructToHclTerraform(struct?: DataThunderSlbSpdyProxyOperOperL4CpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_fin: {
      value: cdktf.numberToHclTerraform(struct!.clientFin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_goaway: {
      value: cdktf.numberToHclTerraform(struct!.clientGoaway),
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
    client_rst_nostream: {
      value: cdktf.numberToHclTerraform(struct!.clientRstNostream),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    close_session_already_closed: {
      value: cdktf.numberToHclTerraform(struct!.closeSessionAlreadyClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    close_stream_already_closed: {
      value: cdktf.numberToHclTerraform(struct!.closeStreamAlreadyClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    close_stream_not_http_proxy: {
      value: cdktf.numberToHclTerraform(struct!.closeStreamNotHttpProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    close_stream_session_close: {
      value: cdktf.numberToHclTerraform(struct!.closeStreamSessionClose),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    close_stream_session_not_found: {
      value: cdktf.numberToHclTerraform(struct!.closeStreamSessionNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    close_stream_stream_not_found: {
      value: cdktf.numberToHclTerraform(struct!.closeStreamStreamNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compress_ctx_alloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.compressCtxAllocFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    control_frame: {
      value: cdktf.numberToHclTerraform(struct!.controlFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ctx_alloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.ctxAllocFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    curr_http_proxy: {
      value: cdktf.numberToHclTerraform(struct!.currHttpProxy),
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
    curr_stream: {
      value: cdktf.numberToHclTerraform(struct!.currStream),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_cb_no_tuple: {
      value: cdktf.numberToHclTerraform(struct!.dataCbNoTuple),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_frame: {
      value: cdktf.numberToHclTerraform(struct!.dataFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_no_stream: {
      value: cdktf.numberToHclTerraform(struct!.dataNoStream),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_no_stream_goaway_close: {
      value: cdktf.numberToHclTerraform(struct!.dataNoStreamGoawayClose),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_no_stream_no_goaway: {
      value: cdktf.numberToHclTerraform(struct!.dataNoStreamNoGoaway),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_on_closed_stream: {
      value: cdktf.numberToHclTerraform(struct!.dataOnClosedStream),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    decompress_fail: {
      value: cdktf.numberToHclTerraform(struct!.decompressFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deflate_ctx: {
      value: cdktf.numberToHclTerraform(struct!.deflateCtx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    est_cb_no_tuple: {
      value: cdktf.numberToHclTerraform(struct!.estCbNoTuple),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fin_close_session: {
      value: cdktf.numberToHclTerraform(struct!.finCloseSession),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fin_stream_closed: {
      value: cdktf.numberToHclTerraform(struct!.finStreamClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_after_session_close: {
      value: cdktf.numberToHclTerraform(struct!.headerAfterSessionClose),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_compress_fail: {
      value: cdktf.numberToHclTerraform(struct!.headerCompressFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers_frame: {
      value: cdktf.numberToHclTerraform(struct!.headersFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_close_stream_closed: {
      value: cdktf.numberToHclTerraform(struct!.httpCloseStreamClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_conn_alloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.httpConnAllocFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_data_session_close: {
      value: cdktf.numberToHclTerraform(struct!.httpDataSessionClose),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_data_stream_close: {
      value: cdktf.numberToHclTerraform(struct!.httpDataStreamClose),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_data_stream_not_found: {
      value: cdktf.numberToHclTerraform(struct!.httpDataStreamNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_err_stream_closed: {
      value: cdktf.numberToHclTerraform(struct!.httpErrStreamClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_hdr_stream_close: {
      value: cdktf.numberToHclTerraform(struct!.httpHdrStreamClose),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inflate_ctx: {
      value: cdktf.numberToHclTerraform(struct!.inflateCtx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_frame_size: {
      value: cdktf.numberToHclTerraform(struct!.invalidFrameSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_version: {
      value: cdktf.numberToHclTerraform(struct!.invalidVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_window_size: {
      value: cdktf.numberToHclTerraform(struct!.invalidWindowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_concurrent_stream_limit: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentStreamLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name_value_connection: {
      value: cdktf.numberToHclTerraform(struct!.nameValueConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name_value_invalid_http_ver: {
      value: cdktf.numberToHclTerraform(struct!.nameValueInvalidHttpVer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name_value_keepalive: {
      value: cdktf.numberToHclTerraform(struct!.nameValueKeepalive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name_value_no_must_have: {
      value: cdktf.numberToHclTerraform(struct!.nameValueNoMustHave),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name_value_proxy_conn: {
      value: cdktf.numberToHclTerraform(struct!.nameValueProxyConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name_value_total_len_ex: {
      value: cdktf.numberToHclTerraform(struct!.nameValueTotalLenEx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name_value_trasnfer_encod: {
      value: cdktf.numberToHclTerraform(struct!.nameValueTrasnferEncod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name_value_zero_len: {
      value: cdktf.numberToHclTerraform(struct!.nameValueZeroLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_stream_session_del: {
      value: cdktf.numberToHclTerraform(struct!.newStreamSessionDel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ping_frame: {
      value: cdktf.numberToHclTerraform(struct!.pingFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ping_sent: {
      value: cdktf.numberToHclTerraform(struct!.pingSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_header_alloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.requestHeaderAllocFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_fin: {
      value: cdktf.numberToHclTerraform(struct!.serverFin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_goaway: {
      value: cdktf.numberToHclTerraform(struct!.serverGoaway),
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
    server_rst_close_stream: {
      value: cdktf.numberToHclTerraform(struct!.serverRstCloseStream),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_close: {
      value: cdktf.numberToHclTerraform(struct!.sessionClose),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_err: {
      value: cdktf.numberToHclTerraform(struct!.sessionErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_needs_requeue: {
      value: cdktf.numberToHclTerraform(struct!.sessionNeedsRequeue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    settings_frame: {
      value: cdktf.numberToHclTerraform(struct!.settingsFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_alloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.streamAllocFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_close: {
      value: cdktf.numberToHclTerraform(struct!.streamClose),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_err: {
      value: cdktf.numberToHclTerraform(struct!.streamErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_found: {
      value: cdktf.numberToHclTerraform(struct!.streamFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_lt_prev: {
      value: cdktf.numberToHclTerraform(struct!.streamLtPrev),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_not_found: {
      value: cdktf.numberToHclTerraform(struct!.streamNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_after_goaway: {
      value: cdktf.numberToHclTerraform(struct!.synAfterGoaway),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_frame: {
      value: cdktf.numberToHclTerraform(struct!.synFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_reply_alr_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.synReplyAlrRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_reply_frame: {
      value: cdktf.numberToHclTerraform(struct!.synReplyFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_stream_exist_or_even: {
      value: cdktf.numberToHclTerraform(struct!.synStreamExistOrEven),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_unidir: {
      value: cdktf.numberToHclTerraform(struct!.synUnidir),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_err: {
      value: cdktf.numberToHclTerraform(struct!.tcpErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_http_proxy: {
      value: cdktf.numberToHclTerraform(struct!.totalHttpProxy),
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
    total_stream: {
      value: cdktf.numberToHclTerraform(struct!.totalStream),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_stream_succ: {
      value: cdktf.numberToHclTerraform(struct!.totalStreamSucc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_v2_proxy: {
      value: cdktf.numberToHclTerraform(struct!.totalV2Proxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_v3_proxy: {
      value: cdktf.numberToHclTerraform(struct!.totalV3Proxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_control_frame: {
      value: cdktf.numberToHclTerraform(struct!.unknownControlFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_frame: {
      value: cdktf.numberToHclTerraform(struct!.windowFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_no_stream: {
      value: cdktf.numberToHclTerraform(struct!.windowNoStream),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSpdyProxyOperOperL4CpuListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbSpdyProxyOperOperL4CpuListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientFin = this._clientFin;
    }
    if (this._clientGoaway !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientGoaway = this._clientGoaway;
    }
    if (this._clientRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRst = this._clientRst;
    }
    if (this._clientRstNostream !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRstNostream = this._clientRstNostream;
    }
    if (this._closeSessionAlreadyClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.closeSessionAlreadyClosed = this._closeSessionAlreadyClosed;
    }
    if (this._closeStreamAlreadyClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.closeStreamAlreadyClosed = this._closeStreamAlreadyClosed;
    }
    if (this._closeStreamNotHttpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.closeStreamNotHttpProxy = this._closeStreamNotHttpProxy;
    }
    if (this._closeStreamSessionClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.closeStreamSessionClose = this._closeStreamSessionClose;
    }
    if (this._closeStreamSessionNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.closeStreamSessionNotFound = this._closeStreamSessionNotFound;
    }
    if (this._closeStreamStreamNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.closeStreamStreamNotFound = this._closeStreamStreamNotFound;
    }
    if (this._compressCtxAllocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressCtxAllocFail = this._compressCtxAllocFail;
    }
    if (this._controlFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlFrame = this._controlFrame;
    }
    if (this._ctxAllocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.ctxAllocFail = this._ctxAllocFail;
    }
    if (this._currHttpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.currHttpProxy = this._currHttpProxy;
    }
    if (this._currProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.currProxy = this._currProxy;
    }
    if (this._currStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.currStream = this._currStream;
    }
    if (this._dataCbNoTuple !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCbNoTuple = this._dataCbNoTuple;
    }
    if (this._dataFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFrame = this._dataFrame;
    }
    if (this._dataNoStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataNoStream = this._dataNoStream;
    }
    if (this._dataNoStreamGoawayClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataNoStreamGoawayClose = this._dataNoStreamGoawayClose;
    }
    if (this._dataNoStreamNoGoaway !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataNoStreamNoGoaway = this._dataNoStreamNoGoaway;
    }
    if (this._dataOnClosedStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataOnClosedStream = this._dataOnClosedStream;
    }
    if (this._decompressFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.decompressFail = this._decompressFail;
    }
    if (this._deflateCtx !== undefined) {
      hasAnyValues = true;
      internalValueResult.deflateCtx = this._deflateCtx;
    }
    if (this._estCbNoTuple !== undefined) {
      hasAnyValues = true;
      internalValueResult.estCbNoTuple = this._estCbNoTuple;
    }
    if (this._finCloseSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.finCloseSession = this._finCloseSession;
    }
    if (this._finStreamClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.finStreamClosed = this._finStreamClosed;
    }
    if (this._headerAfterSessionClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerAfterSessionClose = this._headerAfterSessionClose;
    }
    if (this._headerCompressFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerCompressFail = this._headerCompressFail;
    }
    if (this._headersFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersFrame = this._headersFrame;
    }
    if (this._httpCloseStreamClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpCloseStreamClosed = this._httpCloseStreamClosed;
    }
    if (this._httpConnAllocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpConnAllocFail = this._httpConnAllocFail;
    }
    if (this._httpDataSessionClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpDataSessionClose = this._httpDataSessionClose;
    }
    if (this._httpDataStreamClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpDataStreamClose = this._httpDataStreamClose;
    }
    if (this._httpDataStreamNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpDataStreamNotFound = this._httpDataStreamNotFound;
    }
    if (this._httpErrStreamClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpErrStreamClosed = this._httpErrStreamClosed;
    }
    if (this._httpHdrStreamClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHdrStreamClose = this._httpHdrStreamClose;
    }
    if (this._inflateCtx !== undefined) {
      hasAnyValues = true;
      internalValueResult.inflateCtx = this._inflateCtx;
    }
    if (this._invalidFrameSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidFrameSize = this._invalidFrameSize;
    }
    if (this._invalidVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidVersion = this._invalidVersion;
    }
    if (this._invalidWindowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidWindowSize = this._invalidWindowSize;
    }
    if (this._maxConcurrentStreamLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentStreamLimit = this._maxConcurrentStreamLimit;
    }
    if (this._nameValueConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameValueConnection = this._nameValueConnection;
    }
    if (this._nameValueInvalidHttpVer !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameValueInvalidHttpVer = this._nameValueInvalidHttpVer;
    }
    if (this._nameValueKeepalive !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameValueKeepalive = this._nameValueKeepalive;
    }
    if (this._nameValueNoMustHave !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameValueNoMustHave = this._nameValueNoMustHave;
    }
    if (this._nameValueProxyConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameValueProxyConn = this._nameValueProxyConn;
    }
    if (this._nameValueTotalLenEx !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameValueTotalLenEx = this._nameValueTotalLenEx;
    }
    if (this._nameValueTrasnferEncod !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameValueTrasnferEncod = this._nameValueTrasnferEncod;
    }
    if (this._nameValueZeroLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameValueZeroLen = this._nameValueZeroLen;
    }
    if (this._newStreamSessionDel !== undefined) {
      hasAnyValues = true;
      internalValueResult.newStreamSessionDel = this._newStreamSessionDel;
    }
    if (this._pingFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingFrame = this._pingFrame;
    }
    if (this._pingSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingSent = this._pingSent;
    }
    if (this._requestHeaderAllocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaderAllocFail = this._requestHeaderAllocFail;
    }
    if (this._serverFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverFin = this._serverFin;
    }
    if (this._serverGoaway !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverGoaway = this._serverGoaway;
    }
    if (this._serverRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRst = this._serverRst;
    }
    if (this._serverRstCloseStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRstCloseStream = this._serverRstCloseStream;
    }
    if (this._sessionClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionClose = this._sessionClose;
    }
    if (this._sessionErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionErr = this._sessionErr;
    }
    if (this._sessionNeedsRequeue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionNeedsRequeue = this._sessionNeedsRequeue;
    }
    if (this._settingsFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.settingsFrame = this._settingsFrame;
    }
    if (this._streamAllocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamAllocFail = this._streamAllocFail;
    }
    if (this._streamClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamClose = this._streamClose;
    }
    if (this._streamErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamErr = this._streamErr;
    }
    if (this._streamFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamFound = this._streamFound;
    }
    if (this._streamLtPrev !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamLtPrev = this._streamLtPrev;
    }
    if (this._streamNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamNotFound = this._streamNotFound;
    }
    if (this._synAfterGoaway !== undefined) {
      hasAnyValues = true;
      internalValueResult.synAfterGoaway = this._synAfterGoaway;
    }
    if (this._synFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.synFrame = this._synFrame;
    }
    if (this._synReplyAlrRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.synReplyAlrRcvd = this._synReplyAlrRcvd;
    }
    if (this._synReplyFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.synReplyFrame = this._synReplyFrame;
    }
    if (this._synStreamExistOrEven !== undefined) {
      hasAnyValues = true;
      internalValueResult.synStreamExistOrEven = this._synStreamExistOrEven;
    }
    if (this._synUnidir !== undefined) {
      hasAnyValues = true;
      internalValueResult.synUnidir = this._synUnidir;
    }
    if (this._tcpErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpErr = this._tcpErr;
    }
    if (this._totalHttpProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalHttpProxy = this._totalHttpProxy;
    }
    if (this._totalProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalProxy = this._totalProxy;
    }
    if (this._totalStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalStream = this._totalStream;
    }
    if (this._totalStreamSucc !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalStreamSucc = this._totalStreamSucc;
    }
    if (this._totalV2Proxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalV2Proxy = this._totalV2Proxy;
    }
    if (this._totalV3Proxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalV3Proxy = this._totalV3Proxy;
    }
    if (this._unknownControlFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownControlFrame = this._unknownControlFrame;
    }
    if (this._windowFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowFrame = this._windowFrame;
    }
    if (this._windowNoStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowNoStream = this._windowNoStream;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSpdyProxyOperOperL4CpuListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientFin = undefined;
      this._clientGoaway = undefined;
      this._clientRst = undefined;
      this._clientRstNostream = undefined;
      this._closeSessionAlreadyClosed = undefined;
      this._closeStreamAlreadyClosed = undefined;
      this._closeStreamNotHttpProxy = undefined;
      this._closeStreamSessionClose = undefined;
      this._closeStreamSessionNotFound = undefined;
      this._closeStreamStreamNotFound = undefined;
      this._compressCtxAllocFail = undefined;
      this._controlFrame = undefined;
      this._ctxAllocFail = undefined;
      this._currHttpProxy = undefined;
      this._currProxy = undefined;
      this._currStream = undefined;
      this._dataCbNoTuple = undefined;
      this._dataFrame = undefined;
      this._dataNoStream = undefined;
      this._dataNoStreamGoawayClose = undefined;
      this._dataNoStreamNoGoaway = undefined;
      this._dataOnClosedStream = undefined;
      this._decompressFail = undefined;
      this._deflateCtx = undefined;
      this._estCbNoTuple = undefined;
      this._finCloseSession = undefined;
      this._finStreamClosed = undefined;
      this._headerAfterSessionClose = undefined;
      this._headerCompressFail = undefined;
      this._headersFrame = undefined;
      this._httpCloseStreamClosed = undefined;
      this._httpConnAllocFail = undefined;
      this._httpDataSessionClose = undefined;
      this._httpDataStreamClose = undefined;
      this._httpDataStreamNotFound = undefined;
      this._httpErrStreamClosed = undefined;
      this._httpHdrStreamClose = undefined;
      this._inflateCtx = undefined;
      this._invalidFrameSize = undefined;
      this._invalidVersion = undefined;
      this._invalidWindowSize = undefined;
      this._maxConcurrentStreamLimit = undefined;
      this._nameValueConnection = undefined;
      this._nameValueInvalidHttpVer = undefined;
      this._nameValueKeepalive = undefined;
      this._nameValueNoMustHave = undefined;
      this._nameValueProxyConn = undefined;
      this._nameValueTotalLenEx = undefined;
      this._nameValueTrasnferEncod = undefined;
      this._nameValueZeroLen = undefined;
      this._newStreamSessionDel = undefined;
      this._pingFrame = undefined;
      this._pingSent = undefined;
      this._requestHeaderAllocFail = undefined;
      this._serverFin = undefined;
      this._serverGoaway = undefined;
      this._serverRst = undefined;
      this._serverRstCloseStream = undefined;
      this._sessionClose = undefined;
      this._sessionErr = undefined;
      this._sessionNeedsRequeue = undefined;
      this._settingsFrame = undefined;
      this._streamAllocFail = undefined;
      this._streamClose = undefined;
      this._streamErr = undefined;
      this._streamFound = undefined;
      this._streamLtPrev = undefined;
      this._streamNotFound = undefined;
      this._synAfterGoaway = undefined;
      this._synFrame = undefined;
      this._synReplyAlrRcvd = undefined;
      this._synReplyFrame = undefined;
      this._synStreamExistOrEven = undefined;
      this._synUnidir = undefined;
      this._tcpErr = undefined;
      this._totalHttpProxy = undefined;
      this._totalProxy = undefined;
      this._totalStream = undefined;
      this._totalStreamSucc = undefined;
      this._totalV2Proxy = undefined;
      this._totalV3Proxy = undefined;
      this._unknownControlFrame = undefined;
      this._windowFrame = undefined;
      this._windowNoStream = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientFin = value.clientFin;
      this._clientGoaway = value.clientGoaway;
      this._clientRst = value.clientRst;
      this._clientRstNostream = value.clientRstNostream;
      this._closeSessionAlreadyClosed = value.closeSessionAlreadyClosed;
      this._closeStreamAlreadyClosed = value.closeStreamAlreadyClosed;
      this._closeStreamNotHttpProxy = value.closeStreamNotHttpProxy;
      this._closeStreamSessionClose = value.closeStreamSessionClose;
      this._closeStreamSessionNotFound = value.closeStreamSessionNotFound;
      this._closeStreamStreamNotFound = value.closeStreamStreamNotFound;
      this._compressCtxAllocFail = value.compressCtxAllocFail;
      this._controlFrame = value.controlFrame;
      this._ctxAllocFail = value.ctxAllocFail;
      this._currHttpProxy = value.currHttpProxy;
      this._currProxy = value.currProxy;
      this._currStream = value.currStream;
      this._dataCbNoTuple = value.dataCbNoTuple;
      this._dataFrame = value.dataFrame;
      this._dataNoStream = value.dataNoStream;
      this._dataNoStreamGoawayClose = value.dataNoStreamGoawayClose;
      this._dataNoStreamNoGoaway = value.dataNoStreamNoGoaway;
      this._dataOnClosedStream = value.dataOnClosedStream;
      this._decompressFail = value.decompressFail;
      this._deflateCtx = value.deflateCtx;
      this._estCbNoTuple = value.estCbNoTuple;
      this._finCloseSession = value.finCloseSession;
      this._finStreamClosed = value.finStreamClosed;
      this._headerAfterSessionClose = value.headerAfterSessionClose;
      this._headerCompressFail = value.headerCompressFail;
      this._headersFrame = value.headersFrame;
      this._httpCloseStreamClosed = value.httpCloseStreamClosed;
      this._httpConnAllocFail = value.httpConnAllocFail;
      this._httpDataSessionClose = value.httpDataSessionClose;
      this._httpDataStreamClose = value.httpDataStreamClose;
      this._httpDataStreamNotFound = value.httpDataStreamNotFound;
      this._httpErrStreamClosed = value.httpErrStreamClosed;
      this._httpHdrStreamClose = value.httpHdrStreamClose;
      this._inflateCtx = value.inflateCtx;
      this._invalidFrameSize = value.invalidFrameSize;
      this._invalidVersion = value.invalidVersion;
      this._invalidWindowSize = value.invalidWindowSize;
      this._maxConcurrentStreamLimit = value.maxConcurrentStreamLimit;
      this._nameValueConnection = value.nameValueConnection;
      this._nameValueInvalidHttpVer = value.nameValueInvalidHttpVer;
      this._nameValueKeepalive = value.nameValueKeepalive;
      this._nameValueNoMustHave = value.nameValueNoMustHave;
      this._nameValueProxyConn = value.nameValueProxyConn;
      this._nameValueTotalLenEx = value.nameValueTotalLenEx;
      this._nameValueTrasnferEncod = value.nameValueTrasnferEncod;
      this._nameValueZeroLen = value.nameValueZeroLen;
      this._newStreamSessionDel = value.newStreamSessionDel;
      this._pingFrame = value.pingFrame;
      this._pingSent = value.pingSent;
      this._requestHeaderAllocFail = value.requestHeaderAllocFail;
      this._serverFin = value.serverFin;
      this._serverGoaway = value.serverGoaway;
      this._serverRst = value.serverRst;
      this._serverRstCloseStream = value.serverRstCloseStream;
      this._sessionClose = value.sessionClose;
      this._sessionErr = value.sessionErr;
      this._sessionNeedsRequeue = value.sessionNeedsRequeue;
      this._settingsFrame = value.settingsFrame;
      this._streamAllocFail = value.streamAllocFail;
      this._streamClose = value.streamClose;
      this._streamErr = value.streamErr;
      this._streamFound = value.streamFound;
      this._streamLtPrev = value.streamLtPrev;
      this._streamNotFound = value.streamNotFound;
      this._synAfterGoaway = value.synAfterGoaway;
      this._synFrame = value.synFrame;
      this._synReplyAlrRcvd = value.synReplyAlrRcvd;
      this._synReplyFrame = value.synReplyFrame;
      this._synStreamExistOrEven = value.synStreamExistOrEven;
      this._synUnidir = value.synUnidir;
      this._tcpErr = value.tcpErr;
      this._totalHttpProxy = value.totalHttpProxy;
      this._totalProxy = value.totalProxy;
      this._totalStream = value.totalStream;
      this._totalStreamSucc = value.totalStreamSucc;
      this._totalV2Proxy = value.totalV2Proxy;
      this._totalV3Proxy = value.totalV3Proxy;
      this._unknownControlFrame = value.unknownControlFrame;
      this._windowFrame = value.windowFrame;
      this._windowNoStream = value.windowNoStream;
    }
  }

  // client_fin - computed: false, optional: true, required: false
  private _clientFin?: number; 
  public get clientFin() {
    return this.getNumberAttribute('client_fin');
  }
  public set clientFin(value: number) {
    this._clientFin = value;
  }
  public resetClientFin() {
    this._clientFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientFinInput() {
    return this._clientFin;
  }

  // client_goaway - computed: false, optional: true, required: false
  private _clientGoaway?: number; 
  public get clientGoaway() {
    return this.getNumberAttribute('client_goaway');
  }
  public set clientGoaway(value: number) {
    this._clientGoaway = value;
  }
  public resetClientGoaway() {
    this._clientGoaway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientGoawayInput() {
    return this._clientGoaway;
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

  // client_rst_nostream - computed: false, optional: true, required: false
  private _clientRstNostream?: number; 
  public get clientRstNostream() {
    return this.getNumberAttribute('client_rst_nostream');
  }
  public set clientRstNostream(value: number) {
    this._clientRstNostream = value;
  }
  public resetClientRstNostream() {
    this._clientRstNostream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRstNostreamInput() {
    return this._clientRstNostream;
  }

  // close_session_already_closed - computed: false, optional: true, required: false
  private _closeSessionAlreadyClosed?: number; 
  public get closeSessionAlreadyClosed() {
    return this.getNumberAttribute('close_session_already_closed');
  }
  public set closeSessionAlreadyClosed(value: number) {
    this._closeSessionAlreadyClosed = value;
  }
  public resetCloseSessionAlreadyClosed() {
    this._closeSessionAlreadyClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeSessionAlreadyClosedInput() {
    return this._closeSessionAlreadyClosed;
  }

  // close_stream_already_closed - computed: false, optional: true, required: false
  private _closeStreamAlreadyClosed?: number; 
  public get closeStreamAlreadyClosed() {
    return this.getNumberAttribute('close_stream_already_closed');
  }
  public set closeStreamAlreadyClosed(value: number) {
    this._closeStreamAlreadyClosed = value;
  }
  public resetCloseStreamAlreadyClosed() {
    this._closeStreamAlreadyClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeStreamAlreadyClosedInput() {
    return this._closeStreamAlreadyClosed;
  }

  // close_stream_not_http_proxy - computed: false, optional: true, required: false
  private _closeStreamNotHttpProxy?: number; 
  public get closeStreamNotHttpProxy() {
    return this.getNumberAttribute('close_stream_not_http_proxy');
  }
  public set closeStreamNotHttpProxy(value: number) {
    this._closeStreamNotHttpProxy = value;
  }
  public resetCloseStreamNotHttpProxy() {
    this._closeStreamNotHttpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeStreamNotHttpProxyInput() {
    return this._closeStreamNotHttpProxy;
  }

  // close_stream_session_close - computed: false, optional: true, required: false
  private _closeStreamSessionClose?: number; 
  public get closeStreamSessionClose() {
    return this.getNumberAttribute('close_stream_session_close');
  }
  public set closeStreamSessionClose(value: number) {
    this._closeStreamSessionClose = value;
  }
  public resetCloseStreamSessionClose() {
    this._closeStreamSessionClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeStreamSessionCloseInput() {
    return this._closeStreamSessionClose;
  }

  // close_stream_session_not_found - computed: false, optional: true, required: false
  private _closeStreamSessionNotFound?: number; 
  public get closeStreamSessionNotFound() {
    return this.getNumberAttribute('close_stream_session_not_found');
  }
  public set closeStreamSessionNotFound(value: number) {
    this._closeStreamSessionNotFound = value;
  }
  public resetCloseStreamSessionNotFound() {
    this._closeStreamSessionNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeStreamSessionNotFoundInput() {
    return this._closeStreamSessionNotFound;
  }

  // close_stream_stream_not_found - computed: false, optional: true, required: false
  private _closeStreamStreamNotFound?: number; 
  public get closeStreamStreamNotFound() {
    return this.getNumberAttribute('close_stream_stream_not_found');
  }
  public set closeStreamStreamNotFound(value: number) {
    this._closeStreamStreamNotFound = value;
  }
  public resetCloseStreamStreamNotFound() {
    this._closeStreamStreamNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closeStreamStreamNotFoundInput() {
    return this._closeStreamStreamNotFound;
  }

  // compress_ctx_alloc_fail - computed: false, optional: true, required: false
  private _compressCtxAllocFail?: number; 
  public get compressCtxAllocFail() {
    return this.getNumberAttribute('compress_ctx_alloc_fail');
  }
  public set compressCtxAllocFail(value: number) {
    this._compressCtxAllocFail = value;
  }
  public resetCompressCtxAllocFail() {
    this._compressCtxAllocFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressCtxAllocFailInput() {
    return this._compressCtxAllocFail;
  }

  // control_frame - computed: false, optional: true, required: false
  private _controlFrame?: number; 
  public get controlFrame() {
    return this.getNumberAttribute('control_frame');
  }
  public set controlFrame(value: number) {
    this._controlFrame = value;
  }
  public resetControlFrame() {
    this._controlFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlFrameInput() {
    return this._controlFrame;
  }

  // ctx_alloc_fail - computed: false, optional: true, required: false
  private _ctxAllocFail?: number; 
  public get ctxAllocFail() {
    return this.getNumberAttribute('ctx_alloc_fail');
  }
  public set ctxAllocFail(value: number) {
    this._ctxAllocFail = value;
  }
  public resetCtxAllocFail() {
    this._ctxAllocFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctxAllocFailInput() {
    return this._ctxAllocFail;
  }

  // curr_http_proxy - computed: false, optional: true, required: false
  private _currHttpProxy?: number; 
  public get currHttpProxy() {
    return this.getNumberAttribute('curr_http_proxy');
  }
  public set currHttpProxy(value: number) {
    this._currHttpProxy = value;
  }
  public resetCurrHttpProxy() {
    this._currHttpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currHttpProxyInput() {
    return this._currHttpProxy;
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

  // curr_stream - computed: false, optional: true, required: false
  private _currStream?: number; 
  public get currStream() {
    return this.getNumberAttribute('curr_stream');
  }
  public set currStream(value: number) {
    this._currStream = value;
  }
  public resetCurrStream() {
    this._currStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currStreamInput() {
    return this._currStream;
  }

  // data_cb_no_tuple - computed: false, optional: true, required: false
  private _dataCbNoTuple?: number; 
  public get dataCbNoTuple() {
    return this.getNumberAttribute('data_cb_no_tuple');
  }
  public set dataCbNoTuple(value: number) {
    this._dataCbNoTuple = value;
  }
  public resetDataCbNoTuple() {
    this._dataCbNoTuple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCbNoTupleInput() {
    return this._dataCbNoTuple;
  }

  // data_frame - computed: false, optional: true, required: false
  private _dataFrame?: number; 
  public get dataFrame() {
    return this.getNumberAttribute('data_frame');
  }
  public set dataFrame(value: number) {
    this._dataFrame = value;
  }
  public resetDataFrame() {
    this._dataFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFrameInput() {
    return this._dataFrame;
  }

  // data_no_stream - computed: false, optional: true, required: false
  private _dataNoStream?: number; 
  public get dataNoStream() {
    return this.getNumberAttribute('data_no_stream');
  }
  public set dataNoStream(value: number) {
    this._dataNoStream = value;
  }
  public resetDataNoStream() {
    this._dataNoStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNoStreamInput() {
    return this._dataNoStream;
  }

  // data_no_stream_goaway_close - computed: false, optional: true, required: false
  private _dataNoStreamGoawayClose?: number; 
  public get dataNoStreamGoawayClose() {
    return this.getNumberAttribute('data_no_stream_goaway_close');
  }
  public set dataNoStreamGoawayClose(value: number) {
    this._dataNoStreamGoawayClose = value;
  }
  public resetDataNoStreamGoawayClose() {
    this._dataNoStreamGoawayClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNoStreamGoawayCloseInput() {
    return this._dataNoStreamGoawayClose;
  }

  // data_no_stream_no_goaway - computed: false, optional: true, required: false
  private _dataNoStreamNoGoaway?: number; 
  public get dataNoStreamNoGoaway() {
    return this.getNumberAttribute('data_no_stream_no_goaway');
  }
  public set dataNoStreamNoGoaway(value: number) {
    this._dataNoStreamNoGoaway = value;
  }
  public resetDataNoStreamNoGoaway() {
    this._dataNoStreamNoGoaway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNoStreamNoGoawayInput() {
    return this._dataNoStreamNoGoaway;
  }

  // data_on_closed_stream - computed: false, optional: true, required: false
  private _dataOnClosedStream?: number; 
  public get dataOnClosedStream() {
    return this.getNumberAttribute('data_on_closed_stream');
  }
  public set dataOnClosedStream(value: number) {
    this._dataOnClosedStream = value;
  }
  public resetDataOnClosedStream() {
    this._dataOnClosedStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataOnClosedStreamInput() {
    return this._dataOnClosedStream;
  }

  // decompress_fail - computed: false, optional: true, required: false
  private _decompressFail?: number; 
  public get decompressFail() {
    return this.getNumberAttribute('decompress_fail');
  }
  public set decompressFail(value: number) {
    this._decompressFail = value;
  }
  public resetDecompressFail() {
    this._decompressFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decompressFailInput() {
    return this._decompressFail;
  }

  // deflate_ctx - computed: false, optional: true, required: false
  private _deflateCtx?: number; 
  public get deflateCtx() {
    return this.getNumberAttribute('deflate_ctx');
  }
  public set deflateCtx(value: number) {
    this._deflateCtx = value;
  }
  public resetDeflateCtx() {
    this._deflateCtx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deflateCtxInput() {
    return this._deflateCtx;
  }

  // est_cb_no_tuple - computed: false, optional: true, required: false
  private _estCbNoTuple?: number; 
  public get estCbNoTuple() {
    return this.getNumberAttribute('est_cb_no_tuple');
  }
  public set estCbNoTuple(value: number) {
    this._estCbNoTuple = value;
  }
  public resetEstCbNoTuple() {
    this._estCbNoTuple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get estCbNoTupleInput() {
    return this._estCbNoTuple;
  }

  // fin_close_session - computed: false, optional: true, required: false
  private _finCloseSession?: number; 
  public get finCloseSession() {
    return this.getNumberAttribute('fin_close_session');
  }
  public set finCloseSession(value: number) {
    this._finCloseSession = value;
  }
  public resetFinCloseSession() {
    this._finCloseSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finCloseSessionInput() {
    return this._finCloseSession;
  }

  // fin_stream_closed - computed: false, optional: true, required: false
  private _finStreamClosed?: number; 
  public get finStreamClosed() {
    return this.getNumberAttribute('fin_stream_closed');
  }
  public set finStreamClosed(value: number) {
    this._finStreamClosed = value;
  }
  public resetFinStreamClosed() {
    this._finStreamClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finStreamClosedInput() {
    return this._finStreamClosed;
  }

  // header_after_session_close - computed: false, optional: true, required: false
  private _headerAfterSessionClose?: number; 
  public get headerAfterSessionClose() {
    return this.getNumberAttribute('header_after_session_close');
  }
  public set headerAfterSessionClose(value: number) {
    this._headerAfterSessionClose = value;
  }
  public resetHeaderAfterSessionClose() {
    this._headerAfterSessionClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerAfterSessionCloseInput() {
    return this._headerAfterSessionClose;
  }

  // header_compress_fail - computed: false, optional: true, required: false
  private _headerCompressFail?: number; 
  public get headerCompressFail() {
    return this.getNumberAttribute('header_compress_fail');
  }
  public set headerCompressFail(value: number) {
    this._headerCompressFail = value;
  }
  public resetHeaderCompressFail() {
    this._headerCompressFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerCompressFailInput() {
    return this._headerCompressFail;
  }

  // headers_frame - computed: false, optional: true, required: false
  private _headersFrame?: number; 
  public get headersFrame() {
    return this.getNumberAttribute('headers_frame');
  }
  public set headersFrame(value: number) {
    this._headersFrame = value;
  }
  public resetHeadersFrame() {
    this._headersFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersFrameInput() {
    return this._headersFrame;
  }

  // http_close_stream_closed - computed: false, optional: true, required: false
  private _httpCloseStreamClosed?: number; 
  public get httpCloseStreamClosed() {
    return this.getNumberAttribute('http_close_stream_closed');
  }
  public set httpCloseStreamClosed(value: number) {
    this._httpCloseStreamClosed = value;
  }
  public resetHttpCloseStreamClosed() {
    this._httpCloseStreamClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpCloseStreamClosedInput() {
    return this._httpCloseStreamClosed;
  }

  // http_conn_alloc_fail - computed: false, optional: true, required: false
  private _httpConnAllocFail?: number; 
  public get httpConnAllocFail() {
    return this.getNumberAttribute('http_conn_alloc_fail');
  }
  public set httpConnAllocFail(value: number) {
    this._httpConnAllocFail = value;
  }
  public resetHttpConnAllocFail() {
    this._httpConnAllocFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConnAllocFailInput() {
    return this._httpConnAllocFail;
  }

  // http_data_session_close - computed: false, optional: true, required: false
  private _httpDataSessionClose?: number; 
  public get httpDataSessionClose() {
    return this.getNumberAttribute('http_data_session_close');
  }
  public set httpDataSessionClose(value: number) {
    this._httpDataSessionClose = value;
  }
  public resetHttpDataSessionClose() {
    this._httpDataSessionClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpDataSessionCloseInput() {
    return this._httpDataSessionClose;
  }

  // http_data_stream_close - computed: false, optional: true, required: false
  private _httpDataStreamClose?: number; 
  public get httpDataStreamClose() {
    return this.getNumberAttribute('http_data_stream_close');
  }
  public set httpDataStreamClose(value: number) {
    this._httpDataStreamClose = value;
  }
  public resetHttpDataStreamClose() {
    this._httpDataStreamClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpDataStreamCloseInput() {
    return this._httpDataStreamClose;
  }

  // http_data_stream_not_found - computed: false, optional: true, required: false
  private _httpDataStreamNotFound?: number; 
  public get httpDataStreamNotFound() {
    return this.getNumberAttribute('http_data_stream_not_found');
  }
  public set httpDataStreamNotFound(value: number) {
    this._httpDataStreamNotFound = value;
  }
  public resetHttpDataStreamNotFound() {
    this._httpDataStreamNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpDataStreamNotFoundInput() {
    return this._httpDataStreamNotFound;
  }

  // http_err_stream_closed - computed: false, optional: true, required: false
  private _httpErrStreamClosed?: number; 
  public get httpErrStreamClosed() {
    return this.getNumberAttribute('http_err_stream_closed');
  }
  public set httpErrStreamClosed(value: number) {
    this._httpErrStreamClosed = value;
  }
  public resetHttpErrStreamClosed() {
    this._httpErrStreamClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpErrStreamClosedInput() {
    return this._httpErrStreamClosed;
  }

  // http_hdr_stream_close - computed: false, optional: true, required: false
  private _httpHdrStreamClose?: number; 
  public get httpHdrStreamClose() {
    return this.getNumberAttribute('http_hdr_stream_close');
  }
  public set httpHdrStreamClose(value: number) {
    this._httpHdrStreamClose = value;
  }
  public resetHttpHdrStreamClose() {
    this._httpHdrStreamClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHdrStreamCloseInput() {
    return this._httpHdrStreamClose;
  }

  // inflate_ctx - computed: false, optional: true, required: false
  private _inflateCtx?: number; 
  public get inflateCtx() {
    return this.getNumberAttribute('inflate_ctx');
  }
  public set inflateCtx(value: number) {
    this._inflateCtx = value;
  }
  public resetInflateCtx() {
    this._inflateCtx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inflateCtxInput() {
    return this._inflateCtx;
  }

  // invalid_frame_size - computed: false, optional: true, required: false
  private _invalidFrameSize?: number; 
  public get invalidFrameSize() {
    return this.getNumberAttribute('invalid_frame_size');
  }
  public set invalidFrameSize(value: number) {
    this._invalidFrameSize = value;
  }
  public resetInvalidFrameSize() {
    this._invalidFrameSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidFrameSizeInput() {
    return this._invalidFrameSize;
  }

  // invalid_version - computed: false, optional: true, required: false
  private _invalidVersion?: number; 
  public get invalidVersion() {
    return this.getNumberAttribute('invalid_version');
  }
  public set invalidVersion(value: number) {
    this._invalidVersion = value;
  }
  public resetInvalidVersion() {
    this._invalidVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidVersionInput() {
    return this._invalidVersion;
  }

  // invalid_window_size - computed: false, optional: true, required: false
  private _invalidWindowSize?: number; 
  public get invalidWindowSize() {
    return this.getNumberAttribute('invalid_window_size');
  }
  public set invalidWindowSize(value: number) {
    this._invalidWindowSize = value;
  }
  public resetInvalidWindowSize() {
    this._invalidWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidWindowSizeInput() {
    return this._invalidWindowSize;
  }

  // max_concurrent_stream_limit - computed: false, optional: true, required: false
  private _maxConcurrentStreamLimit?: number; 
  public get maxConcurrentStreamLimit() {
    return this.getNumberAttribute('max_concurrent_stream_limit');
  }
  public set maxConcurrentStreamLimit(value: number) {
    this._maxConcurrentStreamLimit = value;
  }
  public resetMaxConcurrentStreamLimit() {
    this._maxConcurrentStreamLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentStreamLimitInput() {
    return this._maxConcurrentStreamLimit;
  }

  // name_value_connection - computed: false, optional: true, required: false
  private _nameValueConnection?: number; 
  public get nameValueConnection() {
    return this.getNumberAttribute('name_value_connection');
  }
  public set nameValueConnection(value: number) {
    this._nameValueConnection = value;
  }
  public resetNameValueConnection() {
    this._nameValueConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameValueConnectionInput() {
    return this._nameValueConnection;
  }

  // name_value_invalid_http_ver - computed: false, optional: true, required: false
  private _nameValueInvalidHttpVer?: number; 
  public get nameValueInvalidHttpVer() {
    return this.getNumberAttribute('name_value_invalid_http_ver');
  }
  public set nameValueInvalidHttpVer(value: number) {
    this._nameValueInvalidHttpVer = value;
  }
  public resetNameValueInvalidHttpVer() {
    this._nameValueInvalidHttpVer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameValueInvalidHttpVerInput() {
    return this._nameValueInvalidHttpVer;
  }

  // name_value_keepalive - computed: false, optional: true, required: false
  private _nameValueKeepalive?: number; 
  public get nameValueKeepalive() {
    return this.getNumberAttribute('name_value_keepalive');
  }
  public set nameValueKeepalive(value: number) {
    this._nameValueKeepalive = value;
  }
  public resetNameValueKeepalive() {
    this._nameValueKeepalive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameValueKeepaliveInput() {
    return this._nameValueKeepalive;
  }

  // name_value_no_must_have - computed: false, optional: true, required: false
  private _nameValueNoMustHave?: number; 
  public get nameValueNoMustHave() {
    return this.getNumberAttribute('name_value_no_must_have');
  }
  public set nameValueNoMustHave(value: number) {
    this._nameValueNoMustHave = value;
  }
  public resetNameValueNoMustHave() {
    this._nameValueNoMustHave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameValueNoMustHaveInput() {
    return this._nameValueNoMustHave;
  }

  // name_value_proxy_conn - computed: false, optional: true, required: false
  private _nameValueProxyConn?: number; 
  public get nameValueProxyConn() {
    return this.getNumberAttribute('name_value_proxy_conn');
  }
  public set nameValueProxyConn(value: number) {
    this._nameValueProxyConn = value;
  }
  public resetNameValueProxyConn() {
    this._nameValueProxyConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameValueProxyConnInput() {
    return this._nameValueProxyConn;
  }

  // name_value_total_len_ex - computed: false, optional: true, required: false
  private _nameValueTotalLenEx?: number; 
  public get nameValueTotalLenEx() {
    return this.getNumberAttribute('name_value_total_len_ex');
  }
  public set nameValueTotalLenEx(value: number) {
    this._nameValueTotalLenEx = value;
  }
  public resetNameValueTotalLenEx() {
    this._nameValueTotalLenEx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameValueTotalLenExInput() {
    return this._nameValueTotalLenEx;
  }

  // name_value_trasnfer_encod - computed: false, optional: true, required: false
  private _nameValueTrasnferEncod?: number; 
  public get nameValueTrasnferEncod() {
    return this.getNumberAttribute('name_value_trasnfer_encod');
  }
  public set nameValueTrasnferEncod(value: number) {
    this._nameValueTrasnferEncod = value;
  }
  public resetNameValueTrasnferEncod() {
    this._nameValueTrasnferEncod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameValueTrasnferEncodInput() {
    return this._nameValueTrasnferEncod;
  }

  // name_value_zero_len - computed: false, optional: true, required: false
  private _nameValueZeroLen?: number; 
  public get nameValueZeroLen() {
    return this.getNumberAttribute('name_value_zero_len');
  }
  public set nameValueZeroLen(value: number) {
    this._nameValueZeroLen = value;
  }
  public resetNameValueZeroLen() {
    this._nameValueZeroLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameValueZeroLenInput() {
    return this._nameValueZeroLen;
  }

  // new_stream_session_del - computed: false, optional: true, required: false
  private _newStreamSessionDel?: number; 
  public get newStreamSessionDel() {
    return this.getNumberAttribute('new_stream_session_del');
  }
  public set newStreamSessionDel(value: number) {
    this._newStreamSessionDel = value;
  }
  public resetNewStreamSessionDel() {
    this._newStreamSessionDel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newStreamSessionDelInput() {
    return this._newStreamSessionDel;
  }

  // ping_frame - computed: false, optional: true, required: false
  private _pingFrame?: number; 
  public get pingFrame() {
    return this.getNumberAttribute('ping_frame');
  }
  public set pingFrame(value: number) {
    this._pingFrame = value;
  }
  public resetPingFrame() {
    this._pingFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingFrameInput() {
    return this._pingFrame;
  }

  // ping_sent - computed: false, optional: true, required: false
  private _pingSent?: number; 
  public get pingSent() {
    return this.getNumberAttribute('ping_sent');
  }
  public set pingSent(value: number) {
    this._pingSent = value;
  }
  public resetPingSent() {
    this._pingSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingSentInput() {
    return this._pingSent;
  }

  // request_header_alloc_fail - computed: false, optional: true, required: false
  private _requestHeaderAllocFail?: number; 
  public get requestHeaderAllocFail() {
    return this.getNumberAttribute('request_header_alloc_fail');
  }
  public set requestHeaderAllocFail(value: number) {
    this._requestHeaderAllocFail = value;
  }
  public resetRequestHeaderAllocFail() {
    this._requestHeaderAllocFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderAllocFailInput() {
    return this._requestHeaderAllocFail;
  }

  // server_fin - computed: false, optional: true, required: false
  private _serverFin?: number; 
  public get serverFin() {
    return this.getNumberAttribute('server_fin');
  }
  public set serverFin(value: number) {
    this._serverFin = value;
  }
  public resetServerFin() {
    this._serverFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFinInput() {
    return this._serverFin;
  }

  // server_goaway - computed: false, optional: true, required: false
  private _serverGoaway?: number; 
  public get serverGoaway() {
    return this.getNumberAttribute('server_goaway');
  }
  public set serverGoaway(value: number) {
    this._serverGoaway = value;
  }
  public resetServerGoaway() {
    this._serverGoaway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGoawayInput() {
    return this._serverGoaway;
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

  // server_rst_close_stream - computed: false, optional: true, required: false
  private _serverRstCloseStream?: number; 
  public get serverRstCloseStream() {
    return this.getNumberAttribute('server_rst_close_stream');
  }
  public set serverRstCloseStream(value: number) {
    this._serverRstCloseStream = value;
  }
  public resetServerRstCloseStream() {
    this._serverRstCloseStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRstCloseStreamInput() {
    return this._serverRstCloseStream;
  }

  // session_close - computed: false, optional: true, required: false
  private _sessionClose?: number; 
  public get sessionClose() {
    return this.getNumberAttribute('session_close');
  }
  public set sessionClose(value: number) {
    this._sessionClose = value;
  }
  public resetSessionClose() {
    this._sessionClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionCloseInput() {
    return this._sessionClose;
  }

  // session_err - computed: false, optional: true, required: false
  private _sessionErr?: number; 
  public get sessionErr() {
    return this.getNumberAttribute('session_err');
  }
  public set sessionErr(value: number) {
    this._sessionErr = value;
  }
  public resetSessionErr() {
    this._sessionErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionErrInput() {
    return this._sessionErr;
  }

  // session_needs_requeue - computed: false, optional: true, required: false
  private _sessionNeedsRequeue?: number; 
  public get sessionNeedsRequeue() {
    return this.getNumberAttribute('session_needs_requeue');
  }
  public set sessionNeedsRequeue(value: number) {
    this._sessionNeedsRequeue = value;
  }
  public resetSessionNeedsRequeue() {
    this._sessionNeedsRequeue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionNeedsRequeueInput() {
    return this._sessionNeedsRequeue;
  }

  // settings_frame - computed: false, optional: true, required: false
  private _settingsFrame?: number; 
  public get settingsFrame() {
    return this.getNumberAttribute('settings_frame');
  }
  public set settingsFrame(value: number) {
    this._settingsFrame = value;
  }
  public resetSettingsFrame() {
    this._settingsFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsFrameInput() {
    return this._settingsFrame;
  }

  // stream_alloc_fail - computed: false, optional: true, required: false
  private _streamAllocFail?: number; 
  public get streamAllocFail() {
    return this.getNumberAttribute('stream_alloc_fail');
  }
  public set streamAllocFail(value: number) {
    this._streamAllocFail = value;
  }
  public resetStreamAllocFail() {
    this._streamAllocFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamAllocFailInput() {
    return this._streamAllocFail;
  }

  // stream_close - computed: false, optional: true, required: false
  private _streamClose?: number; 
  public get streamClose() {
    return this.getNumberAttribute('stream_close');
  }
  public set streamClose(value: number) {
    this._streamClose = value;
  }
  public resetStreamClose() {
    this._streamClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamCloseInput() {
    return this._streamClose;
  }

  // stream_err - computed: false, optional: true, required: false
  private _streamErr?: number; 
  public get streamErr() {
    return this.getNumberAttribute('stream_err');
  }
  public set streamErr(value: number) {
    this._streamErr = value;
  }
  public resetStreamErr() {
    this._streamErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamErrInput() {
    return this._streamErr;
  }

  // stream_found - computed: false, optional: true, required: false
  private _streamFound?: number; 
  public get streamFound() {
    return this.getNumberAttribute('stream_found');
  }
  public set streamFound(value: number) {
    this._streamFound = value;
  }
  public resetStreamFound() {
    this._streamFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamFoundInput() {
    return this._streamFound;
  }

  // stream_lt_prev - computed: false, optional: true, required: false
  private _streamLtPrev?: number; 
  public get streamLtPrev() {
    return this.getNumberAttribute('stream_lt_prev');
  }
  public set streamLtPrev(value: number) {
    this._streamLtPrev = value;
  }
  public resetStreamLtPrev() {
    this._streamLtPrev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamLtPrevInput() {
    return this._streamLtPrev;
  }

  // stream_not_found - computed: false, optional: true, required: false
  private _streamNotFound?: number; 
  public get streamNotFound() {
    return this.getNumberAttribute('stream_not_found');
  }
  public set streamNotFound(value: number) {
    this._streamNotFound = value;
  }
  public resetStreamNotFound() {
    this._streamNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNotFoundInput() {
    return this._streamNotFound;
  }

  // syn_after_goaway - computed: false, optional: true, required: false
  private _synAfterGoaway?: number; 
  public get synAfterGoaway() {
    return this.getNumberAttribute('syn_after_goaway');
  }
  public set synAfterGoaway(value: number) {
    this._synAfterGoaway = value;
  }
  public resetSynAfterGoaway() {
    this._synAfterGoaway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synAfterGoawayInput() {
    return this._synAfterGoaway;
  }

  // syn_frame - computed: false, optional: true, required: false
  private _synFrame?: number; 
  public get synFrame() {
    return this.getNumberAttribute('syn_frame');
  }
  public set synFrame(value: number) {
    this._synFrame = value;
  }
  public resetSynFrame() {
    this._synFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synFrameInput() {
    return this._synFrame;
  }

  // syn_reply_alr_rcvd - computed: false, optional: true, required: false
  private _synReplyAlrRcvd?: number; 
  public get synReplyAlrRcvd() {
    return this.getNumberAttribute('syn_reply_alr_rcvd');
  }
  public set synReplyAlrRcvd(value: number) {
    this._synReplyAlrRcvd = value;
  }
  public resetSynReplyAlrRcvd() {
    this._synReplyAlrRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synReplyAlrRcvdInput() {
    return this._synReplyAlrRcvd;
  }

  // syn_reply_frame - computed: false, optional: true, required: false
  private _synReplyFrame?: number; 
  public get synReplyFrame() {
    return this.getNumberAttribute('syn_reply_frame');
  }
  public set synReplyFrame(value: number) {
    this._synReplyFrame = value;
  }
  public resetSynReplyFrame() {
    this._synReplyFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synReplyFrameInput() {
    return this._synReplyFrame;
  }

  // syn_stream_exist_or_even - computed: false, optional: true, required: false
  private _synStreamExistOrEven?: number; 
  public get synStreamExistOrEven() {
    return this.getNumberAttribute('syn_stream_exist_or_even');
  }
  public set synStreamExistOrEven(value: number) {
    this._synStreamExistOrEven = value;
  }
  public resetSynStreamExistOrEven() {
    this._synStreamExistOrEven = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synStreamExistOrEvenInput() {
    return this._synStreamExistOrEven;
  }

  // syn_unidir - computed: false, optional: true, required: false
  private _synUnidir?: number; 
  public get synUnidir() {
    return this.getNumberAttribute('syn_unidir');
  }
  public set synUnidir(value: number) {
    this._synUnidir = value;
  }
  public resetSynUnidir() {
    this._synUnidir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synUnidirInput() {
    return this._synUnidir;
  }

  // tcp_err - computed: false, optional: true, required: false
  private _tcpErr?: number; 
  public get tcpErr() {
    return this.getNumberAttribute('tcp_err');
  }
  public set tcpErr(value: number) {
    this._tcpErr = value;
  }
  public resetTcpErr() {
    this._tcpErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpErrInput() {
    return this._tcpErr;
  }

  // total_http_proxy - computed: false, optional: true, required: false
  private _totalHttpProxy?: number; 
  public get totalHttpProxy() {
    return this.getNumberAttribute('total_http_proxy');
  }
  public set totalHttpProxy(value: number) {
    this._totalHttpProxy = value;
  }
  public resetTotalHttpProxy() {
    this._totalHttpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalHttpProxyInput() {
    return this._totalHttpProxy;
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

  // total_stream - computed: false, optional: true, required: false
  private _totalStream?: number; 
  public get totalStream() {
    return this.getNumberAttribute('total_stream');
  }
  public set totalStream(value: number) {
    this._totalStream = value;
  }
  public resetTotalStream() {
    this._totalStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalStreamInput() {
    return this._totalStream;
  }

  // total_stream_succ - computed: false, optional: true, required: false
  private _totalStreamSucc?: number; 
  public get totalStreamSucc() {
    return this.getNumberAttribute('total_stream_succ');
  }
  public set totalStreamSucc(value: number) {
    this._totalStreamSucc = value;
  }
  public resetTotalStreamSucc() {
    this._totalStreamSucc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalStreamSuccInput() {
    return this._totalStreamSucc;
  }

  // total_v2_proxy - computed: false, optional: true, required: false
  private _totalV2Proxy?: number; 
  public get totalV2Proxy() {
    return this.getNumberAttribute('total_v2_proxy');
  }
  public set totalV2Proxy(value: number) {
    this._totalV2Proxy = value;
  }
  public resetTotalV2Proxy() {
    this._totalV2Proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalV2ProxyInput() {
    return this._totalV2Proxy;
  }

  // total_v3_proxy - computed: false, optional: true, required: false
  private _totalV3Proxy?: number; 
  public get totalV3Proxy() {
    return this.getNumberAttribute('total_v3_proxy');
  }
  public set totalV3Proxy(value: number) {
    this._totalV3Proxy = value;
  }
  public resetTotalV3Proxy() {
    this._totalV3Proxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalV3ProxyInput() {
    return this._totalV3Proxy;
  }

  // unknown_control_frame - computed: false, optional: true, required: false
  private _unknownControlFrame?: number; 
  public get unknownControlFrame() {
    return this.getNumberAttribute('unknown_control_frame');
  }
  public set unknownControlFrame(value: number) {
    this._unknownControlFrame = value;
  }
  public resetUnknownControlFrame() {
    this._unknownControlFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownControlFrameInput() {
    return this._unknownControlFrame;
  }

  // window_frame - computed: false, optional: true, required: false
  private _windowFrame?: number; 
  public get windowFrame() {
    return this.getNumberAttribute('window_frame');
  }
  public set windowFrame(value: number) {
    this._windowFrame = value;
  }
  public resetWindowFrame() {
    this._windowFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowFrameInput() {
    return this._windowFrame;
  }

  // window_no_stream - computed: false, optional: true, required: false
  private _windowNoStream?: number; 
  public get windowNoStream() {
    return this.getNumberAttribute('window_no_stream');
  }
  public set windowNoStream(value: number) {
    this._windowNoStream = value;
  }
  public resetWindowNoStream() {
    this._windowNoStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowNoStreamInput() {
    return this._windowNoStream;
  }
}

export class DataThunderSlbSpdyProxyOperOperL4CpuListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbSpdyProxyOperOperL4CpuListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbSpdyProxyOperOperL4CpuListStructOutputReference {
    return new DataThunderSlbSpdyProxyOperOperL4CpuListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbSpdyProxyOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#cpu_count DataThunderSlbSpdyProxyOper#cpu_count}
  */
  readonly cpuCount?: number;
  /**
  * l4_cpu_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#l4_cpu_list DataThunderSlbSpdyProxyOper#l4_cpu_list}
  */
  readonly l4CpuList?: DataThunderSlbSpdyProxyOperOperL4CpuListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbSpdyProxyOperOperToTerraform(struct?: DataThunderSlbSpdyProxyOperOperOutputReference | DataThunderSlbSpdyProxyOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    l4_cpu_list: cdktf.listMapper(dataThunderSlbSpdyProxyOperOperL4CpuListStructToTerraform, true)(struct!.l4CpuList),
  }
}


export function dataThunderSlbSpdyProxyOperOperToHclTerraform(struct?: DataThunderSlbSpdyProxyOperOperOutputReference | DataThunderSlbSpdyProxyOperOper): any {
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
    l4_cpu_list: {
      value: cdktf.listMapperHcl(dataThunderSlbSpdyProxyOperOperL4CpuListStructToHclTerraform, true)(struct!.l4CpuList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbSpdyProxyOperOperL4CpuListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbSpdyProxyOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbSpdyProxyOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._l4CpuList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4CpuList = this._l4CpuList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbSpdyProxyOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCount = undefined;
      this._l4CpuList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCount = value.cpuCount;
      this._l4CpuList.internalValue = value.l4CpuList;
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

  // l4_cpu_list - computed: false, optional: true, required: false
  private _l4CpuList = new DataThunderSlbSpdyProxyOperOperL4CpuListStructList(this, "l4_cpu_list", false);
  public get l4CpuList() {
    return this._l4CpuList;
  }
  public putL4CpuList(value: DataThunderSlbSpdyProxyOperOperL4CpuListStruct[] | cdktf.IResolvable) {
    this._l4CpuList.internalValue = value;
  }
  public resetL4CpuList() {
    this._l4CpuList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4CpuListInput() {
    return this._l4CpuList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper thunder_slb_spdy_proxy_oper}
*/
export class DataThunderSlbSpdyProxyOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_spdy_proxy_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbSpdyProxyOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbSpdyProxyOper to import
  * @param importFromId The id of the existing DataThunderSlbSpdyProxyOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbSpdyProxyOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_spdy_proxy_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_spdy_proxy_oper thunder_slb_spdy_proxy_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbSpdyProxyOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbSpdyProxyOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_spdy_proxy_oper',
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
  private _oper = new DataThunderSlbSpdyProxyOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbSpdyProxyOperOper) {
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
      oper: dataThunderSlbSpdyProxyOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbSpdyProxyOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbSpdyProxyOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
