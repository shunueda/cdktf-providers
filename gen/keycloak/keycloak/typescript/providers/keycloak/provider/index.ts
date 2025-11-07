// https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KeycloakProviderConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs#access_token KeycloakProvider#access_token}
  */
  readonly accessToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs#additional_headers KeycloakProvider#additional_headers}
  */
  readonly additionalHeaders?: { [key: string]: string };
  /**
  * The admin URL of the Keycloak instance if different from the main URL, before `/auth`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs#admin_url KeycloakProvider#admin_url}
  */
  readonly adminUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs#base_path KeycloakProvider#base_path}
  */
  readonly basePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs#client_id KeycloakProvider#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs#client_secret KeycloakProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Timeout (in seconds) of the Keycloak client
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs#client_timeout KeycloakProvider#client_timeout}
  */
  readonly clientTimeout?: number;
  /**
  * Whether or not to login to Keycloak instance on provider initialization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs#initial_login KeycloakProvider#initial_login}
  */
  readonly initialLogin?: boolean | cdktf.IResolvable;
  /**
  * The algorithm used to sign the JWT when client-jwt is used. Defaults to RS256.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs#jwt_signing_alg KeycloakProvider#jwt_signing_alg}
  */
  readonly jwtSigningAlg?: string;
  /**
  * The PEM-formatted private key used to sign the JWT when client-jwt is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs#jwt_signing_key KeycloakProvider#jwt_signing_key}
  */
  readonly jwtSigningKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs#password KeycloakProvider#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs#realm KeycloakProvider#realm}
  */
  readonly realm?: string;
  /**
  * When true, the provider will treat the Keycloak instance as a Red Hat SSO server, specifically when parsing the version returned from the /serverinfo API endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs#red_hat_sso KeycloakProvider#red_hat_sso}
  */
  readonly redHatSso?: boolean | cdktf.IResolvable;
  /**
  * Allows x509 calls using an unknown CA certificate (for development purposes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs#root_ca_certificate KeycloakProvider#root_ca_certificate}
  */
  readonly rootCaCertificate?: string;
  /**
  * TLS client certificate as PEM string for mutual authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs#tls_client_certificate KeycloakProvider#tls_client_certificate}
  */
  readonly tlsClientCertificate?: string;
  /**
  * TLS client private key as PEM string for mutual authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs#tls_client_private_key KeycloakProvider#tls_client_private_key}
  */
  readonly tlsClientPrivateKey?: string;
  /**
  * Allows ignoring insecure certificates when set to true. Defaults to false. Disabling security check is dangerous and should be avoided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs#tls_insecure_skip_verify KeycloakProvider#tls_insecure_skip_verify}
  */
  readonly tlsInsecureSkipVerify?: boolean | cdktf.IResolvable;
  /**
  * The base URL of the Keycloak instance, before `/auth`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs#url KeycloakProvider#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs#username KeycloakProvider#username}
  */
  readonly username?: string;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs#alias KeycloakProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs keycloak}
