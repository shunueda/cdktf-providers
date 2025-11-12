// https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GridscaleProviderConfig {
  /**
  * the url for the gridscale API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs#api_url GridscaleProvider#api_url}
  */
  readonly apiUrl?: string;
  /**
  * Custom HTTP headers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs#http_headers GridscaleProvider#http_headers}
  */
  readonly httpHeaders?: string;
  /**
  * Custom maximum number of retries. The retryable requests can be retried up to max_n_retries. If max_n_retries is reached and the request is not successful, the last error is returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs#max_n_retries GridscaleProvider#max_n_retries}
  */
  readonly maxNRetries?: number;
  /**
  * Custom request delay interval in ms. This time interval is used to delay the synchronous request checks, or delay retryable requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs#request_delay_interval GridscaleProvider#request_delay_interval}
  */
  readonly requestDelayInterval?: number;
  /**
  * API-token for the gridscale API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs#token GridscaleProvider#token}
  */
  readonly token?: string;
  /**
  * User-UUID for the gridscale API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs#uuid GridscaleProvider#uuid}
  */
  readonly uuid?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs#alias GridscaleProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs gridscale}
*/
export class GridscaleProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gridscale";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GridscaleProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GridscaleProvider to import
  * @param importFromId The id of the existing GridscaleProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GridscaleProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gridscale", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gridscale/gridscale/2.2.3/docs gridscale} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GridscaleProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GridscaleProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'gridscale',
      terraformGeneratorMetadata: {
        providerName: 'gridscale',
        providerVersion: '2.2.3',
        providerVersionConstraint: '2.2.3'
      },
      terraformProviderSource: 'gridscale/gridscale'
    });
    this._apiUrl = config.apiUrl;
    this._httpHeaders = config.httpHeaders;
    this._maxNRetries = config.maxNRetries;
    this._requestDelayInterval = config.requestDelayInterval;
    this._token = config.token;
    this._uuid = config.uuid;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_url - computed: false, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this._apiUrl;
  }
  public set apiUrl(value: string | undefined) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders?: string; 
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public set httpHeaders(value: string | undefined) {
    this._httpHeaders = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders;
  }

  // max_n_retries - computed: false, optional: true, required: false
  private _maxNRetries?: number; 
  public get maxNRetries() {
    return this._maxNRetries;
  }
  public set maxNRetries(value: number | undefined) {
    this._maxNRetries = value;
  }
  public resetMaxNRetries() {
    this._maxNRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNRetriesInput() {
    return this._maxNRetries;
  }

  // request_delay_interval - computed: false, optional: true, required: false
  private _requestDelayInterval?: number; 
  public get requestDelayInterval() {
    return this._requestDelayInterval;
  }
  public set requestDelayInterval(value: number | undefined) {
    this._requestDelayInterval = value;
  }
  public resetRequestDelayInterval() {
    this._requestDelayInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestDelayIntervalInput() {
    return this._requestDelayInterval;
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

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this._uuid;
  }
  public set uuid(value: string | undefined) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
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
      api_url: cdktf.stringToTerraform(this._apiUrl),
      http_headers: cdktf.stringToTerraform(this._httpHeaders),
      max_n_retries: cdktf.numberToTerraform(this._maxNRetries),
      request_delay_interval: cdktf.numberToTerraform(this._requestDelayInterval),
      token: cdktf.stringToTerraform(this._token),
      uuid: cdktf.stringToTerraform(this._uuid),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_url: {
        value: cdktf.stringToHclTerraform(this._apiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_headers: {
        value: cdktf.stringToHclTerraform(this._httpHeaders),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_n_retries: {
        value: cdktf.numberToHclTerraform(this._maxNRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_delay_interval: {
        value: cdktf.numberToHclTerraform(this._requestDelayInterval),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
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
