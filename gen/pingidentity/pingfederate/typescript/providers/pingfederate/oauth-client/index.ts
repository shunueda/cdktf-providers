// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OauthClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set to `true` to allow this client to initiate the authentication API redirectless flow. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#allow_authentication_api_init OauthClient#allow_authentication_api_init}
  */
  readonly allowAuthenticationApiInit?: boolean | cdktf.IResolvable;
  /**
  * The authorization detail types available for this client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#authorization_detail_types OauthClient#authorization_detail_types}
  */
  readonly authorizationDetailTypes?: string[];
  /**
  * Indicates if the Activation Code Confirmation page should be bypassed if `verification_url_complete` is used by the end user to authorize a device. This overrides the `bypass_use_code_confirmation` value present in Authorization Server Settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#bypass_activation_code_confirmation_override OauthClient#bypass_activation_code_confirmation_override}
  */
  readonly bypassActivationCodeConfirmationOverride?: boolean | cdktf.IResolvable;
  /**
  * Use this setting, for example, when you want to deploy a trusted application and authenticate end users via an IdP adapter or IdP connection. Defaults to `true` if `allow_authentication_api_init` is `true`, otherwise `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#bypass_approval_page OauthClient#bypass_approval_page}
  */
  readonly bypassApprovalPage?: boolean | cdktf.IResolvable;
  /**
  * The token delivery mode for the client. The default value is `POLL`. Supported values are `POLL` and `PING`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#ciba_delivery_mode OauthClient#ciba_delivery_mode}
  */
  readonly cibaDeliveryMode?: string;
  /**
  * The endpoint the OP will call after a successful or failed end-user authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#ciba_notification_endpoint OauthClient#ciba_notification_endpoint}
  */
  readonly cibaNotificationEndpoint?: string;
  /**
  * The minimum amount of time in seconds that the Client must wait between polling requests to the token endpoint. The default is `0` seconds. Must be between `0` and `3600` seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#ciba_polling_interval OauthClient#ciba_polling_interval}
  */
  readonly cibaPollingInterval?: number;
  /**
  * The JSON Web Signature [JWS] algorithm that must be used to sign the CIBA Request Object. All signing algorithms are allowed if value is not present
  * `RS256` - RSA using SHA-256
  * `RS384` - RSA using SHA-384
  * `RS512` - RSA using SHA-512
  * `ES256` - ECDSA using P256 Curve and SHA-256
  * `ES384` - ECDSA using P384 Curve and SHA-384
  * `ES512` - ECDSA using P521 Curve and SHA-512
  * `PS256` - RSASSA-PSS using SHA-256 and MGF1 padding with SHA-256
  * `PS384` - RSASSA-PSS using SHA-384 and MGF1 padding with SHA-384
  * `PS512` - RSASSA-PSS using SHA-512 and MGF1 padding with SHA-512
  * RSASSA-PSS is only supported with Thales Luna, Entrust nShield Connect or Java 11.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#ciba_request_object_signing_algorithm OauthClient#ciba_request_object_signing_algorithm}
  */
  readonly cibaRequestObjectSigningAlgorithm?: string;
  /**
  * Determines whether CIBA signed requests are required for this client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#ciba_require_signed_requests OauthClient#ciba_require_signed_requests}
  */
  readonly cibaRequireSignedRequests?: boolean | cdktf.IResolvable;
  /**
  * Determines whether the CIBA user code parameter is supported by this client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#ciba_user_code_supported OauthClient#ciba_user_code_supported}
  */
  readonly cibaUserCodeSupported?: boolean | cdktf.IResolvable;
  /**
  * Client authentication settings. If this model is null, it indicates that no client authentication will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#client_auth OauthClient#client_auth}
  */
  readonly clientAuth?: OauthClientClientAuth;
  /**
  * A unique identifier the client provides to the Resource Server to identify itself. This identifier is included with every request the client makes. This field is immutable and will trigger a replacement plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#client_id OauthClient#client_id}
  */
  readonly clientId: string;
  /**
  * The length of time in minutes that client secrets will be retained as secondary secrets after secret change. The default value is `0`, which will disable secondary client secret retention. This value will override the Client Secret Retention Period value on the Authorization Server Settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#client_secret_retention_period OauthClient#client_secret_retention_period}
  */
  readonly clientSecretRetentionPeriod?: number;
  /**
  * Use `OVERRIDE_SERVER_DEFAULT` to override the Client Secret Retention Period value on the Authorization Server Settings. `SERVER_DEFAULT` will default to the Client Secret Retention Period value on the Authorization Server Setting. Defaults to `SERVER_DEFAULT`. Supported values are `OVERRIDE_SERVER_DEFAULT` and `SERVER_DEFAULT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#client_secret_retention_period_type OauthClient#client_secret_retention_period_type}
  */
  readonly clientSecretRetentionPeriodType?: string;
  /**
  * The default access token manager for this client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#default_access_token_manager_ref OauthClient#default_access_token_manager_ref}
  */
  readonly defaultAccessTokenManagerRef?: OauthClientDefaultAccessTokenManagerRef;
  /**
  * A description of what the client application does. This description appears when the user is prompted for authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#description OauthClient#description}
  */
  readonly description?: string;
  /**
  * Allows an administrator to override the Device Authorization Settings set globally for the OAuth AS. Defaults to `SERVER_DEFAULT`. Supported values are `SERVER_DEFAULT` and `OVERRIDE_SERVER_DEFAULT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#device_flow_setting_type OauthClient#device_flow_setting_type}
  */
  readonly deviceFlowSettingType?: string;
  /**
  * The amount of time client should wait between polling requests, in seconds. This overrides the 'device_polling_interval' value present in Authorization Server Settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#device_polling_interval_override OauthClient#device_polling_interval_override}
  */
  readonly devicePollingIntervalOverride?: number;
  /**
  * Set to `true` to allow the authentication API redirectless flow to function without requiring any cookies. Defaults to `false`. Supported in PF version `12.1` or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#enable_cookieless_authentication_api OauthClient#enable_cookieless_authentication_api}
  */
  readonly enableCookielessAuthenticationApi?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the client is enabled. The default value is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#enabled OauthClient#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The exclusive scopes available for this client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#exclusive_scopes OauthClient#exclusive_scopes}
  */
  readonly exclusiveScopes?: string[];
  /**
  * OAuth Client Metadata can be extended to use custom Client Metadata Parameters. The names of these custom parameters should be defined in /extendedProperties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#extended_parameters OauthClient#extended_parameters}
  */
  readonly extendedParameters?: { [key: string]: OauthClientExtendedParameters } | cdktf.IResolvable;
  /**
  * The grant types allowed for this client. The `EXTENSION` grant type applies to SAML/JWT assertion grants. Supported values are `IMPLICIT`, `AUTHORIZATION_CODE`, `RESOURCE_OWNER_CREDENTIALS`, `CLIENT_CREDENTIALS`, `REFRESH_TOKEN`, `EXTENSION`, `DEVICE_CODE`, `ACCESS_TOKEN_VALIDATION`, `CIBA`, and `TOKEN_EXCHANGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#grant_types OauthClient#grant_types}
  */
  readonly grantTypes: string[];
  /**
  * JSON Web Key Set Settings of the OAuth client. Required if private key JWT client authentication or signed requests is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#jwks_settings OauthClient#jwks_settings}
  */
  readonly jwksSettings?: OauthClientJwksSettings;
  /**
  * The JSON Web Encryption [JWE] content-encryption algorithm for the JWT Secured Authorization Response.
  * `AES_128_CBC_HMAC_SHA_256` - Composite AES-CBC-128 HMAC-SHA-256
  * `AES_192_CBC_HMAC_SHA_384` - Composite AES-CBC-192 HMAC-SHA-384
  * `AES_256_CBC_HMAC_SHA_512` - Composite AES-CBC-256 HMAC-SHA-512
  * `AES_128_GCM` - AES-GCM-128
  * `AES_192_GCM` - AES-GCM-192
  * `AES_256_GCM` - AES-GCM-256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#jwt_secured_authorization_response_mode_content_encryption_algorithm OauthClient#jwt_secured_authorization_response_mode_content_encryption_algorithm}
  */
  readonly jwtSecuredAuthorizationResponseModeContentEncryptionAlgorithm?: string;
  /**
  * The JSON Web Encryption [JWE] encryption algorithm used to encrypt the content-encryption key of the JWT Secured Authorization Response.
  * `DIR` - Direct Encryption with symmetric key
  * `A128KW` - AES-128 Key Wrap
  * `A192KW` - AES-192 Key Wrap
  * `A256KW` - AES-256 Key Wrap
  * `A128GCMKW` - AES-GCM-128 key encryption
  * `A192GCMKW` - AES-GCM-192 key encryption
  * `A256GCMKW` - AES-GCM-256 key encryption
  * `ECDH_ES` - ECDH-ES
  * `ECDH_ES_A128KW` - ECDH-ES with AES-128 Key Wrap
  * `ECDH_ES_A192KW` - ECDH-ES with AES-192 Key Wrap
  * `ECDH_ES_A256KW` - ECDH-ES with AES-256 Key Wrap
  * `RSA_OAEP` - RSAES OAEP
  * `RSA_OAEP_256` - RSAES OAEP using SHA-256 and MGF1 with SHA-256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#jwt_secured_authorization_response_mode_encryption_algorithm OauthClient#jwt_secured_authorization_response_mode_encryption_algorithm}
  */
  readonly jwtSecuredAuthorizationResponseModeEncryptionAlgorithm?: string;
  /**
  * The JSON Web Signature [JWS] algorithm required to sign the JWT Secured Authorization Response.
  * `HS256` - HMAC using SHA-256
  * `HS384` - HMAC using SHA-384
  * `HS512` - HMAC using SHA-512
  * `RS256` - RSA using SHA-256
  * `RS384` - RSA using SHA-384
  * `RS512` - RSA using SHA-512
  * `ES256` - ECDSA using P256 Curve and SHA-256
  * `ES384` - ECDSA using P384 Curve and SHA-384
  * `ES512` - ECDSA using P521 Curve and SHA-512
  * `PS256` - RSASSA-PSS using SHA-256 and MGF1 padding with SHA-256
  * `PS384` - RSASSA-PSS using SHA-384 and MGF1 padding with SHA-384
  * `PS512` - RSASSA-PSS using SHA-512 and MGF1 padding with SHA-512
  * A null value will represent the default algorithm which is RS256.
  * RSASSA-PSS is only supported with Thales Luna, Entrust nShield Connect or Java 11.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#jwt_secured_authorization_response_mode_signing_algorithm OauthClient#jwt_secured_authorization_response_mode_signing_algorithm}
  */
  readonly jwtSecuredAuthorizationResponseModeSigningAlgorithm?: string;
  /**
  * The number of malicious actions allowed before an OAuth client is locked out. Currently, the only operation that is tracked as a malicious action is an attempt to revoke an invalid access token or refresh token. This value will override the global `MaxMaliciousActions` value on the `AccountLockingService` in the config-store. Supported in PF version `12.2` or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#lockout_max_malicious_actions OauthClient#lockout_max_malicious_actions}
  */
  readonly lockoutMaxMaliciousActions?: number;
  /**
  * Allows an administrator to override the Max Malicious Actions configuration set globally in `AccountLockingService`. Defaults to `SERVER_DEFAULT`. Supported values are `DO_NOT_LOCKOUT`, `SERVER_DEFAULT`, `OVERRIDE_SERVER_DEFAULT`. Supported in PF version `12.2` or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#lockout_max_malicious_actions_type OauthClient#lockout_max_malicious_actions_type}
  */
  readonly lockoutMaxMaliciousActionsType?: string;
  /**
  * The location of the logo used on user-facing OAuth grant authorization and revocation pages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#logo_url OauthClient#logo_url}
  */
  readonly logoUrl?: string;
  /**
  * A descriptive name for the client instance. This name appears when the user is prompted for authorization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#name OauthClient#name}
  */
  readonly name: string;
  /**
  * Determines whether offline_access requires the prompt parameter value to be set to 'consent' by this client or not. The value will be reset to default if the `require_offline_access_scope_to_issue_refresh_tokens` attribute is set to `SERVER_DEFAULT` or `false`. `SERVER_DEFAULT` is the default value. Supported values are `SERVER_DEFAULT`, `NO`, and `YES`. Supported in PF version `12.1` or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#offline_access_require_consent_prompt OauthClient#offline_access_require_consent_prompt}
  */
  readonly offlineAccessRequireConsentPrompt?: string;
  /**
  * Open ID Connect Policy settings. This is included in the message only when OIDC is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#oidc_policy OauthClient#oidc_policy}
  */
  readonly oidcPolicy?: OauthClientOidcPolicy;
  /**
  * The `device_code` and `user_code` timeout, in seconds. This overrides the `pending_authorization_timeout` value present in Authorization Server Settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#pending_authorization_timeout_override OauthClient#pending_authorization_timeout_override}
  */
  readonly pendingAuthorizationTimeoutOverride?: number;
  /**
  * The persistent grant expiration time. `-1` indicates an indefinite amount of time. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#persistent_grant_expiration_time OauthClient#persistent_grant_expiration_time}
  */
  readonly persistentGrantExpirationTime?: number;
  /**
  * The persistent grant expiration time unit. Defaults to `DAYS`. Supported values are `MINUTES`, `HOURS`, and `DAYS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#persistent_grant_expiration_time_unit OauthClient#persistent_grant_expiration_time_unit}
  */
  readonly persistentGrantExpirationTimeUnit?: string;
  /**
  * Allows an administrator to override the Persistent Grant Lifetime set globally for the OAuth AS. Defaults to `SERVER_DEFAULT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#persistent_grant_expiration_type OauthClient#persistent_grant_expiration_type}
  */
  readonly persistentGrantExpirationType?: string;
  /**
  * The persistent grant idle timeout. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#persistent_grant_idle_timeout OauthClient#persistent_grant_idle_timeout}
  */
  readonly persistentGrantIdleTimeout?: number;
  /**
  * The persistent grant idle timeout time unit. Defaults to `DAYS`. Supported values are `MINUTES`, `HOURS`, and `DAYS`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#persistent_grant_idle_timeout_time_unit OauthClient#persistent_grant_idle_timeout_time_unit}
  */
  readonly persistentGrantIdleTimeoutTimeUnit?: string;
  /**
  * Allows an administrator to override the Persistent Grant Idle Timeout set globally for the OAuth AS. Defaults to `SERVER_DEFAULT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#persistent_grant_idle_timeout_type OauthClient#persistent_grant_idle_timeout_type}
  */
  readonly persistentGrantIdleTimeoutType?: string;
  /**
  * The grant types that the OAuth AS can reuse rather than creating a new grant for each request. This value will override the Reuse Existing Persistent Access Grants for Grant Types on the Authorization Server Settings. Only `IMPLICIT` or `AUTHORIZATION_CODE` or `RESOURCE_OWNER_CREDENTIALS` are valid grant types. Supported values are `IMPLICIT`, `AUTHORIZATION_CODE`, `RESOURCE_OWNER_CREDENTIALS`, `CLIENT_CREDENTIALS`, `REFRESH_TOKEN`, `EXTENSION`, `DEVICE_CODE`, `ACCESS_TOKEN_VALIDATION`, `CIBA`, and `TOKEN_EXCHANGE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#persistent_grant_reuse_grant_types OauthClient#persistent_grant_reuse_grant_types}
  */
  readonly persistentGrantReuseGrantTypes?: string[];
  /**
  * Allows and administrator to override the Reuse Existing Persistent Access Grants for Grant Types set globally for OAuth AS. Defaults to `SERVER_DEFAULT`. Supported values are `SERVER_DEFAULT` and `OVERRIDE_SERVER_DEFAULT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#persistent_grant_reuse_type OauthClient#persistent_grant_reuse_type}
  */
  readonly persistentGrantReuseType?: string;
  /**
  * URIs to which the OAuth AS may redirect the resource owner's user agent after authorization is obtained. A redirection URI is used with the Authorization Code and Implicit grant types. Wildcards are allowed. However, for security reasons, make the URL as restrictive as possible. For example: https://.company.com/ Important: If more than one URI is added or if a single URI uses wildcards, then Authorization Code grant and token requests must contain a specific matching redirect uri parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#redirect_uris OauthClient#redirect_uris}
  */
  readonly redirectUris?: string[];
  /**
  * Use `ROLL` or `DONT_ROLL` to override the Roll Refresh Token Values setting on the Authorization Server Settings. `SERVER_DEFAULT` will default to the Roll Refresh Token Values setting on the Authorization Server Setting screen. Defaults to `SERVER_DEFAULT`. Supported values are `ROLL`, `DONT_ROLL`, and `SERVER_DEFAULT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#refresh_rolling OauthClient#refresh_rolling}
  */
  readonly refreshRolling?: string;
  /**
  * The grace period that a rolled refresh token remains valid in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#refresh_token_rolling_grace_period OauthClient#refresh_token_rolling_grace_period}
  */
  readonly refreshTokenRollingGracePeriod?: number;
  /**
  * When specified, it overrides the global Refresh Token Grace Period defined in the Authorization Server Settings. The default value is `SERVER_DEFAULT`. Supported values are `SERVER_DEFAULT` and `OVERRIDE_SERVER_DEFAULT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#refresh_token_rolling_grace_period_type OauthClient#refresh_token_rolling_grace_period_type}
  */
  readonly refreshTokenRollingGracePeriodType?: string;
  /**
  * The minimum interval to roll refresh tokens. This value will override the Refresh Token Rolling Interval Value on the Authorization Server Settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#refresh_token_rolling_interval OauthClient#refresh_token_rolling_interval}
  */
  readonly refreshTokenRollingInterval?: number;
  /**
  * The refresh token rolling interval time unit. Defaults to `HOURS`. Supported values are `MINUTES`, `HOURS`, and `DAYS`. Supported in PF version `12.1` or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#refresh_token_rolling_interval_time_unit OauthClient#refresh_token_rolling_interval_time_unit}
  */
  readonly refreshTokenRollingIntervalTimeUnit?: string;
  /**
  * Use `OVERRIDE_SERVER_DEFAULT` to override the Refresh Token Rolling Interval value on the Authorization Server Settings. `SERVER_DEFAULT` will default to the Refresh Token Rolling Interval value on the Authorization Server Setting. Defaults to `SERVER_DEFAULT`. Supported values are `OVERRIDE_SERVER_DEFAULT` and `SERVER_DEFAULT`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#refresh_token_rolling_interval_type OauthClient#refresh_token_rolling_interval_type}
  */
  readonly refreshTokenRollingIntervalType?: string;
  /**
  * The JSON Web Signature [JWS] algorithm that must be used to sign the Request Object. All signing algorithms are allowed if value is not present
  * `RS256` - RSA using SHA-256
  * 
  * `RS384` - RSA using SHA-384
  * `RS512` - RSA using SHA-512
  * `ES256` - ECDSA using P256 Curve and SHA-256
  * `ES384` - ECDSA using P384 Curve and SHA-384
  * `ES512` - ECDSA using P521 Curve and SHA-512
  * `PS256` - RSASSA-PSS using SHA-256 and MGF1 padding with SHA-256
  * `PS384` - RSASSA-PSS using SHA-384 and MGF1 padding with SHA-384
  * `PS512` - RSASSA-PSS using SHA-512 and MGF1 padding with SHA-512
  * RSASSA-PSS is only supported with SafeNet Luna, Thales nCipher or Java 11.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#request_object_signing_algorithm OauthClient#request_object_signing_algorithm}
  */
  readonly requestObjectSigningAlgorithm?: string;
  /**
  * The CIBA request policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#request_policy_ref OauthClient#request_policy_ref}
  */
  readonly requestPolicyRef?: OauthClientRequestPolicyRef;
  /**
  * Determines whether Demonstrating Proof-of-Possession (DPoP) is required for this client. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#require_dpop OauthClient#require_dpop}
  */
  readonly requireDpop?: boolean | cdktf.IResolvable;
  /**
  * Determines whether JWT secured authorization response mode is required when initiating an authorization request. The default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#require_jwt_secured_authorization_response_mode OauthClient#require_jwt_secured_authorization_response_mode}
  */
  readonly requireJwtSecuredAuthorizationResponseMode?: boolean | cdktf.IResolvable;
  /**
  * Determines whether offline_access scope is required to issue refresh tokens by this client or not. `SERVER_DEFAULT` is the default value. Supported values are `SERVER_DEFAULT`, `NO`, and `YES`. Supported in PF version `12.1` or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#require_offline_access_scope_to_issue_refresh_tokens OauthClient#require_offline_access_scope_to_issue_refresh_tokens}
  */
  readonly requireOfflineAccessScopeToIssueRefreshTokens?: string;
  /**
  * Determines whether Proof Key for Code Exchange (PKCE) is required for this client. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#require_proof_key_for_code_exchange OauthClient#require_proof_key_for_code_exchange}
  */
  readonly requireProofKeyForCodeExchange?: boolean | cdktf.IResolvable;
  /**
  * Determines whether pushed authorization requests are required when initiating an authorization request. The default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#require_pushed_authorization_requests OauthClient#require_pushed_authorization_requests}
  */
  readonly requirePushedAuthorizationRequests?: boolean | cdktf.IResolvable;
  /**
  * Determines whether JWT Secured authorization response mode is required when initiating an authorization request. The default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#require_signed_requests OauthClient#require_signed_requests}
  */
  readonly requireSignedRequests?: boolean | cdktf.IResolvable;
  /**
  * Restricts this client's access to specific scopes. Defaults to `true` if `allow_authentication_api_init` is `true`, otherwise `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#restrict_scopes OauthClient#restrict_scopes}
  */
  readonly restrictScopes?: boolean | cdktf.IResolvable;
  /**
  * Determines whether the client is restricted to using only its default access token manager. The default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#restrict_to_default_access_token_manager OauthClient#restrict_to_default_access_token_manager}
  */
  readonly restrictToDefaultAccessTokenManager?: boolean | cdktf.IResolvable;
  /**
  * The response types allowed for this client. If omitted all response types are available to the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#restricted_response_types OauthClient#restricted_response_types}
  */
  readonly restrictedResponseTypes?: string[];
  /**
  * The scopes available for this client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#restricted_scopes OauthClient#restricted_scopes}
  */
  readonly restrictedScopes?: string[];
  /**
  * The Token Exchange Processor policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#token_exchange_processor_policy_ref OauthClient#token_exchange_processor_policy_ref}
  */
  readonly tokenExchangeProcessorPolicyRef?: OauthClientTokenExchangeProcessorPolicyRef;
  /**
  * The JSON Web Encryption [JWE] content-encryption algorithm for the Token Introspection Response.
  * `AES_128_CBC_HMAC_SHA_256` - Composite AES-CBC-128 HMAC-SHA-256
  * `AES_192_CBC_HMAC_SHA_384` - Composite AES-CBC-192 HMAC-SHA-384
  * `AES_256_CBC_HMAC_SHA_512` - Composite AES-CBC-256 HMAC-SHA-512
  * `AES_128_GCM` - AES-GCM-128
  * `AES_192_GCM` - AES-GCM-192
  * `AES_256_GCM` - AES-GCM-256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#token_introspection_content_encryption_algorithm OauthClient#token_introspection_content_encryption_algorithm}
  */
  readonly tokenIntrospectionContentEncryptionAlgorithm?: string;
  /**
  * The JSON Web Encryption [JWE] encryption algorithm used to encrypt the content-encryption key of the Token Introspection Response.
  * `DIR` - Direct Encryption with symmetric key
  * `A128KW` - AES-128 Key Wrap
  * `A192KW` - AES-192 Key Wrap
  * `A256KW` - AES-256 Key Wrap
  * `A128GCMKW` - AES-GCM-128 key encryption
  * `A192GCMKW` - AES-GCM-192 key encryption
  * `A256GCMKW` - AES-GCM-256 key encryption
  * `ECDH_ES` - ECDH-ES
  * `ECDH_ES_A128KW`- ECDH-ES with AES-128 Key Wrap
  * `ECDH_ES_A192KW` - ECDH-ES with AES-192 Key Wrap
  * `ECDH_ES_A256KW` - ECDH-ES with AES-256 Key Wrap
  * `RSA_OAEP` - RSAES OAEP
  * `RSA_OAEP_256` - RSAES OAEP using SHA-256 and MGF1 with SHA-256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#token_introspection_encryption_algorithm OauthClient#token_introspection_encryption_algorithm}
  */
  readonly tokenIntrospectionEncryptionAlgorithm?: string;
  /**
  * The JSON Web Signature [JWS] algorithm required to sign the Token Introspection Response.
  * `HS256` - HMAC using SHA-256
  * `HS384` - HMAC using SHA-384
  * `HS512`- HMAC using SHA-512
  * `RS256` - RSA using SHA-256
  * `RS384` - RSA using SHA-384
  * `RS512` - RSA using SHA-512
  * `ES256` - ECDSA using P256 Curve and SHA-256
  * `ES384` - ECDSA using P384 Curve and SHA-384
  * `ES512` - ECDSA using P521 Curve and SHA-512
  * `PS256` - RSASSA-PSS using SHA-256 and MGF1 padding with SHA-256
  * `PS384` - RSASSA-PSS using SHA-384 and MGF1 padding with SHA-384
  * `PS512` - RSASSA-PSS using SHA-512 and MGF1 padding with SHA-512
  * A null value will represent the default algorithm which is RS256.
  * RSASSA-PSS is only supported with SafeNet Luna, Thales nCipher or Java 11
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#token_introspection_signing_algorithm OauthClient#token_introspection_signing_algorithm}
  */
  readonly tokenIntrospectionSigningAlgorithm?: string;
  /**
  * The URL used as `verification_url` and `verification_url_complete` values in a Device Authorization request. This property overrides the `user_authorization_url` value present in Authorization Server Settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#user_authorization_url_override OauthClient#user_authorization_url_override}
  */
  readonly userAuthorizationUrlOverride?: string;
  /**
  * Validates token using all eligible access token managers for the client. This setting is ignored if 'restrict_to_default_access_token_manager' is set to `true`. The default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#validate_using_all_eligible_atms OauthClient#validate_using_all_eligible_atms}
  */
  readonly validateUsingAllEligibleAtms?: boolean | cdktf.IResolvable;
}
export interface OauthClientClientAuthSecondarySecrets {
  /**
  * Encrypted secondary client secret for Basic Authentication. Either this attribute or `secret` must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#encrypted_secret OauthClient#encrypted_secret}
  */
  readonly encryptedSecret?: string;
  /**
  * The expiry time of the secondary secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#expiry_time OauthClient#expiry_time}
  */
  readonly expiryTime: string;
  /**
  * Secondary client secret for Basic Authentication. Either this attribute or `encrypted_secret` must be provided.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#secret OauthClient#secret}
  */
  readonly secret?: string;
}

