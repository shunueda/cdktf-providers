// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbHttp2OperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#id DataThunderSlbHttp2Oper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#oper DataThunderSlbHttp2Oper#oper}
  */
  readonly oper?: DataThunderSlbHttp2OperOper;
}
export interface DataThunderSlbHttp2OperOperHttp2CpuListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#alloc_fail_total DataThunderSlbHttp2Oper#alloc_fail_total}
  */
  readonly allocFailTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#bad_connection_preface DataThunderSlbHttp2Oper#bad_connection_preface}
  */
  readonly badConnectionPreface?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#bad_frame_type_for_stream_state DataThunderSlbHttp2Oper#bad_frame_type_for_stream_state}
  */
  readonly badFrameTypeForStreamState?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#buff_alloc_error DataThunderSlbHttp2Oper#buff_alloc_error}
  */
  readonly buffAllocError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#cancel DataThunderSlbHttp2Oper#cancel}
  */
  readonly cancel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#cant_allocate_control_frame DataThunderSlbHttp2Oper#cant_allocate_control_frame}
  */
  readonly cantAllocateControlFrame?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#cant_allocate_goaway_frame DataThunderSlbHttp2Oper#cant_allocate_goaway_frame}
  */
  readonly cantAllocateGoawayFrame?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#cant_allocate_ping_frame DataThunderSlbHttp2Oper#cant_allocate_ping_frame}
  */
  readonly cantAllocatePingFrame?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#cant_allocate_rst_frame DataThunderSlbHttp2Oper#cant_allocate_rst_frame}
  */
  readonly cantAllocateRstFrame?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#cant_allocate_settings_frame DataThunderSlbHttp2Oper#cant_allocate_settings_frame}
  */
  readonly cantAllocateSettingsFrame?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#cant_allocate_stream DataThunderSlbHttp2Oper#cant_allocate_stream}
  */
  readonly cantAllocateStream?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#cant_allocate_window_frame DataThunderSlbHttp2Oper#cant_allocate_window_frame}
  */
  readonly cantAllocateWindowFrame?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#closed_state_unexpected_frame DataThunderSlbHttp2Oper#closed_state_unexpected_frame}
  */
  readonly closedStateUnexpectedFrame?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#compression_error DataThunderSlbHttp2Oper#compression_error}
  */
  readonly compressionError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#connect_error DataThunderSlbHttp2Oper#connect_error}
  */
  readonly connectError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#connection_preface_rcvd DataThunderSlbHttp2Oper#connection_preface_rcvd}
  */
  readonly connectionPrefaceRcvd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#connection_preface_sent DataThunderSlbHttp2Oper#connection_preface_sent}
  */
  readonly connectionPrefaceSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#continuation_before_headers DataThunderSlbHttp2Oper#continuation_before_headers}
  */
  readonly continuationBeforeHeaders?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#continuation_frame DataThunderSlbHttp2Oper#continuation_frame}
  */
  readonly continuationFrame?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#continuation_frame_sent DataThunderSlbHttp2Oper#continuation_frame_sent}
  */
  readonly continuationFrameSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#control_bytes_received DataThunderSlbHttp2Oper#control_bytes_received}
  */
  readonly controlBytesReceived?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#control_bytes_sent DataThunderSlbHttp2Oper#control_bytes_sent}
  */
  readonly controlBytesSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#control_frame DataThunderSlbHttp2Oper#control_frame}
  */
  readonly controlFrame?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#control_frame_sent DataThunderSlbHttp2Oper#control_frame_sent}
  */
  readonly controlFrameSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#curr_proxy DataThunderSlbHttp2Oper#curr_proxy}
  */
  readonly currProxy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#current_stream DataThunderSlbHttp2Oper#current_stream}
  */
  readonly currentStream?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#data_bytes_received DataThunderSlbHttp2Oper#data_bytes_received}
  */
  readonly dataBytesReceived?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#data_bytes_sent DataThunderSlbHttp2Oper#data_bytes_sent}
  */
  readonly dataBytesSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#data_frame DataThunderSlbHttp2Oper#data_frame}
  */
  readonly dataFrame?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#data_frame_sent DataThunderSlbHttp2Oper#data_frame_sent}
  */
  readonly dataFrameSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#data_no_stream DataThunderSlbHttp2Oper#data_no_stream}
  */
  readonly dataNoStream?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#data_queue_alloc_error DataThunderSlbHttp2Oper#data_queue_alloc_error}
  */
  readonly dataQueueAllocError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#data_to_app DataThunderSlbHttp2Oper#data_to_app}
  */
  readonly dataToApp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#deflate_alloc_fail DataThunderSlbHttp2Oper#deflate_alloc_fail}
  */
  readonly deflateAllocFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#empty_settings_rcvd DataThunderSlbHttp2Oper#empty_settings_rcvd}
  */
  readonly emptySettingsRcvd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#empty_settings_sent DataThunderSlbHttp2Oper#empty_settings_sent}
  */
  readonly emptySettingsSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#end_stream_rcvd DataThunderSlbHttp2Oper#end_stream_rcvd}
  */
  readonly endStreamRcvd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#end_stream_sent DataThunderSlbHttp2Oper#end_stream_sent}
  */
  readonly endStreamSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#enhance_your_calm DataThunderSlbHttp2Oper#enhance_your_calm}
  */
  readonly enhanceYourCalm?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#err_rcvd_total DataThunderSlbHttp2Oper#err_rcvd_total}
  */
  readonly errRcvdTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#err_sent_cancel DataThunderSlbHttp2Oper#err_sent_cancel}
  */
  readonly errSentCancel?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#err_sent_compression_err DataThunderSlbHttp2Oper#err_sent_compression_err}
  */
  readonly errSentCompressionErr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#err_sent_connect_err DataThunderSlbHttp2Oper#err_sent_connect_err}
  */
  readonly errSentConnectErr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#err_sent_flow_control DataThunderSlbHttp2Oper#err_sent_flow_control}
  */
  readonly errSentFlowControl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#err_sent_frame_size_err DataThunderSlbHttp2Oper#err_sent_frame_size_err}
  */
  readonly errSentFrameSizeErr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#err_sent_http11_required DataThunderSlbHttp2Oper#err_sent_http11_required}
  */
  readonly errSentHttp11Required?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#err_sent_inadequate_security DataThunderSlbHttp2Oper#err_sent_inadequate_security}
  */
  readonly errSentInadequateSecurity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#err_sent_internal_err DataThunderSlbHttp2Oper#err_sent_internal_err}
  */
  readonly errSentInternalErr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#err_sent_proto_err DataThunderSlbHttp2Oper#err_sent_proto_err}
  */
  readonly errSentProtoErr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#err_sent_refused_stream DataThunderSlbHttp2Oper#err_sent_refused_stream}
  */
  readonly errSentRefusedStream?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#err_sent_setting_timeout DataThunderSlbHttp2Oper#err_sent_setting_timeout}
  */
  readonly errSentSettingTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#err_sent_stream_closed DataThunderSlbHttp2Oper#err_sent_stream_closed}
  */
  readonly errSentStreamClosed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#err_sent_total DataThunderSlbHttp2Oper#err_sent_total}
  */
  readonly errSentTotal?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#err_sent_your_calm DataThunderSlbHttp2Oper#err_sent_your_calm}
  */
  readonly errSentYourCalm?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#error_max_invalid_stream DataThunderSlbHttp2Oper#error_max_invalid_stream}
  */
  readonly errorMaxInvalidStream?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#exceeds_max_window_size_stream DataThunderSlbHttp2Oper#exceeds_max_window_size_stream}
  */
  readonly exceedsMaxWindowSizeStream?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#flow_control_error DataThunderSlbHttp2Oper#flow_control_error}
  */
  readonly flowControlError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#frame_header_bytes_received DataThunderSlbHttp2Oper#frame_header_bytes_received}
  */
  readonly frameHeaderBytesReceived?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#frame_header_bytes_sent DataThunderSlbHttp2Oper#frame_header_bytes_sent}
  */
  readonly frameHeaderBytesSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#frame_size_error DataThunderSlbHttp2Oper#frame_size_error}
  */
  readonly frameSizeError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#goaway_frame DataThunderSlbHttp2Oper#goaway_frame}
  */
  readonly goawayFrame?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#goaway_frame_sent DataThunderSlbHttp2Oper#goaway_frame_sent}
  */
  readonly goawayFrameSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#half_closed_remote_state_unexpected_frame DataThunderSlbHttp2Oper#half_closed_remote_state_unexpected_frame}
  */
  readonly halfClosedRemoteStateUnexpectedFrame?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#header_bytes_received DataThunderSlbHttp2Oper#header_bytes_received}
  */
  readonly headerBytesReceived?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#header_bytes_sent DataThunderSlbHttp2Oper#header_bytes_sent}
  */
  readonly headerBytesSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#header_no_stream DataThunderSlbHttp2Oper#header_no_stream}
  */
  readonly headerNoStream?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#header_padlen_gt_frame_payload DataThunderSlbHttp2Oper#header_padlen_gt_frame_payload}
  */
  readonly headerPadlenGtFramePayload?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#header_to_app DataThunderSlbHttp2Oper#header_to_app}
  */
  readonly headerToApp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#headers_after_continuation DataThunderSlbHttp2Oper#headers_after_continuation}
  */
  readonly headersAfterContinuation?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#headers_frame DataThunderSlbHttp2Oper#headers_frame}
  */
  readonly headersFrame?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#headers_frame_sent DataThunderSlbHttp2Oper#headers_frame_sent}
  */
  readonly headersFrameSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#headers_interleaved DataThunderSlbHttp2Oper#headers_interleaved}
  */
  readonly headersInterleaved?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#http2_rejected DataThunderSlbHttp2Oper#http2_rejected}
  */
  readonly http2Rejected?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#http_1_1_required DataThunderSlbHttp2Oper#http_1_1_required}
  */
  readonly http11Required?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#idle_state_unexpected_frame DataThunderSlbHttp2Oper#idle_state_unexpected_frame}
  */
  readonly idleStateUnexpectedFrame?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#inadequate_security DataThunderSlbHttp2Oper#inadequate_security}
  */
  readonly inadequateSecurity?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#inflate_alloc_fail DataThunderSlbHttp2Oper#inflate_alloc_fail}
  */
  readonly inflateAllocFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#inflate_header_fail DataThunderSlbHttp2Oper#inflate_header_fail}
  */
  readonly inflateHeaderFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#internal_error DataThunderSlbHttp2Oper#internal_error}
  */
  readonly internalError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#invalid_frame_during_headers DataThunderSlbHttp2Oper#invalid_frame_during_headers}
  */
  readonly invalidFrameDuringHeaders?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#invalid_frame_size DataThunderSlbHttp2Oper#invalid_frame_size}
  */
  readonly invalidFrameSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#invalid_push_promise DataThunderSlbHttp2Oper#invalid_push_promise}
  */
  readonly invalidPushPromise?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#invalid_setting_value DataThunderSlbHttp2Oper#invalid_setting_value}
  */
  readonly invalidSettingValue?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#invalid_stream_id DataThunderSlbHttp2Oper#invalid_stream_id}
  */
  readonly invalidStreamId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#invalid_window_update DataThunderSlbHttp2Oper#invalid_window_update}
  */
  readonly invalidWindowUpdate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#peak_proxy DataThunderSlbHttp2Oper#peak_proxy}
  */
  readonly peakProxy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#ping_frame DataThunderSlbHttp2Oper#ping_frame}
  */
  readonly pingFrame?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#ping_frame_sent DataThunderSlbHttp2Oper#ping_frame_sent}
  */
  readonly pingFrameSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#priority_frame DataThunderSlbHttp2Oper#priority_frame}
  */
  readonly priorityFrame?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#priority_frame_sent DataThunderSlbHttp2Oper#priority_frame_sent}
  */
  readonly priorityFrameSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#protocol_error DataThunderSlbHttp2Oper#protocol_error}
  */
  readonly protocolError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#proxy_alloc_error DataThunderSlbHttp2Oper#proxy_alloc_error}
  */
  readonly proxyAllocError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#push_promise_frame_sent DataThunderSlbHttp2Oper#push_promise_frame_sent}
  */
  readonly pushPromiseFrameSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#refused_stream DataThunderSlbHttp2Oper#refused_stream}
  */
  readonly refusedStream?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#reserved_local_state_unexpected_frame DataThunderSlbHttp2Oper#reserved_local_state_unexpected_frame}
  */
  readonly reservedLocalStateUnexpectedFrame?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#reserved_remote_state_unexpected_frame DataThunderSlbHttp2Oper#reserved_remote_state_unexpected_frame}
  */
  readonly reservedRemoteStateUnexpectedFrame?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#rst_frame_rcvd DataThunderSlbHttp2Oper#rst_frame_rcvd}
  */
  readonly rstFrameRcvd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#rst_frame_sent DataThunderSlbHttp2Oper#rst_frame_sent}
  */
  readonly rstFrameSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#settings_ack_rcvd DataThunderSlbHttp2Oper#settings_ack_rcvd}
  */
  readonly settingsAckRcvd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#settings_ack_sent DataThunderSlbHttp2Oper#settings_ack_sent}
  */
  readonly settingsAckSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#settings_frame DataThunderSlbHttp2Oper#settings_frame}
  */
  readonly settingsFrame?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#settings_frame_sent DataThunderSlbHttp2Oper#settings_frame_sent}
  */
  readonly settingsFrameSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#settings_timeout DataThunderSlbHttp2Oper#settings_timeout}
  */
  readonly settingsTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#split_buff_fail DataThunderSlbHttp2Oper#split_buff_fail}
  */
  readonly splitBuffFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#stream_closed DataThunderSlbHttp2Oper#stream_closed}
  */
  readonly streamClosed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#stream_create DataThunderSlbHttp2Oper#stream_create}
  */
  readonly streamCreate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#stream_free DataThunderSlbHttp2Oper#stream_free}
  */
  readonly streamFree?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#streams_gt_max_concur_streams DataThunderSlbHttp2Oper#streams_gt_max_concur_streams}
  */
  readonly streamsGtMaxConcurStreams?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#total_bytes_received DataThunderSlbHttp2Oper#total_bytes_received}
  */
  readonly totalBytesReceived?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#total_bytes_sent DataThunderSlbHttp2Oper#total_bytes_sent}
  */
  readonly totalBytesSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#total_proxy DataThunderSlbHttp2Oper#total_proxy}
  */
  readonly totalProxy?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#trailers_no_end_stream DataThunderSlbHttp2Oper#trailers_no_end_stream}
  */
  readonly trailersNoEndStream?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#unknown_frame DataThunderSlbHttp2Oper#unknown_frame}
  */
  readonly unknownFrame?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#window_update_frame DataThunderSlbHttp2Oper#window_update_frame}
  */
  readonly windowUpdateFrame?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#window_update_frame_sent DataThunderSlbHttp2Oper#window_update_frame_sent}
  */
  readonly windowUpdateFrameSent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#wrong_stream_state DataThunderSlbHttp2Oper#wrong_stream_state}
  */
  readonly wrongStreamState?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#zero_window_size_on_stream DataThunderSlbHttp2Oper#zero_window_size_on_stream}
  */
  readonly zeroWindowSizeOnStream?: number;
}

