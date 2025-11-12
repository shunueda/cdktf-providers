// https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IllumioCoreProviderConfig {
  /**
  * Secret of API Key. This can also be set by environment variable `ILLUMIO_API_KEY_SECRET`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs#api_secret IllumioCoreProvider#api_secret}
  */
  readonly apiSecret: string;
  /**
  * Username of API Key. This can also be set by environment variable `ILLUMIO_API_KEY_USERNAME`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs#api_username IllumioCoreProvider#api_username}
  */
  readonly apiUsername: string;
  /**
  * Backoff Time (in seconds) on getting 429 (Too Many Requests). Default value: 10. Note: A default rate limit of 125 requests/min is already in place. A jitter of 1-5 seconds will be added to backoff time to randomize backoff.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs#backoff_time IllumioCoreProvider#backoff_time}
  */
  readonly backoffTime?: number;
  /**
  * The path to CA certificate file (PEM). In case, certificate is based on legacy CN instead of ASN, set env. variable `GODEBUG=x509ignoreCN=0`. This can also be set by environment variable `ILLUMIO_CA_FILE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs#ca_file IllumioCoreProvider#ca_file}
  */
  readonly caFile?: string;
  /**
  * Allow insecure TLS. Only `yes` will mark it insecure. This can also be set by environment variable `ILLUMIO_ALLOW_INSECURE_TLS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs#insecure IllumioCoreProvider#insecure}
  */
  readonly insecure?: string;
  /**
  * Maximum retries for an API request. Default value: 3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs#max_retries IllumioCoreProvider#max_retries}
  */
  readonly maxRetries?: number;
  /**
  * ID of the Organization. Can also be set by environment variable `ILLUMIO_PCE_ORG_ID`. Default value: 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs#org_id IllumioCoreProvider#org_id}
  */
  readonly orgId?: number;
  /**
  * Host URL of Illumio PCE. This can also be set by environment variable `ILLUMIO_PCE_HOST`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs#pce_host IllumioCoreProvider#pce_host}
  */
  readonly pceHost: string;
  /**
  * Proxy credential in format `username:password`. This can also be set by environment variable `ILLUMIO_PROXY_CREDENTIALS`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs#proxy_creds IllumioCoreProvider#proxy_creds}
  */
  readonly proxyCreds?: string;
  /**
  * Proxy Server URL with port number. This can also be set by environment variable `ILLUMIO_PROXY_URL`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs#proxy_url IllumioCoreProvider#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * Timeout for HTTP requests. Default value: 30
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs#request_timeout IllumioCoreProvider#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs#alias IllumioCoreProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs illumio-core}
*/
export class IllumioCoreProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-core";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IllumioCoreProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IllumioCoreProvider to import
  * @param importFromId The id of the existing IllumioCoreProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IllumioCoreProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-core", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-core/1.1.6/docs illumio-core} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IllumioCoreProviderConfig
  */
  public constructor(scope: Construct, id: string, config: IllumioCoreProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'illumio-core',
      terraformGeneratorMetadata: {
        providerName: 'illumio-core',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
      },
      terraformProviderSource: 'illumio/illumio-core'
    });
    this._apiSecret = config.apiSecret;
    this._apiUsername = config.apiUsername;
    this._backoffTime = config.backoffTime;
    this._caFile = config.caFile;
    this._insecure = config.insecure;
    this._maxRetries = config.maxRetries;
    this._orgId = config.orgId;
    this._pceHost = config.pceHost;
    this._proxyCreds = config.proxyCreds;
    this._proxyUrl = config.proxyUrl;
    this._requestTimeout = config.requestTimeout;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_secret - computed: false, optional: false, required: true
  private _apiSecret?: string; 
  public get apiSecret() {
    return this._apiSecret;
  }
  public set apiSecret(value: string | undefined) {
    this._apiSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSecretInput() {
    return this._apiSecret;
  }

  // api_username - computed: false, optional: false, required: true
  private _apiUsername?: string; 
  public get apiUsername() {
    return this._apiUsername;
  }
  public set apiUsername(value: string | undefined) {
    this._apiUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUsernameInput() {
    return this._apiUsername;
  }

  // backoff_time - computed: false, optional: true, required: false
  private _backoffTime?: number; 
  public get backoffTime() {
    return this._backoffTime;
  }
  public set backoffTime(value: number | undefined) {
    this._backoffTime = value;
  }
  public resetBackoffTime() {
    this._backoffTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backoffTimeInput() {
    return this._backoffTime;
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this._caFile;
  }
  public set caFile(value: string | undefined) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: string; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: string | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: number; 
  public get orgId() {
    return this._orgId;
  }
  public set orgId(value: number | undefined) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // pce_host - computed: false, optional: false, required: true
  private _pceHost?: string; 
  public get pceHost() {
    return this._pceHost;
  }
  public set pceHost(value: string | undefined) {
    this._pceHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pceHostInput() {
    return this._pceHost;
  }

  // proxy_creds - computed: false, optional: true, required: false
  private _proxyCreds?: string; 
  public get proxyCreds() {
    return this._proxyCreds;
  }
  public set proxyCreds(value: string | undefined) {
    this._proxyCreds = value;
  }
  public resetProxyCreds() {
    this._proxyCreds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyCredsInput() {
    return this._proxyCreds;
  }

  // proxy_url - computed: false, optional: true, required: false
  private _proxyUrl?: string; 
  public get proxyUrl() {
    return this._proxyUrl;
  }
  public set proxyUrl(value: string | undefined) {
    this._proxyUrl = value;
  }
  public resetProxyUrl() {
    this._proxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUrlInput() {
    return this._proxyUrl;
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
      api_secret: cdktf.stringToTerraform(this._apiSecret),
      api_username: cdktf.stringToTerraform(this._apiUsername),
      backoff_time: cdktf.numberToTerraform(this._backoffTime),
      ca_file: cdktf.stringToTerraform(this._caFile),
      insecure: cdktf.stringToTerraform(this._insecure),
      max_retries: cdktf.numberToTerraform(this._maxRetries),
      org_id: cdktf.numberToTerraform(this._orgId),
      pce_host: cdktf.stringToTerraform(this._pceHost),
      proxy_creds: cdktf.stringToTerraform(this._proxyCreds),
      proxy_url: cdktf.stringToTerraform(this._proxyUrl),
      request_timeout: cdktf.numberToTerraform(this._requestTimeout),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_secret: {
        value: cdktf.stringToHclTerraform(this._apiSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_username: {
        value: cdktf.stringToHclTerraform(this._apiUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backoff_time: {
        value: cdktf.numberToHclTerraform(this._backoffTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ca_file: {
        value: cdktf.stringToHclTerraform(this._caFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure: {
        value: cdktf.stringToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_retries: {
        value: cdktf.numberToHclTerraform(this._maxRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      org_id: {
        value: cdktf.numberToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pce_host: {
        value: cdktf.stringToHclTerraform(this._pceHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_creds: {
        value: cdktf.stringToHclTerraform(this._proxyCreds),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_url: {
        value: cdktf.stringToHclTerraform(this._proxyUrl),
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
