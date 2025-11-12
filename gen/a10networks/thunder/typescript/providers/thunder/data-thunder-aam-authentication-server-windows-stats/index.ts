// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthenticationServerWindowsStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#id DataThunderAamAuthenticationServerWindowsStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * instance_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#instance_list DataThunderAamAuthenticationServerWindowsStats#instance_list}
  */
  readonly instanceList?: DataThunderAamAuthenticationServerWindowsStatsInstanceListStruct[] | cdktf.IResolvable;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#stats DataThunderAamAuthenticationServerWindowsStats#stats}
  */
  readonly stats?: DataThunderAamAuthenticationServerWindowsStatsStats;
}
export interface DataThunderAamAuthenticationServerWindowsStatsInstanceListStats {
  /**
  * Kerberos Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#krb_get_resp_success DataThunderAamAuthenticationServerWindowsStats#krb_get_resp_success}
  */
  readonly krbGetRespSuccess?: number;
  /**
  * Kerberos Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#krb_other_error DataThunderAamAuthenticationServerWindowsStats#krb_other_error}
  */
  readonly krbOtherError?: number;
  /**
  * Kerberos password change failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#krb_pw_change_failure DataThunderAamAuthenticationServerWindowsStats#krb_pw_change_failure}
  */
  readonly krbPwChangeFailure?: number;
  /**
  * Kerberos password change success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#krb_pw_change_success DataThunderAamAuthenticationServerWindowsStats#krb_pw_change_success}
  */
  readonly krbPwChangeSuccess?: number;
  /**
  * Kerberos password expiry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#krb_pw_expiry DataThunderAamAuthenticationServerWindowsStats#krb_pw_expiry}
  */
  readonly krbPwExpiry?: number;
  /**
  * Kerberos Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#krb_send_req_success DataThunderAamAuthenticationServerWindowsStats#krb_send_req_success}
  */
  readonly krbSendReqSuccess?: number;
  /**
  * Kerberos Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#krb_timeout_error DataThunderAamAuthenticationServerWindowsStats#krb_timeout_error}
  */
  readonly krbTimeoutError?: number;
  /**
  * Kerberos KDC Validation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#krb_validate_kdc_failure DataThunderAamAuthenticationServerWindowsStats#krb_validate_kdc_failure}
  */
  readonly krbValidateKdcFailure?: number;
  /**
  * Kerberos KDC Validation Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#krb_validate_kdc_success DataThunderAamAuthenticationServerWindowsStats#krb_validate_kdc_success}
  */
  readonly krbValidateKdcSuccess?: number;
  /**
  * NTLM Authentication Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#ntlm_auth_failure DataThunderAamAuthenticationServerWindowsStats#ntlm_auth_failure}
  */
  readonly ntlmAuthFailure?: number;
  /**
  * NTLM Authentication Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#ntlm_auth_success DataThunderAamAuthenticationServerWindowsStats#ntlm_auth_success}
  */
  readonly ntlmAuthSuccess?: number;
  /**
  * NTLM Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#ntlm_other_error DataThunderAamAuthenticationServerWindowsStats#ntlm_other_error}
  */
  readonly ntlmOtherError?: number;
  /**
  * NTLM Prepare Request Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#ntlm_prepare_req_error DataThunderAamAuthenticationServerWindowsStats#ntlm_prepare_req_error}
  */
  readonly ntlmPrepareReqError?: number;
  /**
  * NTLM Prepare Request Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#ntlm_prepare_req_success DataThunderAamAuthenticationServerWindowsStats#ntlm_prepare_req_success}
  */
  readonly ntlmPrepareReqSuccess?: number;
  /**
  * NTLM Protocol Negotiation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#ntlm_proto_nego_failure DataThunderAamAuthenticationServerWindowsStats#ntlm_proto_nego_failure}
  */
  readonly ntlmProtoNegoFailure?: number;
  /**
  * NTLM Protocol Negotiation Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#ntlm_proto_nego_success DataThunderAamAuthenticationServerWindowsStats#ntlm_proto_nego_success}
  */
  readonly ntlmProtoNegoSuccess?: number;
  /**
  * NTLM Session Setup Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#ntlm_session_setup_failure DataThunderAamAuthenticationServerWindowsStats#ntlm_session_setup_failure}
  */
  readonly ntlmSessionSetupFailure?: number;
  /**
  * NTLM Session Setup Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#ntlm_session_setup_success DataThunderAamAuthenticationServerWindowsStats#ntlm_session_setup_success}
  */
  readonly ntlmSessionSetupSuccess?: number;
  /**
  * NTLM Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#ntlm_timeout_error DataThunderAamAuthenticationServerWindowsStats#ntlm_timeout_error}
  */
  readonly ntlmTimeoutError?: number;
}

export function dataThunderAamAuthenticationServerWindowsStatsInstanceListStatsToTerraform(struct?: DataThunderAamAuthenticationServerWindowsStatsInstanceListStatsOutputReference | DataThunderAamAuthenticationServerWindowsStatsInstanceListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    krb_get_resp_success: cdktf.numberToTerraform(struct!.krbGetRespSuccess),
    krb_other_error: cdktf.numberToTerraform(struct!.krbOtherError),
    krb_pw_change_failure: cdktf.numberToTerraform(struct!.krbPwChangeFailure),
    krb_pw_change_success: cdktf.numberToTerraform(struct!.krbPwChangeSuccess),
    krb_pw_expiry: cdktf.numberToTerraform(struct!.krbPwExpiry),
    krb_send_req_success: cdktf.numberToTerraform(struct!.krbSendReqSuccess),
    krb_timeout_error: cdktf.numberToTerraform(struct!.krbTimeoutError),
    krb_validate_kdc_failure: cdktf.numberToTerraform(struct!.krbValidateKdcFailure),
    krb_validate_kdc_success: cdktf.numberToTerraform(struct!.krbValidateKdcSuccess),
    ntlm_auth_failure: cdktf.numberToTerraform(struct!.ntlmAuthFailure),
    ntlm_auth_success: cdktf.numberToTerraform(struct!.ntlmAuthSuccess),
    ntlm_other_error: cdktf.numberToTerraform(struct!.ntlmOtherError),
    ntlm_prepare_req_error: cdktf.numberToTerraform(struct!.ntlmPrepareReqError),
    ntlm_prepare_req_success: cdktf.numberToTerraform(struct!.ntlmPrepareReqSuccess),
    ntlm_proto_nego_failure: cdktf.numberToTerraform(struct!.ntlmProtoNegoFailure),
    ntlm_proto_nego_success: cdktf.numberToTerraform(struct!.ntlmProtoNegoSuccess),
    ntlm_session_setup_failure: cdktf.numberToTerraform(struct!.ntlmSessionSetupFailure),
    ntlm_session_setup_success: cdktf.numberToTerraform(struct!.ntlmSessionSetupSuccess),
    ntlm_timeout_error: cdktf.numberToTerraform(struct!.ntlmTimeoutError),
  }
}


