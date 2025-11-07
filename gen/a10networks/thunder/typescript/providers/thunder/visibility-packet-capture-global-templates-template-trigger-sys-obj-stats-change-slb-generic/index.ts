// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for Number of client failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#client_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#client_fail}
  */
  readonly clientFail?: number;
  /**
  * Enable automatic packet-capture for Fail to select client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#client_select_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#client_select_fail}
  */
  readonly clientSelectFail?: number;
  /**
  * Enable automatic packet-capture for Diameter cross cpu error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#dcmsg_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#dcmsg_error}
  */
  readonly dcmsgError?: number;
  /**
  * Enable automatic packet-capture for AVP value contains illegal chars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#invalid_avp VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#invalid_avp}
  */
  readonly invalidAvp?: number;
  /**
  * Enable automatic packet-capture for Diameter mismatch fwd session id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#mismatch_fwd_id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#mismatch_fwd_id}
  */
  readonly mismatchFwdId?: number;
  /**
  * Enable automatic packet-capture for Diameter mismatch rev session id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#mismatch_rev_id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#mismatch_rev_id}
  */
  readonly mismatchRevId?: number;
  /**
  * Enable automatic packet-capture for Diameter no fwd tuple matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#no_fwd_tuple VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#no_fwd_tuple}
  */
  readonly noFwdTuple?: number;
  /**
  * Enable automatic packet-capture for Diameter no rev tuple matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#no_rev_tuple VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#no_rev_tuple}
  */
  readonly noRevTuple?: number;
  /**
  * Enable automatic packet-capture for Number of no routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#no_route VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#no_route}
  */
  readonly noRoute?: number;
  /**
  * Enable automatic packet-capture for Diameter no session id avp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#no_session_id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#no_session_id}
  */
  readonly noSessionId?: number;
  /**
  * Enable automatic packet-capture for Fail to reply error info to peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#reply_error_info_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#reply_error_info_fail}
  */
  readonly replyErrorInfoFail?: number;
  /**
  * Enable automatic packet-capture for Reply with unknown session ID error info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#reply_unknown_session_id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#reply_unknown_session_id}
  */
  readonly replyUnknownSessionId?: number;
  /**
  * Enable automatic packet-capture for Diameter retry client request fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#retry_client_request_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#retry_client_request_fail}
  */
  readonly retryClientRequestFail?: number;
  /**
  * Enable automatic packet-capture for Number of server failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#server_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#server_fail}
  */
  readonly serverFail?: number;
  /**
  * Enable automatic packet-capture for Number of snat failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#snat_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Enable automatic packet-capture for Number of server selection failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#svrsel_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#svrsel_fail}
  */
  readonly svrselFail?: number;
  /**
  * Enable automatic packet-capture for Diameter unkown cmd code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#unkwn_cmd_code VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#unkwn_cmd_code}
  */
  readonly unkwnCmdCode?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_fail: cdktf.numberToTerraform(struct!.clientFail),
    client_select_fail: cdktf.numberToTerraform(struct!.clientSelectFail),
    dcmsg_error: cdktf.numberToTerraform(struct!.dcmsgError),
    invalid_avp: cdktf.numberToTerraform(struct!.invalidAvp),
    mismatch_fwd_id: cdktf.numberToTerraform(struct!.mismatchFwdId),
    mismatch_rev_id: cdktf.numberToTerraform(struct!.mismatchRevId),
    no_fwd_tuple: cdktf.numberToTerraform(struct!.noFwdTuple),
    no_rev_tuple: cdktf.numberToTerraform(struct!.noRevTuple),
    no_route: cdktf.numberToTerraform(struct!.noRoute),
    no_session_id: cdktf.numberToTerraform(struct!.noSessionId),
    reply_error_info_fail: cdktf.numberToTerraform(struct!.replyErrorInfoFail),
    reply_unknown_session_id: cdktf.numberToTerraform(struct!.replyUnknownSessionId),
    retry_client_request_fail: cdktf.numberToTerraform(struct!.retryClientRequestFail),
    server_fail: cdktf.numberToTerraform(struct!.serverFail),
    snat_fail: cdktf.numberToTerraform(struct!.snatFail),
    svrsel_fail: cdktf.numberToTerraform(struct!.svrselFail),
    unkwn_cmd_code: cdktf.numberToTerraform(struct!.unkwnCmdCode),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_fail: {
      value: cdktf.numberToHclTerraform(struct!.clientFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_select_fail: {
      value: cdktf.numberToHclTerraform(struct!.clientSelectFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dcmsg_error: {
      value: cdktf.numberToHclTerraform(struct!.dcmsgError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    invalid_avp: {
      value: cdktf.numberToHclTerraform(struct!.invalidAvp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mismatch_fwd_id: {
      value: cdktf.numberToHclTerraform(struct!.mismatchFwdId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mismatch_rev_id: {
      value: cdktf.numberToHclTerraform(struct!.mismatchRevId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_fwd_tuple: {
      value: cdktf.numberToHclTerraform(struct!.noFwdTuple),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_rev_tuple: {
      value: cdktf.numberToHclTerraform(struct!.noRevTuple),
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
    no_session_id: {
      value: cdktf.numberToHclTerraform(struct!.noSessionId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reply_error_info_fail: {
      value: cdktf.numberToHclTerraform(struct!.replyErrorInfoFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reply_unknown_session_id: {
      value: cdktf.numberToHclTerraform(struct!.replyUnknownSessionId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_client_request_fail: {
      value: cdktf.numberToHclTerraform(struct!.retryClientRequestFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_fail: {
      value: cdktf.numberToHclTerraform(struct!.serverFail),
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
    unkwn_cmd_code: {
      value: cdktf.numberToHclTerraform(struct!.unkwnCmdCode),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientFail = this._clientFail;
    }
    if (this._clientSelectFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSelectFail = this._clientSelectFail;
    }
    if (this._dcmsgError !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcmsgError = this._dcmsgError;
    }
    if (this._invalidAvp !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidAvp = this._invalidAvp;
    }
    if (this._mismatchFwdId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchFwdId = this._mismatchFwdId;
    }
    if (this._mismatchRevId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchRevId = this._mismatchRevId;
    }
    if (this._noFwdTuple !== undefined) {
      hasAnyValues = true;
      internalValueResult.noFwdTuple = this._noFwdTuple;
    }
    if (this._noRevTuple !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRevTuple = this._noRevTuple;
    }
    if (this._noRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRoute = this._noRoute;
    }
    if (this._noSessionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSessionId = this._noSessionId;
    }
    if (this._replyErrorInfoFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.replyErrorInfoFail = this._replyErrorInfoFail;
    }
    if (this._replyUnknownSessionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.replyUnknownSessionId = this._replyUnknownSessionId;
    }
    if (this._retryClientRequestFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryClientRequestFail = this._retryClientRequestFail;
    }
    if (this._serverFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverFail = this._serverFail;
    }
    if (this._snatFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatFail = this._snatFail;
    }
    if (this._svrselFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.svrselFail = this._svrselFail;
    }
    if (this._unkwnCmdCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.unkwnCmdCode = this._unkwnCmdCode;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientFail = undefined;
      this._clientSelectFail = undefined;
      this._dcmsgError = undefined;
      this._invalidAvp = undefined;
      this._mismatchFwdId = undefined;
      this._mismatchRevId = undefined;
      this._noFwdTuple = undefined;
      this._noRevTuple = undefined;
      this._noRoute = undefined;
      this._noSessionId = undefined;
      this._replyErrorInfoFail = undefined;
      this._replyUnknownSessionId = undefined;
      this._retryClientRequestFail = undefined;
      this._serverFail = undefined;
      this._snatFail = undefined;
      this._svrselFail = undefined;
      this._unkwnCmdCode = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientFail = value.clientFail;
      this._clientSelectFail = value.clientSelectFail;
      this._dcmsgError = value.dcmsgError;
      this._invalidAvp = value.invalidAvp;
      this._mismatchFwdId = value.mismatchFwdId;
      this._mismatchRevId = value.mismatchRevId;
      this._noFwdTuple = value.noFwdTuple;
      this._noRevTuple = value.noRevTuple;
      this._noRoute = value.noRoute;
      this._noSessionId = value.noSessionId;
      this._replyErrorInfoFail = value.replyErrorInfoFail;
      this._replyUnknownSessionId = value.replyUnknownSessionId;
      this._retryClientRequestFail = value.retryClientRequestFail;
      this._serverFail = value.serverFail;
      this._snatFail = value.snatFail;
      this._svrselFail = value.svrselFail;
      this._unkwnCmdCode = value.unkwnCmdCode;
      this._uuid = value.uuid;
    }
  }

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
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsRateA {
  /**
  * Enable automatic packet-capture for Number of client failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#client_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#client_fail}
  */
  readonly clientFail?: number;
  /**
  * Enable automatic packet-capture for Fail to select client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#client_select_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#client_select_fail}
  */
  readonly clientSelectFail?: number;
  /**
  * Enable automatic packet-capture for Diameter cross cpu error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#dcmsg_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#dcmsg_error}
  */
  readonly dcmsgError?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for AVP value contains illegal chars
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#invalid_avp VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#invalid_avp}
  */
  readonly invalidAvp?: number;
  /**
  * Enable automatic packet-capture for Diameter mismatch fwd session id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#mismatch_fwd_id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#mismatch_fwd_id}
  */
  readonly mismatchFwdId?: number;
  /**
  * Enable automatic packet-capture for Diameter mismatch rev session id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#mismatch_rev_id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#mismatch_rev_id}
  */
  readonly mismatchRevId?: number;
  /**
  * Enable automatic packet-capture for Diameter no fwd tuple matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#no_fwd_tuple VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#no_fwd_tuple}
  */
  readonly noFwdTuple?: number;
  /**
  * Enable automatic packet-capture for Diameter no rev tuple matched
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#no_rev_tuple VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#no_rev_tuple}
  */
  readonly noRevTuple?: number;
  /**
  * Enable automatic packet-capture for Number of no routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#no_route VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#no_route}
  */
  readonly noRoute?: number;
  /**
  * Enable automatic packet-capture for Diameter no session id avp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#no_session_id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#no_session_id}
  */
  readonly noSessionId?: number;
  /**
  * Enable automatic packet-capture for Fail to reply error info to peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#reply_error_info_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#reply_error_info_fail}
  */
  readonly replyErrorInfoFail?: number;
  /**
  * Enable automatic packet-capture for Reply with unknown session ID error info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#reply_unknown_session_id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#reply_unknown_session_id}
  */
  readonly replyUnknownSessionId?: number;
  /**
  * Enable automatic packet-capture for Diameter retry client request fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#retry_client_request_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#retry_client_request_fail}
  */
  readonly retryClientRequestFail?: number;
  /**
  * Enable automatic packet-capture for Number of server failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#server_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#server_fail}
  */
  readonly serverFail?: number;
  /**
  * Enable automatic packet-capture for Number of snat failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#snat_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Enable automatic packet-capture for Number of server selection failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#svrsel_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#svrsel_fail}
  */
  readonly svrselFail?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for Diameter unkown cmd code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#unkwn_cmd_code VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#unkwn_cmd_code}
  */
  readonly unkwnCmdCode?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_fail: cdktf.numberToTerraform(struct!.clientFail),
    client_select_fail: cdktf.numberToTerraform(struct!.clientSelectFail),
    dcmsg_error: cdktf.numberToTerraform(struct!.dcmsgError),
    duration: cdktf.numberToTerraform(struct!.duration),
    invalid_avp: cdktf.numberToTerraform(struct!.invalidAvp),
    mismatch_fwd_id: cdktf.numberToTerraform(struct!.mismatchFwdId),
    mismatch_rev_id: cdktf.numberToTerraform(struct!.mismatchRevId),
    no_fwd_tuple: cdktf.numberToTerraform(struct!.noFwdTuple),
    no_rev_tuple: cdktf.numberToTerraform(struct!.noRevTuple),
    no_route: cdktf.numberToTerraform(struct!.noRoute),
    no_session_id: cdktf.numberToTerraform(struct!.noSessionId),
    reply_error_info_fail: cdktf.numberToTerraform(struct!.replyErrorInfoFail),
    reply_unknown_session_id: cdktf.numberToTerraform(struct!.replyUnknownSessionId),
    retry_client_request_fail: cdktf.numberToTerraform(struct!.retryClientRequestFail),
    server_fail: cdktf.numberToTerraform(struct!.serverFail),
    snat_fail: cdktf.numberToTerraform(struct!.snatFail),
    svrsel_fail: cdktf.numberToTerraform(struct!.svrselFail),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    unkwn_cmd_code: cdktf.numberToTerraform(struct!.unkwnCmdCode),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_fail: {
      value: cdktf.numberToHclTerraform(struct!.clientFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_select_fail: {
      value: cdktf.numberToHclTerraform(struct!.clientSelectFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dcmsg_error: {
      value: cdktf.numberToHclTerraform(struct!.dcmsgError),
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
    invalid_avp: {
      value: cdktf.numberToHclTerraform(struct!.invalidAvp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mismatch_fwd_id: {
      value: cdktf.numberToHclTerraform(struct!.mismatchFwdId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mismatch_rev_id: {
      value: cdktf.numberToHclTerraform(struct!.mismatchRevId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_fwd_tuple: {
      value: cdktf.numberToHclTerraform(struct!.noFwdTuple),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_rev_tuple: {
      value: cdktf.numberToHclTerraform(struct!.noRevTuple),
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
    no_session_id: {
      value: cdktf.numberToHclTerraform(struct!.noSessionId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reply_error_info_fail: {
      value: cdktf.numberToHclTerraform(struct!.replyErrorInfoFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reply_unknown_session_id: {
      value: cdktf.numberToHclTerraform(struct!.replyUnknownSessionId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_client_request_fail: {
      value: cdktf.numberToHclTerraform(struct!.retryClientRequestFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_fail: {
      value: cdktf.numberToHclTerraform(struct!.serverFail),
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
    unkwn_cmd_code: {
      value: cdktf.numberToHclTerraform(struct!.unkwnCmdCode),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientFail = this._clientFail;
    }
    if (this._clientSelectFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSelectFail = this._clientSelectFail;
    }
    if (this._dcmsgError !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcmsgError = this._dcmsgError;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._invalidAvp !== undefined) {
      hasAnyValues = true;
      internalValueResult.invalidAvp = this._invalidAvp;
    }
    if (this._mismatchFwdId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchFwdId = this._mismatchFwdId;
    }
    if (this._mismatchRevId !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchRevId = this._mismatchRevId;
    }
    if (this._noFwdTuple !== undefined) {
      hasAnyValues = true;
      internalValueResult.noFwdTuple = this._noFwdTuple;
    }
    if (this._noRevTuple !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRevTuple = this._noRevTuple;
    }
    if (this._noRoute !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRoute = this._noRoute;
    }
    if (this._noSessionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSessionId = this._noSessionId;
    }
    if (this._replyErrorInfoFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.replyErrorInfoFail = this._replyErrorInfoFail;
    }
    if (this._replyUnknownSessionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.replyUnknownSessionId = this._replyUnknownSessionId;
    }
    if (this._retryClientRequestFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryClientRequestFail = this._retryClientRequestFail;
    }
    if (this._serverFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverFail = this._serverFail;
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
    if (this._unkwnCmdCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.unkwnCmdCode = this._unkwnCmdCode;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientFail = undefined;
      this._clientSelectFail = undefined;
      this._dcmsgError = undefined;
      this._duration = undefined;
      this._invalidAvp = undefined;
      this._mismatchFwdId = undefined;
      this._mismatchRevId = undefined;
      this._noFwdTuple = undefined;
      this._noRevTuple = undefined;
      this._noRoute = undefined;
      this._noSessionId = undefined;
      this._replyErrorInfoFail = undefined;
      this._replyUnknownSessionId = undefined;
      this._retryClientRequestFail = undefined;
      this._serverFail = undefined;
      this._snatFail = undefined;
      this._svrselFail = undefined;
      this._thresholdExceededBy = undefined;
      this._unkwnCmdCode = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientFail = value.clientFail;
      this._clientSelectFail = value.clientSelectFail;
      this._dcmsgError = value.dcmsgError;
      this._duration = value.duration;
      this._invalidAvp = value.invalidAvp;
      this._mismatchFwdId = value.mismatchFwdId;
      this._mismatchRevId = value.mismatchRevId;
      this._noFwdTuple = value.noFwdTuple;
      this._noRevTuple = value.noRevTuple;
      this._noRoute = value.noRoute;
      this._noSessionId = value.noSessionId;
      this._replyErrorInfoFail = value.replyErrorInfoFail;
      this._replyUnknownSessionId = value.replyUnknownSessionId;
      this._retryClientRequestFail = value.retryClientRequestFail;
      this._serverFail = value.serverFail;
      this._snatFail = value.snatFail;
      this._svrselFail = value.svrselFail;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._unkwnCmdCode = value.unkwnCmdCode;
      this._uuid = value.uuid;
    }
  }

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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_generic',
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
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsRateA) {
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
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbGenericTriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
