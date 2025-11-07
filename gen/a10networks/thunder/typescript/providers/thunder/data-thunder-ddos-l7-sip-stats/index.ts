// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosL7SipStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#id DataThunderDdosL7SipStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#stats DataThunderDdosL7SipStats#stats}
  */
  readonly stats?: DataThunderDdosL7SipStatsStats;
}
export interface DataThunderDdosL7SipStatsStats {
  /**
  * Body Too Big
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#body_too_big DataThunderDdosL7SipStats#body_too_big}
  */
  readonly bodyTooBig?: number;
  /**
  * Client Rst
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#client_rst DataThunderDdosL7SipStats#client_rst}
  */
  readonly clientRst?: number;
  /**
  * Concatenate Msessage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#concatenate_msg DataThunderDdosL7SipStats#concatenate_msg}
  */
  readonly concatenateMsg?: number;
  /**
  * Error Condition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#error_condition DataThunderDdosL7SipStats#error_condition}
  */
  readonly errorCondition?: number;
  /**
  * Get Content Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#get_content_fail_error DataThunderDdosL7SipStats#get_content_fail_error}
  */
  readonly fetchContentFailError?: number;
  /**
  * Header Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#header_filter_action_blacklist DataThunderDdosL7SipStats#header_filter_action_blacklist}
  */
  readonly headerFilterActionBlacklist?: number;
  /**
  * Header Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#header_filter_action_default_pass DataThunderDdosL7SipStats#header_filter_action_default_pass}
  */
  readonly headerFilterActionDefaultPass?: number;
  /**
  * Header Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#header_filter_action_drop DataThunderDdosL7SipStats#header_filter_action_drop}
  */
  readonly headerFilterActionDrop?: number;
  /**
  * Header Filter Action Whitelist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#header_filter_action_whitelist DataThunderDdosL7SipStats#header_filter_action_whitelist}
  */
  readonly headerFilterActionWhitelist?: number;
  /**
  * Header Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#header_filter_match DataThunderDdosL7SipStats#header_filter_match}
  */
  readonly headerFilterMatch?: number;
  /**
  * None Header Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#header_filter_none_match DataThunderDdosL7SipStats#header_filter_none_match}
  */
  readonly headerFilterNoneMatch?: number;
  /**
  * Header Filter Not Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#header_filter_not_match DataThunderDdosL7SipStats#header_filter_not_match}
  */
  readonly headerFilterNotMatch?: number;
  /**
  * Max Header Name Length Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#header_name_too_long DataThunderDdosL7SipStats#header_name_too_long}
  */
  readonly headerNameTooLong?: number;
  /**
  * Idle Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#idle_timeout DataThunderDdosL7SipStats#idle_timeout}
  */
  readonly idleTimeout?: number;
  /**
  * Invalid Header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#invalid_header DataThunderDdosL7SipStats#invalid_header}
  */
  readonly invalidHeader?: number;
  /**
  * Invalid Start Line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#invalid_start_line_error DataThunderDdosL7SipStats#invalid_start_line_error}
  */
  readonly invalidStartLineError?: number;
  /**
  * KeepAlive Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#keep_alive_msg DataThunderDdosL7SipStats#keep_alive_msg}
  */
  readonly keepAliveMsg?: number;
  /**
  * Line Memory Allocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#line_mem_allocated DataThunderDdosL7SipStats#line_mem_allocated}
  */
  readonly lineMemAllocated?: number;
  /**
  * Line Memory Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#line_mem_freed DataThunderDdosL7SipStats#line_mem_freed}
  */
  readonly lineMemFreed?: number;
  /**
  * Line Too Long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#line_too_long DataThunderDdosL7SipStats#line_too_long}
  */
  readonly lineTooLong?: number;
  /**
  * Malformed Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#malform_request DataThunderDdosL7SipStats#malform_request}
  */
  readonly malformRequest?: number;
  /**
  * Max Call ID Length Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#max_call_id_len_exceed DataThunderDdosL7SipStats#max_call_id_len_exceed}
  */
  readonly maxCallIdLenExceed?: number;
  /**
  * Max Header Value Length Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#max_header_value_len_exceed DataThunderDdosL7SipStats#max_header_value_len_exceed}
  */
  readonly maxHeaderValueLenExceed?: number;
  /**
  * Max SDP Length Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#max_sdp_len_exceed DataThunderDdosL7SipStats#max_sdp_len_exceed}
  */
  readonly maxSdpLenExceed?: number;
  /**
  * Max URI Length Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#max_uri_len_exceed DataThunderDdosL7SipStats#max_uri_len_exceed}
  */
  readonly maxUriLenExceed?: number;
  /**
  * Memory Allocate Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#mem_alloc_fail_error DataThunderDdosL7SipStats#mem_alloc_fail_error}
  */
  readonly memAllocFailError?: number;
  /**
  * Out-Of-Order Queue Size Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#ofo_queue_size_exceed DataThunderDdosL7SipStats#ofo_queue_size_exceed}
  */
  readonly ofoQueueSizeExceed?: number;
  /**
  * Out-of-Order Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#ofo_timeout DataThunderDdosL7SipStats#ofo_timeout}
  */
  readonly ofoTimeout?: number;
  /**
  * Header Parse Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#parse_header_fail_error DataThunderDdosL7SipStats#parse_header_fail_error}
  */
  readonly parseHeaderFailError?: number;
  /**
  * Start Line Parse Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#parse_start_line_error DataThunderDdosL7SipStats#parse_start_line_error}
  */
  readonly parseStartLineError?: number;
  /**
  * Packet Out-Of-Order Total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#pkts_ofo_total DataThunderDdosL7SipStats#pkts_ofo_total}
  */
  readonly pktsOfoTotal?: number;
  /**
  * Packets Retransmit Total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#pkts_retrans_total DataThunderDdosL7SipStats#pkts_retrans_total}
  */
  readonly pktsRetransTotal?: number;
  /**
  * Policy Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#policy_drop DataThunderDdosL7SipStats#policy_drop}
  */
  readonly policyDrop?: number;
  /**
  * Policy Violation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#policy_violation DataThunderDdosL7SipStats#policy_violation}
  */
  readonly policyViolation?: number;
  /**
  * Dst Request Rate 1 Limit Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#rate1_limit_exceed DataThunderDdosL7SipStats#rate1_limit_exceed}
  */
  readonly rate1LimitExceed?: number;
  /**
  * Dst Request Rate 2 Limit Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#rate2_limit_exceed DataThunderDdosL7SipStats#rate2_limit_exceed}
  */
  readonly rate2LimitExceed?: number;
  /**
  * Read Start Line Read Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#read_start_line_error DataThunderDdosL7SipStats#read_start_line_error}
  */
  readonly readStartLineError?: number;
  /**
  * Request Method ACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#request_method_ack DataThunderDdosL7SipStats#request_method_ack}
  */
  readonly requestMethodAck?: number;
  /**
  * Request Method BYE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#request_method_bye DataThunderDdosL7SipStats#request_method_bye}
  */
  readonly requestMethodBye?: number;
  /**
  * Request Method CANCEL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#request_method_cancel DataThunderDdosL7SipStats#request_method_cancel}
  */
  readonly requestMethodCancel?: number;
  /**
  * Request Method INFO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#request_method_info DataThunderDdosL7SipStats#request_method_info}
  */
  readonly requestMethodInfo?: number;
  /**
  * Request Method INVITE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#request_method_invite DataThunderDdosL7SipStats#request_method_invite}
  */
  readonly requestMethodInvite?: number;
  /**
  * Request Method MESSAGE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#request_method_message DataThunderDdosL7SipStats#request_method_message}
  */
  readonly requestMethodMessage?: number;
  /**
  * Request Method NOTIFY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#request_method_notify DataThunderDdosL7SipStats#request_method_notify}
  */
  readonly requestMethodNotify?: number;
  /**
  * Request Method OPTIONS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#request_method_options DataThunderDdosL7SipStats#request_method_options}
  */
  readonly requestMethodOptions?: number;
  /**
  * Request Method PRACK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#request_method_prack DataThunderDdosL7SipStats#request_method_prack}
  */
  readonly requestMethodPrack?: number;
  /**
  * Request Method PUBLISH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#request_method_publish DataThunderDdosL7SipStats#request_method_publish}
  */
  readonly requestMethodPublish?: number;
  /**
  * Request Method REFER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#request_method_refer DataThunderDdosL7SipStats#request_method_refer}
  */
  readonly requestMethodRefer?: number;
  /**
  * Request Method REGISTER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#request_method_register DataThunderDdosL7SipStats#request_method_register}
  */
  readonly requestMethodRegister?: number;
  /**
  * Request Method SUBSCRIBE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#request_method_subscribe DataThunderDdosL7SipStats#request_method_subscribe}
  */
  readonly requestMethodSubscribe?: number;
  /**
  * Unknown Request Method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#request_method_unknown DataThunderDdosL7SipStats#request_method_unknown}
  */
  readonly requestMethodUnknown?: number;
  /**
  * Request Method UPDATE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#request_method_update DataThunderDdosL7SipStats#request_method_update}
  */
  readonly requestMethodUpdate?: number;
  /**
  * Unknown Request Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#request_unknown_version DataThunderDdosL7SipStats#request_unknown_version}
  */
  readonly requestUnknownVersion?: number;
  /**
  * Response Status Code 1xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#response_1xx DataThunderDdosL7SipStats#response_1xx}
  */
  readonly response1Xx?: number;
  /**
  * Response Status Code 2xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#response_2xx DataThunderDdosL7SipStats#response_2xx}
  */
  readonly response2Xx?: number;
  /**
  * Response Status Code 3xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#response_3xx DataThunderDdosL7SipStats#response_3xx}
  */
  readonly response3Xx?: number;
  /**
  * Response Status Code 4xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#response_4xx DataThunderDdosL7SipStats#response_4xx}
  */
  readonly response4Xx?: number;
  /**
  * Response Status Code 5xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#response_5xx DataThunderDdosL7SipStats#response_5xx}
  */
  readonly response5Xx?: number;
  /**
  * Response Status Code 6xx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#response_6xx DataThunderDdosL7SipStats#response_6xx}
  */
  readonly response6Xx?: number;
  /**
  * Unknown Response Status Code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#response_unknown DataThunderDdosL7SipStats#response_unknown}
  */
  readonly responseUnknown?: number;
  /**
  * Unknown Response Version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#response_unknown_version DataThunderDdosL7SipStats#response_unknown_version}
  */
  readonly responseUnknownVersion?: number;
  /**
  * Sequence Check Out-Of-Order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#seq_check_ofo DataThunderDdosL7SipStats#seq_check_ofo}
  */
  readonly seqCheckOfo?: number;
  /**
  * Sequence Check Retransmit Fin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#seq_check_retrans_fin DataThunderDdosL7SipStats#seq_check_retrans_fin}
  */
  readonly seqCheckRetransFin?: number;
  /**
  * Sequence Check Retransmit Other
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#seq_check_retrans_other DataThunderDdosL7SipStats#seq_check_retrans_other}
  */
  readonly seqCheckRetransOther?: number;
  /**
  * Sequence Check Retransmit Push
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#seq_check_retrans_push DataThunderDdosL7SipStats#seq_check_retrans_push}
  */
  readonly seqCheckRetransPush?: number;
  /**
  * Sequence Check Retransmit Rst
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#seq_check_retrans_rst DataThunderDdosL7SipStats#seq_check_retrans_rst}
  */
  readonly seqCheckRetransRst?: number;
  /**
  * Src Header Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#src_dst_header_filter_action_blacklist DataThunderDdosL7SipStats#src_dst_header_filter_action_blacklist}
  */
  readonly srcDstHeaderFilterActionBlacklist?: number;
  /**
  * Src Header Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#src_dst_header_filter_action_default_pass DataThunderDdosL7SipStats#src_dst_header_filter_action_default_pass}
  */
  readonly srcDstHeaderFilterActionDefaultPass?: number;
  /**
  * Src Header Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#src_dst_header_filter_action_drop DataThunderDdosL7SipStats#src_dst_header_filter_action_drop}
  */
  readonly srcDstHeaderFilterActionDrop?: number;
  /**
  * Src Header Filter Action Whitelist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#src_dst_header_filter_action_whitelist DataThunderDdosL7SipStats#src_dst_header_filter_action_whitelist}
  */
  readonly srcDstHeaderFilterActionWhitelist?: number;
  /**
  * Src Header Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#src_dst_header_filter_match DataThunderDdosL7SipStats#src_dst_header_filter_match}
  */
  readonly srcDstHeaderFilterMatch?: number;
  /**
  * Src Header Filter Not Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#src_dst_header_filter_not_match DataThunderDdosL7SipStats#src_dst_header_filter_not_match}
  */
  readonly srcDstHeaderFilterNotMatch?: number;
  /**
  * Src Header Filter Action Blacklist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#src_header_filter_action_blacklist DataThunderDdosL7SipStats#src_header_filter_action_blacklist}
  */
  readonly srcHeaderFilterActionBlacklist?: number;
  /**
  * Src Header Filter Action Default Pass
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#src_header_filter_action_default_pass DataThunderDdosL7SipStats#src_header_filter_action_default_pass}
  */
  readonly srcHeaderFilterActionDefaultPass?: number;
  /**
  * Src Header Filter Action Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#src_header_filter_action_drop DataThunderDdosL7SipStats#src_header_filter_action_drop}
  */
  readonly srcHeaderFilterActionDrop?: number;
  /**
  * Src Header Filter Action Whitelist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#src_header_filter_action_whitelist DataThunderDdosL7SipStats#src_header_filter_action_whitelist}
  */
  readonly srcHeaderFilterActionWhitelist?: number;
  /**
  * Src Header Filter Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#src_header_filter_match DataThunderDdosL7SipStats#src_header_filter_match}
  */
  readonly srcHeaderFilterMatch?: number;
  /**
  * Src Header Filter Not Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#src_header_filter_not_match DataThunderDdosL7SipStats#src_header_filter_not_match}
  */
  readonly srcHeaderFilterNotMatch?: number;
  /**
  * Src Request Rate 1 Limit Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#src_rate1_limit_exceed DataThunderDdosL7SipStats#src_rate1_limit_exceed}
  */
  readonly srcRate1LimitExceed?: number;
  /**
  * Src Request Rate 2 Limit Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#src_rate2_limit_exceed DataThunderDdosL7SipStats#src_rate2_limit_exceed}
  */
  readonly srcRate2LimitExceed?: number;
  /**
  * Max Header Count Exceed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#too_many_header DataThunderDdosL7SipStats#too_many_header}
  */
  readonly tooManyHeader?: number;
}

