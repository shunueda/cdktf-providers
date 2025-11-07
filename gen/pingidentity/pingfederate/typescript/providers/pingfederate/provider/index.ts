// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PingfederateProviderConfig {
  /**
  * Access token for PingFederate Admin API. Cannot be used in conjunction with username and password, or oauth. Default value can be set with the `PINGFEDERATE_PROVIDER_ACCESS_TOKEN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs#access_token PingfederateProvider#access_token}
  */
  readonly accessToken?: string;
  /**
  * Path for PingFederate Admin API. Default value can be set with the `PINGFEDERATE_PROVIDER_ADMIN_API_PATH` environment variable. If no value is supplied, the value used will be `/pf-admin-api/v1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs#admin_api_path PingfederateProvider#admin_api_path}
  */
  readonly adminApiPath?: string;
  /**
  * Paths to files containing PEM-encoded certificates to be trusted as root CAs when connecting to the PingFederate server over HTTPS. If not set, the host's root CA set will be used. Default value can be set with the `PINGFEDERATE_PROVIDER_CA_CERTIFICATE_PEM_FILES` environment variable, using commas to delimit multiple PEM files if necessary.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs#ca_certificate_pem_files PingfederateProvider#ca_certificate_pem_files}
  */
  readonly caCertificatePemFiles?: string[];
  /**
  * OAuth client ID for requesting access token. Default value can be set with the `PINGFEDERATE_PROVIDER_OAUTH_CLIENT_ID` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs#client_id PingfederateProvider#client_id}
  */
  readonly clientId?: string;
  /**
  * OAuth client secret for requesting access token. Default value can be set with the `PINGFEDERATE_PROVIDER_OAUTH_CLIENT_SECRET` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs#client_secret PingfederateProvider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * URI for PingFederate HTTPS port. Default value can be set with the `PINGFEDERATE_PROVIDER_HTTPS_HOST` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs#https_host PingfederateProvider#https_host}
  */
  readonly httpsHost?: string;
  /**
  * Set to true to trust any certificate when connecting to the PingFederate server. This is insecure and should not be enabled outside of testing. Default value can be set with the `PINGFEDERATE_PROVIDER_INSECURE_TRUST_ALL_TLS` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs#insecure_trust_all_tls PingfederateProvider#insecure_trust_all_tls}
  */
  readonly insecureTrustAllTls?: boolean | cdktf.IResolvable;
  /**
  * Password for PingFederate Admin user. Must only be set with username. Cannot be used in conjunction with access_token, or oauth.  Default value can be set with the `PINGFEDERATE_PROVIDER_PASSWORD` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs#password PingfederateProvider#password}
  */
  readonly password?: string;
  /**
  * Version of the PingFederate server being configured. Default value can be set with the `PINGFEDERATE_PROVIDER_PRODUCT_VERSION` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs#product_version PingfederateProvider#product_version}
  */
  readonly productVersion?: string;
  /**
  * OAuth scopes for access token. Default value can be set with the `PINGFEDERATE_PROVIDER_OAUTH_SCOPES` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs#scopes PingfederateProvider#scopes}
  */
  readonly scopes?: string[];
  /**
  * OAuth token URL for requesting access token. Default value can be set with the `PINGFEDERATE_PROVIDER_OAUTH_TOKEN_URL` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs#token_url PingfederateProvider#token_url}
  */
  readonly tokenUrl?: string;
  /**
  * Username for PingFederate Admin user. Must only be set with password. Cannot be used in conjunction with access_token, or oauth. Default value can be set with the `PINGFEDERATE_PROVIDER_USERNAME` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs#username PingfederateProvider#username}
  */
  readonly username?: string;
  /**
  * Header value in request for PingFederate. When set to `true`, connectivity checks for resources such as `pingfederate_data_store` will be skipped. Default value can be set with the `PINGFEDERATE_PROVIDER_X_BYPASS_EXTERNAL_VALIDATION_HEADER` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs#x_bypass_external_validation_header PingfederateProvider#x_bypass_external_validation_header}
  */
  readonly xBypassExternalValidationHeader?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs#alias PingfederateProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs pingfederate}
