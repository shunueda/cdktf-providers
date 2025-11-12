// https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ns1ProviderConfig {
  /**
  * The ns1 API key (required)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs#apikey Ns1Provider#apikey}
  */
  readonly apikey?: string;
  /**
  * URL prefix (including version) for API calls
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs#endpoint Ns1Provider#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Don't validate server SSL/TLS certificate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs#ignore_ssl Ns1Provider#ignore_ssl}
  */
  readonly ignoreSsl?: boolean | cdktf.IResolvable;
  /**
  * Tune response to rate limits, see docs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs#rate_limit_parallelism Ns1Provider#rate_limit_parallelism}
  */
  readonly rateLimitParallelism?: number;
  /**
  * Maximum retries for 50x errors (-1 to disable)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs#retry_max Ns1Provider#retry_max}
  */
  readonly retryMax?: number;
  /**
  * User-Agent string to use in NS1 API requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs#user_agent Ns1Provider#user_agent}
  */
  readonly userAgent?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs#alias Ns1Provider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs ns1}
*/
export class Ns1Provider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ns1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ns1Provider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ns1Provider to import
  * @param importFromId The id of the existing Ns1Provider that should be imported. Refer to the {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ns1Provider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ns1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ns1-terraform/ns1/2.7.2/docs ns1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ns1ProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Ns1ProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ns1',
      terraformGeneratorMetadata: {
        providerName: 'ns1',
        providerVersion: '2.7.2',
        providerVersionConstraint: '2.7.2'
      },
      terraformProviderSource: 'ns1-terraform/ns1'
    });
    this._apikey = config.apikey;
    this._endpoint = config.endpoint;
    this._ignoreSsl = config.ignoreSsl;
    this._rateLimitParallelism = config.rateLimitParallelism;
    this._retryMax = config.retryMax;
    this._userAgent = config.userAgent;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // apikey - computed: false, optional: true, required: false
  private _apikey?: string; 
  public get apikey() {
    return this._apikey;
  }
  public set apikey(value: string | undefined) {
    this._apikey = value;
  }
  public resetApikey() {
    this._apikey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apikeyInput() {
    return this._apikey;
  }

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

  // ignore_ssl - computed: false, optional: true, required: false
  private _ignoreSsl?: boolean | cdktf.IResolvable; 
  public get ignoreSsl() {
    return this._ignoreSsl;
  }
  public set ignoreSsl(value: boolean | cdktf.IResolvable | undefined) {
    this._ignoreSsl = value;
  }
  public resetIgnoreSsl() {
    this._ignoreSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSslInput() {
    return this._ignoreSsl;
  }

  // rate_limit_parallelism - computed: false, optional: true, required: false
  private _rateLimitParallelism?: number; 
  public get rateLimitParallelism() {
    return this._rateLimitParallelism;
  }
  public set rateLimitParallelism(value: number | undefined) {
    this._rateLimitParallelism = value;
  }
  public resetRateLimitParallelism() {
    this._rateLimitParallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitParallelismInput() {
    return this._rateLimitParallelism;
  }

  // retry_max - computed: false, optional: true, required: false
  private _retryMax?: number; 
  public get retryMax() {
    return this._retryMax;
  }
  public set retryMax(value: number | undefined) {
    this._retryMax = value;
  }
  public resetRetryMax() {
    this._retryMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryMaxInput() {
    return this._retryMax;
  }

  // user_agent - computed: false, optional: true, required: false
  private _userAgent?: string; 
  public get userAgent() {
    return this._userAgent;
  }
  public set userAgent(value: string | undefined) {
    this._userAgent = value;
  }
  public resetUserAgent() {
    this._userAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentInput() {
    return this._userAgent;
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
      apikey: cdktf.stringToTerraform(this._apikey),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      ignore_ssl: cdktf.booleanToTerraform(this._ignoreSsl),
      rate_limit_parallelism: cdktf.numberToTerraform(this._rateLimitParallelism),
      retry_max: cdktf.numberToTerraform(this._retryMax),
      user_agent: cdktf.stringToTerraform(this._userAgent),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      apikey: {
        value: cdktf.stringToHclTerraform(this._apikey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_ssl: {
        value: cdktf.booleanToHclTerraform(this._ignoreSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rate_limit_parallelism: {
        value: cdktf.numberToHclTerraform(this._rateLimitParallelism),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_max: {
        value: cdktf.numberToHclTerraform(this._retryMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_agent: {
        value: cdktf.stringToHclTerraform(this._userAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
