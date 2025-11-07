// https://registry.terraform.io/providers/venafi/venafi-token/0.2.1/docs/resources/credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application that will be using the token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi-token/0.2.1/docs/resources/credential#client_id Credential#client_id}
  */
  readonly clientId?: string;
  /**
  * Expiration date of the access token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi-token/0.2.1/docs/resources/credential#expiration Credential#expiration}
  */
  readonly expiration?: number;
  /**
  * base64-encoded PKCS#12 keystore containing a vcert certificate, private key, and chain certificates to authenticate to TLSPDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi-token/0.2.1/docs/resources/credential#p12_cert_filename Credential#p12_cert_filename}
  */
  readonly p12CertFilename?: string;
  /**
  * Password for the PKCS#12 keystore declared in p12_cert
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi-token/0.2.1/docs/resources/credential#p12_cert_password Credential#p12_cert_password}
  */
  readonly p12CertPassword?: string;
  /**
  * Password to authenticate to TLSPDC and request a new token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi-token/0.2.1/docs/resources/credential#password Credential#password}
  */
  readonly password?: string;
  /**
  * Token used to request a new token pair (access/refresh token) from a TLSPDC instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi-token/0.2.1/docs/resources/credential#refresh_token Credential#refresh_token}
  */
  readonly refreshToken?: string;
  /**
  * number of days before expiration where a token refresh should be done
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi-token/0.2.1/docs/resources/credential#refresh_window Credential#refresh_window}
  */
  readonly refreshWindow?: number;
  /**
  * Use to specify a base64-encoded, PEM-formatted file that contains certificates to be trust anchors for all communications with the Venafi TLSPDC instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi-token/0.2.1/docs/resources/credential#trust_bundle Credential#trust_bundle}
  */
  readonly trustBundle?: string;
  /**
  * The Venafi TLSPDC URL. Example: https://tpp.venafi.example/vedsdk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi-token/0.2.1/docs/resources/credential#url Credential#url}
  */
  readonly url?: string;
  /**
  * Username to authenticate to TLSPDC and request a new token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/venafi/venafi-token/0.2.1/docs/resources/credential#username Credential#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/venafi/venafi-token/0.2.1/docs/resources/credential venafi-token_credential}
*/
export class Credential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "venafi-token_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Credential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Credential to import
  * @param importFromId The id of the existing Credential that should be imported. Refer to the {@link https://registry.terraform.io/providers/venafi/venafi-token/0.2.1/docs/resources/credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Credential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "venafi-token_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/venafi/venafi-token/0.2.1/docs/resources/credential venafi-token_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CredentialConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'venafi-token_credential',
      terraformGeneratorMetadata: {
        providerName: 'venafi-token',
        providerVersion: '0.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientId = config.clientId;
    this._expiration = config.expiration;
    this._p12CertFilename = config.p12CertFilename;
    this._p12CertPassword = config.p12CertPassword;
    this._password = config.password;
    this._refreshToken = config.refreshToken;
    this._refreshWindow = config.refreshWindow;
    this._trustBundle = config.trustBundle;
    this._url = config.url;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token - computed: true, optional: false, required: false
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // expiration - computed: true, optional: true, required: false
  private _expiration?: number; 
  public get expiration() {
    return this.getNumberAttribute('expiration');
  }
  public set expiration(value: number) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
  }

  // p12_cert_filename - computed: true, optional: true, required: false
  private _p12CertFilename?: string; 
  public get p12CertFilename() {
    return this.getStringAttribute('p12_cert_filename');
  }
  public set p12CertFilename(value: string) {
    this._p12CertFilename = value;
  }
  public resetP12CertFilename() {
    this._p12CertFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p12CertFilenameInput() {
    return this._p12CertFilename;
  }

  // p12_cert_password - computed: true, optional: true, required: false
  private _p12CertPassword?: string; 
  public get p12CertPassword() {
    return this.getStringAttribute('p12_cert_password');
  }
  public set p12CertPassword(value: string) {
    this._p12CertPassword = value;
  }
  public resetP12CertPassword() {
    this._p12CertPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get p12CertPasswordInput() {
    return this._p12CertPassword;
  }

  // password - computed: true, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // refresh_token - computed: true, optional: true, required: false
  private _refreshToken?: string; 
  public get refreshToken() {
    return this.getStringAttribute('refresh_token');
  }
  public set refreshToken(value: string) {
    this._refreshToken = value;
  }
  public resetRefreshToken() {
    this._refreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenInput() {
    return this._refreshToken;
  }

  // refresh_window - computed: true, optional: true, required: false
  private _refreshWindow?: number; 
  public get refreshWindow() {
    return this.getNumberAttribute('refresh_window');
  }
  public set refreshWindow(value: number) {
    this._refreshWindow = value;
  }
  public resetRefreshWindow() {
    this._refreshWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshWindowInput() {
    return this._refreshWindow;
  }

  // trust_bundle - computed: true, optional: true, required: false
  private _trustBundle?: string; 
  public get trustBundle() {
    return this.getStringAttribute('trust_bundle');
  }
  public set trustBundle(value: string) {
    this._trustBundle = value;
  }
  public resetTrustBundle() {
    this._trustBundle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustBundleInput() {
    return this._trustBundle;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: true, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      expiration: cdktf.numberToTerraform(this._expiration),
      p12_cert_filename: cdktf.stringToTerraform(this._p12CertFilename),
      p12_cert_password: cdktf.stringToTerraform(this._p12CertPassword),
      password: cdktf.stringToTerraform(this._password),
      refresh_token: cdktf.stringToTerraform(this._refreshToken),
      refresh_window: cdktf.numberToTerraform(this._refreshWindow),
      trust_bundle: cdktf.stringToTerraform(this._trustBundle),
      url: cdktf.stringToTerraform(this._url),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expiration: {
        value: cdktf.numberToHclTerraform(this._expiration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      p12_cert_filename: {
        value: cdktf.stringToHclTerraform(this._p12CertFilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      p12_cert_password: {
        value: cdktf.stringToHclTerraform(this._p12CertPassword),
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
      refresh_token: {
        value: cdktf.stringToHclTerraform(this._refreshToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_window: {
        value: cdktf.numberToHclTerraform(this._refreshWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trust_bundle: {
        value: cdktf.stringToHclTerraform(this._trustBundle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
