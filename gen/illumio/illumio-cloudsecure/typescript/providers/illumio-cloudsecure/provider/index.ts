// https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IllumioCloudsecureProviderConfig {
  /**
  * OAuth 2 access token used to authenticate against the CloudSecure Config API. Either `client_id`+`client_secret` or `access_token` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs#access_token IllumioCloudsecureProvider#access_token}
  */
  readonly accessToken?: string;
  /**
  * CloudSecure Config API endpoint, defaults to `dns:///cloud.illum.io:443`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs#api_endpoint IllumioCloudsecureProvider#api_endpoint}
  */
  readonly apiEndpoint?: string;
  /**
  * OAuth 2 client identifier used to authenticate against the CloudSecure Config API. Either `client_id`+`client_secret` or `access_token` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs#client_id IllumioCloudsecureProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * OAuth 2 client secret used to authenticate against the CloudSecure Config API. Either `client_id`+`client_secret` or `access_token` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs#client_secret IllumioCloudsecureProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Disables TLS server certificate verification for all requests to the CloudSecure Config API and Token endpoints. Server certificate verification is enabled by default. Should only be used for testing the provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs#insecure_tls IllumioCloudsecureProvider#insecure_tls}
  */
  readonly insecureTls?: boolean | cdktf.IResolvable;
  /**
  * Maximum duration of each API request, defaults to 10s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs#request_timeout IllumioCloudsecureProvider#request_timeout}
  */
  readonly requestTimeout?: string;
  /**
  * CloudSecure OAuth 2 Token endpoint, defaults to `https://cloud.illum.io/api/v1/authenticate`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs#token_endpoint IllumioCloudsecureProvider#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs#alias IllumioCloudsecureProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs illumio-cloudsecure}
*/
export class IllumioCloudsecureProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "illumio-cloudsecure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IllumioCloudsecureProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IllumioCloudsecureProvider to import
  * @param importFromId The id of the existing IllumioCloudsecureProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IllumioCloudsecureProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "illumio-cloudsecure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/illumio/illumio-cloudsecure/1.7.0/docs illumio-cloudsecure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IllumioCloudsecureProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IllumioCloudsecureProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'illumio-cloudsecure',
      terraformGeneratorMetadata: {
        providerName: 'illumio-cloudsecure',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      terraformProviderSource: 'illumio/illumio-cloudsecure'
    });
    this._accessToken = config.accessToken;
    this._apiEndpoint = config.apiEndpoint;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._insecureTls = config.insecureTls;
    this._requestTimeout = config.requestTimeout;
    this._tokenEndpoint = config.tokenEndpoint;
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

  // api_endpoint - computed: false, optional: true, required: false
  private _apiEndpoint?: string; 
  public get apiEndpoint() {
    return this._apiEndpoint;
  }
  public set apiEndpoint(value: string | undefined) {
    this._apiEndpoint = value;
  }
  public resetApiEndpoint() {
    this._apiEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiEndpointInput() {
    return this._apiEndpoint;
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

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this._clientSecret;
  }
  public set clientSecret(value: string | undefined) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // insecure_tls - computed: false, optional: true, required: false
  private _insecureTls?: boolean | cdktf.IResolvable; 
  public get insecureTls() {
    return this._insecureTls;
  }
  public set insecureTls(value: boolean | cdktf.IResolvable | undefined) {
    this._insecureTls = value;
  }
  public resetInsecureTls() {
    this._insecureTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureTlsInput() {
    return this._insecureTls;
  }

  // request_timeout - computed: false, optional: true, required: false
  private _requestTimeout?: string; 
  public get requestTimeout() {
    return this._requestTimeout;
  }
  public set requestTimeout(value: string | undefined) {
    this._requestTimeout = value;
  }
  public resetRequestTimeout() {
    this._requestTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTimeoutInput() {
    return this._requestTimeout;
  }

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this._tokenEndpoint;
  }
  public set tokenEndpoint(value: string | undefined) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
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
      api_endpoint: cdktf.stringToTerraform(this._apiEndpoint),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      insecure_tls: cdktf.booleanToTerraform(this._insecureTls),
      request_timeout: cdktf.stringToTerraform(this._requestTimeout),
      token_endpoint: cdktf.stringToTerraform(this._tokenEndpoint),
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
      api_endpoint: {
        value: cdktf.stringToHclTerraform(this._apiEndpoint),
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
      client_secret: {
        value: cdktf.stringToHclTerraform(this._clientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure_tls: {
        value: cdktf.booleanToHclTerraform(this._insecureTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      request_timeout: {
        value: cdktf.stringToHclTerraform(this._requestTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_endpoint: {
        value: cdktf.stringToHclTerraform(this._tokenEndpoint),
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
