// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for GTP-C session count on C-smp exceeded 2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_c_ref_count_smp_exceeded VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_c_ref_count_smp_exceeded}
  */
  readonly gtpCRefCountSmpExceeded?: number;
  /**
  * Enable automatic packet-capture for GTP Rate Limit Entry Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_rate_limit_entry_create_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_rate_limit_entry_create_failure}
  */
  readonly gtpRateLimitEntryCreateFailure?: number;
  /**
  * Enable automatic packet-capture for GTP Rate Limit SMP Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_rate_limit_smp_create_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_rate_limit_smp_create_failure}
  */
  readonly gtpRateLimitSmpCreateFailure?: number;
  /**
  * Enable automatic packet-capture for GTP Rate Limit Dynamic Counters Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_rate_limit_t3_ctr_create_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_rate_limit_t3_ctr_create_failure}
  */
  readonly gtpRateLimitT3CtrCreateFailure?: number;
  /**
  * Enable automatic packet-capture for GTP SMP check Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_smp_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_smp_check_failed}
  */
  readonly gtpSmpCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP-U session count is 0 in GTP-C SMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_smp_dec_sess_count_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_smp_dec_sess_count_check_failed}
  */
  readonly gtpSmpDecSessCountCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP SMP PATH check Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_smp_path_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_smp_path_check_failed}
  */
  readonly gtpSmpPathCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP-U session count is not in range of 0-11 in GTP-C SMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_smp_session_count_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_smp_session_count_check_failed}
  */
  readonly gtpSmpSessionCountCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP Tunnel Level Rate Limit Entry Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_tunnel_rate_limit_entry_create_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_tunnel_rate_limit_entry_create_fail}
  */
  readonly gtpTunnelRateLimitEntryCreateFail?: number;
  /**
  * Enable automatic packet-capture for GTP-U smp is marked RML with U-session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_u_smp_in_rml_with_sess VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_u_smp_in_rml_with_sess}
  */
  readonly gtpUSmpInRmlWithSess?: number;
  /**
  * Enable automatic packet-capture for Out of Tunnel Memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#out_of_session_memory VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#out_of_session_memory}
  */
  readonly outOfSessionMemory?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gtp_c_ref_count_smp_exceeded: cdktf.numberToTerraform(struct!.gtpCRefCountSmpExceeded),
    gtp_rate_limit_entry_create_failure: cdktf.numberToTerraform(struct!.gtpRateLimitEntryCreateFailure),
    gtp_rate_limit_smp_create_failure: cdktf.numberToTerraform(struct!.gtpRateLimitSmpCreateFailure),
    gtp_rate_limit_t3_ctr_create_failure: cdktf.numberToTerraform(struct!.gtpRateLimitT3CtrCreateFailure),
    gtp_smp_check_failed: cdktf.numberToTerraform(struct!.gtpSmpCheckFailed),
    gtp_smp_dec_sess_count_check_failed: cdktf.numberToTerraform(struct!.gtpSmpDecSessCountCheckFailed),
    gtp_smp_path_check_failed: cdktf.numberToTerraform(struct!.gtpSmpPathCheckFailed),
    gtp_smp_session_count_check_failed: cdktf.numberToTerraform(struct!.gtpSmpSessionCountCheckFailed),
    gtp_tunnel_rate_limit_entry_create_fail: cdktf.numberToTerraform(struct!.gtpTunnelRateLimitEntryCreateFail),
    gtp_u_smp_in_rml_with_sess: cdktf.numberToTerraform(struct!.gtpUSmpInRmlWithSess),
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
    gtp_c_ref_count_smp_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.gtpCRefCountSmpExceeded),
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
    gtp_smp_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.gtpSmpCheckFailed),
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
    gtp_smp_session_count_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.gtpSmpSessionCountCheckFailed),
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
    gtp_u_smp_in_rml_with_sess: {
      value: cdktf.numberToHclTerraform(struct!.gtpUSmpInRmlWithSess),
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
    if (this._gtpCRefCountSmpExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpCRefCountSmpExceeded = this._gtpCRefCountSmpExceeded;
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
    if (this._gtpSmpCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpSmpCheckFailed = this._gtpSmpCheckFailed;
    }
    if (this._gtpSmpDecSessCountCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpSmpDecSessCountCheckFailed = this._gtpSmpDecSessCountCheckFailed;
    }
    if (this._gtpSmpPathCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpSmpPathCheckFailed = this._gtpSmpPathCheckFailed;
    }
    if (this._gtpSmpSessionCountCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpSmpSessionCountCheckFailed = this._gtpSmpSessionCountCheckFailed;
    }
    if (this._gtpTunnelRateLimitEntryCreateFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpTunnelRateLimitEntryCreateFail = this._gtpTunnelRateLimitEntryCreateFail;
    }
    if (this._gtpUSmpInRmlWithSess !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpUSmpInRmlWithSess = this._gtpUSmpInRmlWithSess;
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
      this._gtpCRefCountSmpExceeded = undefined;
      this._gtpRateLimitEntryCreateFailure = undefined;
      this._gtpRateLimitSmpCreateFailure = undefined;
      this._gtpRateLimitT3CtrCreateFailure = undefined;
      this._gtpSmpCheckFailed = undefined;
      this._gtpSmpDecSessCountCheckFailed = undefined;
      this._gtpSmpPathCheckFailed = undefined;
      this._gtpSmpSessionCountCheckFailed = undefined;
      this._gtpTunnelRateLimitEntryCreateFail = undefined;
      this._gtpUSmpInRmlWithSess = undefined;
      this._outOfSessionMemory = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gtpCRefCountSmpExceeded = value.gtpCRefCountSmpExceeded;
      this._gtpRateLimitEntryCreateFailure = value.gtpRateLimitEntryCreateFailure;
      this._gtpRateLimitSmpCreateFailure = value.gtpRateLimitSmpCreateFailure;
      this._gtpRateLimitT3CtrCreateFailure = value.gtpRateLimitT3CtrCreateFailure;
      this._gtpSmpCheckFailed = value.gtpSmpCheckFailed;
      this._gtpSmpDecSessCountCheckFailed = value.gtpSmpDecSessCountCheckFailed;
      this._gtpSmpPathCheckFailed = value.gtpSmpPathCheckFailed;
      this._gtpSmpSessionCountCheckFailed = value.gtpSmpSessionCountCheckFailed;
      this._gtpTunnelRateLimitEntryCreateFail = value.gtpTunnelRateLimitEntryCreateFail;
      this._gtpUSmpInRmlWithSess = value.gtpUSmpInRmlWithSess;
      this._outOfSessionMemory = value.outOfSessionMemory;
      this._uuid = value.uuid;
    }
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
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for GTP-C session count on C-smp exceeded 2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_c_ref_count_smp_exceeded VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_c_ref_count_smp_exceeded}
  */
  readonly gtpCRefCountSmpExceeded?: number;
  /**
  * Enable automatic packet-capture for GTP Rate Limit Entry Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_rate_limit_entry_create_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_rate_limit_entry_create_failure}
  */
  readonly gtpRateLimitEntryCreateFailure?: number;
  /**
  * Enable automatic packet-capture for GTP Rate Limit SMP Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_rate_limit_smp_create_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_rate_limit_smp_create_failure}
  */
  readonly gtpRateLimitSmpCreateFailure?: number;
  /**
  * Enable automatic packet-capture for GTP Rate Limit Dynamic Counters Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_rate_limit_t3_ctr_create_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_rate_limit_t3_ctr_create_failure}
  */
  readonly gtpRateLimitT3CtrCreateFailure?: number;
  /**
  * Enable automatic packet-capture for GTP SMP check Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_smp_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_smp_check_failed}
  */
  readonly gtpSmpCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP-U session count is 0 in GTP-C SMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_smp_dec_sess_count_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_smp_dec_sess_count_check_failed}
  */
  readonly gtpSmpDecSessCountCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP SMP PATH check Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_smp_path_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_smp_path_check_failed}
  */
  readonly gtpSmpPathCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP-U session count is not in range of 0-11 in GTP-C SMP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_smp_session_count_check_failed VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_smp_session_count_check_failed}
  */
  readonly gtpSmpSessionCountCheckFailed?: number;
  /**
  * Enable automatic packet-capture for GTP Tunnel Level Rate Limit Entry Create Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_tunnel_rate_limit_entry_create_fail VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_tunnel_rate_limit_entry_create_fail}
  */
  readonly gtpTunnelRateLimitEntryCreateFail?: number;
  /**
  * Enable automatic packet-capture for GTP-U smp is marked RML with U-session
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#gtp_u_smp_in_rml_with_sess VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#gtp_u_smp_in_rml_with_sess}
  */
  readonly gtpUSmpInRmlWithSess?: number;
  /**
  * Enable automatic packet-capture for Out of Tunnel Memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#out_of_session_memory VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#out_of_session_memory}
  */
  readonly outOfSessionMemory?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    gtp_c_ref_count_smp_exceeded: cdktf.numberToTerraform(struct!.gtpCRefCountSmpExceeded),
    gtp_rate_limit_entry_create_failure: cdktf.numberToTerraform(struct!.gtpRateLimitEntryCreateFailure),
    gtp_rate_limit_smp_create_failure: cdktf.numberToTerraform(struct!.gtpRateLimitSmpCreateFailure),
    gtp_rate_limit_t3_ctr_create_failure: cdktf.numberToTerraform(struct!.gtpRateLimitT3CtrCreateFailure),
    gtp_smp_check_failed: cdktf.numberToTerraform(struct!.gtpSmpCheckFailed),
    gtp_smp_dec_sess_count_check_failed: cdktf.numberToTerraform(struct!.gtpSmpDecSessCountCheckFailed),
    gtp_smp_path_check_failed: cdktf.numberToTerraform(struct!.gtpSmpPathCheckFailed),
    gtp_smp_session_count_check_failed: cdktf.numberToTerraform(struct!.gtpSmpSessionCountCheckFailed),
    gtp_tunnel_rate_limit_entry_create_fail: cdktf.numberToTerraform(struct!.gtpTunnelRateLimitEntryCreateFail),
    gtp_u_smp_in_rml_with_sess: cdktf.numberToTerraform(struct!.gtpUSmpInRmlWithSess),
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
    duration: {
      value: cdktf.numberToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gtp_c_ref_count_smp_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.gtpCRefCountSmpExceeded),
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
    gtp_smp_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.gtpSmpCheckFailed),
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
    gtp_smp_session_count_check_failed: {
      value: cdktf.numberToHclTerraform(struct!.gtpSmpSessionCountCheckFailed),
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
    gtp_u_smp_in_rml_with_sess: {
      value: cdktf.numberToHclTerraform(struct!.gtpUSmpInRmlWithSess),
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
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._gtpCRefCountSmpExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpCRefCountSmpExceeded = this._gtpCRefCountSmpExceeded;
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
    if (this._gtpSmpCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpSmpCheckFailed = this._gtpSmpCheckFailed;
    }
    if (this._gtpSmpDecSessCountCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpSmpDecSessCountCheckFailed = this._gtpSmpDecSessCountCheckFailed;
    }
    if (this._gtpSmpPathCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpSmpPathCheckFailed = this._gtpSmpPathCheckFailed;
    }
    if (this._gtpSmpSessionCountCheckFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpSmpSessionCountCheckFailed = this._gtpSmpSessionCountCheckFailed;
    }
    if (this._gtpTunnelRateLimitEntryCreateFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpTunnelRateLimitEntryCreateFail = this._gtpTunnelRateLimitEntryCreateFail;
    }
    if (this._gtpUSmpInRmlWithSess !== undefined) {
      hasAnyValues = true;
      internalValueResult.gtpUSmpInRmlWithSess = this._gtpUSmpInRmlWithSess;
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
      this._duration = undefined;
      this._gtpCRefCountSmpExceeded = undefined;
      this._gtpRateLimitEntryCreateFailure = undefined;
      this._gtpRateLimitSmpCreateFailure = undefined;
      this._gtpRateLimitT3CtrCreateFailure = undefined;
      this._gtpSmpCheckFailed = undefined;
      this._gtpSmpDecSessCountCheckFailed = undefined;
      this._gtpSmpPathCheckFailed = undefined;
      this._gtpSmpSessionCountCheckFailed = undefined;
      this._gtpTunnelRateLimitEntryCreateFail = undefined;
      this._gtpUSmpInRmlWithSess = undefined;
      this._outOfSessionMemory = undefined;
      this._thresholdExceededBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._gtpCRefCountSmpExceeded = value.gtpCRefCountSmpExceeded;
      this._gtpRateLimitEntryCreateFailure = value.gtpRateLimitEntryCreateFailure;
      this._gtpRateLimitSmpCreateFailure = value.gtpRateLimitSmpCreateFailure;
      this._gtpRateLimitT3CtrCreateFailure = value.gtpRateLimitT3CtrCreateFailure;
      this._gtpSmpCheckFailed = value.gtpSmpCheckFailed;
      this._gtpSmpDecSessCountCheckFailed = value.gtpSmpDecSessCountCheckFailed;
      this._gtpSmpPathCheckFailed = value.gtpSmpPathCheckFailed;
      this._gtpSmpSessionCountCheckFailed = value.gtpSmpSessionCountCheckFailed;
      this._gtpTunnelRateLimitEntryCreateFail = value.gtpTunnelRateLimitEntryCreateFail;
      this._gtpUSmpInRmlWithSess = value.gtpUSmpInRmlWithSess;
      this._outOfSessionMemory = value.outOfSessionMemory;
      this._thresholdExceededBy = value.thresholdExceededBy;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp}
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
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeFwGtpA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_fw_gtp} Resource
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
      name: cdktf.stringToTerraform(this._name),
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
