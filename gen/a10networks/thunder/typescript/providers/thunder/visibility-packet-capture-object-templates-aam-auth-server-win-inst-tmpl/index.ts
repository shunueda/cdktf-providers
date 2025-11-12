// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify name of the capture-config to use with this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#capture_config VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#capture_config}
  */
  readonly captureConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#id VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Packet Capture Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#name VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#user_tag VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#uuid VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#trigger_stats_inc VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsInc;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#trigger_stats_rate VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRate;
  /**
  * trigger_stats_severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#trigger_stats_severity VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#trigger_stats_severity}
  */
  readonly triggerStatsSeverity?: VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsSeverity;
}
export interface VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsInc {
  /**
  * Enable automatic packet-capture for Kerberos Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#krb_other_error VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#krb_other_error}
  */
  readonly krbOtherError?: number;
  /**
  * Enable automatic packet-capture for Kerberos password change failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#krb_pw_change_failure VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#krb_pw_change_failure}
  */
  readonly krbPwChangeFailure?: number;
  /**
  * Enable automatic packet-capture for Kerberos password expiry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#krb_pw_expiry VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#krb_pw_expiry}
  */
  readonly krbPwExpiry?: number;
  /**
  * Enable automatic packet-capture for Kerberos Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#krb_timeout_error VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#krb_timeout_error}
  */
  readonly krbTimeoutError?: number;
  /**
  * Enable automatic packet-capture for Kerberos KDC Validation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#krb_validate_kdc_failure VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#krb_validate_kdc_failure}
  */
  readonly krbValidateKdcFailure?: number;
  /**
  * Enable automatic packet-capture for NTLM Authentication Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#ntlm_auth_failure VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#ntlm_auth_failure}
  */
  readonly ntlmAuthFailure?: number;
  /**
  * Enable automatic packet-capture for NTLM Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#ntlm_other_error VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#ntlm_other_error}
  */
  readonly ntlmOtherError?: number;
  /**
  * Enable automatic packet-capture for NTLM Prepare Request Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#ntlm_prepare_req_error VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#ntlm_prepare_req_error}
  */
  readonly ntlmPrepareReqError?: number;
  /**
  * Enable automatic packet-capture for NTLM Protocol Negotiation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#ntlm_proto_nego_failure VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#ntlm_proto_nego_failure}
  */
  readonly ntlmProtoNegoFailure?: number;
  /**
  * Enable automatic packet-capture for NTLM Session Setup Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#ntlm_session_setup_failure VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#ntlm_session_setup_failure}
  */
  readonly ntlmSessionSetupFailure?: number;
  /**
  * Enable automatic packet-capture for NTLM Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#ntlm_timeout_error VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#ntlm_timeout_error}
  */
  readonly ntlmTimeoutError?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#uuid VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsIncToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsIncOutputReference | VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsInc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    krb_other_error: cdktf.numberToTerraform(struct!.krbOtherError),
    krb_pw_change_failure: cdktf.numberToTerraform(struct!.krbPwChangeFailure),
    krb_pw_expiry: cdktf.numberToTerraform(struct!.krbPwExpiry),
    krb_timeout_error: cdktf.numberToTerraform(struct!.krbTimeoutError),
    krb_validate_kdc_failure: cdktf.numberToTerraform(struct!.krbValidateKdcFailure),
    ntlm_auth_failure: cdktf.numberToTerraform(struct!.ntlmAuthFailure),
    ntlm_other_error: cdktf.numberToTerraform(struct!.ntlmOtherError),
    ntlm_prepare_req_error: cdktf.numberToTerraform(struct!.ntlmPrepareReqError),
    ntlm_proto_nego_failure: cdktf.numberToTerraform(struct!.ntlmProtoNegoFailure),
    ntlm_session_setup_failure: cdktf.numberToTerraform(struct!.ntlmSessionSetupFailure),
    ntlm_timeout_error: cdktf.numberToTerraform(struct!.ntlmTimeoutError),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsIncToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsIncOutputReference | VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsInc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    krb_other_error: {
      value: cdktf.numberToHclTerraform(struct!.krbOtherError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    krb_pw_change_failure: {
      value: cdktf.numberToHclTerraform(struct!.krbPwChangeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    krb_pw_expiry: {
      value: cdktf.numberToHclTerraform(struct!.krbPwExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    krb_timeout_error: {
      value: cdktf.numberToHclTerraform(struct!.krbTimeoutError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    krb_validate_kdc_failure: {
      value: cdktf.numberToHclTerraform(struct!.krbValidateKdcFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_auth_failure: {
      value: cdktf.numberToHclTerraform(struct!.ntlmAuthFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_other_error: {
      value: cdktf.numberToHclTerraform(struct!.ntlmOtherError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_prepare_req_error: {
      value: cdktf.numberToHclTerraform(struct!.ntlmPrepareReqError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_proto_nego_failure: {
      value: cdktf.numberToHclTerraform(struct!.ntlmProtoNegoFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_session_setup_failure: {
      value: cdktf.numberToHclTerraform(struct!.ntlmSessionSetupFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_timeout_error: {
      value: cdktf.numberToHclTerraform(struct!.ntlmTimeoutError),
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

export class VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsIncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsInc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._krbOtherError !== undefined) {
      hasAnyValues = true;
      internalValueResult.krbOtherError = this._krbOtherError;
    }
    if (this._krbPwChangeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.krbPwChangeFailure = this._krbPwChangeFailure;
    }
    if (this._krbPwExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.krbPwExpiry = this._krbPwExpiry;
    }
    if (this._krbTimeoutError !== undefined) {
      hasAnyValues = true;
      internalValueResult.krbTimeoutError = this._krbTimeoutError;
    }
    if (this._krbValidateKdcFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.krbValidateKdcFailure = this._krbValidateKdcFailure;
    }
    if (this._ntlmAuthFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmAuthFailure = this._ntlmAuthFailure;
    }
    if (this._ntlmOtherError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmOtherError = this._ntlmOtherError;
    }
    if (this._ntlmPrepareReqError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmPrepareReqError = this._ntlmPrepareReqError;
    }
    if (this._ntlmProtoNegoFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmProtoNegoFailure = this._ntlmProtoNegoFailure;
    }
    if (this._ntlmSessionSetupFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmSessionSetupFailure = this._ntlmSessionSetupFailure;
    }
    if (this._ntlmTimeoutError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmTimeoutError = this._ntlmTimeoutError;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsInc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._krbOtherError = undefined;
      this._krbPwChangeFailure = undefined;
      this._krbPwExpiry = undefined;
      this._krbTimeoutError = undefined;
      this._krbValidateKdcFailure = undefined;
      this._ntlmAuthFailure = undefined;
      this._ntlmOtherError = undefined;
      this._ntlmPrepareReqError = undefined;
      this._ntlmProtoNegoFailure = undefined;
      this._ntlmSessionSetupFailure = undefined;
      this._ntlmTimeoutError = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._krbOtherError = value.krbOtherError;
      this._krbPwChangeFailure = value.krbPwChangeFailure;
      this._krbPwExpiry = value.krbPwExpiry;
      this._krbTimeoutError = value.krbTimeoutError;
      this._krbValidateKdcFailure = value.krbValidateKdcFailure;
      this._ntlmAuthFailure = value.ntlmAuthFailure;
      this._ntlmOtherError = value.ntlmOtherError;
      this._ntlmPrepareReqError = value.ntlmPrepareReqError;
      this._ntlmProtoNegoFailure = value.ntlmProtoNegoFailure;
      this._ntlmSessionSetupFailure = value.ntlmSessionSetupFailure;
      this._ntlmTimeoutError = value.ntlmTimeoutError;
      this._uuid = value.uuid;
    }
  }

  // krb_other_error - computed: false, optional: true, required: false
  private _krbOtherError?: number; 
  public get krbOtherError() {
    return this.getNumberAttribute('krb_other_error');
  }
  public set krbOtherError(value: number) {
    this._krbOtherError = value;
  }
  public resetKrbOtherError() {
    this._krbOtherError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbOtherErrorInput() {
    return this._krbOtherError;
  }

  // krb_pw_change_failure - computed: false, optional: true, required: false
  private _krbPwChangeFailure?: number; 
  public get krbPwChangeFailure() {
    return this.getNumberAttribute('krb_pw_change_failure');
  }
  public set krbPwChangeFailure(value: number) {
    this._krbPwChangeFailure = value;
  }
  public resetKrbPwChangeFailure() {
    this._krbPwChangeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbPwChangeFailureInput() {
    return this._krbPwChangeFailure;
  }

  // krb_pw_expiry - computed: false, optional: true, required: false
  private _krbPwExpiry?: number; 
  public get krbPwExpiry() {
    return this.getNumberAttribute('krb_pw_expiry');
  }
  public set krbPwExpiry(value: number) {
    this._krbPwExpiry = value;
  }
  public resetKrbPwExpiry() {
    this._krbPwExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbPwExpiryInput() {
    return this._krbPwExpiry;
  }

  // krb_timeout_error - computed: false, optional: true, required: false
  private _krbTimeoutError?: number; 
  public get krbTimeoutError() {
    return this.getNumberAttribute('krb_timeout_error');
  }
  public set krbTimeoutError(value: number) {
    this._krbTimeoutError = value;
  }
  public resetKrbTimeoutError() {
    this._krbTimeoutError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbTimeoutErrorInput() {
    return this._krbTimeoutError;
  }

  // krb_validate_kdc_failure - computed: false, optional: true, required: false
  private _krbValidateKdcFailure?: number; 
  public get krbValidateKdcFailure() {
    return this.getNumberAttribute('krb_validate_kdc_failure');
  }
  public set krbValidateKdcFailure(value: number) {
    this._krbValidateKdcFailure = value;
  }
  public resetKrbValidateKdcFailure() {
    this._krbValidateKdcFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbValidateKdcFailureInput() {
    return this._krbValidateKdcFailure;
  }

  // ntlm_auth_failure - computed: false, optional: true, required: false
  private _ntlmAuthFailure?: number; 
  public get ntlmAuthFailure() {
    return this.getNumberAttribute('ntlm_auth_failure');
  }
  public set ntlmAuthFailure(value: number) {
    this._ntlmAuthFailure = value;
  }
  public resetNtlmAuthFailure() {
    this._ntlmAuthFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmAuthFailureInput() {
    return this._ntlmAuthFailure;
  }

  // ntlm_other_error - computed: false, optional: true, required: false
  private _ntlmOtherError?: number; 
  public get ntlmOtherError() {
    return this.getNumberAttribute('ntlm_other_error');
  }
  public set ntlmOtherError(value: number) {
    this._ntlmOtherError = value;
  }
  public resetNtlmOtherError() {
    this._ntlmOtherError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmOtherErrorInput() {
    return this._ntlmOtherError;
  }

  // ntlm_prepare_req_error - computed: false, optional: true, required: false
  private _ntlmPrepareReqError?: number; 
  public get ntlmPrepareReqError() {
    return this.getNumberAttribute('ntlm_prepare_req_error');
  }
  public set ntlmPrepareReqError(value: number) {
    this._ntlmPrepareReqError = value;
  }
  public resetNtlmPrepareReqError() {
    this._ntlmPrepareReqError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmPrepareReqErrorInput() {
    return this._ntlmPrepareReqError;
  }

  // ntlm_proto_nego_failure - computed: false, optional: true, required: false
  private _ntlmProtoNegoFailure?: number; 
  public get ntlmProtoNegoFailure() {
    return this.getNumberAttribute('ntlm_proto_nego_failure');
  }
  public set ntlmProtoNegoFailure(value: number) {
    this._ntlmProtoNegoFailure = value;
  }
  public resetNtlmProtoNegoFailure() {
    this._ntlmProtoNegoFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmProtoNegoFailureInput() {
    return this._ntlmProtoNegoFailure;
  }

  // ntlm_session_setup_failure - computed: false, optional: true, required: false
  private _ntlmSessionSetupFailure?: number; 
  public get ntlmSessionSetupFailure() {
    return this.getNumberAttribute('ntlm_session_setup_failure');
  }
  public set ntlmSessionSetupFailure(value: number) {
    this._ntlmSessionSetupFailure = value;
  }
  public resetNtlmSessionSetupFailure() {
    this._ntlmSessionSetupFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmSessionSetupFailureInput() {
    return this._ntlmSessionSetupFailure;
  }

  // ntlm_timeout_error - computed: false, optional: true, required: false
  private _ntlmTimeoutError?: number; 
  public get ntlmTimeoutError() {
    return this.getNumberAttribute('ntlm_timeout_error');
  }
  public set ntlmTimeoutError(value: number) {
    this._ntlmTimeoutError = value;
  }
  public resetNtlmTimeoutError() {
    this._ntlmTimeoutError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmTimeoutErrorInput() {
    return this._ntlmTimeoutError;
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
export interface VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRate {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#duration VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for Kerberos Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#krb_other_error VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#krb_other_error}
  */
  readonly krbOtherError?: number;
  /**
  * Enable automatic packet-capture for Kerberos password change failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#krb_pw_change_failure VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#krb_pw_change_failure}
  */
  readonly krbPwChangeFailure?: number;
  /**
  * Enable automatic packet-capture for Kerberos password expiry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#krb_pw_expiry VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#krb_pw_expiry}
  */
  readonly krbPwExpiry?: number;
  /**
  * Enable automatic packet-capture for Kerberos Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#krb_timeout_error VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#krb_timeout_error}
  */
  readonly krbTimeoutError?: number;
  /**
  * Enable automatic packet-capture for Kerberos KDC Validation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#krb_validate_kdc_failure VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#krb_validate_kdc_failure}
  */
  readonly krbValidateKdcFailure?: number;
  /**
  * Enable automatic packet-capture for NTLM Authentication Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#ntlm_auth_failure VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#ntlm_auth_failure}
  */
  readonly ntlmAuthFailure?: number;
  /**
  * Enable automatic packet-capture for NTLM Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#ntlm_other_error VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#ntlm_other_error}
  */
  readonly ntlmOtherError?: number;
  /**
  * Enable automatic packet-capture for NTLM Prepare Request Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#ntlm_prepare_req_error VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#ntlm_prepare_req_error}
  */
  readonly ntlmPrepareReqError?: number;
  /**
  * Enable automatic packet-capture for NTLM Protocol Negotiation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#ntlm_proto_nego_failure VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#ntlm_proto_nego_failure}
  */
  readonly ntlmProtoNegoFailure?: number;
  /**
  * Enable automatic packet-capture for NTLM Session Setup Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#ntlm_session_setup_failure VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#ntlm_session_setup_failure}
  */
  readonly ntlmSessionSetupFailure?: number;
  /**
  * Enable automatic packet-capture for NTLM Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#ntlm_timeout_error VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#ntlm_timeout_error}
  */
  readonly ntlmTimeoutError?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#threshold_exceeded_by VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#uuid VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateOutputReference | VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    krb_other_error: cdktf.numberToTerraform(struct!.krbOtherError),
    krb_pw_change_failure: cdktf.numberToTerraform(struct!.krbPwChangeFailure),
    krb_pw_expiry: cdktf.numberToTerraform(struct!.krbPwExpiry),
    krb_timeout_error: cdktf.numberToTerraform(struct!.krbTimeoutError),
    krb_validate_kdc_failure: cdktf.numberToTerraform(struct!.krbValidateKdcFailure),
    ntlm_auth_failure: cdktf.numberToTerraform(struct!.ntlmAuthFailure),
    ntlm_other_error: cdktf.numberToTerraform(struct!.ntlmOtherError),
    ntlm_prepare_req_error: cdktf.numberToTerraform(struct!.ntlmPrepareReqError),
    ntlm_proto_nego_failure: cdktf.numberToTerraform(struct!.ntlmProtoNegoFailure),
    ntlm_session_setup_failure: cdktf.numberToTerraform(struct!.ntlmSessionSetupFailure),
    ntlm_timeout_error: cdktf.numberToTerraform(struct!.ntlmTimeoutError),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateOutputReference | VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRate): any {
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
    krb_other_error: {
      value: cdktf.numberToHclTerraform(struct!.krbOtherError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    krb_pw_change_failure: {
      value: cdktf.numberToHclTerraform(struct!.krbPwChangeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    krb_pw_expiry: {
      value: cdktf.numberToHclTerraform(struct!.krbPwExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    krb_timeout_error: {
      value: cdktf.numberToHclTerraform(struct!.krbTimeoutError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    krb_validate_kdc_failure: {
      value: cdktf.numberToHclTerraform(struct!.krbValidateKdcFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_auth_failure: {
      value: cdktf.numberToHclTerraform(struct!.ntlmAuthFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_other_error: {
      value: cdktf.numberToHclTerraform(struct!.ntlmOtherError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_prepare_req_error: {
      value: cdktf.numberToHclTerraform(struct!.ntlmPrepareReqError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_proto_nego_failure: {
      value: cdktf.numberToHclTerraform(struct!.ntlmProtoNegoFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_session_setup_failure: {
      value: cdktf.numberToHclTerraform(struct!.ntlmSessionSetupFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_timeout_error: {
      value: cdktf.numberToHclTerraform(struct!.ntlmTimeoutError),
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

export class VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._krbOtherError !== undefined) {
      hasAnyValues = true;
      internalValueResult.krbOtherError = this._krbOtherError;
    }
    if (this._krbPwChangeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.krbPwChangeFailure = this._krbPwChangeFailure;
    }
    if (this._krbPwExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.krbPwExpiry = this._krbPwExpiry;
    }
    if (this._krbTimeoutError !== undefined) {
      hasAnyValues = true;
      internalValueResult.krbTimeoutError = this._krbTimeoutError;
    }
    if (this._krbValidateKdcFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.krbValidateKdcFailure = this._krbValidateKdcFailure;
    }
    if (this._ntlmAuthFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmAuthFailure = this._ntlmAuthFailure;
    }
    if (this._ntlmOtherError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmOtherError = this._ntlmOtherError;
    }
    if (this._ntlmPrepareReqError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmPrepareReqError = this._ntlmPrepareReqError;
    }
    if (this._ntlmProtoNegoFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmProtoNegoFailure = this._ntlmProtoNegoFailure;
    }
    if (this._ntlmSessionSetupFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmSessionSetupFailure = this._ntlmSessionSetupFailure;
    }
    if (this._ntlmTimeoutError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmTimeoutError = this._ntlmTimeoutError;
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

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._krbOtherError = undefined;
      this._krbPwChangeFailure = undefined;
      this._krbPwExpiry = undefined;
      this._krbTimeoutError = undefined;
      this._krbValidateKdcFailure = undefined;
      this._ntlmAuthFailure = undefined;
      this._ntlmOtherError = undefined;
      this._ntlmPrepareReqError = undefined;
      this._ntlmProtoNegoFailure = undefined;
      this._ntlmSessionSetupFailure = undefined;
      this._ntlmTimeoutError = undefined;
      this._thresholdExceededBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._krbOtherError = value.krbOtherError;
      this._krbPwChangeFailure = value.krbPwChangeFailure;
      this._krbPwExpiry = value.krbPwExpiry;
      this._krbTimeoutError = value.krbTimeoutError;
      this._krbValidateKdcFailure = value.krbValidateKdcFailure;
      this._ntlmAuthFailure = value.ntlmAuthFailure;
      this._ntlmOtherError = value.ntlmOtherError;
      this._ntlmPrepareReqError = value.ntlmPrepareReqError;
      this._ntlmProtoNegoFailure = value.ntlmProtoNegoFailure;
      this._ntlmSessionSetupFailure = value.ntlmSessionSetupFailure;
      this._ntlmTimeoutError = value.ntlmTimeoutError;
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

  // krb_other_error - computed: false, optional: true, required: false
  private _krbOtherError?: number; 
  public get krbOtherError() {
    return this.getNumberAttribute('krb_other_error');
  }
  public set krbOtherError(value: number) {
    this._krbOtherError = value;
  }
  public resetKrbOtherError() {
    this._krbOtherError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbOtherErrorInput() {
    return this._krbOtherError;
  }

  // krb_pw_change_failure - computed: false, optional: true, required: false
  private _krbPwChangeFailure?: number; 
  public get krbPwChangeFailure() {
    return this.getNumberAttribute('krb_pw_change_failure');
  }
  public set krbPwChangeFailure(value: number) {
    this._krbPwChangeFailure = value;
  }
  public resetKrbPwChangeFailure() {
    this._krbPwChangeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbPwChangeFailureInput() {
    return this._krbPwChangeFailure;
  }

  // krb_pw_expiry - computed: false, optional: true, required: false
  private _krbPwExpiry?: number; 
  public get krbPwExpiry() {
    return this.getNumberAttribute('krb_pw_expiry');
  }
  public set krbPwExpiry(value: number) {
    this._krbPwExpiry = value;
  }
  public resetKrbPwExpiry() {
    this._krbPwExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbPwExpiryInput() {
    return this._krbPwExpiry;
  }

  // krb_timeout_error - computed: false, optional: true, required: false
  private _krbTimeoutError?: number; 
  public get krbTimeoutError() {
    return this.getNumberAttribute('krb_timeout_error');
  }
  public set krbTimeoutError(value: number) {
    this._krbTimeoutError = value;
  }
  public resetKrbTimeoutError() {
    this._krbTimeoutError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbTimeoutErrorInput() {
    return this._krbTimeoutError;
  }

  // krb_validate_kdc_failure - computed: false, optional: true, required: false
  private _krbValidateKdcFailure?: number; 
  public get krbValidateKdcFailure() {
    return this.getNumberAttribute('krb_validate_kdc_failure');
  }
  public set krbValidateKdcFailure(value: number) {
    this._krbValidateKdcFailure = value;
  }
  public resetKrbValidateKdcFailure() {
    this._krbValidateKdcFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbValidateKdcFailureInput() {
    return this._krbValidateKdcFailure;
  }

  // ntlm_auth_failure - computed: false, optional: true, required: false
  private _ntlmAuthFailure?: number; 
  public get ntlmAuthFailure() {
    return this.getNumberAttribute('ntlm_auth_failure');
  }
  public set ntlmAuthFailure(value: number) {
    this._ntlmAuthFailure = value;
  }
  public resetNtlmAuthFailure() {
    this._ntlmAuthFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmAuthFailureInput() {
    return this._ntlmAuthFailure;
  }

  // ntlm_other_error - computed: false, optional: true, required: false
  private _ntlmOtherError?: number; 
  public get ntlmOtherError() {
    return this.getNumberAttribute('ntlm_other_error');
  }
  public set ntlmOtherError(value: number) {
    this._ntlmOtherError = value;
  }
  public resetNtlmOtherError() {
    this._ntlmOtherError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmOtherErrorInput() {
    return this._ntlmOtherError;
  }

  // ntlm_prepare_req_error - computed: false, optional: true, required: false
  private _ntlmPrepareReqError?: number; 
  public get ntlmPrepareReqError() {
    return this.getNumberAttribute('ntlm_prepare_req_error');
  }
  public set ntlmPrepareReqError(value: number) {
    this._ntlmPrepareReqError = value;
  }
  public resetNtlmPrepareReqError() {
    this._ntlmPrepareReqError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmPrepareReqErrorInput() {
    return this._ntlmPrepareReqError;
  }

  // ntlm_proto_nego_failure - computed: false, optional: true, required: false
  private _ntlmProtoNegoFailure?: number; 
  public get ntlmProtoNegoFailure() {
    return this.getNumberAttribute('ntlm_proto_nego_failure');
  }
  public set ntlmProtoNegoFailure(value: number) {
    this._ntlmProtoNegoFailure = value;
  }
  public resetNtlmProtoNegoFailure() {
    this._ntlmProtoNegoFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmProtoNegoFailureInput() {
    return this._ntlmProtoNegoFailure;
  }

  // ntlm_session_setup_failure - computed: false, optional: true, required: false
  private _ntlmSessionSetupFailure?: number; 
  public get ntlmSessionSetupFailure() {
    return this.getNumberAttribute('ntlm_session_setup_failure');
  }
  public set ntlmSessionSetupFailure(value: number) {
    this._ntlmSessionSetupFailure = value;
  }
  public resetNtlmSessionSetupFailure() {
    this._ntlmSessionSetupFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmSessionSetupFailureInput() {
    return this._ntlmSessionSetupFailure;
  }

  // ntlm_timeout_error - computed: false, optional: true, required: false
  private _ntlmTimeoutError?: number; 
  public get ntlmTimeoutError() {
    return this.getNumberAttribute('ntlm_timeout_error');
  }
  public set ntlmTimeoutError(value: number) {
    this._ntlmTimeoutError = value;
  }
  public resetNtlmTimeoutError() {
    this._ntlmTimeoutError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmTimeoutErrorInput() {
    return this._ntlmTimeoutError;
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
export interface VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsSeverity {
  /**
  * Enable packet capture on all drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#drop VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#drop}
  */
  readonly drop?: number;
  /**
  * Enable packet capture on all alert drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#drop_alert VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#drop_alert}
  */
  readonly dropAlert?: number;
  /**
  * Enable packet capture on all critical drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#drop_critical VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#drop_critical}
  */
  readonly dropCritical?: number;
  /**
  * Enable packet capture on all warning drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#drop_warning VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#drop_warning}
  */
  readonly dropWarning?: number;
  /**
  * Enable packet capture on all error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#error VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#error}
  */
  readonly error?: number;
  /**
  * Enable packet capture on all alert error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#error_alert VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#error_alert}
  */
  readonly errorAlert?: number;
  /**
  * Enable packet capture on all critical error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#error_critical VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#error_critical}
  */
  readonly errorCritical?: number;
  /**
  * Enable packet capture on all warning error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#error_warning VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#error_warning}
  */
  readonly errorWarning?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#uuid VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsSeverityToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsSeverityOutputReference | VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsSeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    drop: cdktf.numberToTerraform(struct!.drop),
    drop_alert: cdktf.numberToTerraform(struct!.dropAlert),
    drop_critical: cdktf.numberToTerraform(struct!.dropCritical),
    drop_warning: cdktf.numberToTerraform(struct!.dropWarning),
    error: cdktf.numberToTerraform(struct!.error),
    error_alert: cdktf.numberToTerraform(struct!.errorAlert),
    error_critical: cdktf.numberToTerraform(struct!.errorCritical),
    error_warning: cdktf.numberToTerraform(struct!.errorWarning),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsSeverityToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsSeverityOutputReference | VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsSeverity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    drop: {
      value: cdktf.numberToHclTerraform(struct!.drop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_alert: {
      value: cdktf.numberToHclTerraform(struct!.dropAlert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_critical: {
      value: cdktf.numberToHclTerraform(struct!.dropCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    drop_warning: {
      value: cdktf.numberToHclTerraform(struct!.dropWarning),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error: {
      value: cdktf.numberToHclTerraform(struct!.error),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_alert: {
      value: cdktf.numberToHclTerraform(struct!.errorAlert),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_critical: {
      value: cdktf.numberToHclTerraform(struct!.errorCritical),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    error_warning: {
      value: cdktf.numberToHclTerraform(struct!.errorWarning),
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

export class VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsSeverityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsSeverity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    if (this._dropAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropAlert = this._dropAlert;
    }
    if (this._dropCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropCritical = this._dropCritical;
    }
    if (this._dropWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.dropWarning = this._dropWarning;
    }
    if (this._error !== undefined) {
      hasAnyValues = true;
      internalValueResult.error = this._error;
    }
    if (this._errorAlert !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorAlert = this._errorAlert;
    }
    if (this._errorCritical !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorCritical = this._errorCritical;
    }
    if (this._errorWarning !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorWarning = this._errorWarning;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsSeverity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._drop = undefined;
      this._dropAlert = undefined;
      this._dropCritical = undefined;
      this._dropWarning = undefined;
      this._error = undefined;
      this._errorAlert = undefined;
      this._errorCritical = undefined;
      this._errorWarning = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._drop = value.drop;
      this._dropAlert = value.dropAlert;
      this._dropCritical = value.dropCritical;
      this._dropWarning = value.dropWarning;
      this._error = value.error;
      this._errorAlert = value.errorAlert;
      this._errorCritical = value.errorCritical;
      this._errorWarning = value.errorWarning;
      this._uuid = value.uuid;
    }
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: number; 
  public get drop() {
    return this.getNumberAttribute('drop');
  }
  public set drop(value: number) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // drop_alert - computed: false, optional: true, required: false
  private _dropAlert?: number; 
  public get dropAlert() {
    return this.getNumberAttribute('drop_alert');
  }
  public set dropAlert(value: number) {
    this._dropAlert = value;
  }
  public resetDropAlert() {
    this._dropAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropAlertInput() {
    return this._dropAlert;
  }

  // drop_critical - computed: false, optional: true, required: false
  private _dropCritical?: number; 
  public get dropCritical() {
    return this.getNumberAttribute('drop_critical');
  }
  public set dropCritical(value: number) {
    this._dropCritical = value;
  }
  public resetDropCritical() {
    this._dropCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropCriticalInput() {
    return this._dropCritical;
  }

  // drop_warning - computed: false, optional: true, required: false
  private _dropWarning?: number; 
  public get dropWarning() {
    return this.getNumberAttribute('drop_warning');
  }
  public set dropWarning(value: number) {
    this._dropWarning = value;
  }
  public resetDropWarning() {
    this._dropWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropWarningInput() {
    return this._dropWarning;
  }

  // error - computed: false, optional: true, required: false
  private _error?: number; 
  public get error() {
    return this.getNumberAttribute('error');
  }
  public set error(value: number) {
    this._error = value;
  }
  public resetError() {
    this._error = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorInput() {
    return this._error;
  }

  // error_alert - computed: false, optional: true, required: false
  private _errorAlert?: number; 
  public get errorAlert() {
    return this.getNumberAttribute('error_alert');
  }
  public set errorAlert(value: number) {
    this._errorAlert = value;
  }
  public resetErrorAlert() {
    this._errorAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorAlertInput() {
    return this._errorAlert;
  }

  // error_critical - computed: false, optional: true, required: false
  private _errorCritical?: number; 
  public get errorCritical() {
    return this.getNumberAttribute('error_critical');
  }
  public set errorCritical(value: number) {
    this._errorCritical = value;
  }
  public resetErrorCritical() {
    this._errorCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCriticalInput() {
    return this._errorCritical;
  }

  // error_warning - computed: false, optional: true, required: false
  private _errorWarning?: number; 
  public get errorWarning() {
    return this.getNumberAttribute('error_warning');
  }
  public set errorWarning(value: number) {
    this._errorWarning = value;
  }
  public resetErrorWarning() {
    this._errorWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorWarningInput() {
    return this._errorWarning;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl thunder_visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl}
*/
export class VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmpl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl thunder_visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_aam_auth_server_win_inst_tmpl',
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
    this._captureConfig = config.captureConfig;
    this._id = config.id;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._triggerStatsInc.internalValue = config.triggerStatsInc;
    this._triggerStatsRate.internalValue = config.triggerStatsRate;
    this._triggerStatsSeverity.internalValue = config.triggerStatsSeverity;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // capture_config - computed: false, optional: true, required: false
  private _captureConfig?: string; 
  public get captureConfig() {
    return this.getStringAttribute('capture_config');
  }
  public set captureConfig(value: string) {
    this._captureConfig = value;
  }
  public resetCaptureConfig() {
    this._captureConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captureConfigInput() {
    return this._captureConfig;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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
  private _triggerStatsInc = new VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsIncOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsInc) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRate) {
    this._triggerStatsRate.internalValue = value;
  }
  public resetTriggerStatsRate() {
    this._triggerStatsRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsRateInput() {
    return this._triggerStatsRate.internalValue;
  }

  // trigger_stats_severity - computed: false, optional: true, required: false
  private _triggerStatsSeverity = new VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsSeverityOutputReference(this, "trigger_stats_severity");
  public get triggerStatsSeverity() {
    return this._triggerStatsSeverity;
  }
  public putTriggerStatsSeverity(value: VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsSeverity) {
    this._triggerStatsSeverity.internalValue = value;
  }
  public resetTriggerStatsSeverity() {
    this._triggerStatsSeverity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerStatsSeverityInput() {
    return this._triggerStatsSeverity.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      capture_config: cdktf.stringToTerraform(this._captureConfig),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      trigger_stats_inc: visibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsIncToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateToTerraform(this._triggerStatsRate.internalValue),
      trigger_stats_severity: visibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsSeverityToTerraform(this._triggerStatsSeverity.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      capture_config: {
        value: cdktf.stringToHclTerraform(this._captureConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
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
        value: visibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsIncToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsIncList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsRateList",
      },
      trigger_stats_severity: {
        value: visibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsSeverityToHclTerraform(this._triggerStatsSeverity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesAamAuthServerWinInstTmplTriggerStatsSeverityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
