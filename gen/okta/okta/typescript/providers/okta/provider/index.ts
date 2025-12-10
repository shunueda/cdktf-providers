// https://registry.terraform.io/providers/okta/okta/6.5.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OktaProviderConfig {
  /**
  * Bearer token granting privileges to Okta API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs#access_token OktaProvider#access_token}
  */
  readonly accessToken?: string;
  /**
  * API Token granting privileges to Okta API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs#api_token OktaProvider#api_token}
  */
  readonly apiToken?: string;
  /**
  * Use exponential back off strategy for rate limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs#backoff OktaProvider#backoff}
  */
  readonly backoff?: boolean | cdktf.IResolvable;
  /**
  * The Okta url. (Use 'oktapreview.com' for Okta testing)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs#base_url OktaProvider#base_url}
  */
  readonly baseUrl?: string;
  /**
  * API Token granting privileges to Okta API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs#client_id OktaProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Alternate HTTP proxy of scheme://hostname or scheme://hostname:port format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs#http_proxy OktaProvider#http_proxy}
  */
  readonly httpProxy?: string;
  /**
  * providers log level. Minimum is 1 (TRACE), and maximum is 5 (ERROR)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs#log_level OktaProvider#log_level}
  */
  readonly logLevel?: number;
  /**
  * Sets what percentage of capacity the provider can use of the total rate limit capacity while making calls to the Okta management API endpoints. Okta API operates in one minute buckets. See Okta Management API Rate Limits: https://developer.okta.com/docs/reference/rl-global-mgmt/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs#max_api_capacity OktaProvider#max_api_capacity}
  */
  readonly maxApiCapacity?: number;
  /**
  * maximum number of retries to attempt before erroring out.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs#max_retries OktaProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * maximum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs#max_wait_seconds OktaProvider#max_wait_seconds}
  */
  readonly maxWaitSeconds?: number;
  /**
  * minimum seconds to wait when rate limit is hit. We use exponential backoffs when backoff is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs#min_wait_seconds OktaProvider#min_wait_seconds}
  */
  readonly minWaitSeconds?: number;
  /**
  * The organization to manage in Okta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs#org_name OktaProvider#org_name}
  */
  readonly orgName?: string;
  /**
  * Number of concurrent requests to make within a resource where bulk operations are not possible. Take note of https://developer.okta.com/docs/api/getting_started/rate-limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs#parallelism OktaProvider#parallelism}
  */
  readonly parallelism?: number;
  /**
  * API Token granting privileges to Okta API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs#private_key OktaProvider#private_key}
  */
  readonly privateKey?: string;
  /**
  * API Token Id granting privileges to Okta API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs#private_key_id OktaProvider#private_key_id}
  */
  readonly privateKeyId?: string;
  /**
  * Timeout for single request (in seconds) which is made to Okta, the default is `0` (means no limit is set). The maximum value can be `300`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs#request_timeout OktaProvider#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * API Token granting privileges to Okta API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs#scopes OktaProvider#scopes}
  */
  readonly scopes?: string[];
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs#alias OktaProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs okta}
*/
export class OktaProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OktaProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OktaProvider to import
  * @param importFromId The id of the existing OktaProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OktaProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.2/docs okta} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OktaProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: OktaProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'okta',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.2',
        providerVersionConstraint: '6.5.2'
      },
      terraformProviderSource: 'okta/okta'
    });
    this._accessToken = config.accessToken;
    this._apiToken = config.apiToken;
    this._backoff = config.backoff;
    this._baseUrl = config.baseUrl;
    this._clientId = config.clientId;
    this._httpProxy = config.httpProxy;
    this._logLevel = config.logLevel;
    this._maxApiCapacity = config.maxApiCapacity;
    this._maxRetries = config.maxRetries;
    this._maxWaitSeconds = config.maxWaitSeconds;
    this._minWaitSeconds = config.minWaitSeconds;
    this._orgName = config.orgName;
    this._parallelism = config.parallelism;
    this._privateKey = config.privateKey;
    this._privateKeyId = config.privateKeyId;
    this._requestTimeout = config.requestTimeout;
    this._scopes = config.scopes;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this._accessToken;
  }
  public set accessToken(value: string | undefined) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this._apiToken;
  }
  public set apiToken(value: string | undefined) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // backoff - computed: false, optional: true, required: false
  private _backoff?: boolean | cdktf.IResolvable; 
  public get backoff() {
    return this._backoff;
  }
  public set backoff(value: boolean | cdktf.IResolvable | undefined) {
    this._backoff = value;
  }
  public resetBackoff() {
    this._backoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backoffInput() {
    return this._backoff;
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this._baseUrl;
  }
  public set baseUrl(value: string | undefined) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this._clientId;
  }
  public set clientId(value: string | undefined) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // http_proxy - computed: false, optional: true, required: false
  private _httpProxy?: string; 
  public get httpProxy() {
    return this._httpProxy;
  }
  public set httpProxy(value: string | undefined) {
    this._httpProxy = value;
  }
  public resetHttpProxy() {
    this._httpProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpProxyInput() {
    return this._httpProxy;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: number; 
  public get logLevel() {
    return this._logLevel;
  }
  public set logLevel(value: number | undefined) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // max_api_capacity - computed: false, optional: true, required: false
  private _maxApiCapacity?: number; 
  public get maxApiCapacity() {
    return this._maxApiCapacity;
  }
  public set maxApiCapacity(value: number | undefined) {
    this._maxApiCapacity = value;
  }
  public resetMaxApiCapacity() {
    this._maxApiCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxApiCapacityInput() {
    return this._maxApiCapacity;
  }

  // max_retries - computed: false, optional: true, required: false
  private _maxRetries?: number; 
  public get maxRetries() {
    return this._maxRetries;
  }
  public set maxRetries(value: number | undefined) {
    this._maxRetries = value;
  }
  public resetMaxRetries() {
    this._maxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRetriesInput() {
    return this._maxRetries;
  }

  // max_wait_seconds - computed: false, optional: true, required: false
  private _maxWaitSeconds?: number; 
  public get maxWaitSeconds() {
    return this._maxWaitSeconds;
  }
  public set maxWaitSeconds(value: number | undefined) {
    this._maxWaitSeconds = value;
  }
  public resetMaxWaitSeconds() {
    this._maxWaitSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWaitSecondsInput() {
    return this._maxWaitSeconds;
  }

  // min_wait_seconds - computed: false, optional: true, required: false
  private _minWaitSeconds?: number; 
  public get minWaitSeconds() {
    return this._minWaitSeconds;
  }
  public set minWaitSeconds(value: number | undefined) {
    this._minWaitSeconds = value;
  }
  public resetMinWaitSeconds() {
    this._minWaitSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minWaitSecondsInput() {
    return this._minWaitSeconds;
  }

  // org_name - computed: false, optional: true, required: false
  private _orgName?: string; 
  public get orgName() {
    return this._orgName;
  }
  public set orgName(value: string | undefined) {
    this._orgName = value;
  }
  public resetOrgName() {
    this._orgName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgNameInput() {
    return this._orgName;
  }

  // parallelism - computed: false, optional: true, required: false
  private _parallelism?: number; 
  public get parallelism() {
    return this._parallelism;
  }
  public set parallelism(value: number | undefined) {
    this._parallelism = value;
  }
  public resetParallelism() {
    this._parallelism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parallelismInput() {
    return this._parallelism;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this._privateKey;
  }
  public set privateKey(value: string | undefined) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_id - computed: false, optional: true, required: false
  private _privateKeyId?: string; 
  public get privateKeyId() {
    return this._privateKeyId;
  }
  public set privateKeyId(value: string | undefined) {
    this._privateKeyId = value;
  }
  public resetPrivateKeyId() {
    this._privateKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyIdInput() {
    return this._privateKeyId;
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: number; 
  public get requestTimeout() {
    return this._requestTimeout;
  }
  public set requestTimeout(value: number | undefined) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this._scopes;
  }
  public set scopes(value: string[] | undefined) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
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
      access_token: cdktf.stringToTerraform(this._accessToken),
      api_token: cdktf.stringToTerraform(this._apiToken),
      backoff: cdktf.booleanToTerraform(this._backoff),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      client_id: cdktf.stringToTerraform(this._clientId),
      http_proxy: cdktf.stringToTerraform(this._httpProxy),
      log_level: cdktf.numberToTerraform(this._logLevel),
      max_api_capacity: cdktf.numberToTerraform(this._maxApiCapacity),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      max_wait_seconds: cdktf.numberToTerraform(this._maxWaitSeconds),
      min_wait_seconds: cdktf.numberToTerraform(this._minWaitSeconds),
      org_name: cdktf.stringToTerraform(this._orgName),
      parallelism: cdktf.numberToTerraform(this._parallelism),
      private_key: cdktf.stringToTerraform(this._privateKey),
      private_key_id: cdktf.stringToTerraform(this._privateKeyId),
      request_timeout: cdktf.numberToTerraform(this._requestTimeout),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token: {
        value: cdktf.stringToHclTerraform(this._accessToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backoff: {
        value: cdktf.booleanToHclTerraform(this._backoff),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_proxy: {
        value: cdktf.stringToHclTerraform(this._httpProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_level: {
        value: cdktf.numberToHclTerraform(this._logLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_api_capacity: {
        value: cdktf.numberToHclTerraform(this._maxApiCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_retries: {
        value: cdktf.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_wait_seconds: {
        value: cdktf.numberToHclTerraform(this._maxWaitSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_wait_seconds: {
        value: cdktf.numberToHclTerraform(this._minWaitSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      org_name: {
        value: cdktf.stringToHclTerraform(this._orgName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parallelism: {
        value: cdktf.numberToHclTerraform(this._parallelism),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_id: {
        value: cdktf.stringToHclTerraform(this._privateKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_timeout: {
        value: cdktf.numberToHclTerraform(this._requestTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
