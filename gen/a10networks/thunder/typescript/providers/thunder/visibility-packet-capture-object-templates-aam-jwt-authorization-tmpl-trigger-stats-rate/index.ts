// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_rate
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRateAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Aam_jwt_authorization_tmpl_name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_rate#aam_jwt_authorization_tmpl_name VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRateA#aam_jwt_authorization_tmpl_name}
  */
  readonly aamJwtAuthorizationTmplName: string;
  /**
  * Time in seconds to look for the anomaly, default is 60
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_rate#duration VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRateA#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_rate#id VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRateA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for JWT Authorize Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_rate#jwt_authorize_failure VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRateA#jwt_authorize_failure}
  */
  readonly jwtAuthorizeFailure?: number;
  /**
  * Enable automatic packet-capture for JWT Missing Claim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_rate#jwt_missing_claim VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRateA#jwt_missing_claim}
  */
  readonly jwtMissingClaim?: number;
  /**
  * Enable automatic packet-capture for JWT Missing Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_rate#jwt_missing_token VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRateA#jwt_missing_token}
  */
  readonly jwtMissingToken?: number;
  /**
  * Enable automatic packet-capture for JWT Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_rate#jwt_other_error VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRateA#jwt_other_error}
  */
  readonly jwtOtherError?: number;
  /**
  * Enable automatic packet-capture for JWT Signature Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_rate#jwt_signature_failure VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRateA#jwt_signature_failure}
  */
  readonly jwtSignatureFailure?: number;
  /**
  * Enable automatic packet-capture for JWT Token Expired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_rate#jwt_token_expired VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRateA#jwt_token_expired}
  */
  readonly jwtTokenExpired?: number;
  /**
  * Set the threshold to the number of times greater than the previous duration to start the capture, default is 5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_rate#threshold_exceeded_by VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRateA#threshold_exceeded_by}
  */
  readonly thresholdExceededBy?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_rate#uuid VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRateA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_rate thunder_visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_rate}
*/
export class VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRateA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_rate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRateA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRateA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRateA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_rate#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRateA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_rate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_rate thunder_visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_rate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRateAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsRateAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_rate',
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
    this._aamJwtAuthorizationTmplName = config.aamJwtAuthorizationTmplName;
    this._duration = config.duration;
    this._id = config.id;
    this._jwtAuthorizeFailure = config.jwtAuthorizeFailure;
    this._jwtMissingClaim = config.jwtMissingClaim;
    this._jwtMissingToken = config.jwtMissingToken;
    this._jwtOtherError = config.jwtOtherError;
    this._jwtSignatureFailure = config.jwtSignatureFailure;
    this._jwtTokenExpired = config.jwtTokenExpired;
    this._thresholdExceededBy = config.thresholdExceededBy;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aam_jwt_authorization_tmpl_name - computed: false, optional: false, required: true
  private _aamJwtAuthorizationTmplName?: string; 
  public get aamJwtAuthorizationTmplName() {
    return this.getStringAttribute('aam_jwt_authorization_tmpl_name');
  }
  public set aamJwtAuthorizationTmplName(value: string) {
    this._aamJwtAuthorizationTmplName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aamJwtAuthorizationTmplNameInput() {
    return this._aamJwtAuthorizationTmplName;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aam_jwt_authorization_tmpl_name: cdktf.stringToTerraform(this._aamJwtAuthorizationTmplName),
      duration: cdktf.numberToTerraform(this._duration),
      id: cdktf.stringToTerraform(this._id),
      jwt_authorize_failure: cdktf.numberToTerraform(this._jwtAuthorizeFailure),
      jwt_missing_claim: cdktf.numberToTerraform(this._jwtMissingClaim),
      jwt_missing_token: cdktf.numberToTerraform(this._jwtMissingToken),
      jwt_other_error: cdktf.numberToTerraform(this._jwtOtherError),
      jwt_signature_failure: cdktf.numberToTerraform(this._jwtSignatureFailure),
      jwt_token_expired: cdktf.numberToTerraform(this._jwtTokenExpired),
      threshold_exceeded_by: cdktf.numberToTerraform(this._thresholdExceededBy),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aam_jwt_authorization_tmpl_name: {
        value: cdktf.stringToHclTerraform(this._aamJwtAuthorizationTmplName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
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
      jwt_authorize_failure: {
        value: cdktf.numberToHclTerraform(this._jwtAuthorizeFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jwt_missing_claim: {
        value: cdktf.numberToHclTerraform(this._jwtMissingClaim),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jwt_missing_token: {
        value: cdktf.numberToHclTerraform(this._jwtMissingToken),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jwt_other_error: {
        value: cdktf.numberToHclTerraform(this._jwtOtherError),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jwt_signature_failure: {
        value: cdktf.numberToHclTerraform(this._jwtSignatureFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jwt_token_expired: {
        value: cdktf.numberToHclTerraform(this._jwtTokenExpired),
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