export function dataThunderSlbHttp2OperOperHttp2CpuListStructToTerraform(struct?: DataThunderSlbHttp2OperOperHttp2CpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alloc_fail_total: cdktf.numberToTerraform(struct!.allocFailTotal),
    bad_connection_preface: cdktf.numberToTerraform(struct!.badConnectionPreface),
    bad_frame_type_for_stream_state: cdktf.numberToTerraform(struct!.badFrameTypeForStreamState),
    buff_alloc_error: cdktf.numberToTerraform(struct!.buffAllocError),
    cancel: cdktf.numberToTerraform(struct!.cancel),
    cant_allocate_control_frame: cdktf.numberToTerraform(struct!.cantAllocateControlFrame),
    cant_allocate_goaway_frame: cdktf.numberToTerraform(struct!.cantAllocateGoawayFrame),
    cant_allocate_ping_frame: cdktf.numberToTerraform(struct!.cantAllocatePingFrame),
    cant_allocate_rst_frame: cdktf.numberToTerraform(struct!.cantAllocateRstFrame),
    cant_allocate_settings_frame: cdktf.numberToTerraform(struct!.cantAllocateSettingsFrame),
    cant_allocate_stream: cdktf.numberToTerraform(struct!.cantAllocateStream),
    cant_allocate_window_frame: cdktf.numberToTerraform(struct!.cantAllocateWindowFrame),
    closed_state_unexpected_frame: cdktf.numberToTerraform(struct!.closedStateUnexpectedFrame),
    compression_error: cdktf.numberToTerraform(struct!.compressionError),
    connect_error: cdktf.numberToTerraform(struct!.connectError),
    connection_preface_rcvd: cdktf.numberToTerraform(struct!.connectionPrefaceRcvd),
    connection_preface_sent: cdktf.numberToTerraform(struct!.connectionPrefaceSent),
    continuation_before_headers: cdktf.numberToTerraform(struct!.continuationBeforeHeaders),
    continuation_frame: cdktf.numberToTerraform(struct!.continuationFrame),
    continuation_frame_sent: cdktf.numberToTerraform(struct!.continuationFrameSent),
    control_bytes_received: cdktf.numberToTerraform(struct!.controlBytesReceived),
    control_bytes_sent: cdktf.numberToTerraform(struct!.controlBytesSent),
    control_frame: cdktf.numberToTerraform(struct!.controlFrame),
    control_frame_sent: cdktf.numberToTerraform(struct!.controlFrameSent),
    curr_proxy: cdktf.numberToTerraform(struct!.currProxy),
    current_stream: cdktf.numberToTerraform(struct!.currentStream),
    data_bytes_received: cdktf.numberToTerraform(struct!.dataBytesReceived),
    data_bytes_sent: cdktf.numberToTerraform(struct!.dataBytesSent),
    data_frame: cdktf.numberToTerraform(struct!.dataFrame),
    data_frame_sent: cdktf.numberToTerraform(struct!.dataFrameSent),
    data_no_stream: cdktf.numberToTerraform(struct!.dataNoStream),
    data_queue_alloc_error: cdktf.numberToTerraform(struct!.dataQueueAllocError),
    data_to_app: cdktf.numberToTerraform(struct!.dataToApp),
    deflate_alloc_fail: cdktf.numberToTerraform(struct!.deflateAllocFail),
    empty_settings_rcvd: cdktf.numberToTerraform(struct!.emptySettingsRcvd),
    empty_settings_sent: cdktf.numberToTerraform(struct!.emptySettingsSent),
    end_stream_rcvd: cdktf.numberToTerraform(struct!.endStreamRcvd),
    end_stream_sent: cdktf.numberToTerraform(struct!.endStreamSent),
    enhance_your_calm: cdktf.numberToTerraform(struct!.enhanceYourCalm),
    err_rcvd_total: cdktf.numberToTerraform(struct!.errRcvdTotal),
    err_sent_cancel: cdktf.numberToTerraform(struct!.errSentCancel),
    err_sent_compression_err: cdktf.numberToTerraform(struct!.errSentCompressionErr),
    err_sent_connect_err: cdktf.numberToTerraform(struct!.errSentConnectErr),
    err_sent_flow_control: cdktf.numberToTerraform(struct!.errSentFlowControl),
    err_sent_frame_size_err: cdktf.numberToTerraform(struct!.errSentFrameSizeErr),
    err_sent_http11_required: cdktf.numberToTerraform(struct!.errSentHttp11Required),
    err_sent_inadequate_security: cdktf.numberToTerraform(struct!.errSentInadequateSecurity),
    err_sent_internal_err: cdktf.numberToTerraform(struct!.errSentInternalErr),
    err_sent_proto_err: cdktf.numberToTerraform(struct!.errSentProtoErr),
    err_sent_refused_stream: cdktf.numberToTerraform(struct!.errSentRefusedStream),
    err_sent_setting_timeout: cdktf.numberToTerraform(struct!.errSentSettingTimeout),
    err_sent_stream_closed: cdktf.numberToTerraform(struct!.errSentStreamClosed),
    err_sent_total: cdktf.numberToTerraform(struct!.errSentTotal),
    err_sent_your_calm: cdktf.numberToTerraform(struct!.errSentYourCalm),
    error_max_invalid_stream: cdktf.numberToTerraform(struct!.errorMaxInvalidStream),
    exceeds_max_window_size_stream: cdktf.numberToTerraform(struct!.exceedsMaxWindowSizeStream),
    flow_control_error: cdktf.numberToTerraform(struct!.flowControlError),
    frame_header_bytes_received: cdktf.numberToTerraform(struct!.frameHeaderBytesReceived),
    frame_header_bytes_sent: cdktf.numberToTerraform(struct!.frameHeaderBytesSent),
    frame_size_error: cdktf.numberToTerraform(struct!.frameSizeError),
    goaway_frame: cdktf.numberToTerraform(struct!.goawayFrame),
    goaway_frame_sent: cdktf.numberToTerraform(struct!.goawayFrameSent),
    half_closed_remote_state_unexpected_frame: cdktf.numberToTerraform(struct!.halfClosedRemoteStateUnexpectedFrame),
    header_bytes_received: cdktf.numberToTerraform(struct!.headerBytesReceived),
    header_bytes_sent: cdktf.numberToTerraform(struct!.headerBytesSent),
    header_no_stream: cdktf.numberToTerraform(struct!.headerNoStream),
    header_padlen_gt_frame_payload: cdktf.numberToTerraform(struct!.headerPadlenGtFramePayload),
    header_to_app: cdktf.numberToTerraform(struct!.headerToApp),
    headers_after_continuation: cdktf.numberToTerraform(struct!.headersAfterContinuation),
    headers_frame: cdktf.numberToTerraform(struct!.headersFrame),
    headers_frame_sent: cdktf.numberToTerraform(struct!.headersFrameSent),
    headers_interleaved: cdktf.numberToTerraform(struct!.headersInterleaved),
    http2_rejected: cdktf.numberToTerraform(struct!.http2Rejected),
    http_1_1_required: cdktf.numberToTerraform(struct!.http11Required),
    idle_state_unexpected_frame: cdktf.numberToTerraform(struct!.idleStateUnexpectedFrame),
    inadequate_security: cdktf.numberToTerraform(struct!.inadequateSecurity),
    inflate_alloc_fail: cdktf.numberToTerraform(struct!.inflateAllocFail),
    inflate_header_fail: cdktf.numberToTerraform(struct!.inflateHeaderFail),
    internal_error: cdktf.numberToTerraform(struct!.internalError),
    invalid_frame_during_headers: cdktf.numberToTerraform(struct!.invalidFrameDuringHeaders),
    invalid_frame_size: cdktf.numberToTerraform(struct!.invalidFrameSize),
    invalid_push_promise: cdktf.numberToTerraform(struct!.invalidPushPromise),
    invalid_setting_value: cdktf.numberToTerraform(struct!.invalidSettingValue),
    invalid_stream_id: cdktf.numberToTerraform(struct!.invalidStreamId),
    invalid_window_update: cdktf.numberToTerraform(struct!.invalidWindowUpdate),
    peak_proxy: cdktf.numberToTerraform(struct!.peakProxy),
    ping_frame: cdktf.numberToTerraform(struct!.pingFrame),
    ping_frame_sent: cdktf.numberToTerraform(struct!.pingFrameSent),
    priority_frame: cdktf.numberToTerraform(struct!.priorityFrame),
    priority_frame_sent: cdktf.numberToTerraform(struct!.priorityFrameSent),
    protocol_error: cdktf.numberToTerraform(struct!.protocolError),
    proxy_alloc_error: cdktf.numberToTerraform(struct!.proxyAllocError),
    push_promise_frame_sent: cdktf.numberToTerraform(struct!.pushPromiseFrameSent),
    refused_stream: cdktf.numberToTerraform(struct!.refusedStream),
    reserved_local_state_unexpected_frame: cdktf.numberToTerraform(struct!.reservedLocalStateUnexpectedFrame),
    reserved_remote_state_unexpected_frame: cdktf.numberToTerraform(struct!.reservedRemoteStateUnexpectedFrame),
    rst_frame_rcvd: cdktf.numberToTerraform(struct!.rstFrameRcvd),
    rst_frame_sent: cdktf.numberToTerraform(struct!.rstFrameSent),
    settings_ack_rcvd: cdktf.numberToTerraform(struct!.settingsAckRcvd),
    settings_ack_sent: cdktf.numberToTerraform(struct!.settingsAckSent),
    settings_frame: cdktf.numberToTerraform(struct!.settingsFrame),
    settings_frame_sent: cdktf.numberToTerraform(struct!.settingsFrameSent),
    settings_timeout: cdktf.numberToTerraform(struct!.settingsTimeout),
    split_buff_fail: cdktf.numberToTerraform(struct!.splitBuffFail),
    stream_closed: cdktf.numberToTerraform(struct!.streamClosed),
    stream_create: cdktf.numberToTerraform(struct!.streamCreate),
    stream_free: cdktf.numberToTerraform(struct!.streamFree),
    streams_gt_max_concur_streams: cdktf.numberToTerraform(struct!.streamsGtMaxConcurStreams),
    total_bytes_received: cdktf.numberToTerraform(struct!.totalBytesReceived),
    total_bytes_sent: cdktf.numberToTerraform(struct!.totalBytesSent),
    total_proxy: cdktf.numberToTerraform(struct!.totalProxy),
    trailers_no_end_stream: cdktf.numberToTerraform(struct!.trailersNoEndStream),
    unknown_frame: cdktf.numberToTerraform(struct!.unknownFrame),
    window_update_frame: cdktf.numberToTerraform(struct!.windowUpdateFrame),
    window_update_frame_sent: cdktf.numberToTerraform(struct!.windowUpdateFrameSent),
    wrong_stream_state: cdktf.numberToTerraform(struct!.wrongStreamState),
    zero_window_size_on_stream: cdktf.numberToTerraform(struct!.zeroWindowSizeOnStream),
  }
}


