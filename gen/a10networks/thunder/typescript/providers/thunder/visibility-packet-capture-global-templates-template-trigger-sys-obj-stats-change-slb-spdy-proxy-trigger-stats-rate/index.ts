// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for Compression context allocation fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate#compress_ctx_alloc_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA#compress_ctx_alloc_fail}
  */
  readonly compressCtxAllocFail?: number;
  /**
  * Enable automatic packet-capture for Context alloc fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate#ctx_alloc_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA#ctx_alloc_fail}
  */
  readonly ctxAllocFail?: number;
  /**
  * Enable automatic packet-capture for Data callback no tuple
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate#data_cb_no_tuple VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA#data_cb_no_tuple}
  */
  readonly dataCbNoTuple?: number;
  /**
  * Enable automatic packet-capture for Data no stream found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate#data_no_stream VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA#data_no_stream}
  */
  readonly dataNoStream?: number;
  /**
  * Enable automatic packet-capture for Data no stream and no goaway and close session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate#data_no_stream_goaway_close VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA#data_no_stream_goaway_close}
  */
  readonly dataNoStreamGoawayClose?: number;
  /**
  * Enable automatic packet-capture for Data no stream and no goaway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate#data_no_stream_no_goaway VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA#data_no_stream_no_goaway}
  */
  readonly dataNoStreamNoGoaway?: number;
  /**
  * Enable automatic packet-capture for Decompress fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate#decompress_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA#decompress_fail}
  */
  readonly decompressFail?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Est callback no tuple
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate#est_cb_no_tuple VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA#est_cb_no_tuple}
  */
  readonly estCbNoTuple?: number;
  /**
  * Enable automatic packet-capture for Header compress fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate#header_compress_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA#header_compress_fail}
  */
  readonly headerCompressFail?: number;
  /**
  * Enable automatic packet-capture for HTTP connection allocation fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate#http_conn_alloc_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA#http_conn_alloc_fail}
  */
  readonly httpConnAllocFail?: number;
  /**
  * Enable automatic packet-capture for HTTP error stream already closed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate#http_err_stream_closed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA#http_err_stream_closed}
  */
  readonly httpErrStreamClosed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Invalid frame size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate#invalid_frame_size VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA#invalid_frame_size}
  */
  readonly invalidFrameSize?: number;
  /**
  * Enable automatic packet-capture for Invalid version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate#invalid_version VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA#invalid_version}
  */
  readonly invalidVersion?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for Request/Header allocation fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate#request_header_alloc_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA#request_header_alloc_fail}
  */
  readonly requestHeaderAllocFail?: number;
  /**
  * Enable automatic packet-capture for Session err
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate#session_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA#session_err}
  */
  readonly sessionErr?: number;
  /**
  * Enable automatic packet-capture for Stream alloc fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate#stream_alloc_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA#stream_alloc_fail}
  */
  readonly streamAllocFail?: number;
  /**
  * Enable automatic packet-capture for Stream err
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate#stream_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA#stream_err}
  */
  readonly streamErr?: number;
  /**
  * Enable automatic packet-capture for STREAM not found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate#stream_not_found VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA#stream_not_found}
  */
  readonly streamNotFound?: number;
  /**
  * Enable automatic packet-capture for TCP sock error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate#tcp_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA#tcp_err}
  */
  readonly tcpErr?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSpdyProxyTriggerStatsRateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_spdy_proxy_trigger_stats_rate',
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
    this._compressCtxAllocFail = config.compressCtxAllocFail;
    this._ctxAllocFail = config.ctxAllocFail;
    this._dataCbNoTuple = config.dataCbNoTuple;
    this._dataNoStream = config.dataNoStream;
    this._dataNoStreamGoawayClose = config.dataNoStreamGoawayClose;
    this._dataNoStreamNoGoaway = config.dataNoStreamNoGoaway;
    this._decompressFail = config.decompressFail;
    this._duration = config.duration;
    this._estCbNoTuple = config.estCbNoTuple;
    this._headerCompressFail = config.headerCompressFail;
    this._httpConnAllocFail = config.httpConnAllocFail;
    this._httpErrStreamClosed = config.httpErrStreamClosed;
    this._id = config.id;
    this._invalidFrameSize = config.invalidFrameSize;
    this._invalidVersion = config.invalidVersion;
    this._name = config.name;
    this._requestHeaderAllocFail = config.requestHeaderAllocFail;
    this._sessionErr = config.sessionErr;
    this._streamAllocFail = config.streamAllocFail;
    this._streamErr = config.streamErr;
    this._streamNotFound = config.streamNotFound;
    this._tcpErr = config.tcpErr;
    this._thresholdExceededBy = config.thresholdExceededBy;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compress_ctx_alloc_fail: cdktf.numberToTerraform(this._compressCtxAllocFail),
      ctx_alloc_fail: cdktf.numberToTerraform(this._ctxAllocFail),
      data_cb_no_tuple: cdktf.numberToTerraform(this._dataCbNoTuple),
      data_no_stream: cdktf.numberToTerraform(this._dataNoStream),
      data_no_stream_goaway_close: cdktf.numberToTerraform(this._dataNoStreamGoawayClose),
      data_no_stream_no_goaway: cdktf.numberToTerraform(this._dataNoStreamNoGoaway),
      decompress_fail: cdktf.numberToTerraform(this._decompressFail),
      duration: cdktf.numberToTerraform(this._duration),
      est_cb_no_tuple: cdktf.numberToTerraform(this._estCbNoTuple),
      header_compress_fail: cdktf.numberToTerraform(this._headerCompressFail),
      http_conn_alloc_fail: cdktf.numberToTerraform(this._httpConnAllocFail),
      http_err_stream_closed: cdktf.numberToTerraform(this._httpErrStreamClosed),
      id: cdktf.stringToTerraform(this._id),
      invalid_frame_size: cdktf.numberToTerraform(this._invalidFrameSize),
      invalid_version: cdktf.numberToTerraform(this._invalidVersion),
      name: cdktf.stringToTerraform(this._name),
      request_header_alloc_fail: cdktf.numberToTerraform(this._requestHeaderAllocFail),
      session_err: cdktf.numberToTerraform(this._sessionErr),
      stream_alloc_fail: cdktf.numberToTerraform(this._streamAllocFail),
      stream_err: cdktf.numberToTerraform(this._streamErr),
      stream_not_found: cdktf.numberToTerraform(this._streamNotFound),
      tcp_err: cdktf.numberToTerraform(this._tcpErr),
      threshold_exceeded_by: cdktf.numberToTerraform(this._thresholdExceededBy),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compress_ctx_alloc_fail: {
        value: cdktf.numberToHclTerraform(this._compressCtxAllocFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ctx_alloc_fail: {
        value: cdktf.numberToHclTerraform(this._ctxAllocFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_cb_no_tuple: {
        value: cdktf.numberToHclTerraform(this._dataCbNoTuple),
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
      data_no_stream_goaway_close: {
        value: cdktf.numberToHclTerraform(this._dataNoStreamGoawayClose),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_no_stream_no_goaway: {
        value: cdktf.numberToHclTerraform(this._dataNoStreamNoGoaway),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      decompress_fail: {
        value: cdktf.numberToHclTerraform(this._decompressFail),
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
      est_cb_no_tuple: {
        value: cdktf.numberToHclTerraform(this._estCbNoTuple),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      header_compress_fail: {
        value: cdktf.numberToHclTerraform(this._headerCompressFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_conn_alloc_fail: {
        value: cdktf.numberToHclTerraform(this._httpConnAllocFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_err_stream_closed: {
        value: cdktf.numberToHclTerraform(this._httpErrStreamClosed),
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
      invalid_frame_size: {
        value: cdktf.numberToHclTerraform(this._invalidFrameSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      invalid_version: {
        value: cdktf.numberToHclTerraform(this._invalidVersion),
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
      request_header_alloc_fail: {
        value: cdktf.numberToHclTerraform(this._requestHeaderAllocFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_err: {
        value: cdktf.numberToHclTerraform(this._sessionErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stream_alloc_fail: {
        value: cdktf.numberToHclTerraform(this._streamAllocFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stream_err: {
        value: cdktf.numberToHclTerraform(this._streamErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stream_not_found: {
        value: cdktf.numberToHclTerraform(this._streamNotFound),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_err: {
        value: cdktf.numberToHclTerraform(this._tcpErr),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
