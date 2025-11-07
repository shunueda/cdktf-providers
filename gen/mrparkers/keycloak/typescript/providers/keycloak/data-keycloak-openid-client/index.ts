// https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/data-sources/openid_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKeycloakOpenidClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/data-sources/openid_client#client_id DataKeycloakOpenidClient#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/data-sources/openid_client#consent_screen_text DataKeycloakOpenidClient#consent_screen_text}
  */
  readonly consentScreenText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/data-sources/openid_client#display_on_consent_screen DataKeycloakOpenidClient#display_on_consent_screen}
  */
  readonly displayOnConsentScreen?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/data-sources/openid_client#extra_config DataKeycloakOpenidClient#extra_config}
  */
  readonly extraConfig?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/data-sources/openid_client#id DataKeycloakOpenidClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/data-sources/openid_client#oauth2_device_authorization_grant_enabled DataKeycloakOpenidClient#oauth2_device_authorization_grant_enabled}
  */
  readonly oauth2DeviceAuthorizationGrantEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/data-sources/openid_client#oauth2_device_code_lifespan DataKeycloakOpenidClient#oauth2_device_code_lifespan}
  */
  readonly oauth2DeviceCodeLifespan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/data-sources/openid_client#oauth2_device_polling_interval DataKeycloakOpenidClient#oauth2_device_polling_interval}
  */
  readonly oauth2DevicePollingInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/data-sources/openid_client#realm_id DataKeycloakOpenidClient#realm_id}
  */
  readonly realmId: string;
}
export interface DataKeycloakOpenidClientAuthenticationFlowBindingOverrides {
}

