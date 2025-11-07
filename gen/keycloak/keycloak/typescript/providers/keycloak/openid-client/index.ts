// https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpenidClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#access_token_lifespan OpenidClient#access_token_lifespan}
  */
  readonly accessTokenLifespan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#access_type OpenidClient#access_type}
  */
  readonly accessType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#admin_url OpenidClient#admin_url}
  */
  readonly adminUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#allow_refresh_token_in_standard_token_exchange OpenidClient#allow_refresh_token_in_standard_token_exchange}
  */
  readonly allowRefreshTokenInStandardTokenExchange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#always_display_in_console OpenidClient#always_display_in_console}
  */
  readonly alwaysDisplayInConsole?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#backchannel_logout_revoke_offline_sessions OpenidClient#backchannel_logout_revoke_offline_sessions}
  */
  readonly backchannelLogoutRevokeOfflineSessions?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#backchannel_logout_session_required OpenidClient#backchannel_logout_session_required}
  */
  readonly backchannelLogoutSessionRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#backchannel_logout_url OpenidClient#backchannel_logout_url}
  */
  readonly backchannelLogoutUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#base_url OpenidClient#base_url}
  */
  readonly baseUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#client_authenticator_type OpenidClient#client_authenticator_type}
  */
  readonly clientAuthenticatorType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#client_id OpenidClient#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#client_offline_session_idle_timeout OpenidClient#client_offline_session_idle_timeout}
  */
  readonly clientOfflineSessionIdleTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#client_offline_session_max_lifespan OpenidClient#client_offline_session_max_lifespan}
  */
  readonly clientOfflineSessionMaxLifespan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#client_secret OpenidClient#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Arbitrary map of values that, when changed, will trigger rotation of the secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#client_secret_regenerate_when_changed OpenidClient#client_secret_regenerate_when_changed}
  */
  readonly clientSecretRegenerateWhenChanged?: { [key: string]: string };
  /**
  * Client Secret as write-only argument
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#client_secret_wo OpenidClient#client_secret_wo}
  */
  readonly clientSecretWo?: string;
  /**
  * Version of the Client secret write-only argument
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#client_secret_wo_version OpenidClient#client_secret_wo_version}
  */
  readonly clientSecretWoVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#client_session_idle_timeout OpenidClient#client_session_idle_timeout}
  */
  readonly clientSessionIdleTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#client_session_max_lifespan OpenidClient#client_session_max_lifespan}
  */
  readonly clientSessionMaxLifespan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#consent_required OpenidClient#consent_required}
  */
  readonly consentRequired?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#consent_screen_text OpenidClient#consent_screen_text}
  */
  readonly consentScreenText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#description OpenidClient#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#direct_access_grants_enabled OpenidClient#direct_access_grants_enabled}
  */
  readonly directAccessGrantsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#display_on_consent_screen OpenidClient#display_on_consent_screen}
  */
  readonly displayOnConsentScreen?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#enabled OpenidClient#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#exclude_issuer_from_auth_response OpenidClient#exclude_issuer_from_auth_response}
  */
  readonly excludeIssuerFromAuthResponse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#exclude_session_state_from_auth_response OpenidClient#exclude_session_state_from_auth_response}
  */
  readonly excludeSessionStateFromAuthResponse?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#extra_config OpenidClient#extra_config}
  */
  readonly extraConfig?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#frontchannel_logout_enabled OpenidClient#frontchannel_logout_enabled}
  */
  readonly frontchannelLogoutEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#frontchannel_logout_url OpenidClient#frontchannel_logout_url}
  */
  readonly frontchannelLogoutUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#full_scope_allowed OpenidClient#full_scope_allowed}
  */
  readonly fullScopeAllowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#id OpenidClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#implicit_flow_enabled OpenidClient#implicit_flow_enabled}
  */
  readonly implicitFlowEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#import OpenidClient#import}
  */
  readonly import?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#login_theme OpenidClient#login_theme}
  */
  readonly loginTheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#name OpenidClient#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#oauth2_device_authorization_grant_enabled OpenidClient#oauth2_device_authorization_grant_enabled}
  */
  readonly oauth2DeviceAuthorizationGrantEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#oauth2_device_code_lifespan OpenidClient#oauth2_device_code_lifespan}
  */
  readonly oauth2DeviceCodeLifespan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#oauth2_device_polling_interval OpenidClient#oauth2_device_polling_interval}
  */
  readonly oauth2DevicePollingInterval?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#pkce_code_challenge_method OpenidClient#pkce_code_challenge_method}
  */
  readonly pkceCodeChallengeMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#realm_id OpenidClient#realm_id}
  */
  readonly realmId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#root_url OpenidClient#root_url}
  */
  readonly rootUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#service_accounts_enabled OpenidClient#service_accounts_enabled}
  */
  readonly serviceAccountsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#standard_flow_enabled OpenidClient#standard_flow_enabled}
  */
  readonly standardFlowEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#standard_token_exchange_enabled OpenidClient#standard_token_exchange_enabled}
  */
  readonly standardTokenExchangeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#use_refresh_tokens OpenidClient#use_refresh_tokens}
  */
  readonly useRefreshTokens?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#use_refresh_tokens_client_credentials OpenidClient#use_refresh_tokens_client_credentials}
  */
  readonly useRefreshTokensClientCredentials?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#valid_post_logout_redirect_uris OpenidClient#valid_post_logout_redirect_uris}
  */
  readonly validPostLogoutRedirectUris?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#valid_redirect_uris OpenidClient#valid_redirect_uris}
  */
  readonly validRedirectUris?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#web_origins OpenidClient#web_origins}
  */
  readonly webOrigins?: string[];
  /**
  * authentication_flow_binding_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#authentication_flow_binding_overrides OpenidClient#authentication_flow_binding_overrides}
  */
  readonly authenticationFlowBindingOverrides?: OpenidClientAuthenticationFlowBindingOverrides;
  /**
  * authorization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#authorization OpenidClient#authorization}
  */
  readonly authorization?: OpenidClientAuthorization;
}
export interface OpenidClientAuthenticationFlowBindingOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#browser_id OpenidClient#browser_id}
  */
  readonly browserId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#direct_grant_id OpenidClient#direct_grant_id}
  */
  readonly directGrantId?: string;
}

