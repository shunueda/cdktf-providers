// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp#template_name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpA#template_name}
  */
  readonly templateName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for ICMP to ICMP Conversion Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp#icmp_to_icmp_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpA#icmp_to_icmp_err}
  */
  readonly icmpToIcmpErr?: number;
  /**
  * Enable automatic packet-capture for ICMP to ICMPv6 Conversion Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp#icmp_to_icmpv6_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpA#icmp_to_icmpv6_err}
  */
  readonly icmpToIcmpv6Err?: number;
  /**
  * Enable automatic packet-capture for ICMPv6 to ICMP Conversion Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp#icmpv6_to_icmp_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpA#icmpv6_to_icmp_err}
  */
  readonly icmpv6ToIcmpErr?: number;
  /**
  * Enable automatic packet-capture for ICMPv6 to ICMPv6 Conversion Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp#icmpv6_to_icmpv6_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpA#icmpv6_to_icmpv6_err}
  */
  readonly icmpv6ToIcmpv6Err?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp_to_icmp_err: cdktf.numberToTerraform(struct!.icmpToIcmpErr),
    icmp_to_icmpv6_err: cdktf.numberToTerraform(struct!.icmpToIcmpv6Err),
    icmpv6_to_icmp_err: cdktf.numberToTerraform(struct!.icmpv6ToIcmpErr),
    icmpv6_to_icmpv6_err: cdktf.numberToTerraform(struct!.icmpv6ToIcmpv6Err),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp_to_icmp_err: {
      value: cdktf.numberToHclTerraform(struct!.icmpToIcmpErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_to_icmpv6_err: {
      value: cdktf.numberToHclTerraform(struct!.icmpToIcmpv6Err),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_to_icmp_err: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6ToIcmpErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_to_icmpv6_err: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6ToIcmpv6Err),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmpToIcmpErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpToIcmpErr = this._icmpToIcmpErr;
    }
    if (this._icmpToIcmpv6Err !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpToIcmpv6Err = this._icmpToIcmpv6Err;
    }
    if (this._icmpv6ToIcmpErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6ToIcmpErr = this._icmpv6ToIcmpErr;
    }
    if (this._icmpv6ToIcmpv6Err !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6ToIcmpv6Err = this._icmpv6ToIcmpv6Err;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._icmpToIcmpErr = undefined;
      this._icmpToIcmpv6Err = undefined;
      this._icmpv6ToIcmpErr = undefined;
      this._icmpv6ToIcmpv6Err = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._icmpToIcmpErr = value.icmpToIcmpErr;
      this._icmpToIcmpv6Err = value.icmpToIcmpv6Err;
      this._icmpv6ToIcmpErr = value.icmpv6ToIcmpErr;
      this._icmpv6ToIcmpv6Err = value.icmpv6ToIcmpv6Err;
      this._uuid = value.uuid;
    }
  }

  // icmp_to_icmp_err - computed: false, optional: true, required: false
  private _icmpToIcmpErr?: number; 
  public get icmpToIcmpErr() {
    return this.getNumberAttribute('icmp_to_icmp_err');
  }
  public set icmpToIcmpErr(value: number) {
    this._icmpToIcmpErr = value;
  }
  public resetIcmpToIcmpErr() {
    this._icmpToIcmpErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpToIcmpErrInput() {
    return this._icmpToIcmpErr;
  }

  // icmp_to_icmpv6_err - computed: false, optional: true, required: false
  private _icmpToIcmpv6Err?: number; 
  public get icmpToIcmpv6Err() {
    return this.getNumberAttribute('icmp_to_icmpv6_err');
  }
  public set icmpToIcmpv6Err(value: number) {
    this._icmpToIcmpv6Err = value;
  }
  public resetIcmpToIcmpv6Err() {
    this._icmpToIcmpv6Err = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpToIcmpv6ErrInput() {
    return this._icmpToIcmpv6Err;
  }

  // icmpv6_to_icmp_err - computed: false, optional: true, required: false
  private _icmpv6ToIcmpErr?: number; 
  public get icmpv6ToIcmpErr() {
    return this.getNumberAttribute('icmpv6_to_icmp_err');
  }
  public set icmpv6ToIcmpErr(value: number) {
    this._icmpv6ToIcmpErr = value;
  }
  public resetIcmpv6ToIcmpErr() {
    this._icmpv6ToIcmpErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6ToIcmpErrInput() {
    return this._icmpv6ToIcmpErr;
  }

  // icmpv6_to_icmpv6_err - computed: false, optional: true, required: false
  private _icmpv6ToIcmpv6Err?: number; 
  public get icmpv6ToIcmpv6Err() {
    return this.getNumberAttribute('icmpv6_to_icmpv6_err');
  }
  public set icmpv6ToIcmpv6Err(value: number) {
    this._icmpv6ToIcmpv6Err = value;
  }
  public resetIcmpv6ToIcmpv6Err() {
    this._icmpv6ToIcmpv6Err = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6ToIcmpv6ErrInput() {
    return this._icmpv6ToIcmpv6Err;
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
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsRateA {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for ICMP to ICMP Conversion Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp#icmp_to_icmp_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpA#icmp_to_icmp_err}
  */
  readonly icmpToIcmpErr?: number;
  /**
  * Enable automatic packet-capture for ICMP to ICMPv6 Conversion Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp#icmp_to_icmpv6_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpA#icmp_to_icmpv6_err}
  */
  readonly icmpToIcmpv6Err?: number;
  /**
  * Enable automatic packet-capture for ICMPv6 to ICMP Conversion Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp#icmpv6_to_icmp_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpA#icmpv6_to_icmp_err}
  */
  readonly icmpv6ToIcmpErr?: number;
  /**
  * Enable automatic packet-capture for ICMPv6 to ICMPv6 Conversion Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp#icmpv6_to_icmpv6_err VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpA#icmpv6_to_icmpv6_err}
  */
  readonly icmpv6ToIcmpv6Err?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    icmp_to_icmp_err: cdktf.numberToTerraform(struct!.icmpToIcmpErr),
    icmp_to_icmpv6_err: cdktf.numberToTerraform(struct!.icmpToIcmpv6Err),
    icmpv6_to_icmp_err: cdktf.numberToTerraform(struct!.icmpv6ToIcmpErr),
    icmpv6_to_icmpv6_err: cdktf.numberToTerraform(struct!.icmpv6ToIcmpv6Err),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsRateA): any {
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
    icmp_to_icmp_err: {
      value: cdktf.numberToHclTerraform(struct!.icmpToIcmpErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmp_to_icmpv6_err: {
      value: cdktf.numberToHclTerraform(struct!.icmpToIcmpv6Err),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_to_icmp_err: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6ToIcmpErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    icmpv6_to_icmpv6_err: {
      value: cdktf.numberToHclTerraform(struct!.icmpv6ToIcmpv6Err),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._icmpToIcmpErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpToIcmpErr = this._icmpToIcmpErr;
    }
    if (this._icmpToIcmpv6Err !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpToIcmpv6Err = this._icmpToIcmpv6Err;
    }
    if (this._icmpv6ToIcmpErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6ToIcmpErr = this._icmpv6ToIcmpErr;
    }
    if (this._icmpv6ToIcmpv6Err !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmpv6ToIcmpv6Err = this._icmpv6ToIcmpv6Err;
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

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._icmpToIcmpErr = undefined;
      this._icmpToIcmpv6Err = undefined;
      this._icmpv6ToIcmpErr = undefined;
      this._icmpv6ToIcmpv6Err = undefined;
      this._thresholdExceededBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._icmpToIcmpErr = value.icmpToIcmpErr;
      this._icmpToIcmpv6Err = value.icmpToIcmpv6Err;
      this._icmpv6ToIcmpErr = value.icmpv6ToIcmpErr;
      this._icmpv6ToIcmpv6Err = value.icmpv6ToIcmpv6Err;
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

  // icmp_to_icmp_err - computed: false, optional: true, required: false
  private _icmpToIcmpErr?: number; 
  public get icmpToIcmpErr() {
    return this.getNumberAttribute('icmp_to_icmp_err');
  }
  public set icmpToIcmpErr(value: number) {
    this._icmpToIcmpErr = value;
  }
  public resetIcmpToIcmpErr() {
    this._icmpToIcmpErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpToIcmpErrInput() {
    return this._icmpToIcmpErr;
  }

  // icmp_to_icmpv6_err - computed: false, optional: true, required: false
  private _icmpToIcmpv6Err?: number; 
  public get icmpToIcmpv6Err() {
    return this.getNumberAttribute('icmp_to_icmpv6_err');
  }
  public set icmpToIcmpv6Err(value: number) {
    this._icmpToIcmpv6Err = value;
  }
  public resetIcmpToIcmpv6Err() {
    this._icmpToIcmpv6Err = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpToIcmpv6ErrInput() {
    return this._icmpToIcmpv6Err;
  }

  // icmpv6_to_icmp_err - computed: false, optional: true, required: false
  private _icmpv6ToIcmpErr?: number; 
  public get icmpv6ToIcmpErr() {
    return this.getNumberAttribute('icmpv6_to_icmp_err');
  }
  public set icmpv6ToIcmpErr(value: number) {
    this._icmpv6ToIcmpErr = value;
  }
  public resetIcmpv6ToIcmpErr() {
    this._icmpv6ToIcmpErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6ToIcmpErrInput() {
    return this._icmpv6ToIcmpErr;
  }

  // icmpv6_to_icmpv6_err - computed: false, optional: true, required: false
  private _icmpv6ToIcmpv6Err?: number; 
  public get icmpv6ToIcmpv6Err() {
    return this.getNumberAttribute('icmpv6_to_icmpv6_err');
  }
  public set icmpv6ToIcmpv6Err(value: number) {
    this._icmpv6ToIcmpv6Err = value;
  }
  public resetIcmpv6ToIcmpv6Err() {
    this._icmpv6ToIcmpv6Err = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpv6ToIcmpv6ErrInput() {
    return this._icmpv6ToIcmpv6Err;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_icmp',
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
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsRateA) {
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
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6IcmpTriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
