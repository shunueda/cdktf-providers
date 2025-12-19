// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#id VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Template_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#template_name VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#template_name}
  */
  readonly templateName: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#trigger_stats_inc VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncA;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#trigger_stats_rate VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsRateA;
}
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncA {
  /**
  * Enable automatic packet-capture for Total Kerberos KDC Keytab Deletion Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#kerberos_delete_kdc_keytab_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#kerberos_delete_kdc_keytab_failure}
  */
  readonly kerberosDeleteKdcKeytabFailure?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos KDC Keytab Generation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#kerberos_generate_kdc_keytab_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#kerberos_generate_kdc_keytab_failure}
  */
  readonly kerberosGenerateKdcKeytabFailure?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos Job Start Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#kerberos_job_start_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#kerberos_job_start_error}
  */
  readonly kerberosJobStartError?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#kerberos_other_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#kerberos_other_error}
  */
  readonly kerberosOtherError?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos Polling Control Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#kerberos_polling_control_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#kerberos_polling_control_error}
  */
  readonly kerberosPollingControlError?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos password change failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#kerberos_pw_change_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#kerberos_pw_change_failure}
  */
  readonly kerberosPwChangeFailure?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos password expiry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#kerberos_pw_expiry VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#kerberos_pw_expiry}
  */
  readonly kerberosPwExpiry?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos Dropped Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#kerberos_request_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#kerberos_request_dropped}
  */
  readonly kerberosRequestDropped?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos Error Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#kerberos_response_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#kerberos_response_error}
  */
  readonly kerberosResponseError?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos Failure Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#kerberos_response_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#kerberos_response_failure}
  */
  readonly kerberosResponseFailure?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos Timeout Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#kerberos_response_timeout VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#kerberos_response_timeout}
  */
  readonly kerberosResponseTimeout?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#kerberos_timeout_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#kerberos_timeout_error}
  */
  readonly kerberosTimeoutError?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos KDC Validation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#kerberos_validate_kdc_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#kerberos_validate_kdc_failure}
  */
  readonly kerberosValidateKdcFailure?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kerberos_delete_kdc_keytab_failure: cdktf.numberToTerraform(struct!.kerberosDeleteKdcKeytabFailure),
    kerberos_generate_kdc_keytab_failure: cdktf.numberToTerraform(struct!.kerberosGenerateKdcKeytabFailure),
    kerberos_job_start_error: cdktf.numberToTerraform(struct!.kerberosJobStartError),
    kerberos_other_error: cdktf.numberToTerraform(struct!.kerberosOtherError),
    kerberos_polling_control_error: cdktf.numberToTerraform(struct!.kerberosPollingControlError),
    kerberos_pw_change_failure: cdktf.numberToTerraform(struct!.kerberosPwChangeFailure),
    kerberos_pw_expiry: cdktf.numberToTerraform(struct!.kerberosPwExpiry),
    kerberos_request_dropped: cdktf.numberToTerraform(struct!.kerberosRequestDropped),
    kerberos_response_error: cdktf.numberToTerraform(struct!.kerberosResponseError),
    kerberos_response_failure: cdktf.numberToTerraform(struct!.kerberosResponseFailure),
    kerberos_response_timeout: cdktf.numberToTerraform(struct!.kerberosResponseTimeout),
    kerberos_timeout_error: cdktf.numberToTerraform(struct!.kerberosTimeoutError),
    kerberos_validate_kdc_failure: cdktf.numberToTerraform(struct!.kerberosValidateKdcFailure),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kerberos_delete_kdc_keytab_failure: {
      value: cdktf.numberToHclTerraform(struct!.kerberosDeleteKdcKeytabFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_generate_kdc_keytab_failure: {
      value: cdktf.numberToHclTerraform(struct!.kerberosGenerateKdcKeytabFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_job_start_error: {
      value: cdktf.numberToHclTerraform(struct!.kerberosJobStartError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_other_error: {
      value: cdktf.numberToHclTerraform(struct!.kerberosOtherError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_polling_control_error: {
      value: cdktf.numberToHclTerraform(struct!.kerberosPollingControlError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_pw_change_failure: {
      value: cdktf.numberToHclTerraform(struct!.kerberosPwChangeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_pw_expiry: {
      value: cdktf.numberToHclTerraform(struct!.kerberosPwExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_request_dropped: {
      value: cdktf.numberToHclTerraform(struct!.kerberosRequestDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_response_error: {
      value: cdktf.numberToHclTerraform(struct!.kerberosResponseError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_response_failure: {
      value: cdktf.numberToHclTerraform(struct!.kerberosResponseFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_response_timeout: {
      value: cdktf.numberToHclTerraform(struct!.kerberosResponseTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_timeout_error: {
      value: cdktf.numberToHclTerraform(struct!.kerberosTimeoutError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_validate_kdc_failure: {
      value: cdktf.numberToHclTerraform(struct!.kerberosValidateKdcFailure),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kerberosDeleteKdcKeytabFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosDeleteKdcKeytabFailure = this._kerberosDeleteKdcKeytabFailure;
    }
    if (this._kerberosGenerateKdcKeytabFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosGenerateKdcKeytabFailure = this._kerberosGenerateKdcKeytabFailure;
    }
    if (this._kerberosJobStartError !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosJobStartError = this._kerberosJobStartError;
    }
    if (this._kerberosOtherError !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosOtherError = this._kerberosOtherError;
    }
    if (this._kerberosPollingControlError !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosPollingControlError = this._kerberosPollingControlError;
    }
    if (this._kerberosPwChangeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosPwChangeFailure = this._kerberosPwChangeFailure;
    }
    if (this._kerberosPwExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosPwExpiry = this._kerberosPwExpiry;
    }
    if (this._kerberosRequestDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosRequestDropped = this._kerberosRequestDropped;
    }
    if (this._kerberosResponseError !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosResponseError = this._kerberosResponseError;
    }
    if (this._kerberosResponseFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosResponseFailure = this._kerberosResponseFailure;
    }
    if (this._kerberosResponseTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosResponseTimeout = this._kerberosResponseTimeout;
    }
    if (this._kerberosTimeoutError !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosTimeoutError = this._kerberosTimeoutError;
    }
    if (this._kerberosValidateKdcFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosValidateKdcFailure = this._kerberosValidateKdcFailure;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kerberosDeleteKdcKeytabFailure = undefined;
      this._kerberosGenerateKdcKeytabFailure = undefined;
      this._kerberosJobStartError = undefined;
      this._kerberosOtherError = undefined;
      this._kerberosPollingControlError = undefined;
      this._kerberosPwChangeFailure = undefined;
      this._kerberosPwExpiry = undefined;
      this._kerberosRequestDropped = undefined;
      this._kerberosResponseError = undefined;
      this._kerberosResponseFailure = undefined;
      this._kerberosResponseTimeout = undefined;
      this._kerberosTimeoutError = undefined;
      this._kerberosValidateKdcFailure = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kerberosDeleteKdcKeytabFailure = value.kerberosDeleteKdcKeytabFailure;
      this._kerberosGenerateKdcKeytabFailure = value.kerberosGenerateKdcKeytabFailure;
      this._kerberosJobStartError = value.kerberosJobStartError;
      this._kerberosOtherError = value.kerberosOtherError;
      this._kerberosPollingControlError = value.kerberosPollingControlError;
      this._kerberosPwChangeFailure = value.kerberosPwChangeFailure;
      this._kerberosPwExpiry = value.kerberosPwExpiry;
      this._kerberosRequestDropped = value.kerberosRequestDropped;
      this._kerberosResponseError = value.kerberosResponseError;
      this._kerberosResponseFailure = value.kerberosResponseFailure;
      this._kerberosResponseTimeout = value.kerberosResponseTimeout;
      this._kerberosTimeoutError = value.kerberosTimeoutError;
      this._kerberosValidateKdcFailure = value.kerberosValidateKdcFailure;
      this._uuid = value.uuid;
    }
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
export interface VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsRateA {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#duration VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos KDC Keytab Deletion Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#kerberos_delete_kdc_keytab_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#kerberos_delete_kdc_keytab_failure}
  */
  readonly kerberosDeleteKdcKeytabFailure?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos KDC Keytab Generation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#kerberos_generate_kdc_keytab_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#kerberos_generate_kdc_keytab_failure}
  */
  readonly kerberosGenerateKdcKeytabFailure?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos Job Start Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#kerberos_job_start_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#kerberos_job_start_error}
  */
  readonly kerberosJobStartError?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#kerberos_other_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#kerberos_other_error}
  */
  readonly kerberosOtherError?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos Polling Control Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#kerberos_polling_control_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#kerberos_polling_control_error}
  */
  readonly kerberosPollingControlError?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos password change failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#kerberos_pw_change_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#kerberos_pw_change_failure}
  */
  readonly kerberosPwChangeFailure?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos password expiry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#kerberos_pw_expiry VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#kerberos_pw_expiry}
  */
  readonly kerberosPwExpiry?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos Dropped Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#kerberos_request_dropped VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#kerberos_request_dropped}
  */
  readonly kerberosRequestDropped?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos Error Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#kerberos_response_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#kerberos_response_error}
  */
  readonly kerberosResponseError?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos Failure Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#kerberos_response_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#kerberos_response_failure}
  */
  readonly kerberosResponseFailure?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos Timeout Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#kerberos_response_timeout VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#kerberos_response_timeout}
  */
  readonly kerberosResponseTimeout?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#kerberos_timeout_error VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#kerberos_timeout_error}
  */
  readonly kerberosTimeoutError?: number;
  /**
  * Enable automatic packet-capture for Total Kerberos KDC Validation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#kerberos_validate_kdc_failure VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#kerberos_validate_kdc_failure}
  */
  readonly kerberosValidateKdcFailure?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#threshold_exceeded_by VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#uuid VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsRateAToTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsRateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    kerberos_delete_kdc_keytab_failure: cdktf.numberToTerraform(struct!.kerberosDeleteKdcKeytabFailure),
    kerberos_generate_kdc_keytab_failure: cdktf.numberToTerraform(struct!.kerberosGenerateKdcKeytabFailure),
    kerberos_job_start_error: cdktf.numberToTerraform(struct!.kerberosJobStartError),
    kerberos_other_error: cdktf.numberToTerraform(struct!.kerberosOtherError),
    kerberos_polling_control_error: cdktf.numberToTerraform(struct!.kerberosPollingControlError),
    kerberos_pw_change_failure: cdktf.numberToTerraform(struct!.kerberosPwChangeFailure),
    kerberos_pw_expiry: cdktf.numberToTerraform(struct!.kerberosPwExpiry),
    kerberos_request_dropped: cdktf.numberToTerraform(struct!.kerberosRequestDropped),
    kerberos_response_error: cdktf.numberToTerraform(struct!.kerberosResponseError),
    kerberos_response_failure: cdktf.numberToTerraform(struct!.kerberosResponseFailure),
    kerberos_response_timeout: cdktf.numberToTerraform(struct!.kerberosResponseTimeout),
    kerberos_timeout_error: cdktf.numberToTerraform(struct!.kerberosTimeoutError),
    kerberos_validate_kdc_failure: cdktf.numberToTerraform(struct!.kerberosValidateKdcFailure),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsRateAToHclTerraform(struct?: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsRateAOutputReference | VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsRateA): any {
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
    kerberos_delete_kdc_keytab_failure: {
      value: cdktf.numberToHclTerraform(struct!.kerberosDeleteKdcKeytabFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_generate_kdc_keytab_failure: {
      value: cdktf.numberToHclTerraform(struct!.kerberosGenerateKdcKeytabFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_job_start_error: {
      value: cdktf.numberToHclTerraform(struct!.kerberosJobStartError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_other_error: {
      value: cdktf.numberToHclTerraform(struct!.kerberosOtherError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_polling_control_error: {
      value: cdktf.numberToHclTerraform(struct!.kerberosPollingControlError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_pw_change_failure: {
      value: cdktf.numberToHclTerraform(struct!.kerberosPwChangeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_pw_expiry: {
      value: cdktf.numberToHclTerraform(struct!.kerberosPwExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_request_dropped: {
      value: cdktf.numberToHclTerraform(struct!.kerberosRequestDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_response_error: {
      value: cdktf.numberToHclTerraform(struct!.kerberosResponseError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_response_failure: {
      value: cdktf.numberToHclTerraform(struct!.kerberosResponseFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_response_timeout: {
      value: cdktf.numberToHclTerraform(struct!.kerberosResponseTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_timeout_error: {
      value: cdktf.numberToHclTerraform(struct!.kerberosTimeoutError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_validate_kdc_failure: {
      value: cdktf.numberToHclTerraform(struct!.kerberosValidateKdcFailure),
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

export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsRateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsRateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._kerberosDeleteKdcKeytabFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosDeleteKdcKeytabFailure = this._kerberosDeleteKdcKeytabFailure;
    }
    if (this._kerberosGenerateKdcKeytabFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosGenerateKdcKeytabFailure = this._kerberosGenerateKdcKeytabFailure;
    }
    if (this._kerberosJobStartError !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosJobStartError = this._kerberosJobStartError;
    }
    if (this._kerberosOtherError !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosOtherError = this._kerberosOtherError;
    }
    if (this._kerberosPollingControlError !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosPollingControlError = this._kerberosPollingControlError;
    }
    if (this._kerberosPwChangeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosPwChangeFailure = this._kerberosPwChangeFailure;
    }
    if (this._kerberosPwExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosPwExpiry = this._kerberosPwExpiry;
    }
    if (this._kerberosRequestDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosRequestDropped = this._kerberosRequestDropped;
    }
    if (this._kerberosResponseError !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosResponseError = this._kerberosResponseError;
    }
    if (this._kerberosResponseFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosResponseFailure = this._kerberosResponseFailure;
    }
    if (this._kerberosResponseTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosResponseTimeout = this._kerberosResponseTimeout;
    }
    if (this._kerberosTimeoutError !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosTimeoutError = this._kerberosTimeoutError;
    }
    if (this._kerberosValidateKdcFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosValidateKdcFailure = this._kerberosValidateKdcFailure;
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

  public set internalValue(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsRateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._kerberosDeleteKdcKeytabFailure = undefined;
      this._kerberosGenerateKdcKeytabFailure = undefined;
      this._kerberosJobStartError = undefined;
      this._kerberosOtherError = undefined;
      this._kerberosPollingControlError = undefined;
      this._kerberosPwChangeFailure = undefined;
      this._kerberosPwExpiry = undefined;
      this._kerberosRequestDropped = undefined;
      this._kerberosResponseError = undefined;
      this._kerberosResponseFailure = undefined;
      this._kerberosResponseTimeout = undefined;
      this._kerberosTimeoutError = undefined;
      this._kerberosValidateKdcFailure = undefined;
      this._thresholdExceededBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._kerberosDeleteKdcKeytabFailure = value.kerberosDeleteKdcKeytabFailure;
      this._kerberosGenerateKdcKeytabFailure = value.kerberosGenerateKdcKeytabFailure;
      this._kerberosJobStartError = value.kerberosJobStartError;
      this._kerberosOtherError = value.kerberosOtherError;
      this._kerberosPollingControlError = value.kerberosPollingControlError;
      this._kerberosPwChangeFailure = value.kerberosPwChangeFailure;
      this._kerberosPwExpiry = value.kerberosPwExpiry;
      this._kerberosRequestDropped = value.kerberosRequestDropped;
      this._kerberosResponseError = value.kerberosResponseError;
      this._kerberosResponseFailure = value.kerberosResponseFailure;
      this._kerberosResponseTimeout = value.kerberosResponseTimeout;
      this._kerberosTimeoutError = value.kerberosTimeoutError;
      this._kerberosValidateKdcFailure = value.kerberosValidateKdcFailure;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win}
*/
export class VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_global_templates_template_trigger_sys_obj_stats_change_aam_auth_server_win',
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
  private _triggerStatsInc = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncAOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncA) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsRateAOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsRateA) {
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
      trigger_stats_inc: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncAToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsRateAToTerraform(this._triggerStatsRate.internalValue),
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
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncAToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsIncAList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsRateAToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureGlobalTemplatesTemplateTriggerSysObjStatsChangeAamAuthServerWinTriggerStatsRateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
