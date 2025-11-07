// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for Unsupported auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#auth_unsupported VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#auth_unsupported}
  */
  readonly authUnsupported?: number;
  /**
  * Enable automatic packet-capture for Bad Sequence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#bad_sequence VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#bad_sequence}
  */
  readonly badSequence?: number;
  /**
  * Enable automatic packet-capture for cant find epsv
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#cant_find_epsv VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#cant_find_epsv}
  */
  readonly cantFindEpsv?: number;
  /**
  * Enable automatic packet-capture for cant find pasv
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#cant_find_pasv VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#cant_find_pasv}
  */
  readonly cantFindPasv?: number;
  /**
  * Enable automatic packet-capture for Client EST state erro
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#cl_est_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#cl_est_err}
  */
  readonly clEstErr?: number;
  /**
  * Enable automatic packet-capture for Client RQ state error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#cl_request_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#cl_request_err}
  */
  readonly clRequestErr?: number;
  /**
  * Enable automatic packet-capture for data send fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#data_send_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#data_send_fail}
  */
  readonly dataSendFail?: number;
  /**
  * Enable automatic packet-capture for data svr conn fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#data_server_conn_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#data_server_conn_fail}
  */
  readonly dataServerConnFail?: number;
  /**
  * Enable automatic packet-capture for Serv Sel insert tuple fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#insert_tuple_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#insert_tuple_fail}
  */
  readonly insertTupleFail?: number;
  /**
  * Enable automatic packet-capture for invalid start line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#invalid_start_line VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#invalid_start_line}
  */
  readonly invalidStartLine?: number;
  /**
  * Enable automatic packet-capture for line too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#line_too_long VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#line_too_long}
  */
  readonly lineTooLong?: number;
  /**
  * Enable automatic packet-capture for no route failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#no_route VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#no_route}
  */
  readonly noRoute?: number;
  /**
  * Enable automatic packet-capture for Serv Sel Persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#rsv_persist_conn_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#rsv_persist_conn_fail}
  */
  readonly rsvPersistConnFail?: number;
  /**
  * Enable automatic packet-capture for Serv CTNG state error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#ser_connecting_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#ser_connecting_err}
  */
  readonly serConnectingErr?: number;
  /**
  * Enable automatic packet-capture for Serv RESP state error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#server_response_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#server_response_err}
  */
  readonly serverResponseErr?: number;
  /**
  * Enable automatic packet-capture for smp create fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#smp_create_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#smp_create_fail}
  */
  readonly smpCreateFail?: number;
  /**
  * Enable automatic packet-capture for Serv Sel SMPv4 fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#smp_v4_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#smp_v4_fail}
  */
  readonly smpV4Fail?: number;
  /**
  * Enable automatic packet-capture for Serv Sel SMPv6 fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#smp_v6_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#smp_v6_fail}
  */
  readonly smpV6Fail?: number;
  /**
  * Enable automatic packet-capture for source nat failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#snat_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Enable automatic packet-capture for Server selection failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#svrsel_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#svrsel_fail}
  */
  readonly svrselFail?: number;
  /**
  * Enable automatic packet-capture for Unsupported PBSZ
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#unsupported_pbsz_value VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#unsupported_pbsz_value}
  */
  readonly unsupportedPbszValue?: number;
  /**
  * Enable automatic packet-capture for Unsupported PROT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#unsupported_prot_value VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#unsupported_prot_value}
  */
  readonly unsupportedProtValue?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_unsupported: cdktf.numberToTerraform(struct!.authUnsupported),
    bad_sequence: cdktf.numberToTerraform(struct!.badSequence),
    cant_find_epsv: cdktf.numberToTerraform(struct!.cantFindEpsv),
    cant_find_pasv: cdktf.numberToTerraform(struct!.cantFindPasv),
    cl_est_err: cdktf.numberToTerraform(struct!.clEstErr),
    cl_request_err: cdktf.numberToTerraform(struct!.clRequestErr),
    data_send_fail: cdktf.numberToTerraform(struct!.dataSendFail),
    data_server_conn_fail: cdktf.numberToTerraform(struct!.dataServerConnFail),
    insert_tuple_fail: cdktf.numberToTerraform(struct!.insertTupleFail),
    invalid_start_line: cdktf.numberToTerraform(struct!.invalidStartLine),
    line_too_long: cdktf.numberToTerraform(struct!.lineTooLong),
    no_route: cdktf.numberToTerraform(struct!.noRoute),
    rsv_persist_conn_fail: cdktf.numberToTerraform(struct!.rsvPersistConnFail),
    ser_connecting_err: cdktf.numberToTerraform(struct!.serConnectingErr),
    server_response_err: cdktf.numberToTerraform(struct!.serverResponseErr),
    smp_create_fail: cdktf.numberToTerraform(struct!.smpCreateFail),
    smp_v4_fail: cdktf.numberToTerraform(struct!.smpV4Fail),
    smp_v6_fail: cdktf.numberToTerraform(struct!.smpV6Fail),
    snat_fail: cdktf.numberToTerraform(struct!.snatFail),
    svrsel_fail: cdktf.numberToTerraform(struct!.svrselFail),
    unsupported_pbsz_value: cdktf.numberToTerraform(struct!.unsupportedPbszValue),
    unsupported_prot_value: cdktf.numberToTerraform(struct!.unsupportedProtValue),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_unsupported: {
      value: cdktf.numberToHclTerraform(struct!.authUnsupported),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_sequence: {
      value: cdktf.numberToHclTerraform(struct!.badSequence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cant_find_epsv: {
      value: cdktf.numberToHclTerraform(struct!.cantFindEpsv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cant_find_pasv: {
      value: cdktf.numberToHclTerraform(struct!.cantFindPasv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cl_est_err: {
      value: cdktf.numberToHclTerraform(struct!.clEstErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cl_request_err: {
      value: cdktf.numberToHclTerraform(struct!.clRequestErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_send_fail: {
      value: cdktf.numberToHclTerraform(struct!.dataSendFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_server_conn_fail: {
      value: cdktf.numberToHclTerraform(struct!.dataServerConnFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    insert_tuple_fail: {
      value: cdktf.numberToHclTerraform(struct!.insertTupleFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_start_line: {
      value: cdktf.numberToHclTerraform(struct!.invalidStartLine),
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
    no_route: {
      value: cdktf.numberToHclTerraform(struct!.noRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsv_persist_conn_fail: {
      value: cdktf.numberToHclTerraform(struct!.rsvPersistConnFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ser_connecting_err: {
      value: cdktf.numberToHclTerraform(struct!.serConnectingErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_response_err: {
      value: cdktf.numberToHclTerraform(struct!.serverResponseErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smp_create_fail: {
      value: cdktf.numberToHclTerraform(struct!.smpCreateFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smp_v4_fail: {
      value: cdktf.numberToHclTerraform(struct!.smpV4Fail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smp_v6_fail: {
      value: cdktf.numberToHclTerraform(struct!.smpV6Fail),
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
    svrsel_fail: {
      value: cdktf.numberToHclTerraform(struct!.svrselFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsupported_pbsz_value: {
      value: cdktf.numberToHclTerraform(struct!.unsupportedPbszValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsupported_prot_value: {
      value: cdktf.numberToHclTerraform(struct!.unsupportedProtValue),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authUnsupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUnsupported = this._authUnsupported;
    }
    if (this._badSequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.badSequence = this._badSequence;
    }
    if (this._cantFindEpsv !== undefined) {
      hasAnyValues = true;
      internalValueResult.cantFindEpsv = this._cantFindEpsv;
    }
    if (this._cantFindPasv !== undefined) {
      hasAnyValues = true;
      internalValueResult.cantFindPasv = this._cantFindPasv;
    }
    if (this._clEstErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clEstErr = this._clEstErr;
    }
    if (this._clRequestErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clRequestErr = this._clRequestErr;
    }
    if (this._dataSendFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSendFail = this._dataSendFail;
    }
    if (this._dataServerConnFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataServerConnFail = this._dataServerConnFail;
    }
    if (this._insertTupleFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertTupleFail = this._insertTupleFail;
    }
    if (this._invalidStartLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidStartLine = this._invalidStartLine;
    }
    if (this._lineTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineTooLong = this._lineTooLong;
    }
    if (this._noRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRoute = this._noRoute;
    }
    if (this._rsvPersistConnFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsvPersistConnFail = this._rsvPersistConnFail;
    }
    if (this._serConnectingErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serConnectingErr = this._serConnectingErr;
    }
    if (this._serverResponseErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverResponseErr = this._serverResponseErr;
    }
    if (this._smpCreateFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.smpCreateFail = this._smpCreateFail;
    }
    if (this._smpV4Fail !== undefined) {
      hasAnyValues = true;
      internalValueResult.smpV4Fail = this._smpV4Fail;
    }
    if (this._smpV6Fail !== undefined) {
      hasAnyValues = true;
      internalValueResult.smpV6Fail = this._smpV6Fail;
    }
    if (this._snatFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatFail = this._snatFail;
    }
    if (this._svrselFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.svrselFail = this._svrselFail;
    }
    if (this._unsupportedPbszValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedPbszValue = this._unsupportedPbszValue;
    }
    if (this._unsupportedProtValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedProtValue = this._unsupportedProtValue;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authUnsupported = undefined;
      this._badSequence = undefined;
      this._cantFindEpsv = undefined;
      this._cantFindPasv = undefined;
      this._clEstErr = undefined;
      this._clRequestErr = undefined;
      this._dataSendFail = undefined;
      this._dataServerConnFail = undefined;
      this._insertTupleFail = undefined;
      this._invalidStartLine = undefined;
      this._lineTooLong = undefined;
      this._noRoute = undefined;
      this._rsvPersistConnFail = undefined;
      this._serConnectingErr = undefined;
      this._serverResponseErr = undefined;
      this._smpCreateFail = undefined;
      this._smpV4Fail = undefined;
      this._smpV6Fail = undefined;
      this._snatFail = undefined;
      this._svrselFail = undefined;
      this._unsupportedPbszValue = undefined;
      this._unsupportedProtValue = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authUnsupported = value.authUnsupported;
      this._badSequence = value.badSequence;
      this._cantFindEpsv = value.cantFindEpsv;
      this._cantFindPasv = value.cantFindPasv;
      this._clEstErr = value.clEstErr;
      this._clRequestErr = value.clRequestErr;
      this._dataSendFail = value.dataSendFail;
      this._dataServerConnFail = value.dataServerConnFail;
      this._insertTupleFail = value.insertTupleFail;
      this._invalidStartLine = value.invalidStartLine;
      this._lineTooLong = value.lineTooLong;
      this._noRoute = value.noRoute;
      this._rsvPersistConnFail = value.rsvPersistConnFail;
      this._serConnectingErr = value.serConnectingErr;
      this._serverResponseErr = value.serverResponseErr;
      this._smpCreateFail = value.smpCreateFail;
      this._smpV4Fail = value.smpV4Fail;
      this._smpV6Fail = value.smpV6Fail;
      this._snatFail = value.snatFail;
      this._svrselFail = value.svrselFail;
      this._unsupportedPbszValue = value.unsupportedPbszValue;
      this._unsupportedProtValue = value.unsupportedProtValue;
      this._uuid = value.uuid;
    }
  }

  // auth_unsupported - computed: false, optional: true, required: false
  private _authUnsupported?: number; 
  public get authUnsupported() {
    return this.getNumberAttribute('auth_unsupported');
  }
  public set authUnsupported(value: number) {
    this._authUnsupported = value;
  }
  public resetAuthUnsupported() {
    this._authUnsupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUnsupportedInput() {
    return this._authUnsupported;
  }

  // bad_sequence - computed: false, optional: true, required: false
  private _badSequence?: number; 
  public get badSequence() {
    return this.getNumberAttribute('bad_sequence');
  }
  public set badSequence(value: number) {
    this._badSequence = value;
  }
  public resetBadSequence() {
    this._badSequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badSequenceInput() {
    return this._badSequence;
  }

  // cant_find_epsv - computed: false, optional: true, required: false
  private _cantFindEpsv?: number; 
  public get cantFindEpsv() {
    return this.getNumberAttribute('cant_find_epsv');
  }
  public set cantFindEpsv(value: number) {
    this._cantFindEpsv = value;
  }
  public resetCantFindEpsv() {
    this._cantFindEpsv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cantFindEpsvInput() {
    return this._cantFindEpsv;
  }

  // cant_find_pasv - computed: false, optional: true, required: false
  private _cantFindPasv?: number; 
  public get cantFindPasv() {
    return this.getNumberAttribute('cant_find_pasv');
  }
  public set cantFindPasv(value: number) {
    this._cantFindPasv = value;
  }
  public resetCantFindPasv() {
    this._cantFindPasv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cantFindPasvInput() {
    return this._cantFindPasv;
  }

  // cl_est_err - computed: false, optional: true, required: false
  private _clEstErr?: number; 
  public get clEstErr() {
    return this.getNumberAttribute('cl_est_err');
  }
  public set clEstErr(value: number) {
    this._clEstErr = value;
  }
  public resetClEstErr() {
    this._clEstErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clEstErrInput() {
    return this._clEstErr;
  }

  // cl_request_err - computed: false, optional: true, required: false
  private _clRequestErr?: number; 
  public get clRequestErr() {
    return this.getNumberAttribute('cl_request_err');
  }
  public set clRequestErr(value: number) {
    this._clRequestErr = value;
  }
  public resetClRequestErr() {
    this._clRequestErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clRequestErrInput() {
    return this._clRequestErr;
  }

  // data_send_fail - computed: false, optional: true, required: false
  private _dataSendFail?: number; 
  public get dataSendFail() {
    return this.getNumberAttribute('data_send_fail');
  }
  public set dataSendFail(value: number) {
    this._dataSendFail = value;
  }
  public resetDataSendFail() {
    this._dataSendFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSendFailInput() {
    return this._dataSendFail;
  }

  // data_server_conn_fail - computed: false, optional: true, required: false
  private _dataServerConnFail?: number; 
  public get dataServerConnFail() {
    return this.getNumberAttribute('data_server_conn_fail');
  }
  public set dataServerConnFail(value: number) {
    this._dataServerConnFail = value;
  }
  public resetDataServerConnFail() {
    this._dataServerConnFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataServerConnFailInput() {
    return this._dataServerConnFail;
  }

  // insert_tuple_fail - computed: false, optional: true, required: false
  private _insertTupleFail?: number; 
  public get insertTupleFail() {
    return this.getNumberAttribute('insert_tuple_fail');
  }
  public set insertTupleFail(value: number) {
    this._insertTupleFail = value;
  }
  public resetInsertTupleFail() {
    this._insertTupleFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertTupleFailInput() {
    return this._insertTupleFail;
  }

  // invalid_start_line - computed: false, optional: true, required: false
  private _invalidStartLine?: number; 
  public get invalidStartLine() {
    return this.getNumberAttribute('invalid_start_line');
  }
  public set invalidStartLine(value: number) {
    this._invalidStartLine = value;
  }
  public resetInvalidStartLine() {
    this._invalidStartLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidStartLineInput() {
    return this._invalidStartLine;
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

  // no_route - computed: false, optional: true, required: false
  private _noRoute?: number; 
  public get noRoute() {
    return this.getNumberAttribute('no_route');
  }
  public set noRoute(value: number) {
    this._noRoute = value;
  }
  public resetNoRoute() {
    this._noRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRouteInput() {
    return this._noRoute;
  }

  // rsv_persist_conn_fail - computed: false, optional: true, required: false
  private _rsvPersistConnFail?: number; 
  public get rsvPersistConnFail() {
    return this.getNumberAttribute('rsv_persist_conn_fail');
  }
  public set rsvPersistConnFail(value: number) {
    this._rsvPersistConnFail = value;
  }
  public resetRsvPersistConnFail() {
    this._rsvPersistConnFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsvPersistConnFailInput() {
    return this._rsvPersistConnFail;
  }

  // ser_connecting_err - computed: false, optional: true, required: false
  private _serConnectingErr?: number; 
  public get serConnectingErr() {
    return this.getNumberAttribute('ser_connecting_err');
  }
  public set serConnectingErr(value: number) {
    this._serConnectingErr = value;
  }
  public resetSerConnectingErr() {
    this._serConnectingErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serConnectingErrInput() {
    return this._serConnectingErr;
  }

  // server_response_err - computed: false, optional: true, required: false
  private _serverResponseErr?: number; 
  public get serverResponseErr() {
    return this.getNumberAttribute('server_response_err');
  }
  public set serverResponseErr(value: number) {
    this._serverResponseErr = value;
  }
  public resetServerResponseErr() {
    this._serverResponseErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverResponseErrInput() {
    return this._serverResponseErr;
  }

  // smp_create_fail - computed: false, optional: true, required: false
  private _smpCreateFail?: number; 
  public get smpCreateFail() {
    return this.getNumberAttribute('smp_create_fail');
  }
  public set smpCreateFail(value: number) {
    this._smpCreateFail = value;
  }
  public resetSmpCreateFail() {
    this._smpCreateFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpCreateFailInput() {
    return this._smpCreateFail;
  }

  // smp_v4_fail - computed: false, optional: true, required: false
  private _smpV4Fail?: number; 
  public get smpV4Fail() {
    return this.getNumberAttribute('smp_v4_fail');
  }
  public set smpV4Fail(value: number) {
    this._smpV4Fail = value;
  }
  public resetSmpV4Fail() {
    this._smpV4Fail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpV4FailInput() {
    return this._smpV4Fail;
  }

  // smp_v6_fail - computed: false, optional: true, required: false
  private _smpV6Fail?: number; 
  public get smpV6Fail() {
    return this.getNumberAttribute('smp_v6_fail');
  }
  public set smpV6Fail(value: number) {
    this._smpV6Fail = value;
  }
  public resetSmpV6Fail() {
    this._smpV6Fail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpV6FailInput() {
    return this._smpV6Fail;
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

  // svrsel_fail - computed: false, optional: true, required: false
  private _svrselFail?: number; 
  public get svrselFail() {
    return this.getNumberAttribute('svrsel_fail');
  }
  public set svrselFail(value: number) {
    this._svrselFail = value;
  }
  public resetSvrselFail() {
    this._svrselFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svrselFailInput() {
    return this._svrselFail;
  }

  // unsupported_pbsz_value - computed: false, optional: true, required: false
  private _unsupportedPbszValue?: number; 
  public get unsupportedPbszValue() {
    return this.getNumberAttribute('unsupported_pbsz_value');
  }
  public set unsupportedPbszValue(value: number) {
    this._unsupportedPbszValue = value;
  }
  public resetUnsupportedPbszValue() {
    this._unsupportedPbszValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedPbszValueInput() {
    return this._unsupportedPbszValue;
  }

  // unsupported_prot_value - computed: false, optional: true, required: false
  private _unsupportedProtValue?: number; 
  public get unsupportedProtValue() {
    return this.getNumberAttribute('unsupported_prot_value');
  }
  public set unsupportedProtValue(value: number) {
    this._unsupportedProtValue = value;
  }
  public resetUnsupportedProtValue() {
    this._unsupportedProtValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedProtValueInput() {
    return this._unsupportedProtValue;
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
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsRateA {
  /**
  * Enable automatic packet-capture for Unsupported auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#auth_unsupported VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#auth_unsupported}
  */
  readonly authUnsupported?: number;
  /**
  * Enable automatic packet-capture for Bad Sequence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#bad_sequence VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#bad_sequence}
  */
  readonly badSequence?: number;
  /**
  * Enable automatic packet-capture for cant find epsv
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#cant_find_epsv VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#cant_find_epsv}
  */
  readonly cantFindEpsv?: number;
  /**
  * Enable automatic packet-capture for cant find pasv
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#cant_find_pasv VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#cant_find_pasv}
  */
  readonly cantFindPasv?: number;
  /**
  * Enable automatic packet-capture for Client EST state erro
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#cl_est_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#cl_est_err}
  */
  readonly clEstErr?: number;
  /**
  * Enable automatic packet-capture for Client RQ state error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#cl_request_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#cl_request_err}
  */
  readonly clRequestErr?: number;
  /**
  * Enable automatic packet-capture for data send fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#data_send_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#data_send_fail}
  */
  readonly dataSendFail?: number;
  /**
  * Enable automatic packet-capture for data svr conn fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#data_server_conn_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#data_server_conn_fail}
  */
  readonly dataServerConnFail?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Serv Sel insert tuple fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#insert_tuple_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#insert_tuple_fail}
  */
  readonly insertTupleFail?: number;
  /**
  * Enable automatic packet-capture for invalid start line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#invalid_start_line VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#invalid_start_line}
  */
  readonly invalidStartLine?: number;
  /**
  * Enable automatic packet-capture for line too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#line_too_long VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#line_too_long}
  */
  readonly lineTooLong?: number;
  /**
  * Enable automatic packet-capture for no route failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#no_route VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#no_route}
  */
  readonly noRoute?: number;
  /**
  * Enable automatic packet-capture for Serv Sel Persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#rsv_persist_conn_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#rsv_persist_conn_fail}
  */
  readonly rsvPersistConnFail?: number;
  /**
  * Enable automatic packet-capture for Serv CTNG state error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#ser_connecting_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#ser_connecting_err}
  */
  readonly serConnectingErr?: number;
  /**
  * Enable automatic packet-capture for Serv RESP state error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#server_response_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#server_response_err}
  */
  readonly serverResponseErr?: number;
  /**
  * Enable automatic packet-capture for smp create fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#smp_create_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#smp_create_fail}
  */
  readonly smpCreateFail?: number;
  /**
  * Enable automatic packet-capture for Serv Sel SMPv4 fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#smp_v4_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#smp_v4_fail}
  */
  readonly smpV4Fail?: number;
  /**
  * Enable automatic packet-capture for Serv Sel SMPv6 fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#smp_v6_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#smp_v6_fail}
  */
  readonly smpV6Fail?: number;
  /**
  * Enable automatic packet-capture for source nat failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#snat_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Enable automatic packet-capture for Server selection failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#svrsel_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#svrsel_fail}
  */
  readonly svrselFail?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for Unsupported PBSZ
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#unsupported_pbsz_value VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#unsupported_pbsz_value}
  */
  readonly unsupportedPbszValue?: number;
  /**
  * Enable automatic packet-capture for Unsupported PROT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#unsupported_prot_value VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#unsupported_prot_value}
  */
  readonly unsupportedProtValue?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_unsupported: cdktf.numberToTerraform(struct!.authUnsupported),
    bad_sequence: cdktf.numberToTerraform(struct!.badSequence),
    cant_find_epsv: cdktf.numberToTerraform(struct!.cantFindEpsv),
    cant_find_pasv: cdktf.numberToTerraform(struct!.cantFindPasv),
    cl_est_err: cdktf.numberToTerraform(struct!.clEstErr),
    cl_request_err: cdktf.numberToTerraform(struct!.clRequestErr),
    data_send_fail: cdktf.numberToTerraform(struct!.dataSendFail),
    data_server_conn_fail: cdktf.numberToTerraform(struct!.dataServerConnFail),
    duration: cdktf.numberToTerraform(struct!.duration),
    insert_tuple_fail: cdktf.numberToTerraform(struct!.insertTupleFail),
    invalid_start_line: cdktf.numberToTerraform(struct!.invalidStartLine),
    line_too_long: cdktf.numberToTerraform(struct!.lineTooLong),
    no_route: cdktf.numberToTerraform(struct!.noRoute),
    rsv_persist_conn_fail: cdktf.numberToTerraform(struct!.rsvPersistConnFail),
    ser_connecting_err: cdktf.numberToTerraform(struct!.serConnectingErr),
    server_response_err: cdktf.numberToTerraform(struct!.serverResponseErr),
    smp_create_fail: cdktf.numberToTerraform(struct!.smpCreateFail),
    smp_v4_fail: cdktf.numberToTerraform(struct!.smpV4Fail),
    smp_v6_fail: cdktf.numberToTerraform(struct!.smpV6Fail),
    snat_fail: cdktf.numberToTerraform(struct!.snatFail),
    svrsel_fail: cdktf.numberToTerraform(struct!.svrselFail),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    unsupported_pbsz_value: cdktf.numberToTerraform(struct!.unsupportedPbszValue),
    unsupported_prot_value: cdktf.numberToTerraform(struct!.unsupportedProtValue),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_unsupported: {
      value: cdktf.numberToHclTerraform(struct!.authUnsupported),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bad_sequence: {
      value: cdktf.numberToHclTerraform(struct!.badSequence),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cant_find_epsv: {
      value: cdktf.numberToHclTerraform(struct!.cantFindEpsv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cant_find_pasv: {
      value: cdktf.numberToHclTerraform(struct!.cantFindPasv),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cl_est_err: {
      value: cdktf.numberToHclTerraform(struct!.clEstErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cl_request_err: {
      value: cdktf.numberToHclTerraform(struct!.clRequestErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_send_fail: {
      value: cdktf.numberToHclTerraform(struct!.dataSendFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_server_conn_fail: {
      value: cdktf.numberToHclTerraform(struct!.dataServerConnFail),
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
    insert_tuple_fail: {
      value: cdktf.numberToHclTerraform(struct!.insertTupleFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_start_line: {
      value: cdktf.numberToHclTerraform(struct!.invalidStartLine),
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
    no_route: {
      value: cdktf.numberToHclTerraform(struct!.noRoute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rsv_persist_conn_fail: {
      value: cdktf.numberToHclTerraform(struct!.rsvPersistConnFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ser_connecting_err: {
      value: cdktf.numberToHclTerraform(struct!.serConnectingErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_response_err: {
      value: cdktf.numberToHclTerraform(struct!.serverResponseErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smp_create_fail: {
      value: cdktf.numberToHclTerraform(struct!.smpCreateFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smp_v4_fail: {
      value: cdktf.numberToHclTerraform(struct!.smpV4Fail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smp_v6_fail: {
      value: cdktf.numberToHclTerraform(struct!.smpV6Fail),
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
    svrsel_fail: {
      value: cdktf.numberToHclTerraform(struct!.svrselFail),
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
    unsupported_pbsz_value: {
      value: cdktf.numberToHclTerraform(struct!.unsupportedPbszValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unsupported_prot_value: {
      value: cdktf.numberToHclTerraform(struct!.unsupportedProtValue),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authUnsupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUnsupported = this._authUnsupported;
    }
    if (this._badSequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.badSequence = this._badSequence;
    }
    if (this._cantFindEpsv !== undefined) {
      hasAnyValues = true;
      internalValueResult.cantFindEpsv = this._cantFindEpsv;
    }
    if (this._cantFindPasv !== undefined) {
      hasAnyValues = true;
      internalValueResult.cantFindPasv = this._cantFindPasv;
    }
    if (this._clEstErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clEstErr = this._clEstErr;
    }
    if (this._clRequestErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clRequestErr = this._clRequestErr;
    }
    if (this._dataSendFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSendFail = this._dataSendFail;
    }
    if (this._dataServerConnFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataServerConnFail = this._dataServerConnFail;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._insertTupleFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertTupleFail = this._insertTupleFail;
    }
    if (this._invalidStartLine !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidStartLine = this._invalidStartLine;
    }
    if (this._lineTooLong !== undefined) {
      hasAnyValues = true;
      internalValueResult.lineTooLong = this._lineTooLong;
    }
    if (this._noRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRoute = this._noRoute;
    }
    if (this._rsvPersistConnFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.rsvPersistConnFail = this._rsvPersistConnFail;
    }
    if (this._serConnectingErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serConnectingErr = this._serConnectingErr;
    }
    if (this._serverResponseErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverResponseErr = this._serverResponseErr;
    }
    if (this._smpCreateFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.smpCreateFail = this._smpCreateFail;
    }
    if (this._smpV4Fail !== undefined) {
      hasAnyValues = true;
      internalValueResult.smpV4Fail = this._smpV4Fail;
    }
    if (this._smpV6Fail !== undefined) {
      hasAnyValues = true;
      internalValueResult.smpV6Fail = this._smpV6Fail;
    }
    if (this._snatFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatFail = this._snatFail;
    }
    if (this._svrselFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.svrselFail = this._svrselFail;
    }
    if (this._thresholdExceededBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdExceededBy = this._thresholdExceededBy;
    }
    if (this._unsupportedPbszValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedPbszValue = this._unsupportedPbszValue;
    }
    if (this._unsupportedProtValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedProtValue = this._unsupportedProtValue;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authUnsupported = undefined;
      this._badSequence = undefined;
      this._cantFindEpsv = undefined;
      this._cantFindPasv = undefined;
      this._clEstErr = undefined;
      this._clRequestErr = undefined;
      this._dataSendFail = undefined;
      this._dataServerConnFail = undefined;
      this._duration = undefined;
      this._insertTupleFail = undefined;
      this._invalidStartLine = undefined;
      this._lineTooLong = undefined;
      this._noRoute = undefined;
      this._rsvPersistConnFail = undefined;
      this._serConnectingErr = undefined;
      this._serverResponseErr = undefined;
      this._smpCreateFail = undefined;
      this._smpV4Fail = undefined;
      this._smpV6Fail = undefined;
      this._snatFail = undefined;
      this._svrselFail = undefined;
      this._thresholdExceededBy = undefined;
      this._unsupportedPbszValue = undefined;
      this._unsupportedProtValue = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authUnsupported = value.authUnsupported;
      this._badSequence = value.badSequence;
      this._cantFindEpsv = value.cantFindEpsv;
      this._cantFindPasv = value.cantFindPasv;
      this._clEstErr = value.clEstErr;
      this._clRequestErr = value.clRequestErr;
      this._dataSendFail = value.dataSendFail;
      this._dataServerConnFail = value.dataServerConnFail;
      this._duration = value.duration;
      this._insertTupleFail = value.insertTupleFail;
      this._invalidStartLine = value.invalidStartLine;
      this._lineTooLong = value.lineTooLong;
      this._noRoute = value.noRoute;
      this._rsvPersistConnFail = value.rsvPersistConnFail;
      this._serConnectingErr = value.serConnectingErr;
      this._serverResponseErr = value.serverResponseErr;
      this._smpCreateFail = value.smpCreateFail;
      this._smpV4Fail = value.smpV4Fail;
      this._smpV6Fail = value.smpV6Fail;
      this._snatFail = value.snatFail;
      this._svrselFail = value.svrselFail;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._unsupportedPbszValue = value.unsupportedPbszValue;
      this._unsupportedProtValue = value.unsupportedProtValue;
      this._uuid = value.uuid;
    }
  }

  // auth_unsupported - computed: false, optional: true, required: false
  private _authUnsupported?: number; 
  public get authUnsupported() {
    return this.getNumberAttribute('auth_unsupported');
  }
  public set authUnsupported(value: number) {
    this._authUnsupported = value;
  }
  public resetAuthUnsupported() {
    this._authUnsupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authUnsupportedInput() {
    return this._authUnsupported;
  }

  // bad_sequence - computed: false, optional: true, required: false
  private _badSequence?: number; 
  public get badSequence() {
    return this.getNumberAttribute('bad_sequence');
  }
  public set badSequence(value: number) {
    this._badSequence = value;
  }
  public resetBadSequence() {
    this._badSequence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badSequenceInput() {
    return this._badSequence;
  }

  // cant_find_epsv - computed: false, optional: true, required: false
  private _cantFindEpsv?: number; 
  public get cantFindEpsv() {
    return this.getNumberAttribute('cant_find_epsv');
  }
  public set cantFindEpsv(value: number) {
    this._cantFindEpsv = value;
  }
  public resetCantFindEpsv() {
    this._cantFindEpsv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cantFindEpsvInput() {
    return this._cantFindEpsv;
  }

  // cant_find_pasv - computed: false, optional: true, required: false
  private _cantFindPasv?: number; 
  public get cantFindPasv() {
    return this.getNumberAttribute('cant_find_pasv');
  }
  public set cantFindPasv(value: number) {
    this._cantFindPasv = value;
  }
  public resetCantFindPasv() {
    this._cantFindPasv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cantFindPasvInput() {
    return this._cantFindPasv;
  }

  // cl_est_err - computed: false, optional: true, required: false
  private _clEstErr?: number; 
  public get clEstErr() {
    return this.getNumberAttribute('cl_est_err');
  }
  public set clEstErr(value: number) {
    this._clEstErr = value;
  }
  public resetClEstErr() {
    this._clEstErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clEstErrInput() {
    return this._clEstErr;
  }

  // cl_request_err - computed: false, optional: true, required: false
  private _clRequestErr?: number; 
  public get clRequestErr() {
    return this.getNumberAttribute('cl_request_err');
  }
  public set clRequestErr(value: number) {
    this._clRequestErr = value;
  }
  public resetClRequestErr() {
    this._clRequestErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clRequestErrInput() {
    return this._clRequestErr;
  }

  // data_send_fail - computed: false, optional: true, required: false
  private _dataSendFail?: number; 
  public get dataSendFail() {
    return this.getNumberAttribute('data_send_fail');
  }
  public set dataSendFail(value: number) {
    this._dataSendFail = value;
  }
  public resetDataSendFail() {
    this._dataSendFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSendFailInput() {
    return this._dataSendFail;
  }

  // data_server_conn_fail - computed: false, optional: true, required: false
  private _dataServerConnFail?: number; 
  public get dataServerConnFail() {
    return this.getNumberAttribute('data_server_conn_fail');
  }
  public set dataServerConnFail(value: number) {
    this._dataServerConnFail = value;
  }
  public resetDataServerConnFail() {
    this._dataServerConnFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataServerConnFailInput() {
    return this._dataServerConnFail;
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

  // insert_tuple_fail - computed: false, optional: true, required: false
  private _insertTupleFail?: number; 
  public get insertTupleFail() {
    return this.getNumberAttribute('insert_tuple_fail');
  }
  public set insertTupleFail(value: number) {
    this._insertTupleFail = value;
  }
  public resetInsertTupleFail() {
    this._insertTupleFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertTupleFailInput() {
    return this._insertTupleFail;
  }

  // invalid_start_line - computed: false, optional: true, required: false
  private _invalidStartLine?: number; 
  public get invalidStartLine() {
    return this.getNumberAttribute('invalid_start_line');
  }
  public set invalidStartLine(value: number) {
    this._invalidStartLine = value;
  }
  public resetInvalidStartLine() {
    this._invalidStartLine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidStartLineInput() {
    return this._invalidStartLine;
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

  // no_route - computed: false, optional: true, required: false
  private _noRoute?: number; 
  public get noRoute() {
    return this.getNumberAttribute('no_route');
  }
  public set noRoute(value: number) {
    this._noRoute = value;
  }
  public resetNoRoute() {
    this._noRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRouteInput() {
    return this._noRoute;
  }

  // rsv_persist_conn_fail - computed: false, optional: true, required: false
  private _rsvPersistConnFail?: number; 
  public get rsvPersistConnFail() {
    return this.getNumberAttribute('rsv_persist_conn_fail');
  }
  public set rsvPersistConnFail(value: number) {
    this._rsvPersistConnFail = value;
  }
  public resetRsvPersistConnFail() {
    this._rsvPersistConnFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsvPersistConnFailInput() {
    return this._rsvPersistConnFail;
  }

  // ser_connecting_err - computed: false, optional: true, required: false
  private _serConnectingErr?: number; 
  public get serConnectingErr() {
    return this.getNumberAttribute('ser_connecting_err');
  }
  public set serConnectingErr(value: number) {
    this._serConnectingErr = value;
  }
  public resetSerConnectingErr() {
    this._serConnectingErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serConnectingErrInput() {
    return this._serConnectingErr;
  }

  // server_response_err - computed: false, optional: true, required: false
  private _serverResponseErr?: number; 
  public get serverResponseErr() {
    return this.getNumberAttribute('server_response_err');
  }
  public set serverResponseErr(value: number) {
    this._serverResponseErr = value;
  }
  public resetServerResponseErr() {
    this._serverResponseErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverResponseErrInput() {
    return this._serverResponseErr;
  }

  // smp_create_fail - computed: false, optional: true, required: false
  private _smpCreateFail?: number; 
  public get smpCreateFail() {
    return this.getNumberAttribute('smp_create_fail');
  }
  public set smpCreateFail(value: number) {
    this._smpCreateFail = value;
  }
  public resetSmpCreateFail() {
    this._smpCreateFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpCreateFailInput() {
    return this._smpCreateFail;
  }

  // smp_v4_fail - computed: false, optional: true, required: false
  private _smpV4Fail?: number; 
  public get smpV4Fail() {
    return this.getNumberAttribute('smp_v4_fail');
  }
  public set smpV4Fail(value: number) {
    this._smpV4Fail = value;
  }
  public resetSmpV4Fail() {
    this._smpV4Fail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpV4FailInput() {
    return this._smpV4Fail;
  }

  // smp_v6_fail - computed: false, optional: true, required: false
  private _smpV6Fail?: number; 
  public get smpV6Fail() {
    return this.getNumberAttribute('smp_v6_fail');
  }
  public set smpV6Fail(value: number) {
    this._smpV6Fail = value;
  }
  public resetSmpV6Fail() {
    this._smpV6Fail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smpV6FailInput() {
    return this._smpV6Fail;
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

  // svrsel_fail - computed: false, optional: true, required: false
  private _svrselFail?: number; 
  public get svrselFail() {
    return this.getNumberAttribute('svrsel_fail');
  }
  public set svrselFail(value: number) {
    this._svrselFail = value;
  }
  public resetSvrselFail() {
    this._svrselFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svrselFailInput() {
    return this._svrselFail;
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

  // unsupported_pbsz_value - computed: false, optional: true, required: false
  private _unsupportedPbszValue?: number; 
  public get unsupportedPbszValue() {
    return this.getNumberAttribute('unsupported_pbsz_value');
  }
  public set unsupportedPbszValue(value: number) {
    this._unsupportedPbszValue = value;
  }
  public resetUnsupportedPbszValue() {
    this._unsupportedPbszValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedPbszValueInput() {
    return this._unsupportedPbszValue;
  }

  // unsupported_prot_value - computed: false, optional: true, required: false
  private _unsupportedProtValue?: number; 
  public get unsupportedProtValue() {
    return this.getNumberAttribute('unsupported_prot_value');
  }
  public set unsupportedProtValue(value: number) {
    this._unsupportedProtValue = value;
  }
  public resetUnsupportedProtValue() {
    this._unsupportedProtValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedProtValueInput() {
    return this._unsupportedProtValue;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_imap_proxy',
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
    this._id = config.id;
    this._name = config.name;
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
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsRateA) {
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
      name: cdktf.stringToTerraform(this._name),
      uuid: cdktf.stringToTerraform(this._uuid),
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbImapProxyTriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
