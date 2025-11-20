// https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Auth0ProviderConfig {
  /**
  * Your Auth0 [management api access token](https://auth0.com/docs/security/tokens/access-tokens/management-api-access-tokens). It can also be sourced from the `AUTH0_API_TOKEN` environment variable. It can be used instead of `client_id` + `client_secret`. If both are specified, `api_token` will be used over `client_id` + `client_secret` fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs#api_token Auth0Provider#api_token}
  */
  readonly apiToken?: string;
  /**
  * Your Auth0 audience when using a custom domain. It can also be sourced from the `AUTH0_AUDIENCE` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs#audience Auth0Provider#audience}
  */
  readonly audience?: string;
  /**
  * While toggled on, the API token gets fetched from the keyring for the given domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs#cli_login Auth0Provider#cli_login}
  */
  readonly cliLogin?: boolean | cdktf.IResolvable;
  /**
  * The private key used to sign the client assertion JWT. It can also be sourced from the `AUTH0_CLIENT_ASSERTION_PRIVATE_KEY` environment variable. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs#client_assertion_private_key Auth0Provider#client_assertion_private_key}
  */
  readonly clientAssertionPrivateKey?: string;
  /**
  * The algorithm used to sign the client assertion JWT. It can also be sourced from the `AUTH0_CLIENT_ASSERTION_SIGNING_ALG` environment variable. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs#client_assertion_signing_alg Auth0Provider#client_assertion_signing_alg}
  */
  readonly clientAssertionSigningAlg?: string;
  /**
  * Your Auth0 client ID. It can also be sourced from the `AUTH0_CLIENT_ID` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs#client_id Auth0Provider#client_id}
  */
  readonly clientId?: string;
  /**
  * Your Auth0 client secret. It can also be sourced from the `AUTH0_CLIENT_SECRET` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs#client_secret Auth0Provider#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * When specified, this header is added to requests targeting a set of pre-defined whitelisted URLs Global setting overrides all resource specific `custom_domain_header` value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs#custom_domain_header Auth0Provider#custom_domain_header}
  */
  readonly customDomainHeader?: string;
  /**
  * Enables HTTP request and response logging when TF_LOG=DEBUG is set. It can also be sourced from the `AUTH0_DEBUG` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs#debug Auth0Provider#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Your Auth0 domain name. It can also be sourced from the `AUTH0_DOMAIN` environment variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs#domain Auth0Provider#domain}
  */
  readonly domain?: string;
  /**
  * Indicates whether credentials will be dynamically passed to the provider from other terraform resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs#dynamic_credentials Auth0Provider#dynamic_credentials}
  */
  readonly dynamicCredentials?: boolean | cdktf.IResolvable;
  /**
  * Alias name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs#alias Auth0Provider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs auth0}
*/
export class Auth0Provider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Auth0Provider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Auth0Provider to import
  * @param importFromId The id of the existing Auth0Provider that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Auth0Provider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs auth0} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Auth0ProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Auth0ProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'auth0',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.36.0',
        providerVersionConstraint: '1.36.0'
      },
      terraformProviderSource: 'auth0/auth0'
    });
    this._apiToken = config.apiToken;
    this._audience = config.audience;
    this._cliLogin = config.cliLogin;
    this._clientAssertionPrivateKey = config.clientAssertionPrivateKey;
    this._clientAssertionSigningAlg = config.clientAssertionSigningAlg;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._customDomainHeader = config.customDomainHeader;
    this._debug = config.debug;
    this._domain = config.domain;
    this._dynamicCredentials = config.dynamicCredentials;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this._apiToken;
  }
  public set apiToken(value: string | undefined) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
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

  // cli_login - computed: false, optional: true, required: false
  private _cliLogin?: boolean | cdktf.IResolvable; 
  public get cliLogin() {
    return this._cliLogin;
  }
  public set cliLogin(value: boolean | cdktf.IResolvable | undefined) {
    this._cliLogin = value;
  }
  public resetCliLogin() {
    this._cliLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliLoginInput() {
    return this._cliLogin;
  }

  // client_assertion_private_key - computed: false, optional: true, required: false
  private _clientAssertionPrivateKey?: string; 
  public get clientAssertionPrivateKey() {
    return this._clientAssertionPrivateKey;
  }
  public set clientAssertionPrivateKey(value: string | undefined) {
    this._clientAssertionPrivateKey = value;
  }
  public resetClientAssertionPrivateKey() {
    this._clientAssertionPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAssertionPrivateKeyInput() {
    return this._clientAssertionPrivateKey;
  }

  // client_assertion_signing_alg - computed: false, optional: true, required: false
  private _clientAssertionSigningAlg?: string; 
  public get clientAssertionSigningAlg() {
    return this._clientAssertionSigningAlg;
  }
  public set clientAssertionSigningAlg(value: string | undefined) {
    this._clientAssertionSigningAlg = value;
  }
  public resetClientAssertionSigningAlg() {
    this._clientAssertionSigningAlg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAssertionSigningAlgInput() {
    return this._clientAssertionSigningAlg;
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

  // custom_domain_header - computed: false, optional: true, required: false
  private _customDomainHeader?: string; 
  public get customDomainHeader() {
    return this._customDomainHeader;
  }
  public set customDomainHeader(value: string | undefined) {
    this._customDomainHeader = value;
  }
  public resetCustomDomainHeader() {
    this._customDomainHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainHeaderInput() {
    return this._customDomainHeader;
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

  // dynamic_credentials - computed: false, optional: true, required: false
  private _dynamicCredentials?: boolean | cdktf.IResolvable; 
  public get dynamicCredentials() {
    return this._dynamicCredentials;
  }
  public set dynamicCredentials(value: boolean | cdktf.IResolvable | undefined) {
    this._dynamicCredentials = value;
  }
  public resetDynamicCredentials() {
    this._dynamicCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicCredentialsInput() {
    return this._dynamicCredentials;
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
      api_token: cdktf.stringToTerraform(this._apiToken),
      audience: cdktf.stringToTerraform(this._audience),
      cli_login: cdktf.booleanToTerraform(this._cliLogin),
      client_assertion_private_key: cdktf.stringToTerraform(this._clientAssertionPrivateKey),
      client_assertion_signing_alg: cdktf.stringToTerraform(this._clientAssertionSigningAlg),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      custom_domain_header: cdktf.stringToTerraform(this._customDomainHeader),
      debug: cdktf.booleanToTerraform(this._debug),
      domain: cdktf.stringToTerraform(this._domain),
      dynamic_credentials: cdktf.booleanToTerraform(this._dynamicCredentials),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_token: {
        value: cdktf.stringToHclTerraform(this._apiToken),
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
      cli_login: {
        value: cdktf.booleanToHclTerraform(this._cliLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_assertion_private_key: {
        value: cdktf.stringToHclTerraform(this._clientAssertionPrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_assertion_signing_alg: {
        value: cdktf.stringToHclTerraform(this._clientAssertionSigningAlg),
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
      custom_domain_header: {
        value: cdktf.stringToHclTerraform(this._customDomainHeader),
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
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_credentials: {
        value: cdktf.booleanToHclTerraform(this._dynamicCredentials),
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
