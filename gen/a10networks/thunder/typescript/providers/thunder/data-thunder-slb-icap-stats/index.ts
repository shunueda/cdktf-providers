// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbIcapStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#id DataThunderSlbIcapStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#stats DataThunderSlbIcapStats#stats}
  */
  readonly stats?: DataThunderSlbIcapStatsStats;
}
export interface DataThunderSlbIcapStatsStats {
  /**
  * App Server Conn Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#app_serv_conn_err DataThunderSlbIcapStats#app_serv_conn_err}
  */
  readonly appServConnErr?: number;
  /**
  * App Server Conn no ES PCB Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#app_serv_conn_no_pcb_err DataThunderSlbIcapStats#app_serv_conn_no_pcb_err}
  */
  readonly appServConnNoPcbErr?: number;
  /**
  * Chunk Hdr Err1 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#chunk1_hdr_err DataThunderSlbIcapStats#chunk1_hdr_err}
  */
  readonly chunk1HdrErr?: number;
  /**
  * Chunk Hdr Err2 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#chunk2_hdr_err DataThunderSlbIcapStats#chunk2_hdr_err}
  */
  readonly chunk2HdrErr?: number;
  /**
  * Chunk Bad Trail Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#chunk_bad_trail_err DataThunderSlbIcapStats#chunk_bad_trail_err}
  */
  readonly chunkBadTrailErr?: number;
  /**
  * Chunk so no Allow 204 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#chunk_no_allow_204 DataThunderSlbIcapStats#chunk_no_allow_204}
  */
  readonly chunkNoAllow204?: number;
  /**
  * Encap HDR Incomplete Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#encap_hdr_incomplete_err DataThunderSlbIcapStats#encap_hdr_incomplete_err}
  */
  readonly encapHdrIncompleteErr?: number;
  /**
  * HTTP CONNECT Reqmod Request Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#http_connect_reqmod_request DataThunderSlbIcapStats#http_connect_reqmod_request}
  */
  readonly httpConnectReqmodRequest?: number;
  /**
  * HTTP Resp Hdr Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#http_resp_hdr_err DataThunderSlbIcapStats#http_resp_hdr_err}
  */
  readonly httpRespHdrErr?: number;
  /**
  * HTTP Response Line Parse Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#http_resp_line_parse_err DataThunderSlbIcapStats#http_resp_line_parse_err}
  */
  readonly httpRespLineParseErr?: number;
  /**
  * HTTP Response Line Read Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#http_resp_line_read_err DataThunderSlbIcapStats#http_resp_line_read_err}
  */
  readonly httpRespLineReadErr?: number;
  /**
  * ICAP Line Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#icap_line_err DataThunderSlbIcapStats#icap_line_err}
  */
  readonly icapLineErr?: number;
  /**
  * ICAP Ver Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#icap_ver_err DataThunderSlbIcapStats#icap_ver_err}
  */
  readonly icapVerErr?: number;
  /**
  * Length Exceeded so no Allow 204 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#len_exceed_no_allow_204 DataThunderSlbIcapStats#len_exceed_no_allow_204}
  */
  readonly lenExceedNoAllow204?: number;
  /**
  * No ICAP Resp Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#no_icap_resp_err DataThunderSlbIcapStats#no_icap_resp_err}
  */
  readonly noIcapRespErr?: number;
  /**
  * No Payload Buff Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#no_payload_buff_err DataThunderSlbIcapStats#no_payload_buff_err}
  */
  readonly noPayloadBuffErr?: number;
  /**
  * No Payload In Next Buff Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#no_payload_next_buff_err DataThunderSlbIcapStats#no_payload_next_buff_err}
  */
  readonly noPayloadNextBuffErr?: number;
  /**
  * No Status Code Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#no_status_code_err DataThunderSlbIcapStats#no_status_code_err}
  */
  readonly noStatusCodeErr?: number;
  /**
  * Prepare ICAP req fail Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#prep_req_fail_err DataThunderSlbIcapStats#prep_req_fail_err}
  */
  readonly prepReqFailErr?: number;
  /**
  * Send Option Req Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#recv_option_resp DataThunderSlbIcapStats#recv_option_resp}
  */
  readonly recvOptionResp?: number;
  /**
  * Req Hdr Incomplete Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#req_hdr_incomplete_err DataThunderSlbIcapStats#req_hdr_incomplete_err}
  */
  readonly reqHdrIncompleteErr?: number;
  /**
  * Reqmod Request Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#reqmod_request DataThunderSlbIcapStats#reqmod_request}
  */
  readonly reqmodRequest?: number;
  /**
  * Reqmod Request Sent After 100 Cont Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#reqmod_request_after_100 DataThunderSlbIcapStats#reqmod_request_after_100}
  */
  readonly reqmodRequestAfter100?: number;
  /**
  * Reqmod Response Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#reqmod_response DataThunderSlbIcapStats#reqmod_response}
  */
  readonly reqmodResponse?: number;
  /**
  * Reqmod Response After 100 Cont Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#reqmod_response_after_100 DataThunderSlbIcapStats#reqmod_response_after_100}
  */
  readonly reqmodResponseAfter100?: number;
  /**
  * Resp Hdr Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#resp_hdr_err DataThunderSlbIcapStats#resp_hdr_err}
  */
  readonly respHdrErr?: number;
  /**
  * Resp Hdr Incomplete Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#resp_hdr_incomplete_err DataThunderSlbIcapStats#resp_hdr_incomplete_err}
  */
  readonly respHdrIncompleteErr?: number;
  /**
  * Resp Line Parse Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#resp_line_parse_err DataThunderSlbIcapStats#resp_line_parse_err}
  */
  readonly respLineParseErr?: number;
  /**
  * Resp Line Read Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#resp_line_read_err DataThunderSlbIcapStats#resp_line_read_err}
  */
  readonly respLineReadErr?: number;
  /**
  * Respmod Request Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#respmod_request DataThunderSlbIcapStats#respmod_request}
  */
  readonly respmodRequest?: number;
  /**
  * Respmod Request Sent After 100 Cont Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#respmod_request_after_100 DataThunderSlbIcapStats#respmod_request_after_100}
  */
  readonly respmodRequestAfter100?: number;
  /**
  * Respmod Response Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#respmod_response DataThunderSlbIcapStats#respmod_response}
  */
  readonly respmodResponse?: number;
  /**
  * Respmod Response After 100 Cont Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#respmod_response_after_100 DataThunderSlbIcapStats#respmod_response_after_100}
  */
  readonly respmodResponseAfter100?: number;
  /**
  * Result 100 Continue Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#result_100_continue DataThunderSlbIcapStats#result_100_continue}
  */
  readonly result100Continue?: number;
  /**
  * Result Continue Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#result_continue DataThunderSlbIcapStats#result_continue}
  */
  readonly resultContinue?: number;
  /**
  * Result ICAP Response Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#result_icap_response DataThunderSlbIcapStats#result_icap_response}
  */
  readonly resultIcapResponse?: number;
  /**
  * Result Other Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#result_other DataThunderSlbIcapStats#result_other}
  */
  readonly resultOther?: number;
  /**
  * Send Option Req Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#send_option_req DataThunderSlbIcapStats#send_option_req}
  */
  readonly sendOptionReq?: number;
  /**
  * Server Select Fail Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#serv_sel_fail_err DataThunderSlbIcapStats#serv_sel_fail_err}
  */
  readonly servSelFailErr?: number;
  /**
  * Start ICAP conn fail Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#start_icap_conn_fail_err DataThunderSlbIcapStats#start_icap_conn_fail_err}
  */
  readonly startIcapConnFailErr?: number;
  /**
  * Status 100 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_100 DataThunderSlbIcapStats#status_100}
  */
  readonly status100?: number;
  /**
  * Status 101 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_101 DataThunderSlbIcapStats#status_101}
  */
  readonly status101?: number;
  /**
  * Status 102 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_102 DataThunderSlbIcapStats#status_102}
  */
  readonly status102?: number;
  /**
  * Status 1xx Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_1xx DataThunderSlbIcapStats#status_1xx}
  */
  readonly status1Xx?: number;
  /**
  * Status 200 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_200 DataThunderSlbIcapStats#status_200}
  */
  readonly status200?: number;
  /**
  * Status 201 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_201 DataThunderSlbIcapStats#status_201}
  */
  readonly status201?: number;
  /**
  * Status 202 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_202 DataThunderSlbIcapStats#status_202}
  */
  readonly status202?: number;
  /**
  * Status 203 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_203 DataThunderSlbIcapStats#status_203}
  */
  readonly status203?: number;
  /**
  * Status 204 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_204 DataThunderSlbIcapStats#status_204}
  */
  readonly status204?: number;
  /**
  * Status 205 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_205 DataThunderSlbIcapStats#status_205}
  */
  readonly status205?: number;
  /**
  * Status 206 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_206 DataThunderSlbIcapStats#status_206}
  */
  readonly status206?: number;
  /**
  * Status 207 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_207 DataThunderSlbIcapStats#status_207}
  */
  readonly status207?: number;
  /**
  * Status 2xx Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_2xx DataThunderSlbIcapStats#status_2xx}
  */
  readonly status2Xx?: number;
  /**
  * Status 300 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_300 DataThunderSlbIcapStats#status_300}
  */
  readonly status300?: number;
  /**
  * Status 301 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_301 DataThunderSlbIcapStats#status_301}
  */
  readonly status301?: number;
  /**
  * Status 302 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_302 DataThunderSlbIcapStats#status_302}
  */
  readonly status302?: number;
  /**
  * Status 303 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_303 DataThunderSlbIcapStats#status_303}
  */
  readonly status303?: number;
  /**
  * Status 304 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_304 DataThunderSlbIcapStats#status_304}
  */
  readonly status304?: number;
  /**
  * Status 305 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_305 DataThunderSlbIcapStats#status_305}
  */
  readonly status305?: number;
  /**
  * Status 306 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_306 DataThunderSlbIcapStats#status_306}
  */
  readonly status306?: number;
  /**
  * Status 307 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_307 DataThunderSlbIcapStats#status_307}
  */
  readonly status307?: number;
  /**
  * Status 3xx Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_3xx DataThunderSlbIcapStats#status_3xx}
  */
  readonly status3Xx?: number;
  /**
  * Status 400 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_400 DataThunderSlbIcapStats#status_400}
  */
  readonly status400?: number;
  /**
  * Status 401 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_401 DataThunderSlbIcapStats#status_401}
  */
  readonly status401?: number;
  /**
  * Status 402 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_402 DataThunderSlbIcapStats#status_402}
  */
  readonly status402?: number;
  /**
  * Status 403 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_403 DataThunderSlbIcapStats#status_403}
  */
  readonly status403?: number;
  /**
  * Status 404 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_404 DataThunderSlbIcapStats#status_404}
  */
  readonly status404?: number;
  /**
  * Status 405 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_405 DataThunderSlbIcapStats#status_405}
  */
  readonly status405?: number;
  /**
  * Status 406 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_406 DataThunderSlbIcapStats#status_406}
  */
  readonly status406?: number;
  /**
  * Status 407 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_407 DataThunderSlbIcapStats#status_407}
  */
  readonly status407?: number;
  /**
  * Status 408 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_408 DataThunderSlbIcapStats#status_408}
  */
  readonly status408?: number;
  /**
  * Status 409 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_409 DataThunderSlbIcapStats#status_409}
  */
  readonly status409?: number;
  /**
  * Status 410 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_410 DataThunderSlbIcapStats#status_410}
  */
  readonly status410?: number;
  /**
  * Status 411 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_411 DataThunderSlbIcapStats#status_411}
  */
  readonly status411?: number;
  /**
  * Status 412 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_412 DataThunderSlbIcapStats#status_412}
  */
  readonly status412?: number;
  /**
  * Status 413 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_413 DataThunderSlbIcapStats#status_413}
  */
  readonly status413?: number;
  /**
  * Status 414 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_414 DataThunderSlbIcapStats#status_414}
  */
  readonly status414?: number;
  /**
  * Status 415 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_415 DataThunderSlbIcapStats#status_415}
  */
  readonly status415?: number;
  /**
  * Status 416 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_416 DataThunderSlbIcapStats#status_416}
  */
  readonly status416?: number;
  /**
  * Status 417 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_417 DataThunderSlbIcapStats#status_417}
  */
  readonly status417?: number;
  /**
  * Status 418 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_418 DataThunderSlbIcapStats#status_418}
  */
  readonly status418?: number;
  /**
  * Status 419 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_419 DataThunderSlbIcapStats#status_419}
  */
  readonly status419?: number;
  /**
  * Status 420 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_420 DataThunderSlbIcapStats#status_420}
  */
  readonly status420?: number;
  /**
  * Status 422 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_422 DataThunderSlbIcapStats#status_422}
  */
  readonly status422?: number;
  /**
  * Status 423 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_423 DataThunderSlbIcapStats#status_423}
  */
  readonly status423?: number;
  /**
  * Status 424 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_424 DataThunderSlbIcapStats#status_424}
  */
  readonly status424?: number;
  /**
  * Status 425 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_425 DataThunderSlbIcapStats#status_425}
  */
  readonly status425?: number;
  /**
  * Status 426 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_426 DataThunderSlbIcapStats#status_426}
  */
  readonly status426?: number;
  /**
  * Status 449 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_449 DataThunderSlbIcapStats#status_449}
  */
  readonly status449?: number;
  /**
  * Status 450 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_450 DataThunderSlbIcapStats#status_450}
  */
  readonly status450?: number;
  /**
  * Status 4xx Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_4xx DataThunderSlbIcapStats#status_4xx}
  */
  readonly status4Xx?: number;
  /**
  * Status 500 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_500 DataThunderSlbIcapStats#status_500}
  */
  readonly status500?: number;
  /**
  * Status 501 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_501 DataThunderSlbIcapStats#status_501}
  */
  readonly status501?: number;
  /**
  * Status 502 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_502 DataThunderSlbIcapStats#status_502}
  */
  readonly status502?: number;
  /**
  * Status 503 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_503 DataThunderSlbIcapStats#status_503}
  */
  readonly status503?: number;
  /**
  * Status 504 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_504 DataThunderSlbIcapStats#status_504}
  */
  readonly status504?: number;
  /**
  * Status 505 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_505 DataThunderSlbIcapStats#status_505}
  */
  readonly status505?: number;
  /**
  * Status 506 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_506 DataThunderSlbIcapStats#status_506}
  */
  readonly status506?: number;
  /**
  * Status 507 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_507 DataThunderSlbIcapStats#status_507}
  */
  readonly status507?: number;
  /**
  * Status 508 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_508 DataThunderSlbIcapStats#status_508}
  */
  readonly status508?: number;
  /**
  * Status 509 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_509 DataThunderSlbIcapStats#status_509}
  */
  readonly status509?: number;
  /**
  * Status 510 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_510 DataThunderSlbIcapStats#status_510}
  */
  readonly status510?: number;
  /**
  * Status 5xx Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_5xx DataThunderSlbIcapStats#status_5xx}
  */
  readonly status5Xx?: number;
  /**
  * Status 6xx Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_6xx DataThunderSlbIcapStats#status_6xx}
  */
  readonly status6Xx?: number;
  /**
  * Status Unknown Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#status_unknown DataThunderSlbIcapStats#status_unknown}
  */
  readonly statusUnknown?: number;
}

