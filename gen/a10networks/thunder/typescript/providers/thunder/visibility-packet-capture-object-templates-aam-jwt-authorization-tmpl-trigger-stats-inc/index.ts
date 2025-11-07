// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_inc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsIncAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_inc#id VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsIncA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable automatic packet-capture for JWT Authorize Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_inc#jwt_authorize_failure VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsIncA#jwt_authorize_failure}
  */
  readonly jwtAuthorizeFailure?: number;
  /**
  * Enable automatic packet-capture for JWT Missing Claim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_inc#jwt_missing_claim VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsIncA#jwt_missing_claim}
  */
  readonly jwtMissingClaim?: number;
  /**
  * Enable automatic packet-capture for JWT Missing Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_inc#jwt_missing_token VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsIncA#jwt_missing_token}
  */
  readonly jwtMissingToken?: number;
  /**
  * Enable automatic packet-capture for JWT Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_inc#jwt_other_error VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsIncA#jwt_other_error}
  */
  readonly jwtOtherError?: number;
  /**
  * Enable automatic packet-capture for JWT Signature Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_inc#jwt_signature_failure VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsIncA#jwt_signature_failure}
  */
  readonly jwtSignatureFailure?: number;
  /**
  * Enable automatic packet-capture for JWT Token Expired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_inc#jwt_token_expired VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsIncA#jwt_token_expired}
  */
  readonly jwtTokenExpired?: number;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_inc#name VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsIncA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_inc#uuid VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsIncA#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_inc}
*/
export class VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsIncA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_inc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsIncA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsIncA to import
  * @param importFromId The id of the existing VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsIncA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_inc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsIncA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_inc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_inc thunder_visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_inc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsIncAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityPacketCaptureObjectTemplatesAamJwtAuthorizationTmplTriggerStatsIncAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_packet_capture_object_templates_aam_jwt_authorization_tmpl_trigger_stats_inc',
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
    this._id = config.id;
    this._jwtAuthorizeFailure = config.jwtAuthorizeFailure;
    this._jwtMissingClaim = config.jwtMissingClaim;
    this._jwtMissingToken = config.jwtMissingToken;
    this._jwtOtherError = config.jwtOtherError;
    this._jwtSignatureFailure = config.jwtSignatureFailure;
    this._jwtTokenExpired = config.jwtTokenExpired;
    this._name = config.name;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      jwt_authorize_failure: cdktf.numberToTerraform(this._jwtAuthorizeFailure),
      jwt_missing_claim: cdktf.numberToTerraform(this._jwtMissingClaim),
      jwt_missing_token: cdktf.numberToTerraform(this._jwtMissingToken),
      jwt_other_error: cdktf.numberToTerraform(this._jwtOtherError),
      jwt_signature_failure: cdktf.numberToTerraform(this._jwtSignatureFailure),
      jwt_token_expired: cdktf.numberToTerraform(this._jwtTokenExpired),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
