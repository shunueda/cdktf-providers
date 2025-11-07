// https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeyfactorProviderConfig {
  /**
  * Access token for OAuth authentication. This can also be set via the `KEYFACTOR_AUTH_ACCESS_TOKEN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs#access_token KeyfactorProvider#access_token}
  */
  readonly accessToken?: string;
  /**
  * Path to Keyfactor Command API.Default value is `KeyfactorAPI`.This can also be set via the `KEYFACTOR_API_PATH` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs#api_path KeyfactorProvider#api_path}
  */
  readonly apiPath?: string;
  /**
  * Application key provisioned by Keyfactor Command instance.This can also be set via the `KEYFACTOR_APPKEY` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs#appkey KeyfactorProvider#appkey}
  */
  readonly appkey?: string;
  /**
  * OAuth audience to request when authenticating. This can also be set via the `KEYFACTOR_AUTH_AUDIENCE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs#audience KeyfactorProvider#audience}
  */
  readonly audience?: string;
  /**
  * Path to CA certificate to use when connecting to a Keyfactor Command identity provider in PEM format.This can also be set via the `KEYFACTOR_CA_CERT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs#auth_ca_certificate KeyfactorProvider#auth_ca_certificate}
  */
  readonly authCaCertificate?: string;
  /**
  * Client ID for OAuth authentication. This can also be set via the `KEYFACTOR_AUTH_CLIENT_ID` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs#client_id KeyfactorProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * Client secret for OAuth authentication. This can also be set via the `KEYFACTOR_AUTH_CLIENT_SECRET` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs#client_secret KeyfactorProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Path to CA certificate to use when connecting to the Keyfactor Command API in PEM format.This can also be set via the `KEYFACTOR_CA_CERT` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs#command_ca_certificate KeyfactorProvider#command_ca_certificate}
  */
  readonly commandCaCertificate?: string;
  /**
  * Domain that Keyfactor Command instance is hosted on. This can also be set via the `KEYFACTOR_DOMAIN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs#domain KeyfactorProvider#domain}
  */
  readonly domain?: string;
  /**
  * Hostname of Keyfactor Command instance. Ex: keyfactor.examplecompany.com. This can also be set via the `KEYFACTOR_HOSTNAME` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs#hostname KeyfactorProvider#hostname}
  */
  readonly hostname?: string;
  /**
  * Password of Keyfactor Command service account. This can also be set via the `KEYFACTOR_PASSWORD` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs#password KeyfactorProvider#password}
  */
  readonly password?: string;
  /**
  * The length of password to use when generating a PFX. Default value is `12`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs#pfx_password_length KeyfactorProvider#pfx_password_length}
  */
  readonly pfxPasswordLength?: number;
  /**
  * The maximum number of to use when generating a PFX password. Default value is `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs#pfx_password_max_special_chars KeyfactorProvider#pfx_password_max_special_chars}
  */
  readonly pfxPasswordMaxSpecialChars?: number;
  /**
  * The minimum number of digits to use when generating a PFX password. Default value is `4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs#pfx_password_min_digits KeyfactorProvider#pfx_password_min_digits}
  */
  readonly pfxPasswordMinDigits?: number;
  /**
  * The minimum number of uppercase letters to use when generating a PFX password. Default value is `4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs#pfx_password_min_uppercases KeyfactorProvider#pfx_password_min_uppercases}
  */
  readonly pfxPasswordMinUppercases?: number;
  /**
  * Global timeout for HTTP requests to Keyfactor Command instance. This can also be set via the `KEYFACTOR_CLIENT_TIMEOUT` environment variable.Default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs#request_timeout KeyfactorProvider#request_timeout}
  */
  readonly requestTimeout?: number;
  /**
  * A list of comma separated OAuth scopes to request when authenticating. This can also be set via the `KEYFACTOR_AUTH_SCOPES` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs#scopes KeyfactorProvider#scopes}
  */
  readonly scopes?: string;
  /**
  * Skip TLS verification when connecting to Keyfactor Command API and identity provider.Default value is `false`.This can also be set via the `KEYFACTOR_SKIP_VERIFY` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs#skip_tls_verify KeyfactorProvider#skip_tls_verify}
  */
  readonly skipTlsVerify?: boolean | cdktf.IResolvable;
  /**
  * OAuth token URL for Keyfactor Command instance. This can also be set via the `KEYFACTOR_AUTH_TOKEN_URL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs#token_url KeyfactorProvider#token_url}
  */
  readonly tokenUrl?: string;
  /**
  * Username of Keyfactor Command service account. This can also be set via the `KEYFACTOR_USERNAME` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs#username KeyfactorProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs#alias KeyfactorProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs keyfactor}
*/
export class KeyfactorProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keyfactor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KeyfactorProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeyfactorProvider to import
  * @param importFromId The id of the existing KeyfactorProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeyfactorProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keyfactor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keyfactor-pub/keyfactor/2.6.0/docs keyfactor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeyfactorProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: KeyfactorProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'keyfactor',
      terraformGeneratorMetadata: {
        providerName: 'keyfactor',
        providerVersion: '2.6.0'
      },
      terraformProviderSource: 'keyfactor-pub/keyfactor'
    });
    this._accessToken = config.accessToken;
    this._apiPath = config.apiPath;
    this._appkey = config.appkey;
    this._audience = config.audience;
    this._authCaCertificate = config.authCaCertificate;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._commandCaCertificate = config.commandCaCertificate;
    this._domain = config.domain;
    this._hostname = config.hostname;
    this._password = config.password;
    this._pfxPasswordLength = config.pfxPasswordLength;
    this._pfxPasswordMaxSpecialChars = config.pfxPasswordMaxSpecialChars;
    this._pfxPasswordMinDigits = config.pfxPasswordMinDigits;
    this._pfxPasswordMinUppercases = config.pfxPasswordMinUppercases;
    this._requestTimeout = config.requestTimeout;
    this._scopes = config.scopes;
    this._skipTlsVerify = config.skipTlsVerify;
    this._tokenUrl = config.tokenUrl;
    this._username = config.username;
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

  // api_path - computed: false, optional: true, required: false
  private _apiPath?: string; 
  public get apiPath() {
    return this._apiPath;
  }
  public set apiPath(value: string | undefined) {
    this._apiPath = value;
  }
  public resetApiPath() {
    this._apiPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiPathInput() {
    return this._apiPath;
  }

  // appkey - computed: false, optional: true, required: false
  private _appkey?: string; 
  public get appkey() {
    return this._appkey;
  }
  public set appkey(value: string | undefined) {
    this._appkey = value;
  }
  public resetAppkey() {
    this._appkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appkeyInput() {
    return this._appkey;
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this._audience;
  }
  public set audience(value: string | undefined) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // auth_ca_certificate - computed: false, optional: true, required: false
  private _authCaCertificate?: string; 
  public get authCaCertificate() {
    return this._authCaCertificate;
  }
  public set authCaCertificate(value: string | undefined) {
    this._authCaCertificate = value;
  }
  public resetAuthCaCertificate() {
    this._authCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCaCertificateInput() {
    return this._authCaCertificate;
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

  // command_ca_certificate - computed: false, optional: true, required: false
  private _commandCaCertificate?: string; 
  public get commandCaCertificate() {
    return this._commandCaCertificate;
  }
  public set commandCaCertificate(value: string | undefined) {
    this._commandCaCertificate = value;
  }
  public resetCommandCaCertificate() {
    this._commandCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandCaCertificateInput() {
    return this._commandCaCertificate;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this._domain;
  }
  public set domain(value: string | undefined) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this._hostname;
  }
  public set hostname(value: string | undefined) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // pfx_password_length - computed: false, optional: true, required: false
  private _pfxPasswordLength?: number; 
  public get pfxPasswordLength() {
    return this._pfxPasswordLength;
  }
  public set pfxPasswordLength(value: number | undefined) {
    this._pfxPasswordLength = value;
  }
  public resetPfxPasswordLength() {
    this._pfxPasswordLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfxPasswordLengthInput() {
    return this._pfxPasswordLength;
  }

  // pfx_password_max_special_chars - computed: false, optional: true, required: false
  private _pfxPasswordMaxSpecialChars?: number; 
  public get pfxPasswordMaxSpecialChars() {
    return this._pfxPasswordMaxSpecialChars;
  }
  public set pfxPasswordMaxSpecialChars(value: number | undefined) {
    this._pfxPasswordMaxSpecialChars = value;
  }
  public resetPfxPasswordMaxSpecialChars() {
    this._pfxPasswordMaxSpecialChars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfxPasswordMaxSpecialCharsInput() {
    return this._pfxPasswordMaxSpecialChars;
  }

  // pfx_password_min_digits - computed: false, optional: true, required: false
  private _pfxPasswordMinDigits?: number; 
  public get pfxPasswordMinDigits() {
    return this._pfxPasswordMinDigits;
  }
  public set pfxPasswordMinDigits(value: number | undefined) {
    this._pfxPasswordMinDigits = value;
  }
  public resetPfxPasswordMinDigits() {
    this._pfxPasswordMinDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfxPasswordMinDigitsInput() {
    return this._pfxPasswordMinDigits;
  }

  // pfx_password_min_uppercases - computed: false, optional: true, required: false
  private _pfxPasswordMinUppercases?: number; 
  public get pfxPasswordMinUppercases() {
    return this._pfxPasswordMinUppercases;
  }
  public set pfxPasswordMinUppercases(value: number | undefined) {
    this._pfxPasswordMinUppercases = value;
  }
  public resetPfxPasswordMinUppercases() {
    this._pfxPasswordMinUppercases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfxPasswordMinUppercasesInput() {
    return this._pfxPasswordMinUppercases;
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
  private _scopes?: string; 
  public get scopes() {
    return this._scopes;
  }
  public set scopes(value: string | undefined) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // skip_tls_verify - computed: false, optional: true, required: false
  private _skipTlsVerify?: boolean | cdktf.IResolvable; 
  public get skipTlsVerify() {
    return this._skipTlsVerify;
  }
  public set skipTlsVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._skipTlsVerify = value;
  }
  public resetSkipTlsVerify() {
    this._skipTlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipTlsVerifyInput() {
    return this._skipTlsVerify;
  }

  // token_url - computed: false, optional: true, required: false
  private _tokenUrl?: string; 
  public get tokenUrl() {
    return this._tokenUrl;
  }
  public set tokenUrl(value: string | undefined) {
    this._tokenUrl = value;
  }
  public resetTokenUrl() {
    this._tokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenUrlInput() {
    return this._tokenUrl;
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
      access_token: cdktf.stringToTerraform(this._accessToken),
      api_path: cdktf.stringToTerraform(this._apiPath),
      appkey: cdktf.stringToTerraform(this._appkey),
      audience: cdktf.stringToTerraform(this._audience),
      auth_ca_certificate: cdktf.stringToTerraform(this._authCaCertificate),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      command_ca_certificate: cdktf.stringToTerraform(this._commandCaCertificate),
      domain: cdktf.stringToTerraform(this._domain),
      hostname: cdktf.stringToTerraform(this._hostname),
      password: cdktf.stringToTerraform(this._password),
      pfx_password_length: cdktf.numberToTerraform(this._pfxPasswordLength),
      pfx_password_max_special_chars: cdktf.numberToTerraform(this._pfxPasswordMaxSpecialChars),
      pfx_password_min_digits: cdktf.numberToTerraform(this._pfxPasswordMinDigits),
      pfx_password_min_uppercases: cdktf.numberToTerraform(this._pfxPasswordMinUppercases),
      request_timeout: cdktf.numberToTerraform(this._requestTimeout),
      scopes: cdktf.stringToTerraform(this._scopes),
      skip_tls_verify: cdktf.booleanToTerraform(this._skipTlsVerify),
      token_url: cdktf.stringToTerraform(this._tokenUrl),
      username: cdktf.stringToTerraform(this._username),
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
      api_path: {
        value: cdktf.stringToHclTerraform(this._apiPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      appkey: {
        value: cdktf.stringToHclTerraform(this._appkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audience: {
        value: cdktf.stringToHclTerraform(this._audience),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_ca_certificate: {
        value: cdktf.stringToHclTerraform(this._authCaCertificate),
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
      command_ca_certificate: {
        value: cdktf.stringToHclTerraform(this._commandCaCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostname: {
        value: cdktf.stringToHclTerraform(this._hostname),
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
      pfx_password_length: {
        value: cdktf.numberToHclTerraform(this._pfxPasswordLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pfx_password_max_special_chars: {
        value: cdktf.numberToHclTerraform(this._pfxPasswordMaxSpecialChars),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pfx_password_min_digits: {
        value: cdktf.numberToHclTerraform(this._pfxPasswordMinDigits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      pfx_password_min_uppercases: {
        value: cdktf.numberToHclTerraform(this._pfxPasswordMinUppercases),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_timeout: {
        value: cdktf.numberToHclTerraform(this._requestTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scopes: {
        value: cdktf.stringToHclTerraform(this._scopes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_tls_verify: {
        value: cdktf.booleanToHclTerraform(this._skipTlsVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      token_url: {
        value: cdktf.stringToHclTerraform(this._tokenUrl),
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
