// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for ADC Port Allocation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#adc_port_allocation_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#adc_port_allocation_failed}
  */
  readonly adcPortAllocationFailed?: number;
  /**
  * Enable automatic packet-capture for Data Session User-Quota Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#data_sesn_user_quota_exceeded VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#data_sesn_user_quota_exceeded}
  */
  readonly dataSesnUserQuotaExceeded?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for LSN Fullcone Extension Memory Allocate Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#fullcone_ext_mem_alloc_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#fullcone_ext_mem_alloc_failure}
  */
  readonly fullconeExtMemAllocFailure?: number;
  /**
  * Enable automatic packet-capture for LSN Fullcone Extension Initialization Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#fullcone_ext_mem_alloc_init_faulure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#fullcone_ext_mem_alloc_init_faulure}
  */
  readonly fullconeExtMemAllocInitFaulure?: number;
  /**
  * Enable automatic packet-capture for Full-cone Session Creation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#fullcone_failure}
  */
  readonly fullconeFailure?: number;
  /**
  * Enable automatic packet-capture for Self-Hairpinning Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#fullcone_self_hairpinning_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#fullcone_self_hairpinning_drop}
  */
  readonly fullconeSelfHairpinningDrop?: number;
  /**
  * Enable automatic packet-capture for H323 ALG Alloc Single RTP or RTCP NAT Port Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#h323_alg_alloc_single_port_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#h323_alg_alloc_single_port_failure}
  */
  readonly h323AlgAllocSinglePortFailure?: number;
  /**
  * Enable automatic packet-capture for H323 ALG Create RTCP Full-cone Session Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#h323_alg_create_rtcp_fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#h323_alg_create_rtcp_fullcone_failure}
  */
  readonly h323AlgCreateRtcpFullconeFailure?: number;
  /**
  * Enable automatic packet-capture for H323 ALG Create RTP Full-cone Session Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#h323_alg_create_rtp_fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#h323_alg_create_rtp_fullcone_failure}
  */
  readonly h323AlgCreateRtpFullconeFailure?: number;
  /**
  * Enable automatic packet-capture for H323 ALG Create Single RTP or RTCP Full-cone Session Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#h323_alg_create_single_fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#h323_alg_create_single_fullcone_failure}
  */
  readonly h323AlgCreateSingleFullconeFailure?: number;
  /**
  * Enable automatic packet-capture for HA NAT Pool Batch Type Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#ha_nat_pool_batch_type_mismatch VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#ha_nat_pool_batch_type_mismatch}
  */
  readonly haNatPoolBatchTypeMismatch?: number;
  /**
  * Enable automatic packet-capture for HA NAT Pool Unusable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#ha_nat_pool_unusable VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#ha_nat_pool_unusable}
  */
  readonly haNatPoolUnusable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for MGCP ALG Create RTCP Full-cone Session Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#mgcp_alg_create_rtcp_fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#mgcp_alg_create_rtcp_fullcone_failure}
  */
  readonly mgcpAlgCreateRtcpFullconeFailure?: number;
  /**
  * Enable automatic packet-capture for MGCP ALG Create RTP Full-cone Session Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#mgcp_alg_create_rtp_fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#mgcp_alg_create_rtp_fullcone_failure}
  */
  readonly mgcpAlgCreateRtpFullconeFailure?: number;
  /**
  * Enable automatic packet-capture for MGCP ALG Port Pair Allocated From Quota Partition Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#mgcp_alg_port_pair_alloc_from_quota_par VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#mgcp_alg_port_pair_alloc_from_quota_par}
  */
  readonly mgcpAlgPortPairAllocFromQuotaPar?: number;
  /**
  * Enable automatic packet-capture for NAT Pool Unusable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#nat_pool_unusable VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#nat_pool_unusable}
  */
  readonly natPoolUnusable?: number;
  /**
  * Enable automatic packet-capture for Port Overloading Inc Overflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#port_overloading_inc_overflow VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#port_overloading_inc_overflow}
  */
  readonly portOverloadingIncOverflow?: number;
  /**
  * Enable automatic packet-capture for Port Overloading Out of Memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#port_overloading_out_of_memory VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#port_overloading_out_of_memory}
  */
  readonly portOverloadingOutOfMemory?: number;
  /**
  * Enable automatic packet-capture for SIP ALG Alloc RTP/RTCP NAT Ports Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#sip_alg_alloc_rtp_rtcp_port_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#sip_alg_alloc_rtp_rtcp_port_failure}
  */
  readonly sipAlgAllocRtpRtcpPortFailure?: number;
  /**
  * Enable automatic packet-capture for SIP ALG Alloc Single RTP or RTCP NAT Port Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#sip_alg_alloc_single_port_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#sip_alg_alloc_single_port_failure}
  */
  readonly sipAlgAllocSinglePortFailure?: number;
  /**
  * Enable automatic packet-capture for SIP ALG Create RTCP Full-cone Session Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#sip_alg_create_rtcp_fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#sip_alg_create_rtcp_fullcone_failure}
  */
  readonly sipAlgCreateRtcpFullconeFailure?: number;
  /**
  * Enable automatic packet-capture for SIP ALG Create RTP Full-cone Session Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#sip_alg_create_rtp_fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#sip_alg_create_rtp_fullcone_failure}
  */
  readonly sipAlgCreateRtpFullconeFailure?: number;
  /**
  * Enable automatic packet-capture for SIP ALG Create Single RTP or RTCP Full-cone Session Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#sip_alg_create_single_fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#sip_alg_create_single_fullcone_failure}
  */
  readonly sipAlgCreateSingleFullconeFailure?: number;
  /**
  * Enable automatic packet-capture for SIP ALG User-Quota Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#sip_alg_quota_inc_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#sip_alg_quota_inc_failure}
  */
  readonly sipAlgQuotaIncFailure?: number;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#template_name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#template_name}
  */
  readonly templateName: string;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for User-Quota Creation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#user_quota_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#user_quota_failure}
  */
  readonly userQuotaFailure?: number;
  /**
  * Enable automatic packet-capture for User-Quota Marked Unusable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#user_quota_unusable VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#user_quota_unusable}
  */
  readonly userQuotaUnusable?: number;
  /**
  * Enable automatic packet-capture for User-Quota Unusable Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#user_quota_unusable_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#user_quota_unusable_drop}
  */
  readonly userQuotaUnusableDrop?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn_trigger_stats_rate',
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
    this._adcPortAllocationFailed = config.adcPortAllocationFailed;
    this._dataSesnUserQuotaExceeded = config.dataSesnUserQuotaExceeded;
    this._duration = config.duration;
    this._fullconeExtMemAllocFailure = config.fullconeExtMemAllocFailure;
    this._fullconeExtMemAllocInitFaulure = config.fullconeExtMemAllocInitFaulure;
    this._fullconeFailure = config.fullconeFailure;
    this._fullconeSelfHairpinningDrop = config.fullconeSelfHairpinningDrop;
    this._h323AlgAllocSinglePortFailure = config.h323AlgAllocSinglePortFailure;
    this._h323AlgCreateRtcpFullconeFailure = config.h323AlgCreateRtcpFullconeFailure;
    this._h323AlgCreateRtpFullconeFailure = config.h323AlgCreateRtpFullconeFailure;
    this._h323AlgCreateSingleFullconeFailure = config.h323AlgCreateSingleFullconeFailure;
    this._haNatPoolBatchTypeMismatch = config.haNatPoolBatchTypeMismatch;
    this._haNatPoolUnusable = config.haNatPoolUnusable;
    this._id = config.id;
    this._mgcpAlgCreateRtcpFullconeFailure = config.mgcpAlgCreateRtcpFullconeFailure;
    this._mgcpAlgCreateRtpFullconeFailure = config.mgcpAlgCreateRtpFullconeFailure;
    this._mgcpAlgPortPairAllocFromQuotaPar = config.mgcpAlgPortPairAllocFromQuotaPar;
    this._natPoolUnusable = config.natPoolUnusable;
    this._portOverloadingIncOverflow = config.portOverloadingIncOverflow;
    this._portOverloadingOutOfMemory = config.portOverloadingOutOfMemory;
    this._sipAlgAllocRtpRtcpPortFailure = config.sipAlgAllocRtpRtcpPortFailure;
    this._sipAlgAllocSinglePortFailure = config.sipAlgAllocSinglePortFailure;
    this._sipAlgCreateRtcpFullconeFailure = config.sipAlgCreateRtcpFullconeFailure;
    this._sipAlgCreateRtpFullconeFailure = config.sipAlgCreateRtpFullconeFailure;
    this._sipAlgCreateSingleFullconeFailure = config.sipAlgCreateSingleFullconeFailure;
    this._sipAlgQuotaIncFailure = config.sipAlgQuotaIncFailure;
    this._templateName = config.templateName;
    this._thresholdExceededBy = config.thresholdExceededBy;
    this._userQuotaFailure = config.userQuotaFailure;
    this._userQuotaUnusable = config.userQuotaUnusable;
    this._userQuotaUnusableDrop = config.userQuotaUnusableDrop;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adc_port_allocation_failed - computed: false, optional: true, required: false
  private _adcPortAllocationFailed?: number; 
  public get adcPortAllocationFailed() {
    return this.getNumberAttribute('adc_port_allocation_failed');
  }
  public set adcPortAllocationFailed(value: number) {
    this._adcPortAllocationFailed = value;
  }
  public resetAdcPortAllocationFailed() {
    this._adcPortAllocationFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adcPortAllocationFailedInput() {
    return this._adcPortAllocationFailed;
  }

  // data_sesn_user_quota_exceeded - computed: false, optional: true, required: false
  private _dataSesnUserQuotaExceeded?: number; 
  public get dataSesnUserQuotaExceeded() {
    return this.getNumberAttribute('data_sesn_user_quota_exceeded');
  }
  public set dataSesnUserQuotaExceeded(value: number) {
    this._dataSesnUserQuotaExceeded = value;
  }
  public resetDataSesnUserQuotaExceeded() {
    this._dataSesnUserQuotaExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSesnUserQuotaExceededInput() {
    return this._dataSesnUserQuotaExceeded;
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

  // fullcone_ext_mem_alloc_failure - computed: false, optional: true, required: false
  private _fullconeExtMemAllocFailure?: number; 
  public get fullconeExtMemAllocFailure() {
    return this.getNumberAttribute('fullcone_ext_mem_alloc_failure');
  }
  public set fullconeExtMemAllocFailure(value: number) {
    this._fullconeExtMemAllocFailure = value;
  }
  public resetFullconeExtMemAllocFailure() {
    this._fullconeExtMemAllocFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullconeExtMemAllocFailureInput() {
    return this._fullconeExtMemAllocFailure;
  }

  // fullcone_ext_mem_alloc_init_faulure - computed: false, optional: true, required: false
  private _fullconeExtMemAllocInitFaulure?: number; 
  public get fullconeExtMemAllocInitFaulure() {
    return this.getNumberAttribute('fullcone_ext_mem_alloc_init_faulure');
  }
  public set fullconeExtMemAllocInitFaulure(value: number) {
    this._fullconeExtMemAllocInitFaulure = value;
  }
  public resetFullconeExtMemAllocInitFaulure() {
    this._fullconeExtMemAllocInitFaulure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullconeExtMemAllocInitFaulureInput() {
    return this._fullconeExtMemAllocInitFaulure;
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

  // h323_alg_alloc_single_port_failure - computed: false, optional: true, required: false
  private _h323AlgAllocSinglePortFailure?: number; 
  public get h323AlgAllocSinglePortFailure() {
    return this.getNumberAttribute('h323_alg_alloc_single_port_failure');
  }
  public set h323AlgAllocSinglePortFailure(value: number) {
    this._h323AlgAllocSinglePortFailure = value;
  }
  public resetH323AlgAllocSinglePortFailure() {
    this._h323AlgAllocSinglePortFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h323AlgAllocSinglePortFailureInput() {
    return this._h323AlgAllocSinglePortFailure;
  }

  // h323_alg_create_rtcp_fullcone_failure - computed: false, optional: true, required: false
  private _h323AlgCreateRtcpFullconeFailure?: number; 
  public get h323AlgCreateRtcpFullconeFailure() {
    return this.getNumberAttribute('h323_alg_create_rtcp_fullcone_failure');
  }
  public set h323AlgCreateRtcpFullconeFailure(value: number) {
    this._h323AlgCreateRtcpFullconeFailure = value;
  }
  public resetH323AlgCreateRtcpFullconeFailure() {
    this._h323AlgCreateRtcpFullconeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h323AlgCreateRtcpFullconeFailureInput() {
    return this._h323AlgCreateRtcpFullconeFailure;
  }

  // h323_alg_create_rtp_fullcone_failure - computed: false, optional: true, required: false
  private _h323AlgCreateRtpFullconeFailure?: number; 
  public get h323AlgCreateRtpFullconeFailure() {
    return this.getNumberAttribute('h323_alg_create_rtp_fullcone_failure');
  }
  public set h323AlgCreateRtpFullconeFailure(value: number) {
    this._h323AlgCreateRtpFullconeFailure = value;
  }
  public resetH323AlgCreateRtpFullconeFailure() {
    this._h323AlgCreateRtpFullconeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h323AlgCreateRtpFullconeFailureInput() {
    return this._h323AlgCreateRtpFullconeFailure;
  }

  // h323_alg_create_single_fullcone_failure - computed: false, optional: true, required: false
  private _h323AlgCreateSingleFullconeFailure?: number; 
  public get h323AlgCreateSingleFullconeFailure() {
    return this.getNumberAttribute('h323_alg_create_single_fullcone_failure');
  }
  public set h323AlgCreateSingleFullconeFailure(value: number) {
    this._h323AlgCreateSingleFullconeFailure = value;
  }
  public resetH323AlgCreateSingleFullconeFailure() {
    this._h323AlgCreateSingleFullconeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get h323AlgCreateSingleFullconeFailureInput() {
    return this._h323AlgCreateSingleFullconeFailure;
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

  // mgcp_alg_create_rtcp_fullcone_failure - computed: false, optional: true, required: false
  private _mgcpAlgCreateRtcpFullconeFailure?: number; 
  public get mgcpAlgCreateRtcpFullconeFailure() {
    return this.getNumberAttribute('mgcp_alg_create_rtcp_fullcone_failure');
  }
  public set mgcpAlgCreateRtcpFullconeFailure(value: number) {
    this._mgcpAlgCreateRtcpFullconeFailure = value;
  }
  public resetMgcpAlgCreateRtcpFullconeFailure() {
    this._mgcpAlgCreateRtcpFullconeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgcpAlgCreateRtcpFullconeFailureInput() {
    return this._mgcpAlgCreateRtcpFullconeFailure;
  }

  // mgcp_alg_create_rtp_fullcone_failure - computed: false, optional: true, required: false
  private _mgcpAlgCreateRtpFullconeFailure?: number; 
  public get mgcpAlgCreateRtpFullconeFailure() {
    return this.getNumberAttribute('mgcp_alg_create_rtp_fullcone_failure');
  }
  public set mgcpAlgCreateRtpFullconeFailure(value: number) {
    this._mgcpAlgCreateRtpFullconeFailure = value;
  }
  public resetMgcpAlgCreateRtpFullconeFailure() {
    this._mgcpAlgCreateRtpFullconeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgcpAlgCreateRtpFullconeFailureInput() {
    return this._mgcpAlgCreateRtpFullconeFailure;
  }

  // mgcp_alg_port_pair_alloc_from_quota_par - computed: false, optional: true, required: false
  private _mgcpAlgPortPairAllocFromQuotaPar?: number; 
  public get mgcpAlgPortPairAllocFromQuotaPar() {
    return this.getNumberAttribute('mgcp_alg_port_pair_alloc_from_quota_par');
  }
  public set mgcpAlgPortPairAllocFromQuotaPar(value: number) {
    this._mgcpAlgPortPairAllocFromQuotaPar = value;
  }
  public resetMgcpAlgPortPairAllocFromQuotaPar() {
    this._mgcpAlgPortPairAllocFromQuotaPar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgcpAlgPortPairAllocFromQuotaParInput() {
    return this._mgcpAlgPortPairAllocFromQuotaPar;
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

  // port_overloading_inc_overflow - computed: false, optional: true, required: false
  private _portOverloadingIncOverflow?: number; 
  public get portOverloadingIncOverflow() {
    return this.getNumberAttribute('port_overloading_inc_overflow');
  }
  public set portOverloadingIncOverflow(value: number) {
    this._portOverloadingIncOverflow = value;
  }
  public resetPortOverloadingIncOverflow() {
    this._portOverloadingIncOverflow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOverloadingIncOverflowInput() {
    return this._portOverloadingIncOverflow;
  }

  // port_overloading_out_of_memory - computed: false, optional: true, required: false
  private _portOverloadingOutOfMemory?: number; 
  public get portOverloadingOutOfMemory() {
    return this.getNumberAttribute('port_overloading_out_of_memory');
  }
  public set portOverloadingOutOfMemory(value: number) {
    this._portOverloadingOutOfMemory = value;
  }
  public resetPortOverloadingOutOfMemory() {
    this._portOverloadingOutOfMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portOverloadingOutOfMemoryInput() {
    return this._portOverloadingOutOfMemory;
  }

  // sip_alg_alloc_rtp_rtcp_port_failure - computed: false, optional: true, required: false
  private _sipAlgAllocRtpRtcpPortFailure?: number; 
  public get sipAlgAllocRtpRtcpPortFailure() {
    return this.getNumberAttribute('sip_alg_alloc_rtp_rtcp_port_failure');
  }
  public set sipAlgAllocRtpRtcpPortFailure(value: number) {
    this._sipAlgAllocRtpRtcpPortFailure = value;
  }
  public resetSipAlgAllocRtpRtcpPortFailure() {
    this._sipAlgAllocRtpRtcpPortFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipAlgAllocRtpRtcpPortFailureInput() {
    return this._sipAlgAllocRtpRtcpPortFailure;
  }

  // sip_alg_alloc_single_port_failure - computed: false, optional: true, required: false
  private _sipAlgAllocSinglePortFailure?: number; 
  public get sipAlgAllocSinglePortFailure() {
    return this.getNumberAttribute('sip_alg_alloc_single_port_failure');
  }
  public set sipAlgAllocSinglePortFailure(value: number) {
    this._sipAlgAllocSinglePortFailure = value;
  }
  public resetSipAlgAllocSinglePortFailure() {
    this._sipAlgAllocSinglePortFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipAlgAllocSinglePortFailureInput() {
    return this._sipAlgAllocSinglePortFailure;
  }

  // sip_alg_create_rtcp_fullcone_failure - computed: false, optional: true, required: false
  private _sipAlgCreateRtcpFullconeFailure?: number; 
  public get sipAlgCreateRtcpFullconeFailure() {
    return this.getNumberAttribute('sip_alg_create_rtcp_fullcone_failure');
  }
  public set sipAlgCreateRtcpFullconeFailure(value: number) {
    this._sipAlgCreateRtcpFullconeFailure = value;
  }
  public resetSipAlgCreateRtcpFullconeFailure() {
    this._sipAlgCreateRtcpFullconeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipAlgCreateRtcpFullconeFailureInput() {
    return this._sipAlgCreateRtcpFullconeFailure;
  }

  // sip_alg_create_rtp_fullcone_failure - computed: false, optional: true, required: false
  private _sipAlgCreateRtpFullconeFailure?: number; 
  public get sipAlgCreateRtpFullconeFailure() {
    return this.getNumberAttribute('sip_alg_create_rtp_fullcone_failure');
  }
  public set sipAlgCreateRtpFullconeFailure(value: number) {
    this._sipAlgCreateRtpFullconeFailure = value;
  }
  public resetSipAlgCreateRtpFullconeFailure() {
    this._sipAlgCreateRtpFullconeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipAlgCreateRtpFullconeFailureInput() {
    return this._sipAlgCreateRtpFullconeFailure;
  }

  // sip_alg_create_single_fullcone_failure - computed: false, optional: true, required: false
  private _sipAlgCreateSingleFullconeFailure?: number; 
  public get sipAlgCreateSingleFullconeFailure() {
    return this.getNumberAttribute('sip_alg_create_single_fullcone_failure');
  }
  public set sipAlgCreateSingleFullconeFailure(value: number) {
    this._sipAlgCreateSingleFullconeFailure = value;
  }
  public resetSipAlgCreateSingleFullconeFailure() {
    this._sipAlgCreateSingleFullconeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipAlgCreateSingleFullconeFailureInput() {
    return this._sipAlgCreateSingleFullconeFailure;
  }

  // sip_alg_quota_inc_failure - computed: false, optional: true, required: false
  private _sipAlgQuotaIncFailure?: number; 
  public get sipAlgQuotaIncFailure() {
    return this.getNumberAttribute('sip_alg_quota_inc_failure');
  }
  public set sipAlgQuotaIncFailure(value: number) {
    this._sipAlgQuotaIncFailure = value;
  }
  public resetSipAlgQuotaIncFailure() {
    this._sipAlgQuotaIncFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipAlgQuotaIncFailureInput() {
    return this._sipAlgQuotaIncFailure;
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
      adc_port_allocation_failed: cdktf.numberToTerraform(this._adcPortAllocationFailed),
      data_sesn_user_quota_exceeded: cdktf.numberToTerraform(this._dataSesnUserQuotaExceeded),
      duration: cdktf.numberToTerraform(this._duration),
      fullcone_ext_mem_alloc_failure: cdktf.numberToTerraform(this._fullconeExtMemAllocFailure),
      fullcone_ext_mem_alloc_init_faulure: cdktf.numberToTerraform(this._fullconeExtMemAllocInitFaulure),
      fullcone_failure: cdktf.numberToTerraform(this._fullconeFailure),
      fullcone_self_hairpinning_drop: cdktf.numberToTerraform(this._fullconeSelfHairpinningDrop),
      h323_alg_alloc_single_port_failure: cdktf.numberToTerraform(this._h323AlgAllocSinglePortFailure),
      h323_alg_create_rtcp_fullcone_failure: cdktf.numberToTerraform(this._h323AlgCreateRtcpFullconeFailure),
      h323_alg_create_rtp_fullcone_failure: cdktf.numberToTerraform(this._h323AlgCreateRtpFullconeFailure),
      h323_alg_create_single_fullcone_failure: cdktf.numberToTerraform(this._h323AlgCreateSingleFullconeFailure),
      ha_nat_pool_batch_type_mismatch: cdktf.numberToTerraform(this._haNatPoolBatchTypeMismatch),
      ha_nat_pool_unusable: cdktf.numberToTerraform(this._haNatPoolUnusable),
      id: cdktf.stringToTerraform(this._id),
      mgcp_alg_create_rtcp_fullcone_failure: cdktf.numberToTerraform(this._mgcpAlgCreateRtcpFullconeFailure),
      mgcp_alg_create_rtp_fullcone_failure: cdktf.numberToTerraform(this._mgcpAlgCreateRtpFullconeFailure),
      mgcp_alg_port_pair_alloc_from_quota_par: cdktf.numberToTerraform(this._mgcpAlgPortPairAllocFromQuotaPar),
      nat_pool_unusable: cdktf.numberToTerraform(this._natPoolUnusable),
      port_overloading_inc_overflow: cdktf.numberToTerraform(this._portOverloadingIncOverflow),
      port_overloading_out_of_memory: cdktf.numberToTerraform(this._portOverloadingOutOfMemory),
      sip_alg_alloc_rtp_rtcp_port_failure: cdktf.numberToTerraform(this._sipAlgAllocRtpRtcpPortFailure),
      sip_alg_alloc_single_port_failure: cdktf.numberToTerraform(this._sipAlgAllocSinglePortFailure),
      sip_alg_create_rtcp_fullcone_failure: cdktf.numberToTerraform(this._sipAlgCreateRtcpFullconeFailure),
      sip_alg_create_rtp_fullcone_failure: cdktf.numberToTerraform(this._sipAlgCreateRtpFullconeFailure),
      sip_alg_create_single_fullcone_failure: cdktf.numberToTerraform(this._sipAlgCreateSingleFullconeFailure),
      sip_alg_quota_inc_failure: cdktf.numberToTerraform(this._sipAlgQuotaIncFailure),
      template_name: cdktf.stringToTerraform(this._templateName),
      threshold_exceeded_by: cdktf.numberToTerraform(this._thresholdExceededBy),
      user_quota_failure: cdktf.numberToTerraform(this._userQuotaFailure),
      user_quota_unusable: cdktf.numberToTerraform(this._userQuotaUnusable),
      user_quota_unusable_drop: cdktf.numberToTerraform(this._userQuotaUnusableDrop),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adc_port_allocation_failed: {
        value: cdktf.numberToHclTerraform(this._adcPortAllocationFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data_sesn_user_quota_exceeded: {
        value: cdktf.numberToHclTerraform(this._dataSesnUserQuotaExceeded),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fullcone_ext_mem_alloc_failure: {
        value: cdktf.numberToHclTerraform(this._fullconeExtMemAllocFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fullcone_ext_mem_alloc_init_faulure: {
        value: cdktf.numberToHclTerraform(this._fullconeExtMemAllocInitFaulure),
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
      h323_alg_alloc_single_port_failure: {
        value: cdktf.numberToHclTerraform(this._h323AlgAllocSinglePortFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      h323_alg_create_rtcp_fullcone_failure: {
        value: cdktf.numberToHclTerraform(this._h323AlgCreateRtcpFullconeFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      h323_alg_create_rtp_fullcone_failure: {
        value: cdktf.numberToHclTerraform(this._h323AlgCreateRtpFullconeFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      h323_alg_create_single_fullcone_failure: {
        value: cdktf.numberToHclTerraform(this._h323AlgCreateSingleFullconeFailure),
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
      mgcp_alg_create_rtcp_fullcone_failure: {
        value: cdktf.numberToHclTerraform(this._mgcpAlgCreateRtcpFullconeFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mgcp_alg_create_rtp_fullcone_failure: {
        value: cdktf.numberToHclTerraform(this._mgcpAlgCreateRtpFullconeFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mgcp_alg_port_pair_alloc_from_quota_par: {
        value: cdktf.numberToHclTerraform(this._mgcpAlgPortPairAllocFromQuotaPar),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat_pool_unusable: {
        value: cdktf.numberToHclTerraform(this._natPoolUnusable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_overloading_inc_overflow: {
        value: cdktf.numberToHclTerraform(this._portOverloadingIncOverflow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port_overloading_out_of_memory: {
        value: cdktf.numberToHclTerraform(this._portOverloadingOutOfMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sip_alg_alloc_rtp_rtcp_port_failure: {
        value: cdktf.numberToHclTerraform(this._sipAlgAllocRtpRtcpPortFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sip_alg_alloc_single_port_failure: {
        value: cdktf.numberToHclTerraform(this._sipAlgAllocSinglePortFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sip_alg_create_rtcp_fullcone_failure: {
        value: cdktf.numberToHclTerraform(this._sipAlgCreateRtcpFullconeFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sip_alg_create_rtp_fullcone_failure: {
        value: cdktf.numberToHclTerraform(this._sipAlgCreateRtpFullconeFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sip_alg_create_single_fullcone_failure: {
        value: cdktf.numberToHclTerraform(this._sipAlgCreateSingleFullconeFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sip_alg_quota_inc_failure: {
        value: cdktf.numberToHclTerraform(this._sipAlgQuotaIncFailure),
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
