// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#template_name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#template_name}
  */
  readonly templateName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for Compression context allocation fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#compress_ctx_alloc_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#compress_ctx_alloc_fail}
  */
  readonly compressCtxAllocFail?: number;
  /**
  * Enable automatic packet-capture for Context alloc fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#ctx_alloc_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#ctx_alloc_fail}
  */
  readonly ctxAllocFail?: number;
  /**
  * Enable automatic packet-capture for Data callback no tuple
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#data_cb_no_tuple VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#data_cb_no_tuple}
  */
  readonly dataCbNoTuple?: number;
  /**
  * Enable automatic packet-capture for Data no stream found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#data_no_stream VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#data_no_stream}
  */
  readonly dataNoStream?: number;
  /**
  * Enable automatic packet-capture for Data no stream and no goaway and close session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#data_no_stream_goaway_close VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#data_no_stream_goaway_close}
  */
  readonly dataNoStreamGoawayClose?: number;
  /**
  * Enable automatic packet-capture for Data no stream and no goaway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#data_no_stream_no_goaway VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#data_no_stream_no_goaway}
  */
  readonly dataNoStreamNoGoaway?: number;
  /**
  * Enable automatic packet-capture for Decompress fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#decompress_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#decompress_fail}
  */
  readonly decompressFail?: number;
  /**
  * Enable automatic packet-capture for Est callback no tuple
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#est_cb_no_tuple VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#est_cb_no_tuple}
  */
  readonly estCbNoTuple?: number;
  /**
  * Enable automatic packet-capture for Header compress fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#header_compress_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#header_compress_fail}
  */
  readonly headerCompressFail?: number;
  /**
  * Enable automatic packet-capture for HTTP connection allocation fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#http_conn_alloc_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#http_conn_alloc_fail}
  */
  readonly httpConnAllocFail?: number;
  /**
  * Enable automatic packet-capture for HTTP error stream already closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#http_err_stream_closed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#http_err_stream_closed}
  */
  readonly httpErrStreamClosed?: number;
  /**
  * Enable automatic packet-capture for Invalid frame size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#invalid_frame_size VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#invalid_frame_size}
  */
  readonly invalidFrameSize?: number;
  /**
  * Enable automatic packet-capture for Invalid version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#invalid_version VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#invalid_version}
  */
  readonly invalidVersion?: number;
  /**
  * Enable automatic packet-capture for Request/Header allocation fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#request_header_alloc_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#request_header_alloc_fail}
  */
  readonly requestHeaderAllocFail?: number;
  /**
  * Enable automatic packet-capture for Session err
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#session_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#session_err}
  */
  readonly sessionErr?: number;
  /**
  * Enable automatic packet-capture for Stream alloc fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#stream_alloc_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#stream_alloc_fail}
  */
  readonly streamAllocFail?: number;
  /**
  * Enable automatic packet-capture for Stream err
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#stream_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#stream_err}
  */
  readonly streamErr?: number;
  /**
  * Enable automatic packet-capture for STREAM not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#stream_not_found VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#stream_not_found}
  */
  readonly streamNotFound?: number;
  /**
  * Enable automatic packet-capture for TCP sock error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#tcp_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#tcp_err}
  */
  readonly tcpErr?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compress_ctx_alloc_fail: cdktf.numberToTerraform(struct!.compressCtxAllocFail),
    ctx_alloc_fail: cdktf.numberToTerraform(struct!.ctxAllocFail),
    data_cb_no_tuple: cdktf.numberToTerraform(struct!.dataCbNoTuple),
    data_no_stream: cdktf.numberToTerraform(struct!.dataNoStream),
    data_no_stream_goaway_close: cdktf.numberToTerraform(struct!.dataNoStreamGoawayClose),
    data_no_stream_no_goaway: cdktf.numberToTerraform(struct!.dataNoStreamNoGoaway),
    decompress_fail: cdktf.numberToTerraform(struct!.decompressFail),
    est_cb_no_tuple: cdktf.numberToTerraform(struct!.estCbNoTuple),
    header_compress_fail: cdktf.numberToTerraform(struct!.headerCompressFail),
    http_conn_alloc_fail: cdktf.numberToTerraform(struct!.httpConnAllocFail),
    http_err_stream_closed: cdktf.numberToTerraform(struct!.httpErrStreamClosed),
    invalid_frame_size: cdktf.numberToTerraform(struct!.invalidFrameSize),
    invalid_version: cdktf.numberToTerraform(struct!.invalidVersion),
    request_header_alloc_fail: cdktf.numberToTerraform(struct!.requestHeaderAllocFail),
    session_err: cdktf.numberToTerraform(struct!.sessionErr),
    stream_alloc_fail: cdktf.numberToTerraform(struct!.streamAllocFail),
    stream_err: cdktf.numberToTerraform(struct!.streamErr),
    stream_not_found: cdktf.numberToTerraform(struct!.streamNotFound),
    tcp_err: cdktf.numberToTerraform(struct!.tcpErr),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compress_ctx_alloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.compressCtxAllocFail),
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
    data_cb_no_tuple: {
      value: cdktf.numberToHclTerraform(struct!.dataCbNoTuple),
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
    decompress_fail: {
      value: cdktf.numberToHclTerraform(struct!.decompressFail),
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
    header_compress_fail: {
      value: cdktf.numberToHclTerraform(struct!.headerCompressFail),
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
    http_err_stream_closed: {
      value: cdktf.numberToHclTerraform(struct!.httpErrStreamClosed),
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
    request_header_alloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.requestHeaderAllocFail),
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
    stream_alloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.streamAllocFail),
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
    stream_not_found: {
      value: cdktf.numberToHclTerraform(struct!.streamNotFound),
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
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressCtxAllocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressCtxAllocFail = this._compressCtxAllocFail;
    }
    if (this._ctxAllocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.ctxAllocFail = this._ctxAllocFail;
    }
    if (this._dataCbNoTuple !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCbNoTuple = this._dataCbNoTuple;
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
    if (this._decompressFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.decompressFail = this._decompressFail;
    }
    if (this._estCbNoTuple !== undefined) {
      hasAnyValues = true;
      internalValueResult.estCbNoTuple = this._estCbNoTuple;
    }
    if (this._headerCompressFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerCompressFail = this._headerCompressFail;
    }
    if (this._httpConnAllocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpConnAllocFail = this._httpConnAllocFail;
    }
    if (this._httpErrStreamClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpErrStreamClosed = this._httpErrStreamClosed;
    }
    if (this._invalidFrameSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidFrameSize = this._invalidFrameSize;
    }
    if (this._invalidVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidVersion = this._invalidVersion;
    }
    if (this._requestHeaderAllocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaderAllocFail = this._requestHeaderAllocFail;
    }
    if (this._sessionErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionErr = this._sessionErr;
    }
    if (this._streamAllocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamAllocFail = this._streamAllocFail;
    }
    if (this._streamErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamErr = this._streamErr;
    }
    if (this._streamNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamNotFound = this._streamNotFound;
    }
    if (this._tcpErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpErr = this._tcpErr;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compressCtxAllocFail = undefined;
      this._ctxAllocFail = undefined;
      this._dataCbNoTuple = undefined;
      this._dataNoStream = undefined;
      this._dataNoStreamGoawayClose = undefined;
      this._dataNoStreamNoGoaway = undefined;
      this._decompressFail = undefined;
      this._estCbNoTuple = undefined;
      this._headerCompressFail = undefined;
      this._httpConnAllocFail = undefined;
      this._httpErrStreamClosed = undefined;
      this._invalidFrameSize = undefined;
      this._invalidVersion = undefined;
      this._requestHeaderAllocFail = undefined;
      this._sessionErr = undefined;
      this._streamAllocFail = undefined;
      this._streamErr = undefined;
      this._streamNotFound = undefined;
      this._tcpErr = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compressCtxAllocFail = value.compressCtxAllocFail;
      this._ctxAllocFail = value.ctxAllocFail;
      this._dataCbNoTuple = value.dataCbNoTuple;
      this._dataNoStream = value.dataNoStream;
      this._dataNoStreamGoawayClose = value.dataNoStreamGoawayClose;
      this._dataNoStreamNoGoaway = value.dataNoStreamNoGoaway;
      this._decompressFail = value.decompressFail;
      this._estCbNoTuple = value.estCbNoTuple;
      this._headerCompressFail = value.headerCompressFail;
      this._httpConnAllocFail = value.httpConnAllocFail;
      this._httpErrStreamClosed = value.httpErrStreamClosed;
      this._invalidFrameSize = value.invalidFrameSize;
      this._invalidVersion = value.invalidVersion;
      this._requestHeaderAllocFail = value.requestHeaderAllocFail;
      this._sessionErr = value.sessionErr;
      this._streamAllocFail = value.streamAllocFail;
      this._streamErr = value.streamErr;
      this._streamNotFound = value.streamNotFound;
      this._tcpErr = value.tcpErr;
      this._uuid = value.uuid;
    }
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
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA {
  /**
  * Enable automatic packet-capture for Compression context allocation fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#compress_ctx_alloc_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#compress_ctx_alloc_fail}
  */
  readonly compressCtxAllocFail?: number;
  /**
  * Enable automatic packet-capture for Context alloc fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#ctx_alloc_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#ctx_alloc_fail}
  */
  readonly ctxAllocFail?: number;
  /**
  * Enable automatic packet-capture for Data callback no tuple
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#data_cb_no_tuple VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#data_cb_no_tuple}
  */
  readonly dataCbNoTuple?: number;
  /**
  * Enable automatic packet-capture for Data no stream found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#data_no_stream VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#data_no_stream}
  */
  readonly dataNoStream?: number;
  /**
  * Enable automatic packet-capture for Data no stream and no goaway and close session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#data_no_stream_goaway_close VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#data_no_stream_goaway_close}
  */
  readonly dataNoStreamGoawayClose?: number;
  /**
  * Enable automatic packet-capture for Data no stream and no goaway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#data_no_stream_no_goaway VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#data_no_stream_no_goaway}
  */
  readonly dataNoStreamNoGoaway?: number;
  /**
  * Enable automatic packet-capture for Decompress fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#decompress_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#decompress_fail}
  */
  readonly decompressFail?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Est callback no tuple
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#est_cb_no_tuple VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#est_cb_no_tuple}
  */
  readonly estCbNoTuple?: number;
  /**
  * Enable automatic packet-capture for Header compress fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#header_compress_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#header_compress_fail}
  */
  readonly headerCompressFail?: number;
  /**
  * Enable automatic packet-capture for HTTP connection allocation fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#http_conn_alloc_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#http_conn_alloc_fail}
  */
  readonly httpConnAllocFail?: number;
  /**
  * Enable automatic packet-capture for HTTP error stream already closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#http_err_stream_closed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#http_err_stream_closed}
  */
  readonly httpErrStreamClosed?: number;
  /**
  * Enable automatic packet-capture for Invalid frame size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#invalid_frame_size VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#invalid_frame_size}
  */
  readonly invalidFrameSize?: number;
  /**
  * Enable automatic packet-capture for Invalid version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#invalid_version VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#invalid_version}
  */
  readonly invalidVersion?: number;
  /**
  * Enable automatic packet-capture for Request/Header allocation fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#request_header_alloc_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#request_header_alloc_fail}
  */
  readonly requestHeaderAllocFail?: number;
  /**
  * Enable automatic packet-capture for Session err
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#session_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#session_err}
  */
  readonly sessionErr?: number;
  /**
  * Enable automatic packet-capture for Stream alloc fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#stream_alloc_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#stream_alloc_fail}
  */
  readonly streamAllocFail?: number;
  /**
  * Enable automatic packet-capture for Stream err
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#stream_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#stream_err}
  */
  readonly streamErr?: number;
  /**
  * Enable automatic packet-capture for STREAM not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#stream_not_found VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#stream_not_found}
  */
  readonly streamNotFound?: number;
  /**
  * Enable automatic packet-capture for TCP sock error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#tcp_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#tcp_err}
  */
  readonly tcpErr?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compress_ctx_alloc_fail: cdktf.numberToTerraform(struct!.compressCtxAllocFail),
    ctx_alloc_fail: cdktf.numberToTerraform(struct!.ctxAllocFail),
    data_cb_no_tuple: cdktf.numberToTerraform(struct!.dataCbNoTuple),
    data_no_stream: cdktf.numberToTerraform(struct!.dataNoStream),
    data_no_stream_goaway_close: cdktf.numberToTerraform(struct!.dataNoStreamGoawayClose),
    data_no_stream_no_goaway: cdktf.numberToTerraform(struct!.dataNoStreamNoGoaway),
    decompress_fail: cdktf.numberToTerraform(struct!.decompressFail),
    duration: cdktf.numberToTerraform(struct!.duration),
    est_cb_no_tuple: cdktf.numberToTerraform(struct!.estCbNoTuple),
    header_compress_fail: cdktf.numberToTerraform(struct!.headerCompressFail),
    http_conn_alloc_fail: cdktf.numberToTerraform(struct!.httpConnAllocFail),
    http_err_stream_closed: cdktf.numberToTerraform(struct!.httpErrStreamClosed),
    invalid_frame_size: cdktf.numberToTerraform(struct!.invalidFrameSize),
    invalid_version: cdktf.numberToTerraform(struct!.invalidVersion),
    request_header_alloc_fail: cdktf.numberToTerraform(struct!.requestHeaderAllocFail),
    session_err: cdktf.numberToTerraform(struct!.sessionErr),
    stream_alloc_fail: cdktf.numberToTerraform(struct!.streamAllocFail),
    stream_err: cdktf.numberToTerraform(struct!.streamErr),
    stream_not_found: cdktf.numberToTerraform(struct!.streamNotFound),
    tcp_err: cdktf.numberToTerraform(struct!.tcpErr),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compress_ctx_alloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.compressCtxAllocFail),
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
    data_cb_no_tuple: {
      value: cdktf.numberToHclTerraform(struct!.dataCbNoTuple),
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
    decompress_fail: {
      value: cdktf.numberToHclTerraform(struct!.decompressFail),
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
    est_cb_no_tuple: {
      value: cdktf.numberToHclTerraform(struct!.estCbNoTuple),
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
    http_conn_alloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.httpConnAllocFail),
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
    request_header_alloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.requestHeaderAllocFail),
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
    stream_alloc_fail: {
      value: cdktf.numberToHclTerraform(struct!.streamAllocFail),
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
    stream_not_found: {
      value: cdktf.numberToHclTerraform(struct!.streamNotFound),
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
    threshold_exceeded_by: {
      value: cdktf.numberToHclTerraform(struct!.thresholdExceededBy),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compressCtxAllocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.compressCtxAllocFail = this._compressCtxAllocFail;
    }
    if (this._ctxAllocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.ctxAllocFail = this._ctxAllocFail;
    }
    if (this._dataCbNoTuple !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCbNoTuple = this._dataCbNoTuple;
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
    if (this._decompressFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.decompressFail = this._decompressFail;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._estCbNoTuple !== undefined) {
      hasAnyValues = true;
      internalValueResult.estCbNoTuple = this._estCbNoTuple;
    }
    if (this._headerCompressFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerCompressFail = this._headerCompressFail;
    }
    if (this._httpConnAllocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpConnAllocFail = this._httpConnAllocFail;
    }
    if (this._httpErrStreamClosed !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpErrStreamClosed = this._httpErrStreamClosed;
    }
    if (this._invalidFrameSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidFrameSize = this._invalidFrameSize;
    }
    if (this._invalidVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidVersion = this._invalidVersion;
    }
    if (this._requestHeaderAllocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeaderAllocFail = this._requestHeaderAllocFail;
    }
    if (this._sessionErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionErr = this._sessionErr;
    }
    if (this._streamAllocFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamAllocFail = this._streamAllocFail;
    }
    if (this._streamErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamErr = this._streamErr;
    }
    if (this._streamNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.streamNotFound = this._streamNotFound;
    }
    if (this._tcpErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpErr = this._tcpErr;
    }
    if (this._thresholdExceededBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdExceededBy = this._thresholdExceededBy;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compressCtxAllocFail = undefined;
      this._ctxAllocFail = undefined;
      this._dataCbNoTuple = undefined;
      this._dataNoStream = undefined;
      this._dataNoStreamGoawayClose = undefined;
      this._dataNoStreamNoGoaway = undefined;
      this._decompressFail = undefined;
      this._duration = undefined;
      this._estCbNoTuple = undefined;
      this._headerCompressFail = undefined;
      this._httpConnAllocFail = undefined;
      this._httpErrStreamClosed = undefined;
      this._invalidFrameSize = undefined;
      this._invalidVersion = undefined;
      this._requestHeaderAllocFail = undefined;
      this._sessionErr = undefined;
      this._streamAllocFail = undefined;
      this._streamErr = undefined;
      this._streamNotFound = undefined;
      this._tcpErr = undefined;
      this._thresholdExceededBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compressCtxAllocFail = value.compressCtxAllocFail;
      this._ctxAllocFail = value.ctxAllocFail;
      this._dataCbNoTuple = value.dataCbNoTuple;
      this._dataNoStream = value.dataNoStream;
      this._dataNoStreamGoawayClose = value.dataNoStreamGoawayClose;
      this._dataNoStreamNoGoaway = value.dataNoStreamNoGoaway;
      this._decompressFail = value.decompressFail;
      this._duration = value.duration;
      this._estCbNoTuple = value.estCbNoTuple;
      this._headerCompressFail = value.headerCompressFail;
      this._httpConnAllocFail = value.httpConnAllocFail;
      this._httpErrStreamClosed = value.httpErrStreamClosed;
      this._invalidFrameSize = value.invalidFrameSize;
      this._invalidVersion = value.invalidVersion;
      this._requestHeaderAllocFail = value.requestHeaderAllocFail;
      this._sessionErr = value.sessionErr;
      this._streamAllocFail = value.streamAllocFail;
      this._streamErr = value.streamErr;
      this._streamNotFound = value.streamNotFound;
      this._tcpErr = value.tcpErr;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._uuid = value.uuid;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy',
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
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA) {
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
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
