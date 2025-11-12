// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OauthServerSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Determines whether the user is prompted to enter or confirm the activation code after authenticating or before. Supported values are `AFTER_AUTHENTICATION` and `BEFORE_AUTHENTICATION`. The default value is `AFTER_AUTHENTICATION`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#activation_code_check_mode OauthServerSettings#activation_code_check_mode}
  */
  readonly activationCodeCheckMode?: string;
  /**
  * The password credential validator reference that is used for authenticating access to the OAuth Administrative Web Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#admin_web_service_pcv_ref OauthServerSettings#admin_web_service_pcv_ref}
  */
  readonly adminWebServicePcvRef?: OauthServerSettingsAdminWebServicePcvRef;
  /**
  * Allow unidentified clients to request extension grants. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#allow_unidentified_client_extension_grants OauthServerSettings#allow_unidentified_client_extension_grants}
  */
  readonly allowUnidentifiedClientExtensionGrants?: boolean | cdktf.IResolvable;
  /**
  * Allow unidentified clients to request resource owner password credentials grants. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#allow_unidentified_client_ro_creds OauthServerSettings#allow_unidentified_client_ro_creds}
  */
  readonly allowUnidentifiedClientRoCreds?: boolean | cdktf.IResolvable;
  /**
  * The list of allowed origins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#allowed_origins OauthServerSettings#allowed_origins}
  */
  readonly allowedOrigins?: string[];
  /**
  * Attribute from the external consent adapter's contract, intended for storing approved authorization details returned by the external consent page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#approved_authorization_detail_attribute OauthServerSettings#approved_authorization_detail_attribute}
  */
  readonly approvedAuthorizationDetailAttribute?: string;
  /**
  * Attribute from the external consent adapter's contract, intended for storing approved scopes returned by the external consent page.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#approved_scopes_attribute OauthServerSettings#approved_scopes_attribute}
  */
  readonly approvedScopesAttribute?: string;
  /**
  * The ID of the Access Token Manager used for OAuth enabled grant management.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#atm_id_for_oauth_grant_management OauthServerSettings#atm_id_for_oauth_grant_management}
  */
  readonly atmIdForOauthGrantManagement?: string;
  /**
  * The authorization code entropy, in bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#authorization_code_entropy OauthServerSettings#authorization_code_entropy}
  */
  readonly authorizationCodeEntropy: number;
  /**
  * The authorization code timeout, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#authorization_code_timeout OauthServerSettings#authorization_code_timeout}
  */
  readonly authorizationCodeTimeout: number;
  /**
  * Indicates if the Activation Code Confirmation page should be bypassed if 'verification_url_complete' is used by the end user to authorize a device. The default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#bypass_activation_code_confirmation OauthServerSettings#bypass_activation_code_confirmation}
  */
  readonly bypassActivationCodeConfirmation?: boolean | cdktf.IResolvable;
  /**
  * Bypass authorization for previously approved consents. The default value is `false`. Supported in PF version `12.0` or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#bypass_authorization_for_approved_consents OauthServerSettings#bypass_authorization_for_approved_consents}
  */
  readonly bypassAuthorizationForApprovedConsents?: boolean | cdktf.IResolvable;
  /**
  * Bypass authorization for previously approved persistent grants. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#bypass_authorization_for_approved_grants OauthServerSettings#bypass_authorization_for_approved_grants}
  */
  readonly bypassAuthorizationForApprovedGrants?: boolean | cdktf.IResolvable;
  /**
  * The length of time in minutes that client secrets will be retained as secondary secrets after secret change. The default value is `0`, which will disable secondary client secret retention.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#client_secret_retention_period OauthServerSettings#client_secret_retention_period}
  */
  readonly clientSecretRetentionPeriod?: number;
  /**
  * The consent lifetime in days. The default value is `-1`, which indicates an indefinite amount of time. Supported in PF version `12.0` or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#consent_lifetime_days OauthServerSettings#consent_lifetime_days}
  */
  readonly consentLifetimeDays?: number;
  /**
  * The default scope description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#default_scope_description OauthServerSettings#default_scope_description}
  */
  readonly defaultScopeDescription?: string;
  /**
  * The amount of time client should wait between polling requests, in seconds. The default is `5` seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#device_polling_interval OauthServerSettings#device_polling_interval}
  */
  readonly devicePollingInterval?: number;
  /**
  * Determines whether PKCE's 'plain' code challenge method will be disallowed. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#disallow_plain_pkce OauthServerSettings#disallow_plain_pkce}
  */
  readonly disallowPlainPkce?: boolean | cdktf.IResolvable;
  /**
  * Determines whether Demonstrating Proof-of-Possession (DPoP) proof JWT replay prevention is enforced. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#dpop_proof_enforce_replay_prevention OauthServerSettings#dpop_proof_enforce_replay_prevention}
  */
  readonly dpopProofEnforceReplayPrevention?: boolean | cdktf.IResolvable;
  /**
  * The lifetime, in seconds, of the Demonstrating Proof-of-Possession (DPoP) proof JWT. The default value is `120`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#dpop_proof_lifetime_seconds OauthServerSettings#dpop_proof_lifetime_seconds}
  */
  readonly dpopProofLifetimeSeconds?: number;
  /**
  * Determines whether nonce is required in the Demonstrating Proof-of-Possession (DPoP) proof JWT. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#dpop_proof_require_nonce OauthServerSettings#dpop_proof_require_nonce}
  */
  readonly dpopProofRequireNonce?: boolean | cdktf.IResolvable;
  /**
  * Indicates if cookies should be used for state tracking when the user authorization endpoint is operating in authentication API redirectless mode. The default is `false`. Supported in PF version `12.1` or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#enable_cookieless_user_authorization_authentication_api OauthServerSettings#enable_cookieless_user_authorization_authentication_api}
  */
  readonly enableCookielessUserAuthorizationAuthenticationApi?: boolean | cdktf.IResolvable;
  /**
  * The list of exclusive scope groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#exclusive_scope_groups OauthServerSettings#exclusive_scope_groups}
  */
  readonly exclusiveScopeGroups?: OauthServerSettingsExclusiveScopeGroups[] | cdktf.IResolvable;
  /**
  * The list of exclusive scopes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#exclusive_scopes OauthServerSettings#exclusive_scopes}
  */
  readonly exclusiveScopes?: OauthServerSettingsExclusiveScopes[] | cdktf.IResolvable;
  /**
  * Determines whether the authorization server's issuer value is added to the authorization response or not. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#include_issuer_in_authorization_response OauthServerSettings#include_issuer_in_authorization_response}
  */
  readonly includeIssuerInAuthorizationResponse?: boolean | cdktf.IResolvable;
  /**
  * The lifetime, in seconds, of the JWT Secured authorization response. The default value is `600`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#jwt_secured_authorization_response_mode_lifetime OauthServerSettings#jwt_secured_authorization_response_mode_lifetime}
  */
  readonly jwtSecuredAuthorizationResponseModeLifetime?: number;
  /**
  * Determines whether offline_access requires the prompt parameter value be 'consent' or not. The value will be reset to default if the `require_offline_access_scope_to_issue_refresh_tokens` attribute is set to `false`. The default value is `false`. Supported in PF version `12.1` or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#offline_access_require_consent_prompt OauthServerSettings#offline_access_require_consent_prompt}
  */
  readonly offlineAccessRequireConsentPrompt?: boolean | cdktf.IResolvable;
  /**
  * The entropy of pushed authorization request references, in bytes. The default value is `24`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#par_reference_length OauthServerSettings#par_reference_length}
  */
  readonly parReferenceLength?: number;
  /**
  * The timeout, in seconds, of the pushed authorization request reference. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#par_reference_timeout OauthServerSettings#par_reference_timeout}
  */
  readonly parReferenceTimeout?: number;
  /**
  * The status of pushed authorization request support. Supported values are `DISABLED`, `ENABLED`, and `REQUIRED`. The default value is `ENABLED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#par_status OauthServerSettings#par_status}
  */
  readonly parStatus?: string;
  /**
  * The 'device_code' and 'user_code' timeout, in seconds. The default is `600` seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#pending_authorization_timeout OauthServerSettings#pending_authorization_timeout}
  */
  readonly pendingAuthorizationTimeout?: number;
  /**
  * The persistent grant contract defines attributes that are associated with OAuth persistent grants.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#persistent_grant_contract OauthServerSettings#persistent_grant_contract}
  */
  readonly persistentGrantContract?: OauthServerSettingsPersistentGrantContract;
  /**
  * The persistent grant idle timeout. The default value is `30` (days). `-1` indicates an indefinite amount of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#persistent_grant_idle_timeout OauthServerSettings#persistent_grant_idle_timeout}
  */
  readonly persistentGrantIdleTimeout?: number;
  /**
  * The persistent grant idle timeout time unit. Supported values are `MINUTES`, `DAYS`, and `HOURS`. The default value is `DAYS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#persistent_grant_idle_timeout_time_unit OauthServerSettings#persistent_grant_idle_timeout_time_unit}
  */
  readonly persistentGrantIdleTimeoutTimeUnit?: string;
  /**
  * The persistent grant lifetime. The default value is `-1`, which indicates an indefinite amount of time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#persistent_grant_lifetime OauthServerSettings#persistent_grant_lifetime}
  */
  readonly persistentGrantLifetime?: number;
  /**
  * The persistent grant lifetime unit. Supported values are `MINUTES`, `DAYS`, and `HOURS`. The default value is `DAYS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#persistent_grant_lifetime_unit OauthServerSettings#persistent_grant_lifetime_unit}
  */
  readonly persistentGrantLifetimeUnit?: string;
  /**
  * The grant types that the OAuth AS can reuse rather than creating a new grant for each request. Only `IMPLICIT` or `AUTHORIZATION_CODE` or `RESOURCE_OWNER_CREDENTIALS` are valid grant types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#persistent_grant_reuse_grant_types OauthServerSettings#persistent_grant_reuse_grant_types}
  */
  readonly persistentGrantReuseGrantTypes?: string[];
  /**
  * The minimum interval to roll refresh tokens.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#refresh_rolling_interval OauthServerSettings#refresh_rolling_interval}
  */
  readonly refreshRollingInterval: number;
  /**
  * The refresh token rolling interval time unit. Supported values are `SECONDS`, `MINUTES`, and `HOURS`. The default value is `HOURS`. Supported in PF version `12.1` or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#refresh_rolling_interval_time_unit OauthServerSettings#refresh_rolling_interval_time_unit}
  */
  readonly refreshRollingIntervalTimeUnit?: string;
  /**
  * The refresh token length in number of characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#refresh_token_length OauthServerSettings#refresh_token_length}
  */
  readonly refreshTokenLength: number;
  /**
  * The grace period that a rolled refresh token remains valid in seconds. The default value is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#refresh_token_rolling_grace_period OauthServerSettings#refresh_token_rolling_grace_period}
  */
  readonly refreshTokenRollingGracePeriod?: number;
  /**
  * The Registered Authorization Path is concatenated to PingFederate base URL to generate 'verification_url' and 'verification_url_complete' values in a Device Authorization request. PingFederate listens to this path if specified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#registered_authorization_path OauthServerSettings#registered_authorization_path}
  */
  readonly registeredAuthorizationPath?: string;
  /**
  * Determines whether offline_access scope is required to issue refresh tokens or not. The default value is `false`. Supported in PF version `12.1` or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#require_offline_access_scope_to_issue_refresh_tokens OauthServerSettings#require_offline_access_scope_to_issue_refresh_tokens}
  */
  readonly requireOfflineAccessScopeToIssueRefreshTokens?: boolean | cdktf.IResolvable;
  /**
  * Indicates if an ID token should be returned during the device authorization grant flow when the 'openid' scope is approved. The default is `false`. Supported in PF version `12.2` or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#return_id_token_on_open_id_with_device_authz_grant OauthServerSettings#return_id_token_on_open_id_with_device_authz_grant}
  */
  readonly returnIdTokenOnOpenIdWithDeviceAuthzGrant?: boolean | cdktf.IResolvable;
  /**
  * The roll refresh token values default policy. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#roll_refresh_token_values OauthServerSettings#roll_refresh_token_values}
  */
  readonly rollRefreshTokenValues?: boolean | cdktf.IResolvable;
  /**
  * The OAuth scope to validate when accessing grant management service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#scope_for_oauth_grant_management OauthServerSettings#scope_for_oauth_grant_management}
  */
  readonly scopeForOauthGrantManagement?: string;
  /**
  * The list of common scope groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#scope_groups OauthServerSettings#scope_groups}
  */
  readonly scopeGroups?: OauthServerSettingsScopeGroups[] | cdktf.IResolvable;
  /**
  * The list of common scopes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#scopes OauthServerSettings#scopes}
  */
  readonly scopes?: OauthServerSettingsScopes[] | cdktf.IResolvable;
  /**
  * The token endpoint base URL used to validate the 'aud' claim during Private Key JWT Client Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#token_endpoint_base_url OauthServerSettings#token_endpoint_base_url}
  */
  readonly tokenEndpointBaseUrl?: string;
  /**
  * Determines whether user sessions are tracked for logout. The default value is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#track_user_sessions_for_logout OauthServerSettings#track_user_sessions_for_logout}
  */
  readonly trackUserSessionsForLogout?: boolean | cdktf.IResolvable;
  /**
  * Adapter ID of the external consent adapter to be used for the consent page user interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#user_authorization_consent_adapter OauthServerSettings#user_authorization_consent_adapter}
  */
  readonly userAuthorizationConsentAdapter?: string;
  /**
  * User Authorization Consent Page setting to use PingFederate's internal consent page or an external system. Supported values are `INTERNAL` and `ADAPTER`. The default value is `INTERNAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#user_authorization_consent_page_setting OauthServerSettings#user_authorization_consent_page_setting}
  */
  readonly userAuthorizationConsentPageSetting?: string;
  /**
  * The URL used to generate 'verification_url' and 'verification_url_complete' values in a Device Authorization request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#user_authorization_url OauthServerSettings#user_authorization_url}
  */
  readonly userAuthorizationUrl?: string;
}
export interface OauthServerSettingsAdminWebServicePcvRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#id OauthServerSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function oauthServerSettingsAdminWebServicePcvRefToTerraform(struct?: OauthServerSettingsAdminWebServicePcvRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function oauthServerSettingsAdminWebServicePcvRefToHclTerraform(struct?: OauthServerSettingsAdminWebServicePcvRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OauthServerSettingsAdminWebServicePcvRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthServerSettingsAdminWebServicePcvRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthServerSettingsAdminWebServicePcvRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface OauthServerSettingsExclusiveScopeGroups {
  /**
  * The description of the scope group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#description OauthServerSettings#description}
  */
  readonly description: string;
  /**
  * The name of the scope group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#name OauthServerSettings#name}
  */
  readonly name: string;
  /**
  * The set of scopes for this scope group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#scopes OauthServerSettings#scopes}
  */
  readonly scopes: string[];
}

