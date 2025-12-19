// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthenticationServerLdapStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#id DataThunderAamAuthenticationServerLdapStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * instance_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#instance_list DataThunderAamAuthenticationServerLdapStats#instance_list}
  */
  readonly instanceList?: DataThunderAamAuthenticationServerLdapStatsInstanceListStruct[] | cdktf.IResolvable;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#stats DataThunderAamAuthenticationServerLdapStats#stats}
  */
  readonly stats?: DataThunderAamAuthenticationServerLdapStatsStats;
}
export interface DataThunderAamAuthenticationServerLdapStatsInstanceListStats {
  /**
  * Admin Bind Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#admin_bind_failure DataThunderAamAuthenticationServerLdapStats#admin_bind_failure}
  */
  readonly adminBindFailure?: number;
  /**
  * Admin Bind Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#admin_bind_success DataThunderAamAuthenticationServerLdapStats#admin_bind_success}
  */
  readonly adminBindSuccess?: number;
  /**
  * Authorization Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#authorize_failure DataThunderAamAuthenticationServerLdapStats#authorize_failure}
  */
  readonly authorizeFailure?: number;
  /**
  * Authorization Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#authorize_success DataThunderAamAuthenticationServerLdapStats#authorize_success}
  */
  readonly authorizeSuccess?: number;
  /**
  * User Bind Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#bind_failure DataThunderAamAuthenticationServerLdapStats#bind_failure}
  */
  readonly bindFailure?: number;
  /**
  * User Bind Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#bind_success DataThunderAamAuthenticationServerLdapStats#bind_success}
  */
  readonly bindSuccess?: number;
  /**
  * Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#other_error DataThunderAamAuthenticationServerLdapStats#other_error}
  */
  readonly otherError?: number;
  /**
  * Password change failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#pw_change_failure DataThunderAamAuthenticationServerLdapStats#pw_change_failure}
  */
  readonly pwChangeFailure?: number;
  /**
  * Password change success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#pw_change_success DataThunderAamAuthenticationServerLdapStats#pw_change_success}
  */
  readonly pwChangeSuccess?: number;
  /**
  * Password expiry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#pw_expiry DataThunderAamAuthenticationServerLdapStats#pw_expiry}
  */
  readonly pwExpiry?: number;
  /**
  * Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#request DataThunderAamAuthenticationServerLdapStats#request}
  */
  readonly request?: number;
  /**
  * Search Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#search_failure DataThunderAamAuthenticationServerLdapStats#search_failure}
  */
  readonly searchFailure?: number;
  /**
  * Search Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#search_success DataThunderAamAuthenticationServerLdapStats#search_success}
  */
  readonly searchSuccess?: number;
  /**
  * TLS/SSL Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#ssl_session_created DataThunderAamAuthenticationServerLdapStats#ssl_session_created}
  */
  readonly sslSessionCreated?: number;
  /**
  * TLS/SSL Session Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#ssl_session_failure DataThunderAamAuthenticationServerLdapStats#ssl_session_failure}
  */
  readonly sslSessionFailure?: number;
  /**
  * Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#timeout_error DataThunderAamAuthenticationServerLdapStats#timeout_error}
  */
  readonly timeoutError?: number;
}

export function dataThunderAamAuthenticationServerLdapStatsInstanceListStatsToTerraform(struct?: DataThunderAamAuthenticationServerLdapStatsInstanceListStatsOutputReference | DataThunderAamAuthenticationServerLdapStatsInstanceListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_bind_failure: cdktf.numberToTerraform(struct!.adminBindFailure),
    admin_bind_success: cdktf.numberToTerraform(struct!.adminBindSuccess),
    authorize_failure: cdktf.numberToTerraform(struct!.authorizeFailure),
    authorize_success: cdktf.numberToTerraform(struct!.authorizeSuccess),
    bind_failure: cdktf.numberToTerraform(struct!.bindFailure),
    bind_success: cdktf.numberToTerraform(struct!.bindSuccess),
    other_error: cdktf.numberToTerraform(struct!.otherError),
    pw_change_failure: cdktf.numberToTerraform(struct!.pwChangeFailure),
    pw_change_success: cdktf.numberToTerraform(struct!.pwChangeSuccess),
    pw_expiry: cdktf.numberToTerraform(struct!.pwExpiry),
    request: cdktf.numberToTerraform(struct!.request),
    search_failure: cdktf.numberToTerraform(struct!.searchFailure),
    search_success: cdktf.numberToTerraform(struct!.searchSuccess),
    ssl_session_created: cdktf.numberToTerraform(struct!.sslSessionCreated),
    ssl_session_failure: cdktf.numberToTerraform(struct!.sslSessionFailure),
    timeout_error: cdktf.numberToTerraform(struct!.timeoutError),
  }
}


