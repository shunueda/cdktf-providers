// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthenticationServerRadiusStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#id DataThunderAamAuthenticationServerRadiusStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * instance_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#instance_list DataThunderAamAuthenticationServerRadiusStats#instance_list}
  */
  readonly instanceList?: DataThunderAamAuthenticationServerRadiusStatsInstanceListStruct[] | cdktf.IResolvable;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#stats DataThunderAamAuthenticationServerRadiusStats#stats}
  */
  readonly stats?: DataThunderAamAuthenticationServerRadiusStatsStats;
}
export interface DataThunderAamAuthenticationServerRadiusStatsInstanceListStats {
  /**
  * Access-Challenge Message Receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#access_challenge DataThunderAamAuthenticationServerRadiusStats#access_challenge}
  */
  readonly accessChallenge?: number;
  /**
  * Accounting Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#accounting_failure DataThunderAamAuthenticationServerRadiusStats#accounting_failure}
  */
  readonly accountingFailure?: number;
  /**
  * Accounting-Request Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#accounting_request_sent DataThunderAamAuthenticationServerRadiusStats#accounting_request_sent}
  */
  readonly accountingRequestSent?: number;
  /**
  * Accounting Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#accounting_success DataThunderAamAuthenticationServerRadiusStats#accounting_success}
  */
  readonly accountingSuccess?: number;
  /**
  * Authentication Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#authen_failure DataThunderAamAuthenticationServerRadiusStats#authen_failure}
  */
  readonly authenFailure?: number;
  /**
  * Authentication Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#authen_success DataThunderAamAuthenticationServerRadiusStats#authen_success}
  */
  readonly authenSuccess?: number;
  /**
  * Authorization Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#authorize_failure DataThunderAamAuthenticationServerRadiusStats#authorize_failure}
  */
  readonly authorizeFailure?: number;
  /**
  * Authorization Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#authorize_success DataThunderAamAuthenticationServerRadiusStats#authorize_success}
  */
  readonly authorizeSuccess?: number;
  /**
  * Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#other_error DataThunderAamAuthenticationServerRadiusStats#other_error}
  */
  readonly otherError?: number;
  /**
  * Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#request DataThunderAamAuthenticationServerRadiusStats#request}
  */
  readonly request?: number;
  /**
  * Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#timeout_error DataThunderAamAuthenticationServerRadiusStats#timeout_error}
  */
  readonly timeoutError?: number;
}

