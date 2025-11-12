// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for Number of client failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic_trigger_stats_inc#client_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA#client_fail}
  */
  readonly clientFail?: number;
  /**
  * Enable automatic packet-capture for Fail to select client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic_trigger_stats_inc#client_select_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA#client_select_fail}
  */
  readonly clientSelectFail?: number;
  /**
  * Enable automatic packet-capture for Diameter cross cpu error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic_trigger_stats_inc#dcmsg_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA#dcmsg_error}
  */
  readonly dcmsgError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic_trigger_stats_inc#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for AVP value contains illegal chars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic_trigger_stats_inc#invalid_avp VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA#invalid_avp}
  */
  readonly invalidAvp?: number;
  /**
  * Enable automatic packet-capture for Diameter mismatch fwd session id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic_trigger_stats_inc#mismatch_fwd_id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA#mismatch_fwd_id}
  */
  readonly mismatchFwdId?: number;
  /**
  * Enable automatic packet-capture for Diameter mismatch rev session id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic_trigger_stats_inc#mismatch_rev_id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA#mismatch_rev_id}
  */
  readonly mismatchRevId?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic_trigger_stats_inc#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for Diameter no fwd tuple matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic_trigger_stats_inc#no_fwd_tuple VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA#no_fwd_tuple}
  */
  readonly noFwdTuple?: number;
  /**
  * Enable automatic packet-capture for Diameter no rev tuple matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic_trigger_stats_inc#no_rev_tuple VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA#no_rev_tuple}
  */
  readonly noRevTuple?: number;
  /**
  * Enable automatic packet-capture for Number of no routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic_trigger_stats_inc#no_route VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA#no_route}
  */
  readonly noRoute?: number;
  /**
  * Enable automatic packet-capture for Diameter no session id avp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic_trigger_stats_inc#no_session_id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA#no_session_id}
  */
  readonly noSessionId?: number;
  /**
  * Enable automatic packet-capture for Fail to reply error info to peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic_trigger_stats_inc#reply_error_info_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA#reply_error_info_fail}
  */
  readonly replyErrorInfoFail?: number;
  /**
  * Enable automatic packet-capture for Reply with unknown session ID error info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic_trigger_stats_inc#reply_unknown_session_id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA#reply_unknown_session_id}
  */
  readonly replyUnknownSessionId?: number;
  /**
  * Enable automatic packet-capture for Diameter retry client request fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic_trigger_stats_inc#retry_client_request_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA#retry_client_request_fail}
  */
  readonly retryClientRequestFail?: number;
  /**
  * Enable automatic packet-capture for Number of server failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic_trigger_stats_inc#server_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA#server_fail}
  */
  readonly serverFail?: number;
  /**
  * Enable automatic packet-capture for Number of snat failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic_trigger_stats_inc#snat_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Enable automatic packet-capture for Number of server selection failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic_trigger_stats_inc#svrsel_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA#svrsel_fail}
  */
  readonly svrselFail?: number;
  /**
  * Enable automatic packet-capture for Diameter unkown cmd code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic_trigger_stats_inc#unkwn_cmd_code VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA#unkwn_cmd_code}
  */
  readonly unkwnCmdCode?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic_trigger_stats_inc#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic_trigger_stats_inc}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic_trigger_stats_inc',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientFail = config.clientFail;
    this._clientSelectFail = config.clientSelectFail;
    this._dcmsgError = config.dcmsgError;
    this._id = config.id;
    this._invalidAvp = config.invalidAvp;
    this._mismatchFwdId = config.mismatchFwdId;
    this._mismatchRevId = config.mismatchRevId;
    this._name = config.name;
    this._noFwdTuple = config.noFwdTuple;
    this._noRevTuple = config.noRevTuple;
    this._noRoute = config.noRoute;
    this._noSessionId = config.noSessionId;
    this._replyErrorInfoFail = config.replyErrorInfoFail;
    this._replyUnknownSessionId = config.replyUnknownSessionId;
    this._retryClientRequestFail = config.retryClientRequestFail;
    this._serverFail = config.serverFail;
    this._snatFail = config.snatFail;
    this._svrselFail = config.svrselFail;
    this._unkwnCmdCode = config.unkwnCmdCode;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_fail - computed: false, optional: true, required: false
  private _clientFail?: number; 
  public get clientFail() {
    return this.getNumberAttribute('client_fail');
  }
  public set clientFail(value: number) {
    this._clientFail = value;
  }
  public resetClientFail() {
    this._clientFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientFailInput() {
    return this._clientFail;
  }

  // client_select_fail - computed: false, optional: true, required: false
  private _clientSelectFail?: number; 
  public get clientSelectFail() {
    return this.getNumberAttribute('client_select_fail');
  }
  public set clientSelectFail(value: number) {
    this._clientSelectFail = value;
  }
  public resetClientSelectFail() {
    this._clientSelectFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSelectFailInput() {
    return this._clientSelectFail;
  }

  // dcmsg_error - computed: false, optional: true, required: false
  private _dcmsgError?: number; 
  public get dcmsgError() {
    return this.getNumberAttribute('dcmsg_error');
  }
  public set dcmsgError(value: number) {
    this._dcmsgError = value;
  }
  public resetDcmsgError() {
    this._dcmsgError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcmsgErrorInput() {
    return this._dcmsgError;
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

  // invalid_avp - computed: false, optional: true, required: false
  private _invalidAvp?: number; 
  public get invalidAvp() {
    return this.getNumberAttribute('invalid_avp');
  }
  public set invalidAvp(value: number) {
    this._invalidAvp = value;
  }
  public resetInvalidAvp() {
    this._invalidAvp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidAvpInput() {
    return this._invalidAvp;
  }

  // mismatch_fwd_id - computed: false, optional: true, required: false
  private _mismatchFwdId?: number; 
  public get mismatchFwdId() {
    return this.getNumberAttribute('mismatch_fwd_id');
  }
  public set mismatchFwdId(value: number) {
    this._mismatchFwdId = value;
  }
  public resetMismatchFwdId() {
    this._mismatchFwdId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchFwdIdInput() {
    return this._mismatchFwdId;
  }

  // mismatch_rev_id - computed: false, optional: true, required: false
  private _mismatchRevId?: number; 
  public get mismatchRevId() {
    return this.getNumberAttribute('mismatch_rev_id');
  }
  public set mismatchRevId(value: number) {
    this._mismatchRevId = value;
  }
  public resetMismatchRevId() {
    this._mismatchRevId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchRevIdInput() {
    return this._mismatchRevId;
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

  // no_fwd_tuple - computed: false, optional: true, required: false
  private _noFwdTuple?: number; 
  public get noFwdTuple() {
    return this.getNumberAttribute('no_fwd_tuple');
  }
  public set noFwdTuple(value: number) {
    this._noFwdTuple = value;
  }
  public resetNoFwdTuple() {
    this._noFwdTuple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noFwdTupleInput() {
    return this._noFwdTuple;
  }

  // no_rev_tuple - computed: false, optional: true, required: false
  private _noRevTuple?: number; 
  public get noRevTuple() {
    return this.getNumberAttribute('no_rev_tuple');
  }
  public set noRevTuple(value: number) {
    this._noRevTuple = value;
  }
  public resetNoRevTuple() {
    this._noRevTuple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRevTupleInput() {
    return this._noRevTuple;
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

  // no_session_id - computed: false, optional: true, required: false
  private _noSessionId?: number; 
  public get noSessionId() {
    return this.getNumberAttribute('no_session_id');
  }
  public set noSessionId(value: number) {
    this._noSessionId = value;
  }
  public resetNoSessionId() {
    this._noSessionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSessionIdInput() {
    return this._noSessionId;
  }

  // reply_error_info_fail - computed: false, optional: true, required: false
  private _replyErrorInfoFail?: number; 
  public get replyErrorInfoFail() {
    return this.getNumberAttribute('reply_error_info_fail');
  }
  public set replyErrorInfoFail(value: number) {
    this._replyErrorInfoFail = value;
  }
  public resetReplyErrorInfoFail() {
    this._replyErrorInfoFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyErrorInfoFailInput() {
    return this._replyErrorInfoFail;
  }

  // reply_unknown_session_id - computed: false, optional: true, required: false
  private _replyUnknownSessionId?: number; 
  public get replyUnknownSessionId() {
    return this.getNumberAttribute('reply_unknown_session_id');
  }
  public set replyUnknownSessionId(value: number) {
    this._replyUnknownSessionId = value;
  }
  public resetReplyUnknownSessionId() {
    this._replyUnknownSessionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyUnknownSessionIdInput() {
    return this._replyUnknownSessionId;
  }

  // retry_client_request_fail - computed: false, optional: true, required: false
  private _retryClientRequestFail?: number; 
  public get retryClientRequestFail() {
    return this.getNumberAttribute('retry_client_request_fail');
  }
  public set retryClientRequestFail(value: number) {
    this._retryClientRequestFail = value;
  }
  public resetRetryClientRequestFail() {
    this._retryClientRequestFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryClientRequestFailInput() {
    return this._retryClientRequestFail;
  }

  // server_fail - computed: false, optional: true, required: false
  private _serverFail?: number; 
  public get serverFail() {
    return this.getNumberAttribute('server_fail');
  }
  public set serverFail(value: number) {
    this._serverFail = value;
  }
  public resetServerFail() {
    this._serverFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverFailInput() {
    return this._serverFail;
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

  // unkwn_cmd_code - computed: false, optional: true, required: false
  private _unkwnCmdCode?: number; 
  public get unkwnCmdCode() {
    return this.getNumberAttribute('unkwn_cmd_code');
  }
  public set unkwnCmdCode(value: number) {
    this._unkwnCmdCode = value;
  }
  public resetUnkwnCmdCode() {
    this._unkwnCmdCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unkwnCmdCodeInput() {
    return this._unkwnCmdCode;
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
      client_fail: cdktf.numberToTerraform(this._clientFail),
      client_select_fail: cdktf.numberToTerraform(this._clientSelectFail),
      dcmsg_error: cdktf.numberToTerraform(this._dcmsgError),
      id: cdktf.stringToTerraform(this._id),
      invalid_avp: cdktf.numberToTerraform(this._invalidAvp),
      mismatch_fwd_id: cdktf.numberToTerraform(this._mismatchFwdId),
      mismatch_rev_id: cdktf.numberToTerraform(this._mismatchRevId),
      name: cdktf.stringToTerraform(this._name),
      no_fwd_tuple: cdktf.numberToTerraform(this._noFwdTuple),
      no_rev_tuple: cdktf.numberToTerraform(this._noRevTuple),
      no_route: cdktf.numberToTerraform(this._noRoute),
      no_session_id: cdktf.numberToTerraform(this._noSessionId),
      reply_error_info_fail: cdktf.numberToTerraform(this._replyErrorInfoFail),
      reply_unknown_session_id: cdktf.numberToTerraform(this._replyUnknownSessionId),
      retry_client_request_fail: cdktf.numberToTerraform(this._retryClientRequestFail),
      server_fail: cdktf.numberToTerraform(this._serverFail),
      snat_fail: cdktf.numberToTerraform(this._snatFail),
      svrsel_fail: cdktf.numberToTerraform(this._svrselFail),
      unkwn_cmd_code: cdktf.numberToTerraform(this._unkwnCmdCode),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_fail: {
        value: cdktf.numberToHclTerraform(this._clientFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_select_fail: {
        value: cdktf.numberToHclTerraform(this._clientSelectFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dcmsg_error: {
        value: cdktf.numberToHclTerraform(this._dcmsgError),
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
      invalid_avp: {
        value: cdktf.numberToHclTerraform(this._invalidAvp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mismatch_fwd_id: {
        value: cdktf.numberToHclTerraform(this._mismatchFwdId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mismatch_rev_id: {
        value: cdktf.numberToHclTerraform(this._mismatchRevId),
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
      no_fwd_tuple: {
        value: cdktf.numberToHclTerraform(this._noFwdTuple),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_rev_tuple: {
        value: cdktf.numberToHclTerraform(this._noRevTuple),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_route: {
        value: cdktf.numberToHclTerraform(this._noRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_session_id: {
        value: cdktf.numberToHclTerraform(this._noSessionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reply_error_info_fail: {
        value: cdktf.numberToHclTerraform(this._replyErrorInfoFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reply_unknown_session_id: {
        value: cdktf.numberToHclTerraform(this._replyUnknownSessionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_client_request_fail: {
        value: cdktf.numberToHclTerraform(this._retryClientRequestFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_fail: {
        value: cdktf.numberToHclTerraform(this._serverFail),
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
      unkwn_cmd_code: {
        value: cdktf.numberToHclTerraform(this._unkwnCmdCode),
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
