// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthenticationGlobalStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats#id DataThunderAamAuthenticationGlobalStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats#stats DataThunderAamAuthenticationGlobalStats#stats}
  */
  readonly stats?: DataThunderAamAuthenticationGlobalStatsStats;
}
export interface DataThunderAamAuthenticationGlobalStatsStats {
  /**
  * Total Active Auth-Sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats#active_session DataThunderAamAuthenticationGlobalStats#active_session}
  */
  readonly activeSession?: number;
  /**
  * Total Active Users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats#active_user DataThunderAamAuthenticationGlobalStats#active_user}
  */
  readonly activeUser?: number;
  /**
  * Total Authorization failure number in aFleX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats#aflex_authz_fail DataThunderAamAuthenticationGlobalStats#aflex_authz_fail}
  */
  readonly aflexAuthzFail?: number;
  /**
  * Total Authorization success number in aFleX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats#aflex_authz_succ DataThunderAamAuthenticationGlobalStats#aflex_authz_succ}
  */
  readonly aflexAuthzSucc?: number;
  /**
  * Total Auth Contexts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats#auth_ctx_num DataThunderAamAuthenticationGlobalStats#auth_ctx_num}
  */
  readonly authCtxNum?: number;
  /**
  * Total Authentication failure number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats#authn_failure DataThunderAamAuthenticationGlobalStats#authn_failure}
  */
  readonly authnFailure?: number;
  /**
  * Total Authentication success number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats#authn_success DataThunderAamAuthenticationGlobalStats#authn_success}
  */
  readonly authnSuccess?: number;
  /**
  * Total Authorization failure number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats#authz_failure DataThunderAamAuthenticationGlobalStats#authz_failure}
  */
  readonly authzFailure?: number;
  /**
  * Total Authorization success number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats#authz_success DataThunderAamAuthenticationGlobalStats#authz_success}
  */
  readonly authzSuccess?: number;
  /**
  * Total AAM Connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats#connect DataThunderAamAuthenticationGlobalStats#connect}
  */
  readonly connect?: number;
  /**
  * Total AAM Connect Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats#connect_failed DataThunderAamAuthenticationGlobalStats#connect_failed}
  */
  readonly connectFailed?: number;
  /**
  * Total AAM Timer Creation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats#create_timer_failed DataThunderAamAuthenticationGlobalStats#create_timer_failed}
  */
  readonly createTimerFailed?: number;
  /**
  * Total AAM Timer Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats#created_timer DataThunderAamAuthenticationGlobalStats#created_timer}
  */
  readonly createdTimer?: number;
  /**
  * Total AAM DNS resolve failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats#dns_resolve_failed DataThunderAamAuthenticationGlobalStats#dns_resolve_failed}
  */
  readonly dnsResolveFailed?: number;
  /**
  * Total DOMAIN WHITELIST match number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats#domain_wlist_match DataThunderAamAuthenticationGlobalStats#domain_wlist_match}
  */
  readonly domainWlistMatch?: number;
  /**
  * Total DOMAIN WHITELIST unmatch number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats#domain_wlist_unmatch DataThunderAamAuthenticationGlobalStats#domain_wlist_unmatch}
  */
  readonly domainWlistUnmatch?: number;
  /**
  * Total AAM Get Socket Option Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats#get_socket_option_failed DataThunderAamAuthenticationGlobalStats#get_socket_option_failed}
  */
  readonly fetchSocketOptionFailed?: number;
  /**
  * Total Authentication Request Missed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats#misses DataThunderAamAuthenticationGlobalStats#misses}
  */
  readonly misses?: number;
  /**
  * Total OCSP Stapling Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats#ocsp_stapling_requests_to_a10authd DataThunderAamAuthenticationGlobalStats#ocsp_stapling_requests_to_a10authd}
  */
  readonly ocspStaplingRequestsToA10Authd?: number;
  /**
  * Total OCSP Stapling Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats#ocsp_stapling_responses_from_a10authd DataThunderAamAuthenticationGlobalStats#ocsp_stapling_responses_from_a10authd}
  */
  readonly ocspStaplingResponsesFromA10Authd?: number;
  /**
  * Total AAM Open Socket Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats#open_socket_failed DataThunderAamAuthenticationGlobalStats#open_socket_failed}
  */
  readonly openSocketFailed?: number;
  /**
  * Total AAM Socket Opened
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats#opened_socket DataThunderAamAuthenticationGlobalStats#opened_socket}
  */
  readonly openedSocket?: number;
  /**
  * Total Authentication Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats#requests DataThunderAamAuthenticationGlobalStats#requests}
  */
  readonly requests?: number;
  /**
  * Total Authentication Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats#responses DataThunderAamAuthenticationGlobalStats#responses}
  */
  readonly responses?: number;
  /**
  * Total Request Received by A10 Auth Service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats#total_request DataThunderAamAuthenticationGlobalStats#total_request}
  */
  readonly totalRequest?: number;
}

