// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_http_basic_instance_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderAamAuthenticationRelayHttpBasicInstanceStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_http_basic_instance_stats#id DataThunderAamAuthenticationRelayHttpBasicInstanceStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify HTTP basic authentication relay name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_http_basic_instance_stats#name DataThunderAamAuthenticationRelayHttpBasicInstanceStats#name}
  */
  readonly name: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_http_basic_instance_stats#stats DataThunderAamAuthenticationRelayHttpBasicInstanceStats#stats}
  */
  readonly stats?: DataThunderAamAuthenticationRelayHttpBasicInstanceStatsStats;
}
export interface DataThunderAamAuthenticationRelayHttpBasicInstanceStatsStats {
  /**
  * Bad Request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_http_basic_instance_stats#bad_req DataThunderAamAuthenticationRelayHttpBasicInstanceStats#bad_req}
  */
  readonly badReq?: number;
  /**
  * Forbidden
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_http_basic_instance_stats#forbidden DataThunderAamAuthenticationRelayHttpBasicInstanceStats#forbidden}
  */
  readonly forbidden?: number;
  /**
  * No Credential
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_http_basic_instance_stats#no_creds DataThunderAamAuthenticationRelayHttpBasicInstanceStats#no_creds}
  */
  readonly noCreds?: number;
  /**
  * Not Found
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_http_basic_instance_stats#not_found DataThunderAamAuthenticationRelayHttpBasicInstanceStats#not_found}
  */
  readonly notFound?: number;
  /**
  * Internal Server Error
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_http_basic_instance_stats#server_error DataThunderAamAuthenticationRelayHttpBasicInstanceStats#server_error}
  */
  readonly serverError?: number;
  /**
  * Success
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_http_basic_instance_stats#success DataThunderAamAuthenticationRelayHttpBasicInstanceStats#success}
  */
  readonly success?: number;
  /**
  * Unauthorized
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_http_basic_instance_stats#unauth DataThunderAamAuthenticationRelayHttpBasicInstanceStats#unauth}
  */
  readonly unauth?: number;
  /**
  * Service Unavailable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_http_basic_instance_stats#unavailable DataThunderAamAuthenticationRelayHttpBasicInstanceStats#unavailable}
  */
  readonly unavailable?: number;
}

export function dataThunderAamAuthenticationRelayHttpBasicInstanceStatsStatsToTerraform(struct?: DataThunderAamAuthenticationRelayHttpBasicInstanceStatsStatsOutputReference | DataThunderAamAuthenticationRelayHttpBasicInstanceStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bad_req: cdktf.numberToTerraform(struct!.badReq),
    forbidden: cdktf.numberToTerraform(struct!.forbidden),
    no_creds: cdktf.numberToTerraform(struct!.noCreds),
    not_found: cdktf.numberToTerraform(struct!.notFound),
    server_error: cdktf.numberToTerraform(struct!.serverError),
    success: cdktf.numberToTerraform(struct!.success),
    unauth: cdktf.numberToTerraform(struct!.unauth),
    unavailable: cdktf.numberToTerraform(struct!.unavailable),
  }
}


