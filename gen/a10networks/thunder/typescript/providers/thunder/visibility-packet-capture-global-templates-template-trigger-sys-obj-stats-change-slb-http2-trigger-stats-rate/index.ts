// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for Alloc Fail - Total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#alloc_fail_total VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#alloc_fail_total}
  */
  readonly allocFailTotal?: number;
  /**
  * Enable automatic packet-capture for Bad Connection Preface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#bad_connection_preface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#bad_connection_preface}
  */
  readonly badConnectionPreface?: number;
  /**
  * Enable automatic packet-capture for Bad frame type for stream state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#bad_frame_type_for_stream_state VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#bad_frame_type_for_stream_state}
  */
  readonly badFrameTypeForStreamState?: number;
  /**
  * Enable automatic packet-capture for Buff alloc error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#buff_alloc_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#buff_alloc_error}
  */
  readonly buffAllocError?: number;
  /**
  * Enable automatic packet-capture for cancel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#cancel VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#cancel}
  */
  readonly cancel?: number;
  /**
  * Enable automatic packet-capture for Cant allocate control frame
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#cant_allocate_control_frame VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#cant_allocate_control_frame}
  */
  readonly cantAllocateControlFrame?: number;
  /**
  * Enable automatic packet-capture for Cant allocate GOAWAY frame
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#cant_allocate_goaway_frame VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#cant_allocate_goaway_frame}
  */
  readonly cantAllocateGoawayFrame?: number;
  /**
  * Enable automatic packet-capture for Cant allocate PING frame
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#cant_allocate_ping_frame VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#cant_allocate_ping_frame}
  */
  readonly cantAllocatePingFrame?: number;
  /**
  * Enable automatic packet-capture for Cant allocate RST_STREAM frame
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#cant_allocate_rst_frame VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#cant_allocate_rst_frame}
  */
  readonly cantAllocateRstFrame?: number;
  /**
  * Enable automatic packet-capture for Cant allocate SETTINGS frame
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#cant_allocate_settings_frame VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#cant_allocate_settings_frame}
  */
  readonly cantAllocateSettingsFrame?: number;
  /**
  * Enable automatic packet-capture for Cant allocate stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#cant_allocate_stream VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#cant_allocate_stream}
  */
  readonly cantAllocateStream?: number;
  /**
  * Enable automatic packet-capture for Cant allocate WINDOW_UPDATE frame
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#cant_allocate_window_frame VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#cant_allocate_window_frame}
  */
  readonly cantAllocateWindowFrame?: number;
  /**
  * Enable automatic packet-capture for Unexpected frame received in closed state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#closed_state_unexpected_frame VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#closed_state_unexpected_frame}
  */
  readonly closedStateUnexpectedFrame?: number;
  /**
  * Enable automatic packet-capture for compression error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#compression_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#compression_error}
  */
  readonly compressionError?: number;
  /**
  * Enable automatic packet-capture for connect error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#connect_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#connect_error}
  */
  readonly connectError?: number;
  /**
  * Enable automatic packet-capture for CONTINUATION frame with no headers frame
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#continuation_before_headers VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#continuation_before_headers}
  */
  readonly continuationBeforeHeaders?: number;
  /**
  * Enable automatic packet-capture for DATA Frame Rcvd on non-existent stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#data_no_stream VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#data_no_stream}
  */
  readonly dataNoStream?: number;
  /**
  * Enable automatic packet-capture for Data Queue Alloc Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#data_queue_alloc_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#data_queue_alloc_error}
  */
  readonly dataQueueAllocError?: number;
  /**
  * Enable automatic packet-capture for deflate alloc fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#deflate_alloc_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#deflate_alloc_fail}
  */
  readonly deflateAllocFail?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for enhance your calm error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#enhance_your_calm VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#enhance_your_calm}
  */
  readonly enhanceYourCalm?: number;
  /**
  * Enable automatic packet-capture for Error Rcvd - Total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#err_rcvd_total VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#err_rcvd_total}
  */
  readonly errRcvdTotal?: number;
  /**
  * Enable automatic packet-capture for Error Sent - CANCEL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#err_sent_cancel VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#err_sent_cancel}
  */
  readonly errSentCancel?: number;
  /**
  * Enable automatic packet-capture for Error Sent - COMPRESSION_ERROR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#err_sent_compression_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#err_sent_compression_err}
  */
  readonly errSentCompressionErr?: number;
  /**
  * Enable automatic packet-capture for Error Sent - CONNECT_ERROR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#err_sent_connect_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#err_sent_connect_err}
  */
  readonly errSentConnectErr?: number;
  /**
  * Enable automatic packet-capture for Error Sent - FLOW_CONTROL_ERROR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#err_sent_flow_control VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#err_sent_flow_control}
  */
  readonly errSentFlowControl?: number;
  /**
  * Enable automatic packet-capture for Error Sent - FRAME_SIZE_ERROR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#err_sent_frame_size_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#err_sent_frame_size_err}
  */
  readonly errSentFrameSizeErr?: number;
  /**
  * Enable automatic packet-capture for Error Sent - HTTP_1_1_REQUIRED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#err_sent_http11_required VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#err_sent_http11_required}
  */
  readonly errSentHttp11Required?: number;
  /**
  * Enable automatic packet-capture for Error Sent - INADEQUATE_SECURITY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#err_sent_inadequate_security VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#err_sent_inadequate_security}
  */
  readonly errSentInadequateSecurity?: number;
  /**
  * Enable automatic packet-capture for Error Sent - INTERNAL_ERROR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#err_sent_internal_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#err_sent_internal_err}
  */
  readonly errSentInternalErr?: number;
  /**
  * Enable automatic packet-capture for Error Sent - PROTOCOL_ERROR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#err_sent_proto_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#err_sent_proto_err}
  */
  readonly errSentProtoErr?: number;
  /**
  * Enable automatic packet-capture for Error Sent - REFUSED_STREAM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#err_sent_refused_stream VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#err_sent_refused_stream}
  */
  readonly errSentRefusedStream?: number;
  /**
  * Enable automatic packet-capture for Error Sent - SETTINGS_TIMEOUT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#err_sent_setting_timeout VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#err_sent_setting_timeout}
  */
  readonly errSentSettingTimeout?: number;
  /**
  * Enable automatic packet-capture for Error Sent - STREAM_CLOSED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#err_sent_stream_closed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#err_sent_stream_closed}
  */
  readonly errSentStreamClosed?: number;
  /**
  * Enable automatic packet-capture for Error Rent - Total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#err_sent_total VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#err_sent_total}
  */
  readonly errSentTotal?: number;
  /**
  * Enable automatic packet-capture for Error Sent - ENHANCE_YOUR_CALM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#err_sent_your_calm VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#err_sent_your_calm}
  */
  readonly errSentYourCalm?: number;
  /**
  * Enable automatic packet-capture for Max Invalid Stream Rcvd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#error_max_invalid_stream VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#error_max_invalid_stream}
  */
  readonly errorMaxInvalidStream?: number;
  /**
  * Enable automatic packet-capture for Window Update with increment that results in exceeding max window
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#exceeds_max_window_size_stream VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#exceeds_max_window_size_stream}
  */
  readonly exceedsMaxWindowSizeStream?: number;
  /**
  * Enable automatic packet-capture for Flow Control Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#flow_control_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#flow_control_error}
  */
  readonly flowControlError?: number;
  /**
  * Enable automatic packet-capture for Frame Size Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#frame_size_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#frame_size_error}
  */
  readonly frameSizeError?: number;
  /**
  * Enable automatic packet-capture for Unexpected frame received in half closed remote state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#half_closed_remote_state_unexpected_fra VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#half_closed_remote_state_unexpected_fra}
  */
  readonly halfClosedRemoteStateUnexpectedFra?: number;
  /**
  * Enable automatic packet-capture for header no stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#header_no_stream VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#header_no_stream}
  */
  readonly headerNoStream?: number;
  /**
  * Enable automatic packet-capture for Header padlen greater than frame payload size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#header_padlen_gt_frame_payload VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#header_padlen_gt_frame_payload}
  */
  readonly headerPadlenGtFramePayload?: number;
  /**
  * Enable automatic packet-capture for headers frame before CONTINUATION was complete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#headers_after_continuation VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#headers_after_continuation}
  */
  readonly headersAfterContinuation?: number;
  /**
  * Enable automatic packet-capture for headers interleaved on streams
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#headers_interleaved VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#headers_interleaved}
  */
  readonly headersInterleaved?: number;
  /**
  * Enable automatic packet-capture for HTTP1.1 Required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#http_1_1_required VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#http_1_1_required}
  */
  readonly http11Required?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Unxpected frame received in idle state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#idle_state_unexpected_frame VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#idle_state_unexpected_frame}
  */
  readonly idleStateUnexpectedFrame?: number;
  /**
  * Enable automatic packet-capture for inadequate security
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#inadequate_security VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#inadequate_security}
  */
  readonly inadequateSecurity?: number;
  /**
  * Enable automatic packet-capture for inflate alloc fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#inflate_alloc_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#inflate_alloc_fail}
  */
  readonly inflateAllocFail?: number;
  /**
  * Enable automatic packet-capture for Inflate Header Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#inflate_header_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#inflate_header_fail}
  */
  readonly inflateHeaderFail?: number;
  /**
  * Enable automatic packet-capture for Internal Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#internal_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#internal_error}
  */
  readonly internalError?: number;
  /**
  * Enable automatic packet-capture for frame before headers were complete
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#invalid_frame_during_headers VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#invalid_frame_during_headers}
  */
  readonly invalidFrameDuringHeaders?: number;
  /**
  * Enable automatic packet-capture for Invalid Frame Size Rcvd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#invalid_frame_size VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#invalid_frame_size}
  */
  readonly invalidFrameSize?: number;
  /**
  * Enable automatic packet-capture for unexpected PUSH_PROMISE frame
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#invalid_push_promise VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#invalid_push_promise}
  */
  readonly invalidPushPromise?: number;
  /**
  * Enable automatic packet-capture for invalid setting-frame value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#invalid_setting_value VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#invalid_setting_value}
  */
  readonly invalidSettingValue?: number;
  /**
  * Enable automatic packet-capture for received invalid stream ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#invalid_stream_id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#invalid_stream_id}
  */
  readonly invalidStreamId?: number;
  /**
  * Enable automatic packet-capture for window-update value out of range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#invalid_window_update VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#invalid_window_update}
  */
  readonly invalidWindowUpdate?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for Protocol Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#protocol_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#protocol_error}
  */
  readonly protocolError?: number;
  /**
  * Enable automatic packet-capture for HTTP2 Proxy alloc Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#proxy_alloc_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#proxy_alloc_error}
  */
  readonly proxyAllocError?: number;
  /**
  * Enable automatic packet-capture for Refused Stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#refused_stream VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#refused_stream}
  */
  readonly refusedStream?: number;
  /**
  * Enable automatic packet-capture for Unexpected frame received in reserved local state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#reserved_local_state_unexpected_frame VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#reserved_local_state_unexpected_frame}
  */
  readonly reservedLocalStateUnexpectedFrame?: number;
  /**
  * Enable automatic packet-capture for Unexpected frame received in reserved remote state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#reserved_remote_state_unexpected_frame VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#reserved_remote_state_unexpected_frame}
  */
  readonly reservedRemoteStateUnexpectedFrame?: number;
  /**
  * Enable automatic packet-capture for Settings Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#settings_timeout VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#settings_timeout}
  */
  readonly settingsTimeout?: number;
  /**
  * Enable automatic packet-capture for Splitting Buffer Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#split_buff_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#split_buff_fail}
  */
  readonly splitBuffFail?: number;
  /**
  * Enable automatic packet-capture for Streams greater than max allowed concurrent streams
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#streams_gt_max_concur_streams VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#streams_gt_max_concur_streams}
  */
  readonly streamsGtMaxConcurStreams?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for trailers not marked as end-of-stream
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#trailers_no_end_stream VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#trailers_no_end_stream}
  */
  readonly trailersNoEndStream?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#uuid}
  */
  readonly uuid?: string;
  /**
  * Enable automatic packet-capture for Wrong Stream State
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#wrong_stream_state VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#wrong_stream_state}
  */
  readonly wrongStreamState?: number;
  /**
  * Enable automatic packet-capture for Window Update with zero increment rcvd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#zero_window_size_on_stream VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA#zero_window_size_on_stream}
  */
  readonly zeroWindowSizeOnStream?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbHttp2TriggerStatsRateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_http2_trigger_stats_rate',
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
    this._allocFailTotal = config.allocFailTotal;
    this._badConnectionPreface = config.badConnectionPreface;
    this._badFrameTypeForStreamState = config.badFrameTypeForStreamState;
    this._buffAllocError = config.buffAllocError;
    this._cancel = config.cancel;
    this._cantAllocateControlFrame = config.cantAllocateControlFrame;
    this._cantAllocateGoawayFrame = config.cantAllocateGoawayFrame;
    this._cantAllocatePingFrame = config.cantAllocatePingFrame;
    this._cantAllocateRstFrame = config.cantAllocateRstFrame;
    this._cantAllocateSettingsFrame = config.cantAllocateSettingsFrame;
    this._cantAllocateStream = config.cantAllocateStream;
    this._cantAllocateWindowFrame = config.cantAllocateWindowFrame;
    this._closedStateUnexpectedFrame = config.closedStateUnexpectedFrame;
    this._compressionError = config.compressionError;
    this._connectError = config.connectError;
    this._continuationBeforeHeaders = config.continuationBeforeHeaders;
    this._dataNoStream = config.dataNoStream;
    this._dataQueueAllocError = config.dataQueueAllocError;
    this._deflateAllocFail = config.deflateAllocFail;
    this._duration = config.duration;
    this._enhanceYourCalm = config.enhanceYourCalm;
    this._errRcvdTotal = config.errRcvdTotal;
    this._errSentCancel = config.errSentCancel;
    this._errSentCompressionErr = config.errSentCompressionErr;
    this._errSentConnectErr = config.errSentConnectErr;
    this._errSentFlowControl = config.errSentFlowControl;
    this._errSentFrameSizeErr = config.errSentFrameSizeErr;
    this._errSentHttp11Required = config.errSentHttp11Required;
    this._errSentInadequateSecurity = config.errSentInadequateSecurity;
    this._errSentInternalErr = config.errSentInternalErr;
    this._errSentProtoErr = config.errSentProtoErr;
    this._errSentRefusedStream = config.errSentRefusedStream;
    this._errSentSettingTimeout = config.errSentSettingTimeout;
    this._errSentStreamClosed = config.errSentStreamClosed;
    this._errSentTotal = config.errSentTotal;
    this._errSentYourCalm = config.errSentYourCalm;
    this._errorMaxInvalidStream = config.errorMaxInvalidStream;
    this._exceedsMaxWindowSizeStream = config.exceedsMaxWindowSizeStream;
    this._flowControlError = config.flowControlError;
    this._frameSizeError = config.frameSizeError;
    this._halfClosedRemoteStateUnexpectedFra = config.halfClosedRemoteStateUnexpectedFra;
    this._headerNoStream = config.headerNoStream;
    this._headerPadlenGtFramePayload = config.headerPadlenGtFramePayload;
    this._headersAfterContinuation = config.headersAfterContinuation;
    this._headersInterleaved = config.headersInterleaved;
    this._http11Required = config.http11Required;
    this._id = config.id;
    this._idleStateUnexpectedFrame = config.idleStateUnexpectedFrame;
    this._inadequateSecurity = config.inadequateSecurity;
    this._inflateAllocFail = config.inflateAllocFail;
    this._inflateHeaderFail = config.inflateHeaderFail;
    this._internalError = config.internalError;
    this._invalidFrameDuringHeaders = config.invalidFrameDuringHeaders;
    this._invalidFrameSize = config.invalidFrameSize;
    this._invalidPushPromise = config.invalidPushPromise;
    this._invalidSettingValue = config.invalidSettingValue;
    this._invalidStreamId = config.invalidStreamId;
    this._invalidWindowUpdate = config.invalidWindowUpdate;
    this._name = config.name;
    this._protocolError = config.protocolError;
    this._proxyAllocError = config.proxyAllocError;
    this._refusedStream = config.refusedStream;
    this._reservedLocalStateUnexpectedFrame = config.reservedLocalStateUnexpectedFrame;
    this._reservedRemoteStateUnexpectedFrame = config.reservedRemoteStateUnexpectedFrame;
    this._settingsTimeout = config.settingsTimeout;
    this._splitBuffFail = config.splitBuffFail;
    this._streamsGtMaxConcurStreams = config.streamsGtMaxConcurStreams;
    this._thresholdExceededBy = config.thresholdExceededBy;
    this._trailersNoEndStream = config.trailersNoEndStream;
    this._uuid = config.uuid;
    this._wrongStreamState = config.wrongStreamState;
    this._zeroWindowSizeOnStream = config.zeroWindowSizeOnStream;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alloc_fail_total: cdktf.numberToTerraform(this._allocFailTotal),
      bad_connection_preface: cdktf.numberToTerraform(this._badConnectionPreface),
      bad_frame_type_for_stream_state: cdktf.numberToTerraform(this._badFrameTypeForStreamState),
      buff_alloc_error: cdktf.numberToTerraform(this._buffAllocError),
      cancel: cdktf.numberToTerraform(this._cancel),
      cant_allocate_control_frame: cdktf.numberToTerraform(this._cantAllocateControlFrame),
      cant_allocate_goaway_frame: cdktf.numberToTerraform(this._cantAllocateGoawayFrame),
      cant_allocate_ping_frame: cdktf.numberToTerraform(this._cantAllocatePingFrame),
      cant_allocate_rst_frame: cdktf.numberToTerraform(this._cantAllocateRstFrame),
      cant_allocate_settings_frame: cdktf.numberToTerraform(this._cantAllocateSettingsFrame),
      cant_allocate_stream: cdktf.numberToTerraform(this._cantAllocateStream),
      cant_allocate_window_frame: cdktf.numberToTerraform(this._cantAllocateWindowFrame),
      closed_state_unexpected_frame: cdktf.numberToTerraform(this._closedStateUnexpectedFrame),
      compression_error: cdktf.numberToTerraform(this._compressionError),
      connect_error: cdktf.numberToTerraform(this._connectError),
      continuation_before_headers: cdktf.numberToTerraform(this._continuationBeforeHeaders),
      data_no_stream: cdktf.numberToTerraform(this._dataNoStream),
      data_queue_alloc_error: cdktf.numberToTerraform(this._dataQueueAllocError),
      deflate_alloc_fail: cdktf.numberToTerraform(this._deflateAllocFail),
      duration: cdktf.numberToTerraform(this._duration),
      enhance_your_calm: cdktf.numberToTerraform(this._enhanceYourCalm),
      err_rcvd_total: cdktf.numberToTerraform(this._errRcvdTotal),
      err_sent_cancel: cdktf.numberToTerraform(this._errSentCancel),
      err_sent_compression_err: cdktf.numberToTerraform(this._errSentCompressionErr),
      err_sent_connect_err: cdktf.numberToTerraform(this._errSentConnectErr),
      err_sent_flow_control: cdktf.numberToTerraform(this._errSentFlowControl),
      err_sent_frame_size_err: cdktf.numberToTerraform(this._errSentFrameSizeErr),
      err_sent_http11_required: cdktf.numberToTerraform(this._errSentHttp11Required),
      err_sent_inadequate_security: cdktf.numberToTerraform(this._errSentInadequateSecurity),
      err_sent_internal_err: cdktf.numberToTerraform(this._errSentInternalErr),
      err_sent_proto_err: cdktf.numberToTerraform(this._errSentProtoErr),
      err_sent_refused_stream: cdktf.numberToTerraform(this._errSentRefusedStream),
      err_sent_setting_timeout: cdktf.numberToTerraform(this._errSentSettingTimeout),
      err_sent_stream_closed: cdktf.numberToTerraform(this._errSentStreamClosed),
      err_sent_total: cdktf.numberToTerraform(this._errSentTotal),
      err_sent_your_calm: cdktf.numberToTerraform(this._errSentYourCalm),
      error_max_invalid_stream: cdktf.numberToTerraform(this._errorMaxInvalidStream),
      exceeds_max_window_size_stream: cdktf.numberToTerraform(this._exceedsMaxWindowSizeStream),
      flow_control_error: cdktf.numberToTerraform(this._flowControlError),
      frame_size_error: cdktf.numberToTerraform(this._frameSizeError),
      half_closed_remote_state_unexpected_fra: cdktf.numberToTerraform(this._halfClosedRemoteStateUnexpectedFra),
      header_no_stream: cdktf.numberToTerraform(this._headerNoStream),
      header_padlen_gt_frame_payload: cdktf.numberToTerraform(this._headerPadlenGtFramePayload),
      headers_after_continuation: cdktf.numberToTerraform(this._headersAfterContinuation),
      headers_interleaved: cdktf.numberToTerraform(this._headersInterleaved),
      http_1_1_required: cdktf.numberToTerraform(this._http11Required),
      id: cdktf.stringToTerraform(this._id),
      idle_state_unexpected_frame: cdktf.numberToTerraform(this._idleStateUnexpectedFrame),
      inadequate_security: cdktf.numberToTerraform(this._inadequateSecurity),
      inflate_alloc_fail: cdktf.numberToTerraform(this._inflateAllocFail),
      inflate_header_fail: cdktf.numberToTerraform(this._inflateHeaderFail),
      internal_error: cdktf.numberToTerraform(this._internalError),
      invalid_frame_during_headers: cdktf.numberToTerraform(this._invalidFrameDuringHeaders),
      invalid_frame_size: cdktf.numberToTerraform(this._invalidFrameSize),
      invalid_push_promise: cdktf.numberToTerraform(this._invalidPushPromise),
      invalid_setting_value: cdktf.numberToTerraform(this._invalidSettingValue),
      invalid_stream_id: cdktf.numberToTerraform(this._invalidStreamId),
      invalid_window_update: cdktf.numberToTerraform(this._invalidWindowUpdate),
      name: cdktf.stringToTerraform(this._name),
      protocol_error: cdktf.numberToTerraform(this._protocolError),
      proxy_alloc_error: cdktf.numberToTerraform(this._proxyAllocError),
      refused_stream: cdktf.numberToTerraform(this._refusedStream),
      reserved_local_state_unexpected_frame: cdktf.numberToTerraform(this._reservedLocalStateUnexpectedFrame),
      reserved_remote_state_unexpected_frame: cdktf.numberToTerraform(this._reservedRemoteStateUnexpectedFrame),
      settings_timeout: cdktf.numberToTerraform(this._settingsTimeout),
      split_buff_fail: cdktf.numberToTerraform(this._splitBuffFail),
      streams_gt_max_concur_streams: cdktf.numberToTerraform(this._streamsGtMaxConcurStreams),
      threshold_exceeded_by: cdktf.numberToTerraform(this._thresholdExceededBy),
      trailers_no_end_stream: cdktf.numberToTerraform(this._trailersNoEndStream),
      uuid: cdktf.stringToTerraform(this._uuid),
      wrong_stream_state: cdktf.numberToTerraform(this._wrongStreamState),
      zero_window_size_on_stream: cdktf.numberToTerraform(this._zeroWindowSizeOnStream),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alloc_fail_total: {
        value: cdktf.numberToHclTerraform(this._allocFailTotal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_connection_preface: {
        value: cdktf.numberToHclTerraform(this._badConnectionPreface),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_frame_type_for_stream_state: {
        value: cdktf.numberToHclTerraform(this._badFrameTypeForStreamState),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      buff_alloc_error: {
        value: cdktf.numberToHclTerraform(this._buffAllocError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cancel: {
        value: cdktf.numberToHclTerraform(this._cancel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cant_allocate_control_frame: {
        value: cdktf.numberToHclTerraform(this._cantAllocateControlFrame),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cant_allocate_goaway_frame: {
        value: cdktf.numberToHclTerraform(this._cantAllocateGoawayFrame),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cant_allocate_ping_frame: {
        value: cdktf.numberToHclTerraform(this._cantAllocatePingFrame),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cant_allocate_rst_frame: {
        value: cdktf.numberToHclTerraform(this._cantAllocateRstFrame),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cant_allocate_settings_frame: {
        value: cdktf.numberToHclTerraform(this._cantAllocateSettingsFrame),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cant_allocate_stream: {
        value: cdktf.numberToHclTerraform(this._cantAllocateStream),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cant_allocate_window_frame: {
        value: cdktf.numberToHclTerraform(this._cantAllocateWindowFrame),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      closed_state_unexpected_frame: {
        value: cdktf.numberToHclTerraform(this._closedStateUnexpectedFrame),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      compression_error: {
        value: cdktf.numberToHclTerraform(this._compressionError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connect_error: {
        value: cdktf.numberToHclTerraform(this._connectError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      continuation_before_headers: {
        value: cdktf.numberToHclTerraform(this._continuationBeforeHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_no_stream: {
        value: cdktf.numberToHclTerraform(this._dataNoStream),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_queue_alloc_error: {
        value: cdktf.numberToHclTerraform(this._dataQueueAllocError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      deflate_alloc_fail: {
        value: cdktf.numberToHclTerraform(this._deflateAllocFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enhance_your_calm: {
        value: cdktf.numberToHclTerraform(this._enhanceYourCalm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      err_rcvd_total: {
        value: cdktf.numberToHclTerraform(this._errRcvdTotal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      err_sent_cancel: {
        value: cdktf.numberToHclTerraform(this._errSentCancel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      err_sent_compression_err: {
        value: cdktf.numberToHclTerraform(this._errSentCompressionErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      err_sent_connect_err: {
        value: cdktf.numberToHclTerraform(this._errSentConnectErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      err_sent_flow_control: {
        value: cdktf.numberToHclTerraform(this._errSentFlowControl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      err_sent_frame_size_err: {
        value: cdktf.numberToHclTerraform(this._errSentFrameSizeErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      err_sent_http11_required: {
        value: cdktf.numberToHclTerraform(this._errSentHttp11Required),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      err_sent_inadequate_security: {
        value: cdktf.numberToHclTerraform(this._errSentInadequateSecurity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      err_sent_internal_err: {
        value: cdktf.numberToHclTerraform(this._errSentInternalErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      err_sent_proto_err: {
        value: cdktf.numberToHclTerraform(this._errSentProtoErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      err_sent_refused_stream: {
        value: cdktf.numberToHclTerraform(this._errSentRefusedStream),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      err_sent_setting_timeout: {
        value: cdktf.numberToHclTerraform(this._errSentSettingTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      err_sent_stream_closed: {
        value: cdktf.numberToHclTerraform(this._errSentStreamClosed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      err_sent_total: {
        value: cdktf.numberToHclTerraform(this._errSentTotal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      err_sent_your_calm: {
        value: cdktf.numberToHclTerraform(this._errSentYourCalm),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      error_max_invalid_stream: {
        value: cdktf.numberToHclTerraform(this._errorMaxInvalidStream),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      exceeds_max_window_size_stream: {
        value: cdktf.numberToHclTerraform(this._exceedsMaxWindowSizeStream),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flow_control_error: {
        value: cdktf.numberToHclTerraform(this._flowControlError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      frame_size_error: {
        value: cdktf.numberToHclTerraform(this._frameSizeError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      half_closed_remote_state_unexpected_fra: {
        value: cdktf.numberToHclTerraform(this._halfClosedRemoteStateUnexpectedFra),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      header_no_stream: {
        value: cdktf.numberToHclTerraform(this._headerNoStream),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      header_padlen_gt_frame_payload: {
        value: cdktf.numberToHclTerraform(this._headerPadlenGtFramePayload),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      headers_after_continuation: {
        value: cdktf.numberToHclTerraform(this._headersAfterContinuation),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      headers_interleaved: {
        value: cdktf.numberToHclTerraform(this._headersInterleaved),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_1_1_required: {
        value: cdktf.numberToHclTerraform(this._http11Required),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      idle_state_unexpected_frame: {
        value: cdktf.numberToHclTerraform(this._idleStateUnexpectedFrame),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inadequate_security: {
        value: cdktf.numberToHclTerraform(this._inadequateSecurity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inflate_alloc_fail: {
        value: cdktf.numberToHclTerraform(this._inflateAllocFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      inflate_header_fail: {
        value: cdktf.numberToHclTerraform(this._inflateHeaderFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      internal_error: {
        value: cdktf.numberToHclTerraform(this._internalError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      invalid_frame_during_headers: {
        value: cdktf.numberToHclTerraform(this._invalidFrameDuringHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      invalid_frame_size: {
        value: cdktf.numberToHclTerraform(this._invalidFrameSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      invalid_push_promise: {
        value: cdktf.numberToHclTerraform(this._invalidPushPromise),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      invalid_setting_value: {
        value: cdktf.numberToHclTerraform(this._invalidSettingValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      invalid_stream_id: {
        value: cdktf.numberToHclTerraform(this._invalidStreamId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      invalid_window_update: {
        value: cdktf.numberToHclTerraform(this._invalidWindowUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_error: {
        value: cdktf.numberToHclTerraform(this._protocolError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxy_alloc_error: {
        value: cdktf.numberToHclTerraform(this._proxyAllocError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      refused_stream: {
        value: cdktf.numberToHclTerraform(this._refusedStream),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reserved_local_state_unexpected_frame: {
        value: cdktf.numberToHclTerraform(this._reservedLocalStateUnexpectedFrame),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reserved_remote_state_unexpected_frame: {
        value: cdktf.numberToHclTerraform(this._reservedRemoteStateUnexpectedFrame),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      settings_timeout: {
        value: cdktf.numberToHclTerraform(this._settingsTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      split_buff_fail: {
        value: cdktf.numberToHclTerraform(this._splitBuffFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      streams_gt_max_concur_streams: {
        value: cdktf.numberToHclTerraform(this._streamsGtMaxConcurStreams),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_exceeded_by: {
        value: cdktf.numberToHclTerraform(this._thresholdExceededBy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trailers_no_end_stream: {
        value: cdktf.numberToHclTerraform(this._trailersNoEndStream),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wrong_stream_state: {
        value: cdktf.numberToHclTerraform(this._wrongStreamState),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      zero_window_size_on_stream: {
        value: cdktf.numberToHclTerraform(this._zeroWindowSizeOnStream),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