export function dataThunderAamAuthenticationGlobalStatsStatsToTerraform(struct?: DataThunderAamAuthenticationGlobalStatsStatsOutputReference | DataThunderAamAuthenticationGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_session: cdktf.numberToTerraform(struct!.activeSession),
    active_user: cdktf.numberToTerraform(struct!.activeUser),
    aflex_authz_fail: cdktf.numberToTerraform(struct!.aflexAuthzFail),
    aflex_authz_succ: cdktf.numberToTerraform(struct!.aflexAuthzSucc),
    auth_ctx_num: cdktf.numberToTerraform(struct!.authCtxNum),
    authn_failure: cdktf.numberToTerraform(struct!.authnFailure),
    authn_success: cdktf.numberToTerraform(struct!.authnSuccess),
    authz_failure: cdktf.numberToTerraform(struct!.authzFailure),
    authz_success: cdktf.numberToTerraform(struct!.authzSuccess),
    connect: cdktf.numberToTerraform(struct!.connect),
    connect_failed: cdktf.numberToTerraform(struct!.connectFailed),
    create_timer_failed: cdktf.numberToTerraform(struct!.createTimerFailed),
    created_timer: cdktf.numberToTerraform(struct!.createdTimer),
    dns_resolve_failed: cdktf.numberToTerraform(struct!.dnsResolveFailed),
    domain_wlist_match: cdktf.numberToTerraform(struct!.domainWlistMatch),
    domain_wlist_unmatch: cdktf.numberToTerraform(struct!.domainWlistUnmatch),
    get_socket_option_failed: cdktf.numberToTerraform(struct!.fetchSocketOptionFailed),
    misses: cdktf.numberToTerraform(struct!.misses),
    ocsp_stapling_requests_to_a10authd: cdktf.numberToTerraform(struct!.ocspStaplingRequestsToA10Authd),
    ocsp_stapling_responses_from_a10authd: cdktf.numberToTerraform(struct!.ocspStaplingResponsesFromA10Authd),
    open_socket_failed: cdktf.numberToTerraform(struct!.openSocketFailed),
    opened_socket: cdktf.numberToTerraform(struct!.openedSocket),
    requests: cdktf.numberToTerraform(struct!.requests),
    responses: cdktf.numberToTerraform(struct!.responses),
    total_request: cdktf.numberToTerraform(struct!.totalRequest),
  }
}


