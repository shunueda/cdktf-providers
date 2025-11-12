// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosL7HttpStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#id DataThunderDdosL7HttpStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#stats DataThunderDdosL7HttpStats#stats}
  */
  readonly stats?: DataThunderDdosL7HttpStatsStats;
}
export interface DataThunderDdosL7HttpStatsStats {
  /**
  * Agent Filter Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#agent_filter_blacklist DataThunderDdosL7HttpStats#agent_filter_blacklist}
  */
  readonly agentFilterBlacklist?: number;
  /**
  * Agent Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#agent_filter_match DataThunderDdosL7HttpStats#agent_filter_match}
  */
  readonly agentFilterMatch?: number;
  /**
  * Alloc Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#alloc_fail DataThunderDdosL7HttpStats#alloc_fail}
  */
  readonly allocFail?: number;
  /**
  * Challenge Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#challenge_fail DataThunderDdosL7HttpStats#challenge_fail}
  */
  readonly challengeFail?: number;
  /**
  * Challenge Javascript Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#challenge_js_fail DataThunderDdosL7HttpStats#challenge_js_fail}
  */
  readonly challengeJsFail?: number;
  /**
  * Challenge Javascript Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#challenge_js_sent DataThunderDdosL7HttpStats#challenge_js_sent}
  */
  readonly challengeJsSent?: number;
  /**
  * Challenge URL Redirect Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#challenge_ud_fail DataThunderDdosL7HttpStats#challenge_ud_fail}
  */
  readonly challengeUdFail?: number;
  /**
  * Challenge URL Redirect Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#challenge_ud_sent DataThunderDdosL7HttpStats#challenge_ud_sent}
  */
  readonly challengeUdSent?: number;
  /**
  * Bad HTTP Chunk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#chunk_bad DataThunderDdosL7HttpStats#chunk_bad}
  */
  readonly chunkBad?: number;
  /**
  * Payload Chunk Size Less Than or Equal to 1K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#chunk_sz_1k DataThunderDdosL7HttpStats#chunk_sz_1k}
  */
  readonly chunkSz1K?: number;
  /**
  * Payload Chunk Size Less Than or Equal to 2K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#chunk_sz_2k DataThunderDdosL7HttpStats#chunk_sz_2k}
  */
  readonly chunkSz2K?: number;
  /**
  * Payload Chunk Size Less Than or Equal to 4K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#chunk_sz_4k DataThunderDdosL7HttpStats#chunk_sz_4k}
  */
  readonly chunkSz4K?: number;
  /**
  * Payload Chunk Size Less Than or Equal to 512
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#chunk_sz_512 DataThunderDdosL7HttpStats#chunk_sz_512}
  */
  readonly chunkSz512?: number;
  /**
  * Payload Chunk Size Larger Than 4K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#chunk_sz_gt_4k DataThunderDdosL7HttpStats#chunk_sz_gt_4k}
  */
  readonly chunkSzGt4K?: number;
  /**
  * Client TCP RST Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#client_rst DataThunderDdosL7HttpStats#client_rst}
  */
  readonly clientRst?: number;
  /**
  * Policy Violation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#ddos_policy_violation DataThunderDdosL7HttpStats#ddos_policy_violation}
  */
  readonly ddosPolicyViolation?: number;
  /**
  * Dst Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#dst_filter_action_blacklist DataThunderDdosL7HttpStats#dst_filter_action_blacklist}
  */
  readonly dstFilterActionBlacklist?: number;
  /**
  * Dst Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#dst_filter_action_default_pass DataThunderDdosL7HttpStats#dst_filter_action_default_pass}
  */
  readonly dstFilterActionDefaultPass?: number;
  /**
  * Dst Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#dst_filter_action_drop DataThunderDdosL7HttpStats#dst_filter_action_drop}
  */
  readonly dstFilterActionDrop?: number;
  /**
  * Dst Filter Action Ignore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#dst_filter_action_ignore DataThunderDdosL7HttpStats#dst_filter_action_ignore}
  */
  readonly dstFilterActionIgnore?: number;
  /**
  * Dst Filter Action Reset
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#dst_filter_action_reset DataThunderDdosL7HttpStats#dst_filter_action_reset}
  */
  readonly dstFilterActionReset?: number;
  /**
  * Dst Filter Action WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#dst_filter_action_whitelist DataThunderDdosL7HttpStats#dst_filter_action_whitelist}
  */
  readonly dstFilterActionWhitelist?: number;
  /**
  * Dst Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#dst_filter_match DataThunderDdosL7HttpStats#dst_filter_match}
  */
  readonly dstFilterMatch?: number;
  /**
  * Dst Filter No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#dst_filter_not_match DataThunderDdosL7HttpStats#dst_filter_not_match}
  */
  readonly dstFilterNotMatch?: number;
  /**
  * Dst Filter Rate Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#dst_filter_rate_exceed DataThunderDdosL7HttpStats#dst_filter_rate_exceed}
  */
  readonly dstFilterRateExceed?: number;
  /**
  * Dst Post Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#dst_post_rate_exceed DataThunderDdosL7HttpStats#dst_post_rate_exceed}
  */
  readonly dstPostRateExceed?: number;
  /**
  * Dst Request Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#dst_req_rate_exceed DataThunderDdosL7HttpStats#dst_req_rate_exceed}
  */
  readonly dstReqRateExceed?: number;
  /**
  * Dst Response Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#dst_resp_rate_exceed DataThunderDdosL7HttpStats#dst_resp_rate_exceed}
  */
  readonly dstRespRateExceed?: number;
  /**
  * Error Condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#error_condition DataThunderDdosL7HttpStats#error_condition}
  */
  readonly errorCondition?: number;
  /**
  * HTTP Header Name Too Long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#header_name_too_long DataThunderDdosL7HttpStats#header_name_too_long}
  */
  readonly headerNameTooLong?: number;
  /**
  * Header Process Incomplete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#header_processing_incomplete DataThunderDdosL7HttpStats#header_processing_incomplete}
  */
  readonly headerProcessingIncomplete?: number;
  /**
  * Header Process Time Less Than 1s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#header_processing_time_0 DataThunderDdosL7HttpStats#header_processing_time_0}
  */
  readonly headerProcessingTime0?: number;
  /**
  * Header Process Time Less Than 10s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#header_processing_time_1 DataThunderDdosL7HttpStats#header_processing_time_1}
  */
  readonly headerProcessingTime1?: number;
  /**
  * Header Process Time Less Than 30s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#header_processing_time_2 DataThunderDdosL7HttpStats#header_processing_time_2}
  */
  readonly headerProcessingTime2?: number;
  /**
  * Header Process Time Larger or Equal to 30s
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#header_processing_time_3 DataThunderDdosL7HttpStats#header_processing_time_3}
  */
  readonly headerProcessingTime3?: number;
  /**
  * Request Payload Size Less Than or Equal to 16K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#hps_req_sz_16k DataThunderDdosL7HttpStats#hps_req_sz_16k}
  */
  readonly hpsReqSz16K?: number;
  /**
  * Request Payload Size Less Than or Equal to 1K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#hps_req_sz_1k DataThunderDdosL7HttpStats#hps_req_sz_1k}
  */
  readonly hpsReqSz1K?: number;
  /**
  * Request Payload Size Less Than or Equal to 256K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#hps_req_sz_256k DataThunderDdosL7HttpStats#hps_req_sz_256k}
  */
  readonly hpsReqSz256K?: number;
  /**
  * Request Payload Size Larger Than 256K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#hps_req_sz_256k_plus DataThunderDdosL7HttpStats#hps_req_sz_256k_plus}
  */
  readonly hpsReqSz256KPlus?: number;
  /**
  * Request Payload Size Less Than or Equal to 2K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#hps_req_sz_2k DataThunderDdosL7HttpStats#hps_req_sz_2k}
  */
  readonly hpsReqSz2K?: number;
  /**
  * Request Payload Size Less Than or Equal to 32K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#hps_req_sz_32k DataThunderDdosL7HttpStats#hps_req_sz_32k}
  */
  readonly hpsReqSz32K?: number;
  /**
  * Request Payload Size Less Than or Equal to 4K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#hps_req_sz_4k DataThunderDdosL7HttpStats#hps_req_sz_4k}
  */
  readonly hpsReqSz4K?: number;
  /**
  * Request Payload Size Less Than or Equal to 64K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#hps_req_sz_64k DataThunderDdosL7HttpStats#hps_req_sz_64k}
  */
  readonly hpsReqSz64K?: number;
  /**
  * Request Payload Size Less Than or Equal to 8K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#hps_req_sz_8k DataThunderDdosL7HttpStats#hps_req_sz_8k}
  */
  readonly hpsReqSz8K?: number;
  /**
  * Response HTTP 1.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#hps_rsp_10 DataThunderDdosL7HttpStats#hps_rsp_10}
  */
  readonly hpsRsp10?: number;
  /**
  * Response HTTP 1.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#hps_rsp_11 DataThunderDdosL7HttpStats#hps_rsp_11}
  */
  readonly hpsRsp11?: number;
  /**
  * Status Code 1XX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#hps_rsp_status_1xx DataThunderDdosL7HttpStats#hps_rsp_status_1xx}
  */
  readonly hpsRspStatus1Xx?: number;
  /**
  * Status Code 2XX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#hps_rsp_status_2xx DataThunderDdosL7HttpStats#hps_rsp_status_2xx}
  */
  readonly hpsRspStatus2Xx?: number;
  /**
  * Status Code 3XX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#hps_rsp_status_3xx DataThunderDdosL7HttpStats#hps_rsp_status_3xx}
  */
  readonly hpsRspStatus3Xx?: number;
  /**
  * Status Code 4XX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#hps_rsp_status_4xx DataThunderDdosL7HttpStats#hps_rsp_status_4xx}
  */
  readonly hpsRspStatus4Xx?: number;
  /**
  * Status Code 504 AX-Gen
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#hps_rsp_status_504_ax DataThunderDdosL7HttpStats#hps_rsp_status_504_ax}
  */
  readonly hpsRspStatus504Ax?: number;
  /**
  * Status Code 5XX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#hps_rsp_status_5xx DataThunderDdosL7HttpStats#hps_rsp_status_5xx}
  */
  readonly hpsRspStatus5Xx?: number;
  /**
  * Status Code 6XX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#hps_rsp_status_6xx DataThunderDdosL7HttpStats#hps_rsp_status_6xx}
  */
  readonly hpsRspStatus6Xx?: number;
  /**
  * Status Code Unknown
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#hps_rsp_status_unknown DataThunderDdosL7HttpStats#hps_rsp_status_unknown}
  */
  readonly hpsRspStatusUnknown?: number;
  /**
  * Response Payload Size Less Than or Equal to 16K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#hps_rsp_sz_16k DataThunderDdosL7HttpStats#hps_rsp_sz_16k}
  */
  readonly hpsRspSz16K?: number;
  /**
  * Response Payload Size Less Than or Equal to 1K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#hps_rsp_sz_1k DataThunderDdosL7HttpStats#hps_rsp_sz_1k}
  */
  readonly hpsRspSz1K?: number;
  /**
  * Response Payload Size Less Than or Equal to 256K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#hps_rsp_sz_256k DataThunderDdosL7HttpStats#hps_rsp_sz_256k}
  */
  readonly hpsRspSz256K?: number;
  /**
  * Response Payload Size Larger Than 256K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#hps_rsp_sz_256k_plus DataThunderDdosL7HttpStats#hps_rsp_sz_256k_plus}
  */
  readonly hpsRspSz256KPlus?: number;
  /**
  * Response Payload Size Less Than or Equal to 2K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#hps_rsp_sz_2k DataThunderDdosL7HttpStats#hps_rsp_sz_2k}
  */
  readonly hpsRspSz2K?: number;
  /**
  * Response Payload Size Less Than or Equal to 32K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#hps_rsp_sz_32k DataThunderDdosL7HttpStats#hps_rsp_sz_32k}
  */
  readonly hpsRspSz32K?: number;
  /**
  * Response Payload Size Less Than or Equal to 4K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#hps_rsp_sz_4k DataThunderDdosL7HttpStats#hps_rsp_sz_4k}
  */
  readonly hpsRspSz4K?: number;
  /**
  * Response Payload Size Less Than or Equal to 64K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#hps_rsp_sz_64k DataThunderDdosL7HttpStats#hps_rsp_sz_64k}
  */
  readonly hpsRspSz64K?: number;
  /**
  * Response Payload Size Less Than or Equal to 8K
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#hps_rsp_sz_8k DataThunderDdosL7HttpStats#hps_rsp_sz_8k}
  */
  readonly hpsRspSz8K?: number;
  /**
  * Server TCP RST Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#hps_server_rst DataThunderDdosL7HttpStats#hps_server_rst}
  */
  readonly hpsServerRst?: number;
  /**
  * Request HTTP 1.0
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#http10 DataThunderDdosL7HttpStats#http10}
  */
  readonly http10?: number;
  /**
  * Request HTTP 1.1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#http11 DataThunderDdosL7HttpStats#http11}
  */
  readonly http11?: number;
  /**
  * HTTP Auth Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#http_auth_drop DataThunderDdosL7HttpStats#http_auth_drop}
  */
  readonly httpAuthDrop?: number;
  /**
  * HTTP Auth Responded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#http_auth_resp DataThunderDdosL7HttpStats#http_auth_resp}
  */
  readonly httpAuthResp?: number;
  /**
  * Request Method CONNECT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#http_connect DataThunderDdosL7HttpStats#http_connect}
  */
  readonly httpConnect?: number;
  /**
  * Request Method DELETE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#http_del DataThunderDdosL7HttpStats#http_del}
  */
  readonly httpDel?: number;
  /**
  * Request Method GET
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#http_get DataThunderDdosL7HttpStats#http_get}
  */
  readonly httpGet?: number;
  /**
  * Request Method HEAD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#http_head DataThunderDdosL7HttpStats#http_head}
  */
  readonly httpHead?: number;
  /**
  * Http Idle Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#http_idle_timeout DataThunderDdosL7HttpStats#http_idle_timeout}
  */
  readonly httpIdleTimeout?: number;
  /**
  * Request Method OPTIONS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#http_options DataThunderDdosL7HttpStats#http_options}
  */
  readonly httpOptions?: number;
  /**
  * Request Method POST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#http_post DataThunderDdosL7HttpStats#http_post}
  */
  readonly httpPost?: number;
  /**
  * Request Method PUT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#http_put DataThunderDdosL7HttpStats#http_put}
  */
  readonly httpPut?: number;
  /**
  * Request Method TRACE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#http_trace DataThunderDdosL7HttpStats#http_trace}
  */
  readonly httpTrace?: number;
  /**
  * Request Method UNKNOWN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#http_unknown DataThunderDdosL7HttpStats#http_unknown}
  */
  readonly httpUnknown?: number;
  /**
  * HTTP Header Name Invalid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#invalid_hdr_name DataThunderDdosL7HttpStats#invalid_hdr_name}
  */
  readonly invalidHdrName?: number;
  /**
  * HTTP Header Value Invalid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#invalid_hdr_val DataThunderDdosL7HttpStats#invalid_hdr_val}
  */
  readonly invalidHdrVal?: number;
  /**
  * HTTP Header Invalid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#invalid_header DataThunderDdosL7HttpStats#invalid_header}
  */
  readonly invalidHeader?: number;
  /**
  * Line Too Long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#line_too_long DataThunderDdosL7HttpStats#line_too_long}
  */
  readonly lineTooLong?: number;
  /**
  * Min Payload Size Fail Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#lower_than_mss_exceed DataThunderDdosL7HttpStats#lower_than_mss_exceed}
  */
  readonly lowerThanMssExceed?: number;
  /**
  * Malform Bad Chunk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#malform_bad_chunk DataThunderDdosL7HttpStats#malform_bad_chunk}
  */
  readonly malformBadChunk?: number;
  /**
  * Malform Content Length Too Long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#malform_content_len_too_long DataThunderDdosL7HttpStats#malform_content_len_too_long}
  */
  readonly malformContentLenTooLong?: number;
  /**
  * Malform Header Name Too Long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#malform_header_name_too_long DataThunderDdosL7HttpStats#malform_header_name_too_long}
  */
  readonly malformHeaderNameTooLong?: number;
  /**
  * Malform Line Too Long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#malform_line_too_long DataThunderDdosL7HttpStats#malform_line_too_long}
  */
  readonly malformLineTooLong?: number;
  /**
  * Malform Request Line Invalid Method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#malform_req_line_invalid_method DataThunderDdosL7HttpStats#malform_req_line_invalid_method}
  */
  readonly malformReqLineInvalidMethod?: number;
  /**
  * Malform Request Line Too Long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#malform_req_line_too_long DataThunderDdosL7HttpStats#malform_req_line_too_long}
  */
  readonly malformReqLineTooLong?: number;
  /**
  * Malform Request Line Too Small
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#malform_req_line_too_small DataThunderDdosL7HttpStats#malform_req_line_too_small}
  */
  readonly malformReqLineTooSmall?: number;
  /**
  * Malform Too Many Headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#malform_too_many_headers DataThunderDdosL7HttpStats#malform_too_many_headers}
  */
  readonly malformTooManyHeaders?: number;
  /**
  * Negative Request Remain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#neg_req_remain DataThunderDdosL7HttpStats#neg_req_remain}
  */
  readonly negReqRemain?: number;
  /**
  * Negative Response Remain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#neg_rsp_remain DataThunderDdosL7HttpStats#neg_rsp_remain}
  */
  readonly negRspRemain?: number;
  /**
  * TCP SYN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#new_syn DataThunderDdosL7HttpStats#new_syn}
  */
  readonly newSyn?: number;
  /**
  * Out-Of-Order Packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#ofo DataThunderDdosL7HttpStats#ofo}
  */
  readonly ofo?: number;
  /**
  * Out-Of-Order Queue Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#ofo_queue_exceed DataThunderDdosL7HttpStats#ofo_queue_exceed}
  */
  readonly ofoQueueExceed?: number;
  /**
  * Out-Of-Order Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#ofo_timer_expired DataThunderDdosL7HttpStats#ofo_timer_expired}
  */
  readonly ofoTimerExpired?: number;
  /**
  * Parse Request Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#parsereq_fail DataThunderDdosL7HttpStats#parsereq_fail}
  */
  readonly parsereqFail?: number;
  /**
  * Partial Header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#partial_hdr DataThunderDdosL7HttpStats#partial_hdr}
  */
  readonly partialHdr?: number;
  /**
  * Policy Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#policy_drop DataThunderDdosL7HttpStats#policy_drop}
  */
  readonly policyDrop?: number;
  /**
  * Referer Filter Blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#referer_filter_blacklist DataThunderDdosL7HttpStats#referer_filter_blacklist}
  */
  readonly refererFilterBlacklist?: number;
  /**
  * Referer Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#referer_filter_match DataThunderDdosL7HttpStats#referer_filter_match}
  */
  readonly refererFilterMatch?: number;
  /**
  * Request Content-Length Received
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#req_content_len DataThunderDdosL7HttpStats#req_content_len}
  */
  readonly reqContentLen?: number;
  /**
  * Out-Of-Order Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#req_ofo DataThunderDdosL7HttpStats#req_ofo}
  */
  readonly reqOfo?: number;
  /**
  * Packets Processed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#req_processed DataThunderDdosL7HttpStats#req_processed}
  */
  readonly reqProcessed?: number;
  /**
  * Retransmit Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#req_retrans DataThunderDdosL7HttpStats#req_retrans}
  */
  readonly reqRetrans?: number;
  /**
  * Request Total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#request DataThunderDdosL7HttpStats#request}
  */
  readonly request?: number;
  /**
  * TCP Retransmit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#retrans DataThunderDdosL7HttpStats#retrans}
  */
  readonly retrans?: number;
  /**
  * TCP Retransmit FIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#retrans_fin DataThunderDdosL7HttpStats#retrans_fin}
  */
  readonly retransFin?: number;
  /**
  * TCP Retransmit PSH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#retrans_push DataThunderDdosL7HttpStats#retrans_push}
  */
  readonly retransPush?: number;
  /**
  * TCP Retransmit RST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#retrans_rst DataThunderDdosL7HttpStats#retrans_rst}
  */
  readonly retransRst?: number;
  /**
  * Response Chunk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#rsp_chunk DataThunderDdosL7HttpStats#rsp_chunk}
  */
  readonly rspChunk?: number;
  /**
  * SrcDst Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#src_dst_filter_action_blacklist DataThunderDdosL7HttpStats#src_dst_filter_action_blacklist}
  */
  readonly srcDstFilterActionBlacklist?: number;
  /**
  * SrcDst Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#src_dst_filter_action_default_pass DataThunderDdosL7HttpStats#src_dst_filter_action_default_pass}
  */
  readonly srcDstFilterActionDefaultPass?: number;
  /**
  * SrcDst Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#src_dst_filter_action_drop DataThunderDdosL7HttpStats#src_dst_filter_action_drop}
  */
  readonly srcDstFilterActionDrop?: number;
  /**
  * SrcDst Filter Action WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#src_dst_filter_action_whitelist DataThunderDdosL7HttpStats#src_dst_filter_action_whitelist}
  */
  readonly srcDstFilterActionWhitelist?: number;
  /**
  * SrcDst Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#src_dst_filter_match DataThunderDdosL7HttpStats#src_dst_filter_match}
  */
  readonly srcDstFilterMatch?: number;
  /**
  * SrcDst Filter No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#src_dst_filter_not_match DataThunderDdosL7HttpStats#src_dst_filter_not_match}
  */
  readonly srcDstFilterNotMatch?: number;
  /**
  * Src Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#src_filter_action_blacklist DataThunderDdosL7HttpStats#src_filter_action_blacklist}
  */
  readonly srcFilterActionBlacklist?: number;
  /**
  * Src Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#src_filter_action_default_pass DataThunderDdosL7HttpStats#src_filter_action_default_pass}
  */
  readonly srcFilterActionDefaultPass?: number;
  /**
  * Src Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#src_filter_action_drop DataThunderDdosL7HttpStats#src_filter_action_drop}
  */
  readonly srcFilterActionDrop?: number;
  /**
  * Src Filter Action WL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#src_filter_action_whitelist DataThunderDdosL7HttpStats#src_filter_action_whitelist}
  */
  readonly srcFilterActionWhitelist?: number;
  /**
  * Src Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#src_filter_match DataThunderDdosL7HttpStats#src_filter_match}
  */
  readonly srcFilterMatch?: number;
  /**
  * Src Filter No Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#src_filter_not_match DataThunderDdosL7HttpStats#src_filter_not_match}
  */
  readonly srcFilterNotMatch?: number;
  /**
  * Src Post Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#src_post_rate_exceed DataThunderDdosL7HttpStats#src_post_rate_exceed}
  */
  readonly srcPostRateExceed?: number;
  /**
  * Src Request Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#src_req_rate_exceed DataThunderDdosL7HttpStats#src_req_rate_exceed}
  */
  readonly srcReqRateExceed?: number;
  /**
  * HTTP Header Too Many
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#too_many_headers DataThunderDdosL7HttpStats#too_many_headers}
  */
  readonly tooManyHeaders?: number;
  /**
  * URI Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#uri_filter_match DataThunderDdosL7HttpStats#uri_filter_match}
  */
  readonly uriFilterMatch?: number;
  /**
  * Use IP In Header As Src
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#use_hdr_ip_as_source DataThunderDdosL7HttpStats#use_hdr_ip_as_source}
  */
  readonly useHdrIpAsSource?: number;
  /**
  * Window Size Small
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#window_small DataThunderDdosL7HttpStats#window_small}
  */
  readonly windowSmall?: number;
  /**
  * Window Size Small Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#window_small_drop DataThunderDdosL7HttpStats#window_small_drop}
  */
  readonly windowSmallDrop?: number;
}

