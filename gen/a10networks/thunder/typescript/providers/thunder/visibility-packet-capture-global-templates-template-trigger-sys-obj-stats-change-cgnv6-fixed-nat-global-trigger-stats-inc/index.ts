// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for Fixed NAT Config not Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc#config_not_found VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA#config_not_found}
  */
  readonly configNotFound?: number;
  /**
  * Enable automatic packet-capture for Fixed NAT Dest Rule List Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc#dest_rlist_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA#dest_rlist_drop}
  */
  readonly destRlistDrop?: number;
  /**
  * Enable automatic packet-capture for Fixed NAT Dest Rule List Pass-Through
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc#dest_rlist_pass_through VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA#dest_rlist_pass_through}
  */
  readonly destRlistPassThrough?: number;
  /**
  * Enable automatic packet-capture for Fixed NAT Dest Rules List Source NAT Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc#dest_rlist_snat_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA#dest_rlist_snat_drop}
  */
  readonly destRlistSnatDrop?: number;
  /**
  * Enable automatic packet-capture for DS-Lite Endpoint-Independent-Filtering Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc#dslite_eif_limit_exceeded VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA#dslite_eif_limit_exceeded}
  */
  readonly dsliteEifLimitExceeded?: number;
  /**
  * Enable automatic packet-capture for DS-Lite Endpoint-Dependent Filtering Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc#dslite_inbound_filtered VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA#dslite_inbound_filtered}
  */
  readonly dsliteInboundFiltered?: number;
  /**
  * Enable automatic packet-capture for Self-Hairpinning Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc#fixed_nat_fullcone_self_hairpinning_dro VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA#fixed_nat_fullcone_self_hairpinning_dro}
  */
  readonly fixedNatFullconeSelfHairpinningDro?: number;
  /**
  * Enable automatic packet-capture for Full-Cone Session Creation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc#fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA#fullcone_failure}
  */
  readonly fullconeFailure?: number;
  /**
  * Enable automatic packet-capture for HA Sessions User Quota Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc#ha_session_user_quota_exceeded VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA#ha_session_user_quota_exceeded}
  */
  readonly haSessionUserQuotaExceeded?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for NAT44 Endpoint-Independent-Filtering Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc#nat44_eif_limit_exceeded VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA#nat44_eif_limit_exceeded}
  */
  readonly nat44EifLimitExceeded?: number;
  /**
  * Enable automatic packet-capture for NAT44 Endpoint-Dependent Filtering Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc#nat44_inbound_filtered VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA#nat44_inbound_filtered}
  */
  readonly nat44InboundFiltered?: number;
  /**
  * Enable automatic packet-capture for NAT64 Endpoint-Independent-Filtering Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc#nat64_eif_limit_exceeded VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA#nat64_eif_limit_exceeded}
  */
  readonly nat64EifLimitExceeded?: number;
  /**
  * Enable automatic packet-capture for NAT64 Endpoint-Dependent Filtering Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc#nat64_inbound_filtered VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA#nat64_inbound_filtered}
  */
  readonly nat64InboundFiltered?: number;
  /**
  * Enable automatic packet-capture for ICMP NAT Port Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc#nat_port_unavailable_icmp VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA#nat_port_unavailable_icmp}
  */
  readonly natPortUnavailableIcmp?: number;
  /**
  * Enable automatic packet-capture for TCP NAT Port Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc#nat_port_unavailable_tcp VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA#nat_port_unavailable_tcp}
  */
  readonly natPortUnavailableTcp?: number;
  /**
  * Enable automatic packet-capture for UDP NAT Port Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc#nat_port_unavailable_udp VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA#nat_port_unavailable_udp}
  */
  readonly natPortUnavailableUdp?: number;
  /**
  * Enable automatic packet-capture for Port overload failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc#port_overload_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA#port_overload_failed}
  */
  readonly portOverloadFailed?: number;
  /**
  * Enable automatic packet-capture for Sessions User Quota Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc#session_user_quota_exceeded VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA#session_user_quota_exceeded}
  */
  readonly sessionUserQuotaExceeded?: number;
  /**
  * Enable automatic packet-capture for Fixed NAT IPv6 in IPv4 Packet Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc#sixrd_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA#sixrd_drop}
  */
  readonly sixrdDrop?: number;
  /**
  * Enable automatic packet-capture for Fixed NAT LID Standby Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc#standby_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA#standby_drop}
  */
  readonly standbyDrop?: number;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc#template_name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA#template_name}
  */
  readonly templateName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global_trigger_stats_inc',
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
    this._configNotFound = config.configNotFound;
    this._destRlistDrop = config.destRlistDrop;
    this._destRlistPassThrough = config.destRlistPassThrough;
    this._destRlistSnatDrop = config.destRlistSnatDrop;
    this._dsliteEifLimitExceeded = config.dsliteEifLimitExceeded;
    this._dsliteInboundFiltered = config.dsliteInboundFiltered;
    this._fixedNatFullconeSelfHairpinningDro = config.fixedNatFullconeSelfHairpinningDro;
    this._fullconeFailure = config.fullconeFailure;
    this._haSessionUserQuotaExceeded = config.haSessionUserQuotaExceeded;
    this._id = config.id;
    this._nat44EifLimitExceeded = config.nat44EifLimitExceeded;
    this._nat44InboundFiltered = config.nat44InboundFiltered;
    this._nat64EifLimitExceeded = config.nat64EifLimitExceeded;
    this._nat64InboundFiltered = config.nat64InboundFiltered;
    this._natPortUnavailableIcmp = config.natPortUnavailableIcmp;
    this._natPortUnavailableTcp = config.natPortUnavailableTcp;
    this._natPortUnavailableUdp = config.natPortUnavailableUdp;
    this._portOverloadFailed = config.portOverloadFailed;
    this._sessionUserQuotaExceeded = config.sessionUserQuotaExceeded;
    this._sixrdDrop = config.sixrdDrop;
    this._standbyDrop = config.standbyDrop;
    this._templateName = config.templateName;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_not_found - computed: false, optional: true, required: false
  private _configNotFound?: number; 
  public get configNotFound() {
    return this.getNumberAttribute('config_not_found');
  }
  public set configNotFound(value: number) {
    this._configNotFound = value;
  }
  public resetConfigNotFound() {
    this._configNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configNotFoundInput() {
    return this._configNotFound;
  }

  // dest_rlist_drop - computed: false, optional: true, required: false
  private _destRlistDrop?: number; 
  public get destRlistDrop() {
    return this.getNumberAttribute('dest_rlist_drop');
  }
  public set destRlistDrop(value: number) {
    this._destRlistDrop = value;
  }
  public resetDestRlistDrop() {
    this._destRlistDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destRlistDropInput() {
    return this._destRlistDrop;
  }

  // dest_rlist_pass_through - computed: false, optional: true, required: false
  private _destRlistPassThrough?: number; 
  public get destRlistPassThrough() {
    return this.getNumberAttribute('dest_rlist_pass_through');
  }
  public set destRlistPassThrough(value: number) {
    this._destRlistPassThrough = value;
  }
  public resetDestRlistPassThrough() {
    this._destRlistPassThrough = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destRlistPassThroughInput() {
    return this._destRlistPassThrough;
  }

  // dest_rlist_snat_drop - computed: false, optional: true, required: false
  private _destRlistSnatDrop?: number; 
  public get destRlistSnatDrop() {
    return this.getNumberAttribute('dest_rlist_snat_drop');
  }
  public set destRlistSnatDrop(value: number) {
    this._destRlistSnatDrop = value;
  }
  public resetDestRlistSnatDrop() {
    this._destRlistSnatDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destRlistSnatDropInput() {
    return this._destRlistSnatDrop;
  }

  // dslite_eif_limit_exceeded - computed: false, optional: true, required: false
  private _dsliteEifLimitExceeded?: number; 
  public get dsliteEifLimitExceeded() {
    return this.getNumberAttribute('dslite_eif_limit_exceeded');
  }
  public set dsliteEifLimitExceeded(value: number) {
    this._dsliteEifLimitExceeded = value;
  }
  public resetDsliteEifLimitExceeded() {
    this._dsliteEifLimitExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsliteEifLimitExceededInput() {
    return this._dsliteEifLimitExceeded;
  }

  // dslite_inbound_filtered - computed: false, optional: true, required: false
  private _dsliteInboundFiltered?: number; 
  public get dsliteInboundFiltered() {
    return this.getNumberAttribute('dslite_inbound_filtered');
  }
  public set dsliteInboundFiltered(value: number) {
    this._dsliteInboundFiltered = value;
  }
  public resetDsliteInboundFiltered() {
    this._dsliteInboundFiltered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsliteInboundFilteredInput() {
    return this._dsliteInboundFiltered;
  }

  // fixed_nat_fullcone_self_hairpinning_dro - computed: false, optional: true, required: false
  private _fixedNatFullconeSelfHairpinningDro?: number; 
  public get fixedNatFullconeSelfHairpinningDro() {
    return this.getNumberAttribute('fixed_nat_fullcone_self_hairpinning_dro');
  }
  public set fixedNatFullconeSelfHairpinningDro(value: number) {
    this._fixedNatFullconeSelfHairpinningDro = value;
  }
  public resetFixedNatFullconeSelfHairpinningDro() {
    this._fixedNatFullconeSelfHairpinningDro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fixedNatFullconeSelfHairpinningDroInput() {
    return this._fixedNatFullconeSelfHairpinningDro;
  }

  // fullcone_failure - computed: false, optional: true, required: false
  private _fullconeFailure?: number; 
  public get fullconeFailure() {
    return this.getNumberAttribute('fullcone_failure');
  }
  public set fullconeFailure(value: number) {
    this._fullconeFailure = value;
  }
  public resetFullconeFailure() {
    this._fullconeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullconeFailureInput() {
    return this._fullconeFailure;
  }

  // ha_session_user_quota_exceeded - computed: false, optional: true, required: false
  private _haSessionUserQuotaExceeded?: number; 
  public get haSessionUserQuotaExceeded() {
    return this.getNumberAttribute('ha_session_user_quota_exceeded');
  }
  public set haSessionUserQuotaExceeded(value: number) {
    this._haSessionUserQuotaExceeded = value;
  }
  public resetHaSessionUserQuotaExceeded() {
    this._haSessionUserQuotaExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haSessionUserQuotaExceededInput() {
    return this._haSessionUserQuotaExceeded;
  }

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

  // nat44_eif_limit_exceeded - computed: false, optional: true, required: false
  private _nat44EifLimitExceeded?: number; 
  public get nat44EifLimitExceeded() {
    return this.getNumberAttribute('nat44_eif_limit_exceeded');
  }
  public set nat44EifLimitExceeded(value: number) {
    this._nat44EifLimitExceeded = value;
  }
  public resetNat44EifLimitExceeded() {
    this._nat44EifLimitExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat44EifLimitExceededInput() {
    return this._nat44EifLimitExceeded;
  }

  // nat44_inbound_filtered - computed: false, optional: true, required: false
  private _nat44InboundFiltered?: number; 
  public get nat44InboundFiltered() {
    return this.getNumberAttribute('nat44_inbound_filtered');
  }
  public set nat44InboundFiltered(value: number) {
    this._nat44InboundFiltered = value;
  }
  public resetNat44InboundFiltered() {
    this._nat44InboundFiltered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat44InboundFilteredInput() {
    return this._nat44InboundFiltered;
  }

  // nat64_eif_limit_exceeded - computed: false, optional: true, required: false
  private _nat64EifLimitExceeded?: number; 
  public get nat64EifLimitExceeded() {
    return this.getNumberAttribute('nat64_eif_limit_exceeded');
  }
  public set nat64EifLimitExceeded(value: number) {
    this._nat64EifLimitExceeded = value;
  }
  public resetNat64EifLimitExceeded() {
    this._nat64EifLimitExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64EifLimitExceededInput() {
    return this._nat64EifLimitExceeded;
  }

  // nat64_inbound_filtered - computed: false, optional: true, required: false
  private _nat64InboundFiltered?: number; 
  public get nat64InboundFiltered() {
    return this.getNumberAttribute('nat64_inbound_filtered');
  }
  public set nat64InboundFiltered(value: number) {
    this._nat64InboundFiltered = value;
  }
  public resetNat64InboundFiltered() {
    this._nat64InboundFiltered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64InboundFilteredInput() {
    return this._nat64InboundFiltered;
  }

  // nat_port_unavailable_icmp - computed: false, optional: true, required: false
  private _natPortUnavailableIcmp?: number; 
  public get natPortUnavailableIcmp() {
    return this.getNumberAttribute('nat_port_unavailable_icmp');
  }
  public set natPortUnavailableIcmp(value: number) {
    this._natPortUnavailableIcmp = value;
  }
  public resetNatPortUnavailableIcmp() {
    this._natPortUnavailableIcmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPortUnavailableIcmpInput() {
    return this._natPortUnavailableIcmp;
  }

  // nat_port_unavailable_tcp - computed: false, optional: true, required: false
  private _natPortUnavailableTcp?: number; 
  public get natPortUnavailableTcp() {
    return this.getNumberAttribute('nat_port_unavailable_tcp');
  }
  public set natPortUnavailableTcp(value: number) {
    this._natPortUnavailableTcp = value;
  }
  public resetNatPortUnavailableTcp() {
    this._natPortUnavailableTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPortUnavailableTcpInput() {
    return this._natPortUnavailableTcp;
  }

  // nat_port_unavailable_udp - computed: false, optional: true, required: false
  private _natPortUnavailableUdp?: number; 
  public get natPortUnavailableUdp() {
    return this.getNumberAttribute('nat_port_unavailable_udp');
  }
  public set natPortUnavailableUdp(value: number) {
    this._natPortUnavailableUdp = value;
  }
  public resetNatPortUnavailableUdp() {
    this._natPortUnavailableUdp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPortUnavailableUdpInput() {
    return this._natPortUnavailableUdp;
  }

  // port_overload_failed - computed: false, optional: true, required: false
  private _portOverloadFailed?: number; 
  public get portOverloadFailed() {
    return this.getNumberAttribute('port_overload_failed');
  }
  public set portOverloadFailed(value: number) {
    this._portOverloadFailed = value;
  }
  public resetPortOverloadFailed() {
    this._portOverloadFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOverloadFailedInput() {
    return this._portOverloadFailed;
  }

  // session_user_quota_exceeded - computed: false, optional: true, required: false
  private _sessionUserQuotaExceeded?: number; 
  public get sessionUserQuotaExceeded() {
    return this.getNumberAttribute('session_user_quota_exceeded');
  }
  public set sessionUserQuotaExceeded(value: number) {
    this._sessionUserQuotaExceeded = value;
  }
  public resetSessionUserQuotaExceeded() {
    this._sessionUserQuotaExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionUserQuotaExceededInput() {
    return this._sessionUserQuotaExceeded;
  }

  // sixrd_drop - computed: false, optional: true, required: false
  private _sixrdDrop?: number; 
  public get sixrdDrop() {
    return this.getNumberAttribute('sixrd_drop');
  }
  public set sixrdDrop(value: number) {
    this._sixrdDrop = value;
  }
  public resetSixrdDrop() {
    this._sixrdDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sixrdDropInput() {
    return this._sixrdDrop;
  }

  // standby_drop - computed: false, optional: true, required: false
  private _standbyDrop?: number; 
  public get standbyDrop() {
    return this.getNumberAttribute('standby_drop');
  }
  public set standbyDrop(value: number) {
    this._standbyDrop = value;
  }
  public resetStandbyDrop() {
    this._standbyDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyDropInput() {
    return this._standbyDrop;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config_not_found: cdktf.numberToTerraform(this._configNotFound),
      dest_rlist_drop: cdktf.numberToTerraform(this._destRlistDrop),
      dest_rlist_pass_through: cdktf.numberToTerraform(this._destRlistPassThrough),
      dest_rlist_snat_drop: cdktf.numberToTerraform(this._destRlistSnatDrop),
      dslite_eif_limit_exceeded: cdktf.numberToTerraform(this._dsliteEifLimitExceeded),
      dslite_inbound_filtered: cdktf.numberToTerraform(this._dsliteInboundFiltered),
      fixed_nat_fullcone_self_hairpinning_dro: cdktf.numberToTerraform(this._fixedNatFullconeSelfHairpinningDro),
      fullcone_failure: cdktf.numberToTerraform(this._fullconeFailure),
      ha_session_user_quota_exceeded: cdktf.numberToTerraform(this._haSessionUserQuotaExceeded),
      id: cdktf.stringToTerraform(this._id),
      nat44_eif_limit_exceeded: cdktf.numberToTerraform(this._nat44EifLimitExceeded),
      nat44_inbound_filtered: cdktf.numberToTerraform(this._nat44InboundFiltered),
      nat64_eif_limit_exceeded: cdktf.numberToTerraform(this._nat64EifLimitExceeded),
      nat64_inbound_filtered: cdktf.numberToTerraform(this._nat64InboundFiltered),
      nat_port_unavailable_icmp: cdktf.numberToTerraform(this._natPortUnavailableIcmp),
      nat_port_unavailable_tcp: cdktf.numberToTerraform(this._natPortUnavailableTcp),
      nat_port_unavailable_udp: cdktf.numberToTerraform(this._natPortUnavailableUdp),
      port_overload_failed: cdktf.numberToTerraform(this._portOverloadFailed),
      session_user_quota_exceeded: cdktf.numberToTerraform(this._sessionUserQuotaExceeded),
      sixrd_drop: cdktf.numberToTerraform(this._sixrdDrop),
      standby_drop: cdktf.numberToTerraform(this._standbyDrop),
      template_name: cdktf.stringToTerraform(this._templateName),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_not_found: {
        value: cdktf.numberToHclTerraform(this._configNotFound),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dest_rlist_drop: {
        value: cdktf.numberToHclTerraform(this._destRlistDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dest_rlist_pass_through: {
        value: cdktf.numberToHclTerraform(this._destRlistPassThrough),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dest_rlist_snat_drop: {
        value: cdktf.numberToHclTerraform(this._destRlistSnatDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dslite_eif_limit_exceeded: {
        value: cdktf.numberToHclTerraform(this._dsliteEifLimitExceeded),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dslite_inbound_filtered: {
        value: cdktf.numberToHclTerraform(this._dsliteInboundFiltered),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fixed_nat_fullcone_self_hairpinning_dro: {
        value: cdktf.numberToHclTerraform(this._fixedNatFullconeSelfHairpinningDro),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fullcone_failure: {
        value: cdktf.numberToHclTerraform(this._fullconeFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ha_session_user_quota_exceeded: {
        value: cdktf.numberToHclTerraform(this._haSessionUserQuotaExceeded),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat44_eif_limit_exceeded: {
        value: cdktf.numberToHclTerraform(this._nat44EifLimitExceeded),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat44_inbound_filtered: {
        value: cdktf.numberToHclTerraform(this._nat44InboundFiltered),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat64_eif_limit_exceeded: {
        value: cdktf.numberToHclTerraform(this._nat64EifLimitExceeded),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat64_inbound_filtered: {
        value: cdktf.numberToHclTerraform(this._nat64InboundFiltered),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat_port_unavailable_icmp: {
        value: cdktf.numberToHclTerraform(this._natPortUnavailableIcmp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat_port_unavailable_tcp: {
        value: cdktf.numberToHclTerraform(this._natPortUnavailableTcp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat_port_unavailable_udp: {
        value: cdktf.numberToHclTerraform(this._natPortUnavailableUdp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_overload_failed: {
        value: cdktf.numberToHclTerraform(this._portOverloadFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      session_user_quota_exceeded: {
        value: cdktf.numberToHclTerraform(this._sessionUserQuotaExceeded),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sixrd_drop: {
        value: cdktf.numberToHclTerraform(this._sixrdDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      standby_drop: {
        value: cdktf.numberToHclTerraform(this._standbyDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
