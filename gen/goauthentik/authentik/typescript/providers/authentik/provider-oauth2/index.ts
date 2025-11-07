// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_oauth2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProviderOauth2Config extends cdktf.TerraformMetaArguments {
  /**
  * Format: hours=1;minutes=2;seconds=3. Defaults to `minutes=1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_oauth2#access_code_validity ProviderOauth2#access_code_validity}
  */
  readonly accessCodeValidity?: string;
  /**
  * Format: hours=1;minutes=2;seconds=3. Defaults to `minutes=10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_oauth2#access_token_validity ProviderOauth2#access_token_validity}
  */
  readonly accessTokenValidity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_oauth2#allowed_redirect_uris ProviderOauth2#allowed_redirect_uris}
  */
  readonly allowedRedirectUris?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_oauth2#authentication_flow ProviderOauth2#authentication_flow}
  */
  readonly authenticationFlow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_oauth2#authorization_flow ProviderOauth2#authorization_flow}
  */
  readonly authorizationFlow: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_oauth2#client_id ProviderOauth2#client_id}
  */
  readonly clientId: string;
  /**
  * Generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_oauth2#client_secret ProviderOauth2#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Allowed values:
  *   - `confidential`
  *   - `public`
  *  Defaults to `confidential`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_oauth2#client_type ProviderOauth2#client_type}
  */
  readonly clientType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_oauth2#encryption_key ProviderOauth2#encryption_key}
  */
  readonly encryptionKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_oauth2#id ProviderOauth2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_oauth2#include_claims_in_id_token ProviderOauth2#include_claims_in_id_token}
  */
  readonly includeClaimsInIdToken?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_oauth2#invalidation_flow ProviderOauth2#invalidation_flow}
  */
  readonly invalidationFlow: string;
  /**
  * Allowed values:
  *   - `global`
  *   - `per_provider`
  *  Defaults to `per_provider`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_oauth2#issuer_mode ProviderOauth2#issuer_mode}
  */
  readonly issuerMode?: string;
  /**
  * Deprecated. Use `jwt_federation_sources` instead.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_oauth2#jwks_sources ProviderOauth2#jwks_sources}
  */
  readonly jwksSources?: string[];
  /**
  * JWTs issued by any of the configured providers can be used to authenticate on behalf of this provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_oauth2#jwt_federation_providers ProviderOauth2#jwt_federation_providers}
  */
  readonly jwtFederationProviders?: number[];
  /**
  * JWTs issued by keys configured in any of the selected sources can be used to authenticate on behalf of this provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_oauth2#jwt_federation_sources ProviderOauth2#jwt_federation_sources}
  */
  readonly jwtFederationSources?: string[];
  /**
  * Allowed values:
  *   - `backchannel`
  *   - `frontchannel`
  *  Defaults to `backchannel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_oauth2#logout_method ProviderOauth2#logout_method}
  */
  readonly logoutMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_oauth2#logout_uri ProviderOauth2#logout_uri}
  */
  readonly logoutUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_oauth2#name ProviderOauth2#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_oauth2#property_mappings ProviderOauth2#property_mappings}
  */
  readonly propertyMappings?: string[];
  /**
  * Format: hours=1;minutes=2;seconds=3. Defaults to `seconds=0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_oauth2#refresh_token_threshold ProviderOauth2#refresh_token_threshold}
  */
  readonly refreshTokenThreshold?: string;
  /**
  * Format: hours=1;minutes=2;seconds=3. Defaults to `days=30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_oauth2#refresh_token_validity ProviderOauth2#refresh_token_validity}
  */
  readonly refreshTokenValidity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_oauth2#signing_key ProviderOauth2#signing_key}
  */
  readonly signingKey?: string;
  /**
  * Allowed values:
  *   - `hashed_user_id`
  *   - `user_id`
  *   - `user_uuid`
  *   - `user_username`
  *   - `user_email`
  *   - `user_upn`
  *  Defaults to `hashed_user_id`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_oauth2#sub_mode ProviderOauth2#sub_mode}
  */
  readonly subMode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_oauth2 authentik_provider_oauth2}
