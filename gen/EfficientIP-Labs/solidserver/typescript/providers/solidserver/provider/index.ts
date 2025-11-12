// https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SolidserverProviderConfig {
  /**
  * PEM formatted file with additional certificates to trust for TLS connection. This can also be specified via the SOLIDSERVER_ADDITIONALTRUSTCERTSFILE environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs#additional_trust_certs_file SolidserverProvider#additional_trust_certs_file}
  */
  readonly additionalTrustCertsFile?: string;
  /**
  * SOLIDServer Hostname or IP address. This can also be specified via the SOLIDSERVER_HOST environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs#host SolidserverProvider#host}
  */
  readonly host: string;
  /**
  * SOLIDServer API user password or token secret. This can also be specified via the SOLIDSERVER_PASSWORD environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs#password SolidserverProvider#password}
  */
  readonly password: string;
  /**
  * URL for a proxy to be used for SOLIDServer connectivity. Empty or unspecified means no proxy (direct connectivity). Supported URL schemes are 'http', 'https', and 'socks5'. If the scheme is empty, 'http' is assumed. This can also be specified via the SOLIDSERVER_PROXY_URL environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs#proxy_url SolidserverProvider#proxy_url}
  */
  readonly proxyUrl?: string;
  /**
  * SOLIDServer Version in case API user does not have admin permissions. This can also be specified via the SOLIDSERVER_VERSION environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs#solidserverversion SolidserverProvider#solidserverversion}
  */
  readonly solidserverversion?: string;
  /**
  * Enable/Disable ssl verify (Default : enabled). This can also be specified via the SOLIDSERVER_SSLVERIFY environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs#sslverify SolidserverProvider#sslverify}
  */
  readonly sslverify?: boolean | cdktf.IResolvable;
  /**
  * API call timeout value in seconds (Default 10s)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs#timeout SolidserverProvider#timeout}
  */
  readonly timeout?: number;
  /**
  * SOLIDServer username/password are token/secret. This can also be specified via the SOLIDSERVER_USE_TOKEN environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs#use_token SolidserverProvider#use_token}
  */
  readonly useToken?: boolean | cdktf.IResolvable;
  /**
  * SOLIDServer API User ID or Token ID. This can also be specified via the SOLIDSERVER_USERNAME environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs#username SolidserverProvider#username}
  */
  readonly username: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs#alias SolidserverProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs solidserver}
*/
export class SolidserverProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solidserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SolidserverProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SolidserverProvider to import
  * @param importFromId The id of the existing SolidserverProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SolidserverProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solidserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs solidserver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SolidserverProviderConfig
  */
  public constructor(scope: Construct, id: string, config: SolidserverProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'solidserver',
      terraformGeneratorMetadata: {
        providerName: 'solidserver',
        providerVersion: '1.1.25',
        providerVersionConstraint: '1.1.25'
      },
      terraformProviderSource: 'EfficientIP-Labs/solidserver'
    });
    this._additionalTrustCertsFile = config.additionalTrustCertsFile;
    this._host = config.host;
    this._password = config.password;
    this._proxyUrl = config.proxyUrl;
    this._solidserverversion = config.solidserverversion;
    this._sslverify = config.sslverify;
    this._timeout = config.timeout;
    this._useToken = config.useToken;
    this._username = config.username;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_trust_certs_file - computed: false, optional: true, required: false
  private _additionalTrustCertsFile?: string; 
  public get additionalTrustCertsFile() {
    return this._additionalTrustCertsFile;
  }
  public set additionalTrustCertsFile(value: string | undefined) {
    this._additionalTrustCertsFile = value;
  }
  public resetAdditionalTrustCertsFile() {
    this._additionalTrustCertsFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalTrustCertsFileInput() {
    return this._additionalTrustCertsFile;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this._host;
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this._password;
  }
  public set password(value: string | undefined) {
    this._password = value;
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

  // solidserverversion - computed: false, optional: true, required: false
  private _solidserverversion?: string; 
  public get solidserverversion() {
    return this._solidserverversion;
  }
  public set solidserverversion(value: string | undefined) {
    this._solidserverversion = value;
  }
  public resetSolidserverversion() {
    this._solidserverversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get solidserverversionInput() {
    return this._solidserverversion;
  }

  // sslverify - computed: false, optional: true, required: false
  private _sslverify?: boolean | cdktf.IResolvable; 
  public get sslverify() {
    return this._sslverify;
  }
  public set sslverify(value: boolean | cdktf.IResolvable | undefined) {
    this._sslverify = value;
  }
  public resetSslverify() {
    this._sslverify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslverifyInput() {
    return this._sslverify;
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

  // use_token - computed: false, optional: true, required: false
  private _useToken?: boolean | cdktf.IResolvable; 
  public get useToken() {
    return this._useToken;
  }
  public set useToken(value: boolean | cdktf.IResolvable | undefined) {
    this._useToken = value;
  }
  public resetUseToken() {
    this._useToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTokenInput() {
    return this._useToken;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this._username;
  }
  public set username(value: string | undefined) {
    this._username = value;
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
      additional_trust_certs_file: cdktf.stringToTerraform(this._additionalTrustCertsFile),
      host: cdktf.stringToTerraform(this._host),
      password: cdktf.stringToTerraform(this._password),
      proxy_url: cdktf.stringToTerraform(this._proxyUrl),
      solidserverversion: cdktf.stringToTerraform(this._solidserverversion),
      sslverify: cdktf.booleanToTerraform(this._sslverify),
      timeout: cdktf.numberToTerraform(this._timeout),
      use_token: cdktf.booleanToTerraform(this._useToken),
      username: cdktf.stringToTerraform(this._username),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_trust_certs_file: {
        value: cdktf.stringToHclTerraform(this._additionalTrustCertsFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      solidserverversion: {
        value: cdktf.stringToHclTerraform(this._solidserverversion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslverify: {
        value: cdktf.booleanToHclTerraform(this._sslverify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_token: {
        value: cdktf.booleanToHclTerraform(this._useToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