export function dataThunderAamAuthenticationServerWindowsStatsInstanceListStatsToHclTerraform(struct?: DataThunderAamAuthenticationServerWindowsStatsInstanceListStatsOutputReference | DataThunderAamAuthenticationServerWindowsStatsInstanceListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    krb_get_resp_success: {
      value: cdktf.numberToHclTerraform(struct!.krbGetRespSuccess),
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
    krb_pw_change_success: {
      value: cdktf.numberToHclTerraform(struct!.krbPwChangeSuccess),
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
    krb_send_req_success: {
      value: cdktf.numberToHclTerraform(struct!.krbSendReqSuccess),
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
    krb_validate_kdc_success: {
      value: cdktf.numberToHclTerraform(struct!.krbValidateKdcSuccess),
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
    ntlm_auth_success: {
      value: cdktf.numberToHclTerraform(struct!.ntlmAuthSuccess),
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
    ntlm_prepare_req_success: {
      value: cdktf.numberToHclTerraform(struct!.ntlmPrepareReqSuccess),
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
    ntlm_proto_nego_success: {
      value: cdktf.numberToHclTerraform(struct!.ntlmProtoNegoSuccess),
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
    ntlm_session_setup_success: {
      value: cdktf.numberToHclTerraform(struct!.ntlmSessionSetupSuccess),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationServerWindowsStatsInstanceListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationServerWindowsStatsInstanceListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._krbGetRespSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.krbGetRespSuccess = this._krbGetRespSuccess;
    }
    if (this._krbOtherError !== undefined) {
      hasAnyValues = true;
      internalValueResult.krbOtherError = this._krbOtherError;
    }
    if (this._krbPwChangeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.krbPwChangeFailure = this._krbPwChangeFailure;
    }
    if (this._krbPwChangeSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.krbPwChangeSuccess = this._krbPwChangeSuccess;
    }
    if (this._krbPwExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.krbPwExpiry = this._krbPwExpiry;
    }
    if (this._krbSendReqSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.krbSendReqSuccess = this._krbSendReqSuccess;
    }
    if (this._krbTimeoutError !== undefined) {
      hasAnyValues = true;
      internalValueResult.krbTimeoutError = this._krbTimeoutError;
    }
    if (this._krbValidateKdcFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.krbValidateKdcFailure = this._krbValidateKdcFailure;
    }
    if (this._krbValidateKdcSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.krbValidateKdcSuccess = this._krbValidateKdcSuccess;
    }
    if (this._ntlmAuthFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmAuthFailure = this._ntlmAuthFailure;
    }
    if (this._ntlmAuthSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmAuthSuccess = this._ntlmAuthSuccess;
    }
    if (this._ntlmOtherError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmOtherError = this._ntlmOtherError;
    }
    if (this._ntlmPrepareReqError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmPrepareReqError = this._ntlmPrepareReqError;
    }
    if (this._ntlmPrepareReqSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmPrepareReqSuccess = this._ntlmPrepareReqSuccess;
    }
    if (this._ntlmProtoNegoFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmProtoNegoFailure = this._ntlmProtoNegoFailure;
    }
    if (this._ntlmProtoNegoSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmProtoNegoSuccess = this._ntlmProtoNegoSuccess;
    }
    if (this._ntlmSessionSetupFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmSessionSetupFailure = this._ntlmSessionSetupFailure;
    }
    if (this._ntlmSessionSetupSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmSessionSetupSuccess = this._ntlmSessionSetupSuccess;
    }
    if (this._ntlmTimeoutError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmTimeoutError = this._ntlmTimeoutError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationServerWindowsStatsInstanceListStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._krbGetRespSuccess = undefined;
      this._krbOtherError = undefined;
      this._krbPwChangeFailure = undefined;
      this._krbPwChangeSuccess = undefined;
      this._krbPwExpiry = undefined;
      this._krbSendReqSuccess = undefined;
      this._krbTimeoutError = undefined;
      this._krbValidateKdcFailure = undefined;
      this._krbValidateKdcSuccess = undefined;
      this._ntlmAuthFailure = undefined;
      this._ntlmAuthSuccess = undefined;
      this._ntlmOtherError = undefined;
      this._ntlmPrepareReqError = undefined;
      this._ntlmPrepareReqSuccess = undefined;
      this._ntlmProtoNegoFailure = undefined;
      this._ntlmProtoNegoSuccess = undefined;
      this._ntlmSessionSetupFailure = undefined;
      this._ntlmSessionSetupSuccess = undefined;
      this._ntlmTimeoutError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._krbGetRespSuccess = value.krbGetRespSuccess;
      this._krbOtherError = value.krbOtherError;
      this._krbPwChangeFailure = value.krbPwChangeFailure;
      this._krbPwChangeSuccess = value.krbPwChangeSuccess;
      this._krbPwExpiry = value.krbPwExpiry;
      this._krbSendReqSuccess = value.krbSendReqSuccess;
      this._krbTimeoutError = value.krbTimeoutError;
      this._krbValidateKdcFailure = value.krbValidateKdcFailure;
      this._krbValidateKdcSuccess = value.krbValidateKdcSuccess;
      this._ntlmAuthFailure = value.ntlmAuthFailure;
      this._ntlmAuthSuccess = value.ntlmAuthSuccess;
      this._ntlmOtherError = value.ntlmOtherError;
      this._ntlmPrepareReqError = value.ntlmPrepareReqError;
      this._ntlmPrepareReqSuccess = value.ntlmPrepareReqSuccess;
      this._ntlmProtoNegoFailure = value.ntlmProtoNegoFailure;
      this._ntlmProtoNegoSuccess = value.ntlmProtoNegoSuccess;
      this._ntlmSessionSetupFailure = value.ntlmSessionSetupFailure;
      this._ntlmSessionSetupSuccess = value.ntlmSessionSetupSuccess;
      this._ntlmTimeoutError = value.ntlmTimeoutError;
    }
  }

  // krb_get_resp_success - computed: false, optional: true, required: false
  private _krbGetRespSuccess?: number; 
  public get krbGetRespSuccess() {
    return this.getNumberAttribute('krb_get_resp_success');
  }
  public set krbGetRespSuccess(value: number) {
    this._krbGetRespSuccess = value;
  }
  public resetKrbGetRespSuccess() {
    this._krbGetRespSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbGetRespSuccessInput() {
    return this._krbGetRespSuccess;
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

  // krb_pw_change_success - computed: false, optional: true, required: false
  private _krbPwChangeSuccess?: number; 
  public get krbPwChangeSuccess() {
    return this.getNumberAttribute('krb_pw_change_success');
  }
  public set krbPwChangeSuccess(value: number) {
    this._krbPwChangeSuccess = value;
  }
  public resetKrbPwChangeSuccess() {
    this._krbPwChangeSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbPwChangeSuccessInput() {
    return this._krbPwChangeSuccess;
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

  // krb_send_req_success - computed: false, optional: true, required: false
  private _krbSendReqSuccess?: number; 
  public get krbSendReqSuccess() {
    return this.getNumberAttribute('krb_send_req_success');
  }
  public set krbSendReqSuccess(value: number) {
    this._krbSendReqSuccess = value;
  }
  public resetKrbSendReqSuccess() {
    this._krbSendReqSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbSendReqSuccessInput() {
    return this._krbSendReqSuccess;
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

  // krb_validate_kdc_success - computed: false, optional: true, required: false
  private _krbValidateKdcSuccess?: number; 
  public get krbValidateKdcSuccess() {
    return this.getNumberAttribute('krb_validate_kdc_success');
  }
  public set krbValidateKdcSuccess(value: number) {
    this._krbValidateKdcSuccess = value;
  }
  public resetKrbValidateKdcSuccess() {
    this._krbValidateKdcSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krbValidateKdcSuccessInput() {
    return this._krbValidateKdcSuccess;
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

  // ntlm_auth_success - computed: false, optional: true, required: false
  private _ntlmAuthSuccess?: number; 
  public get ntlmAuthSuccess() {
    return this.getNumberAttribute('ntlm_auth_success');
  }
  public set ntlmAuthSuccess(value: number) {
    this._ntlmAuthSuccess = value;
  }
  public resetNtlmAuthSuccess() {
    this._ntlmAuthSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmAuthSuccessInput() {
    return this._ntlmAuthSuccess;
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

  // ntlm_prepare_req_success - computed: false, optional: true, required: false
  private _ntlmPrepareReqSuccess?: number; 
  public get ntlmPrepareReqSuccess() {
    return this.getNumberAttribute('ntlm_prepare_req_success');
  }
  public set ntlmPrepareReqSuccess(value: number) {
    this._ntlmPrepareReqSuccess = value;
  }
  public resetNtlmPrepareReqSuccess() {
    this._ntlmPrepareReqSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmPrepareReqSuccessInput() {
    return this._ntlmPrepareReqSuccess;
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

  // ntlm_proto_nego_success - computed: false, optional: true, required: false
  private _ntlmProtoNegoSuccess?: number; 
  public get ntlmProtoNegoSuccess() {
    return this.getNumberAttribute('ntlm_proto_nego_success');
  }
  public set ntlmProtoNegoSuccess(value: number) {
    this._ntlmProtoNegoSuccess = value;
  }
  public resetNtlmProtoNegoSuccess() {
    this._ntlmProtoNegoSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmProtoNegoSuccessInput() {
    return this._ntlmProtoNegoSuccess;
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

  // ntlm_session_setup_success - computed: false, optional: true, required: false
  private _ntlmSessionSetupSuccess?: number; 
  public get ntlmSessionSetupSuccess() {
    return this.getNumberAttribute('ntlm_session_setup_success');
  }
  public set ntlmSessionSetupSuccess(value: number) {
    this._ntlmSessionSetupSuccess = value;
  }
  public resetNtlmSessionSetupSuccess() {
    this._ntlmSessionSetupSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmSessionSetupSuccessInput() {
    return this._ntlmSessionSetupSuccess;
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
}
export interface DataThunderAamAuthenticationServerWindowsStatsInstanceListStruct {
  /**
  * Specify Windows authentication server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#name DataThunderAamAuthenticationServerWindowsStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#stats DataThunderAamAuthenticationServerWindowsStats#stats}
  */
  readonly stats?: DataThunderAamAuthenticationServerWindowsStatsInstanceListStats;
}

export function dataThunderAamAuthenticationServerWindowsStatsInstanceListStructToTerraform(struct?: DataThunderAamAuthenticationServerWindowsStatsInstanceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    stats: dataThunderAamAuthenticationServerWindowsStatsInstanceListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderAamAuthenticationServerWindowsStatsInstanceListStructToHclTerraform(struct?: DataThunderAamAuthenticationServerWindowsStatsInstanceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stats: {
      value: dataThunderAamAuthenticationServerWindowsStatsInstanceListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAamAuthenticationServerWindowsStatsInstanceListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationServerWindowsStatsInstanceListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataThunderAamAuthenticationServerWindowsStatsInstanceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationServerWindowsStatsInstanceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._stats.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._stats.internalValue = value.stats;
    }
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderAamAuthenticationServerWindowsStatsInstanceListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamAuthenticationServerWindowsStatsInstanceListStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}

export class DataThunderAamAuthenticationServerWindowsStatsInstanceListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAamAuthenticationServerWindowsStatsInstanceListStruct[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataThunderAamAuthenticationServerWindowsStatsInstanceListStructOutputReference {
    return new DataThunderAamAuthenticationServerWindowsStatsInstanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAamAuthenticationServerWindowsStatsStats {
  /**
  * Total Kerberos KDC Keytab Deletion Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#kerberos_delete_kdc_keytab_failure DataThunderAamAuthenticationServerWindowsStats#kerberos_delete_kdc_keytab_failure}
  */
  readonly kerberosDeleteKdcKeytabFailure?: number;
  /**
  * Total Kerberos KDC Keytab Deletion Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#kerberos_delete_kdc_keytab_success DataThunderAamAuthenticationServerWindowsStats#kerberos_delete_kdc_keytab_success}
  */
  readonly kerberosDeleteKdcKeytabSuccess?: number;
  /**
  * Total Kerberos KDC Keytab Generation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#kerberos_generate_kdc_keytab_failure DataThunderAamAuthenticationServerWindowsStats#kerberos_generate_kdc_keytab_failure}
  */
  readonly kerberosGenerateKdcKeytabFailure?: number;
  /**
  * Total Kerberos KDC Keytab Generation Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#kerberos_generate_kdc_keytab_success DataThunderAamAuthenticationServerWindowsStats#kerberos_generate_kdc_keytab_success}
  */
  readonly kerberosGenerateKdcKeytabSuccess?: number;
  /**
  * Total Kerberos Job Start Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#kerberos_job_start_error DataThunderAamAuthenticationServerWindowsStats#kerberos_job_start_error}
  */
  readonly kerberosJobStartError?: number;
  /**
  * Current Kerberos KDC Keytab Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#kerberos_kdc_keytab_count DataThunderAamAuthenticationServerWindowsStats#kerberos_kdc_keytab_count}
  */
  readonly kerberosKdcKeytabCount?: number;
  /**
  * Total Kerberos Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#kerberos_other_error DataThunderAamAuthenticationServerWindowsStats#kerberos_other_error}
  */
  readonly kerberosOtherError?: number;
  /**
  * Total Kerberos Polling Control Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#kerberos_polling_control_error DataThunderAamAuthenticationServerWindowsStats#kerberos_polling_control_error}
  */
  readonly kerberosPollingControlError?: number;
  /**
  * Total Kerberos password change failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#kerberos_pw_change_failure DataThunderAamAuthenticationServerWindowsStats#kerberos_pw_change_failure}
  */
  readonly kerberosPwChangeFailure?: number;
  /**
  * Total Kerberos password change success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#kerberos_pw_change_success DataThunderAamAuthenticationServerWindowsStats#kerberos_pw_change_success}
  */
  readonly kerberosPwChangeSuccess?: number;
  /**
  * Total Kerberos password expiry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#kerberos_pw_expiry DataThunderAamAuthenticationServerWindowsStats#kerberos_pw_expiry}
  */
  readonly kerberosPwExpiry?: number;
  /**
  * Total Kerberos Dropped Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#kerberos_request_dropped DataThunderAamAuthenticationServerWindowsStats#kerberos_request_dropped}
  */
  readonly kerberosRequestDropped?: number;
  /**
  * Total Kerberos Normal Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#kerberos_request_normal DataThunderAamAuthenticationServerWindowsStats#kerberos_request_normal}
  */
  readonly kerberosRequestNormal?: number;
  /**
  * Total Kerberos Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#kerberos_request_send DataThunderAamAuthenticationServerWindowsStats#kerberos_request_send}
  */
  readonly kerberosRequestSend?: number;
  /**
  * Total Kerberos Error Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#kerberos_response_error DataThunderAamAuthenticationServerWindowsStats#kerberos_response_error}
  */
  readonly kerberosResponseError?: number;
  /**
  * Total Kerberos Failure Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#kerberos_response_failure DataThunderAamAuthenticationServerWindowsStats#kerberos_response_failure}
  */
  readonly kerberosResponseFailure?: number;
  /**
  * Total Kerberos Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#kerberos_response_get DataThunderAamAuthenticationServerWindowsStats#kerberos_response_get}
  */
  readonly kerberosResponseGet?: number;
  /**
  * Total Kerberos Other Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#kerberos_response_other DataThunderAamAuthenticationServerWindowsStats#kerberos_response_other}
  */
  readonly kerberosResponseOther?: number;
  /**
  * Total Kerberos Success Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#kerberos_response_success DataThunderAamAuthenticationServerWindowsStats#kerberos_response_success}
  */
  readonly kerberosResponseSuccess?: number;
  /**
  * Total Kerberos Timeout Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#kerberos_response_timeout DataThunderAamAuthenticationServerWindowsStats#kerberos_response_timeout}
  */
  readonly kerberosResponseTimeout?: number;
  /**
  * Total Kerberos Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#kerberos_timeout_error DataThunderAamAuthenticationServerWindowsStats#kerberos_timeout_error}
  */
  readonly kerberosTimeoutError?: number;
  /**
  * Total Kerberos KDC Validation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#kerberos_validate_kdc_failure DataThunderAamAuthenticationServerWindowsStats#kerberos_validate_kdc_failure}
  */
  readonly kerberosValidateKdcFailure?: number;
  /**
  * Total Kerberos KDC Validation Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#kerberos_validate_kdc_success DataThunderAamAuthenticationServerWindowsStats#kerberos_validate_kdc_success}
  */
  readonly kerberosValidateKdcSuccess?: number;
  /**
  * Total NTLM Authentication Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#ntlm_authentication_failure DataThunderAamAuthenticationServerWindowsStats#ntlm_authentication_failure}
  */
  readonly ntlmAuthenticationFailure?: number;
  /**
  * Total NTLM Authentication Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#ntlm_authentication_success DataThunderAamAuthenticationServerWindowsStats#ntlm_authentication_success}
  */
  readonly ntlmAuthenticationSuccess?: number;
  /**
  * Total NTLM Job Start Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#ntlm_job_start_error DataThunderAamAuthenticationServerWindowsStats#ntlm_job_start_error}
  */
  readonly ntlmJobStartError?: number;
  /**
  * Total NTLM Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#ntlm_other_error DataThunderAamAuthenticationServerWindowsStats#ntlm_other_error}
  */
  readonly ntlmOtherError?: number;
  /**
  * Total NTLM Polling Control Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#ntlm_polling_control_error DataThunderAamAuthenticationServerWindowsStats#ntlm_polling_control_error}
  */
  readonly ntlmPollingControlError?: number;
  /**
  * Total NTLM Prepare Request Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#ntlm_prepare_req_failed DataThunderAamAuthenticationServerWindowsStats#ntlm_prepare_req_failed}
  */
  readonly ntlmPrepareReqFailed?: number;
  /**
  * Total NTLM Prepare Request Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#ntlm_prepare_req_success DataThunderAamAuthenticationServerWindowsStats#ntlm_prepare_req_success}
  */
  readonly ntlmPrepareReqSuccess?: number;
  /**
  * Total NTLM Protocol Negotiation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#ntlm_proto_negotiation_failure DataThunderAamAuthenticationServerWindowsStats#ntlm_proto_negotiation_failure}
  */
  readonly ntlmProtoNegotiationFailure?: number;
  /**
  * Total NTLM Protocol Negotiation Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#ntlm_proto_negotiation_success DataThunderAamAuthenticationServerWindowsStats#ntlm_proto_negotiation_success}
  */
  readonly ntlmProtoNegotiationSuccess?: number;
  /**
  * Total NTLM Dropped Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#ntlm_request_dropped DataThunderAamAuthenticationServerWindowsStats#ntlm_request_dropped}
  */
  readonly ntlmRequestDropped?: number;
  /**
  * Total NTLM Normal Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#ntlm_request_normal DataThunderAamAuthenticationServerWindowsStats#ntlm_request_normal}
  */
  readonly ntlmRequestNormal?: number;
  /**
  * Total NTLM Error Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#ntlm_response_error DataThunderAamAuthenticationServerWindowsStats#ntlm_response_error}
  */
  readonly ntlmResponseError?: number;
  /**
  * Total NTLM Failure Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#ntlm_response_failure DataThunderAamAuthenticationServerWindowsStats#ntlm_response_failure}
  */
  readonly ntlmResponseFailure?: number;
  /**
  * Total NTLM Other Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#ntlm_response_other DataThunderAamAuthenticationServerWindowsStats#ntlm_response_other}
  */
  readonly ntlmResponseOther?: number;
  /**
  * Total NTLM Success Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#ntlm_response_success DataThunderAamAuthenticationServerWindowsStats#ntlm_response_success}
  */
  readonly ntlmResponseSuccess?: number;
  /**
  * Total NTLM Timeout Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#ntlm_response_timeout DataThunderAamAuthenticationServerWindowsStats#ntlm_response_timeout}
  */
  readonly ntlmResponseTimeout?: number;
  /**
  * Total NTLM Session Setup Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#ntlm_session_setup_failed DataThunderAamAuthenticationServerWindowsStats#ntlm_session_setup_failed}
  */
  readonly ntlmSessionSetupFailed?: number;
  /**
  * Total NTLM Session Setup Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#ntlm_session_setup_success DataThunderAamAuthenticationServerWindowsStats#ntlm_session_setup_success}
  */
  readonly ntlmSessionSetupSuccess?: number;
  /**
  * Total NTLM Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#ntlm_timeout_error DataThunderAamAuthenticationServerWindowsStats#ntlm_timeout_error}
  */
  readonly ntlmTimeoutError?: number;
}

export function dataThunderAamAuthenticationServerWindowsStatsStatsToTerraform(struct?: DataThunderAamAuthenticationServerWindowsStatsStatsOutputReference | DataThunderAamAuthenticationServerWindowsStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kerberos_delete_kdc_keytab_failure: cdktf.numberToTerraform(struct!.kerberosDeleteKdcKeytabFailure),
    kerberos_delete_kdc_keytab_success: cdktf.numberToTerraform(struct!.kerberosDeleteKdcKeytabSuccess),
    kerberos_generate_kdc_keytab_failure: cdktf.numberToTerraform(struct!.kerberosGenerateKdcKeytabFailure),
    kerberos_generate_kdc_keytab_success: cdktf.numberToTerraform(struct!.kerberosGenerateKdcKeytabSuccess),
    kerberos_job_start_error: cdktf.numberToTerraform(struct!.kerberosJobStartError),
    kerberos_kdc_keytab_count: cdktf.numberToTerraform(struct!.kerberosKdcKeytabCount),
    kerberos_other_error: cdktf.numberToTerraform(struct!.kerberosOtherError),
    kerberos_polling_control_error: cdktf.numberToTerraform(struct!.kerberosPollingControlError),
    kerberos_pw_change_failure: cdktf.numberToTerraform(struct!.kerberosPwChangeFailure),
    kerberos_pw_change_success: cdktf.numberToTerraform(struct!.kerberosPwChangeSuccess),
    kerberos_pw_expiry: cdktf.numberToTerraform(struct!.kerberosPwExpiry),
    kerberos_request_dropped: cdktf.numberToTerraform(struct!.kerberosRequestDropped),
    kerberos_request_normal: cdktf.numberToTerraform(struct!.kerberosRequestNormal),
    kerberos_request_send: cdktf.numberToTerraform(struct!.kerberosRequestSend),
    kerberos_response_error: cdktf.numberToTerraform(struct!.kerberosResponseError),
    kerberos_response_failure: cdktf.numberToTerraform(struct!.kerberosResponseFailure),
    kerberos_response_get: cdktf.numberToTerraform(struct!.kerberosResponseGet),
    kerberos_response_other: cdktf.numberToTerraform(struct!.kerberosResponseOther),
    kerberos_response_success: cdktf.numberToTerraform(struct!.kerberosResponseSuccess),
    kerberos_response_timeout: cdktf.numberToTerraform(struct!.kerberosResponseTimeout),
    kerberos_timeout_error: cdktf.numberToTerraform(struct!.kerberosTimeoutError),
    kerberos_validate_kdc_failure: cdktf.numberToTerraform(struct!.kerberosValidateKdcFailure),
    kerberos_validate_kdc_success: cdktf.numberToTerraform(struct!.kerberosValidateKdcSuccess),
    ntlm_authentication_failure: cdktf.numberToTerraform(struct!.ntlmAuthenticationFailure),
    ntlm_authentication_success: cdktf.numberToTerraform(struct!.ntlmAuthenticationSuccess),
    ntlm_job_start_error: cdktf.numberToTerraform(struct!.ntlmJobStartError),
    ntlm_other_error: cdktf.numberToTerraform(struct!.ntlmOtherError),
    ntlm_polling_control_error: cdktf.numberToTerraform(struct!.ntlmPollingControlError),
    ntlm_prepare_req_failed: cdktf.numberToTerraform(struct!.ntlmPrepareReqFailed),
    ntlm_prepare_req_success: cdktf.numberToTerraform(struct!.ntlmPrepareReqSuccess),
    ntlm_proto_negotiation_failure: cdktf.numberToTerraform(struct!.ntlmProtoNegotiationFailure),
    ntlm_proto_negotiation_success: cdktf.numberToTerraform(struct!.ntlmProtoNegotiationSuccess),
    ntlm_request_dropped: cdktf.numberToTerraform(struct!.ntlmRequestDropped),
    ntlm_request_normal: cdktf.numberToTerraform(struct!.ntlmRequestNormal),
    ntlm_response_error: cdktf.numberToTerraform(struct!.ntlmResponseError),
    ntlm_response_failure: cdktf.numberToTerraform(struct!.ntlmResponseFailure),
    ntlm_response_other: cdktf.numberToTerraform(struct!.ntlmResponseOther),
    ntlm_response_success: cdktf.numberToTerraform(struct!.ntlmResponseSuccess),
    ntlm_response_timeout: cdktf.numberToTerraform(struct!.ntlmResponseTimeout),
    ntlm_session_setup_failed: cdktf.numberToTerraform(struct!.ntlmSessionSetupFailed),
    ntlm_session_setup_success: cdktf.numberToTerraform(struct!.ntlmSessionSetupSuccess),
    ntlm_timeout_error: cdktf.numberToTerraform(struct!.ntlmTimeoutError),
  }
}


export function dataThunderAamAuthenticationServerWindowsStatsStatsToHclTerraform(struct?: DataThunderAamAuthenticationServerWindowsStatsStatsOutputReference | DataThunderAamAuthenticationServerWindowsStatsStats): any {
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
    kerberos_delete_kdc_keytab_success: {
      value: cdktf.numberToHclTerraform(struct!.kerberosDeleteKdcKeytabSuccess),
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
    kerberos_generate_kdc_keytab_success: {
      value: cdktf.numberToHclTerraform(struct!.kerberosGenerateKdcKeytabSuccess),
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
    kerberos_kdc_keytab_count: {
      value: cdktf.numberToHclTerraform(struct!.kerberosKdcKeytabCount),
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
    kerberos_pw_change_success: {
      value: cdktf.numberToHclTerraform(struct!.kerberosPwChangeSuccess),
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
    kerberos_request_normal: {
      value: cdktf.numberToHclTerraform(struct!.kerberosRequestNormal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_request_send: {
      value: cdktf.numberToHclTerraform(struct!.kerberosRequestSend),
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
    kerberos_response_get: {
      value: cdktf.numberToHclTerraform(struct!.kerberosResponseGet),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_response_other: {
      value: cdktf.numberToHclTerraform(struct!.kerberosResponseOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kerberos_response_success: {
      value: cdktf.numberToHclTerraform(struct!.kerberosResponseSuccess),
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
    kerberos_validate_kdc_success: {
      value: cdktf.numberToHclTerraform(struct!.kerberosValidateKdcSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_authentication_failure: {
      value: cdktf.numberToHclTerraform(struct!.ntlmAuthenticationFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_authentication_success: {
      value: cdktf.numberToHclTerraform(struct!.ntlmAuthenticationSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_job_start_error: {
      value: cdktf.numberToHclTerraform(struct!.ntlmJobStartError),
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
    ntlm_polling_control_error: {
      value: cdktf.numberToHclTerraform(struct!.ntlmPollingControlError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_prepare_req_failed: {
      value: cdktf.numberToHclTerraform(struct!.ntlmPrepareReqFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_prepare_req_success: {
      value: cdktf.numberToHclTerraform(struct!.ntlmPrepareReqSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_proto_negotiation_failure: {
      value: cdktf.numberToHclTerraform(struct!.ntlmProtoNegotiationFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_proto_negotiation_success: {
      value: cdktf.numberToHclTerraform(struct!.ntlmProtoNegotiationSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_request_dropped: {
      value: cdktf.numberToHclTerraform(struct!.ntlmRequestDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_request_normal: {
      value: cdktf.numberToHclTerraform(struct!.ntlmRequestNormal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_response_error: {
      value: cdktf.numberToHclTerraform(struct!.ntlmResponseError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_response_failure: {
      value: cdktf.numberToHclTerraform(struct!.ntlmResponseFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_response_other: {
      value: cdktf.numberToHclTerraform(struct!.ntlmResponseOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_response_success: {
      value: cdktf.numberToHclTerraform(struct!.ntlmResponseSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_response_timeout: {
      value: cdktf.numberToHclTerraform(struct!.ntlmResponseTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_session_setup_failed: {
      value: cdktf.numberToHclTerraform(struct!.ntlmSessionSetupFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntlm_session_setup_success: {
      value: cdktf.numberToHclTerraform(struct!.ntlmSessionSetupSuccess),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationServerWindowsStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationServerWindowsStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kerberosDeleteKdcKeytabFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosDeleteKdcKeytabFailure = this._kerberosDeleteKdcKeytabFailure;
    }
    if (this._kerberosDeleteKdcKeytabSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosDeleteKdcKeytabSuccess = this._kerberosDeleteKdcKeytabSuccess;
    }
    if (this._kerberosGenerateKdcKeytabFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosGenerateKdcKeytabFailure = this._kerberosGenerateKdcKeytabFailure;
    }
    if (this._kerberosGenerateKdcKeytabSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosGenerateKdcKeytabSuccess = this._kerberosGenerateKdcKeytabSuccess;
    }
    if (this._kerberosJobStartError !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosJobStartError = this._kerberosJobStartError;
    }
    if (this._kerberosKdcKeytabCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosKdcKeytabCount = this._kerberosKdcKeytabCount;
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
    if (this._kerberosPwChangeSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosPwChangeSuccess = this._kerberosPwChangeSuccess;
    }
    if (this._kerberosPwExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosPwExpiry = this._kerberosPwExpiry;
    }
    if (this._kerberosRequestDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosRequestDropped = this._kerberosRequestDropped;
    }
    if (this._kerberosRequestNormal !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosRequestNormal = this._kerberosRequestNormal;
    }
    if (this._kerberosRequestSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosRequestSend = this._kerberosRequestSend;
    }
    if (this._kerberosResponseError !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosResponseError = this._kerberosResponseError;
    }
    if (this._kerberosResponseFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosResponseFailure = this._kerberosResponseFailure;
    }
    if (this._kerberosResponseGet !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosResponseGet = this._kerberosResponseGet;
    }
    if (this._kerberosResponseOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosResponseOther = this._kerberosResponseOther;
    }
    if (this._kerberosResponseSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosResponseSuccess = this._kerberosResponseSuccess;
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
    if (this._kerberosValidateKdcSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosValidateKdcSuccess = this._kerberosValidateKdcSuccess;
    }
    if (this._ntlmAuthenticationFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmAuthenticationFailure = this._ntlmAuthenticationFailure;
    }
    if (this._ntlmAuthenticationSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmAuthenticationSuccess = this._ntlmAuthenticationSuccess;
    }
    if (this._ntlmJobStartError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmJobStartError = this._ntlmJobStartError;
    }
    if (this._ntlmOtherError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmOtherError = this._ntlmOtherError;
    }
    if (this._ntlmPollingControlError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmPollingControlError = this._ntlmPollingControlError;
    }
    if (this._ntlmPrepareReqFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmPrepareReqFailed = this._ntlmPrepareReqFailed;
    }
    if (this._ntlmPrepareReqSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmPrepareReqSuccess = this._ntlmPrepareReqSuccess;
    }
    if (this._ntlmProtoNegotiationFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmProtoNegotiationFailure = this._ntlmProtoNegotiationFailure;
    }
    if (this._ntlmProtoNegotiationSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmProtoNegotiationSuccess = this._ntlmProtoNegotiationSuccess;
    }
    if (this._ntlmRequestDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmRequestDropped = this._ntlmRequestDropped;
    }
    if (this._ntlmRequestNormal !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmRequestNormal = this._ntlmRequestNormal;
    }
    if (this._ntlmResponseError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmResponseError = this._ntlmResponseError;
    }
    if (this._ntlmResponseFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmResponseFailure = this._ntlmResponseFailure;
    }
    if (this._ntlmResponseOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmResponseOther = this._ntlmResponseOther;
    }
    if (this._ntlmResponseSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmResponseSuccess = this._ntlmResponseSuccess;
    }
    if (this._ntlmResponseTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmResponseTimeout = this._ntlmResponseTimeout;
    }
    if (this._ntlmSessionSetupFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmSessionSetupFailed = this._ntlmSessionSetupFailed;
    }
    if (this._ntlmSessionSetupSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmSessionSetupSuccess = this._ntlmSessionSetupSuccess;
    }
    if (this._ntlmTimeoutError !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmTimeoutError = this._ntlmTimeoutError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationServerWindowsStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kerberosDeleteKdcKeytabFailure = undefined;
      this._kerberosDeleteKdcKeytabSuccess = undefined;
      this._kerberosGenerateKdcKeytabFailure = undefined;
      this._kerberosGenerateKdcKeytabSuccess = undefined;
      this._kerberosJobStartError = undefined;
      this._kerberosKdcKeytabCount = undefined;
      this._kerberosOtherError = undefined;
      this._kerberosPollingControlError = undefined;
      this._kerberosPwChangeFailure = undefined;
      this._kerberosPwChangeSuccess = undefined;
      this._kerberosPwExpiry = undefined;
      this._kerberosRequestDropped = undefined;
      this._kerberosRequestNormal = undefined;
      this._kerberosRequestSend = undefined;
      this._kerberosResponseError = undefined;
      this._kerberosResponseFailure = undefined;
      this._kerberosResponseGet = undefined;
      this._kerberosResponseOther = undefined;
      this._kerberosResponseSuccess = undefined;
      this._kerberosResponseTimeout = undefined;
      this._kerberosTimeoutError = undefined;
      this._kerberosValidateKdcFailure = undefined;
      this._kerberosValidateKdcSuccess = undefined;
      this._ntlmAuthenticationFailure = undefined;
      this._ntlmAuthenticationSuccess = undefined;
      this._ntlmJobStartError = undefined;
      this._ntlmOtherError = undefined;
      this._ntlmPollingControlError = undefined;
      this._ntlmPrepareReqFailed = undefined;
      this._ntlmPrepareReqSuccess = undefined;
      this._ntlmProtoNegotiationFailure = undefined;
      this._ntlmProtoNegotiationSuccess = undefined;
      this._ntlmRequestDropped = undefined;
      this._ntlmRequestNormal = undefined;
      this._ntlmResponseError = undefined;
      this._ntlmResponseFailure = undefined;
      this._ntlmResponseOther = undefined;
      this._ntlmResponseSuccess = undefined;
      this._ntlmResponseTimeout = undefined;
      this._ntlmSessionSetupFailed = undefined;
      this._ntlmSessionSetupSuccess = undefined;
      this._ntlmTimeoutError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kerberosDeleteKdcKeytabFailure = value.kerberosDeleteKdcKeytabFailure;
      this._kerberosDeleteKdcKeytabSuccess = value.kerberosDeleteKdcKeytabSuccess;
      this._kerberosGenerateKdcKeytabFailure = value.kerberosGenerateKdcKeytabFailure;
      this._kerberosGenerateKdcKeytabSuccess = value.kerberosGenerateKdcKeytabSuccess;
      this._kerberosJobStartError = value.kerberosJobStartError;
      this._kerberosKdcKeytabCount = value.kerberosKdcKeytabCount;
      this._kerberosOtherError = value.kerberosOtherError;
      this._kerberosPollingControlError = value.kerberosPollingControlError;
      this._kerberosPwChangeFailure = value.kerberosPwChangeFailure;
      this._kerberosPwChangeSuccess = value.kerberosPwChangeSuccess;
      this._kerberosPwExpiry = value.kerberosPwExpiry;
      this._kerberosRequestDropped = value.kerberosRequestDropped;
      this._kerberosRequestNormal = value.kerberosRequestNormal;
      this._kerberosRequestSend = value.kerberosRequestSend;
      this._kerberosResponseError = value.kerberosResponseError;
      this._kerberosResponseFailure = value.kerberosResponseFailure;
      this._kerberosResponseGet = value.kerberosResponseGet;
      this._kerberosResponseOther = value.kerberosResponseOther;
      this._kerberosResponseSuccess = value.kerberosResponseSuccess;
      this._kerberosResponseTimeout = value.kerberosResponseTimeout;
      this._kerberosTimeoutError = value.kerberosTimeoutError;
      this._kerberosValidateKdcFailure = value.kerberosValidateKdcFailure;
      this._kerberosValidateKdcSuccess = value.kerberosValidateKdcSuccess;
      this._ntlmAuthenticationFailure = value.ntlmAuthenticationFailure;
      this._ntlmAuthenticationSuccess = value.ntlmAuthenticationSuccess;
      this._ntlmJobStartError = value.ntlmJobStartError;
      this._ntlmOtherError = value.ntlmOtherError;
      this._ntlmPollingControlError = value.ntlmPollingControlError;
      this._ntlmPrepareReqFailed = value.ntlmPrepareReqFailed;
      this._ntlmPrepareReqSuccess = value.ntlmPrepareReqSuccess;
      this._ntlmProtoNegotiationFailure = value.ntlmProtoNegotiationFailure;
      this._ntlmProtoNegotiationSuccess = value.ntlmProtoNegotiationSuccess;
      this._ntlmRequestDropped = value.ntlmRequestDropped;
      this._ntlmRequestNormal = value.ntlmRequestNormal;
      this._ntlmResponseError = value.ntlmResponseError;
      this._ntlmResponseFailure = value.ntlmResponseFailure;
      this._ntlmResponseOther = value.ntlmResponseOther;
      this._ntlmResponseSuccess = value.ntlmResponseSuccess;
      this._ntlmResponseTimeout = value.ntlmResponseTimeout;
      this._ntlmSessionSetupFailed = value.ntlmSessionSetupFailed;
      this._ntlmSessionSetupSuccess = value.ntlmSessionSetupSuccess;
      this._ntlmTimeoutError = value.ntlmTimeoutError;
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

  // kerberos_delete_kdc_keytab_success - computed: false, optional: true, required: false
  private _kerberosDeleteKdcKeytabSuccess?: number; 
  public get kerberosDeleteKdcKeytabSuccess() {
    return this.getNumberAttribute('kerberos_delete_kdc_keytab_success');
  }
  public set kerberosDeleteKdcKeytabSuccess(value: number) {
    this._kerberosDeleteKdcKeytabSuccess = value;
  }
  public resetKerberosDeleteKdcKeytabSuccess() {
    this._kerberosDeleteKdcKeytabSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosDeleteKdcKeytabSuccessInput() {
    return this._kerberosDeleteKdcKeytabSuccess;
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

  // kerberos_generate_kdc_keytab_success - computed: false, optional: true, required: false
  private _kerberosGenerateKdcKeytabSuccess?: number; 
  public get kerberosGenerateKdcKeytabSuccess() {
    return this.getNumberAttribute('kerberos_generate_kdc_keytab_success');
  }
  public set kerberosGenerateKdcKeytabSuccess(value: number) {
    this._kerberosGenerateKdcKeytabSuccess = value;
  }
  public resetKerberosGenerateKdcKeytabSuccess() {
    this._kerberosGenerateKdcKeytabSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosGenerateKdcKeytabSuccessInput() {
    return this._kerberosGenerateKdcKeytabSuccess;
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

  // kerberos_kdc_keytab_count - computed: false, optional: true, required: false
  private _kerberosKdcKeytabCount?: number; 
  public get kerberosKdcKeytabCount() {
    return this.getNumberAttribute('kerberos_kdc_keytab_count');
  }
  public set kerberosKdcKeytabCount(value: number) {
    this._kerberosKdcKeytabCount = value;
  }
  public resetKerberosKdcKeytabCount() {
    this._kerberosKdcKeytabCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosKdcKeytabCountInput() {
    return this._kerberosKdcKeytabCount;
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

  // kerberos_pw_change_success - computed: false, optional: true, required: false
  private _kerberosPwChangeSuccess?: number; 
  public get kerberosPwChangeSuccess() {
    return this.getNumberAttribute('kerberos_pw_change_success');
  }
  public set kerberosPwChangeSuccess(value: number) {
    this._kerberosPwChangeSuccess = value;
  }
  public resetKerberosPwChangeSuccess() {
    this._kerberosPwChangeSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosPwChangeSuccessInput() {
    return this._kerberosPwChangeSuccess;
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

  // kerberos_request_normal - computed: false, optional: true, required: false
  private _kerberosRequestNormal?: number; 
  public get kerberosRequestNormal() {
    return this.getNumberAttribute('kerberos_request_normal');
  }
  public set kerberosRequestNormal(value: number) {
    this._kerberosRequestNormal = value;
  }
  public resetKerberosRequestNormal() {
    this._kerberosRequestNormal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosRequestNormalInput() {
    return this._kerberosRequestNormal;
  }

  // kerberos_request_send - computed: false, optional: true, required: false
  private _kerberosRequestSend?: number; 
  public get kerberosRequestSend() {
    return this.getNumberAttribute('kerberos_request_send');
  }
  public set kerberosRequestSend(value: number) {
    this._kerberosRequestSend = value;
  }
  public resetKerberosRequestSend() {
    this._kerberosRequestSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosRequestSendInput() {
    return this._kerberosRequestSend;
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

  // kerberos_response_get - computed: false, optional: true, required: false
  private _kerberosResponseGet?: number; 
  public get kerberosResponseGet() {
    return this.getNumberAttribute('kerberos_response_get');
  }
  public set kerberosResponseGet(value: number) {
    this._kerberosResponseGet = value;
  }
  public resetKerberosResponseGet() {
    this._kerberosResponseGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosResponseGetInput() {
    return this._kerberosResponseGet;
  }

  // kerberos_response_other - computed: false, optional: true, required: false
  private _kerberosResponseOther?: number; 
  public get kerberosResponseOther() {
    return this.getNumberAttribute('kerberos_response_other');
  }
  public set kerberosResponseOther(value: number) {
    this._kerberosResponseOther = value;
  }
  public resetKerberosResponseOther() {
    this._kerberosResponseOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosResponseOtherInput() {
    return this._kerberosResponseOther;
  }

  // kerberos_response_success - computed: false, optional: true, required: false
  private _kerberosResponseSuccess?: number; 
  public get kerberosResponseSuccess() {
    return this.getNumberAttribute('kerberos_response_success');
  }
  public set kerberosResponseSuccess(value: number) {
    this._kerberosResponseSuccess = value;
  }
  public resetKerberosResponseSuccess() {
    this._kerberosResponseSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosResponseSuccessInput() {
    return this._kerberosResponseSuccess;
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

  // kerberos_validate_kdc_success - computed: false, optional: true, required: false
  private _kerberosValidateKdcSuccess?: number; 
  public get kerberosValidateKdcSuccess() {
    return this.getNumberAttribute('kerberos_validate_kdc_success');
  }
  public set kerberosValidateKdcSuccess(value: number) {
    this._kerberosValidateKdcSuccess = value;
  }
  public resetKerberosValidateKdcSuccess() {
    this._kerberosValidateKdcSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosValidateKdcSuccessInput() {
    return this._kerberosValidateKdcSuccess;
  }

  // ntlm_authentication_failure - computed: false, optional: true, required: false
  private _ntlmAuthenticationFailure?: number; 
  public get ntlmAuthenticationFailure() {
    return this.getNumberAttribute('ntlm_authentication_failure');
  }
  public set ntlmAuthenticationFailure(value: number) {
    this._ntlmAuthenticationFailure = value;
  }
  public resetNtlmAuthenticationFailure() {
    this._ntlmAuthenticationFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmAuthenticationFailureInput() {
    return this._ntlmAuthenticationFailure;
  }

  // ntlm_authentication_success - computed: false, optional: true, required: false
  private _ntlmAuthenticationSuccess?: number; 
  public get ntlmAuthenticationSuccess() {
    return this.getNumberAttribute('ntlm_authentication_success');
  }
  public set ntlmAuthenticationSuccess(value: number) {
    this._ntlmAuthenticationSuccess = value;
  }
  public resetNtlmAuthenticationSuccess() {
    this._ntlmAuthenticationSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmAuthenticationSuccessInput() {
    return this._ntlmAuthenticationSuccess;
  }

  // ntlm_job_start_error - computed: false, optional: true, required: false
  private _ntlmJobStartError?: number; 
  public get ntlmJobStartError() {
    return this.getNumberAttribute('ntlm_job_start_error');
  }
  public set ntlmJobStartError(value: number) {
    this._ntlmJobStartError = value;
  }
  public resetNtlmJobStartError() {
    this._ntlmJobStartError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmJobStartErrorInput() {
    return this._ntlmJobStartError;
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

  // ntlm_polling_control_error - computed: false, optional: true, required: false
  private _ntlmPollingControlError?: number; 
  public get ntlmPollingControlError() {
    return this.getNumberAttribute('ntlm_polling_control_error');
  }
  public set ntlmPollingControlError(value: number) {
    this._ntlmPollingControlError = value;
  }
  public resetNtlmPollingControlError() {
    this._ntlmPollingControlError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmPollingControlErrorInput() {
    return this._ntlmPollingControlError;
  }

  // ntlm_prepare_req_failed - computed: false, optional: true, required: false
  private _ntlmPrepareReqFailed?: number; 
  public get ntlmPrepareReqFailed() {
    return this.getNumberAttribute('ntlm_prepare_req_failed');
  }
  public set ntlmPrepareReqFailed(value: number) {
    this._ntlmPrepareReqFailed = value;
  }
  public resetNtlmPrepareReqFailed() {
    this._ntlmPrepareReqFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmPrepareReqFailedInput() {
    return this._ntlmPrepareReqFailed;
  }

  // ntlm_prepare_req_success - computed: false, optional: true, required: false
  private _ntlmPrepareReqSuccess?: number; 
  public get ntlmPrepareReqSuccess() {
    return this.getNumberAttribute('ntlm_prepare_req_success');
  }
  public set ntlmPrepareReqSuccess(value: number) {
    this._ntlmPrepareReqSuccess = value;
  }
  public resetNtlmPrepareReqSuccess() {
    this._ntlmPrepareReqSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmPrepareReqSuccessInput() {
    return this._ntlmPrepareReqSuccess;
  }

  // ntlm_proto_negotiation_failure - computed: false, optional: true, required: false
  private _ntlmProtoNegotiationFailure?: number; 
  public get ntlmProtoNegotiationFailure() {
    return this.getNumberAttribute('ntlm_proto_negotiation_failure');
  }
  public set ntlmProtoNegotiationFailure(value: number) {
    this._ntlmProtoNegotiationFailure = value;
  }
  public resetNtlmProtoNegotiationFailure() {
    this._ntlmProtoNegotiationFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmProtoNegotiationFailureInput() {
    return this._ntlmProtoNegotiationFailure;
  }

  // ntlm_proto_negotiation_success - computed: false, optional: true, required: false
  private _ntlmProtoNegotiationSuccess?: number; 
  public get ntlmProtoNegotiationSuccess() {
    return this.getNumberAttribute('ntlm_proto_negotiation_success');
  }
  public set ntlmProtoNegotiationSuccess(value: number) {
    this._ntlmProtoNegotiationSuccess = value;
  }
  public resetNtlmProtoNegotiationSuccess() {
    this._ntlmProtoNegotiationSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmProtoNegotiationSuccessInput() {
    return this._ntlmProtoNegotiationSuccess;
  }

  // ntlm_request_dropped - computed: false, optional: true, required: false
  private _ntlmRequestDropped?: number; 
  public get ntlmRequestDropped() {
    return this.getNumberAttribute('ntlm_request_dropped');
  }
  public set ntlmRequestDropped(value: number) {
    this._ntlmRequestDropped = value;
  }
  public resetNtlmRequestDropped() {
    this._ntlmRequestDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmRequestDroppedInput() {
    return this._ntlmRequestDropped;
  }

  // ntlm_request_normal - computed: false, optional: true, required: false
  private _ntlmRequestNormal?: number; 
  public get ntlmRequestNormal() {
    return this.getNumberAttribute('ntlm_request_normal');
  }
  public set ntlmRequestNormal(value: number) {
    this._ntlmRequestNormal = value;
  }
  public resetNtlmRequestNormal() {
    this._ntlmRequestNormal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmRequestNormalInput() {
    return this._ntlmRequestNormal;
  }

  // ntlm_response_error - computed: false, optional: true, required: false
  private _ntlmResponseError?: number; 
  public get ntlmResponseError() {
    return this.getNumberAttribute('ntlm_response_error');
  }
  public set ntlmResponseError(value: number) {
    this._ntlmResponseError = value;
  }
  public resetNtlmResponseError() {
    this._ntlmResponseError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmResponseErrorInput() {
    return this._ntlmResponseError;
  }

  // ntlm_response_failure - computed: false, optional: true, required: false
  private _ntlmResponseFailure?: number; 
  public get ntlmResponseFailure() {
    return this.getNumberAttribute('ntlm_response_failure');
  }
  public set ntlmResponseFailure(value: number) {
    this._ntlmResponseFailure = value;
  }
  public resetNtlmResponseFailure() {
    this._ntlmResponseFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmResponseFailureInput() {
    return this._ntlmResponseFailure;
  }

  // ntlm_response_other - computed: false, optional: true, required: false
  private _ntlmResponseOther?: number; 
  public get ntlmResponseOther() {
    return this.getNumberAttribute('ntlm_response_other');
  }
  public set ntlmResponseOther(value: number) {
    this._ntlmResponseOther = value;
  }
  public resetNtlmResponseOther() {
    this._ntlmResponseOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmResponseOtherInput() {
    return this._ntlmResponseOther;
  }

  // ntlm_response_success - computed: false, optional: true, required: false
  private _ntlmResponseSuccess?: number; 
  public get ntlmResponseSuccess() {
    return this.getNumberAttribute('ntlm_response_success');
  }
  public set ntlmResponseSuccess(value: number) {
    this._ntlmResponseSuccess = value;
  }
  public resetNtlmResponseSuccess() {
    this._ntlmResponseSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmResponseSuccessInput() {
    return this._ntlmResponseSuccess;
  }

  // ntlm_response_timeout - computed: false, optional: true, required: false
  private _ntlmResponseTimeout?: number; 
  public get ntlmResponseTimeout() {
    return this.getNumberAttribute('ntlm_response_timeout');
  }
  public set ntlmResponseTimeout(value: number) {
    this._ntlmResponseTimeout = value;
  }
  public resetNtlmResponseTimeout() {
    this._ntlmResponseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmResponseTimeoutInput() {
    return this._ntlmResponseTimeout;
  }

  // ntlm_session_setup_failed - computed: false, optional: true, required: false
  private _ntlmSessionSetupFailed?: number; 
  public get ntlmSessionSetupFailed() {
    return this.getNumberAttribute('ntlm_session_setup_failed');
  }
  public set ntlmSessionSetupFailed(value: number) {
    this._ntlmSessionSetupFailed = value;
  }
  public resetNtlmSessionSetupFailed() {
    this._ntlmSessionSetupFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmSessionSetupFailedInput() {
    return this._ntlmSessionSetupFailed;
  }

  // ntlm_session_setup_success - computed: false, optional: true, required: false
  private _ntlmSessionSetupSuccess?: number; 
  public get ntlmSessionSetupSuccess() {
    return this.getNumberAttribute('ntlm_session_setup_success');
  }
  public set ntlmSessionSetupSuccess(value: number) {
    this._ntlmSessionSetupSuccess = value;
  }
  public resetNtlmSessionSetupSuccess() {
    this._ntlmSessionSetupSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmSessionSetupSuccessInput() {
    return this._ntlmSessionSetupSuccess;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats thunder_aam_authentication_server_windows_stats}
*/
export class DataThunderAamAuthenticationServerWindowsStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_server_windows_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthenticationServerWindowsStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthenticationServerWindowsStats to import
  * @param importFromId The id of the existing DataThunderAamAuthenticationServerWindowsStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthenticationServerWindowsStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_server_windows_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_windows_stats thunder_aam_authentication_server_windows_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthenticationServerWindowsStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthenticationServerWindowsStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_server_windows_stats',
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
    this._instanceList.internalValue = config.instanceList;
    this._stats.internalValue = config.stats;
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

  // instance_list - computed: false, optional: true, required: false
  private _instanceList = new DataThunderAamAuthenticationServerWindowsStatsInstanceListStructList(this, "instance_list", false);
  public get instanceList() {
    return this._instanceList;
  }
  public putInstanceList(value: DataThunderAamAuthenticationServerWindowsStatsInstanceListStruct[] | cdktf.IResolvable) {
    this._instanceList.internalValue = value;
  }
  public resetInstanceList() {
    this._instanceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceListInput() {
    return this._instanceList.internalValue;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderAamAuthenticationServerWindowsStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamAuthenticationServerWindowsStatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_list: cdktf.listMapper(dataThunderAamAuthenticationServerWindowsStatsInstanceListStructToTerraform, true)(this._instanceList.internalValue),
      stats: dataThunderAamAuthenticationServerWindowsStatsStatsToTerraform(this._stats.internalValue),
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
      instance_list: {
        value: cdktf.listMapperHcl(dataThunderAamAuthenticationServerWindowsStatsInstanceListStructToHclTerraform, true)(this._instanceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationServerWindowsStatsInstanceListStructList",
      },
      stats: {
        value: dataThunderAamAuthenticationServerWindowsStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationServerWindowsStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
