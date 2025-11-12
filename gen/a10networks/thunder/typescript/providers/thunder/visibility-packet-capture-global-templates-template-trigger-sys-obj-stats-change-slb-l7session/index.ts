// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for Conn does not exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session#conn_not_exist VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionA#conn_not_exist}
  */
  readonly connNotExist?: number;
  /**
  * Enable automatic packet-capture for Data event callback fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session#data_cb_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionA#data_cb_failed}
  */
  readonly dataCbFailed?: number;
  /**
  * Enable automatic packet-capture for Err event callback failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session#err_cb_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionA#err_cb_failed}
  */
  readonly errCbFailed?: number;
  /**
  * Enable automatic packet-capture for Err event from TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session#err_event VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionA#err_event}
  */
  readonly errEvent?: number;
  /**
  * Enable automatic packet-capture for Fwd req fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session#hps_fwdreq_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionA#hps_fwdreq_fail}
  */
  readonly hpsFwdreqFail?: number;
  /**
  * Enable automatic packet-capture for Server connection failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session#server_conn_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionA#server_conn_failed}
  */
  readonly serverConnFailed?: number;
  /**
  * Enable automatic packet-capture for Server selection fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session#server_select_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionA#server_select_fail}
  */
  readonly serverSelectFail?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionA#uuid}
  */
  readonly uuid?: string;
  /**
  * Enable automatic packet-capture for Wbuf event callback failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session#wbuf_cb_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionA#wbuf_cb_failed}
  */
  readonly wbufCbFailed?: number;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conn_not_exist: cdktf.numberToTerraform(struct!.connNotExist),
    data_cb_failed: cdktf.numberToTerraform(struct!.dataCbFailed),
    err_cb_failed: cdktf.numberToTerraform(struct!.errCbFailed),
    err_event: cdktf.numberToTerraform(struct!.errEvent),
    hps_fwdreq_fail: cdktf.numberToTerraform(struct!.hpsFwdreqFail),
    server_conn_failed: cdktf.numberToTerraform(struct!.serverConnFailed),
    server_select_fail: cdktf.numberToTerraform(struct!.serverSelectFail),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    wbuf_cb_failed: cdktf.numberToTerraform(struct!.wbufCbFailed),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conn_not_exist: {
      value: cdktf.numberToHclTerraform(struct!.connNotExist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_cb_failed: {
      value: cdktf.numberToHclTerraform(struct!.dataCbFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_cb_failed: {
      value: cdktf.numberToHclTerraform(struct!.errCbFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_event: {
      value: cdktf.numberToHclTerraform(struct!.errEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_fwdreq_fail: {
      value: cdktf.numberToHclTerraform(struct!.hpsFwdreqFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_conn_failed: {
      value: cdktf.numberToHclTerraform(struct!.serverConnFailed),
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
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wbuf_cb_failed: {
      value: cdktf.numberToHclTerraform(struct!.wbufCbFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connNotExist !== undefined) {
      hasAnyValues = true;
      internalValueResult.connNotExist = this._connNotExist;
    }
    if (this._dataCbFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCbFailed = this._dataCbFailed;
    }
    if (this._errCbFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errCbFailed = this._errCbFailed;
    }
    if (this._errEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.errEvent = this._errEvent;
    }
    if (this._hpsFwdreqFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsFwdreqFail = this._hpsFwdreqFail;
    }
    if (this._serverConnFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverConnFailed = this._serverConnFailed;
    }
    if (this._serverSelectFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSelectFail = this._serverSelectFail;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._wbufCbFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.wbufCbFailed = this._wbufCbFailed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connNotExist = undefined;
      this._dataCbFailed = undefined;
      this._errCbFailed = undefined;
      this._errEvent = undefined;
      this._hpsFwdreqFail = undefined;
      this._serverConnFailed = undefined;
      this._serverSelectFail = undefined;
      this._uuid = undefined;
      this._wbufCbFailed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connNotExist = value.connNotExist;
      this._dataCbFailed = value.dataCbFailed;
      this._errCbFailed = value.errCbFailed;
      this._errEvent = value.errEvent;
      this._hpsFwdreqFail = value.hpsFwdreqFail;
      this._serverConnFailed = value.serverConnFailed;
      this._serverSelectFail = value.serverSelectFail;
      this._uuid = value.uuid;
      this._wbufCbFailed = value.wbufCbFailed;
    }
  }

  // conn_not_exist - computed: false, optional: true, required: false
  private _connNotExist?: number; 
  public get connNotExist() {
    return this.getNumberAttribute('conn_not_exist');
  }
  public set connNotExist(value: number) {
    this._connNotExist = value;
  }
  public resetConnNotExist() {
    this._connNotExist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connNotExistInput() {
    return this._connNotExist;
  }

  // data_cb_failed - computed: false, optional: true, required: false
  private _dataCbFailed?: number; 
  public get dataCbFailed() {
    return this.getNumberAttribute('data_cb_failed');
  }
  public set dataCbFailed(value: number) {
    this._dataCbFailed = value;
  }
  public resetDataCbFailed() {
    this._dataCbFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCbFailedInput() {
    return this._dataCbFailed;
  }

  // err_cb_failed - computed: false, optional: true, required: false
  private _errCbFailed?: number; 
  public get errCbFailed() {
    return this.getNumberAttribute('err_cb_failed');
  }
  public set errCbFailed(value: number) {
    this._errCbFailed = value;
  }
  public resetErrCbFailed() {
    this._errCbFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errCbFailedInput() {
    return this._errCbFailed;
  }

  // err_event - computed: false, optional: true, required: false
  private _errEvent?: number; 
  public get errEvent() {
    return this.getNumberAttribute('err_event');
  }
  public set errEvent(value: number) {
    this._errEvent = value;
  }
  public resetErrEvent() {
    this._errEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errEventInput() {
    return this._errEvent;
  }

  // hps_fwdreq_fail - computed: false, optional: true, required: false
  private _hpsFwdreqFail?: number; 
  public get hpsFwdreqFail() {
    return this.getNumberAttribute('hps_fwdreq_fail');
  }
  public set hpsFwdreqFail(value: number) {
    this._hpsFwdreqFail = value;
  }
  public resetHpsFwdreqFail() {
    this._hpsFwdreqFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsFwdreqFailInput() {
    return this._hpsFwdreqFail;
  }

  // server_conn_failed - computed: false, optional: true, required: false
  private _serverConnFailed?: number; 
  public get serverConnFailed() {
    return this.getNumberAttribute('server_conn_failed');
  }
  public set serverConnFailed(value: number) {
    this._serverConnFailed = value;
  }
  public resetServerConnFailed() {
    this._serverConnFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConnFailedInput() {
    return this._serverConnFailed;
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

  // wbuf_cb_failed - computed: false, optional: true, required: false
  private _wbufCbFailed?: number; 
  public get wbufCbFailed() {
    return this.getNumberAttribute('wbuf_cb_failed');
  }
  public set wbufCbFailed(value: number) {
    this._wbufCbFailed = value;
  }
  public resetWbufCbFailed() {
    this._wbufCbFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wbufCbFailedInput() {
    return this._wbufCbFailed;
  }
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateA {
  /**
  * Enable automatic packet-capture for Conn does not exist
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session#conn_not_exist VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionA#conn_not_exist}
  */
  readonly connNotExist?: number;
  /**
  * Enable automatic packet-capture for Data event callback fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session#data_cb_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionA#data_cb_failed}
  */
  readonly dataCbFailed?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Err event callback failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session#err_cb_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionA#err_cb_failed}
  */
  readonly errCbFailed?: number;
  /**
  * Enable automatic packet-capture for Err event from TCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session#err_event VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionA#err_event}
  */
  readonly errEvent?: number;
  /**
  * Enable automatic packet-capture for Fwd req fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session#hps_fwdreq_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionA#hps_fwdreq_fail}
  */
  readonly hpsFwdreqFail?: number;
  /**
  * Enable automatic packet-capture for Server connection failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session#server_conn_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionA#server_conn_failed}
  */
  readonly serverConnFailed?: number;
  /**
  * Enable automatic packet-capture for Server selection fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session#server_select_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionA#server_select_fail}
  */
  readonly serverSelectFail?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionA#uuid}
  */
  readonly uuid?: string;
  /**
  * Enable automatic packet-capture for Wbuf event callback failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session#wbuf_cb_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionA#wbuf_cb_failed}
  */
  readonly wbufCbFailed?: number;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conn_not_exist: cdktf.numberToTerraform(struct!.connNotExist),
    data_cb_failed: cdktf.numberToTerraform(struct!.dataCbFailed),
    duration: cdktf.numberToTerraform(struct!.duration),
    err_cb_failed: cdktf.numberToTerraform(struct!.errCbFailed),
    err_event: cdktf.numberToTerraform(struct!.errEvent),
    hps_fwdreq_fail: cdktf.numberToTerraform(struct!.hpsFwdreqFail),
    server_conn_failed: cdktf.numberToTerraform(struct!.serverConnFailed),
    server_select_fail: cdktf.numberToTerraform(struct!.serverSelectFail),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    wbuf_cb_failed: cdktf.numberToTerraform(struct!.wbufCbFailed),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conn_not_exist: {
      value: cdktf.numberToHclTerraform(struct!.connNotExist),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_cb_failed: {
      value: cdktf.numberToHclTerraform(struct!.dataCbFailed),
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
    err_cb_failed: {
      value: cdktf.numberToHclTerraform(struct!.errCbFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_event: {
      value: cdktf.numberToHclTerraform(struct!.errEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hps_fwdreq_fail: {
      value: cdktf.numberToHclTerraform(struct!.hpsFwdreqFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_conn_failed: {
      value: cdktf.numberToHclTerraform(struct!.serverConnFailed),
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
    wbuf_cb_failed: {
      value: cdktf.numberToHclTerraform(struct!.wbufCbFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connNotExist !== undefined) {
      hasAnyValues = true;
      internalValueResult.connNotExist = this._connNotExist;
    }
    if (this._dataCbFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataCbFailed = this._dataCbFailed;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._errCbFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errCbFailed = this._errCbFailed;
    }
    if (this._errEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.errEvent = this._errEvent;
    }
    if (this._hpsFwdreqFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.hpsFwdreqFail = this._hpsFwdreqFail;
    }
    if (this._serverConnFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverConnFailed = this._serverConnFailed;
    }
    if (this._serverSelectFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverSelectFail = this._serverSelectFail;
    }
    if (this._thresholdExceededBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdExceededBy = this._thresholdExceededBy;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._wbufCbFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.wbufCbFailed = this._wbufCbFailed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connNotExist = undefined;
      this._dataCbFailed = undefined;
      this._duration = undefined;
      this._errCbFailed = undefined;
      this._errEvent = undefined;
      this._hpsFwdreqFail = undefined;
      this._serverConnFailed = undefined;
      this._serverSelectFail = undefined;
      this._thresholdExceededBy = undefined;
      this._uuid = undefined;
      this._wbufCbFailed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connNotExist = value.connNotExist;
      this._dataCbFailed = value.dataCbFailed;
      this._duration = value.duration;
      this._errCbFailed = value.errCbFailed;
      this._errEvent = value.errEvent;
      this._hpsFwdreqFail = value.hpsFwdreqFail;
      this._serverConnFailed = value.serverConnFailed;
      this._serverSelectFail = value.serverSelectFail;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._uuid = value.uuid;
      this._wbufCbFailed = value.wbufCbFailed;
    }
  }

  // conn_not_exist - computed: false, optional: true, required: false
  private _connNotExist?: number; 
  public get connNotExist() {
    return this.getNumberAttribute('conn_not_exist');
  }
  public set connNotExist(value: number) {
    this._connNotExist = value;
  }
  public resetConnNotExist() {
    this._connNotExist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connNotExistInput() {
    return this._connNotExist;
  }

  // data_cb_failed - computed: false, optional: true, required: false
  private _dataCbFailed?: number; 
  public get dataCbFailed() {
    return this.getNumberAttribute('data_cb_failed');
  }
  public set dataCbFailed(value: number) {
    this._dataCbFailed = value;
  }
  public resetDataCbFailed() {
    this._dataCbFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataCbFailedInput() {
    return this._dataCbFailed;
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

  // err_cb_failed - computed: false, optional: true, required: false
  private _errCbFailed?: number; 
  public get errCbFailed() {
    return this.getNumberAttribute('err_cb_failed');
  }
  public set errCbFailed(value: number) {
    this._errCbFailed = value;
  }
  public resetErrCbFailed() {
    this._errCbFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errCbFailedInput() {
    return this._errCbFailed;
  }

  // err_event - computed: false, optional: true, required: false
  private _errEvent?: number; 
  public get errEvent() {
    return this.getNumberAttribute('err_event');
  }
  public set errEvent(value: number) {
    this._errEvent = value;
  }
  public resetErrEvent() {
    this._errEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errEventInput() {
    return this._errEvent;
  }

  // hps_fwdreq_fail - computed: false, optional: true, required: false
  private _hpsFwdreqFail?: number; 
  public get hpsFwdreqFail() {
    return this.getNumberAttribute('hps_fwdreq_fail');
  }
  public set hpsFwdreqFail(value: number) {
    this._hpsFwdreqFail = value;
  }
  public resetHpsFwdreqFail() {
    this._hpsFwdreqFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hpsFwdreqFailInput() {
    return this._hpsFwdreqFail;
  }

  // server_conn_failed - computed: false, optional: true, required: false
  private _serverConnFailed?: number; 
  public get serverConnFailed() {
    return this.getNumberAttribute('server_conn_failed');
  }
  public set serverConnFailed(value: number) {
    this._serverConnFailed = value;
  }
  public resetServerConnFailed() {
    this._serverConnFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverConnFailedInput() {
    return this._serverConnFailed;
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

  // wbuf_cb_failed - computed: false, optional: true, required: false
  private _wbufCbFailed?: number; 
  public get wbufCbFailed() {
    return this.getNumberAttribute('wbuf_cb_failed');
  }
  public set wbufCbFailed(value: number) {
    this._wbufCbFailed = value;
  }
  public resetWbufCbFailed() {
    this._wbufCbFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wbufCbFailedInput() {
    return this._wbufCbFailed;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_l7session',
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
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateA) {
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
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbL7SessionTriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