*/
export class ProviderOauth2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_provider_oauth2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProviderOauth2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProviderOauth2 to import
  * @param importFromId The id of the existing ProviderOauth2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_oauth2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProviderOauth2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_provider_oauth2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/provider_oauth2 authentik_provider_oauth2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProviderOauth2Config
  */
  public constructor(scope: Construct, id: string, config: ProviderOauth2Config) {
    super(scope, id, {
      terraformResourceType: 'authentik_provider_oauth2',
      terraformGeneratorMetadata: {
        providerName: 'authentik',
        providerVersion: '2025.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessCodeValidity = config.accessCodeValidity;
    this._accessTokenValidity = config.accessTokenValidity;
    this._allowedRedirectUris = config.allowedRedirectUris;
    this._authenticationFlow = config.authenticationFlow;
    this._authorizationFlow = config.authorizationFlow;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._clientType = config.clientType;
    this._encryptionKey = config.encryptionKey;
    this._id = config.id;
    this._includeClaimsInIdToken = config.includeClaimsInIdToken;
    this._invalidationFlow = config.invalidationFlow;
    this._issuerMode = config.issuerMode;
    this._jwksSources = config.jwksSources;
    this._jwtFederationProviders = config.jwtFederationProviders;
    this._jwtFederationSources = config.jwtFederationSources;
    this._logoutMethod = config.logoutMethod;
    this._logoutUri = config.logoutUri;
    this._name = config.name;
    this._propertyMappings = config.propertyMappings;
    this._refreshTokenThreshold = config.refreshTokenThreshold;
    this._refreshTokenValidity = config.refreshTokenValidity;
    this._signingKey = config.signingKey;
    this._subMode = config.subMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_code_validity - computed: false, optional: true, required: false
  private _accessCodeValidity?: string; 
  public get accessCodeValidity() {
    return this.getStringAttribute('access_code_validity');
  }
  public set accessCodeValidity(value: string) {
    this._accessCodeValidity = value;
  }
  public resetAccessCodeValidity() {
    this._accessCodeValidity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessCodeValidityInput() {
    return this._accessCodeValidity;
  }

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

  // allowed_redirect_uris - computed: false, optional: true, required: false
  private _allowedRedirectUris?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get allowedRedirectUris() {
    return this.interpolationForAttribute('allowed_redirect_uris');
  }
  public set allowedRedirectUris(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._allowedRedirectUris = value;
  }
  public resetAllowedRedirectUris() {
    this._allowedRedirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedRedirectUrisInput() {
    return this._allowedRedirectUris;
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

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // client_type - computed: false, optional: true, required: false
  private _clientType?: string; 
  public get clientType() {
    return this.getStringAttribute('client_type');
  }
  public set clientType(value: string) {
    this._clientType = value;
  }
  public resetClientType() {
    this._clientType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTypeInput() {
    return this._clientType;
  }

  // encryption_key - computed: false, optional: true, required: false
  private _encryptionKey?: string; 
  public get encryptionKey() {
    return this.getStringAttribute('encryption_key');
  }
  public set encryptionKey(value: string) {
    this._encryptionKey = value;
  }
  public resetEncryptionKey() {
    this._encryptionKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyInput() {
    return this._encryptionKey;
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

  // include_claims_in_id_token - computed: false, optional: true, required: false
  private _includeClaimsInIdToken?: boolean | cdktf.IResolvable; 
  public get includeClaimsInIdToken() {
    return this.getBooleanAttribute('include_claims_in_id_token');
  }
  public set includeClaimsInIdToken(value: boolean | cdktf.IResolvable) {
    this._includeClaimsInIdToken = value;
  }
  public resetIncludeClaimsInIdToken() {
    this._includeClaimsInIdToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeClaimsInIdTokenInput() {
    return this._includeClaimsInIdToken;
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

  // issuer_mode - computed: false, optional: true, required: false
  private _issuerMode?: string; 
  public get issuerMode() {
    return this.getStringAttribute('issuer_mode');
  }
  public set issuerMode(value: string) {
    this._issuerMode = value;
  }
  public resetIssuerMode() {
    this._issuerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerModeInput() {
    return this._issuerMode;
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

  // logout_method - computed: false, optional: true, required: false
  private _logoutMethod?: string; 
  public get logoutMethod() {
    return this.getStringAttribute('logout_method');
  }
  public set logoutMethod(value: string) {
    this._logoutMethod = value;
  }
  public resetLogoutMethod() {
    this._logoutMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutMethodInput() {
    return this._logoutMethod;
  }

  // logout_uri - computed: false, optional: true, required: false
  private _logoutUri?: string; 
  public get logoutUri() {
    return this.getStringAttribute('logout_uri');
  }
  public set logoutUri(value: string) {
    this._logoutUri = value;
  }
  public resetLogoutUri() {
    this._logoutUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutUriInput() {
    return this._logoutUri;
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

  // refresh_token_threshold - computed: false, optional: true, required: false
  private _refreshTokenThreshold?: string; 
  public get refreshTokenThreshold() {
    return this.getStringAttribute('refresh_token_threshold');
  }
  public set refreshTokenThreshold(value: string) {
    this._refreshTokenThreshold = value;
  }
  public resetRefreshTokenThreshold() {
    this._refreshTokenThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenThresholdInput() {
    return this._refreshTokenThreshold;
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

  // signing_key - computed: false, optional: true, required: false
  private _signingKey?: string; 
  public get signingKey() {
    return this.getStringAttribute('signing_key');
  }
  public set signingKey(value: string) {
    this._signingKey = value;
  }
  public resetSigningKey() {
    this._signingKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signingKeyInput() {
    return this._signingKey;
  }

  // sub_mode - computed: false, optional: true, required: false
  private _subMode?: string; 
  public get subMode() {
    return this.getStringAttribute('sub_mode');
  }
  public set subMode(value: string) {
    this._subMode = value;
  }
  public resetSubMode() {
    this._subMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subModeInput() {
    return this._subMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_code_validity: cdktf.stringToTerraform(this._accessCodeValidity),
      access_token_validity: cdktf.stringToTerraform(this._accessTokenValidity),
      allowed_redirect_uris: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(this._allowedRedirectUris),
      authentication_flow: cdktf.stringToTerraform(this._authenticationFlow),
      authorization_flow: cdktf.stringToTerraform(this._authorizationFlow),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      client_type: cdktf.stringToTerraform(this._clientType),
      encryption_key: cdktf.stringToTerraform(this._encryptionKey),
      id: cdktf.stringToTerraform(this._id),
      include_claims_in_id_token: cdktf.booleanToTerraform(this._includeClaimsInIdToken),
      invalidation_flow: cdktf.stringToTerraform(this._invalidationFlow),
      issuer_mode: cdktf.stringToTerraform(this._issuerMode),
      jwks_sources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._jwksSources),
      jwt_federation_providers: cdktf.listMapper(cdktf.numberToTerraform, false)(this._jwtFederationProviders),
      jwt_federation_sources: cdktf.listMapper(cdktf.stringToTerraform, false)(this._jwtFederationSources),
      logout_method: cdktf.stringToTerraform(this._logoutMethod),
      logout_uri: cdktf.stringToTerraform(this._logoutUri),
      name: cdktf.stringToTerraform(this._name),
      property_mappings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._propertyMappings),
      refresh_token_threshold: cdktf.stringToTerraform(this._refreshTokenThreshold),
      refresh_token_validity: cdktf.stringToTerraform(this._refreshTokenValidity),
      signing_key: cdktf.stringToTerraform(this._signingKey),
      sub_mode: cdktf.stringToTerraform(this._subMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_code_validity: {
        value: cdktf.stringToHclTerraform(this._accessCodeValidity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_token_validity: {
        value: cdktf.stringToHclTerraform(this._accessTokenValidity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_redirect_uris: {
        value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(this._allowedRedirectUris),
        isBlock: false,
        type: "list",
        storageClassType: "stringMapList",
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
      client_type: {
        value: cdktf.stringToHclTerraform(this._clientType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      encryption_key: {
        value: cdktf.stringToHclTerraform(this._encryptionKey),
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
      include_claims_in_id_token: {
        value: cdktf.booleanToHclTerraform(this._includeClaimsInIdToken),
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
      issuer_mode: {
        value: cdktf.stringToHclTerraform(this._issuerMode),
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
      logout_method: {
        value: cdktf.stringToHclTerraform(this._logoutMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logout_uri: {
        value: cdktf.stringToHclTerraform(this._logoutUri),
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
      refresh_token_threshold: {
        value: cdktf.stringToHclTerraform(this._refreshTokenThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_token_validity: {
        value: cdktf.stringToHclTerraform(this._refreshTokenValidity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      signing_key: {
        value: cdktf.stringToHclTerraform(this._signingKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sub_mode: {
        value: cdktf.stringToHclTerraform(this._subMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
