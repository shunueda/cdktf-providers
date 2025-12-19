// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Forward REQ data failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate#forward_req_data_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA#forward_req_data_fail}
  */
  readonly forwardReqDataFail?: number;
  /**
  * Enable automatic packet-capture for Forward request failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate#forward_req_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA#forward_req_fail}
  */
  readonly forwardReqFail?: number;
  /**
  * Enable automatic packet-capture for Get all headers fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate#get_all_headers_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA#get_all_headers_fail}
  */
  readonly fetchAllHeadersFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Ins response line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate#insert_resonse_line_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA#insert_resonse_line_fail}
  */
  readonly insertResonseLineFail?: number;
  /**
  * Enable automatic packet-capture for Line extend fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate#line_extend_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA#line_extend_fail}
  */
  readonly lineExtendFail?: number;
  /**
  * Enable automatic packet-capture for Table extend fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate#line_table_extend_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA#line_table_extend_fail}
  */
  readonly lineTableExtendFail?: number;
  /**
  * Enable automatic packet-capture for Line too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate#line_too_long VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA#line_too_long}
  */
  readonly lineTooLong?: number;
  /**
  * Enable automatic packet-capture for No proxy error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate#no_proxy VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA#no_proxy}
  */
  readonly noProxy?: number;
  /**
  * Enable automatic packet-capture for Parse request failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate#parse_req_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA#parse_req_fail}
  */
  readonly parseReqFail?: number;
  /**
  * Enable automatic packet-capture for Parse request line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate#parse_request_line_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA#parse_request_line_fail}
  */
  readonly parseRequestLineFail?: number;
  /**
  * Enable automatic packet-capture for Parse response line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate#parse_resonse_line_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA#parse_resonse_line_fail}
  */
  readonly parseResonseLineFail?: number;
  /**
  * Enable automatic packet-capture for Read request line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate#read_request_line_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA#read_request_line_fail}
  */
  readonly readRequestLineFail?: number;
  /**
  * Enable automatic packet-capture for Recv server unknown-code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate#recv_server_unknow_reply_code VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA#recv_server_unknow_reply_code}
  */
  readonly recvServerUnknowReplyCode?: number;
  /**
  * Enable automatic packet-capture for Del response line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate#remove_resonse_line_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA#remove_resonse_line_fail}
  */
  readonly removeResonseLineFail?: number;
  /**
  * Enable automatic packet-capture for Sent client serv-not-rdy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate#send_client_service_not_ready VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA#send_client_service_not_ready}
  */
  readonly sendClientServiceNotReady?: number;
  /**
  * Enable automatic packet-capture for Server selection failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate#server_select_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA#server_select_fail}
  */
  readonly serverSelectFail?: number;
  /**
  * Enable automatic packet-capture for Server side STARTTLS fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate#server_starttls_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA#server_starttls_fail}
  */
  readonly serverStarttlsFail?: number;
  /**
  * Enable automatic packet-capture for Source NAT failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate#snat_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate#template_name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA#template_name}
  */
  readonly templateName: string;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for Too many headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate#too_many_headers VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA#too_many_headers}
  */
  readonly tooManyHeaders?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp_trigger_stats_rate',
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
    this._duration = config.duration;
    this._forwardReqDataFail = config.forwardReqDataFail;
    this._forwardReqFail = config.forwardReqFail;
    this._getAllHeadersFail = config.fetchAllHeadersFail;
    this._id = config.id;
    this._insertResonseLineFail = config.insertResonseLineFail;
    this._lineExtendFail = config.lineExtendFail;
    this._lineTableExtendFail = config.lineTableExtendFail;
    this._lineTooLong = config.lineTooLong;
    this._noProxy = config.noProxy;
    this._parseReqFail = config.parseReqFail;
    this._parseRequestLineFail = config.parseRequestLineFail;
    this._parseResonseLineFail = config.parseResonseLineFail;
    this._readRequestLineFail = config.readRequestLineFail;
    this._recvServerUnknowReplyCode = config.recvServerUnknowReplyCode;
    this._removeResonseLineFail = config.removeResonseLineFail;
    this._sendClientServiceNotReady = config.sendClientServiceNotReady;
    this._serverSelectFail = config.serverSelectFail;
    this._serverStarttlsFail = config.serverStarttlsFail;
    this._snatFail = config.snatFail;
    this._templateName = config.templateName;
    this._thresholdExceededBy = config.thresholdExceededBy;
    this._tooManyHeaders = config.tooManyHeaders;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // forward_req_data_fail - computed: false, optional: true, required: false
  private _forwardReqDataFail?: number; 
  public get forwardReqDataFail() {
    return this.getNumberAttribute('forward_req_data_fail');
  }
  public set forwardReqDataFail(value: number) {
    this._forwardReqDataFail = value;
  }
  public resetForwardReqDataFail() {
    this._forwardReqDataFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardReqDataFailInput() {
    return this._forwardReqDataFail;
  }

  // forward_req_fail - computed: false, optional: true, required: false
  private _forwardReqFail?: number; 
  public get forwardReqFail() {
    return this.getNumberAttribute('forward_req_fail');
  }
  public set forwardReqFail(value: number) {
    this._forwardReqFail = value;
  }
  public resetForwardReqFail() {
    this._forwardReqFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardReqFailInput() {
    return this._forwardReqFail;
  }

  // get_all_headers_fail - computed: false, optional: true, required: false
  private _getAllHeadersFail?: number; 
  public get fetchAllHeadersFail() {
    return this.getNumberAttribute('get_all_headers_fail');
  }
  public set fetchAllHeadersFail(value: number) {
    this._getAllHeadersFail = value;
  }
  public resetFetchAllHeadersFail() {
    this._getAllHeadersFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllHeadersFailInput() {
    return this._getAllHeadersFail;
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

  // insert_resonse_line_fail - computed: false, optional: true, required: false
  private _insertResonseLineFail?: number; 
  public get insertResonseLineFail() {
    return this.getNumberAttribute('insert_resonse_line_fail');
  }
  public set insertResonseLineFail(value: number) {
    this._insertResonseLineFail = value;
  }
  public resetInsertResonseLineFail() {
    this._insertResonseLineFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertResonseLineFailInput() {
    return this._insertResonseLineFail;
  }

  // line_extend_fail - computed: false, optional: true, required: false
  private _lineExtendFail?: number; 
  public get lineExtendFail() {
    return this.getNumberAttribute('line_extend_fail');
  }
  public set lineExtendFail(value: number) {
    this._lineExtendFail = value;
  }
  public resetLineExtendFail() {
    this._lineExtendFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineExtendFailInput() {
    return this._lineExtendFail;
  }

  // line_table_extend_fail - computed: false, optional: true, required: false
  private _lineTableExtendFail?: number; 
  public get lineTableExtendFail() {
    return this.getNumberAttribute('line_table_extend_fail');
  }
  public set lineTableExtendFail(value: number) {
    this._lineTableExtendFail = value;
  }
  public resetLineTableExtendFail() {
    this._lineTableExtendFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lineTableExtendFailInput() {
    return this._lineTableExtendFail;
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

  // no_proxy - computed: false, optional: true, required: false
  private _noProxy?: number; 
  public get noProxy() {
    return this.getNumberAttribute('no_proxy');
  }
  public set noProxy(value: number) {
    this._noProxy = value;
  }
  public resetNoProxy() {
    this._noProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noProxyInput() {
    return this._noProxy;
  }

  // parse_req_fail - computed: false, optional: true, required: false
  private _parseReqFail?: number; 
  public get parseReqFail() {
    return this.getNumberAttribute('parse_req_fail');
  }
  public set parseReqFail(value: number) {
    this._parseReqFail = value;
  }
  public resetParseReqFail() {
    this._parseReqFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseReqFailInput() {
    return this._parseReqFail;
  }

  // parse_request_line_fail - computed: false, optional: true, required: false
  private _parseRequestLineFail?: number; 
  public get parseRequestLineFail() {
    return this.getNumberAttribute('parse_request_line_fail');
  }
  public set parseRequestLineFail(value: number) {
    this._parseRequestLineFail = value;
  }
  public resetParseRequestLineFail() {
    this._parseRequestLineFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseRequestLineFailInput() {
    return this._parseRequestLineFail;
  }

  // parse_resonse_line_fail - computed: false, optional: true, required: false
  private _parseResonseLineFail?: number; 
  public get parseResonseLineFail() {
    return this.getNumberAttribute('parse_resonse_line_fail');
  }
  public set parseResonseLineFail(value: number) {
    this._parseResonseLineFail = value;
  }
  public resetParseResonseLineFail() {
    this._parseResonseLineFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parseResonseLineFailInput() {
    return this._parseResonseLineFail;
  }

  // read_request_line_fail - computed: false, optional: true, required: false
  private _readRequestLineFail?: number; 
  public get readRequestLineFail() {
    return this.getNumberAttribute('read_request_line_fail');
  }
  public set readRequestLineFail(value: number) {
    this._readRequestLineFail = value;
  }
  public resetReadRequestLineFail() {
    this._readRequestLineFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readRequestLineFailInput() {
    return this._readRequestLineFail;
  }

  // recv_server_unknow_reply_code - computed: false, optional: true, required: false
  private _recvServerUnknowReplyCode?: number; 
  public get recvServerUnknowReplyCode() {
    return this.getNumberAttribute('recv_server_unknow_reply_code');
  }
  public set recvServerUnknowReplyCode(value: number) {
    this._recvServerUnknowReplyCode = value;
  }
  public resetRecvServerUnknowReplyCode() {
    this._recvServerUnknowReplyCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recvServerUnknowReplyCodeInput() {
    return this._recvServerUnknowReplyCode;
  }

  // remove_resonse_line_fail - computed: false, optional: true, required: false
  private _removeResonseLineFail?: number; 
  public get removeResonseLineFail() {
    return this.getNumberAttribute('remove_resonse_line_fail');
  }
  public set removeResonseLineFail(value: number) {
    this._removeResonseLineFail = value;
  }
  public resetRemoveResonseLineFail() {
    this._removeResonseLineFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get removeResonseLineFailInput() {
    return this._removeResonseLineFail;
  }

  // send_client_service_not_ready - computed: false, optional: true, required: false
  private _sendClientServiceNotReady?: number; 
  public get sendClientServiceNotReady() {
    return this.getNumberAttribute('send_client_service_not_ready');
  }
  public set sendClientServiceNotReady(value: number) {
    this._sendClientServiceNotReady = value;
  }
  public resetSendClientServiceNotReady() {
    this._sendClientServiceNotReady = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendClientServiceNotReadyInput() {
    return this._sendClientServiceNotReady;
  }

  // server_select_fail - computed: false, optional: true, required: false
  private _serverSelectFail?: number; 
  public get serverSelectFail() {
    return this.getNumberAttribute('server_select_fail');
  }
  public set serverSelectFail(value: number) {
    this._serverSelectFail = value;
  }
  public resetServerSelectFail() {
    this._serverSelectFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverSelectFailInput() {
    return this._serverSelectFail;
  }

  // server_starttls_fail - computed: false, optional: true, required: false
  private _serverStarttlsFail?: number; 
  public get serverStarttlsFail() {
    return this.getNumberAttribute('server_starttls_fail');
  }
  public set serverStarttlsFail(value: number) {
    this._serverStarttlsFail = value;
  }
  public resetServerStarttlsFail() {
    this._serverStarttlsFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverStarttlsFailInput() {
    return this._serverStarttlsFail;
  }

  // snat_fail - computed: false, optional: true, required: false
  private _snatFail?: number; 
  public get snatFail() {
    return this.getNumberAttribute('snat_fail');
  }
  public set snatFail(value: number) {
    this._snatFail = value;
  }
  public resetSnatFail() {
    this._snatFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatFailInput() {
    return this._snatFail;
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
      duration: cdktf.numberToTerraform(this._duration),
      forward_req_data_fail: cdktf.numberToTerraform(this._forwardReqDataFail),
      forward_req_fail: cdktf.numberToTerraform(this._forwardReqFail),
      get_all_headers_fail: cdktf.numberToTerraform(this._getAllHeadersFail),
      id: cdktf.stringToTerraform(this._id),
      insert_resonse_line_fail: cdktf.numberToTerraform(this._insertResonseLineFail),
      line_extend_fail: cdktf.numberToTerraform(this._lineExtendFail),
      line_table_extend_fail: cdktf.numberToTerraform(this._lineTableExtendFail),
      line_too_long: cdktf.numberToTerraform(this._lineTooLong),
      no_proxy: cdktf.numberToTerraform(this._noProxy),
      parse_req_fail: cdktf.numberToTerraform(this._parseReqFail),
      parse_request_line_fail: cdktf.numberToTerraform(this._parseRequestLineFail),
      parse_resonse_line_fail: cdktf.numberToTerraform(this._parseResonseLineFail),
      read_request_line_fail: cdktf.numberToTerraform(this._readRequestLineFail),
      recv_server_unknow_reply_code: cdktf.numberToTerraform(this._recvServerUnknowReplyCode),
      remove_resonse_line_fail: cdktf.numberToTerraform(this._removeResonseLineFail),
      send_client_service_not_ready: cdktf.numberToTerraform(this._sendClientServiceNotReady),
      server_select_fail: cdktf.numberToTerraform(this._serverSelectFail),
      server_starttls_fail: cdktf.numberToTerraform(this._serverStarttlsFail),
      snat_fail: cdktf.numberToTerraform(this._snatFail),
      template_name: cdktf.stringToTerraform(this._templateName),
      threshold_exceeded_by: cdktf.numberToTerraform(this._thresholdExceededBy),
      too_many_headers: cdktf.numberToTerraform(this._tooManyHeaders),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_req_data_fail: {
        value: cdktf.numberToHclTerraform(this._forwardReqDataFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_req_fail: {
        value: cdktf.numberToHclTerraform(this._forwardReqFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      get_all_headers_fail: {
        value: cdktf.numberToHclTerraform(this._getAllHeadersFail),
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
      insert_resonse_line_fail: {
        value: cdktf.numberToHclTerraform(this._insertResonseLineFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      line_extend_fail: {
        value: cdktf.numberToHclTerraform(this._lineExtendFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      line_table_extend_fail: {
        value: cdktf.numberToHclTerraform(this._lineTableExtendFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      line_too_long: {
        value: cdktf.numberToHclTerraform(this._lineTooLong),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_proxy: {
        value: cdktf.numberToHclTerraform(this._noProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parse_req_fail: {
        value: cdktf.numberToHclTerraform(this._parseReqFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parse_request_line_fail: {
        value: cdktf.numberToHclTerraform(this._parseRequestLineFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      parse_resonse_line_fail: {
        value: cdktf.numberToHclTerraform(this._parseResonseLineFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      read_request_line_fail: {
        value: cdktf.numberToHclTerraform(this._readRequestLineFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      recv_server_unknow_reply_code: {
        value: cdktf.numberToHclTerraform(this._recvServerUnknowReplyCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remove_resonse_line_fail: {
        value: cdktf.numberToHclTerraform(this._removeResonseLineFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      send_client_service_not_ready: {
        value: cdktf.numberToHclTerraform(this._sendClientServiceNotReady),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_select_fail: {
        value: cdktf.numberToHclTerraform(this._serverSelectFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_starttls_fail: {
        value: cdktf.numberToHclTerraform(this._serverStarttlsFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snat_fail: {
        value: cdktf.numberToHclTerraform(this._snatFail),
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
      too_many_headers: {
        value: cdktf.numberToHclTerraform(this._tooManyHeaders),
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
