// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#template_name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#template_name}
  */
  readonly templateName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for Node alloc failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#ip_node_alloc_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#ip_node_alloc_failure}
  */
  readonly ipNodeAllocFailure?: number;
  /**
  * Enable automatic packet-capture for Other block alloc failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#ip_other_block_alloc_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#ip_other_block_alloc_failure}
  */
  readonly ipOtherBlockAllocFailure?: number;
  /**
  * Enable automatic packet-capture for Port block alloc failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#ip_port_block_alloc_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#ip_port_block_alloc_failure}
  */
  readonly ipPortBlockAllocFailure?: number;
  /**
  * Enable automatic packet-capture for L3 Entry BGP add failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#l3_entry_add_to_bgp_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#l3_entry_add_to_bgp_failure}
  */
  readonly l3EntryAddToBgpFailure?: number;
  /**
  * Enable automatic packet-capture for L3 entry HW add failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#l3_entry_add_to_hw_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#l3_entry_add_to_hw_failure}
  */
  readonly l3EntryAddToHwFailure?: number;
  /**
  * Enable automatic packet-capture for L3 entry HW del failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#l3_entry_del_to_hw_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#l3_entry_del_to_hw_failure}
  */
  readonly l3EntryDelToHwFailure?: number;
  /**
  * Enable automatic packet-capture for L3 Entry Drop due to HW Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#l3_entry_drop_max_hw_exceeded VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#l3_entry_drop_max_hw_exceeded}
  */
  readonly l3EntryDropMaxHwExceeded?: number;
  /**
  * Enable automatic packet-capture for L3 Entry match drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#l3_entry_match_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#l3_entry_match_drop}
  */
  readonly l3EntryMatchDrop?: number;
  /**
  * Enable automatic packet-capture for L3 HW entry match drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#l3_entry_match_drop_hw VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#l3_entry_match_drop_hw}
  */
  readonly l3EntryMatchDropHw?: number;
  /**
  * Enable automatic packet-capture for L3 entry BGP remove failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#l3_entry_remove_from_bgp_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#l3_entry_remove_from_bgp_failure}
  */
  readonly l3EntryRemoveFromBgpFailure?: number;
  /**
  * Enable automatic packet-capture for L4 entry HW add failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#l4_entry_add_to_hw_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#l4_entry_add_to_hw_failure}
  */
  readonly l4EntryAddToHwFailure?: number;
  /**
  * Enable automatic packet-capture for L4 entry HW del failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#l4_entry_del_to_hw_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#l4_entry_del_to_hw_failure}
  */
  readonly l4EntryDelToHwFailure?: number;
  /**
  * Enable automatic packet-capture for L4 Entry Drop due to HW Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#l4_entry_drop_max_hw_exceeded VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#l4_entry_drop_max_hw_exceeded}
  */
  readonly l4EntryDropMaxHwExceeded?: number;
  /**
  * Enable automatic packet-capture for L4 Entry list alloc failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#l4_entry_list_alloc_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#l4_entry_list_alloc_failure}
  */
  readonly l4EntryListAllocFailure?: number;
  /**
  * Enable automatic packet-capture for L4 Entry match drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#l4_entry_match_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#l4_entry_match_drop}
  */
  readonly l4EntryMatchDrop?: number;
  /**
  * Enable automatic packet-capture for L4 HW Entry match drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#l4_entry_match_drop_hw VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#l4_entry_match_drop_hw}
  */
  readonly l4EntryMatchDropHw?: number;
  /**
  * Enable automatic packet-capture for SYN cookie verification failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#syn_cookie_verification_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#syn_cookie_verification_failed}
  */
  readonly synCookieVerificationFailed?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_node_alloc_failure: cdktf.numberToTerraform(struct!.ipNodeAllocFailure),
    ip_other_block_alloc_failure: cdktf.numberToTerraform(struct!.ipOtherBlockAllocFailure),
    ip_port_block_alloc_failure: cdktf.numberToTerraform(struct!.ipPortBlockAllocFailure),
    l3_entry_add_to_bgp_failure: cdktf.numberToTerraform(struct!.l3EntryAddToBgpFailure),
    l3_entry_add_to_hw_failure: cdktf.numberToTerraform(struct!.l3EntryAddToHwFailure),
    l3_entry_del_to_hw_failure: cdktf.numberToTerraform(struct!.l3EntryDelToHwFailure),
    l3_entry_drop_max_hw_exceeded: cdktf.numberToTerraform(struct!.l3EntryDropMaxHwExceeded),
    l3_entry_match_drop: cdktf.numberToTerraform(struct!.l3EntryMatchDrop),
    l3_entry_match_drop_hw: cdktf.numberToTerraform(struct!.l3EntryMatchDropHw),
    l3_entry_remove_from_bgp_failure: cdktf.numberToTerraform(struct!.l3EntryRemoveFromBgpFailure),
    l4_entry_add_to_hw_failure: cdktf.numberToTerraform(struct!.l4EntryAddToHwFailure),
    l4_entry_del_to_hw_failure: cdktf.numberToTerraform(struct!.l4EntryDelToHwFailure),
    l4_entry_drop_max_hw_exceeded: cdktf.numberToTerraform(struct!.l4EntryDropMaxHwExceeded),
    l4_entry_list_alloc_failure: cdktf.numberToTerraform(struct!.l4EntryListAllocFailure),
    l4_entry_match_drop: cdktf.numberToTerraform(struct!.l4EntryMatchDrop),
    l4_entry_match_drop_hw: cdktf.numberToTerraform(struct!.l4EntryMatchDropHw),
    syn_cookie_verification_failed: cdktf.numberToTerraform(struct!.synCookieVerificationFailed),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip_node_alloc_failure: {
      value: cdktf.numberToHclTerraform(struct!.ipNodeAllocFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_other_block_alloc_failure: {
      value: cdktf.numberToHclTerraform(struct!.ipOtherBlockAllocFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_port_block_alloc_failure: {
      value: cdktf.numberToHclTerraform(struct!.ipPortBlockAllocFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_entry_add_to_bgp_failure: {
      value: cdktf.numberToHclTerraform(struct!.l3EntryAddToBgpFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_entry_add_to_hw_failure: {
      value: cdktf.numberToHclTerraform(struct!.l3EntryAddToHwFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_entry_del_to_hw_failure: {
      value: cdktf.numberToHclTerraform(struct!.l3EntryDelToHwFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_entry_drop_max_hw_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.l3EntryDropMaxHwExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_entry_match_drop: {
      value: cdktf.numberToHclTerraform(struct!.l3EntryMatchDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_entry_match_drop_hw: {
      value: cdktf.numberToHclTerraform(struct!.l3EntryMatchDropHw),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_entry_remove_from_bgp_failure: {
      value: cdktf.numberToHclTerraform(struct!.l3EntryRemoveFromBgpFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_entry_add_to_hw_failure: {
      value: cdktf.numberToHclTerraform(struct!.l4EntryAddToHwFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_entry_del_to_hw_failure: {
      value: cdktf.numberToHclTerraform(struct!.l4EntryDelToHwFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_entry_drop_max_hw_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.l4EntryDropMaxHwExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_entry_list_alloc_failure: {
      value: cdktf.numberToHclTerraform(struct!.l4EntryListAllocFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_entry_match_drop: {
      value: cdktf.numberToHclTerraform(struct!.l4EntryMatchDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_entry_match_drop_hw: {
      value: cdktf.numberToHclTerraform(struct!.l4EntryMatchDropHw),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_cookie_verification_failed: {
      value: cdktf.numberToHclTerraform(struct!.synCookieVerificationFailed),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipNodeAllocFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNodeAllocFailure = this._ipNodeAllocFailure;
    }
    if (this._ipOtherBlockAllocFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipOtherBlockAllocFailure = this._ipOtherBlockAllocFailure;
    }
    if (this._ipPortBlockAllocFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPortBlockAllocFailure = this._ipPortBlockAllocFailure;
    }
    if (this._l3EntryAddToBgpFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3EntryAddToBgpFailure = this._l3EntryAddToBgpFailure;
    }
    if (this._l3EntryAddToHwFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3EntryAddToHwFailure = this._l3EntryAddToHwFailure;
    }
    if (this._l3EntryDelToHwFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3EntryDelToHwFailure = this._l3EntryDelToHwFailure;
    }
    if (this._l3EntryDropMaxHwExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3EntryDropMaxHwExceeded = this._l3EntryDropMaxHwExceeded;
    }
    if (this._l3EntryMatchDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3EntryMatchDrop = this._l3EntryMatchDrop;
    }
    if (this._l3EntryMatchDropHw !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3EntryMatchDropHw = this._l3EntryMatchDropHw;
    }
    if (this._l3EntryRemoveFromBgpFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3EntryRemoveFromBgpFailure = this._l3EntryRemoveFromBgpFailure;
    }
    if (this._l4EntryAddToHwFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4EntryAddToHwFailure = this._l4EntryAddToHwFailure;
    }
    if (this._l4EntryDelToHwFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4EntryDelToHwFailure = this._l4EntryDelToHwFailure;
    }
    if (this._l4EntryDropMaxHwExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4EntryDropMaxHwExceeded = this._l4EntryDropMaxHwExceeded;
    }
    if (this._l4EntryListAllocFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4EntryListAllocFailure = this._l4EntryListAllocFailure;
    }
    if (this._l4EntryMatchDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4EntryMatchDrop = this._l4EntryMatchDrop;
    }
    if (this._l4EntryMatchDropHw !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4EntryMatchDropHw = this._l4EntryMatchDropHw;
    }
    if (this._synCookieVerificationFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.synCookieVerificationFailed = this._synCookieVerificationFailed;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ipNodeAllocFailure = undefined;
      this._ipOtherBlockAllocFailure = undefined;
      this._ipPortBlockAllocFailure = undefined;
      this._l3EntryAddToBgpFailure = undefined;
      this._l3EntryAddToHwFailure = undefined;
      this._l3EntryDelToHwFailure = undefined;
      this._l3EntryDropMaxHwExceeded = undefined;
      this._l3EntryMatchDrop = undefined;
      this._l3EntryMatchDropHw = undefined;
      this._l3EntryRemoveFromBgpFailure = undefined;
      this._l4EntryAddToHwFailure = undefined;
      this._l4EntryDelToHwFailure = undefined;
      this._l4EntryDropMaxHwExceeded = undefined;
      this._l4EntryListAllocFailure = undefined;
      this._l4EntryMatchDrop = undefined;
      this._l4EntryMatchDropHw = undefined;
      this._synCookieVerificationFailed = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ipNodeAllocFailure = value.ipNodeAllocFailure;
      this._ipOtherBlockAllocFailure = value.ipOtherBlockAllocFailure;
      this._ipPortBlockAllocFailure = value.ipPortBlockAllocFailure;
      this._l3EntryAddToBgpFailure = value.l3EntryAddToBgpFailure;
      this._l3EntryAddToHwFailure = value.l3EntryAddToHwFailure;
      this._l3EntryDelToHwFailure = value.l3EntryDelToHwFailure;
      this._l3EntryDropMaxHwExceeded = value.l3EntryDropMaxHwExceeded;
      this._l3EntryMatchDrop = value.l3EntryMatchDrop;
      this._l3EntryMatchDropHw = value.l3EntryMatchDropHw;
      this._l3EntryRemoveFromBgpFailure = value.l3EntryRemoveFromBgpFailure;
      this._l4EntryAddToHwFailure = value.l4EntryAddToHwFailure;
      this._l4EntryDelToHwFailure = value.l4EntryDelToHwFailure;
      this._l4EntryDropMaxHwExceeded = value.l4EntryDropMaxHwExceeded;
      this._l4EntryListAllocFailure = value.l4EntryListAllocFailure;
      this._l4EntryMatchDrop = value.l4EntryMatchDrop;
      this._l4EntryMatchDropHw = value.l4EntryMatchDropHw;
      this._synCookieVerificationFailed = value.synCookieVerificationFailed;
      this._uuid = value.uuid;
    }
  }

  // ip_node_alloc_failure - computed: false, optional: true, required: false
  private _ipNodeAllocFailure?: number; 
  public get ipNodeAllocFailure() {
    return this.getNumberAttribute('ip_node_alloc_failure');
  }
  public set ipNodeAllocFailure(value: number) {
    this._ipNodeAllocFailure = value;
  }
  public resetIpNodeAllocFailure() {
    this._ipNodeAllocFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNodeAllocFailureInput() {
    return this._ipNodeAllocFailure;
  }

  // ip_other_block_alloc_failure - computed: false, optional: true, required: false
  private _ipOtherBlockAllocFailure?: number; 
  public get ipOtherBlockAllocFailure() {
    return this.getNumberAttribute('ip_other_block_alloc_failure');
  }
  public set ipOtherBlockAllocFailure(value: number) {
    this._ipOtherBlockAllocFailure = value;
  }
  public resetIpOtherBlockAllocFailure() {
    this._ipOtherBlockAllocFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipOtherBlockAllocFailureInput() {
    return this._ipOtherBlockAllocFailure;
  }

  // ip_port_block_alloc_failure - computed: false, optional: true, required: false
  private _ipPortBlockAllocFailure?: number; 
  public get ipPortBlockAllocFailure() {
    return this.getNumberAttribute('ip_port_block_alloc_failure');
  }
  public set ipPortBlockAllocFailure(value: number) {
    this._ipPortBlockAllocFailure = value;
  }
  public resetIpPortBlockAllocFailure() {
    this._ipPortBlockAllocFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPortBlockAllocFailureInput() {
    return this._ipPortBlockAllocFailure;
  }

  // l3_entry_add_to_bgp_failure - computed: false, optional: true, required: false
  private _l3EntryAddToBgpFailure?: number; 
  public get l3EntryAddToBgpFailure() {
    return this.getNumberAttribute('l3_entry_add_to_bgp_failure');
  }
  public set l3EntryAddToBgpFailure(value: number) {
    this._l3EntryAddToBgpFailure = value;
  }
  public resetL3EntryAddToBgpFailure() {
    this._l3EntryAddToBgpFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3EntryAddToBgpFailureInput() {
    return this._l3EntryAddToBgpFailure;
  }

  // l3_entry_add_to_hw_failure - computed: false, optional: true, required: false
  private _l3EntryAddToHwFailure?: number; 
  public get l3EntryAddToHwFailure() {
    return this.getNumberAttribute('l3_entry_add_to_hw_failure');
  }
  public set l3EntryAddToHwFailure(value: number) {
    this._l3EntryAddToHwFailure = value;
  }
  public resetL3EntryAddToHwFailure() {
    this._l3EntryAddToHwFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3EntryAddToHwFailureInput() {
    return this._l3EntryAddToHwFailure;
  }

  // l3_entry_del_to_hw_failure - computed: false, optional: true, required: false
  private _l3EntryDelToHwFailure?: number; 
  public get l3EntryDelToHwFailure() {
    return this.getNumberAttribute('l3_entry_del_to_hw_failure');
  }
  public set l3EntryDelToHwFailure(value: number) {
    this._l3EntryDelToHwFailure = value;
  }
  public resetL3EntryDelToHwFailure() {
    this._l3EntryDelToHwFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3EntryDelToHwFailureInput() {
    return this._l3EntryDelToHwFailure;
  }

  // l3_entry_drop_max_hw_exceeded - computed: false, optional: true, required: false
  private _l3EntryDropMaxHwExceeded?: number; 
  public get l3EntryDropMaxHwExceeded() {
    return this.getNumberAttribute('l3_entry_drop_max_hw_exceeded');
  }
  public set l3EntryDropMaxHwExceeded(value: number) {
    this._l3EntryDropMaxHwExceeded = value;
  }
  public resetL3EntryDropMaxHwExceeded() {
    this._l3EntryDropMaxHwExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3EntryDropMaxHwExceededInput() {
    return this._l3EntryDropMaxHwExceeded;
  }

  // l3_entry_match_drop - computed: false, optional: true, required: false
  private _l3EntryMatchDrop?: number; 
  public get l3EntryMatchDrop() {
    return this.getNumberAttribute('l3_entry_match_drop');
  }
  public set l3EntryMatchDrop(value: number) {
    this._l3EntryMatchDrop = value;
  }
  public resetL3EntryMatchDrop() {
    this._l3EntryMatchDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3EntryMatchDropInput() {
    return this._l3EntryMatchDrop;
  }

  // l3_entry_match_drop_hw - computed: false, optional: true, required: false
  private _l3EntryMatchDropHw?: number; 
  public get l3EntryMatchDropHw() {
    return this.getNumberAttribute('l3_entry_match_drop_hw');
  }
  public set l3EntryMatchDropHw(value: number) {
    this._l3EntryMatchDropHw = value;
  }
  public resetL3EntryMatchDropHw() {
    this._l3EntryMatchDropHw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3EntryMatchDropHwInput() {
    return this._l3EntryMatchDropHw;
  }

  // l3_entry_remove_from_bgp_failure - computed: false, optional: true, required: false
  private _l3EntryRemoveFromBgpFailure?: number; 
  public get l3EntryRemoveFromBgpFailure() {
    return this.getNumberAttribute('l3_entry_remove_from_bgp_failure');
  }
  public set l3EntryRemoveFromBgpFailure(value: number) {
    this._l3EntryRemoveFromBgpFailure = value;
  }
  public resetL3EntryRemoveFromBgpFailure() {
    this._l3EntryRemoveFromBgpFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3EntryRemoveFromBgpFailureInput() {
    return this._l3EntryRemoveFromBgpFailure;
  }

  // l4_entry_add_to_hw_failure - computed: false, optional: true, required: false
  private _l4EntryAddToHwFailure?: number; 
  public get l4EntryAddToHwFailure() {
    return this.getNumberAttribute('l4_entry_add_to_hw_failure');
  }
  public set l4EntryAddToHwFailure(value: number) {
    this._l4EntryAddToHwFailure = value;
  }
  public resetL4EntryAddToHwFailure() {
    this._l4EntryAddToHwFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4EntryAddToHwFailureInput() {
    return this._l4EntryAddToHwFailure;
  }

  // l4_entry_del_to_hw_failure - computed: false, optional: true, required: false
  private _l4EntryDelToHwFailure?: number; 
  public get l4EntryDelToHwFailure() {
    return this.getNumberAttribute('l4_entry_del_to_hw_failure');
  }
  public set l4EntryDelToHwFailure(value: number) {
    this._l4EntryDelToHwFailure = value;
  }
  public resetL4EntryDelToHwFailure() {
    this._l4EntryDelToHwFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4EntryDelToHwFailureInput() {
    return this._l4EntryDelToHwFailure;
  }

  // l4_entry_drop_max_hw_exceeded - computed: false, optional: true, required: false
  private _l4EntryDropMaxHwExceeded?: number; 
  public get l4EntryDropMaxHwExceeded() {
    return this.getNumberAttribute('l4_entry_drop_max_hw_exceeded');
  }
  public set l4EntryDropMaxHwExceeded(value: number) {
    this._l4EntryDropMaxHwExceeded = value;
  }
  public resetL4EntryDropMaxHwExceeded() {
    this._l4EntryDropMaxHwExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4EntryDropMaxHwExceededInput() {
    return this._l4EntryDropMaxHwExceeded;
  }

  // l4_entry_list_alloc_failure - computed: false, optional: true, required: false
  private _l4EntryListAllocFailure?: number; 
  public get l4EntryListAllocFailure() {
    return this.getNumberAttribute('l4_entry_list_alloc_failure');
  }
  public set l4EntryListAllocFailure(value: number) {
    this._l4EntryListAllocFailure = value;
  }
  public resetL4EntryListAllocFailure() {
    this._l4EntryListAllocFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4EntryListAllocFailureInput() {
    return this._l4EntryListAllocFailure;
  }

  // l4_entry_match_drop - computed: false, optional: true, required: false
  private _l4EntryMatchDrop?: number; 
  public get l4EntryMatchDrop() {
    return this.getNumberAttribute('l4_entry_match_drop');
  }
  public set l4EntryMatchDrop(value: number) {
    this._l4EntryMatchDrop = value;
  }
  public resetL4EntryMatchDrop() {
    this._l4EntryMatchDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4EntryMatchDropInput() {
    return this._l4EntryMatchDrop;
  }

  // l4_entry_match_drop_hw - computed: false, optional: true, required: false
  private _l4EntryMatchDropHw?: number; 
  public get l4EntryMatchDropHw() {
    return this.getNumberAttribute('l4_entry_match_drop_hw');
  }
  public set l4EntryMatchDropHw(value: number) {
    this._l4EntryMatchDropHw = value;
  }
  public resetL4EntryMatchDropHw() {
    this._l4EntryMatchDropHw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4EntryMatchDropHwInput() {
    return this._l4EntryMatchDropHw;
  }

  // syn_cookie_verification_failed - computed: false, optional: true, required: false
  private _synCookieVerificationFailed?: number; 
  public get synCookieVerificationFailed() {
    return this.getNumberAttribute('syn_cookie_verification_failed');
  }
  public set synCookieVerificationFailed(value: number) {
    this._synCookieVerificationFailed = value;
  }
  public resetSynCookieVerificationFailed() {
    this._synCookieVerificationFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookieVerificationFailedInput() {
    return this._synCookieVerificationFailed;
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
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsRateA {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Node alloc failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#ip_node_alloc_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#ip_node_alloc_failure}
  */
  readonly ipNodeAllocFailure?: number;
  /**
  * Enable automatic packet-capture for Other block alloc failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#ip_other_block_alloc_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#ip_other_block_alloc_failure}
  */
  readonly ipOtherBlockAllocFailure?: number;
  /**
  * Enable automatic packet-capture for Port block alloc failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#ip_port_block_alloc_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#ip_port_block_alloc_failure}
  */
  readonly ipPortBlockAllocFailure?: number;
  /**
  * Enable automatic packet-capture for L3 Entry BGP add failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#l3_entry_add_to_bgp_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#l3_entry_add_to_bgp_failure}
  */
  readonly l3EntryAddToBgpFailure?: number;
  /**
  * Enable automatic packet-capture for L3 entry HW add failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#l3_entry_add_to_hw_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#l3_entry_add_to_hw_failure}
  */
  readonly l3EntryAddToHwFailure?: number;
  /**
  * Enable automatic packet-capture for L3 entry HW del failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#l3_entry_del_to_hw_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#l3_entry_del_to_hw_failure}
  */
  readonly l3EntryDelToHwFailure?: number;
  /**
  * Enable automatic packet-capture for L3 Entry Drop due to HW Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#l3_entry_drop_max_hw_exceeded VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#l3_entry_drop_max_hw_exceeded}
  */
  readonly l3EntryDropMaxHwExceeded?: number;
  /**
  * Enable automatic packet-capture for L3 Entry match drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#l3_entry_match_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#l3_entry_match_drop}
  */
  readonly l3EntryMatchDrop?: number;
  /**
  * Enable automatic packet-capture for L3 HW entry match drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#l3_entry_match_drop_hw VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#l3_entry_match_drop_hw}
  */
  readonly l3EntryMatchDropHw?: number;
  /**
  * Enable automatic packet-capture for L3 entry BGP remove failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#l3_entry_remove_from_bgp_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#l3_entry_remove_from_bgp_failure}
  */
  readonly l3EntryRemoveFromBgpFailure?: number;
  /**
  * Enable automatic packet-capture for L4 entry HW add failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#l4_entry_add_to_hw_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#l4_entry_add_to_hw_failure}
  */
  readonly l4EntryAddToHwFailure?: number;
  /**
  * Enable automatic packet-capture for L4 entry HW del failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#l4_entry_del_to_hw_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#l4_entry_del_to_hw_failure}
  */
  readonly l4EntryDelToHwFailure?: number;
  /**
  * Enable automatic packet-capture for L4 Entry Drop due to HW Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#l4_entry_drop_max_hw_exceeded VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#l4_entry_drop_max_hw_exceeded}
  */
  readonly l4EntryDropMaxHwExceeded?: number;
  /**
  * Enable automatic packet-capture for L4 Entry list alloc failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#l4_entry_list_alloc_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#l4_entry_list_alloc_failure}
  */
  readonly l4EntryListAllocFailure?: number;
  /**
  * Enable automatic packet-capture for L4 Entry match drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#l4_entry_match_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#l4_entry_match_drop}
  */
  readonly l4EntryMatchDrop?: number;
  /**
  * Enable automatic packet-capture for L4 HW Entry match drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#l4_entry_match_drop_hw VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#l4_entry_match_drop_hw}
  */
  readonly l4EntryMatchDropHw?: number;
  /**
  * Enable automatic packet-capture for SYN cookie verification failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#syn_cookie_verification_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#syn_cookie_verification_failed}
  */
  readonly synCookieVerificationFailed?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    ip_node_alloc_failure: cdktf.numberToTerraform(struct!.ipNodeAllocFailure),
    ip_other_block_alloc_failure: cdktf.numberToTerraform(struct!.ipOtherBlockAllocFailure),
    ip_port_block_alloc_failure: cdktf.numberToTerraform(struct!.ipPortBlockAllocFailure),
    l3_entry_add_to_bgp_failure: cdktf.numberToTerraform(struct!.l3EntryAddToBgpFailure),
    l3_entry_add_to_hw_failure: cdktf.numberToTerraform(struct!.l3EntryAddToHwFailure),
    l3_entry_del_to_hw_failure: cdktf.numberToTerraform(struct!.l3EntryDelToHwFailure),
    l3_entry_drop_max_hw_exceeded: cdktf.numberToTerraform(struct!.l3EntryDropMaxHwExceeded),
    l3_entry_match_drop: cdktf.numberToTerraform(struct!.l3EntryMatchDrop),
    l3_entry_match_drop_hw: cdktf.numberToTerraform(struct!.l3EntryMatchDropHw),
    l3_entry_remove_from_bgp_failure: cdktf.numberToTerraform(struct!.l3EntryRemoveFromBgpFailure),
    l4_entry_add_to_hw_failure: cdktf.numberToTerraform(struct!.l4EntryAddToHwFailure),
    l4_entry_del_to_hw_failure: cdktf.numberToTerraform(struct!.l4EntryDelToHwFailure),
    l4_entry_drop_max_hw_exceeded: cdktf.numberToTerraform(struct!.l4EntryDropMaxHwExceeded),
    l4_entry_list_alloc_failure: cdktf.numberToTerraform(struct!.l4EntryListAllocFailure),
    l4_entry_match_drop: cdktf.numberToTerraform(struct!.l4EntryMatchDrop),
    l4_entry_match_drop_hw: cdktf.numberToTerraform(struct!.l4EntryMatchDropHw),
    syn_cookie_verification_failed: cdktf.numberToTerraform(struct!.synCookieVerificationFailed),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsRateA): any {
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
    ip_node_alloc_failure: {
      value: cdktf.numberToHclTerraform(struct!.ipNodeAllocFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_other_block_alloc_failure: {
      value: cdktf.numberToHclTerraform(struct!.ipOtherBlockAllocFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_port_block_alloc_failure: {
      value: cdktf.numberToHclTerraform(struct!.ipPortBlockAllocFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_entry_add_to_bgp_failure: {
      value: cdktf.numberToHclTerraform(struct!.l3EntryAddToBgpFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_entry_add_to_hw_failure: {
      value: cdktf.numberToHclTerraform(struct!.l3EntryAddToHwFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_entry_del_to_hw_failure: {
      value: cdktf.numberToHclTerraform(struct!.l3EntryDelToHwFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_entry_drop_max_hw_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.l3EntryDropMaxHwExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_entry_match_drop: {
      value: cdktf.numberToHclTerraform(struct!.l3EntryMatchDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_entry_match_drop_hw: {
      value: cdktf.numberToHclTerraform(struct!.l3EntryMatchDropHw),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l3_entry_remove_from_bgp_failure: {
      value: cdktf.numberToHclTerraform(struct!.l3EntryRemoveFromBgpFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_entry_add_to_hw_failure: {
      value: cdktf.numberToHclTerraform(struct!.l4EntryAddToHwFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_entry_del_to_hw_failure: {
      value: cdktf.numberToHclTerraform(struct!.l4EntryDelToHwFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_entry_drop_max_hw_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.l4EntryDropMaxHwExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_entry_list_alloc_failure: {
      value: cdktf.numberToHclTerraform(struct!.l4EntryListAllocFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_entry_match_drop: {
      value: cdktf.numberToHclTerraform(struct!.l4EntryMatchDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    l4_entry_match_drop_hw: {
      value: cdktf.numberToHclTerraform(struct!.l4EntryMatchDropHw),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    syn_cookie_verification_failed: {
      value: cdktf.numberToHclTerraform(struct!.synCookieVerificationFailed),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._ipNodeAllocFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipNodeAllocFailure = this._ipNodeAllocFailure;
    }
    if (this._ipOtherBlockAllocFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipOtherBlockAllocFailure = this._ipOtherBlockAllocFailure;
    }
    if (this._ipPortBlockAllocFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipPortBlockAllocFailure = this._ipPortBlockAllocFailure;
    }
    if (this._l3EntryAddToBgpFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3EntryAddToBgpFailure = this._l3EntryAddToBgpFailure;
    }
    if (this._l3EntryAddToHwFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3EntryAddToHwFailure = this._l3EntryAddToHwFailure;
    }
    if (this._l3EntryDelToHwFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3EntryDelToHwFailure = this._l3EntryDelToHwFailure;
    }
    if (this._l3EntryDropMaxHwExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3EntryDropMaxHwExceeded = this._l3EntryDropMaxHwExceeded;
    }
    if (this._l3EntryMatchDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3EntryMatchDrop = this._l3EntryMatchDrop;
    }
    if (this._l3EntryMatchDropHw !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3EntryMatchDropHw = this._l3EntryMatchDropHw;
    }
    if (this._l3EntryRemoveFromBgpFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.l3EntryRemoveFromBgpFailure = this._l3EntryRemoveFromBgpFailure;
    }
    if (this._l4EntryAddToHwFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4EntryAddToHwFailure = this._l4EntryAddToHwFailure;
    }
    if (this._l4EntryDelToHwFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4EntryDelToHwFailure = this._l4EntryDelToHwFailure;
    }
    if (this._l4EntryDropMaxHwExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4EntryDropMaxHwExceeded = this._l4EntryDropMaxHwExceeded;
    }
    if (this._l4EntryListAllocFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4EntryListAllocFailure = this._l4EntryListAllocFailure;
    }
    if (this._l4EntryMatchDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4EntryMatchDrop = this._l4EntryMatchDrop;
    }
    if (this._l4EntryMatchDropHw !== undefined) {
      hasAnyValues = true;
      internalValueResult.l4EntryMatchDropHw = this._l4EntryMatchDropHw;
    }
    if (this._synCookieVerificationFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.synCookieVerificationFailed = this._synCookieVerificationFailed;
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

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._ipNodeAllocFailure = undefined;
      this._ipOtherBlockAllocFailure = undefined;
      this._ipPortBlockAllocFailure = undefined;
      this._l3EntryAddToBgpFailure = undefined;
      this._l3EntryAddToHwFailure = undefined;
      this._l3EntryDelToHwFailure = undefined;
      this._l3EntryDropMaxHwExceeded = undefined;
      this._l3EntryMatchDrop = undefined;
      this._l3EntryMatchDropHw = undefined;
      this._l3EntryRemoveFromBgpFailure = undefined;
      this._l4EntryAddToHwFailure = undefined;
      this._l4EntryDelToHwFailure = undefined;
      this._l4EntryDropMaxHwExceeded = undefined;
      this._l4EntryListAllocFailure = undefined;
      this._l4EntryMatchDrop = undefined;
      this._l4EntryMatchDropHw = undefined;
      this._synCookieVerificationFailed = undefined;
      this._thresholdExceededBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._ipNodeAllocFailure = value.ipNodeAllocFailure;
      this._ipOtherBlockAllocFailure = value.ipOtherBlockAllocFailure;
      this._ipPortBlockAllocFailure = value.ipPortBlockAllocFailure;
      this._l3EntryAddToBgpFailure = value.l3EntryAddToBgpFailure;
      this._l3EntryAddToHwFailure = value.l3EntryAddToHwFailure;
      this._l3EntryDelToHwFailure = value.l3EntryDelToHwFailure;
      this._l3EntryDropMaxHwExceeded = value.l3EntryDropMaxHwExceeded;
      this._l3EntryMatchDrop = value.l3EntryMatchDrop;
      this._l3EntryMatchDropHw = value.l3EntryMatchDropHw;
      this._l3EntryRemoveFromBgpFailure = value.l3EntryRemoveFromBgpFailure;
      this._l4EntryAddToHwFailure = value.l4EntryAddToHwFailure;
      this._l4EntryDelToHwFailure = value.l4EntryDelToHwFailure;
      this._l4EntryDropMaxHwExceeded = value.l4EntryDropMaxHwExceeded;
      this._l4EntryListAllocFailure = value.l4EntryListAllocFailure;
      this._l4EntryMatchDrop = value.l4EntryMatchDrop;
      this._l4EntryMatchDropHw = value.l4EntryMatchDropHw;
      this._synCookieVerificationFailed = value.synCookieVerificationFailed;
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

  // ip_node_alloc_failure - computed: false, optional: true, required: false
  private _ipNodeAllocFailure?: number; 
  public get ipNodeAllocFailure() {
    return this.getNumberAttribute('ip_node_alloc_failure');
  }
  public set ipNodeAllocFailure(value: number) {
    this._ipNodeAllocFailure = value;
  }
  public resetIpNodeAllocFailure() {
    this._ipNodeAllocFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipNodeAllocFailureInput() {
    return this._ipNodeAllocFailure;
  }

  // ip_other_block_alloc_failure - computed: false, optional: true, required: false
  private _ipOtherBlockAllocFailure?: number; 
  public get ipOtherBlockAllocFailure() {
    return this.getNumberAttribute('ip_other_block_alloc_failure');
  }
  public set ipOtherBlockAllocFailure(value: number) {
    this._ipOtherBlockAllocFailure = value;
  }
  public resetIpOtherBlockAllocFailure() {
    this._ipOtherBlockAllocFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipOtherBlockAllocFailureInput() {
    return this._ipOtherBlockAllocFailure;
  }

  // ip_port_block_alloc_failure - computed: false, optional: true, required: false
  private _ipPortBlockAllocFailure?: number; 
  public get ipPortBlockAllocFailure() {
    return this.getNumberAttribute('ip_port_block_alloc_failure');
  }
  public set ipPortBlockAllocFailure(value: number) {
    this._ipPortBlockAllocFailure = value;
  }
  public resetIpPortBlockAllocFailure() {
    this._ipPortBlockAllocFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPortBlockAllocFailureInput() {
    return this._ipPortBlockAllocFailure;
  }

  // l3_entry_add_to_bgp_failure - computed: false, optional: true, required: false
  private _l3EntryAddToBgpFailure?: number; 
  public get l3EntryAddToBgpFailure() {
    return this.getNumberAttribute('l3_entry_add_to_bgp_failure');
  }
  public set l3EntryAddToBgpFailure(value: number) {
    this._l3EntryAddToBgpFailure = value;
  }
  public resetL3EntryAddToBgpFailure() {
    this._l3EntryAddToBgpFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3EntryAddToBgpFailureInput() {
    return this._l3EntryAddToBgpFailure;
  }

  // l3_entry_add_to_hw_failure - computed: false, optional: true, required: false
  private _l3EntryAddToHwFailure?: number; 
  public get l3EntryAddToHwFailure() {
    return this.getNumberAttribute('l3_entry_add_to_hw_failure');
  }
  public set l3EntryAddToHwFailure(value: number) {
    this._l3EntryAddToHwFailure = value;
  }
  public resetL3EntryAddToHwFailure() {
    this._l3EntryAddToHwFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3EntryAddToHwFailureInput() {
    return this._l3EntryAddToHwFailure;
  }

  // l3_entry_del_to_hw_failure - computed: false, optional: true, required: false
  private _l3EntryDelToHwFailure?: number; 
  public get l3EntryDelToHwFailure() {
    return this.getNumberAttribute('l3_entry_del_to_hw_failure');
  }
  public set l3EntryDelToHwFailure(value: number) {
    this._l3EntryDelToHwFailure = value;
  }
  public resetL3EntryDelToHwFailure() {
    this._l3EntryDelToHwFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3EntryDelToHwFailureInput() {
    return this._l3EntryDelToHwFailure;
  }

  // l3_entry_drop_max_hw_exceeded - computed: false, optional: true, required: false
  private _l3EntryDropMaxHwExceeded?: number; 
  public get l3EntryDropMaxHwExceeded() {
    return this.getNumberAttribute('l3_entry_drop_max_hw_exceeded');
  }
  public set l3EntryDropMaxHwExceeded(value: number) {
    this._l3EntryDropMaxHwExceeded = value;
  }
  public resetL3EntryDropMaxHwExceeded() {
    this._l3EntryDropMaxHwExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3EntryDropMaxHwExceededInput() {
    return this._l3EntryDropMaxHwExceeded;
  }

  // l3_entry_match_drop - computed: false, optional: true, required: false
  private _l3EntryMatchDrop?: number; 
  public get l3EntryMatchDrop() {
    return this.getNumberAttribute('l3_entry_match_drop');
  }
  public set l3EntryMatchDrop(value: number) {
    this._l3EntryMatchDrop = value;
  }
  public resetL3EntryMatchDrop() {
    this._l3EntryMatchDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3EntryMatchDropInput() {
    return this._l3EntryMatchDrop;
  }

  // l3_entry_match_drop_hw - computed: false, optional: true, required: false
  private _l3EntryMatchDropHw?: number; 
  public get l3EntryMatchDropHw() {
    return this.getNumberAttribute('l3_entry_match_drop_hw');
  }
  public set l3EntryMatchDropHw(value: number) {
    this._l3EntryMatchDropHw = value;
  }
  public resetL3EntryMatchDropHw() {
    this._l3EntryMatchDropHw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3EntryMatchDropHwInput() {
    return this._l3EntryMatchDropHw;
  }

  // l3_entry_remove_from_bgp_failure - computed: false, optional: true, required: false
  private _l3EntryRemoveFromBgpFailure?: number; 
  public get l3EntryRemoveFromBgpFailure() {
    return this.getNumberAttribute('l3_entry_remove_from_bgp_failure');
  }
  public set l3EntryRemoveFromBgpFailure(value: number) {
    this._l3EntryRemoveFromBgpFailure = value;
  }
  public resetL3EntryRemoveFromBgpFailure() {
    this._l3EntryRemoveFromBgpFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3EntryRemoveFromBgpFailureInput() {
    return this._l3EntryRemoveFromBgpFailure;
  }

  // l4_entry_add_to_hw_failure - computed: false, optional: true, required: false
  private _l4EntryAddToHwFailure?: number; 
  public get l4EntryAddToHwFailure() {
    return this.getNumberAttribute('l4_entry_add_to_hw_failure');
  }
  public set l4EntryAddToHwFailure(value: number) {
    this._l4EntryAddToHwFailure = value;
  }
  public resetL4EntryAddToHwFailure() {
    this._l4EntryAddToHwFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4EntryAddToHwFailureInput() {
    return this._l4EntryAddToHwFailure;
  }

  // l4_entry_del_to_hw_failure - computed: false, optional: true, required: false
  private _l4EntryDelToHwFailure?: number; 
  public get l4EntryDelToHwFailure() {
    return this.getNumberAttribute('l4_entry_del_to_hw_failure');
  }
  public set l4EntryDelToHwFailure(value: number) {
    this._l4EntryDelToHwFailure = value;
  }
  public resetL4EntryDelToHwFailure() {
    this._l4EntryDelToHwFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4EntryDelToHwFailureInput() {
    return this._l4EntryDelToHwFailure;
  }

  // l4_entry_drop_max_hw_exceeded - computed: false, optional: true, required: false
  private _l4EntryDropMaxHwExceeded?: number; 
  public get l4EntryDropMaxHwExceeded() {
    return this.getNumberAttribute('l4_entry_drop_max_hw_exceeded');
  }
  public set l4EntryDropMaxHwExceeded(value: number) {
    this._l4EntryDropMaxHwExceeded = value;
  }
  public resetL4EntryDropMaxHwExceeded() {
    this._l4EntryDropMaxHwExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4EntryDropMaxHwExceededInput() {
    return this._l4EntryDropMaxHwExceeded;
  }

  // l4_entry_list_alloc_failure - computed: false, optional: true, required: false
  private _l4EntryListAllocFailure?: number; 
  public get l4EntryListAllocFailure() {
    return this.getNumberAttribute('l4_entry_list_alloc_failure');
  }
  public set l4EntryListAllocFailure(value: number) {
    this._l4EntryListAllocFailure = value;
  }
  public resetL4EntryListAllocFailure() {
    this._l4EntryListAllocFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4EntryListAllocFailureInput() {
    return this._l4EntryListAllocFailure;
  }

  // l4_entry_match_drop - computed: false, optional: true, required: false
  private _l4EntryMatchDrop?: number; 
  public get l4EntryMatchDrop() {
    return this.getNumberAttribute('l4_entry_match_drop');
  }
  public set l4EntryMatchDrop(value: number) {
    this._l4EntryMatchDrop = value;
  }
  public resetL4EntryMatchDrop() {
    this._l4EntryMatchDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4EntryMatchDropInput() {
    return this._l4EntryMatchDrop;
  }

  // l4_entry_match_drop_hw - computed: false, optional: true, required: false
  private _l4EntryMatchDropHw?: number; 
  public get l4EntryMatchDropHw() {
    return this.getNumberAttribute('l4_entry_match_drop_hw');
  }
  public set l4EntryMatchDropHw(value: number) {
    this._l4EntryMatchDropHw = value;
  }
  public resetL4EntryMatchDropHw() {
    this._l4EntryMatchDropHw = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l4EntryMatchDropHwInput() {
    return this._l4EntryMatchDropHw;
  }

  // syn_cookie_verification_failed - computed: false, optional: true, required: false
  private _synCookieVerificationFailed?: number; 
  public get synCookieVerificationFailed() {
    return this.getNumberAttribute('syn_cookie_verification_failed');
  }
  public set synCookieVerificationFailed(value: number) {
    this._synCookieVerificationFailed = value;
  }
  public resetSynCookieVerificationFailed() {
    this._synCookieVerificationFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synCookieVerificationFailedInput() {
    return this._synCookieVerificationFailed;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc',
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
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsRateA) {
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
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
