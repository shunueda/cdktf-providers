// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable automatic packet-capture for GTP-C SMP signature check Failed on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#blade_gtp_c_smp_sig_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#blade_gtp_c_smp_sig_check_failed}
  */
  readonly bladeGtpCSmpSigCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP-Info ext not found while freeing C-smp on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#blade_gtp_info_ext_not_found VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#blade_gtp_info_ext_not_found}
  */
  readonly bladeGtpInfoExtNotFound?: number;
  /**
  * Enable automatic packet-capture for GTP Rate Limit Entry Create Failure on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#blade_gtp_rate_limit_entry_create_failu VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#blade_gtp_rate_limit_entry_create_failu}
  */
  readonly bladeGtpRateLimitEntryCreateFailu?: number;
  /**
  * Enable automatic packet-capture for GTP Rate Limit SMP Create Failure on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#blade_gtp_rate_limit_smp_create_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#blade_gtp_rate_limit_smp_create_failure}
  */
  readonly bladeGtpRateLimitSmpCreateFailure?: number;
  /**
  * Enable automatic packet-capture for GTP Rate Limit Dynamic Counters Create Failure on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#blade_gtp_rate_limit_t3_ctr_create_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#blade_gtp_rate_limit_t3_ctr_create_fail}
  */
  readonly bladeGtpRateLimitT3CtrCreateFail?: number;
  /**
  * Enable automatic packet-capture for GTP-C SMP check Failed on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#blade_gtp_smp_c_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#blade_gtp_smp_c_check_failed}
  */
  readonly bladeGtpSmpCCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP-U session count is 0 in GTP-C SMP on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#blade_gtp_smp_dec_sess_count_check_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#blade_gtp_smp_dec_sess_count_check_fail}
  */
  readonly bladeGtpSmpDecSessCountCheckFail?: number;
  /**
  * Enable automatic packet-capture for GTP SMP PATH check Failed on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#blade_gtp_smp_path_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#blade_gtp_smp_path_check_failed}
  */
  readonly bladeGtpSmpPathCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP-U session count is not in range of 0-11 in GTP-C SMP on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#blade_gtp_smp_session_count_check_faile VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#blade_gtp_smp_session_count_check_faile}
  */
  readonly bladeGtpSmpSessionCountCheckFaile?: number;
  /**
  * Enable automatic packet-capture for GTP SMP signature check Failed on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#blade_gtp_smp_sig_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#blade_gtp_smp_sig_check_failed}
  */
  readonly bladeGtpSmpSigCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP U-SMP check Failed on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#blade_gtp_u_smp_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#blade_gtp_u_smp_check_failed}
  */
  readonly bladeGtpUSmpCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP-U SMP signature check Failed on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#blade_gtp_u_smp_sig_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#blade_gtp_u_smp_sig_check_failed}
  */
  readonly bladeGtpUSmpSigCheckFailed?: number;
  /**
  * Enable automatic packet-capture for Out of Tunnel Memory on PU2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#blade_out_of_session_memory VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#blade_out_of_session_memory}
  */
  readonly bladeOutOfSessionMemory?: number;
  /**
  * Enable automatic packet-capture for GTP-C packet failed creating L4-session in slowpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#gtp_c_fail_conn_create_slow VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#gtp_c_fail_conn_create_slow}
  */
  readonly gtpCFailConnCreateSlow?: number;
  /**
  * Enable automatic packet-capture for GTP-C SMP signature check Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#gtp_c_smp_sig_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#gtp_c_smp_sig_check_failed}
  */
  readonly gtpCSmpSigCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP-Info ext not found while freeing C-smp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#gtp_info_ext_not_found VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#gtp_info_ext_not_found}
  */
  readonly gtpInfoExtNotFound?: number;
  /**
  * Enable automatic packet-capture for GTP path packet failed while creating L4-session in slowpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#gtp_pathm_fail_conn_create_slow VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#gtp_pathm_fail_conn_create_slow}
  */
  readonly gtpPathmFailConnCreateSlow?: number;
  /**
  * Enable automatic packet-capture for GTP Rate Limit Entry Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#gtp_rate_limit_entry_create_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#gtp_rate_limit_entry_create_failure}
  */
  readonly gtpRateLimitEntryCreateFailure?: number;
  /**
  * Enable automatic packet-capture for GTP Rate Limit SMP Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#gtp_rate_limit_smp_create_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#gtp_rate_limit_smp_create_failure}
  */
  readonly gtpRateLimitSmpCreateFailure?: number;
  /**
  * Enable automatic packet-capture for GTP Rate Limit Dynamic Counters Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#gtp_rate_limit_t3_ctr_create_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#gtp_rate_limit_t3_ctr_create_failure}
  */
  readonly gtpRateLimitT3CtrCreateFailure?: number;
  /**
  * Enable automatic packet-capture for GTP-C SMP check Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#gtp_smp_c_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#gtp_smp_c_check_failed}
  */
  readonly gtpSmpCCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP-U session count is 0 in GTP-C SMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#gtp_smp_dec_sess_count_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#gtp_smp_dec_sess_count_check_failed}
  */
  readonly gtpSmpDecSessCountCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP SMP PATH check Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#gtp_smp_path_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#gtp_smp_path_check_failed}
  */
  readonly gtpSmpPathCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP SMP signature check Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#gtp_smp_sig_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#gtp_smp_sig_check_failed}
  */
  readonly gtpSmpSigCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP Tunnel Level Rate Limit Entry Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#gtp_tunnel_rate_limit_entry_create_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#gtp_tunnel_rate_limit_entry_create_fail}
  */
  readonly gtpTunnelRateLimitEntryCreateFail?: number;
  /**
  * Enable automatic packet-capture for GTP-U packet failed while creating L4-session in slowpath
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#gtp_u_fail_conn_create_slow VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#gtp_u_fail_conn_create_slow}
  */
  readonly gtpUFailConnCreateSlow?: number;
  /**
  * Enable automatic packet-capture for GTP U-SMP check Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#gtp_u_smp_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#gtp_u_smp_check_failed}
  */
  readonly gtpUSmpCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP SMP signature check Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#gtp_u_smp_sig_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#gtp_u_smp_sig_check_failed}
  */
  readonly gtpUSmpSigCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP-U Tunnel Level Rate Limit Entry Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#gtp_u_tunnel_rate_limit_entry_create_fa VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#gtp_u_tunnel_rate_limit_entry_create_fa}
  */
  readonly gtpUTunnelRateLimitEntryCreateFa?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Out of Tunnel Memory for GTP-C
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#out_of_session_memory VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#out_of_session_memory}
  */
  readonly outOfSessionMemory?: number;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#template_name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#template_name}
  */
  readonly templateName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_inc',
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
    this._bladeGtpCSmpSigCheckFailed = config.bladeGtpCSmpSigCheckFailed;
    this._bladeGtpInfoExtNotFound = config.bladeGtpInfoExtNotFound;
    this._bladeGtpRateLimitEntryCreateFailu = config.bladeGtpRateLimitEntryCreateFailu;
    this._bladeGtpRateLimitSmpCreateFailure = config.bladeGtpRateLimitSmpCreateFailure;
    this._bladeGtpRateLimitT3CtrCreateFail = config.bladeGtpRateLimitT3CtrCreateFail;
    this._bladeGtpSmpCCheckFailed = config.bladeGtpSmpCCheckFailed;
    this._bladeGtpSmpDecSessCountCheckFail = config.bladeGtpSmpDecSessCountCheckFail;
    this._bladeGtpSmpPathCheckFailed = config.bladeGtpSmpPathCheckFailed;
    this._bladeGtpSmpSessionCountCheckFaile = config.bladeGtpSmpSessionCountCheckFaile;
    this._bladeGtpSmpSigCheckFailed = config.bladeGtpSmpSigCheckFailed;
    this._bladeGtpUSmpCheckFailed = config.bladeGtpUSmpCheckFailed;
    this._bladeGtpUSmpSigCheckFailed = config.bladeGtpUSmpSigCheckFailed;
    this._bladeOutOfSessionMemory = config.bladeOutOfSessionMemory;
    this._gtpCFailConnCreateSlow = config.gtpCFailConnCreateSlow;
    this._gtpCSmpSigCheckFailed = config.gtpCSmpSigCheckFailed;
    this._gtpInfoExtNotFound = config.gtpInfoExtNotFound;
    this._gtpPathmFailConnCreateSlow = config.gtpPathmFailConnCreateSlow;
    this._gtpRateLimitEntryCreateFailure = config.gtpRateLimitEntryCreateFailure;
    this._gtpRateLimitSmpCreateFailure = config.gtpRateLimitSmpCreateFailure;
    this._gtpRateLimitT3CtrCreateFailure = config.gtpRateLimitT3CtrCreateFailure;
    this._gtpSmpCCheckFailed = config.gtpSmpCCheckFailed;
    this._gtpSmpDecSessCountCheckFailed = config.gtpSmpDecSessCountCheckFailed;
    this._gtpSmpPathCheckFailed = config.gtpSmpPathCheckFailed;
    this._gtpSmpSigCheckFailed = config.gtpSmpSigCheckFailed;
    this._gtpTunnelRateLimitEntryCreateFail = config.gtpTunnelRateLimitEntryCreateFail;
    this._gtpUFailConnCreateSlow = config.gtpUFailConnCreateSlow;
    this._gtpUSmpCheckFailed = config.gtpUSmpCheckFailed;
    this._gtpUSmpSigCheckFailed = config.gtpUSmpSigCheckFailed;
    this._gtpUTunnelRateLimitEntryCreateFa = config.gtpUTunnelRateLimitEntryCreateFa;
    this._id = config.id;
    this._outOfSessionMemory = config.outOfSessionMemory;
    this._templateName = config.templateName;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
      blade_gtp_c_smp_sig_check_failed: cdktf.numberToTerraform(this._bladeGtpCSmpSigCheckFailed),
      blade_gtp_info_ext_not_found: cdktf.numberToTerraform(this._bladeGtpInfoExtNotFound),
      blade_gtp_rate_limit_entry_create_failu: cdktf.numberToTerraform(this._bladeGtpRateLimitEntryCreateFailu),
      blade_gtp_rate_limit_smp_create_failure: cdktf.numberToTerraform(this._bladeGtpRateLimitSmpCreateFailure),
      blade_gtp_rate_limit_t3_ctr_create_fail: cdktf.numberToTerraform(this._bladeGtpRateLimitT3CtrCreateFail),
      blade_gtp_smp_c_check_failed: cdktf.numberToTerraform(this._bladeGtpSmpCCheckFailed),
      blade_gtp_smp_dec_sess_count_check_fail: cdktf.numberToTerraform(this._bladeGtpSmpDecSessCountCheckFail),
      blade_gtp_smp_path_check_failed: cdktf.numberToTerraform(this._bladeGtpSmpPathCheckFailed),
      blade_gtp_smp_session_count_check_faile: cdktf.numberToTerraform(this._bladeGtpSmpSessionCountCheckFaile),
      blade_gtp_smp_sig_check_failed: cdktf.numberToTerraform(this._bladeGtpSmpSigCheckFailed),
      blade_gtp_u_smp_check_failed: cdktf.numberToTerraform(this._bladeGtpUSmpCheckFailed),
      blade_gtp_u_smp_sig_check_failed: cdktf.numberToTerraform(this._bladeGtpUSmpSigCheckFailed),
      blade_out_of_session_memory: cdktf.numberToTerraform(this._bladeOutOfSessionMemory),
      gtp_c_fail_conn_create_slow: cdktf.numberToTerraform(this._gtpCFailConnCreateSlow),
      gtp_c_smp_sig_check_failed: cdktf.numberToTerraform(this._gtpCSmpSigCheckFailed),
      gtp_info_ext_not_found: cdktf.numberToTerraform(this._gtpInfoExtNotFound),
      gtp_pathm_fail_conn_create_slow: cdktf.numberToTerraform(this._gtpPathmFailConnCreateSlow),
      gtp_rate_limit_entry_create_failure: cdktf.numberToTerraform(this._gtpRateLimitEntryCreateFailure),
      gtp_rate_limit_smp_create_failure: cdktf.numberToTerraform(this._gtpRateLimitSmpCreateFailure),
      gtp_rate_limit_t3_ctr_create_failure: cdktf.numberToTerraform(this._gtpRateLimitT3CtrCreateFailure),
      gtp_smp_c_check_failed: cdktf.numberToTerraform(this._gtpSmpCCheckFailed),
      gtp_smp_dec_sess_count_check_failed: cdktf.numberToTerraform(this._gtpSmpDecSessCountCheckFailed),
      gtp_smp_path_check_failed: cdktf.numberToTerraform(this._gtpSmpPathCheckFailed),
      gtp_smp_sig_check_failed: cdktf.numberToTerraform(this._gtpSmpSigCheckFailed),
      gtp_tunnel_rate_limit_entry_create_fail: cdktf.numberToTerraform(this._gtpTunnelRateLimitEntryCreateFail),
      gtp_u_fail_conn_create_slow: cdktf.numberToTerraform(this._gtpUFailConnCreateSlow),
      gtp_u_smp_check_failed: cdktf.numberToTerraform(this._gtpUSmpCheckFailed),
      gtp_u_smp_sig_check_failed: cdktf.numberToTerraform(this._gtpUSmpSigCheckFailed),
      gtp_u_tunnel_rate_limit_entry_create_fa: cdktf.numberToTerraform(this._gtpUTunnelRateLimitEntryCreateFa),
      id: cdktf.stringToTerraform(this._id),
      out_of_session_memory: cdktf.numberToTerraform(this._outOfSessionMemory),
      template_name: cdktf.stringToTerraform(this._templateName),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blade_gtp_c_smp_sig_check_failed: {
        value: cdktf.numberToHclTerraform(this._bladeGtpCSmpSigCheckFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      blade_gtp_info_ext_not_found: {
        value: cdktf.numberToHclTerraform(this._bladeGtpInfoExtNotFound),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      blade_gtp_rate_limit_entry_create_failu: {
        value: cdktf.numberToHclTerraform(this._bladeGtpRateLimitEntryCreateFailu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      blade_gtp_rate_limit_smp_create_failure: {
        value: cdktf.numberToHclTerraform(this._bladeGtpRateLimitSmpCreateFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      blade_gtp_rate_limit_t3_ctr_create_fail: {
        value: cdktf.numberToHclTerraform(this._bladeGtpRateLimitT3CtrCreateFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      blade_gtp_smp_c_check_failed: {
        value: cdktf.numberToHclTerraform(this._bladeGtpSmpCCheckFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      blade_gtp_smp_dec_sess_count_check_fail: {
        value: cdktf.numberToHclTerraform(this._bladeGtpSmpDecSessCountCheckFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      blade_gtp_smp_path_check_failed: {
        value: cdktf.numberToHclTerraform(this._bladeGtpSmpPathCheckFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      blade_gtp_smp_session_count_check_faile: {
        value: cdktf.numberToHclTerraform(this._bladeGtpSmpSessionCountCheckFaile),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      blade_gtp_smp_sig_check_failed: {
        value: cdktf.numberToHclTerraform(this._bladeGtpSmpSigCheckFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      blade_gtp_u_smp_check_failed: {
        value: cdktf.numberToHclTerraform(this._bladeGtpUSmpCheckFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      blade_gtp_u_smp_sig_check_failed: {
        value: cdktf.numberToHclTerraform(this._bladeGtpUSmpSigCheckFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      blade_out_of_session_memory: {
        value: cdktf.numberToHclTerraform(this._bladeOutOfSessionMemory),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_c_fail_conn_create_slow: {
        value: cdktf.numberToHclTerraform(this._gtpCFailConnCreateSlow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_c_smp_sig_check_failed: {
        value: cdktf.numberToHclTerraform(this._gtpCSmpSigCheckFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_info_ext_not_found: {
        value: cdktf.numberToHclTerraform(this._gtpInfoExtNotFound),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_pathm_fail_conn_create_slow: {
        value: cdktf.numberToHclTerraform(this._gtpPathmFailConnCreateSlow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_rate_limit_entry_create_failure: {
        value: cdktf.numberToHclTerraform(this._gtpRateLimitEntryCreateFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_rate_limit_smp_create_failure: {
        value: cdktf.numberToHclTerraform(this._gtpRateLimitSmpCreateFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_rate_limit_t3_ctr_create_failure: {
        value: cdktf.numberToHclTerraform(this._gtpRateLimitT3CtrCreateFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_smp_c_check_failed: {
        value: cdktf.numberToHclTerraform(this._gtpSmpCCheckFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_smp_dec_sess_count_check_failed: {
        value: cdktf.numberToHclTerraform(this._gtpSmpDecSessCountCheckFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_smp_path_check_failed: {
        value: cdktf.numberToHclTerraform(this._gtpSmpPathCheckFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_smp_sig_check_failed: {
        value: cdktf.numberToHclTerraform(this._gtpSmpSigCheckFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_tunnel_rate_limit_entry_create_fail: {
        value: cdktf.numberToHclTerraform(this._gtpTunnelRateLimitEntryCreateFail),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_u_fail_conn_create_slow: {
        value: cdktf.numberToHclTerraform(this._gtpUFailConnCreateSlow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_u_smp_check_failed: {
        value: cdktf.numberToHclTerraform(this._gtpUSmpCheckFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_u_smp_sig_check_failed: {
        value: cdktf.numberToHclTerraform(this._gtpUSmpSigCheckFailed),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gtp_u_tunnel_rate_limit_entry_create_fa: {
        value: cdktf.numberToHclTerraform(this._gtpUTunnelRateLimitEntryCreateFa),
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
      out_of_session_memory: {
        value: cdktf.numberToHclTerraform(this._outOfSessionMemory),
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
