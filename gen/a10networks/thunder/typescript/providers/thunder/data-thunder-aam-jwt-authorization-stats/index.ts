// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_jwt_authorization_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamJwtAuthorizationStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_jwt_authorization_stats#id DataThunderAamJwtAuthorizationStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify JWT authorization template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_jwt_authorization_stats#name DataThunderAamJwtAuthorizationStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_jwt_authorization_stats#stats DataThunderAamJwtAuthorizationStats#stats}
  */
  readonly stats?: DataThunderAamJwtAuthorizationStatsStats;
}
export interface DataThunderAamJwtAuthorizationStatsStats {
  /**
  * JWT Authorize Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_jwt_authorization_stats#jwt_authorize_failure DataThunderAamJwtAuthorizationStats#jwt_authorize_failure}
  */
  readonly jwtAuthorizeFailure?: number;
  /**
  * JWT Authorize Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_jwt_authorization_stats#jwt_authorize_success DataThunderAamJwtAuthorizationStats#jwt_authorize_success}
  */
  readonly jwtAuthorizeSuccess?: number;
  /**
  * JWT Missing Claim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_jwt_authorization_stats#jwt_missing_claim DataThunderAamJwtAuthorizationStats#jwt_missing_claim}
  */
  readonly jwtMissingClaim?: number;
  /**
  * JWT Missing Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_jwt_authorization_stats#jwt_missing_token DataThunderAamJwtAuthorizationStats#jwt_missing_token}
  */
  readonly jwtMissingToken?: number;
  /**
  * JWT Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_jwt_authorization_stats#jwt_other_error DataThunderAamJwtAuthorizationStats#jwt_other_error}
  */
  readonly jwtOtherError?: number;
  /**
  * JWT Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_jwt_authorization_stats#jwt_request DataThunderAamJwtAuthorizationStats#jwt_request}
  */
  readonly jwtRequest?: number;
  /**
  * JWT Signature Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_jwt_authorization_stats#jwt_signature_failure DataThunderAamJwtAuthorizationStats#jwt_signature_failure}
  */
  readonly jwtSignatureFailure?: number;
  /**
  * JWT Token Expired
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_jwt_authorization_stats#jwt_token_expired DataThunderAamJwtAuthorizationStats#jwt_token_expired}
  */
  readonly jwtTokenExpired?: number;
}

export function dataThunderAamJwtAuthorizationStatsStatsToTerraform(struct?: DataThunderAamJwtAuthorizationStatsStatsOutputReference | DataThunderAamJwtAuthorizationStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jwt_authorize_failure: cdktf.numberToTerraform(struct!.jwtAuthorizeFailure),
    jwt_authorize_success: cdktf.numberToTerraform(struct!.jwtAuthorizeSuccess),
    jwt_missing_claim: cdktf.numberToTerraform(struct!.jwtMissingClaim),
    jwt_missing_token: cdktf.numberToTerraform(struct!.jwtMissingToken),
    jwt_other_error: cdktf.numberToTerraform(struct!.jwtOtherError),
    jwt_request: cdktf.numberToTerraform(struct!.jwtRequest),
    jwt_signature_failure: cdktf.numberToTerraform(struct!.jwtSignatureFailure),
    jwt_token_expired: cdktf.numberToTerraform(struct!.jwtTokenExpired),
  }
}


export function dataThunderAamJwtAuthorizationStatsStatsToHclTerraform(struct?: DataThunderAamJwtAuthorizationStatsStatsOutputReference | DataThunderAamJwtAuthorizationStatsStats): any {
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
    jwt_authorize_success: {
      value: cdktf.numberToHclTerraform(struct!.jwtAuthorizeSuccess),
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
    jwt_request: {
      value: cdktf.numberToHclTerraform(struct!.jwtRequest),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamJwtAuthorizationStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamJwtAuthorizationStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jwtAuthorizeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtAuthorizeFailure = this._jwtAuthorizeFailure;
    }
    if (this._jwtAuthorizeSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtAuthorizeSuccess = this._jwtAuthorizeSuccess;
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
    if (this._jwtRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtRequest = this._jwtRequest;
    }
    if (this._jwtSignatureFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtSignatureFailure = this._jwtSignatureFailure;
    }
    if (this._jwtTokenExpired !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtTokenExpired = this._jwtTokenExpired;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamJwtAuthorizationStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jwtAuthorizeFailure = undefined;
      this._jwtAuthorizeSuccess = undefined;
      this._jwtMissingClaim = undefined;
      this._jwtMissingToken = undefined;
      this._jwtOtherError = undefined;
      this._jwtRequest = undefined;
      this._jwtSignatureFailure = undefined;
      this._jwtTokenExpired = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jwtAuthorizeFailure = value.jwtAuthorizeFailure;
      this._jwtAuthorizeSuccess = value.jwtAuthorizeSuccess;
      this._jwtMissingClaim = value.jwtMissingClaim;
      this._jwtMissingToken = value.jwtMissingToken;
      this._jwtOtherError = value.jwtOtherError;
      this._jwtRequest = value.jwtRequest;
      this._jwtSignatureFailure = value.jwtSignatureFailure;
      this._jwtTokenExpired = value.jwtTokenExpired;
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

  // jwt_authorize_success - computed: false, optional: true, required: false
  private _jwtAuthorizeSuccess?: number; 
  public get jwtAuthorizeSuccess() {
    return this.getNumberAttribute('jwt_authorize_success');
  }
  public set jwtAuthorizeSuccess(value: number) {
    this._jwtAuthorizeSuccess = value;
  }
  public resetJwtAuthorizeSuccess() {
    this._jwtAuthorizeSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtAuthorizeSuccessInput() {
    return this._jwtAuthorizeSuccess;
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

  // jwt_request - computed: false, optional: true, required: false
  private _jwtRequest?: number; 
  public get jwtRequest() {
    return this.getNumberAttribute('jwt_request');
  }
  public set jwtRequest(value: number) {
    this._jwtRequest = value;
  }
  public resetJwtRequest() {
    this._jwtRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtRequestInput() {
    return this._jwtRequest;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_jwt_authorization_stats thunder_aam_jwt_authorization_stats}
*/
export class DataThunderAamJwtAuthorizationStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_jwt_authorization_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamJwtAuthorizationStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamJwtAuthorizationStats to import
  * @param importFromId The id of the existing DataThunderAamJwtAuthorizationStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_jwt_authorization_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamJwtAuthorizationStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_jwt_authorization_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_jwt_authorization_stats thunder_aam_jwt_authorization_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamJwtAuthorizationStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamJwtAuthorizationStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_jwt_authorization_stats',
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
    this._name = config.name;
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
  private _stats = new DataThunderAamJwtAuthorizationStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamJwtAuthorizationStatsStats) {
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
      name: cdktf.stringToTerraform(this._name),
      stats: dataThunderAamJwtAuthorizationStatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderAamJwtAuthorizationStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamJwtAuthorizationStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
