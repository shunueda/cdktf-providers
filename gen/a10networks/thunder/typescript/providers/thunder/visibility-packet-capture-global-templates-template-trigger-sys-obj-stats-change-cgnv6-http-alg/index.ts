// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg#template_name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgA#template_name}
  */
  readonly templateName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for Buff Insertion Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg#header_insertion_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgA#header_insertion_failed}
  */
  readonly headerInsertionFailed?: number;
  /**
  * Enable automatic packet-capture for Buff Removal Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg#header_removal_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgA#header_removal_failed}
  */
  readonly headerRemovalFailed?: number;
  /**
  * Enable automatic packet-capture for Out-of-Memory Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg#out_of_memory_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgA#out_of_memory_dropped}
  */
  readonly outOfMemoryDropped?: number;
  /**
  * Enable automatic packet-capture for Packet Out-of-Order Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg#out_of_order_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgA#out_of_order_dropped}
  */
  readonly outOfOrderDropped?: number;
  /**
  * Enable automatic packet-capture for Queue Length Exceed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg#queue_len_exceed_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgA#queue_len_exceed_dropped}
  */
  readonly queueLenExceedDropped?: number;
  /**
  * Enable automatic packet-capture for Query Request Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg#radius_requst_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgA#radius_requst_dropped}
  */
  readonly radiusRequstDropped?: number;
  /**
  * Enable automatic packet-capture for Query Response Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg#radius_response_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgA#radius_response_dropped}
  */
  readonly radiusResponseDropped?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    header_insertion_failed: cdktf.numberToTerraform(struct!.headerInsertionFailed),
    header_removal_failed: cdktf.numberToTerraform(struct!.headerRemovalFailed),
    out_of_memory_dropped: cdktf.numberToTerraform(struct!.outOfMemoryDropped),
    out_of_order_dropped: cdktf.numberToTerraform(struct!.outOfOrderDropped),
    queue_len_exceed_dropped: cdktf.numberToTerraform(struct!.queueLenExceedDropped),
    radius_requst_dropped: cdktf.numberToTerraform(struct!.radiusRequstDropped),
    radius_response_dropped: cdktf.numberToTerraform(struct!.radiusResponseDropped),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    header_insertion_failed: {
      value: cdktf.numberToHclTerraform(struct!.headerInsertionFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_removal_failed: {
      value: cdktf.numberToHclTerraform(struct!.headerRemovalFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_of_memory_dropped: {
      value: cdktf.numberToHclTerraform(struct!.outOfMemoryDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_of_order_dropped: {
      value: cdktf.numberToHclTerraform(struct!.outOfOrderDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue_len_exceed_dropped: {
      value: cdktf.numberToHclTerraform(struct!.queueLenExceedDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_requst_dropped: {
      value: cdktf.numberToHclTerraform(struct!.radiusRequstDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_response_dropped: {
      value: cdktf.numberToHclTerraform(struct!.radiusResponseDropped),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._headerInsertionFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerInsertionFailed = this._headerInsertionFailed;
    }
    if (this._headerRemovalFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerRemovalFailed = this._headerRemovalFailed;
    }
    if (this._outOfMemoryDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.outOfMemoryDropped = this._outOfMemoryDropped;
    }
    if (this._outOfOrderDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.outOfOrderDropped = this._outOfOrderDropped;
    }
    if (this._queueLenExceedDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueLenExceedDropped = this._queueLenExceedDropped;
    }
    if (this._radiusRequstDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusRequstDropped = this._radiusRequstDropped;
    }
    if (this._radiusResponseDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusResponseDropped = this._radiusResponseDropped;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._headerInsertionFailed = undefined;
      this._headerRemovalFailed = undefined;
      this._outOfMemoryDropped = undefined;
      this._outOfOrderDropped = undefined;
      this._queueLenExceedDropped = undefined;
      this._radiusRequstDropped = undefined;
      this._radiusResponseDropped = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._headerInsertionFailed = value.headerInsertionFailed;
      this._headerRemovalFailed = value.headerRemovalFailed;
      this._outOfMemoryDropped = value.outOfMemoryDropped;
      this._outOfOrderDropped = value.outOfOrderDropped;
      this._queueLenExceedDropped = value.queueLenExceedDropped;
      this._radiusRequstDropped = value.radiusRequstDropped;
      this._radiusResponseDropped = value.radiusResponseDropped;
      this._uuid = value.uuid;
    }
  }

  // header_insertion_failed - computed: false, optional: true, required: false
  private _headerInsertionFailed?: number; 
  public get headerInsertionFailed() {
    return this.getNumberAttribute('header_insertion_failed');
  }
  public set headerInsertionFailed(value: number) {
    this._headerInsertionFailed = value;
  }
  public resetHeaderInsertionFailed() {
    this._headerInsertionFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInsertionFailedInput() {
    return this._headerInsertionFailed;
  }

  // header_removal_failed - computed: false, optional: true, required: false
  private _headerRemovalFailed?: number; 
  public get headerRemovalFailed() {
    return this.getNumberAttribute('header_removal_failed');
  }
  public set headerRemovalFailed(value: number) {
    this._headerRemovalFailed = value;
  }
  public resetHeaderRemovalFailed() {
    this._headerRemovalFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerRemovalFailedInput() {
    return this._headerRemovalFailed;
  }

  // out_of_memory_dropped - computed: false, optional: true, required: false
  private _outOfMemoryDropped?: number; 
  public get outOfMemoryDropped() {
    return this.getNumberAttribute('out_of_memory_dropped');
  }
  public set outOfMemoryDropped(value: number) {
    this._outOfMemoryDropped = value;
  }
  public resetOutOfMemoryDropped() {
    this._outOfMemoryDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfMemoryDroppedInput() {
    return this._outOfMemoryDropped;
  }

  // out_of_order_dropped - computed: false, optional: true, required: false
  private _outOfOrderDropped?: number; 
  public get outOfOrderDropped() {
    return this.getNumberAttribute('out_of_order_dropped');
  }
  public set outOfOrderDropped(value: number) {
    this._outOfOrderDropped = value;
  }
  public resetOutOfOrderDropped() {
    this._outOfOrderDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfOrderDroppedInput() {
    return this._outOfOrderDropped;
  }

  // queue_len_exceed_dropped - computed: false, optional: true, required: false
  private _queueLenExceedDropped?: number; 
  public get queueLenExceedDropped() {
    return this.getNumberAttribute('queue_len_exceed_dropped');
  }
  public set queueLenExceedDropped(value: number) {
    this._queueLenExceedDropped = value;
  }
  public resetQueueLenExceedDropped() {
    this._queueLenExceedDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueLenExceedDroppedInput() {
    return this._queueLenExceedDropped;
  }

  // radius_requst_dropped - computed: false, optional: true, required: false
  private _radiusRequstDropped?: number; 
  public get radiusRequstDropped() {
    return this.getNumberAttribute('radius_requst_dropped');
  }
  public set radiusRequstDropped(value: number) {
    this._radiusRequstDropped = value;
  }
  public resetRadiusRequstDropped() {
    this._radiusRequstDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusRequstDroppedInput() {
    return this._radiusRequstDropped;
  }

  // radius_response_dropped - computed: false, optional: true, required: false
  private _radiusResponseDropped?: number; 
  public get radiusResponseDropped() {
    return this.getNumberAttribute('radius_response_dropped');
  }
  public set radiusResponseDropped(value: number) {
    this._radiusResponseDropped = value;
  }
  public resetRadiusResponseDropped() {
    this._radiusResponseDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusResponseDroppedInput() {
    return this._radiusResponseDropped;
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
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateA {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Buff Insertion Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg#header_insertion_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgA#header_insertion_failed}
  */
  readonly headerInsertionFailed?: number;
  /**
  * Enable automatic packet-capture for Buff Removal Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg#header_removal_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgA#header_removal_failed}
  */
  readonly headerRemovalFailed?: number;
  /**
  * Enable automatic packet-capture for Out-of-Memory Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg#out_of_memory_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgA#out_of_memory_dropped}
  */
  readonly outOfMemoryDropped?: number;
  /**
  * Enable automatic packet-capture for Packet Out-of-Order Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg#out_of_order_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgA#out_of_order_dropped}
  */
  readonly outOfOrderDropped?: number;
  /**
  * Enable automatic packet-capture for Queue Length Exceed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg#queue_len_exceed_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgA#queue_len_exceed_dropped}
  */
  readonly queueLenExceedDropped?: number;
  /**
  * Enable automatic packet-capture for Query Request Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg#radius_requst_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgA#radius_requst_dropped}
  */
  readonly radiusRequstDropped?: number;
  /**
  * Enable automatic packet-capture for Query Response Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg#radius_response_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgA#radius_response_dropped}
  */
  readonly radiusResponseDropped?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    header_insertion_failed: cdktf.numberToTerraform(struct!.headerInsertionFailed),
    header_removal_failed: cdktf.numberToTerraform(struct!.headerRemovalFailed),
    out_of_memory_dropped: cdktf.numberToTerraform(struct!.outOfMemoryDropped),
    out_of_order_dropped: cdktf.numberToTerraform(struct!.outOfOrderDropped),
    queue_len_exceed_dropped: cdktf.numberToTerraform(struct!.queueLenExceedDropped),
    radius_requst_dropped: cdktf.numberToTerraform(struct!.radiusRequstDropped),
    radius_response_dropped: cdktf.numberToTerraform(struct!.radiusResponseDropped),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateA): any {
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
    header_insertion_failed: {
      value: cdktf.numberToHclTerraform(struct!.headerInsertionFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    header_removal_failed: {
      value: cdktf.numberToHclTerraform(struct!.headerRemovalFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_of_memory_dropped: {
      value: cdktf.numberToHclTerraform(struct!.outOfMemoryDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_of_order_dropped: {
      value: cdktf.numberToHclTerraform(struct!.outOfOrderDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    queue_len_exceed_dropped: {
      value: cdktf.numberToHclTerraform(struct!.queueLenExceedDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_requst_dropped: {
      value: cdktf.numberToHclTerraform(struct!.radiusRequstDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_response_dropped: {
      value: cdktf.numberToHclTerraform(struct!.radiusResponseDropped),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._headerInsertionFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerInsertionFailed = this._headerInsertionFailed;
    }
    if (this._headerRemovalFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.headerRemovalFailed = this._headerRemovalFailed;
    }
    if (this._outOfMemoryDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.outOfMemoryDropped = this._outOfMemoryDropped;
    }
    if (this._outOfOrderDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.outOfOrderDropped = this._outOfOrderDropped;
    }
    if (this._queueLenExceedDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.queueLenExceedDropped = this._queueLenExceedDropped;
    }
    if (this._radiusRequstDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusRequstDropped = this._radiusRequstDropped;
    }
    if (this._radiusResponseDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusResponseDropped = this._radiusResponseDropped;
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

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._headerInsertionFailed = undefined;
      this._headerRemovalFailed = undefined;
      this._outOfMemoryDropped = undefined;
      this._outOfOrderDropped = undefined;
      this._queueLenExceedDropped = undefined;
      this._radiusRequstDropped = undefined;
      this._radiusResponseDropped = undefined;
      this._thresholdExceededBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._headerInsertionFailed = value.headerInsertionFailed;
      this._headerRemovalFailed = value.headerRemovalFailed;
      this._outOfMemoryDropped = value.outOfMemoryDropped;
      this._outOfOrderDropped = value.outOfOrderDropped;
      this._queueLenExceedDropped = value.queueLenExceedDropped;
      this._radiusRequstDropped = value.radiusRequstDropped;
      this._radiusResponseDropped = value.radiusResponseDropped;
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

  // header_insertion_failed - computed: false, optional: true, required: false
  private _headerInsertionFailed?: number; 
  public get headerInsertionFailed() {
    return this.getNumberAttribute('header_insertion_failed');
  }
  public set headerInsertionFailed(value: number) {
    this._headerInsertionFailed = value;
  }
  public resetHeaderInsertionFailed() {
    this._headerInsertionFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInsertionFailedInput() {
    return this._headerInsertionFailed;
  }

  // header_removal_failed - computed: false, optional: true, required: false
  private _headerRemovalFailed?: number; 
  public get headerRemovalFailed() {
    return this.getNumberAttribute('header_removal_failed');
  }
  public set headerRemovalFailed(value: number) {
    this._headerRemovalFailed = value;
  }
  public resetHeaderRemovalFailed() {
    this._headerRemovalFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerRemovalFailedInput() {
    return this._headerRemovalFailed;
  }

  // out_of_memory_dropped - computed: false, optional: true, required: false
  private _outOfMemoryDropped?: number; 
  public get outOfMemoryDropped() {
    return this.getNumberAttribute('out_of_memory_dropped');
  }
  public set outOfMemoryDropped(value: number) {
    this._outOfMemoryDropped = value;
  }
  public resetOutOfMemoryDropped() {
    this._outOfMemoryDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfMemoryDroppedInput() {
    return this._outOfMemoryDropped;
  }

  // out_of_order_dropped - computed: false, optional: true, required: false
  private _outOfOrderDropped?: number; 
  public get outOfOrderDropped() {
    return this.getNumberAttribute('out_of_order_dropped');
  }
  public set outOfOrderDropped(value: number) {
    this._outOfOrderDropped = value;
  }
  public resetOutOfOrderDropped() {
    this._outOfOrderDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfOrderDroppedInput() {
    return this._outOfOrderDropped;
  }

  // queue_len_exceed_dropped - computed: false, optional: true, required: false
  private _queueLenExceedDropped?: number; 
  public get queueLenExceedDropped() {
    return this.getNumberAttribute('queue_len_exceed_dropped');
  }
  public set queueLenExceedDropped(value: number) {
    this._queueLenExceedDropped = value;
  }
  public resetQueueLenExceedDropped() {
    this._queueLenExceedDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queueLenExceedDroppedInput() {
    return this._queueLenExceedDropped;
  }

  // radius_requst_dropped - computed: false, optional: true, required: false
  private _radiusRequstDropped?: number; 
  public get radiusRequstDropped() {
    return this.getNumberAttribute('radius_requst_dropped');
  }
  public set radiusRequstDropped(value: number) {
    this._radiusRequstDropped = value;
  }
  public resetRadiusRequstDropped() {
    this._radiusRequstDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusRequstDroppedInput() {
    return this._radiusRequstDropped;
  }

  // radius_response_dropped - computed: false, optional: true, required: false
  private _radiusResponseDropped?: number; 
  public get radiusResponseDropped() {
    return this.getNumberAttribute('radius_response_dropped');
  }
  public set radiusResponseDropped(value: number) {
    this._radiusResponseDropped = value;
  }
  public resetRadiusResponseDropped() {
    this._radiusResponseDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusResponseDroppedInput() {
    return this._radiusResponseDropped;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_http_alg',
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
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateA) {
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
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6HttpAlgTriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