export function dataThunderAamAuthenticationServerLdapStatsInstanceListStatsToHclTerraform(struct?: DataThunderAamAuthenticationServerLdapStatsInstanceListStatsOutputReference | DataThunderAamAuthenticationServerLdapStatsInstanceListStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_bind_failure: {
      value: cdktf.numberToHclTerraform(struct!.adminBindFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    admin_bind_success: {
      value: cdktf.numberToHclTerraform(struct!.adminBindSuccess),
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
    bind_failure: {
      value: cdktf.numberToHclTerraform(struct!.bindFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bind_success: {
      value: cdktf.numberToHclTerraform(struct!.bindSuccess),
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
    pw_change_failure: {
      value: cdktf.numberToHclTerraform(struct!.pwChangeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pw_change_success: {
      value: cdktf.numberToHclTerraform(struct!.pwChangeSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pw_expiry: {
      value: cdktf.numberToHclTerraform(struct!.pwExpiry),
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
    search_failure: {
      value: cdktf.numberToHclTerraform(struct!.searchFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    search_success: {
      value: cdktf.numberToHclTerraform(struct!.searchSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_session_created: {
      value: cdktf.numberToHclTerraform(struct!.sslSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_session_failure: {
      value: cdktf.numberToHclTerraform(struct!.sslSessionFailure),
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

export class DataThunderAamAuthenticationServerLdapStatsInstanceListStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationServerLdapStatsInstanceListStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminBindFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminBindFailure = this._adminBindFailure;
    }
    if (this._adminBindSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminBindSuccess = this._adminBindSuccess;
    }
    if (this._authorizeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizeFailure = this._authorizeFailure;
    }
    if (this._authorizeSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizeSuccess = this._authorizeSuccess;
    }
    if (this._bindFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindFailure = this._bindFailure;
    }
    if (this._bindSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindSuccess = this._bindSuccess;
    }
    if (this._otherError !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherError = this._otherError;
    }
    if (this._pwChangeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.pwChangeFailure = this._pwChangeFailure;
    }
    if (this._pwChangeSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.pwChangeSuccess = this._pwChangeSuccess;
    }
    if (this._pwExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.pwExpiry = this._pwExpiry;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    if (this._searchFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchFailure = this._searchFailure;
    }
    if (this._searchSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchSuccess = this._searchSuccess;
    }
    if (this._sslSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSessionCreated = this._sslSessionCreated;
    }
    if (this._sslSessionFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSessionFailure = this._sslSessionFailure;
    }
    if (this._timeoutError !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutError = this._timeoutError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationServerLdapStatsInstanceListStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminBindFailure = undefined;
      this._adminBindSuccess = undefined;
      this._authorizeFailure = undefined;
      this._authorizeSuccess = undefined;
      this._bindFailure = undefined;
      this._bindSuccess = undefined;
      this._otherError = undefined;
      this._pwChangeFailure = undefined;
      this._pwChangeSuccess = undefined;
      this._pwExpiry = undefined;
      this._request = undefined;
      this._searchFailure = undefined;
      this._searchSuccess = undefined;
      this._sslSessionCreated = undefined;
      this._sslSessionFailure = undefined;
      this._timeoutError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminBindFailure = value.adminBindFailure;
      this._adminBindSuccess = value.adminBindSuccess;
      this._authorizeFailure = value.authorizeFailure;
      this._authorizeSuccess = value.authorizeSuccess;
      this._bindFailure = value.bindFailure;
      this._bindSuccess = value.bindSuccess;
      this._otherError = value.otherError;
      this._pwChangeFailure = value.pwChangeFailure;
      this._pwChangeSuccess = value.pwChangeSuccess;
      this._pwExpiry = value.pwExpiry;
      this._request = value.request;
      this._searchFailure = value.searchFailure;
      this._searchSuccess = value.searchSuccess;
      this._sslSessionCreated = value.sslSessionCreated;
      this._sslSessionFailure = value.sslSessionFailure;
      this._timeoutError = value.timeoutError;
    }
  }

  // admin_bind_failure - computed: false, optional: true, required: false
  private _adminBindFailure?: number; 
  public get adminBindFailure() {
    return this.getNumberAttribute('admin_bind_failure');
  }
  public set adminBindFailure(value: number) {
    this._adminBindFailure = value;
  }
  public resetAdminBindFailure() {
    this._adminBindFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminBindFailureInput() {
    return this._adminBindFailure;
  }

  // admin_bind_success - computed: false, optional: true, required: false
  private _adminBindSuccess?: number; 
  public get adminBindSuccess() {
    return this.getNumberAttribute('admin_bind_success');
  }
  public set adminBindSuccess(value: number) {
    this._adminBindSuccess = value;
  }
  public resetAdminBindSuccess() {
    this._adminBindSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminBindSuccessInput() {
    return this._adminBindSuccess;
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

  // bind_failure - computed: false, optional: true, required: false
  private _bindFailure?: number; 
  public get bindFailure() {
    return this.getNumberAttribute('bind_failure');
  }
  public set bindFailure(value: number) {
    this._bindFailure = value;
  }
  public resetBindFailure() {
    this._bindFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindFailureInput() {
    return this._bindFailure;
  }

  // bind_success - computed: false, optional: true, required: false
  private _bindSuccess?: number; 
  public get bindSuccess() {
    return this.getNumberAttribute('bind_success');
  }
  public set bindSuccess(value: number) {
    this._bindSuccess = value;
  }
  public resetBindSuccess() {
    this._bindSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindSuccessInput() {
    return this._bindSuccess;
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

  // pw_change_failure - computed: false, optional: true, required: false
  private _pwChangeFailure?: number; 
  public get pwChangeFailure() {
    return this.getNumberAttribute('pw_change_failure');
  }
  public set pwChangeFailure(value: number) {
    this._pwChangeFailure = value;
  }
  public resetPwChangeFailure() {
    this._pwChangeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwChangeFailureInput() {
    return this._pwChangeFailure;
  }

  // pw_change_success - computed: false, optional: true, required: false
  private _pwChangeSuccess?: number; 
  public get pwChangeSuccess() {
    return this.getNumberAttribute('pw_change_success');
  }
  public set pwChangeSuccess(value: number) {
    this._pwChangeSuccess = value;
  }
  public resetPwChangeSuccess() {
    this._pwChangeSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwChangeSuccessInput() {
    return this._pwChangeSuccess;
  }

  // pw_expiry - computed: false, optional: true, required: false
  private _pwExpiry?: number; 
  public get pwExpiry() {
    return this.getNumberAttribute('pw_expiry');
  }
  public set pwExpiry(value: number) {
    this._pwExpiry = value;
  }
  public resetPwExpiry() {
    this._pwExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwExpiryInput() {
    return this._pwExpiry;
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

  // search_failure - computed: false, optional: true, required: false
  private _searchFailure?: number; 
  public get searchFailure() {
    return this.getNumberAttribute('search_failure');
  }
  public set searchFailure(value: number) {
    this._searchFailure = value;
  }
  public resetSearchFailure() {
    this._searchFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchFailureInput() {
    return this._searchFailure;
  }

  // search_success - computed: false, optional: true, required: false
  private _searchSuccess?: number; 
  public get searchSuccess() {
    return this.getNumberAttribute('search_success');
  }
  public set searchSuccess(value: number) {
    this._searchSuccess = value;
  }
  public resetSearchSuccess() {
    this._searchSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchSuccessInput() {
    return this._searchSuccess;
  }

  // ssl_session_created - computed: false, optional: true, required: false
  private _sslSessionCreated?: number; 
  public get sslSessionCreated() {
    return this.getNumberAttribute('ssl_session_created');
  }
  public set sslSessionCreated(value: number) {
    this._sslSessionCreated = value;
  }
  public resetSslSessionCreated() {
    this._sslSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSessionCreatedInput() {
    return this._sslSessionCreated;
  }

  // ssl_session_failure - computed: false, optional: true, required: false
  private _sslSessionFailure?: number; 
  public get sslSessionFailure() {
    return this.getNumberAttribute('ssl_session_failure');
  }
  public set sslSessionFailure(value: number) {
    this._sslSessionFailure = value;
  }
  public resetSslSessionFailure() {
    this._sslSessionFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSessionFailureInput() {
    return this._sslSessionFailure;
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
export interface DataThunderAamAuthenticationServerLdapStatsInstanceListStruct {
  /**
  * Specify LDAP authentication server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#name DataThunderAamAuthenticationServerLdapStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#stats DataThunderAamAuthenticationServerLdapStats#stats}
  */
  readonly stats?: DataThunderAamAuthenticationServerLdapStatsInstanceListStats;
}

export function dataThunderAamAuthenticationServerLdapStatsInstanceListStructToTerraform(struct?: DataThunderAamAuthenticationServerLdapStatsInstanceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    stats: dataThunderAamAuthenticationServerLdapStatsInstanceListStatsToTerraform(struct!.stats),
  }
}


export function dataThunderAamAuthenticationServerLdapStatsInstanceListStructToHclTerraform(struct?: DataThunderAamAuthenticationServerLdapStatsInstanceListStruct | cdktf.IResolvable): any {
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
      value: dataThunderAamAuthenticationServerLdapStatsInstanceListStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderAamAuthenticationServerLdapStatsInstanceListStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationServerLdapStatsInstanceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderAamAuthenticationServerLdapStatsInstanceListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderAamAuthenticationServerLdapStatsInstanceListStruct | cdktf.IResolvable | undefined) {
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
  private _stats = new DataThunderAamAuthenticationServerLdapStatsInstanceListStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamAuthenticationServerLdapStatsInstanceListStats) {
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

export class DataThunderAamAuthenticationServerLdapStatsInstanceListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderAamAuthenticationServerLdapStatsInstanceListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderAamAuthenticationServerLdapStatsInstanceListStructOutputReference {
    return new DataThunderAamAuthenticationServerLdapStatsInstanceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderAamAuthenticationServerLdapStatsStats {
  /**
  * Total Admin Bind Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#admin_bind_failure DataThunderAamAuthenticationServerLdapStats#admin_bind_failure}
  */
  readonly adminBindFailure?: number;
  /**
  * Total Admin Bind Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#admin_bind_success DataThunderAamAuthenticationServerLdapStats#admin_bind_success}
  */
  readonly adminBindSuccess?: number;
  /**
  * Total Authorization Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#authorize_failure DataThunderAamAuthenticationServerLdapStats#authorize_failure}
  */
  readonly authorizeFailure?: number;
  /**
  * Total Authorization Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#authorize_success DataThunderAamAuthenticationServerLdapStats#authorize_success}
  */
  readonly authorizeSuccess?: number;
  /**
  * Total User Bind Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#bind_failure DataThunderAamAuthenticationServerLdapStats#bind_failure}
  */
  readonly bindFailure?: number;
  /**
  * Total User Bind Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#bind_success DataThunderAamAuthenticationServerLdapStats#bind_success}
  */
  readonly bindSuccess?: number;
  /**
  * Total Job Start Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#job_start_error DataThunderAamAuthenticationServerLdapStats#job_start_error}
  */
  readonly jobStartError?: number;
  /**
  * LDAPS Idle Connection Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#ldaps_idle_conn_num DataThunderAamAuthenticationServerLdapStats#ldaps_idle_conn_num}
  */
  readonly ldapsIdleConnNum?: number;
  /**
  * LDAPS In-use Connection Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#ldaps_inuse_conn_num DataThunderAamAuthenticationServerLdapStats#ldaps_inuse_conn_num}
  */
  readonly ldapsInuseConnNum?: number;
  /**
  * Total Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#other_error DataThunderAamAuthenticationServerLdapStats#other_error}
  */
  readonly otherError?: number;
  /**
  * Total Polling Control Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#polling_control_error DataThunderAamAuthenticationServerLdapStats#polling_control_error}
  */
  readonly pollingControlError?: number;
  /**
  * Total password change failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#pw_change_failure DataThunderAamAuthenticationServerLdapStats#pw_change_failure}
  */
  readonly pwChangeFailure?: number;
  /**
  * Total password change success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#pw_change_success DataThunderAamAuthenticationServerLdapStats#pw_change_success}
  */
  readonly pwChangeSuccess?: number;
  /**
  * Total Password expiry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#pw_expiry DataThunderAamAuthenticationServerLdapStats#pw_expiry}
  */
  readonly pwExpiry?: number;
  /**
  * Total Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#request DataThunderAamAuthenticationServerLdapStats#request}
  */
  readonly request?: number;
  /**
  * Total Dropped Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#request_dropped DataThunderAamAuthenticationServerLdapStats#request_dropped}
  */
  readonly requestDropped?: number;
  /**
  * Total Normal Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#request_normal DataThunderAamAuthenticationServerLdapStats#request_normal}
  */
  readonly requestNormal?: number;
  /**
  * Total Error Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#response_error DataThunderAamAuthenticationServerLdapStats#response_error}
  */
  readonly responseError?: number;
  /**
  * Total Failure Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#response_failure DataThunderAamAuthenticationServerLdapStats#response_failure}
  */
  readonly responseFailure?: number;
  /**
  * Total Other Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#response_other DataThunderAamAuthenticationServerLdapStats#response_other}
  */
  readonly responseOther?: number;
  /**
  * Total Success Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#response_success DataThunderAamAuthenticationServerLdapStats#response_success}
  */
  readonly responseSuccess?: number;
  /**
  * Total Timeout Response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#response_timeout DataThunderAamAuthenticationServerLdapStats#response_timeout}
  */
  readonly responseTimeout?: number;
  /**
  * Total Search Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#search_failure DataThunderAamAuthenticationServerLdapStats#search_failure}
  */
  readonly searchFailure?: number;
  /**
  * Total Search Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#search_success DataThunderAamAuthenticationServerLdapStats#search_success}
  */
  readonly searchSuccess?: number;
  /**
  * TLS/SSL Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#ssl_session_created DataThunderAamAuthenticationServerLdapStats#ssl_session_created}
  */
  readonly sslSessionCreated?: number;
  /**
  * TLS/SSL Session Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#ssl_session_failure DataThunderAamAuthenticationServerLdapStats#ssl_session_failure}
  */
  readonly sslSessionFailure?: number;
  /**
  * Total Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#timeout_error DataThunderAamAuthenticationServerLdapStats#timeout_error}
  */
  readonly timeoutError?: number;
}

export function dataThunderAamAuthenticationServerLdapStatsStatsToTerraform(struct?: DataThunderAamAuthenticationServerLdapStatsStatsOutputReference | DataThunderAamAuthenticationServerLdapStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_bind_failure: cdktf.numberToTerraform(struct!.adminBindFailure),
    admin_bind_success: cdktf.numberToTerraform(struct!.adminBindSuccess),
    authorize_failure: cdktf.numberToTerraform(struct!.authorizeFailure),
    authorize_success: cdktf.numberToTerraform(struct!.authorizeSuccess),
    bind_failure: cdktf.numberToTerraform(struct!.bindFailure),
    bind_success: cdktf.numberToTerraform(struct!.bindSuccess),
    job_start_error: cdktf.numberToTerraform(struct!.jobStartError),
    ldaps_idle_conn_num: cdktf.numberToTerraform(struct!.ldapsIdleConnNum),
    ldaps_inuse_conn_num: cdktf.numberToTerraform(struct!.ldapsInuseConnNum),
    other_error: cdktf.numberToTerraform(struct!.otherError),
    polling_control_error: cdktf.numberToTerraform(struct!.pollingControlError),
    pw_change_failure: cdktf.numberToTerraform(struct!.pwChangeFailure),
    pw_change_success: cdktf.numberToTerraform(struct!.pwChangeSuccess),
    pw_expiry: cdktf.numberToTerraform(struct!.pwExpiry),
    request: cdktf.numberToTerraform(struct!.request),
    request_dropped: cdktf.numberToTerraform(struct!.requestDropped),
    request_normal: cdktf.numberToTerraform(struct!.requestNormal),
    response_error: cdktf.numberToTerraform(struct!.responseError),
    response_failure: cdktf.numberToTerraform(struct!.responseFailure),
    response_other: cdktf.numberToTerraform(struct!.responseOther),
    response_success: cdktf.numberToTerraform(struct!.responseSuccess),
    response_timeout: cdktf.numberToTerraform(struct!.responseTimeout),
    search_failure: cdktf.numberToTerraform(struct!.searchFailure),
    search_success: cdktf.numberToTerraform(struct!.searchSuccess),
    ssl_session_created: cdktf.numberToTerraform(struct!.sslSessionCreated),
    ssl_session_failure: cdktf.numberToTerraform(struct!.sslSessionFailure),
    timeout_error: cdktf.numberToTerraform(struct!.timeoutError),
  }
}


export function dataThunderAamAuthenticationServerLdapStatsStatsToHclTerraform(struct?: DataThunderAamAuthenticationServerLdapStatsStatsOutputReference | DataThunderAamAuthenticationServerLdapStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_bind_failure: {
      value: cdktf.numberToHclTerraform(struct!.adminBindFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    admin_bind_success: {
      value: cdktf.numberToHclTerraform(struct!.adminBindSuccess),
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
    bind_failure: {
      value: cdktf.numberToHclTerraform(struct!.bindFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bind_success: {
      value: cdktf.numberToHclTerraform(struct!.bindSuccess),
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
    ldaps_idle_conn_num: {
      value: cdktf.numberToHclTerraform(struct!.ldapsIdleConnNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ldaps_inuse_conn_num: {
      value: cdktf.numberToHclTerraform(struct!.ldapsInuseConnNum),
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
    pw_change_failure: {
      value: cdktf.numberToHclTerraform(struct!.pwChangeFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pw_change_success: {
      value: cdktf.numberToHclTerraform(struct!.pwChangeSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pw_expiry: {
      value: cdktf.numberToHclTerraform(struct!.pwExpiry),
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
    search_failure: {
      value: cdktf.numberToHclTerraform(struct!.searchFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    search_success: {
      value: cdktf.numberToHclTerraform(struct!.searchSuccess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_session_created: {
      value: cdktf.numberToHclTerraform(struct!.sslSessionCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl_session_failure: {
      value: cdktf.numberToHclTerraform(struct!.sslSessionFailure),
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

export class DataThunderAamAuthenticationServerLdapStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationServerLdapStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminBindFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminBindFailure = this._adminBindFailure;
    }
    if (this._adminBindSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminBindSuccess = this._adminBindSuccess;
    }
    if (this._authorizeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizeFailure = this._authorizeFailure;
    }
    if (this._authorizeSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizeSuccess = this._authorizeSuccess;
    }
    if (this._bindFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindFailure = this._bindFailure;
    }
    if (this._bindSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindSuccess = this._bindSuccess;
    }
    if (this._jobStartError !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobStartError = this._jobStartError;
    }
    if (this._ldapsIdleConnNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapsIdleConnNum = this._ldapsIdleConnNum;
    }
    if (this._ldapsInuseConnNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapsInuseConnNum = this._ldapsInuseConnNum;
    }
    if (this._otherError !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherError = this._otherError;
    }
    if (this._pollingControlError !== undefined) {
      hasAnyValues = true;
      internalValueResult.pollingControlError = this._pollingControlError;
    }
    if (this._pwChangeFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.pwChangeFailure = this._pwChangeFailure;
    }
    if (this._pwChangeSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.pwChangeSuccess = this._pwChangeSuccess;
    }
    if (this._pwExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.pwExpiry = this._pwExpiry;
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
    if (this._searchFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchFailure = this._searchFailure;
    }
    if (this._searchSuccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.searchSuccess = this._searchSuccess;
    }
    if (this._sslSessionCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSessionCreated = this._sslSessionCreated;
    }
    if (this._sslSessionFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslSessionFailure = this._sslSessionFailure;
    }
    if (this._timeoutError !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutError = this._timeoutError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationServerLdapStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._adminBindFailure = undefined;
      this._adminBindSuccess = undefined;
      this._authorizeFailure = undefined;
      this._authorizeSuccess = undefined;
      this._bindFailure = undefined;
      this._bindSuccess = undefined;
      this._jobStartError = undefined;
      this._ldapsIdleConnNum = undefined;
      this._ldapsInuseConnNum = undefined;
      this._otherError = undefined;
      this._pollingControlError = undefined;
      this._pwChangeFailure = undefined;
      this._pwChangeSuccess = undefined;
      this._pwExpiry = undefined;
      this._request = undefined;
      this._requestDropped = undefined;
      this._requestNormal = undefined;
      this._responseError = undefined;
      this._responseFailure = undefined;
      this._responseOther = undefined;
      this._responseSuccess = undefined;
      this._responseTimeout = undefined;
      this._searchFailure = undefined;
      this._searchSuccess = undefined;
      this._sslSessionCreated = undefined;
      this._sslSessionFailure = undefined;
      this._timeoutError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._adminBindFailure = value.adminBindFailure;
      this._adminBindSuccess = value.adminBindSuccess;
      this._authorizeFailure = value.authorizeFailure;
      this._authorizeSuccess = value.authorizeSuccess;
      this._bindFailure = value.bindFailure;
      this._bindSuccess = value.bindSuccess;
      this._jobStartError = value.jobStartError;
      this._ldapsIdleConnNum = value.ldapsIdleConnNum;
      this._ldapsInuseConnNum = value.ldapsInuseConnNum;
      this._otherError = value.otherError;
      this._pollingControlError = value.pollingControlError;
      this._pwChangeFailure = value.pwChangeFailure;
      this._pwChangeSuccess = value.pwChangeSuccess;
      this._pwExpiry = value.pwExpiry;
      this._request = value.request;
      this._requestDropped = value.requestDropped;
      this._requestNormal = value.requestNormal;
      this._responseError = value.responseError;
      this._responseFailure = value.responseFailure;
      this._responseOther = value.responseOther;
      this._responseSuccess = value.responseSuccess;
      this._responseTimeout = value.responseTimeout;
      this._searchFailure = value.searchFailure;
      this._searchSuccess = value.searchSuccess;
      this._sslSessionCreated = value.sslSessionCreated;
      this._sslSessionFailure = value.sslSessionFailure;
      this._timeoutError = value.timeoutError;
    }
  }

  // admin_bind_failure - computed: false, optional: true, required: false
  private _adminBindFailure?: number; 
  public get adminBindFailure() {
    return this.getNumberAttribute('admin_bind_failure');
  }
  public set adminBindFailure(value: number) {
    this._adminBindFailure = value;
  }
  public resetAdminBindFailure() {
    this._adminBindFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminBindFailureInput() {
    return this._adminBindFailure;
  }

  // admin_bind_success - computed: false, optional: true, required: false
  private _adminBindSuccess?: number; 
  public get adminBindSuccess() {
    return this.getNumberAttribute('admin_bind_success');
  }
  public set adminBindSuccess(value: number) {
    this._adminBindSuccess = value;
  }
  public resetAdminBindSuccess() {
    this._adminBindSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminBindSuccessInput() {
    return this._adminBindSuccess;
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

  // bind_failure - computed: false, optional: true, required: false
  private _bindFailure?: number; 
  public get bindFailure() {
    return this.getNumberAttribute('bind_failure');
  }
  public set bindFailure(value: number) {
    this._bindFailure = value;
  }
  public resetBindFailure() {
    this._bindFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindFailureInput() {
    return this._bindFailure;
  }

  // bind_success - computed: false, optional: true, required: false
  private _bindSuccess?: number; 
  public get bindSuccess() {
    return this.getNumberAttribute('bind_success');
  }
  public set bindSuccess(value: number) {
    this._bindSuccess = value;
  }
  public resetBindSuccess() {
    this._bindSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindSuccessInput() {
    return this._bindSuccess;
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

  // ldaps_idle_conn_num - computed: false, optional: true, required: false
  private _ldapsIdleConnNum?: number; 
  public get ldapsIdleConnNum() {
    return this.getNumberAttribute('ldaps_idle_conn_num');
  }
  public set ldapsIdleConnNum(value: number) {
    this._ldapsIdleConnNum = value;
  }
  public resetLdapsIdleConnNum() {
    this._ldapsIdleConnNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapsIdleConnNumInput() {
    return this._ldapsIdleConnNum;
  }

  // ldaps_inuse_conn_num - computed: false, optional: true, required: false
  private _ldapsInuseConnNum?: number; 
  public get ldapsInuseConnNum() {
    return this.getNumberAttribute('ldaps_inuse_conn_num');
  }
  public set ldapsInuseConnNum(value: number) {
    this._ldapsInuseConnNum = value;
  }
  public resetLdapsInuseConnNum() {
    this._ldapsInuseConnNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapsInuseConnNumInput() {
    return this._ldapsInuseConnNum;
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

  // pw_change_failure - computed: false, optional: true, required: false
  private _pwChangeFailure?: number; 
  public get pwChangeFailure() {
    return this.getNumberAttribute('pw_change_failure');
  }
  public set pwChangeFailure(value: number) {
    this._pwChangeFailure = value;
  }
  public resetPwChangeFailure() {
    this._pwChangeFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwChangeFailureInput() {
    return this._pwChangeFailure;
  }

  // pw_change_success - computed: false, optional: true, required: false
  private _pwChangeSuccess?: number; 
  public get pwChangeSuccess() {
    return this.getNumberAttribute('pw_change_success');
  }
  public set pwChangeSuccess(value: number) {
    this._pwChangeSuccess = value;
  }
  public resetPwChangeSuccess() {
    this._pwChangeSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwChangeSuccessInput() {
    return this._pwChangeSuccess;
  }

  // pw_expiry - computed: false, optional: true, required: false
  private _pwExpiry?: number; 
  public get pwExpiry() {
    return this.getNumberAttribute('pw_expiry');
  }
  public set pwExpiry(value: number) {
    this._pwExpiry = value;
  }
  public resetPwExpiry() {
    this._pwExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwExpiryInput() {
    return this._pwExpiry;
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

  // search_failure - computed: false, optional: true, required: false
  private _searchFailure?: number; 
  public get searchFailure() {
    return this.getNumberAttribute('search_failure');
  }
  public set searchFailure(value: number) {
    this._searchFailure = value;
  }
  public resetSearchFailure() {
    this._searchFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchFailureInput() {
    return this._searchFailure;
  }

  // search_success - computed: false, optional: true, required: false
  private _searchSuccess?: number; 
  public get searchSuccess() {
    return this.getNumberAttribute('search_success');
  }
  public set searchSuccess(value: number) {
    this._searchSuccess = value;
  }
  public resetSearchSuccess() {
    this._searchSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchSuccessInput() {
    return this._searchSuccess;
  }

  // ssl_session_created - computed: false, optional: true, required: false
  private _sslSessionCreated?: number; 
  public get sslSessionCreated() {
    return this.getNumberAttribute('ssl_session_created');
  }
  public set sslSessionCreated(value: number) {
    this._sslSessionCreated = value;
  }
  public resetSslSessionCreated() {
    this._sslSessionCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSessionCreatedInput() {
    return this._sslSessionCreated;
  }

  // ssl_session_failure - computed: false, optional: true, required: false
  private _sslSessionFailure?: number; 
  public get sslSessionFailure() {
    return this.getNumberAttribute('ssl_session_failure');
  }
  public set sslSessionFailure(value: number) {
    this._sslSessionFailure = value;
  }
  public resetSslSessionFailure() {
    this._sslSessionFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSessionFailureInput() {
    return this._sslSessionFailure;
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats thunder_aam_authentication_server_ldap_stats}
*/
export class DataThunderAamAuthenticationServerLdapStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_server_ldap_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthenticationServerLdapStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthenticationServerLdapStats to import
  * @param importFromId The id of the existing DataThunderAamAuthenticationServerLdapStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthenticationServerLdapStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_server_ldap_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_server_ldap_stats thunder_aam_authentication_server_ldap_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthenticationServerLdapStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthenticationServerLdapStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_server_ldap_stats',
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
  private _instanceList = new DataThunderAamAuthenticationServerLdapStatsInstanceListStructList(this, "instance_list", false);
  public get instanceList() {
    return this._instanceList;
  }
  public putInstanceList(value: DataThunderAamAuthenticationServerLdapStatsInstanceListStruct[] | cdktf.IResolvable) {
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
  private _stats = new DataThunderAamAuthenticationServerLdapStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamAuthenticationServerLdapStatsStats) {
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
      instance_list: cdktf.listMapper(dataThunderAamAuthenticationServerLdapStatsInstanceListStructToTerraform, true)(this._instanceList.internalValue),
      stats: dataThunderAamAuthenticationServerLdapStatsStatsToTerraform(this._stats.internalValue),
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
        value: cdktf.listMapperHcl(dataThunderAamAuthenticationServerLdapStatsInstanceListStructToHclTerraform, true)(this._instanceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationServerLdapStatsInstanceListStructList",
      },
      stats: {
        value: dataThunderAamAuthenticationServerLdapStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationServerLdapStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
