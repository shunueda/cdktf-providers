// https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_vpn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Vns3IdentityVpnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authorization Endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_vpn#authorization_endpoint Vns3IdentityVpn#authorization_endpoint}
  */
  readonly authorizationEndpoint?: string;
  /**
  * Enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_vpn#enabled Vns3IdentityVpn#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_vpn#host Vns3IdentityVpn#host}
  */
  readonly host?: string;
  /**
  * Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_vpn#identifier Vns3IdentityVpn#identifier}
  */
  readonly identifier?: string;
  /**
  * Identity provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_vpn#identity_provider Vns3IdentityVpn#identity_provider}
  */
  readonly identityProvider?: string;
  /**
  * Issuer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_vpn#issuer Vns3IdentityVpn#issuer}
  */
  readonly issuer?: string;
  /**
  * Jwks Uri
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_vpn#jwks_uri Vns3IdentityVpn#jwks_uri}
  */
  readonly jwksUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_vpn#last_updated Vns3IdentityVpn#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Provider Url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_vpn#provider_url Vns3IdentityVpn#provider_url}
  */
  readonly providerUrl?: string;
  /**
  * Redirect Hostname
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_vpn#redirect_hostname Vns3IdentityVpn#redirect_hostname}
  */
  readonly redirectHostname?: string;
  /**
  * Redirect Uri
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_vpn#redirect_uri Vns3IdentityVpn#redirect_uri}
  */
  readonly redirectUri?: string;
  /**
  * Secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_vpn#secret Vns3IdentityVpn#secret}
  */
  readonly secret?: string;
  /**
  * Token Endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_vpn#token_endpoint Vns3IdentityVpn#token_endpoint}
  */
  readonly tokenEndpoint?: string;
  /**
  * Userinfo Endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_vpn#userinfo_endpoint Vns3IdentityVpn#userinfo_endpoint}
  */
  readonly userinfoEndpoint?: string;
  /**
  * vns3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_vpn#vns3 Vns3IdentityVpn#vns3}
  */
  readonly vns3?: Vns3IdentityVpnVns3;
}
export interface Vns3IdentityVpnVns3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_vpn#api_token Vns3IdentityVpn#api_token}
  */
  readonly apiToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_vpn#host Vns3IdentityVpn#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_vpn#password Vns3IdentityVpn#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_vpn#timeout Vns3IdentityVpn#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_vpn#username Vns3IdentityVpn#username}
  */
  readonly username?: string;
}

