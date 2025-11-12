// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProviderProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Format: hours=1;minutes=2;seconds=3. Defaults to `minutes=10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_proxy#access_token_validity ProviderProxy#access_token_validity}
  */
  readonly accessTokenValidity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_proxy#authentication_flow ProviderProxy#authentication_flow}
  */
  readonly authenticationFlow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_proxy#authorization_flow ProviderProxy#authorization_flow}
  */
  readonly authorizationFlow: string;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_proxy#basic_auth_enabled ProviderProxy#basic_auth_enabled}
  */
  readonly basicAuthEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_proxy#basic_auth_password_attribute ProviderProxy#basic_auth_password_attribute}
  */
  readonly basicAuthPasswordAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_proxy#basic_auth_username_attribute ProviderProxy#basic_auth_username_attribute}
  */
  readonly basicAuthUsernameAttribute?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_proxy#cookie_domain ProviderProxy#cookie_domain}
  */
  readonly cookieDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_proxy#external_host ProviderProxy#external_host}
  */
  readonly externalHost: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_proxy#id ProviderProxy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_proxy#intercept_header_auth ProviderProxy#intercept_header_auth}
  */
  readonly interceptHeaderAuth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_proxy#internal_host ProviderProxy#internal_host}
  */
  readonly internalHost?: string;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_proxy#internal_host_ssl_validation ProviderProxy#internal_host_ssl_validation}
  */
  readonly internalHostSslValidation?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_proxy#invalidation_flow ProviderProxy#invalidation_flow}
  */
  readonly invalidationFlow: string;
  /**
  * Deprecated. Use `jwt_federation_sources` instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_proxy#jwks_sources ProviderProxy#jwks_sources}
  */
  readonly jwksSources?: string[];
  /**
  * JWTs issued by any of the configured providers can be used to authenticate on behalf of this provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_proxy#jwt_federation_providers ProviderProxy#jwt_federation_providers}
  */
  readonly jwtFederationProviders?: number[];
  /**
  * JWTs issued by keys configured in any of the selected sources can be used to authenticate on behalf of this provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_proxy#jwt_federation_sources ProviderProxy#jwt_federation_sources}
  */
  readonly jwtFederationSources?: string[];
  /**
  * Allowed values:
  *   - `proxy`
  *   - `forward_single`
  *   - `forward_domain`
  *  Defaults to `proxy`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_proxy#mode ProviderProxy#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_proxy#name ProviderProxy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_proxy#property_mappings ProviderProxy#property_mappings}
  */
  readonly propertyMappings?: string[];
  /**
  * Format: hours=1;minutes=2;seconds=3. Defaults to `days=30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_proxy#refresh_token_validity ProviderProxy#refresh_token_validity}
  */
  readonly refreshTokenValidity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_proxy#skip_path_regex ProviderProxy#skip_path_regex}
  */
  readonly skipPathRegex?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_proxy authentik_provider_proxy}