export function dataThunderDdosL7SipStatsStatsToTerraform(struct?: DataThunderDdosL7SipStatsStatsOutputReference | DataThunderDdosL7SipStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body_too_big: cdktf.numberToTerraform(struct!.bodyTooBig),
    client_rst: cdktf.numberToTerraform(struct!.clientRst),
    concatenate_msg: cdktf.numberToTerraform(struct!.concatenateMsg),
    error_condition: cdktf.numberToTerraform(struct!.errorCondition),
    get_content_fail_error: cdktf.numberToTerraform(struct!.fetchContentFailError),
    header_filter_action_blacklist: cdktf.numberToTerraform(struct!.headerFilterActionBlacklist),
    header_filter_action_default_pass: cdktf.numberToTerraform(struct!.headerFilterActionDefaultPass),
    header_filter_action_drop: cdktf.numberToTerraform(struct!.headerFilterActionDrop),
    header_filter_action_whitelist: cdktf.numberToTerraform(struct!.headerFilterActionWhitelist),
    header_filter_match: cdktf.numberToTerraform(struct!.headerFilterMatch),
    header_filter_none_match: cdktf.numberToTerraform(struct!.headerFilterNoneMatch),
    header_filter_not_match: cdktf.numberToTerraform(struct!.headerFilterNotMatch),
    header_name_too_long: cdktf.numberToTerraform(struct!.headerNameTooLong),
    idle_timeout: cdktf.numberToTerraform(struct!.idleTimeout),
    invalid_header: cdktf.numberToTerraform(struct!.invalidHeader),
    invalid_start_line_error: cdktf.numberToTerraform(struct!.invalidStartLineError),
    keep_alive_msg: cdktf.numberToTerraform(struct!.keepAliveMsg),
    line_mem_allocated: cdktf.numberToTerraform(struct!.lineMemAllocated),
    line_mem_freed: cdktf.numberToTerraform(struct!.lineMemFreed),
    line_too_long: cdktf.numberToTerraform(struct!.lineTooLong),
    malform_request: cdktf.numberToTerraform(struct!.malformRequest),
    max_call_id_len_exceed: cdktf.numberToTerraform(struct!.maxCallIdLenExceed),
    max_header_value_len_exceed: cdktf.numberToTerraform(struct!.maxHeaderValueLenExceed),
    max_sdp_len_exceed: cdktf.numberToTerraform(struct!.maxSdpLenExceed),
    max_uri_len_exceed: cdktf.numberToTerraform(struct!.maxUriLenExceed),
    mem_alloc_fail_error: cdktf.numberToTerraform(struct!.memAllocFailError),
    ofo_queue_size_exceed: cdktf.numberToTerraform(struct!.ofoQueueSizeExceed),
    ofo_timeout: cdktf.numberToTerraform(struct!.ofoTimeout),
    parse_header_fail_error: cdktf.numberToTerraform(struct!.parseHeaderFailError),
    parse_start_line_error: cdktf.numberToTerraform(struct!.parseStartLineError),
    pkts_ofo_total: cdktf.numberToTerraform(struct!.pktsOfoTotal),
    pkts_retrans_total: cdktf.numberToTerraform(struct!.pktsRetransTotal),
    policy_drop: cdktf.numberToTerraform(struct!.policyDrop),
    policy_violation: cdktf.numberToTerraform(struct!.policyViolation),
    rate1_limit_exceed: cdktf.numberToTerraform(struct!.rate1LimitExceed),
    rate2_limit_exceed: cdktf.numberToTerraform(struct!.rate2LimitExceed),
    read_start_line_error: cdktf.numberToTerraform(struct!.readStartLineError),
    request_method_ack: cdktf.numberToTerraform(struct!.requestMethodAck),
    request_method_bye: cdktf.numberToTerraform(struct!.requestMethodBye),
    request_method_cancel: cdktf.numberToTerraform(struct!.requestMethodCancel),
    request_method_info: cdktf.numberToTerraform(struct!.requestMethodInfo),
    request_method_invite: cdktf.numberToTerraform(struct!.requestMethodInvite),
    request_method_message: cdktf.numberToTerraform(struct!.requestMethodMessage),
    request_method_notify: cdktf.numberToTerraform(struct!.requestMethodNotify),
    request_method_options: cdktf.numberToTerraform(struct!.requestMethodOptions),
    request_method_prack: cdktf.numberToTerraform(struct!.requestMethodPrack),
    request_method_publish: cdktf.numberToTerraform(struct!.requestMethodPublish),
    request_method_refer: cdktf.numberToTerraform(struct!.requestMethodRefer),
    request_method_register: cdktf.numberToTerraform(struct!.requestMethodRegister),
    request_method_subscribe: cdktf.numberToTerraform(struct!.requestMethodSubscribe),
    request_method_unknown: cdktf.numberToTerraform(struct!.requestMethodUnknown),
    request_method_update: cdktf.numberToTerraform(struct!.requestMethodUpdate),
    request_unknown_version: cdktf.numberToTerraform(struct!.requestUnknownVersion),
    response_1xx: cdktf.numberToTerraform(struct!.response1Xx),
    response_2xx: cdktf.numberToTerraform(struct!.response2Xx),
    response_3xx: cdktf.numberToTerraform(struct!.response3Xx),
    response_4xx: cdktf.numberToTerraform(struct!.response4Xx),
    response_5xx: cdktf.numberToTerraform(struct!.response5Xx),
    response_6xx: cdktf.numberToTerraform(struct!.response6Xx),
    response_unknown: cdktf.numberToTerraform(struct!.responseUnknown),
    response_unknown_version: cdktf.numberToTerraform(struct!.responseUnknownVersion),
    seq_check_ofo: cdktf.numberToTerraform(struct!.seqCheckOfo),
    seq_check_retrans_fin: cdktf.numberToTerraform(struct!.seqCheckRetransFin),
    seq_check_retrans_other: cdktf.numberToTerraform(struct!.seqCheckRetransOther),
    seq_check_retrans_push: cdktf.numberToTerraform(struct!.seqCheckRetransPush),
    seq_check_retrans_rst: cdktf.numberToTerraform(struct!.seqCheckRetransRst),
    src_dst_header_filter_action_blacklist: cdktf.numberToTerraform(struct!.srcDstHeaderFilterActionBlacklist),
    src_dst_header_filter_action_default_pass: cdktf.numberToTerraform(struct!.srcDstHeaderFilterActionDefaultPass),
    src_dst_header_filter_action_drop: cdktf.numberToTerraform(struct!.srcDstHeaderFilterActionDrop),
    src_dst_header_filter_action_whitelist: cdktf.numberToTerraform(struct!.srcDstHeaderFilterActionWhitelist),
    src_dst_header_filter_match: cdktf.numberToTerraform(struct!.srcDstHeaderFilterMatch),
    src_dst_header_filter_not_match: cdktf.numberToTerraform(struct!.srcDstHeaderFilterNotMatch),
    src_header_filter_action_blacklist: cdktf.numberToTerraform(struct!.srcHeaderFilterActionBlacklist),
    src_header_filter_action_default_pass: cdktf.numberToTerraform(struct!.srcHeaderFilterActionDefaultPass),
    src_header_filter_action_drop: cdktf.numberToTerraform(struct!.srcHeaderFilterActionDrop),
    src_header_filter_action_whitelist: cdktf.numberToTerraform(struct!.srcHeaderFilterActionWhitelist),
    src_header_filter_match: cdktf.numberToTerraform(struct!.srcHeaderFilterMatch),
    src_header_filter_not_match: cdktf.numberToTerraform(struct!.srcHeaderFilterNotMatch),
    src_rate1_limit_exceed: cdktf.numberToTerraform(struct!.srcRate1LimitExceed),
    src_rate2_limit_exceed: cdktf.numberToTerraform(struct!.srcRate2LimitExceed),
    too_many_header: cdktf.numberToTerraform(struct!.tooManyHeader),
  }
}


