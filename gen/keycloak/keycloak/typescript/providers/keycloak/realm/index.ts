// https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RealmConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#access_code_lifespan Realm#access_code_lifespan}
  */
  readonly accessCodeLifespan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#access_code_lifespan_login Realm#access_code_lifespan_login}
  */
  readonly accessCodeLifespanLogin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#access_code_lifespan_user_action Realm#access_code_lifespan_user_action}
  */
  readonly accessCodeLifespanUserAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#access_token_lifespan Realm#access_token_lifespan}
  */
  readonly accessTokenLifespan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#access_token_lifespan_for_implicit_flow Realm#access_token_lifespan_for_implicit_flow}
  */
  readonly accessTokenLifespanForImplicitFlow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#account_theme Realm#account_theme}
  */
  readonly accountTheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#action_token_generated_by_admin_lifespan Realm#action_token_generated_by_admin_lifespan}
  */
  readonly actionTokenGeneratedByAdminLifespan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#action_token_generated_by_user_lifespan Realm#action_token_generated_by_user_lifespan}
  */
  readonly actionTokenGeneratedByUserLifespan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#admin_theme Realm#admin_theme}
  */
  readonly adminTheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#attributes Realm#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * Which flow should be used for BrowserFlow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#browser_flow Realm#browser_flow}
  */
  readonly browserFlow?: string;
  /**
  * Which flow should be used for ClientAuthenticationFlow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#client_authentication_flow Realm#client_authentication_flow}
  */
  readonly clientAuthenticationFlow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#client_session_idle_timeout Realm#client_session_idle_timeout}
  */
  readonly clientSessionIdleTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#client_session_max_lifespan Realm#client_session_max_lifespan}
  */
  readonly clientSessionMaxLifespan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#default_default_client_scopes Realm#default_default_client_scopes}
  */
  readonly defaultDefaultClientScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#default_optional_client_scopes Realm#default_optional_client_scopes}
  */
  readonly defaultOptionalClientScopes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#default_signature_algorithm Realm#default_signature_algorithm}
  */
  readonly defaultSignatureAlgorithm?: string;
  /**
  * Which flow should be used for DirectGrantFlow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#direct_grant_flow Realm#direct_grant_flow}
  */
  readonly directGrantFlow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#display_name Realm#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#display_name_html Realm#display_name_html}
  */
  readonly displayNameHtml?: string;
  /**
  * Which flow should be used for DockerAuthenticationFlow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#docker_authentication_flow Realm#docker_authentication_flow}
  */
  readonly dockerAuthenticationFlow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#duplicate_emails_allowed Realm#duplicate_emails_allowed}
  */
  readonly duplicateEmailsAllowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#edit_username_allowed Realm#edit_username_allowed}
  */
  readonly editUsernameAllowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#email_theme Realm#email_theme}
  */
  readonly emailTheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#enabled Realm#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Which flow should be used for FirstBrokerLoginFlow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#first_broker_login_flow Realm#first_broker_login_flow}
  */
  readonly firstBrokerLoginFlow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#id Realm#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#internal_id Realm#internal_id}
  */
  readonly internalId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#login_theme Realm#login_theme}
  */
  readonly loginTheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#login_with_email_allowed Realm#login_with_email_allowed}
  */
  readonly loginWithEmailAllowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#oauth2_device_code_lifespan Realm#oauth2_device_code_lifespan}
  */
  readonly oauth2DeviceCodeLifespan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#oauth2_device_polling_interval Realm#oauth2_device_polling_interval}
  */
  readonly oauth2DevicePollingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#offline_session_idle_timeout Realm#offline_session_idle_timeout}
  */
  readonly offlineSessionIdleTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#offline_session_max_lifespan Realm#offline_session_max_lifespan}
  */
  readonly offlineSessionMaxLifespan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#offline_session_max_lifespan_enabled Realm#offline_session_max_lifespan_enabled}
  */
  readonly offlineSessionMaxLifespanEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#organizations_enabled Realm#organizations_enabled}
  */
  readonly organizationsEnabled?: boolean | cdktf.IResolvable;
  /**
  * String that represents the passwordPolicies that are in place. Each policy is separated with " and ". Supported policies can be found in the server-info providers page. example: "upperCase(1) and length(8) and forceExpiredPasswordChange(365) and notUsername(undefined)"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#password_policy Realm#password_policy}
  */
  readonly passwordPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#realm Realm#realm}
  */
  readonly realm: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#refresh_token_max_reuse Realm#refresh_token_max_reuse}
  */
  readonly refreshTokenMaxReuse?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#registration_allowed Realm#registration_allowed}
  */
  readonly registrationAllowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#registration_email_as_username Realm#registration_email_as_username}
  */
  readonly registrationEmailAsUsername?: boolean | cdktf.IResolvable;
  /**
  * Which flow should be used for RegistrationFlow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#registration_flow Realm#registration_flow}
  */
  readonly registrationFlow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#remember_me Realm#remember_me}
  */
  readonly rememberMe?: boolean | cdktf.IResolvable;
  /**
  * Which flow should be used for ResetCredentialsFlow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#reset_credentials_flow Realm#reset_credentials_flow}
  */
  readonly resetCredentialsFlow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#reset_password_allowed Realm#reset_password_allowed}
  */
  readonly resetPasswordAllowed?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#revoke_refresh_token Realm#revoke_refresh_token}
  */
  readonly revokeRefreshToken?: boolean | cdktf.IResolvable;
  /**
  * SSL Required: Values can be 'none', 'external' or 'all'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#ssl_required Realm#ssl_required}
  */
  readonly sslRequired?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#sso_session_idle_timeout Realm#sso_session_idle_timeout}
  */
  readonly ssoSessionIdleTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#sso_session_idle_timeout_remember_me Realm#sso_session_idle_timeout_remember_me}
  */
  readonly ssoSessionIdleTimeoutRememberMe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#sso_session_max_lifespan Realm#sso_session_max_lifespan}
  */
  readonly ssoSessionMaxLifespan?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#sso_session_max_lifespan_remember_me Realm#sso_session_max_lifespan_remember_me}
  */
  readonly ssoSessionMaxLifespanRememberMe?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#user_managed_access Realm#user_managed_access}
  */
  readonly userManagedAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#verify_email Realm#verify_email}
  */
  readonly verifyEmail?: boolean | cdktf.IResolvable;
  /**
  * internationalization block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#internationalization Realm#internationalization}
  */
  readonly internationalization?: RealmInternationalization;
  /**
  * otp_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#otp_policy Realm#otp_policy}
  */
  readonly otpPolicy?: RealmOtpPolicy;
  /**
  * security_defenses block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#security_defenses Realm#security_defenses}
  */
  readonly securityDefenses?: RealmSecurityDefenses;
  /**
  * smtp_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#smtp_server Realm#smtp_server}
  */
  readonly smtpServer?: RealmSmtpServer;
  /**
  * web_authn_passwordless_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#web_authn_passwordless_policy Realm#web_authn_passwordless_policy}
  */
  readonly webAuthnPasswordlessPolicy?: RealmWebAuthnPasswordlessPolicy;
  /**
  * web_authn_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#web_authn_policy Realm#web_authn_policy}
  */
  readonly webAuthnPolicy?: RealmWebAuthnPolicy;
}
export interface RealmInternationalization {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#default_locale Realm#default_locale}
  */
  readonly defaultLocale: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#supported_locales Realm#supported_locales}
  */
  readonly supportedLocales: string[];
}

export function realmInternationalizationToTerraform(struct?: RealmInternationalizationOutputReference | RealmInternationalization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_locale: cdktf.stringToTerraform(struct!.defaultLocale),
    supported_locales: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.supportedLocales),
  }
}


export function realmInternationalizationToHclTerraform(struct?: RealmInternationalizationOutputReference | RealmInternationalization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_locale: {
      value: cdktf.stringToHclTerraform(struct!.defaultLocale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    supported_locales: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.supportedLocales),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealmInternationalizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealmInternationalization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultLocale !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLocale = this._defaultLocale;
    }
    if (this._supportedLocales !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedLocales = this._supportedLocales;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealmInternationalization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultLocale = undefined;
      this._supportedLocales = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultLocale = value.defaultLocale;
      this._supportedLocales = value.supportedLocales;
    }
  }

  // default_locale - computed: false, optional: false, required: true
  private _defaultLocale?: string; 
  public get defaultLocale() {
    return this.getStringAttribute('default_locale');
  }
  public set defaultLocale(value: string) {
    this._defaultLocale = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLocaleInput() {
    return this._defaultLocale;
  }

  // supported_locales - computed: false, optional: false, required: true
  private _supportedLocales?: string[]; 
  public get supportedLocales() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_locales'));
  }
  public set supportedLocales(value: string[]) {
    this._supportedLocales = value;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedLocalesInput() {
    return this._supportedLocales;
  }
}
export interface RealmOtpPolicy {
  /**
  * What hashing algorithm should be used to generate the OTP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#algorithm Realm#algorithm}
  */
  readonly algorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#digits Realm#digits}
  */
  readonly digits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#initial_counter Realm#initial_counter}
  */
  readonly initialCounter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#look_ahead_window Realm#look_ahead_window}
  */
  readonly lookAheadWindow?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#period Realm#period}
  */
  readonly period?: number;
  /**
  * OTP Type, totp for Time-Based One Time Password or hotp for counter base one time password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#type Realm#type}
  */
  readonly type?: string;
}