export function dataKeycloakOpenidClientAuthenticationFlowBindingOverridesToTerraform(struct?: DataKeycloakOpenidClientAuthenticationFlowBindingOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeycloakOpenidClientAuthenticationFlowBindingOverridesToHclTerraform(struct?: DataKeycloakOpenidClientAuthenticationFlowBindingOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeycloakOpenidClientAuthenticationFlowBindingOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKeycloakOpenidClientAuthenticationFlowBindingOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeycloakOpenidClientAuthenticationFlowBindingOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // browser_id - computed: true, optional: false, required: false
  public get browserId() {
    return this.getStringAttribute('browser_id');
  }

  // direct_grant_id - computed: true, optional: false, required: false
  public get directGrantId() {
    return this.getStringAttribute('direct_grant_id');
  }
}

export class DataKeycloakOpenidClientAuthenticationFlowBindingOverridesList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKeycloakOpenidClientAuthenticationFlowBindingOverridesOutputReference {
    return new DataKeycloakOpenidClientAuthenticationFlowBindingOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataKeycloakOpenidClientAuthorization {
}

export function dataKeycloakOpenidClientAuthorizationToTerraform(struct?: DataKeycloakOpenidClientAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataKeycloakOpenidClientAuthorizationToHclTerraform(struct?: DataKeycloakOpenidClientAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataKeycloakOpenidClientAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataKeycloakOpenidClientAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataKeycloakOpenidClientAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_remote_resource_management - computed: true, optional: false, required: false
  public get allowRemoteResourceManagement() {
    return this.getBooleanAttribute('allow_remote_resource_management');
  }

  // decision_strategy - computed: true, optional: false, required: false
  public get decisionStrategy() {
    return this.getStringAttribute('decision_strategy');
  }

  // keep_defaults - computed: true, optional: false, required: false
  public get keepDefaults() {
    return this.getBooleanAttribute('keep_defaults');
  }

  // policy_enforcement_mode - computed: true, optional: false, required: false
  public get policyEnforcementMode() {
    return this.getStringAttribute('policy_enforcement_mode');
  }
}

export class DataKeycloakOpenidClientAuthorizationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataKeycloakOpenidClientAuthorizationOutputReference {
    return new DataKeycloakOpenidClientAuthorizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/data-sources/openid_client keycloak_openid_client}
*/
export class DataKeycloakOpenidClient extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_openid_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKeycloakOpenidClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKeycloakOpenidClient to import
  * @param importFromId The id of the existing DataKeycloakOpenidClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/data-sources/openid_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKeycloakOpenidClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_openid_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mrparkers/keycloak/4.4.0/docs/data-sources/openid_client keycloak_openid_client} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKeycloakOpenidClientConfig
  */
  public constructor(scope: Construct, id: string, config: DataKeycloakOpenidClientConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_openid_client',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '4.4.0'
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
    this._consentScreenText = config.consentScreenText;
    this._displayOnConsentScreen = config.displayOnConsentScreen;
    this._extraConfig = config.extraConfig;
    this._id = config.id;
    this._oauth2DeviceAuthorizationGrantEnabled = config.oauth2DeviceAuthorizationGrantEnabled;
    this._oauth2DeviceCodeLifespan = config.oauth2DeviceCodeLifespan;
    this._oauth2DevicePollingInterval = config.oauth2DevicePollingInterval;
    this._realmId = config.realmId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_lifespan - computed: true, optional: false, required: false
  public get accessTokenLifespan() {
    return this.getStringAttribute('access_token_lifespan');
  }

  // access_type - computed: true, optional: false, required: false
  public get accessType() {
    return this.getStringAttribute('access_type');
  }

  // admin_url - computed: true, optional: false, required: false
  public get adminUrl() {
    return this.getStringAttribute('admin_url');
  }

  // authentication_flow_binding_overrides - computed: true, optional: false, required: false
  private _authenticationFlowBindingOverrides = new DataKeycloakOpenidClientAuthenticationFlowBindingOverridesList(this, "authentication_flow_binding_overrides", true);
  public get authenticationFlowBindingOverrides() {
    return this._authenticationFlowBindingOverrides;
  }

  // authorization - computed: true, optional: false, required: false
  private _authorization = new DataKeycloakOpenidClientAuthorizationList(this, "authorization", true);
  public get authorization() {
    return this._authorization;
  }

  // backchannel_logout_revoke_offline_sessions - computed: true, optional: false, required: false
  public get backchannelLogoutRevokeOfflineSessions() {
    return this.getBooleanAttribute('backchannel_logout_revoke_offline_sessions');
  }

  // backchannel_logout_session_required - computed: true, optional: false, required: false
  public get backchannelLogoutSessionRequired() {
    return this.getBooleanAttribute('backchannel_logout_session_required');
  }

  // backchannel_logout_url - computed: true, optional: false, required: false
  public get backchannelLogoutUrl() {
    return this.getStringAttribute('backchannel_logout_url');
  }

  // base_url - computed: true, optional: false, required: false
  public get baseUrl() {
    return this.getStringAttribute('base_url');
  }

  // client_authenticator_type - computed: true, optional: false, required: false
  public get clientAuthenticatorType() {
    return this.getStringAttribute('client_authenticator_type');
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

  // client_offline_session_idle_timeout - computed: true, optional: false, required: false
  public get clientOfflineSessionIdleTimeout() {
    return this.getStringAttribute('client_offline_session_idle_timeout');
  }

  // client_offline_session_max_lifespan - computed: true, optional: false, required: false
  public get clientOfflineSessionMaxLifespan() {
    return this.getStringAttribute('client_offline_session_max_lifespan');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // client_session_idle_timeout - computed: true, optional: false, required: false
  public get clientSessionIdleTimeout() {
    return this.getStringAttribute('client_session_idle_timeout');
  }

  // client_session_max_lifespan - computed: true, optional: false, required: false
  public get clientSessionMaxLifespan() {
    return this.getStringAttribute('client_session_max_lifespan');
  }

  // consent_required - computed: true, optional: false, required: false
  public get consentRequired() {
    return this.getBooleanAttribute('consent_required');
  }

  // consent_screen_text - computed: false, optional: true, required: false
  private _consentScreenText?: string; 
  public get consentScreenText() {
    return this.getStringAttribute('consent_screen_text');
  }
  public set consentScreenText(value: string) {
    this._consentScreenText = value;
  }
  public resetConsentScreenText() {
    this._consentScreenText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consentScreenTextInput() {
    return this._consentScreenText;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // direct_access_grants_enabled - computed: true, optional: false, required: false
  public get directAccessGrantsEnabled() {
    return this.getBooleanAttribute('direct_access_grants_enabled');
  }

  // display_on_consent_screen - computed: false, optional: true, required: false
  private _displayOnConsentScreen?: boolean | cdktf.IResolvable; 
  public get displayOnConsentScreen() {
    return this.getBooleanAttribute('display_on_consent_screen');
  }
  public set displayOnConsentScreen(value: boolean | cdktf.IResolvable) {
    this._displayOnConsentScreen = value;
  }
  public resetDisplayOnConsentScreen() {
    this._displayOnConsentScreen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayOnConsentScreenInput() {
    return this._displayOnConsentScreen;
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // exclude_session_state_from_auth_response - computed: true, optional: false, required: false
  public get excludeSessionStateFromAuthResponse() {
    return this.getBooleanAttribute('exclude_session_state_from_auth_response');
  }

  // extra_config - computed: true, optional: true, required: false
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

  // frontchannel_logout_enabled - computed: true, optional: false, required: false
  public get frontchannelLogoutEnabled() {
    return this.getBooleanAttribute('frontchannel_logout_enabled');
  }

  // frontchannel_logout_url - computed: true, optional: false, required: false
  public get frontchannelLogoutUrl() {
    return this.getStringAttribute('frontchannel_logout_url');
  }

  // full_scope_allowed - computed: true, optional: false, required: false
  public get fullScopeAllowed() {
    return this.getBooleanAttribute('full_scope_allowed');
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

  // implicit_flow_enabled - computed: true, optional: false, required: false
  public get implicitFlowEnabled() {
    return this.getBooleanAttribute('implicit_flow_enabled');
  }

  // login_theme - computed: true, optional: false, required: false
  public get loginTheme() {
    return this.getStringAttribute('login_theme');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // oauth2_device_authorization_grant_enabled - computed: false, optional: true, required: false
  private _oauth2DeviceAuthorizationGrantEnabled?: boolean | cdktf.IResolvable; 
  public get oauth2DeviceAuthorizationGrantEnabled() {
    return this.getBooleanAttribute('oauth2_device_authorization_grant_enabled');
  }
  public set oauth2DeviceAuthorizationGrantEnabled(value: boolean | cdktf.IResolvable) {
    this._oauth2DeviceAuthorizationGrantEnabled = value;
  }
  public resetOauth2DeviceAuthorizationGrantEnabled() {
    this._oauth2DeviceAuthorizationGrantEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2DeviceAuthorizationGrantEnabledInput() {
    return this._oauth2DeviceAuthorizationGrantEnabled;
  }

  // oauth2_device_code_lifespan - computed: false, optional: true, required: false
  private _oauth2DeviceCodeLifespan?: string; 
  public get oauth2DeviceCodeLifespan() {
    return this.getStringAttribute('oauth2_device_code_lifespan');
  }
  public set oauth2DeviceCodeLifespan(value: string) {
    this._oauth2DeviceCodeLifespan = value;
  }
  public resetOauth2DeviceCodeLifespan() {
    this._oauth2DeviceCodeLifespan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2DeviceCodeLifespanInput() {
    return this._oauth2DeviceCodeLifespan;
  }

  // oauth2_device_polling_interval - computed: false, optional: true, required: false
  private _oauth2DevicePollingInterval?: string; 
  public get oauth2DevicePollingInterval() {
    return this.getStringAttribute('oauth2_device_polling_interval');
  }
  public set oauth2DevicePollingInterval(value: string) {
    this._oauth2DevicePollingInterval = value;
  }
  public resetOauth2DevicePollingInterval() {
    this._oauth2DevicePollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2DevicePollingIntervalInput() {
    return this._oauth2DevicePollingInterval;
  }

  // pkce_code_challenge_method - computed: true, optional: false, required: false
  public get pkceCodeChallengeMethod() {
    return this.getStringAttribute('pkce_code_challenge_method');
  }

  // realm_id - computed: false, optional: false, required: true
  private _realmId?: string; 
  public get realmId() {
    return this.getStringAttribute('realm_id');
  }
  public set realmId(value: string) {
    this._realmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmIdInput() {
    return this._realmId;
  }

  // resource_server_id - computed: true, optional: false, required: false
  public get resourceServerId() {
    return this.getStringAttribute('resource_server_id');
  }

  // root_url - computed: true, optional: false, required: false
  public get rootUrl() {
    return this.getStringAttribute('root_url');
  }

  // service_account_user_id - computed: true, optional: false, required: false
  public get serviceAccountUserId() {
    return this.getStringAttribute('service_account_user_id');
  }

  // service_accounts_enabled - computed: true, optional: false, required: false
  public get serviceAccountsEnabled() {
    return this.getBooleanAttribute('service_accounts_enabled');
  }

  // standard_flow_enabled - computed: true, optional: false, required: false
  public get standardFlowEnabled() {
    return this.getBooleanAttribute('standard_flow_enabled');
  }

  // use_refresh_tokens - computed: true, optional: false, required: false
  public get useRefreshTokens() {
    return this.getBooleanAttribute('use_refresh_tokens');
  }

  // use_refresh_tokens_client_credentials - computed: true, optional: false, required: false
  public get useRefreshTokensClientCredentials() {
    return this.getBooleanAttribute('use_refresh_tokens_client_credentials');
  }

  // valid_post_logout_redirect_uris - computed: true, optional: false, required: false
  public get validPostLogoutRedirectUris() {
    return cdktf.Fn.tolist(this.getListAttribute('valid_post_logout_redirect_uris'));
  }

  // valid_redirect_uris - computed: true, optional: false, required: false
  public get validRedirectUris() {
    return cdktf.Fn.tolist(this.getListAttribute('valid_redirect_uris'));
  }

  // web_origins - computed: true, optional: false, required: false
  public get webOrigins() {
    return cdktf.Fn.tolist(this.getListAttribute('web_origins'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      consent_screen_text: cdktf.stringToTerraform(this._consentScreenText),
      display_on_consent_screen: cdktf.booleanToTerraform(this._displayOnConsentScreen),
      extra_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._extraConfig),
      id: cdktf.stringToTerraform(this._id),
      oauth2_device_authorization_grant_enabled: cdktf.booleanToTerraform(this._oauth2DeviceAuthorizationGrantEnabled),
      oauth2_device_code_lifespan: cdktf.stringToTerraform(this._oauth2DeviceCodeLifespan),
      oauth2_device_polling_interval: cdktf.stringToTerraform(this._oauth2DevicePollingInterval),
      realm_id: cdktf.stringToTerraform(this._realmId),
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
      consent_screen_text: {
        value: cdktf.stringToHclTerraform(this._consentScreenText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_on_consent_screen: {
        value: cdktf.booleanToHclTerraform(this._displayOnConsentScreen),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_device_authorization_grant_enabled: {
        value: cdktf.booleanToHclTerraform(this._oauth2DeviceAuthorizationGrantEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      oauth2_device_code_lifespan: {
        value: cdktf.stringToHclTerraform(this._oauth2DeviceCodeLifespan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oauth2_device_polling_interval: {
        value: cdktf.stringToHclTerraform(this._oauth2DevicePollingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realm_id: {
        value: cdktf.stringToHclTerraform(this._realmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
