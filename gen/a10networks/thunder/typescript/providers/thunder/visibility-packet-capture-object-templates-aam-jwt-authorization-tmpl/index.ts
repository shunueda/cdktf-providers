// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify name of the capture-config to use with this template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#capture_config VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#capture_config}
  */
  readonly captureConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#id VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Packet Capture Template Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#name VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#user_tag VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#uuid VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#uuid}
  */
  readonly uuid?: string;
  /**
  * trigger_stats_inc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#trigger_stats_inc VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#trigger_stats_inc}
  */
  readonly triggerStatsInc?: VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsInc;
  /**
  * trigger_stats_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#trigger_stats_rate VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#trigger_stats_rate}
  */
  readonly triggerStatsRate?: VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRate;
  /**
  * trigger_stats_severity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#trigger_stats_severity VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#trigger_stats_severity}
  */
  readonly triggerStatsSeverity?: VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsSeverity;
}
export interface VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsInc {
  /**
  * Enable automatic packet-capture for JWT Authorize Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#jwt_authorize_failure VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#jwt_authorize_failure}
  */
  readonly jwtAuthorizeFailure?: number;
  /**
  * Enable automatic packet-capture for JWT Missing Claim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#jwt_missing_claim VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#jwt_missing_claim}
  */
  readonly jwtMissingClaim?: number;
  /**
  * Enable automatic packet-capture for JWT Missing Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#jwt_missing_token VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#jwt_missing_token}
  */
  readonly jwtMissingToken?: number;
  /**
  * Enable automatic packet-capture for JWT Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#jwt_other_error VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#jwt_other_error}
  */
  readonly jwtOtherError?: number;
  /**
  * Enable automatic packet-capture for JWT Signature Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#jwt_signature_failure VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#jwt_signature_failure}
  */
  readonly jwtSignatureFailure?: number;
  /**
  * Enable automatic packet-capture for JWT Token Expired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#jwt_token_expired VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#jwt_token_expired}
  */
  readonly jwtTokenExpired?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#uuid VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsIncToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsIncOutputReference | VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsInc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jwt_authorize_failure: cdktf.numberToTerraform(struct!.jwtAuthorizeFailure),
    jwt_missing_claim: cdktf.numberToTerraform(struct!.jwtMissingClaim),
    jwt_missing_token: cdktf.numberToTerraform(struct!.jwtMissingToken),
    jwt_other_error: cdktf.numberToTerraform(struct!.jwtOtherError),
    jwt_signature_failure: cdktf.numberToTerraform(struct!.jwtSignatureFailure),
    jwt_token_expired: cdktf.numberToTerraform(struct!.jwtTokenExpired),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsIncToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsIncOutputReference | VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsInc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jwt_authorize_failure: {
      value: cdktf.numberToHclTerraform(struct!.jwtAuthorizeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jwt_missing_claim: {
      value: cdktf.numberToHclTerraform(struct!.jwtMissingClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jwt_missing_token: {
      value: cdktf.numberToHclTerraform(struct!.jwtMissingToken),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jwt_other_error: {
      value: cdktf.numberToHclTerraform(struct!.jwtOtherError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jwt_signature_failure: {
      value: cdktf.numberToHclTerraform(struct!.jwtSignatureFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jwt_token_expired: {
      value: cdktf.numberToHclTerraform(struct!.jwtTokenExpired),
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

export class VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsIncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsInc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jwtAuthorizeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtAuthorizeFailure = this._jwtAuthorizeFailure;
    }
    if (this._jwtMissingClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtMissingClaim = this._jwtMissingClaim;
    }
    if (this._jwtMissingToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtMissingToken = this._jwtMissingToken;
    }
    if (this._jwtOtherError !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtOtherError = this._jwtOtherError;
    }
    if (this._jwtSignatureFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtSignatureFailure = this._jwtSignatureFailure;
    }
    if (this._jwtTokenExpired !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtTokenExpired = this._jwtTokenExpired;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsInc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jwtAuthorizeFailure = undefined;
      this._jwtMissingClaim = undefined;
      this._jwtMissingToken = undefined;
      this._jwtOtherError = undefined;
      this._jwtSignatureFailure = undefined;
      this._jwtTokenExpired = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jwtAuthorizeFailure = value.jwtAuthorizeFailure;
      this._jwtMissingClaim = value.jwtMissingClaim;
      this._jwtMissingToken = value.jwtMissingToken;
      this._jwtOtherError = value.jwtOtherError;
      this._jwtSignatureFailure = value.jwtSignatureFailure;
      this._jwtTokenExpired = value.jwtTokenExpired;
      this._uuid = value.uuid;
    }
  }

  // jwt_authorize_failure - computed: false, optional: true, required: false
  private _jwtAuthorizeFailure?: number; 
  public get jwtAuthorizeFailure() {
    return this.getNumberAttribute('jwt_authorize_failure');
  }
  public set jwtAuthorizeFailure(value: number) {
    this._jwtAuthorizeFailure = value;
  }
  public resetJwtAuthorizeFailure() {
    this._jwtAuthorizeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtAuthorizeFailureInput() {
    return this._jwtAuthorizeFailure;
  }

  // jwt_missing_claim - computed: false, optional: true, required: false
  private _jwtMissingClaim?: number; 
  public get jwtMissingClaim() {
    return this.getNumberAttribute('jwt_missing_claim');
  }
  public set jwtMissingClaim(value: number) {
    this._jwtMissingClaim = value;
  }
  public resetJwtMissingClaim() {
    this._jwtMissingClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtMissingClaimInput() {
    return this._jwtMissingClaim;
  }

  // jwt_missing_token - computed: false, optional: true, required: false
  private _jwtMissingToken?: number; 
  public get jwtMissingToken() {
    return this.getNumberAttribute('jwt_missing_token');
  }
  public set jwtMissingToken(value: number) {
    this._jwtMissingToken = value;
  }
  public resetJwtMissingToken() {
    this._jwtMissingToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtMissingTokenInput() {
    return this._jwtMissingToken;
  }

  // jwt_other_error - computed: false, optional: true, required: false
  private _jwtOtherError?: number; 
  public get jwtOtherError() {
    return this.getNumberAttribute('jwt_other_error');
  }
  public set jwtOtherError(value: number) {
    this._jwtOtherError = value;
  }
  public resetJwtOtherError() {
    this._jwtOtherError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtOtherErrorInput() {
    return this._jwtOtherError;
  }

  // jwt_signature_failure - computed: false, optional: true, required: false
  private _jwtSignatureFailure?: number; 
  public get jwtSignatureFailure() {
    return this.getNumberAttribute('jwt_signature_failure');
  }
  public set jwtSignatureFailure(value: number) {
    this._jwtSignatureFailure = value;
  }
  public resetJwtSignatureFailure() {
    this._jwtSignatureFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtSignatureFailureInput() {
    return this._jwtSignatureFailure;
  }

  // jwt_token_expired - computed: false, optional: true, required: false
  private _jwtTokenExpired?: number; 
  public get jwtTokenExpired() {
    return this.getNumberAttribute('jwt_token_expired');
  }
  public set jwtTokenExpired(value: number) {
    this._jwtTokenExpired = value;
  }
  public resetJwtTokenExpired() {
    this._jwtTokenExpired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtTokenExpiredInput() {
    return this._jwtTokenExpired;
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
export interface VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRate {
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#duration VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#duration}
  */
  readonly duration?: number;
  /**
  * Enable automatic packet-capture for JWT Authorize Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#jwt_authorize_failure VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#jwt_authorize_failure}
  */
  readonly jwtAuthorizeFailure?: number;
  /**
  * Enable automatic packet-capture for JWT Missing Claim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#jwt_missing_claim VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#jwt_missing_claim}
  */
  readonly jwtMissingClaim?: number;
  /**
  * Enable automatic packet-capture for JWT Missing Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#jwt_missing_token VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#jwt_missing_token}
  */
  readonly jwtMissingToken?: number;
  /**
  * Enable automatic packet-capture for JWT Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#jwt_other_error VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#jwt_other_error}
  */
  readonly jwtOtherError?: number;
  /**
  * Enable automatic packet-capture for JWT Signature Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#jwt_signature_failure VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#jwt_signature_failure}
  */
  readonly jwtSignatureFailure?: number;
  /**
  * Enable automatic packet-capture for JWT Token Expired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#jwt_token_expired VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#jwt_token_expired}
  */
  readonly jwtTokenExpired?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#threshold_exceeded_by VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#uuid VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRateToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRateOutputReference | VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.numberToTerraform(struct!.duration),
    jwt_authorize_failure: cdktf.numberToTerraform(struct!.jwtAuthorizeFailure),
    jwt_missing_claim: cdktf.numberToTerraform(struct!.jwtMissingClaim),
    jwt_missing_token: cdktf.numberToTerraform(struct!.jwtMissingToken),
    jwt_other_error: cdktf.numberToTerraform(struct!.jwtOtherError),
    jwt_signature_failure: cdktf.numberToTerraform(struct!.jwtSignatureFailure),
    jwt_token_expired: cdktf.numberToTerraform(struct!.jwtTokenExpired),
    threshold_exceeded_by: cdktf.numberToTerraform(struct!.thresholdExceededBy),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRateToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRateOutputReference | VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRate): any {
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
    jwt_authorize_failure: {
      value: cdktf.numberToHclTerraform(struct!.jwtAuthorizeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jwt_missing_claim: {
      value: cdktf.numberToHclTerraform(struct!.jwtMissingClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jwt_missing_token: {
      value: cdktf.numberToHclTerraform(struct!.jwtMissingToken),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jwt_other_error: {
      value: cdktf.numberToHclTerraform(struct!.jwtOtherError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jwt_signature_failure: {
      value: cdktf.numberToHclTerraform(struct!.jwtSignatureFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jwt_token_expired: {
      value: cdktf.numberToHclTerraform(struct!.jwtTokenExpired),
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

export class VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._jwtAuthorizeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtAuthorizeFailure = this._jwtAuthorizeFailure;
    }
    if (this._jwtMissingClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtMissingClaim = this._jwtMissingClaim;
    }
    if (this._jwtMissingToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtMissingToken = this._jwtMissingToken;
    }
    if (this._jwtOtherError !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtOtherError = this._jwtOtherError;
    }
    if (this._jwtSignatureFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtSignatureFailure = this._jwtSignatureFailure;
    }
    if (this._jwtTokenExpired !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtTokenExpired = this._jwtTokenExpired;
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

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._duration = undefined;
      this._jwtAuthorizeFailure = undefined;
      this._jwtMissingClaim = undefined;
      this._jwtMissingToken = undefined;
      this._jwtOtherError = undefined;
      this._jwtSignatureFailure = undefined;
      this._jwtTokenExpired = undefined;
      this._thresholdExceededBy = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._duration = value.duration;
      this._jwtAuthorizeFailure = value.jwtAuthorizeFailure;
      this._jwtMissingClaim = value.jwtMissingClaim;
      this._jwtMissingToken = value.jwtMissingToken;
      this._jwtOtherError = value.jwtOtherError;
      this._jwtSignatureFailure = value.jwtSignatureFailure;
      this._jwtTokenExpired = value.jwtTokenExpired;
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

  // jwt_authorize_failure - computed: false, optional: true, required: false
  private _jwtAuthorizeFailure?: number; 
  public get jwtAuthorizeFailure() {
    return this.getNumberAttribute('jwt_authorize_failure');
  }
  public set jwtAuthorizeFailure(value: number) {
    this._jwtAuthorizeFailure = value;
  }
  public resetJwtAuthorizeFailure() {
    this._jwtAuthorizeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtAuthorizeFailureInput() {
    return this._jwtAuthorizeFailure;
  }

  // jwt_missing_claim - computed: false, optional: true, required: false
  private _jwtMissingClaim?: number; 
  public get jwtMissingClaim() {
    return this.getNumberAttribute('jwt_missing_claim');
  }
  public set jwtMissingClaim(value: number) {
    this._jwtMissingClaim = value;
  }
  public resetJwtMissingClaim() {
    this._jwtMissingClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtMissingClaimInput() {
    return this._jwtMissingClaim;
  }

  // jwt_missing_token - computed: false, optional: true, required: false
  private _jwtMissingToken?: number; 
  public get jwtMissingToken() {
    return this.getNumberAttribute('jwt_missing_token');
  }
  public set jwtMissingToken(value: number) {
    this._jwtMissingToken = value;
  }
  public resetJwtMissingToken() {
    this._jwtMissingToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtMissingTokenInput() {
    return this._jwtMissingToken;
  }

  // jwt_other_error - computed: false, optional: true, required: false
  private _jwtOtherError?: number; 
  public get jwtOtherError() {
    return this.getNumberAttribute('jwt_other_error');
  }
  public set jwtOtherError(value: number) {
    this._jwtOtherError = value;
  }
  public resetJwtOtherError() {
    this._jwtOtherError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtOtherErrorInput() {
    return this._jwtOtherError;
  }

  // jwt_signature_failure - computed: false, optional: true, required: false
  private _jwtSignatureFailure?: number; 
  public get jwtSignatureFailure() {
    return this.getNumberAttribute('jwt_signature_failure');
  }
  public set jwtSignatureFailure(value: number) {
    this._jwtSignatureFailure = value;
  }
  public resetJwtSignatureFailure() {
    this._jwtSignatureFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtSignatureFailureInput() {
    return this._jwtSignatureFailure;
  }

  // jwt_token_expired - computed: false, optional: true, required: false
  private _jwtTokenExpired?: number; 
  public get jwtTokenExpired() {
    return this.getNumberAttribute('jwt_token_expired');
  }
  public set jwtTokenExpired(value: number) {
    this._jwtTokenExpired = value;
  }
  public resetJwtTokenExpired() {
    this._jwtTokenExpired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtTokenExpiredInput() {
    return this._jwtTokenExpired;
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
export interface VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsSeverity {
  /**
  * Enable packet capture on all drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#drop VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#drop}
  */
  readonly drop?: number;
  /**
  * Enable packet capture on all alert drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#drop_alert VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#drop_alert}
  */
  readonly dropAlert?: number;
  /**
  * Enable packet capture on all critical drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#drop_critical VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#drop_critical}
  */
  readonly dropCritical?: number;
  /**
  * Enable packet capture on all warning drop counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#drop_warning VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#drop_warning}
  */
  readonly dropWarning?: number;
  /**
  * Enable packet capture on all error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#error VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#error}
  */
  readonly error?: number;
  /**
  * Enable packet capture on all alert error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#error_alert VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#error_alert}
  */
  readonly errorAlert?: number;
  /**
  * Enable packet capture on all critical error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#error_critical VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#error_critical}
  */
  readonly errorCritical?: number;
  /**
  * Enable packet capture on all warning error counters (Default disabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#error_warning VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#error_warning}
  */
  readonly errorWarning?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#uuid VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl#uuid}
  */
  readonly uuid?: string;
}

export function visibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsSeverityToTerraform(struct?: VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsSeverityOutputReference | VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsSeverity): any {
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


export function visibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsSeverityToHclTerraform(struct?: VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsSeverityOutputReference | VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsSeverity): any {
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

export class VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsSeverityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsSeverity | undefined {
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

  public set internalValue(value: VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsSeverity | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl thunder_visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl}
*/
export class VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmpl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl thunder_visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl',
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
  private _triggerStatsInc = new VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsIncOutputReference(this, "trigger_stats_inc");
  public get triggerStatsInc() {
    return this._triggerStatsInc;
  }
  public putTriggerStatsInc(value: VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsInc) {
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
  private _triggerStatsRate = new VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRateOutputReference(this, "trigger_stats_rate");
  public get triggerStatsRate() {
    return this._triggerStatsRate;
  }
  public putTriggerStatsRate(value: VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRate) {
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
  private _triggerStatsSeverity = new VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsSeverityOutputReference(this, "trigger_stats_severity");
  public get triggerStatsSeverity() {
    return this._triggerStatsSeverity;
  }
  public putTriggerStatsSeverity(value: VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsSeverity) {
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
      trigger_stats_inc: visibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsIncToTerraform(this._triggerStatsInc.internalValue),
      trigger_stats_rate: visibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRateToTerraform(this._triggerStatsRate.internalValue),
      trigger_stats_severity: visibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsSeverityToTerraform(this._triggerStatsSeverity.internalValue),
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
        value: visibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsIncToHclTerraform(this._triggerStatsInc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsIncList",
      },
      trigger_stats_rate: {
        value: visibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRateToHclTerraform(this._triggerStatsRate.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRateList",
      },
      trigger_stats_severity: {
        value: visibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsSeverityToHclTerraform(this._triggerStatsSeverity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsSeverityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
