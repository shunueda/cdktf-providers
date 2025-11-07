// https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_oauth
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SourceOauthConfig extends cdktf.TerraformMetaArguments {
  /**
  * Only required for OAuth1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_oauth#access_token_url SourceOauth#access_token_url}
  */
  readonly accessTokenUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_oauth#additional_scopes SourceOauth#additional_scopes}
  */
  readonly additionalScopes?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_oauth#authentication_flow SourceOauth#authentication_flow}
  */
  readonly authenticationFlow?: string;
  /**
  * Allowed values:
  *   - `basic_auth`
  *   - `post_body`
  *  Defaults to `basic_auth`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_oauth#authorization_code_auth_method SourceOauth#authorization_code_auth_method}
  */
  readonly authorizationCodeAuthMethod?: string;
  /**
  * Manually configure OAuth2 URLs when `oidc_well_known_url` is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_oauth#authorization_url SourceOauth#authorization_url}
  */
  readonly authorizationUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_oauth#consumer_key SourceOauth#consumer_key}
  */
  readonly consumerKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_oauth#consumer_secret SourceOauth#consumer_secret}
  */
  readonly consumerSecret: string;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_oauth#enabled SourceOauth#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_oauth#enrollment_flow SourceOauth#enrollment_flow}
  */
  readonly enrollmentFlow?: string;
  /**
  * Allowed values:
  *   - `identifier`
  *   - `name_link`
  *   - `name_deny`
  *  Defaults to `identifier`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_oauth#group_matching_mode SourceOauth#group_matching_mode}
  */
  readonly groupMatchingMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_oauth#id SourceOauth#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_oauth#name SourceOauth#name}
  */
  readonly name: string;
  /**
  * Manually configure JWKS keys for use with machine-to-machine authentication. JSON format expected. Use `jsonencode()` to pass objects. Generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_oauth#oidc_jwks SourceOauth#oidc_jwks}
  */
  readonly oidcJwks?: string;
  /**
  * Automatically configure JWKS if not specified by `oidc_well_known_url`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_oauth#oidc_jwks_url SourceOauth#oidc_jwks_url}
  */
  readonly oidcJwksUrl?: string;
  /**
  * Automatically configure source from OIDC well-known endpoint. URL is taken as is, and should end with `.well-known/openid-configuration`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_oauth#oidc_well_known_url SourceOauth#oidc_well_known_url}
  */
  readonly oidcWellKnownUrl?: string;
  /**
  * Allowed values:
  *   - `none`
  *   - `plain`
  *   - `S256`
  *  Defaults to `none`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_oauth#pkce SourceOauth#pkce}
  */
  readonly pkce?: string;
  /**
  * Allowed values:
  *   - `all`
  *   - `any`
  *  Defaults to `any`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_oauth#policy_engine_mode SourceOauth#policy_engine_mode}
  */
  readonly policyEngineMode?: string;
  /**
  * Manually configure OAuth2 URLs when `oidc_well_known_url` is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_oauth#profile_url SourceOauth#profile_url}
  */
  readonly profileUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_oauth#property_mappings SourceOauth#property_mappings}
  */
  readonly propertyMappings?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_oauth#property_mappings_group SourceOauth#property_mappings_group}
  */
  readonly propertyMappingsGroup?: string[];
  /**
  * Allowed values:
  *   - `apple`
  *   - `openidconnect`
  *   - `entraid`
  *   - `azuread`
  *   - `discord`
  *   - `facebook`
  *   - `github`
  *   - `gitlab`
  *   - `google`
  *   - `mailcow`
  *   - `okta`
  *   - `patreon`
  *   - `reddit`
  *   - `twitch`
  *   - `twitter`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_oauth#provider_type SourceOauth#provider_type}
  */
  readonly providerType: string;
  /**
  * Manually configure OAuth2 URLs when `oidc_well_known_url` is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_oauth#request_token_url SourceOauth#request_token_url}
  */
  readonly requestTokenUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_oauth#slug SourceOauth#slug}
  */
  readonly slug: string;
  /**
  * Allowed values:
  *   - `identifier`
  *   - `email_link`
  *   - `email_deny`
  *   - `username_link`
  *   - `username_deny`
  *  Defaults to `identifier`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_oauth#user_matching_mode SourceOauth#user_matching_mode}
  */
  readonly userMatchingMode?: string;
  /**
  * Defaults to `goauthentik.io/sources/%(slug)s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_oauth#user_path_template SourceOauth#user_path_template}
  */
  readonly userPathTemplate?: string;
  /**
  * Generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_oauth#uuid SourceOauth#uuid}
  */
  readonly uuid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_oauth authentik_source_oauth}