export function realmOtpPolicyToTerraform(struct?: RealmOtpPolicyOutputReference | RealmOtpPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    algorithm: cdktf.stringToTerraform(struct!.algorithm),
    digits: cdktf.numberToTerraform(struct!.digits),
    initial_counter: cdktf.numberToTerraform(struct!.initialCounter),
    look_ahead_window: cdktf.numberToTerraform(struct!.lookAheadWindow),
    period: cdktf.numberToTerraform(struct!.period),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function realmOtpPolicyToHclTerraform(struct?: RealmOtpPolicyOutputReference | RealmOtpPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    algorithm: {
      value: cdktf.stringToHclTerraform(struct!.algorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    digits: {
      value: cdktf.numberToHclTerraform(struct!.digits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_counter: {
      value: cdktf.numberToHclTerraform(struct!.initialCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    look_ahead_window: {
      value: cdktf.numberToHclTerraform(struct!.lookAheadWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period: {
      value: cdktf.numberToHclTerraform(struct!.period),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class RealmOtpPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealmOtpPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._algorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.algorithm = this._algorithm;
    }
    if (this._digits !== undefined) {
      hasAnyValues = true;
      internalValueResult.digits = this._digits;
    }
    if (this._initialCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialCounter = this._initialCounter;
    }
    if (this._lookAheadWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.lookAheadWindow = this._lookAheadWindow;
    }
    if (this._period !== undefined) {
      hasAnyValues = true;
      internalValueResult.period = this._period;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealmOtpPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._algorithm = undefined;
      this._digits = undefined;
      this._initialCounter = undefined;
      this._lookAheadWindow = undefined;
      this._period = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._algorithm = value.algorithm;
      this._digits = value.digits;
      this._initialCounter = value.initialCounter;
      this._lookAheadWindow = value.lookAheadWindow;
      this._period = value.period;
      this._type = value.type;
    }
  }

  // algorithm - computed: false, optional: true, required: false
  private _algorithm?: string; 
  public get algorithm() {
    return this.getStringAttribute('algorithm');
  }
  public set algorithm(value: string) {
    this._algorithm = value;
  }
  public resetAlgorithm() {
    this._algorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get algorithmInput() {
    return this._algorithm;
  }

  // digits - computed: false, optional: true, required: false
  private _digits?: number; 
  public get digits() {
    return this.getNumberAttribute('digits');
  }
  public set digits(value: number) {
    this._digits = value;
  }
  public resetDigits() {
    this._digits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitsInput() {
    return this._digits;
  }

  // initial_counter - computed: false, optional: true, required: false
  private _initialCounter?: number; 
  public get initialCounter() {
    return this.getNumberAttribute('initial_counter');
  }
  public set initialCounter(value: number) {
    this._initialCounter = value;
  }
  public resetInitialCounter() {
    this._initialCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialCounterInput() {
    return this._initialCounter;
  }

  // look_ahead_window - computed: false, optional: true, required: false
  private _lookAheadWindow?: number; 
  public get lookAheadWindow() {
    return this.getNumberAttribute('look_ahead_window');
  }
  public set lookAheadWindow(value: number) {
    this._lookAheadWindow = value;
  }
  public resetLookAheadWindow() {
    this._lookAheadWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookAheadWindowInput() {
    return this._lookAheadWindow;
  }

  // period - computed: false, optional: true, required: false
  private _period?: number; 
  public get period() {
    return this.getNumberAttribute('period');
  }
  public set period(value: number) {
    this._period = value;
  }
  public resetPeriod() {
    this._period = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodInput() {
    return this._period;
  }

  // type - computed: false, optional: true, required: false
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
export interface RealmSecurityDefensesBruteForceDetection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#failure_reset_time_seconds Realm#failure_reset_time_seconds}
  */
  readonly failureResetTimeSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#max_failure_wait_seconds Realm#max_failure_wait_seconds}
  */
  readonly maxFailureWaitSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#max_login_failures Realm#max_login_failures}
  */
  readonly maxLoginFailures?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#minimum_quick_login_wait_seconds Realm#minimum_quick_login_wait_seconds}
  */
  readonly minimumQuickLoginWaitSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#permanent_lockout Realm#permanent_lockout}
  */
  readonly permanentLockout?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#quick_login_check_milli_seconds Realm#quick_login_check_milli_seconds}
  */
  readonly quickLoginCheckMilliSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#wait_increment_seconds Realm#wait_increment_seconds}
  */
  readonly waitIncrementSeconds?: number;
}

export function realmSecurityDefensesBruteForceDetectionToTerraform(struct?: RealmSecurityDefensesBruteForceDetectionOutputReference | RealmSecurityDefensesBruteForceDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failure_reset_time_seconds: cdktf.numberToTerraform(struct!.failureResetTimeSeconds),
    max_failure_wait_seconds: cdktf.numberToTerraform(struct!.maxFailureWaitSeconds),
    max_login_failures: cdktf.numberToTerraform(struct!.maxLoginFailures),
    minimum_quick_login_wait_seconds: cdktf.numberToTerraform(struct!.minimumQuickLoginWaitSeconds),
    permanent_lockout: cdktf.booleanToTerraform(struct!.permanentLockout),
    quick_login_check_milli_seconds: cdktf.numberToTerraform(struct!.quickLoginCheckMilliSeconds),
    wait_increment_seconds: cdktf.numberToTerraform(struct!.waitIncrementSeconds),
  }
}


export function realmSecurityDefensesBruteForceDetectionToHclTerraform(struct?: RealmSecurityDefensesBruteForceDetectionOutputReference | RealmSecurityDefensesBruteForceDetection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failure_reset_time_seconds: {
      value: cdktf.numberToHclTerraform(struct!.failureResetTimeSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_failure_wait_seconds: {
      value: cdktf.numberToHclTerraform(struct!.maxFailureWaitSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_login_failures: {
      value: cdktf.numberToHclTerraform(struct!.maxLoginFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_quick_login_wait_seconds: {
      value: cdktf.numberToHclTerraform(struct!.minimumQuickLoginWaitSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permanent_lockout: {
      value: cdktf.booleanToHclTerraform(struct!.permanentLockout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    quick_login_check_milli_seconds: {
      value: cdktf.numberToHclTerraform(struct!.quickLoginCheckMilliSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait_increment_seconds: {
      value: cdktf.numberToHclTerraform(struct!.waitIncrementSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealmSecurityDefensesBruteForceDetectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealmSecurityDefensesBruteForceDetection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failureResetTimeSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.failureResetTimeSeconds = this._failureResetTimeSeconds;
    }
    if (this._maxFailureWaitSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFailureWaitSeconds = this._maxFailureWaitSeconds;
    }
    if (this._maxLoginFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLoginFailures = this._maxLoginFailures;
    }
    if (this._minimumQuickLoginWaitSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumQuickLoginWaitSeconds = this._minimumQuickLoginWaitSeconds;
    }
    if (this._permanentLockout !== undefined) {
      hasAnyValues = true;
      internalValueResult.permanentLockout = this._permanentLockout;
    }
    if (this._quickLoginCheckMilliSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.quickLoginCheckMilliSeconds = this._quickLoginCheckMilliSeconds;
    }
    if (this._waitIncrementSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitIncrementSeconds = this._waitIncrementSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealmSecurityDefensesBruteForceDetection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failureResetTimeSeconds = undefined;
      this._maxFailureWaitSeconds = undefined;
      this._maxLoginFailures = undefined;
      this._minimumQuickLoginWaitSeconds = undefined;
      this._permanentLockout = undefined;
      this._quickLoginCheckMilliSeconds = undefined;
      this._waitIncrementSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failureResetTimeSeconds = value.failureResetTimeSeconds;
      this._maxFailureWaitSeconds = value.maxFailureWaitSeconds;
      this._maxLoginFailures = value.maxLoginFailures;
      this._minimumQuickLoginWaitSeconds = value.minimumQuickLoginWaitSeconds;
      this._permanentLockout = value.permanentLockout;
      this._quickLoginCheckMilliSeconds = value.quickLoginCheckMilliSeconds;
      this._waitIncrementSeconds = value.waitIncrementSeconds;
    }
  }

  // failure_reset_time_seconds - computed: false, optional: true, required: false
  private _failureResetTimeSeconds?: number; 
  public get failureResetTimeSeconds() {
    return this.getNumberAttribute('failure_reset_time_seconds');
  }
  public set failureResetTimeSeconds(value: number) {
    this._failureResetTimeSeconds = value;
  }
  public resetFailureResetTimeSeconds() {
    this._failureResetTimeSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureResetTimeSecondsInput() {
    return this._failureResetTimeSeconds;
  }

  // max_failure_wait_seconds - computed: false, optional: true, required: false
  private _maxFailureWaitSeconds?: number; 
  public get maxFailureWaitSeconds() {
    return this.getNumberAttribute('max_failure_wait_seconds');
  }
  public set maxFailureWaitSeconds(value: number) {
    this._maxFailureWaitSeconds = value;
  }
  public resetMaxFailureWaitSeconds() {
    this._maxFailureWaitSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFailureWaitSecondsInput() {
    return this._maxFailureWaitSeconds;
  }

  // max_login_failures - computed: false, optional: true, required: false
  private _maxLoginFailures?: number; 
  public get maxLoginFailures() {
    return this.getNumberAttribute('max_login_failures');
  }
  public set maxLoginFailures(value: number) {
    this._maxLoginFailures = value;
  }
  public resetMaxLoginFailures() {
    this._maxLoginFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLoginFailuresInput() {
    return this._maxLoginFailures;
  }

  // minimum_quick_login_wait_seconds - computed: false, optional: true, required: false
  private _minimumQuickLoginWaitSeconds?: number; 
  public get minimumQuickLoginWaitSeconds() {
    return this.getNumberAttribute('minimum_quick_login_wait_seconds');
  }
  public set minimumQuickLoginWaitSeconds(value: number) {
    this._minimumQuickLoginWaitSeconds = value;
  }
  public resetMinimumQuickLoginWaitSeconds() {
    this._minimumQuickLoginWaitSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumQuickLoginWaitSecondsInput() {
    return this._minimumQuickLoginWaitSeconds;
  }

  // permanent_lockout - computed: false, optional: true, required: false
  private _permanentLockout?: boolean | cdktf.IResolvable; 
  public get permanentLockout() {
    return this.getBooleanAttribute('permanent_lockout');
  }
  public set permanentLockout(value: boolean | cdktf.IResolvable) {
    this._permanentLockout = value;
  }
  public resetPermanentLockout() {
    this._permanentLockout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permanentLockoutInput() {
    return this._permanentLockout;
  }

  // quick_login_check_milli_seconds - computed: false, optional: true, required: false
  private _quickLoginCheckMilliSeconds?: number; 
  public get quickLoginCheckMilliSeconds() {
    return this.getNumberAttribute('quick_login_check_milli_seconds');
  }
  public set quickLoginCheckMilliSeconds(value: number) {
    this._quickLoginCheckMilliSeconds = value;
  }
  public resetQuickLoginCheckMilliSeconds() {
    this._quickLoginCheckMilliSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quickLoginCheckMilliSecondsInput() {
    return this._quickLoginCheckMilliSeconds;
  }

  // wait_increment_seconds - computed: false, optional: true, required: false
  private _waitIncrementSeconds?: number; 
  public get waitIncrementSeconds() {
    return this.getNumberAttribute('wait_increment_seconds');
  }
  public set waitIncrementSeconds(value: number) {
    this._waitIncrementSeconds = value;
  }
  public resetWaitIncrementSeconds() {
    this._waitIncrementSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitIncrementSecondsInput() {
    return this._waitIncrementSeconds;
  }
}
export interface RealmSecurityDefensesHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#content_security_policy Realm#content_security_policy}
  */
  readonly contentSecurityPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#content_security_policy_report_only Realm#content_security_policy_report_only}
  */
  readonly contentSecurityPolicyReportOnly?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#referrer_policy Realm#referrer_policy}
  */
  readonly referrerPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#strict_transport_security Realm#strict_transport_security}
  */
  readonly strictTransportSecurity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#x_content_type_options Realm#x_content_type_options}
  */
  readonly xContentTypeOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#x_frame_options Realm#x_frame_options}
  */
  readonly xFrameOptions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#x_robots_tag Realm#x_robots_tag}
  */
  readonly xRobotsTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#x_xss_protection Realm#x_xss_protection}
  */
  readonly xXssProtection?: string;
}

export function realmSecurityDefensesHeadersToTerraform(struct?: RealmSecurityDefensesHeadersOutputReference | RealmSecurityDefensesHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content_security_policy: cdktf.stringToTerraform(struct!.contentSecurityPolicy),
    content_security_policy_report_only: cdktf.stringToTerraform(struct!.contentSecurityPolicyReportOnly),
    referrer_policy: cdktf.stringToTerraform(struct!.referrerPolicy),
    strict_transport_security: cdktf.stringToTerraform(struct!.strictTransportSecurity),
    x_content_type_options: cdktf.stringToTerraform(struct!.xContentTypeOptions),
    x_frame_options: cdktf.stringToTerraform(struct!.xFrameOptions),
    x_robots_tag: cdktf.stringToTerraform(struct!.xRobotsTag),
    x_xss_protection: cdktf.stringToTerraform(struct!.xXssProtection),
  }
}


export function realmSecurityDefensesHeadersToHclTerraform(struct?: RealmSecurityDefensesHeadersOutputReference | RealmSecurityDefensesHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    content_security_policy: {
      value: cdktf.stringToHclTerraform(struct!.contentSecurityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_security_policy_report_only: {
      value: cdktf.stringToHclTerraform(struct!.contentSecurityPolicyReportOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    referrer_policy: {
      value: cdktf.stringToHclTerraform(struct!.referrerPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strict_transport_security: {
      value: cdktf.stringToHclTerraform(struct!.strictTransportSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x_content_type_options: {
      value: cdktf.stringToHclTerraform(struct!.xContentTypeOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x_frame_options: {
      value: cdktf.stringToHclTerraform(struct!.xFrameOptions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x_robots_tag: {
      value: cdktf.stringToHclTerraform(struct!.xRobotsTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    x_xss_protection: {
      value: cdktf.stringToHclTerraform(struct!.xXssProtection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealmSecurityDefensesHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealmSecurityDefensesHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contentSecurityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentSecurityPolicy = this._contentSecurityPolicy;
    }
    if (this._contentSecurityPolicyReportOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentSecurityPolicyReportOnly = this._contentSecurityPolicyReportOnly;
    }
    if (this._referrerPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.referrerPolicy = this._referrerPolicy;
    }
    if (this._strictTransportSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.strictTransportSecurity = this._strictTransportSecurity;
    }
    if (this._xContentTypeOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.xContentTypeOptions = this._xContentTypeOptions;
    }
    if (this._xFrameOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.xFrameOptions = this._xFrameOptions;
    }
    if (this._xRobotsTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.xRobotsTag = this._xRobotsTag;
    }
    if (this._xXssProtection !== undefined) {
      hasAnyValues = true;
      internalValueResult.xXssProtection = this._xXssProtection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealmSecurityDefensesHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contentSecurityPolicy = undefined;
      this._contentSecurityPolicyReportOnly = undefined;
      this._referrerPolicy = undefined;
      this._strictTransportSecurity = undefined;
      this._xContentTypeOptions = undefined;
      this._xFrameOptions = undefined;
      this._xRobotsTag = undefined;
      this._xXssProtection = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contentSecurityPolicy = value.contentSecurityPolicy;
      this._contentSecurityPolicyReportOnly = value.contentSecurityPolicyReportOnly;
      this._referrerPolicy = value.referrerPolicy;
      this._strictTransportSecurity = value.strictTransportSecurity;
      this._xContentTypeOptions = value.xContentTypeOptions;
      this._xFrameOptions = value.xFrameOptions;
      this._xRobotsTag = value.xRobotsTag;
      this._xXssProtection = value.xXssProtection;
    }
  }

  // content_security_policy - computed: false, optional: true, required: false
  private _contentSecurityPolicy?: string; 
  public get contentSecurityPolicy() {
    return this.getStringAttribute('content_security_policy');
  }
  public set contentSecurityPolicy(value: string) {
    this._contentSecurityPolicy = value;
  }
  public resetContentSecurityPolicy() {
    this._contentSecurityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentSecurityPolicyInput() {
    return this._contentSecurityPolicy;
  }

  // content_security_policy_report_only - computed: false, optional: true, required: false
  private _contentSecurityPolicyReportOnly?: string; 
  public get contentSecurityPolicyReportOnly() {
    return this.getStringAttribute('content_security_policy_report_only');
  }
  public set contentSecurityPolicyReportOnly(value: string) {
    this._contentSecurityPolicyReportOnly = value;
  }
  public resetContentSecurityPolicyReportOnly() {
    this._contentSecurityPolicyReportOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentSecurityPolicyReportOnlyInput() {
    return this._contentSecurityPolicyReportOnly;
  }

  // referrer_policy - computed: false, optional: true, required: false
  private _referrerPolicy?: string; 
  public get referrerPolicy() {
    return this.getStringAttribute('referrer_policy');
  }
  public set referrerPolicy(value: string) {
    this._referrerPolicy = value;
  }
  public resetReferrerPolicy() {
    this._referrerPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referrerPolicyInput() {
    return this._referrerPolicy;
  }

  // strict_transport_security - computed: false, optional: true, required: false
  private _strictTransportSecurity?: string; 
  public get strictTransportSecurity() {
    return this.getStringAttribute('strict_transport_security');
  }
  public set strictTransportSecurity(value: string) {
    this._strictTransportSecurity = value;
  }
  public resetStrictTransportSecurity() {
    this._strictTransportSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictTransportSecurityInput() {
    return this._strictTransportSecurity;
  }

  // x_content_type_options - computed: false, optional: true, required: false
  private _xContentTypeOptions?: string; 
  public get xContentTypeOptions() {
    return this.getStringAttribute('x_content_type_options');
  }
  public set xContentTypeOptions(value: string) {
    this._xContentTypeOptions = value;
  }
  public resetXContentTypeOptions() {
    this._xContentTypeOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xContentTypeOptionsInput() {
    return this._xContentTypeOptions;
  }

  // x_frame_options - computed: false, optional: true, required: false
  private _xFrameOptions?: string; 
  public get xFrameOptions() {
    return this.getStringAttribute('x_frame_options');
  }
  public set xFrameOptions(value: string) {
    this._xFrameOptions = value;
  }
  public resetXFrameOptions() {
    this._xFrameOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xFrameOptionsInput() {
    return this._xFrameOptions;
  }

  // x_robots_tag - computed: false, optional: true, required: false
  private _xRobotsTag?: string; 
  public get xRobotsTag() {
    return this.getStringAttribute('x_robots_tag');
  }
  public set xRobotsTag(value: string) {
    this._xRobotsTag = value;
  }
  public resetXRobotsTag() {
    this._xRobotsTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xRobotsTagInput() {
    return this._xRobotsTag;
  }

  // x_xss_protection - computed: false, optional: true, required: false
  private _xXssProtection?: string; 
  public get xXssProtection() {
    return this.getStringAttribute('x_xss_protection');
  }
  public set xXssProtection(value: string) {
    this._xXssProtection = value;
  }
  public resetXXssProtection() {
    this._xXssProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xXssProtectionInput() {
    return this._xXssProtection;
  }
}
export interface RealmSecurityDefenses {
  /**
  * brute_force_detection block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#brute_force_detection Realm#brute_force_detection}
  */
  readonly bruteForceDetection?: RealmSecurityDefensesBruteForceDetection;
  /**
  * headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#headers Realm#headers}
  */
  readonly headers?: RealmSecurityDefensesHeaders;
}

export function realmSecurityDefensesToTerraform(struct?: RealmSecurityDefensesOutputReference | RealmSecurityDefenses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    brute_force_detection: realmSecurityDefensesBruteForceDetectionToTerraform(struct!.bruteForceDetection),
    headers: realmSecurityDefensesHeadersToTerraform(struct!.headers),
  }
}


export function realmSecurityDefensesToHclTerraform(struct?: RealmSecurityDefensesOutputReference | RealmSecurityDefenses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    brute_force_detection: {
      value: realmSecurityDefensesBruteForceDetectionToHclTerraform(struct!.bruteForceDetection),
      isBlock: true,
      type: "list",
      storageClassType: "RealmSecurityDefensesBruteForceDetectionList",
    },
    headers: {
      value: realmSecurityDefensesHeadersToHclTerraform(struct!.headers),
      isBlock: true,
      type: "list",
      storageClassType: "RealmSecurityDefensesHeadersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealmSecurityDefensesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealmSecurityDefenses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bruteForceDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bruteForceDetection = this._bruteForceDetection?.internalValue;
    }
    if (this._headers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealmSecurityDefenses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bruteForceDetection.internalValue = undefined;
      this._headers.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bruteForceDetection.internalValue = value.bruteForceDetection;
      this._headers.internalValue = value.headers;
    }
  }

  // brute_force_detection - computed: false, optional: true, required: false
  private _bruteForceDetection = new RealmSecurityDefensesBruteForceDetectionOutputReference(this, "brute_force_detection");
  public get bruteForceDetection() {
    return this._bruteForceDetection;
  }
  public putBruteForceDetection(value: RealmSecurityDefensesBruteForceDetection) {
    this._bruteForceDetection.internalValue = value;
  }
  public resetBruteForceDetection() {
    this._bruteForceDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bruteForceDetectionInput() {
    return this._bruteForceDetection.internalValue;
  }

  // headers - computed: false, optional: true, required: false
  private _headers = new RealmSecurityDefensesHeadersOutputReference(this, "headers");
  public get headers() {
    return this._headers;
  }
  public putHeaders(value: RealmSecurityDefensesHeaders) {
    this._headers.internalValue = value;
  }
  public resetHeaders() {
    this._headers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers.internalValue;
  }
}
export interface RealmSmtpServerAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#password Realm#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#username Realm#username}
  */
  readonly username: string;
}

export function realmSmtpServerAuthToTerraform(struct?: RealmSmtpServerAuthOutputReference | RealmSmtpServerAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function realmSmtpServerAuthToHclTerraform(struct?: RealmSmtpServerAuthOutputReference | RealmSmtpServerAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class RealmSmtpServerAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealmSmtpServerAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealmSmtpServerAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._password = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._password = value.password;
      this._username = value.username;
    }
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface RealmSmtpServerTokenAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#client_id Realm#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#client_secret Realm#client_secret}
  */
  readonly clientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#scope Realm#scope}
  */
  readonly scope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#url Realm#url}
  */
  readonly url: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#username Realm#username}
  */
  readonly username: string;
}

export function realmSmtpServerTokenAuthToTerraform(struct?: RealmSmtpServerTokenAuthOutputReference | RealmSmtpServerTokenAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    scope: cdktf.stringToTerraform(struct!.scope),
    url: cdktf.stringToTerraform(struct!.url),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function realmSmtpServerTokenAuthToHclTerraform(struct?: RealmSmtpServerTokenAuthOutputReference | RealmSmtpServerTokenAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class RealmSmtpServerTokenAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealmSmtpServerTokenAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealmSmtpServerTokenAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._scope = undefined;
      this._url = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._scope = value.scope;
      this._url = value.url;
      this._username = value.username;
    }
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

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface RealmSmtpServer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#envelope_from Realm#envelope_from}
  */
  readonly envelopeFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#from Realm#from}
  */
  readonly from: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#from_display_name Realm#from_display_name}
  */
  readonly fromDisplayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#host Realm#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#port Realm#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#reply_to Realm#reply_to}
  */
  readonly replyTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#reply_to_display_name Realm#reply_to_display_name}
  */
  readonly replyToDisplayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#ssl Realm#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#starttls Realm#starttls}
  */
  readonly starttls?: boolean | cdktf.IResolvable;
  /**
  * auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#auth Realm#auth}
  */
  readonly auth?: RealmSmtpServerAuth;
  /**
  * token_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#token_auth Realm#token_auth}
  */
  readonly tokenAuth?: RealmSmtpServerTokenAuth;
}

export function realmSmtpServerToTerraform(struct?: RealmSmtpServerOutputReference | RealmSmtpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    envelope_from: cdktf.stringToTerraform(struct!.envelopeFrom),
    from: cdktf.stringToTerraform(struct!.from),
    from_display_name: cdktf.stringToTerraform(struct!.fromDisplayName),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.stringToTerraform(struct!.port),
    reply_to: cdktf.stringToTerraform(struct!.replyTo),
    reply_to_display_name: cdktf.stringToTerraform(struct!.replyToDisplayName),
    ssl: cdktf.booleanToTerraform(struct!.ssl),
    starttls: cdktf.booleanToTerraform(struct!.starttls),
    auth: realmSmtpServerAuthToTerraform(struct!.auth),
    token_auth: realmSmtpServerTokenAuthToTerraform(struct!.tokenAuth),
  }
}


export function realmSmtpServerToHclTerraform(struct?: RealmSmtpServerOutputReference | RealmSmtpServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    envelope_from: {
      value: cdktf.stringToHclTerraform(struct!.envelopeFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from: {
      value: cdktf.stringToHclTerraform(struct!.from),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    from_display_name: {
      value: cdktf.stringToHclTerraform(struct!.fromDisplayName),
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
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reply_to: {
      value: cdktf.stringToHclTerraform(struct!.replyTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reply_to_display_name: {
      value: cdktf.stringToHclTerraform(struct!.replyToDisplayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssl: {
      value: cdktf.booleanToHclTerraform(struct!.ssl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    starttls: {
      value: cdktf.booleanToHclTerraform(struct!.starttls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    auth: {
      value: realmSmtpServerAuthToHclTerraform(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "RealmSmtpServerAuthList",
    },
    token_auth: {
      value: realmSmtpServerTokenAuthToHclTerraform(struct!.tokenAuth),
      isBlock: true,
      type: "list",
      storageClassType: "RealmSmtpServerTokenAuthList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealmSmtpServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealmSmtpServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._envelopeFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.envelopeFrom = this._envelopeFrom;
    }
    if (this._from !== undefined) {
      hasAnyValues = true;
      internalValueResult.from = this._from;
    }
    if (this._fromDisplayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.fromDisplayName = this._fromDisplayName;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._replyTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.replyTo = this._replyTo;
    }
    if (this._replyToDisplayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.replyToDisplayName = this._replyToDisplayName;
    }
    if (this._ssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl;
    }
    if (this._starttls !== undefined) {
      hasAnyValues = true;
      internalValueResult.starttls = this._starttls;
    }
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._tokenAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenAuth = this._tokenAuth?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealmSmtpServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._envelopeFrom = undefined;
      this._from = undefined;
      this._fromDisplayName = undefined;
      this._host = undefined;
      this._port = undefined;
      this._replyTo = undefined;
      this._replyToDisplayName = undefined;
      this._ssl = undefined;
      this._starttls = undefined;
      this._auth.internalValue = undefined;
      this._tokenAuth.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._envelopeFrom = value.envelopeFrom;
      this._from = value.from;
      this._fromDisplayName = value.fromDisplayName;
      this._host = value.host;
      this._port = value.port;
      this._replyTo = value.replyTo;
      this._replyToDisplayName = value.replyToDisplayName;
      this._ssl = value.ssl;
      this._starttls = value.starttls;
      this._auth.internalValue = value.auth;
      this._tokenAuth.internalValue = value.tokenAuth;
    }
  }

  // envelope_from - computed: false, optional: true, required: false
  private _envelopeFrom?: string; 
  public get envelopeFrom() {
    return this.getStringAttribute('envelope_from');
  }
  public set envelopeFrom(value: string) {
    this._envelopeFrom = value;
  }
  public resetEnvelopeFrom() {
    this._envelopeFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envelopeFromInput() {
    return this._envelopeFrom;
  }

  // from - computed: false, optional: false, required: true
  private _from?: string; 
  public get from() {
    return this.getStringAttribute('from');
  }
  public set from(value: string) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // from_display_name - computed: false, optional: true, required: false
  private _fromDisplayName?: string; 
  public get fromDisplayName() {
    return this.getStringAttribute('from_display_name');
  }
  public set fromDisplayName(value: string) {
    this._fromDisplayName = value;
  }
  public resetFromDisplayName() {
    this._fromDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromDisplayNameInput() {
    return this._fromDisplayName;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // reply_to - computed: false, optional: true, required: false
  private _replyTo?: string; 
  public get replyTo() {
    return this.getStringAttribute('reply_to');
  }
  public set replyTo(value: string) {
    this._replyTo = value;
  }
  public resetReplyTo() {
    this._replyTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyToInput() {
    return this._replyTo;
  }

  // reply_to_display_name - computed: false, optional: true, required: false
  private _replyToDisplayName?: string; 
  public get replyToDisplayName() {
    return this.getStringAttribute('reply_to_display_name');
  }
  public set replyToDisplayName(value: string) {
    this._replyToDisplayName = value;
  }
  public resetReplyToDisplayName() {
    this._replyToDisplayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replyToDisplayNameInput() {
    return this._replyToDisplayName;
  }

  // ssl - computed: false, optional: true, required: false
  private _ssl?: boolean | cdktf.IResolvable; 
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }
  public set ssl(value: boolean | cdktf.IResolvable) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // starttls - computed: false, optional: true, required: false
  private _starttls?: boolean | cdktf.IResolvable; 
  public get starttls() {
    return this.getBooleanAttribute('starttls');
  }
  public set starttls(value: boolean | cdktf.IResolvable) {
    this._starttls = value;
  }
  public resetStarttls() {
    this._starttls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get starttlsInput() {
    return this._starttls;
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new RealmSmtpServerAuthOutputReference(this, "auth");
  public get auth() {
    return this._auth;
  }
  public putAuth(value: RealmSmtpServerAuth) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
  }

  // token_auth - computed: false, optional: true, required: false
  private _tokenAuth = new RealmSmtpServerTokenAuthOutputReference(this, "token_auth");
  public get tokenAuth() {
    return this._tokenAuth;
  }
  public putTokenAuth(value: RealmSmtpServerTokenAuth) {
    this._tokenAuth.internalValue = value;
  }
  public resetTokenAuth() {
    this._tokenAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenAuthInput() {
    return this._tokenAuth.internalValue;
  }
}
export interface RealmWebAuthnPasswordlessPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#acceptable_aaguids Realm#acceptable_aaguids}
  */
  readonly acceptableAaguids?: string[];
  /**
  * Either none, indirect or direct
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#attestation_conveyance_preference Realm#attestation_conveyance_preference}
  */
  readonly attestationConveyancePreference?: string;
  /**
  * Either platform or cross-platform
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#authenticator_attachment Realm#authenticator_attachment}
  */
  readonly authenticatorAttachment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#avoid_same_authenticator_register Realm#avoid_same_authenticator_register}
  */
  readonly avoidSameAuthenticatorRegister?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#create_timeout Realm#create_timeout}
  */
  readonly createTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#extra_origins Realm#extra_origins}
  */
  readonly extraOrigins?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#relying_party_entity_name Realm#relying_party_entity_name}
  */
  readonly relyingPartyEntityName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#relying_party_id Realm#relying_party_id}
  */
  readonly relyingPartyId?: string;
  /**
  * Either Yes or No
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#require_resident_key Realm#require_resident_key}
  */
  readonly requireResidentKey?: string;
  /**
  * Keycloak lists ES256, ES384, ES512, RS256, RS384, RS512, RS1 at the time of writing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#signature_algorithms Realm#signature_algorithms}
  */
  readonly signatureAlgorithms?: string[];
  /**
  * Either required, preferred or discouraged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#user_verification_requirement Realm#user_verification_requirement}
  */
  readonly userVerificationRequirement?: string;
}

export function realmWebAuthnPasswordlessPolicyToTerraform(struct?: RealmWebAuthnPasswordlessPolicyOutputReference | RealmWebAuthnPasswordlessPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acceptable_aaguids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.acceptableAaguids),
    attestation_conveyance_preference: cdktf.stringToTerraform(struct!.attestationConveyancePreference),
    authenticator_attachment: cdktf.stringToTerraform(struct!.authenticatorAttachment),
    avoid_same_authenticator_register: cdktf.booleanToTerraform(struct!.avoidSameAuthenticatorRegister),
    create_timeout: cdktf.numberToTerraform(struct!.createTimeout),
    extra_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraOrigins),
    relying_party_entity_name: cdktf.stringToTerraform(struct!.relyingPartyEntityName),
    relying_party_id: cdktf.stringToTerraform(struct!.relyingPartyId),
    require_resident_key: cdktf.stringToTerraform(struct!.requireResidentKey),
    signature_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.signatureAlgorithms),
    user_verification_requirement: cdktf.stringToTerraform(struct!.userVerificationRequirement),
  }
}


export function realmWebAuthnPasswordlessPolicyToHclTerraform(struct?: RealmWebAuthnPasswordlessPolicyOutputReference | RealmWebAuthnPasswordlessPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acceptable_aaguids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.acceptableAaguids),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    attestation_conveyance_preference: {
      value: cdktf.stringToHclTerraform(struct!.attestationConveyancePreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authenticator_attachment: {
      value: cdktf.stringToHclTerraform(struct!.authenticatorAttachment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    avoid_same_authenticator_register: {
      value: cdktf.booleanToHclTerraform(struct!.avoidSameAuthenticatorRegister),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    create_timeout: {
      value: cdktf.numberToHclTerraform(struct!.createTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extra_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraOrigins),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    relying_party_entity_name: {
      value: cdktf.stringToHclTerraform(struct!.relyingPartyEntityName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relying_party_id: {
      value: cdktf.stringToHclTerraform(struct!.relyingPartyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_resident_key: {
      value: cdktf.stringToHclTerraform(struct!.requireResidentKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.signatureAlgorithms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    user_verification_requirement: {
      value: cdktf.stringToHclTerraform(struct!.userVerificationRequirement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealmWebAuthnPasswordlessPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealmWebAuthnPasswordlessPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptableAaguids !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptableAaguids = this._acceptableAaguids;
    }
    if (this._attestationConveyancePreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.attestationConveyancePreference = this._attestationConveyancePreference;
    }
    if (this._authenticatorAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticatorAttachment = this._authenticatorAttachment;
    }
    if (this._avoidSameAuthenticatorRegister !== undefined) {
      hasAnyValues = true;
      internalValueResult.avoidSameAuthenticatorRegister = this._avoidSameAuthenticatorRegister;
    }
    if (this._createTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.createTimeout = this._createTimeout;
    }
    if (this._extraOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraOrigins = this._extraOrigins;
    }
    if (this._relyingPartyEntityName !== undefined) {
      hasAnyValues = true;
      internalValueResult.relyingPartyEntityName = this._relyingPartyEntityName;
    }
    if (this._relyingPartyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.relyingPartyId = this._relyingPartyId;
    }
    if (this._requireResidentKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireResidentKey = this._requireResidentKey;
    }
    if (this._signatureAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureAlgorithms = this._signatureAlgorithms;
    }
    if (this._userVerificationRequirement !== undefined) {
      hasAnyValues = true;
      internalValueResult.userVerificationRequirement = this._userVerificationRequirement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealmWebAuthnPasswordlessPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptableAaguids = undefined;
      this._attestationConveyancePreference = undefined;
      this._authenticatorAttachment = undefined;
      this._avoidSameAuthenticatorRegister = undefined;
      this._createTimeout = undefined;
      this._extraOrigins = undefined;
      this._relyingPartyEntityName = undefined;
      this._relyingPartyId = undefined;
      this._requireResidentKey = undefined;
      this._signatureAlgorithms = undefined;
      this._userVerificationRequirement = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptableAaguids = value.acceptableAaguids;
      this._attestationConveyancePreference = value.attestationConveyancePreference;
      this._authenticatorAttachment = value.authenticatorAttachment;
      this._avoidSameAuthenticatorRegister = value.avoidSameAuthenticatorRegister;
      this._createTimeout = value.createTimeout;
      this._extraOrigins = value.extraOrigins;
      this._relyingPartyEntityName = value.relyingPartyEntityName;
      this._relyingPartyId = value.relyingPartyId;
      this._requireResidentKey = value.requireResidentKey;
      this._signatureAlgorithms = value.signatureAlgorithms;
      this._userVerificationRequirement = value.userVerificationRequirement;
    }
  }

  // acceptable_aaguids - computed: false, optional: true, required: false
  private _acceptableAaguids?: string[]; 
  public get acceptableAaguids() {
    return cdktf.Fn.tolist(this.getListAttribute('acceptable_aaguids'));
  }
  public set acceptableAaguids(value: string[]) {
    this._acceptableAaguids = value;
  }
  public resetAcceptableAaguids() {
    this._acceptableAaguids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptableAaguidsInput() {
    return this._acceptableAaguids;
  }

  // attestation_conveyance_preference - computed: false, optional: true, required: false
  private _attestationConveyancePreference?: string; 
  public get attestationConveyancePreference() {
    return this.getStringAttribute('attestation_conveyance_preference');
  }
  public set attestationConveyancePreference(value: string) {
    this._attestationConveyancePreference = value;
  }
  public resetAttestationConveyancePreference() {
    this._attestationConveyancePreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attestationConveyancePreferenceInput() {
    return this._attestationConveyancePreference;
  }

  // authenticator_attachment - computed: false, optional: true, required: false
  private _authenticatorAttachment?: string; 
  public get authenticatorAttachment() {
    return this.getStringAttribute('authenticator_attachment');
  }
  public set authenticatorAttachment(value: string) {
    this._authenticatorAttachment = value;
  }
  public resetAuthenticatorAttachment() {
    this._authenticatorAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatorAttachmentInput() {
    return this._authenticatorAttachment;
  }

  // avoid_same_authenticator_register - computed: false, optional: true, required: false
  private _avoidSameAuthenticatorRegister?: boolean | cdktf.IResolvable; 
  public get avoidSameAuthenticatorRegister() {
    return this.getBooleanAttribute('avoid_same_authenticator_register');
  }
  public set avoidSameAuthenticatorRegister(value: boolean | cdktf.IResolvable) {
    this._avoidSameAuthenticatorRegister = value;
  }
  public resetAvoidSameAuthenticatorRegister() {
    this._avoidSameAuthenticatorRegister = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avoidSameAuthenticatorRegisterInput() {
    return this._avoidSameAuthenticatorRegister;
  }

  // create_timeout - computed: false, optional: true, required: false
  private _createTimeout?: number; 
  public get createTimeout() {
    return this.getNumberAttribute('create_timeout');
  }
  public set createTimeout(value: number) {
    this._createTimeout = value;
  }
  public resetCreateTimeout() {
    this._createTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeoutInput() {
    return this._createTimeout;
  }

  // extra_origins - computed: false, optional: true, required: false
  private _extraOrigins?: string[]; 
  public get extraOrigins() {
    return cdktf.Fn.tolist(this.getListAttribute('extra_origins'));
  }
  public set extraOrigins(value: string[]) {
    this._extraOrigins = value;
  }
  public resetExtraOrigins() {
    this._extraOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraOriginsInput() {
    return this._extraOrigins;
  }

  // relying_party_entity_name - computed: false, optional: true, required: false
  private _relyingPartyEntityName?: string; 
  public get relyingPartyEntityName() {
    return this.getStringAttribute('relying_party_entity_name');
  }
  public set relyingPartyEntityName(value: string) {
    this._relyingPartyEntityName = value;
  }
  public resetRelyingPartyEntityName() {
    this._relyingPartyEntityName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relyingPartyEntityNameInput() {
    return this._relyingPartyEntityName;
  }

  // relying_party_id - computed: false, optional: true, required: false
  private _relyingPartyId?: string; 
  public get relyingPartyId() {
    return this.getStringAttribute('relying_party_id');
  }
  public set relyingPartyId(value: string) {
    this._relyingPartyId = value;
  }
  public resetRelyingPartyId() {
    this._relyingPartyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relyingPartyIdInput() {
    return this._relyingPartyId;
  }

  // require_resident_key - computed: false, optional: true, required: false
  private _requireResidentKey?: string; 
  public get requireResidentKey() {
    return this.getStringAttribute('require_resident_key');
  }
  public set requireResidentKey(value: string) {
    this._requireResidentKey = value;
  }
  public resetRequireResidentKey() {
    this._requireResidentKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireResidentKeyInput() {
    return this._requireResidentKey;
  }

  // signature_algorithms - computed: true, optional: true, required: false
  private _signatureAlgorithms?: string[]; 
  public get signatureAlgorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('signature_algorithms'));
  }
  public set signatureAlgorithms(value: string[]) {
    this._signatureAlgorithms = value;
  }
  public resetSignatureAlgorithms() {
    this._signatureAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmsInput() {
    return this._signatureAlgorithms;
  }

  // user_verification_requirement - computed: false, optional: true, required: false
  private _userVerificationRequirement?: string; 
  public get userVerificationRequirement() {
    return this.getStringAttribute('user_verification_requirement');
  }
  public set userVerificationRequirement(value: string) {
    this._userVerificationRequirement = value;
  }
  public resetUserVerificationRequirement() {
    this._userVerificationRequirement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userVerificationRequirementInput() {
    return this._userVerificationRequirement;
  }
}
export interface RealmWebAuthnPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#acceptable_aaguids Realm#acceptable_aaguids}
  */
  readonly acceptableAaguids?: string[];
  /**
  * Either none, indirect or direct
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#attestation_conveyance_preference Realm#attestation_conveyance_preference}
  */
  readonly attestationConveyancePreference?: string;
  /**
  * Either platform or cross-platform
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#authenticator_attachment Realm#authenticator_attachment}
  */
  readonly authenticatorAttachment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#avoid_same_authenticator_register Realm#avoid_same_authenticator_register}
  */
  readonly avoidSameAuthenticatorRegister?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#create_timeout Realm#create_timeout}
  */
  readonly createTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#extra_origins Realm#extra_origins}
  */
  readonly extraOrigins?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#relying_party_entity_name Realm#relying_party_entity_name}
  */
  readonly relyingPartyEntityName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#relying_party_id Realm#relying_party_id}
  */
  readonly relyingPartyId?: string;
  /**
  * Either Yes or No
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#require_resident_key Realm#require_resident_key}
  */
  readonly requireResidentKey?: string;
  /**
  * Keycloak lists ES256, ES384, ES512, RS256, RS384, RS512, RS1 at the time of writing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#signature_algorithms Realm#signature_algorithms}
  */
  readonly signatureAlgorithms?: string[];
  /**
  * Either required, preferred or discouraged
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#user_verification_requirement Realm#user_verification_requirement}
  */
  readonly userVerificationRequirement?: string;
}

export function realmWebAuthnPolicyToTerraform(struct?: RealmWebAuthnPolicyOutputReference | RealmWebAuthnPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acceptable_aaguids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.acceptableAaguids),
    attestation_conveyance_preference: cdktf.stringToTerraform(struct!.attestationConveyancePreference),
    authenticator_attachment: cdktf.stringToTerraform(struct!.authenticatorAttachment),
    avoid_same_authenticator_register: cdktf.booleanToTerraform(struct!.avoidSameAuthenticatorRegister),
    create_timeout: cdktf.numberToTerraform(struct!.createTimeout),
    extra_origins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraOrigins),
    relying_party_entity_name: cdktf.stringToTerraform(struct!.relyingPartyEntityName),
    relying_party_id: cdktf.stringToTerraform(struct!.relyingPartyId),
    require_resident_key: cdktf.stringToTerraform(struct!.requireResidentKey),
    signature_algorithms: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.signatureAlgorithms),
    user_verification_requirement: cdktf.stringToTerraform(struct!.userVerificationRequirement),
  }
}


export function realmWebAuthnPolicyToHclTerraform(struct?: RealmWebAuthnPolicyOutputReference | RealmWebAuthnPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acceptable_aaguids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.acceptableAaguids),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    attestation_conveyance_preference: {
      value: cdktf.stringToHclTerraform(struct!.attestationConveyancePreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authenticator_attachment: {
      value: cdktf.stringToHclTerraform(struct!.authenticatorAttachment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    avoid_same_authenticator_register: {
      value: cdktf.booleanToHclTerraform(struct!.avoidSameAuthenticatorRegister),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    create_timeout: {
      value: cdktf.numberToHclTerraform(struct!.createTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    extra_origins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraOrigins),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    relying_party_entity_name: {
      value: cdktf.stringToHclTerraform(struct!.relyingPartyEntityName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    relying_party_id: {
      value: cdktf.stringToHclTerraform(struct!.relyingPartyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_resident_key: {
      value: cdktf.stringToHclTerraform(struct!.requireResidentKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    signature_algorithms: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.signatureAlgorithms),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    user_verification_requirement: {
      value: cdktf.stringToHclTerraform(struct!.userVerificationRequirement),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RealmWebAuthnPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RealmWebAuthnPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptableAaguids !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptableAaguids = this._acceptableAaguids;
    }
    if (this._attestationConveyancePreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.attestationConveyancePreference = this._attestationConveyancePreference;
    }
    if (this._authenticatorAttachment !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticatorAttachment = this._authenticatorAttachment;
    }
    if (this._avoidSameAuthenticatorRegister !== undefined) {
      hasAnyValues = true;
      internalValueResult.avoidSameAuthenticatorRegister = this._avoidSameAuthenticatorRegister;
    }
    if (this._createTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.createTimeout = this._createTimeout;
    }
    if (this._extraOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraOrigins = this._extraOrigins;
    }
    if (this._relyingPartyEntityName !== undefined) {
      hasAnyValues = true;
      internalValueResult.relyingPartyEntityName = this._relyingPartyEntityName;
    }
    if (this._relyingPartyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.relyingPartyId = this._relyingPartyId;
    }
    if (this._requireResidentKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireResidentKey = this._requireResidentKey;
    }
    if (this._signatureAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.signatureAlgorithms = this._signatureAlgorithms;
    }
    if (this._userVerificationRequirement !== undefined) {
      hasAnyValues = true;
      internalValueResult.userVerificationRequirement = this._userVerificationRequirement;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RealmWebAuthnPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptableAaguids = undefined;
      this._attestationConveyancePreference = undefined;
      this._authenticatorAttachment = undefined;
      this._avoidSameAuthenticatorRegister = undefined;
      this._createTimeout = undefined;
      this._extraOrigins = undefined;
      this._relyingPartyEntityName = undefined;
      this._relyingPartyId = undefined;
      this._requireResidentKey = undefined;
      this._signatureAlgorithms = undefined;
      this._userVerificationRequirement = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptableAaguids = value.acceptableAaguids;
      this._attestationConveyancePreference = value.attestationConveyancePreference;
      this._authenticatorAttachment = value.authenticatorAttachment;
      this._avoidSameAuthenticatorRegister = value.avoidSameAuthenticatorRegister;
      this._createTimeout = value.createTimeout;
      this._extraOrigins = value.extraOrigins;
      this._relyingPartyEntityName = value.relyingPartyEntityName;
      this._relyingPartyId = value.relyingPartyId;
      this._requireResidentKey = value.requireResidentKey;
      this._signatureAlgorithms = value.signatureAlgorithms;
      this._userVerificationRequirement = value.userVerificationRequirement;
    }
  }

  // acceptable_aaguids - computed: false, optional: true, required: false
  private _acceptableAaguids?: string[]; 
  public get acceptableAaguids() {
    return cdktf.Fn.tolist(this.getListAttribute('acceptable_aaguids'));
  }
  public set acceptableAaguids(value: string[]) {
    this._acceptableAaguids = value;
  }
  public resetAcceptableAaguids() {
    this._acceptableAaguids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptableAaguidsInput() {
    return this._acceptableAaguids;
  }

  // attestation_conveyance_preference - computed: false, optional: true, required: false
  private _attestationConveyancePreference?: string; 
  public get attestationConveyancePreference() {
    return this.getStringAttribute('attestation_conveyance_preference');
  }
  public set attestationConveyancePreference(value: string) {
    this._attestationConveyancePreference = value;
  }
  public resetAttestationConveyancePreference() {
    this._attestationConveyancePreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attestationConveyancePreferenceInput() {
    return this._attestationConveyancePreference;
  }

  // authenticator_attachment - computed: false, optional: true, required: false
  private _authenticatorAttachment?: string; 
  public get authenticatorAttachment() {
    return this.getStringAttribute('authenticator_attachment');
  }
  public set authenticatorAttachment(value: string) {
    this._authenticatorAttachment = value;
  }
  public resetAuthenticatorAttachment() {
    this._authenticatorAttachment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatorAttachmentInput() {
    return this._authenticatorAttachment;
  }

  // avoid_same_authenticator_register - computed: false, optional: true, required: false
  private _avoidSameAuthenticatorRegister?: boolean | cdktf.IResolvable; 
  public get avoidSameAuthenticatorRegister() {
    return this.getBooleanAttribute('avoid_same_authenticator_register');
  }
  public set avoidSameAuthenticatorRegister(value: boolean | cdktf.IResolvable) {
    this._avoidSameAuthenticatorRegister = value;
  }
  public resetAvoidSameAuthenticatorRegister() {
    this._avoidSameAuthenticatorRegister = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avoidSameAuthenticatorRegisterInput() {
    return this._avoidSameAuthenticatorRegister;
  }

  // create_timeout - computed: false, optional: true, required: false
  private _createTimeout?: number; 
  public get createTimeout() {
    return this.getNumberAttribute('create_timeout');
  }
  public set createTimeout(value: number) {
    this._createTimeout = value;
  }
  public resetCreateTimeout() {
    this._createTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeoutInput() {
    return this._createTimeout;
  }

  // extra_origins - computed: false, optional: true, required: false
  private _extraOrigins?: string[]; 
  public get extraOrigins() {
    return cdktf.Fn.tolist(this.getListAttribute('extra_origins'));
  }
  public set extraOrigins(value: string[]) {
    this._extraOrigins = value;
  }
  public resetExtraOrigins() {
    this._extraOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraOriginsInput() {
    return this._extraOrigins;
  }

  // relying_party_entity_name - computed: false, optional: true, required: false
  private _relyingPartyEntityName?: string; 
  public get relyingPartyEntityName() {
    return this.getStringAttribute('relying_party_entity_name');
  }
  public set relyingPartyEntityName(value: string) {
    this._relyingPartyEntityName = value;
  }
  public resetRelyingPartyEntityName() {
    this._relyingPartyEntityName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relyingPartyEntityNameInput() {
    return this._relyingPartyEntityName;
  }

  // relying_party_id - computed: false, optional: true, required: false
  private _relyingPartyId?: string; 
  public get relyingPartyId() {
    return this.getStringAttribute('relying_party_id');
  }
  public set relyingPartyId(value: string) {
    this._relyingPartyId = value;
  }
  public resetRelyingPartyId() {
    this._relyingPartyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relyingPartyIdInput() {
    return this._relyingPartyId;
  }

  // require_resident_key - computed: false, optional: true, required: false
  private _requireResidentKey?: string; 
  public get requireResidentKey() {
    return this.getStringAttribute('require_resident_key');
  }
  public set requireResidentKey(value: string) {
    this._requireResidentKey = value;
  }
  public resetRequireResidentKey() {
    this._requireResidentKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireResidentKeyInput() {
    return this._requireResidentKey;
  }

  // signature_algorithms - computed: true, optional: true, required: false
  private _signatureAlgorithms?: string[]; 
  public get signatureAlgorithms() {
    return cdktf.Fn.tolist(this.getListAttribute('signature_algorithms'));
  }
  public set signatureAlgorithms(value: string[]) {
    this._signatureAlgorithms = value;
  }
  public resetSignatureAlgorithms() {
    this._signatureAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signatureAlgorithmsInput() {
    return this._signatureAlgorithms;
  }

  // user_verification_requirement - computed: false, optional: true, required: false
  private _userVerificationRequirement?: string; 
  public get userVerificationRequirement() {
    return this.getStringAttribute('user_verification_requirement');
  }
  public set userVerificationRequirement(value: string) {
    this._userVerificationRequirement = value;
  }
  public resetUserVerificationRequirement() {
    this._userVerificationRequirement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userVerificationRequirementInput() {
    return this._userVerificationRequirement;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm keycloak_realm}
*/
export class Realm extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_realm";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Realm resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Realm to import
  * @param importFromId The id of the existing Realm that should be imported. Refer to the {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Realm to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_realm", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/realm keycloak_realm} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RealmConfig
  */
  public constructor(scope: Construct, id: string, config: RealmConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_realm',
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
    this._accessCodeLifespan = config.accessCodeLifespan;
    this._accessCodeLifespanLogin = config.accessCodeLifespanLogin;
    this._accessCodeLifespanUserAction = config.accessCodeLifespanUserAction;
    this._accessTokenLifespan = config.accessTokenLifespan;
    this._accessTokenLifespanForImplicitFlow = config.accessTokenLifespanForImplicitFlow;
    this._accountTheme = config.accountTheme;
    this._actionTokenGeneratedByAdminLifespan = config.actionTokenGeneratedByAdminLifespan;
    this._actionTokenGeneratedByUserLifespan = config.actionTokenGeneratedByUserLifespan;
    this._adminTheme = config.adminTheme;
    this._attributes = config.attributes;
    this._browserFlow = config.browserFlow;
    this._clientAuthenticationFlow = config.clientAuthenticationFlow;
    this._clientSessionIdleTimeout = config.clientSessionIdleTimeout;
    this._clientSessionMaxLifespan = config.clientSessionMaxLifespan;
    this._defaultDefaultClientScopes = config.defaultDefaultClientScopes;
    this._defaultOptionalClientScopes = config.defaultOptionalClientScopes;
    this._defaultSignatureAlgorithm = config.defaultSignatureAlgorithm;
    this._directGrantFlow = config.directGrantFlow;
    this._displayName = config.displayName;
    this._displayNameHtml = config.displayNameHtml;
    this._dockerAuthenticationFlow = config.dockerAuthenticationFlow;
    this._duplicateEmailsAllowed = config.duplicateEmailsAllowed;
    this._editUsernameAllowed = config.editUsernameAllowed;
    this._emailTheme = config.emailTheme;
    this._enabled = config.enabled;
    this._firstBrokerLoginFlow = config.firstBrokerLoginFlow;
    this._id = config.id;
    this._internalId = config.internalId;
    this._loginTheme = config.loginTheme;
    this._loginWithEmailAllowed = config.loginWithEmailAllowed;
    this._oauth2DeviceCodeLifespan = config.oauth2DeviceCodeLifespan;
    this._oauth2DevicePollingInterval = config.oauth2DevicePollingInterval;
    this._offlineSessionIdleTimeout = config.offlineSessionIdleTimeout;
    this._offlineSessionMaxLifespan = config.offlineSessionMaxLifespan;
    this._offlineSessionMaxLifespanEnabled = config.offlineSessionMaxLifespanEnabled;
    this._organizationsEnabled = config.organizationsEnabled;
    this._passwordPolicy = config.passwordPolicy;
    this._realm = config.realm;
    this._refreshTokenMaxReuse = config.refreshTokenMaxReuse;
    this._registrationAllowed = config.registrationAllowed;
    this._registrationEmailAsUsername = config.registrationEmailAsUsername;
    this._registrationFlow = config.registrationFlow;
    this._rememberMe = config.rememberMe;
    this._resetCredentialsFlow = config.resetCredentialsFlow;
    this._resetPasswordAllowed = config.resetPasswordAllowed;
    this._revokeRefreshToken = config.revokeRefreshToken;
    this._sslRequired = config.sslRequired;
    this._ssoSessionIdleTimeout = config.ssoSessionIdleTimeout;
    this._ssoSessionIdleTimeoutRememberMe = config.ssoSessionIdleTimeoutRememberMe;
    this._ssoSessionMaxLifespan = config.ssoSessionMaxLifespan;
    this._ssoSessionMaxLifespanRememberMe = config.ssoSessionMaxLifespanRememberMe;
    this._userManagedAccess = config.userManagedAccess;
    this._verifyEmail = config.verifyEmail;
    this._internationalization.internalValue = config.internationalization;
    this._otpPolicy.internalValue = config.otpPolicy;
    this._securityDefenses.internalValue = config.securityDefenses;
    this._smtpServer.internalValue = config.smtpServer;
    this._webAuthnPasswordlessPolicy.internalValue = config.webAuthnPasswordlessPolicy;
    this._webAuthnPolicy.internalValue = config.webAuthnPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_code_lifespan - computed: true, optional: true, required: false
  private _accessCodeLifespan?: string; 
  public get accessCodeLifespan() {
    return this.getStringAttribute('access_code_lifespan');
  }
  public set accessCodeLifespan(value: string) {
    this._accessCodeLifespan = value;
  }
  public resetAccessCodeLifespan() {
    this._accessCodeLifespan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessCodeLifespanInput() {
    return this._accessCodeLifespan;
  }

  // access_code_lifespan_login - computed: true, optional: true, required: false
  private _accessCodeLifespanLogin?: string; 
  public get accessCodeLifespanLogin() {
    return this.getStringAttribute('access_code_lifespan_login');
  }
  public set accessCodeLifespanLogin(value: string) {
    this._accessCodeLifespanLogin = value;
  }
  public resetAccessCodeLifespanLogin() {
    this._accessCodeLifespanLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessCodeLifespanLoginInput() {
    return this._accessCodeLifespanLogin;
  }

  // access_code_lifespan_user_action - computed: true, optional: true, required: false
  private _accessCodeLifespanUserAction?: string; 
  public get accessCodeLifespanUserAction() {
    return this.getStringAttribute('access_code_lifespan_user_action');
  }
  public set accessCodeLifespanUserAction(value: string) {
    this._accessCodeLifespanUserAction = value;
  }
  public resetAccessCodeLifespanUserAction() {
    this._accessCodeLifespanUserAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessCodeLifespanUserActionInput() {
    return this._accessCodeLifespanUserAction;
  }

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

  // access_token_lifespan_for_implicit_flow - computed: true, optional: true, required: false
  private _accessTokenLifespanForImplicitFlow?: string; 
  public get accessTokenLifespanForImplicitFlow() {
    return this.getStringAttribute('access_token_lifespan_for_implicit_flow');
  }
  public set accessTokenLifespanForImplicitFlow(value: string) {
    this._accessTokenLifespanForImplicitFlow = value;
  }
  public resetAccessTokenLifespanForImplicitFlow() {
    this._accessTokenLifespanForImplicitFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenLifespanForImplicitFlowInput() {
    return this._accessTokenLifespanForImplicitFlow;
  }

  // account_theme - computed: false, optional: true, required: false
  private _accountTheme?: string; 
  public get accountTheme() {
    return this.getStringAttribute('account_theme');
  }
  public set accountTheme(value: string) {
    this._accountTheme = value;
  }
  public resetAccountTheme() {
    this._accountTheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountThemeInput() {
    return this._accountTheme;
  }

  // action_token_generated_by_admin_lifespan - computed: true, optional: true, required: false
  private _actionTokenGeneratedByAdminLifespan?: string; 
  public get actionTokenGeneratedByAdminLifespan() {
    return this.getStringAttribute('action_token_generated_by_admin_lifespan');
  }
  public set actionTokenGeneratedByAdminLifespan(value: string) {
    this._actionTokenGeneratedByAdminLifespan = value;
  }
  public resetActionTokenGeneratedByAdminLifespan() {
    this._actionTokenGeneratedByAdminLifespan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTokenGeneratedByAdminLifespanInput() {
    return this._actionTokenGeneratedByAdminLifespan;
  }

  // action_token_generated_by_user_lifespan - computed: true, optional: true, required: false
  private _actionTokenGeneratedByUserLifespan?: string; 
  public get actionTokenGeneratedByUserLifespan() {
    return this.getStringAttribute('action_token_generated_by_user_lifespan');
  }
  public set actionTokenGeneratedByUserLifespan(value: string) {
    this._actionTokenGeneratedByUserLifespan = value;
  }
  public resetActionTokenGeneratedByUserLifespan() {
    this._actionTokenGeneratedByUserLifespan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTokenGeneratedByUserLifespanInput() {
    return this._actionTokenGeneratedByUserLifespan;
  }

  // admin_theme - computed: false, optional: true, required: false
  private _adminTheme?: string; 
  public get adminTheme() {
    return this.getStringAttribute('admin_theme');
  }
  public set adminTheme(value: string) {
    this._adminTheme = value;
  }
  public resetAdminTheme() {
    this._adminTheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminThemeInput() {
    return this._adminTheme;
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // browser_flow - computed: true, optional: true, required: false
  private _browserFlow?: string; 
  public get browserFlow() {
    return this.getStringAttribute('browser_flow');
  }
  public set browserFlow(value: string) {
    this._browserFlow = value;
  }
  public resetBrowserFlow() {
    this._browserFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserFlowInput() {
    return this._browserFlow;
  }

  // client_authentication_flow - computed: true, optional: true, required: false
  private _clientAuthenticationFlow?: string; 
  public get clientAuthenticationFlow() {
    return this.getStringAttribute('client_authentication_flow');
  }
  public set clientAuthenticationFlow(value: string) {
    this._clientAuthenticationFlow = value;
  }
  public resetClientAuthenticationFlow() {
    this._clientAuthenticationFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthenticationFlowInput() {
    return this._clientAuthenticationFlow;
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

  // default_default_client_scopes - computed: false, optional: true, required: false
  private _defaultDefaultClientScopes?: string[]; 
  public get defaultDefaultClientScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('default_default_client_scopes'));
  }
  public set defaultDefaultClientScopes(value: string[]) {
    this._defaultDefaultClientScopes = value;
  }
  public resetDefaultDefaultClientScopes() {
    this._defaultDefaultClientScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDefaultClientScopesInput() {
    return this._defaultDefaultClientScopes;
  }

  // default_optional_client_scopes - computed: false, optional: true, required: false
  private _defaultOptionalClientScopes?: string[]; 
  public get defaultOptionalClientScopes() {
    return cdktf.Fn.tolist(this.getListAttribute('default_optional_client_scopes'));
  }
  public set defaultOptionalClientScopes(value: string[]) {
    this._defaultOptionalClientScopes = value;
  }
  public resetDefaultOptionalClientScopes() {
    this._defaultOptionalClientScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultOptionalClientScopesInput() {
    return this._defaultOptionalClientScopes;
  }

  // default_signature_algorithm - computed: false, optional: true, required: false
  private _defaultSignatureAlgorithm?: string; 
  public get defaultSignatureAlgorithm() {
    return this.getStringAttribute('default_signature_algorithm');
  }
  public set defaultSignatureAlgorithm(value: string) {
    this._defaultSignatureAlgorithm = value;
  }
  public resetDefaultSignatureAlgorithm() {
    this._defaultSignatureAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSignatureAlgorithmInput() {
    return this._defaultSignatureAlgorithm;
  }

  // direct_grant_flow - computed: true, optional: true, required: false
  private _directGrantFlow?: string; 
  public get directGrantFlow() {
    return this.getStringAttribute('direct_grant_flow');
  }
  public set directGrantFlow(value: string) {
    this._directGrantFlow = value;
  }
  public resetDirectGrantFlow() {
    this._directGrantFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directGrantFlowInput() {
    return this._directGrantFlow;
  }

  // display_name - computed: false, optional: true, required: false
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

  // display_name_html - computed: false, optional: true, required: false
  private _displayNameHtml?: string; 
  public get displayNameHtml() {
    return this.getStringAttribute('display_name_html');
  }
  public set displayNameHtml(value: string) {
    this._displayNameHtml = value;
  }
  public resetDisplayNameHtml() {
    this._displayNameHtml = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameHtmlInput() {
    return this._displayNameHtml;
  }

  // docker_authentication_flow - computed: true, optional: true, required: false
  private _dockerAuthenticationFlow?: string; 
  public get dockerAuthenticationFlow() {
    return this.getStringAttribute('docker_authentication_flow');
  }
  public set dockerAuthenticationFlow(value: string) {
    this._dockerAuthenticationFlow = value;
  }
  public resetDockerAuthenticationFlow() {
    this._dockerAuthenticationFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerAuthenticationFlowInput() {
    return this._dockerAuthenticationFlow;
  }

  // duplicate_emails_allowed - computed: true, optional: true, required: false
  private _duplicateEmailsAllowed?: boolean | cdktf.IResolvable; 
  public get duplicateEmailsAllowed() {
    return this.getBooleanAttribute('duplicate_emails_allowed');
  }
  public set duplicateEmailsAllowed(value: boolean | cdktf.IResolvable) {
    this._duplicateEmailsAllowed = value;
  }
  public resetDuplicateEmailsAllowed() {
    this._duplicateEmailsAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get duplicateEmailsAllowedInput() {
    return this._duplicateEmailsAllowed;
  }

  // edit_username_allowed - computed: true, optional: true, required: false
  private _editUsernameAllowed?: boolean | cdktf.IResolvable; 
  public get editUsernameAllowed() {
    return this.getBooleanAttribute('edit_username_allowed');
  }
  public set editUsernameAllowed(value: boolean | cdktf.IResolvable) {
    this._editUsernameAllowed = value;
  }
  public resetEditUsernameAllowed() {
    this._editUsernameAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get editUsernameAllowedInput() {
    return this._editUsernameAllowed;
  }

  // email_theme - computed: false, optional: true, required: false
  private _emailTheme?: string; 
  public get emailTheme() {
    return this.getStringAttribute('email_theme');
  }
  public set emailTheme(value: string) {
    this._emailTheme = value;
  }
  public resetEmailTheme() {
    this._emailTheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailThemeInput() {
    return this._emailTheme;
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

  // first_broker_login_flow - computed: true, optional: true, required: false
  private _firstBrokerLoginFlow?: string; 
  public get firstBrokerLoginFlow() {
    return this.getStringAttribute('first_broker_login_flow');
  }
  public set firstBrokerLoginFlow(value: string) {
    this._firstBrokerLoginFlow = value;
  }
  public resetFirstBrokerLoginFlow() {
    this._firstBrokerLoginFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstBrokerLoginFlowInput() {
    return this._firstBrokerLoginFlow;
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

  // internal_id - computed: true, optional: true, required: false
  private _internalId?: string; 
  public get internalId() {
    return this.getStringAttribute('internal_id');
  }
  public set internalId(value: string) {
    this._internalId = value;
  }
  public resetInternalId() {
    this._internalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIdInput() {
    return this._internalId;
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

  // login_with_email_allowed - computed: true, optional: true, required: false
  private _loginWithEmailAllowed?: boolean | cdktf.IResolvable; 
  public get loginWithEmailAllowed() {
    return this.getBooleanAttribute('login_with_email_allowed');
  }
  public set loginWithEmailAllowed(value: boolean | cdktf.IResolvable) {
    this._loginWithEmailAllowed = value;
  }
  public resetLoginWithEmailAllowed() {
    this._loginWithEmailAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginWithEmailAllowedInput() {
    return this._loginWithEmailAllowed;
  }

  // oauth2_device_code_lifespan - computed: true, optional: true, required: false
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

  // oauth2_device_polling_interval - computed: true, optional: true, required: false
  private _oauth2DevicePollingInterval?: number; 
  public get oauth2DevicePollingInterval() {
    return this.getNumberAttribute('oauth2_device_polling_interval');
  }
  public set oauth2DevicePollingInterval(value: number) {
    this._oauth2DevicePollingInterval = value;
  }
  public resetOauth2DevicePollingInterval() {
    this._oauth2DevicePollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauth2DevicePollingIntervalInput() {
    return this._oauth2DevicePollingInterval;
  }

  // offline_session_idle_timeout - computed: true, optional: true, required: false
  private _offlineSessionIdleTimeout?: string; 
  public get offlineSessionIdleTimeout() {
    return this.getStringAttribute('offline_session_idle_timeout');
  }
  public set offlineSessionIdleTimeout(value: string) {
    this._offlineSessionIdleTimeout = value;
  }
  public resetOfflineSessionIdleTimeout() {
    this._offlineSessionIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineSessionIdleTimeoutInput() {
    return this._offlineSessionIdleTimeout;
  }

  // offline_session_max_lifespan - computed: true, optional: true, required: false
  private _offlineSessionMaxLifespan?: string; 
  public get offlineSessionMaxLifespan() {
    return this.getStringAttribute('offline_session_max_lifespan');
  }
  public set offlineSessionMaxLifespan(value: string) {
    this._offlineSessionMaxLifespan = value;
  }
  public resetOfflineSessionMaxLifespan() {
    this._offlineSessionMaxLifespan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineSessionMaxLifespanInput() {
    return this._offlineSessionMaxLifespan;
  }

  // offline_session_max_lifespan_enabled - computed: false, optional: true, required: false
  private _offlineSessionMaxLifespanEnabled?: boolean | cdktf.IResolvable; 
  public get offlineSessionMaxLifespanEnabled() {
    return this.getBooleanAttribute('offline_session_max_lifespan_enabled');
  }
  public set offlineSessionMaxLifespanEnabled(value: boolean | cdktf.IResolvable) {
    this._offlineSessionMaxLifespanEnabled = value;
  }
  public resetOfflineSessionMaxLifespanEnabled() {
    this._offlineSessionMaxLifespanEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineSessionMaxLifespanEnabledInput() {
    return this._offlineSessionMaxLifespanEnabled;
  }

  // organizations_enabled - computed: false, optional: true, required: false
  private _organizationsEnabled?: boolean | cdktf.IResolvable; 
  public get organizationsEnabled() {
    return this.getBooleanAttribute('organizations_enabled');
  }
  public set organizationsEnabled(value: boolean | cdktf.IResolvable) {
    this._organizationsEnabled = value;
  }
  public resetOrganizationsEnabled() {
    this._organizationsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationsEnabledInput() {
    return this._organizationsEnabled;
  }

  // password_policy - computed: false, optional: true, required: false
  private _passwordPolicy?: string; 
  public get passwordPolicy() {
    return this.getStringAttribute('password_policy');
  }
  public set passwordPolicy(value: string) {
    this._passwordPolicy = value;
  }
  public resetPasswordPolicy() {
    this._passwordPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordPolicyInput() {
    return this._passwordPolicy;
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

  // refresh_token_max_reuse - computed: false, optional: true, required: false
  private _refreshTokenMaxReuse?: number; 
  public get refreshTokenMaxReuse() {
    return this.getNumberAttribute('refresh_token_max_reuse');
  }
  public set refreshTokenMaxReuse(value: number) {
    this._refreshTokenMaxReuse = value;
  }
  public resetRefreshTokenMaxReuse() {
    this._refreshTokenMaxReuse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenMaxReuseInput() {
    return this._refreshTokenMaxReuse;
  }

  // registration_allowed - computed: true, optional: true, required: false
  private _registrationAllowed?: boolean | cdktf.IResolvable; 
  public get registrationAllowed() {
    return this.getBooleanAttribute('registration_allowed');
  }
  public set registrationAllowed(value: boolean | cdktf.IResolvable) {
    this._registrationAllowed = value;
  }
  public resetRegistrationAllowed() {
    this._registrationAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationAllowedInput() {
    return this._registrationAllowed;
  }

  // registration_email_as_username - computed: true, optional: true, required: false
  private _registrationEmailAsUsername?: boolean | cdktf.IResolvable; 
  public get registrationEmailAsUsername() {
    return this.getBooleanAttribute('registration_email_as_username');
  }
  public set registrationEmailAsUsername(value: boolean | cdktf.IResolvable) {
    this._registrationEmailAsUsername = value;
  }
  public resetRegistrationEmailAsUsername() {
    this._registrationEmailAsUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationEmailAsUsernameInput() {
    return this._registrationEmailAsUsername;
  }

  // registration_flow - computed: true, optional: true, required: false
  private _registrationFlow?: string; 
  public get registrationFlow() {
    return this.getStringAttribute('registration_flow');
  }
  public set registrationFlow(value: string) {
    this._registrationFlow = value;
  }
  public resetRegistrationFlow() {
    this._registrationFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationFlowInput() {
    return this._registrationFlow;
  }

  // remember_me - computed: true, optional: true, required: false
  private _rememberMe?: boolean | cdktf.IResolvable; 
  public get rememberMe() {
    return this.getBooleanAttribute('remember_me');
  }
  public set rememberMe(value: boolean | cdktf.IResolvable) {
    this._rememberMe = value;
  }
  public resetRememberMe() {
    this._rememberMe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rememberMeInput() {
    return this._rememberMe;
  }

  // reset_credentials_flow - computed: true, optional: true, required: false
  private _resetCredentialsFlow?: string; 
  public get resetCredentialsFlow() {
    return this.getStringAttribute('reset_credentials_flow');
  }
  public set resetCredentialsFlow(value: string) {
    this._resetCredentialsFlow = value;
  }
  public resetResetCredentialsFlow() {
    this._resetCredentialsFlow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetCredentialsFlowInput() {
    return this._resetCredentialsFlow;
  }

  // reset_password_allowed - computed: true, optional: true, required: false
  private _resetPasswordAllowed?: boolean | cdktf.IResolvable; 
  public get resetPasswordAllowed() {
    return this.getBooleanAttribute('reset_password_allowed');
  }
  public set resetPasswordAllowed(value: boolean | cdktf.IResolvable) {
    this._resetPasswordAllowed = value;
  }
  public resetResetPasswordAllowed() {
    this._resetPasswordAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetPasswordAllowedInput() {
    return this._resetPasswordAllowed;
  }

  // revoke_refresh_token - computed: false, optional: true, required: false
  private _revokeRefreshToken?: boolean | cdktf.IResolvable; 
  public get revokeRefreshToken() {
    return this.getBooleanAttribute('revoke_refresh_token');
  }
  public set revokeRefreshToken(value: boolean | cdktf.IResolvable) {
    this._revokeRefreshToken = value;
  }
  public resetRevokeRefreshToken() {
    this._revokeRefreshToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokeRefreshTokenInput() {
    return this._revokeRefreshToken;
  }

  // ssl_required - computed: false, optional: true, required: false
  private _sslRequired?: string; 
  public get sslRequired() {
    return this.getStringAttribute('ssl_required');
  }
  public set sslRequired(value: string) {
    this._sslRequired = value;
  }
  public resetSslRequired() {
    this._sslRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslRequiredInput() {
    return this._sslRequired;
  }

  // sso_session_idle_timeout - computed: true, optional: true, required: false
  private _ssoSessionIdleTimeout?: string; 
  public get ssoSessionIdleTimeout() {
    return this.getStringAttribute('sso_session_idle_timeout');
  }
  public set ssoSessionIdleTimeout(value: string) {
    this._ssoSessionIdleTimeout = value;
  }
  public resetSsoSessionIdleTimeout() {
    this._ssoSessionIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoSessionIdleTimeoutInput() {
    return this._ssoSessionIdleTimeout;
  }

  // sso_session_idle_timeout_remember_me - computed: true, optional: true, required: false
  private _ssoSessionIdleTimeoutRememberMe?: string; 
  public get ssoSessionIdleTimeoutRememberMe() {
    return this.getStringAttribute('sso_session_idle_timeout_remember_me');
  }
  public set ssoSessionIdleTimeoutRememberMe(value: string) {
    this._ssoSessionIdleTimeoutRememberMe = value;
  }
  public resetSsoSessionIdleTimeoutRememberMe() {
    this._ssoSessionIdleTimeoutRememberMe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoSessionIdleTimeoutRememberMeInput() {
    return this._ssoSessionIdleTimeoutRememberMe;
  }

  // sso_session_max_lifespan - computed: true, optional: true, required: false
  private _ssoSessionMaxLifespan?: string; 
  public get ssoSessionMaxLifespan() {
    return this.getStringAttribute('sso_session_max_lifespan');
  }
  public set ssoSessionMaxLifespan(value: string) {
    this._ssoSessionMaxLifespan = value;
  }
  public resetSsoSessionMaxLifespan() {
    this._ssoSessionMaxLifespan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoSessionMaxLifespanInput() {
    return this._ssoSessionMaxLifespan;
  }

  // sso_session_max_lifespan_remember_me - computed: true, optional: true, required: false
  private _ssoSessionMaxLifespanRememberMe?: string; 
  public get ssoSessionMaxLifespanRememberMe() {
    return this.getStringAttribute('sso_session_max_lifespan_remember_me');
  }
  public set ssoSessionMaxLifespanRememberMe(value: string) {
    this._ssoSessionMaxLifespanRememberMe = value;
  }
  public resetSsoSessionMaxLifespanRememberMe() {
    this._ssoSessionMaxLifespanRememberMe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoSessionMaxLifespanRememberMeInput() {
    return this._ssoSessionMaxLifespanRememberMe;
  }

  // user_managed_access - computed: false, optional: true, required: false
  private _userManagedAccess?: boolean | cdktf.IResolvable; 
  public get userManagedAccess() {
    return this.getBooleanAttribute('user_managed_access');
  }
  public set userManagedAccess(value: boolean | cdktf.IResolvable) {
    this._userManagedAccess = value;
  }
  public resetUserManagedAccess() {
    this._userManagedAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userManagedAccessInput() {
    return this._userManagedAccess;
  }

  // verify_email - computed: true, optional: true, required: false
  private _verifyEmail?: boolean | cdktf.IResolvable; 
  public get verifyEmail() {
    return this.getBooleanAttribute('verify_email');
  }
  public set verifyEmail(value: boolean | cdktf.IResolvable) {
    this._verifyEmail = value;
  }
  public resetVerifyEmail() {
    this._verifyEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyEmailInput() {
    return this._verifyEmail;
  }

  // internationalization - computed: false, optional: true, required: false
  private _internationalization = new RealmInternationalizationOutputReference(this, "internationalization");
  public get internationalization() {
    return this._internationalization;
  }
  public putInternationalization(value: RealmInternationalization) {
    this._internationalization.internalValue = value;
  }
  public resetInternationalization() {
    this._internationalization.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internationalizationInput() {
    return this._internationalization.internalValue;
  }

  // otp_policy - computed: false, optional: true, required: false
  private _otpPolicy = new RealmOtpPolicyOutputReference(this, "otp_policy");
  public get otpPolicy() {
    return this._otpPolicy;
  }
  public putOtpPolicy(value: RealmOtpPolicy) {
    this._otpPolicy.internalValue = value;
  }
  public resetOtpPolicy() {
    this._otpPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpPolicyInput() {
    return this._otpPolicy.internalValue;
  }

  // security_defenses - computed: false, optional: true, required: false
  private _securityDefenses = new RealmSecurityDefensesOutputReference(this, "security_defenses");
  public get securityDefenses() {
    return this._securityDefenses;
  }
  public putSecurityDefenses(value: RealmSecurityDefenses) {
    this._securityDefenses.internalValue = value;
  }
  public resetSecurityDefenses() {
    this._securityDefenses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityDefensesInput() {
    return this._securityDefenses.internalValue;
  }

  // smtp_server - computed: false, optional: true, required: false
  private _smtpServer = new RealmSmtpServerOutputReference(this, "smtp_server");
  public get smtpServer() {
    return this._smtpServer;
  }
  public putSmtpServer(value: RealmSmtpServer) {
    this._smtpServer.internalValue = value;
  }
  public resetSmtpServer() {
    this._smtpServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpServerInput() {
    return this._smtpServer.internalValue;
  }

  // web_authn_passwordless_policy - computed: false, optional: true, required: false
  private _webAuthnPasswordlessPolicy = new RealmWebAuthnPasswordlessPolicyOutputReference(this, "web_authn_passwordless_policy");
  public get webAuthnPasswordlessPolicy() {
    return this._webAuthnPasswordlessPolicy;
  }
  public putWebAuthnPasswordlessPolicy(value: RealmWebAuthnPasswordlessPolicy) {
    this._webAuthnPasswordlessPolicy.internalValue = value;
  }
  public resetWebAuthnPasswordlessPolicy() {
    this._webAuthnPasswordlessPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAuthnPasswordlessPolicyInput() {
    return this._webAuthnPasswordlessPolicy.internalValue;
  }

  // web_authn_policy - computed: false, optional: true, required: false
  private _webAuthnPolicy = new RealmWebAuthnPolicyOutputReference(this, "web_authn_policy");
  public get webAuthnPolicy() {
    return this._webAuthnPolicy;
  }
  public putWebAuthnPolicy(value: RealmWebAuthnPolicy) {
    this._webAuthnPolicy.internalValue = value;
  }
  public resetWebAuthnPolicy() {
    this._webAuthnPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webAuthnPolicyInput() {
    return this._webAuthnPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_code_lifespan: cdktf.stringToTerraform(this._accessCodeLifespan),
      access_code_lifespan_login: cdktf.stringToTerraform(this._accessCodeLifespanLogin),
      access_code_lifespan_user_action: cdktf.stringToTerraform(this._accessCodeLifespanUserAction),
      access_token_lifespan: cdktf.stringToTerraform(this._accessTokenLifespan),
      access_token_lifespan_for_implicit_flow: cdktf.stringToTerraform(this._accessTokenLifespanForImplicitFlow),
      account_theme: cdktf.stringToTerraform(this._accountTheme),
      action_token_generated_by_admin_lifespan: cdktf.stringToTerraform(this._actionTokenGeneratedByAdminLifespan),
      action_token_generated_by_user_lifespan: cdktf.stringToTerraform(this._actionTokenGeneratedByUserLifespan),
      admin_theme: cdktf.stringToTerraform(this._adminTheme),
      attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._attributes),
      browser_flow: cdktf.stringToTerraform(this._browserFlow),
      client_authentication_flow: cdktf.stringToTerraform(this._clientAuthenticationFlow),
      client_session_idle_timeout: cdktf.stringToTerraform(this._clientSessionIdleTimeout),
      client_session_max_lifespan: cdktf.stringToTerraform(this._clientSessionMaxLifespan),
      default_default_client_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultDefaultClientScopes),
      default_optional_client_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultOptionalClientScopes),
      default_signature_algorithm: cdktf.stringToTerraform(this._defaultSignatureAlgorithm),
      direct_grant_flow: cdktf.stringToTerraform(this._directGrantFlow),
      display_name: cdktf.stringToTerraform(this._displayName),
      display_name_html: cdktf.stringToTerraform(this._displayNameHtml),
      docker_authentication_flow: cdktf.stringToTerraform(this._dockerAuthenticationFlow),
      duplicate_emails_allowed: cdktf.booleanToTerraform(this._duplicateEmailsAllowed),
      edit_username_allowed: cdktf.booleanToTerraform(this._editUsernameAllowed),
      email_theme: cdktf.stringToTerraform(this._emailTheme),
      enabled: cdktf.booleanToTerraform(this._enabled),
      first_broker_login_flow: cdktf.stringToTerraform(this._firstBrokerLoginFlow),
      id: cdktf.stringToTerraform(this._id),
      internal_id: cdktf.stringToTerraform(this._internalId),
      login_theme: cdktf.stringToTerraform(this._loginTheme),
      login_with_email_allowed: cdktf.booleanToTerraform(this._loginWithEmailAllowed),
      oauth2_device_code_lifespan: cdktf.stringToTerraform(this._oauth2DeviceCodeLifespan),
      oauth2_device_polling_interval: cdktf.numberToTerraform(this._oauth2DevicePollingInterval),
      offline_session_idle_timeout: cdktf.stringToTerraform(this._offlineSessionIdleTimeout),
      offline_session_max_lifespan: cdktf.stringToTerraform(this._offlineSessionMaxLifespan),
      offline_session_max_lifespan_enabled: cdktf.booleanToTerraform(this._offlineSessionMaxLifespanEnabled),
      organizations_enabled: cdktf.booleanToTerraform(this._organizationsEnabled),
      password_policy: cdktf.stringToTerraform(this._passwordPolicy),
      realm: cdktf.stringToTerraform(this._realm),
      refresh_token_max_reuse: cdktf.numberToTerraform(this._refreshTokenMaxReuse),
      registration_allowed: cdktf.booleanToTerraform(this._registrationAllowed),
      registration_email_as_username: cdktf.booleanToTerraform(this._registrationEmailAsUsername),
      registration_flow: cdktf.stringToTerraform(this._registrationFlow),
      remember_me: cdktf.booleanToTerraform(this._rememberMe),
      reset_credentials_flow: cdktf.stringToTerraform(this._resetCredentialsFlow),
      reset_password_allowed: cdktf.booleanToTerraform(this._resetPasswordAllowed),
      revoke_refresh_token: cdktf.booleanToTerraform(this._revokeRefreshToken),
      ssl_required: cdktf.stringToTerraform(this._sslRequired),
      sso_session_idle_timeout: cdktf.stringToTerraform(this._ssoSessionIdleTimeout),
      sso_session_idle_timeout_remember_me: cdktf.stringToTerraform(this._ssoSessionIdleTimeoutRememberMe),
      sso_session_max_lifespan: cdktf.stringToTerraform(this._ssoSessionMaxLifespan),
      sso_session_max_lifespan_remember_me: cdktf.stringToTerraform(this._ssoSessionMaxLifespanRememberMe),
      user_managed_access: cdktf.booleanToTerraform(this._userManagedAccess),
      verify_email: cdktf.booleanToTerraform(this._verifyEmail),
      internationalization: realmInternationalizationToTerraform(this._internationalization.internalValue),
      otp_policy: realmOtpPolicyToTerraform(this._otpPolicy.internalValue),
      security_defenses: realmSecurityDefensesToTerraform(this._securityDefenses.internalValue),
      smtp_server: realmSmtpServerToTerraform(this._smtpServer.internalValue),
      web_authn_passwordless_policy: realmWebAuthnPasswordlessPolicyToTerraform(this._webAuthnPasswordlessPolicy.internalValue),
      web_authn_policy: realmWebAuthnPolicyToTerraform(this._webAuthnPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_code_lifespan: {
        value: cdktf.stringToHclTerraform(this._accessCodeLifespan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_code_lifespan_login: {
        value: cdktf.stringToHclTerraform(this._accessCodeLifespanLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_code_lifespan_user_action: {
        value: cdktf.stringToHclTerraform(this._accessCodeLifespanUserAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_token_lifespan: {
        value: cdktf.stringToHclTerraform(this._accessTokenLifespan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_token_lifespan_for_implicit_flow: {
        value: cdktf.stringToHclTerraform(this._accessTokenLifespanForImplicitFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_theme: {
        value: cdktf.stringToHclTerraform(this._accountTheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_token_generated_by_admin_lifespan: {
        value: cdktf.stringToHclTerraform(this._actionTokenGeneratedByAdminLifespan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      action_token_generated_by_user_lifespan: {
        value: cdktf.stringToHclTerraform(this._actionTokenGeneratedByUserLifespan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      admin_theme: {
        value: cdktf.stringToHclTerraform(this._adminTheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._attributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      browser_flow: {
        value: cdktf.stringToHclTerraform(this._browserFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_authentication_flow: {
        value: cdktf.stringToHclTerraform(this._clientAuthenticationFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      default_default_client_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultDefaultClientScopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default_optional_client_scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultOptionalClientScopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      default_signature_algorithm: {
        value: cdktf.stringToHclTerraform(this._defaultSignatureAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      direct_grant_flow: {
        value: cdktf.stringToHclTerraform(this._directGrantFlow),
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
      display_name_html: {
        value: cdktf.stringToHclTerraform(this._displayNameHtml),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      docker_authentication_flow: {
        value: cdktf.stringToHclTerraform(this._dockerAuthenticationFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duplicate_emails_allowed: {
        value: cdktf.booleanToHclTerraform(this._duplicateEmailsAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      edit_username_allowed: {
        value: cdktf.booleanToHclTerraform(this._editUsernameAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      email_theme: {
        value: cdktf.stringToHclTerraform(this._emailTheme),
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
      first_broker_login_flow: {
        value: cdktf.stringToHclTerraform(this._firstBrokerLoginFlow),
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
      internal_id: {
        value: cdktf.stringToHclTerraform(this._internalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_theme: {
        value: cdktf.stringToHclTerraform(this._loginTheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_with_email_allowed: {
        value: cdktf.booleanToHclTerraform(this._loginWithEmailAllowed),
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
        value: cdktf.numberToHclTerraform(this._oauth2DevicePollingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      offline_session_idle_timeout: {
        value: cdktf.stringToHclTerraform(this._offlineSessionIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offline_session_max_lifespan: {
        value: cdktf.stringToHclTerraform(this._offlineSessionMaxLifespan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offline_session_max_lifespan_enabled: {
        value: cdktf.booleanToHclTerraform(this._offlineSessionMaxLifespanEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      organizations_enabled: {
        value: cdktf.booleanToHclTerraform(this._organizationsEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password_policy: {
        value: cdktf.stringToHclTerraform(this._passwordPolicy),
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
      refresh_token_max_reuse: {
        value: cdktf.numberToHclTerraform(this._refreshTokenMaxReuse),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      registration_allowed: {
        value: cdktf.booleanToHclTerraform(this._registrationAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      registration_email_as_username: {
        value: cdktf.booleanToHclTerraform(this._registrationEmailAsUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      registration_flow: {
        value: cdktf.stringToHclTerraform(this._registrationFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remember_me: {
        value: cdktf.booleanToHclTerraform(this._rememberMe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reset_credentials_flow: {
        value: cdktf.stringToHclTerraform(this._resetCredentialsFlow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reset_password_allowed: {
        value: cdktf.booleanToHclTerraform(this._resetPasswordAllowed),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      revoke_refresh_token: {
        value: cdktf.booleanToHclTerraform(this._revokeRefreshToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssl_required: {
        value: cdktf.stringToHclTerraform(this._sslRequired),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_session_idle_timeout: {
        value: cdktf.stringToHclTerraform(this._ssoSessionIdleTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_session_idle_timeout_remember_me: {
        value: cdktf.stringToHclTerraform(this._ssoSessionIdleTimeoutRememberMe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_session_max_lifespan: {
        value: cdktf.stringToHclTerraform(this._ssoSessionMaxLifespan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso_session_max_lifespan_remember_me: {
        value: cdktf.stringToHclTerraform(this._ssoSessionMaxLifespanRememberMe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_managed_access: {
        value: cdktf.booleanToHclTerraform(this._userManagedAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      verify_email: {
        value: cdktf.booleanToHclTerraform(this._verifyEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      internationalization: {
        value: realmInternationalizationToHclTerraform(this._internationalization.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RealmInternationalizationList",
      },
      otp_policy: {
        value: realmOtpPolicyToHclTerraform(this._otpPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RealmOtpPolicyList",
      },
      security_defenses: {
        value: realmSecurityDefensesToHclTerraform(this._securityDefenses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RealmSecurityDefensesList",
      },
      smtp_server: {
        value: realmSmtpServerToHclTerraform(this._smtpServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RealmSmtpServerList",
      },
      web_authn_passwordless_policy: {
        value: realmWebAuthnPasswordlessPolicyToHclTerraform(this._webAuthnPasswordlessPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RealmWebAuthnPasswordlessPolicyList",
      },
      web_authn_policy: {
        value: realmWebAuthnPolicyToHclTerraform(this._webAuthnPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RealmWebAuthnPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
