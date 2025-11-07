// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for Full proxy fpga err
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http#full_proxy_fpga_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpA#full_proxy_fpga_err}
  */
  readonly fullProxyFpgaErr?: number;
  /**
  * Enable automatic packet-capture for Fwd req fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http#fwdreq_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpA#fwdreq_fail}
  */
  readonly fwdreqFail?: number;
  /**
  * Enable automatic packet-capture for Fwd req data fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http#fwdreqdata_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpA#fwdreqdata_fail}
  */
  readonly fwdreqdataFail?: number;
  /**
  * Enable automatic packet-capture for Parse req fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http#parsereq_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpA#parsereq_fail}
  */
  readonly parsereqFail?: number;
  /**
  * Enable automatic packet-capture for Request over limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http#req_over_limit VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpA#req_over_limit}
  */
  readonly reqOverLimit?: number;
  /**
  * Enable automatic packet-capture for Request rate over limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http#req_rate_over_limit VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpA#req_rate_over_limit}
  */
  readonly reqRateOverLimit?: number;
  /**
  * Enable automatic packet-capture for Source NAT failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http#snat_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpA#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Enable automatic packet-capture for Server selection fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http#svrsel_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpA#svrsel_fail}
  */
  readonly svrselFail?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    full_proxy_fpga_err: cdktf.numberToTerraform(struct!.fullProxyFpgaErr),
    fwdreq_fail: cdktf.numberToTerraform(struct!.fwdreqFail),
    fwdreqdata_fail: cdktf.numberToTerraform(struct!.fwdreqdataFail),
    parsereq_fail: cdktf.numberToTerraform(struct!.parsereqFail),
    req_over_limit: cdktf.numberToTerraform(struct!.reqOverLimit),
    req_rate_over_limit: cdktf.numberToTerraform(struct!.reqRateOverLimit),
    snat_fail: cdktf.numberToTerraform(struct!.snatFail),
    svrsel_fail: cdktf.numberToTerraform(struct!.svrselFail),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    full_proxy_fpga_err: {
      value: cdktf.numberToHclTerraform(struct!.fullProxyFpgaErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwdreq_fail: {
      value: cdktf.numberToHclTerraform(struct!.fwdreqFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwdreqdata_fail: {
      value: cdktf.numberToHclTerraform(struct!.fwdreqdataFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parsereq_fail: {
      value: cdktf.numberToHclTerraform(struct!.parsereqFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_over_limit: {
      value: cdktf.numberToHclTerraform(struct!.reqOverLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_rate_over_limit: {
      value: cdktf.numberToHclTerraform(struct!.reqRateOverLimit),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fullProxyFpgaErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullProxyFpgaErr = this._fullProxyFpgaErr;
    }
    if (this._fwdreqFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdreqFail = this._fwdreqFail;
    }
    if (this._fwdreqdataFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdreqdataFail = this._fwdreqdataFail;
    }
    if (this._parsereqFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsereqFail = this._parsereqFail;
    }
    if (this._reqOverLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqOverLimit = this._reqOverLimit;
    }
    if (this._reqRateOverLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqRateOverLimit = this._reqRateOverLimit;
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

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fullProxyFpgaErr = undefined;
      this._fwdreqFail = undefined;
      this._fwdreqdataFail = undefined;
      this._parsereqFail = undefined;
      this._reqOverLimit = undefined;
      this._reqRateOverLimit = undefined;
      this._snatFail = undefined;
      this._svrselFail = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fullProxyFpgaErr = value.fullProxyFpgaErr;
      this._fwdreqFail = value.fwdreqFail;
      this._fwdreqdataFail = value.fwdreqdataFail;
      this._parsereqFail = value.parsereqFail;
      this._reqOverLimit = value.reqOverLimit;
      this._reqRateOverLimit = value.reqRateOverLimit;
      this._snatFail = value.snatFail;
      this._svrselFail = value.svrselFail;
      this._uuid = value.uuid;
    }
  }

  // full_proxy_fpga_err - computed: false, optional: true, required: false
  private _fullProxyFpgaErr?: number; 
  public get fullProxyFpgaErr() {
    return this.getNumberAttribute('full_proxy_fpga_err');
  }
  public set fullProxyFpgaErr(value: number) {
    this._fullProxyFpgaErr = value;
  }
  public resetFullProxyFpgaErr() {
    this._fullProxyFpgaErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullProxyFpgaErrInput() {
    return this._fullProxyFpgaErr;
  }

  // fwdreq_fail - computed: false, optional: true, required: false
  private _fwdreqFail?: number; 
  public get fwdreqFail() {
    return this.getNumberAttribute('fwdreq_fail');
  }
  public set fwdreqFail(value: number) {
    this._fwdreqFail = value;
  }
  public resetFwdreqFail() {
    this._fwdreqFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdreqFailInput() {
    return this._fwdreqFail;
  }

  // fwdreqdata_fail - computed: false, optional: true, required: false
  private _fwdreqdataFail?: number; 
  public get fwdreqdataFail() {
    return this.getNumberAttribute('fwdreqdata_fail');
  }
  public set fwdreqdataFail(value: number) {
    this._fwdreqdataFail = value;
  }
  public resetFwdreqdataFail() {
    this._fwdreqdataFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdreqdataFailInput() {
    return this._fwdreqdataFail;
  }

  // parsereq_fail - computed: false, optional: true, required: false
  private _parsereqFail?: number; 
  public get parsereqFail() {
    return this.getNumberAttribute('parsereq_fail');
  }
  public set parsereqFail(value: number) {
    this._parsereqFail = value;
  }
  public resetParsereqFail() {
    this._parsereqFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parsereqFailInput() {
    return this._parsereqFail;
  }

  // req_over_limit - computed: false, optional: true, required: false
  private _reqOverLimit?: number; 
  public get reqOverLimit() {
    return this.getNumberAttribute('req_over_limit');
  }
  public set reqOverLimit(value: number) {
    this._reqOverLimit = value;
  }
  public resetReqOverLimit() {
    this._reqOverLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqOverLimitInput() {
    return this._reqOverLimit;
  }

  // req_rate_over_limit - computed: false, optional: true, required: false
  private _reqRateOverLimit?: number; 
  public get reqRateOverLimit() {
    return this.getNumberAttribute('req_rate_over_limit');
  }
  public set reqRateOverLimit(value: number) {
    this._reqRateOverLimit = value;
  }
  public resetReqRateOverLimit() {
    this._reqRateOverLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqRateOverLimitInput() {
    return this._reqRateOverLimit;
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
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsRateA {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Full proxy fpga err
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http#full_proxy_fpga_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpA#full_proxy_fpga_err}
  */
  readonly fullProxyFpgaErr?: number;
  /**
  * Enable automatic packet-capture for Fwd req fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http#fwdreq_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpA#fwdreq_fail}
  */
  readonly fwdreqFail?: number;
  /**
  * Enable automatic packet-capture for Fwd req data fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http#fwdreqdata_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpA#fwdreqdata_fail}
  */
  readonly fwdreqdataFail?: number;
  /**
  * Enable automatic packet-capture for Parse req fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http#parsereq_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpA#parsereq_fail}
  */
  readonly parsereqFail?: number;
  /**
  * Enable automatic packet-capture for Request over limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http#req_over_limit VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpA#req_over_limit}
  */
  readonly reqOverLimit?: number;
  /**
  * Enable automatic packet-capture for Request rate over limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http#req_rate_over_limit VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpA#req_rate_over_limit}
  */
  readonly reqRateOverLimit?: number;
  /**
  * Enable automatic packet-capture for Source NAT failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http#snat_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpA#snat_fail}
  */
  readonly snatFail?: number;
  /**
  * Enable automatic packet-capture for Server selection fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http#svrsel_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpA#svrsel_fail}
  */
  readonly svrselFail?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    full_proxy_fpga_err: cdktf.numberToTerraform(struct!.fullProxyFpgaErr),
    fwdreq_fail: cdktf.numberToTerraform(struct!.fwdreqFail),
    fwdreqdata_fail: cdktf.numberToTerraform(struct!.fwdreqdataFail),
    parsereq_fail: cdktf.numberToTerraform(struct!.parsereqFail),
    req_over_limit: cdktf.numberToTerraform(struct!.reqOverLimit),
    req_rate_over_limit: cdktf.numberToTerraform(struct!.reqRateOverLimit),
    snat_fail: cdktf.numberToTerraform(struct!.snatFail),
    svrsel_fail: cdktf.numberToTerraform(struct!.svrselFail),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsRateA): any {
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
    full_proxy_fpga_err: {
      value: cdktf.numberToHclTerraform(struct!.fullProxyFpgaErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwdreq_fail: {
      value: cdktf.numberToHclTerraform(struct!.fwdreqFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fwdreqdata_fail: {
      value: cdktf.numberToHclTerraform(struct!.fwdreqdataFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parsereq_fail: {
      value: cdktf.numberToHclTerraform(struct!.parsereqFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_over_limit: {
      value: cdktf.numberToHclTerraform(struct!.reqOverLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_rate_over_limit: {
      value: cdktf.numberToHclTerraform(struct!.reqRateOverLimit),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._fullProxyFpgaErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullProxyFpgaErr = this._fullProxyFpgaErr;
    }
    if (this._fwdreqFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdreqFail = this._fwdreqFail;
    }
    if (this._fwdreqdataFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.fwdreqdataFail = this._fwdreqdataFail;
    }
    if (this._parsereqFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.parsereqFail = this._parsereqFail;
    }
    if (this._reqOverLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqOverLimit = this._reqOverLimit;
    }
    if (this._reqRateOverLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqRateOverLimit = this._reqRateOverLimit;
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

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._fullProxyFpgaErr = undefined;
      this._fwdreqFail = undefined;
      this._fwdreqdataFail = undefined;
      this._parsereqFail = undefined;
      this._reqOverLimit = undefined;
      this._reqRateOverLimit = undefined;
      this._snatFail = undefined;
      this._svrselFail = undefined;
      this._thresholdExceededBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._fullProxyFpgaErr = value.fullProxyFpgaErr;
      this._fwdreqFail = value.fwdreqFail;
      this._fwdreqdataFail = value.fwdreqdataFail;
      this._parsereqFail = value.parsereqFail;
      this._reqOverLimit = value.reqOverLimit;
      this._reqRateOverLimit = value.reqRateOverLimit;
      this._snatFail = value.snatFail;
      this._svrselFail = value.svrselFail;
      this._thresholdExceededBy = value.thresholdExceededBy;
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

  // full_proxy_fpga_err - computed: false, optional: true, required: false
  private _fullProxyFpgaErr?: number; 
  public get fullProxyFpgaErr() {
    return this.getNumberAttribute('full_proxy_fpga_err');
  }
  public set fullProxyFpgaErr(value: number) {
    this._fullProxyFpgaErr = value;
  }
  public resetFullProxyFpgaErr() {
    this._fullProxyFpgaErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullProxyFpgaErrInput() {
    return this._fullProxyFpgaErr;
  }

  // fwdreq_fail - computed: false, optional: true, required: false
  private _fwdreqFail?: number; 
  public get fwdreqFail() {
    return this.getNumberAttribute('fwdreq_fail');
  }
  public set fwdreqFail(value: number) {
    this._fwdreqFail = value;
  }
  public resetFwdreqFail() {
    this._fwdreqFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdreqFailInput() {
    return this._fwdreqFail;
  }

  // fwdreqdata_fail - computed: false, optional: true, required: false
  private _fwdreqdataFail?: number; 
  public get fwdreqdataFail() {
    return this.getNumberAttribute('fwdreqdata_fail');
  }
  public set fwdreqdataFail(value: number) {
    this._fwdreqdataFail = value;
  }
  public resetFwdreqdataFail() {
    this._fwdreqdataFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwdreqdataFailInput() {
    return this._fwdreqdataFail;
  }

  // parsereq_fail - computed: false, optional: true, required: false
  private _parsereqFail?: number; 
  public get parsereqFail() {
    return this.getNumberAttribute('parsereq_fail');
  }
  public set parsereqFail(value: number) {
    this._parsereqFail = value;
  }
  public resetParsereqFail() {
    this._parsereqFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parsereqFailInput() {
    return this._parsereqFail;
  }

  // req_over_limit - computed: false, optional: true, required: false
  private _reqOverLimit?: number; 
  public get reqOverLimit() {
    return this.getNumberAttribute('req_over_limit');
  }
  public set reqOverLimit(value: number) {
    this._reqOverLimit = value;
  }
  public resetReqOverLimit() {
    this._reqOverLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqOverLimitInput() {
    return this._reqOverLimit;
  }

  // req_rate_over_limit - computed: false, optional: true, required: false
  private _reqRateOverLimit?: number; 
  public get reqRateOverLimit() {
    return this.getNumberAttribute('req_rate_over_limit');
  }
  public set reqRateOverLimit(value: number) {
    this._reqRateOverLimit = value;
  }
  public resetReqRateOverLimit() {
    this._reqRateOverLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqRateOverLimitInput() {
    return this._reqRateOverLimit;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_slb_fast_http',
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
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsRateA) {
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
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSlbFastHttpTriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