*/
export class SourceOauth extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "authentik_source_oauth";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SourceOauth resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SourceOauth to import
  * @param importFromId The id of the existing SourceOauth that should be imported. Refer to the {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_oauth#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SourceOauth to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "authentik_source_oauth", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goauthentik/authentik/2025.10.0/docs/resources/source_oauth authentik_source_oauth} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SourceOauthConfig
  */
  public constructor(scope: Construct, id: string, config: SourceOauthConfig) {
    super(scope, id, {
      terraformResourceType: 'authentik_source_oauth',
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
    this._accessTokenUrl = config.accessTokenUrl;
    this._additionalScopes = config.additionalScopes;
    this._authenticationFlow = config.authenticationFlow;
    this._authorizationCodeAuthMethod = config.authorizationCodeAuthMethod;
    this._authorizationUrl = config.authorizationUrl;
    this._consumerKey = config.consumerKey;
    this._consumerSecret = config.consumerSecret;
    this._enabled = config.enabled;
    this._enrollmentFlow = config.enrollmentFlow;
    this._groupMatchingMode = config.groupMatchingMode;
    this._id = config.id;
    this._name = config.name;
    this._oidcJwks = config.oidcJwks;
    this._oidcJwksUrl = config.oidcJwksUrl;
    this._oidcWellKnownUrl = config.oidcWellKnownUrl;
    this._pkce = config.pkce;
    this._policyEngineMode = config.policyEngineMode;
    this._profileUrl = config.profileUrl;
    this._propertyMappings = config.propertyMappings;
    this._propertyMappingsGroup = config.propertyMappingsGroup;
    this._providerType = config.providerType;
    this._requestTokenUrl = config.requestTokenUrl;
    this._slug = config.slug;
    this._userMatchingMode = config.userMatchingMode;
    this._userPathTemplate = config.userPathTemplate;
    this._uuid = config.uuid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_url - computed: false, optional: true, required: false
  private _accessTokenUrl?: string; 
  public get accessTokenUrl() {
    return this.getStringAttribute('access_token_url');
  }
  public set accessTokenUrl(value: string) {
    this._accessTokenUrl = value;
  }
  public resetAccessTokenUrl() {
    this._accessTokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenUrlInput() {
    return this._accessTokenUrl;
  }

  // additional_scopes - computed: false, optional: true, required: false
  private _additionalScopes?: string; 
  public get additionalScopes() {
    return this.getStringAttribute('additional_scopes');
  }
  public set additionalScopes(value: string) {
    this._additionalScopes = value;
  }
  public resetAdditionalScopes() {
    this._additionalScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalScopesInput() {
    return this._additionalScopes;
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

  // authorization_code_auth_method - computed: false, optional: true, required: false
  private _authorizationCodeAuthMethod?: string; 
  public get authorizationCodeAuthMethod() {
    return this.getStringAttribute('authorization_code_auth_method');
  }
  public set authorizationCodeAuthMethod(value: string) {
    this._authorizationCodeAuthMethod = value;
  }
  public resetAuthorizationCodeAuthMethod() {
    this._authorizationCodeAuthMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationCodeAuthMethodInput() {
    return this._authorizationCodeAuthMethod;
  }

  // authorization_url - computed: false, optional: true, required: false
  private _authorizationUrl?: string; 
  public get authorizationUrl() {
    return this.getStringAttribute('authorization_url');
  }
  public set authorizationUrl(value: string) {
    this._authorizationUrl = value;
  }
  public resetAuthorizationUrl() {
    this._authorizationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationUrlInput() {
    return this._authorizationUrl;
  }

  // callback_uri - computed: true, optional: false, required: false
  public get callbackUri() {
    return this.getStringAttribute('callback_uri');
  }

  // consumer_key - computed: false, optional: false, required: true
  private _consumerKey?: string; 
  public get consumerKey() {
    return this.getStringAttribute('consumer_key');
  }
  public set consumerKey(value: string) {
    this._consumerKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerKeyInput() {
    return this._consumerKey;
  }

  // consumer_secret - computed: false, optional: false, required: true
  private _consumerSecret?: string; 
  public get consumerSecret() {
    return this.getStringAttribute('consumer_secret');
  }
  public set consumerSecret(value: string) {
    this._consumerSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerSecretInput() {
    return this._consumerSecret;
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

  // enrollment_flow - computed: false, optional: true, required: false
  private _enrollmentFlow?: string; 
  public get enrollmentFlow() {
    return this.getStringAttribute('enrollment_flow');
  }
  public set enrollmentFlow(value: string) {
    this._enrollmentFlow = value;
  }
  public resetEnrollmentFlow() {
    this._enrollmentFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollmentFlowInput() {
    return this._enrollmentFlow;
  }

  // group_matching_mode - computed: false, optional: true, required: false
  private _groupMatchingMode?: string; 
  public get groupMatchingMode() {
    return this.getStringAttribute('group_matching_mode');
  }
  public set groupMatchingMode(value: string) {
    this._groupMatchingMode = value;
  }
  public resetGroupMatchingMode() {
    this._groupMatchingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupMatchingModeInput() {
    return this._groupMatchingMode;
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

  // oidc_jwks - computed: true, optional: true, required: false
  private _oidcJwks?: string; 
  public get oidcJwks() {
    return this.getStringAttribute('oidc_jwks');
  }
  public set oidcJwks(value: string) {
    this._oidcJwks = value;
  }
  public resetOidcJwks() {
    this._oidcJwks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcJwksInput() {
    return this._oidcJwks;
  }

  // oidc_jwks_url - computed: false, optional: true, required: false
  private _oidcJwksUrl?: string; 
  public get oidcJwksUrl() {
    return this.getStringAttribute('oidc_jwks_url');
  }
  public set oidcJwksUrl(value: string) {
    this._oidcJwksUrl = value;
  }
  public resetOidcJwksUrl() {
    this._oidcJwksUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcJwksUrlInput() {
    return this._oidcJwksUrl;
  }

  // oidc_well_known_url - computed: false, optional: true, required: false
  private _oidcWellKnownUrl?: string; 
  public get oidcWellKnownUrl() {
    return this.getStringAttribute('oidc_well_known_url');
  }
  public set oidcWellKnownUrl(value: string) {
    this._oidcWellKnownUrl = value;
  }
  public resetOidcWellKnownUrl() {
    this._oidcWellKnownUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcWellKnownUrlInput() {
    return this._oidcWellKnownUrl;
  }

  // pkce - computed: false, optional: true, required: false
  private _pkce?: string; 
  public get pkce() {
    return this.getStringAttribute('pkce');
  }
  public set pkce(value: string) {
    this._pkce = value;
  }
  public resetPkce() {
    this._pkce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkceInput() {
    return this._pkce;
  }

  // policy_engine_mode - computed: false, optional: true, required: false
  private _policyEngineMode?: string; 
  public get policyEngineMode() {
    return this.getStringAttribute('policy_engine_mode');
  }
  public set policyEngineMode(value: string) {
    this._policyEngineMode = value;
  }
  public resetPolicyEngineMode() {
    this._policyEngineMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyEngineModeInput() {
    return this._policyEngineMode;
  }

  // profile_url - computed: false, optional: true, required: false
  private _profileUrl?: string; 
  public get profileUrl() {
    return this.getStringAttribute('profile_url');
  }
  public set profileUrl(value: string) {
    this._profileUrl = value;
  }
  public resetProfileUrl() {
    this._profileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileUrlInput() {
    return this._profileUrl;
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

  // property_mappings_group - computed: false, optional: true, required: false
  private _propertyMappingsGroup?: string[]; 
  public get propertyMappingsGroup() {
    return this.getListAttribute('property_mappings_group');
  }
  public set propertyMappingsGroup(value: string[]) {
    this._propertyMappingsGroup = value;
  }
  public resetPropertyMappingsGroup() {
    this._propertyMappingsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertyMappingsGroupInput() {
    return this._propertyMappingsGroup;
  }

  // provider_type - computed: false, optional: false, required: true
  private _providerType?: string; 
  public get providerType() {
    return this.getStringAttribute('provider_type');
  }
  public set providerType(value: string) {
    this._providerType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerTypeInput() {
    return this._providerType;
  }

  // request_token_url - computed: false, optional: true, required: false
  private _requestTokenUrl?: string; 
  public get requestTokenUrl() {
    return this.getStringAttribute('request_token_url');
  }
  public set requestTokenUrl(value: string) {
    this._requestTokenUrl = value;
  }
  public resetRequestTokenUrl() {
    this._requestTokenUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTokenUrlInput() {
    return this._requestTokenUrl;
  }

  // slug - computed: false, optional: false, required: true
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // user_matching_mode - computed: false, optional: true, required: false
  private _userMatchingMode?: string; 
  public get userMatchingMode() {
    return this.getStringAttribute('user_matching_mode');
  }
  public set userMatchingMode(value: string) {
    this._userMatchingMode = value;
  }
  public resetUserMatchingMode() {
    this._userMatchingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userMatchingModeInput() {
    return this._userMatchingMode;
  }

  // user_path_template - computed: false, optional: true, required: false
  private _userPathTemplate?: string; 
  public get userPathTemplate() {
    return this.getStringAttribute('user_path_template');
  }
  public set userPathTemplate(value: string) {
    this._userPathTemplate = value;
  }
  public resetUserPathTemplate() {
    this._userPathTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPathTemplateInput() {
    return this._userPathTemplate;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_url: cdktf.stringToTerraform(this._accessTokenUrl),
      additional_scopes: cdktf.stringToTerraform(this._additionalScopes),
      authentication_flow: cdktf.stringToTerraform(this._authenticationFlow),
      authorization_code_auth_method: cdktf.stringToTerraform(this._authorizationCodeAuthMethod),
      authorization_url: cdktf.stringToTerraform(this._authorizationUrl),
      consumer_key: cdktf.stringToTerraform(this._consumerKey),
      consumer_secret: cdktf.stringToTerraform(this._consumerSecret),
      enabled: cdktf.booleanToTerraform(this._enabled),
      enrollment_flow: cdktf.stringToTerraform(this._enrollmentFlow),
      group_matching_mode: cdktf.stringToTerraform(this._groupMatchingMode),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      oidc_jwks: cdktf.stringToTerraform(this._oidcJwks),
      oidc_jwks_url: cdktf.stringToTerraform(this._oidcJwksUrl),
      oidc_well_known_url: cdktf.stringToTerraform(this._oidcWellKnownUrl),
      pkce: cdktf.stringToTerraform(this._pkce),
      policy_engine_mode: cdktf.stringToTerraform(this._policyEngineMode),
      profile_url: cdktf.stringToTerraform(this._profileUrl),
      property_mappings: cdktf.listMapper(cdktf.stringToTerraform, false)(this._propertyMappings),
      property_mappings_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._propertyMappingsGroup),
      provider_type: cdktf.stringToTerraform(this._providerType),
      request_token_url: cdktf.stringToTerraform(this._requestTokenUrl),
      slug: cdktf.stringToTerraform(this._slug),
      user_matching_mode: cdktf.stringToTerraform(this._userMatchingMode),
      user_path_template: cdktf.stringToTerraform(this._userPathTemplate),
      uuid: cdktf.stringToTerraform(this._uuid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token_url: {
        value: cdktf.stringToHclTerraform(this._accessTokenUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      additional_scopes: {
        value: cdktf.stringToHclTerraform(this._additionalScopes),
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
      authorization_code_auth_method: {
        value: cdktf.stringToHclTerraform(this._authorizationCodeAuthMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization_url: {
        value: cdktf.stringToHclTerraform(this._authorizationUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumer_key: {
        value: cdktf.stringToHclTerraform(this._consumerKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumer_secret: {
        value: cdktf.stringToHclTerraform(this._consumerSecret),
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
      enrollment_flow: {
        value: cdktf.stringToHclTerraform(this._enrollmentFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_matching_mode: {
        value: cdktf.stringToHclTerraform(this._groupMatchingMode),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_jwks: {
        value: cdktf.stringToHclTerraform(this._oidcJwks),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_jwks_url: {
        value: cdktf.stringToHclTerraform(this._oidcJwksUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_well_known_url: {
        value: cdktf.stringToHclTerraform(this._oidcWellKnownUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pkce: {
        value: cdktf.stringToHclTerraform(this._pkce),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_engine_mode: {
        value: cdktf.stringToHclTerraform(this._policyEngineMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile_url: {
        value: cdktf.stringToHclTerraform(this._profileUrl),
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
      property_mappings_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._propertyMappingsGroup),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      provider_type: {
        value: cdktf.stringToHclTerraform(this._providerType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_token_url: {
        value: cdktf.stringToHclTerraform(this._requestTokenUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_matching_mode: {
        value: cdktf.stringToHclTerraform(this._userMatchingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_path_template: {
        value: cdktf.stringToHclTerraform(this._userPathTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
