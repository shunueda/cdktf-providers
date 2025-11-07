// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_instance_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthenticationServerRadiusInstanceStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_instance_stats#id DataThunderAamAuthenticationServerRadiusInstanceStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify RADIUS authentication server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_instance_stats#name DataThunderAamAuthenticationServerRadiusInstanceStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_instance_stats#stats DataThunderAamAuthenticationServerRadiusInstanceStats#stats}
  */
  readonly stats?: DataThunderAamAuthenticationServerRadiusInstanceStatsStats;
}
export interface DataThunderAamAuthenticationServerRadiusInstanceStatsStats {
  /**
  * Access-Challenge Message Receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_instance_stats#access_challenge DataThunderAamAuthenticationServerRadiusInstanceStats#access_challenge}
  */
  readonly accessChallenge?: number;
  /**
  * Accounting Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_instance_stats#accounting_failure DataThunderAamAuthenticationServerRadiusInstanceStats#accounting_failure}
  */
  readonly accountingFailure?: number;
  /**
  * Accounting-Request Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_instance_stats#accounting_request_sent DataThunderAamAuthenticationServerRadiusInstanceStats#accounting_request_sent}
  */
  readonly accountingRequestSent?: number;
  /**
  * Accounting Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_instance_stats#accounting_success DataThunderAamAuthenticationServerRadiusInstanceStats#accounting_success}
  */
  readonly accountingSuccess?: number;
  /**
  * Authentication Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_instance_stats#authen_failure DataThunderAamAuthenticationServerRadiusInstanceStats#authen_failure}
  */
  readonly authenFailure?: number;
  /**
  * Authentication Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_instance_stats#authen_success DataThunderAamAuthenticationServerRadiusInstanceStats#authen_success}
  */
  readonly authenSuccess?: number;
  /**
  * Authorization Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_instance_stats#authorize_failure DataThunderAamAuthenticationServerRadiusInstanceStats#authorize_failure}
  */
  readonly authorizeFailure?: number;
  /**
  * Authorization Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_instance_stats#authorize_success DataThunderAamAuthenticationServerRadiusInstanceStats#authorize_success}
  */
  readonly authorizeSuccess?: number;
  /**
  * Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_instance_stats#other_error DataThunderAamAuthenticationServerRadiusInstanceStats#other_error}
  */
  readonly otherError?: number;
  /**
  * Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_instance_stats#request DataThunderAamAuthenticationServerRadiusInstanceStats#request}
  */
  readonly request?: number;
  /**
  * Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_instance_stats#timeout_error DataThunderAamAuthenticationServerRadiusInstanceStats#timeout_error}
  */
  readonly timeoutError?: number;
}

export function dataThunderAamAuthenticationServerRadiusInstanceStatsStatsToTerraform(struct?: DataThunderAamAuthenticationServerRadiusInstanceStatsStatsOutputReference | DataThunderAamAuthenticationServerRadiusInstanceStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_challenge: cdktf.numberToTerraform(struct!.accessChallenge),
    accounting_failure: cdktf.numberToTerraform(struct!.accountingFailure),
    accounting_request_sent: cdktf.numberToTerraform(struct!.accountingRequestSent),
    accounting_success: cdktf.numberToTerraform(struct!.accountingSuccess),
    authen_failure: cdktf.numberToTerraform(struct!.authenFailure),
    authen_success: cdktf.numberToTerraform(struct!.authenSuccess),
    authorize_failure: cdktf.numberToTerraform(struct!.authorizeFailure),
    authorize_success: cdktf.numberToTerraform(struct!.authorizeSuccess),
    other_error: cdktf.numberToTerraform(struct!.otherError),
    request: cdktf.numberToTerraform(struct!.request),
    timeout_error: cdktf.numberToTerraform(struct!.timeoutError),
  }
}


