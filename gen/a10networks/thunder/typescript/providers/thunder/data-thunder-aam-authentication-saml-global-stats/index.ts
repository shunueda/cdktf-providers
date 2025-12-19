// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_saml_global_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthenticationSamlGlobalStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_saml_global_stats#id DataThunderAamAuthenticationSamlGlobalStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_saml_global_stats#stats DataThunderAamAuthenticationSamlGlobalStats#stats}
  */
  readonly stats?: DataThunderAamAuthenticationSamlGlobalStatsStats;
}
export interface DataThunderAamAuthenticationSamlGlobalStatsStats {
  /**
  * Total SAML Single-Sign-On Authorization Fail
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_saml_global_stats#acs_authz_fail DataThunderAamAuthenticationSamlGlobalStats#acs_authz_fail}
  */
  readonly acsAuthzFail?: number;
  /**
  * Total SAML Single-Sign-On Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_saml_global_stats#acs_error DataThunderAamAuthenticationSamlGlobalStats#acs_error}
  */
  readonly acsError?: number;
  /**
  * Total SAML Single-Sign-On Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_saml_global_stats#acs_req DataThunderAamAuthenticationSamlGlobalStats#acs_req}
  */
  readonly acsReq?: number;
  /**
  * Total SAML Single-Sign-On Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_saml_global_stats#acs_success DataThunderAamAuthenticationSamlGlobalStats#acs_success}
  */
  readonly acsSuccess?: number;
  /**
  * Total Global Logout Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_saml_global_stats#glo_slo_success DataThunderAamAuthenticationSamlGlobalStats#glo_slo_success}
  */
  readonly gloSloSuccess?: number;
  /**
  * Total Local Logout Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_saml_global_stats#loc_slo_success DataThunderAamAuthenticationSamlGlobalStats#loc_slo_success}
  */
  readonly locSloSuccess?: number;
  /**
  * Total Login Authentication Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_saml_global_stats#login_auth_req DataThunderAamAuthenticationSamlGlobalStats#login_auth_req}
  */
  readonly loginAuthReq?: number;
  /**
  * Total Login Authentication Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_saml_global_stats#login_auth_resp DataThunderAamAuthenticationSamlGlobalStats#login_auth_resp}
  */
  readonly loginAuthResp?: number;
  /**
  * Total Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_saml_global_stats#other_error DataThunderAamAuthenticationSamlGlobalStats#other_error}
  */
  readonly otherError?: number;
  /**
  * Total Partial Logout Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_saml_global_stats#par_slo_success DataThunderAamAuthenticationSamlGlobalStats#par_slo_success}
  */
  readonly parSloSuccess?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_saml_global_stats#relay_error DataThunderAamAuthenticationSamlGlobalStats#relay_error}
  */
  readonly relayError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_saml_global_stats#relay_fail DataThunderAamAuthenticationSamlGlobalStats#relay_fail}
  */
  readonly relayFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_saml_global_stats#relay_req DataThunderAamAuthenticationSamlGlobalStats#relay_req}
  */
  readonly relayReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_saml_global_stats#relay_success DataThunderAamAuthenticationSamlGlobalStats#relay_success}
  */
  readonly relaySuccess?: number;
  /**
  * Total Request to A10 SAML Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_saml_global_stats#requests_to_a10saml DataThunderAamAuthenticationSamlGlobalStats#requests_to_a10saml}
  */
  readonly requestsToA10Saml?: number;
  /**
  * Total Response from A10 SAML Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_saml_global_stats#responses_from_a10saml DataThunderAamAuthenticationSamlGlobalStats#responses_from_a10saml}
  */
  readonly responsesFromA10Saml?: number;
  /**
  * Total Single Logout Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_saml_global_stats#slo_error DataThunderAamAuthenticationSamlGlobalStats#slo_error}
  */
  readonly sloError?: number;
  /**
  * Total Single Logout Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_saml_global_stats#slo_req DataThunderAamAuthenticationSamlGlobalStats#slo_req}
  */
  readonly sloReq?: number;
  /**
  * Total Single Logout Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_saml_global_stats#slo_success DataThunderAamAuthenticationSamlGlobalStats#slo_success}
  */
  readonly sloSuccess?: number;
  /**
  * Total Metadata Export Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_saml_global_stats#sp_metadata_export_req DataThunderAamAuthenticationSamlGlobalStats#sp_metadata_export_req}
  */
  readonly spMetadataExportReq?: number;
  /**
  * Toal Metadata Export Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_saml_global_stats#sp_metadata_export_success DataThunderAamAuthenticationSamlGlobalStats#sp_metadata_export_success}
  */
  readonly spMetadataExportSuccess?: number;
  /**
  * Total SP-initiated Single Logout Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_saml_global_stats#sp_slo_req DataThunderAamAuthenticationSamlGlobalStats#sp_slo_req}
  */
  readonly spSloReq?: number;
}

