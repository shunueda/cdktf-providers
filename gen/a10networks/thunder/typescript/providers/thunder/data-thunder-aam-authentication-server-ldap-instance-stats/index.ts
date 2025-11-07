// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ldap_instance_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthenticationServerLdapInstanceStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ldap_instance_stats#id DataThunderAamAuthenticationServerLdapInstanceStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify LDAP authentication server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ldap_instance_stats#name DataThunderAamAuthenticationServerLdapInstanceStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ldap_instance_stats#stats DataThunderAamAuthenticationServerLdapInstanceStats#stats}
  */
  readonly stats?: DataThunderAamAuthenticationServerLdapInstanceStatsStats;
}
export interface DataThunderAamAuthenticationServerLdapInstanceStatsStats {
  /**
  * Admin Bind Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ldap_instance_stats#admin_bind_failure DataThunderAamAuthenticationServerLdapInstanceStats#admin_bind_failure}
  */
  readonly adminBindFailure?: number;
  /**
  * Admin Bind Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ldap_instance_stats#admin_bind_success DataThunderAamAuthenticationServerLdapInstanceStats#admin_bind_success}
  */
  readonly adminBindSuccess?: number;
  /**
  * Authorization Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ldap_instance_stats#authorize_failure DataThunderAamAuthenticationServerLdapInstanceStats#authorize_failure}
  */
  readonly authorizeFailure?: number;
  /**
  * Authorization Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ldap_instance_stats#authorize_success DataThunderAamAuthenticationServerLdapInstanceStats#authorize_success}
  */
  readonly authorizeSuccess?: number;
  /**
  * User Bind Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ldap_instance_stats#bind_failure DataThunderAamAuthenticationServerLdapInstanceStats#bind_failure}
  */
  readonly bindFailure?: number;
  /**
  * User Bind Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ldap_instance_stats#bind_success DataThunderAamAuthenticationServerLdapInstanceStats#bind_success}
  */
  readonly bindSuccess?: number;
  /**
  * Other Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ldap_instance_stats#other_error DataThunderAamAuthenticationServerLdapInstanceStats#other_error}
  */
  readonly otherError?: number;
  /**
  * Password change failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ldap_instance_stats#pw_change_failure DataThunderAamAuthenticationServerLdapInstanceStats#pw_change_failure}
  */
  readonly pwChangeFailure?: number;
  /**
  * Password change success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ldap_instance_stats#pw_change_success DataThunderAamAuthenticationServerLdapInstanceStats#pw_change_success}
  */
  readonly pwChangeSuccess?: number;
  /**
  * Password expiry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ldap_instance_stats#pw_expiry DataThunderAamAuthenticationServerLdapInstanceStats#pw_expiry}
  */
  readonly pwExpiry?: number;
  /**
  * Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ldap_instance_stats#request DataThunderAamAuthenticationServerLdapInstanceStats#request}
  */
  readonly request?: number;
  /**
  * Search Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ldap_instance_stats#search_failure DataThunderAamAuthenticationServerLdapInstanceStats#search_failure}
  */
  readonly searchFailure?: number;
  /**
  * Search Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ldap_instance_stats#search_success DataThunderAamAuthenticationServerLdapInstanceStats#search_success}
  */
  readonly searchSuccess?: number;
  /**
  * TLS/SSL Session Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ldap_instance_stats#ssl_session_created DataThunderAamAuthenticationServerLdapInstanceStats#ssl_session_created}
  */
  readonly sslSessionCreated?: number;
  /**
  * TLS/SSL Session Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ldap_instance_stats#ssl_session_failure DataThunderAamAuthenticationServerLdapInstanceStats#ssl_session_failure}
  */
  readonly sslSessionFailure?: number;
  /**
  * Timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ldap_instance_stats#timeout_error DataThunderAamAuthenticationServerLdapInstanceStats#timeout_error}
  */
  readonly timeoutError?: number;
}

export function dataThunderAamAuthenticationServerLdapInstanceStatsStatsToTerraform(struct?: DataThunderAamAuthenticationServerLdapInstanceStatsStatsOutputReference | DataThunderAamAuthenticationServerLdapInstanceStatsStats): any {
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


export function dataThunderAamAuthenticationServerLdapInstanceStatsStatsToHclTerraform(struct?: DataThunderAamAuthenticationServerLdapInstanceStatsStatsOutputReference | DataThunderAamAuthenticationServerLdapInstanceStatsStats): any {
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

export class DataThunderAamAuthenticationServerLdapInstanceStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationServerLdapInstanceStatsStats | undefined {
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

  public set internalValue(value: DataThunderAamAuthenticationServerLdapInstanceStatsStats | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ldap_instance_stats thunder_aam_authentication_server_ldap_instance_stats}
*/
export class DataThunderAamAuthenticationServerLdapInstanceStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_server_ldap_instance_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthenticationServerLdapInstanceStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthenticationServerLdapInstanceStats to import
  * @param importFromId The id of the existing DataThunderAamAuthenticationServerLdapInstanceStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ldap_instance_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthenticationServerLdapInstanceStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_server_ldap_instance_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_server_ldap_instance_stats thunder_aam_authentication_server_ldap_instance_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthenticationServerLdapInstanceStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthenticationServerLdapInstanceStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_server_ldap_instance_stats',
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
  private _stats = new DataThunderAamAuthenticationServerLdapInstanceStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamAuthenticationServerLdapInstanceStatsStats) {
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
      stats: dataThunderAamAuthenticationServerLdapInstanceStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderAamAuthenticationServerLdapInstanceStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationServerLdapInstanceStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
