// https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/oidc_github_identity_provider
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OidcGithubIdentityProviderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable/disable if new users can read any stored tokens. This assigns the broker.read-token role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/oidc_github_identity_provider#add_read_token_role_on_create OidcGithubIdentityProvider#add_read_token_role_on_create}
  */
  readonly addReadTokenRoleOnCreate?: boolean | cdktf.IResolvable;
  /**
  * The alias uniquely identifies an identity provider and it is also used to build the redirect uri. In case of github this is computed and always github
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/oidc_github_identity_provider#alias OidcGithubIdentityProvider#alias}
  */
  readonly alias?: string;
  /**
  * API URL for the GitHub instance, defaults to https://api.github.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/oidc_github_identity_provider#api_url OidcGithubIdentityProvider#api_url}
  */
  readonly apiUrl?: string;
  /**
  * Enable/disable authenticate users by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/oidc_github_identity_provider#authenticate_by_default OidcGithubIdentityProvider#authenticate_by_default}
  */
  readonly authenticateByDefault?: boolean | cdktf.IResolvable;
  /**
  * Base URL for the GitHub instance, defaults to https://github.com
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/oidc_github_identity_provider#base_url OidcGithubIdentityProvider#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/oidc_github_identity_provider#client_id OidcGithubIdentityProvider#client_id}
  */
  readonly clientId: string;
  /**
  * Client Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/oidc_github_identity_provider#client_secret OidcGithubIdentityProvider#client_secret}
  */
  readonly clientSecret: string;
  /**
  * The scopes to be sent when asking for authorization. See the documentation for possible values, separator and default value'. Default to 'user:email'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/oidc_github_identity_provider#default_scopes OidcGithubIdentityProvider#default_scopes}
  */
  readonly defaultScopes?: string;
  /**
  * The human-friendly name of the identity provider, used in the log in form.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/oidc_github_identity_provider#display_name OidcGithubIdentityProvider#display_name}
  */
  readonly displayName?: string;
  /**
  * Enable/disable this identity provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/oidc_github_identity_provider#enabled OidcGithubIdentityProvider#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/oidc_github_identity_provider#extra_config OidcGithubIdentityProvider#extra_config}
  */
  readonly extraConfig?: { [key: string]: string };
  /**
  * Alias of authentication flow, which is triggered after first login with this identity provider. Term 'First Login' means that there is not yet existing Keycloak account linked with the authenticated identity provider account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/oidc_github_identity_provider#first_broker_login_flow_alias OidcGithubIdentityProvider#first_broker_login_flow_alias}
  */
  readonly firstBrokerLoginFlowAlias?: string;
  /**
  * Whether GitHub API shoulds accept JSON explicitly during token authentication requests, defaults to false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/oidc_github_identity_provider#github_json_format OidcGithubIdentityProvider#github_json_format}
  */
  readonly githubJsonFormat?: boolean | cdktf.IResolvable;
  /**
  * GUI Order
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/oidc_github_identity_provider#gui_order OidcGithubIdentityProvider#gui_order}
  */
  readonly guiOrder?: string;
  /**
  * Hide On Login Page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/oidc_github_identity_provider#hide_on_login_page OidcGithubIdentityProvider#hide_on_login_page}
  */
  readonly hideOnLoginPage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/oidc_github_identity_provider#id OidcGithubIdentityProvider#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If true, users cannot log in through this provider.  They can only link to this provider.  This is useful if you don't want to allow login from the provider, but want to integrate with a provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/oidc_github_identity_provider#link_only OidcGithubIdentityProvider#link_only}
  */
  readonly linkOnly?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/oidc_github_identity_provider#org_domain OidcGithubIdentityProvider#org_domain}
  */
  readonly orgDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/oidc_github_identity_provider#org_redirect_mode_email_matches OidcGithubIdentityProvider#org_redirect_mode_email_matches}
  */
  readonly orgRedirectModeEmailMatches?: boolean | cdktf.IResolvable;
  /**
  * ID of organization with which this identity is linked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/oidc_github_identity_provider#organization_id OidcGithubIdentityProvider#organization_id}
  */
  readonly organizationId?: string;
  /**
  * Alias of authentication flow, which is triggered after each login with this identity provider. Useful if you want additional verification of each user authenticated with this identity provider (for example OTP). Leave this empty if you don't want any additional authenticators to be triggered after login with this identity provider. Also note, that authenticator implementations must assume that user is already set in ClientSession as identity provider already set it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/oidc_github_identity_provider#post_broker_login_flow_alias OidcGithubIdentityProvider#post_broker_login_flow_alias}
  */
  readonly postBrokerLoginFlowAlias?: string;
  /**
  * provider id, is always github, unless you have a extended custom implementation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/oidc_github_identity_provider#provider_id OidcGithubIdentityProvider#provider_id}
  */
  readonly providerId?: string;
  /**
  * Realm Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/oidc_github_identity_provider#realm OidcGithubIdentityProvider#realm}
  */
  readonly realm: string;
  /**
  * Enable/disable if tokens must be stored after authenticating users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/oidc_github_identity_provider#store_token OidcGithubIdentityProvider#store_token}
  */
  readonly storeToken?: boolean | cdktf.IResolvable;
  /**
  * Sync Mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/oidc_github_identity_provider#sync_mode OidcGithubIdentityProvider#sync_mode}
  */
  readonly syncMode?: string;
  /**
  * If enabled then email provided by this provider is not verified even if verification is enabled for the realm.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/oidc_github_identity_provider#trust_email OidcGithubIdentityProvider#trust_email}
  */
  readonly trustEmail?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/oidc_github_identity_provider keycloak_oidc_github_identity_provider}
