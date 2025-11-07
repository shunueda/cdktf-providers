// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_dhcpv6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6AConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_dhcpv6#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6A#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_dhcpv6#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6A#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_dhcpv6#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6A#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_dhcpv6#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6A#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_dhcpv6#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6A#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsIncA {
  /**
  * Enable automatic packet-capture for Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_dhcpv6#packets_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6A#packets_dropped}
  */
  readonly packetsDropped?: number;
  /**
  * Enable automatic packet-capture for Packets dropped during clear bindings process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_dhcpv6#pkts_dropped_during_clear VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6A#pkts_dropped_during_clear}
  */
  readonly pktsDroppedDuringClear?: number;
  /**
  * Enable automatic packet-capture for Packets with not supported messages sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_dhcpv6#rcv_not_supported_msg VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6A#rcv_not_supported_msg}
  */
  readonly rcvNotSupportedMsg?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_dhcpv6#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6A#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    packets_dropped: cdktf.numberToTerraform(struct!.packetsDropped),
    pkts_dropped_during_clear: cdktf.numberToTerraform(struct!.pktsDroppedDuringClear),
    rcv_not_supported_msg: cdktf.numberToTerraform(struct!.rcvNotSupportedMsg),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    packets_dropped: {
      value: cdktf.numberToHclTerraform(struct!.packetsDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkts_dropped_during_clear: {
      value: cdktf.numberToHclTerraform(struct!.pktsDroppedDuringClear),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcv_not_supported_msg: {
      value: cdktf.numberToHclTerraform(struct!.rcvNotSupportedMsg),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._packetsDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsDropped = this._packetsDropped;
    }
    if (this._pktsDroppedDuringClear !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktsDroppedDuringClear = this._pktsDroppedDuringClear;
    }
    if (this._rcvNotSupportedMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvNotSupportedMsg = this._rcvNotSupportedMsg;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._packetsDropped = undefined;
      this._pktsDroppedDuringClear = undefined;
      this._rcvNotSupportedMsg = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._packetsDropped = value.packetsDropped;
      this._pktsDroppedDuringClear = value.pktsDroppedDuringClear;
      this._rcvNotSupportedMsg = value.rcvNotSupportedMsg;
      this._uuid = value.uuid;
    }
  }

  // packets_dropped - computed: false, optional: true, required: false
  private _packetsDropped?: number; 
  public get packetsDropped() {
    return this.getNumberAttribute('packets_dropped');
  }
  public set packetsDropped(value: number) {
    this._packetsDropped = value;
  }
  public resetPacketsDropped() {
    this._packetsDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsDroppedInput() {
    return this._packetsDropped;
  }

  // pkts_dropped_during_clear - computed: false, optional: true, required: false
  private _pktsDroppedDuringClear?: number; 
  public get pktsDroppedDuringClear() {
    return this.getNumberAttribute('pkts_dropped_during_clear');
  }
  public set pktsDroppedDuringClear(value: number) {
    this._pktsDroppedDuringClear = value;
  }
  public resetPktsDroppedDuringClear() {
    this._pktsDroppedDuringClear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktsDroppedDuringClearInput() {
    return this._pktsDroppedDuringClear;
  }

  // rcv_not_supported_msg - computed: false, optional: true, required: false
  private _rcvNotSupportedMsg?: number; 
  public get rcvNotSupportedMsg() {
    return this.getNumberAttribute('rcv_not_supported_msg');
  }
  public set rcvNotSupportedMsg(value: number) {
    this._rcvNotSupportedMsg = value;
  }
  public resetRcvNotSupportedMsg() {
    this._rcvNotSupportedMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvNotSupportedMsgInput() {
    return this._rcvNotSupportedMsg;
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
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsRateA {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_dhcpv6#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6A#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_dhcpv6#packets_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6A#packets_dropped}
  */
  readonly packetsDropped?: number;
  /**
  * Enable automatic packet-capture for Packets dropped during clear bindings process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_dhcpv6#pkts_dropped_during_clear VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6A#pkts_dropped_during_clear}
  */
  readonly pktsDroppedDuringClear?: number;
  /**
  * Enable automatic packet-capture for Packets with not supported messages sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_dhcpv6#rcv_not_supported_msg VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6A#rcv_not_supported_msg}
  */
  readonly rcvNotSupportedMsg?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_dhcpv6#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6A#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_dhcpv6#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6A#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    packets_dropped: cdktf.numberToTerraform(struct!.packetsDropped),
    pkts_dropped_during_clear: cdktf.numberToTerraform(struct!.pktsDroppedDuringClear),
    rcv_not_supported_msg: cdktf.numberToTerraform(struct!.rcvNotSupportedMsg),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsRateA): any {
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
    packets_dropped: {
      value: cdktf.numberToHclTerraform(struct!.packetsDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pkts_dropped_during_clear: {
      value: cdktf.numberToHclTerraform(struct!.pktsDroppedDuringClear),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rcv_not_supported_msg: {
      value: cdktf.numberToHclTerraform(struct!.rcvNotSupportedMsg),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._packetsDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetsDropped = this._packetsDropped;
    }
    if (this._pktsDroppedDuringClear !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktsDroppedDuringClear = this._pktsDroppedDuringClear;
    }
    if (this._rcvNotSupportedMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcvNotSupportedMsg = this._rcvNotSupportedMsg;
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

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._packetsDropped = undefined;
      this._pktsDroppedDuringClear = undefined;
      this._rcvNotSupportedMsg = undefined;
      this._thresholdExceededBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._packetsDropped = value.packetsDropped;
      this._pktsDroppedDuringClear = value.pktsDroppedDuringClear;
      this._rcvNotSupportedMsg = value.rcvNotSupportedMsg;
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

  // packets_dropped - computed: false, optional: true, required: false
  private _packetsDropped?: number; 
  public get packetsDropped() {
    return this.getNumberAttribute('packets_dropped');
  }
  public set packetsDropped(value: number) {
    this._packetsDropped = value;
  }
  public resetPacketsDropped() {
    this._packetsDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetsDroppedInput() {
    return this._packetsDropped;
  }

  // pkts_dropped_during_clear - computed: false, optional: true, required: false
  private _pktsDroppedDuringClear?: number; 
  public get pktsDroppedDuringClear() {
    return this.getNumberAttribute('pkts_dropped_during_clear');
  }
  public set pktsDroppedDuringClear(value: number) {
    this._pktsDroppedDuringClear = value;
  }
  public resetPktsDroppedDuringClear() {
    this._pktsDroppedDuringClear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktsDroppedDuringClearInput() {
    return this._pktsDroppedDuringClear;
  }

  // rcv_not_supported_msg - computed: false, optional: true, required: false
  private _rcvNotSupportedMsg?: number; 
  public get rcvNotSupportedMsg() {
    return this.getNumberAttribute('rcv_not_supported_msg');
  }
  public set rcvNotSupportedMsg(value: number) {
    this._rcvNotSupportedMsg = value;
  }
  public resetRcvNotSupportedMsg() {
    this._rcvNotSupportedMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcvNotSupportedMsgInput() {
    return this._rcvNotSupportedMsg;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_dhcpv6 thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_dhcpv6}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6A extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_dhcpv6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6A resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6A to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6A that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_dhcpv6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6A to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_dhcpv6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_dhcpv6 thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_dhcpv6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6AConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6AConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_dhcpv6',
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
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsRateA) {
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
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Dhcpv6TriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