export function openidClientAuthenticationFlowBindingOverridesToTerraform(struct?: OpenidClientAuthenticationFlowBindingOverridesOutputReference | OpenidClientAuthenticationFlowBindingOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    browser_id: cdktf.stringToTerraform(struct!.browserId),
    direct_grant_id: cdktf.stringToTerraform(struct!.directGrantId),
  }
}


export function openidClientAuthenticationFlowBindingOverridesToHclTerraform(struct?: OpenidClientAuthenticationFlowBindingOverridesOutputReference | OpenidClientAuthenticationFlowBindingOverrides): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    browser_id: {
      value: cdktf.stringToHclTerraform(struct!.browserId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direct_grant_id: {
      value: cdktf.stringToHclTerraform(struct!.directGrantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenidClientAuthenticationFlowBindingOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenidClientAuthenticationFlowBindingOverrides | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._browserId !== undefined) {
      hasAnyValues = true;
      internalValueResult.browserId = this._browserId;
    }
    if (this._directGrantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.directGrantId = this._directGrantId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenidClientAuthenticationFlowBindingOverrides | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._browserId = undefined;
      this._directGrantId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._browserId = value.browserId;
      this._directGrantId = value.directGrantId;
    }
  }

  // browser_id - computed: false, optional: true, required: false
  private _browserId?: string; 
  public get browserId() {
    return this.getStringAttribute('browser_id');
  }
  public set browserId(value: string) {
    this._browserId = value;
  }
  public resetBrowserId() {
    this._browserId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserIdInput() {
    return this._browserId;
  }

  // direct_grant_id - computed: false, optional: true, required: false
  private _directGrantId?: string; 
  public get directGrantId() {
    return this.getStringAttribute('direct_grant_id');
  }
  public set directGrantId(value: string) {
    this._directGrantId = value;
  }
  public resetDirectGrantId() {
    this._directGrantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directGrantIdInput() {
    return this._directGrantId;
  }
}
export interface OpenidClientAuthorization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#allow_remote_resource_management OpenidClient#allow_remote_resource_management}
  */
  readonly allowRemoteResourceManagement?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#decision_strategy OpenidClient#decision_strategy}
  */
  readonly decisionStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#keep_defaults OpenidClient#keep_defaults}
  */
  readonly keepDefaults?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#policy_enforcement_mode OpenidClient#policy_enforcement_mode}
  */
  readonly policyEnforcementMode: string;
}

export function openidClientAuthorizationToTerraform(struct?: OpenidClientAuthorizationOutputReference | OpenidClientAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_remote_resource_management: cdktf.booleanToTerraform(struct!.allowRemoteResourceManagement),
    decision_strategy: cdktf.stringToTerraform(struct!.decisionStrategy),
    keep_defaults: cdktf.booleanToTerraform(struct!.keepDefaults),
    policy_enforcement_mode: cdktf.stringToTerraform(struct!.policyEnforcementMode),
  }
}


export function openidClientAuthorizationToHclTerraform(struct?: OpenidClientAuthorizationOutputReference | OpenidClientAuthorization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_remote_resource_management: {
      value: cdktf.booleanToHclTerraform(struct!.allowRemoteResourceManagement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    decision_strategy: {
      value: cdktf.stringToHclTerraform(struct!.decisionStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_defaults: {
      value: cdktf.booleanToHclTerraform(struct!.keepDefaults),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policy_enforcement_mode: {
      value: cdktf.stringToHclTerraform(struct!.policyEnforcementMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpenidClientAuthorizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): OpenidClientAuthorization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowRemoteResourceManagement !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowRemoteResourceManagement = this._allowRemoteResourceManagement;
    }
    if (this._decisionStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.decisionStrategy = this._decisionStrategy;
    }
    if (this._keepDefaults !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepDefaults = this._keepDefaults;
    }
    if (this._policyEnforcementMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyEnforcementMode = this._policyEnforcementMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpenidClientAuthorization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowRemoteResourceManagement = undefined;
      this._decisionStrategy = undefined;
      this._keepDefaults = undefined;
      this._policyEnforcementMode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowRemoteResourceManagement = value.allowRemoteResourceManagement;
      this._decisionStrategy = value.decisionStrategy;
      this._keepDefaults = value.keepDefaults;
      this._policyEnforcementMode = value.policyEnforcementMode;
    }
  }

  // allow_remote_resource_management - computed: false, optional: true, required: false
  private _allowRemoteResourceManagement?: boolean | cdktf.IResolvable; 
  public get allowRemoteResourceManagement() {
    return this.getBooleanAttribute('allow_remote_resource_management');
  }
  public set allowRemoteResourceManagement(value: boolean | cdktf.IResolvable) {
    this._allowRemoteResourceManagement = value;
  }
  public resetAllowRemoteResourceManagement() {
    this._allowRemoteResourceManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRemoteResourceManagementInput() {
    return this._allowRemoteResourceManagement;
  }

  // decision_strategy - computed: false, optional: true, required: false
  private _decisionStrategy?: string; 
  public get decisionStrategy() {
    return this.getStringAttribute('decision_strategy');
  }
  public set decisionStrategy(value: string) {
    this._decisionStrategy = value;
  }
  public resetDecisionStrategy() {
    this._decisionStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decisionStrategyInput() {
    return this._decisionStrategy;
  }

  // keep_defaults - computed: false, optional: true, required: false
  private _keepDefaults?: boolean | cdktf.IResolvable; 
  public get keepDefaults() {
    return this.getBooleanAttribute('keep_defaults');
  }
  public set keepDefaults(value: boolean | cdktf.IResolvable) {
    this._keepDefaults = value;
  }
  public resetKeepDefaults() {
    this._keepDefaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepDefaultsInput() {
    return this._keepDefaults;
  }

  // policy_enforcement_mode - computed: false, optional: false, required: true
  private _policyEnforcementMode?: string; 
  public get policyEnforcementMode() {
    return this.getStringAttribute('policy_enforcement_mode');
  }
  public set policyEnforcementMode(value: string) {
    this._policyEnforcementMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyEnforcementModeInput() {
    return this._policyEnforcementMode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client keycloak_openid_client}
*/
export class OpenidClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_openid_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpenidClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpenidClient to import
  * @param importFromId The id of the existing OpenidClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpenidClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_openid_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/openid_client keycloak_openid_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpenidClientConfig
  */
  public constructor(scope: Construct, id: string, config: OpenidClientConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_openid_client',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '5.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessTokenLifespan = config.accessTokenLifespan;
    this._accessType = config.accessType;
    this._adminUrl = config.adminUrl;
    this._allowRefreshTokenInStandardTokenExchange = config.allowRefreshTokenInStandardTokenExchange;
    this._alwaysDisplayInConsole = config.alwaysDisplayInConsole;
    this._backchannelLogoutRevokeOfflineSessions = config.backchannelLogoutRevokeOfflineSessions;
    this._backchannelLogoutSessionRequired = config.backchannelLogoutSessionRequired;
    this._backchannelLogoutUrl = config.backchannelLogoutUrl;
    this._baseUrl = config.baseUrl;
    this._clientAuthenticatorType = config.clientAuthenticatorType;
    this._clientId = config.clientId;
    this._clientOfflineSessionIdleTimeout = config.clientOfflineSessionIdleTimeout;
    this._clientOfflineSessionMaxLifespan = config.clientOfflineSessionMaxLifespan;
    this._clientSecret = config.clientSecret;
    this._clientSecretRegenerateWhenChanged = config.clientSecretRegenerateWhenChanged;
    this._clientSecretWo = config.clientSecretWo;
    this._clientSecretWoVersion = config.clientSecretWoVersion;
    this._clientSessionIdleTimeout = config.clientSessionIdleTimeout;
    this._clientSessionMaxLifespan = config.clientSessionMaxLifespan;
    this._consentRequired = config.consentRequired;
    this._consentScreenText = config.consentScreenText;
    this._description = config.description;
    this._directAccessGrantsEnabled = config.directAccessGrantsEnabled;
    this._displayOnConsentScreen = config.displayOnConsentScreen;
    this._enabled = config.enabled;
    this._excludeIssuerFromAuthResponse = config.excludeIssuerFromAuthResponse;
    this._excludeSessionStateFromAuthResponse = config.excludeSessionStateFromAuthResponse;
    this._extraConfig = config.extraConfig;
    this._frontchannelLogoutEnabled = config.frontchannelLogoutEnabled;
    this._frontchannelLogoutUrl = config.frontchannelLogoutUrl;
    this._fullScopeAllowed = config.fullScopeAllowed;
    this._id = config.id;
    this._implicitFlowEnabled = config.implicitFlowEnabled;
    this._import = config.import;
    this._loginTheme = config.loginTheme;
    this._name = config.name;
    this._oauth2DeviceAuthorizationGrantEnabled = config.oauth2DeviceAuthorizationGrantEnabled;
    this._oauth2DeviceCodeLifespan = config.oauth2DeviceCodeLifespan;
    this._oauth2DevicePollingInterval = config.oauth2DevicePollingInterval;
    this._pkceCodeChallengeMethod = config.pkceCodeChallengeMethod;
    this._realmId = config.realmId;
    this._rootUrl = config.rootUrl;
    this._serviceAccountsEnabled = config.serviceAccountsEnabled;
    this._standardFlowEnabled = config.standardFlowEnabled;
    this._standardTokenExchangeEnabled = config.standardTokenExchangeEnabled;
    this._useRefreshTokens = config.useRefreshTokens;
    this._useRefreshTokensClientCredentials = config.useRefreshTokensClientCredentials;
    this._validPostLogoutRedirectUris = config.validPostLogoutRedirectUris;
    this._validRedirectUris = config.validRedirectUris;
    this._webOrigins = config.webOrigins;
    this._authenticationFlowBindingOverrides.internalValue = config.authenticationFlowBindingOverrides;
    this._authorization.internalValue = config.authorization;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_token_lifespan - computed: true, optional: true, required: false
  private _accessTokenLifespan?: string; 
  public get accessTokenLifespan() {
    return this.getStringAttribute('access_token_lifespan');
  }
  public set accessTokenLifespan(value: string) {
    this._accessTokenLifespan = value;
  }
  public resetAccessTokenLifespan() {
    this._accessTokenLifespan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenLifespanInput() {
    return this._accessTokenLifespan;
  }

  // access_type - computed: false, optional: false, required: true
  private _accessType?: string; 
  public get accessType() {
    return this.getStringAttribute('access_type');
  }
  public set accessType(value: string) {
    this._accessType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTypeInput() {
    return this._accessType;
  }

  // admin_url - computed: true, optional: true, required: false
  private _adminUrl?: string; 
  public get adminUrl() {
    return this.getStringAttribute('admin_url');
  }
  public set adminUrl(value: string) {
    this._adminUrl = value;
  }
  public resetAdminUrl() {
    this._adminUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUrlInput() {
    return this._adminUrl;
  }

  // allow_refresh_token_in_standard_token_exchange - computed: false, optional: true, required: false
  private _allowRefreshTokenInStandardTokenExchange?: string; 
  public get allowRefreshTokenInStandardTokenExchange() {
    return this.getStringAttribute('allow_refresh_token_in_standard_token_exchange');
  }
  public set allowRefreshTokenInStandardTokenExchange(value: string) {
    this._allowRefreshTokenInStandardTokenExchange = value;
  }
  public resetAllowRefreshTokenInStandardTokenExchange() {
    this._allowRefreshTokenInStandardTokenExchange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRefreshTokenInStandardTokenExchangeInput() {
    return this._allowRefreshTokenInStandardTokenExchange;
  }

  // always_display_in_console - computed: false, optional: true, required: false
  private _alwaysDisplayInConsole?: boolean | cdktf.IResolvable; 
  public get alwaysDisplayInConsole() {
    return this.getBooleanAttribute('always_display_in_console');
  }
  public set alwaysDisplayInConsole(value: boolean | cdktf.IResolvable) {
    this._alwaysDisplayInConsole = value;
  }
  public resetAlwaysDisplayInConsole() {
    this._alwaysDisplayInConsole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alwaysDisplayInConsoleInput() {
    return this._alwaysDisplayInConsole;
  }

  // backchannel_logout_revoke_offline_sessions - computed: false, optional: true, required: false
  private _backchannelLogoutRevokeOfflineSessions?: boolean | cdktf.IResolvable; 
  public get backchannelLogoutRevokeOfflineSessions() {
    return this.getBooleanAttribute('backchannel_logout_revoke_offline_sessions');
  }
  public set backchannelLogoutRevokeOfflineSessions(value: boolean | cdktf.IResolvable) {
    this._backchannelLogoutRevokeOfflineSessions = value;
  }
  public resetBackchannelLogoutRevokeOfflineSessions() {
    this._backchannelLogoutRevokeOfflineSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backchannelLogoutRevokeOfflineSessionsInput() {
    return this._backchannelLogoutRevokeOfflineSessions;
  }

  // backchannel_logout_session_required - computed: false, optional: true, required: false
  private _backchannelLogoutSessionRequired?: boolean | cdktf.IResolvable; 
  public get backchannelLogoutSessionRequired() {
    return this.getBooleanAttribute('backchannel_logout_session_required');
  }
  public set backchannelLogoutSessionRequired(value: boolean | cdktf.IResolvable) {
    this._backchannelLogoutSessionRequired = value;
  }
  public resetBackchannelLogoutSessionRequired() {
    this._backchannelLogoutSessionRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backchannelLogoutSessionRequiredInput() {
    return this._backchannelLogoutSessionRequired;
  }

  // backchannel_logout_url - computed: false, optional: true, required: false
  private _backchannelLogoutUrl?: string; 
  public get backchannelLogoutUrl() {
    return this.getStringAttribute('backchannel_logout_url');
  }
  public set backchannelLogoutUrl(value: string) {
    this._backchannelLogoutUrl = value;
  }
  public resetBackchannelLogoutUrl() {
    this._backchannelLogoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backchannelLogoutUrlInput() {
    return this._backchannelLogoutUrl;
  }

  // base_url - computed: true, optional: true, required: false
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

  // client_authenticator_type - computed: false, optional: true, required: false
  private _clientAuthenticatorType?: string; 
  public get clientAuthenticatorType() {
    return this.getStringAttribute('client_authenticator_type');
  }
  public set clientAuthenticatorType(value: string) {
    this._clientAuthenticatorType = value;
  }
  public resetClientAuthenticatorType() {
    this._clientAuthenticatorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthenticatorTypeInput() {
    return this._clientAuthenticatorType;
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

  // client_offline_session_idle_timeout - computed: true, optional: true, required: false
  private _clientOfflineSessionIdleTimeout?: string; 
  public get clientOfflineSessionIdleTimeout() {
    return this.getStringAttribute('client_offline_session_idle_timeout');
  }
  public set clientOfflineSessionIdleTimeout(value: string) {
    this._clientOfflineSessionIdleTimeout = value;
  }
  public resetClientOfflineSessionIdleTimeout() {
    this._clientOfflineSessionIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientOfflineSessionIdleTimeoutInput() {
    return this._clientOfflineSessionIdleTimeout;
  }

  // client_offline_session_max_lifespan - computed: true, optional: true, required: false
  private _clientOfflineSessionMaxLifespan?: string; 
  public get clientOfflineSessionMaxLifespan() {
    return this.getStringAttribute('client_offline_session_max_lifespan');
  }
  public set clientOfflineSessionMaxLifespan(value: string) {
    this._clientOfflineSessionMaxLifespan = value;
  }
  public resetClientOfflineSessionMaxLifespan() {
    this._clientOfflineSessionMaxLifespan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientOfflineSessionMaxLifespanInput() {
    return this._clientOfflineSessionMaxLifespan;
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

  // client_secret_regenerate_when_changed - computed: false, optional: true, required: false
  private _clientSecretRegenerateWhenChanged?: { [key: string]: string }; 
  public get clientSecretRegenerateWhenChanged() {
    return this.getStringMapAttribute('client_secret_regenerate_when_changed');
  }
  public set clientSecretRegenerateWhenChanged(value: { [key: string]: string }) {
    this._clientSecretRegenerateWhenChanged = value;
  }
  public resetClientSecretRegenerateWhenChanged() {
    this._clientSecretRegenerateWhenChanged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretRegenerateWhenChangedInput() {
    return this._clientSecretRegenerateWhenChanged;
  }

  // client_secret_wo - computed: false, optional: true, required: false
  private _clientSecretWo?: string; 
  public get clientSecretWo() {
    return this.getStringAttribute('client_secret_wo');
  }
  public set clientSecretWo(value: string) {
    this._clientSecretWo = value;
  }
  public resetClientSecretWo() {
    this._clientSecretWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretWoInput() {
    return this._clientSecretWo;
  }

  // client_secret_wo_version - computed: false, optional: true, required: false
  private _clientSecretWoVersion?: number; 
  public get clientSecretWoVersion() {
    return this.getNumberAttribute('client_secret_wo_version');
  }
  public set clientSecretWoVersion(value: number) {
    this._clientSecretWoVersion = value;
  }
  public resetClientSecretWoVersion() {
    this._clientSecretWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretWoVersionInput() {
    return this._clientSecretWoVersion;
  }

  // client_session_idle_timeout - computed: true, optional: true, required: false
  private _clientSessionIdleTimeout?: string; 
  public get clientSessionIdleTimeout() {
    return this.getStringAttribute('client_session_idle_timeout');
  }
  public set clientSessionIdleTimeout(value: string) {
    this._clientSessionIdleTimeout = value;
  }
  public resetClientSessionIdleTimeout() {
    this._clientSessionIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSessionIdleTimeoutInput() {
    return this._clientSessionIdleTimeout;
  }

  // client_session_max_lifespan - computed: true, optional: true, required: false
  private _clientSessionMaxLifespan?: string; 
  public get clientSessionMaxLifespan() {
    return this.getStringAttribute('client_session_max_lifespan');
  }
  public set clientSessionMaxLifespan(value: string) {
    this._clientSessionMaxLifespan = value;
  }
  public resetClientSessionMaxLifespan() {
    this._clientSessionMaxLifespan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSessionMaxLifespanInput() {
    return this._clientSessionMaxLifespan;
  }

  // consent_required - computed: true, optional: true, required: false
  private _consentRequired?: boolean | cdktf.IResolvable; 
  public get consentRequired() {
    return this.getBooleanAttribute('consent_required');
  }
  public set consentRequired(value: boolean | cdktf.IResolvable) {
    this._consentRequired = value;
  }
  public resetConsentRequired() {
    this._consentRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consentRequiredInput() {
    return this._consentRequired;
  }

  // consent_screen_text - computed: true, optional: true, required: false
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

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // direct_access_grants_enabled - computed: true, optional: true, required: false
  private _directAccessGrantsEnabled?: boolean | cdktf.IResolvable; 
  public get directAccessGrantsEnabled() {
    return this.getBooleanAttribute('direct_access_grants_enabled');
  }
  public set directAccessGrantsEnabled(value: boolean | cdktf.IResolvable) {
    this._directAccessGrantsEnabled = value;
  }
  public resetDirectAccessGrantsEnabled() {
    this._directAccessGrantsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directAccessGrantsEnabledInput() {
    return this._directAccessGrantsEnabled;
  }

  // display_on_consent_screen - computed: true, optional: true, required: false
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

  // exclude_issuer_from_auth_response - computed: true, optional: true, required: false
  private _excludeIssuerFromAuthResponse?: boolean | cdktf.IResolvable; 
  public get excludeIssuerFromAuthResponse() {
    return this.getBooleanAttribute('exclude_issuer_from_auth_response');
  }
  public set excludeIssuerFromAuthResponse(value: boolean | cdktf.IResolvable) {
    this._excludeIssuerFromAuthResponse = value;
  }
  public resetExcludeIssuerFromAuthResponse() {
    this._excludeIssuerFromAuthResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeIssuerFromAuthResponseInput() {
    return this._excludeIssuerFromAuthResponse;
  }

  // exclude_session_state_from_auth_response - computed: true, optional: true, required: false
  private _excludeSessionStateFromAuthResponse?: boolean | cdktf.IResolvable; 
  public get excludeSessionStateFromAuthResponse() {
    return this.getBooleanAttribute('exclude_session_state_from_auth_response');
  }
  public set excludeSessionStateFromAuthResponse(value: boolean | cdktf.IResolvable) {
    this._excludeSessionStateFromAuthResponse = value;
  }
  public resetExcludeSessionStateFromAuthResponse() {
    this._excludeSessionStateFromAuthResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeSessionStateFromAuthResponseInput() {
    return this._excludeSessionStateFromAuthResponse;
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

  // frontchannel_logout_enabled - computed: true, optional: true, required: false
  private _frontchannelLogoutEnabled?: boolean | cdktf.IResolvable; 
  public get frontchannelLogoutEnabled() {
    return this.getBooleanAttribute('frontchannel_logout_enabled');
  }
  public set frontchannelLogoutEnabled(value: boolean | cdktf.IResolvable) {
    this._frontchannelLogoutEnabled = value;
  }
  public resetFrontchannelLogoutEnabled() {
    this._frontchannelLogoutEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontchannelLogoutEnabledInput() {
    return this._frontchannelLogoutEnabled;
  }

  // frontchannel_logout_url - computed: false, optional: true, required: false
  private _frontchannelLogoutUrl?: string; 
  public get frontchannelLogoutUrl() {
    return this.getStringAttribute('frontchannel_logout_url');
  }
  public set frontchannelLogoutUrl(value: string) {
    this._frontchannelLogoutUrl = value;
  }
  public resetFrontchannelLogoutUrl() {
    this._frontchannelLogoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frontchannelLogoutUrlInput() {
    return this._frontchannelLogoutUrl;
  }

  // full_scope_allowed - computed: false, optional: true, required: false
  private _fullScopeAllowed?: boolean | cdktf.IResolvable; 
  public get fullScopeAllowed() {
    return this.getBooleanAttribute('full_scope_allowed');
  }
  public set fullScopeAllowed(value: boolean | cdktf.IResolvable) {
    this._fullScopeAllowed = value;
  }
  public resetFullScopeAllowed() {
    this._fullScopeAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullScopeAllowedInput() {
    return this._fullScopeAllowed;
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

  // implicit_flow_enabled - computed: true, optional: true, required: false
  private _implicitFlowEnabled?: boolean | cdktf.IResolvable; 
  public get implicitFlowEnabled() {
    return this.getBooleanAttribute('implicit_flow_enabled');
  }
  public set implicitFlowEnabled(value: boolean | cdktf.IResolvable) {
    this._implicitFlowEnabled = value;
  }
  public resetImplicitFlowEnabled() {
    this._implicitFlowEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get implicitFlowEnabledInput() {
    return this._implicitFlowEnabled;
  }

  // import - computed: false, optional: true, required: false
  private _import?: boolean | cdktf.IResolvable; 
  public get import() {
    return this.getBooleanAttribute('import');
  }
  public set import(value: boolean | cdktf.IResolvable) {
    this._import = value;
  }
  public resetImport() {
    this._import = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importInput() {
    return this._import;
  }

  // login_theme - computed: false, optional: true, required: false
  private _loginTheme?: string; 
  public get loginTheme() {
    return this.getStringAttribute('login_theme');
  }
  public set loginTheme(value: string) {
    this._loginTheme = value;
  }
  public resetLoginTheme() {
    this._loginTheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginThemeInput() {
    return this._loginTheme;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // pkce_code_challenge_method - computed: false, optional: true, required: false
  private _pkceCodeChallengeMethod?: string; 
  public get pkceCodeChallengeMethod() {
    return this.getStringAttribute('pkce_code_challenge_method');
  }
  public set pkceCodeChallengeMethod(value: string) {
    this._pkceCodeChallengeMethod = value;
  }
  public resetPkceCodeChallengeMethod() {
    this._pkceCodeChallengeMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkceCodeChallengeMethodInput() {
    return this._pkceCodeChallengeMethod;
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

  // root_url - computed: true, optional: true, required: false
  private _rootUrl?: string; 
  public get rootUrl() {
    return this.getStringAttribute('root_url');
  }
  public set rootUrl(value: string) {
    this._rootUrl = value;
  }
  public resetRootUrl() {
    this._rootUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootUrlInput() {
    return this._rootUrl;
  }

  // service_account_user_id - computed: true, optional: false, required: false
  public get serviceAccountUserId() {
    return this.getStringAttribute('service_account_user_id');
  }

  // service_accounts_enabled - computed: true, optional: true, required: false
  private _serviceAccountsEnabled?: boolean | cdktf.IResolvable; 
  public get serviceAccountsEnabled() {
    return this.getBooleanAttribute('service_accounts_enabled');
  }
  public set serviceAccountsEnabled(value: boolean | cdktf.IResolvable) {
    this._serviceAccountsEnabled = value;
  }
  public resetServiceAccountsEnabled() {
    this._serviceAccountsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountsEnabledInput() {
    return this._serviceAccountsEnabled;
  }

  // standard_flow_enabled - computed: true, optional: true, required: false
  private _standardFlowEnabled?: boolean | cdktf.IResolvable; 
  public get standardFlowEnabled() {
    return this.getBooleanAttribute('standard_flow_enabled');
  }
  public set standardFlowEnabled(value: boolean | cdktf.IResolvable) {
    this._standardFlowEnabled = value;
  }
  public resetStandardFlowEnabled() {
    this._standardFlowEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardFlowEnabledInput() {
    return this._standardFlowEnabled;
  }

  // standard_token_exchange_enabled - computed: false, optional: true, required: false
  private _standardTokenExchangeEnabled?: boolean | cdktf.IResolvable; 
  public get standardTokenExchangeEnabled() {
    return this.getBooleanAttribute('standard_token_exchange_enabled');
  }
  public set standardTokenExchangeEnabled(value: boolean | cdktf.IResolvable) {
    this._standardTokenExchangeEnabled = value;
  }
  public resetStandardTokenExchangeEnabled() {
    this._standardTokenExchangeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardTokenExchangeEnabledInput() {
    return this._standardTokenExchangeEnabled;
  }

  // use_refresh_tokens - computed: false, optional: true, required: false
  private _useRefreshTokens?: boolean | cdktf.IResolvable; 
  public get useRefreshTokens() {
    return this.getBooleanAttribute('use_refresh_tokens');
  }
  public set useRefreshTokens(value: boolean | cdktf.IResolvable) {
    this._useRefreshTokens = value;
  }
  public resetUseRefreshTokens() {
    this._useRefreshTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRefreshTokensInput() {
    return this._useRefreshTokens;
  }

  // use_refresh_tokens_client_credentials - computed: false, optional: true, required: false
  private _useRefreshTokensClientCredentials?: boolean | cdktf.IResolvable; 
  public get useRefreshTokensClientCredentials() {
    return this.getBooleanAttribute('use_refresh_tokens_client_credentials');
  }
  public set useRefreshTokensClientCredentials(value: boolean | cdktf.IResolvable) {
    this._useRefreshTokensClientCredentials = value;
  }
  public resetUseRefreshTokensClientCredentials() {
    this._useRefreshTokensClientCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useRefreshTokensClientCredentialsInput() {
    return this._useRefreshTokensClientCredentials;
  }

  // valid_post_logout_redirect_uris - computed: true, optional: true, required: false
  private _validPostLogoutRedirectUris?: string[]; 
  public get validPostLogoutRedirectUris() {
    return cdktf.Fn.tolist(this.getListAttribute('valid_post_logout_redirect_uris'));
  }
  public set validPostLogoutRedirectUris(value: string[]) {
    this._validPostLogoutRedirectUris = value;
  }
  public resetValidPostLogoutRedirectUris() {
    this._validPostLogoutRedirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validPostLogoutRedirectUrisInput() {
    return this._validPostLogoutRedirectUris;
  }

  // valid_redirect_uris - computed: true, optional: true, required: false
  private _validRedirectUris?: string[]; 
  public get validRedirectUris() {
    return cdktf.Fn.tolist(this.getListAttribute('valid_redirect_uris'));
  }
  public set validRedirectUris(value: string[]) {
    this._validRedirectUris = value;
  }
  public resetValidRedirectUris() {
    this._validRedirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validRedirectUrisInput() {
    return this._validRedirectUris;
  }

  // web_origins - computed: true, optional: true, required: false
  private _webOrigins?: string[]; 
  public get webOrigins() {
    return cdktf.Fn.tolist(this.getListAttribute('web_origins'));
  }
  public set webOrigins(value: string[]) {
    this._webOrigins = value;
  }
  public resetWebOrigins() {
    this._webOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webOriginsInput() {
    return this._webOrigins;
  }

  // authentication_flow_binding_overrides - computed: false, optional: true, required: false
  private _authenticationFlowBindingOverrides = new OpenidClientAuthenticationFlowBindingOverridesOutputReference(this, "authentication_flow_binding_overrides");
  public get authenticationFlowBindingOverrides() {
    return this._authenticationFlowBindingOverrides;
  }
  public putAuthenticationFlowBindingOverrides(value: OpenidClientAuthenticationFlowBindingOverrides) {
    this._authenticationFlowBindingOverrides.internalValue = value;
  }
  public resetAuthenticationFlowBindingOverrides() {
    this._authenticationFlowBindingOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationFlowBindingOverridesInput() {
    return this._authenticationFlowBindingOverrides.internalValue;
  }

  // authorization - computed: false, optional: true, required: false
  private _authorization = new OpenidClientAuthorizationOutputReference(this, "authorization");
  public get authorization() {
    return this._authorization;
  }
  public putAuthorization(value: OpenidClientAuthorization) {
    this._authorization.internalValue = value;
  }
  public resetAuthorization() {
    this._authorization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationInput() {
    return this._authorization.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_token_lifespan: cdktf.stringToTerraform(this._accessTokenLifespan),
      access_type: cdktf.stringToTerraform(this._accessType),
      admin_url: cdktf.stringToTerraform(this._adminUrl),
      allow_refresh_token_in_standard_token_exchange: cdktf.stringToTerraform(this._allowRefreshTokenInStandardTokenExchange),
      always_display_in_console: cdktf.booleanToTerraform(this._alwaysDisplayInConsole),
      backchannel_logout_revoke_offline_sessions: cdktf.booleanToTerraform(this._backchannelLogoutRevokeOfflineSessions),
      backchannel_logout_session_required: cdktf.booleanToTerraform(this._backchannelLogoutSessionRequired),
      backchannel_logout_url: cdktf.stringToTerraform(this._backchannelLogoutUrl),
      base_url: cdktf.stringToTerraform(this._baseUrl),
      client_authenticator_type: cdktf.stringToTerraform(this._clientAuthenticatorType),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_offline_session_idle_timeout: cdktf.stringToTerraform(this._clientOfflineSessionIdleTimeout),
      client_offline_session_max_lifespan: cdktf.stringToTerraform(this._clientOfflineSessionMaxLifespan),
      client_secret: cdktf.stringToTerraform(this._clientSecret),
      client_secret_regenerate_when_changed: cdktf.hashMapper(cdktf.stringToTerraform)(this._clientSecretRegenerateWhenChanged),
      client_secret_wo: cdktf.stringToTerraform(this._clientSecretWo),
      client_secret_wo_version: cdktf.numberToTerraform(this._clientSecretWoVersion),
      client_session_idle_timeout: cdktf.stringToTerraform(this._clientSessionIdleTimeout),
      client_session_max_lifespan: cdktf.stringToTerraform(this._clientSessionMaxLifespan),
      consent_required: cdktf.booleanToTerraform(this._consentRequired),
      consent_screen_text: cdktf.stringToTerraform(this._consentScreenText),
      description: cdktf.stringToTerraform(this._description),
      direct_access_grants_enabled: cdktf.booleanToTerraform(this._directAccessGrantsEnabled),
      display_on_consent_screen: cdktf.booleanToTerraform(this._displayOnConsentScreen),
      enabled: cdktf.booleanToTerraform(this._enabled),
      exclude_issuer_from_auth_response: cdktf.booleanToTerraform(this._excludeIssuerFromAuthResponse),
      exclude_session_state_from_auth_response: cdktf.booleanToTerraform(this._excludeSessionStateFromAuthResponse),
      extra_config: cdktf.hashMapper(cdktf.stringToTerraform)(this._extraConfig),
      frontchannel_logout_enabled: cdktf.booleanToTerraform(this._frontchannelLogoutEnabled),
      frontchannel_logout_url: cdktf.stringToTerraform(this._frontchannelLogoutUrl),
      full_scope_allowed: cdktf.booleanToTerraform(this._fullScopeAllowed),
      id: cdktf.stringToTerraform(this._id),
      implicit_flow_enabled: cdktf.booleanToTerraform(this._implicitFlowEnabled),
      import: cdktf.booleanToTerraform(this._import),
      login_theme: cdktf.stringToTerraform(this._loginTheme),
      name: cdktf.stringToTerraform(this._name),
      oauth2_device_authorization_grant_enabled: cdktf.booleanToTerraform(this._oauth2DeviceAuthorizationGrantEnabled),
      oauth2_device_code_lifespan: cdktf.stringToTerraform(this._oauth2DeviceCodeLifespan),
      oauth2_device_polling_interval: cdktf.stringToTerraform(this._oauth2DevicePollingInterval),
      pkce_code_challenge_method: cdktf.stringToTerraform(this._pkceCodeChallengeMethod),
      realm_id: cdktf.stringToTerraform(this._realmId),
      root_url: cdktf.stringToTerraform(this._rootUrl),
      service_accounts_enabled: cdktf.booleanToTerraform(this._serviceAccountsEnabled),
      standard_flow_enabled: cdktf.booleanToTerraform(this._standardFlowEnabled),
      standard_token_exchange_enabled: cdktf.booleanToTerraform(this._standardTokenExchangeEnabled),
      use_refresh_tokens: cdktf.booleanToTerraform(this._useRefreshTokens),
      use_refresh_tokens_client_credentials: cdktf.booleanToTerraform(this._useRefreshTokensClientCredentials),
      valid_post_logout_redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(this._validPostLogoutRedirectUris),
      valid_redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(this._validRedirectUris),
      web_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(this._webOrigins),
      authentication_flow_binding_overrides: openidClientAuthenticationFlowBindingOverridesToTerraform(this._authenticationFlowBindingOverrides.internalValue),
      authorization: openidClientAuthorizationToTerraform(this._authorization.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_token_lifespan: {
        value: cdktf.stringToHclTerraform(this._accessTokenLifespan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_type: {
        value: cdktf.stringToHclTerraform(this._accessType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_url: {
        value: cdktf.stringToHclTerraform(this._adminUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_refresh_token_in_standard_token_exchange: {
        value: cdktf.stringToHclTerraform(this._allowRefreshTokenInStandardTokenExchange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      always_display_in_console: {
        value: cdktf.booleanToHclTerraform(this._alwaysDisplayInConsole),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backchannel_logout_revoke_offline_sessions: {
        value: cdktf.booleanToHclTerraform(this._backchannelLogoutRevokeOfflineSessions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backchannel_logout_session_required: {
        value: cdktf.booleanToHclTerraform(this._backchannelLogoutSessionRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backchannel_logout_url: {
        value: cdktf.stringToHclTerraform(this._backchannelLogoutUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      base_url: {
        value: cdktf.stringToHclTerraform(this._baseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_authenticator_type: {
        value: cdktf.stringToHclTerraform(this._clientAuthenticatorType),
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
      client_offline_session_idle_timeout: {
        value: cdktf.stringToHclTerraform(this._clientOfflineSessionIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_offline_session_max_lifespan: {
        value: cdktf.stringToHclTerraform(this._clientOfflineSessionMaxLifespan),
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
      client_secret_regenerate_when_changed: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._clientSecretRegenerateWhenChanged),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      client_secret_wo: {
        value: cdktf.stringToHclTerraform(this._clientSecretWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret_wo_version: {
        value: cdktf.numberToHclTerraform(this._clientSecretWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_session_idle_timeout: {
        value: cdktf.stringToHclTerraform(this._clientSessionIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_session_max_lifespan: {
        value: cdktf.stringToHclTerraform(this._clientSessionMaxLifespan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consent_required: {
        value: cdktf.booleanToHclTerraform(this._consentRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      consent_screen_text: {
        value: cdktf.stringToHclTerraform(this._consentScreenText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direct_access_grants_enabled: {
        value: cdktf.booleanToHclTerraform(this._directAccessGrantsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      display_on_consent_screen: {
        value: cdktf.booleanToHclTerraform(this._displayOnConsentScreen),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exclude_issuer_from_auth_response: {
        value: cdktf.booleanToHclTerraform(this._excludeIssuerFromAuthResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exclude_session_state_from_auth_response: {
        value: cdktf.booleanToHclTerraform(this._excludeSessionStateFromAuthResponse),
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
      frontchannel_logout_enabled: {
        value: cdktf.booleanToHclTerraform(this._frontchannelLogoutEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      frontchannel_logout_url: {
        value: cdktf.stringToHclTerraform(this._frontchannelLogoutUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      full_scope_allowed: {
        value: cdktf.booleanToHclTerraform(this._fullScopeAllowed),
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
      implicit_flow_enabled: {
        value: cdktf.booleanToHclTerraform(this._implicitFlowEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      import: {
        value: cdktf.booleanToHclTerraform(this._import),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      login_theme: {
        value: cdktf.stringToHclTerraform(this._loginTheme),
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
      pkce_code_challenge_method: {
        value: cdktf.stringToHclTerraform(this._pkceCodeChallengeMethod),
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
      root_url: {
        value: cdktf.stringToHclTerraform(this._rootUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_accounts_enabled: {
        value: cdktf.booleanToHclTerraform(this._serviceAccountsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      standard_flow_enabled: {
        value: cdktf.booleanToHclTerraform(this._standardFlowEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      standard_token_exchange_enabled: {
        value: cdktf.booleanToHclTerraform(this._standardTokenExchangeEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_refresh_tokens: {
        value: cdktf.booleanToHclTerraform(this._useRefreshTokens),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_refresh_tokens_client_credentials: {
        value: cdktf.booleanToHclTerraform(this._useRefreshTokensClientCredentials),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      valid_post_logout_redirect_uris: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._validPostLogoutRedirectUris),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      valid_redirect_uris: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._validRedirectUris),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      web_origins: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._webOrigins),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      authentication_flow_binding_overrides: {
        value: openidClientAuthenticationFlowBindingOverridesToHclTerraform(this._authenticationFlowBindingOverrides.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OpenidClientAuthenticationFlowBindingOverridesList",
      },
      authorization: {
        value: openidClientAuthorizationToHclTerraform(this._authorization.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OpenidClientAuthorizationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