export function dataThunderDdosL7HttpStatsStatsToTerraform(struct?: DataThunderDdosL7HttpStatsStatsOutputReference | DataThunderDdosL7HttpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_filter_blacklist: cdktf.numberToTerraform(struct!.agentFilterBlacklist),
    agent_filter_match: cdktf.numberToTerraform(struct!.agentFilterMatch),
    alloc_fail: cdktf.numberToTerraform(struct!.allocFail),
    challenge_fail: cdktf.numberToTerraform(struct!.challengeFail),
    challenge_js_fail: cdktf.numberToTerraform(struct!.challengeJsFail),
    challenge_js_sent: cdktf.numberToTerraform(struct!.challengeJsSent),
    challenge_ud_fail: cdktf.numberToTerraform(struct!.challengeUdFail),
    challenge_ud_sent: cdktf.numberToTerraform(struct!.challengeUdSent),
    chunk_bad: cdktf.numberToTerraform(struct!.chunkBad),
    chunk_sz_1k: cdktf.numberToTerraform(struct!.chunkSz1K),
    chunk_sz_2k: cdktf.numberToTerraform(struct!.chunkSz2K),
    chunk_sz_4k: cdktf.numberToTerraform(struct!.chunkSz4K),
    chunk_sz_512: cdktf.numberToTerraform(struct!.chunkSz512),
    chunk_sz_gt_4k: cdktf.numberToTerraform(struct!.chunkSzGt4K),
    client_rst: cdktf.numberToTerraform(struct!.clientRst),
    ddos_policy_violation: cdktf.numberToTerraform(struct!.ddosPolicyViolation),
    dst_filter_action_blacklist: cdktf.numberToTerraform(struct!.dstFilterActionBlacklist),
    dst_filter_action_default_pass: cdktf.numberToTerraform(struct!.dstFilterActionDefaultPass),
    dst_filter_action_drop: cdktf.numberToTerraform(struct!.dstFilterActionDrop),
    dst_filter_action_ignore: cdktf.numberToTerraform(struct!.dstFilterActionIgnore),
    dst_filter_action_reset: cdktf.numberToTerraform(struct!.dstFilterActionReset),
    dst_filter_action_whitelist: cdktf.numberToTerraform(struct!.dstFilterActionWhitelist),
    dst_filter_match: cdktf.numberToTerraform(struct!.dstFilterMatch),
    dst_filter_not_match: cdktf.numberToTerraform(struct!.dstFilterNotMatch),
    dst_filter_rate_exceed: cdktf.numberToTerraform(struct!.dstFilterRateExceed),
    dst_post_rate_exceed: cdktf.numberToTerraform(struct!.dstPostRateExceed),
    dst_req_rate_exceed: cdktf.numberToTerraform(struct!.dstReqRateExceed),
    dst_resp_rate_exceed: cdktf.numberToTerraform(struct!.dstRespRateExceed),
    error_condition: cdktf.numberToTerraform(struct!.errorCondition),
    header_name_too_long: cdktf.numberToTerraform(struct!.headerNameTooLong),
    header_processing_incomplete: cdktf.numberToTerraform(struct!.headerProcessingIncomplete),
    header_processing_time_0: cdktf.numberToTerraform(struct!.headerProcessingTime0),
    header_processing_time_1: cdktf.numberToTerraform(struct!.headerProcessingTime1),
    header_processing_time_2: cdktf.numberToTerraform(struct!.headerProcessingTime2),
    header_processing_time_3: cdktf.numberToTerraform(struct!.headerProcessingTime3),
    hps_req_sz_16k: cdktf.numberToTerraform(struct!.hpsReqSz16K),
    hps_req_sz_1k: cdktf.numberToTerraform(struct!.hpsReqSz1K),
    hps_req_sz_256k: cdktf.numberToTerraform(struct!.hpsReqSz256K),
    hps_req_sz_256k_plus: cdktf.numberToTerraform(struct!.hpsReqSz256KPlus),
    hps_req_sz_2k: cdktf.numberToTerraform(struct!.hpsReqSz2K),
    hps_req_sz_32k: cdktf.numberToTerraform(struct!.hpsReqSz32K),
    hps_req_sz_4k: cdktf.numberToTerraform(struct!.hpsReqSz4K),
    hps_req_sz_64k: cdktf.numberToTerraform(struct!.hpsReqSz64K),
    hps_req_sz_8k: cdktf.numberToTerraform(struct!.hpsReqSz8K),
    hps_rsp_10: cdktf.numberToTerraform(struct!.hpsRsp10),
    hps_rsp_11: cdktf.numberToTerraform(struct!.hpsRsp11),
    hps_rsp_status_1xx: cdktf.numberToTerraform(struct!.hpsRspStatus1Xx),
    hps_rsp_status_2xx: cdktf.numberToTerraform(struct!.hpsRspStatus2Xx),
    hps_rsp_status_3xx: cdktf.numberToTerraform(struct!.hpsRspStatus3Xx),
    hps_rsp_status_4xx: cdktf.numberToTerraform(struct!.hpsRspStatus4Xx),
    hps_rsp_status_504_ax: cdktf.numberToTerraform(struct!.hpsRspStatus504Ax),
    hps_rsp_status_5xx: cdktf.numberToTerraform(struct!.hpsRspStatus5Xx),
    hps_rsp_status_6xx: cdktf.numberToTerraform(struct!.hpsRspStatus6Xx),
    hps_rsp_status_unknown: cdktf.numberToTerraform(struct!.hpsRspStatusUnknown),
    hps_rsp_sz_16k: cdktf.numberToTerraform(struct!.hpsRspSz16K),
    hps_rsp_sz_1k: cdktf.numberToTerraform(struct!.hpsRspSz1K),
    hps_rsp_sz_256k: cdktf.numberToTerraform(struct!.hpsRspSz256K),
    hps_rsp_sz_256k_plus: cdktf.numberToTerraform(struct!.hpsRspSz256KPlus),
    hps_rsp_sz_2k: cdktf.numberToTerraform(struct!.hpsRspSz2K),
    hps_rsp_sz_32k: cdktf.numberToTerraform(struct!.hpsRspSz32K),
    hps_rsp_sz_4k: cdktf.numberToTerraform(struct!.hpsRspSz4K),
    hps_rsp_sz_64k: cdktf.numberToTerraform(struct!.hpsRspSz64K),
    hps_rsp_sz_8k: cdktf.numberToTerraform(struct!.hpsRspSz8K),
    hps_server_rst: cdktf.numberToTerraform(struct!.hpsServerRst),
    http10: cdktf.numberToTerraform(struct!.http10),
    http11: cdktf.numberToTerraform(struct!.http11),
    http_auth_drop: cdktf.numberToTerraform(struct!.httpAuthDrop),
    http_auth_resp: cdktf.numberToTerraform(struct!.httpAuthResp),
    http_connect: cdktf.numberToTerraform(struct!.httpConnect),
    http_del: cdktf.numberToTerraform(struct!.httpDel),
    http_get: cdktf.numberToTerraform(struct!.httpGet),
    http_head: cdktf.numberToTerraform(struct!.httpHead),
    http_idle_timeout: cdktf.numberToTerraform(struct!.httpIdleTimeout),
    http_options: cdktf.numberToTerraform(struct!.httpOptions),
    http_post: cdktf.numberToTerraform(struct!.httpPost),
    http_put: cdktf.numberToTerraform(struct!.httpPut),
    http_trace: cdktf.numberToTerraform(struct!.httpTrace),
    http_unknown: cdktf.numberToTerraform(struct!.httpUnknown),
    invalid_hdr_name: cdktf.numberToTerraform(struct!.invalidHdrName),
    invalid_hdr_val: cdktf.numberToTerraform(struct!.invalidHdrVal),
    invalid_header: cdktf.numberToTerraform(struct!.invalidHeader),
    line_too_long: cdktf.numberToTerraform(struct!.lineTooLong),
    lower_than_mss_exceed: cdktf.numberToTerraform(struct!.lowerThanMssExceed),
    malform_bad_chunk: cdktf.numberToTerraform(struct!.malformBadChunk),
    malform_content_len_too_long: cdktf.numberToTerraform(struct!.malformContentLenTooLong),
    malform_header_name_too_long: cdktf.numberToTerraform(struct!.malformHeaderNameTooLong),
    malform_line_too_long: cdktf.numberToTerraform(struct!.malformLineTooLong),
    malform_req_line_invalid_method: cdktf.numberToTerraform(struct!.malformReqLineInvalidMethod),
    malform_req_line_too_long: cdktf.numberToTerraform(struct!.malformReqLineTooLong),
    malform_req_line_too_small: cdktf.numberToTerraform(struct!.malformReqLineTooSmall),
    malform_too_many_headers: cdktf.numberToTerraform(struct!.malformTooManyHeaders),
    neg_req_remain: cdktf.numberToTerraform(struct!.negReqRemain),
    neg_rsp_remain: cdktf.numberToTerraform(struct!.negRspRemain),
    new_syn: cdktf.numberToTerraform(struct!.newSyn),
    ofo: cdktf.numberToTerraform(struct!.ofo),
    ofo_queue_exceed: cdktf.numberToTerraform(struct!.ofoQueueExceed),
    ofo_timer_expired: cdktf.numberToTerraform(struct!.ofoTimerExpired),
    parsereq_fail: cdktf.numberToTerraform(struct!.parsereqFail),
    partial_hdr: cdktf.numberToTerraform(struct!.partialHdr),
    policy_drop: cdktf.numberToTerraform(struct!.policyDrop),
    referer_filter_blacklist: cdktf.numberToTerraform(struct!.refererFilterBlacklist),
    referer_filter_match: cdktf.numberToTerraform(struct!.refererFilterMatch),
    req_content_len: cdktf.numberToTerraform(struct!.reqContentLen),
    req_ofo: cdktf.numberToTerraform(struct!.reqOfo),
    req_processed: cdktf.numberToTerraform(struct!.reqProcessed),
    req_retrans: cdktf.numberToTerraform(struct!.reqRetrans),
    request: cdktf.numberToTerraform(struct!.request),
    retrans: cdktf.numberToTerraform(struct!.retrans),
    retrans_fin: cdktf.numberToTerraform(struct!.retransFin),
    retrans_push: cdktf.numberToTerraform(struct!.retransPush),
    retrans_rst: cdktf.numberToTerraform(struct!.retransRst),
    rsp_chunk: cdktf.numberToTerraform(struct!.rspChunk),
    src_dst_filter_action_blacklist: cdktf.numberToTerraform(struct!.srcDstFilterActionBlacklist),
    src_dst_filter_action_default_pass: cdktf.numberToTerraform(struct!.srcDstFilterActionDefaultPass),
    src_dst_filter_action_drop: cdktf.numberToTerraform(struct!.srcDstFilterActionDrop),
    src_dst_filter_action_whitelist: cdktf.numberToTerraform(struct!.srcDstFilterActionWhitelist),
    src_dst_filter_match: cdktf.numberToTerraform(struct!.srcDstFilterMatch),
    src_dst_filter_not_match: cdktf.numberToTerraform(struct!.srcDstFilterNotMatch),
    src_filter_action_blacklist: cdktf.numberToTerraform(struct!.srcFilterActionBlacklist),
    src_filter_action_default_pass: cdktf.numberToTerraform(struct!.srcFilterActionDefaultPass),
    src_filter_action_drop: cdktf.numberToTerraform(struct!.srcFilterActionDrop),
    src_filter_action_whitelist: cdktf.numberToTerraform(struct!.srcFilterActionWhitelist),
    src_filter_match: cdktf.numberToTerraform(struct!.srcFilterMatch),
    src_filter_not_match: cdktf.numberToTerraform(struct!.srcFilterNotMatch),
    src_post_rate_exceed: cdktf.numberToTerraform(struct!.srcPostRateExceed),
    src_req_rate_exceed: cdktf.numberToTerraform(struct!.srcReqRateExceed),
    too_many_headers: cdktf.numberToTerraform(struct!.tooManyHeaders),
    uri_filter_match: cdktf.numberToTerraform(struct!.uriFilterMatch),
    use_hdr_ip_as_source: cdktf.numberToTerraform(struct!.useHdrIpAsSource),
    window_small: cdktf.numberToTerraform(struct!.windowSmall),
    window_small_drop: cdktf.numberToTerraform(struct!.windowSmallDrop),
  }
}


