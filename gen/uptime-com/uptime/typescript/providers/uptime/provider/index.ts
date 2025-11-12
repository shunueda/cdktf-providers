// https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UptimeProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs#endpoint UptimeProvider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * The rate limit to use for API calls in requests per second, defaults to 0.5
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs#rate_limit UptimeProvider#rate_limit}
  */
  readonly rateLimit?: number;
  /**
  * Subaccount ID to use for API calls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs#subaccount UptimeProvider#subaccount}
  */
  readonly subaccount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs#token UptimeProvider#token}
  */
  readonly token?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs#trace UptimeProvider#trace}
  */
  readonly trace?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs#alias UptimeProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs uptime}
*/
export class UptimeProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "uptime";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UptimeProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UptimeProvider to import
  * @param importFromId The id of the existing UptimeProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UptimeProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "uptime", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/uptime-com/uptime/2.16.0/docs uptime} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UptimeProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: UptimeProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'uptime',
      terraformGeneratorMetadata: {
        providerName: 'uptime',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
      },
      terraformProviderSource: 'uptime-com/uptime'
    });
    this._endpoint = config.endpoint;
    this._rateLimit = config.rateLimit;
    this._subaccount = config.subaccount;
    this._token = config.token;
    this._trace = config.trace;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this._endpoint;
  }
  public set endpoint(value: string | undefined) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // rate_limit - computed: false, optional: true, required: false
  private _rateLimit?: number; 
  public get rateLimit() {
    return this._rateLimit;
  }
  public set rateLimit(value: number | undefined) {
    this._rateLimit = value;
  }
  public resetRateLimit() {
    this._rateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitInput() {
    return this._rateLimit;
  }

  // subaccount - computed: false, optional: true, required: false
  private _subaccount?: number; 
  public get subaccount() {
    return this._subaccount;
  }
  public set subaccount(value: number | undefined) {
    this._subaccount = value;
  }
  public resetSubaccount() {
    this._subaccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subaccountInput() {
    return this._subaccount;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this._token;
  }
  public set token(value: string | undefined) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // trace - computed: false, optional: true, required: false
  private _trace?: boolean | cdktf.IResolvable; 
  public get trace() {
    return this._trace;
  }
  public set trace(value: boolean | cdktf.IResolvable | undefined) {
    this._trace = value;
  }
  public resetTrace() {
    this._trace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceInput() {
    return this._trace;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      endpoint: cdktf.stringToTerraform(this._endpoint),
      rate_limit: cdktf.numberToTerraform(this._rateLimit),
      subaccount: cdktf.numberToTerraform(this._subaccount),
      token: cdktf.stringToTerraform(this._token),
      trace: cdktf.booleanToTerraform(this._trace),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_limit: {
        value: cdktf.numberToHclTerraform(this._rateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subaccount: {
        value: cdktf.numberToHclTerraform(this._subaccount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trace: {
        value: cdktf.booleanToHclTerraform(this._trace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      alias: {
        value: cdktf.stringToHclTerraform(this._alias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
