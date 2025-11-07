// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fix
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fix#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fix#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fix#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fix#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fix#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for Client fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fix#client_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixA#client_err}
  */
  readonly clientErr?: number;
  /**
  * Enable automatic packet-capture for No route failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fix#noroute VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixA#noroute}
  */
  readonly noroute?: number;
  /**
  * Enable automatic packet-capture for Server fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fix#server_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixA#server_err}
  */
  readonly serverErr?: number;
  /**
  * Enable automatic packet-capture for Source NAT failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fix#snat_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixA#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Enable automatic packet-capture for Server selection failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fix#svrsel_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixA#svrsel_fail}
  */
  readonly svrselFail?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fix#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_err: cdktf.numberToTerraform(struct!.clientErr),
    noroute: cdktf.numberToTerraform(struct!.noroute),
    server_err: cdktf.numberToTerraform(struct!.serverErr),
    snat_fail: cdktf.numberToTerraform(struct!.snatFail),
    svrsel_fail: cdktf.numberToTerraform(struct!.svrselFail),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_err: {
      value: cdktf.numberToHclTerraform(struct!.clientErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    noroute: {
      value: cdktf.numberToHclTerraform(struct!.noroute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_err: {
      value: cdktf.numberToHclTerraform(struct!.serverErr),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientErr = this._clientErr;
    }
    if (this._noroute !== undefined) {
      hasAnyValues = true;
      internalValueResult.noroute = this._noroute;
    }
    if (this._serverErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverErr = this._serverErr;
    }
    if (this._snatFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.snatFail = this._snatFail;
    }
    if (this._svrselFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.svrselFail = this._svrselFail;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientErr = undefined;
      this._noroute = undefined;
      this._serverErr = undefined;
      this._snatFail = undefined;
      this._svrselFail = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientErr = value.clientErr;
      this._noroute = value.noroute;
      this._serverErr = value.serverErr;
      this._snatFail = value.snatFail;
      this._svrselFail = value.svrselFail;
      this._uuid = value.uuid;
    }
  }

  // client_err - computed: false, optional: true, required: false
  private _clientErr?: number; 
  public get clientErr() {
    return this.getNumberAttribute('client_err');
  }
  public set clientErr(value: number) {
    this._clientErr = value;
  }
  public resetClientErr() {
    this._clientErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientErrInput() {
    return this._clientErr;
  }

  // noroute - computed: false, optional: true, required: false
  private _noroute?: number; 
  public get noroute() {
    return this.getNumberAttribute('noroute');
  }
  public set noroute(value: number) {
    this._noroute = value;
  }
  public resetNoroute() {
    this._noroute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get norouteInput() {
    return this._noroute;
  }

  // server_err - computed: false, optional: true, required: false
  private _serverErr?: number; 
  public get serverErr() {
    return this.getNumberAttribute('server_err');
  }
  public set serverErr(value: number) {
    this._serverErr = value;
  }
  public resetServerErr() {
    this._serverErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverErrInput() {
    return this._serverErr;
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
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsRateA {
  /**
  * Enable automatic packet-capture for Client fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fix#client_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixA#client_err}
  */
  readonly clientErr?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fix#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for No route failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fix#noroute VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixA#noroute}
  */
  readonly noroute?: number;
  /**
  * Enable automatic packet-capture for Server fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fix#server_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixA#server_err}
  */
  readonly serverErr?: number;
  /**
  * Enable automatic packet-capture for Source NAT failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fix#snat_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixA#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Enable automatic packet-capture for Server selection failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fix#svrsel_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixA#svrsel_fail}
  */
  readonly svrselFail?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fix#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fix#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_err: cdktf.numberToTerraform(struct!.clientErr),
    duration: cdktf.numberToTerraform(struct!.duration),
    noroute: cdktf.numberToTerraform(struct!.noroute),
    server_err: cdktf.numberToTerraform(struct!.serverErr),
    snat_fail: cdktf.numberToTerraform(struct!.snatFail),
    svrsel_fail: cdktf.numberToTerraform(struct!.svrselFail),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_err: {
      value: cdktf.numberToHclTerraform(struct!.clientErr),
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
    noroute: {
      value: cdktf.numberToHclTerraform(struct!.noroute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_err: {
      value: cdktf.numberToHclTerraform(struct!.serverErr),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientErr = this._clientErr;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._noroute !== undefined) {
      hasAnyValues = true;
      internalValueResult.noroute = this._noroute;
    }
    if (this._serverErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverErr = this._serverErr;
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
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientErr = undefined;
      this._duration = undefined;
      this._noroute = undefined;
      this._serverErr = undefined;
      this._snatFail = undefined;
      this._svrselFail = undefined;
      this._thresholdExceededBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientErr = value.clientErr;
      this._duration = value.duration;
      this._noroute = value.noroute;
      this._serverErr = value.serverErr;
      this._snatFail = value.snatFail;
      this._svrselFail = value.svrselFail;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._uuid = value.uuid;
    }
  }

  // client_err - computed: false, optional: true, required: false
  private _clientErr?: number; 
  public get clientErr() {
    return this.getNumberAttribute('client_err');
  }
  public set clientErr(value: number) {
    this._clientErr = value;
  }
  public resetClientErr() {
    this._clientErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientErrInput() {
    return this._clientErr;
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

  // noroute - computed: false, optional: true, required: false
  private _noroute?: number; 
  public get noroute() {
    return this.getNumberAttribute('noroute');
  }
  public set noroute(value: number) {
    this._noroute = value;
  }
  public resetNoroute() {
    this._noroute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get norouteInput() {
    return this._noroute;
  }

  // server_err - computed: false, optional: true, required: false
  private _serverErr?: number; 
  public get serverErr() {
    return this.getNumberAttribute('server_err');
  }
  public set serverErr(value: number) {
    this._serverErr = value;
  }
  public resetServerErr() {
    this._serverErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverErrInput() {
    return this._serverErr;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fix thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fix}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fix#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fix thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fix',
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
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsRateA) {
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
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFixTriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
