// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MerakiProviderConfig {
  /**
  * Meraki Dashboard API key. This can also be set as the MERAKI_API_KEY environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs#api_key MerakiProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Base URL to be used. The default value is `https://api.meraki.com/api/v1`. This can also be set as the MERAKI_BASE_URL environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs#base_url MerakiProvider#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Timeout for a single HTTPS request made to REST API before it is retried. This can also be set as the MERAKI_REQ_TIMEOUT environment variable. A string like `"1s"` means one second. Defaults to `"5s"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs#req_timeout MerakiProvider#req_timeout}
  */
  readonly reqTimeout?: string;
  /**
  * Number of requests per second. This can also be set as the MERAKI_REQUESTS_PER_SECOND environment variable. Defaults to `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs#requests_per_second MerakiProvider#requests_per_second}
  */
  readonly requestsPerSecond?: number;
  /**
  * Number of retries for REST API calls. This can also be set as the MERAKI_RETRIES environment variable. Defaults to `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs#retries MerakiProvider#retries}
  */
  readonly retries?: number;
  /**
  * A list of HTTP error codes to retry on. This can also be set as the MERAKI_RETRY_ON_ERROR_CODES environment variable using a comma separated list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs#retry_on_error_codes MerakiProvider#retry_on_error_codes}
  */
  readonly retryOnErrorCodes?: number[];
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs#alias MerakiProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs meraki}
*/
export class MerakiProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MerakiProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MerakiProvider to import
  * @param importFromId The id of the existing MerakiProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MerakiProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs meraki} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MerakiProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MerakiProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'meraki',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
      },
      terraformProviderSource: 'CiscoDevNet/meraki'
    });
    this._apiKey = config.apiKey;
    this._baseUrl = config.baseUrl;
    this._reqTimeout = config.reqTimeout;
    this._requestsPerSecond = config.requestsPerSecond;
    this._retries = config.retries;
    this._retryOnErrorCodes = config.retryOnErrorCodes;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
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

  // req_timeout - computed: false, optional: true, required: false
  private _reqTimeout?: string; 
  public get reqTimeout() {
    return this._reqTimeout;
  }
  public set reqTimeout(value: string | undefined) {
    this._reqTimeout = value;
  }
  public resetReqTimeout() {
    this._reqTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqTimeoutInput() {
    return this._reqTimeout;
  }

  // requests_per_second - computed: false, optional: true, required: false
  private _requestsPerSecond?: number; 
  public get requestsPerSecond() {
    return this._requestsPerSecond;
  }
  public set requestsPerSecond(value: number | undefined) {
    this._requestsPerSecond = value;
  }
  public resetRequestsPerSecond() {
    this._requestsPerSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsPerSecondInput() {
    return this._requestsPerSecond;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: number; 
  public get retries() {
    return this._retries;
  }
  public set retries(value: number | undefined) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // retry_on_error_codes - computed: false, optional: true, required: false
  private _retryOnErrorCodes?: number[]; 
  public get retryOnErrorCodes() {
    return this._retryOnErrorCodes;
  }
  public set retryOnErrorCodes(value: number[] | undefined) {
    this._retryOnErrorCodes = value;
  }
  public resetRetryOnErrorCodes() {
    this._retryOnErrorCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryOnErrorCodesInput() {
    return this._retryOnErrorCodes;
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
      api_key: cdktf.stringToTerraform(this._apiKey),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      req_timeout: cdktf.stringToTerraform(this._reqTimeout),
      requests_per_second: cdktf.numberToTerraform(this._requestsPerSecond),
      retries: cdktf.numberToTerraform(this._retries),
      retry_on_error_codes: cdktf.listMapper(cdktf.numberToTerraform, false)(this._retryOnErrorCodes),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      req_timeout: {
        value: cdktf.stringToHclTerraform(this._reqTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requests_per_second: {
        value: cdktf.numberToHclTerraform(this._requestsPerSecond),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry_on_error_codes: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._retryOnErrorCodes),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
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
