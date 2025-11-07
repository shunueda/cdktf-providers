// https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BetterUptimeProviderConfig {
  /**
  * Burst size for rate limiter, allows temporary bursts above the rate limit. 0 means use automatic default (2x rate limit, minimum 10).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs#api_rate_burst BetterUptimeProvider#api_rate_burst}
  */
  readonly apiRateBurst?: number;
  /**
  * Maximum number of API requests per second. 0 means no limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs#api_rate_limit BetterUptimeProvider#api_rate_limit}
  */
  readonly apiRateLimit?: number;
  /**
  * Maximum number of retries for API requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs#api_retry_max BetterUptimeProvider#api_retry_max}
  */
  readonly apiRetryMax?: number;
  /**
  * Maximum time to wait between retries in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs#api_retry_wait_max BetterUptimeProvider#api_retry_wait_max}
  */
  readonly apiRetryWaitMax?: number;
  /**
  * Minimum time to wait between retries in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs#api_retry_wait_min BetterUptimeProvider#api_retry_wait_min}
  */
  readonly apiRetryWaitMin?: number;
  /**
  * Timeout for individual HTTP requests in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs#api_timeout BetterUptimeProvider#api_timeout}
  */
  readonly apiTimeout?: number;
  /**
  * Better Stack Uptime API token. The value can be omitted if `BETTERUPTIME_API_TOKEN` environment variable is set. See https://betterstack.com/docs/uptime/api/getting-started-with-uptime-api/#obtaining-an-uptime-api-token on how to obtain the API token for your team.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs#api_token BetterUptimeProvider#api_token}
  */
  readonly apiToken: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs#alias BetterUptimeProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs better-uptime}
*/
export class BetterUptimeProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "better-uptime";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BetterUptimeProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BetterUptimeProvider to import
  * @param importFromId The id of the existing BetterUptimeProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BetterUptimeProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "better-uptime", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/betterstackhq/better-uptime/0.20.4/docs better-uptime} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BetterUptimeProviderConfig
  */
  public constructor(scope: Construct, id: string, config: BetterUptimeProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'better-uptime',
      terraformGeneratorMetadata: {
        providerName: 'better-uptime',
        providerVersion: '0.20.4'
      },
      terraformProviderSource: 'BetterStackHQ/better-uptime'
    });
    this._apiRateBurst = config.apiRateBurst;
    this._apiRateLimit = config.apiRateLimit;
    this._apiRetryMax = config.apiRetryMax;
    this._apiRetryWaitMax = config.apiRetryWaitMax;
    this._apiRetryWaitMin = config.apiRetryWaitMin;
    this._apiTimeout = config.apiTimeout;
    this._apiToken = config.apiToken;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_rate_burst - computed: false, optional: true, required: false
  private _apiRateBurst?: number; 
  public get apiRateBurst() {
    return this._apiRateBurst;
  }
  public set apiRateBurst(value: number | undefined) {
    this._apiRateBurst = value;
  }
  public resetApiRateBurst() {
    this._apiRateBurst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiRateBurstInput() {
    return this._apiRateBurst;
  }

  // api_rate_limit - computed: false, optional: true, required: false
  private _apiRateLimit?: number; 
  public get apiRateLimit() {
    return this._apiRateLimit;
  }
  public set apiRateLimit(value: number | undefined) {
    this._apiRateLimit = value;
  }
  public resetApiRateLimit() {
    this._apiRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiRateLimitInput() {
    return this._apiRateLimit;
  }

  // api_retry_max - computed: false, optional: true, required: false
  private _apiRetryMax?: number; 
  public get apiRetryMax() {
    return this._apiRetryMax;
  }
  public set apiRetryMax(value: number | undefined) {
    this._apiRetryMax = value;
  }
  public resetApiRetryMax() {
    this._apiRetryMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiRetryMaxInput() {
    return this._apiRetryMax;
  }

  // api_retry_wait_max - computed: false, optional: true, required: false
  private _apiRetryWaitMax?: number; 
  public get apiRetryWaitMax() {
    return this._apiRetryWaitMax;
  }
  public set apiRetryWaitMax(value: number | undefined) {
    this._apiRetryWaitMax = value;
  }
  public resetApiRetryWaitMax() {
    this._apiRetryWaitMax = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiRetryWaitMaxInput() {
    return this._apiRetryWaitMax;
  }

  // api_retry_wait_min - computed: false, optional: true, required: false
  private _apiRetryWaitMin?: number; 
  public get apiRetryWaitMin() {
    return this._apiRetryWaitMin;
  }
  public set apiRetryWaitMin(value: number | undefined) {
    this._apiRetryWaitMin = value;
  }
  public resetApiRetryWaitMin() {
    this._apiRetryWaitMin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiRetryWaitMinInput() {
    return this._apiRetryWaitMin;
  }

  // api_timeout - computed: false, optional: true, required: false
  private _apiTimeout?: number; 
  public get apiTimeout() {
    return this._apiTimeout;
  }
  public set apiTimeout(value: number | undefined) {
    this._apiTimeout = value;
  }
  public resetApiTimeout() {
    this._apiTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTimeoutInput() {
    return this._apiTimeout;
  }

  // api_token - computed: false, optional: false, required: true
  private _apiToken?: string; 
  public get apiToken() {
    return this._apiToken;
  }
  public set apiToken(value: string | undefined) {
    this._apiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
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
      api_rate_burst: cdktf.numberToTerraform(this._apiRateBurst),
      api_rate_limit: cdktf.numberToTerraform(this._apiRateLimit),
      api_retry_max: cdktf.numberToTerraform(this._apiRetryMax),
      api_retry_wait_max: cdktf.numberToTerraform(this._apiRetryWaitMax),
      api_retry_wait_min: cdktf.numberToTerraform(this._apiRetryWaitMin),
      api_timeout: cdktf.numberToTerraform(this._apiTimeout),
      api_token: cdktf.stringToTerraform(this._apiToken),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_rate_burst: {
        value: cdktf.numberToHclTerraform(this._apiRateBurst),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      api_rate_limit: {
        value: cdktf.numberToHclTerraform(this._apiRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      api_retry_max: {
        value: cdktf.numberToHclTerraform(this._apiRetryMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      api_retry_wait_max: {
        value: cdktf.numberToHclTerraform(this._apiRetryWaitMax),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      api_retry_wait_min: {
        value: cdktf.numberToHclTerraform(this._apiRetryWaitMin),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      api_timeout: {
        value: cdktf.numberToHclTerraform(this._apiTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
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
