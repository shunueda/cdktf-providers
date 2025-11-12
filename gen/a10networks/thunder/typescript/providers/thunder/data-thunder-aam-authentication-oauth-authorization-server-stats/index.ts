// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_oauth_authorization_server_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthenticationOauthAuthorizationServerStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_oauth_authorization_server_stats#id DataThunderAamAuthenticationOauthAuthorizationServerStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify authorization server object name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_oauth_authorization_server_stats#name DataThunderAamAuthenticationOauthAuthorizationServerStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_oauth_authorization_server_stats#stats DataThunderAamAuthenticationOauthAuthorizationServerStats#stats}
  */
  readonly stats?: DataThunderAamAuthenticationOauthAuthorizationServerStatsStats;
}
export interface DataThunderAamAuthenticationOauthAuthorizationServerStatsStats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_oauth_authorization_server_stats#auth_error DataThunderAamAuthenticationOauthAuthorizationServerStats#auth_error}
  */
  readonly authError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_oauth_authorization_server_stats#auth_fail DataThunderAamAuthenticationOauthAuthorizationServerStats#auth_fail}
  */
  readonly authFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_oauth_authorization_server_stats#auth_req DataThunderAamAuthenticationOauthAuthorizationServerStats#auth_req}
  */
  readonly authReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_oauth_authorization_server_stats#auth_succ DataThunderAamAuthenticationOauthAuthorizationServerStats#auth_succ}
  */
  readonly authSucc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_oauth_authorization_server_stats#other_error DataThunderAamAuthenticationOauthAuthorizationServerStats#other_error}
  */
  readonly otherError?: number;
}

export function dataThunderAamAuthenticationOauthAuthorizationServerStatsStatsToTerraform(struct?: DataThunderAamAuthenticationOauthAuthorizationServerStatsStatsOutputReference | DataThunderAamAuthenticationOauthAuthorizationServerStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth_error: cdktf.numberToTerraform(struct!.authError),
    auth_fail: cdktf.numberToTerraform(struct!.authFail),
    auth_req: cdktf.numberToTerraform(struct!.authReq),
    auth_succ: cdktf.numberToTerraform(struct!.authSucc),
    other_error: cdktf.numberToTerraform(struct!.otherError),
  }
}


export function dataThunderAamAuthenticationOauthAuthorizationServerStatsStatsToHclTerraform(struct?: DataThunderAamAuthenticationOauthAuthorizationServerStatsStatsOutputReference | DataThunderAamAuthenticationOauthAuthorizationServerStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth_error: {
      value: cdktf.numberToHclTerraform(struct!.authError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_fail: {
      value: cdktf.numberToHclTerraform(struct!.authFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_req: {
      value: cdktf.numberToHclTerraform(struct!.authReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    auth_succ: {
      value: cdktf.numberToHclTerraform(struct!.authSucc),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationOauthAuthorizationServerStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationOauthAuthorizationServerStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authError !== undefined) {
      hasAnyValues = true;
      internalValueResult.authError = this._authError;
    }
    if (this._authFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.authFail = this._authFail;
    }
    if (this._authReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.authReq = this._authReq;
    }
    if (this._authSucc !== undefined) {
      hasAnyValues = true;
      internalValueResult.authSucc = this._authSucc;
    }
    if (this._otherError !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherError = this._otherError;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationOauthAuthorizationServerStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authError = undefined;
      this._authFail = undefined;
      this._authReq = undefined;
      this._authSucc = undefined;
      this._otherError = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authError = value.authError;
      this._authFail = value.authFail;
      this._authReq = value.authReq;
      this._authSucc = value.authSucc;
      this._otherError = value.otherError;
    }
  }

  // auth_error - computed: false, optional: true, required: false
  private _authError?: number; 
  public get authError() {
    return this.getNumberAttribute('auth_error');
  }
  public set authError(value: number) {
    this._authError = value;
  }
  public resetAuthError() {
    this._authError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authErrorInput() {
    return this._authError;
  }

  // auth_fail - computed: false, optional: true, required: false
  private _authFail?: number; 
  public get authFail() {
    return this.getNumberAttribute('auth_fail');
  }
  public set authFail(value: number) {
    this._authFail = value;
  }
  public resetAuthFail() {
    this._authFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authFailInput() {
    return this._authFail;
  }

  // auth_req - computed: false, optional: true, required: false
  private _authReq?: number; 
  public get authReq() {
    return this.getNumberAttribute('auth_req');
  }
  public set authReq(value: number) {
    this._authReq = value;
  }
  public resetAuthReq() {
    this._authReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authReqInput() {
    return this._authReq;
  }

  // auth_succ - computed: false, optional: true, required: false
  private _authSucc?: number; 
  public get authSucc() {
    return this.getNumberAttribute('auth_succ');
  }
  public set authSucc(value: number) {
    this._authSucc = value;
  }
  public resetAuthSucc() {
    this._authSucc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authSuccInput() {
    return this._authSucc;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_oauth_authorization_server_stats thunder_aam_authentication_oauth_authorization_server_stats}
*/
export class DataThunderAamAuthenticationOauthAuthorizationServerStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_oauth_authorization_server_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthenticationOauthAuthorizationServerStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthenticationOauthAuthorizationServerStats to import
  * @param importFromId The id of the existing DataThunderAamAuthenticationOauthAuthorizationServerStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_oauth_authorization_server_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthenticationOauthAuthorizationServerStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_oauth_authorization_server_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/aam_authentication_oauth_authorization_server_stats thunder_aam_authentication_oauth_authorization_server_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthenticationOauthAuthorizationServerStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthenticationOauthAuthorizationServerStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_oauth_authorization_server_stats',
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
  private _stats = new DataThunderAamAuthenticationOauthAuthorizationServerStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamAuthenticationOauthAuthorizationServerStatsStats) {
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
      stats: dataThunderAamAuthenticationOauthAuthorizationServerStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderAamAuthenticationOauthAuthorizationServerStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationOauthAuthorizationServerStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