*/
export class OidcGithubIdentityProvider extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_oidc_github_identity_provider";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OidcGithubIdentityProvider resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OidcGithubIdentityProvider to import
  * @param importFromId The id of the existing OidcGithubIdentityProvider that should be imported. Refer to the {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/oidc_github_identity_provider#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OidcGithubIdentityProvider to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_oidc_github_identity_provider", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/oidc_github_identity_provider keycloak_oidc_github_identity_provider} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OidcGithubIdentityProviderConfig
  */
  public constructor(scope: Construct, id: string, config: OidcGithubIdentityProviderConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_oidc_github_identity_provider',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '5.5.0',
        providerVersionConstraint: '5.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addReadTokenRoleOnCreate = config.addReadTokenRoleOnCreate;
    this._alias = config.alias;
    this._apiUrl = config.apiUrl;
    this._authenticateByDefault = config.authenticateByDefault;
    this._baseUrl = config.baseUrl;
    this._clientId = config.clientId;
    this._clientSecret = config.clientSecret;
    this._defaultScopes = config.defaultScopes;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._extraConfig = config.extraConfig;
    this._firstBrokerLoginFlowAlias = config.firstBrokerLoginFlowAlias;
    this._githubJsonFormat = config.githubJsonFormat;
    this._guiOrder = config.guiOrder;
    this._hideOnLoginPage = config.hideOnLoginPage;
    this._id = config.id;
    this._linkOnly = config.linkOnly;
    this._orgDomain = config.orgDomain;
    this._orgRedirectModeEmailMatches = config.orgRedirectModeEmailMatches;
    this._organizationId = config.organizationId;
    this._postBrokerLoginFlowAlias = config.postBrokerLoginFlowAlias;
    this._providerId = config.providerId;
    this._realm = config.realm;
    this._storeToken = config.storeToken;
    this._syncMode = config.syncMode;
    this._trustEmail = config.trustEmail;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_read_token_role_on_create - computed: false, optional: true, required: false
  private _addReadTokenRoleOnCreate?: boolean | cdktf.IResolvable; 
  public get addReadTokenRoleOnCreate() {
    return this.getBooleanAttribute('add_read_token_role_on_create');
  }
  public set addReadTokenRoleOnCreate(value: boolean | cdktf.IResolvable) {
    this._addReadTokenRoleOnCreate = value;
  }
  public resetAddReadTokenRoleOnCreate() {
    this._addReadTokenRoleOnCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addReadTokenRoleOnCreateInput() {
    return this._addReadTokenRoleOnCreate;
  }

  // alias - computed: true, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // api_url - computed: false, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this.getStringAttribute('api_url');
  }
  public set apiUrl(value: string) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // authenticate_by_default - computed: false, optional: true, required: false
  private _authenticateByDefault?: boolean | cdktf.IResolvable; 
  public get authenticateByDefault() {
    return this.getBooleanAttribute('authenticate_by_default');
  }
  public set authenticateByDefault(value: boolean | cdktf.IResolvable) {
    this._authenticateByDefault = value;
  }
  public resetAuthenticateByDefault() {
    this._authenticateByDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticateByDefaultInput() {
    return this._authenticateByDefault;
  }

  // base_url - computed: false, optional: true, required: false
  private _baseUrl?: string; 
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }
  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
  public resetBaseUrl() {
    this._baseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseUrlInput() {
    return this._baseUrl;
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

  // client_secret - computed: false, optional: false, required: true
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // default_scopes - computed: false, optional: true, required: false
  private _defaultScopes?: string; 
  public get defaultScopes() {
    return this.getStringAttribute('default_scopes');
  }
  public set defaultScopes(value: string) {
    this._defaultScopes = value;
  }
  public resetDefaultScopes() {
    this._defaultScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultScopesInput() {
    return this._defaultScopes;
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // extra_config - computed: false, optional: true, required: false
  private _extraConfig?: { [key: string]: string }; 
  public get extraConfig() {
    return this.getStringMapAttribute('extra_config');
  }
  public set extraConfig(value: { [key: string]: string }) {
    this._extraConfig = value;
  }
  public resetExtraConfig() {
    this._extraConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraConfigInput() {
    return this._extraConfig;
  }

  // first_broker_login_flow_alias - computed: false, optional: true, required: false
  private _firstBrokerLoginFlowAlias?: string; 
  public get firstBrokerLoginFlowAlias() {
    return this.getStringAttribute('first_broker_login_flow_alias');
  }
  public set firstBrokerLoginFlowAlias(value: string) {
    this._firstBrokerLoginFlowAlias = value;
  }
  public resetFirstBrokerLoginFlowAlias() {
    this._firstBrokerLoginFlowAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstBrokerLoginFlowAliasInput() {
    return this._firstBrokerLoginFlowAlias;
  }

  // github_json_format - computed: false, optional: true, required: false
  private _githubJsonFormat?: boolean | cdktf.IResolvable; 
  public get githubJsonFormat() {
    return this.getBooleanAttribute('github_json_format');
  }
  public set githubJsonFormat(value: boolean | cdktf.IResolvable) {
    this._githubJsonFormat = value;
  }
  public resetGithubJsonFormat() {
    this._githubJsonFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubJsonFormatInput() {
    return this._githubJsonFormat;
  }

  // gui_order - computed: false, optional: true, required: false
  private _guiOrder?: string; 
  public get guiOrder() {
    return this.getStringAttribute('gui_order');
  }
  public set guiOrder(value: string) {
    this._guiOrder = value;
  }
  public resetGuiOrder() {
    this._guiOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guiOrderInput() {
    return this._guiOrder;
  }

  // hide_on_login_page - computed: false, optional: true, required: false
  private _hideOnLoginPage?: boolean | cdktf.IResolvable; 
  public get hideOnLoginPage() {
    return this.getBooleanAttribute('hide_on_login_page');
  }
  public set hideOnLoginPage(value: boolean | cdktf.IResolvable) {
    this._hideOnLoginPage = value;
  }
  public resetHideOnLoginPage() {
    this._hideOnLoginPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideOnLoginPageInput() {
    return this._hideOnLoginPage;
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

  // internal_id - computed: true, optional: false, required: false
  public get internalId() {
    return this.getStringAttribute('internal_id');
  }

  // link_only - computed: false, optional: true, required: false
  private _linkOnly?: boolean | cdktf.IResolvable; 
  public get linkOnly() {
    return this.getBooleanAttribute('link_only');
  }
  public set linkOnly(value: boolean | cdktf.IResolvable) {
    this._linkOnly = value;
  }
  public resetLinkOnly() {
    this._linkOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkOnlyInput() {
    return this._linkOnly;
  }

  // org_domain - computed: false, optional: true, required: false
  private _orgDomain?: string; 
  public get orgDomain() {
    return this.getStringAttribute('org_domain');
  }
  public set orgDomain(value: string) {
    this._orgDomain = value;
  }
  public resetOrgDomain() {
    this._orgDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgDomainInput() {
    return this._orgDomain;
  }

  // org_redirect_mode_email_matches - computed: false, optional: true, required: false
  private _orgRedirectModeEmailMatches?: boolean | cdktf.IResolvable; 
  public get orgRedirectModeEmailMatches() {
    return this.getBooleanAttribute('org_redirect_mode_email_matches');
  }
  public set orgRedirectModeEmailMatches(value: boolean | cdktf.IResolvable) {
    this._orgRedirectModeEmailMatches = value;
  }
  public resetOrgRedirectModeEmailMatches() {
    this._orgRedirectModeEmailMatches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgRedirectModeEmailMatchesInput() {
    return this._orgRedirectModeEmailMatches;
  }

  // organization_id - computed: false, optional: true, required: false
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  public resetOrganizationId() {
    this._organizationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // post_broker_login_flow_alias - computed: false, optional: true, required: false
  private _postBrokerLoginFlowAlias?: string; 
  public get postBrokerLoginFlowAlias() {
    return this.getStringAttribute('post_broker_login_flow_alias');
  }
  public set postBrokerLoginFlowAlias(value: string) {
    this._postBrokerLoginFlowAlias = value;
  }
  public resetPostBrokerLoginFlowAlias() {
    this._postBrokerLoginFlowAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postBrokerLoginFlowAliasInput() {
    return this._postBrokerLoginFlowAlias;
  }

  // provider_id - computed: false, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // realm - computed: false, optional: false, required: true
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // store_token - computed: false, optional: true, required: false
  private _storeToken?: boolean | cdktf.IResolvable; 
  public get storeToken() {
    return this.getBooleanAttribute('store_token');
  }
  public set storeToken(value: boolean | cdktf.IResolvable) {
    this._storeToken = value;
  }
  public resetStoreToken() {
    this._storeToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeTokenInput() {
    return this._storeToken;
  }

  // sync_mode - computed: false, optional: true, required: false
  private _syncMode?: string; 
  public get syncMode() {
    return this.getStringAttribute('sync_mode');
  }
  public set syncMode(value: string) {
    this._syncMode = value;
  }
  public resetSyncMode() {
    this._syncMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncModeInput() {
    return this._syncMode;
  }

  // trust_email - computed: false, optional: true, required: false
  private _trustEmail?: boolean | cdktf.IResolvable; 
  public get trustEmail() {
    return this.getBooleanAttribute('trust_email');
  }
  public set trustEmail(value: boolean | cdktf.IResolvable) {
    this._trustEmail = value;
  }
  public resetTrustEmail() {
    this._trustEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustEmailInput() {
    return this._trustEmail;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_read_token_role_on_create: cdktf.booleanToTerraform(this._addReadTokenRoleOnCreate),
      alias: cdktf.stringToTerraform(this._alias),
      api_url: cdktf.stringToTerraform(this._apiUrl),
      authenticate_by_default: cdktf.booleanToTerraform(this._authenticateByDefault),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      default_scopes: cdktf.stringToTerraform(this._defaultScopes),
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      extra_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._extraConfig),
      first_broker_login_flow_alias: cdktf.stringToTerraform(this._firstBrokerLoginFlowAlias),
      github_json_format: cdktf.booleanToTerraform(this._githubJsonFormat),
      gui_order: cdktf.stringToTerraform(this._guiOrder),
      hide_on_login_page: cdktf.booleanToTerraform(this._hideOnLoginPage),
      id: cdktf.stringToTerraform(this._id),
      link_only: cdktf.booleanToTerraform(this._linkOnly),
      org_domain: cdktf.stringToTerraform(this._orgDomain),
      org_redirect_mode_email_matches: cdktf.booleanToTerraform(this._orgRedirectModeEmailMatches),
      organization_id: cdktf.stringToTerraform(this._organizationId),
      post_broker_login_flow_alias: cdktf.stringToTerraform(this._postBrokerLoginFlowAlias),
      provider_id: cdktf.stringToTerraform(this._providerId),
      realm: cdktf.stringToTerraform(this._realm),
      store_token: cdktf.booleanToTerraform(this._storeToken),
      sync_mode: cdktf.stringToTerraform(this._syncMode),
      trust_email: cdktf.booleanToTerraform(this._trustEmail),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_read_token_role_on_create: {
        value: cdktf.booleanToHclTerraform(this._addReadTokenRoleOnCreate),
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
      api_url: {
        value: cdktf.stringToHclTerraform(this._apiUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authenticate_by_default: {
        value: cdktf.booleanToHclTerraform(this._authenticateByDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
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
      default_scopes: {
        value: cdktf.stringToHclTerraform(this._defaultScopes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      extra_config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extraConfig),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      first_broker_login_flow_alias: {
        value: cdktf.stringToHclTerraform(this._firstBrokerLoginFlowAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      github_json_format: {
        value: cdktf.booleanToHclTerraform(this._githubJsonFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gui_order: {
        value: cdktf.stringToHclTerraform(this._guiOrder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hide_on_login_page: {
        value: cdktf.booleanToHclTerraform(this._hideOnLoginPage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      link_only: {
        value: cdktf.booleanToHclTerraform(this._linkOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      org_domain: {
        value: cdktf.stringToHclTerraform(this._orgDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_redirect_mode_email_matches: {
        value: cdktf.booleanToHclTerraform(this._orgRedirectModeEmailMatches),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_broker_login_flow_alias: {
        value: cdktf.stringToHclTerraform(this._postBrokerLoginFlowAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_id: {
        value: cdktf.stringToHclTerraform(this._providerId),
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
      store_token: {
        value: cdktf.booleanToHclTerraform(this._storeToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sync_mode: {
        value: cdktf.stringToHclTerraform(this._syncMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trust_email: {
        value: cdktf.booleanToHclTerraform(this._trustEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