export function dataThunderAamAuthenticationSamlGlobalStatsStatsToTerraform(struct?: DataThunderAamAuthenticationSamlGlobalStatsStatsOutputReference | DataThunderAamAuthenticationSamlGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acs_authz_fail: cdktf.numberToTerraform(struct!.acsAuthzFail),
    acs_error: cdktf.numberToTerraform(struct!.acsError),
    acs_req: cdktf.numberToTerraform(struct!.acsReq),
    acs_success: cdktf.numberToTerraform(struct!.acsSuccess),
    glo_slo_success: cdktf.numberToTerraform(struct!.gloSloSuccess),
    loc_slo_success: cdktf.numberToTerraform(struct!.locSloSuccess),
    login_auth_req: cdktf.numberToTerraform(struct!.loginAuthReq),
    login_auth_resp: cdktf.numberToTerraform(struct!.loginAuthResp),
    other_error: cdktf.numberToTerraform(struct!.otherError),
    par_slo_success: cdktf.numberToTerraform(struct!.parSloSuccess),
    relay_error: cdktf.numberToTerraform(struct!.relayError),
    relay_fail: cdktf.numberToTerraform(struct!.relayFail),
    relay_req: cdktf.numberToTerraform(struct!.relayReq),
    relay_success: cdktf.numberToTerraform(struct!.relaySuccess),
    requests_to_a10saml: cdktf.numberToTerraform(struct!.requestsToA10Saml),
    responses_from_a10saml: cdktf.numberToTerraform(struct!.responsesFromA10Saml),
    slo_error: cdktf.numberToTerraform(struct!.sloError),
    slo_req: cdktf.numberToTerraform(struct!.sloReq),
    slo_success: cdktf.numberToTerraform(struct!.sloSuccess),
    sp_metadata_export_req: cdktf.numberToTerraform(struct!.spMetadataExportReq),
    sp_metadata_export_success: cdktf.numberToTerraform(struct!.spMetadataExportSuccess),
    sp_slo_req: cdktf.numberToTerraform(struct!.spSloReq),
  }
}