*/
export class PingfederateProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PingfederateProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PingfederateProvider to import
  * @param importFromId The id of the existing PingfederateProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PingfederateProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs pingfederate} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PingfederateProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PingfederateProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2'
      },
      terraformProviderSource: 'pingidentity/pingfederate'
    });
    this._accessToken = config.accessToken;
    this._adminApiPath = config.adminApiPath;
    this._caCertificatePemFiles = config.caCertificatePemFiles;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._httpsHost = config.httpsHost;
    this._insecureTrustAllTls = config.insecureTrustAllTls;
    this._password = config.password;
    this._productVersion = config.productVersion;
    this._scopes = config.scopes;
    this._tokenUrl = config.tokenUrl;
    this._username = config.username;
    this._xBypassExternalValidationHeader = config.xBypassExternalValidationHeader;
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

  // admin_api_path - computed: false, optional: true, required: false
  private _adminApiPath?: string; 
  public get adminApiPath() {
    return this._adminApiPath;
  }
  public set adminApiPath(value: string | undefined) {
    this._adminApiPath = value;
  }
  public resetAdminApiPath() {
    this._adminApiPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminApiPathInput() {
    return this._adminApiPath;
  }

  // ca_certificate_pem_files - computed: false, optional: true, required: false
  private _caCertificatePemFiles?: string[]; 
  public get caCertificatePemFiles() {
    return this._caCertificatePemFiles;
  }
  public set caCertificatePemFiles(value: string[] | undefined) {
    this._caCertificatePemFiles = value;
  }
  public resetCaCertificatePemFiles() {
    this._caCertificatePemFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertificatePemFilesInput() {
    return this._caCertificatePemFiles;
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

  // https_host - computed: false, optional: true, required: false
  private _httpsHost?: string; 
  public get httpsHost() {
    return this._httpsHost;
  }
  public set httpsHost(value: string | undefined) {
    this._httpsHost = value;
  }
  public resetHttpsHost() {
    this._httpsHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsHostInput() {
    return this._httpsHost;
  }

  // insecure_trust_all_tls - computed: false, optional: true, required: false
  private _insecureTrustAllTls?: boolean | cdktf.IResolvable; 
  public get insecureTrustAllTls() {
    return this._insecureTrustAllTls;
  }
  public set insecureTrustAllTls(value: boolean | cdktf.IResolvable | undefined) {
    this._insecureTrustAllTls = value;
  }
  public resetInsecureTrustAllTls() {
    this._insecureTrustAllTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureTrustAllTlsInput() {
    return this._insecureTrustAllTls;
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

  // product_version - computed: false, optional: true, required: false
  private _productVersion?: string; 
  public get productVersion() {
    return this._productVersion;
  }
  public set productVersion(value: string | undefined) {
    this._productVersion = value;
  }
  public resetProductVersion() {
    this._productVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productVersionInput() {
    return this._productVersion;
  }

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return this._scopes;
  }
  public set scopes(value: string[] | undefined) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
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

  // x_bypass_external_validation_header - computed: false, optional: true, required: false
  private _xBypassExternalValidationHeader?: boolean | cdktf.IResolvable; 
  public get xBypassExternalValidationHeader() {
    return this._xBypassExternalValidationHeader;
  }
  public set xBypassExternalValidationHeader(value: boolean | cdktf.IResolvable | undefined) {
    this._xBypassExternalValidationHeader = value;
  }
  public resetXBypassExternalValidationHeader() {
    this._xBypassExternalValidationHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xBypassExternalValidationHeaderInput() {
    return this._xBypassExternalValidationHeader;
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
      admin_api_path: cdktf.stringToTerraform(this._adminApiPath),
      ca_certificate_pem_files: cdktf.listMapper(cdktf.stringToTerraform, false)(this._caCertificatePemFiles),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      https_host: cdktf.stringToTerraform(this._httpsHost),
      insecure_trust_all_tls: cdktf.booleanToTerraform(this._insecureTrustAllTls),
      password: cdktf.stringToTerraform(this._password),
      product_version: cdktf.stringToTerraform(this._productVersion),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
      token_url: cdktf.stringToTerraform(this._tokenUrl),
      username: cdktf.stringToTerraform(this._username),
      x_bypass_external_validation_header: cdktf.booleanToTerraform(this._xBypassExternalValidationHeader),
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
      admin_api_path: {
        value: cdktf.stringToHclTerraform(this._adminApiPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_certificate_pem_files: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._caCertificatePemFiles),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      https_host: {
        value: cdktf.stringToHclTerraform(this._httpsHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure_trust_all_tls: {
        value: cdktf.booleanToHclTerraform(this._insecureTrustAllTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_version: {
        value: cdktf.stringToHclTerraform(this._productVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
      x_bypass_external_validation_header: {
        value: cdktf.booleanToHclTerraform(this._xBypassExternalValidationHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
