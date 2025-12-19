// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_kerberos_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthenticationRelayKerberosStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_kerberos_stats#id DataThunderAamAuthenticationRelayKerberosStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * instance_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_kerberos_stats#instance_list DataThunderAamAuthenticationRelayKerberosStats#instance_list}
  */
  readonly instanceList?: DataThunderAamAuthenticationRelayKerberosStatsInstanceListStruct[] | cdktf.IResolvable;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_kerberos_stats#stats DataThunderAamAuthenticationRelayKerberosStats#stats}
  */
  readonly stats?: DataThunderAamAuthenticationRelayKerberosStatsStats;
}
export interface DataThunderAamAuthenticationRelayKerberosStatsInstanceListStats {
  /**
  * Current Pending Requests of User
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_kerberos_stats#current_requests_of_user DataThunderAamAuthenticationRelayKerberosStats#current_requests_of_user}
  */
  readonly currentRequestsOfUser?: number;
  /**
  * Request Send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_kerberos_stats#request_send DataThunderAamAuthenticationRelayKerberosStats#request_send}
  */
  readonly requestSend?: number;
  /**
  * Response Receive
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_kerberos_stats#response_receive DataThunderAamAuthenticationRelayKerberosStats#response_receive}
  */
  readonly responseReceive?: number;
  /**
  * Tickets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_kerberos_stats#tickets DataThunderAamAuthenticationRelayKerberosStats#tickets}
  */
  readonly tickets?: number;
}

export function dataThunderAamAuthenticationRelayKerberosStatsInstanceListStatsToTerraform(struct?: DataThunderAamAuthenticationRelayKerberosStatsInstanceListStatsOutputReference | DataThunderAamAuthenticationRelayKerberosStatsInstanceListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_requests_of_user: cdktf.numberToTerraform(struct!.currentRequestsOfUser),
    request_send: cdktf.numberToTerraform(struct!.requestSend),
    response_receive: cdktf.numberToTerraform(struct!.responseReceive),
    tickets: cdktf.numberToTerraform(struct!.tickets),
  }
}


