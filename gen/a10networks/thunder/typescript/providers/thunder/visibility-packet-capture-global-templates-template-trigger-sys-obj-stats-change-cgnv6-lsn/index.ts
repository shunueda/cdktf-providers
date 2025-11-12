// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for ADC Port Allocation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#adc_port_allocation_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#adc_port_allocation_failed}
  */
  readonly adcPortAllocationFailed?: number;
  /**
  * Enable automatic packet-capture for Data Session User-Quota Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#data_sesn_user_quota_exceeded VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#data_sesn_user_quota_exceeded}
  */
  readonly dataSesnUserQuotaExceeded?: number;
  /**
  * Enable automatic packet-capture for LSN Fullcone Extension Memory Allocate Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#fullcone_ext_mem_alloc_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#fullcone_ext_mem_alloc_failure}
  */
  readonly fullconeExtMemAllocFailure?: number;
  /**
  * Enable automatic packet-capture for LSN Fullcone Extension Initialization Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#fullcone_ext_mem_alloc_init_faulure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#fullcone_ext_mem_alloc_init_faulure}
  */
  readonly fullconeExtMemAllocInitFaulure?: number;
  /**
  * Enable automatic packet-capture for Full-cone Session Creation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#fullcone_failure}
  */
  readonly fullconeFailure?: number;
  /**
  * Enable automatic packet-capture for Self-Hairpinning Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#fullcone_self_hairpinning_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#fullcone_self_hairpinning_drop}
  */
  readonly fullconeSelfHairpinningDrop?: number;
  /**
  * Enable automatic packet-capture for H323 ALG Alloc Single RTP or RTCP NAT Port Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#h323_alg_alloc_single_port_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#h323_alg_alloc_single_port_failure}
  */
  readonly h323AlgAllocSinglePortFailure?: number;
  /**
  * Enable automatic packet-capture for H323 ALG Create RTCP Full-cone Session Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#h323_alg_create_rtcp_fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#h323_alg_create_rtcp_fullcone_failure}
  */
  readonly h323AlgCreateRtcpFullconeFailure?: number;
  /**
  * Enable automatic packet-capture for H323 ALG Create RTP Full-cone Session Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#h323_alg_create_rtp_fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#h323_alg_create_rtp_fullcone_failure}
  */
  readonly h323AlgCreateRtpFullconeFailure?: number;
  /**
  * Enable automatic packet-capture for H323 ALG Create Single RTP or RTCP Full-cone Session Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#h323_alg_create_single_fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#h323_alg_create_single_fullcone_failure}
  */
  readonly h323AlgCreateSingleFullconeFailure?: number;
  /**
  * Enable automatic packet-capture for HA NAT Pool Batch Type Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#ha_nat_pool_batch_type_mismatch VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#ha_nat_pool_batch_type_mismatch}
  */
  readonly haNatPoolBatchTypeMismatch?: number;
  /**
  * Enable automatic packet-capture for HA NAT Pool Unusable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#ha_nat_pool_unusable VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#ha_nat_pool_unusable}
  */
  readonly haNatPoolUnusable?: number;
  /**
  * Enable automatic packet-capture for MGCP ALG Create RTCP Full-cone Session Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#mgcp_alg_create_rtcp_fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#mgcp_alg_create_rtcp_fullcone_failure}
  */
  readonly mgcpAlgCreateRtcpFullconeFailure?: number;
  /**
  * Enable automatic packet-capture for MGCP ALG Create RTP Full-cone Session Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#mgcp_alg_create_rtp_fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#mgcp_alg_create_rtp_fullcone_failure}
  */
  readonly mgcpAlgCreateRtpFullconeFailure?: number;
  /**
  * Enable automatic packet-capture for MGCP ALG Port Pair Allocated From Quota Partition Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#mgcp_alg_port_pair_alloc_from_quota_par VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#mgcp_alg_port_pair_alloc_from_quota_par}
  */
  readonly mgcpAlgPortPairAllocFromQuotaPar?: number;
  /**
  * Enable automatic packet-capture for NAT Pool Unusable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#nat_pool_unusable VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#nat_pool_unusable}
  */
  readonly natPoolUnusable?: number;
  /**
  * Enable automatic packet-capture for Port Overloading Inc Overflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#port_overloading_inc_overflow VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#port_overloading_inc_overflow}
  */
  readonly portOverloadingIncOverflow?: number;
  /**
  * Enable automatic packet-capture for Port Overloading Out of Memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#port_overloading_out_of_memory VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#port_overloading_out_of_memory}
  */
  readonly portOverloadingOutOfMemory?: number;
  /**
  * Enable automatic packet-capture for SIP ALG Alloc RTP/RTCP NAT Ports Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#sip_alg_alloc_rtp_rtcp_port_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#sip_alg_alloc_rtp_rtcp_port_failure}
  */
  readonly sipAlgAllocRtpRtcpPortFailure?: number;
  /**
  * Enable automatic packet-capture for SIP ALG Alloc Single RTP or RTCP NAT Port Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#sip_alg_alloc_single_port_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#sip_alg_alloc_single_port_failure}
  */
  readonly sipAlgAllocSinglePortFailure?: number;
  /**
  * Enable automatic packet-capture for SIP ALG Create RTCP Full-cone Session Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#sip_alg_create_rtcp_fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#sip_alg_create_rtcp_fullcone_failure}
  */
  readonly sipAlgCreateRtcpFullconeFailure?: number;
  /**
  * Enable automatic packet-capture for SIP ALG Create RTP Full-cone Session Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#sip_alg_create_rtp_fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#sip_alg_create_rtp_fullcone_failure}
  */
  readonly sipAlgCreateRtpFullconeFailure?: number;
  /**
  * Enable automatic packet-capture for SIP ALG Create Single RTP or RTCP Full-cone Session Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#sip_alg_create_single_fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#sip_alg_create_single_fullcone_failure}
  */
  readonly sipAlgCreateSingleFullconeFailure?: number;
  /**
  * Enable automatic packet-capture for SIP ALG User-Quota Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#sip_alg_quota_inc_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#sip_alg_quota_inc_failure}
  */
  readonly sipAlgQuotaIncFailure?: number;
  /**
  * Enable automatic packet-capture for User-Quota Creation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#user_quota_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#user_quota_failure}
  */
  readonly userQuotaFailure?: number;
  /**
  * Enable automatic packet-capture for User-Quota Marked Unusable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#user_quota_unusable VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#user_quota_unusable}
  */
  readonly userQuotaUnusable?: number;
  /**
  * Enable automatic packet-capture for User-Quota Unusable Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#user_quota_unusable_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#user_quota_unusable_drop}
  */
  readonly userQuotaUnusableDrop?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adc_port_allocation_failed: cdktf.numberToTerraform(struct!.adcPortAllocationFailed),
    data_sesn_user_quota_exceeded: cdktf.numberToTerraform(struct!.dataSesnUserQuotaExceeded),
    fullcone_ext_mem_alloc_failure: cdktf.numberToTerraform(struct!.fullconeExtMemAllocFailure),
    fullcone_ext_mem_alloc_init_faulure: cdktf.numberToTerraform(struct!.fullconeExtMemAllocInitFaulure),
    fullcone_failure: cdktf.numberToTerraform(struct!.fullconeFailure),
    fullcone_self_hairpinning_drop: cdktf.numberToTerraform(struct!.fullconeSelfHairpinningDrop),
    h323_alg_alloc_single_port_failure: cdktf.numberToTerraform(struct!.h323AlgAllocSinglePortFailure),
    h323_alg_create_rtcp_fullcone_failure: cdktf.numberToTerraform(struct!.h323AlgCreateRtcpFullconeFailure),
    h323_alg_create_rtp_fullcone_failure: cdktf.numberToTerraform(struct!.h323AlgCreateRtpFullconeFailure),
    h323_alg_create_single_fullcone_failure: cdktf.numberToTerraform(struct!.h323AlgCreateSingleFullconeFailure),
    ha_nat_pool_batch_type_mismatch: cdktf.numberToTerraform(struct!.haNatPoolBatchTypeMismatch),
    ha_nat_pool_unusable: cdktf.numberToTerraform(struct!.haNatPoolUnusable),
    mgcp_alg_create_rtcp_fullcone_failure: cdktf.numberToTerraform(struct!.mgcpAlgCreateRtcpFullconeFailure),
    mgcp_alg_create_rtp_fullcone_failure: cdktf.numberToTerraform(struct!.mgcpAlgCreateRtpFullconeFailure),
    mgcp_alg_port_pair_alloc_from_quota_par: cdktf.numberToTerraform(struct!.mgcpAlgPortPairAllocFromQuotaPar),
    nat_pool_unusable: cdktf.numberToTerraform(struct!.natPoolUnusable),
    port_overloading_inc_overflow: cdktf.numberToTerraform(struct!.portOverloadingIncOverflow),
    port_overloading_out_of_memory: cdktf.numberToTerraform(struct!.portOverloadingOutOfMemory),
    sip_alg_alloc_rtp_rtcp_port_failure: cdktf.numberToTerraform(struct!.sipAlgAllocRtpRtcpPortFailure),
    sip_alg_alloc_single_port_failure: cdktf.numberToTerraform(struct!.sipAlgAllocSinglePortFailure),
    sip_alg_create_rtcp_fullcone_failure: cdktf.numberToTerraform(struct!.sipAlgCreateRtcpFullconeFailure),
    sip_alg_create_rtp_fullcone_failure: cdktf.numberToTerraform(struct!.sipAlgCreateRtpFullconeFailure),
    sip_alg_create_single_fullcone_failure: cdktf.numberToTerraform(struct!.sipAlgCreateSingleFullconeFailure),
    sip_alg_quota_inc_failure: cdktf.numberToTerraform(struct!.sipAlgQuotaIncFailure),
    user_quota_failure: cdktf.numberToTerraform(struct!.userQuotaFailure),
    user_quota_unusable: cdktf.numberToTerraform(struct!.userQuotaUnusable),
    user_quota_unusable_drop: cdktf.numberToTerraform(struct!.userQuotaUnusableDrop),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adc_port_allocation_failed: {
      value: cdktf.numberToHclTerraform(struct!.adcPortAllocationFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_sesn_user_quota_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.dataSesnUserQuotaExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fullcone_ext_mem_alloc_failure: {
      value: cdktf.numberToHclTerraform(struct!.fullconeExtMemAllocFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fullcone_ext_mem_alloc_init_faulure: {
      value: cdktf.numberToHclTerraform(struct!.fullconeExtMemAllocInitFaulure),
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
    h323_alg_alloc_single_port_failure: {
      value: cdktf.numberToHclTerraform(struct!.h323AlgAllocSinglePortFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    h323_alg_create_rtcp_fullcone_failure: {
      value: cdktf.numberToHclTerraform(struct!.h323AlgCreateRtcpFullconeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    h323_alg_create_rtp_fullcone_failure: {
      value: cdktf.numberToHclTerraform(struct!.h323AlgCreateRtpFullconeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    h323_alg_create_single_fullcone_failure: {
      value: cdktf.numberToHclTerraform(struct!.h323AlgCreateSingleFullconeFailure),
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
    mgcp_alg_create_rtcp_fullcone_failure: {
      value: cdktf.numberToHclTerraform(struct!.mgcpAlgCreateRtcpFullconeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mgcp_alg_create_rtp_fullcone_failure: {
      value: cdktf.numberToHclTerraform(struct!.mgcpAlgCreateRtpFullconeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mgcp_alg_port_pair_alloc_from_quota_par: {
      value: cdktf.numberToHclTerraform(struct!.mgcpAlgPortPairAllocFromQuotaPar),
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
    port_overloading_inc_overflow: {
      value: cdktf.numberToHclTerraform(struct!.portOverloadingIncOverflow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_overloading_out_of_memory: {
      value: cdktf.numberToHclTerraform(struct!.portOverloadingOutOfMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sip_alg_alloc_rtp_rtcp_port_failure: {
      value: cdktf.numberToHclTerraform(struct!.sipAlgAllocRtpRtcpPortFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sip_alg_alloc_single_port_failure: {
      value: cdktf.numberToHclTerraform(struct!.sipAlgAllocSinglePortFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sip_alg_create_rtcp_fullcone_failure: {
      value: cdktf.numberToHclTerraform(struct!.sipAlgCreateRtcpFullconeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sip_alg_create_rtp_fullcone_failure: {
      value: cdktf.numberToHclTerraform(struct!.sipAlgCreateRtpFullconeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sip_alg_create_single_fullcone_failure: {
      value: cdktf.numberToHclTerraform(struct!.sipAlgCreateSingleFullconeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sip_alg_quota_inc_failure: {
      value: cdktf.numberToHclTerraform(struct!.sipAlgQuotaIncFailure),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adcPortAllocationFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.adcPortAllocationFailed = this._adcPortAllocationFailed;
    }
    if (this._dataSesnUserQuotaExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSesnUserQuotaExceeded = this._dataSesnUserQuotaExceeded;
    }
    if (this._fullconeExtMemAllocFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullconeExtMemAllocFailure = this._fullconeExtMemAllocFailure;
    }
    if (this._fullconeExtMemAllocInitFaulure !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullconeExtMemAllocInitFaulure = this._fullconeExtMemAllocInitFaulure;
    }
    if (this._fullconeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullconeFailure = this._fullconeFailure;
    }
    if (this._fullconeSelfHairpinningDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullconeSelfHairpinningDrop = this._fullconeSelfHairpinningDrop;
    }
    if (this._h323AlgAllocSinglePortFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.h323AlgAllocSinglePortFailure = this._h323AlgAllocSinglePortFailure;
    }
    if (this._h323AlgCreateRtcpFullconeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.h323AlgCreateRtcpFullconeFailure = this._h323AlgCreateRtcpFullconeFailure;
    }
    if (this._h323AlgCreateRtpFullconeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.h323AlgCreateRtpFullconeFailure = this._h323AlgCreateRtpFullconeFailure;
    }
    if (this._h323AlgCreateSingleFullconeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.h323AlgCreateSingleFullconeFailure = this._h323AlgCreateSingleFullconeFailure;
    }
    if (this._haNatPoolBatchTypeMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.haNatPoolBatchTypeMismatch = this._haNatPoolBatchTypeMismatch;
    }
    if (this._haNatPoolUnusable !== undefined) {
      hasAnyValues = true;
      internalValueResult.haNatPoolUnusable = this._haNatPoolUnusable;
    }
    if (this._mgcpAlgCreateRtcpFullconeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgcpAlgCreateRtcpFullconeFailure = this._mgcpAlgCreateRtcpFullconeFailure;
    }
    if (this._mgcpAlgCreateRtpFullconeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgcpAlgCreateRtpFullconeFailure = this._mgcpAlgCreateRtpFullconeFailure;
    }
    if (this._mgcpAlgPortPairAllocFromQuotaPar !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgcpAlgPortPairAllocFromQuotaPar = this._mgcpAlgPortPairAllocFromQuotaPar;
    }
    if (this._natPoolUnusable !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolUnusable = this._natPoolUnusable;
    }
    if (this._portOverloadingIncOverflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.portOverloadingIncOverflow = this._portOverloadingIncOverflow;
    }
    if (this._portOverloadingOutOfMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.portOverloadingOutOfMemory = this._portOverloadingOutOfMemory;
    }
    if (this._sipAlgAllocRtpRtcpPortFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipAlgAllocRtpRtcpPortFailure = this._sipAlgAllocRtpRtcpPortFailure;
    }
    if (this._sipAlgAllocSinglePortFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipAlgAllocSinglePortFailure = this._sipAlgAllocSinglePortFailure;
    }
    if (this._sipAlgCreateRtcpFullconeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipAlgCreateRtcpFullconeFailure = this._sipAlgCreateRtcpFullconeFailure;
    }
    if (this._sipAlgCreateRtpFullconeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipAlgCreateRtpFullconeFailure = this._sipAlgCreateRtpFullconeFailure;
    }
    if (this._sipAlgCreateSingleFullconeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipAlgCreateSingleFullconeFailure = this._sipAlgCreateSingleFullconeFailure;
    }
    if (this._sipAlgQuotaIncFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipAlgQuotaIncFailure = this._sipAlgQuotaIncFailure;
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

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adcPortAllocationFailed = undefined;
      this._dataSesnUserQuotaExceeded = undefined;
      this._fullconeExtMemAllocFailure = undefined;
      this._fullconeExtMemAllocInitFaulure = undefined;
      this._fullconeFailure = undefined;
      this._fullconeSelfHairpinningDrop = undefined;
      this._h323AlgAllocSinglePortFailure = undefined;
      this._h323AlgCreateRtcpFullconeFailure = undefined;
      this._h323AlgCreateRtpFullconeFailure = undefined;
      this._h323AlgCreateSingleFullconeFailure = undefined;
      this._haNatPoolBatchTypeMismatch = undefined;
      this._haNatPoolUnusable = undefined;
      this._mgcpAlgCreateRtcpFullconeFailure = undefined;
      this._mgcpAlgCreateRtpFullconeFailure = undefined;
      this._mgcpAlgPortPairAllocFromQuotaPar = undefined;
      this._natPoolUnusable = undefined;
      this._portOverloadingIncOverflow = undefined;
      this._portOverloadingOutOfMemory = undefined;
      this._sipAlgAllocRtpRtcpPortFailure = undefined;
      this._sipAlgAllocSinglePortFailure = undefined;
      this._sipAlgCreateRtcpFullconeFailure = undefined;
      this._sipAlgCreateRtpFullconeFailure = undefined;
      this._sipAlgCreateSingleFullconeFailure = undefined;
      this._sipAlgQuotaIncFailure = undefined;
      this._userQuotaFailure = undefined;
      this._userQuotaUnusable = undefined;
      this._userQuotaUnusableDrop = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adcPortAllocationFailed = value.adcPortAllocationFailed;
      this._dataSesnUserQuotaExceeded = value.dataSesnUserQuotaExceeded;
      this._fullconeExtMemAllocFailure = value.fullconeExtMemAllocFailure;
      this._fullconeExtMemAllocInitFaulure = value.fullconeExtMemAllocInitFaulure;
      this._fullconeFailure = value.fullconeFailure;
      this._fullconeSelfHairpinningDrop = value.fullconeSelfHairpinningDrop;
      this._h323AlgAllocSinglePortFailure = value.h323AlgAllocSinglePortFailure;
      this._h323AlgCreateRtcpFullconeFailure = value.h323AlgCreateRtcpFullconeFailure;
      this._h323AlgCreateRtpFullconeFailure = value.h323AlgCreateRtpFullconeFailure;
      this._h323AlgCreateSingleFullconeFailure = value.h323AlgCreateSingleFullconeFailure;
      this._haNatPoolBatchTypeMismatch = value.haNatPoolBatchTypeMismatch;
      this._haNatPoolUnusable = value.haNatPoolUnusable;
      this._mgcpAlgCreateRtcpFullconeFailure = value.mgcpAlgCreateRtcpFullconeFailure;
      this._mgcpAlgCreateRtpFullconeFailure = value.mgcpAlgCreateRtpFullconeFailure;
      this._mgcpAlgPortPairAllocFromQuotaPar = value.mgcpAlgPortPairAllocFromQuotaPar;
      this._natPoolUnusable = value.natPoolUnusable;
      this._portOverloadingIncOverflow = value.portOverloadingIncOverflow;
      this._portOverloadingOutOfMemory = value.portOverloadingOutOfMemory;
      this._sipAlgAllocRtpRtcpPortFailure = value.sipAlgAllocRtpRtcpPortFailure;
      this._sipAlgAllocSinglePortFailure = value.sipAlgAllocSinglePortFailure;
      this._sipAlgCreateRtcpFullconeFailure = value.sipAlgCreateRtcpFullconeFailure;
      this._sipAlgCreateRtpFullconeFailure = value.sipAlgCreateRtpFullconeFailure;
      this._sipAlgCreateSingleFullconeFailure = value.sipAlgCreateSingleFullconeFailure;
      this._sipAlgQuotaIncFailure = value.sipAlgQuotaIncFailure;
      this._userQuotaFailure = value.userQuotaFailure;
      this._userQuotaUnusable = value.userQuotaUnusable;
      this._userQuotaUnusableDrop = value.userQuotaUnusableDrop;
      this._uuid = value.uuid;
    }
  }

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
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA {
  /**
  * Enable automatic packet-capture for ADC Port Allocation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#adc_port_allocation_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#adc_port_allocation_failed}
  */
  readonly adcPortAllocationFailed?: number;
  /**
  * Enable automatic packet-capture for Data Session User-Quota Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#data_sesn_user_quota_exceeded VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#data_sesn_user_quota_exceeded}
  */
  readonly dataSesnUserQuotaExceeded?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for LSN Fullcone Extension Memory Allocate Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#fullcone_ext_mem_alloc_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#fullcone_ext_mem_alloc_failure}
  */
  readonly fullconeExtMemAllocFailure?: number;
  /**
  * Enable automatic packet-capture for LSN Fullcone Extension Initialization Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#fullcone_ext_mem_alloc_init_faulure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#fullcone_ext_mem_alloc_init_faulure}
  */
  readonly fullconeExtMemAllocInitFaulure?: number;
  /**
  * Enable automatic packet-capture for Full-cone Session Creation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#fullcone_failure}
  */
  readonly fullconeFailure?: number;
  /**
  * Enable automatic packet-capture for Self-Hairpinning Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#fullcone_self_hairpinning_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#fullcone_self_hairpinning_drop}
  */
  readonly fullconeSelfHairpinningDrop?: number;
  /**
  * Enable automatic packet-capture for H323 ALG Alloc Single RTP or RTCP NAT Port Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#h323_alg_alloc_single_port_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#h323_alg_alloc_single_port_failure}
  */
  readonly h323AlgAllocSinglePortFailure?: number;
  /**
  * Enable automatic packet-capture for H323 ALG Create RTCP Full-cone Session Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#h323_alg_create_rtcp_fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#h323_alg_create_rtcp_fullcone_failure}
  */
  readonly h323AlgCreateRtcpFullconeFailure?: number;
  /**
  * Enable automatic packet-capture for H323 ALG Create RTP Full-cone Session Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#h323_alg_create_rtp_fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#h323_alg_create_rtp_fullcone_failure}
  */
  readonly h323AlgCreateRtpFullconeFailure?: number;
  /**
  * Enable automatic packet-capture for H323 ALG Create Single RTP or RTCP Full-cone Session Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#h323_alg_create_single_fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#h323_alg_create_single_fullcone_failure}
  */
  readonly h323AlgCreateSingleFullconeFailure?: number;
  /**
  * Enable automatic packet-capture for HA NAT Pool Batch Type Mismatch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#ha_nat_pool_batch_type_mismatch VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#ha_nat_pool_batch_type_mismatch}
  */
  readonly haNatPoolBatchTypeMismatch?: number;
  /**
  * Enable automatic packet-capture for HA NAT Pool Unusable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#ha_nat_pool_unusable VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#ha_nat_pool_unusable}
  */
  readonly haNatPoolUnusable?: number;
  /**
  * Enable automatic packet-capture for MGCP ALG Create RTCP Full-cone Session Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#mgcp_alg_create_rtcp_fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#mgcp_alg_create_rtcp_fullcone_failure}
  */
  readonly mgcpAlgCreateRtcpFullconeFailure?: number;
  /**
  * Enable automatic packet-capture for MGCP ALG Create RTP Full-cone Session Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#mgcp_alg_create_rtp_fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#mgcp_alg_create_rtp_fullcone_failure}
  */
  readonly mgcpAlgCreateRtpFullconeFailure?: number;
  /**
  * Enable automatic packet-capture for MGCP ALG Port Pair Allocated From Quota Partition Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#mgcp_alg_port_pair_alloc_from_quota_par VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#mgcp_alg_port_pair_alloc_from_quota_par}
  */
  readonly mgcpAlgPortPairAllocFromQuotaPar?: number;
  /**
  * Enable automatic packet-capture for NAT Pool Unusable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#nat_pool_unusable VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#nat_pool_unusable}
  */
  readonly natPoolUnusable?: number;
  /**
  * Enable automatic packet-capture for Port Overloading Inc Overflow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#port_overloading_inc_overflow VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#port_overloading_inc_overflow}
  */
  readonly portOverloadingIncOverflow?: number;
  /**
  * Enable automatic packet-capture for Port Overloading Out of Memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#port_overloading_out_of_memory VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#port_overloading_out_of_memory}
  */
  readonly portOverloadingOutOfMemory?: number;
  /**
  * Enable automatic packet-capture for SIP ALG Alloc RTP/RTCP NAT Ports Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#sip_alg_alloc_rtp_rtcp_port_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#sip_alg_alloc_rtp_rtcp_port_failure}
  */
  readonly sipAlgAllocRtpRtcpPortFailure?: number;
  /**
  * Enable automatic packet-capture for SIP ALG Alloc Single RTP or RTCP NAT Port Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#sip_alg_alloc_single_port_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#sip_alg_alloc_single_port_failure}
  */
  readonly sipAlgAllocSinglePortFailure?: number;
  /**
  * Enable automatic packet-capture for SIP ALG Create RTCP Full-cone Session Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#sip_alg_create_rtcp_fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#sip_alg_create_rtcp_fullcone_failure}
  */
  readonly sipAlgCreateRtcpFullconeFailure?: number;
  /**
  * Enable automatic packet-capture for SIP ALG Create RTP Full-cone Session Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#sip_alg_create_rtp_fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#sip_alg_create_rtp_fullcone_failure}
  */
  readonly sipAlgCreateRtpFullconeFailure?: number;
  /**
  * Enable automatic packet-capture for SIP ALG Create Single RTP or RTCP Full-cone Session Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#sip_alg_create_single_fullcone_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#sip_alg_create_single_fullcone_failure}
  */
  readonly sipAlgCreateSingleFullconeFailure?: number;
  /**
  * Enable automatic packet-capture for SIP ALG User-Quota Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#sip_alg_quota_inc_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#sip_alg_quota_inc_failure}
  */
  readonly sipAlgQuotaIncFailure?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * Enable automatic packet-capture for User-Quota Creation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#user_quota_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#user_quota_failure}
  */
  readonly userQuotaFailure?: number;
  /**
  * Enable automatic packet-capture for User-Quota Marked Unusable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#user_quota_unusable VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#user_quota_unusable}
  */
  readonly userQuotaUnusable?: number;
  /**
  * Enable automatic packet-capture for User-Quota Unusable Drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#user_quota_unusable_drop VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#user_quota_unusable_drop}
  */
  readonly userQuotaUnusableDrop?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adc_port_allocation_failed: cdktf.numberToTerraform(struct!.adcPortAllocationFailed),
    data_sesn_user_quota_exceeded: cdktf.numberToTerraform(struct!.dataSesnUserQuotaExceeded),
    duration: cdktf.numberToTerraform(struct!.duration),
    fullcone_ext_mem_alloc_failure: cdktf.numberToTerraform(struct!.fullconeExtMemAllocFailure),
    fullcone_ext_mem_alloc_init_faulure: cdktf.numberToTerraform(struct!.fullconeExtMemAllocInitFaulure),
    fullcone_failure: cdktf.numberToTerraform(struct!.fullconeFailure),
    fullcone_self_hairpinning_drop: cdktf.numberToTerraform(struct!.fullconeSelfHairpinningDrop),
    h323_alg_alloc_single_port_failure: cdktf.numberToTerraform(struct!.h323AlgAllocSinglePortFailure),
    h323_alg_create_rtcp_fullcone_failure: cdktf.numberToTerraform(struct!.h323AlgCreateRtcpFullconeFailure),
    h323_alg_create_rtp_fullcone_failure: cdktf.numberToTerraform(struct!.h323AlgCreateRtpFullconeFailure),
    h323_alg_create_single_fullcone_failure: cdktf.numberToTerraform(struct!.h323AlgCreateSingleFullconeFailure),
    ha_nat_pool_batch_type_mismatch: cdktf.numberToTerraform(struct!.haNatPoolBatchTypeMismatch),
    ha_nat_pool_unusable: cdktf.numberToTerraform(struct!.haNatPoolUnusable),
    mgcp_alg_create_rtcp_fullcone_failure: cdktf.numberToTerraform(struct!.mgcpAlgCreateRtcpFullconeFailure),
    mgcp_alg_create_rtp_fullcone_failure: cdktf.numberToTerraform(struct!.mgcpAlgCreateRtpFullconeFailure),
    mgcp_alg_port_pair_alloc_from_quota_par: cdktf.numberToTerraform(struct!.mgcpAlgPortPairAllocFromQuotaPar),
    nat_pool_unusable: cdktf.numberToTerraform(struct!.natPoolUnusable),
    port_overloading_inc_overflow: cdktf.numberToTerraform(struct!.portOverloadingIncOverflow),
    port_overloading_out_of_memory: cdktf.numberToTerraform(struct!.portOverloadingOutOfMemory),
    sip_alg_alloc_rtp_rtcp_port_failure: cdktf.numberToTerraform(struct!.sipAlgAllocRtpRtcpPortFailure),
    sip_alg_alloc_single_port_failure: cdktf.numberToTerraform(struct!.sipAlgAllocSinglePortFailure),
    sip_alg_create_rtcp_fullcone_failure: cdktf.numberToTerraform(struct!.sipAlgCreateRtcpFullconeFailure),
    sip_alg_create_rtp_fullcone_failure: cdktf.numberToTerraform(struct!.sipAlgCreateRtpFullconeFailure),
    sip_alg_create_single_fullcone_failure: cdktf.numberToTerraform(struct!.sipAlgCreateSingleFullconeFailure),
    sip_alg_quota_inc_failure: cdktf.numberToTerraform(struct!.sipAlgQuotaIncFailure),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    user_quota_failure: cdktf.numberToTerraform(struct!.userQuotaFailure),
    user_quota_unusable: cdktf.numberToTerraform(struct!.userQuotaUnusable),
    user_quota_unusable_drop: cdktf.numberToTerraform(struct!.userQuotaUnusableDrop),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adc_port_allocation_failed: {
      value: cdktf.numberToHclTerraform(struct!.adcPortAllocationFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_sesn_user_quota_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.dataSesnUserQuotaExceeded),
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
    fullcone_ext_mem_alloc_failure: {
      value: cdktf.numberToHclTerraform(struct!.fullconeExtMemAllocFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fullcone_ext_mem_alloc_init_faulure: {
      value: cdktf.numberToHclTerraform(struct!.fullconeExtMemAllocInitFaulure),
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
    h323_alg_alloc_single_port_failure: {
      value: cdktf.numberToHclTerraform(struct!.h323AlgAllocSinglePortFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    h323_alg_create_rtcp_fullcone_failure: {
      value: cdktf.numberToHclTerraform(struct!.h323AlgCreateRtcpFullconeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    h323_alg_create_rtp_fullcone_failure: {
      value: cdktf.numberToHclTerraform(struct!.h323AlgCreateRtpFullconeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    h323_alg_create_single_fullcone_failure: {
      value: cdktf.numberToHclTerraform(struct!.h323AlgCreateSingleFullconeFailure),
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
    mgcp_alg_create_rtcp_fullcone_failure: {
      value: cdktf.numberToHclTerraform(struct!.mgcpAlgCreateRtcpFullconeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mgcp_alg_create_rtp_fullcone_failure: {
      value: cdktf.numberToHclTerraform(struct!.mgcpAlgCreateRtpFullconeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mgcp_alg_port_pair_alloc_from_quota_par: {
      value: cdktf.numberToHclTerraform(struct!.mgcpAlgPortPairAllocFromQuotaPar),
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
    port_overloading_inc_overflow: {
      value: cdktf.numberToHclTerraform(struct!.portOverloadingIncOverflow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_overloading_out_of_memory: {
      value: cdktf.numberToHclTerraform(struct!.portOverloadingOutOfMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sip_alg_alloc_rtp_rtcp_port_failure: {
      value: cdktf.numberToHclTerraform(struct!.sipAlgAllocRtpRtcpPortFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sip_alg_alloc_single_port_failure: {
      value: cdktf.numberToHclTerraform(struct!.sipAlgAllocSinglePortFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sip_alg_create_rtcp_fullcone_failure: {
      value: cdktf.numberToHclTerraform(struct!.sipAlgCreateRtcpFullconeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sip_alg_create_rtp_fullcone_failure: {
      value: cdktf.numberToHclTerraform(struct!.sipAlgCreateRtpFullconeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sip_alg_create_single_fullcone_failure: {
      value: cdktf.numberToHclTerraform(struct!.sipAlgCreateSingleFullconeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sip_alg_quota_inc_failure: {
      value: cdktf.numberToHclTerraform(struct!.sipAlgQuotaIncFailure),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adcPortAllocationFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.adcPortAllocationFailed = this._adcPortAllocationFailed;
    }
    if (this._dataSesnUserQuotaExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSesnUserQuotaExceeded = this._dataSesnUserQuotaExceeded;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._fullconeExtMemAllocFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullconeExtMemAllocFailure = this._fullconeExtMemAllocFailure;
    }
    if (this._fullconeExtMemAllocInitFaulure !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullconeExtMemAllocInitFaulure = this._fullconeExtMemAllocInitFaulure;
    }
    if (this._fullconeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullconeFailure = this._fullconeFailure;
    }
    if (this._fullconeSelfHairpinningDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullconeSelfHairpinningDrop = this._fullconeSelfHairpinningDrop;
    }
    if (this._h323AlgAllocSinglePortFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.h323AlgAllocSinglePortFailure = this._h323AlgAllocSinglePortFailure;
    }
    if (this._h323AlgCreateRtcpFullconeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.h323AlgCreateRtcpFullconeFailure = this._h323AlgCreateRtcpFullconeFailure;
    }
    if (this._h323AlgCreateRtpFullconeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.h323AlgCreateRtpFullconeFailure = this._h323AlgCreateRtpFullconeFailure;
    }
    if (this._h323AlgCreateSingleFullconeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.h323AlgCreateSingleFullconeFailure = this._h323AlgCreateSingleFullconeFailure;
    }
    if (this._haNatPoolBatchTypeMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.haNatPoolBatchTypeMismatch = this._haNatPoolBatchTypeMismatch;
    }
    if (this._haNatPoolUnusable !== undefined) {
      hasAnyValues = true;
      internalValueResult.haNatPoolUnusable = this._haNatPoolUnusable;
    }
    if (this._mgcpAlgCreateRtcpFullconeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgcpAlgCreateRtcpFullconeFailure = this._mgcpAlgCreateRtcpFullconeFailure;
    }
    if (this._mgcpAlgCreateRtpFullconeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgcpAlgCreateRtpFullconeFailure = this._mgcpAlgCreateRtpFullconeFailure;
    }
    if (this._mgcpAlgPortPairAllocFromQuotaPar !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgcpAlgPortPairAllocFromQuotaPar = this._mgcpAlgPortPairAllocFromQuotaPar;
    }
    if (this._natPoolUnusable !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPoolUnusable = this._natPoolUnusable;
    }
    if (this._portOverloadingIncOverflow !== undefined) {
      hasAnyValues = true;
      internalValueResult.portOverloadingIncOverflow = this._portOverloadingIncOverflow;
    }
    if (this._portOverloadingOutOfMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.portOverloadingOutOfMemory = this._portOverloadingOutOfMemory;
    }
    if (this._sipAlgAllocRtpRtcpPortFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipAlgAllocRtpRtcpPortFailure = this._sipAlgAllocRtpRtcpPortFailure;
    }
    if (this._sipAlgAllocSinglePortFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipAlgAllocSinglePortFailure = this._sipAlgAllocSinglePortFailure;
    }
    if (this._sipAlgCreateRtcpFullconeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipAlgCreateRtcpFullconeFailure = this._sipAlgCreateRtcpFullconeFailure;
    }
    if (this._sipAlgCreateRtpFullconeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipAlgCreateRtpFullconeFailure = this._sipAlgCreateRtpFullconeFailure;
    }
    if (this._sipAlgCreateSingleFullconeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipAlgCreateSingleFullconeFailure = this._sipAlgCreateSingleFullconeFailure;
    }
    if (this._sipAlgQuotaIncFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipAlgQuotaIncFailure = this._sipAlgQuotaIncFailure;
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

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adcPortAllocationFailed = undefined;
      this._dataSesnUserQuotaExceeded = undefined;
      this._duration = undefined;
      this._fullconeExtMemAllocFailure = undefined;
      this._fullconeExtMemAllocInitFaulure = undefined;
      this._fullconeFailure = undefined;
      this._fullconeSelfHairpinningDrop = undefined;
      this._h323AlgAllocSinglePortFailure = undefined;
      this._h323AlgCreateRtcpFullconeFailure = undefined;
      this._h323AlgCreateRtpFullconeFailure = undefined;
      this._h323AlgCreateSingleFullconeFailure = undefined;
      this._haNatPoolBatchTypeMismatch = undefined;
      this._haNatPoolUnusable = undefined;
      this._mgcpAlgCreateRtcpFullconeFailure = undefined;
      this._mgcpAlgCreateRtpFullconeFailure = undefined;
      this._mgcpAlgPortPairAllocFromQuotaPar = undefined;
      this._natPoolUnusable = undefined;
      this._portOverloadingIncOverflow = undefined;
      this._portOverloadingOutOfMemory = undefined;
      this._sipAlgAllocRtpRtcpPortFailure = undefined;
      this._sipAlgAllocSinglePortFailure = undefined;
      this._sipAlgCreateRtcpFullconeFailure = undefined;
      this._sipAlgCreateRtpFullconeFailure = undefined;
      this._sipAlgCreateSingleFullconeFailure = undefined;
      this._sipAlgQuotaIncFailure = undefined;
      this._thresholdExceededBy = undefined;
      this._userQuotaFailure = undefined;
      this._userQuotaUnusable = undefined;
      this._userQuotaUnusableDrop = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adcPortAllocationFailed = value.adcPortAllocationFailed;
      this._dataSesnUserQuotaExceeded = value.dataSesnUserQuotaExceeded;
      this._duration = value.duration;
      this._fullconeExtMemAllocFailure = value.fullconeExtMemAllocFailure;
      this._fullconeExtMemAllocInitFaulure = value.fullconeExtMemAllocInitFaulure;
      this._fullconeFailure = value.fullconeFailure;
      this._fullconeSelfHairpinningDrop = value.fullconeSelfHairpinningDrop;
      this._h323AlgAllocSinglePortFailure = value.h323AlgAllocSinglePortFailure;
      this._h323AlgCreateRtcpFullconeFailure = value.h323AlgCreateRtcpFullconeFailure;
      this._h323AlgCreateRtpFullconeFailure = value.h323AlgCreateRtpFullconeFailure;
      this._h323AlgCreateSingleFullconeFailure = value.h323AlgCreateSingleFullconeFailure;
      this._haNatPoolBatchTypeMismatch = value.haNatPoolBatchTypeMismatch;
      this._haNatPoolUnusable = value.haNatPoolUnusable;
      this._mgcpAlgCreateRtcpFullconeFailure = value.mgcpAlgCreateRtcpFullconeFailure;
      this._mgcpAlgCreateRtpFullconeFailure = value.mgcpAlgCreateRtpFullconeFailure;
      this._mgcpAlgPortPairAllocFromQuotaPar = value.mgcpAlgPortPairAllocFromQuotaPar;
      this._natPoolUnusable = value.natPoolUnusable;
      this._portOverloadingIncOverflow = value.portOverloadingIncOverflow;
      this._portOverloadingOutOfMemory = value.portOverloadingOutOfMemory;
      this._sipAlgAllocRtpRtcpPortFailure = value.sipAlgAllocRtpRtcpPortFailure;
      this._sipAlgAllocSinglePortFailure = value.sipAlgAllocSinglePortFailure;
      this._sipAlgCreateRtcpFullconeFailure = value.sipAlgCreateRtcpFullconeFailure;
      this._sipAlgCreateRtpFullconeFailure = value.sipAlgCreateRtpFullconeFailure;
      this._sipAlgCreateSingleFullconeFailure = value.sipAlgCreateSingleFullconeFailure;
      this._sipAlgQuotaIncFailure = value.sipAlgQuotaIncFailure;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._userQuotaFailure = value.userQuotaFailure;
      this._userQuotaUnusable = value.userQuotaUnusable;
      this._userQuotaUnusableDrop = value.userQuotaUnusableDrop;
      this._uuid = value.uuid;
    }
  }

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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_cgnv6_lsn',
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
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateA) {
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
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeCgnv6LsnTriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
