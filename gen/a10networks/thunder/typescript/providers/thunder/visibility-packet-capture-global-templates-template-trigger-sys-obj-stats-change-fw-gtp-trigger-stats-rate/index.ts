// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_rate#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for GTP-C session count on C-smp exceeded 2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_rate#gtp_c_ref_count_smp_exceeded VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateA#gtp_c_ref_count_smp_exceeded}
  */
  readonly gtpCRefCountSmpExceeded?: number;
  /**
  * Enable automatic packet-capture for GTP Rate Limit Entry Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_rate#gtp_rate_limit_entry_create_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateA#gtp_rate_limit_entry_create_failure}
  */
  readonly gtpRateLimitEntryCreateFailure?: number;
  /**
  * Enable automatic packet-capture for GTP Rate Limit SMP Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_rate#gtp_rate_limit_smp_create_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateA#gtp_rate_limit_smp_create_failure}
  */
  readonly gtpRateLimitSmpCreateFailure?: number;
  /**
  * Enable automatic packet-capture for GTP Rate Limit Dynamic Counters Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_rate#gtp_rate_limit_t3_ctr_create_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateA#gtp_rate_limit_t3_ctr_create_failure}
  */
  readonly gtpRateLimitT3CtrCreateFailure?: number;
  /**
  * Enable automatic packet-capture for GTP SMP check Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_rate#gtp_smp_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateA#gtp_smp_check_failed}
  */
  readonly gtpSmpCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP-U session count is 0 in GTP-C SMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_rate#gtp_smp_dec_sess_count_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateA#gtp_smp_dec_sess_count_check_failed}
  */
  readonly gtpSmpDecSessCountCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP SMP PATH check Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_rate#gtp_smp_path_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateA#gtp_smp_path_check_failed}
  */
  readonly gtpSmpPathCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP-U session count is not in range of 0-11 in GTP-C SMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_rate#gtp_smp_session_count_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateA#gtp_smp_session_count_check_failed}
  */
  readonly gtpSmpSessionCountCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP Tunnel Level Rate Limit Entry Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_rate#gtp_tunnel_rate_limit_entry_create_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateA#gtp_tunnel_rate_limit_entry_create_fail}
  */
  readonly gtpTunnelRateLimitEntryCreateFail?: number;
  /**
  * Enable automatic packet-capture for GTP-U smp is marked RML with U-session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_rate#gtp_u_smp_in_rml_with_sess VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateA#gtp_u_smp_in_rml_with_sess}
  */
  readonly gtpUSmpInRmlWithSess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_rate#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_rate#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateA#name}
  */
  readonly name: string;
  /**
  * Enable automatic packet-capture for Out of Tunnel Memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_rate#out_of_session_memory VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateA#out_of_session_memory}
  */
  readonly outOfSessionMemory?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_rate#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_rate#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_rate}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_rate thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp_trigger_stats_rate',
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
    this._duration = config.duration;
    this._gtpCRefCountSmpExceeded = config.gtpCRefCountSmpExceeded;
    this._gtpRateLimitEntryCreateFailure = config.gtpRateLimitEntryCreateFailure;
    this._gtpRateLimitSmpCreateFailure = config.gtpRateLimitSmpCreateFailure;
    this._gtpRateLimitT3CtrCreateFailure = config.gtpRateLimitT3CtrCreateFailure;
    this._gtpSmpCheckFailed = config.gtpSmpCheckFailed;
    this._gtpSmpDecSessCountCheckFailed = config.gtpSmpDecSessCountCheckFailed;
    this._gtpSmpPathCheckFailed = config.gtpSmpPathCheckFailed;
    this._gtpSmpSessionCountCheckFailed = config.gtpSmpSessionCountCheckFailed;
    this._gtpTunnelRateLimitEntryCreateFail = config.gtpTunnelRateLimitEntryCreateFail;
    this._gtpUSmpInRmlWithSess = config.gtpUSmpInRmlWithSess;
    this._id = config.id;
    this._name = config.name;
    this._outOfSessionMemory = config.outOfSessionMemory;
    this._thresholdExceededBy = config.thresholdExceededBy;
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

  // gtp_c_ref_count_smp_exceeded - computed: false, optional: true, required: false
  private _gtpCRefCountSmpExceeded?: number; 
  public get gtpCRefCountSmpExceeded() {
    return this.getNumberAttribute('gtp_c_ref_count_smp_exceeded');
  }
  public set gtpCRefCountSmpExceeded(value: number) {
    this._gtpCRefCountSmpExceeded = value;
  }
  public resetGtpCRefCountSmpExceeded() {
    this._gtpCRefCountSmpExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpCRefCountSmpExceededInput() {
    return this._gtpCRefCountSmpExceeded;
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

  // gtp_smp_check_failed - computed: false, optional: true, required: false
  private _gtpSmpCheckFailed?: number; 
  public get gtpSmpCheckFailed() {
    return this.getNumberAttribute('gtp_smp_check_failed');
  }
  public set gtpSmpCheckFailed(value: number) {
    this._gtpSmpCheckFailed = value;
  }
  public resetGtpSmpCheckFailed() {
    this._gtpSmpCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpSmpCheckFailedInput() {
    return this._gtpSmpCheckFailed;
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

  // gtp_smp_session_count_check_failed - computed: false, optional: true, required: false
  private _gtpSmpSessionCountCheckFailed?: number; 
  public get gtpSmpSessionCountCheckFailed() {
    return this.getNumberAttribute('gtp_smp_session_count_check_failed');
  }
  public set gtpSmpSessionCountCheckFailed(value: number) {
    this._gtpSmpSessionCountCheckFailed = value;
  }
  public resetGtpSmpSessionCountCheckFailed() {
    this._gtpSmpSessionCountCheckFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpSmpSessionCountCheckFailedInput() {
    return this._gtpSmpSessionCountCheckFailed;
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

  // gtp_u_smp_in_rml_with_sess - computed: false, optional: true, required: false
  private _gtpUSmpInRmlWithSess?: number; 
  public get gtpUSmpInRmlWithSess() {
    return this.getNumberAttribute('gtp_u_smp_in_rml_with_sess');
  }
  public set gtpUSmpInRmlWithSess(value: number) {
    this._gtpUSmpInRmlWithSess = value;
  }
  public resetGtpUSmpInRmlWithSess() {
    this._gtpUSmpInRmlWithSess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gtpUSmpInRmlWithSessInput() {
    return this._gtpUSmpInRmlWithSess;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      duration: cdktf.numberToTerraform(this._duration),
      gtp_c_ref_count_smp_exceeded: cdktf.numberToTerraform(this._gtpCRefCountSmpExceeded),
      gtp_rate_limit_entry_create_failure: cdktf.numberToTerraform(this._gtpRateLimitEntryCreateFailure),
      gtp_rate_limit_smp_create_failure: cdktf.numberToTerraform(this._gtpRateLimitSmpCreateFailure),
      gtp_rate_limit_t3_ctr_create_failure: cdktf.numberToTerraform(this._gtpRateLimitT3CtrCreateFailure),
      gtp_smp_check_failed: cdktf.numberToTerraform(this._gtpSmpCheckFailed),
      gtp_smp_dec_sess_count_check_failed: cdktf.numberToTerraform(this._gtpSmpDecSessCountCheckFailed),
      gtp_smp_path_check_failed: cdktf.numberToTerraform(this._gtpSmpPathCheckFailed),
      gtp_smp_session_count_check_failed: cdktf.numberToTerraform(this._gtpSmpSessionCountCheckFailed),
      gtp_tunnel_rate_limit_entry_create_fail: cdktf.numberToTerraform(this._gtpTunnelRateLimitEntryCreateFail),
      gtp_u_smp_in_rml_with_sess: cdktf.numberToTerraform(this._gtpUSmpInRmlWithSess),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      out_of_session_memory: cdktf.numberToTerraform(this._outOfSessionMemory),
      threshold_exceeded_by: cdktf.numberToTerraform(this._thresholdExceededBy),
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
      gtp_c_ref_count_smp_exceeded: {
        value: cdktf.numberToHclTerraform(this._gtpCRefCountSmpExceeded),
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
      gtp_smp_check_failed: {
        value: cdktf.numberToHclTerraform(this._gtpSmpCheckFailed),
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
      gtp_smp_session_count_check_failed: {
        value: cdktf.numberToHclTerraform(this._gtpSmpSessionCountCheckFailed),
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
      gtp_u_smp_in_rml_with_sess: {
        value: cdktf.numberToHclTerraform(this._gtpUSmpInRmlWithSess),
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
      out_of_session_memory: {
        value: cdktf.numberToHclTerraform(this._outOfSessionMemory),
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
