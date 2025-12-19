// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#template_name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#template_name}
  */
  readonly templateName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for Endpoint-Independent Filtering Inbound Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#eif_limit_exceeded VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#eif_limit_exceeded}
  */
  readonly eifLimitExceeded?: number;
  /**
  * Enable automatic packet-capture for Full-cone Session Creation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#fullcone_failure}
  */
  readonly fullconeFailure?: number;
  /**
  * Enable automatic packet-capture for Self-Hairpinning Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#fullcone_self_hairpinning_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#fullcone_self_hairpinning_drop}
  */
  readonly fullconeSelfHairpinningDrop?: number;
  /**
  * Enable automatic packet-capture for HA NAT Pool Batch Type Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#ha_nat_pool_batch_type_mismatch VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#ha_nat_pool_batch_type_mismatch}
  */
  readonly haNatPoolBatchTypeMismatch?: number;
  /**
  * Enable automatic packet-capture for HA NAT Pool Unusable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#ha_nat_pool_unusable VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#ha_nat_pool_unusable}
  */
  readonly haNatPoolUnusable?: number;
  /**
  * Enable automatic packet-capture for NAT Pool Unusable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#nat_pool_unusable VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#nat_pool_unusable}
  */
  readonly natPoolUnusable?: number;
  /**
  * Enable automatic packet-capture for ICMP NAT Port Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#nat_port_unavailable_icmp VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#nat_port_unavailable_icmp}
  */
  readonly natPortUnavailableIcmp?: number;
  /**
  * Enable automatic packet-capture for TCP NAT Port Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#nat_port_unavailable_tcp VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#nat_port_unavailable_tcp}
  */
  readonly natPortUnavailableTcp?: number;
  /**
  * Enable automatic packet-capture for UDP NAT Port Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#nat_port_unavailable_udp VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#nat_port_unavailable_udp}
  */
  readonly natPortUnavailableUdp?: number;
  /**
  * Enable automatic packet-capture for New User NAT Resource Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#new_user_resource_unavailable VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#new_user_resource_unavailable}
  */
  readonly newUserResourceUnavailable?: number;
  /**
  * Enable automatic packet-capture for No Class-List Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#no_class_list_match VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#no_class_list_match}
  */
  readonly noClassListMatch?: number;
  /**
  * Enable automatic packet-capture for No RADIUS Profile Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#no_radius_profile_match VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#no_radius_profile_match}
  */
  readonly noRadiusProfileMatch?: number;
  /**
  * Enable automatic packet-capture for User-Quota Creation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#user_quota_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#user_quota_failure}
  */
  readonly userQuotaFailure?: number;
  /**
  * Enable automatic packet-capture for User-Quota Marked Unusable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#user_quota_unusable VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#user_quota_unusable}
  */
  readonly userQuotaUnusable?: number;
  /**
  * Enable automatic packet-capture for User-Quota Unusable Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#user_quota_unusable_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#user_quota_unusable_drop}
  */
  readonly userQuotaUnusableDrop?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    eif_limit_exceeded: cdktf.numberToTerraform(struct!.eifLimitExceeded),
    fullcone_failure: cdktf.numberToTerraform(struct!.fullconeFailure),
    fullcone_self_hairpinning_drop: cdktf.numberToTerraform(struct!.fullconeSelfHairpinningDrop),
    ha_nat_pool_batch_type_mismatch: cdktf.numberToTerraform(struct!.haNatPoolBatchTypeMismatch),
    ha_nat_pool_unusable: cdktf.numberToTerraform(struct!.haNatPoolUnusable),
    nat_pool_unusable: cdktf.numberToTerraform(struct!.natPoolUnusable),
    nat_port_unavailable_icmp: cdktf.numberToTerraform(struct!.natPortUnavailableIcmp),
    nat_port_unavailable_tcp: cdktf.numberToTerraform(struct!.natPortUnavailableTcp),
    nat_port_unavailable_udp: cdktf.numberToTerraform(struct!.natPortUnavailableUdp),
    new_user_resource_unavailable: cdktf.numberToTerraform(struct!.newUserResourceUnavailable),
    no_class_list_match: cdktf.numberToTerraform(struct!.noClassListMatch),
    no_radius_profile_match: cdktf.numberToTerraform(struct!.noRadiusProfileMatch),
    user_quota_failure: cdktf.numberToTerraform(struct!.userQuotaFailure),
    user_quota_unusable: cdktf.numberToTerraform(struct!.userQuotaUnusable),
    user_quota_unusable_drop: cdktf.numberToTerraform(struct!.userQuotaUnusableDrop),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    eif_limit_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.eifLimitExceeded),
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
    fullcone_self_hairpinning_drop: {
      value: cdktf.numberToHclTerraform(struct!.fullconeSelfHairpinningDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_nat_pool_batch_type_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.haNatPoolBatchTypeMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_nat_pool_unusable: {
      value: cdktf.numberToHclTerraform(struct!.haNatPoolUnusable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_pool_unusable: {
      value: cdktf.numberToHclTerraform(struct!.natPoolUnusable),
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
    new_user_resource_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.newUserResourceUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_class_list_match: {
      value: cdktf.numberToHclTerraform(struct!.noClassListMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_radius_profile_match: {
      value: cdktf.numberToHclTerraform(struct!.noRadiusProfileMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_quota_failure: {
      value: cdktf.numberToHclTerraform(struct!.userQuotaFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_quota_unusable: {
      value: cdktf.numberToHclTerraform(struct!.userQuotaUnusable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_quota_unusable_drop: {
      value: cdktf.numberToHclTerraform(struct!.userQuotaUnusableDrop),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eifLimitExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.eifLimitExceeded = this._eifLimitExceeded;
    }
    if (this._fullconeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullconeFailure = this._fullconeFailure;
    }
    if (this._fullconeSelfHairpinningDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullconeSelfHairpinningDrop = this._fullconeSelfHairpinningDrop;
    }
    if (this._haNatPoolBatchTypeMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.haNatPoolBatchTypeMismatch = this._haNatPoolBatchTypeMismatch;
    }
    if (this._haNatPoolUnusable !== undefined) {
      hasAnyValues = true;
      internalValueResult.haNatPoolUnusable = this._haNatPoolUnusable;
    }
    if (this._natPoolUnusable !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolUnusable = this._natPoolUnusable;
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
    if (this._newUserResourceUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.newUserResourceUnavailable = this._newUserResourceUnavailable;
    }
    if (this._noClassListMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.noClassListMatch = this._noClassListMatch;
    }
    if (this._noRadiusProfileMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRadiusProfileMatch = this._noRadiusProfileMatch;
    }
    if (this._userQuotaFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.userQuotaFailure = this._userQuotaFailure;
    }
    if (this._userQuotaUnusable !== undefined) {
      hasAnyValues = true;
      internalValueResult.userQuotaUnusable = this._userQuotaUnusable;
    }
    if (this._userQuotaUnusableDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.userQuotaUnusableDrop = this._userQuotaUnusableDrop;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._eifLimitExceeded = undefined;
      this._fullconeFailure = undefined;
      this._fullconeSelfHairpinningDrop = undefined;
      this._haNatPoolBatchTypeMismatch = undefined;
      this._haNatPoolUnusable = undefined;
      this._natPoolUnusable = undefined;
      this._natPortUnavailableIcmp = undefined;
      this._natPortUnavailableTcp = undefined;
      this._natPortUnavailableUdp = undefined;
      this._newUserResourceUnavailable = undefined;
      this._noClassListMatch = undefined;
      this._noRadiusProfileMatch = undefined;
      this._userQuotaFailure = undefined;
      this._userQuotaUnusable = undefined;
      this._userQuotaUnusableDrop = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._eifLimitExceeded = value.eifLimitExceeded;
      this._fullconeFailure = value.fullconeFailure;
      this._fullconeSelfHairpinningDrop = value.fullconeSelfHairpinningDrop;
      this._haNatPoolBatchTypeMismatch = value.haNatPoolBatchTypeMismatch;
      this._haNatPoolUnusable = value.haNatPoolUnusable;
      this._natPoolUnusable = value.natPoolUnusable;
      this._natPortUnavailableIcmp = value.natPortUnavailableIcmp;
      this._natPortUnavailableTcp = value.natPortUnavailableTcp;
      this._natPortUnavailableUdp = value.natPortUnavailableUdp;
      this._newUserResourceUnavailable = value.newUserResourceUnavailable;
      this._noClassListMatch = value.noClassListMatch;
      this._noRadiusProfileMatch = value.noRadiusProfileMatch;
      this._userQuotaFailure = value.userQuotaFailure;
      this._userQuotaUnusable = value.userQuotaUnusable;
      this._userQuotaUnusableDrop = value.userQuotaUnusableDrop;
      this._uuid = value.uuid;
    }
  }

  // eif_limit_exceeded - computed: false, optional: true, required: false
  private _eifLimitExceeded?: number; 
  public get eifLimitExceeded() {
    return this.getNumberAttribute('eif_limit_exceeded');
  }
  public set eifLimitExceeded(value: number) {
    this._eifLimitExceeded = value;
  }
  public resetEifLimitExceeded() {
    this._eifLimitExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eifLimitExceededInput() {
    return this._eifLimitExceeded;
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

  // fullcone_self_hairpinning_drop - computed: false, optional: true, required: false
  private _fullconeSelfHairpinningDrop?: number; 
  public get fullconeSelfHairpinningDrop() {
    return this.getNumberAttribute('fullcone_self_hairpinning_drop');
  }
  public set fullconeSelfHairpinningDrop(value: number) {
    this._fullconeSelfHairpinningDrop = value;
  }
  public resetFullconeSelfHairpinningDrop() {
    this._fullconeSelfHairpinningDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullconeSelfHairpinningDropInput() {
    return this._fullconeSelfHairpinningDrop;
  }

  // ha_nat_pool_batch_type_mismatch - computed: false, optional: true, required: false
  private _haNatPoolBatchTypeMismatch?: number; 
  public get haNatPoolBatchTypeMismatch() {
    return this.getNumberAttribute('ha_nat_pool_batch_type_mismatch');
  }
  public set haNatPoolBatchTypeMismatch(value: number) {
    this._haNatPoolBatchTypeMismatch = value;
  }
  public resetHaNatPoolBatchTypeMismatch() {
    this._haNatPoolBatchTypeMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haNatPoolBatchTypeMismatchInput() {
    return this._haNatPoolBatchTypeMismatch;
  }

  // ha_nat_pool_unusable - computed: false, optional: true, required: false
  private _haNatPoolUnusable?: number; 
  public get haNatPoolUnusable() {
    return this.getNumberAttribute('ha_nat_pool_unusable');
  }
  public set haNatPoolUnusable(value: number) {
    this._haNatPoolUnusable = value;
  }
  public resetHaNatPoolUnusable() {
    this._haNatPoolUnusable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haNatPoolUnusableInput() {
    return this._haNatPoolUnusable;
  }

  // nat_pool_unusable - computed: false, optional: true, required: false
  private _natPoolUnusable?: number; 
  public get natPoolUnusable() {
    return this.getNumberAttribute('nat_pool_unusable');
  }
  public set natPoolUnusable(value: number) {
    this._natPoolUnusable = value;
  }
  public resetNatPoolUnusable() {
    this._natPoolUnusable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolUnusableInput() {
    return this._natPoolUnusable;
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

  // new_user_resource_unavailable - computed: false, optional: true, required: false
  private _newUserResourceUnavailable?: number; 
  public get newUserResourceUnavailable() {
    return this.getNumberAttribute('new_user_resource_unavailable');
  }
  public set newUserResourceUnavailable(value: number) {
    this._newUserResourceUnavailable = value;
  }
  public resetNewUserResourceUnavailable() {
    this._newUserResourceUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newUserResourceUnavailableInput() {
    return this._newUserResourceUnavailable;
  }

  // no_class_list_match - computed: false, optional: true, required: false
  private _noClassListMatch?: number; 
  public get noClassListMatch() {
    return this.getNumberAttribute('no_class_list_match');
  }
  public set noClassListMatch(value: number) {
    this._noClassListMatch = value;
  }
  public resetNoClassListMatch() {
    this._noClassListMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noClassListMatchInput() {
    return this._noClassListMatch;
  }

  // no_radius_profile_match - computed: false, optional: true, required: false
  private _noRadiusProfileMatch?: number; 
  public get noRadiusProfileMatch() {
    return this.getNumberAttribute('no_radius_profile_match');
  }
  public set noRadiusProfileMatch(value: number) {
    this._noRadiusProfileMatch = value;
  }
  public resetNoRadiusProfileMatch() {
    this._noRadiusProfileMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRadiusProfileMatchInput() {
    return this._noRadiusProfileMatch;
  }

  // user_quota_failure - computed: false, optional: true, required: false
  private _userQuotaFailure?: number; 
  public get userQuotaFailure() {
    return this.getNumberAttribute('user_quota_failure');
  }
  public set userQuotaFailure(value: number) {
    this._userQuotaFailure = value;
  }
  public resetUserQuotaFailure() {
    this._userQuotaFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userQuotaFailureInput() {
    return this._userQuotaFailure;
  }

  // user_quota_unusable - computed: false, optional: true, required: false
  private _userQuotaUnusable?: number; 
  public get userQuotaUnusable() {
    return this.getNumberAttribute('user_quota_unusable');
  }
  public set userQuotaUnusable(value: number) {
    this._userQuotaUnusable = value;
  }
  public resetUserQuotaUnusable() {
    this._userQuotaUnusable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userQuotaUnusableInput() {
    return this._userQuotaUnusable;
  }

  // user_quota_unusable_drop - computed: false, optional: true, required: false
  private _userQuotaUnusableDrop?: number; 
  public get userQuotaUnusableDrop() {
    return this.getNumberAttribute('user_quota_unusable_drop');
  }
  public set userQuotaUnusableDrop(value: number) {
    this._userQuotaUnusableDrop = value;
  }
  public resetUserQuotaUnusableDrop() {
    this._userQuotaUnusableDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userQuotaUnusableDropInput() {
    return this._userQuotaUnusableDrop;
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
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Endpoint-Independent Filtering Inbound Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#eif_limit_exceeded VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#eif_limit_exceeded}
  */
  readonly eifLimitExceeded?: number;
  /**
  * Enable automatic packet-capture for Full-cone Session Creation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#fullcone_failure}
  */
  readonly fullconeFailure?: number;
  /**
  * Enable automatic packet-capture for Self-Hairpinning Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#fullcone_self_hairpinning_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#fullcone_self_hairpinning_drop}
  */
  readonly fullconeSelfHairpinningDrop?: number;
  /**
  * Enable automatic packet-capture for HA NAT Pool Batch Type Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#ha_nat_pool_batch_type_mismatch VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#ha_nat_pool_batch_type_mismatch}
  */
  readonly haNatPoolBatchTypeMismatch?: number;
  /**
  * Enable automatic packet-capture for HA NAT Pool Unusable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#ha_nat_pool_unusable VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#ha_nat_pool_unusable}
  */
  readonly haNatPoolUnusable?: number;
  /**
  * Enable automatic packet-capture for NAT Pool Unusable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#nat_pool_unusable VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#nat_pool_unusable}
  */
  readonly natPoolUnusable?: number;
  /**
  * Enable automatic packet-capture for ICMP NAT Port Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#nat_port_unavailable_icmp VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#nat_port_unavailable_icmp}
  */
  readonly natPortUnavailableIcmp?: number;
  /**
  * Enable automatic packet-capture for TCP NAT Port Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#nat_port_unavailable_tcp VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#nat_port_unavailable_tcp}
  */
  readonly natPortUnavailableTcp?: number;
  /**
  * Enable automatic packet-capture for UDP NAT Port Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#nat_port_unavailable_udp VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#nat_port_unavailable_udp}
  */
  readonly natPortUnavailableUdp?: number;
  /**
  * Enable automatic packet-capture for New User NAT Resource Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#new_user_resource_unavailable VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#new_user_resource_unavailable}
  */
  readonly newUserResourceUnavailable?: number;
  /**
  * Enable automatic packet-capture for No Class-List Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#no_class_list_match VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#no_class_list_match}
  */
  readonly noClassListMatch?: number;
  /**
  * Enable automatic packet-capture for No RADIUS Profile Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#no_radius_profile_match VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#no_radius_profile_match}
  */
  readonly noRadiusProfileMatch?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for User-Quota Creation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#user_quota_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#user_quota_failure}
  */
  readonly userQuotaFailure?: number;
  /**
  * Enable automatic packet-capture for User-Quota Marked Unusable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#user_quota_unusable VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#user_quota_unusable}
  */
  readonly userQuotaUnusable?: number;
  /**
  * Enable automatic packet-capture for User-Quota Unusable Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#user_quota_unusable_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#user_quota_unusable_drop}
  */
  readonly userQuotaUnusableDrop?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    eif_limit_exceeded: cdktf.numberToTerraform(struct!.eifLimitExceeded),
    fullcone_failure: cdktf.numberToTerraform(struct!.fullconeFailure),
    fullcone_self_hairpinning_drop: cdktf.numberToTerraform(struct!.fullconeSelfHairpinningDrop),
    ha_nat_pool_batch_type_mismatch: cdktf.numberToTerraform(struct!.haNatPoolBatchTypeMismatch),
    ha_nat_pool_unusable: cdktf.numberToTerraform(struct!.haNatPoolUnusable),
    nat_pool_unusable: cdktf.numberToTerraform(struct!.natPoolUnusable),
    nat_port_unavailable_icmp: cdktf.numberToTerraform(struct!.natPortUnavailableIcmp),
    nat_port_unavailable_tcp: cdktf.numberToTerraform(struct!.natPortUnavailableTcp),
    nat_port_unavailable_udp: cdktf.numberToTerraform(struct!.natPortUnavailableUdp),
    new_user_resource_unavailable: cdktf.numberToTerraform(struct!.newUserResourceUnavailable),
    no_class_list_match: cdktf.numberToTerraform(struct!.noClassListMatch),
    no_radius_profile_match: cdktf.numberToTerraform(struct!.noRadiusProfileMatch),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    user_quota_failure: cdktf.numberToTerraform(struct!.userQuotaFailure),
    user_quota_unusable: cdktf.numberToTerraform(struct!.userQuotaUnusable),
    user_quota_unusable_drop: cdktf.numberToTerraform(struct!.userQuotaUnusableDrop),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA): any {
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
    eif_limit_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.eifLimitExceeded),
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
    fullcone_self_hairpinning_drop: {
      value: cdktf.numberToHclTerraform(struct!.fullconeSelfHairpinningDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_nat_pool_batch_type_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.haNatPoolBatchTypeMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ha_nat_pool_unusable: {
      value: cdktf.numberToHclTerraform(struct!.haNatPoolUnusable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    nat_pool_unusable: {
      value: cdktf.numberToHclTerraform(struct!.natPoolUnusable),
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
    new_user_resource_unavailable: {
      value: cdktf.numberToHclTerraform(struct!.newUserResourceUnavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_class_list_match: {
      value: cdktf.numberToHclTerraform(struct!.noClassListMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_radius_profile_match: {
      value: cdktf.numberToHclTerraform(struct!.noRadiusProfileMatch),
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
    user_quota_failure: {
      value: cdktf.numberToHclTerraform(struct!.userQuotaFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_quota_unusable: {
      value: cdktf.numberToHclTerraform(struct!.userQuotaUnusable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_quota_unusable_drop: {
      value: cdktf.numberToHclTerraform(struct!.userQuotaUnusableDrop),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._eifLimitExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.eifLimitExceeded = this._eifLimitExceeded;
    }
    if (this._fullconeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullconeFailure = this._fullconeFailure;
    }
    if (this._fullconeSelfHairpinningDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullconeSelfHairpinningDrop = this._fullconeSelfHairpinningDrop;
    }
    if (this._haNatPoolBatchTypeMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.haNatPoolBatchTypeMismatch = this._haNatPoolBatchTypeMismatch;
    }
    if (this._haNatPoolUnusable !== undefined) {
      hasAnyValues = true;
      internalValueResult.haNatPoolUnusable = this._haNatPoolUnusable;
    }
    if (this._natPoolUnusable !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolUnusable = this._natPoolUnusable;
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
    if (this._newUserResourceUnavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.newUserResourceUnavailable = this._newUserResourceUnavailable;
    }
    if (this._noClassListMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.noClassListMatch = this._noClassListMatch;
    }
    if (this._noRadiusProfileMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRadiusProfileMatch = this._noRadiusProfileMatch;
    }
    if (this._thresholdExceededBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdExceededBy = this._thresholdExceededBy;
    }
    if (this._userQuotaFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.userQuotaFailure = this._userQuotaFailure;
    }
    if (this._userQuotaUnusable !== undefined) {
      hasAnyValues = true;
      internalValueResult.userQuotaUnusable = this._userQuotaUnusable;
    }
    if (this._userQuotaUnusableDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.userQuotaUnusableDrop = this._userQuotaUnusableDrop;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._eifLimitExceeded = undefined;
      this._fullconeFailure = undefined;
      this._fullconeSelfHairpinningDrop = undefined;
      this._haNatPoolBatchTypeMismatch = undefined;
      this._haNatPoolUnusable = undefined;
      this._natPoolUnusable = undefined;
      this._natPortUnavailableIcmp = undefined;
      this._natPortUnavailableTcp = undefined;
      this._natPortUnavailableUdp = undefined;
      this._newUserResourceUnavailable = undefined;
      this._noClassListMatch = undefined;
      this._noRadiusProfileMatch = undefined;
      this._thresholdExceededBy = undefined;
      this._userQuotaFailure = undefined;
      this._userQuotaUnusable = undefined;
      this._userQuotaUnusableDrop = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._eifLimitExceeded = value.eifLimitExceeded;
      this._fullconeFailure = value.fullconeFailure;
      this._fullconeSelfHairpinningDrop = value.fullconeSelfHairpinningDrop;
      this._haNatPoolBatchTypeMismatch = value.haNatPoolBatchTypeMismatch;
      this._haNatPoolUnusable = value.haNatPoolUnusable;
      this._natPoolUnusable = value.natPoolUnusable;
      this._natPortUnavailableIcmp = value.natPortUnavailableIcmp;
      this._natPortUnavailableTcp = value.natPortUnavailableTcp;
      this._natPortUnavailableUdp = value.natPortUnavailableUdp;
      this._newUserResourceUnavailable = value.newUserResourceUnavailable;
      this._noClassListMatch = value.noClassListMatch;
      this._noRadiusProfileMatch = value.noRadiusProfileMatch;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._userQuotaFailure = value.userQuotaFailure;
      this._userQuotaUnusable = value.userQuotaUnusable;
      this._userQuotaUnusableDrop = value.userQuotaUnusableDrop;
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

  // eif_limit_exceeded - computed: false, optional: true, required: false
  private _eifLimitExceeded?: number; 
  public get eifLimitExceeded() {
    return this.getNumberAttribute('eif_limit_exceeded');
  }
  public set eifLimitExceeded(value: number) {
    this._eifLimitExceeded = value;
  }
  public resetEifLimitExceeded() {
    this._eifLimitExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eifLimitExceededInput() {
    return this._eifLimitExceeded;
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

  // fullcone_self_hairpinning_drop - computed: false, optional: true, required: false
  private _fullconeSelfHairpinningDrop?: number; 
  public get fullconeSelfHairpinningDrop() {
    return this.getNumberAttribute('fullcone_self_hairpinning_drop');
  }
  public set fullconeSelfHairpinningDrop(value: number) {
    this._fullconeSelfHairpinningDrop = value;
  }
  public resetFullconeSelfHairpinningDrop() {
    this._fullconeSelfHairpinningDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullconeSelfHairpinningDropInput() {
    return this._fullconeSelfHairpinningDrop;
  }

  // ha_nat_pool_batch_type_mismatch - computed: false, optional: true, required: false
  private _haNatPoolBatchTypeMismatch?: number; 
  public get haNatPoolBatchTypeMismatch() {
    return this.getNumberAttribute('ha_nat_pool_batch_type_mismatch');
  }
  public set haNatPoolBatchTypeMismatch(value: number) {
    this._haNatPoolBatchTypeMismatch = value;
  }
  public resetHaNatPoolBatchTypeMismatch() {
    this._haNatPoolBatchTypeMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haNatPoolBatchTypeMismatchInput() {
    return this._haNatPoolBatchTypeMismatch;
  }

  // ha_nat_pool_unusable - computed: false, optional: true, required: false
  private _haNatPoolUnusable?: number; 
  public get haNatPoolUnusable() {
    return this.getNumberAttribute('ha_nat_pool_unusable');
  }
  public set haNatPoolUnusable(value: number) {
    this._haNatPoolUnusable = value;
  }
  public resetHaNatPoolUnusable() {
    this._haNatPoolUnusable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haNatPoolUnusableInput() {
    return this._haNatPoolUnusable;
  }

  // nat_pool_unusable - computed: false, optional: true, required: false
  private _natPoolUnusable?: number; 
  public get natPoolUnusable() {
    return this.getNumberAttribute('nat_pool_unusable');
  }
  public set natPoolUnusable(value: number) {
    this._natPoolUnusable = value;
  }
  public resetNatPoolUnusable() {
    this._natPoolUnusable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolUnusableInput() {
    return this._natPoolUnusable;
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

  // new_user_resource_unavailable - computed: false, optional: true, required: false
  private _newUserResourceUnavailable?: number; 
  public get newUserResourceUnavailable() {
    return this.getNumberAttribute('new_user_resource_unavailable');
  }
  public set newUserResourceUnavailable(value: number) {
    this._newUserResourceUnavailable = value;
  }
  public resetNewUserResourceUnavailable() {
    this._newUserResourceUnavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newUserResourceUnavailableInput() {
    return this._newUserResourceUnavailable;
  }

  // no_class_list_match - computed: false, optional: true, required: false
  private _noClassListMatch?: number; 
  public get noClassListMatch() {
    return this.getNumberAttribute('no_class_list_match');
  }
  public set noClassListMatch(value: number) {
    this._noClassListMatch = value;
  }
  public resetNoClassListMatch() {
    this._noClassListMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noClassListMatchInput() {
    return this._noClassListMatch;
  }

  // no_radius_profile_match - computed: false, optional: true, required: false
  private _noRadiusProfileMatch?: number; 
  public get noRadiusProfileMatch() {
    return this.getNumberAttribute('no_radius_profile_match');
  }
  public set noRadiusProfileMatch(value: number) {
    this._noRadiusProfileMatch = value;
  }
  public resetNoRadiusProfileMatch() {
    this._noRadiusProfileMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRadiusProfileMatchInput() {
    return this._noRadiusProfileMatch;
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

  // user_quota_failure - computed: false, optional: true, required: false
  private _userQuotaFailure?: number; 
  public get userQuotaFailure() {
    return this.getNumberAttribute('user_quota_failure');
  }
  public set userQuotaFailure(value: number) {
    this._userQuotaFailure = value;
  }
  public resetUserQuotaFailure() {
    this._userQuotaFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userQuotaFailureInput() {
    return this._userQuotaFailure;
  }

  // user_quota_unusable - computed: false, optional: true, required: false
  private _userQuotaUnusable?: number; 
  public get userQuotaUnusable() {
    return this.getNumberAttribute('user_quota_unusable');
  }
  public set userQuotaUnusable(value: number) {
    this._userQuotaUnusable = value;
  }
  public resetUserQuotaUnusable() {
    this._userQuotaUnusable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userQuotaUnusableInput() {
    return this._userQuotaUnusable;
  }

  // user_quota_unusable_drop - computed: false, optional: true, required: false
  private _userQuotaUnusableDrop?: number; 
  public get userQuotaUnusableDrop() {
    return this.getNumberAttribute('user_quota_unusable_drop');
  }
  public set userQuotaUnusableDrop(value: number) {
    this._userQuotaUnusableDrop = value;
  }
  public resetUserQuotaUnusableDrop() {
    this._userQuotaUnusableDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userQuotaUnusableDropInput() {
    return this._userQuotaUnusableDrop;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global',
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
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA) {
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
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
