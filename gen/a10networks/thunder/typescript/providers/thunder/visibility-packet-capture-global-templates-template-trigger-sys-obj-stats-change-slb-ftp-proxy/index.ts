// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for Auth Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#auth_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#auth_fail}
  */
  readonly authFail?: number;
  /**
  * Enable automatic packet-capture for Bad Sequence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#bad_sequence VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#bad_sequence}
  */
  readonly badSequence?: number;
  /**
  * Enable automatic packet-capture for cant find eprt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#cant_find_eprt VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#cant_find_eprt}
  */
  readonly cantFindEprt?: number;
  /**
  * Enable automatic packet-capture for cant find port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#cant_find_port VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#cant_find_port}
  */
  readonly cantFindPort?: number;
  /**
  * Enable automatic packet-capture for Client EST state erro
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#cl_est_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#cl_est_err}
  */
  readonly clEstErr?: number;
  /**
  * Enable automatic packet-capture for Client RQ state error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#cl_request_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#cl_request_err}
  */
  readonly clRequestErr?: number;
  /**
  * Enable automatic packet-capture for Data Start state error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#data_conn_start_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#data_conn_start_err}
  */
  readonly dataConnStartErr?: number;
  /**
  * Enable automatic packet-capture for data send fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#data_send_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#data_send_fail}
  */
  readonly dataSendFail?: number;
  /**
  * Enable automatic packet-capture for Data Serv CTED error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#data_serv_connected_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#data_serv_connected_err}
  */
  readonly dataServConnectedErr?: number;
  /**
  * Enable automatic packet-capture for Data Serv CTNG error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#data_serv_connecting_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#data_serv_connecting_err}
  */
  readonly dataServConnectingErr?: number;
  /**
  * Enable automatic packet-capture for data svr conn fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#data_server_conn_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#data_server_conn_fail}
  */
  readonly dataServerConnFail?: number;
  /**
  * Enable automatic packet-capture for Host Domain Name isn't resolved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#ds_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#ds_fail}
  */
  readonly dsFail?: number;
  /**
  * Enable automatic packet-capture for Serv Sel insert tuple fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#insert_tuple_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#insert_tuple_fail}
  */
  readonly insertTupleFail?: number;
  /**
  * Enable automatic packet-capture for invalid start line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#invalid_start_line VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#invalid_start_line}
  */
  readonly invalidStartLine?: number;
  /**
  * Enable automatic packet-capture for line too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#line_too_long VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#line_too_long}
  */
  readonly lineTooLong?: number;
  /**
  * Enable automatic packet-capture for no route failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#no_route VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#no_route}
  */
  readonly noRoute?: number;
  /**
  * Enable automatic packet-capture for Serv Sel Persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#rsv_persist_conn_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#rsv_persist_conn_fail}
  */
  readonly rsvPersistConnFail?: number;
  /**
  * Enable automatic packet-capture for Serv CTNG state error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#ser_connecting_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#ser_connecting_err}
  */
  readonly serConnectingErr?: number;
  /**
  * Enable automatic packet-capture for Serv RESP state error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#server_response_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#server_response_err}
  */
  readonly serverResponseErr?: number;
  /**
  * Enable automatic packet-capture for smp create fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#smp_create_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#smp_create_fail}
  */
  readonly smpCreateFail?: number;
  /**
  * Enable automatic packet-capture for Serv Sel SMPv4 fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#smp_v4_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#smp_v4_fail}
  */
  readonly smpV4Fail?: number;
  /**
  * Enable automatic packet-capture for Serv Sel SMPv6 fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#smp_v6_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#smp_v6_fail}
  */
  readonly smpV6Fail?: number;
  /**
  * Enable automatic packet-capture for source nat failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#snat_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Enable automatic packet-capture for Server selection failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#svrsel_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#svrsel_fail}
  */
  readonly svrselFail?: number;
  /**
  * Enable automatic packet-capture for Unsupported cmd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#unsupported_command VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#unsupported_command}
  */
  readonly unsupportedCommand?: number;
  /**
  * Enable automatic packet-capture for Unsupported PBSZ
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#unsupported_pbsz_value VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#unsupported_pbsz_value}
  */
  readonly unsupportedPbszValue?: number;
  /**
  * Enable automatic packet-capture for Unsupported PROT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#unsupported_prot_value VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#unsupported_prot_value}
  */
  readonly unsupportedProtValue?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_fail: cdktf.numberToTerraform(struct!.authFail),
    bad_sequence: cdktf.numberToTerraform(struct!.badSequence),
    cant_find_eprt: cdktf.numberToTerraform(struct!.cantFindEprt),
    cant_find_port: cdktf.numberToTerraform(struct!.cantFindPort),
    cl_est_err: cdktf.numberToTerraform(struct!.clEstErr),
    cl_request_err: cdktf.numberToTerraform(struct!.clRequestErr),
    data_conn_start_err: cdktf.numberToTerraform(struct!.dataConnStartErr),
    data_send_fail: cdktf.numberToTerraform(struct!.dataSendFail),
    data_serv_connected_err: cdktf.numberToTerraform(struct!.dataServConnectedErr),
    data_serv_connecting_err: cdktf.numberToTerraform(struct!.dataServConnectingErr),
    data_server_conn_fail: cdktf.numberToTerraform(struct!.dataServerConnFail),
    ds_fail: cdktf.numberToTerraform(struct!.dsFail),
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
    unsupported_command: cdktf.numberToTerraform(struct!.unsupportedCommand),
    unsupported_pbsz_value: cdktf.numberToTerraform(struct!.unsupportedPbszValue),
    unsupported_prot_value: cdktf.numberToTerraform(struct!.unsupportedProtValue),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_fail: {
      value: cdktf.numberToHclTerraform(struct!.authFail),
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
    cant_find_eprt: {
      value: cdktf.numberToHclTerraform(struct!.cantFindEprt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cant_find_port: {
      value: cdktf.numberToHclTerraform(struct!.cantFindPort),
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
    data_conn_start_err: {
      value: cdktf.numberToHclTerraform(struct!.dataConnStartErr),
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
    data_serv_connected_err: {
      value: cdktf.numberToHclTerraform(struct!.dataServConnectedErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_serv_connecting_err: {
      value: cdktf.numberToHclTerraform(struct!.dataServConnectingErr),
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
    ds_fail: {
      value: cdktf.numberToHclTerraform(struct!.dsFail),
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
    unsupported_command: {
      value: cdktf.numberToHclTerraform(struct!.unsupportedCommand),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.authFail = this._authFail;
    }
    if (this._badSequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.badSequence = this._badSequence;
    }
    if (this._cantFindEprt !== undefined) {
      hasAnyValues = true;
      internalValueResult.cantFindEprt = this._cantFindEprt;
    }
    if (this._cantFindPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.cantFindPort = this._cantFindPort;
    }
    if (this._clEstErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clEstErr = this._clEstErr;
    }
    if (this._clRequestErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clRequestErr = this._clRequestErr;
    }
    if (this._dataConnStartErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataConnStartErr = this._dataConnStartErr;
    }
    if (this._dataSendFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSendFail = this._dataSendFail;
    }
    if (this._dataServConnectedErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataServConnectedErr = this._dataServConnectedErr;
    }
    if (this._dataServConnectingErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataServConnectingErr = this._dataServConnectingErr;
    }
    if (this._dataServerConnFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataServerConnFail = this._dataServerConnFail;
    }
    if (this._dsFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsFail = this._dsFail;
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
    if (this._unsupportedCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedCommand = this._unsupportedCommand;
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

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authFail = undefined;
      this._badSequence = undefined;
      this._cantFindEprt = undefined;
      this._cantFindPort = undefined;
      this._clEstErr = undefined;
      this._clRequestErr = undefined;
      this._dataConnStartErr = undefined;
      this._dataSendFail = undefined;
      this._dataServConnectedErr = undefined;
      this._dataServConnectingErr = undefined;
      this._dataServerConnFail = undefined;
      this._dsFail = undefined;
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
      this._unsupportedCommand = undefined;
      this._unsupportedPbszValue = undefined;
      this._unsupportedProtValue = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authFail = value.authFail;
      this._badSequence = value.badSequence;
      this._cantFindEprt = value.cantFindEprt;
      this._cantFindPort = value.cantFindPort;
      this._clEstErr = value.clEstErr;
      this._clRequestErr = value.clRequestErr;
      this._dataConnStartErr = value.dataConnStartErr;
      this._dataSendFail = value.dataSendFail;
      this._dataServConnectedErr = value.dataServConnectedErr;
      this._dataServConnectingErr = value.dataServConnectingErr;
      this._dataServerConnFail = value.dataServerConnFail;
      this._dsFail = value.dsFail;
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
      this._unsupportedCommand = value.unsupportedCommand;
      this._unsupportedPbszValue = value.unsupportedPbszValue;
      this._unsupportedProtValue = value.unsupportedProtValue;
      this._uuid = value.uuid;
    }
  }

  // auth_fail - computed: false, optional: true, required: false
  private _authFail?: number; 
  public get authFail() {
    return this.getNumberAttribute('auth_fail');
  }
  public set authFail(value: number) {
    this._authFail = value;
  }
  public resetAuthFail() {
    this._authFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authFailInput() {
    return this._authFail;
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

  // cant_find_eprt - computed: false, optional: true, required: false
  private _cantFindEprt?: number; 
  public get cantFindEprt() {
    return this.getNumberAttribute('cant_find_eprt');
  }
  public set cantFindEprt(value: number) {
    this._cantFindEprt = value;
  }
  public resetCantFindEprt() {
    this._cantFindEprt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cantFindEprtInput() {
    return this._cantFindEprt;
  }

  // cant_find_port - computed: false, optional: true, required: false
  private _cantFindPort?: number; 
  public get cantFindPort() {
    return this.getNumberAttribute('cant_find_port');
  }
  public set cantFindPort(value: number) {
    this._cantFindPort = value;
  }
  public resetCantFindPort() {
    this._cantFindPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cantFindPortInput() {
    return this._cantFindPort;
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

  // data_conn_start_err - computed: false, optional: true, required: false
  private _dataConnStartErr?: number; 
  public get dataConnStartErr() {
    return this.getNumberAttribute('data_conn_start_err');
  }
  public set dataConnStartErr(value: number) {
    this._dataConnStartErr = value;
  }
  public resetDataConnStartErr() {
    this._dataConnStartErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataConnStartErrInput() {
    return this._dataConnStartErr;
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

  // data_serv_connected_err - computed: false, optional: true, required: false
  private _dataServConnectedErr?: number; 
  public get dataServConnectedErr() {
    return this.getNumberAttribute('data_serv_connected_err');
  }
  public set dataServConnectedErr(value: number) {
    this._dataServConnectedErr = value;
  }
  public resetDataServConnectedErr() {
    this._dataServConnectedErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataServConnectedErrInput() {
    return this._dataServConnectedErr;
  }

  // data_serv_connecting_err - computed: false, optional: true, required: false
  private _dataServConnectingErr?: number; 
  public get dataServConnectingErr() {
    return this.getNumberAttribute('data_serv_connecting_err');
  }
  public set dataServConnectingErr(value: number) {
    this._dataServConnectingErr = value;
  }
  public resetDataServConnectingErr() {
    this._dataServConnectingErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataServConnectingErrInput() {
    return this._dataServConnectingErr;
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

  // ds_fail - computed: false, optional: true, required: false
  private _dsFail?: number; 
  public get dsFail() {
    return this.getNumberAttribute('ds_fail');
  }
  public set dsFail(value: number) {
    this._dsFail = value;
  }
  public resetDsFail() {
    this._dsFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsFailInput() {
    return this._dsFail;
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

  // unsupported_command - computed: false, optional: true, required: false
  private _unsupportedCommand?: number; 
  public get unsupportedCommand() {
    return this.getNumberAttribute('unsupported_command');
  }
  public set unsupportedCommand(value: number) {
    this._unsupportedCommand = value;
  }
  public resetUnsupportedCommand() {
    this._unsupportedCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedCommandInput() {
    return this._unsupportedCommand;
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
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA {
  /**
  * Enable automatic packet-capture for Auth Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#auth_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#auth_fail}
  */
  readonly authFail?: number;
  /**
  * Enable automatic packet-capture for Bad Sequence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#bad_sequence VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#bad_sequence}
  */
  readonly badSequence?: number;
  /**
  * Enable automatic packet-capture for cant find eprt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#cant_find_eprt VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#cant_find_eprt}
  */
  readonly cantFindEprt?: number;
  /**
  * Enable automatic packet-capture for cant find port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#cant_find_port VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#cant_find_port}
  */
  readonly cantFindPort?: number;
  /**
  * Enable automatic packet-capture for Client EST state erro
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#cl_est_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#cl_est_err}
  */
  readonly clEstErr?: number;
  /**
  * Enable automatic packet-capture for Client RQ state error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#cl_request_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#cl_request_err}
  */
  readonly clRequestErr?: number;
  /**
  * Enable automatic packet-capture for Data Start state error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#data_conn_start_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#data_conn_start_err}
  */
  readonly dataConnStartErr?: number;
  /**
  * Enable automatic packet-capture for data send fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#data_send_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#data_send_fail}
  */
  readonly dataSendFail?: number;
  /**
  * Enable automatic packet-capture for Data Serv CTED error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#data_serv_connected_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#data_serv_connected_err}
  */
  readonly dataServConnectedErr?: number;
  /**
  * Enable automatic packet-capture for Data Serv CTNG error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#data_serv_connecting_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#data_serv_connecting_err}
  */
  readonly dataServConnectingErr?: number;
  /**
  * Enable automatic packet-capture for data svr conn fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#data_server_conn_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#data_server_conn_fail}
  */
  readonly dataServerConnFail?: number;
  /**
  * Enable automatic packet-capture for Host Domain Name isn't resolved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#ds_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#ds_fail}
  */
  readonly dsFail?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Serv Sel insert tuple fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#insert_tuple_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#insert_tuple_fail}
  */
  readonly insertTupleFail?: number;
  /**
  * Enable automatic packet-capture for invalid start line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#invalid_start_line VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#invalid_start_line}
  */
  readonly invalidStartLine?: number;
  /**
  * Enable automatic packet-capture for line too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#line_too_long VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#line_too_long}
  */
  readonly lineTooLong?: number;
  /**
  * Enable automatic packet-capture for no route failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#no_route VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#no_route}
  */
  readonly noRoute?: number;
  /**
  * Enable automatic packet-capture for Serv Sel Persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#rsv_persist_conn_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#rsv_persist_conn_fail}
  */
  readonly rsvPersistConnFail?: number;
  /**
  * Enable automatic packet-capture for Serv CTNG state error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#ser_connecting_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#ser_connecting_err}
  */
  readonly serConnectingErr?: number;
  /**
  * Enable automatic packet-capture for Serv RESP state error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#server_response_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#server_response_err}
  */
  readonly serverResponseErr?: number;
  /**
  * Enable automatic packet-capture for smp create fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#smp_create_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#smp_create_fail}
  */
  readonly smpCreateFail?: number;
  /**
  * Enable automatic packet-capture for Serv Sel SMPv4 fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#smp_v4_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#smp_v4_fail}
  */
  readonly smpV4Fail?: number;
  /**
  * Enable automatic packet-capture for Serv Sel SMPv6 fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#smp_v6_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#smp_v6_fail}
  */
  readonly smpV6Fail?: number;
  /**
  * Enable automatic packet-capture for source nat failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#snat_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Enable automatic packet-capture for Server selection failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#svrsel_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#svrsel_fail}
  */
  readonly svrselFail?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for Unsupported cmd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#unsupported_command VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#unsupported_command}
  */
  readonly unsupportedCommand?: number;
  /**
  * Enable automatic packet-capture for Unsupported PBSZ
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#unsupported_pbsz_value VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#unsupported_pbsz_value}
  */
  readonly unsupportedPbszValue?: number;
  /**
  * Enable automatic packet-capture for Unsupported PROT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#unsupported_prot_value VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#unsupported_prot_value}
  */
  readonly unsupportedProtValue?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_fail: cdktf.numberToTerraform(struct!.authFail),
    bad_sequence: cdktf.numberToTerraform(struct!.badSequence),
    cant_find_eprt: cdktf.numberToTerraform(struct!.cantFindEprt),
    cant_find_port: cdktf.numberToTerraform(struct!.cantFindPort),
    cl_est_err: cdktf.numberToTerraform(struct!.clEstErr),
    cl_request_err: cdktf.numberToTerraform(struct!.clRequestErr),
    data_conn_start_err: cdktf.numberToTerraform(struct!.dataConnStartErr),
    data_send_fail: cdktf.numberToTerraform(struct!.dataSendFail),
    data_serv_connected_err: cdktf.numberToTerraform(struct!.dataServConnectedErr),
    data_serv_connecting_err: cdktf.numberToTerraform(struct!.dataServConnectingErr),
    data_server_conn_fail: cdktf.numberToTerraform(struct!.dataServerConnFail),
    ds_fail: cdktf.numberToTerraform(struct!.dsFail),
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
    unsupported_command: cdktf.numberToTerraform(struct!.unsupportedCommand),
    unsupported_pbsz_value: cdktf.numberToTerraform(struct!.unsupportedPbszValue),
    unsupported_prot_value: cdktf.numberToTerraform(struct!.unsupportedProtValue),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_fail: {
      value: cdktf.numberToHclTerraform(struct!.authFail),
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
    cant_find_eprt: {
      value: cdktf.numberToHclTerraform(struct!.cantFindEprt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cant_find_port: {
      value: cdktf.numberToHclTerraform(struct!.cantFindPort),
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
    data_conn_start_err: {
      value: cdktf.numberToHclTerraform(struct!.dataConnStartErr),
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
    data_serv_connected_err: {
      value: cdktf.numberToHclTerraform(struct!.dataServConnectedErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_serv_connecting_err: {
      value: cdktf.numberToHclTerraform(struct!.dataServConnectingErr),
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
    ds_fail: {
      value: cdktf.numberToHclTerraform(struct!.dsFail),
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
    unsupported_command: {
      value: cdktf.numberToHclTerraform(struct!.unsupportedCommand),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.authFail = this._authFail;
    }
    if (this._badSequence !== undefined) {
      hasAnyValues = true;
      internalValueResult.badSequence = this._badSequence;
    }
    if (this._cantFindEprt !== undefined) {
      hasAnyValues = true;
      internalValueResult.cantFindEprt = this._cantFindEprt;
    }
    if (this._cantFindPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.cantFindPort = this._cantFindPort;
    }
    if (this._clEstErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clEstErr = this._clEstErr;
    }
    if (this._clRequestErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clRequestErr = this._clRequestErr;
    }
    if (this._dataConnStartErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataConnStartErr = this._dataConnStartErr;
    }
    if (this._dataSendFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSendFail = this._dataSendFail;
    }
    if (this._dataServConnectedErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataServConnectedErr = this._dataServConnectedErr;
    }
    if (this._dataServConnectingErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataServConnectingErr = this._dataServConnectingErr;
    }
    if (this._dataServerConnFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataServerConnFail = this._dataServerConnFail;
    }
    if (this._dsFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsFail = this._dsFail;
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
    if (this._unsupportedCommand !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsupportedCommand = this._unsupportedCommand;
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

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authFail = undefined;
      this._badSequence = undefined;
      this._cantFindEprt = undefined;
      this._cantFindPort = undefined;
      this._clEstErr = undefined;
      this._clRequestErr = undefined;
      this._dataConnStartErr = undefined;
      this._dataSendFail = undefined;
      this._dataServConnectedErr = undefined;
      this._dataServConnectingErr = undefined;
      this._dataServerConnFail = undefined;
      this._dsFail = undefined;
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
      this._unsupportedCommand = undefined;
      this._unsupportedPbszValue = undefined;
      this._unsupportedProtValue = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authFail = value.authFail;
      this._badSequence = value.badSequence;
      this._cantFindEprt = value.cantFindEprt;
      this._cantFindPort = value.cantFindPort;
      this._clEstErr = value.clEstErr;
      this._clRequestErr = value.clRequestErr;
      this._dataConnStartErr = value.dataConnStartErr;
      this._dataSendFail = value.dataSendFail;
      this._dataServConnectedErr = value.dataServConnectedErr;
      this._dataServConnectingErr = value.dataServConnectingErr;
      this._dataServerConnFail = value.dataServerConnFail;
      this._dsFail = value.dsFail;
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
      this._unsupportedCommand = value.unsupportedCommand;
      this._unsupportedPbszValue = value.unsupportedPbszValue;
      this._unsupportedProtValue = value.unsupportedProtValue;
      this._uuid = value.uuid;
    }
  }

  // auth_fail - computed: false, optional: true, required: false
  private _authFail?: number; 
  public get authFail() {
    return this.getNumberAttribute('auth_fail');
  }
  public set authFail(value: number) {
    this._authFail = value;
  }
  public resetAuthFail() {
    this._authFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authFailInput() {
    return this._authFail;
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

  // cant_find_eprt - computed: false, optional: true, required: false
  private _cantFindEprt?: number; 
  public get cantFindEprt() {
    return this.getNumberAttribute('cant_find_eprt');
  }
  public set cantFindEprt(value: number) {
    this._cantFindEprt = value;
  }
  public resetCantFindEprt() {
    this._cantFindEprt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cantFindEprtInput() {
    return this._cantFindEprt;
  }

  // cant_find_port - computed: false, optional: true, required: false
  private _cantFindPort?: number; 
  public get cantFindPort() {
    return this.getNumberAttribute('cant_find_port');
  }
  public set cantFindPort(value: number) {
    this._cantFindPort = value;
  }
  public resetCantFindPort() {
    this._cantFindPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cantFindPortInput() {
    return this._cantFindPort;
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

  // data_conn_start_err - computed: false, optional: true, required: false
  private _dataConnStartErr?: number; 
  public get dataConnStartErr() {
    return this.getNumberAttribute('data_conn_start_err');
  }
  public set dataConnStartErr(value: number) {
    this._dataConnStartErr = value;
  }
  public resetDataConnStartErr() {
    this._dataConnStartErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataConnStartErrInput() {
    return this._dataConnStartErr;
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

  // data_serv_connected_err - computed: false, optional: true, required: false
  private _dataServConnectedErr?: number; 
  public get dataServConnectedErr() {
    return this.getNumberAttribute('data_serv_connected_err');
  }
  public set dataServConnectedErr(value: number) {
    this._dataServConnectedErr = value;
  }
  public resetDataServConnectedErr() {
    this._dataServConnectedErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataServConnectedErrInput() {
    return this._dataServConnectedErr;
  }

  // data_serv_connecting_err - computed: false, optional: true, required: false
  private _dataServConnectingErr?: number; 
  public get dataServConnectingErr() {
    return this.getNumberAttribute('data_serv_connecting_err');
  }
  public set dataServConnectingErr(value: number) {
    this._dataServConnectingErr = value;
  }
  public resetDataServConnectingErr() {
    this._dataServConnectingErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataServConnectingErrInput() {
    return this._dataServConnectingErr;
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

  // ds_fail - computed: false, optional: true, required: false
  private _dsFail?: number; 
  public get dsFail() {
    return this.getNumberAttribute('ds_fail');
  }
  public set dsFail(value: number) {
    this._dsFail = value;
  }
  public resetDsFail() {
    this._dsFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsFailInput() {
    return this._dsFail;
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

  // unsupported_command - computed: false, optional: true, required: false
  private _unsupportedCommand?: number; 
  public get unsupportedCommand() {
    return this.getNumberAttribute('unsupported_command');
  }
  public set unsupportedCommand(value: number) {
    this._unsupportedCommand = value;
  }
  public resetUnsupportedCommand() {
    this._unsupportedCommand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedCommandInput() {
    return this._unsupportedCommand;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy',
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
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA) {
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
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