*/
export class ProviderProxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_provider_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProviderProxy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProviderProxy to import
  * @param importFromId The id of the existing ProviderProxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProviderProxy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_provider_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_proxy authentik_provider_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProviderProxyConfig
  */
  public constructor(scope: Construct, id: string, config: ProviderProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_provider_proxy',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0',
        providerVersionConstraint: '2025.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessTokenValidity = config.accessTokenValidity;
    this._authenticationFlow = config.authenticationFlow;
    this._authorizationFlow = config.authorizationFlow;
    this._basicAuthEnabled = config.basicAuthEnabled;
    this._basicAuthPasswordAttribute = config.basicAuthPasswordAttribute;
    this._basicAuthUsernameAttribute = config.basicAuthUsernameAttribute;
    this._cookieDomain = config.cookieDomain;
    this._externalHost = config.externalHost;
    this._id = config.id;
    this._interceptHeaderAuth = config.interceptHeaderAuth;
    this._internalHost = config.internalHost;
    this._internalHostSslValidation = config.internalHostSslValidation;
    this._invalidationFlow = config.invalidationFlow;
    this._jwksSources = config.jwksSources;
    this._jwtFederationProviders = config.jwtFederationProviders;
    this._jwtFederationSources = config.jwtFederationSources;
    this._mode = config.mode;
    this._name = config.name;
    this._propertyMappings = config.propertyMappings;
    this._refreshTokenValidity = config.refreshTokenValidity;
    this._skipPathRegex = config.skipPathRegex;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_validity - computed: false, optional: true, required: false
  private _accessTokenValidity?: string; 
  public get accessTokenValidity() {
    return this.getStringAttribute('access_token_validity');
  }
  public set accessTokenValidity(value: string) {
    this._accessTokenValidity = value;
  }
  public resetAccessTokenValidity() {
    this._accessTokenValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenValidityInput() {
    return this._accessTokenValidity;
  }

  // authentication_flow - computed: false, optional: true, required: false
  private _authenticationFlow?: string; 
  public get authenticationFlow() {
    return this.getStringAttribute('authentication_flow');
  }
  public set authenticationFlow(value: string) {
    this._authenticationFlow = value;
  }
  public resetAuthenticationFlow() {
    this._authenticationFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationFlowInput() {
    return this._authenticationFlow;
  }

  // authorization_flow - computed: false, optional: false, required: true
  private _authorizationFlow?: string; 
  public get authorizationFlow() {
    return this.getStringAttribute('authorization_flow');
  }
  public set authorizationFlow(value: string) {
    this._authorizationFlow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationFlowInput() {
    return this._authorizationFlow;
  }

  // basic_auth_enabled - computed: false, optional: true, required: false
  private _basicAuthEnabled?: boolean | cdktf.IResolvable; 
  public get basicAuthEnabled() {
    return this.getBooleanAttribute('basic_auth_enabled');
  }
  public set basicAuthEnabled(value: boolean | cdktf.IResolvable) {
    this._basicAuthEnabled = value;
  }
  public resetBasicAuthEnabled() {
    this._basicAuthEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthEnabledInput() {
    return this._basicAuthEnabled;
  }

  // basic_auth_password_attribute - computed: false, optional: true, required: false
  private _basicAuthPasswordAttribute?: string; 
  public get basicAuthPasswordAttribute() {
    return this.getStringAttribute('basic_auth_password_attribute');
  }
  public set basicAuthPasswordAttribute(value: string) {
    this._basicAuthPasswordAttribute = value;
  }
  public resetBasicAuthPasswordAttribute() {
    this._basicAuthPasswordAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthPasswordAttributeInput() {
    return this._basicAuthPasswordAttribute;
  }

  // basic_auth_username_attribute - computed: false, optional: true, required: false
  private _basicAuthUsernameAttribute?: string; 
  public get basicAuthUsernameAttribute() {
    return this.getStringAttribute('basic_auth_username_attribute');
  }
  public set basicAuthUsernameAttribute(value: string) {
    this._basicAuthUsernameAttribute = value;
  }
  public resetBasicAuthUsernameAttribute() {
    this._basicAuthUsernameAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthUsernameAttributeInput() {
    return this._basicAuthUsernameAttribute;
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // cookie_domain - computed: false, optional: true, required: false
  private _cookieDomain?: string; 
  public get cookieDomain() {
    return this.getStringAttribute('cookie_domain');
  }
  public set cookieDomain(value: string) {
    this._cookieDomain = value;
  }
  public resetCookieDomain() {
    this._cookieDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cookieDomainInput() {
    return this._cookieDomain;
  }

  // external_host - computed: false, optional: false, required: true
  private _externalHost?: string; 
  public get externalHost() {
    return this.getStringAttribute('external_host');
  }
  public set externalHost(value: string) {
    this._externalHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalHostInput() {
    return this._externalHost;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // intercept_header_auth - computed: false, optional: true, required: false
  private _interceptHeaderAuth?: boolean | cdktf.IResolvable; 
  public get interceptHeaderAuth() {
    return this.getBooleanAttribute('intercept_header_auth');
  }
  public set interceptHeaderAuth(value: boolean | cdktf.IResolvable) {
    this._interceptHeaderAuth = value;
  }
  public resetInterceptHeaderAuth() {
    this._interceptHeaderAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interceptHeaderAuthInput() {
    return this._interceptHeaderAuth;
  }

  // internal_host - computed: false, optional: true, required: false
  private _internalHost?: string; 
  public get internalHost() {
    return this.getStringAttribute('internal_host');
  }
  public set internalHost(value: string) {
    this._internalHost = value;
  }
  public resetInternalHost() {
    this._internalHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalHostInput() {
    return this._internalHost;
  }

  // internal_host_ssl_validation - computed: false, optional: true, required: false
  private _internalHostSslValidation?: boolean | cdktf.IResolvable; 
  public get internalHostSslValidation() {
    return this.getBooleanAttribute('internal_host_ssl_validation');
  }
  public set internalHostSslValidation(value: boolean | cdktf.IResolvable) {
    this._internalHostSslValidation = value;
  }
  public resetInternalHostSslValidation() {
    this._internalHostSslValidation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalHostSslValidationInput() {
    return this._internalHostSslValidation;
  }

  // invalidation_flow - computed: false, optional: false, required: true
  private _invalidationFlow?: string; 
  public get invalidationFlow() {
    return this.getStringAttribute('invalidation_flow');
  }
  public set invalidationFlow(value: string) {
    this._invalidationFlow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get invalidationFlowInput() {
    return this._invalidationFlow;
  }

  // jwks_sources - computed: false, optional: true, required: false
  private _jwksSources?: string[]; 
  public get jwksSources() {
    return this.getListAttribute('jwks_sources');
  }
  public set jwksSources(value: string[]) {
    this._jwksSources = value;
  }
  public resetJwksSources() {
    this._jwksSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksSourcesInput() {
    return this._jwksSources;
  }

  // jwt_federation_providers - computed: false, optional: true, required: false
  private _jwtFederationProviders?: number[]; 
  public get jwtFederationProviders() {
    return this.getNumberListAttribute('jwt_federation_providers');
  }
  public set jwtFederationProviders(value: number[]) {
    this._jwtFederationProviders = value;
  }
  public resetJwtFederationProviders() {
    this._jwtFederationProviders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtFederationProvidersInput() {
    return this._jwtFederationProviders;
  }

  // jwt_federation_sources - computed: false, optional: true, required: false
  private _jwtFederationSources?: string[]; 
  public get jwtFederationSources() {
    return this.getListAttribute('jwt_federation_sources');
  }
  public set jwtFederationSources(value: string[]) {
    this._jwtFederationSources = value;
  }
  public resetJwtFederationSources() {
    this._jwtFederationSources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtFederationSourcesInput() {
    return this._jwtFederationSources;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // property_mappings - computed: false, optional: true, required: false
  private _propertyMappings?: string[]; 
  public get propertyMappings() {
    return this.getListAttribute('property_mappings');
  }
  public set propertyMappings(value: string[]) {
    this._propertyMappings = value;
  }
  public resetPropertyMappings() {
    this._propertyMappings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyMappingsInput() {
    return this._propertyMappings;
  }

  // refresh_token_validity - computed: false, optional: true, required: false
  private _refreshTokenValidity?: string; 
  public get refreshTokenValidity() {
    return this.getStringAttribute('refresh_token_validity');
  }
  public set refreshTokenValidity(value: string) {
    this._refreshTokenValidity = value;
  }
  public resetRefreshTokenValidity() {
    this._refreshTokenValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenValidityInput() {
    return this._refreshTokenValidity;
  }

  // skip_path_regex - computed: false, optional: true, required: false
  private _skipPathRegex?: string; 
  public get skipPathRegex() {
    return this.getStringAttribute('skip_path_regex');
  }
  public set skipPathRegex(value: string) {
    this._skipPathRegex = value;
  }
  public resetSkipPathRegex() {
    this._skipPathRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipPathRegexInput() {
    return this._skipPathRegex;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_validity: cdktf.stringToTerraform(this._accessTokenValidity),
      authentication_flow: cdktf.stringToTerraform(this._authenticationFlow),
      authorization_flow: cdktf.stringToTerraform(this._authorizationFlow),
      basic_auth_enabled: cdktf.booleanToTerraform(this._basicAuthEnabled),
      basic_auth_password_attribute: cdktf.stringToTerraform(this._basicAuthPasswordAttribute),
      basic_auth_username_attribute: cdktf.stringToTerraform(this._basicAuthUsernameAttribute),
      cookie_domain: cdktf.stringToTerraform(this._cookieDomain),
      external_host: cdktf.stringToTerraform(this._externalHost),
      id: cdktf.stringToTerraform(this._id),
      intercept_header_auth: cdktf.booleanToTerraform(this._interceptHeaderAuth),
      internal_host: cdktf.stringToTerraform(this._internalHost),
      internal_host_ssl_validation: cdktf.booleanToTerraform(this._internalHostSslValidation),
      invalidation_flow: cdktf.stringToTerraform(this._invalidationFlow),
      jwks_sources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._jwksSources),
      jwt_federation_providers: cdktf.listMapper(cdktf.numberToTerraform, false)(this._jwtFederationProviders),
      jwt_federation_sources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._jwtFederationSources),
      mode: cdktf.stringToTerraform(this._mode),
      name: cdktf.stringToTerraform(this._name),
      property_mappings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._propertyMappings),
      refresh_token_validity: cdktf.stringToTerraform(this._refreshTokenValidity),
      skip_path_regex: cdktf.stringToTerraform(this._skipPathRegex),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token_validity: {
        value: cdktf.stringToHclTerraform(this._accessTokenValidity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_flow: {
        value: cdktf.stringToHclTerraform(this._authenticationFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization_flow: {
        value: cdktf.stringToHclTerraform(this._authorizationFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      basic_auth_enabled: {
        value: cdktf.booleanToHclTerraform(this._basicAuthEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      basic_auth_password_attribute: {
        value: cdktf.stringToHclTerraform(this._basicAuthPasswordAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      basic_auth_username_attribute: {
        value: cdktf.stringToHclTerraform(this._basicAuthUsernameAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cookie_domain: {
        value: cdktf.stringToHclTerraform(this._cookieDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_host: {
        value: cdktf.stringToHclTerraform(this._externalHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intercept_header_auth: {
        value: cdktf.booleanToHclTerraform(this._interceptHeaderAuth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      internal_host: {
        value: cdktf.stringToHclTerraform(this._internalHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internal_host_ssl_validation: {
        value: cdktf.booleanToHclTerraform(this._internalHostSslValidation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      invalidation_flow: {
        value: cdktf.stringToHclTerraform(this._invalidationFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwks_sources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._jwksSources),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      jwt_federation_providers: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._jwtFederationProviders),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      jwt_federation_sources: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._jwtFederationSources),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      property_mappings: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._propertyMappings),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      refresh_token_validity: {
        value: cdktf.stringToHclTerraform(this._refreshTokenValidity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_path_regex: {
        value: cdktf.stringToHclTerraform(this._skipPathRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
