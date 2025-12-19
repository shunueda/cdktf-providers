// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_oauth_global_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthenticationOauthGlobalStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_oauth_global_stats#id DataThunderAamAuthenticationOauthGlobalStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_oauth_global_stats#stats DataThunderAamAuthenticationOauthGlobalStats#stats}
  */
  readonly stats?: DataThunderAamAuthenticationOauthGlobalStatsStats;
}
export interface DataThunderAamAuthenticationOauthGlobalStatsStats {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_oauth_global_stats#auth_error DataThunderAamAuthenticationOauthGlobalStats#auth_error}
  */
  readonly authError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_oauth_global_stats#auth_fail DataThunderAamAuthenticationOauthGlobalStats#auth_fail}
  */
  readonly authFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_oauth_global_stats#auth_req DataThunderAamAuthenticationOauthGlobalStats#auth_req}
  */
  readonly authReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_oauth_global_stats#auth_succ DataThunderAamAuthenticationOauthGlobalStats#auth_succ}
  */
  readonly authSucc?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_oauth_global_stats#other_error DataThunderAamAuthenticationOauthGlobalStats#other_error}
  */
  readonly otherError?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_oauth_global_stats#relay_fail DataThunderAamAuthenticationOauthGlobalStats#relay_fail}
  */
  readonly relayFail?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_oauth_global_stats#relay_req DataThunderAamAuthenticationOauthGlobalStats#relay_req}
  */
  readonly relayReq?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_oauth_global_stats#relay_succ DataThunderAamAuthenticationOauthGlobalStats#relay_succ}
  */
  readonly relaySucc?: number;
}

export function dataThunderAamAuthenticationOauthGlobalStatsStatsToTerraform(struct?: DataThunderAamAuthenticationOauthGlobalStatsStatsOutputReference | DataThunderAamAuthenticationOauthGlobalStatsStats): any {
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
    relay_fail: cdktf.numberToTerraform(struct!.relayFail),
    relay_req: cdktf.numberToTerraform(struct!.relayReq),
    relay_succ: cdktf.numberToTerraform(struct!.relaySucc),
  }
}


export function dataThunderAamAuthenticationOauthGlobalStatsStatsToHclTerraform(struct?: DataThunderAamAuthenticationOauthGlobalStatsStatsOutputReference | DataThunderAamAuthenticationOauthGlobalStatsStats): any {
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
    relay_fail: {
      value: cdktf.numberToHclTerraform(struct!.relayFail),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    relay_req: {
      value: cdktf.numberToHclTerraform(struct!.relayReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    relay_succ: {
      value: cdktf.numberToHclTerraform(struct!.relaySucc),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationOauthGlobalStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationOauthGlobalStatsStats | undefined {
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
    if (this._relayFail !== undefined) {
      hasAnyValues = true;
      internalValueResult.relayFail = this._relayFail;
    }
    if (this._relayReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.relayReq = this._relayReq;
    }
    if (this._relaySucc !== undefined) {
      hasAnyValues = true;
      internalValueResult.relaySucc = this._relaySucc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationOauthGlobalStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authError = undefined;
      this._authFail = undefined;
      this._authReq = undefined;
      this._authSucc = undefined;
      this._otherError = undefined;
      this._relayFail = undefined;
      this._relayReq = undefined;
      this._relaySucc = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authError = value.authError;
      this._authFail = value.authFail;
      this._authReq = value.authReq;
      this._authSucc = value.authSucc;
      this._otherError = value.otherError;
      this._relayFail = value.relayFail;
      this._relayReq = value.relayReq;
      this._relaySucc = value.relaySucc;
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

  // relay_fail - computed: false, optional: true, required: false
  private _relayFail?: number; 
  public get relayFail() {
    return this.getNumberAttribute('relay_fail');
  }
  public set relayFail(value: number) {
    this._relayFail = value;
  }
  public resetRelayFail() {
    this._relayFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayFailInput() {
    return this._relayFail;
  }

  // relay_req - computed: false, optional: true, required: false
  private _relayReq?: number; 
  public get relayReq() {
    return this.getNumberAttribute('relay_req');
  }
  public set relayReq(value: number) {
    this._relayReq = value;
  }
  public resetRelayReq() {
    this._relayReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relayReqInput() {
    return this._relayReq;
  }

  // relay_succ - computed: false, optional: true, required: false
  private _relaySucc?: number; 
  public get relaySucc() {
    return this.getNumberAttribute('relay_succ');
  }
  public set relaySucc(value: number) {
    this._relaySucc = value;
  }
  public resetRelaySucc() {
    this._relaySucc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relaySuccInput() {
    return this._relaySucc;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_oauth_global_stats thunder_aam_authentication_oauth_global_stats}
*/
export class DataThunderAamAuthenticationOauthGlobalStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_oauth_global_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthenticationOauthGlobalStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthenticationOauthGlobalStats to import
  * @param importFromId The id of the existing DataThunderAamAuthenticationOauthGlobalStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_oauth_global_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthenticationOauthGlobalStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_oauth_global_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_oauth_global_stats thunder_aam_authentication_oauth_global_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthenticationOauthGlobalStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthenticationOauthGlobalStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_oauth_global_stats',
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
  private _stats = new DataThunderAamAuthenticationOauthGlobalStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamAuthenticationOauthGlobalStatsStats) {
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
      stats: dataThunderAamAuthenticationOauthGlobalStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderAamAuthenticationOauthGlobalStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationOauthGlobalStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
