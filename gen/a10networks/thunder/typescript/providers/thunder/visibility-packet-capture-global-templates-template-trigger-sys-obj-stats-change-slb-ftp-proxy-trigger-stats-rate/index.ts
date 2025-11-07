// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for Auth Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#auth_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#auth_fail}
  */
  readonly authFail?: number;
  /**
  * Enable automatic packet-capture for Bad Sequence
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#bad_sequence VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#bad_sequence}
  */
  readonly badSequence?: number;
  /**
  * Enable automatic packet-capture for cant find eprt
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#cant_find_eprt VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#cant_find_eprt}
  */
  readonly cantFindEprt?: number;
  /**
  * Enable automatic packet-capture for cant find port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#cant_find_port VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#cant_find_port}
  */
  readonly cantFindPort?: number;
  /**
  * Enable automatic packet-capture for Client EST state erro
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#cl_est_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#cl_est_err}
  */
  readonly clEstErr?: number;
  /**
  * Enable automatic packet-capture for Client RQ state error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#cl_request_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#cl_request_err}
  */
  readonly clRequestErr?: number;
  /**
  * Enable automatic packet-capture for Data Start state error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#data_conn_start_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#data_conn_start_err}
  */
  readonly dataConnStartErr?: number;
  /**
  * Enable automatic packet-capture for data send fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#data_send_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#data_send_fail}
  */
  readonly dataSendFail?: number;
  /**
  * Enable automatic packet-capture for Data Serv CTED error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#data_serv_connected_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#data_serv_connected_err}
  */
  readonly dataServConnectedErr?: number;
  /**
  * Enable automatic packet-capture for Data Serv CTNG error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#data_serv_connecting_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#data_serv_connecting_err}
  */
  readonly dataServConnectingErr?: number;
  /**
  * Enable automatic packet-capture for data svr conn fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#data_server_conn_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#data_server_conn_fail}
  */
  readonly dataServerConnFail?: number;
  /**
  * Enable automatic packet-capture for Host Domain Name isn't resolved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#ds_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#ds_fail}
  */
  readonly dsFail?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Serv Sel insert tuple fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#insert_tuple_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#insert_tuple_fail}
  */
  readonly insertTupleFail?: number;
  /**
  * Enable automatic packet-capture for invalid start line
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#invalid_start_line VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#invalid_start_line}
  */
  readonly invalidStartLine?: number;
  /**
  * Enable automatic packet-capture for line too long
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#line_too_long VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#line_too_long}
  */
  readonly lineTooLong?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for no route failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#no_route VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#no_route}
  */
  readonly noRoute?: number;
  /**
  * Enable automatic packet-capture for Serv Sel Persist fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#rsv_persist_conn_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#rsv_persist_conn_fail}
  */
  readonly rsvPersistConnFail?: number;
  /**
  * Enable automatic packet-capture for Serv CTNG state error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#ser_connecting_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#ser_connecting_err}
  */
  readonly serConnectingErr?: number;
  /**
  * Enable automatic packet-capture for Serv RESP state error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#server_response_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#server_response_err}
  */
  readonly serverResponseErr?: number;
  /**
  * Enable automatic packet-capture for smp create fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#smp_create_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#smp_create_fail}
  */
  readonly smpCreateFail?: number;
  /**
  * Enable automatic packet-capture for Serv Sel SMPv4 fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#smp_v4_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#smp_v4_fail}
  */
  readonly smpV4Fail?: number;
  /**
  * Enable automatic packet-capture for Serv Sel SMPv6 fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#smp_v6_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#smp_v6_fail}
  */
  readonly smpV6Fail?: number;
  /**
  * Enable automatic packet-capture for source nat failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#snat_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Enable automatic packet-capture for Server selection failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#svrsel_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#svrsel_fail}
  */
  readonly svrselFail?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for Unsupported cmd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#unsupported_command VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#unsupported_command}
  */
  readonly unsupportedCommand?: number;
  /**
  * Enable automatic packet-capture for Unsupported PBSZ
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#unsupported_pbsz_value VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#unsupported_pbsz_value}
  */
  readonly unsupportedPbszValue?: number;
  /**
  * Enable automatic packet-capture for Unsupported PROT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#unsupported_prot_value VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#unsupported_prot_value}
  */
  readonly unsupportedProtValue?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFtpProxyTriggerStatsRateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_ftp_proxy_trigger_stats_rate',
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
    this._authFail = config.authFail;
    this._badSequence = config.badSequence;
    this._cantFindEprt = config.cantFindEprt;
    this._cantFindPort = config.cantFindPort;
    this._clEstErr = config.clEstErr;
    this._clRequestErr = config.clRequestErr;
    this._dataConnStartErr = config.dataConnStartErr;
    this._dataSendFail = config.dataSendFail;
    this._dataServConnectedErr = config.dataServConnectedErr;
    this._dataServConnectingErr = config.dataServConnectingErr;
    this._dataServerConnFail = config.dataServerConnFail;
    this._dsFail = config.dsFail;
    this._duration = config.duration;
    this._id = config.id;
    this._insertTupleFail = config.insertTupleFail;
    this._invalidStartLine = config.invalidStartLine;
    this._lineTooLong = config.lineTooLong;
    this._name = config.name;
    this._noRoute = config.noRoute;
    this._rsvPersistConnFail = config.rsvPersistConnFail;
    this._serConnectingErr = config.serConnectingErr;
    this._serverResponseErr = config.serverResponseErr;
    this._smpCreateFail = config.smpCreateFail;
    this._smpV4Fail = config.smpV4Fail;
    this._smpV6Fail = config.smpV6Fail;
    this._snatFail = config.snatFail;
    this._svrselFail = config.svrselFail;
    this._thresholdExceededBy = config.thresholdExceededBy;
    this._unsupportedCommand = config.unsupportedCommand;
    this._unsupportedPbszValue = config.unsupportedPbszValue;
    this._unsupportedProtValue = config.unsupportedProtValue;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_fail: cdktf.numberToTerraform(this._authFail),
      bad_sequence: cdktf.numberToTerraform(this._badSequence),
      cant_find_eprt: cdktf.numberToTerraform(this._cantFindEprt),
      cant_find_port: cdktf.numberToTerraform(this._cantFindPort),
      cl_est_err: cdktf.numberToTerraform(this._clEstErr),
      cl_request_err: cdktf.numberToTerraform(this._clRequestErr),
      data_conn_start_err: cdktf.numberToTerraform(this._dataConnStartErr),
      data_send_fail: cdktf.numberToTerraform(this._dataSendFail),
      data_serv_connected_err: cdktf.numberToTerraform(this._dataServConnectedErr),
      data_serv_connecting_err: cdktf.numberToTerraform(this._dataServConnectingErr),
      data_server_conn_fail: cdktf.numberToTerraform(this._dataServerConnFail),
      ds_fail: cdktf.numberToTerraform(this._dsFail),
      duration: cdktf.numberToTerraform(this._duration),
      id: cdktf.stringToTerraform(this._id),
      insert_tuple_fail: cdktf.numberToTerraform(this._insertTupleFail),
      invalid_start_line: cdktf.numberToTerraform(this._invalidStartLine),
      line_too_long: cdktf.numberToTerraform(this._lineTooLong),
      name: cdktf.stringToTerraform(this._name),
      no_route: cdktf.numberToTerraform(this._noRoute),
      rsv_persist_conn_fail: cdktf.numberToTerraform(this._rsvPersistConnFail),
      ser_connecting_err: cdktf.numberToTerraform(this._serConnectingErr),
      server_response_err: cdktf.numberToTerraform(this._serverResponseErr),
      smp_create_fail: cdktf.numberToTerraform(this._smpCreateFail),
      smp_v4_fail: cdktf.numberToTerraform(this._smpV4Fail),
      smp_v6_fail: cdktf.numberToTerraform(this._smpV6Fail),
      snat_fail: cdktf.numberToTerraform(this._snatFail),
      svrsel_fail: cdktf.numberToTerraform(this._svrselFail),
      threshold_exceeded_by: cdktf.numberToTerraform(this._thresholdExceededBy),
      unsupported_command: cdktf.numberToTerraform(this._unsupportedCommand),
      unsupported_pbsz_value: cdktf.numberToTerraform(this._unsupportedPbszValue),
      unsupported_prot_value: cdktf.numberToTerraform(this._unsupportedProtValue),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_fail: {
        value: cdktf.numberToHclTerraform(this._authFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bad_sequence: {
        value: cdktf.numberToHclTerraform(this._badSequence),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cant_find_eprt: {
        value: cdktf.numberToHclTerraform(this._cantFindEprt),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cant_find_port: {
        value: cdktf.numberToHclTerraform(this._cantFindPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cl_est_err: {
        value: cdktf.numberToHclTerraform(this._clEstErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cl_request_err: {
        value: cdktf.numberToHclTerraform(this._clRequestErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_conn_start_err: {
        value: cdktf.numberToHclTerraform(this._dataConnStartErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_send_fail: {
        value: cdktf.numberToHclTerraform(this._dataSendFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_serv_connected_err: {
        value: cdktf.numberToHclTerraform(this._dataServConnectedErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_serv_connecting_err: {
        value: cdktf.numberToHclTerraform(this._dataServConnectingErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_server_conn_fail: {
        value: cdktf.numberToHclTerraform(this._dataServerConnFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ds_fail: {
        value: cdktf.numberToHclTerraform(this._dsFail),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_tuple_fail: {
        value: cdktf.numberToHclTerraform(this._insertTupleFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      invalid_start_line: {
        value: cdktf.numberToHclTerraform(this._invalidStartLine),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_route: {
        value: cdktf.numberToHclTerraform(this._noRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rsv_persist_conn_fail: {
        value: cdktf.numberToHclTerraform(this._rsvPersistConnFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ser_connecting_err: {
        value: cdktf.numberToHclTerraform(this._serConnectingErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_response_err: {
        value: cdktf.numberToHclTerraform(this._serverResponseErr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      smp_create_fail: {
        value: cdktf.numberToHclTerraform(this._smpCreateFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      smp_v4_fail: {
        value: cdktf.numberToHclTerraform(this._smpV4Fail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      smp_v6_fail: {
        value: cdktf.numberToHclTerraform(this._smpV6Fail),
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
      svrsel_fail: {
        value: cdktf.numberToHclTerraform(this._svrselFail),
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
      unsupported_command: {
        value: cdktf.numberToHclTerraform(this._unsupportedCommand),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unsupported_pbsz_value: {
        value: cdktf.numberToHclTerraform(this._unsupportedPbszValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unsupported_prot_value: {
        value: cdktf.numberToHclTerraform(this._unsupportedProtValue),
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
