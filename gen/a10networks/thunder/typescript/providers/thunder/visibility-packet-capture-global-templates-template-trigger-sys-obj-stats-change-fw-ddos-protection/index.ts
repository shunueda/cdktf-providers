// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for Too many DDOS entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection#ddos_entries_too_many VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionA#ddos_entries_too_many}
  */
  readonly ddosEntriesTooMany?: number;
  /**
  * Enable automatic packet-capture for DDoS Entry BGP add failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection#ddos_entry_add_to_bgp_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionA#ddos_entry_add_to_bgp_failure}
  */
  readonly ddosEntryAddToBgpFailure?: number;
  /**
  * Enable automatic packet-capture for DDOS entry BGP remove failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection#ddos_entry_remove_from_bgp_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionA#ddos_entry_remove_from_bgp_failure}
  */
  readonly ddosEntryRemoveFromBgpFailure?: number;
  /**
  * Enable automatic packet-capture for DDOS Packet Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection#ddos_packet_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionA#ddos_packet_dropped}
  */
  readonly ddosPacketDropped?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ddos_entries_too_many: cdktf.numberToTerraform(struct!.ddosEntriesTooMany),
    ddos_entry_add_to_bgp_failure: cdktf.numberToTerraform(struct!.ddosEntryAddToBgpFailure),
    ddos_entry_remove_from_bgp_failure: cdktf.numberToTerraform(struct!.ddosEntryRemoveFromBgpFailure),
    ddos_packet_dropped: cdktf.numberToTerraform(struct!.ddosPacketDropped),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ddos_entries_too_many: {
      value: cdktf.numberToHclTerraform(struct!.ddosEntriesTooMany),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_entry_add_to_bgp_failure: {
      value: cdktf.numberToHclTerraform(struct!.ddosEntryAddToBgpFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_entry_remove_from_bgp_failure: {
      value: cdktf.numberToHclTerraform(struct!.ddosEntryRemoveFromBgpFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_packet_dropped: {
      value: cdktf.numberToHclTerraform(struct!.ddosPacketDropped),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ddosEntriesTooMany !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosEntriesTooMany = this._ddosEntriesTooMany;
    }
    if (this._ddosEntryAddToBgpFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosEntryAddToBgpFailure = this._ddosEntryAddToBgpFailure;
    }
    if (this._ddosEntryRemoveFromBgpFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosEntryRemoveFromBgpFailure = this._ddosEntryRemoveFromBgpFailure;
    }
    if (this._ddosPacketDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosPacketDropped = this._ddosPacketDropped;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ddosEntriesTooMany = undefined;
      this._ddosEntryAddToBgpFailure = undefined;
      this._ddosEntryRemoveFromBgpFailure = undefined;
      this._ddosPacketDropped = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ddosEntriesTooMany = value.ddosEntriesTooMany;
      this._ddosEntryAddToBgpFailure = value.ddosEntryAddToBgpFailure;
      this._ddosEntryRemoveFromBgpFailure = value.ddosEntryRemoveFromBgpFailure;
      this._ddosPacketDropped = value.ddosPacketDropped;
      this._uuid = value.uuid;
    }
  }

  // ddos_entries_too_many - computed: false, optional: true, required: false
  private _ddosEntriesTooMany?: number; 
  public get ddosEntriesTooMany() {
    return this.getNumberAttribute('ddos_entries_too_many');
  }
  public set ddosEntriesTooMany(value: number) {
    this._ddosEntriesTooMany = value;
  }
  public resetDdosEntriesTooMany() {
    this._ddosEntriesTooMany = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosEntriesTooManyInput() {
    return this._ddosEntriesTooMany;
  }

  // ddos_entry_add_to_bgp_failure - computed: false, optional: true, required: false
  private _ddosEntryAddToBgpFailure?: number; 
  public get ddosEntryAddToBgpFailure() {
    return this.getNumberAttribute('ddos_entry_add_to_bgp_failure');
  }
  public set ddosEntryAddToBgpFailure(value: number) {
    this._ddosEntryAddToBgpFailure = value;
  }
  public resetDdosEntryAddToBgpFailure() {
    this._ddosEntryAddToBgpFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosEntryAddToBgpFailureInput() {
    return this._ddosEntryAddToBgpFailure;
  }

  // ddos_entry_remove_from_bgp_failure - computed: false, optional: true, required: false
  private _ddosEntryRemoveFromBgpFailure?: number; 
  public get ddosEntryRemoveFromBgpFailure() {
    return this.getNumberAttribute('ddos_entry_remove_from_bgp_failure');
  }
  public set ddosEntryRemoveFromBgpFailure(value: number) {
    this._ddosEntryRemoveFromBgpFailure = value;
  }
  public resetDdosEntryRemoveFromBgpFailure() {
    this._ddosEntryRemoveFromBgpFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosEntryRemoveFromBgpFailureInput() {
    return this._ddosEntryRemoveFromBgpFailure;
  }

  // ddos_packet_dropped - computed: false, optional: true, required: false
  private _ddosPacketDropped?: number; 
  public get ddosPacketDropped() {
    return this.getNumberAttribute('ddos_packet_dropped');
  }
  public set ddosPacketDropped(value: number) {
    this._ddosPacketDropped = value;
  }
  public resetDdosPacketDropped() {
    this._ddosPacketDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosPacketDroppedInput() {
    return this._ddosPacketDropped;
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
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsRateA {
  /**
  * Enable automatic packet-capture for Too many DDOS entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection#ddos_entries_too_many VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionA#ddos_entries_too_many}
  */
  readonly ddosEntriesTooMany?: number;
  /**
  * Enable automatic packet-capture for DDoS Entry BGP add failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection#ddos_entry_add_to_bgp_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionA#ddos_entry_add_to_bgp_failure}
  */
  readonly ddosEntryAddToBgpFailure?: number;
  /**
  * Enable automatic packet-capture for DDOS entry BGP remove failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection#ddos_entry_remove_from_bgp_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionA#ddos_entry_remove_from_bgp_failure}
  */
  readonly ddosEntryRemoveFromBgpFailure?: number;
  /**
  * Enable automatic packet-capture for DDOS Packet Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection#ddos_packet_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionA#ddos_packet_dropped}
  */
  readonly ddosPacketDropped?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionA#duration}
  */
  readonly duration?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ddos_entries_too_many: cdktf.numberToTerraform(struct!.ddosEntriesTooMany),
    ddos_entry_add_to_bgp_failure: cdktf.numberToTerraform(struct!.ddosEntryAddToBgpFailure),
    ddos_entry_remove_from_bgp_failure: cdktf.numberToTerraform(struct!.ddosEntryRemoveFromBgpFailure),
    ddos_packet_dropped: cdktf.numberToTerraform(struct!.ddosPacketDropped),
    duration: cdktf.numberToTerraform(struct!.duration),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ddos_entries_too_many: {
      value: cdktf.numberToHclTerraform(struct!.ddosEntriesTooMany),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_entry_add_to_bgp_failure: {
      value: cdktf.numberToHclTerraform(struct!.ddosEntryAddToBgpFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_entry_remove_from_bgp_failure: {
      value: cdktf.numberToHclTerraform(struct!.ddosEntryRemoveFromBgpFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ddos_packet_dropped: {
      value: cdktf.numberToHclTerraform(struct!.ddosPacketDropped),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ddosEntriesTooMany !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosEntriesTooMany = this._ddosEntriesTooMany;
    }
    if (this._ddosEntryAddToBgpFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosEntryAddToBgpFailure = this._ddosEntryAddToBgpFailure;
    }
    if (this._ddosEntryRemoveFromBgpFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosEntryRemoveFromBgpFailure = this._ddosEntryRemoveFromBgpFailure;
    }
    if (this._ddosPacketDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.ddosPacketDropped = this._ddosPacketDropped;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
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

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ddosEntriesTooMany = undefined;
      this._ddosEntryAddToBgpFailure = undefined;
      this._ddosEntryRemoveFromBgpFailure = undefined;
      this._ddosPacketDropped = undefined;
      this._duration = undefined;
      this._thresholdExceededBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ddosEntriesTooMany = value.ddosEntriesTooMany;
      this._ddosEntryAddToBgpFailure = value.ddosEntryAddToBgpFailure;
      this._ddosEntryRemoveFromBgpFailure = value.ddosEntryRemoveFromBgpFailure;
      this._ddosPacketDropped = value.ddosPacketDropped;
      this._duration = value.duration;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._uuid = value.uuid;
    }
  }

  // ddos_entries_too_many - computed: false, optional: true, required: false
  private _ddosEntriesTooMany?: number; 
  public get ddosEntriesTooMany() {
    return this.getNumberAttribute('ddos_entries_too_many');
  }
  public set ddosEntriesTooMany(value: number) {
    this._ddosEntriesTooMany = value;
  }
  public resetDdosEntriesTooMany() {
    this._ddosEntriesTooMany = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosEntriesTooManyInput() {
    return this._ddosEntriesTooMany;
  }

  // ddos_entry_add_to_bgp_failure - computed: false, optional: true, required: false
  private _ddosEntryAddToBgpFailure?: number; 
  public get ddosEntryAddToBgpFailure() {
    return this.getNumberAttribute('ddos_entry_add_to_bgp_failure');
  }
  public set ddosEntryAddToBgpFailure(value: number) {
    this._ddosEntryAddToBgpFailure = value;
  }
  public resetDdosEntryAddToBgpFailure() {
    this._ddosEntryAddToBgpFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosEntryAddToBgpFailureInput() {
    return this._ddosEntryAddToBgpFailure;
  }

  // ddos_entry_remove_from_bgp_failure - computed: false, optional: true, required: false
  private _ddosEntryRemoveFromBgpFailure?: number; 
  public get ddosEntryRemoveFromBgpFailure() {
    return this.getNumberAttribute('ddos_entry_remove_from_bgp_failure');
  }
  public set ddosEntryRemoveFromBgpFailure(value: number) {
    this._ddosEntryRemoveFromBgpFailure = value;
  }
  public resetDdosEntryRemoveFromBgpFailure() {
    this._ddosEntryRemoveFromBgpFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosEntryRemoveFromBgpFailureInput() {
    return this._ddosEntryRemoveFromBgpFailure;
  }

  // ddos_packet_dropped - computed: false, optional: true, required: false
  private _ddosPacketDropped?: number; 
  public get ddosPacketDropped() {
    return this.getNumberAttribute('ddos_packet_dropped');
  }
  public set ddosPacketDropped(value: number) {
    this._ddosPacketDropped = value;
  }
  public resetDdosPacketDropped() {
    this._ddosPacketDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosPacketDroppedInput() {
    return this._ddosPacketDropped;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_ddos_protection',
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
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsRateA) {
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
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwDdosProtectionTriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