export function dataThunderAamAuthenticationServerRadiusInstanceStatsStatsToHclTerraform(struct?: DataThunderAamAuthenticationServerRadiusInstanceStatsStatsOutputReference | DataThunderAamAuthenticationServerRadiusInstanceStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_challenge: {
      value: cdktf.numberToHclTerraform(struct!.accessChallenge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accounting_failure: {
      value: cdktf.numberToHclTerraform(struct!.accountingFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accounting_request_sent: {
      value: cdktf.numberToHclTerraform(struct!.accountingRequestSent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    accounting_success: {
      value: cdktf.numberToHclTerraform(struct!.accountingSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authen_failure: {
      value: cdktf.numberToHclTerraform(struct!.authenFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authen_success: {
      value: cdktf.numberToHclTerraform(struct!.authenSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authorize_failure: {
      value: cdktf.numberToHclTerraform(struct!.authorizeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authorize_success: {
      value: cdktf.numberToHclTerraform(struct!.authorizeSuccess),
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
    request: {
      value: cdktf.numberToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_error: {
      value: cdktf.numberToHclTerraform(struct!.timeoutError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationServerRadiusInstanceStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationServerRadiusInstanceStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessChallenge !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessChallenge = this._accessChallenge;
    }
    if (this._accountingFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountingFailure = this._accountingFailure;
    }
    if (this._accountingRequestSent !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountingRequestSent = this._accountingRequestSent;
    }
    if (this._accountingSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.accountingSuccess = this._accountingSuccess;
    }
    if (this._authenFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenFailure = this._authenFailure;
    }
    if (this._authenSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenSuccess = this._authenSuccess;
    }
    if (this._authorizeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizeFailure = this._authorizeFailure;
    }
    if (this._authorizeSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizeSuccess = this._authorizeSuccess;
    }
    if (this._otherError !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherError = this._otherError;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    if (this._timeoutError !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutError = this._timeoutError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationServerRadiusInstanceStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessChallenge = undefined;
      this._accountingFailure = undefined;
      this._accountingRequestSent = undefined;
      this._accountingSuccess = undefined;
      this._authenFailure = undefined;
      this._authenSuccess = undefined;
      this._authorizeFailure = undefined;
      this._authorizeSuccess = undefined;
      this._otherError = undefined;
      this._request = undefined;
      this._timeoutError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessChallenge = value.accessChallenge;
      this._accountingFailure = value.accountingFailure;
      this._accountingRequestSent = value.accountingRequestSent;
      this._accountingSuccess = value.accountingSuccess;
      this._authenFailure = value.authenFailure;
      this._authenSuccess = value.authenSuccess;
      this._authorizeFailure = value.authorizeFailure;
      this._authorizeSuccess = value.authorizeSuccess;
      this._otherError = value.otherError;
      this._request = value.request;
      this._timeoutError = value.timeoutError;
    }
  }

  // access_challenge - computed: false, optional: true, required: false
  private _accessChallenge?: number; 
  public get accessChallenge() {
    return this.getNumberAttribute('access_challenge');
  }
  public set accessChallenge(value: number) {
    this._accessChallenge = value;
  }
  public resetAccessChallenge() {
    this._accessChallenge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessChallengeInput() {
    return this._accessChallenge;
  }

  // accounting_failure - computed: false, optional: true, required: false
  private _accountingFailure?: number; 
  public get accountingFailure() {
    return this.getNumberAttribute('accounting_failure');
  }
  public set accountingFailure(value: number) {
    this._accountingFailure = value;
  }
  public resetAccountingFailure() {
    this._accountingFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingFailureInput() {
    return this._accountingFailure;
  }

  // accounting_request_sent - computed: false, optional: true, required: false
  private _accountingRequestSent?: number; 
  public get accountingRequestSent() {
    return this.getNumberAttribute('accounting_request_sent');
  }
  public set accountingRequestSent(value: number) {
    this._accountingRequestSent = value;
  }
  public resetAccountingRequestSent() {
    this._accountingRequestSent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingRequestSentInput() {
    return this._accountingRequestSent;
  }

  // accounting_success - computed: false, optional: true, required: false
  private _accountingSuccess?: number; 
  public get accountingSuccess() {
    return this.getNumberAttribute('accounting_success');
  }
  public set accountingSuccess(value: number) {
    this._accountingSuccess = value;
  }
  public resetAccountingSuccess() {
    this._accountingSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountingSuccessInput() {
    return this._accountingSuccess;
  }

  // authen_failure - computed: false, optional: true, required: false
  private _authenFailure?: number; 
  public get authenFailure() {
    return this.getNumberAttribute('authen_failure');
  }
  public set authenFailure(value: number) {
    this._authenFailure = value;
  }
  public resetAuthenFailure() {
    this._authenFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenFailureInput() {
    return this._authenFailure;
  }

  // authen_success - computed: false, optional: true, required: false
  private _authenSuccess?: number; 
  public get authenSuccess() {
    return this.getNumberAttribute('authen_success');
  }
  public set authenSuccess(value: number) {
    this._authenSuccess = value;
  }
  public resetAuthenSuccess() {
    this._authenSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenSuccessInput() {
    return this._authenSuccess;
  }

  // authorize_failure - computed: false, optional: true, required: false
  private _authorizeFailure?: number; 
  public get authorizeFailure() {
    return this.getNumberAttribute('authorize_failure');
  }
  public set authorizeFailure(value: number) {
    this._authorizeFailure = value;
  }
  public resetAuthorizeFailure() {
    this._authorizeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizeFailureInput() {
    return this._authorizeFailure;
  }

  // authorize_success - computed: false, optional: true, required: false
  private _authorizeSuccess?: number; 
  public get authorizeSuccess() {
    return this.getNumberAttribute('authorize_success');
  }
  public set authorizeSuccess(value: number) {
    this._authorizeSuccess = value;
  }
  public resetAuthorizeSuccess() {
    this._authorizeSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizeSuccessInput() {
    return this._authorizeSuccess;
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

  // request - computed: false, optional: true, required: false
  private _request?: number; 
  public get request() {
    return this.getNumberAttribute('request');
  }
  public set request(value: number) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }

  // timeout_error - computed: false, optional: true, required: false
  private _timeoutError?: number; 
  public get timeoutError() {
    return this.getNumberAttribute('timeout_error');
  }
  public set timeoutError(value: number) {
    this._timeoutError = value;
  }
  public resetTimeoutError() {
    this._timeoutError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutErrorInput() {
    return this._timeoutError;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_instance_stats thunder_aam_authentication_server_radius_instance_stats}
*/
export class DataThunderAamAuthenticationServerRadiusInstanceStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_server_radius_instance_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthenticationServerRadiusInstanceStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthenticationServerRadiusInstanceStats to import
  * @param importFromId The id of the existing DataThunderAamAuthenticationServerRadiusInstanceStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_instance_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthenticationServerRadiusInstanceStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_server_radius_instance_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_instance_stats thunder_aam_authentication_server_radius_instance_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthenticationServerRadiusInstanceStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthenticationServerRadiusInstanceStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_server_radius_instance_stats',
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
  private _stats = new DataThunderAamAuthenticationServerRadiusInstanceStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamAuthenticationServerRadiusInstanceStatsStats) {
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
      stats: dataThunderAamAuthenticationServerRadiusInstanceStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderAamAuthenticationServerRadiusInstanceStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationServerRadiusInstanceStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
