// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesSmtpVportTmplTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for Forward REQ data failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc#forward_req_data_fail VisibilityPacketCaptureObjectTemplatesSmtpVportTmplTriggerStatsIncA#forward_req_data_fail}
  */
  readonly forwardReqDataFail?: number;
  /**
  * Enable automatic packet-capture for Forward request failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc#forward_req_fail VisibilityPacketCaptureObjectTemplatesSmtpVportTmplTriggerStatsIncA#forward_req_fail}
  */
  readonly forwardReqFail?: number;
  /**
  * Enable automatic packet-capture for Get all headers fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc#get_all_headers_fail VisibilityPacketCaptureObjectTemplatesSmtpVportTmplTriggerStatsIncA#get_all_headers_fail}
  */
  readonly fetchAllHeadersFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc#id VisibilityPacketCaptureObjectTemplatesSmtpVportTmplTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Ins response line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc#insert_resonse_line_fail VisibilityPacketCaptureObjectTemplatesSmtpVportTmplTriggerStatsIncA#insert_resonse_line_fail}
  */
  readonly insertResonseLineFail?: number;
  /**
  * Enable automatic packet-capture for Line extend fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc#line_extend_fail VisibilityPacketCaptureObjectTemplatesSmtpVportTmplTriggerStatsIncA#line_extend_fail}
  */
  readonly lineExtendFail?: number;
  /**
  * Enable automatic packet-capture for Table extend fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc#line_table_extend_fail VisibilityPacketCaptureObjectTemplatesSmtpVportTmplTriggerStatsIncA#line_table_extend_fail}
  */
  readonly lineTableExtendFail?: number;
  /**
  * Enable automatic packet-capture for Line too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc#line_too_long VisibilityPacketCaptureObjectTemplatesSmtpVportTmplTriggerStatsIncA#line_too_long}
  */
  readonly lineTooLong?: number;
  /**
  * Enable automatic packet-capture for No proxy error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc#no_proxy VisibilityPacketCaptureObjectTemplatesSmtpVportTmplTriggerStatsIncA#no_proxy}
  */
  readonly noProxy?: number;
  /**
  * Enable automatic packet-capture for Parse request failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc#parse_req_fail VisibilityPacketCaptureObjectTemplatesSmtpVportTmplTriggerStatsIncA#parse_req_fail}
  */
  readonly parseReqFail?: number;
  /**
  * Enable automatic packet-capture for Parse request line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc#parse_request_line_fail VisibilityPacketCaptureObjectTemplatesSmtpVportTmplTriggerStatsIncA#parse_request_line_fail}
  */
  readonly parseRequestLineFail?: number;
  /**
  * Enable automatic packet-capture for Parse response line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc#parse_resonse_line_fail VisibilityPacketCaptureObjectTemplatesSmtpVportTmplTriggerStatsIncA#parse_resonse_line_fail}
  */
  readonly parseResonseLineFail?: number;
  /**
  * Enable automatic packet-capture for Read request line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc#read_request_line_fail VisibilityPacketCaptureObjectTemplatesSmtpVportTmplTriggerStatsIncA#read_request_line_fail}
  */
  readonly readRequestLineFail?: number;
  /**
  * Enable automatic packet-capture for Recv server unknown-code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc#recv_server_unknow_reply_code VisibilityPacketCaptureObjectTemplatesSmtpVportTmplTriggerStatsIncA#recv_server_unknow_reply_code}
  */
  readonly recvServerUnknowReplyCode?: number;
  /**
  * Enable automatic packet-capture for Del response line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc#remove_resonse_line_fail VisibilityPacketCaptureObjectTemplatesSmtpVportTmplTriggerStatsIncA#remove_resonse_line_fail}
  */
  readonly removeResonseLineFail?: number;
  /**
  * Enable automatic packet-capture for Sent client serv-not-rdy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc#send_client_service_not_ready VisibilityPacketCaptureObjectTemplatesSmtpVportTmplTriggerStatsIncA#send_client_service_not_ready}
  */
  readonly sendClientServiceNotReady?: number;
  /**
  * Enable automatic packet-capture for Server selection failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc#server_select_fail VisibilityPacketCaptureObjectTemplatesSmtpVportTmplTriggerStatsIncA#server_select_fail}
  */
  readonly serverSelectFail?: number;
  /**
  * Enable automatic packet-capture for Server side STARTTLS fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc#server_starttls_fail VisibilityPacketCaptureObjectTemplatesSmtpVportTmplTriggerStatsIncA#server_starttls_fail}
  */
  readonly serverStarttlsFail?: number;
  /**
  * Smtp_vport_tmpl_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc#smtp_vport_tmpl_name VisibilityPacketCaptureObjectTemplatesSmtpVportTmplTriggerStatsIncA#smtp_vport_tmpl_name}
  */
  readonly smtpVportTmplName: string;
  /**
  * Enable automatic packet-capture for Source NAT failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc#snat_fail VisibilityPacketCaptureObjectTemplatesSmtpVportTmplTriggerStatsIncA#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Enable automatic packet-capture for Too many headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc#too_many_headers VisibilityPacketCaptureObjectTemplatesSmtpVportTmplTriggerStatsIncA#too_many_headers}
  */
  readonly tooManyHeaders?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc#uuid VisibilityPacketCaptureObjectTemplatesSmtpVportTmplTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc}
*/
export class VisibilityPacketCaptureObjectTemplatesSmtpVportTmplTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesSmtpVportTmplTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesSmtpVportTmplTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesSmtpVportTmplTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesSmtpVportTmplTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesSmtpVportTmplTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesSmtpVportTmplTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_smtp_vport_tmpl_trigger_stats_inc',
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
    this._smtpVportTmplName = config.smtpVportTmplName;
    this._snatFail = config.snatFail;
    this._tooManyHeaders = config.tooManyHeaders;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // smtp_vport_tmpl_name - computed: false, optional: false, required: true
  private _smtpVportTmplName?: string; 
  public get smtpVportTmplName() {
    return this.getStringAttribute('smtp_vport_tmpl_name');
  }
  public set smtpVportTmplName(value: string) {
    this._smtpVportTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpVportTmplNameInput() {
    return this._smtpVportTmplName;
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
      smtp_vport_tmpl_name: cdktf.stringToTerraform(this._smtpVportTmplName),
      snat_fail: cdktf.numberToTerraform(this._snatFail),
      too_many_headers: cdktf.numberToTerraform(this._tooManyHeaders),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      smtp_vport_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._smtpVportTmplName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snat_fail: {
        value: cdktf.numberToHclTerraform(this._snatFail),
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