*/
export class KeycloakProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KeycloakProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KeycloakProvider to import
  * @param importFromId The id of the existing KeycloakProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KeycloakProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs keycloak} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KeycloakProviderConfig
  */
  public constructor(scope: Construct, id: string, config: KeycloakProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '5.5.0'
      },
      terraformProviderSource: 'keycloak/keycloak'
    });
    this._accessToken = config.accessToken;
    this._additionalHeaders = config.additionalHeaders;
    this._adminUrl = config.adminUrl;
    this._basePath = config.basePath;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._clientTimeout = config.clientTimeout;
    this._initialLogin = config.initialLogin;
    this._jwtSigningAlg = config.jwtSigningAlg;
    this._jwtSigningKey = config.jwtSigningKey;
    this._password = config.password;
    this._realm = config.realm;
    this._redHatSso = config.redHatSso;
    this._rootCaCertificate = config.rootCaCertificate;
    this._tlsClientCertificate = config.tlsClientCertificate;
    this._tlsClientPrivateKey = config.tlsClientPrivateKey;
    this._tlsInsecureSkipVerify = config.tlsInsecureSkipVerify;
    this._url = config.url;
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

  // additional_headers - computed: false, optional: true, required: false
  private _additionalHeaders?: { [key: string]: string }; 
  public get additionalHeaders() {
    return this._additionalHeaders;
  }
  public set additionalHeaders(value: { [key: string]: string } | undefined) {
    this._additionalHeaders = value;
  }
  public resetAdditionalHeaders() {
    this._additionalHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalHeadersInput() {
    return this._additionalHeaders;
  }

  // admin_url - computed: false, optional: true, required: false
  private _adminUrl?: string; 
  public get adminUrl() {
    return this._adminUrl;
  }
  public set adminUrl(value: string | undefined) {
    this._adminUrl = value;
  }
  public resetAdminUrl() {
    this._adminUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUrlInput() {
    return this._adminUrl;
  }

  // base_path - computed: false, optional: true, required: false
  private _basePath?: string; 
  public get basePath() {
    return this._basePath;
  }
  public set basePath(value: string | undefined) {
    this._basePath = value;
  }
  public resetBasePath() {
    this._basePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basePathInput() {
    return this._basePath;
  }

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this._clientId;
  }
  public set clientId(value: string | undefined) {
    this._clientId = value;
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

  // client_timeout - computed: false, optional: true, required: false
  private _clientTimeout?: number; 
  public get clientTimeout() {
    return this._clientTimeout;
  }
  public set clientTimeout(value: number | undefined) {
    this._clientTimeout = value;
  }
  public resetClientTimeout() {
    this._clientTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTimeoutInput() {
    return this._clientTimeout;
  }

  // initial_login - computed: false, optional: true, required: false
  private _initialLogin?: boolean | cdktf.IResolvable; 
  public get initialLogin() {
    return this._initialLogin;
  }
  public set initialLogin(value: boolean | cdktf.IResolvable | undefined) {
    this._initialLogin = value;
  }
  public resetInitialLogin() {
    this._initialLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialLoginInput() {
    return this._initialLogin;
  }

  // jwt_signing_alg - computed: false, optional: true, required: false
  private _jwtSigningAlg?: string; 
  public get jwtSigningAlg() {
    return this._jwtSigningAlg;
  }
  public set jwtSigningAlg(value: string | undefined) {
    this._jwtSigningAlg = value;
  }
  public resetJwtSigningAlg() {
    this._jwtSigningAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtSigningAlgInput() {
    return this._jwtSigningAlg;
  }

  // jwt_signing_key - computed: false, optional: true, required: false
  private _jwtSigningKey?: string; 
  public get jwtSigningKey() {
    return this._jwtSigningKey;
  }
  public set jwtSigningKey(value: string | undefined) {
    this._jwtSigningKey = value;
  }
  public resetJwtSigningKey() {
    this._jwtSigningKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtSigningKeyInput() {
    return this._jwtSigningKey;
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

  // realm - computed: false, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this._realm;
  }
  public set realm(value: string | undefined) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // red_hat_sso - computed: false, optional: true, required: false
  private _redHatSso?: boolean | cdktf.IResolvable; 
  public get redHatSso() {
    return this._redHatSso;
  }
  public set redHatSso(value: boolean | cdktf.IResolvable | undefined) {
    this._redHatSso = value;
  }
  public resetRedHatSso() {
    this._redHatSso = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redHatSsoInput() {
    return this._redHatSso;
  }

  // root_ca_certificate - computed: false, optional: true, required: false
  private _rootCaCertificate?: string; 
  public get rootCaCertificate() {
    return this._rootCaCertificate;
  }
  public set rootCaCertificate(value: string | undefined) {
    this._rootCaCertificate = value;
  }
  public resetRootCaCertificate() {
    this._rootCaCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootCaCertificateInput() {
    return this._rootCaCertificate;
  }

  // tls_client_certificate - computed: false, optional: true, required: false
  private _tlsClientCertificate?: string; 
  public get tlsClientCertificate() {
    return this._tlsClientCertificate;
  }
  public set tlsClientCertificate(value: string | undefined) {
    this._tlsClientCertificate = value;
  }
  public resetTlsClientCertificate() {
    this._tlsClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientCertificateInput() {
    return this._tlsClientCertificate;
  }

  // tls_client_private_key - computed: false, optional: true, required: false
  private _tlsClientPrivateKey?: string; 
  public get tlsClientPrivateKey() {
    return this._tlsClientPrivateKey;
  }
  public set tlsClientPrivateKey(value: string | undefined) {
    this._tlsClientPrivateKey = value;
  }
  public resetTlsClientPrivateKey() {
    this._tlsClientPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientPrivateKeyInput() {
    return this._tlsClientPrivateKey;
  }

  // tls_insecure_skip_verify - computed: false, optional: true, required: false
  private _tlsInsecureSkipVerify?: boolean | cdktf.IResolvable; 
  public get tlsInsecureSkipVerify() {
    return this._tlsInsecureSkipVerify;
  }
  public set tlsInsecureSkipVerify(value: boolean | cdktf.IResolvable | undefined) {
    this._tlsInsecureSkipVerify = value;
  }
  public resetTlsInsecureSkipVerify() {
    this._tlsInsecureSkipVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInsecureSkipVerifyInput() {
    return this._tlsInsecureSkipVerify;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this._url;
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
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
      additional_headers: cdktf.hashMapper(cdktf.stringToTerraform)(this._additionalHeaders),
      admin_url: cdktf.stringToTerraform(this._adminUrl),
      base_path: cdktf.stringToTerraform(this._basePath),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      client_timeout: cdktf.numberToTerraform(this._clientTimeout),
      initial_login: cdktf.booleanToTerraform(this._initialLogin),
      jwt_signing_alg: cdktf.stringToTerraform(this._jwtSigningAlg),
      jwt_signing_key: cdktf.stringToTerraform(this._jwtSigningKey),
      password: cdktf.stringToTerraform(this._password),
      realm: cdktf.stringToTerraform(this._realm),
      red_hat_sso: cdktf.booleanToTerraform(this._redHatSso),
      root_ca_certificate: cdktf.stringToTerraform(this._rootCaCertificate),
      tls_client_certificate: cdktf.stringToTerraform(this._tlsClientCertificate),
      tls_client_private_key: cdktf.stringToTerraform(this._tlsClientPrivateKey),
      tls_insecure_skip_verify: cdktf.booleanToTerraform(this._tlsInsecureSkipVerify),
      url: cdktf.stringToTerraform(this._url),
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
      additional_headers: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._additionalHeaders),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      admin_url: {
        value: cdktf.stringToHclTerraform(this._adminUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_path: {
        value: cdktf.stringToHclTerraform(this._basePath),
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
      client_timeout: {
        value: cdktf.numberToHclTerraform(this._clientTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      initial_login: {
        value: cdktf.booleanToHclTerraform(this._initialLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jwt_signing_alg: {
        value: cdktf.stringToHclTerraform(this._jwtSigningAlg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwt_signing_key: {
        value: cdktf.stringToHclTerraform(this._jwtSigningKey),
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
      realm: {
        value: cdktf.stringToHclTerraform(this._realm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      red_hat_sso: {
        value: cdktf.booleanToHclTerraform(this._redHatSso),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      root_ca_certificate: {
        value: cdktf.stringToHclTerraform(this._rootCaCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_client_certificate: {
        value: cdktf.stringToHclTerraform(this._tlsClientCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_client_private_key: {
        value: cdktf.stringToHclTerraform(this._tlsClientPrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tls_insecure_skip_verify: {
        value: cdktf.booleanToHclTerraform(this._tlsInsecureSkipVerify),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