export function vns3IdentityVpnVns3ToTerraform(struct?: Vns3IdentityVpnVns3OutputReference | Vns3IdentityVpnVns3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_token: cdktf.stringToTerraform(struct!.apiToken),
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function vns3IdentityVpnVns3ToHclTerraform(struct?: Vns3IdentityVpnVns3OutputReference | Vns3IdentityVpnVns3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_token: {
      value: cdktf.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Vns3IdentityVpnVns3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Vns3IdentityVpnVns3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Vns3IdentityVpnVns3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiToken = undefined;
      this._host = undefined;
      this._password = undefined;
      this._timeout = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiToken = value.apiToken;
      this._host = value.host;
      this._password = value.password;
      this._timeout = value.timeout;
      this._username = value.username;
    }
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // password - computed: false, optional: true, required: false
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

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // username - computed: false, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_vpn cohesivenet_vns3_identity_vpn}
*/
export class Vns3IdentityVpn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cohesivenet_vns3_identity_vpn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vns3IdentityVpn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vns3IdentityVpn to import
  * @param importFromId The id of the existing Vns3IdentityVpn that should be imported. Refer to the {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_vpn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vns3IdentityVpn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cohesivenet_vns3_identity_vpn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_identity_vpn cohesivenet_vns3_identity_vpn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Vns3IdentityVpnConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Vns3IdentityVpnConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cohesivenet_vns3_identity_vpn',
      terraformGeneratorMetadata: {
        providerName: 'cohesivenet',
        providerVersion: '1.0.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authorizationEndpoint = config.authorizationEndpoint;
    this._enabled = config.enabled;
    this._host = config.host;
    this._identifier = config.identifier;
    this._identityProvider = config.identityProvider;
    this._issuer = config.issuer;
    this._jwksUri = config.jwksUri;
    this._lastUpdated = config.lastUpdated;
    this._providerUrl = config.providerUrl;
    this._redirectHostname = config.redirectHostname;
    this._redirectUri = config.redirectUri;
    this._secret = config.secret;
    this._tokenEndpoint = config.tokenEndpoint;
    this._userinfoEndpoint = config.userinfoEndpoint;
    this._vns3.internalValue = config.vns3;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // authorization_endpoint - computed: false, optional: true, required: false
  private _authorizationEndpoint?: string; 
  public get authorizationEndpoint() {
    return this.getStringAttribute('authorization_endpoint');
  }
  public set authorizationEndpoint(value: string) {
    this._authorizationEndpoint = value;
  }
  public resetAuthorizationEndpoint() {
    this._authorizationEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationEndpointInput() {
    return this._authorizationEndpoint;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }

  // identity_provider - computed: false, optional: true, required: false
  private _identityProvider?: string; 
  public get identityProvider() {
    return this.getStringAttribute('identity_provider');
  }
  public set identityProvider(value: string) {
    this._identityProvider = value;
  }
  public resetIdentityProvider() {
    this._identityProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProviderInput() {
    return this._identityProvider;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // jwks_uri - computed: false, optional: true, required: false
  private _jwksUri?: string; 
  public get jwksUri() {
    return this.getStringAttribute('jwks_uri');
  }
  public set jwksUri(value: string) {
    this._jwksUri = value;
  }
  public resetJwksUri() {
    this._jwksUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUriInput() {
    return this._jwksUri;
  }

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // provider_url - computed: false, optional: true, required: false
  private _providerUrl?: string; 
  public get providerUrl() {
    return this.getStringAttribute('provider_url');
  }
  public set providerUrl(value: string) {
    this._providerUrl = value;
  }
  public resetProviderUrl() {
    this._providerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerUrlInput() {
    return this._providerUrl;
  }

  // redirect_hostname - computed: false, optional: true, required: false
  private _redirectHostname?: string; 
  public get redirectHostname() {
    return this.getStringAttribute('redirect_hostname');
  }
  public set redirectHostname(value: string) {
    this._redirectHostname = value;
  }
  public resetRedirectHostname() {
    this._redirectHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectHostnameInput() {
    return this._redirectHostname;
  }

  // redirect_uri - computed: false, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }

  // secret - computed: false, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // token_endpoint - computed: false, optional: true, required: false
  private _tokenEndpoint?: string; 
  public get tokenEndpoint() {
    return this.getStringAttribute('token_endpoint');
  }
  public set tokenEndpoint(value: string) {
    this._tokenEndpoint = value;
  }
  public resetTokenEndpoint() {
    this._tokenEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointInput() {
    return this._tokenEndpoint;
  }

  // userinfo_endpoint - computed: false, optional: true, required: false
  private _userinfoEndpoint?: string; 
  public get userinfoEndpoint() {
    return this.getStringAttribute('userinfo_endpoint');
  }
  public set userinfoEndpoint(value: string) {
    this._userinfoEndpoint = value;
  }
  public resetUserinfoEndpoint() {
    this._userinfoEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userinfoEndpointInput() {
    return this._userinfoEndpoint;
  }

  // vns3 - computed: false, optional: true, required: false
  private _vns3 = new Vns3IdentityVpnVns3OutputReference(this, "vns3");
  public get vns3() {
    return this._vns3;
  }
  public putVns3(value: Vns3IdentityVpnVns3) {
    this._vns3.internalValue = value;
  }
  public resetVns3() {
    this._vns3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vns3Input() {
    return this._vns3.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      authorization_endpoint: cdktf.stringToTerraform(this._authorizationEndpoint),
      enabled: cdktf.booleanToTerraform(this._enabled),
      host: cdktf.stringToTerraform(this._host),
      identifier: cdktf.stringToTerraform(this._identifier),
      identity_provider: cdktf.stringToTerraform(this._identityProvider),
      issuer: cdktf.stringToTerraform(this._issuer),
      jwks_uri: cdktf.stringToTerraform(this._jwksUri),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      provider_url: cdktf.stringToTerraform(this._providerUrl),
      redirect_hostname: cdktf.stringToTerraform(this._redirectHostname),
      redirect_uri: cdktf.stringToTerraform(this._redirectUri),
      secret: cdktf.stringToTerraform(this._secret),
      token_endpoint: cdktf.stringToTerraform(this._tokenEndpoint),
      userinfo_endpoint: cdktf.stringToTerraform(this._userinfoEndpoint),
      vns3: vns3IdentityVpnVns3ToTerraform(this._vns3.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      authorization_endpoint: {
        value: cdktf.stringToHclTerraform(this._authorizationEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identifier: {
        value: cdktf.stringToHclTerraform(this._identifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      identity_provider: {
        value: cdktf.stringToHclTerraform(this._identityProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwks_uri: {
        value: cdktf.stringToHclTerraform(this._jwksUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_url: {
        value: cdktf.stringToHclTerraform(this._providerUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_hostname: {
        value: cdktf.stringToHclTerraform(this._redirectHostname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_uri: {
        value: cdktf.stringToHclTerraform(this._redirectUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret: {
        value: cdktf.stringToHclTerraform(this._secret),
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
      userinfo_endpoint: {
        value: cdktf.stringToHclTerraform(this._userinfoEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vns3: {
        value: vns3IdentityVpnVns3ToHclTerraform(this._vns3.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Vns3IdentityVpnVns3List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