export function dataThunderAamAuthenticationServerRadiusStatsInstanceListStatsToTerraform(struct?: DataThunderAamAuthenticationServerRadiusStatsInstanceListStatsOutputReference | DataThunderAamAuthenticationServerRadiusStatsInstanceListStats): any {
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


export function dataThunderAamAuthenticationServerRadiusStatsInstanceListStatsToHclTerraform(struct?: DataThunderAamAuthenticationServerRadiusStatsInstanceListStatsOutputReference | DataThunderAamAuthenticationServerRadiusStatsInstanceListStats): any {
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

export class DataThunderAamAuthenticationServerRadiusStatsInstanceListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationServerRadiusStatsInstanceListStats | undefined {
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

  public set internalValue(value: DataThunderAamAuthenticationServerRadiusStatsInstanceListStats | undefined) {
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
export interface DataThunderAamAuthenticationServerRadiusStatsInstanceListStruct {
  /**
  * Specify RADIUS authentication server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#name DataThunderAamAuthenticationServerRadiusStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#stats DataThunderAamAuthenticationServerRadiusStats#stats}
  */
  readonly stats?: DataThunderAamAuthenticationServerRadiusStatsInstanceListStats;
}

export function dataThunderAamAuthenticationServerRadiusStatsInstanceListStructToTerraform(struct?: DataThunderAamAuthenticationServerRadiusStatsInstanceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    stats: dataThunderAamAuthenticationServerRadiusStatsInstanceListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderAamAuthenticationServerRadiusStatsInstanceListStructToHclTerraform(struct?: DataThunderAamAuthenticationServerRadiusStatsInstanceListStruct | cdktf.IResolvable): any {
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
      value: dataThunderAamAuthenticationServerRadiusStatsInstanceListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAamAuthenticationServerRadiusStatsInstanceListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationServerRadiusStatsInstanceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAamAuthenticationServerRadiusStatsInstanceListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderAamAuthenticationServerRadiusStatsInstanceListStruct | cdktf.IResolvable | undefined) {
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
  private _stats = new DataThunderAamAuthenticationServerRadiusStatsInstanceListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamAuthenticationServerRadiusStatsInstanceListStats) {
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

export class DataThunderAamAuthenticationServerRadiusStatsInstanceListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAamAuthenticationServerRadiusStatsInstanceListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAamAuthenticationServerRadiusStatsInstanceListStructOutputReference {
    return new DataThunderAamAuthenticationServerRadiusStatsInstanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAamAuthenticationServerRadiusStatsStats {
  /**
  * Total Access-Challenge Message Receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#access_challenge DataThunderAamAuthenticationServerRadiusStats#access_challenge}
  */
  readonly accessChallenge?: number;
  /**
  * Accounting Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#accounting_failure DataThunderAamAuthenticationServerRadiusStats#accounting_failure}
  */
  readonly accountingFailure?: number;
  /**
  * Accounting-Request Sent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#accounting_request_sent DataThunderAamAuthenticationServerRadiusStats#accounting_request_sent}
  */
  readonly accountingRequestSent?: number;
  /**
  * Accounting Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#accounting_success DataThunderAamAuthenticationServerRadiusStats#accounting_success}
  */
  readonly accountingSuccess?: number;
  /**
  * Total Authentication Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#authen_failure DataThunderAamAuthenticationServerRadiusStats#authen_failure}
  */
  readonly authenFailure?: number;
  /**
  * Total Authentication Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#authen_success DataThunderAamAuthenticationServerRadiusStats#authen_success}
  */
  readonly authenSuccess?: number;
  /**
  * Total Authorization Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#authorize_failure DataThunderAamAuthenticationServerRadiusStats#authorize_failure}
  */
  readonly authorizeFailure?: number;
  /**
  * Total Authorization Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#authorize_success DataThunderAamAuthenticationServerRadiusStats#authorize_success}
  */
  readonly authorizeSuccess?: number;
  /**
  * Total Job Start Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#job_start_error DataThunderAamAuthenticationServerRadiusStats#job_start_error}
  */
  readonly jobStartError?: number;
  /**
  * Total Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#other_error DataThunderAamAuthenticationServerRadiusStats#other_error}
  */
  readonly otherError?: number;
  /**
  * Total Polling Control Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#polling_control_error DataThunderAamAuthenticationServerRadiusStats#polling_control_error}
  */
  readonly pollingControlError?: number;
  /**
  * Total Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#request DataThunderAamAuthenticationServerRadiusStats#request}
  */
  readonly request?: number;
  /**
  * Total Dropped Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#request_dropped DataThunderAamAuthenticationServerRadiusStats#request_dropped}
  */
  readonly requestDropped?: number;
  /**
  * Total Normal Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#request_normal DataThunderAamAuthenticationServerRadiusStats#request_normal}
  */
  readonly requestNormal?: number;
  /**
  * Total Error Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#response_error DataThunderAamAuthenticationServerRadiusStats#response_error}
  */
  readonly responseError?: number;
  /**
  * Total Failure Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#response_failure DataThunderAamAuthenticationServerRadiusStats#response_failure}
  */
  readonly responseFailure?: number;
  /**
  * Total Other Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#response_other DataThunderAamAuthenticationServerRadiusStats#response_other}
  */
  readonly responseOther?: number;
  /**
  * Total Success Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#response_success DataThunderAamAuthenticationServerRadiusStats#response_success}
  */
  readonly responseSuccess?: number;
  /**
  * Total Timeout Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#response_timeout DataThunderAamAuthenticationServerRadiusStats#response_timeout}
  */
  readonly responseTimeout?: number;
  /**
  * Total Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#timeout_error DataThunderAamAuthenticationServerRadiusStats#timeout_error}
  */
  readonly timeoutError?: number;
}

export function dataThunderAamAuthenticationServerRadiusStatsStatsToTerraform(struct?: DataThunderAamAuthenticationServerRadiusStatsStatsOutputReference | DataThunderAamAuthenticationServerRadiusStatsStats): any {
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
    job_start_error: cdktf.numberToTerraform(struct!.jobStartError),
    other_error: cdktf.numberToTerraform(struct!.otherError),
    polling_control_error: cdktf.numberToTerraform(struct!.pollingControlError),
    request: cdktf.numberToTerraform(struct!.request),
    request_dropped: cdktf.numberToTerraform(struct!.requestDropped),
    request_normal: cdktf.numberToTerraform(struct!.requestNormal),
    response_error: cdktf.numberToTerraform(struct!.responseError),
    response_failure: cdktf.numberToTerraform(struct!.responseFailure),
    response_other: cdktf.numberToTerraform(struct!.responseOther),
    response_success: cdktf.numberToTerraform(struct!.responseSuccess),
    response_timeout: cdktf.numberToTerraform(struct!.responseTimeout),
    timeout_error: cdktf.numberToTerraform(struct!.timeoutError),
  }
}


export function dataThunderAamAuthenticationServerRadiusStatsStatsToHclTerraform(struct?: DataThunderAamAuthenticationServerRadiusStatsStatsOutputReference | DataThunderAamAuthenticationServerRadiusStatsStats): any {
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
    job_start_error: {
      value: cdktf.numberToHclTerraform(struct!.jobStartError),
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
    polling_control_error: {
      value: cdktf.numberToHclTerraform(struct!.pollingControlError),
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
    request_dropped: {
      value: cdktf.numberToHclTerraform(struct!.requestDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_normal: {
      value: cdktf.numberToHclTerraform(struct!.requestNormal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_error: {
      value: cdktf.numberToHclTerraform(struct!.responseError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_failure: {
      value: cdktf.numberToHclTerraform(struct!.responseFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_other: {
      value: cdktf.numberToHclTerraform(struct!.responseOther),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_success: {
      value: cdktf.numberToHclTerraform(struct!.responseSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_timeout: {
      value: cdktf.numberToHclTerraform(struct!.responseTimeout),
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

export class DataThunderAamAuthenticationServerRadiusStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationServerRadiusStatsStats | undefined {
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
    if (this._jobStartError !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobStartError = this._jobStartError;
    }
    if (this._otherError !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherError = this._otherError;
    }
    if (this._pollingControlError !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingControlError = this._pollingControlError;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    if (this._requestDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestDropped = this._requestDropped;
    }
    if (this._requestNormal !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestNormal = this._requestNormal;
    }
    if (this._responseError !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseError = this._responseError;
    }
    if (this._responseFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseFailure = this._responseFailure;
    }
    if (this._responseOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseOther = this._responseOther;
    }
    if (this._responseSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseSuccess = this._responseSuccess;
    }
    if (this._responseTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseTimeout = this._responseTimeout;
    }
    if (this._timeoutError !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutError = this._timeoutError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationServerRadiusStatsStats | undefined) {
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
      this._jobStartError = undefined;
      this._otherError = undefined;
      this._pollingControlError = undefined;
      this._request = undefined;
      this._requestDropped = undefined;
      this._requestNormal = undefined;
      this._responseError = undefined;
      this._responseFailure = undefined;
      this._responseOther = undefined;
      this._responseSuccess = undefined;
      this._responseTimeout = undefined;
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
      this._jobStartError = value.jobStartError;
      this._otherError = value.otherError;
      this._pollingControlError = value.pollingControlError;
      this._request = value.request;
      this._requestDropped = value.requestDropped;
      this._requestNormal = value.requestNormal;
      this._responseError = value.responseError;
      this._responseFailure = value.responseFailure;
      this._responseOther = value.responseOther;
      this._responseSuccess = value.responseSuccess;
      this._responseTimeout = value.responseTimeout;
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

  // job_start_error - computed: false, optional: true, required: false
  private _jobStartError?: number; 
  public get jobStartError() {
    return this.getNumberAttribute('job_start_error');
  }
  public set jobStartError(value: number) {
    this._jobStartError = value;
  }
  public resetJobStartError() {
    this._jobStartError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobStartErrorInput() {
    return this._jobStartError;
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

  // polling_control_error - computed: false, optional: true, required: false
  private _pollingControlError?: number; 
  public get pollingControlError() {
    return this.getNumberAttribute('polling_control_error');
  }
  public set pollingControlError(value: number) {
    this._pollingControlError = value;
  }
  public resetPollingControlError() {
    this._pollingControlError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingControlErrorInput() {
    return this._pollingControlError;
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

  // request_dropped - computed: false, optional: true, required: false
  private _requestDropped?: number; 
  public get requestDropped() {
    return this.getNumberAttribute('request_dropped');
  }
  public set requestDropped(value: number) {
    this._requestDropped = value;
  }
  public resetRequestDropped() {
    this._requestDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestDroppedInput() {
    return this._requestDropped;
  }

  // request_normal - computed: false, optional: true, required: false
  private _requestNormal?: number; 
  public get requestNormal() {
    return this.getNumberAttribute('request_normal');
  }
  public set requestNormal(value: number) {
    this._requestNormal = value;
  }
  public resetRequestNormal() {
    this._requestNormal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestNormalInput() {
    return this._requestNormal;
  }

  // response_error - computed: false, optional: true, required: false
  private _responseError?: number; 
  public get responseError() {
    return this.getNumberAttribute('response_error');
  }
  public set responseError(value: number) {
    this._responseError = value;
  }
  public resetResponseError() {
    this._responseError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseErrorInput() {
    return this._responseError;
  }

  // response_failure - computed: false, optional: true, required: false
  private _responseFailure?: number; 
  public get responseFailure() {
    return this.getNumberAttribute('response_failure');
  }
  public set responseFailure(value: number) {
    this._responseFailure = value;
  }
  public resetResponseFailure() {
    this._responseFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseFailureInput() {
    return this._responseFailure;
  }

  // response_other - computed: false, optional: true, required: false
  private _responseOther?: number; 
  public get responseOther() {
    return this.getNumberAttribute('response_other');
  }
  public set responseOther(value: number) {
    this._responseOther = value;
  }
  public resetResponseOther() {
    this._responseOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseOtherInput() {
    return this._responseOther;
  }

  // response_success - computed: false, optional: true, required: false
  private _responseSuccess?: number; 
  public get responseSuccess() {
    return this.getNumberAttribute('response_success');
  }
  public set responseSuccess(value: number) {
    this._responseSuccess = value;
  }
  public resetResponseSuccess() {
    this._responseSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseSuccessInput() {
    return this._responseSuccess;
  }

  // response_timeout - computed: false, optional: true, required: false
  private _responseTimeout?: number; 
  public get responseTimeout() {
    return this.getNumberAttribute('response_timeout');
  }
  public set responseTimeout(value: number) {
    this._responseTimeout = value;
  }
  public resetResponseTimeout() {
    this._responseTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseTimeoutInput() {
    return this._responseTimeout;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats thunder_aam_authentication_server_radius_stats}
*/
export class DataThunderAamAuthenticationServerRadiusStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_server_radius_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthenticationServerRadiusStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthenticationServerRadiusStats to import
  * @param importFromId The id of the existing DataThunderAamAuthenticationServerRadiusStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthenticationServerRadiusStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_server_radius_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_radius_stats thunder_aam_authentication_server_radius_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthenticationServerRadiusStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthenticationServerRadiusStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_server_radius_stats',
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
  private _instanceList = new DataThunderAamAuthenticationServerRadiusStatsInstanceListStructList(this, "instance_list", false);
  public get instanceList() {
    return this._instanceList;
  }
  public putInstanceList(value: DataThunderAamAuthenticationServerRadiusStatsInstanceListStruct[] | cdktf.IResolvable) {
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
  private _stats = new DataThunderAamAuthenticationServerRadiusStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamAuthenticationServerRadiusStatsStats) {
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
      instance_list: cdktf.listMapper(dataThunderAamAuthenticationServerRadiusStatsInstanceListStructToTerraform, true)(this._instanceList.internalValue),
      stats: dataThunderAamAuthenticationServerRadiusStatsStatsToTerraform(this._stats.internalValue),
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
        value: cdktf.listMapperHcl(dataThunderAamAuthenticationServerRadiusStatsInstanceListStructToHclTerraform, true)(this._instanceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationServerRadiusStatsInstanceListStructList",
      },
      stats: {
        value: dataThunderAamAuthenticationServerRadiusStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationServerRadiusStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