export function oauthServerSettingsExclusiveScopeGroupsToTerraform(struct?: OauthServerSettingsExclusiveScopeGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
  }
}


export function oauthServerSettingsExclusiveScopeGroupsToHclTerraform(struct?: OauthServerSettingsExclusiveScopeGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OauthServerSettingsExclusiveScopeGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OauthServerSettingsExclusiveScopeGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthServerSettingsExclusiveScopeGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._scopes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._scopes = value.scopes;
    }
  }

  // description - computed: true, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // name - computed: true, optional: false, required: true
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

  // scopes - computed: true, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}

export class OauthServerSettingsExclusiveScopeGroupsList extends cdktf.ComplexList {
  public internalValue? : OauthServerSettingsExclusiveScopeGroups[] | cdktf.IResolvable

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
  public get(index: number): OauthServerSettingsExclusiveScopeGroupsOutputReference {
    return new OauthServerSettingsExclusiveScopeGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthServerSettingsExclusiveScopes {
  /**
  * The description of the scope that appears when the user is prompted for authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#description OauthServerSettings#description}
  */
  readonly description: string;
  /**
  * True if the scope is dynamic. The default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#dynamic OauthServerSettings#dynamic}
  */
  readonly dynamic?: boolean | cdktf.IResolvable;
  /**
  * The name of the scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#name OauthServerSettings#name}
  */
  readonly name: string;
}

export function oauthServerSettingsExclusiveScopesToTerraform(struct?: OauthServerSettingsExclusiveScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dynamic: cdktf.booleanToTerraform(struct!.dynamic),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function oauthServerSettingsExclusiveScopesToHclTerraform(struct?: OauthServerSettingsExclusiveScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic: {
      value: cdktf.booleanToHclTerraform(struct!.dynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OauthServerSettingsExclusiveScopesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OauthServerSettingsExclusiveScopes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamic = this._dynamic;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthServerSettingsExclusiveScopes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dynamic = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._dynamic = value.dynamic;
      this._name = value.name;
    }
  }

  // description - computed: true, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dynamic - computed: true, optional: true, required: false
  private _dynamic?: boolean | cdktf.IResolvable; 
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
  }
  public set dynamic(value: boolean | cdktf.IResolvable) {
    this._dynamic = value;
  }
  public resetDynamic() {
    this._dynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicInput() {
    return this._dynamic;
  }

  // name - computed: true, optional: false, required: true
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
}

export class OauthServerSettingsExclusiveScopesList extends cdktf.ComplexList {
  public internalValue? : OauthServerSettingsExclusiveScopes[] | cdktf.IResolvable

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
  public get(index: number): OauthServerSettingsExclusiveScopesOutputReference {
    return new OauthServerSettingsExclusiveScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthServerSettingsPersistentGrantContractCoreAttributes {
}

export function oauthServerSettingsPersistentGrantContractCoreAttributesToTerraform(struct?: OauthServerSettingsPersistentGrantContractCoreAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function oauthServerSettingsPersistentGrantContractCoreAttributesToHclTerraform(struct?: OauthServerSettingsPersistentGrantContractCoreAttributes): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class OauthServerSettingsPersistentGrantContractCoreAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthServerSettingsPersistentGrantContractCoreAttributes | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthServerSettingsPersistentGrantContractCoreAttributes | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class OauthServerSettingsPersistentGrantContractCoreAttributesList extends cdktf.ComplexList {

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
  public get(index: number): OauthServerSettingsPersistentGrantContractCoreAttributesOutputReference {
    return new OauthServerSettingsPersistentGrantContractCoreAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthServerSettingsPersistentGrantContractExtendedAttributes {
  /**
  * The name of this attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#name OauthServerSettings#name}
  */
  readonly name: string;
}

export function oauthServerSettingsPersistentGrantContractExtendedAttributesToTerraform(struct?: OauthServerSettingsPersistentGrantContractExtendedAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function oauthServerSettingsPersistentGrantContractExtendedAttributesToHclTerraform(struct?: OauthServerSettingsPersistentGrantContractExtendedAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OauthServerSettingsPersistentGrantContractExtendedAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OauthServerSettingsPersistentGrantContractExtendedAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthServerSettingsPersistentGrantContractExtendedAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
    }
  }

  // name - computed: true, optional: false, required: true
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
}

export class OauthServerSettingsPersistentGrantContractExtendedAttributesList extends cdktf.ComplexList {
  public internalValue? : OauthServerSettingsPersistentGrantContractExtendedAttributes[] | cdktf.IResolvable

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
  public get(index: number): OauthServerSettingsPersistentGrantContractExtendedAttributesOutputReference {
    return new OauthServerSettingsPersistentGrantContractExtendedAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthServerSettingsPersistentGrantContract {
  /**
  * A list of additional attributes for the persistent grant contract.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#extended_attributes OauthServerSettings#extended_attributes}
  */
  readonly extendedAttributes?: OauthServerSettingsPersistentGrantContractExtendedAttributes[] | cdktf.IResolvable;
}

export function oauthServerSettingsPersistentGrantContractToTerraform(struct?: OauthServerSettingsPersistentGrantContract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extended_attributes: cdktf.listMapper(oauthServerSettingsPersistentGrantContractExtendedAttributesToTerraform, false)(struct!.extendedAttributes),
  }
}


export function oauthServerSettingsPersistentGrantContractToHclTerraform(struct?: OauthServerSettingsPersistentGrantContract | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extended_attributes: {
      value: cdktf.listMapperHcl(oauthServerSettingsPersistentGrantContractExtendedAttributesToHclTerraform, false)(struct!.extendedAttributes),
      isBlock: true,
      type: "set",
      storageClassType: "OauthServerSettingsPersistentGrantContractExtendedAttributesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OauthServerSettingsPersistentGrantContractOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthServerSettingsPersistentGrantContract | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extendedAttributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extendedAttributes = this._extendedAttributes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthServerSettingsPersistentGrantContract | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extendedAttributes.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extendedAttributes.internalValue = value.extendedAttributes;
    }
  }

  // core_attributes - computed: true, optional: false, required: false
  private _coreAttributes = new OauthServerSettingsPersistentGrantContractCoreAttributesList(this, "core_attributes", true);
  public get coreAttributes() {
    return this._coreAttributes;
  }

  // extended_attributes - computed: true, optional: true, required: false
  private _extendedAttributes = new OauthServerSettingsPersistentGrantContractExtendedAttributesList(this, "extended_attributes", true);
  public get extendedAttributes() {
    return this._extendedAttributes;
  }
  public putExtendedAttributes(value: OauthServerSettingsPersistentGrantContractExtendedAttributes[] | cdktf.IResolvable) {
    this._extendedAttributes.internalValue = value;
  }
  public resetExtendedAttributes() {
    this._extendedAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedAttributesInput() {
    return this._extendedAttributes.internalValue;
  }
}
export interface OauthServerSettingsScopeGroups {
  /**
  * The description of the scope group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#description OauthServerSettings#description}
  */
  readonly description: string;
  /**
  * The name of the scope group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#name OauthServerSettings#name}
  */
  readonly name: string;
  /**
  * The set of scopes for this scope group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#scopes OauthServerSettings#scopes}
  */
  readonly scopes: string[];
}

export function oauthServerSettingsScopeGroupsToTerraform(struct?: OauthServerSettingsScopeGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    name: cdktf.stringToTerraform(struct!.name),
    scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.scopes),
  }
}


export function oauthServerSettingsScopeGroupsToHclTerraform(struct?: OauthServerSettingsScopeGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.scopes),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OauthServerSettingsScopeGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OauthServerSettingsScopeGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._scopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopes = this._scopes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthServerSettingsScopeGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._scopes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._scopes = value.scopes;
    }
  }

  // description - computed: true, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // name - computed: true, optional: false, required: true
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

  // scopes - computed: true, optional: false, required: true
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }
}

export class OauthServerSettingsScopeGroupsList extends cdktf.ComplexList {
  public internalValue? : OauthServerSettingsScopeGroups[] | cdktf.IResolvable

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
  public get(index: number): OauthServerSettingsScopeGroupsOutputReference {
    return new OauthServerSettingsScopeGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthServerSettingsScopes {
  /**
  * The description of the scope that appears when the user is prompted for authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#description OauthServerSettings#description}
  */
  readonly description: string;
  /**
  * True if the scope is dynamic. The default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#dynamic OauthServerSettings#dynamic}
  */
  readonly dynamic?: boolean | cdktf.IResolvable;
  /**
  * The name of the scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#name OauthServerSettings#name}
  */
  readonly name: string;
}

export function oauthServerSettingsScopesToTerraform(struct?: OauthServerSettingsScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    dynamic: cdktf.booleanToTerraform(struct!.dynamic),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function oauthServerSettingsScopesToHclTerraform(struct?: OauthServerSettingsScopes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic: {
      value: cdktf.booleanToHclTerraform(struct!.dynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OauthServerSettingsScopesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): OauthServerSettingsScopes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._dynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamic = this._dynamic;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthServerSettingsScopes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._dynamic = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._dynamic = value.dynamic;
      this._name = value.name;
    }
  }

  // description - computed: true, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dynamic - computed: true, optional: true, required: false
  private _dynamic?: boolean | cdktf.IResolvable; 
  public get dynamic() {
    return this.getBooleanAttribute('dynamic');
  }
  public set dynamic(value: boolean | cdktf.IResolvable) {
    this._dynamic = value;
  }
  public resetDynamic() {
    this._dynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicInput() {
    return this._dynamic;
  }

  // name - computed: true, optional: false, required: true
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
}

export class OauthServerSettingsScopesList extends cdktf.ComplexList {
  public internalValue? : OauthServerSettingsScopes[] | cdktf.IResolvable

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
  public get(index: number): OauthServerSettingsScopesOutputReference {
    return new OauthServerSettingsScopesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings pingfederate_oauth_server_settings}
*/
export class OauthServerSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_oauth_server_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OauthServerSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OauthServerSettings to import
  * @param importFromId The id of the existing OauthServerSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OauthServerSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_oauth_server_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_server_settings pingfederate_oauth_server_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OauthServerSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: OauthServerSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_oauth_server_settings',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activationCodeCheckMode = config.activationCodeCheckMode;
    this._adminWebServicePcvRef.internalValue = config.adminWebServicePcvRef;
    this._allowUnidentifiedClientExtensionGrants = config.allowUnidentifiedClientExtensionGrants;
    this._allowUnidentifiedClientRoCreds = config.allowUnidentifiedClientRoCreds;
    this._allowedOrigins = config.allowedOrigins;
    this._approvedAuthorizationDetailAttribute = config.approvedAuthorizationDetailAttribute;
    this._approvedScopesAttribute = config.approvedScopesAttribute;
    this._atmIdForOauthGrantManagement = config.atmIdForOauthGrantManagement;
    this._authorizationCodeEntropy = config.authorizationCodeEntropy;
    this._authorizationCodeTimeout = config.authorizationCodeTimeout;
    this._bypassActivationCodeConfirmation = config.bypassActivationCodeConfirmation;
    this._bypassAuthorizationForApprovedConsents = config.bypassAuthorizationForApprovedConsents;
    this._bypassAuthorizationForApprovedGrants = config.bypassAuthorizationForApprovedGrants;
    this._clientSecretRetentionPeriod = config.clientSecretRetentionPeriod;
    this._consentLifetimeDays = config.consentLifetimeDays;
    this._defaultScopeDescription = config.defaultScopeDescription;
    this._devicePollingInterval = config.devicePollingInterval;
    this._disallowPlainPkce = config.disallowPlainPkce;
    this._dpopProofEnforceReplayPrevention = config.dpopProofEnforceReplayPrevention;
    this._dpopProofLifetimeSeconds = config.dpopProofLifetimeSeconds;
    this._dpopProofRequireNonce = config.dpopProofRequireNonce;
    this._enableCookielessUserAuthorizationAuthenticationApi = config.enableCookielessUserAuthorizationAuthenticationApi;
    this._exclusiveScopeGroups.internalValue = config.exclusiveScopeGroups;
    this._exclusiveScopes.internalValue = config.exclusiveScopes;
    this._includeIssuerInAuthorizationResponse = config.includeIssuerInAuthorizationResponse;
    this._jwtSecuredAuthorizationResponseModeLifetime = config.jwtSecuredAuthorizationResponseModeLifetime;
    this._offlineAccessRequireConsentPrompt = config.offlineAccessRequireConsentPrompt;
    this._parReferenceLength = config.parReferenceLength;
    this._parReferenceTimeout = config.parReferenceTimeout;
    this._parStatus = config.parStatus;
    this._pendingAuthorizationTimeout = config.pendingAuthorizationTimeout;
    this._persistentGrantContract.internalValue = config.persistentGrantContract;
    this._persistentGrantIdleTimeout = config.persistentGrantIdleTimeout;
    this._persistentGrantIdleTimeoutTimeUnit = config.persistentGrantIdleTimeoutTimeUnit;
    this._persistentGrantLifetime = config.persistentGrantLifetime;
    this._persistentGrantLifetimeUnit = config.persistentGrantLifetimeUnit;
    this._persistentGrantReuseGrantTypes = config.persistentGrantReuseGrantTypes;
    this._refreshRollingInterval = config.refreshRollingInterval;
    this._refreshRollingIntervalTimeUnit = config.refreshRollingIntervalTimeUnit;
    this._refreshTokenLength = config.refreshTokenLength;
    this._refreshTokenRollingGracePeriod = config.refreshTokenRollingGracePeriod;
    this._registeredAuthorizationPath = config.registeredAuthorizationPath;
    this._requireOfflineAccessScopeToIssueRefreshTokens = config.requireOfflineAccessScopeToIssueRefreshTokens;
    this._returnIdTokenOnOpenIdWithDeviceAuthzGrant = config.returnIdTokenOnOpenIdWithDeviceAuthzGrant;
    this._rollRefreshTokenValues = config.rollRefreshTokenValues;
    this._scopeForOauthGrantManagement = config.scopeForOauthGrantManagement;
    this._scopeGroups.internalValue = config.scopeGroups;
    this._scopes.internalValue = config.scopes;
    this._tokenEndpointBaseUrl = config.tokenEndpointBaseUrl;
    this._trackUserSessionsForLogout = config.trackUserSessionsForLogout;
    this._userAuthorizationConsentAdapter = config.userAuthorizationConsentAdapter;
    this._userAuthorizationConsentPageSetting = config.userAuthorizationConsentPageSetting;
    this._userAuthorizationUrl = config.userAuthorizationUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_code_check_mode - computed: true, optional: true, required: false
  private _activationCodeCheckMode?: string; 
  public get activationCodeCheckMode() {
    return this.getStringAttribute('activation_code_check_mode');
  }
  public set activationCodeCheckMode(value: string) {
    this._activationCodeCheckMode = value;
  }
  public resetActivationCodeCheckMode() {
    this._activationCodeCheckMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activationCodeCheckModeInput() {
    return this._activationCodeCheckMode;
  }

  // admin_web_service_pcv_ref - computed: false, optional: true, required: false
  private _adminWebServicePcvRef = new OauthServerSettingsAdminWebServicePcvRefOutputReference(this, "admin_web_service_pcv_ref");
  public get adminWebServicePcvRef() {
    return this._adminWebServicePcvRef;
  }
  public putAdminWebServicePcvRef(value: OauthServerSettingsAdminWebServicePcvRef) {
    this._adminWebServicePcvRef.internalValue = value;
  }
  public resetAdminWebServicePcvRef() {
    this._adminWebServicePcvRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminWebServicePcvRefInput() {
    return this._adminWebServicePcvRef.internalValue;
  }

  // allow_unidentified_client_extension_grants - computed: true, optional: true, required: false
  private _allowUnidentifiedClientExtensionGrants?: boolean | cdktf.IResolvable; 
  public get allowUnidentifiedClientExtensionGrants() {
    return this.getBooleanAttribute('allow_unidentified_client_extension_grants');
  }
  public set allowUnidentifiedClientExtensionGrants(value: boolean | cdktf.IResolvable) {
    this._allowUnidentifiedClientExtensionGrants = value;
  }
  public resetAllowUnidentifiedClientExtensionGrants() {
    this._allowUnidentifiedClientExtensionGrants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnidentifiedClientExtensionGrantsInput() {
    return this._allowUnidentifiedClientExtensionGrants;
  }

  // allow_unidentified_client_ro_creds - computed: true, optional: true, required: false
  private _allowUnidentifiedClientRoCreds?: boolean | cdktf.IResolvable; 
  public get allowUnidentifiedClientRoCreds() {
    return this.getBooleanAttribute('allow_unidentified_client_ro_creds');
  }
  public set allowUnidentifiedClientRoCreds(value: boolean | cdktf.IResolvable) {
    this._allowUnidentifiedClientRoCreds = value;
  }
  public resetAllowUnidentifiedClientRoCreds() {
    this._allowUnidentifiedClientRoCreds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnidentifiedClientRoCredsInput() {
    return this._allowUnidentifiedClientRoCreds;
  }

  // allowed_origins - computed: true, optional: true, required: false
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return cdktf.Fn.tolist(this.getListAttribute('allowed_origins'));
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  public resetAllowedOrigins() {
    this._allowedOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }

  // approved_authorization_detail_attribute - computed: false, optional: true, required: false
  private _approvedAuthorizationDetailAttribute?: string; 
  public get approvedAuthorizationDetailAttribute() {
    return this.getStringAttribute('approved_authorization_detail_attribute');
  }
  public set approvedAuthorizationDetailAttribute(value: string) {
    this._approvedAuthorizationDetailAttribute = value;
  }
  public resetApprovedAuthorizationDetailAttribute() {
    this._approvedAuthorizationDetailAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvedAuthorizationDetailAttributeInput() {
    return this._approvedAuthorizationDetailAttribute;
  }

  // approved_scopes_attribute - computed: false, optional: true, required: false
  private _approvedScopesAttribute?: string; 
  public get approvedScopesAttribute() {
    return this.getStringAttribute('approved_scopes_attribute');
  }
  public set approvedScopesAttribute(value: string) {
    this._approvedScopesAttribute = value;
  }
  public resetApprovedScopesAttribute() {
    this._approvedScopesAttribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvedScopesAttributeInput() {
    return this._approvedScopesAttribute;
  }

  // atm_id_for_oauth_grant_management - computed: true, optional: true, required: false
  private _atmIdForOauthGrantManagement?: string; 
  public get atmIdForOauthGrantManagement() {
    return this.getStringAttribute('atm_id_for_oauth_grant_management');
  }
  public set atmIdForOauthGrantManagement(value: string) {
    this._atmIdForOauthGrantManagement = value;
  }
  public resetAtmIdForOauthGrantManagement() {
    this._atmIdForOauthGrantManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get atmIdForOauthGrantManagementInput() {
    return this._atmIdForOauthGrantManagement;
  }

  // authorization_code_entropy - computed: false, optional: false, required: true
  private _authorizationCodeEntropy?: number; 
  public get authorizationCodeEntropy() {
    return this.getNumberAttribute('authorization_code_entropy');
  }
  public set authorizationCodeEntropy(value: number) {
    this._authorizationCodeEntropy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationCodeEntropyInput() {
    return this._authorizationCodeEntropy;
  }

  // authorization_code_timeout - computed: false, optional: false, required: true
  private _authorizationCodeTimeout?: number; 
  public get authorizationCodeTimeout() {
    return this.getNumberAttribute('authorization_code_timeout');
  }
  public set authorizationCodeTimeout(value: number) {
    this._authorizationCodeTimeout = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationCodeTimeoutInput() {
    return this._authorizationCodeTimeout;
  }

  // bypass_activation_code_confirmation - computed: true, optional: true, required: false
  private _bypassActivationCodeConfirmation?: boolean | cdktf.IResolvable; 
  public get bypassActivationCodeConfirmation() {
    return this.getBooleanAttribute('bypass_activation_code_confirmation');
  }
  public set bypassActivationCodeConfirmation(value: boolean | cdktf.IResolvable) {
    this._bypassActivationCodeConfirmation = value;
  }
  public resetBypassActivationCodeConfirmation() {
    this._bypassActivationCodeConfirmation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassActivationCodeConfirmationInput() {
    return this._bypassActivationCodeConfirmation;
  }

  // bypass_authorization_for_approved_consents - computed: true, optional: true, required: false
  private _bypassAuthorizationForApprovedConsents?: boolean | cdktf.IResolvable; 
  public get bypassAuthorizationForApprovedConsents() {
    return this.getBooleanAttribute('bypass_authorization_for_approved_consents');
  }
  public set bypassAuthorizationForApprovedConsents(value: boolean | cdktf.IResolvable) {
    this._bypassAuthorizationForApprovedConsents = value;
  }
  public resetBypassAuthorizationForApprovedConsents() {
    this._bypassAuthorizationForApprovedConsents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassAuthorizationForApprovedConsentsInput() {
    return this._bypassAuthorizationForApprovedConsents;
  }

  // bypass_authorization_for_approved_grants - computed: true, optional: true, required: false
  private _bypassAuthorizationForApprovedGrants?: boolean | cdktf.IResolvable; 
  public get bypassAuthorizationForApprovedGrants() {
    return this.getBooleanAttribute('bypass_authorization_for_approved_grants');
  }
  public set bypassAuthorizationForApprovedGrants(value: boolean | cdktf.IResolvable) {
    this._bypassAuthorizationForApprovedGrants = value;
  }
  public resetBypassAuthorizationForApprovedGrants() {
    this._bypassAuthorizationForApprovedGrants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassAuthorizationForApprovedGrantsInput() {
    return this._bypassAuthorizationForApprovedGrants;
  }

  // client_secret_retention_period - computed: true, optional: true, required: false
  private _clientSecretRetentionPeriod?: number; 
  public get clientSecretRetentionPeriod() {
    return this.getNumberAttribute('client_secret_retention_period');
  }
  public set clientSecretRetentionPeriod(value: number) {
    this._clientSecretRetentionPeriod = value;
  }
  public resetClientSecretRetentionPeriod() {
    this._clientSecretRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretRetentionPeriodInput() {
    return this._clientSecretRetentionPeriod;
  }

  // consent_lifetime_days - computed: true, optional: true, required: false
  private _consentLifetimeDays?: number; 
  public get consentLifetimeDays() {
    return this.getNumberAttribute('consent_lifetime_days');
  }
  public set consentLifetimeDays(value: number) {
    this._consentLifetimeDays = value;
  }
  public resetConsentLifetimeDays() {
    this._consentLifetimeDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consentLifetimeDaysInput() {
    return this._consentLifetimeDays;
  }

  // default_scope_description - computed: true, optional: true, required: false
  private _defaultScopeDescription?: string; 
  public get defaultScopeDescription() {
    return this.getStringAttribute('default_scope_description');
  }
  public set defaultScopeDescription(value: string) {
    this._defaultScopeDescription = value;
  }
  public resetDefaultScopeDescription() {
    this._defaultScopeDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultScopeDescriptionInput() {
    return this._defaultScopeDescription;
  }

  // device_polling_interval - computed: true, optional: true, required: false
  private _devicePollingInterval?: number; 
  public get devicePollingInterval() {
    return this.getNumberAttribute('device_polling_interval');
  }
  public set devicePollingInterval(value: number) {
    this._devicePollingInterval = value;
  }
  public resetDevicePollingInterval() {
    this._devicePollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePollingIntervalInput() {
    return this._devicePollingInterval;
  }

  // disallow_plain_pkce - computed: true, optional: true, required: false
  private _disallowPlainPkce?: boolean | cdktf.IResolvable; 
  public get disallowPlainPkce() {
    return this.getBooleanAttribute('disallow_plain_pkce');
  }
  public set disallowPlainPkce(value: boolean | cdktf.IResolvable) {
    this._disallowPlainPkce = value;
  }
  public resetDisallowPlainPkce() {
    this._disallowPlainPkce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowPlainPkceInput() {
    return this._disallowPlainPkce;
  }

  // dpop_proof_enforce_replay_prevention - computed: true, optional: true, required: false
  private _dpopProofEnforceReplayPrevention?: boolean | cdktf.IResolvable; 
  public get dpopProofEnforceReplayPrevention() {
    return this.getBooleanAttribute('dpop_proof_enforce_replay_prevention');
  }
  public set dpopProofEnforceReplayPrevention(value: boolean | cdktf.IResolvable) {
    this._dpopProofEnforceReplayPrevention = value;
  }
  public resetDpopProofEnforceReplayPrevention() {
    this._dpopProofEnforceReplayPrevention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpopProofEnforceReplayPreventionInput() {
    return this._dpopProofEnforceReplayPrevention;
  }

  // dpop_proof_lifetime_seconds - computed: true, optional: true, required: false
  private _dpopProofLifetimeSeconds?: number; 
  public get dpopProofLifetimeSeconds() {
    return this.getNumberAttribute('dpop_proof_lifetime_seconds');
  }
  public set dpopProofLifetimeSeconds(value: number) {
    this._dpopProofLifetimeSeconds = value;
  }
  public resetDpopProofLifetimeSeconds() {
    this._dpopProofLifetimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpopProofLifetimeSecondsInput() {
    return this._dpopProofLifetimeSeconds;
  }

  // dpop_proof_require_nonce - computed: true, optional: true, required: false
  private _dpopProofRequireNonce?: boolean | cdktf.IResolvable; 
  public get dpopProofRequireNonce() {
    return this.getBooleanAttribute('dpop_proof_require_nonce');
  }
  public set dpopProofRequireNonce(value: boolean | cdktf.IResolvable) {
    this._dpopProofRequireNonce = value;
  }
  public resetDpopProofRequireNonce() {
    this._dpopProofRequireNonce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dpopProofRequireNonceInput() {
    return this._dpopProofRequireNonce;
  }

  // enable_cookieless_user_authorization_authentication_api - computed: true, optional: true, required: false
  private _enableCookielessUserAuthorizationAuthenticationApi?: boolean | cdktf.IResolvable; 
  public get enableCookielessUserAuthorizationAuthenticationApi() {
    return this.getBooleanAttribute('enable_cookieless_user_authorization_authentication_api');
  }
  public set enableCookielessUserAuthorizationAuthenticationApi(value: boolean | cdktf.IResolvable) {
    this._enableCookielessUserAuthorizationAuthenticationApi = value;
  }
  public resetEnableCookielessUserAuthorizationAuthenticationApi() {
    this._enableCookielessUserAuthorizationAuthenticationApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCookielessUserAuthorizationAuthenticationApiInput() {
    return this._enableCookielessUserAuthorizationAuthenticationApi;
  }

  // exclusive_scope_groups - computed: true, optional: true, required: false
  private _exclusiveScopeGroups = new OauthServerSettingsExclusiveScopeGroupsList(this, "exclusive_scope_groups", true);
  public get exclusiveScopeGroups() {
    return this._exclusiveScopeGroups;
  }
  public putExclusiveScopeGroups(value: OauthServerSettingsExclusiveScopeGroups[] | cdktf.IResolvable) {
    this._exclusiveScopeGroups.internalValue = value;
  }
  public resetExclusiveScopeGroups() {
    this._exclusiveScopeGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveScopeGroupsInput() {
    return this._exclusiveScopeGroups.internalValue;
  }

  // exclusive_scopes - computed: true, optional: true, required: false
  private _exclusiveScopes = new OauthServerSettingsExclusiveScopesList(this, "exclusive_scopes", true);
  public get exclusiveScopes() {
    return this._exclusiveScopes;
  }
  public putExclusiveScopes(value: OauthServerSettingsExclusiveScopes[] | cdktf.IResolvable) {
    this._exclusiveScopes.internalValue = value;
  }
  public resetExclusiveScopes() {
    this._exclusiveScopes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveScopesInput() {
    return this._exclusiveScopes.internalValue;
  }

  // include_issuer_in_authorization_response - computed: true, optional: true, required: false
  private _includeIssuerInAuthorizationResponse?: boolean | cdktf.IResolvable; 
  public get includeIssuerInAuthorizationResponse() {
    return this.getBooleanAttribute('include_issuer_in_authorization_response');
  }
  public set includeIssuerInAuthorizationResponse(value: boolean | cdktf.IResolvable) {
    this._includeIssuerInAuthorizationResponse = value;
  }
  public resetIncludeIssuerInAuthorizationResponse() {
    this._includeIssuerInAuthorizationResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeIssuerInAuthorizationResponseInput() {
    return this._includeIssuerInAuthorizationResponse;
  }

  // jwt_secured_authorization_response_mode_lifetime - computed: true, optional: true, required: false
  private _jwtSecuredAuthorizationResponseModeLifetime?: number; 
  public get jwtSecuredAuthorizationResponseModeLifetime() {
    return this.getNumberAttribute('jwt_secured_authorization_response_mode_lifetime');
  }
  public set jwtSecuredAuthorizationResponseModeLifetime(value: number) {
    this._jwtSecuredAuthorizationResponseModeLifetime = value;
  }
  public resetJwtSecuredAuthorizationResponseModeLifetime() {
    this._jwtSecuredAuthorizationResponseModeLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtSecuredAuthorizationResponseModeLifetimeInput() {
    return this._jwtSecuredAuthorizationResponseModeLifetime;
  }

  // offline_access_require_consent_prompt - computed: true, optional: true, required: false
  private _offlineAccessRequireConsentPrompt?: boolean | cdktf.IResolvable; 
  public get offlineAccessRequireConsentPrompt() {
    return this.getBooleanAttribute('offline_access_require_consent_prompt');
  }
  public set offlineAccessRequireConsentPrompt(value: boolean | cdktf.IResolvable) {
    this._offlineAccessRequireConsentPrompt = value;
  }
  public resetOfflineAccessRequireConsentPrompt() {
    this._offlineAccessRequireConsentPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineAccessRequireConsentPromptInput() {
    return this._offlineAccessRequireConsentPrompt;
  }

  // par_reference_length - computed: true, optional: true, required: false
  private _parReferenceLength?: number; 
  public get parReferenceLength() {
    return this.getNumberAttribute('par_reference_length');
  }
  public set parReferenceLength(value: number) {
    this._parReferenceLength = value;
  }
  public resetParReferenceLength() {
    this._parReferenceLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parReferenceLengthInput() {
    return this._parReferenceLength;
  }

  // par_reference_timeout - computed: true, optional: true, required: false
  private _parReferenceTimeout?: number; 
  public get parReferenceTimeout() {
    return this.getNumberAttribute('par_reference_timeout');
  }
  public set parReferenceTimeout(value: number) {
    this._parReferenceTimeout = value;
  }
  public resetParReferenceTimeout() {
    this._parReferenceTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parReferenceTimeoutInput() {
    return this._parReferenceTimeout;
  }

  // par_status - computed: true, optional: true, required: false
  private _parStatus?: string; 
  public get parStatus() {
    return this.getStringAttribute('par_status');
  }
  public set parStatus(value: string) {
    this._parStatus = value;
  }
  public resetParStatus() {
    this._parStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parStatusInput() {
    return this._parStatus;
  }

  // pending_authorization_timeout - computed: true, optional: true, required: false
  private _pendingAuthorizationTimeout?: number; 
  public get pendingAuthorizationTimeout() {
    return this.getNumberAttribute('pending_authorization_timeout');
  }
  public set pendingAuthorizationTimeout(value: number) {
    this._pendingAuthorizationTimeout = value;
  }
  public resetPendingAuthorizationTimeout() {
    this._pendingAuthorizationTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingAuthorizationTimeoutInput() {
    return this._pendingAuthorizationTimeout;
  }

  // persistent_grant_contract - computed: true, optional: true, required: false
  private _persistentGrantContract = new OauthServerSettingsPersistentGrantContractOutputReference(this, "persistent_grant_contract");
  public get persistentGrantContract() {
    return this._persistentGrantContract;
  }
  public putPersistentGrantContract(value: OauthServerSettingsPersistentGrantContract) {
    this._persistentGrantContract.internalValue = value;
  }
  public resetPersistentGrantContract() {
    this._persistentGrantContract.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentGrantContractInput() {
    return this._persistentGrantContract.internalValue;
  }

  // persistent_grant_idle_timeout - computed: true, optional: true, required: false
  private _persistentGrantIdleTimeout?: number; 
  public get persistentGrantIdleTimeout() {
    return this.getNumberAttribute('persistent_grant_idle_timeout');
  }
  public set persistentGrantIdleTimeout(value: number) {
    this._persistentGrantIdleTimeout = value;
  }
  public resetPersistentGrantIdleTimeout() {
    this._persistentGrantIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentGrantIdleTimeoutInput() {
    return this._persistentGrantIdleTimeout;
  }

  // persistent_grant_idle_timeout_time_unit - computed: true, optional: true, required: false
  private _persistentGrantIdleTimeoutTimeUnit?: string; 
  public get persistentGrantIdleTimeoutTimeUnit() {
    return this.getStringAttribute('persistent_grant_idle_timeout_time_unit');
  }
  public set persistentGrantIdleTimeoutTimeUnit(value: string) {
    this._persistentGrantIdleTimeoutTimeUnit = value;
  }
  public resetPersistentGrantIdleTimeoutTimeUnit() {
    this._persistentGrantIdleTimeoutTimeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentGrantIdleTimeoutTimeUnitInput() {
    return this._persistentGrantIdleTimeoutTimeUnit;
  }

  // persistent_grant_lifetime - computed: true, optional: true, required: false
  private _persistentGrantLifetime?: number; 
  public get persistentGrantLifetime() {
    return this.getNumberAttribute('persistent_grant_lifetime');
  }
  public set persistentGrantLifetime(value: number) {
    this._persistentGrantLifetime = value;
  }
  public resetPersistentGrantLifetime() {
    this._persistentGrantLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentGrantLifetimeInput() {
    return this._persistentGrantLifetime;
  }

  // persistent_grant_lifetime_unit - computed: true, optional: true, required: false
  private _persistentGrantLifetimeUnit?: string; 
  public get persistentGrantLifetimeUnit() {
    return this.getStringAttribute('persistent_grant_lifetime_unit');
  }
  public set persistentGrantLifetimeUnit(value: string) {
    this._persistentGrantLifetimeUnit = value;
  }
  public resetPersistentGrantLifetimeUnit() {
    this._persistentGrantLifetimeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentGrantLifetimeUnitInput() {
    return this._persistentGrantLifetimeUnit;
  }

  // persistent_grant_reuse_grant_types - computed: true, optional: true, required: false
  private _persistentGrantReuseGrantTypes?: string[]; 
  public get persistentGrantReuseGrantTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('persistent_grant_reuse_grant_types'));
  }
  public set persistentGrantReuseGrantTypes(value: string[]) {
    this._persistentGrantReuseGrantTypes = value;
  }
  public resetPersistentGrantReuseGrantTypes() {
    this._persistentGrantReuseGrantTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentGrantReuseGrantTypesInput() {
    return this._persistentGrantReuseGrantTypes;
  }

  // refresh_rolling_interval - computed: false, optional: false, required: true
  private _refreshRollingInterval?: number; 
  public get refreshRollingInterval() {
    return this.getNumberAttribute('refresh_rolling_interval');
  }
  public set refreshRollingInterval(value: number) {
    this._refreshRollingInterval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshRollingIntervalInput() {
    return this._refreshRollingInterval;
  }

  // refresh_rolling_interval_time_unit - computed: true, optional: true, required: false
  private _refreshRollingIntervalTimeUnit?: string; 
  public get refreshRollingIntervalTimeUnit() {
    return this.getStringAttribute('refresh_rolling_interval_time_unit');
  }
  public set refreshRollingIntervalTimeUnit(value: string) {
    this._refreshRollingIntervalTimeUnit = value;
  }
  public resetRefreshRollingIntervalTimeUnit() {
    this._refreshRollingIntervalTimeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshRollingIntervalTimeUnitInput() {
    return this._refreshRollingIntervalTimeUnit;
  }

  // refresh_token_length - computed: false, optional: false, required: true
  private _refreshTokenLength?: number; 
  public get refreshTokenLength() {
    return this.getNumberAttribute('refresh_token_length');
  }
  public set refreshTokenLength(value: number) {
    this._refreshTokenLength = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenLengthInput() {
    return this._refreshTokenLength;
  }

  // refresh_token_rolling_grace_period - computed: true, optional: true, required: false
  private _refreshTokenRollingGracePeriod?: number; 
  public get refreshTokenRollingGracePeriod() {
    return this.getNumberAttribute('refresh_token_rolling_grace_period');
  }
  public set refreshTokenRollingGracePeriod(value: number) {
    this._refreshTokenRollingGracePeriod = value;
  }
  public resetRefreshTokenRollingGracePeriod() {
    this._refreshTokenRollingGracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenRollingGracePeriodInput() {
    return this._refreshTokenRollingGracePeriod;
  }

  // registered_authorization_path - computed: true, optional: true, required: false
  private _registeredAuthorizationPath?: string; 
  public get registeredAuthorizationPath() {
    return this.getStringAttribute('registered_authorization_path');
  }
  public set registeredAuthorizationPath(value: string) {
    this._registeredAuthorizationPath = value;
  }
  public resetRegisteredAuthorizationPath() {
    this._registeredAuthorizationPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registeredAuthorizationPathInput() {
    return this._registeredAuthorizationPath;
  }

  // require_offline_access_scope_to_issue_refresh_tokens - computed: true, optional: true, required: false
  private _requireOfflineAccessScopeToIssueRefreshTokens?: boolean | cdktf.IResolvable; 
  public get requireOfflineAccessScopeToIssueRefreshTokens() {
    return this.getBooleanAttribute('require_offline_access_scope_to_issue_refresh_tokens');
  }
  public set requireOfflineAccessScopeToIssueRefreshTokens(value: boolean | cdktf.IResolvable) {
    this._requireOfflineAccessScopeToIssueRefreshTokens = value;
  }
  public resetRequireOfflineAccessScopeToIssueRefreshTokens() {
    this._requireOfflineAccessScopeToIssueRefreshTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireOfflineAccessScopeToIssueRefreshTokensInput() {
    return this._requireOfflineAccessScopeToIssueRefreshTokens;
  }

  // return_id_token_on_open_id_with_device_authz_grant - computed: true, optional: true, required: false
  private _returnIdTokenOnOpenIdWithDeviceAuthzGrant?: boolean | cdktf.IResolvable; 
  public get returnIdTokenOnOpenIdWithDeviceAuthzGrant() {
    return this.getBooleanAttribute('return_id_token_on_open_id_with_device_authz_grant');
  }
  public set returnIdTokenOnOpenIdWithDeviceAuthzGrant(value: boolean | cdktf.IResolvable) {
    this._returnIdTokenOnOpenIdWithDeviceAuthzGrant = value;
  }
  public resetReturnIdTokenOnOpenIdWithDeviceAuthzGrant() {
    this._returnIdTokenOnOpenIdWithDeviceAuthzGrant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get returnIdTokenOnOpenIdWithDeviceAuthzGrantInput() {
    return this._returnIdTokenOnOpenIdWithDeviceAuthzGrant;
  }

  // roll_refresh_token_values - computed: true, optional: true, required: false
  private _rollRefreshTokenValues?: boolean | cdktf.IResolvable; 
  public get rollRefreshTokenValues() {
    return this.getBooleanAttribute('roll_refresh_token_values');
  }
  public set rollRefreshTokenValues(value: boolean | cdktf.IResolvable) {
    this._rollRefreshTokenValues = value;
  }
  public resetRollRefreshTokenValues() {
    this._rollRefreshTokenValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rollRefreshTokenValuesInput() {
    return this._rollRefreshTokenValues;
  }

  // scope_for_oauth_grant_management - computed: true, optional: true, required: false
  private _scopeForOauthGrantManagement?: string; 
  public get scopeForOauthGrantManagement() {
    return this.getStringAttribute('scope_for_oauth_grant_management');
  }
  public set scopeForOauthGrantManagement(value: string) {
    this._scopeForOauthGrantManagement = value;
  }
  public resetScopeForOauthGrantManagement() {
    this._scopeForOauthGrantManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeForOauthGrantManagementInput() {
    return this._scopeForOauthGrantManagement;
  }

  // scope_groups - computed: true, optional: true, required: false
  private _scopeGroups = new OauthServerSettingsScopeGroupsList(this, "scope_groups", true);
  public get scopeGroups() {
    return this._scopeGroups;
  }
  public putScopeGroups(value: OauthServerSettingsScopeGroups[] | cdktf.IResolvable) {
    this._scopeGroups.internalValue = value;
  }
  public resetScopeGroups() {
    this._scopeGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeGroupsInput() {
    return this._scopeGroups.internalValue;
  }

  // scopes - computed: true, optional: true, required: false
  private _scopes = new OauthServerSettingsScopesList(this, "scopes", true);
  public get scopes() {
    return this._scopes;
  }
  public putScopes(value: OauthServerSettingsScopes[] | cdktf.IResolvable) {
    this._scopes.internalValue = value;
  }
  public resetScopes() {
    this._scopes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes.internalValue;
  }

  // token_endpoint_base_url - computed: true, optional: true, required: false
  private _tokenEndpointBaseUrl?: string; 
  public get tokenEndpointBaseUrl() {
    return this.getStringAttribute('token_endpoint_base_url');
  }
  public set tokenEndpointBaseUrl(value: string) {
    this._tokenEndpointBaseUrl = value;
  }
  public resetTokenEndpointBaseUrl() {
    this._tokenEndpointBaseUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointBaseUrlInput() {
    return this._tokenEndpointBaseUrl;
  }

  // track_user_sessions_for_logout - computed: true, optional: true, required: false
  private _trackUserSessionsForLogout?: boolean | cdktf.IResolvable; 
  public get trackUserSessionsForLogout() {
    return this.getBooleanAttribute('track_user_sessions_for_logout');
  }
  public set trackUserSessionsForLogout(value: boolean | cdktf.IResolvable) {
    this._trackUserSessionsForLogout = value;
  }
  public resetTrackUserSessionsForLogout() {
    this._trackUserSessionsForLogout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackUserSessionsForLogoutInput() {
    return this._trackUserSessionsForLogout;
  }

  // user_authorization_consent_adapter - computed: false, optional: true, required: false
  private _userAuthorizationConsentAdapter?: string; 
  public get userAuthorizationConsentAdapter() {
    return this.getStringAttribute('user_authorization_consent_adapter');
  }
  public set userAuthorizationConsentAdapter(value: string) {
    this._userAuthorizationConsentAdapter = value;
  }
  public resetUserAuthorizationConsentAdapter() {
    this._userAuthorizationConsentAdapter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAuthorizationConsentAdapterInput() {
    return this._userAuthorizationConsentAdapter;
  }

  // user_authorization_consent_page_setting - computed: true, optional: true, required: false
  private _userAuthorizationConsentPageSetting?: string; 
  public get userAuthorizationConsentPageSetting() {
    return this.getStringAttribute('user_authorization_consent_page_setting');
  }
  public set userAuthorizationConsentPageSetting(value: string) {
    this._userAuthorizationConsentPageSetting = value;
  }
  public resetUserAuthorizationConsentPageSetting() {
    this._userAuthorizationConsentPageSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAuthorizationConsentPageSettingInput() {
    return this._userAuthorizationConsentPageSetting;
  }

  // user_authorization_url - computed: true, optional: true, required: false
  private _userAuthorizationUrl?: string; 
  public get userAuthorizationUrl() {
    return this.getStringAttribute('user_authorization_url');
  }
  public set userAuthorizationUrl(value: string) {
    this._userAuthorizationUrl = value;
  }
  public resetUserAuthorizationUrl() {
    this._userAuthorizationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAuthorizationUrlInput() {
    return this._userAuthorizationUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activation_code_check_mode: cdktf.stringToTerraform(this._activationCodeCheckMode),
      admin_web_service_pcv_ref: oauthServerSettingsAdminWebServicePcvRefToTerraform(this._adminWebServicePcvRef.internalValue),
      allow_unidentified_client_extension_grants: cdktf.booleanToTerraform(this._allowUnidentifiedClientExtensionGrants),
      allow_unidentified_client_ro_creds: cdktf.booleanToTerraform(this._allowUnidentifiedClientRoCreds),
      allowed_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedOrigins),
      approved_authorization_detail_attribute: cdktf.stringToTerraform(this._approvedAuthorizationDetailAttribute),
      approved_scopes_attribute: cdktf.stringToTerraform(this._approvedScopesAttribute),
      atm_id_for_oauth_grant_management: cdktf.stringToTerraform(this._atmIdForOauthGrantManagement),
      authorization_code_entropy: cdktf.numberToTerraform(this._authorizationCodeEntropy),
      authorization_code_timeout: cdktf.numberToTerraform(this._authorizationCodeTimeout),
      bypass_activation_code_confirmation: cdktf.booleanToTerraform(this._bypassActivationCodeConfirmation),
      bypass_authorization_for_approved_consents: cdktf.booleanToTerraform(this._bypassAuthorizationForApprovedConsents),
      bypass_authorization_for_approved_grants: cdktf.booleanToTerraform(this._bypassAuthorizationForApprovedGrants),
      client_secret_retention_period: cdktf.numberToTerraform(this._clientSecretRetentionPeriod),
      consent_lifetime_days: cdktf.numberToTerraform(this._consentLifetimeDays),
      default_scope_description: cdktf.stringToTerraform(this._defaultScopeDescription),
      device_polling_interval: cdktf.numberToTerraform(this._devicePollingInterval),
      disallow_plain_pkce: cdktf.booleanToTerraform(this._disallowPlainPkce),
      dpop_proof_enforce_replay_prevention: cdktf.booleanToTerraform(this._dpopProofEnforceReplayPrevention),
      dpop_proof_lifetime_seconds: cdktf.numberToTerraform(this._dpopProofLifetimeSeconds),
      dpop_proof_require_nonce: cdktf.booleanToTerraform(this._dpopProofRequireNonce),
      enable_cookieless_user_authorization_authentication_api: cdktf.booleanToTerraform(this._enableCookielessUserAuthorizationAuthenticationApi),
      exclusive_scope_groups: cdktf.listMapper(oauthServerSettingsExclusiveScopeGroupsToTerraform, false)(this._exclusiveScopeGroups.internalValue),
      exclusive_scopes: cdktf.listMapper(oauthServerSettingsExclusiveScopesToTerraform, false)(this._exclusiveScopes.internalValue),
      include_issuer_in_authorization_response: cdktf.booleanToTerraform(this._includeIssuerInAuthorizationResponse),
      jwt_secured_authorization_response_mode_lifetime: cdktf.numberToTerraform(this._jwtSecuredAuthorizationResponseModeLifetime),
      offline_access_require_consent_prompt: cdktf.booleanToTerraform(this._offlineAccessRequireConsentPrompt),
      par_reference_length: cdktf.numberToTerraform(this._parReferenceLength),
      par_reference_timeout: cdktf.numberToTerraform(this._parReferenceTimeout),
      par_status: cdktf.stringToTerraform(this._parStatus),
      pending_authorization_timeout: cdktf.numberToTerraform(this._pendingAuthorizationTimeout),
      persistent_grant_contract: oauthServerSettingsPersistentGrantContractToTerraform(this._persistentGrantContract.internalValue),
      persistent_grant_idle_timeout: cdktf.numberToTerraform(this._persistentGrantIdleTimeout),
      persistent_grant_idle_timeout_time_unit: cdktf.stringToTerraform(this._persistentGrantIdleTimeoutTimeUnit),
      persistent_grant_lifetime: cdktf.numberToTerraform(this._persistentGrantLifetime),
      persistent_grant_lifetime_unit: cdktf.stringToTerraform(this._persistentGrantLifetimeUnit),
      persistent_grant_reuse_grant_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._persistentGrantReuseGrantTypes),
      refresh_rolling_interval: cdktf.numberToTerraform(this._refreshRollingInterval),
      refresh_rolling_interval_time_unit: cdktf.stringToTerraform(this._refreshRollingIntervalTimeUnit),
      refresh_token_length: cdktf.numberToTerraform(this._refreshTokenLength),
      refresh_token_rolling_grace_period: cdktf.numberToTerraform(this._refreshTokenRollingGracePeriod),
      registered_authorization_path: cdktf.stringToTerraform(this._registeredAuthorizationPath),
      require_offline_access_scope_to_issue_refresh_tokens: cdktf.booleanToTerraform(this._requireOfflineAccessScopeToIssueRefreshTokens),
      return_id_token_on_open_id_with_device_authz_grant: cdktf.booleanToTerraform(this._returnIdTokenOnOpenIdWithDeviceAuthzGrant),
      roll_refresh_token_values: cdktf.booleanToTerraform(this._rollRefreshTokenValues),
      scope_for_oauth_grant_management: cdktf.stringToTerraform(this._scopeForOauthGrantManagement),
      scope_groups: cdktf.listMapper(oauthServerSettingsScopeGroupsToTerraform, false)(this._scopeGroups.internalValue),
      scopes: cdktf.listMapper(oauthServerSettingsScopesToTerraform, false)(this._scopes.internalValue),
      token_endpoint_base_url: cdktf.stringToTerraform(this._tokenEndpointBaseUrl),
      track_user_sessions_for_logout: cdktf.booleanToTerraform(this._trackUserSessionsForLogout),
      user_authorization_consent_adapter: cdktf.stringToTerraform(this._userAuthorizationConsentAdapter),
      user_authorization_consent_page_setting: cdktf.stringToTerraform(this._userAuthorizationConsentPageSetting),
      user_authorization_url: cdktf.stringToTerraform(this._userAuthorizationUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activation_code_check_mode: {
        value: cdktf.stringToHclTerraform(this._activationCodeCheckMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_web_service_pcv_ref: {
        value: oauthServerSettingsAdminWebServicePcvRefToHclTerraform(this._adminWebServicePcvRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OauthServerSettingsAdminWebServicePcvRef",
      },
      allow_unidentified_client_extension_grants: {
        value: cdktf.booleanToHclTerraform(this._allowUnidentifiedClientExtensionGrants),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_unidentified_client_ro_creds: {
        value: cdktf.booleanToHclTerraform(this._allowUnidentifiedClientRoCreds),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allowed_origins: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedOrigins),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      approved_authorization_detail_attribute: {
        value: cdktf.stringToHclTerraform(this._approvedAuthorizationDetailAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      approved_scopes_attribute: {
        value: cdktf.stringToHclTerraform(this._approvedScopesAttribute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      atm_id_for_oauth_grant_management: {
        value: cdktf.stringToHclTerraform(this._atmIdForOauthGrantManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authorization_code_entropy: {
        value: cdktf.numberToHclTerraform(this._authorizationCodeEntropy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      authorization_code_timeout: {
        value: cdktf.numberToHclTerraform(this._authorizationCodeTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bypass_activation_code_confirmation: {
        value: cdktf.booleanToHclTerraform(this._bypassActivationCodeConfirmation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bypass_authorization_for_approved_consents: {
        value: cdktf.booleanToHclTerraform(this._bypassAuthorizationForApprovedConsents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bypass_authorization_for_approved_grants: {
        value: cdktf.booleanToHclTerraform(this._bypassAuthorizationForApprovedGrants),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_secret_retention_period: {
        value: cdktf.numberToHclTerraform(this._clientSecretRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      consent_lifetime_days: {
        value: cdktf.numberToHclTerraform(this._consentLifetimeDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_scope_description: {
        value: cdktf.stringToHclTerraform(this._defaultScopeDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_polling_interval: {
        value: cdktf.numberToHclTerraform(this._devicePollingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disallow_plain_pkce: {
        value: cdktf.booleanToHclTerraform(this._disallowPlainPkce),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dpop_proof_enforce_replay_prevention: {
        value: cdktf.booleanToHclTerraform(this._dpopProofEnforceReplayPrevention),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dpop_proof_lifetime_seconds: {
        value: cdktf.numberToHclTerraform(this._dpopProofLifetimeSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dpop_proof_require_nonce: {
        value: cdktf.booleanToHclTerraform(this._dpopProofRequireNonce),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_cookieless_user_authorization_authentication_api: {
        value: cdktf.booleanToHclTerraform(this._enableCookielessUserAuthorizationAuthenticationApi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exclusive_scope_groups: {
        value: cdktf.listMapperHcl(oauthServerSettingsExclusiveScopeGroupsToHclTerraform, false)(this._exclusiveScopeGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OauthServerSettingsExclusiveScopeGroupsList",
      },
      exclusive_scopes: {
        value: cdktf.listMapperHcl(oauthServerSettingsExclusiveScopesToHclTerraform, false)(this._exclusiveScopes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OauthServerSettingsExclusiveScopesList",
      },
      include_issuer_in_authorization_response: {
        value: cdktf.booleanToHclTerraform(this._includeIssuerInAuthorizationResponse),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jwt_secured_authorization_response_mode_lifetime: {
        value: cdktf.numberToHclTerraform(this._jwtSecuredAuthorizationResponseModeLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offline_access_require_consent_prompt: {
        value: cdktf.booleanToHclTerraform(this._offlineAccessRequireConsentPrompt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      par_reference_length: {
        value: cdktf.numberToHclTerraform(this._parReferenceLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      par_reference_timeout: {
        value: cdktf.numberToHclTerraform(this._parReferenceTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      par_status: {
        value: cdktf.stringToHclTerraform(this._parStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pending_authorization_timeout: {
        value: cdktf.numberToHclTerraform(this._pendingAuthorizationTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      persistent_grant_contract: {
        value: oauthServerSettingsPersistentGrantContractToHclTerraform(this._persistentGrantContract.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OauthServerSettingsPersistentGrantContract",
      },
      persistent_grant_idle_timeout: {
        value: cdktf.numberToHclTerraform(this._persistentGrantIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      persistent_grant_idle_timeout_time_unit: {
        value: cdktf.stringToHclTerraform(this._persistentGrantIdleTimeoutTimeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistent_grant_lifetime: {
        value: cdktf.numberToHclTerraform(this._persistentGrantLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      persistent_grant_lifetime_unit: {
        value: cdktf.stringToHclTerraform(this._persistentGrantLifetimeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistent_grant_reuse_grant_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._persistentGrantReuseGrantTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      refresh_rolling_interval: {
        value: cdktf.numberToHclTerraform(this._refreshRollingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      refresh_rolling_interval_time_unit: {
        value: cdktf.stringToHclTerraform(this._refreshRollingIntervalTimeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_token_length: {
        value: cdktf.numberToHclTerraform(this._refreshTokenLength),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      refresh_token_rolling_grace_period: {
        value: cdktf.numberToHclTerraform(this._refreshTokenRollingGracePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      registered_authorization_path: {
        value: cdktf.stringToHclTerraform(this._registeredAuthorizationPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      require_offline_access_scope_to_issue_refresh_tokens: {
        value: cdktf.booleanToHclTerraform(this._requireOfflineAccessScopeToIssueRefreshTokens),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      return_id_token_on_open_id_with_device_authz_grant: {
        value: cdktf.booleanToHclTerraform(this._returnIdTokenOnOpenIdWithDeviceAuthzGrant),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      roll_refresh_token_values: {
        value: cdktf.booleanToHclTerraform(this._rollRefreshTokenValues),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scope_for_oauth_grant_management: {
        value: cdktf.stringToHclTerraform(this._scopeForOauthGrantManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_groups: {
        value: cdktf.listMapperHcl(oauthServerSettingsScopeGroupsToHclTerraform, false)(this._scopeGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OauthServerSettingsScopeGroupsList",
      },
      scopes: {
        value: cdktf.listMapperHcl(oauthServerSettingsScopesToHclTerraform, false)(this._scopes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "OauthServerSettingsScopesList",
      },
      token_endpoint_base_url: {
        value: cdktf.stringToHclTerraform(this._tokenEndpointBaseUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      track_user_sessions_for_logout: {
        value: cdktf.booleanToHclTerraform(this._trackUserSessionsForLogout),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_authorization_consent_adapter: {
        value: cdktf.stringToHclTerraform(this._userAuthorizationConsentAdapter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_authorization_consent_page_setting: {
        value: cdktf.stringToHclTerraform(this._userAuthorizationConsentPageSetting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_authorization_url: {
        value: cdktf.stringToHclTerraform(this._userAuthorizationUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
