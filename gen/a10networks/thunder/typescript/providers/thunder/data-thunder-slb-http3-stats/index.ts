// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbHttp3StatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#id DataThunderSlbHttp3Stats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#stats DataThunderSlbHttp3Stats#stats}
  */
  readonly stats?: DataThunderSlbHttp3StatsStats;
}
export interface DataThunderSlbHttp3StatsStats {
  /**
  * Memory Allocation Failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#alloc_fail_total DataThunderSlbHttp3Stats#alloc_fail_total}
  */
  readonly allocFailTotal?: number;
  /**
  * Current HTTP/3 Client Connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_conn_curr DataThunderSlbHttp3Stats#client_conn_curr}
  */
  readonly clientConnCurr?: number;
  /**
  * Peak HTTP/3 Client Connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_conn_peak DataThunderSlbHttp3Stats#client_conn_peak}
  */
  readonly clientConnPeak?: number;
  /**
  * Total HTTP/3 Client Connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_conn_total DataThunderSlbHttp3Stats#client_conn_total}
  */
  readonly clientConnTotal?: number;
  /**
  * Bytes received in DATA frames on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_data_bytes_rcvd DataThunderSlbHttp3Stats#client_data_bytes_rcvd}
  */
  readonly clientDataBytesRcvd?: number;
  /**
  * Bytes sent in DATA frames on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_data_bytes_sent DataThunderSlbHttp3Stats#client_data_bytes_sent}
  */
  readonly clientDataBytesSent?: number;
  /**
  * DATA Frames passed to HTTP layer on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_data_frames_to_app DataThunderSlbHttp3Stats#client_data_frames_to_app}
  */
  readonly clientDataFramesToApp?: number;
  /**
  * CANCEL PUSH Frame received on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_frame_type_cancel_push_rcvd DataThunderSlbHttp3Stats#client_frame_type_cancel_push_rcvd}
  */
  readonly clientFrameTypeCancelPushRcvd?: number;
  /**
  * CANCEL PUSH Frame sent on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_frame_type_cancel_push_sent DataThunderSlbHttp3Stats#client_frame_type_cancel_push_sent}
  */
  readonly clientFrameTypeCancelPushSent?: number;
  /**
  * DATA Frame received on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_frame_type_data_rcvd DataThunderSlbHttp3Stats#client_frame_type_data_rcvd}
  */
  readonly clientFrameTypeDataRcvd?: number;
  /**
  * DATA Frame sent on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_frame_type_data_sent DataThunderSlbHttp3Stats#client_frame_type_data_sent}
  */
  readonly clientFrameTypeDataSent?: number;
  /**
  * GOAWAY Frame received on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_frame_type_goaway_rcvd DataThunderSlbHttp3Stats#client_frame_type_goaway_rcvd}
  */
  readonly clientFrameTypeGoawayRcvd?: number;
  /**
  * GOAWAY Frame sent on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_frame_type_goaway_sent DataThunderSlbHttp3Stats#client_frame_type_goaway_sent}
  */
  readonly clientFrameTypeGoawaySent?: number;
  /**
  * HEADERS Frame received on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_frame_type_headers_rcvd DataThunderSlbHttp3Stats#client_frame_type_headers_rcvd}
  */
  readonly clientFrameTypeHeadersRcvd?: number;
  /**
  * HEADERS Frame sent on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_frame_type_headers_sent DataThunderSlbHttp3Stats#client_frame_type_headers_sent}
  */
  readonly clientFrameTypeHeadersSent?: number;
  /**
  * MAX PUSH ID Frame received on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_frame_type_max_push_id_rcvd DataThunderSlbHttp3Stats#client_frame_type_max_push_id_rcvd}
  */
  readonly clientFrameTypeMaxPushIdRcvd?: number;
  /**
  * MAX PUSH ID Frame sent on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_frame_type_max_push_id_sent DataThunderSlbHttp3Stats#client_frame_type_max_push_id_sent}
  */
  readonly clientFrameTypeMaxPushIdSent?: number;
  /**
  * PUSH PROMISE Frame received on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_frame_type_push_promise_rcvd DataThunderSlbHttp3Stats#client_frame_type_push_promise_rcvd}
  */
  readonly clientFrameTypePushPromiseRcvd?: number;
  /**
  * PUSH PROMISE Frame sent on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_frame_type_push_promise_sent DataThunderSlbHttp3Stats#client_frame_type_push_promise_sent}
  */
  readonly clientFrameTypePushPromiseSent?: number;
  /**
  * SETTINGS Frame received on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_frame_type_settings_rcvd DataThunderSlbHttp3Stats#client_frame_type_settings_rcvd}
  */
  readonly clientFrameTypeSettingsRcvd?: number;
  /**
  * SETTINGS Frame sent on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_frame_type_settings_sent DataThunderSlbHttp3Stats#client_frame_type_settings_sent}
  */
  readonly clientFrameTypeSettingsSent?: number;
  /**
  * Unknown Frame received on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_frame_type_unknown_rcvd DataThunderSlbHttp3Stats#client_frame_type_unknown_rcvd}
  */
  readonly clientFrameTypeUnknownRcvd?: number;
  /**
  * Bytes received in HEADER frames on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_header_bytes_rcvd DataThunderSlbHttp3Stats#client_header_bytes_rcvd}
  */
  readonly clientHeaderBytesRcvd?: number;
  /**
  * Bytes sent in HEADER frames on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_header_bytes_sent DataThunderSlbHttp3Stats#client_header_bytes_sent}
  */
  readonly clientHeaderBytesSent?: number;
  /**
  * HEADER Frames passed to HTTP layer on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_header_frames_to_app DataThunderSlbHttp3Stats#client_header_frames_to_app}
  */
  readonly clientHeaderFramesToApp?: number;
  /**
  * Bytes received in HEADERS/DATA frame/stream heading on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_heading_bytes_rcvd DataThunderSlbHttp3Stats#client_heading_bytes_rcvd}
  */
  readonly clientHeadingBytesRcvd?: number;
  /**
  * Bytes sent in HEADERS/DATA frame/stream heading on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_heading_bytes_sent DataThunderSlbHttp3Stats#client_heading_bytes_sent}
  */
  readonly clientHeadingBytesSent?: number;
  /**
  * Bytes received in other frames (SETTINGS, GOAWAY, PUSH_PROMISE etc) on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_other_frame_bytes_rcvd DataThunderSlbHttp3Stats#client_other_frame_bytes_rcvd}
  */
  readonly clientOtherFrameBytesRcvd?: number;
  /**
  * Bytes sent in other frames (SETTINGS, GOAWAY, PUSH_PROMISE etc) on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_other_frame_bytes_sent DataThunderSlbHttp3Stats#client_other_frame_bytes_sent}
  */
  readonly clientOtherFrameBytesSent?: number;
  /**
  * Current Other Streams on client side (control, decoder, encoder)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_request_other_curr DataThunderSlbHttp3Stats#client_request_other_curr}
  */
  readonly clientRequestOtherCurr?: number;
  /**
  * Total Other Streams on client side (control, decoder, encoder)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_request_other_total DataThunderSlbHttp3Stats#client_request_other_total}
  */
  readonly clientRequestOtherTotal?: number;
  /**
  * Current Push Streams on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_request_push_curr DataThunderSlbHttp3Stats#client_request_push_curr}
  */
  readonly clientRequestPushCurr?: number;
  /**
  * Total Push Streams on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_request_push_total DataThunderSlbHttp3Stats#client_request_push_total}
  */
  readonly clientRequestPushTotal?: number;
  /**
  * Current Request Streams on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_request_streams_curr DataThunderSlbHttp3Stats#client_request_streams_curr}
  */
  readonly clientRequestStreamsCurr?: number;
  /**
  * Total Request Streams on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_request_streams_total DataThunderSlbHttp3Stats#client_request_streams_total}
  */
  readonly clientRequestStreamsTotal?: number;
  /**
  * Total Bytes received on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_total_bytes_rcvd DataThunderSlbHttp3Stats#client_total_bytes_rcvd}
  */
  readonly clientTotalBytesRcvd?: number;
  /**
  * Total Bytes sent on client side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#client_total_bytes_sent DataThunderSlbHttp3Stats#client_total_bytes_sent}
  */
  readonly clientTotalBytesSent?: number;
  /**
  * HTTP/3 Connection Allocation Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#conn_alloc_error DataThunderSlbHttp3Stats#conn_alloc_error}
  */
  readonly connAllocError?: number;
  /**
  * Fatal Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#fatal DataThunderSlbHttp3Stats#fatal}
  */
  readonly fatal?: number;
  /**
  * H3 Closed Critical Stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#h3_closed_critical_stream DataThunderSlbHttp3Stats#h3_closed_critical_stream}
  */
  readonly h3ClosedCriticalStream?: number;
  /**
  * H3 Frame Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#h3_frame_error DataThunderSlbHttp3Stats#h3_frame_error}
  */
  readonly h3FrameError?: number;
  /**
  * H3 Frame Unexpected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#h3_frame_unexpected DataThunderSlbHttp3Stats#h3_frame_unexpected}
  */
  readonly h3FrameUnexpected?: number;
  /**
  * H3 General Protocol Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#h3_general_protocol_error DataThunderSlbHttp3Stats#h3_general_protocol_error}
  */
  readonly h3GeneralProtocolError?: number;
  /**
  * H3 Id Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#h3_id_error DataThunderSlbHttp3Stats#h3_id_error}
  */
  readonly h3IdError?: number;
  /**
  * H3 Internal Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#h3_internal_error DataThunderSlbHttp3Stats#h3_internal_error}
  */
  readonly h3InternalError?: number;
  /**
  * H3 Missing Settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#h3_missing_settings DataThunderSlbHttp3Stats#h3_missing_settings}
  */
  readonly h3MissingSettings?: number;
  /**
  * H3 Settings Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#h3_settings_error DataThunderSlbHttp3Stats#h3_settings_error}
  */
  readonly h3SettingsError?: number;
  /**
  * H3 Stream Creation Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#h3_stream_creation_error DataThunderSlbHttp3Stats#h3_stream_creation_error}
  */
  readonly h3StreamCreationError?: number;
  /**
  * HTTP3 Rejected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#http3_rejected DataThunderSlbHttp3Stats#http3_rejected}
  */
  readonly http3Rejected?: number;
  /**
  * Ignore Push Promise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#ignore_push_promise DataThunderSlbHttp3Stats#ignore_push_promise}
  */
  readonly ignorePushPromise?: number;
  /**
  * Ignore Stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#ignore_stream DataThunderSlbHttp3Stats#ignore_stream}
  */
  readonly ignoreStream?: number;
  /**
  * Invalid Argument
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#invalid_argument DataThunderSlbHttp3Stats#invalid_argument}
  */
  readonly invalidArgument?: number;
  /**
  * Invalid State
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#invalid_state DataThunderSlbHttp3Stats#invalid_state}
  */
  readonly invalidState?: number;
  /**
  * Malformed Http Header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#malformed_http_header DataThunderSlbHttp3Stats#malformed_http_header}
  */
  readonly malformedHttpHeader?: number;
  /**
  * Malformed Http Messaging
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#malformed_http_messaging DataThunderSlbHttp3Stats#malformed_http_messaging}
  */
  readonly malformedHttpMessaging?: number;
  /**
  * Push Id Blocked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#push_id_blocked DataThunderSlbHttp3Stats#push_id_blocked}
  */
  readonly pushIdBlocked?: number;
  /**
  * Qpack Decoder Stream Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#qpack_decoder_stream_error DataThunderSlbHttp3Stats#qpack_decoder_stream_error}
  */
  readonly qpackDecoderStreamError?: number;
  /**
  * Qpack Decompression Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#qpack_decompression_failed DataThunderSlbHttp3Stats#qpack_decompression_failed}
  */
  readonly qpackDecompressionFailed?: number;
  /**
  * Qpack Encoder Stream Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#qpack_encoder_stream_error DataThunderSlbHttp3Stats#qpack_encoder_stream_error}
  */
  readonly qpackEncoderStreamError?: number;
  /**
  * Qpack Fatal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#qpack_fatal DataThunderSlbHttp3Stats#qpack_fatal}
  */
  readonly qpackFatal?: number;
  /**
  * Qpack Header Too Large
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#qpack_header_too_large DataThunderSlbHttp3Stats#qpack_header_too_large}
  */
  readonly qpackHeaderTooLarge?: number;
  /**
  * Remove Http Header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#remove_http_header DataThunderSlbHttp3Stats#remove_http_header}
  */
  readonly removeHttpHeader?: number;
  /**
  * Current HTTP/3 Server Connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_conn_curr DataThunderSlbHttp3Stats#server_conn_curr}
  */
  readonly serverConnCurr?: number;
  /**
  * Peak HTTP/3 Server Connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_conn_peak DataThunderSlbHttp3Stats#server_conn_peak}
  */
  readonly serverConnPeak?: number;
  /**
  * Total HTTP/3 Server Connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_conn_total DataThunderSlbHttp3Stats#server_conn_total}
  */
  readonly serverConnTotal?: number;
  /**
  * Bytes received in DATA frames on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_data_bytes_rcvd DataThunderSlbHttp3Stats#server_data_bytes_rcvd}
  */
  readonly serverDataBytesRcvd?: number;
  /**
  * Bytes sent in DATA frames on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_data_bytes_sent DataThunderSlbHttp3Stats#server_data_bytes_sent}
  */
  readonly serverDataBytesSent?: number;
  /**
  * DATA Frames passed to HTTP layer on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_data_frames_to_app DataThunderSlbHttp3Stats#server_data_frames_to_app}
  */
  readonly serverDataFramesToApp?: number;
  /**
  * CANCEL PUSH Frame received on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_frame_type_cancel_push_rcvd DataThunderSlbHttp3Stats#server_frame_type_cancel_push_rcvd}
  */
  readonly serverFrameTypeCancelPushRcvd?: number;
  /**
  * CANCEL PUSH Frame sent on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_frame_type_cancel_push_sent DataThunderSlbHttp3Stats#server_frame_type_cancel_push_sent}
  */
  readonly serverFrameTypeCancelPushSent?: number;
  /**
  * DATA Frame received on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_frame_type_data_rcvd DataThunderSlbHttp3Stats#server_frame_type_data_rcvd}
  */
  readonly serverFrameTypeDataRcvd?: number;
  /**
  * DATA Frame sent on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_frame_type_data_sent DataThunderSlbHttp3Stats#server_frame_type_data_sent}
  */
  readonly serverFrameTypeDataSent?: number;
  /**
  * GOAWAY Frame received on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_frame_type_goaway_rcvd DataThunderSlbHttp3Stats#server_frame_type_goaway_rcvd}
  */
  readonly serverFrameTypeGoawayRcvd?: number;
  /**
  * GOAWAY Frame sent on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_frame_type_goaway_sent DataThunderSlbHttp3Stats#server_frame_type_goaway_sent}
  */
  readonly serverFrameTypeGoawaySent?: number;
  /**
  * HEADERS Frame received on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_frame_type_headers_rcvd DataThunderSlbHttp3Stats#server_frame_type_headers_rcvd}
  */
  readonly serverFrameTypeHeadersRcvd?: number;
  /**
  * HEADERS Frame sent on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_frame_type_headers_sent DataThunderSlbHttp3Stats#server_frame_type_headers_sent}
  */
  readonly serverFrameTypeHeadersSent?: number;
  /**
  * MAX PUSH ID Frame received on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_frame_type_max_push_id_rcvd DataThunderSlbHttp3Stats#server_frame_type_max_push_id_rcvd}
  */
  readonly serverFrameTypeMaxPushIdRcvd?: number;
  /**
  * MAX PUSH ID Frame sent on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_frame_type_max_push_id_sent DataThunderSlbHttp3Stats#server_frame_type_max_push_id_sent}
  */
  readonly serverFrameTypeMaxPushIdSent?: number;
  /**
  * PUSH PROMISE Frame received on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_frame_type_push_promise_rcvd DataThunderSlbHttp3Stats#server_frame_type_push_promise_rcvd}
  */
  readonly serverFrameTypePushPromiseRcvd?: number;
  /**
  * PUSH PROMISE Frame sent on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_frame_type_push_promise_sent DataThunderSlbHttp3Stats#server_frame_type_push_promise_sent}
  */
  readonly serverFrameTypePushPromiseSent?: number;
  /**
  * SETTINGS Frame received on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_frame_type_settings_rcvd DataThunderSlbHttp3Stats#server_frame_type_settings_rcvd}
  */
  readonly serverFrameTypeSettingsRcvd?: number;
  /**
  * SETTINGS Frame sent on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_frame_type_settings_sent DataThunderSlbHttp3Stats#server_frame_type_settings_sent}
  */
  readonly serverFrameTypeSettingsSent?: number;
  /**
  * Unknown Frame received on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_frame_type_unknown_rcvd DataThunderSlbHttp3Stats#server_frame_type_unknown_rcvd}
  */
  readonly serverFrameTypeUnknownRcvd?: number;
  /**
  * Bytes received in HEADER frames on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_header_bytes_rcvd DataThunderSlbHttp3Stats#server_header_bytes_rcvd}
  */
  readonly serverHeaderBytesRcvd?: number;
  /**
  * Bytes sent in HEADER frames on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_header_bytes_sent DataThunderSlbHttp3Stats#server_header_bytes_sent}
  */
  readonly serverHeaderBytesSent?: number;
  /**
  * HEADER Frames passed to HTTP layer on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_header_frames_to_app DataThunderSlbHttp3Stats#server_header_frames_to_app}
  */
  readonly serverHeaderFramesToApp?: number;
  /**
  * Bytes received in HEADERS/DATA frame/stream heading on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_heading_bytes_rcvd DataThunderSlbHttp3Stats#server_heading_bytes_rcvd}
  */
  readonly serverHeadingBytesRcvd?: number;
  /**
  * Bytes sent in HEADERS/DATA frame/stream heading on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_heading_bytes_sent DataThunderSlbHttp3Stats#server_heading_bytes_sent}
  */
  readonly serverHeadingBytesSent?: number;
  /**
  * Bytes received in other frames (SETTINGS, GOAWAY, PUSH_PROMISE etc) on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_other_frame_bytes_rcvd DataThunderSlbHttp3Stats#server_other_frame_bytes_rcvd}
  */
  readonly serverOtherFrameBytesRcvd?: number;
  /**
  * Bytes sent in other frames (SETTINGS, GOAWAY, PUSH_PROMISE etc) on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_other_frame_bytes_sent DataThunderSlbHttp3Stats#server_other_frame_bytes_sent}
  */
  readonly serverOtherFrameBytesSent?: number;
  /**
  * urrent Other Streams on server side (control, decoder, encoder)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_request_other_curr DataThunderSlbHttp3Stats#server_request_other_curr}
  */
  readonly serverRequestOtherCurr?: number;
  /**
  * Total Other Streams on server side (control, decoder, encoder)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_request_other_total DataThunderSlbHttp3Stats#server_request_other_total}
  */
  readonly serverRequestOtherTotal?: number;
  /**
  * Current Push Streams on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_request_push_curr DataThunderSlbHttp3Stats#server_request_push_curr}
  */
  readonly serverRequestPushCurr?: number;
  /**
  * Total Push Streams on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_request_push_total DataThunderSlbHttp3Stats#server_request_push_total}
  */
  readonly serverRequestPushTotal?: number;
  /**
  * Current Request Streams on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_request_streams_curr DataThunderSlbHttp3Stats#server_request_streams_curr}
  */
  readonly serverRequestStreamsCurr?: number;
  /**
  * Total Request Streams on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_request_streams_total DataThunderSlbHttp3Stats#server_request_streams_total}
  */
  readonly serverRequestStreamsTotal?: number;
  /**
  * Total Bytes received on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_total_bytes_rcvd DataThunderSlbHttp3Stats#server_total_bytes_rcvd}
  */
  readonly serverTotalBytesRcvd?: number;
  /**
  * Total Bytes sent on server side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#server_total_bytes_sent DataThunderSlbHttp3Stats#server_total_bytes_sent}
  */
  readonly serverTotalBytesSent?: number;
  /**
  * Stream In Use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#stream_in_use DataThunderSlbHttp3Stats#stream_in_use}
  */
  readonly streamInUse?: number;
  /**
  * Stream Not Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#stream_not_found DataThunderSlbHttp3Stats#stream_not_found}
  */
  readonly streamNotFound?: number;
  /**
  * Too Late
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#too_late DataThunderSlbHttp3Stats#too_late}
  */
  readonly tooLate?: number;
  /**
  * Wouldblock
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#wouldblock DataThunderSlbHttp3Stats#wouldblock}
  */
  readonly wouldblock?: number;
}