export function dataThunderSlbIcapStatsStatsToTerraform(struct?: DataThunderSlbIcapStatsStatsOutputReference | DataThunderSlbIcapStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_serv_conn_err: cdktf.numberToTerraform(struct!.appServConnErr),
    app_serv_conn_no_pcb_err: cdktf.numberToTerraform(struct!.appServConnNoPcbErr),
    chunk1_hdr_err: cdktf.numberToTerraform(struct!.chunk1HdrErr),
    chunk2_hdr_err: cdktf.numberToTerraform(struct!.chunk2HdrErr),
    chunk_bad_trail_err: cdktf.numberToTerraform(struct!.chunkBadTrailErr),
    chunk_no_allow_204: cdktf.numberToTerraform(struct!.chunkNoAllow204),
    encap_hdr_incomplete_err: cdktf.numberToTerraform(struct!.encapHdrIncompleteErr),
    http_connect_reqmod_request: cdktf.numberToTerraform(struct!.httpConnectReqmodRequest),
    http_resp_hdr_err: cdktf.numberToTerraform(struct!.httpRespHdrErr),
    http_resp_line_parse_err: cdktf.numberToTerraform(struct!.httpRespLineParseErr),
    http_resp_line_read_err: cdktf.numberToTerraform(struct!.httpRespLineReadErr),
    icap_line_err: cdktf.numberToTerraform(struct!.icapLineErr),
    icap_ver_err: cdktf.numberToTerraform(struct!.icapVerErr),
    len_exceed_no_allow_204: cdktf.numberToTerraform(struct!.lenExceedNoAllow204),
    no_icap_resp_err: cdktf.numberToTerraform(struct!.noIcapRespErr),
    no_payload_buff_err: cdktf.numberToTerraform(struct!.noPayloadBuffErr),
    no_payload_next_buff_err: cdktf.numberToTerraform(struct!.noPayloadNextBuffErr),
    no_status_code_err: cdktf.numberToTerraform(struct!.noStatusCodeErr),
    prep_req_fail_err: cdktf.numberToTerraform(struct!.prepReqFailErr),
    recv_option_resp: cdktf.numberToTerraform(struct!.recvOptionResp),
    req_hdr_incomplete_err: cdktf.numberToTerraform(struct!.reqHdrIncompleteErr),
    reqmod_request: cdktf.numberToTerraform(struct!.reqmodRequest),
    reqmod_request_after_100: cdktf.numberToTerraform(struct!.reqmodRequestAfter100),
    reqmod_response: cdktf.numberToTerraform(struct!.reqmodResponse),
    reqmod_response_after_100: cdktf.numberToTerraform(struct!.reqmodResponseAfter100),
    resp_hdr_err: cdktf.numberToTerraform(struct!.respHdrErr),
    resp_hdr_incomplete_err: cdktf.numberToTerraform(struct!.respHdrIncompleteErr),
    resp_line_parse_err: cdktf.numberToTerraform(struct!.respLineParseErr),
    resp_line_read_err: cdktf.numberToTerraform(struct!.respLineReadErr),
    respmod_request: cdktf.numberToTerraform(struct!.respmodRequest),
    respmod_request_after_100: cdktf.numberToTerraform(struct!.respmodRequestAfter100),
    respmod_response: cdktf.numberToTerraform(struct!.respmodResponse),
    respmod_response_after_100: cdktf.numberToTerraform(struct!.respmodResponseAfter100),
    result_100_continue: cdktf.numberToTerraform(struct!.result100Continue),
    result_continue: cdktf.numberToTerraform(struct!.resultContinue),
    result_icap_response: cdktf.numberToTerraform(struct!.resultIcapResponse),
    result_other: cdktf.numberToTerraform(struct!.resultOther),
    send_option_req: cdktf.numberToTerraform(struct!.sendOptionReq),
    serv_sel_fail_err: cdktf.numberToTerraform(struct!.servSelFailErr),
    start_icap_conn_fail_err: cdktf.numberToTerraform(struct!.startIcapConnFailErr),
    status_100: cdktf.numberToTerraform(struct!.status100),
    status_101: cdktf.numberToTerraform(struct!.status101),
    status_102: cdktf.numberToTerraform(struct!.status102),
    status_1xx: cdktf.numberToTerraform(struct!.status1Xx),
    status_200: cdktf.numberToTerraform(struct!.status200),
    status_201: cdktf.numberToTerraform(struct!.status201),
    status_202: cdktf.numberToTerraform(struct!.status202),
    status_203: cdktf.numberToTerraform(struct!.status203),
    status_204: cdktf.numberToTerraform(struct!.status204),
    status_205: cdktf.numberToTerraform(struct!.status205),
    status_206: cdktf.numberToTerraform(struct!.status206),
    status_207: cdktf.numberToTerraform(struct!.status207),
    status_2xx: cdktf.numberToTerraform(struct!.status2Xx),
    status_300: cdktf.numberToTerraform(struct!.status300),
    status_301: cdktf.numberToTerraform(struct!.status301),
    status_302: cdktf.numberToTerraform(struct!.status302),
    status_303: cdktf.numberToTerraform(struct!.status303),
    status_304: cdktf.numberToTerraform(struct!.status304),
    status_305: cdktf.numberToTerraform(struct!.status305),
    status_306: cdktf.numberToTerraform(struct!.status306),
    status_307: cdktf.numberToTerraform(struct!.status307),
    status_3xx: cdktf.numberToTerraform(struct!.status3Xx),
    status_400: cdktf.numberToTerraform(struct!.status400),
    status_401: cdktf.numberToTerraform(struct!.status401),
    status_402: cdktf.numberToTerraform(struct!.status402),
    status_403: cdktf.numberToTerraform(struct!.status403),
    status_404: cdktf.numberToTerraform(struct!.status404),
    status_405: cdktf.numberToTerraform(struct!.status405),
    status_406: cdktf.numberToTerraform(struct!.status406),
    status_407: cdktf.numberToTerraform(struct!.status407),
    status_408: cdktf.numberToTerraform(struct!.status408),
    status_409: cdktf.numberToTerraform(struct!.status409),
    status_410: cdktf.numberToTerraform(struct!.status410),
    status_411: cdktf.numberToTerraform(struct!.status411),
    status_412: cdktf.numberToTerraform(struct!.status412),
    status_413: cdktf.numberToTerraform(struct!.status413),
    status_414: cdktf.numberToTerraform(struct!.status414),
    status_415: cdktf.numberToTerraform(struct!.status415),
    status_416: cdktf.numberToTerraform(struct!.status416),
    status_417: cdktf.numberToTerraform(struct!.status417),
    status_418: cdktf.numberToTerraform(struct!.status418),
    status_419: cdktf.numberToTerraform(struct!.status419),
    status_420: cdktf.numberToTerraform(struct!.status420),
    status_422: cdktf.numberToTerraform(struct!.status422),
    status_423: cdktf.numberToTerraform(struct!.status423),
    status_424: cdktf.numberToTerraform(struct!.status424),
    status_425: cdktf.numberToTerraform(struct!.status425),
    status_426: cdktf.numberToTerraform(struct!.status426),
    status_449: cdktf.numberToTerraform(struct!.status449),
    status_450: cdktf.numberToTerraform(struct!.status450),
    status_4xx: cdktf.numberToTerraform(struct!.status4Xx),
    status_500: cdktf.numberToTerraform(struct!.status500),
    status_501: cdktf.numberToTerraform(struct!.status501),
    status_502: cdktf.numberToTerraform(struct!.status502),
    status_503: cdktf.numberToTerraform(struct!.status503),
    status_504: cdktf.numberToTerraform(struct!.status504),
    status_505: cdktf.numberToTerraform(struct!.status505),
    status_506: cdktf.numberToTerraform(struct!.status506),
    status_507: cdktf.numberToTerraform(struct!.status507),
    status_508: cdktf.numberToTerraform(struct!.status508),
    status_509: cdktf.numberToTerraform(struct!.status509),
    status_510: cdktf.numberToTerraform(struct!.status510),
    status_5xx: cdktf.numberToTerraform(struct!.status5Xx),
    status_6xx: cdktf.numberToTerraform(struct!.status6Xx),
    status_unknown: cdktf.numberToTerraform(struct!.statusUnknown),
  }
}


