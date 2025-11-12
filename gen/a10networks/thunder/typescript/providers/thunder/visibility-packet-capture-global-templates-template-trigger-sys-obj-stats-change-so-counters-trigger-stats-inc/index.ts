// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_so_counters_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_so_counters_trigger_stats_inc#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_so_counters_trigger_stats_inc#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsIncA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for Destination MAC Address zero Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_so_counters_trigger_stats_inc#so_pkts_l2redirect_dest_mac_zero_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsIncA#so_pkts_l2redirect_dest_mac_zero_drop}
  */
  readonly soPktsL2RedirectDestMacZeroDrop?: number;
  /**
  * Enable automatic packet-capture for L2redirect Intf is not UP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_so_counters_trigger_stats_inc#so_pkts_l2redirect_interface_not_up VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsIncA#so_pkts_l2redirect_interface_not_up}
  */
  readonly soPktsL2RedirectInterfaceNotUp?: number;
  /**
  * Enable automatic packet-capture for Redirect Table Error due to invalid redirect info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_so_counters_trigger_stats_inc#so_pkts_l2redirect_invalid_redirect_inf VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsIncA#so_pkts_l2redirect_invalid_redirect_inf}
  */
  readonly soPktsL2RedirectInvalidRedirectInf?: number;
  /**
  * Enable automatic packet-capture for L2 redirect pkt port not retrieved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_so_counters_trigger_stats_inc#so_pkts_l2redirect_port_retrieval_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsIncA#so_pkts_l2redirect_port_retrieval_error}
  */
  readonly soPktsL2RedirectPortRetrievalError?: number;
  /**
  * Enable automatic packet-capture for L2 redirect pkt vlan not retrieved
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_so_counters_trigger_stats_inc#so_pkts_l2redirect_vlan_retrieval_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsIncA#so_pkts_l2redirect_vlan_retrieval_error}
  */
  readonly soPktsL2RedirectVlanRetrievalError?: number;
  /**
  * Enable automatic packet-capture for L3 Redirect RX multi-slot Destination MAC Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_so_counters_trigger_stats_inc#so_pkts_l3_redirect_chassis_dest_mac_er VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsIncA#so_pkts_l3_redirect_chassis_dest_mac_er}
  */
  readonly soPktsL3RedirectChassisDestMacEr?: number;
  /**
  * Enable automatic packet-capture for L3 Redirect encap error drop during transmission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_so_counters_trigger_stats_inc#so_pkts_l3_redirect_encap_error_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsIncA#so_pkts_l3_redirect_encap_error_drop}
  */
  readonly soPktsL3RedirectEncapErrorDrop?: number;
  /**
  * Enable automatic packet-capture for L3 redirect encap Fragmentation error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_so_counters_trigger_stats_inc#so_pkts_l3_redirect_fragmentation_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsIncA#so_pkts_l3_redirect_fragmentation_error}
  */
  readonly soPktsL3RedirectFragmentationError?: number;
  /**
  * Enable automatic packet-capture for L3 Redirect inner mac zero drop during transmission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_so_counters_trigger_stats_inc#so_pkts_l3_redirect_inner_mac_zero_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsIncA#so_pkts_l3_redirect_inner_mac_zero_drop}
  */
  readonly soPktsL3RedirectInnerMacZeroDrop?: number;
  /**
  * Enable automatic packet-capture for L3 Redirect Invalid Device direction during transmission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_so_counters_trigger_stats_inc#so_pkts_l3_redirect_invalid_dev_dir VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsIncA#so_pkts_l3_redirect_invalid_dev_dir}
  */
  readonly soPktsL3RedirectInvalidDevDir?: number;
  /**
  * Enable automatic packet-capture for L3 Redirect Table error Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_so_counters_trigger_stats_inc#so_pkts_l3_redirect_table_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsIncA#so_pkts_l3_redirect_table_error}
  */
  readonly soPktsL3RedirectTableError?: number;
  /**
  * Enable automatic packet-capture for L3 redirect Table no redirect entry found error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_so_counters_trigger_stats_inc#so_pkts_l3_redirect_table_no_entry_foun VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsIncA#so_pkts_l3_redirect_table_no_entry_foun}
  */
  readonly soPktsL3RedirectTableNoEntryFoun?: number;
  /**
  * Enable automatic packet-capture for Total SLB NAT release failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_so_counters_trigger_stats_inc#so_pkts_slb_nat_release_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsIncA#so_pkts_slb_nat_release_fail}
  */
  readonly soPktsSlbNatReleaseFail?: number;
  /**
  * Enable automatic packet-capture for Total SLB NAT reserve failures
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_so_counters_trigger_stats_inc#so_pkts_slb_nat_reserve_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsIncA#so_pkts_slb_nat_reserve_fail}
  */
  readonly soPktsSlbNatReserveFail?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_so_counters_trigger_stats_inc#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_so_counters_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_so_counters_trigger_stats_inc}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_so_counters_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_so_counters_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_so_counters_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_so_counters_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_so_counters_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeSoCountersTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_so_counters_trigger_stats_inc',
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
    this._soPktsL2RedirectDestMacZeroDrop = config.soPktsL2RedirectDestMacZeroDrop;
    this._soPktsL2RedirectInterfaceNotUp = config.soPktsL2RedirectInterfaceNotUp;
    this._soPktsL2RedirectInvalidRedirectInf = config.soPktsL2RedirectInvalidRedirectInf;
    this._soPktsL2RedirectPortRetrievalError = config.soPktsL2RedirectPortRetrievalError;
    this._soPktsL2RedirectVlanRetrievalError = config.soPktsL2RedirectVlanRetrievalError;
    this._soPktsL3RedirectChassisDestMacEr = config.soPktsL3RedirectChassisDestMacEr;
    this._soPktsL3RedirectEncapErrorDrop = config.soPktsL3RedirectEncapErrorDrop;
    this._soPktsL3RedirectFragmentationError = config.soPktsL3RedirectFragmentationError;
    this._soPktsL3RedirectInnerMacZeroDrop = config.soPktsL3RedirectInnerMacZeroDrop;
    this._soPktsL3RedirectInvalidDevDir = config.soPktsL3RedirectInvalidDevDir;
    this._soPktsL3RedirectTableError = config.soPktsL3RedirectTableError;
    this._soPktsL3RedirectTableNoEntryFoun = config.soPktsL3RedirectTableNoEntryFoun;
    this._soPktsSlbNatReleaseFail = config.soPktsSlbNatReleaseFail;
    this._soPktsSlbNatReserveFail = config.soPktsSlbNatReserveFail;
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

  // so_pkts_l2redirect_dest_mac_zero_drop - computed: false, optional: true, required: false
  private _soPktsL2RedirectDestMacZeroDrop?: number; 
  public get soPktsL2RedirectDestMacZeroDrop() {
    return this.getNumberAttribute('so_pkts_l2redirect_dest_mac_zero_drop');
  }
  public set soPktsL2RedirectDestMacZeroDrop(value: number) {
    this._soPktsL2RedirectDestMacZeroDrop = value;
  }
  public resetSoPktsL2RedirectDestMacZeroDrop() {
    this._soPktsL2RedirectDestMacZeroDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL2RedirectDestMacZeroDropInput() {
    return this._soPktsL2RedirectDestMacZeroDrop;
  }

  // so_pkts_l2redirect_interface_not_up - computed: false, optional: true, required: false
  private _soPktsL2RedirectInterfaceNotUp?: number; 
  public get soPktsL2RedirectInterfaceNotUp() {
    return this.getNumberAttribute('so_pkts_l2redirect_interface_not_up');
  }
  public set soPktsL2RedirectInterfaceNotUp(value: number) {
    this._soPktsL2RedirectInterfaceNotUp = value;
  }
  public resetSoPktsL2RedirectInterfaceNotUp() {
    this._soPktsL2RedirectInterfaceNotUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL2RedirectInterfaceNotUpInput() {
    return this._soPktsL2RedirectInterfaceNotUp;
  }

  // so_pkts_l2redirect_invalid_redirect_inf - computed: false, optional: true, required: false
  private _soPktsL2RedirectInvalidRedirectInf?: number; 
  public get soPktsL2RedirectInvalidRedirectInf() {
    return this.getNumberAttribute('so_pkts_l2redirect_invalid_redirect_inf');
  }
  public set soPktsL2RedirectInvalidRedirectInf(value: number) {
    this._soPktsL2RedirectInvalidRedirectInf = value;
  }
  public resetSoPktsL2RedirectInvalidRedirectInf() {
    this._soPktsL2RedirectInvalidRedirectInf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL2RedirectInvalidRedirectInfInput() {
    return this._soPktsL2RedirectInvalidRedirectInf;
  }

  // so_pkts_l2redirect_port_retrieval_error - computed: false, optional: true, required: false
  private _soPktsL2RedirectPortRetrievalError?: number; 
  public get soPktsL2RedirectPortRetrievalError() {
    return this.getNumberAttribute('so_pkts_l2redirect_port_retrieval_error');
  }
  public set soPktsL2RedirectPortRetrievalError(value: number) {
    this._soPktsL2RedirectPortRetrievalError = value;
  }
  public resetSoPktsL2RedirectPortRetrievalError() {
    this._soPktsL2RedirectPortRetrievalError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL2RedirectPortRetrievalErrorInput() {
    return this._soPktsL2RedirectPortRetrievalError;
  }

  // so_pkts_l2redirect_vlan_retrieval_error - computed: false, optional: true, required: false
  private _soPktsL2RedirectVlanRetrievalError?: number; 
  public get soPktsL2RedirectVlanRetrievalError() {
    return this.getNumberAttribute('so_pkts_l2redirect_vlan_retrieval_error');
  }
  public set soPktsL2RedirectVlanRetrievalError(value: number) {
    this._soPktsL2RedirectVlanRetrievalError = value;
  }
  public resetSoPktsL2RedirectVlanRetrievalError() {
    this._soPktsL2RedirectVlanRetrievalError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL2RedirectVlanRetrievalErrorInput() {
    return this._soPktsL2RedirectVlanRetrievalError;
  }

  // so_pkts_l3_redirect_chassis_dest_mac_er - computed: false, optional: true, required: false
  private _soPktsL3RedirectChassisDestMacEr?: number; 
  public get soPktsL3RedirectChassisDestMacEr() {
    return this.getNumberAttribute('so_pkts_l3_redirect_chassis_dest_mac_er');
  }
  public set soPktsL3RedirectChassisDestMacEr(value: number) {
    this._soPktsL3RedirectChassisDestMacEr = value;
  }
  public resetSoPktsL3RedirectChassisDestMacEr() {
    this._soPktsL3RedirectChassisDestMacEr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL3RedirectChassisDestMacErInput() {
    return this._soPktsL3RedirectChassisDestMacEr;
  }

  // so_pkts_l3_redirect_encap_error_drop - computed: false, optional: true, required: false
  private _soPktsL3RedirectEncapErrorDrop?: number; 
  public get soPktsL3RedirectEncapErrorDrop() {
    return this.getNumberAttribute('so_pkts_l3_redirect_encap_error_drop');
  }
  public set soPktsL3RedirectEncapErrorDrop(value: number) {
    this._soPktsL3RedirectEncapErrorDrop = value;
  }
  public resetSoPktsL3RedirectEncapErrorDrop() {
    this._soPktsL3RedirectEncapErrorDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL3RedirectEncapErrorDropInput() {
    return this._soPktsL3RedirectEncapErrorDrop;
  }

  // so_pkts_l3_redirect_fragmentation_error - computed: false, optional: true, required: false
  private _soPktsL3RedirectFragmentationError?: number; 
  public get soPktsL3RedirectFragmentationError() {
    return this.getNumberAttribute('so_pkts_l3_redirect_fragmentation_error');
  }
  public set soPktsL3RedirectFragmentationError(value: number) {
    this._soPktsL3RedirectFragmentationError = value;
  }
  public resetSoPktsL3RedirectFragmentationError() {
    this._soPktsL3RedirectFragmentationError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL3RedirectFragmentationErrorInput() {
    return this._soPktsL3RedirectFragmentationError;
  }

  // so_pkts_l3_redirect_inner_mac_zero_drop - computed: false, optional: true, required: false
  private _soPktsL3RedirectInnerMacZeroDrop?: number; 
  public get soPktsL3RedirectInnerMacZeroDrop() {
    return this.getNumberAttribute('so_pkts_l3_redirect_inner_mac_zero_drop');
  }
  public set soPktsL3RedirectInnerMacZeroDrop(value: number) {
    this._soPktsL3RedirectInnerMacZeroDrop = value;
  }
  public resetSoPktsL3RedirectInnerMacZeroDrop() {
    this._soPktsL3RedirectInnerMacZeroDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL3RedirectInnerMacZeroDropInput() {
    return this._soPktsL3RedirectInnerMacZeroDrop;
  }

  // so_pkts_l3_redirect_invalid_dev_dir - computed: false, optional: true, required: false
  private _soPktsL3RedirectInvalidDevDir?: number; 
  public get soPktsL3RedirectInvalidDevDir() {
    return this.getNumberAttribute('so_pkts_l3_redirect_invalid_dev_dir');
  }
  public set soPktsL3RedirectInvalidDevDir(value: number) {
    this._soPktsL3RedirectInvalidDevDir = value;
  }
  public resetSoPktsL3RedirectInvalidDevDir() {
    this._soPktsL3RedirectInvalidDevDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL3RedirectInvalidDevDirInput() {
    return this._soPktsL3RedirectInvalidDevDir;
  }

  // so_pkts_l3_redirect_table_error - computed: false, optional: true, required: false
  private _soPktsL3RedirectTableError?: number; 
  public get soPktsL3RedirectTableError() {
    return this.getNumberAttribute('so_pkts_l3_redirect_table_error');
  }
  public set soPktsL3RedirectTableError(value: number) {
    this._soPktsL3RedirectTableError = value;
  }
  public resetSoPktsL3RedirectTableError() {
    this._soPktsL3RedirectTableError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL3RedirectTableErrorInput() {
    return this._soPktsL3RedirectTableError;
  }

  // so_pkts_l3_redirect_table_no_entry_foun - computed: false, optional: true, required: false
  private _soPktsL3RedirectTableNoEntryFoun?: number; 
  public get soPktsL3RedirectTableNoEntryFoun() {
    return this.getNumberAttribute('so_pkts_l3_redirect_table_no_entry_foun');
  }
  public set soPktsL3RedirectTableNoEntryFoun(value: number) {
    this._soPktsL3RedirectTableNoEntryFoun = value;
  }
  public resetSoPktsL3RedirectTableNoEntryFoun() {
    this._soPktsL3RedirectTableNoEntryFoun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsL3RedirectTableNoEntryFounInput() {
    return this._soPktsL3RedirectTableNoEntryFoun;
  }

  // so_pkts_slb_nat_release_fail - computed: false, optional: true, required: false
  private _soPktsSlbNatReleaseFail?: number; 
  public get soPktsSlbNatReleaseFail() {
    return this.getNumberAttribute('so_pkts_slb_nat_release_fail');
  }
  public set soPktsSlbNatReleaseFail(value: number) {
    this._soPktsSlbNatReleaseFail = value;
  }
  public resetSoPktsSlbNatReleaseFail() {
    this._soPktsSlbNatReleaseFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsSlbNatReleaseFailInput() {
    return this._soPktsSlbNatReleaseFail;
  }

  // so_pkts_slb_nat_reserve_fail - computed: false, optional: true, required: false
  private _soPktsSlbNatReserveFail?: number; 
  public get soPktsSlbNatReserveFail() {
    return this.getNumberAttribute('so_pkts_slb_nat_reserve_fail');
  }
  public set soPktsSlbNatReserveFail(value: number) {
    this._soPktsSlbNatReserveFail = value;
  }
  public resetSoPktsSlbNatReserveFail() {
    this._soPktsSlbNatReserveFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get soPktsSlbNatReserveFailInput() {
    return this._soPktsSlbNatReserveFail;
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
      name: cdktf.stringToTerraform(this._name),
      so_pkts_l2redirect_dest_mac_zero_drop: cdktf.numberToTerraform(this._soPktsL2RedirectDestMacZeroDrop),
      so_pkts_l2redirect_interface_not_up: cdktf.numberToTerraform(this._soPktsL2RedirectInterfaceNotUp),
      so_pkts_l2redirect_invalid_redirect_inf: cdktf.numberToTerraform(this._soPktsL2RedirectInvalidRedirectInf),
      so_pkts_l2redirect_port_retrieval_error: cdktf.numberToTerraform(this._soPktsL2RedirectPortRetrievalError),
      so_pkts_l2redirect_vlan_retrieval_error: cdktf.numberToTerraform(this._soPktsL2RedirectVlanRetrievalError),
      so_pkts_l3_redirect_chassis_dest_mac_er: cdktf.numberToTerraform(this._soPktsL3RedirectChassisDestMacEr),
      so_pkts_l3_redirect_encap_error_drop: cdktf.numberToTerraform(this._soPktsL3RedirectEncapErrorDrop),
      so_pkts_l3_redirect_fragmentation_error: cdktf.numberToTerraform(this._soPktsL3RedirectFragmentationError),
      so_pkts_l3_redirect_inner_mac_zero_drop: cdktf.numberToTerraform(this._soPktsL3RedirectInnerMacZeroDrop),
      so_pkts_l3_redirect_invalid_dev_dir: cdktf.numberToTerraform(this._soPktsL3RedirectInvalidDevDir),
      so_pkts_l3_redirect_table_error: cdktf.numberToTerraform(this._soPktsL3RedirectTableError),
      so_pkts_l3_redirect_table_no_entry_foun: cdktf.numberToTerraform(this._soPktsL3RedirectTableNoEntryFoun),
      so_pkts_slb_nat_release_fail: cdktf.numberToTerraform(this._soPktsSlbNatReleaseFail),
      so_pkts_slb_nat_reserve_fail: cdktf.numberToTerraform(this._soPktsSlbNatReserveFail),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      so_pkts_l2redirect_dest_mac_zero_drop: {
        value: cdktf.numberToHclTerraform(this._soPktsL2RedirectDestMacZeroDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      so_pkts_l2redirect_interface_not_up: {
        value: cdktf.numberToHclTerraform(this._soPktsL2RedirectInterfaceNotUp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      so_pkts_l2redirect_invalid_redirect_inf: {
        value: cdktf.numberToHclTerraform(this._soPktsL2RedirectInvalidRedirectInf),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      so_pkts_l2redirect_port_retrieval_error: {
        value: cdktf.numberToHclTerraform(this._soPktsL2RedirectPortRetrievalError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      so_pkts_l2redirect_vlan_retrieval_error: {
        value: cdktf.numberToHclTerraform(this._soPktsL2RedirectVlanRetrievalError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      so_pkts_l3_redirect_chassis_dest_mac_er: {
        value: cdktf.numberToHclTerraform(this._soPktsL3RedirectChassisDestMacEr),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      so_pkts_l3_redirect_encap_error_drop: {
        value: cdktf.numberToHclTerraform(this._soPktsL3RedirectEncapErrorDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      so_pkts_l3_redirect_fragmentation_error: {
        value: cdktf.numberToHclTerraform(this._soPktsL3RedirectFragmentationError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      so_pkts_l3_redirect_inner_mac_zero_drop: {
        value: cdktf.numberToHclTerraform(this._soPktsL3RedirectInnerMacZeroDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      so_pkts_l3_redirect_invalid_dev_dir: {
        value: cdktf.numberToHclTerraform(this._soPktsL3RedirectInvalidDevDir),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      so_pkts_l3_redirect_table_error: {
        value: cdktf.numberToHclTerraform(this._soPktsL3RedirectTableError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      so_pkts_l3_redirect_table_no_entry_foun: {
        value: cdktf.numberToHclTerraform(this._soPktsL3RedirectTableNoEntryFoun),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      so_pkts_slb_nat_release_fail: {
        value: cdktf.numberToHclTerraform(this._soPktsSlbNatReleaseFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      so_pkts_slb_nat_reserve_fail: {
        value: cdktf.numberToHclTerraform(this._soPktsSlbNatReserveFail),
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
