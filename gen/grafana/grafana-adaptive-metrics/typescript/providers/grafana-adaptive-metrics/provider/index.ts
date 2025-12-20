// https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GrafanaAdaptiveMetricsProviderConfig {
  /**
  * Tenant ID and Access Policy Token (or API key) for Grafana Cloud in the format '<tenant-id>:<token-or-api-key>'. May alternatively be set via the `GRAFANA_AM_API_KEY` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs#api_key GrafanaAdaptiveMetricsProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * Whether to enable debug logging. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs#debug GrafanaAdaptiveMetricsProvider#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * HTTP headers mapping keys to values used for accessing Grafana Cloud APIs. May alternatively be set via the `GRAFANA_AM_HTTP_HEADERS` environment variable in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs#http_headers GrafanaAdaptiveMetricsProvider#http_headers}
  */
  readonly httpHeaders?: { [key: string]: string };
  /**
  * The amount of retries to use for Grafana API and Grafana Cloud API calls. Defaults to 3. May alternatively be set via the `GRAFANA_AM_RETRIES` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs#retries GrafanaAdaptiveMetricsProvider#retries}
  */
  readonly retries?: number;
  /**
  * Grafana Cloud's API URL. May alternatively be set via the `GRAFANA_AM_API_URL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs#url GrafanaAdaptiveMetricsProvider#url}
  */
  readonly url?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs#alias GrafanaAdaptiveMetricsProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs grafana-adaptive-metrics}
*/
export class GrafanaAdaptiveMetricsProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "grafana-adaptive-metrics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GrafanaAdaptiveMetricsProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GrafanaAdaptiveMetricsProvider to import
  * @param importFromId The id of the existing GrafanaAdaptiveMetricsProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GrafanaAdaptiveMetricsProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "grafana-adaptive-metrics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/grafana/grafana-adaptive-metrics/0.3.4/docs grafana-adaptive-metrics} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GrafanaAdaptiveMetricsProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GrafanaAdaptiveMetricsProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'grafana-adaptive-metrics',
      terraformGeneratorMetadata: {
        providerName: 'grafana-adaptive-metrics',
        providerVersion: '0.3.4',
        providerVersionConstraint: '0.3.4'
      },
      terraformProviderSource: 'grafana/grafana-adaptive-metrics'
    });
    this._apiKey = config.apiKey;
    this._debug = config.debug;
    this._httpHeaders = config.httpHeaders;
    this._retries = config.retries;
    this._url = config.url;
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

  // debug - computed: false, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this._debug;
  }
  public set debug(value: boolean | cdktf.IResolvable | undefined) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders?: { [key: string]: string }; 
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public set httpHeaders(value: { [key: string]: string } | undefined) {
    this._httpHeaders = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders;
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

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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
      debug: cdktf.booleanToTerraform(this._debug),
      http_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._httpHeaders),
      retries: cdktf.numberToTerraform(this._retries),
      url: cdktf.stringToTerraform(this._url),
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
      debug: {
        value: cdktf.booleanToHclTerraform(this._debug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      http_headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._httpHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
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