export function dataThunderAamAuthenticationRelayKerberosStatsInstanceListStatsToHclTerraform(struct?: DataThunderAamAuthenticationRelayKerberosStatsInstanceListStatsOutputReference | DataThunderAamAuthenticationRelayKerberosStatsInstanceListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current_requests_of_user: {
      value: cdktf.numberToHclTerraform(struct!.currentRequestsOfUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_send: {
      value: cdktf.numberToHclTerraform(struct!.requestSend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    response_receive: {
      value: cdktf.numberToHclTerraform(struct!.responseReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tickets: {
      value: cdktf.numberToHclTerraform(struct!.tickets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationRelayKerberosStatsInstanceListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationRelayKerberosStatsInstanceListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentRequestsOfUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentRequestsOfUser = this._currentRequestsOfUser;
    }
    if (this._requestSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestSend = this._requestSend;
    }
    if (this._responseReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseReceive = this._responseReceive;
    }
    if (this._tickets !== undefined) {
      hasAnyValues = true;
      internalValueResult.tickets = this._tickets;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationRelayKerberosStatsInstanceListStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._currentRequestsOfUser = undefined;
      this._requestSend = undefined;
      this._responseReceive = undefined;
      this._tickets = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._currentRequestsOfUser = value.currentRequestsOfUser;
      this._requestSend = value.requestSend;
      this._responseReceive = value.responseReceive;
      this._tickets = value.tickets;
    }
  }

  // current_requests_of_user - computed: false, optional: true, required: false
  private _currentRequestsOfUser?: number; 
  public get currentRequestsOfUser() {
    return this.getNumberAttribute('current_requests_of_user');
  }
  public set currentRequestsOfUser(value: number) {
    this._currentRequestsOfUser = value;
  }
  public resetCurrentRequestsOfUser() {
    this._currentRequestsOfUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentRequestsOfUserInput() {
    return this._currentRequestsOfUser;
  }

  // request_send - computed: false, optional: true, required: false
  private _requestSend?: number; 
  public get requestSend() {
    return this.getNumberAttribute('request_send');
  }
  public set requestSend(value: number) {
    this._requestSend = value;
  }
  public resetRequestSend() {
    this._requestSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestSendInput() {
    return this._requestSend;
  }

  // response_receive - computed: false, optional: true, required: false
  private _responseReceive?: number; 
  public get responseReceive() {
    return this.getNumberAttribute('response_receive');
  }
  public set responseReceive(value: number) {
    this._responseReceive = value;
  }
  public resetResponseReceive() {
    this._responseReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseReceiveInput() {
    return this._responseReceive;
  }

  // tickets - computed: false, optional: true, required: false
  private _tickets?: number; 
  public get tickets() {
    return this.getNumberAttribute('tickets');
  }
  public set tickets(value: number) {
    this._tickets = value;
  }
  public resetTickets() {
    this._tickets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ticketsInput() {
    return this._tickets;
  }
}
export interface DataThunderAamAuthenticationRelayKerberosStatsInstanceListStruct {
  /**
  * Specify Kerberos authentication relay name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_kerberos_stats#name DataThunderAamAuthenticationRelayKerberosStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_kerberos_stats#stats DataThunderAamAuthenticationRelayKerberosStats#stats}
  */
  readonly stats?: DataThunderAamAuthenticationRelayKerberosStatsInstanceListStats;
}

export function dataThunderAamAuthenticationRelayKerberosStatsInstanceListStructToTerraform(struct?: DataThunderAamAuthenticationRelayKerberosStatsInstanceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    stats: dataThunderAamAuthenticationRelayKerberosStatsInstanceListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderAamAuthenticationRelayKerberosStatsInstanceListStructToHclTerraform(struct?: DataThunderAamAuthenticationRelayKerberosStatsInstanceListStruct | cdktf.IResolvable): any {
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
      value: dataThunderAamAuthenticationRelayKerberosStatsInstanceListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAamAuthenticationRelayKerberosStatsInstanceListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationRelayKerberosStatsInstanceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAamAuthenticationRelayKerberosStatsInstanceListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderAamAuthenticationRelayKerberosStatsInstanceListStruct | cdktf.IResolvable | undefined) {
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
  private _stats = new DataThunderAamAuthenticationRelayKerberosStatsInstanceListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamAuthenticationRelayKerberosStatsInstanceListStats) {
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

export class DataThunderAamAuthenticationRelayKerberosStatsInstanceListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAamAuthenticationRelayKerberosStatsInstanceListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAamAuthenticationRelayKerberosStatsInstanceListStructOutputReference {
    return new DataThunderAamAuthenticationRelayKerberosStatsInstanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAamAuthenticationRelayKerberosStatsStats {
  /**
  * Total Job Start Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_kerberos_stats#job_start_error DataThunderAamAuthenticationRelayKerberosStats#job_start_error}
  */
  readonly jobStartError?: number;
  /**
  * Total Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_kerberos_stats#other_error DataThunderAamAuthenticationRelayKerberosStats#other_error}
  */
  readonly otherError?: number;
  /**
  * Total Polling Control Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_kerberos_stats#polling_control_error DataThunderAamAuthenticationRelayKerberosStats#polling_control_error}
  */
  readonly pollingControlError?: number;
  /**
  * Total Dropped Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_kerberos_stats#request_dropped DataThunderAamAuthenticationRelayKerberosStats#request_dropped}
  */
  readonly requestDropped?: number;
  /**
  * Total Normal Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_kerberos_stats#request_normal DataThunderAamAuthenticationRelayKerberosStats#request_normal}
  */
  readonly requestNormal?: number;
  /**
  * Total Request Send
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_kerberos_stats#request_send DataThunderAamAuthenticationRelayKerberosStats#request_send}
  */
  readonly requestSend?: number;
  /**
  * Total Error Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_kerberos_stats#response_error DataThunderAamAuthenticationRelayKerberosStats#response_error}
  */
  readonly responseError?: number;
  /**
  * Total Failure Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_kerberos_stats#response_failure DataThunderAamAuthenticationRelayKerberosStats#response_failure}
  */
  readonly responseFailure?: number;
  /**
  * Total Response Get
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_kerberos_stats#response_get DataThunderAamAuthenticationRelayKerberosStats#response_get}
  */
  readonly responseGet?: number;
  /**
  * Total Other Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_kerberos_stats#response_other DataThunderAamAuthenticationRelayKerberosStats#response_other}
  */
  readonly responseOther?: number;
  /**
  * Total Success Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_kerberos_stats#response_success DataThunderAamAuthenticationRelayKerberosStats#response_success}
  */
  readonly responseSuccess?: number;
  /**
  * Total Timeout Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_kerberos_stats#response_timeout DataThunderAamAuthenticationRelayKerberosStats#response_timeout}
  */
  readonly responseTimeout?: number;
  /**
  * Total Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_kerberos_stats#timeout_error DataThunderAamAuthenticationRelayKerberosStats#timeout_error}
  */
  readonly timeoutError?: number;
}

export function dataThunderAamAuthenticationRelayKerberosStatsStatsToTerraform(struct?: DataThunderAamAuthenticationRelayKerberosStatsStatsOutputReference | DataThunderAamAuthenticationRelayKerberosStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    job_start_error: cdktf.numberToTerraform(struct!.jobStartError),
    other_error: cdktf.numberToTerraform(struct!.otherError),
    polling_control_error: cdktf.numberToTerraform(struct!.pollingControlError),
    request_dropped: cdktf.numberToTerraform(struct!.requestDropped),
    request_normal: cdktf.numberToTerraform(struct!.requestNormal),
    request_send: cdktf.numberToTerraform(struct!.requestSend),
    response_error: cdktf.numberToTerraform(struct!.responseError),
    response_failure: cdktf.numberToTerraform(struct!.responseFailure),
    response_get: cdktf.numberToTerraform(struct!.responseGet),
    response_other: cdktf.numberToTerraform(struct!.responseOther),
    response_success: cdktf.numberToTerraform(struct!.responseSuccess),
    response_timeout: cdktf.numberToTerraform(struct!.responseTimeout),
    timeout_error: cdktf.numberToTerraform(struct!.timeoutError),
  }
}


export function dataThunderAamAuthenticationRelayKerberosStatsStatsToHclTerraform(struct?: DataThunderAamAuthenticationRelayKerberosStatsStatsOutputReference | DataThunderAamAuthenticationRelayKerberosStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    request_send: {
      value: cdktf.numberToHclTerraform(struct!.requestSend),
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
    response_get: {
      value: cdktf.numberToHclTerraform(struct!.responseGet),
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

export class DataThunderAamAuthenticationRelayKerberosStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationRelayKerberosStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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
    if (this._requestDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestDropped = this._requestDropped;
    }
    if (this._requestNormal !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestNormal = this._requestNormal;
    }
    if (this._requestSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestSend = this._requestSend;
    }
    if (this._responseError !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseError = this._responseError;
    }
    if (this._responseFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseFailure = this._responseFailure;
    }
    if (this._responseGet !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseGet = this._responseGet;
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

  public set internalValue(value: DataThunderAamAuthenticationRelayKerberosStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._jobStartError = undefined;
      this._otherError = undefined;
      this._pollingControlError = undefined;
      this._requestDropped = undefined;
      this._requestNormal = undefined;
      this._requestSend = undefined;
      this._responseError = undefined;
      this._responseFailure = undefined;
      this._responseGet = undefined;
      this._responseOther = undefined;
      this._responseSuccess = undefined;
      this._responseTimeout = undefined;
      this._timeoutError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._jobStartError = value.jobStartError;
      this._otherError = value.otherError;
      this._pollingControlError = value.pollingControlError;
      this._requestDropped = value.requestDropped;
      this._requestNormal = value.requestNormal;
      this._requestSend = value.requestSend;
      this._responseError = value.responseError;
      this._responseFailure = value.responseFailure;
      this._responseGet = value.responseGet;
      this._responseOther = value.responseOther;
      this._responseSuccess = value.responseSuccess;
      this._responseTimeout = value.responseTimeout;
      this._timeoutError = value.timeoutError;
    }
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

  // request_send - computed: false, optional: true, required: false
  private _requestSend?: number; 
  public get requestSend() {
    return this.getNumberAttribute('request_send');
  }
  public set requestSend(value: number) {
    this._requestSend = value;
  }
  public resetRequestSend() {
    this._requestSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestSendInput() {
    return this._requestSend;
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

  // response_get - computed: false, optional: true, required: false
  private _responseGet?: number; 
  public get responseGet() {
    return this.getNumberAttribute('response_get');
  }
  public set responseGet(value: number) {
    this._responseGet = value;
  }
  public resetResponseGet() {
    this._responseGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseGetInput() {
    return this._responseGet;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_kerberos_stats thunder_aam_authentication_relay_kerberos_stats}
*/
export class DataThunderAamAuthenticationRelayKerberosStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_relay_kerberos_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthenticationRelayKerberosStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthenticationRelayKerberosStats to import
  * @param importFromId The id of the existing DataThunderAamAuthenticationRelayKerberosStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_kerberos_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthenticationRelayKerberosStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_relay_kerberos_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_kerberos_stats thunder_aam_authentication_relay_kerberos_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthenticationRelayKerberosStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthenticationRelayKerberosStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_relay_kerberos_stats',
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
  private _instanceList = new DataThunderAamAuthenticationRelayKerberosStatsInstanceListStructList(this, "instance_list", false);
  public get instanceList() {
    return this._instanceList;
  }
  public putInstanceList(value: DataThunderAamAuthenticationRelayKerberosStatsInstanceListStruct[] | cdktf.IResolvable) {
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
  private _stats = new DataThunderAamAuthenticationRelayKerberosStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamAuthenticationRelayKerberosStatsStats) {
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
      instance_list: cdktf.listMapper(dataThunderAamAuthenticationRelayKerberosStatsInstanceListStructToTerraform, true)(this._instanceList.internalValue),
      stats: dataThunderAamAuthenticationRelayKerberosStatsStatsToTerraform(this._stats.internalValue),
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
        value: cdktf.listMapperHcl(dataThunderAamAuthenticationRelayKerberosStatsInstanceListStructToHclTerraform, true)(this._instanceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationRelayKerberosStatsInstanceListStructList",
      },
      stats: {
        value: dataThunderAamAuthenticationRelayKerberosStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationRelayKerberosStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
