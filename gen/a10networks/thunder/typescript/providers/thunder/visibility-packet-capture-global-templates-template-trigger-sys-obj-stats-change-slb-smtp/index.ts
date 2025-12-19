// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#template_name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#template_name}
  */
  readonly templateName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for Forward REQ data failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#forward_req_data_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#forward_req_data_fail}
  */
  readonly forwardReqDataFail?: number;
  /**
  * Enable automatic packet-capture for Forward request failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#forward_req_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#forward_req_fail}
  */
  readonly forwardReqFail?: number;
  /**
  * Enable automatic packet-capture for Get all headers fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#get_all_headers_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#get_all_headers_fail}
  */
  readonly fetchAllHeadersFail?: number;
  /**
  * Enable automatic packet-capture for Ins response line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#insert_resonse_line_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#insert_resonse_line_fail}
  */
  readonly insertResonseLineFail?: number;
  /**
  * Enable automatic packet-capture for Line extend fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#line_extend_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#line_extend_fail}
  */
  readonly lineExtendFail?: number;
  /**
  * Enable automatic packet-capture for Table extend fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#line_table_extend_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#line_table_extend_fail}
  */
  readonly lineTableExtendFail?: number;
  /**
  * Enable automatic packet-capture for Line too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#line_too_long VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#line_too_long}
  */
  readonly lineTooLong?: number;
  /**
  * Enable automatic packet-capture for No proxy error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#no_proxy VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#no_proxy}
  */
  readonly noProxy?: number;
  /**
  * Enable automatic packet-capture for Parse request failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#parse_req_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#parse_req_fail}
  */
  readonly parseReqFail?: number;
  /**
  * Enable automatic packet-capture for Parse request line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#parse_request_line_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#parse_request_line_fail}
  */
  readonly parseRequestLineFail?: number;
  /**
  * Enable automatic packet-capture for Parse response line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#parse_resonse_line_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#parse_resonse_line_fail}
  */
  readonly parseResonseLineFail?: number;
  /**
  * Enable automatic packet-capture for Read request line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#read_request_line_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#read_request_line_fail}
  */
  readonly readRequestLineFail?: number;
  /**
  * Enable automatic packet-capture for Recv server unknown-code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#recv_server_unknow_reply_code VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#recv_server_unknow_reply_code}
  */
  readonly recvServerUnknowReplyCode?: number;
  /**
  * Enable automatic packet-capture for Del response line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#remove_resonse_line_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#remove_resonse_line_fail}
  */
  readonly removeResonseLineFail?: number;
  /**
  * Enable automatic packet-capture for Sent client serv-not-rdy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#send_client_service_not_ready VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#send_client_service_not_ready}
  */
  readonly sendClientServiceNotReady?: number;
  /**
  * Enable automatic packet-capture for Server selection failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#server_select_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#server_select_fail}
  */
  readonly serverSelectFail?: number;
  /**
  * Enable automatic packet-capture for Server side STARTTLS fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#server_starttls_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#server_starttls_fail}
  */
  readonly serverStarttlsFail?: number;
  /**
  * Enable automatic packet-capture for Source NAT failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#snat_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Enable automatic packet-capture for Too many headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#too_many_headers VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#too_many_headers}
  */
  readonly tooManyHeaders?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_req_data_fail: cdktf.numberToTerraform(struct!.forwardReqDataFail),
    forward_req_fail: cdktf.numberToTerraform(struct!.forwardReqFail),
    get_all_headers_fail: cdktf.numberToTerraform(struct!.fetchAllHeadersFail),
    insert_resonse_line_fail: cdktf.numberToTerraform(struct!.insertResonseLineFail),
    line_extend_fail: cdktf.numberToTerraform(struct!.lineExtendFail),
    line_table_extend_fail: cdktf.numberToTerraform(struct!.lineTableExtendFail),
    line_too_long: cdktf.numberToTerraform(struct!.lineTooLong),
    no_proxy: cdktf.numberToTerraform(struct!.noProxy),
    parse_req_fail: cdktf.numberToTerraform(struct!.parseReqFail),
    parse_request_line_fail: cdktf.numberToTerraform(struct!.parseRequestLineFail),
    parse_resonse_line_fail: cdktf.numberToTerraform(struct!.parseResonseLineFail),
    read_request_line_fail: cdktf.numberToTerraform(struct!.readRequestLineFail),
    recv_server_unknow_reply_code: cdktf.numberToTerraform(struct!.recvServerUnknowReplyCode),
    remove_resonse_line_fail: cdktf.numberToTerraform(struct!.removeResonseLineFail),
    send_client_service_not_ready: cdktf.numberToTerraform(struct!.sendClientServiceNotReady),
    server_select_fail: cdktf.numberToTerraform(struct!.serverSelectFail),
    server_starttls_fail: cdktf.numberToTerraform(struct!.serverStarttlsFail),
    snat_fail: cdktf.numberToTerraform(struct!.snatFail),
    too_many_headers: cdktf.numberToTerraform(struct!.tooManyHeaders),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_req_data_fail: {
      value: cdktf.numberToHclTerraform(struct!.forwardReqDataFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forward_req_fail: {
      value: cdktf.numberToHclTerraform(struct!.forwardReqFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    get_all_headers_fail: {
      value: cdktf.numberToHclTerraform(struct!.fetchAllHeadersFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insert_resonse_line_fail: {
      value: cdktf.numberToHclTerraform(struct!.insertResonseLineFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_extend_fail: {
      value: cdktf.numberToHclTerraform(struct!.lineExtendFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_table_extend_fail: {
      value: cdktf.numberToHclTerraform(struct!.lineTableExtendFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_too_long: {
      value: cdktf.numberToHclTerraform(struct!.lineTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_proxy: {
      value: cdktf.numberToHclTerraform(struct!.noProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_req_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseReqFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_request_line_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseRequestLineFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_resonse_line_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseResonseLineFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_request_line_fail: {
      value: cdktf.numberToHclTerraform(struct!.readRequestLineFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_server_unknow_reply_code: {
      value: cdktf.numberToHclTerraform(struct!.recvServerUnknowReplyCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remove_resonse_line_fail: {
      value: cdktf.numberToHclTerraform(struct!.removeResonseLineFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_client_service_not_ready: {
      value: cdktf.numberToHclTerraform(struct!.sendClientServiceNotReady),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_select_fail: {
      value: cdktf.numberToHclTerraform(struct!.serverSelectFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_starttls_fail: {
      value: cdktf.numberToHclTerraform(struct!.serverStarttlsFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_fail: {
      value: cdktf.numberToHclTerraform(struct!.snatFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    too_many_headers: {
      value: cdktf.numberToHclTerraform(struct!.tooManyHeaders),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardReqDataFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardReqDataFail = this._forwardReqDataFail;
    }
    if (this._forwardReqFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardReqFail = this._forwardReqFail;
    }
    if (this._getAllHeadersFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchAllHeadersFail = this._getAllHeadersFail;
    }
    if (this._insertResonseLineFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertResonseLineFail = this._insertResonseLineFail;
    }
    if (this._lineExtendFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineExtendFail = this._lineExtendFail;
    }
    if (this._lineTableExtendFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineTableExtendFail = this._lineTableExtendFail;
    }
    if (this._lineTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineTooLong = this._lineTooLong;
    }
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    if (this._parseReqFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseReqFail = this._parseReqFail;
    }
    if (this._parseRequestLineFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseRequestLineFail = this._parseRequestLineFail;
    }
    if (this._parseResonseLineFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseResonseLineFail = this._parseResonseLineFail;
    }
    if (this._readRequestLineFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.readRequestLineFail = this._readRequestLineFail;
    }
    if (this._recvServerUnknowReplyCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvServerUnknowReplyCode = this._recvServerUnknowReplyCode;
    }
    if (this._removeResonseLineFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeResonseLineFail = this._removeResonseLineFail;
    }
    if (this._sendClientServiceNotReady !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendClientServiceNotReady = this._sendClientServiceNotReady;
    }
    if (this._serverSelectFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSelectFail = this._serverSelectFail;
    }
    if (this._serverStarttlsFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverStarttlsFail = this._serverStarttlsFail;
    }
    if (this._snatFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatFail = this._snatFail;
    }
    if (this._tooManyHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooManyHeaders = this._tooManyHeaders;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forwardReqDataFail = undefined;
      this._forwardReqFail = undefined;
      this._getAllHeadersFail = undefined;
      this._insertResonseLineFail = undefined;
      this._lineExtendFail = undefined;
      this._lineTableExtendFail = undefined;
      this._lineTooLong = undefined;
      this._noProxy = undefined;
      this._parseReqFail = undefined;
      this._parseRequestLineFail = undefined;
      this._parseResonseLineFail = undefined;
      this._readRequestLineFail = undefined;
      this._recvServerUnknowReplyCode = undefined;
      this._removeResonseLineFail = undefined;
      this._sendClientServiceNotReady = undefined;
      this._serverSelectFail = undefined;
      this._serverStarttlsFail = undefined;
      this._snatFail = undefined;
      this._tooManyHeaders = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forwardReqDataFail = value.forwardReqDataFail;
      this._forwardReqFail = value.forwardReqFail;
      this._getAllHeadersFail = value.fetchAllHeadersFail;
      this._insertResonseLineFail = value.insertResonseLineFail;
      this._lineExtendFail = value.lineExtendFail;
      this._lineTableExtendFail = value.lineTableExtendFail;
      this._lineTooLong = value.lineTooLong;
      this._noProxy = value.noProxy;
      this._parseReqFail = value.parseReqFail;
      this._parseRequestLineFail = value.parseRequestLineFail;
      this._parseResonseLineFail = value.parseResonseLineFail;
      this._readRequestLineFail = value.readRequestLineFail;
      this._recvServerUnknowReplyCode = value.recvServerUnknowReplyCode;
      this._removeResonseLineFail = value.removeResonseLineFail;
      this._sendClientServiceNotReady = value.sendClientServiceNotReady;
      this._serverSelectFail = value.serverSelectFail;
      this._serverStarttlsFail = value.serverStarttlsFail;
      this._snatFail = value.snatFail;
      this._tooManyHeaders = value.tooManyHeaders;
      this._uuid = value.uuid;
    }
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
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Forward REQ data failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#forward_req_data_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#forward_req_data_fail}
  */
  readonly forwardReqDataFail?: number;
  /**
  * Enable automatic packet-capture for Forward request failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#forward_req_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#forward_req_fail}
  */
  readonly forwardReqFail?: number;
  /**
  * Enable automatic packet-capture for Get all headers fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#get_all_headers_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#get_all_headers_fail}
  */
  readonly fetchAllHeadersFail?: number;
  /**
  * Enable automatic packet-capture for Ins response line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#insert_resonse_line_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#insert_resonse_line_fail}
  */
  readonly insertResonseLineFail?: number;
  /**
  * Enable automatic packet-capture for Line extend fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#line_extend_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#line_extend_fail}
  */
  readonly lineExtendFail?: number;
  /**
  * Enable automatic packet-capture for Table extend fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#line_table_extend_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#line_table_extend_fail}
  */
  readonly lineTableExtendFail?: number;
  /**
  * Enable automatic packet-capture for Line too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#line_too_long VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#line_too_long}
  */
  readonly lineTooLong?: number;
  /**
  * Enable automatic packet-capture for No proxy error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#no_proxy VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#no_proxy}
  */
  readonly noProxy?: number;
  /**
  * Enable automatic packet-capture for Parse request failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#parse_req_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#parse_req_fail}
  */
  readonly parseReqFail?: number;
  /**
  * Enable automatic packet-capture for Parse request line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#parse_request_line_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#parse_request_line_fail}
  */
  readonly parseRequestLineFail?: number;
  /**
  * Enable automatic packet-capture for Parse response line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#parse_resonse_line_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#parse_resonse_line_fail}
  */
  readonly parseResonseLineFail?: number;
  /**
  * Enable automatic packet-capture for Read request line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#read_request_line_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#read_request_line_fail}
  */
  readonly readRequestLineFail?: number;
  /**
  * Enable automatic packet-capture for Recv server unknown-code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#recv_server_unknow_reply_code VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#recv_server_unknow_reply_code}
  */
  readonly recvServerUnknowReplyCode?: number;
  /**
  * Enable automatic packet-capture for Del response line fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#remove_resonse_line_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#remove_resonse_line_fail}
  */
  readonly removeResonseLineFail?: number;
  /**
  * Enable automatic packet-capture for Sent client serv-not-rdy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#send_client_service_not_ready VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#send_client_service_not_ready}
  */
  readonly sendClientServiceNotReady?: number;
  /**
  * Enable automatic packet-capture for Server selection failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#server_select_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#server_select_fail}
  */
  readonly serverSelectFail?: number;
  /**
  * Enable automatic packet-capture for Server side STARTTLS fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#server_starttls_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#server_starttls_fail}
  */
  readonly serverStarttlsFail?: number;
  /**
  * Enable automatic packet-capture for Source NAT failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#snat_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for Too many headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#too_many_headers VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#too_many_headers}
  */
  readonly tooManyHeaders?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    forward_req_data_fail: cdktf.numberToTerraform(struct!.forwardReqDataFail),
    forward_req_fail: cdktf.numberToTerraform(struct!.forwardReqFail),
    get_all_headers_fail: cdktf.numberToTerraform(struct!.fetchAllHeadersFail),
    insert_resonse_line_fail: cdktf.numberToTerraform(struct!.insertResonseLineFail),
    line_extend_fail: cdktf.numberToTerraform(struct!.lineExtendFail),
    line_table_extend_fail: cdktf.numberToTerraform(struct!.lineTableExtendFail),
    line_too_long: cdktf.numberToTerraform(struct!.lineTooLong),
    no_proxy: cdktf.numberToTerraform(struct!.noProxy),
    parse_req_fail: cdktf.numberToTerraform(struct!.parseReqFail),
    parse_request_line_fail: cdktf.numberToTerraform(struct!.parseRequestLineFail),
    parse_resonse_line_fail: cdktf.numberToTerraform(struct!.parseResonseLineFail),
    read_request_line_fail: cdktf.numberToTerraform(struct!.readRequestLineFail),
    recv_server_unknow_reply_code: cdktf.numberToTerraform(struct!.recvServerUnknowReplyCode),
    remove_resonse_line_fail: cdktf.numberToTerraform(struct!.removeResonseLineFail),
    send_client_service_not_ready: cdktf.numberToTerraform(struct!.sendClientServiceNotReady),
    server_select_fail: cdktf.numberToTerraform(struct!.serverSelectFail),
    server_starttls_fail: cdktf.numberToTerraform(struct!.serverStarttlsFail),
    snat_fail: cdktf.numberToTerraform(struct!.snatFail),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    too_many_headers: cdktf.numberToTerraform(struct!.tooManyHeaders),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forward_req_data_fail: {
      value: cdktf.numberToHclTerraform(struct!.forwardReqDataFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forward_req_fail: {
      value: cdktf.numberToHclTerraform(struct!.forwardReqFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    get_all_headers_fail: {
      value: cdktf.numberToHclTerraform(struct!.fetchAllHeadersFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insert_resonse_line_fail: {
      value: cdktf.numberToHclTerraform(struct!.insertResonseLineFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_extend_fail: {
      value: cdktf.numberToHclTerraform(struct!.lineExtendFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_table_extend_fail: {
      value: cdktf.numberToHclTerraform(struct!.lineTableExtendFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    line_too_long: {
      value: cdktf.numberToHclTerraform(struct!.lineTooLong),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_proxy: {
      value: cdktf.numberToHclTerraform(struct!.noProxy),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_req_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseReqFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_request_line_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseRequestLineFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parse_resonse_line_fail: {
      value: cdktf.numberToHclTerraform(struct!.parseResonseLineFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    read_request_line_fail: {
      value: cdktf.numberToHclTerraform(struct!.readRequestLineFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recv_server_unknow_reply_code: {
      value: cdktf.numberToHclTerraform(struct!.recvServerUnknowReplyCode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remove_resonse_line_fail: {
      value: cdktf.numberToHclTerraform(struct!.removeResonseLineFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    send_client_service_not_ready: {
      value: cdktf.numberToHclTerraform(struct!.sendClientServiceNotReady),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_select_fail: {
      value: cdktf.numberToHclTerraform(struct!.serverSelectFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_starttls_fail: {
      value: cdktf.numberToHclTerraform(struct!.serverStarttlsFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snat_fail: {
      value: cdktf.numberToHclTerraform(struct!.snatFail),
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
    too_many_headers: {
      value: cdktf.numberToHclTerraform(struct!.tooManyHeaders),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._forwardReqDataFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardReqDataFail = this._forwardReqDataFail;
    }
    if (this._forwardReqFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardReqFail = this._forwardReqFail;
    }
    if (this._getAllHeadersFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchAllHeadersFail = this._getAllHeadersFail;
    }
    if (this._insertResonseLineFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertResonseLineFail = this._insertResonseLineFail;
    }
    if (this._lineExtendFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineExtendFail = this._lineExtendFail;
    }
    if (this._lineTableExtendFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineTableExtendFail = this._lineTableExtendFail;
    }
    if (this._lineTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineTooLong = this._lineTooLong;
    }
    if (this._noProxy !== undefined) {
      hasAnyValues = true;
      internalValueResult.noProxy = this._noProxy;
    }
    if (this._parseReqFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseReqFail = this._parseReqFail;
    }
    if (this._parseRequestLineFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseRequestLineFail = this._parseRequestLineFail;
    }
    if (this._parseResonseLineFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parseResonseLineFail = this._parseResonseLineFail;
    }
    if (this._readRequestLineFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.readRequestLineFail = this._readRequestLineFail;
    }
    if (this._recvServerUnknowReplyCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.recvServerUnknowReplyCode = this._recvServerUnknowReplyCode;
    }
    if (this._removeResonseLineFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeResonseLineFail = this._removeResonseLineFail;
    }
    if (this._sendClientServiceNotReady !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendClientServiceNotReady = this._sendClientServiceNotReady;
    }
    if (this._serverSelectFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSelectFail = this._serverSelectFail;
    }
    if (this._serverStarttlsFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverStarttlsFail = this._serverStarttlsFail;
    }
    if (this._snatFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatFail = this._snatFail;
    }
    if (this._thresholdExceededBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdExceededBy = this._thresholdExceededBy;
    }
    if (this._tooManyHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooManyHeaders = this._tooManyHeaders;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._forwardReqDataFail = undefined;
      this._forwardReqFail = undefined;
      this._getAllHeadersFail = undefined;
      this._insertResonseLineFail = undefined;
      this._lineExtendFail = undefined;
      this._lineTableExtendFail = undefined;
      this._lineTooLong = undefined;
      this._noProxy = undefined;
      this._parseReqFail = undefined;
      this._parseRequestLineFail = undefined;
      this._parseResonseLineFail = undefined;
      this._readRequestLineFail = undefined;
      this._recvServerUnknowReplyCode = undefined;
      this._removeResonseLineFail = undefined;
      this._sendClientServiceNotReady = undefined;
      this._serverSelectFail = undefined;
      this._serverStarttlsFail = undefined;
      this._snatFail = undefined;
      this._thresholdExceededBy = undefined;
      this._tooManyHeaders = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._forwardReqDataFail = value.forwardReqDataFail;
      this._forwardReqFail = value.forwardReqFail;
      this._getAllHeadersFail = value.fetchAllHeadersFail;
      this._insertResonseLineFail = value.insertResonseLineFail;
      this._lineExtendFail = value.lineExtendFail;
      this._lineTableExtendFail = value.lineTableExtendFail;
      this._lineTooLong = value.lineTooLong;
      this._noProxy = value.noProxy;
      this._parseReqFail = value.parseReqFail;
      this._parseRequestLineFail = value.parseRequestLineFail;
      this._parseResonseLineFail = value.parseResonseLineFail;
      this._readRequestLineFail = value.readRequestLineFail;
      this._recvServerUnknowReplyCode = value.recvServerUnknowReplyCode;
      this._removeResonseLineFail = value.removeResonseLineFail;
      this._sendClientServiceNotReady = value.sendClientServiceNotReady;
      this._serverSelectFail = value.serverSelectFail;
      this._serverStarttlsFail = value.serverStarttlsFail;
      this._snatFail = value.snatFail;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._tooManyHeaders = value.tooManyHeaders;
      this._uuid = value.uuid;
    }
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_smtp',
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
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateA) {
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
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbSmtpTriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