export function dataThunderAamAuthenticationGlobalStatsStatsToHclTerraform(struct?: DataThunderAamAuthenticationGlobalStatsStatsOutputReference | DataThunderAamAuthenticationGlobalStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_session: {
      value: cdktf.numberToHclTerraform(struct!.activeSession),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    active_user: {
      value: cdktf.numberToHclTerraform(struct!.activeUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_authz_fail: {
      value: cdktf.numberToHclTerraform(struct!.aflexAuthzFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    aflex_authz_succ: {
      value: cdktf.numberToHclTerraform(struct!.aflexAuthzSucc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_ctx_num: {
      value: cdktf.numberToHclTerraform(struct!.authCtxNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authn_failure: {
      value: cdktf.numberToHclTerraform(struct!.authnFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authn_success: {
      value: cdktf.numberToHclTerraform(struct!.authnSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authz_failure: {
      value: cdktf.numberToHclTerraform(struct!.authzFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    authz_success: {
      value: cdktf.numberToHclTerraform(struct!.authzSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connect: {
      value: cdktf.numberToHclTerraform(struct!.connect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    connect_failed: {
      value: cdktf.numberToHclTerraform(struct!.connectFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    create_timer_failed: {
      value: cdktf.numberToHclTerraform(struct!.createTimerFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    created_timer: {
      value: cdktf.numberToHclTerraform(struct!.createdTimer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_resolve_failed: {
      value: cdktf.numberToHclTerraform(struct!.dnsResolveFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    domain_wlist_match: {
      value: cdktf.numberToHclTerraform(struct!.domainWlistMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    domain_wlist_unmatch: {
      value: cdktf.numberToHclTerraform(struct!.domainWlistUnmatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    get_socket_option_failed: {
      value: cdktf.numberToHclTerraform(struct!.fetchSocketOptionFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    misses: {
      value: cdktf.numberToHclTerraform(struct!.misses),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_stapling_requests_to_a10authd: {
      value: cdktf.numberToHclTerraform(struct!.ocspStaplingRequestsToA10Authd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocsp_stapling_responses_from_a10authd: {
      value: cdktf.numberToHclTerraform(struct!.ocspStaplingResponsesFromA10Authd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    open_socket_failed: {
      value: cdktf.numberToHclTerraform(struct!.openSocketFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    opened_socket: {
      value: cdktf.numberToHclTerraform(struct!.openedSocket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    requests: {
      value: cdktf.numberToHclTerraform(struct!.requests),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    responses: {
      value: cdktf.numberToHclTerraform(struct!.responses),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_request: {
      value: cdktf.numberToHclTerraform(struct!.totalRequest),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationGlobalStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationGlobalStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeSession !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeSession = this._activeSession;
    }
    if (this._activeUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeUser = this._activeUser;
    }
    if (this._aflexAuthzFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexAuthzFail = this._aflexAuthzFail;
    }
    if (this._aflexAuthzSucc !== undefined) {
      hasAnyValues = true;
      internalValueResult.aflexAuthzSucc = this._aflexAuthzSucc;
    }
    if (this._authCtxNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.authCtxNum = this._authCtxNum;
    }
    if (this._authnFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.authnFailure = this._authnFailure;
    }
    if (this._authnSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.authnSuccess = this._authnSuccess;
    }
    if (this._authzFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.authzFailure = this._authzFailure;
    }
    if (this._authzSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.authzSuccess = this._authzSuccess;
    }
    if (this._connect !== undefined) {
      hasAnyValues = true;
      internalValueResult.connect = this._connect;
    }
    if (this._connectFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectFailed = this._connectFailed;
    }
    if (this._createTimerFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.createTimerFailed = this._createTimerFailed;
    }
    if (this._createdTimer !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdTimer = this._createdTimer;
    }
    if (this._dnsResolveFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsResolveFailed = this._dnsResolveFailed;
    }
    if (this._domainWlistMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainWlistMatch = this._domainWlistMatch;
    }
    if (this._domainWlistUnmatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainWlistUnmatch = this._domainWlistUnmatch;
    }
    if (this._getSocketOptionFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.fetchSocketOptionFailed = this._getSocketOptionFailed;
    }
    if (this._misses !== undefined) {
      hasAnyValues = true;
      internalValueResult.misses = this._misses;
    }
    if (this._ocspStaplingRequestsToA10Authd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspStaplingRequestsToA10Authd = this._ocspStaplingRequestsToA10Authd;
    }
    if (this._ocspStaplingResponsesFromA10Authd !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocspStaplingResponsesFromA10Authd = this._ocspStaplingResponsesFromA10Authd;
    }
    if (this._openSocketFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.openSocketFailed = this._openSocketFailed;
    }
    if (this._openedSocket !== undefined) {
      hasAnyValues = true;
      internalValueResult.openedSocket = this._openedSocket;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    if (this._responses !== undefined) {
      hasAnyValues = true;
      internalValueResult.responses = this._responses;
    }
    if (this._totalRequest !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalRequest = this._totalRequest;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationGlobalStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeSession = undefined;
      this._activeUser = undefined;
      this._aflexAuthzFail = undefined;
      this._aflexAuthzSucc = undefined;
      this._authCtxNum = undefined;
      this._authnFailure = undefined;
      this._authnSuccess = undefined;
      this._authzFailure = undefined;
      this._authzSuccess = undefined;
      this._connect = undefined;
      this._connectFailed = undefined;
      this._createTimerFailed = undefined;
      this._createdTimer = undefined;
      this._dnsResolveFailed = undefined;
      this._domainWlistMatch = undefined;
      this._domainWlistUnmatch = undefined;
      this._getSocketOptionFailed = undefined;
      this._misses = undefined;
      this._ocspStaplingRequestsToA10Authd = undefined;
      this._ocspStaplingResponsesFromA10Authd = undefined;
      this._openSocketFailed = undefined;
      this._openedSocket = undefined;
      this._requests = undefined;
      this._responses = undefined;
      this._totalRequest = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeSession = value.activeSession;
      this._activeUser = value.activeUser;
      this._aflexAuthzFail = value.aflexAuthzFail;
      this._aflexAuthzSucc = value.aflexAuthzSucc;
      this._authCtxNum = value.authCtxNum;
      this._authnFailure = value.authnFailure;
      this._authnSuccess = value.authnSuccess;
      this._authzFailure = value.authzFailure;
      this._authzSuccess = value.authzSuccess;
      this._connect = value.connect;
      this._connectFailed = value.connectFailed;
      this._createTimerFailed = value.createTimerFailed;
      this._createdTimer = value.createdTimer;
      this._dnsResolveFailed = value.dnsResolveFailed;
      this._domainWlistMatch = value.domainWlistMatch;
      this._domainWlistUnmatch = value.domainWlistUnmatch;
      this._getSocketOptionFailed = value.fetchSocketOptionFailed;
      this._misses = value.misses;
      this._ocspStaplingRequestsToA10Authd = value.ocspStaplingRequestsToA10Authd;
      this._ocspStaplingResponsesFromA10Authd = value.ocspStaplingResponsesFromA10Authd;
      this._openSocketFailed = value.openSocketFailed;
      this._openedSocket = value.openedSocket;
      this._requests = value.requests;
      this._responses = value.responses;
      this._totalRequest = value.totalRequest;
    }
  }

  // active_session - computed: false, optional: true, required: false
  private _activeSession?: number; 
  public get activeSession() {
    return this.getNumberAttribute('active_session');
  }
  public set activeSession(value: number) {
    this._activeSession = value;
  }
  public resetActiveSession() {
    this._activeSession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeSessionInput() {
    return this._activeSession;
  }

  // active_user - computed: false, optional: true, required: false
  private _activeUser?: number; 
  public get activeUser() {
    return this.getNumberAttribute('active_user');
  }
  public set activeUser(value: number) {
    this._activeUser = value;
  }
  public resetActiveUser() {
    this._activeUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeUserInput() {
    return this._activeUser;
  }

  // aflex_authz_fail - computed: false, optional: true, required: false
  private _aflexAuthzFail?: number; 
  public get aflexAuthzFail() {
    return this.getNumberAttribute('aflex_authz_fail');
  }
  public set aflexAuthzFail(value: number) {
    this._aflexAuthzFail = value;
  }
  public resetAflexAuthzFail() {
    this._aflexAuthzFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexAuthzFailInput() {
    return this._aflexAuthzFail;
  }

  // aflex_authz_succ - computed: false, optional: true, required: false
  private _aflexAuthzSucc?: number; 
  public get aflexAuthzSucc() {
    return this.getNumberAttribute('aflex_authz_succ');
  }
  public set aflexAuthzSucc(value: number) {
    this._aflexAuthzSucc = value;
  }
  public resetAflexAuthzSucc() {
    this._aflexAuthzSucc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aflexAuthzSuccInput() {
    return this._aflexAuthzSucc;
  }

  // auth_ctx_num - computed: false, optional: true, required: false
  private _authCtxNum?: number; 
  public get authCtxNum() {
    return this.getNumberAttribute('auth_ctx_num');
  }
  public set authCtxNum(value: number) {
    this._authCtxNum = value;
  }
  public resetAuthCtxNum() {
    this._authCtxNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCtxNumInput() {
    return this._authCtxNum;
  }

  // authn_failure - computed: false, optional: true, required: false
  private _authnFailure?: number; 
  public get authnFailure() {
    return this.getNumberAttribute('authn_failure');
  }
  public set authnFailure(value: number) {
    this._authnFailure = value;
  }
  public resetAuthnFailure() {
    this._authnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authnFailureInput() {
    return this._authnFailure;
  }

  // authn_success - computed: false, optional: true, required: false
  private _authnSuccess?: number; 
  public get authnSuccess() {
    return this.getNumberAttribute('authn_success');
  }
  public set authnSuccess(value: number) {
    this._authnSuccess = value;
  }
  public resetAuthnSuccess() {
    this._authnSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authnSuccessInput() {
    return this._authnSuccess;
  }

  // authz_failure - computed: false, optional: true, required: false
  private _authzFailure?: number; 
  public get authzFailure() {
    return this.getNumberAttribute('authz_failure');
  }
  public set authzFailure(value: number) {
    this._authzFailure = value;
  }
  public resetAuthzFailure() {
    this._authzFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authzFailureInput() {
    return this._authzFailure;
  }

  // authz_success - computed: false, optional: true, required: false
  private _authzSuccess?: number; 
  public get authzSuccess() {
    return this.getNumberAttribute('authz_success');
  }
  public set authzSuccess(value: number) {
    this._authzSuccess = value;
  }
  public resetAuthzSuccess() {
    this._authzSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authzSuccessInput() {
    return this._authzSuccess;
  }

  // connect - computed: false, optional: true, required: false
  private _connect?: number; 
  public get connect() {
    return this.getNumberAttribute('connect');
  }
  public set connect(value: number) {
    this._connect = value;
  }
  public resetConnect() {
    this._connect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectInput() {
    return this._connect;
  }

  // connect_failed - computed: false, optional: true, required: false
  private _connectFailed?: number; 
  public get connectFailed() {
    return this.getNumberAttribute('connect_failed');
  }
  public set connectFailed(value: number) {
    this._connectFailed = value;
  }
  public resetConnectFailed() {
    this._connectFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectFailedInput() {
    return this._connectFailed;
  }

  // create_timer_failed - computed: false, optional: true, required: false
  private _createTimerFailed?: number; 
  public get createTimerFailed() {
    return this.getNumberAttribute('create_timer_failed');
  }
  public set createTimerFailed(value: number) {
    this._createTimerFailed = value;
  }
  public resetCreateTimerFailed() {
    this._createTimerFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimerFailedInput() {
    return this._createTimerFailed;
  }

  // created_timer - computed: false, optional: true, required: false
  private _createdTimer?: number; 
  public get createdTimer() {
    return this.getNumberAttribute('created_timer');
  }
  public set createdTimer(value: number) {
    this._createdTimer = value;
  }
  public resetCreatedTimer() {
    this._createdTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdTimerInput() {
    return this._createdTimer;
  }

  // dns_resolve_failed - computed: false, optional: true, required: false
  private _dnsResolveFailed?: number; 
  public get dnsResolveFailed() {
    return this.getNumberAttribute('dns_resolve_failed');
  }
  public set dnsResolveFailed(value: number) {
    this._dnsResolveFailed = value;
  }
  public resetDnsResolveFailed() {
    this._dnsResolveFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsResolveFailedInput() {
    return this._dnsResolveFailed;
  }

  // domain_wlist_match - computed: false, optional: true, required: false
  private _domainWlistMatch?: number; 
  public get domainWlistMatch() {
    return this.getNumberAttribute('domain_wlist_match');
  }
  public set domainWlistMatch(value: number) {
    this._domainWlistMatch = value;
  }
  public resetDomainWlistMatch() {
    this._domainWlistMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainWlistMatchInput() {
    return this._domainWlistMatch;
  }

  // domain_wlist_unmatch - computed: false, optional: true, required: false
  private _domainWlistUnmatch?: number; 
  public get domainWlistUnmatch() {
    return this.getNumberAttribute('domain_wlist_unmatch');
  }
  public set domainWlistUnmatch(value: number) {
    this._domainWlistUnmatch = value;
  }
  public resetDomainWlistUnmatch() {
    this._domainWlistUnmatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainWlistUnmatchInput() {
    return this._domainWlistUnmatch;
  }

  // get_socket_option_failed - computed: false, optional: true, required: false
  private _getSocketOptionFailed?: number; 
  public get fetchSocketOptionFailed() {
    return this.getNumberAttribute('get_socket_option_failed');
  }
  public set fetchSocketOptionFailed(value: number) {
    this._getSocketOptionFailed = value;
  }
  public resetFetchSocketOptionFailed() {
    this._getSocketOptionFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchSocketOptionFailedInput() {
    return this._getSocketOptionFailed;
  }

  // misses - computed: false, optional: true, required: false
  private _misses?: number; 
  public get misses() {
    return this.getNumberAttribute('misses');
  }
  public set misses(value: number) {
    this._misses = value;
  }
  public resetMisses() {
    this._misses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get missesInput() {
    return this._misses;
  }

  // ocsp_stapling_requests_to_a10authd - computed: false, optional: true, required: false
  private _ocspStaplingRequestsToA10Authd?: number; 
  public get ocspStaplingRequestsToA10Authd() {
    return this.getNumberAttribute('ocsp_stapling_requests_to_a10authd');
  }
  public set ocspStaplingRequestsToA10Authd(value: number) {
    this._ocspStaplingRequestsToA10Authd = value;
  }
  public resetOcspStaplingRequestsToA10Authd() {
    this._ocspStaplingRequestsToA10Authd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspStaplingRequestsToA10AuthdInput() {
    return this._ocspStaplingRequestsToA10Authd;
  }

  // ocsp_stapling_responses_from_a10authd - computed: false, optional: true, required: false
  private _ocspStaplingResponsesFromA10Authd?: number; 
  public get ocspStaplingResponsesFromA10Authd() {
    return this.getNumberAttribute('ocsp_stapling_responses_from_a10authd');
  }
  public set ocspStaplingResponsesFromA10Authd(value: number) {
    this._ocspStaplingResponsesFromA10Authd = value;
  }
  public resetOcspStaplingResponsesFromA10Authd() {
    this._ocspStaplingResponsesFromA10Authd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ocspStaplingResponsesFromA10AuthdInput() {
    return this._ocspStaplingResponsesFromA10Authd;
  }

  // open_socket_failed - computed: false, optional: true, required: false
  private _openSocketFailed?: number; 
  public get openSocketFailed() {
    return this.getNumberAttribute('open_socket_failed');
  }
  public set openSocketFailed(value: number) {
    this._openSocketFailed = value;
  }
  public resetOpenSocketFailed() {
    this._openSocketFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openSocketFailedInput() {
    return this._openSocketFailed;
  }

  // opened_socket - computed: false, optional: true, required: false
  private _openedSocket?: number; 
  public get openedSocket() {
    return this.getNumberAttribute('opened_socket');
  }
  public set openedSocket(value: number) {
    this._openedSocket = value;
  }
  public resetOpenedSocket() {
    this._openedSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openedSocketInput() {
    return this._openedSocket;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: number; 
  public get requests() {
    return this.getNumberAttribute('requests');
  }
  public set requests(value: number) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }

  // responses - computed: false, optional: true, required: false
  private _responses?: number; 
  public get responses() {
    return this.getNumberAttribute('responses');
  }
  public set responses(value: number) {
    this._responses = value;
  }
  public resetResponses() {
    this._responses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responsesInput() {
    return this._responses;
  }

  // total_request - computed: false, optional: true, required: false
  private _totalRequest?: number; 
  public get totalRequest() {
    return this.getNumberAttribute('total_request');
  }
  public set totalRequest(value: number) {
    this._totalRequest = value;
  }
  public resetTotalRequest() {
    this._totalRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRequestInput() {
    return this._totalRequest;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats thunder_aam_authentication_global_stats}
*/
export class DataThunderAamAuthenticationGlobalStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_global_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthenticationGlobalStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthenticationGlobalStats to import
  * @param importFromId The id of the existing DataThunderAamAuthenticationGlobalStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthenticationGlobalStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_global_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_global_stats thunder_aam_authentication_global_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthenticationGlobalStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthenticationGlobalStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_global_stats',
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
  private _stats = new DataThunderAamAuthenticationGlobalStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamAuthenticationGlobalStatsStats) {
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
      stats: dataThunderAamAuthenticationGlobalStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderAamAuthenticationGlobalStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationGlobalStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