export function oauthClientClientAuthSecondarySecretsToTerraform(struct?: OauthClientClientAuthSecondarySecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted_secret: cdktf.stringToTerraform(struct!.encryptedSecret),
    expiry_time: cdktf.stringToTerraform(struct!.expiryTime),
    secret: cdktf.stringToTerraform(struct!.secret),
  }
}


export function oauthClientClientAuthSecondarySecretsToHclTerraform(struct?: OauthClientClientAuthSecondarySecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted_secret: {
      value: cdktf.stringToHclTerraform(struct!.encryptedSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiry_time: {
      value: cdktf.stringToHclTerraform(struct!.expiryTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OauthClientClientAuthSecondarySecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OauthClientClientAuthSecondarySecrets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptedSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedSecret = this._encryptedSecret;
    }
    if (this._expiryTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiryTime = this._expiryTime;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthClientClientAuthSecondarySecrets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptedSecret = undefined;
      this._expiryTime = undefined;
      this._secret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptedSecret = value.encryptedSecret;
      this._expiryTime = value.expiryTime;
      this._secret = value.secret;
    }
  }

  // encrypted_secret - computed: true, optional: true, required: false
  private _encryptedSecret?: string; 
  public get encryptedSecret() {
    return this.getStringAttribute('encrypted_secret');
  }
  public set encryptedSecret(value: string) {
    this._encryptedSecret = value;
  }
  public resetEncryptedSecret() {
    this._encryptedSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedSecretInput() {
    return this._encryptedSecret;
  }

  // expiry_time - computed: true, optional: false, required: true
  private _expiryTime?: string; 
  public get expiryTime() {
    return this.getStringAttribute('expiry_time');
  }
  public set expiryTime(value: string) {
    this._expiryTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expiryTimeInput() {
    return this._expiryTime;
  }

  // secret - computed: true, optional: true, required: false
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
}

export class OauthClientClientAuthSecondarySecretsList extends cdktf.ComplexList {
  public internalValue? : OauthClientClientAuthSecondarySecrets[] | cdktf.IResolvable

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
  public get(index: number): OauthClientClientAuthSecondarySecretsOutputReference {
    return new OauthClientClientAuthSecondarySecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface OauthClientClientAuth {
  /**
  * Client TLS Certificate Issuer DN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#client_cert_issuer_dn OauthClient#client_cert_issuer_dn}
  */
  readonly clientCertIssuerDn?: string;
  /**
  * Client TLS Certificate Subject DN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#client_cert_subject_dn OauthClient#client_cert_subject_dn}
  */
  readonly clientCertSubjectDn?: string;
  /**
  * Encrypted client secret for Basic Authentication. Only one of `secret` or `encrypted_secret` can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#encrypted_secret OauthClient#encrypted_secret}
  */
  readonly encryptedSecret?: string;
  /**
  * Enforce replay prevention on JSON Web Tokens. This field is applicable only for Private Key JWT Client and Client Secret JWT Authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#enforce_replay_prevention OauthClient#enforce_replay_prevention}
  */
  readonly enforceReplayPrevention?: boolean | cdktf.IResolvable;
  /**
  * The list of secondary client secrets that are temporarily retained.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#secondary_secrets OauthClient#secondary_secrets}
  */
  readonly secondarySecrets?: OauthClientClientAuthSecondarySecrets[] | cdktf.IResolvable;
  /**
  * Client secret for Basic Authentication. Only one of `secret` or `encrypted_secret` can be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#secret OauthClient#secret}
  */
  readonly secret?: string;
  /**
  * The JSON Web Signature [JWS] algorithm that must be used to sign the JSON Web Tokens. This field is applicable only for Private Key JWT and Client Secret JWT Client Authentication. All asymmetric signing algorithms are allowed for Private Key JWT if value is not present. All symmetric signing algorithms are allowed for Client Secret JWT if value is not present
  * `RS256` - RSA using SHA-256
  * `RS384` - RSA using SHA-384
  * `RS512` - RSA using SHA-512
  * `ES256` - ECDSA using P256 Curve and SHA-256
  * `ES384` - ECDSA using P384 Curve and SHA-384
  * `ES512` - ECDSA using P521 Curve and SHA-512
  * `PS256` - RSASSA-PSS using SHA-256 and MGF1 padding with SHA-256
  * `PS384` - RSASSA-PSS using SHA-384 and MGF1 padding with SHA-384
  * `PS512` - RSASSA-PSS using SHA-512 and MGF1 padding with SHA-512
  * `RSASSA-PSS` is only supported with Thales Luna, Entrust nShield Connect or Java 11.
  * `HS256` - HMAC using SHA-256
  * `HS384` - HMAC using SHA-384
  * `HS512` - HMAC using SHA-512.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#token_endpoint_auth_signing_algorithm OauthClient#token_endpoint_auth_signing_algorithm}
  */
  readonly tokenEndpointAuthSigningAlgorithm?: string;
  /**
  * Client authentication type. The required field for type `SECRET` is `secret`.	The required fields for type `CERTIFICATE` are `client_cert_issuer_dn` and `client_cert_subject_dn`. The required field for type `PRIVATE_KEY_JWT` is: either `jwks` or `jwks_url`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#type OauthClient#type}
  */
  readonly type?: string;
}

export function oauthClientClientAuthToTerraform(struct?: OauthClientClientAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_cert_issuer_dn: cdktf.stringToTerraform(struct!.clientCertIssuerDn),
    client_cert_subject_dn: cdktf.stringToTerraform(struct!.clientCertSubjectDn),
    encrypted_secret: cdktf.stringToTerraform(struct!.encryptedSecret),
    enforce_replay_prevention: cdktf.booleanToTerraform(struct!.enforceReplayPrevention),
    secondary_secrets: cdktf.listMapper(oauthClientClientAuthSecondarySecretsToTerraform, false)(struct!.secondarySecrets),
    secret: cdktf.stringToTerraform(struct!.secret),
    token_endpoint_auth_signing_algorithm: cdktf.stringToTerraform(struct!.tokenEndpointAuthSigningAlgorithm),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function oauthClientClientAuthToHclTerraform(struct?: OauthClientClientAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_cert_issuer_dn: {
      value: cdktf.stringToHclTerraform(struct!.clientCertIssuerDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_cert_subject_dn: {
      value: cdktf.stringToHclTerraform(struct!.clientCertSubjectDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypted_secret: {
      value: cdktf.stringToHclTerraform(struct!.encryptedSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enforce_replay_prevention: {
      value: cdktf.booleanToHclTerraform(struct!.enforceReplayPrevention),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secondary_secrets: {
      value: cdktf.listMapperHcl(oauthClientClientAuthSecondarySecretsToHclTerraform, false)(struct!.secondarySecrets),
      isBlock: true,
      type: "list",
      storageClassType: "OauthClientClientAuthSecondarySecretsList",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_endpoint_auth_signing_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.tokenEndpointAuthSigningAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OauthClientClientAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthClientClientAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCertIssuerDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertIssuerDn = this._clientCertIssuerDn;
    }
    if (this._clientCertSubjectDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCertSubjectDn = this._clientCertSubjectDn;
    }
    if (this._encryptedSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedSecret = this._encryptedSecret;
    }
    if (this._enforceReplayPrevention !== undefined) {
      hasAnyValues = true;
      internalValueResult.enforceReplayPrevention = this._enforceReplayPrevention;
    }
    if (this._secondarySecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondarySecrets = this._secondarySecrets?.internalValue;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._tokenEndpointAuthSigningAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenEndpointAuthSigningAlgorithm = this._tokenEndpointAuthSigningAlgorithm;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthClientClientAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientCertIssuerDn = undefined;
      this._clientCertSubjectDn = undefined;
      this._encryptedSecret = undefined;
      this._enforceReplayPrevention = undefined;
      this._secondarySecrets.internalValue = undefined;
      this._secret = undefined;
      this._tokenEndpointAuthSigningAlgorithm = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientCertIssuerDn = value.clientCertIssuerDn;
      this._clientCertSubjectDn = value.clientCertSubjectDn;
      this._encryptedSecret = value.encryptedSecret;
      this._enforceReplayPrevention = value.enforceReplayPrevention;
      this._secondarySecrets.internalValue = value.secondarySecrets;
      this._secret = value.secret;
      this._tokenEndpointAuthSigningAlgorithm = value.tokenEndpointAuthSigningAlgorithm;
      this._type = value.type;
    }
  }

  // client_cert_issuer_dn - computed: true, optional: true, required: false
  private _clientCertIssuerDn?: string; 
  public get clientCertIssuerDn() {
    return this.getStringAttribute('client_cert_issuer_dn');
  }
  public set clientCertIssuerDn(value: string) {
    this._clientCertIssuerDn = value;
  }
  public resetClientCertIssuerDn() {
    this._clientCertIssuerDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertIssuerDnInput() {
    return this._clientCertIssuerDn;
  }

  // client_cert_subject_dn - computed: true, optional: true, required: false
  private _clientCertSubjectDn?: string; 
  public get clientCertSubjectDn() {
    return this.getStringAttribute('client_cert_subject_dn');
  }
  public set clientCertSubjectDn(value: string) {
    this._clientCertSubjectDn = value;
  }
  public resetClientCertSubjectDn() {
    this._clientCertSubjectDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertSubjectDnInput() {
    return this._clientCertSubjectDn;
  }

  // encrypted_secret - computed: true, optional: true, required: false
  private _encryptedSecret?: string; 
  public get encryptedSecret() {
    return this.getStringAttribute('encrypted_secret');
  }
  public set encryptedSecret(value: string) {
    this._encryptedSecret = value;
  }
  public resetEncryptedSecret() {
    this._encryptedSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedSecretInput() {
    return this._encryptedSecret;
  }

  // enforce_replay_prevention - computed: true, optional: true, required: false
  private _enforceReplayPrevention?: boolean | cdktf.IResolvable; 
  public get enforceReplayPrevention() {
    return this.getBooleanAttribute('enforce_replay_prevention');
  }
  public set enforceReplayPrevention(value: boolean | cdktf.IResolvable) {
    this._enforceReplayPrevention = value;
  }
  public resetEnforceReplayPrevention() {
    this._enforceReplayPrevention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceReplayPreventionInput() {
    return this._enforceReplayPrevention;
  }

  // secondary_secrets - computed: true, optional: true, required: false
  private _secondarySecrets = new OauthClientClientAuthSecondarySecretsList(this, "secondary_secrets", false);
  public get secondarySecrets() {
    return this._secondarySecrets;
  }
  public putSecondarySecrets(value: OauthClientClientAuthSecondarySecrets[] | cdktf.IResolvable) {
    this._secondarySecrets.internalValue = value;
  }
  public resetSecondarySecrets() {
    this._secondarySecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondarySecretsInput() {
    return this._secondarySecrets.internalValue;
  }

  // secret - computed: true, optional: true, required: false
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

  // token_endpoint_auth_signing_algorithm - computed: true, optional: true, required: false
  private _tokenEndpointAuthSigningAlgorithm?: string; 
  public get tokenEndpointAuthSigningAlgorithm() {
    return this.getStringAttribute('token_endpoint_auth_signing_algorithm');
  }
  public set tokenEndpointAuthSigningAlgorithm(value: string) {
    this._tokenEndpointAuthSigningAlgorithm = value;
  }
  public resetTokenEndpointAuthSigningAlgorithm() {
    this._tokenEndpointAuthSigningAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenEndpointAuthSigningAlgorithmInput() {
    return this._tokenEndpointAuthSigningAlgorithm;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface OauthClientDefaultAccessTokenManagerRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#id OauthClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function oauthClientDefaultAccessTokenManagerRefToTerraform(struct?: OauthClientDefaultAccessTokenManagerRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function oauthClientDefaultAccessTokenManagerRefToHclTerraform(struct?: OauthClientDefaultAccessTokenManagerRef | cdktf.IResolvable): any {
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

export class OauthClientDefaultAccessTokenManagerRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthClientDefaultAccessTokenManagerRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthClientDefaultAccessTokenManagerRef | cdktf.IResolvable | undefined) {
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
export interface OauthClientExtendedParameters {
  /**
  * A list of values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#values OauthClient#values}
  */
  readonly values: string[];
}

export function oauthClientExtendedParametersToTerraform(struct?: OauthClientExtendedParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function oauthClientExtendedParametersToHclTerraform(struct?: OauthClientExtendedParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OauthClientExtendedParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): OauthClientExtendedParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthClientExtendedParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._values = value.values;
    }
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return cdktf.Fn.tolist(this.getListAttribute('values'));
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class OauthClientExtendedParametersMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OauthClientExtendedParameters } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): OauthClientExtendedParametersOutputReference {
    return new OauthClientExtendedParametersOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OauthClientJwksSettings {
  /**
  * JSON Web Key Set (JWKS) document of the OAuth client. Either `jwks` or `jwks_url` must be provided if private key JWT client authentication or signed requests is enabled. If the client signs its JWTs using an RSASSA-PSS signing algorithm, PingFederate must either use Java 11 or be integrated with a hardware security module (HSM) to process the digital signatures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#jwks OauthClient#jwks}
  */
  readonly jwks?: string;
  /**
  * JSON Web Key Set (JWKS) URL of the OAuth client. Either `jwks` or `jwks_url` must be provided if private key JWT client authentication or signed requests is enabled. If the client signs its JWTs using an RSASSA-PSS signing algorithm, PingFederate must either use Java 11 or be integrated with a hardware security module (HSM) to process the digital signatures.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#jwks_url OauthClient#jwks_url}
  */
  readonly jwksUrl?: string;
}

export function oauthClientJwksSettingsToTerraform(struct?: OauthClientJwksSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jwks: cdktf.stringToTerraform(struct!.jwks),
    jwks_url: cdktf.stringToTerraform(struct!.jwksUrl),
  }
}


export function oauthClientJwksSettingsToHclTerraform(struct?: OauthClientJwksSettings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    jwks: {
      value: cdktf.stringToHclTerraform(struct!.jwks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwks_url: {
      value: cdktf.stringToHclTerraform(struct!.jwksUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OauthClientJwksSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthClientJwksSettings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jwks !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwks = this._jwks;
    }
    if (this._jwksUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwksUrl = this._jwksUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthClientJwksSettings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jwks = undefined;
      this._jwksUrl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jwks = value.jwks;
      this._jwksUrl = value.jwksUrl;
    }
  }

  // jwks - computed: false, optional: true, required: false
  private _jwks?: string; 
  public get jwks() {
    return this.getStringAttribute('jwks');
  }
  public set jwks(value: string) {
    this._jwks = value;
  }
  public resetJwks() {
    this._jwks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksInput() {
    return this._jwks;
  }

  // jwks_url - computed: false, optional: true, required: false
  private _jwksUrl?: string; 
  public get jwksUrl() {
    return this.getStringAttribute('jwks_url');
  }
  public set jwksUrl(value: string) {
    this._jwksUrl = value;
  }
  public resetJwksUrl() {
    this._jwksUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksUrlInput() {
    return this._jwksUrl;
  }
}
export interface OauthClientOidcPolicyPolicyGroup {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#id OauthClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function oauthClientOidcPolicyPolicyGroupToTerraform(struct?: OauthClientOidcPolicyPolicyGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function oauthClientOidcPolicyPolicyGroupToHclTerraform(struct?: OauthClientOidcPolicyPolicyGroup | cdktf.IResolvable): any {
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

export class OauthClientOidcPolicyPolicyGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthClientOidcPolicyPolicyGroup | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthClientOidcPolicyPolicyGroup | cdktf.IResolvable | undefined) {
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

  // id - computed: true, optional: false, required: true
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
export interface OauthClientOidcPolicy {
  /**
  * The back-channel logout URI for this client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#back_channel_logout_uri OauthClient#back_channel_logout_uri}
  */
  readonly backChannelLogoutUri?: string;
  /**
  * Determines whether this client is allowed to access the Session Revocation API. The default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#grant_access_session_revocation_api OauthClient#grant_access_session_revocation_api}
  */
  readonly grantAccessSessionRevocationApi?: boolean | cdktf.IResolvable;
  /**
  * Determines whether this client is allowed to access the Session Management API. The default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#grant_access_session_session_management_api OauthClient#grant_access_session_session_management_api}
  */
  readonly grantAccessSessionSessionManagementApi?: boolean | cdktf.IResolvable;
  /**
  * The JSON Web Encryption [JWE] content encryption algorithm for the ID Token.
  * `AES_128_CBC_HMAC_SHA_256` - Composite AES-CBC-128 HMAC-SHA-256
  * `AES_192_CBC_HMAC_SHA_384` - Composite AES-CBC-192 HMAC-SHA-384
  * `AES_256_CBC_HMAC_SHA_512` - Composite AES-CBC-256 HMAC-SHA-512
  * `AES_128_GCM` - AES-GCM-128
  * `AES_192_GCM` - AES-GCM-192
  * `AES_256_GCM` - AES-GCM-256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#id_token_content_encryption_algorithm OauthClient#id_token_content_encryption_algorithm}
  */
  readonly idTokenContentEncryptionAlgorithm?: string;
  /**
  * The JSON Web Encryption [JWE] encryption algorithm used to encrypt the content encryption key for the ID Token.
  * `DIR` - Direct Encryption with symmetric key
  * `A128KW` - AES-128 Key Wrap
  * `A192KW` - AES-192 Key Wrap
  * `A256KW`- AES-256 Key Wrap
  * `A128GCMKW` - AES-GCM-128 key encryption
  * `A192GCMKW` - AES-GCM-192 key encryption
  * `A256GCMKW` - AES-GCM-256 key encryption
  * `ECDH_ES` - ECDH-ES
  * `ECDH_ES_A128KW` - ECDH-ES with AES-128 Key Wrap
  * `ECDH_ES_A192KW` - ECDH-ES with AES-192 Key Wrap
  * `ECDH_ES_A256KW` - ECDH-ES with AES-256 Key Wrap
  * `RSA_OAEP` - RSAES OAEP
  * `RSA_OAEP_256` - RSAES OAEP using SHA-256 and MGF1 with SHA-256
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#id_token_encryption_algorithm OauthClient#id_token_encryption_algorithm}
  */
  readonly idTokenEncryptionAlgorithm?: string;
  /**
  * The JSON Web Signature [JWS] algorithm required for the ID Token.
  * `NONE` - No signing algorithm
  * `HS256` - HMAC using SHA-256
  * `HS384` - HMAC using SHA-384
  * `HS512` - HMAC using SHA-512
  * `RS256` - RSA using SHA-256
  * `RS384` - RSA using SHA-384
  * `RS512` - RSA using SHA-512
  * `ES256 `- ECDSA using P256 Curve and SHA-256
  * `ES384` - ECDSA using P384 Curve and SHA-384
  * `ES512` - ECDSA using P521 Curve and SHA-512
  * `PS256` - RSASSA-PSS using SHA-256 and MGF1 padding with SHA-256
  * `PS384` - RSASSA-PSS using SHA-384 and MGF1 padding with SHA-384
  * `PS512` - RSASSA-PSS using SHA-512 and MGF1 padding with SHA-512
  * A null value will represent the default algorithm which is RS256.
  * RSASSA-PSS is only supported with Thales Luna, Entrust nShield Connect or Java 11.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#id_token_signing_algorithm OauthClient#id_token_signing_algorithm}
  */
  readonly idTokenSigningAlgorithm?: string;
  /**
  * The logout mode for this client. The default is 'NONE'. Supported values are `NONE`, `PING_FRONT_CHANNEL`, `OIDC_FRONT_CHANNEL`, and `OIDC_BACK_CHANNEL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#logout_mode OauthClient#logout_mode}
  */
  readonly logoutMode?: string;
  /**
  * A list of front-channel logout URIs for this client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#logout_uris OauthClient#logout_uris}
  */
  readonly logoutUris?: string[];
  /**
  * Determines whether the subject identifier type is pairwise. The default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#pairwise_identifier_user_type OauthClient#pairwise_identifier_user_type}
  */
  readonly pairwiseIdentifierUserType?: boolean | cdktf.IResolvable;
  /**
  * Set this value to `true` if you wish to enable client application logout, and the client is PingAccess, or its logout endpoints follow the PingAccess path convention. The default is `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#ping_access_logout_capable OauthClient#ping_access_logout_capable}
  */
  readonly pingAccessLogoutCapable?: boolean | cdktf.IResolvable;
  /**
  * The Open ID Connect policy. A null value will represent the default policy group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#policy_group OauthClient#policy_group}
  */
  readonly policyGroup?: OauthClientOidcPolicyPolicyGroup;
  /**
  * URIs to which the OIDC OP may redirect the resource owner's user agent after RP-initiated logout has completed. Wildcards are allowed. However, for security reasons, make the URL as restrictive as possible. Supported in PF version `12.0` or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#post_logout_redirect_uris OauthClient#post_logout_redirect_uris}
  */
  readonly postLogoutRedirectUris?: string[];
  /**
  * The URI references a file with a single JSON array of Redirect URI and JWKS URL values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#sector_identifier_uri OauthClient#sector_identifier_uri}
  */
  readonly sectorIdentifierUri?: string;
  /**
  * The JSON Web Encryption [JWE] content-encryption algorithm for the UserInfo Response. Supported values are `AES_128_CBC_HMAC_SHA_256`, `AES_192_CBC_HMAC_SHA_384`, `AES_256_CBC_HMAC_SHA_512`, `AES_128_GCM`, `AES_192_GCM`, `AES_256_GCM`. Supported in PF version `12.2` or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#user_info_response_content_encryption_algorithm OauthClient#user_info_response_content_encryption_algorithm}
  */
  readonly userInfoResponseContentEncryptionAlgorithm?: string;
  /**
  * The JSON Web Encryption [JWE] encryption algorithm used to encrypt the content-encryption key of the UserInfo response. Supported values are `DIR`, `A128KW`, `A192KW`, `A256KW`, `A128GCMKW`, `A192GCMKW`, `A256GCMKW`, `ECDH_ES`, `ECDH_ES_A128KW`, `ECDH_ES_A192KW`, `ECDH_ES_A256KW`, `RSA_OAEP`, `RSA_OAEP_256`. Supported in PF version `12.2` or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#user_info_response_encryption_algorithm OauthClient#user_info_response_encryption_algorithm}
  */
  readonly userInfoResponseEncryptionAlgorithm?: string;
  /**
  * The JSON Web Signature [JWS] algorithm required to sign the UserInfo response. Supported values are `NONE`, `HS256`, `HS384`, `HS512`, `RS256`, `RS384`, `RS512`, `ES256`, `ES384`, `ES512`, `PS256`, `PS384`, `PS512`. Supported in PF version `12.2` or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#user_info_response_signing_algorithm OauthClient#user_info_response_signing_algorithm}
  */
  readonly userInfoResponseSigningAlgorithm?: string;
}

export function oauthClientOidcPolicyToTerraform(struct?: OauthClientOidcPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    back_channel_logout_uri: cdktf.stringToTerraform(struct!.backChannelLogoutUri),
    grant_access_session_revocation_api: cdktf.booleanToTerraform(struct!.grantAccessSessionRevocationApi),
    grant_access_session_session_management_api: cdktf.booleanToTerraform(struct!.grantAccessSessionSessionManagementApi),
    id_token_content_encryption_algorithm: cdktf.stringToTerraform(struct!.idTokenContentEncryptionAlgorithm),
    id_token_encryption_algorithm: cdktf.stringToTerraform(struct!.idTokenEncryptionAlgorithm),
    id_token_signing_algorithm: cdktf.stringToTerraform(struct!.idTokenSigningAlgorithm),
    logout_mode: cdktf.stringToTerraform(struct!.logoutMode),
    logout_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.logoutUris),
    pairwise_identifier_user_type: cdktf.booleanToTerraform(struct!.pairwiseIdentifierUserType),
    ping_access_logout_capable: cdktf.booleanToTerraform(struct!.pingAccessLogoutCapable),
    policy_group: oauthClientOidcPolicyPolicyGroupToTerraform(struct!.policyGroup),
    post_logout_redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.postLogoutRedirectUris),
    sector_identifier_uri: cdktf.stringToTerraform(struct!.sectorIdentifierUri),
    user_info_response_content_encryption_algorithm: cdktf.stringToTerraform(struct!.userInfoResponseContentEncryptionAlgorithm),
    user_info_response_encryption_algorithm: cdktf.stringToTerraform(struct!.userInfoResponseEncryptionAlgorithm),
    user_info_response_signing_algorithm: cdktf.stringToTerraform(struct!.userInfoResponseSigningAlgorithm),
  }
}


export function oauthClientOidcPolicyToHclTerraform(struct?: OauthClientOidcPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    back_channel_logout_uri: {
      value: cdktf.stringToHclTerraform(struct!.backChannelLogoutUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grant_access_session_revocation_api: {
      value: cdktf.booleanToHclTerraform(struct!.grantAccessSessionRevocationApi),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    grant_access_session_session_management_api: {
      value: cdktf.booleanToHclTerraform(struct!.grantAccessSessionSessionManagementApi),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    id_token_content_encryption_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.idTokenContentEncryptionAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_token_encryption_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.idTokenEncryptionAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_token_signing_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.idTokenSigningAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logout_mode: {
      value: cdktf.stringToHclTerraform(struct!.logoutMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logout_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.logoutUris),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    pairwise_identifier_user_type: {
      value: cdktf.booleanToHclTerraform(struct!.pairwiseIdentifierUserType),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ping_access_logout_capable: {
      value: cdktf.booleanToHclTerraform(struct!.pingAccessLogoutCapable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policy_group: {
      value: oauthClientOidcPolicyPolicyGroupToHclTerraform(struct!.policyGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "OauthClientOidcPolicyPolicyGroup",
    },
    post_logout_redirect_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.postLogoutRedirectUris),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    sector_identifier_uri: {
      value: cdktf.stringToHclTerraform(struct!.sectorIdentifierUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_info_response_content_encryption_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.userInfoResponseContentEncryptionAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_info_response_encryption_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.userInfoResponseEncryptionAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_info_response_signing_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.userInfoResponseSigningAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OauthClientOidcPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthClientOidcPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backChannelLogoutUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.backChannelLogoutUri = this._backChannelLogoutUri;
    }
    if (this._grantAccessSessionRevocationApi !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantAccessSessionRevocationApi = this._grantAccessSessionRevocationApi;
    }
    if (this._grantAccessSessionSessionManagementApi !== undefined) {
      hasAnyValues = true;
      internalValueResult.grantAccessSessionSessionManagementApi = this._grantAccessSessionSessionManagementApi;
    }
    if (this._idTokenContentEncryptionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.idTokenContentEncryptionAlgorithm = this._idTokenContentEncryptionAlgorithm;
    }
    if (this._idTokenEncryptionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.idTokenEncryptionAlgorithm = this._idTokenEncryptionAlgorithm;
    }
    if (this._idTokenSigningAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.idTokenSigningAlgorithm = this._idTokenSigningAlgorithm;
    }
    if (this._logoutMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutMode = this._logoutMode;
    }
    if (this._logoutUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutUris = this._logoutUris;
    }
    if (this._pairwiseIdentifierUserType !== undefined) {
      hasAnyValues = true;
      internalValueResult.pairwiseIdentifierUserType = this._pairwiseIdentifierUserType;
    }
    if (this._pingAccessLogoutCapable !== undefined) {
      hasAnyValues = true;
      internalValueResult.pingAccessLogoutCapable = this._pingAccessLogoutCapable;
    }
    if (this._policyGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.policyGroup = this._policyGroup?.internalValue;
    }
    if (this._postLogoutRedirectUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.postLogoutRedirectUris = this._postLogoutRedirectUris;
    }
    if (this._sectorIdentifierUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.sectorIdentifierUri = this._sectorIdentifierUri;
    }
    if (this._userInfoResponseContentEncryptionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInfoResponseContentEncryptionAlgorithm = this._userInfoResponseContentEncryptionAlgorithm;
    }
    if (this._userInfoResponseEncryptionAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInfoResponseEncryptionAlgorithm = this._userInfoResponseEncryptionAlgorithm;
    }
    if (this._userInfoResponseSigningAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInfoResponseSigningAlgorithm = this._userInfoResponseSigningAlgorithm;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OauthClientOidcPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backChannelLogoutUri = undefined;
      this._grantAccessSessionRevocationApi = undefined;
      this._grantAccessSessionSessionManagementApi = undefined;
      this._idTokenContentEncryptionAlgorithm = undefined;
      this._idTokenEncryptionAlgorithm = undefined;
      this._idTokenSigningAlgorithm = undefined;
      this._logoutMode = undefined;
      this._logoutUris = undefined;
      this._pairwiseIdentifierUserType = undefined;
      this._pingAccessLogoutCapable = undefined;
      this._policyGroup.internalValue = undefined;
      this._postLogoutRedirectUris = undefined;
      this._sectorIdentifierUri = undefined;
      this._userInfoResponseContentEncryptionAlgorithm = undefined;
      this._userInfoResponseEncryptionAlgorithm = undefined;
      this._userInfoResponseSigningAlgorithm = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backChannelLogoutUri = value.backChannelLogoutUri;
      this._grantAccessSessionRevocationApi = value.grantAccessSessionRevocationApi;
      this._grantAccessSessionSessionManagementApi = value.grantAccessSessionSessionManagementApi;
      this._idTokenContentEncryptionAlgorithm = value.idTokenContentEncryptionAlgorithm;
      this._idTokenEncryptionAlgorithm = value.idTokenEncryptionAlgorithm;
      this._idTokenSigningAlgorithm = value.idTokenSigningAlgorithm;
      this._logoutMode = value.logoutMode;
      this._logoutUris = value.logoutUris;
      this._pairwiseIdentifierUserType = value.pairwiseIdentifierUserType;
      this._pingAccessLogoutCapable = value.pingAccessLogoutCapable;
      this._policyGroup.internalValue = value.policyGroup;
      this._postLogoutRedirectUris = value.postLogoutRedirectUris;
      this._sectorIdentifierUri = value.sectorIdentifierUri;
      this._userInfoResponseContentEncryptionAlgorithm = value.userInfoResponseContentEncryptionAlgorithm;
      this._userInfoResponseEncryptionAlgorithm = value.userInfoResponseEncryptionAlgorithm;
      this._userInfoResponseSigningAlgorithm = value.userInfoResponseSigningAlgorithm;
    }
  }

  // back_channel_logout_uri - computed: true, optional: true, required: false
  private _backChannelLogoutUri?: string; 
  public get backChannelLogoutUri() {
    return this.getStringAttribute('back_channel_logout_uri');
  }
  public set backChannelLogoutUri(value: string) {
    this._backChannelLogoutUri = value;
  }
  public resetBackChannelLogoutUri() {
    this._backChannelLogoutUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backChannelLogoutUriInput() {
    return this._backChannelLogoutUri;
  }

  // grant_access_session_revocation_api - computed: true, optional: true, required: false
  private _grantAccessSessionRevocationApi?: boolean | cdktf.IResolvable; 
  public get grantAccessSessionRevocationApi() {
    return this.getBooleanAttribute('grant_access_session_revocation_api');
  }
  public set grantAccessSessionRevocationApi(value: boolean | cdktf.IResolvable) {
    this._grantAccessSessionRevocationApi = value;
  }
  public resetGrantAccessSessionRevocationApi() {
    this._grantAccessSessionRevocationApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantAccessSessionRevocationApiInput() {
    return this._grantAccessSessionRevocationApi;
  }

  // grant_access_session_session_management_api - computed: true, optional: true, required: false
  private _grantAccessSessionSessionManagementApi?: boolean | cdktf.IResolvable; 
  public get grantAccessSessionSessionManagementApi() {
    return this.getBooleanAttribute('grant_access_session_session_management_api');
  }
  public set grantAccessSessionSessionManagementApi(value: boolean | cdktf.IResolvable) {
    this._grantAccessSessionSessionManagementApi = value;
  }
  public resetGrantAccessSessionSessionManagementApi() {
    this._grantAccessSessionSessionManagementApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grantAccessSessionSessionManagementApiInput() {
    return this._grantAccessSessionSessionManagementApi;
  }

  // id_token_content_encryption_algorithm - computed: true, optional: true, required: false
  private _idTokenContentEncryptionAlgorithm?: string; 
  public get idTokenContentEncryptionAlgorithm() {
    return this.getStringAttribute('id_token_content_encryption_algorithm');
  }
  public set idTokenContentEncryptionAlgorithm(value: string) {
    this._idTokenContentEncryptionAlgorithm = value;
  }
  public resetIdTokenContentEncryptionAlgorithm() {
    this._idTokenContentEncryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenContentEncryptionAlgorithmInput() {
    return this._idTokenContentEncryptionAlgorithm;
  }

  // id_token_encryption_algorithm - computed: true, optional: true, required: false
  private _idTokenEncryptionAlgorithm?: string; 
  public get idTokenEncryptionAlgorithm() {
    return this.getStringAttribute('id_token_encryption_algorithm');
  }
  public set idTokenEncryptionAlgorithm(value: string) {
    this._idTokenEncryptionAlgorithm = value;
  }
  public resetIdTokenEncryptionAlgorithm() {
    this._idTokenEncryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenEncryptionAlgorithmInput() {
    return this._idTokenEncryptionAlgorithm;
  }

  // id_token_signing_algorithm - computed: true, optional: true, required: false
  private _idTokenSigningAlgorithm?: string; 
  public get idTokenSigningAlgorithm() {
    return this.getStringAttribute('id_token_signing_algorithm');
  }
  public set idTokenSigningAlgorithm(value: string) {
    this._idTokenSigningAlgorithm = value;
  }
  public resetIdTokenSigningAlgorithm() {
    this._idTokenSigningAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenSigningAlgorithmInput() {
    return this._idTokenSigningAlgorithm;
  }

  // logout_mode - computed: true, optional: true, required: false
  private _logoutMode?: string; 
  public get logoutMode() {
    return this.getStringAttribute('logout_mode');
  }
  public set logoutMode(value: string) {
    this._logoutMode = value;
  }
  public resetLogoutMode() {
    this._logoutMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutModeInput() {
    return this._logoutMode;
  }

  // logout_uris - computed: true, optional: true, required: false
  private _logoutUris?: string[]; 
  public get logoutUris() {
    return cdktf.Fn.tolist(this.getListAttribute('logout_uris'));
  }
  public set logoutUris(value: string[]) {
    this._logoutUris = value;
  }
  public resetLogoutUris() {
    this._logoutUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutUrisInput() {
    return this._logoutUris;
  }

  // pairwise_identifier_user_type - computed: true, optional: true, required: false
  private _pairwiseIdentifierUserType?: boolean | cdktf.IResolvable; 
  public get pairwiseIdentifierUserType() {
    return this.getBooleanAttribute('pairwise_identifier_user_type');
  }
  public set pairwiseIdentifierUserType(value: boolean | cdktf.IResolvable) {
    this._pairwiseIdentifierUserType = value;
  }
  public resetPairwiseIdentifierUserType() {
    this._pairwiseIdentifierUserType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pairwiseIdentifierUserTypeInput() {
    return this._pairwiseIdentifierUserType;
  }

  // ping_access_logout_capable - computed: true, optional: true, required: false
  private _pingAccessLogoutCapable?: boolean | cdktf.IResolvable; 
  public get pingAccessLogoutCapable() {
    return this.getBooleanAttribute('ping_access_logout_capable');
  }
  public set pingAccessLogoutCapable(value: boolean | cdktf.IResolvable) {
    this._pingAccessLogoutCapable = value;
  }
  public resetPingAccessLogoutCapable() {
    this._pingAccessLogoutCapable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingAccessLogoutCapableInput() {
    return this._pingAccessLogoutCapable;
  }

  // policy_group - computed: true, optional: true, required: false
  private _policyGroup = new OauthClientOidcPolicyPolicyGroupOutputReference(this, "policy_group");
  public get policyGroup() {
    return this._policyGroup;
  }
  public putPolicyGroup(value: OauthClientOidcPolicyPolicyGroup) {
    this._policyGroup.internalValue = value;
  }
  public resetPolicyGroup() {
    this._policyGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyGroupInput() {
    return this._policyGroup.internalValue;
  }

  // post_logout_redirect_uris - computed: true, optional: true, required: false
  private _postLogoutRedirectUris?: string[]; 
  public get postLogoutRedirectUris() {
    return cdktf.Fn.tolist(this.getListAttribute('post_logout_redirect_uris'));
  }
  public set postLogoutRedirectUris(value: string[]) {
    this._postLogoutRedirectUris = value;
  }
  public resetPostLogoutRedirectUris() {
    this._postLogoutRedirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postLogoutRedirectUrisInput() {
    return this._postLogoutRedirectUris;
  }

  // sector_identifier_uri - computed: true, optional: true, required: false
  private _sectorIdentifierUri?: string; 
  public get sectorIdentifierUri() {
    return this.getStringAttribute('sector_identifier_uri');
  }
  public set sectorIdentifierUri(value: string) {
    this._sectorIdentifierUri = value;
  }
  public resetSectorIdentifierUri() {
    this._sectorIdentifierUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sectorIdentifierUriInput() {
    return this._sectorIdentifierUri;
  }

  // user_info_response_content_encryption_algorithm - computed: true, optional: true, required: false
  private _userInfoResponseContentEncryptionAlgorithm?: string; 
  public get userInfoResponseContentEncryptionAlgorithm() {
    return this.getStringAttribute('user_info_response_content_encryption_algorithm');
  }
  public set userInfoResponseContentEncryptionAlgorithm(value: string) {
    this._userInfoResponseContentEncryptionAlgorithm = value;
  }
  public resetUserInfoResponseContentEncryptionAlgorithm() {
    this._userInfoResponseContentEncryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInfoResponseContentEncryptionAlgorithmInput() {
    return this._userInfoResponseContentEncryptionAlgorithm;
  }

  // user_info_response_encryption_algorithm - computed: true, optional: true, required: false
  private _userInfoResponseEncryptionAlgorithm?: string; 
  public get userInfoResponseEncryptionAlgorithm() {
    return this.getStringAttribute('user_info_response_encryption_algorithm');
  }
  public set userInfoResponseEncryptionAlgorithm(value: string) {
    this._userInfoResponseEncryptionAlgorithm = value;
  }
  public resetUserInfoResponseEncryptionAlgorithm() {
    this._userInfoResponseEncryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInfoResponseEncryptionAlgorithmInput() {
    return this._userInfoResponseEncryptionAlgorithm;
  }

  // user_info_response_signing_algorithm - computed: true, optional: true, required: false
  private _userInfoResponseSigningAlgorithm?: string; 
  public get userInfoResponseSigningAlgorithm() {
    return this.getStringAttribute('user_info_response_signing_algorithm');
  }
  public set userInfoResponseSigningAlgorithm(value: string) {
    this._userInfoResponseSigningAlgorithm = value;
  }
  public resetUserInfoResponseSigningAlgorithm() {
    this._userInfoResponseSigningAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInfoResponseSigningAlgorithmInput() {
    return this._userInfoResponseSigningAlgorithm;
  }
}
export interface OauthClientRequestPolicyRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#id OauthClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function oauthClientRequestPolicyRefToTerraform(struct?: OauthClientRequestPolicyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function oauthClientRequestPolicyRefToHclTerraform(struct?: OauthClientRequestPolicyRef | cdktf.IResolvable): any {
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

export class OauthClientRequestPolicyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthClientRequestPolicyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthClientRequestPolicyRef | cdktf.IResolvable | undefined) {
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
export interface OauthClientTokenExchangeProcessorPolicyRef {
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#id OauthClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}

export function oauthClientTokenExchangeProcessorPolicyRefToTerraform(struct?: OauthClientTokenExchangeProcessorPolicyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
  }
}


export function oauthClientTokenExchangeProcessorPolicyRefToHclTerraform(struct?: OauthClientTokenExchangeProcessorPolicyRef | cdktf.IResolvable): any {
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

export class OauthClientTokenExchangeProcessorPolicyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OauthClientTokenExchangeProcessorPolicyRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: OauthClientTokenExchangeProcessorPolicyRef | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client pingfederate_oauth_client}
*/
export class OauthClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_oauth_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OauthClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OauthClient to import
  * @param importFromId The id of the existing OauthClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OauthClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_oauth_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/oauth_client pingfederate_oauth_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OauthClientConfig
  */
  public constructor(scope: Construct, id: string, config: OauthClientConfig) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_oauth_client',
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
    this._allowAuthenticationApiInit = config.allowAuthenticationApiInit;
    this._authorizationDetailTypes = config.authorizationDetailTypes;
    this._bypassActivationCodeConfirmationOverride = config.bypassActivationCodeConfirmationOverride;
    this._bypassApprovalPage = config.bypassApprovalPage;
    this._cibaDeliveryMode = config.cibaDeliveryMode;
    this._cibaNotificationEndpoint = config.cibaNotificationEndpoint;
    this._cibaPollingInterval = config.cibaPollingInterval;
    this._cibaRequestObjectSigningAlgorithm = config.cibaRequestObjectSigningAlgorithm;
    this._cibaRequireSignedRequests = config.cibaRequireSignedRequests;
    this._cibaUserCodeSupported = config.cibaUserCodeSupported;
    this._clientAuth.internalValue = config.clientAuth;
    this._clientId = config.clientId;
    this._clientSecretRetentionPeriod = config.clientSecretRetentionPeriod;
    this._clientSecretRetentionPeriodType = config.clientSecretRetentionPeriodType;
    this._defaultAccessTokenManagerRef.internalValue = config.defaultAccessTokenManagerRef;
    this._description = config.description;
    this._deviceFlowSettingType = config.deviceFlowSettingType;
    this._devicePollingIntervalOverride = config.devicePollingIntervalOverride;
    this._enableCookielessAuthenticationApi = config.enableCookielessAuthenticationApi;
    this._enabled = config.enabled;
    this._exclusiveScopes = config.exclusiveScopes;
    this._extendedParameters.internalValue = config.extendedParameters;
    this._grantTypes = config.grantTypes;
    this._jwksSettings.internalValue = config.jwksSettings;
    this._jwtSecuredAuthorizationResponseModeContentEncryptionAlgorithm = config.jwtSecuredAuthorizationResponseModeContentEncryptionAlgorithm;
    this._jwtSecuredAuthorizationResponseModeEncryptionAlgorithm = config.jwtSecuredAuthorizationResponseModeEncryptionAlgorithm;
    this._jwtSecuredAuthorizationResponseModeSigningAlgorithm = config.jwtSecuredAuthorizationResponseModeSigningAlgorithm;
    this._lockoutMaxMaliciousActions = config.lockoutMaxMaliciousActions;
    this._lockoutMaxMaliciousActionsType = config.lockoutMaxMaliciousActionsType;
    this._logoUrl = config.logoUrl;
    this._name = config.name;
    this._offlineAccessRequireConsentPrompt = config.offlineAccessRequireConsentPrompt;
    this._oidcPolicy.internalValue = config.oidcPolicy;
    this._pendingAuthorizationTimeoutOverride = config.pendingAuthorizationTimeoutOverride;
    this._persistentGrantExpirationTime = config.persistentGrantExpirationTime;
    this._persistentGrantExpirationTimeUnit = config.persistentGrantExpirationTimeUnit;
    this._persistentGrantExpirationType = config.persistentGrantExpirationType;
    this._persistentGrantIdleTimeout = config.persistentGrantIdleTimeout;
    this._persistentGrantIdleTimeoutTimeUnit = config.persistentGrantIdleTimeoutTimeUnit;
    this._persistentGrantIdleTimeoutType = config.persistentGrantIdleTimeoutType;
    this._persistentGrantReuseGrantTypes = config.persistentGrantReuseGrantTypes;
    this._persistentGrantReuseType = config.persistentGrantReuseType;
    this._redirectUris = config.redirectUris;
    this._refreshRolling = config.refreshRolling;
    this._refreshTokenRollingGracePeriod = config.refreshTokenRollingGracePeriod;
    this._refreshTokenRollingGracePeriodType = config.refreshTokenRollingGracePeriodType;
    this._refreshTokenRollingInterval = config.refreshTokenRollingInterval;
    this._refreshTokenRollingIntervalTimeUnit = config.refreshTokenRollingIntervalTimeUnit;
    this._refreshTokenRollingIntervalType = config.refreshTokenRollingIntervalType;
    this._requestObjectSigningAlgorithm = config.requestObjectSigningAlgorithm;
    this._requestPolicyRef.internalValue = config.requestPolicyRef;
    this._requireDpop = config.requireDpop;
    this._requireJwtSecuredAuthorizationResponseMode = config.requireJwtSecuredAuthorizationResponseMode;
    this._requireOfflineAccessScopeToIssueRefreshTokens = config.requireOfflineAccessScopeToIssueRefreshTokens;
    this._requireProofKeyForCodeExchange = config.requireProofKeyForCodeExchange;
    this._requirePushedAuthorizationRequests = config.requirePushedAuthorizationRequests;
    this._requireSignedRequests = config.requireSignedRequests;
    this._restrictScopes = config.restrictScopes;
    this._restrictToDefaultAccessTokenManager = config.restrictToDefaultAccessTokenManager;
    this._restrictedResponseTypes = config.restrictedResponseTypes;
    this._restrictedScopes = config.restrictedScopes;
    this._tokenExchangeProcessorPolicyRef.internalValue = config.tokenExchangeProcessorPolicyRef;
    this._tokenIntrospectionContentEncryptionAlgorithm = config.tokenIntrospectionContentEncryptionAlgorithm;
    this._tokenIntrospectionEncryptionAlgorithm = config.tokenIntrospectionEncryptionAlgorithm;
    this._tokenIntrospectionSigningAlgorithm = config.tokenIntrospectionSigningAlgorithm;
    this._userAuthorizationUrlOverride = config.userAuthorizationUrlOverride;
    this._validateUsingAllEligibleAtms = config.validateUsingAllEligibleAtms;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_authentication_api_init - computed: true, optional: true, required: false
  private _allowAuthenticationApiInit?: boolean | cdktf.IResolvable; 
  public get allowAuthenticationApiInit() {
    return this.getBooleanAttribute('allow_authentication_api_init');
  }
  public set allowAuthenticationApiInit(value: boolean | cdktf.IResolvable) {
    this._allowAuthenticationApiInit = value;
  }
  public resetAllowAuthenticationApiInit() {
    this._allowAuthenticationApiInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowAuthenticationApiInitInput() {
    return this._allowAuthenticationApiInit;
  }

  // authorization_detail_types - computed: true, optional: true, required: false
  private _authorizationDetailTypes?: string[]; 
  public get authorizationDetailTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('authorization_detail_types'));
  }
  public set authorizationDetailTypes(value: string[]) {
    this._authorizationDetailTypes = value;
  }
  public resetAuthorizationDetailTypes() {
    this._authorizationDetailTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationDetailTypesInput() {
    return this._authorizationDetailTypes;
  }

  // bypass_activation_code_confirmation_override - computed: false, optional: true, required: false
  private _bypassActivationCodeConfirmationOverride?: boolean | cdktf.IResolvable; 
  public get bypassActivationCodeConfirmationOverride() {
    return this.getBooleanAttribute('bypass_activation_code_confirmation_override');
  }
  public set bypassActivationCodeConfirmationOverride(value: boolean | cdktf.IResolvable) {
    this._bypassActivationCodeConfirmationOverride = value;
  }
  public resetBypassActivationCodeConfirmationOverride() {
    this._bypassActivationCodeConfirmationOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassActivationCodeConfirmationOverrideInput() {
    return this._bypassActivationCodeConfirmationOverride;
  }

  // bypass_approval_page - computed: true, optional: true, required: false
  private _bypassApprovalPage?: boolean | cdktf.IResolvable; 
  public get bypassApprovalPage() {
    return this.getBooleanAttribute('bypass_approval_page');
  }
  public set bypassApprovalPage(value: boolean | cdktf.IResolvable) {
    this._bypassApprovalPage = value;
  }
  public resetBypassApprovalPage() {
    this._bypassApprovalPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassApprovalPageInput() {
    return this._bypassApprovalPage;
  }

  // ciba_delivery_mode - computed: false, optional: true, required: false
  private _cibaDeliveryMode?: string; 
  public get cibaDeliveryMode() {
    return this.getStringAttribute('ciba_delivery_mode');
  }
  public set cibaDeliveryMode(value: string) {
    this._cibaDeliveryMode = value;
  }
  public resetCibaDeliveryMode() {
    this._cibaDeliveryMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cibaDeliveryModeInput() {
    return this._cibaDeliveryMode;
  }

  // ciba_notification_endpoint - computed: false, optional: true, required: false
  private _cibaNotificationEndpoint?: string; 
  public get cibaNotificationEndpoint() {
    return this.getStringAttribute('ciba_notification_endpoint');
  }
  public set cibaNotificationEndpoint(value: string) {
    this._cibaNotificationEndpoint = value;
  }
  public resetCibaNotificationEndpoint() {
    this._cibaNotificationEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cibaNotificationEndpointInput() {
    return this._cibaNotificationEndpoint;
  }

  // ciba_polling_interval - computed: false, optional: true, required: false
  private _cibaPollingInterval?: number; 
  public get cibaPollingInterval() {
    return this.getNumberAttribute('ciba_polling_interval');
  }
  public set cibaPollingInterval(value: number) {
    this._cibaPollingInterval = value;
  }
  public resetCibaPollingInterval() {
    this._cibaPollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cibaPollingIntervalInput() {
    return this._cibaPollingInterval;
  }

  // ciba_request_object_signing_algorithm - computed: false, optional: true, required: false
  private _cibaRequestObjectSigningAlgorithm?: string; 
  public get cibaRequestObjectSigningAlgorithm() {
    return this.getStringAttribute('ciba_request_object_signing_algorithm');
  }
  public set cibaRequestObjectSigningAlgorithm(value: string) {
    this._cibaRequestObjectSigningAlgorithm = value;
  }
  public resetCibaRequestObjectSigningAlgorithm() {
    this._cibaRequestObjectSigningAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cibaRequestObjectSigningAlgorithmInput() {
    return this._cibaRequestObjectSigningAlgorithm;
  }

  // ciba_require_signed_requests - computed: false, optional: true, required: false
  private _cibaRequireSignedRequests?: boolean | cdktf.IResolvable; 
  public get cibaRequireSignedRequests() {
    return this.getBooleanAttribute('ciba_require_signed_requests');
  }
  public set cibaRequireSignedRequests(value: boolean | cdktf.IResolvable) {
    this._cibaRequireSignedRequests = value;
  }
  public resetCibaRequireSignedRequests() {
    this._cibaRequireSignedRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cibaRequireSignedRequestsInput() {
    return this._cibaRequireSignedRequests;
  }

  // ciba_user_code_supported - computed: false, optional: true, required: false
  private _cibaUserCodeSupported?: boolean | cdktf.IResolvable; 
  public get cibaUserCodeSupported() {
    return this.getBooleanAttribute('ciba_user_code_supported');
  }
  public set cibaUserCodeSupported(value: boolean | cdktf.IResolvable) {
    this._cibaUserCodeSupported = value;
  }
  public resetCibaUserCodeSupported() {
    this._cibaUserCodeSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cibaUserCodeSupportedInput() {
    return this._cibaUserCodeSupported;
  }

  // client_auth - computed: true, optional: true, required: false
  private _clientAuth = new OauthClientClientAuthOutputReference(this, "client_auth");
  public get clientAuth() {
    return this._clientAuth;
  }
  public putClientAuth(value: OauthClientClientAuth) {
    this._clientAuth.internalValue = value;
  }
  public resetClientAuth() {
    this._clientAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthInput() {
    return this._clientAuth.internalValue;
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

  // client_secret_changed_time - computed: true, optional: false, required: false
  public get clientSecretChangedTime() {
    return this.getStringAttribute('client_secret_changed_time');
  }

  // client_secret_retention_period - computed: false, optional: true, required: false
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

  // client_secret_retention_period_type - computed: true, optional: true, required: false
  private _clientSecretRetentionPeriodType?: string; 
  public get clientSecretRetentionPeriodType() {
    return this.getStringAttribute('client_secret_retention_period_type');
  }
  public set clientSecretRetentionPeriodType(value: string) {
    this._clientSecretRetentionPeriodType = value;
  }
  public resetClientSecretRetentionPeriodType() {
    this._clientSecretRetentionPeriodType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretRetentionPeriodTypeInput() {
    return this._clientSecretRetentionPeriodType;
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // default_access_token_manager_ref - computed: false, optional: true, required: false
  private _defaultAccessTokenManagerRef = new OauthClientDefaultAccessTokenManagerRefOutputReference(this, "default_access_token_manager_ref");
  public get defaultAccessTokenManagerRef() {
    return this._defaultAccessTokenManagerRef;
  }
  public putDefaultAccessTokenManagerRef(value: OauthClientDefaultAccessTokenManagerRef) {
    this._defaultAccessTokenManagerRef.internalValue = value;
  }
  public resetDefaultAccessTokenManagerRef() {
    this._defaultAccessTokenManagerRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAccessTokenManagerRefInput() {
    return this._defaultAccessTokenManagerRef.internalValue;
  }

  // description - computed: false, optional: true, required: false
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

  // device_flow_setting_type - computed: true, optional: true, required: false
  private _deviceFlowSettingType?: string; 
  public get deviceFlowSettingType() {
    return this.getStringAttribute('device_flow_setting_type');
  }
  public set deviceFlowSettingType(value: string) {
    this._deviceFlowSettingType = value;
  }
  public resetDeviceFlowSettingType() {
    this._deviceFlowSettingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceFlowSettingTypeInput() {
    return this._deviceFlowSettingType;
  }

  // device_polling_interval_override - computed: false, optional: true, required: false
  private _devicePollingIntervalOverride?: number; 
  public get devicePollingIntervalOverride() {
    return this.getNumberAttribute('device_polling_interval_override');
  }
  public set devicePollingIntervalOverride(value: number) {
    this._devicePollingIntervalOverride = value;
  }
  public resetDevicePollingIntervalOverride() {
    this._devicePollingIntervalOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devicePollingIntervalOverrideInput() {
    return this._devicePollingIntervalOverride;
  }

  // enable_cookieless_authentication_api - computed: true, optional: true, required: false
  private _enableCookielessAuthenticationApi?: boolean | cdktf.IResolvable; 
  public get enableCookielessAuthenticationApi() {
    return this.getBooleanAttribute('enable_cookieless_authentication_api');
  }
  public set enableCookielessAuthenticationApi(value: boolean | cdktf.IResolvable) {
    this._enableCookielessAuthenticationApi = value;
  }
  public resetEnableCookielessAuthenticationApi() {
    this._enableCookielessAuthenticationApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCookielessAuthenticationApiInput() {
    return this._enableCookielessAuthenticationApi;
  }

  // enabled - computed: true, optional: true, required: false
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

  // exclusive_scopes - computed: true, optional: true, required: false
  private _exclusiveScopes?: string[]; 
  public get exclusiveScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('exclusive_scopes'));
  }
  public set exclusiveScopes(value: string[]) {
    this._exclusiveScopes = value;
  }
  public resetExclusiveScopes() {
    this._exclusiveScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exclusiveScopesInput() {
    return this._exclusiveScopes;
  }

  // extended_parameters - computed: false, optional: true, required: false
  private _extendedParameters = new OauthClientExtendedParametersMap(this, "extended_parameters");
  public get extendedParameters() {
    return this._extendedParameters;
  }
  public putExtendedParameters(value: { [key: string]: OauthClientExtendedParameters } | cdktf.IResolvable) {
    this._extendedParameters.internalValue = value;
  }
  public resetExtendedParameters() {
    this._extendedParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedParametersInput() {
    return this._extendedParameters.internalValue;
  }

  // grant_types - computed: false, optional: false, required: true
  private _grantTypes?: string[]; 
  public get grantTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('grant_types'));
  }
  public set grantTypes(value: string[]) {
    this._grantTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get grantTypesInput() {
    return this._grantTypes;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // jwks_settings - computed: false, optional: true, required: false
  private _jwksSettings = new OauthClientJwksSettingsOutputReference(this, "jwks_settings");
  public get jwksSettings() {
    return this._jwksSettings;
  }
  public putJwksSettings(value: OauthClientJwksSettings) {
    this._jwksSettings.internalValue = value;
  }
  public resetJwksSettings() {
    this._jwksSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwksSettingsInput() {
    return this._jwksSettings.internalValue;
  }

  // jwt_secured_authorization_response_mode_content_encryption_algorithm - computed: false, optional: true, required: false
  private _jwtSecuredAuthorizationResponseModeContentEncryptionAlgorithm?: string; 
  public get jwtSecuredAuthorizationResponseModeContentEncryptionAlgorithm() {
    return this.getStringAttribute('jwt_secured_authorization_response_mode_content_encryption_algorithm');
  }
  public set jwtSecuredAuthorizationResponseModeContentEncryptionAlgorithm(value: string) {
    this._jwtSecuredAuthorizationResponseModeContentEncryptionAlgorithm = value;
  }
  public resetJwtSecuredAuthorizationResponseModeContentEncryptionAlgorithm() {
    this._jwtSecuredAuthorizationResponseModeContentEncryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtSecuredAuthorizationResponseModeContentEncryptionAlgorithmInput() {
    return this._jwtSecuredAuthorizationResponseModeContentEncryptionAlgorithm;
  }

  // jwt_secured_authorization_response_mode_encryption_algorithm - computed: false, optional: true, required: false
  private _jwtSecuredAuthorizationResponseModeEncryptionAlgorithm?: string; 
  public get jwtSecuredAuthorizationResponseModeEncryptionAlgorithm() {
    return this.getStringAttribute('jwt_secured_authorization_response_mode_encryption_algorithm');
  }
  public set jwtSecuredAuthorizationResponseModeEncryptionAlgorithm(value: string) {
    this._jwtSecuredAuthorizationResponseModeEncryptionAlgorithm = value;
  }
  public resetJwtSecuredAuthorizationResponseModeEncryptionAlgorithm() {
    this._jwtSecuredAuthorizationResponseModeEncryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtSecuredAuthorizationResponseModeEncryptionAlgorithmInput() {
    return this._jwtSecuredAuthorizationResponseModeEncryptionAlgorithm;
  }

  // jwt_secured_authorization_response_mode_signing_algorithm - computed: false, optional: true, required: false
  private _jwtSecuredAuthorizationResponseModeSigningAlgorithm?: string; 
  public get jwtSecuredAuthorizationResponseModeSigningAlgorithm() {
    return this.getStringAttribute('jwt_secured_authorization_response_mode_signing_algorithm');
  }
  public set jwtSecuredAuthorizationResponseModeSigningAlgorithm(value: string) {
    this._jwtSecuredAuthorizationResponseModeSigningAlgorithm = value;
  }
  public resetJwtSecuredAuthorizationResponseModeSigningAlgorithm() {
    this._jwtSecuredAuthorizationResponseModeSigningAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtSecuredAuthorizationResponseModeSigningAlgorithmInput() {
    return this._jwtSecuredAuthorizationResponseModeSigningAlgorithm;
  }

  // lockout_max_malicious_actions - computed: false, optional: true, required: false
  private _lockoutMaxMaliciousActions?: number; 
  public get lockoutMaxMaliciousActions() {
    return this.getNumberAttribute('lockout_max_malicious_actions');
  }
  public set lockoutMaxMaliciousActions(value: number) {
    this._lockoutMaxMaliciousActions = value;
  }
  public resetLockoutMaxMaliciousActions() {
    this._lockoutMaxMaliciousActions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutMaxMaliciousActionsInput() {
    return this._lockoutMaxMaliciousActions;
  }

  // lockout_max_malicious_actions_type - computed: true, optional: true, required: false
  private _lockoutMaxMaliciousActionsType?: string; 
  public get lockoutMaxMaliciousActionsType() {
    return this.getStringAttribute('lockout_max_malicious_actions_type');
  }
  public set lockoutMaxMaliciousActionsType(value: string) {
    this._lockoutMaxMaliciousActionsType = value;
  }
  public resetLockoutMaxMaliciousActionsType() {
    this._lockoutMaxMaliciousActionsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockoutMaxMaliciousActionsTypeInput() {
    return this._lockoutMaxMaliciousActionsType;
  }

  // logo_url - computed: false, optional: true, required: false
  private _logoUrl?: string; 
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }
  public set logoUrl(value: string) {
    this._logoUrl = value;
  }
  public resetLogoUrl() {
    this._logoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoUrlInput() {
    return this._logoUrl;
  }

  // modification_date - computed: true, optional: false, required: false
  public get modificationDate() {
    return this.getStringAttribute('modification_date');
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

  // offline_access_require_consent_prompt - computed: true, optional: true, required: false
  private _offlineAccessRequireConsentPrompt?: string; 
  public get offlineAccessRequireConsentPrompt() {
    return this.getStringAttribute('offline_access_require_consent_prompt');
  }
  public set offlineAccessRequireConsentPrompt(value: string) {
    this._offlineAccessRequireConsentPrompt = value;
  }
  public resetOfflineAccessRequireConsentPrompt() {
    this._offlineAccessRequireConsentPrompt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineAccessRequireConsentPromptInput() {
    return this._offlineAccessRequireConsentPrompt;
  }

  // oidc_policy - computed: true, optional: true, required: false
  private _oidcPolicy = new OauthClientOidcPolicyOutputReference(this, "oidc_policy");
  public get oidcPolicy() {
    return this._oidcPolicy;
  }
  public putOidcPolicy(value: OauthClientOidcPolicy) {
    this._oidcPolicy.internalValue = value;
  }
  public resetOidcPolicy() {
    this._oidcPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcPolicyInput() {
    return this._oidcPolicy.internalValue;
  }

  // pending_authorization_timeout_override - computed: false, optional: true, required: false
  private _pendingAuthorizationTimeoutOverride?: number; 
  public get pendingAuthorizationTimeoutOverride() {
    return this.getNumberAttribute('pending_authorization_timeout_override');
  }
  public set pendingAuthorizationTimeoutOverride(value: number) {
    this._pendingAuthorizationTimeoutOverride = value;
  }
  public resetPendingAuthorizationTimeoutOverride() {
    this._pendingAuthorizationTimeoutOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingAuthorizationTimeoutOverrideInput() {
    return this._pendingAuthorizationTimeoutOverride;
  }

  // persistent_grant_expiration_time - computed: true, optional: true, required: false
  private _persistentGrantExpirationTime?: number; 
  public get persistentGrantExpirationTime() {
    return this.getNumberAttribute('persistent_grant_expiration_time');
  }
  public set persistentGrantExpirationTime(value: number) {
    this._persistentGrantExpirationTime = value;
  }
  public resetPersistentGrantExpirationTime() {
    this._persistentGrantExpirationTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentGrantExpirationTimeInput() {
    return this._persistentGrantExpirationTime;
  }

  // persistent_grant_expiration_time_unit - computed: true, optional: true, required: false
  private _persistentGrantExpirationTimeUnit?: string; 
  public get persistentGrantExpirationTimeUnit() {
    return this.getStringAttribute('persistent_grant_expiration_time_unit');
  }
  public set persistentGrantExpirationTimeUnit(value: string) {
    this._persistentGrantExpirationTimeUnit = value;
  }
  public resetPersistentGrantExpirationTimeUnit() {
    this._persistentGrantExpirationTimeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentGrantExpirationTimeUnitInput() {
    return this._persistentGrantExpirationTimeUnit;
  }

  // persistent_grant_expiration_type - computed: true, optional: true, required: false
  private _persistentGrantExpirationType?: string; 
  public get persistentGrantExpirationType() {
    return this.getStringAttribute('persistent_grant_expiration_type');
  }
  public set persistentGrantExpirationType(value: string) {
    this._persistentGrantExpirationType = value;
  }
  public resetPersistentGrantExpirationType() {
    this._persistentGrantExpirationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentGrantExpirationTypeInput() {
    return this._persistentGrantExpirationType;
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

  // persistent_grant_idle_timeout_type - computed: true, optional: true, required: false
  private _persistentGrantIdleTimeoutType?: string; 
  public get persistentGrantIdleTimeoutType() {
    return this.getStringAttribute('persistent_grant_idle_timeout_type');
  }
  public set persistentGrantIdleTimeoutType(value: string) {
    this._persistentGrantIdleTimeoutType = value;
  }
  public resetPersistentGrantIdleTimeoutType() {
    this._persistentGrantIdleTimeoutType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentGrantIdleTimeoutTypeInput() {
    return this._persistentGrantIdleTimeoutType;
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

  // persistent_grant_reuse_type - computed: true, optional: true, required: false
  private _persistentGrantReuseType?: string; 
  public get persistentGrantReuseType() {
    return this.getStringAttribute('persistent_grant_reuse_type');
  }
  public set persistentGrantReuseType(value: string) {
    this._persistentGrantReuseType = value;
  }
  public resetPersistentGrantReuseType() {
    this._persistentGrantReuseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentGrantReuseTypeInput() {
    return this._persistentGrantReuseType;
  }

  // redirect_uris - computed: true, optional: true, required: false
  private _redirectUris?: string[]; 
  public get redirectUris() {
    return cdktf.Fn.tolist(this.getListAttribute('redirect_uris'));
  }
  public set redirectUris(value: string[]) {
    this._redirectUris = value;
  }
  public resetRedirectUris() {
    this._redirectUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUrisInput() {
    return this._redirectUris;
  }

  // refresh_rolling - computed: true, optional: true, required: false
  private _refreshRolling?: string; 
  public get refreshRolling() {
    return this.getStringAttribute('refresh_rolling');
  }
  public set refreshRolling(value: string) {
    this._refreshRolling = value;
  }
  public resetRefreshRolling() {
    this._refreshRolling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshRollingInput() {
    return this._refreshRolling;
  }

  // refresh_token_rolling_grace_period - computed: false, optional: true, required: false
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

  // refresh_token_rolling_grace_period_type - computed: true, optional: true, required: false
  private _refreshTokenRollingGracePeriodType?: string; 
  public get refreshTokenRollingGracePeriodType() {
    return this.getStringAttribute('refresh_token_rolling_grace_period_type');
  }
  public set refreshTokenRollingGracePeriodType(value: string) {
    this._refreshTokenRollingGracePeriodType = value;
  }
  public resetRefreshTokenRollingGracePeriodType() {
    this._refreshTokenRollingGracePeriodType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenRollingGracePeriodTypeInput() {
    return this._refreshTokenRollingGracePeriodType;
  }

  // refresh_token_rolling_interval - computed: false, optional: true, required: false
  private _refreshTokenRollingInterval?: number; 
  public get refreshTokenRollingInterval() {
    return this.getNumberAttribute('refresh_token_rolling_interval');
  }
  public set refreshTokenRollingInterval(value: number) {
    this._refreshTokenRollingInterval = value;
  }
  public resetRefreshTokenRollingInterval() {
    this._refreshTokenRollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenRollingIntervalInput() {
    return this._refreshTokenRollingInterval;
  }

  // refresh_token_rolling_interval_time_unit - computed: true, optional: true, required: false
  private _refreshTokenRollingIntervalTimeUnit?: string; 
  public get refreshTokenRollingIntervalTimeUnit() {
    return this.getStringAttribute('refresh_token_rolling_interval_time_unit');
  }
  public set refreshTokenRollingIntervalTimeUnit(value: string) {
    this._refreshTokenRollingIntervalTimeUnit = value;
  }
  public resetRefreshTokenRollingIntervalTimeUnit() {
    this._refreshTokenRollingIntervalTimeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenRollingIntervalTimeUnitInput() {
    return this._refreshTokenRollingIntervalTimeUnit;
  }

  // refresh_token_rolling_interval_type - computed: true, optional: true, required: false
  private _refreshTokenRollingIntervalType?: string; 
  public get refreshTokenRollingIntervalType() {
    return this.getStringAttribute('refresh_token_rolling_interval_type');
  }
  public set refreshTokenRollingIntervalType(value: string) {
    this._refreshTokenRollingIntervalType = value;
  }
  public resetRefreshTokenRollingIntervalType() {
    this._refreshTokenRollingIntervalType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenRollingIntervalTypeInput() {
    return this._refreshTokenRollingIntervalType;
  }

  // request_object_signing_algorithm - computed: false, optional: true, required: false
  private _requestObjectSigningAlgorithm?: string; 
  public get requestObjectSigningAlgorithm() {
    return this.getStringAttribute('request_object_signing_algorithm');
  }
  public set requestObjectSigningAlgorithm(value: string) {
    this._requestObjectSigningAlgorithm = value;
  }
  public resetRequestObjectSigningAlgorithm() {
    this._requestObjectSigningAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestObjectSigningAlgorithmInput() {
    return this._requestObjectSigningAlgorithm;
  }

  // request_policy_ref - computed: false, optional: true, required: false
  private _requestPolicyRef = new OauthClientRequestPolicyRefOutputReference(this, "request_policy_ref");
  public get requestPolicyRef() {
    return this._requestPolicyRef;
  }
  public putRequestPolicyRef(value: OauthClientRequestPolicyRef) {
    this._requestPolicyRef.internalValue = value;
  }
  public resetRequestPolicyRef() {
    this._requestPolicyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestPolicyRefInput() {
    return this._requestPolicyRef.internalValue;
  }

  // require_dpop - computed: true, optional: true, required: false
  private _requireDpop?: boolean | cdktf.IResolvable; 
  public get requireDpop() {
    return this.getBooleanAttribute('require_dpop');
  }
  public set requireDpop(value: boolean | cdktf.IResolvable) {
    this._requireDpop = value;
  }
  public resetRequireDpop() {
    this._requireDpop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireDpopInput() {
    return this._requireDpop;
  }

  // require_jwt_secured_authorization_response_mode - computed: true, optional: true, required: false
  private _requireJwtSecuredAuthorizationResponseMode?: boolean | cdktf.IResolvable; 
  public get requireJwtSecuredAuthorizationResponseMode() {
    return this.getBooleanAttribute('require_jwt_secured_authorization_response_mode');
  }
  public set requireJwtSecuredAuthorizationResponseMode(value: boolean | cdktf.IResolvable) {
    this._requireJwtSecuredAuthorizationResponseMode = value;
  }
  public resetRequireJwtSecuredAuthorizationResponseMode() {
    this._requireJwtSecuredAuthorizationResponseMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireJwtSecuredAuthorizationResponseModeInput() {
    return this._requireJwtSecuredAuthorizationResponseMode;
  }

  // require_offline_access_scope_to_issue_refresh_tokens - computed: true, optional: true, required: false
  private _requireOfflineAccessScopeToIssueRefreshTokens?: string; 
  public get requireOfflineAccessScopeToIssueRefreshTokens() {
    return this.getStringAttribute('require_offline_access_scope_to_issue_refresh_tokens');
  }
  public set requireOfflineAccessScopeToIssueRefreshTokens(value: string) {
    this._requireOfflineAccessScopeToIssueRefreshTokens = value;
  }
  public resetRequireOfflineAccessScopeToIssueRefreshTokens() {
    this._requireOfflineAccessScopeToIssueRefreshTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireOfflineAccessScopeToIssueRefreshTokensInput() {
    return this._requireOfflineAccessScopeToIssueRefreshTokens;
  }

  // require_proof_key_for_code_exchange - computed: true, optional: true, required: false
  private _requireProofKeyForCodeExchange?: boolean | cdktf.IResolvable; 
  public get requireProofKeyForCodeExchange() {
    return this.getBooleanAttribute('require_proof_key_for_code_exchange');
  }
  public set requireProofKeyForCodeExchange(value: boolean | cdktf.IResolvable) {
    this._requireProofKeyForCodeExchange = value;
  }
  public resetRequireProofKeyForCodeExchange() {
    this._requireProofKeyForCodeExchange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireProofKeyForCodeExchangeInput() {
    return this._requireProofKeyForCodeExchange;
  }

  // require_pushed_authorization_requests - computed: true, optional: true, required: false
  private _requirePushedAuthorizationRequests?: boolean | cdktf.IResolvable; 
  public get requirePushedAuthorizationRequests() {
    return this.getBooleanAttribute('require_pushed_authorization_requests');
  }
  public set requirePushedAuthorizationRequests(value: boolean | cdktf.IResolvable) {
    this._requirePushedAuthorizationRequests = value;
  }
  public resetRequirePushedAuthorizationRequests() {
    this._requirePushedAuthorizationRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirePushedAuthorizationRequestsInput() {
    return this._requirePushedAuthorizationRequests;
  }

  // require_signed_requests - computed: true, optional: true, required: false
  private _requireSignedRequests?: boolean | cdktf.IResolvable; 
  public get requireSignedRequests() {
    return this.getBooleanAttribute('require_signed_requests');
  }
  public set requireSignedRequests(value: boolean | cdktf.IResolvable) {
    this._requireSignedRequests = value;
  }
  public resetRequireSignedRequests() {
    this._requireSignedRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSignedRequestsInput() {
    return this._requireSignedRequests;
  }

  // restrict_scopes - computed: true, optional: true, required: false
  private _restrictScopes?: boolean | cdktf.IResolvable; 
  public get restrictScopes() {
    return this.getBooleanAttribute('restrict_scopes');
  }
  public set restrictScopes(value: boolean | cdktf.IResolvable) {
    this._restrictScopes = value;
  }
  public resetRestrictScopes() {
    this._restrictScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictScopesInput() {
    return this._restrictScopes;
  }

  // restrict_to_default_access_token_manager - computed: true, optional: true, required: false
  private _restrictToDefaultAccessTokenManager?: boolean | cdktf.IResolvable; 
  public get restrictToDefaultAccessTokenManager() {
    return this.getBooleanAttribute('restrict_to_default_access_token_manager');
  }
  public set restrictToDefaultAccessTokenManager(value: boolean | cdktf.IResolvable) {
    this._restrictToDefaultAccessTokenManager = value;
  }
  public resetRestrictToDefaultAccessTokenManager() {
    this._restrictToDefaultAccessTokenManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictToDefaultAccessTokenManagerInput() {
    return this._restrictToDefaultAccessTokenManager;
  }

  // restricted_response_types - computed: true, optional: true, required: false
  private _restrictedResponseTypes?: string[]; 
  public get restrictedResponseTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('restricted_response_types'));
  }
  public set restrictedResponseTypes(value: string[]) {
    this._restrictedResponseTypes = value;
  }
  public resetRestrictedResponseTypes() {
    this._restrictedResponseTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedResponseTypesInput() {
    return this._restrictedResponseTypes;
  }

  // restricted_scopes - computed: true, optional: true, required: false
  private _restrictedScopes?: string[]; 
  public get restrictedScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('restricted_scopes'));
  }
  public set restrictedScopes(value: string[]) {
    this._restrictedScopes = value;
  }
  public resetRestrictedScopes() {
    this._restrictedScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedScopesInput() {
    return this._restrictedScopes;
  }

  // token_exchange_processor_policy_ref - computed: false, optional: true, required: false
  private _tokenExchangeProcessorPolicyRef = new OauthClientTokenExchangeProcessorPolicyRefOutputReference(this, "token_exchange_processor_policy_ref");
  public get tokenExchangeProcessorPolicyRef() {
    return this._tokenExchangeProcessorPolicyRef;
  }
  public putTokenExchangeProcessorPolicyRef(value: OauthClientTokenExchangeProcessorPolicyRef) {
    this._tokenExchangeProcessorPolicyRef.internalValue = value;
  }
  public resetTokenExchangeProcessorPolicyRef() {
    this._tokenExchangeProcessorPolicyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenExchangeProcessorPolicyRefInput() {
    return this._tokenExchangeProcessorPolicyRef.internalValue;
  }

  // token_introspection_content_encryption_algorithm - computed: false, optional: true, required: false
  private _tokenIntrospectionContentEncryptionAlgorithm?: string; 
  public get tokenIntrospectionContentEncryptionAlgorithm() {
    return this.getStringAttribute('token_introspection_content_encryption_algorithm');
  }
  public set tokenIntrospectionContentEncryptionAlgorithm(value: string) {
    this._tokenIntrospectionContentEncryptionAlgorithm = value;
  }
  public resetTokenIntrospectionContentEncryptionAlgorithm() {
    this._tokenIntrospectionContentEncryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenIntrospectionContentEncryptionAlgorithmInput() {
    return this._tokenIntrospectionContentEncryptionAlgorithm;
  }

  // token_introspection_encryption_algorithm - computed: false, optional: true, required: false
  private _tokenIntrospectionEncryptionAlgorithm?: string; 
  public get tokenIntrospectionEncryptionAlgorithm() {
    return this.getStringAttribute('token_introspection_encryption_algorithm');
  }
  public set tokenIntrospectionEncryptionAlgorithm(value: string) {
    this._tokenIntrospectionEncryptionAlgorithm = value;
  }
  public resetTokenIntrospectionEncryptionAlgorithm() {
    this._tokenIntrospectionEncryptionAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenIntrospectionEncryptionAlgorithmInput() {
    return this._tokenIntrospectionEncryptionAlgorithm;
  }

  // token_introspection_signing_algorithm - computed: false, optional: true, required: false
  private _tokenIntrospectionSigningAlgorithm?: string; 
  public get tokenIntrospectionSigningAlgorithm() {
    return this.getStringAttribute('token_introspection_signing_algorithm');
  }
  public set tokenIntrospectionSigningAlgorithm(value: string) {
    this._tokenIntrospectionSigningAlgorithm = value;
  }
  public resetTokenIntrospectionSigningAlgorithm() {
    this._tokenIntrospectionSigningAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenIntrospectionSigningAlgorithmInput() {
    return this._tokenIntrospectionSigningAlgorithm;
  }

  // user_authorization_url_override - computed: false, optional: true, required: false
  private _userAuthorizationUrlOverride?: string; 
  public get userAuthorizationUrlOverride() {
    return this.getStringAttribute('user_authorization_url_override');
  }
  public set userAuthorizationUrlOverride(value: string) {
    this._userAuthorizationUrlOverride = value;
  }
  public resetUserAuthorizationUrlOverride() {
    this._userAuthorizationUrlOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAuthorizationUrlOverrideInput() {
    return this._userAuthorizationUrlOverride;
  }

  // validate_using_all_eligible_atms - computed: true, optional: true, required: false
  private _validateUsingAllEligibleAtms?: boolean | cdktf.IResolvable; 
  public get validateUsingAllEligibleAtms() {
    return this.getBooleanAttribute('validate_using_all_eligible_atms');
  }
  public set validateUsingAllEligibleAtms(value: boolean | cdktf.IResolvable) {
    this._validateUsingAllEligibleAtms = value;
  }
  public resetValidateUsingAllEligibleAtms() {
    this._validateUsingAllEligibleAtms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateUsingAllEligibleAtmsInput() {
    return this._validateUsingAllEligibleAtms;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_authentication_api_init: cdktf.booleanToTerraform(this._allowAuthenticationApiInit),
      authorization_detail_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authorizationDetailTypes),
      bypass_activation_code_confirmation_override: cdktf.booleanToTerraform(this._bypassActivationCodeConfirmationOverride),
      bypass_approval_page: cdktf.booleanToTerraform(this._bypassApprovalPage),
      ciba_delivery_mode: cdktf.stringToTerraform(this._cibaDeliveryMode),
      ciba_notification_endpoint: cdktf.stringToTerraform(this._cibaNotificationEndpoint),
      ciba_polling_interval: cdktf.numberToTerraform(this._cibaPollingInterval),
      ciba_request_object_signing_algorithm: cdktf.stringToTerraform(this._cibaRequestObjectSigningAlgorithm),
      ciba_require_signed_requests: cdktf.booleanToTerraform(this._cibaRequireSignedRequests),
      ciba_user_code_supported: cdktf.booleanToTerraform(this._cibaUserCodeSupported),
      client_auth: oauthClientClientAuthToTerraform(this._clientAuth.internalValue),
      client_id: cdktf.stringToTerraform(this._clientId),
      client_secret_retention_period: cdktf.numberToTerraform(this._clientSecretRetentionPeriod),
      client_secret_retention_period_type: cdktf.stringToTerraform(this._clientSecretRetentionPeriodType),
      default_access_token_manager_ref: oauthClientDefaultAccessTokenManagerRefToTerraform(this._defaultAccessTokenManagerRef.internalValue),
      description: cdktf.stringToTerraform(this._description),
      device_flow_setting_type: cdktf.stringToTerraform(this._deviceFlowSettingType),
      device_polling_interval_override: cdktf.numberToTerraform(this._devicePollingIntervalOverride),
      enable_cookieless_authentication_api: cdktf.booleanToTerraform(this._enableCookielessAuthenticationApi),
      enabled: cdktf.booleanToTerraform(this._enabled),
      exclusive_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._exclusiveScopes),
      extended_parameters: cdktf.hashMapper(oauthClientExtendedParametersToTerraform)(this._extendedParameters.internalValue),
      grant_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._grantTypes),
      jwks_settings: oauthClientJwksSettingsToTerraform(this._jwksSettings.internalValue),
      jwt_secured_authorization_response_mode_content_encryption_algorithm: cdktf.stringToTerraform(this._jwtSecuredAuthorizationResponseModeContentEncryptionAlgorithm),
      jwt_secured_authorization_response_mode_encryption_algorithm: cdktf.stringToTerraform(this._jwtSecuredAuthorizationResponseModeEncryptionAlgorithm),
      jwt_secured_authorization_response_mode_signing_algorithm: cdktf.stringToTerraform(this._jwtSecuredAuthorizationResponseModeSigningAlgorithm),
      lockout_max_malicious_actions: cdktf.numberToTerraform(this._lockoutMaxMaliciousActions),
      lockout_max_malicious_actions_type: cdktf.stringToTerraform(this._lockoutMaxMaliciousActionsType),
      logo_url: cdktf.stringToTerraform(this._logoUrl),
      name: cdktf.stringToTerraform(this._name),
      offline_access_require_consent_prompt: cdktf.stringToTerraform(this._offlineAccessRequireConsentPrompt),
      oidc_policy: oauthClientOidcPolicyToTerraform(this._oidcPolicy.internalValue),
      pending_authorization_timeout_override: cdktf.numberToTerraform(this._pendingAuthorizationTimeoutOverride),
      persistent_grant_expiration_time: cdktf.numberToTerraform(this._persistentGrantExpirationTime),
      persistent_grant_expiration_time_unit: cdktf.stringToTerraform(this._persistentGrantExpirationTimeUnit),
      persistent_grant_expiration_type: cdktf.stringToTerraform(this._persistentGrantExpirationType),
      persistent_grant_idle_timeout: cdktf.numberToTerraform(this._persistentGrantIdleTimeout),
      persistent_grant_idle_timeout_time_unit: cdktf.stringToTerraform(this._persistentGrantIdleTimeoutTimeUnit),
      persistent_grant_idle_timeout_type: cdktf.stringToTerraform(this._persistentGrantIdleTimeoutType),
      persistent_grant_reuse_grant_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._persistentGrantReuseGrantTypes),
      persistent_grant_reuse_type: cdktf.stringToTerraform(this._persistentGrantReuseType),
      redirect_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(this._redirectUris),
      refresh_rolling: cdktf.stringToTerraform(this._refreshRolling),
      refresh_token_rolling_grace_period: cdktf.numberToTerraform(this._refreshTokenRollingGracePeriod),
      refresh_token_rolling_grace_period_type: cdktf.stringToTerraform(this._refreshTokenRollingGracePeriodType),
      refresh_token_rolling_interval: cdktf.numberToTerraform(this._refreshTokenRollingInterval),
      refresh_token_rolling_interval_time_unit: cdktf.stringToTerraform(this._refreshTokenRollingIntervalTimeUnit),
      refresh_token_rolling_interval_type: cdktf.stringToTerraform(this._refreshTokenRollingIntervalType),
      request_object_signing_algorithm: cdktf.stringToTerraform(this._requestObjectSigningAlgorithm),
      request_policy_ref: oauthClientRequestPolicyRefToTerraform(this._requestPolicyRef.internalValue),
      require_dpop: cdktf.booleanToTerraform(this._requireDpop),
      require_jwt_secured_authorization_response_mode: cdktf.booleanToTerraform(this._requireJwtSecuredAuthorizationResponseMode),
      require_offline_access_scope_to_issue_refresh_tokens: cdktf.stringToTerraform(this._requireOfflineAccessScopeToIssueRefreshTokens),
      require_proof_key_for_code_exchange: cdktf.booleanToTerraform(this._requireProofKeyForCodeExchange),
      require_pushed_authorization_requests: cdktf.booleanToTerraform(this._requirePushedAuthorizationRequests),
      require_signed_requests: cdktf.booleanToTerraform(this._requireSignedRequests),
      restrict_scopes: cdktf.booleanToTerraform(this._restrictScopes),
      restrict_to_default_access_token_manager: cdktf.booleanToTerraform(this._restrictToDefaultAccessTokenManager),
      restricted_response_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._restrictedResponseTypes),
      restricted_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._restrictedScopes),
      token_exchange_processor_policy_ref: oauthClientTokenExchangeProcessorPolicyRefToTerraform(this._tokenExchangeProcessorPolicyRef.internalValue),
      token_introspection_content_encryption_algorithm: cdktf.stringToTerraform(this._tokenIntrospectionContentEncryptionAlgorithm),
      token_introspection_encryption_algorithm: cdktf.stringToTerraform(this._tokenIntrospectionEncryptionAlgorithm),
      token_introspection_signing_algorithm: cdktf.stringToTerraform(this._tokenIntrospectionSigningAlgorithm),
      user_authorization_url_override: cdktf.stringToTerraform(this._userAuthorizationUrlOverride),
      validate_using_all_eligible_atms: cdktf.booleanToTerraform(this._validateUsingAllEligibleAtms),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_authentication_api_init: {
        value: cdktf.booleanToHclTerraform(this._allowAuthenticationApiInit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authorization_detail_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authorizationDetailTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bypass_activation_code_confirmation_override: {
        value: cdktf.booleanToHclTerraform(this._bypassActivationCodeConfirmationOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bypass_approval_page: {
        value: cdktf.booleanToHclTerraform(this._bypassApprovalPage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ciba_delivery_mode: {
        value: cdktf.stringToHclTerraform(this._cibaDeliveryMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ciba_notification_endpoint: {
        value: cdktf.stringToHclTerraform(this._cibaNotificationEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ciba_polling_interval: {
        value: cdktf.numberToHclTerraform(this._cibaPollingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ciba_request_object_signing_algorithm: {
        value: cdktf.stringToHclTerraform(this._cibaRequestObjectSigningAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ciba_require_signed_requests: {
        value: cdktf.booleanToHclTerraform(this._cibaRequireSignedRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ciba_user_code_supported: {
        value: cdktf.booleanToHclTerraform(this._cibaUserCodeSupported),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_auth: {
        value: oauthClientClientAuthToHclTerraform(this._clientAuth.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OauthClientClientAuth",
      },
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_secret_retention_period: {
        value: cdktf.numberToHclTerraform(this._clientSecretRetentionPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_secret_retention_period_type: {
        value: cdktf.stringToHclTerraform(this._clientSecretRetentionPeriodType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_access_token_manager_ref: {
        value: oauthClientDefaultAccessTokenManagerRefToHclTerraform(this._defaultAccessTokenManagerRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OauthClientDefaultAccessTokenManagerRef",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_flow_setting_type: {
        value: cdktf.stringToHclTerraform(this._deviceFlowSettingType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_polling_interval_override: {
        value: cdktf.numberToHclTerraform(this._devicePollingIntervalOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_cookieless_authentication_api: {
        value: cdktf.booleanToHclTerraform(this._enableCookielessAuthenticationApi),
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
      exclusive_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._exclusiveScopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      extended_parameters: {
        value: cdktf.hashMapperHcl(oauthClientExtendedParametersToHclTerraform)(this._extendedParameters.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "OauthClientExtendedParametersMap",
      },
      grant_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._grantTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      jwks_settings: {
        value: oauthClientJwksSettingsToHclTerraform(this._jwksSettings.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OauthClientJwksSettings",
      },
      jwt_secured_authorization_response_mode_content_encryption_algorithm: {
        value: cdktf.stringToHclTerraform(this._jwtSecuredAuthorizationResponseModeContentEncryptionAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwt_secured_authorization_response_mode_encryption_algorithm: {
        value: cdktf.stringToHclTerraform(this._jwtSecuredAuthorizationResponseModeEncryptionAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jwt_secured_authorization_response_mode_signing_algorithm: {
        value: cdktf.stringToHclTerraform(this._jwtSecuredAuthorizationResponseModeSigningAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lockout_max_malicious_actions: {
        value: cdktf.numberToHclTerraform(this._lockoutMaxMaliciousActions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lockout_max_malicious_actions_type: {
        value: cdktf.stringToHclTerraform(this._lockoutMaxMaliciousActionsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logo_url: {
        value: cdktf.stringToHclTerraform(this._logoUrl),
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
      offline_access_require_consent_prompt: {
        value: cdktf.stringToHclTerraform(this._offlineAccessRequireConsentPrompt),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_policy: {
        value: oauthClientOidcPolicyToHclTerraform(this._oidcPolicy.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OauthClientOidcPolicy",
      },
      pending_authorization_timeout_override: {
        value: cdktf.numberToHclTerraform(this._pendingAuthorizationTimeoutOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      persistent_grant_expiration_time: {
        value: cdktf.numberToHclTerraform(this._persistentGrantExpirationTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      persistent_grant_expiration_time_unit: {
        value: cdktf.stringToHclTerraform(this._persistentGrantExpirationTimeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistent_grant_expiration_type: {
        value: cdktf.stringToHclTerraform(this._persistentGrantExpirationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      persistent_grant_idle_timeout_type: {
        value: cdktf.stringToHclTerraform(this._persistentGrantIdleTimeoutType),
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
      persistent_grant_reuse_type: {
        value: cdktf.stringToHclTerraform(this._persistentGrantReuseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      redirect_uris: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._redirectUris),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      refresh_rolling: {
        value: cdktf.stringToHclTerraform(this._refreshRolling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_token_rolling_grace_period: {
        value: cdktf.numberToHclTerraform(this._refreshTokenRollingGracePeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      refresh_token_rolling_grace_period_type: {
        value: cdktf.stringToHclTerraform(this._refreshTokenRollingGracePeriodType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_token_rolling_interval: {
        value: cdktf.numberToHclTerraform(this._refreshTokenRollingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      refresh_token_rolling_interval_time_unit: {
        value: cdktf.stringToHclTerraform(this._refreshTokenRollingIntervalTimeUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh_token_rolling_interval_type: {
        value: cdktf.stringToHclTerraform(this._refreshTokenRollingIntervalType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_object_signing_algorithm: {
        value: cdktf.stringToHclTerraform(this._requestObjectSigningAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      request_policy_ref: {
        value: oauthClientRequestPolicyRefToHclTerraform(this._requestPolicyRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OauthClientRequestPolicyRef",
      },
      require_dpop: {
        value: cdktf.booleanToHclTerraform(this._requireDpop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_jwt_secured_authorization_response_mode: {
        value: cdktf.booleanToHclTerraform(this._requireJwtSecuredAuthorizationResponseMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_offline_access_scope_to_issue_refresh_tokens: {
        value: cdktf.stringToHclTerraform(this._requireOfflineAccessScopeToIssueRefreshTokens),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      require_proof_key_for_code_exchange: {
        value: cdktf.booleanToHclTerraform(this._requireProofKeyForCodeExchange),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_pushed_authorization_requests: {
        value: cdktf.booleanToHclTerraform(this._requirePushedAuthorizationRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_signed_requests: {
        value: cdktf.booleanToHclTerraform(this._requireSignedRequests),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_scopes: {
        value: cdktf.booleanToHclTerraform(this._restrictScopes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restrict_to_default_access_token_manager: {
        value: cdktf.booleanToHclTerraform(this._restrictToDefaultAccessTokenManager),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      restricted_response_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._restrictedResponseTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      restricted_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._restrictedScopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      token_exchange_processor_policy_ref: {
        value: oauthClientTokenExchangeProcessorPolicyRefToHclTerraform(this._tokenExchangeProcessorPolicyRef.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OauthClientTokenExchangeProcessorPolicyRef",
      },
      token_introspection_content_encryption_algorithm: {
        value: cdktf.stringToHclTerraform(this._tokenIntrospectionContentEncryptionAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_introspection_encryption_algorithm: {
        value: cdktf.stringToHclTerraform(this._tokenIntrospectionEncryptionAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token_introspection_signing_algorithm: {
        value: cdktf.stringToHclTerraform(this._tokenIntrospectionSigningAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_authorization_url_override: {
        value: cdktf.stringToHclTerraform(this._userAuthorizationUrlOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      validate_using_all_eligible_atms: {
        value: cdktf.booleanToHclTerraform(this._validateUsingAllEligibleAtms),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
