// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc_trigger_stats_inc#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Node alloc failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc_trigger_stats_inc#ip_node_alloc_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncA#ip_node_alloc_failure}
  */
  readonly ipNodeAllocFailure?: number;
  /**
  * Enable automatic packet-capture for Other block alloc failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc_trigger_stats_inc#ip_other_block_alloc_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncA#ip_other_block_alloc_failure}
  */
  readonly ipOtherBlockAllocFailure?: number;
  /**
  * Enable automatic packet-capture for Port block alloc failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc_trigger_stats_inc#ip_port_block_alloc_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncA#ip_port_block_alloc_failure}
  */
  readonly ipPortBlockAllocFailure?: number;
  /**
  * Enable automatic packet-capture for L3 Entry BGP add failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc_trigger_stats_inc#l3_entry_add_to_bgp_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncA#l3_entry_add_to_bgp_failure}
  */
  readonly l3EntryAddToBgpFailure?: number;
  /**
  * Enable automatic packet-capture for L3 entry HW add failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc_trigger_stats_inc#l3_entry_add_to_hw_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncA#l3_entry_add_to_hw_failure}
  */
  readonly l3EntryAddToHwFailure?: number;
  /**
  * Enable automatic packet-capture for L3 Entry Drop due to HW Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc_trigger_stats_inc#l3_entry_drop_max_hw_exceeded VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncA#l3_entry_drop_max_hw_exceeded}
  */
  readonly l3EntryDropMaxHwExceeded?: number;
  /**
  * Enable automatic packet-capture for L3 Entry match drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc_trigger_stats_inc#l3_entry_match_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncA#l3_entry_match_drop}
  */
  readonly l3EntryMatchDrop?: number;
  /**
  * Enable automatic packet-capture for L3 HW entry match drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc_trigger_stats_inc#l3_entry_match_drop_hw VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncA#l3_entry_match_drop_hw}
  */
  readonly l3EntryMatchDropHw?: number;
  /**
  * Enable automatic packet-capture for L3 entry BGP remove failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc_trigger_stats_inc#l3_entry_remove_from_bgp_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncA#l3_entry_remove_from_bgp_failure}
  */
  readonly l3EntryRemoveFromBgpFailure?: number;
  /**
  * Enable automatic packet-capture for L4 Entry Drop due to HW Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc_trigger_stats_inc#l4_entry_drop_max_hw_exceeded VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncA#l4_entry_drop_max_hw_exceeded}
  */
  readonly l4EntryDropMaxHwExceeded?: number;
  /**
  * Enable automatic packet-capture for L4 Entry list alloc failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc_trigger_stats_inc#l4_entry_list_alloc_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncA#l4_entry_list_alloc_failure}
  */
  readonly l4EntryListAllocFailure?: number;
  /**
  * Enable automatic packet-capture for L4 Entry match drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc_trigger_stats_inc#l4_entry_match_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncA#l4_entry_match_drop}
  */
  readonly l4EntryMatchDrop?: number;
  /**
  * Enable automatic packet-capture for L4 HW Entry match drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc_trigger_stats_inc#l4_entry_match_drop_hw VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncA#l4_entry_match_drop_hw}
  */
  readonly l4EntryMatchDropHw?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc_trigger_stats_inc#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for SYN cookie verification failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc_trigger_stats_inc#syn_cookie_verification_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncA#syn_cookie_verification_failed}
  */
  readonly synCookieVerificationFailed?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc_trigger_stats_inc#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc_trigger_stats_inc}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6DdosProcTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_ddos_proc_trigger_stats_inc',
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
    this._ipNodeAllocFailure = config.ipNodeAllocFailure;
    this._ipOtherBlockAllocFailure = config.ipOtherBlockAllocFailure;
    this._ipPortBlockAllocFailure = config.ipPortBlockAllocFailure;
    this._l3EntryAddToBgpFailure = config.l3EntryAddToBgpFailure;
    this._l3EntryAddToHwFailure = config.l3EntryAddToHwFailure;
    this._l3EntryDropMaxHwExceeded = config.l3EntryDropMaxHwExceeded;
    this._l3EntryMatchDrop = config.l3EntryMatchDrop;
    this._l3EntryMatchDropHw = config.l3EntryMatchDropHw;
    this._l3EntryRemoveFromBgpFailure = config.l3EntryRemoveFromBgpFailure;
    this._l4EntryDropMaxHwExceeded = config.l4EntryDropMaxHwExceeded;
    this._l4EntryListAllocFailure = config.l4EntryListAllocFailure;
    this._l4EntryMatchDrop = config.l4EntryMatchDrop;
    this._l4EntryMatchDropHw = config.l4EntryMatchDropHw;
    this._name = config.name;
    this._synCookieVerificationFailed = config.synCookieVerificationFailed;
    this._uuid = config.uuid;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ip_node_alloc_failure: cdktf.numberToTerraform(this._ipNodeAllocFailure),
      ip_other_block_alloc_failure: cdktf.numberToTerraform(this._ipOtherBlockAllocFailure),
      ip_port_block_alloc_failure: cdktf.numberToTerraform(this._ipPortBlockAllocFailure),
      l3_entry_add_to_bgp_failure: cdktf.numberToTerraform(this._l3EntryAddToBgpFailure),
      l3_entry_add_to_hw_failure: cdktf.numberToTerraform(this._l3EntryAddToHwFailure),
      l3_entry_drop_max_hw_exceeded: cdktf.numberToTerraform(this._l3EntryDropMaxHwExceeded),
      l3_entry_match_drop: cdktf.numberToTerraform(this._l3EntryMatchDrop),
      l3_entry_match_drop_hw: cdktf.numberToTerraform(this._l3EntryMatchDropHw),
      l3_entry_remove_from_bgp_failure: cdktf.numberToTerraform(this._l3EntryRemoveFromBgpFailure),
      l4_entry_drop_max_hw_exceeded: cdktf.numberToTerraform(this._l4EntryDropMaxHwExceeded),
      l4_entry_list_alloc_failure: cdktf.numberToTerraform(this._l4EntryListAllocFailure),
      l4_entry_match_drop: cdktf.numberToTerraform(this._l4EntryMatchDrop),
      l4_entry_match_drop_hw: cdktf.numberToTerraform(this._l4EntryMatchDropHw),
      name: cdktf.stringToTerraform(this._name),
      syn_cookie_verification_failed: cdktf.numberToTerraform(this._synCookieVerificationFailed),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      ip_node_alloc_failure: {
        value: cdktf.numberToHclTerraform(this._ipNodeAllocFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_other_block_alloc_failure: {
        value: cdktf.numberToHclTerraform(this._ipOtherBlockAllocFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_port_block_alloc_failure: {
        value: cdktf.numberToHclTerraform(this._ipPortBlockAllocFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l3_entry_add_to_bgp_failure: {
        value: cdktf.numberToHclTerraform(this._l3EntryAddToBgpFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l3_entry_add_to_hw_failure: {
        value: cdktf.numberToHclTerraform(this._l3EntryAddToHwFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l3_entry_drop_max_hw_exceeded: {
        value: cdktf.numberToHclTerraform(this._l3EntryDropMaxHwExceeded),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l3_entry_match_drop: {
        value: cdktf.numberToHclTerraform(this._l3EntryMatchDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l3_entry_match_drop_hw: {
        value: cdktf.numberToHclTerraform(this._l3EntryMatchDropHw),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l3_entry_remove_from_bgp_failure: {
        value: cdktf.numberToHclTerraform(this._l3EntryRemoveFromBgpFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l4_entry_drop_max_hw_exceeded: {
        value: cdktf.numberToHclTerraform(this._l4EntryDropMaxHwExceeded),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l4_entry_list_alloc_failure: {
        value: cdktf.numberToHclTerraform(this._l4EntryListAllocFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l4_entry_match_drop: {
        value: cdktf.numberToHclTerraform(this._l4EntryMatchDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      l4_entry_match_drop_hw: {
        value: cdktf.numberToHclTerraform(this._l4EntryMatchDropHw),
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
      syn_cookie_verification_failed: {
        value: cdktf.numberToHclTerraform(this._synCookieVerificationFailed),
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