export function dataThunderSlbIcapStatsStatsToHclTerraform(struct?: DataThunderSlbIcapStatsStatsOutputReference | DataThunderSlbIcapStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_serv_conn_err: {
      value: cdktf.numberToHclTerraform(struct!.appServConnErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    app_serv_conn_no_pcb_err: {
      value: cdktf.numberToHclTerraform(struct!.appServConnNoPcbErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chunk1_hdr_err: {
      value: cdktf.numberToHclTerraform(struct!.chunk1HdrErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chunk2_hdr_err: {
      value: cdktf.numberToHclTerraform(struct!.chunk2HdrErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chunk_bad_trail_err: {
      value: cdktf.numberToHclTerraform(struct!.chunkBadTrailErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    chunk_no_allow_204: {
      value: cdktf.numberToHclTerraform(struct!.chunkNoAllow204),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    encap_hdr_incomplete_err: {
      value: cdktf.numberToHclTerraform(struct!.encapHdrIncompleteErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_connect_reqmod_request: {
      value: cdktf.numberToHclTerraform(struct!.httpConnectReqmodRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_resp_hdr_err: {
      value: cdktf.numberToHclTerraform(struct!.httpRespHdrErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_resp_line_parse_err: {
      value: cdktf.numberToHclTerraform(struct!.httpRespLineParseErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_resp_line_read_err: {
      value: cdktf.numberToHclTerraform(struct!.httpRespLineReadErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icap_line_err: {
      value: cdktf.numberToHclTerraform(struct!.icapLineErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icap_ver_err: {
      value: cdktf.numberToHclTerraform(struct!.icapVerErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    len_exceed_no_allow_204: {
      value: cdktf.numberToHclTerraform(struct!.lenExceedNoAllow204),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_icap_resp_err: {
      value: cdktf.numberToHclTerraform(struct!.noIcapRespErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_payload_buff_err: {
      value: cdktf.numberToHclTerraform(struct!.noPayloadBuffErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_payload_next_buff_err: {
      value: cdktf.numberToHclTerraform(struct!.noPayloadNextBuffErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_status_code_err: {
      value: cdktf.numberToHclTerraform(struct!.noStatusCodeErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prep_req_fail_err: {
      value: cdktf.numberToHclTerraform(struct!.prepReqFailErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_option_resp: {
      value: cdktf.numberToHclTerraform(struct!.recvOptionResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_hdr_incomplete_err: {
      value: cdktf.numberToHclTerraform(struct!.reqHdrIncompleteErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reqmod_request: {
      value: cdktf.numberToHclTerraform(struct!.reqmodRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reqmod_request_after_100: {
      value: cdktf.numberToHclTerraform(struct!.reqmodRequestAfter100),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reqmod_response: {
      value: cdktf.numberToHclTerraform(struct!.reqmodResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reqmod_response_after_100: {
      value: cdktf.numberToHclTerraform(struct!.reqmodResponseAfter100),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_hdr_err: {
      value: cdktf.numberToHclTerraform(struct!.respHdrErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_hdr_incomplete_err: {
      value: cdktf.numberToHclTerraform(struct!.respHdrIncompleteErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_line_parse_err: {
      value: cdktf.numberToHclTerraform(struct!.respLineParseErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resp_line_read_err: {
      value: cdktf.numberToHclTerraform(struct!.respLineReadErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    respmod_request: {
      value: cdktf.numberToHclTerraform(struct!.respmodRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    respmod_request_after_100: {
      value: cdktf.numberToHclTerraform(struct!.respmodRequestAfter100),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    respmod_response: {
      value: cdktf.numberToHclTerraform(struct!.respmodResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    respmod_response_after_100: {
      value: cdktf.numberToHclTerraform(struct!.respmodResponseAfter100),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    result_100_continue: {
      value: cdktf.numberToHclTerraform(struct!.result100Continue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    result_continue: {
      value: cdktf.numberToHclTerraform(struct!.resultContinue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    result_icap_response: {
      value: cdktf.numberToHclTerraform(struct!.resultIcapResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    result_other: {
      value: cdktf.numberToHclTerraform(struct!.resultOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_option_req: {
      value: cdktf.numberToHclTerraform(struct!.sendOptionReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    serv_sel_fail_err: {
      value: cdktf.numberToHclTerraform(struct!.servSelFailErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_icap_conn_fail_err: {
      value: cdktf.numberToHclTerraform(struct!.startIcapConnFailErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_100: {
      value: cdktf.numberToHclTerraform(struct!.status100),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_101: {
      value: cdktf.numberToHclTerraform(struct!.status101),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_102: {
      value: cdktf.numberToHclTerraform(struct!.status102),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_1xx: {
      value: cdktf.numberToHclTerraform(struct!.status1Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_200: {
      value: cdktf.numberToHclTerraform(struct!.status200),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_201: {
      value: cdktf.numberToHclTerraform(struct!.status201),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_202: {
      value: cdktf.numberToHclTerraform(struct!.status202),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_203: {
      value: cdktf.numberToHclTerraform(struct!.status203),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_204: {
      value: cdktf.numberToHclTerraform(struct!.status204),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_205: {
      value: cdktf.numberToHclTerraform(struct!.status205),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_206: {
      value: cdktf.numberToHclTerraform(struct!.status206),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_207: {
      value: cdktf.numberToHclTerraform(struct!.status207),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_2xx: {
      value: cdktf.numberToHclTerraform(struct!.status2Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_300: {
      value: cdktf.numberToHclTerraform(struct!.status300),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_301: {
      value: cdktf.numberToHclTerraform(struct!.status301),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_302: {
      value: cdktf.numberToHclTerraform(struct!.status302),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_303: {
      value: cdktf.numberToHclTerraform(struct!.status303),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_304: {
      value: cdktf.numberToHclTerraform(struct!.status304),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_305: {
      value: cdktf.numberToHclTerraform(struct!.status305),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_306: {
      value: cdktf.numberToHclTerraform(struct!.status306),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_307: {
      value: cdktf.numberToHclTerraform(struct!.status307),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_3xx: {
      value: cdktf.numberToHclTerraform(struct!.status3Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_400: {
      value: cdktf.numberToHclTerraform(struct!.status400),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_401: {
      value: cdktf.numberToHclTerraform(struct!.status401),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_402: {
      value: cdktf.numberToHclTerraform(struct!.status402),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_403: {
      value: cdktf.numberToHclTerraform(struct!.status403),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_404: {
      value: cdktf.numberToHclTerraform(struct!.status404),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_405: {
      value: cdktf.numberToHclTerraform(struct!.status405),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_406: {
      value: cdktf.numberToHclTerraform(struct!.status406),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_407: {
      value: cdktf.numberToHclTerraform(struct!.status407),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_408: {
      value: cdktf.numberToHclTerraform(struct!.status408),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_409: {
      value: cdktf.numberToHclTerraform(struct!.status409),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_410: {
      value: cdktf.numberToHclTerraform(struct!.status410),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_411: {
      value: cdktf.numberToHclTerraform(struct!.status411),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_412: {
      value: cdktf.numberToHclTerraform(struct!.status412),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_413: {
      value: cdktf.numberToHclTerraform(struct!.status413),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_414: {
      value: cdktf.numberToHclTerraform(struct!.status414),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_415: {
      value: cdktf.numberToHclTerraform(struct!.status415),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_416: {
      value: cdktf.numberToHclTerraform(struct!.status416),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_417: {
      value: cdktf.numberToHclTerraform(struct!.status417),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_418: {
      value: cdktf.numberToHclTerraform(struct!.status418),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_419: {
      value: cdktf.numberToHclTerraform(struct!.status419),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_420: {
      value: cdktf.numberToHclTerraform(struct!.status420),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_422: {
      value: cdktf.numberToHclTerraform(struct!.status422),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_423: {
      value: cdktf.numberToHclTerraform(struct!.status423),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_424: {
      value: cdktf.numberToHclTerraform(struct!.status424),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_425: {
      value: cdktf.numberToHclTerraform(struct!.status425),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_426: {
      value: cdktf.numberToHclTerraform(struct!.status426),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_449: {
      value: cdktf.numberToHclTerraform(struct!.status449),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_450: {
      value: cdktf.numberToHclTerraform(struct!.status450),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_4xx: {
      value: cdktf.numberToHclTerraform(struct!.status4Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_500: {
      value: cdktf.numberToHclTerraform(struct!.status500),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_501: {
      value: cdktf.numberToHclTerraform(struct!.status501),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_502: {
      value: cdktf.numberToHclTerraform(struct!.status502),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_503: {
      value: cdktf.numberToHclTerraform(struct!.status503),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_504: {
      value: cdktf.numberToHclTerraform(struct!.status504),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_505: {
      value: cdktf.numberToHclTerraform(struct!.status505),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_506: {
      value: cdktf.numberToHclTerraform(struct!.status506),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_507: {
      value: cdktf.numberToHclTerraform(struct!.status507),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_508: {
      value: cdktf.numberToHclTerraform(struct!.status508),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_509: {
      value: cdktf.numberToHclTerraform(struct!.status509),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_510: {
      value: cdktf.numberToHclTerraform(struct!.status510),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_5xx: {
      value: cdktf.numberToHclTerraform(struct!.status5Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_6xx: {
      value: cdktf.numberToHclTerraform(struct!.status6Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status_unknown: {
      value: cdktf.numberToHclTerraform(struct!.statusUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbIcapStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbIcapStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appServConnErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.appServConnErr = this._appServConnErr;
    }
    if (this._appServConnNoPcbErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.appServConnNoPcbErr = this._appServConnNoPcbErr;
    }
    if (this._chunk1HdrErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunk1HdrErr = this._chunk1HdrErr;
    }
    if (this._chunk2HdrErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunk2HdrErr = this._chunk2HdrErr;
    }
    if (this._chunkBadTrailErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkBadTrailErr = this._chunkBadTrailErr;
    }
    if (this._chunkNoAllow204 !== undefined) {
      hasAnyValues = true;
      internalValueResult.chunkNoAllow204 = this._chunkNoAllow204;
    }
    if (this._encapHdrIncompleteErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapHdrIncompleteErr = this._encapHdrIncompleteErr;
    }
    if (this._httpConnectReqmodRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpConnectReqmodRequest = this._httpConnectReqmodRequest;
    }
    if (this._httpRespHdrErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRespHdrErr = this._httpRespHdrErr;
    }
    if (this._httpRespLineParseErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRespLineParseErr = this._httpRespLineParseErr;
    }
    if (this._httpRespLineReadErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpRespLineReadErr = this._httpRespLineReadErr;
    }
    if (this._icapLineErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.icapLineErr = this._icapLineErr;
    }
    if (this._icapVerErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.icapVerErr = this._icapVerErr;
    }
    if (this._lenExceedNoAllow204 !== undefined) {
      hasAnyValues = true;
      internalValueResult.lenExceedNoAllow204 = this._lenExceedNoAllow204;
    }
    if (this._noIcapRespErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.noIcapRespErr = this._noIcapRespErr;
    }
    if (this._noPayloadBuffErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPayloadBuffErr = this._noPayloadBuffErr;
    }
    if (this._noPayloadNextBuffErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPayloadNextBuffErr = this._noPayloadNextBuffErr;
    }
    if (this._noStatusCodeErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.noStatusCodeErr = this._noStatusCodeErr;
    }
    if (this._prepReqFailErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.prepReqFailErr = this._prepReqFailErr;
    }
    if (this._recvOptionResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvOptionResp = this._recvOptionResp;
    }
    if (this._reqHdrIncompleteErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqHdrIncompleteErr = this._reqHdrIncompleteErr;
    }
    if (this._reqmodRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqmodRequest = this._reqmodRequest;
    }
    if (this._reqmodRequestAfter100 !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqmodRequestAfter100 = this._reqmodRequestAfter100;
    }
    if (this._reqmodResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqmodResponse = this._reqmodResponse;
    }
    if (this._reqmodResponseAfter100 !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqmodResponseAfter100 = this._reqmodResponseAfter100;
    }
    if (this._respHdrErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.respHdrErr = this._respHdrErr;
    }
    if (this._respHdrIncompleteErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.respHdrIncompleteErr = this._respHdrIncompleteErr;
    }
    if (this._respLineParseErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.respLineParseErr = this._respLineParseErr;
    }
    if (this._respLineReadErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.respLineReadErr = this._respLineReadErr;
    }
    if (this._respmodRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.respmodRequest = this._respmodRequest;
    }
    if (this._respmodRequestAfter100 !== undefined) {
      hasAnyValues = true;
      internalValueResult.respmodRequestAfter100 = this._respmodRequestAfter100;
    }
    if (this._respmodResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.respmodResponse = this._respmodResponse;
    }
    if (this._respmodResponseAfter100 !== undefined) {
      hasAnyValues = true;
      internalValueResult.respmodResponseAfter100 = this._respmodResponseAfter100;
    }
    if (this._result100Continue !== undefined) {
      hasAnyValues = true;
      internalValueResult.result100Continue = this._result100Continue;
    }
    if (this._resultContinue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultContinue = this._resultContinue;
    }
    if (this._resultIcapResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultIcapResponse = this._resultIcapResponse;
    }
    if (this._resultOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.resultOther = this._resultOther;
    }
    if (this._sendOptionReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendOptionReq = this._sendOptionReq;
    }
    if (this._servSelFailErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.servSelFailErr = this._servSelFailErr;
    }
    if (this._startIcapConnFailErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIcapConnFailErr = this._startIcapConnFailErr;
    }
    if (this._status100 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status100 = this._status100;
    }
    if (this._status101 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status101 = this._status101;
    }
    if (this._status102 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status102 = this._status102;
    }
    if (this._status1Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.status1Xx = this._status1Xx;
    }
    if (this._status200 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status200 = this._status200;
    }
    if (this._status201 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status201 = this._status201;
    }
    if (this._status202 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status202 = this._status202;
    }
    if (this._status203 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status203 = this._status203;
    }
    if (this._status204 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status204 = this._status204;
    }
    if (this._status205 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status205 = this._status205;
    }
    if (this._status206 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status206 = this._status206;
    }
    if (this._status207 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status207 = this._status207;
    }
    if (this._status2Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.status2Xx = this._status2Xx;
    }
    if (this._status300 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status300 = this._status300;
    }
    if (this._status301 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status301 = this._status301;
    }
    if (this._status302 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status302 = this._status302;
    }
    if (this._status303 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status303 = this._status303;
    }
    if (this._status304 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status304 = this._status304;
    }
    if (this._status305 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status305 = this._status305;
    }
    if (this._status306 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status306 = this._status306;
    }
    if (this._status307 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status307 = this._status307;
    }
    if (this._status3Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.status3Xx = this._status3Xx;
    }
    if (this._status400 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status400 = this._status400;
    }
    if (this._status401 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status401 = this._status401;
    }
    if (this._status402 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status402 = this._status402;
    }
    if (this._status403 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status403 = this._status403;
    }
    if (this._status404 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status404 = this._status404;
    }
    if (this._status405 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status405 = this._status405;
    }
    if (this._status406 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status406 = this._status406;
    }
    if (this._status407 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status407 = this._status407;
    }
    if (this._status408 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status408 = this._status408;
    }
    if (this._status409 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status409 = this._status409;
    }
    if (this._status410 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status410 = this._status410;
    }
    if (this._status411 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status411 = this._status411;
    }
    if (this._status412 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status412 = this._status412;
    }
    if (this._status413 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status413 = this._status413;
    }
    if (this._status414 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status414 = this._status414;
    }
    if (this._status415 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status415 = this._status415;
    }
    if (this._status416 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status416 = this._status416;
    }
    if (this._status417 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status417 = this._status417;
    }
    if (this._status418 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status418 = this._status418;
    }
    if (this._status419 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status419 = this._status419;
    }
    if (this._status420 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status420 = this._status420;
    }
    if (this._status422 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status422 = this._status422;
    }
    if (this._status423 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status423 = this._status423;
    }
    if (this._status424 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status424 = this._status424;
    }
    if (this._status425 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status425 = this._status425;
    }
    if (this._status426 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status426 = this._status426;
    }
    if (this._status449 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status449 = this._status449;
    }
    if (this._status450 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status450 = this._status450;
    }
    if (this._status4Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.status4Xx = this._status4Xx;
    }
    if (this._status500 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status500 = this._status500;
    }
    if (this._status501 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status501 = this._status501;
    }
    if (this._status502 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status502 = this._status502;
    }
    if (this._status503 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status503 = this._status503;
    }
    if (this._status504 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status504 = this._status504;
    }
    if (this._status505 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status505 = this._status505;
    }
    if (this._status506 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status506 = this._status506;
    }
    if (this._status507 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status507 = this._status507;
    }
    if (this._status508 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status508 = this._status508;
    }
    if (this._status509 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status509 = this._status509;
    }
    if (this._status510 !== undefined) {
      hasAnyValues = true;
      internalValueResult.status510 = this._status510;
    }
    if (this._status5Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.status5Xx = this._status5Xx;
    }
    if (this._status6Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.status6Xx = this._status6Xx;
    }
    if (this._statusUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusUnknown = this._statusUnknown;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbIcapStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appServConnErr = undefined;
      this._appServConnNoPcbErr = undefined;
      this._chunk1HdrErr = undefined;
      this._chunk2HdrErr = undefined;
      this._chunkBadTrailErr = undefined;
      this._chunkNoAllow204 = undefined;
      this._encapHdrIncompleteErr = undefined;
      this._httpConnectReqmodRequest = undefined;
      this._httpRespHdrErr = undefined;
      this._httpRespLineParseErr = undefined;
      this._httpRespLineReadErr = undefined;
      this._icapLineErr = undefined;
      this._icapVerErr = undefined;
      this._lenExceedNoAllow204 = undefined;
      this._noIcapRespErr = undefined;
      this._noPayloadBuffErr = undefined;
      this._noPayloadNextBuffErr = undefined;
      this._noStatusCodeErr = undefined;
      this._prepReqFailErr = undefined;
      this._recvOptionResp = undefined;
      this._reqHdrIncompleteErr = undefined;
      this._reqmodRequest = undefined;
      this._reqmodRequestAfter100 = undefined;
      this._reqmodResponse = undefined;
      this._reqmodResponseAfter100 = undefined;
      this._respHdrErr = undefined;
      this._respHdrIncompleteErr = undefined;
      this._respLineParseErr = undefined;
      this._respLineReadErr = undefined;
      this._respmodRequest = undefined;
      this._respmodRequestAfter100 = undefined;
      this._respmodResponse = undefined;
      this._respmodResponseAfter100 = undefined;
      this._result100Continue = undefined;
      this._resultContinue = undefined;
      this._resultIcapResponse = undefined;
      this._resultOther = undefined;
      this._sendOptionReq = undefined;
      this._servSelFailErr = undefined;
      this._startIcapConnFailErr = undefined;
      this._status100 = undefined;
      this._status101 = undefined;
      this._status102 = undefined;
      this._status1Xx = undefined;
      this._status200 = undefined;
      this._status201 = undefined;
      this._status202 = undefined;
      this._status203 = undefined;
      this._status204 = undefined;
      this._status205 = undefined;
      this._status206 = undefined;
      this._status207 = undefined;
      this._status2Xx = undefined;
      this._status300 = undefined;
      this._status301 = undefined;
      this._status302 = undefined;
      this._status303 = undefined;
      this._status304 = undefined;
      this._status305 = undefined;
      this._status306 = undefined;
      this._status307 = undefined;
      this._status3Xx = undefined;
      this._status400 = undefined;
      this._status401 = undefined;
      this._status402 = undefined;
      this._status403 = undefined;
      this._status404 = undefined;
      this._status405 = undefined;
      this._status406 = undefined;
      this._status407 = undefined;
      this._status408 = undefined;
      this._status409 = undefined;
      this._status410 = undefined;
      this._status411 = undefined;
      this._status412 = undefined;
      this._status413 = undefined;
      this._status414 = undefined;
      this._status415 = undefined;
      this._status416 = undefined;
      this._status417 = undefined;
      this._status418 = undefined;
      this._status419 = undefined;
      this._status420 = undefined;
      this._status422 = undefined;
      this._status423 = undefined;
      this._status424 = undefined;
      this._status425 = undefined;
      this._status426 = undefined;
      this._status449 = undefined;
      this._status450 = undefined;
      this._status4Xx = undefined;
      this._status500 = undefined;
      this._status501 = undefined;
      this._status502 = undefined;
      this._status503 = undefined;
      this._status504 = undefined;
      this._status505 = undefined;
      this._status506 = undefined;
      this._status507 = undefined;
      this._status508 = undefined;
      this._status509 = undefined;
      this._status510 = undefined;
      this._status5Xx = undefined;
      this._status6Xx = undefined;
      this._statusUnknown = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appServConnErr = value.appServConnErr;
      this._appServConnNoPcbErr = value.appServConnNoPcbErr;
      this._chunk1HdrErr = value.chunk1HdrErr;
      this._chunk2HdrErr = value.chunk2HdrErr;
      this._chunkBadTrailErr = value.chunkBadTrailErr;
      this._chunkNoAllow204 = value.chunkNoAllow204;
      this._encapHdrIncompleteErr = value.encapHdrIncompleteErr;
      this._httpConnectReqmodRequest = value.httpConnectReqmodRequest;
      this._httpRespHdrErr = value.httpRespHdrErr;
      this._httpRespLineParseErr = value.httpRespLineParseErr;
      this._httpRespLineReadErr = value.httpRespLineReadErr;
      this._icapLineErr = value.icapLineErr;
      this._icapVerErr = value.icapVerErr;
      this._lenExceedNoAllow204 = value.lenExceedNoAllow204;
      this._noIcapRespErr = value.noIcapRespErr;
      this._noPayloadBuffErr = value.noPayloadBuffErr;
      this._noPayloadNextBuffErr = value.noPayloadNextBuffErr;
      this._noStatusCodeErr = value.noStatusCodeErr;
      this._prepReqFailErr = value.prepReqFailErr;
      this._recvOptionResp = value.recvOptionResp;
      this._reqHdrIncompleteErr = value.reqHdrIncompleteErr;
      this._reqmodRequest = value.reqmodRequest;
      this._reqmodRequestAfter100 = value.reqmodRequestAfter100;
      this._reqmodResponse = value.reqmodResponse;
      this._reqmodResponseAfter100 = value.reqmodResponseAfter100;
      this._respHdrErr = value.respHdrErr;
      this._respHdrIncompleteErr = value.respHdrIncompleteErr;
      this._respLineParseErr = value.respLineParseErr;
      this._respLineReadErr = value.respLineReadErr;
      this._respmodRequest = value.respmodRequest;
      this._respmodRequestAfter100 = value.respmodRequestAfter100;
      this._respmodResponse = value.respmodResponse;
      this._respmodResponseAfter100 = value.respmodResponseAfter100;
      this._result100Continue = value.result100Continue;
      this._resultContinue = value.resultContinue;
      this._resultIcapResponse = value.resultIcapResponse;
      this._resultOther = value.resultOther;
      this._sendOptionReq = value.sendOptionReq;
      this._servSelFailErr = value.servSelFailErr;
      this._startIcapConnFailErr = value.startIcapConnFailErr;
      this._status100 = value.status100;
      this._status101 = value.status101;
      this._status102 = value.status102;
      this._status1Xx = value.status1Xx;
      this._status200 = value.status200;
      this._status201 = value.status201;
      this._status202 = value.status202;
      this._status203 = value.status203;
      this._status204 = value.status204;
      this._status205 = value.status205;
      this._status206 = value.status206;
      this._status207 = value.status207;
      this._status2Xx = value.status2Xx;
      this._status300 = value.status300;
      this._status301 = value.status301;
      this._status302 = value.status302;
      this._status303 = value.status303;
      this._status304 = value.status304;
      this._status305 = value.status305;
      this._status306 = value.status306;
      this._status307 = value.status307;
      this._status3Xx = value.status3Xx;
      this._status400 = value.status400;
      this._status401 = value.status401;
      this._status402 = value.status402;
      this._status403 = value.status403;
      this._status404 = value.status404;
      this._status405 = value.status405;
      this._status406 = value.status406;
      this._status407 = value.status407;
      this._status408 = value.status408;
      this._status409 = value.status409;
      this._status410 = value.status410;
      this._status411 = value.status411;
      this._status412 = value.status412;
      this._status413 = value.status413;
      this._status414 = value.status414;
      this._status415 = value.status415;
      this._status416 = value.status416;
      this._status417 = value.status417;
      this._status418 = value.status418;
      this._status419 = value.status419;
      this._status420 = value.status420;
      this._status422 = value.status422;
      this._status423 = value.status423;
      this._status424 = value.status424;
      this._status425 = value.status425;
      this._status426 = value.status426;
      this._status449 = value.status449;
      this._status450 = value.status450;
      this._status4Xx = value.status4Xx;
      this._status500 = value.status500;
      this._status501 = value.status501;
      this._status502 = value.status502;
      this._status503 = value.status503;
      this._status504 = value.status504;
      this._status505 = value.status505;
      this._status506 = value.status506;
      this._status507 = value.status507;
      this._status508 = value.status508;
      this._status509 = value.status509;
      this._status510 = value.status510;
      this._status5Xx = value.status5Xx;
      this._status6Xx = value.status6Xx;
      this._statusUnknown = value.statusUnknown;
    }
  }

  // app_serv_conn_err - computed: false, optional: true, required: false
  private _appServConnErr?: number; 
  public get appServConnErr() {
    return this.getNumberAttribute('app_serv_conn_err');
  }
  public set appServConnErr(value: number) {
    this._appServConnErr = value;
  }
  public resetAppServConnErr() {
    this._appServConnErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appServConnErrInput() {
    return this._appServConnErr;
  }

  // app_serv_conn_no_pcb_err - computed: false, optional: true, required: false
  private _appServConnNoPcbErr?: number; 
  public get appServConnNoPcbErr() {
    return this.getNumberAttribute('app_serv_conn_no_pcb_err');
  }
  public set appServConnNoPcbErr(value: number) {
    this._appServConnNoPcbErr = value;
  }
  public resetAppServConnNoPcbErr() {
    this._appServConnNoPcbErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appServConnNoPcbErrInput() {
    return this._appServConnNoPcbErr;
  }

  // chunk1_hdr_err - computed: false, optional: true, required: false
  private _chunk1HdrErr?: number; 
  public get chunk1HdrErr() {
    return this.getNumberAttribute('chunk1_hdr_err');
  }
  public set chunk1HdrErr(value: number) {
    this._chunk1HdrErr = value;
  }
  public resetChunk1HdrErr() {
    this._chunk1HdrErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunk1HdrErrInput() {
    return this._chunk1HdrErr;
  }

  // chunk2_hdr_err - computed: false, optional: true, required: false
  private _chunk2HdrErr?: number; 
  public get chunk2HdrErr() {
    return this.getNumberAttribute('chunk2_hdr_err');
  }
  public set chunk2HdrErr(value: number) {
    this._chunk2HdrErr = value;
  }
  public resetChunk2HdrErr() {
    this._chunk2HdrErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunk2HdrErrInput() {
    return this._chunk2HdrErr;
  }

  // chunk_bad_trail_err - computed: false, optional: true, required: false
  private _chunkBadTrailErr?: number; 
  public get chunkBadTrailErr() {
    return this.getNumberAttribute('chunk_bad_trail_err');
  }
  public set chunkBadTrailErr(value: number) {
    this._chunkBadTrailErr = value;
  }
  public resetChunkBadTrailErr() {
    this._chunkBadTrailErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkBadTrailErrInput() {
    return this._chunkBadTrailErr;
  }

  // chunk_no_allow_204 - computed: false, optional: true, required: false
  private _chunkNoAllow204?: number; 
  public get chunkNoAllow204() {
    return this.getNumberAttribute('chunk_no_allow_204');
  }
  public set chunkNoAllow204(value: number) {
    this._chunkNoAllow204 = value;
  }
  public resetChunkNoAllow204() {
    this._chunkNoAllow204 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkNoAllow204Input() {
    return this._chunkNoAllow204;
  }

  // encap_hdr_incomplete_err - computed: false, optional: true, required: false
  private _encapHdrIncompleteErr?: number; 
  public get encapHdrIncompleteErr() {
    return this.getNumberAttribute('encap_hdr_incomplete_err');
  }
  public set encapHdrIncompleteErr(value: number) {
    this._encapHdrIncompleteErr = value;
  }
  public resetEncapHdrIncompleteErr() {
    this._encapHdrIncompleteErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encapHdrIncompleteErrInput() {
    return this._encapHdrIncompleteErr;
  }

  // http_connect_reqmod_request - computed: false, optional: true, required: false
  private _httpConnectReqmodRequest?: number; 
  public get httpConnectReqmodRequest() {
    return this.getNumberAttribute('http_connect_reqmod_request');
  }
  public set httpConnectReqmodRequest(value: number) {
    this._httpConnectReqmodRequest = value;
  }
  public resetHttpConnectReqmodRequest() {
    this._httpConnectReqmodRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConnectReqmodRequestInput() {
    return this._httpConnectReqmodRequest;
  }

  // http_resp_hdr_err - computed: false, optional: true, required: false
  private _httpRespHdrErr?: number; 
  public get httpRespHdrErr() {
    return this.getNumberAttribute('http_resp_hdr_err');
  }
  public set httpRespHdrErr(value: number) {
    this._httpRespHdrErr = value;
  }
  public resetHttpRespHdrErr() {
    this._httpRespHdrErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRespHdrErrInput() {
    return this._httpRespHdrErr;
  }

  // http_resp_line_parse_err - computed: false, optional: true, required: false
  private _httpRespLineParseErr?: number; 
  public get httpRespLineParseErr() {
    return this.getNumberAttribute('http_resp_line_parse_err');
  }
  public set httpRespLineParseErr(value: number) {
    this._httpRespLineParseErr = value;
  }
  public resetHttpRespLineParseErr() {
    this._httpRespLineParseErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRespLineParseErrInput() {
    return this._httpRespLineParseErr;
  }

  // http_resp_line_read_err - computed: false, optional: true, required: false
  private _httpRespLineReadErr?: number; 
  public get httpRespLineReadErr() {
    return this.getNumberAttribute('http_resp_line_read_err');
  }
  public set httpRespLineReadErr(value: number) {
    this._httpRespLineReadErr = value;
  }
  public resetHttpRespLineReadErr() {
    this._httpRespLineReadErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpRespLineReadErrInput() {
    return this._httpRespLineReadErr;
  }

  // icap_line_err - computed: false, optional: true, required: false
  private _icapLineErr?: number; 
  public get icapLineErr() {
    return this.getNumberAttribute('icap_line_err');
  }
  public set icapLineErr(value: number) {
    this._icapLineErr = value;
  }
  public resetIcapLineErr() {
    this._icapLineErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icapLineErrInput() {
    return this._icapLineErr;
  }

  // icap_ver_err - computed: false, optional: true, required: false
  private _icapVerErr?: number; 
  public get icapVerErr() {
    return this.getNumberAttribute('icap_ver_err');
  }
  public set icapVerErr(value: number) {
    this._icapVerErr = value;
  }
  public resetIcapVerErr() {
    this._icapVerErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icapVerErrInput() {
    return this._icapVerErr;
  }

  // len_exceed_no_allow_204 - computed: false, optional: true, required: false
  private _lenExceedNoAllow204?: number; 
  public get lenExceedNoAllow204() {
    return this.getNumberAttribute('len_exceed_no_allow_204');
  }
  public set lenExceedNoAllow204(value: number) {
    this._lenExceedNoAllow204 = value;
  }
  public resetLenExceedNoAllow204() {
    this._lenExceedNoAllow204 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lenExceedNoAllow204Input() {
    return this._lenExceedNoAllow204;
  }

  // no_icap_resp_err - computed: false, optional: true, required: false
  private _noIcapRespErr?: number; 
  public get noIcapRespErr() {
    return this.getNumberAttribute('no_icap_resp_err');
  }
  public set noIcapRespErr(value: number) {
    this._noIcapRespErr = value;
  }
  public resetNoIcapRespErr() {
    this._noIcapRespErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noIcapRespErrInput() {
    return this._noIcapRespErr;
  }

  // no_payload_buff_err - computed: false, optional: true, required: false
  private _noPayloadBuffErr?: number; 
  public get noPayloadBuffErr() {
    return this.getNumberAttribute('no_payload_buff_err');
  }
  public set noPayloadBuffErr(value: number) {
    this._noPayloadBuffErr = value;
  }
  public resetNoPayloadBuffErr() {
    this._noPayloadBuffErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPayloadBuffErrInput() {
    return this._noPayloadBuffErr;
  }

  // no_payload_next_buff_err - computed: false, optional: true, required: false
  private _noPayloadNextBuffErr?: number; 
  public get noPayloadNextBuffErr() {
    return this.getNumberAttribute('no_payload_next_buff_err');
  }
  public set noPayloadNextBuffErr(value: number) {
    this._noPayloadNextBuffErr = value;
  }
  public resetNoPayloadNextBuffErr() {
    this._noPayloadNextBuffErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPayloadNextBuffErrInput() {
    return this._noPayloadNextBuffErr;
  }

  // no_status_code_err - computed: false, optional: true, required: false
  private _noStatusCodeErr?: number; 
  public get noStatusCodeErr() {
    return this.getNumberAttribute('no_status_code_err');
  }
  public set noStatusCodeErr(value: number) {
    this._noStatusCodeErr = value;
  }
  public resetNoStatusCodeErr() {
    this._noStatusCodeErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noStatusCodeErrInput() {
    return this._noStatusCodeErr;
  }

  // prep_req_fail_err - computed: false, optional: true, required: false
  private _prepReqFailErr?: number; 
  public get prepReqFailErr() {
    return this.getNumberAttribute('prep_req_fail_err');
  }
  public set prepReqFailErr(value: number) {
    this._prepReqFailErr = value;
  }
  public resetPrepReqFailErr() {
    this._prepReqFailErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prepReqFailErrInput() {
    return this._prepReqFailErr;
  }

  // recv_option_resp - computed: false, optional: true, required: false
  private _recvOptionResp?: number; 
  public get recvOptionResp() {
    return this.getNumberAttribute('recv_option_resp');
  }
  public set recvOptionResp(value: number) {
    this._recvOptionResp = value;
  }
  public resetRecvOptionResp() {
    this._recvOptionResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvOptionRespInput() {
    return this._recvOptionResp;
  }

  // req_hdr_incomplete_err - computed: false, optional: true, required: false
  private _reqHdrIncompleteErr?: number; 
  public get reqHdrIncompleteErr() {
    return this.getNumberAttribute('req_hdr_incomplete_err');
  }
  public set reqHdrIncompleteErr(value: number) {
    this._reqHdrIncompleteErr = value;
  }
  public resetReqHdrIncompleteErr() {
    this._reqHdrIncompleteErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqHdrIncompleteErrInput() {
    return this._reqHdrIncompleteErr;
  }

  // reqmod_request - computed: false, optional: true, required: false
  private _reqmodRequest?: number; 
  public get reqmodRequest() {
    return this.getNumberAttribute('reqmod_request');
  }
  public set reqmodRequest(value: number) {
    this._reqmodRequest = value;
  }
  public resetReqmodRequest() {
    this._reqmodRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqmodRequestInput() {
    return this._reqmodRequest;
  }

  // reqmod_request_after_100 - computed: false, optional: true, required: false
  private _reqmodRequestAfter100?: number; 
  public get reqmodRequestAfter100() {
    return this.getNumberAttribute('reqmod_request_after_100');
  }
  public set reqmodRequestAfter100(value: number) {
    this._reqmodRequestAfter100 = value;
  }
  public resetReqmodRequestAfter100() {
    this._reqmodRequestAfter100 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqmodRequestAfter100Input() {
    return this._reqmodRequestAfter100;
  }

  // reqmod_response - computed: false, optional: true, required: false
  private _reqmodResponse?: number; 
  public get reqmodResponse() {
    return this.getNumberAttribute('reqmod_response');
  }
  public set reqmodResponse(value: number) {
    this._reqmodResponse = value;
  }
  public resetReqmodResponse() {
    this._reqmodResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqmodResponseInput() {
    return this._reqmodResponse;
  }

  // reqmod_response_after_100 - computed: false, optional: true, required: false
  private _reqmodResponseAfter100?: number; 
  public get reqmodResponseAfter100() {
    return this.getNumberAttribute('reqmod_response_after_100');
  }
  public set reqmodResponseAfter100(value: number) {
    this._reqmodResponseAfter100 = value;
  }
  public resetReqmodResponseAfter100() {
    this._reqmodResponseAfter100 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqmodResponseAfter100Input() {
    return this._reqmodResponseAfter100;
  }

  // resp_hdr_err - computed: false, optional: true, required: false
  private _respHdrErr?: number; 
  public get respHdrErr() {
    return this.getNumberAttribute('resp_hdr_err');
  }
  public set respHdrErr(value: number) {
    this._respHdrErr = value;
  }
  public resetRespHdrErr() {
    this._respHdrErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respHdrErrInput() {
    return this._respHdrErr;
  }

  // resp_hdr_incomplete_err - computed: false, optional: true, required: false
  private _respHdrIncompleteErr?: number; 
  public get respHdrIncompleteErr() {
    return this.getNumberAttribute('resp_hdr_incomplete_err');
  }
  public set respHdrIncompleteErr(value: number) {
    this._respHdrIncompleteErr = value;
  }
  public resetRespHdrIncompleteErr() {
    this._respHdrIncompleteErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respHdrIncompleteErrInput() {
    return this._respHdrIncompleteErr;
  }

  // resp_line_parse_err - computed: false, optional: true, required: false
  private _respLineParseErr?: number; 
  public get respLineParseErr() {
    return this.getNumberAttribute('resp_line_parse_err');
  }
  public set respLineParseErr(value: number) {
    this._respLineParseErr = value;
  }
  public resetRespLineParseErr() {
    this._respLineParseErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respLineParseErrInput() {
    return this._respLineParseErr;
  }

  // resp_line_read_err - computed: false, optional: true, required: false
  private _respLineReadErr?: number; 
  public get respLineReadErr() {
    return this.getNumberAttribute('resp_line_read_err');
  }
  public set respLineReadErr(value: number) {
    this._respLineReadErr = value;
  }
  public resetRespLineReadErr() {
    this._respLineReadErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respLineReadErrInput() {
    return this._respLineReadErr;
  }

  // respmod_request - computed: false, optional: true, required: false
  private _respmodRequest?: number; 
  public get respmodRequest() {
    return this.getNumberAttribute('respmod_request');
  }
  public set respmodRequest(value: number) {
    this._respmodRequest = value;
  }
  public resetRespmodRequest() {
    this._respmodRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respmodRequestInput() {
    return this._respmodRequest;
  }

  // respmod_request_after_100 - computed: false, optional: true, required: false
  private _respmodRequestAfter100?: number; 
  public get respmodRequestAfter100() {
    return this.getNumberAttribute('respmod_request_after_100');
  }
  public set respmodRequestAfter100(value: number) {
    this._respmodRequestAfter100 = value;
  }
  public resetRespmodRequestAfter100() {
    this._respmodRequestAfter100 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respmodRequestAfter100Input() {
    return this._respmodRequestAfter100;
  }

  // respmod_response - computed: false, optional: true, required: false
  private _respmodResponse?: number; 
  public get respmodResponse() {
    return this.getNumberAttribute('respmod_response');
  }
  public set respmodResponse(value: number) {
    this._respmodResponse = value;
  }
  public resetRespmodResponse() {
    this._respmodResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respmodResponseInput() {
    return this._respmodResponse;
  }

  // respmod_response_after_100 - computed: false, optional: true, required: false
  private _respmodResponseAfter100?: number; 
  public get respmodResponseAfter100() {
    return this.getNumberAttribute('respmod_response_after_100');
  }
  public set respmodResponseAfter100(value: number) {
    this._respmodResponseAfter100 = value;
  }
  public resetRespmodResponseAfter100() {
    this._respmodResponseAfter100 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respmodResponseAfter100Input() {
    return this._respmodResponseAfter100;
  }

  // result_100_continue - computed: false, optional: true, required: false
  private _result100Continue?: number; 
  public get result100Continue() {
    return this.getNumberAttribute('result_100_continue');
  }
  public set result100Continue(value: number) {
    this._result100Continue = value;
  }
  public resetResult100Continue() {
    this._result100Continue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get result100ContinueInput() {
    return this._result100Continue;
  }

  // result_continue - computed: false, optional: true, required: false
  private _resultContinue?: number; 
  public get resultContinue() {
    return this.getNumberAttribute('result_continue');
  }
  public set resultContinue(value: number) {
    this._resultContinue = value;
  }
  public resetResultContinue() {
    this._resultContinue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultContinueInput() {
    return this._resultContinue;
  }

  // result_icap_response - computed: false, optional: true, required: false
  private _resultIcapResponse?: number; 
  public get resultIcapResponse() {
    return this.getNumberAttribute('result_icap_response');
  }
  public set resultIcapResponse(value: number) {
    this._resultIcapResponse = value;
  }
  public resetResultIcapResponse() {
    this._resultIcapResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultIcapResponseInput() {
    return this._resultIcapResponse;
  }

  // result_other - computed: false, optional: true, required: false
  private _resultOther?: number; 
  public get resultOther() {
    return this.getNumberAttribute('result_other');
  }
  public set resultOther(value: number) {
    this._resultOther = value;
  }
  public resetResultOther() {
    this._resultOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOtherInput() {
    return this._resultOther;
  }

  // send_option_req - computed: false, optional: true, required: false
  private _sendOptionReq?: number; 
  public get sendOptionReq() {
    return this.getNumberAttribute('send_option_req');
  }
  public set sendOptionReq(value: number) {
    this._sendOptionReq = value;
  }
  public resetSendOptionReq() {
    this._sendOptionReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendOptionReqInput() {
    return this._sendOptionReq;
  }

  // serv_sel_fail_err - computed: false, optional: true, required: false
  private _servSelFailErr?: number; 
  public get servSelFailErr() {
    return this.getNumberAttribute('serv_sel_fail_err');
  }
  public set servSelFailErr(value: number) {
    this._servSelFailErr = value;
  }
  public resetServSelFailErr() {
    this._servSelFailErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servSelFailErrInput() {
    return this._servSelFailErr;
  }

  // start_icap_conn_fail_err - computed: false, optional: true, required: false
  private _startIcapConnFailErr?: number; 
  public get startIcapConnFailErr() {
    return this.getNumberAttribute('start_icap_conn_fail_err');
  }
  public set startIcapConnFailErr(value: number) {
    this._startIcapConnFailErr = value;
  }
  public resetStartIcapConnFailErr() {
    this._startIcapConnFailErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startIcapConnFailErrInput() {
    return this._startIcapConnFailErr;
  }

  // status_100 - computed: false, optional: true, required: false
  private _status100?: number; 
  public get status100() {
    return this.getNumberAttribute('status_100');
  }
  public set status100(value: number) {
    this._status100 = value;
  }
  public resetStatus100() {
    this._status100 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status100Input() {
    return this._status100;
  }

  // status_101 - computed: false, optional: true, required: false
  private _status101?: number; 
  public get status101() {
    return this.getNumberAttribute('status_101');
  }
  public set status101(value: number) {
    this._status101 = value;
  }
  public resetStatus101() {
    this._status101 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status101Input() {
    return this._status101;
  }

  // status_102 - computed: false, optional: true, required: false
  private _status102?: number; 
  public get status102() {
    return this.getNumberAttribute('status_102');
  }
  public set status102(value: number) {
    this._status102 = value;
  }
  public resetStatus102() {
    this._status102 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status102Input() {
    return this._status102;
  }

  // status_1xx - computed: false, optional: true, required: false
  private _status1Xx?: number; 
  public get status1Xx() {
    return this.getNumberAttribute('status_1xx');
  }
  public set status1Xx(value: number) {
    this._status1Xx = value;
  }
  public resetStatus1Xx() {
    this._status1Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status1XxInput() {
    return this._status1Xx;
  }

  // status_200 - computed: false, optional: true, required: false
  private _status200?: number; 
  public get status200() {
    return this.getNumberAttribute('status_200');
  }
  public set status200(value: number) {
    this._status200 = value;
  }
  public resetStatus200() {
    this._status200 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status200Input() {
    return this._status200;
  }

  // status_201 - computed: false, optional: true, required: false
  private _status201?: number; 
  public get status201() {
    return this.getNumberAttribute('status_201');
  }
  public set status201(value: number) {
    this._status201 = value;
  }
  public resetStatus201() {
    this._status201 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status201Input() {
    return this._status201;
  }

  // status_202 - computed: false, optional: true, required: false
  private _status202?: number; 
  public get status202() {
    return this.getNumberAttribute('status_202');
  }
  public set status202(value: number) {
    this._status202 = value;
  }
  public resetStatus202() {
    this._status202 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status202Input() {
    return this._status202;
  }

  // status_203 - computed: false, optional: true, required: false
  private _status203?: number; 
  public get status203() {
    return this.getNumberAttribute('status_203');
  }
  public set status203(value: number) {
    this._status203 = value;
  }
  public resetStatus203() {
    this._status203 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status203Input() {
    return this._status203;
  }

  // status_204 - computed: false, optional: true, required: false
  private _status204?: number; 
  public get status204() {
    return this.getNumberAttribute('status_204');
  }
  public set status204(value: number) {
    this._status204 = value;
  }
  public resetStatus204() {
    this._status204 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status204Input() {
    return this._status204;
  }

  // status_205 - computed: false, optional: true, required: false
  private _status205?: number; 
  public get status205() {
    return this.getNumberAttribute('status_205');
  }
  public set status205(value: number) {
    this._status205 = value;
  }
  public resetStatus205() {
    this._status205 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status205Input() {
    return this._status205;
  }

  // status_206 - computed: false, optional: true, required: false
  private _status206?: number; 
  public get status206() {
    return this.getNumberAttribute('status_206');
  }
  public set status206(value: number) {
    this._status206 = value;
  }
  public resetStatus206() {
    this._status206 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status206Input() {
    return this._status206;
  }

  // status_207 - computed: false, optional: true, required: false
  private _status207?: number; 
  public get status207() {
    return this.getNumberAttribute('status_207');
  }
  public set status207(value: number) {
    this._status207 = value;
  }
  public resetStatus207() {
    this._status207 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status207Input() {
    return this._status207;
  }

  // status_2xx - computed: false, optional: true, required: false
  private _status2Xx?: number; 
  public get status2Xx() {
    return this.getNumberAttribute('status_2xx');
  }
  public set status2Xx(value: number) {
    this._status2Xx = value;
  }
  public resetStatus2Xx() {
    this._status2Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status2XxInput() {
    return this._status2Xx;
  }

  // status_300 - computed: false, optional: true, required: false
  private _status300?: number; 
  public get status300() {
    return this.getNumberAttribute('status_300');
  }
  public set status300(value: number) {
    this._status300 = value;
  }
  public resetStatus300() {
    this._status300 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status300Input() {
    return this._status300;
  }

  // status_301 - computed: false, optional: true, required: false
  private _status301?: number; 
  public get status301() {
    return this.getNumberAttribute('status_301');
  }
  public set status301(value: number) {
    this._status301 = value;
  }
  public resetStatus301() {
    this._status301 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status301Input() {
    return this._status301;
  }

  // status_302 - computed: false, optional: true, required: false
  private _status302?: number; 
  public get status302() {
    return this.getNumberAttribute('status_302');
  }
  public set status302(value: number) {
    this._status302 = value;
  }
  public resetStatus302() {
    this._status302 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status302Input() {
    return this._status302;
  }

  // status_303 - computed: false, optional: true, required: false
  private _status303?: number; 
  public get status303() {
    return this.getNumberAttribute('status_303');
  }
  public set status303(value: number) {
    this._status303 = value;
  }
  public resetStatus303() {
    this._status303 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status303Input() {
    return this._status303;
  }

  // status_304 - computed: false, optional: true, required: false
  private _status304?: number; 
  public get status304() {
    return this.getNumberAttribute('status_304');
  }
  public set status304(value: number) {
    this._status304 = value;
  }
  public resetStatus304() {
    this._status304 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status304Input() {
    return this._status304;
  }

  // status_305 - computed: false, optional: true, required: false
  private _status305?: number; 
  public get status305() {
    return this.getNumberAttribute('status_305');
  }
  public set status305(value: number) {
    this._status305 = value;
  }
  public resetStatus305() {
    this._status305 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status305Input() {
    return this._status305;
  }

  // status_306 - computed: false, optional: true, required: false
  private _status306?: number; 
  public get status306() {
    return this.getNumberAttribute('status_306');
  }
  public set status306(value: number) {
    this._status306 = value;
  }
  public resetStatus306() {
    this._status306 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status306Input() {
    return this._status306;
  }

  // status_307 - computed: false, optional: true, required: false
  private _status307?: number; 
  public get status307() {
    return this.getNumberAttribute('status_307');
  }
  public set status307(value: number) {
    this._status307 = value;
  }
  public resetStatus307() {
    this._status307 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status307Input() {
    return this._status307;
  }

  // status_3xx - computed: false, optional: true, required: false
  private _status3Xx?: number; 
  public get status3Xx() {
    return this.getNumberAttribute('status_3xx');
  }
  public set status3Xx(value: number) {
    this._status3Xx = value;
  }
  public resetStatus3Xx() {
    this._status3Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status3XxInput() {
    return this._status3Xx;
  }

  // status_400 - computed: false, optional: true, required: false
  private _status400?: number; 
  public get status400() {
    return this.getNumberAttribute('status_400');
  }
  public set status400(value: number) {
    this._status400 = value;
  }
  public resetStatus400() {
    this._status400 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status400Input() {
    return this._status400;
  }

  // status_401 - computed: false, optional: true, required: false
  private _status401?: number; 
  public get status401() {
    return this.getNumberAttribute('status_401');
  }
  public set status401(value: number) {
    this._status401 = value;
  }
  public resetStatus401() {
    this._status401 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status401Input() {
    return this._status401;
  }

  // status_402 - computed: false, optional: true, required: false
  private _status402?: number; 
  public get status402() {
    return this.getNumberAttribute('status_402');
  }
  public set status402(value: number) {
    this._status402 = value;
  }
  public resetStatus402() {
    this._status402 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status402Input() {
    return this._status402;
  }

  // status_403 - computed: false, optional: true, required: false
  private _status403?: number; 
  public get status403() {
    return this.getNumberAttribute('status_403');
  }
  public set status403(value: number) {
    this._status403 = value;
  }
  public resetStatus403() {
    this._status403 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status403Input() {
    return this._status403;
  }

  // status_404 - computed: false, optional: true, required: false
  private _status404?: number; 
  public get status404() {
    return this.getNumberAttribute('status_404');
  }
  public set status404(value: number) {
    this._status404 = value;
  }
  public resetStatus404() {
    this._status404 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status404Input() {
    return this._status404;
  }

  // status_405 - computed: false, optional: true, required: false
  private _status405?: number; 
  public get status405() {
    return this.getNumberAttribute('status_405');
  }
  public set status405(value: number) {
    this._status405 = value;
  }
  public resetStatus405() {
    this._status405 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status405Input() {
    return this._status405;
  }

  // status_406 - computed: false, optional: true, required: false
  private _status406?: number; 
  public get status406() {
    return this.getNumberAttribute('status_406');
  }
  public set status406(value: number) {
    this._status406 = value;
  }
  public resetStatus406() {
    this._status406 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status406Input() {
    return this._status406;
  }

  // status_407 - computed: false, optional: true, required: false
  private _status407?: number; 
  public get status407() {
    return this.getNumberAttribute('status_407');
  }
  public set status407(value: number) {
    this._status407 = value;
  }
  public resetStatus407() {
    this._status407 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status407Input() {
    return this._status407;
  }

  // status_408 - computed: false, optional: true, required: false
  private _status408?: number; 
  public get status408() {
    return this.getNumberAttribute('status_408');
  }
  public set status408(value: number) {
    this._status408 = value;
  }
  public resetStatus408() {
    this._status408 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status408Input() {
    return this._status408;
  }

  // status_409 - computed: false, optional: true, required: false
  private _status409?: number; 
  public get status409() {
    return this.getNumberAttribute('status_409');
  }
  public set status409(value: number) {
    this._status409 = value;
  }
  public resetStatus409() {
    this._status409 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status409Input() {
    return this._status409;
  }

  // status_410 - computed: false, optional: true, required: false
  private _status410?: number; 
  public get status410() {
    return this.getNumberAttribute('status_410');
  }
  public set status410(value: number) {
    this._status410 = value;
  }
  public resetStatus410() {
    this._status410 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status410Input() {
    return this._status410;
  }

  // status_411 - computed: false, optional: true, required: false
  private _status411?: number; 
  public get status411() {
    return this.getNumberAttribute('status_411');
  }
  public set status411(value: number) {
    this._status411 = value;
  }
  public resetStatus411() {
    this._status411 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status411Input() {
    return this._status411;
  }

  // status_412 - computed: false, optional: true, required: false
  private _status412?: number; 
  public get status412() {
    return this.getNumberAttribute('status_412');
  }
  public set status412(value: number) {
    this._status412 = value;
  }
  public resetStatus412() {
    this._status412 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status412Input() {
    return this._status412;
  }

  // status_413 - computed: false, optional: true, required: false
  private _status413?: number; 
  public get status413() {
    return this.getNumberAttribute('status_413');
  }
  public set status413(value: number) {
    this._status413 = value;
  }
  public resetStatus413() {
    this._status413 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status413Input() {
    return this._status413;
  }

  // status_414 - computed: false, optional: true, required: false
  private _status414?: number; 
  public get status414() {
    return this.getNumberAttribute('status_414');
  }
  public set status414(value: number) {
    this._status414 = value;
  }
  public resetStatus414() {
    this._status414 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status414Input() {
    return this._status414;
  }

  // status_415 - computed: false, optional: true, required: false
  private _status415?: number; 
  public get status415() {
    return this.getNumberAttribute('status_415');
  }
  public set status415(value: number) {
    this._status415 = value;
  }
  public resetStatus415() {
    this._status415 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status415Input() {
    return this._status415;
  }

  // status_416 - computed: false, optional: true, required: false
  private _status416?: number; 
  public get status416() {
    return this.getNumberAttribute('status_416');
  }
  public set status416(value: number) {
    this._status416 = value;
  }
  public resetStatus416() {
    this._status416 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status416Input() {
    return this._status416;
  }

  // status_417 - computed: false, optional: true, required: false
  private _status417?: number; 
  public get status417() {
    return this.getNumberAttribute('status_417');
  }
  public set status417(value: number) {
    this._status417 = value;
  }
  public resetStatus417() {
    this._status417 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status417Input() {
    return this._status417;
  }

  // status_418 - computed: false, optional: true, required: false
  private _status418?: number; 
  public get status418() {
    return this.getNumberAttribute('status_418');
  }
  public set status418(value: number) {
    this._status418 = value;
  }
  public resetStatus418() {
    this._status418 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status418Input() {
    return this._status418;
  }

  // status_419 - computed: false, optional: true, required: false
  private _status419?: number; 
  public get status419() {
    return this.getNumberAttribute('status_419');
  }
  public set status419(value: number) {
    this._status419 = value;
  }
  public resetStatus419() {
    this._status419 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status419Input() {
    return this._status419;
  }

  // status_420 - computed: false, optional: true, required: false
  private _status420?: number; 
  public get status420() {
    return this.getNumberAttribute('status_420');
  }
  public set status420(value: number) {
    this._status420 = value;
  }
  public resetStatus420() {
    this._status420 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status420Input() {
    return this._status420;
  }

  // status_422 - computed: false, optional: true, required: false
  private _status422?: number; 
  public get status422() {
    return this.getNumberAttribute('status_422');
  }
  public set status422(value: number) {
    this._status422 = value;
  }
  public resetStatus422() {
    this._status422 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status422Input() {
    return this._status422;
  }

  // status_423 - computed: false, optional: true, required: false
  private _status423?: number; 
  public get status423() {
    return this.getNumberAttribute('status_423');
  }
  public set status423(value: number) {
    this._status423 = value;
  }
  public resetStatus423() {
    this._status423 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status423Input() {
    return this._status423;
  }

  // status_424 - computed: false, optional: true, required: false
  private _status424?: number; 
  public get status424() {
    return this.getNumberAttribute('status_424');
  }
  public set status424(value: number) {
    this._status424 = value;
  }
  public resetStatus424() {
    this._status424 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status424Input() {
    return this._status424;
  }

  // status_425 - computed: false, optional: true, required: false
  private _status425?: number; 
  public get status425() {
    return this.getNumberAttribute('status_425');
  }
  public set status425(value: number) {
    this._status425 = value;
  }
  public resetStatus425() {
    this._status425 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status425Input() {
    return this._status425;
  }

  // status_426 - computed: false, optional: true, required: false
  private _status426?: number; 
  public get status426() {
    return this.getNumberAttribute('status_426');
  }
  public set status426(value: number) {
    this._status426 = value;
  }
  public resetStatus426() {
    this._status426 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status426Input() {
    return this._status426;
  }

  // status_449 - computed: false, optional: true, required: false
  private _status449?: number; 
  public get status449() {
    return this.getNumberAttribute('status_449');
  }
  public set status449(value: number) {
    this._status449 = value;
  }
  public resetStatus449() {
    this._status449 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status449Input() {
    return this._status449;
  }

  // status_450 - computed: false, optional: true, required: false
  private _status450?: number; 
  public get status450() {
    return this.getNumberAttribute('status_450');
  }
  public set status450(value: number) {
    this._status450 = value;
  }
  public resetStatus450() {
    this._status450 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status450Input() {
    return this._status450;
  }

  // status_4xx - computed: false, optional: true, required: false
  private _status4Xx?: number; 
  public get status4Xx() {
    return this.getNumberAttribute('status_4xx');
  }
  public set status4Xx(value: number) {
    this._status4Xx = value;
  }
  public resetStatus4Xx() {
    this._status4Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status4XxInput() {
    return this._status4Xx;
  }

  // status_500 - computed: false, optional: true, required: false
  private _status500?: number; 
  public get status500() {
    return this.getNumberAttribute('status_500');
  }
  public set status500(value: number) {
    this._status500 = value;
  }
  public resetStatus500() {
    this._status500 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status500Input() {
    return this._status500;
  }

  // status_501 - computed: false, optional: true, required: false
  private _status501?: number; 
  public get status501() {
    return this.getNumberAttribute('status_501');
  }
  public set status501(value: number) {
    this._status501 = value;
  }
  public resetStatus501() {
    this._status501 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status501Input() {
    return this._status501;
  }

  // status_502 - computed: false, optional: true, required: false
  private _status502?: number; 
  public get status502() {
    return this.getNumberAttribute('status_502');
  }
  public set status502(value: number) {
    this._status502 = value;
  }
  public resetStatus502() {
    this._status502 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status502Input() {
    return this._status502;
  }

  // status_503 - computed: false, optional: true, required: false
  private _status503?: number; 
  public get status503() {
    return this.getNumberAttribute('status_503');
  }
  public set status503(value: number) {
    this._status503 = value;
  }
  public resetStatus503() {
    this._status503 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status503Input() {
    return this._status503;
  }

  // status_504 - computed: false, optional: true, required: false
  private _status504?: number; 
  public get status504() {
    return this.getNumberAttribute('status_504');
  }
  public set status504(value: number) {
    this._status504 = value;
  }
  public resetStatus504() {
    this._status504 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status504Input() {
    return this._status504;
  }

  // status_505 - computed: false, optional: true, required: false
  private _status505?: number; 
  public get status505() {
    return this.getNumberAttribute('status_505');
  }
  public set status505(value: number) {
    this._status505 = value;
  }
  public resetStatus505() {
    this._status505 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status505Input() {
    return this._status505;
  }

  // status_506 - computed: false, optional: true, required: false
  private _status506?: number; 
  public get status506() {
    return this.getNumberAttribute('status_506');
  }
  public set status506(value: number) {
    this._status506 = value;
  }
  public resetStatus506() {
    this._status506 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status506Input() {
    return this._status506;
  }

  // status_507 - computed: false, optional: true, required: false
  private _status507?: number; 
  public get status507() {
    return this.getNumberAttribute('status_507');
  }
  public set status507(value: number) {
    this._status507 = value;
  }
  public resetStatus507() {
    this._status507 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status507Input() {
    return this._status507;
  }

  // status_508 - computed: false, optional: true, required: false
  private _status508?: number; 
  public get status508() {
    return this.getNumberAttribute('status_508');
  }
  public set status508(value: number) {
    this._status508 = value;
  }
  public resetStatus508() {
    this._status508 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status508Input() {
    return this._status508;
  }

  // status_509 - computed: false, optional: true, required: false
  private _status509?: number; 
  public get status509() {
    return this.getNumberAttribute('status_509');
  }
  public set status509(value: number) {
    this._status509 = value;
  }
  public resetStatus509() {
    this._status509 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status509Input() {
    return this._status509;
  }

  // status_510 - computed: false, optional: true, required: false
  private _status510?: number; 
  public get status510() {
    return this.getNumberAttribute('status_510');
  }
  public set status510(value: number) {
    this._status510 = value;
  }
  public resetStatus510() {
    this._status510 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status510Input() {
    return this._status510;
  }

  // status_5xx - computed: false, optional: true, required: false
  private _status5Xx?: number; 
  public get status5Xx() {
    return this.getNumberAttribute('status_5xx');
  }
  public set status5Xx(value: number) {
    this._status5Xx = value;
  }
  public resetStatus5Xx() {
    this._status5Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status5XxInput() {
    return this._status5Xx;
  }

  // status_6xx - computed: false, optional: true, required: false
  private _status6Xx?: number; 
  public get status6Xx() {
    return this.getNumberAttribute('status_6xx');
  }
  public set status6Xx(value: number) {
    this._status6Xx = value;
  }
  public resetStatus6Xx() {
    this._status6Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get status6XxInput() {
    return this._status6Xx;
  }

  // status_unknown - computed: false, optional: true, required: false
  private _statusUnknown?: number; 
  public get statusUnknown() {
    return this.getNumberAttribute('status_unknown');
  }
  public set statusUnknown(value: number) {
    this._statusUnknown = value;
  }
  public resetStatusUnknown() {
    this._statusUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusUnknownInput() {
    return this._statusUnknown;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats thunder_slb_icap_stats}
*/
export class DataThunderSlbIcapStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_icap_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbIcapStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbIcapStats to import
  * @param importFromId The id of the existing DataThunderSlbIcapStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbIcapStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_icap_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_icap_stats thunder_slb_icap_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbIcapStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbIcapStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_icap_stats',
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
  private _stats = new DataThunderSlbIcapStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbIcapStatsStats) {
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
      stats: dataThunderSlbIcapStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSlbIcapStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbIcapStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
