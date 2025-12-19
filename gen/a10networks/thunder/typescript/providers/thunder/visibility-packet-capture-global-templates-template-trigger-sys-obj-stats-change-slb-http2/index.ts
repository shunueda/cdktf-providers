// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2AConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#template_name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#template_name}
  */
  readonly templateName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsIncA {
  /**
  * Enable automatic packet-capture for Alloc Fail - Total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#alloc_fail_total VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#alloc_fail_total}
  */
  readonly allocFailTotal?: number;
  /**
  * Enable automatic packet-capture for Bad Connection Preface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#bad_connection_preface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#bad_connection_preface}
  */
  readonly badConnectionPreface?: number;
  /**
  * Enable automatic packet-capture for Bad frame type for stream state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#bad_frame_type_for_stream_state VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#bad_frame_type_for_stream_state}
  */
  readonly badFrameTypeForStreamState?: number;
  /**
  * Enable automatic packet-capture for Buff alloc error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#buff_alloc_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#buff_alloc_error}
  */
  readonly buffAllocError?: number;
  /**
  * Enable automatic packet-capture for cancel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#cancel VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#cancel}
  */
  readonly cancel?: number;
  /**
  * Enable automatic packet-capture for Cant allocate control frame
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#cant_allocate_control_frame VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#cant_allocate_control_frame}
  */
  readonly cantAllocateControlFrame?: number;
  /**
  * Enable automatic packet-capture for Cant allocate GOAWAY frame
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#cant_allocate_goaway_frame VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#cant_allocate_goaway_frame}
  */
  readonly cantAllocateGoawayFrame?: number;
  /**
  * Enable automatic packet-capture for Cant allocate PING frame
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#cant_allocate_ping_frame VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#cant_allocate_ping_frame}
  */
  readonly cantAllocatePingFrame?: number;
  /**
  * Enable automatic packet-capture for Cant allocate RST_STREAM frame
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#cant_allocate_rst_frame VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#cant_allocate_rst_frame}
  */
  readonly cantAllocateRstFrame?: number;
  /**
  * Enable automatic packet-capture for Cant allocate SETTINGS frame
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#cant_allocate_settings_frame VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#cant_allocate_settings_frame}
  */
  readonly cantAllocateSettingsFrame?: number;
  /**
  * Enable automatic packet-capture for Cant allocate stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#cant_allocate_stream VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#cant_allocate_stream}
  */
  readonly cantAllocateStream?: number;
  /**
  * Enable automatic packet-capture for Cant allocate WINDOW_UPDATE frame
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#cant_allocate_window_frame VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#cant_allocate_window_frame}
  */
  readonly cantAllocateWindowFrame?: number;
  /**
  * Enable automatic packet-capture for Unexpected frame received in closed state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#closed_state_unexpected_frame VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#closed_state_unexpected_frame}
  */
  readonly closedStateUnexpectedFrame?: number;
  /**
  * Enable automatic packet-capture for compression error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#compression_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#compression_error}
  */
  readonly compressionError?: number;
  /**
  * Enable automatic packet-capture for connect error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#connect_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#connect_error}
  */
  readonly connectError?: number;
  /**
  * Enable automatic packet-capture for CONTINUATION frame with no headers frame
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#continuation_before_headers VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#continuation_before_headers}
  */
  readonly continuationBeforeHeaders?: number;
  /**
  * Enable automatic packet-capture for DATA Frame Rcvd on non-existent stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#data_no_stream VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#data_no_stream}
  */
  readonly dataNoStream?: number;
  /**
  * Enable automatic packet-capture for Data Queue Alloc Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#data_queue_alloc_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#data_queue_alloc_error}
  */
  readonly dataQueueAllocError?: number;
  /**
  * Enable automatic packet-capture for deflate alloc fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#deflate_alloc_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#deflate_alloc_fail}
  */
  readonly deflateAllocFail?: number;
  /**
  * Enable automatic packet-capture for enhance your calm error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#enhance_your_calm VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#enhance_your_calm}
  */
  readonly enhanceYourCalm?: number;
  /**
  * Enable automatic packet-capture for Error Rcvd - Total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#err_rcvd_total VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#err_rcvd_total}
  */
  readonly errRcvdTotal?: number;
  /**
  * Enable automatic packet-capture for Error Sent - CANCEL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#err_sent_cancel VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#err_sent_cancel}
  */
  readonly errSentCancel?: number;
  /**
  * Enable automatic packet-capture for Error Sent - COMPRESSION_ERROR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#err_sent_compression_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#err_sent_compression_err}
  */
  readonly errSentCompressionErr?: number;
  /**
  * Enable automatic packet-capture for Error Sent - CONNECT_ERROR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#err_sent_connect_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#err_sent_connect_err}
  */
  readonly errSentConnectErr?: number;
  /**
  * Enable automatic packet-capture for Error Sent - FLOW_CONTROL_ERROR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#err_sent_flow_control VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#err_sent_flow_control}
  */
  readonly errSentFlowControl?: number;
  /**
  * Enable automatic packet-capture for Error Sent - FRAME_SIZE_ERROR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#err_sent_frame_size_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#err_sent_frame_size_err}
  */
  readonly errSentFrameSizeErr?: number;
  /**
  * Enable automatic packet-capture for Error Sent - HTTP_1_1_REQUIRED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#err_sent_http11_required VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#err_sent_http11_required}
  */
  readonly errSentHttp11Required?: number;
  /**
  * Enable automatic packet-capture for Error Sent - INADEQUATE_SECURITY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#err_sent_inadequate_security VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#err_sent_inadequate_security}
  */
  readonly errSentInadequateSecurity?: number;
  /**
  * Enable automatic packet-capture for Error Sent - INTERNAL_ERROR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#err_sent_internal_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#err_sent_internal_err}
  */
  readonly errSentInternalErr?: number;
  /**
  * Enable automatic packet-capture for Error Sent - PROTOCOL_ERROR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#err_sent_proto_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#err_sent_proto_err}
  */
  readonly errSentProtoErr?: number;
  /**
  * Enable automatic packet-capture for Error Sent - REFUSED_STREAM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#err_sent_refused_stream VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#err_sent_refused_stream}
  */
  readonly errSentRefusedStream?: number;
  /**
  * Enable automatic packet-capture for Error Sent - SETTINGS_TIMEOUT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#err_sent_setting_timeout VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#err_sent_setting_timeout}
  */
  readonly errSentSettingTimeout?: number;
  /**
  * Enable automatic packet-capture for Error Sent - STREAM_CLOSED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#err_sent_stream_closed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#err_sent_stream_closed}
  */
  readonly errSentStreamClosed?: number;
  /**
  * Enable automatic packet-capture for Error Rent - Total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#err_sent_total VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#err_sent_total}
  */
  readonly errSentTotal?: number;
  /**
  * Enable automatic packet-capture for Error Sent - ENHANCE_YOUR_CALM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#err_sent_your_calm VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#err_sent_your_calm}
  */
  readonly errSentYourCalm?: number;
  /**
  * Enable automatic packet-capture for Max Invalid Stream Rcvd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#error_max_invalid_stream VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#error_max_invalid_stream}
  */
  readonly errorMaxInvalidStream?: number;
  /**
  * Enable automatic packet-capture for Window Update with increment that results in exceeding max window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#exceeds_max_window_size_stream VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#exceeds_max_window_size_stream}
  */
  readonly exceedsMaxWindowSizeStream?: number;
  /**
  * Enable automatic packet-capture for Flow Control Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#flow_control_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#flow_control_error}
  */
  readonly flowControlError?: number;
  /**
  * Enable automatic packet-capture for Frame Size Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#frame_size_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#frame_size_error}
  */
  readonly frameSizeError?: number;
  /**
  * Enable automatic packet-capture for Unexpected frame received in half closed remote state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#half_closed_remote_state_unexpected_fra VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#half_closed_remote_state_unexpected_fra}
  */
  readonly halfClosedRemoteStateUnexpectedFra?: number;
  /**
  * Enable automatic packet-capture for header no stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#header_no_stream VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#header_no_stream}
  */
  readonly headerNoStream?: number;
  /**
  * Enable automatic packet-capture for Header padlen greater than frame payload size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#header_padlen_gt_frame_payload VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#header_padlen_gt_frame_payload}
  */
  readonly headerPadlenGtFramePayload?: number;
  /**
  * Enable automatic packet-capture for headers frame before CONTINUATION was complete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#headers_after_continuation VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#headers_after_continuation}
  */
  readonly headersAfterContinuation?: number;
  /**
  * Enable automatic packet-capture for headers interleaved on streams
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#headers_interleaved VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#headers_interleaved}
  */
  readonly headersInterleaved?: number;
  /**
  * Enable automatic packet-capture for HTTP1.1 Required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#http_1_1_required VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#http_1_1_required}
  */
  readonly http11Required?: number;
  /**
  * Enable automatic packet-capture for Unxpected frame received in idle state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#idle_state_unexpected_frame VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#idle_state_unexpected_frame}
  */
  readonly idleStateUnexpectedFrame?: number;
  /**
  * Enable automatic packet-capture for inadequate security
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#inadequate_security VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#inadequate_security}
  */
  readonly inadequateSecurity?: number;
  /**
  * Enable automatic packet-capture for inflate alloc fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#inflate_alloc_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#inflate_alloc_fail}
  */
  readonly inflateAllocFail?: number;
  /**
  * Enable automatic packet-capture for Inflate Header Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#inflate_header_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#inflate_header_fail}
  */
  readonly inflateHeaderFail?: number;
  /**
  * Enable automatic packet-capture for Internal Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#internal_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#internal_error}
  */
  readonly internalError?: number;
  /**
  * Enable automatic packet-capture for frame before headers were complete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#invalid_frame_during_headers VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#invalid_frame_during_headers}
  */
  readonly invalidFrameDuringHeaders?: number;
  /**
  * Enable automatic packet-capture for Invalid Frame Size Rcvd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#invalid_frame_size VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#invalid_frame_size}
  */
  readonly invalidFrameSize?: number;
  /**
  * Enable automatic packet-capture for unexpected PUSH_PROMISE frame
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#invalid_push_promise VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#invalid_push_promise}
  */
  readonly invalidPushPromise?: number;
  /**
  * Enable automatic packet-capture for invalid setting-frame value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#invalid_setting_value VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#invalid_setting_value}
  */
  readonly invalidSettingValue?: number;
  /**
  * Enable automatic packet-capture for received invalid stream ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#invalid_stream_id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#invalid_stream_id}
  */
  readonly invalidStreamId?: number;
  /**
  * Enable automatic packet-capture for window-update value out of range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#invalid_window_update VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#invalid_window_update}
  */
  readonly invalidWindowUpdate?: number;
  /**
  * Enable automatic packet-capture for Protocol Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#protocol_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#protocol_error}
  */
  readonly protocolError?: number;
  /**
  * Enable automatic packet-capture for HTTP2 Proxy alloc Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#proxy_alloc_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#proxy_alloc_error}
  */
  readonly proxyAllocError?: number;
  /**
  * Enable automatic packet-capture for Refused Stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#refused_stream VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#refused_stream}
  */
  readonly refusedStream?: number;
  /**
  * Enable automatic packet-capture for Unexpected frame received in reserved local state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#reserved_local_state_unexpected_frame VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#reserved_local_state_unexpected_frame}
  */
  readonly reservedLocalStateUnexpectedFrame?: number;
  /**
  * Enable automatic packet-capture for Unexpected frame received in reserved remote state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#reserved_remote_state_unexpected_frame VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#reserved_remote_state_unexpected_frame}
  */
  readonly reservedRemoteStateUnexpectedFrame?: number;
  /**
  * Enable automatic packet-capture for Settings Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#settings_timeout VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#settings_timeout}
  */
  readonly settingsTimeout?: number;
  /**
  * Enable automatic packet-capture for Splitting Buffer Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#split_buff_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#split_buff_fail}
  */
  readonly splitBuffFail?: number;
  /**
  * Enable automatic packet-capture for Streams greater than max allowed concurrent streams
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#streams_gt_max_concur_streams VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#streams_gt_max_concur_streams}
  */
  readonly streamsGtMaxConcurStreams?: number;
  /**
  * Enable automatic packet-capture for trailers not marked as end-of-stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#trailers_no_end_stream VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#trailers_no_end_stream}
  */
  readonly trailersNoEndStream?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#uuid}
  */
  readonly uuid?: string;
  /**
  * Enable automatic packet-capture for Wrong Stream State
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#wrong_stream_state VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#wrong_stream_state}
  */
  readonly wrongStreamState?: number;
  /**
  * Enable automatic packet-capture for Window Update with zero increment rcvd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#zero_window_size_on_stream VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#zero_window_size_on_stream}
  */
  readonly zeroWindowSizeOnStream?: number;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsIncA): any {
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
    continuation_before_headers: cdktf.numberToTerraform(struct!.continuationBeforeHeaders),
    data_no_stream: cdktf.numberToTerraform(struct!.dataNoStream),
    data_queue_alloc_error: cdktf.numberToTerraform(struct!.dataQueueAllocError),
    deflate_alloc_fail: cdktf.numberToTerraform(struct!.deflateAllocFail),
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
    frame_size_error: cdktf.numberToTerraform(struct!.frameSizeError),
    half_closed_remote_state_unexpected_fra: cdktf.numberToTerraform(struct!.halfClosedRemoteStateUnexpectedFra),
    header_no_stream: cdktf.numberToTerraform(struct!.headerNoStream),
    header_padlen_gt_frame_payload: cdktf.numberToTerraform(struct!.headerPadlenGtFramePayload),
    headers_after_continuation: cdktf.numberToTerraform(struct!.headersAfterContinuation),
    headers_interleaved: cdktf.numberToTerraform(struct!.headersInterleaved),
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
    protocol_error: cdktf.numberToTerraform(struct!.protocolError),
    proxy_alloc_error: cdktf.numberToTerraform(struct!.proxyAllocError),
    refused_stream: cdktf.numberToTerraform(struct!.refusedStream),
    reserved_local_state_unexpected_frame: cdktf.numberToTerraform(struct!.reservedLocalStateUnexpectedFrame),
    reserved_remote_state_unexpected_frame: cdktf.numberToTerraform(struct!.reservedRemoteStateUnexpectedFrame),
    settings_timeout: cdktf.numberToTerraform(struct!.settingsTimeout),
    split_buff_fail: cdktf.numberToTerraform(struct!.splitBuffFail),
    streams_gt_max_concur_streams: cdktf.numberToTerraform(struct!.streamsGtMaxConcurStreams),
    trailers_no_end_stream: cdktf.numberToTerraform(struct!.trailersNoEndStream),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    wrong_stream_state: cdktf.numberToTerraform(struct!.wrongStreamState),
    zero_window_size_on_stream: cdktf.numberToTerraform(struct!.zeroWindowSizeOnStream),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsIncA): any {
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
    continuation_before_headers: {
      value: cdktf.numberToHclTerraform(struct!.continuationBeforeHeaders),
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
    deflate_alloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.deflateAllocFail),
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
    frame_size_error: {
      value: cdktf.numberToHclTerraform(struct!.frameSizeError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    half_closed_remote_state_unexpected_fra: {
      value: cdktf.numberToHclTerraform(struct!.halfClosedRemoteStateUnexpectedFra),
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
    headers_after_continuation: {
      value: cdktf.numberToHclTerraform(struct!.headersAfterContinuation),
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
    streams_gt_max_concur_streams: {
      value: cdktf.numberToHclTerraform(struct!.streamsGtMaxConcurStreams),
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
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsIncA | undefined {
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
    if (this._continuationBeforeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuationBeforeHeaders = this._continuationBeforeHeaders;
    }
    if (this._dataNoStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataNoStream = this._dataNoStream;
    }
    if (this._dataQueueAllocError !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataQueueAllocError = this._dataQueueAllocError;
    }
    if (this._deflateAllocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.deflateAllocFail = this._deflateAllocFail;
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
    if (this._frameSizeError !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameSizeError = this._frameSizeError;
    }
    if (this._halfClosedRemoteStateUnexpectedFra !== undefined) {
      hasAnyValues = true;
      internalValueResult.halfClosedRemoteStateUnexpectedFra = this._halfClosedRemoteStateUnexpectedFra;
    }
    if (this._headerNoStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerNoStream = this._headerNoStream;
    }
    if (this._headerPadlenGtFramePayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerPadlenGtFramePayload = this._headerPadlenGtFramePayload;
    }
    if (this._headersAfterContinuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersAfterContinuation = this._headersAfterContinuation;
    }
    if (this._headersInterleaved !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersInterleaved = this._headersInterleaved;
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
    if (this._protocolError !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolError = this._protocolError;
    }
    if (this._proxyAllocError !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyAllocError = this._proxyAllocError;
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
    if (this._settingsTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.settingsTimeout = this._settingsTimeout;
    }
    if (this._splitBuffFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitBuffFail = this._splitBuffFail;
    }
    if (this._streamsGtMaxConcurStreams !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamsGtMaxConcurStreams = this._streamsGtMaxConcurStreams;
    }
    if (this._trailersNoEndStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.trailersNoEndStream = this._trailersNoEndStream;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
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

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
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
      this._continuationBeforeHeaders = undefined;
      this._dataNoStream = undefined;
      this._dataQueueAllocError = undefined;
      this._deflateAllocFail = undefined;
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
      this._frameSizeError = undefined;
      this._halfClosedRemoteStateUnexpectedFra = undefined;
      this._headerNoStream = undefined;
      this._headerPadlenGtFramePayload = undefined;
      this._headersAfterContinuation = undefined;
      this._headersInterleaved = undefined;
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
      this._protocolError = undefined;
      this._proxyAllocError = undefined;
      this._refusedStream = undefined;
      this._reservedLocalStateUnexpectedFrame = undefined;
      this._reservedRemoteStateUnexpectedFrame = undefined;
      this._settingsTimeout = undefined;
      this._splitBuffFail = undefined;
      this._streamsGtMaxConcurStreams = undefined;
      this._trailersNoEndStream = undefined;
      this._uuid = undefined;
      this._wrongStreamState = undefined;
      this._zeroWindowSizeOnStream = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
      this._continuationBeforeHeaders = value.continuationBeforeHeaders;
      this._dataNoStream = value.dataNoStream;
      this._dataQueueAllocError = value.dataQueueAllocError;
      this._deflateAllocFail = value.deflateAllocFail;
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
      this._frameSizeError = value.frameSizeError;
      this._halfClosedRemoteStateUnexpectedFra = value.halfClosedRemoteStateUnexpectedFra;
      this._headerNoStream = value.headerNoStream;
      this._headerPadlenGtFramePayload = value.headerPadlenGtFramePayload;
      this._headersAfterContinuation = value.headersAfterContinuation;
      this._headersInterleaved = value.headersInterleaved;
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
      this._protocolError = value.protocolError;
      this._proxyAllocError = value.proxyAllocError;
      this._refusedStream = value.refusedStream;
      this._reservedLocalStateUnexpectedFrame = value.reservedLocalStateUnexpectedFrame;
      this._reservedRemoteStateUnexpectedFrame = value.reservedRemoteStateUnexpectedFrame;
      this._settingsTimeout = value.settingsTimeout;
      this._splitBuffFail = value.splitBuffFail;
      this._streamsGtMaxConcurStreams = value.streamsGtMaxConcurStreams;
      this._trailersNoEndStream = value.trailersNoEndStream;
      this._uuid = value.uuid;
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

  // half_closed_remote_state_unexpected_fra - computed: false, optional: true, required: false
  private _halfClosedRemoteStateUnexpectedFra?: number; 
  public get halfClosedRemoteStateUnexpectedFra() {
    return this.getNumberAttribute('half_closed_remote_state_unexpected_fra');
  }
  public set halfClosedRemoteStateUnexpectedFra(value: number) {
    this._halfClosedRemoteStateUnexpectedFra = value;
  }
  public resetHalfClosedRemoteStateUnexpectedFra() {
    this._halfClosedRemoteStateUnexpectedFra = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get halfClosedRemoteStateUnexpectedFraInput() {
    return this._halfClosedRemoteStateUnexpectedFra;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
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
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA {
  /**
  * Enable automatic packet-capture for Alloc Fail - Total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#alloc_fail_total VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#alloc_fail_total}
  */
  readonly allocFailTotal?: number;
  /**
  * Enable automatic packet-capture for Bad Connection Preface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#bad_connection_preface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#bad_connection_preface}
  */
  readonly badConnectionPreface?: number;
  /**
  * Enable automatic packet-capture for Bad frame type for stream state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#bad_frame_type_for_stream_state VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#bad_frame_type_for_stream_state}
  */
  readonly badFrameTypeForStreamState?: number;
  /**
  * Enable automatic packet-capture for Buff alloc error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#buff_alloc_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#buff_alloc_error}
  */
  readonly buffAllocError?: number;
  /**
  * Enable automatic packet-capture for cancel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#cancel VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#cancel}
  */
  readonly cancel?: number;
  /**
  * Enable automatic packet-capture for Cant allocate control frame
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#cant_allocate_control_frame VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#cant_allocate_control_frame}
  */
  readonly cantAllocateControlFrame?: number;
  /**
  * Enable automatic packet-capture for Cant allocate GOAWAY frame
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#cant_allocate_goaway_frame VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#cant_allocate_goaway_frame}
  */
  readonly cantAllocateGoawayFrame?: number;
  /**
  * Enable automatic packet-capture for Cant allocate PING frame
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#cant_allocate_ping_frame VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#cant_allocate_ping_frame}
  */
  readonly cantAllocatePingFrame?: number;
  /**
  * Enable automatic packet-capture for Cant allocate RST_STREAM frame
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#cant_allocate_rst_frame VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#cant_allocate_rst_frame}
  */
  readonly cantAllocateRstFrame?: number;
  /**
  * Enable automatic packet-capture for Cant allocate SETTINGS frame
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#cant_allocate_settings_frame VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#cant_allocate_settings_frame}
  */
  readonly cantAllocateSettingsFrame?: number;
  /**
  * Enable automatic packet-capture for Cant allocate stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#cant_allocate_stream VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#cant_allocate_stream}
  */
  readonly cantAllocateStream?: number;
  /**
  * Enable automatic packet-capture for Cant allocate WINDOW_UPDATE frame
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#cant_allocate_window_frame VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#cant_allocate_window_frame}
  */
  readonly cantAllocateWindowFrame?: number;
  /**
  * Enable automatic packet-capture for Unexpected frame received in closed state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#closed_state_unexpected_frame VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#closed_state_unexpected_frame}
  */
  readonly closedStateUnexpectedFrame?: number;
  /**
  * Enable automatic packet-capture for compression error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#compression_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#compression_error}
  */
  readonly compressionError?: number;
  /**
  * Enable automatic packet-capture for connect error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#connect_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#connect_error}
  */
  readonly connectError?: number;
  /**
  * Enable automatic packet-capture for CONTINUATION frame with no headers frame
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#continuation_before_headers VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#continuation_before_headers}
  */
  readonly continuationBeforeHeaders?: number;
  /**
  * Enable automatic packet-capture for DATA Frame Rcvd on non-existent stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#data_no_stream VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#data_no_stream}
  */
  readonly dataNoStream?: number;
  /**
  * Enable automatic packet-capture for Data Queue Alloc Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#data_queue_alloc_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#data_queue_alloc_error}
  */
  readonly dataQueueAllocError?: number;
  /**
  * Enable automatic packet-capture for deflate alloc fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#deflate_alloc_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#deflate_alloc_fail}
  */
  readonly deflateAllocFail?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for enhance your calm error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#enhance_your_calm VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#enhance_your_calm}
  */
  readonly enhanceYourCalm?: number;
  /**
  * Enable automatic packet-capture for Error Rcvd - Total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#err_rcvd_total VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#err_rcvd_total}
  */
  readonly errRcvdTotal?: number;
  /**
  * Enable automatic packet-capture for Error Sent - CANCEL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#err_sent_cancel VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#err_sent_cancel}
  */
  readonly errSentCancel?: number;
  /**
  * Enable automatic packet-capture for Error Sent - COMPRESSION_ERROR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#err_sent_compression_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#err_sent_compression_err}
  */
  readonly errSentCompressionErr?: number;
  /**
  * Enable automatic packet-capture for Error Sent - CONNECT_ERROR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#err_sent_connect_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#err_sent_connect_err}
  */
  readonly errSentConnectErr?: number;
  /**
  * Enable automatic packet-capture for Error Sent - FLOW_CONTROL_ERROR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#err_sent_flow_control VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#err_sent_flow_control}
  */
  readonly errSentFlowControl?: number;
  /**
  * Enable automatic packet-capture for Error Sent - FRAME_SIZE_ERROR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#err_sent_frame_size_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#err_sent_frame_size_err}
  */
  readonly errSentFrameSizeErr?: number;
  /**
  * Enable automatic packet-capture for Error Sent - HTTP_1_1_REQUIRED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#err_sent_http11_required VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#err_sent_http11_required}
  */
  readonly errSentHttp11Required?: number;
  /**
  * Enable automatic packet-capture for Error Sent - INADEQUATE_SECURITY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#err_sent_inadequate_security VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#err_sent_inadequate_security}
  */
  readonly errSentInadequateSecurity?: number;
  /**
  * Enable automatic packet-capture for Error Sent - INTERNAL_ERROR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#err_sent_internal_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#err_sent_internal_err}
  */
  readonly errSentInternalErr?: number;
  /**
  * Enable automatic packet-capture for Error Sent - PROTOCOL_ERROR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#err_sent_proto_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#err_sent_proto_err}
  */
  readonly errSentProtoErr?: number;
  /**
  * Enable automatic packet-capture for Error Sent - REFUSED_STREAM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#err_sent_refused_stream VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#err_sent_refused_stream}
  */
  readonly errSentRefusedStream?: number;
  /**
  * Enable automatic packet-capture for Error Sent - SETTINGS_TIMEOUT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#err_sent_setting_timeout VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#err_sent_setting_timeout}
  */
  readonly errSentSettingTimeout?: number;
  /**
  * Enable automatic packet-capture for Error Sent - STREAM_CLOSED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#err_sent_stream_closed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#err_sent_stream_closed}
  */
  readonly errSentStreamClosed?: number;
  /**
  * Enable automatic packet-capture for Error Rent - Total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#err_sent_total VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#err_sent_total}
  */
  readonly errSentTotal?: number;
  /**
  * Enable automatic packet-capture for Error Sent - ENHANCE_YOUR_CALM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#err_sent_your_calm VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#err_sent_your_calm}
  */
  readonly errSentYourCalm?: number;
  /**
  * Enable automatic packet-capture for Max Invalid Stream Rcvd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#error_max_invalid_stream VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#error_max_invalid_stream}
  */
  readonly errorMaxInvalidStream?: number;
  /**
  * Enable automatic packet-capture for Window Update with increment that results in exceeding max window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#exceeds_max_window_size_stream VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#exceeds_max_window_size_stream}
  */
  readonly exceedsMaxWindowSizeStream?: number;
  /**
  * Enable automatic packet-capture for Flow Control Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#flow_control_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#flow_control_error}
  */
  readonly flowControlError?: number;
  /**
  * Enable automatic packet-capture for Frame Size Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#frame_size_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#frame_size_error}
  */
  readonly frameSizeError?: number;
  /**
  * Enable automatic packet-capture for Unexpected frame received in half closed remote state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#half_closed_remote_state_unexpected_fra VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#half_closed_remote_state_unexpected_fra}
  */
  readonly halfClosedRemoteStateUnexpectedFra?: number;
  /**
  * Enable automatic packet-capture for header no stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#header_no_stream VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#header_no_stream}
  */
  readonly headerNoStream?: number;
  /**
  * Enable automatic packet-capture for Header padlen greater than frame payload size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#header_padlen_gt_frame_payload VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#header_padlen_gt_frame_payload}
  */
  readonly headerPadlenGtFramePayload?: number;
  /**
  * Enable automatic packet-capture for headers frame before CONTINUATION was complete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#headers_after_continuation VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#headers_after_continuation}
  */
  readonly headersAfterContinuation?: number;
  /**
  * Enable automatic packet-capture for headers interleaved on streams
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#headers_interleaved VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#headers_interleaved}
  */
  readonly headersInterleaved?: number;
  /**
  * Enable automatic packet-capture for HTTP1.1 Required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#http_1_1_required VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#http_1_1_required}
  */
  readonly http11Required?: number;
  /**
  * Enable automatic packet-capture for Unxpected frame received in idle state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#idle_state_unexpected_frame VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#idle_state_unexpected_frame}
  */
  readonly idleStateUnexpectedFrame?: number;
  /**
  * Enable automatic packet-capture for inadequate security
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#inadequate_security VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#inadequate_security}
  */
  readonly inadequateSecurity?: number;
  /**
  * Enable automatic packet-capture for inflate alloc fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#inflate_alloc_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#inflate_alloc_fail}
  */
  readonly inflateAllocFail?: number;
  /**
  * Enable automatic packet-capture for Inflate Header Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#inflate_header_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#inflate_header_fail}
  */
  readonly inflateHeaderFail?: number;
  /**
  * Enable automatic packet-capture for Internal Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#internal_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#internal_error}
  */
  readonly internalError?: number;
  /**
  * Enable automatic packet-capture for frame before headers were complete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#invalid_frame_during_headers VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#invalid_frame_during_headers}
  */
  readonly invalidFrameDuringHeaders?: number;
  /**
  * Enable automatic packet-capture for Invalid Frame Size Rcvd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#invalid_frame_size VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#invalid_frame_size}
  */
  readonly invalidFrameSize?: number;
  /**
  * Enable automatic packet-capture for unexpected PUSH_PROMISE frame
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#invalid_push_promise VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#invalid_push_promise}
  */
  readonly invalidPushPromise?: number;
  /**
  * Enable automatic packet-capture for invalid setting-frame value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#invalid_setting_value VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#invalid_setting_value}
  */
  readonly invalidSettingValue?: number;
  /**
  * Enable automatic packet-capture for received invalid stream ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#invalid_stream_id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#invalid_stream_id}
  */
  readonly invalidStreamId?: number;
  /**
  * Enable automatic packet-capture for window-update value out of range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#invalid_window_update VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#invalid_window_update}
  */
  readonly invalidWindowUpdate?: number;
  /**
  * Enable automatic packet-capture for Protocol Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#protocol_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#protocol_error}
  */
  readonly protocolError?: number;
  /**
  * Enable automatic packet-capture for HTTP2 Proxy alloc Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#proxy_alloc_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#proxy_alloc_error}
  */
  readonly proxyAllocError?: number;
  /**
  * Enable automatic packet-capture for Refused Stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#refused_stream VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#refused_stream}
  */
  readonly refusedStream?: number;
  /**
  * Enable automatic packet-capture for Unexpected frame received in reserved local state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#reserved_local_state_unexpected_frame VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#reserved_local_state_unexpected_frame}
  */
  readonly reservedLocalStateUnexpectedFrame?: number;
  /**
  * Enable automatic packet-capture for Unexpected frame received in reserved remote state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#reserved_remote_state_unexpected_frame VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#reserved_remote_state_unexpected_frame}
  */
  readonly reservedRemoteStateUnexpectedFrame?: number;
  /**
  * Enable automatic packet-capture for Settings Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#settings_timeout VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#settings_timeout}
  */
  readonly settingsTimeout?: number;
  /**
  * Enable automatic packet-capture for Splitting Buffer Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#split_buff_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#split_buff_fail}
  */
  readonly splitBuffFail?: number;
  /**
  * Enable automatic packet-capture for Streams greater than max allowed concurrent streams
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#streams_gt_max_concur_streams VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#streams_gt_max_concur_streams}
  */
  readonly streamsGtMaxConcurStreams?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for trailers not marked as end-of-stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#trailers_no_end_stream VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#trailers_no_end_stream}
  */
  readonly trailersNoEndStream?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#uuid}
  */
  readonly uuid?: string;
  /**
  * Enable automatic packet-capture for Wrong Stream State
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#wrong_stream_state VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#wrong_stream_state}
  */
  readonly wrongStreamState?: number;
  /**
  * Enable automatic packet-capture for Window Update with zero increment rcvd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#zero_window_size_on_stream VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A#zero_window_size_on_stream}
  */
  readonly zeroWindowSizeOnStream?: number;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA): any {
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
    continuation_before_headers: cdktf.numberToTerraform(struct!.continuationBeforeHeaders),
    data_no_stream: cdktf.numberToTerraform(struct!.dataNoStream),
    data_queue_alloc_error: cdktf.numberToTerraform(struct!.dataQueueAllocError),
    deflate_alloc_fail: cdktf.numberToTerraform(struct!.deflateAllocFail),
    duration: cdktf.numberToTerraform(struct!.duration),
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
    frame_size_error: cdktf.numberToTerraform(struct!.frameSizeError),
    half_closed_remote_state_unexpected_fra: cdktf.numberToTerraform(struct!.halfClosedRemoteStateUnexpectedFra),
    header_no_stream: cdktf.numberToTerraform(struct!.headerNoStream),
    header_padlen_gt_frame_payload: cdktf.numberToTerraform(struct!.headerPadlenGtFramePayload),
    headers_after_continuation: cdktf.numberToTerraform(struct!.headersAfterContinuation),
    headers_interleaved: cdktf.numberToTerraform(struct!.headersInterleaved),
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
    protocol_error: cdktf.numberToTerraform(struct!.protocolError),
    proxy_alloc_error: cdktf.numberToTerraform(struct!.proxyAllocError),
    refused_stream: cdktf.numberToTerraform(struct!.refusedStream),
    reserved_local_state_unexpected_frame: cdktf.numberToTerraform(struct!.reservedLocalStateUnexpectedFrame),
    reserved_remote_state_unexpected_frame: cdktf.numberToTerraform(struct!.reservedRemoteStateUnexpectedFrame),
    settings_timeout: cdktf.numberToTerraform(struct!.settingsTimeout),
    split_buff_fail: cdktf.numberToTerraform(struct!.splitBuffFail),
    streams_gt_max_concur_streams: cdktf.numberToTerraform(struct!.streamsGtMaxConcurStreams),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    trailers_no_end_stream: cdktf.numberToTerraform(struct!.trailersNoEndStream),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    wrong_stream_state: cdktf.numberToTerraform(struct!.wrongStreamState),
    zero_window_size_on_stream: cdktf.numberToTerraform(struct!.zeroWindowSizeOnStream),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA): any {
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
    continuation_before_headers: {
      value: cdktf.numberToHclTerraform(struct!.continuationBeforeHeaders),
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
    deflate_alloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.deflateAllocFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
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
    frame_size_error: {
      value: cdktf.numberToHclTerraform(struct!.frameSizeError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    half_closed_remote_state_unexpected_fra: {
      value: cdktf.numberToHclTerraform(struct!.halfClosedRemoteStateUnexpectedFra),
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
    headers_after_continuation: {
      value: cdktf.numberToHclTerraform(struct!.headersAfterContinuation),
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
    streams_gt_max_concur_streams: {
      value: cdktf.numberToHclTerraform(struct!.streamsGtMaxConcurStreams),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_exceeded_by: {
      value: cdktf.numberToHclTerraform(struct!.thresholdExceededBy),
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
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA | undefined {
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
    if (this._continuationBeforeHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.continuationBeforeHeaders = this._continuationBeforeHeaders;
    }
    if (this._dataNoStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataNoStream = this._dataNoStream;
    }
    if (this._dataQueueAllocError !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataQueueAllocError = this._dataQueueAllocError;
    }
    if (this._deflateAllocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.deflateAllocFail = this._deflateAllocFail;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
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
    if (this._frameSizeError !== undefined) {
      hasAnyValues = true;
      internalValueResult.frameSizeError = this._frameSizeError;
    }
    if (this._halfClosedRemoteStateUnexpectedFra !== undefined) {
      hasAnyValues = true;
      internalValueResult.halfClosedRemoteStateUnexpectedFra = this._halfClosedRemoteStateUnexpectedFra;
    }
    if (this._headerNoStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerNoStream = this._headerNoStream;
    }
    if (this._headerPadlenGtFramePayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerPadlenGtFramePayload = this._headerPadlenGtFramePayload;
    }
    if (this._headersAfterContinuation !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersAfterContinuation = this._headersAfterContinuation;
    }
    if (this._headersInterleaved !== undefined) {
      hasAnyValues = true;
      internalValueResult.headersInterleaved = this._headersInterleaved;
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
    if (this._protocolError !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolError = this._protocolError;
    }
    if (this._proxyAllocError !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyAllocError = this._proxyAllocError;
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
    if (this._settingsTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.settingsTimeout = this._settingsTimeout;
    }
    if (this._splitBuffFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.splitBuffFail = this._splitBuffFail;
    }
    if (this._streamsGtMaxConcurStreams !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamsGtMaxConcurStreams = this._streamsGtMaxConcurStreams;
    }
    if (this._thresholdExceededBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdExceededBy = this._thresholdExceededBy;
    }
    if (this._trailersNoEndStream !== undefined) {
      hasAnyValues = true;
      internalValueResult.trailersNoEndStream = this._trailersNoEndStream;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
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

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
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
      this._continuationBeforeHeaders = undefined;
      this._dataNoStream = undefined;
      this._dataQueueAllocError = undefined;
      this._deflateAllocFail = undefined;
      this._duration = undefined;
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
      this._frameSizeError = undefined;
      this._halfClosedRemoteStateUnexpectedFra = undefined;
      this._headerNoStream = undefined;
      this._headerPadlenGtFramePayload = undefined;
      this._headersAfterContinuation = undefined;
      this._headersInterleaved = undefined;
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
      this._protocolError = undefined;
      this._proxyAllocError = undefined;
      this._refusedStream = undefined;
      this._reservedLocalStateUnexpectedFrame = undefined;
      this._reservedRemoteStateUnexpectedFrame = undefined;
      this._settingsTimeout = undefined;
      this._splitBuffFail = undefined;
      this._streamsGtMaxConcurStreams = undefined;
      this._thresholdExceededBy = undefined;
      this._trailersNoEndStream = undefined;
      this._uuid = undefined;
      this._wrongStreamState = undefined;
      this._zeroWindowSizeOnStream = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
      this._continuationBeforeHeaders = value.continuationBeforeHeaders;
      this._dataNoStream = value.dataNoStream;
      this._dataQueueAllocError = value.dataQueueAllocError;
      this._deflateAllocFail = value.deflateAllocFail;
      this._duration = value.duration;
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
      this._frameSizeError = value.frameSizeError;
      this._halfClosedRemoteStateUnexpectedFra = value.halfClosedRemoteStateUnexpectedFra;
      this._headerNoStream = value.headerNoStream;
      this._headerPadlenGtFramePayload = value.headerPadlenGtFramePayload;
      this._headersAfterContinuation = value.headersAfterContinuation;
      this._headersInterleaved = value.headersInterleaved;
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
      this._protocolError = value.protocolError;
      this._proxyAllocError = value.proxyAllocError;
      this._refusedStream = value.refusedStream;
      this._reservedLocalStateUnexpectedFrame = value.reservedLocalStateUnexpectedFrame;
      this._reservedRemoteStateUnexpectedFrame = value.reservedRemoteStateUnexpectedFrame;
      this._settingsTimeout = value.settingsTimeout;
      this._splitBuffFail = value.splitBuffFail;
      this._streamsGtMaxConcurStreams = value.streamsGtMaxConcurStreams;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._trailersNoEndStream = value.trailersNoEndStream;
      this._uuid = value.uuid;
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

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
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

  // half_closed_remote_state_unexpected_fra - computed: false, optional: true, required: false
  private _halfClosedRemoteStateUnexpectedFra?: number; 
  public get halfClosedRemoteStateUnexpectedFra() {
    return this.getNumberAttribute('half_closed_remote_state_unexpected_fra');
  }
  public set halfClosedRemoteStateUnexpectedFra(value: number) {
    this._halfClosedRemoteStateUnexpectedFra = value;
  }
  public resetHalfClosedRemoteStateUnexpectedFra() {
    this._halfClosedRemoteStateUnexpectedFra = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get halfClosedRemoteStateUnexpectedFraInput() {
    return this._halfClosedRemoteStateUnexpectedFra;
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

  // threshold_exceeded_by - computed: false, optional: true, required: false
  private _thresholdExceededBy?: number; 
  public get thresholdExceededBy() {
    return this.getNumberAttribute('threshold_exceeded_by');
  }
  public set thresholdExceededBy(value: number) {
    this._thresholdExceededBy = value;
  }
  public resetThresholdExceededBy() {
    this._thresholdExceededBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdExceededByInput() {
    return this._thresholdExceededBy;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2 thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2A to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2 thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2AConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2AConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2',
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
    this._templateName = config.templateName;
    this._uuid = config.uuid;
    this._triggerStatsInc.internalValue = config.triggerStatsInc;
    this._triggerStatsRate.internalValue = config.triggerStatsRate;
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

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // trigger_stats_inc - computed: false, optional: true, required: false
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsIncA) {
    this._triggerStatsInc.internalValue = value;
  }
  public resetTriggerStatsInc() {
    this._triggerStatsInc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsIncInput() {
    return this._triggerStatsInc.internalValue;
  }

  // trigger_stats_rate - computed: false, optional: true, required: false
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA) {
    this._triggerStatsRate.internalValue = value;
  }
  public resetTriggerStatsRate() {
    this._triggerStatsRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsRateInput() {
    return this._triggerStatsRate.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      template_name: cdktf.stringToTerraform(this._templateName),
      uuid: cdktf.stringToTerraform(this._uuid),
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trigger_stats_inc: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
