// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#template_name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#template_name}
  */
  readonly templateName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for App Server Conn Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#app_serv_conn_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#app_serv_conn_err}
  */
  readonly appServConnErr?: number;
  /**
  * Enable automatic packet-capture for App Server Conn no ES PCB Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#app_serv_conn_no_pcb_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#app_serv_conn_no_pcb_err}
  */
  readonly appServConnNoPcbErr?: number;
  /**
  * Enable automatic packet-capture for Chunk Hdr Err1 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#chunk1_hdr_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#chunk1_hdr_err}
  */
  readonly chunk1HdrErr?: number;
  /**
  * Enable automatic packet-capture for Chunk Hdr Err2 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#chunk2_hdr_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#chunk2_hdr_err}
  */
  readonly chunk2HdrErr?: number;
  /**
  * Enable automatic packet-capture for Chunk Bad Trail Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#chunk_bad_trail_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#chunk_bad_trail_err}
  */
  readonly chunkBadTrailErr?: number;
  /**
  * Enable automatic packet-capture for Encap HDR Incomplete Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#encap_hdr_incomplete_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#encap_hdr_incomplete_err}
  */
  readonly encapHdrIncompleteErr?: number;
  /**
  * Enable automatic packet-capture for HTTP Resp Hdr Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#http_resp_hdr_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#http_resp_hdr_err}
  */
  readonly httpRespHdrErr?: number;
  /**
  * Enable automatic packet-capture for HTTP Response Line Parse Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#http_resp_line_parse_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#http_resp_line_parse_err}
  */
  readonly httpRespLineParseErr?: number;
  /**
  * Enable automatic packet-capture for HTTP Response Line Read Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#http_resp_line_read_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#http_resp_line_read_err}
  */
  readonly httpRespLineReadErr?: number;
  /**
  * Enable automatic packet-capture for ICAP Line Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#icap_line_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#icap_line_err}
  */
  readonly icapLineErr?: number;
  /**
  * Enable automatic packet-capture for ICAP Ver Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#icap_ver_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#icap_ver_err}
  */
  readonly icapVerErr?: number;
  /**
  * Enable automatic packet-capture for No ICAP Resp Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#no_icap_resp_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#no_icap_resp_err}
  */
  readonly noIcapRespErr?: number;
  /**
  * Enable automatic packet-capture for No Payload Buff Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#no_payload_buff_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#no_payload_buff_err}
  */
  readonly noPayloadBuffErr?: number;
  /**
  * Enable automatic packet-capture for No Payload In Next Buff Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#no_payload_next_buff_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#no_payload_next_buff_err}
  */
  readonly noPayloadNextBuffErr?: number;
  /**
  * Enable automatic packet-capture for No Status Code Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#no_status_code_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#no_status_code_err}
  */
  readonly noStatusCodeErr?: number;
  /**
  * Enable automatic packet-capture for Prepare ICAP req fail Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#prep_req_fail_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#prep_req_fail_err}
  */
  readonly prepReqFailErr?: number;
  /**
  * Enable automatic packet-capture for Req Hdr Incomplete Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#req_hdr_incomplete_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#req_hdr_incomplete_err}
  */
  readonly reqHdrIncompleteErr?: number;
  /**
  * Enable automatic packet-capture for Resp Hdr Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#resp_hdr_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#resp_hdr_err}
  */
  readonly respHdrErr?: number;
  /**
  * Enable automatic packet-capture for Resp Hdr Incomplete Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#resp_hdr_incomplete_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#resp_hdr_incomplete_err}
  */
  readonly respHdrIncompleteErr?: number;
  /**
  * Enable automatic packet-capture for Resp Line Parse Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#resp_line_parse_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#resp_line_parse_err}
  */
  readonly respLineParseErr?: number;
  /**
  * Enable automatic packet-capture for Resp Line Read Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#resp_line_read_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#resp_line_read_err}
  */
  readonly respLineReadErr?: number;
  /**
  * Enable automatic packet-capture for Server Select Fail Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#serv_sel_fail_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#serv_sel_fail_err}
  */
  readonly servSelFailErr?: number;
  /**
  * Enable automatic packet-capture for Start ICAP conn fail Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#start_icap_conn_fail_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#start_icap_conn_fail_err}
  */
  readonly startIcapConnFailErr?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsIncA): any {
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
    encap_hdr_incomplete_err: cdktf.numberToTerraform(struct!.encapHdrIncompleteErr),
    http_resp_hdr_err: cdktf.numberToTerraform(struct!.httpRespHdrErr),
    http_resp_line_parse_err: cdktf.numberToTerraform(struct!.httpRespLineParseErr),
    http_resp_line_read_err: cdktf.numberToTerraform(struct!.httpRespLineReadErr),
    icap_line_err: cdktf.numberToTerraform(struct!.icapLineErr),
    icap_ver_err: cdktf.numberToTerraform(struct!.icapVerErr),
    no_icap_resp_err: cdktf.numberToTerraform(struct!.noIcapRespErr),
    no_payload_buff_err: cdktf.numberToTerraform(struct!.noPayloadBuffErr),
    no_payload_next_buff_err: cdktf.numberToTerraform(struct!.noPayloadNextBuffErr),
    no_status_code_err: cdktf.numberToTerraform(struct!.noStatusCodeErr),
    prep_req_fail_err: cdktf.numberToTerraform(struct!.prepReqFailErr),
    req_hdr_incomplete_err: cdktf.numberToTerraform(struct!.reqHdrIncompleteErr),
    resp_hdr_err: cdktf.numberToTerraform(struct!.respHdrErr),
    resp_hdr_incomplete_err: cdktf.numberToTerraform(struct!.respHdrIncompleteErr),
    resp_line_parse_err: cdktf.numberToTerraform(struct!.respLineParseErr),
    resp_line_read_err: cdktf.numberToTerraform(struct!.respLineReadErr),
    serv_sel_fail_err: cdktf.numberToTerraform(struct!.servSelFailErr),
    start_icap_conn_fail_err: cdktf.numberToTerraform(struct!.startIcapConnFailErr),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsIncA): any {
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
    encap_hdr_incomplete_err: {
      value: cdktf.numberToHclTerraform(struct!.encapHdrIncompleteErr),
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
    req_hdr_incomplete_err: {
      value: cdktf.numberToHclTerraform(struct!.reqHdrIncompleteErr),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsIncA | undefined {
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
    if (this._encapHdrIncompleteErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapHdrIncompleteErr = this._encapHdrIncompleteErr;
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
    if (this._reqHdrIncompleteErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqHdrIncompleteErr = this._reqHdrIncompleteErr;
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
    if (this._servSelFailErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.servSelFailErr = this._servSelFailErr;
    }
    if (this._startIcapConnFailErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIcapConnFailErr = this._startIcapConnFailErr;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appServConnErr = undefined;
      this._appServConnNoPcbErr = undefined;
      this._chunk1HdrErr = undefined;
      this._chunk2HdrErr = undefined;
      this._chunkBadTrailErr = undefined;
      this._encapHdrIncompleteErr = undefined;
      this._httpRespHdrErr = undefined;
      this._httpRespLineParseErr = undefined;
      this._httpRespLineReadErr = undefined;
      this._icapLineErr = undefined;
      this._icapVerErr = undefined;
      this._noIcapRespErr = undefined;
      this._noPayloadBuffErr = undefined;
      this._noPayloadNextBuffErr = undefined;
      this._noStatusCodeErr = undefined;
      this._prepReqFailErr = undefined;
      this._reqHdrIncompleteErr = undefined;
      this._respHdrErr = undefined;
      this._respHdrIncompleteErr = undefined;
      this._respLineParseErr = undefined;
      this._respLineReadErr = undefined;
      this._servSelFailErr = undefined;
      this._startIcapConnFailErr = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appServConnErr = value.appServConnErr;
      this._appServConnNoPcbErr = value.appServConnNoPcbErr;
      this._chunk1HdrErr = value.chunk1HdrErr;
      this._chunk2HdrErr = value.chunk2HdrErr;
      this._chunkBadTrailErr = value.chunkBadTrailErr;
      this._encapHdrIncompleteErr = value.encapHdrIncompleteErr;
      this._httpRespHdrErr = value.httpRespHdrErr;
      this._httpRespLineParseErr = value.httpRespLineParseErr;
      this._httpRespLineReadErr = value.httpRespLineReadErr;
      this._icapLineErr = value.icapLineErr;
      this._icapVerErr = value.icapVerErr;
      this._noIcapRespErr = value.noIcapRespErr;
      this._noPayloadBuffErr = value.noPayloadBuffErr;
      this._noPayloadNextBuffErr = value.noPayloadNextBuffErr;
      this._noStatusCodeErr = value.noStatusCodeErr;
      this._prepReqFailErr = value.prepReqFailErr;
      this._reqHdrIncompleteErr = value.reqHdrIncompleteErr;
      this._respHdrErr = value.respHdrErr;
      this._respHdrIncompleteErr = value.respHdrIncompleteErr;
      this._respLineParseErr = value.respLineParseErr;
      this._respLineReadErr = value.respLineReadErr;
      this._servSelFailErr = value.servSelFailErr;
      this._startIcapConnFailErr = value.startIcapConnFailErr;
      this._uuid = value.uuid;
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
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA {
  /**
  * Enable automatic packet-capture for App Server Conn Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#app_serv_conn_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#app_serv_conn_err}
  */
  readonly appServConnErr?: number;
  /**
  * Enable automatic packet-capture for App Server Conn no ES PCB Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#app_serv_conn_no_pcb_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#app_serv_conn_no_pcb_err}
  */
  readonly appServConnNoPcbErr?: number;
  /**
  * Enable automatic packet-capture for Chunk Hdr Err1 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#chunk1_hdr_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#chunk1_hdr_err}
  */
  readonly chunk1HdrErr?: number;
  /**
  * Enable automatic packet-capture for Chunk Hdr Err2 Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#chunk2_hdr_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#chunk2_hdr_err}
  */
  readonly chunk2HdrErr?: number;
  /**
  * Enable automatic packet-capture for Chunk Bad Trail Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#chunk_bad_trail_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#chunk_bad_trail_err}
  */
  readonly chunkBadTrailErr?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Encap HDR Incomplete Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#encap_hdr_incomplete_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#encap_hdr_incomplete_err}
  */
  readonly encapHdrIncompleteErr?: number;
  /**
  * Enable automatic packet-capture for HTTP Resp Hdr Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#http_resp_hdr_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#http_resp_hdr_err}
  */
  readonly httpRespHdrErr?: number;
  /**
  * Enable automatic packet-capture for HTTP Response Line Parse Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#http_resp_line_parse_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#http_resp_line_parse_err}
  */
  readonly httpRespLineParseErr?: number;
  /**
  * Enable automatic packet-capture for HTTP Response Line Read Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#http_resp_line_read_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#http_resp_line_read_err}
  */
  readonly httpRespLineReadErr?: number;
  /**
  * Enable automatic packet-capture for ICAP Line Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#icap_line_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#icap_line_err}
  */
  readonly icapLineErr?: number;
  /**
  * Enable automatic packet-capture for ICAP Ver Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#icap_ver_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#icap_ver_err}
  */
  readonly icapVerErr?: number;
  /**
  * Enable automatic packet-capture for No ICAP Resp Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#no_icap_resp_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#no_icap_resp_err}
  */
  readonly noIcapRespErr?: number;
  /**
  * Enable automatic packet-capture for No Payload Buff Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#no_payload_buff_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#no_payload_buff_err}
  */
  readonly noPayloadBuffErr?: number;
  /**
  * Enable automatic packet-capture for No Payload In Next Buff Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#no_payload_next_buff_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#no_payload_next_buff_err}
  */
  readonly noPayloadNextBuffErr?: number;
  /**
  * Enable automatic packet-capture for No Status Code Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#no_status_code_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#no_status_code_err}
  */
  readonly noStatusCodeErr?: number;
  /**
  * Enable automatic packet-capture for Prepare ICAP req fail Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#prep_req_fail_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#prep_req_fail_err}
  */
  readonly prepReqFailErr?: number;
  /**
  * Enable automatic packet-capture for Req Hdr Incomplete Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#req_hdr_incomplete_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#req_hdr_incomplete_err}
  */
  readonly reqHdrIncompleteErr?: number;
  /**
  * Enable automatic packet-capture for Resp Hdr Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#resp_hdr_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#resp_hdr_err}
  */
  readonly respHdrErr?: number;
  /**
  * Enable automatic packet-capture for Resp Hdr Incomplete Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#resp_hdr_incomplete_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#resp_hdr_incomplete_err}
  */
  readonly respHdrIncompleteErr?: number;
  /**
  * Enable automatic packet-capture for Resp Line Parse Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#resp_line_parse_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#resp_line_parse_err}
  */
  readonly respLineParseErr?: number;
  /**
  * Enable automatic packet-capture for Resp Line Read Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#resp_line_read_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#resp_line_read_err}
  */
  readonly respLineReadErr?: number;
  /**
  * Enable automatic packet-capture for Server Select Fail Err Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#serv_sel_fail_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#serv_sel_fail_err}
  */
  readonly servSelFailErr?: number;
  /**
  * Enable automatic packet-capture for Start ICAP conn fail Stats
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#start_icap_conn_fail_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#start_icap_conn_fail_err}
  */
  readonly startIcapConnFailErr?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA): any {
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
    duration: cdktf.numberToTerraform(struct!.duration),
    encap_hdr_incomplete_err: cdktf.numberToTerraform(struct!.encapHdrIncompleteErr),
    http_resp_hdr_err: cdktf.numberToTerraform(struct!.httpRespHdrErr),
    http_resp_line_parse_err: cdktf.numberToTerraform(struct!.httpRespLineParseErr),
    http_resp_line_read_err: cdktf.numberToTerraform(struct!.httpRespLineReadErr),
    icap_line_err: cdktf.numberToTerraform(struct!.icapLineErr),
    icap_ver_err: cdktf.numberToTerraform(struct!.icapVerErr),
    no_icap_resp_err: cdktf.numberToTerraform(struct!.noIcapRespErr),
    no_payload_buff_err: cdktf.numberToTerraform(struct!.noPayloadBuffErr),
    no_payload_next_buff_err: cdktf.numberToTerraform(struct!.noPayloadNextBuffErr),
    no_status_code_err: cdktf.numberToTerraform(struct!.noStatusCodeErr),
    prep_req_fail_err: cdktf.numberToTerraform(struct!.prepReqFailErr),
    req_hdr_incomplete_err: cdktf.numberToTerraform(struct!.reqHdrIncompleteErr),
    resp_hdr_err: cdktf.numberToTerraform(struct!.respHdrErr),
    resp_hdr_incomplete_err: cdktf.numberToTerraform(struct!.respHdrIncompleteErr),
    resp_line_parse_err: cdktf.numberToTerraform(struct!.respLineParseErr),
    resp_line_read_err: cdktf.numberToTerraform(struct!.respLineReadErr),
    serv_sel_fail_err: cdktf.numberToTerraform(struct!.servSelFailErr),
    start_icap_conn_fail_err: cdktf.numberToTerraform(struct!.startIcapConnFailErr),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA): any {
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
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
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
    req_hdr_incomplete_err: {
      value: cdktf.numberToHclTerraform(struct!.reqHdrIncompleteErr),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA | undefined {
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
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._encapHdrIncompleteErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.encapHdrIncompleteErr = this._encapHdrIncompleteErr;
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
    if (this._reqHdrIncompleteErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqHdrIncompleteErr = this._reqHdrIncompleteErr;
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
    if (this._servSelFailErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.servSelFailErr = this._servSelFailErr;
    }
    if (this._startIcapConnFailErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.startIcapConnFailErr = this._startIcapConnFailErr;
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

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appServConnErr = undefined;
      this._appServConnNoPcbErr = undefined;
      this._chunk1HdrErr = undefined;
      this._chunk2HdrErr = undefined;
      this._chunkBadTrailErr = undefined;
      this._duration = undefined;
      this._encapHdrIncompleteErr = undefined;
      this._httpRespHdrErr = undefined;
      this._httpRespLineParseErr = undefined;
      this._httpRespLineReadErr = undefined;
      this._icapLineErr = undefined;
      this._icapVerErr = undefined;
      this._noIcapRespErr = undefined;
      this._noPayloadBuffErr = undefined;
      this._noPayloadNextBuffErr = undefined;
      this._noStatusCodeErr = undefined;
      this._prepReqFailErr = undefined;
      this._reqHdrIncompleteErr = undefined;
      this._respHdrErr = undefined;
      this._respHdrIncompleteErr = undefined;
      this._respLineParseErr = undefined;
      this._respLineReadErr = undefined;
      this._servSelFailErr = undefined;
      this._startIcapConnFailErr = undefined;
      this._thresholdExceededBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appServConnErr = value.appServConnErr;
      this._appServConnNoPcbErr = value.appServConnNoPcbErr;
      this._chunk1HdrErr = value.chunk1HdrErr;
      this._chunk2HdrErr = value.chunk2HdrErr;
      this._chunkBadTrailErr = value.chunkBadTrailErr;
      this._duration = value.duration;
      this._encapHdrIncompleteErr = value.encapHdrIncompleteErr;
      this._httpRespHdrErr = value.httpRespHdrErr;
      this._httpRespLineParseErr = value.httpRespLineParseErr;
      this._httpRespLineReadErr = value.httpRespLineReadErr;
      this._icapLineErr = value.icapLineErr;
      this._icapVerErr = value.icapVerErr;
      this._noIcapRespErr = value.noIcapRespErr;
      this._noPayloadBuffErr = value.noPayloadBuffErr;
      this._noPayloadNextBuffErr = value.noPayloadNextBuffErr;
      this._noStatusCodeErr = value.noStatusCodeErr;
      this._prepReqFailErr = value.prepReqFailErr;
      this._reqHdrIncompleteErr = value.reqHdrIncompleteErr;
      this._respHdrErr = value.respHdrErr;
      this._respHdrIncompleteErr = value.respHdrIncompleteErr;
      this._respLineParseErr = value.respLineParseErr;
      this._respLineReadErr = value.respLineReadErr;
      this._servSelFailErr = value.servSelFailErr;
      this._startIcapConnFailErr = value.startIcapConnFailErr;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._uuid = value.uuid;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_icap',
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
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateA) {
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
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbIcapTriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
