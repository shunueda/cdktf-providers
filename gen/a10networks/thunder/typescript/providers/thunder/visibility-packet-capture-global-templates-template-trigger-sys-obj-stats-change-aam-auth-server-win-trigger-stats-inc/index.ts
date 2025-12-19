// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win_trigger_stats_inc#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for Total Kerberos KDC Keytab Deletion Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win_trigger_stats_inc#kerberos_delete_kdc_keytab_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncA#kerberos_delete_kdc_keytab_failure}
  */
  readonly kerberosDeleteKdcKeytabFailure?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos KDC Keytab Generation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win_trigger_stats_inc#kerberos_generate_kdc_keytab_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncA#kerberos_generate_kdc_keytab_failure}
  */
  readonly kerberosGenerateKdcKeytabFailure?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos Job Start Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win_trigger_stats_inc#kerberos_job_start_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncA#kerberos_job_start_error}
  */
  readonly kerberosJobStartError?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win_trigger_stats_inc#kerberos_other_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncA#kerberos_other_error}
  */
  readonly kerberosOtherError?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos Polling Control Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win_trigger_stats_inc#kerberos_polling_control_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncA#kerberos_polling_control_error}
  */
  readonly kerberosPollingControlError?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos password change failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win_trigger_stats_inc#kerberos_pw_change_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncA#kerberos_pw_change_failure}
  */
  readonly kerberosPwChangeFailure?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos password expiry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win_trigger_stats_inc#kerberos_pw_expiry VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncA#kerberos_pw_expiry}
  */
  readonly kerberosPwExpiry?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos Dropped Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win_trigger_stats_inc#kerberos_request_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncA#kerberos_request_dropped}
  */
  readonly kerberosRequestDropped?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos Error Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win_trigger_stats_inc#kerberos_response_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncA#kerberos_response_error}
  */
  readonly kerberosResponseError?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos Failure Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win_trigger_stats_inc#kerberos_response_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncA#kerberos_response_failure}
  */
  readonly kerberosResponseFailure?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos Timeout Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win_trigger_stats_inc#kerberos_response_timeout VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncA#kerberos_response_timeout}
  */
  readonly kerberosResponseTimeout?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win_trigger_stats_inc#kerberos_timeout_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncA#kerberos_timeout_error}
  */
  readonly kerberosTimeoutError?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos KDC Validation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win_trigger_stats_inc#kerberos_validate_kdc_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncA#kerberos_validate_kdc_failure}
  */
  readonly kerberosValidateKdcFailure?: number;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win_trigger_stats_inc#template_name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncA#template_name}
  */
  readonly templateName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win_trigger_stats_inc#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win_trigger_stats_inc}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win_trigger_stats_inc thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win_trigger_stats_inc',
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
    this._kerberosDeleteKdcKeytabFailure = config.kerberosDeleteKdcKeytabFailure;
    this._kerberosGenerateKdcKeytabFailure = config.kerberosGenerateKdcKeytabFailure;
    this._kerberosJobStartError = config.kerberosJobStartError;
    this._kerberosOtherError = config.kerberosOtherError;
    this._kerberosPollingControlError = config.kerberosPollingControlError;
    this._kerberosPwChangeFailure = config.kerberosPwChangeFailure;
    this._kerberosPwExpiry = config.kerberosPwExpiry;
    this._kerberosRequestDropped = config.kerberosRequestDropped;
    this._kerberosResponseError = config.kerberosResponseError;
    this._kerberosResponseFailure = config.kerberosResponseFailure;
    this._kerberosResponseTimeout = config.kerberosResponseTimeout;
    this._kerberosTimeoutError = config.kerberosTimeoutError;
    this._kerberosValidateKdcFailure = config.kerberosValidateKdcFailure;
    this._templateName = config.templateName;
    this._uuid = config.uuid;
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

  // kerberos_delete_kdc_keytab_failure - computed: false, optional: true, required: false
  private _kerberosDeleteKdcKeytabFailure?: number; 
  public get kerberosDeleteKdcKeytabFailure() {
    return this.getNumberAttribute('kerberos_delete_kdc_keytab_failure');
  }
  public set kerberosDeleteKdcKeytabFailure(value: number) {
    this._kerberosDeleteKdcKeytabFailure = value;
  }
  public resetKerberosDeleteKdcKeytabFailure() {
    this._kerberosDeleteKdcKeytabFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosDeleteKdcKeytabFailureInput() {
    return this._kerberosDeleteKdcKeytabFailure;
  }

  // kerberos_generate_kdc_keytab_failure - computed: false, optional: true, required: false
  private _kerberosGenerateKdcKeytabFailure?: number; 
  public get kerberosGenerateKdcKeytabFailure() {
    return this.getNumberAttribute('kerberos_generate_kdc_keytab_failure');
  }
  public set kerberosGenerateKdcKeytabFailure(value: number) {
    this._kerberosGenerateKdcKeytabFailure = value;
  }
  public resetKerberosGenerateKdcKeytabFailure() {
    this._kerberosGenerateKdcKeytabFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosGenerateKdcKeytabFailureInput() {
    return this._kerberosGenerateKdcKeytabFailure;
  }

  // kerberos_job_start_error - computed: false, optional: true, required: false
  private _kerberosJobStartError?: number; 
  public get kerberosJobStartError() {
    return this.getNumberAttribute('kerberos_job_start_error');
  }
  public set kerberosJobStartError(value: number) {
    this._kerberosJobStartError = value;
  }
  public resetKerberosJobStartError() {
    this._kerberosJobStartError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosJobStartErrorInput() {
    return this._kerberosJobStartError;
  }

  // kerberos_other_error - computed: false, optional: true, required: false
  private _kerberosOtherError?: number; 
  public get kerberosOtherError() {
    return this.getNumberAttribute('kerberos_other_error');
  }
  public set kerberosOtherError(value: number) {
    this._kerberosOtherError = value;
  }
  public resetKerberosOtherError() {
    this._kerberosOtherError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosOtherErrorInput() {
    return this._kerberosOtherError;
  }

  // kerberos_polling_control_error - computed: false, optional: true, required: false
  private _kerberosPollingControlError?: number; 
  public get kerberosPollingControlError() {
    return this.getNumberAttribute('kerberos_polling_control_error');
  }
  public set kerberosPollingControlError(value: number) {
    this._kerberosPollingControlError = value;
  }
  public resetKerberosPollingControlError() {
    this._kerberosPollingControlError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosPollingControlErrorInput() {
    return this._kerberosPollingControlError;
  }

  // kerberos_pw_change_failure - computed: false, optional: true, required: false
  private _kerberosPwChangeFailure?: number; 
  public get kerberosPwChangeFailure() {
    return this.getNumberAttribute('kerberos_pw_change_failure');
  }
  public set kerberosPwChangeFailure(value: number) {
    this._kerberosPwChangeFailure = value;
  }
  public resetKerberosPwChangeFailure() {
    this._kerberosPwChangeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosPwChangeFailureInput() {
    return this._kerberosPwChangeFailure;
  }

  // kerberos_pw_expiry - computed: false, optional: true, required: false
  private _kerberosPwExpiry?: number; 
  public get kerberosPwExpiry() {
    return this.getNumberAttribute('kerberos_pw_expiry');
  }
  public set kerberosPwExpiry(value: number) {
    this._kerberosPwExpiry = value;
  }
  public resetKerberosPwExpiry() {
    this._kerberosPwExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosPwExpiryInput() {
    return this._kerberosPwExpiry;
  }

  // kerberos_request_dropped - computed: false, optional: true, required: false
  private _kerberosRequestDropped?: number; 
  public get kerberosRequestDropped() {
    return this.getNumberAttribute('kerberos_request_dropped');
  }
  public set kerberosRequestDropped(value: number) {
    this._kerberosRequestDropped = value;
  }
  public resetKerberosRequestDropped() {
    this._kerberosRequestDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosRequestDroppedInput() {
    return this._kerberosRequestDropped;
  }

  // kerberos_response_error - computed: false, optional: true, required: false
  private _kerberosResponseError?: number; 
  public get kerberosResponseError() {
    return this.getNumberAttribute('kerberos_response_error');
  }
  public set kerberosResponseError(value: number) {
    this._kerberosResponseError = value;
  }
  public resetKerberosResponseError() {
    this._kerberosResponseError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosResponseErrorInput() {
    return this._kerberosResponseError;
  }

  // kerberos_response_failure - computed: false, optional: true, required: false
  private _kerberosResponseFailure?: number; 
  public get kerberosResponseFailure() {
    return this.getNumberAttribute('kerberos_response_failure');
  }
  public set kerberosResponseFailure(value: number) {
    this._kerberosResponseFailure = value;
  }
  public resetKerberosResponseFailure() {
    this._kerberosResponseFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosResponseFailureInput() {
    return this._kerberosResponseFailure;
  }

  // kerberos_response_timeout - computed: false, optional: true, required: false
  private _kerberosResponseTimeout?: number; 
  public get kerberosResponseTimeout() {
    return this.getNumberAttribute('kerberos_response_timeout');
  }
  public set kerberosResponseTimeout(value: number) {
    this._kerberosResponseTimeout = value;
  }
  public resetKerberosResponseTimeout() {
    this._kerberosResponseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosResponseTimeoutInput() {
    return this._kerberosResponseTimeout;
  }

  // kerberos_timeout_error - computed: false, optional: true, required: false
  private _kerberosTimeoutError?: number; 
  public get kerberosTimeoutError() {
    return this.getNumberAttribute('kerberos_timeout_error');
  }
  public set kerberosTimeoutError(value: number) {
    this._kerberosTimeoutError = value;
  }
  public resetKerberosTimeoutError() {
    this._kerberosTimeoutError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosTimeoutErrorInput() {
    return this._kerberosTimeoutError;
  }

  // kerberos_validate_kdc_failure - computed: false, optional: true, required: false
  private _kerberosValidateKdcFailure?: number; 
  public get kerberosValidateKdcFailure() {
    return this.getNumberAttribute('kerberos_validate_kdc_failure');
  }
  public set kerberosValidateKdcFailure(value: number) {
    this._kerberosValidateKdcFailure = value;
  }
  public resetKerberosValidateKdcFailure() {
    this._kerberosValidateKdcFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosValidateKdcFailureInput() {
    return this._kerberosValidateKdcFailure;
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
      id: cdktf.stringToTerraform(this._id),
      kerberos_delete_kdc_keytab_failure: cdktf.numberToTerraform(this._kerberosDeleteKdcKeytabFailure),
      kerberos_generate_kdc_keytab_failure: cdktf.numberToTerraform(this._kerberosGenerateKdcKeytabFailure),
      kerberos_job_start_error: cdktf.numberToTerraform(this._kerberosJobStartError),
      kerberos_other_error: cdktf.numberToTerraform(this._kerberosOtherError),
      kerberos_polling_control_error: cdktf.numberToTerraform(this._kerberosPollingControlError),
      kerberos_pw_change_failure: cdktf.numberToTerraform(this._kerberosPwChangeFailure),
      kerberos_pw_expiry: cdktf.numberToTerraform(this._kerberosPwExpiry),
      kerberos_request_dropped: cdktf.numberToTerraform(this._kerberosRequestDropped),
      kerberos_response_error: cdktf.numberToTerraform(this._kerberosResponseError),
      kerberos_response_failure: cdktf.numberToTerraform(this._kerberosResponseFailure),
      kerberos_response_timeout: cdktf.numberToTerraform(this._kerberosResponseTimeout),
      kerberos_timeout_error: cdktf.numberToTerraform(this._kerberosTimeoutError),
      kerberos_validate_kdc_failure: cdktf.numberToTerraform(this._kerberosValidateKdcFailure),
      template_name: cdktf.stringToTerraform(this._templateName),
      uuid: cdktf.stringToTerraform(this._uuid),
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
      kerberos_delete_kdc_keytab_failure: {
        value: cdktf.numberToHclTerraform(this._kerberosDeleteKdcKeytabFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kerberos_generate_kdc_keytab_failure: {
        value: cdktf.numberToHclTerraform(this._kerberosGenerateKdcKeytabFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kerberos_job_start_error: {
        value: cdktf.numberToHclTerraform(this._kerberosJobStartError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kerberos_other_error: {
        value: cdktf.numberToHclTerraform(this._kerberosOtherError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kerberos_polling_control_error: {
        value: cdktf.numberToHclTerraform(this._kerberosPollingControlError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kerberos_pw_change_failure: {
        value: cdktf.numberToHclTerraform(this._kerberosPwChangeFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kerberos_pw_expiry: {
        value: cdktf.numberToHclTerraform(this._kerberosPwExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kerberos_request_dropped: {
        value: cdktf.numberToHclTerraform(this._kerberosRequestDropped),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kerberos_response_error: {
        value: cdktf.numberToHclTerraform(this._kerberosResponseError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kerberos_response_failure: {
        value: cdktf.numberToHclTerraform(this._kerberosResponseFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kerberos_response_timeout: {
        value: cdktf.numberToHclTerraform(this._kerberosResponseTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kerberos_timeout_error: {
        value: cdktf.numberToHclTerraform(this._kerberosTimeoutError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kerberos_validate_kdc_failure: {
        value: cdktf.numberToHclTerraform(this._kerberosValidateKdcFailure),
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
