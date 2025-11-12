// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global_trigger_stats_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global_trigger_stats_rate#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Endpoint-Independent Filtering Inbound Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global_trigger_stats_rate#eif_limit_exceeded VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA#eif_limit_exceeded}
  */
  readonly eifLimitExceeded?: number;
  /**
  * Enable automatic packet-capture for Full-cone Session Creation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global_trigger_stats_rate#fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA#fullcone_failure}
  */
  readonly fullconeFailure?: number;
  /**
  * Enable automatic packet-capture for Self-Hairpinning Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global_trigger_stats_rate#fullcone_self_hairpinning_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA#fullcone_self_hairpinning_drop}
  */
  readonly fullconeSelfHairpinningDrop?: number;
  /**
  * Enable automatic packet-capture for HA NAT Pool Batch Type Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global_trigger_stats_rate#ha_nat_pool_batch_type_mismatch VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA#ha_nat_pool_batch_type_mismatch}
  */
  readonly haNatPoolBatchTypeMismatch?: number;
  /**
  * Enable automatic packet-capture for HA NAT Pool Unusable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global_trigger_stats_rate#ha_nat_pool_unusable VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA#ha_nat_pool_unusable}
  */
  readonly haNatPoolUnusable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global_trigger_stats_rate#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global_trigger_stats_rate#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for NAT Pool Unusable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global_trigger_stats_rate#nat_pool_unusable VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA#nat_pool_unusable}
  */
  readonly natPoolUnusable?: number;
  /**
  * Enable automatic packet-capture for ICMP NAT Port Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global_trigger_stats_rate#nat_port_unavailable_icmp VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA#nat_port_unavailable_icmp}
  */
  readonly natPortUnavailableIcmp?: number;
  /**
  * Enable automatic packet-capture for TCP NAT Port Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global_trigger_stats_rate#nat_port_unavailable_tcp VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA#nat_port_unavailable_tcp}
  */
  readonly natPortUnavailableTcp?: number;
  /**
  * Enable automatic packet-capture for UDP NAT Port Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global_trigger_stats_rate#nat_port_unavailable_udp VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA#nat_port_unavailable_udp}
  */
  readonly natPortUnavailableUdp?: number;
  /**
  * Enable automatic packet-capture for New User NAT Resource Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global_trigger_stats_rate#new_user_resource_unavailable VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA#new_user_resource_unavailable}
  */
  readonly newUserResourceUnavailable?: number;
  /**
  * Enable automatic packet-capture for No Class-List Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global_trigger_stats_rate#no_class_list_match VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA#no_class_list_match}
  */
  readonly noClassListMatch?: number;
  /**
  * Enable automatic packet-capture for No RADIUS Profile Match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global_trigger_stats_rate#no_radius_profile_match VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA#no_radius_profile_match}
  */
  readonly noRadiusProfileMatch?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global_trigger_stats_rate#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for User-Quota Creation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global_trigger_stats_rate#user_quota_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA#user_quota_failure}
  */
  readonly userQuotaFailure?: number;
  /**
  * Enable automatic packet-capture for User-Quota Marked Unusable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global_trigger_stats_rate#user_quota_unusable VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA#user_quota_unusable}
  */
  readonly userQuotaUnusable?: number;
  /**
  * Enable automatic packet-capture for User-Quota Unusable Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global_trigger_stats_rate#user_quota_unusable_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA#user_quota_unusable_drop}
  */
  readonly userQuotaUnusableDrop?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global_trigger_stats_rate#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global_trigger_stats_rate}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global_trigger_stats_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global_trigger_stats_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global_trigger_stats_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global_trigger_stats_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6Nat64GlobalTriggerStatsRateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_nat64_global_trigger_stats_rate',
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
    this._duration = config.duration;
    this._eifLimitExceeded = config.eifLimitExceeded;
    this._fullconeFailure = config.fullconeFailure;
    this._fullconeSelfHairpinningDrop = config.fullconeSelfHairpinningDrop;
    this._haNatPoolBatchTypeMismatch = config.haNatPoolBatchTypeMismatch;
    this._haNatPoolUnusable = config.haNatPoolUnusable;
    this._id = config.id;
    this._name = config.name;
    this._natPoolUnusable = config.natPoolUnusable;
    this._natPortUnavailableIcmp = config.natPortUnavailableIcmp;
    this._natPortUnavailableTcp = config.natPortUnavailableTcp;
    this._natPortUnavailableUdp = config.natPortUnavailableUdp;
    this._newUserResourceUnavailable = config.newUserResourceUnavailable;
    this._noClassListMatch = config.noClassListMatch;
    this._noRadiusProfileMatch = config.noRadiusProfileMatch;
    this._thresholdExceededBy = config.thresholdExceededBy;
    this._userQuotaFailure = config.userQuotaFailure;
    this._userQuotaUnusable = config.userQuotaUnusable;
    this._userQuotaUnusableDrop = config.userQuotaUnusableDrop;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      duration: cdktf.numberToTerraform(this._duration),
      eif_limit_exceeded: cdktf.numberToTerraform(this._eifLimitExceeded),
      fullcone_failure: cdktf.numberToTerraform(this._fullconeFailure),
      fullcone_self_hairpinning_drop: cdktf.numberToTerraform(this._fullconeSelfHairpinningDrop),
      ha_nat_pool_batch_type_mismatch: cdktf.numberToTerraform(this._haNatPoolBatchTypeMismatch),
      ha_nat_pool_unusable: cdktf.numberToTerraform(this._haNatPoolUnusable),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      nat_pool_unusable: cdktf.numberToTerraform(this._natPoolUnusable),
      nat_port_unavailable_icmp: cdktf.numberToTerraform(this._natPortUnavailableIcmp),
      nat_port_unavailable_tcp: cdktf.numberToTerraform(this._natPortUnavailableTcp),
      nat_port_unavailable_udp: cdktf.numberToTerraform(this._natPortUnavailableUdp),
      new_user_resource_unavailable: cdktf.numberToTerraform(this._newUserResourceUnavailable),
      no_class_list_match: cdktf.numberToTerraform(this._noClassListMatch),
      no_radius_profile_match: cdktf.numberToTerraform(this._noRadiusProfileMatch),
      threshold_exceeded_by: cdktf.numberToTerraform(this._thresholdExceededBy),
      user_quota_failure: cdktf.numberToTerraform(this._userQuotaFailure),
      user_quota_unusable: cdktf.numberToTerraform(this._userQuotaUnusable),
      user_quota_unusable_drop: cdktf.numberToTerraform(this._userQuotaUnusableDrop),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      eif_limit_exceeded: {
        value: cdktf.numberToHclTerraform(this._eifLimitExceeded),
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
      fullcone_self_hairpinning_drop: {
        value: cdktf.numberToHclTerraform(this._fullconeSelfHairpinningDrop),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ha_nat_pool_batch_type_mismatch: {
        value: cdktf.numberToHclTerraform(this._haNatPoolBatchTypeMismatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ha_nat_pool_unusable: {
        value: cdktf.numberToHclTerraform(this._haNatPoolUnusable),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_pool_unusable: {
        value: cdktf.numberToHclTerraform(this._natPoolUnusable),
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
      new_user_resource_unavailable: {
        value: cdktf.numberToHclTerraform(this._newUserResourceUnavailable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_class_list_match: {
        value: cdktf.numberToHclTerraform(this._noClassListMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      no_radius_profile_match: {
        value: cdktf.numberToHclTerraform(this._noRadiusProfileMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_exceeded_by: {
        value: cdktf.numberToHclTerraform(this._thresholdExceededBy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_quota_failure: {
        value: cdktf.numberToHclTerraform(this._userQuotaFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_quota_unusable: {
        value: cdktf.numberToHclTerraform(this._userQuotaUnusable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_quota_unusable_drop: {
        value: cdktf.numberToHclTerraform(this._userQuotaUnusableDrop),
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