export function dataThunderDdosL7HttpStatsStatsToHclTerraform(struct?: DataThunderDdosL7HttpStatsStatsOutputReference | DataThunderDdosL7HttpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_filter_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.agentFilterBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    agent_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.agentFilterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    alloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.allocFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    challenge_fail: {
      value: cdktf.numberToHclTerraform(struct!.challengeFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    challenge_js_fail: {
      value: cdktf.numberToHclTerraform(struct!.challengeJsFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    challenge_js_sent: {
      value: cdktf.numberToHclTerraform(struct!.challengeJsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    challenge_ud_fail: {
      value: cdktf.numberToHclTerraform(struct!.challengeUdFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    challenge_ud_sent: {
      value: cdktf.numberToHclTerraform(struct!.challengeUdSent),
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
    client_rst: {
      value: cdktf.numberToHclTerraform(struct!.clientRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_policy_violation: {
      value: cdktf.numberToHclTerraform(struct!.ddosPolicyViolation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.dstFilterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.dstFilterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstFilterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_filter_action_ignore: {
      value: cdktf.numberToHclTerraform(struct!.dstFilterActionIgnore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_filter_action_reset: {
      value: cdktf.numberToHclTerraform(struct!.dstFilterActionReset),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.dstFilterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.dstFilterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_filter_not_match: {
      value: cdktf.numberToHclTerraform(struct!.dstFilterNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_filter_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstFilterRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_post_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstPostRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_req_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstReqRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_resp_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstRespRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_condition: {
      value: cdktf.numberToHclTerraform(struct!.errorCondition),
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
    header_processing_incomplete: {
      value: cdktf.numberToHclTerraform(struct!.headerProcessingIncomplete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_processing_time_0: {
      value: cdktf.numberToHclTerraform(struct!.headerProcessingTime0),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_processing_time_1: {
      value: cdktf.numberToHclTerraform(struct!.headerProcessingTime1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_processing_time_2: {
      value: cdktf.numberToHclTerraform(struct!.headerProcessingTime2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_processing_time_3: {
      value: cdktf.numberToHclTerraform(struct!.headerProcessingTime3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_req_sz_16k: {
      value: cdktf.numberToHclTerraform(struct!.hpsReqSz16K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_req_sz_1k: {
      value: cdktf.numberToHclTerraform(struct!.hpsReqSz1K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_req_sz_256k: {
      value: cdktf.numberToHclTerraform(struct!.hpsReqSz256K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_req_sz_256k_plus: {
      value: cdktf.numberToHclTerraform(struct!.hpsReqSz256KPlus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_req_sz_2k: {
      value: cdktf.numberToHclTerraform(struct!.hpsReqSz2K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_req_sz_32k: {
      value: cdktf.numberToHclTerraform(struct!.hpsReqSz32K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_req_sz_4k: {
      value: cdktf.numberToHclTerraform(struct!.hpsReqSz4K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_req_sz_64k: {
      value: cdktf.numberToHclTerraform(struct!.hpsReqSz64K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_req_sz_8k: {
      value: cdktf.numberToHclTerraform(struct!.hpsReqSz8K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_rsp_10: {
      value: cdktf.numberToHclTerraform(struct!.hpsRsp10),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_rsp_11: {
      value: cdktf.numberToHclTerraform(struct!.hpsRsp11),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_rsp_status_1xx: {
      value: cdktf.numberToHclTerraform(struct!.hpsRspStatus1Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_rsp_status_2xx: {
      value: cdktf.numberToHclTerraform(struct!.hpsRspStatus2Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_rsp_status_3xx: {
      value: cdktf.numberToHclTerraform(struct!.hpsRspStatus3Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_rsp_status_4xx: {
      value: cdktf.numberToHclTerraform(struct!.hpsRspStatus4Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_rsp_status_504_ax: {
      value: cdktf.numberToHclTerraform(struct!.hpsRspStatus504Ax),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_rsp_status_5xx: {
      value: cdktf.numberToHclTerraform(struct!.hpsRspStatus5Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_rsp_status_6xx: {
      value: cdktf.numberToHclTerraform(struct!.hpsRspStatus6Xx),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_rsp_status_unknown: {
      value: cdktf.numberToHclTerraform(struct!.hpsRspStatusUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_rsp_sz_16k: {
      value: cdktf.numberToHclTerraform(struct!.hpsRspSz16K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_rsp_sz_1k: {
      value: cdktf.numberToHclTerraform(struct!.hpsRspSz1K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_rsp_sz_256k: {
      value: cdktf.numberToHclTerraform(struct!.hpsRspSz256K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_rsp_sz_256k_plus: {
      value: cdktf.numberToHclTerraform(struct!.hpsRspSz256KPlus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_rsp_sz_2k: {
      value: cdktf.numberToHclTerraform(struct!.hpsRspSz2K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_rsp_sz_32k: {
      value: cdktf.numberToHclTerraform(struct!.hpsRspSz32K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_rsp_sz_4k: {
      value: cdktf.numberToHclTerraform(struct!.hpsRspSz4K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_rsp_sz_64k: {
      value: cdktf.numberToHclTerraform(struct!.hpsRspSz64K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_rsp_sz_8k: {
      value: cdktf.numberToHclTerraform(struct!.hpsRspSz8K),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_server_rst: {
      value: cdktf.numberToHclTerraform(struct!.hpsServerRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http10: {
      value: cdktf.numberToHclTerraform(struct!.http10),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http11: {
      value: cdktf.numberToHclTerraform(struct!.http11),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_auth_drop: {
      value: cdktf.numberToHclTerraform(struct!.httpAuthDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_auth_resp: {
      value: cdktf.numberToHclTerraform(struct!.httpAuthResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_connect: {
      value: cdktf.numberToHclTerraform(struct!.httpConnect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_del: {
      value: cdktf.numberToHclTerraform(struct!.httpDel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_get: {
      value: cdktf.numberToHclTerraform(struct!.httpGet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_head: {
      value: cdktf.numberToHclTerraform(struct!.httpHead),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.httpIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_options: {
      value: cdktf.numberToHclTerraform(struct!.httpOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_post: {
      value: cdktf.numberToHclTerraform(struct!.httpPost),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_put: {
      value: cdktf.numberToHclTerraform(struct!.httpPut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_trace: {
      value: cdktf.numberToHclTerraform(struct!.httpTrace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_unknown: {
      value: cdktf.numberToHclTerraform(struct!.httpUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_hdr_name: {
      value: cdktf.numberToHclTerraform(struct!.invalidHdrName),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_hdr_val: {
      value: cdktf.numberToHclTerraform(struct!.invalidHdrVal),
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
    line_too_long: {
      value: cdktf.numberToHclTerraform(struct!.lineTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lower_than_mss_exceed: {
      value: cdktf.numberToHclTerraform(struct!.lowerThanMssExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malform_bad_chunk: {
      value: cdktf.numberToHclTerraform(struct!.malformBadChunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malform_content_len_too_long: {
      value: cdktf.numberToHclTerraform(struct!.malformContentLenTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malform_header_name_too_long: {
      value: cdktf.numberToHclTerraform(struct!.malformHeaderNameTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malform_line_too_long: {
      value: cdktf.numberToHclTerraform(struct!.malformLineTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malform_req_line_invalid_method: {
      value: cdktf.numberToHclTerraform(struct!.malformReqLineInvalidMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malform_req_line_too_long: {
      value: cdktf.numberToHclTerraform(struct!.malformReqLineTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malform_req_line_too_small: {
      value: cdktf.numberToHclTerraform(struct!.malformReqLineTooSmall),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malform_too_many_headers: {
      value: cdktf.numberToHclTerraform(struct!.malformTooManyHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neg_req_remain: {
      value: cdktf.numberToHclTerraform(struct!.negReqRemain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    neg_rsp_remain: {
      value: cdktf.numberToHclTerraform(struct!.negRspRemain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_syn: {
      value: cdktf.numberToHclTerraform(struct!.newSyn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ofo: {
      value: cdktf.numberToHclTerraform(struct!.ofo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ofo_queue_exceed: {
      value: cdktf.numberToHclTerraform(struct!.ofoQueueExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ofo_timer_expired: {
      value: cdktf.numberToHclTerraform(struct!.ofoTimerExpired),
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
    partial_hdr: {
      value: cdktf.numberToHclTerraform(struct!.partialHdr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    policy_drop: {
      value: cdktf.numberToHclTerraform(struct!.policyDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    referer_filter_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.refererFilterBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    referer_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.refererFilterMatch),
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
    req_ofo: {
      value: cdktf.numberToHclTerraform(struct!.reqOfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_processed: {
      value: cdktf.numberToHclTerraform(struct!.reqProcessed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_retrans: {
      value: cdktf.numberToHclTerraform(struct!.reqRetrans),
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
    retrans: {
      value: cdktf.numberToHclTerraform(struct!.retrans),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retrans_fin: {
      value: cdktf.numberToHclTerraform(struct!.retransFin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retrans_push: {
      value: cdktf.numberToHclTerraform(struct!.retransPush),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retrans_rst: {
      value: cdktf.numberToHclTerraform(struct!.retransRst),
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
    src_dst_filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.srcDstFilterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.srcDstFilterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcDstFilterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.srcDstFilterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.srcDstFilterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_filter_not_match: {
      value: cdktf.numberToHclTerraform(struct!.srcDstFilterNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.srcFilterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.srcFilterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcFilterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.srcFilterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.srcFilterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_filter_not_match: {
      value: cdktf.numberToHclTerraform(struct!.srcFilterNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_post_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.srcPostRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_req_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.srcReqRateExceed),
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
    uri_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.uriFilterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_hdr_ip_as_source: {
      value: cdktf.numberToHclTerraform(struct!.useHdrIpAsSource),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_small: {
      value: cdktf.numberToHclTerraform(struct!.windowSmall),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_small_drop: {
      value: cdktf.numberToHclTerraform(struct!.windowSmallDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosL7HttpStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosL7HttpStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentFilterBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentFilterBlacklist = this._agentFilterBlacklist;
    }
    if (this._agentFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentFilterMatch = this._agentFilterMatch;
    }
    if (this._allocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocFail = this._allocFail;
    }
    if (this._challengeFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeFail = this._challengeFail;
    }
    if (this._challengeJsFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeJsFail = this._challengeJsFail;
    }
    if (this._challengeJsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeJsSent = this._challengeJsSent;
    }
    if (this._challengeUdFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeUdFail = this._challengeUdFail;
    }
    if (this._challengeUdSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeUdSent = this._challengeUdSent;
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
    if (this._clientRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRst = this._clientRst;
    }
    if (this._ddosPolicyViolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosPolicyViolation = this._ddosPolicyViolation;
    }
    if (this._dstFilterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstFilterActionBlacklist = this._dstFilterActionBlacklist;
    }
    if (this._dstFilterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstFilterActionDefaultPass = this._dstFilterActionDefaultPass;
    }
    if (this._dstFilterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstFilterActionDrop = this._dstFilterActionDrop;
    }
    if (this._dstFilterActionIgnore !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstFilterActionIgnore = this._dstFilterActionIgnore;
    }
    if (this._dstFilterActionReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstFilterActionReset = this._dstFilterActionReset;
    }
    if (this._dstFilterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstFilterActionWhitelist = this._dstFilterActionWhitelist;
    }
    if (this._dstFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstFilterMatch = this._dstFilterMatch;
    }
    if (this._dstFilterNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstFilterNotMatch = this._dstFilterNotMatch;
    }
    if (this._dstFilterRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstFilterRateExceed = this._dstFilterRateExceed;
    }
    if (this._dstPostRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPostRateExceed = this._dstPostRateExceed;
    }
    if (this._dstReqRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstReqRateExceed = this._dstReqRateExceed;
    }
    if (this._dstRespRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstRespRateExceed = this._dstRespRateExceed;
    }
    if (this._errorCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorCondition = this._errorCondition;
    }
    if (this._headerNameTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerNameTooLong = this._headerNameTooLong;
    }
    if (this._headerProcessingIncomplete !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerProcessingIncomplete = this._headerProcessingIncomplete;
    }
    if (this._headerProcessingTime0 !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerProcessingTime0 = this._headerProcessingTime0;
    }
    if (this._headerProcessingTime1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerProcessingTime1 = this._headerProcessingTime1;
    }
    if (this._headerProcessingTime2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerProcessingTime2 = this._headerProcessingTime2;
    }
    if (this._headerProcessingTime3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerProcessingTime3 = this._headerProcessingTime3;
    }
    if (this._hpsReqSz16K !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsReqSz16K = this._hpsReqSz16K;
    }
    if (this._hpsReqSz1K !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsReqSz1K = this._hpsReqSz1K;
    }
    if (this._hpsReqSz256K !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsReqSz256K = this._hpsReqSz256K;
    }
    if (this._hpsReqSz256KPlus !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsReqSz256KPlus = this._hpsReqSz256KPlus;
    }
    if (this._hpsReqSz2K !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsReqSz2K = this._hpsReqSz2K;
    }
    if (this._hpsReqSz32K !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsReqSz32K = this._hpsReqSz32K;
    }
    if (this._hpsReqSz4K !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsReqSz4K = this._hpsReqSz4K;
    }
    if (this._hpsReqSz64K !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsReqSz64K = this._hpsReqSz64K;
    }
    if (this._hpsReqSz8K !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsReqSz8K = this._hpsReqSz8K;
    }
    if (this._hpsRsp10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsRsp10 = this._hpsRsp10;
    }
    if (this._hpsRsp11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsRsp11 = this._hpsRsp11;
    }
    if (this._hpsRspStatus1Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsRspStatus1Xx = this._hpsRspStatus1Xx;
    }
    if (this._hpsRspStatus2Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsRspStatus2Xx = this._hpsRspStatus2Xx;
    }
    if (this._hpsRspStatus3Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsRspStatus3Xx = this._hpsRspStatus3Xx;
    }
    if (this._hpsRspStatus4Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsRspStatus4Xx = this._hpsRspStatus4Xx;
    }
    if (this._hpsRspStatus504Ax !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsRspStatus504Ax = this._hpsRspStatus504Ax;
    }
    if (this._hpsRspStatus5Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsRspStatus5Xx = this._hpsRspStatus5Xx;
    }
    if (this._hpsRspStatus6Xx !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsRspStatus6Xx = this._hpsRspStatus6Xx;
    }
    if (this._hpsRspStatusUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsRspStatusUnknown = this._hpsRspStatusUnknown;
    }
    if (this._hpsRspSz16K !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsRspSz16K = this._hpsRspSz16K;
    }
    if (this._hpsRspSz1K !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsRspSz1K = this._hpsRspSz1K;
    }
    if (this._hpsRspSz256K !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsRspSz256K = this._hpsRspSz256K;
    }
    if (this._hpsRspSz256KPlus !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsRspSz256KPlus = this._hpsRspSz256KPlus;
    }
    if (this._hpsRspSz2K !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsRspSz2K = this._hpsRspSz2K;
    }
    if (this._hpsRspSz32K !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsRspSz32K = this._hpsRspSz32K;
    }
    if (this._hpsRspSz4K !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsRspSz4K = this._hpsRspSz4K;
    }
    if (this._hpsRspSz64K !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsRspSz64K = this._hpsRspSz64K;
    }
    if (this._hpsRspSz8K !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsRspSz8K = this._hpsRspSz8K;
    }
    if (this._hpsServerRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsServerRst = this._hpsServerRst;
    }
    if (this._http10 !== undefined) {
      hasAnyValues = true;
      internalValueResult.http10 = this._http10;
    }
    if (this._http11 !== undefined) {
      hasAnyValues = true;
      internalValueResult.http11 = this._http11;
    }
    if (this._httpAuthDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpAuthDrop = this._httpAuthDrop;
    }
    if (this._httpAuthResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpAuthResp = this._httpAuthResp;
    }
    if (this._httpConnect !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpConnect = this._httpConnect;
    }
    if (this._httpDel !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpDel = this._httpDel;
    }
    if (this._httpGet !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpGet = this._httpGet;
    }
    if (this._httpHead !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHead = this._httpHead;
    }
    if (this._httpIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpIdleTimeout = this._httpIdleTimeout;
    }
    if (this._httpOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpOptions = this._httpOptions;
    }
    if (this._httpPost !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPost = this._httpPost;
    }
    if (this._httpPut !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPut = this._httpPut;
    }
    if (this._httpTrace !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpTrace = this._httpTrace;
    }
    if (this._httpUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpUnknown = this._httpUnknown;
    }
    if (this._invalidHdrName !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidHdrName = this._invalidHdrName;
    }
    if (this._invalidHdrVal !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidHdrVal = this._invalidHdrVal;
    }
    if (this._invalidHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidHeader = this._invalidHeader;
    }
    if (this._lineTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineTooLong = this._lineTooLong;
    }
    if (this._lowerThanMssExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.lowerThanMssExceed = this._lowerThanMssExceed;
    }
    if (this._malformBadChunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformBadChunk = this._malformBadChunk;
    }
    if (this._malformContentLenTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformContentLenTooLong = this._malformContentLenTooLong;
    }
    if (this._malformHeaderNameTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformHeaderNameTooLong = this._malformHeaderNameTooLong;
    }
    if (this._malformLineTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformLineTooLong = this._malformLineTooLong;
    }
    if (this._malformReqLineInvalidMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformReqLineInvalidMethod = this._malformReqLineInvalidMethod;
    }
    if (this._malformReqLineTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformReqLineTooLong = this._malformReqLineTooLong;
    }
    if (this._malformReqLineTooSmall !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformReqLineTooSmall = this._malformReqLineTooSmall;
    }
    if (this._malformTooManyHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformTooManyHeaders = this._malformTooManyHeaders;
    }
    if (this._negReqRemain !== undefined) {
      hasAnyValues = true;
      internalValueResult.negReqRemain = this._negReqRemain;
    }
    if (this._negRspRemain !== undefined) {
      hasAnyValues = true;
      internalValueResult.negRspRemain = this._negRspRemain;
    }
    if (this._newSyn !== undefined) {
      hasAnyValues = true;
      internalValueResult.newSyn = this._newSyn;
    }
    if (this._ofo !== undefined) {
      hasAnyValues = true;
      internalValueResult.ofo = this._ofo;
    }
    if (this._ofoQueueExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.ofoQueueExceed = this._ofoQueueExceed;
    }
    if (this._ofoTimerExpired !== undefined) {
      hasAnyValues = true;
      internalValueResult.ofoTimerExpired = this._ofoTimerExpired;
    }
    if (this._parsereqFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsereqFail = this._parsereqFail;
    }
    if (this._partialHdr !== undefined) {
      hasAnyValues = true;
      internalValueResult.partialHdr = this._partialHdr;
    }
    if (this._policyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyDrop = this._policyDrop;
    }
    if (this._refererFilterBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.refererFilterBlacklist = this._refererFilterBlacklist;
    }
    if (this._refererFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.refererFilterMatch = this._refererFilterMatch;
    }
    if (this._reqContentLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqContentLen = this._reqContentLen;
    }
    if (this._reqOfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqOfo = this._reqOfo;
    }
    if (this._reqProcessed !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqProcessed = this._reqProcessed;
    }
    if (this._reqRetrans !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqRetrans = this._reqRetrans;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    if (this._retrans !== undefined) {
      hasAnyValues = true;
      internalValueResult.retrans = this._retrans;
    }
    if (this._retransFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransFin = this._retransFin;
    }
    if (this._retransPush !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransPush = this._retransPush;
    }
    if (this._retransRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.retransRst = this._retransRst;
    }
    if (this._rspChunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.rspChunk = this._rspChunk;
    }
    if (this._srcDstFilterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstFilterActionBlacklist = this._srcDstFilterActionBlacklist;
    }
    if (this._srcDstFilterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstFilterActionDefaultPass = this._srcDstFilterActionDefaultPass;
    }
    if (this._srcDstFilterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstFilterActionDrop = this._srcDstFilterActionDrop;
    }
    if (this._srcDstFilterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstFilterActionWhitelist = this._srcDstFilterActionWhitelist;
    }
    if (this._srcDstFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstFilterMatch = this._srcDstFilterMatch;
    }
    if (this._srcDstFilterNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstFilterNotMatch = this._srcDstFilterNotMatch;
    }
    if (this._srcFilterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilterActionBlacklist = this._srcFilterActionBlacklist;
    }
    if (this._srcFilterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilterActionDefaultPass = this._srcFilterActionDefaultPass;
    }
    if (this._srcFilterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilterActionDrop = this._srcFilterActionDrop;
    }
    if (this._srcFilterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilterActionWhitelist = this._srcFilterActionWhitelist;
    }
    if (this._srcFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilterMatch = this._srcFilterMatch;
    }
    if (this._srcFilterNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcFilterNotMatch = this._srcFilterNotMatch;
    }
    if (this._srcPostRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPostRateExceed = this._srcPostRateExceed;
    }
    if (this._srcReqRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcReqRateExceed = this._srcReqRateExceed;
    }
    if (this._tooManyHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooManyHeaders = this._tooManyHeaders;
    }
    if (this._uriFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.uriFilterMatch = this._uriFilterMatch;
    }
    if (this._useHdrIpAsSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.useHdrIpAsSource = this._useHdrIpAsSource;
    }
    if (this._windowSmall !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowSmall = this._windowSmall;
    }
    if (this._windowSmallDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowSmallDrop = this._windowSmallDrop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosL7HttpStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._agentFilterBlacklist = undefined;
      this._agentFilterMatch = undefined;
      this._allocFail = undefined;
      this._challengeFail = undefined;
      this._challengeJsFail = undefined;
      this._challengeJsSent = undefined;
      this._challengeUdFail = undefined;
      this._challengeUdSent = undefined;
      this._chunkBad = undefined;
      this._chunkSz1K = undefined;
      this._chunkSz2K = undefined;
      this._chunkSz4K = undefined;
      this._chunkSz512 = undefined;
      this._chunkSzGt4K = undefined;
      this._clientRst = undefined;
      this._ddosPolicyViolation = undefined;
      this._dstFilterActionBlacklist = undefined;
      this._dstFilterActionDefaultPass = undefined;
      this._dstFilterActionDrop = undefined;
      this._dstFilterActionIgnore = undefined;
      this._dstFilterActionReset = undefined;
      this._dstFilterActionWhitelist = undefined;
      this._dstFilterMatch = undefined;
      this._dstFilterNotMatch = undefined;
      this._dstFilterRateExceed = undefined;
      this._dstPostRateExceed = undefined;
      this._dstReqRateExceed = undefined;
      this._dstRespRateExceed = undefined;
      this._errorCondition = undefined;
      this._headerNameTooLong = undefined;
      this._headerProcessingIncomplete = undefined;
      this._headerProcessingTime0 = undefined;
      this._headerProcessingTime1 = undefined;
      this._headerProcessingTime2 = undefined;
      this._headerProcessingTime3 = undefined;
      this._hpsReqSz16K = undefined;
      this._hpsReqSz1K = undefined;
      this._hpsReqSz256K = undefined;
      this._hpsReqSz256KPlus = undefined;
      this._hpsReqSz2K = undefined;
      this._hpsReqSz32K = undefined;
      this._hpsReqSz4K = undefined;
      this._hpsReqSz64K = undefined;
      this._hpsReqSz8K = undefined;
      this._hpsRsp10 = undefined;
      this._hpsRsp11 = undefined;
      this._hpsRspStatus1Xx = undefined;
      this._hpsRspStatus2Xx = undefined;
      this._hpsRspStatus3Xx = undefined;
      this._hpsRspStatus4Xx = undefined;
      this._hpsRspStatus504Ax = undefined;
      this._hpsRspStatus5Xx = undefined;
      this._hpsRspStatus6Xx = undefined;
      this._hpsRspStatusUnknown = undefined;
      this._hpsRspSz16K = undefined;
      this._hpsRspSz1K = undefined;
      this._hpsRspSz256K = undefined;
      this._hpsRspSz256KPlus = undefined;
      this._hpsRspSz2K = undefined;
      this._hpsRspSz32K = undefined;
      this._hpsRspSz4K = undefined;
      this._hpsRspSz64K = undefined;
      this._hpsRspSz8K = undefined;
      this._hpsServerRst = undefined;
      this._http10 = undefined;
      this._http11 = undefined;
      this._httpAuthDrop = undefined;
      this._httpAuthResp = undefined;
      this._httpConnect = undefined;
      this._httpDel = undefined;
      this._httpGet = undefined;
      this._httpHead = undefined;
      this._httpIdleTimeout = undefined;
      this._httpOptions = undefined;
      this._httpPost = undefined;
      this._httpPut = undefined;
      this._httpTrace = undefined;
      this._httpUnknown = undefined;
      this._invalidHdrName = undefined;
      this._invalidHdrVal = undefined;
      this._invalidHeader = undefined;
      this._lineTooLong = undefined;
      this._lowerThanMssExceed = undefined;
      this._malformBadChunk = undefined;
      this._malformContentLenTooLong = undefined;
      this._malformHeaderNameTooLong = undefined;
      this._malformLineTooLong = undefined;
      this._malformReqLineInvalidMethod = undefined;
      this._malformReqLineTooLong = undefined;
      this._malformReqLineTooSmall = undefined;
      this._malformTooManyHeaders = undefined;
      this._negReqRemain = undefined;
      this._negRspRemain = undefined;
      this._newSyn = undefined;
      this._ofo = undefined;
      this._ofoQueueExceed = undefined;
      this._ofoTimerExpired = undefined;
      this._parsereqFail = undefined;
      this._partialHdr = undefined;
      this._policyDrop = undefined;
      this._refererFilterBlacklist = undefined;
      this._refererFilterMatch = undefined;
      this._reqContentLen = undefined;
      this._reqOfo = undefined;
      this._reqProcessed = undefined;
      this._reqRetrans = undefined;
      this._request = undefined;
      this._retrans = undefined;
      this._retransFin = undefined;
      this._retransPush = undefined;
      this._retransRst = undefined;
      this._rspChunk = undefined;
      this._srcDstFilterActionBlacklist = undefined;
      this._srcDstFilterActionDefaultPass = undefined;
      this._srcDstFilterActionDrop = undefined;
      this._srcDstFilterActionWhitelist = undefined;
      this._srcDstFilterMatch = undefined;
      this._srcDstFilterNotMatch = undefined;
      this._srcFilterActionBlacklist = undefined;
      this._srcFilterActionDefaultPass = undefined;
      this._srcFilterActionDrop = undefined;
      this._srcFilterActionWhitelist = undefined;
      this._srcFilterMatch = undefined;
      this._srcFilterNotMatch = undefined;
      this._srcPostRateExceed = undefined;
      this._srcReqRateExceed = undefined;
      this._tooManyHeaders = undefined;
      this._uriFilterMatch = undefined;
      this._useHdrIpAsSource = undefined;
      this._windowSmall = undefined;
      this._windowSmallDrop = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._agentFilterBlacklist = value.agentFilterBlacklist;
      this._agentFilterMatch = value.agentFilterMatch;
      this._allocFail = value.allocFail;
      this._challengeFail = value.challengeFail;
      this._challengeJsFail = value.challengeJsFail;
      this._challengeJsSent = value.challengeJsSent;
      this._challengeUdFail = value.challengeUdFail;
      this._challengeUdSent = value.challengeUdSent;
      this._chunkBad = value.chunkBad;
      this._chunkSz1K = value.chunkSz1K;
      this._chunkSz2K = value.chunkSz2K;
      this._chunkSz4K = value.chunkSz4K;
      this._chunkSz512 = value.chunkSz512;
      this._chunkSzGt4K = value.chunkSzGt4K;
      this._clientRst = value.clientRst;
      this._ddosPolicyViolation = value.ddosPolicyViolation;
      this._dstFilterActionBlacklist = value.dstFilterActionBlacklist;
      this._dstFilterActionDefaultPass = value.dstFilterActionDefaultPass;
      this._dstFilterActionDrop = value.dstFilterActionDrop;
      this._dstFilterActionIgnore = value.dstFilterActionIgnore;
      this._dstFilterActionReset = value.dstFilterActionReset;
      this._dstFilterActionWhitelist = value.dstFilterActionWhitelist;
      this._dstFilterMatch = value.dstFilterMatch;
      this._dstFilterNotMatch = value.dstFilterNotMatch;
      this._dstFilterRateExceed = value.dstFilterRateExceed;
      this._dstPostRateExceed = value.dstPostRateExceed;
      this._dstReqRateExceed = value.dstReqRateExceed;
      this._dstRespRateExceed = value.dstRespRateExceed;
      this._errorCondition = value.errorCondition;
      this._headerNameTooLong = value.headerNameTooLong;
      this._headerProcessingIncomplete = value.headerProcessingIncomplete;
      this._headerProcessingTime0 = value.headerProcessingTime0;
      this._headerProcessingTime1 = value.headerProcessingTime1;
      this._headerProcessingTime2 = value.headerProcessingTime2;
      this._headerProcessingTime3 = value.headerProcessingTime3;
      this._hpsReqSz16K = value.hpsReqSz16K;
      this._hpsReqSz1K = value.hpsReqSz1K;
      this._hpsReqSz256K = value.hpsReqSz256K;
      this._hpsReqSz256KPlus = value.hpsReqSz256KPlus;
      this._hpsReqSz2K = value.hpsReqSz2K;
      this._hpsReqSz32K = value.hpsReqSz32K;
      this._hpsReqSz4K = value.hpsReqSz4K;
      this._hpsReqSz64K = value.hpsReqSz64K;
      this._hpsReqSz8K = value.hpsReqSz8K;
      this._hpsRsp10 = value.hpsRsp10;
      this._hpsRsp11 = value.hpsRsp11;
      this._hpsRspStatus1Xx = value.hpsRspStatus1Xx;
      this._hpsRspStatus2Xx = value.hpsRspStatus2Xx;
      this._hpsRspStatus3Xx = value.hpsRspStatus3Xx;
      this._hpsRspStatus4Xx = value.hpsRspStatus4Xx;
      this._hpsRspStatus504Ax = value.hpsRspStatus504Ax;
      this._hpsRspStatus5Xx = value.hpsRspStatus5Xx;
      this._hpsRspStatus6Xx = value.hpsRspStatus6Xx;
      this._hpsRspStatusUnknown = value.hpsRspStatusUnknown;
      this._hpsRspSz16K = value.hpsRspSz16K;
      this._hpsRspSz1K = value.hpsRspSz1K;
      this._hpsRspSz256K = value.hpsRspSz256K;
      this._hpsRspSz256KPlus = value.hpsRspSz256KPlus;
      this._hpsRspSz2K = value.hpsRspSz2K;
      this._hpsRspSz32K = value.hpsRspSz32K;
      this._hpsRspSz4K = value.hpsRspSz4K;
      this._hpsRspSz64K = value.hpsRspSz64K;
      this._hpsRspSz8K = value.hpsRspSz8K;
      this._hpsServerRst = value.hpsServerRst;
      this._http10 = value.http10;
      this._http11 = value.http11;
      this._httpAuthDrop = value.httpAuthDrop;
      this._httpAuthResp = value.httpAuthResp;
      this._httpConnect = value.httpConnect;
      this._httpDel = value.httpDel;
      this._httpGet = value.httpGet;
      this._httpHead = value.httpHead;
      this._httpIdleTimeout = value.httpIdleTimeout;
      this._httpOptions = value.httpOptions;
      this._httpPost = value.httpPost;
      this._httpPut = value.httpPut;
      this._httpTrace = value.httpTrace;
      this._httpUnknown = value.httpUnknown;
      this._invalidHdrName = value.invalidHdrName;
      this._invalidHdrVal = value.invalidHdrVal;
      this._invalidHeader = value.invalidHeader;
      this._lineTooLong = value.lineTooLong;
      this._lowerThanMssExceed = value.lowerThanMssExceed;
      this._malformBadChunk = value.malformBadChunk;
      this._malformContentLenTooLong = value.malformContentLenTooLong;
      this._malformHeaderNameTooLong = value.malformHeaderNameTooLong;
      this._malformLineTooLong = value.malformLineTooLong;
      this._malformReqLineInvalidMethod = value.malformReqLineInvalidMethod;
      this._malformReqLineTooLong = value.malformReqLineTooLong;
      this._malformReqLineTooSmall = value.malformReqLineTooSmall;
      this._malformTooManyHeaders = value.malformTooManyHeaders;
      this._negReqRemain = value.negReqRemain;
      this._negRspRemain = value.negRspRemain;
      this._newSyn = value.newSyn;
      this._ofo = value.ofo;
      this._ofoQueueExceed = value.ofoQueueExceed;
      this._ofoTimerExpired = value.ofoTimerExpired;
      this._parsereqFail = value.parsereqFail;
      this._partialHdr = value.partialHdr;
      this._policyDrop = value.policyDrop;
      this._refererFilterBlacklist = value.refererFilterBlacklist;
      this._refererFilterMatch = value.refererFilterMatch;
      this._reqContentLen = value.reqContentLen;
      this._reqOfo = value.reqOfo;
      this._reqProcessed = value.reqProcessed;
      this._reqRetrans = value.reqRetrans;
      this._request = value.request;
      this._retrans = value.retrans;
      this._retransFin = value.retransFin;
      this._retransPush = value.retransPush;
      this._retransRst = value.retransRst;
      this._rspChunk = value.rspChunk;
      this._srcDstFilterActionBlacklist = value.srcDstFilterActionBlacklist;
      this._srcDstFilterActionDefaultPass = value.srcDstFilterActionDefaultPass;
      this._srcDstFilterActionDrop = value.srcDstFilterActionDrop;
      this._srcDstFilterActionWhitelist = value.srcDstFilterActionWhitelist;
      this._srcDstFilterMatch = value.srcDstFilterMatch;
      this._srcDstFilterNotMatch = value.srcDstFilterNotMatch;
      this._srcFilterActionBlacklist = value.srcFilterActionBlacklist;
      this._srcFilterActionDefaultPass = value.srcFilterActionDefaultPass;
      this._srcFilterActionDrop = value.srcFilterActionDrop;
      this._srcFilterActionWhitelist = value.srcFilterActionWhitelist;
      this._srcFilterMatch = value.srcFilterMatch;
      this._srcFilterNotMatch = value.srcFilterNotMatch;
      this._srcPostRateExceed = value.srcPostRateExceed;
      this._srcReqRateExceed = value.srcReqRateExceed;
      this._tooManyHeaders = value.tooManyHeaders;
      this._uriFilterMatch = value.uriFilterMatch;
      this._useHdrIpAsSource = value.useHdrIpAsSource;
      this._windowSmall = value.windowSmall;
      this._windowSmallDrop = value.windowSmallDrop;
    }
  }

  // agent_filter_blacklist - computed: false, optional: true, required: false
  private _agentFilterBlacklist?: number; 
  public get agentFilterBlacklist() {
    return this.getNumberAttribute('agent_filter_blacklist');
  }
  public set agentFilterBlacklist(value: number) {
    this._agentFilterBlacklist = value;
  }
  public resetAgentFilterBlacklist() {
    this._agentFilterBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentFilterBlacklistInput() {
    return this._agentFilterBlacklist;
  }

  // agent_filter_match - computed: false, optional: true, required: false
  private _agentFilterMatch?: number; 
  public get agentFilterMatch() {
    return this.getNumberAttribute('agent_filter_match');
  }
  public set agentFilterMatch(value: number) {
    this._agentFilterMatch = value;
  }
  public resetAgentFilterMatch() {
    this._agentFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentFilterMatchInput() {
    return this._agentFilterMatch;
  }

  // alloc_fail - computed: false, optional: true, required: false
  private _allocFail?: number; 
  public get allocFail() {
    return this.getNumberAttribute('alloc_fail');
  }
  public set allocFail(value: number) {
    this._allocFail = value;
  }
  public resetAllocFail() {
    this._allocFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocFailInput() {
    return this._allocFail;
  }

  // challenge_fail - computed: false, optional: true, required: false
  private _challengeFail?: number; 
  public get challengeFail() {
    return this.getNumberAttribute('challenge_fail');
  }
  public set challengeFail(value: number) {
    this._challengeFail = value;
  }
  public resetChallengeFail() {
    this._challengeFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeFailInput() {
    return this._challengeFail;
  }

  // challenge_js_fail - computed: false, optional: true, required: false
  private _challengeJsFail?: number; 
  public get challengeJsFail() {
    return this.getNumberAttribute('challenge_js_fail');
  }
  public set challengeJsFail(value: number) {
    this._challengeJsFail = value;
  }
  public resetChallengeJsFail() {
    this._challengeJsFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeJsFailInput() {
    return this._challengeJsFail;
  }

  // challenge_js_sent - computed: false, optional: true, required: false
  private _challengeJsSent?: number; 
  public get challengeJsSent() {
    return this.getNumberAttribute('challenge_js_sent');
  }
  public set challengeJsSent(value: number) {
    this._challengeJsSent = value;
  }
  public resetChallengeJsSent() {
    this._challengeJsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeJsSentInput() {
    return this._challengeJsSent;
  }

  // challenge_ud_fail - computed: false, optional: true, required: false
  private _challengeUdFail?: number; 
  public get challengeUdFail() {
    return this.getNumberAttribute('challenge_ud_fail');
  }
  public set challengeUdFail(value: number) {
    this._challengeUdFail = value;
  }
  public resetChallengeUdFail() {
    this._challengeUdFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeUdFailInput() {
    return this._challengeUdFail;
  }

  // challenge_ud_sent - computed: false, optional: true, required: false
  private _challengeUdSent?: number; 
  public get challengeUdSent() {
    return this.getNumberAttribute('challenge_ud_sent');
  }
  public set challengeUdSent(value: number) {
    this._challengeUdSent = value;
  }
  public resetChallengeUdSent() {
    this._challengeUdSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeUdSentInput() {
    return this._challengeUdSent;
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

  // ddos_policy_violation - computed: false, optional: true, required: false
  private _ddosPolicyViolation?: number; 
  public get ddosPolicyViolation() {
    return this.getNumberAttribute('ddos_policy_violation');
  }
  public set ddosPolicyViolation(value: number) {
    this._ddosPolicyViolation = value;
  }
  public resetDdosPolicyViolation() {
    this._ddosPolicyViolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosPolicyViolationInput() {
    return this._ddosPolicyViolation;
  }

  // dst_filter_action_blacklist - computed: false, optional: true, required: false
  private _dstFilterActionBlacklist?: number; 
  public get dstFilterActionBlacklist() {
    return this.getNumberAttribute('dst_filter_action_blacklist');
  }
  public set dstFilterActionBlacklist(value: number) {
    this._dstFilterActionBlacklist = value;
  }
  public resetDstFilterActionBlacklist() {
    this._dstFilterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstFilterActionBlacklistInput() {
    return this._dstFilterActionBlacklist;
  }

  // dst_filter_action_default_pass - computed: false, optional: true, required: false
  private _dstFilterActionDefaultPass?: number; 
  public get dstFilterActionDefaultPass() {
    return this.getNumberAttribute('dst_filter_action_default_pass');
  }
  public set dstFilterActionDefaultPass(value: number) {
    this._dstFilterActionDefaultPass = value;
  }
  public resetDstFilterActionDefaultPass() {
    this._dstFilterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstFilterActionDefaultPassInput() {
    return this._dstFilterActionDefaultPass;
  }

  // dst_filter_action_drop - computed: false, optional: true, required: false
  private _dstFilterActionDrop?: number; 
  public get dstFilterActionDrop() {
    return this.getNumberAttribute('dst_filter_action_drop');
  }
  public set dstFilterActionDrop(value: number) {
    this._dstFilterActionDrop = value;
  }
  public resetDstFilterActionDrop() {
    this._dstFilterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstFilterActionDropInput() {
    return this._dstFilterActionDrop;
  }

  // dst_filter_action_ignore - computed: false, optional: true, required: false
  private _dstFilterActionIgnore?: number; 
  public get dstFilterActionIgnore() {
    return this.getNumberAttribute('dst_filter_action_ignore');
  }
  public set dstFilterActionIgnore(value: number) {
    this._dstFilterActionIgnore = value;
  }
  public resetDstFilterActionIgnore() {
    this._dstFilterActionIgnore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstFilterActionIgnoreInput() {
    return this._dstFilterActionIgnore;
  }

  // dst_filter_action_reset - computed: false, optional: true, required: false
  private _dstFilterActionReset?: number; 
  public get dstFilterActionReset() {
    return this.getNumberAttribute('dst_filter_action_reset');
  }
  public set dstFilterActionReset(value: number) {
    this._dstFilterActionReset = value;
  }
  public resetDstFilterActionReset() {
    this._dstFilterActionReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstFilterActionResetInput() {
    return this._dstFilterActionReset;
  }

  // dst_filter_action_whitelist - computed: false, optional: true, required: false
  private _dstFilterActionWhitelist?: number; 
  public get dstFilterActionWhitelist() {
    return this.getNumberAttribute('dst_filter_action_whitelist');
  }
  public set dstFilterActionWhitelist(value: number) {
    this._dstFilterActionWhitelist = value;
  }
  public resetDstFilterActionWhitelist() {
    this._dstFilterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstFilterActionWhitelistInput() {
    return this._dstFilterActionWhitelist;
  }

  // dst_filter_match - computed: false, optional: true, required: false
  private _dstFilterMatch?: number; 
  public get dstFilterMatch() {
    return this.getNumberAttribute('dst_filter_match');
  }
  public set dstFilterMatch(value: number) {
    this._dstFilterMatch = value;
  }
  public resetDstFilterMatch() {
    this._dstFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstFilterMatchInput() {
    return this._dstFilterMatch;
  }

  // dst_filter_not_match - computed: false, optional: true, required: false
  private _dstFilterNotMatch?: number; 
  public get dstFilterNotMatch() {
    return this.getNumberAttribute('dst_filter_not_match');
  }
  public set dstFilterNotMatch(value: number) {
    this._dstFilterNotMatch = value;
  }
  public resetDstFilterNotMatch() {
    this._dstFilterNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstFilterNotMatchInput() {
    return this._dstFilterNotMatch;
  }

  // dst_filter_rate_exceed - computed: false, optional: true, required: false
  private _dstFilterRateExceed?: number; 
  public get dstFilterRateExceed() {
    return this.getNumberAttribute('dst_filter_rate_exceed');
  }
  public set dstFilterRateExceed(value: number) {
    this._dstFilterRateExceed = value;
  }
  public resetDstFilterRateExceed() {
    this._dstFilterRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstFilterRateExceedInput() {
    return this._dstFilterRateExceed;
  }

  // dst_post_rate_exceed - computed: false, optional: true, required: false
  private _dstPostRateExceed?: number; 
  public get dstPostRateExceed() {
    return this.getNumberAttribute('dst_post_rate_exceed');
  }
  public set dstPostRateExceed(value: number) {
    this._dstPostRateExceed = value;
  }
  public resetDstPostRateExceed() {
    this._dstPostRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPostRateExceedInput() {
    return this._dstPostRateExceed;
  }

  // dst_req_rate_exceed - computed: false, optional: true, required: false
  private _dstReqRateExceed?: number; 
  public get dstReqRateExceed() {
    return this.getNumberAttribute('dst_req_rate_exceed');
  }
  public set dstReqRateExceed(value: number) {
    this._dstReqRateExceed = value;
  }
  public resetDstReqRateExceed() {
    this._dstReqRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstReqRateExceedInput() {
    return this._dstReqRateExceed;
  }

  // dst_resp_rate_exceed - computed: false, optional: true, required: false
  private _dstRespRateExceed?: number; 
  public get dstRespRateExceed() {
    return this.getNumberAttribute('dst_resp_rate_exceed');
  }
  public set dstRespRateExceed(value: number) {
    this._dstRespRateExceed = value;
  }
  public resetDstRespRateExceed() {
    this._dstRespRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstRespRateExceedInput() {
    return this._dstRespRateExceed;
  }

  // error_condition - computed: false, optional: true, required: false
  private _errorCondition?: number; 
  public get errorCondition() {
    return this.getNumberAttribute('error_condition');
  }
  public set errorCondition(value: number) {
    this._errorCondition = value;
  }
  public resetErrorCondition() {
    this._errorCondition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorConditionInput() {
    return this._errorCondition;
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

  // header_processing_incomplete - computed: false, optional: true, required: false
  private _headerProcessingIncomplete?: number; 
  public get headerProcessingIncomplete() {
    return this.getNumberAttribute('header_processing_incomplete');
  }
  public set headerProcessingIncomplete(value: number) {
    this._headerProcessingIncomplete = value;
  }
  public resetHeaderProcessingIncomplete() {
    this._headerProcessingIncomplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerProcessingIncompleteInput() {
    return this._headerProcessingIncomplete;
  }

  // header_processing_time_0 - computed: false, optional: true, required: false
  private _headerProcessingTime0?: number; 
  public get headerProcessingTime0() {
    return this.getNumberAttribute('header_processing_time_0');
  }
  public set headerProcessingTime0(value: number) {
    this._headerProcessingTime0 = value;
  }
  public resetHeaderProcessingTime0() {
    this._headerProcessingTime0 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerProcessingTime0Input() {
    return this._headerProcessingTime0;
  }

  // header_processing_time_1 - computed: false, optional: true, required: false
  private _headerProcessingTime1?: number; 
  public get headerProcessingTime1() {
    return this.getNumberAttribute('header_processing_time_1');
  }
  public set headerProcessingTime1(value: number) {
    this._headerProcessingTime1 = value;
  }
  public resetHeaderProcessingTime1() {
    this._headerProcessingTime1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerProcessingTime1Input() {
    return this._headerProcessingTime1;
  }

  // header_processing_time_2 - computed: false, optional: true, required: false
  private _headerProcessingTime2?: number; 
  public get headerProcessingTime2() {
    return this.getNumberAttribute('header_processing_time_2');
  }
  public set headerProcessingTime2(value: number) {
    this._headerProcessingTime2 = value;
  }
  public resetHeaderProcessingTime2() {
    this._headerProcessingTime2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerProcessingTime2Input() {
    return this._headerProcessingTime2;
  }

  // header_processing_time_3 - computed: false, optional: true, required: false
  private _headerProcessingTime3?: number; 
  public get headerProcessingTime3() {
    return this.getNumberAttribute('header_processing_time_3');
  }
  public set headerProcessingTime3(value: number) {
    this._headerProcessingTime3 = value;
  }
  public resetHeaderProcessingTime3() {
    this._headerProcessingTime3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerProcessingTime3Input() {
    return this._headerProcessingTime3;
  }

  // hps_req_sz_16k - computed: false, optional: true, required: false
  private _hpsReqSz16K?: number; 
  public get hpsReqSz16K() {
    return this.getNumberAttribute('hps_req_sz_16k');
  }
  public set hpsReqSz16K(value: number) {
    this._hpsReqSz16K = value;
  }
  public resetHpsReqSz16K() {
    this._hpsReqSz16K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsReqSz16KInput() {
    return this._hpsReqSz16K;
  }

  // hps_req_sz_1k - computed: false, optional: true, required: false
  private _hpsReqSz1K?: number; 
  public get hpsReqSz1K() {
    return this.getNumberAttribute('hps_req_sz_1k');
  }
  public set hpsReqSz1K(value: number) {
    this._hpsReqSz1K = value;
  }
  public resetHpsReqSz1K() {
    this._hpsReqSz1K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsReqSz1KInput() {
    return this._hpsReqSz1K;
  }

  // hps_req_sz_256k - computed: false, optional: true, required: false
  private _hpsReqSz256K?: number; 
  public get hpsReqSz256K() {
    return this.getNumberAttribute('hps_req_sz_256k');
  }
  public set hpsReqSz256K(value: number) {
    this._hpsReqSz256K = value;
  }
  public resetHpsReqSz256K() {
    this._hpsReqSz256K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsReqSz256KInput() {
    return this._hpsReqSz256K;
  }

  // hps_req_sz_256k_plus - computed: false, optional: true, required: false
  private _hpsReqSz256KPlus?: number; 
  public get hpsReqSz256KPlus() {
    return this.getNumberAttribute('hps_req_sz_256k_plus');
  }
  public set hpsReqSz256KPlus(value: number) {
    this._hpsReqSz256KPlus = value;
  }
  public resetHpsReqSz256KPlus() {
    this._hpsReqSz256KPlus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsReqSz256KPlusInput() {
    return this._hpsReqSz256KPlus;
  }

  // hps_req_sz_2k - computed: false, optional: true, required: false
  private _hpsReqSz2K?: number; 
  public get hpsReqSz2K() {
    return this.getNumberAttribute('hps_req_sz_2k');
  }
  public set hpsReqSz2K(value: number) {
    this._hpsReqSz2K = value;
  }
  public resetHpsReqSz2K() {
    this._hpsReqSz2K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsReqSz2KInput() {
    return this._hpsReqSz2K;
  }

  // hps_req_sz_32k - computed: false, optional: true, required: false
  private _hpsReqSz32K?: number; 
  public get hpsReqSz32K() {
    return this.getNumberAttribute('hps_req_sz_32k');
  }
  public set hpsReqSz32K(value: number) {
    this._hpsReqSz32K = value;
  }
  public resetHpsReqSz32K() {
    this._hpsReqSz32K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsReqSz32KInput() {
    return this._hpsReqSz32K;
  }

  // hps_req_sz_4k - computed: false, optional: true, required: false
  private _hpsReqSz4K?: number; 
  public get hpsReqSz4K() {
    return this.getNumberAttribute('hps_req_sz_4k');
  }
  public set hpsReqSz4K(value: number) {
    this._hpsReqSz4K = value;
  }
  public resetHpsReqSz4K() {
    this._hpsReqSz4K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsReqSz4KInput() {
    return this._hpsReqSz4K;
  }

  // hps_req_sz_64k - computed: false, optional: true, required: false
  private _hpsReqSz64K?: number; 
  public get hpsReqSz64K() {
    return this.getNumberAttribute('hps_req_sz_64k');
  }
  public set hpsReqSz64K(value: number) {
    this._hpsReqSz64K = value;
  }
  public resetHpsReqSz64K() {
    this._hpsReqSz64K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsReqSz64KInput() {
    return this._hpsReqSz64K;
  }

  // hps_req_sz_8k - computed: false, optional: true, required: false
  private _hpsReqSz8K?: number; 
  public get hpsReqSz8K() {
    return this.getNumberAttribute('hps_req_sz_8k');
  }
  public set hpsReqSz8K(value: number) {
    this._hpsReqSz8K = value;
  }
  public resetHpsReqSz8K() {
    this._hpsReqSz8K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsReqSz8KInput() {
    return this._hpsReqSz8K;
  }

  // hps_rsp_10 - computed: false, optional: true, required: false
  private _hpsRsp10?: number; 
  public get hpsRsp10() {
    return this.getNumberAttribute('hps_rsp_10');
  }
  public set hpsRsp10(value: number) {
    this._hpsRsp10 = value;
  }
  public resetHpsRsp10() {
    this._hpsRsp10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsRsp10Input() {
    return this._hpsRsp10;
  }

  // hps_rsp_11 - computed: false, optional: true, required: false
  private _hpsRsp11?: number; 
  public get hpsRsp11() {
    return this.getNumberAttribute('hps_rsp_11');
  }
  public set hpsRsp11(value: number) {
    this._hpsRsp11 = value;
  }
  public resetHpsRsp11() {
    this._hpsRsp11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsRsp11Input() {
    return this._hpsRsp11;
  }

  // hps_rsp_status_1xx - computed: false, optional: true, required: false
  private _hpsRspStatus1Xx?: number; 
  public get hpsRspStatus1Xx() {
    return this.getNumberAttribute('hps_rsp_status_1xx');
  }
  public set hpsRspStatus1Xx(value: number) {
    this._hpsRspStatus1Xx = value;
  }
  public resetHpsRspStatus1Xx() {
    this._hpsRspStatus1Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsRspStatus1XxInput() {
    return this._hpsRspStatus1Xx;
  }

  // hps_rsp_status_2xx - computed: false, optional: true, required: false
  private _hpsRspStatus2Xx?: number; 
  public get hpsRspStatus2Xx() {
    return this.getNumberAttribute('hps_rsp_status_2xx');
  }
  public set hpsRspStatus2Xx(value: number) {
    this._hpsRspStatus2Xx = value;
  }
  public resetHpsRspStatus2Xx() {
    this._hpsRspStatus2Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsRspStatus2XxInput() {
    return this._hpsRspStatus2Xx;
  }

  // hps_rsp_status_3xx - computed: false, optional: true, required: false
  private _hpsRspStatus3Xx?: number; 
  public get hpsRspStatus3Xx() {
    return this.getNumberAttribute('hps_rsp_status_3xx');
  }
  public set hpsRspStatus3Xx(value: number) {
    this._hpsRspStatus3Xx = value;
  }
  public resetHpsRspStatus3Xx() {
    this._hpsRspStatus3Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsRspStatus3XxInput() {
    return this._hpsRspStatus3Xx;
  }

  // hps_rsp_status_4xx - computed: false, optional: true, required: false
  private _hpsRspStatus4Xx?: number; 
  public get hpsRspStatus4Xx() {
    return this.getNumberAttribute('hps_rsp_status_4xx');
  }
  public set hpsRspStatus4Xx(value: number) {
    this._hpsRspStatus4Xx = value;
  }
  public resetHpsRspStatus4Xx() {
    this._hpsRspStatus4Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsRspStatus4XxInput() {
    return this._hpsRspStatus4Xx;
  }

  // hps_rsp_status_504_ax - computed: false, optional: true, required: false
  private _hpsRspStatus504Ax?: number; 
  public get hpsRspStatus504Ax() {
    return this.getNumberAttribute('hps_rsp_status_504_ax');
  }
  public set hpsRspStatus504Ax(value: number) {
    this._hpsRspStatus504Ax = value;
  }
  public resetHpsRspStatus504Ax() {
    this._hpsRspStatus504Ax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsRspStatus504AxInput() {
    return this._hpsRspStatus504Ax;
  }

  // hps_rsp_status_5xx - computed: false, optional: true, required: false
  private _hpsRspStatus5Xx?: number; 
  public get hpsRspStatus5Xx() {
    return this.getNumberAttribute('hps_rsp_status_5xx');
  }
  public set hpsRspStatus5Xx(value: number) {
    this._hpsRspStatus5Xx = value;
  }
  public resetHpsRspStatus5Xx() {
    this._hpsRspStatus5Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsRspStatus5XxInput() {
    return this._hpsRspStatus5Xx;
  }

  // hps_rsp_status_6xx - computed: false, optional: true, required: false
  private _hpsRspStatus6Xx?: number; 
  public get hpsRspStatus6Xx() {
    return this.getNumberAttribute('hps_rsp_status_6xx');
  }
  public set hpsRspStatus6Xx(value: number) {
    this._hpsRspStatus6Xx = value;
  }
  public resetHpsRspStatus6Xx() {
    this._hpsRspStatus6Xx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsRspStatus6XxInput() {
    return this._hpsRspStatus6Xx;
  }

  // hps_rsp_status_unknown - computed: false, optional: true, required: false
  private _hpsRspStatusUnknown?: number; 
  public get hpsRspStatusUnknown() {
    return this.getNumberAttribute('hps_rsp_status_unknown');
  }
  public set hpsRspStatusUnknown(value: number) {
    this._hpsRspStatusUnknown = value;
  }
  public resetHpsRspStatusUnknown() {
    this._hpsRspStatusUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsRspStatusUnknownInput() {
    return this._hpsRspStatusUnknown;
  }

  // hps_rsp_sz_16k - computed: false, optional: true, required: false
  private _hpsRspSz16K?: number; 
  public get hpsRspSz16K() {
    return this.getNumberAttribute('hps_rsp_sz_16k');
  }
  public set hpsRspSz16K(value: number) {
    this._hpsRspSz16K = value;
  }
  public resetHpsRspSz16K() {
    this._hpsRspSz16K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsRspSz16KInput() {
    return this._hpsRspSz16K;
  }

  // hps_rsp_sz_1k - computed: false, optional: true, required: false
  private _hpsRspSz1K?: number; 
  public get hpsRspSz1K() {
    return this.getNumberAttribute('hps_rsp_sz_1k');
  }
  public set hpsRspSz1K(value: number) {
    this._hpsRspSz1K = value;
  }
  public resetHpsRspSz1K() {
    this._hpsRspSz1K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsRspSz1KInput() {
    return this._hpsRspSz1K;
  }

  // hps_rsp_sz_256k - computed: false, optional: true, required: false
  private _hpsRspSz256K?: number; 
  public get hpsRspSz256K() {
    return this.getNumberAttribute('hps_rsp_sz_256k');
  }
  public set hpsRspSz256K(value: number) {
    this._hpsRspSz256K = value;
  }
  public resetHpsRspSz256K() {
    this._hpsRspSz256K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsRspSz256KInput() {
    return this._hpsRspSz256K;
  }

  // hps_rsp_sz_256k_plus - computed: false, optional: true, required: false
  private _hpsRspSz256KPlus?: number; 
  public get hpsRspSz256KPlus() {
    return this.getNumberAttribute('hps_rsp_sz_256k_plus');
  }
  public set hpsRspSz256KPlus(value: number) {
    this._hpsRspSz256KPlus = value;
  }
  public resetHpsRspSz256KPlus() {
    this._hpsRspSz256KPlus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsRspSz256KPlusInput() {
    return this._hpsRspSz256KPlus;
  }

  // hps_rsp_sz_2k - computed: false, optional: true, required: false
  private _hpsRspSz2K?: number; 
  public get hpsRspSz2K() {
    return this.getNumberAttribute('hps_rsp_sz_2k');
  }
  public set hpsRspSz2K(value: number) {
    this._hpsRspSz2K = value;
  }
  public resetHpsRspSz2K() {
    this._hpsRspSz2K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsRspSz2KInput() {
    return this._hpsRspSz2K;
  }

  // hps_rsp_sz_32k - computed: false, optional: true, required: false
  private _hpsRspSz32K?: number; 
  public get hpsRspSz32K() {
    return this.getNumberAttribute('hps_rsp_sz_32k');
  }
  public set hpsRspSz32K(value: number) {
    this._hpsRspSz32K = value;
  }
  public resetHpsRspSz32K() {
    this._hpsRspSz32K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsRspSz32KInput() {
    return this._hpsRspSz32K;
  }

  // hps_rsp_sz_4k - computed: false, optional: true, required: false
  private _hpsRspSz4K?: number; 
  public get hpsRspSz4K() {
    return this.getNumberAttribute('hps_rsp_sz_4k');
  }
  public set hpsRspSz4K(value: number) {
    this._hpsRspSz4K = value;
  }
  public resetHpsRspSz4K() {
    this._hpsRspSz4K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsRspSz4KInput() {
    return this._hpsRspSz4K;
  }

  // hps_rsp_sz_64k - computed: false, optional: true, required: false
  private _hpsRspSz64K?: number; 
  public get hpsRspSz64K() {
    return this.getNumberAttribute('hps_rsp_sz_64k');
  }
  public set hpsRspSz64K(value: number) {
    this._hpsRspSz64K = value;
  }
  public resetHpsRspSz64K() {
    this._hpsRspSz64K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsRspSz64KInput() {
    return this._hpsRspSz64K;
  }

  // hps_rsp_sz_8k - computed: false, optional: true, required: false
  private _hpsRspSz8K?: number; 
  public get hpsRspSz8K() {
    return this.getNumberAttribute('hps_rsp_sz_8k');
  }
  public set hpsRspSz8K(value: number) {
    this._hpsRspSz8K = value;
  }
  public resetHpsRspSz8K() {
    this._hpsRspSz8K = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsRspSz8KInput() {
    return this._hpsRspSz8K;
  }

  // hps_server_rst - computed: false, optional: true, required: false
  private _hpsServerRst?: number; 
  public get hpsServerRst() {
    return this.getNumberAttribute('hps_server_rst');
  }
  public set hpsServerRst(value: number) {
    this._hpsServerRst = value;
  }
  public resetHpsServerRst() {
    this._hpsServerRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsServerRstInput() {
    return this._hpsServerRst;
  }

  // http10 - computed: false, optional: true, required: false
  private _http10?: number; 
  public get http10() {
    return this.getNumberAttribute('http10');
  }
  public set http10(value: number) {
    this._http10 = value;
  }
  public resetHttp10() {
    this._http10 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http10Input() {
    return this._http10;
  }

  // http11 - computed: false, optional: true, required: false
  private _http11?: number; 
  public get http11() {
    return this.getNumberAttribute('http11');
  }
  public set http11(value: number) {
    this._http11 = value;
  }
  public resetHttp11() {
    this._http11 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http11Input() {
    return this._http11;
  }

  // http_auth_drop - computed: false, optional: true, required: false
  private _httpAuthDrop?: number; 
  public get httpAuthDrop() {
    return this.getNumberAttribute('http_auth_drop');
  }
  public set httpAuthDrop(value: number) {
    this._httpAuthDrop = value;
  }
  public resetHttpAuthDrop() {
    this._httpAuthDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAuthDropInput() {
    return this._httpAuthDrop;
  }

  // http_auth_resp - computed: false, optional: true, required: false
  private _httpAuthResp?: number; 
  public get httpAuthResp() {
    return this.getNumberAttribute('http_auth_resp');
  }
  public set httpAuthResp(value: number) {
    this._httpAuthResp = value;
  }
  public resetHttpAuthResp() {
    this._httpAuthResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpAuthRespInput() {
    return this._httpAuthResp;
  }

  // http_connect - computed: false, optional: true, required: false
  private _httpConnect?: number; 
  public get httpConnect() {
    return this.getNumberAttribute('http_connect');
  }
  public set httpConnect(value: number) {
    this._httpConnect = value;
  }
  public resetHttpConnect() {
    this._httpConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpConnectInput() {
    return this._httpConnect;
  }

  // http_del - computed: false, optional: true, required: false
  private _httpDel?: number; 
  public get httpDel() {
    return this.getNumberAttribute('http_del');
  }
  public set httpDel(value: number) {
    this._httpDel = value;
  }
  public resetHttpDel() {
    this._httpDel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpDelInput() {
    return this._httpDel;
  }

  // http_get - computed: false, optional: true, required: false
  private _httpGet?: number; 
  public get httpGet() {
    return this.getNumberAttribute('http_get');
  }
  public set httpGet(value: number) {
    this._httpGet = value;
  }
  public resetHttpGet() {
    this._httpGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpGetInput() {
    return this._httpGet;
  }

  // http_head - computed: false, optional: true, required: false
  private _httpHead?: number; 
  public get httpHead() {
    return this.getNumberAttribute('http_head');
  }
  public set httpHead(value: number) {
    this._httpHead = value;
  }
  public resetHttpHead() {
    this._httpHead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadInput() {
    return this._httpHead;
  }

  // http_idle_timeout - computed: false, optional: true, required: false
  private _httpIdleTimeout?: number; 
  public get httpIdleTimeout() {
    return this.getNumberAttribute('http_idle_timeout');
  }
  public set httpIdleTimeout(value: number) {
    this._httpIdleTimeout = value;
  }
  public resetHttpIdleTimeout() {
    this._httpIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpIdleTimeoutInput() {
    return this._httpIdleTimeout;
  }

  // http_options - computed: false, optional: true, required: false
  private _httpOptions?: number; 
  public get httpOptions() {
    return this.getNumberAttribute('http_options');
  }
  public set httpOptions(value: number) {
    this._httpOptions = value;
  }
  public resetHttpOptions() {
    this._httpOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpOptionsInput() {
    return this._httpOptions;
  }

  // http_post - computed: false, optional: true, required: false
  private _httpPost?: number; 
  public get httpPost() {
    return this.getNumberAttribute('http_post');
  }
  public set httpPost(value: number) {
    this._httpPost = value;
  }
  public resetHttpPost() {
    this._httpPost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPostInput() {
    return this._httpPost;
  }

  // http_put - computed: false, optional: true, required: false
  private _httpPut?: number; 
  public get httpPut() {
    return this.getNumberAttribute('http_put');
  }
  public set httpPut(value: number) {
    this._httpPut = value;
  }
  public resetHttpPut() {
    this._httpPut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPutInput() {
    return this._httpPut;
  }

  // http_trace - computed: false, optional: true, required: false
  private _httpTrace?: number; 
  public get httpTrace() {
    return this.getNumberAttribute('http_trace');
  }
  public set httpTrace(value: number) {
    this._httpTrace = value;
  }
  public resetHttpTrace() {
    this._httpTrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTraceInput() {
    return this._httpTrace;
  }

  // http_unknown - computed: false, optional: true, required: false
  private _httpUnknown?: number; 
  public get httpUnknown() {
    return this.getNumberAttribute('http_unknown');
  }
  public set httpUnknown(value: number) {
    this._httpUnknown = value;
  }
  public resetHttpUnknown() {
    this._httpUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpUnknownInput() {
    return this._httpUnknown;
  }

  // invalid_hdr_name - computed: false, optional: true, required: false
  private _invalidHdrName?: number; 
  public get invalidHdrName() {
    return this.getNumberAttribute('invalid_hdr_name');
  }
  public set invalidHdrName(value: number) {
    this._invalidHdrName = value;
  }
  public resetInvalidHdrName() {
    this._invalidHdrName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidHdrNameInput() {
    return this._invalidHdrName;
  }

  // invalid_hdr_val - computed: false, optional: true, required: false
  private _invalidHdrVal?: number; 
  public get invalidHdrVal() {
    return this.getNumberAttribute('invalid_hdr_val');
  }
  public set invalidHdrVal(value: number) {
    this._invalidHdrVal = value;
  }
  public resetInvalidHdrVal() {
    this._invalidHdrVal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidHdrValInput() {
    return this._invalidHdrVal;
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

  // lower_than_mss_exceed - computed: false, optional: true, required: false
  private _lowerThanMssExceed?: number; 
  public get lowerThanMssExceed() {
    return this.getNumberAttribute('lower_than_mss_exceed');
  }
  public set lowerThanMssExceed(value: number) {
    this._lowerThanMssExceed = value;
  }
  public resetLowerThanMssExceed() {
    this._lowerThanMssExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowerThanMssExceedInput() {
    return this._lowerThanMssExceed;
  }

  // malform_bad_chunk - computed: false, optional: true, required: false
  private _malformBadChunk?: number; 
  public get malformBadChunk() {
    return this.getNumberAttribute('malform_bad_chunk');
  }
  public set malformBadChunk(value: number) {
    this._malformBadChunk = value;
  }
  public resetMalformBadChunk() {
    this._malformBadChunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformBadChunkInput() {
    return this._malformBadChunk;
  }

  // malform_content_len_too_long - computed: false, optional: true, required: false
  private _malformContentLenTooLong?: number; 
  public get malformContentLenTooLong() {
    return this.getNumberAttribute('malform_content_len_too_long');
  }
  public set malformContentLenTooLong(value: number) {
    this._malformContentLenTooLong = value;
  }
  public resetMalformContentLenTooLong() {
    this._malformContentLenTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformContentLenTooLongInput() {
    return this._malformContentLenTooLong;
  }

  // malform_header_name_too_long - computed: false, optional: true, required: false
  private _malformHeaderNameTooLong?: number; 
  public get malformHeaderNameTooLong() {
    return this.getNumberAttribute('malform_header_name_too_long');
  }
  public set malformHeaderNameTooLong(value: number) {
    this._malformHeaderNameTooLong = value;
  }
  public resetMalformHeaderNameTooLong() {
    this._malformHeaderNameTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformHeaderNameTooLongInput() {
    return this._malformHeaderNameTooLong;
  }

  // malform_line_too_long - computed: false, optional: true, required: false
  private _malformLineTooLong?: number; 
  public get malformLineTooLong() {
    return this.getNumberAttribute('malform_line_too_long');
  }
  public set malformLineTooLong(value: number) {
    this._malformLineTooLong = value;
  }
  public resetMalformLineTooLong() {
    this._malformLineTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformLineTooLongInput() {
    return this._malformLineTooLong;
  }

  // malform_req_line_invalid_method - computed: false, optional: true, required: false
  private _malformReqLineInvalidMethod?: number; 
  public get malformReqLineInvalidMethod() {
    return this.getNumberAttribute('malform_req_line_invalid_method');
  }
  public set malformReqLineInvalidMethod(value: number) {
    this._malformReqLineInvalidMethod = value;
  }
  public resetMalformReqLineInvalidMethod() {
    this._malformReqLineInvalidMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformReqLineInvalidMethodInput() {
    return this._malformReqLineInvalidMethod;
  }

  // malform_req_line_too_long - computed: false, optional: true, required: false
  private _malformReqLineTooLong?: number; 
  public get malformReqLineTooLong() {
    return this.getNumberAttribute('malform_req_line_too_long');
  }
  public set malformReqLineTooLong(value: number) {
    this._malformReqLineTooLong = value;
  }
  public resetMalformReqLineTooLong() {
    this._malformReqLineTooLong = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformReqLineTooLongInput() {
    return this._malformReqLineTooLong;
  }

  // malform_req_line_too_small - computed: false, optional: true, required: false
  private _malformReqLineTooSmall?: number; 
  public get malformReqLineTooSmall() {
    return this.getNumberAttribute('malform_req_line_too_small');
  }
  public set malformReqLineTooSmall(value: number) {
    this._malformReqLineTooSmall = value;
  }
  public resetMalformReqLineTooSmall() {
    this._malformReqLineTooSmall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformReqLineTooSmallInput() {
    return this._malformReqLineTooSmall;
  }

  // malform_too_many_headers - computed: false, optional: true, required: false
  private _malformTooManyHeaders?: number; 
  public get malformTooManyHeaders() {
    return this.getNumberAttribute('malform_too_many_headers');
  }
  public set malformTooManyHeaders(value: number) {
    this._malformTooManyHeaders = value;
  }
  public resetMalformTooManyHeaders() {
    this._malformTooManyHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformTooManyHeadersInput() {
    return this._malformTooManyHeaders;
  }

  // neg_req_remain - computed: false, optional: true, required: false
  private _negReqRemain?: number; 
  public get negReqRemain() {
    return this.getNumberAttribute('neg_req_remain');
  }
  public set negReqRemain(value: number) {
    this._negReqRemain = value;
  }
  public resetNegReqRemain() {
    this._negReqRemain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negReqRemainInput() {
    return this._negReqRemain;
  }

  // neg_rsp_remain - computed: false, optional: true, required: false
  private _negRspRemain?: number; 
  public get negRspRemain() {
    return this.getNumberAttribute('neg_rsp_remain');
  }
  public set negRspRemain(value: number) {
    this._negRspRemain = value;
  }
  public resetNegRspRemain() {
    this._negRspRemain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negRspRemainInput() {
    return this._negRspRemain;
  }

  // new_syn - computed: false, optional: true, required: false
  private _newSyn?: number; 
  public get newSyn() {
    return this.getNumberAttribute('new_syn');
  }
  public set newSyn(value: number) {
    this._newSyn = value;
  }
  public resetNewSyn() {
    this._newSyn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newSynInput() {
    return this._newSyn;
  }

  // ofo - computed: false, optional: true, required: false
  private _ofo?: number; 
  public get ofo() {
    return this.getNumberAttribute('ofo');
  }
  public set ofo(value: number) {
    this._ofo = value;
  }
  public resetOfo() {
    this._ofo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ofoInput() {
    return this._ofo;
  }

  // ofo_queue_exceed - computed: false, optional: true, required: false
  private _ofoQueueExceed?: number; 
  public get ofoQueueExceed() {
    return this.getNumberAttribute('ofo_queue_exceed');
  }
  public set ofoQueueExceed(value: number) {
    this._ofoQueueExceed = value;
  }
  public resetOfoQueueExceed() {
    this._ofoQueueExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ofoQueueExceedInput() {
    return this._ofoQueueExceed;
  }

  // ofo_timer_expired - computed: false, optional: true, required: false
  private _ofoTimerExpired?: number; 
  public get ofoTimerExpired() {
    return this.getNumberAttribute('ofo_timer_expired');
  }
  public set ofoTimerExpired(value: number) {
    this._ofoTimerExpired = value;
  }
  public resetOfoTimerExpired() {
    this._ofoTimerExpired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ofoTimerExpiredInput() {
    return this._ofoTimerExpired;
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

  // partial_hdr - computed: false, optional: true, required: false
  private _partialHdr?: number; 
  public get partialHdr() {
    return this.getNumberAttribute('partial_hdr');
  }
  public set partialHdr(value: number) {
    this._partialHdr = value;
  }
  public resetPartialHdr() {
    this._partialHdr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partialHdrInput() {
    return this._partialHdr;
  }

  // policy_drop - computed: false, optional: true, required: false
  private _policyDrop?: number; 
  public get policyDrop() {
    return this.getNumberAttribute('policy_drop');
  }
  public set policyDrop(value: number) {
    this._policyDrop = value;
  }
  public resetPolicyDrop() {
    this._policyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyDropInput() {
    return this._policyDrop;
  }

  // referer_filter_blacklist - computed: false, optional: true, required: false
  private _refererFilterBlacklist?: number; 
  public get refererFilterBlacklist() {
    return this.getNumberAttribute('referer_filter_blacklist');
  }
  public set refererFilterBlacklist(value: number) {
    this._refererFilterBlacklist = value;
  }
  public resetRefererFilterBlacklist() {
    this._refererFilterBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refererFilterBlacklistInput() {
    return this._refererFilterBlacklist;
  }

  // referer_filter_match - computed: false, optional: true, required: false
  private _refererFilterMatch?: number; 
  public get refererFilterMatch() {
    return this.getNumberAttribute('referer_filter_match');
  }
  public set refererFilterMatch(value: number) {
    this._refererFilterMatch = value;
  }
  public resetRefererFilterMatch() {
    this._refererFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refererFilterMatchInput() {
    return this._refererFilterMatch;
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

  // req_processed - computed: false, optional: true, required: false
  private _reqProcessed?: number; 
  public get reqProcessed() {
    return this.getNumberAttribute('req_processed');
  }
  public set reqProcessed(value: number) {
    this._reqProcessed = value;
  }
  public resetReqProcessed() {
    this._reqProcessed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqProcessedInput() {
    return this._reqProcessed;
  }

  // req_retrans - computed: false, optional: true, required: false
  private _reqRetrans?: number; 
  public get reqRetrans() {
    return this.getNumberAttribute('req_retrans');
  }
  public set reqRetrans(value: number) {
    this._reqRetrans = value;
  }
  public resetReqRetrans() {
    this._reqRetrans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqRetransInput() {
    return this._reqRetrans;
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

  // retrans - computed: false, optional: true, required: false
  private _retrans?: number; 
  public get retrans() {
    return this.getNumberAttribute('retrans');
  }
  public set retrans(value: number) {
    this._retrans = value;
  }
  public resetRetrans() {
    this._retrans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransInput() {
    return this._retrans;
  }

  // retrans_fin - computed: false, optional: true, required: false
  private _retransFin?: number; 
  public get retransFin() {
    return this.getNumberAttribute('retrans_fin');
  }
  public set retransFin(value: number) {
    this._retransFin = value;
  }
  public resetRetransFin() {
    this._retransFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransFinInput() {
    return this._retransFin;
  }

  // retrans_push - computed: false, optional: true, required: false
  private _retransPush?: number; 
  public get retransPush() {
    return this.getNumberAttribute('retrans_push');
  }
  public set retransPush(value: number) {
    this._retransPush = value;
  }
  public resetRetransPush() {
    this._retransPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransPushInput() {
    return this._retransPush;
  }

  // retrans_rst - computed: false, optional: true, required: false
  private _retransRst?: number; 
  public get retransRst() {
    return this.getNumberAttribute('retrans_rst');
  }
  public set retransRst(value: number) {
    this._retransRst = value;
  }
  public resetRetransRst() {
    this._retransRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retransRstInput() {
    return this._retransRst;
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

  // src_dst_filter_action_blacklist - computed: false, optional: true, required: false
  private _srcDstFilterActionBlacklist?: number; 
  public get srcDstFilterActionBlacklist() {
    return this.getNumberAttribute('src_dst_filter_action_blacklist');
  }
  public set srcDstFilterActionBlacklist(value: number) {
    this._srcDstFilterActionBlacklist = value;
  }
  public resetSrcDstFilterActionBlacklist() {
    this._srcDstFilterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstFilterActionBlacklistInput() {
    return this._srcDstFilterActionBlacklist;
  }

  // src_dst_filter_action_default_pass - computed: false, optional: true, required: false
  private _srcDstFilterActionDefaultPass?: number; 
  public get srcDstFilterActionDefaultPass() {
    return this.getNumberAttribute('src_dst_filter_action_default_pass');
  }
  public set srcDstFilterActionDefaultPass(value: number) {
    this._srcDstFilterActionDefaultPass = value;
  }
  public resetSrcDstFilterActionDefaultPass() {
    this._srcDstFilterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstFilterActionDefaultPassInput() {
    return this._srcDstFilterActionDefaultPass;
  }

  // src_dst_filter_action_drop - computed: false, optional: true, required: false
  private _srcDstFilterActionDrop?: number; 
  public get srcDstFilterActionDrop() {
    return this.getNumberAttribute('src_dst_filter_action_drop');
  }
  public set srcDstFilterActionDrop(value: number) {
    this._srcDstFilterActionDrop = value;
  }
  public resetSrcDstFilterActionDrop() {
    this._srcDstFilterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstFilterActionDropInput() {
    return this._srcDstFilterActionDrop;
  }

  // src_dst_filter_action_whitelist - computed: false, optional: true, required: false
  private _srcDstFilterActionWhitelist?: number; 
  public get srcDstFilterActionWhitelist() {
    return this.getNumberAttribute('src_dst_filter_action_whitelist');
  }
  public set srcDstFilterActionWhitelist(value: number) {
    this._srcDstFilterActionWhitelist = value;
  }
  public resetSrcDstFilterActionWhitelist() {
    this._srcDstFilterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstFilterActionWhitelistInput() {
    return this._srcDstFilterActionWhitelist;
  }

  // src_dst_filter_match - computed: false, optional: true, required: false
  private _srcDstFilterMatch?: number; 
  public get srcDstFilterMatch() {
    return this.getNumberAttribute('src_dst_filter_match');
  }
  public set srcDstFilterMatch(value: number) {
    this._srcDstFilterMatch = value;
  }
  public resetSrcDstFilterMatch() {
    this._srcDstFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstFilterMatchInput() {
    return this._srcDstFilterMatch;
  }

  // src_dst_filter_not_match - computed: false, optional: true, required: false
  private _srcDstFilterNotMatch?: number; 
  public get srcDstFilterNotMatch() {
    return this.getNumberAttribute('src_dst_filter_not_match');
  }
  public set srcDstFilterNotMatch(value: number) {
    this._srcDstFilterNotMatch = value;
  }
  public resetSrcDstFilterNotMatch() {
    this._srcDstFilterNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstFilterNotMatchInput() {
    return this._srcDstFilterNotMatch;
  }

  // src_filter_action_blacklist - computed: false, optional: true, required: false
  private _srcFilterActionBlacklist?: number; 
  public get srcFilterActionBlacklist() {
    return this.getNumberAttribute('src_filter_action_blacklist');
  }
  public set srcFilterActionBlacklist(value: number) {
    this._srcFilterActionBlacklist = value;
  }
  public resetSrcFilterActionBlacklist() {
    this._srcFilterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilterActionBlacklistInput() {
    return this._srcFilterActionBlacklist;
  }

  // src_filter_action_default_pass - computed: false, optional: true, required: false
  private _srcFilterActionDefaultPass?: number; 
  public get srcFilterActionDefaultPass() {
    return this.getNumberAttribute('src_filter_action_default_pass');
  }
  public set srcFilterActionDefaultPass(value: number) {
    this._srcFilterActionDefaultPass = value;
  }
  public resetSrcFilterActionDefaultPass() {
    this._srcFilterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilterActionDefaultPassInput() {
    return this._srcFilterActionDefaultPass;
  }

  // src_filter_action_drop - computed: false, optional: true, required: false
  private _srcFilterActionDrop?: number; 
  public get srcFilterActionDrop() {
    return this.getNumberAttribute('src_filter_action_drop');
  }
  public set srcFilterActionDrop(value: number) {
    this._srcFilterActionDrop = value;
  }
  public resetSrcFilterActionDrop() {
    this._srcFilterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilterActionDropInput() {
    return this._srcFilterActionDrop;
  }

  // src_filter_action_whitelist - computed: false, optional: true, required: false
  private _srcFilterActionWhitelist?: number; 
  public get srcFilterActionWhitelist() {
    return this.getNumberAttribute('src_filter_action_whitelist');
  }
  public set srcFilterActionWhitelist(value: number) {
    this._srcFilterActionWhitelist = value;
  }
  public resetSrcFilterActionWhitelist() {
    this._srcFilterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilterActionWhitelistInput() {
    return this._srcFilterActionWhitelist;
  }

  // src_filter_match - computed: false, optional: true, required: false
  private _srcFilterMatch?: number; 
  public get srcFilterMatch() {
    return this.getNumberAttribute('src_filter_match');
  }
  public set srcFilterMatch(value: number) {
    this._srcFilterMatch = value;
  }
  public resetSrcFilterMatch() {
    this._srcFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilterMatchInput() {
    return this._srcFilterMatch;
  }

  // src_filter_not_match - computed: false, optional: true, required: false
  private _srcFilterNotMatch?: number; 
  public get srcFilterNotMatch() {
    return this.getNumberAttribute('src_filter_not_match');
  }
  public set srcFilterNotMatch(value: number) {
    this._srcFilterNotMatch = value;
  }
  public resetSrcFilterNotMatch() {
    this._srcFilterNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcFilterNotMatchInput() {
    return this._srcFilterNotMatch;
  }

  // src_post_rate_exceed - computed: false, optional: true, required: false
  private _srcPostRateExceed?: number; 
  public get srcPostRateExceed() {
    return this.getNumberAttribute('src_post_rate_exceed');
  }
  public set srcPostRateExceed(value: number) {
    this._srcPostRateExceed = value;
  }
  public resetSrcPostRateExceed() {
    this._srcPostRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPostRateExceedInput() {
    return this._srcPostRateExceed;
  }

  // src_req_rate_exceed - computed: false, optional: true, required: false
  private _srcReqRateExceed?: number; 
  public get srcReqRateExceed() {
    return this.getNumberAttribute('src_req_rate_exceed');
  }
  public set srcReqRateExceed(value: number) {
    this._srcReqRateExceed = value;
  }
  public resetSrcReqRateExceed() {
    this._srcReqRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcReqRateExceedInput() {
    return this._srcReqRateExceed;
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

  // uri_filter_match - computed: false, optional: true, required: false
  private _uriFilterMatch?: number; 
  public get uriFilterMatch() {
    return this.getNumberAttribute('uri_filter_match');
  }
  public set uriFilterMatch(value: number) {
    this._uriFilterMatch = value;
  }
  public resetUriFilterMatch() {
    this._uriFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriFilterMatchInput() {
    return this._uriFilterMatch;
  }

  // use_hdr_ip_as_source - computed: false, optional: true, required: false
  private _useHdrIpAsSource?: number; 
  public get useHdrIpAsSource() {
    return this.getNumberAttribute('use_hdr_ip_as_source');
  }
  public set useHdrIpAsSource(value: number) {
    this._useHdrIpAsSource = value;
  }
  public resetUseHdrIpAsSource() {
    this._useHdrIpAsSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHdrIpAsSourceInput() {
    return this._useHdrIpAsSource;
  }

  // window_small - computed: false, optional: true, required: false
  private _windowSmall?: number; 
  public get windowSmall() {
    return this.getNumberAttribute('window_small');
  }
  public set windowSmall(value: number) {
    this._windowSmall = value;
  }
  public resetWindowSmall() {
    this._windowSmall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSmallInput() {
    return this._windowSmall;
  }

  // window_small_drop - computed: false, optional: true, required: false
  private _windowSmallDrop?: number; 
  public get windowSmallDrop() {
    return this.getNumberAttribute('window_small_drop');
  }
  public set windowSmallDrop(value: number) {
    this._windowSmallDrop = value;
  }
  public resetWindowSmallDrop() {
    this._windowSmallDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowSmallDropInput() {
    return this._windowSmallDrop;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats thunder_ddos_l7_http_stats}
*/
export class DataThunderDdosL7HttpStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_l7_http_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosL7HttpStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosL7HttpStats to import
  * @param importFromId The id of the existing DataThunderDdosL7HttpStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosL7HttpStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_l7_http_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_http_stats thunder_ddos_l7_http_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosL7HttpStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosL7HttpStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_l7_http_stats',
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
  private _stats = new DataThunderDdosL7HttpStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosL7HttpStatsStats) {
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
      stats: dataThunderDdosL7HttpStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderDdosL7HttpStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosL7HttpStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
