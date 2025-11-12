// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for Fixed NAT Config not Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#config_not_found VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#config_not_found}
  */
  readonly configNotFound?: number;
  /**
  * Enable automatic packet-capture for Fixed NAT Dest Rule List Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#dest_rlist_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#dest_rlist_drop}
  */
  readonly destRlistDrop?: number;
  /**
  * Enable automatic packet-capture for Fixed NAT Dest Rule List Pass-Through
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#dest_rlist_pass_through VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#dest_rlist_pass_through}
  */
  readonly destRlistPassThrough?: number;
  /**
  * Enable automatic packet-capture for Fixed NAT Dest Rules List Source NAT Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#dest_rlist_snat_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#dest_rlist_snat_drop}
  */
  readonly destRlistSnatDrop?: number;
  /**
  * Enable automatic packet-capture for DS-Lite Endpoint-Independent-Filtering Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#dslite_eif_limit_exceeded VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#dslite_eif_limit_exceeded}
  */
  readonly dsliteEifLimitExceeded?: number;
  /**
  * Enable automatic packet-capture for DS-Lite Endpoint-Dependent Filtering Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#dslite_inbound_filtered VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#dslite_inbound_filtered}
  */
  readonly dsliteInboundFiltered?: number;
  /**
  * Enable automatic packet-capture for Self-Hairpinning Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#fixed_nat_fullcone_self_hairpinning_dro VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#fixed_nat_fullcone_self_hairpinning_dro}
  */
  readonly fixedNatFullconeSelfHairpinningDro?: number;
  /**
  * Enable automatic packet-capture for Full-Cone Session Creation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#fullcone_failure}
  */
  readonly fullconeFailure?: number;
  /**
  * Enable automatic packet-capture for HA Sessions User Quota Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#ha_session_user_quota_exceeded VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#ha_session_user_quota_exceeded}
  */
  readonly haSessionUserQuotaExceeded?: number;
  /**
  * Enable automatic packet-capture for NAT44 Endpoint-Independent-Filtering Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#nat44_eif_limit_exceeded VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#nat44_eif_limit_exceeded}
  */
  readonly nat44EifLimitExceeded?: number;
  /**
  * Enable automatic packet-capture for NAT44 Endpoint-Dependent Filtering Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#nat44_inbound_filtered VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#nat44_inbound_filtered}
  */
  readonly nat44InboundFiltered?: number;
  /**
  * Enable automatic packet-capture for NAT64 Endpoint-Independent-Filtering Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#nat64_eif_limit_exceeded VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#nat64_eif_limit_exceeded}
  */
  readonly nat64EifLimitExceeded?: number;
  /**
  * Enable automatic packet-capture for NAT64 Endpoint-Dependent Filtering Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#nat64_inbound_filtered VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#nat64_inbound_filtered}
  */
  readonly nat64InboundFiltered?: number;
  /**
  * Enable automatic packet-capture for ICMP NAT Port Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#nat_port_unavailable_icmp VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#nat_port_unavailable_icmp}
  */
  readonly natPortUnavailableIcmp?: number;
  /**
  * Enable automatic packet-capture for TCP NAT Port Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#nat_port_unavailable_tcp VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#nat_port_unavailable_tcp}
  */
  readonly natPortUnavailableTcp?: number;
  /**
  * Enable automatic packet-capture for UDP NAT Port Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#nat_port_unavailable_udp VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#nat_port_unavailable_udp}
  */
  readonly natPortUnavailableUdp?: number;
  /**
  * Enable automatic packet-capture for Port overload failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#port_overload_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#port_overload_failed}
  */
  readonly portOverloadFailed?: number;
  /**
  * Enable automatic packet-capture for Sessions User Quota Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#session_user_quota_exceeded VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#session_user_quota_exceeded}
  */
  readonly sessionUserQuotaExceeded?: number;
  /**
  * Enable automatic packet-capture for Fixed NAT IPv6 in IPv4 Packet Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#sixrd_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#sixrd_drop}
  */
  readonly sixrdDrop?: number;
  /**
  * Enable automatic packet-capture for Fixed NAT LID Standby Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#standby_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#standby_drop}
  */
  readonly standbyDrop?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_not_found: cdktf.numberToTerraform(struct!.configNotFound),
    dest_rlist_drop: cdktf.numberToTerraform(struct!.destRlistDrop),
    dest_rlist_pass_through: cdktf.numberToTerraform(struct!.destRlistPassThrough),
    dest_rlist_snat_drop: cdktf.numberToTerraform(struct!.destRlistSnatDrop),
    dslite_eif_limit_exceeded: cdktf.numberToTerraform(struct!.dsliteEifLimitExceeded),
    dslite_inbound_filtered: cdktf.numberToTerraform(struct!.dsliteInboundFiltered),
    fixed_nat_fullcone_self_hairpinning_dro: cdktf.numberToTerraform(struct!.fixedNatFullconeSelfHairpinningDro),
    fullcone_failure: cdktf.numberToTerraform(struct!.fullconeFailure),
    ha_session_user_quota_exceeded: cdktf.numberToTerraform(struct!.haSessionUserQuotaExceeded),
    nat44_eif_limit_exceeded: cdktf.numberToTerraform(struct!.nat44EifLimitExceeded),
    nat44_inbound_filtered: cdktf.numberToTerraform(struct!.nat44InboundFiltered),
    nat64_eif_limit_exceeded: cdktf.numberToTerraform(struct!.nat64EifLimitExceeded),
    nat64_inbound_filtered: cdktf.numberToTerraform(struct!.nat64InboundFiltered),
    nat_port_unavailable_icmp: cdktf.numberToTerraform(struct!.natPortUnavailableIcmp),
    nat_port_unavailable_tcp: cdktf.numberToTerraform(struct!.natPortUnavailableTcp),
    nat_port_unavailable_udp: cdktf.numberToTerraform(struct!.natPortUnavailableUdp),
    port_overload_failed: cdktf.numberToTerraform(struct!.portOverloadFailed),
    session_user_quota_exceeded: cdktf.numberToTerraform(struct!.sessionUserQuotaExceeded),
    sixrd_drop: cdktf.numberToTerraform(struct!.sixrdDrop),
    standby_drop: cdktf.numberToTerraform(struct!.standbyDrop),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_not_found: {
      value: cdktf.numberToHclTerraform(struct!.configNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dest_rlist_drop: {
      value: cdktf.numberToHclTerraform(struct!.destRlistDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dest_rlist_pass_through: {
      value: cdktf.numberToHclTerraform(struct!.destRlistPassThrough),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dest_rlist_snat_drop: {
      value: cdktf.numberToHclTerraform(struct!.destRlistSnatDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dslite_eif_limit_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.dsliteEifLimitExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dslite_inbound_filtered: {
      value: cdktf.numberToHclTerraform(struct!.dsliteInboundFiltered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fixed_nat_fullcone_self_hairpinning_dro: {
      value: cdktf.numberToHclTerraform(struct!.fixedNatFullconeSelfHairpinningDro),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fullcone_failure: {
      value: cdktf.numberToHclTerraform(struct!.fullconeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_session_user_quota_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.haSessionUserQuotaExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat44_eif_limit_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.nat44EifLimitExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat44_inbound_filtered: {
      value: cdktf.numberToHclTerraform(struct!.nat44InboundFiltered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat64_eif_limit_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.nat64EifLimitExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat64_inbound_filtered: {
      value: cdktf.numberToHclTerraform(struct!.nat64InboundFiltered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_port_unavailable_icmp: {
      value: cdktf.numberToHclTerraform(struct!.natPortUnavailableIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_port_unavailable_tcp: {
      value: cdktf.numberToHclTerraform(struct!.natPortUnavailableTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_port_unavailable_udp: {
      value: cdktf.numberToHclTerraform(struct!.natPortUnavailableUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_overload_failed: {
      value: cdktf.numberToHclTerraform(struct!.portOverloadFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_user_quota_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.sessionUserQuotaExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sixrd_drop: {
      value: cdktf.numberToHclTerraform(struct!.sixrdDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    standby_drop: {
      value: cdktf.numberToHclTerraform(struct!.standbyDrop),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.configNotFound = this._configNotFound;
    }
    if (this._destRlistDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.destRlistDrop = this._destRlistDrop;
    }
    if (this._destRlistPassThrough !== undefined) {
      hasAnyValues = true;
      internalValueResult.destRlistPassThrough = this._destRlistPassThrough;
    }
    if (this._destRlistSnatDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.destRlistSnatDrop = this._destRlistSnatDrop;
    }
    if (this._dsliteEifLimitExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsliteEifLimitExceeded = this._dsliteEifLimitExceeded;
    }
    if (this._dsliteInboundFiltered !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsliteInboundFiltered = this._dsliteInboundFiltered;
    }
    if (this._fixedNatFullconeSelfHairpinningDro !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedNatFullconeSelfHairpinningDro = this._fixedNatFullconeSelfHairpinningDro;
    }
    if (this._fullconeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullconeFailure = this._fullconeFailure;
    }
    if (this._haSessionUserQuotaExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.haSessionUserQuotaExceeded = this._haSessionUserQuotaExceeded;
    }
    if (this._nat44EifLimitExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat44EifLimitExceeded = this._nat44EifLimitExceeded;
    }
    if (this._nat44InboundFiltered !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat44InboundFiltered = this._nat44InboundFiltered;
    }
    if (this._nat64EifLimitExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64EifLimitExceeded = this._nat64EifLimitExceeded;
    }
    if (this._nat64InboundFiltered !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64InboundFiltered = this._nat64InboundFiltered;
    }
    if (this._natPortUnavailableIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPortUnavailableIcmp = this._natPortUnavailableIcmp;
    }
    if (this._natPortUnavailableTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPortUnavailableTcp = this._natPortUnavailableTcp;
    }
    if (this._natPortUnavailableUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPortUnavailableUdp = this._natPortUnavailableUdp;
    }
    if (this._portOverloadFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portOverloadFailed = this._portOverloadFailed;
    }
    if (this._sessionUserQuotaExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionUserQuotaExceeded = this._sessionUserQuotaExceeded;
    }
    if (this._sixrdDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.sixrdDrop = this._sixrdDrop;
    }
    if (this._standbyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.standbyDrop = this._standbyDrop;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configNotFound = undefined;
      this._destRlistDrop = undefined;
      this._destRlistPassThrough = undefined;
      this._destRlistSnatDrop = undefined;
      this._dsliteEifLimitExceeded = undefined;
      this._dsliteInboundFiltered = undefined;
      this._fixedNatFullconeSelfHairpinningDro = undefined;
      this._fullconeFailure = undefined;
      this._haSessionUserQuotaExceeded = undefined;
      this._nat44EifLimitExceeded = undefined;
      this._nat44InboundFiltered = undefined;
      this._nat64EifLimitExceeded = undefined;
      this._nat64InboundFiltered = undefined;
      this._natPortUnavailableIcmp = undefined;
      this._natPortUnavailableTcp = undefined;
      this._natPortUnavailableUdp = undefined;
      this._portOverloadFailed = undefined;
      this._sessionUserQuotaExceeded = undefined;
      this._sixrdDrop = undefined;
      this._standbyDrop = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configNotFound = value.configNotFound;
      this._destRlistDrop = value.destRlistDrop;
      this._destRlistPassThrough = value.destRlistPassThrough;
      this._destRlistSnatDrop = value.destRlistSnatDrop;
      this._dsliteEifLimitExceeded = value.dsliteEifLimitExceeded;
      this._dsliteInboundFiltered = value.dsliteInboundFiltered;
      this._fixedNatFullconeSelfHairpinningDro = value.fixedNatFullconeSelfHairpinningDro;
      this._fullconeFailure = value.fullconeFailure;
      this._haSessionUserQuotaExceeded = value.haSessionUserQuotaExceeded;
      this._nat44EifLimitExceeded = value.nat44EifLimitExceeded;
      this._nat44InboundFiltered = value.nat44InboundFiltered;
      this._nat64EifLimitExceeded = value.nat64EifLimitExceeded;
      this._nat64InboundFiltered = value.nat64InboundFiltered;
      this._natPortUnavailableIcmp = value.natPortUnavailableIcmp;
      this._natPortUnavailableTcp = value.natPortUnavailableTcp;
      this._natPortUnavailableUdp = value.natPortUnavailableUdp;
      this._portOverloadFailed = value.portOverloadFailed;
      this._sessionUserQuotaExceeded = value.sessionUserQuotaExceeded;
      this._sixrdDrop = value.sixrdDrop;
      this._standbyDrop = value.standbyDrop;
      this._uuid = value.uuid;
    }
  }

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
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsRateA {
  /**
  * Enable automatic packet-capture for Fixed NAT Config not Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#config_not_found VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#config_not_found}
  */
  readonly configNotFound?: number;
  /**
  * Enable automatic packet-capture for Fixed NAT Dest Rule List Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#dest_rlist_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#dest_rlist_drop}
  */
  readonly destRlistDrop?: number;
  /**
  * Enable automatic packet-capture for Fixed NAT Dest Rule List Pass-Through
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#dest_rlist_pass_through VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#dest_rlist_pass_through}
  */
  readonly destRlistPassThrough?: number;
  /**
  * Enable automatic packet-capture for Fixed NAT Dest Rules List Source NAT Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#dest_rlist_snat_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#dest_rlist_snat_drop}
  */
  readonly destRlistSnatDrop?: number;
  /**
  * Enable automatic packet-capture for DS-Lite Endpoint-Independent-Filtering Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#dslite_eif_limit_exceeded VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#dslite_eif_limit_exceeded}
  */
  readonly dsliteEifLimitExceeded?: number;
  /**
  * Enable automatic packet-capture for DS-Lite Endpoint-Dependent Filtering Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#dslite_inbound_filtered VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#dslite_inbound_filtered}
  */
  readonly dsliteInboundFiltered?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Self-Hairpinning Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#fixed_nat_fullcone_self_hairpinning_dro VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#fixed_nat_fullcone_self_hairpinning_dro}
  */
  readonly fixedNatFullconeSelfHairpinningDro?: number;
  /**
  * Enable automatic packet-capture for Full-Cone Session Creation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#fullcone_failure}
  */
  readonly fullconeFailure?: number;
  /**
  * Enable automatic packet-capture for HA Sessions User Quota Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#ha_session_user_quota_exceeded VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#ha_session_user_quota_exceeded}
  */
  readonly haSessionUserQuotaExceeded?: number;
  /**
  * Enable automatic packet-capture for NAT44 Endpoint-Independent-Filtering Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#nat44_eif_limit_exceeded VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#nat44_eif_limit_exceeded}
  */
  readonly nat44EifLimitExceeded?: number;
  /**
  * Enable automatic packet-capture for NAT44 Endpoint-Dependent Filtering Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#nat44_inbound_filtered VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#nat44_inbound_filtered}
  */
  readonly nat44InboundFiltered?: number;
  /**
  * Enable automatic packet-capture for NAT64 Endpoint-Independent-Filtering Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#nat64_eif_limit_exceeded VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#nat64_eif_limit_exceeded}
  */
  readonly nat64EifLimitExceeded?: number;
  /**
  * Enable automatic packet-capture for NAT64 Endpoint-Dependent Filtering Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#nat64_inbound_filtered VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#nat64_inbound_filtered}
  */
  readonly nat64InboundFiltered?: number;
  /**
  * Enable automatic packet-capture for ICMP NAT Port Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#nat_port_unavailable_icmp VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#nat_port_unavailable_icmp}
  */
  readonly natPortUnavailableIcmp?: number;
  /**
  * Enable automatic packet-capture for TCP NAT Port Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#nat_port_unavailable_tcp VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#nat_port_unavailable_tcp}
  */
  readonly natPortUnavailableTcp?: number;
  /**
  * Enable automatic packet-capture for UDP NAT Port Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#nat_port_unavailable_udp VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#nat_port_unavailable_udp}
  */
  readonly natPortUnavailableUdp?: number;
  /**
  * Enable automatic packet-capture for Port overload failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#port_overload_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#port_overload_failed}
  */
  readonly portOverloadFailed?: number;
  /**
  * Enable automatic packet-capture for Sessions User Quota Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#session_user_quota_exceeded VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#session_user_quota_exceeded}
  */
  readonly sessionUserQuotaExceeded?: number;
  /**
  * Enable automatic packet-capture for Fixed NAT IPv6 in IPv4 Packet Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#sixrd_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#sixrd_drop}
  */
  readonly sixrdDrop?: number;
  /**
  * Enable automatic packet-capture for Fixed NAT LID Standby Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#standby_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#standby_drop}
  */
  readonly standbyDrop?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_not_found: cdktf.numberToTerraform(struct!.configNotFound),
    dest_rlist_drop: cdktf.numberToTerraform(struct!.destRlistDrop),
    dest_rlist_pass_through: cdktf.numberToTerraform(struct!.destRlistPassThrough),
    dest_rlist_snat_drop: cdktf.numberToTerraform(struct!.destRlistSnatDrop),
    dslite_eif_limit_exceeded: cdktf.numberToTerraform(struct!.dsliteEifLimitExceeded),
    dslite_inbound_filtered: cdktf.numberToTerraform(struct!.dsliteInboundFiltered),
    duration: cdktf.numberToTerraform(struct!.duration),
    fixed_nat_fullcone_self_hairpinning_dro: cdktf.numberToTerraform(struct!.fixedNatFullconeSelfHairpinningDro),
    fullcone_failure: cdktf.numberToTerraform(struct!.fullconeFailure),
    ha_session_user_quota_exceeded: cdktf.numberToTerraform(struct!.haSessionUserQuotaExceeded),
    nat44_eif_limit_exceeded: cdktf.numberToTerraform(struct!.nat44EifLimitExceeded),
    nat44_inbound_filtered: cdktf.numberToTerraform(struct!.nat44InboundFiltered),
    nat64_eif_limit_exceeded: cdktf.numberToTerraform(struct!.nat64EifLimitExceeded),
    nat64_inbound_filtered: cdktf.numberToTerraform(struct!.nat64InboundFiltered),
    nat_port_unavailable_icmp: cdktf.numberToTerraform(struct!.natPortUnavailableIcmp),
    nat_port_unavailable_tcp: cdktf.numberToTerraform(struct!.natPortUnavailableTcp),
    nat_port_unavailable_udp: cdktf.numberToTerraform(struct!.natPortUnavailableUdp),
    port_overload_failed: cdktf.numberToTerraform(struct!.portOverloadFailed),
    session_user_quota_exceeded: cdktf.numberToTerraform(struct!.sessionUserQuotaExceeded),
    sixrd_drop: cdktf.numberToTerraform(struct!.sixrdDrop),
    standby_drop: cdktf.numberToTerraform(struct!.standbyDrop),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_not_found: {
      value: cdktf.numberToHclTerraform(struct!.configNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dest_rlist_drop: {
      value: cdktf.numberToHclTerraform(struct!.destRlistDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dest_rlist_pass_through: {
      value: cdktf.numberToHclTerraform(struct!.destRlistPassThrough),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dest_rlist_snat_drop: {
      value: cdktf.numberToHclTerraform(struct!.destRlistSnatDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dslite_eif_limit_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.dsliteEifLimitExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dslite_inbound_filtered: {
      value: cdktf.numberToHclTerraform(struct!.dsliteInboundFiltered),
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
    fixed_nat_fullcone_self_hairpinning_dro: {
      value: cdktf.numberToHclTerraform(struct!.fixedNatFullconeSelfHairpinningDro),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fullcone_failure: {
      value: cdktf.numberToHclTerraform(struct!.fullconeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_session_user_quota_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.haSessionUserQuotaExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat44_eif_limit_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.nat44EifLimitExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat44_inbound_filtered: {
      value: cdktf.numberToHclTerraform(struct!.nat44InboundFiltered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat64_eif_limit_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.nat64EifLimitExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat64_inbound_filtered: {
      value: cdktf.numberToHclTerraform(struct!.nat64InboundFiltered),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_port_unavailable_icmp: {
      value: cdktf.numberToHclTerraform(struct!.natPortUnavailableIcmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_port_unavailable_tcp: {
      value: cdktf.numberToHclTerraform(struct!.natPortUnavailableTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_port_unavailable_udp: {
      value: cdktf.numberToHclTerraform(struct!.natPortUnavailableUdp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_overload_failed: {
      value: cdktf.numberToHclTerraform(struct!.portOverloadFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    session_user_quota_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.sessionUserQuotaExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sixrd_drop: {
      value: cdktf.numberToHclTerraform(struct!.sixrdDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    standby_drop: {
      value: cdktf.numberToHclTerraform(struct!.standbyDrop),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.configNotFound = this._configNotFound;
    }
    if (this._destRlistDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.destRlistDrop = this._destRlistDrop;
    }
    if (this._destRlistPassThrough !== undefined) {
      hasAnyValues = true;
      internalValueResult.destRlistPassThrough = this._destRlistPassThrough;
    }
    if (this._destRlistSnatDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.destRlistSnatDrop = this._destRlistSnatDrop;
    }
    if (this._dsliteEifLimitExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsliteEifLimitExceeded = this._dsliteEifLimitExceeded;
    }
    if (this._dsliteInboundFiltered !== undefined) {
      hasAnyValues = true;
      internalValueResult.dsliteInboundFiltered = this._dsliteInboundFiltered;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._fixedNatFullconeSelfHairpinningDro !== undefined) {
      hasAnyValues = true;
      internalValueResult.fixedNatFullconeSelfHairpinningDro = this._fixedNatFullconeSelfHairpinningDro;
    }
    if (this._fullconeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullconeFailure = this._fullconeFailure;
    }
    if (this._haSessionUserQuotaExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.haSessionUserQuotaExceeded = this._haSessionUserQuotaExceeded;
    }
    if (this._nat44EifLimitExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat44EifLimitExceeded = this._nat44EifLimitExceeded;
    }
    if (this._nat44InboundFiltered !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat44InboundFiltered = this._nat44InboundFiltered;
    }
    if (this._nat64EifLimitExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64EifLimitExceeded = this._nat64EifLimitExceeded;
    }
    if (this._nat64InboundFiltered !== undefined) {
      hasAnyValues = true;
      internalValueResult.nat64InboundFiltered = this._nat64InboundFiltered;
    }
    if (this._natPortUnavailableIcmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPortUnavailableIcmp = this._natPortUnavailableIcmp;
    }
    if (this._natPortUnavailableTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPortUnavailableTcp = this._natPortUnavailableTcp;
    }
    if (this._natPortUnavailableUdp !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPortUnavailableUdp = this._natPortUnavailableUdp;
    }
    if (this._portOverloadFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.portOverloadFailed = this._portOverloadFailed;
    }
    if (this._sessionUserQuotaExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionUserQuotaExceeded = this._sessionUserQuotaExceeded;
    }
    if (this._sixrdDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.sixrdDrop = this._sixrdDrop;
    }
    if (this._standbyDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.standbyDrop = this._standbyDrop;
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

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configNotFound = undefined;
      this._destRlistDrop = undefined;
      this._destRlistPassThrough = undefined;
      this._destRlistSnatDrop = undefined;
      this._dsliteEifLimitExceeded = undefined;
      this._dsliteInboundFiltered = undefined;
      this._duration = undefined;
      this._fixedNatFullconeSelfHairpinningDro = undefined;
      this._fullconeFailure = undefined;
      this._haSessionUserQuotaExceeded = undefined;
      this._nat44EifLimitExceeded = undefined;
      this._nat44InboundFiltered = undefined;
      this._nat64EifLimitExceeded = undefined;
      this._nat64InboundFiltered = undefined;
      this._natPortUnavailableIcmp = undefined;
      this._natPortUnavailableTcp = undefined;
      this._natPortUnavailableUdp = undefined;
      this._portOverloadFailed = undefined;
      this._sessionUserQuotaExceeded = undefined;
      this._sixrdDrop = undefined;
      this._standbyDrop = undefined;
      this._thresholdExceededBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configNotFound = value.configNotFound;
      this._destRlistDrop = value.destRlistDrop;
      this._destRlistPassThrough = value.destRlistPassThrough;
      this._destRlistSnatDrop = value.destRlistSnatDrop;
      this._dsliteEifLimitExceeded = value.dsliteEifLimitExceeded;
      this._dsliteInboundFiltered = value.dsliteInboundFiltered;
      this._duration = value.duration;
      this._fixedNatFullconeSelfHairpinningDro = value.fixedNatFullconeSelfHairpinningDro;
      this._fullconeFailure = value.fullconeFailure;
      this._haSessionUserQuotaExceeded = value.haSessionUserQuotaExceeded;
      this._nat44EifLimitExceeded = value.nat44EifLimitExceeded;
      this._nat44InboundFiltered = value.nat44InboundFiltered;
      this._nat64EifLimitExceeded = value.nat64EifLimitExceeded;
      this._nat64InboundFiltered = value.nat64InboundFiltered;
      this._natPortUnavailableIcmp = value.natPortUnavailableIcmp;
      this._natPortUnavailableTcp = value.natPortUnavailableTcp;
      this._natPortUnavailableUdp = value.natPortUnavailableUdp;
      this._portOverloadFailed = value.portOverloadFailed;
      this._sessionUserQuotaExceeded = value.sessionUserQuotaExceeded;
      this._sixrdDrop = value.sixrdDrop;
      this._standbyDrop = value.standbyDrop;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._uuid = value.uuid;
    }
  }

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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_fixed_nat_global',
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
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsRateA) {
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
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6FixedNatGlobalTriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