export function dataThunderAamAuthenticationSamlGlobalStatsStatsToHclTerraform(struct?: DataThunderAamAuthenticationSamlGlobalStatsStatsOutputReference | DataThunderAamAuthenticationSamlGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acs_authz_fail: {
      value: cdktf.numberToHclTerraform(struct!.acsAuthzFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acs_error: {
      value: cdktf.numberToHclTerraform(struct!.acsError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acs_req: {
      value: cdktf.numberToHclTerraform(struct!.acsReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acs_success: {
      value: cdktf.numberToHclTerraform(struct!.acsSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    glo_slo_success: {
      value: cdktf.numberToHclTerraform(struct!.gloSloSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    loc_slo_success: {
      value: cdktf.numberToHclTerraform(struct!.locSloSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    login_auth_req: {
      value: cdktf.numberToHclTerraform(struct!.loginAuthReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    login_auth_resp: {
      value: cdktf.numberToHclTerraform(struct!.loginAuthResp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_error: {
      value: cdktf.numberToHclTerraform(struct!.otherError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    par_slo_success: {
      value: cdktf.numberToHclTerraform(struct!.parSloSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    relay_error: {
      value: cdktf.numberToHclTerraform(struct!.relayError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    relay_fail: {
      value: cdktf.numberToHclTerraform(struct!.relayFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    relay_req: {
      value: cdktf.numberToHclTerraform(struct!.relayReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    relay_success: {
      value: cdktf.numberToHclTerraform(struct!.relaySuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    requests_to_a10saml: {
      value: cdktf.numberToHclTerraform(struct!.requestsToA10Saml),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    responses_from_a10saml: {
      value: cdktf.numberToHclTerraform(struct!.responsesFromA10Saml),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slo_error: {
      value: cdktf.numberToHclTerraform(struct!.sloError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slo_req: {
      value: cdktf.numberToHclTerraform(struct!.sloReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slo_success: {
      value: cdktf.numberToHclTerraform(struct!.sloSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sp_metadata_export_req: {
      value: cdktf.numberToHclTerraform(struct!.spMetadataExportReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sp_metadata_export_success: {
      value: cdktf.numberToHclTerraform(struct!.spMetadataExportSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sp_slo_req: {
      value: cdktf.numberToHclTerraform(struct!.spSloReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationSamlGlobalStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationSamlGlobalStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acsAuthzFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.acsAuthzFail = this._acsAuthzFail;
    }
    if (this._acsError !== undefined) {
      hasAnyValues = true;
      internalValueResult.acsError = this._acsError;
    }
    if (this._acsReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.acsReq = this._acsReq;
    }
    if (this._acsSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.acsSuccess = this._acsSuccess;
    }
    if (this._gloSloSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.gloSloSuccess = this._gloSloSuccess;
    }
    if (this._locSloSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.locSloSuccess = this._locSloSuccess;
    }
    if (this._loginAuthReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginAuthReq = this._loginAuthReq;
    }
    if (this._loginAuthResp !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginAuthResp = this._loginAuthResp;
    }
    if (this._otherError !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherError = this._otherError;
    }
    if (this._parSloSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.parSloSuccess = this._parSloSuccess;
    }
    if (this._relayError !== undefined) {
      hasAnyValues = true;
      internalValueResult.relayError = this._relayError;
    }
    if (this._relayFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.relayFail = this._relayFail;
    }
    if (this._relayReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.relayReq = this._relayReq;
    }
    if (this._relaySuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.relaySuccess = this._relaySuccess;
    }
    if (this._requestsToA10Saml !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestsToA10Saml = this._requestsToA10Saml;
    }
    if (this._responsesFromA10Saml !== undefined) {
      hasAnyValues = true;
      internalValueResult.responsesFromA10Saml = this._responsesFromA10Saml;
    }
    if (this._sloError !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloError = this._sloError;
    }
    if (this._sloReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloReq = this._sloReq;
    }
    if (this._sloSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.sloSuccess = this._sloSuccess;
    }
    if (this._spMetadataExportReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.spMetadataExportReq = this._spMetadataExportReq;
    }
    if (this._spMetadataExportSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.spMetadataExportSuccess = this._spMetadataExportSuccess;
    }
    if (this._spSloReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.spSloReq = this._spSloReq;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationSamlGlobalStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acsAuthzFail = undefined;
      this._acsError = undefined;
      this._acsReq = undefined;
      this._acsSuccess = undefined;
      this._gloSloSuccess = undefined;
      this._locSloSuccess = undefined;
      this._loginAuthReq = undefined;
      this._loginAuthResp = undefined;
      this._otherError = undefined;
      this._parSloSuccess = undefined;
      this._relayError = undefined;
      this._relayFail = undefined;
      this._relayReq = undefined;
      this._relaySuccess = undefined;
      this._requestsToA10Saml = undefined;
      this._responsesFromA10Saml = undefined;
      this._sloError = undefined;
      this._sloReq = undefined;
      this._sloSuccess = undefined;
      this._spMetadataExportReq = undefined;
      this._spMetadataExportSuccess = undefined;
      this._spSloReq = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acsAuthzFail = value.acsAuthzFail;
      this._acsError = value.acsError;
      this._acsReq = value.acsReq;
      this._acsSuccess = value.acsSuccess;
      this._gloSloSuccess = value.gloSloSuccess;
      this._locSloSuccess = value.locSloSuccess;
      this._loginAuthReq = value.loginAuthReq;
      this._loginAuthResp = value.loginAuthResp;
      this._otherError = value.otherError;
      this._parSloSuccess = value.parSloSuccess;
      this._relayError = value.relayError;
      this._relayFail = value.relayFail;
      this._relayReq = value.relayReq;
      this._relaySuccess = value.relaySuccess;
      this._requestsToA10Saml = value.requestsToA10Saml;
      this._responsesFromA10Saml = value.responsesFromA10Saml;
      this._sloError = value.sloError;
      this._sloReq = value.sloReq;
      this._sloSuccess = value.sloSuccess;
      this._spMetadataExportReq = value.spMetadataExportReq;
      this._spMetadataExportSuccess = value.spMetadataExportSuccess;
      this._spSloReq = value.spSloReq;
    }
  }

  // acs_authz_fail - computed: false, optional: true, required: false
  private _acsAuthzFail?: number; 
  public get acsAuthzFail() {
    return this.getNumberAttribute('acs_authz_fail');
  }
  public set acsAuthzFail(value: number) {
    this._acsAuthzFail = value;
  }
  public resetAcsAuthzFail() {
    this._acsAuthzFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsAuthzFailInput() {
    return this._acsAuthzFail;
  }

  // acs_error - computed: false, optional: true, required: false
  private _acsError?: number; 
  public get acsError() {
    return this.getNumberAttribute('acs_error');
  }
  public set acsError(value: number) {
    this._acsError = value;
  }
  public resetAcsError() {
    this._acsError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsErrorInput() {
    return this._acsError;
  }

  // acs_req - computed: false, optional: true, required: false
  private _acsReq?: number; 
  public get acsReq() {
    return this.getNumberAttribute('acs_req');
  }
  public set acsReq(value: number) {
    this._acsReq = value;
  }
  public resetAcsReq() {
    this._acsReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsReqInput() {
    return this._acsReq;
  }

  // acs_success - computed: false, optional: true, required: false
  private _acsSuccess?: number; 
  public get acsSuccess() {
    return this.getNumberAttribute('acs_success');
  }
  public set acsSuccess(value: number) {
    this._acsSuccess = value;
  }
  public resetAcsSuccess() {
    this._acsSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acsSuccessInput() {
    return this._acsSuccess;
  }

  // glo_slo_success - computed: false, optional: true, required: false
  private _gloSloSuccess?: number; 
  public get gloSloSuccess() {
    return this.getNumberAttribute('glo_slo_success');
  }
  public set gloSloSuccess(value: number) {
    this._gloSloSuccess = value;
  }
  public resetGloSloSuccess() {
    this._gloSloSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gloSloSuccessInput() {
    return this._gloSloSuccess;
  }

  // loc_slo_success - computed: false, optional: true, required: false
  private _locSloSuccess?: number; 
  public get locSloSuccess() {
    return this.getNumberAttribute('loc_slo_success');
  }
  public set locSloSuccess(value: number) {
    this._locSloSuccess = value;
  }
  public resetLocSloSuccess() {
    this._locSloSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locSloSuccessInput() {
    return this._locSloSuccess;
  }

  // login_auth_req - computed: false, optional: true, required: false
  private _loginAuthReq?: number; 
  public get loginAuthReq() {
    return this.getNumberAttribute('login_auth_req');
  }
  public set loginAuthReq(value: number) {
    this._loginAuthReq = value;
  }
  public resetLoginAuthReq() {
    this._loginAuthReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginAuthReqInput() {
    return this._loginAuthReq;
  }

  // login_auth_resp - computed: false, optional: true, required: false
  private _loginAuthResp?: number; 
  public get loginAuthResp() {
    return this.getNumberAttribute('login_auth_resp');
  }
  public set loginAuthResp(value: number) {
    this._loginAuthResp = value;
  }
  public resetLoginAuthResp() {
    this._loginAuthResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginAuthRespInput() {
    return this._loginAuthResp;
  }

  // other_error - computed: false, optional: true, required: false
  private _otherError?: number; 
  public get otherError() {
    return this.getNumberAttribute('other_error');
  }
  public set otherError(value: number) {
    this._otherError = value;
  }
  public resetOtherError() {
    this._otherError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherErrorInput() {
    return this._otherError;
  }

  // par_slo_success - computed: false, optional: true, required: false
  private _parSloSuccess?: number; 
  public get parSloSuccess() {
    return this.getNumberAttribute('par_slo_success');
  }
  public set parSloSuccess(value: number) {
    this._parSloSuccess = value;
  }
  public resetParSloSuccess() {
    this._parSloSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parSloSuccessInput() {
    return this._parSloSuccess;
  }

  // relay_error - computed: false, optional: true, required: false
  private _relayError?: number; 
  public get relayError() {
    return this.getNumberAttribute('relay_error');
  }
  public set relayError(value: number) {
    this._relayError = value;
  }
  public resetRelayError() {
    this._relayError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayErrorInput() {
    return this._relayError;
  }

  // relay_fail - computed: false, optional: true, required: false
  private _relayFail?: number; 
  public get relayFail() {
    return this.getNumberAttribute('relay_fail');
  }
  public set relayFail(value: number) {
    this._relayFail = value;
  }
  public resetRelayFail() {
    this._relayFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayFailInput() {
    return this._relayFail;
  }

  // relay_req - computed: false, optional: true, required: false
  private _relayReq?: number; 
  public get relayReq() {
    return this.getNumberAttribute('relay_req');
  }
  public set relayReq(value: number) {
    this._relayReq = value;
  }
  public resetRelayReq() {
    this._relayReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayReqInput() {
    return this._relayReq;
  }

  // relay_success - computed: false, optional: true, required: false
  private _relaySuccess?: number; 
  public get relaySuccess() {
    return this.getNumberAttribute('relay_success');
  }
  public set relaySuccess(value: number) {
    this._relaySuccess = value;
  }
  public resetRelaySuccess() {
    this._relaySuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relaySuccessInput() {
    return this._relaySuccess;
  }

  // requests_to_a10saml - computed: false, optional: true, required: false
  private _requestsToA10Saml?: number; 
  public get requestsToA10Saml() {
    return this.getNumberAttribute('requests_to_a10saml');
  }
  public set requestsToA10Saml(value: number) {
    this._requestsToA10Saml = value;
  }
  public resetRequestsToA10Saml() {
    this._requestsToA10Saml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsToA10SamlInput() {
    return this._requestsToA10Saml;
  }

  // responses_from_a10saml - computed: false, optional: true, required: false
  private _responsesFromA10Saml?: number; 
  public get responsesFromA10Saml() {
    return this.getNumberAttribute('responses_from_a10saml');
  }
  public set responsesFromA10Saml(value: number) {
    this._responsesFromA10Saml = value;
  }
  public resetResponsesFromA10Saml() {
    this._responsesFromA10Saml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsesFromA10SamlInput() {
    return this._responsesFromA10Saml;
  }

  // slo_error - computed: false, optional: true, required: false
  private _sloError?: number; 
  public get sloError() {
    return this.getNumberAttribute('slo_error');
  }
  public set sloError(value: number) {
    this._sloError = value;
  }
  public resetSloError() {
    this._sloError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloErrorInput() {
    return this._sloError;
  }

  // slo_req - computed: false, optional: true, required: false
  private _sloReq?: number; 
  public get sloReq() {
    return this.getNumberAttribute('slo_req');
  }
  public set sloReq(value: number) {
    this._sloReq = value;
  }
  public resetSloReq() {
    this._sloReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloReqInput() {
    return this._sloReq;
  }

  // slo_success - computed: false, optional: true, required: false
  private _sloSuccess?: number; 
  public get sloSuccess() {
    return this.getNumberAttribute('slo_success');
  }
  public set sloSuccess(value: number) {
    this._sloSuccess = value;
  }
  public resetSloSuccess() {
    this._sloSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sloSuccessInput() {
    return this._sloSuccess;
  }

  // sp_metadata_export_req - computed: false, optional: true, required: false
  private _spMetadataExportReq?: number; 
  public get spMetadataExportReq() {
    return this.getNumberAttribute('sp_metadata_export_req');
  }
  public set spMetadataExportReq(value: number) {
    this._spMetadataExportReq = value;
  }
  public resetSpMetadataExportReq() {
    this._spMetadataExportReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spMetadataExportReqInput() {
    return this._spMetadataExportReq;
  }

  // sp_metadata_export_success - computed: false, optional: true, required: false
  private _spMetadataExportSuccess?: number; 
  public get spMetadataExportSuccess() {
    return this.getNumberAttribute('sp_metadata_export_success');
  }
  public set spMetadataExportSuccess(value: number) {
    this._spMetadataExportSuccess = value;
  }
  public resetSpMetadataExportSuccess() {
    this._spMetadataExportSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spMetadataExportSuccessInput() {
    return this._spMetadataExportSuccess;
  }

  // sp_slo_req - computed: false, optional: true, required: false
  private _spSloReq?: number; 
  public get spSloReq() {
    return this.getNumberAttribute('sp_slo_req');
  }
  public set spSloReq(value: number) {
    this._spSloReq = value;
  }
  public resetSpSloReq() {
    this._spSloReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spSloReqInput() {
    return this._spSloReq;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_saml_global_stats thunder_aam_authentication_saml_global_stats}
*/
export class DataThunderAamAuthenticationSamlGlobalStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_saml_global_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthenticationSamlGlobalStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthenticationSamlGlobalStats to import
  * @param importFromId The id of the existing DataThunderAamAuthenticationSamlGlobalStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_saml_global_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthenticationSamlGlobalStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_saml_global_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_saml_global_stats thunder_aam_authentication_saml_global_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthenticationSamlGlobalStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthenticationSamlGlobalStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_saml_global_stats',
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderAamAuthenticationSamlGlobalStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamAuthenticationSamlGlobalStatsStats) {
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
      stats: dataThunderAamAuthenticationSamlGlobalStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderAamAuthenticationSamlGlobalStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationSamlGlobalStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