export function dataThunderSlbHttp3StatsStatsToTerraform(struct?: DataThunderSlbHttp3StatsStatsOutputReference | DataThunderSlbHttp3StatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alloc_fail_total: cdktf.numberToTerraform(struct!.allocFailTotal),
    client_conn_curr: cdktf.numberToTerraform(struct!.clientConnCurr),
    client_conn_peak: cdktf.numberToTerraform(struct!.clientConnPeak),
    client_conn_total: cdktf.numberToTerraform(struct!.clientConnTotal),
    client_data_bytes_rcvd: cdktf.numberToTerraform(struct!.clientDataBytesRcvd),
    client_data_bytes_sent: cdktf.numberToTerraform(struct!.clientDataBytesSent),
    client_data_frames_to_app: cdktf.numberToTerraform(struct!.clientDataFramesToApp),
    client_frame_type_cancel_push_rcvd: cdktf.numberToTerraform(struct!.clientFrameTypeCancelPushRcvd),
    client_frame_type_cancel_push_sent: cdktf.numberToTerraform(struct!.clientFrameTypeCancelPushSent),
    client_frame_type_data_rcvd: cdktf.numberToTerraform(struct!.clientFrameTypeDataRcvd),
    client_frame_type_data_sent: cdktf.numberToTerraform(struct!.clientFrameTypeDataSent),
    client_frame_type_goaway_rcvd: cdktf.numberToTerraform(struct!.clientFrameTypeGoawayRcvd),
    client_frame_type_goaway_sent: cdktf.numberToTerraform(struct!.clientFrameTypeGoawaySent),
    client_frame_type_headers_rcvd: cdktf.numberToTerraform(struct!.clientFrameTypeHeadersRcvd),
    client_frame_type_headers_sent: cdktf.numberToTerraform(struct!.clientFrameTypeHeadersSent),
    client_frame_type_max_push_id_rcvd: cdktf.numberToTerraform(struct!.clientFrameTypeMaxPushIdRcvd),
    client_frame_type_max_push_id_sent: cdktf.numberToTerraform(struct!.clientFrameTypeMaxPushIdSent),
    client_frame_type_push_promise_rcvd: cdktf.numberToTerraform(struct!.clientFrameTypePushPromiseRcvd),
    client_frame_type_push_promise_sent: cdktf.numberToTerraform(struct!.clientFrameTypePushPromiseSent),
    client_frame_type_settings_rcvd: cdktf.numberToTerraform(struct!.clientFrameTypeSettingsRcvd),
    client_frame_type_settings_sent: cdktf.numberToTerraform(struct!.clientFrameTypeSettingsSent),
    client_frame_type_unknown_rcvd: cdktf.numberToTerraform(struct!.clientFrameTypeUnknownRcvd),
    client_header_bytes_rcvd: cdktf.numberToTerraform(struct!.clientHeaderBytesRcvd),
    client_header_bytes_sent: cdktf.numberToTerraform(struct!.clientHeaderBytesSent),
    client_header_frames_to_app: cdktf.numberToTerraform(struct!.clientHeaderFramesToApp),
    client_heading_bytes_rcvd: cdktf.numberToTerraform(struct!.clientHeadingBytesRcvd),
    client_heading_bytes_sent: cdktf.numberToTerraform(struct!.clientHeadingBytesSent),
    client_other_frame_bytes_rcvd: cdktf.numberToTerraform(struct!.clientOtherFrameBytesRcvd),
    client_other_frame_bytes_sent: cdktf.numberToTerraform(struct!.clientOtherFrameBytesSent),
    client_request_other_curr: cdktf.numberToTerraform(struct!.clientRequestOtherCurr),
    client_request_other_total: cdktf.numberToTerraform(struct!.clientRequestOtherTotal),
    client_request_push_curr: cdktf.numberToTerraform(struct!.clientRequestPushCurr),
    client_request_push_total: cdktf.numberToTerraform(struct!.clientRequestPushTotal),
    client_request_streams_curr: cdktf.numberToTerraform(struct!.clientRequestStreamsCurr),
    client_request_streams_total: cdktf.numberToTerraform(struct!.clientRequestStreamsTotal),
    client_total_bytes_rcvd: cdktf.numberToTerraform(struct!.clientTotalBytesRcvd),
    client_total_bytes_sent: cdktf.numberToTerraform(struct!.clientTotalBytesSent),
    conn_alloc_error: cdktf.numberToTerraform(struct!.connAllocError),
    fatal: cdktf.numberToTerraform(struct!.fatal),
    h3_closed_critical_stream: cdktf.numberToTerraform(struct!.h3ClosedCriticalStream),
    h3_frame_error: cdktf.numberToTerraform(struct!.h3FrameError),
    h3_frame_unexpected: cdktf.numberToTerraform(struct!.h3FrameUnexpected),
    h3_general_protocol_error: cdktf.numberToTerraform(struct!.h3GeneralProtocolError),
    h3_id_error: cdktf.numberToTerraform(struct!.h3IdError),
    h3_internal_error: cdktf.numberToTerraform(struct!.h3InternalError),
    h3_missing_settings: cdktf.numberToTerraform(struct!.h3MissingSettings),
    h3_settings_error: cdktf.numberToTerraform(struct!.h3SettingsError),
    h3_stream_creation_error: cdktf.numberToTerraform(struct!.h3StreamCreationError),
    http3_rejected: cdktf.numberToTerraform(struct!.http3Rejected),
    ignore_push_promise: cdktf.numberToTerraform(struct!.ignorePushPromise),
    ignore_stream: cdktf.numberToTerraform(struct!.ignoreStream),
    invalid_argument: cdktf.numberToTerraform(struct!.invalidArgument),
    invalid_state: cdktf.numberToTerraform(struct!.invalidState),
    malformed_http_header: cdktf.numberToTerraform(struct!.malformedHttpHeader),
    malformed_http_messaging: cdktf.numberToTerraform(struct!.malformedHttpMessaging),
    push_id_blocked: cdktf.numberToTerraform(struct!.pushIdBlocked),
    qpack_decoder_stream_error: cdktf.numberToTerraform(struct!.qpackDecoderStreamError),
    qpack_decompression_failed: cdktf.numberToTerraform(struct!.qpackDecompressionFailed),
    qpack_encoder_stream_error: cdktf.numberToTerraform(struct!.qpackEncoderStreamError),
    qpack_fatal: cdktf.numberToTerraform(struct!.qpackFatal),
    qpack_header_too_large: cdktf.numberToTerraform(struct!.qpackHeaderTooLarge),
    remove_http_header: cdktf.numberToTerraform(struct!.removeHttpHeader),
    server_conn_curr: cdktf.numberToTerraform(struct!.serverConnCurr),
    server_conn_peak: cdktf.numberToTerraform(struct!.serverConnPeak),
    server_conn_total: cdktf.numberToTerraform(struct!.serverConnTotal),
    server_data_bytes_rcvd: cdktf.numberToTerraform(struct!.serverDataBytesRcvd),
    server_data_bytes_sent: cdktf.numberToTerraform(struct!.serverDataBytesSent),
    server_data_frames_to_app: cdktf.numberToTerraform(struct!.serverDataFramesToApp),
    server_frame_type_cancel_push_rcvd: cdktf.numberToTerraform(struct!.serverFrameTypeCancelPushRcvd),
    server_frame_type_cancel_push_sent: cdktf.numberToTerraform(struct!.serverFrameTypeCancelPushSent),
    server_frame_type_data_rcvd: cdktf.numberToTerraform(struct!.serverFrameTypeDataRcvd),
    server_frame_type_data_sent: cdktf.numberToTerraform(struct!.serverFrameTypeDataSent),
    server_frame_type_goaway_rcvd: cdktf.numberToTerraform(struct!.serverFrameTypeGoawayRcvd),
    server_frame_type_goaway_sent: cdktf.numberToTerraform(struct!.serverFrameTypeGoawaySent),
    server_frame_type_headers_rcvd: cdktf.numberToTerraform(struct!.serverFrameTypeHeadersRcvd),
    server_frame_type_headers_sent: cdktf.numberToTerraform(struct!.serverFrameTypeHeadersSent),
    server_frame_type_max_push_id_rcvd: cdktf.numberToTerraform(struct!.serverFrameTypeMaxPushIdRcvd),
    server_frame_type_max_push_id_sent: cdktf.numberToTerraform(struct!.serverFrameTypeMaxPushIdSent),
    server_frame_type_push_promise_rcvd: cdktf.numberToTerraform(struct!.serverFrameTypePushPromiseRcvd),
    server_frame_type_push_promise_sent: cdktf.numberToTerraform(struct!.serverFrameTypePushPromiseSent),
    server_frame_type_settings_rcvd: cdktf.numberToTerraform(struct!.serverFrameTypeSettingsRcvd),
    server_frame_type_settings_sent: cdktf.numberToTerraform(struct!.serverFrameTypeSettingsSent),
    server_frame_type_unknown_rcvd: cdktf.numberToTerraform(struct!.serverFrameTypeUnknownRcvd),
    server_header_bytes_rcvd: cdktf.numberToTerraform(struct!.serverHeaderBytesRcvd),
    server_header_bytes_sent: cdktf.numberToTerraform(struct!.serverHeaderBytesSent),
    server_header_frames_to_app: cdktf.numberToTerraform(struct!.serverHeaderFramesToApp),
    server_heading_bytes_rcvd: cdktf.numberToTerraform(struct!.serverHeadingBytesRcvd),
    server_heading_bytes_sent: cdktf.numberToTerraform(struct!.serverHeadingBytesSent),
    server_other_frame_bytes_rcvd: cdktf.numberToTerraform(struct!.serverOtherFrameBytesRcvd),
    server_other_frame_bytes_sent: cdktf.numberToTerraform(struct!.serverOtherFrameBytesSent),
    server_request_other_curr: cdktf.numberToTerraform(struct!.serverRequestOtherCurr),
    server_request_other_total: cdktf.numberToTerraform(struct!.serverRequestOtherTotal),
    server_request_push_curr: cdktf.numberToTerraform(struct!.serverRequestPushCurr),
    server_request_push_total: cdktf.numberToTerraform(struct!.serverRequestPushTotal),
    server_request_streams_curr: cdktf.numberToTerraform(struct!.serverRequestStreamsCurr),
    server_request_streams_total: cdktf.numberToTerraform(struct!.serverRequestStreamsTotal),
    server_total_bytes_rcvd: cdktf.numberToTerraform(struct!.serverTotalBytesRcvd),
    server_total_bytes_sent: cdktf.numberToTerraform(struct!.serverTotalBytesSent),
    stream_in_use: cdktf.numberToTerraform(struct!.streamInUse),
    stream_not_found: cdktf.numberToTerraform(struct!.streamNotFound),
    too_late: cdktf.numberToTerraform(struct!.tooLate),
    wouldblock: cdktf.numberToTerraform(struct!.wouldblock),
  }
}


