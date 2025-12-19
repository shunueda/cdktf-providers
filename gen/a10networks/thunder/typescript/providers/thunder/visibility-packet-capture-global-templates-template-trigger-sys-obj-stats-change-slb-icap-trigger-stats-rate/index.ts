// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for App Server Conn Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate#app_serv_conn_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA#app_serv_conn_err}
  */
  readonly appServConnErr?: number;
  /**
  * Enable automatic packet-capture for App Server Conn no ES PCB Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate#app_serv_conn_no_pcb_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA#app_serv_conn_no_pcb_err}
  */
  readonly appServConnNoPcbErr?: number;
  /**
  * Enable automatic packet-capture for Chunk Hdr Err1 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate#chunk1_hdr_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA#chunk1_hdr_err}
  */
  readonly chunk1HdrErr?: number;
  /**
  * Enable automatic packet-capture for Chunk Hdr Err2 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate#chunk2_hdr_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA#chunk2_hdr_err}
  */
  readonly chunk2HdrErr?: number;
  /**
  * Enable automatic packet-capture for Chunk Bad Trail Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate#chunk_bad_trail_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA#chunk_bad_trail_err}
  */
  readonly chunkBadTrailErr?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Encap HDR Incomplete Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate#encap_hdr_incomplete_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA#encap_hdr_incomplete_err}
  */
  readonly encapHdrIncompleteErr?: number;
  /**
  * Enable automatic packet-capture for HTTP Resp Hdr Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate#http_resp_hdr_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA#http_resp_hdr_err}
  */
  readonly httpRespHdrErr?: number;
  /**
  * Enable automatic packet-capture for HTTP Response Line Parse Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate#http_resp_line_parse_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA#http_resp_line_parse_err}
  */
  readonly httpRespLineParseErr?: number;
  /**
  * Enable automatic packet-capture for HTTP Response Line Read Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate#http_resp_line_read_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA#http_resp_line_read_err}
  */
  readonly httpRespLineReadErr?: number;
  /**
  * Enable automatic packet-capture for ICAP Line Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate#icap_line_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA#icap_line_err}
  */
  readonly icapLineErr?: number;
  /**
  * Enable automatic packet-capture for ICAP Ver Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate#icap_ver_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA#icap_ver_err}
  */
  readonly icapVerErr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for No ICAP Resp Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate#no_icap_resp_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA#no_icap_resp_err}
  */
  readonly noIcapRespErr?: number;
  /**
  * Enable automatic packet-capture for No Payload Buff Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate#no_payload_buff_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA#no_payload_buff_err}
  */
  readonly noPayloadBuffErr?: number;
  /**
  * Enable automatic packet-capture for No Payload In Next Buff Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate#no_payload_next_buff_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA#no_payload_next_buff_err}
  */
  readonly noPayloadNextBuffErr?: number;
  /**
  * Enable automatic packet-capture for No Status Code Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate#no_status_code_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA#no_status_code_err}
  */
  readonly noStatusCodeErr?: number;
  /**
  * Enable automatic packet-capture for Prepare ICAP req fail Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate#prep_req_fail_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA#prep_req_fail_err}
  */
  readonly prepReqFailErr?: number;
  /**
  * Enable automatic packet-capture for Req Hdr Incomplete Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate#req_hdr_incomplete_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA#req_hdr_incomplete_err}
  */
  readonly reqHdrIncompleteErr?: number;
  /**
  * Enable automatic packet-capture for Resp Hdr Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate#resp_hdr_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA#resp_hdr_err}
  */
  readonly respHdrErr?: number;
  /**
  * Enable automatic packet-capture for Resp Hdr Incomplete Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate#resp_hdr_incomplete_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA#resp_hdr_incomplete_err}
  */
  readonly respHdrIncompleteErr?: number;
  /**
  * Enable automatic packet-capture for Resp Line Parse Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate#resp_line_parse_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA#resp_line_parse_err}
  */
  readonly respLineParseErr?: number;
  /**
  * Enable automatic packet-capture for Resp Line Read Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate#resp_line_read_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA#resp_line_read_err}
  */
  readonly respLineReadErr?: number;
  /**
  * Enable automatic packet-capture for Server Select Fail Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate#serv_sel_fail_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA#serv_sel_fail_err}
  */
  readonly servSelFailErr?: number;
  /**
  * Enable automatic packet-capture for Start ICAP conn fail Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate#start_icap_conn_fail_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA#start_icap_conn_fail_err}
  */
  readonly startIcapConnFailErr?: number;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate#template_name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA#template_name}
  */
  readonly templateName: string;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap_trigger_stats_rate',
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
    this._appServConnErr = config.appServConnErr;
    this._appServConnNoPcbErr = config.appServConnNoPcbErr;
    this._chunk1HdrErr = config.chunk1HdrErr;
    this._chunk2HdrErr = config.chunk2HdrErr;
    this._chunkBadTrailErr = config.chunkBadTrailErr;
    this._duration = config.duration;
    this._encapHdrIncompleteErr = config.encapHdrIncompleteErr;
    this._httpRespHdrErr = config.httpRespHdrErr;
    this._httpRespLineParseErr = config.httpRespLineParseErr;
    this._httpRespLineReadErr = config.httpRespLineReadErr;
    this._icapLineErr = config.icapLineErr;
    this._icapVerErr = config.icapVerErr;
    this._id = config.id;
    this._noIcapRespErr = config.noIcapRespErr;
    this._noPayloadBuffErr = config.noPayloadBuffErr;
    this._noPayloadNextBuffErr = config.noPayloadNextBuffErr;
    this._noStatusCodeErr = config.noStatusCodeErr;
    this._prepReqFailErr = config.prepReqFailErr;
    this._reqHdrIncompleteErr = config.reqHdrIncompleteErr;
    this._respHdrErr = config.respHdrErr;
    this._respHdrIncompleteErr = config.respHdrIncompleteErr;
    this._respLineParseErr = config.respLineParseErr;
    this._respLineReadErr = config.respLineReadErr;
    this._servSelFailErr = config.servSelFailErr;
    this._startIcapConnFailErr = config.startIcapConnFailErr;
    this._templateName = config.templateName;
    this._thresholdExceededBy = config.thresholdExceededBy;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
      app_serv_conn_err: cdktf.numberToTerraform(this._appServConnErr),
      app_serv_conn_no_pcb_err: cdktf.numberToTerraform(this._appServConnNoPcbErr),
      chunk1_hdr_err: cdktf.numberToTerraform(this._chunk1HdrErr),
      chunk2_hdr_err: cdktf.numberToTerraform(this._chunk2HdrErr),
      chunk_bad_trail_err: cdktf.numberToTerraform(this._chunkBadTrailErr),
      duration: cdktf.numberToTerraform(this._duration),
      encap_hdr_incomplete_err: cdktf.numberToTerraform(this._encapHdrIncompleteErr),
      http_resp_hdr_err: cdktf.numberToTerraform(this._httpRespHdrErr),
      http_resp_line_parse_err: cdktf.numberToTerraform(this._httpRespLineParseErr),
      http_resp_line_read_err: cdktf.numberToTerraform(this._httpRespLineReadErr),
      icap_line_err: cdktf.numberToTerraform(this._icapLineErr),
      icap_ver_err: cdktf.numberToTerraform(this._icapVerErr),
      id: cdktf.stringToTerraform(this._id),
      no_icap_resp_err: cdktf.numberToTerraform(this._noIcapRespErr),
      no_payload_buff_err: cdktf.numberToTerraform(this._noPayloadBuffErr),
      no_payload_next_buff_err: cdktf.numberToTerraform(this._noPayloadNextBuffErr),
      no_status_code_err: cdktf.numberToTerraform(this._noStatusCodeErr),
      prep_req_fail_err: cdktf.numberToTerraform(this._prepReqFailErr),
      req_hdr_incomplete_err: cdktf.numberToTerraform(this._reqHdrIncompleteErr),
      resp_hdr_err: cdktf.numberToTerraform(this._respHdrErr),
      resp_hdr_incomplete_err: cdktf.numberToTerraform(this._respHdrIncompleteErr),
      resp_line_parse_err: cdktf.numberToTerraform(this._respLineParseErr),
      resp_line_read_err: cdktf.numberToTerraform(this._respLineReadErr),
      serv_sel_fail_err: cdktf.numberToTerraform(this._servSelFailErr),
      start_icap_conn_fail_err: cdktf.numberToTerraform(this._startIcapConnFailErr),
      template_name: cdktf.stringToTerraform(this._templateName),
      threshold_exceeded_by: cdktf.numberToTerraform(this._thresholdExceededBy),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_serv_conn_err: {
        value: cdktf.numberToHclTerraform(this._appServConnErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      app_serv_conn_no_pcb_err: {
        value: cdktf.numberToHclTerraform(this._appServConnNoPcbErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      chunk1_hdr_err: {
        value: cdktf.numberToHclTerraform(this._chunk1HdrErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      chunk2_hdr_err: {
        value: cdktf.numberToHclTerraform(this._chunk2HdrErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      chunk_bad_trail_err: {
        value: cdktf.numberToHclTerraform(this._chunkBadTrailErr),
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
      encap_hdr_incomplete_err: {
        value: cdktf.numberToHclTerraform(this._encapHdrIncompleteErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_resp_hdr_err: {
        value: cdktf.numberToHclTerraform(this._httpRespHdrErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_resp_line_parse_err: {
        value: cdktf.numberToHclTerraform(this._httpRespLineParseErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      http_resp_line_read_err: {
        value: cdktf.numberToHclTerraform(this._httpRespLineReadErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icap_line_err: {
        value: cdktf.numberToHclTerraform(this._icapLineErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      icap_ver_err: {
        value: cdktf.numberToHclTerraform(this._icapVerErr),
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
      no_icap_resp_err: {
        value: cdktf.numberToHclTerraform(this._noIcapRespErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_payload_buff_err: {
        value: cdktf.numberToHclTerraform(this._noPayloadBuffErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_payload_next_buff_err: {
        value: cdktf.numberToHclTerraform(this._noPayloadNextBuffErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_status_code_err: {
        value: cdktf.numberToHclTerraform(this._noStatusCodeErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prep_req_fail_err: {
        value: cdktf.numberToHclTerraform(this._prepReqFailErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      req_hdr_incomplete_err: {
        value: cdktf.numberToHclTerraform(this._reqHdrIncompleteErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resp_hdr_err: {
        value: cdktf.numberToHclTerraform(this._respHdrErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resp_hdr_incomplete_err: {
        value: cdktf.numberToHclTerraform(this._respHdrIncompleteErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resp_line_parse_err: {
        value: cdktf.numberToHclTerraform(this._respLineParseErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resp_line_read_err: {
        value: cdktf.numberToHclTerraform(this._respLineReadErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      serv_sel_fail_err: {
        value: cdktf.numberToHclTerraform(this._servSelFailErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      start_icap_conn_fail_err: {
        value: cdktf.numberToHclTerraform(this._startIcapConnFailErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
