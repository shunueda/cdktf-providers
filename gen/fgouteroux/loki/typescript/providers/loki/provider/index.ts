// https://registry.terraform.io/providers/fgouteroux/loki/1.0.1/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LokiProviderConfig {
  /**
  * Client ca for client authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/loki/1.0.1/docs#ca LokiProvider#ca}
  */
  readonly ca?: string;
  /**
  * Client cert for client authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/loki/1.0.1/docs#cert LokiProvider#cert}
  */
  readonly cert?: string;
  /**
  * Enable debug mode to trace requests executed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/loki/1.0.1/docs#debug LokiProvider#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * A map of header names and values to set on all outbound requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/loki/1.0.1/docs#headers LokiProvider#headers}
  */
  readonly headers?: { [key: string]: string };
  /**
  * When using https, this disables TLS verification of the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/loki/1.0.1/docs#insecure LokiProvider#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Client key for client authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/loki/1.0.1/docs#key LokiProvider#key}
  */
  readonly key?: string;
  /**
  * The default organization id to operate on within loki. For resources that have an org_id attribute, the resource-level attribute has priority. May alternatively be set via the LOKI_ORG_ID environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/loki/1.0.1/docs#org_id LokiProvider#org_id}
  */
  readonly orgId: string;
  /**
  * When set, will use this password for BASIC auth to the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/loki/1.0.1/docs#password LokiProvider#password}
  */
  readonly password?: string;
  /**
  * URL to the proxy to be used for all API requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/loki/1.0.1/docs#proxy_url LokiProvider#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * When set, will cause requests taking longer than this time (in seconds) to be aborted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/loki/1.0.1/docs#timeout LokiProvider#timeout}
  */
  readonly timeout?: number;
  /**
  * When set, will use this token for Bearer auth to the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/loki/1.0.1/docs#token LokiProvider#token}
  */
  readonly token?: string;
  /**
  * loki base url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/loki/1.0.1/docs#uri LokiProvider#uri}
  */
  readonly uri: string;
  /**
  * When set, will use this username for BASIC auth to the API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/loki/1.0.1/docs#username LokiProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fgouteroux/loki/1.0.1/docs#alias LokiProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fgouteroux/loki/1.0.1/docs loki}
*/
export class LokiProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "loki";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LokiProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LokiProvider to import
  * @param importFromId The id of the existing LokiProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/fgouteroux/loki/1.0.1/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LokiProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "loki", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fgouteroux/loki/1.0.1/docs loki} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LokiProviderConfig
  */
  public constructor(scope: Construct, id: string, config: LokiProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'loki',
      terraformGeneratorMetadata: {
        providerName: 'loki',
        providerVersion: '1.0.1',
        providerVersionConstraint: '1.0.1'
      },
      terraformProviderSource: 'fgouteroux/loki'
    });
    this._ca = config.ca;
    this._cert = config.cert;
    this._debug = config.debug;
    this._headers = config.headers;
    this._insecure = config.insecure;
    this._key = config.key;
    this._orgId = config.orgId;
    this._password = config.password;
    this._proxyUrl = config.proxyUrl;
    this._timeout = config.timeout;
    this._token = config.token;
    this._uri = config.uri;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca - computed: false, optional: true, required: false
  private _ca?: string; 
  public get ca() {
    return this._ca;
  }
  public set ca(value: string | undefined) {
    this._ca = value;
  }
  public resetCa() {
    this._ca = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca;
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this._cert;
  }
  public set cert(value: string | undefined) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
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

  // headers - computed: false, optional: true, required: false
  private _headers?: { [key: string]: string }; 
  public get headers() {
    return this._headers;
  }
  public set headers(value: { [key: string]: string } | undefined) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
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

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this._key;
  }
  public set key(value: string | undefined) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this._orgId;
  }
  public set orgId(value: string | undefined) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this._timeout;
  }
  public set timeout(value: number | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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

  // uri - computed: false, optional: false, required: true
  private _uri?: string; 
  public get uri() {
    return this._uri;
  }
  public set uri(value: string | undefined) {
    this._uri = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
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
      ca: cdktf.stringToTerraform(this._ca),
      cert: cdktf.stringToTerraform(this._cert),
      debug: cdktf.booleanToTerraform(this._debug),
      headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._headers),
      insecure: cdktf.booleanToTerraform(this._insecure),
      key: cdktf.stringToTerraform(this._key),
      org_id: cdktf.stringToTerraform(this._orgId),
      password: cdktf.stringToTerraform(this._password),
      proxy_url: cdktf.stringToTerraform(this._proxyUrl),
      timeout: cdktf.numberToTerraform(this._timeout),
      token: cdktf.stringToTerraform(this._token),
      uri: cdktf.stringToTerraform(this._uri),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca: {
        value: cdktf.stringToHclTerraform(this._ca),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cert: {
        value: cdktf.stringToHclTerraform(this._cert),
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
      headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._headers),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key: {
        value: cdktf.stringToHclTerraform(this._key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
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
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
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
      uri: {
        value: cdktf.stringToHclTerraform(this._uri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
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