export function dataThunderSlbHttp3StatsStatsToHclTerraform(struct?: DataThunderSlbHttp3StatsStatsOutputReference | DataThunderSlbHttp3StatsStats): any {
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
    client_conn_curr: {
      value: cdktf.numberToHclTerraform(struct!.clientConnCurr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_conn_peak: {
      value: cdktf.numberToHclTerraform(struct!.clientConnPeak),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_conn_total: {
      value: cdktf.numberToHclTerraform(struct!.clientConnTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_data_bytes_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.clientDataBytesRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_data_bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.clientDataBytesSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_data_frames_to_app: {
      value: cdktf.numberToHclTerraform(struct!.clientDataFramesToApp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_frame_type_cancel_push_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.clientFrameTypeCancelPushRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_frame_type_cancel_push_sent: {
      value: cdktf.numberToHclTerraform(struct!.clientFrameTypeCancelPushSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_frame_type_data_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.clientFrameTypeDataRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_frame_type_data_sent: {
      value: cdktf.numberToHclTerraform(struct!.clientFrameTypeDataSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_frame_type_goaway_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.clientFrameTypeGoawayRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_frame_type_goaway_sent: {
      value: cdktf.numberToHclTerraform(struct!.clientFrameTypeGoawaySent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_frame_type_headers_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.clientFrameTypeHeadersRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_frame_type_headers_sent: {
      value: cdktf.numberToHclTerraform(struct!.clientFrameTypeHeadersSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_frame_type_max_push_id_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.clientFrameTypeMaxPushIdRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_frame_type_max_push_id_sent: {
      value: cdktf.numberToHclTerraform(struct!.clientFrameTypeMaxPushIdSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_frame_type_push_promise_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.clientFrameTypePushPromiseRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_frame_type_push_promise_sent: {
      value: cdktf.numberToHclTerraform(struct!.clientFrameTypePushPromiseSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_frame_type_settings_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.clientFrameTypeSettingsRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_frame_type_settings_sent: {
      value: cdktf.numberToHclTerraform(struct!.clientFrameTypeSettingsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_frame_type_unknown_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.clientFrameTypeUnknownRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_header_bytes_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.clientHeaderBytesRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_header_bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.clientHeaderBytesSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_header_frames_to_app: {
      value: cdktf.numberToHclTerraform(struct!.clientHeaderFramesToApp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_heading_bytes_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.clientHeadingBytesRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_heading_bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.clientHeadingBytesSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_other_frame_bytes_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.clientOtherFrameBytesRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_other_frame_bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.clientOtherFrameBytesSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_request_other_curr: {
      value: cdktf.numberToHclTerraform(struct!.clientRequestOtherCurr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_request_other_total: {
      value: cdktf.numberToHclTerraform(struct!.clientRequestOtherTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_request_push_curr: {
      value: cdktf.numberToHclTerraform(struct!.clientRequestPushCurr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_request_push_total: {
      value: cdktf.numberToHclTerraform(struct!.clientRequestPushTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_request_streams_curr: {
      value: cdktf.numberToHclTerraform(struct!.clientRequestStreamsCurr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_request_streams_total: {
      value: cdktf.numberToHclTerraform(struct!.clientRequestStreamsTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_total_bytes_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.clientTotalBytesRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_total_bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.clientTotalBytesSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_alloc_error: {
      value: cdktf.numberToHclTerraform(struct!.connAllocError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fatal: {
      value: cdktf.numberToHclTerraform(struct!.fatal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    h3_closed_critical_stream: {
      value: cdktf.numberToHclTerraform(struct!.h3ClosedCriticalStream),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    h3_frame_error: {
      value: cdktf.numberToHclTerraform(struct!.h3FrameError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    h3_frame_unexpected: {
      value: cdktf.numberToHclTerraform(struct!.h3FrameUnexpected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    h3_general_protocol_error: {
      value: cdktf.numberToHclTerraform(struct!.h3GeneralProtocolError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    h3_id_error: {
      value: cdktf.numberToHclTerraform(struct!.h3IdError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    h3_internal_error: {
      value: cdktf.numberToHclTerraform(struct!.h3InternalError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    h3_missing_settings: {
      value: cdktf.numberToHclTerraform(struct!.h3MissingSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    h3_settings_error: {
      value: cdktf.numberToHclTerraform(struct!.h3SettingsError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    h3_stream_creation_error: {
      value: cdktf.numberToHclTerraform(struct!.h3StreamCreationError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http3_rejected: {
      value: cdktf.numberToHclTerraform(struct!.http3Rejected),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_push_promise: {
      value: cdktf.numberToHclTerraform(struct!.ignorePushPromise),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_stream: {
      value: cdktf.numberToHclTerraform(struct!.ignoreStream),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_argument: {
      value: cdktf.numberToHclTerraform(struct!.invalidArgument),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_state: {
      value: cdktf.numberToHclTerraform(struct!.invalidState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malformed_http_header: {
      value: cdktf.numberToHclTerraform(struct!.malformedHttpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    malformed_http_messaging: {
      value: cdktf.numberToHclTerraform(struct!.malformedHttpMessaging),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    push_id_blocked: {
      value: cdktf.numberToHclTerraform(struct!.pushIdBlocked),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    qpack_decoder_stream_error: {
      value: cdktf.numberToHclTerraform(struct!.qpackDecoderStreamError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    qpack_decompression_failed: {
      value: cdktf.numberToHclTerraform(struct!.qpackDecompressionFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    qpack_encoder_stream_error: {
      value: cdktf.numberToHclTerraform(struct!.qpackEncoderStreamError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    qpack_fatal: {
      value: cdktf.numberToHclTerraform(struct!.qpackFatal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    qpack_header_too_large: {
      value: cdktf.numberToHclTerraform(struct!.qpackHeaderTooLarge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remove_http_header: {
      value: cdktf.numberToHclTerraform(struct!.removeHttpHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_conn_curr: {
      value: cdktf.numberToHclTerraform(struct!.serverConnCurr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_conn_peak: {
      value: cdktf.numberToHclTerraform(struct!.serverConnPeak),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_conn_total: {
      value: cdktf.numberToHclTerraform(struct!.serverConnTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_data_bytes_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.serverDataBytesRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_data_bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.serverDataBytesSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_data_frames_to_app: {
      value: cdktf.numberToHclTerraform(struct!.serverDataFramesToApp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_frame_type_cancel_push_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.serverFrameTypeCancelPushRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_frame_type_cancel_push_sent: {
      value: cdktf.numberToHclTerraform(struct!.serverFrameTypeCancelPushSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_frame_type_data_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.serverFrameTypeDataRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_frame_type_data_sent: {
      value: cdktf.numberToHclTerraform(struct!.serverFrameTypeDataSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_frame_type_goaway_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.serverFrameTypeGoawayRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_frame_type_goaway_sent: {
      value: cdktf.numberToHclTerraform(struct!.serverFrameTypeGoawaySent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_frame_type_headers_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.serverFrameTypeHeadersRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_frame_type_headers_sent: {
      value: cdktf.numberToHclTerraform(struct!.serverFrameTypeHeadersSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_frame_type_max_push_id_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.serverFrameTypeMaxPushIdRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_frame_type_max_push_id_sent: {
      value: cdktf.numberToHclTerraform(struct!.serverFrameTypeMaxPushIdSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_frame_type_push_promise_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.serverFrameTypePushPromiseRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_frame_type_push_promise_sent: {
      value: cdktf.numberToHclTerraform(struct!.serverFrameTypePushPromiseSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_frame_type_settings_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.serverFrameTypeSettingsRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_frame_type_settings_sent: {
      value: cdktf.numberToHclTerraform(struct!.serverFrameTypeSettingsSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_frame_type_unknown_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.serverFrameTypeUnknownRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_header_bytes_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.serverHeaderBytesRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_header_bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.serverHeaderBytesSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_header_frames_to_app: {
      value: cdktf.numberToHclTerraform(struct!.serverHeaderFramesToApp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_heading_bytes_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.serverHeadingBytesRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_heading_bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.serverHeadingBytesSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_other_frame_bytes_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.serverOtherFrameBytesRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_other_frame_bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.serverOtherFrameBytesSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_request_other_curr: {
      value: cdktf.numberToHclTerraform(struct!.serverRequestOtherCurr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_request_other_total: {
      value: cdktf.numberToHclTerraform(struct!.serverRequestOtherTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_request_push_curr: {
      value: cdktf.numberToHclTerraform(struct!.serverRequestPushCurr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_request_push_total: {
      value: cdktf.numberToHclTerraform(struct!.serverRequestPushTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_request_streams_curr: {
      value: cdktf.numberToHclTerraform(struct!.serverRequestStreamsCurr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_request_streams_total: {
      value: cdktf.numberToHclTerraform(struct!.serverRequestStreamsTotal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_total_bytes_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.serverTotalBytesRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_total_bytes_sent: {
      value: cdktf.numberToHclTerraform(struct!.serverTotalBytesSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stream_in_use: {
      value: cdktf.numberToHclTerraform(struct!.streamInUse),
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
    too_late: {
      value: cdktf.numberToHclTerraform(struct!.tooLate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wouldblock: {
      value: cdktf.numberToHclTerraform(struct!.wouldblock),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbHttp3StatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbHttp3StatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocFailTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocFailTotal = this._allocFailTotal;
    }
    if (this._clientConnCurr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientConnCurr = this._clientConnCurr;
    }
    if (this._clientConnPeak !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientConnPeak = this._clientConnPeak;
    }
    if (this._clientConnTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientConnTotal = this._clientConnTotal;
    }
    if (this._clientDataBytesRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientDataBytesRcvd = this._clientDataBytesRcvd;
    }
    if (this._clientDataBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientDataBytesSent = this._clientDataBytesSent;
    }
    if (this._clientDataFramesToApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientDataFramesToApp = this._clientDataFramesToApp;
    }
    if (this._clientFrameTypeCancelPushRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientFrameTypeCancelPushRcvd = this._clientFrameTypeCancelPushRcvd;
    }
    if (this._clientFrameTypeCancelPushSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientFrameTypeCancelPushSent = this._clientFrameTypeCancelPushSent;
    }
    if (this._clientFrameTypeDataRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientFrameTypeDataRcvd = this._clientFrameTypeDataRcvd;
    }
    if (this._clientFrameTypeDataSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientFrameTypeDataSent = this._clientFrameTypeDataSent;
    }
    if (this._clientFrameTypeGoawayRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientFrameTypeGoawayRcvd = this._clientFrameTypeGoawayRcvd;
    }
    if (this._clientFrameTypeGoawaySent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientFrameTypeGoawaySent = this._clientFrameTypeGoawaySent;
    }
    if (this._clientFrameTypeHeadersRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientFrameTypeHeadersRcvd = this._clientFrameTypeHeadersRcvd;
    }
    if (this._clientFrameTypeHeadersSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientFrameTypeHeadersSent = this._clientFrameTypeHeadersSent;
    }
    if (this._clientFrameTypeMaxPushIdRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientFrameTypeMaxPushIdRcvd = this._clientFrameTypeMaxPushIdRcvd;
    }
    if (this._clientFrameTypeMaxPushIdSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientFrameTypeMaxPushIdSent = this._clientFrameTypeMaxPushIdSent;
    }
    if (this._clientFrameTypePushPromiseRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientFrameTypePushPromiseRcvd = this._clientFrameTypePushPromiseRcvd;
    }
    if (this._clientFrameTypePushPromiseSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientFrameTypePushPromiseSent = this._clientFrameTypePushPromiseSent;
    }
    if (this._clientFrameTypeSettingsRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientFrameTypeSettingsRcvd = this._clientFrameTypeSettingsRcvd;
    }
    if (this._clientFrameTypeSettingsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientFrameTypeSettingsSent = this._clientFrameTypeSettingsSent;
    }
    if (this._clientFrameTypeUnknownRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientFrameTypeUnknownRcvd = this._clientFrameTypeUnknownRcvd;
    }
    if (this._clientHeaderBytesRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientHeaderBytesRcvd = this._clientHeaderBytesRcvd;
    }
    if (this._clientHeaderBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientHeaderBytesSent = this._clientHeaderBytesSent;
    }
    if (this._clientHeaderFramesToApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientHeaderFramesToApp = this._clientHeaderFramesToApp;
    }
    if (this._clientHeadingBytesRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientHeadingBytesRcvd = this._clientHeadingBytesRcvd;
    }
    if (this._clientHeadingBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientHeadingBytesSent = this._clientHeadingBytesSent;
    }
    if (this._clientOtherFrameBytesRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientOtherFrameBytesRcvd = this._clientOtherFrameBytesRcvd;
    }
    if (this._clientOtherFrameBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientOtherFrameBytesSent = this._clientOtherFrameBytesSent;
    }
    if (this._clientRequestOtherCurr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRequestOtherCurr = this._clientRequestOtherCurr;
    }
    if (this._clientRequestOtherTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRequestOtherTotal = this._clientRequestOtherTotal;
    }
    if (this._clientRequestPushCurr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRequestPushCurr = this._clientRequestPushCurr;
    }
    if (this._clientRequestPushTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRequestPushTotal = this._clientRequestPushTotal;
    }
    if (this._clientRequestStreamsCurr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRequestStreamsCurr = this._clientRequestStreamsCurr;
    }
    if (this._clientRequestStreamsTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientRequestStreamsTotal = this._clientRequestStreamsTotal;
    }
    if (this._clientTotalBytesRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientTotalBytesRcvd = this._clientTotalBytesRcvd;
    }
    if (this._clientTotalBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientTotalBytesSent = this._clientTotalBytesSent;
    }
    if (this._connAllocError !== undefined) {
      hasAnyValues = true;
      internalValueResult.connAllocError = this._connAllocError;
    }
    if (this._fatal !== undefined) {
      hasAnyValues = true;
      internalValueResult.fatal = this._fatal;
    }
    if (this._h3ClosedCriticalStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.h3ClosedCriticalStream = this._h3ClosedCriticalStream;
    }
    if (this._h3FrameError !== undefined) {
      hasAnyValues = true;
      internalValueResult.h3FrameError = this._h3FrameError;
    }
    if (this._h3FrameUnexpected !== undefined) {
      hasAnyValues = true;
      internalValueResult.h3FrameUnexpected = this._h3FrameUnexpected;
    }
    if (this._h3GeneralProtocolError !== undefined) {
      hasAnyValues = true;
      internalValueResult.h3GeneralProtocolError = this._h3GeneralProtocolError;
    }
    if (this._h3IdError !== undefined) {
      hasAnyValues = true;
      internalValueResult.h3IdError = this._h3IdError;
    }
    if (this._h3InternalError !== undefined) {
      hasAnyValues = true;
      internalValueResult.h3InternalError = this._h3InternalError;
    }
    if (this._h3MissingSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.h3MissingSettings = this._h3MissingSettings;
    }
    if (this._h3SettingsError !== undefined) {
      hasAnyValues = true;
      internalValueResult.h3SettingsError = this._h3SettingsError;
    }
    if (this._h3StreamCreationError !== undefined) {
      hasAnyValues = true;
      internalValueResult.h3StreamCreationError = this._h3StreamCreationError;
    }
    if (this._http3Rejected !== undefined) {
      hasAnyValues = true;
      internalValueResult.http3Rejected = this._http3Rejected;
    }
    if (this._ignorePushPromise !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignorePushPromise = this._ignorePushPromise;
    }
    if (this._ignoreStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreStream = this._ignoreStream;
    }
    if (this._invalidArgument !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidArgument = this._invalidArgument;
    }
    if (this._invalidState !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidState = this._invalidState;
    }
    if (this._malformedHttpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHttpHeader = this._malformedHttpHeader;
    }
    if (this._malformedHttpMessaging !== undefined) {
      hasAnyValues = true;
      internalValueResult.malformedHttpMessaging = this._malformedHttpMessaging;
    }
    if (this._pushIdBlocked !== undefined) {
      hasAnyValues = true;
      internalValueResult.pushIdBlocked = this._pushIdBlocked;
    }
    if (this._qpackDecoderStreamError !== undefined) {
      hasAnyValues = true;
      internalValueResult.qpackDecoderStreamError = this._qpackDecoderStreamError;
    }
    if (this._qpackDecompressionFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.qpackDecompressionFailed = this._qpackDecompressionFailed;
    }
    if (this._qpackEncoderStreamError !== undefined) {
      hasAnyValues = true;
      internalValueResult.qpackEncoderStreamError = this._qpackEncoderStreamError;
    }
    if (this._qpackFatal !== undefined) {
      hasAnyValues = true;
      internalValueResult.qpackFatal = this._qpackFatal;
    }
    if (this._qpackHeaderTooLarge !== undefined) {
      hasAnyValues = true;
      internalValueResult.qpackHeaderTooLarge = this._qpackHeaderTooLarge;
    }
    if (this._removeHttpHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeHttpHeader = this._removeHttpHeader;
    }
    if (this._serverConnCurr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverConnCurr = this._serverConnCurr;
    }
    if (this._serverConnPeak !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverConnPeak = this._serverConnPeak;
    }
    if (this._serverConnTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverConnTotal = this._serverConnTotal;
    }
    if (this._serverDataBytesRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverDataBytesRcvd = this._serverDataBytesRcvd;
    }
    if (this._serverDataBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverDataBytesSent = this._serverDataBytesSent;
    }
    if (this._serverDataFramesToApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverDataFramesToApp = this._serverDataFramesToApp;
    }
    if (this._serverFrameTypeCancelPushRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverFrameTypeCancelPushRcvd = this._serverFrameTypeCancelPushRcvd;
    }
    if (this._serverFrameTypeCancelPushSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverFrameTypeCancelPushSent = this._serverFrameTypeCancelPushSent;
    }
    if (this._serverFrameTypeDataRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverFrameTypeDataRcvd = this._serverFrameTypeDataRcvd;
    }
    if (this._serverFrameTypeDataSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverFrameTypeDataSent = this._serverFrameTypeDataSent;
    }
    if (this._serverFrameTypeGoawayRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverFrameTypeGoawayRcvd = this._serverFrameTypeGoawayRcvd;
    }
    if (this._serverFrameTypeGoawaySent !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverFrameTypeGoawaySent = this._serverFrameTypeGoawaySent;
    }
    if (this._serverFrameTypeHeadersRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverFrameTypeHeadersRcvd = this._serverFrameTypeHeadersRcvd;
    }
    if (this._serverFrameTypeHeadersSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverFrameTypeHeadersSent = this._serverFrameTypeHeadersSent;
    }
    if (this._serverFrameTypeMaxPushIdRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverFrameTypeMaxPushIdRcvd = this._serverFrameTypeMaxPushIdRcvd;
    }
    if (this._serverFrameTypeMaxPushIdSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverFrameTypeMaxPushIdSent = this._serverFrameTypeMaxPushIdSent;
    }
    if (this._serverFrameTypePushPromiseRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverFrameTypePushPromiseRcvd = this._serverFrameTypePushPromiseRcvd;
    }
    if (this._serverFrameTypePushPromiseSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverFrameTypePushPromiseSent = this._serverFrameTypePushPromiseSent;
    }
    if (this._serverFrameTypeSettingsRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverFrameTypeSettingsRcvd = this._serverFrameTypeSettingsRcvd;
    }
    if (this._serverFrameTypeSettingsSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverFrameTypeSettingsSent = this._serverFrameTypeSettingsSent;
    }
    if (this._serverFrameTypeUnknownRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverFrameTypeUnknownRcvd = this._serverFrameTypeUnknownRcvd;
    }
    if (this._serverHeaderBytesRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverHeaderBytesRcvd = this._serverHeaderBytesRcvd;
    }
    if (this._serverHeaderBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverHeaderBytesSent = this._serverHeaderBytesSent;
    }
    if (this._serverHeaderFramesToApp !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverHeaderFramesToApp = this._serverHeaderFramesToApp;
    }
    if (this._serverHeadingBytesRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverHeadingBytesRcvd = this._serverHeadingBytesRcvd;
    }
    if (this._serverHeadingBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverHeadingBytesSent = this._serverHeadingBytesSent;
    }
    if (this._serverOtherFrameBytesRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverOtherFrameBytesRcvd = this._serverOtherFrameBytesRcvd;
    }
    if (this._serverOtherFrameBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverOtherFrameBytesSent = this._serverOtherFrameBytesSent;
    }
    if (this._serverRequestOtherCurr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRequestOtherCurr = this._serverRequestOtherCurr;
    }
    if (this._serverRequestOtherTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRequestOtherTotal = this._serverRequestOtherTotal;
    }
    if (this._serverRequestPushCurr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRequestPushCurr = this._serverRequestPushCurr;
    }
    if (this._serverRequestPushTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRequestPushTotal = this._serverRequestPushTotal;
    }
    if (this._serverRequestStreamsCurr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRequestStreamsCurr = this._serverRequestStreamsCurr;
    }
    if (this._serverRequestStreamsTotal !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverRequestStreamsTotal = this._serverRequestStreamsTotal;
    }
    if (this._serverTotalBytesRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverTotalBytesRcvd = this._serverTotalBytesRcvd;
    }
    if (this._serverTotalBytesSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverTotalBytesSent = this._serverTotalBytesSent;
    }
    if (this._streamInUse !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamInUse = this._streamInUse;
    }
    if (this._streamNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamNotFound = this._streamNotFound;
    }
    if (this._tooLate !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooLate = this._tooLate;
    }
    if (this._wouldblock !== undefined) {
      hasAnyValues = true;
      internalValueResult.wouldblock = this._wouldblock;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbHttp3StatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocFailTotal = undefined;
      this._clientConnCurr = undefined;
      this._clientConnPeak = undefined;
      this._clientConnTotal = undefined;
      this._clientDataBytesRcvd = undefined;
      this._clientDataBytesSent = undefined;
      this._clientDataFramesToApp = undefined;
      this._clientFrameTypeCancelPushRcvd = undefined;
      this._clientFrameTypeCancelPushSent = undefined;
      this._clientFrameTypeDataRcvd = undefined;
      this._clientFrameTypeDataSent = undefined;
      this._clientFrameTypeGoawayRcvd = undefined;
      this._clientFrameTypeGoawaySent = undefined;
      this._clientFrameTypeHeadersRcvd = undefined;
      this._clientFrameTypeHeadersSent = undefined;
      this._clientFrameTypeMaxPushIdRcvd = undefined;
      this._clientFrameTypeMaxPushIdSent = undefined;
      this._clientFrameTypePushPromiseRcvd = undefined;
      this._clientFrameTypePushPromiseSent = undefined;
      this._clientFrameTypeSettingsRcvd = undefined;
      this._clientFrameTypeSettingsSent = undefined;
      this._clientFrameTypeUnknownRcvd = undefined;
      this._clientHeaderBytesRcvd = undefined;
      this._clientHeaderBytesSent = undefined;
      this._clientHeaderFramesToApp = undefined;
      this._clientHeadingBytesRcvd = undefined;
      this._clientHeadingBytesSent = undefined;
      this._clientOtherFrameBytesRcvd = undefined;
      this._clientOtherFrameBytesSent = undefined;
      this._clientRequestOtherCurr = undefined;
      this._clientRequestOtherTotal = undefined;
      this._clientRequestPushCurr = undefined;
      this._clientRequestPushTotal = undefined;
      this._clientRequestStreamsCurr = undefined;
      this._clientRequestStreamsTotal = undefined;
      this._clientTotalBytesRcvd = undefined;
      this._clientTotalBytesSent = undefined;
      this._connAllocError = undefined;
      this._fatal = undefined;
      this._h3ClosedCriticalStream = undefined;
      this._h3FrameError = undefined;
      this._h3FrameUnexpected = undefined;
      this._h3GeneralProtocolError = undefined;
      this._h3IdError = undefined;
      this._h3InternalError = undefined;
      this._h3MissingSettings = undefined;
      this._h3SettingsError = undefined;
      this._h3StreamCreationError = undefined;
      this._http3Rejected = undefined;
      this._ignorePushPromise = undefined;
      this._ignoreStream = undefined;
      this._invalidArgument = undefined;
      this._invalidState = undefined;
      this._malformedHttpHeader = undefined;
      this._malformedHttpMessaging = undefined;
      this._pushIdBlocked = undefined;
      this._qpackDecoderStreamError = undefined;
      this._qpackDecompressionFailed = undefined;
      this._qpackEncoderStreamError = undefined;
      this._qpackFatal = undefined;
      this._qpackHeaderTooLarge = undefined;
      this._removeHttpHeader = undefined;
      this._serverConnCurr = undefined;
      this._serverConnPeak = undefined;
      this._serverConnTotal = undefined;
      this._serverDataBytesRcvd = undefined;
      this._serverDataBytesSent = undefined;
      this._serverDataFramesToApp = undefined;
      this._serverFrameTypeCancelPushRcvd = undefined;
      this._serverFrameTypeCancelPushSent = undefined;
      this._serverFrameTypeDataRcvd = undefined;
      this._serverFrameTypeDataSent = undefined;
      this._serverFrameTypeGoawayRcvd = undefined;
      this._serverFrameTypeGoawaySent = undefined;
      this._serverFrameTypeHeadersRcvd = undefined;
      this._serverFrameTypeHeadersSent = undefined;
      this._serverFrameTypeMaxPushIdRcvd = undefined;
      this._serverFrameTypeMaxPushIdSent = undefined;
      this._serverFrameTypePushPromiseRcvd = undefined;
      this._serverFrameTypePushPromiseSent = undefined;
      this._serverFrameTypeSettingsRcvd = undefined;
      this._serverFrameTypeSettingsSent = undefined;
      this._serverFrameTypeUnknownRcvd = undefined;
      this._serverHeaderBytesRcvd = undefined;
      this._serverHeaderBytesSent = undefined;
      this._serverHeaderFramesToApp = undefined;
      this._serverHeadingBytesRcvd = undefined;
      this._serverHeadingBytesSent = undefined;
      this._serverOtherFrameBytesRcvd = undefined;
      this._serverOtherFrameBytesSent = undefined;
      this._serverRequestOtherCurr = undefined;
      this._serverRequestOtherTotal = undefined;
      this._serverRequestPushCurr = undefined;
      this._serverRequestPushTotal = undefined;
      this._serverRequestStreamsCurr = undefined;
      this._serverRequestStreamsTotal = undefined;
      this._serverTotalBytesRcvd = undefined;
      this._serverTotalBytesSent = undefined;
      this._streamInUse = undefined;
      this._streamNotFound = undefined;
      this._tooLate = undefined;
      this._wouldblock = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocFailTotal = value.allocFailTotal;
      this._clientConnCurr = value.clientConnCurr;
      this._clientConnPeak = value.clientConnPeak;
      this._clientConnTotal = value.clientConnTotal;
      this._clientDataBytesRcvd = value.clientDataBytesRcvd;
      this._clientDataBytesSent = value.clientDataBytesSent;
      this._clientDataFramesToApp = value.clientDataFramesToApp;
      this._clientFrameTypeCancelPushRcvd = value.clientFrameTypeCancelPushRcvd;
      this._clientFrameTypeCancelPushSent = value.clientFrameTypeCancelPushSent;
      this._clientFrameTypeDataRcvd = value.clientFrameTypeDataRcvd;
      this._clientFrameTypeDataSent = value.clientFrameTypeDataSent;
      this._clientFrameTypeGoawayRcvd = value.clientFrameTypeGoawayRcvd;
      this._clientFrameTypeGoawaySent = value.clientFrameTypeGoawaySent;
      this._clientFrameTypeHeadersRcvd = value.clientFrameTypeHeadersRcvd;
      this._clientFrameTypeHeadersSent = value.clientFrameTypeHeadersSent;
      this._clientFrameTypeMaxPushIdRcvd = value.clientFrameTypeMaxPushIdRcvd;
      this._clientFrameTypeMaxPushIdSent = value.clientFrameTypeMaxPushIdSent;
      this._clientFrameTypePushPromiseRcvd = value.clientFrameTypePushPromiseRcvd;
      this._clientFrameTypePushPromiseSent = value.clientFrameTypePushPromiseSent;
      this._clientFrameTypeSettingsRcvd = value.clientFrameTypeSettingsRcvd;
      this._clientFrameTypeSettingsSent = value.clientFrameTypeSettingsSent;
      this._clientFrameTypeUnknownRcvd = value.clientFrameTypeUnknownRcvd;
      this._clientHeaderBytesRcvd = value.clientHeaderBytesRcvd;
      this._clientHeaderBytesSent = value.clientHeaderBytesSent;
      this._clientHeaderFramesToApp = value.clientHeaderFramesToApp;
      this._clientHeadingBytesRcvd = value.clientHeadingBytesRcvd;
      this._clientHeadingBytesSent = value.clientHeadingBytesSent;
      this._clientOtherFrameBytesRcvd = value.clientOtherFrameBytesRcvd;
      this._clientOtherFrameBytesSent = value.clientOtherFrameBytesSent;
      this._clientRequestOtherCurr = value.clientRequestOtherCurr;
      this._clientRequestOtherTotal = value.clientRequestOtherTotal;
      this._clientRequestPushCurr = value.clientRequestPushCurr;
      this._clientRequestPushTotal = value.clientRequestPushTotal;
      this._clientRequestStreamsCurr = value.clientRequestStreamsCurr;
      this._clientRequestStreamsTotal = value.clientRequestStreamsTotal;
      this._clientTotalBytesRcvd = value.clientTotalBytesRcvd;
      this._clientTotalBytesSent = value.clientTotalBytesSent;
      this._connAllocError = value.connAllocError;
      this._fatal = value.fatal;
      this._h3ClosedCriticalStream = value.h3ClosedCriticalStream;
      this._h3FrameError = value.h3FrameError;
      this._h3FrameUnexpected = value.h3FrameUnexpected;
      this._h3GeneralProtocolError = value.h3GeneralProtocolError;
      this._h3IdError = value.h3IdError;
      this._h3InternalError = value.h3InternalError;
      this._h3MissingSettings = value.h3MissingSettings;
      this._h3SettingsError = value.h3SettingsError;
      this._h3StreamCreationError = value.h3StreamCreationError;
      this._http3Rejected = value.http3Rejected;
      this._ignorePushPromise = value.ignorePushPromise;
      this._ignoreStream = value.ignoreStream;
      this._invalidArgument = value.invalidArgument;
      this._invalidState = value.invalidState;
      this._malformedHttpHeader = value.malformedHttpHeader;
      this._malformedHttpMessaging = value.malformedHttpMessaging;
      this._pushIdBlocked = value.pushIdBlocked;
      this._qpackDecoderStreamError = value.qpackDecoderStreamError;
      this._qpackDecompressionFailed = value.qpackDecompressionFailed;
      this._qpackEncoderStreamError = value.qpackEncoderStreamError;
      this._qpackFatal = value.qpackFatal;
      this._qpackHeaderTooLarge = value.qpackHeaderTooLarge;
      this._removeHttpHeader = value.removeHttpHeader;
      this._serverConnCurr = value.serverConnCurr;
      this._serverConnPeak = value.serverConnPeak;
      this._serverConnTotal = value.serverConnTotal;
      this._serverDataBytesRcvd = value.serverDataBytesRcvd;
      this._serverDataBytesSent = value.serverDataBytesSent;
      this._serverDataFramesToApp = value.serverDataFramesToApp;
      this._serverFrameTypeCancelPushRcvd = value.serverFrameTypeCancelPushRcvd;
      this._serverFrameTypeCancelPushSent = value.serverFrameTypeCancelPushSent;
      this._serverFrameTypeDataRcvd = value.serverFrameTypeDataRcvd;
      this._serverFrameTypeDataSent = value.serverFrameTypeDataSent;
      this._serverFrameTypeGoawayRcvd = value.serverFrameTypeGoawayRcvd;
      this._serverFrameTypeGoawaySent = value.serverFrameTypeGoawaySent;
      this._serverFrameTypeHeadersRcvd = value.serverFrameTypeHeadersRcvd;
      this._serverFrameTypeHeadersSent = value.serverFrameTypeHeadersSent;
      this._serverFrameTypeMaxPushIdRcvd = value.serverFrameTypeMaxPushIdRcvd;
      this._serverFrameTypeMaxPushIdSent = value.serverFrameTypeMaxPushIdSent;
      this._serverFrameTypePushPromiseRcvd = value.serverFrameTypePushPromiseRcvd;
      this._serverFrameTypePushPromiseSent = value.serverFrameTypePushPromiseSent;
      this._serverFrameTypeSettingsRcvd = value.serverFrameTypeSettingsRcvd;
      this._serverFrameTypeSettingsSent = value.serverFrameTypeSettingsSent;
      this._serverFrameTypeUnknownRcvd = value.serverFrameTypeUnknownRcvd;
      this._serverHeaderBytesRcvd = value.serverHeaderBytesRcvd;
      this._serverHeaderBytesSent = value.serverHeaderBytesSent;
      this._serverHeaderFramesToApp = value.serverHeaderFramesToApp;
      this._serverHeadingBytesRcvd = value.serverHeadingBytesRcvd;
      this._serverHeadingBytesSent = value.serverHeadingBytesSent;
      this._serverOtherFrameBytesRcvd = value.serverOtherFrameBytesRcvd;
      this._serverOtherFrameBytesSent = value.serverOtherFrameBytesSent;
      this._serverRequestOtherCurr = value.serverRequestOtherCurr;
      this._serverRequestOtherTotal = value.serverRequestOtherTotal;
      this._serverRequestPushCurr = value.serverRequestPushCurr;
      this._serverRequestPushTotal = value.serverRequestPushTotal;
      this._serverRequestStreamsCurr = value.serverRequestStreamsCurr;
      this._serverRequestStreamsTotal = value.serverRequestStreamsTotal;
      this._serverTotalBytesRcvd = value.serverTotalBytesRcvd;
      this._serverTotalBytesSent = value.serverTotalBytesSent;
      this._streamInUse = value.streamInUse;
      this._streamNotFound = value.streamNotFound;
      this._tooLate = value.tooLate;
      this._wouldblock = value.wouldblock;
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

  // client_conn_curr - computed: false, optional: true, required: false
  private _clientConnCurr?: number; 
  public get clientConnCurr() {
    return this.getNumberAttribute('client_conn_curr');
  }
  public set clientConnCurr(value: number) {
    this._clientConnCurr = value;
  }
  public resetClientConnCurr() {
    this._clientConnCurr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConnCurrInput() {
    return this._clientConnCurr;
  }

  // client_conn_peak - computed: false, optional: true, required: false
  private _clientConnPeak?: number; 
  public get clientConnPeak() {
    return this.getNumberAttribute('client_conn_peak');
  }
  public set clientConnPeak(value: number) {
    this._clientConnPeak = value;
  }
  public resetClientConnPeak() {
    this._clientConnPeak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConnPeakInput() {
    return this._clientConnPeak;
  }

  // client_conn_total - computed: false, optional: true, required: false
  private _clientConnTotal?: number; 
  public get clientConnTotal() {
    return this.getNumberAttribute('client_conn_total');
  }
  public set clientConnTotal(value: number) {
    this._clientConnTotal = value;
  }
  public resetClientConnTotal() {
    this._clientConnTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientConnTotalInput() {
    return this._clientConnTotal;
  }

  // client_data_bytes_rcvd - computed: false, optional: true, required: false
  private _clientDataBytesRcvd?: number; 
  public get clientDataBytesRcvd() {
    return this.getNumberAttribute('client_data_bytes_rcvd');
  }
  public set clientDataBytesRcvd(value: number) {
    this._clientDataBytesRcvd = value;
  }
  public resetClientDataBytesRcvd() {
    this._clientDataBytesRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientDataBytesRcvdInput() {
    return this._clientDataBytesRcvd;
  }

  // client_data_bytes_sent - computed: false, optional: true, required: false
  private _clientDataBytesSent?: number; 
  public get clientDataBytesSent() {
    return this.getNumberAttribute('client_data_bytes_sent');
  }
  public set clientDataBytesSent(value: number) {
    this._clientDataBytesSent = value;
  }
  public resetClientDataBytesSent() {
    this._clientDataBytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientDataBytesSentInput() {
    return this._clientDataBytesSent;
  }

  // client_data_frames_to_app - computed: false, optional: true, required: false
  private _clientDataFramesToApp?: number; 
  public get clientDataFramesToApp() {
    return this.getNumberAttribute('client_data_frames_to_app');
  }
  public set clientDataFramesToApp(value: number) {
    this._clientDataFramesToApp = value;
  }
  public resetClientDataFramesToApp() {
    this._clientDataFramesToApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientDataFramesToAppInput() {
    return this._clientDataFramesToApp;
  }

  // client_frame_type_cancel_push_rcvd - computed: false, optional: true, required: false
  private _clientFrameTypeCancelPushRcvd?: number; 
  public get clientFrameTypeCancelPushRcvd() {
    return this.getNumberAttribute('client_frame_type_cancel_push_rcvd');
  }
  public set clientFrameTypeCancelPushRcvd(value: number) {
    this._clientFrameTypeCancelPushRcvd = value;
  }
  public resetClientFrameTypeCancelPushRcvd() {
    this._clientFrameTypeCancelPushRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientFrameTypeCancelPushRcvdInput() {
    return this._clientFrameTypeCancelPushRcvd;
  }

  // client_frame_type_cancel_push_sent - computed: false, optional: true, required: false
  private _clientFrameTypeCancelPushSent?: number; 
  public get clientFrameTypeCancelPushSent() {
    return this.getNumberAttribute('client_frame_type_cancel_push_sent');
  }
  public set clientFrameTypeCancelPushSent(value: number) {
    this._clientFrameTypeCancelPushSent = value;
  }
  public resetClientFrameTypeCancelPushSent() {
    this._clientFrameTypeCancelPushSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientFrameTypeCancelPushSentInput() {
    return this._clientFrameTypeCancelPushSent;
  }

  // client_frame_type_data_rcvd - computed: false, optional: true, required: false
  private _clientFrameTypeDataRcvd?: number; 
  public get clientFrameTypeDataRcvd() {
    return this.getNumberAttribute('client_frame_type_data_rcvd');
  }
  public set clientFrameTypeDataRcvd(value: number) {
    this._clientFrameTypeDataRcvd = value;
  }
  public resetClientFrameTypeDataRcvd() {
    this._clientFrameTypeDataRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientFrameTypeDataRcvdInput() {
    return this._clientFrameTypeDataRcvd;
  }

  // client_frame_type_data_sent - computed: false, optional: true, required: false
  private _clientFrameTypeDataSent?: number; 
  public get clientFrameTypeDataSent() {
    return this.getNumberAttribute('client_frame_type_data_sent');
  }
  public set clientFrameTypeDataSent(value: number) {
    this._clientFrameTypeDataSent = value;
  }
  public resetClientFrameTypeDataSent() {
    this._clientFrameTypeDataSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientFrameTypeDataSentInput() {
    return this._clientFrameTypeDataSent;
  }

  // client_frame_type_goaway_rcvd - computed: false, optional: true, required: false
  private _clientFrameTypeGoawayRcvd?: number; 
  public get clientFrameTypeGoawayRcvd() {
    return this.getNumberAttribute('client_frame_type_goaway_rcvd');
  }
  public set clientFrameTypeGoawayRcvd(value: number) {
    this._clientFrameTypeGoawayRcvd = value;
  }
  public resetClientFrameTypeGoawayRcvd() {
    this._clientFrameTypeGoawayRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientFrameTypeGoawayRcvdInput() {
    return this._clientFrameTypeGoawayRcvd;
  }

  // client_frame_type_goaway_sent - computed: false, optional: true, required: false
  private _clientFrameTypeGoawaySent?: number; 
  public get clientFrameTypeGoawaySent() {
    return this.getNumberAttribute('client_frame_type_goaway_sent');
  }
  public set clientFrameTypeGoawaySent(value: number) {
    this._clientFrameTypeGoawaySent = value;
  }
  public resetClientFrameTypeGoawaySent() {
    this._clientFrameTypeGoawaySent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientFrameTypeGoawaySentInput() {
    return this._clientFrameTypeGoawaySent;
  }

  // client_frame_type_headers_rcvd - computed: false, optional: true, required: false
  private _clientFrameTypeHeadersRcvd?: number; 
  public get clientFrameTypeHeadersRcvd() {
    return this.getNumberAttribute('client_frame_type_headers_rcvd');
  }
  public set clientFrameTypeHeadersRcvd(value: number) {
    this._clientFrameTypeHeadersRcvd = value;
  }
  public resetClientFrameTypeHeadersRcvd() {
    this._clientFrameTypeHeadersRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientFrameTypeHeadersRcvdInput() {
    return this._clientFrameTypeHeadersRcvd;
  }

  // client_frame_type_headers_sent - computed: false, optional: true, required: false
  private _clientFrameTypeHeadersSent?: number; 
  public get clientFrameTypeHeadersSent() {
    return this.getNumberAttribute('client_frame_type_headers_sent');
  }
  public set clientFrameTypeHeadersSent(value: number) {
    this._clientFrameTypeHeadersSent = value;
  }
  public resetClientFrameTypeHeadersSent() {
    this._clientFrameTypeHeadersSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientFrameTypeHeadersSentInput() {
    return this._clientFrameTypeHeadersSent;
  }

  // client_frame_type_max_push_id_rcvd - computed: false, optional: true, required: false
  private _clientFrameTypeMaxPushIdRcvd?: number; 
  public get clientFrameTypeMaxPushIdRcvd() {
    return this.getNumberAttribute('client_frame_type_max_push_id_rcvd');
  }
  public set clientFrameTypeMaxPushIdRcvd(value: number) {
    this._clientFrameTypeMaxPushIdRcvd = value;
  }
  public resetClientFrameTypeMaxPushIdRcvd() {
    this._clientFrameTypeMaxPushIdRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientFrameTypeMaxPushIdRcvdInput() {
    return this._clientFrameTypeMaxPushIdRcvd;
  }

  // client_frame_type_max_push_id_sent - computed: false, optional: true, required: false
  private _clientFrameTypeMaxPushIdSent?: number; 
  public get clientFrameTypeMaxPushIdSent() {
    return this.getNumberAttribute('client_frame_type_max_push_id_sent');
  }
  public set clientFrameTypeMaxPushIdSent(value: number) {
    this._clientFrameTypeMaxPushIdSent = value;
  }
  public resetClientFrameTypeMaxPushIdSent() {
    this._clientFrameTypeMaxPushIdSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientFrameTypeMaxPushIdSentInput() {
    return this._clientFrameTypeMaxPushIdSent;
  }

  // client_frame_type_push_promise_rcvd - computed: false, optional: true, required: false
  private _clientFrameTypePushPromiseRcvd?: number; 
  public get clientFrameTypePushPromiseRcvd() {
    return this.getNumberAttribute('client_frame_type_push_promise_rcvd');
  }
  public set clientFrameTypePushPromiseRcvd(value: number) {
    this._clientFrameTypePushPromiseRcvd = value;
  }
  public resetClientFrameTypePushPromiseRcvd() {
    this._clientFrameTypePushPromiseRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientFrameTypePushPromiseRcvdInput() {
    return this._clientFrameTypePushPromiseRcvd;
  }

  // client_frame_type_push_promise_sent - computed: false, optional: true, required: false
  private _clientFrameTypePushPromiseSent?: number; 
  public get clientFrameTypePushPromiseSent() {
    return this.getNumberAttribute('client_frame_type_push_promise_sent');
  }
  public set clientFrameTypePushPromiseSent(value: number) {
    this._clientFrameTypePushPromiseSent = value;
  }
  public resetClientFrameTypePushPromiseSent() {
    this._clientFrameTypePushPromiseSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientFrameTypePushPromiseSentInput() {
    return this._clientFrameTypePushPromiseSent;
  }

  // client_frame_type_settings_rcvd - computed: false, optional: true, required: false
  private _clientFrameTypeSettingsRcvd?: number; 
  public get clientFrameTypeSettingsRcvd() {
    return this.getNumberAttribute('client_frame_type_settings_rcvd');
  }
  public set clientFrameTypeSettingsRcvd(value: number) {
    this._clientFrameTypeSettingsRcvd = value;
  }
  public resetClientFrameTypeSettingsRcvd() {
    this._clientFrameTypeSettingsRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientFrameTypeSettingsRcvdInput() {
    return this._clientFrameTypeSettingsRcvd;
  }

  // client_frame_type_settings_sent - computed: false, optional: true, required: false
  private _clientFrameTypeSettingsSent?: number; 
  public get clientFrameTypeSettingsSent() {
    return this.getNumberAttribute('client_frame_type_settings_sent');
  }
  public set clientFrameTypeSettingsSent(value: number) {
    this._clientFrameTypeSettingsSent = value;
  }
  public resetClientFrameTypeSettingsSent() {
    this._clientFrameTypeSettingsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientFrameTypeSettingsSentInput() {
    return this._clientFrameTypeSettingsSent;
  }

  // client_frame_type_unknown_rcvd - computed: false, optional: true, required: false
  private _clientFrameTypeUnknownRcvd?: number; 
  public get clientFrameTypeUnknownRcvd() {
    return this.getNumberAttribute('client_frame_type_unknown_rcvd');
  }
  public set clientFrameTypeUnknownRcvd(value: number) {
    this._clientFrameTypeUnknownRcvd = value;
  }
  public resetClientFrameTypeUnknownRcvd() {
    this._clientFrameTypeUnknownRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientFrameTypeUnknownRcvdInput() {
    return this._clientFrameTypeUnknownRcvd;
  }

  // client_header_bytes_rcvd - computed: false, optional: true, required: false
  private _clientHeaderBytesRcvd?: number; 
  public get clientHeaderBytesRcvd() {
    return this.getNumberAttribute('client_header_bytes_rcvd');
  }
  public set clientHeaderBytesRcvd(value: number) {
    this._clientHeaderBytesRcvd = value;
  }
  public resetClientHeaderBytesRcvd() {
    this._clientHeaderBytesRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientHeaderBytesRcvdInput() {
    return this._clientHeaderBytesRcvd;
  }

  // client_header_bytes_sent - computed: false, optional: true, required: false
  private _clientHeaderBytesSent?: number; 
  public get clientHeaderBytesSent() {
    return this.getNumberAttribute('client_header_bytes_sent');
  }
  public set clientHeaderBytesSent(value: number) {
    this._clientHeaderBytesSent = value;
  }
  public resetClientHeaderBytesSent() {
    this._clientHeaderBytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientHeaderBytesSentInput() {
    return this._clientHeaderBytesSent;
  }

  // client_header_frames_to_app - computed: false, optional: true, required: false
  private _clientHeaderFramesToApp?: number; 
  public get clientHeaderFramesToApp() {
    return this.getNumberAttribute('client_header_frames_to_app');
  }
  public set clientHeaderFramesToApp(value: number) {
    this._clientHeaderFramesToApp = value;
  }
  public resetClientHeaderFramesToApp() {
    this._clientHeaderFramesToApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientHeaderFramesToAppInput() {
    return this._clientHeaderFramesToApp;
  }

  // client_heading_bytes_rcvd - computed: false, optional: true, required: false
  private _clientHeadingBytesRcvd?: number; 
  public get clientHeadingBytesRcvd() {
    return this.getNumberAttribute('client_heading_bytes_rcvd');
  }
  public set clientHeadingBytesRcvd(value: number) {
    this._clientHeadingBytesRcvd = value;
  }
  public resetClientHeadingBytesRcvd() {
    this._clientHeadingBytesRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientHeadingBytesRcvdInput() {
    return this._clientHeadingBytesRcvd;
  }

  // client_heading_bytes_sent - computed: false, optional: true, required: false
  private _clientHeadingBytesSent?: number; 
  public get clientHeadingBytesSent() {
    return this.getNumberAttribute('client_heading_bytes_sent');
  }
  public set clientHeadingBytesSent(value: number) {
    this._clientHeadingBytesSent = value;
  }
  public resetClientHeadingBytesSent() {
    this._clientHeadingBytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientHeadingBytesSentInput() {
    return this._clientHeadingBytesSent;
  }

  // client_other_frame_bytes_rcvd - computed: false, optional: true, required: false
  private _clientOtherFrameBytesRcvd?: number; 
  public get clientOtherFrameBytesRcvd() {
    return this.getNumberAttribute('client_other_frame_bytes_rcvd');
  }
  public set clientOtherFrameBytesRcvd(value: number) {
    this._clientOtherFrameBytesRcvd = value;
  }
  public resetClientOtherFrameBytesRcvd() {
    this._clientOtherFrameBytesRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientOtherFrameBytesRcvdInput() {
    return this._clientOtherFrameBytesRcvd;
  }

  // client_other_frame_bytes_sent - computed: false, optional: true, required: false
  private _clientOtherFrameBytesSent?: number; 
  public get clientOtherFrameBytesSent() {
    return this.getNumberAttribute('client_other_frame_bytes_sent');
  }
  public set clientOtherFrameBytesSent(value: number) {
    this._clientOtherFrameBytesSent = value;
  }
  public resetClientOtherFrameBytesSent() {
    this._clientOtherFrameBytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientOtherFrameBytesSentInput() {
    return this._clientOtherFrameBytesSent;
  }

  // client_request_other_curr - computed: false, optional: true, required: false
  private _clientRequestOtherCurr?: number; 
  public get clientRequestOtherCurr() {
    return this.getNumberAttribute('client_request_other_curr');
  }
  public set clientRequestOtherCurr(value: number) {
    this._clientRequestOtherCurr = value;
  }
  public resetClientRequestOtherCurr() {
    this._clientRequestOtherCurr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRequestOtherCurrInput() {
    return this._clientRequestOtherCurr;
  }

  // client_request_other_total - computed: false, optional: true, required: false
  private _clientRequestOtherTotal?: number; 
  public get clientRequestOtherTotal() {
    return this.getNumberAttribute('client_request_other_total');
  }
  public set clientRequestOtherTotal(value: number) {
    this._clientRequestOtherTotal = value;
  }
  public resetClientRequestOtherTotal() {
    this._clientRequestOtherTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRequestOtherTotalInput() {
    return this._clientRequestOtherTotal;
  }

  // client_request_push_curr - computed: false, optional: true, required: false
  private _clientRequestPushCurr?: number; 
  public get clientRequestPushCurr() {
    return this.getNumberAttribute('client_request_push_curr');
  }
  public set clientRequestPushCurr(value: number) {
    this._clientRequestPushCurr = value;
  }
  public resetClientRequestPushCurr() {
    this._clientRequestPushCurr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRequestPushCurrInput() {
    return this._clientRequestPushCurr;
  }

  // client_request_push_total - computed: false, optional: true, required: false
  private _clientRequestPushTotal?: number; 
  public get clientRequestPushTotal() {
    return this.getNumberAttribute('client_request_push_total');
  }
  public set clientRequestPushTotal(value: number) {
    this._clientRequestPushTotal = value;
  }
  public resetClientRequestPushTotal() {
    this._clientRequestPushTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRequestPushTotalInput() {
    return this._clientRequestPushTotal;
  }

  // client_request_streams_curr - computed: false, optional: true, required: false
  private _clientRequestStreamsCurr?: number; 
  public get clientRequestStreamsCurr() {
    return this.getNumberAttribute('client_request_streams_curr');
  }
  public set clientRequestStreamsCurr(value: number) {
    this._clientRequestStreamsCurr = value;
  }
  public resetClientRequestStreamsCurr() {
    this._clientRequestStreamsCurr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRequestStreamsCurrInput() {
    return this._clientRequestStreamsCurr;
  }

  // client_request_streams_total - computed: false, optional: true, required: false
  private _clientRequestStreamsTotal?: number; 
  public get clientRequestStreamsTotal() {
    return this.getNumberAttribute('client_request_streams_total');
  }
  public set clientRequestStreamsTotal(value: number) {
    this._clientRequestStreamsTotal = value;
  }
  public resetClientRequestStreamsTotal() {
    this._clientRequestStreamsTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientRequestStreamsTotalInput() {
    return this._clientRequestStreamsTotal;
  }

  // client_total_bytes_rcvd - computed: false, optional: true, required: false
  private _clientTotalBytesRcvd?: number; 
  public get clientTotalBytesRcvd() {
    return this.getNumberAttribute('client_total_bytes_rcvd');
  }
  public set clientTotalBytesRcvd(value: number) {
    this._clientTotalBytesRcvd = value;
  }
  public resetClientTotalBytesRcvd() {
    this._clientTotalBytesRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTotalBytesRcvdInput() {
    return this._clientTotalBytesRcvd;
  }

  // client_total_bytes_sent - computed: false, optional: true, required: false
  private _clientTotalBytesSent?: number; 
  public get clientTotalBytesSent() {
    return this.getNumberAttribute('client_total_bytes_sent');
  }
  public set clientTotalBytesSent(value: number) {
    this._clientTotalBytesSent = value;
  }
  public resetClientTotalBytesSent() {
    this._clientTotalBytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTotalBytesSentInput() {
    return this._clientTotalBytesSent;
  }

  // conn_alloc_error - computed: false, optional: true, required: false
  private _connAllocError?: number; 
  public get connAllocError() {
    return this.getNumberAttribute('conn_alloc_error');
  }
  public set connAllocError(value: number) {
    this._connAllocError = value;
  }
  public resetConnAllocError() {
    this._connAllocError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connAllocErrorInput() {
    return this._connAllocError;
  }

  // fatal - computed: false, optional: true, required: false
  private _fatal?: number; 
  public get fatal() {
    return this.getNumberAttribute('fatal');
  }
  public set fatal(value: number) {
    this._fatal = value;
  }
  public resetFatal() {
    this._fatal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fatalInput() {
    return this._fatal;
  }

  // h3_closed_critical_stream - computed: false, optional: true, required: false
  private _h3ClosedCriticalStream?: number; 
  public get h3ClosedCriticalStream() {
    return this.getNumberAttribute('h3_closed_critical_stream');
  }
  public set h3ClosedCriticalStream(value: number) {
    this._h3ClosedCriticalStream = value;
  }
  public resetH3ClosedCriticalStream() {
    this._h3ClosedCriticalStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h3ClosedCriticalStreamInput() {
    return this._h3ClosedCriticalStream;
  }

  // h3_frame_error - computed: false, optional: true, required: false
  private _h3FrameError?: number; 
  public get h3FrameError() {
    return this.getNumberAttribute('h3_frame_error');
  }
  public set h3FrameError(value: number) {
    this._h3FrameError = value;
  }
  public resetH3FrameError() {
    this._h3FrameError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h3FrameErrorInput() {
    return this._h3FrameError;
  }

  // h3_frame_unexpected - computed: false, optional: true, required: false
  private _h3FrameUnexpected?: number; 
  public get h3FrameUnexpected() {
    return this.getNumberAttribute('h3_frame_unexpected');
  }
  public set h3FrameUnexpected(value: number) {
    this._h3FrameUnexpected = value;
  }
  public resetH3FrameUnexpected() {
    this._h3FrameUnexpected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h3FrameUnexpectedInput() {
    return this._h3FrameUnexpected;
  }

  // h3_general_protocol_error - computed: false, optional: true, required: false
  private _h3GeneralProtocolError?: number; 
  public get h3GeneralProtocolError() {
    return this.getNumberAttribute('h3_general_protocol_error');
  }
  public set h3GeneralProtocolError(value: number) {
    this._h3GeneralProtocolError = value;
  }
  public resetH3GeneralProtocolError() {
    this._h3GeneralProtocolError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h3GeneralProtocolErrorInput() {
    return this._h3GeneralProtocolError;
  }

  // h3_id_error - computed: false, optional: true, required: false
  private _h3IdError?: number; 
  public get h3IdError() {
    return this.getNumberAttribute('h3_id_error');
  }
  public set h3IdError(value: number) {
    this._h3IdError = value;
  }
  public resetH3IdError() {
    this._h3IdError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h3IdErrorInput() {
    return this._h3IdError;
  }

  // h3_internal_error - computed: false, optional: true, required: false
  private _h3InternalError?: number; 
  public get h3InternalError() {
    return this.getNumberAttribute('h3_internal_error');
  }
  public set h3InternalError(value: number) {
    this._h3InternalError = value;
  }
  public resetH3InternalError() {
    this._h3InternalError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h3InternalErrorInput() {
    return this._h3InternalError;
  }

  // h3_missing_settings - computed: false, optional: true, required: false
  private _h3MissingSettings?: number; 
  public get h3MissingSettings() {
    return this.getNumberAttribute('h3_missing_settings');
  }
  public set h3MissingSettings(value: number) {
    this._h3MissingSettings = value;
  }
  public resetH3MissingSettings() {
    this._h3MissingSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h3MissingSettingsInput() {
    return this._h3MissingSettings;
  }

  // h3_settings_error - computed: false, optional: true, required: false
  private _h3SettingsError?: number; 
  public get h3SettingsError() {
    return this.getNumberAttribute('h3_settings_error');
  }
  public set h3SettingsError(value: number) {
    this._h3SettingsError = value;
  }
  public resetH3SettingsError() {
    this._h3SettingsError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h3SettingsErrorInput() {
    return this._h3SettingsError;
  }

  // h3_stream_creation_error - computed: false, optional: true, required: false
  private _h3StreamCreationError?: number; 
  public get h3StreamCreationError() {
    return this.getNumberAttribute('h3_stream_creation_error');
  }
  public set h3StreamCreationError(value: number) {
    this._h3StreamCreationError = value;
  }
  public resetH3StreamCreationError() {
    this._h3StreamCreationError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h3StreamCreationErrorInput() {
    return this._h3StreamCreationError;
  }

  // http3_rejected - computed: false, optional: true, required: false
  private _http3Rejected?: number; 
  public get http3Rejected() {
    return this.getNumberAttribute('http3_rejected');
  }
  public set http3Rejected(value: number) {
    this._http3Rejected = value;
  }
  public resetHttp3Rejected() {
    this._http3Rejected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get http3RejectedInput() {
    return this._http3Rejected;
  }

  // ignore_push_promise - computed: false, optional: true, required: false
  private _ignorePushPromise?: number; 
  public get ignorePushPromise() {
    return this.getNumberAttribute('ignore_push_promise');
  }
  public set ignorePushPromise(value: number) {
    this._ignorePushPromise = value;
  }
  public resetIgnorePushPromise() {
    this._ignorePushPromise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignorePushPromiseInput() {
    return this._ignorePushPromise;
  }

  // ignore_stream - computed: false, optional: true, required: false
  private _ignoreStream?: number; 
  public get ignoreStream() {
    return this.getNumberAttribute('ignore_stream');
  }
  public set ignoreStream(value: number) {
    this._ignoreStream = value;
  }
  public resetIgnoreStream() {
    this._ignoreStream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreStreamInput() {
    return this._ignoreStream;
  }

  // invalid_argument - computed: false, optional: true, required: false
  private _invalidArgument?: number; 
  public get invalidArgument() {
    return this.getNumberAttribute('invalid_argument');
  }
  public set invalidArgument(value: number) {
    this._invalidArgument = value;
  }
  public resetInvalidArgument() {
    this._invalidArgument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidArgumentInput() {
    return this._invalidArgument;
  }

  // invalid_state - computed: false, optional: true, required: false
  private _invalidState?: number; 
  public get invalidState() {
    return this.getNumberAttribute('invalid_state');
  }
  public set invalidState(value: number) {
    this._invalidState = value;
  }
  public resetInvalidState() {
    this._invalidState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidStateInput() {
    return this._invalidState;
  }

  // malformed_http_header - computed: false, optional: true, required: false
  private _malformedHttpHeader?: number; 
  public get malformedHttpHeader() {
    return this.getNumberAttribute('malformed_http_header');
  }
  public set malformedHttpHeader(value: number) {
    this._malformedHttpHeader = value;
  }
  public resetMalformedHttpHeader() {
    this._malformedHttpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHttpHeaderInput() {
    return this._malformedHttpHeader;
  }

  // malformed_http_messaging - computed: false, optional: true, required: false
  private _malformedHttpMessaging?: number; 
  public get malformedHttpMessaging() {
    return this.getNumberAttribute('malformed_http_messaging');
  }
  public set malformedHttpMessaging(value: number) {
    this._malformedHttpMessaging = value;
  }
  public resetMalformedHttpMessaging() {
    this._malformedHttpMessaging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get malformedHttpMessagingInput() {
    return this._malformedHttpMessaging;
  }

  // push_id_blocked - computed: false, optional: true, required: false
  private _pushIdBlocked?: number; 
  public get pushIdBlocked() {
    return this.getNumberAttribute('push_id_blocked');
  }
  public set pushIdBlocked(value: number) {
    this._pushIdBlocked = value;
  }
  public resetPushIdBlocked() {
    this._pushIdBlocked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pushIdBlockedInput() {
    return this._pushIdBlocked;
  }

  // qpack_decoder_stream_error - computed: false, optional: true, required: false
  private _qpackDecoderStreamError?: number; 
  public get qpackDecoderStreamError() {
    return this.getNumberAttribute('qpack_decoder_stream_error');
  }
  public set qpackDecoderStreamError(value: number) {
    this._qpackDecoderStreamError = value;
  }
  public resetQpackDecoderStreamError() {
    this._qpackDecoderStreamError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qpackDecoderStreamErrorInput() {
    return this._qpackDecoderStreamError;
  }

  // qpack_decompression_failed - computed: false, optional: true, required: false
  private _qpackDecompressionFailed?: number; 
  public get qpackDecompressionFailed() {
    return this.getNumberAttribute('qpack_decompression_failed');
  }
  public set qpackDecompressionFailed(value: number) {
    this._qpackDecompressionFailed = value;
  }
  public resetQpackDecompressionFailed() {
    this._qpackDecompressionFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qpackDecompressionFailedInput() {
    return this._qpackDecompressionFailed;
  }

  // qpack_encoder_stream_error - computed: false, optional: true, required: false
  private _qpackEncoderStreamError?: number; 
  public get qpackEncoderStreamError() {
    return this.getNumberAttribute('qpack_encoder_stream_error');
  }
  public set qpackEncoderStreamError(value: number) {
    this._qpackEncoderStreamError = value;
  }
  public resetQpackEncoderStreamError() {
    this._qpackEncoderStreamError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qpackEncoderStreamErrorInput() {
    return this._qpackEncoderStreamError;
  }

  // qpack_fatal - computed: false, optional: true, required: false
  private _qpackFatal?: number; 
  public get qpackFatal() {
    return this.getNumberAttribute('qpack_fatal');
  }
  public set qpackFatal(value: number) {
    this._qpackFatal = value;
  }
  public resetQpackFatal() {
    this._qpackFatal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qpackFatalInput() {
    return this._qpackFatal;
  }

  // qpack_header_too_large - computed: false, optional: true, required: false
  private _qpackHeaderTooLarge?: number; 
  public get qpackHeaderTooLarge() {
    return this.getNumberAttribute('qpack_header_too_large');
  }
  public set qpackHeaderTooLarge(value: number) {
    this._qpackHeaderTooLarge = value;
  }
  public resetQpackHeaderTooLarge() {
    this._qpackHeaderTooLarge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qpackHeaderTooLargeInput() {
    return this._qpackHeaderTooLarge;
  }

  // remove_http_header - computed: false, optional: true, required: false
  private _removeHttpHeader?: number; 
  public get removeHttpHeader() {
    return this.getNumberAttribute('remove_http_header');
  }
  public set removeHttpHeader(value: number) {
    this._removeHttpHeader = value;
  }
  public resetRemoveHttpHeader() {
    this._removeHttpHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeHttpHeaderInput() {
    return this._removeHttpHeader;
  }

  // server_conn_curr - computed: false, optional: true, required: false
  private _serverConnCurr?: number; 
  public get serverConnCurr() {
    return this.getNumberAttribute('server_conn_curr');
  }
  public set serverConnCurr(value: number) {
    this._serverConnCurr = value;
  }
  public resetServerConnCurr() {
    this._serverConnCurr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConnCurrInput() {
    return this._serverConnCurr;
  }

  // server_conn_peak - computed: false, optional: true, required: false
  private _serverConnPeak?: number; 
  public get serverConnPeak() {
    return this.getNumberAttribute('server_conn_peak');
  }
  public set serverConnPeak(value: number) {
    this._serverConnPeak = value;
  }
  public resetServerConnPeak() {
    this._serverConnPeak = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConnPeakInput() {
    return this._serverConnPeak;
  }

  // server_conn_total - computed: false, optional: true, required: false
  private _serverConnTotal?: number; 
  public get serverConnTotal() {
    return this.getNumberAttribute('server_conn_total');
  }
  public set serverConnTotal(value: number) {
    this._serverConnTotal = value;
  }
  public resetServerConnTotal() {
    this._serverConnTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConnTotalInput() {
    return this._serverConnTotal;
  }

  // server_data_bytes_rcvd - computed: false, optional: true, required: false
  private _serverDataBytesRcvd?: number; 
  public get serverDataBytesRcvd() {
    return this.getNumberAttribute('server_data_bytes_rcvd');
  }
  public set serverDataBytesRcvd(value: number) {
    this._serverDataBytesRcvd = value;
  }
  public resetServerDataBytesRcvd() {
    this._serverDataBytesRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverDataBytesRcvdInput() {
    return this._serverDataBytesRcvd;
  }

  // server_data_bytes_sent - computed: false, optional: true, required: false
  private _serverDataBytesSent?: number; 
  public get serverDataBytesSent() {
    return this.getNumberAttribute('server_data_bytes_sent');
  }
  public set serverDataBytesSent(value: number) {
    this._serverDataBytesSent = value;
  }
  public resetServerDataBytesSent() {
    this._serverDataBytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverDataBytesSentInput() {
    return this._serverDataBytesSent;
  }

  // server_data_frames_to_app - computed: false, optional: true, required: false
  private _serverDataFramesToApp?: number; 
  public get serverDataFramesToApp() {
    return this.getNumberAttribute('server_data_frames_to_app');
  }
  public set serverDataFramesToApp(value: number) {
    this._serverDataFramesToApp = value;
  }
  public resetServerDataFramesToApp() {
    this._serverDataFramesToApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverDataFramesToAppInput() {
    return this._serverDataFramesToApp;
  }

  // server_frame_type_cancel_push_rcvd - computed: false, optional: true, required: false
  private _serverFrameTypeCancelPushRcvd?: number; 
  public get serverFrameTypeCancelPushRcvd() {
    return this.getNumberAttribute('server_frame_type_cancel_push_rcvd');
  }
  public set serverFrameTypeCancelPushRcvd(value: number) {
    this._serverFrameTypeCancelPushRcvd = value;
  }
  public resetServerFrameTypeCancelPushRcvd() {
    this._serverFrameTypeCancelPushRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFrameTypeCancelPushRcvdInput() {
    return this._serverFrameTypeCancelPushRcvd;
  }

  // server_frame_type_cancel_push_sent - computed: false, optional: true, required: false
  private _serverFrameTypeCancelPushSent?: number; 
  public get serverFrameTypeCancelPushSent() {
    return this.getNumberAttribute('server_frame_type_cancel_push_sent');
  }
  public set serverFrameTypeCancelPushSent(value: number) {
    this._serverFrameTypeCancelPushSent = value;
  }
  public resetServerFrameTypeCancelPushSent() {
    this._serverFrameTypeCancelPushSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFrameTypeCancelPushSentInput() {
    return this._serverFrameTypeCancelPushSent;
  }

  // server_frame_type_data_rcvd - computed: false, optional: true, required: false
  private _serverFrameTypeDataRcvd?: number; 
  public get serverFrameTypeDataRcvd() {
    return this.getNumberAttribute('server_frame_type_data_rcvd');
  }
  public set serverFrameTypeDataRcvd(value: number) {
    this._serverFrameTypeDataRcvd = value;
  }
  public resetServerFrameTypeDataRcvd() {
    this._serverFrameTypeDataRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFrameTypeDataRcvdInput() {
    return this._serverFrameTypeDataRcvd;
  }

  // server_frame_type_data_sent - computed: false, optional: true, required: false
  private _serverFrameTypeDataSent?: number; 
  public get serverFrameTypeDataSent() {
    return this.getNumberAttribute('server_frame_type_data_sent');
  }
  public set serverFrameTypeDataSent(value: number) {
    this._serverFrameTypeDataSent = value;
  }
  public resetServerFrameTypeDataSent() {
    this._serverFrameTypeDataSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFrameTypeDataSentInput() {
    return this._serverFrameTypeDataSent;
  }

  // server_frame_type_goaway_rcvd - computed: false, optional: true, required: false
  private _serverFrameTypeGoawayRcvd?: number; 
  public get serverFrameTypeGoawayRcvd() {
    return this.getNumberAttribute('server_frame_type_goaway_rcvd');
  }
  public set serverFrameTypeGoawayRcvd(value: number) {
    this._serverFrameTypeGoawayRcvd = value;
  }
  public resetServerFrameTypeGoawayRcvd() {
    this._serverFrameTypeGoawayRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFrameTypeGoawayRcvdInput() {
    return this._serverFrameTypeGoawayRcvd;
  }

  // server_frame_type_goaway_sent - computed: false, optional: true, required: false
  private _serverFrameTypeGoawaySent?: number; 
  public get serverFrameTypeGoawaySent() {
    return this.getNumberAttribute('server_frame_type_goaway_sent');
  }
  public set serverFrameTypeGoawaySent(value: number) {
    this._serverFrameTypeGoawaySent = value;
  }
  public resetServerFrameTypeGoawaySent() {
    this._serverFrameTypeGoawaySent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFrameTypeGoawaySentInput() {
    return this._serverFrameTypeGoawaySent;
  }

  // server_frame_type_headers_rcvd - computed: false, optional: true, required: false
  private _serverFrameTypeHeadersRcvd?: number; 
  public get serverFrameTypeHeadersRcvd() {
    return this.getNumberAttribute('server_frame_type_headers_rcvd');
  }
  public set serverFrameTypeHeadersRcvd(value: number) {
    this._serverFrameTypeHeadersRcvd = value;
  }
  public resetServerFrameTypeHeadersRcvd() {
    this._serverFrameTypeHeadersRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFrameTypeHeadersRcvdInput() {
    return this._serverFrameTypeHeadersRcvd;
  }

  // server_frame_type_headers_sent - computed: false, optional: true, required: false
  private _serverFrameTypeHeadersSent?: number; 
  public get serverFrameTypeHeadersSent() {
    return this.getNumberAttribute('server_frame_type_headers_sent');
  }
  public set serverFrameTypeHeadersSent(value: number) {
    this._serverFrameTypeHeadersSent = value;
  }
  public resetServerFrameTypeHeadersSent() {
    this._serverFrameTypeHeadersSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFrameTypeHeadersSentInput() {
    return this._serverFrameTypeHeadersSent;
  }

  // server_frame_type_max_push_id_rcvd - computed: false, optional: true, required: false
  private _serverFrameTypeMaxPushIdRcvd?: number; 
  public get serverFrameTypeMaxPushIdRcvd() {
    return this.getNumberAttribute('server_frame_type_max_push_id_rcvd');
  }
  public set serverFrameTypeMaxPushIdRcvd(value: number) {
    this._serverFrameTypeMaxPushIdRcvd = value;
  }
  public resetServerFrameTypeMaxPushIdRcvd() {
    this._serverFrameTypeMaxPushIdRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFrameTypeMaxPushIdRcvdInput() {
    return this._serverFrameTypeMaxPushIdRcvd;
  }

  // server_frame_type_max_push_id_sent - computed: false, optional: true, required: false
  private _serverFrameTypeMaxPushIdSent?: number; 
  public get serverFrameTypeMaxPushIdSent() {
    return this.getNumberAttribute('server_frame_type_max_push_id_sent');
  }
  public set serverFrameTypeMaxPushIdSent(value: number) {
    this._serverFrameTypeMaxPushIdSent = value;
  }
  public resetServerFrameTypeMaxPushIdSent() {
    this._serverFrameTypeMaxPushIdSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFrameTypeMaxPushIdSentInput() {
    return this._serverFrameTypeMaxPushIdSent;
  }

  // server_frame_type_push_promise_rcvd - computed: false, optional: true, required: false
  private _serverFrameTypePushPromiseRcvd?: number; 
  public get serverFrameTypePushPromiseRcvd() {
    return this.getNumberAttribute('server_frame_type_push_promise_rcvd');
  }
  public set serverFrameTypePushPromiseRcvd(value: number) {
    this._serverFrameTypePushPromiseRcvd = value;
  }
  public resetServerFrameTypePushPromiseRcvd() {
    this._serverFrameTypePushPromiseRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFrameTypePushPromiseRcvdInput() {
    return this._serverFrameTypePushPromiseRcvd;
  }

  // server_frame_type_push_promise_sent - computed: false, optional: true, required: false
  private _serverFrameTypePushPromiseSent?: number; 
  public get serverFrameTypePushPromiseSent() {
    return this.getNumberAttribute('server_frame_type_push_promise_sent');
  }
  public set serverFrameTypePushPromiseSent(value: number) {
    this._serverFrameTypePushPromiseSent = value;
  }
  public resetServerFrameTypePushPromiseSent() {
    this._serverFrameTypePushPromiseSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFrameTypePushPromiseSentInput() {
    return this._serverFrameTypePushPromiseSent;
  }

  // server_frame_type_settings_rcvd - computed: false, optional: true, required: false
  private _serverFrameTypeSettingsRcvd?: number; 
  public get serverFrameTypeSettingsRcvd() {
    return this.getNumberAttribute('server_frame_type_settings_rcvd');
  }
  public set serverFrameTypeSettingsRcvd(value: number) {
    this._serverFrameTypeSettingsRcvd = value;
  }
  public resetServerFrameTypeSettingsRcvd() {
    this._serverFrameTypeSettingsRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFrameTypeSettingsRcvdInput() {
    return this._serverFrameTypeSettingsRcvd;
  }

  // server_frame_type_settings_sent - computed: false, optional: true, required: false
  private _serverFrameTypeSettingsSent?: number; 
  public get serverFrameTypeSettingsSent() {
    return this.getNumberAttribute('server_frame_type_settings_sent');
  }
  public set serverFrameTypeSettingsSent(value: number) {
    this._serverFrameTypeSettingsSent = value;
  }
  public resetServerFrameTypeSettingsSent() {
    this._serverFrameTypeSettingsSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFrameTypeSettingsSentInput() {
    return this._serverFrameTypeSettingsSent;
  }

  // server_frame_type_unknown_rcvd - computed: false, optional: true, required: false
  private _serverFrameTypeUnknownRcvd?: number; 
  public get serverFrameTypeUnknownRcvd() {
    return this.getNumberAttribute('server_frame_type_unknown_rcvd');
  }
  public set serverFrameTypeUnknownRcvd(value: number) {
    this._serverFrameTypeUnknownRcvd = value;
  }
  public resetServerFrameTypeUnknownRcvd() {
    this._serverFrameTypeUnknownRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFrameTypeUnknownRcvdInput() {
    return this._serverFrameTypeUnknownRcvd;
  }

  // server_header_bytes_rcvd - computed: false, optional: true, required: false
  private _serverHeaderBytesRcvd?: number; 
  public get serverHeaderBytesRcvd() {
    return this.getNumberAttribute('server_header_bytes_rcvd');
  }
  public set serverHeaderBytesRcvd(value: number) {
    this._serverHeaderBytesRcvd = value;
  }
  public resetServerHeaderBytesRcvd() {
    this._serverHeaderBytesRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverHeaderBytesRcvdInput() {
    return this._serverHeaderBytesRcvd;
  }

  // server_header_bytes_sent - computed: false, optional: true, required: false
  private _serverHeaderBytesSent?: number; 
  public get serverHeaderBytesSent() {
    return this.getNumberAttribute('server_header_bytes_sent');
  }
  public set serverHeaderBytesSent(value: number) {
    this._serverHeaderBytesSent = value;
  }
  public resetServerHeaderBytesSent() {
    this._serverHeaderBytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverHeaderBytesSentInput() {
    return this._serverHeaderBytesSent;
  }

  // server_header_frames_to_app - computed: false, optional: true, required: false
  private _serverHeaderFramesToApp?: number; 
  public get serverHeaderFramesToApp() {
    return this.getNumberAttribute('server_header_frames_to_app');
  }
  public set serverHeaderFramesToApp(value: number) {
    this._serverHeaderFramesToApp = value;
  }
  public resetServerHeaderFramesToApp() {
    this._serverHeaderFramesToApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverHeaderFramesToAppInput() {
    return this._serverHeaderFramesToApp;
  }

  // server_heading_bytes_rcvd - computed: false, optional: true, required: false
  private _serverHeadingBytesRcvd?: number; 
  public get serverHeadingBytesRcvd() {
    return this.getNumberAttribute('server_heading_bytes_rcvd');
  }
  public set serverHeadingBytesRcvd(value: number) {
    this._serverHeadingBytesRcvd = value;
  }
  public resetServerHeadingBytesRcvd() {
    this._serverHeadingBytesRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverHeadingBytesRcvdInput() {
    return this._serverHeadingBytesRcvd;
  }

  // server_heading_bytes_sent - computed: false, optional: true, required: false
  private _serverHeadingBytesSent?: number; 
  public get serverHeadingBytesSent() {
    return this.getNumberAttribute('server_heading_bytes_sent');
  }
  public set serverHeadingBytesSent(value: number) {
    this._serverHeadingBytesSent = value;
  }
  public resetServerHeadingBytesSent() {
    this._serverHeadingBytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverHeadingBytesSentInput() {
    return this._serverHeadingBytesSent;
  }

  // server_other_frame_bytes_rcvd - computed: false, optional: true, required: false
  private _serverOtherFrameBytesRcvd?: number; 
  public get serverOtherFrameBytesRcvd() {
    return this.getNumberAttribute('server_other_frame_bytes_rcvd');
  }
  public set serverOtherFrameBytesRcvd(value: number) {
    this._serverOtherFrameBytesRcvd = value;
  }
  public resetServerOtherFrameBytesRcvd() {
    this._serverOtherFrameBytesRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverOtherFrameBytesRcvdInput() {
    return this._serverOtherFrameBytesRcvd;
  }

  // server_other_frame_bytes_sent - computed: false, optional: true, required: false
  private _serverOtherFrameBytesSent?: number; 
  public get serverOtherFrameBytesSent() {
    return this.getNumberAttribute('server_other_frame_bytes_sent');
  }
  public set serverOtherFrameBytesSent(value: number) {
    this._serverOtherFrameBytesSent = value;
  }
  public resetServerOtherFrameBytesSent() {
    this._serverOtherFrameBytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverOtherFrameBytesSentInput() {
    return this._serverOtherFrameBytesSent;
  }

  // server_request_other_curr - computed: false, optional: true, required: false
  private _serverRequestOtherCurr?: number; 
  public get serverRequestOtherCurr() {
    return this.getNumberAttribute('server_request_other_curr');
  }
  public set serverRequestOtherCurr(value: number) {
    this._serverRequestOtherCurr = value;
  }
  public resetServerRequestOtherCurr() {
    this._serverRequestOtherCurr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRequestOtherCurrInput() {
    return this._serverRequestOtherCurr;
  }

  // server_request_other_total - computed: false, optional: true, required: false
  private _serverRequestOtherTotal?: number; 
  public get serverRequestOtherTotal() {
    return this.getNumberAttribute('server_request_other_total');
  }
  public set serverRequestOtherTotal(value: number) {
    this._serverRequestOtherTotal = value;
  }
  public resetServerRequestOtherTotal() {
    this._serverRequestOtherTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRequestOtherTotalInput() {
    return this._serverRequestOtherTotal;
  }

  // server_request_push_curr - computed: false, optional: true, required: false
  private _serverRequestPushCurr?: number; 
  public get serverRequestPushCurr() {
    return this.getNumberAttribute('server_request_push_curr');
  }
  public set serverRequestPushCurr(value: number) {
    this._serverRequestPushCurr = value;
  }
  public resetServerRequestPushCurr() {
    this._serverRequestPushCurr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRequestPushCurrInput() {
    return this._serverRequestPushCurr;
  }

  // server_request_push_total - computed: false, optional: true, required: false
  private _serverRequestPushTotal?: number; 
  public get serverRequestPushTotal() {
    return this.getNumberAttribute('server_request_push_total');
  }
  public set serverRequestPushTotal(value: number) {
    this._serverRequestPushTotal = value;
  }
  public resetServerRequestPushTotal() {
    this._serverRequestPushTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRequestPushTotalInput() {
    return this._serverRequestPushTotal;
  }

  // server_request_streams_curr - computed: false, optional: true, required: false
  private _serverRequestStreamsCurr?: number; 
  public get serverRequestStreamsCurr() {
    return this.getNumberAttribute('server_request_streams_curr');
  }
  public set serverRequestStreamsCurr(value: number) {
    this._serverRequestStreamsCurr = value;
  }
  public resetServerRequestStreamsCurr() {
    this._serverRequestStreamsCurr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRequestStreamsCurrInput() {
    return this._serverRequestStreamsCurr;
  }

  // server_request_streams_total - computed: false, optional: true, required: false
  private _serverRequestStreamsTotal?: number; 
  public get serverRequestStreamsTotal() {
    return this.getNumberAttribute('server_request_streams_total');
  }
  public set serverRequestStreamsTotal(value: number) {
    this._serverRequestStreamsTotal = value;
  }
  public resetServerRequestStreamsTotal() {
    this._serverRequestStreamsTotal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRequestStreamsTotalInput() {
    return this._serverRequestStreamsTotal;
  }

  // server_total_bytes_rcvd - computed: false, optional: true, required: false
  private _serverTotalBytesRcvd?: number; 
  public get serverTotalBytesRcvd() {
    return this.getNumberAttribute('server_total_bytes_rcvd');
  }
  public set serverTotalBytesRcvd(value: number) {
    this._serverTotalBytesRcvd = value;
  }
  public resetServerTotalBytesRcvd() {
    this._serverTotalBytesRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTotalBytesRcvdInput() {
    return this._serverTotalBytesRcvd;
  }

  // server_total_bytes_sent - computed: false, optional: true, required: false
  private _serverTotalBytesSent?: number; 
  public get serverTotalBytesSent() {
    return this.getNumberAttribute('server_total_bytes_sent');
  }
  public set serverTotalBytesSent(value: number) {
    this._serverTotalBytesSent = value;
  }
  public resetServerTotalBytesSent() {
    this._serverTotalBytesSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTotalBytesSentInput() {
    return this._serverTotalBytesSent;
  }

  // stream_in_use - computed: false, optional: true, required: false
  private _streamInUse?: number; 
  public get streamInUse() {
    return this.getNumberAttribute('stream_in_use');
  }
  public set streamInUse(value: number) {
    this._streamInUse = value;
  }
  public resetStreamInUse() {
    this._streamInUse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamInUseInput() {
    return this._streamInUse;
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

  // too_late - computed: false, optional: true, required: false
  private _tooLate?: number; 
  public get tooLate() {
    return this.getNumberAttribute('too_late');
  }
  public set tooLate(value: number) {
    this._tooLate = value;
  }
  public resetTooLate() {
    this._tooLate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooLateInput() {
    return this._tooLate;
  }

  // wouldblock - computed: false, optional: true, required: false
  private _wouldblock?: number; 
  public get wouldblock() {
    return this.getNumberAttribute('wouldblock');
  }
  public set wouldblock(value: number) {
    this._wouldblock = value;
  }
  public resetWouldblock() {
    this._wouldblock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wouldblockInput() {
    return this._wouldblock;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats thunder_slb_http3_stats}
*/
export class DataThunderSlbHttp3Stats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_http3_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbHttp3Stats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbHttp3Stats to import
  * @param importFromId The id of the existing DataThunderSlbHttp3Stats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbHttp3Stats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_http3_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_http3_stats thunder_slb_http3_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbHttp3StatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbHttp3StatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_http3_stats',
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
  private _stats = new DataThunderSlbHttp3StatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbHttp3StatsStats) {
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
      stats: dataThunderSlbHttp3StatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSlbHttp3StatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbHttp3StatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