export function dataThunderAamAuthenticationRelayHttpBasicInstanceStatsStatsToHclTerraform(struct?: DataThunderAamAuthenticationRelayHttpBasicInstanceStatsStatsOutputReference | DataThunderAamAuthenticationRelayHttpBasicInstanceStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bad_req: {
      value: cdktf.numberToHclTerraform(struct!.badReq),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forbidden: {
      value: cdktf.numberToHclTerraform(struct!.forbidden),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    no_creds: {
      value: cdktf.numberToHclTerraform(struct!.noCreds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    not_found: {
      value: cdktf.numberToHclTerraform(struct!.notFound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_error: {
      value: cdktf.numberToHclTerraform(struct!.serverError),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    success: {
      value: cdktf.numberToHclTerraform(struct!.success),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unauth: {
      value: cdktf.numberToHclTerraform(struct!.unauth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    unavailable: {
      value: cdktf.numberToHclTerraform(struct!.unavailable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderAamAuthenticationRelayHttpBasicInstanceStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderAamAuthenticationRelayHttpBasicInstanceStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._badReq !== undefined) {
      hasAnyValues = true;
      internalValueResult.badReq = this._badReq;
    }
    if (this._forbidden !== undefined) {
      hasAnyValues = true;
      internalValueResult.forbidden = this._forbidden;
    }
    if (this._noCreds !== undefined) {
      hasAnyValues = true;
      internalValueResult.noCreds = this._noCreds;
    }
    if (this._notFound !== undefined) {
      hasAnyValues = true;
      internalValueResult.notFound = this._notFound;
    }
    if (this._serverError !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverError = this._serverError;
    }
    if (this._success !== undefined) {
      hasAnyValues = true;
      internalValueResult.success = this._success;
    }
    if (this._unauth !== undefined) {
      hasAnyValues = true;
      internalValueResult.unauth = this._unauth;
    }
    if (this._unavailable !== undefined) {
      hasAnyValues = true;
      internalValueResult.unavailable = this._unavailable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderAamAuthenticationRelayHttpBasicInstanceStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._badReq = undefined;
      this._forbidden = undefined;
      this._noCreds = undefined;
      this._notFound = undefined;
      this._serverError = undefined;
      this._success = undefined;
      this._unauth = undefined;
      this._unavailable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._badReq = value.badReq;
      this._forbidden = value.forbidden;
      this._noCreds = value.noCreds;
      this._notFound = value.notFound;
      this._serverError = value.serverError;
      this._success = value.success;
      this._unauth = value.unauth;
      this._unavailable = value.unavailable;
    }
  }

  // bad_req - computed: false, optional: true, required: false
  private _badReq?: number; 
  public get badReq() {
    return this.getNumberAttribute('bad_req');
  }
  public set badReq(value: number) {
    this._badReq = value;
  }
  public resetBadReq() {
    this._badReq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get badReqInput() {
    return this._badReq;
  }

  // forbidden - computed: false, optional: true, required: false
  private _forbidden?: number; 
  public get forbidden() {
    return this.getNumberAttribute('forbidden');
  }
  public set forbidden(value: number) {
    this._forbidden = value;
  }
  public resetForbidden() {
    this._forbidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenInput() {
    return this._forbidden;
  }

  // no_creds - computed: false, optional: true, required: false
  private _noCreds?: number; 
  public get noCreds() {
    return this.getNumberAttribute('no_creds');
  }
  public set noCreds(value: number) {
    this._noCreds = value;
  }
  public resetNoCreds() {
    this._noCreds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noCredsInput() {
    return this._noCreds;
  }

  // not_found - computed: false, optional: true, required: false
  private _notFound?: number; 
  public get notFound() {
    return this.getNumberAttribute('not_found');
  }
  public set notFound(value: number) {
    this._notFound = value;
  }
  public resetNotFound() {
    this._notFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notFoundInput() {
    return this._notFound;
  }

  // server_error - computed: false, optional: true, required: false
  private _serverError?: number; 
  public get serverError() {
    return this.getNumberAttribute('server_error');
  }
  public set serverError(value: number) {
    this._serverError = value;
  }
  public resetServerError() {
    this._serverError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverErrorInput() {
    return this._serverError;
  }

  // success - computed: false, optional: true, required: false
  private _success?: number; 
  public get success() {
    return this.getNumberAttribute('success');
  }
  public set success(value: number) {
    this._success = value;
  }
  public resetSuccess() {
    this._success = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successInput() {
    return this._success;
  }

  // unauth - computed: false, optional: true, required: false
  private _unauth?: number; 
  public get unauth() {
    return this.getNumberAttribute('unauth');
  }
  public set unauth(value: number) {
    this._unauth = value;
  }
  public resetUnauth() {
    this._unauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unauthInput() {
    return this._unauth;
  }

  // unavailable - computed: false, optional: true, required: false
  private _unavailable?: number; 
  public get unavailable() {
    return this.getNumberAttribute('unavailable');
  }
  public set unavailable(value: number) {
    this._unavailable = value;
  }
  public resetUnavailable() {
    this._unavailable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unavailableInput() {
    return this._unavailable;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_http_basic_instance_stats thunder_aam_authentication_relay_http_basic_instance_stats}
*/
export class DataThunderAamAuthenticationRelayHttpBasicInstanceStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_relay_http_basic_instance_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderAamAuthenticationRelayHttpBasicInstanceStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderAamAuthenticationRelayHttpBasicInstanceStats to import
  * @param importFromId The id of the existing DataThunderAamAuthenticationRelayHttpBasicInstanceStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_http_basic_instance_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderAamAuthenticationRelayHttpBasicInstanceStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_relay_http_basic_instance_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/aam_authentication_relay_http_basic_instance_stats thunder_aam_authentication_relay_http_basic_instance_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderAamAuthenticationRelayHttpBasicInstanceStatsConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderAamAuthenticationRelayHttpBasicInstanceStatsConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_relay_http_basic_instance_stats',
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
  private _stats = new DataThunderAamAuthenticationRelayHttpBasicInstanceStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderAamAuthenticationRelayHttpBasicInstanceStatsStats) {
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
      stats: dataThunderAamAuthenticationRelayHttpBasicInstanceStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderAamAuthenticationRelayHttpBasicInstanceStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderAamAuthenticationRelayHttpBasicInstanceStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