export function dataThunderDdosL7SipStatsStatsToHclTerraform(struct?: DataThunderDdosL7SipStatsStatsOutputReference | DataThunderDdosL7SipStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    body_too_big: {
      value: cdktf.numberToHclTerraform(struct!.bodyTooBig),
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
    concatenate_msg: {
      value: cdktf.numberToHclTerraform(struct!.concatenateMsg),
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
    get_content_fail_error: {
      value: cdktf.numberToHclTerraform(struct!.fetchContentFailError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.headerFilterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.headerFilterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.headerFilterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.headerFilterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.headerFilterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_filter_none_match: {
      value: cdktf.numberToHclTerraform(struct!.headerFilterNoneMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_filter_not_match: {
      value: cdktf.numberToHclTerraform(struct!.headerFilterNotMatch),
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
    idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.idleTimeout),
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
    invalid_start_line_error: {
      value: cdktf.numberToHclTerraform(struct!.invalidStartLineError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keep_alive_msg: {
      value: cdktf.numberToHclTerraform(struct!.keepAliveMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_mem_allocated: {
      value: cdktf.numberToHclTerraform(struct!.lineMemAllocated),
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
    malform_request: {
      value: cdktf.numberToHclTerraform(struct!.malformRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_call_id_len_exceed: {
      value: cdktf.numberToHclTerraform(struct!.maxCallIdLenExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_header_value_len_exceed: {
      value: cdktf.numberToHclTerraform(struct!.maxHeaderValueLenExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_sdp_len_exceed: {
      value: cdktf.numberToHclTerraform(struct!.maxSdpLenExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_uri_len_exceed: {
      value: cdktf.numberToHclTerraform(struct!.maxUriLenExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mem_alloc_fail_error: {
      value: cdktf.numberToHclTerraform(struct!.memAllocFailError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ofo_queue_size_exceed: {
      value: cdktf.numberToHclTerraform(struct!.ofoQueueSizeExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ofo_timeout: {
      value: cdktf.numberToHclTerraform(struct!.ofoTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_header_fail_error: {
      value: cdktf.numberToHclTerraform(struct!.parseHeaderFailError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_start_line_error: {
      value: cdktf.numberToHclTerraform(struct!.parseStartLineError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkts_ofo_total: {
      value: cdktf.numberToHclTerraform(struct!.pktsOfoTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkts_retrans_total: {
      value: cdktf.numberToHclTerraform(struct!.pktsRetransTotal),
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
    policy_violation: {
      value: cdktf.numberToHclTerraform(struct!.policyViolation),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate1_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.rate1LimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rate2_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.rate2LimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_start_line_error: {
      value: cdktf.numberToHclTerraform(struct!.readStartLineError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_method_ack: {
      value: cdktf.numberToHclTerraform(struct!.requestMethodAck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_method_bye: {
      value: cdktf.numberToHclTerraform(struct!.requestMethodBye),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_method_cancel: {
      value: cdktf.numberToHclTerraform(struct!.requestMethodCancel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_method_info: {
      value: cdktf.numberToHclTerraform(struct!.requestMethodInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_method_invite: {
      value: cdktf.numberToHclTerraform(struct!.requestMethodInvite),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_method_message: {
      value: cdktf.numberToHclTerraform(struct!.requestMethodMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_method_notify: {
      value: cdktf.numberToHclTerraform(struct!.requestMethodNotify),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_method_options: {
      value: cdktf.numberToHclTerraform(struct!.requestMethodOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_method_prack: {
      value: cdktf.numberToHclTerraform(struct!.requestMethodPrack),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_method_publish: {
      value: cdktf.numberToHclTerraform(struct!.requestMethodPublish),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_method_refer: {
      value: cdktf.numberToHclTerraform(struct!.requestMethodRefer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_method_register: {
      value: cdktf.numberToHclTerraform(struct!.requestMethodRegister),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_method_subscribe: {
      value: cdktf.numberToHclTerraform(struct!.requestMethodSubscribe),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_method_unknown: {
      value: cdktf.numberToHclTerraform(struct!.requestMethodUnknown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_method_update: {
      value: cdktf.numberToHclTerraform(struct!.requestMethodUpdate),
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
    seq_check_ofo: {
      value: cdktf.numberToHclTerraform(struct!.seqCheckOfo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seq_check_retrans_fin: {
      value: cdktf.numberToHclTerraform(struct!.seqCheckRetransFin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seq_check_retrans_other: {
      value: cdktf.numberToHclTerraform(struct!.seqCheckRetransOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seq_check_retrans_push: {
      value: cdktf.numberToHclTerraform(struct!.seqCheckRetransPush),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    seq_check_retrans_rst: {
      value: cdktf.numberToHclTerraform(struct!.seqCheckRetransRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_header_filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.srcDstHeaderFilterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_header_filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.srcDstHeaderFilterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_header_filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcDstHeaderFilterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_header_filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.srcDstHeaderFilterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_header_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.srcDstHeaderFilterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_dst_header_filter_not_match: {
      value: cdktf.numberToHclTerraform(struct!.srcDstHeaderFilterNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter_action_blacklist: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilterActionBlacklist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter_action_default_pass: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilterActionDefaultPass),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter_action_drop: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilterActionDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter_action_whitelist: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilterActionWhitelist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter_match: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_header_filter_not_match: {
      value: cdktf.numberToHclTerraform(struct!.srcHeaderFilterNotMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_rate1_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.srcRate1LimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_rate2_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.srcRate2LimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    too_many_header: {
      value: cdktf.numberToHclTerraform(struct!.tooManyHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosL7SipStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosL7SipStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bodyTooBig !== undefined) {
      hasAnyValues = true;
      internalValueResult.bodyTooBig = this._bodyTooBig;
    }
    if (this._clientRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRst = this._clientRst;
    }
    if (this._concatenateMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.concatenateMsg = this._concatenateMsg;
    }
    if (this._errorCondition !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorCondition = this._errorCondition;
    }
    if (this._getContentFailError !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchContentFailError = this._getContentFailError;
    }
    if (this._headerFilterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerFilterActionBlacklist = this._headerFilterActionBlacklist;
    }
    if (this._headerFilterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerFilterActionDefaultPass = this._headerFilterActionDefaultPass;
    }
    if (this._headerFilterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerFilterActionDrop = this._headerFilterActionDrop;
    }
    if (this._headerFilterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerFilterActionWhitelist = this._headerFilterActionWhitelist;
    }
    if (this._headerFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerFilterMatch = this._headerFilterMatch;
    }
    if (this._headerFilterNoneMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerFilterNoneMatch = this._headerFilterNoneMatch;
    }
    if (this._headerFilterNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerFilterNotMatch = this._headerFilterNotMatch;
    }
    if (this._headerNameTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerNameTooLong = this._headerNameTooLong;
    }
    if (this._idleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleTimeout = this._idleTimeout;
    }
    if (this._invalidHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidHeader = this._invalidHeader;
    }
    if (this._invalidStartLineError !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidStartLineError = this._invalidStartLineError;
    }
    if (this._keepAliveMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepAliveMsg = this._keepAliveMsg;
    }
    if (this._lineMemAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineMemAllocated = this._lineMemAllocated;
    }
    if (this._lineMemFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineMemFreed = this._lineMemFreed;
    }
    if (this._lineTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineTooLong = this._lineTooLong;
    }
    if (this._malformRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformRequest = this._malformRequest;
    }
    if (this._maxCallIdLenExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCallIdLenExceed = this._maxCallIdLenExceed;
    }
    if (this._maxHeaderValueLenExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeaderValueLenExceed = this._maxHeaderValueLenExceed;
    }
    if (this._maxSdpLenExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSdpLenExceed = this._maxSdpLenExceed;
    }
    if (this._maxUriLenExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxUriLenExceed = this._maxUriLenExceed;
    }
    if (this._memAllocFailError !== undefined) {
      hasAnyValues = true;
      internalValueResult.memAllocFailError = this._memAllocFailError;
    }
    if (this._ofoQueueSizeExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.ofoQueueSizeExceed = this._ofoQueueSizeExceed;
    }
    if (this._ofoTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.ofoTimeout = this._ofoTimeout;
    }
    if (this._parseHeaderFailError !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseHeaderFailError = this._parseHeaderFailError;
    }
    if (this._parseStartLineError !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseStartLineError = this._parseStartLineError;
    }
    if (this._pktsOfoTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktsOfoTotal = this._pktsOfoTotal;
    }
    if (this._pktsRetransTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktsRetransTotal = this._pktsRetransTotal;
    }
    if (this._policyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyDrop = this._policyDrop;
    }
    if (this._policyViolation !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyViolation = this._policyViolation;
    }
    if (this._rate1LimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate1LimitExceed = this._rate1LimitExceed;
    }
    if (this._rate2LimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.rate2LimitExceed = this._rate2LimitExceed;
    }
    if (this._readStartLineError !== undefined) {
      hasAnyValues = true;
      internalValueResult.readStartLineError = this._readStartLineError;
    }
    if (this._requestMethodAck !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodAck = this._requestMethodAck;
    }
    if (this._requestMethodBye !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodBye = this._requestMethodBye;
    }
    if (this._requestMethodCancel !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodCancel = this._requestMethodCancel;
    }
    if (this._requestMethodInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodInfo = this._requestMethodInfo;
    }
    if (this._requestMethodInvite !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodInvite = this._requestMethodInvite;
    }
    if (this._requestMethodMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodMessage = this._requestMethodMessage;
    }
    if (this._requestMethodNotify !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodNotify = this._requestMethodNotify;
    }
    if (this._requestMethodOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodOptions = this._requestMethodOptions;
    }
    if (this._requestMethodPrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodPrack = this._requestMethodPrack;
    }
    if (this._requestMethodPublish !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodPublish = this._requestMethodPublish;
    }
    if (this._requestMethodRefer !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodRefer = this._requestMethodRefer;
    }
    if (this._requestMethodRegister !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodRegister = this._requestMethodRegister;
    }
    if (this._requestMethodSubscribe !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodSubscribe = this._requestMethodSubscribe;
    }
    if (this._requestMethodUnknown !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodUnknown = this._requestMethodUnknown;
    }
    if (this._requestMethodUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMethodUpdate = this._requestMethodUpdate;
    }
    if (this._requestUnknownVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestUnknownVersion = this._requestUnknownVersion;
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
    if (this._seqCheckOfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.seqCheckOfo = this._seqCheckOfo;
    }
    if (this._seqCheckRetransFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.seqCheckRetransFin = this._seqCheckRetransFin;
    }
    if (this._seqCheckRetransOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.seqCheckRetransOther = this._seqCheckRetransOther;
    }
    if (this._seqCheckRetransPush !== undefined) {
      hasAnyValues = true;
      internalValueResult.seqCheckRetransPush = this._seqCheckRetransPush;
    }
    if (this._seqCheckRetransRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.seqCheckRetransRst = this._seqCheckRetransRst;
    }
    if (this._srcDstHeaderFilterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstHeaderFilterActionBlacklist = this._srcDstHeaderFilterActionBlacklist;
    }
    if (this._srcDstHeaderFilterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstHeaderFilterActionDefaultPass = this._srcDstHeaderFilterActionDefaultPass;
    }
    if (this._srcDstHeaderFilterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstHeaderFilterActionDrop = this._srcDstHeaderFilterActionDrop;
    }
    if (this._srcDstHeaderFilterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstHeaderFilterActionWhitelist = this._srcDstHeaderFilterActionWhitelist;
    }
    if (this._srcDstHeaderFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstHeaderFilterMatch = this._srcDstHeaderFilterMatch;
    }
    if (this._srcDstHeaderFilterNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcDstHeaderFilterNotMatch = this._srcDstHeaderFilterNotMatch;
    }
    if (this._srcHeaderFilterActionBlacklist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilterActionBlacklist = this._srcHeaderFilterActionBlacklist;
    }
    if (this._srcHeaderFilterActionDefaultPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilterActionDefaultPass = this._srcHeaderFilterActionDefaultPass;
    }
    if (this._srcHeaderFilterActionDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilterActionDrop = this._srcHeaderFilterActionDrop;
    }
    if (this._srcHeaderFilterActionWhitelist !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilterActionWhitelist = this._srcHeaderFilterActionWhitelist;
    }
    if (this._srcHeaderFilterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilterMatch = this._srcHeaderFilterMatch;
    }
    if (this._srcHeaderFilterNotMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcHeaderFilterNotMatch = this._srcHeaderFilterNotMatch;
    }
    if (this._srcRate1LimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRate1LimitExceed = this._srcRate1LimitExceed;
    }
    if (this._srcRate2LimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcRate2LimitExceed = this._srcRate2LimitExceed;
    }
    if (this._tooManyHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooManyHeader = this._tooManyHeader;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosL7SipStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bodyTooBig = undefined;
      this._clientRst = undefined;
      this._concatenateMsg = undefined;
      this._errorCondition = undefined;
      this._getContentFailError = undefined;
      this._headerFilterActionBlacklist = undefined;
      this._headerFilterActionDefaultPass = undefined;
      this._headerFilterActionDrop = undefined;
      this._headerFilterActionWhitelist = undefined;
      this._headerFilterMatch = undefined;
      this._headerFilterNoneMatch = undefined;
      this._headerFilterNotMatch = undefined;
      this._headerNameTooLong = undefined;
      this._idleTimeout = undefined;
      this._invalidHeader = undefined;
      this._invalidStartLineError = undefined;
      this._keepAliveMsg = undefined;
      this._lineMemAllocated = undefined;
      this._lineMemFreed = undefined;
      this._lineTooLong = undefined;
      this._malformRequest = undefined;
      this._maxCallIdLenExceed = undefined;
      this._maxHeaderValueLenExceed = undefined;
      this._maxSdpLenExceed = undefined;
      this._maxUriLenExceed = undefined;
      this._memAllocFailError = undefined;
      this._ofoQueueSizeExceed = undefined;
      this._ofoTimeout = undefined;
      this._parseHeaderFailError = undefined;
      this._parseStartLineError = undefined;
      this._pktsOfoTotal = undefined;
      this._pktsRetransTotal = undefined;
      this._policyDrop = undefined;
      this._policyViolation = undefined;
      this._rate1LimitExceed = undefined;
      this._rate2LimitExceed = undefined;
      this._readStartLineError = undefined;
      this._requestMethodAck = undefined;
      this._requestMethodBye = undefined;
      this._requestMethodCancel = undefined;
      this._requestMethodInfo = undefined;
      this._requestMethodInvite = undefined;
      this._requestMethodMessage = undefined;
      this._requestMethodNotify = undefined;
      this._requestMethodOptions = undefined;
      this._requestMethodPrack = undefined;
      this._requestMethodPublish = undefined;
      this._requestMethodRefer = undefined;
      this._requestMethodRegister = undefined;
      this._requestMethodSubscribe = undefined;
      this._requestMethodUnknown = undefined;
      this._requestMethodUpdate = undefined;
      this._requestUnknownVersion = undefined;
      this._response1Xx = undefined;
      this._response2Xx = undefined;
      this._response3Xx = undefined;
      this._response4Xx = undefined;
      this._response5Xx = undefined;
      this._response6Xx = undefined;
      this._responseUnknown = undefined;
      this._responseUnknownVersion = undefined;
      this._seqCheckOfo = undefined;
      this._seqCheckRetransFin = undefined;
      this._seqCheckRetransOther = undefined;
      this._seqCheckRetransPush = undefined;
      this._seqCheckRetransRst = undefined;
      this._srcDstHeaderFilterActionBlacklist = undefined;
      this._srcDstHeaderFilterActionDefaultPass = undefined;
      this._srcDstHeaderFilterActionDrop = undefined;
      this._srcDstHeaderFilterActionWhitelist = undefined;
      this._srcDstHeaderFilterMatch = undefined;
      this._srcDstHeaderFilterNotMatch = undefined;
      this._srcHeaderFilterActionBlacklist = undefined;
      this._srcHeaderFilterActionDefaultPass = undefined;
      this._srcHeaderFilterActionDrop = undefined;
      this._srcHeaderFilterActionWhitelist = undefined;
      this._srcHeaderFilterMatch = undefined;
      this._srcHeaderFilterNotMatch = undefined;
      this._srcRate1LimitExceed = undefined;
      this._srcRate2LimitExceed = undefined;
      this._tooManyHeader = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bodyTooBig = value.bodyTooBig;
      this._clientRst = value.clientRst;
      this._concatenateMsg = value.concatenateMsg;
      this._errorCondition = value.errorCondition;
      this._getContentFailError = value.fetchContentFailError;
      this._headerFilterActionBlacklist = value.headerFilterActionBlacklist;
      this._headerFilterActionDefaultPass = value.headerFilterActionDefaultPass;
      this._headerFilterActionDrop = value.headerFilterActionDrop;
      this._headerFilterActionWhitelist = value.headerFilterActionWhitelist;
      this._headerFilterMatch = value.headerFilterMatch;
      this._headerFilterNoneMatch = value.headerFilterNoneMatch;
      this._headerFilterNotMatch = value.headerFilterNotMatch;
      this._headerNameTooLong = value.headerNameTooLong;
      this._idleTimeout = value.idleTimeout;
      this._invalidHeader = value.invalidHeader;
      this._invalidStartLineError = value.invalidStartLineError;
      this._keepAliveMsg = value.keepAliveMsg;
      this._lineMemAllocated = value.lineMemAllocated;
      this._lineMemFreed = value.lineMemFreed;
      this._lineTooLong = value.lineTooLong;
      this._malformRequest = value.malformRequest;
      this._maxCallIdLenExceed = value.maxCallIdLenExceed;
      this._maxHeaderValueLenExceed = value.maxHeaderValueLenExceed;
      this._maxSdpLenExceed = value.maxSdpLenExceed;
      this._maxUriLenExceed = value.maxUriLenExceed;
      this._memAllocFailError = value.memAllocFailError;
      this._ofoQueueSizeExceed = value.ofoQueueSizeExceed;
      this._ofoTimeout = value.ofoTimeout;
      this._parseHeaderFailError = value.parseHeaderFailError;
      this._parseStartLineError = value.parseStartLineError;
      this._pktsOfoTotal = value.pktsOfoTotal;
      this._pktsRetransTotal = value.pktsRetransTotal;
      this._policyDrop = value.policyDrop;
      this._policyViolation = value.policyViolation;
      this._rate1LimitExceed = value.rate1LimitExceed;
      this._rate2LimitExceed = value.rate2LimitExceed;
      this._readStartLineError = value.readStartLineError;
      this._requestMethodAck = value.requestMethodAck;
      this._requestMethodBye = value.requestMethodBye;
      this._requestMethodCancel = value.requestMethodCancel;
      this._requestMethodInfo = value.requestMethodInfo;
      this._requestMethodInvite = value.requestMethodInvite;
      this._requestMethodMessage = value.requestMethodMessage;
      this._requestMethodNotify = value.requestMethodNotify;
      this._requestMethodOptions = value.requestMethodOptions;
      this._requestMethodPrack = value.requestMethodPrack;
      this._requestMethodPublish = value.requestMethodPublish;
      this._requestMethodRefer = value.requestMethodRefer;
      this._requestMethodRegister = value.requestMethodRegister;
      this._requestMethodSubscribe = value.requestMethodSubscribe;
      this._requestMethodUnknown = value.requestMethodUnknown;
      this._requestMethodUpdate = value.requestMethodUpdate;
      this._requestUnknownVersion = value.requestUnknownVersion;
      this._response1Xx = value.response1Xx;
      this._response2Xx = value.response2Xx;
      this._response3Xx = value.response3Xx;
      this._response4Xx = value.response4Xx;
      this._response5Xx = value.response5Xx;
      this._response6Xx = value.response6Xx;
      this._responseUnknown = value.responseUnknown;
      this._responseUnknownVersion = value.responseUnknownVersion;
      this._seqCheckOfo = value.seqCheckOfo;
      this._seqCheckRetransFin = value.seqCheckRetransFin;
      this._seqCheckRetransOther = value.seqCheckRetransOther;
      this._seqCheckRetransPush = value.seqCheckRetransPush;
      this._seqCheckRetransRst = value.seqCheckRetransRst;
      this._srcDstHeaderFilterActionBlacklist = value.srcDstHeaderFilterActionBlacklist;
      this._srcDstHeaderFilterActionDefaultPass = value.srcDstHeaderFilterActionDefaultPass;
      this._srcDstHeaderFilterActionDrop = value.srcDstHeaderFilterActionDrop;
      this._srcDstHeaderFilterActionWhitelist = value.srcDstHeaderFilterActionWhitelist;
      this._srcDstHeaderFilterMatch = value.srcDstHeaderFilterMatch;
      this._srcDstHeaderFilterNotMatch = value.srcDstHeaderFilterNotMatch;
      this._srcHeaderFilterActionBlacklist = value.srcHeaderFilterActionBlacklist;
      this._srcHeaderFilterActionDefaultPass = value.srcHeaderFilterActionDefaultPass;
      this._srcHeaderFilterActionDrop = value.srcHeaderFilterActionDrop;
      this._srcHeaderFilterActionWhitelist = value.srcHeaderFilterActionWhitelist;
      this._srcHeaderFilterMatch = value.srcHeaderFilterMatch;
      this._srcHeaderFilterNotMatch = value.srcHeaderFilterNotMatch;
      this._srcRate1LimitExceed = value.srcRate1LimitExceed;
      this._srcRate2LimitExceed = value.srcRate2LimitExceed;
      this._tooManyHeader = value.tooManyHeader;
    }
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

  // get_content_fail_error - computed: false, optional: true, required: false
  private _getContentFailError?: number; 
  public get fetchContentFailError() {
    return this.getNumberAttribute('get_content_fail_error');
  }
  public set fetchContentFailError(value: number) {
    this._getContentFailError = value;
  }
  public resetFetchContentFailError() {
    this._getContentFailError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchContentFailErrorInput() {
    return this._getContentFailError;
  }

  // header_filter_action_blacklist - computed: false, optional: true, required: false
  private _headerFilterActionBlacklist?: number; 
  public get headerFilterActionBlacklist() {
    return this.getNumberAttribute('header_filter_action_blacklist');
  }
  public set headerFilterActionBlacklist(value: number) {
    this._headerFilterActionBlacklist = value;
  }
  public resetHeaderFilterActionBlacklist() {
    this._headerFilterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerFilterActionBlacklistInput() {
    return this._headerFilterActionBlacklist;
  }

  // header_filter_action_default_pass - computed: false, optional: true, required: false
  private _headerFilterActionDefaultPass?: number; 
  public get headerFilterActionDefaultPass() {
    return this.getNumberAttribute('header_filter_action_default_pass');
  }
  public set headerFilterActionDefaultPass(value: number) {
    this._headerFilterActionDefaultPass = value;
  }
  public resetHeaderFilterActionDefaultPass() {
    this._headerFilterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerFilterActionDefaultPassInput() {
    return this._headerFilterActionDefaultPass;
  }

  // header_filter_action_drop - computed: false, optional: true, required: false
  private _headerFilterActionDrop?: number; 
  public get headerFilterActionDrop() {
    return this.getNumberAttribute('header_filter_action_drop');
  }
  public set headerFilterActionDrop(value: number) {
    this._headerFilterActionDrop = value;
  }
  public resetHeaderFilterActionDrop() {
    this._headerFilterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerFilterActionDropInput() {
    return this._headerFilterActionDrop;
  }

  // header_filter_action_whitelist - computed: false, optional: true, required: false
  private _headerFilterActionWhitelist?: number; 
  public get headerFilterActionWhitelist() {
    return this.getNumberAttribute('header_filter_action_whitelist');
  }
  public set headerFilterActionWhitelist(value: number) {
    this._headerFilterActionWhitelist = value;
  }
  public resetHeaderFilterActionWhitelist() {
    this._headerFilterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerFilterActionWhitelistInput() {
    return this._headerFilterActionWhitelist;
  }

  // header_filter_match - computed: false, optional: true, required: false
  private _headerFilterMatch?: number; 
  public get headerFilterMatch() {
    return this.getNumberAttribute('header_filter_match');
  }
  public set headerFilterMatch(value: number) {
    this._headerFilterMatch = value;
  }
  public resetHeaderFilterMatch() {
    this._headerFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerFilterMatchInput() {
    return this._headerFilterMatch;
  }

  // header_filter_none_match - computed: false, optional: true, required: false
  private _headerFilterNoneMatch?: number; 
  public get headerFilterNoneMatch() {
    return this.getNumberAttribute('header_filter_none_match');
  }
  public set headerFilterNoneMatch(value: number) {
    this._headerFilterNoneMatch = value;
  }
  public resetHeaderFilterNoneMatch() {
    this._headerFilterNoneMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerFilterNoneMatchInput() {
    return this._headerFilterNoneMatch;
  }

  // header_filter_not_match - computed: false, optional: true, required: false
  private _headerFilterNotMatch?: number; 
  public get headerFilterNotMatch() {
    return this.getNumberAttribute('header_filter_not_match');
  }
  public set headerFilterNotMatch(value: number) {
    this._headerFilterNotMatch = value;
  }
  public resetHeaderFilterNotMatch() {
    this._headerFilterNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerFilterNotMatchInput() {
    return this._headerFilterNotMatch;
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

  // idle_timeout - computed: false, optional: true, required: false
  private _idleTimeout?: number; 
  public get idleTimeout() {
    return this.getNumberAttribute('idle_timeout');
  }
  public set idleTimeout(value: number) {
    this._idleTimeout = value;
  }
  public resetIdleTimeout() {
    this._idleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleTimeoutInput() {
    return this._idleTimeout;
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

  // invalid_start_line_error - computed: false, optional: true, required: false
  private _invalidStartLineError?: number; 
  public get invalidStartLineError() {
    return this.getNumberAttribute('invalid_start_line_error');
  }
  public set invalidStartLineError(value: number) {
    this._invalidStartLineError = value;
  }
  public resetInvalidStartLineError() {
    this._invalidStartLineError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidStartLineErrorInput() {
    return this._invalidStartLineError;
  }

  // keep_alive_msg - computed: false, optional: true, required: false
  private _keepAliveMsg?: number; 
  public get keepAliveMsg() {
    return this.getNumberAttribute('keep_alive_msg');
  }
  public set keepAliveMsg(value: number) {
    this._keepAliveMsg = value;
  }
  public resetKeepAliveMsg() {
    this._keepAliveMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveMsgInput() {
    return this._keepAliveMsg;
  }

  // line_mem_allocated - computed: false, optional: true, required: false
  private _lineMemAllocated?: number; 
  public get lineMemAllocated() {
    return this.getNumberAttribute('line_mem_allocated');
  }
  public set lineMemAllocated(value: number) {
    this._lineMemAllocated = value;
  }
  public resetLineMemAllocated() {
    this._lineMemAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineMemAllocatedInput() {
    return this._lineMemAllocated;
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

  // malform_request - computed: false, optional: true, required: false
  private _malformRequest?: number; 
  public get malformRequest() {
    return this.getNumberAttribute('malform_request');
  }
  public set malformRequest(value: number) {
    this._malformRequest = value;
  }
  public resetMalformRequest() {
    this._malformRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformRequestInput() {
    return this._malformRequest;
  }

  // max_call_id_len_exceed - computed: false, optional: true, required: false
  private _maxCallIdLenExceed?: number; 
  public get maxCallIdLenExceed() {
    return this.getNumberAttribute('max_call_id_len_exceed');
  }
  public set maxCallIdLenExceed(value: number) {
    this._maxCallIdLenExceed = value;
  }
  public resetMaxCallIdLenExceed() {
    this._maxCallIdLenExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCallIdLenExceedInput() {
    return this._maxCallIdLenExceed;
  }

  // max_header_value_len_exceed - computed: false, optional: true, required: false
  private _maxHeaderValueLenExceed?: number; 
  public get maxHeaderValueLenExceed() {
    return this.getNumberAttribute('max_header_value_len_exceed');
  }
  public set maxHeaderValueLenExceed(value: number) {
    this._maxHeaderValueLenExceed = value;
  }
  public resetMaxHeaderValueLenExceed() {
    this._maxHeaderValueLenExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeaderValueLenExceedInput() {
    return this._maxHeaderValueLenExceed;
  }

  // max_sdp_len_exceed - computed: false, optional: true, required: false
  private _maxSdpLenExceed?: number; 
  public get maxSdpLenExceed() {
    return this.getNumberAttribute('max_sdp_len_exceed');
  }
  public set maxSdpLenExceed(value: number) {
    this._maxSdpLenExceed = value;
  }
  public resetMaxSdpLenExceed() {
    this._maxSdpLenExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSdpLenExceedInput() {
    return this._maxSdpLenExceed;
  }

  // max_uri_len_exceed - computed: false, optional: true, required: false
  private _maxUriLenExceed?: number; 
  public get maxUriLenExceed() {
    return this.getNumberAttribute('max_uri_len_exceed');
  }
  public set maxUriLenExceed(value: number) {
    this._maxUriLenExceed = value;
  }
  public resetMaxUriLenExceed() {
    this._maxUriLenExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxUriLenExceedInput() {
    return this._maxUriLenExceed;
  }

  // mem_alloc_fail_error - computed: false, optional: true, required: false
  private _memAllocFailError?: number; 
  public get memAllocFailError() {
    return this.getNumberAttribute('mem_alloc_fail_error');
  }
  public set memAllocFailError(value: number) {
    this._memAllocFailError = value;
  }
  public resetMemAllocFailError() {
    this._memAllocFailError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memAllocFailErrorInput() {
    return this._memAllocFailError;
  }

  // ofo_queue_size_exceed - computed: false, optional: true, required: false
  private _ofoQueueSizeExceed?: number; 
  public get ofoQueueSizeExceed() {
    return this.getNumberAttribute('ofo_queue_size_exceed');
  }
  public set ofoQueueSizeExceed(value: number) {
    this._ofoQueueSizeExceed = value;
  }
  public resetOfoQueueSizeExceed() {
    this._ofoQueueSizeExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ofoQueueSizeExceedInput() {
    return this._ofoQueueSizeExceed;
  }

  // ofo_timeout - computed: false, optional: true, required: false
  private _ofoTimeout?: number; 
  public get ofoTimeout() {
    return this.getNumberAttribute('ofo_timeout');
  }
  public set ofoTimeout(value: number) {
    this._ofoTimeout = value;
  }
  public resetOfoTimeout() {
    this._ofoTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ofoTimeoutInput() {
    return this._ofoTimeout;
  }

  // parse_header_fail_error - computed: false, optional: true, required: false
  private _parseHeaderFailError?: number; 
  public get parseHeaderFailError() {
    return this.getNumberAttribute('parse_header_fail_error');
  }
  public set parseHeaderFailError(value: number) {
    this._parseHeaderFailError = value;
  }
  public resetParseHeaderFailError() {
    this._parseHeaderFailError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseHeaderFailErrorInput() {
    return this._parseHeaderFailError;
  }

  // parse_start_line_error - computed: false, optional: true, required: false
  private _parseStartLineError?: number; 
  public get parseStartLineError() {
    return this.getNumberAttribute('parse_start_line_error');
  }
  public set parseStartLineError(value: number) {
    this._parseStartLineError = value;
  }
  public resetParseStartLineError() {
    this._parseStartLineError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseStartLineErrorInput() {
    return this._parseStartLineError;
  }

  // pkts_ofo_total - computed: false, optional: true, required: false
  private _pktsOfoTotal?: number; 
  public get pktsOfoTotal() {
    return this.getNumberAttribute('pkts_ofo_total');
  }
  public set pktsOfoTotal(value: number) {
    this._pktsOfoTotal = value;
  }
  public resetPktsOfoTotal() {
    this._pktsOfoTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktsOfoTotalInput() {
    return this._pktsOfoTotal;
  }

  // pkts_retrans_total - computed: false, optional: true, required: false
  private _pktsRetransTotal?: number; 
  public get pktsRetransTotal() {
    return this.getNumberAttribute('pkts_retrans_total');
  }
  public set pktsRetransTotal(value: number) {
    this._pktsRetransTotal = value;
  }
  public resetPktsRetransTotal() {
    this._pktsRetransTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktsRetransTotalInput() {
    return this._pktsRetransTotal;
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

  // policy_violation - computed: false, optional: true, required: false
  private _policyViolation?: number; 
  public get policyViolation() {
    return this.getNumberAttribute('policy_violation');
  }
  public set policyViolation(value: number) {
    this._policyViolation = value;
  }
  public resetPolicyViolation() {
    this._policyViolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyViolationInput() {
    return this._policyViolation;
  }

  // rate1_limit_exceed - computed: false, optional: true, required: false
  private _rate1LimitExceed?: number; 
  public get rate1LimitExceed() {
    return this.getNumberAttribute('rate1_limit_exceed');
  }
  public set rate1LimitExceed(value: number) {
    this._rate1LimitExceed = value;
  }
  public resetRate1LimitExceed() {
    this._rate1LimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rate1LimitExceedInput() {
    return this._rate1LimitExceed;
  }

  // rate2_limit_exceed - computed: false, optional: true, required: false
  private _rate2LimitExceed?: number; 
  public get rate2LimitExceed() {
    return this.getNumberAttribute('rate2_limit_exceed');
  }
  public set rate2LimitExceed(value: number) {
    this._rate2LimitExceed = value;
  }
  public resetRate2LimitExceed() {
    this._rate2LimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rate2LimitExceedInput() {
    return this._rate2LimitExceed;
  }

  // read_start_line_error - computed: false, optional: true, required: false
  private _readStartLineError?: number; 
  public get readStartLineError() {
    return this.getNumberAttribute('read_start_line_error');
  }
  public set readStartLineError(value: number) {
    this._readStartLineError = value;
  }
  public resetReadStartLineError() {
    this._readStartLineError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readStartLineErrorInput() {
    return this._readStartLineError;
  }

  // request_method_ack - computed: false, optional: true, required: false
  private _requestMethodAck?: number; 
  public get requestMethodAck() {
    return this.getNumberAttribute('request_method_ack');
  }
  public set requestMethodAck(value: number) {
    this._requestMethodAck = value;
  }
  public resetRequestMethodAck() {
    this._requestMethodAck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodAckInput() {
    return this._requestMethodAck;
  }

  // request_method_bye - computed: false, optional: true, required: false
  private _requestMethodBye?: number; 
  public get requestMethodBye() {
    return this.getNumberAttribute('request_method_bye');
  }
  public set requestMethodBye(value: number) {
    this._requestMethodBye = value;
  }
  public resetRequestMethodBye() {
    this._requestMethodBye = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodByeInput() {
    return this._requestMethodBye;
  }

  // request_method_cancel - computed: false, optional: true, required: false
  private _requestMethodCancel?: number; 
  public get requestMethodCancel() {
    return this.getNumberAttribute('request_method_cancel');
  }
  public set requestMethodCancel(value: number) {
    this._requestMethodCancel = value;
  }
  public resetRequestMethodCancel() {
    this._requestMethodCancel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodCancelInput() {
    return this._requestMethodCancel;
  }

  // request_method_info - computed: false, optional: true, required: false
  private _requestMethodInfo?: number; 
  public get requestMethodInfo() {
    return this.getNumberAttribute('request_method_info');
  }
  public set requestMethodInfo(value: number) {
    this._requestMethodInfo = value;
  }
  public resetRequestMethodInfo() {
    this._requestMethodInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodInfoInput() {
    return this._requestMethodInfo;
  }

  // request_method_invite - computed: false, optional: true, required: false
  private _requestMethodInvite?: number; 
  public get requestMethodInvite() {
    return this.getNumberAttribute('request_method_invite');
  }
  public set requestMethodInvite(value: number) {
    this._requestMethodInvite = value;
  }
  public resetRequestMethodInvite() {
    this._requestMethodInvite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodInviteInput() {
    return this._requestMethodInvite;
  }

  // request_method_message - computed: false, optional: true, required: false
  private _requestMethodMessage?: number; 
  public get requestMethodMessage() {
    return this.getNumberAttribute('request_method_message');
  }
  public set requestMethodMessage(value: number) {
    this._requestMethodMessage = value;
  }
  public resetRequestMethodMessage() {
    this._requestMethodMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodMessageInput() {
    return this._requestMethodMessage;
  }

  // request_method_notify - computed: false, optional: true, required: false
  private _requestMethodNotify?: number; 
  public get requestMethodNotify() {
    return this.getNumberAttribute('request_method_notify');
  }
  public set requestMethodNotify(value: number) {
    this._requestMethodNotify = value;
  }
  public resetRequestMethodNotify() {
    this._requestMethodNotify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodNotifyInput() {
    return this._requestMethodNotify;
  }

  // request_method_options - computed: false, optional: true, required: false
  private _requestMethodOptions?: number; 
  public get requestMethodOptions() {
    return this.getNumberAttribute('request_method_options');
  }
  public set requestMethodOptions(value: number) {
    this._requestMethodOptions = value;
  }
  public resetRequestMethodOptions() {
    this._requestMethodOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodOptionsInput() {
    return this._requestMethodOptions;
  }

  // request_method_prack - computed: false, optional: true, required: false
  private _requestMethodPrack?: number; 
  public get requestMethodPrack() {
    return this.getNumberAttribute('request_method_prack');
  }
  public set requestMethodPrack(value: number) {
    this._requestMethodPrack = value;
  }
  public resetRequestMethodPrack() {
    this._requestMethodPrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodPrackInput() {
    return this._requestMethodPrack;
  }

  // request_method_publish - computed: false, optional: true, required: false
  private _requestMethodPublish?: number; 
  public get requestMethodPublish() {
    return this.getNumberAttribute('request_method_publish');
  }
  public set requestMethodPublish(value: number) {
    this._requestMethodPublish = value;
  }
  public resetRequestMethodPublish() {
    this._requestMethodPublish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodPublishInput() {
    return this._requestMethodPublish;
  }

  // request_method_refer - computed: false, optional: true, required: false
  private _requestMethodRefer?: number; 
  public get requestMethodRefer() {
    return this.getNumberAttribute('request_method_refer');
  }
  public set requestMethodRefer(value: number) {
    this._requestMethodRefer = value;
  }
  public resetRequestMethodRefer() {
    this._requestMethodRefer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodReferInput() {
    return this._requestMethodRefer;
  }

  // request_method_register - computed: false, optional: true, required: false
  private _requestMethodRegister?: number; 
  public get requestMethodRegister() {
    return this.getNumberAttribute('request_method_register');
  }
  public set requestMethodRegister(value: number) {
    this._requestMethodRegister = value;
  }
  public resetRequestMethodRegister() {
    this._requestMethodRegister = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodRegisterInput() {
    return this._requestMethodRegister;
  }

  // request_method_subscribe - computed: false, optional: true, required: false
  private _requestMethodSubscribe?: number; 
  public get requestMethodSubscribe() {
    return this.getNumberAttribute('request_method_subscribe');
  }
  public set requestMethodSubscribe(value: number) {
    this._requestMethodSubscribe = value;
  }
  public resetRequestMethodSubscribe() {
    this._requestMethodSubscribe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodSubscribeInput() {
    return this._requestMethodSubscribe;
  }

  // request_method_unknown - computed: false, optional: true, required: false
  private _requestMethodUnknown?: number; 
  public get requestMethodUnknown() {
    return this.getNumberAttribute('request_method_unknown');
  }
  public set requestMethodUnknown(value: number) {
    this._requestMethodUnknown = value;
  }
  public resetRequestMethodUnknown() {
    this._requestMethodUnknown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodUnknownInput() {
    return this._requestMethodUnknown;
  }

  // request_method_update - computed: false, optional: true, required: false
  private _requestMethodUpdate?: number; 
  public get requestMethodUpdate() {
    return this.getNumberAttribute('request_method_update');
  }
  public set requestMethodUpdate(value: number) {
    this._requestMethodUpdate = value;
  }
  public resetRequestMethodUpdate() {
    this._requestMethodUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMethodUpdateInput() {
    return this._requestMethodUpdate;
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

  // seq_check_ofo - computed: false, optional: true, required: false
  private _seqCheckOfo?: number; 
  public get seqCheckOfo() {
    return this.getNumberAttribute('seq_check_ofo');
  }
  public set seqCheckOfo(value: number) {
    this._seqCheckOfo = value;
  }
  public resetSeqCheckOfo() {
    this._seqCheckOfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqCheckOfoInput() {
    return this._seqCheckOfo;
  }

  // seq_check_retrans_fin - computed: false, optional: true, required: false
  private _seqCheckRetransFin?: number; 
  public get seqCheckRetransFin() {
    return this.getNumberAttribute('seq_check_retrans_fin');
  }
  public set seqCheckRetransFin(value: number) {
    this._seqCheckRetransFin = value;
  }
  public resetSeqCheckRetransFin() {
    this._seqCheckRetransFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqCheckRetransFinInput() {
    return this._seqCheckRetransFin;
  }

  // seq_check_retrans_other - computed: false, optional: true, required: false
  private _seqCheckRetransOther?: number; 
  public get seqCheckRetransOther() {
    return this.getNumberAttribute('seq_check_retrans_other');
  }
  public set seqCheckRetransOther(value: number) {
    this._seqCheckRetransOther = value;
  }
  public resetSeqCheckRetransOther() {
    this._seqCheckRetransOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqCheckRetransOtherInput() {
    return this._seqCheckRetransOther;
  }

  // seq_check_retrans_push - computed: false, optional: true, required: false
  private _seqCheckRetransPush?: number; 
  public get seqCheckRetransPush() {
    return this.getNumberAttribute('seq_check_retrans_push');
  }
  public set seqCheckRetransPush(value: number) {
    this._seqCheckRetransPush = value;
  }
  public resetSeqCheckRetransPush() {
    this._seqCheckRetransPush = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqCheckRetransPushInput() {
    return this._seqCheckRetransPush;
  }

  // seq_check_retrans_rst - computed: false, optional: true, required: false
  private _seqCheckRetransRst?: number; 
  public get seqCheckRetransRst() {
    return this.getNumberAttribute('seq_check_retrans_rst');
  }
  public set seqCheckRetransRst(value: number) {
    this._seqCheckRetransRst = value;
  }
  public resetSeqCheckRetransRst() {
    this._seqCheckRetransRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seqCheckRetransRstInput() {
    return this._seqCheckRetransRst;
  }

  // src_dst_header_filter_action_blacklist - computed: false, optional: true, required: false
  private _srcDstHeaderFilterActionBlacklist?: number; 
  public get srcDstHeaderFilterActionBlacklist() {
    return this.getNumberAttribute('src_dst_header_filter_action_blacklist');
  }
  public set srcDstHeaderFilterActionBlacklist(value: number) {
    this._srcDstHeaderFilterActionBlacklist = value;
  }
  public resetSrcDstHeaderFilterActionBlacklist() {
    this._srcDstHeaderFilterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstHeaderFilterActionBlacklistInput() {
    return this._srcDstHeaderFilterActionBlacklist;
  }

  // src_dst_header_filter_action_default_pass - computed: false, optional: true, required: false
  private _srcDstHeaderFilterActionDefaultPass?: number; 
  public get srcDstHeaderFilterActionDefaultPass() {
    return this.getNumberAttribute('src_dst_header_filter_action_default_pass');
  }
  public set srcDstHeaderFilterActionDefaultPass(value: number) {
    this._srcDstHeaderFilterActionDefaultPass = value;
  }
  public resetSrcDstHeaderFilterActionDefaultPass() {
    this._srcDstHeaderFilterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstHeaderFilterActionDefaultPassInput() {
    return this._srcDstHeaderFilterActionDefaultPass;
  }

  // src_dst_header_filter_action_drop - computed: false, optional: true, required: false
  private _srcDstHeaderFilterActionDrop?: number; 
  public get srcDstHeaderFilterActionDrop() {
    return this.getNumberAttribute('src_dst_header_filter_action_drop');
  }
  public set srcDstHeaderFilterActionDrop(value: number) {
    this._srcDstHeaderFilterActionDrop = value;
  }
  public resetSrcDstHeaderFilterActionDrop() {
    this._srcDstHeaderFilterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstHeaderFilterActionDropInput() {
    return this._srcDstHeaderFilterActionDrop;
  }

  // src_dst_header_filter_action_whitelist - computed: false, optional: true, required: false
  private _srcDstHeaderFilterActionWhitelist?: number; 
  public get srcDstHeaderFilterActionWhitelist() {
    return this.getNumberAttribute('src_dst_header_filter_action_whitelist');
  }
  public set srcDstHeaderFilterActionWhitelist(value: number) {
    this._srcDstHeaderFilterActionWhitelist = value;
  }
  public resetSrcDstHeaderFilterActionWhitelist() {
    this._srcDstHeaderFilterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstHeaderFilterActionWhitelistInput() {
    return this._srcDstHeaderFilterActionWhitelist;
  }

  // src_dst_header_filter_match - computed: false, optional: true, required: false
  private _srcDstHeaderFilterMatch?: number; 
  public get srcDstHeaderFilterMatch() {
    return this.getNumberAttribute('src_dst_header_filter_match');
  }
  public set srcDstHeaderFilterMatch(value: number) {
    this._srcDstHeaderFilterMatch = value;
  }
  public resetSrcDstHeaderFilterMatch() {
    this._srcDstHeaderFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstHeaderFilterMatchInput() {
    return this._srcDstHeaderFilterMatch;
  }

  // src_dst_header_filter_not_match - computed: false, optional: true, required: false
  private _srcDstHeaderFilterNotMatch?: number; 
  public get srcDstHeaderFilterNotMatch() {
    return this.getNumberAttribute('src_dst_header_filter_not_match');
  }
  public set srcDstHeaderFilterNotMatch(value: number) {
    this._srcDstHeaderFilterNotMatch = value;
  }
  public resetSrcDstHeaderFilterNotMatch() {
    this._srcDstHeaderFilterNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDstHeaderFilterNotMatchInput() {
    return this._srcDstHeaderFilterNotMatch;
  }

  // src_header_filter_action_blacklist - computed: false, optional: true, required: false
  private _srcHeaderFilterActionBlacklist?: number; 
  public get srcHeaderFilterActionBlacklist() {
    return this.getNumberAttribute('src_header_filter_action_blacklist');
  }
  public set srcHeaderFilterActionBlacklist(value: number) {
    this._srcHeaderFilterActionBlacklist = value;
  }
  public resetSrcHeaderFilterActionBlacklist() {
    this._srcHeaderFilterActionBlacklist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilterActionBlacklistInput() {
    return this._srcHeaderFilterActionBlacklist;
  }

  // src_header_filter_action_default_pass - computed: false, optional: true, required: false
  private _srcHeaderFilterActionDefaultPass?: number; 
  public get srcHeaderFilterActionDefaultPass() {
    return this.getNumberAttribute('src_header_filter_action_default_pass');
  }
  public set srcHeaderFilterActionDefaultPass(value: number) {
    this._srcHeaderFilterActionDefaultPass = value;
  }
  public resetSrcHeaderFilterActionDefaultPass() {
    this._srcHeaderFilterActionDefaultPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilterActionDefaultPassInput() {
    return this._srcHeaderFilterActionDefaultPass;
  }

  // src_header_filter_action_drop - computed: false, optional: true, required: false
  private _srcHeaderFilterActionDrop?: number; 
  public get srcHeaderFilterActionDrop() {
    return this.getNumberAttribute('src_header_filter_action_drop');
  }
  public set srcHeaderFilterActionDrop(value: number) {
    this._srcHeaderFilterActionDrop = value;
  }
  public resetSrcHeaderFilterActionDrop() {
    this._srcHeaderFilterActionDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilterActionDropInput() {
    return this._srcHeaderFilterActionDrop;
  }

  // src_header_filter_action_whitelist - computed: false, optional: true, required: false
  private _srcHeaderFilterActionWhitelist?: number; 
  public get srcHeaderFilterActionWhitelist() {
    return this.getNumberAttribute('src_header_filter_action_whitelist');
  }
  public set srcHeaderFilterActionWhitelist(value: number) {
    this._srcHeaderFilterActionWhitelist = value;
  }
  public resetSrcHeaderFilterActionWhitelist() {
    this._srcHeaderFilterActionWhitelist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilterActionWhitelistInput() {
    return this._srcHeaderFilterActionWhitelist;
  }

  // src_header_filter_match - computed: false, optional: true, required: false
  private _srcHeaderFilterMatch?: number; 
  public get srcHeaderFilterMatch() {
    return this.getNumberAttribute('src_header_filter_match');
  }
  public set srcHeaderFilterMatch(value: number) {
    this._srcHeaderFilterMatch = value;
  }
  public resetSrcHeaderFilterMatch() {
    this._srcHeaderFilterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilterMatchInput() {
    return this._srcHeaderFilterMatch;
  }

  // src_header_filter_not_match - computed: false, optional: true, required: false
  private _srcHeaderFilterNotMatch?: number; 
  public get srcHeaderFilterNotMatch() {
    return this.getNumberAttribute('src_header_filter_not_match');
  }
  public set srcHeaderFilterNotMatch(value: number) {
    this._srcHeaderFilterNotMatch = value;
  }
  public resetSrcHeaderFilterNotMatch() {
    this._srcHeaderFilterNotMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcHeaderFilterNotMatchInput() {
    return this._srcHeaderFilterNotMatch;
  }

  // src_rate1_limit_exceed - computed: false, optional: true, required: false
  private _srcRate1LimitExceed?: number; 
  public get srcRate1LimitExceed() {
    return this.getNumberAttribute('src_rate1_limit_exceed');
  }
  public set srcRate1LimitExceed(value: number) {
    this._srcRate1LimitExceed = value;
  }
  public resetSrcRate1LimitExceed() {
    this._srcRate1LimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRate1LimitExceedInput() {
    return this._srcRate1LimitExceed;
  }

  // src_rate2_limit_exceed - computed: false, optional: true, required: false
  private _srcRate2LimitExceed?: number; 
  public get srcRate2LimitExceed() {
    return this.getNumberAttribute('src_rate2_limit_exceed');
  }
  public set srcRate2LimitExceed(value: number) {
    this._srcRate2LimitExceed = value;
  }
  public resetSrcRate2LimitExceed() {
    this._srcRate2LimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRate2LimitExceedInput() {
    return this._srcRate2LimitExceed;
  }

  // too_many_header - computed: false, optional: true, required: false
  private _tooManyHeader?: number; 
  public get tooManyHeader() {
    return this.getNumberAttribute('too_many_header');
  }
  public set tooManyHeader(value: number) {
    this._tooManyHeader = value;
  }
  public resetTooManyHeader() {
    this._tooManyHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooManyHeaderInput() {
    return this._tooManyHeader;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats thunder_ddos_l7_sip_stats}
*/
export class DataThunderDdosL7SipStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_l7_sip_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosL7SipStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosL7SipStats to import
  * @param importFromId The id of the existing DataThunderDdosL7SipStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosL7SipStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_l7_sip_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_l7_sip_stats thunder_ddos_l7_sip_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosL7SipStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosL7SipStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_l7_sip_stats',
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
  private _stats = new DataThunderDdosL7SipStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosL7SipStatsStats) {
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
      stats: dataThunderDdosL7SipStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderDdosL7SipStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosL7SipStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
