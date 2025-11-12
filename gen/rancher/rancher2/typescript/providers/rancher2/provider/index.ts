// https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Rancher2ProviderConfig {
  /**
  * API Key used to authenticate with the rancher server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs#access_key Rancher2Provider#access_key}
  */
  readonly accessKey?: string;
  /**
  * The URL to the rancher API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs#api_url Rancher2Provider#api_url}
  */
  readonly apiUrl?: string;
  /**
  * Bootstrap rancher server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs#bootstrap Rancher2Provider#bootstrap}
  */
  readonly bootstrap?: boolean | cdktf.IResolvable;
  /**
  * CA certificates used to sign rancher server tls certificates. Mandatory if self signed tls and insecure option false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs#ca_certs Rancher2Provider#ca_certs}
  */
  readonly caCerts?: string;
  /**
  * Allow insecure connections to Rancher. Mandatory if self signed tls and not ca_certs provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs#insecure Rancher2Provider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Rancher connection retries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs#retries Rancher2Provider#retries}
  */
  readonly retries?: number;
  /**
  * API secret used to authenticate with the rancher server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs#secret_key Rancher2Provider#secret_key}
  */
  readonly secretKey?: string;
  /**
  * Rancher connection timeout (retry every 5s). Golang duration format, ex: "60s"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs#timeout Rancher2Provider#timeout}
  */
  readonly timeout?: string;
  /**
  * API token used to authenticate with the rancher server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs#token_key Rancher2Provider#token_key}
  */
  readonly tokenKey?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs#alias Rancher2Provider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs rancher2}
*/
export class Rancher2Provider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rancher2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Rancher2Provider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Rancher2Provider to import
  * @param importFromId The id of the existing Rancher2Provider that should be imported. Refer to the {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Rancher2Provider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rancher2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rancher/rancher2/8.3.1/docs rancher2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Rancher2ProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Rancher2ProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rancher2',
      terraformGeneratorMetadata: {
        providerName: 'rancher2',
        providerVersion: '8.3.1',
        providerVersionConstraint: '8.3.1'
      },
      terraformProviderSource: 'rancher/rancher2'
    });
    this._accessKey = config.accessKey;
    this._apiUrl = config.apiUrl;
    this._bootstrap = config.bootstrap;
    this._caCerts = config.caCerts;
    this._insecure = config.insecure;
    this._retries = config.retries;
    this._secretKey = config.secretKey;
    this._timeout = config.timeout;
    this._tokenKey = config.tokenKey;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this._accessKey;
  }
  public set accessKey(value: string | undefined) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

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

  // bootstrap - computed: false, optional: true, required: false
  private _bootstrap?: boolean | cdktf.IResolvable; 
  public get bootstrap() {
    return this._bootstrap;
  }
  public set bootstrap(value: boolean | cdktf.IResolvable | undefined) {
    this._bootstrap = value;
  }
  public resetBootstrap() {
    this._bootstrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapInput() {
    return this._bootstrap;
  }

  // ca_certs - computed: false, optional: true, required: false
  private _caCerts?: string; 
  public get caCerts() {
    return this._caCerts;
  }
  public set caCerts(value: string | undefined) {
    this._caCerts = value;
  }
  public resetCaCerts() {
    this._caCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertsInput() {
    return this._caCerts;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this._insecure;
  }
  public set insecure(value: boolean | cdktf.IResolvable | undefined) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // retries - computed: true, optional: true, required: false
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

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this._secretKey;
  }
  public set secretKey(value: string | undefined) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: string; 
  public get timeout() {
    return this._timeout;
  }
  public set timeout(value: string | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // token_key - computed: false, optional: true, required: false
  private _tokenKey?: string; 
  public get tokenKey() {
    return this._tokenKey;
  }
  public set tokenKey(value: string | undefined) {
    this._tokenKey = value;
  }
  public resetTokenKey() {
    this._tokenKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenKeyInput() {
    return this._tokenKey;
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
      access_key: cdktf.stringToTerraform(this._accessKey),
      api_url: cdktf.stringToTerraform(this._apiUrl),
      bootstrap: cdktf.booleanToTerraform(this._bootstrap),
      ca_certs: cdktf.stringToTerraform(this._caCerts),
      insecure: cdktf.booleanToTerraform(this._insecure),
      retries: cdktf.numberToTerraform(this._retries),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      timeout: cdktf.stringToTerraform(this._timeout),
      token_key: cdktf.stringToTerraform(this._tokenKey),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key: {
        value: cdktf.stringToHclTerraform(this._accessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_url: {
        value: cdktf.stringToHclTerraform(this._apiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bootstrap: {
        value: cdktf.booleanToHclTerraform(this._bootstrap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ca_certs: {
        value: cdktf.stringToHclTerraform(this._caCerts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      retries: {
        value: cdktf.numberToHclTerraform(this._retries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      secret_key: {
        value: cdktf.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.stringToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_key: {
        value: cdktf.stringToHclTerraform(this._tokenKey),
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