export function dataThunderSlbHttp2OperOperHttp2CpuListStructToHclTerraform(struct?: DataThunderSlbHttp2OperOperHttp2CpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alloc_fail_total: {
      value: cdktf.numberToHclTerraform(struct!.allocFailTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_connection_preface: {
      value: cdktf.numberToHclTerraform(struct!.badConnectionPreface),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_frame_type_for_stream_state: {
      value: cdktf.numberToHclTerraform(struct!.badFrameTypeForStreamState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    buff_alloc_error: {
      value: cdktf.numberToHclTerraform(struct!.buffAllocError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cancel: {
      value: cdktf.numberToHclTerraform(struct!.cancel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cant_allocate_control_frame: {
      value: cdktf.numberToHclTerraform(struct!.cantAllocateControlFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cant_allocate_goaway_frame: {
      value: cdktf.numberToHclTerraform(struct!.cantAllocateGoawayFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cant_allocate_ping_frame: {
      value: cdktf.numberToHclTerraform(struct!.cantAllocatePingFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cant_allocate_rst_frame: {
      value: cdktf.numberToHclTerraform(struct!.cantAllocateRstFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cant_allocate_settings_frame: {
      value: cdktf.numberToHclTerraform(struct!.cantAllocateSettingsFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cant_allocate_stream: {
      value: cdktf.numberToHclTerraform(struct!.cantAllocateStream),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cant_allocate_window_frame: {
      value: cdktf.numberToHclTerraform(struct!.cantAllocateWindowFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    closed_state_unexpected_frame: {
      value: cdktf.numberToHclTerraform(struct!.closedStateUnexpectedFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    compression_error: {
      value: cdktf.numberToHclTerraform(struct!.compressionError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connect_error: {
      value: cdktf.numberToHclTerraform(struct!.connectError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_preface_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.connectionPrefaceRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connection_preface_sent: {
      value: cdktf.numberToHclTerraform(struct!.connectionPrefaceSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    continuation_before_headers: {
      value: cdktf.numberToHclTerraform(struct!.continuationBeforeHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    continuation_frame: {
      value: cdktf.numberToHclTerraform(struct!.continuationFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    continuation_frame_sent: {
      value: cdktf.numberToHclTerraform(struct!.continuationFrameSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    control_bytes_received: {
      value: cdktf.numberToHclTerraform(struct!.controlBytesReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    control_bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.controlBytesSent),
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
    control_frame_sent: {
      value: cdktf.numberToHclTerraform(struct!.controlFrameSent),
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
    current_stream: {
      value: cdktf.numberToHclTerraform(struct!.currentStream),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_bytes_received: {
      value: cdktf.numberToHclTerraform(struct!.dataBytesReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.dataBytesSent),
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
    data_frame_sent: {
      value: cdktf.numberToHclTerraform(struct!.dataFrameSent),
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
    data_queue_alloc_error: {
      value: cdktf.numberToHclTerraform(struct!.dataQueueAllocError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_to_app: {
      value: cdktf.numberToHclTerraform(struct!.dataToApp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deflate_alloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.deflateAllocFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    empty_settings_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.emptySettingsRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    empty_settings_sent: {
      value: cdktf.numberToHclTerraform(struct!.emptySettingsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_stream_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.endStreamRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    end_stream_sent: {
      value: cdktf.numberToHclTerraform(struct!.endStreamSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enhance_your_calm: {
      value: cdktf.numberToHclTerraform(struct!.enhanceYourCalm),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_rcvd_total: {
      value: cdktf.numberToHclTerraform(struct!.errRcvdTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_sent_cancel: {
      value: cdktf.numberToHclTerraform(struct!.errSentCancel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_sent_compression_err: {
      value: cdktf.numberToHclTerraform(struct!.errSentCompressionErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_sent_connect_err: {
      value: cdktf.numberToHclTerraform(struct!.errSentConnectErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_sent_flow_control: {
      value: cdktf.numberToHclTerraform(struct!.errSentFlowControl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_sent_frame_size_err: {
      value: cdktf.numberToHclTerraform(struct!.errSentFrameSizeErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_sent_http11_required: {
      value: cdktf.numberToHclTerraform(struct!.errSentHttp11Required),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_sent_inadequate_security: {
      value: cdktf.numberToHclTerraform(struct!.errSentInadequateSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_sent_internal_err: {
      value: cdktf.numberToHclTerraform(struct!.errSentInternalErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_sent_proto_err: {
      value: cdktf.numberToHclTerraform(struct!.errSentProtoErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_sent_refused_stream: {
      value: cdktf.numberToHclTerraform(struct!.errSentRefusedStream),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_sent_setting_timeout: {
      value: cdktf.numberToHclTerraform(struct!.errSentSettingTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_sent_stream_closed: {
      value: cdktf.numberToHclTerraform(struct!.errSentStreamClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_sent_total: {
      value: cdktf.numberToHclTerraform(struct!.errSentTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_sent_your_calm: {
      value: cdktf.numberToHclTerraform(struct!.errSentYourCalm),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_max_invalid_stream: {
      value: cdktf.numberToHclTerraform(struct!.errorMaxInvalidStream),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    exceeds_max_window_size_stream: {
      value: cdktf.numberToHclTerraform(struct!.exceedsMaxWindowSizeStream),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    flow_control_error: {
      value: cdktf.numberToHclTerraform(struct!.flowControlError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frame_header_bytes_received: {
      value: cdktf.numberToHclTerraform(struct!.frameHeaderBytesReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frame_header_bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.frameHeaderBytesSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    frame_size_error: {
      value: cdktf.numberToHclTerraform(struct!.frameSizeError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    goaway_frame: {
      value: cdktf.numberToHclTerraform(struct!.goawayFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    goaway_frame_sent: {
      value: cdktf.numberToHclTerraform(struct!.goawayFrameSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    half_closed_remote_state_unexpected_frame: {
      value: cdktf.numberToHclTerraform(struct!.halfClosedRemoteStateUnexpectedFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_bytes_received: {
      value: cdktf.numberToHclTerraform(struct!.headerBytesReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.headerBytesSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_no_stream: {
      value: cdktf.numberToHclTerraform(struct!.headerNoStream),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_padlen_gt_frame_payload: {
      value: cdktf.numberToHclTerraform(struct!.headerPadlenGtFramePayload),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_to_app: {
      value: cdktf.numberToHclTerraform(struct!.headerToApp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers_after_continuation: {
      value: cdktf.numberToHclTerraform(struct!.headersAfterContinuation),
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
    headers_frame_sent: {
      value: cdktf.numberToHclTerraform(struct!.headersFrameSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    headers_interleaved: {
      value: cdktf.numberToHclTerraform(struct!.headersInterleaved),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http2_rejected: {
      value: cdktf.numberToHclTerraform(struct!.http2Rejected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_1_1_required: {
      value: cdktf.numberToHclTerraform(struct!.http11Required),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    idle_state_unexpected_frame: {
      value: cdktf.numberToHclTerraform(struct!.idleStateUnexpectedFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inadequate_security: {
      value: cdktf.numberToHclTerraform(struct!.inadequateSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inflate_alloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.inflateAllocFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inflate_header_fail: {
      value: cdktf.numberToHclTerraform(struct!.inflateHeaderFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    internal_error: {
      value: cdktf.numberToHclTerraform(struct!.internalError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_frame_during_headers: {
      value: cdktf.numberToHclTerraform(struct!.invalidFrameDuringHeaders),
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
    invalid_push_promise: {
      value: cdktf.numberToHclTerraform(struct!.invalidPushPromise),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_setting_value: {
      value: cdktf.numberToHclTerraform(struct!.invalidSettingValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_stream_id: {
      value: cdktf.numberToHclTerraform(struct!.invalidStreamId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_window_update: {
      value: cdktf.numberToHclTerraform(struct!.invalidWindowUpdate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    peak_proxy: {
      value: cdktf.numberToHclTerraform(struct!.peakProxy),
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
    ping_frame_sent: {
      value: cdktf.numberToHclTerraform(struct!.pingFrameSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_frame: {
      value: cdktf.numberToHclTerraform(struct!.priorityFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_frame_sent: {
      value: cdktf.numberToHclTerraform(struct!.priorityFrameSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol_error: {
      value: cdktf.numberToHclTerraform(struct!.protocolError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    proxy_alloc_error: {
      value: cdktf.numberToHclTerraform(struct!.proxyAllocError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    push_promise_frame_sent: {
      value: cdktf.numberToHclTerraform(struct!.pushPromiseFrameSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    refused_stream: {
      value: cdktf.numberToHclTerraform(struct!.refusedStream),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reserved_local_state_unexpected_frame: {
      value: cdktf.numberToHclTerraform(struct!.reservedLocalStateUnexpectedFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reserved_remote_state_unexpected_frame: {
      value: cdktf.numberToHclTerraform(struct!.reservedRemoteStateUnexpectedFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rst_frame_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.rstFrameRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rst_frame_sent: {
      value: cdktf.numberToHclTerraform(struct!.rstFrameSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    settings_ack_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.settingsAckRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    settings_ack_sent: {
      value: cdktf.numberToHclTerraform(struct!.settingsAckSent),
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
    settings_frame_sent: {
      value: cdktf.numberToHclTerraform(struct!.settingsFrameSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    settings_timeout: {
      value: cdktf.numberToHclTerraform(struct!.settingsTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    split_buff_fail: {
      value: cdktf.numberToHclTerraform(struct!.splitBuffFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_closed: {
      value: cdktf.numberToHclTerraform(struct!.streamClosed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_create: {
      value: cdktf.numberToHclTerraform(struct!.streamCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_free: {
      value: cdktf.numberToHclTerraform(struct!.streamFree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    streams_gt_max_concur_streams: {
      value: cdktf.numberToHclTerraform(struct!.streamsGtMaxConcurStreams),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_bytes_received: {
      value: cdktf.numberToHclTerraform(struct!.totalBytesReceived),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.totalBytesSent),
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
    trailers_no_end_stream: {
      value: cdktf.numberToHclTerraform(struct!.trailersNoEndStream),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unknown_frame: {
      value: cdktf.numberToHclTerraform(struct!.unknownFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_update_frame: {
      value: cdktf.numberToHclTerraform(struct!.windowUpdateFrame),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    window_update_frame_sent: {
      value: cdktf.numberToHclTerraform(struct!.windowUpdateFrameSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wrong_stream_state: {
      value: cdktf.numberToHclTerraform(struct!.wrongStreamState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zero_window_size_on_stream: {
      value: cdktf.numberToHclTerraform(struct!.zeroWindowSizeOnStream),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbHttp2OperOperHttp2CpuListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbHttp2OperOperHttp2CpuListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocFailTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocFailTotal = this._allocFailTotal;
    }
    if (this._badConnectionPreface !== undefined) {
      hasAnyValues = true;
      internalValueResult.badConnectionPreface = this._badConnectionPreface;
    }
    if (this._badFrameTypeForStreamState !== undefined) {
      hasAnyValues = true;
      internalValueResult.badFrameTypeForStreamState = this._badFrameTypeForStreamState;
    }
    if (this._buffAllocError !== undefined) {
      hasAnyValues = true;
      internalValueResult.buffAllocError = this._buffAllocError;
    }
    if (this._cancel !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancel = this._cancel;
    }
    if (this._cantAllocateControlFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.cantAllocateControlFrame = this._cantAllocateControlFrame;
    }
    if (this._cantAllocateGoawayFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.cantAllocateGoawayFrame = this._cantAllocateGoawayFrame;
    }
    if (this._cantAllocatePingFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.cantAllocatePingFrame = this._cantAllocatePingFrame;
    }
    if (this._cantAllocateRstFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.cantAllocateRstFrame = this._cantAllocateRstFrame;
    }
    if (this._cantAllocateSettingsFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.cantAllocateSettingsFrame = this._cantAllocateSettingsFrame;
    }
    if (this._cantAllocateStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.cantAllocateStream = this._cantAllocateStream;
    }
    if (this._cantAllocateWindowFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.cantAllocateWindowFrame = this._cantAllocateWindowFrame;
    }
    if (this._closedStateUnexpectedFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.closedStateUnexpectedFrame = this._closedStateUnexpectedFrame;
    }
    if (this._compressionError !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressionError = this._compressionError;
    }
    if (this._connectError !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectError = this._connectError;
    }
    if (this._connectionPrefaceRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionPrefaceRcvd = this._connectionPrefaceRcvd;
    }
    if (this._connectionPrefaceSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionPrefaceSent = this._connectionPrefaceSent;
    }
    if (this._continuationBeforeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuationBeforeHeaders = this._continuationBeforeHeaders;
    }
    if (this._continuationFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuationFrame = this._continuationFrame;
    }
    if (this._continuationFrameSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuationFrameSent = this._continuationFrameSent;
    }
    if (this._controlBytesReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlBytesReceived = this._controlBytesReceived;
    }
    if (this._controlBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlBytesSent = this._controlBytesSent;
    }
    if (this._controlFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlFrame = this._controlFrame;
    }
    if (this._controlFrameSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.controlFrameSent = this._controlFrameSent;
    }
    if (this._currProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.currProxy = this._currProxy;
    }
    if (this._currentStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentStream = this._currentStream;
    }
    if (this._dataBytesReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataBytesReceived = this._dataBytesReceived;
    }
    if (this._dataBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataBytesSent = this._dataBytesSent;
    }
    if (this._dataFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFrame = this._dataFrame;
    }
    if (this._dataFrameSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataFrameSent = this._dataFrameSent;
    }
    if (this._dataNoStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataNoStream = this._dataNoStream;
    }
    if (this._dataQueueAllocError !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataQueueAllocError = this._dataQueueAllocError;
    }
    if (this._dataToApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataToApp = this._dataToApp;
    }
    if (this._deflateAllocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.deflateAllocFail = this._deflateAllocFail;
    }
    if (this._emptySettingsRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptySettingsRcvd = this._emptySettingsRcvd;
    }
    if (this._emptySettingsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.emptySettingsSent = this._emptySettingsSent;
    }
    if (this._endStreamRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.endStreamRcvd = this._endStreamRcvd;
    }
    if (this._endStreamSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.endStreamSent = this._endStreamSent;
    }
    if (this._enhanceYourCalm !== undefined) {
      hasAnyValues = true;
      internalValueResult.enhanceYourCalm = this._enhanceYourCalm;
    }
    if (this._errRcvdTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.errRcvdTotal = this._errRcvdTotal;
    }
    if (this._errSentCancel !== undefined) {
      hasAnyValues = true;
      internalValueResult.errSentCancel = this._errSentCancel;
    }
    if (this._errSentCompressionErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.errSentCompressionErr = this._errSentCompressionErr;
    }
    if (this._errSentConnectErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.errSentConnectErr = this._errSentConnectErr;
    }
    if (this._errSentFlowControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.errSentFlowControl = this._errSentFlowControl;
    }
    if (this._errSentFrameSizeErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.errSentFrameSizeErr = this._errSentFrameSizeErr;
    }
    if (this._errSentHttp11Required !== undefined) {
      hasAnyValues = true;
      internalValueResult.errSentHttp11Required = this._errSentHttp11Required;
    }
    if (this._errSentInadequateSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.errSentInadequateSecurity = this._errSentInadequateSecurity;
    }
    if (this._errSentInternalErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.errSentInternalErr = this._errSentInternalErr;
    }
    if (this._errSentProtoErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.errSentProtoErr = this._errSentProtoErr;
    }
    if (this._errSentRefusedStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.errSentRefusedStream = this._errSentRefusedStream;
    }
    if (this._errSentSettingTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.errSentSettingTimeout = this._errSentSettingTimeout;
    }
    if (this._errSentStreamClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errSentStreamClosed = this._errSentStreamClosed;
    }
    if (this._errSentTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.errSentTotal = this._errSentTotal;
    }
    if (this._errSentYourCalm !== undefined) {
      hasAnyValues = true;
      internalValueResult.errSentYourCalm = this._errSentYourCalm;
    }
    if (this._errorMaxInvalidStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorMaxInvalidStream = this._errorMaxInvalidStream;
    }
    if (this._exceedsMaxWindowSizeStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.exceedsMaxWindowSizeStream = this._exceedsMaxWindowSizeStream;
    }
    if (this._flowControlError !== undefined) {
      hasAnyValues = true;
      internalValueResult.flowControlError = this._flowControlError;
    }
    if (this._frameHeaderBytesReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameHeaderBytesReceived = this._frameHeaderBytesReceived;
    }
    if (this._frameHeaderBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameHeaderBytesSent = this._frameHeaderBytesSent;
    }
    if (this._frameSizeError !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameSizeError = this._frameSizeError;
    }
    if (this._goawayFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.goawayFrame = this._goawayFrame;
    }
    if (this._goawayFrameSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.goawayFrameSent = this._goawayFrameSent;
    }
    if (this._halfClosedRemoteStateUnexpectedFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.halfClosedRemoteStateUnexpectedFrame = this._halfClosedRemoteStateUnexpectedFrame;
    }
    if (this._headerBytesReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerBytesReceived = this._headerBytesReceived;
    }
    if (this._headerBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerBytesSent = this._headerBytesSent;
    }
    if (this._headerNoStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerNoStream = this._headerNoStream;
    }
    if (this._headerPadlenGtFramePayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerPadlenGtFramePayload = this._headerPadlenGtFramePayload;
    }
    if (this._headerToApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerToApp = this._headerToApp;
    }
    if (this._headersAfterContinuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersAfterContinuation = this._headersAfterContinuation;
    }
    if (this._headersFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersFrame = this._headersFrame;
    }
    if (this._headersFrameSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersFrameSent = this._headersFrameSent;
    }
    if (this._headersInterleaved !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersInterleaved = this._headersInterleaved;
    }
    if (this._http2Rejected !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2Rejected = this._http2Rejected;
    }
    if (this._http11Required !== undefined) {
      hasAnyValues = true;
      internalValueResult.http11Required = this._http11Required;
    }
    if (this._idleStateUnexpectedFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleStateUnexpectedFrame = this._idleStateUnexpectedFrame;
    }
    if (this._inadequateSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.inadequateSecurity = this._inadequateSecurity;
    }
    if (this._inflateAllocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.inflateAllocFail = this._inflateAllocFail;
    }
    if (this._inflateHeaderFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.inflateHeaderFail = this._inflateHeaderFail;
    }
    if (this._internalError !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalError = this._internalError;
    }
    if (this._invalidFrameDuringHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidFrameDuringHeaders = this._invalidFrameDuringHeaders;
    }
    if (this._invalidFrameSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidFrameSize = this._invalidFrameSize;
    }
    if (this._invalidPushPromise !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidPushPromise = this._invalidPushPromise;
    }
    if (this._invalidSettingValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidSettingValue = this._invalidSettingValue;
    }
    if (this._invalidStreamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidStreamId = this._invalidStreamId;
    }
    if (this._invalidWindowUpdate !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidWindowUpdate = this._invalidWindowUpdate;
    }
    if (this._peakProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.peakProxy = this._peakProxy;
    }
    if (this._pingFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingFrame = this._pingFrame;
    }
    if (this._pingFrameSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingFrameSent = this._pingFrameSent;
    }
    if (this._priorityFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityFrame = this._priorityFrame;
    }
    if (this._priorityFrameSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityFrameSent = this._priorityFrameSent;
    }
    if (this._protocolError !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolError = this._protocolError;
    }
    if (this._proxyAllocError !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyAllocError = this._proxyAllocError;
    }
    if (this._pushPromiseFrameSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushPromiseFrameSent = this._pushPromiseFrameSent;
    }
    if (this._refusedStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.refusedStream = this._refusedStream;
    }
    if (this._reservedLocalStateUnexpectedFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedLocalStateUnexpectedFrame = this._reservedLocalStateUnexpectedFrame;
    }
    if (this._reservedRemoteStateUnexpectedFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.reservedRemoteStateUnexpectedFrame = this._reservedRemoteStateUnexpectedFrame;
    }
    if (this._rstFrameRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.rstFrameRcvd = this._rstFrameRcvd;
    }
    if (this._rstFrameSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.rstFrameSent = this._rstFrameSent;
    }
    if (this._settingsAckRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.settingsAckRcvd = this._settingsAckRcvd;
    }
    if (this._settingsAckSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.settingsAckSent = this._settingsAckSent;
    }
    if (this._settingsFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.settingsFrame = this._settingsFrame;
    }
    if (this._settingsFrameSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.settingsFrameSent = this._settingsFrameSent;
    }
    if (this._settingsTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.settingsTimeout = this._settingsTimeout;
    }
    if (this._splitBuffFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitBuffFail = this._splitBuffFail;
    }
    if (this._streamClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamClosed = this._streamClosed;
    }
    if (this._streamCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamCreate = this._streamCreate;
    }
    if (this._streamFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamFree = this._streamFree;
    }
    if (this._streamsGtMaxConcurStreams !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamsGtMaxConcurStreams = this._streamsGtMaxConcurStreams;
    }
    if (this._totalBytesReceived !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalBytesReceived = this._totalBytesReceived;
    }
    if (this._totalBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalBytesSent = this._totalBytesSent;
    }
    if (this._totalProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalProxy = this._totalProxy;
    }
    if (this._trailersNoEndStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.trailersNoEndStream = this._trailersNoEndStream;
    }
    if (this._unknownFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknownFrame = this._unknownFrame;
    }
    if (this._windowUpdateFrame !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowUpdateFrame = this._windowUpdateFrame;
    }
    if (this._windowUpdateFrameSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.windowUpdateFrameSent = this._windowUpdateFrameSent;
    }
    if (this._wrongStreamState !== undefined) {
      hasAnyValues = true;
      internalValueResult.wrongStreamState = this._wrongStreamState;
    }
    if (this._zeroWindowSizeOnStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.zeroWindowSizeOnStream = this._zeroWindowSizeOnStream;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbHttp2OperOperHttp2CpuListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allocFailTotal = undefined;
      this._badConnectionPreface = undefined;
      this._badFrameTypeForStreamState = undefined;
      this._buffAllocError = undefined;
      this._cancel = undefined;
      this._cantAllocateControlFrame = undefined;
      this._cantAllocateGoawayFrame = undefined;
      this._cantAllocatePingFrame = undefined;
      this._cantAllocateRstFrame = undefined;
      this._cantAllocateSettingsFrame = undefined;
      this._cantAllocateStream = undefined;
      this._cantAllocateWindowFrame = undefined;
      this._closedStateUnexpectedFrame = undefined;
      this._compressionError = undefined;
      this._connectError = undefined;
      this._connectionPrefaceRcvd = undefined;
      this._connectionPrefaceSent = undefined;
      this._continuationBeforeHeaders = undefined;
      this._continuationFrame = undefined;
      this._continuationFrameSent = undefined;
      this._controlBytesReceived = undefined;
      this._controlBytesSent = undefined;
      this._controlFrame = undefined;
      this._controlFrameSent = undefined;
      this._currProxy = undefined;
      this._currentStream = undefined;
      this._dataBytesReceived = undefined;
      this._dataBytesSent = undefined;
      this._dataFrame = undefined;
      this._dataFrameSent = undefined;
      this._dataNoStream = undefined;
      this._dataQueueAllocError = undefined;
      this._dataToApp = undefined;
      this._deflateAllocFail = undefined;
      this._emptySettingsRcvd = undefined;
      this._emptySettingsSent = undefined;
      this._endStreamRcvd = undefined;
      this._endStreamSent = undefined;
      this._enhanceYourCalm = undefined;
      this._errRcvdTotal = undefined;
      this._errSentCancel = undefined;
      this._errSentCompressionErr = undefined;
      this._errSentConnectErr = undefined;
      this._errSentFlowControl = undefined;
      this._errSentFrameSizeErr = undefined;
      this._errSentHttp11Required = undefined;
      this._errSentInadequateSecurity = undefined;
      this._errSentInternalErr = undefined;
      this._errSentProtoErr = undefined;
      this._errSentRefusedStream = undefined;
      this._errSentSettingTimeout = undefined;
      this._errSentStreamClosed = undefined;
      this._errSentTotal = undefined;
      this._errSentYourCalm = undefined;
      this._errorMaxInvalidStream = undefined;
      this._exceedsMaxWindowSizeStream = undefined;
      this._flowControlError = undefined;
      this._frameHeaderBytesReceived = undefined;
      this._frameHeaderBytesSent = undefined;
      this._frameSizeError = undefined;
      this._goawayFrame = undefined;
      this._goawayFrameSent = undefined;
      this._halfClosedRemoteStateUnexpectedFrame = undefined;
      this._headerBytesReceived = undefined;
      this._headerBytesSent = undefined;
      this._headerNoStream = undefined;
      this._headerPadlenGtFramePayload = undefined;
      this._headerToApp = undefined;
      this._headersAfterContinuation = undefined;
      this._headersFrame = undefined;
      this._headersFrameSent = undefined;
      this._headersInterleaved = undefined;
      this._http2Rejected = undefined;
      this._http11Required = undefined;
      this._idleStateUnexpectedFrame = undefined;
      this._inadequateSecurity = undefined;
      this._inflateAllocFail = undefined;
      this._inflateHeaderFail = undefined;
      this._internalError = undefined;
      this._invalidFrameDuringHeaders = undefined;
      this._invalidFrameSize = undefined;
      this._invalidPushPromise = undefined;
      this._invalidSettingValue = undefined;
      this._invalidStreamId = undefined;
      this._invalidWindowUpdate = undefined;
      this._peakProxy = undefined;
      this._pingFrame = undefined;
      this._pingFrameSent = undefined;
      this._priorityFrame = undefined;
      this._priorityFrameSent = undefined;
      this._protocolError = undefined;
      this._proxyAllocError = undefined;
      this._pushPromiseFrameSent = undefined;
      this._refusedStream = undefined;
      this._reservedLocalStateUnexpectedFrame = undefined;
      this._reservedRemoteStateUnexpectedFrame = undefined;
      this._rstFrameRcvd = undefined;
      this._rstFrameSent = undefined;
      this._settingsAckRcvd = undefined;
      this._settingsAckSent = undefined;
      this._settingsFrame = undefined;
      this._settingsFrameSent = undefined;
      this._settingsTimeout = undefined;
      this._splitBuffFail = undefined;
      this._streamClosed = undefined;
      this._streamCreate = undefined;
      this._streamFree = undefined;
      this._streamsGtMaxConcurStreams = undefined;
      this._totalBytesReceived = undefined;
      this._totalBytesSent = undefined;
      this._totalProxy = undefined;
      this._trailersNoEndStream = undefined;
      this._unknownFrame = undefined;
      this._windowUpdateFrame = undefined;
      this._windowUpdateFrameSent = undefined;
      this._wrongStreamState = undefined;
      this._zeroWindowSizeOnStream = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allocFailTotal = value.allocFailTotal;
      this._badConnectionPreface = value.badConnectionPreface;
      this._badFrameTypeForStreamState = value.badFrameTypeForStreamState;
      this._buffAllocError = value.buffAllocError;
      this._cancel = value.cancel;
      this._cantAllocateControlFrame = value.cantAllocateControlFrame;
      this._cantAllocateGoawayFrame = value.cantAllocateGoawayFrame;
      this._cantAllocatePingFrame = value.cantAllocatePingFrame;
      this._cantAllocateRstFrame = value.cantAllocateRstFrame;
      this._cantAllocateSettingsFrame = value.cantAllocateSettingsFrame;
      this._cantAllocateStream = value.cantAllocateStream;
      this._cantAllocateWindowFrame = value.cantAllocateWindowFrame;
      this._closedStateUnexpectedFrame = value.closedStateUnexpectedFrame;
      this._compressionError = value.compressionError;
      this._connectError = value.connectError;
      this._connectionPrefaceRcvd = value.connectionPrefaceRcvd;
      this._connectionPrefaceSent = value.connectionPrefaceSent;
      this._continuationBeforeHeaders = value.continuationBeforeHeaders;
      this._continuationFrame = value.continuationFrame;
      this._continuationFrameSent = value.continuationFrameSent;
      this._controlBytesReceived = value.controlBytesReceived;
      this._controlBytesSent = value.controlBytesSent;
      this._controlFrame = value.controlFrame;
      this._controlFrameSent = value.controlFrameSent;
      this._currProxy = value.currProxy;
      this._currentStream = value.currentStream;
      this._dataBytesReceived = value.dataBytesReceived;
      this._dataBytesSent = value.dataBytesSent;
      this._dataFrame = value.dataFrame;
      this._dataFrameSent = value.dataFrameSent;
      this._dataNoStream = value.dataNoStream;
      this._dataQueueAllocError = value.dataQueueAllocError;
      this._dataToApp = value.dataToApp;
      this._deflateAllocFail = value.deflateAllocFail;
      this._emptySettingsRcvd = value.emptySettingsRcvd;
      this._emptySettingsSent = value.emptySettingsSent;
      this._endStreamRcvd = value.endStreamRcvd;
      this._endStreamSent = value.endStreamSent;
      this._enhanceYourCalm = value.enhanceYourCalm;
      this._errRcvdTotal = value.errRcvdTotal;
      this._errSentCancel = value.errSentCancel;
      this._errSentCompressionErr = value.errSentCompressionErr;
      this._errSentConnectErr = value.errSentConnectErr;
      this._errSentFlowControl = value.errSentFlowControl;
      this._errSentFrameSizeErr = value.errSentFrameSizeErr;
      this._errSentHttp11Required = value.errSentHttp11Required;
      this._errSentInadequateSecurity = value.errSentInadequateSecurity;
      this._errSentInternalErr = value.errSentInternalErr;
      this._errSentProtoErr = value.errSentProtoErr;
      this._errSentRefusedStream = value.errSentRefusedStream;
      this._errSentSettingTimeout = value.errSentSettingTimeout;
      this._errSentStreamClosed = value.errSentStreamClosed;
      this._errSentTotal = value.errSentTotal;
      this._errSentYourCalm = value.errSentYourCalm;
      this._errorMaxInvalidStream = value.errorMaxInvalidStream;
      this._exceedsMaxWindowSizeStream = value.exceedsMaxWindowSizeStream;
      this._flowControlError = value.flowControlError;
      this._frameHeaderBytesReceived = value.frameHeaderBytesReceived;
      this._frameHeaderBytesSent = value.frameHeaderBytesSent;
      this._frameSizeError = value.frameSizeError;
      this._goawayFrame = value.goawayFrame;
      this._goawayFrameSent = value.goawayFrameSent;
      this._halfClosedRemoteStateUnexpectedFrame = value.halfClosedRemoteStateUnexpectedFrame;
      this._headerBytesReceived = value.headerBytesReceived;
      this._headerBytesSent = value.headerBytesSent;
      this._headerNoStream = value.headerNoStream;
      this._headerPadlenGtFramePayload = value.headerPadlenGtFramePayload;
      this._headerToApp = value.headerToApp;
      this._headersAfterContinuation = value.headersAfterContinuation;
      this._headersFrame = value.headersFrame;
      this._headersFrameSent = value.headersFrameSent;
      this._headersInterleaved = value.headersInterleaved;
      this._http2Rejected = value.http2Rejected;
      this._http11Required = value.http11Required;
      this._idleStateUnexpectedFrame = value.idleStateUnexpectedFrame;
      this._inadequateSecurity = value.inadequateSecurity;
      this._inflateAllocFail = value.inflateAllocFail;
      this._inflateHeaderFail = value.inflateHeaderFail;
      this._internalError = value.internalError;
      this._invalidFrameDuringHeaders = value.invalidFrameDuringHeaders;
      this._invalidFrameSize = value.invalidFrameSize;
      this._invalidPushPromise = value.invalidPushPromise;
      this._invalidSettingValue = value.invalidSettingValue;
      this._invalidStreamId = value.invalidStreamId;
      this._invalidWindowUpdate = value.invalidWindowUpdate;
      this._peakProxy = value.peakProxy;
      this._pingFrame = value.pingFrame;
      this._pingFrameSent = value.pingFrameSent;
      this._priorityFrame = value.priorityFrame;
      this._priorityFrameSent = value.priorityFrameSent;
      this._protocolError = value.protocolError;
      this._proxyAllocError = value.proxyAllocError;
      this._pushPromiseFrameSent = value.pushPromiseFrameSent;
      this._refusedStream = value.refusedStream;
      this._reservedLocalStateUnexpectedFrame = value.reservedLocalStateUnexpectedFrame;
      this._reservedRemoteStateUnexpectedFrame = value.reservedRemoteStateUnexpectedFrame;
      this._rstFrameRcvd = value.rstFrameRcvd;
      this._rstFrameSent = value.rstFrameSent;
      this._settingsAckRcvd = value.settingsAckRcvd;
      this._settingsAckSent = value.settingsAckSent;
      this._settingsFrame = value.settingsFrame;
      this._settingsFrameSent = value.settingsFrameSent;
      this._settingsTimeout = value.settingsTimeout;
      this._splitBuffFail = value.splitBuffFail;
      this._streamClosed = value.streamClosed;
      this._streamCreate = value.streamCreate;
      this._streamFree = value.streamFree;
      this._streamsGtMaxConcurStreams = value.streamsGtMaxConcurStreams;
      this._totalBytesReceived = value.totalBytesReceived;
      this._totalBytesSent = value.totalBytesSent;
      this._totalProxy = value.totalProxy;
      this._trailersNoEndStream = value.trailersNoEndStream;
      this._unknownFrame = value.unknownFrame;
      this._windowUpdateFrame = value.windowUpdateFrame;
      this._windowUpdateFrameSent = value.windowUpdateFrameSent;
      this._wrongStreamState = value.wrongStreamState;
      this._zeroWindowSizeOnStream = value.zeroWindowSizeOnStream;
    }
  }

  // alloc_fail_total - computed: false, optional: true, required: false
  private _allocFailTotal?: number; 
  public get allocFailTotal() {
    return this.getNumberAttribute('alloc_fail_total');
  }
  public set allocFailTotal(value: number) {
    this._allocFailTotal = value;
  }
  public resetAllocFailTotal() {
    this._allocFailTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocFailTotalInput() {
    return this._allocFailTotal;
  }

  // bad_connection_preface - computed: false, optional: true, required: false
  private _badConnectionPreface?: number; 
  public get badConnectionPreface() {
    return this.getNumberAttribute('bad_connection_preface');
  }
  public set badConnectionPreface(value: number) {
    this._badConnectionPreface = value;
  }
  public resetBadConnectionPreface() {
    this._badConnectionPreface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badConnectionPrefaceInput() {
    return this._badConnectionPreface;
  }

  // bad_frame_type_for_stream_state - computed: false, optional: true, required: false
  private _badFrameTypeForStreamState?: number; 
  public get badFrameTypeForStreamState() {
    return this.getNumberAttribute('bad_frame_type_for_stream_state');
  }
  public set badFrameTypeForStreamState(value: number) {
    this._badFrameTypeForStreamState = value;
  }
  public resetBadFrameTypeForStreamState() {
    this._badFrameTypeForStreamState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badFrameTypeForStreamStateInput() {
    return this._badFrameTypeForStreamState;
  }

  // buff_alloc_error - computed: false, optional: true, required: false
  private _buffAllocError?: number; 
  public get buffAllocError() {
    return this.getNumberAttribute('buff_alloc_error');
  }
  public set buffAllocError(value: number) {
    this._buffAllocError = value;
  }
  public resetBuffAllocError() {
    this._buffAllocError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buffAllocErrorInput() {
    return this._buffAllocError;
  }

  // cancel - computed: false, optional: true, required: false
  private _cancel?: number; 
  public get cancel() {
    return this.getNumberAttribute('cancel');
  }
  public set cancel(value: number) {
    this._cancel = value;
  }
  public resetCancel() {
    this._cancel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelInput() {
    return this._cancel;
  }

  // cant_allocate_control_frame - computed: false, optional: true, required: false
  private _cantAllocateControlFrame?: number; 
  public get cantAllocateControlFrame() {
    return this.getNumberAttribute('cant_allocate_control_frame');
  }
  public set cantAllocateControlFrame(value: number) {
    this._cantAllocateControlFrame = value;
  }
  public resetCantAllocateControlFrame() {
    this._cantAllocateControlFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cantAllocateControlFrameInput() {
    return this._cantAllocateControlFrame;
  }

  // cant_allocate_goaway_frame - computed: false, optional: true, required: false
  private _cantAllocateGoawayFrame?: number; 
  public get cantAllocateGoawayFrame() {
    return this.getNumberAttribute('cant_allocate_goaway_frame');
  }
  public set cantAllocateGoawayFrame(value: number) {
    this._cantAllocateGoawayFrame = value;
  }
  public resetCantAllocateGoawayFrame() {
    this._cantAllocateGoawayFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cantAllocateGoawayFrameInput() {
    return this._cantAllocateGoawayFrame;
  }

  // cant_allocate_ping_frame - computed: false, optional: true, required: false
  private _cantAllocatePingFrame?: number; 
  public get cantAllocatePingFrame() {
    return this.getNumberAttribute('cant_allocate_ping_frame');
  }
  public set cantAllocatePingFrame(value: number) {
    this._cantAllocatePingFrame = value;
  }
  public resetCantAllocatePingFrame() {
    this._cantAllocatePingFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cantAllocatePingFrameInput() {
    return this._cantAllocatePingFrame;
  }

  // cant_allocate_rst_frame - computed: false, optional: true, required: false
  private _cantAllocateRstFrame?: number; 
  public get cantAllocateRstFrame() {
    return this.getNumberAttribute('cant_allocate_rst_frame');
  }
  public set cantAllocateRstFrame(value: number) {
    this._cantAllocateRstFrame = value;
  }
  public resetCantAllocateRstFrame() {
    this._cantAllocateRstFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cantAllocateRstFrameInput() {
    return this._cantAllocateRstFrame;
  }

  // cant_allocate_settings_frame - computed: false, optional: true, required: false
  private _cantAllocateSettingsFrame?: number; 
  public get cantAllocateSettingsFrame() {
    return this.getNumberAttribute('cant_allocate_settings_frame');
  }
  public set cantAllocateSettingsFrame(value: number) {
    this._cantAllocateSettingsFrame = value;
  }
  public resetCantAllocateSettingsFrame() {
    this._cantAllocateSettingsFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cantAllocateSettingsFrameInput() {
    return this._cantAllocateSettingsFrame;
  }

  // cant_allocate_stream - computed: false, optional: true, required: false
  private _cantAllocateStream?: number; 
  public get cantAllocateStream() {
    return this.getNumberAttribute('cant_allocate_stream');
  }
  public set cantAllocateStream(value: number) {
    this._cantAllocateStream = value;
  }
  public resetCantAllocateStream() {
    this._cantAllocateStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cantAllocateStreamInput() {
    return this._cantAllocateStream;
  }

  // cant_allocate_window_frame - computed: false, optional: true, required: false
  private _cantAllocateWindowFrame?: number; 
  public get cantAllocateWindowFrame() {
    return this.getNumberAttribute('cant_allocate_window_frame');
  }
  public set cantAllocateWindowFrame(value: number) {
    this._cantAllocateWindowFrame = value;
  }
  public resetCantAllocateWindowFrame() {
    this._cantAllocateWindowFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cantAllocateWindowFrameInput() {
    return this._cantAllocateWindowFrame;
  }

  // closed_state_unexpected_frame - computed: false, optional: true, required: false
  private _closedStateUnexpectedFrame?: number; 
  public get closedStateUnexpectedFrame() {
    return this.getNumberAttribute('closed_state_unexpected_frame');
  }
  public set closedStateUnexpectedFrame(value: number) {
    this._closedStateUnexpectedFrame = value;
  }
  public resetClosedStateUnexpectedFrame() {
    this._closedStateUnexpectedFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get closedStateUnexpectedFrameInput() {
    return this._closedStateUnexpectedFrame;
  }

  // compression_error - computed: false, optional: true, required: false
  private _compressionError?: number; 
  public get compressionError() {
    return this.getNumberAttribute('compression_error');
  }
  public set compressionError(value: number) {
    this._compressionError = value;
  }
  public resetCompressionError() {
    this._compressionError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionErrorInput() {
    return this._compressionError;
  }

  // connect_error - computed: false, optional: true, required: false
  private _connectError?: number; 
  public get connectError() {
    return this.getNumberAttribute('connect_error');
  }
  public set connectError(value: number) {
    this._connectError = value;
  }
  public resetConnectError() {
    this._connectError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectErrorInput() {
    return this._connectError;
  }

  // connection_preface_rcvd - computed: false, optional: true, required: false
  private _connectionPrefaceRcvd?: number; 
  public get connectionPrefaceRcvd() {
    return this.getNumberAttribute('connection_preface_rcvd');
  }
  public set connectionPrefaceRcvd(value: number) {
    this._connectionPrefaceRcvd = value;
  }
  public resetConnectionPrefaceRcvd() {
    this._connectionPrefaceRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPrefaceRcvdInput() {
    return this._connectionPrefaceRcvd;
  }

  // connection_preface_sent - computed: false, optional: true, required: false
  private _connectionPrefaceSent?: number; 
  public get connectionPrefaceSent() {
    return this.getNumberAttribute('connection_preface_sent');
  }
  public set connectionPrefaceSent(value: number) {
    this._connectionPrefaceSent = value;
  }
  public resetConnectionPrefaceSent() {
    this._connectionPrefaceSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPrefaceSentInput() {
    return this._connectionPrefaceSent;
  }

  // continuation_before_headers - computed: false, optional: true, required: false
  private _continuationBeforeHeaders?: number; 
  public get continuationBeforeHeaders() {
    return this.getNumberAttribute('continuation_before_headers');
  }
  public set continuationBeforeHeaders(value: number) {
    this._continuationBeforeHeaders = value;
  }
  public resetContinuationBeforeHeaders() {
    this._continuationBeforeHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuationBeforeHeadersInput() {
    return this._continuationBeforeHeaders;
  }

  // continuation_frame - computed: false, optional: true, required: false
  private _continuationFrame?: number; 
  public get continuationFrame() {
    return this.getNumberAttribute('continuation_frame');
  }
  public set continuationFrame(value: number) {
    this._continuationFrame = value;
  }
  public resetContinuationFrame() {
    this._continuationFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuationFrameInput() {
    return this._continuationFrame;
  }

  // continuation_frame_sent - computed: false, optional: true, required: false
  private _continuationFrameSent?: number; 
  public get continuationFrameSent() {
    return this.getNumberAttribute('continuation_frame_sent');
  }
  public set continuationFrameSent(value: number) {
    this._continuationFrameSent = value;
  }
  public resetContinuationFrameSent() {
    this._continuationFrameSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continuationFrameSentInput() {
    return this._continuationFrameSent;
  }

  // control_bytes_received - computed: false, optional: true, required: false
  private _controlBytesReceived?: number; 
  public get controlBytesReceived() {
    return this.getNumberAttribute('control_bytes_received');
  }
  public set controlBytesReceived(value: number) {
    this._controlBytesReceived = value;
  }
  public resetControlBytesReceived() {
    this._controlBytesReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlBytesReceivedInput() {
    return this._controlBytesReceived;
  }

  // control_bytes_sent - computed: false, optional: true, required: false
  private _controlBytesSent?: number; 
  public get controlBytesSent() {
    return this.getNumberAttribute('control_bytes_sent');
  }
  public set controlBytesSent(value: number) {
    this._controlBytesSent = value;
  }
  public resetControlBytesSent() {
    this._controlBytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlBytesSentInput() {
    return this._controlBytesSent;
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

  // control_frame_sent - computed: false, optional: true, required: false
  private _controlFrameSent?: number; 
  public get controlFrameSent() {
    return this.getNumberAttribute('control_frame_sent');
  }
  public set controlFrameSent(value: number) {
    this._controlFrameSent = value;
  }
  public resetControlFrameSent() {
    this._controlFrameSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controlFrameSentInput() {
    return this._controlFrameSent;
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

  // current_stream - computed: false, optional: true, required: false
  private _currentStream?: number; 
  public get currentStream() {
    return this.getNumberAttribute('current_stream');
  }
  public set currentStream(value: number) {
    this._currentStream = value;
  }
  public resetCurrentStream() {
    this._currentStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentStreamInput() {
    return this._currentStream;
  }

  // data_bytes_received - computed: false, optional: true, required: false
  private _dataBytesReceived?: number; 
  public get dataBytesReceived() {
    return this.getNumberAttribute('data_bytes_received');
  }
  public set dataBytesReceived(value: number) {
    this._dataBytesReceived = value;
  }
  public resetDataBytesReceived() {
    this._dataBytesReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataBytesReceivedInput() {
    return this._dataBytesReceived;
  }

  // data_bytes_sent - computed: false, optional: true, required: false
  private _dataBytesSent?: number; 
  public get dataBytesSent() {
    return this.getNumberAttribute('data_bytes_sent');
  }
  public set dataBytesSent(value: number) {
    this._dataBytesSent = value;
  }
  public resetDataBytesSent() {
    this._dataBytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataBytesSentInput() {
    return this._dataBytesSent;
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

  // data_frame_sent - computed: false, optional: true, required: false
  private _dataFrameSent?: number; 
  public get dataFrameSent() {
    return this.getNumberAttribute('data_frame_sent');
  }
  public set dataFrameSent(value: number) {
    this._dataFrameSent = value;
  }
  public resetDataFrameSent() {
    this._dataFrameSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataFrameSentInput() {
    return this._dataFrameSent;
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

  // data_queue_alloc_error - computed: false, optional: true, required: false
  private _dataQueueAllocError?: number; 
  public get dataQueueAllocError() {
    return this.getNumberAttribute('data_queue_alloc_error');
  }
  public set dataQueueAllocError(value: number) {
    this._dataQueueAllocError = value;
  }
  public resetDataQueueAllocError() {
    this._dataQueueAllocError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataQueueAllocErrorInput() {
    return this._dataQueueAllocError;
  }

  // data_to_app - computed: false, optional: true, required: false
  private _dataToApp?: number; 
  public get dataToApp() {
    return this.getNumberAttribute('data_to_app');
  }
  public set dataToApp(value: number) {
    this._dataToApp = value;
  }
  public resetDataToApp() {
    this._dataToApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataToAppInput() {
    return this._dataToApp;
  }

  // deflate_alloc_fail - computed: false, optional: true, required: false
  private _deflateAllocFail?: number; 
  public get deflateAllocFail() {
    return this.getNumberAttribute('deflate_alloc_fail');
  }
  public set deflateAllocFail(value: number) {
    this._deflateAllocFail = value;
  }
  public resetDeflateAllocFail() {
    this._deflateAllocFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deflateAllocFailInput() {
    return this._deflateAllocFail;
  }

  // empty_settings_rcvd - computed: false, optional: true, required: false
  private _emptySettingsRcvd?: number; 
  public get emptySettingsRcvd() {
    return this.getNumberAttribute('empty_settings_rcvd');
  }
  public set emptySettingsRcvd(value: number) {
    this._emptySettingsRcvd = value;
  }
  public resetEmptySettingsRcvd() {
    this._emptySettingsRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptySettingsRcvdInput() {
    return this._emptySettingsRcvd;
  }

  // empty_settings_sent - computed: false, optional: true, required: false
  private _emptySettingsSent?: number; 
  public get emptySettingsSent() {
    return this.getNumberAttribute('empty_settings_sent');
  }
  public set emptySettingsSent(value: number) {
    this._emptySettingsSent = value;
  }
  public resetEmptySettingsSent() {
    this._emptySettingsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emptySettingsSentInput() {
    return this._emptySettingsSent;
  }

  // end_stream_rcvd - computed: false, optional: true, required: false
  private _endStreamRcvd?: number; 
  public get endStreamRcvd() {
    return this.getNumberAttribute('end_stream_rcvd');
  }
  public set endStreamRcvd(value: number) {
    this._endStreamRcvd = value;
  }
  public resetEndStreamRcvd() {
    this._endStreamRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endStreamRcvdInput() {
    return this._endStreamRcvd;
  }

  // end_stream_sent - computed: false, optional: true, required: false
  private _endStreamSent?: number; 
  public get endStreamSent() {
    return this.getNumberAttribute('end_stream_sent');
  }
  public set endStreamSent(value: number) {
    this._endStreamSent = value;
  }
  public resetEndStreamSent() {
    this._endStreamSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endStreamSentInput() {
    return this._endStreamSent;
  }

  // enhance_your_calm - computed: false, optional: true, required: false
  private _enhanceYourCalm?: number; 
  public get enhanceYourCalm() {
    return this.getNumberAttribute('enhance_your_calm');
  }
  public set enhanceYourCalm(value: number) {
    this._enhanceYourCalm = value;
  }
  public resetEnhanceYourCalm() {
    this._enhanceYourCalm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enhanceYourCalmInput() {
    return this._enhanceYourCalm;
  }

  // err_rcvd_total - computed: false, optional: true, required: false
  private _errRcvdTotal?: number; 
  public get errRcvdTotal() {
    return this.getNumberAttribute('err_rcvd_total');
  }
  public set errRcvdTotal(value: number) {
    this._errRcvdTotal = value;
  }
  public resetErrRcvdTotal() {
    this._errRcvdTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errRcvdTotalInput() {
    return this._errRcvdTotal;
  }

  // err_sent_cancel - computed: false, optional: true, required: false
  private _errSentCancel?: number; 
  public get errSentCancel() {
    return this.getNumberAttribute('err_sent_cancel');
  }
  public set errSentCancel(value: number) {
    this._errSentCancel = value;
  }
  public resetErrSentCancel() {
    this._errSentCancel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errSentCancelInput() {
    return this._errSentCancel;
  }

  // err_sent_compression_err - computed: false, optional: true, required: false
  private _errSentCompressionErr?: number; 
  public get errSentCompressionErr() {
    return this.getNumberAttribute('err_sent_compression_err');
  }
  public set errSentCompressionErr(value: number) {
    this._errSentCompressionErr = value;
  }
  public resetErrSentCompressionErr() {
    this._errSentCompressionErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errSentCompressionErrInput() {
    return this._errSentCompressionErr;
  }

  // err_sent_connect_err - computed: false, optional: true, required: false
  private _errSentConnectErr?: number; 
  public get errSentConnectErr() {
    return this.getNumberAttribute('err_sent_connect_err');
  }
  public set errSentConnectErr(value: number) {
    this._errSentConnectErr = value;
  }
  public resetErrSentConnectErr() {
    this._errSentConnectErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errSentConnectErrInput() {
    return this._errSentConnectErr;
  }

  // err_sent_flow_control - computed: false, optional: true, required: false
  private _errSentFlowControl?: number; 
  public get errSentFlowControl() {
    return this.getNumberAttribute('err_sent_flow_control');
  }
  public set errSentFlowControl(value: number) {
    this._errSentFlowControl = value;
  }
  public resetErrSentFlowControl() {
    this._errSentFlowControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errSentFlowControlInput() {
    return this._errSentFlowControl;
  }

  // err_sent_frame_size_err - computed: false, optional: true, required: false
  private _errSentFrameSizeErr?: number; 
  public get errSentFrameSizeErr() {
    return this.getNumberAttribute('err_sent_frame_size_err');
  }
  public set errSentFrameSizeErr(value: number) {
    this._errSentFrameSizeErr = value;
  }
  public resetErrSentFrameSizeErr() {
    this._errSentFrameSizeErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errSentFrameSizeErrInput() {
    return this._errSentFrameSizeErr;
  }

  // err_sent_http11_required - computed: false, optional: true, required: false
  private _errSentHttp11Required?: number; 
  public get errSentHttp11Required() {
    return this.getNumberAttribute('err_sent_http11_required');
  }
  public set errSentHttp11Required(value: number) {
    this._errSentHttp11Required = value;
  }
  public resetErrSentHttp11Required() {
    this._errSentHttp11Required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errSentHttp11RequiredInput() {
    return this._errSentHttp11Required;
  }

  // err_sent_inadequate_security - computed: false, optional: true, required: false
  private _errSentInadequateSecurity?: number; 
  public get errSentInadequateSecurity() {
    return this.getNumberAttribute('err_sent_inadequate_security');
  }
  public set errSentInadequateSecurity(value: number) {
    this._errSentInadequateSecurity = value;
  }
  public resetErrSentInadequateSecurity() {
    this._errSentInadequateSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errSentInadequateSecurityInput() {
    return this._errSentInadequateSecurity;
  }

  // err_sent_internal_err - computed: false, optional: true, required: false
  private _errSentInternalErr?: number; 
  public get errSentInternalErr() {
    return this.getNumberAttribute('err_sent_internal_err');
  }
  public set errSentInternalErr(value: number) {
    this._errSentInternalErr = value;
  }
  public resetErrSentInternalErr() {
    this._errSentInternalErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errSentInternalErrInput() {
    return this._errSentInternalErr;
  }

  // err_sent_proto_err - computed: false, optional: true, required: false
  private _errSentProtoErr?: number; 
  public get errSentProtoErr() {
    return this.getNumberAttribute('err_sent_proto_err');
  }
  public set errSentProtoErr(value: number) {
    this._errSentProtoErr = value;
  }
  public resetErrSentProtoErr() {
    this._errSentProtoErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errSentProtoErrInput() {
    return this._errSentProtoErr;
  }

  // err_sent_refused_stream - computed: false, optional: true, required: false
  private _errSentRefusedStream?: number; 
  public get errSentRefusedStream() {
    return this.getNumberAttribute('err_sent_refused_stream');
  }
  public set errSentRefusedStream(value: number) {
    this._errSentRefusedStream = value;
  }
  public resetErrSentRefusedStream() {
    this._errSentRefusedStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errSentRefusedStreamInput() {
    return this._errSentRefusedStream;
  }

  // err_sent_setting_timeout - computed: false, optional: true, required: false
  private _errSentSettingTimeout?: number; 
  public get errSentSettingTimeout() {
    return this.getNumberAttribute('err_sent_setting_timeout');
  }
  public set errSentSettingTimeout(value: number) {
    this._errSentSettingTimeout = value;
  }
  public resetErrSentSettingTimeout() {
    this._errSentSettingTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errSentSettingTimeoutInput() {
    return this._errSentSettingTimeout;
  }

  // err_sent_stream_closed - computed: false, optional: true, required: false
  private _errSentStreamClosed?: number; 
  public get errSentStreamClosed() {
    return this.getNumberAttribute('err_sent_stream_closed');
  }
  public set errSentStreamClosed(value: number) {
    this._errSentStreamClosed = value;
  }
  public resetErrSentStreamClosed() {
    this._errSentStreamClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errSentStreamClosedInput() {
    return this._errSentStreamClosed;
  }

  // err_sent_total - computed: false, optional: true, required: false
  private _errSentTotal?: number; 
  public get errSentTotal() {
    return this.getNumberAttribute('err_sent_total');
  }
  public set errSentTotal(value: number) {
    this._errSentTotal = value;
  }
  public resetErrSentTotal() {
    this._errSentTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errSentTotalInput() {
    return this._errSentTotal;
  }

  // err_sent_your_calm - computed: false, optional: true, required: false
  private _errSentYourCalm?: number; 
  public get errSentYourCalm() {
    return this.getNumberAttribute('err_sent_your_calm');
  }
  public set errSentYourCalm(value: number) {
    this._errSentYourCalm = value;
  }
  public resetErrSentYourCalm() {
    this._errSentYourCalm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errSentYourCalmInput() {
    return this._errSentYourCalm;
  }

  // error_max_invalid_stream - computed: false, optional: true, required: false
  private _errorMaxInvalidStream?: number; 
  public get errorMaxInvalidStream() {
    return this.getNumberAttribute('error_max_invalid_stream');
  }
  public set errorMaxInvalidStream(value: number) {
    this._errorMaxInvalidStream = value;
  }
  public resetErrorMaxInvalidStream() {
    this._errorMaxInvalidStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorMaxInvalidStreamInput() {
    return this._errorMaxInvalidStream;
  }

  // exceeds_max_window_size_stream - computed: false, optional: true, required: false
  private _exceedsMaxWindowSizeStream?: number; 
  public get exceedsMaxWindowSizeStream() {
    return this.getNumberAttribute('exceeds_max_window_size_stream');
  }
  public set exceedsMaxWindowSizeStream(value: number) {
    this._exceedsMaxWindowSizeStream = value;
  }
  public resetExceedsMaxWindowSizeStream() {
    this._exceedsMaxWindowSizeStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceedsMaxWindowSizeStreamInput() {
    return this._exceedsMaxWindowSizeStream;
  }

  // flow_control_error - computed: false, optional: true, required: false
  private _flowControlError?: number; 
  public get flowControlError() {
    return this.getNumberAttribute('flow_control_error');
  }
  public set flowControlError(value: number) {
    this._flowControlError = value;
  }
  public resetFlowControlError() {
    this._flowControlError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowControlErrorInput() {
    return this._flowControlError;
  }

  // frame_header_bytes_received - computed: false, optional: true, required: false
  private _frameHeaderBytesReceived?: number; 
  public get frameHeaderBytesReceived() {
    return this.getNumberAttribute('frame_header_bytes_received');
  }
  public set frameHeaderBytesReceived(value: number) {
    this._frameHeaderBytesReceived = value;
  }
  public resetFrameHeaderBytesReceived() {
    this._frameHeaderBytesReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameHeaderBytesReceivedInput() {
    return this._frameHeaderBytesReceived;
  }

  // frame_header_bytes_sent - computed: false, optional: true, required: false
  private _frameHeaderBytesSent?: number; 
  public get frameHeaderBytesSent() {
    return this.getNumberAttribute('frame_header_bytes_sent');
  }
  public set frameHeaderBytesSent(value: number) {
    this._frameHeaderBytesSent = value;
  }
  public resetFrameHeaderBytesSent() {
    this._frameHeaderBytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameHeaderBytesSentInput() {
    return this._frameHeaderBytesSent;
  }

  // frame_size_error - computed: false, optional: true, required: false
  private _frameSizeError?: number; 
  public get frameSizeError() {
    return this.getNumberAttribute('frame_size_error');
  }
  public set frameSizeError(value: number) {
    this._frameSizeError = value;
  }
  public resetFrameSizeError() {
    this._frameSizeError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameSizeErrorInput() {
    return this._frameSizeError;
  }

  // goaway_frame - computed: false, optional: true, required: false
  private _goawayFrame?: number; 
  public get goawayFrame() {
    return this.getNumberAttribute('goaway_frame');
  }
  public set goawayFrame(value: number) {
    this._goawayFrame = value;
  }
  public resetGoawayFrame() {
    this._goawayFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goawayFrameInput() {
    return this._goawayFrame;
  }

  // goaway_frame_sent - computed: false, optional: true, required: false
  private _goawayFrameSent?: number; 
  public get goawayFrameSent() {
    return this.getNumberAttribute('goaway_frame_sent');
  }
  public set goawayFrameSent(value: number) {
    this._goawayFrameSent = value;
  }
  public resetGoawayFrameSent() {
    this._goawayFrameSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goawayFrameSentInput() {
    return this._goawayFrameSent;
  }

  // half_closed_remote_state_unexpected_frame - computed: false, optional: true, required: false
  private _halfClosedRemoteStateUnexpectedFrame?: number; 
  public get halfClosedRemoteStateUnexpectedFrame() {
    return this.getNumberAttribute('half_closed_remote_state_unexpected_frame');
  }
  public set halfClosedRemoteStateUnexpectedFrame(value: number) {
    this._halfClosedRemoteStateUnexpectedFrame = value;
  }
  public resetHalfClosedRemoteStateUnexpectedFrame() {
    this._halfClosedRemoteStateUnexpectedFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get halfClosedRemoteStateUnexpectedFrameInput() {
    return this._halfClosedRemoteStateUnexpectedFrame;
  }

  // header_bytes_received - computed: false, optional: true, required: false
  private _headerBytesReceived?: number; 
  public get headerBytesReceived() {
    return this.getNumberAttribute('header_bytes_received');
  }
  public set headerBytesReceived(value: number) {
    this._headerBytesReceived = value;
  }
  public resetHeaderBytesReceived() {
    this._headerBytesReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerBytesReceivedInput() {
    return this._headerBytesReceived;
  }

  // header_bytes_sent - computed: false, optional: true, required: false
  private _headerBytesSent?: number; 
  public get headerBytesSent() {
    return this.getNumberAttribute('header_bytes_sent');
  }
  public set headerBytesSent(value: number) {
    this._headerBytesSent = value;
  }
  public resetHeaderBytesSent() {
    this._headerBytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerBytesSentInput() {
    return this._headerBytesSent;
  }

  // header_no_stream - computed: false, optional: true, required: false
  private _headerNoStream?: number; 
  public get headerNoStream() {
    return this.getNumberAttribute('header_no_stream');
  }
  public set headerNoStream(value: number) {
    this._headerNoStream = value;
  }
  public resetHeaderNoStream() {
    this._headerNoStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerNoStreamInput() {
    return this._headerNoStream;
  }

  // header_padlen_gt_frame_payload - computed: false, optional: true, required: false
  private _headerPadlenGtFramePayload?: number; 
  public get headerPadlenGtFramePayload() {
    return this.getNumberAttribute('header_padlen_gt_frame_payload');
  }
  public set headerPadlenGtFramePayload(value: number) {
    this._headerPadlenGtFramePayload = value;
  }
  public resetHeaderPadlenGtFramePayload() {
    this._headerPadlenGtFramePayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerPadlenGtFramePayloadInput() {
    return this._headerPadlenGtFramePayload;
  }

  // header_to_app - computed: false, optional: true, required: false
  private _headerToApp?: number; 
  public get headerToApp() {
    return this.getNumberAttribute('header_to_app');
  }
  public set headerToApp(value: number) {
    this._headerToApp = value;
  }
  public resetHeaderToApp() {
    this._headerToApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerToAppInput() {
    return this._headerToApp;
  }

  // headers_after_continuation - computed: false, optional: true, required: false
  private _headersAfterContinuation?: number; 
  public get headersAfterContinuation() {
    return this.getNumberAttribute('headers_after_continuation');
  }
  public set headersAfterContinuation(value: number) {
    this._headersAfterContinuation = value;
  }
  public resetHeadersAfterContinuation() {
    this._headersAfterContinuation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersAfterContinuationInput() {
    return this._headersAfterContinuation;
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

  // headers_frame_sent - computed: false, optional: true, required: false
  private _headersFrameSent?: number; 
  public get headersFrameSent() {
    return this.getNumberAttribute('headers_frame_sent');
  }
  public set headersFrameSent(value: number) {
    this._headersFrameSent = value;
  }
  public resetHeadersFrameSent() {
    this._headersFrameSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersFrameSentInput() {
    return this._headersFrameSent;
  }

  // headers_interleaved - computed: false, optional: true, required: false
  private _headersInterleaved?: number; 
  public get headersInterleaved() {
    return this.getNumberAttribute('headers_interleaved');
  }
  public set headersInterleaved(value: number) {
    this._headersInterleaved = value;
  }
  public resetHeadersInterleaved() {
    this._headersInterleaved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInterleavedInput() {
    return this._headersInterleaved;
  }

  // http2_rejected - computed: false, optional: true, required: false
  private _http2Rejected?: number; 
  public get http2Rejected() {
    return this.getNumberAttribute('http2_rejected');
  }
  public set http2Rejected(value: number) {
    this._http2Rejected = value;
  }
  public resetHttp2Rejected() {
    this._http2Rejected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2RejectedInput() {
    return this._http2Rejected;
  }

  // http_1_1_required - computed: false, optional: true, required: false
  private _http11Required?: number; 
  public get http11Required() {
    return this.getNumberAttribute('http_1_1_required');
  }
  public set http11Required(value: number) {
    this._http11Required = value;
  }
  public resetHttp11Required() {
    this._http11Required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http11RequiredInput() {
    return this._http11Required;
  }

  // idle_state_unexpected_frame - computed: false, optional: true, required: false
  private _idleStateUnexpectedFrame?: number; 
  public get idleStateUnexpectedFrame() {
    return this.getNumberAttribute('idle_state_unexpected_frame');
  }
  public set idleStateUnexpectedFrame(value: number) {
    this._idleStateUnexpectedFrame = value;
  }
  public resetIdleStateUnexpectedFrame() {
    this._idleStateUnexpectedFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleStateUnexpectedFrameInput() {
    return this._idleStateUnexpectedFrame;
  }

  // inadequate_security - computed: false, optional: true, required: false
  private _inadequateSecurity?: number; 
  public get inadequateSecurity() {
    return this.getNumberAttribute('inadequate_security');
  }
  public set inadequateSecurity(value: number) {
    this._inadequateSecurity = value;
  }
  public resetInadequateSecurity() {
    this._inadequateSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inadequateSecurityInput() {
    return this._inadequateSecurity;
  }

  // inflate_alloc_fail - computed: false, optional: true, required: false
  private _inflateAllocFail?: number; 
  public get inflateAllocFail() {
    return this.getNumberAttribute('inflate_alloc_fail');
  }
  public set inflateAllocFail(value: number) {
    this._inflateAllocFail = value;
  }
  public resetInflateAllocFail() {
    this._inflateAllocFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inflateAllocFailInput() {
    return this._inflateAllocFail;
  }

  // inflate_header_fail - computed: false, optional: true, required: false
  private _inflateHeaderFail?: number; 
  public get inflateHeaderFail() {
    return this.getNumberAttribute('inflate_header_fail');
  }
  public set inflateHeaderFail(value: number) {
    this._inflateHeaderFail = value;
  }
  public resetInflateHeaderFail() {
    this._inflateHeaderFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inflateHeaderFailInput() {
    return this._inflateHeaderFail;
  }

  // internal_error - computed: false, optional: true, required: false
  private _internalError?: number; 
  public get internalError() {
    return this.getNumberAttribute('internal_error');
  }
  public set internalError(value: number) {
    this._internalError = value;
  }
  public resetInternalError() {
    this._internalError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalErrorInput() {
    return this._internalError;
  }

  // invalid_frame_during_headers - computed: false, optional: true, required: false
  private _invalidFrameDuringHeaders?: number; 
  public get invalidFrameDuringHeaders() {
    return this.getNumberAttribute('invalid_frame_during_headers');
  }
  public set invalidFrameDuringHeaders(value: number) {
    this._invalidFrameDuringHeaders = value;
  }
  public resetInvalidFrameDuringHeaders() {
    this._invalidFrameDuringHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidFrameDuringHeadersInput() {
    return this._invalidFrameDuringHeaders;
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

  // invalid_push_promise - computed: false, optional: true, required: false
  private _invalidPushPromise?: number; 
  public get invalidPushPromise() {
    return this.getNumberAttribute('invalid_push_promise');
  }
  public set invalidPushPromise(value: number) {
    this._invalidPushPromise = value;
  }
  public resetInvalidPushPromise() {
    this._invalidPushPromise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidPushPromiseInput() {
    return this._invalidPushPromise;
  }

  // invalid_setting_value - computed: false, optional: true, required: false
  private _invalidSettingValue?: number; 
  public get invalidSettingValue() {
    return this.getNumberAttribute('invalid_setting_value');
  }
  public set invalidSettingValue(value: number) {
    this._invalidSettingValue = value;
  }
  public resetInvalidSettingValue() {
    this._invalidSettingValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidSettingValueInput() {
    return this._invalidSettingValue;
  }

  // invalid_stream_id - computed: false, optional: true, required: false
  private _invalidStreamId?: number; 
  public get invalidStreamId() {
    return this.getNumberAttribute('invalid_stream_id');
  }
  public set invalidStreamId(value: number) {
    this._invalidStreamId = value;
  }
  public resetInvalidStreamId() {
    this._invalidStreamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidStreamIdInput() {
    return this._invalidStreamId;
  }

  // invalid_window_update - computed: false, optional: true, required: false
  private _invalidWindowUpdate?: number; 
  public get invalidWindowUpdate() {
    return this.getNumberAttribute('invalid_window_update');
  }
  public set invalidWindowUpdate(value: number) {
    this._invalidWindowUpdate = value;
  }
  public resetInvalidWindowUpdate() {
    this._invalidWindowUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidWindowUpdateInput() {
    return this._invalidWindowUpdate;
  }

  // peak_proxy - computed: false, optional: true, required: false
  private _peakProxy?: number; 
  public get peakProxy() {
    return this.getNumberAttribute('peak_proxy');
  }
  public set peakProxy(value: number) {
    this._peakProxy = value;
  }
  public resetPeakProxy() {
    this._peakProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peakProxyInput() {
    return this._peakProxy;
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

  // ping_frame_sent - computed: false, optional: true, required: false
  private _pingFrameSent?: number; 
  public get pingFrameSent() {
    return this.getNumberAttribute('ping_frame_sent');
  }
  public set pingFrameSent(value: number) {
    this._pingFrameSent = value;
  }
  public resetPingFrameSent() {
    this._pingFrameSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingFrameSentInput() {
    return this._pingFrameSent;
  }

  // priority_frame - computed: false, optional: true, required: false
  private _priorityFrame?: number; 
  public get priorityFrame() {
    return this.getNumberAttribute('priority_frame');
  }
  public set priorityFrame(value: number) {
    this._priorityFrame = value;
  }
  public resetPriorityFrame() {
    this._priorityFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityFrameInput() {
    return this._priorityFrame;
  }

  // priority_frame_sent - computed: false, optional: true, required: false
  private _priorityFrameSent?: number; 
  public get priorityFrameSent() {
    return this.getNumberAttribute('priority_frame_sent');
  }
  public set priorityFrameSent(value: number) {
    this._priorityFrameSent = value;
  }
  public resetPriorityFrameSent() {
    this._priorityFrameSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityFrameSentInput() {
    return this._priorityFrameSent;
  }

  // protocol_error - computed: false, optional: true, required: false
  private _protocolError?: number; 
  public get protocolError() {
    return this.getNumberAttribute('protocol_error');
  }
  public set protocolError(value: number) {
    this._protocolError = value;
  }
  public resetProtocolError() {
    this._protocolError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolErrorInput() {
    return this._protocolError;
  }

  // proxy_alloc_error - computed: false, optional: true, required: false
  private _proxyAllocError?: number; 
  public get proxyAllocError() {
    return this.getNumberAttribute('proxy_alloc_error');
  }
  public set proxyAllocError(value: number) {
    this._proxyAllocError = value;
  }
  public resetProxyAllocError() {
    this._proxyAllocError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyAllocErrorInput() {
    return this._proxyAllocError;
  }

  // push_promise_frame_sent - computed: false, optional: true, required: false
  private _pushPromiseFrameSent?: number; 
  public get pushPromiseFrameSent() {
    return this.getNumberAttribute('push_promise_frame_sent');
  }
  public set pushPromiseFrameSent(value: number) {
    this._pushPromiseFrameSent = value;
  }
  public resetPushPromiseFrameSent() {
    this._pushPromiseFrameSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushPromiseFrameSentInput() {
    return this._pushPromiseFrameSent;
  }

  // refused_stream - computed: false, optional: true, required: false
  private _refusedStream?: number; 
  public get refusedStream() {
    return this.getNumberAttribute('refused_stream');
  }
  public set refusedStream(value: number) {
    this._refusedStream = value;
  }
  public resetRefusedStream() {
    this._refusedStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refusedStreamInput() {
    return this._refusedStream;
  }

  // reserved_local_state_unexpected_frame - computed: false, optional: true, required: false
  private _reservedLocalStateUnexpectedFrame?: number; 
  public get reservedLocalStateUnexpectedFrame() {
    return this.getNumberAttribute('reserved_local_state_unexpected_frame');
  }
  public set reservedLocalStateUnexpectedFrame(value: number) {
    this._reservedLocalStateUnexpectedFrame = value;
  }
  public resetReservedLocalStateUnexpectedFrame() {
    this._reservedLocalStateUnexpectedFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedLocalStateUnexpectedFrameInput() {
    return this._reservedLocalStateUnexpectedFrame;
  }

  // reserved_remote_state_unexpected_frame - computed: false, optional: true, required: false
  private _reservedRemoteStateUnexpectedFrame?: number; 
  public get reservedRemoteStateUnexpectedFrame() {
    return this.getNumberAttribute('reserved_remote_state_unexpected_frame');
  }
  public set reservedRemoteStateUnexpectedFrame(value: number) {
    this._reservedRemoteStateUnexpectedFrame = value;
  }
  public resetReservedRemoteStateUnexpectedFrame() {
    this._reservedRemoteStateUnexpectedFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedRemoteStateUnexpectedFrameInput() {
    return this._reservedRemoteStateUnexpectedFrame;
  }

  // rst_frame_rcvd - computed: false, optional: true, required: false
  private _rstFrameRcvd?: number; 
  public get rstFrameRcvd() {
    return this.getNumberAttribute('rst_frame_rcvd');
  }
  public set rstFrameRcvd(value: number) {
    this._rstFrameRcvd = value;
  }
  public resetRstFrameRcvd() {
    this._rstFrameRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rstFrameRcvdInput() {
    return this._rstFrameRcvd;
  }

  // rst_frame_sent - computed: false, optional: true, required: false
  private _rstFrameSent?: number; 
  public get rstFrameSent() {
    return this.getNumberAttribute('rst_frame_sent');
  }
  public set rstFrameSent(value: number) {
    this._rstFrameSent = value;
  }
  public resetRstFrameSent() {
    this._rstFrameSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rstFrameSentInput() {
    return this._rstFrameSent;
  }

  // settings_ack_rcvd - computed: false, optional: true, required: false
  private _settingsAckRcvd?: number; 
  public get settingsAckRcvd() {
    return this.getNumberAttribute('settings_ack_rcvd');
  }
  public set settingsAckRcvd(value: number) {
    this._settingsAckRcvd = value;
  }
  public resetSettingsAckRcvd() {
    this._settingsAckRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsAckRcvdInput() {
    return this._settingsAckRcvd;
  }

  // settings_ack_sent - computed: false, optional: true, required: false
  private _settingsAckSent?: number; 
  public get settingsAckSent() {
    return this.getNumberAttribute('settings_ack_sent');
  }
  public set settingsAckSent(value: number) {
    this._settingsAckSent = value;
  }
  public resetSettingsAckSent() {
    this._settingsAckSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsAckSentInput() {
    return this._settingsAckSent;
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

  // settings_frame_sent - computed: false, optional: true, required: false
  private _settingsFrameSent?: number; 
  public get settingsFrameSent() {
    return this.getNumberAttribute('settings_frame_sent');
  }
  public set settingsFrameSent(value: number) {
    this._settingsFrameSent = value;
  }
  public resetSettingsFrameSent() {
    this._settingsFrameSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsFrameSentInput() {
    return this._settingsFrameSent;
  }

  // settings_timeout - computed: false, optional: true, required: false
  private _settingsTimeout?: number; 
  public get settingsTimeout() {
    return this.getNumberAttribute('settings_timeout');
  }
  public set settingsTimeout(value: number) {
    this._settingsTimeout = value;
  }
  public resetSettingsTimeout() {
    this._settingsTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsTimeoutInput() {
    return this._settingsTimeout;
  }

  // split_buff_fail - computed: false, optional: true, required: false
  private _splitBuffFail?: number; 
  public get splitBuffFail() {
    return this.getNumberAttribute('split_buff_fail');
  }
  public set splitBuffFail(value: number) {
    this._splitBuffFail = value;
  }
  public resetSplitBuffFail() {
    this._splitBuffFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitBuffFailInput() {
    return this._splitBuffFail;
  }

  // stream_closed - computed: false, optional: true, required: false
  private _streamClosed?: number; 
  public get streamClosed() {
    return this.getNumberAttribute('stream_closed');
  }
  public set streamClosed(value: number) {
    this._streamClosed = value;
  }
  public resetStreamClosed() {
    this._streamClosed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamClosedInput() {
    return this._streamClosed;
  }

  // stream_create - computed: false, optional: true, required: false
  private _streamCreate?: number; 
  public get streamCreate() {
    return this.getNumberAttribute('stream_create');
  }
  public set streamCreate(value: number) {
    this._streamCreate = value;
  }
  public resetStreamCreate() {
    this._streamCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamCreateInput() {
    return this._streamCreate;
  }

  // stream_free - computed: false, optional: true, required: false
  private _streamFree?: number; 
  public get streamFree() {
    return this.getNumberAttribute('stream_free');
  }
  public set streamFree(value: number) {
    this._streamFree = value;
  }
  public resetStreamFree() {
    this._streamFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamFreeInput() {
    return this._streamFree;
  }

  // streams_gt_max_concur_streams - computed: false, optional: true, required: false
  private _streamsGtMaxConcurStreams?: number; 
  public get streamsGtMaxConcurStreams() {
    return this.getNumberAttribute('streams_gt_max_concur_streams');
  }
  public set streamsGtMaxConcurStreams(value: number) {
    this._streamsGtMaxConcurStreams = value;
  }
  public resetStreamsGtMaxConcurStreams() {
    this._streamsGtMaxConcurStreams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsGtMaxConcurStreamsInput() {
    return this._streamsGtMaxConcurStreams;
  }

  // total_bytes_received - computed: false, optional: true, required: false
  private _totalBytesReceived?: number; 
  public get totalBytesReceived() {
    return this.getNumberAttribute('total_bytes_received');
  }
  public set totalBytesReceived(value: number) {
    this._totalBytesReceived = value;
  }
  public resetTotalBytesReceived() {
    this._totalBytesReceived = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalBytesReceivedInput() {
    return this._totalBytesReceived;
  }

  // total_bytes_sent - computed: false, optional: true, required: false
  private _totalBytesSent?: number; 
  public get totalBytesSent() {
    return this.getNumberAttribute('total_bytes_sent');
  }
  public set totalBytesSent(value: number) {
    this._totalBytesSent = value;
  }
  public resetTotalBytesSent() {
    this._totalBytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalBytesSentInput() {
    return this._totalBytesSent;
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

  // trailers_no_end_stream - computed: false, optional: true, required: false
  private _trailersNoEndStream?: number; 
  public get trailersNoEndStream() {
    return this.getNumberAttribute('trailers_no_end_stream');
  }
  public set trailersNoEndStream(value: number) {
    this._trailersNoEndStream = value;
  }
  public resetTrailersNoEndStream() {
    this._trailersNoEndStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trailersNoEndStreamInput() {
    return this._trailersNoEndStream;
  }

  // unknown_frame - computed: false, optional: true, required: false
  private _unknownFrame?: number; 
  public get unknownFrame() {
    return this.getNumberAttribute('unknown_frame');
  }
  public set unknownFrame(value: number) {
    this._unknownFrame = value;
  }
  public resetUnknownFrame() {
    this._unknownFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownFrameInput() {
    return this._unknownFrame;
  }

  // window_update_frame - computed: false, optional: true, required: false
  private _windowUpdateFrame?: number; 
  public get windowUpdateFrame() {
    return this.getNumberAttribute('window_update_frame');
  }
  public set windowUpdateFrame(value: number) {
    this._windowUpdateFrame = value;
  }
  public resetWindowUpdateFrame() {
    this._windowUpdateFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowUpdateFrameInput() {
    return this._windowUpdateFrame;
  }

  // window_update_frame_sent - computed: false, optional: true, required: false
  private _windowUpdateFrameSent?: number; 
  public get windowUpdateFrameSent() {
    return this.getNumberAttribute('window_update_frame_sent');
  }
  public set windowUpdateFrameSent(value: number) {
    this._windowUpdateFrameSent = value;
  }
  public resetWindowUpdateFrameSent() {
    this._windowUpdateFrameSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get windowUpdateFrameSentInput() {
    return this._windowUpdateFrameSent;
  }

  // wrong_stream_state - computed: false, optional: true, required: false
  private _wrongStreamState?: number; 
  public get wrongStreamState() {
    return this.getNumberAttribute('wrong_stream_state');
  }
  public set wrongStreamState(value: number) {
    this._wrongStreamState = value;
  }
  public resetWrongStreamState() {
    this._wrongStreamState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wrongStreamStateInput() {
    return this._wrongStreamState;
  }

  // zero_window_size_on_stream - computed: false, optional: true, required: false
  private _zeroWindowSizeOnStream?: number; 
  public get zeroWindowSizeOnStream() {
    return this.getNumberAttribute('zero_window_size_on_stream');
  }
  public set zeroWindowSizeOnStream(value: number) {
    this._zeroWindowSizeOnStream = value;
  }
  public resetZeroWindowSizeOnStream() {
    this._zeroWindowSizeOnStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zeroWindowSizeOnStreamInput() {
    return this._zeroWindowSizeOnStream;
  }
}

export class DataThunderSlbHttp2OperOperHttp2CpuListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbHttp2OperOperHttp2CpuListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbHttp2OperOperHttp2CpuListStructOutputReference {
    return new DataThunderSlbHttp2OperOperHttp2CpuListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbHttp2OperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#cpu_count DataThunderSlbHttp2Oper#cpu_count}
  */
  readonly cpuCount?: number;
  /**
  * http2_cpu_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#http2_cpu_list DataThunderSlbHttp2Oper#http2_cpu_list}
  */
  readonly http2CpuList?: DataThunderSlbHttp2OperOperHttp2CpuListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbHttp2OperOperToTerraform(struct?: DataThunderSlbHttp2OperOperOutputReference | DataThunderSlbHttp2OperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    http2_cpu_list: cdktf.listMapper(dataThunderSlbHttp2OperOperHttp2CpuListStructToTerraform, true)(struct!.http2CpuList),
  }
}


export function dataThunderSlbHttp2OperOperToHclTerraform(struct?: DataThunderSlbHttp2OperOperOutputReference | DataThunderSlbHttp2OperOper): any {
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
    http2_cpu_list: {
      value: cdktf.listMapperHcl(dataThunderSlbHttp2OperOperHttp2CpuListStructToHclTerraform, true)(struct!.http2CpuList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbHttp2OperOperHttp2CpuListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbHttp2OperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbHttp2OperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._http2CpuList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http2CpuList = this._http2CpuList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbHttp2OperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCount = undefined;
      this._http2CpuList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCount = value.cpuCount;
      this._http2CpuList.internalValue = value.http2CpuList;
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

  // http2_cpu_list - computed: false, optional: true, required: false
  private _http2CpuList = new DataThunderSlbHttp2OperOperHttp2CpuListStructList(this, "http2_cpu_list", false);
  public get http2CpuList() {
    return this._http2CpuList;
  }
  public putHttp2CpuList(value: DataThunderSlbHttp2OperOperHttp2CpuListStruct[] | cdktf.IResolvable) {
    this._http2CpuList.internalValue = value;
  }
  public resetHttp2CpuList() {
    this._http2CpuList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http2CpuListInput() {
    return this._http2CpuList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper thunder_slb_http2_oper}
*/
export class DataThunderSlbHttp2Oper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_http2_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbHttp2Oper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbHttp2Oper to import
  * @param importFromId The id of the existing DataThunderSlbHttp2Oper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbHttp2Oper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_http2_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http2_oper thunder_slb_http2_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbHttp2OperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbHttp2OperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_http2_oper',
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
  private _oper = new DataThunderSlbHttp2OperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbHttp2OperOper) {
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
      oper: dataThunderSlbHttp2OperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSlbHttp2OperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbHttp2OperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
