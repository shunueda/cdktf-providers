// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#template_name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#template_name}
  */
  readonly templateName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for GTP-C SMP signature check Failed on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#blade_gtp_c_smp_sig_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#blade_gtp_c_smp_sig_check_failed}
  */
  readonly bladeGtpCSmpSigCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP-Info ext not found while freeing C-smp on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#blade_gtp_info_ext_not_found VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#blade_gtp_info_ext_not_found}
  */
  readonly bladeGtpInfoExtNotFound?: number;
  /**
  * Enable automatic packet-capture for GTP Rate Limit Entry Create Failure on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#blade_gtp_rate_limit_entry_create_failu VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#blade_gtp_rate_limit_entry_create_failu}
  */
  readonly bladeGtpRateLimitEntryCreateFailu?: number;
  /**
  * Enable automatic packet-capture for GTP Rate Limit SMP Create Failure on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#blade_gtp_rate_limit_smp_create_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#blade_gtp_rate_limit_smp_create_failure}
  */
  readonly bladeGtpRateLimitSmpCreateFailure?: number;
  /**
  * Enable automatic packet-capture for GTP Rate Limit Dynamic Counters Create Failure on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#blade_gtp_rate_limit_t3_ctr_create_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#blade_gtp_rate_limit_t3_ctr_create_fail}
  */
  readonly bladeGtpRateLimitT3CtrCreateFail?: number;
  /**
  * Enable automatic packet-capture for GTP-C SMP check Failed on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#blade_gtp_smp_c_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#blade_gtp_smp_c_check_failed}
  */
  readonly bladeGtpSmpCCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP-U session count is 0 in GTP-C SMP on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#blade_gtp_smp_dec_sess_count_check_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#blade_gtp_smp_dec_sess_count_check_fail}
  */
  readonly bladeGtpSmpDecSessCountCheckFail?: number;
  /**
  * Enable automatic packet-capture for GTP SMP PATH check Failed on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#blade_gtp_smp_path_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#blade_gtp_smp_path_check_failed}
  */
  readonly bladeGtpSmpPathCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP-U session count is not in range of 0-11 in GTP-C SMP on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#blade_gtp_smp_session_count_check_faile VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#blade_gtp_smp_session_count_check_faile}
  */
  readonly bladeGtpSmpSessionCountCheckFaile?: number;
  /**
  * Enable automatic packet-capture for GTP SMP signature check Failed on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#blade_gtp_smp_sig_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#blade_gtp_smp_sig_check_failed}
  */
  readonly bladeGtpSmpSigCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP U-SMP check Failed on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#blade_gtp_u_smp_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#blade_gtp_u_smp_check_failed}
  */
  readonly bladeGtpUSmpCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP-U SMP signature check Failed on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#blade_gtp_u_smp_sig_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#blade_gtp_u_smp_sig_check_failed}
  */
  readonly bladeGtpUSmpSigCheckFailed?: number;
  /**
  * Enable automatic packet-capture for Out of Tunnel Memory on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#blade_out_of_session_memory VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#blade_out_of_session_memory}
  */
  readonly bladeOutOfSessionMemory?: number;
  /**
  * Enable automatic packet-capture for GTP-C packet failed creating L4-session in slowpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_c_fail_conn_create_slow VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_c_fail_conn_create_slow}
  */
  readonly gtpCFailConnCreateSlow?: number;
  /**
  * Enable automatic packet-capture for GTP-C SMP signature check Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_c_smp_sig_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_c_smp_sig_check_failed}
  */
  readonly gtpCSmpSigCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP-Info ext not found while freeing C-smp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_info_ext_not_found VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_info_ext_not_found}
  */
  readonly gtpInfoExtNotFound?: number;
  /**
  * Enable automatic packet-capture for GTP path packet failed while creating L4-session in slowpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_pathm_fail_conn_create_slow VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_pathm_fail_conn_create_slow}
  */
  readonly gtpPathmFailConnCreateSlow?: number;
  /**
  * Enable automatic packet-capture for GTP Rate Limit Entry Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_rate_limit_entry_create_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_rate_limit_entry_create_failure}
  */
  readonly gtpRateLimitEntryCreateFailure?: number;
  /**
  * Enable automatic packet-capture for GTP Rate Limit SMP Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_rate_limit_smp_create_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_rate_limit_smp_create_failure}
  */
  readonly gtpRateLimitSmpCreateFailure?: number;
  /**
  * Enable automatic packet-capture for GTP Rate Limit Dynamic Counters Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_rate_limit_t3_ctr_create_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_rate_limit_t3_ctr_create_failure}
  */
  readonly gtpRateLimitT3CtrCreateFailure?: number;
  /**
  * Enable automatic packet-capture for GTP-C SMP check Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_smp_c_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_smp_c_check_failed}
  */
  readonly gtpSmpCCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP-U session count is 0 in GTP-C SMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_smp_dec_sess_count_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_smp_dec_sess_count_check_failed}
  */
  readonly gtpSmpDecSessCountCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP SMP PATH check Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_smp_path_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_smp_path_check_failed}
  */
  readonly gtpSmpPathCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP SMP signature check Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_smp_sig_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_smp_sig_check_failed}
  */
  readonly gtpSmpSigCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP Tunnel Level Rate Limit Entry Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_tunnel_rate_limit_entry_create_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_tunnel_rate_limit_entry_create_fail}
  */
  readonly gtpTunnelRateLimitEntryCreateFail?: number;
  /**
  * Enable automatic packet-capture for GTP-U packet failed while creating L4-session in slowpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_u_fail_conn_create_slow VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_u_fail_conn_create_slow}
  */
  readonly gtpUFailConnCreateSlow?: number;
  /**
  * Enable automatic packet-capture for GTP U-SMP check Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_u_smp_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_u_smp_check_failed}
  */
  readonly gtpUSmpCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP SMP signature check Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_u_smp_sig_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_u_smp_sig_check_failed}
  */
  readonly gtpUSmpSigCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP-U Tunnel Level Rate Limit Entry Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_u_tunnel_rate_limit_entry_create_fa VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_u_tunnel_rate_limit_entry_create_fa}
  */
  readonly gtpUTunnelRateLimitEntryCreateFa?: number;
  /**
  * Enable automatic packet-capture for Out of Tunnel Memory for GTP-C
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#out_of_session_memory VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#out_of_session_memory}
  */
  readonly outOfSessionMemory?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blade_gtp_c_smp_sig_check_failed: cdktf.numberToTerraform(struct!.bladeGtpCSmpSigCheckFailed),
    blade_gtp_info_ext_not_found: cdktf.numberToTerraform(struct!.bladeGtpInfoExtNotFound),
    blade_gtp_rate_limit_entry_create_failu: cdktf.numberToTerraform(struct!.bladeGtpRateLimitEntryCreateFailu),
    blade_gtp_rate_limit_smp_create_failure: cdktf.numberToTerraform(struct!.bladeGtpRateLimitSmpCreateFailure),
    blade_gtp_rate_limit_t3_ctr_create_fail: cdktf.numberToTerraform(struct!.bladeGtpRateLimitT3CtrCreateFail),
    blade_gtp_smp_c_check_failed: cdktf.numberToTerraform(struct!.bladeGtpSmpCCheckFailed),
    blade_gtp_smp_dec_sess_count_check_fail: cdktf.numberToTerraform(struct!.bladeGtpSmpDecSessCountCheckFail),
    blade_gtp_smp_path_check_failed: cdktf.numberToTerraform(struct!.bladeGtpSmpPathCheckFailed),
    blade_gtp_smp_session_count_check_faile: cdktf.numberToTerraform(struct!.bladeGtpSmpSessionCountCheckFaile),
    blade_gtp_smp_sig_check_failed: cdktf.numberToTerraform(struct!.bladeGtpSmpSigCheckFailed),
    blade_gtp_u_smp_check_failed: cdktf.numberToTerraform(struct!.bladeGtpUSmpCheckFailed),
    blade_gtp_u_smp_sig_check_failed: cdktf.numberToTerraform(struct!.bladeGtpUSmpSigCheckFailed),
    blade_out_of_session_memory: cdktf.numberToTerraform(struct!.bladeOutOfSessionMemory),
    gtp_c_fail_conn_create_slow: cdktf.numberToTerraform(struct!.gtpCFailConnCreateSlow),
    gtp_c_smp_sig_check_failed: cdktf.numberToTerraform(struct!.gtpCSmpSigCheckFailed),
    gtp_info_ext_not_found: cdktf.numberToTerraform(struct!.gtpInfoExtNotFound),
    gtp_pathm_fail_conn_create_slow: cdktf.numberToTerraform(struct!.gtpPathmFailConnCreateSlow),
    gtp_rate_limit_entry_create_failure: cdktf.numberToTerraform(struct!.gtpRateLimitEntryCreateFailure),
    gtp_rate_limit_smp_create_failure: cdktf.numberToTerraform(struct!.gtpRateLimitSmpCreateFailure),
    gtp_rate_limit_t3_ctr_create_failure: cdktf.numberToTerraform(struct!.gtpRateLimitT3CtrCreateFailure),
    gtp_smp_c_check_failed: cdktf.numberToTerraform(struct!.gtpSmpCCheckFailed),
    gtp_smp_dec_sess_count_check_failed: cdktf.numberToTerraform(struct!.gtpSmpDecSessCountCheckFailed),
    gtp_smp_path_check_failed: cdktf.numberToTerraform(struct!.gtpSmpPathCheckFailed),
    gtp_smp_sig_check_failed: cdktf.numberToTerraform(struct!.gtpSmpSigCheckFailed),
    gtp_tunnel_rate_limit_entry_create_fail: cdktf.numberToTerraform(struct!.gtpTunnelRateLimitEntryCreateFail),
    gtp_u_fail_conn_create_slow: cdktf.numberToTerraform(struct!.gtpUFailConnCreateSlow),
    gtp_u_smp_check_failed: cdktf.numberToTerraform(struct!.gtpUSmpCheckFailed),
    gtp_u_smp_sig_check_failed: cdktf.numberToTerraform(struct!.gtpUSmpSigCheckFailed),
    gtp_u_tunnel_rate_limit_entry_create_fa: cdktf.numberToTerraform(struct!.gtpUTunnelRateLimitEntryCreateFa),
    out_of_session_memory: cdktf.numberToTerraform(struct!.outOfSessionMemory),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blade_gtp_c_smp_sig_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.bladeGtpCSmpSigCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blade_gtp_info_ext_not_found: {
      value: cdktf.numberToHclTerraform(struct!.bladeGtpInfoExtNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blade_gtp_rate_limit_entry_create_failu: {
      value: cdktf.numberToHclTerraform(struct!.bladeGtpRateLimitEntryCreateFailu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blade_gtp_rate_limit_smp_create_failure: {
      value: cdktf.numberToHclTerraform(struct!.bladeGtpRateLimitSmpCreateFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blade_gtp_rate_limit_t3_ctr_create_fail: {
      value: cdktf.numberToHclTerraform(struct!.bladeGtpRateLimitT3CtrCreateFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blade_gtp_smp_c_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.bladeGtpSmpCCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blade_gtp_smp_dec_sess_count_check_fail: {
      value: cdktf.numberToHclTerraform(struct!.bladeGtpSmpDecSessCountCheckFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blade_gtp_smp_path_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.bladeGtpSmpPathCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blade_gtp_smp_session_count_check_faile: {
      value: cdktf.numberToHclTerraform(struct!.bladeGtpSmpSessionCountCheckFaile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blade_gtp_smp_sig_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.bladeGtpSmpSigCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blade_gtp_u_smp_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.bladeGtpUSmpCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blade_gtp_u_smp_sig_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.bladeGtpUSmpSigCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blade_out_of_session_memory: {
      value: cdktf.numberToHclTerraform(struct!.bladeOutOfSessionMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_c_fail_conn_create_slow: {
      value: cdktf.numberToHclTerraform(struct!.gtpCFailConnCreateSlow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_c_smp_sig_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.gtpCSmpSigCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_info_ext_not_found: {
      value: cdktf.numberToHclTerraform(struct!.gtpInfoExtNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_pathm_fail_conn_create_slow: {
      value: cdktf.numberToHclTerraform(struct!.gtpPathmFailConnCreateSlow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_rate_limit_entry_create_failure: {
      value: cdktf.numberToHclTerraform(struct!.gtpRateLimitEntryCreateFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_rate_limit_smp_create_failure: {
      value: cdktf.numberToHclTerraform(struct!.gtpRateLimitSmpCreateFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_rate_limit_t3_ctr_create_failure: {
      value: cdktf.numberToHclTerraform(struct!.gtpRateLimitT3CtrCreateFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_smp_c_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.gtpSmpCCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_smp_dec_sess_count_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.gtpSmpDecSessCountCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_smp_path_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.gtpSmpPathCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_smp_sig_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.gtpSmpSigCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_tunnel_rate_limit_entry_create_fail: {
      value: cdktf.numberToHclTerraform(struct!.gtpTunnelRateLimitEntryCreateFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_u_fail_conn_create_slow: {
      value: cdktf.numberToHclTerraform(struct!.gtpUFailConnCreateSlow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_u_smp_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.gtpUSmpCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_u_smp_sig_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.gtpUSmpSigCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_u_tunnel_rate_limit_entry_create_fa: {
      value: cdktf.numberToHclTerraform(struct!.gtpUTunnelRateLimitEntryCreateFa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_of_session_memory: {
      value: cdktf.numberToHclTerraform(struct!.outOfSessionMemory),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bladeGtpCSmpSigCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.bladeGtpCSmpSigCheckFailed = this._bladeGtpCSmpSigCheckFailed;
    }
    if (this._bladeGtpInfoExtNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.bladeGtpInfoExtNotFound = this._bladeGtpInfoExtNotFound;
    }
    if (this._bladeGtpRateLimitEntryCreateFailu !== undefined) {
      hasAnyValues = true;
      internalValueResult.bladeGtpRateLimitEntryCreateFailu = this._bladeGtpRateLimitEntryCreateFailu;
    }
    if (this._bladeGtpRateLimitSmpCreateFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.bladeGtpRateLimitSmpCreateFailure = this._bladeGtpRateLimitSmpCreateFailure;
    }
    if (this._bladeGtpRateLimitT3CtrCreateFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.bladeGtpRateLimitT3CtrCreateFail = this._bladeGtpRateLimitT3CtrCreateFail;
    }
    if (this._bladeGtpSmpCCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.bladeGtpSmpCCheckFailed = this._bladeGtpSmpCCheckFailed;
    }
    if (this._bladeGtpSmpDecSessCountCheckFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.bladeGtpSmpDecSessCountCheckFail = this._bladeGtpSmpDecSessCountCheckFail;
    }
    if (this._bladeGtpSmpPathCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.bladeGtpSmpPathCheckFailed = this._bladeGtpSmpPathCheckFailed;
    }
    if (this._bladeGtpSmpSessionCountCheckFaile !== undefined) {
      hasAnyValues = true;
      internalValueResult.bladeGtpSmpSessionCountCheckFaile = this._bladeGtpSmpSessionCountCheckFaile;
    }
    if (this._bladeGtpSmpSigCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.bladeGtpSmpSigCheckFailed = this._bladeGtpSmpSigCheckFailed;
    }
    if (this._bladeGtpUSmpCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.bladeGtpUSmpCheckFailed = this._bladeGtpUSmpCheckFailed;
    }
    if (this._bladeGtpUSmpSigCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.bladeGtpUSmpSigCheckFailed = this._bladeGtpUSmpSigCheckFailed;
    }
    if (this._bladeOutOfSessionMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.bladeOutOfSessionMemory = this._bladeOutOfSessionMemory;
    }
    if (this._gtpCFailConnCreateSlow !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpCFailConnCreateSlow = this._gtpCFailConnCreateSlow;
    }
    if (this._gtpCSmpSigCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpCSmpSigCheckFailed = this._gtpCSmpSigCheckFailed;
    }
    if (this._gtpInfoExtNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpInfoExtNotFound = this._gtpInfoExtNotFound;
    }
    if (this._gtpPathmFailConnCreateSlow !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpPathmFailConnCreateSlow = this._gtpPathmFailConnCreateSlow;
    }
    if (this._gtpRateLimitEntryCreateFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpRateLimitEntryCreateFailure = this._gtpRateLimitEntryCreateFailure;
    }
    if (this._gtpRateLimitSmpCreateFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpRateLimitSmpCreateFailure = this._gtpRateLimitSmpCreateFailure;
    }
    if (this._gtpRateLimitT3CtrCreateFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpRateLimitT3CtrCreateFailure = this._gtpRateLimitT3CtrCreateFailure;
    }
    if (this._gtpSmpCCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpSmpCCheckFailed = this._gtpSmpCCheckFailed;
    }
    if (this._gtpSmpDecSessCountCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpSmpDecSessCountCheckFailed = this._gtpSmpDecSessCountCheckFailed;
    }
    if (this._gtpSmpPathCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpSmpPathCheckFailed = this._gtpSmpPathCheckFailed;
    }
    if (this._gtpSmpSigCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpSmpSigCheckFailed = this._gtpSmpSigCheckFailed;
    }
    if (this._gtpTunnelRateLimitEntryCreateFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpTunnelRateLimitEntryCreateFail = this._gtpTunnelRateLimitEntryCreateFail;
    }
    if (this._gtpUFailConnCreateSlow !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpUFailConnCreateSlow = this._gtpUFailConnCreateSlow;
    }
    if (this._gtpUSmpCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpUSmpCheckFailed = this._gtpUSmpCheckFailed;
    }
    if (this._gtpUSmpSigCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpUSmpSigCheckFailed = this._gtpUSmpSigCheckFailed;
    }
    if (this._gtpUTunnelRateLimitEntryCreateFa !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpUTunnelRateLimitEntryCreateFa = this._gtpUTunnelRateLimitEntryCreateFa;
    }
    if (this._outOfSessionMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.outOfSessionMemory = this._outOfSessionMemory;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bladeGtpCSmpSigCheckFailed = undefined;
      this._bladeGtpInfoExtNotFound = undefined;
      this._bladeGtpRateLimitEntryCreateFailu = undefined;
      this._bladeGtpRateLimitSmpCreateFailure = undefined;
      this._bladeGtpRateLimitT3CtrCreateFail = undefined;
      this._bladeGtpSmpCCheckFailed = undefined;
      this._bladeGtpSmpDecSessCountCheckFail = undefined;
      this._bladeGtpSmpPathCheckFailed = undefined;
      this._bladeGtpSmpSessionCountCheckFaile = undefined;
      this._bladeGtpSmpSigCheckFailed = undefined;
      this._bladeGtpUSmpCheckFailed = undefined;
      this._bladeGtpUSmpSigCheckFailed = undefined;
      this._bladeOutOfSessionMemory = undefined;
      this._gtpCFailConnCreateSlow = undefined;
      this._gtpCSmpSigCheckFailed = undefined;
      this._gtpInfoExtNotFound = undefined;
      this._gtpPathmFailConnCreateSlow = undefined;
      this._gtpRateLimitEntryCreateFailure = undefined;
      this._gtpRateLimitSmpCreateFailure = undefined;
      this._gtpRateLimitT3CtrCreateFailure = undefined;
      this._gtpSmpCCheckFailed = undefined;
      this._gtpSmpDecSessCountCheckFailed = undefined;
      this._gtpSmpPathCheckFailed = undefined;
      this._gtpSmpSigCheckFailed = undefined;
      this._gtpTunnelRateLimitEntryCreateFail = undefined;
      this._gtpUFailConnCreateSlow = undefined;
      this._gtpUSmpCheckFailed = undefined;
      this._gtpUSmpSigCheckFailed = undefined;
      this._gtpUTunnelRateLimitEntryCreateFa = undefined;
      this._outOfSessionMemory = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bladeGtpCSmpSigCheckFailed = value.bladeGtpCSmpSigCheckFailed;
      this._bladeGtpInfoExtNotFound = value.bladeGtpInfoExtNotFound;
      this._bladeGtpRateLimitEntryCreateFailu = value.bladeGtpRateLimitEntryCreateFailu;
      this._bladeGtpRateLimitSmpCreateFailure = value.bladeGtpRateLimitSmpCreateFailure;
      this._bladeGtpRateLimitT3CtrCreateFail = value.bladeGtpRateLimitT3CtrCreateFail;
      this._bladeGtpSmpCCheckFailed = value.bladeGtpSmpCCheckFailed;
      this._bladeGtpSmpDecSessCountCheckFail = value.bladeGtpSmpDecSessCountCheckFail;
      this._bladeGtpSmpPathCheckFailed = value.bladeGtpSmpPathCheckFailed;
      this._bladeGtpSmpSessionCountCheckFaile = value.bladeGtpSmpSessionCountCheckFaile;
      this._bladeGtpSmpSigCheckFailed = value.bladeGtpSmpSigCheckFailed;
      this._bladeGtpUSmpCheckFailed = value.bladeGtpUSmpCheckFailed;
      this._bladeGtpUSmpSigCheckFailed = value.bladeGtpUSmpSigCheckFailed;
      this._bladeOutOfSessionMemory = value.bladeOutOfSessionMemory;
      this._gtpCFailConnCreateSlow = value.gtpCFailConnCreateSlow;
      this._gtpCSmpSigCheckFailed = value.gtpCSmpSigCheckFailed;
      this._gtpInfoExtNotFound = value.gtpInfoExtNotFound;
      this._gtpPathmFailConnCreateSlow = value.gtpPathmFailConnCreateSlow;
      this._gtpRateLimitEntryCreateFailure = value.gtpRateLimitEntryCreateFailure;
      this._gtpRateLimitSmpCreateFailure = value.gtpRateLimitSmpCreateFailure;
      this._gtpRateLimitT3CtrCreateFailure = value.gtpRateLimitT3CtrCreateFailure;
      this._gtpSmpCCheckFailed = value.gtpSmpCCheckFailed;
      this._gtpSmpDecSessCountCheckFailed = value.gtpSmpDecSessCountCheckFailed;
      this._gtpSmpPathCheckFailed = value.gtpSmpPathCheckFailed;
      this._gtpSmpSigCheckFailed = value.gtpSmpSigCheckFailed;
      this._gtpTunnelRateLimitEntryCreateFail = value.gtpTunnelRateLimitEntryCreateFail;
      this._gtpUFailConnCreateSlow = value.gtpUFailConnCreateSlow;
      this._gtpUSmpCheckFailed = value.gtpUSmpCheckFailed;
      this._gtpUSmpSigCheckFailed = value.gtpUSmpSigCheckFailed;
      this._gtpUTunnelRateLimitEntryCreateFa = value.gtpUTunnelRateLimitEntryCreateFa;
      this._outOfSessionMemory = value.outOfSessionMemory;
      this._uuid = value.uuid;
    }
  }

  // blade_gtp_c_smp_sig_check_failed - computed: false, optional: true, required: false
  private _bladeGtpCSmpSigCheckFailed?: number; 
  public get bladeGtpCSmpSigCheckFailed() {
    return this.getNumberAttribute('blade_gtp_c_smp_sig_check_failed');
  }
  public set bladeGtpCSmpSigCheckFailed(value: number) {
    this._bladeGtpCSmpSigCheckFailed = value;
  }
  public resetBladeGtpCSmpSigCheckFailed() {
    this._bladeGtpCSmpSigCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bladeGtpCSmpSigCheckFailedInput() {
    return this._bladeGtpCSmpSigCheckFailed;
  }

  // blade_gtp_info_ext_not_found - computed: false, optional: true, required: false
  private _bladeGtpInfoExtNotFound?: number; 
  public get bladeGtpInfoExtNotFound() {
    return this.getNumberAttribute('blade_gtp_info_ext_not_found');
  }
  public set bladeGtpInfoExtNotFound(value: number) {
    this._bladeGtpInfoExtNotFound = value;
  }
  public resetBladeGtpInfoExtNotFound() {
    this._bladeGtpInfoExtNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bladeGtpInfoExtNotFoundInput() {
    return this._bladeGtpInfoExtNotFound;
  }

  // blade_gtp_rate_limit_entry_create_failu - computed: false, optional: true, required: false
  private _bladeGtpRateLimitEntryCreateFailu?: number; 
  public get bladeGtpRateLimitEntryCreateFailu() {
    return this.getNumberAttribute('blade_gtp_rate_limit_entry_create_failu');
  }
  public set bladeGtpRateLimitEntryCreateFailu(value: number) {
    this._bladeGtpRateLimitEntryCreateFailu = value;
  }
  public resetBladeGtpRateLimitEntryCreateFailu() {
    this._bladeGtpRateLimitEntryCreateFailu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bladeGtpRateLimitEntryCreateFailuInput() {
    return this._bladeGtpRateLimitEntryCreateFailu;
  }

  // blade_gtp_rate_limit_smp_create_failure - computed: false, optional: true, required: false
  private _bladeGtpRateLimitSmpCreateFailure?: number; 
  public get bladeGtpRateLimitSmpCreateFailure() {
    return this.getNumberAttribute('blade_gtp_rate_limit_smp_create_failure');
  }
  public set bladeGtpRateLimitSmpCreateFailure(value: number) {
    this._bladeGtpRateLimitSmpCreateFailure = value;
  }
  public resetBladeGtpRateLimitSmpCreateFailure() {
    this._bladeGtpRateLimitSmpCreateFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bladeGtpRateLimitSmpCreateFailureInput() {
    return this._bladeGtpRateLimitSmpCreateFailure;
  }

  // blade_gtp_rate_limit_t3_ctr_create_fail - computed: false, optional: true, required: false
  private _bladeGtpRateLimitT3CtrCreateFail?: number; 
  public get bladeGtpRateLimitT3CtrCreateFail() {
    return this.getNumberAttribute('blade_gtp_rate_limit_t3_ctr_create_fail');
  }
  public set bladeGtpRateLimitT3CtrCreateFail(value: number) {
    this._bladeGtpRateLimitT3CtrCreateFail = value;
  }
  public resetBladeGtpRateLimitT3CtrCreateFail() {
    this._bladeGtpRateLimitT3CtrCreateFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bladeGtpRateLimitT3CtrCreateFailInput() {
    return this._bladeGtpRateLimitT3CtrCreateFail;
  }

  // blade_gtp_smp_c_check_failed - computed: false, optional: true, required: false
  private _bladeGtpSmpCCheckFailed?: number; 
  public get bladeGtpSmpCCheckFailed() {
    return this.getNumberAttribute('blade_gtp_smp_c_check_failed');
  }
  public set bladeGtpSmpCCheckFailed(value: number) {
    this._bladeGtpSmpCCheckFailed = value;
  }
  public resetBladeGtpSmpCCheckFailed() {
    this._bladeGtpSmpCCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bladeGtpSmpCCheckFailedInput() {
    return this._bladeGtpSmpCCheckFailed;
  }

  // blade_gtp_smp_dec_sess_count_check_fail - computed: false, optional: true, required: false
  private _bladeGtpSmpDecSessCountCheckFail?: number; 
  public get bladeGtpSmpDecSessCountCheckFail() {
    return this.getNumberAttribute('blade_gtp_smp_dec_sess_count_check_fail');
  }
  public set bladeGtpSmpDecSessCountCheckFail(value: number) {
    this._bladeGtpSmpDecSessCountCheckFail = value;
  }
  public resetBladeGtpSmpDecSessCountCheckFail() {
    this._bladeGtpSmpDecSessCountCheckFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bladeGtpSmpDecSessCountCheckFailInput() {
    return this._bladeGtpSmpDecSessCountCheckFail;
  }

  // blade_gtp_smp_path_check_failed - computed: false, optional: true, required: false
  private _bladeGtpSmpPathCheckFailed?: number; 
  public get bladeGtpSmpPathCheckFailed() {
    return this.getNumberAttribute('blade_gtp_smp_path_check_failed');
  }
  public set bladeGtpSmpPathCheckFailed(value: number) {
    this._bladeGtpSmpPathCheckFailed = value;
  }
  public resetBladeGtpSmpPathCheckFailed() {
    this._bladeGtpSmpPathCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bladeGtpSmpPathCheckFailedInput() {
    return this._bladeGtpSmpPathCheckFailed;
  }

  // blade_gtp_smp_session_count_check_faile - computed: false, optional: true, required: false
  private _bladeGtpSmpSessionCountCheckFaile?: number; 
  public get bladeGtpSmpSessionCountCheckFaile() {
    return this.getNumberAttribute('blade_gtp_smp_session_count_check_faile');
  }
  public set bladeGtpSmpSessionCountCheckFaile(value: number) {
    this._bladeGtpSmpSessionCountCheckFaile = value;
  }
  public resetBladeGtpSmpSessionCountCheckFaile() {
    this._bladeGtpSmpSessionCountCheckFaile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bladeGtpSmpSessionCountCheckFaileInput() {
    return this._bladeGtpSmpSessionCountCheckFaile;
  }

  // blade_gtp_smp_sig_check_failed - computed: false, optional: true, required: false
  private _bladeGtpSmpSigCheckFailed?: number; 
  public get bladeGtpSmpSigCheckFailed() {
    return this.getNumberAttribute('blade_gtp_smp_sig_check_failed');
  }
  public set bladeGtpSmpSigCheckFailed(value: number) {
    this._bladeGtpSmpSigCheckFailed = value;
  }
  public resetBladeGtpSmpSigCheckFailed() {
    this._bladeGtpSmpSigCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bladeGtpSmpSigCheckFailedInput() {
    return this._bladeGtpSmpSigCheckFailed;
  }

  // blade_gtp_u_smp_check_failed - computed: false, optional: true, required: false
  private _bladeGtpUSmpCheckFailed?: number; 
  public get bladeGtpUSmpCheckFailed() {
    return this.getNumberAttribute('blade_gtp_u_smp_check_failed');
  }
  public set bladeGtpUSmpCheckFailed(value: number) {
    this._bladeGtpUSmpCheckFailed = value;
  }
  public resetBladeGtpUSmpCheckFailed() {
    this._bladeGtpUSmpCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bladeGtpUSmpCheckFailedInput() {
    return this._bladeGtpUSmpCheckFailed;
  }

  // blade_gtp_u_smp_sig_check_failed - computed: false, optional: true, required: false
  private _bladeGtpUSmpSigCheckFailed?: number; 
  public get bladeGtpUSmpSigCheckFailed() {
    return this.getNumberAttribute('blade_gtp_u_smp_sig_check_failed');
  }
  public set bladeGtpUSmpSigCheckFailed(value: number) {
    this._bladeGtpUSmpSigCheckFailed = value;
  }
  public resetBladeGtpUSmpSigCheckFailed() {
    this._bladeGtpUSmpSigCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bladeGtpUSmpSigCheckFailedInput() {
    return this._bladeGtpUSmpSigCheckFailed;
  }

  // blade_out_of_session_memory - computed: false, optional: true, required: false
  private _bladeOutOfSessionMemory?: number; 
  public get bladeOutOfSessionMemory() {
    return this.getNumberAttribute('blade_out_of_session_memory');
  }
  public set bladeOutOfSessionMemory(value: number) {
    this._bladeOutOfSessionMemory = value;
  }
  public resetBladeOutOfSessionMemory() {
    this._bladeOutOfSessionMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bladeOutOfSessionMemoryInput() {
    return this._bladeOutOfSessionMemory;
  }

  // gtp_c_fail_conn_create_slow - computed: false, optional: true, required: false
  private _gtpCFailConnCreateSlow?: number; 
  public get gtpCFailConnCreateSlow() {
    return this.getNumberAttribute('gtp_c_fail_conn_create_slow');
  }
  public set gtpCFailConnCreateSlow(value: number) {
    this._gtpCFailConnCreateSlow = value;
  }
  public resetGtpCFailConnCreateSlow() {
    this._gtpCFailConnCreateSlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpCFailConnCreateSlowInput() {
    return this._gtpCFailConnCreateSlow;
  }

  // gtp_c_smp_sig_check_failed - computed: false, optional: true, required: false
  private _gtpCSmpSigCheckFailed?: number; 
  public get gtpCSmpSigCheckFailed() {
    return this.getNumberAttribute('gtp_c_smp_sig_check_failed');
  }
  public set gtpCSmpSigCheckFailed(value: number) {
    this._gtpCSmpSigCheckFailed = value;
  }
  public resetGtpCSmpSigCheckFailed() {
    this._gtpCSmpSigCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpCSmpSigCheckFailedInput() {
    return this._gtpCSmpSigCheckFailed;
  }

  // gtp_info_ext_not_found - computed: false, optional: true, required: false
  private _gtpInfoExtNotFound?: number; 
  public get gtpInfoExtNotFound() {
    return this.getNumberAttribute('gtp_info_ext_not_found');
  }
  public set gtpInfoExtNotFound(value: number) {
    this._gtpInfoExtNotFound = value;
  }
  public resetGtpInfoExtNotFound() {
    this._gtpInfoExtNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpInfoExtNotFoundInput() {
    return this._gtpInfoExtNotFound;
  }

  // gtp_pathm_fail_conn_create_slow - computed: false, optional: true, required: false
  private _gtpPathmFailConnCreateSlow?: number; 
  public get gtpPathmFailConnCreateSlow() {
    return this.getNumberAttribute('gtp_pathm_fail_conn_create_slow');
  }
  public set gtpPathmFailConnCreateSlow(value: number) {
    this._gtpPathmFailConnCreateSlow = value;
  }
  public resetGtpPathmFailConnCreateSlow() {
    this._gtpPathmFailConnCreateSlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpPathmFailConnCreateSlowInput() {
    return this._gtpPathmFailConnCreateSlow;
  }

  // gtp_rate_limit_entry_create_failure - computed: false, optional: true, required: false
  private _gtpRateLimitEntryCreateFailure?: number; 
  public get gtpRateLimitEntryCreateFailure() {
    return this.getNumberAttribute('gtp_rate_limit_entry_create_failure');
  }
  public set gtpRateLimitEntryCreateFailure(value: number) {
    this._gtpRateLimitEntryCreateFailure = value;
  }
  public resetGtpRateLimitEntryCreateFailure() {
    this._gtpRateLimitEntryCreateFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpRateLimitEntryCreateFailureInput() {
    return this._gtpRateLimitEntryCreateFailure;
  }

  // gtp_rate_limit_smp_create_failure - computed: false, optional: true, required: false
  private _gtpRateLimitSmpCreateFailure?: number; 
  public get gtpRateLimitSmpCreateFailure() {
    return this.getNumberAttribute('gtp_rate_limit_smp_create_failure');
  }
  public set gtpRateLimitSmpCreateFailure(value: number) {
    this._gtpRateLimitSmpCreateFailure = value;
  }
  public resetGtpRateLimitSmpCreateFailure() {
    this._gtpRateLimitSmpCreateFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpRateLimitSmpCreateFailureInput() {
    return this._gtpRateLimitSmpCreateFailure;
  }

  // gtp_rate_limit_t3_ctr_create_failure - computed: false, optional: true, required: false
  private _gtpRateLimitT3CtrCreateFailure?: number; 
  public get gtpRateLimitT3CtrCreateFailure() {
    return this.getNumberAttribute('gtp_rate_limit_t3_ctr_create_failure');
  }
  public set gtpRateLimitT3CtrCreateFailure(value: number) {
    this._gtpRateLimitT3CtrCreateFailure = value;
  }
  public resetGtpRateLimitT3CtrCreateFailure() {
    this._gtpRateLimitT3CtrCreateFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpRateLimitT3CtrCreateFailureInput() {
    return this._gtpRateLimitT3CtrCreateFailure;
  }

  // gtp_smp_c_check_failed - computed: false, optional: true, required: false
  private _gtpSmpCCheckFailed?: number; 
  public get gtpSmpCCheckFailed() {
    return this.getNumberAttribute('gtp_smp_c_check_failed');
  }
  public set gtpSmpCCheckFailed(value: number) {
    this._gtpSmpCCheckFailed = value;
  }
  public resetGtpSmpCCheckFailed() {
    this._gtpSmpCCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpSmpCCheckFailedInput() {
    return this._gtpSmpCCheckFailed;
  }

  // gtp_smp_dec_sess_count_check_failed - computed: false, optional: true, required: false
  private _gtpSmpDecSessCountCheckFailed?: number; 
  public get gtpSmpDecSessCountCheckFailed() {
    return this.getNumberAttribute('gtp_smp_dec_sess_count_check_failed');
  }
  public set gtpSmpDecSessCountCheckFailed(value: number) {
    this._gtpSmpDecSessCountCheckFailed = value;
  }
  public resetGtpSmpDecSessCountCheckFailed() {
    this._gtpSmpDecSessCountCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpSmpDecSessCountCheckFailedInput() {
    return this._gtpSmpDecSessCountCheckFailed;
  }

  // gtp_smp_path_check_failed - computed: false, optional: true, required: false
  private _gtpSmpPathCheckFailed?: number; 
  public get gtpSmpPathCheckFailed() {
    return this.getNumberAttribute('gtp_smp_path_check_failed');
  }
  public set gtpSmpPathCheckFailed(value: number) {
    this._gtpSmpPathCheckFailed = value;
  }
  public resetGtpSmpPathCheckFailed() {
    this._gtpSmpPathCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpSmpPathCheckFailedInput() {
    return this._gtpSmpPathCheckFailed;
  }

  // gtp_smp_sig_check_failed - computed: false, optional: true, required: false
  private _gtpSmpSigCheckFailed?: number; 
  public get gtpSmpSigCheckFailed() {
    return this.getNumberAttribute('gtp_smp_sig_check_failed');
  }
  public set gtpSmpSigCheckFailed(value: number) {
    this._gtpSmpSigCheckFailed = value;
  }
  public resetGtpSmpSigCheckFailed() {
    this._gtpSmpSigCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpSmpSigCheckFailedInput() {
    return this._gtpSmpSigCheckFailed;
  }

  // gtp_tunnel_rate_limit_entry_create_fail - computed: false, optional: true, required: false
  private _gtpTunnelRateLimitEntryCreateFail?: number; 
  public get gtpTunnelRateLimitEntryCreateFail() {
    return this.getNumberAttribute('gtp_tunnel_rate_limit_entry_create_fail');
  }
  public set gtpTunnelRateLimitEntryCreateFail(value: number) {
    this._gtpTunnelRateLimitEntryCreateFail = value;
  }
  public resetGtpTunnelRateLimitEntryCreateFail() {
    this._gtpTunnelRateLimitEntryCreateFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpTunnelRateLimitEntryCreateFailInput() {
    return this._gtpTunnelRateLimitEntryCreateFail;
  }

  // gtp_u_fail_conn_create_slow - computed: false, optional: true, required: false
  private _gtpUFailConnCreateSlow?: number; 
  public get gtpUFailConnCreateSlow() {
    return this.getNumberAttribute('gtp_u_fail_conn_create_slow');
  }
  public set gtpUFailConnCreateSlow(value: number) {
    this._gtpUFailConnCreateSlow = value;
  }
  public resetGtpUFailConnCreateSlow() {
    this._gtpUFailConnCreateSlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUFailConnCreateSlowInput() {
    return this._gtpUFailConnCreateSlow;
  }

  // gtp_u_smp_check_failed - computed: false, optional: true, required: false
  private _gtpUSmpCheckFailed?: number; 
  public get gtpUSmpCheckFailed() {
    return this.getNumberAttribute('gtp_u_smp_check_failed');
  }
  public set gtpUSmpCheckFailed(value: number) {
    this._gtpUSmpCheckFailed = value;
  }
  public resetGtpUSmpCheckFailed() {
    this._gtpUSmpCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUSmpCheckFailedInput() {
    return this._gtpUSmpCheckFailed;
  }

  // gtp_u_smp_sig_check_failed - computed: false, optional: true, required: false
  private _gtpUSmpSigCheckFailed?: number; 
  public get gtpUSmpSigCheckFailed() {
    return this.getNumberAttribute('gtp_u_smp_sig_check_failed');
  }
  public set gtpUSmpSigCheckFailed(value: number) {
    this._gtpUSmpSigCheckFailed = value;
  }
  public resetGtpUSmpSigCheckFailed() {
    this._gtpUSmpSigCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUSmpSigCheckFailedInput() {
    return this._gtpUSmpSigCheckFailed;
  }

  // gtp_u_tunnel_rate_limit_entry_create_fa - computed: false, optional: true, required: false
  private _gtpUTunnelRateLimitEntryCreateFa?: number; 
  public get gtpUTunnelRateLimitEntryCreateFa() {
    return this.getNumberAttribute('gtp_u_tunnel_rate_limit_entry_create_fa');
  }
  public set gtpUTunnelRateLimitEntryCreateFa(value: number) {
    this._gtpUTunnelRateLimitEntryCreateFa = value;
  }
  public resetGtpUTunnelRateLimitEntryCreateFa() {
    this._gtpUTunnelRateLimitEntryCreateFa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUTunnelRateLimitEntryCreateFaInput() {
    return this._gtpUTunnelRateLimitEntryCreateFa;
  }

  // out_of_session_memory - computed: false, optional: true, required: false
  private _outOfSessionMemory?: number; 
  public get outOfSessionMemory() {
    return this.getNumberAttribute('out_of_session_memory');
  }
  public set outOfSessionMemory(value: number) {
    this._outOfSessionMemory = value;
  }
  public resetOutOfSessionMemory() {
    this._outOfSessionMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfSessionMemoryInput() {
    return this._outOfSessionMemory;
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
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateA {
  /**
  * Enable automatic packet-capture for GTP-C SMP signature check Failed on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#blade_gtp_c_smp_sig_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#blade_gtp_c_smp_sig_check_failed}
  */
  readonly bladeGtpCSmpSigCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP-Info ext not found while freeing C-smp on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#blade_gtp_info_ext_not_found VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#blade_gtp_info_ext_not_found}
  */
  readonly bladeGtpInfoExtNotFound?: number;
  /**
  * Enable automatic packet-capture for GTP Rate Limit Entry Create Failure on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#blade_gtp_rate_limit_entry_create_failu VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#blade_gtp_rate_limit_entry_create_failu}
  */
  readonly bladeGtpRateLimitEntryCreateFailu?: number;
  /**
  * Enable automatic packet-capture for GTP Rate Limit SMP Create Failure on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#blade_gtp_rate_limit_smp_create_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#blade_gtp_rate_limit_smp_create_failure}
  */
  readonly bladeGtpRateLimitSmpCreateFailure?: number;
  /**
  * Enable automatic packet-capture for GTP Rate Limit Dynamic Counters Create Failure on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#blade_gtp_rate_limit_t3_ctr_create_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#blade_gtp_rate_limit_t3_ctr_create_fail}
  */
  readonly bladeGtpRateLimitT3CtrCreateFail?: number;
  /**
  * Enable automatic packet-capture for GTP-C SMP check Failed on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#blade_gtp_smp_c_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#blade_gtp_smp_c_check_failed}
  */
  readonly bladeGtpSmpCCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP-U session count is 0 in GTP-C SMP on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#blade_gtp_smp_dec_sess_count_check_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#blade_gtp_smp_dec_sess_count_check_fail}
  */
  readonly bladeGtpSmpDecSessCountCheckFail?: number;
  /**
  * Enable automatic packet-capture for GTP SMP PATH check Failed on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#blade_gtp_smp_path_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#blade_gtp_smp_path_check_failed}
  */
  readonly bladeGtpSmpPathCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP-U session count is not in range of 0-11 in GTP-C SMP on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#blade_gtp_smp_session_count_check_faile VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#blade_gtp_smp_session_count_check_faile}
  */
  readonly bladeGtpSmpSessionCountCheckFaile?: number;
  /**
  * Enable automatic packet-capture for GTP SMP signature check Failed on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#blade_gtp_smp_sig_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#blade_gtp_smp_sig_check_failed}
  */
  readonly bladeGtpSmpSigCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP U-SMP check Failed on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#blade_gtp_u_smp_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#blade_gtp_u_smp_check_failed}
  */
  readonly bladeGtpUSmpCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP-U SMP signature check Failed on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#blade_gtp_u_smp_sig_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#blade_gtp_u_smp_sig_check_failed}
  */
  readonly bladeGtpUSmpSigCheckFailed?: number;
  /**
  * Enable automatic packet-capture for Out of Tunnel Memory on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#blade_out_of_session_memory VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#blade_out_of_session_memory}
  */
  readonly bladeOutOfSessionMemory?: number;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for GTP-C packet failed creating L4-session in slowpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_c_fail_conn_create_slow VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_c_fail_conn_create_slow}
  */
  readonly gtpCFailConnCreateSlow?: number;
  /**
  * Enable automatic packet-capture for GTP-C SMP signature check Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_c_smp_sig_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_c_smp_sig_check_failed}
  */
  readonly gtpCSmpSigCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP-Info ext not found while freeing C-smp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_info_ext_not_found VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_info_ext_not_found}
  */
  readonly gtpInfoExtNotFound?: number;
  /**
  * Enable automatic packet-capture for GTP path packet failed while creating L4-session in slowpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_pathm_fail_conn_create_slow VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_pathm_fail_conn_create_slow}
  */
  readonly gtpPathmFailConnCreateSlow?: number;
  /**
  * Enable automatic packet-capture for GTP Rate Limit Entry Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_rate_limit_entry_create_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_rate_limit_entry_create_failure}
  */
  readonly gtpRateLimitEntryCreateFailure?: number;
  /**
  * Enable automatic packet-capture for GTP Rate Limit SMP Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_rate_limit_smp_create_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_rate_limit_smp_create_failure}
  */
  readonly gtpRateLimitSmpCreateFailure?: number;
  /**
  * Enable automatic packet-capture for GTP Rate Limit Dynamic Counters Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_rate_limit_t3_ctr_create_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_rate_limit_t3_ctr_create_failure}
  */
  readonly gtpRateLimitT3CtrCreateFailure?: number;
  /**
  * Enable automatic packet-capture for GTP-C SMP check Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_smp_c_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_smp_c_check_failed}
  */
  readonly gtpSmpCCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP-U session count is 0 in GTP-C SMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_smp_dec_sess_count_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_smp_dec_sess_count_check_failed}
  */
  readonly gtpSmpDecSessCountCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP SMP PATH check Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_smp_path_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_smp_path_check_failed}
  */
  readonly gtpSmpPathCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP SMP signature check Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_smp_sig_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_smp_sig_check_failed}
  */
  readonly gtpSmpSigCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP Tunnel Level Rate Limit Entry Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_tunnel_rate_limit_entry_create_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_tunnel_rate_limit_entry_create_fail}
  */
  readonly gtpTunnelRateLimitEntryCreateFail?: number;
  /**
  * Enable automatic packet-capture for GTP-U packet failed while creating L4-session in slowpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_u_fail_conn_create_slow VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_u_fail_conn_create_slow}
  */
  readonly gtpUFailConnCreateSlow?: number;
  /**
  * Enable automatic packet-capture for GTP U-SMP check Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_u_smp_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_u_smp_check_failed}
  */
  readonly gtpUSmpCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP SMP signature check Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_u_smp_sig_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_u_smp_sig_check_failed}
  */
  readonly gtpUSmpSigCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP-U Tunnel Level Rate Limit Entry Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_u_tunnel_rate_limit_entry_create_fa VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_u_tunnel_rate_limit_entry_create_fa}
  */
  readonly gtpUTunnelRateLimitEntryCreateFa?: number;
  /**
  * Enable automatic packet-capture for Out of Tunnel Memory for GTP-C
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#out_of_session_memory VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#out_of_session_memory}
  */
  readonly outOfSessionMemory?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blade_gtp_c_smp_sig_check_failed: cdktf.numberToTerraform(struct!.bladeGtpCSmpSigCheckFailed),
    blade_gtp_info_ext_not_found: cdktf.numberToTerraform(struct!.bladeGtpInfoExtNotFound),
    blade_gtp_rate_limit_entry_create_failu: cdktf.numberToTerraform(struct!.bladeGtpRateLimitEntryCreateFailu),
    blade_gtp_rate_limit_smp_create_failure: cdktf.numberToTerraform(struct!.bladeGtpRateLimitSmpCreateFailure),
    blade_gtp_rate_limit_t3_ctr_create_fail: cdktf.numberToTerraform(struct!.bladeGtpRateLimitT3CtrCreateFail),
    blade_gtp_smp_c_check_failed: cdktf.numberToTerraform(struct!.bladeGtpSmpCCheckFailed),
    blade_gtp_smp_dec_sess_count_check_fail: cdktf.numberToTerraform(struct!.bladeGtpSmpDecSessCountCheckFail),
    blade_gtp_smp_path_check_failed: cdktf.numberToTerraform(struct!.bladeGtpSmpPathCheckFailed),
    blade_gtp_smp_session_count_check_faile: cdktf.numberToTerraform(struct!.bladeGtpSmpSessionCountCheckFaile),
    blade_gtp_smp_sig_check_failed: cdktf.numberToTerraform(struct!.bladeGtpSmpSigCheckFailed),
    blade_gtp_u_smp_check_failed: cdktf.numberToTerraform(struct!.bladeGtpUSmpCheckFailed),
    blade_gtp_u_smp_sig_check_failed: cdktf.numberToTerraform(struct!.bladeGtpUSmpSigCheckFailed),
    blade_out_of_session_memory: cdktf.numberToTerraform(struct!.bladeOutOfSessionMemory),
    duration: cdktf.numberToTerraform(struct!.duration),
    gtp_c_fail_conn_create_slow: cdktf.numberToTerraform(struct!.gtpCFailConnCreateSlow),
    gtp_c_smp_sig_check_failed: cdktf.numberToTerraform(struct!.gtpCSmpSigCheckFailed),
    gtp_info_ext_not_found: cdktf.numberToTerraform(struct!.gtpInfoExtNotFound),
    gtp_pathm_fail_conn_create_slow: cdktf.numberToTerraform(struct!.gtpPathmFailConnCreateSlow),
    gtp_rate_limit_entry_create_failure: cdktf.numberToTerraform(struct!.gtpRateLimitEntryCreateFailure),
    gtp_rate_limit_smp_create_failure: cdktf.numberToTerraform(struct!.gtpRateLimitSmpCreateFailure),
    gtp_rate_limit_t3_ctr_create_failure: cdktf.numberToTerraform(struct!.gtpRateLimitT3CtrCreateFailure),
    gtp_smp_c_check_failed: cdktf.numberToTerraform(struct!.gtpSmpCCheckFailed),
    gtp_smp_dec_sess_count_check_failed: cdktf.numberToTerraform(struct!.gtpSmpDecSessCountCheckFailed),
    gtp_smp_path_check_failed: cdktf.numberToTerraform(struct!.gtpSmpPathCheckFailed),
    gtp_smp_sig_check_failed: cdktf.numberToTerraform(struct!.gtpSmpSigCheckFailed),
    gtp_tunnel_rate_limit_entry_create_fail: cdktf.numberToTerraform(struct!.gtpTunnelRateLimitEntryCreateFail),
    gtp_u_fail_conn_create_slow: cdktf.numberToTerraform(struct!.gtpUFailConnCreateSlow),
    gtp_u_smp_check_failed: cdktf.numberToTerraform(struct!.gtpUSmpCheckFailed),
    gtp_u_smp_sig_check_failed: cdktf.numberToTerraform(struct!.gtpUSmpSigCheckFailed),
    gtp_u_tunnel_rate_limit_entry_create_fa: cdktf.numberToTerraform(struct!.gtpUTunnelRateLimitEntryCreateFa),
    out_of_session_memory: cdktf.numberToTerraform(struct!.outOfSessionMemory),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blade_gtp_c_smp_sig_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.bladeGtpCSmpSigCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blade_gtp_info_ext_not_found: {
      value: cdktf.numberToHclTerraform(struct!.bladeGtpInfoExtNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blade_gtp_rate_limit_entry_create_failu: {
      value: cdktf.numberToHclTerraform(struct!.bladeGtpRateLimitEntryCreateFailu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blade_gtp_rate_limit_smp_create_failure: {
      value: cdktf.numberToHclTerraform(struct!.bladeGtpRateLimitSmpCreateFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blade_gtp_rate_limit_t3_ctr_create_fail: {
      value: cdktf.numberToHclTerraform(struct!.bladeGtpRateLimitT3CtrCreateFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blade_gtp_smp_c_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.bladeGtpSmpCCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blade_gtp_smp_dec_sess_count_check_fail: {
      value: cdktf.numberToHclTerraform(struct!.bladeGtpSmpDecSessCountCheckFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blade_gtp_smp_path_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.bladeGtpSmpPathCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blade_gtp_smp_session_count_check_faile: {
      value: cdktf.numberToHclTerraform(struct!.bladeGtpSmpSessionCountCheckFaile),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blade_gtp_smp_sig_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.bladeGtpSmpSigCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blade_gtp_u_smp_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.bladeGtpUSmpCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blade_gtp_u_smp_sig_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.bladeGtpUSmpSigCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    blade_out_of_session_memory: {
      value: cdktf.numberToHclTerraform(struct!.bladeOutOfSessionMemory),
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
    gtp_c_fail_conn_create_slow: {
      value: cdktf.numberToHclTerraform(struct!.gtpCFailConnCreateSlow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_c_smp_sig_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.gtpCSmpSigCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_info_ext_not_found: {
      value: cdktf.numberToHclTerraform(struct!.gtpInfoExtNotFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_pathm_fail_conn_create_slow: {
      value: cdktf.numberToHclTerraform(struct!.gtpPathmFailConnCreateSlow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_rate_limit_entry_create_failure: {
      value: cdktf.numberToHclTerraform(struct!.gtpRateLimitEntryCreateFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_rate_limit_smp_create_failure: {
      value: cdktf.numberToHclTerraform(struct!.gtpRateLimitSmpCreateFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_rate_limit_t3_ctr_create_failure: {
      value: cdktf.numberToHclTerraform(struct!.gtpRateLimitT3CtrCreateFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_smp_c_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.gtpSmpCCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_smp_dec_sess_count_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.gtpSmpDecSessCountCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_smp_path_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.gtpSmpPathCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_smp_sig_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.gtpSmpSigCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_tunnel_rate_limit_entry_create_fail: {
      value: cdktf.numberToHclTerraform(struct!.gtpTunnelRateLimitEntryCreateFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_u_fail_conn_create_slow: {
      value: cdktf.numberToHclTerraform(struct!.gtpUFailConnCreateSlow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_u_smp_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.gtpUSmpCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_u_smp_sig_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.gtpUSmpSigCheckFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_u_tunnel_rate_limit_entry_create_fa: {
      value: cdktf.numberToHclTerraform(struct!.gtpUTunnelRateLimitEntryCreateFa),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    out_of_session_memory: {
      value: cdktf.numberToHclTerraform(struct!.outOfSessionMemory),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bladeGtpCSmpSigCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.bladeGtpCSmpSigCheckFailed = this._bladeGtpCSmpSigCheckFailed;
    }
    if (this._bladeGtpInfoExtNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.bladeGtpInfoExtNotFound = this._bladeGtpInfoExtNotFound;
    }
    if (this._bladeGtpRateLimitEntryCreateFailu !== undefined) {
      hasAnyValues = true;
      internalValueResult.bladeGtpRateLimitEntryCreateFailu = this._bladeGtpRateLimitEntryCreateFailu;
    }
    if (this._bladeGtpRateLimitSmpCreateFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.bladeGtpRateLimitSmpCreateFailure = this._bladeGtpRateLimitSmpCreateFailure;
    }
    if (this._bladeGtpRateLimitT3CtrCreateFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.bladeGtpRateLimitT3CtrCreateFail = this._bladeGtpRateLimitT3CtrCreateFail;
    }
    if (this._bladeGtpSmpCCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.bladeGtpSmpCCheckFailed = this._bladeGtpSmpCCheckFailed;
    }
    if (this._bladeGtpSmpDecSessCountCheckFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.bladeGtpSmpDecSessCountCheckFail = this._bladeGtpSmpDecSessCountCheckFail;
    }
    if (this._bladeGtpSmpPathCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.bladeGtpSmpPathCheckFailed = this._bladeGtpSmpPathCheckFailed;
    }
    if (this._bladeGtpSmpSessionCountCheckFaile !== undefined) {
      hasAnyValues = true;
      internalValueResult.bladeGtpSmpSessionCountCheckFaile = this._bladeGtpSmpSessionCountCheckFaile;
    }
    if (this._bladeGtpSmpSigCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.bladeGtpSmpSigCheckFailed = this._bladeGtpSmpSigCheckFailed;
    }
    if (this._bladeGtpUSmpCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.bladeGtpUSmpCheckFailed = this._bladeGtpUSmpCheckFailed;
    }
    if (this._bladeGtpUSmpSigCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.bladeGtpUSmpSigCheckFailed = this._bladeGtpUSmpSigCheckFailed;
    }
    if (this._bladeOutOfSessionMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.bladeOutOfSessionMemory = this._bladeOutOfSessionMemory;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._gtpCFailConnCreateSlow !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpCFailConnCreateSlow = this._gtpCFailConnCreateSlow;
    }
    if (this._gtpCSmpSigCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpCSmpSigCheckFailed = this._gtpCSmpSigCheckFailed;
    }
    if (this._gtpInfoExtNotFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpInfoExtNotFound = this._gtpInfoExtNotFound;
    }
    if (this._gtpPathmFailConnCreateSlow !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpPathmFailConnCreateSlow = this._gtpPathmFailConnCreateSlow;
    }
    if (this._gtpRateLimitEntryCreateFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpRateLimitEntryCreateFailure = this._gtpRateLimitEntryCreateFailure;
    }
    if (this._gtpRateLimitSmpCreateFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpRateLimitSmpCreateFailure = this._gtpRateLimitSmpCreateFailure;
    }
    if (this._gtpRateLimitT3CtrCreateFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpRateLimitT3CtrCreateFailure = this._gtpRateLimitT3CtrCreateFailure;
    }
    if (this._gtpSmpCCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpSmpCCheckFailed = this._gtpSmpCCheckFailed;
    }
    if (this._gtpSmpDecSessCountCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpSmpDecSessCountCheckFailed = this._gtpSmpDecSessCountCheckFailed;
    }
    if (this._gtpSmpPathCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpSmpPathCheckFailed = this._gtpSmpPathCheckFailed;
    }
    if (this._gtpSmpSigCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpSmpSigCheckFailed = this._gtpSmpSigCheckFailed;
    }
    if (this._gtpTunnelRateLimitEntryCreateFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpTunnelRateLimitEntryCreateFail = this._gtpTunnelRateLimitEntryCreateFail;
    }
    if (this._gtpUFailConnCreateSlow !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpUFailConnCreateSlow = this._gtpUFailConnCreateSlow;
    }
    if (this._gtpUSmpCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpUSmpCheckFailed = this._gtpUSmpCheckFailed;
    }
    if (this._gtpUSmpSigCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpUSmpSigCheckFailed = this._gtpUSmpSigCheckFailed;
    }
    if (this._gtpUTunnelRateLimitEntryCreateFa !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpUTunnelRateLimitEntryCreateFa = this._gtpUTunnelRateLimitEntryCreateFa;
    }
    if (this._outOfSessionMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.outOfSessionMemory = this._outOfSessionMemory;
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

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bladeGtpCSmpSigCheckFailed = undefined;
      this._bladeGtpInfoExtNotFound = undefined;
      this._bladeGtpRateLimitEntryCreateFailu = undefined;
      this._bladeGtpRateLimitSmpCreateFailure = undefined;
      this._bladeGtpRateLimitT3CtrCreateFail = undefined;
      this._bladeGtpSmpCCheckFailed = undefined;
      this._bladeGtpSmpDecSessCountCheckFail = undefined;
      this._bladeGtpSmpPathCheckFailed = undefined;
      this._bladeGtpSmpSessionCountCheckFaile = undefined;
      this._bladeGtpSmpSigCheckFailed = undefined;
      this._bladeGtpUSmpCheckFailed = undefined;
      this._bladeGtpUSmpSigCheckFailed = undefined;
      this._bladeOutOfSessionMemory = undefined;
      this._duration = undefined;
      this._gtpCFailConnCreateSlow = undefined;
      this._gtpCSmpSigCheckFailed = undefined;
      this._gtpInfoExtNotFound = undefined;
      this._gtpPathmFailConnCreateSlow = undefined;
      this._gtpRateLimitEntryCreateFailure = undefined;
      this._gtpRateLimitSmpCreateFailure = undefined;
      this._gtpRateLimitT3CtrCreateFailure = undefined;
      this._gtpSmpCCheckFailed = undefined;
      this._gtpSmpDecSessCountCheckFailed = undefined;
      this._gtpSmpPathCheckFailed = undefined;
      this._gtpSmpSigCheckFailed = undefined;
      this._gtpTunnelRateLimitEntryCreateFail = undefined;
      this._gtpUFailConnCreateSlow = undefined;
      this._gtpUSmpCheckFailed = undefined;
      this._gtpUSmpSigCheckFailed = undefined;
      this._gtpUTunnelRateLimitEntryCreateFa = undefined;
      this._outOfSessionMemory = undefined;
      this._thresholdExceededBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bladeGtpCSmpSigCheckFailed = value.bladeGtpCSmpSigCheckFailed;
      this._bladeGtpInfoExtNotFound = value.bladeGtpInfoExtNotFound;
      this._bladeGtpRateLimitEntryCreateFailu = value.bladeGtpRateLimitEntryCreateFailu;
      this._bladeGtpRateLimitSmpCreateFailure = value.bladeGtpRateLimitSmpCreateFailure;
      this._bladeGtpRateLimitT3CtrCreateFail = value.bladeGtpRateLimitT3CtrCreateFail;
      this._bladeGtpSmpCCheckFailed = value.bladeGtpSmpCCheckFailed;
      this._bladeGtpSmpDecSessCountCheckFail = value.bladeGtpSmpDecSessCountCheckFail;
      this._bladeGtpSmpPathCheckFailed = value.bladeGtpSmpPathCheckFailed;
      this._bladeGtpSmpSessionCountCheckFaile = value.bladeGtpSmpSessionCountCheckFaile;
      this._bladeGtpSmpSigCheckFailed = value.bladeGtpSmpSigCheckFailed;
      this._bladeGtpUSmpCheckFailed = value.bladeGtpUSmpCheckFailed;
      this._bladeGtpUSmpSigCheckFailed = value.bladeGtpUSmpSigCheckFailed;
      this._bladeOutOfSessionMemory = value.bladeOutOfSessionMemory;
      this._duration = value.duration;
      this._gtpCFailConnCreateSlow = value.gtpCFailConnCreateSlow;
      this._gtpCSmpSigCheckFailed = value.gtpCSmpSigCheckFailed;
      this._gtpInfoExtNotFound = value.gtpInfoExtNotFound;
      this._gtpPathmFailConnCreateSlow = value.gtpPathmFailConnCreateSlow;
      this._gtpRateLimitEntryCreateFailure = value.gtpRateLimitEntryCreateFailure;
      this._gtpRateLimitSmpCreateFailure = value.gtpRateLimitSmpCreateFailure;
      this._gtpRateLimitT3CtrCreateFailure = value.gtpRateLimitT3CtrCreateFailure;
      this._gtpSmpCCheckFailed = value.gtpSmpCCheckFailed;
      this._gtpSmpDecSessCountCheckFailed = value.gtpSmpDecSessCountCheckFailed;
      this._gtpSmpPathCheckFailed = value.gtpSmpPathCheckFailed;
      this._gtpSmpSigCheckFailed = value.gtpSmpSigCheckFailed;
      this._gtpTunnelRateLimitEntryCreateFail = value.gtpTunnelRateLimitEntryCreateFail;
      this._gtpUFailConnCreateSlow = value.gtpUFailConnCreateSlow;
      this._gtpUSmpCheckFailed = value.gtpUSmpCheckFailed;
      this._gtpUSmpSigCheckFailed = value.gtpUSmpSigCheckFailed;
      this._gtpUTunnelRateLimitEntryCreateFa = value.gtpUTunnelRateLimitEntryCreateFa;
      this._outOfSessionMemory = value.outOfSessionMemory;
      this._thresholdExceededBy = value.thresholdExceededBy;
      this._uuid = value.uuid;
    }
  }

  // blade_gtp_c_smp_sig_check_failed - computed: false, optional: true, required: false
  private _bladeGtpCSmpSigCheckFailed?: number; 
  public get bladeGtpCSmpSigCheckFailed() {
    return this.getNumberAttribute('blade_gtp_c_smp_sig_check_failed');
  }
  public set bladeGtpCSmpSigCheckFailed(value: number) {
    this._bladeGtpCSmpSigCheckFailed = value;
  }
  public resetBladeGtpCSmpSigCheckFailed() {
    this._bladeGtpCSmpSigCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bladeGtpCSmpSigCheckFailedInput() {
    return this._bladeGtpCSmpSigCheckFailed;
  }

  // blade_gtp_info_ext_not_found - computed: false, optional: true, required: false
  private _bladeGtpInfoExtNotFound?: number; 
  public get bladeGtpInfoExtNotFound() {
    return this.getNumberAttribute('blade_gtp_info_ext_not_found');
  }
  public set bladeGtpInfoExtNotFound(value: number) {
    this._bladeGtpInfoExtNotFound = value;
  }
  public resetBladeGtpInfoExtNotFound() {
    this._bladeGtpInfoExtNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bladeGtpInfoExtNotFoundInput() {
    return this._bladeGtpInfoExtNotFound;
  }

  // blade_gtp_rate_limit_entry_create_failu - computed: false, optional: true, required: false
  private _bladeGtpRateLimitEntryCreateFailu?: number; 
  public get bladeGtpRateLimitEntryCreateFailu() {
    return this.getNumberAttribute('blade_gtp_rate_limit_entry_create_failu');
  }
  public set bladeGtpRateLimitEntryCreateFailu(value: number) {
    this._bladeGtpRateLimitEntryCreateFailu = value;
  }
  public resetBladeGtpRateLimitEntryCreateFailu() {
    this._bladeGtpRateLimitEntryCreateFailu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bladeGtpRateLimitEntryCreateFailuInput() {
    return this._bladeGtpRateLimitEntryCreateFailu;
  }

  // blade_gtp_rate_limit_smp_create_failure - computed: false, optional: true, required: false
  private _bladeGtpRateLimitSmpCreateFailure?: number; 
  public get bladeGtpRateLimitSmpCreateFailure() {
    return this.getNumberAttribute('blade_gtp_rate_limit_smp_create_failure');
  }
  public set bladeGtpRateLimitSmpCreateFailure(value: number) {
    this._bladeGtpRateLimitSmpCreateFailure = value;
  }
  public resetBladeGtpRateLimitSmpCreateFailure() {
    this._bladeGtpRateLimitSmpCreateFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bladeGtpRateLimitSmpCreateFailureInput() {
    return this._bladeGtpRateLimitSmpCreateFailure;
  }

  // blade_gtp_rate_limit_t3_ctr_create_fail - computed: false, optional: true, required: false
  private _bladeGtpRateLimitT3CtrCreateFail?: number; 
  public get bladeGtpRateLimitT3CtrCreateFail() {
    return this.getNumberAttribute('blade_gtp_rate_limit_t3_ctr_create_fail');
  }
  public set bladeGtpRateLimitT3CtrCreateFail(value: number) {
    this._bladeGtpRateLimitT3CtrCreateFail = value;
  }
  public resetBladeGtpRateLimitT3CtrCreateFail() {
    this._bladeGtpRateLimitT3CtrCreateFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bladeGtpRateLimitT3CtrCreateFailInput() {
    return this._bladeGtpRateLimitT3CtrCreateFail;
  }

  // blade_gtp_smp_c_check_failed - computed: false, optional: true, required: false
  private _bladeGtpSmpCCheckFailed?: number; 
  public get bladeGtpSmpCCheckFailed() {
    return this.getNumberAttribute('blade_gtp_smp_c_check_failed');
  }
  public set bladeGtpSmpCCheckFailed(value: number) {
    this._bladeGtpSmpCCheckFailed = value;
  }
  public resetBladeGtpSmpCCheckFailed() {
    this._bladeGtpSmpCCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bladeGtpSmpCCheckFailedInput() {
    return this._bladeGtpSmpCCheckFailed;
  }

  // blade_gtp_smp_dec_sess_count_check_fail - computed: false, optional: true, required: false
  private _bladeGtpSmpDecSessCountCheckFail?: number; 
  public get bladeGtpSmpDecSessCountCheckFail() {
    return this.getNumberAttribute('blade_gtp_smp_dec_sess_count_check_fail');
  }
  public set bladeGtpSmpDecSessCountCheckFail(value: number) {
    this._bladeGtpSmpDecSessCountCheckFail = value;
  }
  public resetBladeGtpSmpDecSessCountCheckFail() {
    this._bladeGtpSmpDecSessCountCheckFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bladeGtpSmpDecSessCountCheckFailInput() {
    return this._bladeGtpSmpDecSessCountCheckFail;
  }

  // blade_gtp_smp_path_check_failed - computed: false, optional: true, required: false
  private _bladeGtpSmpPathCheckFailed?: number; 
  public get bladeGtpSmpPathCheckFailed() {
    return this.getNumberAttribute('blade_gtp_smp_path_check_failed');
  }
  public set bladeGtpSmpPathCheckFailed(value: number) {
    this._bladeGtpSmpPathCheckFailed = value;
  }
  public resetBladeGtpSmpPathCheckFailed() {
    this._bladeGtpSmpPathCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bladeGtpSmpPathCheckFailedInput() {
    return this._bladeGtpSmpPathCheckFailed;
  }

  // blade_gtp_smp_session_count_check_faile - computed: false, optional: true, required: false
  private _bladeGtpSmpSessionCountCheckFaile?: number; 
  public get bladeGtpSmpSessionCountCheckFaile() {
    return this.getNumberAttribute('blade_gtp_smp_session_count_check_faile');
  }
  public set bladeGtpSmpSessionCountCheckFaile(value: number) {
    this._bladeGtpSmpSessionCountCheckFaile = value;
  }
  public resetBladeGtpSmpSessionCountCheckFaile() {
    this._bladeGtpSmpSessionCountCheckFaile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bladeGtpSmpSessionCountCheckFaileInput() {
    return this._bladeGtpSmpSessionCountCheckFaile;
  }

  // blade_gtp_smp_sig_check_failed - computed: false, optional: true, required: false
  private _bladeGtpSmpSigCheckFailed?: number; 
  public get bladeGtpSmpSigCheckFailed() {
    return this.getNumberAttribute('blade_gtp_smp_sig_check_failed');
  }
  public set bladeGtpSmpSigCheckFailed(value: number) {
    this._bladeGtpSmpSigCheckFailed = value;
  }
  public resetBladeGtpSmpSigCheckFailed() {
    this._bladeGtpSmpSigCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bladeGtpSmpSigCheckFailedInput() {
    return this._bladeGtpSmpSigCheckFailed;
  }

  // blade_gtp_u_smp_check_failed - computed: false, optional: true, required: false
  private _bladeGtpUSmpCheckFailed?: number; 
  public get bladeGtpUSmpCheckFailed() {
    return this.getNumberAttribute('blade_gtp_u_smp_check_failed');
  }
  public set bladeGtpUSmpCheckFailed(value: number) {
    this._bladeGtpUSmpCheckFailed = value;
  }
  public resetBladeGtpUSmpCheckFailed() {
    this._bladeGtpUSmpCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bladeGtpUSmpCheckFailedInput() {
    return this._bladeGtpUSmpCheckFailed;
  }

  // blade_gtp_u_smp_sig_check_failed - computed: false, optional: true, required: false
  private _bladeGtpUSmpSigCheckFailed?: number; 
  public get bladeGtpUSmpSigCheckFailed() {
    return this.getNumberAttribute('blade_gtp_u_smp_sig_check_failed');
  }
  public set bladeGtpUSmpSigCheckFailed(value: number) {
    this._bladeGtpUSmpSigCheckFailed = value;
  }
  public resetBladeGtpUSmpSigCheckFailed() {
    this._bladeGtpUSmpSigCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bladeGtpUSmpSigCheckFailedInput() {
    return this._bladeGtpUSmpSigCheckFailed;
  }

  // blade_out_of_session_memory - computed: false, optional: true, required: false
  private _bladeOutOfSessionMemory?: number; 
  public get bladeOutOfSessionMemory() {
    return this.getNumberAttribute('blade_out_of_session_memory');
  }
  public set bladeOutOfSessionMemory(value: number) {
    this._bladeOutOfSessionMemory = value;
  }
  public resetBladeOutOfSessionMemory() {
    this._bladeOutOfSessionMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bladeOutOfSessionMemoryInput() {
    return this._bladeOutOfSessionMemory;
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

  // gtp_c_fail_conn_create_slow - computed: false, optional: true, required: false
  private _gtpCFailConnCreateSlow?: number; 
  public get gtpCFailConnCreateSlow() {
    return this.getNumberAttribute('gtp_c_fail_conn_create_slow');
  }
  public set gtpCFailConnCreateSlow(value: number) {
    this._gtpCFailConnCreateSlow = value;
  }
  public resetGtpCFailConnCreateSlow() {
    this._gtpCFailConnCreateSlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpCFailConnCreateSlowInput() {
    return this._gtpCFailConnCreateSlow;
  }

  // gtp_c_smp_sig_check_failed - computed: false, optional: true, required: false
  private _gtpCSmpSigCheckFailed?: number; 
  public get gtpCSmpSigCheckFailed() {
    return this.getNumberAttribute('gtp_c_smp_sig_check_failed');
  }
  public set gtpCSmpSigCheckFailed(value: number) {
    this._gtpCSmpSigCheckFailed = value;
  }
  public resetGtpCSmpSigCheckFailed() {
    this._gtpCSmpSigCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpCSmpSigCheckFailedInput() {
    return this._gtpCSmpSigCheckFailed;
  }

  // gtp_info_ext_not_found - computed: false, optional: true, required: false
  private _gtpInfoExtNotFound?: number; 
  public get gtpInfoExtNotFound() {
    return this.getNumberAttribute('gtp_info_ext_not_found');
  }
  public set gtpInfoExtNotFound(value: number) {
    this._gtpInfoExtNotFound = value;
  }
  public resetGtpInfoExtNotFound() {
    this._gtpInfoExtNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpInfoExtNotFoundInput() {
    return this._gtpInfoExtNotFound;
  }

  // gtp_pathm_fail_conn_create_slow - computed: false, optional: true, required: false
  private _gtpPathmFailConnCreateSlow?: number; 
  public get gtpPathmFailConnCreateSlow() {
    return this.getNumberAttribute('gtp_pathm_fail_conn_create_slow');
  }
  public set gtpPathmFailConnCreateSlow(value: number) {
    this._gtpPathmFailConnCreateSlow = value;
  }
  public resetGtpPathmFailConnCreateSlow() {
    this._gtpPathmFailConnCreateSlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpPathmFailConnCreateSlowInput() {
    return this._gtpPathmFailConnCreateSlow;
  }

  // gtp_rate_limit_entry_create_failure - computed: false, optional: true, required: false
  private _gtpRateLimitEntryCreateFailure?: number; 
  public get gtpRateLimitEntryCreateFailure() {
    return this.getNumberAttribute('gtp_rate_limit_entry_create_failure');
  }
  public set gtpRateLimitEntryCreateFailure(value: number) {
    this._gtpRateLimitEntryCreateFailure = value;
  }
  public resetGtpRateLimitEntryCreateFailure() {
    this._gtpRateLimitEntryCreateFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpRateLimitEntryCreateFailureInput() {
    return this._gtpRateLimitEntryCreateFailure;
  }

  // gtp_rate_limit_smp_create_failure - computed: false, optional: true, required: false
  private _gtpRateLimitSmpCreateFailure?: number; 
  public get gtpRateLimitSmpCreateFailure() {
    return this.getNumberAttribute('gtp_rate_limit_smp_create_failure');
  }
  public set gtpRateLimitSmpCreateFailure(value: number) {
    this._gtpRateLimitSmpCreateFailure = value;
  }
  public resetGtpRateLimitSmpCreateFailure() {
    this._gtpRateLimitSmpCreateFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpRateLimitSmpCreateFailureInput() {
    return this._gtpRateLimitSmpCreateFailure;
  }

  // gtp_rate_limit_t3_ctr_create_failure - computed: false, optional: true, required: false
  private _gtpRateLimitT3CtrCreateFailure?: number; 
  public get gtpRateLimitT3CtrCreateFailure() {
    return this.getNumberAttribute('gtp_rate_limit_t3_ctr_create_failure');
  }
  public set gtpRateLimitT3CtrCreateFailure(value: number) {
    this._gtpRateLimitT3CtrCreateFailure = value;
  }
  public resetGtpRateLimitT3CtrCreateFailure() {
    this._gtpRateLimitT3CtrCreateFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpRateLimitT3CtrCreateFailureInput() {
    return this._gtpRateLimitT3CtrCreateFailure;
  }

  // gtp_smp_c_check_failed - computed: false, optional: true, required: false
  private _gtpSmpCCheckFailed?: number; 
  public get gtpSmpCCheckFailed() {
    return this.getNumberAttribute('gtp_smp_c_check_failed');
  }
  public set gtpSmpCCheckFailed(value: number) {
    this._gtpSmpCCheckFailed = value;
  }
  public resetGtpSmpCCheckFailed() {
    this._gtpSmpCCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpSmpCCheckFailedInput() {
    return this._gtpSmpCCheckFailed;
  }

  // gtp_smp_dec_sess_count_check_failed - computed: false, optional: true, required: false
  private _gtpSmpDecSessCountCheckFailed?: number; 
  public get gtpSmpDecSessCountCheckFailed() {
    return this.getNumberAttribute('gtp_smp_dec_sess_count_check_failed');
  }
  public set gtpSmpDecSessCountCheckFailed(value: number) {
    this._gtpSmpDecSessCountCheckFailed = value;
  }
  public resetGtpSmpDecSessCountCheckFailed() {
    this._gtpSmpDecSessCountCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpSmpDecSessCountCheckFailedInput() {
    return this._gtpSmpDecSessCountCheckFailed;
  }

  // gtp_smp_path_check_failed - computed: false, optional: true, required: false
  private _gtpSmpPathCheckFailed?: number; 
  public get gtpSmpPathCheckFailed() {
    return this.getNumberAttribute('gtp_smp_path_check_failed');
  }
  public set gtpSmpPathCheckFailed(value: number) {
    this._gtpSmpPathCheckFailed = value;
  }
  public resetGtpSmpPathCheckFailed() {
    this._gtpSmpPathCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpSmpPathCheckFailedInput() {
    return this._gtpSmpPathCheckFailed;
  }

  // gtp_smp_sig_check_failed - computed: false, optional: true, required: false
  private _gtpSmpSigCheckFailed?: number; 
  public get gtpSmpSigCheckFailed() {
    return this.getNumberAttribute('gtp_smp_sig_check_failed');
  }
  public set gtpSmpSigCheckFailed(value: number) {
    this._gtpSmpSigCheckFailed = value;
  }
  public resetGtpSmpSigCheckFailed() {
    this._gtpSmpSigCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpSmpSigCheckFailedInput() {
    return this._gtpSmpSigCheckFailed;
  }

  // gtp_tunnel_rate_limit_entry_create_fail - computed: false, optional: true, required: false
  private _gtpTunnelRateLimitEntryCreateFail?: number; 
  public get gtpTunnelRateLimitEntryCreateFail() {
    return this.getNumberAttribute('gtp_tunnel_rate_limit_entry_create_fail');
  }
  public set gtpTunnelRateLimitEntryCreateFail(value: number) {
    this._gtpTunnelRateLimitEntryCreateFail = value;
  }
  public resetGtpTunnelRateLimitEntryCreateFail() {
    this._gtpTunnelRateLimitEntryCreateFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpTunnelRateLimitEntryCreateFailInput() {
    return this._gtpTunnelRateLimitEntryCreateFail;
  }

  // gtp_u_fail_conn_create_slow - computed: false, optional: true, required: false
  private _gtpUFailConnCreateSlow?: number; 
  public get gtpUFailConnCreateSlow() {
    return this.getNumberAttribute('gtp_u_fail_conn_create_slow');
  }
  public set gtpUFailConnCreateSlow(value: number) {
    this._gtpUFailConnCreateSlow = value;
  }
  public resetGtpUFailConnCreateSlow() {
    this._gtpUFailConnCreateSlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUFailConnCreateSlowInput() {
    return this._gtpUFailConnCreateSlow;
  }

  // gtp_u_smp_check_failed - computed: false, optional: true, required: false
  private _gtpUSmpCheckFailed?: number; 
  public get gtpUSmpCheckFailed() {
    return this.getNumberAttribute('gtp_u_smp_check_failed');
  }
  public set gtpUSmpCheckFailed(value: number) {
    this._gtpUSmpCheckFailed = value;
  }
  public resetGtpUSmpCheckFailed() {
    this._gtpUSmpCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUSmpCheckFailedInput() {
    return this._gtpUSmpCheckFailed;
  }

  // gtp_u_smp_sig_check_failed - computed: false, optional: true, required: false
  private _gtpUSmpSigCheckFailed?: number; 
  public get gtpUSmpSigCheckFailed() {
    return this.getNumberAttribute('gtp_u_smp_sig_check_failed');
  }
  public set gtpUSmpSigCheckFailed(value: number) {
    this._gtpUSmpSigCheckFailed = value;
  }
  public resetGtpUSmpSigCheckFailed() {
    this._gtpUSmpSigCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUSmpSigCheckFailedInput() {
    return this._gtpUSmpSigCheckFailed;
  }

  // gtp_u_tunnel_rate_limit_entry_create_fa - computed: false, optional: true, required: false
  private _gtpUTunnelRateLimitEntryCreateFa?: number; 
  public get gtpUTunnelRateLimitEntryCreateFa() {
    return this.getNumberAttribute('gtp_u_tunnel_rate_limit_entry_create_fa');
  }
  public set gtpUTunnelRateLimitEntryCreateFa(value: number) {
    this._gtpUTunnelRateLimitEntryCreateFa = value;
  }
  public resetGtpUTunnelRateLimitEntryCreateFa() {
    this._gtpUTunnelRateLimitEntryCreateFa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUTunnelRateLimitEntryCreateFaInput() {
    return this._gtpUTunnelRateLimitEntryCreateFa;
  }

  // out_of_session_memory - computed: false, optional: true, required: false
  private _outOfSessionMemory?: number; 
  public get outOfSessionMemory() {
    return this.getNumberAttribute('out_of_session_memory');
  }
  public set outOfSessionMemory(value: number) {
    this._outOfSessionMemory = value;
  }
  public resetOutOfSessionMemory() {
    this._outOfSessionMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outOfSessionMemoryInput() {
    return this._outOfSessionMemory;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp',
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
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateA) {
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
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
